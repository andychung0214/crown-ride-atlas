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
- 離線測試先放入「既有安全產物」，再令第二件來源失敗；`verifyAndWriteDownloads` 回傳完整失敗 ID／原因，既有內容逐位元組不變，目錄內沒有部分暫存檔。
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
