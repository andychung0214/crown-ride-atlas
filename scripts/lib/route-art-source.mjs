"use strict";

import { createHash } from "node:crypto";
import { inflateRawSync } from "node:zlib";

export const LIMITS = Object.freeze({
  maxBytes: 5_000_000,
  maxPoints: 100_000,
  maxSegments: 2_000,
  maxSegmentGapMeters: 500,
  taiwan: Object.freeze({ minLat: 21.5, maxLat: 25.5, minLng: 119.5, maxLng: 122.1 })
});

const ZIP_SIGNATURES = Object.freeze({
  localFile: 0x04034b50,
  centralFile: 0x02014b50,
  endOfCentralDirectory: 0x06054b50
});

function parseNumber(value, label) {
  if (String(value).trim() === "") throw new Error(`${label} 不是有限數值`);
  const number = Number(value);
  if (!Number.isFinite(number)) throw new Error(`${label} 不是有限數值`);
  return number;
}

function assertTextSize(text, label) {
  const value = String(text ?? "");
  if (Buffer.byteLength(value, "utf8") > LIMITS.maxBytes) {
    throw new Error(`${label} 大小不得超過 5 MB`);
  }
  return value;
}

function assertSafeXml(text, label) {
  const xml = assertTextSize(text, label);
  if (/<!\s*(?:DOCTYPE|ENTITY)\b/i.test(xml)) {
    throw new Error(`${label} 不接受 DTD 或外部實體`);
  }
  return xml;
}

function extractAttribute(attributes, name) {
  const match = new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, "i").exec(attributes);
  if (!match) throw new Error(`GPX trkpt 缺少 ${name} 屬性`);
  return parseNumber(match[2], `GPX ${name}`);
}

function parseKmlTuple(tuple) {
  const values = tuple.split(",");
  if (values.length < 2) throw new Error("KML coordinates 格式無效");
  const point = {
    lat: parseNumber(values[1], "KML latitude"),
    lng: parseNumber(values[0], "KML longitude")
  };
  if (values.length >= 3 && values[2].trim() !== "") {
    point.ele = parseNumber(values[2], "KML elevation");
  }
  return point;
}

function parseGeoJsonPoint(coordinate) {
  if (!Array.isArray(coordinate) || coordinate.length < 2) {
    throw new Error("GeoJSON LineString 座標格式無效");
  }
  const point = {
    lat: parseNumber(coordinate[1], "GeoJSON latitude"),
    lng: parseNumber(coordinate[0], "GeoJSON longitude")
  };
  if (coordinate.length >= 3 && coordinate[2] !== null && coordinate[2] !== "") {
    point.ele = parseNumber(coordinate[2], "GeoJSON elevation");
  }
  return point;
}

function parseGeoJsonLine(coordinates) {
  if (!Array.isArray(coordinates) || coordinates.length < 2) {
    throw new Error("GeoJSON LineString 必須至少包含兩個座標");
  }
  return coordinates.map(parseGeoJsonPoint);
}

function distanceMeters(start, end) {
  const radians = value => value * Math.PI / 180;
  const latDelta = radians(end.lat - start.lat);
  const lngDelta = radians(end.lng - start.lng);
  const startLat = radians(start.lat);
  const endLat = radians(end.lat);
  const haversine = Math.sin(latDelta / 2) ** 2
    + Math.cos(startLat) * Math.cos(endLat) * Math.sin(lngDelta / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function assertBuffer(buffer, label) {
  if (!Buffer.isBuffer(buffer)) throw new TypeError(`${label} 必須是 Buffer`);
  if (buffer.length > LIMITS.maxBytes) throw new Error(`${label} 大小不得超過 5 MB`);
  return buffer;
}

function assertZipPath(name) {
  const normalized = name.replace(/\\/g, "/");
  if (!name || name.includes("\0") || normalized.startsWith("/")
    || /^[A-Za-z]:\//.test(normalized)
    || normalized.split("/").includes("..")) {
    throw new Error(`KMZ entry 路徑不安全：${name}`);
  }
}

function findEndOfCentralDirectory(buffer) {
  if (buffer.length < 22) throw new Error("KMZ ZIP 結構不完整");
  const minimum = Math.max(0, buffer.length - 22 - 0xffff);
  for (let offset = buffer.length - 22; offset >= minimum; offset -= 1) {
    if (buffer.readUInt32LE(offset) === ZIP_SIGNATURES.endOfCentralDirectory) return offset;
  }
  throw new Error("KMZ 缺少 ZIP central directory");
}

function readCentralEntries(buffer) {
  const eocdOffset = findEndOfCentralDirectory(buffer);
  const diskNumber = buffer.readUInt16LE(eocdOffset + 4);
  const centralDisk = buffer.readUInt16LE(eocdOffset + 6);
  const diskEntries = buffer.readUInt16LE(eocdOffset + 8);
  const totalEntries = buffer.readUInt16LE(eocdOffset + 10);
  const centralSize = buffer.readUInt32LE(eocdOffset + 12);
  const centralOffset = buffer.readUInt32LE(eocdOffset + 16);
  const commentLength = buffer.readUInt16LE(eocdOffset + 20);

  if (diskNumber !== 0 || centralDisk !== 0 || diskEntries !== totalEntries) {
    throw new Error("KMZ 不支援多磁碟 ZIP");
  }
  if (totalEntries === 0 || totalEntries === 0xffff
    || centralSize === 0xffffffff || centralOffset === 0xffffffff) {
    throw new Error("KMZ ZIP entry 或 ZIP64 結構無效");
  }
  if (eocdOffset + 22 + commentLength !== buffer.length
    || centralOffset + centralSize !== eocdOffset) {
    throw new Error("KMZ ZIP central directory 範圍無效");
  }

  const entries = [];
  let cursor = centralOffset;
  for (let index = 0; index < totalEntries; index += 1) {
    if (cursor + 46 > eocdOffset || buffer.readUInt32LE(cursor) !== ZIP_SIGNATURES.centralFile) {
      throw new Error("KMZ ZIP central directory entry 無效");
    }
    const flags = buffer.readUInt16LE(cursor + 8);
    const method = buffer.readUInt16LE(cursor + 10);
    const compressedSize = buffer.readUInt32LE(cursor + 20);
    const uncompressedSize = buffer.readUInt32LE(cursor + 24);
    const filenameLength = buffer.readUInt16LE(cursor + 28);
    const extraLength = buffer.readUInt16LE(cursor + 30);
    const entryCommentLength = buffer.readUInt16LE(cursor + 32);
    const diskStart = buffer.readUInt16LE(cursor + 34);
    const localHeaderOffset = buffer.readUInt32LE(cursor + 42);
    const nextCursor = cursor + 46 + filenameLength + extraLength + entryCommentLength;
    if (nextCursor > eocdOffset) throw new Error("KMZ ZIP entry 範圍無效");

    const name = buffer.subarray(cursor + 46, cursor + 46 + filenameLength).toString("utf8");
    assertZipPath(name);
    if ((flags & 0x0001) !== 0 || (flags & 0x0040) !== 0) {
      throw new Error(`KMZ 不接受加密 entry：${name}`);
    }
    if (method !== 0 && method !== 8) {
      throw new Error(`KMZ 不支援壓縮方法 ${method}`);
    }
    if (diskStart !== 0 || compressedSize === 0xffffffff
      || uncompressedSize === 0xffffffff || localHeaderOffset === 0xffffffff) {
      throw new Error("KMZ 不支援多磁碟或 ZIP64 entry");
    }
    entries.push({
      name,
      flags,
      method,
      compressedSize,
      uncompressedSize,
      localHeaderOffset,
      centralOffset
    });
    cursor = nextCursor;
  }
  if (cursor !== eocdOffset) throw new Error("KMZ ZIP central directory 大小不一致");
  return entries;
}

function extractEntryPayload(buffer, entry) {
  const offset = entry.localHeaderOffset;
  if (offset + 30 > entry.centralOffset
    || buffer.readUInt32LE(offset) !== ZIP_SIGNATURES.localFile) {
    throw new Error("KMZ ZIP local header 無效");
  }
  const localFlags = buffer.readUInt16LE(offset + 6);
  const localMethod = buffer.readUInt16LE(offset + 8);
  const localCompressedSize = buffer.readUInt32LE(offset + 18);
  const localUncompressedSize = buffer.readUInt32LE(offset + 22);
  const filenameLength = buffer.readUInt16LE(offset + 26);
  const extraLength = buffer.readUInt16LE(offset + 28);
  const filenameStart = offset + 30;
  const payloadStart = filenameStart + filenameLength + extraLength;
  const payloadEnd = payloadStart + entry.compressedSize;
  if (payloadEnd > entry.centralOffset) throw new Error("KMZ ZIP payload 範圍無效");

  const localName = buffer.subarray(filenameStart, filenameStart + filenameLength).toString("utf8");
  if (localName !== entry.name || localFlags !== entry.flags || localMethod !== entry.method) {
    throw new Error("KMZ ZIP local header 與 central directory 不一致");
  }
  if ((entry.flags & 0x0008) === 0
    && (localCompressedSize !== entry.compressedSize
      || localUncompressedSize !== entry.uncompressedSize)) {
    throw new Error("KMZ ZIP entry 大小不一致");
  }
  if (entry.compressedSize > LIMITS.maxBytes || entry.uncompressedSize > LIMITS.maxBytes) {
    throw new Error("KMZ KML 大小不得超過 5 MB");
  }

  const compressed = buffer.subarray(payloadStart, payloadEnd);
  let payload;
  if (entry.method === 0) {
    if (entry.compressedSize !== entry.uncompressedSize) {
      throw new Error("KMZ stored KML 大小不一致");
    }
    payload = Buffer.from(compressed);
  } else {
    try {
      payload = inflateRawSync(compressed, { maxOutputLength: LIMITS.maxBytes });
    } catch (error) {
      throw new Error("KMZ KML 解壓失敗或解壓後大小超過 5 MB", { cause: error });
    }
  }
  if (payload.length > LIMITS.maxBytes) throw new Error("KMZ KML 解壓後大小不得超過 5 MB");
  if (payload.length !== entry.uncompressedSize) throw new Error("KMZ KML 解壓後大小不一致");
  return payload;
}

export function parseGpxSegments(text) {
  const xml = assertSafeXml(text, "GPX");
  const segmentBodies = [];
  const segmentPattern = /<(?:[\w-]+:)?trkseg\b[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?trkseg\s*>/gi;
  let segmentMatch;
  while ((segmentMatch = segmentPattern.exec(xml))) segmentBodies.push(segmentMatch[1]);
  if (segmentBodies.length === 0) segmentBodies.push(xml);

  return segmentBodies.map(segmentBody => {
    const segment = [];
    const pointPattern = /<(?:[\w-]+:)?trkpt\b([^>]*?)(?:\/\s*>|>([\s\S]*?)<\/(?:[\w-]+:)?trkpt\s*>)/gi;
    let pointMatch;
    while ((pointMatch = pointPattern.exec(segmentBody))) {
      const point = {
        lat: extractAttribute(pointMatch[1], "lat"),
        lng: extractAttribute(pointMatch[1], "lon")
      };
      const elevationMatch = /<(?:[\w-]+:)?ele\b[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?ele\s*>/i.exec(pointMatch[2] || "");
      if (elevationMatch) point.ele = parseNumber(elevationMatch[1], "GPX elevation");
      segment.push(point);
    }
    return segment;
  });
}

export function parseKmlSegments(text) {
  const xml = assertSafeXml(text, "KML");
  const segments = [];
  const linePattern = /<(?:[\w-]+:)?LineString\b[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?LineString\s*>/gi;
  let lineMatch;

  while ((lineMatch = linePattern.exec(xml))) {
    const coordinateMatch = /<(?:[\w-]+:)?coordinates\b[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?coordinates\s*>/i.exec(lineMatch[1]);
    if (!coordinateMatch) throw new Error("KML LineString 缺少 coordinates");
    const tuples = coordinateMatch[1].trim().split(/\s+/).filter(Boolean);
    if (tuples.length < 2) throw new Error("KML LineString 必須至少包含兩個座標");
    segments.push(tuples.map(parseKmlTuple));
  }

  if (segments.length === 0) throw new Error("KML 未包含 LineString 軌跡");
  return segments;
}

export function parseGeoJsonSegments(text) {
  const json = assertTextSize(text, "GeoJSON");
  let document;
  try {
    document = JSON.parse(json);
  } catch (error) {
    throw new Error("GeoJSON 格式無效", { cause: error });
  }
  const geometry = document?.type === "Feature" ? document.geometry : document;
  if (!geometry || (geometry.type !== "LineString" && geometry.type !== "MultiLineString")) {
    throw new Error("GeoJSON 只接受 LineString 或 MultiLineString 及其 Feature 包裝");
  }
  if (geometry.type === "LineString") return [parseGeoJsonLine(geometry.coordinates)];
  if (!Array.isArray(geometry.coordinates) || geometry.coordinates.length < 1) {
    throw new Error("GeoJSON MultiLineString 必須至少包含一段 LineString");
  }
  return geometry.coordinates.map(parseGeoJsonLine);
}

export function extractKmzKml(buffer) {
  assertBuffer(buffer, "KMZ");
  const kmlEntries = readCentralEntries(buffer)
    .filter(entry => entry.name.toLowerCase().endsWith(".kml"));
  if (kmlEntries.length !== 1) {
    throw new Error(`KMZ 必須包含單一 KML entry，目前為 ${kmlEntries.length} 個`);
  }
  return extractEntryPayload(buffer, kmlEntries[0]);
}

export function detectFormat({ buffer, contentType = "", url = "" }) {
  assertBuffer(buffer, "來源檔案");
  if (buffer.length === 0) throw new Error("來源檔案為空，無法判斷格式");

  const normalizedContentType = String(contentType).split(";", 1)[0].trim().toLowerCase();
  const text = buffer.subarray(0, Math.min(buffer.length, 16_384)).toString("utf8")
    .replace(/^\uFEFF/, "").trimStart();
  if (normalizedContentType.includes("html")
    || /^(?:<!doctype\s+html\b|<html\b)/i.test(text)) {
    throw new Error("來源回應為 HTML，不是支援的軌跡格式");
  }
  if (buffer.length >= 4 && buffer.readUInt32LE(0) === ZIP_SIGNATURES.localFile) return "kmz";
  if (/<(?:[\w-]+:)?gpx\b/i.test(text)) return "gpx";
  if (/<(?:[\w-]+:)?kml\b/i.test(text)) return "kml";
  if (text.startsWith("{") || text.startsWith("[")) return "geojson";

  if (normalizedContentType === "application/gpx+xml") return "gpx";
  if (normalizedContentType === "application/vnd.google-earth.kml+xml") return "kml";
  if (normalizedContentType === "application/vnd.google-earth.kmz") return "kmz";
  if (normalizedContentType === "application/geo+json" || normalizedContentType === "application/json") {
    return "geojson";
  }

  let pathname;
  try {
    pathname = new URL(String(url)).pathname.toLowerCase();
  } catch {
    pathname = String(url).split(/[?#]/, 1)[0].toLowerCase();
  }
  if (pathname.endsWith(".gpx")) return "gpx";
  if (pathname.endsWith(".kml")) return "kml";
  if (pathname.endsWith(".kmz")) return "kmz";
  if (pathname.endsWith(".geojson") || pathname.endsWith(".json")) return "geojson";
  throw new Error("無法判斷來源軌跡格式");
}

export function parseTrackPayload({ buffer, contentType = "", url = "" }) {
  const sourceFormat = detectFormat({ buffer, contentType, url });
  let segments;
  if (sourceFormat === "kmz") {
    segments = parseKmlSegments(extractKmzKml(buffer).toString("utf8"));
  } else if (sourceFormat === "kml") {
    segments = parseKmlSegments(buffer.toString("utf8"));
  } else if (sourceFormat === "gpx") {
    segments = parseGpxSegments(buffer.toString("utf8"));
  } else {
    segments = parseGeoJsonSegments(buffer.toString("utf8"));
  }
  return { sourceFormat, segments };
}

export function validateSegments(segments, options = {}) {
  const sourceId = typeof options.sourceId === "string" && options.sourceId.trim()
    ? options.sourceId
    : "來源";
  const maxSegmentGapMeters = options.maxSegmentGapMeters ?? LIMITS.maxSegmentGapMeters;
  if (!Number.isFinite(maxSegmentGapMeters) || maxSegmentGapMeters <= 0
    || maxSegmentGapMeters > LIMITS.maxSegmentGapMeters) {
    throw new Error(`${sourceId} 的最大同段跳點必須介於 0 與 ${LIMITS.maxSegmentGapMeters} m`);
  }
  if (!Array.isArray(segments) || segments.length < 1) {
    throw new Error(`${sourceId} 必須至少包含一段且每段至少兩個座標`);
  }
  if (segments.length > LIMITS.maxSegments) {
    throw new Error(`${sourceId} 分段不得超過 ${LIMITS.maxSegments.toLocaleString("en-US")} 段`);
  }

  let totalPoints = 0;
  for (let segmentIndex = 0; segmentIndex < segments.length; segmentIndex += 1) {
    const segment = segments[segmentIndex];
    if (!Array.isArray(segment) || segment.length < 2) {
      throw new Error(`${sourceId} 必須至少包含一段且每段至少兩個座標`);
    }
    totalPoints += segment.length;
    if (totalPoints > LIMITS.maxPoints) {
      throw new Error(`${sourceId} 座標點不得超過 ${LIMITS.maxPoints.toLocaleString("en-US")} 點`);
    }

    for (let pointIndex = 0; pointIndex < segment.length; pointIndex += 1) {
      const point = segment[pointIndex];
      if (!point || typeof point !== "object"
        || !Number.isFinite(point.lat) || !Number.isFinite(point.lng)
        || (Object.hasOwn(point, "ele") && !Number.isFinite(point.ele))) {
        throw new Error(`${sourceId} 包含非有限座標或海拔`);
      }
      if (point.lat < LIMITS.taiwan.minLat || point.lat > LIMITS.taiwan.maxLat
        || point.lng < LIMITS.taiwan.minLng || point.lng > LIMITS.taiwan.maxLng) {
        throw new Error(`${sourceId} 包含不在台灣範圍內的座標`);
      }
      if (pointIndex > 0) {
        const gap = distanceMeters(segment[pointIndex - 1], point);
        if (gap >= maxSegmentGapMeters) {
          throw new Error(`${sourceId} 第 ${segmentIndex + 1} 段相鄰點間距 ${gap.toFixed(1)} m，不得達到 ${maxSegmentGapMeters} m`);
        }
      }
    }
  }
  return segments;
}

export function summarizeTrack(buffer, sourceFormat, segments) {
  return {
    sourceFormat,
    sourceSha256: createHash("sha256").update(buffer).digest("hex"),
    segmentCount: segments.length,
    totalPoints: segments.reduce((sum, segment) => sum + segment.length, 0),
    bounds: {
      minLat: Math.min(...segments.flat().map(point => point.lat)),
      maxLat: Math.max(...segments.flat().map(point => point.lat)),
      minLng: Math.min(...segments.flat().map(point => point.lng)),
      maxLng: Math.max(...segments.flat().map(point => point.lng))
    }
  };
}
