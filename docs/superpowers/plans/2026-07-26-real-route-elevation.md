# 真實公路車路線與海拔坡度實作計畫

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 將現有 66 條一般路線與 6 條路線美學，共 72 條公式假軌跡，替換為經人工地標策劃、BRouter 公路車路網產生及人工審核的真實道路軌跡，並提供詳細海拔、坡度與爬坡分析。

**Architecture:** 路線卡使用輕量中繼資料；完整軌跡依 22 個地區與 1 個路線美學 bundle 分拆，透過傳統 script 延遲載入以相容 GitHub Pages 與 `file://`。開發用 Node.js 工具以人工 waypoint 呼叫 BRouter `fastbike`，再由共用分析核心計算里程、平滑坡度、爬升與爬坡分段；瀏覽器、GPX 與 SVG fallback 全部使用同一份產生結果。

**Tech Stack:** HTML、CSS、Vanilla JavaScript、Node.js 22 內建 `node:test`／`fetch`、Leaflet、BRouter GeoJSON、OpenStreetMap、SRTM、GitHub Pages。

## Global Constraints

- 全部 72 條路線都必須沿合法、可通行且適合公路車的道路；不可保留公式或幾何假軌跡。
- 路線合法性與合理安全性優先於舊有距離、爬升與預估時間。
- 不使用 React、Angular、Vue、TypeScript、後端服務或需金鑰的執行期 API。
- 網站瀏覽期間不得呼叫 BRouter、Nominatim 或其他導航 API。
- 一般路段約每 30–80 公尺保留一點，最大相鄰距離 80 公尺；髮夾彎由 RDP 幾何候選加密，可保留 30 公尺以下必要片段。每條重採樣軌跡相對原始 BRouter 折線的距離誤差須 ≤ 0.5%，原始點到重採樣折線最大偏差須 ≤ 5 公尺；坡度使用 100 公尺距離視窗。
- 主要爬坡至少 500 公尺且累積上升至少 30 公尺。
- GitHub Pages 與直接開啟 `index.html` 都必須可載入路線 bundle。
- 不得讀取、輸出、提交或推送憑證、token、`.env` 或私人金鑰。
- 每一項產品程式變更遵循 TDD：先建立會因缺少行為而失敗的測試，再寫最小實作。
- 每個資料批次必須完成人工 OpenStreetMap 檢查；不得僅因 BRouter 成功回應就標示 `approved`。
- OpenStreetMap 公開 Nominatim 不得用於自動大量地理編碼；若人工查詢單一地標，需遵守官方政策的單執行緒、快取、可識別 User-Agent 與每秒最多一次限制：https://operations.osmfoundation.org/policies/nominatim/

---

## 檔案結構

### 新增

- `js/core/track-analysis.js`：距離、海拔平滑、坡度、總爬升與爬坡分段。
- `js/core/track-registry.js`：地區 bundle 的瀏覽器／Node 共用註冊表。
- `js/core/track-loader.js`：以傳統 script 延遲載入 bundle、快取與錯誤處理。
- `js/data/track-manifest.js`：72 個 route ID 至 bundle 路徑的固定映射。
- `js/data/tracks/<region>.js`：22 個地區 bundle。
- `js/data/tracks/route-art.js`：6 條路線美學 bundle。
- `tools/route-data/seeds/<region>.json`：22 組人工 waypoint 種子。
- `tools/route-data/seeds/route-art.json`：路線美學 waypoint 種子。
- `tools/route-data/fixture/brouter-sample.geojson`：產生器測試固定輸入。
- `tools/route-data/audit.html`、`tools/route-data/audit.js`：人工地圖審核頁。
- `scripts/generate-tracks.mjs`：BRouter 呼叫、暫存、節流與原子輸出。
- `scripts/validate-tracks.mjs`：72 條資料完整性與審核閘門。
- `tests/track-analysis.test.js`
- `tests/track-registry.test.js`
- `tests/track-loader.test.js`
- `tests/track-generator.test.js`
- `tests/track-data.test.js`

### 修改

- `index.html`：加入分析、registry、manifest、loader 的 script 順序。
- `js/data/routes.js`：移除正式假座標產生器，改用 `trackRef` 與重算中繼資料。
- `js/core/store.js`：內建 `trackRef` 與本機 GPX 路線雙資料契約、v1→v2 相容轉換。
- `js/core/gpx.js`：下載時接受已載入 Track。
- `js/ui/map.js`：方向標記、地標、詳細坡度圖與互動提示。
- `js/ui/render.js`：載入、失敗、統計、爬坡列表與無障礙狀態。
- `js/ui/editor.js`：載入內建軌跡後編輯；只有上傳 GPX 時轉為本機軌跡。
- `js/app.js`：路線詳情的非同步軌跡狀態與下載閘門。
- `css/components.css`、`css/layout.css`：海拔圖、坡度圖例、提示、爬坡列表與行動版。
- `tests/data.test.js`、`tests/geo.test.js`、`tests/gpx.test.js`、`tests/map.test.js`、`tests/render.test.js`、`tests/store.test.js`、`tests/editor.test.js`
- `package.json`：資料產生、檢查與完整驗證 scripts。
- `.gitignore`：忽略 `tools/route-data/cache/` 與產生暫存目錄。
- `README.md`、`docs/TEST-PLAN.md`、`docs/VERIFICATION.md`、`LICENSE`

---

### Task 1: 距離式海拔與坡度分析核心

**Files:**
- Create: `js/core/track-analysis.js`
- Create: `tests/track-analysis.test.js`
- Modify: `js/core/geo.js`
- Modify: `tests/geo.test.js`

**Interfaces:**
- Consumes: `Geo.haversineKm(a, b)`.
- Produces: `TrackAnalysis.analyzeCoordinates(points, options)`, `TrackAnalysis.gradeBand(gradePct)`.
- `analyzeCoordinates` 回傳 `{ coordinates, summary, climbs }`，結構與設計規格一致。

- [ ] **Step 1: 建立坡度與里程的失敗測試**

```js
test("以實際累積距離計算 100 公尺持續坡度", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.0009, lng: 121, ele: 110 },
    { lat: 25.0018, lng: 121, ele: 120 }
  ]);
  assert.ok(result.summary.distanceKm > 0.19);
  assert.ok(result.coordinates[1].gradePct > 8);
  assert.ok(result.coordinates[1].gradePct < 12);
});
```

- [ ] **Step 2: 執行 `node --test tests/track-analysis.test.js`，確認因模組不存在而失敗**

- [ ] **Step 3: 實作累積 Haversine 距離、100 公尺距離視窗與有限值正規化**

- [ ] **Step 4: 加入海拔抖動測試，證明 ±1 公尺雜訊不會被累加為大量爬升**

- [ ] **Step 5: 實作距離加權平滑、總爬升、總下降、最低／最高海拔與最大持續坡度**

- [ ] **Step 6: 加入 500 公尺／30 公尺爬坡邊界測試及坡度色帶邊界測試**

```js
assert.equal(TrackAnalysis.gradeBand(-1), "descent");
assert.equal(TrackAnalysis.gradeBand(3), "moderate");
assert.equal(TrackAnalysis.gradeBand(6), "hard");
assert.equal(TrackAnalysis.gradeBand(9), "steep");
assert.equal(TrackAnalysis.gradeBand(12), "extreme");
```

- [ ] **Step 7: 實作 `detectClimbs()` 與 `gradeBand()`，執行 `npm test`**

- [ ] **Step 8: Commit**

```bash
git add js/core/geo.js js/core/track-analysis.js tests/geo.test.js tests/track-analysis.test.js
git commit -m "feat: 建立路線海拔與坡度分析"
```

---

### Task 2: 軌跡 registry、manifest 與 `file://` 延遲載入

**Files:**
- Create: `js/core/track-registry.js`
- Create: `js/core/track-loader.js`
- Create: `js/data/track-manifest.js`
- Create: `tests/track-registry.test.js`
- Create: `tests/track-loader.test.js`
- Modify: `index.html`

**Interfaces:**
- Produces: `TrackRegistry.register(bundleId, tracks)`, `TrackRegistry.get(routeId)`.
- Produces: `TrackLoader.create({ documentRef, registry, manifest, baseUrl })`.
- Loader methods: `load(routeId) => Promise<Track>`, `clear(routeId?)`.

- [ ] **Step 1: 建立 registry 資料契約失敗測試**

```js
assert.throws(
  () => registry.register("taipei", { bad: { coordinates: [] } }),
  /軌跡資料/
);
```

- [ ] **Step 2: 執行測試並確認 RED**

- [ ] **Step 3: 實作重複 bundle 防護、route ID 唯一性與不可變快照**

- [ ] **Step 4: 建立 loader 失敗測試，使用假 `documentRef` 驗證同一 bundle 只插入一次 `<script>`**

- [ ] **Step 5: 實作傳統 script 載入、Promise 共用、成功快取、404 錯誤與重試前清除**

- [ ] **Step 6: 建立 72 個 route ID 的固定 manifest；測試 manifest 鍵集合等於 `Data.routes` ID 集合**

- [ ] **Step 7: 修改 `index.html`，依序載入 `track-analysis.js`、`track-registry.js`、`track-manifest.js`、`track-loader.js`**

- [ ] **Step 8: 執行 `npm test` 與 `node --check`**

- [ ] **Step 9: Commit**

```bash
git add index.html js/core/track-registry.js js/core/track-loader.js js/data/track-manifest.js tests/track-registry.test.js tests/track-loader.test.js
git commit -m "feat: 建立路線軌跡延遲載入"
```

---

### Task 3: 路線資料契約與本機資料 v2 相容轉換

**Files:**
- Modify: `js/data/routes.js`
- Modify: `js/core/store.js`
- Modify: `js/ui/editor.js`
- Modify: `tests/data.test.js`
- Modify: `tests/store.test.js`
- Modify: `tests/editor.test.js`

**Interfaces:**
- 內建路線：必須有 `trackRef`，不要求初始 `coordinates`。
- 本機新增／GPX 覆寫路線：必須有至少 2 個有效 `coordinates`，`trackSource: "local"`。
- Store version：`2`；可讀取 version `1` 備份並轉為 version `2`。

- [ ] **Step 1: 建立失敗測試，證明有 `trackRef` 的內建路線可通過、沒有 `trackRef` 也沒有座標的路線會被拒絕**

- [ ] **Step 2: 建立 v1→v2 失敗測試，要求保留 additions、overrides、deleted 與有效 GPX 座標**

- [ ] **Step 3: 執行 `node --test tests/data.test.js tests/store.test.js`，確認 RED**

- [ ] **Step 4: 將 Store 升級為 v2，拆分 `isValidBuiltInRoute()` 與 `isValidLocalRoute()`**

- [ ] **Step 5: 將 `routes.js` 中 72 條路線改為 `trackRef: route.id`；暫時保留舊座標於測試 fixture，產品路線不再呼叫 `buildCoordinates()`**

- [ ] **Step 6: 建立 Editor 失敗測試：只改文字時保留 `trackRef` 且不複製內建座標；上傳 GPX 時移除 `trackRef` 並設為 `trackSource: "local"`**

- [ ] **Step 7: 實作 Editor 雙模式儲存與 v1 備份匯入提示**

- [ ] **Step 8: 執行 `npm test`**

- [ ] **Step 9: Commit**

```bash
git add js/data/routes.js js/core/store.js js/ui/editor.js tests/data.test.js tests/store.test.js tests/editor.test.js
git commit -m "feat: 升級路線與本機資料契約"
```

---

### Task 4: BRouter 產生器、原子輸出與資料驗證器

**Files:**
- Create: `scripts/generate-tracks.mjs`
- Create: `scripts/validate-tracks.mjs`
- Create: `tools/route-data/fixture/brouter-sample.geojson`
- Create: `tests/track-generator.test.js`
- Modify: `package.json`
- Modify: `.gitignore`

**Interfaces:**
- CLI：`node scripts/generate-tracks.mjs --route <id> --staging`.
- CLI：`node scripts/generate-tracks.mjs --regions taipei,new-taipei --staging`.
- CLI：`node scripts/generate-tracks.mjs --all --staging`.
- 檢查：`node scripts/validate-tracks.mjs --staging` 與 `--published`.

- [ ] **Step 1: 以固定 GeoJSON fixture 建立失敗測試，要求解析 `[lng, lat, ele]`、呼叫 Task 1 分析並輸出 registry bundle**

- [ ] **Step 2: 執行測試並確認 RED**

- [ ] **Step 3: 實作純函式 `parseBrouterFeature()`、`resampleTrack()`、`buildTrack()`、`serializeBundle()`；從 CLI 匯出供測試使用**

- [ ] **Step 4: 建立失敗測試：無海拔、非 LineString、跨越台灣合理邊界、相鄰點過遠及未知 route ID 必須拒絕**

- [ ] **Step 5: 實作單執行緒 BRouter 請求；固定 `profile=fastbike`、GeoJSON、可識別 User-Agent、每次請求間隔至少 1500ms、暫時錯誤最多重試 3 次**

- [ ] **Step 6: 實作 `tools/route-data/cache/` 回應快取與 `tools/route-data/.staging/` 原子輸出；正式檔案只有 `--publish` 且整批驗證通過時替換**

- [ ] **Step 7: 在 `.gitignore` 忽略 cache 與 staging，不忽略人工 seeds 或正式 bundle**

- [ ] **Step 8: 在 `package.json` 加入**

```json
{
  "tracks:generate": "node scripts/generate-tracks.mjs",
  "tracks:validate": "node scripts/validate-tracks.mjs --published",
  "verify": "node --check js/app.js && npm test && npm run tracks:validate"
}
```

- [ ] **Step 9: 執行 fixture 測試、完整測試與 `git diff --check`**

- [ ] **Step 10: Commit**

```bash
git add .gitignore package.json scripts tools/route-data/fixture tests/track-generator.test.js
git commit -m "feat: 建立真實路線資料產生工具"
```

---

### Task 5: 路線詳情非同步載入、GPX 與編輯整合

**Files:**
- Modify: `js/app.js`
- Modify: `js/core/gpx.js`
- Modify: `js/ui/render.js`
- Modify: `js/ui/editor.js`
- Modify: `tests/gpx.test.js`
- Modify: `tests/render.test.js`
- Modify: `tests/editor.test.js`

**Interfaces:**
- `state.trackState = { routeId, status: "idle"|"loading"|"ready"|"error", track, error }`.
- `actions.retryTrack(routeId)`.
- `Gpx.createDownload(route, track?)`.

- [ ] **Step 1: 建立 Render 失敗測試：`loading` 顯示 `aria-busy`、停用 GPX；`error` 顯示重試；`ready` 顯示地圖容器與 GPX**

- [ ] **Step 2: 建立 GPX 失敗測試：有 `trackRef` 但沒有已載入 Track 時拒絕下載；提供 Track 時輸出全部真實座標與海拔**

- [ ] **Step 3: 執行相關測試並確認 RED**

- [ ] **Step 4: 實作 hash 變更後的 loader 呼叫與競態保護；使用 request route ID 避免舊回應覆蓋新頁面**

- [ ] **Step 5: 將 ready Track 合併為僅供呈現的 `{ ...route, coordinates: track.coordinates, track }`**

- [ ] **Step 6: 實作失敗重試、下載閘門與載入狀態 live region**

- [ ] **Step 7: Editor 選擇內建路線時先載入 Track；未上傳新 GPX只儲存中繼資料 override**

- [ ] **Step 8: 執行 `npm test`**

- [ ] **Step 9: Commit**

```bash
git add js/app.js js/core/gpx.js js/ui/render.js js/ui/editor.js tests/gpx.test.js tests/render.test.js tests/editor.test.js
git commit -m "feat: 整合路線軌跡載入與 GPX"
```

---

### Task 6: 真實道路地圖與詳細海拔坡度介面

**Files:**
- Modify: `js/ui/map.js`
- Modify: `js/ui/render.js`
- Modify: `css/components.css`
- Modify: `css/layout.css`
- Modify: `tests/map.test.js`
- Modify: `tests/render.test.js`
- Modify: `tests/css.test.js`

**Interfaces:**
- `MapView.buildElevationModel(track, width, height, padding)`.
- `MapView.findNearestProfilePoint(track, distanceKm)`.
- `MapView.selectDirectionMarkers(coordinates, intervalKm)`.
- `MapView.mountElevation(element, route, track)`.

- [ ] **Step 1: 建立失敗測試，證明海拔圖 X 軸依 `distanceKm` 而非陣列索引**

- [ ] **Step 2: 建立坡度分色、方向箭頭取樣、起終點與 waypoint marker 測試**

- [ ] **Step 3: 執行測試並確認 RED**

- [ ] **Step 4: 實作 SVG 分段坡度線、海拔面積、公里與海拔刻度、圖例**

- [ ] **Step 5: 實作 pointer／touch 提示，顯示里程、海拔與坡度；加入 `tabindex=0` 與左右方向鍵逐點查詢**

- [ ] **Step 6: 在 Leaflet 與 SVG fallback 加入起點、終點、方向標記及人工 waypoint**

- [ ] **Step 7: 在 Render 增加最低／最高海拔、總下降、最大持續坡度、資料來源提醒與主要爬坡列表**

- [ ] **Step 8: 建立 CSS 失敗測試，要求提示、色帶及觸控目標至少 44×44px，並實作桌機／平板／手機版面**

- [ ] **Step 9: 執行 `npm test`，用本機 fixture bundle 進行 Chrome 桌機與行動 viewport 驗證**

- [ ] **Step 10: Commit**

```bash
git add js/ui/map.js js/ui/render.js css/components.css css/layout.css tests/map.test.js tests/render.test.js tests/css.test.js
git commit -m "feat: 顯示詳細海拔坡度與道路地標"
```

---

### Task 7: 北部 21 條真實路線資料

**Files:**
- Create: `tools/route-data/seeds/{keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli}.json`
- Generate: `js/data/tracks/{keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli}.js`
- Modify: `js/data/routes.js`
- Modify: `docs/TEST-PLAN.md`

**Route IDs:**
- Keelung: `keelung-harbor-coast`, `keelung-nuannuan-hills`, `keelung-waimushan-wanli`
- Taipei: `taipei-fengguizui`, `taipei-zhongsha-road`, `taipei-lengshuikeng`
- New Taipei: `new-taipei-yangjin-3p`, `new-taipei-north-coast`, `new-taipei-buyanting`
- Taoyuan: `taoyuan-roman-road`, `taoyuan-north-cross-baling`, `taoyuan-shimen-loop`
- Hsinchu City: `hsinchu-city-coast-17k`, `hsinchu-city-18-peaks`, `hsinchu-city-nanliao-baoshan`
- Hsinchu County: `hsinchu-county-five-fingers`, `hsinchu-county-yulao`, `hsinchu-county-smangus`
- Miaoli: `miaoli-xianshan`, `miaoli-jiangmayuan`, `miaoli-coast`

- [ ] **Step 1: 對每個 route ID 在 OpenStreetMap 人工確認 2 個以上命名地標；記錄 start／via／finish、方向與查核備註**

- [ ] **Step 2: 每次只產生一條 staging route；檢查 BRouter 是否走自行車可通行且適合公路車的道路**

- [ ] **Step 3: 在 `tools/route-data/audit.html` 逐條疊圖檢查；排除高速公路、樓梯、私人道路、明顯未鋪裝路徑與錯誤捷徑**

- [ ] **Step 4: 人工通過後才寫入 `reviewStatus: "approved"`、`reviewedAt` 與 reviewer note**

- [ ] **Step 5: 執行 `node scripts/validate-tracks.mjs --staging --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli`**

- [ ] **Step 6: 重新計算並更新 `routes.js` 的距離、爬升與時間；發布 7 個 bundle**

- [ ] **Step 7: 執行 `npm test`，逐一在 Chrome 打開 21 條詳情，記錄地圖與坡度圖證據**

- [ ] **Step 8: Commit**

```bash
git add tools/route-data/seeds js/data/tracks js/data/routes.js docs/TEST-PLAN.md
git commit -m "data: 建立北部真實公路車路線"
```

---

### Task 8: 中部 12 條真實路線資料

**Files:**
- Create: `tools/route-data/seeds/{taichung,changhua,nantou,yunlin}.json`
- Generate: `js/data/tracks/{taichung,changhua,nantou,yunlin}.js`
- Modify: `js/data/routes.js`
- Modify: `docs/TEST-PLAN.md`

**Route IDs:**
- Taichung: `taichung-route-136`, `taichung-daxueshan`, `taichung-xinshe`
- Changhua: `changhua-route-139`, `changhua-baguashan`, `changhua-coast`
- Nantou: `nantou-wuling-west`, `nantou-sun-moon-lake`, `nantou-shanlinxi`
- Yunlin: `yunlin-caoling`, `yunlin-huashan`, `yunlin-kouhu-coast`

- [ ] **Step 1: 為 12 個 route ID 各建立 `{ id, direction, profile: "fastbike", waypoints }`；每條至少包含具名 start／finish，山岳與環線另加足以固定道路選擇的 via**
- [ ] **Step 2: 執行 `npm run tracks:generate -- --regions taichung,changhua,nantou,yunlin --staging`，再以 `tools/route-data/audit.html?regions=taichung,changhua,nantou,yunlin` 逐條疊圖審核**
- [ ] **Step 3: 特別檢查台 136、大雪山、武嶺、杉林溪等高山道路的自行車道路權限、折返點與隧道路段**
- [ ] **Step 4: 對人工通過的種子寫入 `reviewStatus: "approved"`、`reviewedAt` 與 reviewer note；執行 `node scripts/validate-tracks.mjs --staging --regions taichung,changhua,nantou,yunlin` 後，以 `--publish` 更新重算中繼資料及 4 個 bundle**
- [ ] **Step 5: 執行 `npm test` 與 Chrome 12 條詳情驗證**
- [ ] **Step 6: Commit**

```bash
git add tools/route-data/seeds js/data/tracks js/data/routes.js docs/TEST-PLAN.md
git commit -m "data: 建立中部真實公路車路線"
```

---

### Task 9: 南部 15 條真實路線資料

**Files:**
- Create: `tools/route-data/seeds/{chiayi-city,chiayi-county,tainan,kaohsiung,pingtung}.json`
- Generate: `js/data/tracks/{chiayi-city,chiayi-county,tainan,kaohsiung,pingtung}.js`
- Modify: `js/data/routes.js`
- Modify: `docs/TEST-PLAN.md`

**Route IDs:**
- Chiayi City: `chiayi-city-lantan`, `chiayi-city-coffee`, `chiayi-city-two-lakes`
- Chiayi County: `chiayi-alishan`, `chiayi-meishan-36`, `chiayi-route-166`
- Tainan: `tainan-route-175`, `tainan-guanziling`, `tainan-nanhua`
- Kaohsiung: `kaohsiung-qimei`, `kaohsiung-jiaxian-liugui`, `kaohsiung-harbor`
- Pingtung: `pingtung-south-border`, `pingtung-dapengbay`, `pingtung-shouka-mudan`

- [ ] **Step 1: 為 15 個 route ID 各建立 `{ id, direction, profile: "fastbike", waypoints }`；每條至少包含具名 start／finish，山岳與環線另加足以固定道路選擇的 via**
- [ ] **Step 2: 執行 `npm run tracks:generate -- --regions chiayi-city,chiayi-county,tainan,kaohsiung,pingtung --staging`，再以 `tools/route-data/audit.html?regions=chiayi-city,chiayi-county,tainan,kaohsiung,pingtung` 逐條疊圖審核**
- [ ] **Step 3: 特別檢查阿里山、梅山 36 彎、甲仙六龜、壽卡牡丹等山路，以及港區與海岸禁行道路**
- [ ] **Step 4: 對人工通過的種子寫入 `reviewStatus: "approved"`、`reviewedAt` 與 reviewer note；執行 `node scripts/validate-tracks.mjs --staging --regions chiayi-city,chiayi-county,tainan,kaohsiung,pingtung` 後，以 `--publish` 更新重算中繼資料及 5 個 bundle**
- [ ] **Step 5: 執行 `npm test` 與 Chrome 15 條詳情驗證**
- [ ] **Step 6: Commit**

```bash
git add tools/route-data/seeds js/data/tracks js/data/routes.js docs/TEST-PLAN.md
git commit -m "data: 建立南部真實公路車路線"
```

---

### Task 10: 東部 9 條真實路線資料

**Files:**
- Create: `tools/route-data/seeds/{yilan,hualien,taitung}.json`
- Generate: `js/data/tracks/{yilan,hualien,taitung}.js`
- Modify: `js/data/routes.js`
- Modify: `docs/TEST-PLAN.md`

**Route IDs:**
- Yilan: `yilan-beiyi`, `yilan-taipingshan`, `yilan-coast`
- Hualien: `hualien-qixingtan`, `hualien-valley-north`, `hualien-lake-route-193`
- Taitung: `taitung-route-197`, `taitung-dulan-coast`, `taitung-south-link`

- [ ] **Step 1: 為 9 個 route ID 各建立 `{ id, direction, profile: "fastbike", waypoints }`；每條至少包含具名 start／finish，山岳與環線另加足以固定道路選擇的 via**
- [ ] **Step 2: 執行 `npm run tracks:generate -- --regions yilan,hualien,taitung --staging`，再以 `tools/route-data/audit.html?regions=yilan,hualien,taitung` 逐條疊圖審核**
- [ ] **Step 3: 特別檢查北宜、太平山、台 9／台 11／縣道 193／197 與南迴的隧道、管制及自行車道路權限**
- [ ] **Step 4: 對人工通過的種子寫入 `reviewStatus: "approved"`、`reviewedAt` 與 reviewer note；執行 `node scripts/validate-tracks.mjs --staging --regions yilan,hualien,taitung` 後，以 `--publish` 更新重算中繼資料及 3 個 bundle**
- [ ] **Step 5: 執行 `npm test` 與 Chrome 9 條詳情驗證**
- [ ] **Step 6: Commit**

```bash
git add tools/route-data/seeds js/data/tracks js/data/routes.js docs/TEST-PLAN.md
git commit -m "data: 建立東部真實公路車路線"
```

---

### Task 11: 離島 9 條與路線美學 6 條真實道路資料

**Files:**
- Create: `tools/route-data/seeds/{penghu,kinmen,lienchiang,route-art}.json`
- Generate: `js/data/tracks/{penghu,kinmen,lienchiang,route-art}.js`
- Modify: `js/data/routes.js`
- Modify: `docs/TEST-PLAN.md`

**Route IDs:**
- Penghu: `penghu-cross-sea-bridge`, `penghu-south-loop`, `penghu-north-loop`
- Kinmen: `kinmen-big-loop`, `kinmen-lieyu`, `kinmen-taiwu`
- Lienchiang: `lienchiang-nangan`, `lienchiang-beigan`, `lienchiang-dongyin`
- Route art: `route-art-little-taiwan`, `route-art-elephant`, `route-art-heart-bay`, `route-art-crown`, `route-art-bear`, `route-art-flying-bird`

- [ ] **Step 1: 為 9 個離島 route ID 各建立 `{ id, direction, profile: "fastbike", waypoints }`；每條至少包含具名 start／finish，並禁止跨海直線連接不同島嶼**
- [ ] **Step 2: 為 6 個路線美學 route ID 建立具名 start／finish 與足以沿街道近似圖形的 via；道路合法性優先於圖形辨識度**
- [ ] **Step 3: 執行 `npm run tracks:generate -- --regions penghu,kinmen,lienchiang,route-art --staging`，再以 `tools/route-data/audit.html?regions=penghu,kinmen,lienchiang,route-art` 逐條疊圖審核**
- [ ] **Step 4: 特別檢查軍事管制、碼頭、機場、私人區域與僅供步行的道路**
- [ ] **Step 5: 對人工通過的種子寫入 `reviewStatus: "approved"`、`reviewedAt` 與 reviewer note；執行 `node scripts/validate-tracks.mjs --staging --regions penghu,kinmen,lienchiang,route-art` 後，以 `--publish` 更新重算中繼資料及 4 個 bundle**
- [ ] **Step 6: 執行 `npm test` 與 Chrome 15 條詳情驗證**
- [ ] **Step 7: Commit**

```bash
git add tools/route-data/seeds js/data/tracks js/data/routes.js docs/TEST-PLAN.md
git commit -m "data: 建立離島與路線美學真實軌跡"
```

---

### Task 12: 全部 72 條資料閘門、效能、文件與部署

**Files:**
- Create: `tests/track-data.test.js`
- Modify: `package.json`
- Modify: `.github/workflows/pages.yml`
- Modify: `README.md`
- Modify: `docs/TEST-PLAN.md`
- Modify: `docs/VERIFICATION.md`
- Modify: `LICENSE`

**Interfaces:**
- `npm run tracks:validate` 必須驗證 72/72 published tracks 與 72/72 approved reviews。
- GitHub Pages workflow 在 upload 前執行 `npm run verify`。

- [ ] **Step 1: 建立失敗測試，要求資料總數精確為 72＝66 一般＋6 路線美學，且每條都有 Track、approved review、有限海拔與單調里程**

- [ ] **Step 2: 加入禁止假資料測試**

```js
assert.doesNotMatch(routesSource, /buildCoordinates\s*\(/);
assert.doesNotMatch(routesSource, /art\.shape\.map/);
```

- [ ] **Step 3: 執行 `node --test tests/track-data.test.js`，修正所有資料缺口直到通過**

- [ ] **Step 4: 執行完整 `npm run verify`、JavaScript 全檔 `node --check`、`git diff --check` 與不輸出內容的敏感資料掃描**

- [ ] **Step 5: 以本機 HTTP 伺服器與 `file://` 開啟首頁；逐一自動巡覽 72 條詳情並檢查標題、地圖模式、海拔圖、GPX 狀態及主控台錯誤**

- [ ] **Step 6: 在 1440×900、768×1024、390×844 檢查代表性平路、海岸、山岳、離島與路線美學；驗證觸控提示與鍵盤左右鍵**

- [ ] **Step 7: 量測首頁未載入任何 track bundle；單一詳情只載入對應 bundle；記錄 bundle 大小與載入時間**

- [ ] **Step 8: 更新 README、測試計畫、驗證紀錄與授權歸屬；明載 SRTM 非測量級及道路可能變動**

- [ ] **Step 9: 修改 Pages workflow 以 `npm run verify` 作部署閘門，執行獨立程式碼審查並修正 Critical／Important**

- [ ] **Step 10: Commit**

```bash
git add tests/track-data.test.js package.json .github/workflows/pages.yml README.md docs/TEST-PLAN.md docs/VERIFICATION.md LICENSE
git commit -m "test: 完成真實路線上線驗收"
```

- [ ] **Step 11: 在推送前顯示 remote、branch 與完整 commit SHA；經既有使用者授權後推送 `main`**

- [ ] **Step 12: 追蹤 GitHub Actions 至 `success`；HTTP 驗證首頁、CSS、JS、代表性 track bundle，並以公開 Chrome 驗證地圖與坡度圖**

- [ ] **Step 13: 將正式 run、commit、公開網址與 HTTP／瀏覽器證據補入 `docs/VERIFICATION.md`，再次提交、列出推送資訊、推送並驗證最終 run**

---

## 計畫自我審查

- 規格數量已校正為 66 條一般路線＋6 條路線美學＝72 條。
- 12 個 Task 涵蓋分析核心、延遲載入、資料相容、產生工具、產品整合、72 條資料、人工審核、測試、文件與部署。
- 每一項產品行為變更都有先失敗、再實作、再完整測試的步驟。
- 所有 72 個 route ID 均在 Task 7–11 明確列出。
- 沒有依賴執行期 API、API 金鑰、後端或大型框架。
- `file://` 相容策略固定為傳統 script registry，不以 `fetch()` 載入 bundle。
- 資料產生允許分區 staging 與審核，但 published validation 要求 72/72 全部完成才可部署。
