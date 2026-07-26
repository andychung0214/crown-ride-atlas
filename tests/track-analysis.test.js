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

test("平滑坡度視窗會插值至剛好 100 公尺前的海拔", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.00054, lng: 121, ele: 106 },
    { lat: 25.00108, lng: 121, ele: 116 }
  ]);

  assert.ok(result.coordinates[2].gradePct > 8);
  assert.ok(result.coordinates[2].gradePct < 9);
});

test("單點海拔尖峰經平滑後不會產生極端坡度", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.00045, lng: 121, ele: 200 },
    { lat: 25.0009, lng: 121, ele: 100 },
    { lat: 25.00135, lng: 121, ele: 100 }
  ]);

  assert.ok(result.coordinates[1].gradePct < 50);
  assert.ok(result.summary.maximumSustainedGradePct < 50);
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

test("每 50 公尺上升一公尺的緩坡仍會累積爬升", () => {
  const points = Array.from({ length: 21 }, (_, index) => ({
    lat: 25 + index * 0.00045,
    lng: 121,
    ele: 100 + index
  }));
  const result = TrackAnalysis.analyzeCoordinates(points);

  assert.ok(result.summary.elevationGainM > 15);
  assert.equal(result.summary.elevationLossM, 0);
});

test("剛好 500 公尺且爬升 30 公尺的路段會辨識為爬坡", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.0045, lng: 121, ele: 130 }
  ]);

  assert.equal(result.climbs.length, 1);
  assert.ok(result.climbs[0].distanceKm >= 0.5);
  assert.equal(result.climbs[0].gainM, 30);
  assert.ok(result.climbs[0].averageGradePct > 5);
  assert.ok(result.climbs[0].averageGradePct < 7);
  assert.ok(result.climbs[0].maximumGradePct > 5);
});

test("含短下降的一點二公里累積五十公尺爬升仍會辨識爬坡", () => {
  const elevations = [100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 120, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148];
  const result = TrackAnalysis.analyzeCoordinates(elevations.map((ele, index) => ({
    lat: 25 + index * 0.00045,
    lng: 121,
    ele
  })));

  assert.equal(result.climbs.length, 1);
  assert.equal(result.climbs[0].gainM, 50);
});

test("選項不能繞過最小 100 公尺坡度視窗與爬坡門檻", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.00054, lng: 121, ele: 106 },
    { lat: 25.00108, lng: 121, ele: 116 }
  ], {
    gradeWindowM: 1,
    climbMinDistanceM: 0,
    climbMinGainM: 0
  });

  assert.ok(result.coordinates[2].gradePct > 8);
  assert.ok(result.coordinates[2].gradePct < 9);
  assert.deepEqual(result.climbs, []);
});

test("高於安全下限的爬坡選項仍可提高辨識門檻", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.0045, lng: 121, ele: 130 }
  ], {
    climbMinDistanceM: 600,
    climbMinGainM: 40
  });

  assert.deepEqual(result.climbs, []);
});

test("舊爬坡選項名稱仍可提高辨識門檻", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.0045, lng: 121, ele: 130 }
  ], {
    minClimbDistanceM: 600,
    minClimbGainM: 40
  });

  assert.deepEqual(result.climbs, []);
});

test("新爬坡選項名稱會優先於舊名稱", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.0045, lng: 121, ele: 130 }
  ], {
    minClimbDistanceM: 600,
    minClimbGainM: 40,
    climbMinDistanceM: 500,
    climbMinGainM: 30
  });

  assert.equal(result.climbs.length, 1);
});

test("摘要使用既定海拔欄位並回報下降與最大持續坡度", () => {
  const result = TrackAnalysis.analyzeCoordinates([
    { lat: 25, lng: 121, ele: 100 },
    { lat: 25.0009, lng: 121, ele: 110 },
    { lat: 25.0018, lng: 121, ele: 100 },
    { lat: 25.0027, lng: 121, ele: 120 }
  ]);

  assert.equal(result.summary.minimumElevationM, 100);
  assert.equal(result.summary.maximumElevationM, 120);
  assert.ok(result.summary.elevationLossM > 8);
  assert.ok(result.summary.maximumSustainedGradePct > 8);
  assert.equal(Object.hasOwn(result.summary, "minElevationM"), false);
  assert.equal(Object.hasOwn(result.summary, "maxElevationM"), false);
  assert.equal(Object.hasOwn(result.summary, "maxSustainedGradePct"), false);
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
  assert.equal(result.summary.minimumElevationM, 0);
  assert.equal(result.summary.maximumElevationM, 0);
  assert.deepEqual(TrackAnalysis.analyzeCoordinates([]).climbs, []);
});
