"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const { createHash } = require("node:crypto");
const { pathToFileURL } = require("node:url");
const vm = require("node:vm");
const Geo = require("../js/core/geo.js");

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

function formalSeed(routeId, waypoints = [[121.541, 25.021], [121.542, 25.022]]) {
  return {
    id: routeId,
    direction: "point-to-point",
    profile: "fastbike",
    waypoints: waypoints.map(([lng, lat], index) => ({
      name: index === 0 ? "測試起點" : index === waypoints.length - 1 ? "測試終點" : `測試途經點 ${index}`,
      lng,
      lat,
      role: index === 0 ? "start" : index === waypoints.length - 1 ? "finish" : "via"
    })),
    reviewStatus: "approved",
    reviewedAt: "2026-07-26T00:00:00.000Z",
    reviewerNote: "測試用人工路線資料。"
  };
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

test("正式軌跡保留路線識別、BRouter SRTM 來源與具名人工地標", async () => {
  const { buildTrack } = await loadGenerator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const seed = {
    id: "taipei-fengguizui",
    direction: "out-and-back",
    profile: "fastbike",
    waypoints: [
      { name: "故宮博物院", lat: 25.1024, lng: 121.5485, role: "start" },
      { name: "風櫃嘴", lat: 25.1375, lng: 121.5972, role: "finish" }
    ],
    reviewStatus: "approved",
    reviewedAt: "2026-07-26T00:00:00.000Z",
    reviewerNote: "沿至善路與萬溪產業道路檢查。"
  };

  const track = buildTrack(fixture, {
    routeId: "taipei-fengguizui",
    seed,
    generatedAt: "2026-07-25T00:00:00.000Z"
  });

  assert.equal(track.routeId, "taipei-fengguizui");
  assert.equal(track.direction, "out-and-back");
  assert.deepEqual(track.source, {
    router: "BRouter",
    profile: "fastbike",
    elevation: "SRTM",
    samplingNote: "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
    generatedAt: "2026-07-25T00:00:00.000Z",
    reviewedAt: "2026-07-26T00:00:00.000Z",
    reviewStatus: "approved",
    reviewerNote: "沿至善路與萬溪產業道路檢查。"
  });
  assert.deepEqual(track.waypoints, seed.waypoints);
  assert.notEqual(track.waypoints, seed.waypoints);
});

test("正式軌跡依 seed 套用並保留可稽核的路線級海拔分析設定", async () => {
  const { buildTrack } = await loadGenerator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const seed = formalSeed("taoyuan-north-cross-baling");
  seed.elevationAnalysis = {
    smoothingWindowM: 500,
    gradeWindowM: 100,
    reason: "山區道路 SRTM 受橋梁與峽谷地表落差干擾。",
    referenceUrl: "https://hiking.biji.co/index.php?act=gpx_detail&id=4524145&q=trail",
    referenceLabel: "健行筆記同距離實測路線"
  };

  const track = buildTrack(fixture, {
    routeId: seed.id,
    seed,
    generatedAt: "2026-07-25T00:00:00.000Z"
  });

  assert.deepEqual(track.source.elevationAnalysis, seed.elevationAnalysis);
  assert.equal(track.coordinates[0].ele, 12);
});

test("路線級海拔分析設定拒絕過小視窗與不可稽核來源", async () => {
  const { validateTrackSeed } = await loadGenerator();
  const seed = formalSeed("taoyuan-north-cross-baling");

  assert.throws(() => validateTrackSeed({
    ...seed,
    elevationAnalysis: {
      smoothingWindowM: 99,
      gradeWindowM: 100,
      reason: "測試",
      referenceUrl: "javascript:alert(1)",
      referenceLabel: ""
    }
  }, seed.id), /海拔分析/);
});

test("正式軌跡拒絕識別不符、無效方向與未具名地標", async () => {
  const { buildTrack } = await loadGenerator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const baseSeed = {
    id: "taipei-fengguizui",
    direction: "out-and-back",
    profile: "fastbike",
    waypoints: [
      { name: "故宮博物院", lat: 25.021, lng: 121.541, role: "start" },
      { name: "風櫃嘴", lat: 25.022, lng: 121.542, role: "finish" }
    ],
    reviewStatus: "approved",
    reviewedAt: "2026-07-26T00:00:00.000Z",
    reviewerNote: "已檢查。"
  };

  assert.throws(
    () => buildTrack(fixture, {
      routeId: "other-route",
      seed: baseSeed,
      generatedAt: "2026-07-25T00:00:00.000Z"
    }),
    /識別碼/
  );
  assert.throws(
    () => buildTrack(fixture, {
      routeId: baseSeed.id,
      seed: { ...baseSeed, direction: "teleport" },
      generatedAt: "2026-07-25T00:00:00.000Z"
    }),
    /方向/
  );
  assert.throws(
    () => buildTrack(fixture, {
      routeId: baseSeed.id,
      seed: {
        ...baseSeed,
        waypoints: [
          { name: "", lat: 25.021, lng: 121.541, role: "start" },
          baseSeed.waypoints[1]
        ]
      },
      generatedAt: "2026-07-25T00:00:00.000Z"
    }),
    /名稱/
  );
});

test("重採樣會將相鄰點距離限制在 30 至 80 公尺並保留端點", async () => {
  const { resampleTrack } = await loadGenerator();
  const points = resampleTrack([
    { lat: 25, lng: 121, ele: 10 },
    { lat: 25.0018, lng: 121, ele: 30 }
  ]);

  assert.deepEqual(points[0], { lat: 25, lng: 121, ele: 10 });
  assert.deepEqual(points.at(-1), { lat: 25.0018, lng: 121, ele: 30 });
  points.slice(1).forEach((point, index) => {
    const distanceM = Geo.haversineKm(points[index], point) * 1000;
    assert.ok(distanceM >= 30, `相鄰距離 ${distanceM}m 小於 30m`);
    assert.ok(distanceM <= 80, `相鄰距離 ${distanceM}m 大於 80m`);
  });
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

test("地區 route 選擇器只納入 track manifest 管理的實際騎乘路線", async () => {
  const { selectRoutes } = await loadGenerator();
  const routes = [
    { id: "taipei-fengguizui", regionId: "taipei" },
    { id: "route-art-crown", regionId: "taipei" }
  ];
  const manifest = {
    "taipei-fengguizui": { bundleId: "taipei" },
    "route-art-crown": { bundleId: "route-art" }
  };

  assert.deepEqual(
    selectRoutes({ regionIds: ["taipei"] }, routes, manifest),
    [routes[0]]
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
    JSON.stringify(formalSeed("taipei-fengguizui")),
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
    )).response.type,
    "FeatureCollection"
  );
  const stagingSource = await fs.readFile(
    path.join(temporaryRoot, "tools", "route-data", ".staging", "taipei.js"),
    "utf8"
  );
  assert.match(stagingSource, /taipei-fengguizui/);
  const { parseBundleSource } = await loadValidator();
  const stagedTrack = parseBundleSource("taipei", stagingSource)["taipei-fengguizui"];
  assert.equal(stagedTrack.source.generatedAt, "1970-01-01T00:00:00.000Z");
  assert.equal(stagedTrack.routeId, "taipei-fengguizui");
});

test("快取命中時保留原始資料產生時間而非每次改寫", async t => {
  const { runCli } = await loadGenerator();
  const { parseBundleSource } = await loadValidator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-generated-at-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const seedDirectory = path.join(temporaryRoot, "tools", "route-data", "seeds");
  await fs.mkdir(seedDirectory, { recursive: true });
  await fs.writeFile(
    path.join(seedDirectory, "taipei-fengguizui.json"),
    JSON.stringify({
      id: "taipei-fengguizui",
      direction: "point-to-point",
      profile: "fastbike",
      waypoints: [
        { name: "起點", lng: 121.541, lat: 25.021, role: "start" },
        { name: "終點", lng: 121.542, lat: 25.022, role: "finish" }
      ],
      reviewStatus: "approved",
      reviewedAt: "2026-07-26T00:00:00.000Z",
      reviewerNote: "測試用具名道路。"
    }),
    "utf8"
  );
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const routes = [{ id: "taipei-fengguizui", trackRef: "taipei-fengguizui", regionId: "taipei" }];
  const manifest = {
    "taipei-fengguizui": { bundleId: "taipei", src: "js/data/tracks/taipei.js" }
  };

  await runCli(["--route", "taipei-fengguizui", "--staging"], {
    projectRoot: temporaryRoot,
    routes,
    manifest,
    now: () => Date.parse("2026-07-25T12:00:00.000Z"),
    fetchImpl: async () => ({ ok: true, status: 200, async json() { return fixture; } })
  });
  await runCli(["--route", "taipei-fengguizui", "--staging"], {
    projectRoot: temporaryRoot,
    routes,
    manifest,
    now: () => Date.parse("2026-07-26T12:00:00.000Z"),
    fetchImpl: async () => { throw new Error("快取命中時不可呼叫"); }
  });

  const source = await fs.readFile(
    path.join(temporaryRoot, "tools", "route-data", ".staging", "taipei.js"),
    "utf8"
  );
  assert.equal(
    parseBundleSource("taipei", source)["taipei-fengguizui"].source.generatedAt,
    "2026-07-25T12:00:00.000Z"
  );
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
    /軌跡資料|海拔/
  );
  assert.throws(
    () => validateBundleSources(new Map(), { manifest, requireComplete: true }),
    /缺少/
  );
});

test("正式 validator 要求已審查來源、正確 routeId 與貼近軌跡的地標", async () => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const { validateBundleSources } = await loadValidator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const manifest = {
    "taipei-fengguizui": {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js"
    }
  };
  const seed = {
    id: "taipei-fengguizui",
    direction: "point-to-point",
    profile: "fastbike",
    waypoints: [
      { name: "起點", lat: 25.021, lng: 121.541, role: "start" },
      { name: "終點", lat: 25.022, lng: 121.542, role: "finish" }
    ],
    reviewStatus: "approved",
    reviewedAt: "2026-07-26T00:00:00.000Z",
    reviewerNote: "依 OSM 與 BRouter 疊圖檢查。"
  };
  const track = buildTrack(fixture, {
    routeId: seed.id,
    seed,
    generatedAt: "2026-07-25T00:00:00.000Z"
  });
  const source = serializeBundle("taipei", { [seed.id]: track });

  assert.equal(validateBundleSources(new Map([["taipei", source]]), {
    manifest,
    requireComplete: true,
    requireReviewMetadata: true
  }).routeCount, 1);

  const pending = JSON.parse(JSON.stringify(track));
  pending.source.reviewStatus = "pending";
  assert.throws(
    () => validateBundleSources(
      new Map([["taipei", serializeBundle("taipei", { [seed.id]: pending })]]),
      { manifest, requireComplete: true, requireReviewMetadata: true }
    ),
    /審查/
  );

  const farWaypoint = JSON.parse(JSON.stringify(track));
  farWaypoint.waypoints[1].lat = 24.5;
  assert.throws(
    () => validateBundleSources(
      new Map([["taipei", serializeBundle("taipei", { [seed.id]: farWaypoint })]]),
      { manifest, requireComplete: true, requireReviewMetadata: true }
    ),
    /地標/
  );

  const wrongRoute = JSON.parse(JSON.stringify(track));
  wrongRoute.routeId = "other-route";
  assert.throws(
    () => validateBundleSources(
      new Map([["taipei", serializeBundle("taipei", { [seed.id]: wrongRoute })]]),
      { manifest, requireComplete: true, requireReviewMetadata: true }
    ),
    /routeId/
  );
});

test("正式 validator 以軌跡線段而非取樣頂點判斷地標貼近程度", async () => {
  const { serializeBundle } = await loadGenerator();
  const { validateBundleSources } = await loadValidator();
  const { analyzeCoordinates } = require("../js/core/track-analysis.js");
  const routeId = "taipei-fengguizui";
  const analysis = analyzeCoordinates([
    { lat: 25, lng: 121, ele: 10 },
    { lat: 25, lng: 121.01, ele: 10 }
  ]);
  const track = {
    routeId,
    direction: "point-to-point",
    source: {
      router: "BRouter",
      profile: "fastbike",
      elevation: "SRTM",
      generatedAt: "2026-07-25T00:00:00.000Z",
      reviewStatus: "approved",
      reviewedAt: "2026-07-26T00:00:00.000Z",
      reviewerNote: "測試線段距離。"
    },
    waypoints: [
      { name: "線段中點起點", lat: 25, lng: 121.005, role: "start" },
      { name: "線段中點終點", lat: 25, lng: 121.005, role: "finish" }
    ],
    ...analysis
  };
  const manifest = {
    [routeId]: { bundleId: "taipei", src: "js/data/tracks/taipei.js" }
  };

  assert.equal(validateBundleSources(
    new Map([["taipei", serializeBundle("taipei", { [routeId]: track })]]),
    { manifest, requireComplete: true, requireReviewMetadata: true }
  ).routeCount, 1);
});

test("validator --regions 只要求指定地區完整並套用正式審查閘門", async t => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const { runCli: runValidatorCli } = await loadValidator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-region-validate-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const stagingDirectory = path.join(temporaryRoot, "tools", "route-data", ".staging");
  await fs.mkdir(stagingDirectory, { recursive: true });
  const seed = {
    id: "taipei-fengguizui",
    direction: "point-to-point",
    profile: "fastbike",
    waypoints: [
      { name: "起點", lat: 25.021, lng: 121.541, role: "start" },
      { name: "終點", lat: 25.022, lng: 121.542, role: "finish" }
    ],
    reviewStatus: "approved",
    reviewedAt: "2026-07-26T00:00:00.000Z",
    reviewerNote: "依 OSM 與 BRouter 疊圖檢查。"
  };
  await fs.writeFile(
    path.join(stagingDirectory, "taipei.js"),
    serializeBundle("taipei", {
      [seed.id]: buildTrack(fixture, {
        routeId: seed.id,
        seed,
        generatedAt: "2026-07-25T00:00:00.000Z"
      })
    }),
    "utf8"
  );
  const manifest = {
    [seed.id]: { bundleId: "taipei", src: "js/data/tracks/taipei.js", regionId: "taipei" },
    "route-art-crown": {
      bundleId: "route-art",
      src: "js/data/tracks/route-art.js",
      regionId: "taipei"
    },
    "taipei-zhongsha-road": {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js",
      regionId: "taipei"
    },
    "taichung-route-136": {
      bundleId: "taichung",
      src: "js/data/tracks/taichung.js",
      regionId: "taichung"
    }
  };

  await assert.rejects(
    runValidatorCli(["--staging", "--regions", "taipei"], {
      projectRoot: temporaryRoot,
      manifest,
      routes: [
        { id: seed.id, regionId: "taipei" },
        { id: "route-art-crown", regionId: "taipei" },
        { id: "taipei-zhongsha-road", regionId: "taipei" },
        { id: "taichung-route-136", regionId: "taichung" }
      ]
    }),
    /taipei-zhongsha-road/
  );

  const secondSeed = { ...seed, id: "taipei-zhongsha-road" };
  await fs.writeFile(
    path.join(stagingDirectory, "taipei.js"),
    serializeBundle("taipei", {
      [seed.id]: buildTrack(fixture, {
        routeId: seed.id,
        seed,
        generatedAt: "2026-07-25T00:00:00.000Z"
      }),
      [secondSeed.id]: buildTrack(fixture, {
        routeId: secondSeed.id,
        seed: secondSeed,
        generatedAt: "2026-07-25T00:00:00.000Z"
      })
    }),
    "utf8"
  );
  const result = await runValidatorCli(["--staging", "--regions", "taipei"], {
    projectRoot: temporaryRoot,
    manifest,
    routes: [
      { id: seed.id, regionId: "taipei" },
      { id: "route-art-crown", regionId: "taipei" },
      { id: secondSeed.id, regionId: "taipei" },
      { id: "taichung-route-136", regionId: "taichung" }
    ]
  });

  assert.equal(result.routeCount, 2);
});

test("正式 bundle 第二檔提交失敗時會復原整批原始內容", async t => {
  const { publishBundles } = await loadGenerator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-publish-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const publishedDirectory = path.join(temporaryRoot, "published");
  await fs.mkdir(publishedDirectory, { recursive: true });
  await fs.writeFile(path.join(publishedDirectory, "taipei.js"), "taipei-original", "utf8");
  await fs.writeFile(path.join(publishedDirectory, "new-taipei.js"), "new-taipei-original", "utf8");
  let preparedRenames = 0;
  const fsImpl = {
    ...fs,
    async rename(source, target) {
      if (source.includes(".prepared.")) {
        preparedRenames += 1;
        if (preparedRenames === 2) {
          const error = new Error("simulated second-file I/O failure");
          error.code = "EIO";
          throw error;
        }
      }
      return fs.rename(source, target);
    }
  };

  await assert.rejects(
    publishBundles(
      new Map([
        ["taipei", "taipei-replacement"],
        ["new-taipei", "new-taipei-replacement"]
      ]),
      {
        publishedDirectory,
        fsImpl,
        validateBatch() {}
      }
    ),
    /second-file/
  );

  assert.equal(
    await fs.readFile(path.join(publishedDirectory, "taipei.js"), "utf8"),
    "taipei-original"
  );
  assert.equal(
    await fs.readFile(path.join(publishedDirectory, "new-taipei.js"), "utf8"),
    "new-taipei-original"
  );
});

test("不安全 route ID 不得逃逸 cache 與 seed 目錄", async t => {
  const { runCli } = await loadGenerator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-route-path-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const routeDataDirectory = path.join(temporaryRoot, "tools", "route-data");
  await fs.mkdir(routeDataDirectory, { recursive: true });
  await fs.writeFile(
    path.join(routeDataDirectory, "escaped.json"),
    JSON.stringify(formalSeed("../escaped")),
    "utf8"
  );
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));

  await assert.rejects(
    runCli(["--route", "../escaped", "--staging"], {
      projectRoot: temporaryRoot,
      routes: [{ id: "../escaped", trackRef: "../escaped", regionId: "taipei" }],
      manifest: {
        "../escaped": {
          bundleId: "taipei",
          src: "js/data/tracks/taipei.js"
        }
      },
      fetchImpl: async () => ({
        ok: true,
        status: 200,
        async json() {
          return fixture;
        }
      })
    }),
    /安全.*route ID|route ID.*安全/
  );
  await assert.rejects(
    fs.access(path.join(routeDataDirectory, "escaped.geojson")),
    /ENOENT/
  );
});

test("不安全 bundle ID 不得逃逸 staging 目錄", async t => {
  const { runCli } = await loadGenerator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-bundle-path-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const cacheDirectory = path.join(temporaryRoot, "tools", "route-data", "cache");
  await fs.mkdir(cacheDirectory, { recursive: true });
  await fs.copyFile(
    fixturePath,
    path.join(cacheDirectory, "taipei-fengguizui.geojson")
  );

  await assert.rejects(
    runCli(["--route", "taipei-fengguizui", "--staging"], {
      projectRoot: temporaryRoot,
      routes: [{
        id: "taipei-fengguizui",
        trackRef: "taipei-fengguizui",
        regionId: "taipei"
      }],
      manifest: {
        "taipei-fengguizui": {
          bundleId: "../escaped",
          src: "js/data/tracks/taipei.js"
        }
      }
    }),
    /安全.*bundle ID|bundle ID.*安全/
  );
  await assert.rejects(
    fs.access(path.join(temporaryRoot, "tools", "route-data", "escaped.js")),
    /ENOENT/
  );
});

test("validator 拒絕逃逸正式 tracks 根目錄的 manifest src", async t => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const { runCli: runValidatorCli } = await loadValidator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-src-path-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const projectRoot = path.join(temporaryRoot, "project");
  await fs.mkdir(projectRoot, { recursive: true });
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  await fs.writeFile(
    path.join(temporaryRoot, "escaped.js"),
    serializeBundle("taipei", {
      "taipei-fengguizui": buildTrack(fixture)
    }),
    "utf8"
  );

  await assert.rejects(
    runValidatorCli(["--published"], {
      projectRoot,
      manifest: {
        "taipei-fengguizui": {
          bundleId: "taipei",
          src: "../escaped.js"
        }
      }
    }),
    /安全.*src|src.*安全/
  );
});

test("直線密集點會整理為 30 至 80 公尺取樣", async () => {
  const { resampleTrack } = await loadGenerator();
  const densePoints = Array.from({ length: 21 }, (_, index) => ({
    lat: 25 + index * 0.000045,
    lng: 121,
    ele: 100
  }));
  const sampled = resampleTrack(densePoints);

  assert.ok(sampled.length < densePoints.length);
  sampled.slice(1).forEach((point, index) => {
    const distanceM = Geo.haversineKm(sampled[index], point) * 1000;
    assert.ok(distanceM >= 30, `相鄰距離 ${distanceM}m 小於 30m`);
    assert.ok(distanceM <= 80, `相鄰距離 ${distanceM}m 大於 80m`);
  });
});

test("密集真實轉彎與 SRTM 雜訊不會把每個原始點都變成短距離 anchor", async () => {
  const {
    resampleTrack,
    MAX_RESAMPLED_GEOMETRY_DEVIATION_M
  } = await loadGenerator();
  const diagnostics = {};
  const metersToLatitude = meters => meters / 111_320;
  const metersToLongitude = meters => meters / (111_320 * Math.cos(25 * Math.PI / 180));
  const denseNoisyRoute = [];

  for (let meters = 0; meters <= 300; meters += 5) {
    const lateralJitterM = meters === 0 || meters === 300
      ? 0
      : meters % 10 === 0 ? 0.8 : -0.8;
    denseNoisyRoute.push({
      lat: 25 + metersToLatitude(meters),
      lng: 121 + metersToLongitude(lateralJitterM),
      ele: 100 + meters * 0.05 + (meters % 10 === 0 ? 1.2 : -1.2)
    });
  }
  for (let meters = 5; meters <= 300; meters += 5) {
    const lateralJitterM = meters === 300
      ? 0
      : meters % 10 === 0 ? 0.8 : -0.8;
    denseNoisyRoute.push({
      lat: 25 + metersToLatitude(300 + lateralJitterM),
      lng: 121 + metersToLongitude(meters),
      ele: 115 - meters * 0.03 + (meters % 10 === 0 ? 1.2 : -1.2)
    });
  }

  const sampled = resampleTrack(denseNoisyRoute, undefined, diagnostics);
  const distancesM = sampled.slice(1).map((point, index) => (
    Geo.haversineKm(sampled[index], point) * 1000
  ));
  const shortSegments = distancesM.filter(distanceM => distanceM < 30);
  const corner = denseNoisyRoute[60];

  assert.ok(sampled.length < denseNoisyRoute.length / 2);
  assert.ok(sampled.some(point => point.lat === corner.lat && point.lng === corner.lng));
  assert.ok(distancesM.every(distanceM => distanceM <= 80.01));
  assert.ok(shortSegments.length <= 1, `非必要短片段共 ${shortSegments.length} 段`);
  assert.ok(Math.max(...sampled.map(point => point.ele)) >= 113);
  assert.ok(sampled.at(-1).ele < 108);
  assert.ok(
    diagnostics.maximumGeometryDeviationM <= MAX_RESAMPLED_GEOMETRY_DEVIATION_M
  );
  assert.ok(diagnostics.nonEssentialShortSegmentRatio <= 0.05);
  assert.ok(diagnostics.maximumAdjacentM <= 80);
});

test("必要急彎可保留短距離 anchor 以避免髮夾彎被弦線截短", async () => {
  const {
    resampleTrack,
    MAX_RESAMPLED_GEOMETRY_DEVIATION_M
  } = await loadGenerator();
  const diagnostics = {};
  const radiusM = 20;
  const centerLat = 25;
  const centerLng = 121;
  const metersToLatitude = meters => meters / 111_320;
  const metersToLongitude = meters => meters / (111_320 * Math.cos(25 * Math.PI / 180));
  const hairpin = Array.from({ length: 37 }, (_, index) => {
    const angle = Math.PI * index / 36;
    return {
      lat: centerLat + metersToLatitude(Math.sin(angle) * radiusM),
      lng: centerLng + metersToLongitude(Math.cos(angle) * radiusM),
      ele: 100
    };
  });
  const distanceKm = points => points.slice(1).reduce((total, point, index) => (
    total + Geo.haversineKm(points[index], point)
  ), 0);

  const sampled = resampleTrack(hairpin, undefined, diagnostics);

  assert.ok(distanceKm(sampled) >= distanceKm(hairpin) * 0.995);
  assert.ok(sampled.some(point => (
    Geo.haversineKm(point, hairpin[18]) * 1000 < 1
  )));
  assert.ok(diagnostics.essentialShortSegmentCount > 0);
  assert.equal(diagnostics.nonEssentialShortSegmentCount, 0);
  assert.ok(diagnostics.distanceErrorRatio <= 0.005);
  assert.ok(
    diagnostics.maximumGeometryDeviationM <= MAX_RESAMPLED_GEOMETRY_DEVIATION_M
  );
});

test("整體距離已達標時仍須保留局部偏離道路超過 5 公尺的彎點", async () => {
  const {
    resampleTrack,
    MAX_RESAMPLED_GEOMETRY_DEVIATION_M
  } = await loadGenerator();
  const diagnostics = {};
  const metersToLatitude = meters => meters / 111_320;
  const metersToLongitude = meters => meters / (111_320 * Math.cos(25 * Math.PI / 180));
  const route = Array.from({ length: 2001 }, (_, index) => {
    const forwardM = index * 5;
    const distanceFromDetourM = Math.abs(forwardM - 5_025);
    const detourM = distanceFromDetourM <= 15
      ? 15 * (1 - distanceFromDetourM / 15)
      : 0;
    return {
      lat: 25 + metersToLatitude(forwardM),
      lng: 121 + metersToLongitude(detourM),
      ele: 100
    };
  });

  const sampled = resampleTrack(route, undefined, diagnostics);

  assert.ok(diagnostics.distanceErrorRatio <= 0.005);
  assert.ok(
    diagnostics.maximumGeometryDeviationM <= MAX_RESAMPLED_GEOMETRY_DEVIATION_M,
    `最大道路偏差 ${diagnostics.maximumGeometryDeviationM}m 超過 `
      + `${MAX_RESAMPLED_GEOMETRY_DEVIATION_M}m`
  );
  assert.ok(sampled.length < route.length);
});

test("非單調候選前綴仍須找到同時符合距離與幾何門檻的結果", async () => {
  const {
    resampleTrack,
    MAX_RESAMPLED_GEOMETRY_DEVIATION_M
  } = await loadGenerator();
  const diagnostics = {};
  let randomState = 246813579;
  const random = () => {
    randomState = (1664525 * randomState + 1013904223) >>> 0;
    return randomState / 4294967296;
  };
  let route;
  for (let trial = 0; trial <= 11; trial += 1) {
    const pointCount = 100 + Math.floor(random() * 400);
    let eastM = 0;
    let northM = 0;
    let slope = 0;
    route = Array.from({ length: pointCount }, (_, index) => {
      eastM += 3 + random() * 17;
      if (random() < 0.12) {
        slope += (random() - 0.5) * 1.8;
      } else {
        slope *= 0.92;
      }
      northM += slope * (3 + random() * 17);
      return {
        lat: 25 + northM / 111_320,
        lng: 121 + eastM / (111_320 * Math.cos(25 * Math.PI / 180)),
        ele: 100 + Math.sin(index / 10) * 5
      };
    });
    if (trial === 11) {
      assert.equal(route.length, 398);
    }
  }

  resampleTrack(route, undefined, diagnostics);

  assert.ok(
    diagnostics.maximumGeometryDeviationM <= MAX_RESAMPLED_GEOMETRY_DEVIATION_M,
    `最大道路偏差 ${diagnostics.maximumGeometryDeviationM}m 超過 `
      + `${MAX_RESAMPLED_GEOMETRY_DEVIATION_M}m`
  );
  assert.ok(
    diagnostics.distanceErrorRatio <= 0.005,
    `距離誤差 ${diagnostics.distanceErrorRatio} 超過 0.005`
  );
});

test("所有 RDP 候選仍無法達標時 buildTrack 必須 hard-fail", async () => {
  const { buildTrack } = await loadGenerator();
  const metersToLatitude = meters => meters / 111_320;
  const metersToLongitude = meters => meters / (111_320 * Math.cos(25 * Math.PI / 180));
  const coordinates = Array.from({ length: 257 }, (_, index) => {
    const lateralM = index === 0 || index === 256
      ? 0
      : index % 2 === 0 ? -0.5 : 0.5;
    return [
      121 + metersToLongitude(lateralM),
      25 + metersToLatitude(index * 5),
      100
    ];
  });

  assert.throws(
    () => buildTrack({
      type: "Feature",
      geometry: { type: "LineString", coordinates },
      properties: {}
    }),
    /重採樣.*無法同時符合/
  );
});

test("重採樣會保留道路轉彎點", async () => {
  const { resampleTrack } = await loadGenerator();
  const corner = { lat: 25.00045, lng: 121, ele: 100 };
  const denseTurn = [
    ...Array.from({ length: 6 }, (_, index) => ({
      lat: 25 + index * 0.00009,
      lng: 121,
      ele: 100
    })),
    ...Array.from({ length: 5 }, (_, index) => ({
      lat: corner.lat,
      lng: 121 + (index + 1) * 0.0001,
      ele: 100
    }))
  ];
  const sampled = resampleTrack(denseTurn);

  assert.ok(sampled.length < denseTurn.length);
  assert.ok(sampled.some(point => point.lat === corner.lat && point.lng === corner.lng));
});

test("重採樣會保留明顯坡度變化點", async () => {
  const { resampleTrack } = await loadGenerator();
  const gradeChange = { lat: 25.00045, lng: 121, ele: 100 };
  const denseSlope = Array.from({ length: 11 }, (_, index) => ({
    lat: 25 + index * 0.00009,
    lng: 121,
    ele: index <= 5 ? 100 : 100 + (index - 5) * 5
  }));
  const sampled = resampleTrack(denseSlope);

  assert.ok(sampled.length < denseSlope.length);
  assert.ok(sampled.some(point => (
    point.lat === gradeChange.lat
    && point.lng === gradeChange.lng
    && point.ele === gradeChange.ele
  )));
});

test("validator 拒絕與座標重新分析結果矛盾的摘要", async () => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const { validateBundleSources } = await loadValidator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const track = buildTrack(fixture);
  track.summary.distanceKm += 5;
  const manifest = {
    "taipei-fengguizui": {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js"
    }
  };

  assert.throws(
    () => validateBundleSources(
      new Map([[
        "taipei",
        serializeBundle("taipei", { "taipei-fengguizui": track })
      ]]),
      { manifest, requireComplete: true }
    ),
    /摘要.*不一致/
  );
});

test("validator 拒絕遭篡改的逐點距離、平滑海拔、坡度與坡度分級", async () => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const { validateBundleSources } = await loadValidator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const routeId = "taipei-fengguizui";
  const track = buildTrack(fixture, {
    routeId,
    seed: formalSeed(routeId),
    generatedAt: "2026-07-25T00:00:00.000Z"
  });
  const manifest = {
    [routeId]: {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js"
    }
  };

  for (const [field, bogusValue] of [
    ["distanceKm", 999],
    ["smoothedEle", 999],
    ["gradePct", 999],
    ["gradeBand", "bogus"]
  ]) {
    const tampered = JSON.parse(JSON.stringify(track));
    tampered.coordinates[1][field] = bogusValue;
    assert.throws(
      () => validateBundleSources(
        new Map([[
          "taipei",
          serializeBundle("taipei", { [routeId]: tampered })
        ]]),
        { manifest, requireComplete: true }
      ),
      new RegExp(`座標.*${field}`)
    );
  }
});

test("validator 拒絕欄位矛盾與索引越界的爬坡", async () => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const { validateBundleSources } = await loadValidator();
  const climbingPayload = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [[121, 25, 100], [121, 25.0045, 140]]
    }
  };
  const track = buildTrack(climbingPayload);
  const manifest = {
    "taipei-fengguizui": {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js"
    }
  };
  assert.equal(track.climbs.length, 1);

  const wrongGain = JSON.parse(JSON.stringify(track));
  wrongGain.climbs[0].gainM += 10;
  assert.throws(
    () => validateBundleSources(
      new Map([[
        "taipei",
        serializeBundle("taipei", { "taipei-fengguizui": wrongGain })
      ]]),
      { manifest, requireComplete: true }
    ),
    /爬坡.*不一致/
  );

  const invalidIndex = JSON.parse(JSON.stringify(track));
  invalidIndex.climbs[0].endIndex = invalidIndex.coordinates.length;
  assert.throws(
    () => validateBundleSources(
      new Map([[
        "taipei",
        serializeBundle("taipei", { "taipei-fengguizui": invalidIndex })
      ]]),
      { manifest, requireComplete: true }
    ),
    /爬坡.*索引/
  );
});

test("validator 使用正式 TrackRegistry 契約拒絕空 bundle", async () => {
  const { serializeBundle } = await loadGenerator();
  const { validateBundleSources } = await loadValidator();
  const manifest = {
    "taipei-fengguizui": {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js"
    }
  };

  assert.throws(
    () => validateBundleSources(
      new Map([["taipei", serializeBundle("taipei", {})]]),
      { manifest, requireComplete: true }
    ),
    /軌跡資料/
  );
});

test("人工 seed 變更時不會誤用舊 BRouter 快取", async t => {
  const { runCli } = await loadGenerator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-cache-fingerprint-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const seedDirectory = path.join(temporaryRoot, "tools", "route-data", "seeds");
  await fs.mkdir(seedDirectory, { recursive: true });
  const seedPath = path.join(seedDirectory, "taipei-fengguizui.json");
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const routes = [{
    id: "taipei-fengguizui",
    trackRef: "taipei-fengguizui",
    regionId: "taipei"
  }];
  const manifest = {
    "taipei-fengguizui": {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js"
    }
  };
  let fetchCount = 0;
  const options = {
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
  };
  await fs.writeFile(
    seedPath,
    JSON.stringify(formalSeed("taipei-fengguizui")),
    "utf8"
  );
  await runCli(["--route", "taipei-fengguizui", "--staging"], options);
  const firstCache = JSON.parse(await fs.readFile(
    path.join(temporaryRoot, "tools", "route-data", "cache", "taipei-fengguizui.geojson"),
    "utf8"
  ));

  await fs.writeFile(
    seedPath,
    JSON.stringify(formalSeed("taipei-fengguizui", [[121.541, 25.021], [121.543, 25.023]])),
    "utf8"
  );
  await runCli(["--route", "taipei-fengguizui", "--staging"], options);
  const secondCache = JSON.parse(await fs.readFile(
    path.join(temporaryRoot, "tools", "route-data", "cache", "taipei-fengguizui.geojson"),
    "utf8"
  ));

  assert.equal(fetchCount, 2);
  assert.notEqual(firstCache.fingerprint, secondCache.fingerprint);
});

test("舊版 v3 快取命中時不重新請求並升級為請求參數 fingerprint", async t => {
  const { runCli } = await loadGenerator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-cache-v3-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const routeDataDirectory = path.join(temporaryRoot, "tools", "route-data");
  const seedDirectory = path.join(routeDataDirectory, "seeds");
  const cacheDirectory = path.join(routeDataDirectory, "cache");
  await fs.mkdir(seedDirectory, { recursive: true });
  await fs.mkdir(cacheDirectory, { recursive: true });
  const routeId = "taipei-fengguizui";
  const previousSeed = formalSeed(routeId);
  const seed = { ...previousSeed, direction: "out-and-back" };
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const oldFingerprint = createHash("sha256").update(JSON.stringify({
    id: previousSeed.id,
    profile: previousSeed.profile,
    direction: previousSeed.direction,
    waypoints: previousSeed.waypoints.map(waypoint => [waypoint.lng, waypoint.lat])
  })).digest("hex");
  const cachePath = path.join(cacheDirectory, `${routeId}.geojson`);
  await fs.writeFile(
    path.join(seedDirectory, `${routeId}.json`),
    JSON.stringify(seed),
    "utf8"
  );
  await fs.writeFile(cachePath, JSON.stringify({
    version: 3,
    fingerprint: oldFingerprint,
    generatedAt: "2026-07-25T00:00:00.000Z",
    response: fixture
  }), "utf8");
  let fetchCount = 0;

  await runCli(["--route", routeId, "--staging"], {
    projectRoot: temporaryRoot,
    routes: [{ id: routeId, trackRef: routeId, regionId: "taipei" }],
    manifest: {
      [routeId]: { bundleId: "taipei", src: "js/data/tracks/taipei.js" }
    },
    fetchImpl: async () => {
      fetchCount += 1;
      return { ok: true, status: 200, async json() { return fixture; } };
    }
  });

  const upgradedCache = JSON.parse(await fs.readFile(cachePath, "utf8"));
  assert.equal(fetchCount, 0);
  assert.equal(upgradedCache.version, 3);
  assert.notEqual(upgradedCache.fingerprint, oldFingerprint);
  assert.deepEqual(upgradedCache.response, fixture);
});

test("路線方向變更時沿用 BRouter 幾何快取並更新輸出方向", async t => {
  const { runCli } = await loadGenerator();
  const { parseBundleSource } = await loadValidator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-cache-direction-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const seedDirectory = path.join(temporaryRoot, "tools", "route-data", "seeds");
  await fs.mkdir(seedDirectory, { recursive: true });
  const seedPath = path.join(seedDirectory, "taipei-fengguizui.json");
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const routes = [{
    id: "taipei-fengguizui",
    trackRef: "taipei-fengguizui",
    regionId: "taipei"
  }];
  const manifest = {
    "taipei-fengguizui": {
      bundleId: "taipei",
      src: "js/data/tracks/taipei.js"
    }
  };
  let fetchCount = 0;
  const options = {
    projectRoot: temporaryRoot,
    routes,
    manifest,
    sleep: async () => {},
    now: () => 0,
    fetchImpl: async () => {
      fetchCount += 1;
      return { ok: true, status: 200, async json() { return fixture; } };
    }
  };
  const firstSeed = formalSeed("taipei-fengguizui");
  await fs.writeFile(seedPath, JSON.stringify(firstSeed), "utf8");
  await runCli(["--route", firstSeed.id, "--staging"], options);
  await fs.writeFile(
    seedPath,
    JSON.stringify({ ...firstSeed, direction: "out-and-back" }),
    "utf8"
  );
  await runCli(["--route", firstSeed.id, "--staging"], options);
  const source = await fs.readFile(
    path.join(temporaryRoot, "tools", "route-data", ".staging", "taipei.js"),
    "utf8"
  );
  const tracks = parseBundleSource("taipei", source);

  assert.equal(fetchCount, 1);
  assert.equal(tracks[firstSeed.id].direction, "out-and-back");
});

test("僅修改審查 metadata 時仍命中既有 BRouter 快取", async t => {
  const { runCli } = await loadGenerator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-cache-review-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const seedDirectory = path.join(temporaryRoot, "tools", "route-data", "seeds");
  await fs.mkdir(seedDirectory, { recursive: true });
  const seedPath = path.join(seedDirectory, "taipei-fengguizui.json");
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const routeId = "taipei-fengguizui";
  const routes = [{ id: routeId, trackRef: routeId, regionId: "taipei" }];
  const manifest = {
    [routeId]: { bundleId: "taipei", src: "js/data/tracks/taipei.js" }
  };
  let fetchCount = 0;
  const options = {
    projectRoot: temporaryRoot,
    routes,
    manifest,
    sleep: async () => {},
    now: () => Date.parse("2026-07-25T00:00:00.000Z"),
    fetchImpl: async () => {
      fetchCount += 1;
      return { ok: true, status: 200, async json() { return fixture; } };
    }
  };
  const seed = formalSeed(routeId);
  await fs.writeFile(seedPath, JSON.stringify(seed), "utf8");
  await runCli(["--route", routeId, "--staging"], options);
  await fs.writeFile(seedPath, JSON.stringify({
    ...seed,
    reviewedAt: "2026-07-27T00:00:00.000Z",
    reviewerNote: "完成第二次人工疊圖複核。"
  }), "utf8");
  await runCli(["--route", routeId, "--staging"], options);

  assert.equal(fetchCount, 1);
});

test("只修改海拔分析設定時重新分析但不重新請求 BRouter", async t => {
  const { runCli } = await loadGenerator();
  const { parseBundleSource } = await loadValidator();
  const temporaryRoot = await fs.mkdtemp(path.join(os.tmpdir(), "crown-cache-analysis-"));
  t.after(() => fs.rm(temporaryRoot, { recursive: true, force: true }));
  const seedDirectory = path.join(temporaryRoot, "tools", "route-data", "seeds");
  await fs.mkdir(seedDirectory, { recursive: true });
  const seedPath = path.join(seedDirectory, "taipei-fengguizui.json");
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const routeId = "taipei-fengguizui";
  const routes = [{ id: routeId, trackRef: routeId, regionId: "taipei" }];
  const manifest = {
    [routeId]: { bundleId: "taipei", src: "js/data/tracks/taipei.js" }
  };
  let fetchCount = 0;
  const options = {
    projectRoot: temporaryRoot,
    routes,
    manifest,
    sleep: async () => {},
    now: () => Date.parse("2026-07-25T00:00:00.000Z"),
    fetchImpl: async () => {
      fetchCount += 1;
      return { ok: true, status: 200, async json() { return fixture; } };
    }
  };
  const seed = formalSeed(routeId);
  await fs.writeFile(seedPath, JSON.stringify(seed), "utf8");
  await runCli(["--route", routeId, "--staging"], options);
  const elevationAnalysis = {
    smoothingWindowM: 500,
    gradeWindowM: 100,
    reason: "測試重新分析。",
    referenceUrl: "https://example.com/reference",
    referenceLabel: "測試參考"
  };
  await fs.writeFile(seedPath, JSON.stringify({ ...seed, elevationAnalysis }), "utf8");
  await runCli(["--route", routeId, "--staging"], options);
  const source = await fs.readFile(
    path.join(temporaryRoot, "tools", "route-data", ".staging", "taipei.js"),
    "utf8"
  );

  assert.equal(fetchCount, 1);
  assert.equal(
    JSON.stringify(parseBundleSource("taipei", source)[routeId].source.elevationAnalysis),
    JSON.stringify(elevationAnalysis)
  );
});

test("正式 validator 拒絕早於資料產生時間的審查時間", async () => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const { validateBundleSources } = await loadValidator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  const routeId = "taipei-fengguizui";
  const seed = {
    ...formalSeed(routeId),
    reviewedAt: "2026-07-24T23:59:59.000Z"
  };
  const track = buildTrack(fixture, {
    routeId,
    seed,
    generatedAt: "2026-07-25T00:00:00.000Z"
  });
  const manifest = {
    [routeId]: { bundleId: "taipei", src: "js/data/tracks/taipei.js" }
  };

  assert.throws(
    () => validateBundleSources(
      new Map([[
        "taipei",
        serializeBundle("taipei", { [routeId]: track })
      ]]),
      { manifest, requireComplete: true, requireReviewMetadata: true }
    ),
    /審查時間.*資料產生時間/
  );
});

test("無效 seed 在發出請求前失敗且不重試", async () => {
  const { createBrouterClient } = await loadGenerator();
  let fetchCount = 0;
  let sleepCount = 0;
  const client = createBrouterClient({
    fetchImpl: async () => {
      fetchCount += 1;
    },
    sleep: async () => {
      sleepCount += 1;
    },
    now: () => 0
  });

  await assert.rejects(
    client.request({ waypoints: [] }),
    /seed/
  );
  assert.equal(fetchCount, 0);
  assert.equal(sleepCount, 0);
});

test("成功 HTTP 回應的程式錯誤不會重試", async () => {
  const { createBrouterClient } = await loadGenerator();
  let attempts = 0;
  const client = createBrouterClient({
    fetchImpl: async () => {
      attempts += 1;
      return {
        ok: true,
        status: 200,
        async json() {
          throw new TypeError("programmer bug");
        }
      };
    },
    sleep: async () => {},
    now: () => 0
  });

  await assert.rejects(
    client.request({ waypoints: [[121.5, 25], [121.51, 25.01]] }),
    /programmer bug/
  );
  assert.equal(attempts, 1);
});

test("fetch 邊界拋出的非網路程式錯誤不會重試", async () => {
  const { createBrouterClient } = await loadGenerator();
  let attempts = 0;
  const client = createBrouterClient({
    fetchImpl: async () => {
      attempts += 1;
      throw new Error("programmer bug");
    },
    sleep: async () => {},
    now: () => 0
  });

  await assert.rejects(
    client.request({ waypoints: [[121.5, 25], [121.51, 25.01]] }),
    /programmer bug/
  );
  assert.equal(attempts, 1);
});

test("明確網路暫時錯誤仍會重試", async () => {
  const { createBrouterClient } = await loadGenerator();
  const fixture = JSON.parse(await fs.readFile(fixturePath, "utf8"));
  let attempts = 0;
  const client = createBrouterClient({
    fetchImpl: async () => {
      attempts += 1;
      if (attempts === 1) {
        const error = new TypeError("fetch failed");
        error.cause = { code: "ECONNRESET" };
        throw error;
      }
      return {
        ok: true,
        status: 200,
        async json() {
          return fixture;
        }
      };
    },
    sleep: async () => {},
    now: () => 0
  });

  assert.equal(
    (await client.request({ waypoints: [[121.5, 25], [121.51, 25.01]] })).type,
    "FeatureCollection"
  );
  assert.equal(attempts, 2);
});
