"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Data = require("../js/data/routes.js");

test("首版涵蓋 22 個地區與至少 60 條路線", () => {
  assert.equal(Data.regions.length, 22);
  assert.ok(Data.routes.length >= 60);
  assert.equal(new Set(Data.routes.map(route => route.regionId)).size, 22);
});

test("收錄 16 條經典挑戰，GPS Art 圖鑑獨立於正式路線", () => {
  assert.equal(Data.challenges.length, 16);
  assert.equal(Data.routeArt.length, 30);
  assert.equal(Data.routes.some(route => route.id === "route-art-little-taiwan"), false);
  assert.equal(Data.routeArt.every(art => !Data.routes.some(route => route.id === art.id)), true);
});

test("每條內建路線以相同識別碼的 trackRef 參照軌跡", () => {
  for (const route of Data.routes) {
    assert.match(route.id, /^[a-z0-9-]+$/);
    assert.match(route.slug, /^[a-z0-9-]+$/);
    assert.ok(route.name);
    assert.ok(route.regionName);
    assert.ok(route.thumbnail.startsWith("assets/images/"));
    assert.ok(route.summary);
    assert.ok(route.story);
    assert.ok(route.distanceKm > 0);
    assert.ok(route.elevationGainM >= 0);
    assert.ok(Number.isInteger(route.difficulty));
    assert.ok(route.difficulty >= 1 && route.difficulty <= 5);
    assert.ok(Number.isFinite(route.maxGradePct));
    assert.ok(route.maxGradePct >= 0);
    assert.match(route.areaId, /^(north|central|south|east|islands|cross)$/);
    assert.match(route.durationBand, /^(under-1h|1-2h|2-3h|3-4h|4-5h|5-8h|8-12h|12h-plus)$/);
    assert.ok(route.durationMinutes > 0);
    assert.ok(Array.isArray(route.tags) && route.tags.length > 0);
    assert.ok(Array.isArray(route.cautions) && route.cautions.length > 0);
    assert.ok(Array.isArray(route.supplies) && route.supplies.length > 0);
    assert.equal(route.trackRef, route.id);
    assert.equal(Object.hasOwn(route, "coordinates"), false);
  }
});

test("路線識別碼與 slug 不重複", () => {
  assert.equal(new Set(Data.routes.map(route => route.id)).size, Data.routes.length);
  assert.equal(new Set(Data.routes.map(route => route.slug)).size, Data.routes.length);
});

test("每個經典挑戰都有有效完整路線或明確來源，不以短段冒充全程", () => {
  const routeIds = new Set(Data.routes.map(route => route.id));

  for (const challenge of Data.challenges) {
    if (challenge.routeMode === "source-only") {
      assert.deepEqual(challenge.routeIds, []);
      assert.ok(challenge.itinerary.length >= 2);
      assert.match(challenge.sourceUrl, /^https:\/\//);
      assert.ok(challenge.caution);
    } else assert.ok(challenge.routeIds.length > 0);
    challenge.routeIds.forEach(routeId => assert.ok(routeIds.has(routeId)));
  }
});

test("北高與雙塔使用完整 point-to-point 挑戰路線", () => {
  const northSouth = Data.challenges.find(challenge => challenge.id === "challenge-north-south");
  const twinTowers = Data.challenges.find(challenge => challenge.id === "challenge-twin-towers");
  const routeById = new Map(Data.routes.map(route => [route.id, route]));

  assert.deepEqual(northSouth.routeIds, ["challenge-north-south"]);
  assert.deepEqual(twinTowers.routeIds, ["challenge-west-twin-towers"]);
  assert.match(northSouth.startLabel, /台北/);
  assert.match(northSouth.finishLabel, /高雄/);
  assert.match(twinTowers.startLabel, /富貴角燈塔/);
  assert.match(twinTowers.finishLabel, /鵝鑾鼻燈塔/);

  for (const routeId of ["challenge-north-south", "challenge-west-twin-towers"]) {
    const route = routeById.get(routeId);
    assert.ok(route);
    assert.equal(route.category, "經典挑戰");
    assert.equal(route.direction, "point-to-point");
    assert.equal(route.challenge, true);
    assert.ok(route.distanceKm > 300);
    assert.ok(route.endpointNote);
  }
});

test("新增指定挑戰，環大台北標明版本且四極點與一般環島分開", () => {
  for (const name of ["東進武嶺", "中雙塔", "東三塔", "東雙塔", "環島（含四極點）", "環島（不含四極點）", "環小台北", "環大台北", "如來神掌"]) {
    assert.ok(Data.challenges.some(item => item.name.startsWith(name)), name);
  }
  const fourPoles = Data.challenges.find(item => item.id === "challenge-round-island-four-poles");
  assert.match(fourPoles.itinerary.join(" "), /富貴角.*國聖港.*鵝鑾鼻.*三貂角/);
  const grand = Data.challenges.find(item => item.id === "challenge-grand-taipei");
  assert.match(grand.description, /2026.*130/);
  assert.match(grand.finishLabel, /聖約翰/);
});

test("公開 GPS Art 圖鑑不會讓不相符人工圖形重回正式路線", () => {
  assert.equal(Data.routeArt.length, 30);
  assert.equal(Data.routes.filter(route => route.category === "路線美學").length, 0);
});
