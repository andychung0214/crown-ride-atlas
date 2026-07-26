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

test("減少動態效果設定會停用平滑捲動與長動畫", () => {
  const base = fs.readFileSync(path.join(__dirname, "..", "css", "base.css"), "utf8");
  const tokens = fs.readFileSync(path.join(__dirname, "..", "css", "tokens.css"), "utf8");

  assert.match(base, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(base, /scroll-behavior:\s*auto\s*!important/);
  assert.match(base, /animation-duration:\s*0\.01ms\s*!important/);
  assert.match(tokens, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(tokens, /--motion-fast:\s*0ms/);
  assert.match(tokens, /--motion-medium:\s*0ms/);
});
