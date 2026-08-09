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

test("可依區域、最陡坡度與行程時間區間篩選", () => {
  const facets = [
    {
      id: "easy-facet",
      name: "城市短坡",
      regionId: "taipei",
      regionName: "台北市",
      areaId: "north",
      area: "北部",
      category: "丘陵",
      tags: [],
      difficulty: 2,
      maxGradePct: 8,
      durationMinutes: 45,
      featured: false
    },
    {
      id: "steep-facet",
      name: "中部陡坡",
      regionId: "taichung",
      regionName: "台中市",
      areaId: "central",
      area: "中部",
      category: "山岳",
      tags: [],
      difficulty: 4,
      maxGradePct: 18,
      durationMinutes: 150,
      featured: true
    },
    {
      id: "long-facet",
      name: "南部長途",
      regionId: "kaohsiung",
      regionName: "高雄市",
      areaId: "south",
      area: "南部",
      category: "挑戰",
      tags: [],
      difficulty: 5,
      maxGradePct: 23,
      durationMinutes: 720,
      featured: false
    }
  ];

  assert.deepEqual(Filter.apply(facets, { gradeBand: "15-19" }).map(route => route.id), ["steep-facet"]);
  assert.deepEqual(Filter.apply(facets, { durationBand: "12h-plus" }).map(route => route.id), ["long-facet"]);
  assert.deepEqual(Filter.apply(facets, { areaId: "south" }).map(route => route.id), ["long-facet"]);
});

test("缺少可靠坡度資料時不會猜測篩選結果", () => {
  assert.deepEqual(
    Filter.apply([{ id: "unknown-grade", name: "未知", regionId: "taipei", difficulty: 3 }], { gradeBand: "10-14" }),
    []
  );
});

test("支援最新、難度與名稱排序且不修改來源陣列", () => {
  const source = [
    { id: "old-hard", name: "B route", difficulty: 5, createdAt: "2026-01-01", featured: false },
    { id: "new-easy", name: "C route", difficulty: 1, createdAt: "2026-08-01", featured: false },
    { id: "new-hard", name: "A route", difficulty: 5, createdAt: "2026-08-01", featured: true }
  ];
  assert.deepEqual(Filter.apply(source, { sort: "latest" }).map(route => route.id), ["new-hard", "new-easy", "old-hard"]);
  assert.deepEqual(Filter.apply(source, { sort: "difficulty-asc" }).map(route => route.id), ["new-easy", "new-hard", "old-hard"]);
  assert.deepEqual(Filter.apply(source, { sort: "difficulty-desc" }).map(route => route.id), ["new-hard", "old-hard", "new-easy"]);
  assert.deepEqual(Filter.apply(source, { sort: "name" }).map(route => route.id), ["new-hard", "old-hard", "new-easy"]);
  assert.deepEqual(source.map(route => route.id), ["old-hard", "new-easy", "new-hard"]);
});

test("paginate 以 1 起算並限制頁碼與頁面大小", () => {
  const source = [{ id: "a" }, { id: "b" }, { id: "c" }];
  assert.deepEqual(Filter.paginate(source, 2, 2), {
    items: [source[2]],
    page: 2,
    pageSize: 2,
    total: 3,
    totalPages: 2
  });
  assert.deepEqual(Filter.paginate(source, 0, 2), {
    items: [source[0], source[1]],
    page: 1,
    pageSize: 2,
    total: 3,
    totalPages: 2
  });
});
