# 狂輪誌測試計畫

首版執行結果與未驗證項目請見 [`VERIFICATION.md`](VERIFICATION.md)。

## 現行基準：GPS Art 三條站內軌跡、分頁與公路車部件百科（2026-08-31）

現行 `npm run verify` 基準為 396 項測試、23 個公開 bundle 與 68 條正式路線。GPS Art production catalog 精確為 25 件＝5 `track-ready`＋0 `source-download`＋20 `source-only`；公路車部件百科維持 4 個分類、32 筆內容。兩者都不寫入 `TrackManifest` 或正式路線資料。

### GPS Art 自動測試

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| 三狀態與 production 數量 | `node --test tests/route-art.test.js tests/route-art-catalog.test.js` | 三狀態互斥；正式 catalog 為 25／5／0／20；12 個 Strava route/activity 連結精確且皆標示 `login-required` |
| 五種篩選、分頁與統計 | `node --test tests/route-art.test.js tests/render.test.js tests/app.test.js` | 全部 25、自行車 21、跑步／步行 4、可下載 GPX 5、站內地圖 5；每頁 12 件，篩選重設頁碼且超界頁碼受限制 |
| 三種卡片行為 | `node --test tests/render.test.js tests/app.test.js tests/gpx.test.js tests/map.test.js` | `track-ready` 才掛載地圖與建立本站 GPX；synthetic `source-download` 只建立安全外部 anchor，不掛地圖、不建立 Blob；`source-only` 無下載按鈕 |
| 安全多格式來源解析 | `node --test tests/route-art-source.test.js` | GPX／KML／KMZ／GeoJSON（含單一 Feature 的 FeatureCollection）依內容解析；拒絕 HTML、壓縮異常、過大內容、非有限／台灣外座標與同段異常跳點 |
| 三條新增軌跡與 GPX | `node --test tests/route-art-catalog.test.js tests/gpx.test.js` | 河濱海馬、野雁西飛、汐鴿均有凍結 provenance；站內 GPX 解析後與地圖 `segments` 逐段逐點一致 |
| 19 件 ShapeMiles 候選 | `node --test tests/route-art-downloads.test.js` | 精確 registry、HTTPS allowlist、逾時／大小／錯誤遮蔽、無座標 serializer 與真正原子寫入受測；一般測試不呼叫現場網路 |
| 現場匿名查核 | 需要重新查核時獨立執行 `npm run art:verify-downloads` | 只有 19/19 全數成功才產生摘要；任一 HTTP／TLS／格式／座標失敗都保留既有產物或維持不存在，不建立部分檔 |
| 正式路線與百科隔離 | `npm run verify` | GPS Art 維持 25 件獨立 catalog，部件百科維持 32 筆；published validator 仍為 23 個 bundle／68 條正式路線 |

### GPS Art 真瀏覽器驗收與證據界線

| 測試項目 | 測試方式 | 預期結果／記錄原則 |
|---|---|---|
| Production DOM、五篩選與分頁 | 本機 HTTP 開啟 `#/route-art`，依序點選五個篩選與頁碼 | 全部 25、自行車 21、跑步／步行 4、可下載 GPX 5、站內地圖 5；全部篩選為 12／12／1 三頁，5 張地圖與 5 個本站下載控制 |
| 原始路線登入提示 | 抽查 12 個 Strava route/activity 連結 | 12 個連結存在並顯示來源平台可能要求登入；不得使用既有登入狀態抓取 GPX，也不得把頁面誤稱為匿名下載 |
| Production 外站下載界線 | 檢查卡片與連結類型 | production 外站下載連結精確為 0；不得宣稱已測 production `source-download` 或跨來源下載。相關行為只由 synthetic fixture／自動測試證明 |
| 1440px 與四主題 | 逐一點選 `yellow`、`green`、`polka`、`white` | 五篩選、狀態文字、啟用狀態與焦點外框可辨識；不只依賴顏色 |
| 390 outer px | Windows in-app Browser，量測 document 與篩選控制 | `clientWidth=375`、`scrollWidth=375`，無水平溢位；控制至少 44px |
| 最小 320 CSS client px | 使用 335 outer px 取得 320 client px | `clientWidth=320`、`scrollWidth=320`，無水平溢位；篩選控制實測約 47.6px |
| 320 outer px 界線 | Windows 非 overlay 捲軸，量測既有根寬 | `clientWidth=305`、`scrollWidth=320`，保留 15px 水平差；根因是既有 `html { min-width: 20rem; }`，不得記成 320 outer px 無溢位 |
| 真實 touch | 使用真實觸控裝置操作篩選與下載 | 本輪 controller 未提供真實 touch 證據；viewport mouse 點選與 CSS 44px 量測不能取代實機 touch，完成前必須明記未執行 |
| Reduced Motion | 以支援 media emulation 的瀏覽器設定 `prefers-reduced-motion: reduce` | 本輪未執行真實 media emulation；精確 CSS／自動測試只證明規則存在，不得冒稱實機通過 |

### 公路車部件百科現行測試

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| 資料契約與內容 | 執行 `node --test tests/bike-parts.test.js` | 精確 4 個分類、32 筆部件、ID／編號唯一；每筆具名稱、用途、保養、注意事項與相關部件，不以重複模板替代內容 |
| 路由與渲染 | 執行 `node --test tests/router.test.js tests/render.test.js tests/app.test.js` | `#/bike-parts` 可解析；只缺 BikeAnatomy 或 mount 失敗時不 fatal；32 個 native details 各有名稱與七類完整內容 |
| 圖解定位與互動 | 執行 `node --test tests/bike-anatomy.test.js` | 32 個零件各有唯一可見圖形；測試解析 line／circle／rect／Q/C path 並考慮 stroke、fill、旋轉，逐一確認資料熱點命中實際著色區；桌機 SVG 與行動版 HTML marker 使用相同 ID；click／Enter／Space、重疊 marker 最近點、237px touch 解算、拖曳／雙指與 fallback lifecycle 均受測 |
| 專屬樣式隔離 | 執行 `node --test tests/css.test.js` | 以精確 rule／media helper 鎖定 hidden fallback、44px 觸控區與 30px 可見編號、窄版隱藏 SVG 互動層、hover 非色彩狀態及 reduced-motion |
| 正式路線隔離 | 執行 `npm run verify` | 396 項測試通過；23 個公開 bundle／68 條正式路線維持不變；部件百科不改動 routes 或 `TrackManifest` |

| 真瀏覽器項目 | 測試方式 | 預期結果／記錄原則 |
|---|---|---|
| 1440px 桌機 | Edge 開啟 `#/bike-parts` | 32 個熱點、導引線與名稱對應正確；車架、操控接觸點、傳動系統、輪組與煞車的標記落在對應圖形，無水平溢位 |
| 390px 窄版 | Edge 開啟 `#/bike-parts` | 原 SVG hotspot／leader／label 隱藏；32 個 HTML 觸控區至少 44×44px，內部 30px 編號可見，車架與輪組仍可辨識 |
| 重疊觸控 | 以 237px SVG 比例測試飛輪／貫通軸重疊 | 即使 DOM target 是貫通軸，座標位於飛輪中心時仍依最近熱點選到飛輪；真實 touch 裝置仍列為未執行，不以事件測試冒稱實機通過 |

## 歷史快照：2026-08-25 公路車部件百科

> 以下 317 項測試與百科瀏覽器結果是 2026-08-25 的封存基準，不代表目前測試數；現行數字以上方 2026-08-31 基準為準。

當日 `npm run verify` 基準為 317 項測試、23 個公開 bundle 與 68 條正式路線；部件百科固定為 4 個分類、32 筆內容，且不寫入 `TrackManifest` 或正式路線資料。

### 自動測試

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| 資料契約與內容 | 執行 `node --test tests/bike-parts.test.js` | 精確 4 個分類、32 筆部件、ID／編號唯一；每筆具名稱、用途、保養、注意事項與相關部件，不以重複模板替代內容 |
| 路由與渲染 | 執行 `node --test tests/router.test.js tests/render.test.js tests/app.test.js` | `#/bike-parts` 可解析；只缺 BikeAnatomy 或 mount 失敗時不 fatal；32 個 native details 各有名稱與七類完整內容 |
| 圖解互動 | 執行 `node --test tests/bike-anatomy.test.js` | 32 個 HTML marker、click／Enter／Space、單一 surface delegated selection、拖曳後一次性 click suppression、重疊 marker 最近點、混合 target 雙指防誤選、237px 非 1:1 rect 的單指／midpoint 換算、capture／lost capture 與 fallback lifecycle 均受測 |
| 專屬樣式隔離 | 執行 `node --test tests/css.test.js` | 以精確 rule／media helper 鎖定 hidden fallback、44px marker、窄版隱藏 SVG 互動層、hover 非色彩狀態及 reduced-motion，不以貪婪 regex 跨規則 |
| 正式路線隔離 | 執行 `npm run verify` | 23 個公開 bundle／68 條正式路線維持不變；部件百科不改動 routes 或 `TrackManifest` |

### Chrome 手動與響應式驗收

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| 1440×900 桌機 | 開啟 `#/bike-parts` 並滑過 hotspot／分類清單 | 森林綠色系車架幾何可辨識；hotspot、導引線、標籤與清單同步出現非色彩 hover 狀態，無水平溢位 |
| 768×1024 平板 | 開啟 `#/bike-parts` 並切換部件 | 圖解、詳情與分類清單可讀，控制項焦點清楚 |
| 390px 與 320px 窄版 | 開啟 `#/bike-parts` | 原 SVG hotspot、leader、label 均隱藏；32 個 HTML marker 顯示 01–32、每個至少 44×44 CSS px、字形為 screen-space 尺寸；百科內容無水平溢位 |
| 鍵盤 | 使用 Chrome 真實 Tab、Enter、Space | 熱點、前後一筆、放大／縮小與重設均可操作，選取部件與狀態播報同步 |
| Pointer Events | 點選鏈條／飛輪等重疊 marker，並以 marker＋背景、marker＋marker、SVG hotspot＋背景進行單指／雙指；1.25 倍時從下管附近背景拖 60 CSS px 後觀察合成 click，再正常點擊鏈條 | mouse click 以最近 hotspot 解開重疊；diagram child 不重複播報；touch／pen 記錄 direct part 或 22px 最近點；拖曳後的合成 click 不誤選且只抑制一次，下一次正常 click 可用 |
| 四主題 | 依序切換四套領騎衫主題 | 主題切換不破壞百科文字、焦點、熱點或車架幾何辨識 |
| 文字降級 | 略過 BikeAnatomy、強制 SVG 建立失敗，再以 `tests/fixtures/bike-anatomy-lifecycle.html` 掛載／destroy 成功增強 | 成功掛載時 hidden fallback computed `display:none` 且 rect 為 0；destroy 後恢復可排版，32 個 native details 各有名稱及七類完整文字 |
| 減少動態效果 | 以支援 media emulation 的瀏覽器設定 `prefers-reduced-motion: reduce` 後開啟 | 不播放長動畫，平移／縮放與選取仍可用；若控制介面不支援此模擬，必須明記未執行而非宣稱通過 |

## 歷史快照：2026-08-14 GPS Art 圖鑑增補

> 以下 264 項測試與 GPS Art 數值是 2026-08-14 的封存基準，不代表目前版本；現行數字以上方 2026-08-31 基準為準。

目前候選版完整基準為 `npm run verify` 264 項測試通過，正式 validator 維持 23 個 bundle／68 條路線。

### 自動測試

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| Catalog 契約 | 執行 `node --test tests/route-art.test.js tests/route-art-catalog.test.js` | 精確 22 件、ID 唯一、公開來源為 HTTPS；活動只接受單車／跑步／步行，來源未明示的數值或地區不補猜 |
| 狀態與假幾何防護 | 同上，逐件檢查 `track-ready`／`source-only` | 2 件 track-ready 有有效台灣 `segments`；20 件 source-only 不含 `segments` 或 `coordinates` |
| 分段地圖 | 執行 `node --test tests/map.test.js` | Leaflet 與 SVG 每個來源 segment 各自繪製，不在段界接線；正式路線 flat `coordinates` 行為不變 |
| 分段 GPX | 執行 `node --test tests/gpx.test.js` | 每段輸出獨立 `<trkseg>`，重新解析保留段界與點序；既有正式路線仍為單一 segment |
| 軌跡 provenance | 執行 `node --test tests/route-art-catalog.test.js` | 每件軌跡產物都有來源與 canonical geometry SHA-256；兩件必要 KML 鎖定已核准來源雜湊、幾何雜湊、逐段點數與總點數，任何變動均須人工重新查核 |
| runtime 單件降級 | 同上，以缺少軌跡與無效 `segments` 建立瀏覽器 catalog | catalog 仍有 22 件；只有失效作品降為不含幾何的 source-only，另一件合法作品維持 track-ready；匯入器／CI 對必要來源仍 hard-fail |
| 圖鑑渲染 | 執行 `node --test tests/render.test.js tests/app.test.js` | 四種篩選正確、結果陣列不被修改；只有 track-ready 建立地圖與 GPX 按鈕，source-only 顯示「軌跡待取得」 |
| 外部連結安全 | 檢查來源卡渲染測試 | 連結使用 HTTPS、`target="_blank"` 與 `rel="noopener noreferrer"` |
| 正式路線隔離 | 執行 `npm run verify` | `Data.routes` 維持 68 條；正式 validator 維持 23 個 bundle／68 條路線，GPS Art 不加入 manifest |

### Chrome 手動與行動驗收

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| 四種篩選 | 在 `#/route-art` 依序選全部、單車、跑步／步行、有站內軌跡 | 結果數與卡片活動一致；有站內軌跡精確顯示 2 件，`aria-live` 播報結果 |
| source-only 誠實顯示 | 抽查單車與跑步來源卡 | 顯示圖形文字標記與「軌跡待取得」，沒有 Leaflet、SVG 假折線或 GPX 按鈕 |
| track-ready 互動 | 抽查台北櫻花 16K、台北圓環 40K | 各有地圖、來源連結與 GPX 按鈕；按鈕呼叫後有可理解狀態訊息 |
| 圖磚失敗降級 | 載入頁面後阻擋 OpenStreetMap 圖磚或停用網路，再重新掛載／開啟作品 | 以 SVG 顯示相同 segment 數，段界不產生額外連線；文字與來源仍可用 |
| 390×844 行動版 | Chrome 設定 390×844，檢查全部與有軌跡篩選 | 單欄卡片、地圖／來源標記至少 256px、控制項至少 44×44px、無水平溢位 |
| 桌機版 | Chrome 設定至少 1280px 寬 | 圖鑑兩欄、內容不截斷、兩件地圖可讀、焦點輪廓清楚 |
| 外部來源 | 以鍵盤聚焦並開啟來源連結 | 連結可辨識、在新分頁開啟，原分頁不被外部頁控制 |
| 主控台 | 在桌機及 390px 重載並完成篩選／GPX 按鈕操作 | 沒有由本站程式造成的 error／warn；若第三方圖磚失敗，畫面應降級而非阻斷 |

> 瀏覽器 Blob 下載是否被自動化工具捕捉，與按鈕是否呼叫是不同驗收。若工具沒有下載事件介面，只記錄按鈕與狀態訊息；GPX XML、MIME、段界與 round-trip 由自動測試驗證，不可宣稱已在 Chrome 擷取檔案。

## 2026-08-09 bike100 對照增補（歷史基準）

- 路線索引提供關鍵字、區域、縣市、難度、最陡坡度、行程時間與排序；結果以每頁 24 條分頁。
- 最陡坡度與行程時間採半開級距（最後一級無上限），小數與 59／60、119／120 等邊界均不得遺漏。
- 路線卡與詳情可切換「騎過此路線」，狀態只寫入目前瀏覽器的 `localStorage`。
- 內建路線覆寫不得改動核准軌跡的 `maxGradePct`；匯入或儲存不一致數值時必須拒絕。
- 公開資料為 66 條地區路線＋2 條完整挑戰，共 68 條；路線美學頁可在沒有通過幾何閘門的項目時顯示空狀態。
- 「環小台灣」audit bundle 仍可由測試重現，但不得出現在公開 manifest、路線索引或路線美學頁。

## 自動化單元測試

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| 路線資料契約 | 執行 `npm test`，檢查地區、正式路線、挑戰、GPS Art 與識別碼 | 22 地區、66 條地區路線、2 條完整挑戰；另有 22 件獨立 GPS Art，不納入正式路線數 |
| 離島與舊路線美學軌跡 | 執行 `node --test tests/task11-islands-art.test.js` 與 bundle validator | 離島正式 seed 維持 approved；不相符的舊路線美學只保留 audit 資料，不進入公開 manifest；新 GPS Art 另由 catalog／segments 契約驗證 |
| 全站正式軌跡資料 | 執行 `node --test tests/track-data.test.js` | 66 條地區路線、2 條挑戰共 68 條；全數人工核准，經緯度、海拔與累積距離為有限數值且距離不倒退 |
| 全站道路政策稽核 | 執行 `node --test tests/road-policy-audit.test.js` | 受版控原始幾何與 waytags 可完整重建 68 條路線；幾何與稽核 SHA-256 同時綁定正式 bundle，未核准違規為 0 |
| 搜尋、篩選與排序 | 以名稱、地區、標籤、難度、距離與爬升測試純函式 | 結果正確，排序不修改來源陣列 |
| Hash 路由 | 測試首頁、固定頁、地區、路線與錯誤編碼 | 正確解析參數，未知網址回傳找不到頁 |
| 地理運算 | 測試 Haversine 距離、總距離與 SVG 座標正規化 | 距離落在合理範圍，無效座標不污染結果 |
| GPX | 測試輸出後重新解析、命名空間與非法座標 | 合法 GPX 保留名稱與座標，非法內容被拒絕 |
| 四套主題 | 測試主題正規化、DOM 套用與本機儲存失敗 | 僅接受四套主題，儲存失敗不阻止畫面套用 |
| 本機路線資料層 | 模擬新增、覆寫、刪除、重設、備份與匯入 | 內建資料不被修改，衝突與無效資料數量正確回報 |
| 圖片處理 | 測試檔案類型、10MB 限制與縮放尺寸 | 只接受 JPEG／PNG／WebP，圖片不放大且維持比例 |
| 編輯表單 | 測試建立、既有路線更新與欄位驗證 | 數值與標籤正規化，識別碼與建立時間正確保留 |
| 地圖與頁面格式 | 測試 SVG 路徑、海拔剖面、騎乘時間、難度與標題 | 純函式輸出穩定且具可理解文字 |
| 建構期真實軌跡 | 執行 `node scripts/validate-tracks.mjs --regions keelung,taipei,new-taipei,taoyuan,hsinchu-city,hsinchu-county,miaoli --published` | 7 個 bundle、21 條路線均可重新計算出相同距離、爬升、坡度與主要爬坡，且具完整人工審查資料 |
| 中部真實軌跡 | 依序驗證 `taichung,changhua,nantou,yunlin` 的 staging 與 published bundle | 4 個 bundle、12 條路線均具 BRouter／SRTM 來源、人工地標、審查時間與可重算摘要 |
| 中部道路例外 | 檢查 12 份 BRouter waytags 與 reviewer note | 台 61 主線／匝道、禁行步道、私人道路與未鋪面捷徑均排除；保留例外具長度、標籤與官方通車證據 |
| 南部真實軌跡 | 依序驗證 `chiayi-city,chiayi-county,tainan,kaohsiung,pingtung` 的 staging 與 published bundle | 5 個 bundle、15 條路線均具 BRouter／SRTM 來源、人工地標、審查時間、路線級海拔設定與可重算摘要 |
| 南部道路閘門 | 檢查 15 份 BRouter raw waytags、單行方向、live OSM 幾何與 reviewer note | 阿里山、梅山、甲仙六龜與壽卡均使用一般道路；港區、過港隧道、草埔森永隧道、服務道路、步道、私人道路及未鋪面捷徑均排除；`service`／`track` 必須為 0，除非精確段落另有官方公開與鋪面證據 |
| 旗津島內 GPX | 檢查 `kaohsiung-harbor` 軌跡座標與 raw waytags | GPX 僅含旗津公共道路；渡輪、跨水域、過港隧道、壽山、高雄港北岸與港區管制道路的里程及海拔均不納入 |
| 台 9 戊閘門 | 檢查 `pingtung-shouka-mudan` raw waytags 與道路疊圖 | 使用台 9 戊及台 9 一般道路；`tunnel`、`motorroad`、`trunk`、`track`、`service` 與權限禁制均為 0，所有單行道路順向 |
| 單行道逆向閘門 | 以合成 BRouter raw messages 測試 `reversedirection=yes` 與 `oneway=yes` 組合 | 無明確自行車逆向例外時拒絕建構並列出座標、長度、完整標籤；僅放行 `oneway:bicycle=no`、`bicycle:backward` 合法值或 `cycleway*` 的 `opposite*` 合法值 |
| 中部路線級海拔 | 比較草嶺、杉林溪及兩條濱海路線的 100／100、500／200 等視窗 | 深谷側坡假峰與濱海 SRTM 微幅雜訊受抑制，原因、比較值及交叉檢核來源可追溯 |
| 軌跡重採樣幾何 | 對北部 21 條 BRouter 原始快取逐點量測重採樣結果 | 每條距離誤差 ≤ 0.5%、原始點到重採樣折線最大偏差 ≤ 5m、相鄰點 ≤ 80m；非必要 30m 以下片段 ≤ 5%，必要髮夾彎短片段另行回報 |
| 局部彎道回歸 | 建立 10km 合成路線，使整體距離誤差先達標但單一彎道原始偏差 > 5m | 自適應取樣不得只依全程距離停止；保留彎點後偏差 ≤ 5m |
| 轉彎與髮夾彎 | 建立 90° 轉彎、20m 半徑 180° 髮夾彎與密集 SRTM 雜訊資料 | 轉彎點保留，髮夾彎距離誤差 ≤ 0.5%，一般雜訊不產生大量非必要短片段 |
| 路線級海拔設定 | 測試預設 100 公尺與可追溯的路線級平滑設定 | 一般路線保留 100 公尺分析；北橫巴陵、宇老、司馬庫斯只在具原因與 HTTPS 交叉檢核來源時使用 500 公尺平滑 |

## Live OpenStreetMap 幾何審查流程

1. 先掃描 BRouter raw messages，將 `service`、`track`、`footway`、`path`、`steps`、施工道路與權限禁制列為拒絕項目；不得以「路由快照過舊」直接核准。任何例外都必須綁定該批路段座標、距離與 waytags 的 SHA-256，路段一變即失效。
2. 以風險訊息的座標與長度定位 GPX 的正確出現位置。往返路線可能有重複座標，必須依前後軌跡與方向選對去程或回程，不可只取第一個座標。
3. 對問題段建立足以涵蓋整段折線的 bbox，請求 live OSM `/api/0.6/map?bbox=<west,south,east,north>`。不可只看 way 頁面的首尾節點，因為端點相接不代表中間幾何沿同一條道路。
4. XML 解析必須同時納入自閉合 `<node .../>` 與帶 `<tag>` 子節點的非自閉合 `<node ...>...</node>`。漏掉後者會遺失道路共用節點，造成假的偏離或斷線。
5. 將 GPX 問題段等距取樣，計算每個取樣點到 live way 完整折線各線段的距離，並記錄最近 way 的 `highway`、`ref`、`surface`、`access` 與 `bicycle`。交叉口共用節點可同時落在多條 way，判斷時須保留所有距離容許值內的候選道路。
6. 只有 raw 與 live 幾何的禁止道路均為 0 才可核准。若 `service`／`track` 或權限禁制無法降為 0，必須提供該精確段落的自行車通行／官方公開騎乘與鋪面證據，並綁定路段 SHA-256、距離上限與 HTTPS 來源；一般景點、相鄰省道或 way 端點資訊不構成證據。
7. reviewer note 應記錄原問題長度、修正控制點、live way／node、取樣結果與最後數值；修改後重新產生 cache，且 `reviewedAt` 必須晚於 `generatedAt`。

## 瀏覽器端對端與手動功能

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| 首頁進站 | 以 HTTP 開啟首頁，逐一點選主要導覽 | 精選、地區、挑戰、路線美學與我的路線均可到達 |
| 直接開啟 HTML | 以 `file://` 開啟 `index.html` | 主要內容可操作，地圖改用 SVG，不出現阻斷錯誤 |
| 搜尋到詳情 | 搜尋「風櫃嘴」，套用台北市與難度篩選後開啟卡片 | 清單即時更新，網址與詳情內容對應同一路線 |
| 主題持久化 | 依序切換黃、綠、圓點、白主題並重新整理 | 色彩與文字對比正確，重新整理後保留最後選擇 |
| GPX 下載 | 在路線詳情下載 GPX 並以文字編輯器檢查 | 檔名安全，MIME 與 XML 結構正確，含至少兩個軌跡點 |
| 新增路線 | 開啟我的路線，填入欄位並匯入合法 GPX、圖片後儲存 | 新路線出現在清單與詳情，可重新整理後保留 |
| 編輯與刪除 | 編輯內建／自訂路線後刪除，再使用重設 | 覆寫與刪除立即反映；重設後內建資料恢復 |
| 備份與還原 | 下載 JSON、重設本機資料，再匯入備份 | 匯入前顯示有效／略過／衝突數量，確認後還原 |
| 錯誤處理 | 匯入無軌跡 GPX、超過 10MB 圖片、錯誤版本 JSON | 顯示可理解錯誤，既有資料與畫面仍可使用 |
| 離線降級 | 載入後停用網路，再開啟路線詳情 | 文字、圖片與本機資料可讀，地圖以 SVG 降級呈現 |
| 北部 21 條路線詳情 | 逐條開啟基隆、台北、新北、桃園、新竹市、新竹縣與苗栗的路線詳情 | 標題、距離、爬升、坡度區間、主要爬坡、人工地標、Leaflet 道路疊圖與 GPX 下載控制均顯示 |
| 中部 12 條路線詳情 | 逐條開啟台中、彰化、南投與雲林的路線詳情 | 標題、真實距離與爬升、Leaflet、海拔剖面、人工地標、GPX 控制及取樣說明均顯示 |
| 南部 15 條路線詳情 | 逐條開啟嘉義市、嘉義縣、臺南、高雄與屏東的正式路線詳情 | 相符路線 ID、真實距離與爬升、「路線資料已載入」、Leaflet、海拔剖面、人工地標、GPX 控制及取樣說明均顯示，載入失敗為 0 |
| 南部動態管制提醒 | 開啟阿里山、梅山、南化、甲仙六龜、旗津、國境之南、大鵬灣與壽卡牡丹詳情 | 顯示山路封閉、港區／渡輪、落山風、跨海大橋及台 9 戊等對應警示；旗津不得宣稱含渡輪或北岸里程 |
| 取樣原則揭露 | 開啟任一北部真實路線詳情並檢查資料來源段落 | 顯示一般路段約 30–80m，並明示髮夾彎與局部高曲率道路會加密取樣 |
| 建構期 OSM 疊圖稽核 | 以 `tools/route-data/audit.html?route=<id>` 逐條疊合 OpenStreetMap | 軌跡貼合可騎道路；不得含樓梯、私人道路、施工道路或明顯未鋪面捷徑，例外必須有官方路線證據與審查註記 |
| 宇老／司馬庫斯單向 GPX | 開啟「宇老觀景台」與「司馬庫斯部落挑戰」詳情 | 明示單向 GPX 不得反轉騎乘，回程須依當日交通管制另行安排；司馬庫斯另顯示狹路、單向時段、櫻花季總量管制與最新公告查核要求 |
| 中部動態管制提醒 | 開啟大雪山、西進武嶺、杉林溪、草嶺、日月潭及彰化／雲林海線詳情 | 顯示鐵門／雪季／園區／櫻花季／禁止騎乘段及台 61 分流等對應警示 |
| 東部 9 條路線詳情 | 逐條開啟宜蘭、花蓮與台東的正式路線詳情 | 相符路線 ID、真實距離與爬升、「路線資料已載入」、Leaflet、海拔剖面、人工地標、GPX 控制及取樣說明均顯示，載入失敗為 0 |
| 東部高風險道路 | 開啟太平山、花蓮縱谷、縣道 197 與南迴壽卡詳情 | 顯示宜專 1 線單線雙向、馬太鞍溪鋼便橋、碎石段前折返及台 9 戊替代道路警示 |
| 東部 raw 道路閘門 | 掃描 9 份 BRouter raw waytags 與單行方向 | 禁止道路與權限禁制皆為 0；南迴的 tunnel、motorroad、trunk 與單行道路逆向亦為 0 |
| 東部 live OSM 抽查 | 每線以 `/api/0.6/map?bbox=` 查核 5 個幾何窗口 | 45/45 命中合法道路，並保留交叉口共用節點的全部候選 way |
| 東部研究文件同步 | 逐條比對 `docs/route-research/task10-east.md` 與 9 份正式 seed | 每條標題、方向、起終點、全部道路吸附點名稱與座標均以正式 seed 為唯一來源，不保留早期景點草案 |
| 東部高山挑戰映射 | 檢查 8 個經典挑戰及「太平山登高」routeIds | 不再把花東縱谷與西進武嶺拼成東進武嶺；太平山挑戰只連結 `yilan-taipingshan`，並明載土場至太平山莊入口 |

## RWD 與行動觸控

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| 360×800 手機 | 以瀏覽器裝置模式檢查首頁、清單、詳情與編輯器 | 無水平溢位；導覽可觸控；表單、地圖與卡片維持可讀 |
| 768×1024 平板 | 直向與橫向旋轉後操作搜尋與編輯 | 欄數與間距合理，旋轉後沒有內容消失或對話框超界 |
| 1440×900 桌機 | 檢查最大內容寬度與兩欄詳情 | 留白、閱讀行長與影像比例符合藝術方向 |
| 觸控目標 | 使用開發者工具量測導覽、按鈕與表單控制項 | 主要互動目標至少 44×44px，彼此有足夠間距 |
| 軟體鍵盤 | 手機開啟搜尋與編輯欄位 | 欄位不被鍵盤完全遮住，可捲動至儲存與取消 |

## 無障礙

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| 鍵盤導覽 | 僅用 Tab、Shift+Tab、Enter、Space 與 Escape 操作 | 焦點順序合理、焦點清楚；對話框可關閉且焦點不迷失 |
| 跳至主要內容 | 頁面載入後按 Tab 並啟用跳轉連結 | 焦點移至主要內容，略過重複導覽 |
| 語意結構 | 以瀏覽器無障礙樹檢查 heading、nav、main、form、dialog | 地標與標題層級可理解，控制項具名稱 |
| 狀態播報 | 使用 NVDA 操作篩選、儲存、刪除與匯入 | 結果數與成功／錯誤訊息由禮貌型 live region 播報 |
| 色彩對比 | 以 DevTools 檢查四主題文字、按鈕與焦點 | 一般文字達 WCAG AA 4.5:1，大字達 3:1，焦點清晰 |
| 減少動態效果 | 作業系統啟用 Reduce Motion 後重新載入 | 平滑捲動與非必要動畫停用，功能不受影響 |
| 200% 縮放 | 桌機瀏覽器縮放至 200% | 內容可重排，不截斷文字或要求雙向捲動 |

## SEO 與靜態託管

| 測試項目 | 測試方式 | 預期結果 |
|---|---|---|
| Meta 與 Open Graph | 檢查 `index.html` 的 title、description、OG 與 theme-color | 中文名稱、英文名稱與摘要正確，沒有秘密資訊 |
| 結構化資料 | 以 Schema.org 驗證器檢查 WebSite JSON-LD | JSON 可解析，名稱、語言與說明正確 |
| robots 與 sitemap | 部署後請求 `/robots.txt` 與 `/sitemap.xml` | 皆回應 200；正式網址設定後 sitemap 使用正確網域 |
| 靜態資源 | 逐一請求 HTML 引用的 CSS、JavaScript、圖片與圖示 | 本機資源皆回應 200，無大小寫路徑錯誤 |
| Hash 深層連結 | 開啟 `/#/route/<id>` 並重新整理 | 不需 rewrite 仍可顯示正確詳情或明確的找不到頁 |

## 發佈閘門

發佈前必須同時通過：

1. `npm run verify` 零失敗，且正式 validator 確認 23 個公開 bundle、68 條公開路線；audit-only route-art 不列入 manifest。
2. 所有 JavaScript 通過 `node --check`。
3. `git diff --check` 無空白錯誤。
4. HTTP 首頁與本機靜態資源可存取。
5. 完成至少桌機 1440×900、平板 768×1024、手機 360×800 的瀏覽器手動檢查。
6. 版本庫不包含 `.env`、token、API 金鑰或私人金鑰。
