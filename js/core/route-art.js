"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { RouteArt: api });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const FILTERS = Object.freeze(["all", "cycling", "foot", "track-ready"]);
  const ACTIVITY_TYPES = new Set(["cycling", "running", "walking"]);
  const STATUSES = new Set(["track-ready", "source-only"]);

  function isTaiwanCoordinate(point) {
    return Boolean(point)
      && Number.isFinite(point.lat) && point.lat >= 21.5 && point.lat <= 25.5
      && Number.isFinite(point.lng) && point.lng >= 119.5 && point.lng <= 122.1;
  }

  function hasUsableSegments(segments) {
    return Array.isArray(segments)
      && segments.length >= 1
      && segments.every(segment => Array.isArray(segment)
        && segment.length >= 2
        && segment.every(isTaiwanCoordinate));
  }

  function isHttpsUrl(value) {
    try {
      return new URL(value).protocol === "https:";
    } catch {
      return false;
    }
  }

  function isIsoDate(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(`${value}T00:00:00.000Z`);
    return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
  }

  function validateItem(item) {
    if (!item || typeof item !== "object") throw new TypeError("GPS Art item 必須是物件");
    if (typeof item.id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id)) {
      throw new TypeError("id 必須是 slug");
    }
    if (typeof item.name !== "string" || !item.name.trim()) throw new TypeError("name 必須存在");
    if (!ACTIVITY_TYPES.has(item.activityType)) throw new TypeError("activityType 無效");
    if (!STATUSES.has(item.status)) throw new TypeError("status 無效");
    if (!isHttpsUrl(item.sourceUrl)) {
      throw new TypeError("sourceUrl 必須使用 HTTPS");
    }
    if (typeof item.sourcePlatform !== "string" || !item.sourcePlatform.trim()) {
      throw new TypeError("sourcePlatform 必須存在");
    }
    if (!isIsoDate(item.verifiedAt)) {
      throw new TypeError("verifiedAt 必須為 YYYY-MM-DD");
    }

    if (item.status === "track-ready") {
      if (!Array.isArray(item.segments) || item.segments.length < 1
        || !item.segments.every(segment => Array.isArray(segment) && segment.length >= 2)) {
        throw new TypeError("track-ready 必須具有至少一段有效 segments");
      }
      if (!item.segments.flat().every(isTaiwanCoordinate)) {
        throw new TypeError("segments 座標必須位於 Taiwan");
      }
      if (Object.hasOwn(item, "coordinates")) {
        throw new TypeError("track-ready GPS Art 不可具有 coordinates");
      }
    } else if (Object.hasOwn(item, "coordinates") || Object.hasOwn(item, "segments")) {
      throw new TypeError("source-only 不可具有 coordinates 或 segments");
    }

    return true;
  }

  function filter(items, filterKey) {
    const source = Array.isArray(items) ? items : [];
    if (filterKey === "cycling") return source.filter(item => item.activityType === "cycling");
    if (filterKey === "foot") return source.filter(item => ["running", "walking"].includes(item.activityType));
    if (filterKey === "track-ready") return source.filter(item => item.status === "track-ready");
    return source.slice();
  }

  function stats(items) {
    const source = Array.isArray(items) ? items : [];
    const trackReady = source.filter(item => item.status === "track-ready").length;
    return { total: source.length, trackReady, sourceOnly: source.length - trackReady };
  }

  return { FILTERS, isTaiwanCoordinate, hasUsableSegments, validateItem, filter, stats };
});
