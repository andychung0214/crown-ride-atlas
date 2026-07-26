"use strict";

(function (root, factory) {
  const Geo = typeof module === "object" && module.exports
    ? require("../core/geo.js")
    : root.CrownRideAtlas.Geo;
  const TrackAnalysis = typeof module === "object" && module.exports
    ? require("../core/track-analysis.js")
    : root.CrownRideAtlas.TrackAnalysis;
  const api = factory(Geo, TrackAnalysis);

  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { MapView: api });
})(typeof window !== "undefined" ? window : globalThis, function (Geo, TrackAnalysis) {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const PROFILE_WIDTH = 900;
  const PROFILE_HEIGHT = 210;
  const PROFILE_PADDING = { top: 24, right: 22, bottom: 34, left: 50 };

  function round(value) {
    return Number(Number(value).toFixed(2));
  }

  function routeCoordinates(route) {
    return Array.isArray(route && route.coordinates) ? route.coordinates : [];
  }

  function profileCoordinates(track) {
    const hydrated = TrackAnalysis && typeof TrackAnalysis.hydrateTrack === "function"
      ? TrackAnalysis.hydrateTrack(track)
      : track;
    const source = routeCoordinates(hydrated);
    let distanceKm = 0;
    let previous = null;
    return source.reduce((points, sourcePoint) => {
      if (!sourcePoint || !Number.isFinite(sourcePoint.ele)) return points;
      const hasCoordinates = Geo.isCoordinate(sourcePoint);
      if (previous && hasCoordinates && Geo.isCoordinate(previous)) distanceKm += Geo.haversineKm(previous, sourcePoint);
      else if (points.length && !Number.isFinite(sourcePoint.distanceKm)) distanceKm += 1;
      const pointDistance = Number.isFinite(sourcePoint.distanceKm) ? sourcePoint.distanceKm : distanceKm;
      points.push(Object.assign({}, sourcePoint, {
        distanceKm: pointDistance,
        displayEle: Number.isFinite(sourcePoint.smoothedEle) ? sourcePoint.smoothedEle : sourcePoint.ele
      }));
      previous = hasCoordinates ? sourcePoint : null;
      return points;
    }, []);
  }

  function normalizePadding(padding, width, height) {
    if (typeof padding === "object" && padding) {
      return {
        top: Math.max(0, Number(padding.top) || 0),
        right: Math.max(0, Number(padding.right) || 0),
        bottom: Math.max(0, Number(padding.bottom) || 0),
        left: Math.max(0, Number(padding.left) || 0)
      };
    }
    const value = Math.max(0, Number(padding) || 0);
    return { top: value, right: value, bottom: value, left: value };
  }

  function buildElevationModel(track, width, height, padding) {
    const safeWidth = Math.max(1, Number(width) || 1);
    const safeHeight = Math.max(1, Number(height) || 1);
    const safePadding = normalizePadding(padding, safeWidth, safeHeight);
    const coordinates = profileCoordinates(track);
    if (!coordinates.length) return { points: [], width: safeWidth, height: safeHeight, padding: safePadding };
    const elevations = coordinates.map(point => point.displayEle);
    const minimumElevationM = Math.min(...elevations);
    const maximumElevationM = Math.max(...elevations);
    const maximumDistanceKm = Math.max(0, ...coordinates.map(point => point.distanceKm));
    const drawingWidth = Math.max(1, safeWidth - safePadding.left - safePadding.right);
    const drawingHeight = Math.max(1, safeHeight - safePadding.top - safePadding.bottom);
    const elevationSpan = maximumElevationM - minimumElevationM;

    return {
      width: safeWidth,
      height: safeHeight,
      padding: safePadding,
      minimumElevationM,
      maximumElevationM,
      maximumDistanceKm,
      points: coordinates.map(point => Object.assign({}, point, {
        x: round(maximumDistanceKm === 0
          ? safePadding.left + drawingWidth / 2
          : safePadding.left + point.distanceKm / maximumDistanceKm * drawingWidth),
        y: round(elevationSpan === 0
          ? safePadding.top + drawingHeight / 2
          : safePadding.top + (maximumElevationM - point.displayEle) / elevationSpan * drawingHeight)
      }))
    };
  }

  function buildElevationPath(coordinates, width, height, padding) {
    const model = buildElevationModel({ coordinates }, width, height, padding);
    return model.points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  }

  function gradeBand(point) {
    if (point && typeof point.gradeBand === "string") return point.gradeBand;
    return TrackAnalysis && typeof TrackAnalysis.gradeBand === "function"
      ? TrackAnalysis.gradeBand(point && point.gradePct)
      : "moderate";
  }

  function gradeColorBand(point) {
    const grade = Number(point && point.gradePct);
    if (!Number.isFinite(grade) || grade < 0) return "descent";
    if (grade <= 3) return "moderate";
    if (grade <= 6) return "hard";
    if (grade <= 9) return "steep";
    if (grade < 12) return "severe";
    return "extreme";
  }

  function buildProfileSegments(track, width, height, padding) {
    const model = buildElevationModel(track, width, height, padding);
    return model.points.slice(1).map((point, index) => {
      const previous = model.points[index];
      return {
        gradeBand: gradeBand(point),
        colorBand: gradeColorBand(point),
        path: `M ${previous.x} ${previous.y} L ${point.x} ${point.y}`,
        start: previous,
        end: point
      };
    });
  }

  function findNearestProfilePoint(track, distanceKm) {
    const points = profileCoordinates(track);
    if (!points.length) return null;
    const target = Number(distanceKm);
    if (!Number.isFinite(target)) return points[0];
    return points.reduce((nearest, point) => (
      Math.abs(point.distanceKm - target) < Math.abs(nearest.distanceKm - target) ? point : nearest
    ));
  }

  function bearingDegrees(start, finish) {
    if (!Geo.isCoordinate(start) || !Geo.isCoordinate(finish)) return 0;
    const toRadians = value => value * Math.PI / 180;
    const latitudeA = toRadians(start.lat);
    const latitudeB = toRadians(finish.lat);
    const longitudeDelta = toRadians(finish.lng - start.lng);
    const y = Math.sin(longitudeDelta) * Math.cos(latitudeB);
    const x = Math.cos(latitudeA) * Math.sin(latitudeB)
      - Math.sin(latitudeA) * Math.cos(latitudeB) * Math.cos(longitudeDelta);
    return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
  }

  function selectDirectionMarkers(coordinates, intervalKm) {
    const points = (Array.isArray(coordinates) ? coordinates : [])
      .map((point, index) => ({ point, index }))
      .filter(entry => Geo.isCoordinate(entry.point));
    if (points.length < 2) return points.map(entry => entry.point);
    const interval = Math.max(0.1, Number(intervalKm) || 2);
    const markerWithHeading = (entry, position) => Object.assign({}, entry.point, {
      headingDeg: bearingDegrees(points[Math.max(0, position - 1)].point, points[Math.min(points.length - 1, position + 1)].point)
    });
    const markers = [points[0].point];
    let markerDistance = Number(points[0].point.distanceKm) || 0;
    points.slice(1, -1).forEach((entry, offset) => {
      const distanceKm = Number(entry.point.distanceKm);
      if (Number.isFinite(distanceKm) && distanceKm - markerDistance >= interval) {
        markers.push(markerWithHeading(entry, offset + 1));
        markerDistance = distanceKm;
      }
    });
    markers.push(points[points.length - 1].point);
    return markers;
  }

  function buildRouteMarkers(route) {
    const coordinates = routeCoordinates(route).filter(Geo.isCoordinate);
    if (!coordinates.length) return [];
    const waypoints = (Array.isArray(route && route.waypoints) ? route.waypoints : []).filter(Geo.isCoordinate);
    const startWaypoint = waypoints.find(waypoint => waypoint.role === "start");
    const finishWaypoint = waypoints.find(waypoint => waypoint.role === "finish");
    const isLoop = Geo.haversineKm(coordinates[0], coordinates[coordinates.length - 1]) < 0.02;
    const markers = isLoop
      ? [Object.assign({ kind: "start-finish", label: `${startWaypoint && startWaypoint.name || "起點"}／${finishWaypoint && finishWaypoint.name || "終點"}` }, coordinates[0])]
      : [
        Object.assign({ kind: "start", label: startWaypoint && startWaypoint.name || "起點" }, coordinates[0]),
        Object.assign({ kind: "finish", label: finishWaypoint && finishWaypoint.name || "終點" }, coordinates[coordinates.length - 1])
      ];
    waypoints.forEach(waypoint => {
      if (waypoint.role === "start" || waypoint.role === "finish") return;
      markers.push({ kind: "waypoint", label: waypoint.name || "途經點", lat: waypoint.lat, lng: waypoint.lng });
    });
    return markers;
  }

  function buildSvgPath(coordinates, width, height, padding) {
    const points = Geo.normalizeToSvg(coordinates, width, height, padding);
    return points.map((point, index) => `${index === 0 ? "M" : "L"} ${round(point.x)} ${round(point.y)}`).join(" ");
  }

  function svgElement(documentRef, name, attributes) {
    const node = documentRef.createElementNS(SVG_NS, name);
    Object.entries(attributes || {}).forEach(([key, value]) => node.setAttribute(key, String(value)));
    return node;
  }

  function projectMapPoint(coordinates, point, width, height, padding) {
    const all = coordinates.filter(Geo.isCoordinate);
    const latitudes = all.map(item => item.lat);
    const longitudes = all.map(item => item.lng);
    const minimumLatitude = Math.min(...latitudes);
    const maximumLatitude = Math.max(...latitudes);
    const minimumLongitude = Math.min(...longitudes);
    const maximumLongitude = Math.max(...longitudes);
    const safePadding = Number(padding) || 0;
    return {
      x: safePadding + (point.lng - minimumLongitude) / (maximumLongitude - minimumLongitude || 1) * (width - safePadding * 2),
      y: safePadding + (maximumLatitude - point.lat) / (maximumLatitude - minimumLatitude || 1) * (height - safePadding * 2)
    };
  }

  function appendSvgMapMarkers(svg, route, width, height, padding) {
    const coordinates = routeCoordinates(route).filter(Geo.isCoordinate);
    const markerCoordinates = coordinates.concat((route.waypoints || []).filter(Geo.isCoordinate));
    if (!coordinates.length) return;
    buildRouteMarkers(route).forEach(marker => {
      const point = projectMapPoint(markerCoordinates, marker, width, height, padding);
      const circle = svgElement(svg.ownerDocument, "circle", {
        class: `route-map__point route-map__point--${marker.kind}`,
        cx: round(point.x), cy: round(point.y), r: marker.kind === "waypoint" ? 5 : 8
      });
      const title = svgElement(svg.ownerDocument, "title", {});
      title.textContent = marker.label;
      circle.append(title);
      svg.append(circle);
    });
    selectDirectionMarkers(coordinates, 2).slice(1, -1).forEach(marker => {
      const point = projectMapPoint(markerCoordinates, marker, width, height, padding);
      svg.append(svgElement(svg.ownerDocument, "path", {
        class: "route-map__direction", d: `M ${round(point.x)} ${round(point.y - 6)} L ${round(point.x + 5)} ${round(point.y + 5)} L ${round(point.x - 5)} ${round(point.y + 5)} Z`, transform: `rotate(${round(marker.headingDeg || 0)} ${round(point.x)} ${round(point.y)})`
      }));
    });
  }

  function mountSvg(element, route) {
    const documentRef = element.ownerDocument;
    const width = 900;
    const height = 460;
    const svg = svgElement(documentRef, "svg", { class: "route-map__svg", viewBox: `0 0 ${width} ${height}`, role: "img", "aria-labelledby": `map-title-${route.id}` });
    const title = svgElement(documentRef, "title", { id: `map-title-${route.id}` });
    title.textContent = `${route.name}路線輪廓`;
    const contours = svgElement(documentRef, "g", { class: "route-map__contours", "aria-hidden": "true" });
    ["M -40 350 C 140 260 230 420 430 300 S 760 170 960 260", "M -30 265 C 170 170 285 330 470 225 S 760 90 950 170", "M -20 175 C 150 110 310 220 480 145 S 720 30 940 75"].forEach(data => contours.append(svgElement(documentRef, "path", { d: data })));
    const routePath = buildSvgPath(routeCoordinates(route), width, height, 52);
    svg.append(title, contours, svgElement(documentRef, "path", { class: "route-map__line-halo", d: routePath }), svgElement(documentRef, "path", { class: "route-map__line", d: routePath }));
    appendSvgMapMarkers(svg, route, width, height, 52);
    const note = documentRef.createElement("p");
    note.className = "route-map__fallback-note";
    note.textContent = "目前顯示離線路線輪廓；使用靜態伺服器並連線網路可檢視互動地圖。";
    element.replaceChildren(svg, note);
    element.dataset.mapMode = "svg";
    return { destroy() {} };
  }

  function addLeafletMarkers(leaflet, map, route) {
    if (typeof leaflet.circleMarker !== "function") return;
    const styles = { start: { color: "#19864a" }, finish: { color: "#c83e36" }, "start-finish": { color: "#1a5f8a" }, waypoint: { color: "#24271f" } };
    buildRouteMarkers(route).forEach(marker => {
      const layer = leaflet.circleMarker([marker.lat, marker.lng], Object.assign({ radius: marker.kind === "waypoint" ? 5 : 8, weight: 2, fillOpacity: 1 }, styles[marker.kind])).addTo(map);
      if (typeof layer.bindTooltip === "function") layer.bindTooltip(marker.label, { direction: "top" });
    });
    selectDirectionMarkers(routeCoordinates(route), 2).slice(1, -1).forEach(marker => {
      if (typeof leaflet.divIcon === "function" && typeof leaflet.marker === "function") {
        const icon = leaflet.divIcon({ className: "route-map__leaflet-direction", html: `<span style="transform:rotate(${round(marker.headingDeg || 0)}deg)">▲</span>` });
        leaflet.marker([marker.lat, marker.lng], { icon, interactive: false }).addTo(map);
      } else {
        leaflet.circleMarker([marker.lat, marker.lng], { className: "route-map__direction", radius: 4, weight: 1, color: "#24271f", fillOpacity: 0.9 }).addTo(map);
      }
    });
  }

  function mountLeaflet(element, route, leaflet, browserWindow) {
    element.replaceChildren();
    const points = routeCoordinates(route).map(point => [point.lat, point.lng]);
    const map = leaflet.map(element, { scrollWheelZoom: false, zoomControl: true });
    const tiles = leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap contributors" });
    leaflet.polyline(points, { color: "#f7f3e9", weight: 11, opacity: 0.94, lineCap: "round", lineJoin: "round" }).addTo(map);
    const line = leaflet.polyline(points, { color: browserWindow.getComputedStyle(element).getPropertyValue("--color-accent").trim() || "#F5D547", weight: 5, opacity: 0.95, lineCap: "round", lineJoin: "round" }).addTo(map);
    map.fitBounds(line.getBounds(), { padding: [24, 24] });
    addLeafletMarkers(leaflet, map, route);
    element.dataset.mapMode = "leaflet";
    let active = true;
    const handleTileError = () => {
      if (!active) return;
      active = false;
      if (typeof tiles.off === "function") tiles.off("tileerror", handleTileError);
      map.remove();
      mountSvg(element, route);
    };
    if (typeof tiles.on === "function") tiles.on("tileerror", handleTileError);
    tiles.addTo(map);
    return { destroy() { if (active) { active = false; if (typeof tiles.off === "function") tiles.off("tileerror", handleTileError); map.remove(); } } };
  }

  function mount(element, route) {
    const browserWindow = element && element.ownerDocument && element.ownerDocument.defaultView;
    if (!element || !route) return { destroy() {} };
    if (browserWindow && browserWindow.L && browserWindow.location && browserWindow.location.protocol !== "file:") {
      try { return mountLeaflet(element, route, browserWindow.L, browserWindow); } catch (_error) { return mountSvg(element, route); }
    }
    return mountSvg(element, route);
  }

  function formatProfileReadout(point) {
    const grade = Number(point && point.gradePct);
    const distanceKm = Number.isFinite(point && point.distanceKm) ? point.distanceKm : 0;
    const elevation = Number.isFinite(point && point.displayEle)
      ? point.displayEle
      : Number.isFinite(point && point.ele) ? point.ele : 0;
    return `${distanceKm.toFixed(1)} km · ${Math.round(elevation)} m · ${Number.isFinite(grade) ? grade.toFixed(1) : "0.0"}%`;
  }

  function profileDistanceForClientX(model, clientX, rect) {
    const width = Number(rect && rect.width) || model.width;
    const offset = Number(clientX) - (Number(rect && rect.left) || 0);
    const svgX = Math.max(0, Math.min(model.width, offset / width * model.width));
    const plotWidth = model.width - model.padding.left - model.padding.right;
    const clampedX = Math.max(model.padding.left, Math.min(model.width - model.padding.right, svgX));
    return plotWidth > 0 ? (clampedX - model.padding.left) / plotWidth * model.maximumDistanceKm : 0;
  }

  function appendProfileTicks(svg, model) {
    const bottom = model.height - model.padding.bottom;
    const left = model.padding.left;
    const right = model.width - model.padding.right;
    [0, 0.5, 1].forEach(ratio => {
      const y = round(model.padding.top + (bottom - model.padding.top) * ratio);
      const elevation = round(model.maximumElevationM - (model.maximumElevationM - model.minimumElevationM) * ratio);
      svg.append(svgElement(svg.ownerDocument, "line", { class: "elevation-chart__grid", x1: left, x2: right, y1: y, y2: y }));
      const label = svgElement(svg.ownerDocument, "text", { class: "elevation-chart__axis-label", x: left - 8, y: y + 3, "text-anchor": "end" });
      label.textContent = `${elevation}m`;
      svg.append(label);
    });
    const tickCount = Math.min(5, Math.max(2, Math.ceil(model.maximumDistanceKm)));
    for (let tick = 0; tick <= tickCount; tick += 1) {
      const distance = model.maximumDistanceKm * tick / tickCount;
      const x = round(left + (right - left) * tick / tickCount);
      svg.append(svgElement(svg.ownerDocument, "line", { class: "elevation-chart__tick", x1: x, x2: x, y1: bottom, y2: bottom + 4 }));
      const label = svgElement(svg.ownerDocument, "text", { class: "elevation-chart__axis-label", x, y: bottom + 18, "text-anchor": "middle" });
      label.textContent = `${distance.toFixed(distance < 10 ? 1 : 0)} km`;
      svg.append(label);
    }
  }

  function mountElevation(element, route, track) {
    const sourceTrack = track || (route && route.track) || route;
    const activeTrack = TrackAnalysis && typeof TrackAnalysis.hydrateTrack === "function"
      ? TrackAnalysis.hydrateTrack(sourceTrack)
      : sourceTrack;
    const documentRef = element.ownerDocument;
    const model = buildElevationModel(activeTrack, PROFILE_WIDTH, PROFILE_HEIGHT, PROFILE_PADDING);
    if (!model.points.length) {
      const note = documentRef.createElement("p");
      note.className = "elevation-chart__empty";
      note.textContent = "未提供海拔資料";
      element.replaceChildren(note);
      return;
    }
    const svg = svgElement(documentRef, "svg", { class: "elevation-chart__svg elevation-chart__interaction", viewBox: `0 0 ${PROFILE_WIDTH} ${PROFILE_HEIGHT}`, role: "img", tabindex: "0", "aria-describedby": `elevation-readout-${route.id}`, "aria-label": `${route.name}海拔與坡度剖面，可使用左右方向鍵查詢` });
    const bottom = PROFILE_HEIGHT - PROFILE_PADDING.bottom;
    const profilePath = model.points.map((point, index) => `${index ? "L" : "M"} ${point.x} ${point.y}`).join(" ");
    svg.append(svgElement(documentRef, "path", { class: "elevation-chart__area", d: `${profilePath} L ${model.points[model.points.length - 1].x} ${bottom} L ${model.points[0].x} ${bottom} Z` }));
    buildProfileSegments(activeTrack, PROFILE_WIDTH, PROFILE_HEIGHT, PROFILE_PADDING).forEach(segment => svg.append(svgElement(documentRef, "path", { class: `elevation-chart__segment elevation-chart__segment--${segment.colorBand}`, d: segment.path })));
    appendProfileTicks(svg, model);
    const crosshair = svgElement(documentRef, "line", { class: "elevation-chart__crosshair", x1: model.points[0].x, x2: model.points[0].x, y1: PROFILE_PADDING.top, y2: bottom, hidden: "hidden" });
    const marker = svgElement(documentRef, "circle", { class: "elevation-chart__cursor", cx: model.points[0].x, cy: model.points[0].y, r: 5, hidden: "hidden" });
    svg.append(crosshair, marker);
    const tooltip = documentRef.createElement("output");
    tooltip.className = "elevation-chart__tooltip";
    tooltip.id = `elevation-readout-${route.id}`;
    tooltip.setAttribute("aria-live", "polite");
    tooltip.textContent = "移動游標或使用左右方向鍵，查詢里程、海拔與坡度。";
    let activeIndex = 0;
    const setActivePoint = point => {
      const index = model.points.findIndex(candidate => candidate.distanceKm === point.distanceKm && candidate.ele === point.ele);
      activeIndex = index >= 0 ? index : activeIndex;
      const visualPoint = model.points[activeIndex];
      crosshair.setAttribute("x1", visualPoint.x); crosshair.setAttribute("x2", visualPoint.x); crosshair.removeAttribute("hidden");
      marker.setAttribute("cx", visualPoint.x); marker.setAttribute("cy", visualPoint.y); marker.removeAttribute("hidden");
      tooltip.textContent = formatProfileReadout(visualPoint);
      tooltip.className = "elevation-chart__tooltip is-visible";
    };
    const pointForEvent = event => {
      const rect = typeof svg.getBoundingClientRect === "function" ? svg.getBoundingClientRect() : { left: 0, width: PROFILE_WIDTH };
      const touch = event.touches && event.touches[0];
      const clientX = touch ? touch.clientX : event.clientX;
      return findNearestProfilePoint(activeTrack, profileDistanceForClientX(model, Number.isFinite(clientX) ? clientX : 0, rect));
    };
    if (typeof svg.addEventListener === "function") {
      svg.addEventListener("pointermove", event => setActivePoint(pointForEvent(event)));
      svg.addEventListener("touchstart", event => setActivePoint(pointForEvent(event)), { passive: true });
      svg.addEventListener("focus", () => setActivePoint(model.points[activeIndex]));
      svg.addEventListener("keydown", event => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        activeIndex = Math.max(0, Math.min(model.points.length - 1, activeIndex + (event.key === "ArrowRight" ? 1 : -1)));
        setActivePoint(model.points[activeIndex]);
      });
    }
    const legend = documentRef.createElement("p");
    legend.className = "elevation-chart__legend";
    legend.textContent = "坡度：下坡／0–3%／3–6%／6–9%／9–12%／12% 以上";
    element.replaceChildren(svg, tooltip, legend);
  }

  return { buildSvgPath, buildElevationPath, buildElevationModel, buildProfileSegments, findNearestProfilePoint, selectDirectionMarkers, buildRouteMarkers, profileDistanceForClientX, mount, mountElevation };
});
