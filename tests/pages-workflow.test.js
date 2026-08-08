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
