# 狂輪誌首版驗證紀錄

驗證日期：2026-07-26

候選版本：`dc13c037da3d1478de84df2a37d8e7b855b56f5c`

## 自動化結果

| 檢查 | 結果 | 證據摘要 |
|---|---|---|
| Node.js 單元測試 | 通過 | `npm test`：54 項通過、0 項失敗 |
| JavaScript 語法 | 通過 | 24 個 `js/` 與 `tests/` JavaScript 檔案通過 `node --check` |
| Git 空白檢查 | 通過 | `git diff --check main..HEAD` 零錯誤 |
| 本機 HTTP 資源 | 通過 | 首頁、CSS、JavaScript、8 張 WebP、圖示、robots 與 sitemap 共 28 項回應 200 |
| DOM 安全 | 通過 | `js/` 無 `innerHTML`、`insertAdjacentHTML`、`document.write` 或 `eval` |
| 敏感資訊 | 通過 | 無憑證變數模式，且版本庫未追蹤 `.env` 或常見私人金鑰檔案 |

自動化測試涵蓋資料契約、搜尋／篩選／排序、Hash 路由、地理運算、GPX、圖片限制、四主題、本機儲存、備份匯入、Leaflet 圖磚錯誤轉 SVG、無海拔說明、刪除路線美學參考與空路線首頁。

## 瀏覽器結果

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

## 受工具限制、未宣稱通過的項目

- Chrome 擴充功能未開啟檔案網址權限，因此無法以瀏覽器自動上傳測試 GPX，亦無法完成 `file://` 實際開檔；GPX 解析與 `file:` SVG 選擇邏輯由單元測試及程式碼路徑檢查涵蓋。
- 目前瀏覽器控制介面未提供 `prefers-reduced-motion` 模擬；CSS 已包含對應媒體查詢，但本次未宣稱完成實機驗證。
- 自動接受刪除／重設確認視窗時瀏覽器控制連線中斷，無法證明測試瀏覽器已從 73 條回復為 72 條。這只影響該瀏覽器的 `localStorage`，不影響版本庫或網站內建資料；可在「我的路線」選擇「恢復內建資料」清除。

## 審查結果

兩輪獨立程式碼審查共發現並修正：

1. 備份匯入可能接受破壞渲染契約的資料。
2. 刪除被路線美學引用的路線會使頁面失敗。
3. Leaflet 圖磚非同步失敗不會切換 SVG。
4. 缺少海拔時顯示 `NaN`。
5. 主題觸控目標小於 44×44px。
6. 路線卡有重複主要連結。
7. 全部路線被本機標記刪除時首頁會失敗。

最終審查未發現剩餘 Critical 或 Important 程式碼缺陷。上述未完成項目維持明確標記，不作未經驗證的功能宣稱。

## GitHub Pages 部署

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

## 北部 21 條真實道路軌跡候選驗證

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
| `hsinchu-city-18-peaks` | 13.8 km | 177 m | 316 | 十八尖山外圍公共道路，禁止類別 0 |
| `hsinchu-city-nanliao-baoshan` | 44.0 km | 472 m | 951 | 南寮、寶山公共道路，排除 34 m 未授權單行道逆向段 |
| `hsinchu-county-five-fingers` | 36.9 km | 1,053 m | 950 | 竹 37-4、五指山路與縣道 122，禁止類別 0 |
| `hsinchu-county-yulao` | 34.8 km | 1,401 m | 1,154 | 竹東至宇老單向 GPX，排除 452 m 未授權單行道逆向；禁止反轉 GPX，回程另依管制安排 |
| `hsinchu-county-smangus` | 55.9 km | 2,624 m | 2,391 | 內灣至司馬庫斯單向 GPX，排除 452 m 未授權單行道逆向；禁止反轉 GPX，回程另依管制安排 |
| `miaoli-xianshan` | 59.8 km | 1,424 m | 1,493 | 汶水與獅潭地標改置正式公路，排除 34 m 未授權單行道逆向段 |
| `miaoli-jiangmayuan` | 38.6 km | 1,239 m | 1,015 | 苗 49、縣道 130 至薑麻園，禁止類別 0 |
| `miaoli-coast` | 31.5 km | 106 m | 681 | 官方綠光海風中南段，移除好望角與車站 footway 捷徑後禁止類別 0 |

### 2026-07-29 單行道逆向再稽核

新建構閘門會從 BRouter raw `messages` 檢查同段同時出現 `reversedirection=yes` 與 `oneway=yes` 的情形。只有 `oneway:bicycle=no`、`bicycle:backward=yes|designated|permissive`，或 `cycleway`／`cycleway:left`／`cycleway:right`／`cycleway:both` 明標 `opposite|opposite_lane|opposite_track|opposite_share_busway` 才能放行；`route_bicycle_*` 與非逆向例外的 `shared_lane` 不算合法例外。

| 路線 ID | 舊 raw 訊息 | 修正 |
|---|---|---|
| `keelung-harbor-coast` | `25.142573,121.802562` · 27 m · service | 潮境地標移至北寧路 |
| `keelung-waimushan-wanli` | `25.131567,121.739871` · 16 m · tertiary | 起終點改至外木山漁港雙向道路 |
| `taipei-lengshuikeng` | `25.155210,121.546045` · 8 m · service | 移除管理處支點，格致路地標改至台 2 甲主線 |
| `taoyuan-shimen-loop` | `24.827953,121.267477` · 27 m · primary、`cycleway:right=shared_lane` | 移除康莊路冗餘地標 |
| `hsinchu-city-nanliao-baoshan` | `24.801590,120.970039` · 34 m · residential | 移除信義街站前支點 |
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

### 重採樣道路幾何驗證

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
| `hsinchu-city-18-peaks` | 316 | 0.204% | 4.88 m | 13.02% | 0.00% | 72.86 m |
| `hsinchu-city-nanliao-baoshan` | 951 | 0.167% | 4.95 m | 7.79% | 0.00% | 74.61 m |
| `hsinchu-county-five-fingers` | 950 | 0.338% | 4.91 m | 26.87% | 0.00% | 74.97 m |
| `hsinchu-county-yulao` | 1,154 | 0.198% | 2.97 m | 49.09% | 0.00% | 73.74 m |
| `hsinchu-county-smangus` | 2,391 | 0.306% | 3.54 m | 66.15% | 0.00% | 74.32 m |
| `miaoli-xianshan` | 1,493 | 0.258% | 4.82 m | 22.65% | 0.00% | 74.21 m |
| `miaoli-jiangmayuan` | 1,015 | 0.311% | 4.99 m | 29.88% | 0.00% | 74.82 m |
| `miaoli-coast` | 681 | 0.022% | 4.36 m | 11.18% | 0.00% | 74.79 m |

量測結果：21/21 通過；最接近幾何上限為 `miaoli-jiangmayuan` 4.99 公尺，最高必要短段比例為 `hsinchu-county-smangus` 66.15%，非必要短段最差值仍為 0.00%，最大相鄰距離為 `hsinchu-county-five-fingers` 74.97 公尺。

發布後 7 個北部 bundle 大小：`keelung` 375.5 KiB、`taipei` 396.8 KiB、`new-taipei` 1,146.5 KiB、`taoyuan` 1,446.8 KiB、`hsinchu-city` 473.8 KiB、`hsinchu-county` 1,101.4 KiB、`miaoli` 784.7 KiB；最大為 `taoyuan`。

## 中部 12 條真實道路軌跡驗證

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

## 南部 15 條真實道路軌跡驗證

驗證日期：2026-07-29

此批資料涵蓋嘉義市、嘉義縣、臺南市、高雄市與屏東縣。15 條路線均由人工命名地標、BRouter `fastbike` 道路路由與 SRTM 海拔建構，並完成 raw waytags、單行方向、OpenStreetMap 疊圖與路線級海拔合理性審查。

| 路線 ID | 距離 | 爬升 | 最高海拔 | 最大持續坡度 | 軌跡點 | OSM 道路稽核 |
|---|---:|---:|---:|---:|---:|---|
| `chiayi-city-lantan` | 9.0 km | 99 m | 105 m | 5.1% | 206 | 蘭潭公共道路；禁止類別 0 |
| `chiayi-city-coffee` | 6.4 km | 17 m | 44 m | 3.0% | 145 | 市區公共道路；避開文化路徒步區 |
| `chiayi-city-two-lakes` | 29.1 km | 286 m | 208 m | 11.4% | 635 | 蘭潭、仁義潭外圍公共道路；禁止類別 0 |
| `chiayi-alishan` | 66.1 km | 2,413 m | 2,195 m | 14.5% | 1,759 | 台 18 阿里山公路；排除步道與產業捷徑 |
| `chiayi-meishan-36` | 40.5 km | 1,589 m | 1,170 m | 11.7% | 1,732 | 縣道 162 甲與梅山三十六彎 |
| `chiayi-route-166` | 78.4 km | 1,331 m | 1,031 m | 14.9% | 1,940 | 縣道 166／162 甲；快照差異具精確 OSM way 證據 |
| `tainan-route-175` | 60.9 km | 1,121 m | 444 m | 10.5% | 1,793 | 175 咖啡公路；快照差異具精確 OSM way 證據 |
| `tainan-guanziling` | 42.7 km | 543 m | 539 m | 11.5% | 1,121 | 關子嶺公共道路；禁止類別 0 |
| `tainan-nanhua` | 77.5 km | 1,168 m | 440 m | 10.3% | 1,972 | 台 20／南 179；排除水庫管理道路 |
| `kaohsiung-qimei` | 55.9 km | 291 m | 217 m | 10.0% | 1,146 | 旗美公共道路；快照差異具精確 OSM way 證據 |
| `kaohsiung-jiaxian-liugui` | 103.7 km | 956 m | 639 m | 10.0% | 2,305 | 台 20／27／29；排除河床及施工便道 |
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
- 重產後完整 staging 與 published validator：各 16 個 bundle、48 條路線通過。
- 本機 HTTP 正式網站逐條開啟 15 個 `#/route/<id>`：15/15 均顯示相符路線 ID、「路線資料已載入」、Leaflet、海拔剖面、GPX 下載控制與 30–80 公尺取樣說明，載入失敗為 0。
- 建構期稽核頁逐條開啟 15 個 `audit.html?route=<id>`：15/15 均顯示相符路線 ID、`approved`、OpenStreetMap 疊圖與海拔剖面，載入失敗為 0。
- 全部 JavaScript 通過 `node --check`；`git diff --check` 無空白錯誤。

高風險路線結論：

- `kaohsiung-harbor` 正式名稱改為「旗津港岸晨騎」。GPX 全程位於旗津一路、旗津二路公共道路，不包含渡輪、跨水域、過港隧道、壽山、高雄港北岸或港區管制道路；渡輪只作為騎士抵達起點時自行安排的獨立交通。
- `pingtung-shouka-mudan` 最終 raw 的 `tunnel`、`motorroad`、`trunk`、`track`、`service`、步道與權限禁制均為 0，21,436 公尺單行道路全順向；路線固定使用台 9 戊與台 9 一般道路，不進入草埔森永隧道、安朔高架、交流道或河床便道。
- BRouter 快照在 `chiayi-route-166`、`tainan-route-175`、`kaohsiung-qimei` 及 `kaohsiung-jiaxian-liugui` 的少數省／縣道路段仍保留舊 `highway=service` 標籤；每一段均在逐條稽核帳記錄長度、座標與目前 OpenStreetMap way。未把其他 `service` 道路一概推定為鋪面或可騎。

發布後 5 個 bundle 大小：`chiayi-city` 255.7 KiB、`chiayi-county` 1,342.7 KiB、`tainan` 1,216.5 KiB、`kaohsiung` 918.3 KiB、`pingtung` 855.5 KiB；最大為 `chiayi-county`。
