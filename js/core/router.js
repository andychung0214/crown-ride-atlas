"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Router: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const fixedPages = new Set(["home", "routes", "challenges", "route-art", "editor"]);

  function parseHash(hash) {
    const value = String(hash || "").replace(/^#/, "");
    const path = value === "" || value === "/" ? "/home" : value;
    const segments = path.split("/").filter(Boolean);

    if (segments.length === 1 && fixedPages.has(segments[0])) {
      return { page: segments[0], params: {} };
    }

    if (segments.length === 2 && (segments[0] === "route" || segments[0] === "region")) {
      try {
        const decoded = decodeURIComponent(segments[1]);
        if (!decoded) return { page: "not-found", params: {} };
        return segments[0] === "route"
          ? { page: "route", params: { routeId: decoded } }
          : { page: "region", params: { regionId: decoded } };
      } catch (_error) {
        return { page: "not-found", params: {} };
      }
    }

    return { page: "not-found", params: {} };
  }

  function routeHref(page, value) {
    const safePage = fixedPages.has(page) || page === "route" || page === "region" ? page : "home";
    if (safePage === "route" || safePage === "region") {
      return `#/${safePage}/${encodeURIComponent(String(value || ""))}`;
    }
    return `#/${safePage}`;
  }

  return {
    parseHash,
    routeHref
  };
});
