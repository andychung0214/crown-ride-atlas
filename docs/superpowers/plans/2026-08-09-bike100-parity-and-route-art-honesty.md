# bike100 功能對照與路線美學誠實化 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (\`- [ ]\`) syntax for tracking.

**Goal:** 讓狂輪誌在不複製 bike100 受限資料的前提下，補齊路線索引篩選／排序／分頁／完成標記，並移除不符合台灣輪廓的「環小台灣」公開路線。

**Architecture:** 以純函式 \`Filter\` 處理路線條件、排序與固定頁面切片；以獨立 \`Progress\` 本機儲存層管理完成路線識別碼。 \`Render\` 只接收已計算的狀態並建立可鍵盤操作的表單、結果摘要、路線卡與分頁，\`app.js\` 負責狀態重設、持久化與公告。路線美學的道路 bundle 保留為稽核資料，但從 \`Data.routes\`、manifest 與公開 \`routeArt\` 移除，頁面以誠實空狀態說明重新納入的條件。

**Tech Stack:** HTML5、CSS、Vanilla JavaScript、UMD 傳統 script、Node.js 內建 \`node:test\`、localStorage、現有 Leaflet／SVG 降級地圖。

## Global Constraints

- 不使用 React、Angular、Vue、TypeScript、後端服務、大型遊戲引擎或必要建構流程。
- 直接開啟 \`index.html\` 時，核心導覽、篩選、完成標記與 SVG 路線圖必須可用。
- 不讀取、不輸出、不提交或推送憑證、Token、\`.env\` 或私人金鑰。
- 不抓取或重製 bike100 的會員路線、圖片、GPX、會員資料或登入狀態。
- 所有路線仍須使用已驗證的公共道路軌跡；不可用畫布折線冒充道路，也不可為了填滿路線美學降低道路政策閘門。
- 所有中文提交說明使用 Conventional Commits 格式且描述採 zh-TW。
- Git 推送前必須顯示 origin remote、\`main\` 分支與完整 commit SHA。

---

## 檔案責任與變更清單

- Modify: \`js/core/filter.js\` — 正規化坡度／時間區間、縣市與區域篩選、穩定排序、\`paginate\` 純函式。
- Create: \`js/core/progress.js\` — 完成路線識別碼的 localStorage 讀取、切換、清除與格式驗證。
- Modify: \`js/app.js\` — 載入完成狀態、將 \`page\` 納入篩選狀態、連接 \`Filter.paginate\` 與 \`Progress\` actions。
- Modify: \`js/ui/render.js\` — bike100 式篩選控制、結果摘要、分頁、路線卡完成按鈕、詳情完成按鈕與美學空狀態。
- Modify: \`css/components.css\`, \`css/layout.css\`, \`css/base.css\` — 篩選群組、分頁、完成徽章／按鈕、空狀態在手機寬度的排版。
- Modify: \`index.html\` — 以 \`defer\` 載入 \`js/core/progress.js\`，順序在 \`app.js\` 前。
- Modify: \`js/data/routes.js\` — 將 \`route-art-little-taiwan\` 的 audit 狀態改為不公開，\`routeArt\` 產生空集合；保留 audit 形狀與資料註記但不建立公開路線。
- Modify: \`js/data/track-manifest.js\` — 移除不再公開的 \`route-art-little-taiwan\` manifest 項目，讓 manifest 只涵蓋可瀏覽的 \`Data.routes\`。
- Modify: \`tests/filter.test.js\` — 新增 facet、坡度／時間篩選、排序與分頁失敗測試。
- Create: \`tests/progress.test.js\` — 新增本機完成標記的讀取、切換、損壞資料與儲存失敗測試。
- Modify: \`tests/render.test.js\`, \`tests/app.test.js\` — 驗證表單欄位、頁碼重設、完成按鈕、路線美學空狀態與 action 連接。
- Modify: \`tests/data.test.js\`, \`tests/track-data.test.js\`, \`tests/track-registry.test.js\`, \`tests/route-art-shape.test.js\` — 將美學路線改為 audit-only，確保公開資料不含錯誤圖形且 manifest／bundle 契約一致。
- Modify: \`docs/TEST-PLAN.md\`, \`docs/VERIFICATION.md\`, \`README.md\`, \`docs/PLAN.md\` — 更新 68 條公開路線、bike100 對照功能、空美學清單與已知限制。

---

### Task 1: 建立路線 facet、篩選與分頁純函式

**Files:**
- Modify: \`js/core/filter.js\`
- Modify: \`tests/filter.test.js\`

**Interfaces:**
- Consumes: route fields \`name\`, \`regionName\`, \`area\`, \`regionId\`, \`difficulty\`, \`distanceKm\`, \`elevationGainM\`, \`durationMinutes\`, optional \`maxGradePct\`, optional \`gradeBand\`, optional \`durationBand\`, \`featured\`, \`createdAt\`.
- Produces: \`Filter.apply(routes, options)\` 與 \`Filter.paginate(items, page, pageSize)\`；\`apply\` 不修改來源陣列，\`paginate\` 回傳 \`{ items, page, pageSize, total, totalPages }\`。

- [ ] **Step 1: 寫失敗測試，固定四段坡度、八段時間與縣市／區域條件**

\`\`\`js
const facets = [
  { id: "easy", regionId: "taipei", area: "北部", difficulty: 2, maxGradePct: 8, durationMinutes: 45, featured: false },
  { id: "steep", regionId: "taichung", area: "中部", difficulty: 4, maxGradePct: 18, durationMinutes: 150, featured: true },
  { id: "long", regionId: "kaohsiung", area: "南部", difficulty: 5, maxGradePct: 23, durationMinutes: 720, featured: false }
];

assert.deepEqual(Filter.apply(facets, { gradeBand: "15-19" }).map(route => route.id), ["steep"]);
assert.deepEqual(Filter.apply(facets, { durationBand: "12h-plus" }).map(route => route.id), ["long"]);
assert.deepEqual(Filter.apply(facets, { areaId: "south" }).map(route => route.id), ["long"]);
assert.deepEqual(Filter.paginate(facets, 2, 2), {
  items: [facets[2]], page: 2, pageSize: 2, total: 3, totalPages: 2
});
\`\`\`

- [ ] **Step 2: 執行 \`node --test tests/filter.test.js\`，確認新增斷言先失敗**

預期：FAIL，指出 \`gradeBand\`、\`areaId\` 或 \`paginate\` 尚未支援。

- [ ] **Step 3: 實作最小 facet 與排序邏輯**

在 \`filter.js\` 加入四段坡度、八段時間常數與 \`paginate\`；\`apply\` 必須支援 \`areaId\`、\`gradeBand\`、\`durationBand\` 與排序值 \`featured\`、\`latest\`、\`difficulty-asc\`、\`difficulty-desc\`、\`distance-asc\`、\`elevation-desc\`、\`name\`。未提供 facet 時不匹配區間，不得猜測。

- [ ] **Step 4: 重新執行 \`node --test tests/filter.test.js\`，確認 PASS**

- [ ] **Step 5: Commit**

\`\`\`powershell
git add js/core/filter.js tests/filter.test.js
git commit -m "feat: 補齊路線索引篩選與分頁"
\`\`\`

### Task 2: 加入本機「騎過此路線」狀態

**Files:**
- Create: \`js/core/progress.js\`
- Create: \`tests/progress.test.js\`
- Modify: \`index.html\`

**Interfaces:**
- Consumes: Web Storage 相容物件。
- Produces: \`Progress.STORAGE_KEY\`、\`Progress.create(storage)\`；服務提供 \`list() -> Set<string>\`、\`has(id) -> boolean\`、\`toggle(id) -> boolean\`、\`clear() -> void\`。

- [ ] **Step 1: 寫失敗測試，涵蓋空值、損壞 JSON、去重、切換與儲存例外**

\`\`\`js
const storage = memoryStorage({ "crownRideAtlas.completed": JSON.stringify(["r1", "r1", 7]) });
const progress = Progress.create(storage);
assert.deepEqual([...progress.list()], ["r1"]);
assert.equal(progress.toggle("r2"), true);
assert.equal(progress.has("r2"), true);
assert.equal(progress.toggle("r2"), false);
assert.equal(progress.has("r2"), false);
\`\`\`

- [ ] **Step 2: 執行 \`node --test tests/progress.test.js\`，確認先因模組不存在而失敗**

- [ ] **Step 3: 實作 UMD \`Progress\` 模組**

只接受非空字串識別碼；讀取失敗回傳空集合；寫入失敗拋出「瀏覽器儲存空間不足或目前無法使用。」；永遠只儲存識別碼陣列，不包含路線物件、帳號或位置資料。

- [ ] **Step 4: 將 \`<script defer src="js/core/progress.js"></script>\` 放在 \`app.js\` 前並重新執行測試**

- [ ] **Step 5: Commit**

\`\`\`powershell
git add js/core/progress.js tests/progress.test.js index.html
git commit -m "feat: 儲存本機完成路線標記"
\`\`\`

### Task 3: 讓 App 管理 facet 狀態、頁碼與完成 action

**Files:**
- Modify: \`js/app.js\`
- Modify: \`tests/app.test.js\`

**Interfaces:**
- Consumes: \`Filter.apply\`、\`Filter.paginate\`、\`Progress.create\`。
- Produces: Render state \`filters.page\`、\`filters.areaId\`、\`filters.gradeBand\`、\`filters.durationBand\`、\`completed: Set<string>\`；actions \`setFilters(filters)\`、\`setPage(page)\`、\`toggleCompleted(routeId)\`。

- [ ] **Step 1: 擴充 app boot fixture 的 Progress stub 與失敗斷言**

在 \`tests/app.test.js\` 讓 Render 捕捉每次狀態，斷言 \`setFilters\` 會將 \`page\` 重設為 1，\`toggleCompleted("r1")\` 會呼叫服務並重新渲染；未提供 Progress 時啟動應列入 missing dependency。

- [ ] **Step 2: 執行 \`node --test tests/app.test.js\`，確認先失敗**

- [ ] **Step 3: 實作 App 狀態連接**

初始化 \`progress = app.Progress.create(root.localStorage)\`；\`state.filters\` 預設包含 query、region、area、difficulty、坡度、時間、sort 與 page；\`state.completed = progress.list()\`。 \`setFilters\` 合併預設值並固定 \`page: 1\`；\`setPage\` 只接受正整數且不超過目前總頁數；\`toggleCompleted\` 更新 Set、render 並以 \`aria-live\` 公告。

- [ ] **Step 4: 執行 \`node --test tests/app.test.js\` 與完整 \`npm test\`，確認 PASS**

- [ ] **Step 5: Commit**

\`\`\`powershell
git add js/app.js tests/app.test.js
git commit -m "feat: 串接路線頁碼與完成狀態"
\`\`\`

### Task 4: 重做索引控制、路線卡與美學空狀態

**Files:**
- Modify: \`js/ui/render.js\`
- Modify: \`tests/render.test.js\`
- Modify: \`css/components.css\`
- Modify: \`css/layout.css\`
- Modify: \`css/base.css\`

**Interfaces:**
- Consumes: \`state.filters\`、\`state.visibleRoutes\`、\`state.pageView\`、\`state.completed\`；actions \`setFilters\`、\`setPage\`、\`toggleCompleted\`。
- Produces: 可存取的 filter form、24-item route grid、result summary、pager、completion buttons、route-art empty copy。

- [ ] **Step 1: 寫失敗渲染測試**

使用既有 fake DOM，檢查 \`filterForm\` 產生 \`areaId\`、\`gradeBand\`、\`durationBand\`；檢查路線卡有 \`button\`、\`aria-pressed="true"\` 與「已完成」文字；檢查 \`routesPage\` 顯示 \`第 2 / 3 頁\` 與下一頁 action；檢查 \`routeArtPage\` 空集合文字包含「尚無可顯示」與「重新納入」。

- [ ] **Step 2: 執行 \`node --test tests/render.test.js\`，確認先失敗**

- [ ] **Step 3: 實作篩選表單與結果頁**

篩選群組對應 bike100 公開索引：搜尋、北／中／南／東台灣區域、22 縣市、坡度四區間、行程時間八區間、難度與排序。表單提交把所有欄位傳給 \`actions.setFilters\`；結果摘要顯示 \`找到 X 條路線 · 第 Y / Z 頁\`；沒有結果保留清除按鈕。

- [ ] **Step 4: 實作可操作的完成按鈕與分頁**

路線卡在統計旁加入 \`button\`：未完成文字「騎過此路線？」、完成文字「已完成 · 取消標記」，設定 \`aria-pressed\`，按下只呼叫 \`toggleCompleted(route.id)\` 不觸發導覽。分頁提供上一頁／下一頁與頁碼按鈕，disabled 狀態正確，頁碼按鈕具 \`aria-label\`。

- [ ] **Step 5: 實作美學空狀態與詳情完成按鈕**

\`routeArtPage\` 在空集合時說明目前沒有通過道路與幾何閘門的公開圖形，並連到 \`#/editor\`；\`routeDetailPage\` 沿用同一個完成 action，讓從索引或詳情都能標記。

- [ ] **Step 6: 加入紙張風格的篩選／分頁／完成樣式與手機斷點**

保留現有四主題 CSS 變數；桌機使用多欄篩選，手機改為單欄；按鈕焦點至少 2px 對比外框；不得產生水平溢位或依賴 hover 才可操作。

- [ ] **Step 7: 執行 \`node --test tests/render.test.js\` 與 \`npm test\`，確認 PASS**

- [ ] **Step 8: Commit**

\`\`\`powershell
git add js/ui/render.js css/base.css css/layout.css css/components.css tests/render.test.js
git commit -m "feat: 建立 bike100 風格路線索引介面"
\`\`\`

### Task 5: 下架不相符的環小台灣公開資料

**Files:**
- Modify: \`js/data/routes.js\`
- Modify: \`js/data/track-manifest.js\`
- Modify: \`tests/data.test.js\`
- Modify: \`tests/track-data.test.js\`
- Modify: \`tests/track-registry.test.js\`
- Modify: \`tests/route-art-shape.test.js\`
- Modify: \`tests/task11-islands-art.test.js\`（明確標示 audit-only）

**Interfaces:**
- Consumes: 既有 route-art audit bundle、seed、幾何閘門測試。
- Produces: \`Data.routeArt === []\)、公開 \`Data.routes\` 僅含 66 條地區路線與 2 條挑戰路線；route-art bundle 只供稽核測試，不在 manifest 發布。

- [ ] **Step 1: 先更新資料契約失敗測試**

將公開資料斷言改為 \`Data.routeArt.length === 0\`、\`Data.routes.length === 68\`，並新增 \`assert.equal(Data.routes.some(route => route.id === "route-art-little-taiwan"), false)\`；\`route-art-shape.test.js\` 改為從 bundle 讀取 audit 軌跡並斷言它不會進入 \`Data.routeArt\`。

- [ ] **Step 2: 執行受影響測試，確認先失敗**

執行：\`node --test tests/data.test.js tests/track-data.test.js tests/track-registry.test.js tests/route-art-shape.test.js\`。

- [ ] **Step 3: 修改 route data 與 manifest**

讓 \`artMatchAudit["route-art-little-taiwan"].matchStatus\` 為 \`rejected\`，保留分數與 reviewer note 作為稽核紀錄；\`routeArt\` map 會產生空陣列；從 \`track-manifest.js\` 移除該 route ID。不要刪除 seed、bundle 或 raw audit fixture，讓未來重新審核仍可重現。

- [ ] **Step 4: 更新 audit-only 測試並重新執行受影響測試**

Task 11 測試仍直接讀取 seed／bundle，並將測試名稱與註解改成「稽核資料，不代表公開路線」；公開 manifest 測試只驗證 \`Data.routes\` 的 68 個 ID。

- [ ] **Step 5: Commit**

\`\`\`powershell
git add js/data/routes.js js/data/track-manifest.js tests/data.test.js tests/track-data.test.js tests/track-registry.test.js tests/route-art-shape.test.js tests/task11-islands-art.test.js
git commit -m "fix: 下架不符輪廓的環小台灣"
\`\`\`

### Task 6: 更新文件、計數與驗證基準

**Files:**
- Modify: \`README.md\`
- Modify: \`docs/PLAN.md\`
- Modify: \`docs/TEST-PLAN.md\`
- Modify: \`docs/VERIFICATION.md\`

**Interfaces:**
- Consumes: 實際測試與 validator 輸出。
- Produces: 不宣稱 69／72 條公開路線，不宣稱有環小台灣圖形；明確列出 bike100 對照功能與受限資料不複製原則。

- [ ] **Step 1: 更新 README 的公開數量、功能與已知限制**

將「69 條已發布」改為「68 條已發布（66 地區＋2 挑戰）」；補上 24 筆分頁、坡度／時間篩選、完成標記；說明 route-art bundle 為 audit-only，取得真實完整環台 GPX 前不公開命名。

- [ ] **Step 2: 更新 PLAN／TEST-PLAN 的資料契約與手動清單**

把舊的「至少 1 條公開路線美學」改為「可為 0，空狀態必須誠實」；新增篩選組合、頁碼重設、完成標記與手機觸控案例。

- [ ] **Step 3: 更新 VERIFICATION，僅記錄實際通過結果**

保留舊驗證歷史，不改寫過往 commit 的結果；新增本次日期段落，記錄 route-art 下架原因、公開路線數 68、測試數與瀏覽器檢查結果。

- [ ] **Step 4: 執行 \`git diff --check\` 與文件搜尋**

執行 \`rg -n "69 條|72 條|公開.*環小台灣|至少 1 條公開" README.md docs\`，只保留歷史驗證段落的明確日期語境，不讓目前狀態產生矛盾。

- [ ] **Step 5: Commit**

\`\`\`powershell
git add README.md docs/PLAN.md docs/TEST-PLAN.md docs/VERIFICATION.md
git commit -m "docs: 更新路線索引與美學驗證說明"
\`\`\`

### Task 7: 完整測試、瀏覽器驗證與 GitHub Pages 部署

**Files:**
- No source changes unless a verified failure requires a focused fix.
- Evidence: \`docs/VERIFICATION.md\` only after results are observed.

**Interfaces:**
- Consumes: all previous tasks and \`main\` branch.
- Produces: verified local/static build, pushed commit, successful GitHub Pages deployment URL.

- [ ] **Step 1: 執行自動驗證**

\`\`\`powershell
npm test
npm run tracks:validate
npm run verify
\`\`\`

預期：全部 PASS；published validator 應顯示 23 個 bundle、68 條公開路線，route-art bundle 不在 manifest 發布清單。

- [ ] **Step 2: 啟動靜態伺服器並檢查桌機流程**

執行 \`python -m http.server 4173\`，以 Chrome 開啟 \`http://127.0.0.1:4173/\`；檢查首頁、\`#/routes\`、坡度／時間／縣市組合、結果數、下一頁、完成標記重新整理後仍存在、\`#/route-art\` 誠實空狀態與代表性路線地圖／海拔／GPX。

- [ ] **Step 3: 檢查行動與無障礙**

在 390×844 與 768×1024 檢查單欄篩選、按鈕可觸控、焦點順序、\`aria-live\` 結果更新、分頁鍵盤操作、無水平溢位；在離線或 Leaflet 失敗時確認 SVG 路線圖仍可用。

- [ ] **Step 4: 以瀏覽器 console 與 network evidence 確認零錯誤**

記錄首頁／索引／美學／詳情各頁無未處理例外；不輸出任何帳號、cookie、token 或會員網址。

- [ ] **Step 5: 提交前顯示推送目標**

先執行並在 commentary 顯示：

\`\`\`powershell
git remote get-url origin
git branch --show-current
git rev-parse HEAD
\`\`\`

確認 remote 為 \`https://github.com/andychung0214/crown-ride-atlas.git\`、branch 為 \`main\`，再執行 \`git push origin main\`。

- [ ] **Step 6: 等待 GitHub Actions 並驗證公開網址**

確認 Pages build／deploy job 成功，使用 \`https://andychung0214.github.io/crown-ride-atlas/\` 檢查新版本的路線索引與空美學狀態；只有看到成功執行結果後，才在 \`docs/VERIFICATION.md\` 記錄部署 SHA 與網址。

- [ ] **Step 7: Commit（若驗證文件仍有最後一筆部署證據）**

\`\`\`powershell
git add docs/VERIFICATION.md
git commit -m "docs: 記錄 bike100 對照版部署驗證"
git push origin main
\`\`\`

---

## 自我審查

- 規格中的「移除不相符環小台灣」由 Task 5、Task 4 空狀態與 Task 6 文件覆蓋。
- bike100 對照的搜尋、坡度／區域／縣市／時間篩選、排序、24 筆分頁與完成標記由 Task 1–4 覆蓋。
- localStorage、直接開啟 HTML、RWD、無障礙、Leaflet／SVG 降級與自動測試由 Task 2、4、7 覆蓋。
- 受限會員資料不複製、道路政策與公開資料數量限制由 Global Constraints、Task 5、Task 6 覆蓋。
- 每個工作步驟都有明確檔案、函式介面、測試指令與 Conventional Commit；沒有模糊或未定義的實作步驟。
