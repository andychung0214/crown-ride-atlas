"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
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
    )).response.type,
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
    /軌跡資料|海拔/
  );
  assert.throws(
    () => validateBundleSources(new Map(), { manifest, requireComplete: true }),
    /缺少/
  );
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
    JSON.stringify({ waypoints: [[121.541, 25.021], [121.542, 25.022]] }),
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

test("validator 拒絕欄位矛盾與索引越界的爬坡", async () => {
  const { buildTrack, serializeBundle } = await loadGenerator();
  const { validateBundleSources } = await loadValidator();
  const climbingPayload = {
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [[121, 25, 100], [121, 25.0045, 130]]
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
    JSON.stringify({ waypoints: [[121.541, 25.021], [121.542, 25.022]] }),
    "utf8"
  );
  await runCli(["--route", "taipei-fengguizui", "--staging"], options);
  const firstCache = JSON.parse(await fs.readFile(
    path.join(temporaryRoot, "tools", "route-data", "cache", "taipei-fengguizui.geojson"),
    "utf8"
  ));

  await fs.writeFile(
    seedPath,
    JSON.stringify({ waypoints: [[121.541, 25.021], [121.543, 25.023]] }),
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
