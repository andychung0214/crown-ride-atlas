# 台灣 GPS Art 路線美學圖鑑設計規格

日期：2026-08-14
狀態：已於 2026-08-14 經使用者核准

## 1. 目標

將目前空白的「路線美學」分類改為台灣 GPS Art／Strava Art 圖鑑，首批至少收錄 20 件有公開來源的台灣作品，涵蓋單車、跑步與步行。可以取得公開 GPX／KML 的作品提供站內軌跡預覽與 GPX 下載；只有作品證據、尚無公開軌跡檔的項目仍可列入，但必須明確標示「軌跡待取得」並導向原始來源。

本功能不得改變既有 68 條正式公路車路線、23 個公開軌跡 bundle、地區／挑戰索引、本機編輯、完成標記、地圖或 GPX 功能的既有契約。

## 2. 首批收錄範圍

### 2.1 台灣單車 GPS Art 作品集

以下 17 件作品來自 Mobile01 原作者 CS72 的公開整理頁。來源頁明示這些作品位於台灣，且部分作品附 Strava 路線、活動或 YouTube／Garmin 檔案：

1. 北桃迅猛龍
2. 風櫃兔
3. 桃園紅牛 RED BULL
4. 宜蘭櫻桃鴨
5. 台北天母鯨魚
6. 桃園青埔小貓
7. 台南林老獅卡好
8. 青年公園有鯊魚
9. 大稻埕碼頭姑娘
10. 大安森林大野狼
11. 雲林斗六綠蠵龜
12. 桃園藝文小馬
13. 豬年騎小豬
14. 情人節 LOVE
15. 桃園大竹早安
16. 中壢小象
17. 桃園永安漁港喜羊羊

共同來源：`https://www.mobile01.com/topicdetail.php?f=377&t=5800991`

### 2.2 其他台灣公開作品

18. 新莊足跡＿壬寅臥虎：跑步，運動筆記提供公開 GPX、19 km、作者 Heigo Chang。
19. Heigo Chang 大象作品示例：跑步作品，運動筆記的 GPS Art 專訪可證明作品與創作者；無可取得軌跡時列為來源卡，來源未明示縣市時不得自行填入。
20. 台北櫻花 16K：GPS ART Japan 公開作品，附 Google My Maps。
21. 台北圓環 40K：GPS ART Japan 公開作品，附 Google My Maps。
22. 陽明山佛手：單車，公開作品說明為 135 km、爬升 3,000 m 以上；無可取得 GPX 時列為來源卡。

來源：

- `https://running.biji.co/index.php?act=single&id=DD24D4B6-04C9-423B-9BA3-485C7C9B04E8&q=route`
- `https://running.biji.co/index.php?act=info&id=106950&q=news`
- `https://gpsart.info/en/asia-2/cherry-blossom-in-taipei-taiwan-16km/`
- `https://gpsart.info/en/asia-2/taipei-circle-walk-40km/`
- `https://www.reddit.com/r/Strava/comments/1d3qhxn/waving_hello_from_taipei/`

首批清單可在研究階段增加其他符合相同證據門檻的台灣作品，但不得用搜尋摘要、AI 猜測或人工虛構的折線補足數量。

## 3. 資料可信度與收錄門檻

每件公開作品必須符合下列全部條件：

1. 至少有一個不需登入即可閱讀的 HTTPS 原始來源。
2. 來源能同時證明作品名稱或圖形主題、活動位於台灣，以及活動類型或合理的活動情境。
3. 保留來源平台、原作者／提供者（來源有揭露時）、來源網址與查核日期。
4. 不讀取登入 cookie、token、私人活動、會員資料或其他非公開內容。
5. 不把 Strava、Mobile01、運動筆記、GPS ART Japan 或其他站點的圖片複製進版本庫，也不直接 hotlink 當本站縮圖。
6. 不把人工描圖、形狀模板、搜尋結果截圖或猜測座標宣稱為原作軌跡。

作品分為兩種狀態：

- `track-ready`：取得作者或來源明確公開提供的 GPX／KML／公開地圖幾何，解析後座標位於台灣且至少兩點，可在站內顯示地圖並下載由同一座標產生的 GPX。
- `source-only`：公開來源能證明作品，但目前沒有可合法、穩定取得的軌跡。只顯示作品資料、活動類型、已知數值與來源連結，畫面必須標示「軌跡待取得」。

若來源日後失效，資料保留最後查核日期但狀態改為待重新查核；不得以本站先前的快取聲稱來源仍公開。

## 4. 架構與檔案責任

### 4.1 獨立資料層

建立 `js/data/route-art-catalog.js`，只負責輸出凍結的 GPS Art 作品陣列。每個物件使用下列欄位：

```js
{
  id: "gps-art-xinzhuang-tiger",
  name: "新莊足跡＿壬寅臥虎",
  shapeLabel: "臥虎",
  regionId: "new-taipei",
  regionName: "新北市",
  activityType: "running",
  activityLabel: "跑步",
  status: "track-ready",
  distanceKm: 19,
  elevationGainM: 3,
  summary: "…",
  author: "Heigo Chang",
  sourcePlatform: "運動筆記",
  sourceUrl: "https://…",
  routeSourceUrl: "https://…",
  verifiedAt: "2026-08-14",
  segments: [[
    { lat: 25.0, lng: 121.4, ele: 20 },
    { lat: 25.01, lng: 121.41, ele: 22 }
  ]]
}
```

`source-only` 項目不提供 `segments` 或 `coordinates`、不得提供假的距離／爬升；來源沒有數值時欄位省略。`track-ready` 的公開軌跡以 `segments` 儲存在 `js/data/route-art-tracks.js`，catalog 直接引用同一份凍結陣列，避免圖鑑 metadata 與較大的軌跡資料混在同一檔案。

既有 `js/data/routes.js` 的 `routes` 維持 68 條，不把 GPS Art 作品插入一般路線索引。既有錯誤「環小台灣」與早期人工圖形仍維持 audit-only，不會重新公開。

### 4.2 啟動與資料流

`index.html` 以原生 script 載入新資料檔；`js/data/routes.js` 或 `js/app.js` 將獨立作品陣列掛到既有 `state.routeArt`。一般路線仍由 `Store.list()` 產生；GPS Art 不寫入 Store，因此不會被本機覆寫、完成標記或一般路線篩選污染。

`routeArtPage` 直接接受 GPS Art 物件，而非要求每件作品都能在 `state.allRoutes` 找到同 ID 的正式公路車路線。

## 5. 頁面與互動設計

「路線美學」頁保留日式紙張與四領騎衫主題，新增：

1. 頁首顯示公開作品總數、可預覽軌跡數與資料說明。
2. 四個篩選：全部、單車、跑步／步行、有站內軌跡。
3. 每張作品卡顯示作品名稱、圖形主題、縣市、活動類型、來源平台、作者（若有）、距離／爬升（若來源提供）與查核日期。
4. `track-ready` 卡片顯示本站 Leaflet 路線圖；每個來源 segment 必須分開繪製，不得在段界畫線。圖磚失敗時沿用同樣保留段界的 SVG 軌跡降級。提供「下載 GPX」與「查看原始來源」。
5. `source-only` 卡片不畫假折線，使用一致的文字型作品標記，顯示「軌跡待取得」並提供「查看原始作品」。
6. 外部連結在新分頁開啟，使用 `target="_blank"` 與 `rel="noopener noreferrer"`。
7. 篩選結果以 `aria-live` 播報；按鈕觸控範圍至少 44×44px。

首版不新增獨立 GPS Art 詳情路由、評分、留言、遠端投稿或後端同步，避免擴大範圍。

## 6. 軌跡取得與處理

1. 只下載來源頁明確提供的公開 GPX／KML，或讀取公開 Google My Maps KML；Strava 登入後下載、私人活動與受限制 API 不在範圍。
2. 解析後驗證每點經緯度有限、落在台灣合理範圍、至少一段、每段至少兩點，且同一段的相鄰點不得有達 500 m 的異常跳點。
3. 公開 KML 的每個原始 `LineString` 是權威 segment；保留文件順序與段內點序，不重排、不反轉、不補點，也不在段與段之間畫線。正式 68 條路線維持既有 flat `coordinates` 契約不變。
4. 站內 GPX 與地圖共用同一份已驗證 `segments`；每段輸出為獨立 `<trkseg>`，下載後再解析仍須保留相同段界。既有 flat `coordinates` GPX 保持單一 `<trkseg>` 相容行為。
5. 跑步／步行軌跡只標示對應活動，不套用公路車道路政策或「可騎」宣稱。

## 7. 錯誤與降級

- 單件軌跡解析失敗：該件降級為 `source-only`，其他作品仍顯示。
- Leaflet 或圖磚失敗：使用既有 SVG fallback。
- 外部來源失效：卡片顯示「來源待重新查核」，不移除其他資料。
- GPX 建立失敗：以 `aria-live` 顯示可理解錯誤，不拋出未處理例外。
- 空篩選結果：顯示清除篩選按鈕，不退回原本「尚無資料」的全頁空狀態。

## 8. 測試與驗收

### 8.1 自動測試

1. 圖鑑至少 20 件、ID 唯一、來源皆為 HTTPS、活動類型只接受 `cycling`／`running`／`walking`。
2. `track-ready` 必須有至少一個有效台灣座標 segment，且每段至少兩點；`source-only` 不得帶 `segments` 或假座標。
3. 每件作品有 `sourceUrl`、`sourcePlatform`、`verifiedAt`，來源沒有提供的數值不得被補成 0。
4. `Data.routes.length` 仍為 68，正式 track manifest 仍精確涵蓋原有 68 條路線。
5. 路線美學篩選能正確區分活動與軌跡狀態，且不修改來源陣列。
6. 渲染測試涵蓋數量、狀態 badge、來源連結、外部連結安全屬性、空篩選結果與 GPX 按鈕條件。
7. GPX 下載 segments 與地圖 segments 相同，且不在段界產生額外連線。
8. `npm run verify` 零失敗，正式 validator 仍回報 23 個 bundle、68 條路線。

### 8.2 瀏覽器驗證

在本機 HTTP 與 GitHub Pages 實測：

- 桌機與 390px 行動尺寸能看到至少 20 張作品卡，無水平溢位。
- 全部／單車／跑步／有軌跡篩選結果正確。
- 至少一件 `track-ready` 作品顯示 Leaflet，切斷圖磚後可降級為 SVG。
- 至少一件 `source-only` 作品不出現假地圖或 GPX 按鈕。
- 原始來源連結可開啟，且不取用登入狀態或私人資料。
- 原有首頁、一般路線索引、北高與雙塔詳情、本機編輯器仍可使用，主控台無阻斷錯誤。

## 9. 文件與發布

同步更新 README、`docs/PLAN.md`、`docs/TEST-PLAN.md`、`docs/VERIFICATION.md` 與路線研究文件，列出作品來源、track-ready／source-only 數量、已知限制與驗證證據。

完成後依序執行完整測試、瀏覽器驗證與程式碼審查。推送前顯示 remote、branch、commit；推送 `main` 後等待 GitHub Pages workflow 成功，最後以公開網址 HTTP 200 與頁面內容驗證完成。
