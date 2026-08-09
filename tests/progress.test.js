"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Progress = require("../js/core/progress.js");

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
    raw(key) { return values.get(key); }
  };
}

test("完成狀態只接受去重後的路線識別碼", () => {
  const storage = memoryStorage({
    [Progress.STORAGE_KEY]: JSON.stringify(["r1", "r1", 7, "", " r2 "])
  });
  const progress = Progress.create(storage);

  assert.deepEqual([...progress.list()], ["r1", "r2"]);
  assert.equal(progress.has("r1"), true);
  assert.equal(progress.has("missing"), false);
});

test("完成狀態可以切換、持久化與清除", () => {
  const storage = memoryStorage();
  const progress = Progress.create(storage);

  assert.equal(progress.toggle("route-a"), true);
  assert.equal(progress.has("route-a"), true);
  assert.deepEqual(JSON.parse(storage.raw(Progress.STORAGE_KEY)), ["route-a"]);
  assert.equal(progress.toggle("route-a"), false);
  assert.equal(progress.has("route-a"), false);

  progress.toggle("route-b");
  progress.clear();
  assert.deepEqual([...progress.list()], []);
  assert.deepEqual(JSON.parse(storage.raw(Progress.STORAGE_KEY)), []);
});

test("損壞的完成資料會安全回復空集合", () => {
  const storage = memoryStorage({ [Progress.STORAGE_KEY]: "not-json" });
  const progress = Progress.create(storage);
  assert.deepEqual([...progress.list()], []);
});

test("儲存失敗時完成切換會回報可理解錯誤", () => {
  const storage = {
    getItem() { return null; },
    setItem() { throw new Error("quota"); }
  };
  const progress = Progress.create(storage);
  assert.throws(() => progress.toggle("route-a"), /儲存空間不足/);
  assert.equal(progress.has("route-a"), false);
});
