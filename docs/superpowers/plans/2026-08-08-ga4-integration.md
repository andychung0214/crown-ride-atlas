# GA4 整合 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在單頁靜態入口 `index.html` 加入核准的 Google Analytics 4 官方 snippet，並以自動測試保護其載入契約。

**Architecture:** GA4 只在 `index.html` 的 `<head>` 初始化一次；不新增前端模組、事件追蹤或同意介面。測試讀取 HTML 原始文字，驗證官方外部腳本、`dataLayer`、`gtag` 初始化與量測 ID 都只出現一次。

**Tech Stack:** HTML、原生 JavaScript、Node.js `node:test`、GitHub Pages。

## Global Constraints

- 維持 HTML、CSS、Vanilla JavaScript 與靜態網站部署。
- 不加入 React、Angular、Vue、TypeScript、後端服務或大型套件。
- 不讀取、輸出或提交憑證、token、`.env` 或私人金鑰。
- 使用核准量測 ID `G-RLDGGCGQV7`，不改寫官方 snippet 的行為。
- Commit 訊息使用繁體中文 Conventional Commits。

### Task 1: 先建立 GA4 HTML 契約測試

**Files:**
- Modify: `tests/pages-workflow.test.js`

**Interfaces:**
- Test reads `index.html` as UTF-8 and asserts the GA4 source URL, `async` attribute, `dataLayer`, `gtag('js', new Date())`, `gtag('config', 'G-RLDGGCGQV7')`, and exactly one occurrence of each required contract.

- [ ] **Step 1: Write the failing test**

在既有 workflow 測試後加入一個 `node:test` 測試，讀取 `path.join(__dirname, "..", "index.html")`，並斷言：

```js
test("入口頁只載入一次核准的 GA4 snippet", () => {
  const indexPath = path.join(__dirname, "..", "index.html");
  const html = fs.readFileSync(indexPath, "utf8");

  assert.equal(
    (html.match(/https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-RLDGGCGQV7/g) || []).length,
    1
  );
  assert.match(html, /<script[^>]+async[^>]+src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-RLDGGCGQV7"/);
  assert.equal((html.match(/window\.dataLayer\s*=\s*window\.dataLayer\s*\|\|\s*\[\];/g) || []).length, 1);
  assert.equal((html.match(/gtag\(['"]js['"],\s*new Date\(\)\)/g) || []).length, 1);
  assert.equal((html.match(/gtag\(['"]config['"],\s*['"]G-RLDGGCGQV7['"]\)/g) || []).length, 1);
});
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run: `node --test --test-name-pattern="入口頁只載入一次核准的 GA4 snippet" tests/pages-workflow.test.js`
Expected: FAIL because the current `index.html` has no Google Tag Manager URL or GA4 initialization.

### Task 2: 加入官方 GA4 snippet

**Files:**
- Modify: `index.html` inside `<head>`, after the structured data block and before the favicon/CSS resources.

**Interfaces:**
- Produces a single global GA4 loader for all hash routes in the static single-page entry.

- [ ] **Step 1: Add the minimal implementation**

加入以下核准內容，不複製到其他 HTML 或 JavaScript 檔案：

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RLDGGCGQV7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RLDGGCGQV7');
</script>
```

- [ ] **Step 2: Run the focused test and verify it passes**

Run: `node --test --test-name-pattern="入口頁只載入一次核准的 GA4 snippet" tests/pages-workflow.test.js`
Expected: PASS with zero failures.

### Task 3: 完整驗證與提交

**Files:**
- Verify: `index.html`, `tests/pages-workflow.test.js`, `docs/superpowers/specs/2026-08-01-ga4-integration-design.md`

- [ ] **Step 1: Run the complete project verification**

Run: `npm run verify`
Expected: all Node tests pass and `軌跡驗證通過：23 個 bundle、72 條路線。`

- [ ] **Step 2: Run source hygiene checks**

Run: `node --check js/app.js` and `git diff --check`.
Expected: exit code 0; no secrets or private-key files are staged.

- [ ] **Step 3: Commit the implementation**

```bash
git add index.html tests/pages-workflow.test.js
git commit -m "feat: 整合 GA4 網站分析"
```

- [ ] **Step 4: Record the exact commit before push**

Run: `git remote get-url origin`, `git branch --show-current`, and `git rev-parse HEAD`.
The push announcement must show remote `https://github.com/andychung0214/crown-ride-atlas.git`, branch `main`, and the full commit SHA before `git push origin main`.

- [ ] **Step 5: Push and verify the published source**

Run: `git push origin main`, then request the public GitHub Pages `index.html` and verify HTTP 200 plus the GA4 measurement ID. Report the Pages URL and workflow result.
