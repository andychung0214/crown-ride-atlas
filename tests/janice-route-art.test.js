const test = require("node:test");
const assert = require("node:assert/strict");
const Catalog = require("../js/data/route-art-catalog.js");
const Tracks = require("../js/data/route-art-tracks.js");
const Gpx = require("../js/core/gpx.js");
const { createHash } = require("node:crypto");

test("Janice四件台灣GPS Art保留原始點序、作者來源及可下載GPX", async () => {
  const { parseGpxSegments, validateSegments } = await import("../scripts/lib/route-art-source.mjs");
  for (const [id, count, minLat, maxLat] of [
    ["gps-art-zhishan-big-dinosaur", 310, 25, 25.2],
    ["gps-art-zhishan-little-dinosaur", 165, 25, 25.2],
    ["gps-art-zhishan-2024", 117, 25, 25.2],
    ["gps-art-kaohsiung-little-dinosaur", 205, 22.5, 22.8]
  ]) {
    const item = Catalog.find(item => item.id === id);
    assert.ok(item, id);
    assert.equal(item.author, "Janice");
    assert.equal(item.status, "track-ready");
    assert.equal(item.activityType, "running");
    assert.equal(item.segments.length, 1);
    assert.equal(item.segments[0].length, count);
    assert.ok(item.segments[0].every(point => point.lat >= minLat && point.lat <= maxLat));
    validateSegments(item.segments);
    const downloaded = Gpx.createDownload(item, { segments: item.segments });
    assert.deepEqual(parseGpxSegments(downloaded.text), item.segments);
    assert.equal(createHash("sha256").update(JSON.stringify(item.segments)).digest("hex"), Tracks[id].geometrySha256);
  }
});
