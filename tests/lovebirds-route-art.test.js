"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { gzipSync } = require("node:zlib");
const Catalog = require("../js/data/route-art-catalog.js");
const Tracks = require("../js/data/route-art-tracks.js");
const Gpx = require("../js/core/gpx.js");
const RouteArt = require("../js/core/route-art.js");
const id = "gps-art-lovebirds";
const sourceSha = "2db68c7e15d1e4c600d754be19a8d2d84f350e05739fd0221bd7864aab9bdf63";
const geometrySha = "1594f85aea6c975020208b53307c680b9960006a3dd2bd5314b2f73da4de1472";
const sha = value => createHash("sha256").update(value).digest("hex");

test("比翼雙飛可從單車及可下載篩選找到，站內使用原始 Garmin 軌跡", () => {
  const item = Catalog.find(item => item.id === id);
  assert.ok(item, "比翼雙飛須在正式圖鑑中");
  assert.equal(item.name, "比翼雙飛");
  assert.equal(item.activityType, "cycling");
  assert.equal(item.status, "track-ready");
  assert.equal(item.sourceUrl, "https://connect.garmin.com/app/course/354424569");
  assert.equal(item.distanceKm, 92.4);
  assert.equal(item.elevationGainM, 1423);
  for (const filter of ["cycling", "downloadable", "track-ready"]) {
    assert.ok(RouteArt.filter(Catalog, filter).some(item => item.id === id));
  }
  assert.strictEqual(item.segments, Tracks[id].segments);
  assert.equal(item.segments.length, 1);
  assert.equal(item.segments[0].length, 16661);
  assert.equal(sha(JSON.stringify(item.segments)), geometrySha);
});

test("比翼雙飛下載的 GPX 與原始檔逐點逐段相同，不改海拔或補畫連線", async () => {
  const track = Tracks[id];
  assert.ok(track, "必須發布比翼雙飛軌跡");
  const { parseGpxSegments, validateSegments } = await import("../scripts/lib/route-art-source.mjs");
  const raw = await fs.readFile(path.join(__dirname, "../assets/gpx/garmin-354424569.gpx"));
  assert.equal(sha(raw), sourceSha);
  const source = validateSegments(parseGpxSegments(raw.toString("utf8")));
  assert.equal(track.sourceSha256, sourceSha);
  assert.deepEqual(track.segments, source);
  assert.deepEqual(source[0][0], { lat: 25.055250925943255, lng: 121.61694495007396, ele: 13.72 });
  const download = Gpx.createDownload(Catalog.find(item => item.id === id), { segments: track.segments });
  assert.equal(download.filename, "比翼雙飛.gpx");
  assert.deepEqual(parseGpxSegments(download.text), source);
});

test("使用者提供的比翼雙飛單一來源紀錄可離線重建", async () => {
  const importer = await import("../scripts/import-route-art-tracks.mjs");
  assert.equal(typeof importer.loadLocalTracks, "function");
  const tracks = await importer.loadLocalTracks();
  assert.equal(tracks.length, 1);
  assert.equal(tracks[0].routeId, id);
  assert.equal(tracks[0].sourceSha256, sourceSha);
  assert.equal(tracks[0].geometrySha256, geometrySha);
  assert.deepEqual(tracks[0].segments, Tracks[id].segments);
});

test("完整比翼雙飛點序仍符合既有 eager 軌跡資料的傳輸預算", async () => {
  const payload = await fs.readFile(path.join(__dirname, "../js/data/route-art-tracks.js"));
  // Git 在 Windows checkout 會把 JS 換成 CRLF；預算必須涵蓋兩種換行。
  assert.ok(payload.length <= 4_400_000, `原始軌跡資料 ${payload.length} bytes 超過 4.4 MB`);
  const compressed = gzipSync(payload, { level: 9 });
  assert.ok(compressed.length <= 525_000, `gzip 軌跡資料 ${compressed.length} bytes 超過 525 KB`);
});
