"use strict";

(function (root, factory) {
  const RouteArt = typeof module === "object" && module.exports
    ? require("../core/route-art.js")
    : root.CrownRideAtlas.RouteArt;
  const api = factory(RouteArt);

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, { RouteArtCatalog: api });
  }
})(typeof window !== "undefined" ? window : globalThis, function (RouteArt) {
  const mobile01Url = "https://www.mobile01.com/topicdetail.php?f=377&t=5800991";
  const verifiedAt = "2026-08-14";

  const items = [
    { id: "gps-art-north-taoyuan-raptor", name: "北桃迅猛龍", shapeLabel: "迅猛龍", regionName: "桃園市／新北市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 101, elevationGainM: 1254, summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「北桃迅猛龍」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-fenggui-rabbit", name: "風櫃兔", shapeLabel: "兔", regionId: "taipei", regionName: "台北市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 45, elevationGainM: 1420, summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「風櫃兔」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-taoyuan-red-bull", name: "桃園紅牛 RED BULL", shapeLabel: "紅牛", regionId: "taoyuan", regionName: "桃園市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 45, summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「桃園紅牛 RED BULL」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-yilan-cherry-duck", name: "宜蘭櫻桃鴨", shapeLabel: "櫻桃鴨", regionId: "yilan", regionName: "宜蘭縣", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「宜蘭櫻桃鴨」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-tianmu-whale", name: "台北天母鯨魚", shapeLabel: "鯨魚", regionId: "taipei", regionName: "台北市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「台北天母鯨魚」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
    { id: "gps-art-qingpu-cat", name: "桃園青埔小貓", shapeLabel: "小貓", regionId: "taoyuan", regionName: "桃園市", activityType: "cycling", activityLabel: "單車", status: "source-only", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「桃園青埔小貓」。", sourcePlatform: "Mobile01", sourceUrl: mobile01Url, verifiedAt },
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
    { id: "gps-art-yangmingshan-buddha-hand", name: "陽明山佛手", shapeLabel: "佛手", regionName: "台北市／新北市", activityType: "cycling", activityLabel: "單車", status: "source-only", distanceKm: 135, elevationGainLabel: "3,000 m 以上", summary: "公開來源收錄的單車 GPS Art 作品，作品名稱為「陽明山佛手」。", sourcePlatform: "Reddit r/Strava", sourceUrl: "https://www.reddit.com/r/Strava/comments/1d3qhxn/waving_hello_from_taipei/", verifiedAt }
  ];

  items.forEach(item => RouteArt.validateItem(item));

  function deepFreeze(value) {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
    Object.freeze(value);
    Object.values(value).forEach(deepFreeze);
    return value;
  }

  return deepFreeze(items);
});
