"use strict";

(function (root, factory) {
  const geo = typeof module === "object" && module.exports
    ? require("./geo.js")
    : root && root.CrownRideAtlas && root.CrownRideAtlas.Geo;
  const api = factory(geo);

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      TrackAnalysis: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function (Geo) {
  const GRADE_WINDOW_M = 100;
  const MIN_CLIMB_DISTANCE_M = 500;
  const MIN_CLIMB_GAIN_M = 30;
  const CLIMB_DESCENT_TOLERANCE_M = 10;

  function normalizePoint(point) {
    if (!Geo || !Geo.isCoordinate(point)) return null;
    return {
      lat: point.lat,
      lng: point.lng,
      ele: Number.isFinite(point.ele) ? point.ele : 0
    };
  }

  function smoothElevations(coordinates, windowM) {
    const radiusKm = windowM / 2000;

    return coordinates.map((point, index) => {
      const lowerBound = point.distanceKm - radiusKm;
      const upperBound = point.distanceKm + radiusKm;
      let weightedElevation = 0;
      let weight = 0;

      coordinates.forEach((sample, sampleIndex) => {
        const previousDistance = sampleIndex > 0
          ? coordinates[sampleIndex - 1].distanceKm
          : sample.distanceKm;
        const nextDistance = sampleIndex < coordinates.length - 1
          ? coordinates[sampleIndex + 1].distanceKm
          : sample.distanceKm;
        const sampleStart = (previousDistance + sample.distanceKm) / 2;
        const sampleEnd = (sample.distanceKm + nextDistance) / 2;
        const overlap = Math.max(0, Math.min(upperBound, sampleEnd) - Math.max(lowerBound, sampleStart));

        weightedElevation += sample.ele * overlap;
        weight += overlap;
      });

      return weight > 0 ? weightedElevation / weight : point.ele;
    });
  }

  function gradeAt(coordinates, index, windowM) {
    const current = coordinates[index];
    const targetDistanceKm = current.distanceKm - windowM / 1000;
    let start = index - 1;

    while (start > 0 && coordinates[start].distanceKm > targetDistanceKm) {
      start -= 1;
    }

    const previous = coordinates[start];
    const next = coordinates[start + 1];
    const useInterpolation = targetDistanceKm > previous.distanceKm && next && next.distanceKm > previous.distanceKm;
    const anchorDistanceKm = useInterpolation ? targetDistanceKm : previous.distanceKm;
    const anchorElevation = useInterpolation
      ? previous.smoothedEle + (next.smoothedEle - previous.smoothedEle) * (targetDistanceKm - previous.distanceKm) / (next.distanceKm - previous.distanceKm)
      : previous.smoothedEle;
    const distanceM = (current.distanceKm - anchorDistanceKm) * 1000;
    return distanceM > 0 ? (current.smoothedEle - anchorElevation) / distanceM * 100 : 0;
  }

  function elevationTotals(coordinates, noiseThresholdM) {
    let elevationGainM = 0;
    let elevationLossM = 0;
    if (coordinates.length < 2) return { elevationGainM, elevationLossM };

    let direction = 0;
    let trendStart = coordinates[0].smoothedEle;
    let extreme = trendStart;

    for (let index = 1; index < coordinates.length; index += 1) {
      const elevation = coordinates[index].smoothedEle;

      if (direction === 0) {
        if (Math.abs(elevation - trendStart) < noiseThresholdM) continue;
        direction = elevation > trendStart ? 1 : -1;
        extreme = elevation;
        continue;
      }

      if (direction === 1) {
        if (elevation >= extreme) {
          extreme = elevation;
        } else if (extreme - elevation >= noiseThresholdM) {
          elevationGainM += extreme - trendStart;
          trendStart = extreme;
          extreme = elevation;
          direction = -1;
        }
      } else if (elevation <= extreme) {
        extreme = elevation;
      } else if (elevation - extreme >= noiseThresholdM) {
        elevationLossM += trendStart - extreme;
        trendStart = extreme;
        extreme = elevation;
        direction = 1;
      }
    }

    if (direction === 1) elevationGainM += extreme - trendStart;
    if (direction === -1) elevationLossM += trendStart - extreme;

    return { elevationGainM, elevationLossM };
  }

  function gradeBand(gradePct) {
    const grade = Number(gradePct);
    if (!Number.isFinite(grade) || grade < 0) return "descent";
    if (grade <= 3) return "moderate";
    if (grade <= 6) return "hard";
    if (grade <= 9) return "steep";
    return "extreme";
  }

  function createClimb(coordinates, startIndex, endIndex, gainM, minDistanceM, minGainM) {
    const start = coordinates[startIndex];
    const end = coordinates[endIndex];
    const distanceKm = end.distanceKm - start.distanceKm;

    if (distanceKm * 1000 < minDistanceM || gainM < minGainM) return null;

    const grades = coordinates.slice(startIndex + 1, endIndex + 1).map(point => point.gradePct);
    return {
      startIndex,
      endIndex,
      startDistanceKm: start.distanceKm,
      endDistanceKm: end.distanceKm,
      distanceKm,
      gainM,
      averageGradePct: gainM / (distanceKm * 1000) * 100,
      maximumGradePct: Math.max(0, ...grades)
    };
  }

  function detectClimbs(coordinates, options) {
    const settings = Object.assign({
      minDistanceM: MIN_CLIMB_DISTANCE_M,
      minGainM: MIN_CLIMB_GAIN_M
    }, options || {});
    const minDistanceM = Number.isFinite(settings.minDistanceM)
      ? Math.max(MIN_CLIMB_DISTANCE_M, settings.minDistanceM)
      : MIN_CLIMB_DISTANCE_M;
    const minGainM = Number.isFinite(settings.minGainM)
      ? Math.max(MIN_CLIMB_GAIN_M, settings.minGainM)
      : MIN_CLIMB_GAIN_M;
    if (!Array.isArray(coordinates) || coordinates.length < 2) return [];
    const climbs = [];
    let startIndex = 0;
    let peakIndex = 0;
    let gainM = 0;

    for (let index = 1; index < coordinates.length; index += 1) {
      const change = coordinates[index].ele - coordinates[index - 1].ele;
      if (change > 0) {
        gainM += change;
        peakIndex = index;
        continue;
      }

      if (coordinates[peakIndex].ele - coordinates[index].ele <= CLIMB_DESCENT_TOLERANCE_M) continue;
      const climb = createClimb(coordinates, startIndex, peakIndex, gainM, minDistanceM, minGainM);
      if (climb) climbs.push(climb);
      startIndex = index;
      peakIndex = index;
      gainM = 0;
    }

    const finalClimb = createClimb(coordinates, startIndex, coordinates.length - 1, gainM, minDistanceM, minGainM);
    if (finalClimb) climbs.push(finalClimb);
    return climbs;
  }

  function analyzeCoordinates(points, options) {
    const settings = Object.assign({
      gradeWindowM: GRADE_WINDOW_M,
      smoothingWindowM: GRADE_WINDOW_M,
      noiseThresholdM: 2,
      climbMinDistanceM: MIN_CLIMB_DISTANCE_M,
      climbMinGainM: MIN_CLIMB_GAIN_M
    }, options || {});
    const gradeWindowM = Number.isFinite(settings.gradeWindowM)
      ? Math.max(GRADE_WINDOW_M, settings.gradeWindowM)
      : GRADE_WINDOW_M;
    const smoothingWindowM = Number.isFinite(settings.smoothingWindowM) && settings.smoothingWindowM > 0
      ? settings.smoothingWindowM
      : GRADE_WINDOW_M;
    const noiseThresholdM = Number.isFinite(settings.noiseThresholdM) && settings.noiseThresholdM >= 0
      ? settings.noiseThresholdM
      : 2;
    const minClimbDistanceM = Number.isFinite(settings.climbMinDistanceM)
      ? Math.max(MIN_CLIMB_DISTANCE_M, settings.climbMinDistanceM)
      : MIN_CLIMB_DISTANCE_M;
    const minClimbGainM = Number.isFinite(settings.climbMinGainM)
      ? Math.max(MIN_CLIMB_GAIN_M, settings.climbMinGainM)
      : MIN_CLIMB_GAIN_M;
    const coordinates = [];

    for (const source of Array.isArray(points) ? points : []) {
      const point = normalizePoint(source);
      if (!point) continue;
      const previous = coordinates[coordinates.length - 1];
      const distanceKm = previous
        ? previous.distanceKm + Geo.haversineKm(previous, point)
        : 0;
      coordinates.push(Object.assign(point, { distanceKm, gradePct: 0 }));
    }

    const smoothedElevations = smoothElevations(coordinates, smoothingWindowM);
    coordinates.forEach((point, index) => {
      point.smoothedEle = smoothedElevations[index];
      if (index > 0) point.gradePct = gradeAt(coordinates, index, gradeWindowM);
      point.gradeBand = gradeBand(point.gradePct);
    });

    const elevation = elevationTotals(coordinates, noiseThresholdM);
    const elevations = coordinates.map(point => point.ele);

    return {
      coordinates,
      summary: {
        distanceKm: coordinates.length ? coordinates[coordinates.length - 1].distanceKm : 0,
        elevationGainM: elevation.elevationGainM,
        elevationLossM: elevation.elevationLossM,
        minimumElevationM: elevations.length ? Math.min(...elevations) : 0,
        maximumElevationM: elevations.length ? Math.max(...elevations) : 0,
        maximumSustainedGradePct: Math.max(0, ...coordinates.map(point => point.gradePct))
      },
      climbs: detectClimbs(coordinates, {
        minDistanceM: minClimbDistanceM,
        minGainM: minClimbGainM
      })
    };
  }

  return {
    analyzeCoordinates,
    detectClimbs,
    gradeBand
  };
});
