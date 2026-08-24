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
      "Progress",
      "ImageTools",
      "MapView",
      "Editor",
      "Render",
      "RouteArt",
      "BikeParts",
      "TrackRegistry",
      "TrackManifest",
      "TrackLoader"
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
    const progress = app.Progress.create(root.localStorage);
    const defaultFilters = () => ({
      query: "",
      regionId: "",
      areaId: "",
      difficulty: "",
      gradeBand: "",
      durationBand: "",
      sort: "featured",
      page: 1
    });
    const state = {
      theme: app.Theme.loadTheme(root.localStorage),
      filters: defaultFilters(),
      favorites: loadFavorites(),
      completed: progress.list(),
      routeInfo: app.Router.parseHash(root.location.hash),
      allRoutes: [],
      visibleRoutes: [],
      pageView: { items: [], page: 1, pageSize: 24, total: 0, totalPages: 1 },
      selectedRoute: null,
      trackState: {
        routeId: null,
        status: "idle",
        track: null,
        error: null
      },
      regions: app.Data.regions,
      challenges: app.Data.challenges,
      routeArt: app.Data.routeArt,
      bikeParts: app.BikeParts,
      routeArtFilter: "all"
    };
    let interactiveHandles = [];
    let interactiveGeneration = 0;
    let hasRendered = false;
    let trackRequestId = 0;
    const trackLoader = app.TrackLoader.create({
      documentRef: root.document,
      registry: app.TrackRegistry,
      manifest: app.TrackManifest,
      baseUrl: root.document.baseURI
    });

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
      interactiveGeneration += 1;
      interactiveHandles.forEach(handle => handle.destroy());
      interactiveHandles = [];
    }

    function hydratedRoute(route) {
      const trackState = state.trackState;
      if (
        !route ||
        trackState.routeId !== route.id ||
        trackState.status !== "ready" ||
        !trackState.track ||
        !Array.isArray(trackState.track.coordinates)
      ) {
        return route;
      }
      return Object.assign({}, route, {
        coordinates: trackState.track.coordinates,
        waypoints: Array.isArray(trackState.track.waypoints)
          ? trackState.track.waypoints
          : route.waypoints,
        track: trackState.track
      });
    }

    function mountInteractiveViews() {
      const generation = interactiveGeneration;
      rootElement.querySelectorAll("[data-route-map]").forEach(element => {
        const route = hydratedRoute(state.allRoutes.find(item => item.id === element.dataset.routeMap));
        if (!route) return;
        if (hasUsableCoordinates(route.coordinates)) {
          const handle = app.MapView.mount(element, route);
          interactiveHandles.push(handle);
          element.setAttribute("aria-busy", "false");
          return;
        }
        if (state.routeInfo.page !== "route-art" || !route.trackRef) return;
        element.setAttribute("aria-busy", "true");
        trackLoader.load(route.trackRef).then(track => {
          if (
            generation !== interactiveGeneration ||
            (typeof rootElement.contains === "function" && !rootElement.contains(element))
          ) return;
          if (!hasUsableCoordinates(track && track.coordinates)) {
            throw new Error("路線軌跡至少需要兩個有效座標。");
          }
          const hydratedTrack = app.TrackAnalysis && typeof app.TrackAnalysis.hydrateTrack === "function"
            ? app.TrackAnalysis.hydrateTrack(track)
            : track;
          const previewRoute = Object.assign({}, route, {
            coordinates: hydratedTrack.coordinates,
            waypoints: Array.isArray(hydratedTrack.waypoints) ? hydratedTrack.waypoints : route.waypoints,
            track: hydratedTrack
          });
          const handle = app.MapView.mount(element, previewRoute);
          interactiveHandles.push(handle);
          element.setAttribute("aria-busy", "false");
        }).catch(() => {
          if (generation !== interactiveGeneration) return;
          element.setAttribute("aria-busy", "false");
          element.textContent = "路線預覽暫時無法載入。";
        });
      });
      rootElement.querySelectorAll("[data-art-map]").forEach(element => {
        const art = state.routeArt.find(item => item.id === element.dataset.artMap);
        if (!art || art.status !== "track-ready" || !app.RouteArt.hasUsableSegments(art.segments)) return;
        interactiveHandles.push(app.MapView.mount(element, art));
      });
      rootElement.querySelectorAll("[data-elevation]").forEach(element => {
        const route = hydratedRoute(state.allRoutes.find(item => item.id === element.dataset.elevation));
        if (route && Array.isArray(route.coordinates) && route.coordinates.length > 1) {
          app.MapView.mountElevation(element, route, route.track);
        }
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
          trackLoader,
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
      state.pageView = app.Filter.paginate(state.visibleRoutes, state.filters.page, 24);
      state.filters.page = state.pageView.page;
      state.selectedRoute = state.routeInfo.page === "route"
        ? state.allRoutes.find(route => route.id === state.routeInfo.params.routeId) || null
        : null;
    }

    function setIdleTrackState() {
      trackRequestId += 1;
      state.trackState = { routeId: null, status: "idle", track: null, error: null };
    }

    function hasUsableCoordinates(coordinates) {
      return Array.isArray(coordinates)
        && coordinates.length >= 2
        && coordinates.every(point => point
          && Number.isFinite(point.lat)
          && Number.isFinite(point.lng)
          && point.lat >= -90
          && point.lat <= 90
          && point.lng >= -180
          && point.lng <= 180);
    }

    function startTrackLoad(route) {
      const requestedRouteId = route.id;
      const requestedTrackRef = route.trackRef;
      const requestId = ++trackRequestId;
      state.trackState = {
        routeId: requestedRouteId,
        status: "loading",
        track: null,
        error: null
      };
      trackLoader.load(requestedTrackRef).then(track => {
        const selected = state.selectedRoute;
        if (
          requestId !== trackRequestId ||
          !selected ||
          selected.id !== requestedRouteId ||
          selected.trackRef !== requestedTrackRef
        ) return;
        if (!hasUsableCoordinates(track && track.coordinates)) {
          throw new Error("路線軌跡至少需要兩個有效座標。");
        }
        const hydratedTrack = app.TrackAnalysis && typeof app.TrackAnalysis.hydrateTrack === "function"
          ? app.TrackAnalysis.hydrateTrack(track)
          : track;
        state.trackState = { routeId: requestedRouteId, status: "ready", track: hydratedTrack, error: null };
        render();
      }).catch(error => {
        const selected = state.selectedRoute;
        if (
          requestId !== trackRequestId ||
          !selected ||
          selected.id !== requestedRouteId ||
          selected.trackRef !== requestedTrackRef
        ) return;
        state.trackState = { routeId: requestedRouteId, status: "error", track: null, error };
        render();
      });
    }

    function ensureSelectedTrack() {
      const route = state.selectedRoute;
      if (!route) {
        if (state.trackState.status !== "idle" || state.trackState.routeId) setIdleTrackState();
        return;
      }

      if (!route.trackRef && hasUsableCoordinates(route.coordinates)) {
        if (state.trackState.routeId !== route.id || state.trackState.status !== "ready") {
          trackRequestId += 1;
          state.trackState = {
            routeId: route.id,
            status: "ready",
            track: app.TrackAnalysis && typeof app.TrackAnalysis.hydrateTrack === "function"
              ? app.TrackAnalysis.hydrateTrack({ routeId: route.id, coordinates: route.coordinates })
              : { routeId: route.id, coordinates: route.coordinates },
            error: null
          };
        }
        return;
      }

      if (!route.trackRef) {
        if (Array.isArray(route.coordinates)) {
          trackRequestId += 1;
          state.trackState = {
            routeId: route.id,
            status: "error",
            track: null,
            error: new Error("路線軌跡至少需要兩個有效座標。")
          };
        } else if (state.trackState.routeId !== route.id || state.trackState.status !== "idle") {
          trackRequestId += 1;
          state.trackState = { routeId: route.id, status: "idle", track: null, error: null };
        }
        return;
      }

      if (state.trackState.routeId === route.id && ["loading", "ready", "error"].includes(state.trackState.status)) {
        return;
      }
      startTrackLoad(route);
    }

    function render(options) {
      clearInteractiveViews();
      updateDerivedState();
      ensureSelectedTrack();
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
        state.filters = Object.assign(defaultFilters(), filters || {}, { page: 1 });
        if (state.routeInfo.page !== "routes" && state.routeInfo.page !== "region") {
          root.location.hash = "#/routes";
          return;
        }
        render();
        announce(`目前顯示 ${state.visibleRoutes.length} 條路線。`);
      },
      setPage(page) {
        state.filters.page = Number.isInteger(Number(page)) ? Number(page) : 1;
        render();
        announce(`目前顯示第 ${state.pageView.page} 頁。`);
      },
      setRouteArtFilter(filterKey) {
        state.routeArtFilter = app.RouteArt.FILTERS.includes(filterKey) ? filterKey : "all";
        render();
        announce(`目前顯示 ${app.RouteArt.filter(state.routeArt, state.routeArtFilter).length} 件作品。`);
      },
      downloadArtGpx(art) {
        if (!art || art.status !== "track-ready" || !app.RouteArt.hasUsableSegments(art.segments)) {
          announce("這件作品目前沒有可下載的公開軌跡。");
          return;
        }
        try {
          const download = app.Gpx.createDownload(art, { segments: art.segments });
          createFileDownload(download.filename, download.text, download.mimeType);
          announce(`已準備下載 ${art.name} GPX。`);
        } catch (error) {
          announce(error.message || "目前無法建立 GPX。");
        }
      },
      downloadGpx(route, track) {
        try {
          const activeTrack = track || (
            state.trackState.routeId === route.id && state.trackState.status === "ready"
              ? state.trackState.track
              : null
          );
          const download = app.Gpx.createDownload(route, activeTrack);
          createFileDownload(download.filename, download.text, download.mimeType);
          announce(`已準備下載 ${route.name} GPX。`);
        } catch (error) {
          announce(error.message || "目前無法建立 GPX。");
        }
      },
      retryTrack(routeId) {
        const route = state.selectedRoute;
        if (!route || route.id !== routeId || !route.trackRef) return;
        trackLoader.clear(route.trackRef);
        trackRequestId += 1;
        state.trackState = { routeId, status: "idle", track: null, error: null };
        render();
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
      },
      toggleCompleted(routeId) {
        try {
          const completed = progress.toggle(routeId);
          state.completed = progress.list();
          render();
          announce(completed ? "已標記為騎過此路線。" : "已取消騎乘完成標記。");
        } catch (error) {
          announce(error.message || "目前無法儲存完成標記。");
        }
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
