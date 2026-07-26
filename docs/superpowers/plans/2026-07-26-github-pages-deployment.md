# GitHub Pages Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 讓 `main` 每次推送後先測試狂輪誌，再自動部署到可公開訪問的 GitHub Pages 網址。

**Architecture:** 單一 GitHub Actions workflow 分成 `build` 與 `deploy` 工作。`build` 先執行 Node.js 測試並上傳版本庫根目錄的靜態檔案，`deploy` 僅在前者成功後以 GitHub Pages OIDC 部署 artifact。

**Tech Stack:** GitHub Actions、Node.js 22、HTML、CSS、Vanilla JavaScript、GitHub Pages

## Global Constraints

- 使用 GitHub 官方 `checkout@v6`、`setup-node@v6`、`configure-pages@v5`、`upload-pages-artifact@v4`、`deploy-pages@v4`。
- workflow 只允許 `contents: read`、`pages: write`、`id-token: write`。
- 不新增或提交 `.env`、個人 token、API 金鑰、憑證或私人金鑰。
- 每次推送 `main` 及手動執行時部署。
- 公開網址為 `https://andychung0214.github.io/crown-ride-atlas/`。

---

### Task 1: 建立可測試的 GitHub Pages workflow

**Files:**
- Create: `.github/workflows/pages.yml`
- Create: `.nojekyll`
- Create: `tests/pages-workflow.test.js`

**Interfaces:**
- Consumes: `package.json` 的 `npm test`
- Produces: `build` job 上傳名為 `github-pages` 的 artifact；`deploy` job 輸出 `page_url`

- [ ] **Step 1: 建立會失敗的 workflow 契約測試**

在 `tests/pages-workflow.test.js` 讀取 `.github/workflows/pages.yml`，斷言：

```js
assert.match(workflow, /push:\s*\n\s*branches:\s*\[main\]/);
assert.match(workflow, /workflow_dispatch:/);
assert.match(workflow, /contents:\s*read/);
assert.match(workflow, /pages:\s*write/);
assert.match(workflow, /id-token:\s*write/);
assert.match(workflow, /actions\/checkout@v6/);
assert.match(workflow, /actions\/setup-node@v6/);
assert.match(workflow, /node-version:\s*22/);
assert.match(workflow, /run:\s*npm test/);
assert.match(workflow, /actions\/configure-pages@v5/);
assert.match(workflow, /actions\/upload-pages-artifact@v4/);
assert.match(workflow, /actions\/deploy-pages@v4/);
assert.match(workflow, /needs:\s*build/);
assert.match(workflow, /name:\s*github-pages/);
```

- [ ] **Step 2: 執行測試並確認紅燈**

Run: `node --test tests/pages-workflow.test.js`

Expected: FAIL，原因是 `.github/workflows/pages.yml` 尚不存在。

- [ ] **Step 3: 建立最小部署 workflow 與 `.nojekyll`**

Workflow 必須包含：

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true
```

`build` job 依序 checkout、setup Node 22、`npm test`、configure Pages、upload artifact；`deploy` job 使用 `needs: build`、`github-pages` environment 與 `deploy-pages@v4`。

- [ ] **Step 4: 執行聚焦與完整測試**

Run: `node --test tests/pages-workflow.test.js`

Expected: PASS。

Run: `npm test`

Expected: 全數 PASS。

- [ ] **Step 5: 提交**

```powershell
git add .github/workflows/pages.yml .nojekyll tests/pages-workflow.test.js
git commit -m "ci: 建立 GitHub Pages 自動部署"
```

---

### Task 2: 文件、推送、部署與正式網址驗證

**Files:**
- Modify: `README.md`
- Modify: `docs/VERIFICATION.md`

**Interfaces:**
- Consumes: GitHub repository `andychung0214/crown-ride-atlas`
- Produces: `https://andychung0214.github.io/crown-ride-atlas/`

- [ ] **Step 1: 更新使用與驗證文件**

README 首段加入「線上版本」網址，靜態網站託管段落說明 `main` 推送會觸發 Pages workflow。驗證紀錄新增部署前檢查欄位，不預先宣稱部署成功。

- [ ] **Step 2: 執行部署前完整驗證**

Run: `npm test`

Expected: 全數 PASS。

Run:

```powershell
$jsFiles = rg --files js tests -g '*.js'
foreach ($file in $jsFiles) {
  node --check $file
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}
```

Expected: 0 個語法錯誤。

Run: `git diff --check`

Expected: 0 個空白錯誤。

Run:

```powershell
$matches = rg -n "apiAccessKey|apiSecretKey|client_secret\\s*[:=]|BEGIN [A-Z ]+PRIVATE KEY" README.md CONTRIBUTING.md docs/ART-DIRECTION.md docs/TEST-PLAN.md docs/VERIFICATION.md index.html js css .github
if ($LASTEXITCODE -eq 0) { $matches; exit 1 }
if ($LASTEXITCODE -gt 1) { exit $LASTEXITCODE }
$tracked = git ls-files | rg "(^|/)(\\.env|id_rsa|id_ed25519)(\\.|$)"
if ($LASTEXITCODE -eq 0) { $tracked; exit 1 }
if ($LASTEXITCODE -gt 1) { exit $LASTEXITCODE }
```

Expected: 無 `.env`、憑證、token 或私人金鑰。

- [ ] **Step 3: 提交文件**

```powershell
git add README.md docs/VERIFICATION.md
git commit -m "docs: 補充 GitHub Pages 部署資訊"
```

- [ ] **Step 4: 合併到 `main` 並再次測試**

快轉合併功能分支到 `main`，執行 `npm test`，確認工作樹乾淨。

- [ ] **Step 5: 顯示推送資訊並推送**

在推送前執行下列命令，並將三行結果原樣顯示給使用者：

```powershell
git remote get-url origin
git symbolic-ref --short HEAD
git log -1 --format="%H %s"
```

再執行：`git push origin main`

- [ ] **Step 6: 確認或啟用 Pages 並追蹤 workflow**

使用 `gh api repos/andychung0214/crown-ride-atlas/pages` 檢查 Pages；若回應 404，使用 GitHub API 將 `build_type` 設為 `workflow`。取得本次推送觸發的 workflow run，等待結論為 `success`。

- [ ] **Step 7: 實際驗證正式網址**

輪詢 `https://andychung0214.github.io/crown-ride-atlas/`，直到回應 HTTP 200。檢查首頁包含「狂輪誌」，並請求：

```text
/css/tokens.css
/js/app.js
/assets/images/mountain-dawn.webp
```

Expected: 全部 HTTP 200。

- [ ] **Step 8: 更新部署驗證紀錄**

將 workflow run URL、部署 commit、公開網址與 HTTP 驗證結果寫入 `docs/VERIFICATION.md`，提交後再次推送，等待第二次 workflow 成功並重新檢查公開網址。
