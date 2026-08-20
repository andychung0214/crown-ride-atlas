# GPS Art Source Downloads Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 將 GPS Art 圖鑑擴充為站內核准軌跡、來源端一鍵下載、僅有作品來源三種狀態，逐條驗證並上架 19 件 ShapeMiles 台北公開 GPX 候選，同時保留既有 22 件作品與 68 條正式路線。

**Architecture:** Node 來源驗證器以共用解析函式庫讀取 GPX／KML／KMZ／GeoJSON，驗證台灣座標後只輸出 SHA-256、點數、bounds 與外部下載網址，不保存 ShapeMiles 完整座標。瀏覽器 catalog 將這份凍結摘要合併為 `source-download` 卡片；既有 `track-ready` 仍使用站內 segments，需登入或無匿名檔案者維持 `source-only`。

**Tech Stack:** Vanilla JavaScript UMD、Node.js ESM、Node 內建 `crypto`／`zlib`／`fs`／`node:test`、既有 Leaflet 與 GPX 模組。

**Spec:** `docs/superpowers/specs/2026-08-21-bike-anatomy-and-gps-art-downloads-design.md`

## Global Constraints

- 先完成 `docs/superpowers/plans/2026-08-21-bike-parts-encyclopedia.md`；本計畫不得回退百科功能。
- 只接受 HTTPS 與預先核准主機；不得讀取登入 Cookie、Authorization、OAuth 權杖或私人活動。
- 不把 ShapeMiles 或其他權利未明確允許重新發布的完整 GPX／座標寫入版本庫。
- `track-ready`、`source-download`、`source-only` 三種狀態必須互斥且由資料契約驗證。
- 不能匿名取得的 Strava／Garmin 頁面只能標示「查看原始路線」及登入需求，不能稱為公開 GPX。
- 不手繪、重排、反轉或補線來冒充原作者軌跡；跑步／步行作品不得宣稱適合公路車。
- 正式 `Data.routes` 維持 68 條，`TrackManifest` 維持 23 個資料包；GPS Art 不進入正式 manifest。
- 一般 `npm test` 不呼叫外部網路；現場來源查核使用獨立指令。
- 推送前必須顯示 remote、branch、commit，取得使用者推送授權後才能 push。

## File Structure

- Create `scripts/lib/route-art-source.mjs`: GPX／KML／KMZ／GeoJSON 解析、台灣範圍與跳點驗證、摘要計算。
- Modify `scripts/import-route-art-tracks.mjs`: 改用共用解析函式庫並維持既有兩件核准軌跡產物完全一致。
- Create `scripts/route-art-download-sources.mjs`: 19 件 ShapeMiles 候選的精確 page／download URL 與展示資料。
- Create `scripts/verify-route-art-downloads.mjs`: 限制網路取得、逐件驗證、原子輸出無座標摘要。
- Create `js/data/route-art-downloads.js`: 驗證後的 UMD 唯讀下載摘要，不含 `segments`／`coordinates`。
- Modify `package.json`: 加入獨立的 `art:verify-downloads` 指令。
- Modify `js/core/route-art.js`: 三狀態 schema、五個篩選與四項統計。
- Modify `js/data/route-art-catalog.js`: 合併新增下載摘要、補入已證實的原始路線連結。
- Modify `index.html`: 在 catalog 前載入 `route-art-downloads.js`。
- Modify `js/ui/render.js`, `js/app.js`: 三種卡片、來源下載與篩選；App 的站內 GPX 動作維持只接受 `track-ready`。
- Modify `css/layout.css`, `css/components.css`: 新狀態與外部下載提示。
- Create `tests/route-art-source.test.js`, `tests/route-art-downloads.test.js`。
- Modify `tests/route-art.test.js`, `tests/route-art-catalog.test.js`, `tests/render.test.js`, `tests/app.test.js`, `tests/css.test.js`, `tests/pages-workflow.test.js`。
- Modify `docs/route-research/taiwan-gps-art.md`, `README.md`, `docs/PLAN.md`, `docs/TEST-PLAN.md`, `docs/VERIFICATION.md`。

---

### Task 1: 共用 GPX／KML／KMZ／GeoJSON 安全解析器

**Files:**
- Create: `scripts/lib/route-art-source.mjs`
- Create: `tests/route-art-source.test.js`
- Modify: `scripts/import-route-art-tracks.mjs`
- Modify: `tests/route-art-catalog.test.js`

**Interfaces:**
- Produces: `parseGpxSegments(text) -> Segment[]`。
- Produces: `parseKmlSegments(text) -> Segment[]`。
- Produces: `parseGeoJsonSegments(text) -> Segment[]`，只接受 `LineString`／`MultiLineString` 及其 Feature 包裝。
- Produces: `extractKmzKml(buffer) -> Buffer`，只接受單一 `.kml` entry、stored 或 deflate 方法。
- Produces: `detectFormat({ buffer, contentType, url }) -> "gpx"|"kml"|"kmz"|"geojson"`。
- Produces: `parseTrackPayload({ buffer, contentType, url }) -> { sourceFormat, segments }`。
- Produces: `validateSegments(segments, { sourceId, maxSegmentGapMeters }) -> Segment[]`。
- Produces: `summarizeTrack(buffer, sourceFormat, segments) -> { sourceFormat, sourceSha256, segmentCount, totalPoints, bounds }`。
- Consumes: `Point = { lat: number, lng: number, ele?: number }`，台灣界線 `21.5–25.5 N / 119.5–122.1 E`。

- [ ] **Step 1: 寫入各格式與惡意輸入失敗測試**

```js
const GPX_TWO_SEGMENTS = `<?xml version="1.0"?><gpx><trk>
  <trkseg><trkpt lat="25" lon="121.5"></trkpt><trkpt lat="25.001" lon="121.501"></trkpt></trkseg>
  <trkseg><trkpt lat="25.002" lon="121.502"></trkpt><trkpt lat="25.003" lon="121.503"></trkpt></trkseg>
</trk></gpx>`;

const KML_TWO_LINES = `<kml><Document>
  <LineString><coordinates>121.5,25 121.501,25.001</coordinates></LineString>
  <LineString><coordinates>121.502,25.002 121.503,25.003</coordinates></LineString>
</Document></kml>`;

function createStoredZip(name, payload) {
  const filename = Buffer.from(name, "utf8");
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0);
  local.writeUInt16LE(20, 4);
  local.writeUInt16LE(0, 6);
  local.writeUInt16LE(0, 8);
  local.writeUInt32LE(0, 14);
  local.writeUInt32LE(payload.length, 18);
  local.writeUInt32LE(payload.length, 22);
  local.writeUInt16LE(filename.length, 26);

  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50, 0);
  central.writeUInt16LE(20, 4);
  central.writeUInt16LE(20, 6);
  central.writeUInt16LE(0, 8);
  central.writeUInt16LE(0, 10);
  central.writeUInt32LE(0, 16);
  central.writeUInt32LE(payload.length, 20);
  central.writeUInt32LE(payload.length, 24);
  central.writeUInt16LE(filename.length, 28);
  central.writeUInt32LE(0, 42);

  const centralOffset = local.length + filename.length + payload.length;
  const centralSize = central.length + filename.length;
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(1, 8);
  eocd.writeUInt16LE(1, 10);
  eocd.writeUInt32LE(centralSize, 12);
  eocd.writeUInt32LE(centralOffset, 16);
  return Buffer.concat([local, filename, payload, central, filename, eocd]);
}

test("來源解析器保留 GPX 與 KML 分段", () => {
  assert.deepEqual(parseGpxSegments(GPX_TWO_SEGMENTS).map(segment => segment.length), [2, 2]);
  assert.deepEqual(parseKmlSegments(KML_TWO_LINES).map(segment => segment.length), [2, 2]);
});

test("GeoJSON 只接受線資料並轉成 lat/lng", () => {
  const segments = parseGeoJsonSegments(JSON.stringify({
    type: "MultiLineString",
    coordinates: [
      [[121.5, 25.0, 10], [121.501, 25.001, 11]],
      [[121.502, 25.002], [121.503, 25.003]]
    ]
  }));
  assert.deepEqual(segments[0][0], { lat: 25, lng: 121.5, ele: 10 });
  assert.deepEqual(segments.map(segment => segment.length), [2, 2]);
  assert.throws(() => parseGeoJsonSegments('{"type":"Polygon","coordinates":[]}'), /LineString/);
});

test("KMZ 只解出受限制的 KML entry", () => {
  const kmz = createStoredZip("doc.kml", Buffer.from(KML_TWO_LINES));
  assert.match(extractKmzKml(kmz).toString("utf8"), /LineString/);
  assert.throws(() => extractKmzKml(createStoredZip("readme.txt", Buffer.from("x"))), /KML/);
  assert.throws(() => extractKmzKml(Buffer.alloc(5_000_001)), /大小/);
});

test("內容偵測拒絕 HTML、台灣外座標與 500m 同段跳點", () => {
  assert.throws(() => detectFormat({
    buffer: Buffer.from("<!doctype html><title>Login</title>"),
    contentType: "text/html",
    url: "https://example.com/login"
  }), /HTML|格式/);
  assert.throws(() => validateSegments([[{ lat: 35, lng: 139 }, { lat: 35.001, lng: 139.001 }]], {
    sourceId: "outside", maxSegmentGapMeters: 500
  }), /台灣/);
  assert.throws(() => validateSegments([[{ lat: 25, lng: 121.5 }, { lat: 25.01, lng: 121.51 }]], {
    sourceId: "jump", maxSegmentGapMeters: 500
  }), /500/);
});
```

`createStoredZip` 在測試中建立一個 local header、central directory 與 EOCD 的 stored ZIP；檔名固定 UTF-8、壓縮方法 0、compressed／uncompressed size 均使用 payload 長度。解析器不執行路徑、不寫檔，並拒絕 `../`、絕對路徑、多個 KML entry、加密 flag、未支援壓縮方法及解壓後超過 5 MB。

- [ ] **Step 2: 執行 focused tests 並確認模組尚不存在**

Run: `node --test tests/route-art-source.test.js tests/route-art-catalog.test.js`

Expected: FAIL，訊息包含無法匯入 `scripts/lib/route-art-source.mjs`。

- [ ] **Step 3: 建立解析、偵測、驗證與摘要函式**

核心限制必須寫成常數：

```js
export const LIMITS = Object.freeze({
  maxBytes: 5_000_000,
  maxPoints: 100_000,
  maxSegments: 2_000,
  maxSegmentGapMeters: 500,
  taiwan: Object.freeze({ minLat: 21.5, maxLat: 25.5, minLng: 119.5, maxLng: 122.1 })
});
```

`extractKmzKml` 從 EOCD 取得 central directory，逐 entry 讀取檔名、general purpose flag、method、compressed size、uncompressed size、local header offset；方法 0 直接取 payload，方法 8 使用 `inflateRawSync`。在解壓前後都檢查 5 MB，且只回傳唯一 `.kml`。

`summarizeTrack` 必須只回傳：

```js
{
  sourceFormat,
  sourceSha256: createHash("sha256").update(buffer).digest("hex"),
  segmentCount: segments.length,
  totalPoints: segments.reduce((sum, segment) => sum + segment.length, 0),
  bounds: {
    minLat: Math.min(...segments.flat().map(point => point.lat)),
    maxLat: Math.max(...segments.flat().map(point => point.lat)),
    minLng: Math.min(...segments.flat().map(point => point.lng)),
    maxLng: Math.max(...segments.flat().map(point => point.lng))
  }
}
```

- [ ] **Step 4: 將既有站內匯入器改用共用函式並維持 provenance**

`scripts/import-route-art-tracks.mjs` 從新函式庫 import 並 re-export `parseGpxSegments`、`parseKmlSegments`、`validateSegments`，以免既有測試介面中斷。下載、required hard-fail、原子產檔與既有兩件軌跡的 `sourceSha256`／`geometrySha256`／逐段點數必須完全不變。

- [ ] **Step 5: 重跑解析與既有核准軌跡回歸**

Run: `node --test tests/route-art-source.test.js tests/route-art-catalog.test.js tests/gpx.test.js`

Expected: 全部 PASS；台北櫻花與台北圓環仍符合既有核准雜湊與 6／12 個 segments。

- [ ] **Step 6: 提交安全解析器**

```bash
git add scripts/lib/route-art-source.mjs scripts/import-route-art-tracks.mjs tests/route-art-source.test.js tests/route-art-catalog.test.js
git commit -m "feat: 建立 GPS Art 多格式來源驗證器"
```

---

### Task 2: 19 件 ShapeMiles 候選與無座標下載摘要

**Files:**
- Create: `scripts/route-art-download-sources.mjs`
- Create: `scripts/verify-route-art-downloads.mjs`
- Create: `js/data/route-art-downloads.js`
- Create: `tests/route-art-downloads.test.js`
- Modify: `package.json`

**Interfaces:**
- Consumes: Task 1 的 `parseTrackPayload`、`validateSegments`、`summarizeTrack`。
- Produces: `ROUTE_ART_DOWNLOAD_SOURCES` 19 筆凍結候選。
- Produces: `verifyDownloadSource(source, { fetchImpl, verifiedAt }) -> DownloadRecord`。
- Produces: `verifyAllSources(sources, options) -> { records, failures }`。
- Produces: `RouteArtDownloads[id] = DownloadRecord` UMD 物件；不得包含 `segments`、`coordinates` 或 GPX XML。
- Produces: npm script `art:verify-downloads`。

- [ ] **Step 1: 寫入候選、限制下載與產物失敗測試**

```js
test("ShapeMiles 候選精確包含 19 個台北公開 GPX 頁", () => {
  assert.equal(ROUTE_ART_DOWNLOAD_SOURCES.length, 19);
  assert.equal(new Set(ROUTE_ART_DOWNLOAD_SOURCES.map(item => item.id)).size, 19);
  assert.ok(ROUTE_ART_DOWNLOAD_SOURCES.every(item => item.activityType === "running"));
  assert.ok(ROUTE_ART_DOWNLOAD_SOURCES.every(item => item.sourceUrl.startsWith("https://shapemiles.com/en/city/taipei/art-gps-routes/")));
  assert.ok(ROUTE_ART_DOWNLOAD_SOURCES.every(item => item.downloadUrl.startsWith("https://shapemiles.com/api/art-routes/taipei/")));
});

test("驗證器拒絕 HTML、超大回應與未核准重新導向", async () => {
  function fakeFetch({ contentType, body }) {
    return async () => new Response(body, { status: 200, headers: { "content-type": contentType } });
  }
  function fakeRedirect(location) {
    return async () => new Response(null, { status: 302, headers: { location } });
  }
  await assert.rejects(() => verifyDownloadSource(ROUTE_ART_DOWNLOAD_SOURCES[0], {
    fetchImpl: fakeFetch({ contentType: "text/html", body: "<title>Login</title>" }),
    verifiedAt: "2026-08-21"
  }), /HTML|格式/);
  await assert.rejects(() => verifyDownloadSource(ROUTE_ART_DOWNLOAD_SOURCES[0], {
    fetchImpl: fakeRedirect("https://evil.example/file.gpx"),
    verifiedAt: "2026-08-21"
  }), /主機|redirect/);
});

test("下載摘要不保存任何完整軌跡", () => {
  for (const record of Object.values(RouteArtDownloads)) {
    assert.equal(Object.hasOwn(record, "segments"), false);
    assert.equal(Object.hasOwn(record, "coordinates"), false);
    assert.match(record.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(record.totalPoints >= 2);
  }
});
```

- [ ] **Step 2: 執行測試並確認候選與產物尚不存在**

Run: `node --test tests/route-art-downloads.test.js`

Expected: FAIL，指出來源 registry、verifier 或 `route-art-downloads.js` 不存在。

- [ ] **Step 3: 建立 19 筆精確候選 registry**

```js
const ROUTES = [
  ["airplane-19-6km", "Airplane", "飛機", 19.6],
  ["bicycle-14-5km", "Bicycle", "自行車", 14.5],
  ["bunny-13-6km", "Bunny", "兔子", 13.6],
  ["butterfly-14-1km", "Butterfly", "蝴蝶", 14.1],
  ["cactus-11-3km", "Cactus", "仙人掌", 11.3],
  ["cat-silhouette-10-0km", "Cat silhouette", "貓咪剪影", 10.0],
  ["dinosaur-21-7km", "Dinosaur", "恐龍", 21.7],
  ["dolphin-11-8km", "Dolphin", "海豚", 11.8],
  ["guitar-11-3km", "Guitar", "吉他", 11.3],
  ["heart-with-arrow-11-6km", "Heart with arrow", "箭穿愛心", 11.6],
  ["lightning-bolt-12-1km", "Lightning bolt", "閃電", 12.1],
  ["rocket-9-9km", "Rocket", "火箭", 9.9],
  ["running-shoe-10-7km", "Running shoe", "跑鞋", 10.7],
  ["sailboat-8-7km", "Sailboat", "帆船", 8.7],
  ["snowflake-14-7km", "Snowflake", "雪花", 14.7],
  ["star-12-6km", "Star", "星星", 12.6],
  ["top-hat-6-6km", "Top hat", "高帽", 6.6],
  ["turtle-16-1km", "Turtle", "烏龜", 16.1],
  ["unicorn-head-12-5km", "Unicorn head", "獨角獸頭", 12.5]
];

export const ROUTE_ART_DOWNLOAD_SOURCES = Object.freeze(ROUTES.map(([slug, name, shapeLabel, distanceKm]) => Object.freeze({
  id: `gps-art-shapemiles-${slug.replace(/-\d+(?:-\d+)?km$/, "")}`,
  slug,
  name: `台北 ${name}`,
  shapeLabel,
  regionId: "taipei",
  regionName: "台北市",
  activityType: "running",
  activityLabel: "跑步",
  distanceKm,
  sourcePlatform: "ShapeMiles",
  sourceUrl: `https://shapemiles.com/en/city/taipei/art-gps-routes/${slug}`,
  downloadUrl: `https://shapemiles.com/api/art-routes/taipei/${slug}/gpx`
})));
```

- [ ] **Step 4: 建立受限 fetch、逐件驗證與原子產物**

`verifyDownloadSource` 使用 `redirect: "manual"`，最多跟隨 3 次且每次 URL 都通過 host／path allowlist；依 `content-length` 與實際 buffer 同時限制 5 MB；HTTP 非 2xx、HTML、空檔、格式錯誤、台灣外座標或不合理跳點皆 throw。成功 record 固定為：

```js
{
  id: source.id,
  name: source.name,
  shapeLabel: source.shapeLabel,
  regionId: "taipei",
  regionName: "台北市",
  activityType: "running",
  activityLabel: "跑步",
  status: "source-download",
  distanceKm: source.distanceKm,
  summary: `${source.name} 是 ShapeMiles 公開的台北 GPS Art 跑步路線。`,
  sourcePlatform: "ShapeMiles",
  sourceUrl: source.sourceUrl,
  externalDownloadUrl: source.downloadUrl,
  verifiedAt,
  sourceFormat: summary.sourceFormat,
  sourceSha256: summary.sourceSha256,
  segmentCount: summary.segmentCount,
  totalPoints: summary.totalPoints,
  bounds: summary.bounds
}
```

CLI 只有 19 件全部成功才以同目錄暫存檔加 `rename` 改寫 `js/data/route-art-downloads.js`；任一失敗列出 ID 與原因、exit code 1，且不改寫既有產物。產物使用 UMD、依 ID 排序並深度凍結。

- [ ] **Step 5: 現場執行 19 件來源查核**

Run: `npm run art:verify-downloads`

Expected: 19/19 HTTP 2xx、格式 GPX、座標位於台灣；輸出每件 ID、bytes、segments、points、SHA-256，不輸出 GPX XML、Cookie、Authorization 或任何權杖。若某件失敗，停止此 Task，保留完整錯誤證據；不得停用 TLS、放寬台灣範圍或手工補檔。

- [ ] **Step 6: 驗證產物安全與 focused tests**

Run: `node --test tests/route-art-source.test.js tests/route-art-downloads.test.js`

Expected: 全部 PASS。

Run: `rg -n "<trkpt|<coordinates|segments|coordinates|cookie|authorization|bearer|client_secret" js/data/route-art-downloads.js`

Expected: 無匹配、exit code 1。

- [ ] **Step 7: 提交候選與驗證摘要**

```bash
git add package.json scripts/route-art-download-sources.mjs scripts/verify-route-art-downloads.mjs js/data/route-art-downloads.js tests/route-art-downloads.test.js
git commit -m "feat: 驗證台北 GPS Art 來源下載"
```

---

### Task 3: 三狀態資料契約、41 件 catalog 與原始路線連結

**Files:**
- Modify: `js/core/route-art.js`
- Modify: `js/data/route-art-catalog.js`
- Modify: `index.html`
- Modify: `tests/route-art.test.js`
- Modify: `tests/route-art-catalog.test.js`
- Modify: `tests/data.test.js`
- Modify: `tests/track-data.test.js`
- Modify: `tests/pages-workflow.test.js`

**Interfaces:**
- Consumes: `RouteArtDownloads` 19 筆、`RouteArtTracks` 既有站內軌跡。
- Produces: `FILTERS = ["all", "cycling", "foot", "downloadable", "track-ready"]`。
- Produces: `stats(items) -> { total, trackReady, sourceDownload, sourceOnly }`。
- Produces: `validateItem` 對三種狀態及 optional `routeSourceUrl`／`routeSourceAccess` 驗證。
- Produces: 41 件凍結 catalog；若下載摘要模組缺失，瀏覽器 fail-soft 保留既有 22 件。

- [ ] **Step 1: 先改寫 schema、統計與 catalog 數量失敗測試**

```js
test("來源端 GPX 狀態要求完整摘要且禁止站內座標", () => {
  const item = {
    id: "taipei-guitar", name: "台北 Guitar", activityType: "running",
    status: "source-download", sourceUrl: "https://shapemiles.com/en/city/taipei/art-gps-routes/guitar-11-3km",
    sourcePlatform: "ShapeMiles", verifiedAt: "2026-08-21",
    externalDownloadUrl: "https://shapemiles.com/api/art-routes/taipei/guitar-11-3km/gpx",
    sourceFormat: "gpx", sourceSha256: "a".repeat(64), segmentCount: 1, totalPoints: 200,
    bounds: { minLat: 24.9, maxLat: 25.1, minLng: 121.4, maxLng: 121.6 }
  };
  assert.doesNotThrow(() => RouteArt.validateItem(item));
  assert.throws(() => RouteArt.validateItem({ ...item, segments: [[{ lat: 25, lng: 121 }, { lat: 25.01, lng: 121.01 }]] }), /source-download/);
  assert.throws(() => RouteArt.validateItem({ ...item, externalDownloadUrl: "https://evil.example/file.gpx" }), /下載來源/);
  assert.throws(() => RouteArt.validateItem({ ...item, sourceSha256: "bad" }), /SHA-256/);
});

test("GPS Art 統計與篩選區分站內及來源端下載", () => {
  const items = [
    { id: "ready", status: "track-ready", activityType: "walking" },
    { id: "external", status: "source-download", activityType: "running" },
    { id: "source", status: "source-only", activityType: "cycling" }
  ];
  assert.deepEqual(RouteArt.stats(items), { total: 3, trackReady: 1, sourceDownload: 1, sourceOnly: 1 });
  assert.deepEqual(RouteArt.filter(items, "downloadable").map(item => item.id), ["ready", "external"]);
  assert.deepEqual(RouteArt.filter(items, "track-ready").map(item => item.id), ["ready"]);
});

test("完整圖鑑為 41 件且不污染正式路線", () => {
  assert.equal(Catalog.length, 41);
  assert.equal(Catalog.filter(item => item.status === "track-ready").length, 2);
  assert.equal(Catalog.filter(item => item.status === "source-download").length, 19);
  assert.equal(Catalog.filter(item => item.status === "source-only").length, 20);
  assert.equal(Data.routes.length, 68);
  assert.equal(new Set(Object.values(TrackManifest).map(entry => entry.bundleId)).size, 23);
});
```

- [ ] **Step 2: 執行測試並確認舊兩狀態契約失敗**

Run: `node --test tests/route-art.test.js tests/route-art-catalog.test.js tests/data.test.js tests/track-data.test.js tests/pages-workflow.test.js`

Expected: FAIL，舊 `STATUSES` 不接受 `source-download`、統計欄位不同、catalog 仍為 22。

- [ ] **Step 3: 實作三狀態與網址 allowlist**

```js
const FILTERS = Object.freeze(["all", "cycling", "foot", "downloadable", "track-ready"]);
const STATUSES = new Set(["track-ready", "source-download", "source-only"]);

function isAllowedDownloadUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:"
      && url.hostname === "shapemiles.com"
      && /^\/api\/art-routes\/taipei\/[a-z0-9-]+\/gpx$/.test(url.pathname);
  } catch (_error) {
    return false;
  }
}
```

`source-download` 必須有 allowlisted `externalDownloadUrl`、`sourceFormat`、64 位小寫十六進位 `sourceSha256`、正整數 `segmentCount`／`totalPoints` 與有限台灣 bounds，並禁止 `segments`／`coordinates`。`source-only` 禁止下載摘要欄位；`track-ready` 維持既有 segments 契約。optional `routeSourceUrl` 必須 HTTPS；`routeSourceAccess` 只接受 `public-page` 或 `login-required`。

- [ ] **Step 4: 合併下載摘要並補入已證實原始路線**

`route-art-catalog.js` 在 Node require `./route-art-downloads.js`，瀏覽器讀 `root.CrownRideAtlas.RouteArtDownloads || {}`；先建立既有 22 筆，再串接下載摘要的 `Object.values`。每件皆呼叫 `RouteArt.validateItem` 後深度凍結。

補入以下已由 CS72 文章／影片說明查核的原始路線：

```js
const MOBILE01_ROUTE_SOURCES = Object.freeze({
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
});
```

這 12 筆設定 `routeSourceAccess: "login-required"`，不得改成 `source-download`。青埔小貓 summary 保留門禁社區、田地／非鋪面與狹窄通道警告；天母鯨魚保留逆向路段與較適合跑步的警告。

- [ ] **Step 5: 載入下載摘要並重跑資料回歸**

在 `route-art-tracks.js` 與 `route-art-catalog.js` 之間加入：

```html
<script defer src="js/data/route-art-downloads.js"></script>
```

Run: `node --test tests/route-art.test.js tests/route-art-downloads.test.js tests/route-art-catalog.test.js tests/data.test.js tests/track-data.test.js tests/pages-workflow.test.js`

Expected: 全部 PASS；41 件／2 track-ready／19 source-download／20 source-only；68 routes／23 bundles 不變。

- [ ] **Step 6: 提交三狀態 catalog**

```bash
git add js/core/route-art.js js/data/route-art-catalog.js index.html tests/route-art.test.js tests/route-art-catalog.test.js tests/data.test.js tests/track-data.test.js tests/pages-workflow.test.js
git commit -m "feat: 擴充 GPS Art 三種軌跡狀態"
```

---

### Task 4: 一鍵來源下載、五種篩選與卡片狀態

**Files:**
- Modify: `js/ui/render.js`
- Modify: `js/app.js`
- Modify: `tests/render.test.js`
- Modify: `tests/app.test.js`

**Interfaces:**
- Consumes: `RouteArt.FILTERS`、`RouteArt.stats`、三狀態 catalog、`routeSourceUrl`／`routeSourceAccess`。
- Produces: `source-download` 的安全 `<a>`「從來源下載 GPX」、`track-ready` 的既有站內 `<button>`「下載 GPX」、`source-only` 的來源操作。
- Produces: 五個篩選按鈕與四項統計；只有 `track-ready` 具有 `[data-art-map]`。

- [ ] **Step 1: 寫入三狀態渲染與動作失敗測試**

```js
test("路線美學分開呈現站內與來源端 GPX", () => {
  const ready = fixtureArt({
    id: "ready", status: "track-ready",
    segments: [[{ lat: 25, lng: 121 }, { lat: 25.01, lng: 121.01 }]]
  });
  const external = fixtureArt({
    id: "external", status: "source-download",
    externalDownloadUrl: "https://shapemiles.com/api/art-routes/taipei/guitar-11-3km/gpx",
    sourceFormat: "gpx", sourceSha256: "a".repeat(64), segmentCount: 1, totalPoints: 200,
    bounds: { minLat: 24.9, maxLat: 25.1, minLng: 121.4, maxLng: 121.6 }
  });
  const source = fixtureArt({
    id: "source", status: "source-only",
    routeSourceUrl: "https://www.strava.com/routes/17035427", routeSourceAccess: "login-required"
  });
  const page = Render.routeArtPage(fakeDocument(), {
    routeArt: [ready, external, source],
    routeArtFilter: "all"
  }, { setRouteArtFilter() {}, downloadArtGpx() {} });
  const nodes = descendants(page);
  assert.equal(nodes.filter(node => node.dataset && node.dataset.artMap).length, 1);
  assert.equal(nodes.filter(node => node.name === "button" && node.textContent === "下載 GPX").length, 1);
  const external = nodes.find(node => node.name === "a" && node.textContent === "從來源下載 GPX");
  assert.equal(external.attributes.target, "_blank");
  assert.equal(external.attributes.rel, "noopener noreferrer");
  assert.match(nodes.map(node => node.textContent).join(" "), /來源端可下載|公開軌跡待取得|需要登入/);
});

test("下載篩選包含站內及來源端，站內地圖只包含 track-ready", () => {
  const items = [
    fixtureArt({ id: "ready", status: "track-ready", segments: [[{ lat: 25, lng: 121 }, { lat: 25.01, lng: 121.01 }]] }),
    fixtureArt({ id: "external", status: "source-download" }),
    fixtureArt({ id: "source", status: "source-only" })
  ];
  assert.deepEqual(Render.routeArtEntries(items, "downloadable").map(item => item.id), ["ready", "external"]);
  assert.deepEqual(Render.routeArtEntries(items, "track-ready").map(item => item.id), ["ready"]);
});
```

- [ ] **Step 2: 執行 render/app 測試並確認舊 UI 失敗**

Run: `node --test tests/render.test.js tests/app.test.js`

Expected: FAIL，舊標籤只有四種篩選且沒有來源端下載卡片。

- [ ] **Step 3: 實作五種篩選、四項統計與安全下載連結**

篩選標籤固定為：

```js
const filterLabels = {
  all: "全部",
  cycling: "自行車",
  foot: "跑步／步行",
  downloadable: "可下載 GPX",
  "track-ready": "站內地圖"
};
```

狀態文案固定為：`track-ready`「站內軌跡可預覽」、`source-download`「來源端 GPX 可下載」、`source-only`「公開軌跡待取得」。來源端按鈕直接連到 allowlisted `externalDownloadUrl`，使用新分頁與 `noopener noreferrer`；不能呼叫 `actions.downloadArtGpx`，也不能使用跨來源 `download` 屬性。`routeSourceAccess === "login-required"` 時，在「查看原始路線」旁顯示「來源平台可能要求登入」。

頁首統計格式：

```js
`${stats.total} 件公開作品 · ${stats.trackReady} 件站內地圖 · ${stats.sourceDownload} 件來源端 GPX · ${stats.sourceOnly} 件待取得`
```

- [ ] **Step 4: 保持 App 只為站內軌跡掛載地圖與建立 Blob**

既有 `mountInteractiveViews` 的條件維持 `art.status === "track-ready"` 且有 usable segments；`downloadArtGpx` 對 `source-download` 仍拒絕建立本機 Blob。App 測試必須證明 19 件來源端卡片不呼叫 `MapView.mount`、不呼叫 `Gpx.createDownload`。

- [ ] **Step 5: 重跑 UI、GPX 與地圖回歸**

Run: `node --test tests/render.test.js tests/app.test.js tests/gpx.test.js tests/map.test.js`

Expected: 全部 PASS；站內 2 件可掛載與下載，來源端 19 件僅使用安全外部連結。

- [ ] **Step 6: 提交下載與篩選介面**

```bash
git add js/ui/render.js js/app.js tests/render.test.js tests/app.test.js
git commit -m "feat: 加入 GPS Art 一鍵來源下載"
```

---

### Task 5: 路線美學狀態視覺與行動版回歸

**Files:**
- Modify: `css/layout.css`
- Modify: `css/components.css`
- Modify: `tests/css.test.js`

**Interfaces:**
- Consumes: `.art-card__status--source-download`、`.art-card__external-note`、五個 `.art-catalog__filters .button`。
- Produces: 不依賴顏色的來源端狀態、44px 觸控按鈕、390px 無水平溢位與既有 track/source 卡片一致高度。

- [ ] **Step 1: 寫入新狀態與行動版 CSS 失敗測試**

```js
test("來源端下載具有文字狀態與行動安全版面", () => {
  assert.match(componentsCss, /\.art-card__status--source-download/);
  assert.match(componentsCss, /\.art-card__external-note/);
  assert.match(componentsCss, /\.art-catalog__filters \.button[\s\S]*min-height:\s*2\.75rem/);
  assert.match(componentsCss, /@media\s*\(max-width:\s*40rem\)[\s\S]*\.art-catalog__filters/);
});
```

- [ ] **Step 2: 執行 CSS 測試並確認 selector 尚不存在**

Run: `node --test tests/css.test.js`

Expected: FAIL，缺少 `.art-card__status--source-download` 或外部下載提示。

- [ ] **Step 3: 套用來源端卡片樣式**

沿用紙張卡與現有 `art-card__source-mark`，以文字「來源端 GPX」和外連符號區分，不畫假地圖；狀態同時使用邊框、圖形與文字。五個篩選可換行，每個控制至少 44px；外部說明允許長 URL 斷行；390px 卡片維持單欄與 16rem source mark。不得改動 `.route-map` 的正式路線高度。

- [ ] **Step 4: 重跑 CSS／Render 與完整 verify**

Run: `node --test tests/css.test.js tests/render.test.js`

Expected: 全部 PASS。

Run: `npm run verify`

Expected: 全部測試 PASS；23 bundles／68 routes。

- [ ] **Step 5: 提交路線美學狀態視覺**

```bash
git add css/layout.css css/components.css tests/css.test.js
git commit -m "style: 完成 GPS Art 下載狀態視覺"
```

---

### Task 6: 來源矩陣、文件、瀏覽器驗證與最終審查

**Files:**
- Modify: `docs/route-research/taiwan-gps-art.md`
- Modify: `README.md`
- Modify: `docs/PLAN.md`
- Modify: `docs/TEST-PLAN.md`
- Modify: `docs/VERIFICATION.md`
- Modify only if verification finds a defect: the exact source/test file responsible for that defect.

**Interfaces:**
- Consumes: 41 件 catalog、19 筆來源摘要、12 個登入式原始路線連結、完整測試與瀏覽器證據。
- Produces: 逐件來源／下載／查核矩陣、目前數量、權利界線、已知限制與最終可發布 HEAD。

- [ ] **Step 1: 更新 41 件來源研究矩陣與產品文件**

研究表逐件列出 ID、作品名、圖形、活動、地區、狀態、作者／平台、作品頁、原始路線頁、GPX 下載端點、是否需登入、查核日、格式、SHA-256、segments、points、bounds。`source-download` 明示本站只保存摘要並連到來源平台；`source-only` 明示缺少匿名公開軌跡；不得複製 ShapeMiles 路線座標、縮圖或 GPX。

README、PLAN、TEST-PLAN 與 VERIFICATION 使用本輪實際數量；若 19 件全部成功，現況統一寫成 41 件、2 track-ready、19 source-download、20 source-only。任何失敗都使用實際數字並列出原因，不能沿用目標數字。

- [ ] **Step 2: 執行完整自動驗證與安全掃描**

Run: `npm run verify`

Expected: exit code 0；全部 Node tests PASS；published validator 23 bundles／68 routes。

Run: `git diff --check`

Expected: 無輸出、exit code 0。

Run: `rg -n "<trkpt|<coordinates|cookie|authorization:\s*bearer|BEGIN (RSA|OPENSSH|EC|PRIVATE) KEY|api[_-]?(key|secret)|client[_-]?secret|\.env" js/data/route-art-downloads.js scripts docs/route-research README.md`

Expected: `route-art-downloads.js` 無座標與 GPX XML；程式與文件無憑證值。一般安全說明若匹配，必須逐行確認並在 VERIFICATION 記錄，不能刪除證據來假裝零匹配。

- [ ] **Step 3: 使用真瀏覽器驗證本機靜態站**

Run: `python -m http.server 8000`

在 `http://localhost:8000/#/route-art` 驗證：

- 桌機與 390×844 均顯示實際作品總數，無水平溢位。
- 全部、自行車、跑步／步行、可下載 GPX、站內地圖五種篩選數量正確。
- 站內 GPX 按鈕建立本站檔案；來源端按鈕由原平台回傳 GPX；source-only 無下載按鈕。
- `source-download` 不顯示 Leaflet／SVG 假軌跡。
- Strava／Garmin 原始路線顯示可能需要登入，不使用現有登入狀態抓取 GPX。
- 四個主題、鍵盤焦點、44px 觸控與空篩選清除操作正常。
- 回歸 `#/bike-parts`、`#/home`、`#/routes`、北高、雙塔與 `#/editor`，主控台無阻斷錯誤。

- [ ] **Step 4: 使用 `superpowers:requesting-code-review` 審查完整變更**

審查重點：來源權利界線、三狀態互斥、外部網址 allowlist、解析器大小／格式／座標閘門、產物不含幾何、站內 map/GPX 同源、41 件與 68／23 隔離、百科無回退、外部連結安全。Critical／Important 問題先依 `superpowers:receiving-code-review` 與 TDD 修正，再重跑 Step 2、Step 3。

- [ ] **Step 5: 提交文件與審查修正**

```bash
git add docs/route-research/taiwan-gps-art.md README.md docs/PLAN.md docs/TEST-PLAN.md docs/VERIFICATION.md
git commit -m "docs: 完成 GPS Art 下載來源與驗證"
```

- [ ] **Step 6: 依 `superpowers:verification-before-completion` 在乾淨 HEAD 重跑**

Run: `npm run verify && git diff --check && git status --short`

Expected: verify exit code 0、diff check 無輸出、工作樹乾淨。

- [ ] **Step 7: 顯示推送目標並停止等待授權**

Run: `git remote get-url origin && git rev-parse --abbrev-ref HEAD && git log -1 --oneline`

Expected: remote `https://github.com/andychung0214/crown-ride-atlas.git`、branch `main`、commit 為本輪最後驗證提交。先把 remote、branch、commit 顯示給使用者並明確詢問 push 授權；未取得當次授權前不得執行 `git push`。

- [ ] **Step 8: 取得授權後推送並驗證 GitHub Pages**

Run: `git push origin main`

接著以 `gh run list` 找到由該 commit 觸發的 Pages workflow，等待 `conclusion=success`；檢查 `https://andychung0214.github.io/crown-ride-atlas/` HTTP 200，並在公開 `#/bike-parts` 與 `#/route-art` 重做關鍵驗收。只有 workflow 與公開頁都通過，才更新部署證據並宣稱完成。
