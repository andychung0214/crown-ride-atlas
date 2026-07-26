"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Data = require("../js/data/routes.js");

function loadRegistry() {
  try {
    delete require.cache[require.resolve("../js/core/track-registry.js")];
    return require("../js/core/track-registry.js");
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") return {};
    throw error;
  }
}

test("拒絕不符合資料契約的軌跡", () => {
  const registry = loadRegistry();

  assert.throws(
    () => registry.register("taipei", { bad: { coordinates: [] } }),
    /軌跡資料/
  );
});

test("以唯一的 route ID 儲存不可變軌跡快照", () => {
  const registry = loadRegistry();
  const track = {
    coordinates: [{ lat: 25, lng: 121, ele: 10 }],
    summary: { distanceKm: 1 }
  };

  registry.register("taipei", { "taipei-demo": track });
  const registered = registry.get("taipei-demo");

  assert.deepEqual(registered, track);
  assert.notStrictEqual(registered, track);
  assert.ok(Object.isFrozen(registered));
  assert.ok(Object.isFrozen(registered.coordinates));
  assert.throws(() => { registered.coordinates[0].lat = 0; }, TypeError);
  assert.equal(registry.get("missing-route"), null);
  assert.throws(
    () => registry.register("taipei", { "another-route": track }),
    /bundle/
  );
  assert.throws(
    () => registry.register("new-taipei", { "taipei-demo": track }),
    /route ID/
  );
});

test("固定 manifest 涵蓋且只涵蓋 Data.routes 的 72 個 route ID", () => {
  let manifest = {};
  try {
    manifest = require("../js/data/track-manifest.js");
  } catch (error) {
    if (error.code !== "MODULE_NOT_FOUND") throw error;
  }

  assert.equal(Data.routes.length, 72);
  assert.deepEqual(
    Object.keys(manifest).sort(),
    Data.routes.map(route => route.id).sort()
  );
  Object.values(manifest).forEach(entry => {
    assert.match(entry.bundleId, /^[a-z0-9-]+$/);
    assert.match(entry.src, /^js\/data\/tracks\/[a-z0-9-]+\.js$/);
  });
});

test("六條路線美學都由獨立 route-art bundle 載入", () => {
  const manifest = require("../js/data/track-manifest.js");
  const routeArtIds = [
    "route-art-little-taiwan",
    "route-art-elephant",
    "route-art-heart-bay",
    "route-art-crown",
    "route-art-bear",
    "route-art-flying-bird"
  ];

  routeArtIds.forEach(routeId => {
    assert.deepEqual(manifest[routeId], {
      bundleId: "route-art",
      src: "js/data/tracks/route-art.js"
    });
  });
});
