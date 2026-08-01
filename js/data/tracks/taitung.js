"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("taitung", {
  "taitung-route-197": {
    "routeId": "taitung-route-197",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T17:22:53.068Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "99bf3cbf3a7d896688a0fe47d52822ec976c78025b1b678a98bcdb1186d3c93b",
      "roadPolicyAuditSha256": "bd995ca985845df652b4177e4c6cd06ac78fa851e82cc113ddaaa637a2368f7b",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "縣道197南段沿利吉惡地丘陵起伏；500/200、750/300、1000/500公尺三組分析的爬升依序約806、770、732公尺，最大持續坡度依序約10.1%、9.3%、9.2%。500/200公尺保留短陡丘陵特徵，並以官方23K至37K碎石路範圍交叉檢核，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://www.erv-nsa.gov.tw/zh-tw/travel/check-in",
        "referenceLabel": "花東縱谷國家風景區縣道197里程與碎石路段資料"
      },
      "reviewedAt": "2026-07-29T18:00:00.000Z",
      "reviewerNote": "初版富源研究點導入service、track與footway，另一個北端定位點會進入grade1 track 597公尺往返，均未採用。最終轉折點22.9020047,121.1763649是縣道197 tertiary way 892910116在碎石track way 674684942起點22.9020968,121.1764836之前的相鄰節點，明確在官方23K至37K碎石段南端前折返。最終raw為36.676公里，service、track、path、footway、steps、construction、private、access=no與bicycle=no全為零；live OSM五個窗口皆在ref=197、東40或合法一般道路，距離0.0公尺。500/200公尺正式分析為36.6公里、爬升805公尺、最高496公尺、最大持續坡度10.0%。"
    },
    "waypoints": [
      {
        "name": "台東大橋縣道197南端",
        "lat": 22.791281,
        "lng": 121.141459,
        "role": "start"
      },
      {
        "name": "富源縣道197主線",
        "lat": 22.82996,
        "lng": 121.152151,
        "role": "via"
      },
      {
        "name": "鸞山縣道197碎石路南端前",
        "lat": 22.9020047,
        "lng": 121.1763649,
        "role": "via"
      },
      {
        "name": "回程富源縣道197主線",
        "lat": 22.82996,
        "lng": 121.152151,
        "role": "via"
      },
      {
        "name": "台東大橋北側縣道197南端",
        "lat": 22.803253,
        "lng": 121.150668,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.79129,
        "lng": 121.141455,
        "ele": 45.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 45.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7913975,
        "lng": 121.14190812499999,
        "ele": 45.5,
        "distanceKm": 0.04796463601993142,
        "gradePct": 0,
        "smoothedEle": 45.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.791505,
        "lng": 121.14236125,
        "ele": 45.5,
        "distanceKm": 0.09592923657637603,
        "gradePct": 0,
        "smoothedEle": 45.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7916125,
        "lng": 121.142814375,
        "ele": 45.5,
        "distanceKm": 0.14389380166756946,
        "gradePct": 0,
        "smoothedEle": 45.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.791719999999998,
        "lng": 121.1432675,
        "ele": 45.5,
        "distanceKm": 0.19185833129204274,
        "gradePct": 0,
        "smoothedEle": 45.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7918275,
        "lng": 121.14372062499999,
        "ele": 45.5,
        "distanceKm": 0.23982282545114852,
        "gradePct": 0.21793881145950422,
        "smoothedEle": 45.93587762291901,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.791935,
        "lng": 121.14417375,
        "ele": 45.5,
        "distanceKm": 0.2877872841459441,
        "gradePct": 0.7424774577451707,
        "smoothedEle": 46.98495491549034,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7920425,
        "lng": 121.144626875,
        "ele": 45.5,
        "distanceKm": 0.33575170737505894,
        "gradePct": 1.0581084461079193,
        "smoothedEle": 47.61621689221584,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.79215,
        "lng": 121.14508,
        "ele": 45.5,
        "distanceKm": 0.38371609513672866,
        "gradePct": 1.4946423837912306,
        "smoothedEle": 48.48928476758246,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.792211,
        "lng": 121.14557,
        "ele": 45.5,
        "distanceKm": 0.43440312476979026,
        "gradePct": 1.752606701107414,
        "smoothedEle": 49.39183946329965,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.792116,
        "lng": 121.146121,
        "ele": 53.5,
        "distanceKm": 0.4918668239302269,
        "gradePct": 1.4258470622320445,
        "smoothedEle": 49.89034005039471,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.792027,
        "lng": 121.146369,
        "ele": 58,
        "distanceKm": 0.5191481979715785,
        "gradePct": 1.2394325156730588,
        "smoothedEle": 49.87656237384163,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.791736,
        "lng": 121.146729,
        "ele": 51.25,
        "distanceKm": 0.5682294976670765,
        "gradePct": 0.790705413736152,
        "smoothedEle": 49.788802061530035,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.791481,
        "lng": 121.147281,
        "ele": 56,
        "distanceKm": 0.6315232365837649,
        "gradePct": 0.32000159622702284,
        "smoothedEle": 49.98056214821055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.79118,
        "lng": 121.147761,
        "ele": 52.5,
        "distanceKm": 0.6910336053623544,
        "gradePct": 0.010787835233202259,
        "smoothedEle": 49.904687506330355,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.790994,
        "lng": 121.148133,
        "ele": 47.25,
        "distanceKm": 0.7344160041836147,
        "gradePct": -0.1352333063003855,
        "smoothedEle": 49.57879600655233,
        "gradeBand": "descent"
      },
      {
        "lat": 22.79087,
        "lng": 121.148481,
        "ele": 43.75,
        "distanceKm": 0.7726625387030257,
        "gradePct": -0.34214247542877285,
        "smoothedEle": 49.11794782827366,
        "gradeBand": "descent"
      },
      {
        "lat": 22.790782,
        "lng": 121.14881,
        "ele": 45.25,
        "distanceKm": 0.8077802988826965,
        "gradePct": -0.4485745544063172,
        "smoothedEle": 49.011479418955616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.790704,
        "lng": 121.149223,
        "ele": 47.75,
        "distanceKm": 0.8509976689971793,
        "gradePct": -0.11202769842750368,
        "smoothedEle": 49.73167720290012,
        "gradeBand": "descent"
      },
      {
        "lat": 22.790656,
        "lng": 121.1496335,
        "ele": 45.75,
        "distanceKm": 0.893416650630215,
        "gradePct": 0.2279142349510615,
        "smoothedEle": 50.342614379790525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.790608,
        "lng": 121.150044,
        "ele": 43.75,
        "distanceKm": 0.9358356469597491,
        "gradePct": 0.8374871180739661,
        "smoothedEle": 51.23666438473408,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.790827,
        "lng": 121.150311,
        "ele": 46.5,
        "distanceKm": 0.9724714983405396,
        "gradePct": 1.5967782464931344,
        "smoothedEle": 52.31380624492793,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.791139,
        "lng": 121.150561,
        "ele": 50.5,
        "distanceKm": 1.0156039403749648,
        "gradePct": 2.6220858976120605,
        "smoothedEle": 54.38602863534585,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.791470424055323,
        "lng": 121.15068755684376,
        "ele": 55.58056690762736,
        "distanceKm": 1.0546736391358815,
        "gradePct": 3.46904935305457,
        "smoothedEle": 56.72271887775614,
        "gradeBand": "hard"
      },
      {
        "lat": 22.791819,
        "lng": 121.150744,
        "ele": 62.25,
        "distanceKm": 1.0938630733526546,
        "gradePct": 4.359555077607853,
        "smoothedEle": 59.0711336269636,
        "gradeBand": "hard"
      },
      {
        "lat": 22.791943,
        "lng": 121.151053,
        "ele": 63.5,
        "distanceKm": 1.1284103027258163,
        "gradePct": 5.180653899205255,
        "smoothedEle": 61.441470860070304,
        "gradeBand": "hard"
      },
      {
        "lat": 22.792031,
        "lng": 121.15141650000001,
        "ele": 64.625,
        "distanceKm": 1.1669370106659382,
        "gradePct": 6.2703084725379,
        "smoothedEle": 64.691702026871,
        "gradeBand": "steep"
      },
      {
        "lat": 22.792119,
        "lng": 121.15178,
        "ele": 65.75,
        "distanceKm": 1.2054636953442386,
        "gradePct": 7.270491232220393,
        "smoothedEle": 68.4398408445012,
        "gradeBand": "steep"
      },
      {
        "lat": 22.792183,
        "lng": 121.151908,
        "ele": 66,
        "distanceKm": 1.220390882354463,
        "gradePct": 7.592798180437543,
        "smoothedEle": 69.85792361047253,
        "gradeBand": "steep"
      },
      {
        "lat": 22.792304,
        "lng": 121.151952,
        "ele": 68.5,
        "distanceKm": 1.2345814229014593,
        "gradePct": 7.8671282821424935,
        "smoothedEle": 71.25529518566972,
        "gradeBand": "steep"
      },
      {
        "lat": 22.792377,
        "lng": 121.151805,
        "ele": 72.5,
        "distanceKm": 1.2516979096308596,
        "gradePct": 8.201853922221572,
        "smoothedEle": 72.94845355324838,
        "gradeBand": "steep"
      },
      {
        "lat": 22.792377,
        "lng": 121.151482,
        "ele": 74.25,
        "distanceKm": 1.284809408094572,
        "gradePct": 8.874166820063998,
        "smoothedEle": 76.27692917101037,
        "gradeBand": "steep"
      },
      {
        "lat": 22.792406,
        "lng": 121.151175,
        "ele": 75,
        "distanceKm": 1.3164454785364397,
        "gradePct": 9.353756447786616,
        "smoothedEle": 79.32805921905283,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.792519,
        "lng": 121.151033,
        "ele": 77.5,
        "distanceKm": 1.3356751240196507,
        "gradePct": 9.518548529793284,
        "smoothedEle": 81.09145051079744,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.792651,
        "lng": 121.150941,
        "ele": 80.25,
        "distanceKm": 1.353121684472386,
        "gradePct": 9.53718961248521,
        "smoothedEle": 82.60057798995904,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.792781,
        "lng": 121.150868,
        "ele": 83.25,
        "distanceKm": 1.3693992302738438,
        "gradePct": 9.52834289601024,
        "smoothedEle": 83.98792934619863,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.792884,
        "lng": 121.150396,
        "ele": 91,
        "distanceKm": 1.4191219363731653,
        "gradePct": 9.480313997963972,
        "smoothedEle": 88.6980017381772,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.792855,
        "lng": 121.150061,
        "ele": 94,
        "distanceKm": 1.453614524199192,
        "gradePct": 9.522981224036425,
        "smoothedEle": 92.18708033713597,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.792652,
        "lng": 121.149639,
        "ele": 97.75,
        "distanceKm": 1.5024095954083858,
        "gradePct": 9.612705282713167,
        "smoothedEle": 97.19978381259115,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.792688,
        "lng": 121.149623,
        "ele": 99.75,
        "distanceKm": 1.506735613250944,
        "gradePct": 9.604172948588523,
        "smoothedEle": 97.59994046302779,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.792952,
        "lng": 121.149835,
        "ele": 103.75,
        "distanceKm": 1.5432602534678157,
        "gradePct": 9.628412333332728,
        "smoothedEle": 101.00438887472917,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.793249,
        "lng": 121.150186,
        "ele": 105.5,
        "distanceKm": 1.5921000530207796,
        "gradePct": 9.795394660223057,
        "smoothedEle": 105.7290947600529,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.793708,
        "lng": 121.150449,
        "ele": 111.25,
        "distanceKm": 1.6498218284290291,
        "gradePct": 9.56653699596922,
        "smoothedEle": 110.93650629110226,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.793843,
        "lng": 121.150513,
        "ele": 112.5,
        "distanceKm": 1.6662042371537276,
        "gradePct": 9.473443798624839,
        "smoothedEle": 112.42730548504983,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.794236,
        "lng": 121.150519,
        "ele": 119.75,
        "distanceKm": 1.709908231961423,
        "gradePct": 9.22294336765856,
        "smoothedEle": 116.3415458328254,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.794584,
        "lng": 121.150768,
        "ele": 118.75,
        "distanceKm": 1.7562645440370757,
        "gradePct": 9.062231444136893,
        "smoothedEle": 120.38687183575966,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.7949,
        "lng": 121.150935,
        "ele": 122,
        "distanceKm": 1.7953506482036021,
        "gradePct": 8.778130596372643,
        "smoothedEle": 123.57861073780926,
        "gradeBand": "steep"
      },
      {
        "lat": 22.795209,
        "lng": 121.151023,
        "ele": 125.5,
        "distanceKm": 1.8308744003273119,
        "gradePct": 8.649201047803048,
        "smoothedEle": 126.52555251740657,
        "gradeBand": "steep"
      },
      {
        "lat": 22.79551,
        "lng": 121.151149,
        "ele": 127.25,
        "distanceKm": 1.8667499117154198,
        "gradePct": 8.546662482124322,
        "smoothedEle": 129.5695024436214,
        "gradeBand": "steep"
      },
      {
        "lat": 22.795823,
        "lng": 121.150743,
        "ele": 136.5,
        "distanceKm": 1.921003626557961,
        "gradePct": 8.20046382984422,
        "smoothedEle": 133.7107232575284,
        "gradeBand": "steep"
      },
      {
        "lat": 22.79624045402871,
        "lng": 121.15052714903322,
        "ele": 139.4718633732886,
        "distanceKm": 1.9724264189879237,
        "gradePct": 7.700925132789964,
        "smoothedEle": 137.10848742742343,
        "gradeBand": "steep"
      },
      {
        "lat": 22.796671,
        "lng": 121.150335,
        "ele": 142.5,
        "distanceKm": 2.024194663251421,
        "gradePct": 7.197569496097701,
        "smoothedEle": 140.36656096063527,
        "gradeBand": "steep"
      },
      {
        "lat": 22.79694891451778,
        "lng": 121.15011012677056,
        "ele": 145.87845582815157,
        "distanceKm": 2.0627478998138913,
        "gradePct": 6.730680821192495,
        "smoothedEle": 142.691303105242,
        "gradeBand": "steep"
      },
      {
        "lat": 22.797227,
        "lng": 121.149881,
        "ele": 148,
        "distanceKm": 2.1015785241808103,
        "gradePct": 6.346009349066081,
        "smoothedEle": 144.92001144568533,
        "gradeBand": "steep"
      },
      {
        "lat": 22.797856,
        "lng": 121.149845,
        "ele": 150,
        "distanceKm": 2.1716175170412884,
        "gradePct": 5.794962139037482,
        "smoothedEle": 148.644963459665,
        "gradeBand": "hard"
      },
      {
        "lat": 22.798288,
        "lng": 121.149748,
        "ele": 150.75,
        "distanceKm": 2.220672105084073,
        "gradePct": 5.393223160046598,
        "smoothedEle": 150.93131242324364,
        "gradeBand": "hard"
      },
      {
        "lat": 22.798587,
        "lng": 121.14954,
        "ele": 150.25,
        "distanceKm": 2.260168898160143,
        "gradePct": 5.152568896226337,
        "smoothedEle": 152.84092830342092,
        "gradeBand": "hard"
      },
      {
        "lat": 22.799077,
        "lng": 121.149299,
        "ele": 153.25,
        "distanceKm": 2.319993496407902,
        "gradePct": 4.875287950536172,
        "smoothedEle": 155.64996876106972,
        "gradeBand": "hard"
      },
      {
        "lat": 22.799282,
        "lng": 121.149294,
        "ele": 155.25,
        "distanceKm": 2.3427942492155323,
        "gradePct": 4.767387702248907,
        "smoothedEle": 156.64680292159574,
        "gradeBand": "hard"
      },
      {
        "lat": 22.799616,
        "lng": 121.149479,
        "ele": 157.25,
        "distanceKm": 2.384494883741651,
        "gradePct": 4.605126953949007,
        "smoothedEle": 158.45540901494405,
        "gradeBand": "hard"
      },
      {
        "lat": 22.800012,
        "lng": 121.149616,
        "ele": 160.25,
        "distanceKm": 2.430713334415194,
        "gradePct": 4.621202926457083,
        "smoothedEle": 160.65919796941495,
        "gradeBand": "hard"
      },
      {
        "lat": 22.800477,
        "lng": 121.149632,
        "ele": 163.75,
        "distanceKm": 2.482445052196095,
        "gradePct": 4.995156644471645,
        "smoothedEle": 163.87720963495192,
        "gradeBand": "hard"
      },
      {
        "lat": 22.800742,
        "lng": 121.149577,
        "ele": 166.25,
        "distanceKm": 2.512446242718002,
        "gradePct": 5.272742453337027,
        "smoothedEle": 165.84107534210474,
        "gradeBand": "hard"
      },
      {
        "lat": 22.801114,
        "lng": 121.149636,
        "ele": 168.25,
        "distanceKm": 2.554250598236922,
        "gradePct": 5.759090737991921,
        "smoothedEle": 168.66185987400985,
        "gradeBand": "hard"
      },
      {
        "lat": 22.801619,
        "lng": 121.149833,
        "ele": 169.5,
        "distanceKm": 2.6139247054315105,
        "gradePct": 6.396314828073126,
        "smoothedEle": 172.65131193159547,
        "gradeBand": "steep"
      },
      {
        "lat": 22.801947,
        "lng": 121.149918,
        "ele": 173.75,
        "distanceKm": 2.6514229894105585,
        "gradePct": 6.542497414150171,
        "smoothedEle": 175.03245296426505,
        "gradeBand": "steep"
      },
      {
        "lat": 22.802528,
        "lng": 121.150151,
        "ele": 182.5,
        "distanceKm": 2.7203007798222814,
        "gradePct": 6.500847534137599,
        "smoothedEle": 179.37276199843348,
        "gradeBand": "steep"
      },
      {
        "lat": 22.802743,
        "lng": 121.150404,
        "ele": 183.25,
        "distanceKm": 2.7555725483926414,
        "gradePct": 6.392155404205748,
        "smoothedEle": 181.53454832251848,
        "gradeBand": "steep"
      },
      {
        "lat": 22.803253,
        "lng": 121.150668,
        "ele": 187.5,
        "distanceKm": 2.818407830816781,
        "gradePct": 6.18340843971678,
        "smoothedEle": 185.3028072729937,
        "gradeBand": "steep"
      },
      {
        "lat": 22.803771,
        "lng": 121.151039,
        "ele": 189,
        "distanceKm": 2.8874285126814607,
        "gradePct": 6.179420016590123,
        "smoothedEle": 189.66016801504546,
        "gradeBand": "steep"
      },
      {
        "lat": 22.804308,
        "lng": 121.151219,
        "ele": 193.25,
        "distanceKm": 2.9499258768210663,
        "gradePct": 6.162805430016556,
        "smoothedEle": 193.51407794322614,
        "gradeBand": "steep"
      },
      {
        "lat": 22.804728,
        "lng": 121.151409,
        "ele": 195.25,
        "distanceKm": 3.0005259784083753,
        "gradePct": 6.15162489359316,
        "smoothedEle": 196.53367466943638,
        "gradeBand": "steep"
      },
      {
        "lat": 22.805174,
        "lng": 121.151744,
        "ele": 198.75,
        "distanceKm": 3.060846765730205,
        "gradePct": 6.189226188667286,
        "smoothedEle": 200.3604819345821,
        "gradeBand": "steep"
      },
      {
        "lat": 22.805325,
        "lng": 121.151869,
        "ele": 199.25,
        "distanceKm": 3.081967567110085,
        "gradePct": 6.185329420160892,
        "smoothedEle": 201.68607062861992,
        "gradeBand": "steep"
      },
      {
        "lat": 22.805808,
        "lng": 121.152063,
        "ele": 204,
        "distanceKm": 3.1392379616472144,
        "gradePct": 6.226536073344528,
        "smoothedEle": 205.30807809596595,
        "gradeBand": "steep"
      },
      {
        "lat": 22.806200151344353,
        "lng": 121.15233385174409,
        "ele": 208.57703488174357,
        "distanceKm": 3.1909312858405485,
        "gradePct": 6.282614907013491,
        "smoothedEle": 208.52633444194254,
        "gradeBand": "steep"
      },
      {
        "lat": 22.806577,
        "lng": 121.15263,
        "ele": 214.5,
        "distanceKm": 3.242674812109632,
        "gradePct": 6.180574356028098,
        "smoothedEle": 211.56878488277118,
        "gradeBand": "steep"
      },
      {
        "lat": 22.806578,
        "lng": 121.152674,
        "ele": 214.5,
        "distanceKm": 3.247186257438383,
        "gradePct": 6.16969164481092,
        "smoothedEle": 211.83322977898308,
        "gradeBand": "steep"
      },
      {
        "lat": 22.806849,
        "lng": 121.152436,
        "ele": 216.75,
        "distanceKm": 3.2859571808184085,
        "gradePct": 6.113652000372378,
        "smoothedEle": 214.16569366366093,
        "gradeBand": "steep"
      },
      {
        "lat": 22.806985,
        "lng": 121.15246,
        "ele": 218.5,
        "distanceKm": 3.3012784964191746,
        "gradePct": 6.061988706720948,
        "smoothedEle": 215.0313479951042,
        "gradeBand": "steep"
      },
      {
        "lat": 22.80723,
        "lng": 121.152358,
        "ele": 219,
        "distanceKm": 3.3304586208305262,
        "gradePct": 5.996184046404233,
        "smoothedEle": 216.74520576737652,
        "gradeBand": "hard"
      },
      {
        "lat": 22.807885,
        "lng": 121.15234,
        "ele": 221.75,
        "distanceKm": 3.403314763845288,
        "gradePct": 5.820535521495808,
        "smoothedEle": 220.89553750126763,
        "gradeBand": "hard"
      },
      {
        "lat": 22.808303,
        "lng": 121.152313,
        "ele": 222.5,
        "distanceKm": 3.4498766270729755,
        "gradePct": 5.576212626814135,
        "smoothedEle": 223.14750802609342,
        "gradeBand": "hard"
      },
      {
        "lat": 22.80868882892204,
        "lng": 121.15221020000754,
        "ele": 224.55822352280674,
        "distanceKm": 3.494053933025082,
        "gradePct": 5.119125287759867,
        "smoothedEle": 224.86141073885773,
        "gradeBand": "hard"
      },
      {
        "lat": 22.809072,
        "lng": 121.152096,
        "ele": 227,
        "distanceKm": 3.5382393700871364,
        "gradePct": 4.531988876216967,
        "smoothedEle": 226.25242261011772,
        "gradeBand": "hard"
      },
      {
        "lat": 22.809504038125006,
        "lng": 121.15185904673962,
        "ele": 229.42529670579003,
        "distanceKm": 3.5920704010470716,
        "gradePct": 3.623145224339592,
        "smoothedEle": 227.50128023745856,
        "gradeBand": "hard"
      },
      {
        "lat": 22.809912,
        "lng": 121.151573,
        "ele": 231.75,
        "distanceKm": 3.6460840379726918,
        "gradePct": 2.7730759459051604,
        "smoothedEle": 228.5102308565526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.810353,
        "lng": 121.151385,
        "ele": 231.5,
        "distanceKm": 3.698771381673848,
        "gradePct": 2.218076765657285,
        "smoothedEle": 229.44607535230276,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.810743,
        "lng": 121.151264,
        "ele": 231.75,
        "distanceKm": 3.743876094830682,
        "gradePct": 1.900273462965073,
        "smoothedEle": 230.1837392159828,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.811037589640677,
        "lng": 121.1509411431322,
        "ele": 230.89899661017404,
        "distanceKm": 3.7904391492922995,
        "gradePct": 1.6101696953377584,
        "smoothedEle": 230.68377526290956,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.811302,
        "lng": 121.150583,
        "ele": 229.5,
        "distanceKm": 3.8374708440104213,
        "gradePct": 1.2538133294177374,
        "smoothedEle": 230.85696689821714,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.811589,
        "lng": 121.15025,
        "ele": 230,
        "distanceKm": 3.8841979426402857,
        "gradePct": 0.7798500543827338,
        "smoothedEle": 230.74691874623613,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.81219,
        "lng": 121.149985,
        "ele": 231.75,
        "distanceKm": 3.9563351898484562,
        "gradePct": 0.13023454408244095,
        "smoothedEle": 230.5780052960548,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.81261,
        "lng": 121.149848,
        "ele": 231.5,
        "distanceKm": 4.005102516027009,
        "gradePct": -0.05651505446512313,
        "smoothedEle": 230.6247421974437,
        "gradeBand": "descent"
      },
      {
        "lat": 22.813034,
        "lng": 121.14973950000001,
        "ele": 230.25,
        "distanceKm": 4.053543073501569,
        "gradePct": 0.030658960755630432,
        "smoothedEle": 230.88043271237362,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.813458,
        "lng": 121.149631,
        "ele": 229,
        "distanceKm": 4.101983623029654,
        "gradePct": 0.2906700549837209,
        "smoothedEle": 231.28661267819348,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.814039,
        "lng": 121.149448,
        "ele": 230.25,
        "distanceKm": 4.169255752411228,
        "gradePct": 0.7014134286917647,
        "smoothedEle": 231.99321476913013,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.814512310047466,
        "lng": 121.14928784554898,
        "ele": 232.04198334423106,
        "distanceKm": 4.224386038520777,
        "gradePct": 1.1292197330463827,
        "smoothedEle": 232.98496855561928,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.814986,
        "lng": 121.149129,
        "ele": 233.75,
        "distanceKm": 4.2795168692670575,
        "gradePct": 1.7016306686639793,
        "smoothedEle": 234.5014875218859,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8154235,
        "lng": 121.14899100000001,
        "ele": 234,
        "distanceKm": 4.330179235932112,
        "gradePct": 2.4451294873177694,
        "smoothedEle": 236.47302816244553,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.815861,
        "lng": 121.148853,
        "ele": 234.25,
        "distanceKm": 4.380841589912769,
        "gradePct": 3.3960561913769256,
        "smoothedEle": 238.993747949646,
        "gradeBand": "hard"
      },
      {
        "lat": 22.816326,
        "lng": 121.148764,
        "ele": 239.5,
        "distanceKm": 4.4333457976060755,
        "gradePct": 4.28394052072856,
        "smoothedEle": 241.7993114116746,
        "gradeBand": "hard"
      },
      {
        "lat": 22.81677525,
        "lng": 121.1487205,
        "ele": 243.68750000000003,
        "distanceKm": 4.4834987562414135,
        "gradePct": 4.90682316635269,
        "smoothedEle": 244.47009013699238,
        "gradeBand": "hard"
      },
      {
        "lat": 22.817224500000002,
        "lng": 121.14867699999999,
        "ele": 247.87500000000003,
        "distanceKm": 4.533651713569701,
        "gradePct": 5.234680380941579,
        "smoothedEle": 247.11516303377934,
        "gradeBand": "hard"
      },
      {
        "lat": 22.81767375,
        "lng": 121.1486335,
        "ele": 252.06249999999997,
        "distanceKm": 4.583804669590002,
        "gradePct": 5.274372646142946,
        "smoothedEle": 249.70082546791434,
        "gradeBand": "hard"
      },
      {
        "lat": 22.818123,
        "lng": 121.14859,
        "ele": 256.25,
        "distanceKm": 4.633957624302948,
        "gradePct": 5.212160773787526,
        "smoothedEle": 252.25621436162453,
        "gradeBand": "hard"
      },
      {
        "lat": 22.818583666666665,
        "lng": 121.14858466666666,
        "ele": 257.5833333333333,
        "distanceKm": 4.685184407816106,
        "gradePct": 4.99809992761224,
        "smoothedEle": 254.5551914554837,
        "gradeBand": "hard"
      },
      {
        "lat": 22.819044333333334,
        "lng": 121.14857933333333,
        "ele": 258.9166666666667,
        "distanceKm": 4.7364111913099265,
        "gradePct": 4.6340172269748585,
        "smoothedEle": 256.52546383645324,
        "gradeBand": "hard"
      },
      {
        "lat": 22.819505,
        "lng": 121.148574,
        "ele": 260.25,
        "distanceKm": 4.78763797478362,
        "gradePct": 3.9434955786577714,
        "smoothedEle": 257.7831308509627,
        "gradeBand": "hard"
      },
      {
        "lat": 22.819646,
        "lng": 121.148627,
        "ele": 259.75,
        "distanceKm": 4.804230833589375,
        "gradePct": 3.668038266551715,
        "smoothedEle": 258.07765409476485,
        "gradeBand": "hard"
      },
      {
        "lat": 22.81975,
        "lng": 121.148721,
        "ele": 259.25,
        "distanceKm": 4.819282450978906,
        "gradePct": 3.3652701601875465,
        "smoothedEle": 258.2390265543117,
        "gradeBand": "hard"
      },
      {
        "lat": 22.819824,
        "lng": 121.148912,
        "ele": 259.5,
        "distanceKm": 4.840517423146538,
        "gradePct": 2.885352151870774,
        "smoothedEle": 258.32131207146125,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.819911,
        "lng": 121.149287,
        "ele": 259.75,
        "distanceKm": 4.8801505892985375,
        "gradePct": 1.9244602966870714,
        "smoothedEle": 258.17820222839134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.820052,
        "lng": 121.149598,
        "ele": 259.5,
        "distanceKm": 4.915672755466838,
        "gradePct": 1.0081826774174223,
        "smoothedEle": 257.74419239703036,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.82019,
        "lng": 121.149951,
        "ele": 261.5,
        "distanceKm": 4.954971903122223,
        "gradePct": 0.10561092615284898,
        "smoothedEle": 257.19236909164385,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.820298,
        "lng": 121.150272,
        "ele": 259.75,
        "distanceKm": 4.989994908720143,
        "gradePct": -0.7152404534990348,
        "smoothedEle": 256.3944855213379,
        "gradeBand": "descent"
      },
      {
        "lat": 22.820608,
        "lng": 121.150585,
        "ele": 256.75,
        "distanceKm": 5.037083388145713,
        "gradePct": -1.768018246949707,
        "smoothedEle": 254.77196869193364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.821078,
        "lng": 121.150832,
        "ele": 254,
        "distanceKm": 5.095153576848366,
        "gradePct": -2.7986998649076016,
        "smoothedEle": 252.39749599453125,
        "gradeBand": "descent"
      },
      {
        "lat": 22.821427,
        "lng": 121.15094,
        "ele": 250,
        "distanceKm": 5.135508406196108,
        "gradePct": -3.311868031491113,
        "smoothedEle": 250.8419318620697,
        "gradeBand": "descent"
      },
      {
        "lat": 22.821524,
        "lng": 121.150937,
        "ele": 249.75,
        "distanceKm": 5.146298710592993,
        "gradePct": -3.422589805110417,
        "smoothedEle": 250.4689750685228,
        "gradeBand": "descent"
      },
      {
        "lat": 22.821593,
        "lng": 121.150897,
        "ele": 250.5,
        "distanceKm": 5.154997762882806,
        "gradePct": -3.5096895762943316,
        "smoothedEle": 250.17240080977433,
        "gradeBand": "descent"
      },
      {
        "lat": 22.821645,
        "lng": 121.150837,
        "ele": 251.75,
        "distanceKm": 5.163438651033497,
        "gradePct": -3.557035788442005,
        "smoothedEle": 249.88541061265087,
        "gradeBand": "descent"
      },
      {
        "lat": 22.821787,
        "lng": 121.150517,
        "ele": 249.75,
        "distanceKm": 5.199838530507435,
        "gradePct": -3.7177918697559957,
        "smoothedEle": 248.6197223857824,
        "gradeBand": "descent"
      },
      {
        "lat": 22.822248,
        "lng": 121.150281,
        "ele": 242.5,
        "distanceKm": 5.256519444424405,
        "gradePct": -3.746625790136772,
        "smoothedEle": 246.48398256696555,
        "gradeBand": "descent"
      },
      {
        "lat": 22.822773,
        "lng": 121.150285,
        "ele": 239,
        "distanceKm": 5.3148983010096265,
        "gradePct": -3.4821063472180613,
        "smoothedEle": 244.67218022502234,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823194339329994,
        "lng": 121.15023661443233,
        "ele": 240.3823756981007,
        "distanceKm": 5.362010877626799,
        "gradePct": -3.124500107916572,
        "smoothedEle": 243.68495469264542,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823612,
        "lng": 121.150148,
        "ele": 242.5,
        "distanceKm": 5.409332381649186,
        "gradePct": -2.3063527041669243,
        "smoothedEle": 243.64928816688175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823714,
        "lng": 121.150142,
        "ele": 242.75,
        "distanceKm": 5.420690937766445,
        "gradePct": -2.0639608177934416,
        "smoothedEle": 243.70608094746805,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823786,
        "lng": 121.150151,
        "ele": 243,
        "distanceKm": 5.428749944459471,
        "gradePct": -1.8793553418852142,
        "smoothedEle": 243.77162810304404,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823865,
        "lng": 121.150195,
        "ele": 243,
        "distanceKm": 5.438624229549159,
        "gradePct": -1.6151694203734892,
        "smoothedEle": 243.9279363643248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.824237,
        "lng": 121.150577,
        "ele": 241,
        "distanceKm": 5.495578589974518,
        "gradePct": -0.05240595528860577,
        "smoothedEle": 245.16696035421003,
        "gradeBand": "descent"
      },
      {
        "lat": 22.824447,
        "lng": 121.150631,
        "ele": 241.25,
        "distanceKm": 5.519576442020576,
        "gradePct": 0.6563721487009099,
        "smoothedEle": 245.8868959155917,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.825053,
        "lng": 121.150602,
        "ele": 243,
        "distanceKm": 5.587026175977877,
        "gradePct": 2.5864903766494343,
        "smoothedEle": 248.83908125266458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.825383,
        "lng": 121.150679,
        "ele": 247.5,
        "distanceKm": 5.624559545635345,
        "gradePct": 3.561174756277606,
        "smoothedEle": 250.85989540992395,
        "gradeBand": "hard"
      },
      {
        "lat": 22.825631,
        "lng": 121.150893,
        "ele": 254.25,
        "distanceKm": 5.659794232777264,
        "gradePct": 4.113181213320782,
        "smoothedEle": 252.61484547553403,
        "gradeBand": "hard"
      },
      {
        "lat": 22.82573,
        "lng": 121.151182,
        "ele": 258.25,
        "distanceKm": 5.691392625613952,
        "gradePct": 4.51707286254864,
        "smoothedEle": 254.11004175649146,
        "gradeBand": "hard"
      },
      {
        "lat": 22.825697,
        "lng": 121.15139,
        "ele": 258.75,
        "distanceKm": 5.713023495460566,
        "gradePct": 4.640477758600067,
        "smoothedEle": 254.97126303599154,
        "gradeBand": "hard"
      },
      {
        "lat": 22.825602,
        "lng": 121.151819,
        "ele": 257.5,
        "distanceKm": 5.758241761962243,
        "gradePct": 4.613884441093428,
        "smoothedEle": 256.80699453561385,
        "gradeBand": "hard"
      },
      {
        "lat": 22.825704,
        "lng": 121.15225,
        "ele": 261.75,
        "distanceKm": 5.803846676684014,
        "gradePct": 4.641348651343118,
        "smoothedEle": 259.02740217159834,
        "gradeBand": "hard"
      },
      {
        "lat": 22.825935,
        "lng": 121.152661,
        "ele": 267.25,
        "distanceKm": 5.853182845460389,
        "gradePct": 4.564606119947282,
        "smoothedEle": 261.41476134453166,
        "gradeBand": "hard"
      },
      {
        "lat": 22.826317,
        "lng": 121.15314,
        "ele": 266.5,
        "distanceKm": 5.9180997718642105,
        "gradePct": 4.034669862446659,
        "smoothedEle": 263.24668497535043,
        "gradeBand": "hard"
      },
      {
        "lat": 22.826707,
        "lng": 121.153548,
        "ele": 261.25,
        "distanceKm": 5.978341580334871,
        "gradePct": 3.4778257536252655,
        "smoothedEle": 264.7412640376302,
        "gradeBand": "hard"
      },
      {
        "lat": 22.826854,
        "lng": 121.153615,
        "ele": 261.75,
        "distanceKm": 5.996070970606001,
        "gradePct": 3.2849958113831095,
        "smoothedEle": 265.2188109759091,
        "gradeBand": "hard"
      },
      {
        "lat": 22.827239,
        "lng": 121.153628,
        "ele": 266.5,
        "distanceKm": 6.038901803515946,
        "gradePct": 2.6774497782043034,
        "smoothedEle": 266.07860650148643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.827475,
        "lng": 121.153678,
        "ele": 268.75,
        "distanceKm": 6.065639475243285,
        "gradePct": 2.276482128283588,
        "smoothedEle": 266.31924554703244,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.827562,
        "lng": 121.153764,
        "ele": 267.25,
        "distanceKm": 6.078726439843371,
        "gradePct": 2.1445375061056193,
        "smoothedEle": 266.42466398612186,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.827828,
        "lng": 121.153978,
        "ele": 262.25,
        "distanceKm": 6.115548480017633,
        "gradePct": 1.5697545436309481,
        "smoothedEle": 266.3141978655991,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.828210978831567,
        "lng": 121.15383979919686,
        "ele": 266.2906576116378,
        "distanceKm": 6.160427431059771,
        "gradePct": 0.9007540468409153,
        "smoothedEle": 266.09832809643285,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.828581,
        "lng": 121.153651,
        "ele": 271.5,
        "distanceKm": 6.20589458177048,
        "gradePct": 0.19141390341439984,
        "smoothedEle": 265.7988401059526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.828666,
        "lng": 121.15362,
        "ele": 272,
        "distanceKm": 6.215865839038437,
        "gradePct": 0.12864930437200417,
        "smoothedEle": 265.87347611131827,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.828752,
        "lng": 121.153604,
        "ele": 272.25,
        "distanceKm": 6.225568185001209,
        "gradePct": 0.06764959224130956,
        "smoothedEle": 265.94624370603907,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.828875,
        "lng": 121.153619,
        "ele": 271.25,
        "distanceKm": 6.2393313024327,
        "gradePct": -0.017564965962122855,
        "smoothedEle": 266.047342059813,
        "gradeBand": "descent"
      },
      {
        "lat": 22.829301,
        "lng": 121.153737,
        "ele": 266.25,
        "distanceKm": 6.28821972183775,
        "gradePct": 0.08200905487876746,
        "smoothedEle": 266.5602022498963,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.829849,
        "lng": 121.153728,
        "ele": 265.75,
        "distanceKm": 6.349161606192056,
        "gradePct": 0.7862491210752572,
        "smoothedEle": 267.7250154619294,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.830254,
        "lng": 121.153564,
        "ele": 264.25,
        "distanceKm": 6.397229785876381,
        "gradePct": 1.586781928296942,
        "smoothedEle": 269.02947818579736,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.83044,
        "lng": 121.153465,
        "ele": 262.25,
        "distanceKm": 6.420266628963464,
        "gradePct": 1.8041426456103393,
        "smoothedEle": 269.51476732697665,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8305,
        "lng": 121.153406,
        "ele": 262,
        "distanceKm": 6.4292706437857685,
        "gradePct": 1.8670904976661957,
        "smoothedEle": 269.7076214821806,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.830536,
        "lng": 121.153324,
        "ele": 262.5,
        "distanceKm": 6.438579012327531,
        "gradePct": 1.9043649801683937,
        "smoothedEle": 269.8505459980424,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.83048,
        "lng": 121.152991,
        "ele": 265,
        "distanceKm": 6.4732695208710185,
        "gradePct": 1.9581791538265902,
        "smoothedEle": 270.3197266283104,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.830338,
        "lng": 121.152605,
        "ele": 269.25,
        "distanceKm": 6.515863041477026,
        "gradePct": 2.101066390311699,
        "smoothedEle": 271.2906958497074,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.830056,
        "lng": 121.15234,
        "ele": 275.75,
        "distanceKm": 6.557345956246442,
        "gradePct": 2.584220395941825,
        "smoothedEle": 273.1155611813378,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.829996,
        "lng": 121.152255,
        "ele": 277,
        "distanceKm": 6.568318452852771,
        "gradePct": 2.638327093412071,
        "smoothedEle": 273.52154355577204,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.82996,
        "lng": 121.152151,
        "ele": 278,
        "distanceKm": 6.5797037290135245,
        "gradePct": 2.6999757888981697,
        "smoothedEle": 273.9538118387185,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.83,
        "lng": 121.152016,
        "ele": 278.25,
        "distanceKm": 6.594236447575758,
        "gradePct": 2.7789047273422773,
        "smoothedEle": 274.5060551440834,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.830303944324488,
        "lng": 121.15185312971501,
        "ele": 275.92129656647495,
        "distanceKm": 6.6319306660038695,
        "gradePct": 3.085304005068477,
        "smoothedEle": 275.9190725665897,
        "gradeBand": "hard"
      },
      {
        "lat": 22.830569,
        "lng": 121.151617,
        "ele": 277,
        "distanceKm": 6.6700654898563325,
        "gradePct": 3.630374957370034,
        "smoothedEle": 277.5371428084359,
        "gradeBand": "hard"
      },
      {
        "lat": 22.830888,
        "lng": 121.151461,
        "ele": 278.5,
        "distanceKm": 6.708973151097863,
        "gradePct": 4.120190854802527,
        "smoothedEle": 279.37401443323637,
        "gradeBand": "hard"
      },
      {
        "lat": 22.831105,
        "lng": 121.151193,
        "ele": 283,
        "distanceKm": 6.745532418332757,
        "gradePct": 4.2258269996480315,
        "smoothedEle": 281.04752856019223,
        "gradeBand": "hard"
      },
      {
        "lat": 22.831296,
        "lng": 121.150862,
        "ele": 288.25,
        "distanceKm": 6.785554423853986,
        "gradePct": 4.281209515903381,
        "smoothedEle": 282.7385572744628,
        "gradeBand": "hard"
      },
      {
        "lat": 22.831655,
        "lng": 121.150694,
        "ele": 284.75,
        "distanceKm": 6.829028083432065,
        "gradePct": 4.190265787594566,
        "smoothedEle": 284.19079701126236,
        "gradeBand": "hard"
      },
      {
        "lat": 22.83206,
        "lng": 121.150705,
        "ele": 284,
        "distanceKm": 6.874076198347914,
        "gradePct": 4.050923154973756,
        "smoothedEle": 285.8283388862298,
        "gradeBand": "hard"
      },
      {
        "lat": 22.832567,
        "lng": 121.150866,
        "ele": 286,
        "distanceKm": 6.932816996400631,
        "gradePct": 3.8258503368007233,
        "smoothedEle": 288.11717604063483,
        "gradeBand": "hard"
      },
      {
        "lat": 22.832946,
        "lng": 121.151054,
        "ele": 288,
        "distanceKm": 6.9791552037949565,
        "gradePct": 3.3602613690529464,
        "smoothedEle": 289.18869713875154,
        "gradeBand": "hard"
      },
      {
        "lat": 22.833337,
        "lng": 121.15109,
        "ele": 290.75,
        "distanceKm": 7.022788732195038,
        "gradePct": 2.627589365571763,
        "smoothedEle": 289.23754990740144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.833789,
        "lng": 121.151015,
        "ele": 293.75,
        "distanceKm": 7.073633215815576,
        "gradePct": 1.6643566980742135,
        "smoothedEle": 289.14094944549066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.834161,
        "lng": 121.150992,
        "ele": 296.75,
        "distanceKm": 7.115064887192266,
        "gradePct": 0.867662329902486,
        "smoothedEle": 289.16078917332203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.834227,
        "lng": 121.150961,
        "ele": 297.5,
        "distanceKm": 7.123061876435332,
        "gradePct": 0.7052098841847675,
        "smoothedEle": 289.1474872343436,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.834285,
        "lng": 121.150898,
        "ele": 297.5,
        "distanceKm": 7.132187521569578,
        "gradePct": 0.46125842351975127,
        "smoothedEle": 289.0151653798971,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.834371,
        "lng": 121.150773,
        "ele": 296.75,
        "distanceKm": 7.148173309086031,
        "gradePct": 0.15554862098389308,
        "smoothedEle": 288.7833714609085,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.834501,
        "lng": 121.150501,
        "ele": 293.75,
        "distanceKm": 7.179573303037988,
        "gradePct": -0.5481129903372728,
        "smoothedEle": 288.0929392684119,
        "gradeBand": "descent"
      },
      {
        "lat": 22.834657,
        "lng": 121.150084,
        "ele": 287.25,
        "distanceKm": 7.225694115640731,
        "gradePct": -1.2424822506519595,
        "smoothedEle": 286.7470654093762,
        "gradeBand": "descent"
      },
      {
        "lat": 22.834696,
        "lng": 121.149965,
        "ele": 285,
        "distanceKm": 7.238637404131003,
        "gradePct": -1.4405150809366762,
        "smoothedEle": 286.32640853344236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.834747,
        "lng": 121.149884,
        "ele": 283.75,
        "distanceKm": 7.248690511401536,
        "gradePct": -1.5812793300896986,
        "smoothedEle": 286.02577993347694,
        "gradeBand": "descent"
      },
      {
        "lat": 22.834819,
        "lng": 121.149833,
        "ele": 284,
        "distanceKm": 7.258251531868705,
        "gradePct": -1.721289319050412,
        "smoothedEle": 285.72759477955805,
        "gradeBand": "descent"
      },
      {
        "lat": 22.83531,
        "lng": 121.149672,
        "ele": 287,
        "distanceKm": 7.31528692854383,
        "gradePct": -2.614979815808707,
        "smoothedEle": 283.93046020514316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.835574,
        "lng": 121.149448,
        "ele": 284,
        "distanceKm": 7.352552208234998,
        "gradePct": -3.1809243914778422,
        "smoothedEle": 282.3252381708676,
        "gradeBand": "descent"
      },
      {
        "lat": 22.835752,
        "lng": 121.149118,
        "ele": 276.75,
        "distanceKm": 7.391736794431744,
        "gradePct": -3.8174243674906703,
        "smoothedEle": 280.10314177651105,
        "gradeBand": "descent"
      },
      {
        "lat": 22.835973,
        "lng": 121.148916,
        "ele": 273.75,
        "distanceKm": 7.423867992464799,
        "gradePct": -4.319186573348585,
        "smoothedEle": 278.1619812510374,
        "gradeBand": "descent"
      },
      {
        "lat": 22.836109,
        "lng": 121.148886,
        "ele": 272.5,
        "distanceKm": 7.439299868188061,
        "gradePct": -4.550696610222469,
        "smoothedEle": 277.20520495619513,
        "gradeBand": "descent"
      },
      {
        "lat": 22.836438,
        "lng": 121.148943,
        "ele": 271.75,
        "distanceKm": 7.4763464633454015,
        "gradePct": -5.058962872873475,
        "smoothedEle": 275.03951385169375,
        "gradeBand": "descent"
      },
      {
        "lat": 22.836696,
        "lng": 121.149142,
        "ele": 274.5,
        "distanceKm": 7.511544600793347,
        "gradePct": -5.526738413235047,
        "smoothedEle": 272.9949007945454,
        "gradeBand": "descent"
      },
      {
        "lat": 22.837005,
        "lng": 121.149246,
        "ele": 277,
        "distanceKm": 7.547518882648424,
        "gradePct": -5.967464610298601,
        "smoothedEle": 270.6071221663313,
        "gradeBand": "descent"
      },
      {
        "lat": 22.837076,
        "lng": 121.149227,
        "ele": 276.75,
        "distanceKm": 7.555650294133335,
        "gradePct": -6.066166668431118,
        "smoothedEle": 270.0172172442593,
        "gradeBand": "descent"
      },
      {
        "lat": 22.837134,
        "lng": 121.149167,
        "ele": 275.5,
        "distanceKm": 7.564560987530012,
        "gradePct": -6.14766195092019,
        "smoothedEle": 269.3489152395086,
        "gradeBand": "descent"
      },
      {
        "lat": 22.837323,
        "lng": 121.148872,
        "ele": 270.5,
        "distanceKm": 7.601379351907695,
        "gradePct": -6.416177729043506,
        "smoothedEle": 266.6882449541814,
        "gradeBand": "descent"
      },
      {
        "lat": 22.837637,
        "lng": 121.148633,
        "ele": 267,
        "distanceKm": 7.644028503025396,
        "gradePct": -6.527599179447003,
        "smoothedEle": 263.8735773502905,
        "gradeBand": "descent"
      },
      {
        "lat": 22.837812,
        "lng": 121.148307,
        "ele": 262.75,
        "distanceKm": 7.68269045580453,
        "gradePct": -6.363095301242675,
        "smoothedEle": 261.9448091528143,
        "gradeBand": "descent"
      },
      {
        "lat": 22.837869,
        "lng": 121.147705,
        "ele": 255.75,
        "distanceKm": 7.744707041339868,
        "gradePct": -5.640283615902713,
        "smoothedEle": 259.51318978131854,
        "gradeBand": "descent"
      },
      {
        "lat": 22.837982,
        "lng": 121.147324,
        "ele": 251.25,
        "distanceKm": 7.785723215346002,
        "gradePct": -5.204243742184469,
        "smoothedEle": 257.411144429467,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838177,
        "lng": 121.147056,
        "ele": 249.5,
        "distanceKm": 7.820715086691637,
        "gradePct": -5.129969888927657,
        "smoothedEle": 255.15222664093875,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838264,
        "lng": 121.146987,
        "ele": 250,
        "distanceKm": 7.832697757656179,
        "gradePct": -5.1299946652966595,
        "smoothedEle": 254.36137035727893,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838484,
        "lng": 121.146962,
        "ele": 247.75,
        "distanceKm": 7.857294462672801,
        "gradePct": -5.152513233956564,
        "smoothedEle": 252.90673844824892,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838568,
        "lng": 121.147016,
        "ele": 246.75,
        "distanceKm": 7.86815105931087,
        "gradePct": -5.20468993950504,
        "smoothedEle": 252.26077094828378,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838605,
        "lng": 121.147072,
        "ele": 246.75,
        "distanceKm": 7.875212220225724,
        "gradePct": -5.229846790534121,
        "smoothedEle": 251.85818992316425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838628,
        "lng": 121.147158,
        "ele": 247.25,
        "distanceKm": 7.884388874183605,
        "gradePct": -5.249576602908983,
        "smoothedEle": 251.3790623576232,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838632,
        "lng": 121.14728,
        "ele": 248.5,
        "distanceKm": 7.896899047183635,
        "gradePct": -5.329584297870322,
        "smoothedEle": 250.72853336162166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838631,
        "lng": 121.147754,
        "ele": 253,
        "distanceKm": 7.94547354293384,
        "gradePct": -5.499139039689817,
        "smoothedEle": 248.47562912252147,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838852,
        "lng": 121.148147,
        "ele": 251.75,
        "distanceKm": 7.992652501354258,
        "gradePct": -5.082681547475526,
        "smoothedEle": 246.79845780410974,
        "gradeBand": "descent"
      },
      {
        "lat": 22.839121,
        "lng": 121.148323,
        "ele": 247.75,
        "distanceKm": 8.027580912726034,
        "gradePct": -4.429214570250831,
        "smoothedEle": 245.8406529821669,
        "gradeBand": "descent"
      },
      {
        "lat": 22.839469,
        "lng": 121.148373,
        "ele": 242.5,
        "distanceKm": 8.066614559969814,
        "gradePct": -3.66177432967211,
        "smoothedEle": 245.0286439997324,
        "gradeBand": "descent"
      },
      {
        "lat": 22.839726,
        "lng": 121.148629,
        "ele": 240.75,
        "distanceKm": 8.10540733253439,
        "gradePct": -3.346218403624189,
        "smoothedEle": 243.64147892966824,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8399,
        "lng": 121.149051,
        "ele": 241,
        "distanceKm": 8.152783346841927,
        "gradePct": -3.298875899828869,
        "smoothedEle": 241.6180200926848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.839956,
        "lng": 121.149613,
        "ele": 241,
        "distanceKm": 8.210710847167688,
        "gradePct": -3.9949436416666795,
        "smoothedEle": 238.31337563451854,
        "gradeBand": "descent"
      },
      {
        "lat": 22.840015,
        "lng": 121.149995,
        "ele": 239.75,
        "distanceKm": 8.250402822682958,
        "gradePct": -4.669743479963759,
        "smoothedEle": 236.02640649578274,
        "gradeBand": "descent"
      },
      {
        "lat": 22.840079,
        "lng": 121.150129,
        "ele": 241,
        "distanceKm": 8.265869176764248,
        "gradePct": -4.9189198145633135,
        "smoothedEle": 235.20631042502328,
        "gradeBand": "descent"
      },
      {
        "lat": 22.840198,
        "lng": 121.150217,
        "ele": 241,
        "distanceKm": 8.281882124552977,
        "gradePct": -5.022506167524217,
        "smoothedEle": 234.43768893116427,
        "gradeBand": "descent"
      },
      {
        "lat": 22.840292,
        "lng": 121.150242,
        "ele": 240,
        "distanceKm": 8.29264385012117,
        "gradePct": -5.106731528987442,
        "smoothedEle": 233.88441678881074,
        "gradeBand": "descent"
      },
      {
        "lat": 22.840815,
        "lng": 121.150164,
        "ele": 230,
        "distanceKm": 8.351345616783483,
        "gradePct": -5.103857318373432,
        "smoothedEle": 231.47171179487287,
        "gradeBand": "descent"
      },
      {
        "lat": 22.84114,
        "lng": 121.150174,
        "ele": 224.5,
        "distanceKm": 8.387498544207856,
        "gradePct": -4.848284192737341,
        "smoothedEle": 229.94102127357633,
        "gradeBand": "descent"
      },
      {
        "lat": 22.841361,
        "lng": 121.150332,
        "ele": 223.25,
        "distanceKm": 8.416927104736624,
        "gradePct": -4.692946804977612,
        "smoothedEle": 228.5693141824734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.841602,
        "lng": 121.150627,
        "ele": 222.75,
        "distanceKm": 8.457325144129268,
        "gradePct": -4.474633775543952,
        "smoothedEle": 226.71008614163503,
        "gradeBand": "descent"
      },
      {
        "lat": 22.841889,
        "lng": 121.151004,
        "ele": 223.75,
        "distanceKm": 8.507434622645917,
        "gradePct": -4.332494234229217,
        "smoothedEle": 224.61151185099047,
        "gradeBand": "descent"
      },
      {
        "lat": 22.842303,
        "lng": 121.15118,
        "ele": 222,
        "distanceKm": 8.556876326121973,
        "gradePct": -4.619638909339146,
        "smoothedEle": 221.998267479493,
        "gradeBand": "descent"
      },
      {
        "lat": 22.842641,
        "lng": 121.151176,
        "ele": 221.75,
        "distanceKm": 8.594462498397233,
        "gradePct": -4.735064366679185,
        "smoothedEle": 220.14629272384755,
        "gradeBand": "descent"
      },
      {
        "lat": 22.842816,
        "lng": 121.15089,
        "ele": 218.75,
        "distanceKm": 8.629642031048311,
        "gradePct": -4.801640474380594,
        "smoothedEle": 218.3808576189722,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843064,
        "lng": 121.15062,
        "ele": 217,
        "distanceKm": 8.668705808383342,
        "gradePct": -4.682352065595853,
        "smoothedEle": 216.86876221472698,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843429,
        "lng": 121.150525,
        "ele": 219.25,
        "distanceKm": 8.71044321320475,
        "gradePct": -4.377449159287268,
        "smoothedEle": 215.69759428770448,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843547,
        "lng": 121.150475,
        "ele": 220.25,
        "distanceKm": 8.724529142655278,
        "gradePct": -4.203164691820562,
        "smoothedEle": 215.30165052857728,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843581,
        "lng": 121.150445,
        "ele": 220.25,
        "distanceKm": 8.72940192272824,
        "gradePct": -4.151072787214815,
        "smoothedEle": 215.148283238131,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843624,
        "lng": 121.150374,
        "ele": 219.5,
        "distanceKm": 8.738108049112997,
        "gradePct": -4.0660175441083055,
        "smoothedEle": 214.85823086236798,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843649,
        "lng": 121.150298,
        "ele": 218.5,
        "distanceKm": 8.746377317363176,
        "gradePct": -4.003932237427335,
        "smoothedEle": 214.54532877815083,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843813,
        "lng": 121.149619,
        "ele": 209.75,
        "distanceKm": 8.81830701084203,
        "gradePct": -4.004778437381688,
        "smoothedEle": 210.94013270639311,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843896,
        "lng": 121.14916,
        "ele": 203.5,
        "distanceKm": 8.866239324849984,
        "gradePct": -4.429884338743522,
        "smoothedEle": 208.1044671107106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843923,
        "lng": 121.149077,
        "ele": 202.75,
        "distanceKm": 8.875258963316993,
        "gradePct": -4.547265201226866,
        "smoothedEle": 207.59034771809104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843982,
        "lng": 121.149016,
        "ele": 202.75,
        "distanceKm": 8.884320634235072,
        "gradePct": -4.678385804770914,
        "smoothedEle": 207.0738324757605,
        "gradeBand": "descent"
      },
      {
        "lat": 22.844053,
        "lng": 121.148986,
        "ele": 203.5,
        "distanceKm": 8.892792907030502,
        "gradePct": -4.800977932908128,
        "smoothedEle": 206.590912926421,
        "gradeBand": "descent"
      },
      {
        "lat": 22.844153,
        "lng": 121.149016,
        "ele": 206,
        "distanceKm": 8.904329552366145,
        "gradePct": -4.958888574436461,
        "smoothedEle": 205.95136885656547,
        "gradeBand": "descent"
      },
      {
        "lat": 22.844543,
        "lng": 121.149187,
        "ele": 209.75,
        "distanceKm": 8.95110208723157,
        "gradePct": -5.515987365692046,
        "smoothedEle": 203.2765433369519,
        "gradeBand": "descent"
      },
      {
        "lat": 22.844593,
        "lng": 121.149188,
        "ele": 209.75,
        "distanceKm": 8.956662785515405,
        "gradePct": -5.546234478453135,
        "smoothedEle": 202.93734074163797,
        "gradeBand": "descent"
      },
      {
        "lat": 22.844683,
        "lng": 121.149124,
        "ele": 208.5,
        "distanceKm": 8.968627825064397,
        "gradePct": -5.6273920379644755,
        "smoothedEle": 202.17532456045058,
        "gradeBand": "descent"
      },
      {
        "lat": 22.844766,
        "lng": 121.149031,
        "ele": 206.75,
        "distanceKm": 8.981894272753868,
        "gradePct": -5.7360368823417,
        "smoothedEle": 201.29310578910076,
        "gradeBand": "descent"
      },
      {
        "lat": 22.844866,
        "lng": 121.14887,
        "ele": 203.25,
        "distanceKm": 9.001789800912192,
        "gradePct": -5.875896988040629,
        "smoothedEle": 200.0161996244078,
        "gradeBand": "descent"
      },
      {
        "lat": 22.845154,
        "lng": 121.148487,
        "ele": 193.75,
        "distanceKm": 9.052444324274186,
        "gradePct": -5.882320343522885,
        "smoothedEle": 197.1559357506362,
        "gradeBand": "descent"
      },
      {
        "lat": 22.845525,
        "lng": 121.148467,
        "ele": 191.75,
        "distanceKm": 9.093748575584625,
        "gradePct": -5.5402130072687665,
        "smoothedEle": 195.45750858597026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8459235,
        "lng": 121.148529,
        "ele": 190.24999999999997,
        "distanceKm": 9.138512959709116,
        "gradePct": -4.839414298283233,
        "smoothedEle": 194.31766117184603,
        "gradeBand": "descent"
      },
      {
        "lat": 22.846322,
        "lng": 121.148591,
        "ele": 188.75,
        "distanceKm": 9.183277341191026,
        "gradePct": -4.173672180794,
        "smoothedEle": 192.85699531889048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.846783,
        "lng": 121.148745,
        "ele": 187,
        "distanceKm": 9.23691232354915,
        "gradePct": -3.877536028795972,
        "smoothedEle": 190.27789535009356,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847105,
        "lng": 121.149054,
        "ele": 186.75,
        "distanceKm": 9.28470950512447,
        "gradePct": -3.7426088170095246,
        "smoothedEle": 188.34397673067338,
        "gradeBand": "descent"
      },
      {
        "lat": 22.84711,
        "lng": 121.149412,
        "ele": 189,
        "distanceKm": 9.32139840209745,
        "gradePct": -3.7079286431893754,
        "smoothedEle": 187.33759641604885,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847108,
        "lng": 121.149915,
        "ele": 190.5,
        "distanceKm": 9.372941887262273,
        "gradePct": -3.6530832833178395,
        "smoothedEle": 185.8880755571643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847129,
        "lng": 121.150068,
        "ele": 191,
        "distanceKm": 9.388792918236247,
        "gradePct": -3.5782384366206927,
        "smoothedEle": 185.43529556386937,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847286,
        "lng": 121.150255,
        "ele": 189.75,
        "distanceKm": 9.414715008059575,
        "gradePct": -3.3291109737826736,
        "smoothedEle": 184.6870569117514,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847355,
        "lng": 121.15028,
        "ele": 188.75,
        "distanceKm": 9.422803848825781,
        "gradePct": -3.2539407576727344,
        "smoothedEle": 184.44843610914828,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847432,
        "lng": 121.15029,
        "ele": 187.25,
        "distanceKm": 9.431426971033545,
        "gradePct": -3.17380542324899,
        "smoothedEle": 184.19405400401928,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847506,
        "lng": 121.150276,
        "ele": 185.75,
        "distanceKm": 9.439779528390135,
        "gradePct": -3.1071160008196697,
        "smoothedEle": 183.94765356199989,
        "gradeBand": "descent"
      },
      {
        "lat": 22.84758,
        "lng": 121.150249,
        "ele": 185.75,
        "distanceKm": 9.448460649257928,
        "gradePct": -3.05953940344396,
        "smoothedEle": 183.6915604964,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847864,
        "lng": 121.150022,
        "ele": 182.75,
        "distanceKm": 9.487682148487862,
        "gradePct": -2.859142224645804,
        "smoothedEle": 182.54415236031193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.84837,
        "lng": 121.149806,
        "ele": 180.25,
        "distanceKm": 9.548143825785369,
        "gradePct": -2.957648331471613,
        "smoothedEle": 180.67015718084122,
        "gradeBand": "descent"
      },
      {
        "lat": 22.848714,
        "lng": 121.14971,
        "ele": 178,
        "distanceKm": 9.587639602252187,
        "gradePct": -3.0194840826033236,
        "smoothedEle": 179.42927152730564,
        "gradeBand": "descent"
      },
      {
        "lat": 22.849142694881532,
        "lng": 121.14964653373364,
        "ele": 175.96764845963637,
        "distanceKm": 9.635749941593087,
        "gradePct": -3.121925822919263,
        "smoothedEle": 177.82267472667428,
        "gradeBand": "descent"
      },
      {
        "lat": 22.849572,
        "lng": 121.149585,
        "ele": 174,
        "distanceKm": 9.683901180426895,
        "gradePct": -3.2413376053127623,
        "smoothedEle": 176.17208774848092,
        "gradeBand": "descent"
      },
      {
        "lat": 22.849913,
        "lng": 121.149558,
        "ele": 172.75,
        "distanceKm": 9.72191950437504,
        "gradePct": -3.0914163245370894,
        "smoothedEle": 175.30014108110007,
        "gradeBand": "descent"
      },
      {
        "lat": 22.850227,
        "lng": 121.149527,
        "ele": 171.25,
        "distanceKm": 9.756978960101591,
        "gradePct": -2.8764426288175104,
        "smoothedEle": 174.6396880294126,
        "gradeBand": "descent"
      },
      {
        "lat": 22.850377,
        "lng": 121.149535,
        "ele": 171,
        "distanceKm": 9.773678354475665,
        "gradePct": -2.7792153602417597,
        "smoothedEle": 174.30947788706527,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85062,
        "lng": 121.14973,
        "ele": 172.5,
        "distanceKm": 9.807284275312739,
        "gradePct": -2.4964758480300677,
        "smoothedEle": 173.78030556651757,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85086,
        "lng": 121.149989,
        "ele": 174.25,
        "distanceKm": 9.844920989389191,
        "gradePct": -2.101866249931327,
        "smoothedEle": 173.3045658486485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851091,
        "lng": 121.150332,
        "ele": 172.5,
        "distanceKm": 9.888453259230515,
        "gradePct": -1.6126890686506727,
        "smoothedEle": 172.8423081139467,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851208,
        "lng": 121.150685,
        "ele": 172.5,
        "distanceKm": 9.926893018255948,
        "gradePct": -1.3545826834399057,
        "smoothedEle": 172.497284230648,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851228,
        "lng": 121.151041,
        "ele": 174.75,
        "distanceKm": 9.963439383934382,
        "gradePct": -1.0917827838597884,
        "smoothedEle": 172.3283754652653,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851257,
        "lng": 121.151086,
        "ele": 174.5,
        "distanceKm": 9.969066134125706,
        "gradePct": -1.0389651001275164,
        "smoothedEle": 172.32274871507397,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85133,
        "lng": 121.151141,
        "ele": 174.25,
        "distanceKm": 9.978947995450204,
        "gradePct": -0.9568165755205518,
        "smoothedEle": 172.3128668537495,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851441,
        "lng": 121.151172,
        "ele": 173.25,
        "distanceKm": 9.99169284934613,
        "gradePct": -0.859480783882819,
        "smoothedEle": 172.306852851177,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851556,
        "lng": 121.151161,
        "ele": 172,
        "distanceKm": 10.004529863548525,
        "gradePct": -0.7428688660348994,
        "smoothedEle": 172.3379399078416,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851997,
        "lng": 121.150921,
        "ele": 172.5,
        "distanceKm": 10.059387940548957,
        "gradePct": -0.3657741553368096,
        "smoothedEle": 172.4193967850132,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85224123850795,
        "lng": 121.15064923866811,
        "ele": 172.06472121867387,
        "distanceKm": 10.098285254793064,
        "gradePct": -0.2194626662307123,
        "smoothedEle": 172.31513370356254,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85247,
        "lng": 121.15036,
        "ele": 170.75,
        "distanceKm": 10.137341998723716,
        "gradePct": -0.10889634769564834,
        "smoothedEle": 172.23119878828842,
        "gradeBand": "descent"
      },
      {
        "lat": 22.852725,
        "lng": 121.150162,
        "ele": 170.5,
        "distanceKm": 10.172207652656933,
        "gradePct": -0.052920617610468144,
        "smoothedEle": 172.21376596132183,
        "gradeBand": "descent"
      },
      {
        "lat": 22.853136,
        "lng": 121.150024,
        "ele": 172.25,
        "distanceKm": 10.22004643490737,
        "gradePct": -0.13748305787812903,
        "smoothedEle": 172.08601381675282,
        "gradeBand": "descent"
      },
      {
        "lat": 22.853551,
        "lng": 121.149922,
        "ele": 172.5,
        "distanceKm": 10.267361179150619,
        "gradePct": -0.1623635587727256,
        "smoothedEle": 172.07329764109764,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85390175275784,
        "lng": 121.14993485524484,
        "ele": 172.03367967283097,
        "distanceKm": 10.306385397471445,
        "gradePct": -0.06666295193623763,
        "smoothedEle": 172.1644001839752,
        "gradeBand": "descent"
      },
      {
        "lat": 22.854247,
        "lng": 121.150011,
        "ele": 172.25,
        "distanceKm": 10.345560023794752,
        "gradePct": 0.03767456602410859,
        "smoothedEle": 172.30243890780113,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.854654,
        "lng": 121.149988,
        "ele": 172.25,
        "distanceKm": 10.390877742300722,
        "gradePct": 0.20710726086102302,
        "smoothedEle": 172.5781225251468,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.855081,
        "lng": 121.14991,
        "ele": 172.25,
        "distanceKm": 10.439026009320912,
        "gradePct": 0.17362795714933615,
        "smoothedEle": 172.42816883478832,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85555883631149,
        "lng": 121.14989728389125,
        "ele": 172.95080740217088,
        "distanceKm": 10.492175029795185,
        "gradePct": -0.2813979227373845,
        "smoothedEle": 171.56843005119276,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856037,
        "lng": 121.149909,
        "ele": 173.5,
        "distanceKm": 10.545358030376995,
        "gradePct": -0.47830580883644014,
        "smoothedEle": 171.34511553059855,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856512,
        "lng": 121.150068,
        "ele": 174.5,
        "distanceKm": 10.600631251118628,
        "gradePct": -0.7225063801891904,
        "smoothedEle": 171.10273328952425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856685,
        "lng": 121.150109,
        "ele": 174.75,
        "distanceKm": 10.620321378620565,
        "gradePct": -0.7261373323934377,
        "smoothedEle": 171.03414815449344,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856761,
        "lng": 121.150105,
        "ele": 174.5,
        "distanceKm": 10.628782137656934,
        "gradePct": -0.6706583793164379,
        "smoothedEle": 171.11875574485714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856808,
        "lng": 121.150077,
        "ele": 174,
        "distanceKm": 10.634744011329055,
        "gradePct": -0.6315651362297694,
        "smoothedEle": 171.17837448157832,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85684,
        "lng": 121.150042,
        "ele": 173.5,
        "distanceKm": 10.639795958753421,
        "gradePct": -0.5934100868186384,
        "smoothedEle": 171.22889395582197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857088,
        "lng": 121.149733,
        "ele": 166,
        "distanceKm": 10.681782798203566,
        "gradePct": 0.0273706768226135,
        "smoothedEle": 171.7912761877238,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.857139,
        "lng": 121.14971,
        "ele": 165,
        "distanceKm": 10.687923932289689,
        "gradePct": 0.1184928375880365,
        "smoothedEle": 171.8741814978865,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.857211,
        "lng": 121.149696,
        "ele": 163.75,
        "distanceKm": 10.696057475894282,
        "gradePct": 0.21592830545419947,
        "smoothedEle": 171.98398433654847,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.857314,
        "lng": 121.149704,
        "ele": 162.75,
        "distanceKm": 10.707539865320083,
        "gradePct": 0.31754161364558914,
        "smoothedEle": 172.1389965937968,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.857351,
        "lng": 121.149718,
        "ele": 162.75,
        "distanceKm": 10.711896991358575,
        "gradePct": 0.3620715383868584,
        "smoothedEle": 172.20976094468375,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.857688,
        "lng": 121.149993,
        "ele": 169.5,
        "distanceKm": 10.758781671890898,
        "gradePct": 0.8299837690513272,
        "smoothedEle": 172.9462181740947,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.857788,
        "lng": 121.15009,
        "ele": 170.75,
        "distanceKm": 10.773695616489416,
        "gradePct": 0.9725650518660592,
        "smoothedEle": 173.16598061889633,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.857905,
        "lng": 121.150157,
        "ele": 171.25,
        "distanceKm": 10.788405617423834,
        "gradePct": 1.1077879554233943,
        "smoothedEle": 173.37192063197818,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.858324,
        "lng": 121.150221,
        "ele": 169.5,
        "distanceKm": 10.8354555841519,
        "gradePct": 1.2800158894994145,
        "smoothedEle": 173.7455219888056,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.858411,
        "lng": 121.150274,
        "ele": 169,
        "distanceKm": 10.846549560621888,
        "gradePct": 1.2380457470249597,
        "smoothedEle": 173.79544488292055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.858566,
        "lng": 121.15063,
        "ele": 177.25,
        "distanceKm": 10.88689311253054,
        "gradePct": 1.0231390316979123,
        "smoothedEle": 173.90654349453382,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.858646,
        "lng": 121.150739,
        "ele": 179.25,
        "distanceKm": 10.901171253021051,
        "gradePct": 0.9586989632352817,
        "smoothedEle": 173.97041825423042,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.858874,
        "lng": 121.150837,
        "ele": 179,
        "distanceKm": 10.92843984614337,
        "gradePct": 0.8017801761574816,
        "smoothedEle": 174.0731738727875,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.859399,
        "lng": 121.150976,
        "ele": 180.75,
        "distanceKm": 10.988529479792472,
        "gradePct": 0.6380933363105493,
        "smoothedEle": 174.6490908366228,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.859761,
        "lng": 121.150965,
        "ele": 180.5,
        "distanceKm": 11.02879787494817,
        "gradePct": 0.688551502303201,
        "smoothedEle": 175.06975929838927,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860145,
        "lng": 121.150864,
        "ele": 176.75,
        "distanceKm": 11.072732949207015,
        "gradePct": 1.0896269683760136,
        "smoothedEle": 176.04680298456427,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860682,
        "lng": 121.150892,
        "ele": 175.75,
        "distanceKm": 11.132513587475422,
        "gradePct": 2.0794611502095326,
        "smoothedEle": 178.27114012466592,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.861006,
        "lng": 121.150998,
        "ele": 170.75,
        "distanceKm": 11.170142267933784,
        "gradePct": 2.473879412079464,
        "smoothedEle": 179.4206211404201,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86107,
        "lng": 121.151049,
        "ele": 169,
        "distanceKm": 11.178971206593634,
        "gradePct": 2.5555025311061232,
        "smoothedEle": 179.6684865588226,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.861113,
        "lng": 121.151142,
        "ele": 168,
        "distanceKm": 11.189632372848289,
        "gradePct": 2.645197563843761,
        "smoothedEle": 179.95100746457098,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.861131,
        "lng": 121.151279,
        "ele": 168,
        "distanceKm": 11.203811454928154,
        "gradePct": 2.759008688429115,
        "smoothedEle": 180.3267531396874,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.861109,
        "lng": 121.15141,
        "ele": 169.25,
        "distanceKm": 11.21745490014904,
        "gradePct": 2.8459442221078564,
        "smoothedEle": 180.64315204040088,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860934,
        "lng": 121.151795,
        "ele": 175.25,
        "distanceKm": 11.261440727040744,
        "gradePct": 2.8271548581292154,
        "smoothedEle": 181.44999227923336,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860513,
        "lng": 121.15231,
        "ele": 186.5,
        "distanceKm": 11.33198053753962,
        "gradePct": 2.2073390006004634,
        "smoothedEle": 182.66598423308687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860347,
        "lng": 121.152604,
        "ele": 192.75,
        "distanceKm": 11.367309587215349,
        "gradePct": 2.0250924680428355,
        "smoothedEle": 183.38427333951182,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860238,
        "lng": 121.152954,
        "ele": 194,
        "distanceKm": 11.405163826251298,
        "gradePct": 1.9316966185259115,
        "smoothedEle": 184.22150860182768,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860168,
        "lng": 121.153316,
        "ele": 192.25,
        "distanceKm": 11.4430627347114,
        "gradePct": 2.086028841195436,
        "smoothedEle": 185.28493901548293,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860136721326125,
        "lng": 121.15372820674607,
        "ele": 190.10258498449392,
        "distanceKm": 11.48544095991697,
        "gradePct": 2.399168296870394,
        "smoothedEle": 186.66205397177583,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86012186066306,
        "lng": 121.15414160337303,
        "ele": 188.301292492247,
        "distanceKm": 11.527830364597508,
        "gradePct": 2.5189159161968835,
        "smoothedEle": 187.63227381339607,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860107,
        "lng": 121.154555,
        "ele": 186.5,
        "distanceKm": 11.570219773906203,
        "gradePct": 2.2860808122622496,
        "smoothedEle": 188.0208005669267,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860098,
        "lng": 121.154957,
        "ele": 186.5,
        "distanceKm": 11.611421408296174,
        "gradePct": 1.7413105342690534,
        "smoothedEle": 187.87971528306144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860118,
        "lng": 121.155097,
        "ele": 186.75,
        "distanceKm": 11.625937369036382,
        "gradePct": 1.4578163025350983,
        "smoothedEle": 187.72003971491912,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860184,
        "lng": 121.155215,
        "ele": 186,
        "distanceKm": 11.64008084184418,
        "gradePct": 1.1966400689859469,
        "smoothedEle": 187.59454825911754,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860393,
        "lng": 121.155484,
        "ele": 183.5,
        "distanceKm": 11.676132957408344,
        "gradePct": 0.566938967616837,
        "smoothedEle": 187.4934607816695,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860511,
        "lng": 121.155924,
        "ele": 185.25,
        "distanceKm": 11.723086430502057,
        "gradePct": 0.37502298410625334,
        "smoothedEle": 188.27373937050277,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860669,
        "lng": 121.156221,
        "ele": 186.25,
        "distanceKm": 11.758224794818528,
        "gradePct": 0.7191170018241334,
        "smoothedEle": 189.34909271576723,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.861029,
        "lng": 121.156704,
        "ele": 186,
        "distanceKm": 11.82187649339282,
        "gradePct": 2.2632098052813285,
        "smoothedEle": 192.29112895756094,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.861124,
        "lng": 121.157093,
        "ele": 187.25,
        "distanceKm": 11.863109783592833,
        "gradePct": 3.0758873072496833,
        "smoothedEle": 193.68175141662357,
        "gradeBand": "hard"
      },
      {
        "lat": 22.861071,
        "lng": 121.157542,
        "ele": 192.5,
        "distanceKm": 11.90949055097909,
        "gradePct": 3.786023539029798,
        "smoothedEle": 195.6198484510269,
        "gradeBand": "hard"
      },
      {
        "lat": 22.860971,
        "lng": 121.158033,
        "ele": 202,
        "distanceKm": 11.96101296064612,
        "gradePct": 4.642822967274869,
        "smoothedEle": 198.76361007239427,
        "gradeBand": "hard"
      },
      {
        "lat": 22.861113,
        "lng": 121.158668,
        "ele": 210.5,
        "distanceKm": 12.02796404620474,
        "gradePct": 4.767080486874394,
        "smoothedEle": 202.03059704165486,
        "gradeBand": "hard"
      },
      {
        "lat": 22.861164,
        "lng": 121.158761,
        "ele": 211.5,
        "distanceKm": 12.039052706682767,
        "gradePct": 4.81669535892799,
        "smoothedEle": 202.50379986011203,
        "gradeBand": "hard"
      },
      {
        "lat": 22.861237,
        "lng": 121.158836,
        "ele": 211.5,
        "distanceKm": 12.050230442922423,
        "gradePct": 4.823567649429665,
        "smoothedEle": 202.89452165978852,
        "gradeBand": "hard"
      },
      {
        "lat": 22.861311,
        "lng": 121.158869,
        "ele": 210.25,
        "distanceKm": 12.05912648975625,
        "gradePct": 4.8292356703341595,
        "smoothedEle": 203.20588329897245,
        "gradeBand": "hard"
      },
      {
        "lat": 22.861585,
        "lng": 121.15888,
        "ele": 203.25,
        "distanceKm": 12.089614781016351,
        "gradePct": 4.6436264343637985,
        "smoothedEle": 204.07655941645945,
        "gradeBand": "hard"
      },
      {
        "lat": 22.861761,
        "lng": 121.158964,
        "ele": 202.25,
        "distanceKm": 12.110994035622708,
        "gradePct": 4.3970580138450694,
        "smoothedEle": 204.50570314838467,
        "gradeBand": "hard"
      },
      {
        "lat": 22.861865,
        "lng": 121.159101,
        "ele": 205.25,
        "distanceKm": 12.12918114868753,
        "gradePct": 4.103761671939993,
        "smoothedEle": 205.02884016134462,
        "gradeBand": "hard"
      },
      {
        "lat": 22.862001,
        "lng": 121.159405,
        "ele": 213.5,
        "distanceKm": 12.16380598177047,
        "gradePct": 3.560623929216162,
        "smoothedEle": 206.021147933326,
        "gradeBand": "hard"
      },
      {
        "lat": 22.862033,
        "lng": 121.159455,
        "ele": 215,
        "distanceKm": 12.17004346458011,
        "gradePct": 3.514140955942223,
        "smoothedEle": 206.23255009209043,
        "gradeBand": "hard"
      },
      {
        "lat": 22.862156,
        "lng": 121.159497,
        "ele": 215.25,
        "distanceKm": 12.184381480873814,
        "gradePct": 3.4295708601467094,
        "smoothedEle": 206.7630566949575,
        "gradeBand": "hard"
      },
      {
        "lat": 22.862497,
        "lng": 121.15946,
        "ele": 211.5,
        "distanceKm": 12.222488045322892,
        "gradePct": 2.851061697492422,
        "smoothedEle": 207.46551007887797,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.862869,
        "lng": 121.159415,
        "ele": 209,
        "distanceKm": 12.264108784895324,
        "gradePct": 2.8780317864561016,
        "smoothedEle": 209.1042298667188,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86315,
        "lng": 121.15911,
        "ele": 203.5,
        "distanceKm": 12.308300040598748,
        "gradePct": 3.3315445097445293,
        "smoothedEle": 211.11471586354708,
        "gradeBand": "hard"
      },
      {
        "lat": 22.863442,
        "lng": 121.158969,
        "ele": 196.25,
        "distanceKm": 12.343837924659264,
        "gradePct": 4.1346579476383605,
        "smoothedEle": 213.7182023475046,
        "gradeBand": "hard"
      },
      {
        "lat": 22.863489,
        "lng": 121.159003,
        "ele": 196.5,
        "distanceKm": 12.350118714123901,
        "gradePct": 4.317813517029166,
        "smoothedEle": 214.26451366664838,
        "gradeBand": "hard"
      },
      {
        "lat": 22.863508,
        "lng": 121.159067,
        "ele": 198.25,
        "distanceKm": 12.35700802219999,
        "gradePct": 4.53581618345247,
        "smoothedEle": 214.89795862125723,
        "gradeBand": "hard"
      },
      {
        "lat": 22.863499,
        "lng": 121.159128,
        "ele": 200.75,
        "distanceKm": 12.363337624608889,
        "gradePct": 4.739138485998299,
        "smoothedEle": 215.4860023293816,
        "gradeBand": "hard"
      },
      {
        "lat": 22.863408,
        "lng": 121.159354,
        "ele": 205.75,
        "distanceKm": 12.388607680724233,
        "gradePct": 5.43690586041169,
        "smoothedEle": 217.7147738483217,
        "gradeBand": "hard"
      },
      {
        "lat": 22.863244,
        "lng": 121.159851,
        "ele": 211,
        "distanceKm": 12.442696607615229,
        "gradePct": 6.199639877935561,
        "smoothedEle": 220.66045495873456,
        "gradeBand": "steep"
      },
      {
        "lat": 22.862883,
        "lng": 121.160367,
        "ele": 227,
        "distanceKm": 12.509077758392591,
        "gradePct": 6.2170404620868505,
        "smoothedEle": 223.60577197963582,
        "gradeBand": "steep"
      },
      {
        "lat": 22.86273,
        "lng": 121.160727,
        "ele": 237.25,
        "distanceKm": 12.549697547070584,
        "gradePct": 5.673316330345222,
        "smoothedEle": 225.5745126637249,
        "gradeBand": "hard"
      },
      {
        "lat": 22.862659,
        "lng": 121.161147,
        "ele": 246.5,
        "distanceKm": 12.593448713613542,
        "gradePct": 5.6836432386688704,
        "smoothedEle": 229.34570281140634,
        "gradeBand": "hard"
      },
      {
        "lat": 22.862675,
        "lng": 121.161259,
        "ele": 248.25,
        "distanceKm": 12.605061268661352,
        "gradePct": 6.022247831819733,
        "smoothedEle": 230.65533134884254,
        "gradeBand": "steep"
      },
      {
        "lat": 22.862724,
        "lng": 121.161328,
        "ele": 249,
        "distanceKm": 12.61398693188221,
        "gradePct": 6.287394139875155,
        "smoothedEle": 231.67171527899575,
        "gradeBand": "steep"
      },
      {
        "lat": 22.862777,
        "lng": 121.161359,
        "ele": 249.25,
        "distanceKm": 12.620681702655595,
        "gradePct": 6.48502388747651,
        "smoothedEle": 232.43157176177505,
        "gradeBand": "steep"
      },
      {
        "lat": 22.862947,
        "lng": 121.161332,
        "ele": 247.25,
        "distanceKm": 12.6397862197141,
        "gradePct": 7.012217389094527,
        "smoothedEle": 234.52639011126814,
        "gradeBand": "steep"
      },
      {
        "lat": 22.863291,
        "lng": 121.161066,
        "ele": 234.5,
        "distanceKm": 12.686753597218782,
        "gradePct": 8.413570476952772,
        "smoothedEle": 239.44239482542525,
        "gradeBand": "steep"
      },
      {
        "lat": 22.863671,
        "lng": 121.161091,
        "ele": 234.75,
        "distanceKm": 12.729085295476551,
        "gradePct": 9.640137851258734,
        "smoothedEle": 243.8557635159275,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.863951,
        "lng": 121.160939,
        "ele": 229.5,
        "distanceKm": 12.763897722037418,
        "gradePct": 9.723759263989185,
        "smoothedEle": 246.24603421063298,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.86402,
        "lng": 121.160943,
        "ele": 229.5,
        "distanceKm": 12.771581120664479,
        "gradePct": 9.63656677469448,
        "smoothedEle": 246.73393002345125,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.864072,
        "lng": 121.160964,
        "ele": 230.25,
        "distanceKm": 12.77775061731347,
        "gradePct": 9.566554297582348,
        "smoothedEle": 247.12569306066231,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.864138,
        "lng": 121.161016,
        "ele": 232.25,
        "distanceKm": 12.786819515821955,
        "gradePct": 9.386677108121637,
        "smoothedEle": 247.54764448316084,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.864164,
        "lng": 121.161054,
        "ele": 233.5,
        "distanceKm": 12.791668947991987,
        "gradePct": 9.25769110232489,
        "smoothedEle": 247.70767574477185,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.864179,
        "lng": 121.161115,
        "ele": 235.75,
        "distanceKm": 12.798137637842773,
        "gradePct": 9.02331856306127,
        "smoothedEle": 247.9211425098478,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.864185,
        "lng": 121.161488,
        "ele": 248.75,
        "distanceKm": 12.83636041211747,
        "gradePct": 7.409147190588354,
        "smoothedEle": 248.96904324523214,
        "gradeBand": "steep"
      },
      {
        "lat": 22.864199,
        "lng": 121.161568,
        "ele": 251.5,
        "distanceKm": 12.844703596231085,
        "gradePct": 7.062011780802006,
        "smoothedEle": 249.16510807190207,
        "gradeBand": "steep"
      },
      {
        "lat": 22.864236,
        "lng": 121.161644,
        "ele": 254.5,
        "distanceKm": 12.853510497412959,
        "gradePct": 6.707123159209625,
        "smoothedEle": 249.3771359204087,
        "gradeBand": "steep"
      },
      {
        "lat": 22.864314,
        "lng": 121.161702,
        "ele": 257.5,
        "distanceKm": 12.864024246286249,
        "gradePct": 6.271798589211194,
        "smoothedEle": 249.60694505103606,
        "gradeBand": "steep"
      },
      {
        "lat": 22.864444,
        "lng": 121.161723,
        "ele": 259.25,
        "distanceKm": 12.87863885952586,
        "gradePct": 5.700146815601591,
        "smoothedEle": 249.9933310755702,
        "gradeBand": "hard"
      },
      {
        "lat": 22.864913,
        "lng": 121.161702,
        "ele": 261,
        "distanceKm": 12.9308337188139,
        "gradePct": 4.335381308421988,
        "smoothedEle": 252.64657536455653,
        "gradeBand": "hard"
      },
      {
        "lat": 22.865224,
        "lng": 121.161573,
        "ele": 265.75,
        "distanceKm": 12.967855090276057,
        "gradePct": 4.369536736907052,
        "smoothedEle": 255.2364005676006,
        "gradeBand": "hard"
      },
      {
        "lat": 22.865394,
        "lng": 121.161141,
        "ele": 258.75,
        "distanceKm": 13.01598430183281,
        "gradePct": 5.504411465113241,
        "smoothedEle": 259.41924264912547,
        "gradeBand": "hard"
      },
      {
        "lat": 22.865584,
        "lng": 121.160794,
        "ele": 253.75,
        "distanceKm": 13.057340641923561,
        "gradePct": 7.450347885132016,
        "smoothedEle": 264.3615508464911,
        "gradeBand": "steep"
      },
      {
        "lat": 22.86567,
        "lng": 121.160707,
        "ele": 254.25,
        "distanceKm": 13.070413596819268,
        "gradePct": 8.02300591129223,
        "smoothedEle": 265.8218806563667,
        "gradeBand": "steep"
      },
      {
        "lat": 22.86574,
        "lng": 121.160667,
        "ele": 255.5,
        "distanceKm": 13.079210258005098,
        "gradePct": 8.304398129566493,
        "smoothedEle": 266.6311734854631,
        "gradeBand": "steep"
      },
      {
        "lat": 22.865839,
        "lng": 121.160652,
        "ele": 258.25,
        "distanceKm": 13.090325332537075,
        "gradePct": 8.51416704660335,
        "smoothedEle": 267.6157288025973,
        "gradeBand": "steep"
      },
      {
        "lat": 22.865932,
        "lng": 121.160663,
        "ele": 259.5,
        "distanceKm": 13.100727708131334,
        "gradePct": 8.640769410353899,
        "smoothedEle": 268.3977220739097,
        "gradeBand": "steep"
      },
      {
        "lat": 22.866326,
        "lng": 121.160783,
        "ele": 267.75,
        "distanceKm": 13.14623105120757,
        "gradePct": 8.743180856995753,
        "smoothedEle": 271.2100554541742,
        "gradeBand": "steep"
      },
      {
        "lat": 22.866578,
        "lng": 121.160752,
        "ele": 269.5,
        "distanceKm": 13.17443164301882,
        "gradePct": 8.44209737446211,
        "smoothedEle": 272.6921542653217,
        "gradeBand": "steep"
      },
      {
        "lat": 22.866727,
        "lng": 121.160663,
        "ele": 268.75,
        "distanceKm": 13.193343283587769,
        "gradePct": 7.985536419864587,
        "smoothedEle": 273.4226164383049,
        "gradeBand": "steep"
      },
      {
        "lat": 22.867064,
        "lng": 121.160569,
        "ele": 274,
        "distanceKm": 13.232033856370736,
        "gradePct": 6.444848707748628,
        "smoothedEle": 274.2269493658035,
        "gradeBand": "steep"
      },
      {
        "lat": 22.867566,
        "lng": 121.160641,
        "ele": 291.25,
        "distanceKm": 13.288339115583373,
        "gradePct": 4.548331855571506,
        "smoothedEle": 276.53645662980864,
        "gradeBand": "hard"
      },
      {
        "lat": 22.867625,
        "lng": 121.160644,
        "ele": 293.25,
        "distanceKm": 13.294906821619398,
        "gradePct": 4.498324956088611,
        "smoothedEle": 276.95678981611417,
        "gradeBand": "hard"
      },
      {
        "lat": 22.867689,
        "lng": 121.160619,
        "ele": 294.5,
        "distanceKm": 13.302470226368126,
        "gradePct": 4.543198193028319,
        "smoothedEle": 277.5918147713085,
        "gradeBand": "hard"
      },
      {
        "lat": 22.867736,
        "lng": 121.160577,
        "ele": 294.75,
        "distanceKm": 13.309239999721925,
        "gradePct": 4.6318653544696415,
        "smoothedEle": 278.18755482644286,
        "gradeBand": "hard"
      },
      {
        "lat": 22.868031,
        "lng": 121.160147,
        "ele": 289.5,
        "distanceKm": 13.364166562531715,
        "gradePct": 5.377873543672129,
        "smoothedEle": 282.9084139657309,
        "gradeBand": "hard"
      },
      {
        "lat": 22.868167,
        "lng": 121.159765,
        "ele": 286.75,
        "distanceKm": 13.406124516294733,
        "gradePct": 5.900237372519078,
        "smoothedEle": 285.4887984495006,
        "gradeBand": "hard"
      },
      {
        "lat": 22.868124,
        "lng": 121.159369,
        "ele": 279.5,
        "distanceKm": 13.44697759345769,
        "gradePct": 6.203660441496646,
        "smoothedEle": 287.247226655291,
        "gradeBand": "steep"
      },
      {
        "lat": 22.868062,
        "lng": 121.159241,
        "ele": 275.25,
        "distanceKm": 13.461793566624012,
        "gradePct": 6.255385879689748,
        "smoothedEle": 287.9583933672744,
        "gradeBand": "steep"
      },
      {
        "lat": 22.86804,
        "lng": 121.159157,
        "ele": 273,
        "distanceKm": 13.470740741555781,
        "gradePct": 6.24434830330025,
        "smoothedEle": 288.30330996244584,
        "gradeBand": "steep"
      },
      {
        "lat": 22.868044,
        "lng": 121.159077,
        "ele": 272.25,
        "distanceKm": 13.47894923296851,
        "gradePct": 6.264836183992024,
        "smoothedEle": 288.6809784379616,
        "gradeBand": "steep"
      },
      {
        "lat": 22.868064,
        "lng": 121.159024,
        "ele": 272.5,
        "distanceKm": 13.484817121356242,
        "gradePct": 6.29412395392759,
        "smoothedEle": 288.9802407457359,
        "gradeBand": "steep"
      },
      {
        "lat": 22.86841,
        "lng": 121.158903,
        "ele": 285.75,
        "distanceKm": 13.525238622702766,
        "gradePct": 5.485366668698324,
        "smoothedEle": 290.5333468176402,
        "gradeBand": "hard"
      },
      {
        "lat": 22.868757,
        "lng": 121.158744,
        "ele": 297.75,
        "distanceKm": 13.567121242427179,
        "gradePct": 4.304408346564245,
        "smoothedEle": 291.6989413828815,
        "gradeBand": "hard"
      },
      {
        "lat": 22.868991,
        "lng": 121.15845,
        "ele": 302.25,
        "distanceKm": 13.606925000766706,
        "gradePct": 3.7888959453350273,
        "smoothedEle": 293.10104538178723,
        "gradeBand": "hard"
      },
      {
        "lat": 22.868887,
        "lng": 121.157917,
        "ele": 291.25,
        "distanceKm": 13.662744412854458,
        "gradePct": 3.69984441491401,
        "smoothedEle": 295.3947376382711,
        "gradeBand": "hard"
      },
      {
        "lat": 22.868879,
        "lng": 121.157837,
        "ele": 290,
        "distanceKm": 13.67098892545769,
        "gradePct": 3.7328386132451064,
        "smoothedEle": 295.7804060028409,
        "gradeBand": "hard"
      },
      {
        "lat": 22.868898,
        "lng": 121.157756,
        "ele": 289.75,
        "distanceKm": 13.679552464850673,
        "gradePct": 3.7744618462804302,
        "smoothedEle": 296.26066695651275,
        "gradeBand": "hard"
      },
      {
        "lat": 22.868953,
        "lng": 121.157685,
        "ele": 290.5,
        "distanceKm": 13.689056010909994,
        "gradePct": 3.8700192984559427,
        "smoothedEle": 296.8831492233983,
        "gradeBand": "hard"
      },
      {
        "lat": 22.869034,
        "lng": 121.157653,
        "ele": 292.75,
        "distanceKm": 13.698640965940783,
        "gradePct": 4.013525664054001,
        "smoothedEle": 297.5384424825646,
        "gradeBand": "hard"
      },
      {
        "lat": 22.869476,
        "lng": 121.157756,
        "ele": 299.5,
        "distanceKm": 13.748909344805368,
        "gradePct": 5.687405217173782,
        "smoothedEle": 302.56691415926036,
        "gradeBand": "hard"
      },
      {
        "lat": 22.869867,
        "lng": 121.15802,
        "ele": 307,
        "distanceKm": 13.800113471231002,
        "gradePct": 7.270682983461397,
        "smoothedEle": 307.4024723781432,
        "gradeBand": "steep"
      },
      {
        "lat": 22.870265,
        "lng": 121.158191,
        "ele": 310.25,
        "distanceKm": 13.847710726189014,
        "gradePct": 8.160130247405732,
        "smoothedEle": 311.0972443911276,
        "gradeBand": "steep"
      },
      {
        "lat": 22.870634,
        "lng": 121.15821,
        "ele": 308,
        "distanceKm": 13.888787861191439,
        "gradePct": 8.53638728522475,
        "smoothedEle": 313.9383599872824,
        "gradeBand": "steep"
      },
      {
        "lat": 22.870741,
        "lng": 121.158237,
        "ele": 308.25,
        "distanceKm": 13.901003076732863,
        "gradePct": 8.604015291254514,
        "smoothedEle": 314.9827609160742,
        "gradeBand": "steep"
      },
      {
        "lat": 22.870819,
        "lng": 121.158288,
        "ele": 309.5,
        "distanceKm": 13.911128616809409,
        "gradePct": 8.51403347800789,
        "smoothedEle": 315.81568039096993,
        "gradeBand": "steep"
      },
      {
        "lat": 22.870906,
        "lng": 121.158411,
        "ele": 312.25,
        "distanceKm": 13.92701540097044,
        "gradePct": 8.300510723959265,
        "smoothedEle": 316.9778296409277,
        "gradeBand": "steep"
      },
      {
        "lat": 22.871074,
        "lng": 121.158761,
        "ele": 322,
        "distanceKm": 13.967448202229107,
        "gradePct": 7.800645038407196,
        "smoothedEle": 319.9189561899091,
        "gradeBand": "steep"
      },
      {
        "lat": 22.871314,
        "lng": 121.159057,
        "ele": 331,
        "distanceKm": 14.00784446938221,
        "gradePct": 7.272703681979491,
        "smoothedEle": 322.5480041742089,
        "gradeBand": "steep"
      },
      {
        "lat": 22.871618,
        "lng": 121.159174,
        "ele": 333.75,
        "distanceKm": 14.043710206204178,
        "gradePct": 7.1186544972326224,
        "smoothedEle": 325.02401007189974,
        "gradeBand": "steep"
      },
      {
        "lat": 22.871993,
        "lng": 121.159206,
        "ele": 339.25,
        "distanceKm": 14.08553704665817,
        "gradePct": 7.003917583740613,
        "smoothedEle": 327.72135133666063,
        "gradeBand": "steep"
      },
      {
        "lat": 22.872383,
        "lng": 121.158924,
        "ele": 334,
        "distanceKm": 14.137645953743087,
        "gradePct": 6.450451513790734,
        "smoothedEle": 330.65201079954835,
        "gradeBand": "steep"
      },
      {
        "lat": 22.872635,
        "lng": 121.158615,
        "ele": 327,
        "distanceKm": 14.179923536783027,
        "gradePct": 6.0611239788368545,
        "smoothedEle": 332.85311711563367,
        "gradeBand": "steep"
      },
      {
        "lat": 22.872971,
        "lng": 121.158615,
        "ele": 329.25,
        "distanceKm": 14.217285083741581,
        "gradePct": 5.665239556526947,
        "smoothedEle": 334.5302199836998,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873499,
        "lng": 121.158879,
        "ele": 337.75,
        "distanceKm": 14.281926652523243,
        "gradePct": 4.38208590641564,
        "smoothedEle": 336.25269501864375,
        "gradeBand": "hard"
      },
      {
        "lat": 22.8736,
        "lng": 121.15892,
        "ele": 339.5,
        "distanceKm": 14.293917186399254,
        "gradePct": 4.1259421978568165,
        "smoothedEle": 336.4445435606599,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873669,
        "lng": 121.158914,
        "ele": 340.25,
        "distanceKm": 14.301614232294183,
        "gradePct": 3.9710736072329804,
        "smoothedEle": 336.56769629497876,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873771,
        "lng": 121.158873,
        "ele": 340.5,
        "distanceKm": 14.313708975803008,
        "gradePct": 3.7277210396716063,
        "smoothedEle": 336.76121219111997,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873848,
        "lng": 121.158809,
        "ele": 340,
        "distanceKm": 14.32449325679836,
        "gradePct": 3.4564526965167897,
        "smoothedEle": 336.82519475300654,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874174,
        "lng": 121.158514,
        "ele": 336.75,
        "distanceKm": 14.371689272563888,
        "gradePct": 2.2972536199585614,
        "smoothedEle": 337.01892219999144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874441,
        "lng": 121.15833,
        "ele": 335.5,
        "distanceKm": 14.406857428777421,
        "gradePct": 1.6179524775990388,
        "smoothedEle": 337.29804340932424,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87482,
        "lng": 121.158203,
        "ele": 339.75,
        "distanceKm": 14.450963193277579,
        "gradePct": 1.2579947250822316,
        "smoothedEle": 337.94361498872945,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875053,
        "lng": 121.158226,
        "ele": 341.75,
        "distanceKm": 14.47697858065011,
        "gradePct": 0.9504075975851015,
        "smoothedEle": 338.02166115084697,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875669,
        "lng": 121.15849,
        "ele": 341.75,
        "distanceKm": 14.550621319179253,
        "gradePct": -0.0841869228935653,
        "smoothedEle": 336.76406985053825,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876154,
        "lng": 121.158682,
        "ele": 340,
        "distanceKm": 14.608026230715959,
        "gradePct": -1.1056261546503985,
        "smoothedEle": 335.10389873486497,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876561,
        "lng": 121.158744,
        "ele": 337.25,
        "distanceKm": 14.653726203119023,
        "gradePct": -1.994834130683877,
        "smoothedEle": 333.96223575688606,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877074,
        "lng": 121.158548,
        "ele": 330.75,
        "distanceKm": 14.714200308285301,
        "gradePct": -2.6333825994321765,
        "smoothedEle": 332.1192634131689,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877617,
        "lng": 121.158586,
        "ele": 325.75,
        "distanceKm": 14.774704611973156,
        "gradePct": -2.918743255248255,
        "smoothedEle": 330.2300856711763,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878058,
        "lng": 121.158689,
        "ele": 325.25,
        "distanceKm": 14.824864138709641,
        "gradePct": -3.1990723702405264,
        "smoothedEle": 328.285114436586,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87840578494204,
        "lng": 121.15879480919894,
        "ele": 324.6252756466157,
        "distanceKm": 14.865026624700624,
        "gradePct": -3.3782856956836844,
        "smoothedEle": 326.8612795351856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878735,
        "lng": 121.158959,
        "ele": 322.75,
        "distanceKm": 14.905313385534935,
        "gradePct": -3.387864931268479,
        "smoothedEle": 325.6143660467001,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879035,
        "lng": 121.159199,
        "ele": 322.75,
        "distanceKm": 14.946754043189308,
        "gradePct": -3.2243262442436103,
        "smoothedEle": 324.65415775274437,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879356,
        "lng": 121.159491,
        "ele": 326.5,
        "distanceKm": 14.993325634584762,
        "gradePct": -2.706566905839092,
        "smoothedEle": 324.09490849715746,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879933,
        "lng": 121.159615,
        "ele": 322.25,
        "distanceKm": 15.05873072068688,
        "gradePct": -1.5444644095548539,
        "smoothedEle": 323.99555223484265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880399612246254,
        "lng": 121.15985059316354,
        "ele": 322.56682784371236,
        "distanceKm": 15.11595467370894,
        "gradePct": -0.8295385541510741,
        "smoothedEle": 323.70872303569746,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88085880612313,
        "lng": 121.16010529658176,
        "ele": 323.6584139218562,
        "distanceKm": 15.173295717546937,
        "gradePct": -0.4424173926227313,
        "smoothedEle": 323.4506005192902,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881318,
        "lng": 121.16036,
        "ele": 324.75,
        "distanceKm": 15.23063672122454,
        "gradePct": -0.8558141455581308,
        "smoothedEle": 322.3266012788757,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881474,
        "lng": 121.160438,
        "ele": 326.5,
        "distanceKm": 15.249735165599732,
        "gradePct": -1.1600063970731225,
        "smoothedEle": 321.6892045053599,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881832,
        "lng": 121.160407,
        "ele": 324,
        "distanceKm": 15.289669483226506,
        "gradePct": -1.8662638775256604,
        "smoothedEle": 320.10794710374284,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88218463912574,
        "lng": 121.16041663145113,
        "ele": 322.5,
        "distanceKm": 15.328893631315124,
        "gradePct": -2.5968412324174133,
        "smoothedEle": 318.4567954453217,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882536,
        "lng": 121.160468,
        "ele": 322.5,
        "distanceKm": 15.36831604709965,
        "gradePct": -3.5394022423255205,
        "smoothedEle": 316.3942121781326,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88289,
        "lng": 121.160398,
        "ele": 320.25,
        "distanceKm": 15.4083269842507,
        "gradePct": -4.391480063246137,
        "smoothedEle": 313.9809569613887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883399,
        "lng": 121.160089,
        "ele": 310.75,
        "distanceKm": 15.473176184040987,
        "gradePct": -5.003970425294529,
        "smoothedEle": 310.7530824283355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883725,
        "lng": 121.159803,
        "ele": 305.25,
        "distanceKm": 15.519785824304435,
        "gradePct": -5.37040745174331,
        "smoothedEle": 308.09937626572184,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884209,
        "lng": 121.159599,
        "ele": 300,
        "distanceKm": 15.577519414819493,
        "gradePct": -5.717296886268733,
        "smoothedEle": 304.4045183068977,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884519,
        "lng": 121.15952,
        "ele": 293.75,
        "distanceKm": 15.612927187307207,
        "gradePct": -5.859891952913151,
        "smoothedEle": 302.03219755022087,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884651,
        "lng": 121.159501,
        "ele": 291.75,
        "distanceKm": 15.627733432469679,
        "gradePct": -5.954188809113099,
        "smoothedEle": 301.1066217031973,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884724,
        "lng": 121.159541,
        "ele": 292.25,
        "distanceKm": 15.636826333962233,
        "gradePct": -6.0120420013085365,
        "smoothedEle": 300.53831535991264,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884913,
        "lng": 121.159804,
        "ele": 297.75,
        "distanceKm": 15.670995940252311,
        "gradePct": -6.159853404461267,
        "smoothedEle": 298.5418974427211,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885255,
        "lng": 121.160035,
        "ele": 300.75,
        "distanceKm": 15.715786330311708,
        "gradePct": -5.962890433022345,
        "smoothedEle": 296.4013054140829,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885437,
        "lng": 121.160028,
        "ele": 298.75,
        "distanceKm": 15.736036535738577,
        "gradePct": -5.708716936306437,
        "smoothedEle": 295.6419227105754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885539,
        "lng": 121.159996,
        "ele": 296.5,
        "distanceKm": 15.747842675372373,
        "gradePct": -5.50956010605187,
        "smoothedEle": 295.28466221399924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885885000000002,
        "lng": 121.1598705,
        "ele": 292.74999999999994,
        "distanceKm": 15.788407427419372,
        "gradePct": -4.587071764524142,
        "smoothedEle": 294.50087793365753,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886231,
        "lng": 121.159745,
        "ele": 289,
        "distanceKm": 15.828972169078536,
        "gradePct": -3.4759100826237113,
        "smoothedEle": 294.07738049989626,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886841,
        "lng": 121.159791,
        "ele": 291.25,
        "distanceKm": 15.896964660811062,
        "gradePct": -1.3406262040174162,
        "smoothedEle": 294.6195655051649,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8871,
        "lng": 121.159647,
        "ele": 290.75,
        "distanceKm": 15.92932235037602,
        "gradePct": -0.40782647856471643,
        "smoothedEle": 295.0780517045418,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887194,
        "lng": 121.159602,
        "ele": 290.75,
        "distanceKm": 15.940746098727043,
        "gradePct": -0.11072067834285843,
        "smoothedEle": 295.2779673006847,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887271,
        "lng": 121.159584,
        "ele": 291,
        "distanceKm": 15.949504426705314,
        "gradePct": 0.07100205754261449,
        "smoothedEle": 295.3945582917646,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887346,
        "lng": 121.15958,
        "ele": 291.5,
        "distanceKm": 15.957854118412891,
        "gradePct": 0.21131930336810073,
        "smoothedEle": 295.51386165784834,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887407,
        "lng": 121.159621,
        "ele": 292,
        "distanceKm": 15.965832109881601,
        "gradePct": 0.3475244760603017,
        "smoothedEle": 295.63212279767043,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887391,
        "lng": 121.160049,
        "ele": 295.5,
        "distanceKm": 16.009712853293138,
        "gradePct": 1.1357807844550265,
        "smoothedEle": 296.5500100524174,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88777,
        "lng": 121.160129,
        "ele": 296,
        "distanceKm": 16.052645232396078,
        "gradePct": 1.8345527076423376,
        "smoothedEle": 297.9352594052015,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88813,
        "lng": 121.160368,
        "ele": 297.5,
        "distanceKm": 16.099569094421522,
        "gradePct": 2.5943581547319448,
        "smoothedEle": 299.8451848470654,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888369,
        "lng": 121.160693,
        "ele": 300.25,
        "distanceKm": 16.142168285022596,
        "gradePct": 3.0839263653428586,
        "smoothedEle": 301.46475219628934,
        "gradeBand": "hard"
      },
      {
        "lat": 22.888708,
        "lng": 121.160793,
        "ele": 306.5,
        "distanceKm": 16.18123057376244,
        "gradePct": 3.3444826720482697,
        "smoothedEle": 302.64318965236237,
        "gradeBand": "hard"
      },
      {
        "lat": 22.888934011355314,
        "lng": 121.16049886214685,
        "ele": 308.1617113490132,
        "distanceKm": 16.220466859405697,
        "gradePct": 3.3265946075274373,
        "smoothedEle": 303.55018632755434,
        "gradeBand": "hard"
      },
      {
        "lat": 22.889141,
        "lng": 121.160186,
        "ele": 309.5,
        "distanceKm": 16.259924554448425,
        "gradePct": 2.9403783851406433,
        "smoothedEle": 304.11230385913,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88922,
        "lng": 121.159755,
        "ele": 309.75,
        "distanceKm": 16.304941355919077,
        "gradePct": 2.41724982884879,
        "smoothedEle": 304.88393109231936,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889212,
        "lng": 121.159193,
        "ele": 310,
        "distanceKm": 16.362519186106002,
        "gradePct": 2.177875100536945,
        "smoothedEle": 306.43445167875956,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889228,
        "lng": 121.158721,
        "ele": 306.5,
        "distanceKm": 16.41090331517604,
        "gradePct": 2.2287917031772304,
        "smoothedEle": 307.78669623836396,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889247,
        "lng": 121.158568,
        "ele": 305.25,
        "distanceKm": 16.426718297419843,
        "gradePct": 2.233073579886317,
        "smoothedEle": 308.1053919815321,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889308,
        "lng": 121.158399,
        "ele": 303.5,
        "distanceKm": 16.44531189620947,
        "gradePct": 2.342347404122799,
        "smoothedEle": 308.5888255500624,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88938,
        "lng": 121.158308,
        "ele": 302,
        "distanceKm": 16.457599941736987,
        "gradePct": 2.403345160709202,
        "smoothedEle": 308.88587755886516,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889514,
        "lng": 121.158262,
        "ele": 300.5,
        "distanceKm": 16.473227451976648,
        "gradePct": 2.449964439784176,
        "smoothedEle": 309.2402560028522,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889796,
        "lng": 121.15844,
        "ele": 301.75,
        "distanceKm": 16.50950067621878,
        "gradePct": 2.517458398669712,
        "smoothedEle": 310.0416263959331,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890051,
        "lng": 121.158976,
        "ele": 309.75,
        "distanceKm": 16.57129709463429,
        "gradePct": 2.3974417527455305,
        "smoothedEle": 311.4746610644561,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890283,
        "lng": 121.159259,
        "ele": 311.5,
        "distanceKm": 16.610103377925558,
        "gradePct": 2.4678370997665495,
        "smoothedEle": 312.7000137102721,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890332,
        "lng": 121.15934,
        "ele": 312,
        "distanceKm": 16.620029895260817,
        "gradePct": 2.5494779518776998,
        "smoothedEle": 313.0695664948428,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890356,
        "lng": 121.15949,
        "ele": 313.5,
        "distanceKm": 16.6356257040992,
        "gradePct": 2.6626113377530016,
        "smoothedEle": 313.66220723070137,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890335,
        "lng": 121.159667,
        "ele": 315.75,
        "distanceKm": 16.653907077110954,
        "gradePct": 2.840332090163098,
        "smoothedEle": 314.4772701904375,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890181,
        "lng": 121.160034,
        "ele": 319.5,
        "distanceKm": 16.69521827934159,
        "gradePct": 3.5054309584706527,
        "smoothedEle": 316.73695281144745,
        "gradeBand": "hard"
      },
      {
        "lat": 22.889819,
        "lng": 121.160564,
        "ele": 320,
        "distanceKm": 16.762804948728213,
        "gradePct": 5.024496011038327,
        "smoothedEle": 321.32672355880936,
        "gradeBand": "hard"
      },
      {
        "lat": 22.88969,
        "lng": 121.160967,
        "ele": 321.75,
        "distanceKm": 16.80650889594941,
        "gradePct": 5.8797130555382955,
        "smoothedEle": 324.3459399541557,
        "gradeBand": "hard"
      },
      {
        "lat": 22.8897,
        "lng": 121.161126,
        "ele": 323.75,
        "distanceKm": 16.82283461907499,
        "gradePct": 6.082831532517382,
        "smoothedEle": 325.34180906481606,
        "gradeBand": "steep"
      },
      {
        "lat": 22.889754,
        "lng": 121.161212,
        "ele": 325.25,
        "distanceKm": 16.833496057104256,
        "gradePct": 6.236206327045061,
        "smoothedEle": 326.05369329898355,
        "gradeBand": "steep"
      },
      {
        "lat": 22.889824,
        "lng": 121.16124,
        "ele": 326.5,
        "distanceKm": 16.841791380659515,
        "gradePct": 6.3425758824477265,
        "smoothedEle": 326.6222516189678,
        "gradeBand": "steep"
      },
      {
        "lat": 22.890176,
        "lng": 121.161176,
        "ele": 329,
        "distanceKm": 16.88147732485927,
        "gradePct": 6.6044928736300745,
        "smoothedEle": 329.19432170024777,
        "gradeBand": "steep"
      },
      {
        "lat": 22.890704,
        "lng": 121.161309,
        "ele": 333.5,
        "distanceKm": 16.941748411784353,
        "gradePct": 6.282206150453043,
        "smoothedEle": 332.4611988886712,
        "gradeBand": "steep"
      },
      {
        "lat": 22.891304,
        "lng": 121.161393,
        "ele": 337,
        "distanceKm": 17.00901807114021,
        "gradePct": 5.315072493372118,
        "smoothedEle": 335.12914462753884,
        "gradeBand": "hard"
      },
      {
        "lat": 22.891568,
        "lng": 121.161574,
        "ele": 340.25,
        "distanceKm": 17.04373871010688,
        "gradePct": 4.74646961064052,
        "smoothedEle": 336.24139844122595,
        "gradeBand": "hard"
      },
      {
        "lat": 22.891866,
        "lng": 121.16211,
        "ele": 344.25,
        "distanceKm": 17.10786927550609,
        "gradePct": 3.412695202406366,
        "smoothedEle": 337.4502365227347,
        "gradeBand": "hard"
      },
      {
        "lat": 22.892345,
        "lng": 121.162527,
        "ele": 343.25,
        "distanceKm": 17.17614498758565,
        "gradePct": 2.1686443175361565,
        "smoothedEle": 338.1626715960198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892655,
        "lng": 121.162592,
        "ele": 340.5,
        "distanceKm": 17.211252649856743,
        "gradePct": 1.621264428694252,
        "smoothedEle": 338.4432568075106,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89303,
        "lng": 121.16264666666667,
        "ele": 337.9166666666666,
        "distanceKm": 17.253325143342742,
        "gradePct": 1.0284814751546243,
        "smoothedEle": 338.4790622085203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893405,
        "lng": 121.16270133333333,
        "ele": 335.3333333333334,
        "distanceKm": 17.295397634768978,
        "gradePct": 0.47633093423542217,
        "smoothedEle": 338.16781245101356,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89378,
        "lng": 121.162756,
        "ele": 332.75,
        "distanceKm": 17.33747012413503,
        "gradePct": -0.0892490039498742,
        "smoothedEle": 337.58061383989474,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893888,
        "lng": 121.162816,
        "ele": 332.5,
        "distanceKm": 17.35096060112422,
        "gradePct": -0.29116554656715826,
        "smoothedEle": 337.31754953860553,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893991,
        "lng": 121.162924,
        "ele": 332.75,
        "distanceKm": 17.36688432336238,
        "gradePct": -0.5305886768619549,
        "smoothedEle": 337.0048621927189,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89403,
        "lng": 121.163079,
        "ele": 334.25,
        "distanceKm": 17.383343447581982,
        "gradePct": -0.7722614794848283,
        "smoothedEle": 336.67567970832687,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894107,
        "lng": 121.16346,
        "ele": 337.75,
        "distanceKm": 17.42329961135373,
        "gradePct": -1.2064842246270515,
        "smoothedEle": 336.0405408118576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894571,
        "lng": 121.16383,
        "ele": 336.25,
        "distanceKm": 17.487319076484084,
        "gradePct": -1.196090137722426,
        "smoothedEle": 335.8353968631814,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894995,
        "lng": 121.164085,
        "ele": 334.25,
        "distanceKm": 17.541218226342853,
        "gradePct": -0.6056757513153194,
        "smoothedEle": 336.2961743442116,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89543,
        "lng": 121.16412,
        "ele": 334.5,
        "distanceKm": 17.58972077431854,
        "gradePct": 0.37915158940282506,
        "smoothedEle": 337.33260958490513,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895839,
        "lng": 121.164084,
        "ele": 334.25,
        "distanceKm": 17.635348823436455,
        "gradePct": 1.3713137979725096,
        "smoothedEle": 338.74455791738296,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896339,
        "lng": 121.1641,
        "ele": 339.25,
        "distanceKm": 17.690970515401027,
        "gradePct": 2.3071374872883235,
        "smoothedEle": 340.48088755879803,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896853,
        "lng": 121.163928,
        "ele": 340.5,
        "distanceKm": 17.75077876401915,
        "gradePct": 3.1844865486693665,
        "smoothedEle": 342.8694434750836,
        "gradeBand": "hard"
      },
      {
        "lat": 22.897269,
        "lng": 121.163924,
        "ele": 343.25,
        "distanceKm": 17.79703773202035,
        "gradePct": 3.8504856504658416,
        "smoothedEle": 345.2600022741189,
        "gradeBand": "hard"
      },
      {
        "lat": 22.897608,
        "lng": 121.164048,
        "ele": 346.5,
        "distanceKm": 17.836815321970125,
        "gradePct": 4.502378926629023,
        "smoothedEle": 347.7950951200848,
        "gradeBand": "hard"
      },
      {
        "lat": 22.897857,
        "lng": 121.164286,
        "ele": 349.5,
        "distanceKm": 17.873706242962424,
        "gradePct": 5.224468467050817,
        "smoothedEle": 350.39088964726955,
        "gradeBand": "hard"
      },
      {
        "lat": 22.898123000000002,
        "lng": 121.1645615,
        "ele": 352.3750000000001,
        "distanceKm": 17.914586965122567,
        "gradePct": 6.04863519152061,
        "smoothedEle": 353.52132568219923,
        "gradeBand": "steep"
      },
      {
        "lat": 22.898389,
        "lng": 121.164837,
        "ele": 355.25,
        "distanceKm": 17.95546764908251,
        "gradePct": 6.788912121591519,
        "smoothedEle": 356.6895786890949,
        "gradeBand": "steep"
      },
      {
        "lat": 22.898768529724016,
        "lng": 121.16523896662652,
        "ele": 360.26736051375497,
        "distanceKm": 18.014428021308717,
        "gradePct": 7.525630453397126,
        "smoothedEle": 361.4195756256812,
        "gradeBand": "steep"
      },
      {
        "lat": 22.899148,
        "lng": 121.165641,
        "ele": 366.25,
        "distanceKm": 18.07338835696631,
        "gradePct": 8.247236987698217,
        "smoothedEle": 366.8629958772481,
        "gradeBand": "steep"
      },
      {
        "lat": 22.89947091982703,
        "lng": 121.16607957131401,
        "ele": 371.99222800988605,
        "distanceKm": 18.130898826078717,
        "gradePct": 8.877331757171735,
        "smoothedEle": 372.54015842064433,
        "gradeBand": "steep"
      },
      {
        "lat": 22.899777,
        "lng": 121.166533,
        "ele": 378,
        "distanceKm": 18.188479473088712,
        "gradePct": 9.597722689439228,
        "smoothedEle": 378.5333422607655,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.900054,
        "lng": 121.166965,
        "ele": 380.75,
        "distanceKm": 18.24239419023716,
        "gradePct": 10.029710068515904,
        "smoothedEle": 384.0609283213725,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.900569,
        "lng": 121.167229,
        "ele": 391,
        "distanceKm": 18.305723428558977,
        "gradePct": 9.962205059615549,
        "smoothedEle": 389.9793719135913,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.9009495,
        "lng": 121.1674075,
        "ele": 397.1249999999998,
        "distanceKm": 18.35181478814221,
        "gradePct": 9.748804665853875,
        "smoothedEle": 394.2147701368122,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.90133,
        "lng": 121.167586,
        "ele": 403.25,
        "distanceKm": 18.39790612737897,
        "gradePct": 9.391976238795314,
        "smoothedEle": 398.28375891750636,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.901881,
        "lng": 121.16772,
        "ele": 407.5,
        "distanceKm": 18.460693233390707,
        "gradePct": 9.18438836435229,
        "smoothedEle": 404.13984490910224,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.902161,
        "lng": 121.167774,
        "ele": 406.5,
        "distanceKm": 18.492315361191572,
        "gradePct": 9.212744681581487,
        "smoothedEle": 407.1518083031593,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.902373,
        "lng": 121.167952,
        "ele": 407.75,
        "distanceKm": 18.522116802500022,
        "gradePct": 9.293458735831624,
        "smoothedEle": 410.0726989919644,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.90263,
        "lng": 121.168249,
        "ele": 411,
        "distanceKm": 18.56385553994153,
        "gradePct": 9.149868125624042,
        "smoothedEle": 413.57747580474165,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.902823,
        "lng": 121.168569,
        "ele": 414,
        "distanceKm": 18.60303352283571,
        "gradePct": 9.086221406472934,
        "smoothedEle": 416.93442840173674,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.902867,
        "lng": 121.168727,
        "ele": 415.75,
        "distanceKm": 18.619940706850784,
        "gradePct": 9.056473835404805,
        "smoothedEle": 418.4518481670897,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.902802,
        "lng": 121.169161,
        "ele": 421.75,
        "distanceKm": 18.664978686222952,
        "gradePct": 8.756159906124966,
        "smoothedEle": 422.0603481029059,
        "gradeBand": "steep"
      },
      {
        "lat": 22.902673,
        "lng": 121.169388,
        "ele": 424.5,
        "distanceKm": 18.692298718957375,
        "gradePct": 8.50483461540094,
        "smoothedEle": 424.15989238445724,
        "gradeBand": "steep"
      },
      {
        "lat": 22.90256,
        "lng": 121.169461,
        "ele": 426.5,
        "distanceKm": 18.70692031050164,
        "gradePct": 8.350659605997066,
        "smoothedEle": 425.28458379972426,
        "gradeBand": "steep"
      },
      {
        "lat": 22.90224,
        "lng": 121.169566,
        "ele": 429.25,
        "distanceKm": 18.7440926265067,
        "gradePct": 8.267549423894877,
        "smoothedEle": 428.45309463456516,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901854,
        "lng": 121.16966,
        "ele": 431.75,
        "distanceKm": 18.788080625739227,
        "gradePct": 8.449141433976822,
        "smoothedEle": 432.55147719298407,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901591,
        "lng": 121.169842,
        "ele": 435.5,
        "distanceKm": 18.822761502174696,
        "gradePct": 8.549665229894204,
        "smoothedEle": 435.77718432001046,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901669,
        "lng": 121.170171,
        "ele": 442,
        "distanceKm": 18.857559205518864,
        "gradePct": 8.810353994707445,
        "smoothedEle": 439.0865979035275,
        "gradeBand": "steep"
      },
      {
        "lat": 22.902094,
        "lng": 121.170483,
        "ele": 443,
        "distanceKm": 18.914608581098946,
        "gradePct": 9.330563197793941,
        "smoothedEle": 444.60104651294796,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.90216,
        "lng": 121.170558,
        "ele": 443.25,
        "distanceKm": 18.925232878038244,
        "gradePct": 9.390386189715093,
        "smoothedEle": 445.6262911675901,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.902193,
        "lng": 121.170712,
        "ele": 444.75,
        "distanceKm": 18.941428218318542,
        "gradePct": 9.45327022702188,
        "smoothedEle": 447.1325250475917,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.902179,
        "lng": 121.170775,
        "ele": 445.75,
        "distanceKm": 18.94806640217495,
        "gradePct": 9.459952390765642,
        "smoothedEle": 447.7432379623811,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.902086,
        "lng": 121.170838,
        "ele": 447.75,
        "distanceKm": 18.960255796473625,
        "gradePct": 9.431416254599332,
        "smoothedEle": 448.8218572846425,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.901698,
        "lng": 121.170849,
        "ele": 453.5,
        "distanceKm": 19.003414197756708,
        "gradePct": 9.211948299659785,
        "smoothedEle": 452.4015664847402,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.901461,
        "lng": 121.170959,
        "ele": 454.5,
        "distanceKm": 19.032075063426873,
        "gradePct": 9.004274325384419,
        "smoothedEle": 454.6714933272609,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.901253500000003,
        "lng": 121.17129,
        "ele": 458.875,
        "distanceKm": 19.07308569372012,
        "gradePct": 8.76366973128572,
        "smoothedEle": 458.1147429472295,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901046,
        "lng": 121.171621,
        "ele": 463.25,
        "distanceKm": 19.114096366896025,
        "gradePct": 8.450398075876054,
        "smoothedEle": 461.45233153735984,
        "gradeBand": "steep"
      },
      {
        "lat": 22.900915,
        "lng": 121.171929,
        "ele": 468,
        "distanceKm": 19.14884545594643,
        "gradePct": 8.303310519487212,
        "smoothedEle": 464.41879617989036,
        "gradeBand": "steep"
      },
      {
        "lat": 22.900919,
        "lng": 121.172017,
        "ele": 469.25,
        "distanceKm": 19.157870315011053,
        "gradePct": 8.325925261655073,
        "smoothedEle": 465.26262050243275,
        "gradeBand": "steep"
      },
      {
        "lat": 22.90095,
        "lng": 121.172091,
        "ele": 470,
        "distanceKm": 19.166197166609198,
        "gradePct": 8.363262880560173,
        "smoothedEle": 466.0411811268593,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901114,
        "lng": 121.172228,
        "ele": 470.5,
        "distanceKm": 19.18920751111028,
        "gradePct": 8.479701135795212,
        "smoothedEle": 468.1826163294751,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901438,
        "lng": 121.172435,
        "ele": 469.75,
        "distanceKm": 19.231010980183164,
        "gradePct": 8.681712094631056,
        "smoothedEle": 471.9506426329459,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901488,
        "lng": 121.172514,
        "ele": 469.75,
        "distanceKm": 19.240828875761743,
        "gradePct": 8.603273045818755,
        "smoothedEle": 472.61300888363934,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901491,
        "lng": 121.172766,
        "ele": 470.25,
        "distanceKm": 19.26664343157834,
        "gradePct": 8.375895329922118,
        "smoothedEle": 474.32564173311806,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901232999999998,
        "lng": 121.173238,
        "ele": 477.6250000000002,
        "distanceKm": 19.322861405270398,
        "gradePct": 7.86191113672885,
        "smoothedEle": 477.92440871874584,
        "gradeBand": "steep"
      },
      {
        "lat": 22.900975,
        "lng": 121.17371,
        "ele": 485,
        "distanceKm": 19.37907945805377,
        "gradePct": 7.062543348494782,
        "smoothedEle": 481.36514567587176,
        "gradeBand": "steep"
      },
      {
        "lat": 22.900867,
        "lng": 121.17407,
        "ele": 489.75,
        "distanceKm": 19.417860693950516,
        "gradePct": 6.287624370902159,
        "smoothedEle": 483.34056811039636,
        "gradeBand": "steep"
      },
      {
        "lat": 22.901002,
        "lng": 121.174379,
        "ele": 492,
        "distanceKm": 19.452891096567274,
        "gradePct": 5.832844092704696,
        "smoothedEle": 485.0789492886099,
        "gradeBand": "hard"
      },
      {
        "lat": 22.901467,
        "lng": 121.174583,
        "ele": 486.75,
        "distanceKm": 19.50865949987362,
        "gradePct": 5.437714271623113,
        "smoothedEle": 487.8907090078345,
        "gradeBand": "hard"
      },
      {
        "lat": 22.901524,
        "lng": 121.174629,
        "ele": 486.25,
        "distanceKm": 19.516557138632855,
        "gradePct": 5.372501388004271,
        "smoothedEle": 488.26584684889826,
        "gradeBand": "hard"
      },
      {
        "lat": 22.901567,
        "lng": 121.17471,
        "ele": 486.5,
        "distanceKm": 19.526133109709487,
        "gradePct": 5.298028631738892,
        "smoothedEle": 488.72070547503824,
        "gradeBand": "hard"
      },
      {
        "lat": 22.901587,
        "lng": 121.174823,
        "ele": 487.5,
        "distanceKm": 19.53791942033771,
        "gradePct": 5.210515550800939,
        "smoothedEle": 489.26704180365897,
        "gradeBand": "hard"
      },
      {
        "lat": 22.901585,
        "lng": 121.175283,
        "ele": 491.75,
        "distanceKm": 19.58503778533016,
        "gradePct": 4.5740348905139445,
        "smoothedEle": 490.8167182489551,
        "gradeBand": "hard"
      },
      {
        "lat": 22.901661,
        "lng": 121.175706,
        "ele": 493,
        "distanceKm": 19.629182147262103,
        "gradePct": 3.7073283296229667,
        "smoothedEle": 491.3170510655659,
        "gradeBand": "hard"
      },
      {
        "lat": 22.901802532622302,
        "lng": 121.17605348879194,
        "ele": 494.5254842210258,
        "distanceKm": 19.66809945687831,
        "gradePct": 2.70555672711627,
        "smoothedEle": 491.2568455872987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902006,
        "lng": 121.176362,
        "ele": 496,
        "distanceKm": 19.706964338189586,
        "gradePct": 1.7083958469536702,
        "smoothedEle": 491.22203317787256,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90174,
        "lng": 121.17593,
        "ele": 494,
        "distanceKm": 19.760189219289764,
        "gradePct": 0.6803794749766634,
        "smoothedEle": 491.3602324261249,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901614,
        "lng": 121.175544,
        "ele": 493,
        "distanceKm": 19.802136195165858,
        "gradePct": 0.138678872901068,
        "smoothedEle": 491.28786961138826,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901587,
        "lng": 121.174823,
        "ele": 487.5,
        "distanceKm": 19.876049279777234,
        "gradePct": -0.9624298512359849,
        "smoothedEle": 489.3248649962434,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901567,
        "lng": 121.17471,
        "ele": 486.5,
        "distanceKm": 19.887835590405455,
        "gradePct": -1.2252897466752062,
        "smoothedEle": 488.7885878626594,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901524,
        "lng": 121.174629,
        "ele": 486.25,
        "distanceKm": 19.897411561482087,
        "gradePct": -1.4388543501658029,
        "smoothedEle": 488.35288117867265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901467,
        "lng": 121.174583,
        "ele": 486.75,
        "distanceKm": 19.905309200241323,
        "gradePct": -1.6251610952653892,
        "smoothedEle": 487.97319354274833,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901177,
        "lng": 121.174489,
        "ele": 490.75,
        "distanceKm": 19.938962557847837,
        "gradePct": -2.498819221693404,
        "smoothedEle": 486.30747861951806,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901002,
        "lng": 121.174379,
        "ele": 492,
        "distanceKm": 19.961448359755554,
        "gradePct": -3.110704391788698,
        "smoothedEle": 485.1366514967289,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900889,
        "lng": 121.174171,
        "ele": 490,
        "distanceKm": 19.986183095800254,
        "gradePct": -3.7148925546838845,
        "smoothedEle": 483.88560522669155,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900867,
        "lng": 121.17407,
        "ele": 489.75,
        "distanceKm": 19.996813879645995,
        "gradePct": -3.960251513812707,
        "smoothedEle": 483.3765481212609,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900891,
        "lng": 121.173899,
        "ele": 488,
        "distanceKm": 20.014531649707965,
        "gradePct": -4.228360286233838,
        "smoothedEle": 482.50194704984233,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900975,
        "lng": 121.17371,
        "ele": 485,
        "distanceKm": 20.036026495771193,
        "gradePct": -4.5237161926628335,
        "smoothedEle": 481.34036903317485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901232999999998,
        "lng": 121.173238,
        "ele": 477.6250000000002,
        "distanceKm": 20.092244548554564,
        "gradePct": -5.344577744183245,
        "smoothedEle": 477.89882477850847,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901491,
        "lng": 121.172766,
        "ele": 470.25,
        "distanceKm": 20.14846252224662,
        "gradePct": -5.708351788065207,
        "smoothedEle": 474.396115523159,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901488,
        "lng": 121.172514,
        "ele": 469.75,
        "distanceKm": 20.17427707806322,
        "gradePct": -5.907260683257156,
        "smoothedEle": 472.6732725819003,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901438,
        "lng": 121.172435,
        "ele": 469.75,
        "distanceKm": 20.1840949736418,
        "gradePct": -6.053835778196593,
        "smoothedEle": 471.88354779259976,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901114,
        "lng": 121.172228,
        "ele": 470.5,
        "distanceKm": 20.225898442714684,
        "gradePct": -6.827885008952701,
        "smoothedEle": 468.23191736998007,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90095,
        "lng": 121.172091,
        "ele": 470,
        "distanceKm": 20.248908787215765,
        "gradePct": -7.223775229418007,
        "smoothedEle": 466.10419332118676,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900919,
        "lng": 121.172017,
        "ele": 469.25,
        "distanceKm": 20.25723563881391,
        "gradePct": -7.353363124202386,
        "smoothedEle": 465.3352661820385,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900915,
        "lng": 121.171929,
        "ele": 468,
        "distanceKm": 20.266260497878534,
        "gradePct": -7.480984659617432,
        "smoothedEle": 464.52754129575465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90097,
        "lng": 121.171726,
        "ele": 465,
        "distanceKm": 20.287934627508392,
        "gradePct": -7.76402638396118,
        "smoothedEle": 462.63461579883824,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90121889668054,
        "lng": 121.17134519854815,
        "ele": 459.60458806094226,
        "distanceKm": 20.335761480220942,
        "gradePct": -8.230705289466359,
        "smoothedEle": 458.726054303412,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901461,
        "lng": 121.170959,
        "ele": 454.5,
        "distanceKm": 20.38361116982526,
        "gradePct": -8.5940469886354,
        "smoothedEle": 454.7343696770856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901596,
        "lng": 121.170881,
        "ele": 454,
        "distanceKm": 20.400616260704975,
        "gradePct": -8.50769859743116,
        "smoothedEle": 453.4249776793477,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901698,
        "lng": 121.170849,
        "ele": 453.5,
        "distanceKm": 20.412422291946402,
        "gradePct": -8.474142868795157,
        "smoothedEle": 452.4608048004698,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901913,
        "lng": 121.170855,
        "ele": 450.5,
        "distanceKm": 20.436337132438375,
        "gradePct": -8.371484147049104,
        "smoothedEle": 450.52370272061995,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902086,
        "lng": 121.170838,
        "ele": 447.75,
        "distanceKm": 20.4556525318566,
        "gradePct": -8.299818019713827,
        "smoothedEle": 448.88181911803593,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902179,
        "lng": 121.170775,
        "ele": 445.75,
        "distanceKm": 20.467841926155277,
        "gradePct": -8.290486289089301,
        "smoothedEle": 447.8084535564271,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902193,
        "lng": 121.170712,
        "ele": 444.75,
        "distanceKm": 20.474480110011683,
        "gradePct": -8.305967496829199,
        "smoothedEle": 447.1977406416377,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90216,
        "lng": 121.170558,
        "ele": 443.25,
        "distanceKm": 20.49067545029198,
        "gradePct": -8.355395892099637,
        "smoothedEle": 445.69983531811926,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901753,
        "lng": 121.170239,
        "ele": 442.5,
        "distanceKm": 20.54649483984873,
        "gradePct": -8.75457408654478,
        "smoothedEle": 440.3215150218458,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901669,
        "lng": 121.170171,
        "ele": 442,
        "distanceKm": 20.558146337005702,
        "gradePct": -8.842418641540153,
        "smoothedEle": 439.17384255188415,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901617,
        "lng": 121.170084,
        "ele": 440.25,
        "distanceKm": 20.56876925976998,
        "gradePct": -8.895806491821904,
        "smoothedEle": 438.18088853260093,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901585,
        "lng": 121.169897,
        "ele": 436.75,
        "distanceKm": 20.588251381241538,
        "gradePct": -9.010919208818795,
        "smoothedEle": 436.3552349803948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901591,
        "lng": 121.169842,
        "ele": 435.5,
        "distanceKm": 20.593924403536345,
        "gradePct": -9.05831497315248,
        "smoothedEle": 435.82362073502725,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901638,
        "lng": 121.169778,
        "ele": 434.5,
        "distanceKm": 20.602308181784743,
        "gradePct": -9.124409192093456,
        "smoothedEle": 435.0379837825813,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901854,
        "lng": 121.16966,
        "ele": 431.75,
        "distanceKm": 20.62919609931422,
        "gradePct": -9.272570986953784,
        "smoothedEle": 432.5569844297689,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90224,
        "lng": 121.169566,
        "ele": 429.25,
        "distanceKm": 20.67318409854675,
        "gradePct": -9.407655815272339,
        "smoothedEle": 428.50166206586704,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90256,
        "lng": 121.169461,
        "ele": 426.5,
        "distanceKm": 20.710356414551807,
        "gradePct": -9.237667662359659,
        "smoothedEle": 425.3281960321887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902673,
        "lng": 121.169388,
        "ele": 424.5,
        "distanceKm": 20.724978006096073,
        "gradePct": -9.085460648643679,
        "smoothedEle": 424.22378772761726,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902802,
        "lng": 121.169161,
        "ele": 421.75,
        "distanceKm": 20.752298038830496,
        "gradePct": -8.730656904050765,
        "smoothedEle": 422.2885861140404,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902867,
        "lng": 121.168727,
        "ele": 415.75,
        "distanceKm": 20.797336018202664,
        "gradePct": -8.413129951718817,
        "smoothedEle": 418.67766123196355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902734,
        "lng": 121.168409,
        "ele": 412.75,
        "distanceKm": 20.833108621020518,
        "gradePct": -8.331600775554278,
        "smoothedEle": 415.5330813907176,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902497,
        "lng": 121.16808,
        "ele": 409.5,
        "distanceKm": 20.875888662122343,
        "gradePct": -8.187028058547838,
        "smoothedEle": 411.89671259679665,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90223,
        "lng": 121.167842,
        "ele": 407,
        "distanceKm": 20.914304017297383,
        "gradePct": -8.314489676567748,
        "smoothedEle": 408.40104358058005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902161,
        "lng": 121.167774,
        "ele": 406.5,
        "distanceKm": 20.924666491210925,
        "gradePct": -8.39462941694788,
        "smoothedEle": 407.4580584544478,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90199,
        "lng": 121.167727,
        "ele": 407,
        "distanceKm": 20.94428083105866,
        "gradePct": -8.690509949293189,
        "smoothedEle": 405.47546134088304,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901633,
        "lng": 121.167676,
        "ele": 408.25,
        "distanceKm": 20.984319723613115,
        "gradePct": -9.14694082282316,
        "smoothedEle": 401.4273624170978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901268575801566,
        "lng": 121.16755718470586,
        "ele": 402.2612399069229,
        "distanceKm": 21.026630035070124,
        "gradePct": -9.55279065460059,
        "smoothedEle": 396.99699822184243,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900918787900782,
        "lng": 121.16739309235294,
        "ele": 396.63061995346146,
        "distanceKm": 21.069001109071078,
        "gradePct": -9.935746561439608,
        "smoothedEle": 392.6106719965665,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900569,
        "lng": 121.167229,
        "ele": 391,
        "distanceKm": 21.111372200267514,
        "gradePct": -10.267388588648354,
        "smoothedEle": 388.133051960929,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900178,
        "lng": 121.167068,
        "ele": 383.75,
        "distanceKm": 21.15787208794307,
        "gradePct": -10.370193118085504,
        "smoothedEle": 383.36094238383725,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89995,
        "lng": 121.166818,
        "ele": 378,
        "distanceKm": 21.193906905092078,
        "gradePct": -10.320233505815546,
        "smoothedEle": 379.78300996725693,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899739561349808,
        "lng": 121.16647753819795,
        "ele": 372.0524308577154,
        "distanceKm": 21.235903838568895,
        "gradePct": -10.337513730520904,
        "smoothedEle": 375.3619307227832,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899516280674902,
        "lng": 121.16614676909899,
        "ele": 366.4012154288577,
        "distanceKm": 21.277908014653065,
        "gradePct": -10.379806756569486,
        "smoothedEle": 370.9098096799794,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899293,
        "lng": 121.165816,
        "ele": 360.75,
        "distanceKm": 21.31991223572493,
        "gradePct": -10.288544751584858,
        "smoothedEle": 366.67953055582865,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898998467701638,
        "lng": 121.165482576592,
        "ele": 357.5,
        "distanceKm": 21.36723072396926,
        "gradePct": -10.150430443300488,
        "smoothedEle": 362.1308533267526,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898693763574837,
        "lng": 121.16515975492253,
        "ele": 357.5,
        "distanceKm": 21.414574260407914,
        "gradePct": -9.839754724651705,
        "smoothedEle": 357.92781748444236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898389,
        "lng": 121.164837,
        "ele": 355.25,
        "distanceKm": 21.461917805016633,
        "gradePct": -9.198120259458111,
        "smoothedEle": 354.20840894695846,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898123000000002,
        "lng": 121.1645615,
        "ele": 352.3750000000001,
        "distanceKm": 21.502798488976577,
        "gradePct": -8.469864446358374,
        "smoothedEle": 351.46334095888176,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897857,
        "lng": 121.164286,
        "ele": 349.5,
        "distanceKm": 21.54367921113672,
        "gradePct": -7.772663820971217,
        "smoothedEle": 348.84950820214067,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897608,
        "lng": 121.164048,
        "ele": 346.5,
        "distanceKm": 21.58057013212902,
        "gradePct": -7.043258037716779,
        "smoothedEle": 346.8600993420256,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897269,
        "lng": 121.163924,
        "ele": 343.25,
        "distanceKm": 21.620347722078794,
        "gradePct": -6.268826007504851,
        "smoothedEle": 344.9365901656192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896853,
        "lng": 121.163928,
        "ele": 340.5,
        "distanceKm": 21.666606690079995,
        "gradePct": -5.526963739269027,
        "smoothedEle": 342.83963085829316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896339,
        "lng": 121.1641,
        "ele": 339.25,
        "distanceKm": 21.726414938698117,
        "gradePct": -4.709533345711651,
        "smoothedEle": 340.53428504470753,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895923,
        "lng": 121.164085,
        "ele": 335,
        "distanceKm": 21.77269760403923,
        "gradePct": -4.097406692218115,
        "smoothedEle": 339.0898261076333,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89543,
        "lng": 121.16412,
        "ele": 334.5,
        "distanceKm": 21.827633890992463,
        "gradePct": -3.606925276214737,
        "smoothedEle": 337.3924512306674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894995,
        "lng": 121.164085,
        "ele": 334.25,
        "distanceKm": 21.87613643896815,
        "gradePct": -3.059768025139089,
        "smoothedEle": 336.3527647622197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894571,
        "lng": 121.16383,
        "ele": 336.25,
        "distanceKm": 21.930035588826918,
        "gradePct": -2.266259757502561,
        "smoothedEle": 335.8887668422236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894193,
        "lng": 121.163573,
        "ele": 337.75,
        "distanceKm": 21.979631171403796,
        "gradePct": -1.4517274510827514,
        "smoothedEle": 335.9721437120374,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894107,
        "lng": 121.16346,
        "ele": 337.75,
        "distanceKm": 21.994645589563298,
        "gradePct": -1.1597183890297669,
        "smoothedEle": 336.09225905731347,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89403,
        "lng": 121.163079,
        "ele": 334.25,
        "distanceKm": 22.034601753335046,
        "gradePct": -0.24969984760670716,
        "smoothedEle": 336.7436904710575,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893991,
        "lng": 121.162924,
        "ele": 332.75,
        "distanceKm": 22.051060877554647,
        "gradePct": 0.07940110896680636,
        "smoothedEle": 337.0490793991589,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893888,
        "lng": 121.162816,
        "ele": 332.5,
        "distanceKm": 22.066984599792807,
        "gradePct": 0.4053255329727122,
        "smoothedEle": 337.35959198280307,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89378,
        "lng": 121.162756,
        "ele": 332.75,
        "distanceKm": 22.080475076781998,
        "gradePct": 0.6448072101504203,
        "smoothedEle": 337.6050294483129,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893405,
        "lng": 121.16270133333333,
        "ele": 335.3333333333334,
        "distanceKm": 22.12254756614805,
        "gradePct": 1.1676460042634786,
        "smoothedEle": 338.28852047875364,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89303,
        "lng": 121.16264666666667,
        "ele": 337.9166666666666,
        "distanceKm": 22.164620057574286,
        "gradePct": 1.319968741356239,
        "smoothedEle": 338.5868454858723,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892655,
        "lng": 121.162592,
        "ele": 340.5,
        "distanceKm": 22.206692551060286,
        "gradePct": 1.123116781299164,
        "smoothedEle": 338.53490209515905,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892345,
        "lng": 121.162527,
        "ele": 343.25,
        "distanceKm": 22.241800213331377,
        "gradePct": 0.6795550495359091,
        "smoothedEle": 338.23636356855684,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891967,
        "lng": 121.162233,
        "ele": 344.25,
        "distanceKm": 22.293507786482838,
        "gradePct": -0.07063508320234771,
        "smoothedEle": 337.67548291217315,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891653,
        "lng": 121.161711,
        "ele": 342.5,
        "distanceKm": 22.35736988949297,
        "gradePct": -0.8783836248456997,
        "smoothedEle": 336.77866919499627,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891436,
        "lng": 121.16144,
        "ele": 338,
        "distanceKm": 22.394151353054006,
        "gradePct": -1.404968131101645,
        "smoothedEle": 335.7404494017694,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891014,
        "lng": 121.16136,
        "ele": 335.5,
        "distanceKm": 22.4417859070348,
        "gradePct": -2.1184508709282643,
        "smoothedEle": 333.99958348050535,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890677688536996,
        "lng": 121.16129977974374,
        "ele": 333.23763498429224,
        "distanceKm": 22.479687477613755,
        "gradePct": -2.7238013062302953,
        "smoothedEle": 332.37779149139067,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890353,
        "lng": 121.161186,
        "ele": 330,
        "distanceKm": 22.517625992048536,
        "gradePct": -3.469349557301269,
        "smoothedEle": 330.3980925148614,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889918,
        "lng": 121.161227,
        "ele": 327.5,
        "distanceKm": 22.56617785346034,
        "gradePct": -4.584839872506296,
        "smoothedEle": 327.3603695843338,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889824,
        "lng": 121.16124,
        "ele": 326.5,
        "distanceKm": 22.57671468416502,
        "gradePct": -4.784246717724517,
        "smoothedEle": 326.66413580409244,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889754,
        "lng": 121.161212,
        "ele": 325.25,
        "distanceKm": 22.58501000772028,
        "gradePct": -4.9284745536263195,
        "smoothedEle": 326.1415304201111,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8897,
        "lng": 121.161126,
        "ele": 323.75,
        "distanceKm": 22.595671445749545,
        "gradePct": -5.1075179193392914,
        "smoothedEle": 325.4698598242673,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88969,
        "lng": 121.160967,
        "ele": 321.75,
        "distanceKm": 22.611997168875124,
        "gradePct": -5.343737945614796,
        "smoothedEle": 324.4007752635978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889819,
        "lng": 121.160564,
        "ele": 320,
        "distanceKm": 22.65570111609632,
        "gradePct": -6.041116030592313,
        "smoothedEle": 321.32192557711664,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890181,
        "lng": 121.160034,
        "ele": 319.5,
        "distanceKm": 22.723287785482945,
        "gradePct": -6.697108158775815,
        "smoothedEle": 316.6496372609745,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890335,
        "lng": 121.159667,
        "ele": 315.75,
        "distanceKm": 22.76459898771358,
        "gradePct": -6.507976551414936,
        "smoothedEle": 314.4432006793429,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890356,
        "lng": 121.15949,
        "ele": 313.5,
        "distanceKm": 22.782880360725333,
        "gradePct": -6.340785400646774,
        "smoothedEle": 313.5941273794991,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890332,
        "lng": 121.15934,
        "ele": 312,
        "distanceKm": 22.798476169563717,
        "gradePct": -6.141513578061329,
        "smoothedEle": 313.0031662600102,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890137,
        "lng": 121.159103,
        "ele": 311,
        "distanceKm": 22.831027263116322,
        "gradePct": -5.588346762185088,
        "smoothedEle": 311.88345226721043,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889899,
        "lng": 121.158622,
        "ele": 304.25,
        "distanceKm": 22.886957592595703,
        "gradePct": -4.363626242327358,
        "smoothedEle": 310.43390276190416,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889706,
        "lng": 121.158339,
        "ele": 300.75,
        "distanceKm": 22.92302687460692,
        "gradePct": -3.4956131372796175,
        "smoothedEle": 309.67644783966864,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88964,
        "lng": 121.158295,
        "ele": 300.25,
        "distanceKm": 22.931639366738725,
        "gradePct": -3.35399636785287,
        "smoothedEle": 309.4955855049007,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889514,
        "lng": 121.158262,
        "ele": 300.5,
        "distanceKm": 22.94605200292602,
        "gradePct": -3.1276582976598606,
        "smoothedEle": 309.1784809077556,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88938,
        "lng": 121.158308,
        "ele": 302,
        "distanceKm": 22.96167951316568,
        "gradePct": -2.9017616402647763,
        "smoothedEle": 308.7956069068839,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889228,
        "lng": 121.158721,
        "ele": 306.5,
        "distanceKm": 23.007238120231943,
        "gradePct": -2.510123636840385,
        "smoothedEle": 307.6815196262256,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889212,
        "lng": 121.159193,
        "ele": 310,
        "distanceKm": 23.05562224930198,
        "gradePct": -2.4267972608510124,
        "smoothedEle": 306.39242810062177,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88922,
        "lng": 121.159755,
        "ele": 309.75,
        "distanceKm": 23.113200079488905,
        "gradePct": -2.5331523682317343,
        "smoothedEle": 304.81650580068344,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889141,
        "lng": 121.160186,
        "ele": 309.5,
        "distanceKm": 23.158216880959557,
        "gradePct": -2.4020920257673963,
        "smoothedEle": 304.07625734439915,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888793,
        "lng": 121.160712,
        "ele": 307.25,
        "distanceKm": 23.22455521851545,
        "gradePct": -2.0999480758802425,
        "smoothedEle": 303.020246467699,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888708,
        "lng": 121.160793,
        "ele": 306.5,
        "distanceKm": 23.23713229809412,
        "gradePct": -2.0845931090128786,
        "smoothedEle": 302.7158670443795,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888627,
        "lng": 121.160805,
        "ele": 305.25,
        "distanceKm": 23.246222600502502,
        "gradePct": -2.1066695495641814,
        "smoothedEle": 302.42952251851545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888511,
        "lng": 121.160765,
        "ele": 303,
        "distanceKm": 23.259756444600203,
        "gradePct": -2.1353740814858857,
        "smoothedEle": 302.00852578540736,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888369,
        "lng": 121.160693,
        "ele": 300.25,
        "distanceKm": 23.27718387525534,
        "gradePct": -2.16403765443409,
        "smoothedEle": 301.4742046904355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88813,
        "lng": 121.160368,
        "ele": 297.5,
        "distanceKm": 23.319783065856413,
        "gradePct": -2.4500878324493076,
        "smoothedEle": 299.80808065254547,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88777,
        "lng": 121.160129,
        "ele": 296,
        "distanceKm": 23.366706927881857,
        "gradePct": -3.0192779055414114,
        "smoothedEle": 297.9025522030201,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887391,
        "lng": 121.160049,
        "ele": 295.5,
        "distanceKm": 23.409639306984797,
        "gradePct": -3.370365098280712,
        "smoothedEle": 296.5169561195359,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887407,
        "lng": 121.159621,
        "ele": 292,
        "distanceKm": 23.45352005039633,
        "gradePct": -3.3078275146108753,
        "smoothedEle": 295.58686601483134,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887346,
        "lng": 121.15958,
        "ele": 291.5,
        "distanceKm": 23.461498041865042,
        "gradePct": -3.2359883400812466,
        "smoothedEle": 295.48315212573806,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887271,
        "lng": 121.159584,
        "ele": 291,
        "distanceKm": 23.46984773357262,
        "gradePct": -3.1673955308398942,
        "smoothedEle": 295.36433807885663,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8871,
        "lng": 121.159647,
        "ele": 290.75,
        "distanceKm": 23.489927502491746,
        "gradePct": -2.949506709467197,
        "smoothedEle": 295.07676716135023,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886957,
        "lng": 121.159737,
        "ele": 291,
        "distanceKm": 23.508307962830752,
        "gradePct": -2.712367507209857,
        "smoothedEle": 294.83215569105283,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886841,
        "lng": 121.159791,
        "ele": 291.25,
        "distanceKm": 23.522342766330734,
        "gradePct": -2.57621358512831,
        "smoothedEle": 294.5517067510194,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886433,
        "lng": 121.159738,
        "ele": 289.25,
        "distanceKm": 23.568034086916555,
        "gradePct": -1.9340416060091241,
        "smoothedEle": 293.9916363691192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886231,
        "lng": 121.159745,
        "ele": 289,
        "distanceKm": 23.59050693695032,
        "gradePct": -1.571398146199334,
        "smoothedEle": 293.9916363691192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885885,
        "lng": 121.15987050000001,
        "ele": 292.75000000000017,
        "distanceKm": 23.63107167861032,
        "gradePct": -0.8336611423151539,
        "smoothedEle": 294.3953562812576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885539,
        "lng": 121.159996,
        "ele": 296.5,
        "distanceKm": 23.67163643065648,
        "gradePct": -0.061804657095734905,
        "smoothedEle": 295.2151120723806,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885437,
        "lng": 121.160028,
        "ele": 298.75,
        "distanceKm": 23.683442570290275,
        "gradePct": 0.18568718909992366,
        "smoothedEle": 295.54101501387413,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885321,
        "lng": 121.160034,
        "ele": 300,
        "distanceKm": 23.696355836238997,
        "gradePct": 0.4911960163105693,
        "smoothedEle": 295.9736094231563,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885255,
        "lng": 121.160035,
        "ele": 300.75,
        "distanceKm": 23.703695426489535,
        "gradePct": 0.662972645880816,
        "smoothedEle": 296.2194856965493,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885075,
        "lng": 121.159945,
        "ele": 299.75,
        "distanceKm": 23.725731985972786,
        "gradePct": 1.374172344456047,
        "smoothedEle": 297.25850741111094,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884724,
        "lng": 121.159541,
        "ele": 292.25,
        "distanceKm": 23.782619336914156,
        "gradePct": 3.2058118595790974,
        "smoothedEle": 300.40326008827736,
        "gradeBand": "hard"
      },
      {
        "lat": 22.884651,
        "lng": 121.159501,
        "ele": 291.75,
        "distanceKm": 23.79171223840671,
        "gradePct": 3.486240385313222,
        "smoothedEle": 300.97611288230826,
        "gradeBand": "hard"
      },
      {
        "lat": 22.884331,
        "lng": 121.159568,
        "ele": 297.5,
        "distanceKm": 23.82795060381853,
        "gradePct": 4.506665963855385,
        "smoothedEle": 303.3776257643636,
        "gradeBand": "hard"
      },
      {
        "lat": 22.883868,
        "lng": 121.159709,
        "ele": 303,
        "distanceKm": 23.881421868508504,
        "gradePct": 5.65978092457282,
        "smoothedEle": 306.8047963390731,
        "gradeBand": "hard"
      },
      {
        "lat": 22.883573,
        "lng": 121.159972,
        "ele": 308.75,
        "distanceKm": 23.92387082771688,
        "gradePct": 6.152421230083995,
        "smoothedEle": 309.4755964339244,
        "gradeBand": "steep"
      },
      {
        "lat": 22.883033,
        "lng": 121.160295,
        "ele": 316.5,
        "distanceKm": 23.992429926967176,
        "gradePct": 5.932089500848711,
        "smoothedEle": 312.8878530337341,
        "gradeBand": "hard"
      },
      {
        "lat": 22.882697,
        "lng": 121.160473,
        "ele": 322.75,
        "distanceKm": 24.034003993579745,
        "gradePct": 5.767307282655188,
        "smoothedEle": 315.3002244064893,
        "gradeBand": "hard"
      },
      {
        "lat": 22.88235931220442,
        "lng": 121.16044216845094,
        "ele": 322.5,
        "distanceKm": 24.07168582338225,
        "gradePct": 5.6576603724842505,
        "smoothedEle": 317.4960980419598,
        "gradeBand": "hard"
      },
      {
        "lat": 22.882023,
        "lng": 121.160393,
        "ele": 322.5,
        "distanceKm": 24.109419790997066,
        "gradePct": 5.353879531992808,
        "smoothedEle": 319.2741263681093,
        "gradeBand": "hard"
      },
      {
        "lat": 22.881607,
        "lng": 121.160446,
        "ele": 326.25,
        "distanceKm": 24.155994512029523,
        "gradePct": 5.079370350486916,
        "smoothedEle": 321.2331658097885,
        "gradeBand": "hard"
      },
      {
        "lat": 22.881474,
        "lng": 121.160438,
        "ele": 326.5,
        "distanceKm": 24.17080614919539,
        "gradePct": 4.968435371770386,
        "smoothedEle": 321.74848620674874,
        "gradeBand": "hard"
      },
      {
        "lat": 22.881318,
        "lng": 121.16036,
        "ele": 324.75,
        "distanceKm": 24.18990459357058,
        "gradePct": 4.832158189183577,
        "smoothedEle": 322.42648098206814,
        "gradeBand": "hard"
      },
      {
        "lat": 22.880897333333333,
        "lng": 121.16012666666667,
        "ele": 323.75,
        "distanceKm": 24.24243458011094,
        "gradePct": 3.8527780401203837,
        "smoothedEle": 323.4970650870914,
        "gradeBand": "hard"
      },
      {
        "lat": 22.880476666666667,
        "lng": 121.15989333333333,
        "ele": 322.75,
        "distanceKm": 24.294964600356316,
        "gradePct": 2.5937697129454684,
        "smoothedEle": 323.78053576597074,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880056,
        "lng": 121.15966,
        "ele": 321.75,
        "distanceKm": 24.347494654304874,
        "gradePct": 1.5862225871198972,
        "smoothedEle": 324.04808749999836,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879542,
        "lng": 121.159567,
        "ele": 326,
        "distanceKm": 24.405437596105788,
        "gradePct": 0.7440257527317184,
        "smoothedEle": 324.2311018741371,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879356,
        "lng": 121.159491,
        "ele": 326.5,
        "distanceKm": 24.42753687280922,
        "gradePct": 0.5093552518087013,
        "smoothedEle": 324.2121537988727,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879106,
        "lng": 121.159264,
        "ele": 323.75,
        "distanceKm": 24.46378032823794,
        "gradePct": 0.5124780902145591,
        "smoothedEle": 324.63721051900916,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878735,
        "lng": 121.158959,
        "ele": 322.75,
        "distanceKm": 24.515531445473034,
        "gradePct": 0.9171315031075867,
        "smoothedEle": 325.7195520450427,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87834,
        "lng": 121.158762,
        "ele": 325,
        "distanceKm": 24.563868454418284,
        "gradePct": 1.5651814535133952,
        "smoothedEle": 327.23016750468867,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87797921090256,
        "lng": 121.15867059801126,
        "ele": 325.33933004244903,
        "distanceKm": 24.605064751751225,
        "gradePct": 2.2716929727996638,
        "smoothedEle": 328.77331018059556,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877617,
        "lng": 121.158586,
        "ele": 325.75,
        "distanceKm": 24.646262773711552,
        "gradePct": 2.910595876694639,
        "smoothedEle": 330.2529595467057,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877074,
        "lng": 121.158548,
        "ele": 330.75,
        "distanceKm": 24.706767077399405,
        "gradePct": 3.321705500906416,
        "smoothedEle": 332.1796618927483,
        "gradeBand": "hard"
      },
      {
        "lat": 22.8767,
        "lng": 121.158716,
        "ele": 335.75,
        "distanceKm": 24.751774933157083,
        "gradePct": 3.352708667150223,
        "smoothedEle": 333.5576413009556,
        "gradeBand": "hard"
      },
      {
        "lat": 22.87637,
        "lng": 121.158732,
        "ele": 338.5,
        "distanceKm": 24.788505903591375,
        "gradePct": 3.208291675961402,
        "smoothedEle": 334.5696274670316,
        "gradeBand": "hard"
      },
      {
        "lat": 22.87601524355893,
        "lng": 121.15862706961508,
        "ele": 340.5006675708807,
        "distanceKm": 24.82939163031109,
        "gradePct": 2.964253247437664,
        "smoothedEle": 335.5755297502201,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875669,
        "lng": 121.15849,
        "ele": 341.75,
        "distanceKm": 24.87037324281162,
        "gradePct": 2.887495351505645,
        "smoothedEle": 336.79572534252605,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875053,
        "lng": 121.158226,
        "ele": 341.75,
        "distanceKm": 24.944015981340762,
        "gradePct": 2.3648003913516304,
        "smoothedEle": 338.049690757292,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874699,
        "lng": 121.158225,
        "ele": 338.25,
        "distanceKm": 24.98337917306703,
        "gradePct": 1.705643157559854,
        "smoothedEle": 337.83966566628357,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874259,
        "lng": 121.158447,
        "ele": 336,
        "distanceKm": 25.037333115277047,
        "gradePct": 0.6725118931331362,
        "smoothedEle": 337.157005065857,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873848,
        "lng": 121.158809,
        "ele": 340,
        "distanceKm": 25.09618937365501,
        "gradePct": -0.17198419191458986,
        "smoothedEle": 336.8913459238448,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873771,
        "lng": 121.158873,
        "ele": 340.5,
        "distanceKm": 25.106973654650364,
        "gradePct": -0.32799232661335626,
        "smoothedEle": 336.76296100305524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873669,
        "lng": 121.158914,
        "ele": 340.25,
        "distanceKm": 25.11906839815919,
        "gradePct": -0.5277230209685532,
        "smoothedEle": 336.5694451069141,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8736,
        "lng": 121.15892,
        "ele": 339.5,
        "distanceKm": 25.12676544405412,
        "gradePct": -0.6548308277572256,
        "smoothedEle": 336.4462923725952,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873499,
        "lng": 121.158879,
        "ele": 337.75,
        "distanceKm": 25.138755977930128,
        "gradePct": -0.8528406206062898,
        "smoothedEle": 336.2544438305791,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872971,
        "lng": 121.158615,
        "ele": 329.25,
        "distanceKm": 25.203397546711788,
        "gradePct": -1.527073093117627,
        "smoothedEle": 334.53223391068803,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872635,
        "lng": 121.158615,
        "ele": 327,
        "distanceKm": 25.24075909367034,
        "gradePct": -2.12201078640738,
        "smoothedEle": 332.8975196748248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872383,
        "lng": 121.158924,
        "ele": 334,
        "distanceKm": 25.28303667671028,
        "gradePct": -3.185100402144383,
        "smoothedEle": 330.58051236922125,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872109,
        "lng": 121.159167,
        "ele": 338.75,
        "distanceKm": 25.32238221129578,
        "gradePct": -4.068731306002051,
        "smoothedEle": 328.3789614847246,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871618,
        "lng": 121.159174,
        "ele": 333.75,
        "distanceKm": 25.3769837057408,
        "gradePct": -5.133259377054788,
        "smoothedEle": 324.96944465757986,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871314,
        "lng": 121.159057,
        "ele": 331,
        "distanceKm": 25.412849442562766,
        "gradePct": -5.813349928955623,
        "smoothedEle": 322.49197653277815,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871074,
        "lng": 121.158761,
        "ele": 322,
        "distanceKm": 25.45324570971587,
        "gradePct": -6.177179554372991,
        "smoothedEle": 319.85883619085564,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870928,
        "lng": 121.158456,
        "ele": 313.25,
        "distanceKm": 25.48845947805161,
        "gradePct": -6.486204575415025,
        "smoothedEle": 317.30467429779776,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870819,
        "lng": 121.158288,
        "ele": 309.5,
        "distanceKm": 25.50951081684688,
        "gradePct": -6.6703083560715815,
        "smoothedEle": 315.7585543244964,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870741,
        "lng": 121.158237,
        "ele": 308.25,
        "distanceKm": 25.519636356923424,
        "gradePct": -6.803182086090029,
        "smoothedEle": 314.9262396047599,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870634,
        "lng": 121.15821,
        "ele": 308,
        "distanceKm": 25.53185157246485,
        "gradePct": -6.947281291336846,
        "smoothedEle": 313.8930973895847,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870096,
        "lng": 121.158138,
        "ele": 310.25,
        "distanceKm": 25.592127611491513,
        "gradePct": -7.164233584807531,
        "smoothedEle": 309.59489431480614,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86977912275932,
        "lng": 121.15796066600629,
        "ele": 305.31437517879266,
        "distanceKm": 25.631771219400356,
        "gradePct": -7.372141856626284,
        "smoothedEle": 306.5143191084577,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869476,
        "lng": 121.157756,
        "ele": 299.5,
        "distanceKm": 25.671467223215153,
        "gradePct": -7.907475205256303,
        "smoothedEle": 302.72222389599216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869034,
        "lng": 121.157653,
        "ele": 292.75,
        "distanceKm": 25.721735602079736,
        "gradePct": -8.531799485197839,
        "smoothedEle": 297.68509003907326,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868953,
        "lng": 121.157685,
        "ele": 290.5,
        "distanceKm": 25.731320557110525,
        "gradePct": -8.449952096614853,
        "smoothedEle": 297.038105574495,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868898,
        "lng": 121.157756,
        "ele": 289.75,
        "distanceKm": 25.740824103169846,
        "gradePct": -8.428331053445165,
        "smoothedEle": 296.39661621549084,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868879,
        "lng": 121.157837,
        "ele": 290,
        "distanceKm": 25.749387642562827,
        "gradePct": -8.379718423864604,
        "smoothedEle": 295.8831870264787,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868887,
        "lng": 121.157917,
        "ele": 291.25,
        "distanceKm": 25.75763215516606,
        "gradePct": -8.273328546623276,
        "smoothedEle": 295.50806170303156,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868988,
        "lng": 121.158365,
        "ele": 300.75,
        "distanceKm": 25.804885862014533,
        "gradePct": -7.51462535383902,
        "smoothedEle": 293.5742416558231,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868991,
        "lng": 121.15845,
        "ele": 302.25,
        "distanceKm": 25.81360089720445,
        "gradePct": -7.340870490657236,
        "smoothedEle": 293.244534480278,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868957,
        "lng": 121.15855,
        "ele": 302.75,
        "distanceKm": 25.82452164992421,
        "gradePct": -7.143168108406879,
        "smoothedEle": 292.79132324240777,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86886,
        "lng": 121.158674,
        "ele": 300.75,
        "distanceKm": 25.84118711208985,
        "gradePct": -6.725017157939414,
        "smoothedEle": 292.16479975233364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86841,
        "lng": 121.158903,
        "ele": 285.75,
        "distanceKm": 25.896452419104392,
        "gradePct": -4.786843838834971,
        "smoothedEle": 290.6448991610287,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868064,
        "lng": 121.159024,
        "ele": 272.5,
        "distanceKm": 25.936873920450914,
        "gradePct": -3.782546649769457,
        "smoothedEle": 289.0981602494798,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868044,
        "lng": 121.159077,
        "ele": 272.25,
        "distanceKm": 25.942741808838647,
        "gradePct": -3.7461880884072642,
        "smoothedEle": 288.78926350606366,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86804,
        "lng": 121.159157,
        "ele": 273,
        "distanceKm": 25.950950300251378,
        "gradePct": -3.722154680288823,
        "smoothedEle": 288.36777674107196,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868062,
        "lng": 121.159241,
        "ele": 275.25,
        "distanceKm": 25.959897475183148,
        "gradePct": -3.725100714682255,
        "smoothedEle": 287.96515386914234,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868124,
        "lng": 121.159369,
        "ele": 279.5,
        "distanceKm": 25.97471344834947,
        "gradePct": -3.755294202482516,
        "smoothedEle": 287.2984350766579,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868167,
        "lng": 121.159765,
        "ele": 286.75,
        "distanceKm": 26.015566525512426,
        "gradePct": -3.791460041532999,
        "smoothedEle": 285.58004082243093,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868031,
        "lng": 121.160147,
        "ele": 289.5,
        "distanceKm": 26.057524479275443,
        "gradePct": -4.397809881392377,
        "smoothedEle": 282.91987145609204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.867736,
        "lng": 121.160577,
        "ele": 294.75,
        "distanceKm": 26.112451042085233,
        "gradePct": -5.983465899073046,
        "smoothedEle": 278.06577603224576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.867689,
        "lng": 121.160619,
        "ele": 294.5,
        "distanceKm": 26.119220815439032,
        "gradePct": -6.155951299343421,
        "smoothedEle": 277.4617581523073,
        "gradeBand": "descent"
      },
      {
        "lat": 22.867566,
        "lng": 121.160641,
        "ele": 291.25,
        "distanceKm": 26.1330823023978,
        "gradePct": -6.313520009862452,
        "smoothedEle": 276.61620744782255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.867274,
        "lng": 121.16058,
        "ele": 280.25,
        "distanceKm": 26.16614729428936,
        "gradePct": -6.503414369111164,
        "smoothedEle": 274.6770832711405,
        "gradeBand": "descent"
      },
      {
        "lat": 22.866871,
        "lng": 121.160606,
        "ele": 270.25,
        "distanceKm": 26.211038019339096,
        "gradePct": -5.887798745236998,
        "smoothedEle": 273.99492491936445,
        "gradeBand": "descent"
      },
      {
        "lat": 22.866578,
        "lng": 121.160752,
        "ele": 269.5,
        "distanceKm": 26.246888088483573,
        "gradePct": -5.399234239918334,
        "smoothedEle": 272.79575904978446,
        "gradeBand": "descent"
      },
      {
        "lat": 22.866414,
        "lng": 121.160796,
        "ele": 269.25,
        "distanceKm": 26.2656730375996,
        "gradePct": -5.185707156710284,
        "smoothedEle": 271.82833417030895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.866326,
        "lng": 121.160783,
        "ele": 267.75,
        "distanceKm": 26.275548438836957,
        "gradePct": -5.019635980820983,
        "smoothedEle": 271.2877450511435,
        "gradeBand": "descent"
      },
      {
        "lat": 22.866082,
        "lng": 121.1607,
        "ele": 262,
        "distanceKm": 26.303981522396207,
        "gradePct": -4.6004207798192045,
        "smoothedEle": 269.61342217439653,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86574,
        "lng": 121.160667,
        "ele": 255.5,
        "distanceKm": 26.342160247638805,
        "gradePct": -4.676087498325375,
        "smoothedEle": 266.7316487400503,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8655,
        "lng": 121.160927,
        "ele": 255.25,
        "distanceKm": 26.37986722624439,
        "gradePct": -5.933268016320078,
        "smoothedEle": 262.6020594905624,
        "gradeBand": "descent"
      },
      {
        "lat": 22.865266,
        "lng": 121.161508,
        "ele": 265.5,
        "distanceKm": 26.444833183924263,
        "gradePct": -8.437045104979562,
        "smoothedEle": 255.99040431151545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.865224,
        "lng": 121.161573,
        "ele": 265.75,
        "distanceKm": 26.452967237067945,
        "gradePct": -8.534898179687646,
        "smoothedEle": 255.412886538314,
        "gradeBand": "descent"
      },
      {
        "lat": 22.865154,
        "lng": 121.161624,
        "ele": 264.25,
        "distanceKm": 26.462342172997445,
        "gradePct": -8.64157611617077,
        "smoothedEle": 254.7167214649785,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864913,
        "lng": 121.161702,
        "ele": 261,
        "distanceKm": 26.490306450495314,
        "gradePct": -8.86647896227261,
        "smoothedEle": 252.6857404583607,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864444,
        "lng": 121.161723,
        "ele": 259.25,
        "distanceKm": 26.542501309783354,
        "gradePct": -8.347351256366894,
        "smoothedEle": 249.99959381623444,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864314,
        "lng": 121.161702,
        "ele": 257.5,
        "distanceKm": 26.557115923022966,
        "gradePct": -7.733918694727833,
        "smoothedEle": 249.62589713499858,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864236,
        "lng": 121.161644,
        "ele": 254.5,
        "distanceKm": 26.567629671896256,
        "gradePct": -7.298439276425494,
        "smoothedEle": 249.34541223560146,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864199,
        "lng": 121.161568,
        "ele": 251.5,
        "distanceKm": 26.57643657307813,
        "gradePct": -6.915400517779754,
        "smoothedEle": 249.14697639788804,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864185,
        "lng": 121.161488,
        "ele": 248.75,
        "distanceKm": 26.584779757191747,
        "gradePct": -6.538052859938881,
        "smoothedEle": 249.02600022824055,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864179,
        "lng": 121.161115,
        "ele": 235.75,
        "distanceKm": 26.623002531466444,
        "gradePct": -5.177785166925649,
        "smoothedEle": 247.856562888303,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864164,
        "lng": 121.161054,
        "ele": 233.5,
        "distanceKm": 26.62947122131723,
        "gradePct": -4.9650588328465695,
        "smoothedEle": 247.62369005367464,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864072,
        "lng": 121.160964,
        "ele": 230.25,
        "distanceKm": 26.64324377820356,
        "gradePct": -4.51975225639592,
        "smoothedEle": 247.1126553233121,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86402,
        "lng": 121.160943,
        "ele": 229.5,
        "distanceKm": 26.649413274852552,
        "gradePct": -4.450569546481448,
        "smoothedEle": 246.764078762644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863951,
        "lng": 121.160939,
        "ele": 229.5,
        "distanceKm": 26.65709667347961,
        "gradePct": -4.388137816425074,
        "smoothedEle": 246.32996674021513,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863906,
        "lng": 121.160955,
        "ele": 230,
        "distanceKm": 26.662362148119357,
        "gradePct": -4.34152406353637,
        "smoothedEle": 246.03222259085138,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863733,
        "lng": 121.161084,
        "ele": 234.5,
        "distanceKm": 26.685701937479656,
        "gradePct": -4.40943596152009,
        "smoothedEle": 244.20128370053396,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863671,
        "lng": 121.161091,
        "ele": 234.75,
        "distanceKm": 26.69263323871039,
        "gradePct": -4.5289207399952165,
        "smoothedEle": 243.50815357746075,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863459,
        "lng": 121.16104,
        "ele": 232.75,
        "distanceKm": 26.71677879611401,
        "gradePct": -5.1056708564866575,
        "smoothedEle": 241.11203081753362,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863291,
        "lng": 121.161066,
        "ele": 234.5,
        "distanceKm": 26.73564855582156,
        "gradePct": -5.561007195055074,
        "smoothedEle": 239.23024829610267,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862947,
        "lng": 121.161332,
        "ele": 247.25,
        "distanceKm": 26.78261593332624,
        "gradePct": -7.383869176130402,
        "smoothedEle": 234.28963732202965,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862777,
        "lng": 121.161359,
        "ele": 249.25,
        "distanceKm": 26.801720450384746,
        "gradePct": -8.156431365762886,
        "smoothedEle": 232.19483186452962,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862724,
        "lng": 121.161328,
        "ele": 249,
        "distanceKm": 26.808415221158132,
        "gradePct": -8.43327927381175,
        "smoothedEle": 231.43630751169474,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862675,
        "lng": 121.161259,
        "ele": 248.25,
        "distanceKm": 26.81734088437899,
        "gradePct": -8.801633192644404,
        "smoothedEle": 230.42651630809783,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86273,
        "lng": 121.160727,
        "ele": 237.25,
        "distanceKm": 26.872191313988722,
        "gradePct": -9.939909624976899,
        "smoothedEle": 225.3813337407489,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862883,
        "lng": 121.160367,
        "ele": 227,
        "distanceKm": 26.912811102666716,
        "gradePct": -9.044883705641826,
        "smoothedEle": 223.41600377076315,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863122,
        "lng": 121.160039,
        "ele": 215.5,
        "distanceKm": 26.955655806242653,
        "gradePct": -7.821752967788938,
        "smoothedEle": 221.48213175113676,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863335,
        "lng": 121.159668,
        "ele": 208.75,
        "distanceKm": 27.000443003706604,
        "gradePct": -6.274870346589148,
        "smoothedEle": 219.7851628761132,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863444,
        "lng": 121.15925,
        "ele": 204.25,
        "distanceKm": 27.04495281605967,
        "gradePct": -5.588059659337239,
        "smoothedEle": 216.71063135117058,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863499,
        "lng": 121.159128,
        "ele": 200.75,
        "distanceKm": 27.058868693265364,
        "gradePct": -5.576217219429899,
        "smoothedEle": 215.4543236842163,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863508,
        "lng": 121.159067,
        "ele": 198.25,
        "distanceKm": 27.065198295674264,
        "gradePct": -5.579285224139957,
        "smoothedEle": 214.86598622334265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863489,
        "lng": 121.159003,
        "ele": 196.5,
        "distanceKm": 27.072087603750354,
        "gradePct": -5.5793516019304175,
        "smoothedEle": 214.2321698803424,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863442,
        "lng": 121.158969,
        "ele": 196.25,
        "distanceKm": 27.078368393214994,
        "gradePct": -5.708745371810613,
        "smoothedEle": 213.66497391569038,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86337,
        "lng": 121.158969,
        "ele": 197.75,
        "distanceKm": 27.086374438991744,
        "gradePct": -5.87533693491519,
        "smoothedEle": 212.9444297957829,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863037,
        "lng": 121.159222,
        "ele": 205.75,
        "distanceKm": 27.131574298491305,
        "gradePct": -6.207499978602777,
        "smoothedEle": 210.15409354518263,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862911,
        "lng": 121.159375,
        "ele": 208.25,
        "distanceKm": 27.1525990821363,
        "gradePct": -6.189763790227225,
        "smoothedEle": 209.24057485848306,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862807,
        "lng": 121.159447,
        "ele": 209.75,
        "distanceKm": 27.16631600355677,
        "gradePct": -6.1560995706469095,
        "smoothedEle": 208.76602202672987,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862717,
        "lng": 121.159466,
        "ele": 210.75,
        "distanceKm": 27.176511147138527,
        "gradePct": -6.1897965730998195,
        "smoothedEle": 208.3123381373417,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862246,
        "lng": 121.159493,
        "ele": 214.5,
        "distanceKm": 27.228957041840275,
        "gradePct": -5.477279543283023,
        "smoothedEle": 206.860986203879,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862156,
        "lng": 121.159497,
        "ele": 215.25,
        "distanceKm": 27.238972987613305,
        "gradePct": -5.208719757395973,
        "smoothedEle": 206.70625066768213,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862033,
        "lng": 121.159455,
        "ele": 215,
        "distanceKm": 27.253311003907008,
        "gradePct": -4.857899830757648,
        "smoothedEle": 206.24026513813675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862001,
        "lng": 121.159405,
        "ele": 213.5,
        "distanceKm": 27.259548486716646,
        "gradePct": -4.6767949188073334,
        "smoothedEle": 206.03754694682354,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861865,
        "lng": 121.159101,
        "ele": 205.25,
        "distanceKm": 27.294173319799587,
        "gradePct": -3.71692997606091,
        "smoothedEle": 205.02911923577926,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861761,
        "lng": 121.158964,
        "ele": 202.25,
        "distanceKm": 27.31236043286441,
        "gradePct": -3.427344472435861,
        "smoothedEle": 204.48553983096156,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861585,
        "lng": 121.15888,
        "ele": 203.25,
        "distanceKm": 27.333739687470764,
        "gradePct": -2.9997055276216393,
        "smoothedEle": 204.06059717947386,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861237,
        "lng": 121.158836,
        "ele": 211.5,
        "distanceKm": 27.372697307136526,
        "gradePct": -2.7782639572111476,
        "smoothedEle": 202.9255261030084,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861113,
        "lng": 121.158668,
        "ele": 210.5,
        "distanceKm": 27.39475211507788,
        "gradePct": -2.888653833675473,
        "smoothedEle": 202.03024235954734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861001,
        "lng": 121.158304,
        "ele": 204.75,
        "distanceKm": 27.434072165969965,
        "gradePct": -3.294959616970329,
        "smoothedEle": 200.19204383095007,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860973,
        "lng": 121.158168,
        "ele": 203.75,
        "distanceKm": 27.448350413433563,
        "gradePct": -3.450967749779066,
        "smoothedEle": 199.4995488289656,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860971,
        "lng": 121.158033,
        "ele": 202,
        "distanceKm": 27.46218440023974,
        "gradePct": -3.609156453599111,
        "smoothedEle": 198.74246462288227,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861071,
        "lng": 121.157542,
        "ele": 192.5,
        "distanceKm": 27.51370680990677,
        "gradePct": -4.4792234571695975,
        "smoothedEle": 195.500331785759,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861124,
        "lng": 121.157093,
        "ele": 187.25,
        "distanceKm": 27.560087577293025,
        "gradePct": -4.864154476160439,
        "smoothedEle": 193.5646148446483,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861029,
        "lng": 121.156704,
        "ele": 186,
        "distanceKm": 27.601320867493037,
        "gradePct": -4.756965454652376,
        "smoothedEle": 192.209224588697,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860787,
        "lng": 121.156368,
        "ele": 185.75,
        "distanceKm": 27.645016538833655,
        "gradePct": -4.756447218128673,
        "smoothedEle": 190.14834731080376,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860567,
        "lng": 121.156089,
        "ele": 186.5,
        "distanceKm": 27.68264137689088,
        "gradePct": -4.3602179833264945,
        "smoothedEle": 188.73473956828553,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860447,
        "lng": 121.155571,
        "ele": 183,
        "distanceKm": 27.737367837058233,
        "gradePct": -3.553112434473446,
        "smoothedEle": 187.40660598307932,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860184,
        "lng": 121.155215,
        "ele": 186,
        "distanceKm": 27.784119761484845,
        "gradePct": -2.619381237335285,
        "smoothedEle": 187.5358841640738,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860118,
        "lng": 121.155097,
        "ele": 186.75,
        "distanceKm": 27.79826323429264,
        "gradePct": -2.3190371300373385,
        "smoothedEle": 187.67165858847707,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860098,
        "lng": 121.154957,
        "ele": 186.5,
        "distanceKm": 27.81277919503285,
        "gradePct": -1.9187330171532506,
        "smoothedEle": 187.83133415661936,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860107,
        "lng": 121.154555,
        "ele": 186.5,
        "distanceKm": 27.85398082942282,
        "gradePct": -0.9189383039687616,
        "smoothedEle": 187.97367216133486,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8601235,
        "lng": 121.15409600000001,
        "ele": 188.5,
        "distanceKm": 27.901046377339615,
        "gradePct": -0.467775281244032,
        "smoothedEle": 187.35252574351176,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86014,
        "lng": 121.153637,
        "ele": 190.5,
        "distanceKm": 27.948111919552268,
        "gradePct": -0.6470509162995081,
        "smoothedEle": 186.1422136321395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860238,
        "lng": 121.152954,
        "ele": 194,
        "distanceKm": 28.01893634625711,
        "gradePct": -1.8358513876901905,
        "smoothedEle": 184.18090230005006,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860347,
        "lng": 121.152604,
        "ele": 192.75,
        "distanceKm": 28.05679058529306,
        "gradePct": -2.2954428285708923,
        "smoothedEle": 183.34570481979745,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860513,
        "lng": 121.15231,
        "ele": 186.5,
        "distanceKm": 28.092119634968792,
        "gradePct": -2.433687344957201,
        "smoothedEle": 182.6029615177668,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860792,
        "lng": 121.152004,
        "ele": 177.25,
        "distanceKm": 28.136227086972273,
        "gradePct": -2.325771674443453,
        "smoothedEle": 181.79629423098504,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861045,
        "lng": 121.151577,
        "ele": 172.25,
        "distanceKm": 28.188242061887827,
        "gradePct": -2.0453232702887405,
        "smoothedEle": 180.94025978442198,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861113,
        "lng": 121.151142,
        "ele": 168,
        "distanceKm": 28.233449272624554,
        "gradePct": -1.937706288241493,
        "smoothedEle": 179.9852835896736,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86107,
        "lng": 121.151049,
        "ele": 169,
        "distanceKm": 28.24411043887921,
        "gradePct": -1.9797503830407164,
        "smoothedEle": 179.66597262399486,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861006,
        "lng": 121.150998,
        "ele": 170.75,
        "distanceKm": 28.25293937753906,
        "gradePct": -2.014785763218079,
        "smoothedEle": 179.4011044641994,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860887,
        "lng": 121.150933,
        "ele": 174,
        "distanceKm": 28.267753101663285,
        "gradePct": -2.0769502263217348,
        "smoothedEle": 178.96133296523064,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860682,
        "lng": 121.150892,
        "ele": 175.75,
        "distanceKm": 28.290931953264813,
        "gradePct": -2.194723260668916,
        "smoothedEle": 178.23848432446556,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860368,
        "lng": 121.150862,
        "ele": 176,
        "distanceKm": 28.325982252682493,
        "gradePct": -2.566581672951268,
        "smoothedEle": 176.85049543018053,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85998,
        "lng": 121.150894,
        "ele": 178,
        "distanceKm": 28.369250351434275,
        "gradePct": -2.880434202389249,
        "smoothedEle": 175.4919467230573,
        "gradeBand": "descent"
      },
      {
        "lat": 22.859569,
        "lng": 121.150988,
        "ele": 181.25,
        "distanceKm": 28.41595539845361,
        "gradePct": -2.7310259412777596,
        "smoothedEle": 174.89277968663103,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85921925247742,
        "lng": 121.15092840970354,
        "ele": 180.150841591395,
        "distanceKm": 28.455321982909517,
        "gradePct": -2.4525692113093047,
        "smoothedEle": 174.42523420356153,
        "gradeBand": "descent"
      },
      {
        "lat": 22.858874,
        "lng": 121.150837,
        "ele": 179,
        "distanceKm": 28.494838355586158,
        "gradePct": -2.0143500731322135,
        "smoothedEle": 174.05509097646774,
        "gradeBand": "descent"
      },
      {
        "lat": 22.858646,
        "lng": 121.150739,
        "ele": 179.25,
        "distanceKm": 28.522106948708476,
        "gradePct": -1.5633824257467437,
        "smoothedEle": 173.87719228849488,
        "gradeBand": "descent"
      },
      {
        "lat": 22.858566,
        "lng": 121.15063,
        "ele": 177.25,
        "distanceKm": 28.536385089198987,
        "gradePct": -1.3356598866841172,
        "smoothedEle": 173.85254332242263,
        "gradeBand": "descent"
      },
      {
        "lat": 22.858411,
        "lng": 121.150274,
        "ele": 169,
        "distanceKm": 28.57672864110764,
        "gradePct": -0.8253953342183451,
        "smoothedEle": 173.7452189996965,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857905,
        "lng": 121.150157,
        "ele": 171.25,
        "distanceKm": 28.634256317045374,
        "gradePct": -0.6689956184802265,
        "smoothedEle": 173.33743375807458,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857625966222347,
        "lng": 121.14994237896482,
        "ele": 168.25748368205765,
        "distanceKm": 28.672286293237548,
        "gradePct": -0.742727641089064,
        "smoothedEle": 172.78087707526458,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857351,
        "lng": 121.149718,
        "ele": 162.75,
        "distanceKm": 28.710540609423422,
        "gradePct": -0.8812822692571306,
        "smoothedEle": 172.1900858630644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857211,
        "lng": 121.149696,
        "ele": 163.75,
        "distanceKm": 28.72627028153806,
        "gradePct": -0.955002723619561,
        "smoothedEle": 171.95999950129843,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857139,
        "lng": 121.14971,
        "ele": 165,
        "distanceKm": 28.734403825142653,
        "gradePct": -0.9998124665569642,
        "smoothedEle": 171.85633873039146,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857088,
        "lng": 121.149733,
        "ele": 166,
        "distanceKm": 28.740544959228778,
        "gradePct": -1.034021783930758,
        "smoothedEle": 171.77343342022877,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85702,
        "lng": 121.149791,
        "ele": 168,
        "distanceKm": 28.750162168982737,
        "gradePct": -1.0861458123089884,
        "smoothedEle": 171.64360108855035,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856808,
        "lng": 121.150077,
        "ele": 174,
        "distanceKm": 28.787771547884994,
        "gradePct": -1.255563278778273,
        "smoothedEle": 171.1558147378001,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856761,
        "lng": 121.150105,
        "ele": 174.5,
        "distanceKm": 28.793733421557114,
        "gradePct": -1.262751791856819,
        "smoothedEle": 171.099176937915,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856685,
        "lng": 121.150109,
        "ele": 174.75,
        "distanceKm": 28.802194180593485,
        "gradePct": -1.2729533292144497,
        "smoothedEle": 171.0187997270694,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856512,
        "lng": 121.150068,
        "ele": 174.5,
        "distanceKm": 28.82188430809542,
        "gradePct": -1.1702432429991103,
        "smoothedEle": 171.08464632434584,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8562,
        "lng": 121.149932,
        "ele": 173.5,
        "distanceKm": 28.859271241916836,
        "gradePct": -0.8302952172718989,
        "smoothedEle": 171.3107578036017,
        "gradeBand": "descent"
      },
      {
        "lat": 22.855792665114,
        "lng": 121.14990301323404,
        "ele": 173.2193703453278,
        "distanceKm": 28.90466215487359,
        "gradePct": -0.438099830450257,
        "smoothedEle": 171.40467175620395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.855384,
        "lng": 121.149893,
        "ele": 172.75,
        "distanceKm": 28.950115286374142,
        "gradePct": 0.1550695914437915,
        "smoothedEle": 171.95437318665395,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.854806,
        "lng": 121.149956,
        "ele": 172.25,
        "distanceKm": 29.01470941221211,
        "gradePct": 0.8256391600954516,
        "smoothedEle": 172.711930768434,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.854413,
        "lng": 121.150019,
        "ele": 172.5,
        "distanceKm": 29.058883297261804,
        "gradePct": 0.5747258907276793,
        "smoothedEle": 172.45786334451648,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.853848,
        "lng": 121.149923,
        "ele": 172,
        "distanceKm": 29.122473937146676,
        "gradePct": 0.29573581173508606,
        "smoothedEle": 172.2115556487773,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.853396,
        "lng": 121.149956,
        "ele": 173.25,
        "distanceKm": 29.172847730897534,
        "gradePct": -0.0677730413069784,
        "smoothedEle": 172.08543239481037,
        "gradeBand": "descent"
      },
      {
        "lat": 22.852868,
        "lng": 121.150108,
        "ele": 171,
        "distanceKm": 29.233589481303962,
        "gradePct": -0.17954493990532747,
        "smoothedEle": 172.24425160533627,
        "gradeBand": "descent"
      },
      {
        "lat": 22.852556,
        "lng": 121.150275,
        "ele": 170.5,
        "distanceKm": 29.272273002728628,
        "gradePct": -0.06904468980087611,
        "smoothedEle": 172.26791118281142,
        "gradeBand": "descent"
      },
      {
        "lat": 22.852209,
        "lng": 121.15069,
        "ele": 172.25,
        "distanceKm": 29.32969303327878,
        "gradePct": 0.07596034160319247,
        "smoothedEle": 172.34540153897953,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.851826,
        "lng": 121.151041,
        "ele": 171.5,
        "distanceKm": 29.385435951685185,
        "gradePct": 0.16296831253248514,
        "smoothedEle": 172.4442829756643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.851441,
        "lng": 121.151172,
        "ele": 173.25,
        "distanceKm": 29.4303011895562,
        "gradePct": 0.04448902371686374,
        "smoothedEle": 172.32463187783162,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85133,
        "lng": 121.151141,
        "ele": 174.25,
        "distanceKm": 29.443046043452128,
        "gradePct": 0.02136716223957088,
        "smoothedEle": 172.29276974309178,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.851257,
        "lng": 121.151086,
        "ele": 174.5,
        "distanceKm": 29.452927904776626,
        "gradePct": 0.005992868412960227,
        "smoothedEle": 172.26806508978052,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.851228,
        "lng": 121.151041,
        "ele": 174.75,
        "distanceKm": 29.458554654967948,
        "gradePct": 0.009244826905302294,
        "smoothedEle": 172.27801043420462,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.851203,
        "lng": 121.150984,
        "ele": 174.5,
        "distanceKm": 29.46502313791364,
        "gradePct": 0.023398626379105364,
        "smoothedEle": 172.31027428035424,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85119,
        "lng": 121.150886,
        "ele": 174,
        "distanceKm": 29.475168521618148,
        "gradePct": 0.049663897458416,
        "smoothedEle": 172.3711465825813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.851179,
        "lng": 121.150512,
        "ele": 172,
        "distanceKm": 29.513511110083538,
        "gradePct": 0.1519597362847952,
        "smoothedEle": 172.62748293553506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.850983,
        "lng": 121.15019,
        "ele": 173.25,
        "distanceKm": 29.55305403260354,
        "gradePct": 0.326477909753977,
        "smoothedEle": 173.0397970470015,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.850772,
        "lng": 121.149901,
        "ele": 174,
        "distanceKm": 29.590835292786036,
        "gradePct": 0.5033084027140422,
        "smoothedEle": 173.43650027891772,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.850455,
        "lng": 121.149582,
        "ele": 171.25,
        "distanceKm": 29.638907645851457,
        "gradePct": 0.9544836683640516,
        "smoothedEle": 174.21208307382156,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.850064,
        "lng": 121.149531,
        "ele": 172,
        "distanceKm": 29.682697869515476,
        "gradePct": 1.2949759452432703,
        "smoothedEle": 175.01143533495872,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.849572,
        "lng": 121.149585,
        "ele": 174,
        "distanceKm": 29.737684966182695,
        "gradePct": 1.668926196166075,
        "smoothedEle": 176.21739616108457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.849191816248922,
        "lng": 121.14963949300432,
        "ele": 175.74250885911124,
        "distanceKm": 29.780326709210357,
        "gradePct": 2.177465241885266,
        "smoothedEle": 177.68109063514362,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.848811,
        "lng": 121.149688,
        "ele": 177.5,
        "distanceKm": 29.822962326530156,
        "gradePct": 2.606898736885493,
        "smoothedEle": 179.16862425501998,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.84837,
        "lng": 121.149806,
        "ele": 180.25,
        "distanceKm": 29.873468107840868,
        "gradePct": 2.936448362120696,
        "smoothedEle": 180.71585082647195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.84804,
        "lng": 121.14992,
        "ele": 181.75,
        "distanceKm": 29.911977035757694,
        "gradePct": 3.1273574339143515,
        "smoothedEle": 181.90829226246797,
        "gradeBand": "hard"
      },
      {
        "lat": 22.84758,
        "lng": 121.150249,
        "ele": 185.75,
        "distanceKm": 29.973237557690016,
        "gradePct": 3.148029386350782,
        "smoothedEle": 183.73381151475394,
        "gradeBand": "hard"
      },
      {
        "lat": 22.847432,
        "lng": 121.15029,
        "ele": 187.25,
        "distanceKm": 29.990222245094643,
        "gradePct": 3.1042596325595153,
        "smoothedEle": 184.23485979319037,
        "gradeBand": "hard"
      },
      {
        "lat": 22.847355,
        "lng": 121.15028,
        "ele": 188.75,
        "distanceKm": 29.998845367302405,
        "gradePct": 3.081022651021268,
        "smoothedEle": 184.48924189831936,
        "gradeBand": "hard"
      },
      {
        "lat": 22.847286,
        "lng": 121.150255,
        "ele": 189.75,
        "distanceKm": 30.00693420806861,
        "gradePct": 3.0592254134289445,
        "smoothedEle": 184.72786270092243,
        "gradeBand": "hard"
      },
      {
        "lat": 22.84722,
        "lng": 121.150203,
        "ele": 190.25,
        "distanceKm": 30.016003494659024,
        "gradePct": 3.030036965908931,
        "smoothedEle": 184.98590830799708,
        "gradeBand": "hard"
      },
      {
        "lat": 22.847129,
        "lng": 121.150068,
        "ele": 191,
        "distanceKm": 30.03314285648672,
        "gradePct": 3.0013527168296683,
        "smoothedEle": 185.48320658774864,
        "gradeBand": "hard"
      },
      {
        "lat": 22.847108,
        "lng": 121.149915,
        "ele": 190.5,
        "distanceKm": 30.048993887460693,
        "gradePct": 2.988516072047812,
        "smoothedEle": 185.94312397060636,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.84711,
        "lng": 121.149412,
        "ele": 189,
        "distanceKm": 30.100537372625514,
        "gradePct": 2.920478904495208,
        "smoothedEle": 187.39501719428998,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.847105,
        "lng": 121.149054,
        "ele": 186.75,
        "distanceKm": 30.137226269598496,
        "gradePct": 2.8624581204647614,
        "smoothedEle": 188.3856174125605,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.846783,
        "lng": 121.148745,
        "ele": 187,
        "distanceKm": 30.185023451173816,
        "gradePct": 3.1330706696342183,
        "smoothedEle": 190.34763671179442,
        "gradeBand": "hard"
      },
      {
        "lat": 22.846322,
        "lng": 121.148591,
        "ele": 188.75,
        "distanceKm": 30.23865843353194,
        "gradePct": 3.6086565340440857,
        "smoothedEle": 192.8605540260776,
        "gradeBand": "hard"
      },
      {
        "lat": 22.845923499999998,
        "lng": 121.148529,
        "ele": 190.25000000000006,
        "distanceKm": 30.28342281501424,
        "gradePct": 3.7023661298863133,
        "smoothedEle": 194.31766117185407,
        "gradeBand": "hard"
      },
      {
        "lat": 22.845525,
        "lng": 121.148467,
        "ele": 191.75,
        "distanceKm": 30.32818719913834,
        "gradePct": 3.6579730379164053,
        "smoothedEle": 195.4575085859691,
        "gradeBand": "hard"
      },
      {
        "lat": 22.845154,
        "lng": 121.148487,
        "ele": 193.75,
        "distanceKm": 30.36949145044878,
        "gradePct": 3.722934897280026,
        "smoothedEle": 197.15593575063505,
        "gradeBand": "hard"
      },
      {
        "lat": 22.844866,
        "lng": 121.14887,
        "ele": 203.25,
        "distanceKm": 30.420145973810776,
        "gradePct": 4.011497599807356,
        "smoothedEle": 200.01619962440668,
        "gradeBand": "hard"
      },
      {
        "lat": 22.844766,
        "lng": 121.149031,
        "ele": 206.75,
        "distanceKm": 30.4400415019691,
        "gradePct": 4.193766032875247,
        "smoothedEle": 201.2931057890998,
        "gradeBand": "hard"
      },
      {
        "lat": 22.844683,
        "lng": 121.149124,
        "ele": 208.5,
        "distanceKm": 30.453307949658573,
        "gradePct": 4.418960051384404,
        "smoothedEle": 202.1753245604496,
        "gradeBand": "hard"
      },
      {
        "lat": 22.844593,
        "lng": 121.149188,
        "ele": 209.75,
        "distanceKm": 30.465272989207566,
        "gradePct": 4.605233577922677,
        "smoothedEle": 202.93734074163706,
        "gradeBand": "hard"
      },
      {
        "lat": 22.844543,
        "lng": 121.149187,
        "ele": 209.75,
        "distanceKm": 30.4708336874914,
        "gradePct": 4.684332863303569,
        "smoothedEle": 203.2765433369509,
        "gradeBand": "hard"
      },
      {
        "lat": 22.844153,
        "lng": 121.149016,
        "ele": 206,
        "distanceKm": 30.517606222356825,
        "gradePct": 5.381643247733384,
        "smoothedEle": 205.95136885656507,
        "gradeBand": "hard"
      },
      {
        "lat": 22.844053,
        "lng": 121.148986,
        "ele": 203.5,
        "distanceKm": 30.529142867692467,
        "gradePct": 5.547053666969439,
        "smoothedEle": 206.59091292642057,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843982,
        "lng": 121.149016,
        "ele": 202.75,
        "distanceKm": 30.537615140487897,
        "gradePct": 5.614323887226652,
        "smoothedEle": 207.0738324757601,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843923,
        "lng": 121.149077,
        "ele": 202.75,
        "distanceKm": 30.546676811405977,
        "gradePct": 5.686273954614256,
        "smoothedEle": 207.59034771809058,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843896,
        "lng": 121.14916,
        "ele": 203.5,
        "distanceKm": 30.555696449872986,
        "gradePct": 5.757890282483607,
        "smoothedEle": 208.10446711071012,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843813,
        "lng": 121.149619,
        "ele": 209.75,
        "distanceKm": 30.603628763880938,
        "gradePct": 5.928297835043686,
        "smoothedEle": 210.94013270639311,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843649,
        "lng": 121.150298,
        "ele": 218.5,
        "distanceKm": 30.67555845735979,
        "gradePct": 5.499292762316264,
        "smoothedEle": 214.54532877815072,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843624,
        "lng": 121.150374,
        "ele": 219.5,
        "distanceKm": 30.683827725609973,
        "gradePct": 5.419292542933908,
        "smoothedEle": 214.85823086236795,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843581,
        "lng": 121.150445,
        "ele": 220.25,
        "distanceKm": 30.69253385199473,
        "gradePct": 5.315375958118385,
        "smoothedEle": 215.14828323813106,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843547,
        "lng": 121.150475,
        "ele": 220.25,
        "distanceKm": 30.697406632067693,
        "gradePct": 5.252727444756066,
        "smoothedEle": 215.30165052857728,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843429,
        "lng": 121.150525,
        "ele": 219.25,
        "distanceKm": 30.71149256151822,
        "gradePct": 5.047926589528178,
        "smoothedEle": 215.69759428770448,
        "gradeBand": "hard"
      },
      {
        "lat": 22.843064,
        "lng": 121.15062,
        "ele": 217,
        "distanceKm": 30.753229966339628,
        "gradePct": 4.452442332709156,
        "smoothedEle": 216.868762214727,
        "gradeBand": "hard"
      },
      {
        "lat": 22.842816,
        "lng": 121.15089,
        "ele": 218.75,
        "distanceKm": 30.79229374367466,
        "gradePct": 4.049451606599221,
        "smoothedEle": 218.36845851287623,
        "gradeBand": "hard"
      },
      {
        "lat": 22.842641,
        "lng": 121.151176,
        "ele": 221.75,
        "distanceKm": 30.827473276325737,
        "gradePct": 3.9534852105293505,
        "smoothedEle": 220.0422165561534,
        "gradeBand": "hard"
      },
      {
        "lat": 22.842303,
        "lng": 121.15118,
        "ele": 222,
        "distanceKm": 30.865059448601,
        "gradePct": 3.9836855838735654,
        "smoothedEle": 221.98647797408205,
        "gradeBand": "hard"
      },
      {
        "lat": 22.841889,
        "lng": 121.151004,
        "ele": 223.75,
        "distanceKm": 30.914501152077055,
        "gradePct": 4.401376145731634,
        "smoothedEle": 224.58476880865533,
        "gradeBand": "hard"
      },
      {
        "lat": 22.841602,
        "lng": 121.150627,
        "ele": 222.75,
        "distanceKm": 30.964610630593704,
        "gradePct": 4.688049398864197,
        "smoothedEle": 226.6817757507803,
        "gradeBand": "hard"
      },
      {
        "lat": 22.841361,
        "lng": 121.150332,
        "ele": 223.25,
        "distanceKm": 31.005008669986346,
        "gradePct": 4.783799744194613,
        "smoothedEle": 228.54100379161866,
        "gradeBand": "hard"
      },
      {
        "lat": 22.841209,
        "lng": 121.150202,
        "ele": 223.75,
        "distanceKm": 31.026529284529243,
        "gradePct": 4.7817518013144165,
        "smoothedEle": 229.56080728635038,
        "gradeBand": "hard"
      },
      {
        "lat": 22.84114,
        "lng": 121.150174,
        "ele": 224.5,
        "distanceKm": 31.034720721424044,
        "gradePct": 4.754106540129231,
        "smoothedEle": 229.92532622816907,
        "gradeBand": "hard"
      },
      {
        "lat": 22.840959,
        "lng": 121.15015,
        "ele": 227.25,
        "distanceKm": 31.05499674351366,
        "gradePct": 4.677834440672046,
        "smoothedEle": 230.82162220295479,
        "gradeBand": "hard"
      },
      {
        "lat": 22.840565,
        "lng": 121.150227,
        "ele": 235.25,
        "distanceKm": 31.099512515353844,
        "gradePct": 4.388068497347448,
        "smoothedEle": 232.5732137401201,
        "gradeBand": "hard"
      },
      {
        "lat": 22.840198,
        "lng": 121.150217,
        "ele": 241,
        "distanceKm": 31.14033397440262,
        "gradePct": 4.3458961893781245,
        "smoothedEle": 234.3576262743969,
        "gradeBand": "hard"
      },
      {
        "lat": 22.840079,
        "lng": 121.150129,
        "ele": 241,
        "distanceKm": 31.156346922191346,
        "gradePct": 4.422627686085848,
        "smoothedEle": 235.1812072508939,
        "gradeBand": "hard"
      },
      {
        "lat": 22.839994,
        "lng": 121.149908,
        "ele": 240,
        "distanceKm": 31.18088735848225,
        "gradePct": 4.525487589075569,
        "smoothedEle": 236.4818503743117,
        "gradeBand": "hard"
      },
      {
        "lat": 22.839942754386843,
        "lng": 121.1494800708108,
        "ele": 241,
        "distanceKm": 31.22510874001242,
        "gradePct": 4.81408395468009,
        "smoothedEle": 239.12165944783587,
        "gradeBand": "hard"
      },
      {
        "lat": 22.8399,
        "lng": 121.149051,
        "ele": 241,
        "distanceKm": 31.269334719955737,
        "gradePct": 5.134042790972533,
        "smoothedEle": 241.6538736334935,
        "gradeBand": "hard"
      },
      {
        "lat": 22.839726,
        "lng": 121.148629,
        "ele": 240.75,
        "distanceKm": 31.316710734263275,
        "gradePct": 5.197664738895445,
        "smoothedEle": 243.72032226021705,
        "gradeBand": "hard"
      },
      {
        "lat": 22.839658,
        "lng": 121.148526,
        "ele": 241,
        "distanceKm": 31.329694687030408,
        "gradePct": 5.178200230548089,
        "smoothedEle": 244.2489557119399,
        "gradeBand": "hard"
      },
      {
        "lat": 22.839522,
        "lng": 121.148391,
        "ele": 242,
        "distanceKm": 31.35019056126652,
        "gradePct": 4.994505938550052,
        "smoothedEle": 244.85358400190518,
        "gradeBand": "hard"
      },
      {
        "lat": 22.839307,
        "lng": 121.14834,
        "ele": 244.75,
        "distanceKm": 31.3746621033393,
        "gradePct": 4.6981603467057225,
        "smoothedEle": 245.5482325451469,
        "gradeBand": "hard"
      },
      {
        "lat": 22.838989,
        "lng": 121.148279,
        "ele": 250.25,
        "distanceKm": 31.410570437521507,
        "gradePct": 4.028649660219642,
        "smoothedEle": 246.31109029603022,
        "gradeBand": "hard"
      },
      {
        "lat": 22.838676,
        "lng": 121.147875,
        "ele": 253.25,
        "distanceKm": 31.464656990812998,
        "gradePct": 3.3702077406063022,
        "smoothedEle": 248.12645984089266,
        "gradeBand": "hard"
      },
      {
        "lat": 22.83861,
        "lng": 121.147526,
        "ele": 251.5,
        "distanceKm": 31.50116686137219,
        "gradePct": 3.3082221276097648,
        "smoothedEle": 249.65877333134904,
        "gradeBand": "hard"
      },
      {
        "lat": 22.838605,
        "lng": 121.147072,
        "ele": 246.75,
        "distanceKm": 31.547695008501407,
        "gradePct": 3.6217907210459246,
        "smoothedEle": 252.02354663742622,
        "gradeBand": "hard"
      },
      {
        "lat": 22.838568,
        "lng": 121.147016,
        "ele": 246.75,
        "distanceKm": 31.55475616941626,
        "gradePct": 3.7143636270877343,
        "smoothedEle": 252.41191048774323,
        "gradeBand": "hard"
      },
      {
        "lat": 22.838484,
        "lng": 121.146962,
        "ele": 247.75,
        "distanceKm": 31.56561276605433,
        "gradePct": 3.8588325027420893,
        "smoothedEle": 253.00902330283694,
        "gradeBand": "hard"
      },
      {
        "lat": 22.838372,
        "lng": 121.146958,
        "ele": 250,
        "distanceKm": 31.57807335919899,
        "gradePct": 4.03560866622702,
        "smoothedEle": 253.69192060151713,
        "gradeBand": "hard"
      },
      {
        "lat": 22.838264,
        "lng": 121.146987,
        "ele": 250,
        "distanceKm": 31.590444683325696,
        "gradePct": 4.321310267868598,
        "smoothedEle": 254.5261474838621,
        "gradeBand": "hard"
      },
      {
        "lat": 22.837982,
        "lng": 121.147324,
        "ele": 251.25,
        "distanceKm": 31.637091583835318,
        "gradePct": 5.191111439640641,
        "smoothedEle": 257.5834730835138,
        "gradeBand": "hard"
      },
      {
        "lat": 22.837869,
        "lng": 121.147705,
        "ele": 255.75,
        "distanceKm": 31.678107757841452,
        "gradePct": 5.4936906213642,
        "smoothedEle": 259.6783676475066,
        "gradeBand": "hard"
      },
      {
        "lat": 22.837843,
        "lng": 121.148107,
        "ele": 260.5,
        "distanceKm": 31.71940529642826,
        "gradePct": 5.345033788522505,
        "smoothedEle": 261.27580161984116,
        "gradeBand": "hard"
      },
      {
        "lat": 22.837757,
        "lng": 121.148493,
        "ele": 265.25,
        "distanceKm": 31.76010136554815,
        "gradePct": 5.133190130974672,
        "smoothedEle": 262.97227653694637,
        "gradeBand": "hard"
      },
      {
        "lat": 22.837468,
        "lng": 121.148724,
        "ele": 268.25,
        "distanceKm": 31.800014641583253,
        "gradePct": 5.042988454706833,
        "smoothedEle": 265.23935745804056,
        "gradeBand": "hard"
      },
      {
        "lat": 22.837134,
        "lng": 121.149167,
        "ele": 275.5,
        "distanceKm": 31.85866867875174,
        "gradePct": 5.356410206834359,
        "smoothedEle": 269.39834018833443,
        "gradeBand": "hard"
      },
      {
        "lat": 22.837076,
        "lng": 121.149227,
        "ele": 276.75,
        "distanceKm": 31.867579372148416,
        "gradePct": 5.449330343581002,
        "smoothedEle": 270.03929270987186,
        "gradeBand": "hard"
      },
      {
        "lat": 22.837005,
        "lng": 121.149246,
        "ele": 277,
        "distanceKm": 31.875710783633327,
        "gradePct": 5.528307324253737,
        "smoothedEle": 270.6125572195581,
        "gradeBand": "hard"
      },
      {
        "lat": 22.836915,
        "lng": 121.149244,
        "ele": 277,
        "distanceKm": 31.885720439430344,
        "gradePct": 5.662074513618072,
        "smoothedEle": 271.2969835269281,
        "gradeBand": "hard"
      },
      {
        "lat": 22.836798,
        "lng": 121.1492,
        "ele": 275.75,
        "distanceKm": 31.899489508400638,
        "gradePct": 5.846710196780655,
        "smoothedEle": 272.1988575444823,
        "gradeBand": "hard"
      },
      {
        "lat": 22.836523,
        "lng": 121.149,
        "ele": 272.25,
        "distanceKm": 31.936301624977556,
        "gradePct": 6.189250143054971,
        "smoothedEle": 274.3586499718689,
        "gradeBand": "steep"
      },
      {
        "lat": 22.836295,
        "lng": 121.148892,
        "ele": 271.5,
        "distanceKm": 31.96396465865376,
        "gradePct": 6.320373972435413,
        "smoothedEle": 275.8324601924972,
        "gradeBand": "steep"
      },
      {
        "lat": 22.836109,
        "lng": 121.148886,
        "ele": 272.5,
        "distanceKm": 31.984656081578315,
        "gradePct": 6.412144143004264,
        "smoothedEle": 277.1912769028632,
        "gradeBand": "steep"
      },
      {
        "lat": 22.835973,
        "lng": 121.148916,
        "ele": 273.75,
        "distanceKm": 32.000087957301574,
        "gradePct": 6.4373808158287265,
        "smoothedEle": 278.1193176884829,
        "gradeBand": "steep"
      },
      {
        "lat": 22.835752,
        "lng": 121.149118,
        "ele": 276.75,
        "distanceKm": 32.03221915533463,
        "gradePct": 6.260437370693291,
        "smoothedEle": 280.04375815936646,
        "gradeBand": "steep"
      },
      {
        "lat": 22.835646,
        "lng": 121.14936,
        "ele": 282.25,
        "distanceKm": 32.05967768914098,
        "gradePct": 6.085955006183376,
        "smoothedEle": 281.64282903653947,
        "gradeBand": "steep"
      },
      {
        "lat": 22.835402,
        "lng": 121.149612,
        "ele": 286.5,
        "distanceKm": 32.09713501285025,
        "gradePct": 5.684891712872534,
        "smoothedEle": 283.4144215116771,
        "gradeBand": "hard"
      },
      {
        "lat": 22.834819,
        "lng": 121.149833,
        "ele": 284,
        "distanceKm": 32.16580409548253,
        "gradePct": 4.815573385309381,
        "smoothedEle": 285.58440375460316,
        "gradeBand": "hard"
      },
      {
        "lat": 22.834747,
        "lng": 121.149884,
        "ele": 283.75,
        "distanceKm": 32.175365115949695,
        "gradePct": 4.664506628943984,
        "smoothedEle": 285.910147523503,
        "gradeBand": "hard"
      },
      {
        "lat": 22.834696,
        "lng": 121.149965,
        "ele": 285,
        "distanceKm": 32.18541822322023,
        "gradePct": 4.494854946300238,
        "smoothedEle": 286.22682040252494,
        "gradeBand": "hard"
      },
      {
        "lat": 22.834501,
        "lng": 121.150501,
        "ele": 293.75,
        "distanceKm": 32.24447256998635,
        "gradePct": 3.6222034650342945,
        "smoothedEle": 288.0017530272934,
        "gradeBand": "hard"
      },
      {
        "lat": 22.834285,
        "lng": 121.150898,
        "ele": 297.5,
        "distanceKm": 32.29171798238614,
        "gradePct": 2.881313353972148,
        "smoothedEle": 288.9208427714612,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.834227,
        "lng": 121.150961,
        "ele": 297.5,
        "distanceKm": 32.300843627520386,
        "gradePct": 2.733850756877548,
        "smoothedEle": 288.9993173677994,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.834161,
        "lng": 121.150992,
        "ele": 296.75,
        "distanceKm": 32.308840616763455,
        "gradePct": 2.6214907736084765,
        "smoothedEle": 289.02730683015017,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.833789,
        "lng": 121.151015,
        "ele": 293.75,
        "distanceKm": 32.35027228814015,
        "gradePct": 1.9673729164190097,
        "smoothedEle": 289.0283356018517,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.833337,
        "lng": 121.15109,
        "ele": 290.75,
        "distanceKm": 32.401116771760684,
        "gradePct": 1.2405477439736041,
        "smoothedEle": 289.1797501836582,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.832946,
        "lng": 121.151054,
        "ele": 288,
        "distanceKm": 32.44475030016076,
        "gradePct": 0.5664125269970474,
        "smoothedEle": 289.1399809117843,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.832567,
        "lng": 121.150866,
        "ele": 286,
        "distanceKm": 32.49108850755509,
        "gradePct": -0.40001703211634665,
        "smoothedEle": 288.1085632037596,
        "gradeBand": "descent"
      },
      {
        "lat": 22.83206,
        "lng": 121.150705,
        "ele": 284,
        "distanceKm": 32.54982930560781,
        "gradePct": -1.5991706307809808,
        "smoothedEle": 285.8299833407843,
        "gradeBand": "descent"
      },
      {
        "lat": 22.831655,
        "lng": 121.150694,
        "ele": 284.75,
        "distanceKm": 32.59487742052366,
        "gradePct": -2.4876462228262923,
        "smoothedEle": 284.18587698565983,
        "gradeBand": "descent"
      },
      {
        "lat": 22.831511,
        "lng": 121.150736,
        "ele": 286.5,
        "distanceKm": 32.61145794856812,
        "gradePct": -2.763414941481802,
        "smoothedEle": 283.6434949553917,
        "gradeBand": "descent"
      },
      {
        "lat": 22.831378,
        "lng": 121.150788,
        "ele": 288,
        "distanceKm": 32.62717775716383,
        "gradePct": -3.033344011288548,
        "smoothedEle": 283.0893091791013,
        "gradeBand": "descent"
      },
      {
        "lat": 22.831201,
        "lng": 121.151003,
        "ele": 286.25,
        "distanceKm": 32.656721857541,
        "gradePct": -3.4516456822120825,
        "smoothedEle": 281.97022096842835,
        "gradeBand": "descent"
      },
      {
        "lat": 22.831055,
        "lng": 121.15129,
        "ele": 281.25,
        "distanceKm": 32.690317458689115,
        "gradePct": -3.7924671346601455,
        "smoothedEle": 280.5407913043029,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830888,
        "lng": 121.151461,
        "ele": 278.5,
        "distanceKm": 32.71585062609567,
        "gradePct": -3.8908823877932845,
        "smoothedEle": 279.3662656036013,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830569,
        "lng": 121.151617,
        "ele": 277,
        "distanceKm": 32.754758287337204,
        "gradePct": -4.056869114705136,
        "smoothedEle": 277.536353673059,
        "gradeBand": "descent"
      },
      {
        "lat": 22.83038,
        "lng": 121.151799,
        "ele": 275.75,
        "distanceKm": 32.782857490948025,
        "gradePct": -4.154295583098642,
        "smoothedEle": 276.3159732682129,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830269,
        "lng": 121.151878,
        "ele": 276,
        "distanceKm": 32.79761858580619,
        "gradePct": -4.181648999601632,
        "smoothedEle": 275.73291002131543,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830044,
        "lng": 121.151969,
        "ele": 278,
        "distanceKm": 32.824319148107705,
        "gradePct": -4.224258437986375,
        "smoothedEle": 274.7415696420658,
        "gradeBand": "descent"
      },
      {
        "lat": 22.83,
        "lng": 121.152016,
        "ele": 278.25,
        "distanceKm": 32.831184893491766,
        "gradePct": -4.228426638175986,
        "smoothedEle": 274.4806713174715,
        "gradeBand": "descent"
      },
      {
        "lat": 22.82996,
        "lng": 121.152151,
        "ele": 278,
        "distanceKm": 32.845717612054,
        "gradePct": -4.229309007813808,
        "smoothedEle": 273.9284280121065,
        "gradeBand": "descent"
      },
      {
        "lat": 22.829996,
        "lng": 121.152255,
        "ele": 277,
        "distanceKm": 32.857102888214754,
        "gradePct": -4.237765055009131,
        "smoothedEle": 273.4784787196362,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830056,
        "lng": 121.15234,
        "ele": 275.75,
        "distanceKm": 32.86807538482108,
        "gradePct": -4.234757933405202,
        "smoothedEle": 273.0176338621704,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830338,
        "lng": 121.152605,
        "ele": 269.25,
        "distanceKm": 32.9095582995905,
        "gradePct": -4.1933427547847915,
        "smoothedEle": 271.2690271132696,
        "gradeBand": "descent"
      },
      {
        "lat": 22.83048,
        "lng": 121.152991,
        "ele": 265,
        "distanceKm": 32.952151820196505,
        "gradePct": -3.68156490630921,
        "smoothedEle": 270.29581167901244,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830536,
        "lng": 121.153324,
        "ele": 262.5,
        "distanceKm": 32.986842328739996,
        "gradePct": -3.1676033726017017,
        "smoothedEle": 269.82336543022666,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8305,
        "lng": 121.153406,
        "ele": 262,
        "distanceKm": 32.996150697281756,
        "gradePct": -3.0349591208817084,
        "smoothedEle": 269.72097337626724,
        "gradeBand": "descent"
      },
      {
        "lat": 22.83044,
        "lng": 121.153465,
        "ele": 262.25,
        "distanceKm": 33.00515471210406,
        "gradePct": -2.9155894870204557,
        "smoothedEle": 269.6219292132219,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830254,
        "lng": 121.153564,
        "ele": 264.25,
        "distanceKm": 33.02819155519114,
        "gradePct": -2.787798224465337,
        "smoothedEle": 269.01882172396455,
        "gradeBand": "descent"
      },
      {
        "lat": 22.829849,
        "lng": 121.153728,
        "ele": 265.75,
        "distanceKm": 33.076259734875464,
        "gradePct": -2.486270032803724,
        "smoothedEle": 267.7001033391661,
        "gradeBand": "descent"
      },
      {
        "lat": 22.829422,
        "lng": 121.153752,
        "ele": 265.5,
        "distanceKm": 33.12380369947098,
        "gradePct": -2.1135331474484915,
        "smoothedEle": 266.71646898690153,
        "gradeBand": "descent"
      },
      {
        "lat": 22.828875,
        "lng": 121.153619,
        "ele": 271.25,
        "distanceKm": 33.18613597992653,
        "gradePct": -1.922363392884365,
        "smoothedEle": 265.9882583318383,
        "gradeBand": "descent"
      },
      {
        "lat": 22.828752,
        "lng": 121.153604,
        "ele": 272.25,
        "distanceKm": 33.19989909735802,
        "gradePct": -1.8956107347543438,
        "smoothedEle": 265.8885195059196,
        "gradeBand": "descent"
      },
      {
        "lat": 22.828666,
        "lng": 121.15362,
        "ele": 272,
        "distanceKm": 33.20960144332079,
        "gradePct": -1.844880655901536,
        "smoothedEle": 265.8157519111988,
        "gradeBand": "descent"
      },
      {
        "lat": 22.828581,
        "lng": 121.153651,
        "ele": 271.5,
        "distanceKm": 33.21957270058875,
        "gradePct": -1.7515594120412494,
        "smoothedEle": 265.74134561229164,
        "gradeBand": "descent"
      },
      {
        "lat": 22.827995,
        "lng": 121.15395,
        "ele": 263.25,
        "distanceKm": 33.291578727318296,
        "gradePct": -0.6150200717399824,
        "smoothedEle": 266.15312944106466,
        "gradeBand": "descent"
      },
      {
        "lat": 22.827907,
        "lng": 121.153976,
        "ele": 262.5,
        "distanceKm": 33.30172021271004,
        "gradePct": -0.47968731122818326,
        "smoothedEle": 266.21397835341514,
        "gradeBand": "descent"
      },
      {
        "lat": 22.827828,
        "lng": 121.153978,
        "ele": 262.25,
        "distanceKm": 33.31050701507596,
        "gradePct": -0.37485413450724003,
        "smoothedEle": 266.2418550574827,
        "gradeBand": "descent"
      },
      {
        "lat": 22.827749,
        "lng": 121.153948,
        "ele": 263,
        "distanceKm": 33.31981394132027,
        "gradePct": -0.26461851393343827,
        "smoothedEle": 266.2697758362157,
        "gradeBand": "descent"
      },
      {
        "lat": 22.827634,
        "lng": 121.15385,
        "ele": 265.25,
        "distanceKm": 33.3360740939166,
        "gradePct": -0.12728054771443273,
        "smoothedEle": 266.3185562940047,
        "gradeBand": "descent"
      },
      {
        "lat": 22.827475,
        "lng": 121.153678,
        "ele": 268.75,
        "distanceKm": 33.36104036111552,
        "gradePct": -0.011247732090396152,
        "smoothedEle": 266.25894798586637,
        "gradeBand": "descent"
      },
      {
        "lat": 22.827392,
        "lng": 121.153647,
        "ele": 268.25,
        "distanceKm": 33.370801084848175,
        "gradePct": 0.009165461009587131,
        "smoothedEle": 266.1857425578715,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.827239,
        "lng": 121.153628,
        "ele": 266.5,
        "distanceKm": 33.38792500669849,
        "gradePct": 0.041009783005221706,
        "smoothedEle": 266.0573131439941,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.826854,
        "lng": 121.153615,
        "ele": 261.75,
        "distanceKm": 33.43075583960843,
        "gradePct": -0.33151440279024297,
        "smoothedEle": 265.1422702841127,
        "gradeBand": "descent"
      },
      {
        "lat": 22.826707,
        "lng": 121.153548,
        "ele": 261.25,
        "distanceKm": 33.44848522987956,
        "gradePct": -0.6223422967208787,
        "smoothedEle": 264.6620042901235,
        "gradeBand": "descent"
      },
      {
        "lat": 22.826317,
        "lng": 121.15314,
        "ele": 266.5,
        "distanceKm": 33.50872703835022,
        "gradePct": -1.6090682105023346,
        "smoothedEle": 263.018071544127,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825935,
        "lng": 121.152661,
        "ele": 267.25,
        "distanceKm": 33.57364396475404,
        "gradePct": -2.424083880118581,
        "smoothedEle": 261.3162531983403,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825704,
        "lng": 121.15225,
        "ele": 261.75,
        "distanceKm": 33.62298013353042,
        "gradePct": -3.166074186239866,
        "smoothedEle": 258.97624299412934,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825602,
        "lng": 121.151819,
        "ele": 257.5,
        "distanceKm": 33.66858504825219,
        "gradePct": -3.6883331766968057,
        "smoothedEle": 256.73683598351505,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825697,
        "lng": 121.15139,
        "ele": 258.75,
        "distanceKm": 33.71380331475387,
        "gradePct": -3.982337865933431,
        "smoothedEle": 254.9203195748198,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825691,
        "lng": 121.151012,
        "ele": 256,
        "distanceKm": 33.75254926367931,
        "gradePct": -4.307590116638802,
        "smoothedEle": 253.25407741669898,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825521,
        "lng": 121.150767,
        "ele": 251,
        "distanceKm": 33.78397873975233,
        "gradePct": -4.5381854614645,
        "smoothedEle": 251.74970479398115,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825383,
        "lng": 121.150679,
        "ele": 247.5,
        "distanceKm": 33.801777817057385,
        "gradePct": -4.551203207329926,
        "smoothedEle": 250.87946061008057,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825053,
        "lng": 121.150602,
        "ele": 243,
        "distanceKm": 33.83931118671485,
        "gradePct": -4.694304526378507,
        "smoothedEle": 248.78570556994453,
        "gradeBand": "descent"
      },
      {
        "lat": 22.824447,
        "lng": 121.150631,
        "ele": 241.25,
        "distanceKm": 33.906760920672156,
        "gradePct": -4.739088073684901,
        "smoothedEle": 245.72505176064436,
        "gradeBand": "descent"
      },
      {
        "lat": 22.824309,
        "lng": 121.15061,
        "ele": 241,
        "distanceKm": 33.92225604253868,
        "gradePct": -4.662771522065104,
        "smoothedEle": 245.23127294446255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823865,
        "lng": 121.150195,
        "ele": 243,
        "distanceKm": 33.9874211514118,
        "gradePct": -3.9019033846305726,
        "smoothedEle": 243.77758937175423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823786,
        "lng": 121.150151,
        "ele": 243,
        "distanceKm": 33.99729543650149,
        "gradePct": -3.7174172305844495,
        "smoothedEle": 243.66378164455583,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823714,
        "lng": 121.150142,
        "ele": 242.75,
        "distanceKm": 34.00535444319451,
        "gradePct": -3.5423313124424913,
        "smoothedEle": 243.59528008766512,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823612,
        "lng": 121.150148,
        "ele": 242.5,
        "distanceKm": 34.01671299931177,
        "gradePct": -3.273793305114761,
        "smoothedEle": 243.49873236066844,
        "gradeBand": "descent"
      },
      {
        "lat": 22.822971,
        "lng": 121.150284,
        "ele": 239.25,
        "distanceKm": 34.08933914578211,
        "gradePct": -1.2462763783846464,
        "smoothedEle": 244.02304358505518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.822468,
        "lng": 121.150268,
        "ele": 239,
        "distanceKm": 34.145294304931944,
        "gradePct": 0.40264126869164724,
        "smoothedEle": 245.52262488057826,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.822116,
        "lng": 121.150317,
        "ele": 244.5,
        "distanceKm": 34.1847558359855,
        "gradePct": 1.5194788563584394,
        "smoothedEle": 246.87600413623255,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.821787,
        "lng": 121.150517,
        "ele": 249.75,
        "distanceKm": 34.22669028765885,
        "gradePct": 2.4320037918320105,
        "smoothedEle": 248.43476915865205,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.821645,
        "lng": 121.150837,
        "ele": 251.75,
        "distanceKm": 34.26309016713279,
        "gradePct": 2.9346764960581035,
        "smoothedEle": 249.7028968611133,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.821593,
        "lng": 121.150897,
        "ele": 250.5,
        "distanceKm": 34.27153105528348,
        "gradePct": 3.047702868022895,
        "smoothedEle": 249.98988705823695,
        "gradeBand": "hard"
      },
      {
        "lat": 22.821524,
        "lng": 121.150937,
        "ele": 249.75,
        "distanceKm": 34.280230107573296,
        "gradePct": 3.16446713393192,
        "smoothedEle": 250.286216812187,
        "gradeBand": "hard"
      },
      {
        "lat": 22.821427,
        "lng": 121.15094,
        "ele": 250,
        "distanceKm": 34.29102041197018,
        "gradePct": 3.295190652433443,
        "smoothedEle": 250.65848231387955,
        "gradeBand": "hard"
      },
      {
        "lat": 22.821328,
        "lng": 121.150923,
        "ele": 250.75,
        "distanceKm": 34.302165756335455,
        "gradePct": 3.3381019182810925,
        "smoothedEle": 251.04299669448153,
        "gradeBand": "hard"
      },
      {
        "lat": 22.820961659566393,
        "lng": 121.15077085938914,
        "ele": 254.68071530302387,
        "distanceKm": 34.34578344390016,
        "gradePct": 3.6358897729020665,
        "smoothedEle": 252.81118001807997,
        "gradeBand": "hard"
      },
      {
        "lat": 22.820608,
        "lng": 121.150585,
        "ele": 256.75,
        "distanceKm": 34.389479357568845,
        "gradePct": 3.783714020650638,
        "smoothedEle": 254.61901239697053,
        "gradeBand": "hard"
      },
      {
        "lat": 22.820345,
        "lng": 121.15036,
        "ele": 259,
        "distanceKm": 34.42672204071144,
        "gradePct": 3.801667470082111,
        "smoothedEle": 256.0392103366998,
        "gradeBand": "hard"
      },
      {
        "lat": 22.82019,
        "lng": 121.149951,
        "ele": 261.5,
        "distanceKm": 34.47204592464092,
        "gradePct": 3.5745123484272825,
        "smoothedEle": 257.15645057483005,
        "gradeBand": "hard"
      },
      {
        "lat": 22.820052,
        "lng": 121.149598,
        "ele": 259.5,
        "distanceKm": 34.51134507229631,
        "gradePct": 3.1456040182919316,
        "smoothedEle": 257.70631784182905,
        "gradeBand": "hard"
      },
      {
        "lat": 22.819911,
        "lng": 121.149287,
        "ele": 259.75,
        "distanceKm": 34.54686723846461,
        "gradePct": 2.641467729841528,
        "smoothedEle": 258.1389553435804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.819824,
        "lng": 121.148912,
        "ele": 259.5,
        "distanceKm": 34.58650040461661,
        "gradePct": 1.9092477113023718,
        "smoothedEle": 258.31425950754584,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.819646,
        "lng": 121.148627,
        "ele": 259.75,
        "distanceKm": 34.62178475727468,
        "gradePct": 1.1118536091732933,
        "smoothedEle": 258.07464111594294,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.819505,
        "lng": 121.148574,
        "ele": 260.25,
        "distanceKm": 34.63837761608043,
        "gradePct": 0.7267979656156353,
        "smoothedEle": 257.7801178721408,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.819044333333334,
        "lng": 121.14857933333333,
        "ele": 258.91666666666674,
        "distanceKm": 34.68960439955413,
        "gradePct": -0.4293369723631538,
        "smoothedEle": 256.54345194850646,
        "gradeBand": "descent"
      },
      {
        "lat": 22.818583666666665,
        "lng": 121.14858466666666,
        "ele": 257.58333333333326,
        "distanceKm": 34.74083118304795,
        "gradePct": -1.7463307302430202,
        "smoothedEle": 254.5727785483728,
        "gradeBand": "descent"
      },
      {
        "lat": 22.818123,
        "lng": 121.14859,
        "ele": 256.25,
        "distanceKm": 34.79205796656111,
        "gradePct": -3.0028362112655884,
        "smoothedEle": 252.2708453112805,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81767375,
        "lng": 121.1486335,
        "ele": 252.0624999999997,
        "distanceKm": 34.84221092127406,
        "gradePct": -3.986311370790347,
        "smoothedEle": 249.71495529912048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.817224500000002,
        "lng": 121.14867699999999,
        "ele": 247.875,
        "distanceKm": 34.89236387729436,
        "gradePct": -4.661066467589171,
        "smoothedEle": 247.11516303377906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81677525,
        "lng": 121.1487205,
        "ele": 243.6875000000003,
        "distanceKm": 34.942516834622644,
        "gradePct": -5.014668134215397,
        "smoothedEle": 244.46769562712035,
        "gradeBand": "descent"
      },
      {
        "lat": 22.816326,
        "lng": 121.148764,
        "ele": 239.5,
        "distanceKm": 34.99266979325798,
        "gradePct": -5.222113875511862,
        "smoothedEle": 241.79543770749126,
        "gradeBand": "descent"
      },
      {
        "lat": 22.815861,
        "lng": 121.148853,
        "ele": 234.25,
        "distanceKm": 35.045174000951285,
        "gradePct": -5.285193160492081,
        "smoothedEle": 238.99097102025476,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8154235,
        "lng": 121.148991,
        "ele": 234,
        "distanceKm": 35.095836354931535,
        "gradePct": -5.224295718462227,
        "smoothedEle": 236.48326692541514,
        "gradeBand": "descent"
      },
      {
        "lat": 22.814986,
        "lng": 121.149129,
        "ele": 233.75,
        "distanceKm": 35.146498721597,
        "gradePct": -4.8718993051176245,
        "smoothedEle": 234.5117334817355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81457,
        "lng": 121.1492685,
        "ele": 232.25,
        "distanceKm": 35.19491525448797,
        "gradePct": -4.259891014636121,
        "smoothedEle": 233.15571631538245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.814154,
        "lng": 121.149408,
        "ele": 230.75,
        "distanceKm": 35.2433318002749,
        "gradePct": -3.4391568181898515,
        "smoothedEle": 232.2110569342178,
        "gradeBand": "descent"
      },
      {
        "lat": 22.813806488457,
        "lng": 121.14952123513316,
        "ele": 229.74976001936434,
        "distanceKm": 35.283678723975235,
        "gradePct": -2.7024719819725833,
        "smoothedEle": 231.68010591345342,
        "gradeBand": "descent"
      },
      {
        "lat": 22.813458,
        "lng": 121.149631,
        "ele": 229,
        "distanceKm": 35.324029089074855,
        "gradePct": -2.0470558890818604,
        "smoothedEle": 231.2920307551094,
        "gradeBand": "descent"
      },
      {
        "lat": 22.813034,
        "lng": 121.14973950000001,
        "ele": 230.25000000000009,
        "distanceKm": 35.372469638602944,
        "gradePct": -1.444308371681438,
        "smoothedEle": 230.89574104285768,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81261,
        "lng": 121.149848,
        "ele": 231.5,
        "distanceKm": 35.42091019607751,
        "gradePct": -0.9989451894569613,
        "smoothedEle": 230.65063639958066,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81219,
        "lng": 121.149985,
        "ele": 231.75,
        "distanceKm": 35.469677522256056,
        "gradePct": -0.6426046515180042,
        "smoothedEle": 230.5791473949367,
        "gradeBand": "descent"
      },
      {
        "lat": 22.811836,
        "lng": 121.150124,
        "ele": 231,
        "distanceKm": 35.51153958334139,
        "gradePct": -0.3763302366737893,
        "smoothedEle": 230.6594898123581,
        "gradeBand": "descent"
      },
      {
        "lat": 22.811438,
        "lng": 121.150392,
        "ele": 229.25,
        "distanceKm": 35.56362731437219,
        "gradePct": -0.0814742582921883,
        "smoothedEle": 230.8051311384315,
        "gradeBand": "descent"
      },
      {
        "lat": 22.811182537255355,
        "lng": 121.15074481197158,
        "ele": 230.13207801399014,
        "distanceKm": 35.60961256993117,
        "gradePct": 0.049943078136720234,
        "smoothedEle": 230.80768747654952,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.810924,
        "lng": 121.151095,
        "ele": 231.5,
        "distanceKm": 35.65559961686329,
        "gradePct": -0.048931211705023986,
        "smoothedEle": 230.50192205628943,
        "gradeBand": "descent"
      },
      {
        "lat": 22.810602,
        "lng": 121.151315,
        "ele": 231.5,
        "distanceKm": 35.69791359751911,
        "gradePct": -0.3493790422020545,
        "smoothedEle": 229.93458049191042,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81011,
        "lng": 121.151473,
        "ele": 231.75,
        "distanceKm": 35.75496826598996,
        "gradePct": -0.9255741287984318,
        "smoothedEle": 228.92977151159343,
        "gradeBand": "descent"
      },
      {
        "lat": 22.809690068411673,
        "lng": 121.15172248284668,
        "ele": 230.60365915120454,
        "distanceKm": 35.80820619138393,
        "gradePct": -1.3952799023864573,
        "smoothedEle": 228.01704949064992,
        "gradeBand": "descent"
      },
      {
        "lat": 22.809287,
        "lng": 121.152004,
        "ele": 228.25,
        "distanceKm": 35.86151093097854,
        "gradePct": -1.7715846075452963,
        "smoothedEle": 226.87949454061587,
        "gradeBand": "descent"
      },
      {
        "lat": 22.808928431737026,
        "lng": 121.1521387889725,
        "ele": 226.0851042065502,
        "distanceKm": 35.903707806123165,
        "gradePct": -2.0347569283951255,
        "smoothedEle": 225.76302287612157,
        "gradeBand": "descent"
      },
      {
        "lat": 22.808562,
        "lng": 121.152248,
        "ele": 223.75,
        "distanceKm": 35.94596294622359,
        "gradePct": -2.3696982081972155,
        "smoothedEle": 224.3489708142592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.80822668517955,
        "lng": 121.1523179294262,
        "ele": 222.36307149441473,
        "distanceKm": 35.98393102695127,
        "gradePct": -2.8202960683149625,
        "smoothedEle": 222.79263580154122,
        "gradeBand": "descent"
      },
      {
        "lat": 22.807885,
        "lng": 121.15234,
        "ele": 221.75,
        "distanceKm": 36.02199202841782,
        "gradePct": -3.4261481374096916,
        "smoothedEle": 220.87055522748034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.80723,
        "lng": 121.152358,
        "ele": 219,
        "distanceKm": 36.09484817143258,
        "gradePct": -4.6412709973561785,
        "smoothedEle": 216.71489471077226,
        "gradeBand": "descent"
      },
      {
        "lat": 22.806985,
        "lng": 121.15246,
        "ele": 218.5,
        "distanceKm": 36.124028295843935,
        "gradePct": -5.0324580790993565,
        "smoothedEle": 215.01808932076312,
        "gradeBand": "descent"
      },
      {
        "lat": 22.806849,
        "lng": 121.152436,
        "ele": 216.75,
        "distanceKm": 36.1393496114447,
        "gradePct": -5.244126621019344,
        "smoothedEle": 214.08203028489038,
        "gradeBand": "descent"
      },
      {
        "lat": 22.806578,
        "lng": 121.152674,
        "ele": 214.5,
        "distanceKm": 36.17812053482473,
        "gradePct": -5.604068473486128,
        "smoothedEle": 211.8226745053877,
        "gradeBand": "descent"
      },
      {
        "lat": 22.806577,
        "lng": 121.15263,
        "ele": 214.5,
        "distanceKm": 36.18263198015348,
        "gradePct": -5.633414036100609,
        "smoothedEle": 211.5790564576351,
        "gradeBand": "descent"
      },
      {
        "lat": 22.806068,
        "lng": 121.15223,
        "ele": 206.5,
        "distanceKm": 36.25252067120175,
        "gradePct": -5.8310310098933105,
        "smoothedEle": 207.46716200079518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.805708178934402,
        "lng": 121.15202290623866,
        "ele": 203.01832285387104,
        "distanceKm": 36.297813456647035,
        "gradePct": -6.002640302887542,
        "smoothedEle": 204.53718468475654,
        "gradeBand": "descent"
      },
      {
        "lat": 22.805325,
        "lng": 121.151869,
        "ele": 199.25,
        "distanceKm": 36.34324784530243,
        "gradePct": -6.081919275417348,
        "smoothedEle": 201.69102414482956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.804906,
        "lng": 121.151503,
        "ele": 196.75,
        "distanceKm": 36.403065476725224,
        "gradePct": -5.635286845059047,
        "smoothedEle": 199.10627995005146,
        "gradeBand": "descent"
      },
      {
        "lat": 22.804308,
        "lng": 121.151219,
        "ele": 193.25,
        "distanceKm": 36.47565324603935,
        "gradePct": -4.828665017333452,
        "smoothedEle": 196.31339232636248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.803771,
        "lng": 121.151039,
        "ele": 189,
        "distanceKm": 36.53815061017895,
        "gradePct": -3.7754184521614635,
        "smoothedEle": 194.45949492573172,
        "gradeBand": "descent"
      },
      {
        "lat": 22.803253,
        "lng": 121.150668,
        "ele": 187.5,
        "distanceKm": 36.60717129204363,
        "gradePct": -3.149729568652843,
        "smoothedEle": 192.6488454279629,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 36.60717129204363,
      "elevationGainM": 805.0562147151898,
      "elevationLossM": 657.9073692872269,
      "minimumElevationM": 43.75,
      "maximumElevationM": 496,
      "maximumSustainedGradePct": 10.029710068515904
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 111,
        "startDistanceKm": 0,
        "endDistanceKm": 4.840517423146538,
        "distanceKm": 4.840517423146538,
        "gainM": 214.1708943917432,
        "averageGradePct": 4.4245454704411165,
        "maximumGradePct": 9.795394660223057
      },
      {
        "startIndex": 123,
        "endIndex": 175,
        "startDistanceKm": 5.256519444424405,
        "endDistanceKm": 7.115064887192266,
        "distanceKm": 1.858545442767861,
        "gainM": 46.23392534852033,
        "averageGradePct": 2.487640295717812,
        "maximumGradePct": 4.641348651343118
      },
      {
        "startIndex": 259,
        "endIndex": 422,
        "startDistanceKm": 9.635749941593087,
        "endDistanceKm": 14.47697858065011,
        "distanceKm": 4.841228639057023,
        "gainM": 168.13222159949606,
        "averageGradePct": 3.472924625849626,
        "maximumGradePct": 9.723759263989185
      },
      {
        "startIndex": 453,
        "endIndex": 560,
        "startDistanceKm": 15.828972169078536,
        "endDistanceKm": 19.760189219289764,
        "distanceKm": 3.9312170502112274,
        "gainM": 200.0215351592609,
        "averageGradePct": 5.088030821104462,
        "maximumGradePct": 10.029710068515904
      },
      {
        "startIndex": 673,
        "endIndex": 714,
        "startDistanceKm": 23.45352005039633,
        "endDistanceKm": 24.944015981340762,
        "distanceKm": 1.4904959309444301,
        "gainM": 44.077002463437225,
        "averageGradePct": 2.957203810379308,
        "maximumGradePct": 6.152421230083995
      },
      {
        "startIndex": 835,
        "endIndex": 964,
        "startDistanceKm": 28.325982252682493,
        "endDistanceKm": 32.401116771760684,
        "distanceKm": 4.0751345190781905,
        "gainM": 118.96366671609621,
        "averageGradePct": 2.9192574173724752,
        "maximumGradePct": 6.4373808158287265
      }
    ]
  },
  "taitung-dulan-coast": {
    "routeId": "taitung-dulan-coast",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T17:22:59.725Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "66d8549dbf8a325c16429edbb0bc3e8883df04cbe242dbd9e41e80c307c75433",
      "roadPolicyAuditSha256": "d377aa151f9bd0bdfc7684243a0d910ba62e87be82312b2f0df4cd328dd1f4e2",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "台11都蘭海岸跨越海階與橋梁；500/200、750/300、1000/500公尺三組分析的爬升依序約308、252、216公尺，最大持續坡度依序約4.7%、3.4%、2.7%。500/200公尺仍能反映海階緩起伏，並與官方海岸自行車資料交叉檢核，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://www.eastcoast-nsa.gov.tw/zh-tw/travel/cycling/holyland/",
        "referenceLabel": "東部海岸國家風景區單車聖地官方資料"
      },
      "reviewedAt": "2026-07-29T18:05:00.000Z",
      "reviewerNote": "初版金樽景點控制點導入service 426公尺，加路蘭景點控制點導入track 492公尺，均未採用。重建時把富岡、加路蘭、都蘭、金樽與東河去回控制點逐一移到live OSM台11 primary主線節點。最終raw為53.768公里，除起點零長度living_street標記外全程53.768公里皆為primary；service、track、path、footway、steps、construction、private、access=no與bicycle=no全為零。live OSM五個窗口皆命中ref=11或23 primary，距離0.0公尺。500/200公尺正式分析為53.8公里、爬升304公尺、最高90公尺、最大持續坡度4.8%。"
    },
    "waypoints": [
      {
        "name": "富岡台11主線",
        "lat": 22.7935091,
        "lng": 121.1923896,
        "role": "start"
      },
      {
        "name": "加路蘭台11主線",
        "lat": 22.8124269,
        "lng": 121.1935908,
        "role": "via"
      },
      {
        "name": "都蘭台11主線",
        "lat": 22.8739522,
        "lng": 121.2281259,
        "role": "via"
      },
      {
        "name": "金樽台11主線",
        "lat": 22.9451285,
        "lng": 121.2793612,
        "role": "via"
      },
      {
        "name": "東河橋台11主線",
        "lat": 22.9767239,
        "lng": 121.3075911,
        "role": "via"
      },
      {
        "name": "回程金樽台11主線",
        "lat": 22.9451285,
        "lng": 121.2793612,
        "role": "via"
      },
      {
        "name": "回程都蘭台11主線",
        "lat": 22.8739522,
        "lng": 121.2281259,
        "role": "via"
      },
      {
        "name": "回程加路蘭台11主線",
        "lat": 22.8124269,
        "lng": 121.1935908,
        "role": "via"
      },
      {
        "name": "富岡台11主線",
        "lat": 22.7935091,
        "lng": 121.1923896,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.793509,
        "lng": 121.19239,
        "ele": 28.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 26.26653316030055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793579,
        "lng": 121.192771,
        "ele": 27.25,
        "distanceKm": 0.03982493363776737,
        "gradePct": -0.19885732561865144,
        "smoothedEle": 26.187338362339084,
        "gradeBand": "descent"
      },
      {
        "lat": 22.793848,
        "lng": 121.193277,
        "ele": 25.75,
        "distanceKm": 0.09970207198943934,
        "gradePct": -0.20643791374869744,
        "smoothedEle": 26.060710282921328,
        "gradeBand": "descent"
      },
      {
        "lat": 22.7940805,
        "lng": 121.193564,
        "ele": 25.75,
        "distanceKm": 0.1388677248880265,
        "gradePct": -0.20701377152739434,
        "smoothedEle": 25.97905784557556,
        "gradeBand": "descent"
      },
      {
        "lat": 22.794313,
        "lng": 121.193851,
        "ele": 25.75,
        "distanceKm": 0.1780333400990697,
        "gradePct": -0.2210892318970344,
        "smoothedEle": 25.872920616154882,
        "gradeBand": "descent"
      },
      {
        "lat": 22.794565,
        "lng": 121.19414,
        "ele": 25.75,
        "distanceKm": 0.21881156155522427,
        "gradePct": -0.23348425763028402,
        "smoothedEle": 25.762156476824156,
        "gradeBand": "descent"
      },
      {
        "lat": 22.794903917390126,
        "lng": 121.1944442012609,
        "ele": 25.69019504829245,
        "distanceKm": 0.2677264204218945,
        "gradePct": -0.3042155173873198,
        "smoothedEle": 25.519901306541477,
        "gradeBand": "descent"
      },
      {
        "lat": 22.795267958695064,
        "lng": 121.19471360063044,
        "ele": 25.470097524146226,
        "distanceKm": 0.31672901099841816,
        "gradePct": -0.42240873384411515,
        "smoothedEle": 25.180395103137737,
        "gradeBand": "descent"
      },
      {
        "lat": 22.795632,
        "lng": 121.194983,
        "ele": 25.25,
        "distanceKm": 0.3657315600173609,
        "gradePct": -0.4726336940945668,
        "smoothedEle": 24.96099055326447,
        "gradeBand": "descent"
      },
      {
        "lat": 22.796051,
        "lng": 121.195305,
        "ele": 24.75,
        "distanceKm": 0.4228300250952208,
        "gradePct": -0.5248812269730205,
        "smoothedEle": 24.692492226333837,
        "gradeBand": "descent"
      },
      {
        "lat": 22.79638,
        "lng": 121.195523,
        "ele": 24.5,
        "distanceKm": 0.4656986695295211,
        "gradePct": -0.5258974591224224,
        "smoothedEle": 24.47814900416233,
        "gradeBand": "descent"
      },
      {
        "lat": 22.796714795162416,
        "lng": 121.19571640682729,
        "ele": 24.14907539253682,
        "distanceKm": 0.5078764138828864,
        "gradePct": -0.5055335461008887,
        "smoothedEle": 24.230661740471415,
        "gradeBand": "descent"
      },
      {
        "lat": 22.797058,
        "lng": 121.195892,
        "ele": 23.75,
        "distanceKm": 0.5500710402401967,
        "gradePct": -0.5301216138996239,
        "smoothedEle": 23.9708659082998,
        "gradeBand": "descent"
      },
      {
        "lat": 22.797439333333333,
        "lng": 121.196055,
        "ele": 23.583333333333332,
        "distanceKm": 0.5956468096828748,
        "gradePct": -0.5756839677797174,
        "smoothedEle": 23.668949931075897,
        "gradeBand": "descent"
      },
      {
        "lat": 22.797820666666667,
        "lng": 121.196218,
        "ele": 23.416666666666668,
        "distanceKm": 0.6412225619894454,
        "gradePct": -0.6281175622539976,
        "smoothedEle": 23.344294417354718,
        "gradeBand": "descent"
      },
      {
        "lat": 22.798202,
        "lng": 121.196381,
        "ele": 23.25,
        "distanceKm": 0.6867982971596787,
        "gradePct": -0.6665217177930209,
        "smoothedEle": 23.02129882672362,
        "gradeBand": "descent"
      },
      {
        "lat": 22.798776,
        "lng": 121.196523,
        "ele": 22.75,
        "distanceKm": 0.7522630618748471,
        "gradePct": -0.6930854823423191,
        "smoothedEle": 22.57017393032204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.799091,
        "lng": 121.196546,
        "ele": 22.5,
        "distanceKm": 0.7873687712804851,
        "gradePct": -0.6840071388871947,
        "smoothedEle": 22.355773390202426,
        "gradeBand": "descent"
      },
      {
        "lat": 22.799542666666667,
        "lng": 121.196572,
        "ele": 22,
        "distanceKm": 0.8376625494235042,
        "gradePct": -0.6771530170608548,
        "smoothedEle": 22.01534787045935,
        "gradeBand": "descent"
      },
      {
        "lat": 22.799994333333334,
        "lng": 121.196598,
        "ele": 21.5,
        "distanceKm": 0.8879563270984439,
        "gradePct": -0.7198945461313573,
        "smoothedEle": 21.573529622740832,
        "gradeBand": "descent"
      },
      {
        "lat": 22.800446,
        "lng": 121.196624,
        "ele": 21,
        "distanceKm": 0.9382501043054514,
        "gradePct": -0.8119476390334237,
        "smoothedEle": 21.042843484639118,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8008755,
        "lng": 121.19664449999999,
        "ele": 21,
        "distanceKm": 0.9860545994371203,
        "gradePct": -0.9314790716953227,
        "smoothedEle": 20.500841267587255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.801305,
        "lng": 121.196665,
        "ele": 21,
        "distanceKm": 1.0338590942777683,
        "gradePct": -1.0428426519805432,
        "smoothedEle": 19.95540716637948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.801783389227616,
        "lng": 121.19669121940959,
        "ele": 19.735028484664465,
        "distanceKm": 1.0871214753759812,
        "gradePct": -1.1486917706732123,
        "smoothedEle": 19.28348004480251,
        "gradeBand": "descent"
      },
      {
        "lat": 22.802261778455236,
        "lng": 121.19671743881918,
        "ele": 18.47005696932893,
        "distanceKm": 1.1403838559985555,
        "gradePct": -1.2296022837216152,
        "smoothedEle": 18.559446670313765,
        "gradeBand": "descent"
      },
      {
        "lat": 22.80274,
        "lng": 121.196747,
        "ele": 17.5,
        "distanceKm": 1.193646004080835,
        "gradePct": -1.2873802720154637,
        "smoothedEle": 17.839465207953634,
        "gradeBand": "descent"
      },
      {
        "lat": 22.803187,
        "lng": 121.196759,
        "ele": 17.25,
        "distanceKm": 1.2433654229632953,
        "gradePct": -1.3336139087710852,
        "smoothedEle": 17.168253053040424,
        "gradeBand": "descent"
      },
      {
        "lat": 22.803702,
        "lng": 121.196787,
        "ele": 16.125,
        "distanceKm": 1.300702768427176,
        "gradePct": -1.3523304958353946,
        "smoothedEle": 16.394198889278034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.804217,
        "lng": 121.196815,
        "ele": 15,
        "distanceKm": 1.3580401133481252,
        "gradePct": -1.2901658409831955,
        "smoothedEle": 15.740443090122161,
        "gradeBand": "descent"
      },
      {
        "lat": 22.804692,
        "lng": 121.196818,
        "ele": 14.5,
        "distanceKm": 1.4108586716284133,
        "gradePct": -1.1634490939390987,
        "smoothedEle": 15.280196008183133,
        "gradeBand": "descent"
      },
      {
        "lat": 22.805104,
        "lng": 121.196763,
        "ele": 14.25,
        "distanceKm": 1.457016626184836,
        "gradePct": -1.0078681743684748,
        "smoothedEle": 14.968225460812674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.805438322823527,
        "lng": 121.19669498314828,
        "ele": 14.25,
        "distanceKm": 1.4948397950762655,
        "gradePct": -0.8689035628599202,
        "smoothedEle": 14.735541903795482,
        "gradeBand": "descent"
      },
      {
        "lat": 22.805771,
        "lng": 121.196618,
        "ele": 14.25,
        "distanceKm": 1.5326641277912014,
        "gradePct": -0.7486322792522782,
        "smoothedEle": 14.532513479721791,
        "gradeBand": "descent"
      },
      {
        "lat": 22.806205333333335,
        "lng": 121.19648666666667,
        "ele": 14.25,
        "distanceKm": 1.5828009562598677,
        "gradePct": -0.5667316912276441,
        "smoothedEle": 14.391220208212054,
        "gradeBand": "descent"
      },
      {
        "lat": 22.806639666666666,
        "lng": 121.19635533333333,
        "ele": 14.25,
        "distanceKm": 1.6329377732069514,
        "gradePct": -0.35944855969562817,
        "smoothedEle": 14.412071535216564,
        "gradeBand": "descent"
      },
      {
        "lat": 22.807074,
        "lng": 121.196224,
        "ele": 14.25,
        "distanceKm": 1.6830745786322578,
        "gradePct": -0.1670530298563522,
        "smoothedEle": 14.473814031619813,
        "gradeBand": "descent"
      },
      {
        "lat": 22.807391,
        "lng": 121.196112,
        "ele": 14.25,
        "distanceKm": 1.7201457838437342,
        "gradePct": -0.034674306166916594,
        "smoothedEle": 14.530359169606621,
        "gradeBand": "descent"
      },
      {
        "lat": 22.80783,
        "lng": 121.195936,
        "ele": 14.25,
        "distanceKm": 1.77218727266743,
        "gradePct": 0.07773923462987843,
        "smoothedEle": 14.576609665528864,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8081875,
        "lng": 121.19577050000001,
        "ele": 14.75,
        "distanceKm": 1.815407788531754,
        "gradePct": 0.08591432491837561,
        "smoothedEle": 14.576609665528864,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.808545,
        "lng": 121.195605,
        "ele": 15.25,
        "distanceKm": 1.858628286926049,
        "gradePct": 0.04904242680323724,
        "smoothedEle": 14.541793754575473,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8089875,
        "lng": 121.19540549999999,
        "ele": 15.125,
        "distanceKm": 1.911912130711333,
        "gradePct": 0.0005078650428735899,
        "smoothedEle": 14.518816013358588,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.80943,
        "lng": 121.195206,
        "ele": 15,
        "distanceKm": 1.965195949007376,
        "gradePct": -0.003994899772552963,
        "smoothedEle": 14.562406512105166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81002,
        "lng": 121.194927,
        "ele": 14.25,
        "distanceKm": 2.036762946576416,
        "gradePct": 0.08400381140211624,
        "smoothedEle": 14.727414819400515,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.810611,
        "lng": 121.194593,
        "ele": 13.75,
        "distanceKm": 2.110861805368903,
        "gradePct": 0.21081483703480336,
        "smoothedEle": 14.940898622167834,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.811059,
        "lng": 121.19433,
        "ele": 14.416666666666666,
        "distanceKm": 2.167503302201161,
        "gradePct": 0.2852190442352179,
        "smoothedEle": 15.138164544932241,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.811507000000002,
        "lng": 121.194067,
        "ele": 15.083333333333334,
        "distanceKm": 2.2241447568417443,
        "gradePct": 0.33035627283955077,
        "smoothedEle": 15.35903426071624,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.811955,
        "lng": 121.193804,
        "ele": 15.75,
        "distanceKm": 2.280786169290667,
        "gradePct": 0.4495788314407805,
        "smoothedEle": 15.753406351902532,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.812427,
        "lng": 121.193591,
        "ele": 16.5,
        "distanceKm": 2.3376299289796654,
        "gradePct": 0.6693370349197355,
        "smoothedEle": 16.372798311033346,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.812753,
        "lng": 121.193508,
        "ele": 17,
        "distanceKm": 2.3748644128610112,
        "gradePct": 0.8653555502872622,
        "smoothedEle": 16.897579823914832,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.813192,
        "lng": 121.193454,
        "ele": 16.75,
        "distanceKm": 2.423991833564871,
        "gradePct": 1.102538552432355,
        "smoothedEle": 17.563515051081012,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.813841,
        "lng": 121.193395,
        "ele": 17.75,
        "distanceKm": 2.496410371162118,
        "gradePct": 1.270460696499742,
        "smoothedEle": 18.46457519264229,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.81418,
        "lng": 121.193332,
        "ele": 19,
        "distanceKm": 2.5346545750439673,
        "gradePct": 1.2887957860504204,
        "smoothedEle": 18.917969256605918,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.814528,
        "lng": 121.193219,
        "ele": 20,
        "distanceKm": 2.575046593837039,
        "gradePct": 1.2356896576918721,
        "smoothedEle": 19.37142865078357,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.814864,
        "lng": 121.193072,
        "ele": 21,
        "distanceKm": 2.615331767520319,
        "gradePct": 1.1589173335762915,
        "smoothedEle": 19.763960224422867,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.815399,
        "lng": 121.192734,
        "ele": 21,
        "distanceKm": 2.6841732521095305,
        "gradePct": 1.0204122638111341,
        "smoothedEle": 20.353140635896555,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.815748432378932,
        "lng": 121.19243093349905,
        "ele": 21.20069738537173,
        "distanceKm": 2.7339188034210697,
        "gradePct": 0.8981368667647686,
        "smoothedEle": 20.705520243878656,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.816089,
        "lng": 121.192116,
        "ele": 21.75,
        "distanceKm": 2.7836785158358883,
        "gradePct": 0.7174678004261809,
        "smoothedEle": 20.890472165688347,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.816448,
        "lng": 121.191779,
        "ele": 21.5,
        "distanceKm": 2.836466614692596,
        "gradePct": 0.41828738716565855,
        "smoothedEle": 20.78141776192671,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.816807,
        "lng": 121.191442,
        "ele": 21.25,
        "distanceKm": 2.8892546539739463,
        "gradePct": -0.00010341101689625977,
        "smoothedEle": 20.38892863852092,
        "gradeBand": "descent"
      },
      {
        "lat": 22.817049,
        "lng": 121.191202,
        "ele": 21,
        "distanceKm": 2.925712762313514,
        "gradePct": -0.27661169316233347,
        "smoothedEle": 20.0941682114273,
        "gradeBand": "descent"
      },
      {
        "lat": 22.817321545902807,
        "lng": 121.19080957072416,
        "ele": 20.651449920140223,
        "distanceKm": 2.976073572757025,
        "gradePct": -0.5707659877755157,
        "smoothedEle": 19.720673370064812,
        "gradeBand": "descent"
      },
      {
        "lat": 22.817579,
        "lng": 121.190405,
        "ele": 19.75,
        "distanceKm": 3.0264616676238334,
        "gradePct": -0.7121217986045416,
        "smoothedEle": 19.377843284479116,
        "gradeBand": "descent"
      },
      {
        "lat": 22.817935,
        "lng": 121.189998,
        "ele": 17.75,
        "distanceKm": 3.0839693159901014,
        "gradePct": -0.6749676708439333,
        "smoothedEle": 19.078290791121983,
        "gradeBand": "descent"
      },
      {
        "lat": 22.818245,
        "lng": 121.189735,
        "ele": 16.75,
        "distanceKm": 3.127727991908609,
        "gradePct": -0.5752125522716951,
        "smoothedEle": 18.928797401060265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.818737,
        "lng": 121.18938,
        "ele": 17.25,
        "distanceKm": 3.1934305451330105,
        "gradePct": -0.5304574799589523,
        "smoothedEle": 18.541665191086004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81907,
        "lng": 121.189163,
        "ele": 17.75,
        "distanceKm": 3.2366245914167857,
        "gradePct": -0.556815151038902,
        "smoothedEle": 18.211275168937128,
        "gradeBand": "descent"
      },
      {
        "lat": 22.819451,
        "lng": 121.188959,
        "ele": 18.5,
        "distanceKm": 3.2838684481189935,
        "gradePct": -0.6046379763426386,
        "smoothedEle": 17.869540250675744,
        "gradeBand": "descent"
      },
      {
        "lat": 22.819784,
        "lng": 121.18888,
        "ele": 19.5,
        "distanceKm": 3.3217713382005294,
        "gradePct": -0.6614386396145354,
        "smoothedEle": 17.626269923043253,
        "gradeBand": "descent"
      },
      {
        "lat": 22.820139,
        "lng": 121.188872,
        "ele": 19.75,
        "distanceKm": 3.361254106318106,
        "gradePct": -0.6740018595480185,
        "smoothedEle": 17.383251301550644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8205375,
        "lng": 121.188892,
        "ele": 18.375000000000007,
        "distanceKm": 3.4056127326939887,
        "gradePct": -0.69896119191177,
        "smoothedEle": 17.050561603731524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.820936,
        "lng": 121.188912,
        "ele": 17,
        "distanceKm": 3.449971358792722,
        "gradePct": -0.7558241038871671,
        "smoothedEle": 16.60308411354942,
        "gradeBand": "descent"
      },
      {
        "lat": 22.821349485562763,
        "lng": 121.18892481670419,
        "ele": 16.643135048122172,
        "distanceKm": 3.495967680183341,
        "gradePct": -0.8675944067895618,
        "smoothedEle": 16.056695507903264,
        "gradeBand": "descent"
      },
      {
        "lat": 22.82176298145225,
        "lng": 121.18893723619203,
        "ele": 15.91257693949075,
        "distanceKm": 3.5419640046585323,
        "gradePct": -0.9907267199433464,
        "smoothedEle": 15.52052950428338,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8221764890504,
        "lng": 121.18894918540144,
        "ele": 14.547149811427587,
        "distanceKm": 3.587960321918577,
        "gradePct": -1.073336446560882,
        "smoothedEle": 15.036281791425347,
        "gradeBand": "descent"
      },
      {
        "lat": 22.82259,
        "lng": 121.188961,
        "ele": 13,
        "distanceKm": 3.633956646352114,
        "gradePct": -1.0114369147229345,
        "smoothedEle": 14.7417622517628,
        "gradeBand": "descent"
      },
      {
        "lat": 22.82305827694504,
        "lng": 121.188975818463,
        "ele": 12.056813160665662,
        "distanceKm": 3.6860488827300366,
        "gradePct": -0.7285167740820893,
        "smoothedEle": 14.717486988922897,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823526,
        "lng": 121.189007,
        "ele": 11.5,
        "distanceKm": 3.738155478093612,
        "gradePct": -0.32871547994427947,
        "smoothedEle": 14.907493449668063,
        "gradeBand": "descent"
      },
      {
        "lat": 22.824183,
        "lng": 121.189022,
        "ele": 14,
        "distanceKm": 3.8112268193610643,
        "gradePct": 0.20428028995483133,
        "smoothedEle": 15.295864421450718,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.824798,
        "lng": 121.18902,
        "ele": 17,
        "distanceKm": 3.8796121009011393,
        "gradePct": 0.5818464964263489,
        "smoothedEle": 15.884179556791073,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.825229,
        "lng": 121.188936,
        "ele": 18.5,
        "distanceKm": 3.9283042742349275,
        "gradePct": 0.7741278032293553,
        "smoothedEle": 16.419826686488012,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.825521,
        "lng": 121.188794,
        "ele": 18.75,
        "distanceKm": 3.963885591879083,
        "gradePct": 0.8965842521741402,
        "smoothedEle": 16.83741637950809,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.825798,
        "lng": 121.188526,
        "ele": 19,
        "distanceKm": 4.0051544468595965,
        "gradePct": 1.0431311325388872,
        "smoothedEle": 17.34985229319569,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8261094,
        "lng": 121.18813759999999,
        "ele": 18.7,
        "distanceKm": 4.05791321378968,
        "gradePct": 1.0385808661149794,
        "smoothedEle": 17.77466685528002,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8264208,
        "lng": 121.1877492,
        "ele": 18.4,
        "distanceKm": 4.11067191201592,
        "gradePct": 0.849459808446196,
        "smoothedEle": 17.92477828828188,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8267322,
        "lng": 121.1873608,
        "ele": 18.1,
        "distanceKm": 4.163430541539434,
        "gradePct": 0.48520607875010097,
        "smoothedEle": 17.802487972233727,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8270436,
        "lng": 121.1869724,
        "ele": 17.8,
        "distanceKm": 4.216189102357723,
        "gradePct": 0.08830366060246313,
        "smoothedEle": 17.615310863509606,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.827355,
        "lng": 121.186584,
        "ele": 17.5,
        "distanceKm": 4.268947594471907,
        "gradePct": -0.16486980044311736,
        "smoothedEle": 17.476322773089,
        "gradeBand": "descent"
      },
      {
        "lat": 22.827606,
        "lng": 121.186366,
        "ele": 16.5,
        "distanceKm": 4.304698517342489,
        "gradePct": -0.2461717578361371,
        "smoothedEle": 17.415439000074254,
        "gradeBand": "descent"
      },
      {
        "lat": 22.828122,
        "lng": 121.186017,
        "ele": 16,
        "distanceKm": 4.372310613048488,
        "gradePct": -0.16233068463960962,
        "smoothedEle": 17.446321837006607,
        "gradeBand": "descent"
      },
      {
        "lat": 22.828645,
        "lng": 121.185698,
        "ele": 16.75,
        "distanceKm": 4.439025130146273,
        "gradePct": -0.06895198856185475,
        "smoothedEle": 17.41724717051962,
        "gradeBand": "descent"
      },
      {
        "lat": 22.829008,
        "lng": 121.18552,
        "ele": 17.5,
        "distanceKm": 4.483319822848839,
        "gradePct": -0.03905979393551281,
        "smoothedEle": 17.373727299843356,
        "gradeBand": "descent"
      },
      {
        "lat": 22.829423949430936,
        "lng": 121.18536312091527,
        "ele": 17.95411671614505,
        "distanceKm": 4.532286101999919,
        "gradePct": -0.06300555224360588,
        "smoothedEle": 17.302028937892217,
        "gradeBand": "descent"
      },
      {
        "lat": 22.829843,
        "lng": 121.185216,
        "ele": 19,
        "distanceKm": 4.581261143280181,
        "gradePct": -0.04538310114548412,
        "smoothedEle": 17.351654929251687,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830236,
        "lng": 121.185131,
        "ele": 18.25,
        "distanceKm": 4.625820596559797,
        "gradePct": 0.01342259189980054,
        "smoothedEle": 17.449846985047948,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.830647,
        "lng": 121.18508733333333,
        "ele": 17.750000000000004,
        "distanceKm": 4.671740356975138,
        "gradePct": 0.06856638285464983,
        "smoothedEle": 17.522236978373964,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.831058,
        "lng": 121.18504366666667,
        "ele": 17.249999999999996,
        "distanceKm": 4.717660116073291,
        "gradePct": 0.1021710952407168,
        "smoothedEle": 17.52778707524648,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.831469,
        "lng": 121.185,
        "ele": 16.75,
        "distanceKm": 4.763579873854521,
        "gradePct": 0.06016436737582603,
        "smoothedEle": 17.454067384592342,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.832069,
        "lng": 121.184947,
        "ele": 17.25,
        "distanceKm": 4.83051765563805,
        "gradePct": 0.10144807893029642,
        "smoothedEle": 17.66014779990699,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.832560666666666,
        "lng": 121.18498733333332,
        "ele": 17.083333333333336,
        "distanceKm": 4.88534460455673,
        "gradePct": 0.1038024221264794,
        "smoothedEle": 17.731486101548207,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.833052333333335,
        "lng": 121.18502766666667,
        "ele": 16.916666666666664,
        "distanceKm": 4.940171552350034,
        "gradePct": 0.05404311845609118,
        "smoothedEle": 17.59973339769291,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.833544,
        "lng": 121.185068,
        "ele": 16.75,
        "distanceKm": 4.994998499016935,
        "gradePct": -0.14685958607056357,
        "smoothedEle": 17.257076295599,
        "gradeBand": "descent"
      },
      {
        "lat": 22.833873,
        "lng": 121.185123,
        "ele": 19.5,
        "distanceKm": 5.03201334683249,
        "gradePct": -0.32280706981403434,
        "smoothedEle": 17.016479784797895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.834284,
        "lng": 121.185273,
        "ele": 20.5,
        "distanceKm": 5.080230570556121,
        "gradePct": -0.5096943229404078,
        "smoothedEle": 16.70544331008143,
        "gradeBand": "descent"
      },
      {
        "lat": 22.83468,
        "lng": 121.18550133333333,
        "ele": 18.166666666666654,
        "distanceKm": 5.13009514695594,
        "gradePct": -0.5931012882610881,
        "smoothedEle": 16.437745075460775,
        "gradeBand": "descent"
      },
      {
        "lat": 22.835076,
        "lng": 121.18572966666666,
        "ele": 15.833333333333346,
        "distanceKm": 5.179959691398852,
        "gradePct": -0.550819595703469,
        "smoothedEle": 16.249426548263568,
        "gradeBand": "descent"
      },
      {
        "lat": 22.835472,
        "lng": 121.185958,
        "ele": 13.5,
        "distanceKm": 5.229824203885075,
        "gradePct": -0.39691222189370345,
        "smoothedEle": 16.236884770168686,
        "gradeBand": "descent"
      },
      {
        "lat": 22.835882,
        "lng": 121.186103,
        "ele": 13.5,
        "distanceKm": 5.2777747343679495,
        "gradePct": -0.3588573045459157,
        "smoothedEle": 16.00357064649082,
        "gradeBand": "descent"
      },
      {
        "lat": 22.836389,
        "lng": 121.18621350000001,
        "ele": 14.25,
        "distanceKm": 5.335276693014997,
        "gradePct": -0.5894688458152753,
        "smoothedEle": 15.239238747771324,
        "gradeBand": "descent"
      },
      {
        "lat": 22.836896,
        "lng": 121.186324,
        "ele": 15,
        "distanceKm": 5.3927786433519,
        "gradePct": -0.8427835718393296,
        "smoothedEle": 14.56063521883059,
        "gradeBand": "descent"
      },
      {
        "lat": 22.83747,
        "lng": 121.186507,
        "ele": 16.75,
        "distanceKm": 5.4593027183030784,
        "gradePct": -0.9614264127345686,
        "smoothedEle": 14.17059758246203,
        "gradeBand": "descent"
      },
      {
        "lat": 22.837861,
        "lng": 121.186716,
        "ele": 15,
        "distanceKm": 5.5077692300099255,
        "gradePct": -0.72893211004069,
        "smoothedEle": 14.147011315067486,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838252,
        "lng": 121.186925,
        "ele": 13.25,
        "distanceKm": 5.556235714515253,
        "gradePct": -0.43060343571741516,
        "smoothedEle": 14.130686075543876,
        "gradeBand": "descent"
      },
      {
        "lat": 22.838591,
        "lng": 121.1870995,
        "ele": 13.124999999999998,
        "distanceKm": 5.5979574345446546,
        "gradePct": -0.2350386360219028,
        "smoothedEle": 14.060194150258223,
        "gradeBand": "descent"
      },
      {
        "lat": 22.83893,
        "lng": 121.187274,
        "ele": 13,
        "distanceKm": 5.6396791354753155,
        "gradePct": -0.16449351883478144,
        "smoothedEle": 13.956665671358909,
        "gradeBand": "descent"
      },
      {
        "lat": 22.839311,
        "lng": 121.187428,
        "ele": 13.25,
        "distanceKm": 5.684888384643254,
        "gradePct": -0.18247886306722788,
        "smoothedEle": 13.793188570965485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.839691,
        "lng": 121.187558,
        "ele": 13.25,
        "distanceKm": 5.729192867504806,
        "gradePct": -0.31270518544804,
        "smoothedEle": 13.514384699437738,
        "gradeBand": "descent"
      },
      {
        "lat": 22.840112599999998,
        "lng": 121.1876803,
        "ele": 13.325,
        "distanceKm": 5.777719079729979,
        "gradePct": -0.3619533881629608,
        "smoothedEle": 13.370481568095324,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8405342,
        "lng": 121.1878026,
        "ele": 13.4,
        "distanceKm": 5.826245281923802,
        "gradePct": -0.2930462037954704,
        "smoothedEle": 13.403908108535102,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8409558,
        "lng": 121.1879249,
        "ele": 13.475,
        "distanceKm": 5.874771474085363,
        "gradePct": -0.17837947494442813,
        "smoothedEle": 13.473012471563706,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8413774,
        "lng": 121.1880472,
        "ele": 13.549999999999999,
        "distanceKm": 5.923297656214898,
        "gradePct": 0.0016310894784261605,
        "smoothedEle": 13.554744878979239,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.841798999999998,
        "lng": 121.1881695,
        "ele": 13.625,
        "distanceKm": 5.971823828312262,
        "gradePct": 0.1185181459550283,
        "smoothedEle": 13.62500006395577,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8422206,
        "lng": 121.1882918,
        "ele": 13.700000000000001,
        "distanceKm": 6.02034999037769,
        "gradePct": 0.11156352603280775,
        "smoothedEle": 13.622974278183353,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8426422,
        "lng": 121.1884141,
        "ele": 13.775,
        "distanceKm": 6.068876142410271,
        "gradePct": 0.01279419970242034,
        "smoothedEle": 13.49020554625621,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8430638,
        "lng": 121.1885364,
        "ele": 13.85,
        "distanceKm": 6.117402284410241,
        "gradePct": -0.1530094578660169,
        "smoothedEle": 13.238796417812988,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843485400000002,
        "lng": 121.1886587,
        "ele": 13.925,
        "distanceKm": 6.165928416377837,
        "gradePct": -0.3738589219888212,
        "smoothedEle": 12.868746964917522,
        "gradeBand": "descent"
      },
      {
        "lat": 22.843907,
        "lng": 121.188781,
        "ele": 14,
        "distanceKm": 6.214454538312148,
        "gradePct": -0.6215815658062555,
        "smoothedEle": 12.380057259644861,
        "gradeBand": "descent"
      },
      {
        "lat": 22.84426,
        "lng": 121.188825,
        "ele": 13,
        "distanceKm": 6.253964516086718,
        "gradePct": -0.7983305413594233,
        "smoothedEle": 11.934343035750963,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8447465,
        "lng": 121.18875075,
        "ele": 11.687500000000005,
        "distanceKm": 6.308593377214997,
        "gradePct": -0.9105573774264252,
        "smoothedEle": 11.46331973739216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.845232999999997,
        "lng": 121.1886765,
        "ele": 10.37500000000001,
        "distanceKm": 6.363222234552171,
        "gradePct": -0.8643302135024495,
        "smoothedEle": 11.160723276581432,
        "gradeBand": "descent"
      },
      {
        "lat": 22.845719499999998,
        "lng": 121.18860225,
        "ele": 9.062499999999995,
        "distanceKm": 6.417851088098959,
        "gradePct": -0.6759047755002723,
        "smoothedEle": 10.989931044413744,
        "gradeBand": "descent"
      },
      {
        "lat": 22.846206,
        "lng": 121.188528,
        "ele": 7.75,
        "distanceKm": 6.472479937854907,
        "gradePct": -0.41071614861315686,
        "smoothedEle": 10.953266278588393,
        "gradeBand": "descent"
      },
      {
        "lat": 22.846616291964242,
        "lng": 121.1884939394854,
        "ele": 8.895018378445885,
        "distanceKm": 6.5182356972765385,
        "gradePct": -0.13710081744893265,
        "smoothedEle": 11.135708017296682,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847026,
        "lng": 121.188449,
        "ele": 10.5,
        "distanceKm": 6.56402536394477,
        "gradePct": 0.20335608148057444,
        "smoothedEle": 11.564924527217395,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.847445,
        "lng": 121.1884675,
        "ele": 11.62500000000001,
        "distanceKm": 6.610654653675976,
        "gradePct": 0.5256157239321495,
        "smoothedEle": 12.063661501848088,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.847864,
        "lng": 121.188486,
        "ele": 12.75,
        "distanceKm": 6.657283943169713,
        "gradePct": 0.7767496848752693,
        "smoothedEle": 12.51696461077554,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.848215780391048,
        "lng": 121.18855426433913,
        "ele": 13.613459771248305,
        "distanceKm": 6.697020727909291,
        "gradePct": 0.8818878371854286,
        "smoothedEle": 12.814893337427373,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.848566,
        "lng": 121.188632,
        "ele": 15.25,
        "distanceKm": 6.7367697444436825,
        "gradePct": 0.8376985444699854,
        "smoothedEle": 12.984836858804892,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.849053,
        "lng": 121.188947,
        "ele": 16.75,
        "distanceKm": 6.799811873767759,
        "gradePct": 0.4378053932186111,
        "smoothedEle": 12.82330021838711,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.849321,
        "lng": 121.189276,
        "ele": 16.25,
        "distanceKm": 6.844807314878616,
        "gradePct": 0.029431913746781085,
        "smoothedEle": 12.454537840563425,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.849492698052817,
        "lng": 121.18959136128322,
        "ele": 14.97749140701712,
        "distanceKm": 6.882340717066955,
        "gradePct": -0.3105001719765343,
        "smoothedEle": 12.083828805690732,
        "gradeBand": "descent"
      },
      {
        "lat": 22.849636,
        "lng": 121.189924,
        "ele": 12.75,
        "distanceKm": 6.919966676834512,
        "gradePct": -0.6047882103411849,
        "smoothedEle": 11.70342035933777,
        "gradeBand": "descent"
      },
      {
        "lat": 22.849874,
        "lng": 121.1903885,
        "ele": 9.875000000000025,
        "distanceKm": 6.974426153281933,
        "gradePct": -0.8885174006036876,
        "smoothedEle": 11.11131277591955,
        "gradeBand": "descent"
      },
      {
        "lat": 22.850112,
        "lng": 121.190853,
        "ele": 7,
        "distanceKm": 7.028885556916025,
        "gradePct": -1.106150988713405,
        "smoothedEle": 10.372723423219707,
        "gradeBand": "descent"
      },
      {
        "lat": 22.850501,
        "lng": 121.191228,
        "ele": 6.5,
        "distanceKm": 7.086743370052925,
        "gradePct": -1.2601542020761254,
        "smoothedEle": 9.51900841054687,
        "gradeBand": "descent"
      },
      {
        "lat": 22.850773,
        "lng": 121.191403,
        "ele": 6.75,
        "distanceKm": 7.121904713849832,
        "gradePct": -1.2913771538237382,
        "smoothedEle": 9.099594853644081,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851106,
        "lng": 121.1916,
        "ele": 8,
        "distanceKm": 7.164077629573621,
        "gradePct": -1.2045939098456582,
        "smoothedEle": 8.814638696069103,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851557,
        "lng": 121.19187666666666,
        "ele": 8.5,
        "distanceKm": 7.221685036700197,
        "gradePct": -0.8729883690780113,
        "smoothedEle": 8.724401584133894,
        "gradeBand": "descent"
      },
      {
        "lat": 22.852008,
        "lng": 121.19215333333334,
        "ele": 9,
        "distanceKm": 7.279292397549232,
        "gradePct": -0.3695963559586485,
        "smoothedEle": 8.889757757282307,
        "gradeBand": "descent"
      },
      {
        "lat": 22.852459,
        "lng": 121.19243,
        "ele": 9.5,
        "distanceKm": 7.336899712117857,
        "gradePct": 0.12015198881782298,
        "smoothedEle": 9.238579844532754,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.852796,
        "lng": 121.192631,
        "ele": 10.75,
        "distanceKm": 7.379659463511984,
        "gradePct": 0.36565988450312376,
        "smoothedEle": 9.52155084523295,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.853089,
        "lng": 121.19287,
        "ele": 11.25,
        "distanceKm": 7.420417350909924,
        "gradePct": 0.5661195541116562,
        "smoothedEle": 9.85862641451103,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.853392,
        "lng": 121.193306,
        "ele": 10,
        "distanceKm": 7.4763731504930035,
        "gradePct": 0.7465487992541411,
        "smoothedEle": 10.374475948808943,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.853785,
        "lng": 121.193889,
        "ele": 9.75,
        "distanceKm": 7.550388499994291,
        "gradePct": 0.8944069559454191,
        "smoothedEle": 11.116658442937918,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85413535485538,
        "lng": 121.19432178308121,
        "ele": 9.956974161934737,
        "distanceKm": 7.609415899632796,
        "gradePct": 0.9174265150337303,
        "smoothedEle": 11.602495326193829,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85451,
        "lng": 121.194731,
        "ele": 12.25,
        "distanceKm": 7.668522854257052,
        "gradePct": 0.7968956618567591,
        "smoothedEle": 11.895896371068293,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.854895,
        "lng": 121.195315,
        "ele": 14,
        "distanceKm": 7.742099415187336,
        "gradePct": 0.6296701528430212,
        "smoothedEle": 12.292880670042628,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85508586241993,
        "lng": 121.19572970224534,
        "ele": 13.680277646323365,
        "distanceKm": 7.789597124015108,
        "gradePct": 0.5773497528113931,
        "smoothedEle": 12.594072413498786,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.855290489935943,
        "lng": 121.19613696179627,
        "ele": 13.544222117058693,
        "distanceKm": 7.837127205857224,
        "gradePct": 0.5399869018507624,
        "smoothedEle": 12.820025298247613,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85549511745196,
        "lng": 121.19654422134721,
        "ele": 13.40816658779402,
        "distanceKm": 7.884657232548759,
        "gradePct": 0.5494102841373398,
        "smoothedEle": 13.081770408199569,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85569974496797,
        "lng": 121.19695148089814,
        "ele": 13.272111058529346,
        "distanceKm": 7.932187204086328,
        "gradePct": 0.4920885234345813,
        "smoothedEle": 13.223576117262853,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.855904372483987,
        "lng": 121.19735874044908,
        "ele": 13.136055529264674,
        "distanceKm": 7.9797171204724195,
        "gradePct": 0.4017807462720825,
        "smoothedEle": 13.334982978960014,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.856109,
        "lng": 121.197766,
        "ele": 13,
        "distanceKm": 8.027246981703648,
        "gradePct": 0.4352867301248922,
        "smoothedEle": 13.643629238081225,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.856364,
        "lng": 121.198038,
        "ele": 12,
        "distanceKm": 8.067005561927603,
        "gradePct": 0.5523556764902485,
        "smoothedEle": 14.08927503126268,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.856790184223588,
        "lng": 121.19825586864809,
        "ele": 12.814469274006244,
        "distanceKm": 8.119389919142087,
        "gradePct": 0.8173331441142946,
        "smoothedEle": 14.82006169536481,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.857234,
        "lng": 121.198431,
        "ele": 13.75,
        "distanceKm": 8.171901293499815,
        "gradePct": 1.1390629046750973,
        "smoothedEle": 15.5947890263415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.857615,
        "lng": 121.198519,
        "ele": 14.5,
        "distanceKm": 8.215215530558789,
        "gradePct": 1.2950867723570412,
        "smoothedEle": 16.155673743671986,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.858102,
        "lng": 121.198672,
        "ele": 18.25,
        "distanceKm": 8.271591085711059,
        "gradePct": 1.2993409088737942,
        "smoothedEle": 16.751927083772372,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8585,
        "lng": 121.198903,
        "ele": 20.25,
        "distanceKm": 8.321778518659263,
        "gradePct": 1.164231858244772,
        "smoothedEle": 17.183765649828473,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.858803077411483,
        "lng": 121.19916966749102,
        "ele": 20.75,
        "distanceKm": 8.365164083755563,
        "gradePct": 0.9807014296547009,
        "smoothedEle": 17.456794362976343,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85908,
        "lng": 121.199469,
        "ele": 20.75,
        "distanceKm": 8.408624873134707,
        "gradePct": 0.7671573989182355,
        "smoothedEle": 17.60464480057416,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.859379666666666,
        "lng": 121.19977999999999,
        "ele": 19.416666666666668,
        "distanceKm": 8.45473064580238,
        "gradePct": 0.5224672602385284,
        "smoothedEle": 17.618537974726706,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.859679333333332,
        "lng": 121.200091,
        "ele": 18.083333333333332,
        "distanceKm": 8.500836369910019,
        "gradePct": 0.22385124463793893,
        "smoothedEle": 17.451271086680084,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.859979,
        "lng": 121.200402,
        "ele": 16.75,
        "distanceKm": 8.546942045455065,
        "gradePct": -0.11863272470519035,
        "smoothedEle": 17.104856218694458,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860329,
        "lng": 121.200764,
        "ele": 15.5,
        "distanceKm": 8.600704256427358,
        "gradePct": -0.5357302485463081,
        "smoothedEle": 16.506238942779287,
        "gradeBand": "descent"
      },
      {
        "lat": 22.860729,
        "lng": 121.2011765,
        "ele": 14.375000000000016,
        "distanceKm": 8.662060932420564,
        "gradePct": -0.823900070066274,
        "smoothedEle": 15.94414429865379,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861129,
        "lng": 121.201589,
        "ele": 13.25,
        "distanceKm": 8.723417522719819,
        "gradePct": -0.9627838191123955,
        "smoothedEle": 15.356040018148814,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861447,
        "lng": 121.201959,
        "ele": 14.5,
        "distanceKm": 8.775258908671663,
        "gradePct": -0.9247153421662897,
        "smoothedEle": 14.940130400203083,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861608,
        "lng": 121.202327,
        "ele": 14.75,
        "distanceKm": 8.816998495511132,
        "gradePct": -0.8322932214821848,
        "smoothedEle": 14.692379346228432,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861671,
        "lng": 121.203046,
        "ele": 16.25,
        "distanceKm": 8.89099972413468,
        "gradePct": -0.7620121728591167,
        "smoothedEle": 14.142740991739918,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861671,
        "lng": 121.203697,
        "ele": 14.75,
        "distanceKm": 8.957701319206018,
        "gradePct": -0.6895530200695921,
        "smoothedEle": 13.70188421927923,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861758,
        "lng": 121.204196,
        "ele": 14,
        "distanceKm": 9.009736115194084,
        "gradePct": -0.5536579175365743,
        "smoothedEle": 13.628170367599107,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861922,
        "lng": 121.204563,
        "ele": 13.75,
        "distanceKm": 9.051527570397898,
        "gradePct": -0.3381681695948483,
        "smoothedEle": 13.759580996126479,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862157,
        "lng": 121.20503,
        "ele": 11.5,
        "distanceKm": 9.106046626069912,
        "gradePct": 0.15819462727257572,
        "smoothedEle": 14.35967942182421,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.862454,
        "lng": 121.205455,
        "ele": 10.5,
        "distanceKm": 9.160698681172923,
        "gradePct": 0.7295412640399616,
        "smoothedEle": 15.156720606074943,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86279607145463,
        "lng": 121.20572979533235,
        "ele": 11.408617596962376,
        "distanceKm": 9.20802218120553,
        "gradePct": 1.2290304162325132,
        "smoothedEle": 16.088659203737873,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.863187,
        "lng": 121.205926,
        "ele": 14,
        "distanceKm": 9.255914898425575,
        "gradePct": 1.7143155858775898,
        "smoothedEle": 17.236504065273778,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8636245,
        "lng": 121.206109,
        "ele": 18.5,
        "distanceKm": 9.30805101617368,
        "gradePct": 2.1558588851085707,
        "smoothedEle": 18.700629056405766,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.864062,
        "lng": 121.206292,
        "ele": 23,
        "distanceKm": 9.36018711221089,
        "gradePct": 2.6153420134996828,
        "smoothedEle": 20.37994395239987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.864379,
        "lng": 121.206511,
        "ele": 24,
        "distanceKm": 9.401971809774869,
        "gradePct": 2.9968541882040434,
        "smoothedEle": 21.96321801042805,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.864673817472678,
        "lng": 121.20689735403093,
        "ele": 25.604669072154024,
        "distanceKm": 9.453368841047107,
        "gradePct": 3.44620271113056,
        "smoothedEle": 24.06788812460778,
        "gradeBand": "hard"
      },
      {
        "lat": 22.864948,
        "lng": 121.207302,
        "ele": 27,
        "distanceKm": 9.504831099671296,
        "gradePct": 3.6304107854550445,
        "smoothedEle": 25.871026552334364,
        "gradeBand": "hard"
      },
      {
        "lat": 22.865147,
        "lng": 121.207664,
        "ele": 28.5,
        "distanceKm": 9.548020037347793,
        "gradePct": 3.433694037477028,
        "smoothedEle": 26.855427922303754,
        "gradeBand": "hard"
      },
      {
        "lat": 22.865322,
        "lng": 121.208189,
        "ele": 28.5,
        "distanceKm": 9.605221816333808,
        "gradePct": 2.7148034943864277,
        "smoothedEle": 27.5259103449139,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865438,
        "lng": 121.20871,
        "ele": 31.75,
        "distanceKm": 9.66013840981717,
        "gradePct": 1.6998220873075034,
        "smoothedEle": 27.704724950979084,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865446,
        "lng": 121.209113,
        "ele": 30.75,
        "distanceKm": 9.701438308760942,
        "gradePct": 0.9572872858040726,
        "smoothedEle": 27.666724264837352,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86542,
        "lng": 121.20948,
        "ele": 29.75,
        "distanceKm": 9.739151142156436,
        "gradePct": 0.43218078748959754,
        "smoothedEle": 27.517641608351703,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865323,
        "lng": 121.209861,
        "ele": 26.75,
        "distanceKm": 9.77965011707023,
        "gradePct": 0.037661153410482616,
        "smoothedEle": 27.30149765788627,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86519475,
        "lng": 121.21028,
        "ele": 26.062500000000007,
        "distanceKm": 9.824886475306492,
        "gradePct": -0.2919225706457855,
        "smoothedEle": 27.00609554535633,
        "gradeBand": "descent"
      },
      {
        "lat": 22.865066499999998,
        "lng": 121.210699,
        "ele": 25.374999999999986,
        "distanceKm": 9.870122872000552,
        "gradePct": -0.5014231181134505,
        "smoothedEle": 26.69269185416831,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864938249999998,
        "lng": 121.21111800000001,
        "ele": 24.687499999999993,
        "distanceKm": 9.915359307150577,
        "gradePct": -0.7517821999037535,
        "smoothedEle": 26.10812874607109,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86481,
        "lng": 121.211537,
        "ele": 24,
        "distanceKm": 9.960595780755112,
        "gradePct": -0.7666606208308241,
        "smoothedEle": 25.86986984262401,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864813,
        "lng": 121.212172,
        "ele": 24.5,
        "distanceKm": 10.025657363986582,
        "gradePct": -0.25953444736127107,
        "smoothedEle": 26.481685832719634,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864914,
        "lng": 121.2126,
        "ele": 25.75,
        "distanceKm": 10.070924583938272,
        "gradePct": 0.24634895363400042,
        "smoothedEle": 27.17502972266318,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865115,
        "lng": 121.213159,
        "ele": 24,
        "distanceKm": 10.132404868993865,
        "gradePct": 1.1118390016834838,
        "smoothedEle": 28.242028379246655,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865413665999924,
        "lng": 121.21362383737855,
        "ele": 28.45759320251996,
        "distanceKm": 10.190466557788852,
        "gradePct": 1.9610894215164476,
        "smoothedEle": 30.072942849587783,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865764,
        "lng": 121.214049,
        "ele": 34.75,
        "distanceKm": 10.248905284369645,
        "gradePct": 2.973313492966847,
        "smoothedEle": 32.784393964539746,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.866051499999998,
        "lng": 121.214417,
        "ele": 34.125000000000014,
        "distanceKm": 10.2983380235713,
        "gradePct": 3.7791625991292497,
        "smoothedEle": 35.209118870850084,
        "gradeBand": "hard"
      },
      {
        "lat": 22.866339,
        "lng": 121.214785,
        "ele": 33.5,
        "distanceKm": 10.347770701918584,
        "gradePct": 4.440014981696275,
        "smoothedEle": 37.60660377069333,
        "gradeBand": "hard"
      },
      {
        "lat": 22.866638,
        "lng": 121.215179,
        "ele": 39.5,
        "distanceKm": 10.400067465355777,
        "gradePct": 4.759214734479426,
        "smoothedEle": 40.036837048016714,
        "gradeBand": "hard"
      },
      {
        "lat": 22.866901,
        "lng": 121.215741,
        "ele": 47,
        "distanceKm": 10.46464873701327,
        "gradePct": 4.192462382659664,
        "smoothedEle": 41.94155070309833,
        "gradeBand": "hard"
      },
      {
        "lat": 22.866985,
        "lng": 121.21626,
        "ele": 49,
        "distanceKm": 10.518637629608866,
        "gradePct": 3.1251496207930676,
        "smoothedEle": 42.44394900525817,
        "gradeBand": "hard"
      },
      {
        "lat": 22.866981,
        "lng": 121.216814,
        "ele": 50,
        "distanceKm": 10.57540010808235,
        "gradePct": 1.948117183602047,
        "smoothedEle": 42.786778058433995,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86705,
        "lng": 121.217499,
        "ele": 46.5,
        "distanceKm": 10.646000726773648,
        "gradePct": 1.015309339341968,
        "smoothedEle": 43.42217835757505,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.867254,
        "lng": 121.218001,
        "ele": 40,
        "distanceKm": 10.702213740369746,
        "gradePct": 0.5208792384558603,
        "smoothedEle": 43.33287356260051,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8674695,
        "lng": 121.218475,
        "ele": 38.37500000000003,
        "distanceKm": 10.756367923397061,
        "gradePct": -0.057944031968414786,
        "smoothedEle": 42.55594106994355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.867685,
        "lng": 121.218949,
        "ele": 36.75,
        "distanceKm": 10.810522037340844,
        "gradePct": -0.8368373827136425,
        "smoothedEle": 41.429198035105756,
        "gradeBand": "descent"
      },
      {
        "lat": 22.867827,
        "lng": 121.219267,
        "ele": 39.25,
        "distanceKm": 10.846727407876513,
        "gradePct": -1.4334280318501678,
        "smoothedEle": 40.55416782620342,
        "gradeBand": "descent"
      },
      {
        "lat": 22.867974,
        "lng": 121.219797,
        "ele": 41.75,
        "distanceKm": 10.903435655886629,
        "gradePct": -1.988840686100378,
        "smoothedEle": 39.3376617649501,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868021000000002,
        "lng": 121.2201675,
        "ele": 40.999999999999986,
        "distanceKm": 10.941753467014696,
        "gradePct": -2.020769489431725,
        "smoothedEle": 38.724070954891616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868068,
        "lng": 121.220538,
        "ele": 40.25,
        "distanceKm": 10.980071265132471,
        "gradePct": -1.9468517969920531,
        "smoothedEle": 38.16906025898054,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868142,
        "lng": 121.221256,
        "ele": 38.5,
        "distanceKm": 11.054092978788576,
        "gradePct": -1.3801040180715751,
        "smoothedEle": 37.63595346869555,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868228499999997,
        "lng": 121.22180499999999,
        "ele": 37.00000000000002,
        "distanceKm": 11.11115737924314,
        "gradePct": -0.5793817374940444,
        "smoothedEle": 38.055248782072994,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868315,
        "lng": 121.222354,
        "ele": 35.5,
        "distanceKm": 11.168221744396314,
        "gradePct": -0.024260076089337532,
        "smoothedEle": 38.292173422729164,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868444,
        "lng": 121.22285,
        "ele": 32.5,
        "distanceKm": 11.221025145565108,
        "gradePct": 0.397282380010553,
        "smoothedEle": 38.668673839560014,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.868733,
        "lng": 121.223325,
        "ele": 35,
        "distanceKm": 11.27934387188786,
        "gradePct": 0.7625332504940792,
        "smoothedEle": 39.346557380938116,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869054,
        "lng": 121.223668,
        "ele": 41.75,
        "distanceKm": 11.329433726486668,
        "gradePct": 0.9959100331606442,
        "smoothedEle": 40.12295012721964,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869403130007452,
        "lng": 121.2239857295952,
        "ele": 42.94747334873084,
        "distanceKm": 11.380097309169667,
        "gradePct": 1.3369015567203608,
        "smoothedEle": 41.05065204926754,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869752260014906,
        "lng": 121.2243034591904,
        "ele": 44.14494669746168,
        "distanceKm": 11.430760838095196,
        "gradePct": 1.6646509297778551,
        "smoothedEle": 42.11114116321623,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.870101390022356,
        "lng": 121.22462118878559,
        "ele": 45.342420046192515,
        "distanceKm": 11.481424313262256,
        "gradePct": 2.051301990028865,
        "smoothedEle": 43.48140820229897,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87045052674624,
        "lng": 121.22493891037864,
        "ele": 46.25,
        "distanceKm": 11.53208778017917,
        "gradePct": 2.3737010906059175,
        "smoothedEle": 44.91895074109973,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87079968449749,
        "lng": 121.2252566069191,
        "ele": 46.25,
        "distanceKm": 11.582751335979786,
        "gradePct": 2.4642889541685644,
        "smoothedEle": 46.034784053419756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.871148842248747,
        "lng": 121.22557430345955,
        "ele": 46.25,
        "distanceKm": 11.633414838026631,
        "gradePct": 2.3415659739119876,
        "smoothedEle": 46.86605438178371,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.871498,
        "lng": 121.225892,
        "ele": 46.25,
        "distanceKm": 11.68407828631934,
        "gradePct": 2.04142303008339,
        "smoothedEle": 47.639559001729765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8719085,
        "lng": 121.2262765,
        "ele": 48.00000000000003,
        "distanceKm": 11.744371989747073,
        "gradePct": 1.610071778409678,
        "smoothedEle": 48.409646374945225,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.872319,
        "lng": 121.226661,
        "ele": 49.75,
        "distanceKm": 11.8046656153885,
        "gradePct": 1.2720491751050682,
        "smoothedEle": 48.93844480070021,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.872664838854867,
        "lng": 121.22699296330826,
        "ele": 50.60905418305939,
        "distanceKm": 11.856003062414732,
        "gradePct": 1.054566244413721,
        "smoothedEle": 49.32005277511156,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873018,
        "lng": 121.227316,
        "ele": 51.25,
        "distanceKm": 11.90735907609329,
        "gradePct": 0.8713186848169445,
        "smoothedEle": 49.67954487086147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873371,
        "lng": 121.227619,
        "ele": 51.5,
        "distanceKm": 11.957402705086881,
        "gradePct": 0.7529597417408693,
        "smoothedEle": 50.029850273816606,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873661573887695,
        "lng": 121.227872400256,
        "ele": 50.72554933983459,
        "distanceKm": 11.998850792041035,
        "gradePct": 0.647995531575115,
        "smoothedEle": 50.18343761321497,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873952,
        "lng": 121.228126,
        "ele": 50.25,
        "distanceKm": 12.040298844455487,
        "gradePct": 0.5105148699326297,
        "smoothedEle": 50.22434794494494,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874508,
        "lng": 121.228509,
        "ele": 49.75,
        "distanceKm": 12.11352407677695,
        "gradePct": 0.11802272251686616,
        "smoothedEle": 49.958745320680826,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874898707229498,
        "lng": 121.22870795792498,
        "ele": 49.75,
        "distanceKm": 12.161512860533659,
        "gradePct": -0.30277728638378076,
        "smoothedEle": 49.4395260261611,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875289414458997,
        "lng": 121.22890691584996,
        "ele": 49.75,
        "distanceKm": 12.209501619381875,
        "gradePct": -0.7443326232401004,
        "smoothedEle": 48.70528501701217,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875680462687754,
        "lng": 121.2291050662684,
        "ele": 49.2498596008486,
        "distanceKm": 12.257489627604103,
        "gradePct": -1.1387595853813655,
        "smoothedEle": 47.88447435108686,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87607074401101,
        "lng": 121.22930500778567,
        "ele": 48.826254691379674,
        "distanceKm": 12.305478392741898,
        "gradePct": -1.4914552277499187,
        "smoothedEle": 47.00501817707993,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876461,
        "lng": 121.229505,
        "ele": 47.75,
        "distanceKm": 12.353466802581842,
        "gradePct": -1.6398570365055556,
        "smoothedEle": 46.24686705657972,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87685864440015,
        "lng": 121.22975538364639,
        "ele": 44.570679166141794,
        "distanceKm": 12.404584945813182,
        "gradePct": -1.4800463666197794,
        "smoothedEle": 45.82041872115873,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877249429600102,
        "lng": 121.23001892243093,
        "ele": 43.21378611076123,
        "distanceKm": 12.455743063605443,
        "gradePct": -1.1841384546857803,
        "smoothedEle": 45.54607153759739,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87764021480005,
        "lng": 121.23028246121547,
        "ele": 41.85689305538062,
        "distanceKm": 12.506901140390115,
        "gradePct": -0.7771737041296013,
        "smoothedEle": 45.428193305464845,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878031,
        "lng": 121.230546,
        "ele": 40.5,
        "distanceKm": 12.558059176167292,
        "gradePct": -0.41011526634603046,
        "smoothedEle": 45.388325076183385,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87833,
        "lng": 121.23073099999999,
        "ele": 43.37499999999993,
        "distanceKm": 12.596329201374457,
        "gradePct": -0.2429190003073715,
        "smoothedEle": 45.40345349742913,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878629,
        "lng": 121.230916,
        "ele": 46.25,
        "distanceKm": 12.634599205913668,
        "gradePct": -0.0746280931445578,
        "smoothedEle": 45.51020415562112,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878932,
        "lng": 121.231117,
        "ele": 47,
        "distanceKm": 12.674085721304477,
        "gradePct": 0.18164510818310897,
        "smoothedEle": 45.86709667681312,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87938551173146,
        "lng": 121.23140032969717,
        "ele": 48.369080992295636,
        "distanceKm": 12.732271078762416,
        "gradePct": 0.5651358957156083,
        "smoothedEle": 46.53869392107748,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87983899668646,
        "lng": 121.2316837105305,
        "ele": 48.66605693311611,
        "distanceKm": 12.79045642107447,
        "gradePct": 0.9200540275183611,
        "smoothedEle": 47.241239999402296,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880292,
        "lng": 121.231968,
        "ele": 48.5,
        "distanceKm": 12.848641845723476,
        "gradePct": 1.0022292479154267,
        "smoothedEle": 47.6415847937659,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88066036615204,
        "lng": 121.23220424579492,
        "ele": 49.071398329476665,
        "distanceKm": 12.896218321857395,
        "gradePct": 0.6206791593034695,
        "smoothedEle": 47.36391778174888,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881029,
        "lng": 121.23244,
        "ele": 49.25,
        "distanceKm": 12.943794808669315,
        "gradePct": 0.13217157653528536,
        "smoothedEle": 46.94217780843036,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881508,
        "lng": 121.232815,
        "ele": 47.75,
        "distanceKm": 13.009466388659845,
        "gradePct": -0.5359009730222387,
        "smoothedEle": 46.30023612881633,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8818895,
        "lng": 121.233232,
        "ele": 45.00000000000004,
        "distanceKm": 13.069670205280163,
        "gradePct": -0.9084598988886758,
        "smoothedEle": 45.70193876150894,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882271,
        "lng": 121.233649,
        "ele": 42.25,
        "distanceKm": 13.129873936716232,
        "gradePct": -1.032944006712313,
        "smoothedEle": 44.999690839502215,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882638872715592,
        "lng": 121.23406426146644,
        "ele": 42.51226748148125,
        "distanceKm": 13.188891140632727,
        "gradePct": -1.202552192116223,
        "smoothedEle": 44.09625541602453,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883017,
        "lng": 121.234469,
        "ele": 43.75,
        "distanceKm": 13.247942378855788,
        "gradePct": -1.4340439770759354,
        "smoothedEle": 43.049779000564484,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883322929327214,
        "lng": 121.23474859104077,
        "ele": 43.75,
        "distanceKm": 13.292412610513688,
        "gradePct": -1.6146861456705237,
        "smoothedEle": 42.20728711894301,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883629,
        "lng": 121.235028,
        "ele": 43,
        "distanceKm": 13.33688281597341,
        "gradePct": -1.7015219659727687,
        "smoothedEle": 41.48935497605866,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883924,
        "lng": 121.235314,
        "ele": 42.25,
        "distanceKm": 13.380864969516875,
        "gradePct": -1.6843773522715453,
        "smoothedEle": 40.85036534788838,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884196,
        "lng": 121.23561,
        "ele": 41,
        "distanceKm": 13.423693249629567,
        "gradePct": -1.6288305419780138,
        "smoothedEle": 40.221848818013555,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884497802225717,
        "lng": 121.23603933800499,
        "ele": 39.539666649741946,
        "distanceKm": 13.479016668700902,
        "gradePct": -1.5897739698071036,
        "smoothedEle": 39.28152630395559,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884798,
        "lng": 121.23647,
        "ele": 37.75,
        "distanceKm": 13.53434007299762,
        "gradePct": -1.7754014107117646,
        "smoothedEle": 37.97960249147395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8850755,
        "lng": 121.23687749999999,
        "ele": 36.375,
        "distanceKm": 13.586251621699484,
        "gradePct": -2.1225592996994433,
        "smoothedEle": 36.52619617889978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885353,
        "lng": 121.237285,
        "ele": 35,
        "distanceKm": 13.6381631017719,
        "gradePct": -2.4815830856149166,
        "smoothedEle": 35.012741091237764,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885779,
        "lng": 121.237804,
        "ele": 34.25,
        "distanceKm": 13.709371347720447,
        "gradePct": -2.607621574452653,
        "smoothedEle": 33.35194751467961,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886095643281266,
        "lng": 121.23802926071426,
        "ele": 32.3947913134592,
        "distanceKm": 13.751468783042858,
        "gradePct": -2.385261161289408,
        "smoothedEle": 32.72951490974679,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886412,
        "lng": 121.238255,
        "ele": 30.25,
        "distanceKm": 13.793566452834195,
        "gradePct": -1.9494889575487766,
        "smoothedEle": 32.413957759945,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886732,
        "lng": 121.238621,
        "ele": 27.75,
        "distanceKm": 13.845256646441666,
        "gradePct": -1.2377036101754024,
        "smoothedEle": 32.37189076432472,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886932886835098,
        "lng": 121.23906830862317,
        "ele": 28.49381841816386,
        "distanceKm": 13.896234118272181,
        "gradePct": -0.47109297340539225,
        "smoothedEle": 32.716161844842574,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88712,
        "lng": 121.239523,
        "ele": 30.25,
        "distanceKm": 13.94724884713071,
        "gradePct": 0.2220576663330939,
        "smoothedEle": 33.23602420257541,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887342,
        "lng": 121.240005,
        "ele": 33.25,
        "distanceKm": 14.0024521599631,
        "gradePct": 0.7591412996822583,
        "smoothedEle": 33.92500891023208,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88761,
        "lng": 121.240426,
        "ele": 36,
        "distanceKm": 14.054873935002638,
        "gradePct": 1.167111765030502,
        "smoothedEle": 34.77106365742094,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887918,
        "lng": 121.240968,
        "ele": 38.75,
        "distanceKm": 14.12010972715349,
        "gradePct": 1.6020279698167192,
        "smoothedEle": 36.16352066195997,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888064,
        "lng": 121.241364,
        "ele": 39.75,
        "distanceKm": 14.163804000543314,
        "gradePct": 1.8132110310545246,
        "smoothedEle": 37.069068783315274,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888294,
        "lng": 121.242036,
        "ele": 39.75,
        "distanceKm": 14.237241013406523,
        "gradePct": 1.9028975040926173,
        "smoothedEle": 38.29227431088049,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888444,
        "lng": 121.242497,
        "ele": 39,
        "distanceKm": 14.287324805092352,
        "gradePct": 1.6443026977857174,
        "smoothedEle": 38.752332388103234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888652,
        "lng": 121.242938,
        "ele": 39,
        "distanceKm": 14.338077173656918,
        "gradePct": 1.1488950959844613,
        "smoothedEle": 38.83367972894309,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888864176772884,
        "lng": 121.24329420918075,
        "ele": 38.8709387026262,
        "distanceKm": 14.381530015526213,
        "gradePct": 0.6000557791841871,
        "smoothedEle": 38.564434174368465,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889076322145844,
        "lng": 121.24365044041456,
        "ele": 38.764802384270475,
        "distanceKm": 14.424982811053166,
        "gradePct": 0.04786976677375438,
        "smoothedEle": 38.18383477597149,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889288,
        "lng": 121.244007,
        "ele": 39,
        "distanceKm": 14.468435628969125,
        "gradePct": -0.4060588192397653,
        "smoothedEle": 37.766703165235576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889498,
        "lng": 121.244333,
        "ele": 38.5,
        "distanceKm": 14.509184956362917,
        "gradePct": -0.7122059628842504,
        "smoothedEle": 37.3629585349708,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889677,
        "lng": 121.244632,
        "ele": 37.5,
        "distanceKm": 14.545713305935987,
        "gradePct": -0.8480800114694378,
        "smoothedEle": 37.09020416617215,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889897,
        "lng": 121.244936,
        "ele": 36,
        "distanceKm": 14.58531412093108,
        "gradePct": -0.8374099044330764,
        "smoothedEle": 36.85646970304509,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8903164032899,
        "lng": 121.2452529188468,
        "ele": 35.15035535686818,
        "distanceKm": 14.642136994631716,
        "gradePct": -0.6982451495936235,
        "smoothedEle": 36.622670410287114,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890765201644953,
        "lng": 121.24552395942341,
        "ele": 34.950177678434095,
        "distanceKm": 14.699244959677614,
        "gradePct": -0.45056273248186135,
        "smoothedEle": 36.560318628989634,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891214,
        "lng": 121.245795,
        "ele": 34.75,
        "distanceKm": 14.756352880077678,
        "gradePct": -0.33953061043108096,
        "smoothedEle": 36.34834537030511,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891462,
        "lng": 121.246026,
        "ele": 35.75,
        "distanceKm": 14.792690199892068,
        "gradePct": -0.306679366890813,
        "smoothedEle": 36.21276188742204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891902,
        "lng": 121.246391,
        "ele": 36.75,
        "distanceKm": 14.854267207629038,
        "gradePct": -0.30953876953780335,
        "smoothedEle": 35.990348827455215,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892431,
        "lng": 121.246698,
        "ele": 38.25,
        "distanceKm": 14.920968343114724,
        "gradePct": -0.4598721483080775,
        "smoothedEle": 35.55994144739782,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893063,
        "lng": 121.24695,
        "ele": 36.75,
        "distanceKm": 14.995834773376577,
        "gradePct": -0.5317219605595956,
        "smoothedEle": 35.13795992477593,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893681,
        "lng": 121.247225,
        "ele": 34.75,
        "distanceKm": 15.070103125898589,
        "gradePct": -0.6127419862824638,
        "smoothedEle": 34.66267924675078,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894274,
        "lng": 121.247462,
        "ele": 32,
        "distanceKm": 15.140369026467411,
        "gradePct": -0.7345292190331304,
        "smoothedEle": 33.9815318639325,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894726,
        "lng": 121.247637,
        "ele": 32.0625,
        "distanceKm": 15.193730379753076,
        "gradePct": -1.0458075457345724,
        "smoothedEle": 33.05820616050424,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895177999999998,
        "lng": 121.247812,
        "ele": 32.125,
        "distanceKm": 15.247091712975848,
        "gradePct": -1.2542279569353143,
        "smoothedEle": 32.301484980201536,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89563,
        "lng": 121.247987,
        "ele": 32.1875,
        "distanceKm": 15.300453026135784,
        "gradePct": -1.3242348408434215,
        "smoothedEle": 31.72000206259105,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896082,
        "lng": 121.248162,
        "ele": 32.25,
        "distanceKm": 15.353814319231827,
        "gradePct": -1.1535615988716976,
        "smoothedEle": 31.441761185660567,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896549,
        "lng": 121.248373,
        "ele": 29.5,
        "distanceKm": 15.410060874870975,
        "gradePct": -0.5585124287244112,
        "smoothedEle": 31.709597292795515,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8968635,
        "lng": 121.248549,
        "ele": 29.874999999999993,
        "distanceKm": 15.449405273779549,
        "gradePct": -0.1682207695495161,
        "smoothedEle": 31.939832365764584,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897178,
        "lng": 121.248725,
        "ele": 30.25,
        "distanceKm": 15.488749653537077,
        "gradePct": 0.14360091543865977,
        "smoothedEle": 32.13473657288691,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897692,
        "lng": 121.249067,
        "ele": 31,
        "distanceKm": 15.55578593543333,
        "gradePct": 0.5898675651343094,
        "smoothedEle": 32.63088480207156,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898177,
        "lng": 121.249289,
        "ele": 34.25,
        "distanceKm": 15.614313834941145,
        "gradePct": 0.7946502588284786,
        "smoothedEle": 33.32378523024418,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898690479346307,
        "lng": 121.2494841286616,
        "ele": 34.977291886542,
        "distanceKm": 15.674807610236106,
        "gradePct": 1.2396110676789798,
        "smoothedEle": 34.54489260752127,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899205,
        "lng": 121.249676,
        "ele": 34.5,
        "distanceKm": 15.735301435900068,
        "gradePct": 1.8170879662774617,
        "smoothedEle": 36.11345107070015,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899766,
        "lng": 121.249947,
        "ele": 37,
        "distanceKm": 15.803579400601729,
        "gradePct": 2.483842321120898,
        "smoothedEle": 38.16438699043278,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9001445,
        "lng": 121.25016025000001,
        "ele": 38.812500000000014,
        "distanceKm": 15.850997557174603,
        "gradePct": 2.733732254614867,
        "smoothedEle": 39.53173524607098,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900523,
        "lng": 121.2503735,
        "ele": 40.624999999999964,
        "distanceKm": 15.898415685667585,
        "gradePct": 2.6527330504705007,
        "smoothedEle": 40.46249798236294,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9009015,
        "lng": 121.25058675,
        "ele": 42.437499999999986,
        "distanceKm": 15.945833786081637,
        "gradePct": 2.3518636762205403,
        "smoothedEle": 41.13354953058373,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90128,
        "lng": 121.2508,
        "ele": 44.25,
        "distanceKm": 15.993251858415713,
        "gradePct": 2.002779886525424,
        "smoothedEle": 41.85972768585874,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901695,
        "lng": 121.251054,
        "ele": 47,
        "distanceKm": 16.046226827420128,
        "gradePct": 1.640752431778067,
        "smoothedEle": 42.67567151819786,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902066,
        "lng": 121.251288,
        "ele": 46.25,
        "distanceKm": 16.093937771227868,
        "gradePct": 1.380148516288306,
        "smoothedEle": 43.134898760294895,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902498,
        "lng": 121.251663,
        "ele": 42,
        "distanceKm": 16.15544301638986,
        "gradePct": 0.9960779791729912,
        "smoothedEle": 43.27286484812246,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902854,
        "lng": 121.252111,
        "ele": 42.25,
        "distanceKm": 16.216046190910543,
        "gradePct": 0.40436624267362264,
        "smoothedEle": 43.019548531633234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903,
        "lng": 121.252648,
        "ele": 43.5,
        "distanceKm": 16.27339637703625,
        "gradePct": -0.2445537333785532,
        "smoothedEle": 42.448076323960635,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902854588052755,
        "lng": 121.25320084434847,
        "ele": 42.275294100545494,
        "distanceKm": 16.332286907901178,
        "gradePct": -0.91923619700632,
        "smoothedEle": 41.382449604535296,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902672,
        "lng": 121.253743,
        "ele": 40.25,
        "distanceKm": 16.391414512746305,
        "gradePct": -1.4042464086402595,
        "smoothedEle": 40.31401411596885,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902655,
        "lng": 121.25425,
        "ele": 39.75,
        "distanceKm": 16.44338054688786,
        "gradePct": -1.5867877757729423,
        "smoothedEle": 39.573596797708,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902781974626304,
        "lng": 121.2547633402749,
        "ele": 39.29651919177982,
        "distanceKm": 16.497824202966584,
        "gradePct": -1.6945471347147376,
        "smoothedEle": 38.616959481011826,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902908985255436,
        "lng": 121.2552766707004,
        "ele": 37.83109640537217,
        "distanceKm": 16.552267875490244,
        "gradePct": -1.8575520851448808,
        "smoothedEle": 37.306289461760734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903036,
        "lng": 121.25579,
        "ele": 36.25,
        "distanceKm": 16.606711507790713,
        "gradePct": -2.0956449097372993,
        "smoothedEle": 35.90477116161816,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903167,
        "lng": 121.256168,
        "ele": 35.25,
        "distanceKm": 16.648079115069724,
        "gradePct": -2.3371631531662986,
        "smoothedEle": 34.81671127361616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903433,
        "lng": 121.256627,
        "ele": 34.25,
        "distanceKm": 16.703624092974948,
        "gradePct": -2.5943870521073813,
        "smoothedEle": 33.288559565448395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903681582440655,
        "lng": 121.25696983588966,
        "ele": 32.47052580976692,
        "distanceKm": 16.7483139167184,
        "gradePct": -2.7110920458721233,
        "smoothedEle": 31.979292468523866,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90392929122033,
        "lng": 121.25731341794483,
        "ele": 30.73526290488346,
        "distanceKm": 16.79300383017756,
        "gradePct": -2.817787845033425,
        "smoothedEle": 30.622066141922105,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904177,
        "lng": 121.257657,
        "ele": 29,
        "distanceKm": 16.837693693015037,
        "gradePct": -2.853791477813546,
        "smoothedEle": 29.382287968762707,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904514147037503,
        "lng": 121.2579184833571,
        "ele": 27.173000132900555,
        "distanceKm": 16.883767251405608,
        "gradePct": -2.791450772939842,
        "smoothedEle": 28.251958828523563,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904863052442984,
        "lng": 121.25816206565781,
        "ele": 25.996711162146998,
        "distanceKm": 16.929893764822385,
        "gradePct": -2.650440867112709,
        "smoothedEle": 27.218061526752898,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90521195784846,
        "lng": 121.25840564795853,
        "ele": 24.820422191393444,
        "distanceKm": 16.9760202435169,
        "gradePct": -2.448771779341424,
        "smoothedEle": 26.24031169876386,
        "gradeBand": "descent"
      },
      {
        "lat": 22.905561,
        "lng": 121.258649,
        "ele": 23.5,
        "distanceKm": 17.022146728374178,
        "gradePct": -2.2093673143771673,
        "smoothedEle": 25.3948544494057,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90591297250987,
        "lng": 121.25886845273959,
        "ele": 23.6766930270446,
        "distanceKm": 17.067279947931553,
        "gradePct": -1.9764029859306778,
        "smoothedEle": 24.703638210337527,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906264945019746,
        "lng": 121.25908790547918,
        "ele": 23.853386054089214,
        "distanceKm": 17.1124131384313,
        "gradePct": -1.730770454003765,
        "smoothedEle": 24.148338059957602,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906616915183587,
        "lng": 121.25930736283921,
        "ele": 23.957924730627013,
        "distanceKm": 17.157546309359056,
        "gradePct": -1.4492913232114313,
        "smoothedEle": 23.733323781796475,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90696897493851,
        "lng": 121.25952665115241,
        "ele": 23.654804526341962,
        "distanceKm": 17.202679470805258,
        "gradePct": -1.1494912514507678,
        "smoothedEle": 23.452689382033697,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907321,
        "lng": 121.259746,
        "ele": 23.25,
        "distanceKm": 17.24781234333122,
        "gradePct": -0.8233723108733308,
        "smoothedEle": 23.355040376422,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907724333333334,
        "lng": 121.25996033333334,
        "ele": 22.999999999999993,
        "distanceKm": 17.297745781225537,
        "gradePct": -0.41563488754161576,
        "smoothedEle": 23.497529395020837,
        "gradeBand": "descent"
      },
      {
        "lat": 22.908127666666665,
        "lng": 121.26017466666667,
        "ele": 22.750000000000007,
        "distanceKm": 17.347679190408417,
        "gradePct": -0.029962485355099596,
        "smoothedEle": 23.764130199212843,
        "gradeBand": "descent"
      },
      {
        "lat": 22.908531,
        "lng": 121.260389,
        "ele": 22.5,
        "distanceKm": 17.39761257088016,
        "gradePct": 0.23801077406915191,
        "smoothedEle": 23.960216509962432,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908908398429396,
        "lng": 121.2605943327098,
        "ele": 23.053864819617402,
        "distanceKm": 17.44455250496861,
        "gradePct": 0.3330282385501662,
        "smoothedEle": 24.028149805323274,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909289323117275,
        "lng": 121.26079209094651,
        "ele": 24.102460033300453,
        "distanceKm": 17.49150340836296,
        "gradePct": 0.3038363530130798,
        "smoothedEle": 24.08738899583283,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909670161558637,
        "lng": 121.26099004547326,
        "ele": 25.426230016650177,
        "distanceKm": 17.538454314145216,
        "gradePct": 0.23718873875862995,
        "smoothedEle": 24.189254892460283,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910051,
        "lng": 121.261188,
        "ele": 26.75,
        "distanceKm": 17.58540519533145,
        "gradePct": 0.21300046668146144,
        "smoothedEle": 24.338279586671813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910398,
        "lng": 121.261393,
        "ele": 25.625,
        "distanceKm": 17.629332924630805,
        "gradePct": 0.25833757227210535,
        "smoothedEle": 24.522798582203485,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910745,
        "lng": 121.261598,
        "ele": 24.5,
        "distanceKm": 17.67326062824221,
        "gradePct": 0.3446979732077716,
        "smoothedEle": 24.753767546439818,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91116625368928,
        "lng": 121.26184122289725,
        "ele": 24.101010580428508,
        "distanceKm": 17.726314372636203,
        "gradePct": 0.42218301650751194,
        "smoothedEle": 25.007281795138702,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911587049908647,
        "lng": 121.26208538016904,
        "ele": 24.299208257205553,
        "distanceKm": 17.779368216273806,
        "gradePct": 0.4124420885061145,
        "smoothedEle": 25.144002058188924,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.912007524954323,
        "lng": 121.26233019008451,
        "ele": 24.64960412860278,
        "distanceKm": 17.832422088532017,
        "gradePct": 0.2925305430863478,
        "smoothedEle": 25.124102288134566,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.912428,
        "lng": 121.262575,
        "ele": 25,
        "distanceKm": 17.88547592403377,
        "gradePct": 0.14009481941559138,
        "smoothedEle": 25.092327269618572,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.912848204677864,
        "lng": 121.26276526750274,
        "ele": 25.550967672024044,
        "distanceKm": 17.936101616005725,
        "gradePct": 0.08323196950777352,
        "smoothedEle": 25.19896755403139,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9132682623499,
        "lng": 121.26295591778029,
        "ele": 25.75,
        "distanceKm": 17.986727306818967,
        "gradePct": 0.10791172479268278,
        "smoothedEle": 25.357065215199505,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.913688236884756,
        "lng": 121.26314678453102,
        "ele": 25.75,
        "distanceKm": 18.03735300251246,
        "gradePct": 0.22024401906811952,
        "smoothedEle": 25.561637101842305,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.914108211419613,
        "lng": 121.26333765128176,
        "ele": 25.75,
        "distanceKm": 18.08797867481826,
        "gradePct": 0.31095788409340597,
        "smoothedEle": 25.719514947088523,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.914528,
        "lng": 121.263529,
        "ele": 26,
        "distanceKm": 18.138604339773003,
        "gradePct": 0.2861176262547068,
        "smoothedEle": 25.779018497898306,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.914869484985314,
        "lng": 121.26369181773562,
        "ele": 25.81989188538411,
        "distanceKm": 18.180076186626646,
        "gradePct": 0.2515864130037313,
        "smoothedEle": 25.839467429889623,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91521,
        "lng": 121.263857,
        "ele": 25.75,
        "distanceKm": 18.221547489698537,
        "gradePct": 0.21855781310930922,
        "smoothedEle": 25.9348846956041,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.915746,
        "lng": 121.264063,
        "ele": 26.5,
        "distanceKm": 18.284772256331777,
        "gradePct": 0.3257054490576537,
        "smoothedEle": 26.36092652235937,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91617213417067,
        "lng": 121.26411623553378,
        "ele": 25.77666564552485,
        "distanceKm": 18.332468940711376,
        "gradePct": 0.5054053813323094,
        "smoothedEle": 26.782617937410365,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916604,
        "lng": 121.264105,
        "ele": 25.25,
        "distanceKm": 18.380504081703467,
        "gradePct": 0.7211857397128999,
        "smoothedEle": 27.282823411253354,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917128,
        "lng": 121.264054,
        "ele": 26.75,
        "distanceKm": 18.439003961803813,
        "gradePct": 0.9488549591291803,
        "smoothedEle": 27.950225530676697,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917714,
        "lng": 121.264137,
        "ele": 29,
        "distanceKm": 18.504716433129,
        "gradePct": 1.053530487749285,
        "smoothedEle": 28.644316067548747,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91806691382853,
        "lng": 121.26428474131237,
        "ele": 29.913302911202507,
        "distanceKm": 18.546774892150196,
        "gradePct": 0.990396585581795,
        "smoothedEle": 28.912383612254295,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91842,
        "lng": 121.264432,
        "ele": 30.75,
        "distanceKm": 18.588833467854375,
        "gradePct": 0.9714964799150732,
        "smoothedEle": 29.320843061071166,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91881,
        "lng": 121.264563,
        "ele": 31.5,
        "distanceKm": 18.634227560717907,
        "gradePct": 1.0274763154269575,
        "smoothedEle": 29.950686080478793,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.919309,
        "lng": 121.264676,
        "ele": 31.75,
        "distanceKm": 18.690907992236355,
        "gradePct": 1.1039713100586206,
        "smoothedEle": 30.70640649310898,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9197265,
        "lng": 121.264759,
        "ele": 30.624999999999957,
        "distanceKm": 18.738103781241886,
        "gradePct": 1.1498685352294875,
        "smoothedEle": 31.156853717038445,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.920144,
        "lng": 121.264842,
        "ele": 29.5,
        "distanceKm": 18.785299565530227,
        "gradePct": 1.1069652280766715,
        "smoothedEle": 31.5004533869936,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.920555037703142,
        "lng": 121.26494742369871,
        "ele": 31.370077802375608,
        "distanceKm": 18.83226292865333,
        "gradePct": 0.9508151723186805,
        "smoothedEle": 31.825057156045638,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.920964,
        "lng": 121.265063,
        "ele": 33,
        "distanceKm": 18.87925281107288,
        "gradePct": 0.8208129823787929,
        "smoothedEle": 32.19263388234103,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9213395,
        "lng": 121.265227,
        "ele": 32.625000000000014,
        "distanceKm": 18.924258201512853,
        "gradePct": 0.7889347736203308,
        "smoothedEle": 32.602577937671555,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.921715,
        "lng": 121.265391,
        "ele": 32.25,
        "distanceKm": 18.96926357458194,
        "gradePct": 0.8475143657699616,
        "smoothedEle": 33.078735225133634,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9220385,
        "lng": 121.2655355,
        "ele": 32.75,
        "distanceKm": 19.008160425527215,
        "gradePct": 0.9709036029610728,
        "smoothedEle": 33.60027145128085,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.922362,
        "lng": 121.26568,
        "ele": 33.25,
        "distanceKm": 19.047057263029256,
        "gradePct": 1.127317296425272,
        "smoothedEle": 34.19541991669768,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.922673,
        "lng": 121.265855,
        "ele": 34.37499999999995,
        "distanceKm": 19.086007331313827,
        "gradePct": 1.217882755242688,
        "smoothedEle": 34.68992480994457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.922984,
        "lng": 121.26603,
        "ele": 35.5,
        "distanceKm": 19.124957380668604,
        "gradePct": 1.2292729413831127,
        "smoothedEle": 35.06852114274731,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.923404164483735,
        "lng": 121.2662909685382,
        "ele": 36.74497465960165,
        "distanceKm": 19.17878209143832,
        "gradePct": 1.1733605332749881,
        "smoothedEle": 35.55308233952944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.923825139534173,
        "lng": 121.26655042266226,
        "ele": 37.32909317814678,
        "distanceKm": 19.23260828109472,
        "gradePct": 1.0745203580136542,
        "smoothedEle": 36.12338123456766,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.924245,
        "lng": 121.266812,
        "ele": 37.25,
        "distanceKm": 19.286434572319983,
        "gradePct": 0.9824222624438547,
        "smoothedEle": 36.658922137738394,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9245555,
        "lng": 121.2670095,
        "ele": 37.12500000000001,
        "distanceKm": 19.326449100984146,
        "gradePct": 0.9573948073968451,
        "smoothedEle": 36.9967400871375,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.924866,
        "lng": 121.267207,
        "ele": 37,
        "distanceKm": 19.36646360621555,
        "gradePct": 0.8999729890362465,
        "smoothedEle": 37.24213018444473,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925266430193613,
        "lng": 121.26745013283185,
        "ele": 37.45765787252202,
        "distanceKm": 19.417478830399716,
        "gradePct": 0.7358416445827336,
        "smoothedEle": 37.43476506599751,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925667016473298,
        "lng": 121.26769296536615,
        "ele": 37.75,
        "distanceKm": 19.468494168534473,
        "gradePct": 0.5374076500680421,
        "smoothedEle": 37.55524065074994,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926067539291925,
        "lng": 121.26793592199819,
        "ele": 37.75,
        "distanceKm": 19.519509506976352,
        "gradePct": 0.33818165494795005,
        "smoothedEle": 37.61451669126334,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926468,
        "lng": 121.268179,
        "ele": 37.75,
        "distanceKm": 19.57052484454934,
        "gradePct": 0.13051357181667148,
        "smoothedEle": 37.51849267508278,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926913,
        "lng": 121.268461,
        "ele": 37.75,
        "distanceKm": 19.627817952765618,
        "gradePct": -0.11524779017776905,
        "smoothedEle": 37.22868590349593,
        "gradeBand": "descent"
      },
      {
        "lat": 22.92721459326235,
        "lng": 121.2686710012512,
        "ele": 37.798938832359845,
        "distanceKm": 19.667657226092672,
        "gradePct": -0.28572510345841196,
        "smoothedEle": 36.98181395727502,
        "gradeBand": "descent"
      },
      {
        "lat": 22.927515,
        "lng": 121.268883,
        "ele": 38.25,
        "distanceKm": 19.707496587045778,
        "gradePct": -0.4242974092900284,
        "smoothedEle": 36.75196375047461,
        "gradeBand": "descent"
      },
      {
        "lat": 22.927814,
        "lng": 121.269267,
        "ele": 37.75,
        "distanceKm": 19.758993059124364,
        "gradePct": -0.519963424907667,
        "smoothedEle": 36.5002716181313,
        "gradeBand": "descent"
      },
      {
        "lat": 22.928077,
        "lng": 121.269636,
        "ele": 35.75,
        "distanceKm": 19.806776577110387,
        "gradePct": -0.49671520372889155,
        "smoothedEle": 36.341689469307134,
        "gradeBand": "descent"
      },
      {
        "lat": 22.928441,
        "lng": 121.270095,
        "ele": 34,
        "distanceKm": 19.868807257687404,
        "gradePct": -0.3679206379562152,
        "smoothedEle": 36.23933766027911,
        "gradeBand": "descent"
      },
      {
        "lat": 22.928673,
        "lng": 121.270326,
        "ele": 34.25,
        "distanceKm": 19.903809190120406,
        "gradePct": -0.2669467870788092,
        "smoothedEle": 36.239344336483605,
        "gradeBand": "descent"
      },
      {
        "lat": 22.92900894994108,
        "lng": 121.27065286013008,
        "ele": 34.848013881022105,
        "distanceKm": 19.953968434925116,
        "gradePct": -0.12685954333339966,
        "smoothedEle": 36.27111068715723,
        "gradeBand": "descent"
      },
      {
        "lat": 22.92934621245581,
        "lng": 121.27097814509756,
        "ele": 35.63601041076656,
        "distanceKm": 20.00412914299111,
        "gradePct": -0.0014019252687553824,
        "smoothedEle": 36.34767182391316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.92968347497054,
        "lng": 121.27130343006503,
        "ele": 36.42400694051108,
        "distanceKm": 20.054289795970206,
        "gradePct": 0.16508475293511596,
        "smoothedEle": 36.59346125556813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93002073748527,
        "lng": 121.27162871503252,
        "ele": 37.21200347025554,
        "distanceKm": 20.104450393862674,
        "gradePct": 0.3941099950838037,
        "smoothedEle": 37.02797040738487,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930358,
        "lng": 121.271954,
        "ele": 38,
        "distanceKm": 20.154610936665893,
        "gradePct": 0.6566422428842552,
        "smoothedEle": 37.58537583419505,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930661788021318,
        "lng": 121.2722584549544,
        "ele": 38.50019981556139,
        "distanceKm": 20.200580288273457,
        "gradePct": 0.8549104911926011,
        "smoothedEle": 38.0520761293446,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930965576042635,
        "lng": 121.27256290990881,
        "ele": 39.000399631122775,
        "distanceKm": 20.246549592448385,
        "gradePct": 0.9339409449674247,
        "smoothedEle": 38.42341580382114,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93126936388191,
        "lng": 121.2728673650789,
        "ele": 39.5,
        "distanceKm": 20.292518849294478,
        "gradePct": 0.8813467191873268,
        "smoothedEle": 38.687308512529555,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.931573,
        "lng": 121.273172,
        "ele": 39.5,
        "distanceKm": 20.33848815346866,
        "gradePct": 0.7097092653727576,
        "smoothedEle": 38.82563109542258,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932109,
        "lng": 121.273585,
        "ele": 39.75,
        "distanceKm": 20.41157047044006,
        "gradePct": 0.2659950727497114,
        "smoothedEle": 38.67284487920695,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93248357803639,
        "lng": 121.27384603635089,
        "ele": 39.293642743192365,
        "distanceKm": 20.461062094024417,
        "gradePct": -0.17295971363454105,
        "smoothedEle": 38.16080734596487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.932858156072776,
        "lng": 121.27410707270178,
        "ele": 38.83728548638473,
        "distanceKm": 20.510553677671513,
        "gradePct": -0.7633487347384423,
        "smoothedEle": 37.21487821302531,
        "gradeBand": "descent"
      },
      {
        "lat": 22.933232746782554,
        "lng": 121.27436808807758,
        "ele": 38.18264031638265,
        "distanceKm": 20.560045247236356,
        "gradePct": -1.4261129998103799,
        "smoothedEle": 35.92833773989601,
        "gradeBand": "descent"
      },
      {
        "lat": 22.933607373391276,
        "lng": 121.27462904403879,
        "ele": 36.96632015819132,
        "distanceKm": 20.60953685084508,
        "gradePct": -2.1516143140727633,
        "smoothedEle": 34.37386774521235,
        "gradeBand": "descent"
      },
      {
        "lat": 22.933982,
        "lng": 121.27489,
        "ele": 35.75,
        "distanceKm": 20.65902841453509,
        "gradePct": -2.3738497911080976,
        "smoothedEle": 33.43414809651015,
        "gradeBand": "descent"
      },
      {
        "lat": 22.934387,
        "lng": 121.275161,
        "ele": 30.75,
        "distanceKm": 20.71192669925172,
        "gradePct": -2.2378342998027074,
        "smoothedEle": 32.703517719852016,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93484510544992,
        "lng": 121.2754598075383,
        "ele": 27.002091974993462,
        "distanceKm": 20.771349874779386,
        "gradePct": -1.704679919485364,
        "smoothedEle": 32.16391354585522,
        "gradeBand": "descent"
      },
      {
        "lat": 22.935303,
        "lng": 121.275759,
        "ele": 23.75,
        "distanceKm": 20.830773209761457,
        "gradePct": -1.0397764454912135,
        "smoothedEle": 31.89109009726713,
        "gradeBand": "descent"
      },
      {
        "lat": 22.935744,
        "lng": 121.276039,
        "ele": 30,
        "distanceKm": 20.887578008890127,
        "gradePct": -0.5580993070372566,
        "smoothedEle": 31.923622880187597,
        "gradeBand": "descent"
      },
      {
        "lat": 22.936014,
        "lng": 121.276216,
        "ele": 32.25,
        "distanceKm": 20.92264788120299,
        "gradePct": -0.24649515230584115,
        "smoothedEle": 32.11317155231793,
        "gradeBand": "descent"
      },
      {
        "lat": 22.936461,
        "lng": 121.276468,
        "ele": 34,
        "distanceKm": 20.97865186314165,
        "gradePct": 0.41004684341496195,
        "smoothedEle": 32.95048246253981,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.936869,
        "lng": 121.2766,
        "ele": 35.5,
        "distanceKm": 21.025990379295994,
        "gradePct": 1.1169706717725991,
        "smoothedEle": 34.146990294215506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.937269,
        "lng": 121.276684,
        "ele": 36.50000000000003,
        "distanceKm": 21.07129256011205,
        "gradePct": 1.854030388032274,
        "smoothedEle": 35.62235678637518,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.937669,
        "lng": 121.276768,
        "ele": 37.49999999999997,
        "distanceKm": 21.116594736102723,
        "gradePct": 2.593663316644486,
        "smoothedEle": 37.26778162463021,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.938069,
        "lng": 121.276852,
        "ele": 38.5,
        "distanceKm": 21.16189690726795,
        "gradePct": 2.904445011094829,
        "smoothedEle": 38.50887052276713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9384845,
        "lng": 121.276925,
        "ele": 39.625,
        "distanceKm": 21.20869931050265,
        "gradePct": 2.9889424163388476,
        "smoothedEle": 39.68783356095509,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9389,
        "lng": 121.276998,
        "ele": 40.75,
        "distanceKm": 21.255501710072597,
        "gradePct": 2.8601647273104223,
        "smoothedEle": 40.828422013286506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.939332,
        "lng": 121.27704671428572,
        "ele": 41.92857142857145,
        "distanceKm": 21.30379630691792,
        "gradePct": 2.5842406973588354,
        "smoothedEle": 41.971410000462946,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.939764,
        "lng": 121.27709542857143,
        "ele": 43.10714285714282,
        "distanceKm": 21.35209090211902,
        "gradePct": 2.4427169839021285,
        "smoothedEle": 43.12566120455709,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.940196,
        "lng": 121.27714414285714,
        "ele": 44.28571428571427,
        "distanceKm": 21.400385495675874,
        "gradePct": 2.4145729946222954,
        "smoothedEle": 44.307552689404645,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.940628,
        "lng": 121.27719285714286,
        "ele": 45.46428571428573,
        "distanceKm": 21.448680087588606,
        "gradePct": 2.37509455540008,
        "smoothedEle": 45.41236614727141,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94106,
        "lng": 121.27724157142858,
        "ele": 46.64285714285718,
        "distanceKm": 21.496974677856894,
        "gradePct": 2.289934907383693,
        "smoothedEle": 46.38983235362921,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.941492,
        "lng": 121.27729028571429,
        "ele": 47.82142857142855,
        "distanceKm": 21.545269266480865,
        "gradePct": 2.1966600868473884,
        "smoothedEle": 47.35594282049101,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.941924,
        "lng": 121.277339,
        "ele": 49,
        "distanceKm": 21.593563853460495,
        "gradePct": 2.087068875054623,
        "smoothedEle": 48.31474751167785,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.942262,
        "lng": 121.277438,
        "ele": 50.25,
        "distanceKm": 21.63249099307446,
        "gradePct": 2.0350264604758337,
        "smoothedEle": 49.11206850138888,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.942633,
        "lng": 121.277663,
        "ele": 50.25,
        "distanceKm": 21.67974217560161,
        "gradePct": 2.0901575318095134,
        "smoothedEle": 50.221367388016176,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94285722387146,
        "lng": 121.27802819939794,
        "ele": 50.07878635844459,
        "distanceKm": 21.72468767878489,
        "gradePct": 2.2375719115905257,
        "smoothedEle": 51.41936168929804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943082,
        "lng": 121.278393,
        "ele": 51,
        "distanceKm": 21.76963327889625,
        "gradePct": 2.435249511191406,
        "smoothedEle": 52.71014676429409,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943314,
        "lng": 121.278666,
        "ele": 52,
        "distanceKm": 21.807672349656034,
        "gradePct": 2.6241773123071277,
        "smoothedEle": 53.85207790644929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943643,
        "lng": 121.278854,
        "ele": 52.75,
        "distanceKm": 21.84901151312714,
        "gradePct": 2.7995154861200606,
        "smoothedEle": 55.09894573526307,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.944007000000003,
        "lng": 121.27897833333333,
        "ele": 55.25,
        "distanceKm": 21.891441662506757,
        "gradePct": 2.9004205758128943,
        "smoothedEle": 56.33405105218729,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.944371,
        "lng": 121.27910266666667,
        "ele": 57.75,
        "distanceKm": 21.933871801612582,
        "gradePct": 2.9619181342664653,
        "smoothedEle": 57.60695522536204,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.944735,
        "lng": 121.279227,
        "ele": 60.25,
        "distanceKm": 21.976301930444365,
        "gradePct": 3.0542147257314167,
        "smoothedEle": 59.018768826324674,
        "gradeBand": "hard"
      },
      {
        "lat": 22.945247486690665,
        "lng": 121.27941006832454,
        "ele": 62.785280956654965,
        "distanceKm": 22.036291973263033,
        "gradePct": 3.2019333519832758,
        "smoothedEle": 61.119166914690744,
        "gradeBand": "hard"
      },
      {
        "lat": 22.945752,
        "lng": 121.279619,
        "ele": 64,
        "distanceKm": 22.096332324068335,
        "gradePct": 3.261942411550238,
        "smoothedEle": 63.0046557221351,
        "gradeBand": "hard"
      },
      {
        "lat": 22.946273,
        "lng": 121.279876,
        "ele": 65.25,
        "distanceKm": 22.159961854038023,
        "gradePct": 3.077740032333388,
        "smoothedEle": 64.63055169406093,
        "gradeBand": "hard"
      },
      {
        "lat": 22.94670247152423,
        "lng": 121.28007406414294,
        "ele": 66.86716191782712,
        "distanceKm": 22.211845094997148,
        "gradePct": 2.697396226910835,
        "smoothedEle": 65.65801438225208,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.947132,
        "lng": 121.280272,
        "ele": 68.5,
        "distanceKm": 22.263729006922077,
        "gradePct": 2.3823008623729627,
        "smoothedEle": 66.74539285015052,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.947498134399734,
        "lng": 121.28043965497154,
        "ele": 68.31204599602987,
        "distanceKm": 22.307912769586,
        "gradePct": 2.175926579544968,
        "smoothedEle": 67.65241865345261,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.947864,
        "lng": 121.280608,
        "ele": 66.75,
        "distanceKm": 22.35209649349537,
        "gradePct": 2.0570553769839113,
        "smoothedEle": 68.54368252518262,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948253,
        "lng": 121.280788,
        "ele": 67.375,
        "distanceKm": 22.399114472372812,
        "gradePct": 2.0246137004866327,
        "smoothedEle": 69.45513263387107,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948642,
        "lng": 121.280968,
        "ele": 68,
        "distanceKm": 22.446132430480468,
        "gradePct": 1.9829244649041016,
        "smoothedEle": 70.3424542768302,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.949053,
        "lng": 121.281157,
        "ele": 71.75,
        "distanceKm": 22.495762242449185,
        "gradePct": 1.8872164319823095,
        "smoothedEle": 71.1774195774387,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94936,
        "lng": 121.281299,
        "ele": 73,
        "distanceKm": 22.532866658398756,
        "gradePct": 1.792521143294393,
        "smoothedEle": 71.74082502052491,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.949717989742325,
        "lng": 121.28145352794633,
        "ele": 73.80483305378569,
        "distanceKm": 22.575702756972515,
        "gradePct": 1.7716017363262175,
        "smoothedEle": 72.54449672304413,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.950076,
        "lng": 121.281608,
        "ele": 74.25,
        "distanceKm": 22.618538846441623,
        "gradePct": 1.9590970174740292,
        "smoothedEle": 73.73990293469453,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95061370990739,
        "lng": 121.28174654844662,
        "ele": 75.04032325703106,
        "distanceKm": 22.67998949285321,
        "gradePct": 2.559602656053835,
        "smoothedEle": 76.03126626565862,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.951151,
        "lng": 121.281887,
        "ele": 75.75,
        "distanceKm": 22.74144001860045,
        "gradePct": 3.268745009379498,
        "smoothedEle": 78.43916458485448,
        "gradeBand": "hard"
      },
      {
        "lat": 22.951438,
        "lng": 121.281918,
        "ele": 76.25,
        "distanceKm": 22.773510474562237,
        "gradePct": 3.4725254848358684,
        "smoothedEle": 79.44841707168048,
        "gradeBand": "hard"
      },
      {
        "lat": 22.95172,
        "lng": 121.281814,
        "ele": 78,
        "distanceKm": 22.80662631892389,
        "gradePct": 3.3811370015863513,
        "smoothedEle": 80.16973974372455,
        "gradeBand": "hard"
      },
      {
        "lat": 22.952038,
        "lng": 121.28159,
        "ele": 81,
        "distanceKm": 22.84877349046446,
        "gradePct": 2.9628563106953045,
        "smoothedEle": 80.79300084304637,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.952452,
        "lng": 121.281442,
        "ele": 86,
        "distanceKm": 22.89723835067021,
        "gradePct": 2.358922290831893,
        "smoothedEle": 81.42499596369134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.952788,
        "lng": 121.28153,
        "ele": 87.75,
        "distanceKm": 22.935671063860624,
        "gradePct": 1.8558059880008595,
        "smoothedEle": 81.9247238745264,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953041,
        "lng": 121.28173,
        "ele": 89.5,
        "distanceKm": 22.97046744865624,
        "gradePct": 1.456608856557315,
        "smoothedEle": 82.26587121140652,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953105,
        "lng": 121.281838,
        "ele": 89.5,
        "distanceKm": 22.983617701611042,
        "gradePct": 1.355143818431356,
        "smoothedEle": 82.37885829853417,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953212,
        "lng": 121.282134,
        "ele": 87.25,
        "distanceKm": 23.01617718552598,
        "gradePct": 1.1252144794973344,
        "smoothedEle": 82.56140436338899,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953255,
        "lng": 121.282533,
        "ele": 81.75,
        "distanceKm": 23.05731005595531,
        "gradePct": 0.8746831616179976,
        "smoothedEle": 82.65368633060842,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953335,
        "lng": 121.282983,
        "ele": 80.5,
        "distanceKm": 23.104236857561624,
        "gradePct": 0.4524322321894106,
        "smoothedEle": 82.4208597080451,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953571,
        "lng": 121.283508,
        "ele": 81.5,
        "distanceKm": 23.16405547570571,
        "gradePct": -0.3941358456417291,
        "smoothedEle": 81.41473587756165,
        "gradeBand": "descent"
      },
      {
        "lat": 22.95379865418003,
        "lng": 121.28390390225103,
        "ele": 80.0460043246316,
        "distanceKm": 23.21184694508544,
        "gradePct": -1.1929207401748456,
        "smoothedEle": 80.15128521468435,
        "gradeBand": "descent"
      },
      {
        "lat": 22.954026308360056,
        "lng": 121.28429980450207,
        "ele": 78.59200864926319,
        "distanceKm": 23.25963835660644,
        "gradePct": -1.9951479937997971,
        "smoothedEle": 78.6518385142381,
        "gradeBand": "descent"
      },
      {
        "lat": 22.954255,
        "lng": 121.284695,
        "ele": 77.75,
        "distanceKm": 23.307429628373217,
        "gradePct": -2.477143630197249,
        "smoothedEle": 77.41287139439193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.954507666666668,
        "lng": 121.285067,
        "ele": 76.66666666666667,
        "distanceKm": 23.354759621006526,
        "gradePct": -2.573942403413954,
        "smoothedEle": 76.42320341098727,
        "gradeBand": "descent"
      },
      {
        "lat": 22.954760333333333,
        "lng": 121.285439,
        "ele": 75.58333333333333,
        "distanceKm": 23.40208955638858,
        "gradePct": -2.50376658109535,
        "smoothedEle": 75.4017056031377,
        "gradeBand": "descent"
      },
      {
        "lat": 22.955013,
        "lng": 121.285811,
        "ele": 74.5,
        "distanceKm": 23.449419434519292,
        "gradePct": -2.304569799975178,
        "smoothedEle": 74.36331570542309,
        "gradeBand": "descent"
      },
      {
        "lat": 22.95534,
        "lng": 121.286188,
        "ele": 72.875,
        "distanceKm": 23.50244899347086,
        "gradePct": -2.093906355165203,
        "smoothedEle": 73.35417939275688,
        "gradeBand": "descent"
      },
      {
        "lat": 22.955667,
        "lng": 121.286565,
        "ele": 71.25,
        "distanceKm": 23.555478484500423,
        "gradePct": -1.9936042764205268,
        "smoothedEle": 72.42047999472561,
        "gradeBand": "descent"
      },
      {
        "lat": 22.955979454619985,
        "lng": 121.28694526007885,
        "ele": 70.04897254913591,
        "distanceKm": 23.60766084447627,
        "gradePct": -1.8671306159566252,
        "smoothedEle": 71.54521356277957,
        "gradeBand": "descent"
      },
      {
        "lat": 22.956306727309993,
        "lng": 121.28731113003943,
        "ele": 70.14948627456795,
        "distanceKm": 23.659887653970312,
        "gradePct": -1.723025093737589,
        "smoothedEle": 70.7180584985829,
        "gradeBand": "descent"
      },
      {
        "lat": 22.956634,
        "lng": 121.287677,
        "ele": 70.25,
        "distanceKm": 23.712114398454077,
        "gradePct": -1.6269015552063792,
        "smoothedEle": 69.93019582917842,
        "gradeBand": "descent"
      },
      {
        "lat": 22.956974333333335,
        "lng": 121.28797333333334,
        "ele": 69.66666666666667,
        "distanceKm": 23.760619071557038,
        "gradePct": -1.5339404933320877,
        "smoothedEle": 69.26637478797568,
        "gradeBand": "descent"
      },
      {
        "lat": 22.957314666666665,
        "lng": 121.28826966666666,
        "ele": 69.08333333333333,
        "distanceKm": 23.809123696905424,
        "gradePct": -1.3735454532102032,
        "smoothedEle": 68.77495436776049,
        "gradeBand": "descent"
      },
      {
        "lat": 22.957655,
        "lng": 121.288566,
        "ele": 68.5,
        "distanceKm": 23.857628274501074,
        "gradePct": -1.1727554512174518,
        "smoothedEle": 68.40833107953569,
        "gradeBand": "descent"
      },
      {
        "lat": 22.958005,
        "lng": 121.28884266666667,
        "ele": 67.74999999999999,
        "distanceKm": 23.90576416603737,
        "gradePct": -1.0429177892735064,
        "smoothedEle": 67.94015620943794,
        "gradeBand": "descent"
      },
      {
        "lat": 22.958354999999997,
        "lng": 121.28911933333333,
        "ele": 67.00000000000001,
        "distanceKm": 23.953900014436353,
        "gradePct": -1.0660675910651387,
        "smoothedEle": 67.22619469405485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.958705,
        "lng": 121.289396,
        "ele": 66.25,
        "distanceKm": 24.002035819698122,
        "gradePct": -1.2718081110898725,
        "smoothedEle": 66.3031483610113,
        "gradeBand": "descent"
      },
      {
        "lat": 22.959001,
        "lng": 121.289669,
        "ele": 67,
        "distanceKm": 24.04521690423054,
        "gradePct": -1.5759145590552408,
        "smoothedEle": 65.35031367169083,
        "gradeBand": "descent"
      },
      {
        "lat": 22.959327,
        "lng": 121.2901,
        "ele": 66.75,
        "distanceKm": 24.102325282471387,
        "gradePct": -2.0031616744454404,
        "smoothedEle": 63.967279812819065,
        "gradeBand": "descent"
      },
      {
        "lat": 22.959584422860207,
        "lng": 121.29051130549936,
        "ele": 64.13813182390338,
        "distanceKm": 24.15324451199389,
        "gradePct": -2.2590164135450097,
        "smoothedEle": 62.717884423702166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.95984214529176,
        "lng": 121.29092239107095,
        "ele": 61.52579736496823,
        "distanceKm": 24.204163793898022,
        "gradePct": -2.4171621012969466,
        "smoothedEle": 61.421868236452966,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96009957264588,
        "lng": 121.29133369553547,
        "ele": 59.26289868248403,
        "distanceKm": 24.25508308404138,
        "gradePct": -2.4993627263351765,
        "smoothedEle": 60.11265198660701,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960357,
        "lng": 121.291745,
        "ele": 57,
        "distanceKm": 24.3060023078928,
        "gradePct": -2.56938140084146,
        "smoothedEle": 58.73829454213455,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960547,
        "lng": 121.292286,
        "ele": 56.25,
        "distanceKm": 24.365285282453396,
        "gradePct": -2.7128174331186075,
        "smoothedEle": 56.98578346370008,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96066106223138,
        "lng": 121.29272805685065,
        "ele": 55.067327093983295,
        "distanceKm": 24.412288981393505,
        "gradePct": -2.804216299669391,
        "smoothedEle": 55.604524093528596,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960775159385804,
        "lng": 121.29317010312766,
        "ele": 53.953502559159595,
        "distanceKm": 24.459292649151127,
        "gradePct": -3.005888066726712,
        "smoothedEle": 53.98725575628305,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9608895796929,
        "lng": 121.29361205156383,
        "ele": 53.4767512795798,
        "distanceKm": 24.506296348134263,
        "gradePct": -3.2967834709427115,
        "smoothedEle": 52.136035243219325,
        "gradeBand": "descent"
      },
      {
        "lat": 22.961004,
        "lng": 121.294054,
        "ele": 53,
        "distanceKm": 24.553300010264138,
        "gradePct": -3.460201865322686,
        "smoothedEle": 50.41968587989384,
        "gradeBand": "descent"
      },
      {
        "lat": 22.961265372715737,
        "lng": 121.29447088591762,
        "ele": 51.43299770550239,
        "distanceKm": 24.604938251309715,
        "gradePct": -3.6111383720805983,
        "smoothedEle": 48.598257259965585,
        "gradeBand": "descent"
      },
      {
        "lat": 22.961562,
        "lng": 121.294861,
        "ele": 49.5,
        "distanceKm": 24.656738405632716,
        "gradePct": -3.644703872207933,
        "smoothedEle": 46.78573258268925,
        "gradeBand": "descent"
      },
      {
        "lat": 22.961928,
        "lng": 121.295282,
        "ele": 40.75,
        "distanceKm": 24.71601931176359,
        "gradePct": -3.399896576576195,
        "smoothedEle": 44.981205872065054,
        "gradeBand": "descent"
      },
      {
        "lat": 22.962276333333335,
        "lng": 121.29570266666667,
        "ele": 39.916666666666686,
        "distanceKm": 24.77394373155911,
        "gradePct": -3.109456660506052,
        "smoothedEle": 43.472609398651336,
        "gradeBand": "descent"
      },
      {
        "lat": 22.962624666666667,
        "lng": 121.29612333333333,
        "ele": 39.083333333333314,
        "distanceKm": 24.831868068861734,
        "gradePct": -2.8021353764769072,
        "smoothedEle": 42.05169281106595,
        "gradeBand": "descent"
      },
      {
        "lat": 22.962973,
        "lng": 121.296544,
        "ele": 38.25,
        "distanceKm": 24.889792323673063,
        "gradePct": -2.4570700535940815,
        "smoothedEle": 40.865422329199504,
        "gradeBand": "descent"
      },
      {
        "lat": 22.963249,
        "lng": 121.296875,
        "ele": 39.25000000000003,
        "distanceKm": 24.935512428343493,
        "gradePct": -2.1212680474616694,
        "smoothedEle": 40.230986713036856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.963525,
        "lng": 121.297206,
        "ele": 40.24999999999997,
        "distanceKm": 24.9812324817429,
        "gradePct": -1.5625494048939699,
        "smoothedEle": 40.16871344553478,
        "gradeBand": "descent"
      },
      {
        "lat": 22.963801,
        "lng": 121.297537,
        "ele": 41.25,
        "distanceKm": 25.026952483870744,
        "gradePct": -1.1459427859207778,
        "smoothedEle": 39.88038930501294,
        "gradeBand": "descent"
      },
      {
        "lat": 22.964216,
        "lng": 121.298025,
        "ele": 39.75,
        "distanceKm": 25.09496524404755,
        "gradePct": -0.8910078488331012,
        "smoothedEle": 39.011624535914635,
        "gradeBand": "descent"
      },
      {
        "lat": 22.964519,
        "lng": 121.298409,
        "ele": 43.25,
        "distanceKm": 25.14674189304702,
        "gradePct": -1.0191665744708482,
        "smoothedEle": 38.17735840568231,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96470150433524,
        "lng": 121.29885924063042,
        "ele": 40.93411273896966,
        "distanceKm": 25.19710793278191,
        "gradePct": -1.4893685944854358,
        "smoothedEle": 37.089860868042706,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96486075216762,
        "lng": 121.2993206203152,
        "ele": 37.34205636948483,
        "distanceKm": 25.24755496463578,
        "gradePct": -1.8837020313448885,
        "smoothedEle": 35.84981831014518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96502,
        "lng": 121.299782,
        "ele": 33.75,
        "distanceKm": 25.29800194439628,
        "gradePct": -2.2000978511704945,
        "smoothedEle": 34.56249912688994,
        "gradeBand": "descent"
      },
      {
        "lat": 22.965185666666667,
        "lng": 121.30021233333333,
        "ele": 31.58333333333328,
        "distanceKm": 25.345756405246718,
        "gradePct": -2.353025377854722,
        "smoothedEle": 33.48718660524399,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96535133333333,
        "lng": 121.30064266666666,
        "ele": 29.41666666666672,
        "distanceKm": 25.393510816290572,
        "gradePct": -2.392624472768064,
        "smoothedEle": 32.38228043381946,
        "gradeBand": "descent"
      },
      {
        "lat": 22.965517,
        "lng": 121.301073,
        "ele": 27.25,
        "distanceKm": 25.441265177530504,
        "gradePct": -2.3558066830168847,
        "smoothedEle": 31.292814708135772,
        "gradeBand": "descent"
      },
      {
        "lat": 22.965800455128665,
        "lng": 121.30140755063533,
        "ele": 27.992833901563742,
        "distanceKm": 25.487812189579863,
        "gradePct": -2.1263278919521036,
        "smoothedEle": 30.56986816330434,
        "gradeBand": "descent"
      },
      {
        "lat": 22.966091727564333,
        "lng": 121.30173427531766,
        "ele": 28.496416950781853,
        "distanceKm": 25.53437316985745,
        "gradePct": -1.7473419250503026,
        "smoothedEle": 30.24882510352586,
        "gradeBand": "descent"
      },
      {
        "lat": 22.966383,
        "lng": 121.302061,
        "ele": 29,
        "distanceKm": 25.580934098363834,
        "gradePct": -1.2725942580644292,
        "smoothedEle": 30.128082696338407,
        "gradeBand": "descent"
      },
      {
        "lat": 22.966632,
        "lng": 121.30240425,
        "ele": 29.99999999999996,
        "distanceKm": 25.625673133995964,
        "gradePct": -0.7548608039118383,
        "smoothedEle": 30.138809239805646,
        "gradeBand": "descent"
      },
      {
        "lat": 22.966881,
        "lng": 121.3027475,
        "ele": 31,
        "distanceKm": 25.67041211878902,
        "gradePct": -0.2837486533477921,
        "smoothedEle": 30.272620664367032,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96713,
        "lng": 121.30309075,
        "ele": 32.00000000000004,
        "distanceKm": 25.71515105274252,
        "gradePct": 0.0831146039537763,
        "smoothedEle": 30.54759291472754,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.967379,
        "lng": 121.303434,
        "ele": 33,
        "distanceKm": 25.759889935855977,
        "gradePct": 0.2691049104791761,
        "smoothedEle": 30.720864514032048,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.967711,
        "lng": 121.303791,
        "ele": 32,
        "distanceKm": 25.811839244427016,
        "gradePct": 0.34400407824633505,
        "smoothedEle": 30.82350061005816,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.967997500000003,
        "lng": 121.3040775,
        "ele": 31.374999999999975,
        "distanceKm": 25.855143417893572,
        "gradePct": 0.29871276133474395,
        "smoothedEle": 30.82437848519947,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.968284,
        "lng": 121.304364,
        "ele": 30.75,
        "distanceKm": 25.898447549255394,
        "gradePct": 0.0699755468746022,
        "smoothedEle": 30.584881751313148,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96862975,
        "lng": 121.3046475,
        "ele": 30.312499999999982,
        "distanceKm": 25.946619104506823,
        "gradePct": -0.322593295199517,
        "smoothedEle": 30.024280615252813,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9689755,
        "lng": 121.30493100000001,
        "ele": 29.875,
        "distanceKm": 25.994790615031718,
        "gradePct": -0.8142110609922348,
        "smoothedEle": 29.161395561161658,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96932125,
        "lng": 121.3052145,
        "ele": 29.437500000000018,
        "distanceKm": 26.042962080828392,
        "gradePct": -1.2994423690433223,
        "smoothedEle": 28.22524680340877,
        "gradeBand": "descent"
      },
      {
        "lat": 22.969667,
        "lng": 121.305498,
        "ele": 29,
        "distanceKm": 26.09113350189684,
        "gradePct": -1.6054602888096066,
        "smoothedEle": 27.414412059066223,
        "gradeBand": "descent"
      },
      {
        "lat": 22.970068,
        "lng": 121.30584,
        "ele": 26.375000000000085,
        "distanceKm": 26.1478268821618,
        "gradePct": -1.6621262598026998,
        "smoothedEle": 26.67839345567473,
        "gradeBand": "descent"
      },
      {
        "lat": 22.970469,
        "lng": 121.306182,
        "ele": 23.75,
        "distanceKm": 26.204520198279454,
        "gradePct": -1.4092983078587318,
        "smoothedEle": 26.153717356993752,
        "gradeBand": "descent"
      },
      {
        "lat": 22.970669,
        "lng": 121.306332,
        "ele": 22.75,
        "distanceKm": 26.231546142818544,
        "gradePct": -1.2383972530646963,
        "smoothedEle": 25.970305961264014,
        "gradeBand": "descent"
      },
      {
        "lat": 22.971046477185936,
        "lng": 121.30640469234727,
        "ele": 23.213461736397086,
        "distanceKm": 26.27417439729633,
        "gradePct": -0.9681524562952574,
        "smoothedEle": 25.763567507370883,
        "gradeBand": "descent"
      },
      {
        "lat": 22.971427,
        "lng": 121.306462,
        "ele": 23.5,
        "distanceKm": 26.316891484635647,
        "gradePct": -0.7112640426039689,
        "smoothedEle": 25.657482419514636,
        "gradeBand": "descent"
      },
      {
        "lat": 22.971884670162275,
        "lng": 121.3065257211522,
        "ele": 24.602095399523595,
        "distanceKm": 26.368198574914533,
        "gradePct": -0.4976470995503721,
        "smoothedEle": 25.494566621530204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.97234234032455,
        "lng": 121.30658944230439,
        "ele": 25.70419079904719,
        "distanceKm": 26.41950566238429,
        "gradePct": -0.43501332868435383,
        "smoothedEle": 25.18199194555744,
        "gradeBand": "descent"
      },
      {
        "lat": 22.972800076391827,
        "lng": 121.30665260019033,
        "ele": 26.74375297399236,
        "distanceKm": 26.470812716855693,
        "gradePct": -0.5104351940644599,
        "smoothedEle": 24.759000592731418,
        "gradeBand": "descent"
      },
      {
        "lat": 22.973258037679944,
        "lng": 121.30671380459688,
        "ele": 27.746796670195227,
        "distanceKm": 26.522119805009535,
        "gradePct": -0.5648971699984016,
        "smoothedEle": 24.511086553662437,
        "gradeBand": "descent"
      },
      {
        "lat": 22.973716,
        "lng": 121.306775,
        "ele": 28.75,
        "distanceKm": 26.573426891900603,
        "gradePct": -0.5921823574198196,
        "smoothedEle": 24.278349787063487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.974190978297027,
        "lng": 121.30689306446489,
        "ele": 24.87231396320042,
        "distanceKm": 26.627607548529724,
        "gradePct": -0.554163121553547,
        "smoothedEle": 24.006871227179694,
        "gradeBand": "descent"
      },
      {
        "lat": 22.974665,
        "lng": 121.307016,
        "ele": 19.75,
        "distanceKm": 26.68179815281353,
        "gradePct": -0.5145793476959373,
        "smoothedEle": 23.67676065852367,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9750768,
        "lng": 121.307131,
        "ele": 20.3,
        "distanceKm": 26.729077555493113,
        "gradePct": -0.6086182537804866,
        "smoothedEle": 23.26228862937577,
        "gradeBand": "descent"
      },
      {
        "lat": 22.975488600000002,
        "lng": 121.307246,
        "ele": 20.85,
        "distanceKm": 26.776356949240437,
        "gradePct": -0.7778008306606409,
        "smoothedEle": 22.70806672842286,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9759004,
        "lng": 121.307361,
        "ele": 21.4,
        "distanceKm": 26.823636334053887,
        "gradePct": -1.0058533956919682,
        "smoothedEle": 22.01506267354267,
        "gradeBand": "descent"
      },
      {
        "lat": 22.976312200000002,
        "lng": 121.30747600000001,
        "ele": 21.95,
        "distanceKm": 26.870915709934824,
        "gradePct": -1.1788867220293244,
        "smoothedEle": 21.385279322747166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.976724,
        "lng": 121.307591,
        "ele": 22.5,
        "distanceKm": 26.918195076881634,
        "gradePct": -1.153753167630568,
        "smoothedEle": 21.050182885844322,
        "gradeBand": "descent"
      },
      {
        "lat": 22.976312200000002,
        "lng": 121.30747600000001,
        "ele": 21.95,
        "distanceKm": 26.965474443828445,
        "gradePct": -0.7298137344481281,
        "smoothedEle": 21.376006945119148,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9759004,
        "lng": 121.307361,
        "ele": 21.4,
        "distanceKm": 27.01275381970938,
        "gradePct": -0.05133953201106163,
        "smoothedEle": 22.071895553209977,
        "gradeBand": "descent"
      },
      {
        "lat": 22.975488600000002,
        "lng": 121.307246,
        "ele": 20.85,
        "distanceKm": 27.06003320452283,
        "gradePct": 0.6170131176450622,
        "smoothedEle": 22.764265608708723,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9750768,
        "lng": 121.307131,
        "ele": 20.3,
        "distanceKm": 27.107312598270155,
        "gradePct": 1.0949509579082746,
        "smoothedEle": 23.31721527194572,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.974665,
        "lng": 121.307016,
        "ele": 19.75,
        "distanceKm": 27.154592000949737,
        "gradePct": 1.2150778779896045,
        "smoothedEle": 23.731166736842827,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.974237000000002,
        "lng": 121.306905,
        "ele": 24.375,
        "distanceKm": 27.203521360670944,
        "gradePct": 1.0489795548963097,
        "smoothedEle": 24.033965325425616,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.973809,
        "lng": 121.306794,
        "ele": 29,
        "distanceKm": 27.2524507287504,
        "gradePct": 0.8185933298082972,
        "smoothedEle": 24.290412769988137,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.97333317589042,
        "lng": 121.30672384497112,
        "ele": 27.911392969159632,
        "distanceKm": 27.305845274729034,
        "gradePct": 0.6180062055988231,
        "smoothedEle": 24.53606680197262,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.972856429017746,
        "lng": 121.30666013947445,
        "ele": 26.867040564613742,
        "distanceKm": 27.35925686168387,
        "gradePct": 0.5173800357681931,
        "smoothedEle": 24.794795227142085,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.97237988546252,
        "lng": 121.30659466969225,
        "ele": 25.79460159538222,
        "distanceKm": 27.4126683780426,
        "gradePct": 0.5627562208791181,
        "smoothedEle": 25.207418897887216,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.971903442731257,
        "lng": 121.30652833484612,
        "ele": 24.64730079769107,
        "distanceKm": 27.466079963109653,
        "gradePct": 0.6097699025052673,
        "smoothedEle": 25.572657038757043,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.971427,
        "lng": 121.306462,
        "ele": 23.5,
        "distanceKm": 27.519491551219996,
        "gradePct": 0.5391478500721388,
        "smoothedEle": 25.680465754748564,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.970763,
        "lng": 121.306362,
        "ele": 23,
        "distanceKm": 27.59403148813317,
        "gradePct": 0.4354828154551719,
        "smoothedEle": 25.93440767792417,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.970469,
        "lng": 121.306182,
        "ele": 23.75,
        "distanceKm": 27.631559030791127,
        "gradePct": 0.41886764442343216,
        "smoothedEle": 26.17433190877749,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.970068,
        "lng": 121.30584,
        "ele": 26.375000000000085,
        "distanceKm": 27.68825234690878,
        "gradePct": 0.5406816225305456,
        "smoothedEle": 26.698774171736925,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.969667,
        "lng": 121.305498,
        "ele": 29,
        "distanceKm": 27.74494572717374,
        "gradePct": 0.835258141675561,
        "smoothedEle": 27.437699074123916,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96932125,
        "lng": 121.3052145,
        "ele": 29.437500000000018,
        "distanceKm": 27.79311714824219,
        "gradePct": 1.1578839025404768,
        "smoothedEle": 28.24706051886687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9689755,
        "lng": 121.30493100000001,
        "ele": 29.875,
        "distanceKm": 27.841288614038863,
        "gradePct": 1.4591574680022548,
        "smoothedEle": 29.182650481992166,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96862975,
        "lng": 121.3046475,
        "ele": 30.312499999999982,
        "distanceKm": 27.889460124563758,
        "gradePct": 1.654882311771275,
        "smoothedEle": 30.0242806152528,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.968284,
        "lng": 121.304364,
        "ele": 30.75,
        "distanceKm": 27.937631679815187,
        "gradePct": 1.6212559134110553,
        "smoothedEle": 30.584881751313144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.967997500000003,
        "lng": 121.3040775,
        "ele": 31.374999999999975,
        "distanceKm": 27.98093581117701,
        "gradePct": 1.390992528111603,
        "smoothedEle": 30.824378485199464,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.967711,
        "lng": 121.303791,
        "ele": 32,
        "distanceKm": 28.024239984643565,
        "gradePct": 0.9859849684648977,
        "smoothedEle": 30.823500610058165,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.967379,
        "lng": 121.303434,
        "ele": 33,
        "distanceKm": 28.076189293214604,
        "gradePct": 0.4625373580900048,
        "smoothedEle": 30.717493564276985,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96713,
        "lng": 121.30309075,
        "ele": 32.00000000000004,
        "distanceKm": 28.12092817632806,
        "gradePct": 0.0757731011821721,
        "smoothedEle": 30.542039315357727,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.966881,
        "lng": 121.3027475,
        "ele": 31,
        "distanceKm": 28.16566711028156,
        "gradePct": -0.19819661682551343,
        "smoothedEle": 30.343540560472828,
        "gradeBand": "descent"
      },
      {
        "lat": 22.966632,
        "lng": 121.30240425,
        "ele": 29.999999999999957,
        "distanceKm": 28.210406095074617,
        "gradePct": -0.3160916477452489,
        "smoothedEle": 30.19159775930978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.966383,
        "lng": 121.302061,
        "ele": 29,
        "distanceKm": 28.255145130706747,
        "gradePct": -0.29300915113067844,
        "smoothedEle": 30.174417691082734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9660215,
        "lng": 121.3016555,
        "ele": 28.375,
        "distanceKm": 28.31293219137574,
        "gradePct": -0.10856997976402599,
        "smoothedEle": 30.356257526542635,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96566,
        "lng": 121.30125,
        "ele": 27.75,
        "distanceKm": 28.370719331791612,
        "gradePct": 0.3142431381199675,
        "smoothedEle": 30.954868452545476,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.965407090945426,
        "lng": 121.30078750183209,
        "ele": 28.687442363611503,
        "distanceKm": 28.42579211995445,
        "gradePct": 0.9431630463104221,
        "smoothedEle": 32.07201552258369,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.965213545472714,
        "lng": 121.30028475091603,
        "ele": 31.218721181805833,
        "distanceKm": 28.481582749491906,
        "gradePct": 1.522493381539956,
        "smoothedEle": 33.302596300125906,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96502,
        "lng": 121.299782,
        "ele": 33.75,
        "distanceKm": 28.53737344700642,
        "gradePct": 1.9810772835942243,
        "smoothedEle": 34.57159649705093,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.964887,
        "lng": 121.29939666666667,
        "ele": 36.749999999999915,
        "distanceKm": 28.57950556043446,
        "gradePct": 2.2602347437163806,
        "smoothedEle": 35.65356587999136,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.964754,
        "lng": 121.29901133333333,
        "ele": 39.750000000000085,
        "distanceKm": 28.621637710201018,
        "gradePct": 2.3532722609570498,
        "smoothedEle": 36.69428817741774,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.964621,
        "lng": 121.298626,
        "ele": 42.75,
        "distanceKm": 28.663769896302902,
        "gradePct": 2.3672698653863704,
        "smoothedEle": 37.64423573725966,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.964261,
        "lng": 121.298082,
        "ele": 40.25,
        "distanceKm": 28.732359078594662,
        "gradePct": 2.192062805993896,
        "smoothedEle": 38.84166663410368,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96403195315875,
        "lng": 121.29780857865414,
        "ele": 40.41522954669067,
        "distanceKm": 28.770204919390007,
        "gradePct": 1.9839627367040327,
        "smoothedEle": 39.38264720263061,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.963801,
        "lng": 121.297537,
        "ele": 41.25,
        "distanceKm": 28.808054961720007,
        "gradePct": 1.7354305768184328,
        "smoothedEle": 39.829636681383406,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.963525,
        "lng": 121.297206,
        "ele": 40.24999999999997,
        "distanceKm": 28.85377496384785,
        "gradePct": 1.353158712165386,
        "smoothedEle": 40.12519904221242,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.963249,
        "lng": 121.296875,
        "ele": 39.25000000000003,
        "distanceKm": 28.899495017247258,
        "gradePct": 1.045956601573824,
        "smoothedEle": 40.35983859791472,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.962973,
        "lng": 121.296544,
        "ele": 38.25,
        "distanceKm": 28.945215121917688,
        "gradePct": 0.9468407091772589,
        "smoothedEle": 40.91911645288842,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.962624666666667,
        "lng": 121.29612333333333,
        "ele": 39.083333333333314,
        "distanceKm": 29.003139376729017,
        "gradePct": 1.2025885398166352,
        "smoothedEle": 42.17676323748671,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.962276333333335,
        "lng": 121.29570266666667,
        "ele": 39.916666666666686,
        "distanceKm": 29.06106371403164,
        "gradePct": 1.7063705922950188,
        "smoothedEle": 43.57534676895604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961928,
        "lng": 121.295282,
        "ele": 40.75,
        "distanceKm": 29.118988133827163,
        "gradePct": 2.2414162089787206,
        "smoothedEle": 45.08112341019951,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961718,
        "lng": 121.295019,
        "ele": 48,
        "distanceKm": 29.154629937512144,
        "gradePct": 2.5080441774446296,
        "smoothedEle": 46.1396185304664,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961418911720443,
        "lng": 121.29467281517736,
        "ele": 50.43244731938727,
        "distanceKm": 29.20323361708692,
        "gradePct": 2.785958499518748,
        "smoothedEle": 47.750955670628414,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96114,
        "lng": 121.294306,
        "ele": 52.25,
        "distanceKm": 29.251940123380162,
        "gradePct": 3.0536897474671214,
        "smoothedEle": 49.462437103457425,
        "gradeBand": "hard"
      },
      {
        "lat": 22.960944179955735,
        "lng": 121.29382294507903,
        "ele": 53.249250184437514,
        "distanceKm": 29.305978767871117,
        "gradePct": 3.3121551999112215,
        "smoothedEle": 51.36724830133404,
        "gradeBand": "hard"
      },
      {
        "lat": 22.960811559561026,
        "lng": 121.29331069880446,
        "ele": 53.80183516239805,
        "distanceKm": 29.360459019904187,
        "gradePct": 3.5663194303673067,
        "smoothedEle": 53.46550648331786,
        "gradeBand": "hard"
      },
      {
        "lat": 22.960679205362236,
        "lng": 121.29279837193383,
        "ele": 54.87920707358819,
        "distanceKm": 29.414939261830032,
        "gradePct": 3.602892015379551,
        "smoothedEle": 55.36806038853581,
        "gradeBand": "hard"
      },
      {
        "lat": 22.960547,
        "lng": 121.292286,
        "ele": 56.25,
        "distanceKm": 29.469419527410786,
        "gradePct": 3.4581181326364874,
        "smoothedEle": 56.99480585768122,
        "gradeBand": "hard"
      },
      {
        "lat": 22.960357,
        "lng": 121.291745,
        "ele": 57,
        "distanceKm": 29.52870250197138,
        "gradePct": 3.2550765336946244,
        "smoothedEle": 58.75258566434954,
        "gradeBand": "hard"
      },
      {
        "lat": 22.96009957264588,
        "lng": 121.29133369553547,
        "ele": 59.26289868248403,
        "distanceKm": 29.5796217258228,
        "gradePct": 2.9954672805182057,
        "smoothedEle": 60.12563926541991,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95984214529176,
        "lng": 121.29092239107095,
        "ele": 61.52579736496823,
        "distanceKm": 29.63054101596616,
        "gradePct": 2.7995528486584673,
        "smoothedEle": 61.43302436648183,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.959584422860207,
        "lng": 121.29051130549936,
        "ele": 64.13813182390338,
        "distanceKm": 29.68146029787029,
        "gradePct": 2.685435528022295,
        "smoothedEle": 62.72269380309958,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.959327,
        "lng": 121.2901,
        "ele": 66.75,
        "distanceKm": 29.732379527392794,
        "gradePct": 2.557770974932558,
        "smoothedEle": 63.96727981281907,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.959001,
        "lng": 121.289669,
        "ele": 67,
        "distanceKm": 29.789487905633642,
        "gradePct": 2.4856769879912886,
        "smoothedEle": 65.35031367169083,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.958705,
        "lng": 121.289396,
        "ele": 66.25,
        "distanceKm": 29.83266899016606,
        "gradePct": 2.4081136273654007,
        "smoothedEle": 66.30314836101131,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.958354999999997,
        "lng": 121.28911933333333,
        "ele": 67.00000000000001,
        "distanceKm": 29.880804795427828,
        "gradePct": 2.2600516374236053,
        "smoothedEle": 67.22619469405487,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.958005,
        "lng": 121.28884266666667,
        "ele": 67.74999999999999,
        "distanceKm": 29.928940643826813,
        "gradePct": 2.028612935772138,
        "smoothedEle": 67.94045126297068,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.957655,
        "lng": 121.288566,
        "ele": 68.5,
        "distanceKm": 29.977076535363107,
        "gradePct": 1.6796040104915861,
        "smoothedEle": 68.40894678846728,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.957314666666665,
        "lng": 121.28826966666666,
        "ele": 69.08333333333333,
        "distanceKm": 30.025581112958758,
        "gradePct": 1.2871116931552935,
        "smoothedEle": 68.72097050474332,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.956974333333335,
        "lng": 121.28797333333334,
        "ele": 69.66666666666667,
        "distanceKm": 30.074085738307144,
        "gradePct": 1.0607751080921057,
        "smoothedEle": 69.21890109007174,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.956634,
        "lng": 121.287677,
        "ele": 70.25,
        "distanceKm": 30.122590411410105,
        "gradePct": 1.021584478134752,
        "smoothedEle": 69.88939324768708,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.956362666666667,
        "lng": 121.28737366666667,
        "ele": 70.16666666666667,
        "distanceKm": 30.16589025155898,
        "gradePct": 1.1186416018133696,
        "smoothedEle": 70.53735647294009,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.956091333333333,
        "lng": 121.28707033333333,
        "ele": 70.08333333333333,
        "distanceKm": 30.209190136393673,
        "gradePct": 1.2985898818261863,
        "smoothedEle": 71.21270922190588,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95582,
        "lng": 121.286767,
        "ele": 70,
        "distanceKm": 30.252490065913726,
        "gradePct": 1.4606893679040434,
        "smoothedEle": 71.91858662202183,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.955559093345684,
        "lng": 121.28644059385725,
        "ele": 71.78623337388058,
        "distanceKm": 30.296746096359303,
        "gradePct": 1.5755393804458588,
        "smoothedEle": 72.68321961510901,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.955286046672843,
        "lng": 121.28612579692863,
        "ele": 73.14311668694029,
        "distanceKm": 30.34102600668938,
        "gradePct": 1.652244157033812,
        "smoothedEle": 73.4697622055526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.955013,
        "lng": 121.285811,
        "ele": 74.5,
        "distanceKm": 30.385305964377917,
        "gradePct": 1.7412513958517968,
        "smoothedEle": 74.32268813071246,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.954760333333333,
        "lng": 121.285439,
        "ele": 75.58333333333333,
        "distanceKm": 30.432635842508628,
        "gradePct": 1.8828689827831435,
        "smoothedEle": 75.36066014393073,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.954507666666668,
        "lng": 121.285067,
        "ele": 76.66666666666667,
        "distanceKm": 30.479965777890683,
        "gradePct": 1.9942359859920984,
        "smoothedEle": 76.38176985198876,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.954255,
        "lng": 121.284695,
        "ele": 77.75,
        "distanceKm": 30.527295770523992,
        "gradePct": 2.0992375595783983,
        "smoothedEle": 77.42434759140994,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.954026308360056,
        "lng": 121.28429980450207,
        "ele": 78.59200864926319,
        "distanceKm": 30.575087042290768,
        "gradePct": 2.2660948002790358,
        "smoothedEle": 78.65803961239459,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95379865418003,
        "lng": 121.28390390225103,
        "ele": 80.0460043246316,
        "distanceKm": 30.62287845381177,
        "gradePct": 2.490908444022404,
        "smoothedEle": 80.12849176961205,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953571,
        "lng": 121.283508,
        "ele": 81.5,
        "distanceKm": 30.6706699231915,
        "gradePct": 2.579271861615377,
        "smoothedEle": 81.33976211869606,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953335,
        "lng": 121.282983,
        "ele": 80.5,
        "distanceKm": 30.730488541335585,
        "gradePct": 2.3990350368283386,
        "smoothedEle": 82.30483639404119,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953255,
        "lng": 121.282533,
        "ele": 81.75,
        "distanceKm": 30.7774153429419,
        "gradePct": 1.9039929785503698,
        "smoothedEle": 82.5376630166045,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953212,
        "lng": 121.282134,
        "ele": 87.25,
        "distanceKm": 30.81854821337123,
        "gradePct": 1.2250613309865672,
        "smoothedEle": 82.44538104938508,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953105,
        "lng": 121.281838,
        "ele": 89.5,
        "distanceKm": 30.851107697286167,
        "gradePct": 0.7094378315217493,
        "smoothedEle": 82.26283498453029,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953041,
        "lng": 121.28173,
        "ele": 88.75,
        "distanceKm": 30.86425795024097,
        "gradePct": 0.48629831856384154,
        "smoothedEle": 82.14984789740262,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.952788,
        "lng": 121.28153,
        "ele": 87.25,
        "distanceKm": 30.899054335036585,
        "gradePct": 0.005501496963866278,
        "smoothedEle": 81.8087005605225,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.952452,
        "lng": 121.281442,
        "ele": 85.5,
        "distanceKm": 30.937487048227,
        "gradePct": -0.5152933656809983,
        "smoothedEle": 81.30897264968743,
        "gradeBand": "descent"
      },
      {
        "lat": 22.952038,
        "lng": 121.28159,
        "ele": 81,
        "distanceKm": 30.98595190843275,
        "gradePct": -0.9207668127972288,
        "smoothedEle": 80.67697752904246,
        "gradeBand": "descent"
      },
      {
        "lat": 22.95172,
        "lng": 121.281814,
        "ele": 78,
        "distanceKm": 31.02809907997332,
        "gradePct": -1.1690586496796243,
        "smoothedEle": 80.05371642972065,
        "gradeBand": "descent"
      },
      {
        "lat": 22.951438,
        "lng": 121.281918,
        "ele": 76.25,
        "distanceKm": 31.061214924334973,
        "gradePct": -1.4217999223151503,
        "smoothedEle": 79.33239375767658,
        "gradeBand": "descent"
      },
      {
        "lat": 22.951151,
        "lng": 121.281887,
        "ele": 75.75,
        "distanceKm": 31.09328538029676,
        "gradePct": -1.7710593577663893,
        "smoothedEle": 78.32314127085058,
        "gradeBand": "descent"
      },
      {
        "lat": 22.95061370990739,
        "lng": 121.28174654844662,
        "ele": 75.04032325703106,
        "distanceKm": 31.154735906044,
        "gradePct": -2.5548800506741807,
        "smoothedEle": 75.97428269337274,
        "gradeBand": "descent"
      },
      {
        "lat": 22.950076,
        "lng": 121.281608,
        "ele": 74.25,
        "distanceKm": 31.216186552455586,
        "gradePct": -3.2449863828126597,
        "smoothedEle": 73.7399029346945,
        "gradeBand": "descent"
      },
      {
        "lat": 22.949717989742325,
        "lng": 121.28145352794633,
        "ele": 73.80483305378569,
        "distanceKm": 31.259022641924695,
        "gradePct": -3.4178244449354747,
        "smoothedEle": 72.5444967230441,
        "gradeBand": "descent"
      },
      {
        "lat": 22.94936,
        "lng": 121.281299,
        "ele": 73,
        "distanceKm": 31.301858740498453,
        "gradePct": -3.127305900933021,
        "smoothedEle": 71.74082502052488,
        "gradeBand": "descent"
      },
      {
        "lat": 22.949053,
        "lng": 121.281157,
        "ele": 71.75,
        "distanceKm": 31.338963156448024,
        "gradePct": -2.6998769705848416,
        "smoothedEle": 71.17741957743868,
        "gradeBand": "descent"
      },
      {
        "lat": 22.948642,
        "lng": 121.280968,
        "ele": 68,
        "distanceKm": 31.38859296841674,
        "gradePct": -2.197103728861379,
        "smoothedEle": 70.34901357443857,
        "gradeBand": "descent"
      },
      {
        "lat": 22.948253,
        "lng": 121.280788,
        "ele": 67.375,
        "distanceKm": 31.435610926524397,
        "gradePct": -1.8679815036816545,
        "smoothedEle": 69.46187323293735,
        "gradeBand": "descent"
      },
      {
        "lat": 22.947864,
        "lng": 121.280608,
        "ele": 66.75,
        "distanceKm": 31.48262890540184,
        "gradePct": -1.7773911389989783,
        "smoothedEle": 68.54682429887359,
        "gradeBand": "descent"
      },
      {
        "lat": 22.947498134399734,
        "lng": 121.28043965497154,
        "ele": 68.31204599602987,
        "distanceKm": 31.52681262931121,
        "gradePct": -1.8450055514640407,
        "smoothedEle": 67.67190600533152,
        "gradeBand": "descent"
      },
      {
        "lat": 22.947132,
        "lng": 121.280272,
        "ele": 68.5,
        "distanceKm": 31.570996391975132,
        "gradePct": -1.951529872290237,
        "smoothedEle": 66.73967062986668,
        "gradeBand": "descent"
      },
      {
        "lat": 22.946741347667018,
        "lng": 121.28009188622265,
        "ele": 67.02876108617976,
        "distanceKm": 31.61818806365158,
        "gradePct": -2.0190383075664116,
        "smoothedEle": 65.7525332354928,
        "gradeBand": "descent"
      },
      {
        "lat": 22.946351,
        "lng": 121.279911,
        "ele": 65.5,
        "distanceKm": 31.6653795626276,
        "gradePct": -2.0179953601467417,
        "smoothedEle": 64.84653479534255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.945752,
        "lng": 121.279619,
        "ele": 64,
        "distanceKm": 31.738388712370384,
        "gradePct": -2.2004304446349012,
        "smoothedEle": 63.026800771840364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.945129,
        "lng": 121.279361,
        "ele": 62.5,
        "distanceKm": 31.812529750750176,
        "gradePct": -2.6114207997486916,
        "smoothedEle": 60.64805006780387,
        "gradeBand": "descent"
      },
      {
        "lat": 22.944735,
        "lng": 121.279227,
        "ele": 60.25,
        "distanceKm": 31.85843905321806,
        "gradePct": -2.9681214774542966,
        "smoothedEle": 59.04353809951309,
        "gradeBand": "descent"
      },
      {
        "lat": 22.944371,
        "lng": 121.27910266666667,
        "ele": 57.75,
        "distanceKm": 31.900869182049842,
        "gradePct": -3.16137325164382,
        "smoothedEle": 57.6392187802701,
        "gradeBand": "descent"
      },
      {
        "lat": 22.944007000000003,
        "lng": 121.27897833333333,
        "ele": 55.25,
        "distanceKm": 31.943299321155667,
        "gradePct": -3.2620743121462548,
        "smoothedEle": 56.34509953754254,
        "gradeBand": "descent"
      },
      {
        "lat": 22.943643,
        "lng": 121.278854,
        "ele": 52.75,
        "distanceKm": 31.985729470535283,
        "gradePct": -3.1952187667675642,
        "smoothedEle": 55.117476205222246,
        "gradeBand": "descent"
      },
      {
        "lat": 22.943314,
        "lng": 121.278666,
        "ele": 52,
        "distanceKm": 32.02706863400639,
        "gradePct": -3.142737559918186,
        "smoothedEle": 53.85444672697139,
        "gradeBand": "descent"
      },
      {
        "lat": 22.943082,
        "lng": 121.278393,
        "ele": 51,
        "distanceKm": 32.06510770476617,
        "gradePct": -3.044302520317793,
        "smoothedEle": 52.73421922980951,
        "gradeBand": "descent"
      },
      {
        "lat": 22.94285722387146,
        "lng": 121.27802819939794,
        "ele": 50.07878635844459,
        "distanceKm": 32.11005330487753,
        "gradePct": -2.9698706723637294,
        "smoothedEle": 51.41936168929812,
        "gradeBand": "descent"
      },
      {
        "lat": 22.942633,
        "lng": 121.277663,
        "ele": 50.25,
        "distanceKm": 32.15499880806081,
        "gradePct": -2.892616575162879,
        "smoothedEle": 50.22136738801623,
        "gradeBand": "descent"
      },
      {
        "lat": 22.942262,
        "lng": 121.277438,
        "ele": 50.25,
        "distanceKm": 32.202249990587966,
        "gradePct": -2.7503293228922416,
        "smoothedEle": 49.11206850138883,
        "gradeBand": "descent"
      },
      {
        "lat": 22.941924,
        "lng": 121.277339,
        "ele": 49,
        "distanceKm": 32.241177130201926,
        "gradePct": -2.5621062918117117,
        "smoothedEle": 48.31474751167784,
        "gradeBand": "descent"
      },
      {
        "lat": 22.941492,
        "lng": 121.27729028571429,
        "ele": 47.82142857142855,
        "distanceKm": 32.289471717181556,
        "gradePct": -2.332760657556664,
        "smoothedEle": 47.355942820491,
        "gradeBand": "descent"
      },
      {
        "lat": 22.94106,
        "lng": 121.27724157142858,
        "ele": 46.64285714285718,
        "distanceKm": 32.33776630580552,
        "gradePct": -2.1454283067776756,
        "smoothedEle": 46.38983235362928,
        "gradeBand": "descent"
      },
      {
        "lat": 22.940628,
        "lng": 121.27719285714286,
        "ele": 45.46428571428573,
        "distanceKm": 32.386060896073815,
        "gradePct": -2.03988392925207,
        "smoothedEle": 45.41236614727144,
        "gradeBand": "descent"
      },
      {
        "lat": 22.940196,
        "lng": 121.27714414285714,
        "ele": 44.28571428571427,
        "distanceKm": 32.43435548798655,
        "gradePct": -2.0734591910741704,
        "smoothedEle": 44.30755268940459,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939764,
        "lng": 121.27709542857143,
        "ele": 43.10714285714282,
        "distanceKm": 32.482650081543404,
        "gradePct": -2.182856639703826,
        "smoothedEle": 43.12566120455705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939332,
        "lng": 121.27704671428572,
        "ele": 41.92857142857145,
        "distanceKm": 32.530944676744504,
        "gradePct": -2.2774429125258275,
        "smoothedEle": 41.97141000046292,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9389,
        "lng": 121.276998,
        "ele": 40.75,
        "distanceKm": 32.57923927358983,
        "gradePct": -2.3610057352934763,
        "smoothedEle": 40.82842201328649,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9384845,
        "lng": 121.276925,
        "ele": 39.625,
        "distanceKm": 32.626041673159776,
        "gradePct": -2.4049552482656416,
        "smoothedEle": 39.68783356095507,
        "gradeBand": "descent"
      },
      {
        "lat": 22.938069,
        "lng": 121.276852,
        "ele": 38.5,
        "distanceKm": 32.672844076394476,
        "gradePct": -2.4283842789139465,
        "smoothedEle": 38.508870522767104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.937669,
        "lng": 121.276768,
        "ele": 37.49999999999997,
        "distanceKm": 32.7181462475597,
        "gradePct": -2.504756791902988,
        "smoothedEle": 37.267781624630175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.937269,
        "lng": 121.276684,
        "ele": 36.50000000000003,
        "distanceKm": 32.76344842355037,
        "gradePct": -2.7898935987560125,
        "smoothedEle": 35.622356786375185,
        "gradeBand": "descent"
      },
      {
        "lat": 22.936869,
        "lng": 121.2766,
        "ele": 35.5,
        "distanceKm": 32.80875060436643,
        "gradePct": -2.980673686461899,
        "smoothedEle": 34.147874697496086,
        "gradeBand": "descent"
      },
      {
        "lat": 22.936461,
        "lng": 121.276468,
        "ele": 34,
        "distanceKm": 32.85608912052077,
        "gradePct": -2.993002760899181,
        "smoothedEle": 32.944926098611745,
        "gradeBand": "descent"
      },
      {
        "lat": 22.936014,
        "lng": 121.276216,
        "ele": 32.25,
        "distanceKm": 32.91209310245943,
        "gradePct": -2.682024891455815,
        "smoothedEle": 32.069562551142155,
        "gradeBand": "descent"
      },
      {
        "lat": 22.935744,
        "lng": 121.276039,
        "ele": 30,
        "distanceKm": 32.94716297477229,
        "gradePct": -2.1669241557936707,
        "smoothedEle": 31.88001387901182,
        "gradeBand": "descent"
      },
      {
        "lat": 22.935303,
        "lng": 121.275759,
        "ele": 23.75,
        "distanceKm": 33.00396777390096,
        "gradePct": -1.2280302195695492,
        "smoothedEle": 31.8474844209948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.934863,
        "lng": 121.2754715,
        "ele": 26.8750000000002,
        "distanceKm": 33.06106883991783,
        "gradePct": -0.381141287156053,
        "smoothedEle": 32.10480861531789,
        "gradeBand": "descent"
      },
      {
        "lat": 22.934423,
        "lng": 121.275184,
        "ele": 30,
        "distanceKm": 33.11816995526126,
        "gradePct": 0.28701243537610155,
        "smoothedEle": 32.61074272348652,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.933982,
        "lng": 121.27489,
        "ele": 35.75,
        "distanceKm": 33.17571188573336,
        "gradePct": 0.7634345309070232,
        "smoothedEle": 33.390534311576516,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.933607373391276,
        "lng": 121.27462904403879,
        "ele": 36.966320158191415,
        "distanceKm": 33.22520344942337,
        "gradePct": 1.1935342733442453,
        "smoothedEle": 34.33025088500583,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.933232746782554,
        "lng": 121.27436808807758,
        "ele": 38.18264031638265,
        "distanceKm": 33.27469505303209,
        "gradePct": 1.8295855621873958,
        "smoothedEle": 35.88471233726486,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932858156072776,
        "lng": 121.27410707270178,
        "ele": 38.83728548638473,
        "distanceKm": 33.32418662259693,
        "gradePct": 2.2410087911157213,
        "smoothedEle": 37.17429644011949,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93248357803639,
        "lng": 121.27384603635089,
        "ele": 39.29364274319233,
        "distanceKm": 33.37367820624403,
        "gradePct": 2.3930785138208797,
        "smoothedEle": 38.149131503362305,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932109,
        "lng": 121.273585,
        "ele": 39.75,
        "distanceKm": 33.42316982982838,
        "gradePct": 2.1906035808390216,
        "smoothedEle": 38.67284487920691,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.931573,
        "lng": 121.273172,
        "ele": 39.5,
        "distanceKm": 33.49625214679978,
        "gradePct": 1.1902591035946921,
        "smoothedEle": 38.82693601613339,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93126936388191,
        "lng": 121.2728673650789,
        "ele": 39.5,
        "distanceKm": 33.54222145097397,
        "gradePct": 0.579968463060452,
        "smoothedEle": 38.68946514033074,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930965576042635,
        "lng": 121.27256290990881,
        "ele": 39.000399631122804,
        "distanceKm": 33.58819070782006,
        "gradePct": 0.06163507774970524,
        "smoothedEle": 38.42597090233942,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930661788021318,
        "lng": 121.2722584549544,
        "ele": 38.5001998155614,
        "distanceKm": 33.634160011994986,
        "gradePct": -0.32072038485038135,
        "smoothedEle": 38.05457646822793,
        "gradeBand": "descent"
      },
      {
        "lat": 22.930358,
        "lng": 121.271954,
        "ele": 38,
        "distanceKm": 33.680129363602546,
        "gradePct": -0.6073985728561253,
        "smoothedEle": 37.578144628089504,
        "gradeBand": "descent"
      },
      {
        "lat": 22.930037,
        "lng": 121.2716444,
        "ele": 37.24999999999996,
        "distanceKm": 33.727871205966295,
        "gradePct": -0.8451245656280677,
        "smoothedEle": 37.04213031427513,
        "gradeBand": "descent"
      },
      {
        "lat": 22.929716,
        "lng": 121.27133479999999,
        "ele": 36.50000000000002,
        "distanceKm": 33.775613098234786,
        "gradePct": -0.9326705212390936,
        "smoothedEle": 36.63272429603017,
        "gradeBand": "descent"
      },
      {
        "lat": 22.929395,
        "lng": 121.2710252,
        "ele": 35.74999999999998,
        "distanceKm": 33.823355040405495,
        "gradePct": -0.8864360303016683,
        "smoothedEle": 36.368999753531924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.929074,
        "lng": 121.27071559999999,
        "ele": 35.00000000000004,
        "distanceKm": 33.87109703247975,
        "gradePct": -0.6962865705119555,
        "smoothedEle": 36.27918364358043,
        "gradeBand": "descent"
      },
      {
        "lat": 22.928753,
        "lng": 121.270406,
        "ele": 34.25,
        "distanceKm": 33.918839074455036,
        "gradePct": -0.4480718374096753,
        "smoothedEle": 36.24739352981838,
        "gradeBand": "descent"
      },
      {
        "lat": 22.928499,
        "lng": 121.270153,
        "ele": 34,
        "distanceKm": 33.957166710920596,
        "gradePct": -0.2780786169804972,
        "smoothedEle": 36.23475228729728,
        "gradeBand": "descent"
      },
      {
        "lat": 22.928077,
        "lng": 121.269636,
        "ele": 35.75,
        "distanceKm": 34.02791388742987,
        "gradePct": -0.007833106869856608,
        "smoothedEle": 36.344757066800554,
        "gradeBand": "descent"
      },
      {
        "lat": 22.927814,
        "lng": 121.269267,
        "ele": 37.75,
        "distanceKm": 34.075697405415895,
        "gradePct": 0.11370774212253758,
        "smoothedEle": 36.50353586590924,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.927515,
        "lng": 121.268883,
        "ele": 38.25,
        "distanceKm": 34.12719387749448,
        "gradePct": 0.2549177858999094,
        "smoothedEle": 36.754473515801365,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.92721459326235,
        "lng": 121.2686710012512,
        "ele": 37.79893883235992,
        "distanceKm": 34.16703323844759,
        "gradePct": 0.37119375100914637,
        "smoothedEle": 36.99248125223499,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926913,
        "lng": 121.268461,
        "ele": 37.75,
        "distanceKm": 34.20687251177464,
        "gradePct": 0.4646117085770817,
        "smoothedEle": 37.241263250510144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926468,
        "lng": 121.268179,
        "ele": 37.75,
        "distanceKm": 34.26416561999092,
        "gradePct": 0.5256016671905352,
        "smoothedEle": 37.51642048457977,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.92608058232761,
        "lng": 121.26794383906717,
        "ele": 37.75,
        "distanceKm": 34.31351938357773,
        "gradePct": 0.4632123752123617,
        "smoothedEle": 37.61426369441121,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925693107689508,
        "lng": 121.26770878945064,
        "ele": 37.75,
        "distanceKm": 34.36287314854171,
        "gradePct": 0.29860258878777235,
        "smoothedEle": 37.564833280609065,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925305575212153,
        "lng": 121.26747385293065,
        "ele": 37.50907427165342,
        "distanceKm": 34.41222691419646,
        "gradePct": 0.09453420096587316,
        "smoothedEle": 37.45604683191725,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.924918,
        "lng": 121.267239,
        "ele": 37,
        "distanceKm": 34.46158068999482,
        "gradePct": -0.10355086996142258,
        "smoothedEle": 37.29690429883376,
        "gradeBand": "descent"
      },
      {
        "lat": 22.924581286570735,
        "lng": 121.26702590208606,
        "ele": 37.11461893287716,
        "distanceKm": 34.50491776679011,
        "gradePct": -0.2776976597408623,
        "smoothedEle": 37.04181577883393,
        "gradeBand": "descent"
      },
      {
        "lat": 22.924245,
        "lng": 121.266812,
        "ele": 37.25,
        "distanceKm": 34.54825544246455,
        "gradePct": -0.45100164958363176,
        "smoothedEle": 36.67747038953952,
        "gradeBand": "descent"
      },
      {
        "lat": 22.92386236961338,
        "lng": 121.26657366022849,
        "ele": 37.39155975400029,
        "distanceKm": 34.5973066360991,
        "gradePct": -0.647252384177699,
        "smoothedEle": 36.194429606106425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.923478911507058,
        "lng": 121.26633689743205,
        "ele": 36.925087968812946,
        "distanceKm": 34.64635768124262,
        "gradePct": -0.840274024655186,
        "smoothedEle": 35.66544323698863,
        "gradeBand": "descent"
      },
      {
        "lat": 22.923095,
        "lng": 121.266101,
        "ele": 36,
        "distanceKm": 34.69540888070968,
        "gradePct": -0.9467288629225308,
        "smoothedEle": 35.20432877959235,
        "gradeBand": "descent"
      },
      {
        "lat": 22.922730190767794,
        "lng": 121.2658871813002,
        "ele": 34.5818797870393,
        "distanceKm": 34.74150705813434,
        "gradePct": -0.9726382672284548,
        "smoothedEle": 34.78892838635674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.922362,
        "lng": 121.26568,
        "ele": 33.25,
        "distanceKm": 34.78761977487516,
        "gradePct": -1.0363422668460092,
        "smoothedEle": 34.21713824611534,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9220385,
        "lng": 121.2655355,
        "ele": 32.75000000000005,
        "distanceKm": 34.8265166123772,
        "gradePct": -1.1010411767600365,
        "smoothedEle": 33.677335018939594,
        "gradeBand": "descent"
      },
      {
        "lat": 22.921715,
        "lng": 121.265391,
        "ele": 32.25,
        "distanceKm": 34.86541346332247,
        "gradePct": -1.1744974602038287,
        "smoothedEle": 33.1373110740776,
        "gradeBand": "descent"
      },
      {
        "lat": 22.921339500000002,
        "lng": 121.265227,
        "ele": 32.62499999999997,
        "distanceKm": 34.910418836391194,
        "gradePct": -1.2032234580239034,
        "smoothedEle": 32.66262398913635,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920964,
        "lng": 121.265063,
        "ele": 33,
        "distanceKm": 34.95542422683153,
        "gradePct": -1.1861424442752382,
        "smoothedEle": 32.244072883807135,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920619,
        "lng": 121.2649655,
        "ele": 31.624999999999872,
        "distanceKm": 34.99506482283894,
        "gradePct": -1.0919419715427385,
        "smoothedEle": 31.929933283239603,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920274,
        "lng": 121.264868,
        "ele": 30.25,
        "distanceKm": 35.03470542525032,
        "gradePct": -0.9569163157156512,
        "smoothedEle": 31.649813106139387,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91979151273205,
        "lng": 121.26477192468685,
        "ele": 30.44981599148041,
        "distanceKm": 35.089250489792285,
        "gradePct": -0.8068428438946295,
        "smoothedEle": 31.27220810348201,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919309,
        "lng": 121.264676,
        "ele": 31.75,
        "distanceKm": 35.143795565043035,
        "gradePct": -0.7992428783600964,
        "smoothedEle": 30.753733933446227,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91881,
        "lng": 121.264563,
        "ele": 31.5,
        "distanceKm": 35.20047599656149,
        "gradePct": -0.9486277765026409,
        "smoothedEle": 29.994439690212896,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91842,
        "lng": 121.264432,
        "ele": 30.75,
        "distanceKm": 35.24587008942502,
        "gradePct": -1.1072866628619382,
        "smoothedEle": 29.357948955282982,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9181035,
        "lng": 121.26429999999999,
        "ele": 30,
        "distanceKm": 35.28357062842904,
        "gradePct": -1.163162831971577,
        "smoothedEle": 28.98520302854487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.917787,
        "lng": 121.264168,
        "ele": 29.25,
        "distanceKm": 35.321271178754564,
        "gradePct": -1.1460445119839462,
        "smoothedEle": 28.67574879388574,
        "gradeBand": "descent"
      },
      {
        "lat": 22.917439,
        "lng": 121.264054,
        "ele": 27.75,
        "distanceKm": 35.361690141338585,
        "gradePct": -1.0983385910090484,
        "smoothedEle": 28.31734000259063,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91702087890765,
        "lng": 121.26406442590785,
        "ele": 26.44335565166938,
        "distanceKm": 35.40819541023698,
        "gradePct": -1.0555358909911743,
        "smoothedEle": 27.775130581001388,
        "gradeBand": "descent"
      },
      {
        "lat": 22.916604,
        "lng": 121.264105,
        "ele": 25.25,
        "distanceKm": 35.45473618540992,
        "gradePct": -1.0102736752274843,
        "smoothedEle": 27.24974234976832,
        "gradeBand": "descent"
      },
      {
        "lat": 22.915989,
        "lng": 121.264121,
        "ele": 26,
        "distanceKm": 35.52314079099624,
        "gradePct": -1.0498823030593247,
        "smoothedEle": 26.559405695374178,
        "gradeBand": "descent"
      },
      {
        "lat": 22.915595270520388,
        "lng": 121.26400507038656,
        "ele": 26.289091213231412,
        "distanceKm": 35.56850305813938,
        "gradePct": -1.0199789455681605,
        "smoothedEle": 26.197949656478848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91521,
        "lng": 121.263857,
        "ele": 25.75,
        "distanceKm": 35.61394828248743,
        "gradePct": -0.8814758802747579,
        "smoothedEle": 25.947235953365066,
        "gradeBand": "descent"
      },
      {
        "lat": 22.914869484985314,
        "lng": 121.26369181773562,
        "ele": 25.81989188538408,
        "distanceKm": 35.655419585559315,
        "gradePct": -0.7102288023306104,
        "smoothedEle": 25.822387897026463,
        "gradeBand": "descent"
      },
      {
        "lat": 22.914528,
        "lng": 121.263529,
        "ele": 26,
        "distanceKm": 35.69689143241296,
        "gradePct": -0.5317862721916664,
        "smoothedEle": 25.760740670434192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.914108211419613,
        "lng": 121.26333765128176,
        "ele": 25.75,
        "distanceKm": 35.747517097367705,
        "gradePct": -0.32865304759118064,
        "smoothedEle": 25.707864089075798,
        "gradeBand": "descent"
      },
      {
        "lat": 22.913688236884756,
        "lng": 121.26314678453102,
        "ele": 25.75,
        "distanceKm": 35.798142769673504,
        "gradePct": -0.2388168452612442,
        "smoothedEle": 25.556798633947334,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9132682623499,
        "lng": 121.26295591778029,
        "ele": 25.75,
        "distanceKm": 35.848768465367,
        "gradePct": -0.24267283521166946,
        "smoothedEle": 25.35706521519949,
        "gradeBand": "descent"
      },
      {
        "lat": 22.912848204677864,
        "lng": 121.26276526750274,
        "ele": 25.550967672024033,
        "distanceKm": 35.89939415618024,
        "gradePct": -0.2795795583129439,
        "smoothedEle": 25.198967554031377,
        "gradeBand": "descent"
      },
      {
        "lat": 22.912428,
        "lng": 121.262575,
        "ele": 25,
        "distanceKm": 35.950019848152195,
        "gradePct": -0.30403434389648176,
        "smoothedEle": 25.09232726961935,
        "gradeBand": "descent"
      },
      {
        "lat": 22.912007524954323,
        "lng": 121.26233019008451,
        "ele": 24.649604128602768,
        "distanceKm": 36.00307368365395,
        "gradePct": -0.20662121218560678,
        "smoothedEle": 25.124102288136132,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911587049908647,
        "lng": 121.26208538016904,
        "ele": 24.29920825720553,
        "distanceKm": 36.05612755591216,
        "gradePct": -0.09605319553353771,
        "smoothedEle": 25.141977310501204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91116625368928,
        "lng": 121.26184122289725,
        "ele": 24.101010580428497,
        "distanceKm": 36.10918139954976,
        "gradePct": -0.08860716658174768,
        "smoothedEle": 25.001136921596096,
        "gradeBand": "descent"
      },
      {
        "lat": 22.910745,
        "lng": 121.261598,
        "ele": 24.5,
        "distanceKm": 36.162235143943754,
        "gradePct": -0.177444793812721,
        "smoothedEle": 24.744753670485476,
        "gradeBand": "descent"
      },
      {
        "lat": 22.910398,
        "lng": 121.26139300000001,
        "ele": 25.624999999999908,
        "distanceKm": 36.20616284755446,
        "gradePct": -0.30030431639851435,
        "smoothedEle": 24.524534462945788,
        "gradeBand": "descent"
      },
      {
        "lat": 22.910051,
        "lng": 121.261188,
        "ele": 26.75,
        "distanceKm": 36.25009057685451,
        "gradePct": -0.4004124960179102,
        "smoothedEle": 24.339118326768258,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90962304832981,
        "lng": 121.26096555667196,
        "ele": 25.262467456557978,
        "distanceKm": 36.302849716924094,
        "gradePct": -0.4215185420276637,
        "smoothedEle": 24.17490835851267,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90919509665962,
        "lng": 121.26074311334392,
        "ele": 23.774934913116166,
        "distanceKm": 36.35560888805078,
        "gradePct": -0.35452717816404117,
        "smoothedEle": 24.067720824569836,
        "gradeBand": "descent"
      },
      {
        "lat": 22.908767,
        "lng": 121.260521,
        "ele": 22.75,
        "distanceKm": 36.408368049254925,
        "gradePct": -0.2573111091937593,
        "smoothedEle": 24.000604229204246,
        "gradeBand": "descent"
      },
      {
        "lat": 22.908407371255226,
        "lng": 121.260323303072,
        "ele": 22.576629387257253,
        "distanceKm": 36.453191487904924,
        "gradePct": -0.21037496195915273,
        "smoothedEle": 23.90871698502017,
        "gradeBand": "descent"
      },
      {
        "lat": 22.908045247503484,
        "lng": 121.26013086871467,
        "ele": 22.801086258171512,
        "distanceKm": 36.49802305582889,
        "gradePct": -0.24283360320773725,
        "smoothedEle": 23.704263873547525,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90768312375174,
        "lng": 121.25993843435734,
        "ele": 23.02554312908574,
        "distanceKm": 36.54285464689695,
        "gradePct": -0.30845888524001724,
        "smoothedEle": 23.476715054361918,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907321,
        "lng": 121.259746,
        "ele": 23.25,
        "distanceKm": 36.587686261108814,
        "gradePct": -0.3415338252941038,
        "smoothedEle": 23.343846534550856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90696897493851,
        "lng": 121.25952665115241,
        "ele": 23.65480452634199,
        "distanceKm": 36.632819133634776,
        "gradePct": -0.2503806555121919,
        "smoothedEle": 23.44971863435326,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906616915183587,
        "lng": 121.25930736283921,
        "ele": 23.957924730627017,
        "distanceKm": 36.67795229508098,
        "gradePct": -0.024246670413464608,
        "smoothedEle": 23.74730267568498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906264945019746,
        "lng": 121.25908790547918,
        "ele": 23.853386054089228,
        "distanceKm": 36.72308546600873,
        "gradePct": 0.2913383428780663,
        "smoothedEle": 24.159732898221314,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90591297250987,
        "lng": 121.25886845273959,
        "ele": 23.676693027044614,
        "distanceKm": 36.76821865650848,
        "gradePct": 0.6452953578836006,
        "smoothedEle": 24.692133852436612,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.905561,
        "lng": 121.258649,
        "ele": 23.5,
        "distanceKm": 36.81335187606585,
        "gradePct": 0.9866264662294137,
        "smoothedEle": 25.377305529600967,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90515490883596,
        "lng": 121.25836582017283,
        "ele": 25.012755480426655,
        "distanceKm": 36.86702043040409,
        "gradePct": 1.3516931083977595,
        "smoothedEle": 26.378609996041643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90474895441798,
        "lng": 121.25808241008642,
        "ele": 26.381377740213328,
        "distanceKm": 36.920688992068925,
        "gradePct": 1.6957388527294028,
        "smoothedEle": 27.529311449244933,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904343,
        "lng": 121.257799,
        "ele": 27.75,
        "distanceKm": 36.974357600738124,
        "gradePct": 1.9970857624277996,
        "smoothedEle": 28.779501270585328,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9040161299887,
        "lng": 121.25743386681445,
        "ele": 30.126935280568027,
        "distanceKm": 37.02650939269588,
        "gradePct": 2.26323154577368,
        "smoothedEle": 30.14925092137729,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903725001824842,
        "lng": 121.25703006032448,
        "ele": 32.1663619976092,
        "distanceKm": 37.07903271702311,
        "gradePct": 2.5344324241402485,
        "smoothedEle": 31.70502889906141,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903433,
        "lng": 121.256627,
        "ele": 34.25,
        "distanceKm": 37.131555945477665,
        "gradePct": 2.7360890835632827,
        "smoothedEle": 33.254631161819916,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903167,
        "lng": 121.256168,
        "ele": 35.25,
        "distanceKm": 37.18710092338289,
        "gradePct": 2.839266758123737,
        "smoothedEle": 34.79273396182456,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903036,
        "lng": 121.25579,
        "ele": 36.25,
        "distanceKm": 37.2284685306619,
        "gradePct": 2.8419317909237063,
        "smoothedEle": 35.891145554035404,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902908985255436,
        "lng": 121.2552766707004,
        "ele": 37.83109640537217,
        "distanceKm": 37.28291216296237,
        "gradePct": 2.756872363479257,
        "smoothedEle": 37.3332296178279,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902781974626304,
        "lng": 121.2547633402749,
        "ele": 39.29651919177985,
        "distanceKm": 37.33735583548603,
        "gradePct": 2.6046844851195186,
        "smoothedEle": 38.624605598079754,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902655,
        "lng": 121.25425,
        "ele": 39.75,
        "distanceKm": 37.391799491564754,
        "gradePct": 2.342498283353246,
        "smoothedEle": 39.60248905572699,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902672,
        "lng": 121.253743,
        "ele": 40.25,
        "distanceKm": 37.44376552570631,
        "gradePct": 2.0241735584094758,
        "smoothedEle": 40.34467417409634,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9028185,
        "lng": 121.253308,
        "ele": 41.875,
        "distanceKm": 37.49120671912271,
        "gradePct": 1.8288322145445075,
        "smoothedEle": 41.18763666356638,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902965,
        "lng": 121.252873,
        "ele": 43.5,
        "distanceKm": 37.53864786733554,
        "gradePct": 1.7069665397188918,
        "smoothedEle": 42.0617453587618,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902965,
        "lng": 121.252385,
        "ele": 43,
        "distanceKm": 37.5886332417014,
        "gradePct": 1.6216010280138013,
        "smoothedEle": 42.78882087953372,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90276605202022,
        "lng": 121.25200032389061,
        "ele": 42.18823877824365,
        "distanceKm": 37.63382068379188,
        "gradePct": 1.4674422699316065,
        "smoothedEle": 43.13752529164144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902498,
        "lng": 121.251663,
        "ele": 42,
        "distanceKm": 37.679452162392806,
        "gradePct": 1.1602721510252905,
        "smoothedEle": 43.29931922142165,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902249,
        "lng": 121.251438,
        "ele": 45,
        "distanceKm": 37.71547644907829,
        "gradePct": 0.8310912659075729,
        "smoothedEle": 43.29699180362116,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9018971491939,
        "lng": 121.25118150110882,
        "ele": 46.591342599934,
        "distanceKm": 37.76260361543187,
        "gradePct": 0.297515814514852,
        "smoothedEle": 43.00523167565945,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90153,
        "lng": 121.25095,
        "ele": 46,
        "distanceKm": 37.809815750866406,
        "gradePct": -0.2766285583595863,
        "smoothedEle": 42.399025867851556,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901091649033837,
        "lng": 121.25069388152303,
        "ele": 43.34805514883451,
        "distanceKm": 37.865169761552146,
        "gradePct": -0.8801246344772569,
        "smoothedEle": 41.48842934581668,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90064976602256,
        "lng": 121.25044492101536,
        "ele": 41.23203676588958,
        "distanceKm": 37.920528408329986,
        "gradePct": -1.2921852702421532,
        "smoothedEle": 40.68134502924079,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90020788301128,
        "lng": 121.25019596050768,
        "ele": 39.11601838294493,
        "distanceKm": 37.9758870933797,
        "gradePct": -1.5766073915675267,
        "smoothedEle": 39.68145647610294,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899766,
        "lng": 121.249947,
        "ele": 37,
        "distanceKm": 38.03124581670033,
        "gradePct": -1.947067156612456,
        "smoothedEle": 38.15235804940089,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899205,
        "lng": 121.249676,
        "ele": 34.5,
        "distanceKm": 38.09952378140199,
        "gradePct": -2.4405326997087124,
        "smoothedEle": 36.106510109718265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898690479346307,
        "lng": 121.2494841286616,
        "ele": 34.97729188654201,
        "distanceKm": 38.16001760706595,
        "gradePct": -2.7052613121186093,
        "smoothedEle": 34.55756850901193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898177,
        "lng": 121.249289,
        "ele": 34.25,
        "distanceKm": 38.22051138236092,
        "gradePct": -2.559701037390492,
        "smoothedEle": 33.329458597428946,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897692,
        "lng": 121.249067,
        "ele": 31,
        "distanceKm": 38.279039281868734,
        "gradePct": -2.04470647636684,
        "smoothedEle": 32.63088480207128,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897178,
        "lng": 121.248725,
        "ele": 30.25,
        "distanceKm": 38.346075563764984,
        "gradePct": -1.3899086541400913,
        "smoothedEle": 32.13473657288663,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896863500000002,
        "lng": 121.248549,
        "ele": 29.875000000000036,
        "distanceKm": 38.38541994352216,
        "gradePct": -1.0510162428427592,
        "smoothedEle": 31.939832365766343,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896549,
        "lng": 121.248373,
        "ele": 29.5,
        "distanceKm": 38.42476434243108,
        "gradePct": -0.7845495393544684,
        "smoothedEle": 31.70959729279523,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896082,
        "lng": 121.248162,
        "ele": 32.25,
        "distanceKm": 38.48101089807023,
        "gradePct": -0.5872656555898074,
        "smoothedEle": 31.441761185660322,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89563,
        "lng": 121.247987,
        "ele": 32.18750000000001,
        "distanceKm": 38.53437219116627,
        "gradePct": -0.2506766946491261,
        "smoothedEle": 31.720002062590765,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895178,
        "lng": 121.247812,
        "ele": 32.125,
        "distanceKm": 38.58773350432583,
        "gradePct": 0.18759554064123218,
        "smoothedEle": 32.301484980196406,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.894726,
        "lng": 121.247637,
        "ele": 32.06249999999999,
        "distanceKm": 38.64109483754898,
        "gradePct": 0.7131858923744817,
        "smoothedEle": 33.05820616050406,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.894274,
        "lng": 121.247462,
        "ele": 32,
        "distanceKm": 38.69445619083464,
        "gradePct": 1.2348315592115144,
        "smoothedEle": 33.98153186393248,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893681,
        "lng": 121.247225,
        "ele": 34.75,
        "distanceKm": 38.76472209140346,
        "gradePct": 1.2998163862764749,
        "smoothedEle": 34.650360364446044,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893063,
        "lng": 121.24695,
        "ele": 36.75,
        "distanceKm": 38.838990443925475,
        "gradePct": 1.0483391159074487,
        "smoothedEle": 35.125041824106695,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892431,
        "lng": 121.246698,
        "ele": 38.25,
        "distanceKm": 38.91385687418733,
        "gradePct": 0.691660906545036,
        "smoothedEle": 35.54951977893934,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891902,
        "lng": 121.246391,
        "ele": 36.75,
        "distanceKm": 38.98055800967302,
        "gradePct": 0.6072672440694603,
        "smoothedEle": 35.96610911874269,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891601,
        "lng": 121.246129,
        "ele": 36,
        "distanceKm": 39.023459455762385,
        "gradePct": 0.534293660483978,
        "smoothedEle": 36.09436382033161,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891214,
        "lng": 121.245795,
        "ele": 34.75,
        "distanceKm": 39.07843588981488,
        "gradePct": 0.4842473326234223,
        "smoothedEle": 36.3171844199418,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890840333333333,
        "lng": 121.24556933333334,
        "ele": 34.916666666666664,
        "distanceKm": 39.125983579372836,
        "gradePct": 0.4442183781912811,
        "smoothedEle": 36.51369521758621,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89046666666667,
        "lng": 121.24534366666667,
        "ele": 35.083333333333336,
        "distanceKm": 39.17353129987884,
        "gradePct": 0.3236979586204239,
        "smoothedEle": 36.56961894059952,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890093,
        "lng": 121.245118,
        "ele": 35.25,
        "distanceKm": 39.22107905133316,
        "gradePct": 0.30567756614059427,
        "smoothedEle": 36.69860268760171,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889793,
        "lng": 121.244783,
        "ele": 36.75,
        "distanceKm": 39.26893768985858,
        "gradePct": 0.32984331557168173,
        "smoothedEle": 36.93837465447533,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889498,
        "lng": 121.244333,
        "ele": 38.5,
        "distanceKm": 39.32551503148439,
        "gradePct": 0.4160726418286747,
        "smoothedEle": 37.34390403029937,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889288,
        "lng": 121.244007,
        "ele": 39,
        "distanceKm": 39.36626435887818,
        "gradePct": 0.59282028680096,
        "smoothedEle": 37.746712429475835,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889076322145844,
        "lng": 121.24365044041456,
        "ele": 38.764802384270496,
        "distanceKm": 39.409717176794146,
        "gradePct": 0.7478276614282393,
        "smoothedEle": 38.16343642360737,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888864176772884,
        "lng": 121.24329420918075,
        "ele": 38.87093870262619,
        "distanceKm": 39.4531699723211,
        "gradePct": 0.8434044459619465,
        "smoothedEle": 38.546187219642846,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888652,
        "lng": 121.242938,
        "ele": 39,
        "distanceKm": 39.496622814190395,
        "gradePct": 0.8543502396440898,
        "smoothedEle": 38.84551378194435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888444,
        "lng": 121.242497,
        "ele": 39,
        "distanceKm": 39.54737518275496,
        "gradePct": 0.6060457070610269,
        "smoothedEle": 38.77208373598902,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888294,
        "lng": 121.242036,
        "ele": 39.75,
        "distanceKm": 39.59745897444079,
        "gradePct": 0.12319864183060682,
        "smoothedEle": 38.29227431088046,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888064,
        "lng": 121.241364,
        "ele": 39.75,
        "distanceKm": 39.670895987304,
        "gradePct": -0.8041993263123813,
        "smoothedEle": 37.05989489884546,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887918,
        "lng": 121.240968,
        "ele": 38.75,
        "distanceKm": 39.714590260693825,
        "gradePct": -1.3391433979367364,
        "smoothedEle": 36.14123114666941,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88761,
        "lng": 121.240426,
        "ele": 36,
        "distanceKm": 39.779826052844676,
        "gradePct": -1.8442053204996418,
        "smoothedEle": 34.77278941789735,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887342,
        "lng": 121.240005,
        "ele": 33.25,
        "distanceKm": 39.83224782788421,
        "gradePct": -1.89627156662444,
        "smoothedEle": 33.915923842877476,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88712,
        "lng": 121.239523,
        "ele": 30.25,
        "distanceKm": 39.8874511407166,
        "gradePct": -1.733823733363725,
        "smoothedEle": 33.24417849374289,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8869735,
        "lng": 121.23916700000001,
        "ele": 28.875,
        "distanceKm": 39.927393048862825,
        "gradePct": -1.5155161757830766,
        "smoothedEle": 32.84163656879389,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886827,
        "lng": 121.238811,
        "ele": 27.5,
        "distanceKm": 39.967334992952196,
        "gradePct": -1.2533054252558493,
        "smoothedEle": 32.52820171495372,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886493,
        "lng": 121.238347,
        "ele": 29.5,
        "distanceKm": 40.02765649022774,
        "gradePct": -0.7967580621249076,
        "smoothedEle": 32.39745590572461,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886165982872413,
        "lng": 121.23807945218523,
        "ele": 31.917912729397628,
        "distanceKm": 40.07319159348828,
        "gradePct": -0.3832587129949888,
        "smoothedEle": 32.651179359317624,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885822,
        "lng": 121.237834,
        "ele": 34.25,
        "distanceKm": 40.11896550908424,
        "gradePct": 0.1700221212923634,
        "smoothedEle": 33.266615113281205,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885538,
        "lng": 121.237546,
        "ele": 34.75,
        "distanceKm": 40.16218245932246,
        "gradePct": 0.8000256558692798,
        "smoothedEle": 34.16868630208647,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88528822384787,
        "lng": 121.23718987826308,
        "ele": 35.320962915961125,
        "distanceKm": 40.20803351719145,
        "gradePct": 1.467755569459762,
        "smoothedEle": 35.37549950164522,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885043111923935,
        "lng": 121.23682993913154,
        "ele": 36.535481457980566,
        "distanceKm": 40.2538862224157,
        "gradePct": 2.101002465024673,
        "smoothedEle": 36.745613973924804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884798,
        "lng": 121.23647,
        "ele": 37.75,
        "distanceKm": 40.299738981185115,
        "gradePct": 2.5104938841265714,
        "smoothedEle": 38.02909992106785,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884497802225717,
        "lng": 121.23603933800499,
        "ele": 39.539666649741854,
        "distanceKm": 40.35506238548184,
        "gradePct": 2.639812451341749,
        "smoothedEle": 39.299693279664496,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884196,
        "lng": 121.23561,
        "ele": 41,
        "distanceKm": 40.41038580455317,
        "gradePct": 2.389539544149086,
        "smoothedEle": 40.22486676468662,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883924,
        "lng": 121.235314,
        "ele": 42.25,
        "distanceKm": 40.453214084665866,
        "gradePct": 2.0391284457680743,
        "smoothedEle": 40.80378686705973,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883629,
        "lng": 121.235028,
        "ele": 43,
        "distanceKm": 40.497196238209334,
        "gradePct": 1.754638425503014,
        "smoothedEle": 41.46720166801907,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883322929327214,
        "lng": 121.23474859104077,
        "ele": 43.75,
        "distanceKm": 40.54166644366906,
        "gradePct": 1.6085490344336884,
        "smoothedEle": 42.20913141842028,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883017,
        "lng": 121.234469,
        "ele": 43.75,
        "distanceKm": 40.58613667532696,
        "gradePct": 1.6041098780022645,
        "smoothedEle": 43.02756835548091,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8827115,
        "lng": 121.234142,
        "ele": 42.75,
        "distanceKm": 40.63384587707387,
        "gradePct": 1.6724400878382621,
        "smoothedEle": 43.88686234984549,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882406,
        "lng": 121.233815,
        "ele": 41.75,
        "distanceKm": 40.68155513175454,
        "gradePct": 1.7182746644624987,
        "smoothedEle": 44.6678248157662,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882112496458394,
        "lng": 121.2334757471118,
        "ele": 43.39255501811767,
        "distanceKm": 40.72923116521893,
        "gradePct": 1.6455449167699798,
        "smoothedEle": 45.29275418628564,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881810248229197,
        "lng": 121.2331453735559,
        "ele": 45.571277509059,
        "distanceKm": 40.77692835850991,
        "gradePct": 1.4760970478529782,
        "smoothedEle": 45.8102911817497,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881508,
        "lng": 121.232815,
        "ele": 47.75,
        "distanceKm": 40.824625605269205,
        "gradePct": 1.2786668278325695,
        "smoothedEle": 46.27812900170313,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881029,
        "lng": 121.23244,
        "ele": 49.25,
        "distanceKm": 40.89029718525973,
        "gradePct": 1.068658774081597,
        "smoothedEle": 46.9197317204061,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88066036615204,
        "lng": 121.23220424579492,
        "ele": 49.07139832947665,
        "distanceKm": 40.93787367207165,
        "gradePct": 0.9928812639193084,
        "smoothedEle": 47.37229198099479,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880292,
        "lng": 121.231968,
        "ele": 48.5,
        "distanceKm": 40.98545014820557,
        "gradePct": 0.8555670561915767,
        "smoothedEle": 47.605011156718135,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87983899668646,
        "lng": 121.2316837105305,
        "ele": 48.66605693311612,
        "distanceKm": 41.043635572854576,
        "gradePct": 0.3755762472966975,
        "smoothedEle": 47.21500638500771,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87938551173146,
        "lng": 121.23140032969717,
        "ele": 48.3690809922957,
        "distanceKm": 41.10182091516663,
        "gradePct": -0.24218863259903156,
        "smoothedEle": 46.54497125457854,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878932,
        "lng": 121.231117,
        "ele": 47,
        "distanceKm": 41.160006272624564,
        "gradePct": -0.807459262663019,
        "smoothedEle": 45.86563453290338,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878629,
        "lng": 121.230916,
        "ele": 46.25,
        "distanceKm": 41.19949278801538,
        "gradePct": -0.9952353534289635,
        "smoothedEle": 45.52041556263506,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878330000000002,
        "lng": 121.230731,
        "ele": 43.37500000000027,
        "distanceKm": 41.237762792553525,
        "gradePct": -0.9583477631866556,
        "smoothedEle": 45.33767488071438,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878031,
        "lng": 121.230546,
        "ele": 40.5,
        "distanceKm": 41.27603281776175,
        "gradePct": -0.7582448971145722,
        "smoothedEle": 45.32544510310891,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877599,
        "lng": 121.23025466666667,
        "ele": 42,
        "distanceKm": 41.332586321816486,
        "gradePct": -0.40609238659962577,
        "smoothedEle": 45.37358837024582,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877167,
        "lng": 121.22996333333333,
        "ele": 43.5,
        "distanceKm": 41.38913987598503,
        "gradePct": -0.03846511407775156,
        "smoothedEle": 45.53399779411349,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876735,
        "lng": 121.229672,
        "ele": 45,
        "distanceKm": 41.445693480266605,
        "gradePct": 0.2669090178048028,
        "smoothedEle": 45.8689585425821,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87629799469397,
        "lng": 121.22942221720061,
        "ele": 48.39007319121631,
        "distanceKm": 41.50061262302871,
        "gradePct": 0.5454678782594151,
        "smoothedEle": 46.43730533019628,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87585111248504,
        "lng": 121.22919249033242,
        "ele": 49.06463912622408,
        "distanceKm": 41.55559552240877,
        "gradePct": 1.0120390607793295,
        "smoothedEle": 47.462930163821724,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875403684914513,
        "lng": 121.2289640219731,
        "ele": 49.589757917611955,
        "distanceKm": 41.610578254534815,
        "gradePct": 1.3800918413985261,
        "smoothedEle": 48.42115862392379,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874955652570836,
        "lng": 121.22873695592168,
        "ele": 49.75,
        "distanceKm": 41.66556093829808,
        "gradePct": 1.6101182575179875,
        "smoothedEle": 49.294799249204985,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874508,
        "lng": 121.228509,
        "ele": 49.75,
        "distanceKm": 41.720544056053505,
        "gradePct": 1.577377492021621,
        "smoothedEle": 49.963851778685026,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873952,
        "lng": 121.228126,
        "ele": 50.25,
        "distanceKm": 41.79376928837497,
        "gradePct": 1.0443379890051674,
        "smoothedEle": 50.216891178854745,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873661573887695,
        "lng": 121.227872400256,
        "ele": 50.7255493398347,
        "distanceKm": 41.83521734078942,
        "gradePct": 0.6897346550988965,
        "smoothedEle": 50.19212768001451,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873371,
        "lng": 121.227619,
        "ele": 51.5,
        "distanceKm": 41.876665427743575,
        "gradePct": 0.29935531566146806,
        "smoothedEle": 50.02863293384657,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873018,
        "lng": 121.227316,
        "ele": 51.25,
        "distanceKm": 41.92670905673717,
        "gradePct": -0.15158668063101427,
        "smoothedEle": 49.681982386363515,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8727425,
        "lng": 121.227064,
        "ele": 50.75,
        "distanceKm": 41.96677173147783,
        "gradePct": -0.3610269573654376,
        "smoothedEle": 49.40154366317889,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872467,
        "lng": 121.226812,
        "ele": 50.25,
        "distanceKm": 42.006834439968024,
        "gradePct": -0.5439902934166121,
        "smoothedEle": 49.121104703747505,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872147851900735,
        "lng": 121.22650069197523,
        "ele": 49.02037960118707,
        "distanceKm": 42.054548336808246,
        "gradePct": -0.6880797571804829,
        "smoothedEle": 48.73971576127195,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87182292595037,
        "lng": 121.22619634598762,
        "ele": 47.63518980059343,
        "distanceKm": 42.10227299336364,
        "gradePct": -0.7872788303074958,
        "smoothedEle": 48.27669252101269,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871498,
        "lng": 121.225892,
        "ele": 46.25,
        "distanceKm": 42.14999769865471,
        "gradePct": -0.9385239116082973,
        "smoothedEle": 47.64191406972412,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871148842248747,
        "lng": 121.22557430345955,
        "ele": 46.25,
        "distanceKm": 42.20066114694742,
        "gradePct": -1.1459918131009788,
        "smoothedEle": 46.87233412868978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87079968449749,
        "lng": 121.2252566069191,
        "ele": 46.25,
        "distanceKm": 42.25132464899426,
        "gradePct": -1.3609786214683288,
        "smoothedEle": 46.04352624991175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87045052674624,
        "lng": 121.22493891037864,
        "ele": 46.25,
        "distanceKm": 42.30198820479488,
        "gradePct": -1.6729497435134502,
        "smoothedEle": 44.933556044459046,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870101390022356,
        "lng": 121.22462118878559,
        "ele": 45.34242004619257,
        "distanceKm": 42.3526516717118,
        "gradePct": -2.094164511398438,
        "smoothedEle": 43.4132710829629,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869752260014906,
        "lng": 121.2243034591904,
        "ele": 44.14494669746171,
        "distanceKm": 42.40331514687886,
        "gradePct": -2.3880907495028065,
        "smoothedEle": 42.05273565366417,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869403130007452,
        "lng": 121.2239857295952,
        "ele": 42.94747334873086,
        "distanceKm": 42.453978675804386,
        "gradePct": -2.4969992028789747,
        "smoothedEle": 40.99138169477371,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869054,
        "lng": 121.223668,
        "ele": 41.75,
        "distanceKm": 42.50464225848739,
        "gradePct": -2.395549774632252,
        "smoothedEle": 40.06281492778394,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868733,
        "lng": 121.223325,
        "ele": 35,
        "distanceKm": 42.554732113086196,
        "gradePct": -2.03548998522908,
        "smoothedEle": 39.286422181502395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868534,
        "lng": 121.223058,
        "ele": 32.25,
        "distanceKm": 42.589916802850134,
        "gradePct": -1.78469677529625,
        "smoothedEle": 38.84314611740166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8684082586412,
        "lng": 121.22271257586074,
        "ele": 33.33119439066836,
        "distanceKm": 42.6279690800248,
        "gradePct": -1.5369465417104913,
        "smoothedEle": 38.46236552844208,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868315,
        "lng": 121.222354,
        "ele": 35.5,
        "distanceKm": 42.66614252222505,
        "gradePct": -1.2698290266357224,
        "smoothedEle": 38.228783554227576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8682285,
        "lng": 121.22180499999999,
        "ele": 37,
        "distanceKm": 42.72320688737816,
        "gradePct": -0.8912569236129764,
        "smoothedEle": 37.992549332751,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868142,
        "lng": 121.221256,
        "ele": 38.5,
        "distanceKm": 42.78027128783279,
        "gradePct": -0.693414688665542,
        "smoothedEle": 37.5778362407909,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868068,
        "lng": 121.220538,
        "ele": 40.25,
        "distanceKm": 42.85429300148889,
        "gradePct": -0.05754327991457504,
        "smoothedEle": 38.18620380247009,
        "gradeBand": "descent"
      },
      {
        "lat": 22.868021,
        "lng": 121.2201675,
        "ele": 41.00000000000007,
        "distanceKm": 42.89261079960672,
        "gradePct": 0.2927898492559316,
        "smoothedEle": 38.70479026644042,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.867974,
        "lng": 121.219797,
        "ele": 41.75,
        "distanceKm": 42.93092861073473,
        "gradePct": 0.7006148633733006,
        "smoothedEle": 39.337661764950575,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.867827,
        "lng": 121.219267,
        "ele": 39.25,
        "distanceKm": 42.98763685874485,
        "gradePct": 1.4685429002242114,
        "smoothedEle": 40.57545798663725,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.867685,
        "lng": 121.218949,
        "ele": 36.75,
        "distanceKm": 43.02384222928052,
        "gradePct": 1.7341355686548747,
        "smoothedEle": 41.404206996433906,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.867469500000002,
        "lng": 121.218475,
        "ele": 38.37499999999989,
        "distanceKm": 43.07799634322413,
        "gradePct": 2.0140035716991243,
        "smoothedEle": 42.53500788041448,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.867254,
        "lng": 121.218001,
        "ele": 40,
        "distanceKm": 43.13215052625162,
        "gradePct": 1.8072638528264688,
        "smoothedEle": 42.97886076557555,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86705,
        "lng": 121.217499,
        "ele": 46.5,
        "distanceKm": 43.18836353984772,
        "gradePct": 0.9370384142137639,
        "smoothedEle": 42.466168707648414,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86699,
        "lng": 121.217124,
        "ele": 48.5,
        "distanceKm": 43.22735956399507,
        "gradePct": 0.21773270966273417,
        "smoothedEle": 41.91311845549354,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.866981880345428,
        "lng": 121.21669207215815,
        "ele": 49.77991364287794,
        "distanceKm": 43.271622458391235,
        "gradePct": -0.45286019131341676,
        "smoothedEle": 41.49619336922457,
        "gradeBand": "descent"
      },
      {
        "lat": 22.866985,
        "lng": 121.21626,
        "ele": 49,
        "distanceKm": 43.31589228961268,
        "gradePct": -0.8121310858839649,
        "smoothedEle": 41.221344524843715,
        "gradeBand": "descent"
      },
      {
        "lat": 22.866901,
        "lng": 121.215741,
        "ele": 42.75,
        "distanceKm": 43.369881182208275,
        "gradePct": -0.98557603408959,
        "smoothedEle": 40.663585399037935,
        "gradeBand": "descent"
      },
      {
        "lat": 22.866638,
        "lng": 121.215179,
        "ele": 33.5,
        "distanceKm": 43.43446245386577,
        "gradePct": -1.5455266541407078,
        "smoothedEle": 38.755160960025556,
        "gradeBand": "descent"
      },
      {
        "lat": 22.866339,
        "lng": 121.214785,
        "ele": 33.5,
        "distanceKm": 43.48675921730296,
        "gradePct": -2.511303577335894,
        "smoothedEle": 36.37960978456028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8660515,
        "lng": 121.21441700000001,
        "ele": 34.12499999999996,
        "distanceKm": 43.53619189564888,
        "gradePct": -3.5493680214206575,
        "smoothedEle": 33.9128932985152,
        "gradeBand": "descent"
      },
      {
        "lat": 22.865764,
        "lng": 121.214049,
        "ele": 34.75,
        "distanceKm": 43.5856246348519,
        "gradePct": -4.364010374237141,
        "smoothedEle": 31.470333957385783,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8655065,
        "lng": 121.2137365,
        "ele": 30.12499999999961,
        "distanceKm": 43.62857784303301,
        "gradePct": -4.589260972058408,
        "smoothedEle": 29.750533627134086,
        "gradeBand": "descent"
      },
      {
        "lat": 22.865249,
        "lng": 121.213424,
        "ele": 25.5,
        "distanceKm": 43.671531096446074,
        "gradePct": -4.268789906235275,
        "smoothedEle": 28.53375882917572,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86499,
        "lng": 121.212834,
        "ele": 24.5,
        "distanceKm": 43.73849088858285,
        "gradePct": -3.185455485215779,
        "smoothedEle": 27.428385008643016,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864813,
        "lng": 121.212172,
        "ele": 24.5,
        "distanceKm": 43.80911574678048,
        "gradePct": -2.0891218681898995,
        "smoothedEle": 26.351531325325684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864785,
        "lng": 121.211767,
        "ele": 23.75,
        "distanceKm": 43.850727815434645,
        "gradePct": -1.641529813041767,
        "smoothedEle": 25.840012143048753,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864887794972567,
        "lng": 121.21128283942686,
        "ele": 24.41702958003682,
        "distanceKm": 43.901633714632226,
        "gradePct": -1.1025298944465656,
        "smoothedEle": 25.831764312580734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.865032863315044,
        "lng": 121.21080889295125,
        "ele": 25.194686386691178,
        "distanceKm": 43.95280234227758,
        "gradePct": -0.3740187429754816,
        "smoothedEle": 26.462133397834418,
        "gradeBand": "descent"
      },
      {
        "lat": 22.865177931657524,
        "lng": 121.21033494647563,
        "ele": 25.972343193345534,
        "distanceKm": 44.00397092072104,
        "gradePct": 0.21854378994394574,
        "smoothedEle": 26.867064724908328,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865323,
        "lng": 121.209861,
        "ele": 26.75,
        "distanceKm": 44.055139449960684,
        "gradePct": 0.6363588797588376,
        "smoothedEle": 27.112015124628503,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86542,
        "lng": 121.20948,
        "ele": 29.75,
        "distanceKm": 44.09563842487448,
        "gradePct": 0.7052754742910625,
        "smoothedEle": 27.24328662468475,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865446,
        "lng": 121.209113,
        "ele": 30.75,
        "distanceKm": 44.133351258269975,
        "gradePct": 0.5480105838374414,
        "smoothedEle": 27.318528009212944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865438,
        "lng": 121.20871,
        "ele": 31.75,
        "distanceKm": 44.174651157213745,
        "gradePct": 0.31419687809359065,
        "smoothedEle": 27.263431500716894,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865322,
        "lng": 121.208189,
        "ele": 28.5,
        "distanceKm": 44.22956775069711,
        "gradePct": 0.028145151853937334,
        "smoothedEle": 27.045890380469718,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.865147,
        "lng": 121.207664,
        "ele": 26.75,
        "distanceKm": 44.28676952968312,
        "gradePct": -0.4248853841741386,
        "smoothedEle": 26.36476863055877,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864948,
        "lng": 121.207302,
        "ele": 25.75,
        "distanceKm": 44.32995846735962,
        "gradePct": -0.9681775245260718,
        "smoothedEle": 25.375403957078106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864555,
        "lng": 121.206722,
        "ele": 23.75,
        "distanceKm": 44.403722005745664,
        "gradePct": -2.2381339435764502,
        "smoothedEle": 22.672005251491,
        "gradeBand": "descent"
      },
      {
        "lat": 22.864062,
        "lng": 121.206292,
        "ele": 23,
        "distanceKm": 44.474050976652364,
        "gradePct": -3.3079867773394076,
        "smoothedEle": 19.900239370973615,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8636245,
        "lng": 121.20610900000001,
        "ele": 18.500000000000313,
        "distanceKm": 44.52618707268905,
        "gradePct": -3.582600677204337,
        "smoothedEle": 18.296597055914887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.863187,
        "lng": 121.205926,
        "ele": 14,
        "distanceKm": 44.57832319043768,
        "gradePct": -3.30484124079162,
        "smoothedEle": 16.993177307656467,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862659,
        "lng": 121.205661,
        "ele": 10.5,
        "distanceKm": 44.643008558745144,
        "gradePct": -2.7413300540409304,
        "smoothedEle": 15.64100559338849,
        "gradeBand": "descent"
      },
      {
        "lat": 22.862272,
        "lng": 121.205207,
        "ele": 11.25,
        "distanceKm": 44.70637728589966,
        "gradePct": -2.120396592193223,
        "smoothedEle": 14.665128595907467,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86208732481001,
        "lng": 121.20489153909053,
        "ele": 12.167102882880446,
        "distanceKm": 44.74467090493661,
        "gradePct": -1.878238373323363,
        "smoothedEle": 14.078018545359924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861922,
        "lng": 121.204563,
        "ele": 13.75,
        "distanceKm": 44.783025604089005,
        "gradePct": -1.5671881475056155,
        "smoothedEle": 13.760502573686274,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861758,
        "lng": 121.204196,
        "ele": 14,
        "distanceKm": 44.82481705929282,
        "gradePct": -1.1751289021750895,
        "smoothedEle": 13.671019736824663,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861671,
        "lng": 121.203697,
        "ele": 14.75,
        "distanceKm": 44.87685185528088,
        "gradePct": -0.7018626357470816,
        "smoothedEle": 13.716094303314184,
        "gradeBand": "descent"
      },
      {
        "lat": 22.861671,
        "lng": 121.203046,
        "ele": 16.25,
        "distanceKm": 44.94355345035222,
        "gradePct": 0.037377304280366806,
        "smoothedEle": 14.169905742430931,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.861662,
        "lng": 121.202596,
        "ele": 15,
        "distanceKm": 44.98967140468203,
        "gradePct": 0.38343878146308874,
        "smoothedEle": 14.513150311702567,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.861532,
        "lng": 121.202089,
        "ele": 15,
        "distanceKm": 45.043592504252366,
        "gradePct": 0.5859925318925884,
        "smoothedEle": 14.85926882213871,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.861129,
        "lng": 121.201589,
        "ele": 13.25,
        "distanceKm": 45.11165584041632,
        "gradePct": 0.7079481783991369,
        "smoothedEle": 15.368783296996451,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860729,
        "lng": 121.2011765,
        "ele": 14.375,
        "distanceKm": 45.17301243071557,
        "gradePct": 0.7830826689138948,
        "smoothedEle": 15.955327011553692,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.860329,
        "lng": 121.200764,
        "ele": 15.5,
        "distanceKm": 45.234369106708776,
        "gradePct": 0.875932392186236,
        "smoothedEle": 16.551928793471657,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.859979,
        "lng": 121.200402,
        "ele": 16.75,
        "distanceKm": 45.28813131768107,
        "gradePct": 0.9389085601283105,
        "smoothedEle": 17.07049848744381,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.859679333333332,
        "lng": 121.200091,
        "ele": 18.083333333333403,
        "distanceKm": 45.33423699322612,
        "gradePct": 0.89583745652851,
        "smoothedEle": 17.37632472387777,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.859379666666666,
        "lng": 121.19977999999999,
        "ele": 19.416666666666597,
        "distanceKm": 45.38034271733376,
        "gradePct": 0.7422847829567375,
        "smoothedEle": 17.511172636471148,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.85908,
        "lng": 121.199469,
        "ele": 20.75,
        "distanceKm": 45.426448490001434,
        "gradePct": 0.4972733528076514,
        "smoothedEle": 17.469459364086198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.858734,
        "lng": 121.199095,
        "ele": 20.75,
        "distanceKm": 45.480750434486396,
        "gradePct": 0.1161582655711283,
        "smoothedEle": 17.23162184646224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.858306,
        "lng": 121.198775,
        "ele": 19,
        "distanceKm": 45.5385432110419,
        "gradePct": -0.29378391724519065,
        "smoothedEle": 16.801351518251117,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857701,
        "lng": 121.19855,
        "ele": 14.75,
        "distanceKm": 45.609656883399126,
        "gradePct": -0.6842404091529675,
        "smoothedEle": 16.11617041481217,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857368,
        "lng": 121.198471,
        "ele": 13.75,
        "distanceKm": 45.64755929153885,
        "gradePct": -0.8654415342694828,
        "smoothedEle": 15.646112928344948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.857002805176155,
        "lng": 121.19833976966478,
        "ele": 13.01265846575843,
        "distanceKm": 45.69033548519854,
        "gradePct": -1.0669679606580482,
        "smoothedEle": 15.026324707332464,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856641,
        "lng": 121.198197,
        "ele": 12.25,
        "distanceKm": 45.73314354017059,
        "gradePct": -1.2203264866941743,
        "smoothedEle": 14.400899384768747,
        "gradeBand": "descent"
      },
      {
        "lat": 22.856217,
        "lng": 121.197896,
        "ele": 12.5,
        "distanceKm": 45.7894820158449,
        "gradePct": -1.3066459129956849,
        "smoothedEle": 13.697263684602394,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85598534381611,
        "lng": 121.19751989349926,
        "ele": 13.082218207375666,
        "distanceKm": 45.835835750253324,
        "gradePct": -1.2414441301504864,
        "smoothedEle": 13.308617497144791,
        "gradeBand": "descent"
      },
      {
        "lat": 22.855784475052886,
        "lng": 121.1971201147994,
        "ele": 13.215774565900537,
        "distanceKm": 45.88249257930982,
        "gradePct": -0.9721764201300024,
        "smoothedEle": 13.19560845491405,
        "gradeBand": "descent"
      },
      {
        "lat": 22.855583606289663,
        "lng": 121.19672033609956,
        "ele": 13.349330924425407,
        "distanceKm": 45.92914946151059,
        "gradePct": -0.6839767778355831,
        "smoothedEle": 13.091299284677506,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85538273752644,
        "lng": 121.1963205573997,
        "ele": 13.482887282950259,
        "distanceKm": 45.97580639685777,
        "gradePct": -0.47697586469766173,
        "smoothedEle": 12.91411270240592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85518186876322,
        "lng": 121.19592077869986,
        "ele": 13.61644364147513,
        "distanceKm": 46.02246338534818,
        "gradePct": -0.40340582357607824,
        "smoothedEle": 12.613924511067134,
        "gradeBand": "descent"
      },
      {
        "lat": 22.854981,
        "lng": 121.195521,
        "ele": 13.75,
        "distanceKm": 46.06912042698434,
        "gradePct": -0.43930149579309496,
        "smoothedEle": 12.349394593867265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.854763128039593,
        "lng": 121.19511496564967,
        "ele": 13.400581998146336,
        "distanceKm": 46.11726440865907,
        "gradePct": -0.5358385650525768,
        "smoothedEle": 12.046193154233768,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85451,
        "lng": 121.194731,
        "ele": 12.25,
        "distanceKm": 46.165639205032186,
        "gradePct": -0.5728820556908338,
        "smoothedEle": 11.806959999113309,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8542445,
        "lng": 121.19444100000001,
        "ele": 10.625,
        "distanceKm": 46.20752655765755,
        "gradePct": -0.5518113738410151,
        "smoothedEle": 11.606404393106072,
        "gradeBand": "descent"
      },
      {
        "lat": 22.853979,
        "lng": 121.194151,
        "ele": 9,
        "distanceKm": 46.24941395145437,
        "gradePct": -0.5712014770353145,
        "smoothedEle": 11.318720805586779,
        "gradeBand": "descent"
      },
      {
        "lat": 22.85367993106482,
        "lng": 121.1937331343786,
        "ele": 9.816837745024507,
        "distanceKm": 46.30362830373401,
        "gradePct": -0.6446396787710326,
        "smoothedEle": 10.842791335284275,
        "gradeBand": "descent"
      },
      {
        "lat": 22.853392,
        "lng": 121.193306,
        "ele": 10,
        "distanceKm": 46.35785559065465,
        "gradePct": -0.76584472999078,
        "smoothedEle": 10.313763696010708,
        "gradeBand": "descent"
      },
      {
        "lat": 22.853089,
        "lng": 121.19287,
        "ele": 11.25,
        "distanceKm": 46.41381139023773,
        "gradePct": -0.8844596020334546,
        "smoothedEle": 9.79432081380028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.852796,
        "lng": 121.192631,
        "ele": 10.75,
        "distanceKm": 46.45456927763567,
        "gradePct": -0.9002293257747991,
        "smoothedEle": 9.473005288363558,
        "gradeBand": "descent"
      },
      {
        "lat": 22.852459,
        "lng": 121.19243,
        "ele": 9.5,
        "distanceKm": 46.4973290290298,
        "gradePct": -0.8519472355605793,
        "smoothedEle": 9.19419606718228,
        "gradeBand": "descent"
      },
      {
        "lat": 22.852008,
        "lng": 121.19215333333334,
        "ele": 9,
        "distanceKm": 46.55493634359843,
        "gradePct": -0.7269914052779572,
        "smoothedEle": 8.888260318343825,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851557,
        "lng": 121.19187666666666,
        "ele": 8.5,
        "distanceKm": 46.61254370444746,
        "gradePct": -0.54084363727183,
        "smoothedEle": 8.72440158413388,
        "gradeBand": "descent"
      },
      {
        "lat": 22.851106,
        "lng": 121.1916,
        "ele": 8,
        "distanceKm": 46.670151111574036,
        "gradePct": -0.2783836674860614,
        "smoothedEle": 8.814638696069098,
        "gradeBand": "descent"
      },
      {
        "lat": 22.850773,
        "lng": 121.191403,
        "ele": 6.75,
        "distanceKm": 46.712324027297825,
        "gradePct": -0.004461876328020801,
        "smoothedEle": 9.105638225377826,
        "gradeBand": "descent"
      },
      {
        "lat": 22.850501,
        "lng": 121.191228,
        "ele": 6.5,
        "distanceKm": 46.74748537109473,
        "gradePct": 0.2916309671403082,
        "smoothedEle": 9.511092207751899,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.850112,
        "lng": 121.190853,
        "ele": 7,
        "distanceKm": 46.80534318423163,
        "gradePct": 0.8150181812618307,
        "smoothedEle": 10.374919150983368,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.849874,
        "lng": 121.1903885,
        "ele": 9.875000000000192,
        "distanceKm": 46.85980258786572,
        "gradePct": 1.1574480846007833,
        "smoothedEle": 11.113324781553862,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.849636,
        "lng": 121.189924,
        "ele": 12.75,
        "distanceKm": 46.91426206431314,
        "gradePct": 1.286576357788905,
        "smoothedEle": 11.701138915776722,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.849443,
        "lng": 121.189476,
        "ele": 15.75,
        "distanceKm": 46.96493696069042,
        "gradePct": 1.2128544392741156,
        "smoothedEle": 12.197356272845203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.849053,
        "lng": 121.188947,
        "ele": 16.75,
        "distanceKm": 47.03435562667012,
        "gradePct": 1.020496765712864,
        "smoothedEle": 12.809287369306533,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.848566,
        "lng": 121.188632,
        "ele": 15.25,
        "distanceKm": 47.097397755994194,
        "gradePct": 0.7181920175757326,
        "smoothedEle": 12.955496250701986,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.848138,
        "lng": 121.188537,
        "ele": 13.25,
        "distanceKm": 47.145974645572245,
        "gradePct": 0.3624212063531191,
        "smoothedEle": 12.736516413568319,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.847583925122095,
        "lng": 121.18847363392544,
        "ele": 11.998008979373964,
        "distanceKm": 47.207926260457704,
        "gradePct": -0.19065128197396314,
        "smoothedEle": 12.195007826949457,
        "gradeBand": "descent"
      },
      {
        "lat": 22.847026,
        "lng": 121.188449,
        "ele": 10.5,
        "distanceKm": 47.2700161223777,
        "gradePct": -0.674293150071856,
        "smoothedEle": 11.543405781762361,
        "gradeBand": "descent"
      },
      {
        "lat": 22.846674999999998,
        "lng": 121.18848750000001,
        "ele": 9.125,
        "distanceKm": 47.30924447906807,
        "gradePct": -0.8674752717393385,
        "smoothedEle": 11.167141845596529,
        "gradeBand": "descent"
      },
      {
        "lat": 22.846324,
        "lng": 121.188526,
        "ele": 7.75,
        "distanceKm": 47.34847283678196,
        "gradePct": -0.8719812738403264,
        "smoothedEle": 10.97071759909177,
        "gradeBand": "descent"
      },
      {
        "lat": 22.845910291317626,
        "lng": 121.188573131284,
        "ele": 8.547775222224073,
        "distanceKm": 47.39472803561518,
        "gradePct": -0.682951532527632,
        "smoothedEle": 10.944468212767376,
        "gradeBand": "descent"
      },
      {
        "lat": 22.84549771848822,
        "lng": 121.18863609846301,
        "ele": 9.660831416668099,
        "distanceKm": 47.441055640841775,
        "gradePct": -0.4025009667026045,
        "smoothedEle": 11.042329616830072,
        "gradeBand": "descent"
      },
      {
        "lat": 22.845085145658814,
        "lng": 121.188699065642,
        "ele": 10.773887611111949,
        "distanceKm": 47.48738324879482,
        "gradePct": -0.08135408152724173,
        "smoothedEle": 11.214118544361918,
        "gradeBand": "descent"
      },
      {
        "lat": 22.844672572829406,
        "lng": 121.188762032821,
        "ele": 11.886943805555974,
        "distanceKm": 47.53371085947429,
        "gradePct": 0.2343475958331782,
        "smoothedEle": 11.513328968711031,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.84426,
        "lng": 121.188825,
        "ele": 13,
        "distanceKm": 47.58003847287974,
        "gradePct": 0.48612005916406015,
        "smoothedEle": 11.925044518527528,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.843907,
        "lng": 121.188781,
        "ele": 14,
        "distanceKm": 47.619548450654314,
        "gradePct": 0.6967850461531854,
        "smoothedEle": 12.390468398390004,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.843485400000002,
        "lng": 121.1886587,
        "ele": 13.924999999999999,
        "distanceKm": 47.66807457258862,
        "gradePct": 0.869413729649864,
        "smoothedEle": 12.881346866039785,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8430638,
        "lng": 121.1885364,
        "ele": 13.849999999999998,
        "distanceKm": 47.71660070455622,
        "gradePct": 0.9229659830983616,
        "smoothedEle": 13.248753687963053,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8426422,
        "lng": 121.1884141,
        "ele": 13.774999999999997,
        "distanceKm": 47.76512684655619,
        "gradePct": 0.8517193054706822,
        "smoothedEle": 13.495962846657692,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8422206,
        "lng": 121.1882918,
        "ele": 13.699999999999996,
        "distanceKm": 47.81365299858877,
        "gradePct": 0.6509768796258215,
        "smoothedEle": 13.622974278183351,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.841798999999998,
        "lng": 121.1881695,
        "ele": 13.624999999999995,
        "distanceKm": 47.8621791606542,
        "gradePct": 0.4016448768378083,
        "smoothedEle": 13.625000063955767,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8413774,
        "lng": 121.1880472,
        "ele": 13.550000000000004,
        "distanceKm": 47.91070533275156,
        "gradePct": 0.1753134656018107,
        "smoothedEle": 13.55474487897924,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8409558,
        "lng": 121.1879249,
        "ele": 13.475000000000003,
        "distanceKm": 47.9592315148811,
        "gradePct": 0.0035412543497050416,
        "smoothedEle": 13.473012471563706,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8405342,
        "lng": 121.1878026,
        "ele": 13.400000000000002,
        "distanceKm": 48.00775770704266,
        "gradePct": -0.10181797258906344,
        "smoothedEle": 13.40390810853511,
        "gradeBand": "descent"
      },
      {
        "lat": 22.840112599999998,
        "lng": 121.1876803,
        "ele": 13.325000000000001,
        "distanceKm": 48.05628390923648,
        "gradePct": -0.12713619558134767,
        "smoothedEle": 13.370481568095343,
        "gradeBand": "descent"
      },
      {
        "lat": 22.839691,
        "lng": 121.187558,
        "ele": 13.25,
        "distanceKm": 48.104810121461654,
        "gradePct": -0.024447572056545228,
        "smoothedEle": 13.514384699437791,
        "gradeBand": "descent"
      },
      {
        "lat": 22.839311,
        "lng": 121.187428,
        "ele": 13.25,
        "distanceKm": 48.1491146043232,
        "gradePct": 0.15072342079805576,
        "smoothedEle": 13.791499175337673,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.83893,
        "lng": 121.187274,
        "ele": 13,
        "distanceKm": 48.19432385349114,
        "gradePct": 0.3106788685031026,
        "smoothedEle": 14.044396501612717,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.838591,
        "lng": 121.1870995,
        "ele": 13.125,
        "distanceKm": 48.2360455544218,
        "gradePct": 0.38190806868769644,
        "smoothedEle": 14.148238590086963,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.838252,
        "lng": 121.186925,
        "ele": 13.25,
        "distanceKm": 48.2777672744512,
        "gradePct": 0.3868916854744116,
        "smoothedEle": 14.207973260473143,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.837861,
        "lng": 121.186716,
        "ele": 15,
        "distanceKm": 48.326233758956526,
        "gradePct": 0.2912548526209265,
        "smoothedEle": 14.230894390523352,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.83747,
        "lng": 121.186507,
        "ele": 16.75,
        "distanceKm": 48.374700270663375,
        "gradePct": 0.1599285418786755,
        "smoothedEle": 14.254480657917894,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.837115,
        "lng": 121.186365,
        "ele": 16.5,
        "distanceKm": 48.41677135547167,
        "gradePct": 0.174905726841801,
        "smoothedEle": 14.450078052504521,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.836703255978563,
        "lng": 121.18628199168764,
        "ele": 14.714875707934432,
        "distanceKm": 48.463338818110415,
        "gradePct": 0.3416732459235355,
        "smoothedEle": 14.87066194906832,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.836292627989284,
        "lng": 121.18619249584381,
        "ele": 14.10743785396717,
        "distanceKm": 48.50991063511154,
        "gradePct": 0.6303030958368909,
        "smoothedEle": 15.483780929156593,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.835882,
        "lng": 121.186103,
        "ele": 13.5,
        "distanceKm": 48.556482457563725,
        "gradePct": 0.9205380843575787,
        "smoothedEle": 16.086691113051064,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.835472,
        "lng": 121.185958,
        "ele": 13.5,
        "distanceKm": 48.6044329880466,
        "gradePct": 0.9632005801984778,
        "smoothedEle": 16.31911552635066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.835076,
        "lng": 121.18572966666666,
        "ele": 15.833333333333446,
        "distanceKm": 48.65429750053282,
        "gradePct": 0.7734673863721598,
        "smoothedEle": 16.335938148178187,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.83468,
        "lng": 121.18550133333333,
        "ele": 18.166666666666554,
        "distanceKm": 48.70416204497573,
        "gradePct": 0.5153221555460232,
        "smoothedEle": 16.438744926531715,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.834284,
        "lng": 121.185273,
        "ele": 20.5,
        "distanceKm": 48.75402662137555,
        "gradePct": 0.3252127726038381,
        "smoothedEle": 16.7053238580232,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.833873,
        "lng": 121.185123,
        "ele": 19.5,
        "distanceKm": 48.802243845099184,
        "gradePct": 0.3539877041574083,
        "smoothedEle": 17.016479784797944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.833544,
        "lng": 121.185068,
        "ele": 16.75,
        "distanceKm": 48.83925869291474,
        "gradePct": 0.4631058695265496,
        "smoothedEle": 17.257076295599056,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.833052333333335,
        "lng": 121.18502766666667,
        "ele": 16.916666666666668,
        "distanceKm": 48.89408563958164,
        "gradePct": 0.5908816038753,
        "smoothedEle": 17.59973339769295,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.832560666666666,
        "lng": 121.18498733333332,
        "ele": 17.083333333333332,
        "distanceKm": 48.94891258737494,
        "gradePct": 0.5267510836665639,
        "smoothedEle": 17.73148610154824,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.832069,
        "lng": 121.184947,
        "ele": 17.25,
        "distanceKm": 49.00373953629362,
        "gradePct": 0.3169730111726165,
        "smoothedEle": 17.660147799907016,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.831469,
        "lng": 121.185,
        "ele": 16.75,
        "distanceKm": 49.07067731807715,
        "gradePct": -0.003350898944976374,
        "smoothedEle": 17.44673442114845,
        "gradeBand": "descent"
      },
      {
        "lat": 22.831058,
        "lng": 121.18504366666667,
        "ele": 17.25,
        "distanceKm": 49.11659707585838,
        "gradePct": -0.07311779278784843,
        "smoothedEle": 17.5075942503926,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830647,
        "lng": 121.18508733333333,
        "ele": 17.75,
        "distanceKm": 49.162516834956534,
        "gradePct": -0.09005997958054351,
        "smoothedEle": 17.53366492178819,
        "gradeBand": "descent"
      },
      {
        "lat": 22.830236,
        "lng": 121.185131,
        "ele": 18.25,
        "distanceKm": 49.20843659537187,
        "gradePct": -0.12696301588634282,
        "smoothedEle": 17.391246439980208,
        "gradeBand": "descent"
      },
      {
        "lat": 22.829843,
        "lng": 121.185216,
        "ele": 19,
        "distanceKm": 49.25299604865149,
        "gradePct": -0.10787106449923758,
        "smoothedEle": 17.287364334191558,
        "gradeBand": "descent"
      },
      {
        "lat": 22.829242,
        "lng": 121.185427,
        "ele": 17.5,
        "distanceKm": 49.323235785444446,
        "gradePct": -0.1146391666829009,
        "smoothedEle": 17.28208500509494,
        "gradeBand": "descent"
      },
      {
        "lat": 22.82877,
        "lng": 121.185625,
        "ele": 17.25,
        "distanceKm": 49.379506057017366,
        "gradePct": -0.06387500423129475,
        "smoothedEle": 17.353223453459144,
        "gradeBand": "descent"
      },
      {
        "lat": 22.828277,
        "lng": 121.185936,
        "ele": 15.5,
        "distanceKm": 49.44291759491487,
        "gradePct": 0.04015397643174744,
        "smoothedEle": 17.391168333801502,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.827696,
        "lng": 121.186289,
        "ele": 16.5,
        "distanceKm": 49.51696167718557,
        "gradePct": 0.04195265072025063,
        "smoothedEle": 17.36646187838065,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.827355,
        "lng": 121.186584,
        "ele": 17.5,
        "distanceKm": 49.565456975869566,
        "gradePct": 0.04573870215943755,
        "smoothedEle": 17.42693961714668,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8270436,
        "lng": 121.1869724,
        "ele": 17.800000000000015,
        "distanceKm": 49.61821546798375,
        "gradePct": 0.10404254992018055,
        "smoothedEle": 17.584471908359856,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8267322,
        "lng": 121.1873608,
        "ele": 18.09999999999999,
        "distanceKm": 49.67097402880204,
        "gradePct": 0.18938821228037114,
        "smoothedEle": 17.76058310498167,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8264208,
        "lng": 121.1877492,
        "ele": 18.40000000000001,
        "distanceKm": 49.72373265832556,
        "gradePct": 0.28618509548701127,
        "smoothedEle": 17.947276055466453,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8261094,
        "lng": 121.18813759999999,
        "ele": 18.69999999999998,
        "distanceKm": 49.7764913565518,
        "gradePct": 0.17512907681507278,
        "smoothedEle": 17.81014547646994,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.825798,
        "lng": 121.188526,
        "ele": 19,
        "distanceKm": 49.829250123481884,
        "gradePct": -0.128953408212455,
        "smoothedEle": 17.363399424675332,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825521,
        "lng": 121.188794,
        "ele": 18.75,
        "distanceKm": 49.8705189784624,
        "gradePct": -0.4540503045222486,
        "smoothedEle": 16.8509635109877,
        "gradeBand": "descent"
      },
      {
        "lat": 22.825229,
        "lng": 121.188936,
        "ele": 18.5,
        "distanceKm": 49.90610029610656,
        "gradePct": -0.7259996541354109,
        "smoothedEle": 16.432882447790714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.824798,
        "lng": 121.18902,
        "ele": 17,
        "distanceKm": 49.95479246944035,
        "gradePct": -0.9879236740174699,
        "smoothedEle": 15.890697945966743,
        "gradeBand": "descent"
      },
      {
        "lat": 22.824317,
        "lng": 121.189018,
        "ele": 14.75,
        "distanceKm": 50.008277695809,
        "gradePct": -1.061070568919746,
        "smoothedEle": 15.418846767473108,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823921510518943,
        "lng": 121.18901602992052,
        "ele": 13.004986753962367,
        "distanceKm": 50.05225464390297,
        "gradePct": -0.9692110235990153,
        "smoothedEle": 15.13932994561882,
        "gradeBand": "descent"
      },
      {
        "lat": 22.823526,
        "lng": 121.189007,
        "ele": 11.5,
        "distanceKm": 50.09624320420243,
        "gradePct": -0.8145452878088726,
        "smoothedEle": 14.91961286296714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.822896,
        "lng": 121.188965,
        "ele": 12.25,
        "distanceKm": 50.16642823101387,
        "gradePct": -0.542819435751752,
        "smoothedEle": 14.702407404387236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.82240592616248,
        "lng": 121.1889557407475,
        "ele": 13.688711636980994,
        "distanceKm": 50.22093029300693,
        "gradePct": -0.23666274876636192,
        "smoothedEle": 14.865101552105248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.821915936175518,
        "lng": 121.18894174103359,
        "ele": 15.522007506557594,
        "distanceKm": 50.27543365853259,
        "gradePct": 0.16129626054075655,
        "smoothedEle": 15.346146332212413,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.821425961814747,
        "lng": 121.18892711369409,
        "ele": 16.508017995145487,
        "distanceKm": 50.329937018638276,
        "gradePct": 0.5426849274354144,
        "smoothedEle": 15.900708619097442,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.820936,
        "lng": 121.188912,
        "ele": 17,
        "distanceKm": 50.38444037825998,
        "gradePct": 0.8758042875611265,
        "smoothedEle": 16.507784054287132,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8205375,
        "lng": 121.18889200000001,
        "ele": 18.375,
        "distanceKm": 50.428799004358645,
        "gradePct": 0.9862305842264292,
        "smoothedEle": 16.907011689175107,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.820139,
        "lng": 121.188872,
        "ele": 19.75,
        "distanceKm": 50.4731576307346,
        "gradePct": 0.9476796955499507,
        "smoothedEle": 17.221417582313236,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.819784,
        "lng": 121.18888,
        "ele": 19.5,
        "distanceKm": 50.51264039885218,
        "gradePct": 0.876788429888359,
        "smoothedEle": 17.47829535633198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.819451,
        "lng": 121.188959,
        "ele": 18,
        "distanceKm": 50.55054328893371,
        "gradePct": 0.8011752747032573,
        "smoothedEle": 17.732578240246735,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.81907,
        "lng": 121.189163,
        "ele": 17.25,
        "distanceKm": 50.59778714563592,
        "gradePct": 0.713739477488494,
        "smoothedEle": 18.05538391564756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.818737,
        "lng": 121.18938,
        "ele": 16.75,
        "distanceKm": 50.64098119191969,
        "gradePct": 0.7084151259249036,
        "smoothedEle": 18.41018707552132,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.818245,
        "lng": 121.189735,
        "ele": 16.75,
        "distanceKm": 50.70668374514409,
        "gradePct": 0.682771716599512,
        "smoothedEle": 18.80508436530783,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.817935,
        "lng": 121.189998,
        "ele": 17.75,
        "distanceKm": 50.7504424210626,
        "gradePct": 0.6113836918999918,
        "smoothedEle": 18.954668921739724,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.817579,
        "lng": 121.190405,
        "ele": 19.75,
        "distanceKm": 50.80795006942887,
        "gradePct": 0.570903463139305,
        "smoothedEle": 19.28067080700296,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.817222,
        "lng": 121.190966,
        "ele": 21,
        "distanceKm": 50.87782098822977,
        "gradePct": 0.5985325103933001,
        "smoothedEle": 19.82867325888361,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.816807,
        "lng": 121.191442,
        "ele": 21.25,
        "distanceKm": 50.94497475033842,
        "gradePct": 0.7423160313847142,
        "smoothedEle": 20.4206103115666,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.816448,
        "lng": 121.191779,
        "ele": 21.499999999999982,
        "distanceKm": 50.99776278961977,
        "gradePct": 0.7863620153056216,
        "smoothedEle": 20.79564473796975,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.816089,
        "lng": 121.192116,
        "ele": 21.75,
        "distanceKm": 51.05055088847648,
        "gradePct": 0.6453962039316906,
        "smoothedEle": 20.90558438703436,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.815624,
        "lng": 121.192546,
        "ele": 21,
        "distanceKm": 51.11849120132238,
        "gradePct": 0.21410095727099737,
        "smoothedEle": 20.615368954177253,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.815123,
        "lng": 121.192934,
        "ele": 21.25,
        "distanceKm": 51.18693800031646,
        "gradePct": -0.3428395295761182,
        "smoothedEle": 20.033060593829106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.814528,
        "lng": 121.193219,
        "ele": 20,
        "distanceKm": 51.25926076764614,
        "gradePct": -0.7501042837028784,
        "smoothedEle": 19.368170495610002,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81418,
        "lng": 121.193332,
        "ele": 19,
        "distanceKm": 51.29965278643921,
        "gradePct": -0.8905837229565614,
        "smoothedEle": 18.914672122846962,
        "gradeBand": "descent"
      },
      {
        "lat": 22.813841,
        "lng": 121.193395,
        "ele": 17.75,
        "distanceKm": 51.33789699032106,
        "gradePct": -0.9987714272575481,
        "smoothedEle": 18.45273213852507,
        "gradeBand": "descent"
      },
      {
        "lat": 22.813192,
        "lng": 121.193454,
        "ele": 16.75,
        "distanceKm": 51.41031552791831,
        "gradePct": -1.1276364512949577,
        "smoothedEle": 17.56286938546615,
        "gradeBand": "descent"
      },
      {
        "lat": 22.812753,
        "lng": 121.193508,
        "ele": 17,
        "distanceKm": 51.45944294862217,
        "gradePct": -1.2468773121834131,
        "smoothedEle": 16.872370447948025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.812427,
        "lng": 121.193591,
        "ele": 16.5,
        "distanceKm": 51.49667743250352,
        "gradePct": -1.2876396878987637,
        "smoothedEle": 16.372798311033335,
        "gradeBand": "descent"
      },
      {
        "lat": 22.811955,
        "lng": 121.193804,
        "ele": 15.75,
        "distanceKm": 51.55352119219252,
        "gradePct": -1.2536695485615938,
        "smoothedEle": 15.753406351902486,
        "gradeBand": "descent"
      },
      {
        "lat": 22.811507000000002,
        "lng": 121.194067,
        "ele": 15.083333333333362,
        "distanceKm": 51.610162604641445,
        "gradePct": -1.102857105844577,
        "smoothedEle": 15.359034260716202,
        "gradeBand": "descent"
      },
      {
        "lat": 22.811059,
        "lng": 121.19433,
        "ele": 14.416666666666638,
        "distanceKm": 51.66680405928203,
        "gradePct": -0.8177212305992683,
        "smoothedEle": 15.138164544932225,
        "gradeBand": "descent"
      },
      {
        "lat": 22.810611,
        "lng": 121.194593,
        "ele": 13.75,
        "distanceKm": 51.723445556114285,
        "gradePct": -0.5701118437776306,
        "smoothedEle": 14.940898622167818,
        "gradeBand": "descent"
      },
      {
        "lat": 22.81002,
        "lng": 121.194927,
        "ele": 14.25,
        "distanceKm": 51.797544414906774,
        "gradePct": -0.3597374906188684,
        "smoothedEle": 14.727414819400519,
        "gradeBand": "descent"
      },
      {
        "lat": 22.80943,
        "lng": 121.195206,
        "ele": 15,
        "distanceKm": 51.86911141247582,
        "gradePct": -0.2838610950804834,
        "smoothedEle": 14.562406512105166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8089875,
        "lng": 121.19540549999999,
        "ele": 15.125,
        "distanceKm": 51.92239523077186,
        "gradePct": -0.21287029383342176,
        "smoothedEle": 14.518816013358592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.808545,
        "lng": 121.195605,
        "ele": 15.25,
        "distanceKm": 51.97567907455714,
        "gradePct": -0.12430829150563395,
        "smoothedEle": 14.54179375457548,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8081875,
        "lng": 121.19577050000001,
        "ele": 14.75,
        "distanceKm": 52.01889957295144,
        "gradePct": -0.050783837847494684,
        "smoothedEle": 14.57660966552887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.80783,
        "lng": 121.195936,
        "ele": 14.25,
        "distanceKm": 52.06212008881577,
        "gradePct": -0.0009581891165684062,
        "smoothedEle": 14.57660966552887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.807391,
        "lng": 121.196112,
        "ele": 14.25,
        "distanceKm": 52.114161577639464,
        "gradePct": 0.0024393269964528494,
        "smoothedEle": 14.530430465536108,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.807074,
        "lng": 121.196224,
        "ele": 14.25,
        "distanceKm": 52.15123278285094,
        "gradePct": -0.027716215545953875,
        "smoothedEle": 14.475819280630933,
        "gradeBand": "descent"
      },
      {
        "lat": 22.806639666666666,
        "lng": 121.19635533333333,
        "ele": 14.25,
        "distanceKm": 52.20136958827624,
        "gradePct": -0.07465423753109485,
        "smoothedEle": 14.413180057945297,
        "gradeBand": "descent"
      },
      {
        "lat": 22.806205333333335,
        "lng": 121.19648666666667,
        "ele": 14.25,
        "distanceKm": 52.251506405223324,
        "gradePct": -0.09214046729403738,
        "smoothedEle": 14.392328730940793,
        "gradeBand": "descent"
      },
      {
        "lat": 22.805771,
        "lng": 121.196618,
        "ele": 14.25,
        "distanceKm": 52.30164323369199,
        "gradePct": -0.003949301332525523,
        "smoothedEle": 14.533640059846112,
        "gradeBand": "descent"
      },
      {
        "lat": 22.805408,
        "lng": 121.196702,
        "ele": 14.25,
        "distanceKm": 52.34291517481993,
        "gradePct": 0.1346499427317179,
        "smoothedEle": 14.75737219179341,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.80505142112426,
        "lng": 121.19677001902468,
        "ele": 14.281904657608495,
        "distanceKm": 52.38317332461749,
        "gradePct": 0.2858485448081382,
        "smoothedEle": 15.00761094166152,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.804692,
        "lng": 121.196818,
        "ele": 14.5,
        "distanceKm": 52.42344066434563,
        "gradePct": 0.43864577102161556,
        "smoothedEle": 15.281292492648127,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.804217,
        "lng": 121.196815,
        "ele": 15,
        "distanceKm": 52.47625922262591,
        "gradePct": 0.6397223465654471,
        "smoothedEle": 15.741539574587113,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.803702,
        "lng": 121.196787,
        "ele": 16.125,
        "distanceKm": 52.533596567546866,
        "gradePct": 0.8442193304341514,
        "smoothedEle": 16.395295373743025,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.803187,
        "lng": 121.196759,
        "ele": 17.25,
        "distanceKm": 52.590933913010744,
        "gradePct": 1.054496437405506,
        "smoothedEle": 17.169349537505383,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.80274,
        "lng": 121.196747,
        "ele": 17.5,
        "distanceKm": 52.640653331893205,
        "gradePct": 1.203760403348295,
        "smoothedEle": 17.83879997579128,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.802261778455236,
        "lng": 121.19671743881918,
        "ele": 18.47005696932887,
        "distanceKm": 52.69391547997549,
        "gradePct": 1.3082959341423974,
        "smoothedEle": 18.559446670313765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.801783389227616,
        "lng": 121.19669121940959,
        "ele": 19.73502848466452,
        "distanceKm": 52.747177860598065,
        "gradePct": 1.3524186074341673,
        "smoothedEle": 19.283480044802545,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.801305,
        "lng": 121.196665,
        "ele": 21,
        "distanceKm": 52.80044024169628,
        "gradePct": 1.3290295154904495,
        "smoothedEle": 19.955407166379512,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8008755,
        "lng": 121.19664449999999,
        "ele": 21,
        "distanceKm": 52.84824473653693,
        "gradePct": 1.2796640928837468,
        "smoothedEle": 20.500841267587266,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.800446,
        "lng": 121.196624,
        "ele": 21,
        "distanceKm": 52.8960492316686,
        "gradePct": 1.2335304468603783,
        "smoothedEle": 21.05551316649964,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.799994333333334,
        "lng": 121.196598,
        "ele": 21.500000000000025,
        "distanceKm": 52.94634300887561,
        "gradePct": 1.157615901589455,
        "smoothedEle": 21.587363115485037,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.799542666666667,
        "lng": 121.196572,
        "ele": 21.999999999999975,
        "distanceKm": 52.996636786550546,
        "gradePct": 1.0611976621702786,
        "smoothedEle": 22.029820319900345,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.799091,
        "lng": 121.196546,
        "ele": 22.5,
        "distanceKm": 53.04693056469357,
        "gradePct": 0.9425477700769908,
        "smoothedEle": 22.370942524450427,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.798776,
        "lng": 121.196523,
        "ele": 22.75,
        "distanceKm": 53.08203627409921,
        "gradePct": 0.8461565998815196,
        "smoothedEle": 22.585235091886005,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.79842,
        "lng": 121.196459,
        "ele": 23.25,
        "distanceKm": 53.122161675093395,
        "gradePct": 0.7572007223064111,
        "smoothedEle": 22.84605019834821,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.797963046308997,
        "lng": 121.19627885982963,
        "ele": 23.354437802012132,
        "distanceKm": 53.17622408432891,
        "gradePct": 0.6969828170652128,
        "smoothedEle": 23.24420614163483,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.797510523154497,
        "lng": 121.19608542991482,
        "ele": 23.55221890100608,
        "distanceKm": 53.2303082129066,
        "gradePct": 0.6844299672591411,
        "smoothedEle": 23.627059819705202,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.797058,
        "lng": 121.195892,
        "ele": 23.75,
        "distanceKm": 53.28439236561548,
        "gradePct": 0.6921817316619245,
        "smoothedEle": 23.984913150065623,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.796628,
        "lng": 121.195672,
        "ele": 24.25,
        "distanceKm": 53.33725785117384,
        "gradePct": 0.6755034365098933,
        "smoothedEle": 24.308236582461287,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.796051,
        "lng": 121.195305,
        "ele": 24.75,
        "distanceKm": 53.411633822858775,
        "gradePct": 0.5987462127482871,
        "smoothedEle": 24.692358954793846,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.795632,
        "lng": 121.194983,
        "ele": 25.25,
        "distanceKm": 53.46873228793663,
        "gradePct": 0.5392551699970726,
        "smoothedEle": 24.959806983737778,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7952185,
        "lng": 121.194677,
        "ele": 25.500000000000018,
        "distanceKm": 53.52439233230989,
        "gradePct": 0.49850634437898655,
        "smoothedEle": 25.226564214708198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.794805,
        "lng": 121.194371,
        "ele": 25.75,
        "distanceKm": 53.58005243030079,
        "gradePct": 0.5531304980785939,
        "smoothedEle": 25.63551459372185,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.794565,
        "lng": 121.19414,
        "ele": 25.75,
        "distanceKm": 53.61573052957106,
        "gradePct": 0.5284206175752765,
        "smoothedEle": 25.768389079415737,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.794313,
        "lng": 121.193851,
        "ele": 25.75,
        "distanceKm": 53.65650875102722,
        "gradePct": 0.48651911657805713,
        "smoothedEle": 25.875590422939474,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.7940805,
        "lng": 121.193564,
        "ele": 25.75,
        "distanceKm": 53.69567436623826,
        "gradePct": 0.44648295932703064,
        "smoothedEle": 25.981895943619296,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793848,
        "lng": 121.193277,
        "ele": 25.75,
        "distanceKm": 53.73484001913685,
        "gradePct": 0.38026996731934115,
        "smoothedEle": 26.06386623999931,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793579,
        "lng": 121.192771,
        "ele": 27.25,
        "distanceKm": 53.79471715748852,
        "gradePct": 0.25017067354094813,
        "smoothedEle": 26.19047118440599,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.793509,
        "lng": 121.19239,
        "ele": 28.5,
        "distanceKm": 53.83454209112629,
        "gradePct": 0.22515039929574812,
        "smoothedEle": 26.268143350976082,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 53.83454209112629,
      "elevationGainM": 304.2732218630482,
      "elevationLossM": 304.2716116723727,
      "minimumElevationM": 6.5,
      "maximumElevationM": 89.5,
      "maximumSustainedGradePct": 4.759214734479426
    },
    "climbs": [
      {
        "startIndex": 28,
        "endIndex": 255,
        "startDistanceKm": 1.3580401133481252,
        "endDistanceKm": 12.848641845723476,
        "distanceKm": 11.490601732375351,
        "gainM": 67.94913935908075,
        "averageGradePct": 0.5913453528515449,
        "maximumGradePct": 4.759214734479426
      },
      {
        "startIndex": 328,
        "endIndex": 461,
        "startDistanceKm": 16.7483139167184,
        "endDistanceKm": 23.05731005595531,
        "distanceKm": 6.3089961392369105,
        "gainM": 67.66004077189645,
        "averageGradePct": 1.0724375047736217,
        "maximumGradePct": 3.4725254848358684
      },
      {
        "startIndex": 511,
        "endIndex": 617,
        "startDistanceKm": 25.580934098363834,
        "endDistanceKm": 30.7774153429419,
        "distanceKm": 5.196481244578067,
        "gainM": 62.83373671373797,
        "averageGradePct": 1.2091593090862742,
        "maximumGradePct": 3.602892015379551
      },
      {
        "startIndex": 897,
        "endIndex": 1079,
        "startDistanceKm": 44.57832319043768,
        "endDistanceKm": 53.83454209112629,
        "distanceKm": 9.256218900688609,
        "gainM": 34.02639721214068,
        "averageGradePct": 0.3676057964619799,
        "maximumGradePct": 1.3524186074341673
      }
    ]
  },
  "taitung-south-link": {
    "routeId": "taitung-south-link",
    "direction": "point-to-point",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T17:28:10.122Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "fd7f454b9d926c7c19c69caee4efd8500819f94990bb76e780872d5c4de6162b",
      "roadPolicyAuditSha256": "cd6873ba2bf47eb55419301ba7199c93f055278dd1be08405059c1a270edd280",
      "elevationAnalysis": {
        "smoothingWindowM": 750,
        "gradeWindowM": 300,
        "reason": "台9南迴與台9戊為長距離海岸、橋梁及壽卡爬升路線；500/200、750/300、1000/500公尺三組分析的爬升依序約767、714、687公尺，最大持續坡度依序約9.4%、8.3%、7.5%。750/300公尺能抑制橋接點短尖峰並保留壽卡長爬升，且與公路局台9戊自行車替代道路評估交叉檢核，因此採用中間視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://ws.thb.gov.tw/Download.ashx?icon=.pdf&n=5Y2X6L%2B05pS55a6J5pyU6I2J5Z%2BU6Lev5q616ZaL5pS%2B5pmu6YCa6YeN5Z6L5qmf6LuK6YCa6KGM5Y%2Bv6KGM5oCn6KmV5Lyw5aCx5ZGKLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvNDM2L3JlbGZpbGUvMTMyOTEvMjE5MjUwLzFkNTRlNmIzLTg1N2YtNDZlMi1iMGZhLTljNWMwYmU4ODNmNS5wZGY%3D",
        "referenceLabel": "公路局南迴改與台9戊自行車替代路線評估"
      },
      "reviewedAt": "2026-07-29T18:10:00.000Z",
      "reviewerNote": "初版raw為59.058公里，金崙、大鳥與大武景點點位共導入service 1728公尺，安朔東72點位另導入tertiary 2755公尺往返，均未採用。重建時逐點固定台9可騎一般道路與台9戊，並在尚武以台9南向primary way 894507282節點排除誤選的service連接道。最終raw為52.711公里，primary 46.014公里、合法unclassified 5.288公里、residential 1.409公里；tunnel、motorroad、trunk、trunk_link、service、track、path、footway、steps、construction、private、access=no與bicycle=no全為零，reversedirection=yes與oneway=yes重疊距離亦為零。live OSM五個窗口皆命中台9、台9戊或合法一般道路，台9戊窗口距離0.0公尺。750/300公尺正式分析為52.8公里、爬升716公尺、最高457公尺、最大持續坡度8.2%；路線使用舊南迴台9戊，不進入草埔隧道或自行車禁行快速路段。"
    },
    "waypoints": [
      {
        "name": "太麻里台9主線",
        "lat": 22.6169009,
        "lng": 121.0091155,
        "role": "start"
      },
      {
        "name": "金崙台9主線",
        "lat": 22.5327945,
        "lng": 120.9683296,
        "role": "via"
      },
      {
        "name": "多良台9主線",
        "lat": 22.5073767,
        "lng": 120.9592305,
        "role": "via"
      },
      {
        "name": "尚武台9南向主線",
        "lat": 22.4156051,
        "lng": 120.926796,
        "role": "via"
      },
      {
        "name": "大鳥台9主線",
        "lat": 22.3810744,
        "lng": 120.9122511,
        "role": "via"
      },
      {
        "name": "大武台9可騎一般道路",
        "lat": 22.364832,
        "lng": 120.901067,
        "role": "via"
      },
      {
        "name": "安朔台9可騎替代線",
        "lat": 22.294621,
        "lng": 120.883975,
        "role": "via"
      },
      {
        "name": "安朔台9戊東段",
        "lat": 22.269495,
        "lng": 120.862434,
        "role": "via"
      },
      {
        "name": "壽卡台9戊鋪面道路",
        "lat": 22.2458998,
        "lng": 120.8353892,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.616901,
        "lng": 121.009116,
        "ele": 21.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 21.677942099613905,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.616473,
        "lng": 121.0088585,
        "ele": 22.25,
        "distanceKm": 0.05443839542825933,
        "gradePct": -1.2357395687445327,
        "smoothedEle": 21.00522530671729,
        "gradeBand": "descent"
      },
      {
        "lat": 22.616045,
        "lng": 121.008601,
        "ele": 23,
        "distanceKm": 0.10887683079162275,
        "gradePct": -1.2352979735684693,
        "smoothedEle": 20.332988815159418,
        "gradeBand": "descent"
      },
      {
        "lat": 22.615613,
        "lng": 121.008354,
        "ele": 23.25,
        "distanceKm": 0.16319321474620854,
        "gradePct": -1.1823435706807222,
        "smoothedEle": 19.748437617274924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.615316,
        "lng": 121.008172,
        "ele": 23.25,
        "distanceKm": 0.20113580579606888,
        "gradePct": -1.128040930458294,
        "smoothedEle": 19.409047884427142,
        "gradeBand": "descent"
      },
      {
        "lat": 22.614987499999998,
        "lng": 121.007991,
        "ele": 22.125,
        "distanceKm": 0.24211671628137532,
        "gradePct": -1.066952835942122,
        "smoothedEle": 19.09467092895983,
        "gradeBand": "descent"
      },
      {
        "lat": 22.614659,
        "lng": 121.00781,
        "ele": 21,
        "distanceKm": 0.28309764688274225,
        "gradePct": -1.0065035366100974,
        "smoothedEle": 18.82855427167914,
        "gradeBand": "descent"
      },
      {
        "lat": 22.614300349089746,
        "lng": 121.00756885851166,
        "ele": 19.105252829797,
        "distanceKm": 0.33003482993523126,
        "gradePct": -0.9085961650634726,
        "smoothedEle": 18.581001326508705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.613936,
        "lng": 121.007337,
        "ele": 17,
        "distanceKm": 0.3770218285124673,
        "gradePct": -0.7787973188355366,
        "smoothedEle": 18.3899603862372,
        "gradeBand": "descent"
      },
      {
        "lat": 22.613591,
        "lng": 121.0071275,
        "ele": 15.875,
        "distanceKm": 0.42100028090425634,
        "gradePct": -0.703289175259389,
        "smoothedEle": 18.09264910456574,
        "gradeBand": "descent"
      },
      {
        "lat": 22.613246,
        "lng": 121.006918,
        "ele": 14.75,
        "distanceKm": 0.4649787596687124,
        "gradePct": -0.6480237760711406,
        "smoothedEle": 17.78839490710079,
        "gradeBand": "descent"
      },
      {
        "lat": 22.612801,
        "lng": 121.006671,
        "ele": 14.5,
        "distanceKm": 0.5205778756249351,
        "gradePct": -0.6235086787266688,
        "smoothedEle": 17.389375852016197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.612382,
        "lng": 121.006416,
        "ele": 14.625,
        "distanceKm": 0.574017816770442,
        "gradePct": -0.6138784706806995,
        "smoothedEle": 17.04588028395573,
        "gradeBand": "descent"
      },
      {
        "lat": 22.611963,
        "lng": 121.006161,
        "ele": 14.75,
        "distanceKm": 0.6274577969666458,
        "gradePct": -0.5988270142113024,
        "smoothedEle": 16.798111898447434,
        "gradeBand": "descent"
      },
      {
        "lat": 22.611663,
        "lng": 121.00598500000001,
        "ele": 15,
        "distanceKm": 0.6653942018168194,
        "gradePct": -0.5717654293619093,
        "smoothedEle": 16.72194000008871,
        "gradeBand": "descent"
      },
      {
        "lat": 22.611363,
        "lng": 121.005809,
        "ele": 15.25,
        "distanceKm": 0.7033306254297265,
        "gradePct": -0.4916857613942168,
        "smoothedEle": 16.73704549894879,
        "gradeBand": "descent"
      },
      {
        "lat": 22.610791,
        "lng": 121.005483,
        "ele": 16.75,
        "distanceKm": 0.7752000127529082,
        "gradePct": -0.23718350593968412,
        "smoothedEle": 17.003489360567837,
        "gradeBand": "descent"
      },
      {
        "lat": 22.610391999999997,
        "lng": 121.005262,
        "ele": 17.25,
        "distanceKm": 0.8250301264850202,
        "gradePct": 0.005089544118069018,
        "smoothedEle": 17.37602677998019,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.609993,
        "lng": 121.005041,
        "ele": 17.75,
        "distanceKm": 0.8748602701694844,
        "gradePct": 0.2778953172951203,
        "smoothedEle": 17.87566029654657,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.609577,
        "lng": 121.00482,
        "ele": 18.5,
        "distanceKm": 0.9263806960249005,
        "gradePct": 0.5553426215681253,
        "smoothedEle": 18.469133619069904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.609149333333335,
        "lng": 121.004611,
        "ele": 19.166666666666668,
        "distanceKm": 0.9785504812628989,
        "gradePct": 0.7769145992855127,
        "smoothedEle": 19.05792235617634,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.608721666666668,
        "lng": 121.004402,
        "ele": 19.833333333333336,
        "distanceKm": 1.030720293924892,
        "gradePct": 0.9281494866370499,
        "smoothedEle": 19.62303662276913,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.608294,
        "lng": 121.004193,
        "ele": 20.5,
        "distanceKm": 1.0828901340104593,
        "gradePct": 1.0311001779972324,
        "smoothedEle": 20.154282396857596,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.60791,
        "lng": 121.003994,
        "ele": 20.5,
        "distanceKm": 1.130223808998273,
        "gradePct": 1.060927690431222,
        "smoothedEle": 20.610885516045315,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.607498,
        "lng": 121.00379600000001,
        "ele": 21.416666666666668,
        "distanceKm": 1.180342393262906,
        "gradePct": 1.0270956115984615,
        "smoothedEle": 21.020096722066715,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.607086000000002,
        "lng": 121.003598,
        "ele": 22.333333333333332,
        "distanceKm": 1.230461002208372,
        "gradePct": 0.9578375213321283,
        "smoothedEle": 21.38869656095866,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.606674,
        "lng": 121.0034,
        "ele": 23.25,
        "distanceKm": 1.2805796358338453,
        "gradePct": 0.8779763313553592,
        "smoothedEle": 21.713831574794753,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.606270666666667,
        "lng": 121.00319166666667,
        "ele": 23.083333333333332,
        "distanceKm": 1.3302662001085996,
        "gradePct": 0.7750316638678829,
        "smoothedEle": 21.94321277566387,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.605867333333336,
        "lng": 121.00298333333333,
        "ele": 22.916666666666668,
        "distanceKm": 1.3799527913635692,
        "gradePct": 0.675944475100292,
        "smoothedEle": 22.15220484551659,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.605464,
        "lng": 121.002775,
        "ele": 22.75,
        "distanceKm": 1.4296394095990752,
        "gradePct": 0.5811457044428203,
        "smoothedEle": 22.348685235095942,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.604998,
        "lng": 121.002479,
        "ele": 23,
        "distanceKm": 1.4897081136565167,
        "gradePct": 0.49026885466104503,
        "smoothedEle": 22.55978394935693,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.604674,
        "lng": 121.00224466666667,
        "ele": 22.916666666666668,
        "distanceKm": 1.5330278735047518,
        "gradePct": 0.4376619510762603,
        "smoothedEle": 22.718334498933018,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.60435,
        "lng": 121.00201033333333,
        "ele": 22.833333333333332,
        "distanceKm": 1.5763476648031358,
        "gradePct": 0.38315917571536073,
        "smoothedEle": 22.835855002335766,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.604026,
        "lng": 121.001776,
        "ele": 22.75,
        "distanceKm": 1.6196674875496726,
        "gradePct": 0.3471629808198279,
        "smoothedEle": 22.93577208392708,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.603551,
        "lng": 121.001428,
        "ele": 22,
        "distanceKm": 1.6834316689238598,
        "gradePct": 0.3057760129569805,
        "smoothedEle": 23.083289731655842,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.603219214960486,
        "lng": 121.00098723656933,
        "ele": 22.38215595043719,
        "distanceKm": 1.741812248000445,
        "gradePct": 0.29894655894921834,
        "smoothedEle": 23.288303769516062,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.602914,
        "lng": 121.000522,
        "ele": 23,
        "distanceKm": 1.8004013761112994,
        "gradePct": 0.2864328366807242,
        "smoothedEle": 23.45821985639546,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.602688999999998,
        "lng": 121.00012166666667,
        "ele": 23.166666666666668,
        "distanceKm": 1.8485139795248855,
        "gradePct": 0.2553929703548405,
        "smoothedEle": 23.526525038416956,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.602464,
        "lng": 120.99972133333333,
        "ele": 23.333333333333332,
        "distanceKm": 1.8966266403275793,
        "gradePct": 0.2148577263836782,
        "smoothedEle": 23.52720159660254,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.602239,
        "lng": 120.999321,
        "ele": 23.5,
        "distanceKm": 1.9447393585167836,
        "gradePct": 0.16973563133979275,
        "smoothedEle": 23.502982442423217,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.602025,
        "lng": 120.99895233333334,
        "ele": 24.25,
        "distanceKm": 1.9894440935575008,
        "gradePct": 0.11691111278231026,
        "smoothedEle": 23.455136794309208,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.601811,
        "lng": 120.99858366666666,
        "ele": 25,
        "distanceKm": 2.0341488784158654,
        "gradePct": 0.052212952782252124,
        "smoothedEle": 23.41803130962994,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.601597,
        "lng": 120.998215,
        "ele": 25.75,
        "distanceKm": 2.078853713088982,
        "gradePct": 0.007434158914499277,
        "smoothedEle": 23.418031309629942,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.6013,
        "lng": 120.997722,
        "ele": 25.25,
        "distanceKm": 2.139284884832758,
        "gradePct": -0.04057187664536716,
        "smoothedEle": 23.39170691665724,
        "gradeBand": "descent"
      },
      {
        "lat": 22.601086,
        "lng": 120.997429,
        "ele": 24.5,
        "distanceKm": 2.177637565956668,
        "gradePct": -0.05440706862123078,
        "smoothedEle": 23.363713367184385,
        "gradeBand": "descent"
      },
      {
        "lat": 22.600794,
        "lng": 120.997132,
        "ele": 23.25,
        "distanceKm": 2.222177409119687,
        "gradePct": -0.05925130534209443,
        "smoothedEle": 23.3365858421255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.6003845,
        "lng": 120.99676199999999,
        "ele": 22.625,
        "distanceKm": 2.2814738434062165,
        "gradePct": -0.04909319483065032,
        "smoothedEle": 23.31638744232555,
        "gradeBand": "descent"
      },
      {
        "lat": 22.599975,
        "lng": 120.996392,
        "ele": 22,
        "distanceKm": 2.340770350076801,
        "gradePct": -0.03340494939997524,
        "smoothedEle": 23.317816461430013,
        "gradeBand": "descent"
      },
      {
        "lat": 22.599661,
        "lng": 120.996129,
        "ele": 22,
        "distanceKm": 2.384906544438277,
        "gradePct": -0.037543517361665855,
        "smoothedEle": 23.30276408666072,
        "gradeBand": "descent"
      },
      {
        "lat": 22.59924684592316,
        "lng": 120.99585277037477,
        "ele": 22,
        "distanceKm": 2.438988784254013,
        "gradePct": -0.055593004754895765,
        "smoothedEle": 23.225056886619885,
        "gradeBand": "descent"
      },
      {
        "lat": 22.598833,
        "lng": 120.995576,
        "ele": 22,
        "distanceKm": 2.4930710372988787,
        "gradePct": -0.08314910161075423,
        "smoothedEle": 23.104866121740542,
        "gradeBand": "descent"
      },
      {
        "lat": 22.59846612555602,
        "lng": 120.9952923122032,
        "ele": 22.38089124167378,
        "distanceKm": 2.5431942018158673,
        "gradePct": -0.09785558086530703,
        "smoothedEle": 23.03586005891444,
        "gradeBand": "descent"
      },
      {
        "lat": 22.59809925111204,
        "lng": 120.99500862440641,
        "ele": 22.76178248334756,
        "distanceKm": 2.5933174114302253,
        "gradePct": -0.08180277816501069,
        "smoothedEle": 23.071264532485724,
        "gradeBand": "descent"
      },
      {
        "lat": 22.59773237666806,
        "lng": 120.99472493660961,
        "ele": 23.14267372502134,
        "distanceKm": 2.643440666141339,
        "gradePct": -0.04209623804654685,
        "smoothedEle": 23.190617052593257,
        "gradeBand": "descent"
      },
      {
        "lat": 22.59736565781329,
        "lng": 120.99444101430618,
        "ele": 23.563502603226414,
        "distanceKm": 2.693563881494818,
        "gradePct": 0.022929329662799123,
        "smoothedEle": 23.3591129195645,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.596999,
        "lng": 120.994157,
        "ele": 24,
        "distanceKm": 2.743687113684915,
        "gradePct": 0.12116166638810225,
        "smoothedEle": 23.578100460433685,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.596640885447357,
        "lng": 120.99389864264623,
        "ele": 24,
        "distanceKm": 2.79153196357357,
        "gradePct": 0.23087270725849046,
        "smoothedEle": 23.800904634454554,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.596282770894714,
        "lng": 120.99364028529246,
        "ele": 24,
        "distanceKm": 2.839376851708742,
        "gradePct": 0.33206272551600946,
        "smoothedEle": 24.037303695764308,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.595924,
        "lng": 120.993383,
        "ele": 24,
        "distanceKm": 2.887221692076522,
        "gradePct": 0.4067794598714966,
        "smoothedEle": 24.287297207489186,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.595532,
        "lng": 120.993198,
        "ele": 24.5,
        "distanceKm": 2.9347680067120225,
        "gradePct": 0.45268608503888813,
        "smoothedEle": 24.52802413960663,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.595185,
        "lng": 120.993161,
        "ele": 24.75,
        "distanceKm": 2.9735392136412333,
        "gradePct": 0.4746971729397584,
        "smoothedEle": 24.71588884924995,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.594662,
        "lng": 120.993192,
        "ele": 25,
        "distanceKm": 3.0317812539215225,
        "gradePct": 0.48812651592599254,
        "smoothedEle": 24.990463511317955,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.59422475,
        "lng": 120.99325725,
        "ele": 25.21875,
        "distanceKm": 3.080860581816929,
        "gradePct": 0.4854876202156317,
        "smoothedEle": 25.207672942741414,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.593787499999998,
        "lng": 120.99332249999999,
        "ele": 25.4375,
        "distanceKm": 3.12993991261562,
        "gradePct": 0.47496119277043436,
        "smoothedEle": 25.415559857224963,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.59335025,
        "lng": 120.99338775,
        "ele": 25.65625,
        "distanceKm": 3.1790192463175595,
        "gradePct": 0.46416742800450594,
        "smoothedEle": 25.636940988804117,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.592913,
        "lng": 120.99345299999999,
        "ele": 25.875,
        "distanceKm": 3.228098582923087,
        "gradePct": 0.4590418735933819,
        "smoothedEle": 25.87138247600291,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.59247575,
        "lng": 120.99351825,
        "ele": 26.09375,
        "distanceKm": 3.277177922432165,
        "gradePct": 0.46024071149971996,
        "smoothedEle": 26.113765211723024,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.5920385,
        "lng": 120.9935835,
        "ele": 26.3125,
        "distanceKm": 3.326257264844159,
        "gradePct": 0.45080624867271885,
        "smoothedEle": 26.316840116180256,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.59160125,
        "lng": 120.99364874999999,
        "ele": 26.53125,
        "distanceKm": 3.375336610159609,
        "gradePct": 0.4201413729617078,
        "smoothedEle": 26.44364972719191,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.591164,
        "lng": 120.993714,
        "ele": 26.75,
        "distanceKm": 3.4244159583784772,
        "gradePct": 0.36269271018625343,
        "smoothedEle": 26.480239995524656,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.590715,
        "lng": 120.993767,
        "ele": 27,
        "distanceKm": 3.4746381705433946,
        "gradePct": 0.27034069956370405,
        "smoothedEle": 26.42820145995748,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.590397,
        "lng": 120.993819,
        "ele": 27.25,
        "distanceKm": 3.5103989269944935,
        "gradePct": 0.18742859927016428,
        "smoothedEle": 26.34912080545298,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.590087,
        "lng": 120.993879,
        "ele": 27.5,
        "distanceKm": 3.5454154524160932,
        "gradePct": 0.09821158926549842,
        "smoothedEle": 26.25153816245494,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.589646,
        "lng": 120.99399700000001,
        "ele": 27.625,
        "distanceKm": 3.5959267169541023,
        "gradePct": -0.04076538949172935,
        "smoothedEle": 26.069045666509606,
        "gradeBand": "descent"
      },
      {
        "lat": 22.589205,
        "lng": 120.994115,
        "ele": 27.75,
        "distanceKm": 3.64643799079544,
        "gradePct": -0.18876536618254994,
        "smoothedEle": 25.80268631886679,
        "gradeBand": "descent"
      },
      {
        "lat": 22.58877455372404,
        "lng": 120.99422416622092,
        "ele": 27.366069061523746,
        "distanceKm": 3.695596140917186,
        "gradePct": -0.33755262676911024,
        "smoothedEle": 25.44609599340685,
        "gradeBand": "descent"
      },
      {
        "lat": 22.58834668724135,
        "lng": 120.99434546583791,
        "ele": 26.23800916609167,
        "distanceKm": 3.7447756095036873,
        "gradePct": -0.48642227638377644,
        "smoothedEle": 24.999877193425434,
        "gradeBand": "descent"
      },
      {
        "lat": 22.58791882075866,
        "lng": 120.9944667654549,
        "ele": 25.10994927065959,
        "distanceKm": 3.793955087887319,
        "gradePct": -0.6458404530134941,
        "smoothedEle": 24.44796303846739,
        "gradeBand": "descent"
      },
      {
        "lat": 22.587490954275967,
        "lng": 120.9945880650719,
        "ele": 23.98188937522751,
        "distanceKm": 3.843134576067552,
        "gradePct": -0.8251680797291888,
        "smoothedEle": 23.782390177629065,
        "gradeBand": "descent"
      },
      {
        "lat": 22.587063,
        "lng": 120.994709,
        "ele": 23.5,
        "distanceKm": 3.8923140523593225,
        "gradePct": -1.0156066777927706,
        "smoothedEle": 23.035277853956583,
        "gradeBand": "descent"
      },
      {
        "lat": 22.586705,
        "lng": 120.994818,
        "ele": 23.25,
        "distanceKm": 3.9336649161810553,
        "gradePct": -1.168918476286415,
        "smoothedEle": 22.36328670115512,
        "gradeBand": "descent"
      },
      {
        "lat": 22.586291449466703,
        "lng": 120.9949195549795,
        "ele": 22.407709408449815,
        "distanceKm": 3.9808168837102285,
        "gradePct": -1.3319589612025082,
        "smoothedEle": 21.55742697104783,
        "gradeBand": "descent"
      },
      {
        "lat": 22.585877724733354,
        "lng": 120.99502027748974,
        "ele": 21.203854704224913,
        "distanceKm": 4.027968931701061,
        "gradePct": -1.4799213411634644,
        "smoothedEle": 20.712604764828377,
        "gradeBand": "descent"
      },
      {
        "lat": 22.585464,
        "lng": 120.995121,
        "ele": 20,
        "distanceKm": 4.075120986504455,
        "gradePct": -1.6085559273545345,
        "smoothedEle": 19.833659985977192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.584902,
        "lng": 120.995094,
        "ele": 18.5,
        "distanceKm": 4.137674072458423,
        "gradePct": -1.7335366902626423,
        "smoothedEle": 18.655680083096012,
        "gradeBand": "descent"
      },
      {
        "lat": 22.584563197219513,
        "lng": 120.99496461454557,
        "ele": 17.192095285342763,
        "distanceKm": 4.177620629891045,
        "gradePct": -1.7781354175251194,
        "smoothedEle": 17.924087418846387,
        "gradeBand": "descent"
      },
      {
        "lat": 22.584231,
        "lng": 120.994816,
        "ele": 16,
        "distanceKm": 4.217586526469498,
        "gradePct": -1.8092894087865945,
        "smoothedEle": 17.196707711316243,
        "gradeBand": "descent"
      },
      {
        "lat": 22.583850249999998,
        "lng": 120.9946215,
        "ele": 15.499999999999998,
        "distanceKm": 4.264397067659988,
        "gradePct": -1.8381658130474734,
        "smoothedEle": 16.32355554231466,
        "gradeBand": "descent"
      },
      {
        "lat": 22.5834695,
        "lng": 120.994427,
        "ele": 14.999999999999995,
        "distanceKm": 4.31120763239491,
        "gradePct": -1.8686926646067086,
        "smoothedEle": 15.40683860182586,
        "gradeBand": "descent"
      },
      {
        "lat": 22.58308875,
        "lng": 120.99423250000001,
        "ele": 14.500000000000002,
        "distanceKm": 4.358018220674922,
        "gradePct": -1.897662396910534,
        "smoothedEle": 14.459479404893072,
        "gradeBand": "descent"
      },
      {
        "lat": 22.582708,
        "lng": 120.994038,
        "ele": 14,
        "distanceKm": 4.404828832500681,
        "gradePct": -1.9216990277218298,
        "smoothedEle": 13.509114156075277,
        "gradeBand": "descent"
      },
      {
        "lat": 22.5823066172605,
        "lng": 120.99383944989341,
        "ele": 12.938197362822947,
        "distanceKm": 4.453895582747968,
        "gradePct": -1.9302031436877045,
        "smoothedEle": 12.56798527863375,
        "gradeBand": "descent"
      },
      {
        "lat": 22.581905308630247,
        "lng": 120.99364072494672,
        "ele": 12.094098681411474,
        "distanceKm": 4.502962323668426,
        "gradePct": -1.9130823520295448,
        "smoothedEle": 11.723621288842418,
        "gradeBand": "descent"
      },
      {
        "lat": 22.581504,
        "lng": 120.993442,
        "ele": 11.25,
        "distanceKm": 4.552029089302822,
        "gradePct": -1.8558054537805593,
        "smoothedEle": 10.986837798294623,
        "gradeBand": "descent"
      },
      {
        "lat": 22.581139,
        "lng": 120.993243,
        "ele": 10.200000000000008,
        "distanceKm": 4.59746786289608,
        "gradePct": -1.7558997292628065,
        "smoothedEle": 10.408212849261185,
        "gradeBand": "descent"
      },
      {
        "lat": 22.580773999999998,
        "lng": 120.993044,
        "ele": 9.149999999999995,
        "distanceKm": 4.642906660829327,
        "gradePct": -1.6230908241688424,
        "smoothedEle": 9.896036782549688,
        "gradeBand": "descent"
      },
      {
        "lat": 22.580409,
        "lng": 120.992845,
        "ele": 8.100000000000005,
        "distanceKm": 4.688345483100225,
        "gradePct": -1.468581527578703,
        "smoothedEle": 9.438020240000506,
        "gradeBand": "descent"
      },
      {
        "lat": 22.580043999999997,
        "lng": 120.992646,
        "ele": 7.049999999999992,
        "distanceKm": 4.73378432971047,
        "gradePct": -1.3056041768852285,
        "smoothedEle": 9.036918306828683,
        "gradeBand": "descent"
      },
      {
        "lat": 22.579679,
        "lng": 120.992447,
        "ele": 6,
        "distanceKm": 4.779223200657722,
        "gradePct": -1.1425554902499726,
        "smoothedEle": 8.704469022285501,
        "gradeBand": "descent"
      },
      {
        "lat": 22.5792465,
        "lng": 120.9922285,
        "ele": 6.3125,
        "distanceKm": 4.832290162928919,
        "gradePct": -0.9493808729252937,
        "smoothedEle": 8.435093666058387,
        "gradeBand": "descent"
      },
      {
        "lat": 22.578814,
        "lng": 120.99201,
        "ele": 6.625,
        "distanceKm": 4.885357154969249,
        "gradePct": -0.7491910965800235,
        "smoothedEle": 8.314859341499586,
        "gradeBand": "descent"
      },
      {
        "lat": 22.5783815,
        "lng": 120.9917915,
        "ele": 6.9375,
        "distanceKm": 4.938424176777991,
        "gradePct": -0.5454538563583211,
        "smoothedEle": 8.31020078093985,
        "gradeBand": "descent"
      },
      {
        "lat": 22.577949,
        "lng": 120.991573,
        "ele": 7.25,
        "distanceKm": 4.991491228355199,
        "gradePct": -0.3171551801824691,
        "smoothedEle": 8.45878628988366,
        "gradeBand": "descent"
      },
      {
        "lat": 22.577391,
        "lng": 120.991271,
        "ele": 7.75,
        "distanceKm": 5.060854496698735,
        "gradePct": 0.034054217109691975,
        "smoothedEle": 8.941024592317147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.576964896094264,
        "lng": 120.9910498124117,
        "ele": 8.512715821722502,
        "distanceKm": 5.113396622985517,
        "gradePct": 0.31892811686614564,
        "smoothedEle": 9.48778427989148,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.57653876997928,
        "lng": 120.99082867525011,
        "ele": 9.290334525848555,
        "distanceKm": 5.1659387690425325,
        "gradePct": 0.6004513774073977,
        "smoothedEle": 10.160209871975264,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.576112,
        "lng": 120.990609,
        "ele": 10.5,
        "distanceKm": 5.2184809104997125,
        "gradePct": 0.8567264816149078,
        "smoothedEle": 10.88213097249222,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.5757585,
        "lng": 120.99040550000001,
        "ele": 11.125,
        "distanceKm": 5.262996587854026,
        "gradePct": 1.06448196969055,
        "smoothedEle": 11.572448405901012,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.575405,
        "lng": 120.990202,
        "ele": 11.75,
        "distanceKm": 5.307512290365749,
        "gradePct": 1.2712235042023627,
        "smoothedEle": 12.383840967793988,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.575025106117334,
        "lng": 120.98990878914884,
        "ele": 12.993109380725528,
        "distanceKm": 5.3593847249706235,
        "gradePct": 1.517600468660361,
        "smoothedEle": 13.483607618454604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.574652,
        "lng": 120.989605,
        "ele": 14.5,
        "distanceKm": 5.411289777372725,
        "gradePct": 1.7602948813745904,
        "smoothedEle": 14.746744835090299,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.57434,
        "lng": 120.989329,
        "ele": 15.25,
        "distanceKm": 5.456085548312222,
        "gradePct": 1.979393918654182,
        "smoothedEle": 15.972291758010122,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.574071500000002,
        "lng": 120.98904350000001,
        "ele": 15.749999999999995,
        "distanceKm": 5.4979266563744815,
        "gradePct": 2.2016034593222966,
        "smoothedEle": 17.204528998262067,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.573803,
        "lng": 120.988758,
        "ele": 16.25,
        "distanceKm": 5.539767804448792,
        "gradePct": 2.4377043204633724,
        "smoothedEle": 18.525345930965617,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.57351,
        "lng": 120.988405,
        "ele": 16.75,
        "distanceKm": 5.588503228861158,
        "gradePct": 2.713838813544236,
        "smoothedEle": 20.178877172394706,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.573268499999998,
        "lng": 120.9880695,
        "ele": 19.000000000000025,
        "distanceKm": 5.63218129533246,
        "gradePct": 2.945364525265011,
        "smoothedEle": 21.74295123200989,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.573027,
        "lng": 120.987734,
        "ele": 21.25,
        "distanceKm": 5.6758594094070824,
        "gradePct": 3.1765049613640843,
        "smoothedEle": 23.41404276138427,
        "gradeBand": "hard"
      },
      {
        "lat": 22.572717,
        "lng": 120.987225,
        "ele": 24.5,
        "distanceKm": 5.738465909940653,
        "gradePct": 3.4864921019834663,
        "smoothedEle": 25.949720470262406,
        "gradeBand": "hard"
      },
      {
        "lat": 22.572588,
        "lng": 120.986876,
        "ele": 26.5,
        "distanceKm": 5.777064428841402,
        "gradePct": 3.632004014337454,
        "smoothedEle": 27.48614015966732,
        "gradeBand": "hard"
      },
      {
        "lat": 22.572497,
        "lng": 120.986395,
        "ele": 29.25,
        "distanceKm": 5.827477949910822,
        "gradePct": 3.795318597045563,
        "smoothedEle": 29.52334276970011,
        "gradeBand": "hard"
      },
      {
        "lat": 22.57244394717984,
        "lng": 120.98602420570681,
        "ele": 31.232017252252483,
        "distanceKm": 5.866004305470562,
        "gradePct": 3.9252638396963553,
        "smoothedEle": 31.191308709018312,
        "gradeBand": "hard"
      },
      {
        "lat": 22.5724,
        "lng": 120.985652,
        "ele": 33.25,
        "distanceKm": 5.904532426366385,
        "gradePct": 4.0627291642945,
        "smoothedEle": 32.94105646573593,
        "gradeBand": "hard"
      },
      {
        "lat": 22.572313,
        "lng": 120.9851,
        "ele": 36.5,
        "distanceKm": 5.962029820266306,
        "gradePct": 4.308866510808469,
        "smoothedEle": 35.8115326983634,
        "gradeBand": "hard"
      },
      {
        "lat": 22.572251,
        "lng": 120.984758,
        "ele": 38.25,
        "distanceKm": 5.997815732907439,
        "gradePct": 4.512518327338584,
        "smoothedEle": 37.840868978723535,
        "gradeBand": "hard"
      },
      {
        "lat": 22.572053,
        "lng": 120.984279,
        "ele": 41.25,
        "distanceKm": 6.051701146445131,
        "gradePct": 4.788180572163289,
        "smoothedEle": 40.84109271130424,
        "gradeBand": "hard"
      },
      {
        "lat": 22.571819,
        "lng": 120.983963,
        "ele": 43.5,
        "distanceKm": 6.093291624308904,
        "gradePct": 4.933276642915891,
        "smoothedEle": 42.94170855418068,
        "gradeBand": "hard"
      },
      {
        "lat": 22.571467,
        "lng": 120.983534,
        "ele": 43.5,
        "distanceKm": 6.152217662035106,
        "gradePct": 5.010226752873712,
        "smoothedEle": 45.62510791481815,
        "gradeBand": "hard"
      },
      {
        "lat": 22.571180499999997,
        "lng": 120.983195,
        "ele": 46.5,
        "distanceKm": 6.199403196578094,
        "gradePct": 5.049453902640852,
        "smoothedEle": 47.85647511526174,
        "gradeBand": "hard"
      },
      {
        "lat": 22.570894,
        "lng": 120.982856,
        "ele": 49.5,
        "distanceKm": 6.246588784489445,
        "gradePct": 5.087555089055655,
        "smoothedEle": 50.303326049460956,
        "gradeBand": "hard"
      },
      {
        "lat": 22.570613,
        "lng": 120.982494,
        "ele": 51.5,
        "distanceKm": 6.295146732961772,
        "gradePct": 5.0322962408148255,
        "smoothedEle": 52.78640489157681,
        "gradeBand": "hard"
      },
      {
        "lat": 22.57023,
        "lng": 120.982231,
        "ele": 59.75,
        "distanceKm": 6.345574436951673,
        "gradePct": 4.882243283090486,
        "smoothedEle": 55.14670057564294,
        "gradeBand": "hard"
      },
      {
        "lat": 22.569844,
        "lng": 120.982118,
        "ele": 62,
        "distanceKm": 6.390036339062935,
        "gradePct": 4.7676939110635175,
        "smoothedEle": 57.08037515890934,
        "gradeBand": "hard"
      },
      {
        "lat": 22.569331,
        "lng": 120.982051,
        "ele": 60,
        "distanceKm": 6.447492757811652,
        "gradePct": 4.6436425015196034,
        "smoothedEle": 59.340870689801875,
        "gradeBand": "hard"
      },
      {
        "lat": 22.568955,
        "lng": 120.981932,
        "ele": 58.75,
        "distanceKm": 6.491051018999656,
        "gradePct": 4.47281099858698,
        "smoothedEle": 60.879940134474104,
        "gradeBand": "hard"
      },
      {
        "lat": 22.56861941642433,
        "lng": 120.98172409256364,
        "ele": 60.93193853827278,
        "distanceKm": 6.534041238837136,
        "gradePct": 4.24425772608419,
        "smoothedEle": 62.385435006703084,
        "gradeBand": "hard"
      },
      {
        "lat": 22.568292,
        "lng": 120.981501,
        "ele": 66.75,
        "distanceKm": 6.5770553447613205,
        "gradePct": 3.971159075924504,
        "smoothedEle": 63.77475359398343,
        "gradeBand": "hard"
      },
      {
        "lat": 22.567992,
        "lng": 120.981324,
        "ele": 71.25,
        "distanceKm": 6.615043496027831,
        "gradePct": 3.715542435398404,
        "smoothedEle": 64.86431084573725,
        "gradeBand": "hard"
      },
      {
        "lat": 22.567665246306998,
        "lng": 120.98117531051281,
        "ele": 70.95342615715899,
        "distanceKm": 6.6544543152205,
        "gradePct": 3.472673330792903,
        "smoothedEle": 65.95091175858208,
        "gradeBand": "hard"
      },
      {
        "lat": 22.56733,
        "lng": 120.98105,
        "ele": 70.75,
        "distanceKm": 6.693890196247188,
        "gradePct": 3.31020792026958,
        "smoothedEle": 67.16262039441878,
        "gradeBand": "hard"
      },
      {
        "lat": 22.566900999999998,
        "lng": 120.98090716666667,
        "ele": 70.5,
        "distanceKm": 6.743796566576524,
        "gradePct": 3.1220424000238713,
        "smoothedEle": 68.5615794327143,
        "gradeBand": "hard"
      },
      {
        "lat": 22.566471999999997,
        "lng": 120.98076433333333,
        "ele": 70.25,
        "distanceKm": 6.793702950317739,
        "gradePct": 3.0351053407714534,
        "smoothedEle": 70.07812539579145,
        "gradeBand": "hard"
      },
      {
        "lat": 22.566042999999997,
        "lng": 120.9806215,
        "ele": 70,
        "distanceKm": 6.843609347469772,
        "gradePct": 3.088131121174685,
        "smoothedEle": 71.95887004115873,
        "gradeBand": "hard"
      },
      {
        "lat": 22.565614,
        "lng": 120.98047866666667,
        "ele": 69.75,
        "distanceKm": 6.893515758032471,
        "gradePct": 3.2920522367919007,
        "smoothedEle": 74.12301968711442,
        "gradeBand": "hard"
      },
      {
        "lat": 22.565185,
        "lng": 120.98033583333333,
        "ele": 69.5,
        "distanceKm": 6.943422182006817,
        "gradePct": 3.5476865728556266,
        "smoothedEle": 76.28980307197043,
        "gradeBand": "hard"
      },
      {
        "lat": 22.564756,
        "lng": 120.980193,
        "ele": 69.25,
        "distanceKm": 6.993328619391369,
        "gradePct": 3.7068790089255046,
        "smoothedEle": 78.26600238572593,
        "gradeBand": "hard"
      },
      {
        "lat": 22.564393,
        "lng": 120.980033,
        "ele": 73,
        "distanceKm": 7.03690794781326,
        "gradePct": 3.9076195935439295,
        "smoothedEle": 80.09133870687737,
        "gradeBand": "hard"
      },
      {
        "lat": 22.564098,
        "lng": 120.979703,
        "ele": 80.25,
        "distanceKm": 7.084069676459399,
        "gradePct": 4.222491001644431,
        "smoothedEle": 82.45286425559338,
        "gradeBand": "hard"
      },
      {
        "lat": 22.563921,
        "lng": 120.979128,
        "ele": 84.75,
        "distanceKm": 7.146306509183722,
        "gradePct": 4.722066783985808,
        "smoothedEle": 86.24203054918662,
        "gradeBand": "hard"
      },
      {
        "lat": 22.563772,
        "lng": 120.978737,
        "ele": 87.75,
        "distanceKm": 7.1897398966549355,
        "gradePct": 5.081132335846389,
        "smoothedEle": 89.20267963219534,
        "gradeBand": "hard"
      },
      {
        "lat": 22.563546,
        "lng": 120.978471,
        "ele": 90.25,
        "distanceKm": 7.226855470848086,
        "gradePct": 5.404541911495806,
        "smoothedEle": 91.78415317775524,
        "gradeBand": "hard"
      },
      {
        "lat": 22.563221,
        "lng": 120.978303,
        "ele": 93.25,
        "distanceKm": 7.266900150727004,
        "gradePct": 5.782777763487557,
        "smoothedEle": 94.56781894657941,
        "gradeBand": "hard"
      },
      {
        "lat": 22.562838485913755,
        "lng": 120.97826202028654,
        "ele": 96.13908118662629,
        "distanceKm": 7.309641480233226,
        "gradePct": 6.198956121849182,
        "smoothedEle": 97.54614097306909,
        "gradeBand": "steep"
      },
      {
        "lat": 22.562452,
        "lng": 120.978273,
        "ele": 99.25,
        "distanceKm": 7.352631598940522,
        "gradePct": 6.555793079177172,
        "smoothedEle": 100.54604709713631,
        "gradeBand": "steep"
      },
      {
        "lat": 22.561983,
        "lng": 120.978231,
        "ele": 103.5,
        "distanceKm": 7.404960116196243,
        "gradePct": 6.8006370948954205,
        "smoothedEle": 104.12664858786572,
        "gradeBand": "steep"
      },
      {
        "lat": 22.561528,
        "lng": 120.978088,
        "ele": 111.75,
        "distanceKm": 7.457641678078564,
        "gradePct": 6.768183230394009,
        "smoothedEle": 107.3192452188142,
        "gradeBand": "steep"
      },
      {
        "lat": 22.561119,
        "lng": 120.977928,
        "ele": 118.75,
        "distanceKm": 7.505997166325855,
        "gradePct": 6.529560861655363,
        "smoothedEle": 109.9220927121313,
        "gradeBand": "steep"
      },
      {
        "lat": 22.560645796032713,
        "lng": 120.97782316015265,
        "ele": 122.32391034831066,
        "distanceKm": 7.559705134660209,
        "gradePct": 6.25687484335323,
        "smoothedEle": 112.83828914922692,
        "gradeBand": "steep"
      },
      {
        "lat": 22.560169,
        "lng": 120.977737,
        "ele": 122,
        "distanceKm": 7.613455660029666,
        "gradePct": 6.033286105936093,
        "smoothedEle": 115.91215769363824,
        "gradeBand": "steep"
      },
      {
        "lat": 22.55976593013607,
        "lng": 120.97762581118918,
        "ele": 121.9232148366442,
        "distanceKm": 7.659706477443022,
        "gradePct": 5.738764656885331,
        "smoothedEle": 118.2464426980561,
        "gradeBand": "hard"
      },
      {
        "lat": 22.55936528675738,
        "lng": 120.97750420745946,
        "ele": 121.78214322442948,
        "distanceKm": 7.70597300229378,
        "gradePct": 5.377932824069322,
        "smoothedEle": 120.32182976451502,
        "gradeBand": "hard"
      },
      {
        "lat": 22.55896464337869,
        "lng": 120.97738260372972,
        "ele": 121.64107161221473,
        "distanceKm": 7.752239536935016,
        "gradePct": 5.075158164063778,
        "smoothedEle": 122.21734032059709,
        "gradeBand": "hard"
      },
      {
        "lat": 22.558564,
        "lng": 120.977261,
        "ele": 121.5,
        "distanceKm": 7.7985060813658045,
        "gradePct": 4.808291627850767,
        "smoothedEle": 123.94374238966812,
        "gradeBand": "hard"
      },
      {
        "lat": 22.558159,
        "lng": 120.97711,
        "ele": 121.5,
        "distanceKm": 7.846134768853557,
        "gradePct": 4.420521541684136,
        "smoothedEle": 125.3630198622408,
        "gradeBand": "hard"
      },
      {
        "lat": 22.557886,
        "lng": 120.97684,
        "ele": 123.5,
        "distanceKm": 7.887247003241775,
        "gradePct": 3.957214302144666,
        "smoothedEle": 126.28498798125925,
        "gradeBand": "hard"
      },
      {
        "lat": 22.557705,
        "lng": 120.976287,
        "ele": 132.5,
        "distanceKm": 7.947494521614613,
        "gradePct": 3.1772425576332135,
        "smoothedEle": 127.16183131017544,
        "gradeBand": "hard"
      },
      {
        "lat": 22.557527,
        "lng": 120.975919,
        "ele": 131.25,
        "distanceKm": 7.990153340397829,
        "gradePct": 2.684729717054667,
        "smoothedEle": 127.66639307279338,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.557125,
        "lng": 120.975652,
        "ele": 129.5,
        "distanceKm": 8.042592459439335,
        "gradePct": 2.11194664128893,
        "smoothedEle": 128.15794560304974,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.556648,
        "lng": 120.975519,
        "ele": 129.75,
        "distanceKm": 8.09736267670535,
        "gradePct": 1.5839404145294518,
        "smoothedEle": 128.65289832950666,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.556256333333334,
        "lng": 120.97541833333334,
        "ele": 131.08333333333331,
        "distanceKm": 8.142124108271553,
        "gradePct": 1.2525983026626486,
        "smoothedEle": 129.00130191958306,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.555864666666665,
        "lng": 120.97531766666667,
        "ele": 132.41666666666669,
        "distanceKm": 8.18688554661672,
        "gradePct": 0.9968041166578802,
        "smoothedEle": 129.26729443551432,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.555473,
        "lng": 120.975217,
        "ele": 133.75,
        "distanceKm": 8.231646991739987,
        "gradePct": 0.839118106675879,
        "smoothedEle": 129.44854043143536,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.554876,
        "lng": 120.975086,
        "ele": 132,
        "distanceKm": 8.299379778175108,
        "gradePct": 0.5617873685072494,
        "smoothedEle": 129.43824173487008,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.554553,
        "lng": 120.975005,
        "ele": 131,
        "distanceKm": 8.336246394129645,
        "gradePct": 0.2922607740060237,
        "smoothedEle": 128.97524133343225,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.554057,
        "lng": 120.97487,
        "ele": 129,
        "distanceKm": 8.393114800494587,
        "gradePct": -0.1216855359446069,
        "smoothedEle": 128.24945410852976,
        "gradeBand": "descent"
      },
      {
        "lat": 22.553692,
        "lng": 120.974743,
        "ele": 128.75,
        "distanceKm": 8.435744915989895,
        "gradePct": -0.4045854427035768,
        "smoothedEle": 127.73789272258607,
        "gradeBand": "descent"
      },
      {
        "lat": 22.553174,
        "lng": 120.974579,
        "ele": 127.5,
        "distanceKm": 8.495755595497965,
        "gradePct": -0.8520520800114876,
        "smoothedEle": 126.74705439163755,
        "gradeBand": "descent"
      },
      {
        "lat": 22.552611,
        "lng": 120.974434,
        "ele": 125.5,
        "distanceKm": 8.56010491214457,
        "gradePct": -1.3572370421965745,
        "smoothedEle": 125.37250230897625,
        "gradeBand": "descent"
      },
      {
        "lat": 22.552312,
        "lng": 120.97431,
        "ele": 124,
        "distanceKm": 8.595707359932362,
        "gradePct": -1.6269412503524034,
        "smoothedEle": 124.55797637101546,
        "gradeBand": "descent"
      },
      {
        "lat": 22.551975,
        "lng": 120.974024,
        "ele": 124.25,
        "distanceKm": 8.64331827928954,
        "gradePct": -1.783540055536506,
        "smoothedEle": 123.53436571158647,
        "gradeBand": "descent"
      },
      {
        "lat": 22.551748,
        "lng": 120.973754,
        "ele": 123.25,
        "distanceKm": 8.680813672709341,
        "gradePct": -1.8439585703513715,
        "smoothedEle": 122.87457244688035,
        "gradeBand": "descent"
      },
      {
        "lat": 22.551388,
        "lng": 120.973448,
        "ele": 122,
        "distanceKm": 8.731704549951669,
        "gradePct": -1.8458811390360768,
        "smoothedEle": 122.24873369793654,
        "gradeBand": "descent"
      },
      {
        "lat": 22.550889,
        "lng": 120.973322,
        "ele": 120.5,
        "distanceKm": 8.788679631419551,
        "gradePct": -1.555921697889963,
        "smoothedEle": 122.19612077687741,
        "gradeBand": "descent"
      },
      {
        "lat": 22.550322,
        "lng": 120.973383,
        "ele": 116.75,
        "distanceKm": 8.852037681299226,
        "gradePct": -1.0777707982772544,
        "smoothedEle": 122.31151231844717,
        "gradeBand": "descent"
      },
      {
        "lat": 22.549885,
        "lng": 120.973353,
        "ele": 115.5,
        "distanceKm": 8.900727496924429,
        "gradePct": -0.8461878139123777,
        "smoothedEle": 121.91148252578576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.549562,
        "lng": 120.973234,
        "ele": 115,
        "distanceKm": 8.938665634018932,
        "gradePct": -0.7528170554761462,
        "smoothedEle": 121.37594406271069,
        "gradeBand": "descent"
      },
      {
        "lat": 22.549238,
        "lng": 120.973017,
        "ele": 117.25,
        "distanceKm": 8.98102793043355,
        "gradePct": -0.7675561034727595,
        "smoothedEle": 120.56926926763417,
        "gradeBand": "descent"
      },
      {
        "lat": 22.548956,
        "lng": 120.972775,
        "ele": 118,
        "distanceKm": 9.021039002170278,
        "gradePct": -0.9312438248165883,
        "smoothedEle": 119.58616351293601,
        "gradeBand": "descent"
      },
      {
        "lat": 22.548738,
        "lng": 120.972527,
        "ele": 119.75,
        "distanceKm": 9.056199132565405,
        "gradePct": -1.1787545977547487,
        "smoothedEle": 118.689850691005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.548364,
        "lng": 120.971975,
        "ele": 127.25,
        "distanceKm": 9.126505241814906,
        "gradePct": -1.7214958396562194,
        "smoothedEle": 117.10052356470679,
        "gradeBand": "descent"
      },
      {
        "lat": 22.548025,
        "lng": 120.97173,
        "ele": 132.5,
        "distanceKm": 9.171825908073595,
        "gradePct": -1.9956563703822878,
        "smoothedEle": 116.16196546589701,
        "gradeBand": "descent"
      },
      {
        "lat": 22.547626,
        "lng": 120.971754,
        "ele": 127.5,
        "distanceKm": 9.2162611520809,
        "gradePct": -2.1424958843760367,
        "smoothedEle": 115.26472027338798,
        "gradeBand": "descent"
      },
      {
        "lat": 22.547136,
        "lng": 120.972088,
        "ele": 116.5,
        "distanceKm": 9.28064432458686,
        "gradePct": -2.190694057546769,
        "smoothedEle": 114.00449182570866,
        "gradeBand": "descent"
      },
      {
        "lat": 22.546804,
        "lng": 120.972267,
        "ele": 112,
        "distanceKm": 9.321884676934515,
        "gradePct": -2.160313098131861,
        "smoothedEle": 113.08366601821949,
        "gradeBand": "descent"
      },
      {
        "lat": 22.546464,
        "lng": 120.972318,
        "ele": 107,
        "distanceKm": 9.360052069411514,
        "gradePct": -2.1893509864148935,
        "smoothedEle": 112.03469894175754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.546153,
        "lng": 120.972252,
        "ele": 104.25,
        "distanceKm": 9.395291716122204,
        "gradePct": -2.2886095805131053,
        "smoothedEle": 110.94030211135872,
        "gradeBand": "descent"
      },
      {
        "lat": 22.545845,
        "lng": 120.972046,
        "ele": 105,
        "distanceKm": 9.435546989306427,
        "gradePct": -2.4393317667357617,
        "smoothedEle": 109.59528023758124,
        "gradeBand": "descent"
      },
      {
        "lat": 22.545392,
        "lng": 120.97168,
        "ele": 106,
        "distanceKm": 9.498396522374982,
        "gradePct": -2.765141957464141,
        "smoothedEle": 107.33002052004092,
        "gradeBand": "descent"
      },
      {
        "lat": 22.545037,
        "lng": 120.971517,
        "ele": 104.75,
        "distanceKm": 9.541273469691738,
        "gradePct": -3.079289085047537,
        "smoothedEle": 105.53726493228002,
        "gradeBand": "descent"
      },
      {
        "lat": 22.544630390853353,
        "lng": 120.97144218729838,
        "ele": 102.84798216225265,
        "distanceKm": 9.587134557304982,
        "gradePct": -3.5214378300882427,
        "smoothedEle": 103.2952626535148,
        "gradeBand": "descent"
      },
      {
        "lat": 22.544223781706705,
        "lng": 120.97136737459677,
        "ele": 100.94596432450521,
        "distanceKm": 9.63299564870993,
        "gradePct": -3.880784493401531,
        "smoothedEle": 101.13594602425758,
        "gradeBand": "descent"
      },
      {
        "lat": 22.543817341972765,
        "lng": 120.97129149510029,
        "ele": 98.40681381121564,
        "distanceKm": 9.67885666127675,
        "gradePct": -4.052502913593282,
        "smoothedEle": 99.29319780448141,
        "gradeBand": "descent"
      },
      {
        "lat": 22.543411,
        "lng": 120.971215,
        "ele": 95.5,
        "distanceKm": 9.7247177527354,
        "gradePct": -4.131388555989375,
        "smoothedEle": 97.56294443467665,
        "gradeBand": "descent"
      },
      {
        "lat": 22.542975,
        "lng": 120.971053,
        "ele": 93.5,
        "distanceKm": 9.775974060032599,
        "gradePct": -4.156077572126539,
        "smoothedEle": 95.66995133698241,
        "gradeBand": "descent"
      },
      {
        "lat": 22.542674,
        "lng": 120.97089,
        "ele": 94.5,
        "distanceKm": 9.813396616434462,
        "gradePct": -4.088337133888184,
        "smoothedEle": 94.43783054982276,
        "gradeBand": "descent"
      },
      {
        "lat": 22.542351,
        "lng": 120.970697,
        "ele": 97.75,
        "distanceKm": 9.854418929415838,
        "gradePct": -3.9031877251973373,
        "smoothedEle": 93.18506216415607,
        "gradeBand": "descent"
      },
      {
        "lat": 22.541992,
        "lng": 120.970548,
        "ele": 98,
        "distanceKm": 9.89717039038423,
        "gradePct": -3.6113536301702958,
        "smoothedEle": 91.98867612977979,
        "gradeBand": "descent"
      },
      {
        "lat": 22.54162,
        "lng": 120.970477,
        "ele": 93.75,
        "distanceKm": 9.939172727255503,
        "gradePct": -3.3618067056551237,
        "smoothedEle": 90.80232378840772,
        "gradeBand": "descent"
      },
      {
        "lat": 22.541223333333335,
        "lng": 120.970433,
        "ele": 90.08333333333329,
        "distanceKm": 9.98351098063049,
        "gradePct": -3.20425093937092,
        "smoothedEle": 89.5048462055761,
        "gradeBand": "descent"
      },
      {
        "lat": 22.540826666666668,
        "lng": 120.970389,
        "ele": 86.41666666666671,
        "distanceKm": 10.02784923532884,
        "gradePct": -3.075904750934349,
        "smoothedEle": 88.21957856263849,
        "gradeBand": "descent"
      },
      {
        "lat": 22.54043,
        "lng": 120.970345,
        "ele": 82.75,
        "distanceKm": 10.07218749135054,
        "gradePct": -2.868866653222192,
        "smoothedEle": 87.20319657407417,
        "gradeBand": "descent"
      },
      {
        "lat": 22.539887,
        "lng": 120.970246,
        "ele": 77.75,
        "distanceKm": 10.1334164961969,
        "gradePct": -2.5340096274847723,
        "smoothedEle": 86.22442043046406,
        "gradeBand": "descent"
      },
      {
        "lat": 22.539268,
        "lng": 120.970032,
        "ele": 82.25,
        "distanceKm": 10.205670024641032,
        "gradePct": -2.1755643407266327,
        "smoothedEle": 85.22191167937756,
        "gradeBand": "descent"
      },
      {
        "lat": 22.538894,
        "lng": 120.969924,
        "ele": 85,
        "distanceKm": 10.248710739898716,
        "gradePct": -2.1910574534355853,
        "smoothedEle": 83.95003899927637,
        "gradeBand": "descent"
      },
      {
        "lat": 22.53850456060362,
        "lng": 120.96988350426786,
        "ele": 83.57852511193204,
        "distanceKm": 10.292213746421075,
        "gradePct": -2.301220516924061,
        "smoothedEle": 82.34891078090425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.538114,
        "lng": 120.969856,
        "ele": 81,
        "distanceKm": 10.33573393362858,
        "gradePct": -2.406107947775173,
        "smoothedEle": 80.82051090897463,
        "gradeBand": "descent"
      },
      {
        "lat": 22.537756,
        "lng": 120.969779,
        "ele": 79.25,
        "distanceKm": 10.37631967187287,
        "gradePct": -2.585424508005231,
        "smoothedEle": 79.38086808596921,
        "gradeBand": "descent"
      },
      {
        "lat": 22.537329935005086,
        "lng": 120.96956662450944,
        "ele": 81.39049885041675,
        "distanceKm": 10.428475805143046,
        "gradePct": -3.1223424516873997,
        "smoothedEle": 76.9363724830959,
        "gradeBand": "descent"
      },
      {
        "lat": 22.536909,
        "lng": 120.969342,
        "ele": 83.75,
        "distanceKm": 10.48065819846085,
        "gradePct": -3.726191077613356,
        "smoothedEle": 74.39037443448477,
        "gradeBand": "descent"
      },
      {
        "lat": 22.536597,
        "lng": 120.969262,
        "ele": 83.75,
        "distanceKm": 10.516310718655479,
        "gradePct": -4.032564988975045,
        "smoothedEle": 72.80977937252287,
        "gradeBand": "descent"
      },
      {
        "lat": 22.536262,
        "lng": 120.969284,
        "ele": 83.5,
        "distanceKm": 10.55362953400975,
        "gradePct": -4.234635320925075,
        "smoothedEle": 71.06509681208547,
        "gradeBand": "descent"
      },
      {
        "lat": 22.535673,
        "lng": 120.969381,
        "ele": 74,
        "distanceKm": 10.61987678798194,
        "gradePct": -4.628746507224974,
        "smoothedEle": 67.49116373842712,
        "gradeBand": "descent"
      },
      {
        "lat": 22.535241,
        "lng": 120.969364,
        "ele": 67.25,
        "distanceKm": 10.66794478271419,
        "gradePct": -4.987346351378878,
        "smoothedEle": 64.7159001112888,
        "gradeBand": "descent"
      },
      {
        "lat": 22.534889,
        "lng": 120.969234,
        "ele": 67.75,
        "distanceKm": 10.709300045556786,
        "gradePct": -5.152754594410562,
        "smoothedEle": 62.376853623065294,
        "gradeBand": "descent"
      },
      {
        "lat": 22.534564,
        "lng": 120.96904,
        "ele": 59.75,
        "distanceKm": 10.750567234360943,
        "gradePct": -5.254650214652476,
        "smoothedEle": 60.09457293065217,
        "gradeBand": "descent"
      },
      {
        "lat": 22.534264,
        "lng": 120.968886,
        "ele": 47,
        "distanceKm": 10.787485473571522,
        "gradePct": -5.355175020080077,
        "smoothedEle": 58.02217351100473,
        "gradeBand": "descent"
      },
      {
        "lat": 22.533906,
        "lng": 120.968709,
        "ele": 45.75,
        "distanceKm": 10.831247736248173,
        "gradePct": -5.5660676586197315,
        "smoothedEle": 55.41325964004835,
        "gradeBand": "descent"
      },
      {
        "lat": 22.533501,
        "lng": 120.968542,
        "ele": 44.5,
        "distanceKm": 10.879437449723518,
        "gradePct": -5.784869307045034,
        "smoothedEle": 52.31819324092473,
        "gradeBand": "descent"
      },
      {
        "lat": 22.533149213225606,
        "lng": 120.96843140781863,
        "ele": 43.57120935163243,
        "distanceKm": 10.920170136367133,
        "gradePct": -5.942078969516414,
        "smoothedEle": 49.64799000719493,
        "gradeBand": "descent"
      },
      {
        "lat": 22.532795,
        "lng": 120.96833,
        "ele": 42.5,
        "distanceKm": 10.9609107114335,
        "gradePct": -6.065718114998104,
        "smoothedEle": 46.92486635203425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.532350739130436,
        "lng": 120.9682192173913,
        "ele": 41.19565217391305,
        "distanceKm": 11.011603750004108,
        "gradePct": -6.053538025519414,
        "smoothedEle": 44.08883323816604,
        "gradeBand": "descent"
      },
      {
        "lat": 22.53190647826087,
        "lng": 120.96810843478261,
        "ele": 39.89130434782609,
        "distanceKm": 11.062296796790125,
        "gradePct": -5.956784249354381,
        "smoothedEle": 41.56578308237136,
        "gradeBand": "descent"
      },
      {
        "lat": 22.531462217391304,
        "lng": 120.9679976521739,
        "ele": 38.58695652173914,
        "distanceKm": 11.112989851791312,
        "gradePct": -5.8094530311479895,
        "smoothedEle": 39.07335541845994,
        "gradeBand": "descent"
      },
      {
        "lat": 22.53101795652174,
        "lng": 120.96788686956522,
        "ele": 37.282608695652186,
        "distanceKm": 11.163682915007268,
        "gradePct": -5.349739530141794,
        "smoothedEle": 37.28083646742093,
        "gradeBand": "descent"
      },
      {
        "lat": 22.530573695652173,
        "lng": 120.96777608695652,
        "ele": 35.978260869565226,
        "distanceKm": 11.214375986438904,
        "gradePct": -4.6833432635516905,
        "smoothedEle": 35.97779172656126,
        "gradeBand": "descent"
      },
      {
        "lat": 22.53012943478261,
        "lng": 120.96766530434782,
        "ele": 34.67391304347827,
        "distanceKm": 11.265069066084996,
        "gradePct": -4.004430337685541,
        "smoothedEle": 34.678935279841674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.529685173913045,
        "lng": 120.96755452173913,
        "ele": 33.36956521739132,
        "distanceKm": 11.315762153945471,
        "gradePct": -3.504099304318711,
        "smoothedEle": 33.369566867456705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.529240913043477,
        "lng": 120.96744373913043,
        "ele": 32.065217391304365,
        "distanceKm": 11.366455250021241,
        "gradePct": -3.098701729400055,
        "smoothedEle": 32.06521904133481,
        "gradeBand": "descent"
      },
      {
        "lat": 22.528796652173913,
        "lng": 120.96733295652174,
        "ele": 30.76086956521741,
        "distanceKm": 11.417148354310754,
        "gradePct": -2.7218128501365157,
        "smoothedEle": 30.760871215230242,
        "gradeBand": "descent"
      },
      {
        "lat": 22.52835239130435,
        "lng": 120.96722217391304,
        "ele": 29.456521739130455,
        "distanceKm": 11.467841466814921,
        "gradePct": -2.5724730663107707,
        "smoothedEle": 29.456523389117702,
        "gradeBand": "descent"
      },
      {
        "lat": 22.52790813043478,
        "lng": 120.96711139130434,
        "ele": 28.1521739130435,
        "distanceKm": 11.51853458753367,
        "gradePct": -2.5730215402834467,
        "smoothedEle": 28.152175562995783,
        "gradeBand": "descent"
      },
      {
        "lat": 22.527463869565217,
        "lng": 120.96700060869566,
        "ele": 26.847826086956545,
        "distanceKm": 11.569227716465777,
        "gradePct": -2.5745641322310875,
        "smoothedEle": 26.84782773689149,
        "gradeBand": "descent"
      },
      {
        "lat": 22.52701960869565,
        "lng": 120.96688982608696,
        "ele": 25.54347826086954,
        "distanceKm": 11.619920853612538,
        "gradePct": -2.5730274758885328,
        "smoothedEle": 25.543479910769552,
        "gradeBand": "descent"
      },
      {
        "lat": 22.526575347826086,
        "lng": 120.96677904347825,
        "ele": 24.23913043478259,
        "distanceKm": 11.670613998972724,
        "gradePct": -2.57302705896453,
        "smoothedEle": 24.239132084657005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.52613108695652,
        "lng": 120.96666826086957,
        "ele": 22.934782608695635,
        "distanceKm": 11.721307152546268,
        "gradePct": -2.57302664204704,
        "smoothedEle": 22.934784258552423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.525686826086954,
        "lng": 120.96655747826087,
        "ele": 21.63043478260868,
        "distanceKm": 11.772000314334079,
        "gradePct": -2.5730262251360343,
        "smoothedEle": 21.630436432430518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.52524256521739,
        "lng": 120.96644669565218,
        "ele": 20.326086956521728,
        "distanceKm": 11.822693484334605,
        "gradePct": -2.431445319481448,
        "smoothedEle": 20.750830072578047,
        "gradeBand": "descent"
      },
      {
        "lat": 22.524798304347826,
        "lng": 120.96633591304348,
        "ele": 19.02173913043477,
        "distanceKm": 11.873386662548757,
        "gradePct": -2.066172833563627,
        "smoothedEle": 20.542298453526254,
        "gradeBand": "descent"
      },
      {
        "lat": 22.524354043478258,
        "lng": 120.96622513043478,
        "ele": 17.71739130434782,
        "distanceKm": 11.924079848976463,
        "gradePct": -1.5090466384128927,
        "smoothedEle": 20.909327962183884,
        "gradeBand": "descent"
      },
      {
        "lat": 22.523909782608694,
        "lng": 120.96611434782609,
        "ele": 16.413043478260864,
        "distanceKm": 11.9747730436165,
        "gradePct": -0.7811367389604822,
        "smoothedEle": 21.788708583784274,
        "gradeBand": "descent"
      },
      {
        "lat": 22.52346552173913,
        "lng": 120.96600356521739,
        "ele": 15.108695652173907,
        "distanceKm": 12.025466246469776,
        "gradePct": 0.05559356135203673,
        "smoothedEle": 22.994550407976224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.523021260869562,
        "lng": 120.9658927826087,
        "ele": 13.804347826086957,
        "distanceKm": 12.076159457535894,
        "gradePct": 0.9100952978971094,
        "smoothedEle": 24.288554639393737,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.522577,
        "lng": 120.965782,
        "ele": 12.5,
        "distanceKm": 12.126852676814611,
        "gradePct": 1.683954898141947,
        "smoothedEle": 25.78558549959637,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.522392,
        "lng": 120.965736,
        "ele": 12.5,
        "distanceKm": 12.147959404515248,
        "gradePct": 1.880526708718331,
        "smoothedEle": 26.288476229159375,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.522235,
        "lng": 120.965591,
        "ele": 18.75,
        "distanceKm": 12.170906892455772,
        "gradePct": 2.0942419428667485,
        "smoothedEle": 26.835225072264034,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.52183987304345,
        "lng": 120.96541413436238,
        "ele": 25.413639692594945,
        "distanceKm": 12.218450714240229,
        "gradePct": 2.399959546202297,
        "smoothedEle": 28.068450461711738,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.521439936521723,
        "lng": 120.96524956718119,
        "ele": 32.20681984629734,
        "distanceKm": 12.266025867329025,
        "gradePct": 2.6480328794618573,
        "smoothedEle": 29.581068958768867,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.52104,
        "lng": 120.965085,
        "ele": 39,
        "distanceKm": 12.313601037800487,
        "gradePct": 2.9445558032547905,
        "smoothedEle": 31.545979488716387,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.520618652387085,
        "lng": 120.96480336315935,
        "ele": 43.25,
        "distanceKm": 12.368664127419288,
        "gradePct": 3.4148423080866164,
        "smoothedEle": 34.341754388223556,
        "gradeBand": "hard"
      },
      {
        "lat": 22.520216,
        "lng": 120.964489,
        "ele": 43.25,
        "distanceKm": 12.423866158931213,
        "gradePct": 3.802912435614426,
        "smoothedEle": 37.106127392938454,
        "gradeBand": "hard"
      },
      {
        "lat": 22.519761,
        "lng": 120.964265,
        "ele": 45.25,
        "distanceKm": 12.479445962043426,
        "gradePct": 4.274977719264745,
        "smoothedEle": 39.88165067686867,
        "gradeBand": "hard"
      },
      {
        "lat": 22.519407,
        "lng": 120.964204,
        "ele": 39.5,
        "distanceKm": 12.519304578402075,
        "gradePct": 4.587290806775476,
        "smoothedEle": 41.85747089189895,
        "gradeBand": "hard"
      },
      {
        "lat": 22.519053177210456,
        "lng": 120.96408085579384,
        "ele": 39.5,
        "distanceKm": 12.560631269704029,
        "gradePct": 4.735285427770101,
        "smoothedEle": 43.61540780867187,
        "gradeBand": "hard"
      },
      {
        "lat": 22.518697,
        "lng": 120.963966,
        "ele": 40.75,
        "distanceKm": 12.601956227132273,
        "gradePct": 4.606822568017812,
        "smoothedEle": 44.88550280782132,
        "gradeBand": "hard"
      },
      {
        "lat": 22.518302,
        "lng": 120.96374,
        "ele": 48.25,
        "distanceKm": 12.651635599187776,
        "gradePct": 4.14823743690615,
        "smoothedEle": 45.92185971566519,
        "gradeBand": "hard"
      },
      {
        "lat": 22.517833,
        "lng": 120.963373,
        "ele": 54.75,
        "distanceKm": 12.71598433820559,
        "gradePct": 3.269524259268789,
        "smoothedEle": 46.519999254036556,
        "gradeBand": "hard"
      },
      {
        "lat": 22.517345,
        "lng": 120.963143,
        "ele": 52.75,
        "distanceKm": 12.775167441789433,
        "gradePct": 2.2995264309450336,
        "smoothedEle": 46.5665708359758,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.516815,
        "lng": 120.962947,
        "ele": 51,
        "distanceKm": 12.837444827943873,
        "gradePct": 1.2562520784355058,
        "smoothedEle": 46.39786921478512,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.516422000000002,
        "lng": 120.96277433333333,
        "ele": 49.41666666666664,
        "distanceKm": 12.884606558078914,
        "gradePct": 0.5537865991888572,
        "smoothedEle": 46.01363210079918,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.516029,
        "lng": 120.96260166666667,
        "ele": 47.83333333333336,
        "distanceKm": 12.931768307179611,
        "gradePct": 0.13736160056560906,
        "smoothedEle": 45.91949472742083,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.515636,
        "lng": 120.962429,
        "ele": 46.25,
        "distanceKm": 12.978930075246064,
        "gradePct": -0.12413498007804663,
        "smoothedEle": 45.80316456926357,
        "gradeBand": "descent"
      },
      {
        "lat": 22.515103,
        "lng": 120.962217,
        "ele": 44.75,
        "distanceKm": 13.042071120028,
        "gradePct": -0.5191815713748238,
        "smoothedEle": 44.982982403839536,
        "gradeBand": "descent"
      },
      {
        "lat": 22.514771500000002,
        "lng": 120.9620765,
        "ele": 44.375,
        "distanceKm": 13.081656875834842,
        "gradePct": -0.8454765192341356,
        "smoothedEle": 44.01256221608611,
        "gradeBand": "descent"
      },
      {
        "lat": 22.51444,
        "lng": 120.961936,
        "ele": 44,
        "distanceKm": 13.121242644261038,
        "gradePct": -1.275371940022542,
        "smoothedEle": 42.615643076396566,
        "gradeBand": "descent"
      },
      {
        "lat": 22.514148,
        "lng": 120.961798,
        "ele": 42.75,
        "distanceKm": 13.156671098289669,
        "gradePct": -1.66705526373649,
        "smoothedEle": 41.24006271914794,
        "gradeBand": "descent"
      },
      {
        "lat": 22.513832,
        "lng": 120.961664,
        "ele": 40.75,
        "distanceKm": 13.194408569695383,
        "gradePct": -2.0620309374774073,
        "smoothedEle": 39.80797394897658,
        "gradeBand": "descent"
      },
      {
        "lat": 22.513479,
        "lng": 120.961572,
        "ele": 37.75,
        "distanceKm": 13.234782039352028,
        "gradePct": -2.472649386749177,
        "smoothedEle": 38.49411283526216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.5130645,
        "lng": 120.9614555,
        "ele": 38,
        "distanceKm": 13.28240063191848,
        "gradePct": -2.8281888004653086,
        "smoothedEle": 37.27351673634177,
        "gradeBand": "descent"
      },
      {
        "lat": 22.51265,
        "lng": 120.961339,
        "ele": 38.25,
        "distanceKm": 13.33001923350236,
        "gradePct": -3.037017158483539,
        "smoothedEle": 36.02848111570655,
        "gradeBand": "descent"
      },
      {
        "lat": 22.5122315,
        "lng": 120.961215,
        "ele": 36.25,
        "distanceKm": 13.378266127332193,
        "gradePct": -3.0796859033303603,
        "smoothedEle": 34.8566265971477,
        "gradeBand": "descent"
      },
      {
        "lat": 22.511813,
        "lng": 120.961091,
        "ele": 34.25,
        "distanceKm": 13.42651303134189,
        "gradePct": -2.8830321400289525,
        "smoothedEle": 33.76191337093804,
        "gradeBand": "descent"
      },
      {
        "lat": 22.511367999999997,
        "lng": 120.960938,
        "ele": 28.249999999999893,
        "distanceKm": 13.478430832620708,
        "gradePct": -2.5990006521512057,
        "smoothedEle": 32.61730667752067,
        "gradeBand": "descent"
      },
      {
        "lat": 22.510923,
        "lng": 120.960785,
        "ele": 22.25,
        "distanceKm": 13.53034864921363,
        "gradePct": -2.3707923699761158,
        "smoothedEle": 31.52601014500355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.510494,
        "lng": 120.960663,
        "ele": 26,
        "distanceKm": 13.579670069219546,
        "gradePct": -2.24137645089604,
        "smoothedEle": 30.619379250244936,
        "gradeBand": "descent"
      },
      {
        "lat": 22.510074,
        "lng": 120.96052,
        "ele": 30.25,
        "distanceKm": 13.628627700717312,
        "gradePct": -2.0508244085235825,
        "smoothedEle": 29.912390896503933,
        "gradeBand": "descent"
      },
      {
        "lat": 22.509586,
        "lng": 120.960358,
        "ele": 28.25,
        "distanceKm": 13.685385298080323,
        "gradePct": -1.8800378920972403,
        "smoothedEle": 29.054980268396946,
        "gradeBand": "descent"
      },
      {
        "lat": 22.5091,
        "lng": 120.960202,
        "ele": 28,
        "distanceKm": 13.741752021059499,
        "gradePct": -1.7694107081262664,
        "smoothedEle": 28.11771459924266,
        "gradeBand": "descent"
      },
      {
        "lat": 22.50866925,
        "lng": 120.95995925,
        "ele": 27.9375,
        "distanceKm": 13.795751736422803,
        "gradePct": -1.6556347222636936,
        "smoothedEle": 27.286322441502154,
        "gradeBand": "descent"
      },
      {
        "lat": 22.5082385,
        "lng": 120.9597165,
        "ele": 27.875,
        "distanceKm": 13.849751487660704,
        "gradePct": -1.5111295945128271,
        "smoothedEle": 26.635956594310812,
        "gradeBand": "descent"
      },
      {
        "lat": 22.50780775,
        "lng": 120.95947375,
        "ele": 27.8125,
        "distanceKm": 13.903751274772642,
        "gradePct": -1.2709026130609469,
        "smoothedEle": 26.458919051537535,
        "gradeBand": "descent"
      },
      {
        "lat": 22.507377,
        "lng": 120.959231,
        "ele": 27.75,
        "distanceKm": 13.957751097758052,
        "gradePct": -0.9993003298535424,
        "smoothedEle": 26.474536291754095,
        "gradeBand": "descent"
      },
      {
        "lat": 22.50695143889243,
        "lng": 120.95901959238496,
        "ele": 27.201250729718502,
        "distanceKm": 14.009816799727687,
        "gradePct": -0.7931947347384026,
        "smoothedEle": 26.269149141712603,
        "gradeBand": "descent"
      },
      {
        "lat": 22.50651707916932,
        "lng": 120.95882919428873,
        "ele": 25.963438047288875,
        "distanceKm": 14.061925416305316,
        "gradePct": -0.5779919524511876,
        "smoothedEle": 26.073144463946495,
        "gradeBand": "descent"
      },
      {
        "lat": 22.506082719446212,
        "lng": 120.95863879619249,
        "ele": 24.72562536485925,
        "distanceKm": 14.114034055943375,
        "gradePct": -0.2911262237512624,
        "smoothedEle": 26.192753936942736,
        "gradeBand": "descent"
      },
      {
        "lat": 22.505648359723107,
        "lng": 120.95844839809624,
        "ele": 23.487812682429627,
        "distanceKm": 14.166142718641686,
        "gradePct": -0.04176416434826171,
        "smoothedEle": 26.456925680966577,
        "gradeBand": "descent"
      },
      {
        "lat": 22.505214,
        "lng": 120.958258,
        "ele": 22.25,
        "distanceKm": 14.218251404399526,
        "gradePct": 0.05642020637363848,
        "smoothedEle": 26.632373240100623,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.504691,
        "lng": 120.958081,
        "ele": 23.75,
        "distanceKm": 14.27918266186732,
        "gradePct": 0.12602418818424108,
        "smoothedEle": 26.768066293605923,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.50424,
        "lng": 120.957965,
        "ele": 25,
        "distanceKm": 14.33072798930511,
        "gradePct": 0.21974333422607917,
        "smoothedEle": 26.849722460640226,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.50378,
        "lng": 120.957911,
        "ele": 26,
        "distanceKm": 14.382177655819527,
        "gradePct": 0.2681237873601064,
        "smoothedEle": 26.924002545160416,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.503322,
        "lng": 120.957882,
        "ele": 26.5,
        "distanceKm": 14.433192063521746,
        "gradePct": 0.24590681762281663,
        "smoothedEle": 27.027598438135005,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.502841,
        "lng": 120.957897,
        "ele": 32.5,
        "distanceKm": 14.486699090024864,
        "gradePct": 0.22181878640396913,
        "smoothedEle": 27.191594401445702,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.502408000000003,
        "lng": 120.95795150000001,
        "ele": 31.25,
        "distanceKm": 14.53517098466922,
        "gradePct": 0.23976415992516273,
        "smoothedEle": 27.389345387196883,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.501975,
        "lng": 120.958006,
        "ele": 30,
        "distanceKm": 14.58364288133836,
        "gradePct": 0.28604435493939023,
        "smoothedEle": 27.633265070181896,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.50164,
        "lng": 120.957975,
        "ele": 29.5,
        "distanceKm": 14.62102911527287,
        "gradePct": 0.33692084208258344,
        "smoothedEle": 27.845120395810792,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.501186216541363,
        "lng": 120.95787250574286,
        "ele": 29.02576658758735,
        "distanceKm": 14.672574468110763,
        "gradePct": 0.37645261545172237,
        "smoothedEle": 28.039495858604173,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.500735108270682,
        "lng": 120.95775575287144,
        "ele": 28.637883293793667,
        "distanceKm": 14.724149509990578,
        "gradePct": 0.3372760395661491,
        "smoothedEle": 28.021063677599415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.500284,
        "lng": 120.957639,
        "ele": 28.25,
        "distanceKm": 14.77572456096758,
        "gradePct": 0.18779767389269683,
        "smoothedEle": 27.721351121833052,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.49985925,
        "lng": 120.9575035,
        "ele": 27.812499999999996,
        "distanceKm": 14.824963269257893,
        "gradePct": 0.08763466623084287,
        "smoothedEle": 27.610604927803582,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4994345,
        "lng": 120.957368,
        "ele": 27.374999999999993,
        "distanceKm": 14.874201989632091,
        "gradePct": -0.10548889845201471,
        "smoothedEle": 27.26929003555438,
        "gradeBand": "descent"
      },
      {
        "lat": 22.49900975,
        "lng": 120.9572325,
        "ele": 26.937500000000004,
        "distanceKm": 14.923440722089994,
        "gradePct": -0.30024796976481055,
        "smoothedEle": 26.95347055931528,
        "gradeBand": "descent"
      },
      {
        "lat": 22.498585,
        "lng": 120.957097,
        "ele": 26.5,
        "distanceKm": 14.972679466631421,
        "gradePct": -0.4822778282552196,
        "smoothedEle": 26.59262484887164,
        "gradeBand": "descent"
      },
      {
        "lat": 22.498059,
        "lng": 120.956883,
        "ele": 26.5,
        "distanceKm": 15.035163412507817,
        "gradePct": -0.698640543312849,
        "smoothedEle": 25.861138138602684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.49777,
        "lng": 120.956737,
        "ele": 24.5,
        "distanceKm": 15.070626780613914,
        "gradePct": -0.7467303871261263,
        "smoothedEle": 25.510784144039373,
        "gradeBand": "descent"
      },
      {
        "lat": 22.497343,
        "lng": 120.956536,
        "ele": 21.5,
        "distanceKm": 15.122402943661788,
        "gradePct": -0.8569434347040457,
        "smoothedEle": 25.045533229574705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.496761,
        "lng": 120.956277,
        "ele": 25.25,
        "distanceKm": 15.192374930012434,
        "gradePct": -0.8990824604582034,
        "smoothedEle": 24.455480585536932,
        "gradeBand": "descent"
      },
      {
        "lat": 22.496182,
        "lng": 120.956108,
        "ele": 27,
        "distanceKm": 15.259056811041953,
        "gradePct": -0.891209235969071,
        "smoothedEle": 24.018830653782263,
        "gradeBand": "descent"
      },
      {
        "lat": 22.495676,
        "lng": 120.955968,
        "ele": 25.75,
        "distanceKm": 15.317130737794756,
        "gradePct": -0.7474515056191957,
        "smoothedEle": 23.829888437841394,
        "gradeBand": "descent"
      },
      {
        "lat": 22.495303,
        "lng": 120.955832,
        "ele": 20.25,
        "distanceKm": 15.360896611871933,
        "gradePct": -0.5711556647224646,
        "smoothedEle": 23.893444609517925,
        "gradeBand": "descent"
      },
      {
        "lat": 22.494892500000002,
        "lng": 120.95569300000001,
        "ele": 21.249999999999982,
        "distanceKm": 15.408723802229476,
        "gradePct": -0.3459574128043141,
        "smoothedEle": 24.13057919687334,
        "gradeBand": "descent"
      },
      {
        "lat": 22.494482,
        "lng": 120.955554,
        "ele": 22.25,
        "distanceKm": 15.45655100523793,
        "gradePct": -0.13088516369570719,
        "smoothedEle": 24.36491744076508,
        "gradeBand": "descent"
      },
      {
        "lat": 22.494007,
        "lng": 120.955432,
        "ele": 21,
        "distanceKm": 15.51083543050071,
        "gradePct": 0.09896973721329494,
        "smoothedEle": 24.63150574060987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.49371,
        "lng": 120.955309,
        "ele": 22.5,
        "distanceKm": 15.546195388356022,
        "gradePct": 0.17278540750964036,
        "smoothedEle": 24.62140674610751,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.493368,
        "lng": 120.955111,
        "ele": 22.5,
        "distanceKm": 15.58932271706512,
        "gradePct": 0.18576259174085366,
        "smoothedEle": 24.477648983743848,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.49299576563945,
        "lng": 120.95494733428585,
        "ele": 23.02140688020587,
        "distanceKm": 15.63399828663201,
        "gradePct": 0.13222939946837156,
        "smoothedEle": 24.251071447609636,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.49261684375963,
        "lng": 120.95480188952389,
        "ele": 25.597604586803914,
        "distanceKm": 15.678703672261479,
        "gradePct": 0.01662989336557289,
        "smoothedEle": 24.031624441846464,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.492237921879816,
        "lng": 120.95465644476195,
        "ele": 28.173802293401955,
        "distanceKm": 15.723409071566667,
        "gradePct": -0.04890459223320428,
        "smoothedEle": 24.055818618585647,
        "gradeBand": "descent"
      },
      {
        "lat": 22.491859,
        "lng": 120.954511,
        "ele": 30.75,
        "distanceKm": 15.76811448454874,
        "gradePct": -0.04397491923442814,
        "smoothedEle": 24.289780394727455,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4915305,
        "lng": 120.95437249999999,
        "ele": 28.99999999999996,
        "distanceKm": 15.807315645824078,
        "gradePct": -0.06656926652651629,
        "smoothedEle": 24.414512441400895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.491202,
        "lng": 120.954234,
        "ele": 27.25,
        "distanceKm": 15.846516819359099,
        "gradePct": -0.05536788170768727,
        "smoothedEle": 24.454231664307528,
        "gradeBand": "descent"
      },
      {
        "lat": 22.490794,
        "lng": 120.954061,
        "ele": 22.75,
        "distanceKm": 15.89524175289671,
        "gradePct": 0.02167194587284977,
        "smoothedEle": 24.512645717677465,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.490262,
        "lng": 120.9539195,
        "ele": 22.75,
        "distanceKm": 15.95615762081723,
        "gradePct": 0.09472861571614148,
        "smoothedEle": 24.42648293864455,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.48973,
        "lng": 120.953778,
        "ele": 22.75,
        "distanceKm": 16.017073502074496,
        "gradePct": 0.055810768898223624,
        "smoothedEle": 24.219822169684363,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.489124,
        "lng": 120.953688,
        "ele": 25,
        "distanceKm": 16.08508916484939,
        "gradePct": -0.22947305307970178,
        "smoothedEle": 23.655372049113385,
        "gradeBand": "descent"
      },
      {
        "lat": 22.488681714285715,
        "lng": 120.95364528571429,
        "ele": 24.142857142857153,
        "distanceKm": 16.13446456610703,
        "gradePct": -0.49567950159751584,
        "smoothedEle": 22.954981633933517,
        "gradeBand": "descent"
      },
      {
        "lat": 22.48823942857143,
        "lng": 120.95360257142858,
        "ele": 23.28571428571427,
        "distanceKm": 16.18383996861111,
        "gradePct": -0.7570204890678051,
        "smoothedEle": 22.22791518235192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.487797142857143,
        "lng": 120.95355985714286,
        "ele": 22.428571428571423,
        "distanceKm": 16.233215372361606,
        "gradePct": -0.9113020431241313,
        "smoothedEle": 21.72502759675464,
        "gradeBand": "descent"
      },
      {
        "lat": 22.487354857142858,
        "lng": 120.95351714285714,
        "ele": 21.571428571428577,
        "distanceKm": 16.28259077735863,
        "gradePct": -0.9211047199560202,
        "smoothedEle": 21.57349271493001,
        "gradeBand": "descent"
      },
      {
        "lat": 22.486912571428572,
        "lng": 120.95347442857143,
        "ele": 20.71428571428573,
        "distanceKm": 16.331966183601907,
        "gradePct": -0.836306954379795,
        "smoothedEle": 21.587309540460254,
        "gradeBand": "descent"
      },
      {
        "lat": 22.486470285714287,
        "lng": 120.95343171428571,
        "ele": 19.85714285714288,
        "distanceKm": 16.38134159109154,
        "gradePct": -0.6658208017011621,
        "smoothedEle": 21.68901010489149,
        "gradeBand": "descent"
      },
      {
        "lat": 22.486028,
        "lng": 120.953389,
        "ele": 19,
        "distanceKm": 16.430716999827517,
        "gradePct": -0.380682148233683,
        "smoothedEle": 21.866094443346213,
        "gradeBand": "descent"
      },
      {
        "lat": 22.485513,
        "lng": 120.95327,
        "ele": 18.25,
        "distanceKm": 16.48927307823367,
        "gradePct": -0.06967712502790356,
        "smoothedEle": 21.96354768497177,
        "gradeBand": "descent"
      },
      {
        "lat": 22.48511222152824,
        "lng": 120.9530987529723,
        "ele": 19.015696770254245,
        "distanceKm": 16.537185077786653,
        "gradePct": 0.12455698572180504,
        "smoothedEle": 22.086515386156687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.48471457722259,
        "lng": 120.95291880237782,
        "ele": 20.312557416203397,
        "distanceKm": 16.585110927739642,
        "gradePct": 0.22620036145865724,
        "smoothedEle": 22.252799018377047,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.484316932916943,
        "lng": 120.95273885178337,
        "ele": 21.609418062152546,
        "distanceKm": 16.63303679817987,
        "gradePct": 0.3005106776115997,
        "smoothedEle": 22.491046762323418,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.483919288611297,
        "lng": 120.95255890118891,
        "ele": 22.9062787081017,
        "distanceKm": 16.680962689107968,
        "gradePct": 0.39497698720523433,
        "smoothedEle": 22.8731606264551,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.483521644305647,
        "lng": 120.95237895059445,
        "ele": 24.203139354050847,
        "distanceKm": 16.728888600524012,
        "gradePct": 0.5069337935260094,
        "smoothedEle": 23.380338290743634,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.483124,
        "lng": 120.952199,
        "ele": 25.5,
        "distanceKm": 16.77681453242698,
        "gradePct": 0.6515677920443771,
        "smoothedEle": 23.897516652178453,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.482806,
        "lng": 120.952066,
        "ele": 26.25,
        "distanceKm": 16.814723122855664,
        "gradePct": 0.7357139052198137,
        "smoothedEle": 24.236007765788557,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.482368333333334,
        "lng": 120.95189933333333,
        "ele": 26.083333333333336,
        "distanceKm": 16.86631427237892,
        "gradePct": 0.8143471448563718,
        "smoothedEle": 24.63062353702206,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.481930666666667,
        "lng": 120.95173266666667,
        "ele": 25.916666666666664,
        "distanceKm": 16.917905439869774,
        "gradePct": 0.82405179023546,
        "smoothedEle": 24.88798154867504,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.481493,
        "lng": 120.951566,
        "ele": 25.75,
        "distanceKm": 16.969496625328915,
        "gradePct": 0.7455544210639343,
        "smoothedEle": 25.018404787108622,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4810565,
        "lng": 120.95140649999999,
        "ele": 27.25,
        "distanceKm": 17.020725194256617,
        "gradePct": 0.5536392581747003,
        "smoothedEle": 24.95486652772938,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.48062,
        "lng": 120.951247,
        "ele": 28.75,
        "distanceKm": 17.071953779711812,
        "gradePct": 0.28064547633768255,
        "smoothedEle": 24.68699972191912,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.480146,
        "lng": 120.951122,
        "ele": 28,
        "distanceKm": 17.126202456991898,
        "gradePct": 0.019626951553584324,
        "smoothedEle": 24.382692949976313,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.47961833214722,
        "lng": 120.95100284919454,
        "ele": 25.505463432347316,
        "distanceKm": 17.186140082397383,
        "gradePct": -0.22422588562192486,
        "smoothedEle": 24.05684519362241,
        "gradeBand": "descent"
      },
      {
        "lat": 22.479091,
        "lng": 120.950882,
        "ele": 23,
        "distanceKm": 17.246077083429856,
        "gradePct": -0.3777718984297947,
        "smoothedEle": 23.8258841623352,
        "gradeBand": "descent"
      },
      {
        "lat": 22.478675978323356,
        "lng": 120.95080921377806,
        "ele": 21.75,
        "distanceKm": 17.29282748844885,
        "gradePct": -0.41885462294138903,
        "smoothedEle": 23.732903892256104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.47826,
        "lng": 120.950743,
        "ele": 21.75,
        "distanceKm": 17.339579874001643,
        "gradePct": -0.3443486108117845,
        "smoothedEle": 23.82323232333336,
        "gradeBand": "descent"
      },
      {
        "lat": 22.477915,
        "lng": 120.950708,
        "ele": 19.75,
        "distanceKm": 17.37811036267406,
        "gradePct": -0.20040155274965296,
        "smoothedEle": 24.051259845829417,
        "gradeBand": "descent"
      },
      {
        "lat": 22.477461,
        "lng": 120.950606,
        "ele": 18.5,
        "distanceKm": 17.429669308364765,
        "gradePct": -0.1342302427077581,
        "smoothedEle": 23.961154866225936,
        "gradeBand": "descent"
      },
      {
        "lat": 22.477044,
        "lng": 120.950463,
        "ele": 20,
        "distanceKm": 17.478309886664718,
        "gradePct": -0.18237465194895422,
        "smoothedEle": 23.552289686125647,
        "gradeBand": "descent"
      },
      {
        "lat": 22.476593,
        "lng": 120.950276,
        "ele": 21.625,
        "distanceKm": 17.532013646541476,
        "gradePct": -0.2525398747767612,
        "smoothedEle": 23.122456536790832,
        "gradeBand": "descent"
      },
      {
        "lat": 22.476142,
        "lng": 120.950089,
        "ele": 23.25,
        "distanceKm": 17.58571742880599,
        "gradePct": -0.22884490093777352,
        "smoothedEle": 23.06051014213834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.475554,
        "lng": 120.949896,
        "ele": 24.5,
        "distanceKm": 17.65404127352586,
        "gradePct": -0.13668519583261315,
        "smoothedEle": 23.498760833493048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.475216999999997,
        "lng": 120.9497985,
        "ele": 27.500000000000142,
        "distanceKm": 17.692830028659863,
        "gradePct": -0.054915460395920344,
        "smoothedEle": 23.860789214743743,
        "gradeBand": "descent"
      },
      {
        "lat": 22.47488,
        "lng": 120.949701,
        "ele": 30.5,
        "distanceKm": 17.731618790089428,
        "gradePct": 0.09268327682146428,
        "smoothedEle": 24.222817654753026,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.474337,
        "lng": 120.949599,
        "ele": 25.25,
        "distanceKm": 17.79290055954426,
        "gradePct": 0.5110988571556542,
        "smoothedEle": 24.968805702765167,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.47397,
        "lng": 120.949555,
        "ele": 21.75,
        "distanceKm": 17.83395882106516,
        "gradePct": 0.7890567517313414,
        "smoothedEle": 25.48738306642902,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.473472,
        "lng": 120.949435,
        "ele": 22,
        "distanceKm": 17.89069009297421,
        "gradePct": 0.9630285039082019,
        "smoothedEle": 25.98149189036037,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.472946,
        "lng": 120.949172,
        "ele": 25.75,
        "distanceKm": 17.955119778548365,
        "gradePct": 0.8281383618329313,
        "smoothedEle": 25.993241965868563,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.472507,
        "lng": 120.948972,
        "ele": 28.75,
        "distanceKm": 18.008083734817976,
        "gradePct": 0.7408939055698962,
        "smoothedEle": 26.22583885559583,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.472131333333333,
        "lng": 120.948889,
        "ele": 28.75,
        "distanceKm": 18.05071772176202,
        "gradePct": 0.6960868699563802,
        "smoothedEle": 26.543571139490194,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.471755666666667,
        "lng": 120.948806,
        "ele": 28.75,
        "distanceKm": 18.093351713332602,
        "gradePct": 0.5669608859049037,
        "smoothedEle": 26.67538655941715,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.47138,
        "lng": 120.948723,
        "ele": 28.75,
        "distanceKm": 18.135985709530246,
        "gradePct": 0.3652499032764831,
        "smoothedEle": 26.600786240424213,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.471002000000002,
        "lng": 120.9486175,
        "ele": 28.25000000000002,
        "distanceKm": 18.179392859083894,
        "gradePct": 0.2634361116011027,
        "smoothedEle": 26.67340541109762,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.470624,
        "lng": 120.948512,
        "ele": 27.75,
        "distanceKm": 18.22280001602545,
        "gradePct": 0.24858051044741994,
        "smoothedEle": 26.733089325189543,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.470018,
        "lng": 120.948361,
        "ele": 21.5,
        "distanceKm": 18.291947463045034,
        "gradePct": 0.16589426830098436,
        "smoothedEle": 26.6526574937988,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4695505,
        "lng": 120.94826850000001,
        "ele": 25.875,
        "distanceKm": 18.34479293576635,
        "gradePct": 0.009992187517778911,
        "smoothedEle": 26.529392887518195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.469083,
        "lng": 120.948176,
        "ele": 30.25,
        "distanceKm": 18.397638414256903,
        "gradePct": -0.0061032956592240225,
        "smoothedEle": 26.649575868271423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.468547,
        "lng": 120.948047,
        "ele": 30.25,
        "distanceKm": 18.458695184570395,
        "gradePct": 0.0858631893648138,
        "smoothedEle": 26.89636824204175,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.468079,
        "lng": 120.947959,
        "ele": 28.5,
        "distanceKm": 18.511514245695476,
        "gradePct": 0.17071260963545343,
        "smoothedEle": 27.229709460832964,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.467719,
        "lng": 120.947938,
        "ele": 25,
        "distanceKm": 18.551602592306793,
        "gradePct": 0.2798047240736594,
        "smoothedEle": 27.539000540194706,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.467252,
        "lng": 120.947857,
        "ele": 21.75,
        "distanceKm": 18.604193491917485,
        "gradePct": 0.4073657005874814,
        "smoothedEle": 27.84619014434659,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.466747,
        "lng": 120.947573,
        "ele": 20.25,
        "distanceKm": 18.667477271456953,
        "gradePct": 0.5275071525634967,
        "smoothedEle": 28.163503831340236,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.466186,
        "lng": 120.947377,
        "ele": 29.25,
        "distanceKm": 18.733028350615566,
        "gradePct": 0.3883410423896967,
        "smoothedEle": 27.95764564459492,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.465791,
        "lng": 120.9473135,
        "ele": 30.875,
        "distanceKm": 18.777432436582313,
        "gradePct": 0.18991027931293852,
        "smoothedEle": 27.58434992142698,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.465396,
        "lng": 120.94725,
        "ele": 32.5,
        "distanceKm": 18.82183652528269,
        "gradePct": -0.020431710739265634,
        "smoothedEle": 27.248053157972674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4650575,
        "lng": 120.94716199999999,
        "ele": 33.5,
        "distanceKm": 18.860547026968234,
        "gradePct": -0.23523170544951758,
        "smoothedEle": 26.885550914289364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.464719,
        "lng": 120.947074,
        "ele": 34.5,
        "distanceKm": 18.89925753381404,
        "gradePct": -0.4439387638027011,
        "smoothedEle": 26.48554234354937,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4643275,
        "lng": 120.9469435,
        "ele": 32.74999999999993,
        "distanceKm": 18.944808979378262,
        "gradePct": -0.717670566170865,
        "smoothedEle": 25.896830158310888,
        "gradeBand": "descent"
      },
      {
        "lat": 22.463936,
        "lng": 120.946813,
        "ele": 31,
        "distanceKm": 18.99036043609602,
        "gradePct": -0.8999111938497633,
        "smoothedEle": 25.391907408781197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.463391,
        "lng": 120.946658,
        "ele": 22,
        "distanceKm": 19.05301986398039,
        "gradePct": -1.0287014911322647,
        "smoothedEle": 24.703476762793645,
        "gradeBand": "descent"
      },
      {
        "lat": 22.462928,
        "lng": 120.94646,
        "ele": 21.5,
        "distanceKm": 19.108377764870365,
        "gradePct": -1.20534604414394,
        "smoothedEle": 23.733945674254596,
        "gradeBand": "descent"
      },
      {
        "lat": 22.462626,
        "lng": 120.946085,
        "ele": 24.25,
        "distanceKm": 19.159491169675853,
        "gradePct": -1.4404025935786917,
        "smoothedEle": 22.574230647815096,
        "gradeBand": "descent"
      },
      {
        "lat": 22.462511,
        "lng": 120.945749,
        "ele": 25,
        "distanceKm": 19.196309988592088,
        "gradePct": -1.615244879330144,
        "smoothedEle": 21.670265672852448,
        "gradeBand": "descent"
      },
      {
        "lat": 22.462445,
        "lng": 120.945309,
        "ele": 20.75,
        "distanceKm": 19.24211555022666,
        "gradePct": -1.8110194582856807,
        "smoothedEle": 20.49858197535848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.462288,
        "lng": 120.944604,
        "ele": 15.25,
        "distanceKm": 19.316634264120374,
        "gradePct": -2.1846263538218262,
        "smoothedEle": 18.549361358004038,
        "gradeBand": "descent"
      },
      {
        "lat": 22.462096,
        "lng": 120.944095,
        "ele": 12.5,
        "distanceKm": 19.373127961092216,
        "gradePct": -2.374729467870232,
        "smoothedEle": 17.227117757193795,
        "gradeBand": "descent"
      },
      {
        "lat": 22.461926,
        "lng": 120.943773,
        "ele": 12.5,
        "distanceKm": 19.411235345428214,
        "gradePct": -2.372838225690087,
        "smoothedEle": 16.55059518503663,
        "gradeBand": "descent"
      },
      {
        "lat": 22.461681,
        "lng": 120.943415,
        "ele": 12.5,
        "distanceKm": 19.457012105004605,
        "gradePct": -2.1834769917774524,
        "smoothedEle": 16.080047315575637,
        "gradeBand": "descent"
      },
      {
        "lat": 22.461285,
        "lng": 120.942956,
        "ele": 13.25,
        "distanceKm": 19.52153817624769,
        "gradePct": -1.868062492233829,
        "smoothedEle": 15.420753586244233,
        "gradeBand": "descent"
      },
      {
        "lat": 22.460927,
        "lng": 120.94266,
        "ele": 13.5,
        "distanceKm": 19.57163658394872,
        "gradePct": -1.6591387763369554,
        "smoothedEle": 14.748970253137694,
        "gradeBand": "descent"
      },
      {
        "lat": 22.460583,
        "lng": 120.942441,
        "ele": 14.25,
        "distanceKm": 19.616016724404297,
        "gradePct": -1.4351646474474522,
        "smoothedEle": 14.260020688896255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.460228,
        "lng": 120.942232,
        "ele": 14.25,
        "distanceKm": 19.660955276915196,
        "gradePct": -1.187750991603725,
        "smoothedEle": 13.948768313581356,
        "gradeBand": "descent"
      },
      {
        "lat": 22.459872999999998,
        "lng": 120.94202299999999,
        "ele": 14.25,
        "distanceKm": 19.7058938557178,
        "gradePct": -0.9204523221330592,
        "smoothedEle": 13.884065990761044,
        "gradeBand": "descent"
      },
      {
        "lat": 22.459518,
        "lng": 120.941814,
        "ele": 14.25,
        "distanceKm": 19.750832460809676,
        "gradePct": -0.7273943990762178,
        "smoothedEle": 13.961385836285503,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45918,
        "lng": 120.94161,
        "ele": 14.25,
        "distanceKm": 19.793867448092684,
        "gradePct": -0.5293585011780036,
        "smoothedEle": 14.115403145730165,
        "gradeBand": "descent"
      },
      {
        "lat": 22.458803666666668,
        "lng": 120.94139266666666,
        "ele": 14.33333333333333,
        "distanceKm": 19.841300617956396,
        "gradePct": -0.3068727009075271,
        "smoothedEle": 14.235135465145339,
        "gradeBand": "descent"
      },
      {
        "lat": 22.458427333333333,
        "lng": 120.94117533333333,
        "ele": 14.41666666666667,
        "distanceKm": 19.88873381637076,
        "gradePct": -0.12042858828180741,
        "smoothedEle": 14.199319055991346,
        "gradeBand": "descent"
      },
      {
        "lat": 22.458051,
        "lng": 120.940958,
        "ele": 14.5,
        "distanceKm": 19.936167043336063,
        "gradePct": 0.0124707206817825,
        "smoothedEle": 14.157868172498885,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.457572,
        "lng": 120.940766,
        "ele": 14.75,
        "distanceKm": 19.992966462480116,
        "gradePct": 0.06590846641319976,
        "smoothedEle": 14.10040418089828,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.457253,
        "lng": 120.940744,
        "ele": 14.75,
        "distanceKm": 20.028509665760378,
        "gradePct": 0.03524239438838816,
        "smoothedEle": 14.028705172536926,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456944,
        "lng": 120.940822,
        "ele": 14,
        "distanceKm": 20.06379150510473,
        "gradePct": -0.027013748393156744,
        "smoothedEle": 13.926723532086612,
        "gradeBand": "descent"
      },
      {
        "lat": 22.456603,
        "lng": 120.941086,
        "ele": 14.75,
        "distanceKm": 20.110414928650915,
        "gradePct": -0.1026811252615886,
        "smoothedEle": 13.849129447860813,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45629182639002,
        "lng": 120.9415675415527,
        "ele": 15.411118323970571,
        "distanceKm": 20.170796770341806,
        "gradePct": -0.08738418039742434,
        "smoothedEle": 13.950710627383993,
        "gradeBand": "descent"
      },
      {
        "lat": 22.456003,
        "lng": 120.942066,
        "ele": 12.25,
        "distanceKm": 20.231255574043107,
        "gradePct": 0.06408119514247845,
        "smoothedEle": 14.35440378599323,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455796,
        "lng": 120.94244133333333,
        "ele": 12.583333333333334,
        "distanceKm": 20.276172061419068,
        "gradePct": 0.23276048400715396,
        "smoothedEle": 14.815676534165789,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455589,
        "lng": 120.94281666666666,
        "ele": 12.916666666666666,
        "distanceKm": 20.321088598251137,
        "gradePct": 0.45972122490600803,
        "smoothedEle": 15.422838887439562,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455382,
        "lng": 120.943192,
        "ele": 13.25,
        "distanceKm": 20.36600518454141,
        "gradePct": 0.7491656875477666,
        "smoothedEle": 16.17053642879799,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455177,
        "lng": 120.943579,
        "ele": 12,
        "distanceKm": 20.411844462194143,
        "gradePct": 1.0798874939364944,
        "smoothedEle": 17.09119685306155,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.454907,
        "lng": 120.943869,
        "ele": 12.5,
        "distanceKm": 20.45414691526709,
        "gradePct": 1.3974588760984181,
        "smoothedEle": 18.115076981894664,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.454611,
        "lng": 120.944006,
        "ele": 14.25,
        "distanceKm": 20.489945309993065,
        "gradePct": 1.660387481418815,
        "smoothedEle": 19.059730951408657,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.454323,
        "lng": 120.944014,
        "ele": 16,
        "distanceKm": 20.52198004395935,
        "gradePct": 1.8933238722233812,
        "smoothedEle": 19.972441196095435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.453955,
        "lng": 120.943904,
        "ele": 18.5,
        "distanceKm": 20.564432519722192,
        "gradePct": 2.0834787885360933,
        "smoothedEle": 20.945552923312018,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4536,
        "lng": 120.943838,
        "ele": 20.75,
        "distanceKm": 20.6044852224577,
        "gradePct": 2.2231277041465782,
        "smoothedEle": 21.867784734007234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.453221333333335,
        "lng": 120.94374866666666,
        "ele": 23.1666666666666,
        "distanceKm": 20.64758027625219,
        "gradePct": 2.31380704261583,
        "smoothedEle": 22.80524995116147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.452842666666665,
        "lng": 120.94365933333333,
        "ele": 25.5833333333334,
        "distanceKm": 20.690675335388402,
        "gradePct": 2.3241606823933036,
        "smoothedEle": 23.6385069022464,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.452464,
        "lng": 120.94357,
        "ele": 28,
        "distanceKm": 20.73377039986549,
        "gradePct": 2.255216362119265,
        "smoothedEle": 24.387536957479593,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.452034,
        "lng": 120.943405,
        "ele": 31,
        "distanceKm": 20.784501931656813,
        "gradePct": 2.0949084969769336,
        "smoothedEle": 25.200815673185755,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4516555,
        "lng": 120.94320549999999,
        "ele": 33.6250000000001,
        "distanceKm": 20.83131724225751,
        "gradePct": 1.905543580556508,
        "smoothedEle": 25.90310273337849,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.451277,
        "lng": 120.943006,
        "ele": 36.25,
        "distanceKm": 20.878132577366987,
        "gradePct": 1.7210733170772232,
        "smoothedEle": 26.424222971677494,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.450822,
        "lng": 120.942742,
        "ele": 31.5,
        "distanceKm": 20.93554158887152,
        "gradePct": 1.4296490198275296,
        "smoothedEle": 26.832314272699435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.450519,
        "lng": 120.942549,
        "ele": 29.75,
        "distanceKm": 20.974638270476312,
        "gradePct": 1.2192844205878184,
        "smoothedEle": 26.986278310524934,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.450111,
        "lng": 120.94232,
        "ele": 27.75,
        "distanceKm": 21.025746572997225,
        "gradePct": 0.9791829558319486,
        "smoothedEle": 27.185624669614715,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.449751,
        "lng": 120.942165,
        "ele": 26.5,
        "distanceKm": 21.06882967367115,
        "gradePct": 0.795411022041689,
        "smoothedEle": 27.335806299022902,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.449285500000002,
        "lng": 120.941979,
        "ele": 25,
        "distanceKm": 21.124007683972057,
        "gradePct": 0.5737324028975039,
        "smoothedEle": 27.514647605394597,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.44882,
        "lng": 120.941793,
        "ele": 23.5,
        "distanceKm": 21.17918571650197,
        "gradePct": 0.24877950885624328,
        "smoothedEle": 27.178047725730178,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.448365,
        "lng": 120.941585,
        "ele": 22,
        "distanceKm": 21.234109845978118,
        "gradePct": -0.26496001804630903,
        "smoothedEle": 26.02725669059434,
        "gradeBand": "descent"
      },
      {
        "lat": 22.448017,
        "lng": 120.9414125,
        "ele": 22,
        "distanceKm": 21.276673248159927,
        "gradePct": -0.8325548426426927,
        "smoothedEle": 24.49655115034432,
        "gradeBand": "descent"
      },
      {
        "lat": 22.447669,
        "lng": 120.94124,
        "ele": 22,
        "distanceKm": 21.319236668870012,
        "gradePct": -1.3320141957923475,
        "smoothedEle": 23.16419040179098,
        "gradeBand": "descent"
      },
      {
        "lat": 22.447247666666666,
        "lng": 120.94104633333333,
        "ele": 24.58333333333327,
        "distanceKm": 21.370139259407768,
        "gradePct": -1.6855064863763587,
        "smoothedEle": 22.283531429770562,
        "gradeBand": "descent"
      },
      {
        "lat": 22.446826333333334,
        "lng": 120.94085266666666,
        "ele": 27.16666666666673,
        "distanceKm": 21.42104187358848,
        "gradePct": -1.8829713063936346,
        "smoothedEle": 21.856120990856283,
        "gradeBand": "descent"
      },
      {
        "lat": 22.446405,
        "lng": 120.940659,
        "ele": 29.75,
        "distanceKm": 21.47194451141137,
        "gradePct": -1.8902258960806582,
        "smoothedEle": 21.551543210223198,
        "gradeBand": "descent"
      },
      {
        "lat": 22.445919,
        "lng": 120.940386,
        "ele": 25.75,
        "distanceKm": 21.532834347825673,
        "gradePct": -1.5659302284182812,
        "smoothedEle": 21.356190722748135,
        "gradeBand": "descent"
      },
      {
        "lat": 22.445589,
        "lng": 120.940222,
        "ele": 20,
        "distanceKm": 21.57321441842369,
        "gradePct": -1.1005308207370654,
        "smoothedEle": 21.31934841190161,
        "gradeBand": "descent"
      },
      {
        "lat": 22.445216,
        "lng": 120.940068,
        "ele": 11.75,
        "distanceKm": 21.61760728207829,
        "gradePct": -0.6195749378737738,
        "smoothedEle": 21.35647020596789,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44488,
        "lng": 120.939997,
        "ele": 4.75,
        "distanceKm": 21.655674699460654,
        "gradePct": -0.38038582723635544,
        "smoothedEle": 21.39262338250443,
        "gradeBand": "descent"
      },
      {
        "lat": 22.444528,
        "lng": 120.939857,
        "ele": 14,
        "distanceKm": 21.697376117493082,
        "gradePct": -0.21146975688178388,
        "smoothedEle": 21.42042432785938,
        "gradeBand": "descent"
      },
      {
        "lat": 22.444102,
        "lng": 120.93963,
        "ele": 21.5,
        "distanceKm": 21.750178460426135,
        "gradePct": -0.1166928250649576,
        "smoothedEle": 21.331702690972687,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44367725,
        "lng": 120.93945025,
        "ele": 21.874999999999993,
        "distanceKm": 21.800892838208256,
        "gradePct": -0.1361375983324118,
        "smoothedEle": 21.05025567650053,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4432525,
        "lng": 120.9392705,
        "ele": 22.249999999999986,
        "distanceKm": 21.851607236595576,
        "gradePct": -0.25361399176243005,
        "smoothedEle": 20.578220580191566,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44282775,
        "lng": 120.93909075,
        "ele": 22.625000000000007,
        "distanceKm": 21.902321655588842,
        "gradePct": -0.3956764860841373,
        "smoothedEle": 20.156658741059402,
        "gradeBand": "descent"
      },
      {
        "lat": 22.442403,
        "lng": 120.938911,
        "ele": 23,
        "distanceKm": 21.95303609518721,
        "gradePct": -0.44576693696610326,
        "smoothedEle": 20.052816650987708,
        "gradeBand": "descent"
      },
      {
        "lat": 22.441996,
        "lng": 120.9387574,
        "ele": 22.749999999999996,
        "distanceKm": 22.000966677926492,
        "gradePct": -0.3151920648985424,
        "smoothedEle": 20.46881505998371,
        "gradeBand": "descent"
      },
      {
        "lat": 22.441589,
        "lng": 120.9386038,
        "ele": 22.499999999999993,
        "distanceKm": 22.04889727591987,
        "gradePct": -0.03250698616441257,
        "smoothedEle": 21.2363344548822,
        "gradeBand": "descent"
      },
      {
        "lat": 22.441181999999998,
        "lng": 120.9384502,
        "ele": 22.250000000000007,
        "distanceKm": 22.096827889167017,
        "gradePct": 0.18844631581051585,
        "smoothedEle": 21.638153665798935,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.440775,
        "lng": 120.9382966,
        "ele": 22.000000000000004,
        "distanceKm": 22.14475851766792,
        "gradePct": 0.34769496365582403,
        "smoothedEle": 21.68505138556227,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.440368,
        "lng": 120.938143,
        "ele": 21.75,
        "distanceKm": 22.192689161422255,
        "gradePct": 0.5306513986183331,
        "smoothedEle": 21.828682708724983,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.439943666666665,
        "lng": 120.93799766666666,
        "ele": 21.58333333333333,
        "distanceKm": 22.24218070712935,
        "gradePct": 0.6544414230831134,
        "smoothedEle": 22.038368242344813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.439519333333333,
        "lng": 120.93785233333334,
        "ele": 21.41666666666667,
        "distanceKm": 22.291672266623515,
        "gradePct": 0.6381830355174202,
        "smoothedEle": 22.302696248609237,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.439095,
        "lng": 120.937707,
        "ele": 21.25,
        "distanceKm": 22.341163839906173,
        "gradePct": 0.4997893616576193,
        "smoothedEle": 22.611865943229674,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43848,
        "lng": 120.937494,
        "ele": 18.25,
        "distanceKm": 22.412967291389556,
        "gradePct": 0.46630562983849694,
        "smoothedEle": 23.052862152175425,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.438108999999997,
        "lng": 120.937335,
        "ele": 20.249999999999947,
        "distanceKm": 22.457339411209546,
        "gradePct": 0.48211068170585497,
        "smoothedEle": 23.169083954695633,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.437738,
        "lng": 120.937176,
        "ele": 22.250000000000053,
        "distanceKm": 22.501711547122117,
        "gradePct": 0.4584579765421792,
        "smoothedEle": 23.24228263701392,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.437367,
        "lng": 120.937017,
        "ele": 24.25,
        "distanceKm": 22.546083699126715,
        "gradePct": 0.45836551470768694,
        "smoothedEle": 23.434310160985746,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43698433333333,
        "lng": 120.93685533333333,
        "ele": 25.333333333333332,
        "distanceKm": 22.591763442820273,
        "gradePct": 0.42197392538107337,
        "smoothedEle": 23.569187594783045,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.436601666666668,
        "lng": 120.93669366666667,
        "ele": 26.416666666666668,
        "distanceKm": 22.63744320318095,
        "gradePct": 0.36656473856601024,
        "smoothedEle": 23.688317654318666,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.436219,
        "lng": 120.936532,
        "ele": 27.5,
        "distanceKm": 22.683122980210314,
        "gradePct": 0.2641255880674039,
        "smoothedEle": 23.661943715147803,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.435766,
        "lng": 120.936383,
        "ele": 28.25,
        "distanceKm": 22.73577079851757,
        "gradePct": 0.19972773533177773,
        "smoothedEle": 23.711773509833378,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.435357,
        "lng": 120.936273,
        "ele": 26,
        "distanceKm": 22.782633767903132,
        "gradePct": 0.3160950535414355,
        "smoothedEle": 24.15909605818578,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43492,
        "lng": 120.936082,
        "ele": 23,
        "distanceKm": 22.835041538085065,
        "gradePct": 0.45250592892442887,
        "smoothedEle": 24.74404124487596,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.434457,
        "lng": 120.935689,
        "ele": 25.25,
        "distanceKm": 22.900479046045273,
        "gradePct": 0.551542495727741,
        "smoothedEle": 25.246544849436262,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.434137,
        "lng": 120.935512,
        "ele": 24,
        "distanceKm": 22.940442246717787,
        "gradePct": 0.5398998561000543,
        "smoothedEle": 25.306285677568592,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.433784,
        "lng": 120.935456,
        "ele": 23.75,
        "distanceKm": 22.980113855222502,
        "gradePct": 0.5086446494804876,
        "smoothedEle": 25.189615029324113,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.433265,
        "lng": 120.935474,
        "ele": 21,
        "distanceKm": 23.037853748069942,
        "gradePct": 0.3688412003403619,
        "smoothedEle": 24.8381795535181,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.432899,
        "lng": 120.935373,
        "ele": 22,
        "distanceKm": 23.079854223431695,
        "gradePct": 0.12705630109299165,
        "smoothedEle": 24.51373328981603,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.432412,
        "lng": 120.935063,
        "ele": 26.5,
        "distanceKm": 23.14268438905931,
        "gradePct": -0.22634968372575717,
        "smoothedEle": 24.123682695268666,
        "gradeBand": "descent"
      },
      {
        "lat": 22.432053,
        "lng": 120.934858,
        "ele": 27.75,
        "distanceKm": 23.187822838205204,
        "gradePct": -0.36970447141903084,
        "smoothedEle": 24.040242678181162,
        "gradeBand": "descent"
      },
      {
        "lat": 22.431714095570857,
        "lng": 120.93473483147993,
        "ele": 27.80818634861174,
        "distanceKm": 23.227576870647514,
        "gradePct": -0.3861561020235511,
        "smoothedEle": 24.128584972497407,
        "gradeBand": "descent"
      },
      {
        "lat": 22.431369,
        "lng": 120.934633,
        "ele": 27,
        "distanceKm": 23.267351578353708,
        "gradePct": -0.3550185006460779,
        "smoothedEle": 24.16209224086738,
        "gradeBand": "descent"
      },
      {
        "lat": 22.431032000000002,
        "lng": 120.934555,
        "ele": 24.750000000000107,
        "distanceKm": 23.30567230997061,
        "gradePct": -0.2848355598860295,
        "smoothedEle": 24.17954609864141,
        "gradeBand": "descent"
      },
      {
        "lat": 22.430695,
        "lng": 120.934477,
        "ele": 22.5,
        "distanceKm": 23.34399304566021,
        "gradePct": -0.18274876854634273,
        "smoothedEle": 24.242508256905495,
        "gradeBand": "descent"
      },
      {
        "lat": 22.430279,
        "lng": 120.934357,
        "ele": 21.5,
        "distanceKm": 23.391866306034032,
        "gradePct": -0.1023145991573633,
        "smoothedEle": 24.13221830644953,
        "gradeBand": "descent"
      },
      {
        "lat": 22.429898516899772,
        "lng": 120.93423765602115,
        "ele": 21.71161033409215,
        "distanceKm": 23.435916516250032,
        "gradePct": -0.060678817512880893,
        "smoothedEle": 23.983661296911567,
        "gradeBand": "descent"
      },
      {
        "lat": 22.429517758449887,
        "lng": 120.93411932801058,
        "ele": 22.980805167046128,
        "distanceKm": 23.479967198015572,
        "gradePct": -0.08569819233258476,
        "smoothedEle": 23.797669529457064,
        "gradeBand": "descent"
      },
      {
        "lat": 22.429137,
        "lng": 120.934001,
        "ele": 24.25,
        "distanceKm": 23.524017888992468,
        "gradePct": -0.23913519539532466,
        "smoothedEle": 23.403270538189105,
        "gradeBand": "descent"
      },
      {
        "lat": 22.428658000000002,
        "lng": 120.933826,
        "ele": 24.666666666666668,
        "distanceKm": 23.580235543147307,
        "gradePct": -0.4533464012224366,
        "smoothedEle": 22.807921267778784,
        "gradeBand": "descent"
      },
      {
        "lat": 22.428179,
        "lng": 120.933651,
        "ele": 25.083333333333332,
        "distanceKm": 23.636453217161552,
        "gradePct": -0.652880813152478,
        "smoothedEle": 22.27147764517856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4277,
        "lng": 120.933476,
        "ele": 25.5,
        "distanceKm": 23.692670911034117,
        "gradePct": -0.6472635328907955,
        "smoothedEle": 22.18771421987128,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4273145,
        "lng": 120.93332649999999,
        "ele": 22,
        "distanceKm": 23.73820761828124,
        "gradePct": -0.5833128469851526,
        "smoothedEle": 22.22404921404656,
        "gradeBand": "descent"
      },
      {
        "lat": 22.426929,
        "lng": 120.933177,
        "ele": 18.5,
        "distanceKm": 23.783744339927253,
        "gradePct": -0.5047689264582935,
        "smoothedEle": 22.24954487057096,
        "gradeBand": "descent"
      },
      {
        "lat": 22.426509666666668,
        "lng": 120.933009,
        "ele": 18.833333333333343,
        "distanceKm": 23.83346689925837,
        "gradePct": -0.4120432809922294,
        "smoothedEle": 22.06707495158659,
        "gradeBand": "descent"
      },
      {
        "lat": 22.426090333333335,
        "lng": 120.932841,
        "ele": 19.166666666666657,
        "distanceKm": 23.88318947670334,
        "gradePct": -0.39056010540874464,
        "smoothedEle": 21.608053751610466,
        "gradeBand": "descent"
      },
      {
        "lat": 22.425671,
        "lng": 120.932673,
        "ele": 19.5,
        "distanceKm": 23.932912072261896,
        "gradePct": -0.4323665499633504,
        "smoothedEle": 21.00816851813445,
        "gradeBand": "descent"
      },
      {
        "lat": 22.425259,
        "lng": 120.932466,
        "ele": 20.5,
        "distanceKm": 23.98342417671898,
        "gradePct": -0.5879667146496055,
        "smoothedEle": 20.437591555676395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.424793,
        "lng": 120.932219,
        "ele": 24.75,
        "distanceKm": 24.041126475821148,
        "gradePct": -0.7872895322706229,
        "smoothedEle": 19.863814862885032,
        "gradeBand": "descent"
      },
      {
        "lat": 22.424373009063135,
        "lng": 120.93208996543846,
        "ele": 23.452313496319068,
        "distanceKm": 24.089674234800576,
        "gradePct": -0.9336328467920701,
        "smoothedEle": 19.426885032070178,
        "gradeBand": "descent"
      },
      {
        "lat": 22.423953,
        "lng": 120.931961,
        "ele": 22,
        "distanceKm": 24.138222003128217,
        "gradePct": -0.9751500877084734,
        "smoothedEle": 19.09772725601684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.423596500000002,
        "lng": 120.93184600000001,
        "ele": 19.375,
        "distanceKm": 24.179587905810305,
        "gradePct": -0.9072674001148238,
        "smoothedEle": 18.919499976389364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.42324,
        "lng": 120.931731,
        "ele": 16.75,
        "distanceKm": 24.2209538171659,
        "gradePct": -0.8160289134307176,
        "smoothedEle": 18.7043538249799,
        "gradeBand": "descent"
      },
      {
        "lat": 22.422905,
        "lng": 120.931618,
        "ele": 15.25,
        "distanceKm": 24.259973013677598,
        "gradePct": -0.7155676630062859,
        "smoothedEle": 18.55578929724636,
        "gradeBand": "descent"
      },
      {
        "lat": 22.422536,
        "lng": 120.931483,
        "ele": 15.25,
        "distanceKm": 24.30328694003646,
        "gradePct": -0.5798097222830116,
        "smoothedEle": 18.50065222331693,
        "gradeBand": "descent"
      },
      {
        "lat": 22.422006,
        "lng": 120.93128,
        "ele": 17.25,
        "distanceKm": 24.36580523637226,
        "gradePct": -0.3729246428150282,
        "smoothedEle": 18.522932089479937,
        "gradeBand": "descent"
      },
      {
        "lat": 22.421413,
        "lng": 120.931027,
        "ele": 18.75,
        "distanceKm": 24.43668683314803,
        "gradePct": -0.230563091611287,
        "smoothedEle": 18.41644655718861,
        "gradeBand": "descent"
      },
      {
        "lat": 22.420912,
        "lng": 120.930844,
        "ele": 16.75,
        "distanceKm": 24.49548560854919,
        "gradePct": -0.12485227169379669,
        "smoothedEle": 18.462258422873948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.420443,
        "lng": 120.930622,
        "ele": 14.75,
        "distanceKm": 24.55241007304447,
        "gradePct": 0.05835894573175069,
        "smoothedEle": 18.759661824868008,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.420135,
        "lng": 120.930476,
        "ele": 15,
        "distanceKm": 24.589801935548067,
        "gradePct": 0.18616876263198473,
        "smoothedEle": 19.07632443801562,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.419681,
        "lng": 120.930136,
        "ele": 18.25,
        "distanceKm": 24.65120144602645,
        "gradePct": 0.3898513220589157,
        "smoothedEle": 19.68728165129113,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.419361666666667,
        "lng": 120.92982566666667,
        "ele": 19.833333333333293,
        "distanceKm": 24.698934098594048,
        "gradePct": 0.5412736394782484,
        "smoothedEle": 20.096983467041436,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.419042333333334,
        "lng": 120.92951533333333,
        "ele": 21.416666666666707,
        "distanceKm": 24.746666800181448,
        "gradePct": 0.572338457584492,
        "smoothedEle": 20.141237617550544,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.418723,
        "lng": 120.929205,
        "ele": 23,
        "distanceKm": 24.7943995507861,
        "gradePct": 0.4585103620334592,
        "smoothedEle": 19.836943329236234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.418427666666666,
        "lng": 120.92894533333333,
        "ele": 23.83333333333331,
        "distanceKm": 24.836718270290884,
        "gradePct": 0.2148988926024849,
        "smoothedEle": 19.322376255434065,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.418132333333332,
        "lng": 120.92868566666667,
        "ele": 24.66666666666669,
        "distanceKm": 24.87903702559505,
        "gradePct": -0.07827053913918865,
        "smoothedEle": 18.75034740952249,
        "gradeBand": "descent"
      },
      {
        "lat": 22.417837,
        "lng": 120.928426,
        "ele": 25.5,
        "distanceKm": 24.9213558166982,
        "gradePct": -0.38552416669454137,
        "smoothedEle": 18.233729543702932,
        "gradeBand": "descent"
      },
      {
        "lat": 22.417414,
        "lng": 120.928109,
        "ele": 23.5,
        "distanceKm": 24.9785757870167,
        "gradePct": -0.7345807804924381,
        "smoothedEle": 17.71850042354595,
        "gradeBand": "descent"
      },
      {
        "lat": 22.416994,
        "lng": 120.92781,
        "ele": 23,
        "distanceKm": 25.034483778318144,
        "gradePct": -0.9895649308192964,
        "smoothedEle": 17.161247648719545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.416639,
        "lng": 120.92749500000001,
        "ele": 18.50000000000016,
        "distanceKm": 25.085539220831667,
        "gradePct": -1.0924472173377933,
        "smoothedEle": 16.616085910030744,
        "gradeBand": "descent"
      },
      {
        "lat": 22.416284,
        "lng": 120.92718,
        "ele": 14,
        "distanceKm": 25.136594715832093,
        "gradePct": -1.0890935697697903,
        "smoothedEle": 16.056597884972835,
        "gradeBand": "descent"
      },
      {
        "lat": 22.416049,
        "lng": 120.926996,
        "ele": 11.25,
        "distanceKm": 25.168852383753432,
        "gradePct": -1.0665462537822308,
        "smoothedEle": 15.688375951403644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.415605,
        "lng": 120.926796,
        "ele": 7,
        "distanceKm": 25.222332434915042,
        "gradePct": -1.0352202113309872,
        "smoothedEle": 15.119275089269436,
        "gradeBand": "descent"
      },
      {
        "lat": 22.415236,
        "lng": 120.926673,
        "ele": 6.25,
        "distanceKm": 25.265267298668082,
        "gradePct": -1.0514308192073003,
        "smoothedEle": 14.684042364724151,
        "gradeBand": "descent"
      },
      {
        "lat": 22.414851,
        "lng": 120.92655049999999,
        "ele": 7.625,
        "distanceKm": 25.309890945032816,
        "gradePct": -1.0496912380058743,
        "smoothedEle": 14.25729854515699,
        "gradeBand": "descent"
      },
      {
        "lat": 22.414466,
        "lng": 120.926428,
        "ele": 9,
        "distanceKm": 25.35451460124541,
        "gradePct": -0.9894185582749588,
        "smoothedEle": 13.979106093824138,
        "gradeBand": "descent"
      },
      {
        "lat": 22.413962666666666,
        "lng": 120.92632833333333,
        "ele": 10.666666666666666,
        "distanceKm": 25.411412773993774,
        "gradePct": -0.8789937479788663,
        "smoothedEle": 13.695571166717093,
        "gradeBand": "descent"
      },
      {
        "lat": 22.413459333333336,
        "lng": 120.92622866666667,
        "ele": 12.333333333333332,
        "distanceKm": 25.468310953425735,
        "gradePct": -0.7111701893074834,
        "smoothedEle": 13.561045821653094,
        "gradeBand": "descent"
      },
      {
        "lat": 22.412956,
        "lng": 120.926129,
        "ele": 14,
        "distanceKm": 25.525209139542476,
        "gradePct": -0.37014193573814064,
        "smoothedEle": 13.9796879925279,
        "gradeBand": "descent"
      },
      {
        "lat": 22.412339,
        "lng": 120.925908,
        "ele": 16.25,
        "distanceKm": 25.597479951768236,
        "gradePct": 0.32635568707743257,
        "smoothedEle": 15.355054129219985,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.411904999999997,
        "lng": 120.92568600000001,
        "ele": 17.875,
        "distanceKm": 25.650862380145337,
        "gradePct": 0.8775330075547172,
        "smoothedEle": 16.634473764933375,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.411471,
        "lng": 120.925464,
        "ele": 19.5,
        "distanceKm": 25.70424483899893,
        "gradePct": 1.351530918679989,
        "smoothedEle": 17.78588317046049,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.410949,
        "lng": 120.925155,
        "ele": 19.5,
        "distanceKm": 25.77041166708398,
        "gradePct": 1.8537544382781501,
        "smoothedEle": 19.137765645495932,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.410423,
        "lng": 120.924921,
        "ele": 18.25,
        "distanceKm": 25.833653562783702,
        "gradePct": 2.1407216817839783,
        "smoothedEle": 20.562556555831154,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.409819,
        "lng": 120.924661,
        "ele": 23.25,
        "distanceKm": 25.905938154606204,
        "gradePct": 2.220306276590217,
        "smoothedEle": 22.21869117775165,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.409254,
        "lng": 120.924407,
        "ele": 25,
        "distanceKm": 25.973973259040275,
        "gradePct": 2.202390228910369,
        "smoothedEle": 23.74012436250203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.408681,
        "lng": 120.924126,
        "ele": 23.5,
        "distanceKm": 26.043930342559573,
        "gradePct": 2.267855995156981,
        "smoothedEle": 25.400282479259005,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.408175,
        "lng": 120.923925,
        "ele": 23.5,
        "distanceKm": 26.103869131887528,
        "gradePct": 2.4047769431387334,
        "smoothedEle": 27.105867234114168,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.407855,
        "lng": 120.923763,
        "ele": 26.75,
        "distanceKm": 26.143155850255038,
        "gradePct": 2.5243739273156116,
        "smoothedEle": 28.353388182600295,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.407448,
        "lng": 120.923601,
        "ele": 28.75,
        "distanceKm": 26.191379083274896,
        "gradePct": 2.7294767692548896,
        "smoothedEle": 30.07355410294055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.40702,
        "lng": 120.923501,
        "ele": 30.12499999999995,
        "distanceKm": 26.24006817806545,
        "gradePct": 2.991425398755527,
        "smoothedEle": 31.956199101508627,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.406592,
        "lng": 120.923401,
        "ele": 31.5,
        "distanceKm": 26.288757279541006,
        "gradePct": 3.151600959540334,
        "smoothedEle": 33.54576821958978,
        "gradeBand": "hard"
      },
      {
        "lat": 22.406165,
        "lng": 120.923243,
        "ele": 32.5,
        "distanceKm": 26.338938906374302,
        "gradePct": 3.271263080255335,
        "smoothedEle": 35.095619479302805,
        "gradeBand": "hard"
      },
      {
        "lat": 22.405873,
        "lng": 120.923087,
        "ele": 33.75,
        "distanceKm": 26.375152372578047,
        "gradePct": 3.3144842045718534,
        "smoothedEle": 36.23217176332123,
        "gradeBand": "hard"
      },
      {
        "lat": 22.405561,
        "lng": 120.922866,
        "ele": 38.25,
        "distanceKm": 26.41662219542803,
        "gradePct": 3.39032609582511,
        "smoothedEle": 37.68180970758544,
        "gradeBand": "hard"
      },
      {
        "lat": 22.405388,
        "lng": 120.922761,
        "ele": 40.25,
        "distanceKm": 26.438680414570413,
        "gradePct": 3.4248163066969344,
        "smoothedEle": 38.48572292257701,
        "gradeBand": "hard"
      },
      {
        "lat": 22.405135,
        "lng": 120.922715,
        "ele": 41.75,
        "distanceKm": 26.467207444444384,
        "gradePct": 3.446716761802683,
        "smoothedEle": 39.551480378235084,
        "gradeBand": "hard"
      },
      {
        "lat": 22.404775,
        "lng": 120.922663,
        "ele": 43.75,
        "distanceKm": 26.5075930283782,
        "gradePct": 3.476028010079861,
        "smoothedEle": 41.1285773438412,
        "gradeBand": "hard"
      },
      {
        "lat": 22.404282,
        "lng": 120.922455,
        "ele": 47.25,
        "distanceKm": 26.566434878687406,
        "gradePct": 3.5130160803735286,
        "smoothedEle": 43.356049694371016,
        "gradeBand": "hard"
      },
      {
        "lat": 22.403931,
        "lng": 120.92227,
        "ele": 47.25,
        "distanceKm": 26.609851438919517,
        "gradePct": 3.584700818981587,
        "smoothedEle": 44.95136030627449,
        "gradeBand": "hard"
      },
      {
        "lat": 22.403579999999998,
        "lng": 120.922085,
        "ele": 47.25,
        "distanceKm": 26.653268020191575,
        "gradePct": 3.6406372556047244,
        "smoothedEle": 46.46724757388727,
        "gradeBand": "hard"
      },
      {
        "lat": 22.403229,
        "lng": 120.9219,
        "ele": 47.25,
        "distanceKm": 26.696684622502598,
        "gradePct": 3.6086667032426467,
        "smoothedEle": 47.81086297156017,
        "gradeBand": "hard"
      },
      {
        "lat": 22.40287,
        "lng": 120.921704,
        "ele": 48.75,
        "distanceKm": 26.741400669346135,
        "gradePct": 3.4825884375750737,
        "smoothedEle": 49.035115773160975,
        "gradeBand": "hard"
      },
      {
        "lat": 22.402538,
        "lng": 120.921567,
        "ele": 50.5,
        "distanceKm": 26.78091278028833,
        "gradePct": 3.27822976879491,
        "smoothedEle": 49.92137659428146,
        "gradeBand": "hard"
      },
      {
        "lat": 22.40207870621989,
        "lng": 120.9215523481663,
        "ele": 51.519674507821634,
        "distanceKm": 26.83200619639302,
        "gradePct": 2.863034178942265,
        "smoothedEle": 50.6418462088187,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.40162,
        "lng": 120.921511,
        "ele": 54.75,
        "distanceKm": 26.883188889475917,
        "gradePct": 2.4422924004644946,
        "smoothedEle": 51.29854110057405,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.401143,
        "lng": 120.921499,
        "ele": 57,
        "distanceKm": 26.936243287379398,
        "gradePct": 2.1616807591760265,
        "smoothedEle": 52.35787235127241,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.40054,
        "lng": 120.921438,
        "ele": 56.75,
        "distanceKm": 27.003586540166324,
        "gradePct": 1.9583178355484943,
        "smoothedEle": 53.87477978405871,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.400107,
        "lng": 120.9213035,
        "ele": 54.875000000000036,
        "distanceKm": 27.053680165581586,
        "gradePct": 1.8715307681809517,
        "smoothedEle": 54.925138475044484,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.399673999999997,
        "lng": 120.92116899999999,
        "ele": 52.99999999999993,
        "distanceKm": 27.10377380288553,
        "gradePct": 1.9136732826870266,
        "smoothedEle": 55.98476032783386,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.399241,
        "lng": 120.9210345,
        "ele": 51.124999999999964,
        "distanceKm": 27.153867452077197,
        "gradePct": 2.0231601234258845,
        "smoothedEle": 56.99181543324681,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.398808,
        "lng": 120.9209,
        "ele": 49.25,
        "distanceKm": 27.203961113157963,
        "gradePct": 2.0883030940889946,
        "smoothedEle": 57.97820705829929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.398496,
        "lng": 120.920755,
        "ele": 53.5,
        "distanceKm": 27.241721006111973,
        "gradePct": 2.083933414749339,
        "smoothedEle": 58.73305826396217,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.398117,
        "lng": 120.920359,
        "ele": 62.5,
        "distanceKm": 27.3003165182184,
        "gradePct": 1.971530839580434,
        "smoothedEle": 59.71571502619239,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.397821,
        "lng": 120.920154,
        "ele": 64.75,
        "distanceKm": 27.339399557105853,
        "gradePct": 1.8356322767119606,
        "smoothedEle": 60.13260077432525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.397465,
        "lng": 120.920083,
        "ele": 63.625,
        "distanceKm": 27.37965234803503,
        "gradePct": 1.67373213244747,
        "smoothedEle": 60.49571985565971,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.397109,
        "lng": 120.920012,
        "ele": 62.5,
        "distanceKm": 27.419905142353805,
        "gradePct": 1.556491581641674,
        "smoothedEle": 60.97853062780057,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.396615,
        "lng": 120.919856,
        "ele": 64,
        "distanceKm": 27.477128921885775,
        "gradePct": 1.4698609292937557,
        "smoothedEle": 61.85943859012005,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.396179,
        "lng": 120.919533,
        "ele": 65,
        "distanceKm": 27.53589207908514,
        "gradePct": 1.5109633888075358,
        "smoothedEle": 63.14942340211511,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.395882,
        "lng": 120.919242,
        "ele": 66.75,
        "distanceKm": 27.58045304285476,
        "gradePct": 1.714772039211052,
        "smoothedEle": 64.52691726384066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.395547,
        "lng": 120.918931,
        "ele": 68.5,
        "distanceKm": 27.62954359829833,
        "gradePct": 1.9690278843165674,
        "smoothedEle": 65.93455419999471,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.39492,
        "lng": 120.918743,
        "ele": 65,
        "distanceKm": 27.70189243656045,
        "gradePct": 2.0816928133097483,
        "smoothedEle": 67.0075562808459,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.394573,
        "lng": 120.918702,
        "ele": 63.25,
        "distanceKm": 27.74070668808321,
        "gradePct": 1.9836538055019188,
        "smoothedEle": 67.24971289325164,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.394267,
        "lng": 120.918528,
        "ele": 65.25,
        "distanceKm": 27.77914828586552,
        "gradePct": 1.8234146051831441,
        "smoothedEle": 67.37401203307401,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.393885,
        "lng": 120.918211,
        "ele": 65.75,
        "distanceKm": 27.83268705391602,
        "gradePct": 1.345319788751775,
        "smoothedEle": 67.11502518400506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.393602,
        "lng": 120.917935,
        "ele": 67,
        "distanceKm": 27.875059381981792,
        "gradePct": 0.6551089665232898,
        "smoothedEle": 66.32551225017914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.393342,
        "lng": 120.917646,
        "ele": 72.75,
        "distanceKm": 27.91651580000518,
        "gradePct": 0.016795009979688264,
        "smoothedEle": 65.61137633359854,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.393039,
        "lng": 120.917337,
        "ele": 74,
        "distanceKm": 27.96282327877408,
        "gradePct": -0.5287326531907096,
        "smoothedEle": 64.84192555346627,
        "gradeBand": "descent"
      },
      {
        "lat": 22.392715,
        "lng": 120.917088,
        "ele": 72.75,
        "distanceKm": 28.007019508552954,
        "gradePct": -0.9964778716281231,
        "smoothedEle": 64.05010974123817,
        "gradeBand": "descent"
      },
      {
        "lat": 22.392358343641305,
        "lng": 120.9168966364857,
        "ele": 71.45670578590041,
        "distanceKm": 28.051289865255026,
        "gradePct": -1.4156588800129972,
        "smoothedEle": 63.03695647024143,
        "gradeBand": "descent"
      },
      {
        "lat": 22.391982,
        "lng": 120.916753,
        "ele": 69.25,
        "distanceKm": 28.095666591089998,
        "gradePct": -1.6995018316566648,
        "smoothedEle": 62.19560137820172,
        "gradeBand": "descent"
      },
      {
        "lat": 22.39159936866437,
        "lng": 120.91657984306336,
        "ele": 65.63844922545384,
        "distanceKm": 28.14178763401516,
        "gradePct": -1.8652726147980663,
        "smoothedEle": 61.349638519072194,
        "gradeBand": "descent"
      },
      {
        "lat": 22.391225,
        "lng": 120.916386,
        "ele": 57.5,
        "distanceKm": 28.187940228550104,
        "gradePct": -1.925843747184575,
        "smoothedEle": 60.326093165705494,
        "gradeBand": "descent"
      },
      {
        "lat": 22.390841,
        "lng": 120.916246,
        "ele": 49.5,
        "distanceKm": 28.232999893428,
        "gradePct": -2.1007554805379582,
        "smoothedEle": 59.03520816204463,
        "gradeBand": "descent"
      },
      {
        "lat": 22.390384,
        "lng": 120.916037,
        "ele": 52.75,
        "distanceKm": 28.28817236909106,
        "gradePct": -2.4326235913715677,
        "smoothedEle": 57.089902679975474,
        "gradeBand": "descent"
      },
      {
        "lat": 22.389875,
        "lng": 120.915793,
        "ele": 55,
        "distanceKm": 28.350081045366363,
        "gradePct": -2.7930709771397733,
        "smoothedEle": 54.68540809622531,
        "gradeBand": "descent"
      },
      {
        "lat": 22.389455,
        "lng": 120.915576,
        "ele": 50.5,
        "distanceKm": 28.401838380490393,
        "gradePct": -3.1225722470393458,
        "smoothedEle": 52.714680245422905,
        "gradeBand": "descent"
      },
      {
        "lat": 22.38904722694843,
        "lng": 120.91530302595282,
        "ele": 50.79517468843338,
        "distanceKm": 28.455163684794847,
        "gradePct": -3.435594975295998,
        "smoothedEle": 50.74620733180055,
        "gradeBand": "descent"
      },
      {
        "lat": 22.388625,
        "lng": 120.915055,
        "ele": 49.5,
        "distanceKm": 28.508591476043,
        "gradePct": -3.6479235627614903,
        "smoothedEle": 48.79069833268517,
        "gradeBand": "descent"
      },
      {
        "lat": 22.388251,
        "lng": 120.914801,
        "ele": 48.25,
        "distanceKm": 28.55769798622526,
        "gradePct": -3.6830500395166923,
        "smoothedEle": 47.11523731743949,
        "gradeBand": "descent"
      },
      {
        "lat": 22.387817,
        "lng": 120.914648,
        "ele": 41.25,
        "distanceKm": 28.608455722621148,
        "gradePct": -3.502011864646151,
        "smoothedEle": 45.79607421696479,
        "gradeBand": "descent"
      },
      {
        "lat": 22.387458,
        "lng": 120.914393,
        "ele": 43.25,
        "distanceKm": 28.656214404727983,
        "gradePct": -3.2945178249783185,
        "smoothedEle": 44.568318986506235,
        "gradeBand": "descent"
      },
      {
        "lat": 22.387047,
        "lng": 120.914001,
        "ele": 45,
        "distanceKm": 28.71714837768511,
        "gradePct": -3.179707993100732,
        "smoothedEle": 42.61039653232211,
        "gradeBand": "descent"
      },
      {
        "lat": 22.386651,
        "lng": 120.913732,
        "ele": 44.12500000000003,
        "distanceKm": 28.769146890636193,
        "gradePct": -3.1592729170207954,
        "smoothedEle": 40.756589679446705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.386255,
        "lng": 120.913463,
        "ele": 43.25,
        "distanceKm": 28.821145445465717,
        "gradePct": -3.1711791142862653,
        "smoothedEle": 38.84883313113147,
        "gradeBand": "descent"
      },
      {
        "lat": 22.385921999999997,
        "lng": 120.91330149999999,
        "ele": 40.249999999999865,
        "distanceKm": 28.861726041916892,
        "gradePct": -3.2788800155429927,
        "smoothedEle": 37.17391052131456,
        "gradeBand": "descent"
      },
      {
        "lat": 22.385589,
        "lng": 120.91314,
        "ele": 37.25,
        "distanceKm": 28.902306654631506,
        "gradePct": -3.5078553090444298,
        "smoothedEle": 35.432318875768175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.385115425972778,
        "lng": 120.91297194646539,
        "ele": 34.38514694071621,
        "distanceKm": 28.957728036830712,
        "gradePct": -3.8869326236289,
        "smoothedEle": 32.85888528674633,
        "gradeBand": "descent"
      },
      {
        "lat": 22.38463,
        "lng": 120.912845,
        "ele": 31.5,
        "distanceKm": 29.013260666154395,
        "gradePct": -4.053487832939888,
        "smoothedEle": 30.57485247223219,
        "gradeBand": "descent"
      },
      {
        "lat": 22.384263999999998,
        "lng": 120.9127705,
        "ele": 29.87499999999993,
        "distanceKm": 29.05467263620811,
        "gradePct": -4.237714528159089,
        "smoothedEle": 28.55946992961803,
        "gradeBand": "descent"
      },
      {
        "lat": 22.383898,
        "lng": 120.912696,
        "ele": 28.25,
        "distanceKm": 29.096084609988598,
        "gradePct": -4.410015895292198,
        "smoothedEle": 26.538233555773896,
        "gradeBand": "descent"
      },
      {
        "lat": 22.383502999999997,
        "lng": 120.91260933333334,
        "ele": 25.083333333333332,
        "distanceKm": 29.140901454715213,
        "gradePct": -4.530641556948484,
        "smoothedEle": 24.441499386357197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.383108,
        "lng": 120.91252266666666,
        "ele": 21.916666666666668,
        "distanceKm": 29.185718304471987,
        "gradePct": -4.555869164645184,
        "smoothedEle": 22.476630944368267,
        "gradeBand": "descent"
      },
      {
        "lat": 22.382713,
        "lng": 120.912436,
        "ele": 18.75,
        "distanceKm": 29.230535159259045,
        "gradePct": -4.472740092539778,
        "smoothedEle": 20.7033376771156,
        "gradeBand": "descent"
      },
      {
        "lat": 22.382087,
        "lng": 120.912347,
        "ele": 13.75,
        "distanceKm": 29.300742192729796,
        "gradePct": -3.9781618555454,
        "smoothedEle": 19.155246255585862,
        "gradeBand": "descent"
      },
      {
        "lat": 22.38158051771866,
        "lng": 120.91229876425855,
        "ele": 10.861140684642585,
        "distanceKm": 29.357278482324023,
        "gradePct": -3.4559970498302226,
        "smoothedEle": 18.06429259523208,
        "gradeBand": "descent"
      },
      {
        "lat": 22.381074,
        "lng": 120.912251,
        "ele": 6.75,
        "distanceKm": 29.413814467107525,
        "gradePct": -2.907891059138564,
        "smoothedEle": 16.98507768124069,
        "gradeBand": "descent"
      },
      {
        "lat": 22.380595,
        "lng": 120.91218833333333,
        "ele": 8.583333333333334,
        "distanceKm": 29.46746523053519,
        "gradePct": -2.3519041725929153,
        "smoothedEle": 16.221172999196614,
        "gradeBand": "descent"
      },
      {
        "lat": 22.380116,
        "lng": 120.91212566666667,
        "ele": 10.416666666666666,
        "distanceKm": 29.521115996626367,
        "gradePct": -1.772837470353076,
        "smoothedEle": 15.757518480675019,
        "gradeBand": "descent"
      },
      {
        "lat": 22.379637,
        "lng": 120.912063,
        "ele": 12.25,
        "distanceKm": 29.574766765381796,
        "gradePct": -1.3553094781189725,
        "smoothedEle": 15.662085737206503,
        "gradeBand": "descent"
      },
      {
        "lat": 22.379121,
        "lng": 120.911978,
        "ele": 22,
        "distanceKm": 29.632805234929915,
        "gradePct": -0.8946215698706177,
        "smoothedEle": 15.852676400989244,
        "gradeBand": "descent"
      },
      {
        "lat": 22.37848,
        "lng": 120.91181,
        "ele": 20.25,
        "distanceKm": 29.706144592046382,
        "gradePct": -0.33692901982011064,
        "smoothedEle": 16.12070079905301,
        "gradeBand": "descent"
      },
      {
        "lat": 22.378065,
        "lng": 120.911679,
        "ele": 17,
        "distanceKm": 29.754216188470384,
        "gradePct": -0.02945038867952351,
        "smoothedEle": 16.32146789556777,
        "gradeBand": "descent"
      },
      {
        "lat": 22.37760425,
        "lng": 120.91155350000001,
        "ele": 18.437499999999975,
        "distanceKm": 29.80704940928503,
        "gradePct": 0.3412287902657097,
        "smoothedEle": 16.90276950480637,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3771435,
        "lng": 120.911428,
        "ele": 19.87500000000005,
        "distanceKm": 29.859882640535258,
        "gradePct": 0.6084137449298657,
        "smoothedEle": 17.513802508156793,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.376682749999997,
        "lng": 120.91130249999999,
        "ele": 21.312500000000025,
        "distanceKm": 29.91271588222015,
        "gradePct": 0.7696122773665017,
        "smoothedEle": 18.09554245374653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.376222,
        "lng": 120.911177,
        "ele": 22.75,
        "distanceKm": 29.9655491343388,
        "gradePct": 0.8869025079531565,
        "smoothedEle": 18.633049057928492,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.375884,
        "lng": 120.91108,
        "ele": 20,
        "distanceKm": 30.004433951406863,
        "gradePct": 0.833737514341232,
        "smoothedEle": 18.61566167249932,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3755105,
        "lng": 120.9110075,
        "ele": 16.75000000000014,
        "distanceKm": 30.046629046676923,
        "gradePct": 0.6854196012866439,
        "smoothedEle": 18.34603962136016,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.375137,
        "lng": 120.910935,
        "ele": 13.5,
        "distanceKm": 30.088824145481748,
        "gradePct": 0.4647135534421926,
        "smoothedEle": 18.096385286764946,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.374726,
        "lng": 120.910864,
        "ele": 14.874999999999947,
        "distanceKm": 30.13510475166485,
        "gradePct": 0.21600147138722955,
        "smoothedEle": 17.875242813046764,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.374315,
        "lng": 120.910793,
        "ele": 16.25,
        "distanceKm": 30.181385361248786,
        "gradePct": 0.02420828112752928,
        "smoothedEle": 17.823191009777968,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.373934666666667,
        "lng": 120.91073166666666,
        "ele": 17.416666666666632,
        "distanceKm": 30.224144193345445,
        "gradePct": -0.12152615773227847,
        "smoothedEle": 17.84723152907569,
        "gradeBand": "descent"
      },
      {
        "lat": 22.37355433333333,
        "lng": 120.91067033333333,
        "ele": 18.583333333333368,
        "distanceKm": 30.266903027984146,
        "gradePct": -0.2753127004287332,
        "smoothedEle": 17.806505561724254,
        "gradeBand": "descent"
      },
      {
        "lat": 22.373174,
        "lng": 120.910609,
        "ele": 19.75,
        "distanceKm": 30.30966186516407,
        "gradePct": -0.3243040033869839,
        "smoothedEle": 17.60934386430959,
        "gradeBand": "descent"
      },
      {
        "lat": 22.37277725,
        "lng": 120.910539,
        "ele": 18.437499999999947,
        "distanceKm": 30.354361822519017,
        "gradePct": -0.36335120243299374,
        "smoothedEle": 17.210233756995457,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3723805,
        "lng": 120.910469,
        "ele": 17.125,
        "distanceKm": 30.399061783177448,
        "gradePct": -0.3852917012432533,
        "smoothedEle": 16.891591711308596,
        "gradeBand": "descent"
      },
      {
        "lat": 22.371983750000002,
        "lng": 120.910399,
        "ele": 15.812500000000053,
        "distanceKm": 30.443761747139163,
        "gradePct": -0.35406736733324035,
        "smoothedEle": 16.80330418792475,
        "gradeBand": "descent"
      },
      {
        "lat": 22.371587,
        "lng": 120.910329,
        "ele": 14.5,
        "distanceKm": 30.488461714404423,
        "gradePct": -0.29833702179886074,
        "smoothedEle": 16.932158519011555,
        "gradeBand": "descent"
      },
      {
        "lat": 22.371149,
        "lng": 120.910259,
        "ele": 17.125000000000096,
        "distanceKm": 30.537694166251885,
        "gradePct": -0.27344783652238347,
        "smoothedEle": 17.013982247897516,
        "gradeBand": "descent"
      },
      {
        "lat": 22.370711,
        "lng": 120.910189,
        "ele": 19.75,
        "distanceKm": 30.58692662140975,
        "gradePct": -0.22650130565637924,
        "smoothedEle": 17.034672528050642,
        "gradeBand": "descent"
      },
      {
        "lat": 22.370299227719048,
        "lng": 120.91009367072957,
        "ele": 19.206845043748885,
        "distanceKm": 30.63375120019498,
        "gradePct": -0.1249865681320701,
        "smoothedEle": 17.0192990086465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.369889613859524,
        "lng": 120.90998783536479,
        "ele": 17.103422521874442,
        "distanceKm": 30.68058033048892,
        "gradePct": -0.0328623210898773,
        "smoothedEle": 16.92474911213221,
        "gradeBand": "descent"
      },
      {
        "lat": 22.36948,
        "lng": 120.909882,
        "ele": 15,
        "distanceKm": 30.727409468224387,
        "gradePct": 0.006643812426562556,
        "smoothedEle": 16.8555332397686,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.369186,
        "lng": 120.909756,
        "ele": 15,
        "distanceKm": 30.76257464765667,
        "gradePct": -0.005075570931403195,
        "smoothedEle": 16.842308470370437,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3688495,
        "lng": 120.909598,
        "ele": 15.375,
        "distanceKm": 30.803366819900983,
        "gradePct": -0.07064468146516592,
        "smoothedEle": 16.74499657645949,
        "gradeBand": "descent"
      },
      {
        "lat": 22.368513,
        "lng": 120.90944,
        "ele": 15.75,
        "distanceKm": 30.844159007785,
        "gradePct": -0.12331595559509359,
        "smoothedEle": 16.64675127552745,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3681345,
        "lng": 120.909311,
        "ele": 16.24999999999998,
        "distanceKm": 30.88828723627576,
        "gradePct": -0.16459244554956798,
        "smoothedEle": 16.540448472187652,
        "gradeBand": "descent"
      },
      {
        "lat": 22.367756,
        "lng": 120.909182,
        "ele": 16.75,
        "distanceKm": 30.932415475606394,
        "gradePct": -0.306404087046788,
        "smoothedEle": 16.10052529470536,
        "gradeBand": "descent"
      },
      {
        "lat": 22.367283,
        "lng": 120.909033,
        "ele": 17.5,
        "distanceKm": 30.987196965433586,
        "gradePct": -0.6033118923035397,
        "smoothedEle": 15.105033708710423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.366832,
        "lng": 120.90888,
        "ele": 17.5,
        "distanceKm": 31.03975592276305,
        "gradePct": -0.9220772676624198,
        "smoothedEle": 14.084658235273631,
        "gradeBand": "descent"
      },
      {
        "lat": 22.36650830033201,
        "lng": 120.90875226112776,
        "ele": 18.162532728698533,
        "distanceKm": 31.07807160476071,
        "gradePct": -1.1072935781488447,
        "smoothedEle": 13.483458921499924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.366189,
        "lng": 120.908612,
        "ele": 17.75,
        "distanceKm": 31.116393951284344,
        "gradePct": -1.2351314593412712,
        "smoothedEle": 13.008227209511844,
        "gradeBand": "descent"
      },
      {
        "lat": 22.365831,
        "lng": 120.908394,
        "ele": 15,
        "distanceKm": 31.16207966129168,
        "gradePct": -1.386955206005244,
        "smoothedEle": 12.442715655664927,
        "gradeBand": "descent"
      },
      {
        "lat": 22.365482999999998,
        "lng": 120.908214,
        "ele": 13.75,
        "distanceKm": 31.204974555681364,
        "gradePct": -1.4942897044616976,
        "smoothedEle": 11.891220159162373,
        "gradeBand": "descent"
      },
      {
        "lat": 22.365135,
        "lng": 120.908034,
        "ele": 12.5,
        "distanceKm": 31.247869470031276,
        "gradePct": -1.4920803218468506,
        "smoothedEle": 11.34345367872956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.364577,
        "lng": 120.907746,
        "ele": 7.5,
        "distanceKm": 31.316621770698497,
        "gradePct": -1.3590755576513207,
        "smoothedEle": 10.456556175227362,
        "gradeBand": "descent"
      },
      {
        "lat": 22.364222,
        "lng": 120.907569,
        "ele": 3.75,
        "distanceKm": 31.360090127617134,
        "gradePct": -1.295632842436376,
        "smoothedEle": 9.878702095857886,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363818000000002,
        "lng": 120.9074335,
        "ele": 4.749999999999961,
        "distanceKm": 31.40712422598733,
        "gradePct": -1.2644030759913114,
        "smoothedEle": 9.329970948205583,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363414,
        "lng": 120.907298,
        "ele": 5.75,
        "distanceKm": 31.454158336332927,
        "gradePct": -1.2514384344129375,
        "smoothedEle": 8.786452911645002,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3635675,
        "lng": 120.906835,
        "ele": 5.75,
        "distanceKm": 31.50473656773259,
        "gradePct": -1.2281937186447471,
        "smoothedEle": 8.20969879120147,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363721,
        "lng": 120.906372,
        "ele": 5.75,
        "distanceKm": 31.555314749731775,
        "gradePct": -1.1437356104558887,
        "smoothedEle": 7.816203516227289,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363803,
        "lng": 120.905963,
        "ele": 6.25,
        "distanceKm": 31.59834995437827,
        "gradePct": -1.0292015898300813,
        "smoothedEle": 7.604655929390753,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363801,
        "lng": 120.905464,
        "ele": 6.75,
        "distanceKm": 31.649663464642607,
        "gradePct": -0.8339917033806398,
        "smoothedEle": 7.5153356233812625,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363736,
        "lng": 120.904978,
        "ele": 7,
        "distanceKm": 31.700159630112466,
        "gradePct": -0.5322113366947422,
        "smoothedEle": 7.814590556661454,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363741,
        "lng": 120.904403,
        "ele": 8.75,
        "distanceKm": 31.759290509976122,
        "gradePct": -0.0061524190664705575,
        "smoothedEle": 8.709472408107573,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363692,
        "lng": 120.90372,
        "ele": 9.25,
        "distanceKm": 31.82973564264829,
        "gradePct": 0.6165953306997733,
        "smoothedEle": 9.864993453853394,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3637343008006,
        "lng": 120.90329699347592,
        "ele": 9.420869176332223,
        "distanceKm": 31.873487730073904,
        "gradePct": 0.8696035768706796,
        "smoothedEle": 10.335681567499602,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.36380127499857,
        "lng": 120.90287701993378,
        "ele": 9.798543225020365,
        "distanceKm": 31.91731174511707,
        "gradePct": 1.044373158617993,
        "smoothedEle": 10.704769030460547,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.363868,
        "lng": 120.902457,
        "ele": 10.25,
        "distanceKm": 31.961135741113473,
        "gradePct": 1.1372145832859244,
        "smoothedEle": 10.994967413477662,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.363992,
        "lng": 120.901916,
        "ele": 11.75,
        "distanceKm": 32.01845086592481,
        "gradePct": 1.0581986158032453,
        "smoothedEle": 11.266004455937358,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.364155,
        "lng": 120.901602,
        "ele": 13,
        "distanceKm": 32.0554791537807,
        "gradePct": 0.9167549915410621,
        "smoothedEle": 11.40205663290017,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.364487288450995,
        "lng": 120.90132553366175,
        "ele": 15.59824129270913,
        "distanceKm": 32.102099404871524,
        "gradePct": 0.7093658221979946,
        "smoothedEle": 11.539769971718336,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.364832,
        "lng": 120.901067,
        "ele": 19,
        "distanceKm": 32.14874685329175,
        "gradePct": 0.49769723946673555,
        "smoothedEle": 11.562609148192186,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.364376,
        "lng": 120.901409,
        "ele": 14.5,
        "distanceKm": 32.210454212102235,
        "gradePct": 0.27972112524023446,
        "smoothedEle": 11.486178011470427,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.364072,
        "lng": 120.901716,
        "ele": 12.5,
        "distanceKm": 32.2567065683061,
        "gradePct": 0.12653579750539645,
        "smoothedEle": 11.345245239906161,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3639542392784,
        "lng": 120.90208074637407,
        "ele": 11.293217077427386,
        "distanceKm": 32.29643403637286,
        "gradePct": 0.009590065769465616,
        "smoothedEle": 11.190659441323184,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.363868,
        "lng": 120.902457,
        "ele": 10.25,
        "distanceKm": 32.336295452797025,
        "gradePct": -0.11387397045949627,
        "smoothedEle": 10.9899484951212,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363786124598267,
        "lng": 120.90297202319582,
        "ele": 9.713108636854239,
        "distanceKm": 32.39003298505091,
        "gradePct": -0.2936774615426783,
        "smoothedEle": 10.623094129103755,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363704,
        "lng": 120.903487,
        "ele": 9.25,
        "distanceKm": 32.443770548315285,
        "gradePct": -0.47332943152434753,
        "smoothedEle": 10.140184392217856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3637081541443,
        "lng": 120.90394516899099,
        "ele": 9.085161792839276,
        "distanceKm": 32.49088715055954,
        "gradePct": -0.6514029862525238,
        "smoothedEle": 9.556204942643049,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363741,
        "lng": 120.904403,
        "ele": 8.75,
        "distanceKm": 32.53810818176356,
        "gradePct": -0.8752217297171896,
        "smoothedEle": 8.776250075315312,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363743,
        "lng": 120.904846,
        "ele": 7.25,
        "distanceKm": 32.58366319624584,
        "gradePct": -1.0264489914238977,
        "smoothedEle": 8.161005805582263,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363801,
        "lng": 120.905464,
        "ele": 6.75,
        "distanceKm": 32.64753962606352,
        "gradePct": -1.1273992837961275,
        "smoothedEle": 7.530989134931462,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363803,
        "lng": 120.905963,
        "ele": 6.25,
        "distanceKm": 32.698853136327855,
        "gradePct": -1.13840693104857,
        "smoothedEle": 7.128611518456402,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363721,
        "lng": 120.906372,
        "ele": 5.75,
        "distanceKm": 32.741888340974356,
        "gradePct": -1.1115448836519985,
        "smoothedEle": 6.822464096817985,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3635675,
        "lng": 120.906835,
        "ele": 5.75,
        "distanceKm": 32.79246652297354,
        "gradePct": -1.0181380042883394,
        "smoothedEle": 6.475704265208932,
        "gradeBand": "descent"
      },
      {
        "lat": 22.363414,
        "lng": 120.907298,
        "ele": 5.75,
        "distanceKm": 32.8430447543732,
        "gradePct": -0.8570944414378547,
        "smoothedEle": 6.1382957589118385,
        "gradeBand": "descent"
      },
      {
        "lat": 22.362755,
        "lng": 120.907202,
        "ele": 6,
        "distanceKm": 32.91698428925452,
        "gradePct": -0.6934152800160486,
        "smoothedEle": 5.75211222896374,
        "gradeBand": "descent"
      },
      {
        "lat": 22.362289377001204,
        "lng": 120.90713091442132,
        "ele": 6,
        "distanceKm": 32.96927275999157,
        "gradePct": -0.541940742057439,
        "smoothedEle": 5.7347453846136816,
        "gradeBand": "descent"
      },
      {
        "lat": 22.361822619603203,
        "lng": 120.90706865502197,
        "ele": 5.724136073849884,
        "distanceKm": 33.02156727818016,
        "gradePct": -0.37482631294706614,
        "smoothedEle": 5.842546826278316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.361356168348422,
        "lng": 120.90700375438624,
        "ele": 4.998693543810077,
        "distanceKm": 33.073861982352526,
        "gradePct": -0.21381691657698715,
        "smoothedEle": 5.961804706879242,
        "gradeBand": "descent"
      },
      {
        "lat": 22.360889445565615,
        "lng": 120.90694116959082,
        "ele": 4.66579569587337,
        "distanceKm": 33.12615679323441,
        "gradePct": -0.05693081784720539,
        "smoothedEle": 6.080163269638594,
        "gradeBand": "descent"
      },
      {
        "lat": 22.360422722782808,
        "lng": 120.90687858479542,
        "ele": 4.332897847936661,
        "distanceKm": 33.178451606770246,
        "gradePct": 0.1061812921004663,
        "smoothedEle": 6.27191091927,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.359956,
        "lng": 120.906816,
        "ele": 4,
        "distanceKm": 33.23074642296035,
        "gradePct": 0.23922395613725309,
        "smoothedEle": 6.465213207643494,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.359620974434524,
        "lng": 120.90672923788274,
        "ele": 5.69405293124784,
        "distanceKm": 33.269053150280016,
        "gradePct": 0.2990711501580722,
        "smoothedEle": 6.632031775214546,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.359281,
        "lng": 120.906667,
        "ele": 7.25,
        "distanceKm": 33.307394594786196,
        "gradePct": 0.3329334223275083,
        "smoothedEle": 6.812131111260283,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.358844,
        "lng": 120.90659,
        "ele": 8.5,
        "distanceKm": 33.356627779016584,
        "gradePct": 0.3785982876260566,
        "smoothedEle": 7.0582970324122245,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.358471,
        "lng": 120.906395,
        "ele": 8.5,
        "distanceKm": 33.40269684588133,
        "gradePct": 0.44224224744055546,
        "smoothedEle": 7.3537932399422425,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.358111,
        "lng": 120.905928,
        "ele": 7.5,
        "distanceKm": 33.46521687396499,
        "gradePct": 0.5404405757825292,
        "smoothedEle": 7.844705292998316,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.35778893786739,
        "lng": 120.90551105587367,
        "ele": 8.5,
        "distanceKm": 33.521081950152805,
        "gradePct": 0.6683825807939516,
        "smoothedEle": 8.434637242672956,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.357467,
        "lng": 120.905094,
        "ele": 8.5,
        "distanceKm": 33.5769470675952,
        "gradePct": 0.8545910567820652,
        "smoothedEle": 9.23288464575396,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.35714799767135,
        "lng": 120.90470115317822,
        "ele": 9.107728310264715,
        "distanceKm": 33.63070863025247,
        "gradePct": 1.0332594356622724,
        "smoothedEle": 10.02847959557846,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.356832,
        "lng": 120.904305,
        "ele": 9.75,
        "distanceKm": 33.68450742776071,
        "gradePct": 1.174110472682215,
        "smoothedEle": 10.759454092735139,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.356493,
        "lng": 120.904011,
        "ele": 9.75,
        "distanceKm": 33.7328294963087,
        "gradePct": 1.2540575635478326,
        "smoothedEle": 11.352569811593717,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.356193,
        "lng": 120.903731,
        "ele": 11.5,
        "distanceKm": 33.77689660374966,
        "gradePct": 1.3074970737387392,
        "smoothedEle": 11.890533780244198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.355771,
        "lng": 120.903318,
        "ele": 10.75,
        "distanceKm": 33.84018762343532,
        "gradePct": 1.3549519777594405,
        "smoothedEle": 12.772490974579513,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.355487,
        "lng": 120.90306,
        "ele": 13.75,
        "distanceKm": 33.88143338884154,
        "gradePct": 1.3672531346473265,
        "smoothedEle": 13.401035247244195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.355085,
        "lng": 120.902737,
        "ele": 15.5,
        "distanceKm": 33.93712427983121,
        "gradePct": 1.3791482379783904,
        "smoothedEle": 14.25309496094007,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.354807,
        "lng": 120.90256,
        "ele": 15.25,
        "distanceKm": 33.972997562960664,
        "gradePct": 1.3980352394997204,
        "smoothedEle": 14.797173088403467,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.354283,
        "lng": 120.90234,
        "ele": 16.5,
        "distanceKm": 34.03550212131167,
        "gradePct": 1.4247144167100367,
        "smoothedEle": 15.659340026296851,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.353736,
        "lng": 120.902137,
        "ele": 17.25,
        "distanceKm": 34.09980875974811,
        "gradePct": 1.365567436962239,
        "smoothedEle": 16.306515839204575,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.353271,
        "lng": 120.901916,
        "ele": 18,
        "distanceKm": 34.15628901740598,
        "gradePct": 1.2579761882151175,
        "smoothedEle": 16.791788702883313,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3527575,
        "lng": 120.9017415,
        "ele": 18.99999999999994,
        "distanceKm": 34.21614133901349,
        "gradePct": 1.0833494711321758,
        "smoothedEle": 17.182108493624046,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.352244,
        "lng": 120.901567,
        "ele": 20,
        "distanceKm": 34.27599368045042,
        "gradePct": 0.8066012172540469,
        "smoothedEle": 17.25830418107329,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.351825,
        "lng": 120.90139450000001,
        "ele": 19.87500000000001,
        "distanceKm": 34.3258475014639,
        "gradePct": 0.5050593177269427,
        "smoothedEle": 17.04134538774549,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.351406,
        "lng": 120.901222,
        "ele": 19.75,
        "distanceKm": 34.37570134146014,
        "gradePct": 0.24159760979079312,
        "smoothedEle": 16.788693933816088,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.351033,
        "lng": 120.901072,
        "ele": 18.125,
        "distanceKm": 34.41995295409526,
        "gradePct": 0.025924414514715964,
        "smoothedEle": 16.557366035346185,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.35066,
        "lng": 120.900922,
        "ele": 16.5,
        "distanceKm": 34.46420458112484,
        "gradePct": -0.16132526863369787,
        "smoothedEle": 16.359433303532217,
        "gradeBand": "descent"
      },
      {
        "lat": 22.350176,
        "lng": 120.900741,
        "ele": 17.25,
        "distanceKm": 34.521151183079674,
        "gradePct": -0.34180950769759344,
        "smoothedEle": 16.1630578081141,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3497825,
        "lng": 120.90061225,
        "ele": 15.687500000000062,
        "distanceKm": 34.56686600022531,
        "gradePct": -0.3990366442848284,
        "smoothedEle": 16.049574153618142,
        "gradeBand": "descent"
      },
      {
        "lat": 22.349389000000002,
        "lng": 120.9004835,
        "ele": 14.125000000000124,
        "distanceKm": 34.61258082819935,
        "gradePct": -0.38051010968557664,
        "smoothedEle": 15.957550280672498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3489955,
        "lng": 120.90035475,
        "ele": 12.562499999999938,
        "distanceKm": 34.65829566700324,
        "gradePct": -0.32871194716208124,
        "smoothedEle": 15.89076732472779,
        "gradeBand": "descent"
      },
      {
        "lat": 22.348602,
        "lng": 120.900226,
        "ele": 11,
        "distanceKm": 34.70401051663602,
        "gradePct": -0.2494923833014777,
        "smoothedEle": 15.892228911585955,
        "gradeBand": "descent"
      },
      {
        "lat": 22.348215500000002,
        "lng": 120.9000535,
        "ele": 12,
        "distanceKm": 34.75050499724426,
        "gradePct": -0.14944319516251844,
        "smoothedEle": 15.972380472013144,
        "gradeBand": "descent"
      },
      {
        "lat": 22.347829,
        "lng": 120.899881,
        "ele": 13,
        "distanceKm": 34.79699949662513,
        "gradePct": -0.023444155129386468,
        "smoothedEle": 16.176010371680864,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3474085,
        "lng": 120.89966999999999,
        "ele": 14.375,
        "distanceKm": 34.84854711844015,
        "gradePct": 0.1521355915232171,
        "smoothedEle": 16.5514561981563,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.346988,
        "lng": 120.899459,
        "ele": 15.75,
        "distanceKm": 34.90009476781588,
        "gradePct": 0.3048279593638003,
        "smoothedEle": 16.897168577621866,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3466295,
        "lng": 120.89927474999999,
        "ele": 16.9375,
        "distanceKm": 34.944232736262045,
        "gradePct": 0.39205945332289377,
        "smoothedEle": 17.08748965047902,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.346271,
        "lng": 120.8990905,
        "ele": 18.125,
        "distanceKm": 34.98837072563185,
        "gradePct": 0.4554684914458617,
        "smoothedEle": 17.258134353369996,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3459125,
        "lng": 120.89890625000001,
        "ele": 19.3125,
        "distanceKm": 35.03250873592636,
        "gradePct": 0.43233276035292373,
        "smoothedEle": 17.23835510450943,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.345554,
        "lng": 120.898722,
        "ele": 20.5,
        "distanceKm": 35.07664676714558,
        "gradePct": 0.38585329106651056,
        "smoothedEle": 17.244432297014022,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.345173499999998,
        "lng": 120.8985015,
        "ele": 21.625000000000085,
        "distanceKm": 35.124650697623025,
        "gradePct": 0.2794465114530941,
        "smoothedEle": 17.21574674349168,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.344793,
        "lng": 120.898281,
        "ele": 22.75,
        "distanceKm": 35.17265465734355,
        "gradePct": 0.13770773652776225,
        "smoothedEle": 17.126260391029536,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.344501,
        "lng": 120.898087,
        "ele": 22.5,
        "distanceKm": 35.21076397044236,
        "gradePct": 0.022038114715300802,
        "smoothedEle": 17.009288077009085,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.344183,
        "lng": 120.897861,
        "ele": 22,
        "distanceKm": 35.25307920590543,
        "gradePct": -0.09858938277505752,
        "smoothedEle": 16.82592340408649,
        "gradeBand": "descent"
      },
      {
        "lat": 22.343884499999998,
        "lng": 120.897641,
        "ele": 19.874999999999808,
        "distanceKm": 35.29324928732729,
        "gradePct": -0.22368174769219917,
        "smoothedEle": 16.58490291555531,
        "gradeBand": "descent"
      },
      {
        "lat": 22.343586,
        "lng": 120.897421,
        "ele": 17.75,
        "distanceKm": 35.33341939603846,
        "gradePct": -0.31733433203606215,
        "smoothedEle": 16.286477493622446,
        "gradeBand": "descent"
      },
      {
        "lat": 22.343123,
        "lng": 120.897044,
        "ele": 12.75,
        "distanceKm": 35.39787013102589,
        "gradePct": -0.5144239779879138,
        "smoothedEle": 15.688477986118706,
        "gradeBand": "descent"
      },
      {
        "lat": 22.342731,
        "lng": 120.896553,
        "ele": 11,
        "distanceKm": 35.46457842706874,
        "gradePct": -0.7647060185528523,
        "smoothedEle": 14.847197601502058,
        "gradeBand": "descent"
      },
      {
        "lat": 22.34252366666667,
        "lng": 120.896132,
        "ele": 11.083333333333329,
        "distanceKm": 35.513632355190175,
        "gradePct": -1.000214059491785,
        "smoothedEle": 13.99621632262937,
        "gradeBand": "descent"
      },
      {
        "lat": 22.342316333333333,
        "lng": 120.895711,
        "ele": 11.166666666666671,
        "distanceKm": 35.56268634015159,
        "gradePct": -1.2489649120613298,
        "smoothedEle": 13.021385862425532,
        "gradeBand": "descent"
      },
      {
        "lat": 22.342109,
        "lng": 120.89529,
        "ele": 11.25,
        "distanceKm": 35.61174038195471,
        "gradePct": -1.4745729112719106,
        "smoothedEle": 12.023813064427834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.341902,
        "lng": 120.894856,
        "ele": 11.25,
        "distanceKm": 35.66196157025891,
        "gradePct": -1.658443430188979,
        "smoothedEle": 11.0463215787978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.341694999999998,
        "lng": 120.89442199999999,
        "ele": 11.25,
        "distanceKm": 35.71218281747012,
        "gradePct": -1.760141413888898,
        "smoothedEle": 10.22755172190048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.341488,
        "lng": 120.893988,
        "ele": 11.25,
        "distanceKm": 35.762404123584886,
        "gradePct": -1.7406143535321008,
        "smoothedEle": 9.652775401273606,
        "gradeBand": "descent"
      },
      {
        "lat": 22.341155,
        "lng": 120.893575,
        "ele": 10.25,
        "distanceKm": 35.81875401718014,
        "gradePct": -1.534047468407538,
        "smoothedEle": 9.292293152426838,
        "gradeBand": "descent"
      },
      {
        "lat": 22.340866054063806,
        "lng": 120.89336657282078,
        "ele": 8.555994850554555,
        "distanceKm": 35.85737806134022,
        "gradePct": -1.315807519845213,
        "smoothedEle": 9.179452630222826,
        "gradeBand": "descent"
      },
      {
        "lat": 22.340563,
        "lng": 120.893182,
        "ele": 7.75,
        "distanceKm": 35.89605519798727,
        "gradePct": -1.0840977605076558,
        "smoothedEle": 9.090496818891115,
        "gradeBand": "descent"
      },
      {
        "lat": 22.340152461187404,
        "lng": 120.89316008637897,
        "ele": 7.3992813107020705,
        "distanceKm": 35.94176069670784,
        "gradePct": -0.8111470633999579,
        "smoothedEle": 9.00606467127267,
        "gradeBand": "descent"
      },
      {
        "lat": 22.339742,
        "lng": 120.893134,
        "ele": 7,
        "distanceKm": 35.987480750836504,
        "gradePct": -0.5559711878150353,
        "smoothedEle": 8.962362277942372,
        "gradeBand": "descent"
      },
      {
        "lat": 22.339182,
        "lng": 120.893084,
        "ele": 6.5,
        "distanceKm": 36.04996198008149,
        "gradePct": -0.19014255518444875,
        "smoothedEle": 9.224746450864176,
        "gradeBand": "descent"
      },
      {
        "lat": 22.338768,
        "lng": 120.893156,
        "ele": 7,
        "distanceKm": 36.09658854394249,
        "gradePct": 0.06909193936019348,
        "smoothedEle": 9.64136621500361,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.338337,
        "lng": 120.893387,
        "ele": 7,
        "distanceKm": 36.15007944356249,
        "gradePct": 0.32718450554193285,
        "smoothedEle": 10.182329129962268,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.338013,
        "lng": 120.89365,
        "ele": 8.5,
        "distanceKm": 36.19513104439088,
        "gradePct": 0.5074554468393936,
        "smoothedEle": 10.614988674379857,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.337696,
        "lng": 120.893884,
        "ele": 9.25,
        "distanceKm": 36.23781249496373,
        "gradePct": 0.6780674404963254,
        "smoothedEle": 11.047560538654738,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.337259,
        "lng": 120.894063,
        "ele": 9.75,
        "distanceKm": 36.28977544285732,
        "gradePct": 0.87455402900039,
        "smoothedEle": 11.595660712935839,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.33677,
        "lng": 120.894096,
        "ele": 10.5,
        "distanceKm": 36.344255665482805,
        "gradePct": 0.9782350659325354,
        "smoothedEle": 12.13548850557863,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.336365506461014,
        "lng": 120.8940681910692,
        "ele": 13.912914235183791,
        "distanceKm": 36.3893242074336,
        "gradePct": 0.9899299316047553,
        "smoothedEle": 12.546247384511842,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.335961043737704,
        "lng": 120.89403998608351,
        "ele": 17.355616300634907,
        "distanceKm": 36.43439193398946,
        "gradePct": 0.9688086726763887,
        "smoothedEle": 12.930104593086673,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.335557,
        "lng": 120.894006,
        "ele": 19.25,
        "distanceKm": 36.479455388482535,
        "gradePct": 0.925874658068317,
        "smoothedEle": 13.242069226840812,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.335140000000003,
        "lng": 120.89394166666666,
        "ele": 18.25,
        "distanceKm": 36.526293477160415,
        "gradePct": 0.8441220723805049,
        "smoothedEle": 13.463182761885149,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.334723,
        "lng": 120.89387733333334,
        "ele": 17.25,
        "distanceKm": 36.573131568633585,
        "gradePct": 0.6957547901717596,
        "smoothedEle": 13.507367099685034,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.334306,
        "lng": 120.893813,
        "ele": 16.25,
        "distanceKm": 36.61996966290164,
        "gradePct": 0.5212032182523223,
        "smoothedEle": 13.458455620094314,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.333861,
        "lng": 120.893701,
        "ele": 15.25,
        "distanceKm": 36.67077469198284,
        "gradePct": 0.33638157727336826,
        "smoothedEle": 13.386330108964897,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.333475999999997,
        "lng": 120.893609,
        "ele": 14.374999999999927,
        "distanceKm": 36.714618109785434,
        "gradePct": 0.1802335916007109,
        "smoothedEle": 13.30238495838804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.333091,
        "lng": 120.893517,
        "ele": 13.5,
        "distanceKm": 36.758461533225265,
        "gradePct": 0.004402550632203078,
        "smoothedEle": 13.109940919919017,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.332706,
        "lng": 120.893425,
        "ele": 12.625000000000073,
        "distanceKm": 36.80230496230296,
        "gradePct": -0.2112578693105886,
        "smoothedEle": 12.716164026530004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.332321,
        "lng": 120.893333,
        "ele": 11.75,
        "distanceKm": 36.8461483970182,
        "gradePct": -0.4444619899411038,
        "smoothedEle": 12.148526771409719,
        "gradeBand": "descent"
      },
      {
        "lat": 22.331877,
        "lng": 120.893129,
        "ele": 9.75,
        "distanceKm": 36.899792787365946,
        "gradePct": -0.6994253398758832,
        "smoothedEle": 11.381249647217956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.33159,
        "lng": 120.892906,
        "ele": 7.75,
        "distanceKm": 36.93909333868527,
        "gradePct": -0.8559099513493391,
        "smoothedEle": 10.86357678265802,
        "gradeBand": "descent"
      },
      {
        "lat": 22.33117,
        "lng": 120.892557,
        "ele": 8.5,
        "distanceKm": 36.99799697131466,
        "gradePct": -1.0447446718177578,
        "smoothedEle": 10.199974738651857,
        "gradeBand": "descent"
      },
      {
        "lat": 22.33087,
        "lng": 120.892372,
        "ele": 8.5,
        "distanceKm": 37.03640099427409,
        "gradePct": -1.1256059833193917,
        "smoothedEle": 9.829954350210938,
        "gradeBand": "descent"
      },
      {
        "lat": 22.330565,
        "lng": 120.892253,
        "ele": 8.75,
        "distanceKm": 37.07245661703978,
        "gradePct": -1.151736615635266,
        "smoothedEle": 9.529035142217511,
        "gradeBand": "descent"
      },
      {
        "lat": 22.330236,
        "lng": 120.892178,
        "ele": 8.5,
        "distanceKm": 37.10984429505419,
        "gradePct": -1.1174701295916087,
        "smoothedEle": 9.266142531870322,
        "gradeBand": "descent"
      },
      {
        "lat": 22.329832916972418,
        "lng": 120.89215992213214,
        "ele": 8.390076147948646,
        "distanceKm": 37.15470369800678,
        "gradePct": -1.0036380677597705,
        "smoothedEle": 9.015245873373317,
        "gradeBand": "descent"
      },
      {
        "lat": 22.32942827798161,
        "lng": 120.89215628142142,
        "ele": 8.260050765299091,
        "distanceKm": 37.199699121346754,
        "gradePct": -0.8494194492250497,
        "smoothedEle": 8.834331007075576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.329023638990805,
        "lng": 120.89215264071072,
        "ele": 8.130025382649535,
        "distanceKm": 37.24469454469536,
        "gradePct": -0.6924126070972351,
        "smoothedEle": 8.723236371741907,
        "gradeBand": "descent"
      },
      {
        "lat": 22.328619,
        "lng": 120.892149,
        "ele": 8,
        "distanceKm": 37.289689968053025,
        "gradePct": -0.5175193118141682,
        "smoothedEle": 8.74100261613656,
        "gradeBand": "descent"
      },
      {
        "lat": 22.328192166666668,
        "lng": 120.89214133333334,
        "ele": 8.291666666666645,
        "distanceKm": 37.337158285444445,
        "gradePct": -0.3071051233068852,
        "smoothedEle": 8.902318649597744,
        "gradeBand": "descent"
      },
      {
        "lat": 22.327765333333332,
        "lng": 120.89213366666667,
        "ele": 8.583333333333334,
        "distanceKm": 37.38462660287637,
        "gradePct": -0.1296497562757555,
        "smoothedEle": 9.05451224286853,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3273385,
        "lng": 120.892126,
        "ele": 8.875000000000023,
        "distanceKm": 37.43209492034795,
        "gradePct": 0.025697731695099205,
        "smoothedEle": 9.218788962883108,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.326911666666668,
        "lng": 120.89211833333334,
        "ele": 9.166666666666666,
        "distanceKm": 37.479563237859615,
        "gradePct": 0.15961789611076774,
        "smoothedEle": 9.394145833195982,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.326484833333332,
        "lng": 120.89211066666667,
        "ele": 9.45833333333331,
        "distanceKm": 37.52703155541178,
        "gradePct": 0.2789569834388148,
        "smoothedEle": 9.603717609668236,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.326058,
        "lng": 120.892103,
        "ele": 9.75,
        "distanceKm": 37.5744998730036,
        "gradePct": 0.3685234882510405,
        "smoothedEle": 9.840575338877537,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.325605666666668,
        "lng": 120.89207666666667,
        "ele": 10.083333333333318,
        "distanceKm": 37.62486999520532,
        "gradePct": 0.4205998277840383,
        "smoothedEle": 10.122357684121448,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.325153333333333,
        "lng": 120.89205033333334,
        "ele": 10.416666666666682,
        "distanceKm": 37.67524011787957,
        "gradePct": 0.4717532442958748,
        "smoothedEle": 10.439676894296944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.324701,
        "lng": 120.892024,
        "ele": 10.75,
        "distanceKm": 37.725610241025706,
        "gradePct": 0.5258753634303034,
        "smoothedEle": 10.773973098073279,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3242222,
        "lng": 120.8919776,
        "ele": 11.10000000000002,
        "distanceKm": 37.77906394435773,
        "gradePct": 0.5816428925233388,
        "smoothedEle": 11.137230026898694,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3237434,
        "lng": 120.8919312,
        "ele": 11.44999999999999,
        "distanceKm": 37.832517649152045,
        "gradePct": 0.6182004231478206,
        "smoothedEle": 11.485693426419688,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.323264599999998,
        "lng": 120.8918848,
        "ele": 11.80000000000001,
        "distanceKm": 37.885971355409026,
        "gradePct": 0.6341824283437709,
        "smoothedEle": 11.807296802456186,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3227858,
        "lng": 120.8918384,
        "ele": 12.14999999999998,
        "distanceKm": 37.93942506312786,
        "gradePct": 0.562435840438102,
        "smoothedEle": 11.901358503208698,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.322307,
        "lng": 120.891792,
        "ele": 12.5,
        "distanceKm": 37.992878772308906,
        "gradePct": 0.41681416843195723,
        "smoothedEle": 11.807183540935952,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.321863666666665,
        "lng": 120.89174266666666,
        "ele": 12.916666666666666,
        "distanceKm": 38.04243575512532,
        "gradePct": 0.3155136569125023,
        "smoothedEle": 11.834855717690942,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.321420333333332,
        "lng": 120.89169333333334,
        "ele": 13.333333333333334,
        "distanceKm": 38.09199273959238,
        "gradePct": 0.24040911316540434,
        "smoothedEle": 11.942739867608102,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.320977,
        "lng": 120.891644,
        "ele": 13.75,
        "distanceKm": 38.14154972571035,
        "gradePct": 0.18269544573743163,
        "smoothedEle": 12.088121109016086,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.320559,
        "lng": 120.8916065,
        "ele": 13.75,
        "distanceKm": 38.18818905834245,
        "gradePct": 0.16375963942043228,
        "smoothedEle": 12.302478179846775,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.320141,
        "lng": 120.891569,
        "ele": 13.75,
        "distanceKm": 38.23482839192999,
        "gradePct": 0.23311637884897354,
        "smoothedEle": 12.592618945273543,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.319682,
        "lng": 120.8915355,
        "ele": 11,
        "distanceKm": 38.285983130760854,
        "gradePct": 0.3776090710679707,
        "smoothedEle": 12.952159523469113,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.319223,
        "lng": 120.891502,
        "ele": 8.25,
        "distanceKm": 38.33713787035515,
        "gradePct": 0.4893243269364149,
        "smoothedEle": 13.299870406944558,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3188205,
        "lng": 120.89147750000001,
        "ele": 10.125,
        "distanceKm": 38.38196478914072,
        "gradePct": 0.5577837170986808,
        "smoothedEle": 13.594260455129458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.318418,
        "lng": 120.891453,
        "ele": 12,
        "distanceKm": 38.42679170833497,
        "gradePct": 0.6105659952915325,
        "smoothedEle": 13.876524716946745,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.317982,
        "lng": 120.891434,
        "ele": 12.5,
        "distanceKm": 38.475312142536694,
        "gradePct": 0.6412265104385411,
        "smoothedEle": 14.166974661198344,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.317567666666665,
        "lng": 120.89142,
        "ele": 13.999999999999922,
        "distanceKm": 38.52140647300924,
        "gradePct": 0.6376110379744293,
        "smoothedEle": 14.421955029337864,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.317153333333334,
        "lng": 120.891406,
        "ele": 15.500000000000078,
        "distanceKm": 38.56750080361491,
        "gradePct": 0.6151782633770525,
        "smoothedEle": 14.667791459234765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.316739,
        "lng": 120.891392,
        "ele": 17,
        "distanceKm": 38.613595134354576,
        "gradePct": 0.5912610122411925,
        "smoothedEle": 14.913627889846303,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.316325199999998,
        "lng": 120.8913646,
        "ele": 17.150000000000006,
        "distanceKm": 38.65969390415153,
        "gradePct": 0.6001809215939836,
        "smoothedEle": 15.248544519052459,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.315911399999997,
        "lng": 120.8913372,
        "ele": 17.300000000000008,
        "distanceKm": 38.70579267445944,
        "gradePct": 0.6632175134289953,
        "smoothedEle": 15.733951422795554,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3154976,
        "lng": 120.8913098,
        "ele": 17.449999999999992,
        "distanceKm": 38.751891445277714,
        "gradePct": 0.7492479093975787,
        "smoothedEle": 16.27451889766925,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3150838,
        "lng": 120.8912824,
        "ele": 17.599999999999994,
        "distanceKm": 38.79799021660732,
        "gradePct": 0.8014122263547391,
        "smoothedEle": 16.696659819846534,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.31467,
        "lng": 120.891255,
        "ele": 17.75,
        "distanceKm": 38.84408898844767,
        "gradePct": 0.8317101945350726,
        "smoothedEle": 17.0380590286147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.314287999999998,
        "lng": 120.89122449999999,
        "ele": 17.75,
        "distanceKm": 38.886681224468994,
        "gradePct": 0.8464912700829037,
        "smoothedEle": 17.309560847371902,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.313906,
        "lng": 120.891194,
        "ele": 17.75,
        "distanceKm": 38.92927346112223,
        "gradePct": 0.8284815457515394,
        "smoothedEle": 17.512978654655797,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3135665,
        "lng": 120.89117999999999,
        "ele": 17.75,
        "distanceKm": 38.96705165138921,
        "gradePct": 0.7775393632376272,
        "smoothedEle": 17.65863758871193,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.313227,
        "lng": 120.891166,
        "ele": 17.75,
        "distanceKm": 39.00482984178965,
        "gradePct": 0.6785221201307963,
        "smoothedEle": 17.759379429779766,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.312793,
        "lng": 120.89112533333333,
        "ele": 17.75,
        "distanceKm": 39.053269485898824,
        "gradePct": 0.5502181589631079,
        "smoothedEle": 17.937792525173982,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.312359,
        "lng": 120.89108466666666,
        "ele": 17.75,
        "distanceKm": 39.10170913113081,
        "gradePct": 0.39128249356723915,
        "smoothedEle": 17.89804891228998,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.311925,
        "lng": 120.891044,
        "ele": 17.75,
        "distanceKm": 39.15014877748614,
        "gradePct": 0.16191922135407602,
        "smoothedEle": 17.562444477900623,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.31145,
        "lng": 120.890973,
        "ele": 17.75,
        "distanceKm": 39.20346904341244,
        "gradePct": -0.09042772750347998,
        "smoothedEle": 17.118455218023517,
        "gradeBand": "descent"
      },
      {
        "lat": 22.31103,
        "lng": 120.890812,
        "ele": 17.75,
        "distanceKm": 39.25302078792886,
        "gradePct": -0.32121536432294984,
        "smoothedEle": 16.640893599547475,
        "gradeBand": "descent"
      },
      {
        "lat": 22.310684,
        "lng": 120.89065,
        "ele": 18,
        "distanceKm": 39.29494851648749,
        "gradePct": -0.5177802145238106,
        "smoothedEle": 16.179688585402587,
        "gradeBand": "descent"
      },
      {
        "lat": 22.3102435,
        "lng": 120.8903115,
        "ele": 19.00000000000006,
        "distanceKm": 39.35504628932824,
        "gradePct": -0.8409734215989694,
        "smoothedEle": 15.413414434100055,
        "gradeBand": "descent"
      },
      {
        "lat": 22.309803,
        "lng": 120.889973,
        "ele": 20,
        "distanceKm": 39.415144125821044,
        "gradePct": -1.0163056181564616,
        "smoothedEle": 14.756050375081523,
        "gradeBand": "descent"
      },
      {
        "lat": 22.309492,
        "lng": 120.88969399999999,
        "ele": 15.875,
        "distanceKm": 39.4600846468404,
        "gradePct": -1.0573100858327564,
        "smoothedEle": 14.307779837814472,
        "gradeBand": "descent"
      },
      {
        "lat": 22.309181,
        "lng": 120.889415,
        "ele": 11.75,
        "distanceKm": 39.50502520868387,
        "gradePct": -1.067420339979833,
        "smoothedEle": 13.901196445474257,
        "gradeBand": "descent"
      },
      {
        "lat": 22.308712,
        "lng": 120.889005,
        "ele": 11.25,
        "distanceKm": 39.572096985716136,
        "gradePct": -1.027379075329469,
        "smoothedEle": 13.348918197899037,
        "gradeBand": "descent"
      },
      {
        "lat": 22.308145,
        "lng": 120.888696,
        "ele": 9.5,
        "distanceKm": 39.642704733569815,
        "gradePct": -0.9196668589281587,
        "smoothedEle": 12.811774350350829,
        "gradeBand": "descent"
      },
      {
        "lat": 22.307547,
        "lng": 120.8885,
        "ele": 8,
        "distanceKm": 39.71218919503245,
        "gradePct": -0.8365922308499073,
        "smoothedEle": 12.27859540009547,
        "gradeBand": "descent"
      },
      {
        "lat": 22.307173,
        "lng": 120.888499,
        "ele": 9.5,
        "distanceKm": 39.753776282278196,
        "gradePct": -0.7887895109397519,
        "smoothedEle": 12.004335674972092,
        "gradeBand": "descent"
      },
      {
        "lat": 22.30672261638904,
        "lng": 120.88869080917571,
        "ele": 10.260390800124954,
        "distanceKm": 39.80760384793173,
        "gradePct": -0.7257592297262497,
        "smoothedEle": 11.702685885661216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.30627639921146,
        "lng": 120.88889476197657,
        "ele": 10.964647709183406,
        "distanceKm": 39.861474830325854,
        "gradePct": -0.4972055407797313,
        "smoothedEle": 11.944765865667948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.30582873777111,
        "lng": 120.88909497968989,
        "ele": 11.608909262442115,
        "distanceKm": 39.915345708028106,
        "gradePct": -0.13875195173474603,
        "smoothedEle": 12.60365050177986,
        "gradeBand": "descent"
      },
      {
        "lat": 22.305381,
        "lng": 120.889295,
        "ele": 12.25,
        "distanceKm": 39.969216693582354,
        "gradePct": 0.20785850801966316,
        "smoothedEle": 13.231914189493407,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.305057,
        "lng": 120.889438,
        "ele": 11.75,
        "distanceKm": 40.00813168369358,
        "gradePct": 0.46124207551967583,
        "smoothedEle": 13.693456352185486,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.304446,
        "lng": 120.889481,
        "ele": 12.75,
        "distanceKm": 40.07621573854143,
        "gradePct": 0.8498774852956468,
        "smoothedEle": 14.428217371524584,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.304029,
        "lng": 120.889277,
        "ele": 14.75,
        "distanceKm": 40.12711232457159,
        "gradePct": 1.0240759798243486,
        "smoothedEle": 14.862579047208504,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.303658,
        "lng": 120.889121,
        "ele": 16.25,
        "distanceKm": 40.17137743475661,
        "gradePct": 1.0315673437092463,
        "smoothedEle": 15.160584800681677,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.303262,
        "lng": 120.888954,
        "ele": 20.25,
        "distanceKm": 40.21864360618122,
        "gradePct": 0.9292047891162524,
        "smoothedEle": 15.429726197319681,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.30287,
        "lng": 120.88887,
        "ele": 21,
        "distanceKm": 40.26308044404343,
        "gradePct": 0.8262871675960487,
        "smoothedEle": 15.639212443078122,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.3024154831289,
        "lng": 120.88883953960521,
        "ele": 20.104106035939058,
        "distanceKm": 40.313717540298626,
        "gradePct": 0.7024921059381355,
        "smoothedEle": 15.86121506214267,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.30196098476187,
        "lng": 120.88880876179182,
        "ele": 18.988089591436527,
        "distanceKm": 40.36435461500222,
        "gradePct": 0.6087035585367097,
        "smoothedEle": 16.126323167847627,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.30150651338429,
        "lng": 120.88877752086246,
        "ele": 17.268442480581175,
        "distanceKm": 40.41499169683169,
        "gradePct": 0.5900649460976478,
        "smoothedEle": 16.529334016817064,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.301052,
        "lng": 120.888747,
        "ele": 15,
        "distanceKm": 40.46562879336671,
        "gradePct": 0.5938996075614774,
        "smoothedEle": 16.90358207712162,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.300591666666666,
        "lng": 120.888724,
        "ele": 14.833333333333334,
        "distanceKm": 40.51687025689088,
        "gradePct": 0.5798249595909062,
        "smoothedEle": 17.159103331969227,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.300131333333333,
        "lng": 120.888701,
        "ele": 14.666666666666666,
        "distanceKm": 40.56811172077511,
        "gradePct": 0.5098102125813646,
        "smoothedEle": 17.19070115078028,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.299671,
        "lng": 120.888678,
        "ele": 14.5,
        "distanceKm": 40.61935318501938,
        "gradePct": 0.30630839575976165,
        "smoothedEle": 16.809645411501133,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.299139,
        "lng": 120.888675,
        "ele": 15,
        "distanceKm": 40.67850977283648,
        "gradePct": -0.02724307062534381,
        "smoothedEle": 16.15725214972954,
        "gradeBand": "descent"
      },
      {
        "lat": 22.298676500000003,
        "lng": 120.888715,
        "ele": 16.624999999999886,
        "distanceKm": 40.730101880652114,
        "gradePct": -0.36989634814741784,
        "smoothedEle": 15.531321142072438,
        "gradeBand": "descent"
      },
      {
        "lat": 22.298214,
        "lng": 120.888755,
        "ele": 18.25,
        "distanceKm": 40.78169398955477,
        "gradePct": -0.7023971875907242,
        "smoothedEle": 14.876501401256698,
        "gradeBand": "descent"
      },
      {
        "lat": 22.297811,
        "lng": 120.888748,
        "ele": 18.25,
        "distanceKm": 40.82651139332707,
        "gradePct": -0.9411524622867524,
        "smoothedEle": 14.34159110863773,
        "gradeBand": "descent"
      },
      {
        "lat": 22.297339,
        "lng": 120.888729,
        "ele": 18,
        "distanceKm": 40.879031859826775,
        "gradePct": -1.0833304416829146,
        "smoothedEle": 13.859502512069946,
        "gradeBand": "descent"
      },
      {
        "lat": 22.296831,
        "lng": 120.88865133333333,
        "ele": 15.833333333333425,
        "distanceKm": 40.93608130617059,
        "gradePct": -1.0707311158863142,
        "smoothedEle": 13.412970268595766,
        "gradeBand": "descent"
      },
      {
        "lat": 22.296323,
        "lng": 120.88857366666667,
        "ele": 13.666666666666575,
        "distanceKm": 40.99313075658316,
        "gradePct": -1.002430369187275,
        "smoothedEle": 12.972574858951383,
        "gradeBand": "descent"
      },
      {
        "lat": 22.295815,
        "lng": 120.888496,
        "ele": 11.5,
        "distanceKm": 41.05018021106482,
        "gradePct": -0.9273496949462955,
        "smoothedEle": 12.494432947212502,
        "gradeBand": "descent"
      },
      {
        "lat": 22.295366,
        "lng": 120.888359,
        "ele": 10,
        "distanceKm": 41.10205823047472,
        "gradePct": -0.8905936850268428,
        "smoothedEle": 11.961666506538387,
        "gradeBand": "descent"
      },
      {
        "lat": 22.294949,
        "lng": 120.888006,
        "ele": 7.75,
        "distanceKm": 41.16095629443639,
        "gradePct": -0.9243268974967482,
        "smoothedEle": 11.252438547514112,
        "gradeBand": "descent"
      },
      {
        "lat": 22.294777,
        "lng": 120.88768,
        "ele": 7.75,
        "distanceKm": 41.19956586674238,
        "gradePct": -0.9698856396048632,
        "smoothedEle": 10.789123679842186,
        "gradeBand": "descent"
      },
      {
        "lat": 22.29473349491526,
        "lng": 120.88728725491563,
        "ele": 8.250508473797884,
        "distanceKm": 41.24026106382692,
        "gradePct": -1.0108411354295603,
        "smoothedEle": 10.348181063566507,
        "gradeBand": "descent"
      },
      {
        "lat": 22.294725,
        "lng": 120.886891,
        "ele": 9,
        "distanceKm": 41.28103976127142,
        "gradePct": -1.033075838337882,
        "smoothedEle": 9.96668424367673,
        "gradeBand": "descent"
      },
      {
        "lat": 22.294722739522808,
        "lng": 120.88633266213328,
        "ele": 8.811626900569058,
        "distanceKm": 41.33848359267716,
        "gradePct": -0.9823790436230877,
        "smoothedEle": 9.645327314235224,
        "gradeBand": "descent"
      },
      {
        "lat": 22.294719586700666,
        "lng": 120.88577432973678,
        "ele": 8.44833758306326,
        "distanceKm": 41.39592738228101,
        "gradePct": -0.8445767126846304,
        "smoothedEle": 9.49089771912257,
        "gradeBand": "descent"
      },
      {
        "lat": 22.294716,
        "lng": 120.885216,
        "ele": 8,
        "distanceKm": 41.45337121433448,
        "gradePct": -0.6135827189019983,
        "smoothedEle": 9.503027024270487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.294727,
        "lng": 120.884798,
        "ele": 8.25,
        "distanceKm": 41.4963935552099,
        "gradePct": -0.40544696207445785,
        "smoothedEle": 9.610850532008595,
        "gradeBand": "descent"
      },
      {
        "lat": 22.294684,
        "lng": 120.884229,
        "ele": 9.25,
        "distanceKm": 41.55512873300924,
        "gradePct": -0.08830857930093064,
        "smoothedEle": 9.944163866944402,
        "gradeBand": "descent"
      },
      {
        "lat": 22.294569867328956,
        "lng": 120.88385493848318,
        "ele": 10.06331293532152,
        "distanceKm": 41.59565175810278,
        "gradePct": 0.11381865564250393,
        "smoothedEle": 10.22639659567073,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.294417,
        "lng": 120.883496,
        "ele": 11,
        "distanceKm": 41.63630464324,
        "gradePct": 0.2832679433692092,
        "smoothedEle": 10.50732079958338,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.294225,
        "lng": 120.883079,
        "ele": 11.75,
        "distanceKm": 41.68422538178813,
        "gradePct": 0.4880570913618088,
        "smoothedEle": 10.98652818506467,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.294061629393052,
        "lng": 120.8826363581291,
        "ele": 11.75,
        "distanceKm": 41.733255252164014,
        "gradePct": 0.7191754649984459,
        "smoothedEle": 11.656305919842675,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2939,
        "lng": 120.882193,
        "ele": 11.5,
        "distanceKm": 41.78228231977618,
        "gradePct": 0.9656602787684815,
        "smoothedEle": 12.472465489284147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.293611,
        "lng": 120.882295,
        "ele": 11.75,
        "distanceKm": 41.81608777403679,
        "gradePct": 1.108477576917974,
        "smoothedEle": 13.048045004228099,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.293451,
        "lng": 120.882274,
        "ele": 11.75,
        "distanceKm": 41.83400969493148,
        "gradePct": 1.178640215876145,
        "smoothedEle": 13.360237137309698,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.29310340280412,
        "lng": 120.88202705196089,
        "ele": 12.141285799806061,
        "distanceKm": 41.88026355541792,
        "gradePct": 1.3514146386041537,
        "smoothedEle": 14.17346553074278,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.29275970140206,
        "lng": 120.88177352598044,
        "ele": 12.695642899902987,
        "distanceKm": 41.926534181185495,
        "gradePct": 1.5310269815846522,
        "smoothedEle": 15.032884782988653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.292416,
        "lng": 120.88152,
        "ele": 13.25,
        "distanceKm": 41.972804843114524,
        "gradePct": 1.682081631028384,
        "smoothedEle": 15.918567691413728,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.291879,
        "lng": 120.881127,
        "ele": 16.5,
        "distanceKm": 42.044918450421335,
        "gradePct": 1.8132953020384313,
        "smoothedEle": 17.29035050873514,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.291574,
        "lng": 120.880858,
        "ele": 19.5,
        "distanceKm": 42.08869236699225,
        "gradePct": 1.829088453276782,
        "smoothedEle": 18.068869801632335,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.291352,
        "lng": 120.880582,
        "ele": 21,
        "distanceKm": 42.126318326893454,
        "gradePct": 1.8325751654805698,
        "smoothedEle": 18.723982319463868,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.291094,
        "lng": 120.880159,
        "ele": 21,
        "distanceKm": 42.178443657877665,
        "gradePct": 1.870278254444269,
        "smoothedEle": 19.75230313022139,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.29093592956464,
        "lng": 120.87973359777318,
        "ele": 21.16598144130169,
        "distanceKm": 42.2256087707263,
        "gradePct": 1.9280488630332702,
        "smoothedEle": 20.79984302523415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.29081646478232,
        "lng": 120.8792927988866,
        "ele": 22.582990720650955,
        "distanceKm": 42.27286602809198,
        "gradePct": 1.9812777310219323,
        "smoothedEle": 21.863564777174542,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.290697,
        "lng": 120.878852,
        "ele": 24,
        "distanceKm": 42.320123322660635,
        "gradePct": 2.00829215767597,
        "smoothedEle": 22.843561071739916,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.290572,
        "lng": 120.878206,
        "ele": 25.25,
        "distanceKm": 42.38802527186405,
        "gradePct": 2.000825790037215,
        "smoothedEle": 24.059482882044033,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2905812872761,
        "lng": 120.87767384252172,
        "ele": 25.088753198540058,
        "distanceKm": 42.442786408577625,
        "gradePct": 1.900112583773499,
        "smoothedEle": 24.749199947599294,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.290605,
        "lng": 120.877142,
        "ele": 24.75,
        "distanceKm": 42.497568887263945,
        "gradePct": 1.6974510646796872,
        "smoothedEle": 25.269428779437096,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.290571,
        "lng": 120.876777,
        "ele": 27,
        "distanceKm": 42.5353119929009,
        "gradePct": 1.5563740370383474,
        "smoothedEle": 25.687376636855078,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.290339,
        "lng": 120.876128,
        "ele": 29.25,
        "distanceKm": 42.60689492604697,
        "gradePct": 1.3939330518769923,
        "smoothedEle": 26.751036870886754,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.290147,
        "lng": 120.875726,
        "ele": 28.5,
        "distanceKm": 42.653440188942376,
        "gradePct": 1.2724753334092105,
        "smoothedEle": 27.257592984436958,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.290028,
        "lng": 120.875323,
        "ele": 27.75,
        "distanceKm": 42.696963503639196,
        "gradePct": 1.0899150742565817,
        "smoothedEle": 27.441805223573215,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.289987,
        "lng": 120.874725,
        "ele": 26,
        "distanceKm": 42.75865808399648,
        "gradePct": 0.8912313198540125,
        "smoothedEle": 27.573615513055397,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.289941,
        "lng": 120.874107,
        "ele": 26,
        "distanceKm": 42.82244713437367,
        "gradePct": 0.8975235755100962,
        "smoothedEle": 28.237488496614805,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.289833,
        "lng": 120.8737,
        "ele": 28,
        "distanceKm": 42.86600981725531,
        "gradePct": 0.9370240730607092,
        "smoothedEle": 28.954591872284492,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.289592,
        "lng": 120.87342,
        "ele": 30,
        "distanceKm": 42.90535501494169,
        "gradePct": 1.0018617040558446,
        "smoothedEle": 29.733740241071384,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.289016,
        "lng": 120.873182,
        "ele": 33.75,
        "distanceKm": 42.973924741667226,
        "gradePct": 1.3275255332017277,
        "smoothedEle": 31.326870363875525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.289315,
        "lng": 120.872913,
        "ele": 28.75,
        "distanceKm": 43.01718413894506,
        "gradePct": 1.5323620267522828,
        "smoothedEle": 32.0820926316897,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.289702,
        "lng": 120.872636,
        "ele": 25.5,
        "distanceKm": 43.068798289706585,
        "gradePct": 1.8328642286122976,
        "smoothedEle": 33.17774055246813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.29002,
        "lng": 120.872396,
        "ele": 26.5,
        "distanceKm": 43.11192671829962,
        "gradePct": 2.168460577869397,
        "smoothedEle": 34.633380906176505,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.29037,
        "lng": 120.872113,
        "ele": 32.25,
        "distanceKm": 43.160531415622955,
        "gradePct": 2.683982040725658,
        "smoothedEle": 36.916355754893914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.290283,
        "lng": 120.871773,
        "ele": 35.5,
        "distanceKm": 43.196825634121225,
        "gradePct": 3.0634763065686084,
        "smoothedEle": 38.755262825472926,
        "gradeBand": "hard"
      },
      {
        "lat": 22.29004,
        "lng": 120.871529,
        "ele": 38.5,
        "distanceKm": 43.233708183760626,
        "gradePct": 3.2675878667057163,
        "smoothedEle": 40.19525354720967,
        "gradeBand": "hard"
      },
      {
        "lat": 22.289466,
        "lng": 120.871223,
        "ele": 45.25,
        "distanceKm": 43.30487663076401,
        "gradePct": 3.389382949648528,
        "smoothedEle": 42.035377085277595,
        "gradeBand": "hard"
      },
      {
        "lat": 22.289362,
        "lng": 120.87121,
        "ele": 46,
        "distanceKm": 43.31651801121835,
        "gradePct": 3.444967993874072,
        "smoothedEle": 42.405367359922344,
        "gradeBand": "hard"
      },
      {
        "lat": 22.289242,
        "lng": 120.871252,
        "ele": 45.5,
        "distanceKm": 43.33054369080496,
        "gradePct": 3.5117522146344413,
        "smoothedEle": 42.90094137198255,
        "gradeBand": "hard"
      },
      {
        "lat": 22.289008,
        "lng": 120.871388,
        "ele": 42.75,
        "distanceKm": 43.360087133706045,
        "gradePct": 3.6506622133092144,
        "smoothedEle": 43.94480968782094,
        "gradeBand": "hard"
      },
      {
        "lat": 22.288884,
        "lng": 120.87144,
        "ele": 41.5,
        "distanceKm": 43.37487692604154,
        "gradePct": 3.722062745176925,
        "smoothedEle": 44.54909064140579,
        "gradeBand": "hard"
      },
      {
        "lat": 22.288727,
        "lng": 120.871429,
        "ele": 42,
        "distanceKm": 43.39237120040404,
        "gradePct": 3.8420853486372843,
        "smoothedEle": 45.49961288176859,
        "gradeBand": "hard"
      },
      {
        "lat": 22.288538,
        "lng": 120.871346,
        "ele": 44,
        "distanceKm": 43.415055823419074,
        "gradePct": 3.98771200209382,
        "smoothedEle": 46.74349176633233,
        "gradeBand": "hard"
      },
      {
        "lat": 22.28827277691398,
        "lng": 120.87094884911527,
        "ele": 52.693579734594685,
        "distanceKm": 43.465448621777234,
        "gradePct": 4.185816061395603,
        "smoothedEle": 49.72294238423089,
        "gradeBand": "hard"
      },
      {
        "lat": 22.288037,
        "lng": 120.870528,
        "ele": 61.25,
        "distanceKm": 43.516067222479634,
        "gradePct": 4.308395499204011,
        "smoothedEle": 52.43169100725493,
        "gradeBand": "hard"
      },
      {
        "lat": 22.287945,
        "lng": 120.87041,
        "ele": 64,
        "distanceKm": 43.53194328442277,
        "gradePct": 4.339693092024161,
        "smoothedEle": 53.14542656012639,
        "gradeBand": "hard"
      },
      {
        "lat": 22.287769,
        "lng": 120.870386,
        "ele": 64,
        "distanceKm": 43.55166878682104,
        "gradePct": 4.455619358695817,
        "smoothedEle": 54.026499000582284,
        "gradeBand": "hard"
      },
      {
        "lat": 22.287218,
        "lng": 120.870772,
        "ele": 49.75,
        "distanceKm": 43.62468309942268,
        "gradePct": 4.931811784071378,
        "smoothedEle": 57.48930249535622,
        "gradeBand": "hard"
      },
      {
        "lat": 22.287087,
        "lng": 120.870823,
        "ele": 47.75,
        "distanceKm": 43.64016595098544,
        "gradePct": 5.093521567060192,
        "smoothedEle": 58.521492599540125,
        "gradeBand": "hard"
      },
      {
        "lat": 22.28693,
        "lng": 120.870807,
        "ele": 48.25,
        "distanceKm": 43.65770102382929,
        "gradePct": 5.243375215222644,
        "smoothedEle": 59.59062611784347,
        "gradeBand": "hard"
      },
      {
        "lat": 22.286548,
        "lng": 120.870458,
        "ele": 60.25,
        "distanceKm": 43.71332158008759,
        "gradePct": 5.458334142059475,
        "smoothedEle": 63.02339943782596,
        "gradeBand": "hard"
      },
      {
        "lat": 22.286108,
        "lng": 120.870049,
        "ele": 69.5,
        "distanceKm": 43.777855236401734,
        "gradePct": 5.695106636749189,
        "smoothedEle": 67.47217634611502,
        "gradeBand": "hard"
      },
      {
        "lat": 22.286013,
        "lng": 120.86995,
        "ele": 71.25,
        "distanceKm": 43.7925298097961,
        "gradePct": 5.825431797116161,
        "smoothedEle": 68.64843095235717,
        "gradeBand": "hard"
      },
      {
        "lat": 22.285952,
        "lng": 120.869917,
        "ele": 71.5,
        "distanceKm": 43.80011506286755,
        "gradePct": 5.8937237404201275,
        "smoothedEle": 69.25921574710533,
        "gradeBand": "hard"
      },
      {
        "lat": 22.285857,
        "lng": 120.869916,
        "ele": 70,
        "distanceKm": 43.810679096549826,
        "gradePct": 6.005774415093988,
        "smoothedEle": 70.16067995465978,
        "gradeBand": "steep"
      },
      {
        "lat": 22.285503,
        "lng": 120.86997500000001,
        "ele": 68,
        "distanceKm": 43.850507490505265,
        "gradePct": 6.462193209717164,
        "smoothedEle": 73.36120739429579,
        "gradeBand": "steep"
      },
      {
        "lat": 22.285149,
        "lng": 120.870034,
        "ele": 66,
        "distanceKm": 43.89033588680292,
        "gradePct": 6.788058113794397,
        "smoothedEle": 76.22451336837999,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284896,
        "lng": 120.869962,
        "ele": 65.75,
        "distanceKm": 43.9194272746238,
        "gradePct": 6.9338953813709665,
        "smoothedEle": 78.04172397021459,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284805,
        "lng": 120.869841,
        "ele": 66.75,
        "distanceKm": 43.93547045676353,
        "gradePct": 6.91947371850877,
        "smoothedEle": 78.96688080693917,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284776,
        "lng": 120.869734,
        "ele": 68.75,
        "distanceKm": 43.946942225567234,
        "gradePct": 6.897923211973299,
        "smoothedEle": 79.6284194746193,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284802,
        "lng": 120.869573,
        "ele": 72.75,
        "distanceKm": 43.963757901408876,
        "gradePct": 6.893991836972946,
        "smoothedEle": 80.6464182382375,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284995,
        "lng": 120.869062,
        "ele": 88.5,
        "distanceKm": 44.02054586014405,
        "gradePct": 7.261716664563032,
        "smoothedEle": 85.30657189188422,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284993,
        "lng": 120.868992,
        "ele": 90.25,
        "distanceKm": 44.02775157989755,
        "gradePct": 7.3021180566942485,
        "smoothedEle": 85.92451903121993,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284949,
        "lng": 120.86892,
        "ele": 91.5,
        "distanceKm": 44.036629465045365,
        "gradePct": 7.350967527041186,
        "smoothedEle": 86.68308499551686,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284637500000002,
        "lng": 120.8686965,
        "ele": 91.99999999999996,
        "distanceKm": 44.078205323830005,
        "gradePct": 7.493456732964139,
        "smoothedEle": 89.98060814100921,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284326,
        "lng": 120.868473,
        "ele": 92.5,
        "distanceKm": 44.11978121095405,
        "gradePct": 7.359115136906514,
        "smoothedEle": 92.96945247092681,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284312,
        "lng": 120.86839,
        "ele": 94.75,
        "distanceKm": 44.12846183505641,
        "gradePct": 7.306563609734518,
        "smoothedEle": 93.50935490523868,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284438,
        "lng": 120.86805,
        "ele": 104,
        "distanceKm": 44.1661458518034,
        "gradePct": 7.11546898088265,
        "smoothedEle": 95.83187284324138,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284494,
        "lng": 120.867902,
        "ele": 108,
        "distanceKm": 44.18259756804454,
        "gradePct": 7.078993570553621,
        "smoothedEle": 96.90517807462986,
        "gradeBand": "steep"
      },
      {
        "lat": 22.28451,
        "lng": 120.867807,
        "ele": 110.25,
        "distanceKm": 44.19253272939394,
        "gradePct": 7.077425166316488,
        "smoothedEle": 97.59401592818801,
        "gradeBand": "steep"
      },
      {
        "lat": 22.284508,
        "lng": 120.867702,
        "ele": 112.25,
        "distanceKm": 44.20333848627183,
        "gradePct": 7.102162233904472,
        "smoothedEle": 98.34321507172194,
        "gradeBand": "steep"
      },
      {
        "lat": 22.28447,
        "lng": 120.867618,
        "ele": 113.25,
        "distanceKm": 44.212958865077525,
        "gradePct": 7.1377219012455235,
        "smoothedEle": 99.05083667803102,
        "gradeBand": "steep"
      },
      {
        "lat": 22.2842,
        "lng": 120.867299,
        "ele": 111.5,
        "distanceKm": 44.25744082651312,
        "gradePct": 7.476146735201776,
        "smoothedEle": 102.69243108890771,
        "gradeBand": "steep"
      },
      {
        "lat": 22.28413,
        "lng": 120.867232,
        "ele": 111,
        "distanceKm": 44.26783831769889,
        "gradePct": 7.544358387977048,
        "smoothedEle": 103.61434197404604,
        "gradeBand": "steep"
      },
      {
        "lat": 22.28407,
        "lng": 120.867203,
        "ele": 110.5,
        "distanceKm": 44.27514686401575,
        "gradePct": 7.560447692841336,
        "smoothedEle": 104.2623664141413,
        "gradeBand": "steep"
      },
      {
        "lat": 22.283816,
        "lng": 120.867207,
        "ele": 107.25,
        "distanceKm": 44.30339341285966,
        "gradePct": 7.629096521217914,
        "smoothedEle": 106.78629123005987,
        "gradeBand": "steep"
      },
      {
        "lat": 22.283556,
        "lng": 120.866769,
        "ele": 110.5,
        "distanceKm": 44.356935813359506,
        "gradePct": 7.663579036138138,
        "smoothedEle": 111.28438783904117,
        "gradeBand": "steep"
      },
      {
        "lat": 22.283254666666668,
        "lng": 120.866327,
        "ele": 112.33333333333326,
        "distanceKm": 44.41342418635396,
        "gradePct": 7.445546640285329,
        "smoothedEle": 114.84909295664262,
        "gradeBand": "steep"
      },
      {
        "lat": 22.28295333333333,
        "lng": 120.865885,
        "ele": 114.16666666666674,
        "distanceKm": 44.4699126382562,
        "gradePct": 7.380740639448902,
        "smoothedEle": 118.21983882537153,
        "gradeBand": "steep"
      },
      {
        "lat": 22.282652,
        "lng": 120.865443,
        "ele": 116,
        "distanceKm": 44.52640116906716,
        "gradePct": 7.213757836077953,
        "smoothedEle": 121.79258816650925,
        "gradeBand": "steep"
      },
      {
        "lat": 22.282396,
        "lng": 120.865175,
        "ele": 122,
        "distanceKm": 44.56603307629707,
        "gradePct": 6.845906690235797,
        "smoothedEle": 123.99199730712532,
        "gradeBand": "steep"
      },
      {
        "lat": 22.28207531819048,
        "lng": 120.86503052688141,
        "ele": 128.0262782737683,
        "distanceKm": 44.6046657233601,
        "gradePct": 6.420577529836194,
        "smoothedEle": 126.15491061385042,
        "gradeBand": "steep"
      },
      {
        "lat": 22.281733,
        "lng": 120.864949,
        "ele": 132.5,
        "distanceKm": 44.64364317909645,
        "gradePct": 6.142439359427339,
        "smoothedEle": 128.5949918263431,
        "gradeBand": "steep"
      },
      {
        "lat": 22.281296817243035,
        "lng": 120.86486219279104,
        "ele": 133.45272771549875,
        "distanceKm": 44.692960119279356,
        "gradePct": 6.249162790785725,
        "smoothedEle": 132.30519407953986,
        "gradeBand": "steep"
      },
      {
        "lat": 22.280863,
        "lng": 120.864761,
        "ele": 132.75,
        "distanceKm": 44.74230935914363,
        "gradePct": 6.564634955892185,
        "smoothedEle": 136.26661696362254,
        "gradeBand": "steep"
      },
      {
        "lat": 22.28036806243194,
        "lng": 120.8646598633322,
        "ele": 135.2784166950747,
        "distanceKm": 44.79831917891051,
        "gradePct": 6.96616857435381,
        "smoothedEle": 140.91498269691547,
        "gradeBand": "steep"
      },
      {
        "lat": 22.279874,
        "lng": 120.864554,
        "ele": 139.25,
        "distanceKm": 44.854325944523666,
        "gradePct": 7.524367586804194,
        "smoothedEle": 145.91540202289306,
        "gradeBand": "steep"
      },
      {
        "lat": 22.279324039135975,
        "lng": 120.8645751398758,
        "ele": 147.5004338298254,
        "distanceKm": 44.915517559090844,
        "gradePct": 8.21234004123782,
        "smoothedEle": 151.47128140290116,
        "gradeBand": "steep"
      },
      {
        "lat": 22.278774,
        "lng": 120.864611,
        "ele": 155.5,
        "distanceKm": 44.976790404108286,
        "gradePct": 8.249514751143762,
        "smoothedEle": 155.83726153131326,
        "gradeBand": "steep"
      },
      {
        "lat": 22.2783315,
        "lng": 120.8646665,
        "ele": 162.625,
        "distanceKm": 45.02632451050947,
        "gradePct": 7.903375736308911,
        "smoothedEle": 158.6935887409331,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277889,
        "lng": 120.864722,
        "ele": 169.75,
        "distanceKm": 45.075858618994154,
        "gradePct": 7.505739346818392,
        "smoothedEle": 161.56815444155475,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277932,
        "lng": 120.864559,
        "ele": 169.75,
        "distanceKm": 45.093298743904406,
        "gradePct": 7.419159156383191,
        "smoothedEle": 162.75580433418176,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277936,
        "lng": 120.864457,
        "ele": 170,
        "distanceKm": 45.10380345548351,
        "gradePct": 7.358665758587916,
        "smoothedEle": 163.48062943313982,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277933,
        "lng": 120.86441,
        "ele": 170.25,
        "distanceKm": 45.10865101246052,
        "gradePct": 7.325892370110081,
        "smoothedEle": 163.81511086455365,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277875,
        "lng": 120.86423,
        "ele": 172.5,
        "distanceKm": 45.12826287176844,
        "gradePct": 7.201740143556192,
        "smoothedEle": 165.19364835904318,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277665,
        "lng": 120.86395,
        "ele": 175.75,
        "distanceKm": 45.1653481849,
        "gradePct": 6.948739515552176,
        "smoothedEle": 167.76238249520736,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277173,
        "lng": 120.863609,
        "ele": 184.25,
        "distanceKm": 45.230341135304265,
        "gradePct": 6.553930929690368,
        "smoothedEle": 172.1893241369744,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277121,
        "lng": 120.863491,
        "ele": 184.25,
        "distanceKm": 45.24378931642182,
        "gradePct": 6.53784661382522,
        "smoothedEle": 173.0993177259289,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277122,
        "lng": 120.863325,
        "ele": 183.25,
        "distanceKm": 45.2608703494197,
        "gradePct": 6.551695763485162,
        "smoothedEle": 174.35796959727176,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277198,
        "lng": 120.863221,
        "ele": 183.25,
        "distanceKm": 45.274505996341766,
        "gradePct": 6.515688670881365,
        "smoothedEle": 175.22155268160233,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277434,
        "lng": 120.863121,
        "ele": 180.25,
        "distanceKm": 45.30269321642652,
        "gradePct": 6.57053321618238,
        "smoothedEle": 177.04251702642026,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277596,
        "lng": 120.863039,
        "ele": 175.75,
        "distanceKm": 45.32258492034614,
        "gradePct": 6.620659190653447,
        "smoothedEle": 178.33992715207287,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277677,
        "lng": 120.862916,
        "ele": 173.25,
        "distanceKm": 45.33811874397762,
        "gradePct": 6.607353873247988,
        "smoothedEle": 179.20009386899508,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277717,
        "lng": 120.862412,
        "ele": 174,
        "distanceKm": 45.390168305204334,
        "gradePct": 6.533769982840819,
        "smoothedEle": 182.14393546631683,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277682,
        "lng": 120.862311,
        "ele": 173.25,
        "distanceKm": 45.40126553832305,
        "gradePct": 6.474726893579424,
        "smoothedEle": 182.72969382980668,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277605,
        "lng": 120.862224,
        "ele": 174,
        "distanceKm": 45.41365280774571,
        "gradePct": 6.405617857300716,
        "smoothedEle": 183.38354570328727,
        "gradeBand": "steep"
      },
      {
        "lat": 22.27753,
        "lng": 120.862199,
        "ele": 176.25,
        "distanceKm": 45.42238015526668,
        "gradePct": 6.361546768742721,
        "smoothedEle": 183.86478655209564,
        "gradeBand": "steep"
      },
      {
        "lat": 22.277153,
        "lng": 120.86219,
        "ele": 184.5,
        "distanceKm": 45.46431092796657,
        "gradePct": 6.088307998320622,
        "smoothedEle": 185.9554603314646,
        "gradeBand": "steep"
      },
      {
        "lat": 22.276758,
        "lng": 120.861909,
        "ele": 186,
        "distanceKm": 45.5168956133274,
        "gradePct": 5.8404102565000535,
        "smoothedEle": 188.79472417768878,
        "gradeBand": "hard"
      },
      {
        "lat": 22.276408,
        "lng": 120.861801,
        "ele": 186.75,
        "distanceKm": 45.557369382529565,
        "gradePct": 5.604739206026813,
        "smoothedEle": 190.91421110065698,
        "gradeBand": "hard"
      },
      {
        "lat": 22.276047,
        "lng": 120.86185,
        "ele": 190,
        "distanceKm": 45.59782620946314,
        "gradePct": 5.187902843833306,
        "smoothedEle": 192.2918048339311,
        "gradeBand": "hard"
      },
      {
        "lat": 22.275743,
        "lng": 120.862094,
        "ele": 195,
        "distanceKm": 45.6399333610973,
        "gradePct": 4.722346308552922,
        "smoothedEle": 193.46976469460137,
        "gradeBand": "hard"
      },
      {
        "lat": 22.275453050849816,
        "lng": 120.86244731460037,
        "ele": 196.99365408920943,
        "distanceKm": 45.68852509744993,
        "gradePct": 4.385310321924373,
        "smoothedEle": 195.20692917716528,
        "gradeBand": "hard"
      },
      {
        "lat": 22.275181,
        "lng": 120.862818,
        "ele": 199.25,
        "distanceKm": 45.737207207996214,
        "gradePct": 4.3648239502638955,
        "smoothedEle": 197.6985371800475,
        "gradeBand": "hard"
      },
      {
        "lat": 22.2748802065113,
        "lng": 120.86297696913864,
        "ele": 202.21313588193837,
        "distanceKm": 45.774439617886316,
        "gradePct": 4.418625263658588,
        "smoothedEle": 199.75822582809155,
        "gradeBand": "hard"
      },
      {
        "lat": 22.274564,
        "lng": 120.86311,
        "ele": 206,
        "distanceKm": 45.81217082691316,
        "gradePct": 4.541466278589757,
        "smoothedEle": 202.16401232571639,
        "gradeBand": "hard"
      },
      {
        "lat": 22.274388,
        "lng": 120.863137,
        "ele": 207.25,
        "distanceKm": 45.83193737850151,
        "gradePct": 4.576485710649437,
        "smoothedEle": 203.31187233059532,
        "gradeBand": "hard"
      },
      {
        "lat": 22.273953,
        "lng": 120.863062,
        "ele": 213.5,
        "distanceKm": 45.88091901366126,
        "gradePct": 4.947596925137711,
        "smoothedEle": 206.55888938744627,
        "gradeBand": "hard"
      },
      {
        "lat": 22.273862,
        "lng": 120.862992,
        "ele": 215.25,
        "distanceKm": 45.89333957376407,
        "gradePct": 5.0922924821386655,
        "smoothedEle": 207.4159080345398,
        "gradeBand": "hard"
      },
      {
        "lat": 22.273797,
        "lng": 120.862881,
        "ele": 215.5,
        "distanceKm": 45.90685601438861,
        "gradePct": 5.263669043597666,
        "smoothedEle": 208.3354233938774,
        "gradeBand": "hard"
      },
      {
        "lat": 22.273797,
        "lng": 120.862753,
        "ele": 213.75,
        "distanceKm": 45.92002696536206,
        "gradePct": 5.436758710216532,
        "smoothedEle": 209.2231535926387,
        "gradeBand": "hard"
      },
      {
        "lat": 22.273889,
        "lng": 120.862481,
        "ele": 207.25,
        "distanceKm": 45.94982620380164,
        "gradePct": 5.779590138006737,
        "smoothedEle": 211.16220625247323,
        "gradeBand": "hard"
      },
      {
        "lat": 22.273896,
        "lng": 120.862378,
        "ele": 205,
        "distanceKm": 45.960453239774594,
        "gradePct": 5.868313919002909,
        "smoothedEle": 211.80829629836975,
        "gradeBand": "hard"
      },
      {
        "lat": 22.273843,
        "lng": 120.862237,
        "ele": 203.75,
        "distanceKm": 45.97611310722439,
        "gradePct": 5.993156797923281,
        "smoothedEle": 212.74266838954108,
        "gradeBand": "hard"
      },
      {
        "lat": 22.273503,
        "lng": 120.861903,
        "ele": 207.5,
        "distanceKm": 46.027205929391485,
        "gradePct": 6.210019088314323,
        "smoothedEle": 215.8167171756821,
        "gradeBand": "steep"
      },
      {
        "lat": 22.273015,
        "lng": 120.861876,
        "ele": 212.5,
        "distanceKm": 46.081540204953185,
        "gradePct": 6.364635585961048,
        "smoothedEle": 219.30487441246987,
        "gradeBand": "steep"
      },
      {
        "lat": 22.272773,
        "lng": 120.861876,
        "ele": 212.5,
        "distanceKm": 46.10844941436971,
        "gradePct": 6.367141682872967,
        "smoothedEle": 221.02815571069291,
        "gradeBand": "steep"
      },
      {
        "lat": 22.272536,
        "lng": 120.86198,
        "ele": 216.5,
        "distanceKm": 46.13689259853987,
        "gradePct": 6.347956585596642,
        "smoothedEle": 222.68422609843444,
        "gradeBand": "steep"
      },
      {
        "lat": 22.27218563749116,
        "lng": 120.86224511559334,
        "ele": 225.47596911304996,
        "distanceKm": 46.184452861251735,
        "gradePct": 6.096668754957279,
        "smoothedEle": 225.09273113606073,
        "gradeBand": "steep"
      },
      {
        "lat": 22.271815,
        "lng": 120.86248,
        "ele": 234,
        "distanceKm": 46.23223025670776,
        "gradePct": 5.656736729471226,
        "smoothedEle": 226.98743858905752,
        "gradeBand": "hard"
      },
      {
        "lat": 22.271626,
        "lng": 120.862572,
        "ele": 237.75,
        "distanceKm": 46.25527990687121,
        "gradePct": 5.416441550483213,
        "smoothedEle": 227.74309873482989,
        "gradeBand": "hard"
      },
      {
        "lat": 22.271384,
        "lng": 120.862577,
        "ele": 237,
        "distanceKm": 46.28219403439444,
        "gradePct": 5.169811361158235,
        "smoothedEle": 228.61796730476405,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270962,
        "lng": 120.862568,
        "ele": 234.75,
        "distanceKm": 46.32912749613061,
        "gradePct": 4.901724317676959,
        "smoothedEle": 230.6452510617108,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270538,
        "lng": 120.862654,
        "ele": 238.25,
        "distanceKm": 46.37709753858705,
        "gradePct": 4.767330825884204,
        "smoothedEle": 233.3216561520486,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270146,
        "lng": 120.862759,
        "ele": 243.5,
        "distanceKm": 46.42200514835958,
        "gradePct": 4.636237056462095,
        "smoothedEle": 235.72613328254752,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269886,
        "lng": 120.862759,
        "ele": 246.75,
        "distanceKm": 46.45091586922039,
        "gradePct": 4.594642521867055,
        "smoothedEle": 237.17830781693928,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269767,
        "lng": 120.862698,
        "ele": 246.75,
        "distanceKm": 46.46556140512809,
        "gradePct": 4.612530722750493,
        "smoothedEle": 237.97363878140393,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269495,
        "lng": 120.862434,
        "ele": 243.25,
        "distanceKm": 46.50621542872003,
        "gradePct": 4.769578177528669,
        "smoothedEle": 240.264503479414,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269327,
        "lng": 120.8621,
        "ele": 240.75,
        "distanceKm": 46.54533321702646,
        "gradePct": 4.980916686130191,
        "smoothedEle": 242.3597563343442,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269178,
        "lng": 120.861628,
        "ele": 235.5,
        "distanceKm": 46.59665078936663,
        "gradePct": 5.0271465628429155,
        "smoothedEle": 244.3238643303207,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268999,
        "lng": 120.861343,
        "ele": 239.25,
        "distanceKm": 46.63209419465132,
        "gradePct": 4.749926591026269,
        "smoothedEle": 245.06055261913127,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268477,
        "lng": 120.860944,
        "ele": 245,
        "distanceKm": 46.70319152266643,
        "gradePct": 3.9323646208303553,
        "smoothedEle": 246.51589380108896,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268212,
        "lng": 120.86058,
        "ele": 247,
        "distanceKm": 46.75084930759536,
        "gradePct": 3.317650248906577,
        "smoothedEle": 247.12791519850052,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268075,
        "lng": 120.860087,
        "ele": 248.5,
        "distanceKm": 46.80381797331143,
        "gradePct": 2.385054318382936,
        "smoothedEle": 247.28456920493207,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.268099959181065,
        "lng": 120.85970574606856,
        "ele": 253.22901306634427,
        "distanceKm": 46.84314790598302,
        "gradePct": 1.717812911983569,
        "smoothedEle": 247.39614399453333,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.268173,
        "lng": 120.85933,
        "ele": 258.5,
        "distanceKm": 46.882656810771124,
        "gradePct": 1.3528905791429635,
        "smoothedEle": 247.84693619422566,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.268331,
        "lng": 120.859038,
        "ele": 259.25,
        "distanceKm": 46.9174635794699,
        "gradePct": 1.3116879992768826,
        "smoothedEle": 248.69152047338682,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.268934,
        "lng": 120.858762,
        "ele": 251,
        "distanceKm": 46.99028115432312,
        "gradePct": 1.815155239424691,
        "smoothedEle": 251.6970881149543,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.269414,
        "lng": 120.858421,
        "ele": 252.25,
        "distanceKm": 47.0541561181654,
        "gradePct": 2.5684276636473986,
        "smoothedEle": 254.84297803036,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.269751,
        "lng": 120.858258,
        "ele": 247.75,
        "distanceKm": 47.09521140008142,
        "gradePct": 3.268862883492946,
        "smoothedEle": 257.06570404871394,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269836,
        "lng": 120.858197,
        "ele": 245.5,
        "distanceKm": 47.10655744069825,
        "gradePct": 3.48221600831315,
        "smoothedEle": 257.73898880425617,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269885,
        "lng": 120.858067,
        "ele": 243.5,
        "distanceKm": 47.12100161693818,
        "gradePct": 3.749416132515447,
        "smoothedEle": 258.5815657515852,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269893,
        "lng": 120.85799,
        "ele": 242.75,
        "distanceKm": 47.12897476779172,
        "gradePct": 3.8905839114020075,
        "smoothedEle": 259.0276880598147,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269862,
        "lng": 120.857879,
        "ele": 242.5,
        "distanceKm": 47.14090558138347,
        "gradePct": 4.098033348861995,
        "smoothedEle": 259.68388280736116,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269797,
        "lng": 120.857794,
        "ele": 243,
        "distanceKm": 47.15225203765298,
        "gradePct": 4.269305593368995,
        "smoothedEle": 260.30793790218405,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269674,
        "lng": 120.857708,
        "ele": 244.5,
        "distanceKm": 47.16854233092218,
        "gradePct": 4.489181460581937,
        "smoothedEle": 261.15343593419396,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269472,
        "lng": 120.857666,
        "ele": 247.25,
        "distanceKm": 47.191415746619285,
        "gradePct": 4.702673139413982,
        "smoothedEle": 262.1674906967656,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269297,
        "lng": 120.857646,
        "ele": 249.75,
        "distanceKm": 47.21098341288839,
        "gradePct": 4.8072970342770684,
        "smoothedEle": 262.95617069963856,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268733,
        "lng": 120.857847,
        "ele": 260.25,
        "distanceKm": 47.27702010257001,
        "gradePct": 4.490029067492661,
        "smoothedEle": 264.619821356213,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268419,
        "lng": 120.857909,
        "ele": 266,
        "distanceKm": 47.312513459583336,
        "gradePct": 4.387477146537193,
        "smoothedEle": 265.9544772767656,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268025,
        "lng": 120.85786,
        "ele": 272.5,
        "distanceKm": 47.35661352117542,
        "gradePct": 4.423019309381909,
        "smoothedEle": 268.24507934179366,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267453,
        "lng": 120.857649,
        "ele": 280.25,
        "distanceKm": 47.42382100393966,
        "gradePct": 4.189710360584155,
        "smoothedEle": 271.30845020587464,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267325,
        "lng": 120.85758,
        "ele": 284,
        "distanceKm": 47.43972671280215,
        "gradePct": 4.163330838854944,
        "smoothedEle": 272.10903755195324,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267244,
        "lng": 120.857488,
        "ele": 285.75,
        "distanceKm": 47.452793760293844,
        "gradePct": 4.149783750316129,
        "smoothedEle": 272.78540561605786,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267221,
        "lng": 120.857371,
        "ele": 288.75,
        "distanceKm": 47.46510203411703,
        "gradePct": 4.25167101727461,
        "smoothedEle": 273.72989086369216,
        "gradeBand": "hard"
      },
      {
        "lat": 22.26723,
        "lng": 120.857223,
        "ele": 290.75,
        "distanceKm": 47.48036450647466,
        "gradePct": 4.430621339218518,
        "smoothedEle": 274.9694164013427,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267407,
        "lng": 120.856932,
        "ele": 288.25,
        "distanceKm": 47.51619813417268,
        "gradePct": 5.02830842576959,
        "smoothedEle": 278.17246952898773,
        "gradeBand": "hard"
      },
      {
        "lat": 22.26775,
        "lng": 120.85661,
        "ele": 281.75,
        "distanceKm": 47.56672097762738,
        "gradePct": 6.0394082560821785,
        "smoothedEle": 282.47858208930614,
        "gradeBand": "steep"
      },
      {
        "lat": 22.268114,
        "lng": 120.856407,
        "ele": 273.5,
        "distanceKm": 47.612268581762535,
        "gradePct": 6.545328545399595,
        "smoothedEle": 285.58125477767237,
        "gradeBand": "steep"
      },
      {
        "lat": 22.268151,
        "lng": 120.856301,
        "ele": 274.25,
        "distanceKm": 47.62392633881686,
        "gradePct": 6.56518407627433,
        "smoothedEle": 286.24282606406126,
        "gradeBand": "steep"
      },
      {
        "lat": 22.268148,
        "lng": 120.856159,
        "ele": 277.25,
        "distanceKm": 47.63854225966287,
        "gradePct": 6.521953350444738,
        "smoothedEle": 286.8722996850659,
        "gradeBand": "steep"
      },
      {
        "lat": 22.268042,
        "lng": 120.855896,
        "ele": 286.5,
        "distanceKm": 47.66806085595288,
        "gradePct": 6.4014260130805996,
        "smoothedEle": 287.97113606380015,
        "gradeBand": "steep"
      },
      {
        "lat": 22.267997,
        "lng": 120.855711,
        "ele": 291.25,
        "distanceKm": 47.68774441152885,
        "gradePct": 6.294876614873396,
        "smoothedEle": 288.5486800890457,
        "gradeBand": "steep"
      },
      {
        "lat": 22.268001,
        "lng": 120.855593,
        "ele": 293,
        "distanceKm": 47.69989502861256,
        "gradePct": 6.240013439855149,
        "smoothedEle": 288.9379254172531,
        "gradeBand": "steep"
      },
      {
        "lat": 22.268057,
        "lng": 120.855445,
        "ele": 293.5,
        "distanceKm": 47.71634840137782,
        "gradePct": 6.170160974445084,
        "smoothedEle": 289.4783259226122,
        "gradeBand": "steep"
      },
      {
        "lat": 22.268352,
        "lng": 120.855255,
        "ele": 285.25,
        "distanceKm": 47.75453563623288,
        "gradePct": 6.016866179503211,
        "smoothedEle": 290.96966839955127,
        "gradeBand": "steep"
      },
      {
        "lat": 22.268417,
        "lng": 120.855181,
        "ele": 283.75,
        "distanceKm": 47.76503438798386,
        "gradePct": 5.917825095982645,
        "smoothedEle": 291.47817527144383,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268449,
        "lng": 120.855103,
        "ele": 284,
        "distanceKm": 47.77381410782689,
        "gradePct": 5.8018424512167694,
        "smoothedEle": 291.84296006221695,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268467,
        "lng": 120.855003,
        "ele": 285,
        "distanceKm": 47.784297152508366,
        "gradePct": 5.65731829637288,
        "smoothedEle": 292.29289791467994,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268456,
        "lng": 120.854833,
        "ele": 290,
        "distanceKm": 47.8018331983613,
        "gradePct": 5.386208170289776,
        "smoothedEle": 293.0470584695037,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268228,
        "lng": 120.854352,
        "ele": 308,
        "distanceKm": 47.85744427357321,
        "gradePct": 4.332794679607259,
        "smoothedEle": 294.68630334839287,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268228,
        "lng": 120.854259,
        "ele": 310.25,
        "distanceKm": 47.867014173573274,
        "gradePct": 4.121065703903944,
        "smoothedEle": 294.8617515150607,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268271,
        "lng": 120.854127,
        "ele": 312,
        "distanceKm": 47.8814142355944,
        "gradePct": 3.891128419792228,
        "smoothedEle": 295.15286236968376,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268357,
        "lng": 120.854036,
        "ele": 311.75,
        "distanceKm": 47.894798288886605,
        "gradePct": 3.675215615541406,
        "smoothedEle": 295.4168368208207,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268750139525096,
        "lng": 120.85396523213103,
        "ele": 304.99519369960694,
        "distanceKm": 47.93911585590557,
        "gradePct": 3.1871910867202584,
        "smoothedEle": 296.45522519422906,
        "gradeBand": "hard"
      },
      {
        "lat": 22.26915106976255,
        "lng": 120.85393961606552,
        "ele": 296.7475968498035,
        "distanceKm": 47.983775184289314,
        "gradePct": 3.1696485301997006,
        "smoothedEle": 297.9411628044195,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269552,
        "lng": 120.853914,
        "ele": 288.5,
        "distanceKm": 48.028434512226845,
        "gradePct": 3.215394343738668,
        "smoothedEle": 299.5965130294979,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269629,
        "lng": 120.853865,
        "ele": 287.5,
        "distanceKm": 48.038370887147444,
        "gradePct": 3.161119337953846,
        "smoothedEle": 299.8217375276982,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269686,
        "lng": 120.853804,
        "ele": 287,
        "distanceKm": 48.0472912052529,
        "gradePct": 3.1187977686071156,
        "smoothedEle": 300.043141832208,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269722,
        "lng": 120.853719,
        "ele": 287.75,
        "distanceKm": 48.05691030282364,
        "gradePct": 3.062125831033873,
        "smoothedEle": 300.27106283071333,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269729,
        "lng": 120.853632,
        "ele": 289.25,
        "distanceKm": 48.06589646788856,
        "gradePct": 2.978930891549235,
        "smoothedEle": 300.45078613201173,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.269708,
        "lng": 120.853533,
        "ele": 291.75,
        "distanceKm": 48.076347870169165,
        "gradePct": 2.8968460015648145,
        "smoothedEle": 300.64224849406077,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.269679,
        "lng": 120.853447,
        "ele": 294.25,
        "distanceKm": 48.085766571143544,
        "gradePct": 2.8258457850803214,
        "smoothedEle": 300.83362953745814,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.269451,
        "lng": 120.853208,
        "ele": 305,
        "distanceKm": 48.121087704263275,
        "gradePct": 2.7200897582077603,
        "smoothedEle": 301.77489185028895,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.269383,
        "lng": 120.853105,
        "ele": 308.75,
        "distanceKm": 48.13410722664782,
        "gradePct": 2.7742386077532877,
        "smoothedEle": 302.3211142082068,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.269356,
        "lng": 120.853,
        "ele": 311.25,
        "distanceKm": 48.14532122696282,
        "gradePct": 2.8441722496275363,
        "smoothedEle": 302.86146965949155,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.269383,
        "lng": 120.852894,
        "ele": 312.75,
        "distanceKm": 48.1566344057587,
        "gradePct": 2.912877652951417,
        "smoothedEle": 303.401063874239,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.269658,
        "lng": 120.852699,
        "ele": 310.5,
        "distanceKm": 48.19320881398386,
        "gradePct": 3.2016738194528327,
        "smoothedEle": 304.990508974459,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270027,
        "lng": 120.852614,
        "ele": 304.5,
        "distanceKm": 48.235161696985045,
        "gradePct": 3.250238705971007,
        "smoothedEle": 306.113292890176,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270415,
        "lng": 120.852373,
        "ele": 302.5,
        "distanceKm": 48.28492485314252,
        "gradePct": 3.0593548376670303,
        "smoothedEle": 307.1618411381566,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270851,
        "lng": 120.851867,
        "ele": 303.25,
        "distanceKm": 48.35606870003146,
        "gradePct": 3.186544355991214,
        "smoothedEle": 309.8107544283642,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270969,
        "lng": 120.851532,
        "ele": 303.5,
        "distanceKm": 48.39295297277052,
        "gradePct": 3.664161820384982,
        "smoothedEle": 312.0176232662955,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270795,
        "lng": 120.851103,
        "ele": 306.25,
        "distanceKm": 48.44115102276092,
        "gradePct": 4.319243876955779,
        "smoothedEle": 315.61825671124615,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270556,
        "lng": 120.850952,
        "ele": 311,
        "distanceKm": 48.471935625752835,
        "gradePct": 4.59113825211785,
        "smoothedEle": 317.8394367345581,
        "gradeBand": "hard"
      },
      {
        "lat": 22.270062,
        "lng": 120.850777,
        "ele": 320,
        "distanceKm": 48.52974236820142,
        "gradePct": 4.932609652232798,
        "smoothedEle": 320.7660844917046,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269714,
        "lng": 120.85084,
        "ele": 322,
        "distanceKm": 48.56897752973672,
        "gradePct": 5.157250772191116,
        "smoothedEle": 322.2975709973878,
        "gradeBand": "hard"
      },
      {
        "lat": 22.269223,
        "lng": 120.85112,
        "ele": 326.75,
        "distanceKm": 48.63071050462491,
        "gradePct": 5.420474870758818,
        "smoothedEle": 325.1280122044987,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268814,
        "lng": 120.851145,
        "ele": 329.5,
        "distanceKm": 48.67626199306679,
        "gradePct": 5.529038593882845,
        "smoothedEle": 327.60608026339105,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268496,
        "lng": 120.851206,
        "ele": 333,
        "distanceKm": 48.71217484580165,
        "gradePct": 5.3472741549202025,
        "smoothedEle": 329.49541500624997,
        "gradeBand": "hard"
      },
      {
        "lat": 22.268106,
        "lng": 120.851264,
        "ele": 339.5,
        "distanceKm": 48.75594970010703,
        "gradePct": 4.993577722045065,
        "smoothedEle": 331.66674853911417,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267628,
        "lng": 120.851168,
        "ele": 346,
        "distanceKm": 48.81001117040062,
        "gradePct": 5.01569807799883,
        "smoothedEle": 334.8142249126423,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267533,
        "lng": 120.851108,
        "ele": 346.75,
        "distanceKm": 48.82224671058338,
        "gradePct": 5.062078367851532,
        "smoothedEle": 335.57282840397323,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267452,
        "lng": 120.850922,
        "ele": 346.75,
        "distanceKm": 48.843399919995115,
        "gradePct": 5.1700162622208,
        "smoothedEle": 336.8092356144921,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267443,
        "lng": 120.850771,
        "ele": 345.75,
        "distanceKm": 48.858970425229614,
        "gradePct": 5.257042672975703,
        "smoothedEle": 337.6780864913784,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267559,
        "lng": 120.850365,
        "ele": 342,
        "distanceKm": 48.90269475346662,
        "gradePct": 5.330010737299264,
        "smoothedEle": 339.83352934693465,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267604,
        "lng": 120.85011,
        "ele": 340.5,
        "distanceKm": 48.929407752216946,
        "gradePct": 5.319057203299975,
        "smoothedEle": 341.0254529476319,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267574,
        "lng": 120.849976,
        "ele": 340.5,
        "distanceKm": 48.94359447434972,
        "gradePct": 5.267277986362664,
        "smoothedEle": 341.63075309196375,
        "gradeBand": "hard"
      },
      {
        "lat": 22.267293,
        "lng": 120.849775,
        "ele": 341,
        "distanceKm": 48.98106587952103,
        "gradePct": 5.079338521684947,
        "smoothedEle": 343.0968228854069,
        "gradeBand": "hard"
      },
      {
        "lat": 22.266806,
        "lng": 120.849577,
        "ele": 343.75,
        "distanceKm": 49.03892408476919,
        "gradePct": 4.6425455525987775,
        "smoothedEle": 344.7498754872311,
        "gradeBand": "hard"
      },
      {
        "lat": 22.266263,
        "lng": 120.849256,
        "ele": 340,
        "distanceKm": 49.10774797149665,
        "gradePct": 4.006888989829425,
        "smoothedEle": 346.7031277062738,
        "gradeBand": "hard"
      },
      {
        "lat": 22.265899,
        "lng": 120.849271,
        "ele": 347.25,
        "distanceKm": 49.14825240255139,
        "gradePct": 3.5024284919432445,
        "smoothedEle": 347.5872948167104,
        "gradeBand": "hard"
      },
      {
        "lat": 22.265424,
        "lng": 120.849485,
        "ele": 352.75,
        "distanceKm": 49.205476963868946,
        "gradePct": 2.8048749986309534,
        "smoothedEle": 348.3722954874304,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.264975,
        "lng": 120.849652,
        "ele": 353.5,
        "distanceKm": 49.25827838225861,
        "gradePct": 2.2704628518204144,
        "smoothedEle": 349.0166499621386,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.264489,
        "lng": 120.849781,
        "ele": 354,
        "distanceKm": 49.31392572664431,
        "gradePct": 2.016358844191719,
        "smoothedEle": 350.0847300566044,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.263983,
        "lng": 120.849765,
        "ele": 349,
        "distanceKm": 49.370214522684336,
        "gradePct": 1.885212093045329,
        "smoothedEle": 351.29354817637983,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.263649,
        "lng": 120.849773,
        "ele": 348.25,
        "distanceKm": 49.407362802549684,
        "gradePct": 1.753754870334885,
        "smoothedEle": 351.95346105291463,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.263347,
        "lng": 120.849875,
        "ele": 351.75,
        "distanceKm": 49.442545918819384,
        "gradePct": 1.6571894707303882,
        "smoothedEle": 352.43429697526716,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.263185,
        "lng": 120.849912,
        "ele": 355,
        "distanceKm": 49.46095752005886,
        "gradePct": 1.6626087375429741,
        "smoothedEle": 352.7494085299388,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.262949,
        "lng": 120.849864,
        "ele": 355.75,
        "distanceKm": 49.48766038738439,
        "gradePct": 1.7185254534354206,
        "smoothedEle": 353.28346587644927,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.262600499999998,
        "lng": 120.8497,
        "ele": 355.5,
        "distanceKm": 49.529927367421614,
        "gradePct": 1.7639508285047685,
        "smoothedEle": 353.96252493739127,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.262252,
        "lng": 120.849536,
        "ele": 355.25,
        "distanceKm": 49.57219436423739,
        "gradePct": 1.7814600142348411,
        "smoothedEle": 354.6281296034055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261817,
        "lng": 120.849076,
        "ele": 355,
        "distanceKm": 49.63987333354738,
        "gradePct": 1.8397915588111748,
        "smoothedEle": 356.161337070481,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261548,
        "lng": 120.848704,
        "ele": 356.75,
        "distanceKm": 49.6884548247338,
        "gradePct": 1.7954368886249559,
        "smoothedEle": 357.0038848870126,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261431,
        "lng": 120.848269,
        "ele": 357,
        "distanceKm": 49.73507160419029,
        "gradePct": 1.8410129539252564,
        "smoothedEle": 357.85518687044527,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261622,
        "lng": 120.847628,
        "ele": 354,
        "distanceKm": 49.804369791354425,
        "gradePct": 2.121081307708078,
        "smoothedEle": 359.9151621980841,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261763,
        "lng": 120.847039,
        "ele": 355,
        "distanceKm": 49.866976931609734,
        "gradePct": 2.4556137496985424,
        "smoothedEle": 361.9128086984991,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.26177,
        "lng": 120.84659,
        "ele": 359.75,
        "distanceKm": 49.91318868616794,
        "gradePct": 2.589877893573796,
        "smoothedEle": 363.3264535572269,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.26152,
        "lng": 120.846169,
        "ele": 369.75,
        "distanceKm": 49.964664185314206,
        "gradePct": 2.69344664148848,
        "smoothedEle": 364.6716242344403,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261475,
        "lng": 120.846062,
        "ele": 370.75,
        "distanceKm": 49.976758863280736,
        "gradePct": 2.717597107431674,
        "smoothedEle": 364.9538333869927,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261449,
        "lng": 120.845899,
        "ele": 371,
        "distanceKm": 49.993780047932965,
        "gradePct": 2.766675985969895,
        "smoothedEle": 365.4011605124901,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261502,
        "lng": 120.845711,
        "ele": 368.5,
        "distanceKm": 50.014004290093375,
        "gradePct": 2.845808677091297,
        "smoothedEle": 366.0078877773024,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261473,
        "lng": 120.845333,
        "ele": 365.75,
        "distanceKm": 50.05303660721201,
        "gradePct": 2.9491663266582098,
        "smoothedEle": 367.23671804520217,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261402,
        "lng": 120.845217,
        "ele": 365.5,
        "distanceKm": 50.06734835398807,
        "gradePct": 2.964235258828987,
        "smoothedEle": 367.7073594232034,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261303,
        "lng": 120.845148,
        "ele": 365.75,
        "distanceKm": 50.08044802706967,
        "gradePct": 2.9780279906468174,
        "smoothedEle": 368.138141792886,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261222,
        "lng": 120.845103,
        "ele": 365.75,
        "distanceKm": 50.09057556548327,
        "gradePct": 2.991633125545917,
        "smoothedEle": 368.48001094971556,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.261113,
        "lng": 120.845081,
        "ele": 366,
        "distanceKm": 50.102905460659535,
        "gradePct": 3.0256379435269785,
        "smoothedEle": 368.94854696641363,
        "gradeBand": "hard"
      },
      {
        "lat": 22.260673,
        "lng": 120.84518,
        "ele": 372.25,
        "distanceKm": 50.15288075039036,
        "gradePct": 3.1267776273766223,
        "smoothedEle": 370.8433656131072,
        "gradeBand": "hard"
      },
      {
        "lat": 22.26031,
        "lng": 120.845244,
        "ele": 377.25,
        "distanceKm": 50.19377835700006,
        "gradePct": 3.123822771040704,
        "smoothedEle": 372.10414843982875,
        "gradeBand": "hard"
      },
      {
        "lat": 22.26,
        "lng": 120.845165,
        "ele": 378.75,
        "distanceKm": 50.22919454385743,
        "gradePct": 3.09452823348021,
        "smoothedEle": 373.0283073523756,
        "gradeBand": "hard"
      },
      {
        "lat": 22.25983,
        "lng": 120.844949,
        "ele": 378.75,
        "distanceKm": 50.258373676736355,
        "gradePct": 3.1306634106782583,
        "smoothedEle": 373.8992293157912,
        "gradeBand": "hard"
      },
      {
        "lat": 22.25977,
        "lng": 120.844769,
        "ele": 378.25,
        "distanceKm": 50.27806204366291,
        "gradePct": 3.1748671212750157,
        "smoothedEle": 374.51268312696044,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259767,
        "lng": 120.844179,
        "ele": 372.75,
        "distanceKm": 50.33877889876962,
        "gradePct": 3.201575583097311,
        "smoothedEle": 376.39257818912074,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259501,
        "lng": 120.843843,
        "ele": 377.5,
        "distanceKm": 50.38428096006519,
        "gradePct": 3.2456082851809662,
        "smoothedEle": 378.00435263719027,
        "gradeBand": "hard"
      },
      {
        "lat": 22.25939123299056,
        "lng": 120.84334253018878,
        "ele": 381.4137282663001,
        "distanceKm": 50.43721014478151,
        "gradePct": 3.299084734291941,
        "smoothedEle": 380.1464670682439,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259299,
        "lng": 120.842837,
        "ele": 385.5,
        "distanceKm": 50.49023486949408,
        "gradePct": 3.517656330023248,
        "smoothedEle": 382.54787954131297,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259323,
        "lng": 120.842627,
        "ele": 385.25,
        "distanceKm": 50.512009849880904,
        "gradePct": 3.642073884401551,
        "smoothedEle": 383.5061072666235,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259426,
        "lng": 120.842453,
        "ele": 381.25,
        "distanceKm": 50.53326548465652,
        "gradePct": 3.737207190046317,
        "smoothedEle": 384.36143602035736,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259483,
        "lng": 120.842271,
        "ele": 375.5,
        "distanceKm": 50.55303821565514,
        "gradePct": 3.795079392318464,
        "smoothedEle": 385.125217721348,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259479,
        "lng": 120.842192,
        "ele": 373.75,
        "distanceKm": 50.56118015151813,
        "gradePct": 3.80331386754299,
        "smoothedEle": 385.3966155834476,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259434,
        "lng": 120.842099,
        "ele": 373.25,
        "distanceKm": 50.57197979350006,
        "gradePct": 3.8111441360886316,
        "smoothedEle": 385.7566036495121,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259279,
        "lng": 120.841948,
        "ele": 374.5,
        "distanceKm": 50.595185836850874,
        "gradePct": 3.8233650465596893,
        "smoothedEle": 386.512959452785,
        "gradeBand": "hard"
      },
      {
        "lat": 22.259155,
        "lng": 120.841909,
        "ele": 376.75,
        "distanceKm": 50.609546265149554,
        "gradePct": 3.826739744584679,
        "smoothedEle": 386.9677063489098,
        "gradeBand": "hard"
      },
      {
        "lat": 22.258797,
        "lng": 120.841926,
        "ele": 381.5,
        "distanceKm": 50.64939252729362,
        "gradePct": 3.8227771942583955,
        "smoothedEle": 388.2368658224398,
        "gradeBand": "hard"
      },
      {
        "lat": 22.258486,
        "lng": 120.842019,
        "ele": 388.75,
        "distanceKm": 50.68527410236771,
        "gradePct": 3.79273514155873,
        "smoothedEle": 389.42275185041075,
        "gradeBand": "hard"
      },
      {
        "lat": 22.25798,
        "lng": 120.84209,
        "ele": 397,
        "distanceKm": 50.74201124795276,
        "gradePct": 3.8134650952505713,
        "smoothedEle": 391.8042973166933,
        "gradeBand": "hard"
      },
      {
        "lat": 22.257405,
        "lng": 120.841948,
        "ele": 397.5,
        "distanceKm": 50.80759712770806,
        "gradePct": 3.7975545134725603,
        "smoothedEle": 394.7045849728866,
        "gradeBand": "hard"
      },
      {
        "lat": 22.256906,
        "lng": 120.841905,
        "ele": 401.5,
        "distanceKm": 50.86325964985689,
        "gradePct": 3.8079247882967384,
        "smoothedEle": 396.88970655962993,
        "gradeBand": "hard"
      },
      {
        "lat": 22.25654382016793,
        "lng": 120.84179525249203,
        "ele": 402.43007093518605,
        "distanceKm": 50.90508598274377,
        "gradePct": 3.9192634902242762,
        "smoothedEle": 398.5842545433995,
        "gradeBand": "hard"
      },
      {
        "lat": 22.256188,
        "lng": 120.841662,
        "ele": 402.25,
        "distanceKm": 50.94696049695032,
        "gradePct": 4.235650918891037,
        "smoothedEle": 400.86635499321983,
        "gradeBand": "hard"
      },
      {
        "lat": 22.255808666666667,
        "lng": 120.841506,
        "ele": 402.5,
        "distanceKm": 50.99209239021151,
        "gradePct": 4.61332269593999,
        "smoothedEle": 403.54891802477135,
        "gradeBand": "hard"
      },
      {
        "lat": 22.255429333333336,
        "lng": 120.84135,
        "ele": 402.75,
        "distanceKm": 51.03722429894417,
        "gradePct": 4.799240505142533,
        "smoothedEle": 406.00108632853465,
        "gradeBand": "hard"
      },
      {
        "lat": 22.25505,
        "lng": 120.841194,
        "ele": 403,
        "distanceKm": 51.08235622314986,
        "gradePct": 4.820645646898496,
        "smoothedEle": 408.050338305244,
        "gradeBand": "hard"
      },
      {
        "lat": 22.254716,
        "lng": 120.841156,
        "ele": 409,
        "distanceKm": 51.119700703153335,
        "gradePct": 4.775064683231778,
        "smoothedEle": 409.50492429019187,
        "gradeBand": "hard"
      },
      {
        "lat": 22.254519,
        "lng": 120.84116,
        "ele": 412.75,
        "distanceKm": 51.1416100014851,
        "gradePct": 4.80031711304526,
        "smoothedEle": 410.4407662270208,
        "gradeBand": "hard"
      },
      {
        "lat": 22.254166,
        "lng": 120.84139,
        "ele": 412.75,
        "distanceKm": 51.18744634322305,
        "gradePct": 4.859919546000516,
        "smoothedEle": 412.4493625409755,
        "gradeBand": "hard"
      },
      {
        "lat": 22.253939,
        "lng": 120.841462,
        "ele": 412.25,
        "distanceKm": 51.213752732362536,
        "gradePct": 4.860472094113134,
        "smoothedEle": 413.6379961428974,
        "gradeBand": "hard"
      },
      {
        "lat": 22.253588,
        "lng": 120.841446,
        "ele": 415,
        "distanceKm": 51.252816924173615,
        "gradePct": 4.694687099937868,
        "smoothedEle": 415.2985123738974,
        "gradeBand": "hard"
      },
      {
        "lat": 22.252921,
        "lng": 120.841489,
        "ele": 418.25,
        "distanceKm": 51.327115944669174,
        "gradePct": 4.224762115702771,
        "smoothedEle": 418.12615181057436,
        "gradeBand": "hard"
      },
      {
        "lat": 22.252512,
        "lng": 120.841481,
        "ele": 421.5,
        "distanceKm": 51.37260218410439,
        "gradePct": 4.10245922479129,
        "smoothedEle": 419.9148258492584,
        "gradeBand": "hard"
      },
      {
        "lat": 22.252217,
        "lng": 120.84127,
        "ele": 420.25,
        "distanceKm": 51.41194097373327,
        "gradePct": 4.258854079710491,
        "smoothedEle": 421.97924122666126,
        "gradeBand": "hard"
      },
      {
        "lat": 22.251957482732596,
        "lng": 120.84079665919401,
        "ele": 424.82409232980496,
        "distanceKm": 51.46856009280665,
        "gradePct": 4.406798570875882,
        "smoothedEle": 424.84214305717916,
        "gradeBand": "hard"
      },
      {
        "lat": 22.251703,
        "lng": 120.84032,
        "ele": 429.5,
        "distanceKm": 51.52519158894512,
        "gradePct": 4.326936480069666,
        "smoothedEle": 427.105041343757,
        "gradeBand": "hard"
      },
      {
        "lat": 22.251531999999997,
        "lng": 120.83999,
        "ele": 431.50000000000017,
        "distanceKm": 51.564113890822064,
        "gradePct": 4.203555097052233,
        "smoothedEle": 428.33911265204205,
        "gradeBand": "hard"
      },
      {
        "lat": 22.251361,
        "lng": 120.83966,
        "ele": 433.5,
        "distanceKm": 51.60303622888387,
        "gradePct": 4.077617124868842,
        "smoothedEle": 429.44258795488105,
        "gradeBand": "hard"
      },
      {
        "lat": 22.25117,
        "lng": 120.839442,
        "ele": 433,
        "distanceKm": 51.63392976064538,
        "gradePct": 3.926391809048785,
        "smoothedEle": 430.17326971642063,
        "gradeBand": "hard"
      },
      {
        "lat": 22.25093,
        "lng": 120.8393,
        "ele": 429.5,
        "distanceKm": 51.6643559394198,
        "gradePct": 3.7129494325380743,
        "smoothedEle": 430.72940368690274,
        "gradeBand": "hard"
      },
      {
        "lat": 22.250606,
        "lng": 120.838945,
        "ele": 431.5,
        "distanceKm": 51.71566629561026,
        "gradePct": 3.12488063729354,
        "smoothedEle": 431.54225114912646,
        "gradeBand": "hard"
      },
      {
        "lat": 22.250372,
        "lng": 120.838415,
        "ele": 442,
        "distanceKm": 51.77609960390063,
        "gradePct": 2.5096277422631346,
        "smoothedEle": 432.67229232671093,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2501495,
        "lng": 120.83813699999999,
        "ele": 440.8749999999999,
        "distanceKm": 51.81392382074402,
        "gradePct": 2.2558882943707608,
        "smoothedEle": 433.42246536984743,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.249927,
        "lng": 120.837859,
        "ele": 439.75,
        "distanceKm": 51.85174807196838,
        "gradePct": 2.020493684712335,
        "smoothedEle": 434.00852279785954,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.249644,
        "lng": 120.837616,
        "ele": 439.25,
        "distanceKm": 51.89194351976701,
        "gradePct": 1.8364023087447647,
        "smoothedEle": 434.6373088774073,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.249523,
        "lng": 120.837582,
        "ele": 438,
        "distanceKm": 51.90584569090978,
        "gradePct": 1.7681222634931997,
        "smoothedEle": 434.81340304521564,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.249413,
        "lng": 120.837595,
        "ele": 436.5,
        "distanceKm": 51.918150103971136,
        "gradePct": 1.7479098670173485,
        "smoothedEle": 435.0437850335172,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.249344,
        "lng": 120.837637,
        "ele": 435.5,
        "distanceKm": 51.92695637545962,
        "gradePct": 1.7571175382653883,
        "smoothedEle": 435.2796905451471,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.249170723449176,
        "lng": 120.83799686050322,
        "ele": 433.12977864677765,
        "distanceKm": 51.96870395309913,
        "gradePct": 1.8522698595262632,
        "smoothedEle": 436.3550935490609,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.249026,
        "lng": 120.838374,
        "ele": 431.75,
        "distanceKm": 52.010721548840465,
        "gradePct": 2.0077125293416125,
        "smoothedEle": 437.4870551382137,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.248957,
        "lng": 120.838502,
        "ele": 427.75,
        "distanceKm": 52.025966288825884,
        "gradePct": 2.0378706799814763,
        "smoothedEle": 437.8484625484601,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.248882,
        "lng": 120.838552,
        "ele": 426.75,
        "distanceKm": 52.03576572148676,
        "gradePct": 2.042120435066087,
        "smoothedEle": 438.0444512016777,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.248712,
        "lng": 120.838577,
        "ele": 427.75,
        "distanceKm": 52.05484318111571,
        "gradePct": 2.0503938253596257,
        "smoothedEle": 438.4260003942566,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.248397,
        "lng": 120.838515,
        "ele": 434.75,
        "distanceKm": 52.09044609125204,
        "gradePct": 2.020235672416296,
        "smoothedEle": 439.0175352570043,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247729,
        "lng": 120.838507,
        "ele": 435,
        "distanceKm": 52.16472896782872,
        "gradePct": 1.84554118145407,
        "smoothedEle": 439.74820930243385,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247586,
        "lng": 120.838488,
        "ele": 435.25,
        "distanceKm": 52.1807496484628,
        "gradePct": 1.8067675642405807,
        "smoothedEle": 439.88250342137553,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247472,
        "lng": 120.838439,
        "ele": 435.75,
        "distanceKm": 52.19439216997423,
        "gradePct": 1.8100616328692525,
        "smoothedEle": 440.09851001197313,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24741,
        "lng": 120.838358,
        "ele": 436.5,
        "distanceKm": 52.20520987036591,
        "gradePct": 1.8214803166160685,
        "smoothedEle": 440.26979026817486,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247308,
        "lng": 120.837919,
        "ele": 439,
        "distanceKm": 52.25179250032664,
        "gradePct": 1.7122329754239416,
        "smoothedEle": 441.0561593646137,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247443,
        "lng": 120.837219,
        "ele": 451.25,
        "distanceKm": 52.32538206400041,
        "gradePct": 1.6488428756356148,
        "smoothedEle": 442.7811409436556,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2474,
        "lng": 120.836886,
        "ele": 453.5,
        "distanceKm": 52.35998550348917,
        "gradePct": 1.7480483378819425,
        "smoothedEle": 443.75558401243626,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246921,
        "lng": 120.836425,
        "ele": 444.5,
        "distanceKm": 52.43131515243088,
        "gradePct": 2.25498376399198,
        "smoothedEle": 446.1844898590381,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246797,
        "lng": 120.836245,
        "ele": 442.75,
        "distanceKm": 52.45440839291862,
        "gradePct": 2.3545670075322045,
        "smoothedEle": 446.7103933056547,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246737,
        "lng": 120.836009,
        "ele": 443.25,
        "distanceKm": 52.47959666838342,
        "gradePct": 2.4238267840276198,
        "smoothedEle": 447.1443188629933,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246821,
        "lng": 120.835556,
        "ele": 447,
        "distanceKm": 52.52714492393271,
        "gradePct": 2.4686668051422056,
        "smoothedEle": 448.0460799581272,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247205,
        "lng": 120.835231,
        "ele": 452.75,
        "distanceKm": 52.58138497894839,
        "gradePct": 2.484059623553023,
        "smoothedEle": 449.20200290662495,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247235,
        "lng": 120.835173,
        "ele": 452.75,
        "distanceKm": 52.588223071053825,
        "gradePct": 2.4800670318900724,
        "smoothedEle": 449.35031393250404,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247261,
        "lng": 120.835081,
        "ele": 452.25,
        "distanceKm": 52.5981230312835,
        "gradePct": 2.4763674715802466,
        "smoothedEle": 449.57127599737737,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247266,
        "lng": 120.835009,
        "ele": 451.5,
        "distanceKm": 52.60555392378561,
        "gradePct": 2.4722665180672005,
        "smoothedEle": 449.7331575189987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247245,
        "lng": 120.834909,
        "ele": 452.5,
        "distanceKm": 52.61610726131892,
        "gradePct": 2.4575015484698732,
        "smoothedEle": 449.93623889474463,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247196,
        "lng": 120.834827,
        "ele": 453.25,
        "distanceKm": 52.62615253933986,
        "gradePct": 2.444658538325943,
        "smoothedEle": 450.13681337158874,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247141,
        "lng": 120.834774,
        "ele": 454,
        "distanceKm": 52.634347365957154,
        "gradePct": 2.4241217353521396,
        "smoothedEle": 450.30597169881196,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246943,
        "lng": 120.834696,
        "ele": 455.25,
        "distanceKm": 52.65778182554011,
        "gradePct": 2.3752755930475318,
        "smoothedEle": 450.8193545701451,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2468,
        "lng": 120.834704,
        "ele": 455,
        "distanceKm": 52.67370402394431,
        "gradePct": 2.2417026084502845,
        "smoothedEle": 450.9478327116676,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246446,
        "lng": 120.834853,
        "ele": 454.25,
        "distanceKm": 52.71594862184866,
        "gradePct": 1.752908501438372,
        "smoothedEle": 450.91995671106923,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246098,
        "lng": 120.835116,
        "ele": 456.75,
        "distanceKm": 52.76317172904171,
        "gradePct": 1.2571463847978752,
        "smoothedEle": 450.63280093411754,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2459,
        "lng": 120.835389,
        "ele": 455,
        "distanceKm": 52.79886709370231,
        "gradePct": 1.1757651689658737,
        "smoothedEle": 451.0370814020357,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 52.79886709370231,
      "elevationGainM": 715.5784321055263,
      "elevationLossM": 286.2192928031044,
      "minimumElevationM": 3.75,
      "maximumElevationM": 456.75,
      "maximumSustainedGradePct": 8.249514751143762
    },
    "climbs": [
      {
        "startIndex": 87,
        "endIndex": 182,
        "startDistanceKm": 4.264397067659988,
        "endDistanceKm": 8.852037681299226,
        "distanceKm": 4.5876406136392385,
        "gainM": 121.25373119206527,
        "averageGradePct": 2.6430520915603783,
        "maximumGradePct": 6.8006370948954205
      },
      {
        "startIndex": 396,
        "endIndex": 569,
        "startDistanceKm": 19.373127961092216,
        "endDistanceKm": 27.77914828586552,
        "distanceKm": 8.406020324773305,
        "gainM": 75.22163988099747,
        "averageGradePct": 0.8948543659752104,
        "maximumGradePct": 3.6406372556047244
      },
      {
        "startIndex": 597,
        "endIndex": 1171,
        "startDistanceKm": 29.140901454715213,
        "endDistanceKm": 52.79886709370231,
        "distanceKm": 23.6579656389871,
        "gainM": 481.3736153855927,
        "averageGradePct": 2.0347210860443297,
        "maximumGradePct": 8.249514751143762
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
