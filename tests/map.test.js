"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const MapView = require("../js/ui/map.js");

test("SVG 路線路徑使用正規化座標", () => {
  const path = MapView.buildSvgPath(
    [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.2 }, { lat: 25.2, lng: 121.1 }],
    200,
    100,
    10
  );

  assert.match(path, /^M \d+(\.\d+)? \d+(\.\d+)? L /);
  assert.equal(path.split(" L ").length, 3);
});

test("空座標不產生 SVG 路徑", () => {
  assert.equal(MapView.buildSvgPath([], 200, 100, 10), "");
});

test("海拔剖面可處理固定海拔", () => {
  const path = MapView.buildElevationPath(
    [{ ele: 100 }, { ele: 100 }, { ele: 100 }],
    300,
    80,
    8
  );
  assert.equal(path, "M 8 40 L 150 40 L 292 40");
});

