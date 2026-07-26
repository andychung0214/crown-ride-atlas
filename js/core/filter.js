"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Filter: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  function normalize(value) {
    return String(value == null ? "" : value)
      .normalize("NFKC")
      .toLocaleLowerCase("zh-Hant")
      .trim();
  }

  function searchableText(route) {
    return normalize([
      route.name,
      route.regionName,
      route.category,
      ...(Array.isArray(route.tags) ? route.tags : [])
    ].join(" "));
  }

  function compareFeatured(a, b) {
    return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
  }

  function sorter(sort) {
    if (sort === "distance-asc") {
      return (a, b) => a.distanceKm - b.distanceKm || compareFeatured(a, b);
    }
    if (sort === "elevation-desc") {
      return (a, b) => b.elevationGainM - a.elevationGainM || compareFeatured(a, b);
    }
    if (sort === "name") {
      return (a, b) => String(a.name).localeCompare(String(b.name), "zh-Hant");
    }
    return compareFeatured;
  }

  function apply(routes, options) {
    const source = Array.isArray(routes) ? routes : [];
    const filters = options || {};
    const query = normalize(filters.query);
    const regionId = normalize(filters.regionId);
    const difficulty = Number(filters.difficulty);

    return source
      .filter(route => !query || searchableText(route).includes(query))
      .filter(route => !regionId || normalize(route.regionId) === regionId)
      .filter(route => !Number.isInteger(difficulty) || difficulty < 1 || Number(route.difficulty) === difficulty)
      .slice()
      .sort(sorter(filters.sort));
  }

  return {
    normalize,
    apply
  };
});
