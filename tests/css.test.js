"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("主題按鈕符合至少 44×44px 的觸控目標", () => {
  const css = fs.readFileSync(path.join(__dirname, "..", "css", "components.css"), "utf8");
  const rule = /\.theme-button\s*\{([\s\S]*?)\}/.exec(css);

  assert.ok(rule, "找不到 theme-button 規則");
  assert.match(rule[1], /min-width:\s*2\.75rem/);
  assert.match(rule[1], /min-height:\s*2\.75rem/);
});
