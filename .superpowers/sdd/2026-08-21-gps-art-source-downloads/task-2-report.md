# Task 2 報告：ShapeMiles 候選與無座標下載摘要

## 狀態

- 結果：`DONE_WITH_CONCERNS`
- 現場查核日期：`2026-08-28`（Asia/Taipei）
- Concern：19 個精確 allowlist 下載端點在匿名 HTTPS 請求下全部回傳 `HTTP 401 Unauthorized`，官方 live page 當日亦明示 subscription-required；因此目前為 0 件 `source-download`，19 件候選維持未上架。
- 安全處置：停止 Task；未使用瀏覽器登入狀態、Cookie、Authorization、OAuth、私人活動或任何憑證；未停用 TLS、放寬 host/path allowlist、台灣範圍或 500 m gate；未手工補檔或建立部分產物。
- 實作 commit：`ea8de03`（`feat: 建立 GPS Art 受限來源驗證器`）

## 實作範圍

- 建立精確 19 筆且深度凍結的 `ROUTE_ART_DOWNLOAD_SOURCES`。
- 建立匿名 HTTPS restricted fetcher：精確 ShapeMiles host/path allowlist、`redirect: "manual"`、最多 3 次重新導向、標頭與實際串流雙重 5 MB 限制。
- 完整沿用 Task 1 `c7a1b15` 的 `parseTrackPayload`、`validateSegments`、`summarizeTrack`，並固定 GPX、台灣範圍及 500 m 同段跳點 gate。
- 建立 `verifyAllSources` 與同目錄暫存檔加 `rename` 的全成才原子寫入流程。
- 建立 `npm run art:verify-downloads`；只有此命令使用現場網路。
- 沒有建立 `js/data/route-art-downloads.js`，因為 19 件未全數成功。

## TDD RED／GREEN 證據

### RED

- 先新增 `tests/route-art-downloads.test.js`，再執行 `node --test tests/route-art-downloads.test.js`。
- 結果：0 pass、9 fail；所有失敗均為 registry、verifier、UMD 產物尚不存在的 `ERR_MODULE_NOT_FOUND`／`MODULE_NOT_FOUND`，是預期的功能缺失。
- Mutation check：暫時移除 GPX-only gate，對應測試以 `Missing expected rejection` 正確 RED；還原後 GREEN。
- Mutation check：暫時移除敏感資訊遮蔽，對應測試因原始敏感字串未被遮蔽而正確 RED；還原後 GREEN。

### GREEN

- `node --test tests/route-art-downloads.test.js`
  - 10 pass、0 fail、0 skip。
- `node --test --test-name-pattern='Task 1|遮蔽' tests/route-art-downloads.test.js`
  - 2 pass、0 fail、8 skip；mutation 還原後通過。
- 單元測試涵蓋精確候選、HTTPS／host／path／認證資訊拒絕、manual redirect、3 次上限、HTML／空檔／5 MB、GPX-only、Task 1 台灣與 500 m gates、非敏感錯誤證據、19 件任一失敗時不建立或改寫產物，以及 serializer 產生排序、深度凍結且無完整軌跡的 UMD。

## 19 件現場結果

執行：`npm run art:verify-downloads`。命令當場確認台北日期為 `2026-08-28`。以下只記錄無座標摘要欄位；沒有記錄座標或 GPX XML。因 HTTP 在內容下載前即失敗，bytes／format／segments／points／SHA 均無可驗證值。

| ID | HTTP | bytes | format | segments | points | SHA-256 |
|---|---:|---:|---|---:|---:|---|
| `gps-art-shapemiles-airplane` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-bicycle` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-bunny` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-butterfly` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-cactus` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-cat-silhouette` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-dinosaur` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-dolphin` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-guitar` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-heart-with-arrow` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-lightning-bolt` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-rocket` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-running-shoe` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-sailboat` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-snowflake` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-star` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-top-hat` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-turtle` | 401 | — | — | — | — | — |
| `gps-art-shapemiles-unicorn-head` | 401 | — | — | — | — | — |

總計：0/19 成功、19/19 `HTTP 401 Unauthorized`。

## 原子失敗證據

- 現場命令前後 `Test-Path js/data/route-art-downloads.js` 均為 `False`。
- `js/data/route-art-downloads.js*.tmp` 無檔案。
- 離線測試先放入「既有安全產物」，再令第十件來源失敗；`verifyAndWriteDownloads` 回傳完整失敗 ID／原因，既有內容逐位元組不變，目錄內沒有部分暫存檔。
- 未建立空白、部分或人工摘要產物。

## 驗證、掃描與 guard

| 查核 | 結果 |
|---|---|
| 基線 `npm test`（實作前） | 338/338 pass |
| 離線下載驗證測試 | 10/10 pass，0 skip |
| `node --test tests/route-art-source.test.js tests/route-art-downloads.test.js` | 28/28 pass |
| 最終 fresh `npm run verify` | exit 0；348/348 tests pass，23 bundles／68 routes validate pass |
| 兩支新 `.mjs` 的 `node --check` | exit 0 |
| route guard（routes／catalog／tracks／route-art） | exit 0，無差異 |
| `git diff --check` 與 staged diff check | exit 0 |
| serializer 產物安全契約 | fake verified records 產生的 UMD 不含完整軌跡欄位或 XML，並通過排序及深度凍結檢查 |
| 正式產物敏感內容 `rg` 掃描 | exit 2：正式目標產物不存在；不是內容匹配 |

正式產物維持不存在；沒有以 skip、placeholder、部分 artifact 或「檔案不存在所以通過」的弱測試隱藏 Concern。

## Concerns／解除阻擋條件

- ShapeMiles 下載端點目前不是匿名公開可下載狀態，官方 live page 亦顯示 subscription-required，與 Task 2「公開 GPX」前提不符。
- 依本 Task 安全邊界，不能加入登入狀態或憑證來通過 401。
- 目前 0 件 `source-download`，19 件候選只存在於可重跑 registry，未加入正式 catalog。
- 必須由來源端恢復匿名公開存取，或由上層規格提供另一組明確公開、可納入 exact allowlist 的端點後，才能重新執行現場查核並產生 19/19 原子 UMD 摘要。

## Fix round 1（2026-08-28）

- 修正 commit：`61c52ef`（`fix: 強化 GPS Art 下載驗證安全邊界`）

### 根因窄 probe

- stalled fetch 超過 40 ms 仍未結束，且 fake fetch 收到的 `signal` 為空，證實 fetch 未受 timeout 約束。
- `HTTP 401` 早退後 fake response body 的 `cancel` 仍為 `false`，證實早退未清理 body。
- 上游任意錯誤文字及多值 Cookie 尾端秘密可進入 failure reason，證實遮蔽規則不能形成安全輸出邊界。
- hostile fake record 的 `segments`、`<trkpt/>` 會被 serializer 原樣寫入，重複 ID 亦被接受，證實缺少明確欄位 allowlist 與唯一性檢查。
- 注入的 filesystem boundary 未被呼叫；原先操作仍成功且改寫既有內容，證實 write／rename failure 路徑沒有可測邊界。

### 分組 TDD RED／GREEN

1. timeout、body cleanup 與大小上限
   - RED：stalled fetch 由測試 guard 判定仍未結束；無 stream body 仍呼叫 `arrayBuffer()`；HTTP／redirect 等早退 body 未取消；超大 chunk 未先通過 byte-length gate。
   - GREEN：單一 `AbortController` 的 signal 涵蓋 manual redirects、fetch 及完整 body read；所有早退與讀取失敗路徑取消 body；拒絕無受限 reader 的 body；複製前先檢查 chunk byte length。focused 5/5 pass。
2. 受控錯誤分類
   - RED：HTTP failure 沒有穩定 `code`；任意上游 message／cause 及多值 Cookie、Authorization 秘密可外洩。
   - GREEN：failure 僅輸出受控 `{ id, code, reason }`；HTTP、timeout、network 與 unknown verification 分類不發布任意上游文字。相關 focused tests 全數通過。
3. serializer 明確 allowlist
   - RED：geometry／coordinate／XML、不完整或多餘 shape、重複 ID 均被接受。
   - GREEN：19 個摘要欄位逐欄投影及完整 shape 驗證、ShapeMiles URL allowlist、台灣 bounds、唯一 ID；合法 fake records 仍產生排序且深度凍結的無座標 UMD。serializer 4/4 pass。
4. 真實原子寫入行為
   - RED：write／rename failure 注入未被 production 使用，操作意外成功並改寫既有內容。
   - GREEN：窄 filesystem boundary 驗證 all-success 覆寫 19 件完整 UMD；partial write 與 rename failure 均保留既有內容並移除 temp；來源任一失敗仍不建立或改寫產物。atomic tests 4/4 pass。

### Round 1 最終驗證

| 查核 | 結果 |
|---|---|
| `node --test tests/route-art-downloads.test.js` | 21/21 pass，0 fail，0 skip |
| `node --test tests/route-art-source.test.js tests/route-art-downloads.test.js` | 39/39 pass，0 fail，0 skip |
| `node --test tests/route-art-downloads.test.js tests/route-art-source.test.js tests/route-art-catalog.test.js` | 56/56 pass，0 fail，0 skip |
| `npm run verify` | exit 0；359/359 tests pass；23 bundles／68 routes validate pass |
| `node --check scripts/verify-route-art-downloads.mjs` | exit 0 |
| protected route／catalog／tracks／Task 1 parser guard | exit 0，無差異 |
| `git diff --check` | exit 0 |
| 正式 artifact／temp | `js/data/route-art-downloads.js` 不存在；相符 temp 為 0 |
| 安全掃描 | production serializer 僅允許無座標摘要欄位；behavior tests 拒絕 geometry、coordinate、GPX XML 與任意敏感上游文字 |

本輪依 ruling 未重跑 ShapeMiles live，也未使用登入狀態或憑證。Concern 不變：19/19 匿名端點為 `HTTP 401`、官方頁明示 subscription-required，目前仍為 0 件 `source-download`，19 件候選維持未上架。

## Fix round 2（2026-08-28）

- 修正 commit：`e416fd3`（`fix: 鎖定 GPS Art 摘要來源 allowlist`）

### 根因與 TDD 證據

- 窄 probe 以 `gps-art-shapemiles-airplane` 摘要搭配無 slug 來源頁及未核准 nested `/gpx` 路徑呼叫真實 serializer，舊實作回傳 `ACCEPTED`。根因是 serializer 僅檢查 path `startsWith`／`endsWith`，沒有把 ID 與 19 件 frozen registry 的精確 URL 配對。
- RED：先新增 hostile behavior tests，再執行 `node --test tests/route-art-downloads.test.js`；21 pass、2 fail。兩項失敗均為 `Missing expected exception`，分別證明無 slug、nested `/gpx`、airplane／bicycle 來源與下載 URL cross-wire、未知 ID，以及固定 metadata tamper 尚未被拒絕。
- GREEN：由 frozen `ROUTE_ART_DOWNLOAD_SOURCES` 建立 frozen、無 prototype 的 ID map；record ID 必須存在，`sourceUrl` 與 `externalDownloadUrl` 必須逐字等於該候選，名稱、圖形標籤、地區、活動、距離、來源平台及衍生摘要亦逐欄一致。合法 fake verified records 仍保留日期、SHA、`segmentCount`／`totalPoints` 與 bounds 的動態摘要欄位。
- 原有 serializer tests 改用實際 registry 候選作為合法 fixture，不再以 registry 外的假 ID 弱化 allowlist 契約；未使用 source regex、skip 或 mock assertion。

### Round 2 最終驗證

| 查核 | 結果 |
|---|---|
| `node --test tests/route-art-downloads.test.js` | 23/23 pass，0 fail，0 skip |
| `node --test tests/route-art-source.test.js tests/route-art-downloads.test.js` | 41/41 pass，0 fail，0 skip |
| `npm run verify` | exit 0；361/361 tests pass；23 bundles／68 routes validate pass |
| protected registry／route／catalog／tracks／Task 1 parser guard | exit 0，無差異 |
| `git diff --check` 與 staged diff check | exit 0 |
| 正式 artifact／temp | `js/data/route-art-downloads.js` 不存在；相符 temp 為 0 |
| serializer 安全契約 | 拒絕未核准 nested `/gpx`、無 slug 來源頁、cross-wire URL、未知 ID、geometry／coordinate／XML 與固定 metadata tamper |

本輪未執行任何 live fetch，未使用登入狀態或憑證，也未建立正式 artifact。Concern 不變：ShapeMiles 匿名端點仍為 19/19 `HTTP 401` 且官方頁明示 subscription-required，目前 0 件 `source-download`，19 件候選維持未上架。
