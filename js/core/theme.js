"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Theme: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const STORAGE_KEY = "crownRideAtlas.theme";
  const themes = Object.freeze(["yellow", "green", "polka", "white"]);

  function isTheme(value) {
    return themes.includes(value);
  }

  function resolveTheme(value) {
    return isTheme(value) ? value : "yellow";
  }

  function applyTheme(value, documentElement, storage) {
    const theme = resolveTheme(value);

    if (documentElement && documentElement.dataset) {
      documentElement.dataset.theme = theme;
    }

    try {
      if (storage && typeof storage.setItem === "function") {
        storage.setItem(STORAGE_KEY, theme);
      }
    } catch (_error) {
      // 主題仍套用於目前頁面；本機儲存失敗不應阻斷操作。
    }

    return theme;
  }

  function loadTheme(storage) {
    try {
      return resolveTheme(storage && storage.getItem(STORAGE_KEY));
    } catch (_error) {
      return "yellow";
    }
  }

  return {
    STORAGE_KEY,
    themes,
    isTheme,
    resolveTheme,
    applyTheme,
    loadTheme
  };
});
