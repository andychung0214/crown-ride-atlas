# 狂輪誌 GitHub Pages 部署設計

日期：2026-07-26

## 目標

將 `main` 分支上的 CROWN RIDE ATLAS／狂輪誌自動部署到 GitHub Pages，部署成功後可由下列網址直接訪問：

`https://andychung0214.github.io/crown-ride-atlas/`

## 採用方案

採用 GitHub 官方 GitHub Actions Pages 工作流程。每次推送 `main` 或手動執行工作流程時：

1. 取出版本庫內容。
2. 使用 Node.js 22 執行 `npm test`。
3. 設定 GitHub Pages。
4. 將版本庫根目錄封裝成 Pages artifact。
5. 只有測試與封裝成功後才部署至 `github-pages` environment。

不採用直接分支發布或額外維護 `gh-pages` 分支，避免略過測試或產生重複的部署產物分支。

## 檔案變更

- 新增 `.github/workflows/pages.yml`
- 新增 `.nojekyll`，明確停用 Jekyll 處理
- 更新 `README.md`，加入正式網站網址與部署說明

網站程式碼、路線資料、本機儲存格式與 UI 不需修改。

## GitHub Actions 設計

工作流程使用：

- `actions/checkout@v6`
- `actions/setup-node@v6`
- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v4`
- `actions/deploy-pages@v4`

權限採最小化設定：

- `contents: read`
- `pages: write`
- `id-token: write`

部署工作使用 `github-pages` environment，並把 `deploy-pages` 回傳的 `page_url` 設為 environment URL。`concurrency` 使用固定 `pages` 群組，新部署取消仍在排隊的舊部署。

## 錯誤處理

- 單元測試失敗：不建立部署。
- Artifact 上傳失敗：不執行部署工作。
- Pages 尚未啟用或來源不是 GitHub Actions：工作流程會失敗；使用 GitHub API 或設定頁啟用後重跑。
- 部署完成但網址尚未回應：以部署輸出 URL 為準，輪詢 HTTPS 狀態至成功或明確超時。

## 驗證與驗收

部署前：

- `npm test` 全數通過。
- 所有 JavaScript 通過 `node --check`。
- `git diff --check` 通過。
- 工作流程 YAML 可解析。
- 版本庫不包含 `.env`、憑證、token 或私人金鑰。

部署後：

- GitHub Actions workflow 結論為 `success`。
- Pages deployment 狀態為成功。
- `https://andychung0214.github.io/crown-ride-atlas/` 回應 HTTP 200。
- 頁面標題包含「狂輪誌」，且 CSS、JavaScript 與至少一張影像可成功載入。

## 安全

工作流程只使用 GitHub 自動提供的短期 `GITHUB_TOKEN` 與 OIDC，不新增或提交任何個人 token。禁止把 `.env`、API 金鑰、憑證或私人金鑰寫入版本控制。
