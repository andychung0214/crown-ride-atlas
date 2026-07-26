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
  assert.equal(route.trackSource, "local");
  assert.equal(Object.hasOwn(route, "trackRef"), false);
  assert.deepEqual(route.coordinates, coordinates);
});

test("只修改內建路線文字時保留 trackRef 且不複製內建座標", () => {
  const base = {
    id: "r1",
    slug: "r1",
    name: "原路線",
    thumbnail: "assets/images/original.webp",
    createdAt: "2026-01-01T00:00:00.000Z",
    trackRef: "r1",
    coordinates
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
    undefined,
    999,
    "unused"
  );

  assert.equal(route.id, "r1");
  assert.equal(route.slug, "r1");
  assert.equal(route.thumbnail, "assets/images/original.webp");
  assert.equal(route.createdAt, "2026-01-01T00:00:00.000Z");
  assert.equal(route.trackRef, "r1");
  assert.equal(Object.hasOwn(route, "trackSource"), false);
  assert.equal(Object.hasOwn(route, "coordinates"), false);
});

test("內建路線上傳 GPX 後改用 local 座標且移除 trackRef", () => {
  const base = {
    id: "r1",
    slug: "r1",
    name: "原路線",
    thumbnail: "assets/images/original.webp",
    trackRef: "r1"
  };
  const route = Editor.buildRoute(
    {
      name: "GPX 覆寫",
      regionId: "taipei",
      regionName: "台北市",
      category: "山岳",
      distanceKm: 50,
      elevationGainM: 1000,
      difficulty: 4,
      durationMinutes: 180,
      summary: "摘要",
      story: "故事",
      tags: "爬坡"
    },
    base,
    coordinates,
    999,
    "unused"
  );

  assert.equal(route.trackSource, "local");
  assert.equal(Object.hasOwn(route, "trackRef"), false);
  assert.deepEqual(route.coordinates, coordinates);
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

test("v1 備份匯入確認文字提示會升級為 v2", () => {
  const prompt = Editor.buildImportPrompt({
    valid: 2,
    invalid: 1,
    conflicts: 1,
    sourceVersion: 1
  });

  assert.match(prompt, /v1 舊版備份/);
  assert.match(prompt, /升級為 v2/);
  assert.match(prompt, /2 筆有效資料、1 筆無效資料與 1 筆衝突/);
});

test("編輯內建路線前會取得已載入的軌跡，本機路線則沿用現有座標", async () => {
  const track = {
    routeId: "built-in",
    coordinates: [{ lat: 25, lng: 121, ele: 10 }, { lat: 25.01, lng: 121.01, ele: 30 }]
  };
  const builtIn = await Editor.resolveWorkingCoordinates({ id: "built-in", trackRef: "built-in" }, {
    load: async routeId => {
      assert.equal(routeId, "built-in");
      return track;
    }
  });
  const local = await Editor.resolveWorkingCoordinates({
    id: "local",
    trackSource: "local",
    coordinates
  }, {
    load: async () => { throw new Error("本機路線不應載入 bundle"); }
  });

  assert.deepEqual(builtIn, track.coordinates);
  assert.deepEqual(local, coordinates);
});

test("較新的編輯選擇完成後不會被較舊的軌跡載入覆蓋", async () => {
  const gate = Editor.createEditRequestGate();
  const pending = new Map();
  const rendered = [];
  const open = routeId => {
    const requestId = gate.begin();
    return new Promise(resolve => pending.set(routeId, resolve)).then(track => {
      if (gate.isCurrent(requestId)) rendered.push(track.routeId);
    });
  };

  const older = open("A");
  const newer = open("B");
  pending.get("B")({ routeId: "B" });
  await newer;
  pending.get("A")({ routeId: "A" });
  await older;

  assert.deepEqual(rendered, ["B"]);
});

test("編輯器卸載後不會渲染或顯示已失效載入的錯誤", async () => {
  const gate = Editor.createEditRequestGate();
  const requestId = gate.begin();
  let rendered = 0;
  let announced = 0;
  const pending = Promise.reject(new Error("軌跡載入失敗")).then(
    () => { if (gate.isCurrent(requestId)) rendered += 1; },
    () => { if (gate.isCurrent(requestId)) announced += 1; }
  );

  gate.destroy();
  await pending;

  assert.equal(rendered, 0);
  assert.equal(announced, 0);
});
