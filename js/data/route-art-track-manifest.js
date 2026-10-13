"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      RouteArtTrackManifest: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  return Object.freeze({
    "gps-art-qixi-confession-rose": Object.freeze({
      bundleId: "gps-art-qixi-confession-rose",
      src: "js/data/tracks/gps-art-qixi-confession-rose.js"
    })
  });
});
