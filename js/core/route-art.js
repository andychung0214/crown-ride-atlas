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
  const FILTERS = Object.freeze(["all", "cycling", "foot", "downloadable", "track-ready"]);
  const ACTIVITY_TYPES = new Set(["cycling", "running", "walking"]);
  const STATUSES = new Set(["track-ready", "source-download", "source-only"]);
  const SOURCE_FORMATS = new Set(["gpx", "kml", "kmz", "geojson"]);
  const DOWNLOAD_SUMMARY_FIELDS = Object.freeze([
    "externalDownloadUrl", "sourceFormat", "sourceSha256", "segmentCount", "totalPoints", "bounds"
  ]);

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

  function isAllowedDownloadUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === "https:"
        && url.hostname === "shapemiles.com"
        && !url.port
        && !url.username
        && !url.password
        && /^\/api\/art-routes\/taipei\/[a-z0-9-]+\/gpx$/.test(url.pathname);
    } catch (_error) {
      return false;
    }
  }

  function hasDownloadSummary(item) {
    return DOWNLOAD_SUMMARY_FIELDS.some(field => Object.hasOwn(item, field));
  }

  function validateBounds(bounds) {
    if (!bounds || typeof bounds !== "object"
      || !["minLat", "maxLat", "minLng", "maxLng"].every(field => Number.isFinite(bounds[field]))) {
      throw new TypeError("bounds 必須包含有限座標");
    }
    if (bounds.minLat > bounds.maxLat || bounds.minLng > bounds.maxLng
      || !isTaiwanCoordinate({ lat: bounds.minLat, lng: bounds.minLng })
      || !isTaiwanCoordinate({ lat: bounds.maxLat, lng: bounds.maxLng })) {
      throw new TypeError("bounds 必須位於 Taiwan");
    }
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
    if (Object.hasOwn(item, "routeSourceUrl") && !isHttpsUrl(item.routeSourceUrl)) {
      throw new TypeError("routeSourceUrl 必須使用 HTTPS");
    }
    if (Object.hasOwn(item, "routeSourceAccess")
      && !["public-page", "login-required"].includes(item.routeSourceAccess)) {
      throw new TypeError("routeSourceAccess 無效");
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
      if (hasDownloadSummary(item)) {
        throw new TypeError("track-ready 不可具有來源下載摘要");
      }
    } else if (item.status === "source-download") {
      if (Object.hasOwn(item, "coordinates") || Object.hasOwn(item, "segments")) {
        throw new TypeError("source-download 不可具有 coordinates 或 segments");
      }
      if (!isAllowedDownloadUrl(item.externalDownloadUrl)) {
        throw new TypeError("下載來源不在 allowlist");
      }
      if (!SOURCE_FORMATS.has(item.sourceFormat)) {
        throw new TypeError("sourceFormat 無效");
      }
      if (typeof item.sourceSha256 !== "string" || !/^[a-f0-9]{64}$/.test(item.sourceSha256)) {
        throw new TypeError("sourceSha256 必須為 SHA-256");
      }
      if (!Number.isInteger(item.segmentCount) || item.segmentCount < 1
        || !Number.isInteger(item.totalPoints) || item.totalPoints < 2) {
        throw new TypeError("來源下載摘要點數無效");
      }
      validateBounds(item.bounds);
    } else if (Object.hasOwn(item, "coordinates") || Object.hasOwn(item, "segments") || hasDownloadSummary(item)) {
      throw new TypeError("source-only 不可具有 coordinates 或 segments");
    }

    return true;
  }

  function filter(items, filterKey) {
    const source = Array.isArray(items) ? items : [];
    if (filterKey === "cycling") return source.filter(item => item.activityType === "cycling");
    if (filterKey === "foot") return source.filter(item => ["running", "walking"].includes(item.activityType));
    if (filterKey === "downloadable") return source.filter(item =>
      ["track-ready", "source-download"].includes(item.status));
    if (filterKey === "track-ready") return source.filter(item => item.status === "track-ready");
    return source.slice();
  }

  function stats(items) {
    const source = Array.isArray(items) ? items : [];
    const trackReady = source.filter(item => item.status === "track-ready").length;
    const sourceDownload = source.filter(item => item.status === "source-download").length;
    return { total: source.length, trackReady, sourceDownload, sourceOnly: source.length - trackReady - sourceDownload };
  }

  return { FILTERS, isTaiwanCoordinate, hasUsableSegments, validateItem, filter, stats };
});
