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

  releasePointerCapture(pointerId) {
    this.pointerReleaseCalls.push(pointerId);
    this.capturedPointerIds.delete(pointerId);
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
  const controls = appendElement(documentRef, anatomy, "div");
  ["previous", "next", "zoom-in", "zoom-out", "reset"].forEach(action => {
    appendElement(documentRef, controls, "button", { "data-bike-view-action": action }, action);
  });
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
  ["frame-front-triangle", "frame-rear-triangle", "fork", "drop-handlebar", "saddle", "drivetrain", "disc-rotor", "brake-caliper"].forEach(shape => {
    assert.ok(byData(svg, "bike-shape", shape), `缺少 ${shape}`);
  });
});

test("SVG 以具名 group 容納可達熱點並只隱藏純車體視覺層", () => {
  const documentRef = new FakeDocument();
  const svg = BikeAnatomy.createSvg(documentRef, BikeParts, () => {});
  const visual = svg.querySelector("[data-bike-visual]");
  const hotspotLayer = svg.querySelector("[data-bike-hotspot-layer]");
  const hotspots = svg.querySelectorAll("[data-bike-hotspot]");

  assert.equal(svg.getAttribute("role"), "group");
  assert.equal(svg.getAttribute("aria-label"), "森林綠公路車完整側視零件互動圖");
  assert.equal(visual.getAttribute("aria-hidden"), "true");
  assert.equal(hotspotLayer.getAttribute("aria-hidden"), null);
  assert.equal(hotspots.length, 32);
  hotspots.forEach(hotspot => {
    assert.equal(hotspot.getAttribute("role"), "button");
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
  assert.equal(hotspots.length, 32);
  assert.equal(leaders.length, 32);
  assert.deepEqual(hotspots.map(node => node.dataset.bikeHotspot), BikeParts.parts.map(part => part.id));
  assert.deepEqual(leaders.map(node => node.dataset.bikeLeader), BikeParts.parts.map(part => part.id));
  BikeParts.parts.forEach(part => {
    const hotspot = byData(svg, "bike-hotspot", part.id);
    const leader = byData(svg, "bike-leader", part.id);
    assert.equal(hotspot.getAttribute("id"), `bike-hotspot-${part.id}`);
    assert.equal(leader.getAttribute("id"), `bike-leader-${part.id}`);
    assert.equal(hotspot.getAttribute("role"), "button");
    assert.equal(hotspot.getAttribute("tabindex"), "0");
    assert.equal(hotspot.getAttribute("aria-label"), `${part.number} ${part.name}`);
  });
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
  byData(root, "bike-hotspot", "chain").dispatch("click");
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
  const svg = fixture.root.querySelector("[data-bike-svg]");
  const viewport = fixture.root.querySelector("[data-bike-viewport]");
  byData(fixture.root, "bike-view-action", "zoom-in").dispatch("click");
  svg.dispatch("pointerdown", { pointerId: 1, clientX: 10, clientY: 10 });
  assert.deepEqual(svg.pointerCaptureCalls, [1]);
  assert.deepEqual([...svg.capturedPointerIds], [1]);
  svg.dispatch("pointermove", { pointerId: 1, clientX: 30, clientY: 20 });
  assert.equal(viewport.getAttribute("transform"), "translate(20 10) scale(1.25)");

  svg.dispatch("pointerdown", { pointerId: 2, clientX: 50, clientY: 20 });
  assert.deepEqual(svg.pointerCaptureCalls, [1, 2]);
  assert.deepEqual([...svg.capturedPointerIds], [1, 2]);
  svg.dispatch("pointermove", { pointerId: 2, clientX: 70, clientY: 20 });
  assert.equal(viewport.getAttribute("transform"), "translate(30 10) scale(2.5)");

  svg.dispatch("pointerup", { pointerId: 2, clientX: 70, clientY: 20 });
  assert.deepEqual(svg.pointerReleaseCalls, [2]);
  assert.deepEqual([...svg.capturedPointerIds], [1]);
  svg.dispatch("pointermove", { pointerId: 1, clientX: 40, clientY: 25 });
  assert.equal(viewport.getAttribute("transform"), "translate(40 15) scale(2.5)");

  svg.dispatch("pointercancel", { pointerId: 1, clientX: 40, clientY: 25 });
  assert.deepEqual(svg.pointerReleaseCalls, [2, 1]);
  assert.deepEqual([...svg.capturedPointerIds], []);
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

test("SVG 建立失敗時保留靜態百科內容", () => {
  const fixture = interactiveFixture();
  const originalChildren = [...fixture.root.children];
  fixture.documentRef.failSvg = true;
  const announcements = [];
  const handle = BikeAnatomy.mount(fixture.root, { catalog: BikeParts, announce: value => announcements.push(value) });
  assert.deepEqual(fixture.root.children, originalChildren);
  assert.equal(fixture.page.querySelectorAll("[data-bike-part-id]").length, 32);
  assert.match(announcements.at(-1), /圖解/);
  handle.destroy();
});
