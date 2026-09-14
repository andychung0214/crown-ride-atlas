"use strict";

(function (root, factory) {
  const RouteArt = typeof module === "object" && module.exports
    ? require("../core/route-art.js")
    : root.CrownRideAtlas.RouteArt;
  const RouteArtTracks = typeof module === "object" && module.exports
    ? require("./route-art-tracks.js")
    : root.CrownRideAtlas.RouteArtTracks;
  let RouteArtDownloads;
  let hasRouteArtDownloads = false;
  if (typeof module === "object" && module.exports) {
    let routeArtDownloadsPath;
    try {
      routeArtDownloadsPath = require.resolve("./route-art-downloads.js");
    } catch (error) {
      if (!error || error.code !== "MODULE_NOT_FOUND"
        || !String(error.message).startsWith("Cannot find module './route-art-downloads.js'")) {
        throw error;
      }
    }
    if (routeArtDownloadsPath) {
      RouteArtDownloads = require(routeArtDownloadsPath);
      hasRouteArtDownloads = true;
    }
  } else {
    const namespace = root && root.CrownRideAtlas;
    hasRouteArtDownloads = Boolean(namespace && Object.hasOwn(namespace, "RouteArtDownloads"));
    RouteArtDownloads = hasRouteArtDownloads ? namespace.RouteArtDownloads : undefined;
  }
  const api = factory(RouteArt, RouteArtTracks, RouteArtDownloads, hasRouteArtDownloads);

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { RouteArtCatalog: api });
  }
})(typeof window !== "undefined" ? window : globalThis, function (
  RouteArt, RouteArtTracks, RouteArtDownloads, hasRouteArtDownloads
) {
  const mobile01Url = "https://www.mobile01.com/topicdetail.php?f=377&t=5800991";
  const mobile01Author = "CS72";
  const verifiedAt = "2026-08-14";
  const MOBILE01_ROUTE_SOURCES = Object.freeze({
    "gps-art-north-taoyuan-raptor": "https://www.strava.com/routes/17223910",
    "gps-art-fenggui-rabbit": "https://www.strava.com/routes/17581713",
    "gps-art-taoyuan-red-bull": "https://www.strava.com/activities/2263949784",
    "gps-art-yilan-cherry-duck": "https://www.strava.com/routes/17035427",
    "gps-art-tianmu-whale": "https://www.strava.com/routes/16721519",
    "gps-art-qingpu-cat": "https://www.strava.com/routes/17110234",
    "gps-art-tainan-lion": "https://www.strava.com/routes/16676205",
    "gps-art-youth-park-shark": "https://www.strava.com/activities/2241587445",
    "gps-art-douliu-turtle": "https://www.strava.com/routes/16663550",
    "gps-art-taoyuan-horse": "https://www.strava.com/routes/16463220",
    "gps-art-pig-year": "https://www.strava.com/routes/16488963",
    "gps-art-valentine-love": "https://www.strava.com/routes/16780021"
  });

  const items = [
    ...[
      ["gps-art-zhishan-big-dinosaur", "芝山的大恐龍", "長頸恐龍", "taipei", "台北市士林區", 5.52, "ZhishanBigDinosaur"],
      ["gps-art-zhishan-little-dinosaur", "芝山的小恐龍", "小恐龍", "taipei", "台北市士林區", 4.73, "ZhishanLittleDinosaur"],
      ["gps-art-zhishan-2024", "芝山 2024", "2024", "taipei", "台北市士林區", 3.23, "Zhishan2024"],
      ["gps-art-kaohsiung-little-dinosaur", "高雄的小恐龍", "小恐龍", "kaohsiung", "高雄市三民區", 7.39, "KaohsiungLittleDinosaur"]
    ].map(([id, name, shapeLabel, regionId, regionName, distanceKm, filename]) => ({
      id, name, shapeLabel, regionId, regionName, distanceKm,
      activityType: "running", activityLabel: "跑步", status: "source-only", author: "Janice",
      summary: `Janice 公開分享的${name}運動路線；保留作者 GPX 的道路轉折與點序，適合以跑步或步行完成。路口、校園與共用空間須依現場開放及交通標誌，不宣稱可全程騎車。`,
      sourcePlatform: "Janice's Sport Blog", sourceUrl: "https://janice880624.github.io/janice_sport_blog/map/map.html",
      routeSourceUrl: `https://janice880624.github.io/janice_sport_blog/map/gpx/${filename}.gpx`,
      routeSourceAccess: "public-page", verifiedAt: "2026-09-14"
    })),
    { id: "gps-art-north-taoyuan-raptor", name: "北桃迅猛龍", shapeLabel: "迅猛龍", regionName: "桃園市／新北市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 101, elevationGainM: 1254, summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「北桃迅猛龍」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-fenggui-rabbit", name: "風櫃兔", shapeLabel: "兔", regionId: "taipei", regionName: "台北市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 45, elevationGainM: 1420, summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「風櫃兔」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-taoyuan-red-bull", name: "桃園紅牛 RED BULL", shapeLabel: "紅牛", regionId: "taoyuan", regionName: "桃園市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 45, summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「桃園紅牛 RED BULL」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-yilan-cherry-duck", name: "宜蘭櫻桃鴨", shapeLabel: "櫻桃鴨", regionId: "yilan", regionName: "宜蘭縣", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「宜蘭櫻桃鴨」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-tianmu-whale", name: "台北天母鯨魚", shapeLabel: "鯨魚", regionId: "taipei", regionName: "台北市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「台北天母鯨魚」；保留逆向路段與較適合跑步的警告。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-qingpu-cat", name: "桃園青埔小貓", shapeLabel: "小貓", regionId: "taoyuan", regionName: "桃園市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「桃園青埔小貓」；保留門禁社區、田地／非鋪面與狹窄通道警告。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-tainan-lion", name: "台南林老獅卡好", shapeLabel: "獅", regionId: "tainan", regionName: "台南市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「台南林老獅卡好」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-youth-park-shark", name: "青年公園有鯊魚", shapeLabel: "鯊魚", regionId: "taipei", regionName: "台北市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「青年公園有鯊魚」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-dadaocheng-lady", name: "大稻埕碼頭姑娘", shapeLabel: "姑娘", regionId: "taipei", regionName: "台北市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「大稻埕碼頭姑娘」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-daan-wolf", name: "大安森林大野狼", shapeLabel: "大野狼", regionId: "taipei", regionName: "台北市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「大安森林大野狼」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-douliu-turtle", name: "雲林斗六綠蠵龜", shapeLabel: "綠蠵龜", regionId: "yunlin", regionName: "雲林縣", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「雲林斗六綠蠵龜」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-taoyuan-horse", name: "桃園藝文小馬", shapeLabel: "小馬", regionId: "taoyuan", regionName: "桃園市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「桃園藝文小馬」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-pig-year", name: "豬年騎小豬", shapeLabel: "小豬", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「豬年騎小豬」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-valentine-love", name: "情人節 LOVE", shapeLabel: "LOVE", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「情人節 LOVE」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-taoyuan-dazhu-morning", name: "桃園大竹早安", shapeLabel: "早安", regionId: "taoyuan", regionName: "桃園市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「桃園大竹早安」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-zhongli-elephant", name: "中壢小象", shapeLabel: "小象", regionId: "taoyuan", regionName: "桃園市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「中壢小象」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-yongan-sheep", name: "桃園永安漁港喜羊羊", shapeLabel: "喜羊羊", regionId: "taoyuan", regionName: "桃園市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「桃園永安漁港喜羊羊」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-xinzhuang-tiger", name: "新莊足跡＿壬寅臥虎", shapeLabel: "臥虎", regionId: "new-taipei", regionName: "新北市", activityType: "running", activityLabel: "跑步", status: "source-only", distanceKm: 19, elevationGainM: 3, summary: "公開來源收錄的跑步 GPS Art 作品，作品名稱為「新莊足跡＿壬寅臥虎」。", author: "Heigo Chang", sourcePlatform: "運動筆記", sourceUrl: "https://running.biji.co/index.php?act=single&id=DD24D4B6-04C9-423B-9BA3-485C7C9B04E8&q=route", verifiedAt },
    { id: "gps-art-heigo-elephant", name: "Heigo Chang 大象作品示例", shapeLabel: "大象", activityType: "running", activityLabel: "跑步", status: "source-only", summary: "公開來源收錄的跑步 GPS Art 作品，作品名稱為「Heigo Chang 大象作品示例」。", author: "Heigo Chang", sourcePlatform: "運動筆記", sourceUrl: "https://running.biji.co/index.php?act=info&id=106950&q=news", verifiedAt },
    { id: "gps-art-taipei-cherry-blossom", name: "台北櫻花 16K", shapeLabel: "櫻花", regionId: "taipei", regionName: "台北市", activityType: "walking", activityLabel: "步行", status: "source-only", distanceKm: 16, summary: "公開來源收錄的步行 GPS Art 作品，作品名稱為「台北櫻花 16K」。", sourcePlatform: "GPS ART Japan", sourceUrl: "https://gpsart.info/en/asia-2/cherry-blossom-in-taipei-taiwan-16km/", verifiedAt },
    { id: "gps-art-taipei-circle-walk", name: "台北圓環 40K", shapeLabel: "圓環", regionId: "taipei", regionName: "台北市", activityType: "walking", activityLabel: "步行", status: "source-only", distanceKm: 40, summary: "公開來源收錄的步行 GPS Art 作品，作品名稱為「台北圓環 40K」。", sourcePlatform: "GPS ART Japan", sourceUrl: "https://gpsart.info/en/asia-2/taipei-circle-walk-40km/", verifiedAt },
    { id: "gps-art-yangmingshan-buddha-hand", name: "陽明山佛手", shapeLabel: "佛手", regionName: "台北市／新北市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 135, elevationGainLabel: "3,000 m 以上", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「陽明山佛手」。", sourcePlatform: "Reddit r/Strava", sourceUrl: "https://www.reddit.com/r/Strava/comments/1d3qhxn/waving_hello_from_taipei/", verifiedAt },
    { id: "gps-art-riverside-seahorse", name: "河濱海馬", shapeLabel: "海馬", regionId: "taipei", regionName: "台北市／新北市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 53.37, elevationGainM: 395.58, summary: "沿雙北河濱自行車路網畫出的海馬；站內地圖與 GPX 來自同一份公開軌跡。", author: "林宏勳", sourcePlatform: "健行筆記", sourceUrl: "https://hiking.biji.co/index.php?act=gpx_detail&id=1107811&q=trail", routeSourceUrl: "https://cdntwrunning.biji.co/hiking_gpx/hiking_9ef6cbd10b3803c689787b0f7df752e9.gpx", routeSourceAccess: "public-page", verifiedAt: "2026-08-31" },
    { id: "gps-art-wild-goose-west", name: "野雁西飛", shapeLabel: "西飛野雁", regionId: "taipei", regionName: "台北市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 75.05, elevationGainM: 885, summary: "依公開行程與參考軌跡圖，沿新生公園、社子島、陽明山、平菁街、大湖與民權大橋，以 BRouter fastbike 重建真實道路軌跡；不冒充已封存的原始 Strava 座標。", author: "Holly's Cycling", sourcePlatform: "AddiCycle", sourceUrl: "https://addicycle.wordpress.com/2019/05/02/cycling%EF%BD%9C%E9%87%8E%E9%9B%81%E8%A5%BF%E9%A3%9B%E5%96%AE%E8%BB%8A%E8%B7%AF%E7%B7%9A%E5%88%86%E4%BA%AB/", routeSourceUrl: "https://www.strava.com/activities/2285766025", routeSourceAccess: "login-required", verifiedAt: "2026-08-31" },
    { id: "gps-art-xizhi-pigeon", name: "汐鴿", shapeLabel: "展翅飛鴿", regionName: "台北市／新北市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 28, summary: "從汐科沿汐碇路、鹿窟、舊庄街與基隆河濱完成展翅飛鴿；站內地圖與 GPX 使用官方公開軌跡。", author: "李文能（LEO）", sourcePlatform: "汐鴿自主認證", sourceUrl: "https://www.webpage.idv.tw/bikepigeon/order.htm", routeSourceUrl: "https://www.webpage.idv.tw/bikepigeon/download/order.gpx", routeSourceAccess: "public-page", verifiedAt: "2026-08-31" }
  ].map(item => {
    const catalogItem = item.sourcePlatform === "Mobile01"
      ? Object.assign({}, item, {
        author: mobile01Author,
        ...(MOBILE01_ROUTE_SOURCES[item.id]
          ? { routeSourceUrl: MOBILE01_ROUTE_SOURCES[item.id], routeSourceAccess: "login-required" }
          : {})
      })
      : item;
    const track = RouteArtTracks && RouteArtTracks[catalogItem.id];
    return track && RouteArt.hasUsableSegments(track.segments)
      ? Object.assign({}, catalogItem, { status: "track-ready", segments: track.segments })
      : catalogItem;
  });

  if (hasRouteArtDownloads && (!RouteArtDownloads || typeof RouteArtDownloads !== "object"
    || Array.isArray(RouteArtDownloads))) {
    throw new TypeError("RouteArtDownloads 必須是物件");
  }
  const downloadItems = hasRouteArtDownloads ? Object.values(RouteArtDownloads) : [];
  const catalog = items.concat(downloadItems);
  if (new Set(catalog.map(item => item && item.id)).size !== catalog.length) {
    throw new TypeError("GPS Art catalog 不可有重複 id");
  }

  catalog.forEach(item => RouteArt.validateItem(item));

  function deepFreeze(value) {
    if (!value || typeof value !== "object") return value;
    Object.values(value).forEach(deepFreeze);
    return Object.freeze(value);
  }

  return deepFreeze(catalog);
});
