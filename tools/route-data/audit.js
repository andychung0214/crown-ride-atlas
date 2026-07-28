"use strict";

(function (root, factory) {
  const api = factory(root);
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { RouteAudit: api });
  }
})(typeof window !== "undefined" ? window : globalThis, function (root) {
  function queryParams(search) {
    return new URLSearchParams(typeof search === "string" ? search : "");
  }

  function selectAuditRoutes(routes, search, manifest) {
    const source = Array.isArray(routes) ? routes : [];
    const params = queryParams(search);
    const routeId = params.get("route");
    if (routeId) return source.filter(route => route.id === routeId);
    const regions = new Set((params.get("regions") || "").split(",").filter(Boolean));
    return regions.size
      ? source.filter(route => {
        const manifestEntry = manifest && manifest[route.id];
        return regions.has(manifestEntry && manifestEntry.bundleId || route.regionId);
      })
      : source;
  }

  function elevationAnalysisText(source) {
    const analysis = source && source.elevationAnalysis;
    if (!analysis) return "";
    return `海拔平滑 ${analysis.smoothingWindowM}m／坡度視窗 ${analysis.gradeWindowM}m`
      + `｜${analysis.reason}｜交叉檢核：${analysis.referenceLabel}｜未匯入外部 GPX`;
  }

  function buildAuditModel(route, track) {
    if (!route || !track || track.routeId !== route.id
      || !Array.isArray(track.coordinates) || track.coordinates.length < 2) {
      throw new TypeError("稽核資料缺少相符路線軌跡。");
    }
    const coordinates = track.coordinates.filter(point => (
      point && Number.isFinite(point.lat) && Number.isFinite(point.lng)
    ));
    if (coordinates.length < 2) throw new TypeError("稽核軌跡至少需要兩個有效座標。");
    const latitudes = coordinates.map(point => point.lat);
    const longitudes = coordinates.map(point => point.lng);
    return {
      routeId: route.id,
      routeName: route.name,
      regionId: route.regionId,
      coordinateCount: coordinates.length,
      coordinates,
      waypoints: Array.isArray(track.waypoints) ? track.waypoints.slice() : [],
      summary: track.summary || {},
      climbs: Array.isArray(track.climbs) ? track.climbs.slice() : [],
      source: track.source || {},
      elevationAnalysisText: elevationAnalysisText(track.source),
      bounds: [
        [Math.min(...latitudes), Math.min(...longitudes)],
        [Math.max(...latitudes), Math.max(...longitudes)]
      ]
    };
  }

  function node(documentRef, name, text, className) {
    const element = documentRef.createElement(name);
    if (text !== undefined) element.textContent = text;
    if (className) element.className = className;
    return element;
  }

  function formatNumber(value, digits) {
    return Number.isFinite(value) ? Number(value).toFixed(digits) : "—";
  }

  function elevationPath(coordinates, width, height, padding) {
    const points = coordinates.filter(point => (
      Number.isFinite(point.distanceKm) && Number.isFinite(point.smoothedEle ?? point.ele)
    ));
    if (points.length < 2) return "";
    const maximumDistance = Math.max(...points.map(point => point.distanceKm), 0.001);
    const elevations = points.map(point => point.smoothedEle ?? point.ele);
    const minimumElevation = Math.min(...elevations);
    const maximumElevation = Math.max(...elevations);
    const elevationSpan = maximumElevation - minimumElevation || 1;
    return points.map((point, index) => {
      const x = padding + point.distanceKm / maximumDistance * (width - padding * 2);
      const y = height - padding
        - ((point.smoothedEle ?? point.ele) - minimumElevation) / elevationSpan * (height - padding * 2);
      return `${index ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ");
  }

  function loadScript(documentRef, src) {
    return new Promise((resolve, reject) => {
      const script = documentRef.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`無法載入 staging bundle：${src}`));
      documentRef.head.append(script);
    });
  }

  async function mount(rootElement, options) {
    const documentRef = rootElement.ownerDocument;
    const routes = selectAuditRoutes(options.routes, options.search, options.manifest);
    const manifest = options.manifest;
    const registry = options.registry;
    const bundleIds = [...new Set(routes.map(route => manifest[route.id] && manifest[route.id].bundleId).filter(Boolean))];
    for (const bundleId of bundleIds) {
      await loadScript(documentRef, `./.staging/${bundleId}.js`);
    }

    const selector = rootElement.querySelector("[data-audit-route]");
    routes.forEach(route => {
      const option = node(documentRef, "option", `${route.regionName}｜${route.name}`);
      option.value = route.id;
      selector.append(option);
    });

    let map = null;
    function render(routeId) {
      const route = routes.find(candidate => candidate.id === routeId);
      const track = route && registry.get(route.id);
      const model = buildAuditModel(route, track);
      rootElement.querySelector("[data-audit-title]").textContent = `${model.routeName}｜${model.routeId}`;
      rootElement.querySelector("[data-audit-facts]").textContent = [
        `${formatNumber(model.summary.distanceKm, 1)} km`,
        `爬升 ${formatNumber(model.summary.elevationGainM, 0)} m`,
        `最高 ${formatNumber(model.summary.maximumElevationM, 0)} m`,
        `最大持續坡度 ${formatNumber(model.summary.maximumSustainedGradePct, 1)}%`,
        `${model.coordinateCount} 點`,
        `${model.climbs.length} 段主要爬坡`,
        `${model.source.router || "—"} / ${model.source.profile || "—"} / ${model.source.elevation || "—"}`,
        model.elevationAnalysisText || "預設海拔平滑 100m／坡度視窗 100m",
        `審查：${model.source.reviewStatus || "pending"}`
      ].join(" · ");
      const waypointList = rootElement.querySelector("[data-audit-waypoints]");
      waypointList.replaceChildren(...model.waypoints.map(waypoint => (
        node(documentRef, "li", `${waypoint.role}｜${waypoint.name}｜${waypoint.lat.toFixed(6)}, ${waypoint.lng.toFixed(6)}`)
      )));
      const path = rootElement.querySelector("[data-audit-elevation-path]");
      path.setAttribute("d", elevationPath(model.coordinates, 900, 220, 20));

      if (!root.L) throw new Error("Leaflet 尚未載入，無法進行 OSM 疊圖稽核。");
      if (map) map.remove();
      map = root.L.map(rootElement.querySelector("[data-audit-map]"));
      root.L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors"
      }).addTo(map);
      root.L.polyline(model.coordinates.map(point => [point.lat, point.lng]), {
        color: "#16824b",
        weight: 5,
        opacity: 0.92
      }).addTo(map);
      model.waypoints.forEach(waypoint => {
        root.L.marker([waypoint.lat, waypoint.lng])
          .bindTooltip(`${waypoint.role}｜${waypoint.name}`)
          .addTo(map);
      });
      map.fitBounds(model.bounds, { padding: [24, 24] });
    }

    selector.addEventListener("change", () => render(selector.value));
    if (routes[0]) {
      selector.value = queryParams(options.search).get("route") || routes[0].id;
      render(selector.value);
    }
    return { routeCount: routes.length, destroy() { if (map) map.remove(); } };
  }

  function boot() {
    const rootElement = root.document && root.document.querySelector("[data-audit-root]");
    const app = root.CrownRideAtlas;
    if (!rootElement || !app) return;
    mount(rootElement, {
      routes: app.Data.routes,
      manifest: app.TrackManifest,
      registry: app.TrackRegistry,
      search: root.location.search
    }).catch(error => {
      rootElement.querySelector("[data-audit-status]").textContent = error.message;
    });
  }

  if (root.document) {
    if (root.document.readyState === "loading") {
      root.document.addEventListener("DOMContentLoaded", boot, { once: true });
    } else {
      boot();
    }
  }

  return { selectAuditRoutes, buildAuditModel, elevationAnalysisText, elevationPath, mount };
});
