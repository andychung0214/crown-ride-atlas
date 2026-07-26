"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      TrackLoader: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  function create(options) {
    const settings = options || {};
    const documentRef = settings.documentRef;
    const registry = settings.registry;
    const manifest = settings.manifest || {};
    const baseUrl = settings.baseUrl || (documentRef && documentRef.baseURI);
    const routePromises = new Map();
    const bundlePromises = new Map();
    const bundleScripts = new Map();

    function getEntry(routeId) {
      const entry = manifest[routeId];
      if (!entry || typeof entry.bundleId !== "string" || typeof entry.src !== "string") {
        throw new Error(`找不到路線軌跡：${routeId}`);
      }
      return entry;
    }

    function removeScript(script) {
      if (typeof script.remove === "function") {
        script.remove();
      } else if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    }

    function clearBundle(bundleId, bundlePromise) {
      if (bundlePromises.get(bundleId) !== bundlePromise) return;
      bundlePromises.delete(bundleId);
      const record = bundleScripts.get(bundleId);
      if (record && record.promise === bundlePromise) {
        bundleScripts.delete(bundleId);
        removeScript(record.script);
      }
    }

    function loadBundle(entry) {
      const current = bundlePromises.get(entry.bundleId);
      if (current) return current;
      if (!documentRef || !documentRef.head || !registry || typeof registry.get !== "function") {
        return Promise.reject(new Error("軌跡載入器設定無效。"));
      }

      const script = documentRef.createElement("script");
      script.async = true;
      script.src = new URL(entry.src, baseUrl).href;

      let resolveBundle;
      let rejectBundle;
      const bundlePromise = new Promise((resolve, reject) => {
        resolveBundle = resolve;
        rejectBundle = reject;
      });
      bundlePromises.set(entry.bundleId, bundlePromise);
      bundleScripts.set(entry.bundleId, { script, promise: bundlePromise });

      script.onload = () => resolveBundle();
      script.onerror = () => {
        clearBundle(entry.bundleId, bundlePromise);
        rejectBundle(new Error(`軌跡 bundle 載入失敗：${entry.bundleId}`));
      };
      documentRef.head.append(script);
      return bundlePromise;
    }

    function load(routeId) {
      if (routePromises.has(routeId)) return routePromises.get(routeId);

      let entry;
      try {
        entry = getEntry(routeId);
      } catch (error) {
        return Promise.reject(error);
      }

      const registered = registry && typeof registry.get === "function" ? registry.get(routeId) : null;
      if (registered) {
        const cached = Promise.resolve(registered);
        routePromises.set(routeId, cached);
        return cached;
      }

      const bundlePromise = loadBundle(entry);
      let routePromise = bundlePromise.then(() => {
        const track = registry.get(routeId);
        if (!track) {
          clearBundle(entry.bundleId, bundlePromise);
          throw new Error(`軌跡 bundle 未註冊路線：${routeId}`);
        }
        return track;
      });
      routePromise = routePromise.catch(error => {
        if (routePromises.get(routeId) === routePromise) routePromises.delete(routeId);
        throw error;
      });
      routePromises.set(routeId, routePromise);
      return routePromise;
    }

    function clear(routeId) {
      if (typeof routeId === "string") {
        routePromises.delete(routeId);
      } else {
        routePromises.clear();
      }
    }

    return { load, clear };
  }

  return { create };
});
