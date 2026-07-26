"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Render = require("../js/ui/render.js");

test("騎乘時間格式化為小時與分鐘", () => {
  assert.equal(Render.formatDuration(45), "45 分");
  assert.equal(Render.formatDuration(90), "1 小時 30 分");
  assert.equal(Render.formatDuration(120), "2 小時");
});

test("難度以可理解文字呈現", () => {
  assert.equal(Render.difficultyLabel(1), "入門");
  assert.equal(Render.difficultyLabel(3), "進階");
  assert.equal(Render.difficultyLabel(5), "極限");
  assert.equal(Render.difficultyLabel(9), "未分級");
});

test("頁面標題依路由與內容產生", () => {
  assert.equal(Render.pageTitle({ page: "home", params: {} }), "狂輪誌");
  assert.equal(
    Render.pageTitle({ page: "route", params: { routeId: "r1" } }, [{ id: "r1", name: "陽金三峰" }]),
    "陽金三峰｜狂輪誌"
  );
  assert.equal(Render.pageTitle({ page: "not-found", params: {} }), "找不到頁面｜狂輪誌");
});
