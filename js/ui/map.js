"use strict";

(function (root, factory) {
  const Geo = typeof module === "object" && module.exports
    ? require("../core/geo.js")
    : root.CrownRideAtlas.Geo;
  const api = factory(Geo);

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      MapView: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function (Geo) {
  const SVG_NS = "http://www.w3.org/2000/svg";

  function round(value) {
    return Number(value.toFixed(2));
  }

  function buildSvgPath(coordinates, width, height, padding) {
    const points = Geo.normalizeToSvg(coordinates, width, height, padding);
    return points.map((point, index) => {
      const command = index === 0 ? "M" : "L";
      return `${command} ${round(point.x)} ${round(point.y)}`;
    }).join(" ");
  }

  function buildElevationPath(coordinates, width, height, padding) {
    const source = (Array.isArray(coordinates) ? coordinates : [])
      .map(point => Number(point.ele))
      .filter(Number.isFinite);
    if (source.length === 0) return "";

    const safeWidth = Number(width) || 1;
    const safeHeight = Number(height) || 1;
    const safePadding = Math.max(0, Number(padding) || 0);
    const minimum = Math.min(...source);
    const maximum = Math.max(...source);
    const span = maximum - minimum;
    const drawingWidth = safeWidth - safePadding * 2;
    const drawingHeight = safeHeight - safePadding * 2;

    return source.map((elevation, index) => {
      const x = source.length === 1
        ? safeWidth / 2
        : safePadding + index / (source.length - 1) * drawingWidth;
      const y = span === 0
        ? safeHeight / 2
        : safePadding + (maximum - elevation) / span * drawingHeight;
      return `${index === 0 ? "M" : "L"} ${round(x)} ${round(y)}`;
    }).join(" ");
  }

  function svgElement(documentRef, name, attributes) {
    const node = documentRef.createElementNS(SVG_NS, name);
    Object.entries(attributes || {}).forEach(([key, value]) => node.setAttribute(key, String(value)));
    return node;
  }

  function mountSvg(element, route) {
    const documentRef = element.ownerDocument;
    const width = 900;
    const height = 460;
    const svg = svgElement(documentRef, "svg", {
      class: "route-map__svg",
      viewBox: `0 0 ${width} ${height}`,
      role: "img",
      "aria-labelledby": `map-title-${route.id}`
    });
    const title = svgElement(documentRef, "title", { id: `map-title-${route.id}` });
    title.textContent = `${route.name}路線輪廓`;
    const contours = svgElement(documentRef, "g", {
      class: "route-map__contours",
      "aria-hidden": "true"
    });

    [
      "M -40 350 C 140 260 230 420 430 300 S 760 170 960 260",
      "M -30 265 C 170 170 285 330 470 225 S 760 90 950 170",
      "M -20 175 C 150 110 310 220 480 145 S 720 30 940 75"
    ].forEach(data => contours.append(svgElement(documentRef, "path", { d: data })));

    const routePath = buildSvgPath(route.coordinates, width, height, 52);
    const halo = svgElement(documentRef, "path", {
      class: "route-map__line-halo",
      d: routePath
    });
    const line = svgElement(documentRef, "path", {
      class: "route-map__line",
      d: routePath
    });
    const normalized = Geo.normalizeToSvg(route.coordinates, width, height, 52);

    svg.append(title, contours, halo, line);
    if (normalized.length > 0) {
      svg.append(
        svgElement(documentRef, "circle", {
          class: "route-map__point route-map__point--start",
          cx: round(normalized[0].x),
          cy: round(normalized[0].y),
          r: 9
        }),
        svgElement(documentRef, "circle", {
          class: "route-map__point route-map__point--finish",
          cx: round(normalized[normalized.length - 1].x),
          cy: round(normalized[normalized.length - 1].y),
          r: 9
        })
      );
    }

    const note = documentRef.createElement("p");
    note.className = "route-map__fallback-note";
    note.textContent = "目前顯示離線路線輪廓；使用靜態伺服器並連線網路可檢視互動地圖。";
    element.replaceChildren(svg, note);
    element.dataset.mapMode = "svg";
    return { destroy() {} };
  }

  function mountLeaflet(element, route, leaflet) {
    element.replaceChildren();
    const points = route.coordinates.map(point => [point.lat, point.lng]);
    const map = leaflet.map(element, {
      scrollWheelZoom: false,
      zoomControl: true
    });
    leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    const line = leaflet.polyline(points, {
      color: getComputedStyle(element).getPropertyValue("--color-accent").trim() || "#F5D547",
      weight: 5,
      opacity: 0.95
    }).addTo(map);
    map.fitBounds(line.getBounds(), { padding: [24, 24] });
    element.dataset.mapMode = "leaflet";

    return {
      destroy() {
        map.remove();
      }
    };
  }

  function mount(element, route) {
    const browserWindow = element && element.ownerDocument && element.ownerDocument.defaultView;
    if (!element || !route) return { destroy() {} };

    if (
      browserWindow &&
      browserWindow.L &&
      browserWindow.location &&
      browserWindow.location.protocol !== "file:"
    ) {
      try {
        return mountLeaflet(element, route, browserWindow.L);
      } catch (_error) {
        return mountSvg(element, route);
      }
    }

    return mountSvg(element, route);
  }

  function mountElevation(element, route) {
    const documentRef = element.ownerDocument;
    const svg = svgElement(documentRef, "svg", {
      class: "elevation-chart__svg",
      viewBox: "0 0 900 180",
      role: "img",
      "aria-label": `${route.name}海拔剖面`
    });
    const pathData = buildElevationPath(route.coordinates, 900, 180, 18);
    const area = svgElement(documentRef, "path", {
      class: "elevation-chart__area",
      d: pathData ? `${pathData} L 882 172 L 18 172 Z` : ""
    });
    const line = svgElement(documentRef, "path", {
      class: "elevation-chart__line",
      d: pathData
    });
    svg.append(area, line);
    element.replaceChildren(svg);
  }

  return {
    buildSvgPath,
    buildElevationPath,
    mount,
    mountElevation
  };
});

