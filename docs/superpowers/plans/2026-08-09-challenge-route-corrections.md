# 挑戰路線與路線美學修正執行計畫

> **執行方式：** 依序在目前工作目錄內執行；每個里程碑完成後先跑對應測試，再進入下一個里程碑。

**目標：** 修正「北高」與「一日雙塔」的完整端點與道路軌跡，並以可重現的幾何閘門移除不相符的路線美學公開項目。

**架構：** 兩條挑戰路線新增為正式 point-to-point 路線與獨立靜態軌跡 bundle；既有分段路線保留為補充參考。路線美學使用共用純函式將目標圖形與實際道路軌跡正規化、重採樣後計分，`routeArt` 只由通過閘門的項目產生。

**技術：** HTML、CSS、Vanilla JavaScript、Node.js `node:test`、既有 BRouter `fastbike` 產生器、Leaflet、GitHub Pages。

## 全域限制

- 不使用 React、Angular、Vue、TypeScript、後端服務或大型套件。
- 不在瀏覽器執行時呼叫 BRouter，也不新增 API 金鑰、token、`.env` 或私人憑證。
- GPX 必須來自實際道路座標；不得以公式、人工直線或目標圖形座標取代正式軌跡。
- 所有中文文件與介面遵守專案名詞翻譯規範。
- Commit 使用繁體中文 Conventional Commits；推送前顯示完整 remote、branch 與 commit。

## 里程碑 1：以測試固定錯誤行為

**檔案：** `tests/data.test.js`、`tests/render.test.js`、`tests/track-data.test.js`、新增 `tests/route-art-shape.test.js`

- [x] 新增北高與雙塔的失敗測試：起點、終點、`point-to-point`、正式路線主連結與端點說明。
- [x] 新增挑戰卡片測試，確認主按鈕指向完整挑戰路線，而非第一段補充路線。
- [x] 新增路線美學閘門測試：公開項目必須有 `near-match` 狀態，分數與最大誤差不得超過門檻；不相符項目不可渲染。
- [x] 先執行聚焦測試並確認目前版本因錯誤端點與無閘門而失敗。

## 里程碑 2：建立完整挑戰道路資料

**檔案：** `tools/route-data/seeds/challenge-north-south.json`、`tools/route-data/seeds/challenge-twin-towers.json`、`js/data/routes.js`、`js/data/track-manifest.js`、`js/data/tracks/challenges.js`

- [x] 新增台北至高雄的人工途經點，固定 `fastbike` 與 `point-to-point`，包含城市道路接點、補給節點與終點道路接點。
- [x] 新增三貂角燈塔至鵝鑾鼻燈塔的人工途經點，官方地標名稱與可騎公共道路接點分開記錄。
- [x] 使用既有產生器產生兩條含海拔、累積距離與坡度的靜態軌跡；失敗時不得更新正式 bundle。
- [x] 以人工審核欄位記錄來源網址、產生時間、審核時間與道路限制。
- [x] 將兩條路線加入正式資料與 manifest，分類為「經典挑戰」；保留舊分段路線。
- [x] 執行 `node scripts/validate-tracks.mjs --published` 與挑戰資料測試，確認道路政策、海拔、距離與 `reviewStatus`。

## 里程碑 3：實作路線美學幾何閘門

**檔案：** 新增 `js/core/route-art-shape.js`、修改 `js/data/routes.js`、`js/ui/render.js`

- [x] 實作水平邊界框正規化、依道路距離重採樣 64 點、方向反轉比較、平均距離與最大點誤差計算。
- [x] 固定公開門檻：`shapeScore <= 0.24` 且 `maxPointError <= 0.48`，並要求道路政策與人工審核均通過。
- [x] 以實際 route-art 軌跡計算結果建立 `near-match` 中繼資料；不合格項目留在開發稽核資料，不加入 `routeArt`。
- [x] 更新名稱與描述，讓公開項目使用「近似／道路近似」文字；空集合時顯示明確空狀態。
- [x] 執行幾何單元測試及路線美學頁面的渲染測試。

## 里程碑 4：修正挑戰與細節介面

**檔案：** `js/ui/render.js`、必要時修改 `css/`、`tests/render.test.js`

- [x] 挑戰卡片顯示起點 → 終點、完整距離、路線型態與「開啟完整 GPX」。
- [x] 保留多段挑戰的參考路線，但將北高與雙塔的單一路線置於主連結；主連結不得回到短段。
- [x] 路線詳情顯示官方地標與道路接點的差異，地圖、GPX 與統計全部使用同一正式軌跡。
- [x] 檢查手機窄螢幕、觸控、鍵盤焦點、地圖載入失敗與下載停用狀態。

## 里程碑 5：完整驗證、提交與部署

**檔案：** `README.md`、`docs/PLAN.md`、`docs/TEST-PLAN.md`、`docs/VERIFICATION.md` 及變更檔案

- [x] 執行 `npm run verify`、`node --check js/app.js`、`git diff --check`。
- [x] 執行瀏覽器實測：北高、雙塔、路線美學頁、地圖縮放、GPX 下載與錯誤狀態。
- [x] 檢查 staged 檔案不含 `.env`、token、私人金鑰或其他憑證。
- [ ] 以繁體中文 Conventional Commit 提交實作與測試。
- [ ] 推送前顯示 remote、branch、完整 commit；推送 `main` 至 `origin`。
- [ ] 以 GitHub Pages 公開網址確認 HTTP 200、挑戰頁與資料 bundle 可載入，記錄證據後回報網址。

## 風險與處理

- 長距離路線可能超出 BRouter 回應時間：分批產生、固定節流與有限重試，必要時增加途經點拆解路徑。
- 路由可能選到高速公路、禁行或不適合自行車路段：沿用道路政策硬閘門；不通過就不發佈。
- 路線美學可能全部不通過門檻：保留誠實空狀態，不降低道路安全或圖形檢查門檻。
- 新挑戰分類可能影響數量斷言：測試明確區分地區、挑戰與美學分類，保留舊識別碼及本機資料相容性。

## 驗收條件

- 點選北高直接進入台北 → 高雄完整正式路線；點選一日雙塔直接進入三貂角燈塔 → 鵝鑾鼻燈塔完整正式路線。
- 兩條挑戰的地圖、GPX、距離、海拔、坡度、起終點方向一致，且不出現推測線段。
- 路線美學頁只列出通過幾何與道路閘門的近似項目，不再列出明顯不匹配的錯誤名稱。
- 自動測試與軌跡驗證全數通過，GitHub Pages 部署後可直接瀏覽。
