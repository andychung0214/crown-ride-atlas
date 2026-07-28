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
| `keelung-harbor-coast` | 19.9 km | 236 m | 502 | 港區與濱海道路，禁止類別 0 |
| `keelung-nuannuan-hills` | 23.8 km | 350 m | 599 | 暖暖丘陵公路，禁止類別 0 |
| `keelung-waimushan-wanli` | 29.2 km | 415 m | 780 | 外木山至萬里海線，禁止類別 0 |
| `taipei-fengguizui` | 25.6 km | 515 m | 652 | 風櫃嘴公路，禁止類別 0 |
| `taipei-zhongsha-road` | 8.5 km | 328 m | 344 | 中社路公路，禁止類別 0 |
| `taipei-lengshuikeng` | 32.1 km | 1,035 m | 947 | 陽明山公路，禁止類別 0 |
| `new-taipei-yangjin-3p` | 77.8 km | 2,757 m | 2,599 | 陽金三峰公路走廊，禁止類別 0 |
| `new-taipei-north-coast` | 39.8 km | 455 m | 836 | 北海岸公路，禁止類別 0 |
| `new-taipei-buyanting` | 54.4 km | 1,478 m | 1,698 | 雙溪、不厭亭公路，禁止類別 0 |
| `taoyuan-roman-road` | 77.8 km | 1,791 m | 2,315 | 羅馬公路，禁止類別 0 |
| `taoyuan-north-cross-baling` | 92.8 km | 1,713 m | 3,430 | 台 7 北橫至下巴陵，禁止類別 0 |
| `taoyuan-shimen-loop` | 54.9 km | 1,006 m | 1,421 | 石門水庫道路；保留官方入口 `barrier=gate`，須查開放規則 |
| `hsinchu-city-coast-17k` | 29.0 km | 67 m | 604 | 官方十七公里自行車道；OSM 有一段約 514 m 尚標 footway，已記錄官方證據與現地查核提醒 |
| `hsinchu-city-18-peaks` | 13.9 km | 177 m | 343 | 十八尖山外圍公共道路，禁止類別 0 |
| `hsinchu-city-nanliao-baoshan` | 44.8 km | 488 m | 1,071 | 南寮、寶山公共道路，避開水庫行人環湖步道，禁止類別 0 |
| `hsinchu-county-five-fingers` | 37.0 km | 1,078 m | 1,203 | 竹 37-4、五指山路與縣道 122，禁止類別 0 |
| `hsinchu-county-yulao` | 69.3 km | 1,459 m | 2,888 | 縣道 120、竹 60；其中約 1.33 km 在 OSM 尚標 `highway=track`，公開公路車實騎資料與主線幾何交叉檢核，須現地確認路面 |
| `hsinchu-county-smangus` | 111.7 km | 3,935 m | 6,534 | 竹 60 與司馬庫斯產業道路；禁止類別 0，水泥與狹路風險另列安全提醒 |
| `miaoli-xianshan` | 52.6 km | 1,440 m | 1,647 | 台 6、台 3、縣道 124 至靈洞宮，禁止類別 0 |
| `miaoli-jiangmayuan` | 38.6 km | 1,258 m | 1,210 | 苗 49、縣道 130 至薑麻園，禁止類別 0 |
| `miaoli-coast` | 31.5 km | 105 m | 661 | 官方綠光海風中南段，移除好望角與車站 footway 捷徑後禁止類別 0 |

驗證命令與結果：

- `node scripts/validate-tracks.mjs --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli --staging`：7 個 bundle、21 條路線通過。
- `node scripts/generate-tracks.mjs --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli --publish`：發布 7 個 bundle、21 條路線。
- `node scripts/validate-tracks.mjs --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli --published`：7 個 bundle、21 條路線通過。
- 本機 HTTP 實際網站逐條開啟 21 個 `#/route/<id>`：21/21 均顯示相符標題、「路線資料已載入」、Leaflet、海拔剖面與 GPX 下載控制。
- 「司馬庫斯部落挑戰」正常詳情頁實測顯示 2 至 3 公尺狹路、車輛單向時段、櫻花季總量管制、非全天候自由通行與查核主管機關最新公告；同頁明示 500m／100m 路線級濾波與未匯入外部 GPX。
- 路線相關 focused 測試：78/78 通過；完整 `npm test`：172/172 通過。

三條深谷／山壁路線採路線級 500 公尺海拔平滑與 100 公尺坡度視窗，原始 SRTM 海拔仍完整保留：

- 北橫巴陵：以 94.45 公里實測摘要交叉檢核，修正橋梁、峽谷與山壁造成的短波。
- 宇老：以公開公路車實騎路線交叉檢核，預設分析的 46% 短波不列為實際持續坡度。
- 司馬庫斯：以 115 公里／約 4,100 公尺實騎摘要交叉檢核，候選資料為 111.7 公里／3,935 公尺。

稽核頁明示平滑原因、交叉檢核名稱與「未匯入外部 GPX」，不把第三方摘要偽裝成本站軌跡來源。
