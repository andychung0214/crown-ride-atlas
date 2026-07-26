# CROWN RIDE ATLAS／狂輪誌

> 沿著山脈與海風，收藏島嶼上每一道值得騎乘的曲線。

狂輪誌是一座桌機優先、支援行動觸控的台灣公路車路線百科與騎乘圖鑑。首版收錄全台 22 個地區、72 條路線、8 項經典挑戰與 6 組路線美學，提供搜尋、篩選、路線詳情、互動地圖、GPX 下載，以及不需後端的本機編輯功能。

預定網址（首次部署成功後啟用）：[https://andychung0214.github.io/crown-ride-atlas/](https://andychung0214.github.io/crown-ride-atlas/)

## 特色

- 黃衫、衝刺綠、登山圓點與年輕白衫四套主題，可即時切換並記住選擇。
- 以日式路誌、等高線與紙張質感構成的「峠之路誌」視覺。
- 依地區、難度、距離與爬升探索台灣公路車路線。
- Leaflet 互動地圖；離線或直接開啟 HTML 時自動改用 SVG 路線圖。
- GPX 匯入、下載與路線海拔剖面。
- 新增、編輯、刪除、圖片壓縮、JSON 備份與還原，資料只儲存在目前瀏覽器。
- 鍵盤操作、跳至主要內容、狀態播報、清楚的焦點樣式與減少動態效果支援。

## 操作方式

1. 從首頁精選、地區索引或「路線總覽」開啟路線。
2. 使用關鍵字、地區、難度與排序縮小結果。
3. 在詳情頁檢視地圖、海拔、距離與注意事項，或下載 GPX。
4. 從頁首切換四種領騎衫主題。
5. 在「我的路線」新增或編輯內容；可上傳 JPEG、PNG、WebP 與 GPX。
6. 編輯完成後下載 JSON 備份，以便跨瀏覽器還原。

## 安裝與執行

本專案沒有建構步驟，也不需要安裝執行期套件。

最簡單的方式是直接以瀏覽器開啟 `index.html`。此模式會使用 SVG 路線圖，不依賴地圖服務。

若要使用 Leaflet 地圖，建議從專案根目錄啟動靜態伺服器：

```powershell
python -m http.server 4173
```

再開啟 `http://127.0.0.1:4173/`。

## 專案結構

```text
.
├── assets/               # 原創路線影像與圖示
├── css/                  # 設計 Token、基礎、版面與元件樣式
├── docs/                 # 計畫、藝術方向與測試計畫
├── js/
│   ├── core/             # 搜尋、路由、GPX、地理運算與本機資料層
│   ├── data/             # 台灣路線、挑戰與路線美學資料
│   ├── ui/               # 頁面渲染、地圖與編輯器
│   └── app.js            # 應用程式入口與狀態協調
├── tests/                # Node.js 內建測試執行器測試
└── index.html            # 靜態網站入口
```

## 測試方式

需安裝 Node.js 18 或更新版本：

```powershell
npm test
```

測試不依賴大型框架，使用 Node.js 內建 `node:test`。完整手動、RWD、無障礙與 SEO 清單請見 [`docs/TEST-PLAN.md`](docs/TEST-PLAN.md)，首版實際結果與工具限制記錄於 [`docs/VERIFICATION.md`](docs/VERIFICATION.md)。

## 靜態網站託管

可直接部署整個專案到 GitHub Pages、Cloudflare Pages、Netlify、Synology Web Station 或任意靜態檔案服務。網站使用 Hash 路由，不需要伺服器 rewrite 規則。Leaflet 與 OpenStreetMap 圖磚需要網路；失敗時仍保留 SVG 路線圖與文字資料。

本版本庫的 `main` 每次推送後會執行 `.github/workflows/pages.yml`：先以 Node.js 22 執行完整測試，通過後再部署 GitHub Pages。也可從 GitHub Actions 頁面手動執行相同流程。

## 已知限制

- 所有新增與編輯內容都保存在 `localStorage`，不同瀏覽器與裝置不會自動同步。
- 瀏覽器儲存容量有限；上傳影像會先壓縮，但大量圖片仍可能超出容量。
- 首版內建軌跡為展示用近似路線，正式騎乘前應以官方道路、天候、施工與交通資訊重新確認。
- 未串接即時路況、會員系統、雲端資料庫或多人協作。
- OpenStreetMap 圖磚不可當作大量離線下載服務。

## 安全與隱私

專案不需要 API 金鑰。請勿把 `.env`、憑證、token 或私人金鑰提交到版本庫。使用者上傳的圖片、GPX 與編輯內容不會由本專案傳送到後端。

## 授權

程式碼採 [MIT License](LICENSE)。內建文字、展示軌跡與原創影像僅作專案示範；外部地圖資料依 OpenStreetMap 貢獻者授權與標示規範使用。
