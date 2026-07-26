"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Store = require("../js/core/store.js");

function memoryStorage(initial) {
  const values = new Map(Object.entries(initial || {}));
  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    },
    removeItem(key) {
      values.delete(key);
    }
  };
}

const builtInRoute = {
  id: "r1",
  slug: "r1",
  name: "原名稱",
  regionId: "taipei",
  regionName: "台北市",
  area: "北部",
  category: "山岳",
  summary: "路線摘要",
  story: "路線故事",
  thumbnail: "assets/images/mountain-dawn.webp",
  distanceKm: 30,
  elevationGainM: 600,
  difficulty: 3,
  durationMinutes: 90,
  tags: ["晨騎"],
  cautions: ["留意路況"],
  supplies: ["水"],
  trackRef: "r1",
  coordinates: [{ lat: 25, lng: 121, ele: 10 }, { lat: 25.1, lng: 121.1, ele: 20 }]
};

const localRoute = {
  id: "local-1",
  slug: "local-1",
  name: "我的路線",
  regionId: "taipei",
  regionName: "台北市",
  area: "北部",
  category: "丘陵",
  summary: "自訂摘要",
  story: "自訂故事",
  thumbnail: "assets/images/city-morning.webp",
  distanceKm: 20,
  elevationGainM: 300,
  difficulty: 2,
  durationMinutes: 60,
  tags: ["自訂"],
  cautions: ["留意路況"],
  supplies: ["水"],
  trackSource: "local",
  coordinates: [{ lat: 25, lng: 121, ele: 10 }, { lat: 25.2, lng: 121.2, ele: 20 }]
};

test("內建路線可只以 trackRef 通過驗證，缺少軌跡參照與座標則拒絕", () => {
  const routeWithTrackRef = structuredClone(builtInRoute);
  delete routeWithTrackRef.coordinates;
  assert.equal(Store.isValidBuiltInRoute(routeWithTrackRef), true);

  const routeWithoutTrack = structuredClone(routeWithTrackRef);
  delete routeWithoutTrack.trackRef;
  assert.equal(Store.isValidBuiltInRoute(routeWithoutTrack), false);
});

test("v1 本機資料升級至 v2 時保留新增、GPX 覆寫與刪除標記", () => {
  const legacyAddition = structuredClone(localRoute);
  delete legacyAddition.trackSource;
  const legacyOverride = {
    ...structuredClone(builtInRoute),
    name: "GPX 覆寫",
    coordinates: [{ lat: 24.9, lng: 121, ele: 5 }, { lat: 25, lng: 121.2, ele: 25 }]
  };
  delete legacyOverride.trackRef;
  const secondBuiltIn = { ...structuredClone(builtInRoute), id: "r2", slug: "r2", trackRef: "r2" };
  const storage = memoryStorage({
    "crownRideAtlas.v1": JSON.stringify({
      version: 1,
      overrides: [legacyOverride],
      additions: [legacyAddition],
      deleted: ["r2"]
    })
  });
  const store = Store.create(storage, [builtInRoute, secondBuiltIn]);
  const migrated = JSON.parse(storage.getItem("crownRideAtlas.v2"));

  assert.equal(migrated.version, 2);
  assert.deepEqual(migrated.deleted, ["r2"]);
  assert.equal(migrated.additions[0].trackSource, "local");
  assert.equal(migrated.overrides[0].trackSource, "local");
  assert.deepEqual(migrated.overrides[0].coordinates, legacyOverride.coordinates);
  assert.deepEqual(store.list().map(route => route.id), ["r1", "local-1"]);
  assert.equal(store.list()[0].name, "GPX 覆寫");
});

test("本機覆寫取代內建路線且不修改內建物件", () => {
  const storage = memoryStorage();
  const builtIn = [structuredClone(builtInRoute)];
  const store = Store.create(storage, builtIn);
  const metadataOverride = structuredClone(builtInRoute);
  delete metadataOverride.coordinates;
  metadataOverride.name = "更新名稱";
  store.save(metadataOverride);

  assert.equal(store.list()[0].name, "更新名稱");
  assert.equal(builtIn[0].name, "原名稱");
});

test("儲存本機路線並在重新建立資料層後保留", () => {
  const storage = memoryStorage();
  const firstStore = Store.create(storage, [builtInRoute]);
  firstStore.save(localRoute);

  const secondStore = Store.create(storage, [builtInRoute]);
  assert.deepEqual(secondStore.list().map(route => route.id), ["r1", "local-1"]);
});

test("刪除內建路線只建立刪除標記且重設可復原", () => {
  const storage = memoryStorage();
  const store = Store.create(storage, [builtInRoute]);
  store.remove("r1");

  assert.equal(store.list().length, 0);
  assert.deepEqual(JSON.parse(storage.getItem("crownRideAtlas.v2")).deleted, ["r1"]);

  store.reset();
  assert.equal(store.list()[0].id, "r1");
  assert.equal(storage.getItem("crownRideAtlas.v2"), null);
  assert.equal(storage.getItem("crownRideAtlas.v1"), null);
});

test("本機路線必須標示 local 且具有有效座標", () => {
  const store = Store.create(memoryStorage(), [builtInRoute]);
  assert.throws(() => store.save({ ...localRoute, name: "" }), /名稱/);
  assert.throws(() => store.save({ ...localRoute, coordinates: [] }), /座標/);
  const withoutSource = structuredClone(localRoute);
  delete withoutSource.trackSource;
  assert.throws(() => store.save(withoutSource), /格式/);
});

test("本機儲存失敗時不更新記憶體狀態", () => {
  const storage = memoryStorage();
  storage.setItem = () => {
    throw new Error("quota");
  };
  const store = Store.create(storage, [builtInRoute]);

  assert.throws(() => store.save(localRoute), /儲存空間/);
  assert.deepEqual(store.list().map(route => route.id), ["r1"]);
});

test("備份包含版本與本機變更並可預覽匯入", () => {
  const store = Store.create(memoryStorage(), [builtInRoute]);
  store.save(localRoute);
  const backup = store.exportJson();
  const parsed = JSON.parse(backup);

  assert.equal(parsed.version, 2);
  assert.equal(parsed.additions[0].id, "local-1");

  const preview = store.previewImport(backup);
  assert.deepEqual(preview, { valid: 1, invalid: 0, conflicts: 1, sourceVersion: 2 });
});

test("匯入 v1 備份會轉換有效本機路線並略過無效路線", () => {
  const store = Store.create(memoryStorage(), [builtInRoute]);
  const legacyLocalRoute = structuredClone(localRoute);
  delete legacyLocalRoute.trackSource;
  const backup = JSON.stringify({
    version: 1,
    overrides: [],
    additions: [legacyLocalRoute, { id: "bad", name: "", coordinates: [] }],
    deleted: []
  });

  assert.deepEqual(store.importJson(backup), { imported: 1, skipped: 1 });
  assert.deepEqual(store.list().map(route => route.id), ["r1", "local-1"]);
  assert.equal(store.list()[1].trackSource, "local");
});

test("匯入會拒絕破壞完整資料契約的新增與覆寫", () => {
  const store = Store.create(memoryStorage(), [builtInRoute]);
  const backup = JSON.stringify({
    version: 2,
    additions: [{ ...localRoute, id: "broken", tags: null }],
    overrides: [{ id: "r1", coordinates: "broken" }],
    deleted: []
  });

  assert.deepEqual(store.previewImport(backup), { valid: 0, invalid: 2, conflicts: 0, sourceVersion: 2 });
  assert.deepEqual(store.importJson(backup), { imported: 0, skipped: 2 });
  assert.deepEqual(store.list(), [builtInRoute]);
});

test("拒絕未知版本或無法解析的備份", () => {
  const store = Store.create(memoryStorage(), [builtInRoute]);
  assert.throws(() => store.previewImport("{"), /備份格式/);
  assert.throws(() => store.previewImport('{"version":3}'), /版本/);
});
