"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Store: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const STORAGE_KEY = "crownRideAtlas.v2";
  const LEGACY_STORAGE_KEY = "crownRideAtlas.v1";
  const VERSION = 2;
  const LEGACY_VERSION = 1;

  function clone(value) {
    if (typeof structuredClone === "function") return structuredClone(value);
    return JSON.parse(JSON.stringify(value));
  }

  function emptyState() {
    return {
      version: VERSION,
      additions: [],
      overrides: [],
      deleted: []
    };
  }

  function isCoordinate(point) {
    return Boolean(
      point &&
      Number.isFinite(point.lat) &&
      Number.isFinite(point.lng) &&
      Number.isFinite(point.ele) &&
      point.lat >= -90 &&
      point.lat <= 90 &&
      point.lng >= -180 &&
      point.lng <= 180
    );
  }

  function hasValidCoordinates(route) {
    return Boolean(
      route &&
      Array.isArray(route.coordinates) &&
      route.coordinates.length >= 2 &&
      route.coordinates.every(isCoordinate)
    );
  }

  function isText(value) {
    return typeof value === "string" && Boolean(value.trim());
  }

  function isTextList(value) {
    return Array.isArray(value) && value.length > 0 && value.every(isText);
  }

  function hasValidMetadata(route) {
    return Boolean(
      route &&
      isText(route.id) &&
      isText(route.slug) &&
      isText(route.name) &&
      isText(route.regionId) &&
      isText(route.regionName) &&
      isText(route.area) &&
      isText(route.category) &&
      isText(route.summary) &&
      isText(route.story) &&
      isText(route.thumbnail) &&
      Number.isFinite(route.distanceKm) &&
      route.distanceKm > 0 &&
      Number.isFinite(route.elevationGainM) &&
      route.elevationGainM >= 0 &&
      Number.isInteger(route.difficulty) &&
      route.difficulty >= 1 &&
      route.difficulty <= 5 &&
      Number.isFinite(route.durationMinutes) &&
      route.durationMinutes > 0 &&
      isTextList(route.tags) &&
      isTextList(route.cautions) &&
      isTextList(route.supplies)
    );
  }

  function isValidBuiltInRoute(route) {
    return Boolean(
      hasValidMetadata(route) &&
      route.trackRef === route.id &&
      route.trackSource !== "local" &&
      (!Object.hasOwn(route, "coordinates") || hasValidCoordinates(route))
    );
  }

  function isValidLocalRoute(route) {
    return Boolean(
      hasValidMetadata(route) &&
      route.trackSource === "local" &&
      !isText(route.trackRef) &&
      hasValidCoordinates(route)
    );
  }

  function isValidRoute(route) {
    return route && route.trackSource === "local"
      ? isValidLocalRoute(route)
      : isValidBuiltInRoute(route);
  }

  function isValidLegacyRoute(route) {
    return hasValidMetadata(route) && hasValidCoordinates(route);
  }

  function isValidOverride(route) {
    return Boolean(route && isText(route.id));
  }

  function migrateLegacyAddition(route) {
    if (!isValidLegacyRoute(route)) return null;
    const migrated = Object.assign({}, clone(route), { trackSource: "local" });
    delete migrated.trackRef;
    return migrated;
  }

  function normalizeOverride(route, sourceVersion, builtInById) {
    if (!isValidOverride(route)) return null;
    const base = builtInById.get(route.id);
    if (!base) return null;

    if (sourceVersion === LEGACY_VERSION) {
      if (Object.hasOwn(route, "coordinates")) {
        if (!hasValidCoordinates(route)) return null;
        const migrated = Object.assign({}, clone(base), clone(route), { trackSource: "local" });
        delete migrated.trackRef;
        return isValidLocalRoute(migrated) ? migrated : null;
      }

      const mergedLegacyMetadata = Object.assign({}, clone(base), clone(route));
      return isValidBuiltInRoute(mergedLegacyMetadata) ? clone(route) : null;
    }

    const normalized = clone(route);
    const merged = Object.assign({}, clone(base), normalized);
    if (merged.trackSource === "local") {
      delete merged.trackRef;
      delete normalized.trackRef;
    }
    return isValidRoute(merged) ? normalized : null;
  }

  function validEntries(value, builtInById) {
    const sourceVersion = value.version;
    const additions = Array.isArray(value.additions) ? value.additions : [];
    const overrides = Array.isArray(value.overrides) ? value.overrides : [];
    const validAdditions = additions
      .map(route => sourceVersion === LEGACY_VERSION ? migrateLegacyAddition(route) : (isValidLocalRoute(route) ? clone(route) : null))
      .filter(Boolean);
    const validOverrides = overrides
      .map(route => normalizeOverride(route, sourceVersion, builtInById))
      .filter(Boolean);

    return {
      additions: validAdditions,
      overrides: validOverrides,
      invalid: additions.length - validAdditions.length + overrides.length - validOverrides.length
    };
  }

  function normalizeState(value, builtInById) {
    if (!value || (value.version !== VERSION && value.version !== LEGACY_VERSION)) return emptyState();
    const entries = validEntries(value, builtInById || new Map());
    return {
      version: VERSION,
      additions: entries.additions,
      overrides: entries.overrides,
      deleted: Array.isArray(value.deleted)
        ? [...new Set(value.deleted.filter(isText))]
        : []
    };
  }

  function parseBackup(jsonText) {
    let value;
    try {
      value = JSON.parse(String(jsonText || ""));
    } catch (_error) {
      throw new Error("無法解析備份格式。");
    }
    if (!value || (value.version !== VERSION && value.version !== LEGACY_VERSION)) {
      throw new Error("不支援此備份版本。");
    }
    return value;
  }

  function readStoredJson(storage, key) {
    try {
      const raw = storage && storage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (_error) {
      return null;
    }
  }

  function readState(storage, builtInById) {
    const current = readStoredJson(storage, STORAGE_KEY);
    if (current && current.version === VERSION) {
      return normalizeState(current, builtInById);
    }

    const legacy = readStoredJson(storage, LEGACY_STORAGE_KEY);
    if (!legacy || legacy.version !== LEGACY_VERSION) return emptyState();
    const migrated = normalizeState(legacy, builtInById);
    try {
      if (storage && typeof storage.setItem === "function") {
        storage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      }
    } catch (_error) {
      // 保留已轉換的記憶體狀態；後續寫入仍會明確回報儲存空間錯誤。
    }
    return migrated;
  }

  function create(storage, builtInRoutes) {
    const builtIn = clone(Array.isArray(builtInRoutes) ? builtInRoutes : []);
    const builtInIds = new Set(builtIn.map(route => route.id));
    const builtInById = new Map(builtIn.map(route => [route.id, route]));
    let state = readState(storage, builtInById);

    function persist(nextState) {
      const normalized = normalizeState(nextState, builtInById);
      try {
        if (!storage || typeof storage.setItem !== "function") {
          throw new Error("storage unavailable");
        }
        storage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      } catch (_error) {
        throw new Error("瀏覽器儲存空間不足或目前無法使用。");
      }
      state = normalized;
    }

    function list() {
      const deleted = new Set(state.deleted);
      const overrides = new Map(state.overrides.map(route => [route.id, route]));
      const baseRoutes = builtIn
        .filter(route => !deleted.has(route.id))
        .map(route => {
          const result = Object.assign({}, clone(route), clone(overrides.get(route.id) || {}));
          if (result.trackSource === "local") delete result.trackRef;
          return result;
        });
      const additions = state.additions
        .filter(route => !deleted.has(route.id) && !builtInIds.has(route.id))
        .map(clone);
      return baseRoutes.concat(additions);
    }

    function save(route) {
      if (!route || typeof route.name !== "string" || !route.name.trim()) {
        throw new Error("路線名稱不得為空白。");
      }
      if (route.trackSource === "local" && !hasValidCoordinates(route)) {
        throw new Error("路線至少需要兩個有效座標。");
      }
      if (!isValidRoute(route) || (!builtInIds.has(route.id) && !isValidLocalRoute(route))) {
        throw new Error("路線資料不完整或格式不正確。");
      }

      const saved = clone(route);
      const next = clone(state);
      next.deleted = next.deleted.filter(id => id !== saved.id);

      if (builtInIds.has(saved.id)) {
        next.overrides = next.overrides.filter(item => item.id !== saved.id).concat(saved);
      } else {
        next.additions = next.additions.filter(item => item.id !== saved.id).concat(saved);
      }

      persist(next);
      return clone(saved);
    }

    function remove(routeId) {
      const id = String(routeId || "");
      const next = clone(state);
      next.additions = next.additions.filter(route => route.id !== id);
      next.overrides = next.overrides.filter(route => route.id !== id);
      if (builtInIds.has(id) && !next.deleted.includes(id)) next.deleted.push(id);
      persist(next);
    }

    function reset() {
      try {
        if (storage && typeof storage.removeItem === "function") {
          storage.removeItem(STORAGE_KEY);
          storage.removeItem(LEGACY_STORAGE_KEY);
        }
      } catch (_error) {
        throw new Error("目前無法重設本機資料。");
      }
      state = emptyState();
    }

    function exportJson() {
      return JSON.stringify(
        Object.assign({}, clone(state), {
          exportedAt: new Date().toISOString()
        }),
        null,
        2
      );
    }

    function previewImport(jsonText) {
      const backup = parseBackup(jsonText);
      const entries = validEntries(backup, builtInById);
      const currentIds = new Set(list().map(route => route.id));
      const conflicts = entries.additions
        .concat(entries.overrides)
        .filter(route => currentIds.has(route.id))
        .length;

      return {
        valid: entries.additions.length + entries.overrides.length,
        invalid: entries.invalid,
        conflicts,
        sourceVersion: backup.version
      };
    }

    function importJson(jsonText) {
      const backup = parseBackup(jsonText);
      const entries = validEntries(backup, builtInById);
      persist({
        version: VERSION,
        additions: entries.additions,
        overrides: entries.overrides,
        deleted: Array.isArray(backup.deleted) ? backup.deleted : []
      });

      return {
        imported: entries.additions.length + entries.overrides.length,
        skipped: entries.invalid
      };
    }

    return {
      list,
      save,
      remove,
      reset,
      exportJson,
      previewImport,
      importJson
    };
  }

  return {
    STORAGE_KEY,
    LEGACY_STORAGE_KEY,
    VERSION,
    isValidBuiltInRoute,
    isValidLocalRoute,
    isValidRoute,
    create
  };
});
