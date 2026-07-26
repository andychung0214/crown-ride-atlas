"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Geo = require("../js/core/geo.js");

test("相同座標距離為零", () => {
  assert.equal(Geo.haversineKm({ lat: 25, lng: 121 }, { lat: 25, lng: 121 }), 0);
});

test("台北至新竹的球面距離落在合理範圍", () => {
  const distance = Geo.haversineKm(
    { lat: 25.033, lng: 121.5654 },
    { lat: 24.8138, lng: 120.9675 }
  );
  assert.ok(distance > 64 && distance < 68);
});

test("總距離忽略無效資料並累加有效線段", () => {
  const points = [
    { lat: 25, lng: 121 },
    { lat: 25.01, lng: 121.01 },
    { lat: Number.NaN, lng: 121.02 },
    { lat: 25.02, lng: 121.02 }
  ];
  assert.ok(Geo.totalDistanceKm(points) > 1);
  assert.ok(Geo.totalDistanceKm(points) < 2);
});

test("SVG 正規化保留點數且落在畫布內", () => {
  const points = Geo.normalizeToSvg(
    [{ lat: 25, lng: 121 }, { lat: 25.2, lng: 121.5 }],
    200,
    100,
    10
  );

  assert.equal(points.length, 2);
  points.forEach(point => {
    assert.ok(point.x >= 10 && point.x <= 190);
    assert.ok(point.y >= 10 && point.y <= 90);
  });
});

test("單一座標置於 SVG 中央", () => {
  assert.deepEqual(
    Geo.normalizeToSvg([{ lat: 25, lng: 121 }], 200, 100, 10),
    [{ x: 100, y: 50 }]
  );
});
