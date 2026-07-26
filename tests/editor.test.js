"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Editor = require("../js/ui/editor.js");

const coordinates = [
  { lat: 25, lng: 121, ele: 10 },
  { lat: 25.1, lng: 121.1, ele: 20 }
];

test("編輯表單轉換為可儲存路線並正規化數值與標籤", () => {
  const route = Editor.buildRoute(
    {
      name: "  我的晨騎  ",
      regionId: "taipei",
      regionName: "台北市",
      category: "丘陵",
      distanceKm: "42.5",
      elevationGainM: "880",
      difficulty: "3",
      durationMinutes: "150",
      summary: " 城市邊界的晨間路線 ",
      story: " 從河濱進入山路。 ",
      tags: "晨騎, 丘陵，咖啡",
      thumbnail: "assets/images/city-morning.webp"
    },
    null,
    coordinates,
    12345,
    "abc"
  );

  assert.equal(route.id, "local-12345-abc");
  assert.equal(route.name, "我的晨騎");
  assert.equal(route.distanceKm, 42.5);
  assert.equal(route.elevationGainM, 880);
  assert.equal(route.difficulty, 3);
  assert.deepEqual(route.tags, ["晨騎", "丘陵", "咖啡"]);
  assert.deepEqual(route.coordinates, coordinates);
});

test("編輯既有路線保留識別碼、建立時間與未更動縮圖", () => {
  const base = {
    id: "r1",
    slug: "r1",
    name: "原路線",
    thumbnail: "assets/images/original.webp",
    createdAt: "2026-01-01T00:00:00.000Z"
  };
  const route = Editor.buildRoute(
    {
      name: "更新路線",
      regionId: "taipei",
      regionName: "台北市",
      category: "山岳",
      distanceKm: 50,
      elevationGainM: 1000,
      difficulty: 4,
      durationMinutes: 180,
      summary: "摘要",
      story: "故事",
      tags: "爬坡",
      thumbnail: ""
    },
    base,
    coordinates,
    999,
    "unused"
  );

  assert.equal(route.id, "r1");
  assert.equal(route.slug, "r1");
  assert.equal(route.thumbnail, "assets/images/original.webp");
  assert.equal(route.createdAt, "2026-01-01T00:00:00.000Z");
});

test("拒絕空名稱、超界難度與不足座標", () => {
  const valid = {
    name: "路線",
    regionId: "taipei",
    regionName: "台北市",
    category: "山岳",
    distanceKm: 10,
    elevationGainM: 100,
    difficulty: 3,
    durationMinutes: 60,
    summary: "摘要",
    story: "故事",
    tags: "晨騎"
  };

  assert.throws(() => Editor.buildRoute({ ...valid, name: " " }, null, coordinates), /名稱/);
  assert.throws(() => Editor.buildRoute({ ...valid, difficulty: 6 }, null, coordinates), /難度/);
  assert.throws(() => Editor.buildRoute(valid, null, [coordinates[0]]), /座標/);
});
