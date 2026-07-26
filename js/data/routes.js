"use strict";

(function (root, factory) {
  const api = factory();

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (root) {
    root.CrownRideAtlas = Object.assign(root.CrownRideAtlas || {}, {
      Data: api
    });
  }
})(typeof window !== "undefined" ? window : globalThis, function () {
  const regionSpecs = [
    {
      id: "keelung",
      name: "基隆市",
      area: "北部",
      base: [25.1283, 121.7419],
      character: "港灣、岬角與東北季風",
      routes: [
        ["keelung-harbor-coast", "基隆港濱海晨騎", "海岸", 36, 420, 2, ["港灣", "海風"]],
        ["keelung-nuannuan-hills", "暖暖東勢坑丘陵", "丘陵", 43, 780, 3, ["林道", "短坡"]],
        ["keelung-waimushan-wanli", "外木山至萬里海線", "海岸", 58, 610, 3, ["海景", "補給便利"]]
      ]
    },
    {
      id: "taipei",
      name: "台北市",
      area: "北部",
      base: [25.1055, 121.5637],
      character: "火山稜線、城市邊界與密集短坡",
      routes: [
        ["taipei-fengguizui", "風櫃嘴晨間線", "山岳", 42, 1080, 3, ["經典爬坡", "晨騎"]],
        ["taipei-zhongsha-road", "中社路五指山", "丘陵", 31, 720, 3, ["短坡", "夜景"]],
        ["taipei-lengshuikeng", "冷水坑硫磺線", "山岳", 54, 1380, 4, ["火山地景", "霧"]]
      ]
    },
    {
      id: "new-taipei",
      name: "新北市",
      area: "北部",
      base: [25.0988, 121.4672],
      character: "海岸、礦山聚落與連續山路",
      routes: [
        ["new-taipei-yangjin-3p", "陽金三峰", "山岳", 87.4, 2146, 4, ["長爬坡", "經典"]],
        ["new-taipei-north-coast", "北海岸雙灣", "海岸", 76, 820, 2, ["海景", "長距離"]],
        ["new-taipei-buyanting", "雙溪不厭亭", "山岳", 69, 1580, 4, ["礦山", "展望"]]
      ]
    },
    {
      id: "taoyuan",
      name: "桃園市",
      area: "北部",
      base: [24.8543, 121.2787],
      character: "水庫、茶園與北橫山谷",
      routes: [
        ["taoyuan-roman-road", "羅馬公路縱走", "山岳", 92, 1760, 4, ["長距離", "茶園"]],
        ["taoyuan-north-cross-baling", "北橫巴陵線", "山岳", 116, 2480, 5, ["北橫", "長爬坡"]],
        ["taoyuan-shimen-loop", "石門水庫環湖", "丘陵", 61, 940, 3, ["水庫", "補給便利"]]
      ]
    },
    {
      id: "hsinchu-city",
      name: "新竹市",
      area: "北部",
      base: [24.8156, 120.9463],
      character: "強風海岸、河濱與城市丘陵",
      routes: [
        ["hsinchu-city-coast-17k", "十七公里海岸線", "海岸", 35, 180, 1, ["親水", "強風"]],
        ["hsinchu-city-18-peaks", "十八尖山晨光線", "丘陵", 28, 390, 2, ["都會", "晨騎"]],
        ["hsinchu-city-nanliao-baoshan", "南寮寶山丘陵", "丘陵", 57, 850, 3, ["海風", "水庫"]]
      ]
    },
    {
      id: "hsinchu-county",
      name: "新竹縣",
      area: "北部",
      base: [24.6585, 121.0924],
      character: "竹林、深谷與高山部落",
      routes: [
        ["hsinchu-county-five-fingers", "五指山環線", "山岳", 62, 1490, 4, ["竹林", "展望"]],
        ["hsinchu-county-yulao", "宇老觀景台", "山岳", 101, 2380, 5, ["高山", "長爬坡"]],
        ["hsinchu-county-smangus", "鎮西堡神木線", "山岳", 128, 3220, 5, ["部落", "極限"]]
      ]
    },
    {
      id: "miaoli",
      name: "苗栗縣",
      area: "中部",
      base: [24.4712, 120.9021],
      character: "山城、果園與起伏海線",
      routes: [
        ["miaoli-xianshan", "仙山靈洞宮", "山岳", 55, 1320, 4, ["陡坡", "山城"]],
        ["miaoli-jiangmayuan", "大湖薑麻園", "丘陵", 67, 1280, 4, ["果園", "雲海"]],
        ["miaoli-coast", "苑裡後龍海線", "海岸", 83, 620, 2, ["海風", "長距離"]]
      ]
    },
    {
      id: "taichung",
      name: "台中市",
      area: "中部",
      base: [24.2206, 120.8734],
      character: "河谷、山城與高山林道",
      routes: [
        ["taichung-route-136", "縣道 136 赤崁頂", "山岳", 64, 1420, 4, ["經典爬坡", "彎道"]],
        ["taichung-daxueshan", "大雪山林道", "山岳", 112, 2860, 5, ["高山", "森林"]],
        ["taichung-xinshe", "新社中興嶺", "丘陵", 48, 880, 3, ["山城", "咖啡"]]
      ]
    },
    {
      id: "changhua",
      name: "彰化縣",
      area: "中部",
      base: [24.0524, 120.5556],
      character: "八卦山稜線、果園與西部海風",
      routes: [
        ["changhua-route-139", "縣道 139 稜線", "丘陵", 52, 760, 3, ["經典", "稜線"]],
        ["changhua-baguashan", "八卦山茶園迴圈", "丘陵", 39, 610, 2, ["茶園", "短程"]],
        ["changhua-coast", "彰濱海岸風車線", "海岸", 71, 260, 2, ["風車", "強風"]]
      ]
    },
    {
      id: "nantou",
      name: "南投縣",
      area: "中部",
      base: [23.9431, 120.9237],
      character: "中央山脈、湖泊與長距離爬升",
      routes: [
        ["nantou-wuling-west", "西進武嶺", "山岳", 55, 2810, 5, ["武嶺", "極限"]],
        ["nantou-sun-moon-lake", "日月潭環湖", "湖泊", 33, 620, 2, ["湖景", "經典"]],
        ["nantou-shanlinxi", "杉林溪竹林線", "山岳", 78, 2080, 5, ["竹林", "長爬坡"]]
      ]
    },
    {
      id: "yunlin",
      name: "雲林縣",
      area: "中部",
      base: [23.6541, 120.5568],
      character: "咖啡山城、雲霧與平坦濱海",
      routes: [
        ["yunlin-caoling", "草嶺石壁線", "山岳", 84, 1960, 5, ["山城", "陡坡"]],
        ["yunlin-huashan", "古坑華山咖啡線", "丘陵", 46, 880, 3, ["咖啡", "短坡"]],
        ["yunlin-kouhu-coast", "口湖濱海濕地", "海岸", 62, 120, 1, ["濕地", "平路"]]
      ]
    },
    {
      id: "chiayi-city",
      name: "嘉義市",
      area: "南部",
      base: [23.4857, 120.4732],
      character: "城市綠帶、水庫與阿里山門戶",
      routes: [
        ["chiayi-city-lantan", "蘭潭月影線", "丘陵", 27, 360, 2, ["水庫", "夜騎"]],
        ["chiayi-city-coffee", "嘉義木都咖啡巡禮", "都會", 24, 160, 1, ["城市", "咖啡"]],
        ["chiayi-city-two-lakes", "蘭潭仁義潭雙湖", "丘陵", 44, 610, 2, ["雙湖", "晨騎"]]
      ]
    },
    {
      id: "chiayi-county",
      name: "嘉義縣",
      area: "南部",
      base: [23.4804, 120.6429],
      character: "茶園、雲海與阿里山長坡",
      routes: [
        ["chiayi-alishan", "阿里山公路", "山岳", 72, 2480, 5, ["茶園", "雲海"]],
        ["chiayi-meishan-36", "梅山太平三十六彎", "山岳", 51, 1460, 4, ["髮夾彎", "茶園"]],
        ["chiayi-route-166", "縣道 166 瑞里線", "山岳", 89, 2110, 5, ["山谷", "長距離"]]
      ]
    },
    {
      id: "tainan",
      name: "台南市",
      area: "南部",
      base: [23.2168, 120.4457],
      character: "淺山、水庫與咖啡公路",
      routes: [
        ["tainan-route-175", "175 東山咖啡公路", "丘陵", 66, 980, 3, ["咖啡", "淺山"]],
        ["tainan-guanziling", "關子嶺溫泉坡", "丘陵", 52, 1040, 4, ["溫泉", "陡坡"]],
        ["tainan-nanhua", "南化水庫環山", "丘陵", 73, 1160, 3, ["水庫", "長距離"]]
      ]
    },
    {
      id: "kaohsiung",
      name: "高雄市",
      area: "南部",
      base: [22.8235, 120.4496],
      character: "港灣、旗美平原與荖濃溪谷",
      routes: [
        ["kaohsiung-qimei", "旗山美濃田園線", "平原", 72, 420, 2, ["田園", "補給便利"]],
        ["kaohsiung-jiaxian-liugui", "甲仙六龜山谷", "山岳", 108, 1680, 4, ["河谷", "長距離"]],
        ["kaohsiung-harbor", "壽山港都晨騎", "都會", 38, 480, 2, ["港灣", "都會"]]
      ]
    },
    {
      id: "pingtung",
      name: "屏東縣",
      area: "南部",
      base: [22.2654, 120.7047],
      character: "落山風、珊瑚海岸與國境公路",
      routes: [
        ["pingtung-south-border", "國境之南海岸線", "海岸", 94, 920, 3, ["墾丁", "海景"]],
        ["pingtung-dapengbay", "大鵬灣環灣線", "湖泊", 32, 90, 1, ["環灣", "平路"]],
        ["pingtung-shouka-mudan", "壽卡牡丹水庫", "山岳", 96, 1760, 4, ["南迴", "長爬坡"]]
      ]
    },
    {
      id: "yilan",
      name: "宜蘭縣",
      area: "東部",
      base: [24.6158, 121.6883],
      character: "蘭陽平原、海岸與雲霧森林",
      routes: [
        ["yilan-beiyi", "北宜公路九彎十八拐", "山岳", 76, 1560, 4, ["經典", "彎道"]],
        ["yilan-taipingshan", "太平山森林線", "山岳", 126, 3180, 5, ["森林", "極限"]],
        ["yilan-coast", "蘭陽濱海稻田線", "海岸", 69, 280, 2, ["稻田", "海風"]]
      ]
    },
    {
      id: "hualien",
      name: "花蓮縣",
      area: "東部",
      base: [23.8842, 121.5152],
      character: "縱谷、斷崖海岸與中央山脈",
      routes: [
        ["hualien-qixingtan", "七星潭海岸晨騎", "海岸", 45, 290, 2, ["礫石海岸", "晨騎"]],
        ["hualien-valley-north", "花東縱谷北段", "平原", 103, 720, 3, ["稻田", "長距離"]],
        ["hualien-lake-route-193", "鯉魚潭縣道 193", "丘陵", 78, 940, 3, ["湖景", "縱谷"]]
      ]
    },
    {
      id: "taitung",
      name: "台東縣",
      area: "東部",
      base: [22.8752, 121.1504],
      character: "縱谷稻田、太平洋與南迴山路",
      routes: [
        ["taitung-route-197", "縣道 197 縱谷線", "丘陵", 92, 1180, 4, ["縱谷", "碎石段"]],
        ["taitung-dulan-coast", "都蘭東河海岸", "海岸", 67, 760, 3, ["太平洋", "部落"]],
        ["taitung-south-link", "南迴壽卡東進", "山岳", 105, 1890, 4, ["南迴", "長距離"]]
      ]
    },
    {
      id: "penghu",
      name: "澎湖縣",
      area: "離島",
      base: [23.6043, 119.5665],
      character: "玄武岩、跨海大橋與強勁季風",
      routes: [
        ["penghu-cross-sea-bridge", "澎湖跨海大橋線", "海岸", 74, 260, 2, ["跨海大橋", "強風"]],
        ["penghu-south-loop", "菊島南環", "海岸", 49, 210, 2, ["玄武岩", "聚落"]],
        ["penghu-north-loop", "白沙西嶼北環", "海岸", 62, 330, 2, ["燈塔", "海風"]]
      ]
    },
    {
      id: "kinmen",
      name: "金門縣",
      area: "離島",
      base: [24.4456, 118.3765],
      character: "戰地聚落、風獅爺與濱海林蔭",
      routes: [
        ["kinmen-big-loop", "環大金門", "平原", 83, 410, 3, ["戰地", "長距離"]],
        ["kinmen-lieyu", "小金門烈嶼環線", "海岸", 31, 190, 1, ["聚落", "海岸"]],
        ["kinmen-taiwu", "太武山晨騎", "丘陵", 42, 520, 2, ["林蔭", "晨騎"]]
      ]
    },
    {
      id: "lienchiang",
      name: "連江縣",
      area: "離島",
      base: [26.1591, 119.9517],
      character: "花崗岩島嶼、陡坡與海霧",
      routes: [
        ["lienchiang-nangan", "南竿環島", "丘陵", 28, 760, 4, ["陡坡", "聚落"]],
        ["lienchiang-beigan", "北竿坂里芹壁", "丘陵", 24, 690, 4, ["石屋", "海景"]],
        ["lienchiang-dongyin", "東引燈塔線", "丘陵", 18, 510, 3, ["燈塔", "海霧"]]
      ]
    }
  ];

  const thumbnails = [
    "assets/images/mountain-dawn.webp",
    "assets/images/coastal-wind.webp",
    "assets/images/forest-climb.webp",
    "assets/images/valley-road.webp",
    "assets/images/city-morning.webp",
    "assets/images/island-ridge.webp",
    "assets/images/lake-loop.webp",
    "assets/images/high-pass.webp"
  ];

  function buildCoordinates(base, routeIndex, difficulty, elevationGainM) {
    return Array.from({ length: 8 }, function (_unused, pointIndex) {
      const phase = (routeIndex + 1) * (pointIndex + 1);
      const progress = pointIndex / 7;
      return {
        lat: Number((base[0] + pointIndex * 0.006 + Math.sin(phase) * 0.0035).toFixed(6)),
        lng: Number((base[1] + pointIndex * 0.008 + Math.cos(phase * 0.7) * 0.0045).toFixed(6)),
        ele: Math.max(3, Math.round(12 + Math.sin(progress * Math.PI) * elevationGainM * 0.28 + progress * difficulty * 18))
      };
    });
  }

  function cautionsFor(category) {
    const shared = "道路與天候可能變動，出發前請再次確認";
    if (category === "海岸") return ["留意側風與曝曬", shared];
    if (category === "山岳") return ["下坡前檢查煞車並攜帶保暖層", shared];
    return ["留意路口與假日車流", shared];
  }

  function suppliesFor(distanceKm, difficulty) {
    const supplies = ["水與簡易補給", "前後車燈", "基本維修工具"];
    if (distanceKm >= 80 || difficulty >= 4) supplies.push("電解質與備用內胎");
    return supplies;
  }

  const regions = regionSpecs.map(function (region) {
    return Object.freeze({
      id: region.id,
      name: region.name,
      area: region.area,
      character: region.character
    });
  });

  const routes = [];
  regionSpecs.forEach(function (region, regionIndex) {
    region.routes.forEach(function (seed, routeIndex) {
      const [id, name, category, distanceKm, elevationGainM, difficulty, tags] = seed;
      const globalIndex = regionIndex * 3 + routeIndex;
      routes.push({
        id,
        slug: id,
        name,
        regionId: region.id,
        regionName: region.name,
        area: region.area,
        category,
        summary: `${name}把${region.character}濃縮成一段適合公路車探索的島嶼路線。`,
        story: `從${region.name}的日常街景出發，${name}沿途經過${region.character}。節奏在平路、彎道與爬升之間轉換，適合想用雙輪閱讀地方地景的騎士。`,
        thumbnail: thumbnails[globalIndex % thumbnails.length],
        distanceKm,
        elevationGainM,
        difficulty,
        durationMinutes: Math.round(distanceKm * 2.4 + elevationGainM / 22),
        tags: tags.concat(category),
        cautions: cautionsFor(category),
        supplies: suppliesFor(distanceKm, difficulty),
        coordinates: buildCoordinates(region.base, globalIndex, difficulty, elevationGainM),
        featured: [
          "new-taipei-yangjin-3p",
          "nantou-wuling-west",
          "chiayi-alishan",
          "taitung-route-197"
        ].includes(id),
        createdAt: "2026-07-26T00:00:00.000Z",
        updatedAt: "2026-07-26T00:00:00.000Z"
      });
    });
  });

  const artShapes = [
    {
      id: "route-art-little-taiwan",
      name: "環小台灣",
      regionId: "taichung",
      regionName: "台中市",
      base: [24.1601, 120.6512],
      shape: [[0, 0.6], [0.2, 0.1], [0.45, 0], [0.75, 0.25], [1, 0.45], [0.75, 0.75], [0.4, 1], [0.1, 0.8], [0, 0.6]]
    },
    {
      id: "route-art-elephant",
      name: "大象喝水",
      regionId: "changhua",
      regionName: "彰化縣",
      base: [24.0814, 120.5233],
      shape: [[0, 0.65], [0.2, 0.25], [0.55, 0.1], [0.85, 0.35], [1, 0.7], [0.82, 1], [0.68, 0.6], [0.45, 0.85], [0.2, 0.75], [0, 0.65]]
    },
    {
      id: "route-art-heart-bay",
      name: "海灣愛心",
      regionId: "kaohsiung",
      regionName: "高雄市",
      base: [22.6284, 120.2941],
      shape: [[0.5, 1], [0.05, 0.48], [0.1, 0.15], [0.35, 0], [0.5, 0.22], [0.65, 0], [0.9, 0.15], [0.95, 0.48], [0.5, 1]]
    },
    {
      id: "route-art-crown",
      name: "單車王冠",
      regionId: "taipei",
      regionName: "台北市",
      base: [25.0584, 121.5132],
      shape: [[0, 0.2], [0.2, 0.75], [0.42, 0.2], [0.58, 0.75], [0.8, 0.2], [1, 0.78], [0.85, 1], [0.15, 1], [0, 0.2]]
    },
    {
      id: "route-art-bear",
      name: "台灣黑熊",
      regionId: "hualien",
      regionName: "花蓮縣",
      base: [23.9512, 121.512],
      shape: [[0.2, 0.2], [0, 0], [0.05, 0.35], [0.2, 0.55], [0.1, 0.9], [0.4, 0.75], [0.5, 1], [0.6, 0.75], [0.9, 0.9], [0.8, 0.55], [0.95, 0.35], [1, 0], [0.8, 0.2], [0.5, 0.1], [0.2, 0.2]]
    },
    {
      id: "route-art-flying-bird",
      name: "飛鳥迴圈",
      regionId: "taitung",
      regionName: "台東縣",
      base: [22.7556, 121.1442],
      shape: [[0, 0.7], [0.2, 0.25], [0.45, 0.6], [0.5, 0.1], [0.55, 0.6], [0.8, 0.25], [1, 0.7], [0.55, 0.8], [0.5, 1], [0.45, 0.8], [0, 0.7]]
    }
  ];

  artShapes.forEach(function (art, index) {
    const coordinates = art.shape.map(function (point, pointIndex) {
      return {
        lat: Number((art.base[0] + point[1] * 0.035).toFixed(6)),
        lng: Number((art.base[1] + point[0] * 0.045).toFixed(6)),
        ele: Math.round(20 + Math.sin(pointIndex / art.shape.length * Math.PI) * 80)
      };
    });

    routes.push({
      id: art.id,
      slug: art.id,
      name: art.name,
      regionId: art.regionId,
      regionName: art.regionName,
      area: regions.find(region => region.id === art.regionId).area,
      category: "路線美學",
      summary: `${art.name}用道路與河濱轉折畫出一枚可以騎乘的島嶼圖案。`,
      story: `這條路線以安全且可辨識的道路節點安排輪廓。完成後可將 GPX 匯入個人騎乘紀錄，從移動軌跡看見${art.name}。`,
      thumbnail: thumbnails[(index + 2) % thumbnails.length],
      distanceKm: 28 + index * 4,
      elevationGainM: 180 + index * 75,
      difficulty: 2 + (index % 2),
      durationMinutes: 95 + index * 18,
      tags: ["GPS Art", "路線美學", "城市探索"],
      cautions: ["圖案轉折較多，路口請減速確認", "道路與天候可能變動，出發前請再次確認"],
      supplies: ["水與簡易補給", "前後車燈", "可記錄軌跡的裝置"],
      coordinates,
      featured: index === 0,
      createdAt: "2026-07-26T00:00:00.000Z",
      updatedAt: "2026-07-26T00:00:00.000Z"
    });
  });

  const challenges = [
    {
      id: "challenge-twin-towers",
      name: "一日雙塔",
      description: "從台灣北端向南端推進的超長距離耐力挑戰。",
      routeIds: ["keelung-harbor-coast", "changhua-coast", "pingtung-south-border"]
    },
    {
      id: "challenge-north-south",
      name: "北高",
      description: "以一天完成北部至高雄的西部幹線挑戰。",
      routeIds: ["taipei-zhongsha-road", "changhua-route-139", "kaohsiung-harbor"]
    },
    {
      id: "challenge-wuling-east",
      name: "東進武嶺",
      description: "從花蓮一側向中央山脈高點攀升的高難度挑戰。",
      routeIds: ["hualien-valley-north", "nantou-wuling-west"]
    },
    {
      id: "challenge-wuling-west",
      name: "西進武嶺",
      description: "從埔里方向進入高山公路，持續爬升至武嶺。",
      routeIds: ["nantou-wuling-west"]
    },
    {
      id: "challenge-round-island",
      name: "環島",
      description: "串接海岸、縱谷與西部城鎮的多日島嶼旅行。",
      routeIds: ["new-taipei-north-coast", "changhua-coast", "pingtung-south-border", "taitung-dulan-coast", "hualien-valley-north"]
    },
    {
      id: "challenge-north-coast",
      name: "北海岸經典",
      description: "把岬角、漁港與東北季風串成完整海線。",
      routeIds: ["keelung-waimushan-wanli", "new-taipei-north-coast"]
    },
    {
      id: "challenge-alishan",
      name: "阿里山日出",
      description: "從平地茶園一路爬向雲海與高山日出。",
      routeIds: ["chiayi-alishan"]
    },
    {
      id: "challenge-east-valley",
      name: "花東縱谷雙百",
      description: "沿中央山脈與海岸山脈之間完成東部長距離。",
      routeIds: ["hualien-valley-north", "taitung-route-197"]
    }
  ];

  const routeArt = artShapes.map(function (art) {
    return {
      id: art.id.replace("route-", ""),
      name: art.name,
      routeId: art.id,
      description: `以 GPS 軌跡畫出「${art.name}」，讓騎乘本身成為島嶼線條。`
    };
  });

  function deepFreeze(value) {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
    Object.freeze(value);
    Object.values(value).forEach(deepFreeze);
    return value;
  }

  return deepFreeze({
    regions,
    routes,
    challenges,
    routeArt
  });
});
