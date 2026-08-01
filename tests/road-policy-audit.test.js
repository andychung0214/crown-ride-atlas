"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const manifest = require("../js/data/track-manifest.js");

const root = path.join(__dirname, "..");

test("受版控道路稽核可由原始幾何重建 72 條正式路線並重算道路政策", async () => {
  const generator = await import(`${pathToFileURL(path.join(root, "scripts", "generate-tracks.mjs")).href}?road-audit=${Date.now()}`);
  const validator = await import(`${pathToFileURL(path.join(root, "scripts", "validate-tracks.mjs")).href}?road-audit=${Date.now()}`);
  const audit = JSON.parse(await fs.readFile(
    path.join(root, "tools", "route-data", "road-audit.json"),
    "utf8"
  ));
  const bundleCache = new Map();

  assert.equal(audit.schemaVersion, 2);
  assert.deepEqual(Object.keys(audit.routes).sort(), Object.keys(manifest).sort());

  for (const [routeId, entry] of Object.entries(audit.routes)) {
    const seed = JSON.parse(await fs.readFile(
      path.join(root, "tools", "route-data", "seeds", `${routeId}.json`),
      "utf8"
    ));
    const manifestEntry = manifest[routeId];
    if (!bundleCache.has(manifestEntry.bundleId)) {
      const source = await fs.readFile(path.join(root, manifestEntry.src), "utf8");
      bundleCache.set(manifestEntry.bundleId, validator.parseBundleSource(manifestEntry.bundleId, source));
    }
    const track = bundleCache.get(manifestEntry.bundleId)[routeId];
    const messages = [
      ["Longitude", "Latitude", "Distance", "WayTags"],
      ...entry.segments
    ];
    const rawPayload = {
      type: "Feature",
      properties: { messages },
      geometry: { type: "LineString", coordinates: entry.rawGeometry }
    };
    const recalculated = generator.auditBrouterRoadPolicy(
      rawPayload,
      seed.roadPolicyExceptions || []
    );
    const rebuiltTrack = generator.buildTrack(rawPayload, {
      routeId,
      seed,
      generatedAt: entry.generatedAt
    });

    assert.equal(entry.requestFingerprint, generator.cacheFingerprint(seed), `${routeId} seed 指紋不一致`);
    assert.ok(Array.isArray(entry.rawGeometry) && entry.rawGeometry.length >= 2);
    assert.equal(entry.rawGeometrySha256, generator.rawGeometryFingerprint(rawPayload));
    assert.equal(entry.generatedAt, track.source.generatedAt);
    assert.equal(entry.messageRows, entry.segments.length);
    assert.equal(recalculated.messageRows, entry.messageRows);
    assert.deepEqual(recalculated.violations, [], `${routeId} 道路政策不得有未核准違規`);
    assert.equal(recalculated.roadPolicyAuditSha256, track.source.roadPolicyAuditSha256);
    assert.equal(entry.rawGeometrySha256, track.source.rawGeometrySha256);
    assert.equal(
      JSON.stringify(rebuiltTrack),
      JSON.stringify(track),
      `${routeId} 必須可由受版控原始幾何完整重建`
    );
  }
});
