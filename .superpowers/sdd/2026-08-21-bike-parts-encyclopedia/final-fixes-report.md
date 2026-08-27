# 公路車部件百科 Whole-plan 最終審查修正報告

日期：2026-08-25
工作樹：`F:\Codex\Projects\crown-ride-atlas\.worktrees\feature-bike-parts-gps-art`

## 結果摘要

本輪完成跨 Task 2–4 的四項 Important 與七項 confirmed Minor。百科保留森林綠「日式維修手冊解剖版」視覺；正式路線、`Data.routes`、`TrackManifest` 與 tracks 均未修改。

- 桌機 hotspot 與靜態清單的 hover，會同步切換 hotspot、leader、文字標籤與清單四方的非色彩 `.is-hovered` 狀態。
- `40rem` 以下同時隱藏 leader 與文字標籤，編號字級加大至 16px；觸控命中改為依 SVG client rect、viewBox 與目前 transform 換算的 22 CSS px 最近熱點，不以巨大且重疊的 SVG circle 假造目標。
- `BikeAnatomy` 改為可選 progressive enhancement；Render 預先輸出 32 個 native `<details>`，每筆保留名稱及用途、常見材質、調整、保養、安全警訊、相關部件、車店建議七類完整文字。互動成功後才隱藏，destroy、模組缺少、mount／SVG 建立失敗時維持或恢復可讀。
- SVG 加入 `<title>`、`<desc>` 與穩定 `aria-labelledby`／`aria-describedby` 關聯。
- 其餘修正涵蓋煞車卡鉗文案、縮回 1 倍歸零 offset、pointer capture 清理、資料深度凍結／UMD sentinel、精確 CSS rule／media helper、SEO description 與森林綠頭管。

## TDD RED → GREEN 證據

| 範圍 | RED | GREEN |
|---|---|---|
| 煞車卡鉗與資料契約 | `tests/bike-parts.test.js`：5 通過、1 失敗；明確缺少「碟煞」語意。凍結與 UMD characterization 當時已通過 | 6/6；碟煞活塞／密封／來令片及輪圈煞車拉臂／樞軸／煞車皮均受測 |
| Anatomy reducer、SVG、hover、touch、capture、lifecycle | `tests/bike-anatomy.test.js`：10 通過、8 失敗；分別暴露 1 倍 offset、頭管 shape、SVG 關聯、leader ID、hover、最近熱點、lost capture、fallback lifecycle 缺口 | 首輪 18/18；後續加入 direct-hotspot 回歸後為 20/20 |
| App／Render 靜態降級 | 合併 App／Render／Anatomy：33 通過、3 失敗；只缺模組會 fatal、mount 拋錯會阻斷、native details 為 0 | 當輪 54/54；最終完整 focused 亦持續通過 |
| 百科 CSS | `tests/css.test.js`：6 通過、4 失敗；缺 hover 非色彩規則、窄版 leader 隱藏、編號加大、頭管綠色 | CSS＋Anatomy 28/28；測試改用 balanced block 與精確 selector／media helper，未以貪婪 regex 跨規則 |
| SEO | `tests/pages-workflow.test.js`：3 通過、1 失敗 | 4/4；meta、Open Graph、JSON-LD description 均明確包含「公路車百科」 |
| Chrome 發現的 direct-hotspot 缺陷 | 新增 `--test-name-pattern="直接點擊 hotspot"` 後 1 失敗、19 skipped；SVG 錯誤捕捉 pointer，實際點擊鏈條仍停在上管 | 最小修正為 hotspot pointerdown 不進入 SVG gesture capture；同命令 1 通過、19 skipped，整份 Anatomy 20/20 |

最終 focused 命令：

```powershell
node --test tests/app.test.js tests/render.test.js tests/bike-anatomy.test.js tests/bike-parts.test.js tests/css.test.js tests/pages-workflow.test.js
```

結果：76 通過、0 失敗、0 skipped。

## Chrome 真實瀏覽器證據

以使用者已授權的 Chrome 控制 surface 開啟本機 HTTP；本輪新開 tab 已關閉，server 已停止，使用者原有 tabs 保留。本輪沒有建立畫面擷取檔。

### 1440×900 桌機

- document `clientWidth=1425`、`scrollWidth=1425`；15px 差額為垂直捲軸，無水平溢位。
- 32 個 hotspot、32 個 leader、32 個文字標籤；fallback 有 32 筆且增強成功後 `hidden=true`；fatal error 為 0。
- hotspot hover 四方 class 均為 true；computed ring 4px、leader 2.5px 實線、label underline、清單 5px 左框。
- 從靜態清單 hover 飛輪時，四方 class 亦同步為 true，詳情標題為「飛輪」。
- Chrome 點擊鏈條後，標題為「鏈條」、`aria-pressed=true`、live announcement 為「已選取 22 鏈條。」。
- SVG `aria-labelledby="bike-anatomy-title"`、`aria-describedby="bike-anatomy-description"` 均指向實際 title／desc；title 為「森林綠公路車完整側視零件互動圖」，desc 說明 32 個可操作編號、鍵盤、縮放與拖曳。
- 頭管 computed stroke 為森林綠 `rgb(36, 92, 67)`。

### 390×844

- 瀏覽器內容寬 375px；document `clientWidth=375`、`scrollWidth=375`，無水平溢位。
- leader／label 各 32 個 computed `display:none`；編號 computed `font-size=16px`，ring 半徑仍為 16，不使用巨大重疊圓形。
- SVG computed 307×166.28125px，比例符合 960×520 viewBox，不是 300×150 fallback 尺寸。
- 32 個 hotspot 存在；Chrome 實際 pointer 點擊鏈條後標題、pressed 與 announcement 同步；fatal error 為 0。

### 320×844

- 瀏覽器內容寬 305px；document `clientWidth=305`、`scrollWidth=305`，`html` computed `min-width=0px`，百科沒有水平溢位。
- leader／label 各 32 個隱藏，編號 16px；SVG computed 237×128.375px，比例正確。
- Chrome 實際 pointer 點擊飛輪後標題、pressed 與 announcement 同步；fatal error 為 0。
- 舊頁保留全域 `html { min-width:20rem }`。先前同日 320px 回歸中，若垂直捲軸使 viewport client 小於 320px，document `scrollWidth=320px` 是舊頁保護契約，不宣稱為舊頁無溢位。

### 鍵盤、主題與舊頁

- 同日先前 Chrome 回歸以真實 Tab、Enter、Space 驗證百科控制與至少一個 hotspot；四主題 focus／selected 有形狀、邊框或文字等非色彩提示。
- `#/home`、`#/routes`、`#/route-art`、`#/editor` 在 1440px 的 document `clientWidth`／`scrollWidth` 均為 1425px、fatal error 0。
- Chrome dev logs 的 error／warn 清單為空。

### 證據邊界

- Chrome 控制 surface 只有 viewport 與一般 pointer click，沒有 touch device emulation；390／320px 的 Chrome 點選是 mouse pointer。22 CSS px touch tolerance、超界不選、拖曳／雙指不誤選、transform 換算與 capture 清理由正式事件自動測試通過，不冒稱為實機 touch 驗證。
- Chrome runtime 沒有 `emulateMedia`，所以未完成真實 `prefers-reduced-motion: reduce` 模擬。精確 media-block 測試鎖定 CSS 規則，但不拿靜態證據冒充實機 media 驗證。
- 缺 BikeAnatomy、mount 拋錯與 SVG 建立失敗的靜態降級由 App／Render／Anatomy 自動測試驗證；本輪未在 Chrome 人為移除 script，不宣稱該故障注入已完成瀏覽器實測。

## 最終命令與結果

已在兩個提交完成後重新執行：

| 命令／檢查 | 結果 |
|---|---|
| `git diff --check` | exit code 0，無空白錯誤 |
| focused 六檔 | 76/76 通過 |
| `npm run verify` | exit code 0；303/303 通過 |
| published track validator | 23 個 bundle、68 條路線通過 |
| 受版控敏感檔名掃描 | 0 筆 |
| 指定敏感內容／危險 DOM 掃描 | 命中皆為掃描命令、安全說明與測試 DOM guard；沒有憑證值、私人金鑰或正式程式危險 sink |
| `git diff HEAD~2..HEAD --name-only -- js/data/routes.js js/data/track-manifest.js js/data/tracks` | 無輸出 |
| `git status --short` | 無輸出（本報告位於已忽略的 `.superpowers/`） |

## 提交

1. `0716070317182a528ef94bace11ca270d06545a7` — `fix: 強化公路車百科互動與降級`
2. `8bb6b1b532d67e704bd23fb386769b52673e240f` — `docs: 更新公路車百科驗證基準`

## 兩輪自評

### 第一輪：靜態契約與失效模式

- 逐項對照 review 後，確認原先把 BikeAnatomy 當 required module 會讓完整文字跟著互動失效，改成 Render-first 的 native details，再把圖解限制成可選增強。
- CSS 測試原先有跨規則的貪婪風險；改為 balanced block 與精確 selector／media helper。過程也揭露一條既有海拔測試其實指向錯誤 selector，修正後才讓測試對應真實契約。
- 資料、SVG 語意與 pointer lifecycle 均補了會在錯誤實作下真正失敗的行為測試，沒有只用 source regex 代替互動驗證。

### 第二輪：真實 Chrome 與證據誠實性

- Chrome 首次點擊鏈條仍停在「上管」，追到 SVG 的 bubbled pointerdown 搶走 capture。新增 focused RED 後只在精確根因處排除 direct-hotspot gesture，Chrome 重驗成功。
- 重新量測 1440、390、320 的 computed 尺寸、隱藏狀態、overflow、hover 四方同步與 SVG 關聯；原頁主控台亦回歸。
- 沒有把 Chrome 缺少 touch／media emulation 的能力空白寫成通過；報告清楚拆分 Chrome 實際 mouse pointer、自動化 touch event 測試與未執行的 reduced-motion 實機模擬。

## 剩餘風險

- 尚缺可提供真實 touch device emulation 的瀏覽器控制 surface，因此 22 CSS px 最近熱點雖有 production event 測試，仍建議未來在 Android／iOS 實機補一次手指點按、拖曳與雙指驗證。
- 尚缺 `emulateMedia`，建議在可用 Playwright/CDP media emulation 的環境補 `prefers-reduced-motion: reduce` computed transition／animation 實測。
- 靜態降級的 fault injection 以單元／整合測試為主；若後續有可攔截單一 script 的瀏覽器環境，可補一筆缺 BikeAnatomy 的瀏覽器畫面證據。

## Round 2：screen-space marker、fallback 排版與 gesture 幾何

本節是 2026-08-25 Round 2 的增量修正與最新驗證基準；本節的 84 項 focused、311 項完整測試與兩個新提交 SHA 取代上方 Round 1 的 76／303 基準。正式路線、`Data.routes`、`TrackManifest` 與 tracks 仍未修改。

### 根因與最小修正

1. `.bike-anatomy-fallback { display:grid }` 是 author rule，單靠 HTML `hidden` 沒有可靠退出排版。百科 scope 新增精確 `[data-bike-fallback][hidden] { display:none !important; }`；成功 mount 為 0 rect，destroy 後移除 `hidden` 並恢復 grid 排版。
2. SVG user-unit 字級在 237px 寬窄版只呈現約 4 CSS px，不能代表 screen-space 觸控目標。diagram wrapper 改為 `position:relative`，建立 32 個 native HTML button overlay marker；桌機隱藏、`40rem` 以下顯示 01–32、每個至少 44×44 CSS px，並隱藏原 SVG hotspot／leader／label 層，避免雙重可見與雙重焦點。
3. marker 與 SVG 是 sibling，SVG 上的 gesture listener 收不到 marker 事件。pointer lifecycle 移到共同 diagram surface；touch／pen 不略過 direct target，pointer state 記錄 `directPartId`，只有無移動且未進入多指狀態才選 direct part 或 22 CSS px 內最近 hotspot。
4. 原先把 client delta 直接當 viewBox unit，237px SVG 上手指移 40px 只造成約 9.9px 視覺位移。現在依實際 SVG rect、960×520 viewBox 與 preserve-aspect-ratio letterbox scale，把單指 delta 與雙指 midpoint delta 先換成 viewBox unit。
5. Chrome 在 320px 揭露飛輪 marker 中心被上層 axle marker 攔截。surface mouse click 以實際座標最近 hotspot 決定零件，再退回 direct target；因此 DOM 疊放順序不再改變使用者意圖。

### Round 2 TDD RED → GREEN

| 範圍 | RED | GREEN |
|---|---|---|
| hidden fallback、diagram surface、HTML marker、direct gesture、非 1:1 delta | `node --test tests/css.test.js tests/bike-anatomy.test.js`：37 項中 29 通過、8 失敗；精確暴露缺 hidden override、surface／overlay、marker 行為與 237×128 delta 換算 | 同命令 37/37 通過；首次六檔 focused 為 83/83 |
| marker 編號補零 | Chrome 顯示 `1` 而非 `01`；`--test-name-pattern="screen-space HTML marker"` 為 1 失敗、25 skipped | marker 文字與 aria-label 共同使用 `padStart(2, "0")`；同命令 1 通過、25 skipped |
| 重疊 marker 最近點 | Chrome 在 320px 點飛輪後實際選成貫通軸／快拆；新增 `--test-name-pattern="重疊 marker"` 回歸先失敗 | surface click 依座標選最近 hotspot；同命令 1 通過、26 skipped，Chrome 飛輪重驗成功 |
| 最終 focused | 六檔 fresh 執行 | 84/84 通過、0 失敗、0 skipped |

最終 focused 命令：

```powershell
node --test tests/app.test.js tests/render.test.js tests/bike-anatomy.test.js tests/bike-parts.test.js tests/css.test.js tests/pages-workflow.test.js
```

### Round 2 Chrome 真實瀏覽器證據

- 1440 桌機正式頁：document `clientWidth=1425`、`scrollWidth=1425`；成功增強後 fallback 為 `hidden=true`、computed `display:none`、rect 0×0，32 個 details 留在 DOM，fatal error 為 0。
- 1440 lifecycle fixture：使用正式 CSS、Render、BikeParts、BikeAnatomy。mount 後 fallback `hidden=true`／`display:none`／0×0、enhancement 1；按可見 destroy 按鈕後 fallback `hidden=false`／`display:grid`／1373×1712、enhancement 0，32 個 details 恢復排版。
- 390×844：內容寬 375px，document client／scroll 均為 375px；32 個 marker 最小 rect 44×44px、computed 字形 12.48px、文字 01–32；overlay `display:block`、原 SVG hotspot layer `display:none`。鏈條雖與多個 marker 幾何重疊，Chrome mouse click 後標題為「鏈條」、pressed 為 true，狀態播報同步。
- 320×844：內容寬 305px，document client／scroll 均為 305px、`html min-width=0px`；32 個 marker 最小 44×44px、字形 12.48px，SVG 237×128.375px。首次點飛輪實際誤選 axle；修正後重驗標題為「飛輪」、cassette pressed true、axle pressed false、播報為「已選取 23 飛輪。」。
- 1440 最後重驗：fallback 維持 `display:none`／0 rect，fatal error 0，document client／scroll 均為 1425px。
- 本機頁面沒有 site-origin error／warn。Chrome log 有一筆 `chrome-extension://` 翻譯擴充功能 token error，來源不是本站，已誠實保留。沒有建立畫面擷取檔；本輪 local tab 已關閉、HTTP server 已停止，使用者原有 tabs 保留。

Chrome 控制 surface 沒有 touch device emulation；以上 390／320 點選是 Chrome mouse pointer。direct marker、direct SVG hotspot、marker＋背景、marker＋marker、SVG hotspot＋背景，以及 237×128.375 rect 的單指／雙指 midpoint 換算，均由 production event 測試驗證，不冒稱為實機 touch。Round 1 已確認此 runtime 亦無 `emulateMedia`，本輪沒有把 reduced-motion 靜態規則冒充真實 media emulation。

### Round 2 最終命令與提交

| 命令／檢查 | 最新結果 |
|---|---|
| `git diff --check` | exit code 0；無空白錯誤 |
| focused 六檔 | 84/84 通過 |
| `npm run verify` | exit code 0；311/311 通過 |
| published track validator | 23 個 bundle、68 條路線通過 |
| 受版控敏感檔名掃描 | 0 筆 |
| 非預期敏感內容／危險 DOM sink | 0 筆；其餘命中只在既有文件掃描命令與測試 DOM guard |
| `git diff HEAD~2..HEAD --name-only -- js/data/routes.js js/data/track-manifest.js js/data/tracks` | 0 筆 |
| `git status --short` | 無輸出（本報告位於已忽略的 `.superpowers/`） |

1. `fed7d3cea9c2e50253fa438539649d24798413b6` — `fix: 改善行動版零件標記互動`
2. `989e01d5d7429b28237cc0e14dca254dab6bedf0` — `docs: 更新行動版部件驗證`

### Round 2 兩輪自評

- 第一輪聚焦語意與幾何契約：用真 HTML button 建立 screen-space 目標，把 gesture ownership 拉到共同 surface，並以 237×128 的精確 rect 反證 raw client delta。這些測試會在原實作上失敗，不以 CSS source regex 代替行為。
- 第二輪以 Chrome 檢查真 CSS cascade、0 rect、44×44 rect、字形與重疊點選。飛輪誤選是瀏覽器才暴露的 DOM 疊放問題；補 production 行為回歸後只修最近點決策，沒有延伸非阻斷視覺微調。

### Round 2 剩餘風險

- 仍缺 Android／iOS 或可模擬 touch device 的控制 surface；建議後續補實機單指、雙指與 pen 驗收。
- 32 個 44px marker 在 320px 必然有大量視覺重疊；最近 hotspot 已確保 mouse 座標意圖，鍵盤仍可逐一到達 32 個 native button，但密集區的實機手指可讀性仍值得裝置驗證。
- 此 Chrome runtime 無 `emulateMedia`；`prefers-reduced-motion` 仍只有精確 media-block 測試，沒有宣稱真實 media 模擬通過。

## Round 3：拖曳後合成 click 與單一路徑選取

本節是 2026-08-25 最後一輪增量修正；最新現行基準為 focused 87 項、完整 314 項。Round 1／2 的數字保留為歷史 TDD 證據，不再代表現行基準。

### 根因與最小修正

- 真瀏覽器在 mouse `pointerup` 後仍會產生 bubbled `click`。Round 2 的 surface click 最近點會把拖曳終點當成選取意圖；例如 1.25 倍下從下管附近背景向右拖 60 CSS px，圖面隨手移動後，下管 hotspot 正好落到 mouseup／click 座標，因而誤選。
- 新增一次性 `suppressNextClick` token。任一 active pointer sequence 為 moved、hadMultiple、cancel、非預期 lost capture，或 touch／pen 已於 pointerup 直接選取時，下一個 surface click 先消費 token 並 return；新的 pointerdown 會清除 stale token，因此不會永久吞掉後續正常 click。
- 正常 pointerup 後的預期 pointer-capture release 已先從 pointer map 移除；後續 `lostpointercapture` 不會誤把每次普通 click 都標成 suppression。
- diagram 內 SVG hotspot 與 HTML marker 移除 child click handler，滑鼠與 native marker synthesized click 統一由 surface delegated click 選取。SVG `role=button` 保留自訂 Enter／Space keydown；HTML native button 交由瀏覽器產生 click；靜態分類按鈕仍保留自己的 click／keydown。

### Round 3 TDD RED → GREEN

| 階段 | 命令 | 結果 |
|---|---|---|
| RED | `node --test tests/bike-anatomy.test.js` | 30 項中 26 通過、4 失敗。四個預期失敗分別為：HTML marker keydown 被自訂 handler 攔截、hotspot bubbled click 播報 2 次、768×416／scale 1.25 背景拖 60px 後誤選下管、multi／cancel／lost／touch-direct 後的 synthesized click 未被抑制 |
| Anatomy GREEN | 同上 | 30/30 通過 |
| Focused GREEN | `node --test tests/app.test.js tests/render.test.js tests/bike-anatomy.test.js tests/bike-parts.test.js tests/css.test.js tests/pages-workflow.test.js` | 87/87 通過、0 失敗、0 skipped |
| 完整 GREEN | `npm run verify` | 314/314 通過；published validator 23 個 bundle／68 條路線 |

回歸以真 production module 與 Fake DOM 事件邊界執行：drag 案例手工固定 768×416 rect、1.25 倍、下管座標與 60 CSS px delta；bubbled duplicate 案例依序執行 child 與 surface handler，會在舊 production 上得到兩次 announcement。multi、cancel、active lost capture、touch direct selection 均驗證只吞下一個 click，第二次正常 click 仍可選取。

### Round 3 Chrome 真實 mouse 證據

- Chrome viewport 設為 768×1024；document client／scroll 均為 753px，SVG rect 為 655.5625×355.09375px，CSS scale 為 `0.6828725961538461`。
- 點「放大」後 viewport transform 為 `translate(0 0) scale(1.25)`，初始標題「上管」。
- 以真 mouse 從下管 hotspot 右側 18 CSS px 的背景點 `(531.9257061298076, 791.580078125)` 拖到 `(591.9257061298076, 791.580078125)`，水平距離精確 60 CSS px。
- 拖曳後 transform 為 `translate(87.86412039074189 0) scale(1.25)`，證明 pan 生效；標題仍為「上管」、top pressed true、down pressed false，status 仍為「圖解縮放為 1.25 倍。」，合成 click 沒有誤選。
- 緊接著以 Chrome 正常 click 點 SVG 鏈條，標題改為「鏈條」、chain pressed true、top pressed false、status 為「已選取 22 鏈條。」，transform 保持不變，證明 token 沒有永久吞掉下一次 click。
- Chrome dev logs 的 warn／error 為 0。本輪沒有建立畫面擷取檔；臨時 viewport 已 reset，Round 3 local tab 已關閉、HTTP server 已停止，使用者原有 tabs 保留。

### Round 3 文件與最終閘門

- README、`docs/PLAN.md`、`docs/TEST-PLAN.md`、`docs/VERIFICATION.md` 的現行基準已同步為 314；focused 同步為 87。
- `rg` 掃描上述四份現行文件的 303／311／84 舊基準為 0 筆；`docs/TEST-PLAN.md` 的歷史 264 快照未修改。
- `git diff --check` exit code 0；受版控敏感檔名 0、非預期敏感內容／危險 DOM sink 0、`HEAD~2..HEAD` 受保護 routes／manifest／tracks diff 0。

### Round 3 提交

1. `315bb4e21ccdd6560fd451bd37be65ac92cc0e42` — `fix: 阻止圖解拖曳後誤選部件`
2. `af537eb4041f0188d0827029a4be198273f8b42f` — `docs: 更新圖解互動驗證基準`

### Round 3 自評與剩餘風險

- 第一輪以精確 60px production-like 回歸證明 click 是 pointer sequence 的後續事件，而不是 pan reducer 或最近點換算錯誤；最小修正只在 gesture／click 邊界維護一次性 token。
- 第二輪用真 Chrome CUA mouse drag 重驗，不以單元事件冒充真 synthesized click；同時用下一次正常鏈條 click 反證 suppression 不會 sticky。
- HTML native Enter／Space 的 synthesized click 由 Chrome 既有 Round 2 真鍵盤／click 證據與本輪 delegated production test共同覆蓋；SVG 自訂 keydown 仍有專用測試。Chrome drag 本輪沒有逐鍵重跑完整鍵盤矩陣。
- 既有能力界線不變：此 Chrome surface 沒有 touch device emulation 與 `emulateMedia`，因此不宣稱實機 touch 或真 reduced-motion media 模擬。

## Round 4：取消手勢後第一次鍵盤 activation

本節是 2026-08-27 使用者核准的最後增量修正；現行基準為 Anatomy 33 項、focused 90 項、完整 317 項。Round 1–3 的數字保留為歷史 TDD 證據，未回寫或改動。正式路線、`Data.routes`、`TrackManifest` 與 tracks 均未修改。

### Systematic debugging 四階段與根因

1. **Root cause investigation**：在修正 base `af537eb4041f0188d0827029a4be198273f8b42f` 先 fresh 執行 `node --test tests/bike-anatomy.test.js`，既有 30/30 通過。逐行追蹤 Round 3 的 `suppressNextClick` 資料流後，確認 `pointercancel` 與 active pointer 的 unexpected `lostpointercapture` 都會留下 token；diagram surface 的 delegated click handler 則在辨識 click 來源前無條件 consume token 並 return。
2. **Pattern analysis**：Round 3 的 moved／multi／touch-direct pointer sequence 需要一次性 suppression，新的 `pointerdown` 也必須繼續清除 stale token。差異只在後續 click 的來源：真 pointer-synthesized click 使用 `detail=1`；native HTML marker 的鍵盤／程式化 activation 使用 `detail=0`，fixture 與瀏覽器可同時給空 `pointerType`。Repository 內沒有其他 click-source classifier 可直接沿用。
3. **Hypothesis**：若 delegated click 先以 `detail===0` 分類，鍵盤／程式化 activation 可清除 stale token 後繼續 nearest／direct selection；其他 click 才 consume token 並 return，便能同時保留 gesture 防誤選。
4. **Implementation**：先加入四組 production-event 行為契約並取得正確 RED；production 僅在既有 surface click handler 加入 `detail===0` 分流，沒有新增 child click handler、重複播報或其他重構。

### Round 4 TDD RED → GREEN

| 階段 | 命令 | 結果 |
|---|---|---|
| Baseline | `node --test tests/bike-anatomy.test.js` | 30/30 通過，確認修正前工作樹與既有基準正常 |
| RED | 同命令 | 新增測試後 33 項中 31 通過、2 失敗。`pointercancel → click(detail=0, pointerType="")` 實際仍為「上管」而非「鏈條」；unexpected `lostpointercapture` 後實際仍為「上管」而非「座墊」。兩者均精確證明第一次鍵盤 click 被 stale token 吞掉，並非 fixture 或 marker setup error |
| 首次 GREEN 檢查 | 同命令 | production 分流後 selection 已成功；32 項通過、1 項只因測試手填座墊編號誤寫為 06，production 實際正確播報目錄編號 14。把獨立期望 literal 修正為 14 後再 fresh 執行 |
| Anatomy GREEN | 同命令 | 33/33 通過、0 失敗、0 skipped |
| Focused GREEN | `node --test tests/app.test.js tests/render.test.js tests/bike-anatomy.test.js tests/bike-parts.test.js tests/css.test.js tests/pages-workflow.test.js` | 90/90 通過、0 失敗、0 skipped |
| 完整 GREEN | `npm run verify` | exit code 0；317/317 通過；published validator 為 23 個 bundle／68 條路線 |

四組新增／校正契約鎖定：

- `pointercancel` 後第一個 native marker 鍵盤 click 立即選取鏈條且只播報一次。
- unexpected `lostpointercapture` 後第一個同類 click 立即選取座墊且只播報一次。
- moved、multi、touch-direct gesture 後的 `detail=1` pointer-synthesized click 仍只吞一次，第二個普通 click 可選取。
- cancel 後若先開始新的普通 pointer sequence，新的 `pointerdown` 會清除 stale token，第一個正常 click 可選取飛輪。

Mutation check：移除 `detail===0` 分流會使前兩項失敗；移除 pointer click 的 consume／return 會使 moved／multi／touch-direct 播報次數失敗；移除 `pointerdown` 的 stale-token 清除會使普通 pointer sequence 失敗。

### 最終命令、安全與正式資料 guard

| 命令／檢查 | 結果 |
|---|---|
| `node --test tests/bike-anatomy.test.js` | 33/33 通過 |
| focused 六檔 | 90/90 通過 |
| `npm run verify` | 317/317 通過；23 個 bundle／68 條路線 |
| `git diff --check` | exit code 0；沒有空白錯誤，僅既有 LF→CRLF 行尾提示 |
| 受版控敏感檔名掃描 | 0 筆 |
| production 憑證／危險 DOM 掃描 | 0 筆非預期命中 |
| 全域核准模式掃描 | 15 筆；全為既有文件中的掃描命令／安全說明，或 `tests/bike-anatomy.test.js` 的 Fake DOM `innerHTML` guard，沒有憑證值、私人金鑰或 production sink |
| `git diff --name-only af537eb4041f0188d0827029a4be198273f8b42f -- js/data/routes.js js/data/track-manifest.js js/data/tracks` | 0 筆 |
| current docs | README、`docs/PLAN.md`、`docs/TEST-PLAN.md`、`docs/VERIFICATION.md` 只同步現行 90／317 基準；歷史快照未修改 |

### 提交、自評與限制

- Production／tests／current docs 提交：`59479cab5df22d9cc13654550c856b246ee0c0a9` — `fix: 修正取消手勢後首次鍵盤選取`。
- 第一輪自評聚焦事件分類與 TDD 誠實性：期望值皆為手工 literal，測試操作真 `BikeAnatomy.mount` 與 diagram surface handlers，沒有對 mock 行為下斷言。Production 只有一個局部分流；SVG `role=button` 的自訂 Enter／Space、native HTML marker browser click、nearest/direct selection、announcement 與 destroy cleanup 路徑均未改寫。
- 第二輪自評逐項比對 brief：cancel／lost 的 `detail=0` 首次 activation、moved／multi／touch-direct 的 `detail=1` 一次性 suppression，以及新 pointerdown 清 token 均有獨立可觀察結果；fallback、zoom／pan、hover、RWD 與受保護正式資料均由既有 focused／完整回歸守住。
- 本輪沒有以真瀏覽器故障注入 `pointercancel` 或 unexpected `lostpointercapture` 後再按鍵；證據是 production module 的精確事件邊界自動測試，不冒稱為 Chrome fault-injection 實測。Round 1–3 已記錄的 touch device emulation 與 `emulateMedia` 能力限制不變。
- Fix commit 完成後 `git status --short` 無輸出；本 Round 4 報告由後續獨立文件提交承載，提交後會再次檢查工作樹、完整測試與 protected-route guard，不 push。
