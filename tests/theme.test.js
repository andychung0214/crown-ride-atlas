"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Theme = require("../js/core/theme.js");

test("未知主題回退為黃衫", () => {
  assert.equal(Theme.resolveTheme("unknown"), "yellow");
  assert.equal(Theme.resolveTheme(null), "yellow");
});

test("只接受四套領騎衫主題", () => {
  assert.equal(Theme.isTheme("yellow"), true);
  assert.equal(Theme.isTheme("green"), true);
  assert.equal(Theme.isTheme("polka"), true);
  assert.equal(Theme.isTheme("white"), true);
  assert.equal(Theme.isTheme("dark"), false);
});

test("套用主題會更新頁面與本機儲存", () => {
  const root = { dataset: {} };
  const storage = {
    setItem(key, value) {
      this[key] = value;
    }
  };

  assert.equal(Theme.applyTheme("green", root, storage), "green");
  assert.equal(root.dataset.theme, "green");
  assert.equal(storage["crownRideAtlas.theme"], "green");
});

test("本機儲存失敗仍會套用主題", () => {
  const root = { dataset: {} };
  const storage = {
    setItem() {
      throw new Error("quota");
    }
  };

  assert.equal(Theme.applyTheme("polka", root, storage), "polka");
  assert.equal(root.dataset.theme, "polka");
});
