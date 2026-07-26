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
      generatedAt: "2026-07-26T00:00:00.000Z",
      reviewedAt: "2026-07-27T00:00:00.000Z",
      reviewStatus: "approved"
    }
  }, { available: true, maximum: 10 });

  assert.match(Render.profileSourceText(details), /BRouter · fastbike/);
  assert.match(Render.profileSourceText(details), /SRTM/);
  assert.match(Render.profileSourceText(details), /人工審核完成/);
  assert.match(Render.profileSourceText({ source: null }), /本機 GPX/);
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
