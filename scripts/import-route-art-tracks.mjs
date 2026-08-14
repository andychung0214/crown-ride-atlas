"use strict";

import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const SOURCES = Object.freeze([
  Object.freeze({
    id: "gps-art-xinzhuang-tiger",
    format: "gpx",
    required: false,
    url: "https://cdnrunningfiles.biji.co/running_a2be3611d8381712167a98e1075fa017.gpx"
  }),
  Object.freeze({
    id: "gps-art-taipei-cherry-blossom",
    format: "kml",
    required: true,
    url: "https://www.google.com/maps/d/kml?mid=1XFfh9ZGnEVTth4D4cyZ3oQuy3fLymWU&forcekml=1"
  }),
  Object.freeze({
    id: "gps-art-taipei-circle-walk",
    format: "kml",
    required: true,
    url: "https://www.google.com/maps/d/kml?mid=1thheW0QAsTO65i6iOZ90-yZWA4M7Pqej&forcekml=1"
  })
]);

const OUTPUT_PATH = resolve(dirname(fileURLToPath(import.meta.url)), "../js/data/route-art-tracks.js");
const TAIWAN_BOUNDS = Object.freeze({ minLat: 21.5, maxLat: 25.5, minLng: 119.5, maxLng: 122.1 });
const MAX_SEGMENT_GAP_METERS = 500;

function parseNumber(value, label) {
  const number = Number(value);
  if (!Number.isFinite(number)) throw new Error(`${label} 不是有限數值`);
  return number;
}

function extractAttribute(attributes, name) {
  const match = new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, "i").exec(attributes);
  if (!match) throw new Error(`GPX trkpt 缺少 ${name} 屬性`);
  return parseNumber(match[2], `GPX ${name}`);
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

function validateSegmentGaps(segment, sourceLabel) {
  for (let index = 1; index < segment.length; index += 1) {
    const gap = distanceMeters(segment[index - 1], segment[index]);
    if (gap >= MAX_SEGMENT_GAP_METERS) {
      throw new Error(`${sourceLabel} 相鄰點間距 ${gap.toFixed(1)} m，不得達到 500 m`);
    }
  }
}

export function parseKmlSegments(xmlText) {
  const xml = String(xmlText || "");
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
  segments.forEach((segment, index) => validateSegmentGaps(segment, `KML LineString 第 ${index + 1} 段`));
  return segments;
}

export function parseGpxSegments(xmlText) {
  const xml = String(xmlText || "");
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
      if (elevationMatch) point.ele = parseNumber(elevationMatch[1].trim(), "GPX elevation");
      segment.push(point);
    }
    validateSegmentGaps(segment, "GPX trkseg");
    return segment;
  });
}

export function validateSegments(segments, sourceId) {
  if (!Array.isArray(segments) || segments.length < 1
    || segments.some(segment => !Array.isArray(segment) || segment.length < 2)) {
    throw new Error(`${sourceId} 必須至少包含一段且每段至少兩個座標`);
  }
  for (const point of segments.flat()) {
    if (!point || !Number.isFinite(point.lat) || !Number.isFinite(point.lng)
      || point.lat < TAIWAN_BOUNDS.minLat || point.lat > TAIWAN_BOUNDS.maxLat
      || point.lng < TAIWAN_BOUNDS.minLng || point.lng > TAIWAN_BOUNDS.maxLng
      || (Object.hasOwn(point, "ele") && !Number.isFinite(point.ele))) {
      throw new Error(`${sourceId} 包含非有限或不在台灣範圍內的座標`);
    }
  }
  return segments;
}

async function downloadSource(source) {
  const response = await fetch(source.url);
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`.trim());
  }
  const payload = Buffer.from(await response.arrayBuffer());
  const xml = payload.toString("utf8");
  const segments = source.format === "kml"
    ? parseKmlSegments(xml)
    : parseGpxSegments(xml);
  validateSegments(segments, source.id);
  return {
    routeId: source.id,
    sourceFormat: source.format,
    sourceUrl: source.url,
    segments,
    sha256: createHash("sha256").update(payload).digest("hex")
  };
}

function serializeTracks(tracks) {
  const entries = tracks.map(track => {
    const value = {
      routeId: track.routeId,
      sourceFormat: track.sourceFormat,
      sourceUrl: track.sourceUrl,
      segments: track.segments
    };
    return `    ${JSON.stringify(track.routeId)}: ${JSON.stringify(value, null, 2).replace(/^/gm, "    ").trimStart()}`;
  }).join(",\n");

  return `"use strict";\n\n(function (root, factory) {\n  const api = factory();\n\n  if (typeof module === "object" && module.exports) {\n    module.exports = api;\n  }\n\n  if (root) {\n    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { RouteArtTracks: api });\n  }\n})(typeof window !== "undefined" ? window : globalThis, function () {\n  function deepFreeze(value) {\n    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;\n    Object.freeze(value);\n    Object.values(value).forEach(deepFreeze);\n    return value;\n  }\n\n  return deepFreeze({\n${entries}\n  });\n});\n`;
}

export function describeDownloadError(error) {
  const message = error instanceof Error ? error.message : String(error);
  const cause = error && typeof error === "object" ? error.cause : null;
  if (!cause || typeof cause !== "object") return message;
  const code = typeof cause.code === "string" ? cause.code : "";
  const causeMessage = cause instanceof Error ? cause.message : "";
  return code && causeMessage ? `${message}（${code}：${causeMessage}）` : message;
}

export async function importTracks() {
  const tracks = [];
  const requiredFailures = [];

  for (const source of SOURCES) {
    try {
      const track = await downloadSource(source);
      tracks.push(track);
      console.log(`${source.id}: ${track.segments.length} segments, ${track.segments.flat().length} points, SHA-256 ${track.sha256}`);
    } catch (error) {
      const detail = describeDownloadError(error);
      if (source.required) {
        requiredFailures.push(`${source.id}: ${detail}`);
        console.error(`錯誤：必要來源 ${source.id} 匯入失敗：${detail}`);
      } else {
        console.warn(`警告：可選來源 ${source.id} 匯入失敗，作品維持 source-only：${detail}`);
      }
    }
  }

  if (requiredFailures.length > 0) {
    throw new Error(`必要公開軌跡匯入失敗；未改寫產物。${requiredFailures.join("；")}`);
  }

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, serializeTracks(tracks), "utf8");
  return tracks;
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) {
  importTracks().catch(error => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
