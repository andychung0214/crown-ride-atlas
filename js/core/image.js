"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      ImageTools: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const ACCEPTED_TYPES = Object.freeze(["image/jpeg", "image/png", "image/webp"]);
  const MAX_INPUT_BYTES = 10 * 1024 * 1024;

  function validate(file) {
    if (!file || !ACCEPTED_TYPES.includes(file.type)) {
      throw new Error("圖片必須是 JPEG、PNG 或 WebP。");
    }
    if (!Number.isFinite(file.size) || file.size <= 0) {
      throw new Error("圖片檔案是空的或無法讀取。");
    }
    if (file.size > MAX_INPUT_BYTES) {
      throw new Error("圖片不得超過 10MB。");
    }
  }

  function calculateDimensions(width, height, maxEdge) {
    if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
      throw new Error("圖片尺寸無效。");
    }
    const limit = Number.isFinite(maxEdge) && maxEdge > 0 ? maxEdge : 1600;
    const scale = Math.min(1, limit / Math.max(width, height));
    return {
      width: Math.round(width * scale),
      height: Math.round(height * scale)
    };
  }

  function readAsDataUrl(file, browserWindow) {
    return new Promise((resolve, reject) => {
      const reader = new browserWindow.FileReader();
      reader.addEventListener("load", () => resolve(reader.result), { once: true });
      reader.addEventListener("error", () => reject(new Error("無法讀取圖片。")), { once: true });
      reader.readAsDataURL(file);
    });
  }

  function loadImage(dataUrl, browserWindow) {
    return new Promise((resolve, reject) => {
      const image = new browserWindow.Image();
      image.addEventListener("load", () => resolve(image), { once: true });
      image.addEventListener("error", () => reject(new Error("圖片內容無法解析。")), { once: true });
      image.src = dataUrl;
    });
  }

  function dataUrlBytes(dataUrl) {
    const commaIndex = dataUrl.indexOf(",");
    const payload = commaIndex >= 0 ? dataUrl.slice(commaIndex + 1) : dataUrl;
    return Math.ceil(payload.length * 3 / 4);
  }

  async function compress(file, options) {
    validate(file);
    const settings = Object.assign({
      maxEdge: 1600,
      maxBytes: 400 * 1024,
      browserWindow: typeof window !== "undefined" ? window : null
    }, options || {});
    if (!settings.browserWindow || !settings.browserWindow.document) {
      throw new Error("目前環境無法壓縮圖片。");
    }

    const source = await readAsDataUrl(file, settings.browserWindow);
    const image = await loadImage(source, settings.browserWindow);
    const dimensions = calculateDimensions(image.naturalWidth, image.naturalHeight, settings.maxEdge);
    const canvas = settings.browserWindow.document.createElement("canvas");
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("目前瀏覽器不支援圖片壓縮。");
    context.drawImage(image, 0, 0, dimensions.width, dimensions.height);

    let result = "";
    for (let quality = 0.82; quality >= 0.54; quality -= 0.07) {
      result = canvas.toDataURL("image/webp", quality);
      if (!result.startsWith("data:image/webp")) {
        result = canvas.toDataURL("image/jpeg", quality);
      }
      if (dataUrlBytes(result) <= settings.maxBytes) return result;
    }

    throw new Error("壓縮後圖片仍超過 400KB，請改用較小的圖片。");
  }

  return {
    ACCEPTED_TYPES,
    MAX_INPUT_BYTES,
    validate,
    calculateDimensions,
    compress
  };
});
