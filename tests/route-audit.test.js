"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const Audit = require("../tools/route-data/audit.js");

test("稽核頁依 regions 與 route 查詢選出 staging 路線", () => {
  const routes = [
    { id: "taipei-fengguizui", regionId: "taipei", name: "風櫃嘴晨間線" },
    { id: "new-taipei-buyanting", regionId: "new-taipei", name: "雙溪不厭亭" },
    { id: "taichung-route-136", regionId: "taichung", name: "縣道 136" },
    { id: "route-art-crown", regionId: "taipei", name: "單車王冠" }
  ];
  const manifest = {
    "taipei-fengguizui": { bundleId: "taipei" },
    "new-taipei-buyanting": { bundleId: "new-taipei" },
    "taichung-route-136": { bundleId: "taichung" },
    "route-art-crown": { bundleId: "route-art" }
  };

  assert.deepEqual(
    Audit.selectAuditRoutes(routes, "?regions=taipei,new-taipei", manifest).map(route => route.id),
    ["taipei-fengguizui", "new-taipei-buyanting"]
  );
  assert.deepEqual(
    Audit.selectAuditRoutes(routes, "?route=new-taipei-buyanting").map(route => route.id),
    ["new-taipei-buyanting"]
  );
});

test("稽核模型提供 OSM 疊圖、人工地標及海拔坡度摘要", () => {
  const route = { id: "taipei-fengguizui", regionId: "taipei", name: "風櫃嘴晨間線" };
  const track = {
    routeId: route.id,
    source: {
      router: "BRouter",
      profile: "fastbike",
      elevation: "SRTM",
      elevationAnalysis: {
        smoothingWindowM: 500,
        gradeWindowM: 100,
        reason: "橋梁與峽谷地表落差干擾。",
        referenceUrl: "https://hiking.biji.co/example",
        referenceLabel: "同距離實測路線"
      },
      reviewStatus: "approved"
    },
    waypoints: [
      { name: "故宮博物院", lat: 25.1, lng: 121.55, role: "start" },
      { name: "風櫃嘴", lat: 25.13, lng: 121.59, role: "finish" }
    ],
    coordinates: [
      { lat: 25.1, lng: 121.55, ele: 20, distanceKm: 0, gradePct: 0 },
      { lat: 25.13, lng: 121.59, ele: 590, distanceKm: 10, gradePct: 8 }
    ],
    summary: {
      distanceKm: 10,
      elevationGainM: 570,
      maximumElevationM: 590,
      maximumSustainedGradePct: 8
    },
    climbs: [{ distanceKm: 5, gainM: 400, averageGradePct: 8 }]
  };

  const model = Audit.buildAuditModel(route, track);

  assert.equal(model.routeId, route.id);
  assert.equal(model.coordinateCount, 2);
  assert.equal(model.waypoints.length, 2);
  assert.equal(model.summary.distanceKm, 10);
  assert.equal(model.source.profile, "fastbike");
  assert.match(model.elevationAnalysisText, /500m/);
  assert.match(model.elevationAnalysisText, /同距離實測路線/);
  assert.match(model.elevationAnalysisText, /未匯入外部 GPX/);
  assert.deepEqual(model.bounds, [[25.1, 121.55], [25.13, 121.59]]);
});

test("稽核頁載入 Leaflet OSM 與 staging bundle，不呼叫 BRouter", () => {
  const html = fs.readFileSync(
    path.join(__dirname, "..", "tools", "route-data", "audit.html"),
    "utf8"
  );

  assert.match(html, /leaflet/i);
  assert.match(html, /OpenStreetMap/);
  assert.match(html, /audit\.js/);
  assert.doesNotMatch(html, /brouter\.de|fetch\s*\(/i);
});
