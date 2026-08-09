"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Progress: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const STORAGE_KEY = "crownRideAtlas.completed";

  function normalizeId(value) {
    if (typeof value !== "string") return null;
    const id = value.trim();
    return id ? id : null;
  }

  function readIds(storage) {
    try {
      const raw = storage && typeof storage.getItem === "function"
        ? storage.getItem(STORAGE_KEY)
        : null;
      const parsed = raw ? JSON.parse(raw) : [];
      return new Set(
        (Array.isArray(parsed) ? parsed : [])
          .map(normalizeId)
          .filter(Boolean)
      );
    } catch (_error) {
      return new Set();
    }
  }

  function create(storage) {
    let completed = readIds(storage);

    function persist(next) {
      try {
        if (!storage || typeof storage.setItem !== "function") throw new Error("storage unavailable");
        storage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch (_error) {
        throw new Error("瀏覽器儲存空間不足或目前無法使用。");
      }
      completed = next;
    }

    function list() {
      return new Set(completed);
    }

    function has(routeId) {
      const id = normalizeId(routeId);
      return Boolean(id && completed.has(id));
    }

    function toggle(routeId) {
      const id = normalizeId(routeId);
      if (!id) return false;
      const next = new Set(completed);
      const nextValue = !next.has(id);
      if (nextValue) next.add(id);
      else next.delete(id);
      persist(next);
      return nextValue;
    }

    function clear() {
      persist(new Set());
    }

    return { list, has, toggle, clear };
  }

  return { STORAGE_KEY, create };
});
