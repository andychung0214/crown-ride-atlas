# Task 3 報告：GPS Art 三狀態資料契約與原始路線連結

## 結果

- 狀態：完成。
- 正式圖鑑：22 件 = 2 `track-ready` + 0 `source-download` + 20 `source-only`。
- 已新增 12 件精確 Strava route/activity URL，全部標示 `routeSourceAccess: "login-required"`，且保留為 `source-only`。
- 未建立 `js/data/route-art-downloads.js`，也未在 `index.html` 新增會導致 404 的 script。

## 實作內容

- `RouteArt` 現在驗證互斥的 `track-ready`、`source-download`、`source-only` 狀態，提供五個篩選與四項統計。
- `source-download` 需要 ShapeMiles HTTPS allowlist、格式、SHA-256、分段／點數和台灣 bounds 摘要，且拒絕 `segments`／`coordinates`。
- `source-only` 與 `track-ready` 皆拒絕來源端下載摘要；`routeSourceUrl` 必須為 HTTPS，`routeSourceAccess` 只接受 `public-page` 或 `login-required`。
- Node 與瀏覽器只在 `RouteArtDownloads` 實際存在時合併；缺失時維持 22 件，存在但非物件或 record 無效時會明確失敗，不會靜默略過。
- 12 件 CS72 作品加入規格指定的 Strava route/activity 連結與 `login-required`。青埔小貓保留門禁社區、田地／非鋪面與狹窄通道警告；天母鯨魚保留逆向路段與較適合跑步警告。

## TDD RED／GREEN 證據

### RED

- 先加入 schema、統計、`downloadable` 篩選、synthetic `source-download` fixture、Node／瀏覽器 fail-soft 與 12 條 route source 的測試。
- 執行 `node --test tests/route-art.test.js tests/route-art-catalog.test.js`：30 項中 23 項通過、7 項失敗。
- 失敗原因符合預期：舊 schema 不接受 `source-download`、舊 stats 缺少 `sourceDownload`、`FILTERS` 沒有 `downloadable`、catalog 不合併摘要，且沒有 Strava metadata。

### GREEN

- 實作最小三狀態驗證、future summary 合併與 route source metadata 後，更新既有 render 契約為五個篩選。
- 執行 `node --test tests/route-art.test.js tests/route-art-catalog.test.js tests/render.test.js tests/data.test.js tests/track-data.test.js tests/pages-workflow.test.js`：70/70 通過。
- Mutation check：暫時令 Node 的缺失下載模組也視為存在，catalog 載入立即以 `RouteArtDownloads 必須是物件` 失敗；還原後 Node fail-soft 測試通過。

## 最終驗證與安全 guard

| 查核 | 結果 |
|---|---|
| `npm run verify` | exit 0；368/368 tests pass；23 個 bundle／68 條路線驗證通過 |
| focused GPS Art／render／資料／軌跡／頁面測試 | 70/70 pass |
| `node --check js/core/route-art.js` 與 `node --check js/data/route-art-catalog.js` | exit 0 |
| `git diff --check` | exit 0 |
| 保護檔案差異（routes、manifest、兩份 GPS Art track 資料） | 無差異 |
| `js/data/route-art-downloads.js` | 不存在 |
| `route-art-downloads.js*.tmp` | 0 件 |
| `index.html` 的 `route-art-downloads.js` script | 0 個 |

既有兩件站內 GPS Art 的 provenance／geometry regression 測試已在 focused 與全量測試中通過。

## Concerns

- Task 2 於 2026-08-28 查核 19/19 ShapeMiles 匿名端點皆為 HTTP 401；在來源恢復匿名公開下載並產生正式、無座標摘要前，production catalog 必須維持 0 件 `source-download`。
- 本次未使用登入狀態、Cookie、Authorization、OAuth 或任何憑證，也未把 Strava 路線宣稱為公開 GPX。

## Fix round 1（2026-08-28）

### 根因與 TDD RED／GREEN

- RED：新增真實暫存 fixture，讓精確 `js/data/route-art-downloads.js` 成功 resolve 後要求不存在的 `./fixture-nested/route-art-downloads.js`。舊邏輯只以錯誤訊息包含目標檔名判斷，錯誤 fail-soft；另以 shallow `Object.freeze(record)` fixture 證實已凍結父 record 會讓未凍結的 `bounds` 略過遞迴。
- RED command：`node --test tests/route-art-catalog.test.js`，23 項中 21 項通過、2 項失敗；分別是 `Missing expected exception` 與 `Object.isFrozen(bounds) === false`。
- GREEN：Node 先以 `require.resolve("./route-art-downloads.js")` 判定精確目標是否不存在；resolve 成功後的 `require` 不予吞掉。`deepFreeze` 無論父物件是否已凍結，都先遞迴凍結所有 descendant，再凍結自身。
- 加強 Minor：青埔小貓逐項驗證門禁社區、田地、非鋪面、狹窄通道；天母鯨魚逐項驗證逆向路段、較適合跑步。

### Fix round 1 驗證

| 查核 | 結果 |
|---|---|
| `node --test tests/route-art-catalog.test.js` | 23/23 pass |
| focused GPS Art／render／資料／軌跡／頁面測試 | 72/72 pass |
| `npm run verify` | exit 0；370/370 tests pass；23 個 bundle／68 條路線驗證通過 |
| 正式下載摘要／暫存檔 | `route-art-downloads.js` 不存在，`.tmp` 為 0 |

此次 fix 未改變正式 catalog 22 = 2／0／20，沒有修改 routes、manifest 或既有 GPS Art track，亦未新增 index script 或使用憑證。

## Fix round 2（2026-08-28）

### Characterization／隔離修正

- Characterization：round 1 的 Node nested-dependency regression 直接把 fixture 寫入正式 `js/data/route-art-downloads.js`，即使有 `t.after` 清理，在平行執行或處理序中斷時仍可能污染 production path。
- 修正：改以 `mkdtemp` 建立 OS 暫存目錄中的完整 module graph，複製 `route-art.js`、`route-art-tracks.js`、`route-art-catalog.js`，只在隔離的 `js/data/route-art-downloads.js` 建立 nested-missing fixture。
- 真實 Node behavior：隔離圖中精確目標缺失時回退為 22 件；精確目標存在但要求不存在的 `./fixture-nested/route-art-downloads.js` 時，`MODULE_NOT_FOUND` 會傳遞。測試前後均確認 production `js/data/route-art-downloads.js` 不存在。

### 驗證

| 查核 | 結果 |
|---|---|
| `node --test tests/route-art-catalog.test.js` | 23/23 pass |
| focused GPS Art／render／資料／軌跡／頁面測試 | 72/72 pass |
| `npm run verify` | exit 0；370/370 tests pass；23 個 bundle／68 條路線驗證通過 |
| 正式下載摘要／暫存檔 | `route-art-downloads.js` 不存在，`.tmp` 為 0 |

此次 fix 僅調整測試隔離；production fail-soft／hard-fail 契約、正式 catalog 22 = 2／0／20、routes、manifest 與既有 GPS Art track 均未改變。
