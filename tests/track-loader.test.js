"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const TrackRegistry = require("../js/core/track-registry.js");

function loadLoader() {
  try {
    return require("../js/core/track-loader.js");
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      return { create: () => ({ load: () => Promise.resolve(null) }) };
    }
    throw error;
  }
}

function createDocument() {
  const scripts = [];
  const head = {
    append(script) {
      scripts.push(script);
    }
  };

  return {
    baseURI: "file:///atlas/index.html",
    head,
    scripts,
    createElement(tagName) {
      assert.equal(tagName, "script");
      return {
        remove() {
          this.removed = true;
        }
      };
    }
  };
}

test("同一 bundle 的並行請求只插入一次 script 並共用載入 Promise", async () => {
  const documentRef = createDocument();
  const loader = loadLoader().create({
    documentRef,
    registry: TrackRegistry,
    manifest: {
      "taipei-demo": { bundleId: "taipei", src: "js/data/tracks/taipei.js" }
    },
    baseUrl: "file:///atlas/"
  });

  const first = loader.load("taipei-demo");
  const second = loader.load("taipei-demo");

  assert.strictEqual(first, second);
  assert.equal(documentRef.scripts.length, 1);
  assert.equal(documentRef.scripts[0].src, "file:///atlas/js/data/tracks/taipei.js");

  TrackRegistry.register("taipei", {
    "taipei-demo": { coordinates: [{ lat: 25, lng: 121, ele: 10 }] }
  });
  documentRef.scripts[0].onload();

  assert.deepEqual(await first, {
    coordinates: [{ lat: 25, lng: 121, ele: 10 }]
  });
});

test("載入失敗會移除 script 並讓下一次請求重新嘗試", async () => {
  const documentRef = createDocument();
  const loader = loadLoader().create({
    documentRef,
    registry: TrackRegistry,
    manifest: {
      "retry-route": { bundleId: "retry", src: "js/data/tracks/retry.js" }
    },
    baseUrl: "https://example.github.io/crown-ride-atlas/"
  });

  const failed = loader.load("retry-route");
  documentRef.scripts[0].onerror();

  await assert.rejects(failed, /軌跡 bundle 載入失敗/);
  assert.equal(documentRef.scripts[0].removed, true);

  const retried = loader.load("retry-route");
  assert.equal(documentRef.scripts.length, 2);
  assert.equal(
    documentRef.scripts[1].src,
    "https://example.github.io/crown-ride-atlas/js/data/tracks/retry.js"
  );

  TrackRegistry.register("retry", {
    "retry-route": { coordinates: [{ lat: 24, lng: 120, ele: 1 }] }
  });
  documentRef.scripts[1].onload();

  assert.deepEqual(await retried, {
    coordinates: [{ lat: 24, lng: 120, ele: 1 }]
  });
});
