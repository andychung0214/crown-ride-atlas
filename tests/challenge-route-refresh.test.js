"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const root = path.join(__dirname, "..");

async function challengeTracks() {
  const source = await fs.readFile(path.join(root, "js", "data", "tracks", "challenges.js"), "utf8");
  const validatorUrl = pathToFileURL(path.join(root, "scripts", "validate-tracks.mjs")).href;
  const { parseBundleSource } = await import(`${validatorUrl}?challenge-refresh=${Date.now()}`);
  return parseBundleSource("challenges", source);
}

test("一日雙塔由富貴角外道路沿西部走廊至鵝鑾鼻", async () => {
  const seed = JSON.parse(await fs.readFile(
    path.join(root, "tools", "route-data", "seeds", "challenge-west-twin-towers.json"),
    "utf8"
  ));
  const track = (await challengeTracks())["challenge-west-twin-towers"];

  assert.equal(seed.waypoints[0].name.includes("富貴角"), true);
  assert.ok(Math.abs(seed.waypoints[0].lat - 25.2875) < 0.01);
  assert.ok(Math.abs(seed.waypoints[0].lng - 121.5402) < 0.01);
  assert.ok(track.coordinates.some(point => point.lng < 120.2 && point.lat > 23));
  assert.ok(Math.max(...track.coordinates.map(point => point.lng)) < 121.6);
  assert.ok(track.summary.distanceKm > 490 && track.summary.distanceKm < 540);
});

test("原東部與南迴雙塔軌跡維持既有穩定識別碼", async () => {
  const seed = JSON.parse(await fs.readFile(
    path.join(root, "tools", "route-data", "seeds", "challenge-twin-towers.json"),
    "utf8"
  ));
  const tracks = await challengeTracks();
  const track = tracks["challenge-twin-towers"];

  assert.equal(seed.id, "challenge-twin-towers");
  assert.match(seed.reviewerNote, /東雙塔.*南迴/);
  assert.equal(tracks["challenge-east-twin-towers"], undefined);
  assert.ok(track.coordinates.some(point => point.lng > 121.8));
  assert.ok(track.coordinates.some(point => point.lng > 121 && point.lat < 23));
  assert.ok(track.summary.distanceKm > 450 && track.summary.distanceKm < 490);
  const data = require("../js/data/routes.js");
  const route = data.routes.find(route => route.id === "challenge-twin-towers");
  assert.match(route.verificationWarning, /未包含三貂角燈塔接段/);
  assert.doesNotMatch(route.startLabel, /燈塔外/);
});

test("研究快取與正式 seed 必須逐點符合產生 raw geometry 的控制點", async () => {
  const originalFetch = globalThis.fetch;
  let assertSameWaypoints;
  try {
    globalThis.fetch = () => { throw new Error("單元測試匯入研究函式不得連線"); };
    ({ assertSameWaypoints } = await import("../scripts/research-challenge-refresh.mjs"));
  } finally {
    globalThis.fetch = originalFetch;
  }
  assert.doesNotThrow(() => assertSameWaypoints(
    [[121.54, 25.28], [120.85, 21.9]],
    [[121.54, 25.28], [120.85, 21.9]],
    "測試控制點"
  ));
  assert.throws(() => assertSameWaypoints(
    [[121.54, 25.28], [120.85, 21.9]],
    [[121.54, 25.28], [120.851, 21.9]],
    "測試控制點"
  ), /測試控制點.*不一致/);
});
