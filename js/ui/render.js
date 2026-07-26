"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Render: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const difficultyNames = ["", "入門", "輕鬆", "進階", "困難", "極限"];
  const themeLabels = {
    yellow: "黃衫",
    green: "衝刺綠",
    polka: "登山圓點",
    white: "白衫"
  };

  function formatDuration(minutes) {
    const total = Math.max(0, Math.round(Number(minutes) || 0));
    if (total < 60) return `${total} 分`;
    const hours = Math.floor(total / 60);
    const remaining = total % 60;
    return remaining ? `${hours} 小時 ${remaining} 分` : `${hours} 小時`;
  }

  function difficultyLabel(value) {
    return difficultyNames[Number(value)] || "未分級";
  }

  function elevationSummary(coordinates) {
    const elevations = (Array.isArray(coordinates) ? coordinates : [])
      .map(point => Number(point && point.ele))
      .filter(Number.isFinite);
    if (elevations.length === 0) {
      return { available: false, maximum: null, label: "未提供海拔資料" };
    }
    const maximum = Math.max(...elevations);
    return {
      available: true,
      maximum,
      label: `最高 ${maximum.toLocaleString("zh-Hant")} m`
    };
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

  function routeArtEntries(routeArt, routes) {
    const routeById = new Map((Array.isArray(routes) ? routes : []).map(route => [route.id, route]));
    return (Array.isArray(routeArt) ? routeArt : [])
      .map(art => ({ art, route: routeById.get(art.routeId) }))
      .filter(entry => Boolean(entry.route));
  }

  function selectFeaturedRoute(routes) {
    const source = Array.isArray(routes) ? routes : [];
    return source.find(route => route.id === "new-taipei-yangjin-3p")
      || source.find(route => route.featured)
      || source[0]
      || null;
  }

  function pageTitle(routeInfo, routes) {
    const page = routeInfo && routeInfo.page;
    if (page === "home") return "狂輪誌";
    if (page === "route") {
      const route = (routes || []).find(item => item.id === routeInfo.params.routeId);
      return route ? `${route.name}｜狂輪誌` : "找不到路線｜狂輪誌";
    }
    if (page === "routes") return "探索路線｜狂輪誌";
    if (page === "challenges") return "經典挑戰｜狂輪誌";
    if (page === "route-art") return "路線美學｜狂輪誌";
    if (page === "editor") return "我的路線｜狂輪誌";
    if (page === "region") return "地區路線｜狂輪誌";
    return "找不到頁面｜狂輪誌";
  }

  function node(documentRef, tag, options, children) {
    const element = documentRef.createElement(tag);
    const settings = options || {};
    if (settings.className) element.className = settings.className;
    if (settings.text != null) element.textContent = String(settings.text);
    if (settings.id) element.id = settings.id;
    if (settings.href) element.setAttribute("href", settings.href);
    if (settings.type) element.setAttribute("type", settings.type);
    if (settings.name) element.setAttribute("name", settings.name);
    if (settings.value != null) element.setAttribute("value", String(settings.value));
    if (settings.placeholder) element.setAttribute("placeholder", settings.placeholder);
    if (settings.label) element.setAttribute("aria-label", settings.label);
    if (settings.current) element.setAttribute("aria-current", settings.current);
    if (settings.pressed != null) element.setAttribute("aria-pressed", String(settings.pressed));
    if (settings.controls) element.setAttribute("aria-controls", settings.controls);
    if (settings.expanded != null) element.setAttribute("aria-expanded", String(settings.expanded));
    if (settings.disabled) element.disabled = true;
    if (settings.hidden) element.hidden = true;
    Object.entries(settings.data || {}).forEach(([key, value]) => {
      element.dataset[key] = String(value);
    });
    Object.entries(settings.attributes || {}).forEach(([key, value]) => {
      element.setAttribute(key, String(value));
    });
    Object.entries(settings.on || {}).forEach(([event, handler]) => {
      element.addEventListener(event, handler);
    });
    (Array.isArray(children) ? children : children ? [children] : []).forEach(child => {
      if (child == null) return;
      element.append(child.nodeType ? child : documentRef.createTextNode(String(child)));
    });
    return element;
  }

  function svgSignature(documentRef) {
    const namespace = "http://www.w3.org/2000/svg";
    const svg = documentRef.createElementNS(namespace, "svg");
    svg.setAttribute("class", "route-signature");
    svg.setAttribute("viewBox", "0 0 600 300");
    svg.setAttribute("aria-hidden", "true");
    [
      ["route-signature__contour", "M -30 248 C 72 171 142 279 251 203 S 450 83 650 166"],
      ["route-signature__contour", "M -20 176 C 95 99 170 222 282 142 S 481 26 640 96"],
      ["route-signature__line route-signature__line--halo", "M 20 260 C 110 241 95 143 185 164 S 260 268 327 143 S 430 54 480 118 S 543 150 584 31"],
      ["route-signature__line", "M 20 260 C 110 241 95 143 185 164 S 260 268 327 143 S 430 54 480 118 S 543 150 584 31"]
    ].forEach(([className, data]) => {
      const path = documentRef.createElementNS(namespace, "path");
      path.setAttribute("class", className);
      path.setAttribute("d", data);
      svg.append(path);
    });
    return svg;
  }

  function themeSwitcher(documentRef, state, actions) {
    const group = node(documentRef, "div", {
      className: "theme-switcher",
      label: "切換領騎衫主題",
      attributes: { role: "group" }
    });
    Object.entries(themeLabels).forEach(([theme, label]) => {
      group.append(node(documentRef, "button", {
        className: `theme-button theme-button--${theme}`,
        type: "button",
        label,
        pressed: state.theme === theme,
        data: { theme },
        on: { click: () => actions.setTheme(theme) }
      }, node(documentRef, "span", { className: "theme-button__dot" })));
    });
    return group;
  }

  function header(documentRef, state, actions) {
    const navId = "primary-navigation";
    const nav = node(documentRef, "nav", {
      className: "primary-nav",
      id: navId,
      label: "主要導覽"
    }, [
      node(documentRef, "a", {
        className: state.routeInfo.page === "routes" ? "primary-nav__link is-active" : "primary-nav__link",
        text: "探索路線",
        href: "#/routes",
        current: state.routeInfo.page === "routes" ? "page" : null
      }),
      node(documentRef, "a", {
        className: state.routeInfo.page === "challenges" ? "primary-nav__link is-active" : "primary-nav__link",
        text: "經典挑戰",
        href: "#/challenges",
        current: state.routeInfo.page === "challenges" ? "page" : null
      }),
      node(documentRef, "a", {
        className: state.routeInfo.page === "route-art" ? "primary-nav__link is-active" : "primary-nav__link",
        text: "路線美學",
        href: "#/route-art",
        current: state.routeInfo.page === "route-art" ? "page" : null
      }),
      node(documentRef, "a", {
        className: state.routeInfo.page === "editor" ? "primary-nav__link is-active" : "primary-nav__link",
        text: "我的路線",
        href: "#/editor",
        current: state.routeInfo.page === "editor" ? "page" : null
      })
    ]);
    const menu = node(documentRef, "button", {
      className: "menu-button",
      type: "button",
      text: "選單",
      controls: navId,
      expanded: false,
      on: {
        click(event) {
          const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
          event.currentTarget.setAttribute("aria-expanded", String(!expanded));
          nav.classList.toggle("is-open", !expanded);
        }
      }
    });

    return node(documentRef, "header", { className: "site-header" }, [
      node(documentRef, "a", {
        className: "brand",
        href: "#/home",
        label: "狂輪誌首頁"
      }, [
        node(documentRef, "span", { className: "brand__zh", text: "狂輪誌" }),
        node(documentRef, "span", { className: "brand__en", text: "CROWN RIDE ATLAS" })
      ]),
      nav,
      node(documentRef, "div", { className: "header-actions" }, [
        themeSwitcher(documentRef, state, actions),
        menu
      ])
    ]);
  }

  function stat(documentRef, value, label) {
    return node(documentRef, "div", { className: "route-stat" }, [
      node(documentRef, "strong", { className: "route-stat__value", text: value }),
      node(documentRef, "span", { className: "route-stat__label", text: label })
    ]);
  }

  function imageFigure(documentRef, route, className) {
    const image = node(documentRef, "img", {
      className: `${className}__image`,
      attributes: {
        src: route.thumbnail,
        alt: `${route.name}路線情境`,
        loading: "lazy",
        decoding: "async"
      }
    });
    image.addEventListener("error", () => {
      image.hidden = true;
    });
    return node(documentRef, "figure", { className }, [
      image,
      node(documentRef, "figcaption", {
        className: `${className}__caption`,
        text: `${route.regionName} · ${route.category}`
      })
    ]);
  }

  function routeCard(documentRef, route, state) {
    const favorite = state.favorites.has(route.id);
    const article = node(documentRef, "article", { className: "route-card paper-panel" });
    article.append(
      node(documentRef, "div", {
        className: "route-card__media",
      }, imageFigure(documentRef, route, "route-card__figure")),
      node(documentRef, "div", { className: "route-card__body" }, [
        node(documentRef, "div", { className: "route-card__meta" }, [
          node(documentRef, "span", { className: "eyebrow", text: `${route.regionName} · ${route.category}` }),
          node(documentRef, "span", {
            className: "route-card__favorite",
            text: favorite ? "已收藏" : "",
            label: favorite ? "已收藏" : null
          })
        ]),
        node(documentRef, "h3", { className: "route-card__title" }, node(documentRef, "a", {
          href: `#/route/${encodeURIComponent(route.id)}`,
          text: route.name
        })),
        node(documentRef, "p", { className: "route-card__summary", text: route.summary }),
        node(documentRef, "div", { className: "route-card__stats" }, [
          stat(documentRef, `${route.distanceKm} km`, "距離"),
          stat(documentRef, `${route.elevationGainM.toLocaleString("zh-Hant")} m`, "爬升"),
          stat(documentRef, difficultyLabel(route.difficulty), `難度 ${route.difficulty}`)
        ])
      ])
    );
    return article;
  }

  function sectionHeading(documentRef, eyebrow, title, description, action) {
    const children = [
      node(documentRef, "div", { className: "section-heading__copy" }, [
        node(documentRef, "p", { className: "eyebrow", text: eyebrow }),
        node(documentRef, "h2", { text: title }),
        description ? node(documentRef, "p", { className: "section-heading__description", text: description }) : null
      ])
    ];
    if (action) children.push(action);
    return node(documentRef, "div", { className: "section-heading" }, children);
  }

  function homePage(documentRef, state) {
    const featured = selectFeaturedRoute(state.allRoutes);
    if (!featured) {
      return node(documentRef, "div", { className: "home-page" }, [
        node(documentRef, "section", { className: "page-intro" }, [
          node(documentRef, "p", { className: "eyebrow", text: "LOCAL ROUTE ARCHIVE" }),
          node(documentRef, "h1", { text: "路線目錄目前是空的。" }),
          node(documentRef, "p", {
            className: "page-intro__description",
            text: "你可以從備份還原內容，或重設本機資料取回內建的台灣路線。"
          })
        ]),
        node(documentRef, "section", { className: "empty-state paper-panel" }, [
          node(documentRef, "h2", { text: "從我的路線重新開始" }),
          node(documentRef, "p", { text: "前往本機工作桌匯入備份、建立路線或重設資料。" }),
          node(documentRef, "a", { className: "button button--accent", href: "#/editor", text: "開啟我的路線" })
        ])
      ]);
    }
    const hero = node(documentRef, "section", { className: "home-hero" }, [
      node(documentRef, "div", { className: "home-hero__copy" }, [
        node(documentRef, "p", { className: "eyebrow", text: "FEATURED ROUTE · TAIWAN" }),
        node(documentRef, "h1", { text: "穿過風與硫磺，寫一段島嶼山路。" }),
        node(documentRef, "p", {
          className: "home-hero__intro",
          text: "從城市邊界出發，沿著海風、稜線與聚落，找到下一條值得騎乘的台灣公路。"
        }),
        node(documentRef, "div", { className: "home-hero__actions" }, [
          node(documentRef, "a", {
            className: "button button--accent",
            href: `#/route/${featured.id}`,
            text: "閱讀陽金三峰"
          }),
          node(documentRef, "a", {
            className: "text-link",
            href: "#/routes",
            text: `探索 ${state.allRoutes.length} 條路線 →`
          })
        ]),
        node(documentRef, "div", { className: "home-hero__stats" }, [
          stat(documentRef, `${featured.distanceKm}`, "公里"),
          stat(documentRef, `${featured.elevationGainM.toLocaleString("zh-Hant")}`, "爬升公尺"),
          stat(documentRef, `${featured.difficulty} / 5`, "難度")
        ])
      ]),
      node(documentRef, "div", { className: "home-hero__visual" }, [
        imageFigure(documentRef, featured, "hero-figure"),
        svgSignature(documentRef),
        node(documentRef, "span", { className: "coordinate-stamp", text: "25.1623° N · 121.5442° E" })
      ])
    ]);

    const regionLinks = state.regions.map(region => {
      const count = state.allRoutes.filter(route => route.regionId === region.id).length;
      return node(documentRef, "a", {
        className: "region-link",
        href: `#/region/${region.id}`
      }, [
        node(documentRef, "span", { text: region.name }),
        node(documentRef, "small", { text: `${count} 路線` })
      ]);
    });
    const routes = state.allRoutes.filter(route => route.featured).slice(0, 6);
    if (routes.length < 6) routes.push(...state.allRoutes.filter(route => !route.featured).slice(0, 6 - routes.length));

    return node(documentRef, "div", { className: "home-page" }, [
      hero,
      node(documentRef, "section", { className: "content-section region-section" }, [
        sectionHeading(documentRef, "REGION INDEX", "從一個地名開始", "22 個縣市與島嶼，每一區都有不同的風、坡度與道路表情。"),
        node(documentRef, "div", { className: "region-grid" }, regionLinks)
      ]),
      node(documentRef, "section", { className: "content-section featured-section" }, [
        sectionHeading(
          documentRef,
          "EDITOR'S SELECTION",
          "本月精選路線",
          "從城市短坡到高山長征，先讀懂路線，再決定今天要騎多遠。",
          node(documentRef, "a", { className: "text-link", href: "#/routes", text: "檢視全部 →" })
        ),
        node(documentRef, "div", { className: "route-grid" }, routes.map(route => routeCard(documentRef, route, state)))
      ]),
      node(documentRef, "section", { className: "challenge-banner" }, [
        node(documentRef, "div", { className: "challenge-banner__number", text: "08" }),
        node(documentRef, "div", { className: "challenge-banner__copy" }, [
          node(documentRef, "p", { className: "eyebrow", text: "CLASSIC CHALLENGES" }),
          node(documentRef, "h2", { text: "把島嶼當成一場長距離練習。" }),
          node(documentRef, "p", { text: "一日雙塔、北高、東西進武嶺與環島，整理成可慢慢理解的挑戰索引。" }),
          node(documentRef, "a", { className: "button button--quiet", href: "#/challenges", text: "打開挑戰索引" })
        ])
      ])
    ]);
  }

  function filterForm(documentRef, state, actions) {
    const form = node(documentRef, "form", {
      className: "route-filters",
      on: {
        submit(event) {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          actions.setFilters({
            query: data.get("query"),
            regionId: data.get("regionId"),
            difficulty: data.get("difficulty"),
            sort: data.get("sort")
          });
        }
      }
    });

    const searchLabel = node(documentRef, "label", { className: "field field--search" }, [
      node(documentRef, "span", { className: "field__label", text: "搜尋路線" }),
      node(documentRef, "input", {
        type: "search",
        name: "query",
        value: state.filters.query || "",
        placeholder: "地區、路線或標籤",
        attributes: { autocomplete: "off" }
      })
    ]);
    const regionSelect = node(documentRef, "select", { name: "regionId" }, [
      node(documentRef, "option", { value: "", text: "全部地區" }),
      ...state.regions.map(region => node(documentRef, "option", {
        value: region.id,
        text: region.name,
        attributes: state.filters.regionId === region.id ? { selected: "selected" } : {}
      }))
    ]);
    const difficultySelect = node(documentRef, "select", { name: "difficulty" }, [
      node(documentRef, "option", { value: "", text: "全部難度" }),
      ...[1, 2, 3, 4, 5].map(value => node(documentRef, "option", {
        value,
        text: `${value} · ${difficultyLabel(value)}`,
        attributes: Number(state.filters.difficulty) === value ? { selected: "selected" } : {}
      }))
    ]);
    const sortSelect = node(documentRef, "select", { name: "sort" }, [
      ["featured", "精選優先"],
      ["distance-asc", "距離由短至長"],
      ["elevation-desc", "爬升由高至低"],
      ["name", "名稱排序"]
    ].map(([value, text]) => node(documentRef, "option", {
      value,
      text,
      attributes: state.filters.sort === value ? { selected: "selected" } : {}
    })));

    form.append(
      searchLabel,
      node(documentRef, "label", { className: "field" }, [
        node(documentRef, "span", { className: "field__label", text: "地區" }),
        regionSelect
      ]),
      node(documentRef, "label", { className: "field" }, [
        node(documentRef, "span", { className: "field__label", text: "難度" }),
        difficultySelect
      ]),
      node(documentRef, "label", { className: "field" }, [
        node(documentRef, "span", { className: "field__label", text: "排序" }),
        sortSelect
      ]),
      node(documentRef, "button", { className: "button button--accent", type: "submit", text: "套用篩選" })
    );
    return form;
  }

  function routesPage(documentRef, state, actions) {
    const region = state.routeInfo.page === "region"
      ? state.regions.find(item => item.id === state.routeInfo.params.regionId)
      : null;
    const title = region ? `${region.name}路線` : "探索台灣路線";
    const description = region
      ? region.character
      : "以地區、難度、距離與爬升，找出下一段值得出發的道路。";

    return node(documentRef, "div", { className: "index-page" }, [
      node(documentRef, "section", { className: "page-intro" }, [
        node(documentRef, "p", { className: "eyebrow", text: region ? `${region.area} · REGION` : "ROUTE INDEX · 72 ENTRIES" }),
        node(documentRef, "h1", { text: title }),
        node(documentRef, "p", { className: "page-intro__description", text: description })
      ]),
      node(documentRef, "section", { className: "content-section" }, [
        filterForm(documentRef, state, actions),
        node(documentRef, "div", { className: "results-heading" }, [
          node(documentRef, "p", {
            className: "results-count",
            text: `找到 ${state.visibleRoutes.length} 條路線`,
            attributes: { "aria-live": "polite" }
          }),
          node(documentRef, "p", { className: "results-note", text: "路況會變動，出發前請再次確認。" })
        ]),
        state.visibleRoutes.length
          ? node(documentRef, "div", { className: "route-grid" }, state.visibleRoutes.map(route => routeCard(documentRef, route, state)))
          : node(documentRef, "div", { className: "empty-state paper-panel" }, [
            node(documentRef, "h2", { text: "沒有符合條件的路線" }),
            node(documentRef, "p", { text: "移除部分篩選或換一個地區，再重新搜尋。" }),
            node(documentRef, "button", {
              className: "button button--quiet",
              type: "button",
              text: "清除篩選",
              on: { click: () => actions.setFilters({}) }
            })
          ])
      ])
    ]);
  }

  function tagList(documentRef, tags) {
    return node(documentRef, "ul", { className: "tag-list", label: "路線標籤" },
      tags.map(tag => node(documentRef, "li", { className: "tag", text: tag }))
    );
  }

  function routeDetailPage(documentRef, state, actions) {
    const sourceRoute = state.selectedRoute;
    const currentTrackState = state.trackState && state.trackState.routeId === (sourceRoute && sourceRoute.id)
      ? state.trackState
      : { status: "idle", track: null, error: null };
    const trackReady = currentTrackState.status === "ready"
      && currentTrackState.track
      && hasUsableCoordinates(currentTrackState.track.coordinates);
    const route = trackReady
      ? Object.assign({}, sourceRoute, {
        coordinates: currentTrackState.track.coordinates,
        track: currentTrackState.track
      })
      : sourceRoute;
    if (!route) return notFoundPage(documentRef, "找不到這條路線", "它可能已從本機資料中移除。");
    const favorite = state.favorites.has(route.id);
    const elevation = elevationSummary(route.coordinates);
    const trackLoading = currentTrackState.status === "loading";
    const trackError = currentTrackState.status === "error"
      || (currentTrackState.status === "ready" && !trackReady);
    const trackMessage = trackLoading
      ? "正在載入路線資料，地圖與 GPX 下載暫時停用。"
      : trackError
        ? "路線資料暫時無法載入，請重試。"
        : trackReady
          ? "路線資料已載入，可檢視地圖與下載 GPX。"
          : "路線資料尚未準備完成。";
    const trackStatus = node(documentRef, "p", {
      className: `route-track-status route-track-status--${currentTrackState.status}`,
      text: trackMessage,
      attributes: { role: "status", "aria-live": "polite", "aria-atomic": "true" }
    });
    const retry = trackError
      ? node(documentRef, "button", {
        className: "button button--quiet",
        type: "button",
        text: "重新載入路線資料",
        on: { click: () => actions.retryTrack && actions.retryTrack(route.id) }
      })
      : null;

    return node(documentRef, "article", { className: "route-detail" }, [
      node(documentRef, "header", { className: "route-detail__hero" }, [
        node(documentRef, "div", { className: "route-detail__copy" }, [
          node(documentRef, "a", { className: "back-link", href: `#/region/${route.regionId}`, text: `← 返回${route.regionName}` }),
          node(documentRef, "p", { className: "eyebrow", text: `${route.regionName} · ${route.category} · ${route.id.toUpperCase()}` }),
          node(documentRef, "h1", { text: route.name }),
          node(documentRef, "p", { className: "route-detail__summary", text: route.summary }),
          tagList(documentRef, route.tags),
          node(documentRef, "div", { className: "route-detail__actions" }, [
            node(documentRef, "button", {
              className: "button button--accent",
              type: "button",
              text: "下載 GPX",
              disabled: !trackReady,
              on: { click: () => actions.downloadGpx && actions.downloadGpx(route, currentTrackState.track) }
            }),
            node(documentRef, "button", {
              className: "button button--quiet",
              type: "button",
              text: favorite ? "取消收藏" : "收藏路線",
              pressed: favorite,
              on: { click: () => actions.toggleFavorite(route.id) }
            }),
            node(documentRef, "a", {
              className: "text-link",
              href: "#/editor",
              text: "編輯這條路線"
            })
          ])
        ]),
        imageFigure(documentRef, route, "route-hero-figure")
      ]),
      node(documentRef, "section", { className: "route-facts", label: "路線摘要" }, [
        stat(documentRef, `${route.distanceKm}`, "距離 KM"),
        stat(documentRef, route.elevationGainM.toLocaleString("zh-Hant"), "總爬升 M"),
        stat(documentRef, formatDuration(route.durationMinutes), "預估時間"),
        stat(documentRef, `${route.difficulty} / 5`, difficultyLabel(route.difficulty)),
        stat(documentRef, elevation.available ? elevation.maximum.toLocaleString("zh-Hant") : "—", "最高海拔 M")
      ]),
      node(documentRef, "section", { className: "route-map-section content-section" }, [
        sectionHeading(documentRef, "ROUTE MAP", "道路的線條", "地圖與 GPX 使用同一份座標資料，互動地圖不可用時會顯示離線輪廓。"),
        trackStatus,
        retry,
        node(documentRef, "div", { className: "route-map-layout" }, [
          node(documentRef, "div", {
            className: "route-map paper-panel",
            data: { routeMap: route.id },
            attributes: { "aria-busy": String(trackLoading) }
          }),
          node(documentRef, "aside", { className: "ride-profile paper-panel" }, [
            node(documentRef, "p", { className: "eyebrow", text: "RIDE PROFILE" }),
            node(documentRef, "h2", { text: `${difficultyLabel(route.difficulty)}${route.category}路線` }),
            node(documentRef, "div", { className: "difficulty-meter", label: `難度 ${route.difficulty}，滿分 5` },
              [1, 2, 3, 4, 5].map(value => node(documentRef, "span", {
                className: value <= route.difficulty ? "is-active" : ""
              }))
            ),
            tagList(documentRef, route.tags),
            node(documentRef, "button", {
              className: "button button--accent button--wide",
              type: "button",
              text: "下載 GPX 路線",
              disabled: !trackReady,
              on: { click: () => actions.downloadGpx && actions.downloadGpx(route, currentTrackState.track) }
            })
          ])
        ]),
        node(documentRef, "div", { className: "elevation-chart paper-panel" }, [
          node(documentRef, "div", { className: "elevation-chart__header" }, [
            node(documentRef, "strong", { text: "海拔剖面" }),
            node(documentRef, "span", { text: elevation.label })
          ]),
          trackReady
            ? node(documentRef, "div", { data: { elevation: route.id } })
            : node(documentRef, "p", { className: "elevation-chart__empty", text: "軌跡資料載入後會顯示海拔剖面。" })
        ])
      ]),
      node(documentRef, "section", { className: "route-story content-section" }, [
        node(documentRef, "div", { className: "route-story__main" }, [
          node(documentRef, "p", { className: "eyebrow", text: "FIELD NOTES" }),
          node(documentRef, "h2", { text: "騎進地方的道路筆記" }),
          node(documentRef, "p", { className: "route-story__lead", text: route.story })
        ]),
        node(documentRef, "div", { className: "route-notes" }, [
          node(documentRef, "section", { className: "note-card" }, [
            node(documentRef, "h3", { text: "出發前留意" }),
            node(documentRef, "ul", {}, route.cautions.map(item => node(documentRef, "li", { text: item })))
          ]),
          node(documentRef, "section", { className: "note-card" }, [
            node(documentRef, "h3", { text: "建議攜帶" }),
            node(documentRef, "ul", {}, route.supplies.map(item => node(documentRef, "li", { text: item })))
          ])
        ])
      ])
    ]);
  }

  function challengesPage(documentRef, state) {
    const cards = state.challenges.map((challenge, index) => {
      const linkedRoutes = challenge.routeIds
        .map(id => state.allRoutes.find(route => route.id === id))
        .filter(Boolean);
      const distance = linkedRoutes.reduce((sum, route) => sum + route.distanceKm, 0);
      return node(documentRef, "article", { className: "challenge-card paper-panel" }, [
        node(documentRef, "div", { className: "challenge-card__index", text: String(index + 1).padStart(2, "0") }),
        node(documentRef, "p", { className: "eyebrow", text: "CLASSIC CHALLENGE" }),
        node(documentRef, "h2", { text: challenge.name }),
        node(documentRef, "p", { text: challenge.description }),
        node(documentRef, "div", { className: "challenge-card__facts" }, [
          node(documentRef, "span", { text: `${linkedRoutes.length} 段參考路線` }),
          node(documentRef, "span", { text: `約 ${Math.round(distance)} km` })
        ]),
        linkedRoutes[0] ? node(documentRef, "a", {
          className: "text-link",
          href: `#/route/${linkedRoutes[0].id}`,
          text: "查看參考路線 →"
        }) : null
      ]);
    });

    return node(documentRef, "div", { className: "catalog-page" }, [
      node(documentRef, "section", { className: "page-intro" }, [
        node(documentRef, "p", { className: "eyebrow", text: "ENDURANCE · 08 CHALLENGES" }),
        node(documentRef, "h1", { text: "經典賽事與島嶼挑戰" }),
        node(documentRef, "p", {
          className: "page-intro__description",
          text: "不是排名表，而是一份知道自己要面對什麼的長距離索引。"
        })
      ]),
      node(documentRef, "section", { className: "content-section challenge-grid" }, cards)
    ]);
  }

  function routeArtPage(documentRef, state) {
    const cards = routeArtEntries(state.routeArt, state.allRoutes).map(({ art, route }) => {
      return node(documentRef, "article", { className: "art-card paper-panel" }, [
        node(documentRef, "div", {
          className: "art-card__map",
          data: { routeMap: route.id }
        }),
        node(documentRef, "div", { className: "art-card__copy" }, [
          node(documentRef, "p", { className: "eyebrow", text: "GPS ART · RIDE TO DRAW" }),
          node(documentRef, "h2", { text: art.name }),
          node(documentRef, "p", { text: art.description }),
          node(documentRef, "a", { className: "text-link", href: `#/route/${route.id}`, text: "檢視圖案路線 →" })
        ])
      ]);
    });
    return node(documentRef, "div", { className: "catalog-page" }, [
      node(documentRef, "section", { className: "page-intro" }, [
        node(documentRef, "p", { className: "eyebrow", text: "GPS ART · 06 SHAPES" }),
        node(documentRef, "h1", { text: "把騎過的路，畫成一個形狀。" }),
        node(documentRef, "p", {
          className: "page-intro__description",
          text: "環小台灣、大象、王冠與飛鳥；轉彎不只是轉彎，也是線條的一部分。"
        })
      ]),
      cards.length
        ? node(documentRef, "section", { className: "content-section art-grid" }, cards)
        : node(documentRef, "section", { className: "empty-state paper-panel" }, [
          node(documentRef, "h2", { text: "尚無可顯示的圖案路線" }),
          node(documentRef, "p", { text: "參考路線可能已從本機資料中移除，可至我的路線重設資料。" })
        ])
    ]);
  }

  function editorPlaceholder(documentRef) {
    return node(documentRef, "div", { className: "catalog-page" }, [
      node(documentRef, "section", { className: "page-intro" }, [
        node(documentRef, "p", { className: "eyebrow", text: "LOCAL WORKBENCH" }),
        node(documentRef, "h1", { text: "我的路線工作桌" }),
        node(documentRef, "p", {
          className: "page-intro__description",
          text: "新增、修改與備份只會留在這個瀏覽器；換裝置前請先匯出 JSON。"
        })
      ]),
      node(documentRef, "section", { className: "content-section editor-workbench" }, [
        node(documentRef, "div", { className: "editor-privacy-note" }, [
          node(documentRef, "strong", { text: "本機優先" }),
          node(documentRef, "span", { text: "圖片會先壓縮，GPX 會先檢查座標；本站不會把檔案上傳到伺服器。" })
        ]),
        node(documentRef, "div", {
          data: { editorRoot: "true" },
          attributes: { "aria-label": "本機路線管理" }
        })
      ])
    ]);
  }

  function notFoundPage(documentRef, title, description) {
    return node(documentRef, "section", { className: "not-found" }, [
      node(documentRef, "p", { className: "eyebrow", text: "404 · OFF ROUTE" }),
      node(documentRef, "h1", { text: title || "這條路沒有留在地圖上。" }),
      node(documentRef, "p", { text: description || "網址可能已變更，回到路線索引重新出發。" }),
      node(documentRef, "a", { className: "button button--accent", href: "#/routes", text: "返回路線索引" })
    ]);
  }

  function footer(documentRef) {
    return node(documentRef, "footer", { className: "site-footer" }, [
      node(documentRef, "div", { className: "site-footer__brand" }, [
        node(documentRef, "strong", { text: "狂輪誌" }),
        node(documentRef, "span", { text: "CROWN RIDE ATLAS" })
      ]),
      node(documentRef, "p", {
        text: "路線與路況會隨時間改變；出發前請確認天候、道路開放與個人能力。"
      }),
      node(documentRef, "a", { href: "#/editor", text: "管理本機路線" })
    ]);
  }

  function page(documentRef, state, actions) {
    if (state.routeInfo.page === "home") return homePage(documentRef, state, actions);
    if (state.routeInfo.page === "routes" || state.routeInfo.page === "region") {
      return routesPage(documentRef, state, actions);
    }
    if (state.routeInfo.page === "route") return routeDetailPage(documentRef, state, actions);
    if (state.routeInfo.page === "challenges") return challengesPage(documentRef, state);
    if (state.routeInfo.page === "route-art") return routeArtPage(documentRef, state);
    if (state.routeInfo.page === "editor") return editorPlaceholder(documentRef);
    return notFoundPage(documentRef);
  }

  function mount(root, state, actions) {
    const documentRef = root.ownerDocument;
    const main = node(documentRef, "main", {
      id: "main-content",
      attributes: { tabindex: "-1" }
    }, page(documentRef, state, actions));
    const shell = node(documentRef, "div", { className: "site-shell" }, [
      header(documentRef, state, actions),
      main,
      footer(documentRef),
      node(documentRef, "div", {
        className: "status-region",
        data: { status: "true" },
        attributes: { "aria-live": "polite", "aria-atomic": "true" }
      })
    ]);
    root.replaceChildren(shell);
    return { main };
  }

  return {
    formatDuration,
    difficultyLabel,
    elevationSummary,
    routeArtEntries,
    selectFeaturedRoute,
    pageTitle,
    routeDetailPage,
    mount
  };
});
