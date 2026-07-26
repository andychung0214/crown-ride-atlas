"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const ImageTools = require("../js/core/image.js");

test("只接受 JPEG、PNG 與 WebP 且限制 10MB", () => {
  assert.doesNotThrow(() => ImageTools.validate({ type: "image/jpeg", size: 1024 }));
  assert.doesNotThrow(() => ImageTools.validate({ type: "image/png", size: 1024 }));
  assert.doesNotThrow(() => ImageTools.validate({ type: "image/webp", size: 1024 }));
  assert.throws(() => ImageTools.validate({ type: "image/gif", size: 1024 }), /JPEG、PNG 或 WebP/);
  assert.throws(
    () => ImageTools.validate({ type: "image/jpeg", size: 10 * 1024 * 1024 + 1 }),
    /10MB/
  );
});

test("等比例縮小圖片且不放大原圖", () => {
  assert.deepEqual(ImageTools.calculateDimensions(3200, 1800, 1600), {
    width: 1600,
    height: 900
  });
  assert.deepEqual(ImageTools.calculateDimensions(800, 600, 1600), {
    width: 800,
    height: 600
  });
});

test("拒絕無效圖片尺寸", () => {
  assert.throws(() => ImageTools.calculateDimensions(0, 100, 1600), /尺寸/);
  assert.throws(() => ImageTools.calculateDimensions(100, Number.NaN, 1600), /尺寸/);
});

