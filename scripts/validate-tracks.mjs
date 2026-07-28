import { createRequire } from "node:module";
import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  assertSafeIdentifier,
  parseBrouterFeature,
  resolveManifestSource,
  validateElevationAnalysis
} from "./generate-tracks.mjs";

const require = createRequire(import.meta.url);
const defaultManifest = require("../js/data/track-manifest.js");
const Data = require("../js/data/routes.js");
const Geo = require("../js/core/geo.js");
const { analyzeCoordinates } = require("../js/core/track-analysis.js");
const DEFAULT_PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COMPARISON_TOLERANCE = 1e-6;
const MAX_WAYPOINT_TRACK_DISTANCE_KM = 0.2;
const VALID_DIRECTIONS = new Set(["loop", "out-and-back", "point-to-point"]);
const VALID_WAYPOINT_ROLES = new Set(["start", "via", "finish"]);

function freshTrackRegistry() {
  const registryPath = require.resolve("../js/core/track-registry.js");
  delete require.cache[registryPath];
  return require(registryPath);
}

export function parseBundleSource(expectedBundleId, source) {
  assertSafeIdentifier(expectedBundleId, "bundle ID");
  const registrations = [];
  const registry = freshTrackRegistry();
  const context = {
    CrownRideAtlas: {
      TrackRegistry: {
        register(bundleId, tracks) {
          registry.register(bundleId, tracks);
          registrations.push({ bundleId, tracks });
        }
      }
    }
  };
  vm.runInNewContext(source, context, { filename: `${expectedBundleId}.js` });
  if (registrations.length !== 1) {
    throw new Error(`bundle ${expectedBundleId} 必須且只能登錄一次。`);
  }
  const registration = registrations[0];
  if (registration.bundleId !== expectedBundleId) {
    throw new Error(`bundle ID 不一致：預期 ${expectedBundleId}。`);
  }
  if (!registration.tracks || typeof registration.tracks !== "object"
    || Array.isArray(registration.tracks)) {
    throw new TypeError(`bundle ${expectedBundleId} 軌跡資料格式無效。`);
  }
  return registration.tracks;
}

function approximatelyEqual(actual, expected) {
  const tolerance = Math.max(
    COMPARISON_TOLERANCE,
    Math.abs(expected) * COMPARISON_TOLERANCE
  );
  return Number.isFinite(actual) && Math.abs(actual - expected) <= tolerance;
}

function isIsoTimestamp(value) {
  return typeof value === "string"
    && Number.isFinite(Date.parse(value))
    && new Date(value).toISOString() === value;
}

function validateReviewMetadata(routeId, track) {
  if (track.routeId !== routeId) throw new Error(`${routeId} Track routeId 不一致。`);
  if (!VALID_DIRECTIONS.has(track.direction)) throw new Error(`${routeId} 路線方向無效。`);
  const source = track.source;
  if (!source || source.router !== "BRouter" || source.profile !== "fastbike"
    || source.elevation !== "SRTM") {
    throw new Error(`${routeId} 來源必須如實標示 BRouter、fastbike 與 SRTM。`);
  }
  if (!isIsoTimestamp(source.generatedAt)) throw new Error(`${routeId} 資料產生時間無效。`);
  validateElevationAnalysis(source.elevationAnalysis, routeId);
  if (source.reviewStatus !== "approved" || !isIsoTimestamp(source.reviewedAt)
    || typeof source.reviewerNote !== "string" || !source.reviewerNote.trim()) {
    throw new Error(`${routeId} 人工審查資料不完整。`);
  }
  if (!Array.isArray(track.waypoints) || track.waypoints.length < 2) {
    throw new Error(`${routeId} 缺少人工地標。`);
  }
  const roles = [];
  track.waypoints.forEach((waypoint, index) => {
    if (!waypoint || typeof waypoint.name !== "string" || !waypoint.name.trim()
      || !Geo.isCoordinate(waypoint) || !VALID_WAYPOINT_ROLES.has(waypoint.role)) {
      throw new Error(`${routeId} 第 ${index + 1} 個人工地標無效。`);
    }
    roles.push(waypoint.role);
    const nearestDistanceKm = Math.min(...track.coordinates.map(point => (
      Geo.haversineKm(waypoint, point)
    )));
    if (nearestDistanceKm > MAX_WAYPOINT_TRACK_DISTANCE_KM) {
      throw new Error(`${routeId} 人工地標「${waypoint.name}」未貼近軌跡。`);
    }
  });
  if (roles[0] !== "start" || roles.at(-1) !== "finish"
    || roles.filter(role => role === "start").length !== 1
    || roles.filter(role => role === "finish").length !== 1) {
    throw new Error(`${routeId} 人工地標起終點角色無效。`);
  }
}

function validateTrack(routeId, track, options = {}) {
  if (!track || typeof track !== "object" || !Array.isArray(track.coordinates)) {
    throw new TypeError(`${routeId} 軌跡資料格式無效。`);
  }
  parseBrouterFeature({
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: track.coordinates.map(point => [point && point.lng, point && point.lat, point && point.ele])
    }
  });
  const summary = track.summary;
  const summaryFields = [
    "distanceKm",
    "elevationGainM",
    "elevationLossM",
    "minimumElevationM",
    "maximumElevationM",
    "maximumSustainedGradePct"
  ];
  if (!summary || !summaryFields.every(field => Number.isFinite(summary[field]))) {
    throw new TypeError(`${routeId} 分析摘要格式無效。`);
  }
  if (!Array.isArray(track.climbs)) {
    throw new TypeError(`${routeId} 爬坡資料格式無效。`);
  }
  const recomputed = analyzeCoordinates(
    track.coordinates.map(point => ({ lat: point.lat, lng: point.lng, ele: point.ele })),
    validateElevationAnalysis(track.source && track.source.elevationAnalysis, routeId) || undefined
  );
  summaryFields.forEach(field => {
    if (!approximatelyEqual(summary[field], recomputed.summary[field])) {
      throw new Error(`${routeId} 摘要欄位不一致：${field}`);
    }
  });
  if (track.climbs.length !== recomputed.climbs.length) {
    throw new Error(`${routeId} 爬坡數量不一致。`);
  }
  const climbFields = [
    "startDistanceKm",
    "endDistanceKm",
    "distanceKm",
    "gainM",
    "averageGradePct",
    "maximumGradePct"
  ];
  track.climbs.forEach((climb, index) => {
    if (!climb || !Number.isInteger(climb.startIndex) || !Number.isInteger(climb.endIndex)
      || climb.startIndex < 0 || climb.endIndex <= climb.startIndex
      || climb.endIndex >= track.coordinates.length) {
      throw new Error(`${routeId} 爬坡索引超出有效範圍。`);
    }
    if (!climbFields.every(field => Number.isFinite(climb[field]))
      || climb.startDistanceKm < 0
      || climb.endDistanceKm < climb.startDistanceKm
      || climb.endDistanceKm > summary.distanceKm + COMPARISON_TOLERANCE
      || climb.distanceKm < 0
      || climb.gainM < 0
      || climb.maximumGradePct < 0) {
      throw new Error(`${routeId} 爬坡欄位超出有效範圍。`);
    }
    const expected = recomputed.climbs[index];
    if (climb.startIndex !== expected.startIndex || climb.endIndex !== expected.endIndex
      || !climbFields.every(field => approximatelyEqual(climb[field], expected[field]))) {
      throw new Error(`${routeId} 爬坡欄位不一致。`);
    }
  });
  if (options.requireReviewMetadata) validateReviewMetadata(routeId, track);
}

export function validateBundleSources(bundleSources, options = {}) {
  const manifest = options.manifest || defaultManifest;
  const requireComplete = options.requireComplete === true;
  const requireReviewMetadata = options.requireReviewMetadata === true;
  const expectedRouteIds = new Set(Object.keys(manifest));
  const seenRouteIds = new Set();

  for (const [bundleId, source] of bundleSources) {
    const tracks = parseBundleSource(bundleId, source);
    for (const [routeId, track] of Object.entries(tracks)) {
      const manifestEntry = manifest[routeId];
      if (!manifestEntry) throw new Error(`未知 route ID：${routeId}`);
      if (manifestEntry.bundleId !== bundleId) {
        throw new Error(`${routeId} 不屬於 bundle ${bundleId}。`);
      }
      if (seenRouteIds.has(routeId)) throw new Error(`route ID 重複：${routeId}`);
      validateTrack(routeId, track, { requireReviewMetadata });
      seenRouteIds.add(routeId);
    }
  }

  if (seenRouteIds.size === 0) throw new Error("缺少可驗證的軌跡 bundle。");
  if (requireComplete) {
    const missing = [...expectedRouteIds].filter(routeId => !seenRouteIds.has(routeId));
    if (missing.length) throw new Error(`缺少 route ID：${missing.join(", ")}`);
  }
  return { bundleCount: bundleSources.size, routeCount: seenRouteIds.size };
}

async function readBundleSources(mode, projectRoot, manifest) {
  const sources = new Map();
  const bundlePaths = new Map();
  for (const entry of Object.values(manifest)) {
    assertSafeIdentifier(entry.bundleId, "bundle ID");
    if (!bundlePaths.has(entry.bundleId)) {
      bundlePaths.set(
        entry.bundleId,
        mode === "published"
          ? resolveManifestSource(projectRoot, entry.src)
          : path.join(projectRoot, "tools", "route-data", ".staging", `${entry.bundleId}.js`)
      );
    }
  }

  for (const [bundleId, filePath] of bundlePaths) {
    try {
      sources.set(bundleId, await fs.readFile(filePath, "utf8"));
    } catch (error) {
      if (error.code !== "ENOENT" || mode === "published") throw error;
    }
  }
  return sources;
}

export async function runCli(argv, options = {}) {
  let mode = null;
  let regionIds = null;
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--published" || argument === "--staging") {
      if (mode) throw new Error("請只指定一種資料模式。");
      mode = argument.slice(2);
    } else if (argument === "--regions") {
      const value = argv[++index];
      if (!value) throw new Error("--regions 缺少地區 ID。");
      regionIds = value.split(",").filter(Boolean);
    } else {
      throw new Error(`未知參數：${argument}`);
    }
  }
  if (!mode) {
    throw new Error("請指定 --staging 或 --published。");
  }
  const projectRoot = options.projectRoot || DEFAULT_PROJECT_ROOT;
  const routes = options.routes || Data.routes;
  const originalManifest = options.manifest || defaultManifest;
  let manifest = originalManifest;
  if (regionIds) {
    const knownRegionIds = new Set(routes.map(route => route.regionId));
    regionIds.forEach(regionId => {
      if (!knownRegionIds.has(regionId)) throw new Error(`未知地區 ID：${regionId}`);
    });
    const selectedRouteIds = new Set(
      routes.filter(route => regionIds.includes(route.regionId)).map(route => route.id)
    );
    manifest = Object.fromEntries(
      Object.entries(originalManifest).filter(([routeId, entry]) =>
        selectedRouteIds.has(routeId) && regionIds.includes(entry.bundleId)
      )
    );
    if (!Object.keys(manifest).length) throw new Error("指定地區沒有可驗證的路線。");
  }
  const sources = await readBundleSources(mode, projectRoot, manifest);
  return validateBundleSources(sources, {
    manifest,
    requireComplete: mode === "published" || Boolean(regionIds),
    requireReviewMetadata: true
  });
}

const isDirectExecution = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectExecution) {
  runCli(process.argv.slice(2))
    .then(result => {
      console.log(`軌跡驗證通過：${result.bundleCount} 個 bundle、${result.routeCount} 條路線。`);
    })
    .catch(error => {
      console.error(`軌跡驗證失敗：${error.message}`);
      process.exitCode = 1;
    });
}
