"use strict";

(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { BikeAnatomy: api });
})(typeof window !== "undefined" ? window : globalThis, function () {
  const SVG_NS = "http://www.w3.org/2000/svg";
  const MIN_SCALE = 1;
  const MAX_SCALE = 3;
  const activeMounts = new WeakMap();

  function validateCatalog(catalog) {
    if (!catalog || !Array.isArray(catalog.parts) || catalog.parts.length === 0) {
      throw new TypeError("零件目錄必須包含 32 個零件。");
    }
    const ids = new Set();
    catalog.parts.forEach(part => {
      if (!part || typeof part.id !== "string" || !part.id || ids.has(part.id)) {
        throw new TypeError(ids.has(part && part.id) ? "零件目錄包含重複 ID。" : "零件目錄包含無效零件。");
      }
      ids.add(part.id);
      if (
        !Number.isFinite(part.number) ||
        !part.hotspot || !Number.isFinite(part.hotspot.x) || !Number.isFinite(part.hotspot.y) ||
        !part.labelAnchor || !Number.isFinite(part.labelAnchor.x) || !Number.isFinite(part.labelAnchor.y)
      ) {
        throw new TypeError(`零件目錄的 ${part.id} 缺少圖解座標。`);
      }
    });
    if (catalog.parts.length !== 32) throw new TypeError("零件目錄必須包含 32 個零件。");
    if (!ids.has(catalog.defaultPartId)) throw new TypeError("零件目錄缺少預設零件。");
    return true;
  }

  function initialView(catalog) {
    validateCatalog(catalog);
    return { selectedPartId: catalog.defaultPartId, scale: 1, offsetX: 0, offsetY: 0 };
  }

  function reduceView(state, action, catalog) {
    if (!state || !action) return state;
    if (action.type === "select") {
      return catalog.parts.some(part => part.id === action.partId)
        ? Object.assign({}, state, { selectedPartId: action.partId })
        : state;
    }
    if (action.type === "zoom") {
      const scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, state.scale + Number(action.delta || 0)));
      return Object.assign({}, state, scale === MIN_SCALE
        ? { scale, offsetX: 0, offsetY: 0 }
        : { scale });
    }
    if (action.type === "pan" && state.scale > 1) {
      return Object.assign({}, state, {
        offsetX: Math.max(-480, Math.min(480, state.offsetX + Number(action.dx || 0))),
        offsetY: Math.max(-260, Math.min(260, state.offsetY + Number(action.dy || 0)))
      });
    }
    if (action.type === "reset") return initialView(catalog);
    return state;
  }

  function svgElement(documentRef, name, attributes, text) {
    const element = documentRef.createElementNS(SVG_NS, name);
    Object.entries(attributes || {}).forEach(([key, value]) => element.setAttribute(key, value));
    if (text != null) element.textContent = String(text);
    return element;
  }

  function appendSpokes(documentRef, group, centerX, centerY) {
    for (let index = 0; index < 12; index += 1) {
      const angle = (Math.PI * 2 * index) / 12;
      group.append(svgElement(documentRef, "line", {
        x1: centerX,
        y1: centerY,
        x2: centerX + Math.cos(angle) * 126,
        y2: centerY + Math.sin(angle) * 126,
        stroke: "#54615b",
        "stroke-width": 1.5
      }));
    }
  }

  function createBicycle(documentRef, viewport) {
    const ink = "#26352e";
    const green = "#17633f";
    const metal = "#68756e";
    const wheels = svgElement(documentRef, "g", { "data-bike-shape": "wheelset" });
    [[245, 350], [715, 350]].forEach(([cx, cy]) => {
      wheels.append(svgElement(documentRef, "circle", {
        cx, cy, r: 145, fill: "none", stroke: ink, "stroke-width": 12
      }));
      wheels.append(svgElement(documentRef, "circle", {
        cx, cy, r: 132, fill: "none", stroke: metal, "stroke-width": 3
      }));
      appendSpokes(documentRef, wheels, cx, cy);
      wheels.append(svgElement(documentRef, "circle", {
        cx, cy, r: 9, fill: ink, stroke: "#f1eee4", "stroke-width": 2
      }));
    });
    viewport.append(wheels);

    viewport.append(svgElement(documentRef, "path", {
      "data-bike-shape": "frame-front-triangle",
      d: "M 420 190 L 610 190 L 455 350 Z",
      fill: "none", stroke: green, "stroke-width": 17,
      "stroke-linecap": "round", "stroke-linejoin": "round"
    }));
    viewport.append(svgElement(documentRef, "path", {
      "data-bike-shape": "frame-rear-triangle",
      d: "M 420 190 L 245 350 L 455 350 Z",
      fill: "none", stroke: green, "stroke-width": 13,
      "stroke-linecap": "round", "stroke-linejoin": "round"
    }));
    viewport.append(svgElement(documentRef, "line", {
      "data-bike-shape": "head-tube",
      x1: 610, y1: 190, x2: 632, y2: 250,
      stroke: green, "stroke-width": 19, "stroke-linecap": "round"
    }));

    const fork = svgElement(documentRef, "g", { "data-bike-shape": "fork" });
    fork.append(svgElement(documentRef, "path", {
      d: "M 622 205 Q 650 272 715 350",
      fill: "none", stroke: green, "stroke-width": 13, "stroke-linecap": "round"
    }));
    fork.append(svgElement(documentRef, "path", {
      d: "M 632 242 Q 670 300 715 350",
      fill: "none", stroke: ink, "stroke-width": 5, "stroke-linecap": "round"
    }));
    viewport.append(fork);

    const cockpit = svgElement(documentRef, "g");
    cockpit.append(svgElement(documentRef, "path", {
      "data-bike-shape": "drop-handlebar",
      d: "M 660 151 C 690 137 716 139 718 158 C 720 181 702 194 686 182 C 674 173 683 158 704 158",
      fill: "none", stroke: ink, "stroke-width": 10,
      "stroke-linecap": "round", "stroke-linejoin": "round"
    }));
    cockpit.append(svgElement(documentRef, "line", {
      x1: 608, y1: 180, x2: 666, y2: 151,
      stroke: metal, "stroke-width": 11, "stroke-linecap": "round"
    }));
    viewport.append(cockpit);

    const saddle = svgElement(documentRef, "g", { "data-bike-shape": "saddle" });
    saddle.append(svgElement(documentRef, "line", {
      x1: 420, y1: 190, x2: 410, y2: 157,
      stroke: metal, "stroke-width": 9, "stroke-linecap": "round"
    }));
    saddle.append(svgElement(documentRef, "path", {
      d: "M 374 151 Q 409 140 446 150 Q 447 161 428 164 L 382 162 Q 373 159 374 151 Z",
      fill: ink
    }));
    viewport.append(saddle);

    const drivetrain = svgElement(documentRef, "g", { "data-bike-shape": "drivetrain" });
    drivetrain.append(svgElement(documentRef, "circle", {
      cx: 455, cy: 350, r: 42, fill: "#f1eee4", stroke: ink, "stroke-width": 6
    }));
    drivetrain.append(svgElement(documentRef, "circle", {
      cx: 455, cy: 350, r: 31, fill: "none", stroke: metal, "stroke-width": 3, "stroke-dasharray": "3 4"
    }));
    drivetrain.append(svgElement(documentRef, "line", {
      x1: 455, y1: 350, x2: 505, y2: 385, stroke: ink, "stroke-width": 8, "stroke-linecap": "round"
    }));
    drivetrain.append(svgElement(documentRef, "line", {
      x1: 501, y1: 384, x2: 535, y2: 384, stroke: ink, "stroke-width": 8, "stroke-linecap": "round"
    }));
    drivetrain.append(svgElement(documentRef, "path", {
      d: "M 247 334 L 456 310 M 247 367 L 457 391",
      fill: "none", stroke: "#424b46", "stroke-width": 5
    }));
    drivetrain.append(svgElement(documentRef, "circle", {
      cx: 247, cy: 350, r: 25, fill: "none", stroke: metal, "stroke-width": 7
    }));
    drivetrain.append(svgElement(documentRef, "path", {
      d: "M 252 371 Q 268 395 279 413 Q 288 425 299 413",
      fill: "none", stroke: ink, "stroke-width": 7, "stroke-linecap": "round"
    }));
    drivetrain.append(svgElement(documentRef, "circle", {
      cx: 299, cy: 413, r: 9, fill: "none", stroke: ink, "stroke-width": 4
    }));
    viewport.append(drivetrain);

    const rotors = svgElement(documentRef, "g", { "data-bike-shape": "disc-rotor" });
    [[245, 350], [715, 350]].forEach(([cx, cy]) => {
      rotors.append(svgElement(documentRef, "circle", {
        cx, cy, r: 42, fill: "none", stroke: metal, "stroke-width": 5, "stroke-dasharray": "7 5"
      }));
      rotors.append(svgElement(documentRef, "circle", {
        cx, cy, r: 15, fill: "none", stroke: metal, "stroke-width": 3
      }));
    });
    viewport.append(rotors);

    const calipers = svgElement(documentRef, "g", { "data-bike-shape": "brake-caliper" });
    calipers.append(svgElement(documentRef, "rect", {
      x: 662, y: 298, width: 22, height: 34, rx: 7,
      fill: ink, transform: "rotate(-28 673 315)"
    }));
    calipers.append(svgElement(documentRef, "rect", {
      x: 276, y: 311, width: 21, height: 32, rx: 7,
      fill: ink, transform: "rotate(30 286 327)"
    }));
    viewport.append(calipers);
  }

  function createSvg(documentRef, catalog, _onSelect) {
    validateCatalog(catalog);
    const svg = svgElement(documentRef, "svg", {
      viewBox: "0 0 960 520",
      width: 960,
      height: 520,
      role: "group",
      "aria-labelledby": "bike-anatomy-title",
      "aria-describedby": "bike-anatomy-description",
      "data-bike-svg": "true",
      style: "touch-action: none"
    });
    svg.append(svgElement(documentRef, "title", { id: "bike-anatomy-title" }, "森林綠公路車完整側視零件互動圖"));
    svg.append(svgElement(documentRef, "desc", { id: "bike-anatomy-description" }, "包含 32 個可操作編號，可用鍵盤選取零件，並可縮放或拖曳圖面。"));
    const viewport = svgElement(documentRef, "g", {
      "data-bike-viewport": "true",
      transform: "translate(0 0) scale(1)"
    });
    const visual = svgElement(documentRef, "g", {
      "data-bike-visual": "true",
      "aria-hidden": "true"
    });
    createBicycle(documentRef, visual);
    viewport.append(visual);

    const leaderLayer = svgElement(documentRef, "g", { "aria-hidden": "true" });
    catalog.parts.forEach(part => {
      const midX = part.hotspot.x + (part.labelAnchor.x - part.hotspot.x) * 0.45;
      leaderLayer.append(svgElement(documentRef, "polyline", {
        id: `bike-leader-${part.id}`,
        "data-bike-leader": part.id,
        points: `${part.hotspot.x},${part.hotspot.y} ${midX},${part.hotspot.y} ${part.labelAnchor.x},${part.labelAnchor.y}`,
        fill: "none", stroke: "#68756e", "stroke-width": 1.5,
        "stroke-dasharray": "4 3"
      }));
      leaderLayer.append(svgElement(documentRef, "text", {
        id: `bike-leader-label-${part.id}`,
        "data-bike-leader-label": part.id,
        x: part.labelAnchor.x,
        y: part.labelAnchor.y,
        fill: "#26352e",
        "font-size": 12,
        "text-anchor": part.labelAnchor.x < part.hotspot.x ? "end" : "start"
      }, `${part.number} ${part.name}`));
    });
    viewport.append(leaderLayer);

    const hotspotLayer = svgElement(documentRef, "g", { "data-bike-hotspot-layer": "true" });
    catalog.parts.forEach(part => {
      const hotspot = svgElement(documentRef, "g", {
        id: `bike-hotspot-${part.id}`,
        "data-bike-hotspot": part.id,
        role: "button",
        tabindex: 0,
        "aria-label": `${part.number} ${part.name}`,
        "aria-pressed": "false"
      });
      hotspot.append(svgElement(documentRef, "circle", {
        "data-bike-hotspot-ring": "true",
        cx: part.hotspot.x,
        cy: part.hotspot.y,
        r: 16,
        fill: "#f1eee4",
        stroke: "#17633f",
        "stroke-width": 2
      }));
      hotspot.append(svgElement(documentRef, "text", {
        "data-bike-hotspot-number": "true",
        x: part.hotspot.x,
        y: part.hotspot.y + 5,
        "text-anchor": "middle",
        fill: "#17633f",
        "font-size": 13,
        "font-weight": 700
      }, part.number));
      hotspot.append(svgElement(documentRef, "text", {
        "data-bike-selection-mark": "true",
        x: part.hotspot.x + 13,
        y: part.hotspot.y - 11,
        "text-anchor": "middle",
        fill: "#26352e",
        "font-size": 15,
        "font-weight": 800
      }, ""));
      hotspotLayer.append(hotspot);
    });
    viewport.append(hotspotLayer);
    svg.append(viewport);
    return svg;
  }

  function htmlElement(documentRef, name, attributes, text) {
    const element = documentRef.createElement(name);
    Object.entries(attributes || {}).forEach(([key, value]) => element.setAttribute(key, value));
    if (text != null) element.textContent = String(text);
    return element;
  }

  function createControls(documentRef) {
    const panel = htmlElement(documentRef, "div", { class: "bike-anatomy-controls" });
    panel.append(htmlElement(documentRef, "p", {
      "data-bike-selected-title": "true",
      "aria-live": "polite"
    }, ""));
    const labels = [
      ["previous", "上一個零件"],
      ["next", "下一個零件"],
      ["zoom-in", "放大"],
      ["zoom-out", "縮小"],
      ["reset", "重設圖解"]
    ];
    labels.forEach(([action, label]) => {
      panel.append(htmlElement(documentRef, "button", {
        type: "button",
        "data-bike-view-action": action,
        "aria-label": label
      }, label));
    });
    return panel;
  }

  function mount(root, options) {
    if (!root || !root.ownerDocument) throw new TypeError("圖解掛載區無效。");
    const settings = options || {};
    const catalog = settings.catalog;
    const announce = typeof settings.announce === "function" ? settings.announce : function () {};
    validateCatalog(catalog);

    const current = activeMounts.get(root);
    if (current) current.destroy();

    const documentRef = root.ownerDocument;
    const scope = (typeof root.closest === "function" && root.closest(".bike-parts-page")) || root.parentNode || root;
    const fallback = root.querySelector("[data-bike-fallback]");
    let svg;
    let controls;
    let enhancement;
    try {
      svg = createSvg(documentRef, catalog, function () {});
      controls = createControls(documentRef);
      enhancement = htmlElement(documentRef, "div", { "data-bike-enhancement": "true" });
      enhancement.append(controls, svg);
    } catch (_error) {
      let destroyed = false;
      const failedHandle = {
        destroy() {
          if (destroyed) return;
          destroyed = true;
          if (activeMounts.get(root) === failedHandle) activeMounts.delete(root);
        }
      };
      activeMounts.set(root, failedHandle);
      announce("公路車圖解暫時無法載入，靜態百科內容仍可閱讀。");
      return failedHandle;
    }

    root.append(enhancement);
    if (fallback) fallback.hidden = true;
    const listeners = [];
    const pointers = new Map();
    const partById = new Map(catalog.parts.map(part => [part.id, part]));
    const partNames = new Map(catalog.parts.map(part => [part.id, part.name]));
    const viewport = root.querySelector("[data-bike-viewport]");
    const detail = scope.querySelector("[data-bike-part-detail]");
    const title = root.querySelector("[data-bike-selected-title]");
    let state = initialView(catalog);
    let gesture = null;
    let destroyed = false;

    function listen(element, type, handler) {
      if (!element) return;
      element.addEventListener(type, handler);
      listeners.push(() => element.removeEventListener(type, handler));
    }

    function selectedDetails(part) {
      return [
        part.purpose,
        part.materials,
        part.adjustment,
        part.maintenance,
        part.warningSigns,
        (part.relatedParts || []).map(id => partNames.get(id) || id).join("、"),
        part.workshopAdvice
      ];
    }

    function renderState() {
      const part = partById.get(state.selectedPartId);
      viewport.setAttribute("transform", `translate(${state.offsetX} ${state.offsetY}) scale(${state.scale})`);
      root.querySelectorAll("[data-bike-hotspot]").forEach(element => {
        const selected = element.dataset.bikeHotspot === state.selectedPartId;
        element.setAttribute("aria-pressed", String(selected));
        element.classList[selected ? "add" : "remove"]("is-selected");
        const mark = element.querySelector("[data-bike-selection-mark]");
        if (mark) mark.textContent = selected ? "✓" : "";
      });
      scope.querySelectorAll("[data-bike-part-id]").forEach(element => {
        const selected = element.dataset.bikePartId === state.selectedPartId;
        element.setAttribute("aria-pressed", String(selected));
        element.classList[selected ? "add" : "remove"]("is-selected");
      });
      title.textContent = `目前選取：${part.number} ${part.name}`;
      if (detail) {
        const heading = detail.querySelector("h2");
        if (heading) heading.textContent = part.name;
        const rows = detail.querySelectorAll(".bike-part-detail__row");
        selectedDetails(part).forEach((value, index) => {
          const output = rows[index] && rows[index].querySelector("p");
          if (output) output.textContent = value || "未提供";
        });
      }
    }

    function dispatch(action, message) {
      state = reduceView(state, action, catalog);
      renderState();
      if (message) announce(message(state));
    }

    function select(partId) {
      const part = partById.get(partId);
      if (!part) return;
      dispatch({ type: "select", partId }, () => `已選取 ${part.number} ${part.name}。`);
    }

    function bindSelection(element, partId) {
      listen(element, "click", () => select(partId));
      listen(element, "keydown", event => {
        if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
        event.preventDefault();
        select(partId);
      });
    }

    function setHovered(partId, hovered) {
      [
        root.querySelector(`[data-bike-hotspot="${partId}"]`),
        root.querySelector(`[data-bike-leader="${partId}"]`),
        root.querySelector(`[data-bike-leader-label="${partId}"]`),
        scope.querySelector(`[data-bike-part-id="${partId}"]`)
      ].filter(Boolean).forEach(element => {
        element.classList[hovered ? "add" : "remove"]("is-hovered");
      });
    }

    function bindHover(element, partId) {
      listen(element, "pointerenter", () => setHovered(partId, true));
      listen(element, "pointerleave", () => setHovered(partId, false));
    }

    root.querySelectorAll("[data-bike-hotspot]").forEach(element => {
      bindSelection(element, element.dataset.bikeHotspot);
      bindHover(element, element.dataset.bikeHotspot);
      const ring = element.querySelector("[data-bike-hotspot-ring]");
      listen(element, "focus", () => {
        element.setAttribute("data-focus-visible", "true");
        if (ring) {
          ring.setAttribute("r", 19);
          ring.setAttribute("stroke-width", 4);
        }
      });
      listen(element, "blur", () => {
        element.removeAttribute("data-focus-visible");
        if (ring) {
          ring.setAttribute("r", 16);
          ring.setAttribute("stroke-width", 2);
        }
      });
    });
    scope.querySelectorAll("[data-bike-part-id]").forEach(element => {
      bindSelection(element, element.dataset.bikePartId);
      bindHover(element, element.dataset.bikePartId);
    });

    function cycle(direction) {
      const index = catalog.parts.findIndex(part => part.id === state.selectedPartId);
      const nextIndex = (index + direction + catalog.parts.length) % catalog.parts.length;
      select(catalog.parts[nextIndex].id);
    }

    root.querySelectorAll("[data-bike-view-action]").forEach(element => {
      listen(element, "click", () => {
        const action = element.dataset.bikeViewAction;
        if (action === "previous") cycle(-1);
        if (action === "next") cycle(1);
        if (action === "zoom-in") dispatch({ type: "zoom", delta: 0.25 }, value => `圖解縮放為 ${value.scale} 倍。`);
        if (action === "zoom-out") dispatch({ type: "zoom", delta: -0.25 }, value => `圖解縮放為 ${value.scale} 倍。`);
        if (action === "reset") dispatch({ type: "reset" }, () => "圖解已重設。");
      });
    });

    function gestureFromPointers() {
      const values = [...pointers.values()];
      if (values.length !== 2) return null;
      const dx = values[1].x - values[0].x;
      const dy = values[1].y - values[0].y;
      return {
        distance: Math.hypot(dx, dy),
        midX: (values[0].x + values[1].x) / 2,
        midY: (values[0].y + values[1].y) / 2
      };
    }

    function nearestHotspot(clientX, clientY) {
      if (typeof svg.getBoundingClientRect !== "function") return null;
      const rect = svg.getBoundingClientRect();
      const viewBox = String(svg.getAttribute("viewBox") || "").trim().split(/\s+/).map(Number);
      if (viewBox.length !== 4 || !viewBox.every(Number.isFinite) || rect.width <= 0 || rect.height <= 0) return null;
      const [viewX, viewY, viewWidth, viewHeight] = viewBox;
      const cssScale = Math.min(rect.width / viewWidth, rect.height / viewHeight);
      const originX = rect.left + (rect.width - viewWidth * cssScale) / 2;
      const originY = rect.top + (rect.height - viewHeight * cssScale) / 2;
      let nearest = null;
      catalog.parts.forEach(part => {
        const hotspotX = originX + ((part.hotspot.x * state.scale + state.offsetX) - viewX) * cssScale;
        const hotspotY = originY + ((part.hotspot.y * state.scale + state.offsetY) - viewY) * cssScale;
        const distance = Math.hypot(clientX - hotspotX, clientY - hotspotY);
        if (distance <= 22 && (!nearest || distance < nearest.distance)) nearest = { part, distance };
      });
      return nearest && nearest.part;
    }

    listen(svg, "pointerdown", event => {
      if (
        event.target && typeof event.target.closest === "function" &&
        event.target.closest("[data-bike-hotspot]")
      ) return;
      pointers.set(event.pointerId, {
        x: event.clientX,
        y: event.clientY,
        startX: event.clientX,
        startY: event.clientY,
        moved: false,
        hadMultiple: false,
        pointerType: event.pointerType || "mouse"
      });
      if (pointers.size > 1) pointers.forEach(pointer => { pointer.hadMultiple = true; });
      if (typeof svg.setPointerCapture === "function") svg.setPointerCapture(event.pointerId);
      gesture = gestureFromPointers();
    });
    listen(svg, "pointermove", event => {
      const previous = pointers.get(event.pointerId);
      if (!previous) return;
      const moved = previous.moved || Math.hypot(event.clientX - previous.startX, event.clientY - previous.startY) > 8;
      if (pointers.size === 1) {
        pointers.set(event.pointerId, Object.assign({}, previous, { x: event.clientX, y: event.clientY, moved }));
        dispatch({ type: "pan", dx: event.clientX - previous.x, dy: event.clientY - previous.y });
        return;
      }
      pointers.set(event.pointerId, Object.assign({}, previous, { x: event.clientX, y: event.clientY, moved }));
      const nextGesture = gestureFromPointers();
      if (gesture && nextGesture && gesture.distance > 0) {
        const targetScale = state.scale * (nextGesture.distance / gesture.distance);
        dispatch({ type: "zoom", delta: targetScale - state.scale });
        dispatch({ type: "pan", dx: nextGesture.midX - gesture.midX, dy: nextGesture.midY - gesture.midY });
      }
      gesture = nextGesture;
    });
    function endPointer(event) {
      const pointer = pointers.get(event.pointerId);
      if (
        event.type === "pointerup" && pointer && pointer.pointerType !== "mouse" &&
        !pointer.moved && !pointer.hadMultiple && pointers.size === 1
      ) {
        const part = nearestHotspot(event.clientX, event.clientY);
        if (part) select(part.id);
      }
      pointers.delete(event.pointerId);
      if (
        typeof svg.hasPointerCapture === "function" && svg.hasPointerCapture(event.pointerId) &&
        typeof svg.releasePointerCapture === "function"
      ) svg.releasePointerCapture(event.pointerId);
      gesture = gestureFromPointers();
    }
    listen(svg, "pointerup", endPointer);
    listen(svg, "pointercancel", endPointer);
    listen(svg, "lostpointercapture", event => {
      pointers.delete(event.pointerId);
      gesture = gestureFromPointers();
    });
    listen(svg, "pointerleave", event => {
      if (pointers.has(event.pointerId)) endPointer(event);
    });

    renderState();
    const handle = {
      destroy() {
        if (destroyed) return;
        destroyed = true;
        listeners.splice(0).forEach(remove => remove());
        pointers.clear();
        gesture = null;
        if (enhancement) enhancement.remove();
        if (fallback) fallback.hidden = false;
        if (activeMounts.get(root) === handle) activeMounts.delete(root);
      }
    };
    activeMounts.set(root, handle);
    return handle;
  }

  return { validateCatalog, initialView, reduceView, createSvg, mount };
});
