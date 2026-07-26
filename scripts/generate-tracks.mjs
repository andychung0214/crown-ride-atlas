import { createRequire } from "node:module";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const Geo = require("../js/core/geo.js");
const { analyzeCoordinates } = require("../js/core/track-analysis.js");
const Data = require("../js/data/routes.js");
const defaultManifest = require("../js/data/track-manifest.js");

const DEFAULT_RESAMPLE_INTERVAL_M = 100;
const MAX_ADJACENT_DISTANCE_KM = 5;
const REQUEST_INTERVAL_MS = 1500;
const MAX_RETRIES = 3;
const BROUTER_URL = "https://brouter.de/brouter";
const TAIWAN_BOUNDS = [
  { minimumLat: 21.8, maximumLat: 25.7, minimumLng: 120, maximumLng: 122.2 },
  { minimumLat: 23.1, maximumLat: 23.8, minimumLng: 119.2, maximumLng: 119.8 },
  { minimumLat: 24.3, maximumLat: 24.6, minimumLng: 118.1, maximumLng: 118.6 },
  { minimumLat: 25.8, maximumLat: 26.4, minimumLng: 119.8, maximumLng: 120.6 }
];
const TEMPORARY_STATUS_CODES = new Set([408, 425, 429, 500, 502, 503, 504]);
const DEFAULT_PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function lineStringFeature(payload) {
  if (payload && payload.type === "FeatureCollection") {
    return payload.features && payload.features[0];
  }
  return payload;
}

export function parseBrouterFeature(payload) {
  const feature = lineStringFeature(payload);
  if (!feature || feature.type !== "Feature" || !feature.geometry
    || feature.geometry.type !== "LineString") {
    throw new TypeError("BRouter 回應必須是 LineString。");
  }
  if (!Array.isArray(feature.geometry.coordinates) || feature.geometry.coordinates.length < 2) {
    throw new TypeError("BRouter LineString 至少需要兩個座標。");
  }

  const points = feature.geometry.coordinates.map(coordinate => {
    if (!Array.isArray(coordinate) || coordinate.length < 3
      || !coordinate.slice(0, 3).every(Number.isFinite)) {
      throw new TypeError("BRouter 座標缺少有效海拔。");
    }
    const [lng, lat, ele] = coordinate;
    const inTaiwan = TAIWAN_BOUNDS.some(bounds => (
      lat >= bounds.minimumLat
      && lat <= bounds.maximumLat
      && lng >= bounds.minimumLng
      && lng <= bounds.maximumLng
    ));
    if (!inTaiwan) throw new RangeError("軌跡超出台灣合理範圍。");
    return { lat, lng, ele };
  });

  for (let index = 1; index < points.length; index += 1) {
    if (Geo.haversineKm(points[index - 1], points[index]) > MAX_ADJACENT_DISTANCE_KM) {
      throw new RangeError("軌跡相鄰點距離過遠。");
    }
  }
  return points;
}

export function resampleTrack(points, intervalM = DEFAULT_RESAMPLE_INTERVAL_M) {
  if (!Array.isArray(points) || points.length < 2) return Array.isArray(points) ? points.slice() : [];
  const resampled = [Object.assign({}, points[0])];

  for (let index = 1; index < points.length; index += 1) {
    const start = points[index - 1];
    const end = points[index];
    const segmentM = Geo.haversineKm(start, end) * 1000;
    const segments = Math.max(1, Math.ceil(segmentM / intervalM));

    for (let step = 1; step <= segments; step += 1) {
      const ratio = step / segments;
      resampled.push({
        lat: start.lat + (end.lat - start.lat) * ratio,
        lng: start.lng + (end.lng - start.lng) * ratio,
        ele: start.ele + (end.ele - start.ele) * ratio
      });
    }
  }

  return resampled;
}

export function buildTrack(payload, options = {}) {
  const points = parseBrouterFeature(payload);
  const coordinates = resampleTrack(points, options.resampleIntervalM);
  return analyzeCoordinates(coordinates, options.analysis);
}

export function serializeBundle(bundleId, tracks) {
  return [
    "\"use strict\";",
    "",
    "(function (root) {",
    `  root.CrownRideAtlas.TrackRegistry.register(${JSON.stringify(bundleId)}, ${JSON.stringify(tracks, null, 2)});`,
    "})(typeof window !== \"undefined\" ? window : globalThis);",
    ""
  ].join("\n");
}

export function selectRoutes(selector, routes = Data.routes) {
  if (selector && selector.routeId) {
    const route = routes.find(candidate => candidate.id === selector.routeId);
    if (!route) throw new Error(`未知 route ID：${selector.routeId}`);
    return [route];
  }

  if (selector && Array.isArray(selector.regionIds)) {
    const knownRegions = new Set(routes.map(route => route.regionId));
    selector.regionIds.forEach(regionId => {
      if (!knownRegions.has(regionId)) throw new Error(`未知地區 ID：${regionId}`);
    });
    return routes.filter(route => selector.regionIds.includes(route.regionId));
  }

  if (selector && selector.all) return routes.slice();
  throw new Error("必須指定 --route、--regions 或 --all。");
}

function seedWaypoints(seed) {
  if (!seed || !Array.isArray(seed.waypoints) || seed.waypoints.length < 2) {
    throw new TypeError("人工 seed 至少需要兩個 waypoints。");
  }
  return seed.waypoints.map(waypoint => {
    const values = Array.isArray(waypoint)
      ? waypoint
      : [waypoint && waypoint.lng, waypoint && waypoint.lat];
    if (!values.slice(0, 2).every(Number.isFinite)) {
      throw new TypeError("人工 seed waypoint 格式無效。");
    }
    return values.slice(0, 2);
  });
}

function brouterUrl(seed, endpoint) {
  const lonlats = seedWaypoints(seed).map(point => point.join(",")).join("|");
  const parameters = new URLSearchParams({
    lonlats,
    profile: "fastbike",
    alternativeidx: "0",
    format: "geojson"
  });
  return `${endpoint}?${parameters}`;
}

function responseError(response, body) {
  const error = new Error(`BRouter 回應 ${response.status} ${response.statusText || ""}: ${body}`.trim());
  error.status = response.status;
  error.temporary = TEMPORARY_STATUS_CODES.has(response.status);
  return error;
}

export function createBrouterClient(options = {}) {
  const fetchImpl = options.fetchImpl || globalThis.fetch;
  const sleep = options.sleep || (delayMs => new Promise(resolve => setTimeout(resolve, delayMs)));
  const now = options.now || Date.now;
  const endpoint = options.endpoint || BROUTER_URL;
  let lastRequestStartedAt = null;
  let queue = Promise.resolve();

  async function throttle() {
    if (lastRequestStartedAt !== null) {
      const remainingMs = REQUEST_INTERVAL_MS - (now() - lastRequestStartedAt);
      if (remainingMs > 0) await sleep(remainingMs);
    }
    lastRequestStartedAt = now();
  }

  async function perform(seed) {
    let lastError;
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
      await throttle();
      try {
        const response = await fetchImpl(brouterUrl(seed, endpoint), {
          headers: {
            Accept: "application/geo+json, application/json",
            "User-Agent": "CrownRideAtlas-TrackGenerator/1.0"
          }
        });
        if (response.ok) return response.json();
        const error = responseError(response, await response.text());
        if (!error.temporary) throw error;
        lastError = error;
      } catch (error) {
        lastError = error;
        if (error && error.temporary === false) throw error;
      }
    }
    throw lastError;
  }

  function request(seed) {
    const result = queue.then(() => perform(seed));
    queue = result.catch(() => undefined);
    return result;
  }

  return { request };
}

async function atomicWrite(filePath, contents) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  const temporaryPath = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  try {
    await fs.writeFile(temporaryPath, contents, "utf8");
    await fs.rename(temporaryPath, filePath);
  } catch (error) {
    await fs.rm(temporaryPath, { force: true });
    throw error;
  }
}

export async function publishBundles(bundleSources, options = {}) {
  const publishedDirectory = options.publishedDirectory;
  if (!publishedDirectory) throw new TypeError("缺少正式 bundle 目錄。");
  if (typeof options.validateBatch !== "function") {
    throw new TypeError("正式發佈必須提供整批驗證器。");
  }

  await options.validateBatch(bundleSources);
  for (const [bundleId, source] of bundleSources) {
    await atomicWrite(path.join(publishedDirectory, `${bundleId}.js`), source);
  }
}

function parseArguments(argv) {
  const selector = {};
  let outputMode = null;

  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--route") {
      selector.routeId = argv[++index];
      if (!selector.routeId) throw new Error("--route 缺少 route ID。");
    } else if (argument === "--regions") {
      const value = argv[++index];
      if (!value) throw new Error("--regions 缺少地區 ID。");
      selector.regionIds = value.split(",").filter(Boolean);
    } else if (argument === "--all") {
      selector.all = true;
    } else if (argument === "--staging" || argument === "--publish") {
      if (outputMode) throw new Error("只能指定一種輸出模式。");
      outputMode = argument.slice(2);
    } else {
      throw new Error(`未知參數：${argument}`);
    }
  }

  const selectorCount = Number(Boolean(selector.routeId))
    + Number(Boolean(selector.regionIds))
    + Number(Boolean(selector.all));
  if (selectorCount !== 1) throw new Error("必須且只能指定 --route、--regions 或 --all。");
  if (!outputMode) throw new Error("必須指定 --staging 或 --publish。");
  return { selector, outputMode };
}

async function readJsonIfExists(filePath) {
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

async function readTextIfExists(filePath) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return null;
    throw error;
  }
}

function manifestForBundles(manifest, bundleIds) {
  return Object.fromEntries(
    Object.entries(manifest).filter(([, entry]) => bundleIds.has(entry.bundleId))
  );
}

export async function runCli(argv, options = {}) {
  const { selector, outputMode } = parseArguments(argv);
  const projectRoot = options.projectRoot || DEFAULT_PROJECT_ROOT;
  const routes = options.routes || Data.routes;
  const manifest = options.manifest || defaultManifest;
  const selectedRoutes = selectRoutes(selector, routes);
  const cacheDirectory = path.join(projectRoot, "tools", "route-data", "cache");
  const seedDirectory = path.join(projectRoot, "tools", "route-data", "seeds");
  const stagingDirectory = path.join(projectRoot, "tools", "route-data", ".staging");
  const publishedDirectory = path.join(projectRoot, "js", "data", "tracks");
  const client = createBrouterClient(options);
  const generatedByBundle = new Map();

  for (const route of selectedRoutes) {
    const routeId = route.trackRef || route.id;
    const manifestEntry = manifest[routeId];
    if (!manifestEntry) throw new Error(`manifest 缺少 route ID：${routeId}`);
    const cachePath = path.join(cacheDirectory, `${routeId}.geojson`);
    const cachedPayload = await readJsonIfExists(cachePath);
    let payload = cachedPayload;

    if (!payload) {
      const seedPath = path.join(seedDirectory, `${routeId}.json`);
      const seed = await readJsonIfExists(seedPath);
      if (!seed) throw new Error(`缺少人工 seed：${routeId}`);
      payload = await client.request(seed);
    }

    const track = buildTrack(payload);
    if (!cachedPayload) {
      await atomicWrite(cachePath, `${JSON.stringify(payload, null, 2)}\n`);
    }
    if (!generatedByBundle.has(manifestEntry.bundleId)) {
      generatedByBundle.set(manifestEntry.bundleId, {});
    }
    generatedByBundle.get(manifestEntry.bundleId)[routeId] = track;
  }

  const validator = await import("./validate-tracks.mjs");
  const bundleSources = new Map();
  for (const [bundleId, generatedTracks] of generatedByBundle) {
    const stagingPath = path.join(stagingDirectory, `${bundleId}.js`);
    const existingSource = await readTextIfExists(stagingPath);
    const existingTracks = existingSource
      ? validator.parseBundleSource(bundleId, existingSource)
      : {};
    bundleSources.set(bundleId, serializeBundle(bundleId, {
      ...existingTracks,
      ...generatedTracks
    }));
  }

  validator.validateBundleSources(bundleSources, {
    manifest,
    requireComplete: false
  });
  for (const [bundleId, source] of bundleSources) {
    await atomicWrite(path.join(stagingDirectory, `${bundleId}.js`), source);
  }

  if (outputMode === "publish") {
    const affectedBundleIds = new Set(bundleSources.keys());
    const affectedManifest = manifestForBundles(manifest, affectedBundleIds);
    const validateBatch = options.validateBatch || (sources => {
      validator.validateBundleSources(sources, {
        manifest: affectedManifest,
        requireComplete: true
      });
    });
    await publishBundles(bundleSources, {
      publishedDirectory,
      validateBatch
    });
  }

  return {
    bundleCount: bundleSources.size,
    routeCount: selectedRoutes.length,
    outputMode
  };
}

const isDirectExecution = process.argv[1]
  && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectExecution) {
  runCli(process.argv.slice(2))
    .then(result => {
      console.log(`軌跡產生完成：${result.bundleCount} 個 bundle、${result.routeCount} 條路線（${result.outputMode}）。`);
    })
    .catch(error => {
      console.error(`軌跡產生失敗：${error.message}`);
      process.exitCode = 1;
    });
}
