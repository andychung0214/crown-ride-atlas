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

test("公開路線美學的分數與實際道路 bundle 一致", async () => {
  const { parseBundleSource } = await import("../scripts/validate-tracks.mjs");
  const source = await fs.readFile("js/data/tracks/route-art.js", "utf8");
  const tracks = parseBundleSource("route-art", source);
  const route = Data.routes.find(item => item.id === "route-art-little-taiwan");
  const result = Shape.compareShape(route.targetShape, tracks[route.id].coordinates);

  assert.equal(Shape.isNearMatch(result), true);
  assert.ok(Math.abs(result.score - route.shapeScore) < 0.001);
  assert.ok(Math.abs(result.maxPointError - route.maxPointError) < 0.001);
});
