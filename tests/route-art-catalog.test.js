"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
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
    if (Object.hasOwn(item, "distanceKm")) assert.ok(item.distanceKm > 0);
    if (Object.hasOwn(item, "elevationGainM")) assert.ok(item.elevationGainM > 0);
  }
});

test("圖鑑與每件作品皆不可被改寫", () => {
  assert.equal(Object.isFrozen(Catalog), true);
  assert.ok(Catalog.every(Object.isFrozen));
  assert.throws(() => Catalog.push({}), TypeError);
  assert.throws(() => { Catalog[0].name = "錯誤資料"; }, TypeError);
});
