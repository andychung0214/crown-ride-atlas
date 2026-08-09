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

  const GRADE_BANDS = Object.freeze({
    "5-9": [5, 9],
    "10-14": [10, 14],
    "15-19": [15, 19],
    "20-25": [20, 25]
  });

  const DURATION_BANDS = Object.freeze({
    "under-1h": [0, 59],
    "1-2h": [60, 119],
    "2-3h": [120, 179],
    "3-4h": [180, 239],
    "4-5h": [240, 299],
    "5-8h": [300, 479],
    "8-12h": [480, 719],
    "12h-plus": [720, Infinity]
  });

  const AREA_ALIASES = Object.freeze({
    north: "north",
    "北部": "north",
    "北台灣": "north",
    central: "central",
    "中部": "central",
    "中台灣": "central",
    south: "south",
    "南部": "south",
    "南台灣": "south",
    east: "east",
    "東部": "east",
    "東台灣": "east"
  });

  function areaIdFor(route) {
    return normalize(route && (route.areaId || route.area))
      ? AREA_ALIASES[route.areaId] || AREA_ALIASES[route.area] || normalize(route.areaId || route.area)
      : "";
  }

  function inBand(value, bands, key) {
    if (!key) return true;
    const band = bands[key];
    const number = Number(value);
    return Boolean(band)
      && Number.isFinite(number)
      && number >= band[0]
      && number <= band[1];
  }

  function matchesGrade(route, key) {
    if (!key) return true;
    if (typeof route.gradeBand === "string" && route.gradeBand === key) return true;
    return inBand(route.maxGradePct, GRADE_BANDS, key);
  }

  function matchesDuration(route, key) {
    if (!key) return true;
    if (typeof route.durationBand === "string" && route.durationBand === key) return true;
    return inBand(route.durationMinutes, DURATION_BANDS, key);
  }

  function compareDateDesc(a, b) {
    const aTime = Date.parse(a.createdAt || "");
    const bTime = Date.parse(b.createdAt || "");
    return (Number.isFinite(bTime) ? bTime : 0) - (Number.isFinite(aTime) ? aTime : 0);
  }

  function compareName(a, b) {
    return String(a.name || "").localeCompare(String(b.name || ""), "zh-Hant")
      || String(a.id || "").localeCompare(String(b.id || ""), "en");
  }

  function compareWithTie(a, b, primary) {
    return primary(a, b) || compareFeatured(a, b) || compareDateDesc(a, b) || compareName(a, b);
  }

  function sorter(sort) {
    if (sort === "latest") {
      return (a, b) => compareWithTie(a, b, compareDateDesc);
    }
    if (sort === "difficulty-asc") {
      return (a, b) => compareWithTie(a, b, (left, right) => Number(left.difficulty) - Number(right.difficulty));
    }
    if (sort === "difficulty-desc") {
      return (a, b) => compareWithTie(a, b, (left, right) => Number(right.difficulty) - Number(left.difficulty));
    }
    if (sort === "distance-asc") {
      return (a, b) => compareWithTie(a, b, (left, right) => Number(left.distanceKm) - Number(right.distanceKm));
    }
    if (sort === "elevation-desc") {
      return (a, b) => compareWithTie(a, b, (left, right) => Number(right.elevationGainM) - Number(left.elevationGainM));
    }
    if (sort === "name") {
      return (a, b) => compareName(a, b);
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
      .filter(route => !filters.areaId || areaIdFor(route) === normalize(filters.areaId))
      .filter(route => !Number.isInteger(difficulty) || difficulty < 1 || Number(route.difficulty) === difficulty)
      .filter(route => matchesGrade(route, normalize(filters.gradeBand)))
      .filter(route => matchesDuration(route, normalize(filters.durationBand)))
      .slice()
      .sort(sorter(filters.sort));
  }

  function paginate(items, page, pageSize) {
    const source = Array.isArray(items) ? items : [];
    const size = Math.max(1, Math.floor(Number(pageSize) || 24));
    const totalPages = Math.max(1, Math.ceil(source.length / size));
    const current = Math.min(totalPages, Math.max(1, Math.floor(Number(page) || 1)));
    return {
      items: source.slice((current - 1) * size, current * size),
      page: current,
      pageSize: size,
      total: source.length,
      totalPages
    };
  }

  return {
    normalize,
    apply,
    paginate,
    GRADE_BANDS,
    DURATION_BANDS
  };
});
