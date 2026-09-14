"use strict";

import { createHash, randomUUID } from "node:crypto";
import * as fsPromises from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  parseGpxSegments,
  parseKmlSegments,
  parseTrackPayload,
  LIMITS,
  summarizeTrack,
  validateSegments
} from "./lib/route-art-source.mjs";

export { parseGpxSegments, parseKmlSegments, validateSegments };

export const SOURCES = Object.freeze([
  ...[
    ["gps-art-zhishan-big-dinosaur", "ZhishanBigDinosaur"],
    ["gps-art-zhishan-little-dinosaur", "ZhishanLittleDinosaur"],
    ["gps-art-zhishan-2024", "Zhishan2024"],
    ["gps-art-kaohsiung-little-dinosaur", "KaohsiungLittleDinosaur"]
  ].map(([id, filename]) => Object.freeze({
    id, format: "gpx", required: true,
    url: `https://janice880624.github.io/janice_sport_blog/map/gpx/${filename}.gpx`
  })),
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
  }),
  Object.freeze({
    id: "gps-art-riverside-seahorse",
    format: "gpx",
    required: true,
    url: "https://cdntwrunning.biji.co/hiking_gpx/hiking_9ef6cbd10b3803c689787b0f7df752e9.gpx"
  }),
  Object.freeze({
    id: "gps-art-wild-goose-west",
    format: "geojson",
    required: true,
    url: "https://brouter.de/brouter?lonlats=121.528052%2C25.068379%7C121.5074%2C25.0565%7C121.477%2C25.089%7C121.4668%2C25.1087%7C121.488%2C25.104%7C121.51318%2C25.09842%7C121.52656%2C25.125%7C121.52095%2C25.14358%7C121.52929%2C25.15496%7C121.538118%2C25.160024%7C121.55863%2C25.14774%7C121.57279%2C25.13518%7C121.56%2C25.108%7C121.5488%2C25.0902%7C121.60234%2C25.08376%7C121.57201%2C25.06478%7C121.528052%2C25.068379&profile=fastbike&alternativeidx=0&format=geojson"
  }),
  Object.freeze({
    id: "gps-art-xizhi-pigeon",
    format: "gpx",
    required: true,
    url: "https://www.webpage.idv.tw/bikepigeon/download/order.gpx"
  })
]);
export const ALLOWED_SOURCE_HOSTS = Object.freeze([
  "janice880624.github.io",
  "brouter.de",
  "cdntwrunning.biji.co",
  "cdnrunningfiles.biji.co",
  "www.google.com",
  "www.webpage.idv.tw"
]);

const OUTPUT_PATH = resolve(dirname(fileURLToPath(import.meta.url)), "../js/data/route-art-tracks.js");
const REDIRECT_STATUSES = Object.freeze(new Set([301, 302, 303, 307, 308]));
const MAX_REDIRECTS = 3;
const DEFAULT_TIMEOUT_MS = 15_000;
const MAX_TIMEOUT_MS = 60_000;
const DEFAULT_FS = Object.freeze({
  mkdir: fsPromises.mkdir,
  writeFile: fsPromises.writeFile,
  rename: fsPromises.rename,
  rm: fsPromises.rm
});

class SourceDownloadError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "SourceDownloadError";
    this.code = code;
  }
}

function cancelWithoutWaiting(cancelable) {
  if (!cancelable || typeof cancelable.cancel !== "function") return;
  try {
    Promise.resolve(cancelable.cancel()).catch(() => {});
  } catch {
    // 清理失敗不得取代受控下載錯誤。
  }
}

function awaitWithSignal(promise, signal, sourceId) {
  if (signal.aborted) {
    return Promise.reject(new SourceDownloadError("timeout", `${sourceId} 來源下載逾時`));
  }
  return new Promise((resolvePromise, rejectPromise) => {
    const onAbort = () => rejectPromise(
      new SourceDownloadError("timeout", `${sourceId} 來源下載逾時`)
    );
    signal.addEventListener("abort", onAbort, { once: true });
    Promise.resolve(promise).then(
      value => {
        signal.removeEventListener("abort", onAbort);
        resolvePromise(value);
      },
      error => {
        signal.removeEventListener("abort", onAbort);
        rejectPromise(error);
      }
    );
  });
}

function validateSourceUrl(value, label) {
  let parsed;
  try {
    parsed = new URL(String(value));
  } catch (error) {
    throw new Error(`${label} URL 格式無效`, { cause: error });
  }
  if (parsed.username || parsed.password) throw new Error(`${label} URL 不接受認證資訊`);
  if (parsed.protocol !== "https:") throw new Error(`${label} URL 必須使用 HTTPS`);
  if (!ALLOWED_SOURCE_HOSTS.includes(parsed.hostname)) {
    throw new Error(`${label} URL 主機不在 allowlist：${parsed.hostname}`);
  }
  return parsed;
}

function validateRedirectUrl(location, currentUrl, sourceId) {
  let target;
  try {
    target = new URL(String(location), currentUrl);
  } catch {
    throw new Error(`${sourceId} 重新導向 URL 格式無效`);
  }
  return validateSourceUrl(target.href, `${sourceId} 重新導向`);
}

async function readRestrictedBody(response, sourceId, signal) {
  let reader;
  try {
    const contentLength = response.headers.get("content-length");
    if (contentLength !== null) {
      if (!/^\d+$/.test(contentLength.trim())) {
        throw new SourceDownloadError("invalid-content-length", `${sourceId} Content-Length 格式無效`);
      }
      if (Number(contentLength) > LIMITS.maxBytes) {
        throw new SourceDownloadError("response-too-large", `${sourceId} 回應大小不得超過 5 MB`);
      }
    }
    if (!response.body || typeof response.body.getReader !== "function") {
      throw new SourceDownloadError("unreadable-body", `${sourceId} 回應 body 必須提供可受限讀取的串流`);
    }

    reader = response.body.getReader();
    const chunks = [];
    let totalBytes = 0;
    while (true) {
      const { done, value } = await awaitWithSignal(reader.read(), signal, sourceId);
      if (done) break;
      const chunkBytes = value?.byteLength;
      if (!Number.isInteger(chunkBytes) || chunkBytes < 0) {
        throw new SourceDownloadError("invalid-body-chunk", `${sourceId} 回應 body chunk 格式無效`);
      }
      if (chunkBytes > LIMITS.maxBytes - totalBytes) {
        throw new SourceDownloadError("response-too-large", `${sourceId} 回應大小不得超過 5 MB`);
      }
      if (!ArrayBuffer.isView(value)) {
        throw new SourceDownloadError("invalid-body-chunk", `${sourceId} 回應 body chunk 格式無效`);
      }
      chunks.push(Buffer.from(value.buffer, value.byteOffset, value.byteLength));
      totalBytes += chunkBytes;
    }
    return Buffer.concat(chunks, totalBytes);
  } catch (error) {
    cancelWithoutWaiting(reader ?? response.body);
    if (error instanceof SourceDownloadError) throw error;
    throw new SourceDownloadError("body-read", `${sourceId} 來源回應讀取失敗`);
  } finally {
    if (reader && typeof reader.releaseLock === "function") reader.releaseLock();
  }
}

export async function downloadSource(source, options = {}) {
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") throw new TypeError("fetchImpl 必須是函式");
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > MAX_TIMEOUT_MS) {
    throw new Error(`timeoutMs 必須是 1 至 ${MAX_TIMEOUT_MS} 的整數`);
  }
  const initialUrl = validateSourceUrl(source.url, `${source.id} 初始來源`);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let currentUrl = initialUrl;
  let redirectCount = 0;
  let response;

  try {
    while (true) {
      try {
        response = await awaitWithSignal(fetchImpl(currentUrl.href, {
          redirect: "manual",
          signal: controller.signal,
          headers: {
            accept: "application/gpx+xml, application/vnd.google-earth.kml+xml, application/vnd.google-earth.kmz, application/geo+json, application/octet-stream;q=0.8"
          }
        }), controller.signal, source.id);
      } catch (error) {
        if (error instanceof SourceDownloadError) throw error;
        throw new SourceDownloadError("network-error", `${source.id} 來源網路請求失敗`);
      }
      if (!response || typeof response.status !== "number"
        || !response.headers || typeof response.headers.get !== "function") {
        cancelWithoutWaiting(response?.body);
        throw new SourceDownloadError("invalid-response", `${source.id} fetch 回應格式無效`);
      }
      if (!REDIRECT_STATUSES.has(response.status)) break;
      cancelWithoutWaiting(response.body);
      if (redirectCount >= MAX_REDIRECTS) {
        throw new SourceDownloadError("too-many-redirects", `${source.id} 重新導向超過 ${MAX_REDIRECTS} 次`);
      }
      const location = response.headers.get("location");
      if (!location) {
        throw new SourceDownloadError("missing-location", `${source.id} 重新導向缺少 Location`);
      }
      currentUrl = validateRedirectUrl(location, currentUrl, source.id);
      redirectCount += 1;
    }

    if (response.status < 200 || response.status >= 300) {
      cancelWithoutWaiting(response.body);
      throw new SourceDownloadError("http-status", `HTTP ${response.status}`);
    }
    const contentType = response.headers.get("content-type") || "";
    if (/html/i.test(contentType)) {
      cancelWithoutWaiting(response.body);
      throw new SourceDownloadError("html-response", `${source.id} 回應為 HTML，不是軌跡格式`);
    }
    const payload = await readRestrictedBody(response, source.id, controller.signal);
    let parsed;
    let segments;
    try {
      parsed = parseTrackPayload({ buffer: payload, contentType, url: currentUrl.href });
      if (parsed.sourceFormat !== source.format) {
        throw new Error("來源格式不符");
      }
      segments = validateSegments(parsed.segments, {
        sourceId: source.id,
        maxSegmentGapMeters: LIMITS.maxSegmentGapMeters
      });
    } catch {
      throw new SourceDownloadError("invalid-payload", `${source.id} 來源軌跡格式或內容驗證失敗`);
    }
    const summary = summarizeTrack(payload, parsed.sourceFormat, segments);
    return {
      routeId: source.id,
      sourceFormat: summary.sourceFormat,
      sourceUrl: source.url,
      sourceSha256: summary.sourceSha256,
      geometrySha256: createHash("sha256").update(JSON.stringify(segments)).digest("hex"),
      segments
    };
  } finally {
    clearTimeout(timer);
  }
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
  return error instanceof SourceDownloadError ? error.message : "來源下載失敗";
}

export async function writeTracksAtomically(tracks, options = {}) {
  const outputPath = resolve(options.outputPath ?? OUTPUT_PATH);
  const fsImpl = options.fsImpl ?? DEFAULT_FS;
  for (const method of ["mkdir", "writeFile", "rename", "rm"]) {
    if (typeof fsImpl[method] !== "function") throw new TypeError(`fsImpl.${method} 必須是函式`);
  }

  await fsImpl.mkdir(dirname(outputPath), { recursive: true });
  const temporaryPath = `${outputPath}.${process.pid}.${randomUUID()}.tmp`;
  try {
    await fsImpl.writeFile(temporaryPath, serializeTracks(tracks), { encoding: "utf8", flag: "wx" });
    await fsImpl.rename(temporaryPath, outputPath);
  } catch (error) {
    try {
      await fsImpl.rm(temporaryPath, { force: true });
    } catch {
      // 保留原始寫入或重新命名失敗，讓呼叫端取得主要原因。
    }
    throw error;
  }
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

  await writeTracksAtomically(tracks);
  return tracks;
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) {
  importTracks().catch(error => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}
