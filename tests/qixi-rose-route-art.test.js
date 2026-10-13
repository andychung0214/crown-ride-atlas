"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { createHash } = require("node:crypto");
const vm = require("node:vm");
const Catalog = require("../js/data/route-art-catalog.js");
const Tracks = require("../js/data/route-art-tracks.js");
const TrackManifest = require("../js/data/route-art-track-manifest.js");
const Gpx = require("../js/core/gpx.js");
const RouteArt = require("../js/core/route-art.js");

const id = "gps-art-qixi-confession-rose";
const sourceSha = "b8ea0008080c841845985aabbfb4afcf97df73fb05b2bce3c3a93d882af0eb74";
const gpxSha = "3e517e775df2d2e25d3d2a851500db2aecbba24196b1075b0c84396386a163d1";
const geometrySha = "cfa4792f9b48dc3ddb71b7b0f45e5bc1ab69b45b8d10ab70a8b24247ffd38bea";
const sha = value => createHash("sha256").update(value).digest("hex");

async function loadLazyTrack() {
  const source = await fs.readFile(path.join(__dirname, "../js/data/tracks/gps-art-qixi-confession-rose.js"), "utf8");
  let registered;
  const root = {
    CrownRideAtlas: {
      TrackRegistry: {
        register(bundleId, tracks) { registered = { bundleId, tracks }; }
      }
    }
  };
  vm.runInNewContext(source, { window: root });
  assert.equal(registered.bundleId, id);
  return JSON.parse(JSON.stringify(registered.tracks[id]));
}

test("七夕告白玫瑰只歸入跑步步行分類，並以 Garmin 完整公開課程顯示站內軌跡", () => {
  const item = Catalog.find(item => item.id === id);
  assert.ok(item, "七夕告白玫瑰須在正式圖鑑中");
  assert.equal(item.name, "七夕告白玫瑰");
  assert.equal(item.shapeLabel, "玫瑰");
  assert.equal(item.activityType, "running");
  assert.equal(item.activityLabel, "跑步");
  assert.equal(item.status, "track-ready");
  assert.equal(item.sourceUrl, "https://connect.garmin.com/app/course/523728030");
  assert.equal(item.trackRef, id);
  assert.equal(item.distanceKm, 8.36);
  assert.equal(item.elevationGainM, 240);
  assert.ok(RouteArt.filter(Catalog, "foot").some(item => item.id === id));
  assert.ok(RouteArt.filter(Catalog, "downloadable").some(item => item.id === id));
  assert.ok(RouteArt.filter(Catalog, "track-ready").some(item => item.id === id));
  assert.equal(RouteArt.filter(Catalog, "cycling").some(item => item.id === id), false);
  assert.equal(Object.hasOwn(Tracks, id), false, "大型玫瑰軌跡不可塞入每頁 eager 載入的資料檔");
  assert.deepEqual(TrackManifest[id], {
    bundleId: id,
    src: "js/data/tracks/gps-art-qixi-confession-rose.js"
  });
});

test("七夕告白玫瑰 GPX 逐點保留 Garmin 公開課程座標與海拔", async () => {
  const track = await loadLazyTrack();
  assert.ok(track, "必須發布七夕告白玫瑰軌跡");
  const { parseGpxSegments, validateSegments } = await import("../scripts/lib/route-art-source.mjs");
  const raw = await fs.readFile(path.join(__dirname, "../assets/gpx/garmin-523728030.gpx"));
  const snapshotRaw = await fs.readFile(path.join(__dirname, "../assets/sources/garmin-523728030.json"));
  const snapshot = JSON.parse(snapshotRaw);
  assert.equal(sha(snapshotRaw), sourceSha);
  assert.equal(sha(raw), gpxSha);
  assert.equal(snapshot.courseId, 523728030);
  assert.equal(snapshot.sourceUrl, "https://connect.garmin.com/app/course/523728030");
  assert.equal(snapshot.permissionBasis, "route-owner-attestation-in-project-conversation");
  assert.equal(snapshot.geoPoints.length, 5384);
  const source = validateSegments(parseGpxSegments(raw.toString("utf8")));
  assert.equal(track.sourceSha256, sourceSha);
  assert.equal(track.gpxSha256, gpxSha);
  assert.equal(track.geometrySha256, geometrySha);
  assert.deepEqual(track.coordinates, source[0]);
  assert.deepEqual(snapshot.geoPoints, source[0]);
  assert.equal(sha(JSON.stringify([track.coordinates])), geometrySha);
  assert.deepEqual(source[0][0], { lat: 25.032459776848555, lng: 121.53506230562925, ele: 9.6 });
  assert.deepEqual(source[0].at(-1), { lat: 25.032473606988788, lng: 121.53502928093076, ele: 9.87 });

  const item = Catalog.find(item => item.id === id);
  const download = Gpx.createDownload(item, { segments: [track.coordinates] });
  assert.equal(download.filename, "七夕告白玫瑰.gpx");
  assert.deepEqual(parseGpxSegments(download.text), source);
});

test("本機匯入器可離線重建七夕告白玫瑰來源紀錄", async () => {
  const importer = await import("../scripts/import-route-art-tracks.mjs");
  const tracks = await importer.loadLocalTracks();
  const track = tracks.find(track => track.routeId === id);
  assert.ok(track, "本機來源必須包含七夕告白玫瑰");
  assert.equal(track.sourceSha256, sourceSha);
  assert.equal(track.gpxSha256, gpxSha);
  assert.equal(track.geometrySha256, geometrySha);
  assert.deepEqual(track.segments[0], (await loadLazyTrack()).coordinates);
});
