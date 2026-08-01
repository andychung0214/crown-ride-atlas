# CROWN RIDE ATLAS GA4 整合設計

日期：2026-08-01
狀態：已核准方案 A

## 目標

在全站唯一入口 `index.html` 整合 Google Analytics 4，使用量測 ID `G-RLDGGCGQV7`。部署至 GitHub Pages 後，每次載入網站都使用 Google 官方 `gtag.js` snippet 初始化 GA4。

## 範圍

- 在 `index.html` 的 `<head>` 加入一次 Google 官方 GA4 snippet。
- `gtag.js` 以 `async` 載入，避免阻塞頁面解析。
- 初始化 `window.dataLayer`、`gtag('js', new Date())` 與 `gtag('config', 'G-RLDGGCGQV7')`。
- 不加入 Cookie 同意介面、環境條件、事件追蹤或額外分析套件。
- 不改動既有路由、地圖、GPX、編輯器及主題切換行為。

## 放置位置

官方 snippet 放在 `index.html` `<head>` 的基本 meta 標籤之後、網站其他資源之前。由於專案是單頁靜態網站，這個入口可涵蓋所有頁面初次載入。

## 資料流程

1. 瀏覽器非同步下載 `https://www.googletagmanager.com/gtag/js?id=G-RLDGGCGQV7`。
2. 行內程式初始化 `window.dataLayer` 與 `gtag` 函式。
3. `gtag` 佇列記錄初始化時間並設定 GA4 量測 ID。
4. `gtag.js` 載入後處理佇列並傳送 GA4 資料。

## 測試與驗收

- 自動測試解析 `index.html`，確認 GA4 外部腳本與設定各只出現一次。
- 確認外部腳本包含 `async`，網址與量測 ID完全一致。
- 確認 `dataLayer`、`gtag('js', new Date())` 與 `gtag('config', 'G-RLDGGCGQV7')` 均存在。
- 執行完整 `npm run verify`。
- 推送後確認 GitHub Pages workflow 成功，正式首頁回應 HTTP 200 且包含量測 ID。

## 已知限制

- 依核准的方案 A，直接開啟 `index.html` 或於本機靜態伺服器測試時也會嘗試載入 GA4，可能產生開發測試流量。
- 本次只整合官方基礎 snippet，不建立 SPA 雜湊路由切換的額外 page_view 事件。
- 廣告阻擋器、瀏覽器隱私設定或網路政策可能阻止 `gtag.js` 載入，但不得影響網站核心功能。
