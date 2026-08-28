# Task 4 報告：GPS Art 來源下載、篩選與卡片狀態

## 結果

- 狀態：完成。
- 正式圖鑑維持 22 件：2 `track-ready`、0 `source-download`、20 `source-only`。
- **正式圖鑑目前沒有 external download card。** 三種卡片的 `source-download` 行為僅以 synthetic fixture 驗證，未把 19 件 ShapeMiles 候選假造為可下載。

## 實作內容

- 路線美學維持五個篩選：全部、自行車、跑步／步行、可下載 GPX、站內地圖。
- 頁首統計固定呈現公開作品、站內地圖、來源端 GPX、待取得四項計數；production 顯示為 22／2／0／20。
- `track-ready` 保留站內地圖與本機「下載 GPX」按鈕。
- `source-download` 會以 `externalDownloadUrl` 建立「從來源下載 GPX」HTTPS 連結，使用 `_blank` 與 `noopener noreferrer`，不使用 `download` 屬性，也不呼叫本機下載 action。
- `source-only` 保留原始作品連結；存在 `routeSourceUrl` 時另提供「查看原始路線」，`login-required` 會明確提示來源平台可能要求登入。
- App 既有的 `track-ready`／usable segments 守衛已符合需求，故未變更 `js/app.js` 程式碼；新增測試以 19 件 synthetic `source-download` 證明其 0 次 `MapView.mount`、0 次 `Gpx.createDownload` 與 0 個本機 Blob 下載。
- 未修改 CSS；Task 5 仍可只針對 Task 4 建立的語意 class 進行樣式調整。

## TDD 證據

### RED

- 先加入三狀態 synthetic render 測試、更新四項統計契約，並加入 19 件 synthetic 外部卡片的 App 防護測試。
- 執行 `node --test tests/render.test.js tests/app.test.js`：36/38 通過、2 項失敗。
- 失敗原因符合預期：舊 UI 尚未輸出四項統計，且沒有「從來源下載 GPX」安全連結。

### GREEN

- 在 Render 加入固定篩選標籤、三種狀態文案、來源端安全 anchor、原始路線登入提示與四項統計。
- App 的既有防護測試在 RED／GREEN 都通過，確認不需要放寬或重寫已存在的下載與地圖條件。
- `node --test tests/render.test.js tests/app.test.js tests/gpx.test.js tests/map.test.js`：78/78 通過。

## 最終驗證與安全 guard

| 查核 | 結果 |
|---|---|
| `npm run verify` | exit 0；372/372 tests pass；23 個 bundle／68 條路線驗證通過。 |
| `git diff --check` | exit 0。 |
| production catalog | 22＝2 `track-ready`＋0 `source-download`＋20 `source-only`。 |
| 外部卡片 safety | synthetic anchor 有 `_blank`、`noopener noreferrer`、無 `download`；沒有 click action。 |
| App 防護 | 19 件 synthetic `source-download`：0 次地圖掛載、0 次 `Gpx.createDownload`、0 個本機下載。 |
| 保護檔案 | `js/data/routes.js`、`js/data/track-manifest.js`、`js/data/route-art-tracks.js` 無差異。 |
| 下載摘要 | `js/data/route-art-downloads.js` 與暫存檔均不存在。 |

本任務未使用登入狀態、Cookie、Authorization、OAuth 或其他憑證。
