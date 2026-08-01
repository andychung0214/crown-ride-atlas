"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const Data = require("../js/data/routes.js");
const manifest = require("../js/data/track-manifest.js");

const root = path.join(__dirname, "..");
const validatorPath = path.join(root, "scripts", "validate-tracks.mjs");

test("正式資料由 66 條地區路線與 6 條路線美學組成", () => {
  const routeArt = Data.routes.filter(route => route.category === "路線美學");
  const regularRoutes = Data.routes.filter(route => route.category !== "路線美學");

  assert.equal(regularRoutes.length, 66);
  assert.equal(routeArt.length, 6);
  assert.equal(Data.routes.length, 72);
  assert.deepEqual(Object.keys(manifest).sort(), Data.routes.map(route => route.id).sort());
});

test("72 條正式軌跡均已人工核准且海拔與累積距離可用", async () => {
  const { parseBundleSource } = await import(
    `${pathToFileURL(validatorPath).href}?track-data=${Date.now()}`
  );
  const bundles = new Map();

  for (const entry of Object.values(manifest)) {
    if (bundles.has(entry.bundleId)) continue;
    const source = await fs.readFile(path.join(root, entry.src), "utf8");
    bundles.set(entry.bundleId, parseBundleSource(entry.bundleId, source));
  }

  for (const route of Data.routes) {
    const entry = manifest[route.id];
    const track = bundles.get(entry.bundleId)[route.id];

    assert.ok(track, `${route.id} 必須存在正式軌跡`);
    assert.equal(track.routeId, route.id);
    assert.equal(track.source.reviewStatus, "approved", `${route.id} 必須完成人工核准`);
    assert.ok(track.coordinates.length >= 2, `${route.id} 至少需要兩個軌跡點`);

    let previousDistance = -Infinity;
    for (const point of track.coordinates) {
      assert.ok(Number.isFinite(point.lat), `${route.id} 緯度必須是有限數值`);
      assert.ok(Number.isFinite(point.lng), `${route.id} 經度必須是有限數值`);
      assert.ok(Number.isFinite(point.ele), `${route.id} 海拔必須是有限數值`);
      assert.ok(Number.isFinite(point.distanceKm), `${route.id} 累積距離必須是有限數值`);
      assert.ok(point.distanceKm >= previousDistance, `${route.id} 累積距離不可倒退`);
      previousDistance = point.distanceKm;
    }

    assert.ok(Number.isFinite(track.summary.distanceKm));
    assert.ok(Number.isFinite(track.summary.elevationGainM));
    assert.ok(Number.isFinite(track.summary.maximumSustainedGradePct));
    assert.ok(
      Math.abs(previousDistance - track.summary.distanceKm) <= 0.01,
      `${route.id} 最後累積距離須與摘要一致`
    );
  }
});

test("路線目錄不再以人工折線或圖形座標產生正式軌跡", async () => {
  const routesSource = await fs.readFile(path.join(root, "js", "data", "routes.js"), "utf8");

  assert.doesNotMatch(routesSource, /buildCoordinates\s*\(/);
  assert.doesNotMatch(routesSource, /art\.shape\.map/);
});
