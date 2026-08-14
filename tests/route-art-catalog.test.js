"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const RouteArt = require("../js/core/route-art.js");
const Catalog = require("../js/data/route-art-catalog.js");
const Data = require("../js/data/routes.js");
const TrackManifest = require("../js/data/track-manifest.js");

test("圖鑑固定收錄 22 件有公開來源的台灣 GPS Art", () => {
  assert.equal(Catalog.length, 22);
  assert.equal(new Set(Catalog.map(item => item.id)).size, 22);
  assert.ok(Catalog.every(item => /^https:\/\//.test(item.sourceUrl)));
  assert.deepEqual(new Set(Catalog.map(item => item.activityType)),
    new Set(["cycling", "running", "walking"]));
});

test("圖鑑保留來源已明示的數值與作者，且不把下限當作精確數值", () => {
  const byId = new Map(Catalog.map(item => [item.id, item]));

  assert.deepEqual(byId.get("gps-art-north-taoyuan-raptor"), {
    id: "gps-art-north-taoyuan-raptor",
    name: "北桃迅猛龍",
    activityType: "cycling",
    regionName: "桃園市／新北市",
    status: "source-only",
    distanceKm: 101,
    elevationGainM: 1254,
    shapeLabel: "迅猛龍",
    activityLabel: "單車",
    summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「北桃迅猛龍」。",
    sourcePlatform: "Mobile01",
    sourceUrl: "https://www.mobile01.com/topicdetail.php?f=377&t=5800991",
    verifiedAt: "2026-08-14"
  });
  assert.equal(byId.get("gps-art-xinzhuang-tiger").author, "Heigo Chang");
  assert.equal(byId.get("gps-art-yangmingshan-buddha-hand").distanceKm, 135);
  assert.equal(Object.hasOwn(byId.get("gps-art-yangmingshan-buddha-hand"), "elevationGainM"), false);
  assert.equal(byId.get("gps-art-yangmingshan-buddha-hand").elevationGainLabel, "3,000 m 以上");
});

test("GPS Art 不污染正式路線與 track manifest", () => {
  assert.equal(Data.routeArt, Catalog);
  assert.equal(Data.routes.length, 68);
  assert.equal(Data.routes.some(route => route.category === "路線美學"), false);
  assert.equal(Object.keys(TrackManifest).length, 68);
  assert.equal(new Set(Object.values(TrackManifest).map(entry => entry.bundleId)).size, 23);
  assert.equal(Object.hasOwn(TrackManifest, "gps-art-xinzhuang-tiger"), false);
});

test("沒有公開軌跡的作品不帶座標或虛構零值", () => {
  for (const item of Catalog.filter(item => item.status === "source-only")) {
    assert.equal(Object.hasOwn(item, "coordinates"), false);
    assert.equal(Object.hasOwn(item, "segments"), false);
    if (Object.hasOwn(item, "distanceKm")) assert.ok(item.distanceKm > 0);
    if (Object.hasOwn(item, "elevationGainM")) assert.ok(item.elevationGainM > 0);
  }
});

test("track-ready 作品都有公開軌跡且座標位於台灣", () => {
  const Tracks = require("../js/data/route-art-tracks.js");
  const ready = Catalog.filter(item => item.status === "track-ready");
  assert.ok(ready.length >= 2);
  for (const item of ready) {
    assert.ok(item.segments.length >= 1);
    assert.ok(item.segments.every(segment => segment.length >= 2));
    assert.ok(item.segments.flat().every(RouteArt.isTaiwanCoordinate));
    assert.strictEqual(item.segments, Tracks[item.id].segments);
    assert.equal(Object.hasOwn(item, "coordinates"), false);
  }
  const tiger = Catalog.find(item => item.id === "gps-art-xinzhuang-tiger");
  assert.equal(tiger.status, Object.hasOwn(Tracks, tiger.id) ? "track-ready" : "source-only");
});

test("catalog 初始化拒絕缺少必要 KML 軌跡", () => {
  const source = fs.readFileSync(require.resolve("../js/data/route-art-catalog.js"), "utf8");
  const browserWindow = { CrownRideAtlas: { RouteArt, RouteArtTracks: {} } };

  assert.throws(
    () => vm.runInNewContext(source, { window: browserWindow, globalThis: browserWindow }),
    /必要 GPS Art 軌跡缺失.*gps-art-taipei-cherry-blossom/
  );
});

test("KML 匯入依文件順序保留 LineString 段界並忽略 Point 地標", async () => {
  const { parseKmlSegments } = await import("../scripts/import-route-art-tracks.mjs");
  const kml = `<?xml version="1.0"?>
    <kml><Document>
      <Placemark><Point><coordinates>121.9,25.4,0</coordinates></Point></Placemark>
      <Placemark><LineString><coordinates>
        121.5000,25.0000,10 121.5010,25.0010,20
      </coordinates></LineString></Placemark>
      <Placemark><LineString><coordinates>
        121.5020,25.0020 121.5030,25.0030
      </coordinates></LineString></Placemark>
    </Document></kml>`;

  assert.deepEqual(parseKmlSegments(kml), [
    [
      { lat: 25, lng: 121.5, ele: 10 },
      { lat: 25.001, lng: 121.501, ele: 20 }
    ],
    [
      { lat: 25.002, lng: 121.502 },
      { lat: 25.003, lng: 121.503 }
    ]
  ]);
});

test("KML 匯入允許跨段距離超過 500 公尺", async () => {
  const { parseKmlSegments } = await import("../scripts/import-route-art-tracks.mjs");
  const kml = `<kml><Document>
    <LineString><coordinates>121.5000,25.0000 121.5010,25.0010</coordinates></LineString>
    <LineString><coordinates>121.5100,25.0100 121.5110,25.0110</coordinates></LineString>
  </Document></kml>`;

  assert.equal(parseKmlSegments(kml).length, 2);
});

test("KML 匯入拒絕同一 LineString 內達 500 公尺的跳點", async () => {
  const { parseKmlSegments } = await import("../scripts/import-route-art-tracks.mjs");
  const kml = `<kml><Document><LineString><coordinates>
    121.5000,25.0000 121.5100,25.0100
  </coordinates></LineString></Document></kml>`;

  assert.throws(() => parseKmlSegments(kml), /500/);
});

test("KML 匯入拒絕來源提供的非有限海拔", async () => {
  const { parseKmlSegments } = await import("../scripts/import-route-art-tracks.mjs");
  const kml = `<kml><Document><LineString><coordinates>
    121.5000,25.0000,10 121.5010,25.0010,invalid
  </coordinates></LineString></Document></kml>`;

  assert.throws(() => parseKmlSegments(kml), /有限數值/);
});

test("公開來源 TLS 失敗警告包含安全且可理解的原因", async () => {
  const { describeDownloadError } = await import("../scripts/import-route-art-tracks.mjs");
  const error = new TypeError("fetch failed", {
    cause: Object.assign(new Error("secure TLS connection was not established"), { code: "ECONNRESET" })
  });

  assert.equal(
    describeDownloadError(error),
    "fetch failed（ECONNRESET：secure TLS connection was not established）"
  );
});

test("圖鑑與每件作品皆不可被改寫", () => {
  assert.equal(Object.isFrozen(Catalog), true);
  assert.ok(Catalog.every(Object.isFrozen));
  assert.throws(() => Catalog.push({}), TypeError);
  assert.throws(() => { Catalog[0].name = "錯誤資料"; }, TypeError);
});
