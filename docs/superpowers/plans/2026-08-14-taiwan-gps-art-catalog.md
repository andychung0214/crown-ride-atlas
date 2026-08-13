# Taiwan GPS Art Catalog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 將空白的「路線美學」改為至少 22 件有公開來源的台灣 GPS Art 圖鑑，讓可取得公開軌跡的作品提供站內地圖與 GPX，其餘作品誠實顯示來源與「軌跡待取得」。

**Architecture:** GPS Art 使用獨立、唯讀的 catalog 與 tracks 模組，不寫入 `Store`、不併入一般路線，也不加入正式 track manifest。`RouteArt` 核心模組負責資料驗證、統計與純函式篩選；Render 直接渲染作品物件，App 只為 `track-ready` 項目掛載既有 MapView 與 GPX 下載。

**Tech Stack:** HTML5、CSS、Vanilla JavaScript UMD 模組、Leaflet 1.9.4、Node.js 內建 test runner、公開 GPX／Google My Maps KML、GitHub Pages。

## Global Constraints

- 只使用 HTML、CSS、Vanilla JavaScript；不得加入 React、Angular、Vue、TypeScript、後端服務或大型框架。
- 既有 `Data.routes` 必須維持精確 68 條，正式 track manifest 必須維持 23 個 bundle／68 條路線。
- GPS Art 首批至少 20 件；本計畫固定收錄下方 22 件，涵蓋 `cycling`、`running`、`walking`。
- 只讀取不需登入的 HTTPS 公開來源；不得讀取或提交 cookie、token、`.env`、私人活動或會員資料。
- 不複製或 hotlink 外站作品圖片；沒有公開幾何的項目不得出現假折線、假地圖或 GPX 按鈕。
- `track-ready` 座標必須來自公開 GPX／KML，位於台灣合理範圍且至少兩點；地圖與下載 GPX 必須共用同一份座標。
- 跑步與步行作品不得套用公路車道路政策，也不得宣稱適合公路車導航。
- 外部來源連結必須使用 `target="_blank"` 與 `rel="noopener noreferrer"`。
- 所有新增中文 UI、文件與 commit description 使用繁體中文與專案名詞規範。
- 推送前必須顯示 remote、branch、commit；推送後等待 GitHub Pages workflow 成功並以公開網址驗證。

## File Map

- Create `js/core/route-art.js`: GPS Art schema validation、統計與不變更輸入的篩選純函式。
- Create `js/data/route-art-tracks.js`: 由公開 GPX／KML 匯入並驗證後的凍結座標資料。
- Create `js/data/route-art-catalog.js`: 22 件作品的來源、活動、狀態、已知數值與可用軌跡資料。
- Create `scripts/import-route-art-tracks.mjs`: 從兩個必要 KML 與一個可選 GPX 的已核准公開 URL 重建軌跡資料並執行台灣座標閘門。
- Create `tests/route-art.test.js`: 核心篩選、統計與 schema 規則。
- Create `tests/route-art-catalog.test.js`: 22 件圖鑑、來源、軌跡、正式路線隔離與 GPX 同源驗證。
- Modify `js/data/routes.js`: 將獨立 catalog 掛到 `Data.routeArt`，保留既有 audit-only 圖形與 68 條正式路線。
- Modify `index.html`: 依賴順序載入 tracks、catalog、RouteArt 核心模組。
- Modify `js/ui/render.js`: 圖鑑統計、篩選、作品卡、來源連結與 GPX 條件渲染。
- Modify `js/app.js`: 保存圖鑑篩選狀態、掛載作品地圖與執行作品 GPX 下載。
- Modify `css/layout.css`, `css/components.css`: 圖鑑卡、狀態、篩選與 390px 觸控版面。
- Modify `tests/data.test.js`, `tests/render.test.js`, `tests/app.test.js`, `tests/css.test.js`, `tests/pages-workflow.test.js`: 既有契約與新互動回歸。
- Create `docs/route-research/taiwan-gps-art.md`: 22 件作品來源、查核日期、軌跡取得方式與限制。
- Modify `README.md`, `docs/PLAN.md`, `docs/TEST-PLAN.md`, `docs/VERIFICATION.md`: 功能、測試與部署證據同步。

---

### Task 1: GPS Art 核心契約與純函式篩選

**Files:**
- Create: `tests/route-art.test.js`
- Create: `js/core/route-art.js`
- Modify: `index.html`

**Interfaces:**
- Consumes: GPS Art item `{ id, activityType, status, sourceUrl, verifiedAt, coordinates? }`。
- Produces: `RouteArt.FILTERS`, `RouteArt.isTaiwanCoordinate(point)`, `RouteArt.validateItem(item)`, `RouteArt.filter(items, filterKey)`, `RouteArt.stats(items)`。

- [ ] **Step 1: 寫入會失敗的核心測試**

```js
test("GPS Art 篩選不修改來源陣列", () => {
  const items = [
    { id: "bike", activityType: "cycling", status: "source-only" },
    { id: "run", activityType: "running", status: "track-ready" },
    { id: "walk", activityType: "walking", status: "source-only" }
  ];
  const snapshot = structuredClone(items);
  assert.deepEqual(RouteArt.filter(items, "foot").map(item => item.id), ["run", "walk"]);
  assert.deepEqual(RouteArt.filter(items, "track-ready").map(item => item.id), ["run"]);
  assert.deepEqual(items, snapshot);
});

test("GPS Art 統計區分總數與站內軌跡", () => {
  assert.deepEqual(RouteArt.stats([
    { status: "track-ready" },
    { status: "source-only" },
    { status: "source-only" }
  ]), { total: 3, trackReady: 1, sourceOnly: 2 });
});

test("GPS Art schema 拒絕非 HTTPS 與假的 source-only 座標", () => {
  assert.throws(() => RouteArt.validateItem({
    id: "bad", name: "錯誤資料", activityType: "cycling", status: "source-only",
    sourceUrl: "http://example.com", sourcePlatform: "測試", verifiedAt: "2026-08-14",
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]
  }), /HTTPS|source-only/);
});
```

- [ ] **Step 2: 執行單檔測試並確認因模組不存在而失敗**

Run: `node --test tests/route-art.test.js`

Expected: FAIL，訊息包含 `Cannot find module '../js/core/route-art.js'`。

- [ ] **Step 3: 建立最小核心模組**

```js
const FILTERS = Object.freeze(["all", "cycling", "foot", "track-ready"]);

function isTaiwanCoordinate(point) {
  return Boolean(point)
    && Number.isFinite(point.lat) && point.lat >= 21.5 && point.lat <= 25.5
    && Number.isFinite(point.lng) && point.lng >= 119.5 && point.lng <= 122.1;
}

function filter(items, filterKey) {
  const source = Array.isArray(items) ? items : [];
  if (filterKey === "cycling") return source.filter(item => item.activityType === "cycling");
  if (filterKey === "foot") return source.filter(item => ["running", "walking"].includes(item.activityType));
  if (filterKey === "track-ready") return source.filter(item => item.status === "track-ready");
  return source.slice();
}

function stats(items) {
  const source = Array.isArray(items) ? items : [];
  const trackReady = source.filter(item => item.status === "track-ready").length;
  return { total: source.length, trackReady, sourceOnly: source.length - trackReady };
}
```

`validateItem` 必須明確檢查：slug ID、名稱、允許的活動類型、允許的狀態、HTTPS 來源、平台、`YYYY-MM-DD` 查核日期；`track-ready` 只能接受至少兩個台灣座標，`source-only` 必須沒有 `coordinates`。

- [ ] **Step 4: 讓瀏覽器在 Render 前載入核心模組並重跑測試**

在 `index.html` 的 `js/data/routes.js` 前加入：

```html
<script defer src="js/core/route-art.js"></script>
```

Run: `node --test tests/route-art.test.js && node --test tests/pages-workflow.test.js`

Expected: 兩個測試命令均 PASS。

- [ ] **Step 5: 提交核心契約**

```bash
git add js/core/route-art.js tests/route-art.test.js index.html
git commit -m "feat: 建立 GPS Art 圖鑑核心契約"
```

---

### Task 2: 22 件公開來源圖鑑與正式路線隔離

**Files:**
- Create: `tests/route-art-catalog.test.js`
- Create: `js/data/route-art-catalog.js`
- Modify: `js/data/routes.js`
- Modify: `index.html`
- Modify: `tests/data.test.js`
- Modify: `tests/track-data.test.js`

**Interfaces:**
- Consumes: Task 1 的 `RouteArt.validateItem`；Task 2 不讀取尚未建立的 tracks 模組。
- Produces: 凍結的 `RouteArtCatalog` 作品陣列；`Data.routeArt === RouteArtCatalog`。

- [ ] **Step 1: 寫入會失敗的 catalog 契約測試**

```js
test("圖鑑固定收錄 22 件有公開來源的台灣 GPS Art", () => {
  assert.equal(Catalog.length, 22);
  assert.equal(new Set(Catalog.map(item => item.id)).size, 22);
  assert.ok(Catalog.every(item => /^https:\/\//.test(item.sourceUrl)));
  assert.deepEqual(new Set(Catalog.map(item => item.activityType)),
    new Set(["cycling", "running", "walking"]));
});

test("GPS Art 不污染正式路線與 track manifest", () => {
  assert.equal(Data.routes.length, 68);
  assert.equal(Data.routes.some(route => route.category === "路線美學"), false);
  assert.equal(Object.keys(TrackManifest).length, 23);
  assert.equal(Object.hasOwn(TrackManifest, "gps-art-xinzhuang-tiger"), false);
});

test("沒有公開軌跡的作品不帶座標或虛構零值", () => {
  for (const item of Catalog.filter(item => item.status === "source-only")) {
    assert.equal(Object.hasOwn(item, "coordinates"), false);
    if (Object.hasOwn(item, "distanceKm")) assert.ok(item.distanceKm > 0);
    if (Object.hasOwn(item, "elevationGainM")) assert.ok(item.elevationGainM > 0);
  }
});
```

- [ ] **Step 2: 執行測試並確認 catalog 尚不存在**

Run: `node --test tests/route-art-catalog.test.js tests/data.test.js tests/track-data.test.js`

Expected: FAIL，主因是 `route-art-catalog.js` 不存在或 `Data.routeArt.length` 仍為 0。

- [ ] **Step 3: 依下表建立 22 件資料，不加入推測值**

| ID | 名稱 | 活動 | 地區 | 狀態 | 已知數值 | 來源平台 |
|---|---|---|---|---|---|---|
| `gps-art-north-taoyuan-raptor` | 北桃迅猛龍 | cycling | 桃園市／新北市 | source-only | 101 km、爬升 1,254 m | Mobile01 |
| `gps-art-fenggui-rabbit` | 風櫃兔 | cycling | 台北市 | source-only | 45 km、爬升 1,420 m | Mobile01 |
| `gps-art-taoyuan-red-bull` | 桃園紅牛 RED BULL | cycling | 桃園市 | source-only | 45 km | Mobile01 |
| `gps-art-yilan-cherry-duck` | 宜蘭櫻桃鴨 | cycling | 宜蘭縣 | source-only | 不填 | Mobile01 |
| `gps-art-tianmu-whale` | 台北天母鯨魚 | cycling | 台北市 | source-only | 不填 | Mobile01 |
| `gps-art-qingpu-cat` | 桃園青埔小貓 | cycling | 桃園市 | source-only | 不填 | Mobile01 |
| `gps-art-tainan-lion` | 台南林老獅卡好 | cycling | 台南市 | source-only | 不填 | Mobile01 |
| `gps-art-youth-park-shark` | 青年公園有鯊魚 | cycling | 台北市 | source-only | 不填 | Mobile01 |
| `gps-art-dadaocheng-lady` | 大稻埕碼頭姑娘 | cycling | 台北市 | source-only | 不填 | Mobile01 |
| `gps-art-daan-wolf` | 大安森林大野狼 | cycling | 台北市 | source-only | 不填 | Mobile01 |
| `gps-art-douliu-turtle` | 雲林斗六綠蠵龜 | cycling | 雲林縣 | source-only | 不填 | Mobile01 |
| `gps-art-taoyuan-horse` | 桃園藝文小馬 | cycling | 桃園市 | source-only | 不填 | Mobile01 |
| `gps-art-pig-year` | 豬年騎小豬 | cycling | 不填 | source-only | 不填 | Mobile01 |
| `gps-art-valentine-love` | 情人節 LOVE | cycling | 不填 | source-only | 不填 | Mobile01 |
| `gps-art-taoyuan-dazhu-morning` | 桃園大竹早安 | cycling | 桃園市 | source-only | 不填 | Mobile01 |
| `gps-art-zhongli-elephant` | 中壢小象 | cycling | 桃園市 | source-only | 不填 | Mobile01 |
| `gps-art-yongan-sheep` | 桃園永安漁港喜羊羊 | cycling | 桃園市 | source-only | 不填 | Mobile01 |
| `gps-art-xinzhuang-tiger` | 新莊足跡＿壬寅臥虎 | running | 新北市 | source-only（Task 3 公開 GPX 可下載時升級） | 19 km、爬升 3 m | 運動筆記 |
| `gps-art-heigo-elephant` | Heigo Chang 大象作品示例 | running | 不填 | source-only | 不填 | 運動筆記 |
| `gps-art-taipei-cherry-blossom` | 台北櫻花 16K | walking | 台北市 | source-only（Task 3 升級為 track-ready） | 16 km | GPS ART Japan |
| `gps-art-taipei-circle-walk` | 台北圓環 40K | walking | 台北市 | source-only（Task 3 升級為 track-ready） | 40 km | GPS ART Japan |
| `gps-art-yangmingshan-buddha-hand` | 陽明山佛手 | cycling | 台北市／新北市 | source-only | 135 km、爬升 3,000 m 以上 | Reddit r/Strava |

17 件 Mobile01 項目的 `sourceUrl` 固定為 `https://www.mobile01.com/topicdetail.php?f=377&t=5800991`；其他五件使用核准規格第 2.2 節的個別 URL。每件填入可辨識 `shapeLabel`、繁體中文 `summary`、`sourcePlatform`、來源有明示才填 `author`，並固定 `verifiedAt: "2026-08-14"`。Task 2 尚未匯入軌跡，因此三件候選先以 `source-only` 通過 schema，Task 3 才依實際下載結果升級。精確數值才使用 `distanceKm`／`elevationGainM`；「3,000 m 以上」使用 `elevationGainLabel`，不得把下限冒充精確值。

`route-art-catalog.js` 在 Node 使用 `require("../core/route-art.js")`，瀏覽器使用 `root.CrownRideAtlas.RouteArt`；建立每件物件時呼叫 `validateItem`，完成後遞迴凍結陣列與物件。

- [ ] **Step 4: 將 catalog 注入 Data，但保留舊圖形稽核資料為 audit-only**

將 `routes.js` UMD factory 改為接收 catalog：

```js
const RouteArtCatalog = typeof module === "object" && module.exports
  ? require("./route-art-catalog.js")
  : root.CrownRideAtlas.RouteArtCatalog;
const api = factory(RouteArtCatalog);
```

最終輸出：

```js
return deepFreeze({
  regions,
  routes,
  challenges,
  routeArt: Array.isArray(RouteArtCatalog) ? RouteArtCatalog : []
});
```

刪除舊 `routeArt = artShapes.filter(...)` 公開映射，但保留 `artShapes`、`artMatchAudit` 與 audit-only tracks，以維持不相符圖形的稽核測試。

- [ ] **Step 5: 修正既有測試的契約文字並重跑資料測試**

`tests/data.test.js` 必須改驗證「22 件獨立圖鑑都不需要對應 `Data.routes`」，同時保留 `route-art-little-taiwan` 未公開；`tests/track-data.test.js` 必須繼續要求正式路線美學數為 0，但 `Data.routeArt.length === 22`。

Run: `node --test tests/route-art-catalog.test.js tests/data.test.js tests/track-data.test.js tests/track-registry.test.js tests/route-art-shape.test.js`

Expected: 全部 PASS；正式路線仍是 68，舊「環小台灣」只存在 audit-only 檔案。

- [ ] **Step 6: 提交獨立 catalog**

```bash
git add js/data/route-art-catalog.js js/data/routes.js index.html tests/route-art-catalog.test.js tests/data.test.js tests/track-data.test.js
git commit -m "feat: 收錄台灣 GPS Art 公開來源圖鑑"
```

---

### Task 3: 公開 GPX／KML 軌跡匯入與同源驗證

**Files:**
- Create: `scripts/import-route-art-tracks.mjs`
- Create: `js/data/route-art-tracks.js`
- Modify: `js/data/route-art-catalog.js`
- Modify: `index.html`
- Modify: `tests/route-art-catalog.test.js`
- Modify: `tests/gpx.test.js`

**Interfaces:**
- Consumes: 兩個必要公開 KML 與一個可選公開 GPX URL，分別解析 GPX `<trkpt>` 與 KML `<coordinates>`。
- Produces: `RouteArtTracks[id] = { routeId, sourceFormat, sourceUrl, coordinates }`；catalog 中實際下載成功的 `track-ready` 項目引用相同凍結座標陣列。

- [ ] **Step 1: 先加入軌跡閘門與 GPX 同源失敗測試**

```js
test("track-ready 作品都有公開軌跡且座標位於台灣", () => {
  const ready = Catalog.filter(item => item.status === "track-ready");
  assert.ok(ready.length >= 2);
  for (const item of ready) {
    assert.ok(item.coordinates.length >= 2);
    assert.ok(item.coordinates.every(RouteArt.isTaiwanCoordinate));
    assert.strictEqual(item.coordinates, Tracks[item.id].coordinates);
  }
});

test("作品 GPX 與地圖共用同一份座標", () => {
  const art = Catalog.find(item => item.id === "gps-art-taipei-cherry-blossom");
  const download = Gpx.createDownload(art, { coordinates: art.coordinates });
  const parsed = Gpx.parse(download.text);
  assert.deepEqual(parsed.coordinates, art.coordinates.map(point => ({
    lat: point.lat, lng: point.lng, ele: Number.isFinite(point.ele) ? point.ele : 0
  })));
});
```

- [ ] **Step 2: 執行測試並確認兩件必要 KML 作品尚無座標而失敗**

Run: `node --test tests/route-art-catalog.test.js tests/gpx.test.js`

Expected: FAIL，訊息指出 `RouteArtTracks` 或必要 KML 作品的 `coordinates` 不存在。

- [ ] **Step 3: 建立只接受核准 URL 的匯入腳本**

```js
const SOURCES = Object.freeze([
  {
    id: "gps-art-xinzhuang-tiger",
    format: "gpx",
    required: false,
    url: "https://cdnrunningfiles.biji.co/running_a2be3611d8381712167a98e1075fa017.gpx"
  },
  {
    id: "gps-art-taipei-cherry-blossom",
    format: "kml",
    required: true,
    url: "https://www.google.com/maps/d/kml?mid=1XFfh9ZGnEVTth4D4cyZ3oQuy3fLymWU&forcekml=1"
  },
  {
    id: "gps-art-taipei-circle-walk",
    format: "kml",
    required: true,
    url: "https://www.google.com/maps/d/kml?mid=1thheW0QAsTO65i6iOZ90-yZWA4M7Pqej&forcekml=1"
  }
]);
```

腳本必須在產檔前檢查 HTTP 2xx、至少兩點、所有點有限且落在 `21.5–25.5 N / 119.5–122.1 E`。兩個 `required: true` KML 任一失敗即以非零狀態結束且不改寫產物；可選 GPX 若因公開 CDN TLS 或 HTTP 失敗，只記錄可理解警告並省略該軌跡，臥虎保持 `source-only`，不得停用 TLS 驗證或人工描圖。KML 若包含多個 `<LineString>`，依文件順序串接，但每段尾點到下一段首點必須小於 500 m，否則匯入失敗；不解析 `<Point>` 地標。

- [ ] **Step 4: 執行匯入並檢查產物未含憑證或遠端圖片**

Run: `node scripts/import-route-art-tracks.mjs`

Expected: 至少輸出台北櫻花與台北圓環的作品 ID、各自點數與 SHA-256，建立 `js/data/route-art-tracks.js`；臥虎若下載成功才一併輸出，不輸出 cookie、authorization header 或任何圖片 URL。

Run: `rg -n "token|cookie|authorization|client_secret|\.env|<img|https://.*\.(jpg|png|webp)" js/data/route-art-tracks.js`

Expected: 無匹配、exit code 1。

- [ ] **Step 5: 讓 catalog 僅從 tracks 模組取得座標**

在瀏覽器依序載入：

```html
<script defer src="js/core/route-art.js"></script>
<script defer src="js/data/route-art-tracks.js"></script>
<script defer src="js/data/route-art-catalog.js"></script>
<script defer src="js/data/routes.js"></script>
```

catalog factory 在 Node 使用 `require("./route-art-tracks.js")`，在瀏覽器使用 `root.CrownRideAtlas.RouteArtTracks`。台北櫻花與台北圓環必須使用 `coordinates: RouteArtTracks[id].coordinates` 並成為 `track-ready`；臥虎只在同 ID track 實際存在時升級。必要 KML 軌跡缺失時模組初始化必須拋出可辨識錯誤，不得靜默改成假資料。

- [ ] **Step 6: 重跑軌跡、GPX 與正式 manifest 回歸**

Run: `node --test tests/route-art-catalog.test.js tests/gpx.test.js tests/track-registry.test.js && npm run tracks:validate`

Expected: 全部 PASS；validator 仍回報 23 bundles／68 routes，GPS Art 不在正式 manifest。

- [ ] **Step 7: 提交可重建的公開軌跡**

```bash
git add scripts/import-route-art-tracks.mjs js/data/route-art-tracks.js js/data/route-art-catalog.js index.html tests/route-art-catalog.test.js tests/gpx.test.js
git commit -m "feat: 匯入公開 GPS Art 軌跡"
```

---

### Task 4: 圖鑑渲染、篩選、地圖與 GPX 互動

**Files:**
- Modify: `js/ui/render.js`
- Modify: `js/app.js`
- Modify: `tests/render.test.js`
- Modify: `tests/app.test.js`

**Interfaces:**
- Consumes: `state.routeArt`, `state.routeArtFilter`、`RouteArt.filter/stats`、`actions.setRouteArtFilter(filterKey)`、`actions.downloadArtGpx(art)`。
- Produces: `[data-art-map="id"]` 地圖掛載點、安全來源連結、track-ready 專屬 GPX 按鈕、source-only 文字型標記與 `aria-live` 結果摘要。

- [ ] **Step 1: 先改寫 render 測試描述新圖鑑行為**

```js
test("路線美學顯示來源卡且只有 track-ready 可下載 GPX", () => {
  const items = [
    fixtureArt({ id: "ready", status: "track-ready", coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }] }),
    fixtureArt({ id: "source", status: "source-only" })
  ];
  const page = Render.routeArtPage(fakeDocument(), { routeArt: items, routeArtFilter: "all" }, {
    setRouteArtFilter() {}, downloadArtGpx() {}
  });
  const nodes = descendants(page);
  assert.equal(nodes.filter(node => node.dataset && node.dataset.artMap).length, 1);
  assert.equal(nodes.filter(node => node.name === "button" && node.textContent === "下載 GPX").length, 1);
  assert.match(nodes.map(node => node.textContent).join(" "), /軌跡待取得/);
  const sourceLink = nodes.find(node => node.textContent === "查看原始作品");
  assert.equal(sourceLink.attributes.target, "_blank");
  assert.equal(sourceLink.attributes.rel, "noopener noreferrer");
});

test("路線美學篩選提供空結果與清除操作", () => {
  let nextFilter = null;
  const page = Render.routeArtPage(fakeDocument(), {
    routeArt: [fixtureArt({ activityType: "cycling" })], routeArtFilter: "foot"
  }, { setRouteArtFilter(value) { nextFilter = value; }, downloadArtGpx() {} });
  const clear = descendants(page).find(node => node.textContent === "顯示全部作品");
  assert.ok(clear);
  clear.handlers.click();
  assert.equal(nextFilter, "all");
});
```

- [ ] **Step 2: 新增 app 失敗測試，證明地圖只掛載 track-ready 作品**

建立 `bootRouteArtCatalog(items, onMapMount, onDownload)` 測試 helper，讓 root 只回傳 `[data-art-map]` 元素，並驗證：

```js
assert.deepEqual(mountedIds, ["gps-art-taipei-cherry-blossom"]);
actions.setRouteArtFilter("foot");
assert.equal(latestState.routeArtFilter, "foot");
actions.downloadArtGpx(trackReadyArt);
assert.equal(downloadedName, "台北櫻花 16K");
```

- [ ] **Step 3: 執行 render/app 測試並確認舊 routeId join 與 actions 缺口**

Run: `node --test tests/render.test.js tests/app.test.js`

Expected: FAIL，舊 `routeArtEntries(routeArt, allRoutes)` 會過濾掉獨立 catalog，且 `routeArtPage` 尚未接收 actions。

- [ ] **Step 4: Render 直接篩選並渲染作品物件**

將 Render UMD 增加 `RouteArt` dependency；`routeArtEntries` 改為：

```js
function routeArtEntries(routeArt, filterKey) {
  return RouteArt.filter(routeArt, filterKey);
}
```

`routeArtPage(documentRef, state, actions)` 必須渲染：總數、站內軌跡數、四個 filter button、結果 `aria-live`、作品名稱／圖形／地區／活動／來源／作者／已知距離與爬升／查核日期。track-ready 的 map 使用 `data: { artMap: art.id }`；source-only 使用 `art-card__source-mark` 顯示 `shapeLabel`，不得建立 map 節點。頁面 dispatch 必須改成 `routeArtPage(documentRef, state, actions)`。

- [ ] **Step 5: App 掛載獨立作品地圖並提供動作**

在 `required` 加入 `RouteArt`；state 加入 `routeArtFilter: "all"`。`mountInteractiveViews` 新增：

```js
rootElement.querySelectorAll("[data-art-map]").forEach(element => {
  const art = state.routeArt.find(item => item.id === element.dataset.artMap);
  if (!art || art.status !== "track-ready" || !hasUsableCoordinates(art.coordinates)) return;
  interactiveHandles.push(app.MapView.mount(element, art));
});
```

actions 新增：

```js
setRouteArtFilter(filterKey) {
  state.routeArtFilter = app.RouteArt.FILTERS.includes(filterKey) ? filterKey : "all";
  render();
  announce(`目前顯示 ${app.RouteArt.filter(state.routeArt, state.routeArtFilter).length} 件作品。`);
},
downloadArtGpx(art) {
  if (!art || art.status !== "track-ready" || !hasUsableCoordinates(art.coordinates)) {
    announce("這件作品目前沒有可下載的公開軌跡。");
    return;
  }
  const download = app.Gpx.createDownload(art, { coordinates: art.coordinates });
  createFileDownload(download.filename, download.text, download.mimeType);
  announce(`已準備下載 ${art.name} GPX。`);
}
```

- [ ] **Step 6: 重跑互動測試與舊首頁／路線詳情回歸**

Run: `node --test tests/render.test.js tests/app.test.js tests/gpx.test.js tests/map.test.js`

Expected: 全部 PASS；舊 `[data-route-map]` 仍從 `allRoutes` 掛載，新 `[data-art-map]` 只從 catalog 掛載。

- [ ] **Step 7: 提交圖鑑互動**

```bash
git add js/ui/render.js js/app.js tests/render.test.js tests/app.test.js
git commit -m "feat: 完成 GPS Art 圖鑑篩選與地圖互動"
```

---

### Task 5: 日式圖鑑版面、行動觸控與無障礙

**Files:**
- Modify: `css/layout.css`
- Modify: `css/components.css`
- Modify: `tests/css.test.js`

**Interfaces:**
- Consumes: Task 4 產生的 `.art-summary`、`.art-filter`、`.art-card__source-mark`、`.art-card__facts`、`.art-card__status`、`.art-card__actions`。
- Produces: 桌機兩欄圖鑑、行動單欄卡片、44px 觸控控制與不依賴顏色的狀態呈現。

- [ ] **Step 1: 先寫 CSS 契約測試**

```js
test("GPS Art 篩選有 44px 觸控高度且行動版改為單欄", () => {
  assert.match(componentsCss, /\.art-filter__button[\s\S]*min-height:\s*44px/);
  assert.match(layoutCss, /@media\s*\(max-width:\s*640px\)[\s\S]*\.art-grid[\s\S]*grid-template-columns:\s*1fr/);
  assert.match(layoutCss, /@media\s*\(max-width:\s*640px\)[\s\S]*\.art-card[\s\S]*grid-template-columns:\s*1fr/);
});
```

- [ ] **Step 2: 執行 CSS 測試並確認 selector 尚不存在**

Run: `node --test tests/css.test.js`

Expected: FAIL，缺少 `.art-filter__button` 與新行動規則。

- [ ] **Step 3: 套用圖鑑視覺與行動版面**

桌機保留紙張卡但讓地圖／文字標記占卡片上半或左側；source-only 標記使用大字圖形名、點線格與 `軌跡待取得` badge，不畫任何偽造線條。篩選按鈕需有 `:focus-visible`、`aria-pressed` 對應的 `.is-active`，最小高度 44px。`@media (max-width: 640px)` 將 `.art-grid`、`.art-card` 改為單欄，map／source mark 最小高度 16rem，長 URL 不得造成水平溢位。

- [ ] **Step 4: 執行 CSS 與渲染測試**

Run: `node --test tests/css.test.js tests/render.test.js`

Expected: 全部 PASS。

- [ ] **Step 5: 提交 RWD 與視覺**

```bash
git add css/layout.css css/components.css tests/css.test.js
git commit -m "style: 完成 GPS Art 圖鑑響應式版面"
```

---

### Task 6: 來源研究、文件同步與完整自動驗證

**Files:**
- Create: `docs/route-research/taiwan-gps-art.md`
- Modify: `README.md`
- Modify: `docs/PLAN.md`
- Modify: `docs/TEST-PLAN.md`
- Modify: `docs/VERIFICATION.md`
- Modify: `tests/pages-workflow.test.js`

**Interfaces:**
- Consumes: 22 件 catalog、兩個必要 KML、一個可選 GPX 與實際測試輸出。
- Produces: 可稽核來源矩陣、目前測試數、正式路線不變證據與靜態站部署檢查。

- [ ] **Step 1: 先讓靜態頁面測試要求新 script 順序**

```js
for (const source of [
  "js/data/route-art-tracks.js",
  "js/data/route-art-catalog.js",
  "js/data/routes.js",
  "js/core/route-art.js",
  "js/ui/render.js",
  "js/app.js"
]) assert.ok(indexSource.includes(`src=\"${source}\"`));

assert.ok(indexSource.indexOf("route-art-tracks.js") < indexSource.indexOf("route-art-catalog.js"));
assert.ok(indexSource.indexOf("route-art-catalog.js") < indexSource.indexOf("routes.js"));
assert.ok(indexSource.indexOf("route-art.js") < indexSource.indexOf("render.js"));
```

- [ ] **Step 2: 建立 22 件來源研究表**

`docs/route-research/taiwan-gps-art.md` 必須逐件列出：ID、作品名、圖形、活動、地區（來源未明示則寫「來源未明示」）、狀態、作者（來源有揭露才填）、原始頁、軌跡下載頁、查核日。每件實際 track-ready 作品另列下載 URL、格式、點數、SHA-256；明示本站未複製外站圖片，也未從登入後 Strava 取得任何資料。

- [ ] **Step 3: 同步產品、測試與限制文件**

README 與 PLAN 說明「22 件公開來源圖鑑、至少兩件站內軌跡、其餘來源卡」，並填入本次產物的實際 track-ready 數；TEST-PLAN 增加四種篩選、外部連結安全、source-only 無假地圖、390px 與圖磚失敗 fallback；VERIFICATION 只填本輪實際命令輸出，不沿用舊測試數或舊 commit。

- [ ] **Step 4: 執行完整驗證並記錄證據**

Run: `npm run verify`

Expected: exit code 0；所有 Node 測試 PASS；published validator 回報 23 bundles／68 routes。

Run: `git diff --check`

Expected: 無輸出、exit code 0。

Run: `rg -n "vPqMK|c7obPo|apiAccessKey|apiSecretKey|BEGIN (RSA|OPENSSH|PRIVATE) KEY|\.env" --glob '!docs/superpowers/**' .`

Expected: 版本庫不含使用者先前貼出的 Unsplash 憑證、私人金鑰或 `.env` 內容。

- [ ] **Step 5: 提交文件與驗證契約**

```bash
git add docs/route-research/taiwan-gps-art.md README.md docs/PLAN.md docs/TEST-PLAN.md docs/VERIFICATION.md tests/pages-workflow.test.js
git commit -m "docs: 完成 GPS Art 圖鑑來源與驗證紀錄"
```

---

### Task 7: 本機瀏覽器回歸、程式碼審查與 GitHub Pages 發布

**Files:**
- Modify only if verification finds an issue: the exact source/test file responsible for that issue.
- Modify: `docs/VERIFICATION.md` after local and deployed evidence exists.

**Interfaces:**
- Consumes: 完成後的靜態站、Git history 與 GitHub Actions workflow。
- Produces: 桌機／390px 實測證據、審查結論、推送 commit 與可訪問 Pages URL。

- [ ] **Step 1: 啟動靜態 HTTP 並做桌機／行動瀏覽器驗證**

Run: `python -m http.server 8000`

在 `http://localhost:8000/#/route-art` 驗證：22 張卡、全部／單車／跑步與步行／有站內軌跡四種篩選、至少兩件地圖、source-only 無地圖與 GPX、原始來源安全新分頁、390px 無水平溢位、四主題皆可讀。再回歸 `#/home`、`#/routes`、`#/route/challenge-north-south`、`#/route/challenge-twin-towers`、`#/editor`，確認無 console error。

- [ ] **Step 2: 依 requesting-code-review skill 執行最終審查**

審查重點固定為：catalog 與 68 正式路線隔離、來源資料無猜測、source-only 無座標、所有 track-ready GPX 與地圖同源、外部連結安全、行動可用、無憑證。Critical／Important issue 必須先以 TDD 修正並重跑 `npm run verify`；不得帶未解決阻斷問題推送。

- [ ] **Step 3: 依 verification-before-completion skill 重跑乾淨 HEAD**

Run: `npm run verify && git diff --check && git status --short`

Expected: verify exit code 0、diff check 無輸出、工作樹乾淨。

- [ ] **Step 4: 顯示推送目標後推送**

Run: `git remote get-url origin && git branch --show-current && git log -1 --oneline`

Expected: remote `https://github.com/andychung0214/crown-ride-atlas.git`、branch `main`、commit 為本輪最後驗證紀錄提交。將 remote、branch、commit 三項資訊先回報使用者，再執行 `git push origin main`。

- [ ] **Step 5: 等待 Pages workflow 並驗證公開站**

Run: `gh run list --repo andychung0214/crown-ride-atlas --workflow pages.yml --limit 1`

先以 `rg -n "pages|deploy" .github/workflows` 確認 Pages workflow 檔名，再以該檔名執行 `gh run list`。等待該 run `conclusion=success`，再檢查 `https://andychung0214.github.io/crown-ride-atlas/` HTTP 200，並在公開 `#/route-art` 驗證 22 件作品與實際 track-ready 統計。

- [ ] **Step 6: 更新最後部署證據並提交、再次顯示目標與推送**

將最新 commit、run URL、公開 URL、HTTP 結果與公開頁作品數寫入 `docs/VERIFICATION.md`：

```bash
git add docs/VERIFICATION.md
git commit -m "docs: 同步 GPS Art 圖鑑部署紀錄"
git remote get-url origin
git branch --show-current
git log -1 --oneline
git push origin main
```

第二次推送前仍須先顯示 remote、branch、commit；等待由文件提交觸發的 Pages workflow 成功後，才可宣稱整體完成。
