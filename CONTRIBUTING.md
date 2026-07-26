# 參與狂輪誌

感謝協助補完台灣公路車路線。提交內容前，請先確認軌跡可公開使用，並避免放入個人住址、騎士行蹤或未授權影像。

## 開發流程

1. 從 `main` 建立 `feature/<名稱>`、`fix/<名稱>` 或 `chore/<名稱>` 分支。
2. 直接開啟 `index.html`，或以 `python -m http.server 4173` 啟動靜態伺服器。
3. 修改資料、樣式或 Vanilla JavaScript。
4. 執行 `npm test`，並依 `docs/TEST-PLAN.md` 完成相關手動驗證。
5. 使用繁體中文提交描述，例如 `feat: 新增北宜公路路線資料`。

## 新增路線

- 路線物件放在 `js/data/routes.js`，識別碼與 slug 必須唯一。
- 至少提供名稱、地區、距離、爬升、難度、標籤、簡介與兩個有效座標。
- 座標、距離與爬升應交叉確認；展示用近似資料必須明確標註。
- 圖片優先使用專案自有或授權清楚的 WebP，建議 3:2、寬 1440px。
- GPX 不得包含住家起終點或其他不應公開的個人資料。

## 程式碼規範

- 使用語意化 HTML、CSS Variable 與無依賴的 ES5/ES6 相容 JavaScript。
- 核心邏輯以可測試純函式為優先。
- 使用 `textContent`、DOM 屬性或安全節點建立 UI，不將使用者輸入寫入 HTML 字串。
- 新功能或修正必須附上相對應測試。
- 中文內容遵守專案 `AGENTS.md` 的台灣用語規範。

## 安全

禁止提交 `.env`、API 金鑰、token、憑證、私人金鑰或含個人資料的 GPX。若秘密資訊曾出現在公開位置，請先撤銷並輪替，不能只從目前檔案刪除。

## 提交訊息

遵守 Conventional Commits：

```text
<type>[optional scope]: <繁體中文描述>
```

常用類型為 `feat`、`fix`、`docs`、`test`、`refactor`、`style` 與 `chore`。
