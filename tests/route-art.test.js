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
    { status: "source-only" },
    { status: "source-only" }
  ]), { total: 3, trackReady: 1, sourceOnly: 2 });
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
