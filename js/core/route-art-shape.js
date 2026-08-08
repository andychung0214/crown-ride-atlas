"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      RouteArtShape: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const RESAMPLE_POINTS = 64;
  const THRESHOLDS = Object.freeze({ shapeScore: 0.24, maxPointError: 0.48 });

  function pointFrom(value) {
    if (Array.isArray(value)) return { x: Number(value[0]), y: Number(value[1]) };
    if (value && Number.isFinite(value.x) && Number.isFinite(value.y)) {
      return { x: value.x, y: value.y };
    }
    if (value && Number.isFinite(value.lng) && Number.isFinite(value.lat)) {
      return { x: value.lng, y: value.lat };
    }
    return null;
  }

  function asPoints(values) {
    if (!Array.isArray(values)) return [];
    return values.map(pointFrom).filter(Boolean);
  }

  function normalize(points) {
    const source = asPoints(points);
    if (source.length < 2) return [];
    const xs = source.map(point => point.x);
    const ys = source.map(point => point.y);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const spanX = maxX - minX || 1;
    const spanY = maxY - minY || 1;
    return source.map(point => ({
      x: (point.x - minX) / spanX,
      y: (point.y - minY) / spanY
    }));
  }

  function distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function cumulativeLengths(points) {
    const result = [0];
    for (let index = 1; index < points.length; index += 1) {
      result.push(result[index - 1] + distance(points[index - 1], points[index]));
    }
    return result;
  }

  function interpolate(start, end, ratio) {
    return {
      x: start.x + (end.x - start.x) * ratio,
      y: start.y + (end.y - start.y) * ratio
    };
  }

  function resample(points, count = RESAMPLE_POINTS) {
    const source = normalize(points);
    if (source.length < 2 || count < 2) return source;
    const lengths = cumulativeLengths(source);
    const total = lengths[lengths.length - 1];
    if (!total) return Array.from({ length: count }, () => ({ ...source[0] }));

    const result = [];
    let segment = 1;
    for (let index = 0; index < count; index += 1) {
      const target = total * index / (count - 1);
      while (segment < lengths.length - 1 && lengths[segment] < target) segment += 1;
      const startLength = lengths[segment - 1];
      const endLength = lengths[segment];
      const ratio = endLength === startLength ? 0 : (target - startLength) / (endLength - startLength);
      result.push(interpolate(source[segment - 1], source[segment], ratio));
    }
    return result;
  }

  function compareDirection(target, actual) {
    let total = 0;
    let maximum = 0;
    for (let index = 0; index < target.length; index += 1) {
      const error = distance(target[index], actual[index]);
      total += error;
      maximum = Math.max(maximum, error);
    }
    return {
      score: total / target.length,
      maxPointError: maximum
    };
  }

  function isClosed(points) {
    return points.length > 3 && distance(points[0], points[points.length - 1]) <= 0.02;
  }

  function compareClosed(target, actual) {
    let best = { score: Infinity, maxPointError: Infinity, reversed: false };
    for (const reversed of [false, true]) {
      const ordered = reversed ? [...actual].reverse() : actual;
      for (let shift = 0; shift < ordered.length; shift += 1) {
        let total = 0;
        let maximum = 0;
        for (let index = 0; index < target.length; index += 1) {
          const error = distance(target[index], ordered[(index + shift) % ordered.length]);
          total += error;
          maximum = Math.max(maximum, error);
        }
        const result = {
          score: total / target.length,
          maxPointError: maximum,
          reversed
        };
        if (result.score < best.score) best = result;
      }
    }
    return best;
  }

  function compareShape(targetShape, actualCoordinates) {
    const target = resample(targetShape);
    const actual = resample(actualCoordinates);
    if (target.length < 2 || actual.length < 2) {
      return { score: Infinity, maxPointError: Infinity, reversed: false };
    }
    if (isClosed(target) && isClosed(actual)) return compareClosed(target, actual);
    const forward = compareDirection(target, actual);
    const reverse = compareDirection(target, [...actual].reverse());
    return reverse.score < forward.score
      ? { ...reverse, reversed: true }
      : { ...forward, reversed: false };
  }

  function isNearMatch(result) {
    return Boolean(result)
      && result.score <= THRESHOLDS.shapeScore
      && result.maxPointError <= THRESHOLDS.maxPointError;
  }

  return {
    RESAMPLE_POINTS,
    THRESHOLDS,
    normalize,
    resample,
    compareShape,
    isNearMatch
  };
});
