"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const BikeParts = require("../js/data/bike-parts.js");
const BikeAnatomy = require("../js/ui/bike-anatomy.js");
const Render = require("../js/ui/render.js");

function dataKey(attributeName) {
  return attributeName
    .slice(5)
    .replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
}

function matchesSelector(element, selector) {
  if (selector.startsWith(".")) {
    return String(element.className || "").split(/\s+/).includes(selector.slice(1));
  }
  const dataMatch = selector.match(/^\[data-([a-z0-9-]+)(?:="([^"]*)")?\]$/);
  if (dataMatch) {
    const key = dataKey(`data-${dataMatch[1]}`);
    if (!Object.prototype.hasOwnProperty.call(element.dataset, key)) return false;
    return dataMatch[2] == null || element.dataset[key] === dataMatch[2];
  }
  return element.name === selector.toLowerCase();
}

function distanceToSegment(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lengthSquared = dx * dx + dy * dy;
  const ratio = lengthSquared === 0
    ? 0
    : Math.max(0, Math.min(1, ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared));
  return Math.hypot(point.x - (start.x + dx * ratio), point.y - (start.y + dy * ratio));
}

function sampledPathPoints(pathData) {
  const tokens = String(pathData || "").match(/[MLQCZ]|-?\d+(?:\.\d+)?/g) || [];
  const points = [];
  let cursor = 0;
  let command = null;
  let current = null;
  let first = null;
  const number = () => Number(tokens[cursor++]);
  const add = point => {
    points.push(point);
    current = point;
    if (!first) first = point;
  };
  while (cursor < tokens.length) {
    if (/^[MLQCZ]$/.test(tokens[cursor])) command = tokens[cursor++];
    if (command === "M" || command === "L") {
      add({ x: number(), y: number() });
      command = command === "M" ? "L" : command;
    } else if (command === "Q") {
      const start = current;
      const control = { x: number(), y: number() };
      const end = { x: number(), y: number() };
      for (let step = 1; step <= 48; step += 1) {
        const t = step / 48;
        const inverse = 1 - t;
        add({
          x: inverse * inverse * start.x + 2 * inverse * t * control.x + t * t * end.x,
          y: inverse * inverse * start.y + 2 * inverse * t * control.y + t * t * end.y
        });
      }
    } else if (command === "C") {
      const start = current;
      const firstControl = { x: number(), y: number() };
      const secondControl = { x: number(), y: number() };
      const end = { x: number(), y: number() };
      for (let step = 1; step <= 64; step += 1) {
        const t = step / 64;
        const inverse = 1 - t;
        add({
          x: inverse ** 3 * start.x + 3 * inverse * inverse * t * firstControl.x + 3 * inverse * t * t * secondControl.x + t ** 3 * end.x,
          y: inverse ** 3 * start.y + 3 * inverse * inverse * t * firstControl.y + 3 * inverse * t * t * secondControl.y + t ** 3 * end.y
        });
      }
    } else if (command === "Z") {
      if (first) add(first);
      command = null;
    } else {
      throw new Error(`不支援的 SVG path command：${command}`);
    }
  }
  return points;
}

function pointInPolygon(point, polygon) {
  let inside = false;
  for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index++) {
    const a = polygon[index];
    const b = polygon[previous];
    if (((a.y > point.y) !== (b.y > point.y)) &&
      point.x < ((b.x - a.x) * (point.y - a.y)) / (b.y - a.y) + a.x) inside = !inside;
  }
  return inside;
}

function anchorHitsPaintedShape(shape, point) {
  const stroke = shape.getAttribute("stroke");
  const fill = shape.getAttribute("fill");
  const strokeRadius = Number(shape.getAttribute("stroke-width") || 0) / 2 + 0.75;
  if (shape.name === "line") {
    return distanceToSegment(point, {
      x: Number(shape.getAttribute("x1")), y: Number(shape.getAttribute("y1"))
    }, {
      x: Number(shape.getAttribute("x2")), y: Number(shape.getAttribute("y2"))
    }) <= strokeRadius;
  }
  if (shape.name === "circle") {
    const distance = Math.hypot(point.x - Number(shape.getAttribute("cx")), point.y - Number(shape.getAttribute("cy")));
    const radius = Number(shape.getAttribute("r"));
    return fill && fill !== "none" ? distance <= radius + 0.75 : Math.abs(distance - radius) <= strokeRadius;
  }
  if (shape.name === "rect") {
    const x = Number(shape.getAttribute("x"));
    const y = Number(shape.getAttribute("y"));
    const width = Number(shape.getAttribute("width"));
    const height = Number(shape.getAttribute("height"));
    const rotate = /rotate\((-?[\d.]+)\s+(-?[\d.]+)\s+(-?[\d.]+)\)/.exec(shape.getAttribute("transform") || "");
    let local = point;
    if (rotate) {
      const angle = -Number(rotate[1]) * Math.PI / 180;
      const cx = Number(rotate[2]);
      const cy = Number(rotate[3]);
      local = {
        x: cx + Math.cos(angle) * (point.x - cx) - Math.sin(angle) * (point.y - cy),
        y: cy + Math.sin(angle) * (point.x - cx) + Math.cos(angle) * (point.y - cy)
      };
    }
    return local.x >= x - 0.75 && local.x <= x + width + 0.75 && local.y >= y - 0.75 && local.y <= y + height + 0.75;
  }
  if (shape.name === "path") {
    const points = sampledPathPoints(shape.getAttribute("d"));
    if (fill && fill !== "none" && pointInPolygon(point, points)) return true;
    return points.slice(1).some((end, index) => distanceToSegment(point, points[index], end) <= strokeRadius);
  }
  return false;
}

class FakeClassList {
  constructor(element) {
    this.element = element;
  }

  add(name) {
    const values = new Set(String(this.element.className || "").split(/\s+/).filter(Boolean));
    values.add(name);
    this.element.className = [...values].join(" ");
  }

  remove(name) {
    this.element.className = String(this.element.className || "")
      .split(/\s+/)
      .filter(value => value && value !== name)
      .join(" ");
  }

  contains(name) {
    return String(this.element.className || "").split(/\s+/).includes(name);
  }
}

class FakeElement {
  constructor(name, ownerDocument, namespaceURI) {
    this.nodeType = 1;
    this.name = name.toLowerCase();
    this.ownerDocument = ownerDocument;
    this.namespaceURI = namespaceURI || null;
    this.parentNode = null;
    this.children = [];
    this.dataset = {};
    this.attributes = {};
    this.className = "";
    this.classList = new FakeClassList(this);
    this.textContent = "";
    this.listeners = new Map();
    this.capturedPointerIds = new Set();
    this.pointerCaptureCalls = [];
    this.pointerReleaseCalls = [];
    this.hidden = false;
    this.clientRect = { left: 0, top: 0, width: 960, height: 520 };
  }

  set innerHTML(_value) {
    throw new Error("測試 DOM 禁止使用 innerHTML");
  }

  get innerHTML() {
    return "";
  }

  append(...children) {
    children.filter(Boolean).forEach(child => {
      child.parentNode = this;
      this.children.push(child);
    });
  }

  replaceChildren(...children) {
    this.children.forEach(child => { child.parentNode = null; });
    this.children = [];
    this.append(...children);
  }

  setAttribute(name, value) {
    const stringValue = String(value);
    this.attributes[name] = stringValue;
    if (name === "class") this.className = stringValue;
    if (name.startsWith("data-")) this.dataset[dataKey(name)] = stringValue;
  }

  getAttribute(name) {
    return Object.prototype.hasOwnProperty.call(this.attributes, name) ? this.attributes[name] : null;
  }

  removeAttribute(name) {
    delete this.attributes[name];
    if (name.startsWith("data-")) delete this.dataset[dataKey(name)];
  }

  addEventListener(type, handler) {
    const handlers = this.listeners.get(type) || new Set();
    handlers.add(handler);
    this.listeners.set(type, handlers);
    this.ownerDocument.listenerTotal += 1;
  }

  removeEventListener(type, handler) {
    const handlers = this.listeners.get(type);
    if (!handlers || !handlers.delete(handler)) return;
    this.ownerDocument.listenerTotal -= 1;
  }

  dispatch(type, properties) {
    const event = Object.assign({
      type,
      target: this,
      currentTarget: this,
      key: "",
      pointerId: 1,
      clientX: 0,
      clientY: 0,
      preventDefault() { this.defaultPrevented = true; }
    }, properties || {});
    if (type === "lostpointercapture") this.capturedPointerIds.delete(event.pointerId);
    [...(this.listeners.get(type) || [])].forEach(handler => handler(event));
    return event;
  }

  querySelectorAll(selector) {
    const found = [];
    const visit = element => {
      element.children.forEach(child => {
        if (matchesSelector(child, selector)) found.push(child);
        visit(child);
      });
    };
    visit(this);
    return found;
  }

  querySelector(selector) {
    return this.querySelectorAll(selector)[0] || null;
  }

  closest(selector) {
    let element = this;
    while (element) {
      if (matchesSelector(element, selector)) return element;
      element = element.parentNode;
    }
    return null;
  }

  setPointerCapture(pointerId) {
    this.pointerCaptureCalls.push(pointerId);
    this.capturedPointerIds.add(pointerId);
  }

  hasPointerCapture(pointerId) {
    return this.capturedPointerIds.has(pointerId);
  }

  releasePointerCapture(pointerId) {
    this.pointerReleaseCalls.push(pointerId);
    this.capturedPointerIds.delete(pointerId);
  }

  getBoundingClientRect() {
    return this.clientRect;
  }

  remove() {
    if (!this.parentNode) return;
    this.parentNode.children = this.parentNode.children.filter(child => child !== this);
    this.parentNode = null;
  }
}

class FakeDocument {
  constructor() {
    this.listenerTotal = 0;
    this.failSvg = false;
  }

  createElement(name) {
    return new FakeElement(name, this);
  }

  createElementNS(namespaceURI, name) {
    if (this.failSvg) throw new Error("SVG 建立失敗");
    return new FakeElement(name, this, namespaceURI);
  }

  createTextNode(text) {
    return { nodeType: 3, textContent: String(text), parentNode: null };
  }
}

function appendElement(documentRef, parent, name, attributes, text) {
  const element = documentRef.createElement(name);
  Object.entries(attributes || {}).forEach(([key, value]) => element.setAttribute(key, value));
  if (text != null) element.textContent = text;
  parent.append(element);
  return element;
}

function interactiveFixture(catalog = BikeParts) {
  const documentRef = new FakeDocument();
  const page = appendElement(documentRef, documentRef.createElement("div"), "main", { class: "bike-parts-page" });
  const anatomy = appendElement(documentRef, page, "div", { "data-bike-anatomy": "true" });
  const fallback = appendElement(documentRef, anatomy, "div", { "data-bike-fallback": "true" }, "靜態百科");
  const list = appendElement(documentRef, page, "div");
  catalog.parts.forEach(part => {
    appendElement(documentRef, list, "button", { "data-bike-part-id": part.id }, `${part.number}. ${part.name}`);
  });
  const detail = appendElement(documentRef, page, "section", { "data-bike-part-detail": "true" });
  appendElement(documentRef, detail, "p", { class: "eyebrow" }, "DEFAULT PART");
  appendElement(documentRef, detail, "h2", {}, catalog.parts[0].name);
  for (let index = 0; index < 7; index += 1) {
    const row = appendElement(documentRef, detail, "div", { class: "bike-part-detail__row" });
    appendElement(documentRef, row, "h3", {}, `欄位 ${index + 1}`);
    appendElement(documentRef, row, "p", {}, "舊內容");
  }
  return {
    documentRef,
    page,
    root: anatomy,
    fallback,
    detail,
    listenerCount() { return documentRef.listenerTotal; }
  };
}

function byData(root, key, value) {
  return root.querySelector(`[data-${key}="${value}"]`);
}

test("百科驗證拒絕不完整或重複零件目錄", () => {
  assert.equal(BikeAnatomy.validateCatalog(BikeParts), true);
  assert.throws(() => BikeAnatomy.validateCatalog({ parts: [], defaultPartId: "none" }), /零件目錄/);
  assert.throws(() => BikeAnatomy.validateCatalog({
    parts: [BikeParts.parts[0], BikeParts.parts[0]],
    defaultPartId: "top-tube"
  }), /重複/);
});

test("百科 reducer 限制縮放、選取有效零件並可重設", () => {
  const initial = BikeAnatomy.initialView(BikeParts);
  assert.deepEqual(initial, { selectedPartId: "top-tube", scale: 1, offsetX: 0, offsetY: 0 });
  assert.equal(BikeAnatomy.reduceView(initial, { type: "zoom", delta: 9 }, BikeParts).scale, 3);
  assert.equal(BikeAnatomy.reduceView(initial, { type: "zoom", delta: -9 }, BikeParts).scale, 1);
  assert.deepEqual(
    BikeAnatomy.reduceView(
      { selectedPartId: "top-tube", scale: 1.25, offsetX: 40, offsetY: -20 },
      { type: "zoom", delta: -0.25 },
      BikeParts
    ),
    { selectedPartId: "top-tube", scale: 1, offsetX: 0, offsetY: 0 }
  );
  assert.equal(BikeAnatomy.reduceView(initial, { type: "select", partId: "chain" }, BikeParts).selectedPartId, "chain");
  assert.equal(BikeAnatomy.reduceView(initial, { type: "select", partId: "missing" }, BikeParts), initial);
  assert.deepEqual(
    BikeAnatomy.reduceView({ selectedPartId: "chain", scale: 2, offsetX: 40, offsetY: -20 }, { type: "reset" }, BikeParts),
    initial
  );
});

test("百科 reducer 只在放大後平移並限制畫布範圍", () => {
  const initial = BikeAnatomy.initialView(BikeParts);
  assert.equal(BikeAnatomy.reduceView(initial, { type: "pan", dx: 20, dy: 30 }, BikeParts), initial);
  assert.deepEqual(
    BikeAnatomy.reduceView({ selectedPartId: "top-tube", scale: 2, offsetX: 470, offsetY: -250 }, { type: "pan", dx: 99, dy: -99 }, BikeParts),
    { selectedPartId: "top-tube", scale: 2, offsetX: 480, offsetY: -260 }
  );
});

test("SVG 是固定檢視框且具完整側視公路車結構", () => {
  const documentRef = new FakeDocument();
  const svg = BikeAnatomy.createSvg(documentRef, BikeParts, () => {});
  assert.equal(svg.getAttribute("viewBox"), "0 0 960 520");
  assert.equal(svg.getAttribute("width"), "960");
  assert.equal(svg.getAttribute("height"), "520");
  assert.equal(svg.querySelectorAll("circle").filter(node => node.getAttribute("r") === "145").length, 2);
  ["frame-front-triangle", "frame-rear-triangle", "head-tube", "fork", "drop-handlebar", "saddle", "drivetrain", "disc-rotor", "brake-caliper"].forEach(shape => {
    assert.ok(byData(svg, "bike-shape", shape), `缺少 ${shape}`);
  });
});

test("32 個零件的熱點逐一命中人工核對的獨立圖形", () => {
  const expectedAnchors = {
    "top-tube": [520, 190],
    "down-tube": [544, 300],
    "head-tube": [621, 220],
    "seat-tube": [438, 272],
    "seat-stay": [340, 263],
    "chain-stay": [355, 350],
    fork: [676, 299],
    "derailleur-hanger": [259, 370],
    "drop-handlebar": [680, 142],
    stem: [636, 166],
    headset: [613, 196],
    "bar-tape": [698, 142],
    "shift-brake-lever": [714, 170],
    saddle: [410, 151],
    seatpost: [415, 173],
    pedal: [520, 384],
    "crank-arm": [480, 368],
    chainring: [455, 310],
    "bottom-bracket": [455, 350],
    "front-derailleur": [437, 306],
    "rear-derailleur": [272, 402],
    chain: [365, 380],
    cassette: [272, 350],
    "jockey-wheel": [299, 413],
    rim: [715, 218],
    tire: [245, 205],
    valve: [647, 469],
    hub: [715, 350],
    spoke: [760, 324],
    axle: [245, 350],
    "disc-rotor": [673, 350],
    "brake-caliper": [673, 315]
  };
  const documentRef = new FakeDocument();
  const svg = BikeAnatomy.createSvg(documentRef, BikeParts, () => {});
  const shapes = svg.querySelectorAll("[data-bike-part-shape]");

  assert.equal(shapes.length, 32);
  assert.deepEqual(
    shapes.map(shape => shape.dataset.bikePartShape).sort(),
    Object.keys(expectedAnchors).sort()
  );

  BikeParts.parts.forEach(part => {
    const expected = expectedAnchors[part.id];
    const shape = byData(svg, "bike-part-shape", part.id);
    assert.ok(expected, `缺少 ${part.id} 的人工核對錨點`);
    assert.deepEqual(part.hotspot, { x: expected[0], y: expected[1] }, `${part.name} 熱點位置錯誤`);
    assert.ok(shape, `${part.name} 缺少獨立可見圖形`);
    assert.equal(Number(shape.getAttribute("data-bike-anchor-x")), expected[0], `${part.name} 圖形 X 錨點錯誤`);
    assert.equal(Number(shape.getAttribute("data-bike-anchor-y")), expected[1], `${part.name} 圖形 Y 錨點錯誤`);
    const stroke = shape.getAttribute("stroke");
    const fill = shape.getAttribute("fill");
    assert.ok(
      (stroke && stroke !== "none") || (fill && fill !== "none"),
      `${part.name} 圖形不可完全透明`
    );
    assert.ok(anchorHitsPaintedShape(shape, part.hotspot), `${part.name} 熱點未命中實際著色圖形`);
  });
});

test("下管由頭管下端連接至中軸區而非誤接頭管上端", () => {
  const documentRef = new FakeDocument();
  const svg = BikeAnatomy.createSvg(documentRef, BikeParts, () => {});
  const downTube = byData(svg, "bike-part-shape", "down-tube");
  const headTube = byData(svg, "bike-part-shape", "head-tube");
  const bottomBracket = byData(svg, "bike-part-shape", "bottom-bracket");

  assert.deepEqual(
    [downTube.getAttribute("x1"), downTube.getAttribute("y1")].map(Number),
    [headTube.getAttribute("x2"), headTube.getAttribute("y2")].map(Number)
  );
  assert.deepEqual(
    [downTube.getAttribute("x2"), downTube.getAttribute("y2")].map(Number),
    [bottomBracket.getAttribute("cx"), bottomBracket.getAttribute("cy")].map(Number)
  );
  assert.deepEqual(BikeParts.parts.find(part => part.id === "down-tube").hotspot, { x: 544, y: 300 });
  assert.ok(anchorHitsPaintedShape(downTube, { x: 544, y: 300 }));
});

test("SVG 以具名 group 容納可達熱點並只隱藏純車體視覺層", () => {
  const documentRef = new FakeDocument();
  const svg = BikeAnatomy.createSvg(documentRef, BikeParts, () => {});
  const visual = svg.querySelector("[data-bike-visual]");
  const hotspotLayer = svg.querySelector("[data-bike-hotspot-layer]");
  const hotspots = svg.querySelectorAll("[data-bike-hotspot]");

  assert.equal(svg.getAttribute("role"), "group");
  assert.equal(svg.getAttribute("aria-labelledby"), "bike-anatomy-title");
  assert.equal(svg.getAttribute("aria-describedby"), "bike-anatomy-description");
  assert.equal(svg.querySelector("title").getAttribute("id"), "bike-anatomy-title");
  assert.equal(svg.querySelector("title").textContent, "森林綠公路車完整側視零件互動圖");
  assert.equal(svg.querySelector("desc").getAttribute("id"), "bike-anatomy-description");
  assert.match(svg.querySelector("desc").textContent, /32 個可操作編號|縮放|拖曳/);
  assert.equal(visual.getAttribute("aria-hidden"), "true");
  assert.equal(hotspotLayer.getAttribute("aria-hidden"), null);
  assert.equal(hotspots.length, 32);
  hotspots.forEach(hotspot => {
    assert.equal(hotspot.getAttribute("role"), "button");
    assert.equal(Number(hotspot.querySelector("[data-bike-hotspot-ring]").getAttribute("r")) <= 16, true);
    let ancestor = hotspot.parentNode;
    while (ancestor) {
      assert.notEqual(ancestor.getAttribute("aria-hidden"), "true", `${hotspot.dataset.bikeHotspot} 不可位於隱藏祖先內`);
      ancestor = ancestor === svg ? null : ancestor.parentNode;
    }
  });
});

test("SVG 具有與目錄精確對應的 32 個鍵盤熱點與導引線", () => {
  const documentRef = new FakeDocument();
  const svg = BikeAnatomy.createSvg(documentRef, BikeParts, () => {});
  const hotspots = svg.querySelectorAll("[data-bike-hotspot]");
  const leaders = svg.querySelectorAll("[data-bike-leader]");
  const labels = svg.querySelectorAll("[data-bike-leader-label]");
  assert.equal(hotspots.length, 32);
  assert.equal(leaders.length, 32);
  assert.equal(labels.length, 32);
  assert.deepEqual(hotspots.map(node => node.dataset.bikeHotspot), BikeParts.parts.map(part => part.id));
  assert.deepEqual(leaders.map(node => node.dataset.bikeLeader), BikeParts.parts.map(part => part.id));
  assert.deepEqual(labels.map(node => node.dataset.bikeLeaderLabel), BikeParts.parts.map(part => part.id));
  BikeParts.parts.forEach(part => {
    const hotspot = byData(svg, "bike-hotspot", part.id);
    const leader = byData(svg, "bike-leader", part.id);
    const label = byData(svg, "bike-leader-label", part.id);
    assert.equal(hotspot.getAttribute("id"), `bike-hotspot-${part.id}`);
    assert.equal(leader.getAttribute("id"), `bike-leader-${part.id}`);
    assert.equal(label.getAttribute("id"), `bike-leader-label-${part.id}`);
    assert.equal(hotspot.getAttribute("role"), "button");
    assert.equal(hotspot.getAttribute("tabindex"), "0");
    assert.equal(hotspot.getAttribute("aria-label"), `${part.number} ${part.name}`);
  });
});

test("增強建立 32 個 screen-space HTML marker 並以 hotspot 百分比定位", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const overlay = fixture.root.querySelector("[data-bike-mobile-markers]");
  const markers = fixture.root.querySelectorAll("[data-bike-mobile-marker]");

  assert.ok(surface, "缺少同時容納 SVG 與 marker overlay 的 diagram surface");
  assert.ok(overlay, "缺少 mobile marker overlay");
  assert.equal(markers.length, 32);
  markers.forEach((marker, index) => {
    const part = BikeParts.parts[index];
    const markerNumber = String(part.number).padStart(2, "0");
    const glyph = marker.querySelector("[data-bike-mobile-marker-glyph]");
    assert.equal(marker.name, "button");
    assert.equal(marker.getAttribute("type"), "button");
    assert.equal(marker.getAttribute("aria-label"), `${markerNumber} ${part.name}`);
    assert.ok(glyph, `${part.id} 缺少與 44px 觸控區分離的可見編號`);
    assert.equal(glyph.textContent, markerNumber);
  });
  const chain = byData(fixture.root, "bike-mobile-marker", "chain");
  assert.match(chain.getAttribute("style"), /left:\s*38\.020833%;\s*top:\s*73\.076923%/);
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");
  assert.match(chain.getAttribute("style"), /left:\s*47\.526042%;\s*top:\s*91\.346154%/);
});

test("mobile marker 的 click、Enter、Space 由原生合成 click 委派至 surface", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const chain = byData(fixture.root, "bike-mobile-marker", "chain");
  const saddle = byData(fixture.root, "bike-mobile-marker", "saddle");
  const cassette = byData(fixture.root, "bike-mobile-marker", "cassette");

  assert.ok(surface && chain && saddle && cassette, "缺少可操作 mobile marker");
  surface.dispatch("click", { target: chain, clientX: 0, clientY: 0 });
  assert.equal(fixture.detail.querySelector("h2").textContent, "鏈條");
  const enter = saddle.dispatch("keydown", { key: "Enter" });
  assert.equal(enter.defaultPrevented, undefined);
  assert.equal(fixture.detail.querySelector("h2").textContent, "鏈條");
  surface.dispatch("click", { target: saddle, clientX: 0, clientY: 0 });
  assert.equal(fixture.detail.querySelector("h2").textContent, "座墊");
  const space = cassette.dispatch("keydown", { key: " " });
  assert.equal(space.defaultPrevented, undefined);
  assert.equal(fixture.detail.querySelector("h2").textContent, "座墊");
  surface.dispatch("click", { target: cassette, clientX: 0, clientY: 0 });
  assert.equal(fixture.detail.querySelector("h2").textContent, "飛輪");
});

test("diagram hotspot 與 marker 的 bubbled click 各只選取及播報一次", () => {
  [
    ["bike-hotspot", "chain", 365, 380],
    ["bike-mobile-marker", "cassette", 272, 350]
  ].forEach(([attribute, partId, clientX, clientY]) => {
    const fixture = interactiveFixture();
    const announcements = [];
    BikeAnatomy.mount(fixture.root, {
      catalog: BikeParts,
      announce: message => announcements.push(message)
    });
    const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
    const target = byData(fixture.root, attribute, partId);

    target.dispatch("click", { clientX, clientY });
    surface.dispatch("click", { target, clientX, clientY });

    assert.equal(announcements.length, 1, `${attribute} 不可同時由 child 與 surface 重複選取`);
  });
});

test("重疊 marker 的 mouse click 以座標最近 hotspot 覆蓋最上層 DOM target", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const coveringAxle = byData(fixture.root, "bike-mobile-marker", "axle");

  surface.dispatch("click", {
    target: coveringAxle,
    pointerType: "mouse",
    clientX: 272,
    clientY: 350
  });

  assert.equal(fixture.detail.querySelector("h2").textContent, "飛輪");
});

test("hotspot 與靜態清單 hover 會同步四個配對元素的非色彩狀態", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const hotspot = byData(fixture.root, "bike-hotspot", "chain");
  const leader = byData(fixture.root, "bike-leader", "chain");
  const label = byData(fixture.root, "bike-leader-label", "chain");
  const listButton = byData(fixture.page, "bike-part-id", "chain");
  const matched = [hotspot, leader, label, listButton];

  hotspot.dispatch("pointerenter");
  assert.ok(matched.every(element => element.classList.contains("is-hovered")));
  hotspot.dispatch("pointerleave");
  assert.ok(matched.every(element => !element.classList.contains("is-hovered")));
  listButton.dispatch("pointerenter");
  assert.ok(matched.every(element => element.classList.contains("is-hovered")));
  listButton.dispatch("pointerleave");
  assert.ok(matched.every(element => !element.classList.contains("is-hovered")));
});

test("觸控在 22 CSS px 內選最近 hotspot，超出半徑不選取", () => {
  const near = interactiveFixture();
  BikeAnatomy.mount(near.root, { catalog: BikeParts, announce() {} });
  const nearSurface = near.root.querySelector("[data-bike-diagram-surface]");
  nearSurface.dispatch("pointerdown", { pointerId: 11, pointerType: "touch", clientX: 385, clientY: 378 });
  nearSurface.dispatch("pointerup", { pointerId: 11, pointerType: "touch", clientX: 385, clientY: 378 });
  assert.equal(near.detail.querySelector("h2").textContent, "鏈條");

  const far = interactiveFixture();
  BikeAnatomy.mount(far.root, { catalog: BikeParts, announce() {} });
  const farSurface = far.root.querySelector("[data-bike-diagram-surface]");
  farSurface.dispatch("pointerdown", { pointerId: 12, pointerType: "touch", clientX: 389, clientY: 378 });
  farSurface.dispatch("pointerup", { pointerId: 12, pointerType: "touch", clientX: 389, clientY: 378 });
  assert.equal(far.detail.querySelector("h2").textContent, "上管");
});

test("touch direct marker 與 SVG hotspot 都由 diagram surface 記錄並選取", () => {
  [
    ["bike-mobile-marker", "chain", "鏈條", 51],
    ["bike-hotspot", "cassette", "飛輪", 52]
  ].forEach(([attribute, partId, expectedName, pointerId]) => {
    const fixture = interactiveFixture();
    BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
    const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
    const target = byData(fixture.root, attribute, partId);
    assert.ok(surface && target, `缺少 ${attribute} 的 gesture surface`);

    surface.dispatch("pointerdown", { target, pointerId, pointerType: "touch", clientX: 10, clientY: 10 });
    surface.dispatch("pointerup", { target, pointerId, pointerType: "touch", clientX: 10, clientY: 10 });

    assert.equal(fixture.detail.querySelector("h2").textContent, expectedName);
    assert.deepEqual(surface.pointerCaptureCalls, [pointerId]);
  });
});

test("237px 窄版重疊 marker 的 touch 依座標最近熱點選取飛輪", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const svg = fixture.root.querySelector("[data-bike-svg]");
  const coveringAxle = byData(fixture.root, "bike-mobile-marker", "axle");
  svg.clientRect = { left: 0, top: 0, width: 237, height: 128.375 };
  const clientX = 272 * 237 / 960;
  const clientY = 350 * 128.375 / 520;

  surface.dispatch("pointerdown", {
    target: coveringAxle, pointerId: 58, pointerType: "touch", clientX, clientY
  });
  surface.dispatch("pointerup", {
    target: coveringAxle, pointerId: 58, pointerType: "touch", clientX, clientY
  });

  assert.equal(fixture.detail.querySelector("h2").textContent, "飛輪");
});

test("marker＋背景、marker＋marker、SVG hotspot＋背景的雙指組合都不誤選", () => {
  [
    ["bike-mobile-marker", "chain", "surface", null],
    ["bike-mobile-marker", "chain", "bike-mobile-marker", "cassette"],
    ["bike-hotspot", "chain", "surface", null]
  ].forEach(([firstAttribute, firstId, secondAttribute, secondId], index) => {
    const fixture = interactiveFixture();
    BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
    const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
    const first = byData(fixture.root, firstAttribute, firstId);
    const second = secondAttribute === "surface" ? surface : byData(fixture.root, secondAttribute, secondId);
    assert.ok(surface && first && second, `混合 target 情境 ${index + 1} 缺少必要元素`);

    const firstPointer = 61 + index * 2;
    const secondPointer = firstPointer + 1;
    surface.dispatch("pointerdown", { target: first, pointerId: firstPointer, pointerType: "touch", clientX: 30, clientY: 30 });
    surface.dispatch("pointerdown", { target: second, pointerId: secondPointer, pointerType: "touch", clientX: 70, clientY: 30 });
    surface.dispatch("pointerup", { target: second, pointerId: secondPointer, pointerType: "touch", clientX: 70, clientY: 30 });
    surface.dispatch("pointerup", { target: first, pointerId: firstPointer, pointerType: "touch", clientX: 30, clientY: 30 });

    assert.equal(fixture.detail.querySelector("h2").textContent, "上管");
  });
});

test("237px SVG 的單指 40 CSS px 拖曳換算為約 40px 視覺位移", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const svg = fixture.root.querySelector("[data-bike-svg]");
  const viewport = fixture.root.querySelector("[data-bike-viewport]");
  assert.ok(surface, "缺少 diagram surface");
  svg.clientRect = { left: 0, top: 0, width: 237, height: 128.375 };
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");

  surface.dispatch("pointerdown", { pointerId: 71, pointerType: "touch", clientX: 20, clientY: 40 });
  surface.dispatch("pointermove", { pointerId: 71, pointerType: "touch", clientX: 60, clientY: 40 });
  surface.dispatch("pointerup", { pointerId: 71, pointerType: "touch", clientX: 60, clientY: 40 });

  const offsetX = Number(/translate\(([-\d.]+)/.exec(viewport.getAttribute("transform"))[1]);
  assert.ok(Math.abs(offsetX * 237 / 960 - 40) < 0.001, `視覺位移應為 40px，實際為 ${offsetX * 237 / 960}`);
});

test("237px SVG 的雙指 midpoint 40 CSS px 位移換算為約 40px 視覺位移", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const svg = fixture.root.querySelector("[data-bike-svg]");
  const viewport = fixture.root.querySelector("[data-bike-viewport]");
  assert.ok(surface, "缺少 diagram surface");
  svg.clientRect = { left: 0, top: 0, width: 237, height: 128.375 };
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");

  surface.dispatch("pointerdown", { pointerId: 81, pointerType: "touch", clientX: 20, clientY: 40 });
  surface.dispatch("pointerdown", { pointerId: 82, pointerType: "touch", clientX: 60, clientY: 40 });
  surface.dispatch("pointermove", { pointerId: 82, pointerType: "touch", clientX: 140, clientY: 40 });

  const offsetX = Number(/translate\(([-\d.]+)/.exec(viewport.getAttribute("transform"))[1]);
  assert.ok(Math.abs(offsetX * 237 / 960 - 40) < 0.001, `midpoint 視覺位移應為 40px，實際為 ${offsetX * 237 / 960}`);
});

test("mouse 背景拖曳後的合成 click 不選零件且下一次正常 click 可用", () => {
  const fixture = interactiveFixture();
  const announcements = [];
  BikeAnatomy.mount(fixture.root, {
    catalog: BikeParts,
    announce: message => announcements.push(message)
  });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const svg = fixture.root.querySelector("[data-bike-svg]");
  const viewport = fixture.root.querySelector("[data-bike-viewport]");
  const chain = byData(fixture.root, "bike-hotspot", "chain");
  svg.clientRect = { left: 0, top: 0, width: 768, height: 416 };
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");
  announcements.length = 0;

  surface.dispatch("pointerdown", {
    target: surface,
    pointerId: 91,
    pointerType: "mouse",
    clientX: 545,
    clientY: 286
  });
  surface.dispatch("pointermove", {
    target: surface,
    pointerId: 91,
    pointerType: "mouse",
    clientX: 605,
    clientY: 286
  });
  surface.dispatch("pointerup", {
    target: surface,
    pointerId: 91,
    pointerType: "mouse",
    clientX: 605,
    clientY: 286
  });
  surface.dispatch("click", {
    target: surface,
    pointerType: "mouse",
    clientX: 605,
    clientY: 286
  });

  assert.equal(viewport.getAttribute("transform"), "translate(75 0) scale(1.25)");
  assert.equal(fixture.detail.querySelector("h2").textContent, "上管");
  assert.deepEqual(announcements, []);

  surface.dispatch("pointerdown", {
    target: chain,
    pointerId: 92,
    pointerType: "mouse",
    clientX: 425,
    clientY: 378
  });
  surface.dispatch("pointerup", {
    target: chain,
    pointerId: 92,
    pointerType: "mouse",
    clientX: 425,
    clientY: 378
  });
  surface.dispatch("click", {
    target: chain,
    pointerType: "mouse",
    clientX: 425,
    clientY: 378
  });
  assert.equal(fixture.detail.querySelector("h2").textContent, "鏈條");
  assert.equal(announcements.length, 1);
});

test("pointercancel 後的 native marker 鍵盤 click 第一次即可選取", () => {
  const fixture = interactiveFixture();
  const announcements = [];
  BikeAnatomy.mount(fixture.root, {
    catalog: BikeParts,
    announce: message => announcements.push(message)
  });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const chain = byData(fixture.root, "bike-mobile-marker", "chain");

  surface.dispatch("pointerdown", {
    target: surface,
    pointerId: 101,
    pointerType: "mouse",
    clientX: 10,
    clientY: 10
  });
  surface.dispatch("pointercancel", {
    target: surface,
    pointerId: 101,
    pointerType: "mouse",
    clientX: 10,
    clientY: 10
  });
  surface.dispatch("click", {
    target: chain,
    pointerType: "",
    detail: 0,
    clientX: 0,
    clientY: 0
  });

  assert.equal(fixture.detail.querySelector("h2").textContent, "鏈條");
  assert.deepEqual(announcements, ["已選取 22 鏈條。"]);
});

test("unexpected lostpointercapture 後的 native marker 鍵盤 click 第一次即可選取", () => {
  const fixture = interactiveFixture();
  const announcements = [];
  BikeAnatomy.mount(fixture.root, {
    catalog: BikeParts,
    announce: message => announcements.push(message)
  });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const saddle = byData(fixture.root, "bike-mobile-marker", "saddle");

  surface.dispatch("pointerdown", {
    target: surface,
    pointerId: 102,
    pointerType: "mouse",
    clientX: 10,
    clientY: 10
  });
  surface.dispatch("lostpointercapture", {
    target: surface,
    pointerId: 102,
    pointerType: "mouse"
  });
  surface.dispatch("click", {
    target: saddle,
    pointerType: "",
    detail: 0,
    clientX: 0,
    clientY: 0
  });

  assert.equal(fixture.detail.querySelector("h2").textContent, "座墊");
  assert.deepEqual(announcements, ["已選取 14 座墊。"]);
});

test("moved、multi 與 touch direct gesture 都只吞下一個 pointer 合成 click", () => {
  const scenarios = ["moved", "multi", "touch-direct"];
  scenarios.forEach((scenario, index) => {
    const fixture = interactiveFixture();
    const announcements = [];
    BikeAnatomy.mount(fixture.root, {
      catalog: BikeParts,
      announce: message => announcements.push(message)
    });
    const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
    const chain = byData(fixture.root, "bike-mobile-marker", "chain");
    const pointerId = 111 + index * 2;

    surface.dispatch("pointerdown", {
      target: scenario === "touch-direct" ? chain : surface,
      pointerId,
      pointerType: scenario === "touch-direct" ? "touch" : "mouse",
      clientX: 10,
      clientY: 10
    });
    if (scenario === "moved") {
      surface.dispatch("pointermove", {
        target: surface,
        pointerId,
        pointerType: "mouse",
        clientX: 30,
        clientY: 10
      });
      surface.dispatch("pointerup", {
        target: surface,
        pointerId,
        pointerType: "mouse",
        clientX: 30,
        clientY: 10
      });
    } else if (scenario === "multi") {
      surface.dispatch("pointerdown", {
        target: surface,
        pointerId: pointerId + 1,
        pointerType: "touch",
        clientX: 30,
        clientY: 10
      });
      surface.dispatch("pointerup", {
        target: surface,
        pointerId: pointerId + 1,
        pointerType: "touch",
        clientX: 30,
        clientY: 10
      });
      surface.dispatch("pointerup", {
        target: surface,
        pointerId,
        pointerType: "mouse",
        clientX: 10,
        clientY: 10
      });
    } else {
      surface.dispatch("pointerup", { target: chain, pointerId, pointerType: "touch", clientX: 10, clientY: 10 });
    }

    const beforeClick = announcements.length;
    surface.dispatch("click", { target: chain, pointerType: "mouse", detail: 1, clientX: 0, clientY: 0 });
    assert.equal(announcements.length, beforeClick, `${scenario} 後的合成 click 必須被吞掉`);

    surface.dispatch("click", { target: chain, pointerType: "mouse", detail: 1, clientX: 0, clientY: 0 });
    assert.equal(announcements.length, beforeClick + 1, `${scenario} 不可永久吞掉後續正常 click`);
  });
});

test("cancel 後的新 pointerdown 會清除 stale suppression 並完成普通 pointer 選取", () => {
  const fixture = interactiveFixture();
  const announcements = [];
  BikeAnatomy.mount(fixture.root, {
    catalog: BikeParts,
    announce: message => announcements.push(message)
  });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const cassette = byData(fixture.root, "bike-mobile-marker", "cassette");

  surface.dispatch("pointerdown", {
    target: surface,
    pointerId: 121,
    pointerType: "mouse",
    clientX: 10,
    clientY: 10
  });
  surface.dispatch("pointercancel", {
    target: surface,
    pointerId: 121,
    pointerType: "mouse",
    clientX: 10,
    clientY: 10
  });
  surface.dispatch("pointerdown", {
    target: cassette,
    pointerId: 122,
    pointerType: "mouse",
    clientX: 0,
    clientY: 0
  });
  surface.dispatch("pointerup", {
    target: cassette,
    pointerId: 122,
    pointerType: "mouse",
    clientX: 0,
    clientY: 0
  });
  surface.dispatch("click", {
    target: cassette,
    pointerType: "mouse",
    detail: 1,
    clientX: 0,
    clientY: 0
  });

  assert.equal(fixture.detail.querySelector("h2").textContent, "飛輪");
  assert.deepEqual(announcements, ["已選取 23 飛輪。"]);
});

test("mouse 直接點擊 hotspot 不被 diagram gesture 搶走 pointer capture", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const chain = byData(fixture.root, "bike-hotspot", "chain");

  surface.dispatch("pointerdown", { target: chain, pointerId: 13, pointerType: "mouse", clientX: 365, clientY: 378 });
  assert.deepEqual(surface.pointerCaptureCalls, []);
  surface.dispatch("click", { target: chain, clientX: 365, clientY: 378 });
  assert.equal(fixture.detail.querySelector("h2").textContent, "鏈條");
});

test("最近 hotspot 換算會套用顯示 rect、viewBox、縮放與平移", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const svg = fixture.root.querySelector("[data-bike-svg]");
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");
  surface.dispatch("pointerdown", { pointerId: 15, pointerType: "mouse", clientX: 0, clientY: 0 });
  surface.dispatch("pointermove", { pointerId: 15, pointerType: "mouse", clientX: 20, clientY: 10 });
  surface.dispatch("pointerup", { pointerId: 15, pointerType: "mouse", clientX: 20, clientY: 10 });

  surface.dispatch("pointerdown", { pointerId: 16, pointerType: "touch", clientX: 496, clientY: 482.5 });
  surface.dispatch("pointerup", { pointerId: 16, pointerType: "touch", clientX: 496, clientY: 482.5 });
  assert.equal(fixture.detail.querySelector("h2").textContent, "鏈條");
});

test("觸控拖曳與雙指 gesture 不會誤選附近 hotspot", () => {
  const drag = interactiveFixture();
  BikeAnatomy.mount(drag.root, { catalog: BikeParts, announce() {} });
  const dragSurface = drag.root.querySelector("[data-bike-diagram-surface]");
  dragSurface.dispatch("pointerdown", { pointerId: 21, pointerType: "touch", clientX: 365, clientY: 378 });
  dragSurface.dispatch("pointermove", { pointerId: 21, pointerType: "touch", clientX: 379, clientY: 378 });
  dragSurface.dispatch("pointerup", { pointerId: 21, pointerType: "touch", clientX: 379, clientY: 378 });
  assert.equal(drag.detail.querySelector("h2").textContent, "上管");

  const pinch = interactiveFixture();
  BikeAnatomy.mount(pinch.root, { catalog: BikeParts, announce() {} });
  const pinchSurface = pinch.root.querySelector("[data-bike-diagram-surface]");
  pinchSurface.dispatch("pointerdown", { pointerId: 31, pointerType: "touch", clientX: 365, clientY: 378 });
  pinchSurface.dispatch("pointerdown", { pointerId: 32, pointerType: "touch", clientX: 385, clientY: 378 });
  pinchSurface.dispatch("pointerup", { pointerId: 32, pointerType: "touch", clientX: 385, clientY: 378 });
  pinchSurface.dispatch("pointerup", { pointerId: 31, pointerType: "touch", clientX: 365, clientY: 378 });
  assert.equal(pinch.detail.querySelector("h2").textContent, "上管");
});

test("正式 Render 百科 DOM 掛載後可用 click 選取熱點並更新七個詳情欄位", () => {
  const documentRef = new FakeDocument();
  const page = Render.bikePartsPage(documentRef, {
    routeInfo: { page: "bike-parts", params: {} },
    bikeParts: BikeParts
  });
  const root = page.querySelector("[data-bike-anatomy]");
  const detail = page.querySelector("[data-bike-part-detail]");
  BikeAnatomy.mount(root, { catalog: BikeParts, announce() {} });

  assert.equal(page.querySelectorAll("[data-bike-part-id]").length, 32);
  const surface = root.querySelector("[data-bike-diagram-surface]");
  const chain = byData(root, "bike-hotspot", "chain");
  surface.dispatch("click", { target: chain, clientX: 365, clientY: 378 });
  assert.equal(detail.querySelector("h2").textContent, "鏈條");
  assert.equal(detail.querySelectorAll(".bike-part-detail__row").length, 7);
  assert.equal(
    detail.querySelectorAll(".bike-part-detail__row")[0].querySelector("p").textContent,
    BikeParts.parts.find(part => part.id === "chain").purpose
  );
});

test("熱點 Enter 會阻止預設行為並選取零件", () => {
  const fixture = interactiveFixture();
  const announcements = [];
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce: value => announcements.push(value) });
  const saddle = byData(fixture.root, "bike-hotspot", "saddle");
  const event = saddle.dispatch("keydown", { key: "Enter" });

  assert.equal(event.defaultPrevented, true);
  assert.equal(fixture.detail.querySelector("h2").textContent, "座墊");
  assert.equal(saddle.getAttribute("aria-pressed"), "true");
  assert.equal(saddle.querySelector("[data-bike-selection-mark]").textContent, "✓");
  assert.match(announcements.at(-1), /座墊/);
});

test("靜態清單 Space 會阻止預設行為並選取零件", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const chainButton = byData(fixture.page, "bike-part-id", "chain");
  const event = chainButton.dispatch("keydown", { key: " " });

  assert.equal(event.defaultPrevented, true);
  assert.equal(fixture.detail.querySelector("h2").textContent, "鏈條");
  assert.equal(chainButton.getAttribute("aria-pressed"), "true");
});

test("上一個、下一個、縮放與重設控制會同步更新狀態", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  byData(fixture.root, "bike-view-action", "next").dispatch("click");
  assert.equal(fixture.detail.querySelector("h2").textContent, "下管");
  byData(fixture.root, "bike-view-action", "previous").dispatch("click");
  assert.equal(fixture.detail.querySelector("h2").textContent, "上管");
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");
  const viewport = fixture.root.querySelector("[data-bike-viewport]");
  assert.equal(viewport.getAttribute("transform"), "translate(0 0) scale(1.25)");
  byData(fixture.root, "bike-view-action", "reset").dispatch("click");
  assert.equal(viewport.getAttribute("transform"), "translate(0 0) scale(1)");
});

test("Pointer capture 涵蓋 1→2→1 轉換、雙指中點平移及 up/cancel 釋放", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const viewport = fixture.root.querySelector("[data-bike-viewport]");
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");
  surface.dispatch("pointerdown", { pointerId: 1, clientX: 10, clientY: 10 });
  assert.deepEqual(surface.pointerCaptureCalls, [1]);
  assert.deepEqual([...surface.capturedPointerIds], [1]);
  surface.dispatch("pointermove", { pointerId: 1, clientX: 30, clientY: 20 });
  assert.equal(viewport.getAttribute("transform"), "translate(20 10) scale(1.25)");

  surface.dispatch("pointerdown", { pointerId: 2, clientX: 50, clientY: 20 });
  assert.deepEqual(surface.pointerCaptureCalls, [1, 2]);
  assert.deepEqual([...surface.capturedPointerIds], [1, 2]);
  surface.dispatch("pointermove", { pointerId: 2, clientX: 70, clientY: 20 });
  assert.equal(viewport.getAttribute("transform"), "translate(30 10) scale(2.5)");

  surface.dispatch("pointerup", { pointerId: 2, clientX: 70, clientY: 20 });
  assert.deepEqual(surface.pointerReleaseCalls, [2]);
  assert.deepEqual([...surface.capturedPointerIds], [1]);
  surface.dispatch("pointermove", { pointerId: 1, clientX: 40, clientY: 25 });
  assert.equal(viewport.getAttribute("transform"), "translate(40 15) scale(2.5)");

  surface.dispatch("pointercancel", { pointerId: 1, clientX: 40, clientY: 25 });
  assert.deepEqual(surface.pointerReleaseCalls, [2, 1]);
  assert.deepEqual([...surface.capturedPointerIds], []);
});

test("lostpointercapture 會清除 stale gesture，且只釋放仍由 diagram surface 捕捉的 pointer", () => {
  const fixture = interactiveFixture();
  BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const surface = fixture.root.querySelector("[data-bike-diagram-surface]");
  const viewport = fixture.root.querySelector("[data-bike-viewport]");
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");

  surface.dispatch("pointerdown", { pointerId: 41, pointerType: "touch", clientX: 20, clientY: 20 });
  surface.dispatch("lostpointercapture", { pointerId: 41, pointerType: "touch" });
  surface.dispatch("pointermove", { pointerId: 41, pointerType: "touch", clientX: 80, clientY: 80 });
  surface.dispatch("pointerup", { pointerId: 41, pointerType: "touch", clientX: 80, clientY: 80 });

  assert.equal(viewport.getAttribute("transform"), "translate(0 0) scale(1.25)");
  assert.deepEqual(surface.pointerReleaseCalls, []);
});

test("重複 mount 不會疊加監聽器，destroy 會完整移除監聽器", () => {
  const fixture = interactiveFixture();
  const first = BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  const firstCount = fixture.listenerCount();
  assert.ok(firstCount > 0);
  const second = BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });
  assert.equal(fixture.listenerCount(), firstCount);
  first.destroy();
  assert.equal(fixture.listenerCount(), firstCount);
  second.destroy();
  assert.equal(fixture.listenerCount(), 0);
});

test("互動成功後才隱藏 fallback，destroy 時移除增強並恢復閱讀", () => {
  const fixture = interactiveFixture();
  const handle = BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce() {} });

  assert.equal(fixture.fallback.hidden, true);
  assert.ok(fixture.root.querySelector("[data-bike-enhancement]"));
  handle.destroy();
  assert.equal(fixture.fallback.hidden, false);
  assert.equal(fixture.root.querySelector("[data-bike-enhancement]"), null);
});

test("SVG 建立失敗時保留靜態百科內容", () => {
  const fixture = interactiveFixture();
  const originalChildren = [...fixture.root.children];
  fixture.documentRef.failSvg = true;
  const announcements = [];
  const handle = BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce: value => announcements.push(value) });
  assert.deepEqual(fixture.root.children, originalChildren);
  assert.equal(fixture.fallback.hidden, false);
  assert.equal(fixture.page.querySelectorAll("[data-bike-part-id]").length, 32);
  assert.match(announcements.at(-1), /圖解/);
  handle.destroy();
});
