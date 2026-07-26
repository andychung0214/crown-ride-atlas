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

test("路線美學會略過已從本機移除的參考路線", () => {
  const entries = Render.routeArtEntries(
    [{ id: "art-1", routeId: "r1" }, { id: "art-2", routeId: "missing" }],
    [{ id: "r1", name: "保留路線" }]
  );

  assert.deepEqual(entries, [
    { art: { id: "art-1", routeId: "r1" }, route: { id: "r1", name: "保留路線" } }
  ]);
});

test("缺少海拔資料時回傳可理解的說明", () => {
  assert.deepEqual(Render.elevationSummary([{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]), {
    available: false,
    maximum: null,
    label: "未提供海拔資料"
  });
});

test("空路線目錄不會產生不存在的首頁精選", () => {
  assert.equal(Render.selectFeaturedRoute([]), null);
  assert.deepEqual(
    Render.selectFeaturedRoute([{ id: "r1", featured: false }]),
    { id: "r1", featured: false }
  );
});
