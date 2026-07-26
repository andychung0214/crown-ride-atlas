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
  coordinates: [{ lat: 25, lng: 121, ele: 10 }, { lat: 25.1, lng: 121.1, ele: 20 }]
};

const localRoute = {
  id: "local-1",
  slug: "local-1",
  name: "我的路線",
  regionId: "taipei",
  regionName: "台北市",
  coordinates: [{ lat: 25, lng: 121, ele: 10 }, { lat: 25.2, lng: 121.2, ele: 20 }]
};

test("本機覆寫取代內建路線且不修改內建物件", () => {
  const storage = memoryStorage({
    "crownRideAtlas.v1": JSON.stringify({
      version: 1,
      overrides: [{ id: "r1", name: "更新名稱" }],
      additions: [],
      deleted: []
    })
  });
  const builtIn = [structuredClone(builtInRoute)];
  const store = Store.create(storage, builtIn);

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
  assert.deepEqual(JSON.parse(storage.getItem("crownRideAtlas.v1")).deleted, ["r1"]);

  store.reset();
  assert.equal(store.list()[0].id, "r1");
  assert.equal(storage.getItem("crownRideAtlas.v1"), null);
});

test("拒絕缺少名稱或有效座標的新增路線", () => {
  const store = Store.create(memoryStorage(), [builtInRoute]);
  assert.throws(() => store.save({ ...localRoute, name: "" }), /名稱/);
  assert.throws(() => store.save({ ...localRoute, coordinates: [] }), /座標/);
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

  assert.equal(parsed.version, 1);
  assert.equal(parsed.additions[0].id, "local-1");

  const preview = store.previewImport(backup);
  assert.deepEqual(preview, { valid: 1, invalid: 0, conflicts: 1 });
});

test("匯入會略過無效路線並回報數量", () => {
  const store = Store.create(memoryStorage(), [builtInRoute]);
  const backup = JSON.stringify({
    version: 1,
    overrides: [],
    additions: [localRoute, { id: "bad", name: "", coordinates: [] }],
    deleted: []
  });

  assert.deepEqual(store.importJson(backup), { imported: 1, skipped: 1 });
  assert.deepEqual(store.list().map(route => route.id), ["r1", "local-1"]);
});

test("拒絕未知版本或無法解析的備份", () => {
  const store = Store.create(memoryStorage(), [builtInRoute]);
  assert.throws(() => store.previewImport("{"), /備份格式/);
  assert.throws(() => store.previewImport('{"version":2}'), /版本/);
});
