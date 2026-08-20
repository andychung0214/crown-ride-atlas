# Road Bike Parts Encyclopedia Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建立獨立「公路車百科」頁，以森林綠公路車互動 SVG、32 個零件標示與完整保養說明，並在桌機、鍵盤與行動觸控環境可用。

**Architecture:** 百科使用獨立、凍結的 `BikeParts` 資料模組；`BikeAnatomy` 提供純函式檢核、檢視狀態與可銷毀的 SVG 掛載器。既有 Router／Render／App 只增加入口、靜態文字降級內容與掛載點，互動狀態留在頁面模組內，不寫入 Store 或正式路線資料。

**Tech Stack:** HTML5、CSS Variables、Vanilla JavaScript UMD、原生 SVG、Pointer Events、Node.js `node:test`。

**Spec:** `docs/superpowers/specs/2026-08-21-bike-anatomy-and-gps-art-downloads-design.md`

## Global Constraints

- 只能使用 HTML、CSS、Vanilla JavaScript 與原生 Web API；不得加入 React、Vue、Angular、TypeScript、後端或大型框架。
- 百科首版精確收錄核准規格第 4.1 節的 32 個主要部位，每筆都要具備七類詳細說明。
- 主圖必須是專案內程式碼建立的森林綠側視公路車 SVG，不依賴第三方圖片或生成式點陣圖。
- 桌機使用導引線，手機使用編號熱點與分類清單；所有重要操作支援滑鼠、鍵盤與觸控。
- SVG／互動初始化失敗時，完整文字零件清單仍可閱讀。
- `Data.routes` 維持 68 條，`TrackManifest` 維持 23 個資料包；不得改寫路線、挑戰、地圖、編輯器與既有 GPX 契約。
- 不讀取或提交 Cookie、權杖、`.env`、API 金鑰或私人金鑰。
- 中文 UI、文件與註解遵守專案 AGENTS.md 的繁體中文名詞規範。

## File Structure

- Create `js/data/bike-parts.js`: 四個分類、32 個零件與七類說明的唯讀內容。
- Create `js/ui/bike-anatomy.js`: catalog 檢核、選取／縮放／平移 reducer 與 SVG／互動掛載器。
- Modify `js/core/router.js`: 加入 `bike-parts` 固定頁。
- Modify `js/ui/render.js`: 導覽、首頁入口、百科文字降級頁與掛載點。
- Modify `js/app.js`: 載入百科資料並掛載／銷毀 `BikeAnatomy`。
- Modify `index.html`: 依相依順序載入百科模組並更新網站描述。
- Modify `css/layout.css`: 百科桌機雙欄、平板與手機結構。
- Modify `css/components.css`: SVG、導引線、熱點、控制項、詳情與焦點樣式。
- Create `tests/bike-parts.test.js`: 32 筆內容契約、關聯與凍結測試。
- Create `tests/bike-anatomy.test.js`: reducer、SVG、鍵盤、Pointer Events 與 destroy 測試。
- Modify `tests/router.test.js`, `tests/render.test.js`, `tests/app.test.js`, `tests/css.test.js`, `tests/pages-workflow.test.js`: 整合與回歸。
- Modify `README.md`, `docs/PLAN.md`, `docs/ART-DIRECTION.md`, `docs/TEST-PLAN.md`, `docs/VERIFICATION.md`: 功能、視覺、測試與證據同步。

---

### Task 1: 32 個零件內容與唯讀資料契約

**Files:**
- Create: `js/data/bike-parts.js`
- Create: `tests/bike-parts.test.js`

**Interfaces:**
- Produces: `BikeParts = { categories: ReadonlyArray<Category>, parts: ReadonlyArray<Part>, defaultPartId: "top-tube" }`。
- Produces: `Part = { id, name, categoryId, number, hotspot, labelAnchor, purpose, materials, adjustment, maintenance, warningSigns, relatedParts, workshopAdvice }`。
- Consumes: 核准規格第 4、4.1 節的 32 個名稱與七類內容要求。

必須使用以下精確 ID、分類與主要 SVG 座標；`viewBox` 固定為 `0 0 960 520`：

```js
const PART_LAYOUT = [
  ["top-tube", "上管", "frame-fork", 1, 525, 195, 360, 72],
  ["down-tube", "下管", "frame-fork", 2, 545, 286, 795, 155],
  ["head-tube", "頭管", "frame-fork", 3, 620, 230, 805, 212],
  ["seat-tube", "車架座管", "frame-fork", 4, 453, 273, 305, 228],
  ["seat-stay", "上叉", "frame-fork", 5, 342, 268, 135, 225],
  ["chain-stay", "下叉", "frame-fork", 6, 355, 350, 135, 390],
  ["fork", "前叉", "frame-fork", 7, 670, 305, 815, 320],
  ["derailleur-hanger", "後變速器吊耳", "frame-fork", 8, 278, 376, 115, 455],
  ["drop-handlebar", "彎把", "controls-contact", 9, 680, 132, 820, 78],
  ["stem", "龍頭", "controls-contact", 10, 636, 166, 800, 118],
  ["headset", "碗組", "controls-contact", 11, 610, 190, 790, 178],
  ["bar-tape", "手把帶", "controls-contact", 12, 691, 148, 852, 148],
  ["shift-brake-lever", "變速煞車把", "controls-contact", 13, 706, 156, 874, 192],
  ["saddle", "座墊", "controls-contact", 14, 418, 145, 255, 105],
  ["seatpost", "座桿", "controls-contact", 15, 433, 173, 270, 150],
  ["pedal", "踏板", "controls-contact", 16, 497, 370, 650, 450],
  ["crank-arm", "曲柄", "drivetrain", 17, 485, 365, 640, 410],
  ["chainring", "齒盤", "drivetrain", 18, 468, 350, 610, 378],
  ["bottom-bracket", "中軸", "drivetrain", 19, 449, 338, 590, 338],
  ["front-derailleur", "前變速器", "drivetrain", 20, 435, 303, 286, 303],
  ["rear-derailleur", "後變速器", "drivetrain", 21, 279, 401, 105, 490],
  ["chain", "鏈條", "drivetrain", 22, 365, 378, 228, 430],
  ["cassette", "飛輪", "drivetrain", 23, 252, 362, 92, 358],
  ["jockey-wheel", "導輪", "drivetrain", 24, 282, 414, 128, 512],
  ["rim", "輪圈", "wheels-brakes", 25, 715, 210, 865, 260],
  ["tire", "輪胎", "wheels-brakes", 26, 245, 202, 78, 175],
  ["valve", "氣嘴", "wheels-brakes", 27, 660, 470, 805, 500],
  ["hub", "花鼓", "wheels-brakes", 28, 715, 350, 860, 365],
  ["spoke", "輻條", "wheels-brakes", 29, 752, 315, 890, 300],
  ["axle", "貫通軸／快拆", "wheels-brakes", 30, 222, 350, 72, 325],
  ["disc-rotor", "碟盤", "wheels-brakes", 31, 690, 350, 845, 405],
  ["brake-caliper", "煞車卡鉗", "wheels-brakes", 32, 655, 315, 815, 445]
];
```

- [ ] **Step 1: 寫入失敗的內容契約測試**

```js
"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const BikeParts = require("../js/data/bike-parts.js");

const requiredFields = [
  "purpose", "materials", "adjustment", "maintenance",
  "warningSigns", "workshopAdvice"
];

test("公路車百科具有四分類與 32 個唯一零件", () => {
  assert.deepEqual(BikeParts.categories.map(item => item.id), [
    "frame-fork", "controls-contact", "drivetrain", "wheels-brakes"
  ]);
  assert.equal(BikeParts.parts.length, 32);
  assert.equal(new Set(BikeParts.parts.map(item => item.id)).size, 32);
  assert.deepEqual(BikeParts.parts.map(item => item.number), Array.from({ length: 32 }, (_, index) => index + 1));
});

test("每個零件都有座標、七類內容與有效關聯", () => {
  const ids = new Set(BikeParts.parts.map(item => item.id));
  for (const part of BikeParts.parts) {
    assert.ok(Number.isFinite(part.hotspot.x) && Number.isFinite(part.hotspot.y));
    assert.ok(Number.isFinite(part.labelAnchor.x) && Number.isFinite(part.labelAnchor.y));
    for (const field of requiredFields) assert.ok(part[field].trim().length >= 12, `${part.id}.${field}`);
    assert.ok(Array.isArray(part.relatedParts) && part.relatedParts.length >= 1);
    assert.ok(part.relatedParts.every(id => ids.has(id) && id !== part.id));
  }
  assert.equal(new Set(BikeParts.parts.map(part => requiredFields.map(field => part[field]).join("|"))).size, 32);
});

test("百科資料深度凍結且預設選取上管", () => {
  assert.equal(BikeParts.defaultPartId, "top-tube");
  assert.equal(Object.isFrozen(BikeParts), true);
  assert.ok(BikeParts.parts.every(Object.isFrozen));
  assert.throws(() => { BikeParts.parts[0].name = "錯誤"; }, TypeError);
});
```

- [ ] **Step 2: 執行測試並確認資料模組尚不存在**

Run: `node --test tests/bike-parts.test.js`

Expected: FAIL，訊息包含 `Cannot find module '../js/data/bike-parts.js'`。

- [ ] **Step 3: 建立 UMD 資料模組並撰寫完整內容**

```js
"use strict";

(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { BikeParts: api });
})(typeof window !== "undefined" ? window : globalThis, function () {
  function deepFreeze(value) {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
    Object.freeze(value);
    Object.values(value).forEach(deepFreeze);
    return value;
  }

  const categories = [
    { id: "frame-fork", name: "車架與前叉" },
    { id: "controls-contact", name: "操控與接觸點" },
    { id: "drivetrain", name: "傳動系統" },
    { id: "wheels-brakes", name: "輪組與煞車" }
  ];

  function createPart(layout, content) {
    const [id, name, categoryId, number, hotspotX, hotspotY, anchorX, anchorY] = layout;
    return Object.assign({
      id, name, categoryId, number,
      hotspot: { x: hotspotX, y: hotspotY },
      labelAnchor: { x: anchorX, y: anchorY }
    }, content);
  }

  return { deepFreeze, categories, createPart };
});
```

實際模組保留上方 `createPart` 轉換邏輯，將本 Task 開頭的 32 筆 `PART_LAYOUT` 與一個同樣具有 32 個 ID 的 `CONTENT_BY_ID` 合併成 `parts`，最後回傳 `deepFreeze({ categories, parts, defaultPartId: "top-tube" })`。每筆七類內容必須針對該零件撰寫，並遵守以下事實界線：碳纖維鎖付扭力以製造商標示為準；煞車面不得沾油；輪胎壓力依系統重量、胎寬與輪圈規格調整；裂痕、煞車失效、轉向卡滯與軸承明顯間隙皆應停止騎乘；碟盤、來令片、鏈條與飛輪磨耗不得硬寫通用報廢數值，必須提示依原廠規格量測。

- [ ] **Step 4: 重跑資料契約測試**

Run: `node --test tests/bike-parts.test.js`

Expected: 3 tests PASS；32 筆內容與所有關聯均通過。

- [ ] **Step 5: 提交百科內容資料**

```bash
git add js/data/bike-parts.js tests/bike-parts.test.js
git commit -m "feat: 建立公路車零件百科資料"
```

---

### Task 2: 百科路由、導覽與靜態文字降級頁

**Files:**
- Modify: `js/core/router.js`
- Modify: `js/ui/render.js`
- Modify: `js/app.js`
- Modify: `index.html`
- Modify: `tests/router.test.js`
- Modify: `tests/render.test.js`
- Modify: `tests/app.test.js`
- Modify: `tests/pages-workflow.test.js`

**Interfaces:**
- Consumes: `app.BikeParts` 與 `state.bikeParts`。
- Produces: `#/bike-parts`、`Render.bikePartsPage(documentRef, state)`、`[data-bike-anatomy="true"]`、分類清單中的 `[data-bike-part-id]` 與詳情區 `[data-bike-part-detail]`。
- Produces: 首頁 `#/bike-parts` 入口與導覽列 `aria-current="page"`。

- [ ] **Step 1: 先新增路由、頁面與資料 script 順序失敗測試**

```js
test("解析公路車百科固定頁", () => {
  assert.deepEqual(Router.parseHash("#/bike-parts"), { page: "bike-parts", params: {} });
  assert.equal(Router.routeHref("bike-parts"), "#/bike-parts");
});

test("公路車百科顯示靜態降級清單與首頁入口", () => {
  const state = { routeInfo: { page: "bike-parts", params: {} }, bikeParts: BikeParts };
  const page = Render.bikePartsPage(fakeDocument(), state);
  const nodes = descendants(page);
  assert.equal(nodes.filter(item => item.dataset && item.dataset.bikePartId).length, 32);
  assert.match(nodes.map(item => item.textContent).join(" "), /森林綠公路車|上管|常見材質|安全警訊/);
  assert.ok(nodes.some(item => item.dataset && item.dataset.bikeAnatomy === "true"));

  const home = Render.homePage(fakeDocument(), {
    bikeParts: BikeParts,
    allRoutes: [{
      id: "home-route", name: "首頁路線", regionName: "台北市", category: "丘陵",
      summary: "摘要", thumbnail: "assets/images/city-morning.webp", distanceKm: 12,
      elevationGainM: 200, difficulty: 2, durationMinutes: 60, tags: [], featured: true
    }],
    regions: [], favorites: new Set(), completed: new Set()
  }, { toggleCompleted() {} });
  assert.ok(descendants(home).some(item => item.attributes && item.attributes.href === "#/bike-parts"));
});
```

在 `tests/pages-workflow.test.js` 驗證載入順序：

```js
assert.ok(indexSource.indexOf("js/data/bike-parts.js") < indexSource.indexOf("js/ui/render.js"));
assert.ok(indexSource.indexOf("js/ui/render.js") < indexSource.indexOf("js/app.js"));
```

- [ ] **Step 2: 執行 focused tests 並確認固定頁與渲染尚不存在**

Run: `node --test tests/router.test.js tests/render.test.js tests/pages-workflow.test.js`

Expected: FAIL，原因包含 `bike-parts` 被解析為 not-found、`Render.bikePartsPage` 不存在及缺少 script。

- [ ] **Step 3: 加入最小路由、state 與靜態頁面**

在 Router 將固定頁集合改為：

```js
const fixedPages = new Set(["home", "routes", "challenges", "route-art", "bike-parts", "editor"]);
```

在 App `required` 增加 `BikeParts`，state 增加：

```js
bikeParts: app.BikeParts
```

在 Render 增加頁名與 dispatch：

```js
if (page === "bike-parts") return "公路車百科｜狂輪誌";
if (state.routeInfo.page === "bike-parts") return bikePartsPage(documentRef, state);
```

`bikePartsPage` 必須輸出一個 SVG 增強掛載區、四個分類區、32 個實際按鈕與預設上管的完整七類文字。分類按鈕的資料屬性固定使用 `data-bike-part-id`，不以 `innerHTML` 插入任何內容。首頁在地區索引前加入百科入口卡，導覽列在「路線美學」與「我的路線」之間加入「公路車百科」。

- [ ] **Step 4: 加入 index script 並重跑整合測試**

在 `route-art-catalog.js` 後載入：

```html
<script defer src="js/data/bike-parts.js"></script>
```

Run: `node --test tests/router.test.js tests/render.test.js tests/app.test.js tests/pages-workflow.test.js`

Expected: 全部 PASS；App 缺少任一百科模組時仍由既有 fatal-error 契約明確回報。

- [ ] **Step 5: 提交百科頁面骨架**

```bash
git add js/core/router.js js/ui/render.js js/app.js index.html tests/router.test.js tests/render.test.js tests/app.test.js tests/pages-workflow.test.js
git commit -m "feat: 加入公路車百科入口與頁面"
```

---

### Task 3: 森林綠公路車 SVG、導引線與鍵盤／觸控互動

**Files:**
- Create: `js/ui/bike-anatomy.js`
- Create: `tests/bike-anatomy.test.js`
- Modify: `js/app.js`
- Modify: `index.html`
- Modify: `tests/app.test.js`
- Modify: `tests/pages-workflow.test.js`

**Interfaces:**
- Consumes: `BikeParts.parts`、`BikeParts.defaultPartId` 與 `[data-bike-anatomy]` 內的靜態分類按鈕／詳情區。
- Produces: `BikeAnatomy.validateCatalog(catalog) -> true`。
- Produces: `BikeAnatomy.reduceView(state, action, catalog) -> { selectedPartId, scale, offsetX, offsetY }`，scale 範圍 `1–3`。
- Produces: `BikeAnatomy.mount(root, { catalog, announce }) -> { destroy() }`。
- Produces: SVG `[data-bike-svg]`、熱點 `[data-bike-hotspot]`、導引線 `[data-bike-leader]` 與控制按鈕 `[data-bike-view-action]`。

- [ ] **Step 1: 先寫 reducer、SVG 與銷毀失敗測試**

```js
test("百科 reducer 限制縮放、選取有效零件並可重設", () => {
  const initial = BikeAnatomy.initialView(BikeParts);
  assert.deepEqual(initial, { selectedPartId: "top-tube", scale: 1, offsetX: 0, offsetY: 0 });
  assert.equal(BikeAnatomy.reduceView(initial, { type: "zoom", delta: 9 }, BikeParts).scale, 3);
  assert.equal(BikeAnatomy.reduceView(initial, { type: "zoom", delta: -9 }, BikeParts).scale, 1);
  assert.equal(BikeAnatomy.reduceView(initial, { type: "select", partId: "chain" }, BikeParts).selectedPartId, "chain");
  assert.deepEqual(
    BikeAnatomy.reduceView({ selectedPartId: "chain", scale: 2, offsetX: 40, offsetY: -20 }, { type: "reset" }, BikeParts),
    initial
  );
});

test("SVG 具有 32 個可鍵盤操作熱點與導引線", () => {
  const svg = BikeAnatomy.createSvg(fakeSvgDocument(), BikeParts, () => {});
  const nodes = svgDescendants(svg);
  assert.equal(nodes.filter(item => item.dataset && item.dataset.bikeHotspot).length, 32);
  assert.equal(nodes.filter(item => item.dataset && item.dataset.bikeLeader).length, 32);
  assert.ok(nodes.every(item => !item.innerHTML));
  const topTube = nodes.find(item => item.dataset && item.dataset.bikeHotspot === "top-tube");
  assert.equal(topTube.attributes.role, "button");
  assert.equal(topTube.attributes.tabindex, "0");
  assert.equal(topTube.attributes["aria-label"], "1 上管");
});

test("mount 的 destroy 會移除 Pointer Event 與按鈕監聽器", () => {
  const fixture = interactiveFixture(BikeParts);
  const handle = BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  assert.ok(fixture.listenerCount() > 0);
  handle.destroy();
  assert.equal(fixture.listenerCount(), 0);
});

test("入口頁在資料之後、Render 之前載入互動模組", () => {
  assert.ok(indexSource.indexOf("js/data/bike-parts.js") < indexSource.indexOf("js/ui/bike-anatomy.js"));
  assert.ok(indexSource.indexOf("js/ui/bike-anatomy.js") < indexSource.indexOf("js/ui/render.js"));
});
```

- [ ] **Step 2: 執行測試並確認互動模組尚不存在**

Run: `node --test tests/bike-anatomy.test.js tests/app.test.js tests/pages-workflow.test.js`

Expected: FAIL，訊息包含 `Cannot find module '../js/ui/bike-anatomy.js'` 或缺少掛載。

- [ ] **Step 3: 建立純函式狀態與 SVG 結構**

```js
const MIN_SCALE = 1;
const MAX_SCALE = 3;

function initialView(catalog) {
  validateCatalog(catalog);
  return { selectedPartId: catalog.defaultPartId, scale: 1, offsetX: 0, offsetY: 0 };
}

function reduceView(state, action, catalog) {
  if (action.type === "select") {
    return catalog.parts.some(part => part.id === action.partId)
      ? Object.assign({}, state, { selectedPartId: action.partId })
      : state;
  }
  if (action.type === "zoom") {
    const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, state.scale + Number(action.delta || 0)));
    return Object.assign({}, state, { scale });
  }
  if (action.type === "pan" && state.scale > 1) {
    return Object.assign({}, state, {
      offsetX: Math.max(-480, Math.min(480, state.offsetX + Number(action.dx || 0))),
      offsetY: Math.max(-260, Math.min(260, state.offsetY + Number(action.dy || 0)))
    });
  }
  if (action.type === "reset") return initialView(catalog);
  return state;
}
```

`createSvg` 使用 `createElementNS` 建立兩個半徑 145 的輪胎、車架三角、前叉、彎把、座墊、傳動、碟盤與卡鉗。車架中心線固定使用 `#17633f`，輪胎與金屬件使用現有墨色；每個零件熱點使用資料中的座標，並建立同 ID 導引線、編號與文字。不得用一條象徵折線代替整台車。

- [ ] **Step 4: 完成 mount、鍵盤、拖曳與雙指縮放**

`mount` 必須：

1. 驗證 catalog，建立 SVG，選取預設上管。
2. 對熱點和靜態清單按鈕綁定 click、Enter、Space。
3. 只用 `textContent` 更新七個詳情欄位與選取標題。
4. 維護 `Map<pointerId, {x, y}>`；單指移動轉成 `pan`，兩指距離比例轉成 `zoom`，兩指中點位移轉成 `pan`。
5. 放大、縮小、重設按鈕分別 dispatch `zoom +0.25`、`zoom -0.25`、`reset`。
6. 每次狀態改變更新 `transform="translate(x y) scale(s)"`、`aria-pressed`、`.is-selected` 與詳情內容。
7. `destroy()` 移除全部監聽器、清空 pointer map，不修改其他頁面節點。

在 `index.html` 的 `bike-parts.js` 後加入 `<script defer src="js/ui/bike-anatomy.js"></script>`；App `required` 增加 `BikeAnatomy`，`mountInteractiveViews` 新增：

```js
rootElement.querySelectorAll("[data-bike-anatomy]").forEach(element => {
  interactiveHandles.push(app.BikeAnatomy.mount(element, {
    catalog: state.bikeParts,
    announce
  }));
});
```

- [ ] **Step 5: 重跑互動與既有地圖回歸**

Run: `node --test tests/bike-parts.test.js tests/bike-anatomy.test.js tests/app.test.js tests/map.test.js tests/render.test.js tests/pages-workflow.test.js`

Expected: 全部 PASS；`[data-route-map]`、`[data-art-map]` 與 Editor 的既有掛載仍維持原行為。

- [ ] **Step 6: 提交互動 SVG**

```bash
git add js/ui/bike-anatomy.js js/app.js index.html tests/bike-anatomy.test.js tests/app.test.js tests/pages-workflow.test.js
git commit -m "feat: 完成公路車零件互動圖"
```

---

### Task 4: 日式百科視覺、RWD 與真瀏覽器驗證

**Files:**
- Modify: `css/layout.css`
- Modify: `css/components.css`
- Modify: `tests/css.test.js`
- Modify only if browser evidence reveals a defect: the exact百科 source or CSS file responsible for that defect.

**Interfaces:**
- Consumes: `.bike-parts-page`, `.bike-anatomy`, `.bike-anatomy__stage`, `.bike-anatomy__detail`, `.bike-part-list`, `.bike-hotspot`, `.bike-leader`。
- Produces: 桌機圖／文雙欄、平板上下排列、`max-width: 40rem` 的編號熱點模式、44px 控制項、森林綠車架與四主題可讀狀態。

- [ ] **Step 1: 使用 `frontend-design` skill 檢查視覺規格，再寫 CSS 失敗測試**

```js
test("百科控制符合 44px 且手機切換為編號熱點", () => {
  assert.match(componentsCss, /\.bike-anatomy__control[\s\S]*min-width:\s*2\.75rem/);
  assert.match(componentsCss, /\.bike-anatomy__control[\s\S]*min-height:\s*2\.75rem/);
  assert.match(componentsCss, /\.bike-hotspot:focus-visible/);
  assert.match(layoutCss, /@media\s*\(max-width:\s*40rem\)[\s\S]*\.bike-anatomy[\s\S]*grid-template-columns:\s*1fr/);
  assert.match(componentsCss, /@media\s*\(max-width:\s*40rem\)[\s\S]*\.bike-leader__label[\s\S]*display:\s*none/);
});
```

- [ ] **Step 2: 執行 CSS 測試並確認專屬 selector 尚不存在**

Run: `node --test tests/css.test.js`

Expected: FAIL，指出 `.bike-anatomy__control`、`.bike-hotspot` 或行動規則不存在。

- [ ] **Step 3: 套用專屬版面與元件樣式**

桌機 `.bike-anatomy` 使用 `minmax(0, 1.65fr) minmax(20rem, 0.75fr)`；stage 以米白紙面、細等高線與裁切框呈現，車架固定森林綠，不隨主題變成其他車色。選取狀態使用主題色外圈加墨色粗線，避免只靠顏色。`max-width: 72rem` 改上下排列；`max-width: 40rem` 隱藏文字導引標籤、保留編號熱點、控制列可換行，分類清單單欄。所有長內容加 `overflow-wrap: anywhere`，stage 使用 `touch-action: none`，頁面其他區域保持正常垂直捲動。

- [ ] **Step 4: 執行 focused 與完整自動測試**

Run: `node --test tests/css.test.js tests/render.test.js tests/bike-anatomy.test.js`

Expected: 全部 PASS。

Run: `npm run verify`

Expected: 全部 Node tests PASS；published validator 仍為 23 bundles／68 routes。

- [ ] **Step 5: 啟動本機 HTTP 並以瀏覽器驗證三種尺寸**

Run: `python -m http.server 8000`

在 `http://localhost:8000/#/bike-parts` 實測：

- 桌機 1440×900：32 個導引線／標籤可辨識，選取上管後詳情七類完整。
- 平板 768×1024：圖與詳情上下排列，沒有截斷或水平溢位。
- 手機 390×844：文字標籤隱藏、編號熱點可點，放大／縮小／重設與拖曳有效。
- 僅使用鍵盤：Tab 可到全部控制，Enter／Space 可選取，焦點清楚。
- 黃衫、衝刺綠、登山圓點、白衫：文字、導引線、選取與焦點均可辨識。
- `prefers-reduced-motion: reduce`：無非必要長轉場。
- 回歸 `#/home`、`#/routes`、`#/route-art`、`#/editor`，主控台無阻斷錯誤。

- [ ] **Step 6: 修正真瀏覽器發現的問題後重新驗證並提交**

若瀏覽器發現缺陷，先依 `superpowers:systematic-debugging` 找出根因、寫失敗測試、最小修正，再重跑 Step 4 與 Step 5。證據全綠後：

```bash
git add css/layout.css css/components.css tests/css.test.js
git commit -m "style: 完成公路車百科響應式視覺"
```

---

### Task 5: 百科文件、最終回歸與審查

**Files:**
- Modify: `README.md`
- Modify: `docs/PLAN.md`
- Modify: `docs/ART-DIRECTION.md`
- Modify: `docs/TEST-PLAN.md`
- Modify: `docs/VERIFICATION.md`

**Interfaces:**
- Consumes: 完成後的 32 筆百科、瀏覽器證據與實際測試輸出。
- Produces: 使用方式、視覺規格、測試清單、已知限制與可稽核驗證紀錄。

- [ ] **Step 1: 同步五份文件**

README 說明 `#/bike-parts`、桌機導引線、手機熱點、縮放與文字降級；PLAN 勾選百科里程碑；ART-DIRECTION 加入森林綠車架、導引線、熱點與禁止錯誤車架幾何；TEST-PLAN 加入 32 筆內容、鍵盤、Pointer Events、390px 與四主題；VERIFICATION 只記本輪實際命令與瀏覽器結果，不沿用歷史測試數。

- [ ] **Step 2: 執行文件與程式完整驗證**

Run: `npm run verify`

Expected: exit code 0；全部測試 PASS；published validator 回報 23 bundles／68 routes。

Run: `git diff --check`

Expected: 無輸出、exit code 0。

Run: `rg -n "BEGIN (RSA|OPENSSH|EC|PRIVATE) KEY|api[_-]?(key|secret)|client[_-]?secret|authorization:\s*bearer|\.env" --glob '!docs/superpowers/**' .`

Expected: 程式、設定與一般文件無憑證值或私人金鑰；若命中一般文字說明，逐行確認不是秘密後在 VERIFICATION 如實記錄。

- [ ] **Step 3: 使用 `superpowers:requesting-code-review` 完成最終審查**

審查重點：32 筆內容無重複模板、車架幾何可辨識、鍵盤／觸控可用、監聽器可銷毀、文字降級存在、專屬 CSS 不污染既有功能、無憑證。Critical／Important 問題必須先以 TDD 修正並重跑 Step 2。

- [ ] **Step 4: 提交文件與審查修正**

```bash
git add README.md docs/PLAN.md docs/ART-DIRECTION.md docs/TEST-PLAN.md docs/VERIFICATION.md
git commit -m "docs: 完成公路車百科說明與驗證"
```

- [ ] **Step 5: 在乾淨 HEAD 重跑驗證**

Run: `npm run verify && git diff --check && git status --short`

Expected: verify exit code 0、diff check 無輸出、工作樹乾淨。此時百科子系統可獨立發布，但先接續 GPS Art 下載擴充計畫，不先推送。
