"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const MapView = require("../js/ui/map.js");

test("SVG 路線路徑使用正規化座標", () => {
  const path = MapView.buildSvgPath(
    [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.2 }, { lat: 25.2, lng: 121.1 }],
    200,
    100,
    10
  );

  assert.match(path, /^M \d+(\.\d+)? \d+(\.\d+)? L /);
  assert.equal(path.split(" L ").length, 3);
});
test("空座標不產生 SVG 路徑", () => {
  assert.equal(MapView.buildSvgPath([], 200, 100, 10), "");
});

test("海拔剖面可處理固定海拔", () => {
  const path = MapView.buildElevationPath(
    [{ ele: 100 }, { ele: 100 }, { ele: 100 }],
    300,
    80,
    8
  );
  assert.equal(path, "M 8 40 L 150 40 L 292 40");
});

function fakeDocument() {
  const documentRef = {
    defaultView: {
      location: { protocol: "http:" },
      getComputedStyle() {
        return { getPropertyValue() { return "#19864a"; } };
      }
    },
    createElement(name) {
      return fakeNode(name, documentRef);
    },
    createElementNS(_namespace, name) {
      return fakeNode(name, documentRef);
    },
    createTextNode(text) {
      return { nodeType: 3, textContent: text };
    }
  };
  return documentRef;
}

function fakeNode(name, documentRef) {
  return {
    nodeType: 1,
    name,
    ownerDocument: documentRef,
    dataset: {},
    children: [],
    setAttribute() {},
    append(...children) {
      this.children.push(...children);
    },
    replaceChildren(...children) {
      this.children = children;
    }
  };
}

test("Leaflet 圖磚失敗時移除地圖並切換 SVG", () => {
  const documentRef = fakeDocument();
  const element = fakeNode("div", documentRef);
  let tileError;
  let removed = 0;
  const map = {
    fitBounds() {},
    remove() { removed += 1; }
  };
  const tileLayer = {
    addTo() { return this; },
    on(event, handler) {
      if (event === "tileerror") tileError = handler;
      return this;
    },
    off() {}
  };
  documentRef.defaultView.L = {
    map() { return map; },
    tileLayer() { return tileLayer; },
    polyline() {
      return {
        addTo() { return this; },
        getBounds() { return {}; }
      };
    }
  };

  MapView.mount(element, {
    id: "r1",
    name: "測試路線",
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]
  });

  assert.equal(element.dataset.mapMode, "leaflet");
  assert.equal(typeof tileError, "function");
  tileError();
  assert.equal(removed, 1);
  assert.equal(element.dataset.mapMode, "svg");
});

test("海拔圖無有效高度時顯示說明文字", () => {
  const documentRef = fakeDocument();
  const element = fakeNode("div", documentRef);

  MapView.mountElevation(element, {
    name: "測試路線",
    coordinates: [{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]
  });

  assert.equal(element.children.length, 1);
  assert.equal(element.children[0].textContent, "未提供海拔資料");
});
