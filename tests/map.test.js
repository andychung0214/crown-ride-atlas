"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const MapView = require("../js/ui/map.js");

test("SVG 路線路徑使用正規化座標", () => {
  const path = MapView.buildSvgPath(
    [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.2 }, { lat: 25.2, lng: 121.1 }],
    200,
    100,
    10
  );

  assert.match(path, /^M \d+(\.\d+)? \d+(\.\d+)? L /);
  assert.equal(path.split(" L ").length, 3);
});
test("空座標不產生 SVG 路徑", () => {
  assert.equal(MapView.buildSvgPath([], 200, 100, 10), "");
});

test("海拔剖面可處理固定海拔", () => {
  const path = MapView.buildElevationPath(
    [{ ele: 100 }, { ele: 100 }, { ele: 100 }],
    300,
    80,
    8
  );
  assert.equal(path, "M 8 40 L 150 40 L 292 40");
});

test("海拔模型以實際累積里程決定 X 軸，而非座標陣列索引", () => {
  const model = MapView.buildElevationModel({
    coordinates: [
      { distanceKm: 0, ele: 10, gradePct: 0 },
      { distanceKm: 10, ele: 30, gradePct: 4 },
      { distanceKm: 100, ele: 20, gradePct: -2 }
    ]
  }, 120, 80, 10);

  assert.deepEqual(model.points.map(point => point.x), [10, 20, 110]);
  assert.equal(model.points[1].distanceKm, 10);
});

test("海拔模型與提示優先使用平滑後海拔，而非原始高度", () => {
  const track = {
    coordinates: [
      { lat: 25, lng: 121, distanceKm: 0, ele: 20, smoothedEle: 100, gradePct: 0 },
      { lat: 25.01, lng: 121.01, distanceKm: 1, ele: 900, smoothedEle: 120, gradePct: 2 }
    ]
  };
  const model = MapView.buildElevationModel(track, 120, 80, 10);

  assert.deepEqual(model.points.map(point => point.displayEle), [100, 120]);
  assert.equal(model.maximumElevationM, 120);
});

test("本機上傳的上坡軌跡會衍生坡度而不是全部視為下坡", () => {
  const segments = MapView.buildProfileSegments({
    coordinates: [
      { lat: 25, lng: 121, ele: 0 },
      { lat: 25.0009, lng: 121, ele: 8 },
      { lat: 25.0018, lng: 121, ele: 16 }
    ]
  }, 300, 100, 10);

  assert.ok(segments.some(segment => segment.colorBand !== "descent"));
  assert.ok(segments.some(segment => segment.end.gradePct > 0));
});

test("海拔模型依既有坡度級距建立可讀的分色線段", () => {
  const segments = MapView.buildProfileSegments({
    coordinates: [
      { distanceKm: 0, ele: 10, gradePct: 0 },
      { distanceKm: 1, ele: 20, gradePct: 4 },
      { distanceKm: 2, ele: 35, gradePct: 7 },
      { distanceKm: 3, ele: 70, gradePct: 10 },
      { distanceKm: 4, ele: 50, gradePct: -3 }
    ]
  }, 420, 120, 12);

  assert.deepEqual(segments.map(segment => segment.gradeBand), ["hard", "steep", "extreme", "descent"]);
  assert.deepEqual(segments.map(segment => segment.colorBand), ["hard", "steep", "severe", "descent"]);
  assert.ok(segments.every(segment => /^M /.test(segment.path)));
});

test("12% 整數坡度使用紅色極限色帶", () => {
  const segments = MapView.buildProfileSegments({
    coordinates: [
      { distanceKm: 0, ele: 10, gradePct: 0 },
      { distanceKm: 1, ele: 130, gradePct: 12 }
    ]
  }, 120, 80, 10);

  assert.equal(segments[0].gradeBand, "extreme");
  assert.equal(segments[0].colorBand, "extreme");
});

test("海拔提示會尋找最接近的實際里程座標", () => {
  const point = MapView.findNearestProfilePoint({
    coordinates: [
      { distanceKm: 0, ele: 10 },
      { distanceKm: 1.2, ele: 40 },
      { distanceKm: 3.5, ele: 80 }
    ]
  }, 1.05);

  assert.equal(point.distanceKm, 1.2);
});

test("方向標記依里程間隔取樣，並保留起終點", () => {
  const markers = MapView.selectDirectionMarkers([
    { lat: 25, lng: 121, distanceKm: 0 },
    { lat: 25.01, lng: 121.01, distanceKm: 0.7 },
    { lat: 25.02, lng: 121.02, distanceKm: 1.4 },
    { lat: 25.03, lng: 121.03, distanceKm: 2.7 }
  ], 1);

  assert.deepEqual(markers.map(marker => marker.distanceKm), [0, 1.4, 2.7]);
});

test("方向標記依相鄰道路座標計算北向與西向方位", () => {
  const north = MapView.selectDirectionMarkers([
    { lat: 25, lng: 121, distanceKm: 0 },
    { lat: 25.01, lng: 121, distanceKm: 1 },
    { lat: 25.02, lng: 121, distanceKm: 2 }
  ], 0.5);
  const west = MapView.selectDirectionMarkers([
    { lat: 25, lng: 121.02, distanceKm: 0 },
    { lat: 25, lng: 121.01, distanceKm: 1 },
    { lat: 25, lng: 121, distanceKm: 2 }
  ], 0.5);

  assert.ok(Math.abs(north[1].headingDeg - 0) < 1);
  assert.ok(Math.abs(west[1].headingDeg - 270) < 1);
});

test("道路地圖標記包含起終點與人工途經地標", () => {
  const markers = MapView.buildRouteMarkers({
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }],
    waypoints: [{ name: "風櫃嘴", lat: 25.14, lng: 121.6, role: "via" }]
  });

  assert.deepEqual(markers.map(marker => marker.kind), ["start", "finish", "waypoint"]);
  assert.equal(markers[2].label, "風櫃嘴");
});

test("種子起終點名稱合併到主要標記，環線不重複標示", () => {
  const markers = MapView.buildRouteMarkers({
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.01, lng: 121.01 }, { lat: 25, lng: 121 }],
    waypoints: [
      { name: "劍潭起點", lat: 25, lng: 121, role: "start" },
      { name: "風櫃嘴", lat: 25.01, lng: 121.01, role: "via" },
      { name: "劍潭終點", lat: 25, lng: 121, role: "finish" }
    ]
  });

  assert.deepEqual(markers.map(marker => marker.kind), ["start-finish", "waypoint"]);
  assert.match(markers[0].label, /劍潭起點/);
  assert.match(markers[0].label, /劍潭終點/);
});

function fakeDocument() {
  const documentRef = {
    defaultView: {
      location: { protocol: "http:" },
      getComputedStyle() {
        return { getPropertyValue() { return "#19864a"; } };
      }
    },
    createElement(name) {
      return fakeNode(name, documentRef);
    },
    createElementNS(_namespace, name) {
      return fakeNode(name, documentRef);
    },
    createTextNode(text) {
      return { nodeType: 3, textContent: text };
    }
  };
  return documentRef;
}

function fakeNode(name, documentRef) {
  return {
    nodeType: 1,
    name,
    ownerDocument: documentRef,
    dataset: {},
    attributes: {},
    children: [],
    setAttribute(key, value) { this.attributes[key] = String(value); },
    removeAttribute(key) { delete this.attributes[key]; },
    addEventListener(event, handler) {
      this.handlers = this.handlers || {};
      this.handlers[event] = handler;
    },
    append(...children) {
      this.children.push(...children);
    },
    replaceChildren(...children) {
      this.children = children;
    }
  };
}

function descendants(node) {
  if (!node || node.nodeType !== 1) return [];
  return [node, ...node.children.flatMap(descendants)];
}

test("Leaflet 圖磚失敗時移除地圖並切換 SVG", () => {
  const documentRef = fakeDocument();
  const element = fakeNode("div", documentRef);
  let tileError;
  let removed = 0;
  const map = {
    fitBounds() {},
    remove() { removed += 1; }
  };
  const tileLayer = {
    addTo() { return this; },
    on(event, handler) {
      if (event === "tileerror") tileError = handler;
      return this;
    },
    off() {}
  };
  documentRef.defaultView.L = {
    map() { return map; },
    tileLayer() { return tileLayer; },
    polyline() {
      return {
        addTo() { return this; },
        getBounds() { return {}; }
      };
    }
  };

  MapView.mount(element, {
    id: "r1",
    name: "測試路線",
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]
  });

  assert.equal(element.dataset.mapMode, "leaflet");
  assert.equal(typeof tileError, "function");
  tileError();
  assert.equal(removed, 1);
  assert.equal(element.dataset.mapMode, "svg");
});

test("海拔圖無有效高度時顯示說明文字", () => {
  const documentRef = fakeDocument();
  const element = fakeNode("div", documentRef);

  MapView.mountElevation(element, {
    name: "測試路線",
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]
  });

  assert.equal(element.children.length, 1);
  assert.equal(element.children[0].textContent, "未提供海拔資料");
});

test("海拔圖以 pointer、觸控與左右鍵同步里程戳記", () => {
  const documentRef = fakeDocument();
  const element = fakeNode("div", documentRef);
  const route = {
    id: "r1",
    name: "測試路線",
    coordinates: [
      { lat: 25, lng: 121, ele: 10, distanceKm: 0, gradePct: 0 },
      { lat: 25.01, lng: 121.01, ele: 40, distanceKm: 4, gradePct: 5 },
      { lat: 25.02, lng: 121.02, ele: 80, distanceKm: 10, gradePct: 8 }
    ]
  };

  MapView.mountElevation(element, route);
  const [svg, tooltip] = element.children;
  svg.handlers.pointermove({ clientX: 360 });
  assert.match(tooltip.textContent, /4\.0 km/);
  let prevented = false;
  svg.handlers.keydown({ key: "ArrowRight", preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
  assert.match(tooltip.textContent, /10\.0 km/);
  svg.handlers.touchstart({ touches: [{ clientX: 0 }] });
  assert.match(tooltip.textContent, /0\.0 km/);
  svg.handlers.focus({});
  assert.match(tooltip.textContent, /0\.0 km/);
  assert.equal(svg.attributes.tabindex, "0");
});

test("海拔圖將 pointer 與觸控 X 座標限制在繪圖區左右邊界", () => {
  const model = MapView.buildElevationModel({
    coordinates: [{ lat: 25, lng: 121, ele: 10, distanceKm: 0, gradePct: 0 }, { lat: 25.01, lng: 121.01, ele: 20, distanceKm: 10, gradePct: 1 }]
  }, 900, 210, { top: 24, right: 22, bottom: 34, left: 50 });

  assert.equal(MapView.profileDistanceForClientX(model, 50, { left: 0, width: 900 }), 0);
  assert.equal(MapView.profileDistanceForClientX(model, 878, { left: 0, width: 900 }), 10);
});

test("Leaflet 道路地圖會加入起終點與人工途經地標", () => {
  const documentRef = fakeDocument();
  const element = fakeNode("div", documentRef);
  const markerCalls = [];
  const directionCalls = [];
  const lineCalls = [];
  const map = { fitBounds() {}, remove() {} };
  documentRef.defaultView.L = {
    map() { return map; },
    tileLayer() { return { addTo() { return this; }, on() {}, off() {} }; },
    polyline(_points, options) { lineCalls.push(options); return { addTo() { return this; }, getBounds() { return {}; } }; },
    circleMarker(point, options) {
      markerCalls.push({ point, options });
      return { addTo() { return this; }, bindTooltip() { return this; } };
    },
    divIcon(options) { return options; },
    marker(point, options) {
      directionCalls.push({ point, options });
      return { addTo() { return this; } };
    }
  };

  MapView.mount(element, {
    id: "r1",
    name: "測試路線",
    coordinates: [{ lat: 25, lng: 121, distanceKm: 0 }, { lat: 25.05, lng: 121, distanceKm: 3 }, { lat: 25.1, lng: 121, distanceKm: 6 }],
    waypoints: [{ name: "風櫃嘴", lat: 25.05, lng: 121.05, role: "via" }]
  });

  assert.equal(element.dataset.mapMode, "leaflet");
  assert.equal(lineCalls.length, 2);
  assert.equal(lineCalls[0].weight, 11);
  assert.equal(lineCalls[1].weight, 5);
  assert.equal(markerCalls.length, 3);
  assert.deepEqual(markerCalls.map(call => call.options.color), ["#19864a", "#c83e36", "#24271f"]);
  assert.equal(directionCalls.length, 1);
  assert.match(directionCalls[0].options.icon.html, /rotate\(0deg\)/);
});

test("SVG fallback 也保留起終點、方向與人工途經地標", () => {
  const documentRef = fakeDocument();
  documentRef.defaultView.location.protocol = "file:";
  const element = fakeNode("div", documentRef);

  MapView.mount(element, {
    id: "r1",
    name: "離線測試",
    coordinates: [
      { lat: 25, lng: 121, distanceKm: 0 },
      { lat: 25.03, lng: 121.03, distanceKm: 2.1 },
      { lat: 25.06, lng: 121.06, distanceKm: 4.2 }
    ],
    waypoints: [{ name: "途經點", lat: 25.02, lng: 121.02, role: "via" }]
  });

  const classes = descendants(element.children[0]).map(node => node.attributes.class).filter(Boolean);
  assert.ok(classes.includes("route-map__point route-map__point--start"));
  assert.ok(classes.includes("route-map__point route-map__point--finish"));
  assert.ok(classes.includes("route-map__point route-map__point--waypoint"));
  assert.ok(classes.includes("route-map__direction"));
});

test("直接開啟檔案時不啟動 Leaflet 並使用 SVG", () => {
  const documentRef = fakeDocument();
  documentRef.defaultView.location.protocol = "file:";
  let leafletCalls = 0;
  documentRef.defaultView.L = {
    map() {
      leafletCalls += 1;
      return {};
    }
  };
  const element = fakeNode("div", documentRef);

  MapView.mount(element, {
    id: "r1",
    name: "離線測試",
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]
  });

  assert.equal(leafletCalls, 0);
  assert.equal(element.dataset.mapMode, "svg");
});
