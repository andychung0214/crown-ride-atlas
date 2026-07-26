"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const TrackAnalysis = require("../js/core/track-analysis.js");

test("以實際累積距離計算 100 公尺持續坡度", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.0009, lng: 121, ele: 110 },
    { lat: 25.0018, lng: 121, ele: 120 }
  ]);

  assert.ok(result.summary.distanceKm > 0.19);
  assert.ok(result.coordinates[1].gradePct > 8);
  assert.ok(result.coordinates[1].gradePct < 12);
});

test("坡度視窗會插值至剛好 100 公尺前的海拔", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.00054, lng: 121, ele: 106 },
    { lat: 25.00108, lng: 121, ele: 116 }
  ]);

  assert.ok(result.coordinates[2].gradePct > 13);
  assert.ok(result.coordinates[2].gradePct < 15);
});

test("海拔正負一公尺抖動不會累加成大量爬升", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.00045, lng: 121, ele: 101 },
    { lat: 25.0009, lng: 121, ele: 100 },
    { lat: 25.00135, lng: 121, ele: 101 },
    { lat: 25.0018, lng: 121, ele: 100 }
  ]);

  assert.equal(result.summary.elevationGainM, 0);
  assert.equal(result.summary.elevationLossM, 0);
});

test("剛好 500 公尺且爬升 30 公尺的路段會辨識為爬坡", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.0045, lng: 121, ele: 130 }
  ]);

  assert.equal(result.climbs.length, 1);
  assert.ok(result.climbs[0].distanceKm >= 0.5);
  assert.equal(result.climbs[0].elevationGainM, 30);
});

test("坡度色帶在指定邊界回傳正確分類", () => {
  assert.equal(TrackAnalysis.gradeBand(-1), "descent");
  assert.equal(TrackAnalysis.gradeBand(3), "moderate");
  assert.equal(TrackAnalysis.gradeBand(6), "hard");
  assert.equal(TrackAnalysis.gradeBand(9), "steep");
  assert.equal(TrackAnalysis.gradeBand(12), "extreme");
});

test("無效座標會排除且非有限海拔正規化為零", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: Number.NaN, lng: 121, ele: 900 },
    { lat: 25, lng: 121, ele: Number.POSITIVE_INFINITY }
  ]);

  assert.deepEqual(result.coordinates, [{
    lat: 25,
    lng: 121,
    ele: 0,
    distanceKm: 0,
    gradePct: 0,
    smoothedEle: 0,
    gradeBand: "moderate"
  }]);
  assert.equal(result.summary.distanceKm, 0);
  assert.equal(result.summary.minElevationM, 0);
  assert.equal(result.summary.maxElevationM, 0);
  assert.deepEqual(TrackAnalysis.analyzeCoordinates([]).climbs, []);
});
