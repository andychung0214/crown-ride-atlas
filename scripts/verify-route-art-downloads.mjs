"use strict";

import { randomUUID } from "node:crypto";
import * as fsPromises from "node:fs/promises";
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
const DEFAULT_TIMEOUT_MS = 15_000;
const MAX_TIMEOUT_MS = 60_000;
const DEFAULT_FS = Object.freeze({
  mkdir: fsPromises.mkdir,
  writeFile: fsPromises.writeFile,
  rename: fsPromises.rename,
  rm: fsPromises.rm
});

class DownloadVerificationError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "DownloadVerificationError";
    this.code = code;
  }
}

function cancelWithoutWaiting(cancelable) {
  if (!cancelable || typeof cancelable.cancel !== "function") return;
  try {
    Promise.resolve(cancelable.cancel()).catch(() => {});
  } catch {
    // 清理失敗不得取代受控驗證錯誤。
  }
}

function awaitWithSignal(promise, signal, sourceId) {
  if (signal.aborted) {
    return Promise.reject(new DownloadVerificationError("timeout", `${sourceId} 來源驗證逾時`));
  }
  return new Promise((resolvePromise, rejectPromise) => {
    const onAbort = () => rejectPromise(
      new DownloadVerificationError("timeout", `${sourceId} 來源驗證逾時`)
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

function safeFailure(sourceId, error) {
  if (error instanceof DownloadVerificationError) {
    return Object.freeze({ id: sourceId, code: error.code, reason: error.message });
  }
  return Object.freeze({ id: sourceId, code: "verification-error", reason: "來源驗證失敗" });
}

async function readRestrictedBody(response, sourceId, signal) {
  let reader;
  try {
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
      throw new Error(`${sourceId} 回應 body 必須提供可受限讀取的串流`);
    }
    reader = response.body.getReader();
    const chunks = [];
    let totalBytes = 0;
    while (true) {
      const { done, value } = await awaitWithSignal(reader.read(), signal, sourceId);
      if (done) break;
      const chunkBytes = value?.byteLength;
      if (!Number.isInteger(chunkBytes) || chunkBytes < 0) {
        throw new Error(`${sourceId} 回應 body chunk 格式無效`);
      }
      if (chunkBytes > LIMITS.maxBytes - totalBytes) {
        throw new Error(`${sourceId} 回應大小不得超過 5 MB`);
      }
      if (!ArrayBuffer.isView(value)) {
        throw new Error(`${sourceId} 回應 body chunk 格式無效`);
      }
      const chunk = Buffer.from(value.buffer, value.byteOffset, value.byteLength);
      totalBytes += chunkBytes;
      chunks.push(chunk);
    }
    return Buffer.concat(chunks, totalBytes);
  } catch (error) {
    cancelWithoutWaiting(reader ?? response.body);
    throw error;
  } finally {
    if (reader && typeof reader.releaseLock === "function") reader.releaseLock();
  }
}

export async function verifyDownloadSource(source, options = {}) {
  const fetchImpl = options.fetchImpl ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") throw new TypeError("fetchImpl 必須是函式");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(options.verifiedAt || ""))) {
    throw new Error("verifiedAt 必須是 YYYY-MM-DD 日期");
  }
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > MAX_TIMEOUT_MS) {
    throw new Error(`timeoutMs 必須是 1 至 ${MAX_TIMEOUT_MS} 的整數`);
  }
  const { sourceUrl, downloadUrl, downloadPath } = validateSourceUrls(source);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  timer.unref?.();
  let currentUrl = downloadUrl;
  let redirectCount = 0;
  let response;

  try {
    while (true) {
      try {
        response = await awaitWithSignal(fetchImpl(currentUrl.href, {
          redirect: "manual",
          signal: controller.signal,
          headers: { accept: "application/gpx+xml, application/octet-stream;q=0.8" }
        }), controller.signal, source.id);
      } catch (error) {
        if (error instanceof DownloadVerificationError) throw error;
        throw new DownloadVerificationError("network-error", "來源網路請求失敗");
      }
      if (!response || typeof response.status !== "number" || !response.headers) {
        cancelWithoutWaiting(response?.body);
        throw new Error(`${source.id} fetch 回應格式無效`);
      }
      if (!REDIRECT_STATUSES.has(response.status)) break;
      cancelWithoutWaiting(response.body);
      if (redirectCount >= MAX_REDIRECTS) {
        throw new Error(`${source.id} redirect 超過 ${MAX_REDIRECTS} 次`);
      }
      const location = response.headers.get("location");
      if (!location) throw new Error(`${source.id} redirect 缺少 Location`);
      currentUrl = validateRedirectUrl(location, currentUrl, source, downloadPath);
      redirectCount += 1;
    }

    if (response.status < 200 || response.status >= 300) {
      cancelWithoutWaiting(response.body);
      throw new DownloadVerificationError("http-status", `HTTP ${response.status}`);
    }
    const contentType = response.headers.get("content-type") || "";
    if (/html/i.test(contentType)) {
      cancelWithoutWaiting(response.body);
      throw new Error(`${source.id} 回應為 HTML，不是 GPX 格式`);
    }
    const payload = await readRestrictedBody(response, source.id, controller.signal);
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
  } finally {
    clearTimeout(timer);
  }
}

export async function verifyAllSources(sources, options = {}) {
  const records = [];
  const failures = [];
  for (const source of sources) {
    try {
      records.push(await verifyDownloadSource(source, options));
    } catch (error) {
      failures.push(safeFailure(source.id, error));
    }
  }
  return { records, failures };
}

const DOWNLOAD_RECORD_FIELDS = Object.freeze([
  "id",
  "name",
  "shapeLabel",
  "regionId",
  "regionName",
  "activityType",
  "activityLabel",
  "status",
  "distanceKm",
  "summary",
  "sourcePlatform",
  "sourceUrl",
  "externalDownloadUrl",
  "verifiedAt",
  "sourceFormat",
  "sourceSha256",
  "segmentCount",
  "totalPoints",
  "bounds"
]);
const DOWNLOAD_RECORD_FIELD_SET = new Set(DOWNLOAD_RECORD_FIELDS);
const BOUNDS_FIELDS = Object.freeze(["minLat", "maxLat", "minLng", "maxLng"]);
const DOWNLOAD_SOURCE_BY_ID = Object.freeze(ROUTE_ART_DOWNLOAD_SOURCES.reduce((sources, source) => {
  sources[source.id] = source;
  return sources;
}, Object.create(null)));
const SOURCE_METADATA_FIELDS = Object.freeze([
  "name",
  "shapeLabel",
  "regionId",
  "regionName",
  "activityType",
  "activityLabel",
  "distanceKm",
  "sourcePlatform"
]);

function assertPlainText(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} 必須是非空白文字`);
  if (value.includes("<") || value.includes(">")) throw new Error(`${label} 不接受 XML 或 HTML`);
}

function projectDownloadRecord(record) {
  if (!record || typeof record !== "object" || Array.isArray(record)) {
    throw new Error("下載摘要 record 必須是物件");
  }
  const keys = Object.keys(record);
  if (keys.length !== DOWNLOAD_RECORD_FIELDS.length
    || keys.some(key => !DOWNLOAD_RECORD_FIELD_SET.has(key))) {
    throw new Error("下載摘要 record 欄位不完整或包含未允許欄位");
  }
  for (const field of ["id", "name", "shapeLabel", "regionName", "activityLabel", "summary"]) {
    assertPlainText(record[field], `下載摘要 ${field}`);
  }
  const source = DOWNLOAD_SOURCE_BY_ID[record.id];
  if (!source) throw new Error("下載摘要 ID 不在候選 allowlist");
  for (const field of SOURCE_METADATA_FIELDS) {
    if (record[field] !== source[field]) throw new Error(`下載摘要 ${field} 與候選 metadata 不一致`);
  }
  const expectedSummary = `${source.name} 是 ShapeMiles 公開的台北 GPS Art 跑步路線。`;
  if (record.summary !== expectedSummary) throw new Error("下載摘要 summary 與候選 metadata 不一致");
  if (record.sourceUrl !== source.sourceUrl) throw new Error("下載摘要來源頁不在候選 allowlist");
  if (record.externalDownloadUrl !== source.downloadUrl) {
    throw new Error("下載摘要外部下載不在候選 allowlist");
  }
  if (record.regionId !== "taipei" || record.regionName !== "台北市"
    || record.activityType !== "running" || record.activityLabel !== "跑步"
    || record.status !== "source-download" || record.sourcePlatform !== "ShapeMiles"
    || record.sourceFormat !== "gpx") {
    throw new Error("下載摘要固定 record shape 無效");
  }
  if (!Number.isFinite(record.distanceKm) || record.distanceKm <= 0
    || !Number.isInteger(record.segmentCount) || record.segmentCount < 1
    || !Number.isInteger(record.totalPoints) || record.totalPoints < 2) {
    throw new Error("下載摘要數值欄位無效");
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.verifiedAt)
    || !/^[a-f0-9]{64}$/.test(record.sourceSha256)) {
    throw new Error("下載摘要日期或 SHA-256 格式無效");
  }
  if (!record.bounds || typeof record.bounds !== "object" || Array.isArray(record.bounds)
    || Object.keys(record.bounds).length !== BOUNDS_FIELDS.length
    || BOUNDS_FIELDS.some(field => !Object.hasOwn(record.bounds, field)
      || !Number.isFinite(record.bounds[field]))) {
    throw new Error("下載摘要 bounds 欄位不完整");
  }
  const { minLat, maxLat, minLng, maxLng } = record.bounds;
  if (minLat > maxLat || minLng > maxLng
    || minLat < LIMITS.taiwan.minLat || maxLat > LIMITS.taiwan.maxLat
    || minLng < LIMITS.taiwan.minLng || maxLng > LIMITS.taiwan.maxLng) {
    throw new Error("下載摘要 bounds 範圍無效");
  }
  return {
    id: record.id,
    name: record.name,
    shapeLabel: record.shapeLabel,
    regionId: record.regionId,
    regionName: record.regionName,
    activityType: record.activityType,
    activityLabel: record.activityLabel,
    status: record.status,
    distanceKm: record.distanceKm,
    summary: record.summary,
    sourcePlatform: record.sourcePlatform,
    sourceUrl: source.sourceUrl,
    externalDownloadUrl: source.downloadUrl,
    verifiedAt: record.verifiedAt,
    sourceFormat: record.sourceFormat,
    sourceSha256: record.sourceSha256,
    segmentCount: record.segmentCount,
    totalPoints: record.totalPoints,
    bounds: { minLat, maxLat, minLng, maxLng }
  };
}

export function serializeDownloads(records) {
  if (!Array.isArray(records)) throw new TypeError("下載摘要 records 必須是陣列");
  const projected = records.map(projectDownloadRecord);
  const ids = new Set();
  for (const record of projected) {
    if (ids.has(record.id)) throw new Error(`下載摘要 ID 重複：${record.id}`);
    ids.add(record.id);
  }
  const sortedRecords = projected.sort((left, right) => left.id.localeCompare(right.id));
  const entries = sortedRecords.map(record => {
    const serialized = JSON.stringify(record, null, 2).replace(/^/gm, "    ").trimStart();
    return `    ${JSON.stringify(record.id)}: ${serialized}`;
  }).join(",\n");

  return `"use strict";\n\n(function (root, factory) {\n  const api = factory();\n\n  if (typeof module === "object" && module.exports) {\n    module.exports = api;\n  }\n\n  if (root) {\n    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { RouteArtDownloads: api });\n  }\n})(typeof window !== "undefined" ? window : globalThis, function () {\n  function deepFreeze(value) {\n    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;\n    Object.freeze(value);\n    Object.values(value).forEach(deepFreeze);\n    return value;\n  }\n\n  return deepFreeze({\n${entries}\n  });\n});\n`;
}

export async function verifyAndWriteDownloads(options = {}) {
  const sources = options.sources ?? ROUTE_ART_DOWNLOAD_SOURCES;
  const outputPath = resolve(options.outputPath ?? OUTPUT_PATH);
  const fsImpl = options.fsImpl ?? DEFAULT_FS;
  for (const method of ["mkdir", "writeFile", "rename", "rm"]) {
    if (typeof fsImpl[method] !== "function") throw new TypeError(`fsImpl.${method} 必須是函式`);
  }
  const result = await verifyAllSources(sources, options);
  if (result.failures.length > 0) {
    const error = new Error(`來源驗證失敗；未改寫產物。${result.failures.map(failure => `${failure.id}: ${failure.reason}`).join("；")}`);
    error.failures = result.failures;
    throw error;
  }

  await fsImpl.mkdir(dirname(outputPath), { recursive: true });
  const temporaryPath = `${outputPath}.${process.pid}.${randomUUID()}.tmp`;
  try {
    await fsImpl.writeFile(temporaryPath, serializeDownloads(result.records), { encoding: "utf8", flag: "wx" });
    await fsImpl.rename(temporaryPath, outputPath);
  } catch (error) {
    try {
      await fsImpl.rm(temporaryPath, { force: true });
    } catch {
      // 保留原始寫入或重新命名失敗，讓呼叫端取得主要原因。
    }
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
      console.error("下載摘要驗證或寫入失敗。");
    }
    process.exitCode = 1;
  });
}
