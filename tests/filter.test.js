"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Filter = require("../js/core/filter.js");

const routes = [
  {
    id: "r1",
    name: "陽金三峰",
    regionId: "new-taipei",
    regionName: "新北市",
    category: "山岳",
    tags: ["Climb", "經典"],
    difficulty: 4,
    distanceKm: 87,
    elevationGainM: 2146,
    featured: true
  },
  {
    id: "r2",
    name: "北海岸",
    regionId: "new-taipei",
    regionName: "新北市",
    category: "海岸",
    tags: ["海線"],
    difficulty: 2,
    distanceKm: 76,
    elevationGainM: 820,
    featured: false
  },
  {
    id: "r3",
    name: "日月潭環湖",
    regionId: "nantou",
    regionName: "南投縣",
    category: "湖泊",
    tags: ["Lake"],
    difficulty: 2,
    distanceKm: 33,
    elevationGainM: 620,
    featured: true
  }
];

test("搜尋涵蓋名稱、地區、類型與標籤且不分英文大小寫", () => {
  assert.deepEqual(Filter.apply(routes, { query: "climb" }).map(route => route.id), ["r1"]);
  assert.deepEqual(Filter.apply(routes, { query: "新北" }).map(route => route.id), ["r1", "r2"]);
  assert.deepEqual(Filter.apply(routes, { query: "湖泊" }).map(route => route.id), ["r3"]);
});

test("可同時套用地區與難度篩選", () => {
  assert.deepEqual(
    Filter.apply(routes, { regionId: "new-taipei", difficulty: 2 }).map(route => route.id),
    ["r2"]
  );
});

test("距離與爬升排序不會修改來源陣列", () => {
  const sourceOrder = routes.map(route => route.id);
  assert.deepEqual(
    Filter.apply(routes, { sort: "distance-asc" }).map(route => route.id),
    ["r3", "r2", "r1"]
  );
  assert.deepEqual(
    Filter.apply(routes, { sort: "elevation-desc" }).map(route => route.id),
    ["r1", "r2", "r3"]
  );
  assert.deepEqual(routes.map(route => route.id), sourceOrder);
});

test("空白查詢與未知排序使用精選優先", () => {
  assert.deepEqual(
    Filter.apply(routes, { query: "  ", sort: "unknown" }).map(route => route.id),
    ["r1", "r3", "r2"]
  );
});
