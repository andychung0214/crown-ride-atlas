"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { createHash } = require("node:crypto");
const fs = require("node:fs");
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
  const catalogPath = require.resolve("../js/data/route-art-catalog.js");
  const downloadPath = path.join(__dirname, "..", "js", "data", "route-art-downloads.js");
  assert.equal(fs.existsSync(downloadPath), false);
  t.after(() => {
    delete require.cache[catalogPath];
    fs.rmSync(downloadPath, { force: true });
  });

  fs.writeFileSync(downloadPath,
    'module.exports = require("./fixture-nested/route-art-downloads.js");\n',
    "utf8"
  );
  delete require.cache[catalogPath];
  assert.throws(() => require(catalogPath), error => error
    && error.code === "MODULE_NOT_FOUND"
    && /fixture-nested[\\/]route-art-downloads\.js/.test(error.message));
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

test("公開來源 TLS 失敗警告包含安全且可理解的原因", async () => {
  const { describeDownloadError } = await import("../scripts/import-route-art-tracks.mjs");
  const error = new TypeError("fetch failed", {
    cause: Object.assign(new Error("secure TLS connection was not established"), { code: "ECONNRESET" })
  });

  assert.equal(
    describeDownloadError(error),
    "fetch failed（ECONNRESET：secure TLS connection was not established）"
  );
});

test("站內匯入器只接受 allowlist 內的 HTTPS final URL", async () => {
  const { importTracks, SOURCES } = await import("../scripts/import-route-art-tracks.mjs");
  const gpx = `<gpx><trk><trkseg>
    <trkpt lat="25" lon="121.5"/><trkpt lat="25.001" lon="121.501"/>
  </trkseg></trk></gpx>`;

  async function runScenario(finalUrl) {
    const originalFetch = global.fetch;
    const originalConsole = { log: console.log, warn: console.warn, error: console.error };
    const output = { logs: [], warnings: [], errors: [] };
    global.fetch = async requestUrl => {
      const source = SOURCES.find(item => item.url === String(requestUrl));
      if (source?.id === "gps-art-xinzhuang-tiger") {
        return createFetchResponse(gpx, {
          url: finalUrl,
          contentType: "application/gpx+xml"
        });
      }
      return createFetchResponse("failure", { url: source?.url || String(requestUrl), status: 503 });
    };
    console.log = value => output.logs.push(String(value));
    console.warn = value => output.warnings.push(String(value));
    console.error = value => output.errors.push(String(value));
    try {
      await assert.rejects(() => importTracks(), /必要公開軌跡匯入失敗/);
      return output;
    } finally {
      global.fetch = originalFetch;
      Object.assign(console, originalConsole);
    }
  }

  const allowed = await runScenario(SOURCES[0].url);
  assert.ok(allowed.logs.some(line => line.startsWith("gps-art-xinzhuang-tiger:")));

  for (const scenario of [
    { url: "https://evil.example/route.gpx", expected: /主機|allowlist/i },
    { url: "http://cdnrunningfiles.biji.co/route.gpx", expected: /HTTPS/i },
    { url: "https://user:secret@cdnrunningfiles.biji.co/route.gpx", expected: /認證|credentials/i }
  ]) {
    const rejected = await runScenario(scenario.url);
    assert.equal(rejected.logs.some(line => line.startsWith("gps-art-xinzhuang-tiger:")), false);
    const warning = rejected.warnings.find(line => line.includes("gps-art-xinzhuang-tiger")) || "";
    assert.match(warning, scenario.expected);
    assert.doesNotMatch(warning, /user|secret/);
  }
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

test("圖鑑與每件作品皆不可被改寫", () => {
  assert.equal(Object.isFrozen(Catalog), true);
  assert.ok(Catalog.every(Object.isFrozen));
  assert.throws(() => Catalog.push({}), TypeError);
  assert.throws(() => { Catalog[0].name = "錯誤資料"; }, TypeError);
});
