"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Editor: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  function cleanText(value) {
    return String(value == null ? "" : value).trim();
  }

  function finiteNumber(value, label, minimum) {
    const number = Number(value);
    if (!Number.isFinite(number) || number < minimum) {
      throw new Error(`${label}必須是有效數值。`);
    }
    return number;
  }

  function buildRoute(values, baseRoute, coordinates, now, randomToken) {
    const source = values || {};
    const base = baseRoute || {};
    const name = cleanText(source.name);
    if (!name) throw new Error("路線名稱不得為空白。");
    const difficulty = Number(source.difficulty);
    if (!Number.isInteger(difficulty) || difficulty < 1 || difficulty > 5) {
      throw new Error("難度必須介於 1 到 5。");
    }
    const hasLocalCoordinates = Array.isArray(coordinates) && coordinates.length >= 2;
    if (!hasLocalCoordinates && !cleanText(base.trackRef)) {
      throw new Error("路線至少需要兩個有效座標。");
    }

    const timestamp = Number.isFinite(now) ? now : Date.now();
    const token = cleanText(randomToken) || Math.random().toString(36).slice(2, 8);
    const id = base.id || `local-${timestamp}-${token}`;
    const createdAt = base.createdAt || new Date(timestamp).toISOString();
    const thumbnail = cleanText(source.thumbnail) || base.thumbnail || "assets/images/city-morning.webp";
    const tags = String(source.tags || "")
      .split(/[,，]/)
      .map(cleanText)
      .filter(Boolean);

    const route = Object.assign({}, base, {
      id,
      slug: base.slug || id,
      name,
      regionId: cleanText(source.regionId),
      regionName: cleanText(source.regionName),
      area: cleanText(source.area) || base.area || "自訂",
      category: cleanText(source.category) || "自訂",
      summary: cleanText(source.summary) || `${name}是儲存在此瀏覽器的自訂路線。`,
      story: cleanText(source.story) || "這段路線由使用者在狂輪誌本機工作桌建立。",
      thumbnail,
      distanceKm: finiteNumber(source.distanceKm, "距離", 0.1),
      elevationGainM: finiteNumber(source.elevationGainM, "總爬升", 0),
      difficulty,
      durationMinutes: finiteNumber(source.durationMinutes, "預估時間", 1),
      tags: tags.length ? tags : ["自訂路線"],
      cautions: Array.isArray(base.cautions) && base.cautions.length
        ? base.cautions
        : ["道路與天候可能變動，出發前請再次確認"],
      supplies: Array.isArray(base.supplies) && base.supplies.length
        ? base.supplies
        : ["水與簡易補給", "前後車燈", "基本維修工具"],
      featured: Boolean(base.featured),
      createdAt,
      updatedAt: new Date(timestamp).toISOString()
    });

    if (hasLocalCoordinates) {
      route.trackSource = "local";
      route.coordinates = coordinates.map(point => ({
        lat: Number(point.lat),
        lng: Number(point.lng),
        ele: Number(point.ele) || 0
      }));
      delete route.trackRef;
    } else {
      route.trackRef = base.trackRef;
      delete route.trackSource;
      delete route.coordinates;
    }

    return route;
  }

  function buildImportPrompt(preview) {
    const summary = `備份包含 ${preview.valid} 筆有效資料、${preview.invalid} 筆無效資料與 ${preview.conflicts} 筆衝突。`;
    const migration = preview.sourceVersion === 1
      ? "這是 v1 舊版備份，匯入後會升級為 v2。"
      : "";
    return `${migration}${summary}確定匯入？`;
  }

  async function resolveWorkingCoordinates(route, trackLoader) {
    const safeRoute = route || {};
    if (safeRoute.trackSource === "local" && Array.isArray(safeRoute.coordinates)) {
      return safeRoute.coordinates.map(point => ({ ...point }));
    }
    if (!safeRoute.trackRef) return [];
    if (!trackLoader || typeof trackLoader.load !== "function") {
      throw new Error("內建路線軌跡載入器無法使用。");
    }
    const track = await trackLoader.load(safeRoute.trackRef);
    if (!track || !Array.isArray(track.coordinates) || track.coordinates.length < 2) {
      throw new Error("內建路線軌跡資料無效。");
    }
    return track.coordinates.map(point => ({ ...point }));
  }

  function node(documentRef, tag, options, children) {
    const element = documentRef.createElement(tag);
    const settings = options || {};
    if (settings.className) element.className = settings.className;
    if (settings.text != null) element.textContent = String(settings.text);
    if (settings.type) element.type = settings.type;
    if (settings.name) element.name = settings.name;
    if (settings.value != null) element.value = String(settings.value);
    if (settings.label) element.setAttribute("aria-label", settings.label);
    if (settings.required) element.required = true;
    if (settings.min != null) element.min = String(settings.min);
    if (settings.max != null) element.max = String(settings.max);
    if (settings.step != null) element.step = String(settings.step);
    if (settings.accept) element.accept = settings.accept;
    Object.entries(settings.on || {}).forEach(([event, handler]) => element.addEventListener(event, handler));
    (Array.isArray(children) ? children : children ? [children] : []).forEach(child => {
      if (child == null) return;
      element.append(child.nodeType ? child : documentRef.createTextNode(String(child)));
    });
    return element;
  }

  function field(documentRef, labelText, control) {
    return node(documentRef, "label", { className: "editor-field" }, [
      node(documentRef, "span", { className: "editor-field__label", text: labelText }),
      control
    ]);
  }

  function readTextFile(file, browserWindow, maxBytes, label) {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error(`請選擇${label}。`));
        return;
      }
      if (file.size > maxBytes) {
        reject(new Error(`${label}檔案過大。`));
        return;
      }
      const reader = new browserWindow.FileReader();
      reader.addEventListener("load", () => resolve(String(reader.result || "")), { once: true });
      reader.addEventListener("error", () => reject(new Error(`無法讀取${label}。`)), { once: true });
      reader.readAsText(file);
    });
  }

  function downloadText(browserWindow, filename, text, type) {
    const blob = new browserWindow.Blob([text], { type });
    const url = browserWindow.URL.createObjectURL(blob);
    const link = browserWindow.document.createElement("a");
    link.href = url;
    link.download = filename;
    browserWindow.document.body.append(link);
    link.click();
    link.remove();
    browserWindow.setTimeout(() => browserWindow.URL.revokeObjectURL(url), 0);
  }

  function mount(element, options) {
    const documentRef = element.ownerDocument;
    const browserWindow = documentRef.defaultView;
    const settings = options || {};
    const routes = Array.isArray(settings.routes) ? settings.routes : [];
    const regions = Array.isArray(settings.regions) ? settings.regions : [];
    const store = settings.store;
    const imageTools = settings.imageTools;
    const gpx = settings.gpx;
    const geo = settings.geo;
    const trackLoader = settings.trackLoader;
    const announce = settings.announce || function () {};
    const onChanged = settings.onChanged || function () {};

    function confirmAction(message) {
      return browserWindow.confirm(message);
    }

    function routeRow(route) {
      return node(documentRef, "article", { className: "editor-route" }, [
        node(documentRef, "div", { className: "editor-route__copy" }, [
          node(documentRef, "span", { className: "eyebrow", text: `${route.regionName} · ${route.category}` }),
          node(documentRef, "h3", { text: route.name }),
          node(documentRef, "p", { text: `${route.distanceKm} km · 爬升 ${route.elevationGainM.toLocaleString("zh-Hant")} m · 難度 ${route.difficulty}` })
        ]),
        node(documentRef, "div", { className: "editor-route__actions" }, [
          node(documentRef, "button", {
            className: "button button--quiet",
            type: "button",
            text: "編輯",
            on: { click: () => openForm(route) }
          }),
          node(documentRef, "button", {
            className: "button button--danger",
            type: "button",
            text: "刪除",
            on: {
              click() {
                if (!confirmAction(`確定要刪除「${route.name}」？內建路線可用重設功能復原。`)) return;
                try {
                  store.remove(route.id);
                  announce(`已刪除${route.name}。`);
                  onChanged();
                } catch (error) {
                  announce(error.message);
                }
              }
            }
          })
        ])
      ]);
    }

    async function openForm(route) {
      const base = route || null;
      let workingCoordinates = base && base.trackSource === "local" && Array.isArray(base.coordinates)
        ? base.coordinates.map(point => ({ ...point }))
        : [];
      let builtInCoordinates = [];
      if (base && base.trackRef) {
        try {
          builtInCoordinates = await resolveWorkingCoordinates(base, trackLoader);
        } catch (error) {
          announce(error.message || "內建路線軌跡暫時無法載入。");
          return;
        }
      }
      let workingThumbnail = base ? base.thumbnail : "";
      const form = node(documentRef, "form", { className: "route-editor-form" });
      const heading = node(documentRef, "div", { className: "editor-dialog__header" }, [
        node(documentRef, "div", {}, [
          node(documentRef, "p", { className: "eyebrow", text: base ? "EDIT LOCAL COPY" : "NEW LOCAL ROUTE" }),
          node(documentRef, "h2", { text: base ? `編輯 ${base.name}` : "建立本機路線" })
        ]),
        node(documentRef, "button", {
          className: "dialog-close",
          type: "button",
          text: "關閉",
          on: { click: () => dialog.close() }
        })
      ]);

      const nameInput = node(documentRef, "input", {
        type: "text",
        name: "name",
        value: base ? base.name : "",
        required: true
      });
      const regionSelect = node(documentRef, "select", { name: "regionId" });
      regions.forEach(region => {
        const option = node(documentRef, "option", { value: region.id, text: region.name });
        if ((base && base.regionId) === region.id) option.selected = true;
        regionSelect.append(option);
      });
      const categoryInput = node(documentRef, "input", {
        type: "text",
        name: "category",
        value: base ? base.category : "丘陵",
        required: true
      });
      const distanceInput = node(documentRef, "input", {
        type: "number",
        name: "distanceKm",
        value: base ? base.distanceKm : 10,
        min: 0.1,
        step: 0.1,
        required: true
      });
      const elevationInput = node(documentRef, "input", {
        type: "number",
        name: "elevationGainM",
        value: base ? base.elevationGainM : 100,
        min: 0,
        step: 1,
        required: true
      });
      const difficultyInput = node(documentRef, "input", {
        type: "number",
        name: "difficulty",
        value: base ? base.difficulty : 2,
        min: 1,
        max: 5,
        step: 1,
        required: true
      });
      const durationInput = node(documentRef, "input", {
        type: "number",
        name: "durationMinutes",
        value: base ? base.durationMinutes : 60,
        min: 1,
        step: 1,
        required: true
      });
      const tagsInput = node(documentRef, "input", {
        type: "text",
        name: "tags",
        value: base ? base.tags.join("，") : "自訂路線"
      });
      const summaryInput = node(documentRef, "textarea", {
        name: "summary",
        value: base ? base.summary : ""
      });
      summaryInput.rows = 3;
      const storyInput = node(documentRef, "textarea", {
        name: "story",
        value: base ? base.story : ""
      });
      storyInput.rows = 5;
      const imageInput = node(documentRef, "input", {
        type: "file",
        name: "image",
        accept: "image/jpeg,image/png,image/webp"
      });
      const gpxInput = node(documentRef, "input", {
        type: "file",
        name: "gpx",
        accept: ".gpx,application/gpx+xml,application/xml,text/xml"
      });
      const fileStatus = node(documentRef, "p", {
        className: "editor-file-status",
        text: workingCoordinates.length
          ? `目前有 ${workingCoordinates.length} 個座標點。`
          : (base && base.trackRef
            ? `已載入 ${builtInCoordinates.length} 個內建軌跡點；若未上傳 GPX，將只儲存文字修改。`
            : "請上傳至少包含兩個座標點的 GPX。")
      });

      imageInput.addEventListener("change", async () => {
        try {
          workingThumbnail = await imageTools.compress(imageInput.files[0]);
          fileStatus.textContent = "圖片已壓縮，儲存路線時會寫入本機。";
        } catch (error) {
          imageInput.value = "";
          announce(error.message);
        }
      });

      gpxInput.addEventListener("change", async () => {
        try {
          const xml = await readTextFile(gpxInput.files[0], browserWindow, 1024 * 1024, "GPX");
          const parsed = gpx.parse(xml);
          workingCoordinates = parsed.coordinates;
          const distance = geo.totalDistanceKm(workingCoordinates);
          distanceInput.value = distance.toFixed(1);
          fileStatus.textContent = `GPX 有 ${workingCoordinates.length} 個座標點，估算距離 ${distance.toFixed(1)} km。`;
        } catch (error) {
          gpxInput.value = "";
          announce(error.message);
        }
      });

      form.append(
        heading,
        node(documentRef, "div", { className: "editor-form-grid" }, [
          field(documentRef, "路線名稱", nameInput),
          field(documentRef, "地區", regionSelect),
          field(documentRef, "類型", categoryInput),
          field(documentRef, "距離（公里）", distanceInput),
          field(documentRef, "總爬升（公尺）", elevationInput),
          field(documentRef, "難度（1–5）", difficultyInput),
          field(documentRef, "預估時間（分鐘）", durationInput),
          field(documentRef, "標籤（逗號分隔）", tagsInput),
          field(documentRef, "路線縮圖", imageInput),
          field(documentRef, "GPX 路線檔", gpxInput),
          node(documentRef, "div", { className: "editor-field editor-field--wide" }, [
            node(documentRef, "span", { className: "editor-field__label", text: "GPX 狀態" }),
            fileStatus
          ]),
          node(documentRef, "label", { className: "editor-field editor-field--wide" }, [
            node(documentRef, "span", { className: "editor-field__label", text: "短摘要" }),
            summaryInput
          ]),
          node(documentRef, "label", { className: "editor-field editor-field--wide" }, [
            node(documentRef, "span", { className: "editor-field__label", text: "路線故事" }),
            storyInput
          ])
        ]),
        node(documentRef, "div", { className: "editor-dialog__actions" }, [
          node(documentRef, "button", {
            className: "button button--quiet",
            type: "button",
            text: "取消",
            on: { click: () => dialog.close() }
          }),
          node(documentRef, "button", {
            className: "button button--accent",
            type: "submit",
            text: "儲存變更"
          })
        ])
      );

      form.addEventListener("submit", event => {
        event.preventDefault();
        const data = new browserWindow.FormData(form);
        const region = regions.find(item => item.id === data.get("regionId"));
        try {
          const saved = buildRoute({
            name: data.get("name"),
            regionId: data.get("regionId"),
            regionName: region ? region.name : "自訂",
            area: region ? region.area : "自訂",
            category: data.get("category"),
            distanceKm: data.get("distanceKm"),
            elevationGainM: data.get("elevationGainM"),
            difficulty: data.get("difficulty"),
            durationMinutes: data.get("durationMinutes"),
            summary: data.get("summary"),
            story: data.get("story"),
            tags: data.get("tags"),
            thumbnail: workingThumbnail
          }, base, workingCoordinates);
          store.save(saved);
          dialog.close();
          announce(`已儲存${saved.name}。`);
          onChanged();
        } catch (error) {
          announce(error.message);
        }
      });

      dialog.replaceChildren(form);
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
      nameInput.focus();
    }

    const dialog = node(documentRef, "dialog", {
      className: "editor-dialog",
      label: "路線編輯器"
    });
    const importInput = node(documentRef, "input", {
      className: "sr-only",
      type: "file",
      accept: "application/json,.json",
      label: "選擇備份 JSON"
    });
    importInput.addEventListener("change", async () => {
      try {
        const text = await readTextFile(importInput.files[0], browserWindow, 5 * 1024 * 1024, "備份");
        const preview = store.previewImport(text);
        const confirmed = confirmAction(buildImportPrompt(preview));
        if (!confirmed) return;
        const result = store.importJson(text);
        announce(`已匯入 ${result.imported} 筆，略過 ${result.skipped} 筆。`);
        onChanged();
      } catch (error) {
        announce(error.message);
      } finally {
        importInput.value = "";
      }
    });

    const toolbar = node(documentRef, "div", { className: "editor-toolbar" }, [
      node(documentRef, "button", {
        className: "button button--accent",
        type: "button",
        text: "新增路線",
        on: { click: () => openForm(null) }
      }),
      node(documentRef, "button", {
        className: "button button--quiet",
        type: "button",
        text: "匯出備份",
        on: {
          click() {
            downloadText(browserWindow, "crown-ride-atlas-backup.json", store.exportJson(), "application/json;charset=utf-8");
            announce("已準備下載本機資料備份。");
          }
        }
      }),
      node(documentRef, "button", {
        className: "button button--quiet",
        type: "button",
        text: "匯入備份",
        on: { click: () => importInput.click() }
      }),
      node(documentRef, "button", {
        className: "button button--danger",
        type: "button",
        text: "恢復內建資料",
        on: {
          click() {
            if (!confirmAction("這會移除所有本機新增與修改。請先匯出備份。確定繼續？")) return;
            try {
              store.reset();
              announce("已恢復內建路線資料。");
              onChanged();
            } catch (error) {
              announce(error.message);
            }
          }
        }
      }),
      importInput
    ]);

    element.replaceChildren(
      toolbar,
      node(documentRef, "div", { className: "editor-route-list" }, routes.map(routeRow)),
      dialog
    );
    return { destroy() { dialog.remove(); } };
  }

  return {
    buildRoute,
    buildImportPrompt,
    resolveWorkingCoordinates,
    mount
  };
});
