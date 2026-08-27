# CROWN RIDE ATLAS／狂輪誌

> 沿著山脈與海風，收藏島嶼上每一道值得騎乘的曲線。

狂輪誌是一座桌機優先、支援行動觸控的台灣公路車路線百科與騎乘圖鑑。目前收錄全台 22 個地區、68 條已發布道路軌跡（66 條地區路線＋2 條完整挑戰）、8 項經典挑戰、22 件公開來源的台灣 GPS Art 作品，以及 4 個分類、32 筆內容的公路車部件百科；提供搜尋、篩選、排序、分頁、完成標記、路線詳情、互動地圖、GPX 下載，以及不需後端的本機編輯功能。

線上版本：[https://andychung0214.github.io/crown-ride-atlas/](https://andychung0214.github.io/crown-ride-atlas/)

## 特色

- 黃衫、衝刺綠、登山圓點與年輕白衫四套主題，可即時切換並記住選擇。
- 以日式路誌、等高線與紙張質感構成的「峠之路誌」視覺。
- 依關鍵字、區域、縣市、難度、最陡坡度、行程時間與排序探索台灣公路車路線；每頁 24 條並可切換頁碼。
- 路線卡可標記「騎過此路線」，完成狀態只儲存在目前瀏覽器。
- 北高與一日雙塔使用獨立完整 point-to-point 軌跡；挑戰卡片會明確顯示起點、終點與補充分段。
- 路線美學頁收錄 22 件台灣 GPS Art 公開來源圖鑑，涵蓋單車、跑步與步行；其中 2 件具可重建的公開 KML，可在站內檢視分段地圖並下載同源 GPX，其餘 20 件明確標示「軌跡待取得」。
- GPS Art 提供全部、單車、跑步／步行與有站內軌跡四種篩選；沒有公開幾何的來源卡不顯示假地圖或 GPX 按鈕。不相符的舊「環小台灣」仍只保留稽核資料。
- GPS Art 軌跡產物保存來源檔與 canonical geometry SHA-256，CI 同時鎖定逐段點數與總點數；來源變動須人工重新查核。瀏覽器遇到單件軌跡缺失時只降級該件，不會阻斷其餘圖鑑。
- Leaflet 互動地圖；離線或直接開啟 HTML 時自動改用 SVG 路線圖。
- 68 條已發布內建路線皆以 BRouter `fastbike` 吸附至道路，搭配 SRTM 海拔、路線級平滑與持續坡度分析；卡片坡度欄位直接取自對應軌跡摘要。
- 受版控的道路稽核可在 CI 由 BRouter 原始幾何與 waytags 完整重建 68 條正式路線；明確禁行、渡輪、階梯、施工道路與未證明適合公路車的道路會阻擋發布，必要的公共 service 或明確自行車網路短段例外必須綁定精確路段 SHA-256、距離上限與 HTTPS 佐證。
- GPX 匯入、下載與可查詢里程／海拔／坡度的詳細剖面。
- 新增、編輯、刪除、圖片壓縮、JSON 備份與還原，資料只儲存在目前瀏覽器。
- 鍵盤操作、跳至主要內容、狀態播報、清楚的焦點樣式與減少動態效果支援。
- 公路車百科位於 `#/bike-parts`：桌機將熱點、導引線、標籤與部件清單的 hover 狀態同步；窄版隱藏原 SVG 互動層，改用 32 個至少 44×44 CSS px、顯示 01–32 的 HTML marker，重疊點位由最近 hotspot 判定。

## 操作方式

1. 從首頁精選、地區索引或「路線總覽」開啟路線。
2. 使用關鍵字、區域、縣市、難度、坡度、時間與排序縮小結果，再以頁碼瀏覽。
3. 在詳情頁檢視地圖、海拔、距離與注意事項，或下載 GPX。
4. 從頁首切換四種領騎衫主題。
5. 在「我的路線」新增或編輯內容；可上傳 JPEG、PNG、WebP 與 GPX。
6. 編輯完成後下載 JSON 備份，以便跨瀏覽器還原。
7. 從「路線美學」檢視 GPS Art 圖鑑；使用活動／軌跡篩選，並由作品卡查閱公開來源。只有標示「有站內軌跡」的作品提供地圖與 GPX。
8. 從「公路車百科」或 `#/bike-parts` 開啟部件圖解。桌機可沿導引線閱讀標籤，滑過熱點或分類清單會同步標示同一部件；窄版可點選 01–32 的圓形 marker 或下方分類清單。可用前一筆／下一筆、放大／縮小與重設控制；圖解縮放範圍為 1 至 3 倍。

百科的桌機 SVG 熱點、行動版 HTML marker、控制項與分類按鈕支援 Tab、Enter、Space 與 Pointer Events；diagram surface 會同時接收 marker 與背景 gesture，觸控以 direct part 或 22 CSS px 半徑最近熱點選取，拖曳與雙指不會誤選。diagram 內的滑鼠與原生 marker click 統一由 surface 委派，拖曳後的合成 click 只會被抑制一次，不會誤選或永久吞掉下一次正常點擊。client CSS px 會依實際 SVG rect／viewBox 換算為圖面位移。互動模組缺少、建立失敗或被銷毀時，32 個原生 `<details>` 仍各自保留名稱與七類完整內容。

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
├── docs/                 # 計畫、藝術方向、測試計畫與來源研究
├── js/
│   ├── core/             # 搜尋、路由、GPX、GPS Art 驗證、地理運算與本機資料層
│   ├── data/             # 台灣路線、挑戰、GPS Art 圖鑑與公開軌跡
│   ├── ui/               # 頁面渲染、地圖與編輯器
│   └── app.js            # 應用程式入口與狀態協調
├── tests/                # Node.js 內建測試執行器測試
└── index.html            # 靜態網站入口
```

## 測試方式

需安裝 Node.js 18 或更新版本：

```powershell
npm test
npm run tracks:validate
npm run verify
```

測試不依賴大型框架，使用 Node.js 內建 `node:test`。目前 `npm run verify` 共 317 項測試，會檢查 JavaScript 入口、GPS Art catalog／分段 GPX／runtime 單件降級／軌跡 provenance 契約、32 筆公路車部件圖解、靜態 fallback、screen-space marker 與 gesture，以及 23 個公開軌跡 bundle（共 68 條正式路線）；GPS Art 與部件百科均不加入正式 manifest。完整手動、RWD、無障礙與 SEO 清單請見 [`docs/TEST-PLAN.md`](docs/TEST-PLAN.md)，來源帳見 [`docs/route-research/taiwan-gps-art.md`](docs/route-research/taiwan-gps-art.md)，實際結果記錄於 [`docs/VERIFICATION.md`](docs/VERIFICATION.md)。

## 靜態網站託管

可直接部署整個專案到 GitHub Pages、Cloudflare Pages、Netlify、Synology Web Station 或任意靜態檔案服務。網站使用 Hash 路由，不需要伺服器 rewrite 規則。Leaflet 與 OpenStreetMap 圖磚需要網路；失敗時仍保留 SVG 路線圖與文字資料。

本版本庫的 `main` 每次推送後會執行 `.github/workflows/pages.yml`：先以 Node.js 22 執行完整測試，通過後再部署 GitHub Pages。也可從 GitHub Actions 頁面手動執行相同流程；build 與 deploy job 都會拒絕非 `main` ref。

## 已知限制

- 所有新增與編輯內容都保存在 `localStorage`，不同瀏覽器與裝置不會自動同步。
- 瀏覽器儲存容量有限；上傳影像會先壓縮，但大量圖片仍可能超出容量。
- 內建軌跡依產生當時的 BRouter／OpenStreetMap 道路資料建構；道路權限、路況、施工與交通管制仍會變動，出發前必須查核最新官方資訊與現場標示。
- SRTM 海拔適合行程規劃，並非測量級資料；橋梁、深谷、山壁與海岸可能產生誤差，本站以可追溯的路線級視窗降低短波雜訊。
- 未串接即時路況、會員系統、雲端資料庫或多人協作。
- OpenStreetMap 圖磚不可當作大量離線下載服務。
- GPS Art 公開來源可能失效或更改；目前 22 件中只有 2 件具站內軌跡。其餘作品只保留可稽核來源，不提供猜測座標、假地圖或 GPX。
- GPS Art 的跑步與步行作品不代表適合公路車騎乘；使用者應依活動類型、道路現況與管制自行評估。
- 公路車百科的圖解是操作與辨識輔助，不是組裝、維修或騎乘安全指示；遇到鬆動、裂痕、煞車或傳動異常時，應由合格技師檢查。

## 安全與隱私

專案不需要 API 金鑰。請勿把 `.env`、憑證、token 或私人金鑰提交到版本庫。使用者上傳的圖片、GPX 與編輯內容不會由本專案傳送到後端。

## 授權

程式碼採 [MIT License](LICENSE)。道路與地圖資料含 © OpenStreetMap contributors，依 ODbL 使用；路線透過 BRouter `fastbike` 建構，海拔採 SRTM。Leaflet 1.9.4 依 BSD-2-Clause 使用。第三方資料不因本專案 MIT 授權而改變其原授權，詳見 [LICENSE](LICENSE)。
