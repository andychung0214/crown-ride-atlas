"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const vm = require("node:vm");

const generatorPath = path.join(__dirname, "..", "scripts", "generate-tracks.mjs");
const validatorPath = path.join(__dirname, "..", "scripts", "validate-tracks.mjs");
const fixturePath = path.join(
  __dirname,
  "..",
  "tools",
  "route-data",
  "fixture",
  "brouter-sample.geojson"
);

async function loadGenerator() {
  return import(`${pathToFileURL(generatorPath).href}?test=${Date.now()}`);
}

async function loadValidator() {
  return import(`${pathToFileURL(validatorPath).href}?test=${Date.now()}`);
}

test("解析 BRouter LineString 的經度、緯度與海拔", async () => {
  const { parseBrouterFeature } = await loadGenerator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));

  assert.deepEqual(parseBrouterFeature(fixture), [
    { lat: 25.021, lng: 121.541, ele: 12 },
    { lat: 25.0215, lng: 121.5415, ele: 20 },
    { lat: 25.022, lng: 121.542, ele: 31 }
  ]);
});

test("建構軌跡時會產生分析摘要與爬坡陣列", async () => {
  const { buildTrack } = await loadGenerator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const track = buildTrack(fixture, { resampleIntervalM: 100 });

  assert.equal(track.coordinates[0].ele, 12);
  assert.ok(track.summary.distanceKm > 0.1);
  assert.equal(typeof track.summary.elevationGainM, "number");
  assert.ok(Array.isArray(track.climbs));
});

test("重採樣會以內插點限制相鄰點距離並保留端點", async () => {
  const { resampleTrack } = await loadGenerator();
  const points = resampleTrack([
    { lat: 25, lng: 121, ele: 10 },
    { lat: 25.0018, lng: 121, ele: 30 }
  ], 110);

  assert.equal(points.length, 3);
  assert.deepEqual(points[0], { lat: 25, lng: 121, ele: 10 });
  assert.deepEqual(points[2], { lat: 25.0018, lng: 121, ele: 30 });
  assert.ok(points[1].ele > 19);
  assert.ok(points[1].ele < 21);
});

test("序列化 bundle 可由 TrackRegistry 登錄對應 route ID", async () => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const track = buildTrack(fixture);
  const registrations = [];
  const source = serializeBundle("taipei", { "taipei-fengguizui": track });
  const context = {
    CrownRideAtlas: {
      TrackRegistry: {
        register(bundleId, tracks) {
          registrations.push({ bundleId, tracks });
        }
      }
    }
  };

  vm.runInNewContext(source, context);
  assert.equal(registrations.length, 1);
  assert.equal(registrations[0].bundleId, "taipei");
  assert.deepEqual(
    JSON.parse(JSON.stringify(Object.keys(registrations[0].tracks))),
    ["taipei-fengguizui"]
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(registrations[0].tracks["taipei-fengguizui"])),
    track
  );
});

test("拒絕缺少海拔與非 LineString 的 BRouter 回應", async () => {
  const { parseBrouterFeature } = await loadGenerator();

  assert.throws(
    () => parseBrouterFeature({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [[121.5, 25], [121.501, 25.001, 12]]
      }
    }),
    /海拔/
  );
  assert.throws(
    () => parseBrouterFeature({
      type: "Feature",
      geometry: { type: "Point", coordinates: [121.5, 25, 10] }
    }),
    /LineString/
  );
});

test("拒絕台灣合理範圍外與相鄰點過遠的軌跡", async () => {
  const { parseBrouterFeature } = await loadGenerator();

  assert.throws(
    () => parseBrouterFeature({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [[139.7, 35.6, 10], [139.701, 35.601, 12]]
      }
    }),
    /台灣/
  );
  assert.throws(
    () => parseBrouterFeature({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [[121.5, 25, 10], [121.6, 25.1, 12]]
      }
    }),
    /相鄰點/
  );
});

test("route 選擇器拒絕未知 route ID", async () => {
  const { selectRoutes } = await loadGenerator();

  assert.throws(
    () => selectRoutes({ routeId: "unknown-route" }),
    /route ID/
  );
});

test("BRouter 用戶端固定 fastbike 與 GeoJSON 並序列化平行呼叫", async () => {
  const { createBrouterClient } = await loadGenerator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const urls = [];
  const headers = [];
  const delays = [];
  let nowMs = 0;
  let active = 0;
  let maximumActive = 0;
  const client = createBrouterClient({
    now: () => nowMs,
    sleep: async delayMs => {
      delays.push(delayMs);
      nowMs += delayMs;
    },
    fetchImpl: async (url, options) => {
      urls.push(url);
      headers.push(options.headers);
      active += 1;
      maximumActive = Math.max(maximumActive, active);
      await new Promise(resolve => setImmediate(resolve));
      active -= 1;
      return {
        ok: true,
        status: 200,
        async json() {
          return fixture;
        }
      };
    }
  });
  const seed = { waypoints: [[121.541, 25.021], [121.542, 25.022]] };

  await Promise.all([client.request(seed), client.request(seed)]);

  assert.equal(maximumActive, 1);
  assert.equal(urls.length, 2);
  assert.match(urls[0], /profile=fastbike/);
  assert.match(urls[0], /format=geojson/);
  assert.match(urls[0], /lonlats=121\.541%2C25\.021%7C121\.542%2C25\.022/);
  assert.match(headers[0]["User-Agent"], /CrownRideAtlas/);
  assert.deepEqual(delays, [1500]);
});

test("BRouter 暫時錯誤最多重試三次", async () => {
  const { createBrouterClient } = await loadGenerator();
  let attempts = 0;
  let nowMs = 0;
  const client = createBrouterClient({
    now: () => nowMs,
    sleep: async delayMs => {
      nowMs += delayMs;
    },
    fetchImpl: async () => {
      attempts += 1;
      return {
        ok: false,
        status: 503,
        statusText: "Unavailable",
        async text() {
          return "temporary";
        }
      };
    }
  });

  await assert.rejects(
    client.request({ waypoints: [[121.5, 25], [121.51, 25.01]] }),
    /503/
  );
  assert.equal(attempts, 4);
});

test("整批驗證失敗時不替換正式 bundle", async t => {
  const { publishBundles } = await loadGenerator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-tracks-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const publishedDirectory = path.join(temporaryRoot, "published");
  await fs.mkdir(publishedDirectory, { recursive: true });
  const target = path.join(publishedDirectory, "taipei.js");
  await fs.writeFile(target, "original", "utf8");

  await assert.rejects(
    publishBundles(
      new Map([["taipei", "replacement"]]),
      {
        publishedDirectory,
        validateBatch() {
          throw new Error("整批驗證失敗");
        }
      }
    ),
    /整批驗證失敗/
  );
  assert.equal(await fs.readFile(target, "utf8"), "original");
});

test("CLI 以注入 fetch 產生 staging，後續執行只讀取快取", async t => {
  const { runCli } = await loadGenerator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-cli-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const seedDirectory = path.join(temporaryRoot, "tools", "route-data", "seeds");
  await fs.mkdir(seedDirectory, { recursive: true });
  await fs.writeFile(
    path.join(seedDirectory, "taipei-fengguizui.json"),
    JSON.stringify({ waypoints: [[121.541, 25.021], [121.542, 25.022]] }),
    "utf8"
  );
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const routes = [{
    id: "taipei-fengguizui",
    routeRef: "taipei-fengguizui",
    regionId: "taipei"
  }];
  const manifest = {
    "taipei-fengguizui": {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js"
    }
  };
  let fetchCount = 0;

  await runCli(["--route", "taipei-fengguizui", "--staging"], {
    projectRoot: temporaryRoot,
    routes,
    manifest,
    sleep: async () => {},
    now: () => 0,
    fetchImpl: async () => {
      fetchCount += 1;
      return {
        ok: true,
        status: 200,
        async json() {
          return fixture;
        }
      };
    }
  });
  await runCli(["--route", "taipei-fengguizui", "--staging"], {
    projectRoot: temporaryRoot,
    routes,
    manifest,
    fetchImpl: async () => {
      throw new Error("快取命中時不應呼叫 fetch");
    }
  });

  assert.equal(fetchCount, 1);
  assert.equal(
    JSON.parse(await fs.readFile(
      path.join(temporaryRoot, "tools", "route-data", "cache", "taipei-fengguizui.geojson"),
      "utf8"
    )).type,
    "FeatureCollection"
  );
  const stagingSource = await fs.readFile(
    path.join(temporaryRoot, "tools", "route-data", ".staging", "taipei.js"),
    "utf8"
  );
  assert.match(stagingSource, /taipei-fengguizui/);
});

test("validator 載入 registry bundle 並拒絕不完整或無效資料", async () => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const { validateBundleSources } = await loadValidator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const manifest = {
    "taipei-fengguizui": {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js"
    }
  };
  const validSource = serializeBundle("taipei", {
    "taipei-fengguizui": buildTrack(fixture)
  });

  assert.equal(
    validateBundleSources(new Map([["taipei", validSource]]), {
      manifest,
      requireComplete: true
    }).routeCount,
    1
  );
  assert.throws(
    () => validateBundleSources(new Map([[
      "taipei",
      serializeBundle("taipei", {
        "taipei-fengguizui": {
          coordinates: [
            { lat: 25, lng: 121 },
            { lat: 25.001, lng: 121.001, ele: 12 }
          ],
          summary: {},
          climbs: []
        }
      })
    ]]), { manifest, requireComplete: true }),
    /海拔/
  );
  assert.throws(
    () => validateBundleSources(new Map(), { manifest, requireComplete: true }),
    /缺少/
  );
});
