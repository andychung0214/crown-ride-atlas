"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const root = path.join(__dirname, "..");
const generatorPath = path.join(root, "scripts", "generate-tracks.mjs");

async function loadSeed(routeId) {
  const source = await fs.readFile(
    path.join(root, "tools", "route-data", "seeds", `${routeId}.json`),
    "utf8"
  );
  return JSON.parse(source);
}

async function assertSeed(routeId, direction, requiredNames = []) {
  const { validateTrackSeed } = await import(
    `${pathToFileURL(generatorPath).href}?task10=${routeId}-${Date.now()}`
  );
  const seed = await loadSeed(routeId);
  assert.doesNotThrow(() => validateTrackSeed(seed, routeId));
  assert.equal(seed.direction, direction);
  const names = seed.waypoints.map(({ name }) => name).join("\n");
  requiredNames.forEach(name => assert.match(names, name));
  return seed;
}

test("yilan-beiyi seed 固定使用台9北宜公路往返", async () => {
  await assertSeed("yilan-beiyi", "out-and-back", [/台9/, /坪林/]);
});

test("yilan-taipingshan seed 固定宜專1線並排除步道定位點", async () => {
  const seed = await assertSeed("yilan-taipingshan", "out-and-back", [/宜專1/, /太平山/]);
  assert.doesNotMatch(seed.waypoints.map(({ name }) => name).join("\n"), /步道/);
});

test("yilan-coast seed 以合法橋梁和台2道路完成環線", async () => {
  await assertSeed("yilan-coast", "loop", [/台2/, /竹安溪.*橋/]);
});

test("hualien-qixingtan seed 使用兩潭自行車道且不以礫石灘定位", async () => {
  const seed = await assertSeed("hualien-qixingtan", "loop", [/兩潭自行車道/, /七星潭/]);
  assert.doesNotMatch(seed.waypoints.map(({ name }) => name).join("\n"), /礫石灘/);
});

test("hualien-valley-north seed 明確通過馬太鞍溪鋼便橋", async () => {
  await assertSeed("hualien-valley-north", "point-to-point", [/台9/, /馬太鞍溪鋼便橋/]);
});

test("hualien-lake-route-193 seed 固定193與鯉魚潭公共道路", async () => {
  await assertSeed("hualien-lake-route-193", "loop", [/縣道193/, /鯉魚潭.*道路/]);
});

test("taitung-route-197 seed 在37K碎石段南端前折返", async () => {
  const seed = await assertSeed("taitung-route-197", "out-and-back", [/縣道197/, /碎石路南端前/]);
  assert.ok(Math.max(...seed.waypoints.map(({ lat }) => lat)) < 22.91);
});

test("taitung-dulan-coast seed 全程以台11道路控制點往返", async () => {
  await assertSeed("taitung-dulan-coast", "out-and-back", [/台11/, /東河/]);
});

test("taitung-south-link seed 在安朔強制轉入台9戊且終點在壽卡", async () => {
  const seed = await assertSeed("taitung-south-link", "point-to-point", [
    /安朔.*台9戊/,
    /壽卡.*台9戊/
  ]);
  assert.equal(seed.waypoints.at(-1).lat > 22.24, true);
});
