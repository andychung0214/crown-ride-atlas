"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Data = require("../js/data/routes.js");

test("首版涵蓋 22 個地區與至少 60 條路線", () => {
  assert.equal(Data.regions.length, 22);
  assert.ok(Data.routes.length >= 60);
  assert.equal(new Set(Data.routes.map(route => route.regionId)).size, 22);
});

test("首版包含 8 條經典挑戰與 6 組路線美學", () => {
  assert.equal(Data.challenges.length, 8);
  assert.equal(Data.routeArt.length, 6);
});

test("每條路線符合可渲染與 GPX 輸出的資料契約", () => {
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
    assert.ok(route.durationMinutes > 0);
    assert.ok(Array.isArray(route.tags) && route.tags.length > 0);
    assert.ok(Array.isArray(route.cautions) && route.cautions.length > 0);
    assert.ok(Array.isArray(route.supplies) && route.supplies.length > 0);
    assert.ok(route.coordinates.length >= 3);

    for (const point of route.coordinates) {
      assert.ok(Number.isFinite(point.lat) && point.lat >= -90 && point.lat <= 90);
      assert.ok(Number.isFinite(point.lng) && point.lng >= -180 && point.lng <= 180);
      assert.ok(Number.isFinite(point.ele));
    }
  }
});

test("路線識別碼與 slug 不重複", () => {
  assert.equal(new Set(Data.routes.map(route => route.id)).size, Data.routes.length);
  assert.equal(new Set(Data.routes.map(route => route.slug)).size, Data.routes.length);
});

test("每個經典挑戰與路線美學都能對應有效路線", () => {
  const routeIds = new Set(Data.routes.map(route => route.id));

  for (const challenge of Data.challenges) {
    assert.ok(challenge.routeIds.length > 0);
    challenge.routeIds.forEach(routeId => assert.ok(routeIds.has(routeId)));
  }

  for (const art of Data.routeArt) {
    assert.ok(routeIds.has(art.routeId));
  }
});
