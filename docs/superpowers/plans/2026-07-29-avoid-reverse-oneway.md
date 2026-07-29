# 避免公路車路線逆行單行道 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 讓軌跡產生器拒絕沒有明確自行車逆向例外的單行道逆向段，並修正目前 11 條受影響路線。

**Architecture:** 在 `buildTrack` 解析 BRouter `messages` 的 `WayTags`，把 `reversedirection=yes` 與 `oneway=yes` 的交集視為候選違規段；只有同段明示 `oneway:bicycle=no`、允許逆向的 `bicycle:backward`，或 `cycleway*` 的合法 `opposite*` 標籤才放行。閘門在重採樣與發布前執行，因此新請求與既有快取都受保護；路線修正仍以 waypoint 改線與人工 OSM 疊圖再審完成。

**Tech Stack:** Node.js ESM、`node:test`、BRouter `fastbike` GeoJSON messages、SRTM、Leaflet、靜態 JavaScript bundle。

## Global Constraints

- BRouter messages 若同段含 `reversedirection=yes` 與 `oneway=yes`，且沒有明確自行車逆向例外，build/generate 必須拒絕並列出段落。
- `route_bicycle_*` 與 `cycleway:right=shared_lane` 不構成自行車逆向例外。
- 11 條受影響路線必須調整 waypoint、重新取得 BRouter 軌跡、完成人工 OSM 疊圖與 waytags／海拔再審。
- 更新所有受影響 routes metrics、`reviewedAt`、`reviewerNote`、Task 7／Task 8 稽核帳、測試計畫與驗證紀錄。
- Task 8 對 service 道路的宣稱必須限縮至實際有逐段證據的禁止／特殊類別與人工核准段落，不得由 `highway=service` 憑空推定鋪面。
- `changhua-baguashan` 的 60.5 km 路線不得保留「短程」標籤，改用符合實際體驗的標籤。
- 完成 focused、完整測試、北部與中部 staging／published validators，以及受影響 11 條與北部加中部全 33 條瀏覽器巡覽。
- 只建立 `fix: 避免公路車路線逆行單行道` 提交，不推送。

---

### Task 1: BRouter 單行道逆向閘門

**Files:**
- Modify: `tests/track-generator.test.js`
- Modify: `scripts/generate-tracks.mjs`

**Interfaces:**
- Consumes: BRouter `Feature` 或 `FeatureCollection`，其第一個 LineString feature 的 `properties.messages` 第一列為欄名。
- Produces: `findUnsafeReverseOnewaySegments(payload) -> Array<{ lat, lng, distanceM, wayTags }>`；`buildTrack` 在有違規段時拋出包含座標、距離與 waytags 的錯誤。

- [ ] **Step 1: Write the failing rejection test**

建立含 `reversedirection=yes highway=service oneway=yes` 的合成 BRouter payload，呼叫真實 `buildTrack`，斷言錯誤列出 `24.077300,120.401185`、`32m` 與完整 waytags。

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test --test-name-pattern="拒絕沒有自行車例外的單行道逆向段" tests/track-generator.test.js`

Expected: FAIL，因目前 `buildTrack` 不會拒絕該段。

- [ ] **Step 3: Write the failing exception test**

以表格測試 `oneway:bicycle=no`、`bicycle:backward=yes`、`bicycle:backward=designated`、`bicycle:backward=permissive`；每個 payload 都必須成功建構軌跡。另測 `route_bicycle_ncn=yes` 與 `cycleway:right=shared_lane` 仍須拒絕。

- [ ] **Step 4: Implement the minimal gate**

依 header 名稱取得 `Longitude`、`Latitude`、`Distance`、`WayTags` 欄位，將空白分隔的 `key=value` 解析成 Map。篩選同時含 `reversedirection=yes` 與 `oneway=yes`、又不含四種明確例外的段落；`buildTrack` 在 `parseBrouterFeature` 前呼叫閘門並以繁體中文列出所有違規段。

- [ ] **Step 5: Run focused tests**

Run: `node --test tests/track-generator.test.js`

Expected: 所有產生器測試通過。

### Task 2: 修正 11 條路線並重新審查

**Files:**
- Modify: `tools/route-data/seeds/{keelung-harbor-coast,keelung-waimushan-wanli,taipei-lengshuikeng,taoyuan-shimen-loop,hsinchu-city-nanliao-baoshan,hsinchu-county-yulao,hsinchu-county-smangus,miaoli-xianshan,changhua-coast,nantou-shanlinxi,yunlin-kouhu-coast}.json`
- Regenerate ignored cache/staging artifacts under `tools/route-data/cache/` and `tools/route-data/.staging/`

**Interfaces:**
- Consumes: 各 seed waypoint、BRouter `fastbike`、稽核頁。
- Produces: 11 份不含未授權單行道逆向段、地標距軌跡合理且重新核准的 seed/cache/staging 軌跡。

- [ ] **Step 1: Prove the gate rejects current routes**

Run: `node scripts/generate-tracks.mjs --route <id> --staging`

Expected: 每條目前受影響路線都因新閘門列出 reviewer 指定段落而失敗。

- [ ] **Step 2: Adjust one route at a time**

修改造成 U-turn 或錯向進出的 waypoint；刪除不能在合法方向到達的支線地標，或把 waypoint 移到同一地標附近可合法順向通行的公共道路。宇老與司馬庫斯共用路段要以相同原則分別修正。

- [ ] **Step 3: Regenerate and inspect each route**

對每條執行 staging generation；檢查完整 raw messages 不再有未授權 `reversedirection=yes + oneway=yes`，並確認高速／私人／步道／未鋪面等既有道路閘門。

- [ ] **Step 4: Re-audit Leaflet and elevation**

在 `tools/route-data/audit.html?route=<id>` 檢查 OSM 幾何、人工地標、海拔剖面與摘要；確認 waypoint 到發布折線距離符合驗證器門檻。

- [ ] **Step 5: Update approval metadata**

將 `reviewedAt` 更新為晚於新快取 `generatedAt` 的時間，並在 `reviewerNote` 記錄單行道逆向段已排除、改線方式、剩餘道路例外與海拔分析結論。

### Task 3: 發布資料、摘要與文件

**Files:**
- Regenerate: `js/data/tracks/{keelung,taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli,changhua,nantou,yunlin}.js`
- Modify: `js/data/routes.js`
- Modify: `docs/TEST-PLAN.md`
- Modify: `docs/VERIFICATION.md`
- Modify: `docs/VERIFICATION.md` 的 Task 7 北部稽核帳
- Modify: `docs/route-research/task8-central.md`

**Interfaces:**
- Consumes: 11 份已重新核准 staging 軌跡。
- Produces: 正式 bundle、四捨五入的 UI 距離／爬升、可追溯修正與驗證證據。

- [ ] **Step 1: Publish affected bundles**

Run: `node scripts/generate-tracks.mjs --regions keelung,taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli,changhua,nantou,yunlin --publish`

Expected: 9 個 bundle、27 條路線發布成功；未受影響的同 bundle 路線維持可驗證。

- [ ] **Step 2: Update route summaries**

將 11 條受影響路線在 `js/data/routes.js` 的距離與爬升更新為新發布摘要的一位小數／整數，並把 `changhua-baguashan` 的「短程」改為適合 60.5 km 丘陵路線的「耐力」。

- [ ] **Step 3: Update audit documents**

在 Task 7、Task 8 稽核帳記錄舊段落、改線結果、新 metrics 與重新審查結論；把 Task 8 對所有 service 例外均有逐段紀錄的過度宣稱限縮為有證據的禁止／特殊類別與人工核准段落，不推定 service 道路鋪面；在測試計畫加入 raw messages 單行方向閘門；在驗證紀錄列出自動化、validator 與瀏覽器結果。

### Task 4: 完整驗證與提交

**Files:**
- Verify all modified files.

**Interfaces:**
- Consumes: 已發布 bundle、路線摘要與文件。
- Produces: 可重現的測試證據與單一修正提交。

- [ ] **Step 1: Run focused tests**

Run: `node --test tests/track-analysis.test.js tests/track-generator.test.js tests/track-loader.test.js tests/track-registry.test.js tests/route-audit.test.js`

Expected: 全部通過。

- [ ] **Step 2: Run staging and published validators**

Run: `node scripts/validate-tracks.mjs --staging --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli,taichung,changhua,nantou,yunlin`

Run: `node scripts/validate-tracks.mjs --published --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli,taichung,changhua,nantou,yunlin`

Expected: 11 個 bundle、33 條路線通過。

- [ ] **Step 3: Run full tests**

Run: `npm test`

Expected: 全部通過。

- [ ] **Step 4: Run browser audits**

逐條開啟 11 個受影響 route/audit 頁，再巡覽北部加中部 33 個 route/audit 頁；檢查相符 ID、`approved`、Leaflet、海拔剖面、GPX 與無載入失敗。

- [ ] **Step 5: Verify and commit**

Run: `git diff --check`

Run: `git status --short`

Expected: 只有計畫內檔案變更且無空白錯誤。

Commit: `fix: 避免公路車路線逆行單行道`
