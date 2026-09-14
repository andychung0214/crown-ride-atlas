# 經典挑戰、GPS Art 與百科校正計畫

> 執行方式：依 superpowers:executing-plans 逐項執行；來源查核與既有程式碼共同作為實作依據。

**目標：** 一日雙塔改為富貴角經西部至鵝鑾鼻；收錄九項指定挑戰、更多台灣 GPS Art；校正百科並讓換頁平滑回頂端。

**架構：** 沿用 HTML、CSS、Vanilla JavaScript、Leaflet、UMD 資料模組與現有軌跡驗證器。地圖和下載共用座標。既有 66 條地區路線不變；已取得軌跡的挑戰獨立呈現，未取得完整可驗證GPX的8項只收錄來源與行程，不假造軌跡。

**規格：** 使用者 2026-09-14 訊息；一日雙塔西線、東進武嶺、中雙塔、東三塔、東雙塔、環島含／不含四極點、環小台北、環大台北、如來神掌、更多路線美學、百科正確定位、每次換頁動畫回頂端。

## 全域限制

- 不讀取或輸出憑證、.env、私人金鑰；現有未追蹤 package-lock.json 保留。
- 既有公開 GPX 可以原樣匯入；重建路線必須走道路路由並標記來源，不能以地標直線冒充實際道路。
- 活動路線、歷史路線與即時通行狀態分開；需要管制查核者明示來源。
- 里程、爬升、坡度需與站內軌跡一致；不冒稱實騎或全天開放。
- 使用者已授權持續修改與推送。完成驗證後顯示 remote、branch、commit 再推送。

## Task 1：換頁回頂端

檔案：js/app.js、tests/app.test.js。

- [x] 在現有 App fixture 注入 scrollTo 與 matchMedia，驗證 hashchange、初始頁與兩種分頁動作呼叫 `{top:0,left:0,behavior:'smooth'}`。
- [x] 驗證 reduced-motion 時使用 instant，軌跡非同步載入與收藏等重繪不重複捲動。
- [x] 修改 focus 為 preventScroll，再於使用者導覽後呼叫回頂端；舊瀏覽器缺少 scrollTo 時不拋錯。
- [x] 執行 `node --test tests/app.test.js`：先有2項新測試失敗，實作後15/15通過；Chrome導航回頂也通過。

## Task 2：挑戰來源與完整軌跡

檔案：tools/route-data/seeds/challenge-*.json、js/data/routes.js、js/data/track-manifest.js、js/data/tracks/challenges.js、相關資料測試、docs/route-research/2026-09-14-challenges.md。

- [x] 將西雙塔的北端與西部經點寫入新ID seed；新增指定挑戰來源、方向、端點與版本描述。
- [x] 補地理行為測試：西雙塔中段在西部，起點接近富貴角；舊東線保留。未取得GPX的環線、四極點及武嶺不宣稱通過幾何測試。
- [ ] 取得公開 GPX 或 BRouter 道路幾何，逐條稽核來源、道路、端點、相鄰點距離、海拔；不為通過檢查而放寬禁行政策。
- [x] 已發布路線同步目錄、manifest、摘要與 GPX；`npm run tracks:validate` 通過 23 個 bundle、69 條路線。8 項來源卡仍待完整 GPX。

## Task 3：GPS Art

檔案：scripts/import-route-art-tracks.mjs、js/data/route-art-catalog.js、js/data/route-art-tracks.js、tests/route-art-catalog.test.js、tests/gpx.test.js、研究文件。

- [x] 從 Janice 作者頁取得芝山大恐龍、小恐龍、2024、高雄小恐龍四個公開 GPX；核對地區與圖形。
- [x] 加入明確作者、來源、跑步分類與站內軌跡；保留原始點序與分段。
- [x] 四份GPX下載後解析與站內座標逐點相同；瀏覽器實際下載成功。

## Task 4：百科

檔案：js/data/bike-parts.js、js/ui/bike-anatomy.js、相關測試、研究文件。

- [x] 逐一對照 32 個零件熱點、導引線終點、SVG 實體圖形與文字。
- [x] 依自行車結構確認各部位區別；修正下管連接位置、煞車系統及輻條張力文字。
- [x] 用實際 SVG 與桌機／390px 顯示核對，記錄於 docs/bike-parts-anatomy-audit.md。

## Task 5：整合與交付

- [x] 執行 `npm run verify`（407／407）、`git diff --check`，重點瀏覽器驗證地圖、分頁、導覽與百科。
- [ ] 更新 README、驗證紀錄與來源矩陣；提交所有本次完成的變更。
- [ ] 合併回 main；顯示 remote／branch／commit；推送並等待 Pages 結果。

## 初步來源

- 雙塔：https://www.cycling-lifestyle.org.tw/challenge/itinerary_view/91
- 中雙塔：https://www.cycling-update.info/classroom/peopel/3589-2020-03-10-09-11-50
- 如來神掌：https://www.bikeexpress.com.tw/2021/cycling-route-buddhas-palm-climb-training/
- 環大台北：https://www.cyclist.org.tw/upfile/file/20260515/20260515163652195219.pdf
- GPS Art：https://janice880624.github.io/janice_sport_blog/map/map.html
- 即時路況：https://168.thb.gov.tw/thb168

## 執行紀錄

- 2026-09-14：根因確認：原一日雙塔 seed 沿三貂角、花東、南迴，與西線名稱不符。開始於 e15f29a，獨立 feature/challenge-catalog-refresh 分支。
- 審查修正：舊 `challenge-twin-towers` 保持東線，西線新增 `challenge-west-twin-towers`，保留使用者本機收藏、完成與覆寫；新增儲存相容性測試。
- 待補而非完成：東進武嶺、中雙塔、東三塔、兩種環島、環小台北、環大台北、如來神掌共8項缺少可驗證完整GPX。西線13.1公里側道權限與鋪面待查，下載前明示規劃參考限制。
