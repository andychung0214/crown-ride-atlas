# GPS Art Source Downloads Whole-plan 最終審查修正報告

日期：2026-08-29
工作樹：`F:\Codex\Projects\crown-ride-atlas\.worktrees\feature-bike-parts-gps-art`

## 結果摘要

Whole-plan review `8bc75de..11a3ddb` 的 2 項 Important 與 1 項 Minor 已在唯一 final fix wave 處理：站內 GPS Art 匯入器改用受限下載；正式軌跡輸出改為同目錄唯一暫存檔加原子 rename；設計規格第 3 行尾端空白已移除。後續 scoped re-review 找到 deadline timer `unref` 造成 entrypoint 假成功退出；使用者已核准超出單次修正波上限的窄範圍例外，只移除 `unref` 並加入真實 child-process liveness 回歸。沒有執行 live fetch、沒有重產 geometry，也沒有修改正式 `route-art-tracks.js`、路線、manifest、catalog 或下載摘要產物。

## 根因

1. `downloadSource` 只驗證初始與平台自動跟隨後的 `response.url`，但呼叫 `fetch` 時沒有 `redirect: "manual"`、abort signal 或串流大小 gate；`arrayBuffer()` 可無上限等待並配置完整 body，redirect／HTTP／讀取失敗也沒有一致 cleanup。`describeDownloadError` 另會輸出上游任意 `message`／`cause`。
2. `importTracks` 直接 `writeFile(OUTPUT_PATH, ...)`，中途中斷可能破壞既有正式產物，且沒有可在暫存目錄驗證 write／rename failure 的窄 seam。
3. 設計規格日期行保留 Markdown hard-break 的兩個尾端空白，造成 whole-branch `git diff --check` 失敗。
4. deadline timer 呼叫 `unref` 後不再維持事件迴圈；當 entrypoint 的 fetch 永不 settle 且沒有其他 referenced handle 時，Node 可在 deadline 觸發前以 0 結束。既有單元測試的 `within` timer 自身維持事件迴圈，因此遮蔽了這個真實 CLI liveness 缺陷。

## 分組 TDD RED → GREEN

### 1. Restricted fetch、cleanup 與受控錯誤

- RED 命令：`node --test --test-name-pattern='公開來源錯誤|站內下載器|站內軌跡' tests/route-art-catalog.test.js`
- RED 結果：1 項通過、10 項失敗、20 項略過。失敗精確顯示上游 Cookie／Authorization 文字外洩、fetch options 缺失、惡意 redirect 未由 manual policy 處理、stalled fetch/body 無共同逾時、5 MB `Content-Length`／chunk gate 缺失、body 未取消，以及原子 writer 尚不存在。
- GREEN 結果：同一命令 11 項通過、0 項失敗、20 項略過。
- 行為證據：初始與每跳 URL 均驗證 HTTPS、無 credentials、host allowlist；每次 fetch 皆使用 `redirect: "manual"`、同一個 `AbortSignal` 與不含 Cookie／Authorization 的 Accept headers；惡意跨主機 redirect 只有 1 次 fetch 呼叫且 body 被取消，核准 redirect 最多 3 跳。
- body 證據：stalled fetch 與 stalled reader 均在 20 ms 測試逾時內結束且 signal 為 aborted；無 stream reader 時不呼叫 `arrayBuffer()`；超大 `Content-Length` 與單一 5,000,001-byte chunk 均在 5 MB gate 拒絕；redirect、HTTP、HTML、大小早退與 reader failure 均取消 body。
- query 證據：Google KML 初始 URL 的 `?mid=...&forcekml=1` 逐字傳入 fetch，內容仍以 KML 正常解析。
- 敏感輸出證據：任意上游 `message`／`cause`、多值 Cookie 與 Authorization counterexample 只得到受控「來源下載失敗」；fetch/body error 亦轉為受控類別，不發布上游文字。

### 2. 同目錄唯一 temp 與原子 rename

- 新增 `writeTracksAtomically(tracks, { outputPath, fsImpl })` 窄 seam；production 預設仍固定寫入原 `OUTPUT_PATH`，測試只傳入 `mkdtemp` 目錄。
- temp 名稱為 `${outputPath}.${process.pid}.${randomUUID()}.tmp`，因此與正式目標同目錄且每次唯一；寫入使用 `flag: "wx"`，完成後才 rename。
- all-success：既有 fixture 產物被完整 UMD 覆寫，目錄最後只剩目標檔。
- write failure：注入 partial write 後拋錯，舊產物逐位元組保留，部分 temp 被清除。
- rename failure：完整 temp 寫成後注入 rename 錯誤，舊產物逐位元組保留，完整 temp 被清除。
- 三項測試都只操作 OS 暫存目錄，沒有讀寫正式 artifact 路徑。

### 3. Minor 空白修正

- 移除 `docs/superpowers/specs/2026-08-21-bike-anatomy-and-gps-art-downloads-design.md` 第 3 行尾端兩個空白。
- branch-level gate 使用 reviewer 指定基準：`git diff --check 8bc75de..HEAD`。

### 4. 使用者核准的 entrypoint liveness 窄例外

- Ruling: user approved one narrowly scoped exception beyond the final-review one-wave cap to remove unref and add child-process liveness regression; no other code scope. Cost if wrong: process behavior may still differ on some Node versions, but it avoids known false-success exits.
- RED：真實 child process 以 `--import` 離線注入 never-settling fetch，直接執行匯入器 entrypoint；預期受控 exit 1，修正前實際 exit 0，因此測試精確失敗。父測試的 5 秒 guard 只負責偵測 hang，不替 child 維持 deadline。
- GREEN：只移除 deadline timer 的 `unref`；同一測試在 deadline 後收到受控「來源下載逾時」與整批失敗訊息，以 exit 1 結束，1 項通過、0 項失敗、31 項略過。

## 最終驗證

| 命令／guard | 結果 |
|---|---|
| `node --check scripts/import-route-art-tracks.mjs` | exit 0 |
| `node --test tests/route-art-catalog.test.js tests/route-art-source.test.js tests/route-art-downloads.test.js` | 73 項通過、0 項失敗、0 項略過 |
| GPS Art focused 12 檔集合 | 192 項通過、0 項失敗、0 項略過 |
| `npm run verify` | exit 0；387 項通過、0 項失敗；23 個 bundle／68 條路線 |
| `git diff --check 8bc75de..HEAD` | exit 0，whole branch 無空白錯誤 |
| 受保護 diff／hash guard | `route-art-tracks.js`、routes、manifest、正式 tracks 與 catalog 無 final-wave diff；22／2／0／20、23／68 不變 |
| 正式下載摘要 artifact guard | `js/data/route-art-downloads.js` 不存在；相符 temp 為 0 |
| 安全掃描 | 沒有憑證值、私人金鑰或正式第三方 GPX／座標產物；命中只限安全規則、測試 counterexample 與文件說明，均逐行審查 |
| 工作樹 | final commits 後乾淨；未 push |

## Review finding 對照

| Finding | 修正與證據 |
|---|---|
| Important：匯入器 restricted fetch | manual redirect、3 跳上限、逐跳 URL policy、單一 fetch/body timeout、stream-only 5 MB cap、全早退 cleanup、受控錯誤；惡意 redirect、stall、超大標頭／chunk、cleanup、options 與 Google query 行為測試均通過 |
| Important：正式輸出非原子 | 同目錄 PID＋UUID temp、exclusive write、rename、失敗 cleanup；all-success／write failure／rename failure 暫存目錄測試均通過，舊產物保留 |
| Minor：規格 trailing whitespace | 第 3 行尾端空白移除，branch-level `git diff --check 8bc75de..HEAD` 通過 |
| Residual Important：deadline timer `unref` 假成功退出 | 使用者核准窄例外；真實 entrypoint child-process RED 證明 exit 0，移除 `unref` 後在受控 deadline 路徑 exit 1；production 程式碼沒有其他範圍 |

## Concerns 與證據界線

- 依 controller 指示，本輪沒有重新執行 ShapeMiles 或既有 KML／GPX live fetch；先前 19/19 匿名 ShapeMiles 端點 HTTP 401、0 件 `source-download` 的 ruling 不變。
- 受控錯誤刻意不顯示底層 TLS／fetch／reader 任意訊息；這降低 CLI 現場診斷細節，但避免發布 Cookie、Authorization、權杖或來源端敏感文字。程式內 `SourceDownloadError.code` 保留穩定分類供呼叫端判斷。
- cleanup 採 fire-and-forget `cancel()` 且吞掉 cleanup 自身失敗，確保主要驗證錯誤不被次要清理錯誤覆蓋；行為測試證明可取消 body 的路徑都有呼叫 cleanup。
- child-process 回歸在測試 preload 中把 deadline 壓縮至 30 ms，沿用真實 `Timeout` ref 行為但不等待 production 的 30 秒；不同 Node 版本的處理序時序仍可能略有差異，受控非零退出契約由測試固定。
- 沒有 push、merge、Pages workflow 或公開站重驗；本報告不宣稱部署完成。
