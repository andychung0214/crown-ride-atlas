"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { deflateRawSync } = require("node:zlib");

const GPX_TWO_SEGMENTS = `<?xml version="1.0"?><gpx><trk>
  <trkseg><trkpt lat="25" lon="121.5"></trkpt><trkpt lat="25.001" lon="121.501"></trkpt></trkseg>
  <trkseg><trkpt lat="25.002" lon="121.502"></trkpt><trkpt lat="25.003" lon="121.503"></trkpt></trkseg>
</trk></gpx>`;

const KML_TWO_LINES = `<kml><Document>
  <LineString><coordinates>121.5,25 121.501,25.001</coordinates></LineString>
  <LineString><coordinates>121.502,25.002 121.503,25.003</coordinates></LineString>
</Document></kml>`;

function createZip(entries) {
  const localRecords = [];
  const centralRecords = [];
  let localOffset = 0;

  for (const entry of entries) {
    const filename = Buffer.from(entry.name, "utf8");
    const payload = Buffer.isBuffer(entry.payload) ? entry.payload : Buffer.from(entry.payload);
    const method = entry.method ?? 0;
    const flags = entry.flags ?? 0;
    const compressed = entry.compressed ?? (method === 8 ? deflateRawSync(payload) : payload);
    const compressedSize = entry.compressedSize ?? compressed.length;
    const uncompressedSize = entry.uncompressedSize ?? payload.length;

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(flags, 6);
    local.writeUInt16LE(method, 8);
    local.writeUInt32LE(0, 14);
    local.writeUInt32LE(compressedSize, 18);
    local.writeUInt32LE(uncompressedSize, 22);
    local.writeUInt16LE(filename.length, 26);
    localRecords.push(local, filename, compressed);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(flags, 8);
    central.writeUInt16LE(method, 10);
    central.writeUInt32LE(0, 16);
    central.writeUInt32LE(compressedSize, 20);
    central.writeUInt32LE(uncompressedSize, 24);
    central.writeUInt16LE(filename.length, 28);
    central.writeUInt32LE(localOffset, 42);
    centralRecords.push(central, filename);

    localOffset += local.length + filename.length + compressed.length;
  }

  const centralDirectory = Buffer.concat(centralRecords);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralDirectory.length, 12);
  eocd.writeUInt32LE(localOffset, 16);
  return Buffer.concat([...localRecords, centralDirectory, eocd]);
}

function createStoredZip(name, payload) {
  return createZip([{ name, payload, method: 0 }]);
}

let source;
test.before(async () => {
  source = await import("../scripts/lib/route-art-source.mjs");
});

test("來源解析器保留 GPX 與 KML 分段", () => {
  assert.deepEqual(source.parseGpxSegments(GPX_TWO_SEGMENTS).map(segment => segment.length), [2, 2]);
  assert.deepEqual(source.parseKmlSegments(KML_TWO_LINES).map(segment => segment.length), [2, 2]);
});

test("GeoJSON 只接受線資料並轉成 lat/lng", () => {
  const segments = source.parseGeoJsonSegments(JSON.stringify({
    type: "MultiLineString",
    coordinates: [
      [[121.5, 25.0, 10], [121.501, 25.001, 11]],
      [[121.502, 25.002], [121.503, 25.003]]
    ]
  }));
  assert.deepEqual(segments[0][0], { lat: 25, lng: 121.5, ele: 10 });
  assert.deepEqual(segments.map(segment => segment.length), [2, 2]);

  const featureSegments = source.parseGeoJsonSegments(JSON.stringify({
    type: "Feature",
    properties: { name: "line" },
    geometry: { type: "LineString", coordinates: [[121.5, 25], [121.501, 25.001]] }
  }));
  assert.deepEqual(featureSegments.map(segment => segment.length), [2]);
  assert.throws(() => source.parseGeoJsonSegments('{"type":"Polygon","coordinates":[]}'), /LineString/);
  assert.throws(() => source.parseGeoJsonSegments("not json"), /GeoJSON/);
});

test("KMZ 可解出 stored 與 deflate 的唯一 KML entry", () => {
  const stored = createStoredZip("doc.kml", Buffer.from(KML_TWO_LINES));
  const deflated = createZip([{ name: "DOC.KML", payload: Buffer.from(KML_TWO_LINES), method: 8 }]);
  assert.match(source.extractKmzKml(stored).toString("utf8"), /LineString/);
  assert.match(source.extractKmzKml(deflated).toString("utf8"), /LineString/);
  assert.throws(() => source.extractKmzKml(createStoredZip("readme.txt", Buffer.from("x"))), /KML/);
  assert.throws(() => source.extractKmzKml(Buffer.alloc(5_000_001)), /大小/);
});

test("KMZ 拒絕危險路徑、多個 KML、加密與未支援方法", () => {
  const kml = Buffer.from(KML_TWO_LINES);
  assert.throws(() => source.extractKmzKml(createStoredZip("../doc.kml", kml)), /路徑/);
  assert.throws(() => source.extractKmzKml(createStoredZip("/doc.kml", kml)), /路徑/);
  assert.throws(() => source.extractKmzKml(createZip([
    { name: "one.kml", payload: kml },
    { name: "two.kml", payload: kml }
  ])), /單一|多個/);
  assert.throws(() => source.extractKmzKml(createZip([
    { name: "doc.kml", payload: kml, flags: 1 }
  ])), /加密/);
  assert.throws(() => source.extractKmzKml(createZip([
    { name: "doc.kml", payload: kml, method: 12 }
  ])), /壓縮方法/);
});

test("KMZ 在解壓前後皆限制 KML 為 5 MB", () => {
  const declaredTooLarge = createZip([{
    name: "doc.kml",
    payload: Buffer.from("x"),
    method: 8,
    uncompressedSize: 5_000_001
  }]);
  const expandsTooLarge = createZip([{
    name: "doc.kml",
    payload: Buffer.alloc(5_000_001, 0x20),
    method: 8,
    uncompressedSize: 1
  }]);
  assert.throws(() => source.extractKmzKml(declaredTooLarge), /大小/);
  assert.throws(() => source.extractKmzKml(expandsTooLarge), /大小/);
});

test("格式偵測依實際內容辨識四種來源並拒絕 HTML", () => {
  const geojson = Buffer.from('{"type":"LineString","coordinates":[[121.5,25],[121.501,25.001]]}');
  const cases = [
    [Buffer.from(GPX_TWO_SEGMENTS), "application/octet-stream", "https://example.com/source", "gpx"],
    [Buffer.from(KML_TWO_LINES), "application/xml", "https://example.com/source", "kml"],
    [createStoredZip("doc.kml", Buffer.from(KML_TWO_LINES)), "application/octet-stream", "https://example.com/source", "kmz"],
    [geojson, "application/json", "https://example.com/source", "geojson"]
  ];
  for (const [buffer, contentType, url, expected] of cases) {
    assert.equal(source.detectFormat({ buffer, contentType, url }), expected);
  }
  assert.throws(() => source.detectFormat({
    buffer: Buffer.from("<!doctype html><title>Login</title>"),
    contentType: "text/html",
    url: "https://example.com/login"
  }), /HTML|格式/);
  assert.throws(() => source.detectFormat({
    buffer: Buffer.from("unknown"),
    contentType: "application/octet-stream",
    url: "https://example.com/source"
  }), /格式/);
});

test("parseTrackPayload 組合格式偵測與 KMZ 解析但保留來源格式", () => {
  const kmz = createStoredZip("doc.kml", Buffer.from(KML_TWO_LINES));
  const parsed = source.parseTrackPayload({
    buffer: kmz,
    contentType: "application/vnd.google-earth.kmz",
    url: "https://example.com/route.kmz"
  });
  assert.equal(parsed.sourceFormat, "kmz");
  assert.deepEqual(parsed.segments.map(segment => segment.length), [2, 2]);
});

test("內容驗證拒絕台灣外座標、500m 同段跳點及超量資料", () => {
  assert.throws(() => source.validateSegments([[{ lat: 35, lng: 139 }, { lat: 35.001, lng: 139.001 }]], {
    sourceId: "outside", maxSegmentGapMeters: 500
  }), /台灣/);
  assert.throws(() => source.validateSegments([[{ lat: 25, lng: 121.5 }, { lat: 25.01, lng: 121.51 }]], {
    sourceId: "jump", maxSegmentGapMeters: 500
  }), /500/);

  const point = Object.freeze({ lat: 25, lng: 121.5 });
  assert.throws(() => source.validateSegments(Array.from({ length: 2_001 }, () => [point, point]), {
    sourceId: "segments", maxSegmentGapMeters: 500
  }), /2,?000|分段/);
  assert.throws(() => source.validateSegments([Array.from({ length: 100_001 }, () => point)], {
    sourceId: "points", maxSegmentGapMeters: 500
  }), /100,?000|座標點/);
});

test("限制常數固定且驗證成功時保留原分段參照", () => {
  assert.deepEqual(source.LIMITS, {
    maxBytes: 5_000_000,
    maxPoints: 100_000,
    maxSegments: 2_000,
    maxSegmentGapMeters: 500,
    taiwan: { minLat: 21.5, maxLat: 25.5, minLng: 119.5, maxLng: 122.1 }
  });
  assert.equal(Object.isFrozen(source.LIMITS), true);
  assert.equal(Object.isFrozen(source.LIMITS.taiwan), true);
  const segments = [[{ lat: 25, lng: 121.5 }, { lat: 25.001, lng: 121.501 }]];
  assert.strictEqual(source.validateSegments(segments, { sourceId: "valid" }), segments);
});

test("軌跡摘要只輸出來源雜湊、數量與界線", () => {
  const summary = source.summarizeTrack(Buffer.from("route-source"), "geojson", [
    [{ lat: 24.9, lng: 121.4 }, { lat: 25, lng: 121.5 }],
    [{ lat: 24.8, lng: 121.6 }, { lat: 25.1, lng: 121.3 }]
  ]);
  assert.deepEqual(summary, {
    sourceFormat: "geojson",
    sourceSha256: "c6415b27c070caa05ae8f820c9722bf23119a1ae3e183adce9bf3adadcc865a3",
    segmentCount: 2,
    totalPoints: 4,
    bounds: { minLat: 24.8, maxLat: 25.1, minLng: 121.3, maxLng: 121.6 }
  });
});
