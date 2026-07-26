"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      TrackRegistry: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const bundles = new Set();
  const tracksByRouteId = new Map();

  function deepClone(value) {
    if (Array.isArray(value)) return value.map(deepClone);
    if (value && typeof value === "object") {
      return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, deepClone(child)]));
    }
    return value;
  }

  function deepFreeze(value) {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
    Object.freeze(value);
    Object.values(value).forEach(deepFreeze);
    return value;
  }

  function isCoordinate(point) {
    return point
      && typeof point === "object"
      && Number.isFinite(point.lat)
      && Number.isFinite(point.lng)
      && Number.isFinite(point.ele);
  }

  function assertValidTracks(tracks) {
    if (!tracks || typeof tracks !== "object" || Array.isArray(tracks)) {
      throw new TypeError("軌跡資料格式無效。");
    }

    const entries = Object.entries(tracks);
    if (!entries.length) throw new TypeError("軌跡資料格式無效。");

    entries.forEach(([routeId, track]) => {
      if (!routeId || !track || typeof track !== "object"
        || !Array.isArray(track.coordinates) || !track.coordinates.length
        || !track.coordinates.every(isCoordinate)) {
        throw new TypeError("軌跡資料格式無效。");
      }
    });

    return entries;
  }

  function register(bundleId, tracks) {
    if (typeof bundleId !== "string" || !bundleId) {
      throw new TypeError("bundle ID 無效。");
    }
    if (bundles.has(bundleId)) throw new Error(`bundle 已載入：${bundleId}`);

    const entries = assertValidTracks(tracks);
    entries.forEach(([routeId]) => {
      if (tracksByRouteId.has(routeId)) throw new Error(`route ID 已存在：${routeId}`);
    });

    entries.forEach(([routeId, track]) => {
      tracksByRouteId.set(routeId, deepFreeze(deepClone(track)));
    });
    bundles.add(bundleId);
  }

  function get(routeId) {
    return tracksByRouteId.get(routeId) || null;
  }

  return { register, get };
});
