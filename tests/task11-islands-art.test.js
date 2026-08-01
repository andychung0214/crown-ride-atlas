"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const root = path.join(__dirname, "..");
const generatorPath = path.join(root, "scripts", "generate-tracks.mjs");
const validatorPath = path.join(root, "scripts", "validate-tracks.mjs");

const routeSpecs = {
  "penghu-cross-sea-bridge": { bundle: "penghu", bounds: [23.45, 23.72, 119.42, 119.70], note: /跨海大橋/ },
  "penghu-south-loop": { bundle: "penghu", bounds: [23.45, 23.72, 119.42, 119.70], note: /機場|沙灘/ },
  "penghu-north-loop": { bundle: "penghu", bounds: [23.45, 23.72, 119.42, 119.70], note: /跨海大橋/ },
  "kinmen-big-loop": { bundle: "kinmen", bounds: [24.35, 24.56, 118.28, 118.48], note: /軍事|機場/ },
  "kinmen-lieyu": { bundle: "kinmen", bounds: [24.39, 24.48, 118.20, 118.285], note: /烈嶼.*大金門|大金門.*烈嶼/ },
  "kinmen-taiwu": { bundle: "kinmen", bounds: [24.35, 24.56, 118.28, 118.48], note: /玉章路|太武山/ },
  "lienchiang-nangan": { bundle: "lienchiang", bounds: [26.12, 26.18, 119.89, 119.98], note: /南竿.*跨島|跨島.*南竿/ },
  "lienchiang-beigan": { bundle: "lienchiang", bounds: [26.18, 26.26, 119.94, 120.04], note: /北竿.*跨島|跨島.*北竿/ },
  "lienchiang-dongyin": { bundle: "lienchiang", bounds: [26.34, 26.39, 120.46, 120.53], note: /東引.*西引|西引.*東引/ },
  "route-art-little-taiwan": { bundle: "route-art", bounds: [24.10, 24.23, 120.58, 120.68], art: true },
  "route-art-elephant": { bundle: "route-art", bounds: [24.04, 24.11, 120.49, 120.57], art: true },
  "route-art-heart-bay": { bundle: "route-art", bounds: [22.60, 22.67, 120.25, 120.32], art: true },
  "route-art-crown": { bundle: "route-art", bounds: [25.03, 25.09, 121.49, 121.56], art: true },
  "route-art-bear": { bundle: "route-art", bounds: [23.93, 24.02, 121.54, 121.64], art: true },
  "route-art-flying-bird": { bundle: "route-art", bounds: [22.73, 22.82, 121.10, 121.19], art: true }
};

function inBounds(point, bounds) {
  const [minLat, maxLat, minLng, maxLng] = bounds;
  return point.lat >= minLat && point.lat <= maxLat && point.lng >= minLng && point.lng <= maxLng;
}

async function loadSeed(routeId) {
  return JSON.parse(await fs.readFile(
    path.join(root, "tools", "route-data", "seeds", `${routeId}.json`),
    "utf8"
  ));
}

test("Task 11 的 15 份 seed 都固定在指定單一島嶼或城市範圍", async () => {
  const { validateTrackSeed } = await import(`${pathToFileURL(generatorPath).href}?task11-seeds=${Date.now()}`);

  for (const [routeId, spec] of Object.entries(routeSpecs)) {
    const seed = await loadSeed(routeId);
    assert.doesNotThrow(() => validateTrackSeed(seed, routeId));
    assert.equal(seed.reviewStatus, "approved", `${routeId} 必須完成人工核准`);
    assert.ok(seed.waypoints.every(point => inBounds(point, spec.bounds)), `${routeId} waypoint 不得離開指定範圍`);
    assert.equal(seed.waypoints[0].role, "start");
    assert.equal(seed.waypoints.at(-1).role, "finish");
    assert.match(seed.reviewerNote, /live OSM/i);
    assert.match(seed.reviewerNote, /service/);
    assert.match(seed.reviewerNote, /track/);
    if (spec.note) assert.match(seed.reviewerNote, spec.note);
    if (spec.art) {
      assert.match(seed.reviewerNote, /圖形/);
      assert.match(seed.reviewerNote, /合法|公共道路/);
    }
  }
});

test("Task 11 正式軌跡維持單島／城市邊界且不含跨水長直線", async () => {
  const { parseBundleSource } = await import(`${pathToFileURL(validatorPath).href}?task11-bundles=${Date.now()}`);
  const bundles = new Map();

  for (const spec of Object.values(routeSpecs)) {
    if (bundles.has(spec.bundle)) continue;
    const source = await fs.readFile(path.join(root, "js", "data", "tracks", `${spec.bundle}.js`), "utf8");
    bundles.set(spec.bundle, parseBundleSource(spec.bundle, source));
  }

  for (const [routeId, spec] of Object.entries(routeSpecs)) {
    const track = bundles.get(spec.bundle)[routeId];
    assert.ok(track, `${routeId} 應存在正式 bundle`);
    assert.ok(track.coordinates.every(point => inBounds(point, spec.bounds)), `${routeId} 軌跡不得跨出指定島嶼或城市`);
    for (let index = 1; index < track.coordinates.length; index += 1) {
      const previous = track.coordinates[index - 1];
      const current = track.coordinates[index];
      const latM = (current.lat - previous.lat) * 111_320;
      const lngM = (current.lng - previous.lng) * 111_320 * Math.cos(current.lat * Math.PI / 180);
      assert.ok(Math.hypot(latM, lngM) <= 80.5, `${routeId} 不得以長直線跨越水域或道路缺口`);
    }
  }
});

test("Task 11 受版控的原始道路稽核摘要不含禁止類型、權限禁制或非法逆向", async () => {
  const auditFixture = JSON.parse(await fs.readFile(
    path.join(root, "tests", "fixtures", "task11-raw-audit.json"),
    "utf8"
  ));
  const { parseBundleSource } = await import(`${pathToFileURL(validatorPath).href}?task11-audit=${Date.now()}`);
  const { cacheFingerprint } = await import(`${pathToFileURL(generatorPath).href}?task11-fingerprint=${Date.now()}`);
  const bundles = new Map();

  assert.equal(auditFixture.schemaVersion, 1);
  assert.deepEqual(Object.keys(auditFixture.routes).sort(), Object.keys(routeSpecs).sort());
  assert.deepEqual(auditFixture.forbiddenPolicy.highway, ["service", "track", "footway", "path", "steps", "pedestrian"]);
  assert.deepEqual(auditFixture.forbiddenPolicy.access, ["no", "private", "destination"]);
  assert.deepEqual(auditFixture.forbiddenPolicy.bicycle, ["no"]);
  assert.deepEqual(auditFixture.forbiddenPolicy.route, ["ferry"]);
  assert.deepEqual(auditFixture.routeTuple, [
    "cacheFingerprint",
    "generatedAt",
    "messageRows",
    "forbiddenHighway",
    "forbiddenAccess",
    "bicycleNo",
    "ferry",
    "unsafeReverseOneway"
  ]);

  for (const [routeId, tuple] of Object.entries(auditFixture.routes)) {
    const [fingerprint, generatedAt, messageRows, ...violations] = tuple;
    const bundleId = routeSpecs[routeId].bundle;
    if (!bundles.has(bundleId)) {
      const source = await fs.readFile(path.join(root, "js", "data", "tracks", `${bundleId}.js`), "utf8");
      bundles.set(bundleId, parseBundleSource(bundleId, source));
    }

    assert.match(fingerprint, /^[a-f0-9]{64}$/);
    assert.equal(fingerprint, cacheFingerprint(await loadSeed(routeId)), `${routeId} audit 必須綁定目前 seed`);
    assert.ok(messageRows > 0, `${routeId} 必須有原始道路訊息`);
    assert.deepEqual(violations, [0, 0, 0, 0, 0], `${routeId} 原始道路稽核不得有違規計數`);
    assert.equal(bundles.get(bundleId)[routeId].source.generatedAt, generatedAt);
  }
});
