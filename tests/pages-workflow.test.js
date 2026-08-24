"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("GitHub Pages 工作流程具備測試、最小權限與官方部署步驟", () => {
  const workflowPath = path.join(__dirname, "..", ".github", "workflows", "pages.yml");
  const workflow = fs.readFileSync(workflowPath, "utf8");

  assert.match(workflow, /push:\s*\n\s*branches:\s*\[main\]/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.equal(
    (workflow.match(/if:\s*github\.ref\s*==\s*'refs\/heads\/main'/g) || []).length,
    2,
    "build 與 deploy job 都必須拒絕非 main ref"
  );
  assert.match(workflow, /contents:\s*read/);
  assert.match(workflow, /pages:\s*write/);
  assert.match(workflow, /id-token:\s*write/);
  assert.match(workflow, /actions\/checkout@v6/);
  assert.match(workflow, /actions\/setup-node@v6/);
  assert.match(workflow, /node-version:\s*22/);
  assert.match(workflow, /run:\s*npm run verify/);
  assert.match(workflow, /actions\/configure-pages@v5/);
  assert.match(workflow, /actions\/upload-pages-artifact@v4/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /needs:\s*build/);
  assert.match(workflow, /name:\s*github-pages/);
});

test("入口頁只載入一次核准的 GA4 snippet", () => {
  const indexPath = path.join(__dirname, "..", "index.html");
  const html = fs.readFileSync(indexPath, "utf8");

  assert.equal(
    (html.match(/https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-RLDGGCGQV7/g) || []).length,
    1
  );
  assert.match(
    html,
    /<script[^>]+async[^>]+src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-RLDGGCGQV7"/
  );
  assert.equal(
    (html.match(/window\.dataLayer\s*=\s*window\.dataLayer\s*\|\|\s*\[\];/g) || []).length,
    1
  );
  assert.equal((html.match(/gtag\(['"]js['"],\s*new Date\(\)\)/g) || []).length, 1);
  assert.equal(
    (html.match(/gtag\(['"]config['"],\s*['"]G-RLDGGCGQV7['"]\)/g) || []).length,
    1
  );
});

test("入口頁 meta、Open Graph 與 JSON-LD 都明確收錄公路車百科", () => {
  const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
  const metaDescription = /<meta\s+name="description"\s+content="([^"]+)"/.exec(html);
  const ogDescription = /<meta\s+property="og:description"\s+content="([^"]+)"/.exec(html);
  const jsonLdSource = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/.exec(html);

  assert.ok(metaDescription, "缺少 meta description");
  assert.ok(ogDescription, "缺少 og:description");
  assert.ok(jsonLdSource, "缺少 WebSite JSON-LD");
  assert.match(metaDescription[1], /公路車百科/);
  assert.match(ogDescription[1], /公路車百科/);
  assert.match(JSON.parse(jsonLdSource[1]).description, /公路車百科/);
});

test("百科資料與互動模組依序在渲染前載入，App 最後載入", () => {
  const indexSource = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
  const bikePartsPosition = indexSource.indexOf("js/data/bike-parts.js");
  const bikeAnatomyPosition = indexSource.indexOf("js/ui/bike-anatomy.js");
  const renderPosition = indexSource.indexOf("js/ui/render.js");
  const appPosition = indexSource.indexOf("js/app.js");
  assert.ok(bikePartsPosition >= 0, "入口頁必須載入百科資料");
  assert.ok(bikeAnatomyPosition >= 0, "入口頁必須載入百科互動模組");
  assert.ok(bikePartsPosition < bikeAnatomyPosition);
  assert.ok(bikeAnatomyPosition < renderPosition);
  assert.ok(renderPosition < appPosition);
});
