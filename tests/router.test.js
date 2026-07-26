"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Router = require("../js/core/router.js");

test("空網址與根網址導向首頁", () => {
  assert.deepEqual(Router.parseHash(""), { page: "home", params: {} });
  assert.deepEqual(Router.parseHash("#/"), { page: "home", params: {} });
});

test("解析路線與地區網址", () => {
  assert.deepEqual(Router.parseHash("#/route/yangjin-3p"), {
    page: "route",
    params: { routeId: "yangjin-3p" }
  });
  assert.deepEqual(Router.parseHash("#/region/new-taipei"), {
    page: "region",
    params: { regionId: "new-taipei" }
  });
});

test("解析固定頁面並拒絕多餘路徑", () => {
  assert.deepEqual(Router.parseHash("#/routes"), { page: "routes", params: {} });
  assert.deepEqual(Router.parseHash("#/challenges"), { page: "challenges", params: {} });
  assert.deepEqual(Router.parseHash("#/route-art"), { page: "route-art", params: {} });
  assert.deepEqual(Router.parseHash("#/editor"), { page: "editor", params: {} });
  assert.deepEqual(Router.parseHash("#/routes/extra"), { page: "not-found", params: {} });
});

test("解碼網址參數且無效編碼回傳找不到", () => {
  assert.deepEqual(Router.parseHash("#/route/%E7%92%B0%E5%B3%B6"), {
    page: "route",
    params: { routeId: "環島" }
  });
  assert.deepEqual(Router.parseHash("#/route/%E0%A4%A"), { page: "not-found", params: {} });
});

test("建立站內 Hash 網址", () => {
  assert.equal(Router.routeHref("home"), "#/home");
  assert.equal(Router.routeHref("route", "陽金 三峰"), "#/route/%E9%99%BD%E9%87%91%20%E4%B8%89%E5%B3%B0");
});
