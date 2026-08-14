"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const TrackAnalysis = require("../js/core/track-analysis.js");
const RouteArt = require("../js/core/route-art.js");
const Gpx = require("../js/core/gpx.js");

const appSource = fs.readFileSync(path.join(__dirname, "../js/app.js"), "utf8");

function bootWithTrack(track, onRender, page = "route") {
  const snapshots = [];
  const completed = new Set();
  const rootElement = {
    querySelectorAll() { return []; },
    querySelector() { return null; }
  };
  const root = {
    location: { hash: page === "route" ? "#/route/r1" : "#/routes" },
    history: { replaceState() {} },
    localStorage: { getItem() { return null; }, setItem() {} },
    requestAnimationFrame(callback) { callback(); },
    setTimeout,
    URL: { createObjectURL() { return "blob:test"; }, revokeObjectURL() {} },
    document: {
      readyState: "complete",
      documentElement: {},
      getElementById() { return rootElement; },
      createElement() { return { className: "", textContent: "" }; },
      body: { append() {} }
    },
    addEventListener(_event, handler) { this.hashChange = handler; },
    CrownRideAtlas: {
      Data: {
        routes: [{ id: "r1", name: "測試", trackRef: "r1" }],
        regions: [],
        challenges: [],
        routeArt: []
      },
      Filter: {
        apply(routes) { return routes; },
        paginate(routes, currentPage, pageSize) {
          return { items: routes, page: currentPage || 1, pageSize: pageSize || 24, total: routes.length, totalPages: 1 };
        }
      },
      Router: {
        parseHash() {
          return page === "route"
            ? { page: "route", params: { routeId: "r1" } }
            : { page, params: {} };
        }
      },
      Theme: { loadTheme() { return "yellow"; }, applyTheme(theme) { return theme; } },
      Geo: {},
      Gpx: {},
      Progress: {
        create() {
          return {
            list() { return new Set(completed); },
            has(routeId) { return completed.has(routeId); },
            toggle(routeId) {
              if (completed.has(routeId)) {
                completed.delete(routeId);
                return false;
              }
              completed.add(routeId);
              return true;
            }
          };
        }
      },
      Store: { create() { return { list() { return root.CrownRideAtlas.Data.routes; } }; } },
      ImageTools: {},
      MapView: {},
      Editor: {},
      TrackRegistry: {},
      TrackManifest: {},
      RouteArt,
      TrackLoader: {
        create() {
          return { load: async () => track, clear() {} };
        }
      },
      Render: {
        pageTitle() { return "測試"; },
        mount(_element, state, actions) {
          if (onRender) onRender(state, actions);
          snapshots.push({
            selectedRouteId: state.selectedRoute && state.selectedRoute.id,
            trackState: {
              routeId: state.trackState.routeId,
              status: state.trackState.status,
              track: state.trackState.track,
              error: state.trackState.error
            }
          });
          return { main: { focus() {} } };
        }
      }
    }
  };

  vm.runInNewContext(appSource, { window: root, Blob: class Blob {} });
  return snapshots;
}

function bootWithInteractiveTrack(track, onMapMount) {
  const elevationElement = { dataset: { elevation: "r1" }, setAttribute() {} };
  const mapElement = { dataset: { routeMap: "r1" }, setAttribute() {} };
  const rootElement = {
    querySelectorAll(selector) {
      if (selector === "[data-elevation]") return [elevationElement];
      if (selector === "[data-route-map]") return [mapElement];
      return [];
    },
    querySelector() { return null; }
  };
  const root = {
    location: { hash: "#/route/r1" },
    history: { replaceState() {} },
    localStorage: { getItem() { return null; }, setItem() {} },
    requestAnimationFrame(callback) { callback(); },
    setTimeout,
    URL: { createObjectURL() { return "blob:test"; }, revokeObjectURL() {} },
    document: {
      readyState: "complete",
      documentElement: {},
      getElementById() { return rootElement; },
      createElement() { return { className: "", textContent: "" }; },
      body: { append() {} }
    },
    addEventListener() {},
    CrownRideAtlas: {
      Data: { routes: [{ id: "r1", name: "測試", trackRef: "r1" }], regions: [], challenges: [], routeArt: [] },
      Filter: {
        apply(routes) { return routes; },
        paginate(routes, currentPage, pageSize) {
          return { items: routes, page: currentPage || 1, pageSize: pageSize || 24, total: routes.length, totalPages: 1 };
        }
      },
      Router: { parseHash() { return { page: "route", params: { routeId: "r1" } }; } },
      Theme: { loadTheme() { return "yellow"; }, applyTheme(theme) { return theme; } },
      Geo: {}, Gpx: {}, ImageTools: {}, Editor: {}, TrackRegistry: {}, TrackManifest: {}, TrackAnalysis,
      RouteArt,
      Progress: { create() { return { list() { return new Set(); }, toggle() { return true; } }; } },
      Store: { create() { return { list() { return root.CrownRideAtlas.Data.routes; } }; } },
      TrackLoader: { create() { return { load: async () => track, clear() {} }; } },
      MapView: {
        mount(_element, route) {
          if (onMapMount) onMapMount(route);
          return { destroy() {} };
        },
        mountElevation(_element, route, hydratedTrack) {
          TrackAnalysis.hydrateTrack(hydratedTrack || route);
        }
      },
      Render: { pageTitle() { return "測試"; }, mount() { return { main: { focus() {} } }; } }
    }
  };
  vm.runInNewContext(appSource, { window: root, Blob: class Blob {} });
}

function bootRouteArtCatalog(items, onMapMount, onDownload) {
  const mapElements = items.map(art => ({
    dataset: { artMap: art.id },
    setAttribute() {}
  }));
  let latestState = null;
  let latestActions = null;
  const rootElement = {
    querySelectorAll(selector) {
      return selector === "[data-art-map]" ? mapElements : [];
    },
    querySelector() { return null; },
    contains(element) { return mapElements.includes(element); }
  };
  const root = {
    location: { hash: "#/route-art" },
    history: { replaceState() {} },
    localStorage: { getItem() { return null; }, setItem() {} },
    requestAnimationFrame(callback) { callback(); },
    setTimeout,
    URL: { createObjectURL() { return "blob:test"; }, revokeObjectURL() {} },
    document: {
      readyState: "complete",
      documentElement: {},
      baseURI: "http://localhost/",
      getElementById() { return rootElement; },
      createElement(name) {
        if (name === "a") {
          return {
            className: "",
            textContent: "",
            click() { onDownload(this.download); },
            remove() {}
          };
        }
        return { className: "", textContent: "" };
      },
      body: { append() {} }
    },
    addEventListener() {},
    CrownRideAtlas: {
      Data: { routes: [], regions: [], challenges: [], routeArt: items },
      Filter: {
        apply(items) { return items; },
        paginate(items, currentPage, pageSize) {
          return { items, page: currentPage || 1, pageSize: pageSize || 24, total: items.length, totalPages: 1 };
        }
      },
      Router: { parseHash() { return { page: "route-art", params: {} }; } },
      Theme: { loadTheme() { return "yellow"; }, applyTheme(theme) { return theme; } },
      Geo: {}, Gpx, ImageTools: {}, Editor: {}, TrackRegistry: {}, TrackManifest: {}, TrackAnalysis, RouteArt,
      Progress: { create() { return { list() { return new Set(); }, toggle() { return true; } }; } },
      Store: { create() { return { list() { return []; } }; } },
      TrackLoader: {
        create() {
          return {
            load: async () => null,
            clear() {}
          };
        }
      },
      MapView: {
        mount(element, art) {
          onMapMount(element, art);
          return { destroy() {} };
        }
      },
      Render: {
        pageTitle() { return "測試"; },
        mount(_element, state, actions) {
          latestState = state;
          latestActions = actions;
          return { main: { focus() {} } };
        }
      }
    }
  };

  vm.runInNewContext(appSource, { window: root, Blob: class Blob {} });
  return {
    get state() { return latestState; },
    get actions() { return latestActions; }
  };
}

for (const coordinates of [[], [{ lat: 25, lng: 121, ele: 12 }]]) {
  test(`app 將 ${coordinates.length} 點 loader 回應轉為 retryable error`, async () => {
    const snapshots = bootWithTrack({ routeId: "r1", coordinates });
    await new Promise(resolve => setTimeout(resolve, 0));

    const latest = snapshots.at(-1);
    assert.equal(latest.selectedRouteId, "r1");
    assert.equal(latest.trackState.status, "error");
    assert.equal(latest.trackState.track, null);
    assert.match(latest.trackState.error.message, /至少需要兩個有效座標/);
  });
}

test("App 水合後傳遞同一份軌跡給海拔掛載，本機 GPX 只分析一次", async () => {
  const originalAnalyze = TrackAnalysis.analyzeCoordinates;
  let analysisCount = 0;
  TrackAnalysis.analyzeCoordinates = points => {
    analysisCount += 1;
    return originalAnalyze(points);
  };
  try {
    bootWithInteractiveTrack({
      routeId: "r1",
      coordinates: [{ lat: 25, lng: 121, ele: 100 }, { lat: 25.01, lng: 121, ele: 150 }]
    });
    await new Promise(resolve => setTimeout(resolve, 0));
    assert.equal(analysisCount, 1);
  } finally {
    TrackAnalysis.analyzeCoordinates = originalAnalyze;
  }
});

test("App 將正式軌跡人工路點一併傳給互動地圖", async () => {
  let mountedRoute = null;
  bootWithInteractiveTrack({
    routeId: "r1",
    coordinates: [{ lat: 25, lng: 121, ele: 100 }, { lat: 25.01, lng: 121, ele: 150 }],
    waypoints: [
      { name: "起點", lat: 25, lng: 121, role: "start" },
      { name: "折返點", lat: 25.01, lng: 121, role: "finish" }
    ]
  }, route => {
    mountedRoute = route;
  });
  await new Promise(resolve => setTimeout(resolve, 0));

  assert.equal(mountedRoute.waypoints.length, 2);
  assert.equal(mountedRoute.waypoints[1].name, "折返點");
});

test("已完成分析的內建軌跡經 App 與海拔掛載不會再次分析", async () => {
  const originalAnalyze = TrackAnalysis.analyzeCoordinates;
  let analysisCount = 0;
  TrackAnalysis.analyzeCoordinates = points => {
    analysisCount += 1;
    return originalAnalyze(points);
  };
  try {
    bootWithInteractiveTrack({
      routeId: "r1",
      coordinates: [
        { lat: 25, lng: 121, ele: 100, distanceKm: 0, gradePct: 0, smoothedEle: 100 },
        { lat: 25.01, lng: 121, ele: 150, distanceKm: 1, gradePct: 5, smoothedEle: 150 }
      ],
      summary: { elevationLossM: 0, maximumSustainedGradePct: 5 },
      climbs: []
    });
    await new Promise(resolve => setTimeout(resolve, 0));
    assert.equal(analysisCount, 0);
  } finally {
    TrackAnalysis.analyzeCoordinates = originalAnalyze;
  }
});

test("路線美學只掛載 track-ready 作品並支援篩選與 GPX 下載", () => {
  const trackReadyArt = {
    id: "gps-art-taipei-cherry-blossom",
    name: "台北櫻花 16K",
    activityType: "walking",
    status: "track-ready",
    segments: [[{ lat: 25, lng: 121 }, { lat: 25.01, lng: 121.01 }]]
  };
  const sourceOnlyArt = {
    id: "gps-art-source-only",
    name: "來源作品",
    activityType: "cycling",
    status: "source-only"
  };
  const mountedIds = [];
  let downloadedName = null;
  const app = bootRouteArtCatalog(
    [trackReadyArt, sourceOnlyArt],
    (_element, art) => mountedIds.push(art.id),
    filename => { downloadedName = filename; }
  );

  assert.deepEqual(mountedIds, ["gps-art-taipei-cherry-blossom"]);
  app.actions.setRouteArtFilter("foot");
  assert.equal(app.state.routeArtFilter, "foot");
  app.actions.downloadArtGpx(trackReadyArt);
  assert.equal(downloadedName, "台北櫻花-16K.gpx");
});

test("App 套用篩選時重設頁碼並可切換完成路線", () => {
  let latestState = null;
  let actions = null;
  bootWithTrack({
    routeId: "r1",
    coordinates: [{ lat: 25, lng: 121, ele: 10 }, { lat: 25.01, lng: 121.01, ele: 20 }]
  }, (state, nextActions) => {
    latestState = state;
    actions = nextActions;
  }, "routes");

  actions.setFilters({ query: "測試", page: 9 });
  assert.equal(latestState.filters.page, 1);
  assert.equal(latestState.filters.query, "測試");

  actions.toggleCompleted("r1");
  assert.equal(latestState.completed.has("r1"), true);
  actions.toggleCompleted("r1");
  assert.equal(latestState.completed.has("r1"), false);
});
