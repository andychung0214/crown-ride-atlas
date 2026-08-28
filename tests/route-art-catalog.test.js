"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createHash } = require("node:crypto");
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const RouteArt = require("../js/core/route-art.js");
const Catalog = require("../js/data/route-art-catalog.js");
const Tracks = require("../js/data/route-art-tracks.js");
const Data = require("../js/data/routes.js");
const TrackManifest = require("../js/data/track-manifest.js");

function loadBrowserCatalog(routeArtTracks, routeArtDownloads) {
  const source = fs.readFileSync(require.resolve("../js/data/route-art-catalog.js"), "utf8");
  const browserWindow = {
    CrownRideAtlas: {
      RouteArt,
      RouteArtTracks: routeArtTracks,
      ...(routeArtDownloads === undefined ? {} : { RouteArtDownloads: routeArtDownloads })
    }
  };
  vm.runInNewContext(source, { window: browserWindow, globalThis: browserWindow });
  return browserWindow.CrownRideAtlas.RouteArtCatalog;
}

function loadNodeCatalog(routeArtDownloads, { downloadsPresent = true } = {}) {
  const source = fs.readFileSync(require.resolve("../js/data/route-art-catalog.js"), "utf8");
  const module = { exports: {} };
  const missingModule = Object.assign(new Error("Cannot find module './route-art-downloads.js'"), {
    code: "MODULE_NOT_FOUND"
  });
  function requireImpl(request) {
    if (request === "../core/route-art.js") return RouteArt;
    if (request === "./route-art-tracks.js") return Tracks;
    if (request === "./route-art-downloads.js") {
      if (!downloadsPresent) throw missingModule;
      return routeArtDownloads;
    }
    throw new Error(`unexpected require: ${request}`);
  }
  requireImpl.resolve = request => {
    if (request === "./route-art-downloads.js") {
      if (!downloadsPresent) throw missingModule;
      return request;
    }
    throw new Error(`unexpected require.resolve: ${request}`);
  };
  vm.runInNewContext(source, {
    module,
    require: requireImpl,
    globalThis: {}
  });
  return module.exports;
}

function createIsolatedCatalogGraph(t, routeArtDownloadsSource) {
  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), "crown-route-art-catalog-"));
  const fixtureCatalogPath = path.join(fixtureRoot, "js", "data", "route-art-catalog.js");
  const fixtureDataPath = path.dirname(fixtureCatalogPath);
  const sourceRoot = path.join(__dirname, "..");
  fs.mkdirSync(path.join(fixtureRoot, "js", "core"), { recursive: true });
  fs.mkdirSync(fixtureDataPath, { recursive: true });
  for (const relativePath of [
    path.join("js", "core", "route-art.js"),
    path.join("js", "data", "route-art-catalog.js"),
    path.join("js", "data", "route-art-tracks.js")
  ]) {
    fs.copyFileSync(path.join(sourceRoot, relativePath), path.join(fixtureRoot, relativePath));
  }
  if (routeArtDownloadsSource !== undefined) {
    fs.writeFileSync(path.join(fixtureDataPath, "route-art-downloads.js"), routeArtDownloadsSource, "utf8");
  }
  t.after(() => {
    delete require.cache[fixtureCatalogPath];
    fs.rmSync(fixtureRoot, { recursive: true, force: true });
  });
  return fixtureCatalogPath;
}

function sourceDownloadFixture() {
  return {
    id: "gps-art-shapemiles-guitar", name: "台北 Guitar", shapeLabel: "吉他",
    regionId: "taipei", regionName: "台北市", activityType: "running", activityLabel: "跑步",
    status: "source-download", distanceKm: 11.3, summary: "來源端驗證摘要。",
    sourcePlatform: "ShapeMiles",
    sourceUrl: "https://shapemiles.com/en/city/taipei/art-gps-routes/guitar-11-3km",
    externalDownloadUrl: "https://shapemiles.com/api/art-routes/taipei/guitar-11-3km/gpx",
    verifiedAt: "2026-08-28", sourceFormat: "gpx", sourceSha256: "a".repeat(64),
    segmentCount: 1, totalPoints: 200,
    bounds: { minLat: 24.9, maxLat: 25.1, minLng: 121.4, maxLng: 121.6 }
  };
}

function createFetchResponse(body, { url, contentType = "text/plain", status = 200 } = {}) {
  const response = new Response(body, {
    status,
    statusText: status === 200 ? "OK" : "FAIL",
    headers: { "content-type": contentType }
  });
  Object.defineProperty(response, "url", { value: url });
  return response;
}

async function within(promise, timeoutMs = 300) {
  let timer;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error("測試等待逾時，下載器仍未結束")), timeoutMs);
      })
    ]);
  } finally {
    clearTimeout(timer);
  }
}

function cancelableResponse({ status = 200, headers = {}, chunks = [], stall = false } = {}) {
  let cancelled = false;
  const body = new ReadableStream({
    start(controller) {
      for (const chunk of chunks) controller.enqueue(chunk);
      if (!stall) controller.close();
    },
    cancel() {
      cancelled = true;
    }
  });
  return {
    response: new Response(body, { status, headers }),
    wasCancelled: () => cancelled
  };
}

function filesystemBoundary(overrides = {}) {
  return {
    mkdir: (...args) => fsPromises.mkdir(...args),
    writeFile: (...args) => fsPromises.writeFile(...args),
    rename: (...args) => fsPromises.rename(...args),
    rm: (...args) => fsPromises.rm(...args),
    ...overrides
  };
}

test("圖鑑固定收錄 22 件有公開來源的台灣 GPS Art", () => {
  assert.equal(Catalog.length, 22);
  assert.equal(new Set(Catalog.map(item => item.id)).size, 22);
  assert.ok(Catalog.every(item => /^https:\/\//.test(item.sourceUrl)));
  assert.deepEqual(new Set(Catalog.map(item => item.activityType)),
    new Set(["cycling", "running", "walking"]));
});

test("圖鑑保留來源已明示的數值與作者，且不把下限當作精確數值", () => {
  const byId = new Map(Catalog.map(item => [item.id, item]));

  assert.deepEqual(byId.get("gps-art-north-taoyuan-raptor"), {
    id: "gps-art-north-taoyuan-raptor",
    name: "北桃迅猛龍",
    activityType: "cycling",
    regionName: "桃園市／新北市",
    status: "source-only",
    distanceKm: 101,
    elevationGainM: 1254,
    shapeLabel: "迅猛龍",
    activityLabel: "單車",
    summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「北桃迅猛龍」。",
    author: "CS72",
    sourcePlatform: "Mobile01",
    sourceUrl: "https://www.mobile01.com/topicdetail.php?f=377&t=5800991",
    verifiedAt: "2026-08-14",
    routeSourceUrl: "https://www.strava.com/routes/17223910",
    routeSourceAccess: "login-required"
  });
  assert.equal(byId.get("gps-art-xinzhuang-tiger").author, "Heigo Chang");
  assert.equal(byId.get("gps-art-yangmingshan-buddha-hand").distanceKm, 135);
  assert.equal(Object.hasOwn(byId.get("gps-art-yangmingshan-buddha-hand"), "elevationGainM"), false);
  assert.equal(byId.get("gps-art-yangmingshan-buddha-hand").elevationGainLabel, "3,000 m 以上");
});

test("Mobile01 公開整理頁的 17 件作品皆保留原作者 CS72", () => {
  const mobile01Items = Catalog.filter(item => item.sourcePlatform === "Mobile01");
  assert.equal(mobile01Items.length, 17);
  assert.ok(mobile01Items.every(item => item.author === "CS72"));
});

test("GPS Art 不污染正式路線與 track manifest", () => {
  assert.equal(Data.routeArt, Catalog);
  assert.equal(Data.routes.length, 68);
  assert.equal(Data.routes.some(route => route.category === "路線美學"), false);
  assert.equal(Object.keys(TrackManifest).length, 68);
  assert.equal(new Set(Object.values(TrackManifest).map(entry => entry.bundleId)).size, 23);
  assert.equal(Object.hasOwn(TrackManifest, "gps-art-xinzhuang-tiger"), false);
});

test("沒有公開軌跡的作品不帶座標或虛構零值", () => {
  for (const item of Catalog.filter(item => item.status === "source-only")) {
    assert.equal(Object.hasOwn(item, "coordinates"), false);
    assert.equal(Object.hasOwn(item, "segments"), false);
    if (Object.hasOwn(item, "distanceKm")) assert.ok(item.distanceKm > 0);
    if (Object.hasOwn(item, "elevationGainM")) assert.ok(item.elevationGainM > 0);
  }
});

test("track-ready 作品都有公開軌跡且座標位於台灣", () => {
  const ready = Catalog.filter(item => item.status === "track-ready");
  assert.ok(ready.length >= 2);
  for (const item of ready) {
    assert.ok(item.segments.length >= 1);
    assert.ok(item.segments.every(segment => segment.length >= 2));
    assert.ok(item.segments.flat().every(RouteArt.isTaiwanCoordinate));
    assert.strictEqual(item.segments, Tracks[item.id].segments);
    assert.equal(Object.hasOwn(item, "coordinates"), false);
  }
  const tiger = Catalog.find(item => item.id === "gps-art-xinzhuang-tiger");
  assert.equal(tiger.status, Object.hasOwn(Tracks, tiger.id) ? "track-ready" : "source-only");
});

test("catalog 對單件必要軌跡缺失或 segments 無效採逐件降級", () => {
  const validCircleTrack = Tracks["gps-art-taipei-circle-walk"];
  const invalidCherryTrack = Object.assign({}, Tracks["gps-art-taipei-cherry-blossom"], {
    segments: [[Tracks["gps-art-taipei-cherry-blossom"].segments[0][0]]]
  });
  const cases = [
    { name: "缺少軌跡", tracks: { "gps-art-taipei-circle-walk": validCircleTrack } },
    {
      name: "segments 無效",
      tracks: {
        "gps-art-taipei-cherry-blossom": invalidCherryTrack,
        "gps-art-taipei-circle-walk": validCircleTrack
      }
    }
  ];

  for (const scenario of cases) {
    const catalog = loadBrowserCatalog(scenario.tracks);
    const cherry = catalog.find(item => item.id === "gps-art-taipei-cherry-blossom");
    const circle = catalog.find(item => item.id === "gps-art-taipei-circle-walk");

    assert.equal(catalog.length, 22, scenario.name);
    assert.equal(cherry.status, "source-only", scenario.name);
    assert.equal(Object.hasOwn(cherry, "segments"), false, scenario.name);
    assert.equal(Object.hasOwn(cherry, "coordinates"), false, scenario.name);
    assert.equal(circle.status, "track-ready", scenario.name);
    assert.strictEqual(circle.segments, validCircleTrack.segments, scenario.name);
  }
});

test("公開軌跡產物鎖定來源與 canonical geometry provenance", () => {
  const approved = {
    "gps-art-taipei-cherry-blossom": {
      sourceSha256: "aa9ce71997e0e81f84783be37a2bc493238264df0749625ec1dd2d285c9186f0",
      geometrySha256: "e2e3f0434e3f18e7a246105e1e48dbf227197b94d0be98f4cc61972d82e6f2bd",
      segmentPointCounts: [202, 266, 63, 134, 87, 284],
      totalPoints: 1036
    },
    "gps-art-taipei-circle-walk": {
      sourceSha256: "60b4b710b9460719aff0dcffbdffdfbb1542b45e7f46acdc68629f7eefea696f",
      geometrySha256: "a788714f69fd805bfc3fecde54b0146f6526275d5f7574f5090b189679b93433",
      segmentPointCounts: [165, 454, 139, 63, 130, 547, 562, 249, 83, 30, 16, 21],
      totalPoints: 2459
    }
  };

  for (const track of Object.values(Tracks)) {
    assert.match(track.sourceSha256, /^[a-f0-9]{64}$/);
    assert.match(track.geometrySha256, /^[a-f0-9]{64}$/);
    assert.equal(
      track.geometrySha256,
      createHash("sha256").update(JSON.stringify(track.segments)).digest("hex")
    );
  }

  for (const [id, expected] of Object.entries(approved)) {
    const track = Tracks[id];
    const segmentPointCounts = track.segments.map(segment => segment.length);
    assert.equal(track.sourceSha256, expected.sourceSha256, id);
    assert.equal(track.geometrySha256, expected.geometrySha256, id);
    assert.deepEqual(segmentPointCounts, expected.segmentPointCounts, id);
    assert.equal(segmentPointCounts.reduce((total, count) => total + count, 0), expected.totalPoints, id);
  }
});

test("正式圖鑑的三種狀態反映目前驗證結果", () => {
  assert.deepEqual(RouteArt.stats(Catalog), {
    total: 22, trackReady: 2, sourceDownload: 0, sourceOnly: 20
  });
  assert.equal(Data.routes.length, 68);
  assert.equal(new Set(Object.values(TrackManifest).map(entry => entry.bundleId)).size, 23);
});

test("下載摘要模組缺失時保留 22 件，存在時才合併並驗證每一筆", () => {
  const withoutDownloads = loadBrowserCatalog(Tracks);
  const validDownload = sourceDownloadFixture();
  const withDownload = loadBrowserCatalog(Tracks, { [validDownload.id]: validDownload });

  assert.equal(withoutDownloads.length, 22);
  assert.equal(withDownload.length, 23);
  assert.equal(withDownload.find(item => item.id === validDownload.id).status, "source-download");
  assert.throws(() => loadBrowserCatalog(Tracks, {
    "gps-art-shapemiles-malformed": { ...validDownload, id: "gps-art-shapemiles-malformed", sourceSha256: "bad" }
  }), /SHA-256/);
});

test("Node 載入器只對不存在的下載摘要 fail-soft，malformed 摘要照常失敗", () => {
  const validDownload = sourceDownloadFixture();
  assert.equal(loadNodeCatalog(undefined, { downloadsPresent: false }).length, 22);
  assert.equal(loadNodeCatalog({ [validDownload.id]: validDownload }).length, 23);
  assert.throws(() => loadNodeCatalog(null), /RouteArtDownloads/);
});

test("Node 只在精確下載摘要目標不存在時 fail-soft", t => {
  const productionDownloadPath = path.join(__dirname, "..", "js", "data", "route-art-downloads.js");
  const missingTargetCatalogPath = createIsolatedCatalogGraph(t);
  const nestedMissingCatalogPath = createIsolatedCatalogGraph(t,
    'module.exports = require("./fixture-nested/route-art-downloads.js");\n',
  );
  assert.equal(fs.existsSync(productionDownloadPath), false);
  assert.equal(require(missingTargetCatalogPath).length, 22);
  assert.throws(() => require(nestedMissingCatalogPath), error => error
    && error.code === "MODULE_NOT_FOUND"
    && /fixture-nested[\\/]route-art-downloads\.js/.test(error.message));
  assert.equal(fs.existsSync(productionDownloadPath), false);
});

test("淺凍結下載摘要仍會深度凍結 bounds", () => {
  const validDownload = Object.freeze(sourceDownloadFixture());
  const catalog = loadBrowserCatalog(Tracks, { [validDownload.id]: validDownload });
  const item = catalog.find(candidate => candidate.id === validDownload.id);

  assert.equal(Object.isFrozen(item), true);
  assert.equal(Object.isFrozen(item.bounds), true);
  assert.throws(() => { item.bounds.minLat = 24; }, TypeError);
});

test("十二件 CS72 作品保留登入限定的精確 Strava 原始路線", () => {
  const expectedUrls = {
    "gps-art-north-taoyuan-raptor": "https://www.strava.com/routes/17223910",
    "gps-art-fenggui-rabbit": "https://www.strava.com/routes/17581713",
    "gps-art-taoyuan-red-bull": "https://www.strava.com/activities/2263949784",
    "gps-art-yilan-cherry-duck": "https://www.strava.com/routes/17035427",
    "gps-art-tianmu-whale": "https://www.strava.com/routes/16721519",
    "gps-art-qingpu-cat": "https://www.strava.com/routes/17110234",
    "gps-art-tainan-lion": "https://www.strava.com/routes/16676205",
    "gps-art-youth-park-shark": "https://www.strava.com/activities/2241587445",
    "gps-art-douliu-turtle": "https://www.strava.com/routes/16663550",
    "gps-art-taoyuan-horse": "https://www.strava.com/routes/16463220",
    "gps-art-pig-year": "https://www.strava.com/routes/16488963",
    "gps-art-valentine-love": "https://www.strava.com/routes/16780021"
  };

  for (const [id, routeSourceUrl] of Object.entries(expectedUrls)) {
    const item = Catalog.find(candidate => candidate.id === id);
    assert.equal(item.routeSourceUrl, routeSourceUrl, id);
    assert.equal(item.routeSourceAccess, "login-required", id);
    assert.equal(item.status, "source-only", id);
  }
  const qingpuWarning = Catalog.find(item => item.id === "gps-art-qingpu-cat").summary;
  const tianmuWarning = Catalog.find(item => item.id === "gps-art-tianmu-whale").summary;
  for (const warning of ["門禁社區", "田地", "非鋪面", "狹窄通道"]) {
    assert.match(qingpuWarning, new RegExp(warning));
  }
  for (const warning of ["逆向路段", "較適合跑步"]) {
    assert.match(tianmuWarning, new RegExp(warning));
  }
});

test("站內匯入器維持共用解析與驗證函式的相容匯出", async () => {
  const importer = await import("../scripts/import-route-art-tracks.mjs");
  const source = await import("../scripts/lib/route-art-source.mjs");

  assert.strictEqual(importer.parseGpxSegments, source.parseGpxSegments);
  assert.strictEqual(importer.parseKmlSegments, source.parseKmlSegments);
  assert.strictEqual(importer.validateSegments, source.validateSegments);
});

test("KML 匯入依文件順序保留 LineString 段界並忽略 Point 地標", async () => {
  const { parseKmlSegments } = await import("../scripts/import-route-art-tracks.mjs");
  const kml = `<?xml version="1.0"?>
    <kml><Document>
      <Placemark><Point><coordinates>121.9,25.4,0</coordinates></Point></Placemark>
      <Placemark><LineString><coordinates>
        121.5000,25.0000,10 121.5010,25.0010,20
      </coordinates></LineString></Placemark>
      <Placemark><LineString><coordinates>
        121.5020,25.0020 121.5030,25.0030
      </coordinates></LineString></Placemark>
    </Document></kml>`;

  assert.deepEqual(parseKmlSegments(kml), [
    [
      { lat: 25, lng: 121.5, ele: 10 },
      { lat: 25.001, lng: 121.501, ele: 20 }
    ],
    [
      { lat: 25.002, lng: 121.502 },
      { lat: 25.003, lng: 121.503 }
    ]
  ]);
});

test("KML 匯入允許跨段距離超過 500 公尺", async () => {
  const { parseKmlSegments, validateSegments } = await import("../scripts/import-route-art-tracks.mjs");
  const kml = `<kml><Document>
    <LineString><coordinates>121.5000,25.0000 121.5010,25.0010</coordinates></LineString>
    <LineString><coordinates>121.5100,25.0100 121.5110,25.0110</coordinates></LineString>
  </Document></kml>`;

  const segments = parseKmlSegments(kml);
  assert.equal(validateSegments(segments, {
    sourceId: "cross-segment", maxSegmentGapMeters: 500
  }).length, 2);
});

test("KML 匯入拒絕同一 LineString 內達 500 公尺的跳點", async () => {
  const { parseKmlSegments, validateSegments } = await import("../scripts/import-route-art-tracks.mjs");
  const kml = `<kml><Document><LineString><coordinates>
    121.5000,25.0000 121.5100,25.0100
  </coordinates></LineString></Document></kml>`;

  assert.throws(() => validateSegments(parseKmlSegments(kml), {
    sourceId: "same-segment", maxSegmentGapMeters: 500
  }), /500/);
});

test("KML 匯入拒絕來源提供的非有限海拔", async () => {
  const { parseKmlSegments } = await import("../scripts/import-route-art-tracks.mjs");
  const kml = `<kml><Document><LineString><coordinates>
    121.5000,25.0000,10 121.5010,25.0010,invalid
  </coordinates></LineString></Document></kml>`;

  assert.throws(() => parseKmlSegments(kml), /有限數值/);
});

test("公開來源錯誤不發布任意上游訊息或敏感標頭", async () => {
  const { describeDownloadError } = await import("../scripts/import-route-art-tracks.mjs");
  const error = new TypeError("upstream Cookie: sid=first; session=second-secret", {
    cause: Object.assign(new Error("Authorization: Bearer arbitrary-cause-secret"), { code: "ECONNRESET" })
  });

  const detail = describeDownloadError(error);
  assert.equal(detail, "來源下載失敗");
  assert.doesNotMatch(detail, /cookie|authorization|bearer|first|second|arbitrary|ECONNRESET/i);
});

test("站內下載器使用 manual redirect、單一 signal 並保留合法 Google KML query", async () => {
  const { downloadSource, SOURCES } = await import("../scripts/import-route-art-tracks.mjs");
  const source = SOURCES[1];
  const kml = `<kml><Document><LineString><coordinates>
    121.5,25 121.501,25.001
  </coordinates></LineString></Document></kml>`;
  const calls = [];
  await downloadSource(source, {
    fetchImpl: async (url, options) => {
      calls.push({ url: String(url), options });
      return createFetchResponse(kml, {
        url: String(url), contentType: "application/vnd.google-earth.kml+xml"
      });
    }
  });

  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, source.url);
  assert.equal(new URL(calls[0].url).search, "?mid=1XFfh9ZGnEVTth4D4cyZ3oQuy3fLymWU&forcekml=1");
  assert.equal(calls[0].options.redirect, "manual");
  assert.equal(calls[0].options.signal instanceof AbortSignal, true);
  const headers = new Headers(calls[0].options.headers);
  assert.equal(headers.has("cookie"), false);
  assert.equal(headers.has("authorization"), false);
});

test("站內下載器拒絕惡意重新導向且不讓 fetch 跟隨", async () => {
  const { downloadSource, SOURCES } = await import("../scripts/import-route-art-tracks.mjs");
  const tracked = cancelableResponse({
    status: 302,
    headers: { location: "https://evil.example/private.gpx" },
    stall: true
  });
  const calls = [];
  await assert.rejects(() => downloadSource(SOURCES[0], {
    fetchImpl: async (url, options) => {
      calls.push({ url: String(url), options });
      return tracked.response;
    }
  }), /主機|allowlist|重新導向|redirect/i);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].options.redirect, "manual");
  assert.equal(tracked.wasCancelled(), true);
});

test("站內下載器最多跟隨三次核准重新導向並清理每個 body", async () => {
  const { downloadSource, SOURCES } = await import("../scripts/import-route-art-tracks.mjs");
  const tracked = [];
  let calls = 0;
  await assert.rejects(() => downloadSource(SOURCES[0], {
    fetchImpl: async () => {
      calls += 1;
      const redirect = cancelableResponse({
        status: 302, headers: { location: SOURCES[0].url }, stall: true
      });
      tracked.push(redirect);
      return redirect.response;
    }
  }), /3|重新導向|redirect/i);
  assert.equal(calls, 4);
  assert.ok(tracked.every(item => item.wasCancelled()));
});

test("站內下載器的單一逾時涵蓋 stalled fetch 與 stalled body", async () => {
  const { downloadSource, SOURCES } = await import("../scripts/import-route-art-tracks.mjs");
  let fetchSignal;
  await assert.rejects(() => within(downloadSource(SOURCES[0], {
    timeoutMs: 20,
    fetchImpl: async (_url, options) => {
      fetchSignal = options.signal;
      return new Promise(() => {});
    }
  })), /逾時/);
  assert.equal(fetchSignal?.aborted, true);

  const stalled = cancelableResponse({
    headers: { "content-type": "application/gpx+xml" }, stall: true
  });
  await assert.rejects(() => within(downloadSource(SOURCES[0], {
    timeoutMs: 20,
    fetchImpl: async () => stalled.response
  })), /逾時/);
  assert.equal(stalled.wasCancelled(), true);
});

test("站內下載器拒絕 Content-Length、逐 chunk 超過 5 MB 與無 reader body", async () => {
  const { downloadSource, SOURCES } = await import("../scripts/import-route-art-tracks.mjs");
  const oversizedHeader = cancelableResponse({
    headers: { "content-type": "application/gpx+xml", "content-length": "5000001" },
    stall: true
  });
  const oversizedChunk = cancelableResponse({
    headers: { "content-type": "application/octet-stream" },
    chunks: [new Uint8Array(5_000_001)],
    stall: true
  });
  for (const tracked of [oversizedHeader, oversizedChunk]) {
    await assert.rejects(() => downloadSource(SOURCES[0], {
      fetchImpl: async () => tracked.response
    }), /5 MB|大小/);
    assert.equal(tracked.wasCancelled(), true);
  }

  let fallbackCalls = 0;
  await assert.rejects(() => downloadSource(SOURCES[0], {
    fetchImpl: async () => ({
      status: 200,
      headers: new Headers({ "content-type": "application/gpx+xml" }),
      body: null,
      async arrayBuffer() {
        fallbackCalls += 1;
        return new Uint8Array(0);
      }
    })
  }), /body|串流|讀取/i);
  assert.equal(fallbackCalls, 0);
});

test("站內下載器在 HTTP 早退與 body 讀取失敗時取消 body", async () => {
  const { downloadSource, SOURCES } = await import("../scripts/import-route-art-tracks.mjs");
  const earlyFailures = [
    { tracked: cancelableResponse({ status: 503, stall: true }), expected: /HTTP 503/ },
    {
      tracked: cancelableResponse({
        headers: { "content-type": "text/html" }, stall: true
      }),
      expected: /HTML/
    }
  ];
  for (const { tracked, expected } of earlyFailures) {
    await assert.rejects(() => downloadSource(SOURCES[0], {
      fetchImpl: async () => tracked.response
    }), expected);
    assert.equal(tracked.wasCancelled(), true);
  }

  let cancelled = false;
  const readFailureBody = {
    getReader() {
      return {
        async read() { throw new Error("upstream body secret"); },
        cancel() { cancelled = true; },
        releaseLock() {}
      };
    }
  };
  await assert.rejects(() => downloadSource(SOURCES[0], {
    fetchImpl: async () => ({
      status: 200,
      headers: new Headers({ "content-type": "application/gpx+xml" }),
      body: readFailureBody
    })
  }), error => {
    assert.doesNotMatch(error.message, /upstream|secret/i);
    return true;
  });
  assert.equal(cancelled, true);
});

test("站內下載器在 fetch 前拒絕不安全 initial URL", async () => {
  const { downloadSource, SOURCES } = await import("../scripts/import-route-art-tracks.mjs");
  for (const url of [
    "http://cdnrunningfiles.biji.co/route.gpx",
    "https://evil.example/route.gpx",
    "https://user:secret@cdnrunningfiles.biji.co/route.gpx"
  ]) {
    let fetchCalls = 0;
    await assert.rejects(() => downloadSource({ ...SOURCES[0], url }, {
      fetchImpl: async () => { fetchCalls += 1; }
    }), /HTTPS|主機|allowlist|認證|credentials/i);
    assert.equal(fetchCalls, 0);
  }
});

test("站內軌跡全成功時以同目錄 temp 原子覆寫指定產物", async t => {
  const { writeTracksAtomically } = await import("../scripts/import-route-art-tracks.mjs");
  const temporaryRoot = await fsPromises.mkdtemp(path.join(os.tmpdir(), "route-art-import-success-"));
  t.after(() => fsPromises.rm(temporaryRoot, { recursive: true, force: true }));
  const outputPath = path.join(temporaryRoot, "route-art-tracks.js");
  await fsPromises.writeFile(outputPath, "既有安全產物", "utf8");

  await writeTracksAtomically(Object.values(Tracks), { outputPath });
  const artifactSource = await fsPromises.readFile(outputPath, "utf8");
  const module = { exports: {} };
  vm.runInNewContext(artifactSource, { module, globalThis: {} });
  assert.deepEqual(Object.keys(module.exports), Object.keys(Tracks));
  assert.deepEqual(await fsPromises.readdir(temporaryRoot), ["route-art-tracks.js"]);
});

test("站內軌跡 write failure 保留舊產物並清除部分 temp", async t => {
  const { writeTracksAtomically } = await import("../scripts/import-route-art-tracks.mjs");
  const temporaryRoot = await fsPromises.mkdtemp(path.join(os.tmpdir(), "route-art-import-write-fail-"));
  t.after(() => fsPromises.rm(temporaryRoot, { recursive: true, force: true }));
  const outputPath = path.join(temporaryRoot, "route-art-tracks.js");
  await fsPromises.writeFile(outputPath, "既有安全產物", "utf8");
  const fsImpl = filesystemBoundary({
    async writeFile(filePath) {
      await fsPromises.writeFile(filePath, "部分暫存內容", "utf8");
      throw new Error("injected write failure");
    }
  });

  await assert.rejects(() => writeTracksAtomically(Object.values(Tracks), {
    outputPath, fsImpl
  }), /write failure/);
  assert.equal(await fsPromises.readFile(outputPath, "utf8"), "既有安全產物");
  assert.deepEqual(await fsPromises.readdir(temporaryRoot), ["route-art-tracks.js"]);
});

test("站內軌跡 rename failure 保留舊產物並清除完整 temp", async t => {
  const { writeTracksAtomically } = await import("../scripts/import-route-art-tracks.mjs");
  const temporaryRoot = await fsPromises.mkdtemp(path.join(os.tmpdir(), "route-art-import-rename-fail-"));
  t.after(() => fsPromises.rm(temporaryRoot, { recursive: true, force: true }));
  const outputPath = path.join(temporaryRoot, "route-art-tracks.js");
  await fsPromises.writeFile(outputPath, "既有安全產物", "utf8");
  const fsImpl = filesystemBoundary({
    async rename() { throw new Error("injected rename failure"); }
  });

  await assert.rejects(() => writeTracksAtomically(Object.values(Tracks), {
    outputPath, fsImpl
  }), /rename failure/);
  assert.equal(await fsPromises.readFile(outputPath, "utf8"), "既有安全產物");
  assert.deepEqual(await fsPromises.readdir(temporaryRoot), ["route-art-tracks.js"]);
});

test("圖鑑與每件作品皆不可被改寫", () => {
  assert.equal(Object.isFrozen(Catalog), true);
  assert.ok(Catalog.every(Object.isFrozen));
  assert.throws(() => Catalog.push({}), TypeError);
  assert.throws(() => { Catalog[0].name = "錯誤資料"; }, TypeError);
});
