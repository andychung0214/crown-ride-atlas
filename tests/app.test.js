"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const TrackAnalysis = require("../js/core/track-analysis.js");

const appSource = fs.readFileSync(path.join(__dirname, "../js/app.js"), "utf8");

function bootWithTrack(track) {
  const snapshots = [];
  const rootElement = {
    querySelectorAll() { return []; },
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
    addEventListener(_event, handler) { this.hashChange = handler; },
    CrownRideAtlas: {
      Data: {
        routes: [{ id: "r1", name: "測試", trackRef: "r1" }],
        regions: [],
        challenges: [],
        routeArt: []
      },
      Filter: { apply(routes) { return routes; } },
      Router: {
        parseHash() { return { page: "route", params: { routeId: "r1" } }; }
      },
      Theme: { loadTheme() { return "yellow"; }, applyTheme(theme) { return theme; } },
      Geo: {},
      Gpx: {},
      Store: { create() { return { list() { return root.CrownRideAtlas.Data.routes; } }; } },
      ImageTools: {},
      MapView: {},
      Editor: {},
      TrackRegistry: {},
      TrackManifest: {},
      TrackLoader: {
        create() {
          return { load: async () => track, clear() {} };
        }
      },
      Render: {
        pageTitle() { return "測試"; },
        mount(_element, state) {
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

function bootWithInteractiveTrack(track) {
  const elevationElement = { dataset: { elevation: "r1" }, setAttribute() {} };
  const rootElement = {
    querySelectorAll(selector) { return selector === "[data-elevation]" ? [elevationElement] : []; },
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
      Filter: { apply(routes) { return routes; } },
      Router: { parseHash() { return { page: "route", params: { routeId: "r1" } }; } },
      Theme: { loadTheme() { return "yellow"; }, applyTheme(theme) { return theme; } },
      Geo: {}, Gpx: {}, ImageTools: {}, Editor: {}, TrackRegistry: {}, TrackManifest: {}, TrackAnalysis,
      Store: { create() { return { list() { return root.CrownRideAtlas.Data.routes; } }; } },
      TrackLoader: { create() { return { load: async () => track, clear() {} }; } },
      MapView: {
        mount() { return { destroy() {} }; },
        mountElevation(_element, route, hydratedTrack) {
          TrackAnalysis.hydrateTrack(hydratedTrack || route);
        }
      },
      Render: { pageTitle() { return "測試"; }, mount() { return { main: { focus() {} } }; } }
    }
  };
  vm.runInNewContext(appSource, { window: root, Blob: class Blob {} });
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
