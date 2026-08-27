"use strict";

import { randomUUID } from "node:crypto";
import { mkdir, rename, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  LIMITS,
  parseTrackPayload,
  summarizeTrack,
  validateSegments
} from "./lib/route-art-source.mjs";
import { ROUTE_ART_DOWNLOAD_SOURCES } from "./route-art-download-sources.mjs";

const OUTPUT_PATH = resolve(dirname(fileURLToPath(import.meta.url)), "../js/data/route-art-downloads.js");
const REDIRECT_STATUSES = Object.freeze(new Set([301, 302, 303, 307, 308]));
const SHAPEMILES_HOST = "shapemiles.com";
const MAX_REDIRECTS = 3;

function parseRestrictedUrl(value, label) {
  let parsed;
  try {
    parsed = new URL(String(value));
  } catch (error) {
    throw new Error(`${label} URL 格式無效`, { cause: error });
  }
  if (parsed.username || parsed.password) throw new Error(`${label} URL 不接受認證資訊`);
  if (parsed.protocol !== "https:") throw new Error(`${label} URL 必須使用 HTTPS`);
  if (parsed.hostname !== SHAPEMILES_HOST || parsed.port) {
    throw new Error(`${label} URL 主機不在 allowlist`);
  }
  if (parsed.search || parsed.hash) throw new Error(`${label} URL 路徑不在 allowlist`);
  return parsed;
}

function validateSourceUrls(source) {
  const sourceUrl = parseRestrictedUrl(source.sourceUrl, `${source.id} 來源頁`);
  const downloadUrl = parseRestrictedUrl(source.downloadUrl, `${source.id} 下載`);
  const sourcePath = `/en/city/taipei/art-gps-routes/${source.slug}`;
  const downloadPath = `/api/art-routes/taipei/${source.slug}/gpx`;
  if (sourceUrl.pathname !== sourcePath || downloadUrl.pathname !== downloadPath) {
    throw new Error(`${source.id} URL 路徑不在 allowlist`);
  }
  return { sourceUrl, downloadUrl, downloadPath };
}

function validateRedirectUrl(location, currentUrl, source, downloadPath) {
  let target;
  try {
    target = new URL(String(location), currentUrl);
  } catch (error) {
    throw new Error(`${source.id} redirect URL 格式無效`, { cause: error });
  }
  const parsed = parseRestrictedUrl(target.href, `${source.id} redirect`);
  if (parsed.pathname !== downloadPath) {
    throw new Error(`${source.id} redirect URL 路徑不在 allowlist`);
  }
  return parsed;
}

function redactSensitive(value) {
  return String(value)
    .replace(/\b(?:authorization|cookie|client_secret|access_token|refresh_token|token)\b\s*[:=]\s*(?:bearer\s+)?[^\s,;]+/gi, "[REDACTED]")
    .replace(/\bbearer\s+[^\s,;]+/gi, "[REDACTED]")
    .replace(/\/\/[^/@\s]+:[^/@\s]+@/g, "//[REDACTED]@");
}

function describeError(error) {
  const message = redactSensitive(error instanceof Error ? error.message : String(error));
  const cause = error && typeof error === "object" ? error.cause : null;
  if (!cause || typeof cause !== "object") return message;
  const code = typeof cause.code === "string" ? redactSensitive(cause.code) : "";
  const causeMessage = cause instanceof Error ? redactSensitive(cause.message) : "";
  return code && causeMessage ? `${message}（${code}：${causeMessage}）` : message;
}

async function readRestrictedBody(response, sourceId) {
  const contentLength = response.headers.get("content-length");
  if (contentLength !== null) {
    if (!/^\d+$/.test(contentLength.trim())) {
      throw new Error(`${sourceId} Content-Length 格式無效`);
    }
    if (Number(contentLength) > LIMITS.maxBytes) {
      throw new Error(`${sourceId} 回應大小不得超過 5 MB`);
    }
  }

  if (!response.body || typeof response.body.getReader !== "function") {
    const payload = Buffer.from(await response.arrayBuffer());
    if (payload.length > LIMITS.maxBytes) throw new Error(`${sourceId} 回應大小不得超過 5 MB`);
    return payload;
  }

  const reader = response.body.getReader();
  const chunks = [];
  let totalBytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = Buffer.from(value);
      totalBytes += chunk.length;
      if (totalBytes > LIMITS.maxBytes) {
        await reader.cancel();
        throw new Error(`${sourceId} 回應大小不得超過 5 MB`);
      }
      chunks.push(chunk);
    }
  } finally {
    reader.releaseLock();
  }
  return Buffer.concat(chunks, totalBytes);
}

export async function verifyDownloadSource(source, options = {}) {
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") throw new TypeError("fetchImpl 必須是函式");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(options.verifiedAt || ""))) {
    throw new Error("verifiedAt 必須是 YYYY-MM-DD 日期");
  }
  const { sourceUrl, downloadUrl, downloadPath } = validateSourceUrls(source);
  let currentUrl = downloadUrl;
  let redirectCount = 0;
  let response;

  while (true) {
    response = await fetchImpl(currentUrl.href, {
      redirect: "manual",
      headers: { accept: "application/gpx+xml, application/octet-stream;q=0.8" }
    });
    if (!response || typeof response.status !== "number" || !response.headers) {
      throw new Error(`${source.id} fetch 回應格式無效`);
    }
    if (!REDIRECT_STATUSES.has(response.status)) break;
    if (redirectCount >= MAX_REDIRECTS) {
      throw new Error(`${source.id} redirect 超過 ${MAX_REDIRECTS} 次`);
    }
    const location = response.headers.get("location");
    if (!location) throw new Error(`${source.id} redirect 缺少 Location`);
    currentUrl = validateRedirectUrl(location, currentUrl, source, downloadPath);
    redirectCount += 1;
  }

  if (response.status < 200 || response.status >= 300) {
    throw new Error(`HTTP ${response.status} ${response.statusText || ""}`.trim());
  }
  const contentType = response.headers.get("content-type") || "";
  if (/html/i.test(contentType)) throw new Error(`${source.id} 回應為 HTML，不是 GPX 格式`);
  const payload = await readRestrictedBody(response, source.id);
  const parsed = parseTrackPayload({ buffer: payload, contentType, url: currentUrl.href });
  if (parsed.sourceFormat !== "gpx") {
    throw new Error(`${source.id} 格式不符：預期 GPX，收到 ${parsed.sourceFormat}`);
  }
  const segments = validateSegments(parsed.segments, {
    sourceId: source.id,
    maxSegmentGapMeters: LIMITS.maxSegmentGapMeters
  });
  const summary = summarizeTrack(payload, parsed.sourceFormat, segments);
  const record = {
    id: source.id,
    name: source.name,
    shapeLabel: source.shapeLabel,
    regionId: "taipei",
    regionName: "台北市",
    activityType: "running",
    activityLabel: "跑步",
    status: "source-download",
    distanceKm: source.distanceKm,
    summary: `${source.name} 是 ShapeMiles 公開的台北 GPS Art 跑步路線。`,
    sourcePlatform: "ShapeMiles",
    sourceUrl: sourceUrl.href,
    externalDownloadUrl: downloadUrl.href,
    verifiedAt: options.verifiedAt,
    sourceFormat: summary.sourceFormat,
    sourceSha256: summary.sourceSha256,
    segmentCount: summary.segmentCount,
    totalPoints: summary.totalPoints,
    bounds: summary.bounds
  };
  if (typeof options.onVerified === "function") {
    options.onVerified(Object.freeze({
      id: record.id,
      bytes: payload.length,
      sourceFormat: record.sourceFormat,
      segmentCount: record.segmentCount,
      totalPoints: record.totalPoints,
      sourceSha256: record.sourceSha256
    }));
  }
  return record;
}

export async function verifyAllSources(sources, options = {}) {
  const records = [];
  const failures = [];
  for (const source of sources) {
    try {
      records.push(await verifyDownloadSource(source, options));
    } catch (error) {
      failures.push(Object.freeze({ id: source.id, reason: describeError(error) }));
    }
  }
  return { records, failures };
}

export function serializeDownloads(records) {
  const sortedRecords = [...records].sort((left, right) => left.id.localeCompare(right.id));
  const entries = sortedRecords.map(record => {
    const serialized = JSON.stringify(record, null, 2).replace(/^/gm, "    ").trimStart();
    return `    ${JSON.stringify(record.id)}: ${serialized}`;
  }).join(",\n");

  return `"use strict";\n\n(function (root, factory) {\n  const api = factory();\n\n  if (typeof module === "object" && module.exports) {\n    module.exports = api;\n  }\n\n  if (root) {\n    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { RouteArtDownloads: api });\n  }\n})(typeof window !== "undefined" ? window : globalThis, function () {\n  function deepFreeze(value) {\n    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;\n    Object.freeze(value);\n    Object.values(value).forEach(deepFreeze);\n    return value;\n  }\n\n  return deepFreeze({\n${entries}\n  });\n});\n`;
}

export async function verifyAndWriteDownloads(options = {}) {
  const sources = options.sources ?? ROUTE_ART_DOWNLOAD_SOURCES;
  const outputPath = resolve(options.outputPath ?? OUTPUT_PATH);
  const result = await verifyAllSources(sources, options);
  if (result.failures.length > 0) {
    const error = new Error(`來源驗證失敗；未改寫產物。${result.failures.map(failure => `${failure.id}: ${failure.reason}`).join("；")}`);
    error.failures = result.failures;
    throw error;
  }

  await mkdir(dirname(outputPath), { recursive: true });
  const temporaryPath = `${outputPath}.${process.pid}.${randomUUID()}.tmp`;
  try {
    await writeFile(temporaryPath, serializeDownloads(result.records), { encoding: "utf8", flag: "wx" });
    await rename(temporaryPath, outputPath);
  } catch (error) {
    await rm(temporaryPath, { force: true });
    throw error;
  }
  return result.records;
}

function currentTaipeiDate() {
  return new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

const invokedPath = process.argv[1] ? resolve(process.argv[1]) : "";
if (invokedPath === fileURLToPath(import.meta.url)) {
  verifyAndWriteDownloads({
    verifiedAt: currentTaipeiDate(),
    onVerified(meta) {
      console.log(`${meta.id}: ${meta.bytes} bytes, ${meta.sourceFormat}, ${meta.segmentCount} segments, ${meta.totalPoints} points, SHA-256 ${meta.sourceSha256}`);
    }
  }).then(records => {
    console.log(`已驗證並原子寫入 ${records.length}/${ROUTE_ART_DOWNLOAD_SOURCES.length} 件無座標摘要。`);
  }).catch(error => {
    if (Array.isArray(error.failures)) {
      for (const failure of error.failures) console.error(`${failure.id}: ${failure.reason}`);
    } else {
      console.error(describeError(error));
    }
    process.exitCode = 1;
  });
}
