"use strict";

import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  parseGpxSegments,
  parseKmlSegments,
  parseTrackPayload,
  summarizeTrack,
  validateSegments
} from "./lib/route-art-source.mjs";

export { parseGpxSegments, parseKmlSegments, validateSegments };

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

async function downloadSource(source) {
  const response = await fetch(source.url);
  if (response.status < 200 || response.status >= 300) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`.trim());
  }
  const payload = Buffer.from(await response.arrayBuffer());
  const parsed = parseTrackPayload({
    buffer: payload,
    contentType: response.headers.get("content-type") || "",
    url: source.url
  });
  if (parsed.sourceFormat !== source.format) {
    throw new Error(`${source.id} 格式不符：預期 ${source.format}，收到 ${parsed.sourceFormat}`);
  }
  const segments = validateSegments(parsed.segments, {
    sourceId: source.id,
    maxSegmentGapMeters: 500
  });
  const summary = summarizeTrack(payload, parsed.sourceFormat, segments);
  return {
    routeId: source.id,
    sourceFormat: summary.sourceFormat,
    sourceUrl: source.url,
    sourceSha256: summary.sourceSha256,
    geometrySha256: createHash("sha256").update(JSON.stringify(segments)).digest("hex"),
    segments
  };
}

function serializeTracks(tracks) {
  const entries = tracks.map(track => {
    const value = {
      routeId: track.routeId,
      sourceFormat: track.sourceFormat,
      sourceUrl: track.sourceUrl,
      sourceSha256: track.sourceSha256,
      geometrySha256: track.geometrySha256,
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
      console.log(`${source.id}: ${track.segments.length} segments, ${track.segments.flat().length} points, source SHA-256 ${track.sourceSha256}, geometry SHA-256 ${track.geometrySha256}`);
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
