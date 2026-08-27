"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");

const EXPECTED_ROUTES = Object.freeze([
  ["airplane-19-6km", "gps-art-shapemiles-airplane", "台北 Airplane", "飛機", 19.6],
  ["bicycle-14-5km", "gps-art-shapemiles-bicycle", "台北 Bicycle", "自行車", 14.5],
  ["bunny-13-6km", "gps-art-shapemiles-bunny", "台北 Bunny", "兔子", 13.6],
  ["butterfly-14-1km", "gps-art-shapemiles-butterfly", "台北 Butterfly", "蝴蝶", 14.1],
  ["cactus-11-3km", "gps-art-shapemiles-cactus", "台北 Cactus", "仙人掌", 11.3],
  ["cat-silhouette-10-0km", "gps-art-shapemiles-cat-silhouette", "台北 Cat silhouette", "貓咪剪影", 10],
  ["dinosaur-21-7km", "gps-art-shapemiles-dinosaur", "台北 Dinosaur", "恐龍", 21.7],
  ["dolphin-11-8km", "gps-art-shapemiles-dolphin", "台北 Dolphin", "海豚", 11.8],
  ["guitar-11-3km", "gps-art-shapemiles-guitar", "台北 Guitar", "吉他", 11.3],
  ["heart-with-arrow-11-6km", "gps-art-shapemiles-heart-with-arrow", "台北 Heart with arrow", "箭穿愛心", 11.6],
  ["lightning-bolt-12-1km", "gps-art-shapemiles-lightning-bolt", "台北 Lightning bolt", "閃電", 12.1],
  ["rocket-9-9km", "gps-art-shapemiles-rocket", "台北 Rocket", "火箭", 9.9],
  ["running-shoe-10-7km", "gps-art-shapemiles-running-shoe", "台北 Running shoe", "跑鞋", 10.7],
  ["sailboat-8-7km", "gps-art-shapemiles-sailboat", "台北 Sailboat", "帆船", 8.7],
  ["snowflake-14-7km", "gps-art-shapemiles-snowflake", "台北 Snowflake", "雪花", 14.7],
  ["star-12-6km", "gps-art-shapemiles-star", "台北 Star", "星星", 12.6],
  ["top-hat-6-6km", "gps-art-shapemiles-top-hat", "台北 Top hat", "高帽", 6.6],
  ["turtle-16-1km", "gps-art-shapemiles-turtle", "台北 Turtle", "烏龜", 16.1],
  ["unicorn-head-12-5km", "gps-art-shapemiles-unicorn-head", "台北 Unicorn head", "獨角獸頭", 12.5]
]);

const VALID_GPX = Buffer.from(`<?xml version="1.0"?><gpx><trk><trkseg>
  <trkpt lat="25" lon="121.5"/><trkpt lat="25.001" lon="121.501"/>
</trkseg></trk></gpx>`);

function response(body, { status = 200, headers = {} } = {}) {
  return new Response(body, { status, headers });
}

async function within(promise, timeoutMs = 300) {
  let timer;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error("測試等待超時，驗證器仍未結束")), timeoutMs);
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

async function loadModules() {
  return Promise.all([
    import("../scripts/route-art-download-sources.mjs"),
    import("../scripts/verify-route-art-downloads.mjs")
  ]);
}

function createVerifiedRecord(source, overrides = {}) {
  return {
    id: source.id,
    name: source.name,
    shapeLabel: source.shapeLabel,
    regionId: source.regionId,
    regionName: source.regionName,
    activityType: source.activityType,
    activityLabel: source.activityLabel,
    status: "source-download",
    distanceKm: source.distanceKm,
    summary: `${source.name} 是 ShapeMiles 公開的台北 GPS Art 跑步路線。`,
    sourcePlatform: source.sourcePlatform,
    sourceUrl: source.sourceUrl,
    externalDownloadUrl: source.downloadUrl,
    verifiedAt: "2026-08-28",
    sourceFormat: "gpx",
    sourceSha256: "a".repeat(64),
    segmentCount: 1,
    totalPoints: 2,
    bounds: { minLat: 25, maxLat: 25.001, minLng: 121.5, maxLng: 121.501 },
    ...overrides
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

test("ShapeMiles 候選精確包含 19 個台北公開 GPX 頁", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }] = await loadModules();
  assert.equal(Object.isFrozen(ROUTE_ART_DOWNLOAD_SOURCES), true);
  assert.ok(ROUTE_ART_DOWNLOAD_SOURCES.every(Object.isFrozen));
  assert.deepEqual(ROUTE_ART_DOWNLOAD_SOURCES.map(item => [
    item.slug, item.id, item.name, item.shapeLabel, item.distanceKm
  ]), EXPECTED_ROUTES);
  assert.equal(new Set(ROUTE_ART_DOWNLOAD_SOURCES.map(item => item.id)).size, 19);
  for (const item of ROUTE_ART_DOWNLOAD_SOURCES) {
    assert.equal(item.regionId, "taipei");
    assert.equal(item.regionName, "台北市");
    assert.equal(item.activityType, "running");
    assert.equal(item.activityLabel, "跑步");
    assert.equal(item.sourcePlatform, "ShapeMiles");
    assert.equal(item.sourceUrl,
      `https://shapemiles.com/en/city/taipei/art-gps-routes/${item.slug}`);
    assert.equal(item.downloadUrl,
      `https://shapemiles.com/api/art-routes/taipei/${item.slug}/gpx`);
  }
});

test("驗證器以 manual redirect 取得 GPX 並只回傳無座標摘要", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  const source = ROUTE_ART_DOWNLOAD_SOURCES[0];
  const calls = [];
  const record = await verifyDownloadSource(source, {
    verifiedAt: "2026-08-28",
    fetchImpl: async (url, options) => {
      calls.push({ url: String(url), options });
      return response(VALID_GPX, { headers: {
        "content-type": "application/gpx+xml",
        "content-length": String(VALID_GPX.length)
      } });
    }
  });

  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, source.downloadUrl);
  assert.equal(calls[0].options.redirect, "manual");
  const headers = new Headers(calls[0].options.headers);
  assert.equal(headers.has("cookie"), false);
  assert.equal(headers.has("authorization"), false);
  assert.deepEqual(record, {
    id: "gps-art-shapemiles-airplane",
    name: "台北 Airplane",
    shapeLabel: "飛機",
    regionId: "taipei",
    regionName: "台北市",
    activityType: "running",
    activityLabel: "跑步",
    status: "source-download",
    distanceKm: 19.6,
    summary: "台北 Airplane 是 ShapeMiles 公開的台北 GPS Art 跑步路線。",
    sourcePlatform: "ShapeMiles",
    sourceUrl: source.sourceUrl,
    externalDownloadUrl: source.downloadUrl,
    verifiedAt: "2026-08-28",
    sourceFormat: "gpx",
    sourceSha256: "e3cb637e746b483668b26ceb098423227a63b3202d4bda57952350415081e574",
    segmentCount: 1,
    totalPoints: 2,
    bounds: { minLat: 25, maxLat: 25.001, minLng: 121.5, maxLng: 121.501 }
  });
  assert.equal(Object.hasOwn(record, "segments"), false);
  assert.equal(Object.hasOwn(record, "coordinates"), false);
});

test("驗證器在 fetch 前拒絕非 HTTPS、認證資訊、非核准主機或路徑", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  const source = ROUTE_ART_DOWNLOAD_SOURCES[0];
  const cases = [
    { ...source, downloadUrl: source.downloadUrl.replace("https:", "http:") },
    { ...source, downloadUrl: source.downloadUrl.replace("https://", "https://user:secret@") },
    { ...source, downloadUrl: source.downloadUrl.replace("shapemiles.com", "evil.example") },
    { ...source, downloadUrl: `${source.downloadUrl}/extra` },
    { ...source, sourceUrl: source.sourceUrl.replace("shapemiles.com", "evil.example") }
  ];

  for (const invalidSource of cases) {
    let calls = 0;
    await assert.rejects(() => verifyDownloadSource(invalidSource, {
      verifiedAt: "2026-08-28",
      fetchImpl: async () => { calls += 1; }
    }), /HTTPS|認證|主機|allowlist|路徑/i);
    assert.equal(calls, 0);
  }
});

test("驗證器拒絕 HTML、超大標頭、超大實際回應與空檔", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  const source = ROUTE_ART_DOWNLOAD_SOURCES[0];
  const scenarios = [
    response("<title>Login</title>", { headers: { "content-type": "text/html" } }),
    response(VALID_GPX, { headers: {
      "content-type": "application/gpx+xml", "content-length": "5000001"
    } }),
    response(Buffer.alloc(5_000_001), { headers: { "content-type": "application/octet-stream" } }),
    response(Buffer.alloc(0), { headers: { "content-type": "application/gpx+xml" } })
  ];
  for (const fetchResponse of scenarios) {
    await assert.rejects(() => verifyDownloadSource(source, {
      verifiedAt: "2026-08-28",
      fetchImpl: async () => fetchResponse
    }), /HTML|5 MB|大小|空|格式/i);
  }
});

test("單一 timeout signal 涵蓋 stalled fetch 與 stalled body", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  const source = ROUTE_ART_DOWNLOAD_SOURCES[0];
  let fetchSignal;
  await assert.rejects(() => within(verifyDownloadSource(source, {
    verifiedAt: "2026-08-28",
    timeoutMs: 20,
    fetchImpl: async (_url, options) => {
      fetchSignal = options.signal;
      return new Promise(() => {});
    }
  })), /逾時/);
  assert.equal(fetchSignal?.aborted, true);

  const stalled = cancelableResponse({
    headers: { "content-type": "application/gpx+xml" },
    stall: true
  });
  await assert.rejects(() => within(verifyDownloadSource(source, {
    verifiedAt: "2026-08-28",
    timeoutMs: 20,
    fetchImpl: async () => stalled.response
  })), /逾時/);
  assert.equal(stalled.wasCancelled(), true);
});

test("驗證器在複製前拒絕單一超大 chunk 並取消 body", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  const oversized = cancelableResponse({
    headers: { "content-type": "application/octet-stream" },
    chunks: [new Uint8Array(5_000_001)],
    stall: true
  });
  await assert.rejects(() => verifyDownloadSource(ROUTE_ART_DOWNLOAD_SOURCES[0], {
    verifiedAt: "2026-08-28",
    fetchImpl: async () => oversized.response
  }), /5 MB|大小/);
  assert.equal(oversized.wasCancelled(), true);
});

test("驗證器先檢查 chunk byteLength 才嘗試 Buffer 轉換", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  let cancelled = false;
  const oversizedBeforeCopy = {
    byteLength: 5_000_001,
    get length() {
      throw new Error("chunk 在大小 gate 前被複製");
    }
  };
  const body = {
    getReader() {
      let delivered = false;
      return {
        async read() {
          if (delivered) return { done: true };
          delivered = true;
          return { done: false, value: oversizedBeforeCopy };
        },
        cancel() { cancelled = true; },
        releaseLock() {}
      };
    }
  };
  await assert.rejects(() => verifyDownloadSource(ROUTE_ART_DOWNLOAD_SOURCES[0], {
    verifiedAt: "2026-08-28",
    fetchImpl: async () => ({
      status: 200,
      statusText: "OK",
      headers: new Headers({ "content-type": "application/octet-stream" }),
      body
    })
  }), /5 MB|大小/);
  assert.equal(cancelled, true);
});

test("驗證器拒絕無受限 reader 的 body 而不呼叫 arrayBuffer fallback", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  let fallbackCalls = 0;
  await assert.rejects(() => verifyDownloadSource(ROUTE_ART_DOWNLOAD_SOURCES[0], {
    verifiedAt: "2026-08-28",
    fetchImpl: async () => ({
      status: 200,
      statusText: "OK",
      headers: new Headers({ "content-type": "application/gpx+xml" }),
      body: null,
      async arrayBuffer() {
        fallbackCalls += 1;
        return Buffer.alloc(5_000_001);
      }
    })
  }), /body|串流|讀取/i);
  assert.equal(fallbackCalls, 0);
});

test("redirect、HTTP、HTML 與 Content-Length 早退都取消回應 body", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  const source = ROUTE_ART_DOWNLOAD_SOURCES[0];
  const scenarios = [
    {
      expected: /主機|allowlist|redirect/i,
      tracked: cancelableResponse({ status: 302, headers: { location: "https://evil.example/file.gpx" }, stall: true })
    },
    { expected: /HTTP 401/, tracked: cancelableResponse({ status: 401, stall: true }) },
    {
      expected: /HTML/,
      tracked: cancelableResponse({ headers: { "content-type": "text/html" }, stall: true })
    },
    {
      expected: /5 MB|大小/,
      tracked: cancelableResponse({ headers: {
        "content-type": "application/gpx+xml", "content-length": "5000001"
      }, stall: true })
    }
  ];

  for (const scenario of scenarios) {
    await assert.rejects(() => verifyDownloadSource(source, {
      verifiedAt: "2026-08-28",
      fetchImpl: async () => scenario.tracked.response
    }), scenario.expected);
    assert.equal(scenario.tracked.wasCancelled(), true);
  }

  const redirected = cancelableResponse({
    status: 302,
    headers: { location: source.downloadUrl },
    stall: true
  });
  let calls = 0;
  const record = await verifyDownloadSource(source, {
    verifiedAt: "2026-08-28",
    fetchImpl: async () => {
      calls += 1;
      return calls === 1
        ? redirected.response
        : response(VALID_GPX, { headers: { "content-type": "application/gpx+xml" } });
    }
  });
  assert.equal(record.id, source.id);
  assert.equal(redirected.wasCancelled(), true);
});

test("驗證器只跟隨核准位置且最多三次重新導向", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  const source = ROUTE_ART_DOWNLOAD_SOURCES[0];
  await assert.rejects(() => verifyDownloadSource(source, {
    verifiedAt: "2026-08-28",
    fetchImpl: async () => response(null, {
      status: 302, headers: { location: "https://evil.example/file.gpx" }
    })
  }), /主機|allowlist|redirect|重新導向/i);

  let calls = 0;
  await assert.rejects(() => verifyDownloadSource(source, {
    verifiedAt: "2026-08-28",
    fetchImpl: async () => {
      calls += 1;
      return response(null, { status: 302, headers: { location: source.downloadUrl } });
    }
  }), /3|redirect|重新導向/i);
  assert.equal(calls, 4);
});

test("驗證器沿用 Task 1 的格式、台灣範圍與 500m 同段跳點 gate", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyDownloadSource }] = await loadModules();
  const source = ROUTE_ART_DOWNLOAD_SOURCES[0];
  const payloads = [
    Buffer.from("not a track"),
    Buffer.from(`<kml><Document><LineString><coordinates>
      121.5,25 121.501,25.001
    </coordinates></LineString></Document></kml>`),
    Buffer.from(`<gpx><trk><trkseg><trkpt lat="35" lon="139"/><trkpt lat="35.001" lon="139.001"/></trkseg></trk></gpx>`),
    Buffer.from(`<gpx><trk><trkseg><trkpt lat="25" lon="121.5"/><trkpt lat="25.01" lon="121.51"/></trkseg></trk></gpx>`)
  ];
  for (const payload of payloads) {
    await assert.rejects(() => verifyDownloadSource(source, {
      verifiedAt: "2026-08-28",
      fetchImpl: async () => response(payload, {
        headers: { "content-type": "application/octet-stream" }
      })
    }), /GPX|格式|台灣|500/i);
  }
});

test("整批驗證保留每件成功與受控 HTTP 失敗分類", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyAllSources }] = await loadModules();
  const sources = ROUTE_ART_DOWNLOAD_SOURCES.slice(0, 2);
  const result = await verifyAllSources(sources, {
    verifiedAt: "2026-08-28",
    fetchImpl: async url => String(url).includes(sources[0].slug)
      ? response(VALID_GPX, { headers: { "content-type": "application/gpx+xml" } })
      : response("unavailable", { status: 503 })
  });

  assert.equal(result.records.length, 1);
  assert.equal(result.records[0].id, sources[0].id);
  assert.deepEqual(result.failures, [{
    id: sources[1].id,
    code: "http-status",
    reason: "HTTP 503"
  }]);
  assert.doesNotMatch(JSON.stringify(result), /cookie|authorization|bearer|token|secret/i);
});

test("整批失敗分類不發布任意上游 message、cause 或多值敏感標頭", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyAllSources }] = await loadModules();
  const source = ROUTE_ART_DOWNLOAD_SOURCES[0];
  const upstreamErrors = [
    new Error('upstream-internal Cookie: sid=first; session="second-secret"; theme=dark'),
    new Error("upstream-internal Authorization: Bearer first-secret, Basic second-secret"),
    new TypeError("arbitrary-message-secret", {
      cause: Object.assign(new Error("arbitrary-cause-secret Cookie: private=value; tail=hidden"), {
        code: "ECONNRESET"
      })
    })
  ];

  for (const upstreamError of upstreamErrors) {
    const result = await verifyAllSources([source], {
      verifiedAt: "2026-08-28",
      fetchImpl: async () => { throw upstreamError; }
    });
    assert.deepEqual(result.failures, [{
      id: source.id,
      code: "network-error",
      reason: "來源網路請求失敗"
    }]);
    assert.doesNotMatch(JSON.stringify(result),
      /upstream|cookie|authorization|bearer|first-secret|second-secret|arbitrary|private|hidden|ECONNRESET/i);
  }
});

test("19 件任一來源失敗時不建立或改寫產物且不留下部分暫存檔", async t => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyAndWriteDownloads }] = await loadModules();
  const temporaryRoot = await fsPromises.mkdtemp(path.join(os.tmpdir(), "route-art-downloads-"));
  t.after(() => fsPromises.rm(temporaryRoot, { recursive: true, force: true }));
  const outputPath = path.join(temporaryRoot, "route-art-downloads.js");
  const failingSource = ROUTE_ART_DOWNLOAD_SOURCES[9];

  async function assertAtomicFailure() {
    await assert.rejects(() => verifyAndWriteDownloads({
      sources: ROUTE_ART_DOWNLOAD_SOURCES,
      verifiedAt: "2026-08-28",
      outputPath,
      fetchImpl: async url => String(url).includes(failingSource.slug)
        ? response("unavailable", { status: 503 })
        : response(VALID_GPX, { headers: { "content-type": "application/gpx+xml" } })
    }), error => {
      assert.match(error.message, /未改寫|失敗/);
      assert.deepEqual(error.failures.map(failure => failure.id), [failingSource.id]);
      return true;
    });
  }

  await assertAtomicFailure();
  assert.equal(fs.existsSync(outputPath), false);
  assert.deepEqual(await fsPromises.readdir(temporaryRoot), []);

  await fsPromises.writeFile(outputPath, "既有安全產物", "utf8");
  await assertAtomicFailure();
  assert.equal(await fsPromises.readFile(outputPath, "utf8"), "既有安全產物");
  assert.deepEqual(await fsPromises.readdir(temporaryRoot), ["route-art-downloads.js"]);
});

test("19 件全成功時以完整 UMD 原子覆寫既有產物", async t => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyAndWriteDownloads }] = await loadModules();
  const temporaryRoot = await fsPromises.mkdtemp(path.join(os.tmpdir(), "route-art-success-"));
  t.after(() => fsPromises.rm(temporaryRoot, { recursive: true, force: true }));
  const outputPath = path.join(temporaryRoot, "route-art-downloads.js");
  await fsPromises.writeFile(outputPath, "既有安全產物", "utf8");

  const records = await verifyAndWriteDownloads({
    sources: ROUTE_ART_DOWNLOAD_SOURCES,
    verifiedAt: "2026-08-28",
    outputPath,
    fetchImpl: async () => response(VALID_GPX, {
      headers: { "content-type": "application/gpx+xml" }
    })
  });

  assert.equal(records.length, 19);
  const artifactSource = await fsPromises.readFile(outputPath, "utf8");
  const module = { exports: {} };
  vm.runInNewContext(artifactSource, { module, globalThis: {} });
  assert.deepEqual(Object.keys(module.exports), [...Object.keys(module.exports)].sort());
  assert.equal(Object.keys(module.exports).length, 19);
  assert.deepEqual(await fsPromises.readdir(temporaryRoot), ["route-art-downloads.js"]);
});

test("write failure 保留既有產物並移除部分 temp", async t => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyAndWriteDownloads }] = await loadModules();
  const temporaryRoot = await fsPromises.mkdtemp(path.join(os.tmpdir(), "route-art-write-fail-"));
  t.after(() => fsPromises.rm(temporaryRoot, { recursive: true, force: true }));
  const outputPath = path.join(temporaryRoot, "route-art-downloads.js");
  await fsPromises.writeFile(outputPath, "既有安全產物", "utf8");
  const fsImpl = filesystemBoundary({
    async writeFile(filePath) {
      await fsPromises.writeFile(filePath, "部分暫存內容", "utf8");
      throw new Error("injected write failure");
    }
  });

  await assert.rejects(() => verifyAndWriteDownloads({
    sources: ROUTE_ART_DOWNLOAD_SOURCES.slice(0, 1),
    verifiedAt: "2026-08-28",
    outputPath,
    fsImpl,
    fetchImpl: async () => response(VALID_GPX, {
      headers: { "content-type": "application/gpx+xml" }
    })
  }), /write failure/);
  assert.equal(await fsPromises.readFile(outputPath, "utf8"), "既有安全產物");
  assert.deepEqual(await fsPromises.readdir(temporaryRoot), ["route-art-downloads.js"]);
});

test("rename failure 保留既有產物並移除完整 temp", async t => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { verifyAndWriteDownloads }] = await loadModules();
  const temporaryRoot = await fsPromises.mkdtemp(path.join(os.tmpdir(), "route-art-rename-fail-"));
  t.after(() => fsPromises.rm(temporaryRoot, { recursive: true, force: true }));
  const outputPath = path.join(temporaryRoot, "route-art-downloads.js");
  await fsPromises.writeFile(outputPath, "既有安全產物", "utf8");
  const fsImpl = filesystemBoundary({
    async rename() {
      throw new Error("injected rename failure");
    }
  });

  await assert.rejects(() => verifyAndWriteDownloads({
    sources: ROUTE_ART_DOWNLOAD_SOURCES.slice(0, 1),
    verifiedAt: "2026-08-28",
    outputPath,
    fsImpl,
    fetchImpl: async () => response(VALID_GPX, {
      headers: { "content-type": "application/gpx+xml" }
    })
  }), /rename failure/);
  assert.equal(await fsPromises.readFile(outputPath, "utf8"), "既有安全產物");
  assert.deepEqual(await fsPromises.readdir(temporaryRoot), ["route-art-downloads.js"]);
});

test("下載摘要 serializer 產生排序且深度凍結的無座標 UMD", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { serializeDownloads }] = await loadModules();
  const artifactSource = serializeDownloads([
    createVerifiedRecord(ROUTE_ART_DOWNLOAD_SOURCES[1]),
    createVerifiedRecord(ROUTE_ART_DOWNLOAD_SOURCES[0])
  ]);
  const module = { exports: {} };
  vm.runInNewContext(artifactSource, { module, globalThis: {} });
  const RouteArtDownloads = module.exports;
  const ids = Object.keys(RouteArtDownloads);
  assert.equal(ids.length, 2);
  assert.deepEqual(ids, [...ids].sort());
  assert.equal(Object.isFrozen(RouteArtDownloads), true);
  for (const record of Object.values(RouteArtDownloads)) {
    assert.equal(Object.isFrozen(record), true);
    assert.equal(Object.isFrozen(record.bounds), true);
    assert.equal(Object.hasOwn(record, "segments"), false);
    assert.equal(Object.hasOwn(record, "coordinates"), false);
    assert.equal(record.status, "source-download");
    assert.equal(record.verifiedAt, "2026-08-28");
    assert.match(record.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(record.segmentCount >= 1);
    assert.ok(record.totalPoints >= 2);
  }
  assert.doesNotMatch(artifactSource,
    /<trkpt|<coordinates|\bsegments\b|\bcoordinates\b|cookie|authorization|bearer|client_secret|\btoken\b/i);
});

test("下載摘要 serializer 拒絕 geometry、coordinate 與允許欄位內的 XML", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { serializeDownloads }] = await loadModules();
  const base = createVerifiedRecord(ROUTE_ART_DOWNLOAD_SOURCES[0]);
  const hostileRecords = [
    { ...base, segments: [[{ lat: 25, lng: 121.5 }]] },
    { ...base, coordinates: [{ lat: 25, lng: 121.5 }] },
    { ...base, summary: "<trkpt lat=\"25\" lon=\"121.5\"/>" }
  ];
  for (const record of hostileRecords) {
    assert.throws(() => serializeDownloads([record]), /欄位|軌跡|XML|文字|允許/i);
  }
});

test("下載摘要 serializer 拒絕不完整、多餘或無效 record shape", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { serializeDownloads }] = await loadModules();
  const missing = createVerifiedRecord(ROUTE_ART_DOWNLOAD_SOURCES[0]);
  delete missing.totalPoints;
  const extra = { ...createVerifiedRecord(ROUTE_ART_DOWNLOAD_SOURCES[1]), unexpected: true };
  const invalidBounds = {
    ...createVerifiedRecord(ROUTE_ART_DOWNLOAD_SOURCES[2]),
    bounds: { minLat: 25, maxLat: 24, minLng: 121.5, maxLng: 121.501 }
  };
  for (const record of [missing, extra, invalidBounds]) {
    assert.throws(() => serializeDownloads([record]), /欄位|record|bounds|範圍|完整/i);
  }
});

test("下載摘要 serializer 拒絕重複 ID", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { serializeDownloads }] = await loadModules();
  assert.throws(() => serializeDownloads([
    createVerifiedRecord(ROUTE_ART_DOWNLOAD_SOURCES[0]),
    createVerifiedRecord(ROUTE_ART_DOWNLOAD_SOURCES[0])
  ]), /重複|ID/i);
});

test("下載摘要 serializer 只接受 registry ID 對應的逐字來源 URL", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { serializeDownloads }] = await loadModules();
  const [airplane, bicycle] = ROUTE_ART_DOWNLOAD_SOURCES;
  const base = createVerifiedRecord(airplane);
  const hostileRecords = [
    {
      ...base,
      externalDownloadUrl: `https://shapemiles.com/api/art-routes/taipei/${airplane.slug}/nested/gpx`
    },
    {
      ...base,
      sourceUrl: "https://shapemiles.com/en/city/taipei/art-gps-routes/"
    },
    { ...base, externalDownloadUrl: bicycle.downloadUrl },
    { ...base, sourceUrl: bicycle.sourceUrl },
    { ...base, id: "gps-art-shapemiles-unapproved" }
  ];

  for (const record of hostileRecords) {
    assert.throws(() => serializeDownloads([record]), /allowlist|候選|來源|下載|ID/i);
  }
});

test("下載摘要 serializer 要求固定 metadata 與 registry 候選一致", async () => {
  const [{ ROUTE_ART_DOWNLOAD_SOURCES }, { serializeDownloads }] = await loadModules();
  const [airplane, bicycle] = ROUTE_ART_DOWNLOAD_SOURCES;
  const base = createVerifiedRecord(airplane);
  const hostileRecords = [
    { ...base, name: bicycle.name },
    { ...base, shapeLabel: bicycle.shapeLabel },
    { ...base, distanceKm: bicycle.distanceKm },
    { ...base, summary: `${bicycle.name} 是 ShapeMiles 公開的台北 GPS Art 跑步路線。` }
  ];

  for (const record of hostileRecords) {
    assert.throws(() => serializeDownloads([record]), /候選|metadata|固定|一致/i);
  }
});
