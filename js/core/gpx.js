"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Gpx: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const MIME_TYPE = "application/gpx+xml;charset=utf-8";

  function escapeXml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  function decodeXml(value) {
    return String(value == null ? "" : value)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, "&");
  }

  function extractAttribute(attributes, name) {
    const expression = new RegExp(`\\b${name}\\s*=\\s*(['"])(.*?)\\1`, "i");
    const match = expression.exec(attributes);
    return match ? Number(match[2]) : Number.NaN;
  }

  function validCoordinate(lat, lng) {
    return (
      Number.isFinite(lat) &&
      Number.isFinite(lng) &&
      lat >= -90 &&
      lat <= 90 &&
      lng >= -180 &&
      lng <= 180
    );
  }

  function parse(xmlText) {
    const xml = String(xmlText || "");
    const nameMatch = /<(?:[\w-]+:)?name\b[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?name\s*>/i.exec(xml);
    const name = nameMatch ? decodeXml(nameMatch[1].trim()) : "未命名路線";
    const segmentBodies = [];
    const segmentPattern = /<(?:[\w-]+:)?trkseg\b[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?trkseg\s*>/gi;
    let segmentMatch;
    while ((segmentMatch = segmentPattern.exec(xml))) segmentBodies.push(segmentMatch[1]);
    if (segmentBodies.length === 0) segmentBodies.push(xml);

    const segments = segmentBodies.map(segmentBody => {
      const segment = [];
      const pointPattern = /<(?:[\w-]+:)?trkpt\b([^>]*)>([\s\S]*?)<\/(?:[\w-]+:)?trkpt\s*>/gi;
      let pointMatch;
      while ((pointMatch = pointPattern.exec(segmentBody))) {
        const lat = extractAttribute(pointMatch[1], "lat");
        const lng = extractAttribute(pointMatch[1], "lon");
        if (!validCoordinate(lat, lng)) continue;
        const elevationMatch = /<(?:[\w-]+:)?ele\b[^>]*>([\s\S]*?)<\/(?:[\w-]+:)?ele\s*>/i.exec(pointMatch[2]);
        const elevation = elevationMatch ? Number(elevationMatch[1].trim()) : 0;
        segment.push({ lat, lng, ele: Number.isFinite(elevation) ? elevation : 0 });
      }
      return segment;
    }).filter(segment => segment.length > 0);
    const coordinates = segments.flat();

    if (coordinates.length < 2) {
      throw new Error("GPX 未包含至少兩個有效座標。");
    }

    return { name, coordinates, segments };
  }

  function serialize(route) {
    const safeRoute = route || {};
    const sourceSegments = Array.isArray(safeRoute.segments)
      ? safeRoute.segments
      : [Array.isArray(safeRoute.coordinates) ? safeRoute.coordinates : []];
    const segments = sourceSegments.map(segment => Array.isArray(segment)
      ? segment.filter(point => validCoordinate(point.lat, point.lng))
      : []);

    if (segments.length < 1 || segments.some(segment => segment.length < 2)) {
      throw new Error("路線至少需要兩個有效座標才能輸出 GPX。");
    }

    const trackSegments = segments.map(segment => {
      const points = segment.map(point => {
        const elevation = Number.isFinite(point.ele) ? point.ele : 0;
        return `        <trkpt lat="${point.lat}" lon="${point.lng}"><ele>${elevation}</ele></trkpt>`;
      }).join("\n");
      return ["    <trkseg>", points, "    </trkseg>"].join("\n");
    }).join("\n");

    return [
      "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
      "<gpx version=\"1.1\" creator=\"CROWN RIDE ATLAS\" xmlns=\"http://www.topografix.com/GPX/1/1\">",
      "  <trk>",
      `    <name>${escapeXml(safeRoute.name || "未命名路線")}</name>`,
      trackSegments,
      "  </trk>",
      "</gpx>"
    ].join("\n");
  }

  function safeFilename(name) {
    const normalized = String(name || "route")
      .normalize("NFKC")
      .replace(/[^\p{L}\p{N}-]+/gu, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80);
    return `${normalized || "route"}.gpx`;
  }

  function createDownload(route, track) {
    const safeRoute = route || {};
    const loadedCoordinates = track && Array.isArray(track.coordinates) ? track.coordinates : null;
    const loadedSegments = track && Array.isArray(track.segments) ? track.segments : null;
    if (safeRoute.trackRef && !loadedSegments && (!loadedCoordinates || loadedCoordinates.length < 2)) {
      throw new Error("內建路線軌跡尚未載入，暫時無法下載 GPX。");
    }
    const routeForDownload = loadedSegments
      ? Object.assign({}, safeRoute, { segments: loadedSegments })
      : loadedCoordinates ? Object.assign({}, safeRoute, { coordinates: loadedCoordinates }) : safeRoute;
    return {
      filename: safeFilename(safeRoute.name),
      text: serialize(routeForDownload),
      mimeType: MIME_TYPE
    };
  }

  return {
    MIME_TYPE,
    parse,
    serialize,
    createDownload
  };
});
