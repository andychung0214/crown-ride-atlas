"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Geo: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const EARTH_RADIUS_KM = 6371.0088;

  function isCoordinate(point) {
    return Boolean(
      point &&
      Number.isFinite(point.lat) &&
      Number.isFinite(point.lng) &&
      point.lat >= -90 &&
      point.lat <= 90 &&
      point.lng >= -180 &&
      point.lng <= 180
    );
  }

  function toRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  function haversineKm(a, b) {
    if (!isCoordinate(a) || !isCoordinate(b)) return 0;
    if (a.lat === b.lat && a.lng === b.lng) return 0;

    const latitudeDelta = toRadians(b.lat - a.lat);
    const longitudeDelta = toRadians(b.lng - a.lng);
    const latitudeA = toRadians(a.lat);
    const latitudeB = toRadians(b.lat);
    const sinLatitude = Math.sin(latitudeDelta / 2);
    const sinLongitude = Math.sin(longitudeDelta / 2);
    const haversine =
      sinLatitude * sinLatitude +
      Math.cos(latitudeA) * Math.cos(latitudeB) * sinLongitude * sinLongitude;
    const arc = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));

    return EARTH_RADIUS_KM * arc;
  }

  function totalDistanceKm(points) {
    let total = 0;
    let previous = null;

    for (const point of Array.isArray(points) ? points : []) {
      if (!isCoordinate(point)) {
        previous = null;
        continue;
      }
      if (previous) total += haversineKm(previous, point);
      previous = point;
    }

    return total;
  }

  function normalizeToSvg(points, width, height, padding) {
    const safeWidth = Number.isFinite(width) && width > 0 ? width : 1;
    const safeHeight = Number.isFinite(height) && height > 0 ? height : 1;
    const safePadding = Math.max(0, Math.min(Number(padding) || 0, safeWidth / 2, safeHeight / 2));
    const valid = (Array.isArray(points) ? points : []).filter(isCoordinate);

    if (valid.length === 0) return [];
    if (valid.length === 1) {
      return [{ x: safeWidth / 2, y: safeHeight / 2 }];
    }

    const latitudes = valid.map(point => point.lat);
    const longitudes = valid.map(point => point.lng);
    const minimumLatitude = Math.min(...latitudes);
    const maximumLatitude = Math.max(...latitudes);
    const minimumLongitude = Math.min(...longitudes);
    const maximumLongitude = Math.max(...longitudes);
    const latitudeSpan = maximumLatitude - minimumLatitude || 1;
    const longitudeSpan = maximumLongitude - minimumLongitude || 1;
    const drawingWidth = safeWidth - safePadding * 2;
    const drawingHeight = safeHeight - safePadding * 2;

    return valid.map(point => ({
      x: safePadding + (point.lng - minimumLongitude) / longitudeSpan * drawingWidth,
      y: safePadding + (maximumLatitude - point.lat) / latitudeSpan * drawingHeight
    }));
  }

  return {
    isCoordinate,
    haversineKm,
    totalDistanceKm,
    normalizeToSvg
  };
});
