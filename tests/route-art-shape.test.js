"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const Shape = require("../js/core/route-art-shape.js");
const Data = require("../js/data/routes.js");

test("相同折線的幾何分數接近零", () => {
  const square = [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]];
  const result = Shape.compareShape(square, square);

  assert.ok(result.score <= 0.01);
  assert.ok(result.maxPointError <= 0.01);
  assert.equal(Shape.isNearMatch(result), true);
});

test("明顯不同折線不會通過路線美學閘門", () => {
  const square = [[0, 0], [1, 0], [1, 1], [0, 1], [0, 0]];
  const line = [[0, 0], [0.25, 0], [0.5, 0], [0.75, 0], [1, 0]];
  const result = Shape.compareShape(square, line);

  assert.ok(result.score > Shape.THRESHOLDS.shapeScore);
  assert.equal(Shape.isNearMatch(result), false);
});

test("環小台灣 audit bundle 保留可重現資料但不進入公開路線", async () => {
  const { parseBundleSource } = await import("../scripts/validate-tracks.mjs");
  const source = await fs.readFile("js/data/tracks/route-art.js", "utf8");
  const tracks = parseBundleSource("route-art", source);

  assert.ok(tracks["route-art-little-taiwan"]);
  assert.equal(Data.routes.some(item => item.id === "route-art-little-taiwan"), false);
  assert.equal(Data.routeArt.length, 22);
  assert.equal(Data.routeArt.some(item => item.id === "route-art-little-taiwan"), false);
});
