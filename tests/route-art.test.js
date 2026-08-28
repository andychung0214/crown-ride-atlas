"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const RouteArt = require("../js/core/route-art.js");

test("GPS Art 篩選不修改來源陣列", () => {
  const items = [
    { id: "bike", activityType: "cycling", status: "source-only" },
    { id: "run", activityType: "running", status: "track-ready" },
    { id: "walk", activityType: "walking", status: "source-only" }
  ];
  const snapshot = structuredClone(items);

  assert.deepEqual(RouteArt.filter(items, "foot").map(item => item.id), ["run", "walk"]);
  assert.deepEqual(RouteArt.filter(items, "track-ready").map(item => item.id), ["run"]);
  assert.deepEqual(items, snapshot);
});

test("GPS Art 統計區分總數與站內軌跡", () => {
  assert.deepEqual(RouteArt.stats([
    { status: "track-ready" },
    { status: "source-download" },
    { status: "source-only" },
    { status: "source-only" }
  ]), { total: 4, trackReady: 1, sourceDownload: 1, sourceOnly: 2 });
});

test("GPS Art 篩選區分站內與來源端下載", () => {
  const items = [
    { id: "ready", activityType: "walking", status: "track-ready" },
    { id: "external", activityType: "running", status: "source-download" },
    { id: "source", activityType: "cycling", status: "source-only" }
  ];

  assert.deepEqual(RouteArt.FILTERS, ["all", "cycling", "foot", "downloadable", "track-ready"]);
  assert.deepEqual(RouteArt.filter(items, "downloadable").map(item => item.id), ["ready", "external"]);
  assert.deepEqual(RouteArt.filter(items, "track-ready").map(item => item.id), ["ready"]);
});

test("來源端下載狀態要求摘要、禁止站內座標並限制下載網址", () => {
  const item = {
    id: "taipei-guitar", name: "台北 Guitar", activityType: "running",
    status: "source-download", sourceUrl: "https://shapemiles.com/en/city/taipei/art-gps-routes/guitar-11-3km",
    sourcePlatform: "ShapeMiles", verifiedAt: "2026-08-28",
    externalDownloadUrl: "https://shapemiles.com/api/art-routes/taipei/guitar-11-3km/gpx",
    sourceFormat: "gpx", sourceSha256: "a".repeat(64), segmentCount: 1, totalPoints: 200,
    bounds: { minLat: 24.9, maxLat: 25.1, minLng: 121.4, maxLng: 121.6 }
  };

  assert.doesNotThrow(() => RouteArt.validateItem(item));
  assert.throws(() => RouteArt.validateItem({
    ...item,
    segments: [[{ lat: 25, lng: 121 }, { lat: 25.01, lng: 121.01 }]]
  }), /source-download/);
  assert.throws(() => RouteArt.validateItem({
    ...item, externalDownloadUrl: "https://evil.example/file.gpx"
  }), /下載來源/);
  assert.throws(() => RouteArt.validateItem({ ...item, sourceSha256: "bad" }), /SHA-256/);
});

test("來源限定作品不得攜帶下載摘要，原始路線連結必須是受限 HTTPS", () => {
  const item = {
    id: "source", name: "來源作品", activityType: "cycling", status: "source-only",
    sourceUrl: "https://example.com/source", sourcePlatform: "測試", verifiedAt: "2026-08-28"
  };

  assert.throws(() => RouteArt.validateItem({ ...item, sourceFormat: "gpx" }), /source-only/);
  assert.doesNotThrow(() => RouteArt.validateItem({
    ...item,
    routeSourceUrl: "https://www.strava.com/routes/17223910",
    routeSourceAccess: "login-required"
  }));
  assert.throws(() => RouteArt.validateItem({ ...item, routeSourceUrl: "http://example.com" }), /routeSourceUrl/);
  assert.throws(() => RouteArt.validateItem({ ...item, routeSourceAccess: "private" }), /routeSourceAccess/);
});

test("GPS Art schema 拒絕非 HTTPS 與假的 source-only 座標", () => {
  assert.throws(() => RouteArt.validateItem({
    id: "bad", name: "錯誤資料", activityType: "cycling", status: "source-only",
    sourceUrl: "http://example.com", sourcePlatform: "測試", verifiedAt: "2026-08-14",
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]
  }), /HTTPS|source-only/);
});

test("GPS Art schema 接受至少一段台灣座標的站內軌跡", () => {
  const item = {
    id: "taipei-heart", name: "台北愛心", activityType: "cycling", status: "track-ready",
    sourceUrl: "https://example.com/route", sourcePlatform: "測試", verifiedAt: "2026-08-14",
    segments: [[{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]]
  };

  assert.doesNotThrow(() => RouteArt.validateItem(item));
  assert.equal(RouteArt.hasUsableSegments(item.segments), true);
});

test("GPS Art schema 拒絕不完整的站內軌跡與無效欄位", () => {
  const validItem = {
    id: "taipei-heart", name: "台北愛心", activityType: "cycling", status: "track-ready",
    sourceUrl: "https://example.com/route", sourcePlatform: "測試", verifiedAt: "2026-08-14",
    segments: [[{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]]
  };

  assert.throws(() => RouteArt.validateItem({ ...validItem, id: "台北愛心" }), /id/);
  assert.throws(() => RouteArt.validateItem({ ...validItem, activityType: "driving" }), /activityType/);
  assert.throws(() => RouteArt.validateItem({ ...validItem, status: "draft" }), /status/);
  assert.throws(() => RouteArt.validateItem({ ...validItem, sourcePlatform: "" }), /sourcePlatform/);
  assert.throws(() => RouteArt.validateItem({ ...validItem, verifiedAt: "2026-8-14" }), /verifiedAt/);
  assert.throws(() => RouteArt.validateItem({ ...validItem, verifiedAt: "2026-02-30" }), /verifiedAt/);
  assert.throws(() => RouteArt.validateItem({ ...validItem, sourceUrl: "https://" }), /HTTPS/);
  assert.throws(() => RouteArt.validateItem({ ...validItem, segments: [[{ lat: 25, lng: 121 }]] }), /segments/);
  assert.throws(() => RouteArt.validateItem({ ...validItem, segments: [[{ lat: 26, lng: 121 }, { lat: 25.1, lng: 121.1 }]] }), /Taiwan/);
  assert.equal(RouteArt.hasUsableSegments([]), false);
  assert.equal(RouteArt.hasUsableSegments([[{ lat: 25, lng: 121 }]]), false);
});

test("source-only 同時拒絕 segments 與舊 coordinates", () => {
  const sourceOnly = {
    id: "taipei-heart", name: "台北愛心", activityType: "cycling", status: "source-only",
    sourceUrl: "https://example.com/route", sourcePlatform: "測試", verifiedAt: "2026-08-14"
  };

  assert.throws(() => RouteArt.validateItem({
    ...sourceOnly,
    segments: [[{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]]
  }), /source-only/);
  assert.throws(() => RouteArt.validateItem({
    ...sourceOnly,
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]
  }), /source-only/);
});

test("GPS Art 台灣座標判定包含邊界並拒絕無效資料", () => {
  assert.equal(RouteArt.isTaiwanCoordinate({ lat: 21.5, lng: 119.5 }), true);
  assert.equal(RouteArt.isTaiwanCoordinate({ lat: 25.5, lng: 122.1 }), true);
  assert.equal(RouteArt.isTaiwanCoordinate({ lat: 21.49, lng: 120 }), false);
  assert.equal(RouteArt.isTaiwanCoordinate({ lat: 25, lng: "121" }), false);
});
