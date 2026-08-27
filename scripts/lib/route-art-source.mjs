"use strict";

import { createHash } from "node:crypto";
import { TextDecoder } from "node:util";
import { inflateRawSync } from "node:zlib";

export const LIMITS = Object.freeze({
  maxBytes: 5_000_000,
  maxPoints: 100_000,
  maxSegments: 2_000,
  maxSegmentGapMeters: 500,
  taiwan: Object.freeze({ minLat: 21.5, maxLat: 25.5, minLng: 119.5, maxLng: 122.1 })
});

const ZIP_SIGNATURES = Object.freeze({
  localFile: 0x04034b50,
  centralFile: 0x02014b50,
  endOfCentralDirectory: 0x06054b50
});
const ZIP_ALLOWED_FLAGS = 0x0800;
const UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });

function parseNumber(value, label) {
  if (String(value).trim() === "") throw new Error(`${label} 不是有限數值`);
  const number = Number(value);
  if (!Number.isFinite(number)) throw new Error(`${label} 不是有限數值`);
  return number;
}

function assertTextSize(text, label) {
  const value = String(text ?? "");
  if (Buffer.byteLength(value, "utf8") > LIMITS.maxBytes) {
    throw new Error(`${label} 大小不得超過 5 MB`);
  }
  return value;
}

function assertSafeXml(text, label) {
  const xml = assertTextSize(text, label);
  if (/<!\s*(?:DOCTYPE|ENTITY)\b/i.test(xml)) {
    throw new Error(`${label} 不接受 DTD 或外部實體`);
  }
  return xml;
}

function decodeXmlEntities(value, label) {
  const predefined = Object.freeze({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' });
  let decoded = "";
  let cursor = 0;
  while (cursor < value.length) {
    const entityStart = value.indexOf("&", cursor);
    if (entityStart < 0) return decoded + value.slice(cursor);
    decoded += value.slice(cursor, entityStart);
    const entityEnd = value.indexOf(";", entityStart + 1);
    if (entityEnd < 0) throw new Error(`${label} XML entity 格式無效`);
    const entity = value.slice(entityStart + 1, entityEnd);
    if (Object.hasOwn(predefined, entity)) {
      decoded += predefined[entity];
    } else if (/^#\d+$/.test(entity) || /^#x[\da-f]+$/i.test(entity)) {
      const codePoint = entity[1].toLowerCase() === "x"
        ? Number.parseInt(entity.slice(2), 16)
        : Number.parseInt(entity.slice(1), 10);
      if (!Number.isInteger(codePoint) || codePoint <= 0 || codePoint > 0x10ffff
        || (codePoint >= 0xd800 && codePoint <= 0xdfff)) {
        throw new Error(`${label} XML entity 字元無效`);
      }
      decoded += String.fromCodePoint(codePoint);
    } else {
      throw new Error(`${label} 不接受自訂 XML entity`);
    }
    cursor = entityEnd + 1;
  }
  return decoded;
}

function readXmlName(source, offset) {
  const match = /^[A-Za-z_][A-Za-z0-9_.:-]*/.exec(source.slice(offset));
  return match ? match[0] : "";
}

function findXmlTagEnd(xml, offset, label) {
  let quote = "";
  for (let cursor = offset; cursor < xml.length; cursor += 1) {
    const character = xml[cursor];
    if (quote) {
      if (character === quote) quote = "";
    } else if (character === '"' || character === "'") {
      quote = character;
    } else if (character === ">") {
      return cursor;
    }
  }
  throw new Error(`${label} XML 標籤未完整關閉`);
}

function parseXmlStartTag(source, label) {
  const selfClosing = /\/\s*$/.test(source);
  const body = selfClosing ? source.replace(/\/\s*$/, "") : source;
  const name = readXmlName(body, 0);
  if (!name) throw new Error(`${label} XML 起始標籤無效`);

  const attributes = new Map();
  let cursor = name.length;
  while (cursor < body.length) {
    while (/\s/.test(body[cursor] || "")) cursor += 1;
    if (cursor >= body.length) break;
    const attributeName = readXmlName(body, cursor);
    if (!attributeName) throw new Error(`${label} XML 屬性名稱無效`);
    cursor += attributeName.length;
    while (/\s/.test(body[cursor] || "")) cursor += 1;
    if (body[cursor] !== "=") throw new Error(`${label} XML 屬性缺少等號`);
    cursor += 1;
    while (/\s/.test(body[cursor] || "")) cursor += 1;
    const quote = body[cursor];
    if (quote !== '"' && quote !== "'") throw new Error(`${label} XML 屬性必須使用引號`);
    const valueStart = cursor + 1;
    const valueEnd = body.indexOf(quote, valueStart);
    if (valueEnd < 0) throw new Error(`${label} XML 屬性未完整關閉`);
    const rawValue = body.slice(valueStart, valueEnd);
    if (rawValue.includes("<")) throw new Error(`${label} XML 屬性包含無效字元`);
    if (attributes.has(attributeName)) throw new Error(`${label} XML 屬性重複：${attributeName}`);
    attributes.set(attributeName, decodeXmlEntities(rawValue, label));
    cursor = valueEnd + 1;
  }
  return { name, attributes, selfClosing };
}

function parseXmlDocument(text, label) {
  const xml = assertSafeXml(text, label);
  const stack = [];
  let root = null;
  let cursor = 0;

  function appendText(value, decodeEntities = true) {
    if (stack.length === 0) {
      if (value.trim() !== "") throw new Error(`${label} XML 根節點外含有文字`);
      return;
    }
    stack[stack.length - 1].text += decodeEntities ? decodeXmlEntities(value, label) : value;
  }

  while (cursor < xml.length) {
    if (xml[cursor] !== "<") {
      const nextTag = xml.indexOf("<", cursor);
      const textEnd = nextTag < 0 ? xml.length : nextTag;
      appendText(xml.slice(cursor, textEnd));
      cursor = textEnd;
      continue;
    }
    if (xml.startsWith("<!--", cursor)) {
      const commentEnd = xml.indexOf("-->", cursor + 4);
      if (commentEnd < 0 || xml.slice(cursor + 4, commentEnd).includes("--")) {
        throw new Error(`${label} XML 註解未完整關閉或格式無效`);
      }
      cursor = commentEnd + 3;
      continue;
    }
    if (xml.startsWith("<![CDATA[", cursor)) {
      const cdataEnd = xml.indexOf("]]>", cursor + 9);
      if (cdataEnd < 0) throw new Error(`${label} XML CDATA 未完整關閉`);
      appendText(xml.slice(cursor + 9, cdataEnd), false);
      cursor = cdataEnd + 3;
      continue;
    }
    if (xml.startsWith("<?", cursor)) {
      const instructionEnd = xml.indexOf("?>", cursor + 2);
      if (instructionEnd < 0) throw new Error(`${label} XML processing instruction 未完整關閉`);
      cursor = instructionEnd + 2;
      continue;
    }
    if (xml.startsWith("</", cursor)) {
      const tagEnd = findXmlTagEnd(xml, cursor + 2, label);
      const closingName = xml.slice(cursor + 2, tagEnd).trim();
      if (!closingName || closingName !== readXmlName(closingName, 0)
        || stack.length === 0 || stack[stack.length - 1].name !== closingName) {
        throw new Error(`${label} XML 關閉標籤不一致`);
      }
      stack.pop();
      cursor = tagEnd + 1;
      continue;
    }
    if (xml.startsWith("<!", cursor)) {
      throw new Error(`${label} 不接受 DTD、entity 或其他 XML 宣告`);
    }

    const tagEnd = findXmlTagEnd(xml, cursor + 1, label);
    const parsed = parseXmlStartTag(xml.slice(cursor + 1, tagEnd), label);
    const node = { name: parsed.name, attributes: parsed.attributes, children: [], text: "" };
    if (stack.length === 0) {
      if (root) throw new Error(`${label} XML 只能有一個根節點`);
      root = node;
    } else {
      stack[stack.length - 1].children.push(node);
    }
    if (!parsed.selfClosing) stack.push(node);
    cursor = tagEnd + 1;
  }

  if (!root) throw new Error(`${label} XML 缺少根節點`);
  if (stack.length > 0) throw new Error(`${label} XML 標籤未完整關閉`);
  return root;
}

function xmlLocalName(node) {
  return node.name.slice(node.name.lastIndexOf(":") + 1);
}

function directXmlChildren(node, localName) {
  return node.children.filter(child => xmlLocalName(child) === localName);
}

function findXmlDescendants(node, localName) {
  const matches = [];
  const pending = [...node.children].reverse();
  while (pending.length > 0) {
    const child = pending.pop();
    if (xmlLocalName(child) === localName) matches.push(child);
    for (let index = child.children.length - 1; index >= 0; index -= 1) {
      pending.push(child.children[index]);
    }
  }
  return matches;
}

function parseKmlTuple(tuple) {
  const values = tuple.split(",");
  if (values.length < 2) throw new Error("KML coordinates 格式無效");
  const point = {
    lat: parseNumber(values[1], "KML latitude"),
    lng: parseNumber(values[0], "KML longitude")
  };
  if (values.length >= 3 && values[2].trim() !== "") {
    point.ele = parseNumber(values[2], "KML elevation");
  }
  return point;
}

function parseGeoJsonPoint(coordinate) {
  if (!Array.isArray(coordinate) || coordinate.length < 2) {
    throw new Error("GeoJSON LineString 座標格式無效");
  }
  const parseCoordinate = (value, label) => {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new Error(`${label} 必須是有限 number 數值`);
    }
    return value;
  };
  const point = {
    lat: parseCoordinate(coordinate[1], "GeoJSON latitude"),
    lng: parseCoordinate(coordinate[0], "GeoJSON longitude")
  };
  if (coordinate.length >= 3) {
    point.ele = parseCoordinate(coordinate[2], "GeoJSON elevation");
  }
  return point;
}

function parseGeoJsonLine(coordinates) {
  if (!Array.isArray(coordinates) || coordinates.length < 2) {
    throw new Error("GeoJSON LineString 必須至少包含兩個座標");
  }
  return coordinates.map(parseGeoJsonPoint);
}

function distanceMeters(start, end) {
  const radians = value => value * Math.PI / 180;
  const latDelta = radians(end.lat - start.lat);
  const lngDelta = radians(end.lng - start.lng);
  const startLat = radians(start.lat);
  const endLat = radians(end.lat);
  const haversine = Math.sin(latDelta / 2) ** 2
    + Math.cos(startLat) * Math.cos(endLat) * Math.sin(lngDelta / 2) ** 2;
  return 6371000 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function assertBuffer(buffer, label) {
  if (!Buffer.isBuffer(buffer)) throw new TypeError(`${label} 必須是 Buffer`);
  if (buffer.length > LIMITS.maxBytes) throw new Error(`${label} 大小不得超過 5 MB`);
  return buffer;
}

function assertZipPath(name) {
  const normalized = name.replace(/\\/g, "/");
  if (!name || name.includes("\0") || normalized.startsWith("/")
    || /^[A-Za-z]:\//.test(normalized)
    || normalized.split("/").includes("..")) {
    throw new Error(`KMZ entry 路徑不安全：${name}`);
  }
}

function decodeZipFilename(bytes) {
  try {
    return UTF8_DECODER.decode(bytes);
  } catch (error) {
    throw new Error("KMZ entry 檔名不是有效 UTF-8", { cause: error });
  }
}

function assertSupportedZipFlags(flags, name) {
  if ((flags & 0x0001) !== 0 || (flags & 0x0040) !== 0) {
    throw new Error(`KMZ 不接受加密 entry：${name}`);
  }
  if ((flags & 0x0008) !== 0) {
    throw new Error(`KMZ 不支援 data descriptor flag：${name}`);
  }
  if ((flags & ~ZIP_ALLOWED_FLAGS) !== 0) {
    throw new Error(`KMZ 不支援 general-purpose flag 0x${flags.toString(16)}：${name}`);
  }
}

function findEndOfCentralDirectory(buffer) {
  if (buffer.length < 22) throw new Error("KMZ ZIP 結構不完整");
  const minimum = Math.max(0, buffer.length - 22 - 0xffff);
  for (let offset = buffer.length - 22; offset >= minimum; offset -= 1) {
    if (buffer.readUInt32LE(offset) === ZIP_SIGNATURES.endOfCentralDirectory) return offset;
  }
  throw new Error("KMZ 缺少 ZIP central directory");
}

function readCentralEntries(buffer) {
  const eocdOffset = findEndOfCentralDirectory(buffer);
  const diskNumber = buffer.readUInt16LE(eocdOffset + 4);
  const centralDisk = buffer.readUInt16LE(eocdOffset + 6);
  const diskEntries = buffer.readUInt16LE(eocdOffset + 8);
  const totalEntries = buffer.readUInt16LE(eocdOffset + 10);
  const centralSize = buffer.readUInt32LE(eocdOffset + 12);
  const centralOffset = buffer.readUInt32LE(eocdOffset + 16);
  const commentLength = buffer.readUInt16LE(eocdOffset + 20);

  if (diskNumber !== 0 || centralDisk !== 0 || diskEntries !== totalEntries) {
    throw new Error("KMZ 不支援多磁碟 ZIP");
  }
  if (totalEntries === 0 || totalEntries === 0xffff
    || centralSize === 0xffffffff || centralOffset === 0xffffffff) {
    throw new Error("KMZ ZIP entry 或 ZIP64 結構無效");
  }
  if (eocdOffset + 22 + commentLength !== buffer.length
    || centralOffset + centralSize !== eocdOffset) {
    throw new Error("KMZ ZIP central directory 範圍無效");
  }

  const entries = [];
  let cursor = centralOffset;
  for (let index = 0; index < totalEntries; index += 1) {
    if (cursor + 46 > eocdOffset || buffer.readUInt32LE(cursor) !== ZIP_SIGNATURES.centralFile) {
      throw new Error("KMZ ZIP central directory entry 無效");
    }
    const flags = buffer.readUInt16LE(cursor + 8);
    const method = buffer.readUInt16LE(cursor + 10);
    const compressedSize = buffer.readUInt32LE(cursor + 20);
    const uncompressedSize = buffer.readUInt32LE(cursor + 24);
    const filenameLength = buffer.readUInt16LE(cursor + 28);
    const extraLength = buffer.readUInt16LE(cursor + 30);
    const entryCommentLength = buffer.readUInt16LE(cursor + 32);
    const diskStart = buffer.readUInt16LE(cursor + 34);
    const localHeaderOffset = buffer.readUInt32LE(cursor + 42);
    const nextCursor = cursor + 46 + filenameLength + extraLength + entryCommentLength;
    if (nextCursor > eocdOffset) throw new Error("KMZ ZIP entry 範圍無效");

    const filenameBytes = Buffer.from(buffer.subarray(cursor + 46, cursor + 46 + filenameLength));
    const name = decodeZipFilename(filenameBytes);
    assertZipPath(name);
    assertSupportedZipFlags(flags, name);
    if (method !== 0 && method !== 8) {
      throw new Error(`KMZ 不支援壓縮方法 ${method}`);
    }
    if (diskStart !== 0 || compressedSize === 0xffffffff
      || uncompressedSize === 0xffffffff || localHeaderOffset === 0xffffffff) {
      throw new Error("KMZ 不支援多磁碟或 ZIP64 entry");
    }
    entries.push({
      name,
      filenameBytes,
      flags,
      method,
      compressedSize,
      uncompressedSize,
      localHeaderOffset,
      centralOffset
    });
    cursor = nextCursor;
  }
  if (cursor !== eocdOffset) throw new Error("KMZ ZIP central directory 大小不一致");
  return entries;
}

function extractEntryPayload(buffer, entry) {
  const offset = entry.localHeaderOffset;
  if (offset + 30 > entry.centralOffset
    || buffer.readUInt32LE(offset) !== ZIP_SIGNATURES.localFile) {
    throw new Error("KMZ ZIP local header 無效");
  }
  const localFlags = buffer.readUInt16LE(offset + 6);
  const localMethod = buffer.readUInt16LE(offset + 8);
  const localCompressedSize = buffer.readUInt32LE(offset + 18);
  const localUncompressedSize = buffer.readUInt32LE(offset + 22);
  const filenameLength = buffer.readUInt16LE(offset + 26);
  const extraLength = buffer.readUInt16LE(offset + 28);
  const filenameStart = offset + 30;
  const payloadStart = filenameStart + filenameLength + extraLength;
  const payloadEnd = payloadStart + entry.compressedSize;
  if (payloadEnd > entry.centralOffset) throw new Error("KMZ ZIP payload 範圍無效");

  const localFilenameBytes = buffer.subarray(filenameStart, filenameStart + filenameLength);
  if (!localFilenameBytes.equals(entry.filenameBytes)
    || localFlags !== entry.flags || localMethod !== entry.method) {
    throw new Error("KMZ ZIP local header 與 central directory 不一致");
  }
  if (localCompressedSize !== entry.compressedSize
    || localUncompressedSize !== entry.uncompressedSize) {
    throw new Error("KMZ ZIP entry 大小不一致");
  }
  if (entry.compressedSize > LIMITS.maxBytes || entry.uncompressedSize > LIMITS.maxBytes) {
    throw new Error("KMZ KML 大小不得超過 5 MB");
  }

  const compressed = buffer.subarray(payloadStart, payloadEnd);
  let payload;
  if (entry.method === 0) {
    if (entry.compressedSize !== entry.uncompressedSize) {
      throw new Error("KMZ stored KML 大小不一致");
    }
    payload = Buffer.from(compressed);
  } else {
    try {
      payload = inflateRawSync(compressed, { maxOutputLength: LIMITS.maxBytes });
    } catch (error) {
      throw new Error("KMZ KML 解壓失敗或解壓後大小超過 5 MB", { cause: error });
    }
  }
  if (payload.length > LIMITS.maxBytes) throw new Error("KMZ KML 解壓後大小不得超過 5 MB");
  if (payload.length !== entry.uncompressedSize) throw new Error("KMZ KML 解壓後大小不一致");
  return payload;
}

export function parseGpxSegments(text) {
  const root = parseXmlDocument(text, "GPX");
  if (xmlLocalName(root) !== "gpx") throw new Error("GPX XML 根節點必須是 gpx");
  const segmentNodes = directXmlChildren(root, "trk")
    .flatMap(track => directXmlChildren(track, "trkseg"));
  if (segmentNodes.length === 0) throw new Error("GPX 未包含 trkseg 軌跡");

  return segmentNodes.map(segmentNode => directXmlChildren(segmentNode, "trkpt").map(pointNode => {
      const point = {
        lat: parseNumber(pointNode.attributes.get("lat") ?? "", "GPX lat"),
        lng: parseNumber(pointNode.attributes.get("lon") ?? "", "GPX lon")
      };
      const elevations = directXmlChildren(pointNode, "ele");
      if (elevations.length > 1) throw new Error("GPX trkpt 不得包含多個 ele");
      if (elevations.length === 1) point.ele = parseNumber(elevations[0].text, "GPX elevation");
      return point;
    }));
}

export function parseKmlSegments(text) {
  const root = parseXmlDocument(text, "KML");
  if (xmlLocalName(root) !== "kml") throw new Error("KML XML 根節點必須是 kml");
  const lineStrings = findXmlDescendants(root, "LineString");
  if (lineStrings.length === 0) throw new Error("KML 未包含 LineString 軌跡");

  return lineStrings.map(lineString => {
    const coordinates = directXmlChildren(lineString, "coordinates");
    if (coordinates.length !== 1 || coordinates[0].children.length > 0) {
      throw new Error("KML LineString 必須包含單一純文字 coordinates");
    }
    const tuples = coordinates[0].text.trim().split(/\s+/).filter(Boolean);
    if (tuples.length < 2) throw new Error("KML LineString 必須至少包含兩個座標");
    return tuples.map(parseKmlTuple);
  });
}

export function parseGeoJsonSegments(text) {
  const json = assertTextSize(text, "GeoJSON");
  let document;
  try {
    document = JSON.parse(json);
  } catch (error) {
    throw new Error("GeoJSON 格式無效", { cause: error });
  }
  const geometry = document?.type === "Feature" ? document.geometry : document;
  if (!geometry || (geometry.type !== "LineString" && geometry.type !== "MultiLineString")) {
    throw new Error("GeoJSON 只接受 LineString 或 MultiLineString 及其 Feature 包裝");
  }
  if (geometry.type === "LineString") return [parseGeoJsonLine(geometry.coordinates)];
  if (!Array.isArray(geometry.coordinates) || geometry.coordinates.length < 1) {
    throw new Error("GeoJSON MultiLineString 必須至少包含一段 LineString");
  }
  return geometry.coordinates.map(parseGeoJsonLine);
}

export function extractKmzKml(buffer) {
  assertBuffer(buffer, "KMZ");
  const kmlEntries = readCentralEntries(buffer)
    .filter(entry => entry.name.toLowerCase().endsWith(".kml"));
  if (kmlEntries.length !== 1) {
    throw new Error(`KMZ 必須包含單一 KML entry，目前為 ${kmlEntries.length} 個`);
  }
  return extractEntryPayload(buffer, kmlEntries[0]);
}

function contentTypeFormatHint(contentType) {
  const normalized = String(contentType).split(";", 1)[0].trim().toLowerCase();
  if (normalized === "application/gpx+xml") return "gpx";
  if (normalized === "application/vnd.google-earth.kml+xml") return "kml";
  if (normalized === "application/vnd.google-earth.kmz") return "kmz";
  if (normalized === "application/geo+json" || normalized === "application/json") return "geojson";
  return "";
}

function urlFormatHint(url) {
  let pathname;
  try {
    pathname = new URL(String(url)).pathname.toLowerCase();
  } catch {
    pathname = String(url).split(/[?#]/, 1)[0].toLowerCase();
  }
  if (pathname.endsWith(".gpx")) return "gpx";
  if (pathname.endsWith(".kml")) return "kml";
  if (pathname.endsWith(".kmz")) return "kmz";
  if (pathname.endsWith(".geojson") || pathname.endsWith(".json")) return "geojson";
  return "";
}

function detectContentFormat(buffer) {
  if (buffer.length >= 4 && buffer.readUInt32LE(0) === ZIP_SIGNATURES.localFile) return "kmz";
  const text = buffer.toString("utf8").replace(/^\uFEFF/, "").trimStart();
  if (/^(?:<!doctype\s+html\b|<html\b)/i.test(text)) {
    throw new Error("來源回應為 HTML，不是支援的軌跡格式");
  }
  if (text.startsWith("<")) {
    const root = parseXmlDocument(text, "來源");
    const rootName = xmlLocalName(root);
    if (rootName === "gpx" || rootName === "kml") return rootName;
    throw new Error(`來源 XML 根節點 ${rootName} 不是 GPX 或 KML 格式`);
  }
  if (text.startsWith("{") || text.startsWith("[")) {
    parseGeoJsonSegments(text);
    return "geojson";
  }
  throw new Error("無法由實際內容判斷來源軌跡格式");
}

export function detectFormat({ buffer, contentType = "", url = "" }) {
  assertBuffer(buffer, "來源檔案");
  if (buffer.length === 0) throw new Error("來源檔案為空，無法判斷格式");

  const normalizedContentType = String(contentType).split(";", 1)[0].trim().toLowerCase();
  if (normalizedContentType.includes("html")) {
    throw new Error("來源回應為 HTML，不是支援的軌跡格式");
  }
  const sourceFormat = detectContentFormat(buffer);
  const hints = [
    ["Content-Type", contentTypeFormatHint(contentType)],
    ["URL", urlFormatHint(url)]
  ];
  for (const [label, hint] of hints) {
    if (hint && hint !== sourceFormat) {
      throw new Error(`${label} 格式 hint ${hint} 與實際內容 ${sourceFormat} 衝突`);
    }
  }
  return sourceFormat;
}

export function parseTrackPayload({ buffer, contentType = "", url = "" }) {
  const sourceFormat = detectFormat({ buffer, contentType, url });
  let segments;
  if (sourceFormat === "kmz") {
    segments = parseKmlSegments(extractKmzKml(buffer).toString("utf8"));
  } else if (sourceFormat === "kml") {
    segments = parseKmlSegments(buffer.toString("utf8"));
  } else if (sourceFormat === "gpx") {
    segments = parseGpxSegments(buffer.toString("utf8"));
  } else {
    segments = parseGeoJsonSegments(buffer.toString("utf8"));
  }
  return { sourceFormat, segments };
}

export function validateSegments(segments, options = {}) {
  const sourceId = typeof options.sourceId === "string" && options.sourceId.trim()
    ? options.sourceId
    : "來源";
  const maxSegmentGapMeters = options.maxSegmentGapMeters ?? LIMITS.maxSegmentGapMeters;
  if (!Number.isFinite(maxSegmentGapMeters) || maxSegmentGapMeters <= 0
    || maxSegmentGapMeters > LIMITS.maxSegmentGapMeters) {
    throw new Error(`${sourceId} 的最大同段跳點必須介於 0 與 ${LIMITS.maxSegmentGapMeters} m`);
  }
  if (!Array.isArray(segments) || segments.length < 1) {
    throw new Error(`${sourceId} 必須至少包含一段且每段至少兩個座標`);
  }
  if (segments.length > LIMITS.maxSegments) {
    throw new Error(`${sourceId} 分段不得超過 ${LIMITS.maxSegments.toLocaleString("en-US")} 段`);
  }

  let totalPoints = 0;
  for (let segmentIndex = 0; segmentIndex < segments.length; segmentIndex += 1) {
    const segment = segments[segmentIndex];
    if (!Array.isArray(segment) || segment.length < 2) {
      throw new Error(`${sourceId} 必須至少包含一段且每段至少兩個座標`);
    }
    totalPoints += segment.length;
    if (totalPoints > LIMITS.maxPoints) {
      throw new Error(`${sourceId} 座標點不得超過 ${LIMITS.maxPoints.toLocaleString("en-US")} 點`);
    }

    for (let pointIndex = 0; pointIndex < segment.length; pointIndex += 1) {
      const point = segment[pointIndex];
      if (!point || typeof point !== "object"
        || !Number.isFinite(point.lat) || !Number.isFinite(point.lng)
        || (Object.hasOwn(point, "ele") && !Number.isFinite(point.ele))) {
        throw new Error(`${sourceId} 包含非有限座標或海拔`);
      }
      if (point.lat < LIMITS.taiwan.minLat || point.lat > LIMITS.taiwan.maxLat
        || point.lng < LIMITS.taiwan.minLng || point.lng > LIMITS.taiwan.maxLng) {
        throw new Error(`${sourceId} 包含不在台灣範圍內的座標`);
      }
      if (pointIndex > 0) {
        const gap = distanceMeters(segment[pointIndex - 1], point);
        if (gap >= maxSegmentGapMeters) {
          throw new Error(`${sourceId} 第 ${segmentIndex + 1} 段相鄰點間距 ${gap.toFixed(1)} m，不得達到 ${maxSegmentGapMeters} m`);
        }
      }
    }
  }
  return segments;
}

export function summarizeTrack(buffer, sourceFormat, segments) {
  return {
    sourceFormat,
    sourceSha256: createHash("sha256").update(buffer).digest("hex"),
    segmentCount: segments.length,
    totalPoints: segments.reduce((sum, segment) => sum + segment.length, 0),
    bounds: {
      minLat: Math.min(...segments.flat().map(point => point.lat)),
      maxLat: Math.max(...segments.flat().map(point => point.lat)),
      minLng: Math.min(...segments.flat().map(point => point.lng)),
      maxLng: Math.max(...segments.flat().map(point => point.lng))
    }
  };
}
