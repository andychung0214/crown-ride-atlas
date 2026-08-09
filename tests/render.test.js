"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const Render = require("../js/ui/render.js");

test("騎乘時間格式化為小時與分鐘", () => {
  assert.equal(Render.formatDuration(45), "45 分");
  assert.equal(Render.formatDuration(90), "1 小時 30 分");
  assert.equal(Render.formatDuration(120), "2 小時");
});

test("難度以可理解文字呈現", () => {
  assert.equal(Render.difficultyLabel(1), "入門");
  assert.equal(Render.difficultyLabel(3), "進階");
  assert.equal(Render.difficultyLabel(5), "極限");
  assert.equal(Render.difficultyLabel(9), "未分級");
});

test("頁面標題依路由與內容產生", () => {
  assert.equal(Render.pageTitle({ page: "home", params: {} }), "狂輪誌");
  assert.equal(
    Render.pageTitle({ page: "route", params: { routeId: "r1" } }, [{ id: "r1", name: "陽金三峰" }]),
    "陽金三峰｜狂輪誌"
  );
  assert.equal(Render.pageTitle({ page: "not-found", params: {} }), "找不到頁面｜狂輪誌");
});

test("路線美學會略過已從本機移除的參考路線", () => {
  const entries = Render.routeArtEntries(
    [{ id: "art-1", routeId: "r1" }, { id: "art-2", routeId: "missing" }],
    [{ id: "r1", name: "保留路線" }]
  );

  assert.deepEqual(entries, [
    { art: { id: "art-1", routeId: "r1" }, route: { id: "r1", name: "保留路線" } }
  ]);
});

test("路線美學會略過未通過 near-match 閘門的項目", () => {
  const entries = Render.routeArtEntries(
    [
      { id: "art-1", routeId: "r1", matchStatus: "near-match" },
      { id: "art-2", routeId: "r2", matchStatus: "rejected" }
    ],
    [{ id: "r1", name: "保留路線" }, { id: "r2", name: "錯誤圖形" }]
  );

  assert.deepEqual(entries, [
    { art: { id: "art-1", routeId: "r1", matchStatus: "near-match" }, route: { id: "r1", name: "保留路線" } }
  ]);
});

test("完整挑戰卡片連到正式挑戰路線並顯示端點", () => {
  const page = Render.challengesPage(fakeDocument(), {
    challenges: [{
      id: "challenge-north-south",
      name: "北高",
      description: "完整長距離挑戰",
      routeIds: ["challenge-north-south"],
      referenceRouteIds: ["taipei-zhongsha-road"],
      routeMode: "single",
      startLabel: "台北",
      finishLabel: "高雄"
    }],
    allRoutes: [
      { id: "challenge-north-south", name: "北高完整挑戰", distanceKm: 376.5 },
      { id: "taipei-zhongsha-road", name: "中社路", distanceKm: 8.4 }
    ]
  });
  const nodes = descendants(page);
  const link = nodes.find(node => node.name === "a" && node.attributes.href === "#/route/challenge-north-south");
  const texts = nodes.map(node => node.textContent).filter(Boolean).join(" ");

  assert.ok(link);
  assert.equal(link.textContent, "開啟完整 GPX →");
  assert.match(texts, /起點 台北 → 終點 高雄/);
  assert.match(texts, /1 條完整挑戰路線/);
  assert.match(texts, /補充參考：中社路/);
});

test("缺少海拔資料時回傳可理解的說明", () => {
  assert.deepEqual(Render.elevationSummary([{ lat: 25, lng: 121 }, { lat: 25.1, lng: 121.1 }]), {
    available: false,
    maximum: null,
    label: "未提供海拔資料"
  });
});

test("空路線目錄不會產生不存在的首頁精選", () => {
  assert.equal(Render.selectFeaturedRoute([]), null);
  assert.deepEqual(
    Render.selectFeaturedRoute([{ id: "r1", featured: false }]),
    { id: "r1", featured: false }
  );
});

test("路線索引提供 bike100 對照的坡度、時間與區域篩選", () => {
  const state = {
    routeInfo: { page: "routes", params: {} },
    regions: [{ id: "taipei", name: "台北市" }],
    allRoutes: [],
    visibleRoutes: [],
    pageView: { items: [], page: 1, pageSize: 24, total: 0, totalPages: 1 },
    filters: { query: "", regionId: "", areaId: "", difficulty: "", gradeBand: "", durationBand: "", sort: "featured", page: 1 },
    completed: new Set()
  };
  const page = Render.routesPage(fakeDocument(), state, { setFilters() {} });
  const nodes = descendants(page);
  const names = nodes.filter(node => node.name === "select").map(node => node.attributes.name);
  assert.ok(names.includes("areaId"));
  assert.ok(names.includes("gradeBand"));
  assert.ok(names.includes("durationBand"));
});

test("路線卡提供騎過此路線完成按鈕並反映狀態", () => {
  let toggled = null;
  const page = Render.routeCard(fakeDocument(), {
    id: "r-complete",
    name: "測試路線",
    regionName: "台北市",
    category: "丘陵",
    summary: "摘要",
    thumbnail: "assets/images/city-morning.webp",
    distanceKm: 12,
    elevationGainM: 200,
    difficulty: 2
  }, { favorites: new Set(), completed: new Set(["r-complete"]) }, {
    toggleCompleted(routeId) { toggled = routeId; }
  });
  const nodes = descendants(page);
  const button = nodes.find(node => node.name === "button");
  assert.ok(button);
  assert.equal(button.textContent, "已完成 · 取消標記");
  assert.equal(button.attributes["aria-pressed"], "true");
  button.handlers.click();
  assert.equal(toggled, "r-complete");
});

test("路線索引顯示頁碼與下一頁操作", () => {
  let nextPage = null;
  const state = {
    routeInfo: { page: "routes", params: {} },
    regions: [],
    allRoutes: [],
    visibleRoutes: [{ id: "r1" }, { id: "r2" }, { id: "r3" }],
    pageView: { items: [], page: 2, pageSize: 1, total: 3, totalPages: 3 },
    filters: { query: "", regionId: "", areaId: "", difficulty: "", gradeBand: "", durationBand: "", sort: "featured", page: 2 },
    completed: new Set()
  };
  const page = Render.routesPage(fakeDocument(), state, { setFilters() {}, setPage(value) { nextPage = value; } });
  const nodes = descendants(page);
  const texts = nodes.map(node => node.textContent).filter(Boolean).join(" ");
  assert.match(texts, /第 2 \/ 3 頁/);
  const next = nodes.find(node => node.name === "button" && node.textContent === "下一頁");
  assert.ok(next);
  next.handlers.click();
  assert.equal(nextPage, 3);
});

test("沒有公開路線美學時顯示誠實空狀態", () => {
  const page = Render.routeArtPage(fakeDocument(), { routeArt: [], allRoutes: [] });
  const texts = descendants(page).map(node => node.textContent).filter(Boolean).join(" ");
  assert.match(texts, /尚無可顯示的圖案路線/);
  assert.match(texts, /重新納入/);
});

function fakeDocument() {
  const documentRef = {
    createElement(name) {
      return fakeNode(name, documentRef);
    },
    createTextNode(text) {
      return { nodeType: 3, textContent: String(text) };
    }
  };
  return documentRef;
}

function fakeNode(name, documentRef) {
  return {
    nodeType: 1,
    name,
    ownerDocument: documentRef,
    children: [],
    dataset: {},
    attributes: {},
    setAttribute(key, value) { this.attributes[key] = String(value); },
    addEventListener(event, handler) {
      this.handlers = this.handlers || {};
      this.handlers[event] = handler;
    },
    append(...children) { this.children.push(...children); }
  };
}

function descendants(node) {
  if (!node || node.nodeType !== 1) return [];
  return [node, ...node.children.flatMap(descendants)];
}

function routeState(status) {
  return {
    theme: "yellow",
    favorites: new Set(),
    routeInfo: { page: "route", params: { routeId: "r1" } },
    selectedRoute: {
      id: "r1",
      name: "測試路線",
      regionId: "taipei",
      regionName: "台北市",
      category: "丘陵",
      summary: "摘要",
      story: "故事",
      thumbnail: "assets/images/city-morning.webp",
      distanceKm: 22,
      elevationGainM: 450,
      durationMinutes: 80,
      difficulty: 3,
      tags: ["測試"],
      cautions: ["留意天候"],
      supplies: ["水"],
      trackRef: "r1"
    },
    trackState: { routeId: "r1", status, track: null, error: null }
  };
}

test("軌跡載入中以忙碌狀態呈現並停用 GPX", () => {
  const page = Render.routeDetailPage(fakeDocument(), routeState("loading"), {});
  const nodes = descendants(page);
  const map = nodes.find(node => node.dataset.routeMap === "r1");
  const download = nodes.find(node => node.name === "button" && node.textContent === "下載 GPX");

  assert.equal(map.attributes["aria-busy"], "true");
  assert.equal(download.disabled, true);
  assert.ok(nodes.some(node => node.attributes["aria-live"] === "polite" && /載入/.test(node.textContent)));
});

test("軌跡載入失敗時顯示可重試操作", () => {
  let retried = null;
  const state = routeState("error");
  state.trackState.error = new Error("載入失敗");
  const page = Render.routeDetailPage(fakeDocument(), state, {
    retryTrack(routeId) { retried = routeId; }
  });
  const retry = descendants(page).find(node => node.name === "button" && node.textContent === "重新載入路線資料");

  assert.ok(retry);
  retry.handlers.click();
  assert.equal(retried, "r1");
});

test("軌跡就緒時顯示地圖與可下載 GPX", () => {
  const state = routeState("ready");
  state.trackState.track = {
    routeId: "r1",
    coordinates: [{ lat: 25, lng: 121, ele: 10 }, { lat: 25.01, lng: 121.01, ele: 20 }]
  };
  const page = Render.routeDetailPage(fakeDocument(), state, {});
  const nodes = descendants(page);
  const map = nodes.find(node => node.dataset.routeMap === "r1");
  const download = nodes.find(node => node.name === "button" && node.textContent === "下載 GPX");

  assert.equal(map.attributes["aria-busy"], "false");
  assert.equal(download.disabled, undefined);
  assert.ok(nodes.some(node => node.dataset.elevation === "r1"));
});

test("真實軌跡就緒時顯示詳細海拔、來源提醒與主要爬坡", () => {
  const state = routeState("ready");
  state.trackState.track = {
    routeId: "r1",
    source: { router: "BRouter", profile: "fastbike", elevation: "SRTM", generatedAt: "2026-07-26T00:00:00.000Z" },
    summary: {
      elevationLossM: 328,
      minimumElevationM: 12,
      maximumElevationM: 940,
      maximumSustainedGradePct: 11.4
    },
    climbs: [{ startDistanceKm: 4.2, endDistanceKm: 8.8, distanceKm: 4.6, gainM: 370, averageGradePct: 8, maximumGradePct: 12 }],
    coordinates: [{ lat: 25, lng: 121, ele: 12, distanceKm: 0 }, { lat: 25.01, lng: 121.01, ele: 940, distanceKm: 12 }]
  };

  const page = Render.routeDetailPage(fakeDocument(), state, {});
  const texts = descendants(page).map(node => node.textContent).filter(Boolean).join(" ");

  assert.match(texts, /最低海拔 M/);
  assert.match(texts, /總下降 M/);
  assert.match(texts, /最大持續坡度/);
  assert.match(texts, /海拔：SRTM/);
  assert.match(texts, /主要爬坡/);
  assert.match(texts, /4\.2–8\.8 km/);
});

test("路線資料來源只呈現實際提供的 BRouter、SRTM 與審核欄位", () => {
  const details = Render.profileDetails({
    coordinates: [{ ele: 10 }],
    source: {
      router: "BRouter",
      profile: "fastbike",
      elevation: "SRTM",
      samplingNote: "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      generatedAt: "2026-07-26T00:00:00.000Z",
      reviewedAt: "2026-07-27T00:00:00.000Z",
      reviewStatus: "approved"
    }
  }, { available: true, maximum: 10 });

  assert.match(Render.profileSourceText(details), /BRouter · fastbike/);
  assert.match(Render.profileSourceText(details), /SRTM/);
  assert.match(Render.profileSourceText(details), /髮夾彎與局部高曲率道路會加密取樣/);
  assert.match(Render.profileSourceText(details), /人工審核完成/);
  assert.match(Render.profileSourceText({ source: null }), /本機 GPX/);
});

test("本機 GPX 詳情會使用水合後的下降、持續坡度與爬坡資料", () => {
  const details = Render.profileDetails({
    coordinates: [
      { lat: 25, lng: 121, ele: 100 },
      { lat: 25.0045, lng: 121, ele: 140 },
      { lat: 25.009, lng: 121, ele: 110 }
    ]
  }, { available: true, maximum: 140 });

  assert.ok(details.elevationLossM > 20);
  assert.ok(details.maximumSustainedGradePct > 5);
  assert.equal(details.climbs.length, 1);
});

test("只有 SRTM 海拔來源會顯示規劃用途與非測量級限制", () => {
  assert.match(Render.profileSourceText({ source: { elevation: "SRTM" } }), /適合路線規劃，非測量級資料/);
  assert.doesNotMatch(Render.profileSourceText({ source: null }), /非測量級資料/);
  assert.doesNotMatch(Render.profileSourceText({ source: { elevation: "GPS" } }), /非測量級資料/);
});

test("路線級非預設海拔濾波會顯示視窗、原因與交叉檢核來源", () => {
  const text = Render.profileSourceText({
    source: {
      elevation: "SRTM",
      elevationAnalysis: {
        smoothingWindowM: 500,
        gradeWindowM: 100,
        reason: "橋梁與峽谷地表落差干擾。",
        referenceUrl: "https://hiking.biji.co/example",
        referenceLabel: "同距離實測路線"
      }
    }
  });

  assert.match(text, /海拔平滑 500m/);
  assert.match(text, /坡度視窗 100m/);
  assert.match(text, /橋梁與峽谷/);
  assert.match(text, /同距離實測路線/);
  assert.match(text, /未匯入外部 GPX/);
});

for (const coordinates of [[], [{ lat: 25, lng: 121, ele: 10 }]]) {
  test(`不足兩個座標點的 ready 軌跡會改為可重試錯誤（${coordinates.length} 點）`, () => {
    let retried = null;
    const state = routeState("ready");
    state.trackState.track = { routeId: "r1", coordinates };
    const page = Render.routeDetailPage(fakeDocument(), state, {
      retryTrack(routeId) { retried = routeId; }
    });
    const nodes = descendants(page);
    const download = nodes.find(node => node.name === "button" && node.textContent === "下載 GPX");
    const retry = nodes.find(node => node.name === "button" && node.textContent === "重新載入路線資料");

    assert.equal(download.disabled, true);
    assert.ok(retry);
    retry.handlers.click();
    assert.equal(retried, "r1");
    assert.equal(nodes.some(node => node.dataset.elevation === "r1"), false);
  });
}
