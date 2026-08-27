"use strict";

const ROUTES = [
  ["airplane-19-6km", "Airplane", "飛機", 19.6],
  ["bicycle-14-5km", "Bicycle", "自行車", 14.5],
  ["bunny-13-6km", "Bunny", "兔子", 13.6],
  ["butterfly-14-1km", "Butterfly", "蝴蝶", 14.1],
  ["cactus-11-3km", "Cactus", "仙人掌", 11.3],
  ["cat-silhouette-10-0km", "Cat silhouette", "貓咪剪影", 10.0],
  ["dinosaur-21-7km", "Dinosaur", "恐龍", 21.7],
  ["dolphin-11-8km", "Dolphin", "海豚", 11.8],
  ["guitar-11-3km", "Guitar", "吉他", 11.3],
  ["heart-with-arrow-11-6km", "Heart with arrow", "箭穿愛心", 11.6],
  ["lightning-bolt-12-1km", "Lightning bolt", "閃電", 12.1],
  ["rocket-9-9km", "Rocket", "火箭", 9.9],
  ["running-shoe-10-7km", "Running shoe", "跑鞋", 10.7],
  ["sailboat-8-7km", "Sailboat", "帆船", 8.7],
  ["snowflake-14-7km", "Snowflake", "雪花", 14.7],
  ["star-12-6km", "Star", "星星", 12.6],
  ["top-hat-6-6km", "Top hat", "高帽", 6.6],
  ["turtle-16-1km", "Turtle", "烏龜", 16.1],
  ["unicorn-head-12-5km", "Unicorn head", "獨角獸頭", 12.5]
];

export const ROUTE_ART_DOWNLOAD_SOURCES = Object.freeze(ROUTES.map(([
  slug, name, shapeLabel, distanceKm
]) => Object.freeze({
  id: `gps-art-shapemiles-${slug.replace(/-\d+(?:-\d+)?km$/, "")}`,
  slug,
  name: `台北 ${name}`,
  shapeLabel,
  regionId: "taipei",
  regionName: "台北市",
  activityType: "running",
  activityLabel: "跑步",
  distanceKm,
  sourcePlatform: "ShapeMiles",
  sourceUrl: `https://shapemiles.com/en/city/taipei/art-gps-routes/${slug}`,
  downloadUrl: `https://shapemiles.com/api/art-routes/taipei/${slug}/gpx`
})));
