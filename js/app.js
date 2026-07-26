"use strict";

(function (root) {
  function start() {
    const app = root.CrownRideAtlas || {};
    const required = [
      "Data",
      "Filter",
      "Router",
      "Theme",
      "Geo",
      "Gpx",
      "Store",
      "ImageTools",
      "MapView",
      "Editor",
      "Render"
    ];
    const missing = required.filter(name => !app[name]);
    const rootElement = root.document.getElementById("app");

    if (missing.length || !rootElement) {
      const message = root.document.createElement("p");
      message.className = "fatal-error";
      message.textContent = `狂輪誌無法啟動：缺少 ${missing.join("、") || "頁面容器"}。`;
      root.document.body.append(message);
      return;
    }

    const store = app.Store.create(root.localStorage, app.Data.routes);
    const state = {
      theme: app.Theme.loadTheme(root.localStorage),
      filters: {
        query: "",
        regionId: "",
        difficulty: "",
        sort: "featured"
      },
      favorites: loadFavorites(),
      routeInfo: app.Router.parseHash(root.location.hash),
      allRoutes: [],
      visibleRoutes: [],
      selectedRoute: null,
      regions: app.Data.regions,
      challenges: app.Data.challenges,
      routeArt: app.Data.routeArt
    };
    let interactiveHandles = [];
    let hasRendered = false;

    app.Theme.applyTheme(state.theme, root.document.documentElement, root.localStorage);

    function loadFavorites() {
      try {
        const parsed = JSON.parse(root.localStorage.getItem("crownRideAtlas.favorites") || "[]");
        return new Set(Array.isArray(parsed) ? parsed.filter(value => typeof value === "string") : []);
      } catch (_error) {
        return new Set();
      }
    }

    function persistFavorites() {
      try {
        root.localStorage.setItem("crownRideAtlas.favorites", JSON.stringify([...state.favorites]));
      } catch (_error) {
        announce("目前無法儲存收藏。");
      }
    }

    function announce(message) {
      const status = rootElement.querySelector("[data-status]");
      if (!status) return;
      status.textContent = "";
      root.requestAnimationFrame(() => {
        status.textContent = message;
      });
    }

    function clearInteractiveViews() {
      interactiveHandles.forEach(handle => handle.destroy());
      interactiveHandles = [];
    }

    function mountInteractiveViews() {
      rootElement.querySelectorAll("[data-route-map]").forEach(element => {
        const route = state.allRoutes.find(item => item.id === element.dataset.routeMap);
        if (!route) return;
        const handle = app.MapView.mount(element, route);
        interactiveHandles.push(handle);
        element.setAttribute("aria-busy", "false");
      });
      rootElement.querySelectorAll("[data-elevation]").forEach(element => {
        const route = state.allRoutes.find(item => item.id === element.dataset.elevation);
        if (route) app.MapView.mountElevation(element, route);
      });
      const editorRoot = rootElement.querySelector("[data-editor-root]");
      if (editorRoot) {
        interactiveHandles.push(app.Editor.mount(editorRoot, {
          routes: state.allRoutes,
          regions: state.regions,
          store,
          imageTools: app.ImageTools,
          gpx: app.Gpx,
          geo: app.Geo,
          announce,
          onChanged: () => render()
        }));
      }
    }

    function updateDerivedState() {
      state.routeInfo = app.Router.parseHash(root.location.hash);
      state.allRoutes = store.list();
      const routeFilters = Object.assign({}, state.filters);
      if (state.routeInfo.page === "region") {
        routeFilters.regionId = state.routeInfo.params.regionId;
      }
      state.visibleRoutes = app.Filter.apply(state.allRoutes, routeFilters);
      state.selectedRoute = state.routeInfo.page === "route"
        ? state.allRoutes.find(route => route.id === state.routeInfo.params.routeId) || null
        : null;
    }

    function render(options) {
      clearInteractiveViews();
      updateDerivedState();
      root.document.title = app.Render.pageTitle(state.routeInfo, state.allRoutes);
      const result = app.Render.mount(rootElement, state, actions);
      mountInteractiveViews();
      if (hasRendered && options && options.focusMain) result.main.focus();
      hasRendered = true;
    }

    function createFileDownload(filename, text, type) {
      const blob = new Blob([text], { type });
      const url = root.URL.createObjectURL(blob);
      const link = root.document.createElement("a");
      link.href = url;
      link.download = filename;
      root.document.body.append(link);
      link.click();
      link.remove();
      root.setTimeout(() => root.URL.revokeObjectURL(url), 0);
    }

    const actions = {
      setTheme(theme) {
        state.theme = app.Theme.applyTheme(theme, root.document.documentElement, root.localStorage);
        render();
        announce(`已切換為${state.theme === "yellow" ? "黃衫" : state.theme === "green" ? "衝刺綠" : state.theme === "polka" ? "登山圓點" : "白衫"}主題。`);
      },
      setFilters(filters) {
        state.filters = Object.assign({
          query: "",
          regionId: "",
          difficulty: "",
          sort: "featured"
        }, filters || {});
        if (state.routeInfo.page !== "routes" && state.routeInfo.page !== "region") {
          root.location.hash = "#/routes";
          return;
        }
        render();
        announce(`目前顯示 ${state.visibleRoutes.length} 條路線。`);
      },
      downloadGpx(route) {
        try {
          const download = app.Gpx.createDownload(route);
          createFileDownload(download.filename, download.text, download.mimeType);
          announce(`已準備下載 ${route.name} GPX。`);
        } catch (error) {
          announce(error.message || "目前無法建立 GPX。");
        }
      },
      toggleFavorite(routeId) {
        if (state.favorites.has(routeId)) {
          state.favorites.delete(routeId);
        } else {
          state.favorites.add(routeId);
        }
        persistFavorites();
        render();
        announce(state.favorites.has(routeId) ? "已收藏路線。" : "已取消收藏。");
      }
    };

    root.addEventListener("hashchange", () => render({ focusMain: true }));
    if (!root.location.hash) {
      root.history.replaceState(null, "", "#/home");
    }
    render();
  }

  if (root.document.readyState === "loading") {
    root.document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})(window);
