# CROWN RIDE ATLAS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建立可直接開啟 `index.html`、亦可部署至靜態網站託管環境的台灣公路車路線百科與本機編輯工具。

**Architecture:** 使用傳統 `<script defer>` 與 `window.CrownRideAtlas` 命名空間，確保 `file://` 可執行；核心邏輯同時暴露 CommonJS 介面，以 Node 內建測試執行器驗證。路線資料以內建資料加上 `localStorage` 覆寫層合併，Leaflet 不可用時以 SVG 地圖降級。

**Tech Stack:** HTML5、CSS、Vanilla JavaScript、Leaflet（CDN，可降級）、Web Storage、Canvas、Node.js 內建測試執行器。

## Global Constraints

- 不使用 React、Angular、Vue、TypeScript、後端服務、大型遊戲引擎或必要建構流程。
- 直接開啟 `index.html` 時，核心導覽、篩選、主題、資料編輯與 SVG 路線圖必須可用。
- 靜態伺服器且網路可用時，優先顯示 Leaflet 與 OpenStreetMap 圖磚。
- 中文內容遵守專案 `AGENTS.md` 名詞翻譯規範。
- 不讀取、不輸出、不提交或推送憑證、Token、`.env` 或私人金鑰。
- 使用者提供的 Unsplash 憑證不得出現在任何專案檔案、測試輸出或 Git 紀錄。
- 所有提交說明使用 Conventional Commits 格式，描述採 zh-TW。
- Git 推送前必須顯示 remote、branch 與 commit。

---

## 需求與範圍

### 首版包含

- 60 條地區路線、22 個台灣縣市／區域。
- 8 條經典挑戰與 6 組路線美學。
- 首頁、路線索引、地區頁、路線詳情、經典挑戰、路線美學、本機編輯器。
- 黃衫、衝刺綠、登山圓點與白衫四套主題。
- 搜尋、地區／難度篩選、排序、收藏。
- Leaflet／SVG 路線圖、海拔剖面與 GPX 下載。
- 本機新增、編輯、刪除、圖片壓縮、GPX 上傳、JSON 備份與匯入。
- 自動測試、瀏覽器驗證、無障礙與響應式檢查。

### 首版不包含

- 會員、登入、多人同步、雲端資料庫與後端 API。
- 即時導航、定位追蹤、即時路況或天氣。
- 第三方運動平台帳號整合。

---

## 檔案結構

```text
crown-ride-atlas/
├─ index.html                    # 應用程式入口與語意頁面骨架
├─ package.json                  # 僅定義 Node 測試指令
├─ css/
│  ├─ tokens.css                 # 四主題色、字級、間距與動態偏好
│  ├─ base.css                   # Reset、排版、按鈕、表單、焦點
│  ├─ layout.css                 # 導覽、頁面、網格與響應式
│  └─ components.css             # 路線卡、地圖、對話框、通知
├─ js/
│  ├─ data/routes.js             # 60 路線、8 挑戰、6 路線美學
│  ├─ core/filter.js             # 搜尋、篩選與排序純函式
│  ├─ core/store.js              # 本機資料合併、備份與匯入
│  ├─ core/theme.js              # 主題驗證與持久化
│  ├─ core/router.js             # Hash Router
│  ├─ core/gpx.js                # GPX 解析、驗證與輸出
│  ├─ core/geo.js                # 距離、範圍與 SVG 座標正規化
│  ├─ core/image.js              # Canvas 圖片壓縮
│  ├─ ui/render.js               # 語意 DOM 渲染
│  ├─ ui/map.js                  # Leaflet 與 SVG 降級
│  ├─ ui/editor.js               # 本機編輯器
│  └─ app.js                     # 啟動與跨模組協調
├─ assets/
│  ├─ images/                    # 原創公路車情境圖
│  └─ icons/                     # SVG 圖示與 favicon
├─ tests/
│  ├─ filter.test.js
│  ├─ store.test.js
│  ├─ theme.test.js
│  ├─ router.test.js
│  ├─ gpx.test.js
│  ├─ geo.test.js
│  └─ data.test.js
├─ docs/
│  ├─ PLAN.md
│  ├─ ART-DIRECTION.md
│  ├─ TEST-PLAN.md
│  └─ superpowers/specs/2026-07-26-crown-ride-atlas-design.md
├─ README.md
├─ CONTRIBUTING.md
├─ LICENSE
└─ .gitignore
```

---

### Task 1: 建立測試骨架、頁面入口與設計 Token

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `css/tokens.css`
- Create: `css/base.css`
- Create: `css/layout.css`
- Create: `css/components.css`
- Test: `tests/theme.test.js`
- Create: `js/core/theme.js`

**Interfaces:**
- Produces: `Theme.isTheme(value) -> boolean`
- Produces: `Theme.resolveTheme(value) -> "yellow"|"green"|"polka"|"white"`
- Produces: `Theme.applyTheme(name, documentElement, storage) -> string`

- [ ] **Step 1: 寫入失敗的主題測試**

```js
const test = require("node:test");
const assert = require("node:assert/strict");
const Theme = require("../js/core/theme.js");

test("未知主題回退為黃衫", () => {
  assert.equal(Theme.resolveTheme("unknown"), "yellow");
});

test("套用主題會更新 data-theme 與本機儲存", () => {
  const root = { dataset: {} };
  const storage = { setItem(key, value) { this[key] = value; } };
  assert.equal(Theme.applyTheme("green", root, storage), "green");
  assert.equal(root.dataset.theme, "green");
  assert.equal(storage["crownRideAtlas.theme"], "green");
});
```

- [ ] **Step 2: 執行測試並確認因模組不存在而失敗**

Run: `node --test tests/theme.test.js`

Expected: FAIL，錯誤包含 `Cannot find module '../js/core/theme.js'`。

- [ ] **Step 3: 建立最小主題模組與四主題 Token**

```js
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { Theme: api });
})(typeof window !== "undefined" ? window : globalThis, function () {
  const themes = ["yellow", "green", "polka", "white"];
  const resolveTheme = value => themes.includes(value) ? value : "yellow";
  function applyTheme(value, documentElement, storage) {
    const theme = resolveTheme(value);
    documentElement.dataset.theme = theme;
    storage.setItem("crownRideAtlas.theme", theme);
    return theme;
  }
  return { themes, isTheme: value => themes.includes(value), resolveTheme, applyTheme };
});
```

`tokens.css` 定義 `--color-accent`、`--color-ink`、`--color-paper`、`--color-muted`、`--font-display`、`--font-body`、間距與四個 `[data-theme]` 覆寫。`index.html` 依檔案結構順序載入 CSS 與 `<script defer>`。

- [ ] **Step 4: 執行測試與 HTML 靜態檢查**

Run: `node --test tests/theme.test.js`

Expected: PASS 2。

Run: `node -e "const fs=require('fs');const s=fs.readFileSync('index.html','utf8');if(!s.includes('lang=\"zh-Hant\"')||!s.includes('id=\"app\"'))process.exit(1)"`

Expected: exit 0。

- [ ] **Step 5: 提交基礎骨架**

```bash
git add package.json index.html css js/core/theme.js tests/theme.test.js
git commit -m "feat: 建立狂輪誌頁面與主題骨架"
```

---

### Task 2: 建立 60 條路線與內容完整性測試

**Files:**
- Create: `js/data/routes.js`
- Test: `tests/data.test.js`

**Interfaces:**
- Produces: `Data.regions: Region[]`
- Produces: `Data.routes: Route[]`
- Produces: `Data.challenges: Challenge[]`
- Produces: `Data.routeArt: RouteArt[]`
- `Route.coordinates` uses `{ lat: number, lng: number, ele: number }[]`

- [ ] **Step 1: 寫入資料完整性失敗測試**

```js
const test = require("node:test");
const assert = require("node:assert/strict");
const Data = require("../js/data/routes.js");

test("首版包含 22 個地區與至少 60 條路線", () => {
  assert.equal(Data.regions.length, 22);
  assert.ok(Data.routes.length >= 60);
});

test("每條路線符合最小資料契約", () => {
  for (const route of Data.routes) {
    assert.match(route.id, /^[a-z0-9-]+$/);
    assert.ok(route.name && route.regionId && route.thumbnail);
    assert.ok(route.distanceKm > 0 && route.elevationGainM >= 0);
    assert.ok(Number.isInteger(route.difficulty) && route.difficulty >= 1 && route.difficulty <= 5);
    assert.ok(route.coordinates.length >= 2);
    route.coordinates.forEach(point => {
      assert.ok(point.lat >= -90 && point.lat <= 90);
      assert.ok(point.lng >= -180 && point.lng <= 180);
    });
  }
});

test("識別碼與 slug 不重複", () => {
  assert.equal(new Set(Data.routes.map(route => route.id)).size, Data.routes.length);
  assert.equal(new Set(Data.routes.map(route => route.slug)).size, Data.routes.length);
});
```

- [ ] **Step 2: 執行測試並確認資料模組不存在**

Run: `node --test tests/data.test.js`

Expected: FAIL，錯誤包含 `Cannot find module '../js/data/routes.js'`。

- [ ] **Step 3: 建立地區、路線、挑戰與路線美學資料**

每條路線使用明確物件，不在執行時隨機產生。北部優先收錄陽金三峰、風櫃嘴、中社路、冷水坑、北宜、不厭亭、羅馬公路；中部包含 139、136、大雪山、日月潭與武嶺；南部與東部包含阿里山、關子嶺、旗美、壽卡、台 197、花東縱谷等代表路線。每個地區至少一條路線。

模組沿用 Task 1 的 UMD 包裝，輸出凍結的 `regions`、`routes`、`challenges` 與 `routeArt`。

- [ ] **Step 4: 執行資料測試**

Run: `node --test tests/data.test.js`

Expected: PASS 3。

- [ ] **Step 5: 提交路線資料**

```bash
git add js/data/routes.js tests/data.test.js
git commit -m "feat: 建立台灣公路車路線資料庫"
```

---

### Task 3: 實作搜尋、篩選、排序與路由解析

**Files:**
- Create: `js/core/filter.js`
- Create: `js/core/router.js`
- Test: `tests/filter.test.js`
- Test: `tests/router.test.js`

**Interfaces:**
- Produces: `Filter.apply(routes, { query, regionId, difficulty, sort }) -> Route[]`
- Produces: `Filter.normalize(text) -> string`
- Produces: `Router.parseHash(hash) -> { page, params }`
- Produces: `Router.routeHref(page, value?) -> string`

- [ ] **Step 1: 寫入失敗的篩選與路由測試**

```js
test("搜尋涵蓋名稱、地區與標籤且不分大小寫", () => {
  const routes = [
    { name: "陽金三峰", regionName: "台北市", tags: ["Climb"], difficulty: 4, distanceKm: 87 },
    { name: "北海岸", regionName: "新北市", tags: ["海線"], difficulty: 2, distanceKm: 76 }
  ];
  assert.equal(Filter.apply(routes, { query: "climb" }).length, 1);
  assert.equal(Filter.apply(routes, { query: "新北" })[0].name, "北海岸");
});

test("解析路線詳情網址", () => {
  assert.deepEqual(Router.parseHash("#/route/yangjin-3p"), {
    page: "route",
    params: { routeId: "yangjin-3p" }
  });
});
```

- [ ] **Step 2: 執行兩個測試檔並確認失敗**

Run: `node --test tests/filter.test.js tests/router.test.js`

Expected: FAIL，兩個模組皆不存在。

- [ ] **Step 3: 實作純函式**

`Filter.apply` 依序處理文字、地區、難度，再以 `featured`、`distance-asc`、`elevation-desc` 或 `name` 排序；永不修改原陣列。`Router.parseHash` 支援設計規格的全部路由，未知路由回傳 `{ page: "not-found", params: {} }`。

- [ ] **Step 4: 執行篩選與路由測試**

Run: `node --test tests/filter.test.js tests/router.test.js`

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add js/core/filter.js js/core/router.js tests/filter.test.js tests/router.test.js
git commit -m "feat: 建立路線搜尋與前端路由"
```

---

### Task 4: 實作地理計算、GPX 與 SVG 降級資料

**Files:**
- Create: `js/core/geo.js`
- Create: `js/core/gpx.js`
- Test: `tests/geo.test.js`
- Test: `tests/gpx.test.js`

**Interfaces:**
- Produces: `Geo.haversineKm(a, b) -> number`
- Produces: `Geo.totalDistanceKm(points) -> number`
- Produces: `Geo.normalizeToSvg(points, width, height, padding) -> { x, y }[]`
- Produces: `Gpx.parse(xmlText) -> { name, coordinates }`
- Produces: `Gpx.serialize(route) -> string`
- Produces: `Gpx.createDownload(route) -> { filename, text, mimeType }`

- [ ] **Step 1: 寫入失敗的地理與 GPX 測試**

```js
test("相同座標距離為零", () => {
  assert.equal(Geo.haversineKm({ lat: 25, lng: 121 }, { lat: 25, lng: 121 }), 0);
});

test("SVG 正規化保留點數且落在畫布內", () => {
  const points = Geo.normalizeToSvg(
    [{ lat: 25, lng: 121 }, { lat: 25.2, lng: 121.5 }],
    200, 100, 10
  );
  assert.equal(points.length, 2);
  points.forEach(point => {
    assert.ok(point.x >= 10 && point.x <= 190);
    assert.ok(point.y >= 10 && point.y <= 90);
  });
});

test("GPX 輸出與解析保留路線名稱和座標", () => {
  const route = { name: "測試路線", coordinates: [{ lat: 25, lng: 121, ele: 10 }, { lat: 25.1, lng: 121.2, ele: 20 }] };
  const parsed = Gpx.parse(Gpx.serialize(route));
  assert.equal(parsed.name, route.name);
  assert.equal(parsed.coordinates.length, 2);
});

test("拒絕沒有有效軌跡點的 GPX", () => {
  assert.throws(() => Gpx.parse("<gpx></gpx>"), /有效座標/);
});
```

- [ ] **Step 2: 執行測試並確認失敗**

Run: `node --test tests/geo.test.js tests/gpx.test.js`

Expected: FAIL。

- [ ] **Step 3: 實作地理與 GPX 純函式**

Node 測試環境沒有 `DOMParser`，`Gpx.parse` 需使用受限的 GPX 標籤擷取器解析 `<name>`、`<trkpt lat="" lon="">` 與 `<ele>`，並拒絕非有限座標。輸出時需 XML escape 路線名稱。

- [ ] **Step 4: 執行測試**

Run: `node --test tests/geo.test.js tests/gpx.test.js`

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add js/core/geo.js js/core/gpx.js tests/geo.test.js tests/gpx.test.js
git commit -m "feat: 建立 GPX 與地理資料處理"
```

---

### Task 5: 實作本機資料層、備份與匯入

**Files:**
- Create: `js/core/store.js`
- Test: `tests/store.test.js`

**Interfaces:**
- Consumes: `Data.routes`
- Produces: `Store.create(storage, builtInRoutes) -> StoreInstance`
- `StoreInstance.list() -> Route[]`
- `StoreInstance.save(route) -> Route`
- `StoreInstance.remove(routeId) -> void`
- `StoreInstance.reset() -> void`
- `StoreInstance.exportJson() -> string`
- `StoreInstance.previewImport(jsonText) -> { valid, invalid, conflicts }`
- `StoreInstance.importJson(jsonText) -> { imported, skipped }`

- [ ] **Step 1: 寫入失敗的合併與備份測試**

```js
test("本機覆寫取代內建路線且不修改內建陣列", () => {
  const storage = memoryStorage({
    "crownRideAtlas.v1": JSON.stringify({
      version: 1,
      overrides: [{ id: "r1", name: "更新名稱" }],
      additions: [],
      deleted: []
    })
  });
  const builtIn = [{ id: "r1", name: "原名稱", coordinates: [{lat:1,lng:1},{lat:2,lng:2}] }];
  const store = Store.create(storage, builtIn);
  assert.equal(store.list()[0].name, "更新名稱");
  assert.equal(builtIn[0].name, "原名稱");
});

test("刪除內建路線只建立刪除標記", () => {
  const storage = memoryStorage();
  const store = Store.create(storage, [{ id: "r1", name: "路線" }]);
  store.remove("r1");
  assert.equal(store.list().length, 0);
  assert.deepEqual(JSON.parse(storage.getItem("crownRideAtlas.v1")).deleted, ["r1"]);
});
```

- [ ] **Step 2: 執行測試並確認失敗**

Run: `node --test tests/store.test.js`

Expected: FAIL。

- [ ] **Step 3: 實作不可變合併、版本化備份與錯誤處理**

使用 `{ version: 1, additions, overrides, deleted }` 作為儲存格式。所有寫入先組裝完整新狀態，再呼叫一次 `setItem`；若拋出空間錯誤，不更新記憶體狀態。匯入只接受 `version: 1` 與通過路線契約的資料。

- [ ] **Step 4: 執行測試**

Run: `node --test tests/store.test.js`

Expected: PASS。

- [ ] **Step 5: 提交**

```bash
git add js/core/store.js tests/store.test.js
git commit -m "feat: 建立路線本機儲存與備份"
```

---

### Task 6: 渲染首頁、索引、詳情與地圖

**Files:**
- Create: `js/ui/render.js`
- Create: `js/ui/map.js`
- Create: `js/app.js`
- Modify: `index.html`
- Modify: `css/layout.css`
- Modify: `css/components.css`

**Interfaces:**
- Consumes: `Data`, `Filter`, `Router`, `Theme`, `Store`, `Geo`, `Gpx`
- Produces: `Render.page(state, actions) -> DocumentFragment`
- Produces: `MapView.mount(element, route) -> { destroy() }`
- Produces: `App.start() -> void`

- [ ] **Step 1: 建立 DOM 安全契約檢查**

Run before implementation:

```powershell
rg -n "innerHTML|insertAdjacentHTML|document\\.write" js
```

Expected: no matches。

- [ ] **Step 2: 實作語意 DOM 工具與頁面渲染**

建立 `el(tag, attributes, children)`，文字一律使用 `textContent`。首頁渲染主題路線與地區卡；索引渲染搜尋、篩選、排序與結果數；詳情渲染故事、數值、提醒、地圖、海拔與 GPX 按鈕；挑戰與路線美學使用相同路線卡語彙。

- [ ] **Step 3: 實作 Leaflet 與 SVG 降級**

`MapView.mount` 先檢查 `window.L` 與 `location.protocol !== "file:"`；可用時建立 Leaflet polyline 與自動縮放，不可用時以 `Geo.normalizeToSvg` 建立含 `<title>` 的 SVG。地圖旁永遠保留文字路線資料。

- [ ] **Step 4: 連接 Router、Store 與全域事件**

`App.start` 讀取主題與資料、監聽 `hashchange`、搜尋、篩選、主題按鈕、GPX 下載與收藏。找不到路線時顯示 404 區塊，不拋出未處理錯誤。

- [ ] **Step 5: 執行完整自動測試與靜態掃描**

Run: `node --test`

Expected: all PASS。

Run: `rg -n "innerHTML|insertAdjacentHTML|document\\.write" js`

Expected: no matches。

- [ ] **Step 6: 以瀏覽器完成里程碑驗證**

Run: `python -m http.server 4173`

Verify: 首頁、篩選、四主題、路線詳情、Leaflet／SVG、GPX 下載、桌機與 390px 行動版。

- [ ] **Step 7: 提交**

```bash
git add index.html css js/ui js/app.js
git commit -m "feat: 建立路線圖鑑與互動地圖"
```

---

### Task 7: 實作本機編輯器、圖片與 GPX 上傳

**Files:**
- Create: `js/core/image.js`
- Create: `js/ui/editor.js`
- Modify: `js/ui/render.js`
- Modify: `js/app.js`
- Modify: `css/components.css`
- Modify: `index.html`
- Create: `docs/TEST-PLAN.md`

**Interfaces:**
- Produces: `ImageTools.validate(file) -> void`
- Produces: `ImageTools.compress(file, { maxEdge, maxBytes }) -> Promise<string>`
- Produces: `Editor.open({ route, onSave, onDelete }) -> void`
- Consumes: `Gpx.parse`, `Geo.totalDistanceKm`, `StoreInstance`

- [ ] **Step 1: 定義表單驗證情境**

在 `docs/TEST-PLAN.md` 對應測試列出：空名稱、難度超界、座標不足、錯誤 MIME、圖片超過 10MB、GPX 超過 1MB、無軌跡點、儲存空間不足、取消刪除與匯入衝突。

- [ ] **Step 2: 實作圖片檢查與 Canvas 壓縮**

接受 `image/jpeg`、`image/png`、`image/webp`，輸入上限 10MB，輸出長邊 1,600px；由品質 0.82 開始逐步降至 0.55，直到資料 URL 推估大小不超過 400KB，否則回報可理解錯誤。

- [ ] **Step 3: 實作桌機抽屜與行動全螢幕表單**

使用 `<dialog>`、`<form method="dialog">` 與可見標籤。開啟時保存先前焦點，關閉後復原；Escape 可取消；儲存時顯示 `aria-live` 狀態。GPX 上傳後顯示點數與估算距離，再由使用者確認套用。

- [ ] **Step 4: 實作資料管理頁**

包含新增、編輯、刪除、匯出 JSON、預覽匯入、確認匯入與重設。破壞性操作必須二次確認；失敗不清除現有資料。

- [ ] **Step 5: 執行自動測試與瀏覽器情境**

Run: `node --test`

Expected: all PASS。

Browser verify: 新增路線、編輯內建路線、圖片壓縮、GPX 匯入、匯出、重整後保留、刪除、重設。

- [ ] **Step 6: 提交**

```bash
git add js/core/image.js js/ui/editor.js js/ui/render.js js/app.js css/components.css index.html docs/TEST-PLAN.md
git commit -m "feat: 建立本機路線編輯與匯入"
```

---

### Task 7A: 真實道路軌跡與海拔資料精度

**Files:**
- Modify: `scripts/generate-tracks.mjs`
- Modify: `scripts/validate-tracks.mjs`
- Modify: `tools/route-data/seeds/*.json`
- Modify: `js/data/tracks/*.js`
- Modify: `js/ui/render.js`
- Modify: `tests/track-generator.test.js`

**取樣契約：**
- 一般路段約 30–80 公尺取樣，相鄰點不得超過 80 公尺。
- 髮夾彎與局部高曲率道路可低於 30 公尺加密；這些短片段必須能追溯到幾何保真候選，不得由一般等距取樣任意產生。
- 每條路線的重採樣距離相對 BRouter 原始折線誤差不得超過 0.5%。
- 每個 BRouter 原始點到重採樣折線的最大偏差不得超過 5 公尺，避免折線跨切真實道路彎道。
- 非必要短片段比例不得超過 5%；髮夾彎必要短片段不套用此比例，但須量測並回報最差路線。

- [x] **Step 1: 先建立距離誤差、局部偏差、90° 轉彎、髮夾彎及短片段測試**
- [x] **Step 2: 以距離補償與幾何偏差雙排序建立候選，僅在兩項精度門檻均通過時停止自適應加密**
- [x] **Step 3: 重新建構北部 7 個 bundle、21 條路線，並由正式驗證器重算逐點距離、平滑海拔、坡度、坡度分級與爬坡摘要**
- [x] **Step 4: 在詳情頁揭露一般取樣範圍與髮夾彎加密原則**
- [x] **Step 5: 完成 21 條實際瀏覽器驗證、完整測試與提交**

風險取捨：道路幾何真實性優先於固定點距與檔案體積。山區連續髮夾彎可能有較高比例的 30 公尺以下必要片段；以 5 公尺幾何偏差、0.5% 距離誤差、80 公尺最大相鄰距離及 bundle 大小量測共同稽核。

---

### Task 8: 建立原創視覺資產與完整文件

**Files:**
- Create: `assets/images/*.webp`
- Create: `assets/icons/favicon.svg`
- Create: `docs/ART-DIRECTION.md`
- Modify: `docs/TEST-PLAN.md`
- Create: `README.md`
- Create: `CONTRIBUTING.md`
- Create: `LICENSE`
- Modify: `js/data/routes.js`

**Interfaces:**
- Data thumbnails consume local paths under `assets/images/`.
- README commands must match `package.json` scripts.

- [x] **Step 1: 產生並挑選原創公路車情境影像**

建立山岳、海岸、都會晨騎、林道路線、縱谷與島嶼挑戰等影像；避免可辨識品牌、賽事商標、假文字、過度 HDR 與不合理自行車幾何。輸出 WebP 並以描述性英文檔名命名。

- [x] **Step 2: 撰寫正式視覺規範**

`docs/ART-DIRECTION.md` 明確列出色票、字體回退、間距、斷點、卡片、按鈕、表單、地圖、動畫、Reduced Motion、禁止事項與圖片規則。

- [x] **Step 3: 撰寫測試計畫**

`docs/TEST-PLAN.md` 包含功能、手動、桌機／平板／手機、鍵盤、螢幕閱讀器、縮放、對比、Reduced Motion、`file://`、離線降級與敏感資訊掃描清單。

- [x] **Step 4: 撰寫 README、貢獻指南與 MIT 授權**

README 包含網站介紹、特色、操作、安裝與執行、結構、測試、靜態網站部署、已知限制、資料安全與授權。明確說明 Leaflet 圖磚需網路，以及路線資訊出發前需再次確認。

- [x] **Step 5: 檢查連結與文件命令**

Run:

```powershell
rg -n "TODO|TBD|localhost:[0-9]+/\\?key=|apiAccessKey|apiSecretKey" README.md CONTRIBUTING.md docs js index.html
```

Expected: no matches。

- [x] **Step 6: 提交**

```bash
git add assets docs README.md CONTRIBUTING.md LICENSE js/data/routes.js
git commit -m "docs: 完成狂輪誌視覺與使用文件"
```

---

### Task 9: 完整驗證、程式碼審查與 Git 收尾

**Files:**
- Modify if needed: files identified by verification or review
- Create: `artifacts/verification/*.png` only if verification evidence should remain in the repository

**Interfaces:**
- No new public interfaces.

- [x] **Step 1: 執行自動測試**

Run: `node --test`

Expected: 0 failures。

- [x] **Step 2: 執行敏感資訊與危險 DOM 掃描**

Run:

```powershell
rg -n "(apiAccessKey|apiSecretKey|client_secret|private[_-]?key|BEGIN [A-Z ]+PRIVATE KEY|innerHTML|insertAdjacentHTML)" . --glob "!.git/**" --glob "!.superpowers/**"
```

Expected: no credential matches and no unsafe DOM sink matches。

- [x] **Step 3: 執行瀏覽器與響應式驗證**

使用本機靜態伺服器開啟網站，依 `docs/TEST-PLAN.md` 驗證 1440×1000、768×1024、390×844；檢查主題、篩選、詳情、Leaflet、SVG 降級、GPX、編輯、備份、鍵盤與 Reduced Motion。保留截圖證據並目視檢查。

- [x] **Step 4: 執行程式碼審查並修正**

依規格逐項檢查功能、錯誤處理、資料契約、安全、無障礙與文件。任何修正後重新執行受影響測試與完整測試。

- [ ] **Step 5: 確認 Git 工作樹與提交紀錄**

Run:

```bash
git status --short
git log --oneline --decorate -10
git diff --check
```

Expected: 工作樹乾淨，無 whitespace 錯誤。

- [ ] **Step 6: 顯示推送資訊**

Run:

```bash
git remote -v
git branch --show-current
git log -1 --format="%H %s"
```

Expected:

```text
origin  https://github.com/andychung0214/crown-ride-atlas.git
main
第三行應為 40 字元完整提交雜湊，後接 zh-TW Conventional Commit 說明
```

- [ ] **Step 7: 推送**

只有在 Step 6 已向使用者顯示後執行：

```bash
git push -u origin main
```

Expected: `main -> main`，並建立 upstream。

---

## 里程碑

1. **M1 基礎與資料**：Task 1–2，四主題與 60 條路線通過資料測試。
2. **M2 核心邏輯**：Task 3–5，篩選、路由、GPX、地理計算與本機資料層通過測試。
3. **M3 可操作網站**：Task 6，首頁、索引、詳情、Leaflet／SVG 與 GPX 可實際操作。
4. **M4 內容管理**：Task 7，本機編輯、圖片、GPX 與備份流程通過瀏覽器驗證。
5. **M5 品質與交付**：Task 8–9，資產、文件、完整測試、審查與 Git 推送完成。

## 主要風險與緩解

- **路線資訊隨時間變動**：顯示出發前查證提醒，不宣稱即時路況。
- **`localStorage` 容量有限**：圖片壓縮、檔案上限、錯誤回復與 JSON 備份。
- **Leaflet／圖磚需要網路**：提供 SVG 路線圖與完整文字資料。
- **`file://` 限制**：使用傳統 defer scripts，避免必要 ES Modules 與 fetch。
- **60 條資料的一致性**：以資料契約測試檢查數量、唯一性、座標與數值。
- **原創圖片幾何錯誤或 AI 感**：限制畫面構圖、目視審查並以編輯誌裁切降低不自然細節。
- **使用者已公開 Unsplash 憑證**：專案完全不使用該憑證，提交前執行敏感資訊掃描；擁有者需撤銷並重發。

## 驗收條件

- [x] 可直接開啟 `index.html` 使用核心功能。
- [x] 靜態伺服器下 Leaflet 正常，失敗時 SVG 正常。
- [x] 四主題可切換並持久化。
- [x] 72 條路線可搜尋、篩選與檢視。
- [x] 每條路線可下載有效 GPX。
- [x] 本機新增、編輯、刪除、備份、匯入與重設可用。
- [x] 桌機、平板、手機與鍵盤操作通過。
- [x] `node --test` 全數通過。
- [x] 儲存庫不含憑證、Token、`.env` 或私人金鑰。
- [ ] 推送前已顯示 remote、branch 與 commit。
