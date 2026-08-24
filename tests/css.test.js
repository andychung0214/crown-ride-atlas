"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const readCss = filename => fs.readFileSync(path.join(__dirname, "..", "css", filename), "utf8");

function extractBalancedBlock(source, openingBrace) {
  let depth = 0;
  for (let index = openingBrace; index < source.length; index += 1) {
    if (source[index] === "{") depth += 1;
    if (source[index] === "}") depth -= 1;
    if (depth === 0) return { body: source.slice(openingBrace + 1, index), end: index + 1 };
  }
  throw new Error("CSS block 缺少結尾大括號");
}

function topLevelRules(source) {
  const rules = [];
  let cursor = 0;
  while (cursor < source.length) {
    const openingBrace = source.indexOf("{", cursor);
    if (openingBrace < 0) break;
    const prelude = source.slice(cursor, openingBrace).replace(/\/\*[\s\S]*?\*\//g, "").trim();
    const block = extractBalancedBlock(source, openingBrace);
    rules.push({ prelude, body: block.body });
    cursor = block.end;
  }
  return rules;
}

function ruleBody(source, selector) {
  const rule = topLevelRules(source).find(item => item.prelude
    .split(",")
    .map(value => value.trim())
    .includes(selector));
  assert.ok(rule, `找不到精確 CSS selector：${selector}`);
  return rule.body;
}

function mediaBlocks(source, query) {
  return topLevelRules(source)
    .filter(rule => rule.prelude === `@media ${query}`)
    .map(rule => rule.body);
}

function ruleInMedia(source, query, selector) {
  const rule = mediaBlocks(source, query)
    .flatMap(topLevelRules)
    .find(item => item.prelude.split(",").map(value => value.trim()).includes(selector));
  assert.ok(rule, `找不到 ${query} 內的精確 selector：${selector}`);
  return rule.body;
}

test("主題按鈕符合至少 44×44px 的觸控目標", () => {
  const declarations = ruleBody(readCss("components.css"), ".theme-button");
  assert.match(declarations, /min-width:\s*2\.75rem\s*;/);
  assert.match(declarations, /min-height:\s*2\.75rem\s*;/);
});

test("減少動態效果設定會停用平滑捲動與長動畫", () => {
  const base = readCss("base.css");
  const tokens = readCss("tokens.css");
  const baseHtml = ruleInMedia(base, "(prefers-reduced-motion: reduce)", "html");
  const baseUniversal = ruleInMedia(base, "(prefers-reduced-motion: reduce)", "*");
  const tokenRoot = ruleInMedia(tokens, "(prefers-reduced-motion: reduce)", ":root");

  assert.match(baseHtml, /scroll-behavior:\s*auto\s*;/);
  assert.match(baseUniversal, /animation-duration:\s*0\.01ms\s*!important\s*;/);
  assert.match(tokenRoot, /--motion-fast:\s*0ms\s*;/);
  assert.match(tokenRoot, /--motion-medium:\s*0ms\s*;/);
});

test("手機頁首在元件樣式載入後仍隱藏四主題切換器", () => {
  const declarations = ruleInMedia(readCss("components.css"), "(max-width: 40rem)", ".site-header .theme-switcher");
  assert.match(declarations, /display:\s*none\s*;/);
});

test("路線座標與右下角圖說分居影像兩側", () => {
  const declarations = ruleBody(readCss("components.css"), ".coordinate-stamp");
  assert.match(declarations, /left:\s*var\(--space-5\)\s*;/);
  assert.match(declarations, /right:\s*auto\s*;/);
});

test("海拔提示與坡度色帶提供可觸控且可辨識的編輯式標記", () => {
  const css = readCss("components.css");
  ruleBody(css, ".elevation-chart__interaction");
  assert.match(ruleBody(css, ".elevation-chart__tooltip"), /min-height:\s*2\.75rem\s*;/);
  ruleBody(css, ".elevation-chart__segment--descent");
  ruleBody(css, ".elevation-chart__segment--moderate");
});

test("路線摘要在四欄與平板三欄版面都收齊每列邊界", () => {
  const css = readCss("layout.css");
  ruleBody(css, ".route-facts .route-stat:nth-child(4n)");
  assert.match(ruleBody(css, ".route-facts .route-stat:nth-child(n + 5)"), /border-top:\s*1px solid var\(--color-rule\)\s*;/);
  assert.match(
    ruleInMedia(css, "(max-width: 56rem)", ".route-facts .route-stat:nth-child(3n)"),
    /border-right:\s*0\s*;/
  );
  assert.match(
    ruleInMedia(css, "(max-width: 56rem)", ".route-facts .route-stat:nth-child(4n)"),
    /border-right:\s*1px solid var\(--color-rule\)\s*;/
  );
});

test("百科控制符合 44px，hover 有非色彩同步狀態", () => {
  const css = readCss("components.css");
  const control = ruleBody(css, ".bike-parts-page .bike-anatomy__control");
  assert.match(control, /min-width:\s*2\.75rem\s*;/);
  assert.match(control, /min-height:\s*2\.75rem\s*;/);
  assert.match(ruleBody(css, ".bike-parts-page [data-bike-hotspot].is-hovered [data-bike-hotspot-ring]"), /stroke-width:\s*4\s*;/);
  assert.match(ruleBody(css, ".bike-parts-page [data-bike-leader].is-hovered"), /stroke-dasharray:\s*none\s*;/);
  assert.match(ruleBody(css, ".bike-parts-page [data-bike-leader-label].is-hovered"), /text-decoration:\s*underline\s*;/);
  assert.match(ruleBody(css, ".bike-parts-page .bike-part-button.is-hovered"), /border-left:\s*0\.32rem solid #24271f\s*;/);
});

test("40rem 以下同時隱藏導引線與文字並放大編號視覺", () => {
  const css = readCss("components.css");
  const query = "(max-width: 40rem)";
  assert.match(ruleInMedia(css, query, ".bike-parts-page [data-bike-leader]"), /display:\s*none\s*;/);
  assert.match(ruleInMedia(css, query, ".bike-parts-page [data-bike-leader-label]"), /display:\s*none\s*;/);
  assert.match(ruleInMedia(css, query, ".bike-parts-page [data-bike-hotspot-number]"), /font-size:\s*16px\s*;/);
});

test("百科 40rem 單欄與全站 20rem 根寬例外各自精確 scoped", () => {
  const layout = readCss("layout.css");
  const base = readCss("base.css");
  const components = readCss("components.css");
  assert.match(ruleInMedia(layout, "(max-width: 40rem)", ".bike-parts-page"), /grid-template-columns:\s*1fr\s*;/);
  assert.match(ruleBody(base, "html"), /min-width:\s*20rem\s*;/);
  assert.match(ruleBody(components, "html:has(.bike-parts-page)"), /min-width:\s*0\s*;/);
});

test("頭管與其餘森林綠車架使用同一條精確規則", () => {
  const declarations = ruleBody(readCss("components.css"), ".bike-parts-page [data-bike-svg] [data-bike-shape=\"head-tube\"]");
  assert.match(declarations, /stroke:\s*#245c43\s*;/);
});
