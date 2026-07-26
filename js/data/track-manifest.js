"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      TrackManifest: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const manifest = {
    "keelung-harbor-coast": { bundleId: "keelung", src: "js/data/tracks/keelung.js" },
    "keelung-nuannuan-hills": { bundleId: "keelung", src: "js/data/tracks/keelung.js" },
    "keelung-waimushan-wanli": { bundleId: "keelung", src: "js/data/tracks/keelung.js" },
    "taipei-fengguizui": { bundleId: "taipei", src: "js/data/tracks/taipei.js" },
    "taipei-zhongsha-road": { bundleId: "taipei", src: "js/data/tracks/taipei.js" },
    "taipei-lengshuikeng": { bundleId: "taipei", src: "js/data/tracks/taipei.js" },
    "new-taipei-yangjin-3p": { bundleId: "new-taipei", src: "js/data/tracks/new-taipei.js" },
    "new-taipei-north-coast": { bundleId: "new-taipei", src: "js/data/tracks/new-taipei.js" },
    "new-taipei-buyanting": { bundleId: "new-taipei", src: "js/data/tracks/new-taipei.js" },
    "taoyuan-roman-road": { bundleId: "taoyuan", src: "js/data/tracks/taoyuan.js" },
    "taoyuan-north-cross-baling": { bundleId: "taoyuan", src: "js/data/tracks/taoyuan.js" },
    "taoyuan-shimen-loop": { bundleId: "taoyuan", src: "js/data/tracks/taoyuan.js" },
    "hsinchu-city-coast-17k": { bundleId: "hsinchu-city", src: "js/data/tracks/hsinchu-city.js" },
    "hsinchu-city-18-peaks": { bundleId: "hsinchu-city", src: "js/data/tracks/hsinchu-city.js" },
    "hsinchu-city-nanliao-baoshan": { bundleId: "hsinchu-city", src: "js/data/tracks/hsinchu-city.js" },
    "hsinchu-county-five-fingers": { bundleId: "hsinchu-county", src: "js/data/tracks/hsinchu-county.js" },
    "hsinchu-county-yulao": { bundleId: "hsinchu-county", src: "js/data/tracks/hsinchu-county.js" },
    "hsinchu-county-smangus": { bundleId: "hsinchu-county", src: "js/data/tracks/hsinchu-county.js" },
    "miaoli-xianshan": { bundleId: "miaoli", src: "js/data/tracks/miaoli.js" },
    "miaoli-jiangmayuan": { bundleId: "miaoli", src: "js/data/tracks/miaoli.js" },
    "miaoli-coast": { bundleId: "miaoli", src: "js/data/tracks/miaoli.js" },
    "taichung-route-136": { bundleId: "taichung", src: "js/data/tracks/taichung.js" },
    "taichung-daxueshan": { bundleId: "taichung", src: "js/data/tracks/taichung.js" },
    "taichung-xinshe": { bundleId: "taichung", src: "js/data/tracks/taichung.js" },
    "changhua-route-139": { bundleId: "changhua", src: "js/data/tracks/changhua.js" },
    "changhua-baguashan": { bundleId: "changhua", src: "js/data/tracks/changhua.js" },
    "changhua-coast": { bundleId: "changhua", src: "js/data/tracks/changhua.js" },
    "nantou-wuling-west": { bundleId: "nantou", src: "js/data/tracks/nantou.js" },
    "nantou-sun-moon-lake": { bundleId: "nantou", src: "js/data/tracks/nantou.js" },
    "nantou-shanlinxi": { bundleId: "nantou", src: "js/data/tracks/nantou.js" },
    "yunlin-caoling": { bundleId: "yunlin", src: "js/data/tracks/yunlin.js" },
    "yunlin-huashan": { bundleId: "yunlin", src: "js/data/tracks/yunlin.js" },
    "yunlin-kouhu-coast": { bundleId: "yunlin", src: "js/data/tracks/yunlin.js" },
    "chiayi-city-lantan": { bundleId: "chiayi-city", src: "js/data/tracks/chiayi-city.js" },
    "chiayi-city-coffee": { bundleId: "chiayi-city", src: "js/data/tracks/chiayi-city.js" },
    "chiayi-city-two-lakes": { bundleId: "chiayi-city", src: "js/data/tracks/chiayi-city.js" },
    "chiayi-alishan": { bundleId: "chiayi-county", src: "js/data/tracks/chiayi-county.js" },
    "chiayi-meishan-36": { bundleId: "chiayi-county", src: "js/data/tracks/chiayi-county.js" },
    "chiayi-route-166": { bundleId: "chiayi-county", src: "js/data/tracks/chiayi-county.js" },
    "tainan-route-175": { bundleId: "tainan", src: "js/data/tracks/tainan.js" },
    "tainan-guanziling": { bundleId: "tainan", src: "js/data/tracks/tainan.js" },
    "tainan-nanhua": { bundleId: "tainan", src: "js/data/tracks/tainan.js" },
    "kaohsiung-qimei": { bundleId: "kaohsiung", src: "js/data/tracks/kaohsiung.js" },
    "kaohsiung-jiaxian-liugui": { bundleId: "kaohsiung", src: "js/data/tracks/kaohsiung.js" },
    "kaohsiung-harbor": { bundleId: "kaohsiung", src: "js/data/tracks/kaohsiung.js" },
    "pingtung-south-border": { bundleId: "pingtung", src: "js/data/tracks/pingtung.js" },
    "pingtung-dapengbay": { bundleId: "pingtung", src: "js/data/tracks/pingtung.js" },
    "pingtung-shouka-mudan": { bundleId: "pingtung", src: "js/data/tracks/pingtung.js" },
    "yilan-beiyi": { bundleId: "yilan", src: "js/data/tracks/yilan.js" },
    "yilan-taipingshan": { bundleId: "yilan", src: "js/data/tracks/yilan.js" },
    "yilan-coast": { bundleId: "yilan", src: "js/data/tracks/yilan.js" },
    "hualien-qixingtan": { bundleId: "hualien", src: "js/data/tracks/hualien.js" },
    "hualien-valley-north": { bundleId: "hualien", src: "js/data/tracks/hualien.js" },
    "hualien-lake-route-193": { bundleId: "hualien", src: "js/data/tracks/hualien.js" },
    "taitung-route-197": { bundleId: "taitung", src: "js/data/tracks/taitung.js" },
    "taitung-dulan-coast": { bundleId: "taitung", src: "js/data/tracks/taitung.js" },
    "taitung-south-link": { bundleId: "taitung", src: "js/data/tracks/taitung.js" },
    "penghu-cross-sea-bridge": { bundleId: "penghu", src: "js/data/tracks/penghu.js" },
    "penghu-south-loop": { bundleId: "penghu", src: "js/data/tracks/penghu.js" },
    "penghu-north-loop": { bundleId: "penghu", src: "js/data/tracks/penghu.js" },
    "kinmen-big-loop": { bundleId: "kinmen", src: "js/data/tracks/kinmen.js" },
    "kinmen-lieyu": { bundleId: "kinmen", src: "js/data/tracks/kinmen.js" },
    "kinmen-taiwu": { bundleId: "kinmen", src: "js/data/tracks/kinmen.js" },
    "lienchiang-nangan": { bundleId: "lienchiang", src: "js/data/tracks/lienchiang.js" },
    "lienchiang-beigan": { bundleId: "lienchiang", src: "js/data/tracks/lienchiang.js" },
    "lienchiang-dongyin": { bundleId: "lienchiang", src: "js/data/tracks/lienchiang.js" },
    "route-art-little-taiwan": { bundleId: "taichung", src: "js/data/tracks/taichung.js" },
    "route-art-elephant": { bundleId: "changhua", src: "js/data/tracks/changhua.js" },
    "route-art-heart-bay": { bundleId: "kaohsiung", src: "js/data/tracks/kaohsiung.js" },
    "route-art-crown": { bundleId: "taipei", src: "js/data/tracks/taipei.js" },
    "route-art-bear": { bundleId: "hualien", src: "js/data/tracks/hualien.js" },
    "route-art-flying-bird": { bundleId: "taitung", src: "js/data/tracks/taitung.js" }
  };

  Object.values(manifest).forEach(Object.freeze);
  return Object.freeze(manifest);
});
