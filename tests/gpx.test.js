"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Gpx = require("../js/core/gpx.js");
const Catalog = require("../js/data/route-art-catalog.js");

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
  assert.deepEqual(parsed.segments, [route.coordinates]);
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

  const parsed = Gpx.parse(xml);
  const coordinates = [
    { lat: 23.5, lng: 120.5, ele: 8.4 },
    { lat: 23.6, lng: 120.6, ele: 0 }
  ];
  assert.deepEqual(parsed, { name: "海岸線", coordinates, segments: [coordinates] });
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

test("內建路線尚未載入軌跡時拒絕建立 GPX", () => {
  assert.throws(
    () => Gpx.createDownload({ id: "r1", name: "內建路線", trackRef: "r1" }),
    /尚未載入/
  );
});

test("內建路線下載使用已載入軌跡的完整座標與海拔", () => {
  const track = {
    routeId: "r1",
    coordinates: [
      { lat: 25, lng: 121, ele: 18 },
      { lat: 25.001, lng: 121.002, ele: 73 },
      { lat: 25.002, lng: 121.003, ele: 141 }
    ]
  };

  const download = Gpx.createDownload({ id: "r1", name: "真實道路", trackRef: "r1" }, track);

  assert.match(download.text, /lat="25\.001" lon="121\.002"><ele>73<\/ele>/);
  assert.match(download.text, /lat="25\.002" lon="121\.003"><ele>141<\/ele>/);
  assert.equal((download.text.match(/<trkpt /g) || []).length, 3);
});

test("多段作品以獨立 trkseg 輸出並保留扁平座標相容欄位", () => {
  const segments = [
    [{ lat: 25, lng: 121, ele: 1 }, { lat: 25.001, lng: 121.001, ele: 2 }],
    [{ lat: 25.02, lng: 121.02 }, { lat: 25.021, lng: 121.021, ele: 4 }]
  ];

  const xml = Gpx.serialize({ name: "多段作品", segments });
  const parsed = Gpx.parse(xml);

  assert.equal((xml.match(/<trkseg>/g) || []).length, 2);
  assert.deepEqual(parsed.segments, [
    segments[0],
    [{ lat: 25.02, lng: 121.02, ele: 0 }, { lat: 25.021, lng: 121.021, ele: 4 }]
  ]);
  assert.deepEqual(parsed.coordinates, parsed.segments.flat());
});

test("作品 GPX 與地圖共用同一份座標", () => {
  const art = Catalog.find(item => item.id === "gps-art-taipei-cherry-blossom");
  const download = Gpx.createDownload(art, { segments: art.segments });
  const parsed = Gpx.parse(download.text);
  assert.deepEqual(parsed.segments, art.segments.map(segment => segment.map(point => ({
    lat: point.lat, lng: point.lng, ele: Number.isFinite(point.ele) ? point.ele : 0
  }))));
});

test("新增三件 GPS Art 的站內 GPX 與各自地圖逐點一致", () => {
  for (const id of [
    "gps-art-riverside-seahorse",
    "gps-art-wild-goose-west",
    "gps-art-xizhi-pigeon"
  ]) {
    const art = Catalog.find(item => item.id === id);
    const download = Gpx.createDownload(art, { segments: art.segments });
    const parsed = Gpx.parse(download.text);
    const expected = art.segments.map(segment => segment.map(point => ({
      lat: point.lat,
      lng: point.lng,
      ele: Number.isFinite(point.ele) ? point.ele : 0
    })));

    assert.equal(art.status, "track-ready", id);
    assert.match(download.filename, /\.gpx$/);
    assert.deepEqual(parsed.segments, expected, id);
    assert.equal(parsed.coordinates.length, art.segments.flat().length, id);
  }
});
