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
  const STORAGE_KEY = "crownRideAtlas.v1";
  const VERSION = 1;

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

  function isText(value) {
    return typeof value === "string" && Boolean(value.trim());
  }

  function isTextList(value) {
    return Array.isArray(value) && value.length > 0 && value.every(isText);
  }

  function isValidRoute(route) {
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
      isTextList(route.supplies) &&
      Array.isArray(route.coordinates) &&
      route.coordinates.length >= 2 &&
      route.coordinates.every(isCoordinate)
    );
  }

  function isValidOverride(route) {
    return Boolean(route && typeof route.id === "string" && route.id.trim());
  }

  function normalizeState(value, builtInById) {
    if (!value || value.version !== VERSION) return emptyState();
    const builtInMap = builtInById || new Map();
    const overrides = Array.isArray(value.overrides) ? value.overrides : [];
    return {
      version: VERSION,
      additions: Array.isArray(value.additions) ? value.additions.filter(isValidRoute).map(clone) : [],
      overrides: overrides
        .filter(isValidOverride)
        .filter(route => {
          const base = builtInMap.get(route.id);
          return Boolean(base && isValidRoute(Object.assign({}, base, route)));
        })
        .map(clone),
      deleted: Array.isArray(value.deleted)
        ? [...new Set(value.deleted.filter(id => typeof id === "string" && id.trim()))]
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
    if (!value || value.version !== VERSION) {
      throw new Error("不支援此備份版本。");
    }
    return value;
  }

  function readState(storage, builtInById) {
    try {
      const raw = storage && storage.getItem(STORAGE_KEY);
      return raw ? normalizeState(JSON.parse(raw), builtInById) : emptyState();
    } catch (_error) {
      return emptyState();
    }
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
        .map(route => Object.assign({}, clone(route), clone(overrides.get(route.id) || {})));
      const additions = state.additions
        .filter(route => !deleted.has(route.id) && !builtInIds.has(route.id))
        .map(clone);
      return baseRoutes.concat(additions);
    }

    function save(route) {
      if (!route || typeof route.name !== "string" || !route.name.trim()) {
        throw new Error("路線名稱不得為空白。");
      }
      if (!Array.isArray(route.coordinates) || route.coordinates.length < 2 || !route.coordinates.every(isCoordinate)) {
        throw new Error("路線至少需要兩個有效座標。");
      }
      if (!isValidRoute(route)) {
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
      const additions = Array.isArray(backup.additions) ? backup.additions : [];
      const overrides = Array.isArray(backup.overrides) ? backup.overrides : [];
      const validAdditions = additions.filter(isValidRoute);
      const validOverrides = overrides
        .filter(isValidOverride)
        .filter(route => {
          const base = builtInById.get(route.id);
          return Boolean(base && isValidRoute(Object.assign({}, base, route)));
        });
      const invalid = additions.length - validAdditions.length + overrides.length - validOverrides.length;
      const currentIds = new Set(list().map(route => route.id));
      const conflicts = validAdditions.concat(validOverrides).filter(route => currentIds.has(route.id)).length;

      return {
        valid: validAdditions.length + validOverrides.length,
        invalid,
        conflicts
      };
    }

    function importJson(jsonText) {
      const backup = parseBackup(jsonText);
      const additions = Array.isArray(backup.additions) ? backup.additions : [];
      const overrides = Array.isArray(backup.overrides) ? backup.overrides : [];
      const validAdditions = additions.filter(isValidRoute);
      const validOverrides = overrides
        .filter(isValidOverride)
        .filter(route => {
          const base = builtInById.get(route.id);
          return Boolean(base && isValidRoute(Object.assign({}, base, route)));
        });
      const next = normalizeState({
        version: VERSION,
        additions: validAdditions,
        overrides: validOverrides,
        deleted: Array.isArray(backup.deleted) ? backup.deleted : []
      }, builtInById);
      persist(next);

      return {
        imported: validAdditions.length + validOverrides.length,
        skipped: additions.length - validAdditions.length + overrides.length - validOverrides.length
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
    VERSION,
    isValidRoute,
    create
  };
});
