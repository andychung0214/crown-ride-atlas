import { createRequire } from "node:module";
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const Geo = require("../js/core/geo.js");
const { analyzeCoordinates } = require("../js/core/track-analysis.js");
const Data = require("../js/data/routes.js");
const defaultManifest = require("../js/data/track-manifest.js");

const DEFAULT_RESAMPLE_INTERVAL_M = 50;
const MIN_RESAMPLE_INTERVAL_M = 30;
const MAX_RESAMPLE_INTERVAL_M = 80;
const GRADE_CHANGE_ANCHOR_PCT = 3;
const ANCHOR_WINDOW_M = 30;
const MIN_ANCHOR_SPACING_M = 35;
const SHARP_CORNER_DEGREES = 45;
const GEOMETRY_SMOOTH_WINDOW_M = 15;
const GEOMETRY_TOLERANCE_M = 0.25;
const MAX_RESAMPLED_DISTANCE_ERROR_RATIO = 0.005;
export const MAX_RESAMPLED_GEOMETRY_DEVIATION_M = 5;
const RAW_GEOMETRY_TOLERANCE_RATIO = 0.5;
const MAX_ADJACENT_DISTANCE_KM = 5;
const REQUEST_INTERVAL_MS = 1500;
const MAX_RETRIES = 3;
const BROUTER_URL = "https://brouter.de/brouter";
const BROUTER_PROFILE = "fastbike";
const BROUTER_FORMAT = "geojson";
const BROUTER_ELEVATION = "SRTM";
const TRACK_SAMPLING_NOTE = "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。";
const ROUTE_DIRECTIONS = new Set(["loop", "out-and-back", "point-to-point"]);
const WAYPOINT_ROLES = new Set(["start", "via", "finish"]);
const TAIWAN_BOUNDS = [
  { minimumLat: 21.8, maximumLat: 25.7, minimumLng: 120, maximumLng: 122.2 },
  { minimumLat: 23.1, maximumLat: 23.8, minimumLng: 119.2, maximumLng: 119.8 },
  { minimumLat: 24.3, maximumLat: 24.6, minimumLng: 118.1, maximumLng: 118.6 },
  { minimumLat: 25.8, maximumLat: 26.4, minimumLng: 119.8, maximumLng: 120.6 }
];
const TEMPORARY_STATUS_CODES = new Set([408, 425, 429, 500, 502, 503, 504]);
const TEMPORARY_NETWORK_CODES = new Set([
  "EAI_AGAIN",
  "ECONNREFUSED",
  "ECONNRESET",
  "ENETDOWN",
  "ENETUNREACH",
  "ETIMEDOUT",
  "UND_ERR_CONNECT_TIMEOUT",
  "UND_ERR_SOCKET"
]);
const DEFAULT_PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SAFE_IDENTIFIER = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function assertSafeIdentifier(value, label) {
  if (typeof value !== "string" || !SAFE_IDENTIFIER.test(value)) {
    throw new Error(`不安全的 ${label}：${String(value)}`);
  }
  return value;
}

function isContainedPath(rootDirectory, targetPath) {
  const relative = path.relative(path.resolve(rootDirectory), path.resolve(targetPath));
  return relative !== ""
    && relative !== ".."
    && !relative.startsWith(`..${path.sep}`)
    && !path.isAbsolute(relative);
}

export function resolveManifestSource(projectRoot, source) {
  if (typeof source !== "string" || path.isAbsolute(source) || source.includes("\\")
    || !/^[a-z0-9][a-z0-9./-]*\.js$/.test(source)) {
    throw new Error(`不安全的 manifest src：${String(source)}`);
  }
  const segments = source.split("/");
  if (segments.some(segment => !segment || segment === "." || segment === "..")) {
    throw new Error(`不安全的 manifest src：${source}`);
  }
  const tracksRoot = path.resolve(projectRoot, "js", "data", "tracks");
  const resolvedSource = path.resolve(projectRoot, ...segments);
  if (!isContainedPath(tracksRoot, resolvedSource)) {
    throw new Error(`不安全的 manifest src：${source}`);
  }
  return resolvedSource;
}

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

export function resampleTrack(points, intervalM = DEFAULT_RESAMPLE_INTERVAL_M, diagnostics = null) {
  if (!Array.isArray(points) || points.length < 2) return Array.isArray(points) ? points.slice() : [];
  const preferredIntervalM = Number.isFinite(intervalM)
    ? Math.max(MIN_RESAMPLE_INTERVAL_M, Math.min(MAX_RESAMPLE_INTERVAL_M, intervalM))
    : DEFAULT_RESAMPLE_INTERVAL_M;
  const cumulativeM = [0];
  for (let index = 1; index < points.length; index += 1) {
    cumulativeM.push(
      cumulativeM[index - 1] + Geo.haversineKm(points[index - 1], points[index]) * 1000
    );
  }
  const totalDistanceM = cumulativeM.at(-1);

  function interpolate(targetM) {
    let lowerIndex = 0;
    let upperIndex = cumulativeM.length - 1;
    while (lowerIndex + 1 < upperIndex) {
      const middleIndex = Math.floor((lowerIndex + upperIndex) / 2);
      if (cumulativeM[middleIndex] < targetM) {
        lowerIndex = middleIndex;
      } else {
        upperIndex = middleIndex;
      }
    }
    const spanM = cumulativeM[upperIndex] - cumulativeM[lowerIndex];
    const ratio = spanM > 0 ? (targetM - cumulativeM[lowerIndex]) / spanM : 0;
    return {
      lat: points[lowerIndex].lat + (points[upperIndex].lat - points[lowerIndex].lat) * ratio,
      lng: points[lowerIndex].lng + (points[upperIndex].lng - points[lowerIndex].lng) * ratio,
      ele: points[lowerIndex].ele + (points[upperIndex].ele - points[lowerIndex].ele) * ratio
    };
  }

  function turnDegrees(previous, current, next) {
    const latitudeScale = Math.cos(current.lat * Math.PI / 180);
    const incoming = {
      x: (current.lng - previous.lng) * latitudeScale,
      y: current.lat - previous.lat
    };
    const outgoing = {
      x: (next.lng - current.lng) * latitudeScale,
      y: next.lat - current.lat
    };
    const incomingLength = Math.hypot(incoming.x, incoming.y);
    const outgoingLength = Math.hypot(outgoing.x, outgoing.y);
    if (incomingLength === 0 || outgoingLength === 0) return 0;
    const cosine = Math.max(-1, Math.min(1,
      (incoming.x * outgoing.x + incoming.y * outgoing.y)
      / (incomingLength * outgoingLength)
    ));
    return Math.acos(cosine) * 180 / Math.PI;
  }

  function pointToSegmentDistanceM(point, start, end) {
    const latitudeM = 111_320;
    const longitudeM = latitudeM * Math.cos(point.lat * Math.PI / 180);
    const startX = (start.lng - point.lng) * longitudeM;
    const startY = (start.lat - point.lat) * latitudeM;
    const endX = (end.lng - point.lng) * longitudeM;
    const endY = (end.lat - point.lat) * latitudeM;
    const segmentX = endX - startX;
    const segmentY = endY - startY;
    const segmentLengthSquared = segmentX * segmentX + segmentY * segmentY;
    const projection = segmentLengthSquared > 0
      ? Math.max(0, Math.min(1, -(startX * segmentX + startY * segmentY) / segmentLengthSquared))
      : 0;
    return Math.hypot(
      startX + segmentX * projection,
      startY + segmentY * projection
    );
  }

  const sharpCandidates = [];
  for (let index = 1; index < points.length - 1; index += 1) {
    const turn = turnDegrees(points[index - 1], points[index], points[index + 1]);
    if (turn >= SHARP_CORNER_DEGREES) {
      sharpCandidates.push({ index, distanceM: cumulativeM[index], turn });
    }
  }
  const selectedSharpAnchors = [];
  for (const candidate of sharpCandidates) {
    if (candidate.distanceM < MIN_ANCHOR_SPACING_M
      || totalDistanceM - candidate.distanceM < MIN_ANCHOR_SPACING_M) {
      continue;
    }
    const previous = selectedSharpAnchors.at(-1);
    if (!previous || candidate.distanceM - previous.distanceM >= MIN_ANCHOR_SPACING_M) {
      selectedSharpAnchors.push(candidate);
    } else if (candidate.turn > previous.turn) {
      selectedSharpAnchors[selectedSharpAnchors.length - 1] = candidate;
    }
  }
  const sharpAnchors = [0, ...selectedSharpAnchors.map(anchor => anchor.index)];
  sharpAnchors.push(points.length - 1);

  const smoothedGeometry = points.map(point => ({ lat: point.lat, lng: point.lng }));
  for (let section = 1; section < sharpAnchors.length; section += 1) {
    const startIndex = sharpAnchors[section - 1];
    const endIndex = sharpAnchors[section];
    for (let index = startIndex + 1; index < endIndex; index += 1) {
      let latitude = 0;
      let longitude = 0;
      let sampleCount = 0;
      for (let sampleIndex = index;
        sampleIndex >= startIndex
          && cumulativeM[index] - cumulativeM[sampleIndex] <= GEOMETRY_SMOOTH_WINDOW_M;
        sampleIndex -= 1) {
        latitude += points[sampleIndex].lat;
        longitude += points[sampleIndex].lng;
        sampleCount += 1;
      }
      for (let sampleIndex = index + 1;
        sampleIndex <= endIndex
          && cumulativeM[sampleIndex] - cumulativeM[index] <= GEOMETRY_SMOOTH_WINDOW_M;
        sampleIndex += 1) {
        latitude += points[sampleIndex].lat;
        longitude += points[sampleIndex].lng;
        sampleCount += 1;
      }
      smoothedGeometry[index] = {
        lat: latitude / sampleCount,
        lng: longitude / sampleCount
      };
    }
  }

  function findRdpAnchorSet(geometry, toleranceM) {
    const anchors = new Set(sharpAnchors);
    const sections = sharpAnchors.slice(1).map((endIndex, index) => ({
      startIndex: sharpAnchors[index],
      endIndex
    }));
    while (sections.length) {
      const { startIndex, endIndex } = sections.pop();
      let farthestIndex = -1;
      let maximumDeviationM = 0;
      for (let index = startIndex + 1; index < endIndex; index += 1) {
        const deviationM = pointToSegmentDistanceM(
          geometry[index],
          geometry[startIndex],
          geometry[endIndex]
        );
        if (deviationM > maximumDeviationM) {
          maximumDeviationM = deviationM;
          farthestIndex = index;
        }
      }
      if (farthestIndex >= 0 && maximumDeviationM > toleranceM) {
        anchors.add(farthestIndex);
        sections.push(
          { startIndex, endIndex: farthestIndex },
          { startIndex: farthestIndex, endIndex }
        );
      }
    }
    return anchors;
  }
  const rdpAnchorSet = findRdpAnchorSet(smoothedGeometry, GEOMETRY_TOLERANCE_M);
  const rawDeviationAnchorSet = findRdpAnchorSet(
    points,
    MAX_RESAMPLED_GEOMETRY_DEVIATION_M * RAW_GEOMETRY_TOLERANCE_RATIO
  );
  const geometryAnchorSet = new Set(sharpAnchors);
  for (const index of [...rdpAnchorSet].sort((left, right) => left - right)) {
    const distanceM = cumulativeM[index];
    if ([...geometryAnchorSet].every(anchorIndex =>
      Math.abs(cumulativeM[anchorIndex] - distanceM) >= MIN_ANCHOR_SPACING_M
    )) {
      geometryAnchorSet.add(index);
    }
  }

  function gradeChangePct(index) {
    const sampleWindowM = Math.min(
      ANCHOR_WINDOW_M,
      cumulativeM[index],
      totalDistanceM - cumulativeM[index]
    );
    if (sampleWindowM < MIN_RESAMPLE_INTERVAL_M) return 0;
    const previous = interpolate(cumulativeM[index] - sampleWindowM);
    const next = interpolate(cumulativeM[index] + sampleWindowM);
    const incomingGrade = (points[index].ele - previous.ele) / sampleWindowM * 100;
    const outgoingGrade = (next.ele - points[index].ele) / sampleWindowM * 100;
    return Math.abs(outgoingGrade - incomingGrade);
  }

  const gradeAnchorCandidates = [];
  for (let index = 1; index < points.length - 1; index += 1) {
    const gradeChange = gradeChangePct(index);
    if (gradeChange >= GRADE_CHANGE_ANCHOR_PCT) {
      gradeAnchorCandidates.push({
        index,
        distanceM: cumulativeM[index],
        score: gradeChange
      });
    }
  }
  const geometryAnchorDistances = [...geometryAnchorSet].map(index => cumulativeM[index]);
  const selectedGradeAnchors = [];
  for (const candidate of gradeAnchorCandidates) {
    if (candidate.distanceM < MIN_ANCHOR_SPACING_M
      || totalDistanceM - candidate.distanceM < MIN_ANCHOR_SPACING_M
      || geometryAnchorDistances.some(distanceM =>
        Math.abs(distanceM - candidate.distanceM) < MIN_ANCHOR_SPACING_M
      )) {
      continue;
    }
    const previous = selectedGradeAnchors.at(-1);
    if (!previous
      || candidate.distanceM - previous.distanceM >= MIN_ANCHOR_SPACING_M) {
      selectedGradeAnchors.push(candidate);
    } else if (candidate.score > previous.score) {
      selectedGradeAnchors[selectedGradeAnchors.length - 1] = candidate;
    }
  }
  const baseAnchorIndices = [...new Set([
    ...geometryAnchorSet,
    ...selectedGradeAnchors.map(anchor => anchor.index)
  ])].sort((left, right) => left - right);

  function buildResampled(anchorIndices, necessaryAnchorSet = null, report = null) {
    const resampled = [Object.assign({}, points[0])];
    const sourceDistancesM = [0];
    const sourceAnchorIndices = [0];
    for (let anchor = 1; anchor < anchorIndices.length; anchor += 1) {
      const startIndex = anchorIndices[anchor - 1];
      const endIndex = anchorIndices[anchor];
      const sectionDistanceM = cumulativeM[endIndex] - cumulativeM[startIndex];
      let sectionCount = Math.max(1, Math.round(sectionDistanceM / preferredIntervalM));
      while (sectionDistanceM / sectionCount > MAX_RESAMPLE_INTERVAL_M) sectionCount += 1;
      while (sectionCount > 1 && sectionDistanceM / sectionCount < MIN_RESAMPLE_INTERVAL_M) {
        sectionCount -= 1;
      }

      for (let step = 1; step < sectionCount; step += 1) {
        const sourceDistanceM = cumulativeM[startIndex] + sectionDistanceM * step / sectionCount;
        resampled.push(interpolate(
          sourceDistanceM
        ));
        sourceDistancesM.push(sourceDistanceM);
        sourceAnchorIndices.push(null);
      }
      resampled.push(Object.assign({}, points[endIndex]));
      sourceDistancesM.push(cumulativeM[endIndex]);
      sourceAnchorIndices.push(endIndex);
    }
    if (report && typeof report === "object") {
      const adjacentDistancesM = resampled.slice(1).map((point, index) => (
        Geo.haversineKm(resampled[index], point) * 1000
      ));
      let essentialShortSegmentCount = 0;
      let nonEssentialShortSegmentCount = 0;
      adjacentDistancesM.forEach((distanceM, index) => {
        if (distanceM >= MIN_RESAMPLE_INTERVAL_M) return;
        const startAnchorIndex = sourceAnchorIndices[index];
        const endAnchorIndex = sourceAnchorIndices[index + 1];
        if ((startAnchorIndex !== null && necessaryAnchorSet && necessaryAnchorSet.has(startAnchorIndex))
          || (endAnchorIndex !== null && necessaryAnchorSet && necessaryAnchorSet.has(endAnchorIndex))) {
          essentialShortSegmentCount += 1;
        } else {
          nonEssentialShortSegmentCount += 1;
        }
      });
      let maximumGeometryDeviationM = 0;
      let segmentIndex = 0;
      for (let index = 0; index < points.length; index += 1) {
        while (segmentIndex < sourceDistancesM.length - 2
          && sourceDistancesM[segmentIndex + 1] < cumulativeM[index]) {
          segmentIndex += 1;
        }
        maximumGeometryDeviationM = Math.max(
          maximumGeometryDeviationM,
          pointToSegmentDistanceM(
            points[index],
            resampled[segmentIndex],
            resampled[segmentIndex + 1]
          )
        );
      }
      Object.assign(report, {
        distanceErrorRatio: distanceErrorRatio(resampled),
        maximumGeometryDeviationM,
        maximumAdjacentM: adjacentDistancesM.length ? Math.max(...adjacentDistancesM) : 0,
        essentialShortSegmentCount,
        nonEssentialShortSegmentCount,
        essentialShortSegmentRatio: adjacentDistancesM.length
          ? essentialShortSegmentCount / adjacentDistancesM.length
          : 0,
        nonEssentialShortSegmentRatio: adjacentDistancesM.length
          ? nonEssentialShortSegmentCount / adjacentDistancesM.length
          : 0
      });
    }
    return resampled;
  }

  function distanceErrorRatio(samples) {
    const sampledDistanceM = samples.slice(1).reduce((total, point, index) => (
      total + Geo.haversineKm(samples[index], point) * 1000
    ), 0);
    return totalDistanceM > 0 ? Math.abs(sampledDistanceM - totalDistanceM) / totalDistanceM : 0;
  }

  const baseAnchorSet = new Set(baseAnchorIndices);
  const extraCandidates = [...new Set([...rdpAnchorSet, ...rawDeviationAnchorSet])]
    .filter(index => !baseAnchorSet.has(index))
    .map(index => {
      let upper = 1;
      while (upper < baseAnchorIndices.length && baseAnchorIndices[upper] < index) upper += 1;
      const startIndex = baseAnchorIndices[upper - 1];
      const endIndex = baseAnchorIndices[upper];
      const directKm = Geo.haversineKm(points[startIndex], points[endIndex]);
      const splitKm = Geo.haversineKm(points[startIndex], points[index])
        + Geo.haversineKm(points[index], points[endIndex]);
      return {
        index,
        benefitKm: splitKm - directKm,
        deviationM: pointToSegmentDistanceM(
          points[index],
          points[startIndex],
          points[endIndex]
        )
      };
    });
  const benefitRank = new Map(
    extraCandidates
      .slice()
      .sort((left, right) => right.benefitKm - left.benefitKm)
      .map((candidate, rank) => [candidate.index, rank])
  );
  const deviationRank = new Map(
    extraCandidates
      .slice()
      .sort((left, right) => right.deviationM - left.deviationM)
      .map((candidate, rank) => [candidate.index, rank])
  );
  extraCandidates.sort((left, right) => {
    const leftBestRank = Math.min(
      benefitRank.get(left.index),
      deviationRank.get(left.index)
    );
    const rightBestRank = Math.min(
      benefitRank.get(right.index),
      deviationRank.get(right.index)
    );
    if (leftBestRank !== rightBestRank) return leftBestRank - rightBestRank;
    const leftRankSum = benefitRank.get(left.index) + deviationRank.get(left.index);
    const rightRankSum = benefitRank.get(right.index) + deviationRank.get(right.index);
    if (leftRankSum !== rightRankSum) return leftRankSum - rightRankSum;
    return left.index - right.index;
  });

  function anchorsWithExtraCount(extraCount) {
    return [...new Set([
      ...baseAnchorIndices,
      ...extraCandidates.slice(0, extraCount).map(candidate => candidate.index)
    ])].sort((left, right) => left - right);
  }

  let lowerCount = 0;
  let upperCount = extraCandidates.length;
  function meetsResamplingTargets(extraCount) {
    const selectedCandidates = extraCandidates.slice(0, extraCount);
    const trialDiagnostics = {};
    buildResampled(
      anchorsWithExtraCount(extraCount),
      new Set(selectedCandidates.map(candidate => candidate.index)),
      trialDiagnostics
    );
    return trialDiagnostics.distanceErrorRatio <= MAX_RESAMPLED_DISTANCE_ERROR_RATIO
      && trialDiagnostics.maximumGeometryDeviationM
        <= MAX_RESAMPLED_GEOMETRY_DEVIATION_M;
  }

  if (!meetsResamplingTargets(0)) {
    while (lowerCount < upperCount) {
      const middleCount = Math.floor((lowerCount + upperCount) / 2);
      if (meetsResamplingTargets(middleCount)) {
        upperCount = middleCount;
      } else {
        lowerCount = middleCount + 1;
      }
    }
  }
  if (!meetsResamplingTargets(lowerCount)) {
    let fallbackCount = -1;
    for (let candidateCount = 0;
      candidateCount <= extraCandidates.length;
      candidateCount += 1) {
      if (meetsResamplingTargets(candidateCount)) {
        fallbackCount = candidateCount;
        break;
      }
    }
    lowerCount = fallbackCount < 0 ? extraCandidates.length : fallbackCount;
  }

  const necessaryAnchorSet = new Set(
    extraCandidates.slice(0, lowerCount).map(candidate => candidate.index)
  );
  const result = buildResampled(
    anchorsWithExtraCount(lowerCount),
    necessaryAnchorSet,
    diagnostics
  );
  if (diagnostics && typeof diagnostics === "object") {
    diagnostics.targetsSatisfied = diagnostics.distanceErrorRatio
      <= MAX_RESAMPLED_DISTANCE_ERROR_RATIO
      && diagnostics.maximumGeometryDeviationM
        <= MAX_RESAMPLED_GEOMETRY_DEVIATION_M;
  }
  return result;
}

export function buildTrack(payload, options = {}) {
  const points = parseBrouterFeature(payload);
  const resamplingDiagnostics = {};
  const coordinates = resampleTrack(
    points,
    options.resampleIntervalM,
    resamplingDiagnostics
  );
  if (!resamplingDiagnostics.targetsSatisfied) {
    throw new RangeError(
      "軌跡重採樣無法同時符合距離誤差與道路幾何偏差門檻。"
    );
  }
  if (!options.routeId && !options.seed) {
    return analyzeCoordinates(coordinates, options.analysis);
  }
  if (!options.routeId || !options.seed) {
    throw new TypeError("正式軌跡必須同時提供 routeId 與人工 seed。");
  }
  const seed = validateTrackSeed(options.seed, options.routeId);
  const elevationAnalysis = validateElevationAnalysis(seed.elevationAnalysis, options.routeId);
  const analysis = analyzeCoordinates(coordinates, elevationAnalysis || options.analysis);
  const generatedAt = validIsoTimestamp(options.generatedAt, "資料產生時間");
  const source = {
    router: "BRouter",
    profile: BROUTER_PROFILE,
    elevation: BROUTER_ELEVATION,
    samplingNote: TRACK_SAMPLING_NOTE,
    generatedAt,
    reviewStatus: seed.reviewStatus
  };
  if (elevationAnalysis) source.elevationAnalysis = elevationAnalysis;
  if (seed.reviewedAt) source.reviewedAt = seed.reviewedAt;
  if (seed.reviewerNote) source.reviewerNote = seed.reviewerNote;
  return {
    routeId: options.routeId,
    direction: seed.direction,
    source,
    waypoints: seed.waypoints.map(waypoint => ({ ...waypoint })),
    ...analysis
  };
}

export function serializeBundle(bundleId, tracks) {
  assertSafeIdentifier(bundleId, "bundle ID");
  Object.keys(tracks || {}).forEach(routeId => assertSafeIdentifier(routeId, "route ID"));
  return [
    "\"use strict\";",
    "",
    "(function (root) {",
    `  root.CrownRideAtlas.TrackRegistry.register(${JSON.stringify(bundleId)}, ${JSON.stringify(tracks, null, 2)});`,
    "})(typeof window !== \"undefined\" ? window : globalThis);",
    ""
  ].join("\n");
}

export function selectRoutes(selector, routes = Data.routes, manifest = null) {
  const hasTrack = route => !manifest || Boolean(manifest[route.trackRef || route.id]);

  if (selector && selector.routeId) {
    assertSafeIdentifier(selector.routeId, "route ID");
    const route = routes.find(candidate => candidate.id === selector.routeId);
    if (!route) throw new Error(`未知 route ID：${selector.routeId}`);
    return [route];
  }

  if (selector && Array.isArray(selector.regionIds)) {
    const knownRegions = new Set(routes.map(route => route.regionId));
    selector.regionIds.forEach(regionId => {
      if (!knownRegions.has(regionId)) throw new Error(`未知地區 ID：${regionId}`);
    });
    return routes.filter(route => {
      const manifestEntry = manifest && manifest[route.trackRef || route.id];
      return selector.regionIds.includes(route.regionId)
        && hasTrack(route)
        && (!manifestEntry || selector.regionIds.includes(manifestEntry.bundleId));
    });
  }

  if (selector && selector.all) return routes.filter(hasTrack);
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

function validIsoTimestamp(value, label) {
  if (typeof value !== "string" || !value
    || !Number.isFinite(Date.parse(value))
    || new Date(value).toISOString() !== value) {
    throw new TypeError(`${label}必須是完整 ISO-8601 時間。`);
  }
  return value;
}

export function validateElevationAnalysis(value, routeId) {
  if (value === undefined) return null;
  const label = `${routeId} 海拔分析`;
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError(`${label}設定格式無效。`);
  }
  if (!Number.isFinite(value.smoothingWindowM) || value.smoothingWindowM < 100
    || !Number.isFinite(value.gradeWindowM) || value.gradeWindowM < 100) {
    throw new TypeError(`${label}視窗不得小於 100 公尺。`);
  }
  if (typeof value.reason !== "string" || !value.reason.trim()
    || typeof value.referenceLabel !== "string" || !value.referenceLabel.trim()) {
    throw new TypeError(`${label}缺少原因或交叉檢核名稱。`);
  }
  let referenceUrl;
  try {
    referenceUrl = new URL(value.referenceUrl);
  } catch {
    throw new TypeError(`${label}交叉檢核網址無效。`);
  }
  if (referenceUrl.protocol !== "https:") {
    throw new TypeError(`${label}交叉檢核網址必須使用 HTTPS。`);
  }
  return {
    smoothingWindowM: value.smoothingWindowM,
    gradeWindowM: value.gradeWindowM,
    reason: value.reason.trim(),
    referenceUrl: referenceUrl.href,
    referenceLabel: value.referenceLabel.trim()
  };
}

export function validateTrackSeed(seed, routeId) {
  if (!seed || typeof seed !== "object" || Array.isArray(seed)) {
    throw new TypeError("人工 seed 格式無效。");
  }
  if (seed.id !== routeId) throw new Error(`人工 seed 識別碼與 routeId 不一致：${routeId}`);
  if (!ROUTE_DIRECTIONS.has(seed.direction)) throw new Error(`${routeId} 路線方向無效。`);
  if (seed.profile !== BROUTER_PROFILE) throw new Error(`${routeId} profile 必須為 fastbike。`);
  validateElevationAnalysis(seed.elevationAnalysis, routeId);
  if (!Array.isArray(seed.waypoints) || seed.waypoints.length < 2) {
    throw new TypeError(`${routeId} 人工 seed 至少需要兩個 waypoints。`);
  }
  const roles = [];
  seed.waypoints.forEach((waypoint, index) => {
    if (!waypoint || typeof waypoint !== "object" || Array.isArray(waypoint)) {
      throw new TypeError(`${routeId} 第 ${index + 1} 個地標格式無效。`);
    }
    if (typeof waypoint.name !== "string" || !waypoint.name.trim()) {
      throw new TypeError(`${routeId} 第 ${index + 1} 個地標缺少名稱。`);
    }
    if (!WAYPOINT_ROLES.has(waypoint.role)) {
      throw new TypeError(`${routeId} 第 ${index + 1} 個地標角色無效。`);
    }
    if (!Number.isFinite(waypoint.lat) || !Number.isFinite(waypoint.lng)) {
      throw new TypeError(`${routeId} 第 ${index + 1} 個地標座標無效。`);
    }
    roles.push(waypoint.role);
  });
  if (roles[0] !== "start" || roles.at(-1) !== "finish"
    || roles.filter(role => role === "start").length !== 1
    || roles.filter(role => role === "finish").length !== 1) {
    throw new TypeError(`${routeId} 地標必須以唯一 start 開始並以唯一 finish 結束。`);
  }
  if (!["pending", "approved"].includes(seed.reviewStatus)) {
    throw new TypeError(`${routeId} 審查狀態無效。`);
  }
  if (seed.reviewStatus === "approved") {
    validIsoTimestamp(seed.reviewedAt, `${routeId} 審查時間`);
    if (typeof seed.reviewerNote !== "string" || !seed.reviewerNote.trim()) {
      throw new TypeError(`${routeId} 已審查路線缺少 reviewerNote。`);
    }
  }
  return seed;
}

function brouterRequestParameters(seed) {
  return {
    lonlats: seedWaypoints(seed).map(point => point.join(",")).join("|"),
    profile: BROUTER_PROFILE,
    alternativeidx: "0",
    format: BROUTER_FORMAT
  };
}

function brouterUrl(seed, endpoint) {
  const parameters = new URLSearchParams(brouterRequestParameters(seed));
  return `${endpoint}?${parameters}`;
}

function cacheFingerprint(seed) {
  return createHash("sha256")
    .update(JSON.stringify(brouterRequestParameters(seed)))
    .digest("hex");
}

function legacyCacheFingerprint(seed) {
  return createHash("sha256").update(JSON.stringify({
    profile: BROUTER_PROFILE,
    format: BROUTER_FORMAT,
    waypoints: seedWaypoints(seed)
  })).digest("hex");
}

function previousV3CacheFingerprints(seed) {
  return new Set([...ROUTE_DIRECTIONS].map(direction => (
    createHash("sha256").update(JSON.stringify({
      id: seed.id,
      profile: seed.profile,
      direction,
      waypoints: seedWaypoints(seed)
    })).digest("hex")
  )));
}

function responseError(response, body) {
  const error = new Error(`BRouter 回應 ${response.status} ${response.statusText || ""}: ${body}`.trim());
  error.status = response.status;
  error.temporary = TEMPORARY_STATUS_CODES.has(response.status);
  return error;
}

function isTemporaryNetworkError(error) {
  const code = error && (error.code || (error.cause && error.cause.code));
  return TEMPORARY_NETWORK_CODES.has(code);
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

  async function perform(requestUrl) {
    let lastError;
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt += 1) {
      await throttle();
      let response;
      try {
        response = await fetchImpl(requestUrl, {
          headers: {
            Accept: "application/geo+json, application/json",
            "User-Agent": "CrownRideAtlas-TrackGenerator/1.0"
          }
        });
      } catch (error) {
        if (!isTemporaryNetworkError(error)) throw error;
        lastError = error;
        continue;
      }
      if (response.ok) return response.json();
      const error = responseError(response, await response.text());
      if (!error.temporary) throw error;
      lastError = error;
    }
    throw lastError;
  }

  function request(seed) {
    let requestUrl;
    try {
      requestUrl = brouterUrl(seed, endpoint);
    } catch (error) {
      return Promise.reject(error);
    }
    const result = queue.then(() => perform(requestUrl));
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
  const fsImpl = options.fsImpl || fs;
  if (!publishedDirectory) throw new TypeError("缺少正式 bundle 目錄。");
  if (typeof options.validateBatch !== "function") {
    throw new TypeError("正式發佈必須提供整批驗證器。");
  }

  const entries = [...bundleSources].map(([bundleId, source], index) => {
    assertSafeIdentifier(bundleId, "bundle ID");
    const targetPath = path.join(publishedDirectory, `${bundleId}.js`);
    const nonce = `${process.pid}.${Date.now()}.${index}`;
    return {
      source,
      targetPath,
      preparedPath: `${targetPath}.prepared.${nonce}`,
      backupPath: `${targetPath}.backup.${nonce}`,
      hadOriginal: false,
      installed: false
    };
  });

  await options.validateBatch(bundleSources);
  await fsImpl.mkdir(publishedDirectory, { recursive: true });
  try {
    for (const entry of entries) {
      await fsImpl.writeFile(entry.preparedPath, entry.source, "utf8");
    }
  } catch (error) {
    await Promise.all(entries.map(entry => fsImpl.rm(entry.preparedPath, { force: true })));
    throw error;
  }

  let failure = null;
  try {
    for (const entry of entries) {
      try {
        await fsImpl.rename(entry.targetPath, entry.backupPath);
        entry.hadOriginal = true;
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      await fsImpl.rename(entry.preparedPath, entry.targetPath);
      entry.installed = true;
    }
  } catch (error) {
    failure = error;
  }

  if (failure) {
    const rollbackErrors = [];
    for (const entry of entries.slice().reverse()) {
      try {
        if (entry.installed) await fsImpl.rm(entry.targetPath, { force: true });
        if (entry.hadOriginal) await fsImpl.rename(entry.backupPath, entry.targetPath);
      } catch (error) {
        rollbackErrors.push(error);
      }
    }
    await Promise.all(entries.flatMap(entry => [
      fsImpl.rm(entry.preparedPath, { force: true }),
      fsImpl.rm(entry.backupPath, { force: true })
    ]));
    if (rollbackErrors.length) {
      throw new AggregateError(
        [failure, ...rollbackErrors],
        `正式 bundle 批次提交及復原失敗：${failure.message}`
      );
    }
    throw failure;
  }
  await Promise.all(entries.map(entry => fsImpl.rm(entry.backupPath, { force: true })));
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
  const selectedRoutes = selectRoutes(selector, routes, manifest);
  const cacheDirectory = path.join(projectRoot, "tools", "route-data", "cache");
  const seedDirectory = path.join(projectRoot, "tools", "route-data", "seeds");
  const stagingDirectory = path.join(projectRoot, "tools", "route-data", ".staging");
  const publishedDirectory = path.join(projectRoot, "js", "data", "tracks");
  const client = createBrouterClient(options);
  const generatedByBundle = new Map();

  for (const route of selectedRoutes) {
    const routeId = route.trackRef || route.id;
    assertSafeIdentifier(routeId, "route ID");
    const manifestEntry = manifest[routeId];
    if (!manifestEntry) throw new Error(`manifest 缺少 route ID：${routeId}`);
    assertSafeIdentifier(manifestEntry.bundleId, "bundle ID");
    const cachePath = path.join(cacheDirectory, `${routeId}.geojson`);
    const seedPath = path.join(seedDirectory, `${routeId}.json`);
    const seed = await readJsonIfExists(seedPath);
    if (!seed) throw new Error(`缺少人工 seed：${routeId}`);
    validateTrackSeed(seed, routeId);
    const fingerprint = cacheFingerprint(seed);
    const cacheEntry = await readJsonIfExists(cachePath);
    const cacheHit = cacheEntry
      && (cacheEntry.fingerprint === fingerprint
        || (cacheEntry.version === 2
          && cacheEntry.fingerprint === legacyCacheFingerprint(seed))
        || (cacheEntry.version === 3
          && previousV3CacheFingerprints(seed).has(cacheEntry.fingerprint)))
      && cacheEntry.response;
    const needsCacheUpgrade = cacheHit && cacheEntry.fingerprint !== fingerprint;
    let payload = cacheHit ? cacheEntry.response : null;

    if (!cacheHit) {
      payload = await client.request(seed);
    }

    const generatedAt = cacheHit
      ? cacheEntry.generatedAt || new Date(0).toISOString()
      : new Date((options.now || Date.now)()).toISOString();
    const track = buildTrack(payload, { routeId, seed, generatedAt });
    if (!cacheHit || needsCacheUpgrade) {
      await atomicWrite(cachePath, `${JSON.stringify({
        version: 3,
        fingerprint,
        generatedAt,
        response: payload
      }, null, 2)}\n`);
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
        requireComplete: true,
        requireReviewMetadata: true
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
