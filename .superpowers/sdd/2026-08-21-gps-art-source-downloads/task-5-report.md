# Task 5 報告：GPS Art 狀態視覺與行動版回歸

## 實作前兩階段設計計畫

### 第一階段：既有視覺系統

- 主題與單一工作：台灣公路車 GPS Art 圖鑑，供騎士快速辨識軌跡資料狀態，並選擇站內下載、來源端下載或查閱來源等安全動作。
- 色彩：沿用墨色 `#24271F`、柔墨 `#5F6258`、紙張 `#EEE9DC`、浮起紙面 `#F7F3E9`、鍵盤焦點 `#1A5F8A`，主題強調色繼續由四套領騎衫 CSS Variable 提供；不增加另一套品牌色。
- 字體：卡片標題沿用 `Noto Serif TC / Yu Mincho / Georgia`；內文與按鈕沿用 `Noto Sans TC / PingFang TC / Microsoft JhengHei`；狀態、資料與檔案註記沿用 `IBM Plex Mono / Consolas`。
- 版面：桌機維持兩欄卡片與左右「標本／說明」分區；72rem 以下卡片改為上下堆疊；40rem 以下圖鑑、卡片與動作皆為單欄，五個篩選在兩欄中換行，320px／390px 不產生水平溢位。

  ```text
  桌機  [ 路線標本／真實地圖 ][ 狀態章・名稱・資料・安全動作 ]
  手機  [ 路線標本／真實地圖 ]
        [ 狀態章・名稱・資料・安全動作 ]
        [ 篩選 ][ 篩選 ]  ← 自動換行
  ```

- 唯一識別語彙：把狀態標籤視為克制的「路線採集檔案章」；`track-ready`、`source-download`、`source-only` 各以文字搭配不同邊框／角記號表達，不畫來源端假路線，也不增加另一套卡片容器。

### 第二階段：模板感自我批判與調整

- 初稿若替每張卡片加入獨立印章、編號與更多紙張框線，會落入常見的復古編輯模板，也會與既有 `art-card__source-mark` 爭奪注意力。
- 調整後只讓既有狀態標籤承擔「檔案章」角色：來源端狀態使用雙線與外連方向角記號，待取得狀態保留虛線，站內狀態保留主題色左框。三者同時具有可讀文字與非色彩差異。
- 五個篩選不做新的膠囊卡片；沿用既有按鈕，僅補足 44px、換行、文字不截斷與焦點。長網址／來源說明只處理斷行，不放大視覺權重。
- 動態效果不新增；本頁狀態辨識是靜態資訊，既有 reduced-motion 原則已足夠，新增規則只確保圖鑑互動轉場可近乎即時。

## TDD 證據

### RED

- 先在 `tests/css.test.js` 加入六組契約，覆蓋來源端狀態 selector、非色彩辨識、長網址斷行、五個篩選換行與 44px、390px／320px 收縮、track/source 一致高度、焦點及 reduced-motion。
- `node --test tests/css.test.js`：12/17 通過、5 項失敗。
- 失敗原因符合預期：缺少 `.art-card__status--source-download`、`.art-card__external-note`、篩選按鈕收縮屬性、40rem 卡片寬度契約與圖鑑 scoped reduced-motion。

### GREEN 與重構

- 補上來源端雙線狀態章與外連角記號；文字仍由 Task 4 的「來源端 GPX 可下載」提供，因此狀態同時具有文字、邊框與圖形，不只依賴顏色。
- 補上外部提示、來源存取提示與動作連結的 `min-width: 0`、`max-width: 100%`、`overflow-wrap: anywhere`。
- 五個篩選保留既有換行邏輯，每個按鈕至少 44px；40rem 以下維持兩欄 `minmax(0, 1fr)`，按鈕與卡片可收縮，圖鑑卡片為單欄。
- 沿用桌機／平板／手機的 22rem／18rem／16rem 左側高度，測試同時查核 `.art-card__map` 與 `.art-card__source-mark`；未修改正式 `.route-map` 高度。
- `node --test tests/css.test.js`：17/17 通過。
- `node --test tests/css.test.js tests/render.test.js`：43/43 通過。

## 第二輪自我批判

- 第一版來源端章同時使用雙線、外連角記號、文字與主題色內框。這會把單一狀態放大成卡片主視覺，違反「一個識別語彙、其餘安靜」的方向。
- 重構時移除主題色內框，只保留雙線、`↗` 與既有文字。它仍符合非色彩辨識，但不與 `art-card__source-mark` 的紙張標本語彙競爭。
- 40rem 下第五個篩選保留半欄，不刻意拉成全寬主要動作；篩選彼此是同等選項，避免用版面製造不存在的優先級。
- 未加入 hover 動畫或新容器陰影；reduced-motion 只讓既有按鈕取消位移並把轉場縮短至 `0.01ms`。

## 最終驗證、安全 guard 與 Chrome 界線

| 查核 | 結果 |
|---|---|
| focused CSS＋Render | exit 0；43/43 通過。 |
| `npm run verify` | exit 0；378/378 tests pass。 |
| 正式軌跡 validator | 23 個 bundle／68 條路線通過。 |
| production catalog | 22＝2 `track-ready`＋0 `source-download`＋20 `source-only`。 |
| 來源端下載產物 | `js/data/route-art-downloads.js` 不存在；未畫假路線。 |
| `git diff --check` | exit 0。 |
| protected guard | `js/data/routes.js`、`js/data/track-manifest.js`、`js/data/route-art-tracks.js` 無差異。 |
| 安全掃描 | 本任務三個程式檔沒有 Authorization、Bearer、私人金鑰或 API key 樣式字串。 |
| 範圍 | 只改 `css/layout.css`、`css/components.css`、`tests/css.test.js`；另建立本報告。 |

本任務的自動測試驗證 CSS 契約與 synthetic `source-download` Render 行為，但沒有控制 Chrome，因此不宣稱真瀏覽器的 computed layout、觸控或四主題視覺已人工確認。controller 後續需在 Chrome 查核：

- 390px 與 320px 的 `document.documentElement.scrollWidth === clientWidth`，五個篩選皆可見且換行，computed `min-height` 至少 44px。
- 鍵盤焦點在四套領騎衫主題下清楚可見，狀態章不只靠色彩，長來源網址不撐開卡片。
- production 只能看到 2 張站內軌跡與 20 張來源標本，不能宣稱存在來源端下載卡片；`source-download` 的視覺只能用受控 synthetic fixture 驗證。
- 不使用登入中的瀏覽器狀態繞過來源平台限制，也不把跨來源下載成功列為本任務證據。
