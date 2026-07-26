import { createRequire } from "node:module";
import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  assertSafeIdentifier,
  parseBrouterFeature,
  resolveManifestSource
} from "./generate-tracks.mjs";

const require = createRequire(import.meta.url);
const defaultManifest = require("../js/data/track-manifest.js");
const { analyzeCoordinates } = require("../js/core/track-analysis.js");
const DEFAULT_PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const COMPARISON_TOLERANCE = 1e-6;

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

function validateTrack(routeId, track) {
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
    track.coordinates.map(point => ({ lat: point.lat, lng: point.lng, ele: point.ele }))
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
}

export function validateBundleSources(bundleSources, options = {}) {
  const manifest = options.manifest || defaultManifest;
  const requireComplete = options.requireComplete === true;
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
      validateTrack(routeId, track);
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
  const flags = new Set(argv);
  const mode = flags.has("--published") ? "published" : flags.has("--staging") ? "staging" : null;
  if (!mode || (flags.has("--published") && flags.has("--staging"))) {
    throw new Error("請指定 --staging 或 --published。");
  }
  const projectRoot = options.projectRoot || DEFAULT_PROJECT_ROOT;
  const manifest = options.manifest || defaultManifest;
  const sources = await readBundleSources(mode, projectRoot, manifest);
  return validateBundleSources(sources, {
    manifest,
    requireComplete: mode === "published"
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
