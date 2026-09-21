# 狂輪誌首版驗證紀錄

## 現行驗證：2026-09-21 比翼雙飛站內軌跡

- 使用者由 Garmin Connect 公開課程 354424569 匯出的原始 GPX 已納入：1 段、16,661 點，站內計算 92.472 km；原始檔與 canonical geometry 均鎖定 SHA-256。
- `npm run verify`：411／411 測試通過；正式道路軌跡仍為 23 個 bundle、69 條路線，GPS Art 維持在獨立圖鑑。
- 單元測試把站內下載 GPX 重新解析，與原始 Garmin GPX 逐點、逐段及海拔一致；單一來源紀錄可離線重建，且須通過原始位元組雜湊。整套匯入仍需連線取得其他公開來源，不宣稱完整流程可離線執行。
- 系統 Chrome 實測：首頁作品卡顯示 92.4 km／爬升 1,423 m，Leaflet 呈現雙鳥展翅輪廓；「自行車」「可下載 GPX」「站內地圖」三種篩選均可找到作品，下載檔名為 `比翼雙飛.gpx`，頁面例外 0。
- 圖鑑現為 30 件＝10 `track-ready`＋0 `source-download`＋20 `source-only`。里程與爬升採 Garmin 頁面標示；軌跡不是即時路況或安全認證。
- 為保留全部 16,661 點，本次接受既有 eager 軌跡檔增加；發布預算鎖定原始檔不超過 4.3 MB、gzip 不超過 525 KB。390px 系統 Chrome 新頁面載入至首頁主標三次為 3,154／533／612 ms（首次含冷啟動），互動檢查通過。後續若再加入大型軌跡，應先改為按需載入。
- 本節為本機發布候選驗證；GitHub Pages 結果於推送後另行確認。

## 歷史快照：2026-09-14 挑戰方向、GPS Art、百科與導覽

- 更正舊驗證結論：原東線起點距新北市官方三貂角燈塔座標約 4.6 km 直線距離，未包含燈塔接段；下方歷史紀錄的「燈塔外接點／完整一日雙塔」敘述不再成立。本次保留幾何並在卡片及 GPX 前警示，不冒稱完整東雙塔。
- 研究工具匯入測試禁止網路；主程式入口保護經 RED／GREEN 驗證，CI 不會因匯入函式而執行來源下載。
- `npm run verify`：407／407 測試通過；23 個 bundle、69 條路線驗證通過。
- 系統 Chrome 自動檢查：導航後 scrollY=0、16 張挑戰卡、GPS Art 首頁 12 張卡；4 份新增作品及西／東雙塔 GPX 均捕捉到下載事件，頁面例外為 0。
- 百科 32 個分類按鈕逐一選取，詳解標題皆正確；桌機及 390px 截圖核對，下管連接頭管下端，窄版無水平溢位。幾何測試另核對全部 32 個錨點。
- 地圖截圖核對：新 `challenge-west-twin-towers` 沿西部南下，原 `challenge-twin-towers` 保留東部南迴；舊儲存內容不會轉移到西線。
- 新增芝山大恐龍、小恐龍、2024、高雄小恐龍，圖鑑共 29 件，其中 9 件具站內軌跡及 GPX。新增來源雜湊、點數及 GPX 往返逐點一致測試均通過。
- 道路界線：西線約 13.1 km 側道未有明示自行車權限及鋪面證據；已於 GPX 前警示，並非實地通行認證。東進武嶺、中雙塔、東三塔、兩種環島、環小台北、環大台北、如來神掌共 8 項僅有來源及行程，完整 GPX 尚待查核，不列為完成軌跡。
- 本節為本機發布候選驗證；GitHub Pages 結果於推送後另行確認，不沿用下方歷史部署結論。

## 歷史快照：2026-08-31 三條 GPS Art 站內軌跡與分頁

本輪新增河濱海馬、野雁西飛、汐鴿三件 GPS Art，production catalog 現為 25 件＝5 `track-ready`＋0 `source-download`＋20 `source-only`。三件都有站內軌跡與一鍵 GPX；全部圖鑑每頁 12 件，篩選與正式路線分頁狀態相互獨立。正式路線維持 23 個公開 bundle／68 條路線，公路車部件百科維持 4 個分類／32 筆內容。

| 驗證項目 | 結果 | 證據 |
|---|---|---|
| 完整自動測試 | 通過 | `npm test`：396／396；含三件新增軌跡 provenance、地圖－GPX 逐段逐點一致、圖鑑 12 件分頁／重設／頁碼限制 |
| 真實來源匯入 | 通過 | 河濱海馬公開 GPX 4,221 點；野雁西飛 BRouter 道路重建 2,436 點；汐鴿官方 GPX 7,028 點；必要來源皆符合台灣 bounds 與 500 公尺相鄰點閘門 |
| 正式資料隔離 | 通過 | GPS Art 未加入 `TrackManifest`；published validator 仍由 `npm run verify` 檢查 23 bundle／68 路線 |
| 真瀏覽器桌機 | 通過 | Chrome 1440×900：全部 25 件為 12／12／1 三頁；站內地圖篩選精確顯示 5 件、5 張 Leaflet 地圖與 5 個下載控制；河濱海馬、野雁西飛、汐鴿按鈕逐一產生「已準備下載…GPX」狀態；主控台 warn／error 0 |
| GPX 下載證據界線 | 通過／有界線 | Chrome 控制介面未捕捉程式建立 Blob 的 download event，因此不將事件攔截列為通過；`tests/gpx.test.js` 會把三份站內 GPX 重新解析並與地圖 `segments` 逐段逐點比對，按鈕點擊與狀態播報由真瀏覽器驗證 |
| 真瀏覽器窄版 | 通過既定界線 | 390 outer／375 client px：`scrollWidth=375`，五個篩選均 47.6px；320 outer／305 client px：`scrollWidth=320`，保留既有 `html min-width:20rem` 所致 15px 差；兩者皆為單欄且顯示 5 張地圖 |
| GitHub Pages | 通過 | 功能提交 `85f69a96f0950e51006636a87ed95476373d9f94` 的 [Actions run 33451038125](https://github.com/andychung0214/crown-ride-atlas/actions/runs/33451038125) 結論為 `success`；首頁、catalog、tracks 均為 HTTP 200；公開 `#/route-art` 實測 25 件、12／12／1 三頁、5 張地圖與三件新增作品下載狀態 |

## 歷史快照：2026-08-30 公路車零件定位校正

本節記錄 2026-08-30 當時 32 個公路車零件位置逐一校正後的發布候選證據，並保留當時 GPS Art 來源下載狀態的回歸結果。production catalog 當時為 22 件＝2 `track-ready`＋0 `source-download`＋20 `source-only`；另有 19 件 ShapeMiles 遭拒候選，未加入 catalog。正式路線當時維持 23 個公開 bundle／68 條路線，公路車部件百科維持 4 個分類／32 筆內容。

### 零件定位校正證據

| 檢查 | 結果 | 實際證據 |
|---|---|---|
| 32 項圖形與錨點契約 | 通過 | `tests/bike-anatomy.test.js` 逐一要求 32 個唯一 `data-bike-part-shape`，並實際解析 line／circle／rect／Q/C path，計入 stroke 寬度、填色與旋轉後驗證錨點命中著色區；上／下管、車架座管、座桿、前後變速器、吊耳、導輪、飛輪、貫通軸、碟盤、卡鉗、氣嘴與輻條均有獨立可見圖形 |
| Focused 回歸 | 通過 | `node --test tests/bike-parts.test.js tests/bike-anatomy.test.js tests/render.test.js tests/app.test.js tests/css.test.js tests/pages-workflow.test.js` exit code 0；100 項通過、0 項失敗 |
| 重疊觸控解算 | 通過 | 237px 實際比例下，以最上層貫通軸 marker 作 DOM target、觸控座標置於飛輪中心；修正後 pointerup 依最近熱點選到飛輪，與 mouse click 策略一致 |
| 行動版標記 TDD | 通過 | RED 精確暴露行動版 marker 缺少獨立可見編號；GREEN 後 44×44px 按鈕保留，內部改為 30px 編號圓，結構與 CSS focused 合計 51／51 通過 |
| Edge 實際渲染 | 通過 | 本機靜態站 `#/bike-parts` 以 Edge headless 390×1600 實際渲染；32 個 30px 編號圓可見，車架與輪組較原 44px 實心圓清楚；此證據為畫面渲染，不冒稱真實觸控裝置操作 |
| 完整驗證 | 通過 | `npm run verify` exit code 0；389 項通過、0 項失敗；published validator 為 23 個 bundle／68 條路線 |
| 正式資料隔離 | 通過 | 本輪不修改 `js/data/routes.js`、`js/data/track-manifest.js`、`js/data/route-art-catalog.js`、`js/data/route-art-tracks.js` 或正式 `js/data/tracks` |

### GPS Art 來源下載回歸

| 檢查 | 結果 | 實際證據 |
|---|---|---|
| 文件／資料矩陣 | 通過 | ESM 唯讀檢查比對 `route-art-catalog.js`、19 件候選 registry 與 `taiwan-gps-art.md`；精確得到 22 個 production ID、19 個 rejected candidate ID，無缺漏 |
| 日期契約 RED／GREEN | 通過 | 修改前 probe 以 `production matrix 必須有獨立作品查核日欄` 如預期失敗；拆欄後 22 件 `作品查核日` 逐字匹配 catalog `verifiedAt=2026-08-14`，12 個 Strava `原始路線連結查核日=2026-08-28`，其餘 10 件為 `—`；19 件候選仍各自維持 2026-08-28，未混入 production 日期 |
| Whole-plan final fix RED／GREEN | 通過 | 匯入器安全／原子輸出 focused RED：1 項通過、10 項失敗、20 項略過，明確暴露任意上游訊息、缺少 manual redirect／signal／逾時／5 MB 串流 gate／cleanup，以及缺少 `writeTracksAtomically`；最小修正後同一命令 11 項通過、0 項失敗、20 項略過 |
| Entrypoint liveness 例外 RED／GREEN | 通過 | 離線真實 child process 注入 never-settling fetch；修正前 entrypoint 在 deadline 前錯誤以 exit 0 結束，新增測試精確 RED；只移除 deadline timer 的 `unref` 後，同一測試由受控逾時路徑以 exit 1 結束並 GREEN，沒有由既有 `within` timer 遮蔽 |
| 匯入器 restricted fetch | 通過 | 初始及每跳 URL 均檢查 HTTPS、認證資訊與 host allowlist；`redirect: "manual"`、最多 3 跳、單一 `AbortController` 涵蓋 fetch 與完整 body；拒絕無 reader body，同時檢查 `Content-Length` 與逐 chunk 5 MB 上限；redirect、HTTP、HTML、大小早退及讀取失敗均取消 body；Google KML 的合法 `mid`／`forcekml` query 由行為測試保留 |
| 匯入器原子輸出 | 通過 | `writeTracksAtomically` 只接受窄 `outputPath`／`fsImpl` seam，使用目標同目錄、PID＋UUID 唯一 temp、`flag: "wx"` 與 rename；暫存目錄行為測試證明全成功覆寫，以及 write／rename failure 都保留舊產物並清除 temp，未觸碰正式 `route-art-tracks.js` |
| Fix round 1 focused 回歸 | 通過 | `node --test tests/route-art.test.js tests/route-art-catalog.test.js tests/route-art-downloads.test.js tests/data.test.js tests/track-data.test.js` exit code 0；66 項通過、0 項失敗；另以唯讀矩陣 probe 逐件核對 22 件 production、12 個 Strava 連結與 19 件候選 |
| Parser／verifier／importer focused 回歸 | 通過 | `node --test tests/route-art-catalog.test.js tests/route-art-source.test.js tests/route-art-downloads.test.js` exit code 0；73 項通過、0 項失敗、0 項略過 |
| GPS Art focused 回歸 | 通過 | 原 Task 6 指定 focused 集合加上本輪 9 項回歸後為 192 項；parser／verifier／importer 的 73 項精確集合另列於上一列 |
| 完整驗證 | 通過 | `npm run verify` exit code 0；389 項通過、0 項失敗；published validator 為 23 個 bundle／68 條路線 |
| Production catalog | 通過 | Node 契約與 controller 瀏覽器 DOM 都是 22／2／0／20；12 個精確 Strava route/activity 連結皆顯示可能要求登入；production 外站下載連結為 0 |
| Git 空白檢查 | 通過 | `git diff --check 8bc75de..HEAD` exit code 0；whole branch 無空白錯誤，設計規格第 3 行尾端空白已移除 |
| 敏感內容掃描 | 已逐行審查 | Task 6 指定 `rg` 模式在 `scripts`、`docs/route-research`、`README.md` 唯一命中為 README 的 `.env` 安全提醒；final wave 另掃描敏感檔名與 `11a3ddb` 後的憑證值模式，均為 0 筆。測試中的 Cookie／Authorization／secret counterexample 是明示假值，用來證明不會輸出上游文字；沒有真實憑證值、Bearer 指派、私人金鑰、GPX XML 或座標產物 |
| 下載摘要產物 | 不存在（符合現況） | `js/data/route-art-downloads.js` 不存在，匹配暫存檔為 0；因此不能把「檔案不存在」寫成產物內容安全掃描通過。無座標 serializer 與拒絕 geometry／coordinate／GPX XML 的行為由 focused tests 覆蓋 |
| 受保護資料 | 通過 | final fix 只修改匯入器、其行為測試、規格空白與本驗證紀錄；`js/data/routes.js`、`js/data/track-manifest.js`、`js/data/route-art-tracks.js`、正式 `js/data/tracks` 與 `js/data/route-art-catalog.js` 均無本輪 diff；production 維持 22／2／0／20，正式軌跡維持 23 個 bundle／68 條路線 |

### 來源與權利結論

- 2026-08-28 現場匿名查核對 19 個 ShapeMiles 精確 allowlist 端點得到 19/19 HTTP 401；官方頁面顯示 GPX 下載需要訂閱。驗證器依全成才規則未建立正式摘要或暫存檔，沒有格式、SHA-256、segments、points、bounds 或座標可記錄。
- 本輪沒有使用登入 Cookie、Authorization、OAuth、私人活動或瀏覽器既有登入狀態，也沒有停用 TLS、放寬 allowlist、台灣 bounds 或 500m 同段跳點閘門。
- 正式圖鑑的 12 個 Strava route/activity 頁全部維持 `login-required` 與 `source-only`，只提供查看原始路線，不宣稱匿名 GPX。
- 三狀態與來源端下載 UI 已以 synthetic fixture 驗證；production 沒有 `source-download` 卡片，所以本輪沒有、也不能宣稱 production 跨來源下載成功。

### Controller 真瀏覽器證據

- Production `#/route-art` DOM：22 張卡＝2 `track-ready`＋0 `source-download`＋20 `source-only`；有 2 張站內地圖、2 個本站 GPX 下載控制、12 個原始 route/activity 連結與登入提示、0 個來源端下載連結。
- 五個篩選控制全部可見；「可下載 GPX」實際顯示 2 件。production 沒有來源端卡片，因此此數字由兩件 `track-ready` 組成。
- 390 outer px：`clientWidth=375`、`scrollWidth=375`，無水平溢位，篩選控制至少 44px。
- 335 outer px：`clientWidth=320`、`scrollWidth=320`，無水平溢位，篩選控制高度約 47.6px。
- 320 outer px：`clientWidth=305`、`scrollWidth=320`，有 15px 水平差。這是既有全站 `html { min-width: 20rem; }` 在 Windows 非 overlay 捲軸下的界線；準確支援承諾是最小 320 CSS client px，不宣稱 320 outer px 無溢位。
- 1440px 逐一實點 `yellow`、`green`、`polka`、`white` 四套領騎衫主題；五個篩選維持可見，啟用狀態可辨識，鍵盤 `:focus-visible` 外框清楚。
- 本輪沒有真實 touch 裝置操作，也沒有 `prefers-reduced-motion` media emulation；44px 與 reduced-motion 只有 computed layout／CSS 及自動測試證據，不冒稱為實機通過。
- 本輪沒有重做 production 外站下載、登入後 GPX、`file://`、圖磚斷線或所有既有路由的逐頁瀏覽器回歸；對應程式路徑由 focused／完整自動測試覆蓋，但不把自動測試改寫成瀏覽器實測。

### 審查與發布界線

- 依 Task 6 規格逐項自我審查來源權利、三狀態互斥、網址 allowlist、解析限制、產物幾何界線、站內 map／GPX 同源、22 與 68／23 隔離、百科回歸及外部連結安全。controller 明確禁止子代理，因此沒有獨立 reviewer；不將自我審查冒稱為獨立 code review。
- 本輪未執行 push、merge、GitHub Pages workflow 或公開站重驗；歷史 Pages 紀錄保留在下方封存快照，不代表本次提交已部署。

## 歷史驗證快照

以下章節皆為各日期當次版本的封存證據，不代表 2026-08-28 的現行數量、功能或部署狀態；歷史資料保留原值供追溯。

### 2026-08-25 公路車部件百科

本節只記錄公路車部件百科當日最終審查修正後的命令與 Chrome 證據。當時為 4 個分類、32 筆內容、`#/bike-parts`、23 個公開 bundle 與 68 條正式路線；部件百科不改動 routes 或 `TrackManifest`。

### 本輪自動驗證

| 檢查 | 結果 | 實際證據 |
|---|---|---|
| Focused 回歸 | 通過 | `node --test tests/app.test.js tests/render.test.js tests/bike-anatomy.test.js tests/bike-parts.test.js tests/css.test.js tests/pages-workflow.test.js` exit code 0；90 項通過、0 項失敗 |
| 完整驗證 | 通過 | `npm run verify` exit code 0；317 項通過、0 項失敗；published validator 為 23 個 bundle／68 條路線 |
| Git 空白檢查 | 通過 | `git diff --check` exit code 0；沒有空白錯誤，只有工作樹既有 LF→CRLF 行尾轉換警告 |
| 敏感資訊掃描 | 通過 | 受版控敏感檔名掃描為 0 筆；指定內容掃描的命中均為文件中的掃描命令／安全說明與測試 DOM guard，沒有憑證值、私人金鑰或 production 危險 DOM sink |
| 正式資料隔離 | 通過 | `git diff --name-only -- js/data/routes.js js/data/track-manifest.js js/data/tracks` 無輸出；沒有修改 routes、`Data.routes`、`TrackManifest` 或正式 tracks |

### Chrome 瀏覽器回歸證據

- 1440×900 桌機：document `clientWidth`／`scrollWidth` 均為 1425px（15px 為垂直捲軸）；正式頁成功增強後 fallback 為 `hidden=true`、computed `display:none`、rect 0×0，32 個 details 仍在 DOM，fatal error 為 0。
- 真 CSS lifecycle fixture：載入正式 Render、BikeParts、BikeAnatomy 與 CSS；掛載後 fallback 為 `hidden=true`／`display:none`／0×0 且 enhancement 為 1，按下 destroy 後為 `hidden=false`／`display:grid`／1373×1712、enhancement 為 0，32 個 details 恢復可排版。
- 桌機 hover：從 hotspot 或靜態清單進入時，hotspot、leader、文字標籤與清單四方的 `.is-hovered` 同步；實測 hotspot ring 為 4px、leader 為 2.5px 實線、label 加底線、清單加 5px 左框。Chrome 實際點擊鏈條後標題為「鏈條」、`aria-pressed=true`；此項也捕捉並修正了 SVG 畫布錯誤搶走 direct-hotspot pointer capture 的缺陷。
- SVG 無障礙：`aria-labelledby="bike-anatomy-title"`、`aria-describedby="bike-anatomy-description"` 均指向實際 `<title>`／`<desc>`；32 個 hotspot 均保留可操作語意。頭管 computed stroke 為森林綠 `rgb(36, 92, 67)`。
- 390×844：內容寬 375px，document `clientWidth`／`scrollWidth` 均為 375px；32 個 screen-space HTML marker 的最小 rect 為 44×44px、字形 12.48px、文字為 01–32，overlay `display:block`，原 SVG hotspot layer `display:none`。鏈條有多個幾何重疊但 Chrome 實際 click 後標題為「鏈條」、pressed 為 true。
- 320×844：內容寬 305px，document `clientWidth`／`scrollWidth` 均為 305px、`html` computed `min-width:0px`；32 個 marker 最小 44×44px、字形 12.48px，SVG 為 237×128.375px。首次 click 飛輪中心被上層 axle marker 截走，新增 surface 最近 hotspot 回歸與修正後，Chrome 重驗標題為「飛輪」、cassette pressed 為 true、axle pressed 為 false、live announcement 同步。
- 鍵盤與主題：同日先前 Chrome 回歸已以真實 Tab、Enter、Space 驗證百科控制與 hotspot，並驗四套主題的 focus／selected 非只用顏色表達；本輪自動測試持續鎖定 Enter／Space 行為。
- 原頁回歸：`#/home`、`#/routes`、`#/route-art`、`#/editor` 在 1440px 的 document `clientWidth`／`scrollWidth` 均為 1425px，fatal error 為 0；Chrome dev logs 的 error／warn 清單為空。
- 文字降級：無 BikeAnatomy、`mount` 拋錯、SVG 建立失敗與 destroy 後恢復，均由 App／Render／BikeAnatomy 自動測試驗證；destroy 的真 CSS 排版另由 lifecycle fixture 完成 Chrome 實測。缺 module／強制 SVG failure 未在 Chrome 故障注入，不宣稱已實測。
- Gesture 證據：diagram surface 的 production event 測試涵蓋 direct marker、direct SVG hotspot、marker＋背景、marker＋marker、SVG hotspot＋背景；237×128.375 非 1:1 rect 的單指與雙指 midpoint 40 CSS px 均換算成約 40px 視覺位移。
- 觸控證據邊界：Chrome 控制 surface 只有 viewport 與一般 pointer click，沒有觸控裝置模擬；390／320px 的實際點選是 Chrome mouse pointer。touch／pen direct part、22 CSS px 最近熱點與 gesture 防誤選由 production event 自動測試通過，不冒稱為實機 touch 驗證。
- 768×1024 真 mouse drag：縮放 1.25 倍後 SVG rect 為 655.5625×355.09375px；從下管附近背景拖 60 CSS px，transform 由 `translate(0 0) scale(1.25)` 改為 `translate(87.86412039074189 0) scale(1.25)`，但標題仍為「上管」、top pressed true、down pressed false，status 沒有選取訊息。接著正常點擊鏈條後標題為「鏈條」、pressed true、status 為「已選取 22 鏈條。」，證明 suppression 只消費一次；Chrome warn／error 為 0。
- 主控台：本機頁面沒有 fatal error；Chrome log 另有一筆 `chrome-extension://` 翻譯擴充功能 token error，來源不是本站，未把它隱藏或記成本站通過訊息。
- Reduced Motion 證據邊界：Chrome runtime 沒有 `emulateMedia` 能力，因此未執行真實 `prefers-reduced-motion` media emulation。精確 CSS media-block 測試鎖定縮減動態效果規則；此項不宣稱已完成實機 media 驗證。
- 本輪沒有建立畫面擷取檔；Chrome 測試 tab 已關閉，本機 HTTP server 已停止，使用者原有 tabs 保留。

### 2026-08-14 台灣 GPS Art 圖鑑候選版

本輪正式版新增 22 件公開來源 GPS Art 圖鑑，與既有正式路線資料隔離。其中台北櫻花 16K、台北圓環 40K 為 `track-ready`；其餘 20 件是 `source-only` 來源卡。逐件查核帳、來源 SHA-256、canonical geometry SHA-256 與段點數見 [`route-research/taiwan-gps-art.md`](route-research/taiwan-gps-art.md)。本節記錄 2026-08-14 本輪實際執行、GitHub Pages 部署與公開版 Chrome 驗收證據。

### 自動驗證

| 檢查 | 本輪結果 | 實際證據 |
|---|---|---|
| 最終審查 focused 回歸 | 通過 | `node --test tests/route-art-catalog.test.js tests/render.test.js`：37 項通過、0 項失敗；涵蓋 Mobile01 作者顯示、runtime 單件降級與軌跡 provenance |
| 公開來源重建 | 通過 | `node scripts/import-route-art-tracks.mjs`：兩個必要 KML 均成功；來源 SHA-256 仍為已核准的 `aa9ce7…9186f0`／`60b4b7…a696f`，canonical geometry SHA-256 為 `e2e3f0…e6f2bd`／`a78871…93433`；可選臥虎仍因 TLS `ECONNRESET` 維持 source-only |
| 完整驗證 | 通過 | `npm run verify`：264 項通過、0 項失敗；正式 validator 為 23 個 bundle／68 條路線 |
| 正式路線隔離 | 通過 | `Data.routes` 維持 68 條；GPS Art 不加入正式 track manifest |
| Git 空白檢查 | 通過 | `git diff --check` 無輸出、exit code 0 |
| 敏感檔名掃描 | 通過 | `git ls-files` 未找到 `.env`、`.pem` 或 `.key` 等敏感檔名 |
| 泛型憑證欄位掃描 | 通過 | 首次只命中 `docs/PLAN.md` 第 648、682 行的掃描命令自我參照；將等價欄位名稱改為分組 regex 後，以 Task 6 指定模式重跑為零匹配，未隱藏或放寬掃描範圍 |
| GitHub Pages | 通過 | 功能提交 `f7411e9f64f2ef4396d3b4e1811acff981773eb9` 的 [Actions run 31781355667](https://github.com/andychung0214/crown-ride-atlas/actions/runs/31781355667) 結論為 `success`；公開首頁與 GPS Art catalog／tracks 資料檔均為 HTTP 200 |

### 本機 Chrome 實測

- 1280px 桌機：圖鑑為兩欄；篩選按鈕實際高度 47.6px；水平溢位為 0；顯示 2 件作品地圖。台北櫻花與台北圓環的 Leaflet 線層分別為 12 與 24（每個來源 segment 各有 halo／主線），焦點輪廓為 2px。
- 390×844：圖鑑為單欄；地圖與 source-only 文字標記高度皆為 256px；水平溢位為 0。選取「有站內軌跡」後精確顯示 2 張卡、2 張地圖與 2 個下載按鈕；兩件作品的線層仍分別為 12 與 24，未因行動版合併 segment。
- 390×844 重新開啟 `#/route-art`，等待首卡可見並再等待 600ms 後，頁面標題為「路線美學｜狂輪誌」；本機 Chrome 本輪 dev logs 的 error／warn 清單為空。
- 點選台北櫻花 16K 的「下載 GPX」後，站內狀態顯示「已準備下載 台北櫻花 16K GPX。」。Chrome connector 等待 8 秒未捕捉到程式化 Blob 下載事件，因此本輪只宣稱按鈕呼叫與站內狀態成功；GPX XML、MIME、分段與 round-trip 由 Node 自動測試驗證。

### GitHub Pages 部署實測

- 功能提交：`f7411e9f64f2ef4396d3b4e1811acff981773eb9`。
- GitHub Actions：[run 31781355667](https://github.com/andychung0214/crown-ride-atlas/actions/runs/31781355667) 狀態 `completed`、結論 `success`。
- 公開網址：[https://andychung0214.github.io/crown-ride-atlas/](https://andychung0214.github.io/crown-ride-atlas/)；首頁、`js/data/route-art-catalog.js` 與 `js/data/route-art-tracks.js` 實測均為 HTTP 200。
- 公開版 Chrome：`#/route-art` 顯示 22 張卡、20 件 `source-only`、2 張真實軌跡地圖與 17 筆 CS72 作者署名；錯誤清單與水平溢位均為 0。
- 公開版 Chrome 390×844：仍顯示 22 張卡與 2 張地圖；地圖高度 256px、四個篩選控制高度 47.6px、水平溢位為 0。
- 圖磚失敗時的 SVG fallback 已有自動測試，但本輪未在公開版 Chrome 手動切斷網路，因此不宣稱該情境已完成瀏覽器實測。

### 2026-08-09 bike100 對照與路線美學修正（已驗證）

本次版本已完成公開索引功能對照與資料誠實性修正：路線索引加入區域／縣市／最陡坡度／行程時間篩選、排序、每頁 24 條分頁與「騎過此路線」本機標記；68 條公開軌跡的卡片坡度欄位直接取自各自已核准 BRouter／SRTM bundle 摘要，內建路線覆寫也拒絕竄改此欄位。坡度與行程時間級距採半開區間，涵蓋小數摘要且不留下邊界空隙。原本與實際道路幾何不符的「環小台灣」已從公開路線與 manifest 移除，audit bundle 保留供重現，路線美學頁改為誠實空狀態。

| 檢查 | 當次結果 | 證據摘要 |
|---|---|---|
| Node.js 自動測試 | 通過 | `npm test`：239 項通過、0 項失敗 |
| 路線資料完整性 | 通過 | 66 條地區路線＋2 條完整挑戰；每條公開路線均有有限 `maxGradePct` |
| 路線美學發布閘門 | 通過 | `Data.routeArt` 為空；不相符圖形只保留 audit 資料，不進入公開 manifest |
| 瀏覽器與 GitHub Pages | 通過 | Chrome 本機 HTTP 實測完成；Pages run `31321713968` 成功，公開網址 HTTP 200 |

#### Chrome 本機 HTTP 實測

- 路線索引實際渲染 24 張卡片，分頁由第 1／3 頁切換到第 2／3 頁；「北台灣＋陡坡（15–19%）＋難度由低至高」篩選回傳 2 條（石門水庫環湖、北橫巴陵線）。
- 完成標記點擊後按鈕變為「已完成 · 取消標記」，重新載入仍保留；驗證結束已切回未完成。Chrome 既有本機儲存含 1 筆使用者自訂路線，所以該工作階段索引顯示 69 筆，內建資料契約仍為 68 條。
- 路線美學頁顯示「尚無可顯示的圖案路線」與重新審核條件，未渲染不相符的環小台灣圖形。
- `challenge-north-south` 詳情實際顯示台北 → 高雄、376.5 km、2,249 m、18.1% 最大持續坡度、Leaflet 道路圖、海拔剖面與「路線資料已載入」；主控台未見阻斷性錯誤。
- 以畫面擷取確認詳情頁的道路地圖與海拔摘要區塊可見；GPX 下載按鈕可用，GPX XML 內容由 Node 單元測試驗證。

#### GitHub Pages 部署實測

- 推送 commit：`89617caefffebb491d82e6bfb528aa493f318b03`。
- GitHub Actions：[run 31321713968](https://github.com/andychung0214/crown-ride-atlas/actions/runs/31321713968) 狀態 `completed`、結論 `success`。
- 公開網址：[https://andychung0214.github.io/crown-ride-atlas/](https://andychung0214.github.io/crown-ride-atlas/)；HTTP 實測 `200`，HTML 含「狂輪誌」與 `#app` 容器。

### 歷史紀錄：2026-07-26 挑戰路線與路線美學修正驗證

> 以下數字是 2026-07-26 當次驗證的歷史快照；2026-08-09 版本已依新的道路／輪廓閘門更新公開數量，請以上方 2026-08-09 當次版本紀錄為準。

本次修正將「北高」與「一日雙塔」改為獨立的完整 point-to-point 道路軌跡，並以道路距離重採樣幾何閘門檢查路線美學。北高端點為台北 → 高雄；一日雙塔端點為三貂角燈塔外公共道路接點 → 鵝鑾鼻燈塔外台 26 公共道路接點。公開路線美學當時只保留 1 條 near-match「環小台灣道路近似」，其餘圖形因幾何不符而不公開。

| 檢查 | 結果 | 證據摘要 |
|---|---|---|
| 完整自動測試 | 通過 | `npm test`：221 項通過、0 項失敗 |
| 發佈前驗證 | 通過 | `npm run verify`：JavaScript 語法、221 項測試與軌跡驗證均成功 |
| 正式軌跡 validator | 通過 | 24 個 bundle、69 條路線；所有 published track 均為 approved |
| 北高完整路線 | 通過 | `challenge-north-south`，376.5 km、2,249 m，起點台北、終點高雄，point-to-point |
| 一日雙塔完整路線 | 通過 | `challenge-twin-towers`，470.8 km、3,443 m，三貂角燈塔 → 鵝鑾鼻燈塔，point-to-point |
| 道路政策稽核 | 通過 | 受版控原始幾何可完整重建；未核准道路政策違規 0。公共 service 與明確自行車網路短段例外均綁定距離上限、路段 SHA-256 與 HTTPS 佐證 |
| 路線美學閘門 | 通過 | 64 點道路距離重採樣；公開 near-match shapeScore 0.185、最大點誤差 0.454；大象、心形、皇冠、熊與飛鳥均拒絕公開 |
| 內嵌瀏覽器桌機 | 通過 | 首頁、挑戰索引、北高、雙塔與路線美學頁可載入；Leaflet 地圖存在；瀏覽器錯誤 0 |
| 內嵌瀏覽器行動尺寸 | 通過 | 390×844 挑戰頁無水平溢位（內容寬 375）；8 張挑戰卡可讀取 |

上述數值由當次版本庫資料與本機 HTTP 伺服器實測取得；路況、道路管制與地圖圖磚仍可能隨時間變動，出發前應重新查核。

驗證日期：2026-07-26

候選版本：`dc13c037da3d1478de84df2a37d8e7b855b56f5c`

### 自動化結果

| 檢查 | 結果 | 證據摘要 |
|---|---|---|
| Node.js 單元測試 | 通過 | `npm test`：54 項通過、0 項失敗 |
| JavaScript 語法 | 通過 | 24 個 `js/` 與 `tests/` JavaScript 檔案通過 `node --check` |
| Git 空白檢查 | 通過 | `git diff --check main..HEAD` 零錯誤 |
| 本機 HTTP 資源 | 通過 | 首頁、CSS、JavaScript、8 張 WebP、圖示、robots 與 sitemap 共 28 項回應 200 |
| DOM 安全 | 通過 | `js/` 無 `innerHTML`、`insertAdjacentHTML`、`document.write` 或 `eval` |
| 敏感資訊 | 通過 | 無憑證變數模式，且版本庫未追蹤 `.env` 或常見私人金鑰檔案 |

自動化測試涵蓋資料契約、搜尋／篩選／排序、Hash 路由、地理運算、GPX、圖片限制、四主題、本機儲存、備份匯入、Leaflet 圖磚錯誤轉 SVG、無海拔說明、刪除路線美學參考與空路線首頁。

Task 11 另驗證澎湖、金門、馬祖 9 條與路線美學 6 條：raw 禁止道路與非法逆向清零、live OSM 75/75 樣本貼路、單島 bounds、四組海拔視窗比較與路線級分析設定。

### 瀏覽器結果

| 情境 | 結果 | 證據摘要 |
|---|---|---|
| 390×844 手機 | 通過 | 無水平溢位；四主題控制項 44×44px；主控台零錯誤 |
| 768×1024 平板 | 通過 | 實際內容區 753×1024；導覽收合；無水平溢位；主控台零錯誤 |
| 1440×900 桌機 | 通過 | Leaflet 詳情與六張路線美學卡正常；無水平溢位；主控台零錯誤 |
| 四主題 | 通過 | 黃衫、衝刺綠、登山圓點、白衫均更新 `data-theme` 與 `aria-pressed` |
| 搜尋與複合篩選 | 通過 | 「風櫃嘴」＋台北市＋難度 3 僅回傳「風櫃嘴晨間線」 |
| 路線詳情 | 通過 | 標題、海拔與 Leaflet 路線正確載入，主控台零錯誤 |
| GPX 下載 | 部分通過 | UI 顯示已準備下載；自動化工具未能擷取瀏覽器下載內容，XML 內容另由單元測試驗證 |
| 編輯必填驗證 | 通過 | 空名稱無法送出，對話框保持開啟，未建立路線 |
| 建立與持久化 | 通過 | 建立暫存路線後清單由 72 變 73，重新整理後仍為 73 |
| 備份下載 | 部分通過 | UI 顯示已準備下載；自動化工具未能擷取下載內容，JSON 內容另由單元測試驗證 |

### 受工具限制、未宣稱通過的項目

- Chrome 擴充功能未開啟檔案網址權限，因此無法以瀏覽器自動上傳測試 GPX，亦無法完成 `file://` 實際開檔；GPX 解析與 `file:` SVG 選擇邏輯由單元測試及程式碼路徑檢查涵蓋。
- 當時瀏覽器控制介面未提供 `prefers-reduced-motion` 模擬；CSS 已包含對應媒體查詢，但本次未宣稱完成實機驗證。
- 自動接受刪除／重設確認視窗時瀏覽器控制連線中斷，無法證明測試瀏覽器已從 73 條回復為 72 條。這只影響該瀏覽器的 `localStorage`，不影響版本庫或網站內建資料；可在「我的路線」選擇「恢復內建資料」清除。

### 審查結果

兩輪獨立程式碼審查共發現並修正：

1. 備份匯入可能接受破壞渲染契約的資料。
2. 刪除被路線美學引用的路線會使頁面失敗。
3. Leaflet 圖磚非同步失敗不會切換 SVG。
4. 缺少海拔時顯示 `NaN`。
5. 主題觸控目標小於 44×44px。
6. 路線卡有重複主要連結。
7. 全部路線被本機標記刪除時首頁會失敗。

最終審查未發現剩餘 Critical 或 Important 程式碼缺陷。上述未完成項目維持明確標記，不作未經驗證的功能宣稱。

### GitHub Pages 部署

部署工作流程已加入版本庫，具備：

- `main` 推送與手動執行觸發。
- Node.js 22 完整測試閘門。
- GitHub Pages 所需的最小 `contents`、`pages` 與 `id-token` 權限。
- 官方 Pages artifact 與 deployment actions。

2026-07-26 首次 GitHub Pages 部署驗證：

- 部署 commit：`f08e3b7784a7415904ab59927d4e8655023c4508`
- GitHub Actions：[run 30187015443](https://github.com/andychung0214/crown-ride-atlas/actions/runs/30187015443)，狀態 `completed`、結論 `success`。
- 完成時間：2026-07-26 11:58:59（Asia/Taipei）。
- 公開網址：[https://andychung0214.github.io/crown-ride-atlas/](https://andychung0214.github.io/crown-ride-atlas/)
- HTTP 實測：首頁、`css/base.css`、`js/app.js`、`assets/icons/favicon.svg` 均回應 `200`，首頁包含「狂輪誌」識別文字。
- Chrome 實測：首頁導向 `#/home` 並正確顯示標題；直接開啟 `#/route/new-taipei-yangjin-3p` 顯示「陽金三峰｜狂輪誌」、路線標題與「下載 GPX」，主控台無錯誤。

### 北部 21 條真實道路軌跡候選驗證

驗證日期：2026-07-28

此批資料由人工命名地標、BRouter `fastbike` 道路路由與 SRTM 海拔建構。每條路線均在建構期稽核頁疊合 OpenStreetMap，並以正式驗證器重新計算摘要。這是 Task 7 的送審證據，尚未取代程式碼審查或正式部署驗證。

| 路線 ID | 距離 | 爬升 | 軌跡點 | OSM 道路稽核 |
|---|---:|---:|---:|---|
| `keelung-harbor-coast` | 19.6 km | 228 m | 445 | 潮境地標改置北寧路，排除 27 m 未授權單行道逆向段 |
| `keelung-nuannuan-hills` | 23.8 km | 345 m | 552 | 暖暖丘陵公路，禁止類別 0 |
| `keelung-waimushan-wanli` | 21.5 km | 309 m | 499 | 外木山漁港至萬里海線折返，排除 16 m 未授權單行道逆向段 |
| `taipei-fengguizui` | 25.6 km | 510 m | 554 | 風櫃嘴公路，禁止類別 0 |
| `taipei-zhongsha-road` | 8.4 km | 324 m | 257 | 中社路公路，禁止類別 0 |
| `taipei-lengshuikeng` | 31.4 km | 964 m | 775 | 格致路地標改置台 2 甲主線，排除 8 m 未授權單行道逆向段 |
| `new-taipei-yangjin-3p` | 77.7 km | 2,739 m | 2,210 | 陽金三峰公路走廊，禁止類別 0 |
| `new-taipei-north-coast` | 39.8 km | 452 m | 815 | 北海岸公路，禁止類別 0 |
| `new-taipei-buyanting` | 54.4 km | 1,469 m | 1,579 | 雙溪、不厭亭公路，禁止類別 0 |
| `taoyuan-roman-road` | 77.7 km | 1,753 m | 1,992 | 羅馬公路，禁止類別 0 |
| `taoyuan-north-cross-baling` | 92.6 km | 1,707 m | 2,695 | 台 7 北橫至下巴陵，禁止類別 0 |
| `taoyuan-shimen-loop` | 49.0 km | 928 m | 1,144 | 移除康莊路錯置地標，排除 27 m 未授權單行道逆向段 |
| `hsinchu-city-coast-17k` | 29.0 km | 65 m | 609 | 官方十七公里自行車道；OSM 有一段約 514 m 尚標 footway，已記錄官方證據與現地查核提醒 |
| `hsinchu-city-gangnan-morning` | 9.2 km | 26 m | 196 | 原十八尖山 service 方案撤回；改為官方 17 公里自行車道路廊的港南晨光短線 |
| `hsinchu-city-nanliao-xiangshan` | 19.1 km | 61 m | 413 | 原寶山內陸 service 方案撤回；改為官方 17 公里自行車道路廊的南寮香山線 |
| `hsinchu-county-five-fingers` | 29.3 km | 593 m | 725 | 無佐證寺廟 service 支線撤回；只走竹東、北埔與南清公路一般道路 |

前兩條完全改線的路線 ID 已同步更新為 `hsinchu-city-gangnan-morning` 與 `hsinchu-city-nanliao-xiangshan`，避免舊名稱誤導使用者；五指山路線仍由原入口進入北埔與南清公路，因此保留原路線 ID。公開名稱、地標、bundle、摘要與 GPX 內容均與實際路線語意一致。
| `hsinchu-county-yulao` | 34.8 km | 1,401 m | 1,154 | 竹東至宇老單向 GPX，排除 452 m 未授權單行道逆向；禁止反轉 GPX，回程另依管制安排 |
| `hsinchu-county-smangus` | 55.9 km | 2,624 m | 2,391 | 內灣至司馬庫斯單向 GPX，排除 452 m 未授權單行道逆向；禁止反轉 GPX，回程另依管制安排 |
| `miaoli-xianshan` | 59.8 km | 1,424 m | 1,493 | 汶水與獅潭地標改置正式公路，排除 34 m 未授權單行道逆向段 |
| `miaoli-jiangmayuan` | 38.6 km | 1,239 m | 1,015 | 苗 49、縣道 130 至薑麻園，禁止類別 0 |
| `miaoli-coast` | 31.5 km | 106 m | 681 | 官方綠光海風中南段，移除好望角與車站 footway 捷徑後禁止類別 0 |

#### 2026-07-29 單行道逆向再稽核

新建構閘門會從 BRouter raw `messages` 檢查同段同時出現 `reversedirection=yes` 與 `oneway=yes` 的情形。只有 `oneway:bicycle=no`、`bicycle:backward=yes|designated|permissive`，或 `cycleway`／`cycleway:left`／`cycleway:right`／`cycleway:both` 明標 `opposite|opposite_lane|opposite_track|opposite_share_busway` 才能放行；`route_bicycle_*` 與非逆向例外的 `shared_lane` 不算合法例外。

| 路線 ID | 舊 raw 訊息 | 修正 |
|---|---|---|
| `keelung-harbor-coast` | `25.142573,121.802562` · 27 m · service | 潮境地標移至北寧路 |
| `keelung-waimushan-wanli` | `25.131567,121.739871` · 16 m · tertiary | 起終點改至外木山漁港雙向道路 |
| `taipei-lengshuikeng` | `25.155210,121.546045` · 8 m · service | 移除管理處支點，格致路地標改至台 2 甲主線 |
| `taoyuan-shimen-loop` | `24.827953,121.267477` · 27 m · primary、`cycleway:right=shared_lane` | 移除康莊路冗餘地標 |
| `hsinchu-county-yulao` | `24.667996,121.281100` · 452 m · unclassified | 改為竹東至宇老單向 point-to-point |
| `hsinchu-county-smangus` | `24.667996,121.281100` · 452 m · unclassified | 改為內灣至司馬庫斯單向 point-to-point |
| `miaoli-xianshan` | `24.452780,120.874988` · 34 m · residential | 汶水、獅潭地標移至台 3／縣道 124 |
| `changhua-coast` | `24.077300,120.401185` · 32 m · service | 白蘭氏地標移至東側鹿工路 |
| `nantou-shanlinxi` | `23.649938,120.787554` · 682 m · unclassified | 移除偏離軌跡約 181.7 m 的忘憂森林地標 |
| `yunlin-kouhu-coast` | `23.620167,120.140201` · 421 m · residential | 萡子寮地標移至市街雲 131 |

修正後 11 條 raw messages 均無未授權單行道逆向段；再以同一閘門重產北部＋中部 11 個 bundle／33 條路線，沒有清單外失敗。

驗證命令與結果：

- `node scripts/validate-tracks.mjs --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli --staging`：7 個 bundle、21 條路線通過。
- `node scripts/generate-tracks.mjs --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli --publish`：發布 7 個 bundle、21 條路線。
- `node scripts/validate-tracks.mjs --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli --published`：7 個 bundle、21 條路線通過。
- 本機 HTTP 實際網站逐條開啟北部與中部 33 個 `#/route/<id>`：33/33 均顯示相符路線識別、「路線資料已載入」、Leaflet、海拔剖面與 GPX 下載控制，資料載入失敗為 0。
- 本次抽查「風櫃嘴晨間線」、「陽金三峰」與「仙山靈洞宮」：3/3 均顯示 Leaflet、海拔與坡度剖面、可用 GPX 下載控制及「髮夾彎與局部高曲率道路會加密取樣」說明；網站程式主控台錯誤為 0。
- 「司馬庫斯部落挑戰」正常詳情頁實測顯示 2 至 3 公尺狹路、車輛單向時段、櫻花季總量管制、非全天候自由通行與查核主管機關最新公告；同頁明示 500m／100m 路線級濾波與未匯入外部 GPX。
- 軌跡產生器 focused 測試：49/49 通過；完整 `npm test`：186/186 通過。

三條深谷／山壁路線採路線級 500 公尺海拔平滑與 100 公尺坡度視窗，原始 SRTM 海拔仍完整保留：

- 北橫巴陵：以 94.45 公里實測摘要交叉檢核，修正橋梁、峽谷與山壁造成的短波。
- 宇老：以公開公路車實騎路線交叉檢核，預設分析的 46% 短波不列為實際持續坡度。
- 司馬庫斯：以 115 公里／約 4,100 公尺實騎摘要交叉檢核，候選資料為 111.7 公里／3,935 公尺。

稽核頁明示平滑原因、交叉檢核名稱與「未匯入外部 GPX」，不把第三方摘要偽裝成本站軌跡來源。

#### 重採樣道路幾何驗證

2026-07-28 依 21 份 BRouter 原始快取重新量測。一般路段目標約 30–80 公尺；道路高曲率或髮夾彎可使用 30 公尺以下必要片段。驗收條件為每條路線距離誤差 ≤ 0.5%、原始點到重採樣折線最大偏差 ≤ 5 公尺、相鄰點 ≤ 80 公尺、非必要短片段 ≤ 5%。

| 路線 ID | 點數 | 距離誤差 | 最大幾何偏差 | 必要短段 | 非必要短段 | 最大相鄰距離 |
|---|---:|---:|---:|---:|---:|---:|
| `keelung-harbor-coast` | 445 | 0.155% | 4.37 m | 15.32% | 0.00% | 74.20 m |
| `keelung-nuannuan-hills` | 552 | 0.101% | 3.16 m | 17.79% | 0.00% | 74.40 m |
| `keelung-waimushan-wanli` | 499 | 0.241% | 4.57 m | 17.07% | 0.00% | 73.32 m |
| `taipei-fengguizui` | 554 | 0.169% | 4.79 m | 5.97% | 0.00% | 74.85 m |
| `taipei-zhongsha-road` | 257 | 0.464% | 4.72 m | 38.67% | 0.00% | 73.32 m |
| `taipei-lengshuikeng` | 775 | 0.303% | 4.96 m | 22.61% | 0.00% | 74.95 m |
| `new-taipei-yangjin-3p` | 2,210 | 0.295% | 4.76 m | 37.44% | 0.00% | 74.95 m |
| `new-taipei-north-coast` | 815 | 0.049% | 4.75 m | 3.81% | 0.00% | 74.89 m |
| `new-taipei-buyanting` | 1,579 | 0.143% | 4.63 m | 39.54% | 0.00% | 74.40 m |
| `taoyuan-roman-road` | 1,992 | 0.243% | 4.91 m | 26.82% | 0.00% | 74.87 m |
| `taoyuan-north-cross-baling` | 2,695 | 0.288% | 4.93 m | 38.90% | 0.00% | 74.92 m |
| `taoyuan-shimen-loop` | 1,144 | 0.224% | 4.96 m | 18.02% | 0.00% | 74.69 m |
| `hsinchu-city-coast-17k` | 609 | 0.040% | 4.49 m | 3.29% | 0.00% | 73.46 m |
| `hsinchu-city-gangnan-morning` | 196 | 0.020% | 4.87 m | 4.62% | 0.00% | 66.89 m |
| `hsinchu-city-nanliao-xiangshan` | 413 | 0.019% | 2.99 m | 7.77% | 0.00% | 73.46 m |
| `hsinchu-county-five-fingers` | 725 | 0.209% | 4.35 m | 21.69% | 0.00% | 74.82 m |
| `hsinchu-county-yulao` | 1,154 | 0.198% | 2.97 m | 49.09% | 0.00% | 73.74 m |
| `hsinchu-county-smangus` | 2,391 | 0.306% | 3.54 m | 66.15% | 0.00% | 74.32 m |
| `miaoli-xianshan` | 1,493 | 0.258% | 4.82 m | 22.65% | 0.00% | 74.21 m |
| `miaoli-jiangmayuan` | 1,015 | 0.311% | 4.99 m | 29.88% | 0.00% | 74.82 m |
| `miaoli-coast` | 681 | 0.022% | 4.36 m | 11.18% | 0.00% | 74.79 m |

量測結果：21/21 通過；最接近幾何上限為 `miaoli-jiangmayuan` 4.99 公尺，最高必要短段比例為 `hsinchu-county-smangus` 66.15%，非必要短段最差值仍為 0.00%，最大相鄰距離為 `taipei-lengshuikeng`／`new-taipei-yangjin-3p` 的 74.95 公尺。

發布後 7 個北部 bundle 大小：`keelung` 375.5 KiB、`taipei` 396.8 KiB、`new-taipei` 1,146.5 KiB、`taoyuan` 1,446.8 KiB、`hsinchu-city` 473.8 KiB、`hsinchu-county` 1,101.4 KiB、`miaoli` 784.7 KiB；最大為 `taoyuan`。

### 中部 12 條真實道路軌跡驗證

驗證日期：2026-07-29

此批資料涵蓋台中、彰化、南投與雲林。每條路線均由人工命名地標、BRouter `fastbike` 道路路由與 SRTM 海拔建構，並在建構期稽核頁逐條疊合 OpenStreetMap；正式驗證器會重新計算摘要並檢查道路類別、取樣幾何與人工核准狀態。

| 路線 ID | 距離 | 爬升 | 最高海拔 | 最大持續坡度 | 軌跡點 | OSM 道路稽核 |
|---|---:|---:|---:|---:|---:|---|
| `taichung-route-136` | 39.4 km | 982 m | 736 m | 22.2% | 1,221 | 縣道 136 與山城公路，禁止類別 0 |
| `taichung-daxueshan` | 97.4 km | 2,512 m | 2,613 m | 17.8% | 3,755 | 大雪山林道；入口、天候與崩塌風險已列提醒 |
| `taichung-xinshe` | 34.9 km | 581 m | 561 m | 17.7% | 802 | 新社丘陵公共道路，禁止類別 0 |
| `changhua-route-139` | 53.7 km | 803 m | 442 m | 14.4% | 1,223 | 縣道 139 稜線公路，禁止類別 0 |
| `changhua-baguashan` | 60.5 km | 979 m | 443 m | 19.2% | 1,419 | 八卦山稜線與茶園公共道路，禁止類別 0 |
| `changhua-coast` | 68.5 km | 71 m | 12 m | 2.4% | 1,408 | 彰濱海線；排除台 61 主線、匝道與 32 m 未授權單行道逆向段 |
| `nantou-wuling-west` | 52.6 km | 2,876 m | 3,283 m | 18.5% | 1,996 | 台 14、台 14 甲；雪季與自行車管制另列提醒 |
| `nantou-sun-moon-lake` | 29.1 km | 450 m | 868 m | 10.5% | 891 | 環湖公路；排除自行車禁行路段 |
| `nantou-shanlinxi` | 79.3 km | 1,872 m | 1,779 m | 16.2% | 2,091 | 移除忘憂森林錯置地標與 682 m 未授權單行道逆向段 |
| `yunlin-caoling` | 100.6 km | 2,713 m | 1,603 m | 16.7% | 3,597 | 草嶺、石壁山區公路；季節管制與封閉風險另列提醒 |
| `yunlin-huashan` | 34.3 km | 413 m | 398 m | 12.6% | 722 | 古坑華山安全內圈；不冒稱官方活動完整路線 |
| `yunlin-kouhu-coast` | 45.5 km | 43 m | 11 m | 0.9% | 941 | 排除台 61、港區、潮間帶、未鋪面海堤與 421 m 未授權單行道逆向段 |

驗證命令與結果：

- `node --test tests/track-analysis.test.js tests/track-generator.test.js tests/track-loader.test.js tests/track-registry.test.js tests/route-audit.test.js`：78/78 通過。
- `node scripts/validate-tracks.mjs --staging --regions taichung,changhua,nantou,yunlin`：4 個 bundle、12 條路線通過。
- `node scripts/generate-tracks.mjs --regions taichung,changhua,nantou,yunlin --publish`：發布 4 個 bundle、12 條路線。
- `node scripts/validate-tracks.mjs --published --regions taichung,changhua,nantou,yunlin`：4 個 bundle、12 條路線通過。
- 完整 `npm test`：186/186 通過。
- 北部＋中部完整重產與閘門掃描：11 個 bundle、33 條路線通過，沒有清單外未授權單行道逆向段。
- 發布後完整 validator：11 個 bundle、33 條路線通過；瀏覽器逐頁回歸 33/33 通過。
- 本機 HTTP 實際網站逐條開啟 12 個 `#/route/<id>`：12/12 均顯示相符路線 ID、「路線資料已載入」、Leaflet、海拔剖面、GPX 下載控制及高曲率道路加密取樣說明，未顯示載入失敗。
- 本機建構期稽核頁逐條開啟 12 個 `audit.html?route=<id>`：12/12 均顯示相符路線 ID、`approved`、OpenStreetMap 疊圖與海拔剖面，未顯示載入失敗。

山壁、深谷與濱海低地路線使用逐路線海拔分析設定，原始 SRTM 海拔仍保留於發布資料。較長平滑視窗用於抑制橋梁、山壁或低平地形的 SRTM 短波，不把短波誤報為持續坡度；各路線的設定、理由、對照值與道路例外均記錄於 Task 8 逐條稽核帳。

發布後 4 個 bundle 大小：`taichung` 1,418.2 KiB、`changhua` 1,026.7 KiB、`nantou` 1,301.1 KiB、`yunlin` 1,311.0 KiB；最大為 `taichung`。

### 南部 15 條真實道路軌跡驗證

驗證日期：2026-07-29

此批資料涵蓋嘉義市、嘉義縣、臺南市、高雄市與屏東縣。15 條路線均由人工命名地標、BRouter `fastbike` 道路路由與 SRTM 海拔建構，並完成 raw waytags、單行方向、OpenStreetMap 疊圖與路線級海拔合理性審查。

| 路線 ID | 距離 | 爬升 | 最高海拔 | 最大持續坡度 | 軌跡點 | OSM 道路稽核 |
|---|---:|---:|---:|---:|---:|---|
| `chiayi-city-lantan` | 9.0 km | 99 m | 105 m | 5.1% | 206 | 蘭潭公共道路；禁止類別 0 |
| `chiayi-city-coffee` | 6.4 km | 17 m | 44 m | 3.0% | 145 | 市區公共道路；避開文化路徒步區 |
| `chiayi-city-two-lakes` | 29.1 km | 286 m | 208 m | 11.4% | 635 | 蘭潭、仁義潭外圍公共道路；禁止類別 0 |
| `chiayi-alishan` | 66.1 km | 2,413 m | 2,195 m | 14.5% | 1,759 | 台 18 阿里山公路；排除步道與產業捷徑 |
| `chiayi-meishan-36` | 40.5 km | 1,589 m | 1,170 m | 11.7% | 1,732 | 縣道 162 甲與梅山三十六彎 |
| `chiayi-route-166` | 78.6 km | 1,331 m | 1,031 m | 14.9% | 1,953 | 縣道 166；raw 與 live OSM 禁止道路均為 0 |
| `tainan-route-175` | 61.6 km | 1,122 m | 444 m | 10.4% | 1,796 | 175 咖啡公路；raw 與 live OSM 禁止道路均為 0 |
| `tainan-guanziling` | 42.7 km | 543 m | 539 m | 11.5% | 1,121 | 關子嶺公共道路；禁止類別 0 |
| `tainan-nanhua` | 77.5 km | 1,168 m | 440 m | 10.3% | 1,972 | 台 20／南 179；排除水庫管理道路 |
| `kaohsiung-qimei` | 31.2 km | 225 m | 217 m | 10.0% | 641 | 旗山、美濃至十八羅漢山單向線；service／track 為 0 |
| `kaohsiung-jiaxian-liugui` | 73.7 km | 847 m | 639 m | 10.0% | 1,663 | 台 20／27／29 單向線；排除服務道路、河床及施工便道 |
| `kaohsiung-harbor` | 8.0 km | 12 m | 11 m | 1.0% | 165 | 旗津公共道路；渡輪、隧道、港區與北岸里程均為 0 |
| `pingtung-south-border` | 57.0 km | 273 m | 119 m | 5.9% | 1,151 | 台 1／台 26；排除快速化道路、步道與海岸小徑 |
| `pingtung-dapengbay` | 11.9 km | 7 m | 3 m | 0.7% | 247 | 環灣道路與官方自行車道；排除濕地步道 |
| `pingtung-shouka-mudan` | 81.4 km | 731 m | 468 m | 7.3% | 1,999 | 縣道 199、台 9 戊與台 9 一般道路；排除草埔森永隧道與高架 |

驗證命令與結果：

- `node --test tests/track-analysis.test.js tests/track-generator.test.js tests/track-loader.test.js tests/track-registry.test.js tests/route-audit.test.js`：78/78 通過。
- `npm test`：186/186 通過。
- 南部 staging validator：5 個 bundle、15 條路線通過。
- `node scripts/generate-tracks.mjs --regions chiayi-city,chiayi-county,tainan,kaohsiung,pingtung --publish`：發布 5 個 bundle、15 條路線。
- 南部 published validator：5 個 bundle、15 條路線通過。
- 北部＋中部＋南部完整 raw 單行道閘門重產：16 個 bundle、48 條路線通過。
- 全 48 條 BRouter raw 重新掃描；南部 15/15 的 `service`／`track` 均為 0，四條本次修正路線亦各為 0。
- 四條修正路線以 live OSM `/api/0.6/map?bbox=` 複查原問題段共 277 個取樣點，禁止道路與未覆蓋點皆為 0；另對全 48 條各取一個軌跡中點抽查 live 道路幾何，48/48 在 5 公尺內貼合 highway way。
- 重產後完整 staging 與 published validator：各 16 個 bundle、48 條路線通過。
- 本機 HTTP 正式網站逐條開啟 15 個 `#/route/<id>`：15/15 均顯示相符路線 ID、「路線資料已載入」、Leaflet、海拔剖面、GPX 下載控制與 30–80 公尺取樣說明，載入失敗為 0。
- 建構期稽核頁逐條開啟 15 個 `audit.html?route=<id>`：15/15 均顯示相符路線 ID、`approved`、OpenStreetMap 疊圖與海拔剖面，載入失敗為 0。
- 全部 JavaScript 通過 `node --check`；`git diff --check` 無空白錯誤。

高風險路線結論：

- `kaohsiung-harbor` 正式名稱改為「旗津港岸晨騎」。GPX 全程位於旗津一路、旗津二路公共道路，不包含渡輪、跨水域、過港隧道、壽山、高雄港北岸或港區管制道路；渡輪只作為騎士抵達起點時自行安排的獨立交通。
- `pingtung-shouka-mudan` 最終 raw 的 `tunnel`、`motorroad`、`trunk`、`track`、`service`、步道與權限禁制均為 0，21,436 公尺單行道路全順向；路線固定使用台 9 戊與台 9 一般道路，不進入草埔森永隧道、安朔高架、交流道或河床便道。
- `chiayi-route-166`、`tainan-route-175`、`kaohsiung-qimei` 及 `kaohsiung-jiaxian-liugui` 已移除原先誤判為「快照差異」的服務道路捷徑；四線 BRouter raw 與 live OSM 幾何的 `service`／`track` 均為 0。live XML 解析同時涵蓋自閉合與帶 tag 的非自閉合 node，避免漏掉台 20／台 27 共用節點。

發布後 5 個 bundle 大小：`chiayi-city` 255.7 KiB、`chiayi-county` 1,345.3 KiB、`tainan` 1,219.7 KiB、`kaohsiung` 629.4 KiB、`pingtung` 855.5 KiB；最大為 `chiayi-county`。

### 東部 9 條真實道路軌跡驗證

驗證日期：2026-07-30

| 路線 ID | 距離 | 爬升 | 最高海拔 | 最大持續坡度 | 軌跡點 | 高風險道路結論 |
|---|---:|---:|---:|---:|---:|---|
| `yilan-beiyi` | 36.7 km | 519 m | 552 m | 7.8% | 1,064 | 台 9 北宜公路往返 |
| `yilan-taipingshan` | 49.5 km | 1,643 m | 1,983 m | 12.0% | 1,853 | 宜專 1 線；不進入步道 |
| `yilan-coast` | 25.5 km | 48 m | 22 m | 1.6% | 532 | 台 2 與合法橋梁環線 |
| `hualien-qixingtan` | 11.1 km | 83 m | 46 m | 4.2% | 227 | 公共道路；不進入礫石灘 |
| `hualien-valley-north` | 82.9 km | 473 m | 238 m | 4.5% | 1,665 | 現行馬太鞍溪鋼便橋 |
| `hualien-lake-route-193` | 43.8 km | 198 m | 159 m | 4.3% | 917 | 縣道 193 與鯉魚潭公共道路 |
| `taitung-route-197` | 36.6 km | 805 m | 496 m | 10.0% | 1,078 | 官方碎石段南端前折返 |
| `taitung-dulan-coast` | 53.8 km | 304 m | 90 m | 4.8% | 1,080 | 台 11 主線往返 |
| `taitung-south-link` | 52.8 km | 716 m | 457 m | 8.2% | 1,172 | 台 9 與舊南迴台 9 戊 |

驗證命令與結果：

- Task 10 種子測試由缺少 9 份 seed 的 0/9 失敗，轉為 9/9 通過。
- 宜蘭、花蓮、台東 staging 與 published validator 均為 3 個 bundle、9 條路線通過。
- 完整 staging 與 published validator 均為 19 個 bundle、57 條路線通過。
- 9 份 raw 的禁止道路與權限禁制為 0；南迴的 `tunnel`、`motorroad`、`trunk`、`service`、`track` 與單行道路逆向均為 0。
- live OSM 逐線 5 個窗口共 45/45 命中合法道路，最近距離不超過 0.1 公尺。
- 建構期稽核頁 9/9 均顯示 `approved`、OpenStreetMap 疊圖與海拔剖面。
- 正式網站 9/9 均顯示相符路線 ID、「路線資料已載入」、Leaflet、海拔剖面、GPX 下載控制與取樣說明，載入失敗為 0。
- 全部 JavaScript 通過 `node --check`，JSON seed 均可解析，`git diff --check` 無空白錯誤。

#### Task 10 獨立審查修正

獨立審查發現研究文件仍保留正式建構前的範圍與景點座標，且「東進武嶺」挑戰錯把花東縱谷北段與西進武嶺兩條不連續 GPX 串接。修正後：

- `docs/route-research/task10-east.md` 的 9 條標題、方向、起終點與全部道路吸附點，逐欄改以 `tools/route-data/seeds/{yilan,hualien,taitung}-*.json` 為唯一正式來源；官方道路風險、災害與管制來源保留。
- 北宜範圍改為縣界至坪林、太平山改為土場至太平山莊入口、頭城改為台 2／192／台 9／台 2 庚環線；花蓮與台東六線同樣移除未納入正式 GPX 的車站、景點及服務道路草案。
- 經典挑戰維持 8 個；原 `challenge-wuling-east` 改為 `challenge-taipingshan`「太平山登高」，只映射 `yilan-taipingshan`，說明明載土場沿宜專 1 線至太平山莊入口。
- 新增回歸測試逐線核對標題、方向、全部 seed 控制點名稱與座標，以及挑戰識別碼、名稱、說明與單一路線映射。TDD 紅燈為 9/11 通過，研究文件同步與挑戰映射兩項失敗；完成修正後 focused 測試為 11/11 通過。
- Task 10 加軌跡 focused 測試為 89/89 通過；完整 `npm test` 為 197/197 通過。
- 東部 staging 與 published validator 均為 3 個 bundle、9 條路線通過；全部 `.js`／`.mjs` 通過 `node --check`，`git diff --check` 無空白錯誤。

### 離島與路線美學 15 條真實道路軌跡驗證

驗證日期：2026-08-01

- 澎湖、金門、連江與路線美學共 4 個正式 bundle、15 條路線；完整正式資料為 23 個 bundle、72 條路線。
- 15 份 seed 均為 `approved`，具 BRouter `fastbike`、SRTM、人工地標、審查時間與道路取捨說明。
- 澎湖跨海大橋軌跡只沿縣道 203 實體橋面；金門、烈嶼與馬祖路線維持單島範圍，不以直線跨海或把渡輪計入 GPX。
- 六條路線美學均改用實際公共道路產生；造型服從道路合法性，必要時明載「近似線」，不以畫布座標或人工折線冒充道路。
- 受版控的 `task11-raw-audit.json` 以 `cacheFingerprint(seed)` 綁定 15 份 seed，並以發布時間對應正式 bundle；禁止 highway、權限禁制、`bicycle=no`、渡輪與非法逆向計數均為 0。
- live OSM 複查曾因抽樣程式把交叉口共用節點的 `service`／`footway` 誤認為軌跡道路；修正線段與 way 關聯後，五個誤報點皆貼合合法 secondary／residential／tertiary／primary，道路阻塞項撤回。
- 本機 HTTP 逐頁開啟 15 條詳情：15/15 顯示相符標題、載入完成狀態、Leaflet 路線線條、海拔剖面與 GPX 控制，主內容無水平溢位，console error 為 0。
- 獨立審查最終結論：Approved。聚焦測試 3/3、Task 11 validator 15/15；最終完整測試 206/206。

### 72 條路線發佈前驗收

驗證日期：2026-08-01

- `npm run verify`：通過；最終 212 項 Node.js 測試零失敗，正式 validator 為 23 個 bundle、72 條路線。
- `tests/track-data.test.js`：66 條地區路線加 6 條路線美學，全部人工核准；逐點經緯度、海拔與累積距離有限且距離不倒退。
- 64 個 `.js`／`.mjs` 檔案逐一通過 `node --check`；`git diff --check` 通過。
- 受版控檔名與憑證指派掃描通過；沒有 `.env`、私人金鑰或憑證型檔案納入版本控制。
- 實際 HTTP／Chrome 驗證涵蓋 1440×900 桌機、768×1024 平板及 390×844 CSS viewport。390px 結果為 `innerWidth=390`、`scrollWidth=390`、無水平溢位；手機顯示選單並隱藏會擠壓頁首的完整主題切換器。
- 手機截圖發現座標戳記與右下圖說重疊，修正為分置左右兩側；重驗兩者不重疊。頁首 cascade 回歸與圖說位置均有 CSS 測試保護。
- GitHub Pages workflow 改為執行 `npm run verify`，測試與全部正式軌跡 validator 通過後才部署。
- 最終 release review 後補上三項閘門：路線美學總覽會 lazy-load 六張真實預覽；72 條正式路線以受版控 BRouter 原始幾何與 waytags 完整重建，幾何與道路稽核 SHA-256 同時綁定 bundle；施工／服務道路預設拒絕，精確例外綁定路段 SHA-256；Pages build/deploy job 明確限制 `refs/heads/main`。
- 33 筆精確道路例外均具有路段 SHA-256、距離上限、座標範圍與 HTTPS 來源；通用 OSM tag 說明與即時路況首頁引用均為 0。北橫施工標籤另以公路局 2026-07-12 羅浮至巴陵解除封閉公告核對，並保留出發前重新查核要求。
