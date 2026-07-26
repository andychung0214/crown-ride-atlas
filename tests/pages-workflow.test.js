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
});
