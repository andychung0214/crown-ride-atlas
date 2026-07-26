"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Gpx = require("../js/core/gpx.js");

const route = {
  id: "test-route",
  name: "山與海 <晨騎>",
  coordinates: [
    { lat: 25, lng: 121, ele: 10 },
    { lat: 25.1, lng: 121.2, ele: 20 }
  ]
};

test("GPX 輸出與解析保留路線名稱和座標", () => {
  const xml = Gpx.serialize(route);
  const parsed = Gpx.parse(xml);

  assert.equal(parsed.name, route.name);
  assert.deepEqual(parsed.coordinates, route.coordinates);
  assert.match(xml, /山與海 &lt;晨騎&gt;/);
});

test("可解析命名空間與單引號屬性的 GPX", () => {
  const xml = `<?xml version="1.0"?>
    <gpx:gpx xmlns:gpx="http://www.topografix.com/GPX/1/1">
      <gpx:trk><gpx:name>海岸線</gpx:name><gpx:trkseg>
        <gpx:trkpt lat='23.5' lon='120.5'><gpx:ele>8.4</gpx:ele></gpx:trkpt>
        <gpx:trkpt lat='23.6' lon='120.6'></gpx:trkpt>
      </gpx:trkseg></gpx:trk>
    </gpx:gpx>`;

  assert.deepEqual(Gpx.parse(xml), {
    name: "海岸線",
    coordinates: [
      { lat: 23.5, lng: 120.5, ele: 8.4 },
      { lat: 23.6, lng: 120.6, ele: 0 }
    ]
  });
});

test("拒絕沒有有效軌跡點或座標超界的 GPX", () => {
  assert.throws(() => Gpx.parse("<gpx></gpx>"), /有效座標/);
  assert.throws(
    () => Gpx.parse("<gpx><trkpt lat=\"95\" lon=\"121\"></trkpt></gpx>"),
    /有效座標/
  );
});

test("建立安全檔名與標準 GPX MIME", () => {
  assert.deepEqual(Gpx.createDownload({ ...route, name: "陽金 三峰／晨騎" }), {
    filename: "陽金-三峰-晨騎.gpx",
    text: Gpx.serialize({ ...route, name: "陽金 三峰／晨騎" }),
    mimeType: "application/gpx+xml;charset=utf-8"
  });
});
