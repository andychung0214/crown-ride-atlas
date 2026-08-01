"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("hsinchu-city", {
  "hsinchu-city-coast-17k": {
    "routeId": "hsinchu-city-coast-17k",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-28T04:02:05.794Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "d05225cf9f2a068b15909ac48fffd058a8050fc692a76ece009a0be1a2bc7cf4",
      "roadPolicyAuditSha256": "38fde2363a3905f3ce78f538516d77e9e67b779cd2bed0eb1dea7382906128da",
      "reviewedAt": "2026-07-28T04:38:44.415Z",
      "reviewerNote": "以 OpenStreetMap 疊圖逐段檢查新竹漁港南側、港南運河、金城湖、香山濕地至南港賞鳥區官方17公里海岸線並折返。24.774178,120.913828 至 24.778785,120.914415 約514公尺／單向在 OSM 標為 footway，疑為自行車權限標籤缺漏；新竹市官方明列此段屬17公里自行車道（https://ssw.hccg.gov.tw/viewpoint/14），故保留官方自行車走廊而不改走台1。公路車騎士仍須出發前現地確認施工與管制。其餘 BRouter 訊息無 path、steps、私人或未鋪面路段。"
    },
    "waypoints": [
      {
        "name": "新竹漁港南側自行車道口",
        "lat": 24.842868,
        "lng": 120.923192,
        "role": "start"
      },
      {
        "name": "港南運河公園",
        "lat": 24.82231,
        "lng": 120.91052,
        "role": "via"
      },
      {
        "name": "金城湖",
        "lat": 24.811521,
        "lng": 120.911249,
        "role": "via"
      },
      {
        "name": "香山濕地自行車道",
        "lat": 24.774178,
        "lng": 120.913828,
        "role": "via"
      },
      {
        "name": "南港賞鳥區",
        "lat": 24.742882,
        "lng": 120.89446,
        "role": "via"
      },
      {
        "name": "新竹漁港南側自行車道口",
        "lat": 24.842868,
        "lng": 120.923192,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.842868,
        "lng": 120.923192,
        "ele": 6,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 6.552756966462803,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842737,
        "lng": 120.923409,
        "ele": 6.75,
        "distanceKm": 0.026299071138293034,
        "gradePct": 1.5810318051701115,
        "smoothedEle": 6.968553645623529,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842188,
        "lng": 120.923814,
        "ele": 8.75,
        "distanceKm": 0.09976147930647027,
        "gradePct": 1.857349559527425,
        "smoothedEle": 8.405676362939571,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.841944,
        "lng": 120.924061,
        "ele": 8.5,
        "distanceKm": 0.13660330431270912,
        "gradePct": 0.8725081881467817,
        "smoothedEle": 8.042640409108788,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84164,
        "lng": 120.924517,
        "ele": 6,
        "distanceKm": 0.19369871954203605,
        "gradePct": -1.496984081241628,
        "smoothedEle": 6.790088358897705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841329,
        "lng": 120.9242185,
        "ele": 6.9375,
        "distanceKm": 0.23955876236565385,
        "gradePct": -1.0403041744645805,
        "smoothedEle": 6.937499766975831,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841018,
        "lng": 120.92392,
        "ele": 7.875,
        "distanceKm": 0.28541885490109453,
        "gradePct": 0.9032687772376348,
        "smoothedEle": 7.874999766981022,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840707,
        "lng": 120.9236215,
        "ele": 8.8125,
        "distanceKm": 0.33127899714725045,
        "gradePct": 1.9016142762748718,
        "smoothedEle": 8.812499766982025,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840396,
        "lng": 120.923323,
        "ele": 9.75,
        "distanceKm": 0.3771391891039077,
        "gradePct": 2.1104970893969823,
        "smoothedEle": 9.816238875075262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840137,
        "lng": 120.923109,
        "ele": 10.75,
        "distanceKm": 0.4131353440482216,
        "gradePct": 1.8113700014740677,
        "smoothedEle": 10.252966540789295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8397805,
        "lng": 120.922935,
        "ele": 10.125,
        "distanceKm": 0.4564907891898935,
        "gradePct": 0.7606914061571717,
        "smoothedEle": 10.12500006400105,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839424,
        "lng": 120.922761,
        "ele": 9.5,
        "distanceKm": 0.49984625481190126,
        "gradePct": -0.7976352987791275,
        "smoothedEle": 9.294099773520768,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838991,
        "lng": 120.9225445,
        "ele": 7.875000000000001,
        "distanceKm": 0.552718329099845,
        "gradePct": -2.2611344740126804,
        "smoothedEle": 7.87500025657916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838558,
        "lng": 120.922328,
        "ele": 6.25,
        "distanceKm": 0.605590434966762,
        "gradePct": -2.4067903640131996,
        "smoothedEle": 6.733134197114829,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838132666666667,
        "lng": 120.92211633333334,
        "ele": 6.666666666666666,
        "distanceKm": 0.6574848074706678,
        "gradePct": -1.1053931743928314,
        "smoothedEle": 6.666666603732281,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83770733333333,
        "lng": 120.92190466666666,
        "ele": 7.083333333333334,
        "distanceKm": 0.7093792101830781,
        "gradePct": 0.35505183011677144,
        "smoothedEle": 7.083333270403738,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837282,
        "lng": 120.921693,
        "ele": 7.5,
        "distanceKm": 0.7612736431016942,
        "gradePct": 0.6901438302716365,
        "smoothedEle": 7.387231470386099,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8368748,
        "lng": 120.9214874,
        "ele": 7.45,
        "distanceKm": 0.8110792503242894,
        "gradePct": 0.35671115746791593,
        "smoothedEle": 7.450000007107332,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8364676,
        "lng": 120.9212818,
        "ele": 7.4,
        "distanceKm": 0.8608848859762078,
        "gradePct": 0.01504513141563724,
        "smoothedEle": 7.400000007107062,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8360604,
        "lng": 120.9210762,
        "ele": 7.35,
        "distanceKm": 0.910690550056372,
        "gradePct": -0.09951013252539379,
        "smoothedEle": 7.350000007107152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8356532,
        "lng": 120.9208706,
        "ele": 7.3,
        "distanceKm": 0.960496242565141,
        "gradePct": -0.10039016007542315,
        "smoothedEle": 7.300000007106881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835246,
        "lng": 120.920665,
        "ele": 7.25,
        "distanceKm": 1.0103019635014372,
        "gradePct": -0.32794879364621565,
        "smoothedEle": 7.022441316235501,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834749869762884,
        "lng": 120.92046439220594,
        "ele": 6.085442459127894,
        "distanceKm": 1.069066173065421,
        "gradePct": -1.0473969750745735,
        "smoothedEle": 6.204844287739482,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834254,
        "lng": 120.920263,
        "ele": 5.5,
        "distanceKm": 1.127830549295104,
        "gradePct": -1.2670339660939927,
        "smoothedEle": 5.511528979872012,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83383595247455,
        "lng": 120.9201529956506,
        "ele": 5.081764175626594,
        "distanceKm": 1.1756224701759184,
        "gradePct": -1.0610273507550456,
        "smoothedEle": 5.066464271283221,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83341597593699,
        "lng": 120.92005029229732,
        "ele": 4.604518110216116,
        "distanceKm": 1.2234580382771933,
        "gradePct": -0.9799411500632768,
        "smoothedEle": 4.583175696762138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832995994722907,
        "lng": 120.91994761234707,
        "ele": 4.045444550964656,
        "distanceKm": 1.2712936100257808,
        "gradePct": -1.122983252793024,
        "smoothedEle": 3.9837937501346796,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832576,
        "lng": 120.919845,
        "ele": 3.25,
        "distanceKm": 1.3191291785961996,
        "gradePct": -1.2494056424875528,
        "smoothedEle": 3.3775050512145195,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832256,
        "lng": 120.919789,
        "ele": 3,
        "distanceKm": 1.3551575686284962,
        "gradePct": -1.001833655024319,
        "smoothedEle": 3.1841454469317547,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8318595,
        "lng": 120.91973399999999,
        "ele": 3.375000000000001,
        "distanceKm": 1.399594403576696,
        "gradePct": -0.25009724847113124,
        "smoothedEle": 3.3749999958379,
        "gradeBand": "descent"
      },
      {
        "lat": 24.831463,
        "lng": 120.919679,
        "ele": 3.75,
        "distanceKm": 1.4440312407446825,
        "gradePct": 0.7237716310663946,
        "smoothedEle": 3.9676306082115733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8310515,
        "lng": 120.91969875000001,
        "ele": 4.9375,
        "distanceKm": 1.489831402677887,
        "gradePct": 1.604431727214557,
        "smoothedEle": 4.937499998286628,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83064,
        "lng": 120.9197185,
        "ele": 6.125,
        "distanceKm": 1.535631564899659,
        "gradePct": 2.2693914275807145,
        "smoothedEle": 6.12499999828862,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.830228499999997,
        "lng": 120.91973825,
        "ele": 7.3125,
        "distanceKm": 1.5814317274096632,
        "gradePct": 2.5528724699987815,
        "smoothedEle": 7.3124999982906145,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829817,
        "lng": 120.919758,
        "ele": 8.5,
        "distanceKm": 1.6272318902075635,
        "gradePct": 2.366715519257982,
        "smoothedEle": 8.27392996367495,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829348201522272,
        "lng": 120.91973079347753,
        "ele": 8.900594879207402,
        "distanceKm": 1.6794322292374344,
        "gradePct": 1.3533741243953938,
        "smoothedEle": 8.614031422804603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828881467681516,
        "lng": 120.91966619565169,
        "ele": 8.10039658613827,
        "distanceKm": 1.7317385610571412,
        "gradePct": -0.20289572882811038,
        "smoothedEle": 8.100396598391669,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828414733840756,
        "lng": 120.91960159782585,
        "ele": 7.300198293069135,
        "distanceKm": 1.7840448959394384,
        "gradePct": -1.2685379081075598,
        "smoothedEle": 7.300198305319226,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827948,
        "lng": 120.919537,
        "ele": 6.5,
        "distanceKm": 1.8363512338834995,
        "gradePct": -1.3164274467872896,
        "smoothedEle": 6.713403073318462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827537666666665,
        "lng": 120.919497,
        "ele": 6.583333333333333,
        "distanceKm": 1.88215650152773,
        "gradePct": -0.7457542071804497,
        "smoothedEle": 6.583333332842316,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827127333333333,
        "lng": 120.919457,
        "ele": 6.666666666666667,
        "distanceKm": 1.9279617703504022,
        "gradePct": -0.14085305521597735,
        "smoothedEle": 6.666666666175432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826717,
        "lng": 120.919417,
        "ele": 6.75,
        "distanceKm": 1.9737670403520362,
        "gradePct": -0.2442729325309443,
        "smoothedEle": 6.362883316189359,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826279620019644,
        "lng": 120.91944882474328,
        "ele": 5.327687739980662,
        "distanceKm": 2.022507474283701,
        "gradePct": -1.3768562212037014,
        "smoothedEle": 5.279887467028219,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825843080013097,
        "lng": 120.91949388316219,
        "ele": 3.718458493320441,
        "distanceKm": 2.0712611002671304,
        "gradePct": -2.661044358628237,
        "smoothedEle": 3.718458505351799,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825406540006547,
        "lng": 120.9195389415811,
        "ele": 2.1092292466602203,
        "distanceKm": 2.1200147277458545,
        "gradePct": -3.226046187803535,
        "smoothedEle": 2.10922925868509,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82497,
        "lng": 120.919584,
        "ele": 0.5,
        "distanceKm": 2.1687683567190668,
        "gradePct": -2.7792531083177763,
        "smoothedEle": 1.0190403199031752,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82455050859193,
        "lng": 120.9195006755596,
        "ele": 0.9056998680587498,
        "distanceKm": 2.2161656653717823,
        "gradePct": -1.3630436568193882,
        "smoothedEle": 0.8732330456134437,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824136757732738,
        "lng": 120.91937220800364,
        "ele": 1.1901298812528764,
        "distanceKm": 2.263964632564693,
        "gradePct": 0.06367257798238185,
        "smoothedEle": 1.1901298645473655,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.823723006873546,
        "lng": 120.91924374044768,
        "ele": 1.4745598944470004,
        "distanceKm": 2.3117636115042615,
        "gradePct": 0.5877848928489429,
        "smoothedEle": 1.4745598777400515,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82330925601435,
        "lng": 120.91911527289172,
        "ele": 1.7589899076411244,
        "distanceKm": 2.3595626021914984,
        "gradePct": 0.5980445360980879,
        "smoothedEle": 1.7589898909365735,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82289550515516,
        "lng": 120.91898680533576,
        "ele": 2.043419920835251,
        "distanceKm": 2.4073616046247186,
        "gradePct": 0.5950543699206853,
        "smoothedEle": 2.0434199041287204,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822481754295964,
        "lng": 120.9188583377798,
        "ele": 2.327849934029375,
        "distanceKm": 2.455160618805313,
        "gradePct": 0.595054223684928,
        "smoothedEle": 2.3278499173252416,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822068003436772,
        "lng": 120.91872987022384,
        "ele": 2.6122799472234988,
        "distanceKm": 2.5029596447315967,
        "gradePct": 0.5950540774511593,
        "smoothedEle": 2.6122799305173876,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821654252577577,
        "lng": 120.91860140266787,
        "ele": 2.8967099604176254,
        "distanceKm": 2.5507586824049606,
        "gradePct": 0.5950539312192569,
        "smoothedEle": 2.896709943713909,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821240501718385,
        "lng": 120.91847293511192,
        "ele": 3.1811399736117494,
        "distanceKm": 2.5985577318237194,
        "gradePct": 0.5950537849892971,
        "smoothedEle": 3.181139956906057,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82082675085919,
        "lng": 120.91834446755595,
        "ele": 3.465569986805876,
        "distanceKm": 2.646356792989265,
        "gradePct": 0.5950536387611994,
        "smoothedEle": 3.4655699701025804,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820413,
        "lng": 120.918216,
        "ele": 3.75,
        "distanceKm": 2.6941558658999107,
        "gradePct": 0.36265866479821895,
        "smoothedEle": 3.517605155557905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8205293571151,
        "lng": 120.91777868466806,
        "ele": 3.1643098233162865,
        "distanceKm": 2.7401487137111,
        "gradePct": -0.21597382662457704,
        "smoothedEle": 3.21265474697446,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820644398310016,
        "lng": 120.91734094763818,
        "ele": 2.757652029366569,
        "distanceKm": 2.7861414523164507,
        "gradePct": -0.6434824011743258,
        "smoothedEle": 2.865398076858753,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820758917460985,
        "lng": 120.91690304289067,
        "ele": 2.75,
        "distanceKm": 2.832134304959917,
        "gradePct": -0.4462180575479673,
        "smoothedEle": 2.8195753259654004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820873,
        "lng": 120.916465,
        "ele": 3,
        "distanceKm": 2.8781271012979035,
        "gradePct": 0.07854773342772063,
        "smoothedEle": 3.004456163273269,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820971999999998,
        "lng": 120.916059,
        "ele": 3.25,
        "distanceKm": 2.920554967017275,
        "gradePct": 0.4188882010944042,
        "smoothedEle": 3.2500000395298794,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821071,
        "lng": 120.915653,
        "ele": 3.5,
        "distanceKm": 2.9629828011127426,
        "gradePct": 0.2879486212630116,
        "smoothedEle": 3.23152805770935,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821202,
        "lng": 120.915204,
        "ele": 2.75,
        "distanceKm": 3.010581005136746,
        "gradePct": -0.3267721277535475,
        "smoothedEle": 2.865505346187495,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821321527454902,
        "lng": 120.91474466412619,
        "ele": 2.43710090340235,
        "distanceKm": 3.05880623838077,
        "gradePct": -0.7636798192445495,
        "smoothedEle": 2.4696666058762426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821441889024694,
        "lng": 120.91428559402965,
        "ele": 2.25,
        "distanceKm": 3.1070313026452174,
        "gradePct": -0.742527020747856,
        "smoothedEle": 2.1502749799602574,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821560918028595,
        "lng": 120.91382610143455,
        "ele": 1.677673501049957,
        "distanceKm": 3.1552564131161978,
        "gradePct": -0.7534011227586297,
        "smoothedEle": 1.745402892447353,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821680847035108,
        "lng": 120.91336689140444,
        "ele": 1.3669765929883053,
        "distanceKm": 3.2034816366031404,
        "gradePct": -0.5899408896296747,
        "smoothedEle": 1.583843309570204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8218006015795,
        "lng": 120.91290762597683,
        "ele": 1.8940105300049588,
        "distanceKm": 3.2517068296663196,
        "gradePct": 0.19013452225634203,
        "smoothedEle": 1.9653378080489472,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821920986062928,
        "lng": 120.91244855981337,
        "ele": 2.696573752855161,
        "distanceKm": 3.2999320476131144,
        "gradePct": 0.8421884234272904,
        "smoothedEle": 2.4379232303333076,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822040133804773,
        "lng": 120.91198910197232,
        "ele": 2.5,
        "distanceKm": 3.348157238364378,
        "gradePct": 0.6136297471771689,
        "smoothedEle": 2.5508878427869215,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82216016784712,
        "lng": 120.9115299236223,
        "ele": 2.5,
        "distanceKm": 3.3963824481844327,
        "gradePct": 0.22629846179482074,
        "smoothedEle": 2.629437215948163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822281,
        "lng": 120.911071,
        "ele": 3,
        "distanceKm": 3.4446075618051673,
        "gradePct": 0.21776504716315054,
        "smoothedEle": 2.760337985838751,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822235,
        "lng": 120.91105,
        "ele": 2.75,
        "distanceKm": 3.4501442281814954,
        "gradePct": 0.2615803915627002,
        "smoothedEle": 2.8157046496020324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822155,
        "lng": 120.911011,
        "ele": 2.5,
        "distanceKm": 3.4598716983281625,
        "gradePct": 0.34301095911442403,
        "smoothedEle": 2.9129793510687043,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822178,
        "lng": 120.910927,
        "ele": 2.75,
        "distanceKm": 3.4687265469651916,
        "gradePct": 0.4171366402243205,
        "smoothedEle": 3.001527837438995,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822286,
        "lng": 120.910513,
        "ele": 3.5,
        "distanceKm": 3.512199972032843,
        "gradePct": 0.39318311720138566,
        "smoothedEle": 3.0655549349382194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822178,
        "lng": 120.910927,
        "ele": 2.75,
        "distanceKm": 3.5556733971004943,
        "gradePct": 0.13053149864697333,
        "smoothedEle": 3.001527837438995,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822155,
        "lng": 120.911011,
        "ele": 2.5,
        "distanceKm": 3.5645282457375234,
        "gradePct": -0.04656547409360764,
        "smoothedEle": 2.9129793510687043,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822235,
        "lng": 120.91105,
        "ele": 2.75,
        "distanceKm": 3.5742557158841906,
        "gradePct": -0.19396647622327007,
        "smoothedEle": 2.8157046496020324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822281,
        "lng": 120.911071,
        "ele": 3,
        "distanceKm": 3.5797923822605187,
        "gradePct": -0.25748747053092846,
        "smoothedEle": 2.760337985838751,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82216016784712,
        "lng": 120.9115299236223,
        "ele": 2.5,
        "distanceKm": 3.628017495881253,
        "gradePct": -0.41282187468833664,
        "smoothedEle": 2.629437215948163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822040133804773,
        "lng": 120.91198910197232,
        "ele": 2.5,
        "distanceKm": 3.6762427057013083,
        "gradePct": -0.2449469086439351,
        "smoothedEle": 2.5508878427869206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821920986062928,
        "lng": 120.91244855981337,
        "ele": 2.696573752855161,
        "distanceKm": 3.724467896452572,
        "gradePct": -0.20114890947780345,
        "smoothedEle": 2.437923230333303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8218006015795,
        "lng": 120.91290762597683,
        "ele": 1.8940105300049588,
        "distanceKm": 3.7726931143993667,
        "gradePct": -0.5913316201947636,
        "smoothedEle": 1.9653378080489434,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821680847035108,
        "lng": 120.91336689140444,
        "ele": 1.3669765929883053,
        "distanceKm": 3.820918307462546,
        "gradePct": -0.8623946197488663,
        "smoothedEle": 1.5838433095702027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821560918028595,
        "lng": 120.91382610143455,
        "ele": 1.677673501049957,
        "distanceKm": 3.8691435309494886,
        "gradePct": -0.254719235196476,
        "smoothedEle": 1.745402892447352,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821441889024694,
        "lng": 120.91428559402965,
        "ele": 2.25,
        "distanceKm": 3.917368641420469,
        "gradePct": 0.5383513667049011,
        "smoothedEle": 2.1502749799602574,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821321527454902,
        "lng": 120.91474466412619,
        "ele": 2.43710090340235,
        "distanceKm": 3.9655937056849164,
        "gradePct": 0.7361560023093412,
        "smoothedEle": 2.469666605876242,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821202,
        "lng": 120.915204,
        "ele": 2.75,
        "distanceKm": 4.0138189389289405,
        "gradePct": 0.7450317589821556,
        "smoothedEle": 2.865505346187497,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821071,
        "lng": 120.915653,
        "ele": 3.5,
        "distanceKm": 4.061417142952943,
        "gradePct": 0.8301218139231598,
        "smoothedEle": 3.272127302451998,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82063328548546,
        "lng": 120.91551822170592,
        "ele": 3.373174844842914,
        "distanceKm": 4.111953828519516,
        "gradePct": 0.5182068406616028,
        "smoothedEle": 3.368403127559076,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820195799480224,
        "lng": 120.91538252408728,
        "ele": 3.2270539346104528,
        "distanceKm": 4.162491120048344,
        "gradePct": -0.047119357719197896,
        "smoothedEle": 3.2270539441854083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81975831347499,
        "lng": 120.91524682646865,
        "ele": 3.080933024377991,
        "distanceKm": 4.213028424682696,
        "gradePct": -0.28446452513284604,
        "smoothedEle": 3.0809330339533867,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819320827469753,
        "lng": 120.91511112885,
        "ele": 2.9348121141455294,
        "distanceKm": 4.263565742423174,
        "gradePct": -0.28913471373081523,
        "smoothedEle": 2.9348121237202305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818883341464517,
        "lng": 120.91497543123137,
        "ele": 2.7886912039130682,
        "distanceKm": 4.3141030732688295,
        "gradePct": -0.2891346387508894,
        "smoothedEle": 2.788691213487927,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81844585545928,
        "lng": 120.91483973361274,
        "ele": 2.642570293680607,
        "distanceKm": 4.364640417219876,
        "gradePct": -0.2891345637719779,
        "smoothedEle": 2.6425703032556234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818008369454045,
        "lng": 120.91470403599409,
        "ele": 2.4964493834481427,
        "distanceKm": 4.41517777427653,
        "gradePct": -0.2891344887932844,
        "smoothedEle": 2.496449393022743,
        "gradeBand": "descent"
      },
      {
        "lat": 24.817570883448806,
        "lng": 120.91456833837546,
        "ele": 2.350328473215681,
        "distanceKm": 4.46571514443822,
        "gradePct": -0.2891344138156394,
        "smoothedEle": 2.350328482789881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81713339744357,
        "lng": 120.91443264075683,
        "ele": 2.2042075629832194,
        "distanceKm": 4.516252527704401,
        "gradePct": -0.2891343388398272,
        "smoothedEle": 2.2042075725578543,
        "gradeBand": "descent"
      },
      {
        "lat": 24.816695911438334,
        "lng": 120.91429694313818,
        "ele": 2.058086652750758,
        "distanceKm": 4.5667899240756675,
        "gradePct": -0.2643143212192945,
        "smoothedEle": 2.082906604970445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.816258408576818,
        "lng": 120.91416131475815,
        "ele": 2.0123242670274237,
        "distanceKm": 4.617327244519467,
        "gradePct": -0.1729270358638299,
        "smoothedEle": 2.0287009778146485,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81582089459321,
        "lng": 120.91402573206301,
        "ele": 2.0327803163826346,
        "distanceKm": 4.667864519869427,
        "gradePct": -0.04897369342041165,
        "smoothedEle": 2.0327803150445556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8153833806096,
        "lng": 120.91389014936789,
        "ele": 2.0532363657378454,
        "distanceKm": 4.718401808301864,
        "gradePct": 0.024448648469257962,
        "smoothedEle": 2.053236364399744,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81494586662599,
        "lng": 120.91375456667276,
        "ele": 2.0736924150930562,
        "distanceKm": 4.768939109816992,
        "gradePct": 0.04047713542517131,
        "smoothedEle": 2.073692413754973,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81450835264238,
        "lng": 120.91361898397764,
        "ele": 2.094148464448267,
        "distanceKm": 4.819476424414639,
        "gradePct": 0.04047712494684467,
        "smoothedEle": 2.094148463110162,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814070838658772,
        "lng": 120.9134834012825,
        "ele": 2.114604513803478,
        "distanceKm": 4.87001375209502,
        "gradePct": 0.04047711446858551,
        "smoothedEle": 2.11460451246547,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813633324675163,
        "lng": 120.91334781858738,
        "ele": 2.1350605631586888,
        "distanceKm": 4.920551092857185,
        "gradePct": 0.04047710399050889,
        "smoothedEle": 2.13506056182062,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81319581069155,
        "lng": 120.91321223589226,
        "ele": 2.1555166125139,
        "distanceKm": 4.971088446701728,
        "gradePct": 0.040477093512617,
        "smoothedEle": 2.1555166111759263,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81275829670794,
        "lng": 120.91307665319714,
        "ele": 2.175972661869111,
        "distanceKm": 5.0216258136277165,
        "gradePct": 0.040477083034907185,
        "smoothedEle": 2.1759726605311163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81232078272433,
        "lng": 120.91294107050201,
        "ele": 2.1964287112243217,
        "distanceKm": 5.072163193635357,
        "gradePct": 0.040477072557337714,
        "smoothedEle": 2.1964287098863053,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811883268740722,
        "lng": 120.91280548780688,
        "ele": 2.216884760579533,
        "distanceKm": 5.122700586724865,
        "gradePct": 0.04047706207983751,
        "smoothedEle": 2.2168847592416134,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811445754757113,
        "lng": 120.91266990511176,
        "ele": 2.237340809934744,
        "distanceKm": 5.173237992895291,
        "gradePct": 0.018755044515475452,
        "smoothedEle": 2.215618801509757,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81100820670953,
        "lng": 120.9125344573517,
        "ele": 2.1699648318293496,
        "distanceKm": 5.223775372565389,
        "gradePct": -0.08216148953623643,
        "smoothedEle": 2.1346963464113657,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810570603354765,
        "lng": 120.91239922867585,
        "ele": 1.9599824159146748,
        "distanceKm": 5.27431270940506,
        "gradePct": -0.2539154932638994,
        "smoothedEle": 1.959982429579947,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810133,
        "lng": 120.912264,
        "ele": 1.75,
        "distanceKm": 5.324850059260366,
        "gradePct": -0.3844956577277139,
        "smoothedEle": 1.7464853618859277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81029725,
        "lng": 120.91278475,
        "ele": 1.500000000000002,
        "distanceKm": 5.380493201669407,
        "gradePct": -0.4338727735984942,
        "smoothedEle": 1.4999999177557342,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810461500000002,
        "lng": 120.9133055,
        "ele": 1.25,
        "distanceKm": 5.436136278283034,
        "gradePct": -0.4464902679452845,
        "smoothedEle": 1.2499999177533794,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81062575,
        "lng": 120.91382625,
        "ele": 0.999999999999998,
        "distanceKm": 5.491779289099365,
        "gradePct": -0.44929249011236744,
        "smoothedEle": 0.9999999177565913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81079,
        "lng": 120.914347,
        "ele": 0.75,
        "distanceKm": 5.54742223412097,
        "gradePct": -0.4415143610042689,
        "smoothedEle": 0.7577785781357327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810944,
        "lng": 120.914936,
        "ele": 0.5,
        "distanceKm": 5.609288041651161,
        "gradePct": -0.37611418589407575,
        "smoothedEle": 0.5476677405872608,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81111,
        "lng": 120.915185,
        "ele": 0.5,
        "distanceKm": 5.640470174170053,
        "gradePct": -0.2880418446429546,
        "smoothedEle": 0.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811361,
        "lng": 120.915387,
        "ele": 0.5,
        "distanceKm": 5.675033756380376,
        "gradePct": -0.06382354089277588,
        "smoothedEle": 0.6001798114838651,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811204,
        "lng": 120.915955,
        "ele": 1,
        "distanceKm": 5.73496183178683,
        "gradePct": 0.46273251322962855,
        "smoothedEle": 0.9711530481507137,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810859,
        "lng": 120.916146,
        "ele": 1.25,
        "distanceKm": 5.777895544079167,
        "gradePct": 0.6900431253790241,
        "smoothedEle": 1.307938283769547,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810745400000002,
        "lng": 120.9166078,
        "ele": 1.7499999999999982,
        "distanceKm": 5.826187086717517,
        "gradePct": 0.8331652221990761,
        "smoothedEle": 1.7499998969127706,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8106318,
        "lng": 120.91706959999999,
        "ele": 2.2499999999999964,
        "distanceKm": 5.87447867059076,
        "gradePct": 0.9688646190172484,
        "smoothedEle": 2.249999896910262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8105182,
        "lng": 120.9175314,
        "ele": 2.7500000000000036,
        "distanceKm": 5.922770295699898,
        "gradePct": 1.0312773638345418,
        "smoothedEle": 2.749999896917103,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8104046,
        "lng": 120.9179932,
        "ele": 3.2500000000000018,
        "distanceKm": 5.971061962042197,
        "gradePct": 1.0353758178436696,
        "smoothedEle": 3.249999896914595,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810291,
        "lng": 120.918455,
        "ele": 3.75,
        "distanceKm": 6.019353669618658,
        "gradePct": 0.9789916543519718,
        "smoothedEle": 3.6936166174832956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810107,
        "lng": 120.919127,
        "ele": 4.25,
        "distanceKm": 6.090198730201801,
        "gradePct": 0.8242749157484985,
        "smoothedEle": 4.250068769002406,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.809745987970953,
        "lng": 120.9190175483727,
        "ele": 4.5,
        "distanceKm": 6.131833836166165,
        "gradePct": 0.6354018632078821,
        "smoothedEle": 4.427043882455455,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.809385,
        "lng": 120.918908,
        "ele": 4.5,
        "distanceKm": 6.173468963573946,
        "gradePct": 0.24851414525980609,
        "smoothedEle": 4.367179051270842,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.809123914214496,
        "lng": 120.91860893362772,
        "ele": 4.042936469741749,
        "distanceKm": 6.2153497132132305,
        "gradePct": -0.33185177077021627,
        "smoothedEle": 4.025124329648934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808873957107245,
        "lng": 120.91829396681386,
        "ele": 3.5214682348708806,
        "distanceKm": 6.257577032635947,
        "gradePct": -0.8685608130886807,
        "smoothedEle": 3.5214683607117045,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808624,
        "lng": 120.917979,
        "ele": 3,
        "distanceKm": 6.299804400322707,
        "gradePct": -1.1542644779856381,
        "smoothedEle": 2.9978238558678822,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808407,
        "lng": 120.917677,
        "ele": 2.5,
        "distanceKm": 6.338680757477403,
        "gradePct": -0.9552077460843663,
        "smoothedEle": 2.791641290085539,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808023,
        "lng": 120.917554,
        "ele": 3,
        "distanceKm": 6.3831478842884914,
        "gradePct": -0.15680903000570157,
        "smoothedEle": 3.047565543298793,
        "gradeBand": "descent"
      },
      {
        "lat": 24.807392,
        "lng": 120.917567,
        "ele": 4.25,
        "distanceKm": 6.453324248085119,
        "gradePct": 1.259752262430177,
        "smoothedEle": 4.135672089650264,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.807017,
        "lng": 120.91764,
        "ele": 4.5,
        "distanceKm": 6.495668395348043,
        "gradePct": 1.2813901618391104,
        "smoothedEle": 4.52309015882727,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806842,
        "lng": 120.917777,
        "ele": 4.75,
        "distanceKm": 6.519540415549152,
        "gradePct": 1.0306070971095707,
        "smoothedEle": 4.642450259832812,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806716,
        "lng": 120.918046,
        "ele": 4.75,
        "distanceKm": 6.550093635180942,
        "gradePct": 0.6753778567822938,
        "smoothedEle": 4.76095827938709,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806285000000003,
        "lng": 120.91783550000001,
        "ele": 4.874999999999999,
        "distanceKm": 6.602517307090974,
        "gradePct": 0.31766526374527015,
        "smoothedEle": 4.874999981287193,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805854,
        "lng": 120.917625,
        "ele": 5,
        "distanceKm": 6.654941008941496,
        "gradePct": 0.21321431304325766,
        "smoothedEle": 4.984717499592674,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805374839646845,
        "lng": 120.91757142764827,
        "ele": 5.062234316095762,
        "distanceKm": 6.708494974525828,
        "gradePct": 0.19944762216969797,
        "smoothedEle": 5.086958258238153,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804885379735136,
        "lng": 120.9175643207362,
        "ele": 5.234175737071823,
        "distanceKm": 6.762925235883338,
        "gradePct": 0.23421541815545846,
        "smoothedEle": 5.2341757370393776,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804395919823424,
        "lng": 120.91755721382413,
        "ele": 5.406117158047881,
        "distanceKm": 6.817355497278587,
        "gradePct": 0.29519385187986485,
        "smoothedEle": 5.40611715801581,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803906459911712,
        "lng": 120.91755010691206,
        "ele": 5.578058579023942,
        "distanceKm": 6.871785758711143,
        "gradePct": 0.31589306482199153,
        "smoothedEle": 5.578058578991851,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803417,
        "lng": 120.917543,
        "ele": 5.75,
        "distanceKm": 6.926216020181024,
        "gradePct": 0.34759920180018733,
        "smoothedEle": 5.781706137162988,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803075,
        "lng": 120.917338,
        "ele": 6,
        "distanceKm": 6.969509808065129,
        "gradePct": 0.3582482261105561,
        "smoothedEle": 5.9291172348551315,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802785,
        "lng": 120.917117,
        "ele": 6,
        "distanceKm": 7.008720228540792,
        "gradePct": 0.1356622246672621,
        "smoothedEle": 5.851908906931696,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802419,
        "lng": 120.917094,
        "ele": 5.5,
        "distanceKm": 7.049483791313469,
        "gradePct": -0.7081825491898738,
        "smoothedEle": 5.15274806453463,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802054,
        "lng": 120.916942,
        "ele": 3.75,
        "distanceKm": 7.092873159481049,
        "gradePct": -1.8676496938651543,
        "smoothedEle": 4.0154633085530875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801722,
        "lng": 120.916827,
        "ele": 3,
        "distanceKm": 7.131571900819557,
        "gradePct": -2.424195741137454,
        "smoothedEle": 3.035770132509827,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801202,
        "lng": 120.916629,
        "ele": 2,
        "distanceKm": 7.1927499833254025,
        "gradePct": -1.9924755622198094,
        "smoothedEle": 2.0262163336585366,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80086943007392,
        "lng": 120.91656153213404,
        "ele": 1.4618634845510239,
        "distanceKm": 7.230351967583186,
        "gradePct": -1.6586868615676482,
        "smoothedEle": 1.4079669696249497,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800534,
        "lng": 120.916508,
        "ele": 0.75,
        "distanceKm": 7.268039523258781,
        "gradePct": -1.597732950649675,
        "smoothedEle": 0.8362526005098685,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800609,
        "lng": 120.916954,
        "ele": 0.25,
        "distanceKm": 7.313824655967402,
        "gradePct": -1.2941707772341877,
        "smoothedEle": 0.3855371682284506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800218,
        "lng": 120.91695650000001,
        "ele": 0.25,
        "distanceKm": 7.357302664675962,
        "gradePct": -0.7491290784590363,
        "smoothedEle": 0.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799827,
        "lng": 120.916959,
        "ele": 0.25,
        "distanceKm": 7.400780673389133,
        "gradePct": -0.15568608884200635,
        "smoothedEle": 0.3582579201801707,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799324,
        "lng": 120.917051,
        "ele": 0.75,
        "distanceKm": 7.4574775053170645,
        "gradePct": 0.5875535196964888,
        "smoothedEle": 0.8379888635571872,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798921,
        "lng": 120.917212,
        "ele": 1.5,
        "distanceKm": 7.505145029653768,
        "gradePct": 1.3046005963830736,
        "smoothedEle": 1.6997868012111066,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798462,
        "lng": 120.917408,
        "ele": 3.25,
        "distanceKm": 7.559884048516799,
        "gradePct": 2.2054094511038227,
        "smoothedEle": 3.0869070555756095,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797986,
        "lng": 120.917479,
        "ele": 4.25,
        "distanceKm": 7.6132959204119794,
        "gradePct": 2.168728841048031,
        "smoothedEle": 4.075064204814091,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797504,
        "lng": 120.91748,
        "ele": 4.500000000000002,
        "distanceKm": 7.66689204414143,
        "gradePct": 1.2834401026006759,
        "smoothedEle": 4.4999999999995675,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797022000000002,
        "lng": 120.91748100000001,
        "ele": 4.749999999999998,
        "distanceKm": 7.720488167871227,
        "gradePct": 0.6179122050328307,
        "smoothedEle": 4.749999999998585,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79654,
        "lng": 120.917482,
        "ele": 5,
        "distanceKm": 7.774084291602155,
        "gradePct": -0.2252264318055416,
        "smoothedEle": 4.308321924680388,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796101248887346,
        "lng": 120.91738023279235,
        "ele": 2.4725475432032873,
        "distanceKm": 7.823941055215711,
        "gradePct": -1.9217991095761149,
        "smoothedEle": 2.7997461341744545,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795667,
        "lng": 120.917257,
        "ele": 1.25,
        "distanceKm": 7.87380400480553,
        "gradePct": -2.522053459932929,
        "smoothedEle": 1.7885782685961904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795196,
        "lng": 120.917369,
        "ele": 2.25,
        "distanceKm": 7.927383278888718,
        "gradePct": -0.7120451093425401,
        "smoothedEle": 2.0178963704159463,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794906,
        "lng": 120.91719,
        "ele": 2.25,
        "distanceKm": 7.964347208390149,
        "gradePct": 0.3329382680726805,
        "smoothedEle": 2.3132903632316943,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794467,
        "lng": 120.917117,
        "ele": 2.5,
        "distanceKm": 8.013714917804794,
        "gradePct": 0.5125658649733427,
        "smoothedEle": 2.4719619538459825,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793822,
        "lng": 120.91715,
        "ele": 2.75,
        "distanceKm": 8.085513064142656,
        "gradePct": 0.44722496545149,
        "smoothedEle": 2.8285440065129603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7934685,
        "lng": 120.917147,
        "ele": 3.125,
        "distanceKm": 8.124821691560987,
        "gradePct": 0.5978767866035429,
        "smoothedEle": 3.1249999999875366,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793115,
        "lng": 120.917144,
        "ele": 3.5,
        "distanceKm": 8.164130318985967,
        "gradePct": 0.7252872717551098,
        "smoothedEle": 3.4476348992731642,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79266,
        "lng": 120.917195,
        "ele": 3.75,
        "distanceKm": 8.214985340704905,
        "gradePct": 0.6998345843511807,
        "smoothedEle": 3.750651247073562,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.792208,
        "lng": 120.917168,
        "ele": 4,
        "distanceKm": 8.265319364764993,
        "gradePct": 0.5967807852114356,
        "smoothedEle": 4.051500536622101,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.791857,
        "lng": 120.917113,
        "ele": 4.375,
        "distanceKm": 8.304741761273265,
        "gradePct": 0.6853844522900567,
        "smoothedEle": 4.374999995850726,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.791506,
        "lng": 120.917058,
        "ele": 4.75,
        "distanceKm": 8.344164159994484,
        "gradePct": 0.7113623083828017,
        "smoothedEle": 4.636416997602289,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.791085,
        "lng": 120.917016,
        "ele": 4.75,
        "distanceKm": 8.391168892505751,
        "gradePct": 0.5247864070896818,
        "smoothedEle": 4.788407691969594,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7907415,
        "lng": 120.9169645,
        "ele": 4.874999999999997,
        "distanceKm": 8.429716585354402,
        "gradePct": 0.33438746178283224,
        "smoothedEle": 4.874999998786452,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790398,
        "lng": 120.916913,
        "ele": 5,
        "distanceKm": 8.46826428014473,
        "gradePct": 0.1793294747119407,
        "smoothedEle": 4.893674668056931,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790027,
        "lng": 120.916719,
        "ele": 4.75,
        "distanceKm": 8.513930167195111,
        "gradePct": 0.0034729080381259558,
        "smoothedEle": 4.843010800955994,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.789567557986082,
        "lng": 120.91660635696742,
        "ele": 4.855296070625023,
        "distanceKm": 8.56626806618789,
        "gradePct": -0.01229623186776867,
        "smoothedEle": 4.880411357985398,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78910003687508,
        "lng": 120.91653358498148,
        "ele": 5.066711364652737,
        "distanceKm": 8.618770606403583,
        "gradePct": 0.22148342317568917,
        "smoothedEle": 5.067953192224551,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.788632518437538,
        "lng": 120.91646079249074,
        "ele": 5.283355682326369,
        "distanceKm": 8.671273145815976,
        "gradePct": 0.3850659125440017,
        "smoothedEle": 5.2833556781284985,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.788165,
        "lng": 120.916388,
        "ele": 5.5,
        "distanceKm": 8.723775689103721,
        "gradePct": 0.36006215421504745,
        "smoothedEle": 5.448549729496701,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787805,
        "lng": 120.916305,
        "ele": 5.5,
        "distanceKm": 8.764673422360502,
        "gradePct": 0.18780186609082938,
        "smoothedEle": 5.444080818893315,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7874411196964,
        "lng": 120.91614786781967,
        "ele": 5.302196093061123,
        "distanceKm": 8.808133405560975,
        "gradePct": -0.1966802613184189,
        "smoothedEle": 5.202652572590683,
        "gradeBand": "descent"
      },
      {
        "lat": 24.787059,
        "lng": 120.916047,
        "ele": 4.75,
        "distanceKm": 8.851826342352576,
        "gradePct": -0.7168941651711992,
        "smoothedEle": 4.728590458957717,
        "gradeBand": "descent"
      },
      {
        "lat": 24.786588,
        "lng": 120.915978,
        "ele": 4,
        "distanceKm": 8.904660410987404,
        "gradePct": -1.1630243058881014,
        "smoothedEle": 4.058921394024977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785972,
        "lng": 120.915952,
        "ele": 3.25,
        "distanceKm": 8.973206851362226,
        "gradePct": -1.1411137658053998,
        "smoothedEle": 3.3164798563340288,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785847,
        "lng": 120.915995,
        "ele": 3,
        "distanceKm": 8.987768327113418,
        "gradePct": -1.0351754361195653,
        "smoothedEle": 3.237852240176478,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78573,
        "lng": 120.916225,
        "ele": 3.25,
        "distanceKm": 9.014383645170543,
        "gradePct": -0.6579561560393344,
        "smoothedEle": 3.295650754858801,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785665,
        "lng": 120.916434,
        "ele": 3.5,
        "distanceKm": 9.036686247475187,
        "gradePct": -0.32726888956468675,
        "smoothedEle": 3.384773641636627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785185000000002,
        "lng": 120.91623266666666,
        "ele": 3.5833333333333335,
        "distanceKm": 9.093798882460451,
        "gradePct": 0.33238497116737326,
        "smoothedEle": 3.5833333216747483,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784705,
        "lng": 120.91603133333334,
        "ele": 3.6666666666666665,
        "distanceKm": 9.150911545426322,
        "gradePct": 0.23243687095480542,
        "smoothedEle": 3.6666666550081346,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784225,
        "lng": 120.91583,
        "ele": 3.75,
        "distanceKm": 9.20802423637267,
        "gradePct": 0.16774291770650432,
        "smoothedEle": 3.7718325147463285,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78379201390868,
        "lng": 120.915686948548,
        "ele": 3.909655638391819,
        "distanceKm": 9.258289410528837,
        "gradePct": 0.24980609666243403,
        "smoothedEle": 3.93005816523946,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.783359015186342,
        "lng": 120.91554394382158,
        "ele": 4.151356532734262,
        "distanceKm": 9.308554589428423,
        "gradePct": 0.40444840709086594,
        "smoothedEle": 4.177950377054374,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782926,
        "lng": 120.915401,
        "ele": 4.5,
        "distanceKm": 9.358819770818624,
        "gradePct": 0.41081044477089057,
        "smoothedEle": 4.343484181827107,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782542696224215,
        "lng": 120.91528706685,
        "ele": 4.25,
        "distanceKm": 9.402965994696121,
        "gradePct": 0.16942805225897808,
        "smoothedEle": 4.319817220153129,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782155305946915,
        "lng": 120.91519084572032,
        "ele": 4.25,
        "distanceKm": 9.447123598462094,
        "gradePct": -0.05496622848631835,
        "smoothedEle": 4.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.781767816544733,
        "lng": 120.91509511447529,
        "ele": 4.25,
        "distanceKm": 9.491281110510396,
        "gradePct": -0.07608153184048509,
        "smoothedEle": 4.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78138,
        "lng": 120.915001,
        "ele": 4.25,
        "distanceKm": 9.535438716818502,
        "gradePct": -0.018474869209331567,
        "smoothedEle": 4.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.780956188500625,
        "lng": 120.91496503253079,
        "ele": 4.25,
        "distanceKm": 9.582704155600075,
        "gradePct": 0,
        "smoothedEle": 4.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78053659425031,
        "lng": 120.91488351626539,
        "ele": 4.25,
        "distanceKm": 9.630081198352304,
        "gradePct": 0,
        "smoothedEle": 4.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.780117,
        "lng": 120.914802,
        "ele": 4.25,
        "distanceKm": 9.677458245937059,
        "gradePct": -0.02053905232513927,
        "smoothedEle": 4.229460947674861,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779664666666665,
        "lng": 120.91473833333333,
        "ele": 4.166666666666666,
        "distanceKm": 9.728164520356726,
        "gradePct": -0.08333333209617096,
        "smoothedEle": 4.166666667903829,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779212333333334,
        "lng": 120.91467466666666,
        "ele": 4.083333333333334,
        "distanceKm": 9.778870797745583,
        "gradePct": -0.14437831926491868,
        "smoothedEle": 4.083333334570655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77876,
        "lng": 120.914611,
        "ele": 4,
        "distanceKm": 9.82957707810401,
        "gradePct": -0.1466439860932521,
        "smoothedEle": 4.017701210946051,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778782,
        "lng": 120.91446,
        "ele": 4,
        "distanceKm": 9.845016715191386,
        "gradePct": -0.14185586632057406,
        "smoothedEle": 3.997115028162883,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778785,
        "lng": 120.914415,
        "ele": 4,
        "distanceKm": 9.849572040206168,
        "gradePct": -0.14044317496968178,
        "smoothedEle": 3.9910412614765076,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7783514,
        "lng": 120.91435,
        "ele": 3.95,
        "distanceKm": 9.898230760383434,
        "gradePct": -0.10827459448131675,
        "smoothedEle": 3.95000000077276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7779178,
        "lng": 120.914285,
        "ele": 3.9,
        "distanceKm": 9.946889483651736,
        "gradePct": -0.09461800277604071,
        "smoothedEle": 3.9000000007730424,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7774842,
        "lng": 120.91422,
        "ele": 3.85,
        "distanceKm": 9.995548210012203,
        "gradePct": -0.10226260059320538,
        "smoothedEle": 3.8500000007727384,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777050600000003,
        "lng": 120.91415500000001,
        "ele": 3.8,
        "distanceKm": 10.044206939463622,
        "gradePct": -0.10275648846490251,
        "smoothedEle": 3.800000000773021,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776617,
        "lng": 120.91409,
        "ele": 3.75,
        "distanceKm": 10.092865672007127,
        "gradePct": -0.08992116584488562,
        "smoothedEle": 3.762835316864124,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7761985,
        "lng": 120.91403275,
        "ele": 3.75,
        "distanceKm": 10.139758390192036,
        "gradePct": -0.054571173635233644,
        "smoothedEle": 3.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77578,
        "lng": 120.91397549999999,
        "ele": 3.75,
        "distanceKm": 10.18665111077857,
        "gradePct": -0.017581889403499647,
        "smoothedEle": 3.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775361500000002,
        "lng": 120.91391825,
        "ele": 3.75,
        "distanceKm": 10.233543833766735,
        "gradePct": -0.0017010274510891382,
        "smoothedEle": 3.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774943,
        "lng": 120.913861,
        "ele": 3.75,
        "distanceKm": 10.280436559157073,
        "gradePct": 0,
        "smoothedEle": 3.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774559382645148,
        "lng": 120.9138474521752,
        "ele": 3.75,
        "distanceKm": 10.323114845741994,
        "gradePct": 0,
        "smoothedEle": 3.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774176,
        "lng": 120.913828,
        "ele": 3.75,
        "distanceKm": 10.365790323161834,
        "gradePct": -0.02056206186707595,
        "smoothedEle": 3.729437938132924,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774559382645148,
        "lng": 120.9138474521752,
        "ele": 3.678260852627873,
        "distanceKm": 10.408465800581673,
        "gradePct": -0.10226817304236484,
        "smoothedEle": 3.6477318269576355,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774943,
        "lng": 120.913861,
        "ele": 3.5,
        "distanceKm": 10.451144087166595,
        "gradePct": -0.18540375608002058,
        "smoothedEle": 3.5510910875373143,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775361500000002,
        "lng": 120.91391825,
        "ele": 3.5,
        "distanceKm": 10.498036812556933,
        "gradePct": -0.16769907996835592,
        "smoothedEle": 3.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77578,
        "lng": 120.91397549999999,
        "ele": 3.5,
        "distanceKm": 10.544929535545098,
        "gradePct": -0.06516332220100397,
        "smoothedEle": 3.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7761985,
        "lng": 120.91403275,
        "ele": 3.5,
        "distanceKm": 10.591822256131632,
        "gradePct": -0.0067709531422548664,
        "smoothedEle": 3.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776617,
        "lng": 120.91409,
        "ele": 3.5,
        "distanceKm": 10.63871497431654,
        "gradePct": -0.012835316864124249,
        "smoothedEle": 3.487164683135876,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777050600000003,
        "lng": 120.91415500000001,
        "ele": 3.45,
        "distanceKm": 10.687373706860045,
        "gradePct": -0.0500000007730212,
        "smoothedEle": 3.449999999226979,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7774842,
        "lng": 120.91422,
        "ele": 3.4,
        "distanceKm": 10.736032436311465,
        "gradePct": -0.087898939175273,
        "smoothedEle": 3.3999999992272616,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7779178,
        "lng": 120.914285,
        "ele": 3.35,
        "distanceKm": 10.784691162671932,
        "gradePct": -0.10204888005939673,
        "smoothedEle": 3.349999999226958,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7783514,
        "lng": 120.91435,
        "ele": 3.3,
        "distanceKm": 10.833349885940233,
        "gradePct": -0.10275649446818749,
        "smoothedEle": 3.29999999922724,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778785,
        "lng": 120.914415,
        "ele": 3.25,
        "distanceKm": 10.8820086061175,
        "gradePct": -0.08992118026821393,
        "smoothedEle": 3.2628353199556828,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778782,
        "lng": 120.91446,
        "ele": 3.25,
        "distanceKm": 10.886563931132281,
        "gradePct": -0.08751795049325026,
        "smoothedEle": 3.260557657448292,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77843,
        "lng": 120.914462,
        "ele": 3.25,
        "distanceKm": 10.925705120183578,
        "gradePct": -0.0683821411274386,
        "smoothedEle": 3.2394733516712826,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77799016666667,
        "lng": 120.91438816666667,
        "ele": 3.2083333333333335,
        "distanceKm": 10.975177208205734,
        "gradePct": -0.05971968801470749,
        "smoothedEle": 3.208333334162535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777550333333334,
        "lng": 120.91431433333334,
        "ele": 3.166666666666667,
        "distanceKm": 11.02464930020806,
        "gradePct": -0.07337542599843143,
        "smoothedEle": 3.166666667495695,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777110500000003,
        "lng": 120.9142405,
        "ele": 3.125000000000001,
        "distanceKm": 11.074121396189721,
        "gradePct": -0.08399791018824117,
        "smoothedEle": 3.1250000008292242,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776670666666668,
        "lng": 120.91416666666666,
        "ele": 3.083333333333333,
        "distanceKm": 11.123593496151662,
        "gradePct": -0.08422255862990444,
        "smoothedEle": 3.083333334162375,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776230833333333,
        "lng": 120.91409283333333,
        "ele": 3.0416666666666665,
        "distanceKm": 11.173065600093008,
        "gradePct": -0.08422255185476354,
        "smoothedEle": 3.0416666674956616,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775791,
        "lng": 120.914019,
        "ele": 3,
        "distanceKm": 11.222537708013533,
        "gradePct": -0.07369590172589406,
        "smoothedEle": 3.010526644183224,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775357000000003,
        "lng": 120.913963,
        "ele": 3,
        "distanceKm": 11.271126429952888,
        "gradePct": -0.0432998860047064,
        "smoothedEle": 3,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774923,
        "lng": 120.913907,
        "ele": 3,
        "distanceKm": 11.319715154192606,
        "gradePct": -0.02462620516487277,
        "smoothedEle": 2.9876770843944787,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7744676,
        "lng": 120.9138806,
        "ele": 2.95,
        "distanceKm": 11.370423491770522,
        "gradePct": -0.050152289946936164,
        "smoothedEle": 2.9500000001284814,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7740122,
        "lng": 120.9138542,
        "ele": 2.900000000000001,
        "distanceKm": 11.421131829862365,
        "gradePct": -0.08662447218803392,
        "smoothedEle": 2.9000000001284985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7735568,
        "lng": 120.91382779999999,
        "ele": 2.849999999999999,
        "distanceKm": 11.471840168468203,
        "gradePct": -0.09860311267242486,
        "smoothedEle": 2.8500000001284587,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7731014,
        "lng": 120.9138014,
        "ele": 2.8,
        "distanceKm": 11.522548507587882,
        "gradePct": -0.0986031116731051,
        "smoothedEle": 2.8000000001284753,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772646,
        "lng": 120.913775,
        "ele": 2.75,
        "distanceKm": 11.573256847221465,
        "gradePct": -0.08628019571070475,
        "smoothedEle": 2.762322915091604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772176,
        "lng": 120.9137355,
        "ele": 2.75,
        "distanceKm": 11.625670475237479,
        "gradePct": -0.047680329607487415,
        "smoothedEle": 2.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771706,
        "lng": 120.913696,
        "ele": 2.75,
        "distanceKm": 11.678084104402565,
        "gradePct": -0.01118798353621035,
        "smoothedEle": 2.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7713125,
        "lng": 120.913648,
        "ele": 2.75,
        "distanceKm": 11.722106931277654,
        "gradePct": -0.0008378212175790298,
        "smoothedEle": 2.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770919,
        "lng": 120.9136,
        "ele": 2.75,
        "distanceKm": 11.766129759843766,
        "gradePct": -0.016655933719056885,
        "smoothedEle": 2.733344066280943,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77050825,
        "lng": 120.9135035,
        "ele": 2.6874999999999987,
        "distanceKm": 11.812830771942787,
        "gradePct": -0.06249999789871396,
        "smoothedEle": 2.6875000021012863,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7700975,
        "lng": 120.913407,
        "ele": 2.625,
        "distanceKm": 11.859531790765924,
        "gradePct": -0.11084039027279319,
        "smoothedEle": 2.6250000021012334,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76968675,
        "lng": 120.9133105,
        "ele": 2.5625000000000013,
        "distanceKm": 11.906232816313008,
        "gradePct": -0.13147688535541538,
        "smoothedEle": 2.562500002101263,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769276,
        "lng": 120.913214,
        "ele": 2.5,
        "distanceKm": 11.952933848584129,
        "gradePct": -0.11717410445306517,
        "smoothedEle": 2.5166559274152758,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76887,
        "lng": 120.913125,
        "ele": 2.5,
        "distanceKm": 11.998964667885152,
        "gradePct": -0.07222696786741638,
        "smoothedEle": 2.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768464,
        "lng": 120.913036,
        "ele": 2.5,
        "distanceKm": 12.044995492920933,
        "gradePct": -0.024448615332637397,
        "smoothedEle": 2.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768058,
        "lng": 120.912947,
        "ele": 2.5,
        "distanceKm": 12.091026323692734,
        "gradePct": -0.037327894715568764,
        "smoothedEle": 2.4655445391596946,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767664500000002,
        "lng": 120.9128485,
        "ele": 2.375,
        "distanceKm": 12.135897586348248,
        "gradePct": -0.12499999563458575,
        "smoothedEle": 2.3750000043654147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767271,
        "lng": 120.91275,
        "ele": 2.25,
        "distanceKm": 12.180768855988429,
        "gradePct": -0.1887671056724558,
        "smoothedEle": 2.2844554564748862,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766774,
        "lng": 120.912538,
        "ele": 2.25,
        "distanceKm": 12.24003335532505,
        "gradePct": -0.11665454556322216,
        "smoothedEle": 2.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766391579589506,
        "lng": 120.9123045932243,
        "ele": 2.25,
        "distanceKm": 12.28865031766006,
        "gradePct": -0.029873297465275003,
        "smoothedEle": 2.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766029,
        "lng": 120.912034,
        "ele": 2.25,
        "distanceKm": 12.337352628892118,
        "gradePct": -0.0015585325779317095,
        "smoothedEle": 2.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7656,
        "lng": 120.911532,
        "ele": 2.25,
        "distanceKm": 12.406955939590878,
        "gradePct": -0.024077124728154684,
        "smoothedEle": 2.2259228752718454,
        "gradeBand": "descent"
      },
      {
        "lat": 24.765367666666666,
        "lng": 120.91120133333332,
        "ele": 2.166666666666668,
        "distanceKm": 12.449170840243308,
        "gradePct": -0.0792451659973204,
        "smoothedEle": 2.1666666872477385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.765135333333333,
        "lng": 120.91087066666667,
        "ele": 2.083333333333332,
        "distanceKm": 12.491385790290314,
        "gradePct": -0.14797553565658603,
        "smoothedEle": 2.083333353915185,
        "gradeBand": "descent"
      },
      {
        "lat": 24.764903,
        "lng": 120.91054,
        "ele": 2,
        "distanceKm": 12.533600789733766,
        "gradePct": -0.16444496343177364,
        "smoothedEle": 2.024077083565228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.764757,
        "lng": 120.910063,
        "ele": 2,
        "distanceKm": 12.584425559003503,
        "gradePct": -0.09707301896867139,
        "smoothedEle": 2,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7646,
        "lng": 120.909582,
        "ele": 2,
        "distanceKm": 12.636034080878835,
        "gradePct": -0.022924366984707758,
        "smoothedEle": 2,
        "gradeBand": "descent"
      },
      {
        "lat": 24.764497,
        "lng": 120.909068,
        "ele": 2,
        "distanceKm": 12.689180998239754,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7644545,
        "lng": 120.9085685,
        "ele": 2,
        "distanceKm": 12.739836082329541,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764412,
        "lng": 120.908069,
        "ele": 2,
        "distanceKm": 12.790491183601889,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764321,
        "lng": 120.907686,
        "ele": 2,
        "distanceKm": 12.830464379397489,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764164,
        "lng": 120.907254,
        "ele": 2,
        "distanceKm": 12.877447032960278,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.763817,
        "lng": 120.906728,
        "ele": 2,
        "distanceKm": 12.943093481954264,
        "gradePct": 0.059341281534281295,
        "smoothedEle": 2.059341281534281,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.763439,
        "lng": 120.906416,
        "ele": 2.25,
        "distanceKm": 12.995620456726842,
        "gradePct": 0.20583247286036807,
        "smoothedEle": 2.2222603874345777,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.763255,
        "lng": 120.906317,
        "ele": 2.5,
        "distanceKm": 13.0183916735793,
        "gradePct": 0.1852483710417958,
        "smoothedEle": 2.2222603874345777,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.762999,
        "lng": 120.906327,
        "ele": 2,
        "distanceKm": 13.046875515888157,
        "gradePct": 0.04742858003378253,
        "smoothedEle": 2.118500321768032,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.76236,
        "lng": 120.906444,
        "ele": 1.75,
        "distanceKm": 13.11890455645013,
        "gradePct": -0.4354283741722533,
        "smoothedEle": 1.7849636992975362,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76200082364586,
        "lng": 120.90644627738398,
        "ele": 1.75,
        "distanceKm": 13.158843861939859,
        "gradePct": -0.3130798734669289,
        "smoothedEle": 1.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.761641,
        "lng": 120.906444,
        "ele": 1.75,
        "distanceKm": 13.19885514189702,
        "gradePct": -0.12780422529067526,
        "smoothedEle": 1.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.761142,
        "lng": 120.906409,
        "ele": 1.75,
        "distanceKm": 13.254453916454482,
        "gradePct": -0.0038430496474897297,
        "smoothedEle": 1.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7607325,
        "lng": 120.90638399999999,
        "ele": 1.75,
        "distanceKm": 13.300058218455467,
        "gradePct": 0,
        "smoothedEle": 1.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.760323,
        "lng": 120.906359,
        "ele": 1.75,
        "distanceKm": 13.34566252091698,
        "gradePct": -0.014667434200987647,
        "smoothedEle": 1.7353325657990124,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75984625,
        "lng": 120.90633575,
        "ele": 1.6874999999999996,
        "distanceKm": 13.39872673147382,
        "gradePct": -0.06249999987544164,
        "smoothedEle": 1.6875000001245586,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7593695,
        "lng": 120.9063125,
        "ele": 1.624999999999999,
        "distanceKm": 13.451790942429252,
        "gradePct": -0.10480835036278272,
        "smoothedEle": 1.6250000001244331,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75889275,
        "lng": 120.90628925,
        "ele": 1.5625000000000004,
        "distanceKm": 13.504855153782872,
        "gradePct": -0.11778183190842781,
        "smoothedEle": 1.5625000001246803,
        "gradeBand": "descent"
      },
      {
        "lat": 24.758416,
        "lng": 120.906266,
        "ele": 1.5,
        "distanceKm": 13.557919365535465,
        "gradePct": -0.10311439732096309,
        "smoothedEle": 1.5146674338273154,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757982,
        "lng": 120.906131,
        "ele": 1.5,
        "distanceKm": 13.60806632642688,
        "gradePct": -0.05960541970383247,
        "smoothedEle": 1.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757572,
        "lng": 120.906034,
        "ele": 1.5,
        "distanceKm": 13.654696571259176,
        "gradePct": -0.017572490093901667,
        "smoothedEle": 1.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757086,
        "lng": 120.905952,
        "ele": 1.5,
        "distanceKm": 13.709368014819468,
        "gradePct": 0,
        "smoothedEle": 1.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.756623,
        "lng": 120.905922,
        "ele": 1.5,
        "distanceKm": 13.760940380508519,
        "gradePct": 0,
        "smoothedEle": 1.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.75618066666667,
        "lng": 120.90591666666667,
        "ele": 1.5,
        "distanceKm": 13.810128619180057,
        "gradePct": 0,
        "smoothedEle": 1.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.755738333333333,
        "lng": 120.90591133333334,
        "ele": 1.5,
        "distanceKm": 13.859316857872981,
        "gradePct": 0,
        "smoothedEle": 1.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.755296,
        "lng": 120.905906,
        "ele": 1.5,
        "distanceKm": 13.9085050965865,
        "gradePct": 0,
        "smoothedEle": 1.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.754828500000002,
        "lng": 120.905858,
        "ele": 1.5,
        "distanceKm": 13.960714266656234,
        "gradePct": 0,
        "smoothedEle": 1.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.754361,
        "lng": 120.90581,
        "ele": 1.5,
        "distanceKm": 14.012923438419177,
        "gradePct": 0,
        "smoothedEle": 1.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.753971833075678,
        "lng": 120.90571091707531,
        "ele": 1.5,
        "distanceKm": 14.057338464333466,
        "gradePct": 0,
        "smoothedEle": 1.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.753588,
        "lng": 120.905588,
        "ele": 1.5,
        "distanceKm": 14.101786950908183,
        "gradePct": 0.03065389387716133,
        "smoothedEle": 1.5306538938771612,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7531495,
        "lng": 120.9054415,
        "ele": 1.625,
        "distanceKm": 14.152740720704726,
        "gradePct": 0.12499999052798395,
        "smoothedEle": 1.6249999905279835,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.752711,
        "lng": 120.905295,
        "ele": 1.75,
        "distanceKm": 14.203694505656495,
        "gradePct": 0.1851601897332189,
        "smoothedEle": 1.7193461155948553,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.752338666666667,
        "lng": 120.90516033333333,
        "ele": 1.75,
        "distanceKm": 14.247272191726255,
        "gradePct": 0.13512554808477734,
        "smoothedEle": 1.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.751966333333336,
        "lng": 120.90502566666667,
        "ele": 1.75,
        "distanceKm": 14.290849890509193,
        "gradePct": 0.05443699822623224,
        "smoothedEle": 1.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.751594,
        "lng": 120.904891,
        "ele": 1.75,
        "distanceKm": 14.334427602006809,
        "gradePct": 0.009035279382689365,
        "smoothedEle": 1.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.751220333333332,
        "lng": 120.90475866666667,
        "ele": 1.75,
        "distanceKm": 14.378073492502478,
        "gradePct": 0,
        "smoothedEle": 1.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.750846666666668,
        "lng": 120.90462633333334,
        "ele": 1.75,
        "distanceKm": 14.421719395298867,
        "gradePct": 0,
        "smoothedEle": 1.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.750473,
        "lng": 120.904494,
        "ele": 1.75,
        "distanceKm": 14.465365310397464,
        "gradePct": 0.021590740923511507,
        "smoothedEle": 1.7715907409235114,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.750058666666668,
        "lng": 120.90435433333333,
        "ele": 1.8333333333333333,
        "distanceKm": 14.513547532181038,
        "gradePct": 0.08333332759876518,
        "smoothedEle": 1.8333333275987649,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.749644333333332,
        "lng": 120.90421466666668,
        "ele": 1.9166666666666667,
        "distanceKm": 14.561729767727575,
        "gradePct": 0.14687434856086376,
        "smoothedEle": 1.9166666609321352,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74923,
        "lng": 120.904075,
        "ele": 2,
        "distanceKm": 14.609912017036988,
        "gradePct": 0.14973463448452282,
        "smoothedEle": 1.9784092705455885,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.748893779470066,
        "lng": 120.9039488683383,
        "ele": 2,
        "distanceKm": 14.64940821198701,
        "gradePct": 0.10464402131552546,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.748559,
        "lng": 120.903818,
        "ele": 2,
        "distanceKm": 14.6889102133262,
        "gradePct": 0.04850325816112506,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.748243,
        "lng": 120.903659,
        "ele": 2,
        "distanceKm": 14.727542524762459,
        "gradePct": 0.01195295237420839,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74785,
        "lng": 120.903409,
        "ele": 2,
        "distanceKm": 14.778010377965069,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.747503,
        "lng": 120.903147,
        "ele": 2,
        "distanceKm": 14.824794771108312,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.747267,
        "lng": 120.90291,
        "ele": 2,
        "distanceKm": 14.86031143936123,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.746941,
        "lng": 120.902539,
        "ele": 2,
        "distanceKm": 14.912442502347567,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74674108517049,
        "lng": 120.90221778456169,
        "ele": 2,
        "distanceKm": 14.951766082369412,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74655,
        "lng": 120.90189,
        "ele": 2,
        "distanceKm": 14.991099747419153,
        "gradePct": 0,
        "smoothedEle": 2,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.746365,
        "lng": 120.901532,
        "ele": 2,
        "distanceKm": 15.03269487605664,
        "gradePct": 0.05820631382064277,
        "smoothedEle": 2.0582063138206426,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.746146,
        "lng": 120.901061,
        "ele": 2.25,
        "distanceKm": 15.086129825000125,
        "gradePct": 0.1917936861793537,
        "smoothedEle": 2.191793686179353,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.745954,
        "lng": 120.900667,
        "ele": 2.25,
        "distanceKm": 15.131283653412627,
        "gradePct": 0.19376848637300784,
        "smoothedEle": 2.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.745762,
        "lng": 120.900273,
        "ele": 2.25,
        "distanceKm": 15.176437535976813,
        "gradePct": 0.08243703637892515,
        "smoothedEle": 2.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74557,
        "lng": 120.899879,
        "ele": 2.25,
        "distanceKm": 15.221591472691935,
        "gradePct": 0.012493871117222487,
        "smoothedEle": 2.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.745314,
        "lng": 120.899414,
        "ele": 2.25,
        "distanceKm": 15.276503722993027,
        "gradePct": 0,
        "smoothedEle": 2.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74511,
        "lng": 120.8990885,
        "ele": 2.25,
        "distanceKm": 15.31644156084474,
        "gradePct": 0,
        "smoothedEle": 2.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.744906,
        "lng": 120.898763,
        "ele": 2.25,
        "distanceKm": 15.356379443094067,
        "gradePct": 0,
        "smoothedEle": 2.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.744541,
        "lng": 120.898316,
        "ele": 2.25,
        "distanceKm": 15.417082819642047,
        "gradePct": 0.02380819224157413,
        "smoothedEle": 2.273808192241574,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74429166666667,
        "lng": 120.89799233333333,
        "ele": 2.3333333333333335,
        "distanceKm": 15.459943158262268,
        "gradePct": 0.0819356041597928,
        "smoothedEle": 2.333333312502288,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.744042333333333,
        "lng": 120.89766866666666,
        "ele": 2.4166666666666665,
        "distanceKm": 15.502803546876995,
        "gradePct": 0.14845886151980422,
        "smoothedEle": 2.4166666458369273,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.743793,
        "lng": 120.897345,
        "ele": 2.5,
        "distanceKm": 15.545663985483097,
        "gradePct": 0.1626896792799132,
        "smoothedEle": 2.476191849419209,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.743499,
        "lng": 120.897002,
        "ele": 2.5,
        "distanceKm": 15.593293120170646,
        "gradePct": 0.10182445012580335,
        "smoothedEle": 2.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.743205,
        "lng": 120.896659,
        "ele": 2.5,
        "distanceKm": 15.640922314430233,
        "gradePct": 0.030393452643046822,
        "smoothedEle": 2.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7428995,
        "lng": 120.89624325,
        "ele": 2.5,
        "distanceKm": 15.69492903755274,
        "gradePct": 0,
        "smoothedEle": 2.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.742594,
        "lng": 120.8958275,
        "ele": 2.5,
        "distanceKm": 15.748935840879916,
        "gradePct": 0,
        "smoothedEle": 2.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7422885,
        "lng": 120.89541175000001,
        "ele": 2.5,
        "distanceKm": 15.802942724409798,
        "gradePct": 0,
        "smoothedEle": 2.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.741983,
        "lng": 120.894996,
        "ele": 2.5,
        "distanceKm": 15.856949688143764,
        "gradePct": 0,
        "smoothedEle": 2.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.742449,
        "lng": 120.894781,
        "ele": 2.5,
        "distanceKm": 15.913131671500585,
        "gradePct": 0.0527671188832983,
        "smoothedEle": 2.552767118883298,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.742897,
        "lng": 120.894491,
        "ele": 2.75,
        "distanceKm": 15.970917976393947,
        "gradePct": 0.18411361613788535,
        "smoothedEle": 2.697232881116701,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.742449,
        "lng": 120.894781,
        "ele": 2.75,
        "distanceKm": 16.02870428128731,
        "gradePct": 0.15830135664988687,
        "smoothedEle": 2.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74210777109125,
        "lng": 120.89494054618167,
        "ele": 2.75,
        "distanceKm": 16.06992649068093,
        "gradePct": 0.05524583316583806,
        "smoothedEle": 2.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.741795,
        "lng": 120.895153,
        "ele": 2.75,
        "distanceKm": 16.11079061992575,
        "gradePct": 0.016357721789703506,
        "smoothedEle": 2.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7420875,
        "lng": 120.89554324999999,
        "ele": 2.75,
        "distanceKm": 16.161888834650302,
        "gradePct": 0,
        "smoothedEle": 2.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74238,
        "lng": 120.8959335,
        "ele": 2.75,
        "distanceKm": 16.212986977865786,
        "gradePct": 0,
        "smoothedEle": 2.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7426725,
        "lng": 120.89632375000001,
        "ele": 2.75,
        "distanceKm": 16.264085049570372,
        "gradePct": 0,
        "smoothedEle": 2.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.742965,
        "lng": 120.896714,
        "ele": 2.75,
        "distanceKm": 16.315183049762233,
        "gradePct": 0.02542483654409819,
        "smoothedEle": 2.7754248365440986,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74326766935787,
        "lng": 120.89710717698361,
        "ele": 2.8560476305784004,
        "distanceKm": 16.36723320608269,
        "gradePct": 0.113563446981413,
        "smoothedEle": 2.865129875499955,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.743574,
        "lng": 120.897497,
        "ele": 3,
        "distanceKm": 16.41929084625311,
        "gradePct": 0.18298856349719558,
        "smoothedEle": 2.9654929185343426,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.743838,
        "lng": 120.89781266666667,
        "ele": 3,
        "distanceKm": 16.46262616901117,
        "gradePct": 0.14281005147024503,
        "smoothedEle": 3,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.744101999999998,
        "lng": 120.89812833333333,
        "ele": 3,
        "distanceKm": 16.50596144197189,
        "gradePct": 0.06020512638508272,
        "smoothedEle": 3,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.744366,
        "lng": 120.898444,
        "ele": 3,
        "distanceKm": 16.54929666513536,
        "gradePct": 0.010614026776895118,
        "smoothedEle": 3,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7446351224564,
        "lng": 120.89883285261898,
        "ele": 3,
        "distanceKm": 16.598667963043525,
        "gradePct": 0,
        "smoothedEle": 3,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.744896,
        "lng": 120.899229,
        "ele": 3,
        "distanceKm": 16.6480834121206,
        "gradePct": 0,
        "smoothedEle": 3,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.745153,
        "lng": 120.899678,
        "ele": 3,
        "distanceKm": 16.70167984442446,
        "gradePct": 0,
        "smoothedEle": 3,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.745333,
        "lng": 120.899984,
        "ele": 3,
        "distanceKm": 16.73849696532767,
        "gradePct": 0.022342901902356122,
        "smoothedEle": 3.0223429019023564,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.745531333333332,
        "lng": 120.900388,
        "ele": 3.0833333333333357,
        "distanceKm": 16.784874000762013,
        "gradePct": 0.08333335719277117,
        "smoothedEle": 3.0833333571927724,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.745729666666666,
        "lng": 120.900792,
        "ele": 3.1666666666666643,
        "distanceKm": 16.831250978933703,
        "gradePct": 0.14872110050425713,
        "smoothedEle": 3.1666666905252256,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.745928,
        "lng": 120.901196,
        "ele": 3.25,
        "distanceKm": 16.877627899844853,
        "gradePct": 0.15385304300147065,
        "smoothedEle": 3.227657050379645,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.746118,
        "lng": 120.901655,
        "ele": 3.25,
        "distanceKm": 16.92856748161338,
        "gradePct": 0.08815520140277541,
        "smoothedEle": 3.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.746297,
        "lng": 120.901996,
        "ele": 3.25,
        "distanceKm": 16.96834154162432,
        "gradePct": 0.03455545356585295,
        "smoothedEle": 3.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.746591,
        "lng": 120.902435,
        "ele": 3.25,
        "distanceKm": 17.02342372062364,
        "gradePct": 0.002256139305877948,
        "smoothedEle": 3.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.746899,
        "lng": 120.902872,
        "ele": 3.25,
        "distanceKm": 17.079284057620097,
        "gradePct": 0,
        "smoothedEle": 3.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.747339,
        "lng": 120.903329,
        "ele": 3.25,
        "distanceKm": 17.146541068341428,
        "gradePct": 0,
        "smoothedEle": 3.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.747731,
        "lng": 120.903645,
        "ele": 3.25,
        "distanceKm": 17.200561843494796,
        "gradePct": 0,
        "smoothedEle": 3.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.748131,
        "lng": 120.903916,
        "ele": 3.25,
        "distanceKm": 17.25278454794776,
        "gradePct": 0,
        "smoothedEle": 3.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.748457,
        "lng": 120.90407,
        "ele": 3.25,
        "distanceKm": 17.292229142219735,
        "gradePct": 0.06991413467424747,
        "smoothedEle": 3.3199141346742485,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.748825,
        "lng": 120.904232,
        "ele": 3.5,
        "distanceKm": 17.33629783448034,
        "gradePct": 0.18008586532575788,
        "smoothedEle": 3.4300858653257604,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.749214000000002,
        "lng": 120.90436525,
        "ele": 3.5,
        "distanceKm": 17.381597333173282,
        "gradePct": 0.19893036717001808,
        "smoothedEle": 3.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.749603,
        "lng": 120.9044985,
        "ele": 3.5,
        "distanceKm": 17.426896819356212,
        "gradePct": 0.09341667248456265,
        "smoothedEle": 3.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.749992,
        "lng": 120.90463175,
        "ele": 3.5,
        "distanceKm": 17.472196293028937,
        "gradePct": 0.014509334665820954,
        "smoothedEle": 3.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.750381,
        "lng": 120.904765,
        "ele": 3.5,
        "distanceKm": 17.517495754192534,
        "gradePct": 0,
        "smoothedEle": 3.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.750744,
        "lng": 120.90491,
        "ele": 3.5,
        "distanceKm": 17.56043327990184,
        "gradePct": 0,
        "smoothedEle": 3.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.751191289845284,
        "lng": 120.90506681641412,
        "ele": 3.5,
        "distanceKm": 17.612629747451397,
        "gradePct": 0,
        "smoothedEle": 3.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.75163864492264,
        "lng": 120.90522340820706,
        "ele": 3.5,
        "distanceKm": 17.664826233459568,
        "gradePct": 0,
        "smoothedEle": 3.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.752086,
        "lng": 120.90538,
        "ele": 3.5,
        "distanceKm": 17.717022702223822,
        "gradePct": 0.047318645340606695,
        "smoothedEle": 3.5473186453406074,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.752467568124803,
        "lng": 120.90550424727195,
        "ele": 3.669736710321403,
        "distanceKm": 17.761267355898315,
        "gradePct": 0.1447936161436318,
        "smoothedEle": 3.644793616143634,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.752849,
        "lng": 120.905629,
        "ele": 3.75,
        "distanceKm": 17.805511975692884,
        "gradePct": 0.19074083864787456,
        "smoothedEle": 3.7276244488371555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7532025,
        "lng": 120.9057475,
        "ele": 3.75,
        "distanceKm": 17.846600426147056,
        "gradePct": 0.1375189556710781,
        "smoothedEle": 3.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.753556,
        "lng": 120.905866,
        "ele": 3.75,
        "distanceKm": 17.887688866688073,
        "gradePct": 0.055742386880058704,
        "smoothedEle": 3.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.754109,
        "lng": 120.906016,
        "ele": 3.75,
        "distanceKm": 17.951017773902628,
        "gradePct": 0,
        "smoothedEle": 3.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.754626,
        "lng": 120.906116,
        "ele": 3.75,
        "distanceKm": 18.009385729205587,
        "gradePct": 0,
        "smoothedEle": 3.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.754970714248042,
        "lng": 120.90614554468294,
        "ele": 3.75,
        "distanceKm": 18.047832181816112,
        "gradePct": 0,
        "smoothedEle": 3.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.755316,
        "lng": 120.906166,
        "ele": 3.75,
        "distanceKm": 18.086281778541874,
        "gradePct": 0.028572291116142828,
        "smoothedEle": 3.7785722911161432,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.755804,
        "lng": 120.906181,
        "ele": 3.875000000000004,
        "distanceKm": 18.14056611275605,
        "gradePct": 0.12500000010401502,
        "smoothedEle": 3.875000000104017,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.756292,
        "lng": 120.906196,
        "ele": 4,
        "distanceKm": 18.194850446803812,
        "gradePct": 0.2522113994344121,
        "smoothedEle": 4.046004602099657,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.756922,
        "lng": 120.906236,
        "ele": 4.5,
        "distanceKm": 18.265019689475896,
        "gradePct": 0.24093505413588248,
        "smoothedEle": 4.192967852517715,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.757399,
        "lng": 120.906306,
        "ele": 3.5,
        "distanceKm": 18.3185286386434,
        "gradePct": -0.5478402110224281,
        "smoothedEle": 3.5477562621628183,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757848,
        "lng": 120.906396,
        "ele": 2.75,
        "distanceKm": 18.369275574110162,
        "gradePct": -1.3451472458022167,
        "smoothedEle": 2.796503095608221,
        "gradeBand": "descent"
      },
      {
        "lat": 24.758397,
        "lng": 120.906556,
        "ele": 2,
        "distanceKm": 18.43242333507245,
        "gradePct": -1.3247534451042495,
        "smoothedEle": 2.0173069539561506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75882687540093,
        "lng": 120.90674963969606,
        "ele": 1.5,
        "distanceKm": 18.48406775809834,
        "gradePct": -0.9930896659297691,
        "smoothedEle": 1.6208889424352737,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75924625026729,
        "lng": 120.90697042646404,
        "ele": 1.5,
        "distanceKm": 18.535755184081523,
        "gradePct": -0.4917319764178717,
        "smoothedEle": 1.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.759665625133643,
        "lng": 120.90719121323201,
        "ele": 1.5,
        "distanceKm": 18.587442577603813,
        "gradePct": -0.11299575849032158,
        "smoothedEle": 1.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.760085,
        "lng": 120.907412,
        "ele": 1.5,
        "distanceKm": 18.63912993866673,
        "gradePct": 0,
        "smoothedEle": 1.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.760474,
        "lng": 120.907622,
        "ele": 1.5,
        "distanceKm": 18.687302608452576,
        "gradePct": 0.2640971779012271,
        "smoothedEle": 1.7640971779012309,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.760867666666666,
        "lng": 120.90779633333334,
        "ele": 2.5,
        "distanceKm": 18.73448317287233,
        "gradePct": 1.0000001040641209,
        "smoothedEle": 2.500000104064135,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.761261333333334,
        "lng": 120.90797066666667,
        "ele": 3.5,
        "distanceKm": 18.781663716479255,
        "gradePct": 1.7668170412269768,
        "smoothedEle": 3.5000001040653785,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.761655,
        "lng": 120.908145,
        "ele": 4.5,
        "distanceKm": 18.828844239273096,
        "gradePct": 1.6455000252126106,
        "smoothedEle": 4.057546375709995,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.762014999999998,
        "lng": 120.9082985,
        "ele": 3.875,
        "distanceKm": 18.871770243030152,
        "gradePct": 0.5846937718744855,
        "smoothedEle": 3.874999949317453,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.762375,
        "lng": 120.908452,
        "ele": 3.25,
        "distanceKm": 18.91469623056879,
        "gradePct": -0.36341372905954133,
        "smoothedEle": 3.526941419483468,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76286,
        "lng": 120.908725,
        "ele": 3.75,
        "distanceKm": 18.975262178352107,
        "gradePct": -0.12578543067735157,
        "smoothedEle": 3.720900717511109,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76317606631697,
        "lng": 120.90899390336409,
        "ele": 4,
        "distanceKm": 19.019673499909853,
        "gradePct": 0.38763328624319127,
        "smoothedEle": 3.9305141519471816,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.763471,
        "lng": 120.909294,
        "ele": 4,
        "distanceKm": 19.06432395857966,
        "gradePct": 0.314128362465087,
        "smoothedEle": 4,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.76376,
        "lng": 120.909644,
        "ele": 4,
        "distanceKm": 19.11208966264712,
        "gradePct": 0.12893529917863183,
        "smoothedEle": 4.023655105920858,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764004333333336,
        "lng": 120.909977,
        "ele": 4.083333333333331,
        "distanceKm": 19.155317408437064,
        "gradePct": 0.09734951033269151,
        "smoothedEle": 4.083333354769395,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764248666666667,
        "lng": 120.91031,
        "ele": 4.166666666666669,
        "distanceKm": 19.198545102780464,
        "gradePct": 0.1497192818704024,
        "smoothedEle": 4.166666688102702,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764493,
        "lng": 120.910643,
        "ele": 4.25,
        "distanceKm": 19.24177274567738,
        "gradePct": 0.18447975530565855,
        "smoothedEle": 4.249113968124194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764746000000002,
        "lng": 120.91099533333333,
        "ele": 4.333333333333331,
        "distanceKm": 19.28712686507623,
        "gradePct": 0.18867847924047698,
        "smoothedEle": 4.333333357017907,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764999,
        "lng": 120.91134766666666,
        "ele": 4.416666666666669,
        "distanceKm": 19.3324809276321,
        "gradePct": 0.18527483411906778,
        "smoothedEle": 4.416666690350306,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.765252,
        "lng": 120.9117,
        "ele": 4.5,
        "distanceKm": 19.37783493334723,
        "gradePct": 0.1611519380982362,
        "smoothedEle": 4.477230835714636,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.765614,
        "lng": 120.912144,
        "ele": 4.5,
        "distanceKm": 19.43808444700855,
        "gradePct": 0.0758505667978582,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.765899,
        "lng": 120.91241,
        "ele": 4.5,
        "distanceKm": 19.47962505587657,
        "gradePct": 0.07515434886234189,
        "smoothedEle": 4.553061697821394,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.766321,
        "lng": 120.91274,
        "ele": 4.75,
        "distanceKm": 19.53717569761946,
        "gradePct": 0.19728173174139207,
        "smoothedEle": 4.696938302178615,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.766726,
        "lng": 120.912968,
        "ele": 4.75,
        "distanceKm": 19.587752477781,
        "gradePct": 0.1766197474175383,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767077,
        "lng": 120.913087,
        "ele": 4.75,
        "distanceKm": 19.628589503366662,
        "gradePct": 0.15114994486581207,
        "smoothedEle": 4.8266227614124295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767413,
        "lng": 120.913187,
        "ele": 5,
        "distanceKm": 19.66729129423672,
        "gradePct": 0.19484371262618516,
        "smoothedEle": 4.9233772385875705,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7679575,
        "lng": 120.9133175,
        "ele": 5,
        "distanceKm": 19.729254148635604,
        "gradePct": 0.17171562541521568,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.768502,
        "lng": 120.913448,
        "ele": 5,
        "distanceKm": 19.791216990748936,
        "gradePct": 0.08557107220850181,
        "smoothedEle": 5.03853463236351,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.768970787197336,
        "lng": 120.91355547160784,
        "ele": 5.164833754337179,
        "distanceKm": 19.844461236724573,
        "gradePct": 0.13675196584551036,
        "smoothedEle": 5.146209239412081,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769439782411485,
        "lng": 120.9136618305405,
        "ele": 5.25,
        "distanceKm": 19.897705348206877,
        "gradePct": 0.1784339949925108,
        "smoothedEle": 5.2300898825615905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769909,
        "lng": 120.913767,
        "ele": 5.25,
        "distanceKm": 19.950949590092197,
        "gradePct": 0.12127014755360493,
        "smoothedEle": 5.277701123009463,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770401,
        "lng": 120.9138695,
        "ele": 5.375,
        "distanceKm": 20.006627793277058,
        "gradePct": 0.13693163171032002,
        "smoothedEle": 5.375000004763603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770893,
        "lng": 120.913972,
        "ele": 5.5,
        "distanceKm": 20.062305988840155,
        "gradePct": 0.19072780760648905,
        "smoothedEle": 5.488274486609592,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77132975,
        "lng": 120.91402675,
        "ele": 5.562500000000001,
        "distanceKm": 20.111184022815653,
        "gradePct": 0.17823057663057196,
        "smoothedEle": 5.562500000687241,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7717665,
        "lng": 120.9140815,
        "ele": 5.624999999999997,
        "distanceKm": 20.16006205459198,
        "gradePct": 0.1412906851769626,
        "smoothedEle": 5.625000000687025,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77220325,
        "lng": 120.91413625,
        "ele": 5.687499999999999,
        "distanceKm": 20.208940084169818,
        "gradePct": 0.12840761454590494,
        "smoothedEle": 5.687500000687329,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77264,
        "lng": 120.914191,
        "ele": 5.75,
        "distanceKm": 20.257818111548197,
        "gradePct": 0.15738199300034728,
        "smoothedEle": 5.779512679291128,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773087648532073,
        "lng": 120.91421639335272,
        "ele": 5.931381090791582,
        "distanceKm": 20.30766040708533,
        "gradePct": 0.19320249410442872,
        "smoothedEle": 5.879066180511668,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773535317920274,
        "lng": 120.91424133432068,
        "ele": 5.904160495774067,
        "distanceKm": 20.357502689811785,
        "gradePct": 0.09340652799316063,
        "smoothedEle": 5.872325427207353,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773983,
        "lng": 120.914266,
        "ele": 5.75,
        "distanceKm": 20.407344985119515,
        "gradePct": -0.08977448305776875,
        "smoothedEle": 5.788661683111251,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774482,
        "lng": 120.914318,
        "ele": 5.75,
        "distanceKm": 20.4630791477612,
        "gradePct": -0.11296495638710019,
        "smoothedEle": 5.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774860085398878,
        "lng": 120.91434735799753,
        "ele": 5.75,
        "distanceKm": 20.505224739679015,
        "gradePct": -0.04222066190345626,
        "smoothedEle": 5.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775237,
        "lng": 120.914393,
        "ele": 5.75,
        "distanceKm": 20.54738835150346,
        "gradePct": -0.04529265502608772,
        "smoothedEle": 5.715591739103595,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775640000000003,
        "lng": 120.9144275,
        "ele": 5.625,
        "distanceKm": 20.592335134069213,
        "gradePct": -0.1250000005479155,
        "smoothedEle": 5.624999999452083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776043,
        "lng": 120.914462,
        "ele": 5.5,
        "distanceKm": 20.637281915758294,
        "gradePct": -0.18943098926478005,
        "smoothedEle": 5.534408261444327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77641566666667,
        "lng": 120.91451666666667,
        "ele": 5.5,
        "distanceKm": 20.679086540707267,
        "gradePct": -0.1517029813360114,
        "smoothedEle": 5.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776788333333332,
        "lng": 120.91457133333333,
        "ele": 5.5,
        "distanceKm": 20.720891163468163,
        "gradePct": -0.06744436951295711,
        "smoothedEle": 5.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777161,
        "lng": 120.914626,
        "ele": 5.5,
        "distanceKm": 20.762695784042123,
        "gradePct": -0.03561347010330478,
        "smoothedEle": 5.477877320480107,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777578333333334,
        "lng": 120.91469366666666,
        "ele": 5.416666666666664,
        "distanceKm": 20.80960135319438,
        "gradePct": -0.08333333472735187,
        "smoothedEle": 5.416666665272647,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777995666666666,
        "lng": 120.91476133333333,
        "ele": 5.333333333333336,
        "distanceKm": 20.856506919000996,
        "gradePct": -0.14781908770456967,
        "smoothedEle": 5.333333331939622,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778413,
        "lng": 120.914829,
        "ele": 5.25,
        "distanceKm": 20.903412481462706,
        "gradePct": -0.1526203137832503,
        "smoothedEle": 5.2721226823076215,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7788,
        "lng": 120.914882,
        "ele": 5.25,
        "distanceKm": 20.946776364867848,
        "gradePct": -0.10660888698842123,
        "smoothedEle": 5.244011935191397,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779254512296653,
        "lng": 120.91496020700819,
        "ele": 5.2254825848246185,
        "distanceKm": 20.997928925072355,
        "gradePct": -0.06157558586152503,
        "smoothedEle": 5.2177030078419175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77970863422249,
        "lng": 120.91504115525615,
        "ele": 5.169111938618462,
        "distanceKm": 21.0490820775803,
        "gradePct": -0.0737141173301133,
        "smoothedEle": 5.16911193727196,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78016275614833,
        "lng": 120.91512210350409,
        "ele": 5.112741292412309,
        "distanceKm": 21.100235225310932,
        "gradePct": -0.10277093102481626,
        "smoothedEle": 5.112741291065806,
        "gradeBand": "descent"
      },
      {
        "lat": 24.780616878074163,
        "lng": 120.91520305175204,
        "ele": 5.056370646206153,
        "distanceKm": 21.151388368264247,
        "gradePct": -0.11019976560569167,
        "smoothedEle": 5.056370644859788,
        "gradeBand": "descent"
      },
      {
        "lat": 24.781071,
        "lng": 120.915284,
        "ele": 5,
        "distanceKm": 21.202541506440735,
        "gradePct": -0.0964321287199463,
        "smoothedEle": 5.01376764583067,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7815255,
        "lng": 120.91538,
        "ele": 5,
        "distanceKm": 21.254000575708638,
        "gradePct": -0.054195062379721055,
        "smoothedEle": 5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78198,
        "lng": 120.915476,
        "ele": 5,
        "distanceKm": 21.305459638291776,
        "gradePct": -0.012986912591926008,
        "smoothedEle": 5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782587,
        "lng": 120.915629,
        "ele": 5,
        "distanceKm": 21.37469988977531,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782980000000002,
        "lng": 120.91574800000001,
        "ele": 5,
        "distanceKm": 21.420020820981765,
        "gradePct": 0,
        "smoothedEle": 5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.783373,
        "lng": 120.915867,
        "ele": 5,
        "distanceKm": 21.465341742102403,
        "gradePct": -0.10029241619581644,
        "smoothedEle": 4.899707583804182,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7837725,
        "lng": 120.9160035,
        "ele": 4.625,
        "distanceKm": 21.511852453464634,
        "gradePct": -0.37500002464513393,
        "smoothedEle": 4.624999975354861,
        "gradeBand": "descent"
      },
      {
        "lat": 24.784172,
        "lng": 120.91614,
        "ele": 4.25,
        "distanceKm": 21.55836315168279,
        "gradePct": -0.5836664179016534,
        "smoothedEle": 4.331484358086567,
        "gradeBand": "descent"
      },
      {
        "lat": 24.784633666666668,
        "lng": 120.91633166666666,
        "ele": 4.166666666666667,
        "distanceKm": 21.613223753072255,
        "gradePct": -0.44967944249925185,
        "smoothedEle": 4.166666656087245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785095333333334,
        "lng": 120.91652333333333,
        "ele": 4.083333333333333,
        "distanceKm": 21.668084329071107,
        "gradePct": -0.2189457025932744,
        "smoothedEle": 4.083333322753764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785557,
        "lng": 120.916715,
        "ele": 4,
        "distanceKm": 21.722944879678987,
        "gradePct": 0.1590882964204216,
        "smoothedEle": 4.31098854021348,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785980666666667,
        "lng": 120.91687833333333,
        "ele": 5.166666666666666,
        "distanceKm": 21.772856804884686,
        "gradePct": 1.0635290755462323,
        "smoothedEle": 5.166666775163215,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786404333333333,
        "lng": 120.91704166666666,
        "ele": 6.333333333333333,
        "distanceKm": 21.82276871149098,
        "gradePct": 2.0230759480018636,
        "smoothedEle": 6.33333344183129,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786828,
        "lng": 120.917205,
        "ele": 7.5,
        "distanceKm": 21.87268059949763,
        "gradePct": 2.2206514297259434,
        "smoothedEle": 7.384297381429391,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78728258453913,
        "lng": 120.9173702176153,
        "ele": 8.254634308647416,
        "distanceKm": 21.92590879686379,
        "gradePct": 1.794549652609057,
        "smoothedEle": 8.194001941590422,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787737,
        "lng": 120.917536,
        "ele": 8.75,
        "distanceKm": 21.97913702009798,
        "gradePct": 0.9814155323185265,
        "smoothedEle": 8.463927646936371,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.788246674338772,
        "lng": 120.91774366557559,
        "ele": 7.8896966773266906,
        "distanceKm": 22.039563376498016,
        "gradePct": -0.2785498545226388,
        "smoothedEle": 7.984695841884735,
        "gradeBand": "descent"
      },
      {
        "lat": 24.788779,
        "lng": 120.917905,
        "ele": 7.5,
        "distanceKm": 22.100955133104872,
        "gradePct": -0.7894885054088231,
        "smoothedEle": 7.501403163486892,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7891365,
        "lng": 120.918002,
        "ele": 7.250000000000011,
        "distanceKm": 22.141895647223475,
        "gradePct": -0.7163355780636258,
        "smoothedEle": 7.2499999915638105,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789494,
        "lng": 120.918099,
        "ele": 7,
        "distanceKm": 22.182836154593126,
        "gradePct": -0.5192212637580853,
        "smoothedEle": 7.12481944813538,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790014,
        "lng": 120.918225,
        "ele": 7.25,
        "distanceKm": 22.24204008871517,
        "gradePct": -0.3491254115302466,
        "smoothedEle": 6.900432932736402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790362,
        "lng": 120.918336,
        "ele": 6.25,
        "distanceKm": 22.282325691731945,
        "gradePct": -1.105233649280157,
        "smoothedEle": 6.021146600673951,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7907035,
        "lng": 120.9184515,
        "ele": 4.5,
        "distanceKm": 22.322048504961415,
        "gradePct": -2.476202334939894,
        "smoothedEle": 4.49999991756102,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791045,
        "lng": 120.918567,
        "ele": 2.75,
        "distanceKm": 22.361771308769292,
        "gradePct": -3.231196592901068,
        "smoothedEle": 3.238576480994902,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791366,
        "lng": 120.9186915,
        "ele": 2.625,
        "distanceKm": 22.399612931671403,
        "gradePct": -2.7341484870452337,
        "smoothedEle": 2.624999993249533,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791687,
        "lng": 120.918816,
        "ele": 2.5,
        "distanceKm": 22.437454543772766,
        "gradePct": -1.535340054124256,
        "smoothedEle": 2.475431094106271,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792099,
        "lng": 120.9189955,
        "ele": 2.25,
        "distanceKm": 22.48672022510846,
        "gradePct": -0.5840465946047827,
        "smoothedEle": 2.249999972331244,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792511,
        "lng": 120.919175,
        "ele": 2,
        "distanceKm": 22.535985884309145,
        "gradePct": 0.003341396333683863,
        "smoothedEle": 2.4845773641488744,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.792875,
        "lng": 120.919342,
        "ele": 3.5,
        "distanceKm": 22.57983129255585,
        "gradePct": 1.0101885492260207,
        "smoothedEle": 3.2917110693240725,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793341,
        "lng": 120.919746,
        "ele": 4.75,
        "distanceKm": 22.645772011360044,
        "gradePct": 1.7776396412030642,
        "smoothedEle": 4.442366154413664,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793743148407067,
        "lng": 120.91970865894903,
        "ele": 4.40618422466285,
        "distanceKm": 22.69064752615011,
        "gradePct": 0.9086768067030472,
        "smoothedEle": 4.389129436817622,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794145,
        "lng": 120.919661,
        "ele": 4,
        "distanceKm": 22.735589688268487,
        "gradePct": -0.2126370887607077,
        "smoothedEle": 4.052049142597849,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794607666666668,
        "lng": 120.91974766666667,
        "ele": 3.7500000000000058,
        "distanceKm": 22.787774501580532,
        "gradePct": -0.642537769964876,
        "smoothedEle": 3.7499999931610284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79507033333333,
        "lng": 120.91983433333334,
        "ele": 3.4999999999999942,
        "distanceKm": 22.8399593094214,
        "gradePct": -0.526757493323753,
        "smoothedEle": 3.4999999931613086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795533,
        "lng": 120.919921,
        "ele": 3.25,
        "distanceKm": 22.89214411179131,
        "gradePct": -0.4451688397139932,
        "smoothedEle": 3.283897809090868,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795981272418533,
        "lng": 120.91998932404893,
        "ele": 3.145847486400159,
        "distanceKm": 22.942464681017043,
        "gradePct": -0.3437775286778262,
        "smoothedEle": 3.145847484620786,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796429544837068,
        "lng": 120.92005764809784,
        "ele": 3.0416949728003106,
        "distanceKm": 22.992785246825918,
        "gradePct": -0.2404439370694568,
        "smoothedEle": 3.0416949710209162,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7968778172556,
        "lng": 120.92012597214676,
        "ele": 2.937542459200462,
        "distanceKm": 23.043105809217888,
        "gradePct": -0.2069780327075323,
        "smoothedEle": 2.9375424574213516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797326089674133,
        "lng": 120.92019429619569,
        "ele": 2.8333899456006217,
        "distanceKm": 23.093426368193498,
        "gradePct": -0.2069780467610928,
        "smoothedEle": 2.833389943821176,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797774362092667,
        "lng": 120.9202626202446,
        "ele": 2.729237432000781,
        "distanceKm": 23.14374692375211,
        "gradePct": -0.20697806081463604,
        "smoothedEle": 2.7292374302215183,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798222634511202,
        "lng": 120.92033094429353,
        "ele": 2.6250849184009324,
        "distanceKm": 23.194067475894077,
        "gradePct": -0.20697807486847766,
        "smoothedEle": 2.625084916621546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798670906929736,
        "lng": 120.92039926834245,
        "ele": 2.520932404801084,
        "distanceKm": 23.24438802461915,
        "gradePct": -0.2484058624311101,
        "smoothedEle": 2.4795046295130883,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799119,
        "lng": 120.920469,
        "ele": 2.25,
        "distanceKm": 23.294708493696938,
        "gradePct": -0.18843891106214272,
        "smoothedEle": 2.434791503608482,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799507666666667,
        "lng": 120.92052633333333,
        "ele": 2.666666666666655,
        "distanceKm": 23.338312079442016,
        "gradePct": 0.1695839778243309,
        "smoothedEle": 2.666666671681972,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.799896333333333,
        "lng": 120.92058366666667,
        "ele": 3.083333333333345,
        "distanceKm": 23.381915662779747,
        "gradePct": 0.6371745428623805,
        "smoothedEle": 3.0833333383495005,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800285,
        "lng": 120.920641,
        "ele": 3.5,
        "distanceKm": 23.42551924370972,
        "gradePct": 0.5102417881788498,
        "smoothedEle": 3.108878712194994,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800855,
        "lng": 120.920682,
        "ele": 2,
        "distanceKm": 23.489035410632944,
        "gradePct": -1.0237440941582674,
        "smoothedEle": 2.0637603837333502,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801251,
        "lng": 120.920678,
        "ele": 1.25,
        "distanceKm": 23.53307051347495,
        "gradePct": -1.45252374382528,
        "smoothedEle": 1.5321036034480744,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80189,
        "lng": 120.920651,
        "ele": 1.75,
        "distanceKm": 23.604176417832704,
        "gradePct": -0.10266692980207204,
        "smoothedEle": 1.7782888589929615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802298999999998,
        "lng": 120.9205605,
        "ele": 2.125,
        "distanceKm": 23.65056356551346,
        "gradePct": 0.5323313740815423,
        "smoothedEle": 2.1250000111264464,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802708,
        "lng": 120.92047,
        "ele": 2.5,
        "distanceKm": 23.696950707260108,
        "gradePct": 0.7772640576689782,
        "smoothedEle": 2.5305358182947253,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803122,
        "lng": 120.920351,
        "ele": 3,
        "distanceKm": 23.744526736252205,
        "gradePct": 0.9007427572865496,
        "smoothedEle": 2.9806217352594375,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803519625,
        "lng": 120.920143,
        "ele": 3.437499999999996,
        "distanceKm": 23.793472261838858,
        "gradePct": 0.937374270564717,
        "smoothedEle": 3.437500063182462,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803917249999998,
        "lng": 120.919935,
        "ele": 3.874999999999992,
        "distanceKm": 23.842417758542098,
        "gradePct": 0.9143299965801978,
        "smoothedEle": 3.8750000631816803,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804314875,
        "lng": 120.919727,
        "ele": 4.312499999999988,
        "distanceKm": 23.89136322636228,
        "gradePct": 0.8946866330590726,
        "smoothedEle": 4.312500063183254,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8047125,
        "lng": 120.919519,
        "ele": 4.750000000000016,
        "distanceKm": 23.940308665298687,
        "gradePct": 0.8938521591639971,
        "smoothedEle": 4.750000063186173,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805110125,
        "lng": 120.91931100000001,
        "ele": 5.187500000000012,
        "distanceKm": 23.98925407534999,
        "gradePct": 0.893852686652086,
        "smoothedEle": 5.1875000631827115,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80550775,
        "lng": 120.919103,
        "ele": 5.625000000000008,
        "distanceKm": 24.038199456517777,
        "gradePct": 0.893853214144524,
        "smoothedEle": 5.625000063186406,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805905375,
        "lng": 120.918895,
        "ele": 6.0625000000000036,
        "distanceKm": 24.08714480880036,
        "gradePct": 0.8938537416405549,
        "smoothedEle": 6.062500063185625,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806303,
        "lng": 120.918687,
        "ele": 6.5,
        "distanceKm": 24.136090132198092,
        "gradePct": 0.7821721008896616,
        "smoothedEle": 6.388317894932538,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80679,
        "lng": 120.91842,
        "ele": 6.5,
        "distanceKm": 24.196577517423066,
        "gradePct": 0.5994805490959164,
        "smoothedEle": 6.72477199780322,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.807253,
        "lng": 120.918227,
        "ele": 7.5,
        "distanceKm": 24.251623117862426,
        "gradePct": 0.8806676570948796,
        "smoothedEle": 7.355385992998029,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.807575,
        "lng": 120.918205,
        "ele": 7.75,
        "distanceKm": 24.28749672522145,
        "gradePct": 0.7062061262174103,
        "smoothedEle": 7.380467264902066,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.807951,
        "lng": 120.918256,
        "ele": 6.75,
        "distanceKm": 24.329621776362114,
        "gradePct": -0.22797797089693217,
        "smoothedEle": 6.875356018808976,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808427,
        "lng": 120.918445,
        "ele": 6,
        "distanceKm": 24.385883449565394,
        "gradePct": -1.2892929508740434,
        "smoothedEle": 6.090046381590633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808744,
        "lng": 120.918649,
        "ele": 5.75,
        "distanceKm": 24.426705574447737,
        "gradePct": -1.1638131611775715,
        "smoothedEle": 5.746510325751764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809006923451037,
        "lng": 120.91888997518731,
        "ele": 5.5,
        "distanceKm": 24.46473595993149,
        "gradePct": -0.8077644828220638,
        "smoothedEle": 5.577462018145304,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809259,
        "lng": 120.919145,
        "ele": 5.5,
        "distanceKm": 24.50279159159306,
        "gradePct": -0.5194646174635522,
        "smoothedEle": 5.42829234532567,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809531333333332,
        "lng": 120.91944233333334,
        "ele": 5.249999999999993,
        "distanceKm": 24.5454254678536,
        "gradePct": -0.4132988607080005,
        "smoothedEle": 5.249999941979229,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809803666666667,
        "lng": 120.91973966666666,
        "ele": 5.000000000000007,
        "distanceKm": 24.58805929769753,
        "gradePct": -0.4860397422888847,
        "smoothedEle": 4.999999941980527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810076,
        "lng": 120.920037,
        "ele": 4.75,
        "distanceKm": 24.63069308112588,
        "gradePct": -0.798220871118792,
        "smoothedEle": 4.513389059608876,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810432,
        "lng": 120.9204175,
        "ele": 3.3750000000000453,
        "distanceKm": 24.685846723146874,
        "gradePct": -1.6379747592541931,
        "smoothedEle": 3.374999471916057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810788,
        "lng": 120.920798,
        "ele": 2,
        "distanceKm": 24.74100028835566,
        "gradePct": -2.026404097103994,
        "smoothedEle": 2.274240763597617,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811102499999997,
        "lng": 120.921086,
        "ele": 1.875,
        "distanceKm": 24.78647472740852,
        "gradePct": -1.4874657484492684,
        "smoothedEle": 1.8749999705307419,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811417,
        "lng": 120.921374,
        "ele": 1.75,
        "distanceKm": 24.83194911931057,
        "gradePct": -0.7722861586355362,
        "smoothedEle": 1.6825984692187728,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811866,
        "lng": 120.921693,
        "ele": 1.25,
        "distanceKm": 24.89135710497359,
        "gradePct": -0.26732884070433344,
        "smoothedEle": 1.5870138602247725,
        "gradeBand": "descent"
      },
      {
        "lat": 24.812365,
        "lng": 120.921974,
        "ele": 2.5,
        "distanceKm": 24.95367169307242,
        "gradePct": 0.7853749001562226,
        "smoothedEle": 2.4330227866175425,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812808782870558,
        "lng": 120.9221729690983,
        "ele": 3.2215031201725455,
        "distanceKm": 25.00694795583908,
        "gradePct": 1.435904745354587,
        "smoothedEle": 3.234586521627284,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813262,
        "lng": 120.922346,
        "ele": 4,
        "distanceKm": 25.060283667988656,
        "gradePct": 1.3694511116548131,
        "smoothedEle": 3.901953836136286,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813747560200664,
        "lng": 120.92251478997453,
        "ele": 4.385365238621672,
        "distanceKm": 25.11689944947953,
        "gradePct": 1.0217630127125583,
        "smoothedEle": 4.380868385190736,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814233,
        "lng": 120.922684,
        "ele": 4.75,
        "distanceKm": 25.173515217619126,
        "gradePct": 0.5694091810287211,
        "smoothedEle": 4.583289081907034,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814363358639984,
        "lng": 120.92217940082774,
        "ele": 4.377561435422489,
        "distanceKm": 25.226466425541247,
        "gradePct": 0.013194466331816902,
        "smoothedEle": 4.428268056600859,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814494518979988,
        "lng": 120.9216750506208,
        "ele": 4.220671076566864,
        "distanceKm": 25.279417898118925,
        "gradePct": -0.34533723937457195,
        "smoothedEle": 4.2206710359363315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81462567931999,
        "lng": 120.92117070041387,
        "ele": 4.06378071771125,
        "distanceKm": 25.33236931890179,
        "gradePct": -0.3413449999936158,
        "smoothedEle": 4.063780677079431,
        "gradeBand": "descent"
      },
      {
        "lat": 24.814756839659996,
        "lng": 120.92066635020694,
        "ele": 3.906890358855625,
        "distanceKm": 25.385320687888207,
        "gradePct": -0.29629127566221647,
        "smoothedEle": 3.9068903182257704,
        "gradeBand": "descent"
      },
      {
        "lat": 24.814888,
        "lng": 120.920162,
        "ele": 3.75,
        "distanceKm": 25.43827200508068,
        "gradePct": -0.2504894957621375,
        "smoothedEle": 3.795802029090764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8153089712332,
        "lng": 120.9202920302592,
        "ele": 3.7846193448355185,
        "distanceKm": 25.48688683019516,
        "gradePct": -0.11898531046499547,
        "smoothedEle": 3.7846193469189684,
        "gradeBand": "descent"
      },
      {
        "lat": 24.815729942466398,
        "lng": 120.9204220605184,
        "ele": 3.819238689671037,
        "distanceKm": 25.535501643273314,
        "gradePct": 0.01762463059750516,
        "smoothedEle": 3.819238691754381,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816150913699598,
        "lng": 120.9205520907776,
        "ele": 3.8538580345065556,
        "distanceKm": 25.584116444315747,
        "gradePct": 0.06860142840946706,
        "smoothedEle": 3.8538580365899917,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8165718849328,
        "lng": 120.9206821210368,
        "ele": 3.8884773793420737,
        "distanceKm": 25.632731233321923,
        "gradePct": 0.07121154056514976,
        "smoothedEle": 3.8884773814255356,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816992856166,
        "lng": 120.920812151296,
        "ele": 3.9230967241775923,
        "distanceKm": 25.681346010291694,
        "gradePct": 0.07121155819609847,
        "smoothedEle": 3.923096726261147,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817413827399196,
        "lng": 120.9209421815552,
        "ele": 3.957716069013108,
        "distanceKm": 25.729960775224523,
        "gradePct": 0.07121157582741798,
        "smoothedEle": 3.957716071096559,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817834798632397,
        "lng": 120.9210722118144,
        "ele": 3.9923354138486267,
        "distanceKm": 25.778575528121017,
        "gradePct": -0.18022789300821984,
        "smoothedEle": 3.740895929465106,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81825559295748,
        "lng": 120.92120293660781,
        "ele": 3.0483096780648986,
        "distanceKm": 25.82719030476426,
        "gradePct": -0.9789302088430792,
        "smoothedEle": 2.976812966316343,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81867633697874,
        "lng": 120.92133385889203,
        "ele": 1.8260061947442998,
        "distanceKm": 25.875805099293963,
        "gradePct": -1.927245827439732,
        "smoothedEle": 1.826006120206514,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819097081,
        "lng": 120.92146478117624,
        "ele": 0.603702711423701,
        "distanceKm": 25.924419881627376,
        "gradePct": -2.3219523550942296,
        "smoothedEle": 0.698403609169863,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819518,
        "lng": 120.921595,
        "ele": -0.25,
        "distanceKm": 25.973034135267653,
        "gradePct": -1.6063535799641613,
        "smoothedEle": 0.285246654187514,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8196545,
        "lng": 120.921081,
        "ele": 1.125,
        "distanceKm": 26.02708418629189,
        "gradePct": 0.44923983908149273,
        "smoothedEle": 1.1250003771372636,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819791,
        "lng": 120.920567,
        "ele": 2.5,
        "distanceKm": 26.081134182459806,
        "gradePct": 1.8525851843797347,
        "smoothedEle": 2.2636789868452203,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819893,
        "lng": 120.920225,
        "ele": 2.75,
        "distanceKm": 26.117465971907176,
        "gradePct": 1.8544950283744315,
        "smoothedEle": 2.8300611092504266,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820023080793305,
        "lng": 120.91972276037292,
        "ele": 3.425201485524121,
        "distanceKm": 26.17017745851853,
        "gradePct": 1.4868309579890655,
        "smoothedEle": 3.519683153549295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82015419013909,
        "lng": 120.91922084482562,
        "ele": 4.5,
        "distanceKm": 26.222888959875547,
        "gradePct": 1.3076846505549375,
        "smoothedEle": 4.208694471165567,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820281798003005,
        "lng": 120.91871788715717,
        "ele": 4.342780106899701,
        "distanceKm": 26.275595341192897,
        "gradePct": 0.6492968949866681,
        "smoothedEle": 4.23979917498944,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820413,
        "lng": 120.918216,
        "ele": 3.75,
        "distanceKm": 26.328306837868666,
        "gradePct": -0.3961099516617678,
        "smoothedEle": 3.8157818835822557,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8208494,
        "lng": 120.9183515,
        "ele": 3.4499999999999957,
        "distanceKm": 26.378722480071293,
        "gradePct": -0.7646441327787776,
        "smoothedEle": 3.4499999803988644,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8212858,
        "lng": 120.918487,
        "ele": 3.1499999999999915,
        "distanceKm": 26.4291381092065,
        "gradePct": -0.6597507589040483,
        "smoothedEle": 3.14999998039975,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8217222,
        "lng": 120.9186225,
        "ele": 2.8500000000000085,
        "distanceKm": 26.47955372527488,
        "gradePct": -0.595053645757726,
        "smoothedEle": 2.84999998039836,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822158599999998,
        "lng": 120.918758,
        "ele": 2.5500000000000043,
        "distanceKm": 26.529969328275495,
        "gradePct": -0.5950537999905507,
        "smoothedEle": 2.549999980399246,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822595,
        "lng": 120.9188935,
        "ele": 2.25,
        "distanceKm": 26.580384918208935,
        "gradePct": -0.5950539542243498,
        "smoothedEle": 2.2499999803989965,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8230314,
        "lng": 120.91902900000001,
        "ele": 1.9499999999999957,
        "distanceKm": 26.630800495075036,
        "gradePct": -0.5950541084597477,
        "smoothedEle": 1.9499999803969887,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8234678,
        "lng": 120.91916450000001,
        "ele": 1.6499999999999915,
        "distanceKm": 26.681216058872465,
        "gradePct": -0.595054262699485,
        "smoothedEle": 1.6499999803984604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8239042,
        "lng": 120.9193,
        "ele": 1.3500000000000085,
        "distanceKm": 26.7316316096022,
        "gradePct": -0.595054416942475,
        "smoothedEle": 1.3499999803970708,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8243406,
        "lng": 120.9194355,
        "ele": 1.0500000000000043,
        "distanceKm": 26.78204714726331,
        "gradePct": -0.5950545711864763,
        "smoothedEle": 1.0499999803979456,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824777,
        "lng": 120.919571,
        "ele": 0.75,
        "distanceKm": 26.832462671856383,
        "gradePct": -0.36386571908131343,
        "smoothedEle": 0.9811889867472294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82519772122022,
        "lng": 120.9195604952628,
        "ele": 1.339454900277565,
        "distanceKm": 26.87925681215007,
        "gradePct": 0.5272098133977274,
        "smoothedEle": 1.5938138125725176,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.825619147480147,
        "lng": 120.91951699684186,
        "ele": 2.8929699335183368,
        "distanceKm": 26.926322508054664,
        "gradePct": 1.9034003887950042,
        "smoothedEle": 2.892969944340956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.826040573740073,
        "lng": 120.91947349842094,
        "ele": 4.446484966759228,
        "distanceKm": 26.973388202565953,
        "gradePct": 2.9295024926424085,
        "smoothedEle": 4.4464849775798525,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.826462,
        "lng": 120.91943,
        "ele": 6,
        "distanceKm": 27.020453895684184,
        "gradePct": 3.015098133492323,
        "smoothedEle": 5.74607655514262,
        "gradeBand": "hard"
      },
      {
        "lat": 24.82695781361166,
        "lng": 120.91944047492558,
        "ele": 6.701093905024163,
        "distanceKm": 27.07559606377584,
        "gradePct": 2.0139082073636927,
        "smoothedEle": 6.52135728942595,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827452906805828,
        "lng": 120.9194887374628,
        "ele": 6.600546952512085,
        "distanceKm": 27.130863026485986,
        "gradePct": 0.7081214434179254,
        "smoothedEle": 6.60054695164955,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827948,
        "lng": 120.919537,
        "ele": 6.5,
        "distanceKm": 27.186129987480445,
        "gradePct": 0.17530801159737325,
        "smoothedEle": 6.711758908834409,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828349,
        "lng": 120.91959250000001,
        "ele": 7.187499999999986,
        "distanceKm": 27.231069607817506,
        "gradePct": 0.5865373590424087,
        "smoothedEle": 7.187500007769979,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82875,
        "lng": 120.91964800000001,
        "ele": 7.8750000000000275,
        "distanceKm": 27.276009225894214,
        "gradePct": 1.183606787296072,
        "smoothedEle": 7.8750000077707,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829151,
        "lng": 120.9197035,
        "ele": 8.562500000000014,
        "distanceKm": 27.320948841710358,
        "gradePct": 1.482140744709261,
        "smoothedEle": 8.562500007769529,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829552,
        "lng": 120.919759,
        "ele": 9.25,
        "distanceKm": 27.365888455266273,
        "gradePct": 1.020971756383553,
        "smoothedEle": 8.741141124631673,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83002993711296,
        "lng": 120.91974778005351,
        "ele": 7.885509546429865,
        "distanceKm": 27.419044771438283,
        "gradePct": -0.6510706396603118,
        "smoothedEle": 7.882300318199092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.830507624741976,
        "lng": 120.919724853369,
        "ele": 6.5070063642865765,
        "distanceKm": 27.47221165137314,
        "gradePct": -2.1319715727455737,
        "smoothedEle": 6.507006361606312,
        "gradeBand": "descent"
      },
      {
        "lat": 24.830985312370988,
        "lng": 120.91970192668451,
        "ele": 5.128503182143288,
        "distanceKm": 27.52537853091913,
        "gradePct": -2.589958652306508,
        "smoothedEle": 5.12850317946655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.831463,
        "lng": 120.919679,
        "ele": 3.75,
        "distanceKm": 27.57854541007677,
        "gradePct": -2.3741684795060474,
        "smoothedEle": 3.968617100244754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8318595,
        "lng": 120.919734,
        "ele": 3.374999999999985,
        "distanceKm": 27.622982247244938,
        "gradePct": -1.8156336810065172,
        "smoothedEle": 3.3749999958372165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832256,
        "lng": 120.919789,
        "ele": 3,
        "distanceKm": 27.667419082192957,
        "gradePct": -0.9795687343619254,
        "smoothedEle": 3.2317797999967177,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83274555513614,
        "lng": 120.91988642540258,
        "ele": 3.571127151780104,
        "distanceKm": 27.72273590958366,
        "gradePct": 0.24910546632035402,
        "smoothedEle": 3.627396206020435,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83323171377096,
        "lng": 120.92000523182217,
        "ele": 4.3951292851826755,
        "distanceKm": 27.77810788926402,
        "gradePct": 1.0263075359314895,
        "smoothedEle": 4.334531840025821,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833717856885478,
        "lng": 120.92012411591108,
        "ele": 4.947564642591338,
        "distanceKm": 27.83347987154048,
        "gradePct": 1.1829611914441984,
        "smoothedEle": 4.947564670780902,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.834204,
        "lng": 120.920243,
        "ele": 5.5,
        "distanceKm": 27.88885184361138,
        "gradePct": 1.0296592711559343,
        "smoothedEle": 5.4831392953768034,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.834724914650064,
        "lng": 120.92045425695352,
        "ele": 6.0559795160138075,
        "distanceKm": 27.950573527555065,
        "gradePct": 1.065196082079094,
        "smoothedEle": 6.178095814274473,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835246,
        "lng": 120.920665,
        "ele": 7.25,
        "distanceKm": 28.012295106120987,
        "gradePct": 1.2869233009013663,
        "smoothedEle": 7.0340224733311985,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8356532,
        "lng": 120.9208706,
        "ele": 7.299999999999999,
        "distanceKm": 28.062100827057282,
        "gradePct": 0.9620488686471931,
        "smoothedEle": 7.300000007106881,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8360604,
        "lng": 120.9210762,
        "ele": 7.3500000000000005,
        "distanceKm": 28.111906519566052,
        "gradePct": 0.32136627462557577,
        "smoothedEle": 7.350000007107151,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8364676,
        "lng": 120.9212818,
        "ele": 7.3999999999999995,
        "distanceKm": 28.161712183646216,
        "gradePct": 0.10207547273806339,
        "smoothedEle": 7.400000007107062,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8368748,
        "lng": 120.9214874,
        "ele": 7.450000000000001,
        "distanceKm": 28.211517819298134,
        "gradePct": 0.1003902167086922,
        "smoothedEle": 7.45000000710733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837282,
        "lng": 120.921693,
        "ele": 7.5,
        "distanceKm": 28.26132342652073,
        "gradePct": -0.012378262710297785,
        "smoothedEle": 7.387231470386099,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83770733333333,
        "lng": 120.92190466666666,
        "ele": 7.083333333333343,
        "distanceKm": 28.313217859439344,
        "gradePct": -0.3645242262919652,
        "smoothedEle": 7.083333270403748,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838132666666667,
        "lng": 120.92211633333334,
        "ele": 6.666666666666657,
        "distanceKm": 28.365112262151754,
        "gradePct": -0.6983771238933529,
        "smoothedEle": 6.666666603732295,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838558,
        "lng": 120.922328,
        "ele": 6.25,
        "distanceKm": 28.41700663465566,
        "gradePct": -0.3197785219791881,
        "smoothedEle": 6.733134197119672,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838991,
        "lng": 120.92254449999999,
        "ele": 7.874999999999944,
        "distanceKm": 28.469878740521985,
        "gradePct": 1.2022286296735094,
        "smoothedEle": 7.875000256569523,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839424,
        "lng": 120.922761,
        "ele": 9.5,
        "distanceKm": 28.52275081481052,
        "gradePct": 2.4369099094198923,
        "smoothedEle": 9.294099773525573,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8397805,
        "lng": 120.922935,
        "ele": 10.125,
        "distanceKm": 28.56610628043253,
        "gradePct": 2.331472713914012,
        "smoothedEle": 10.125000064001048,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840137,
        "lng": 120.923109,
        "ele": 10.75,
        "distanceKm": 28.6094617255742,
        "gradePct": 1.3155492006620255,
        "smoothedEle": 10.252966540789288,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840396,
        "lng": 120.923323,
        "ele": 9.75,
        "distanceKm": 28.645457880518514,
        "gradePct": 0.08536987719587387,
        "smoothedEle": 9.814646789795658,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84072659876858,
        "lng": 120.92364031103672,
        "ele": 8.753420110792275,
        "distanceKm": 28.69420811354082,
        "gradePct": -1.4545246605658118,
        "smoothedEle": 8.753419830886216,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84105719753716,
        "lng": 120.92395762207344,
        "ele": 7.756840221584477,
        "distanceKm": 28.742958290389804,
        "gradePct": -2.0882439802110615,
        "smoothedEle": 7.756839941675411,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841387796305742,
        "lng": 120.92427493311017,
        "ele": 6.760260332376753,
        "distanceKm": 28.791708411064853,
        "gradePct": -1.9232258749948292,
        "smoothedEle": 6.884609114389932,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841728,
        "lng": 120.924578,
        "ele": 6.25,
        "distanceKm": 28.840352581512377,
        "gradePct": -1.0241917378366403,
        "smoothedEle": 6.785915642691907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841845,
        "lng": 120.924548,
        "ele": 7,
        "distanceKm": 28.853709954470393,
        "gradePct": -0.4125996762334298,
        "smoothedEle": 7.151872888175037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84219,
        "lng": 120.924005,
        "ele": 9.5,
        "distanceKm": 28.920596682314375,
        "gradePct": 1.9224399501034508,
        "smoothedEle": 8.748438058184954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842526999999997,
        "lng": 120.923741,
        "ele": 8.25000000000005,
        "distanceKm": 28.96657331593601,
        "gradePct": 0.7910824541320339,
        "smoothedEle": 8.249999737320012,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842864,
        "lng": 120.923477,
        "ele": 7,
        "distanceKm": 29.012549907528843,
        "gradePct": -1.3218955992940584,
        "smoothedEle": 7.234468473997131,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842904,
        "lng": 120.923431,
        "ele": 7,
        "distanceKm": 29.018978583558287,
        "gradePct": -1.563015901565783,
        "smoothedEle": 7.146798647906991,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842889,
        "lng": 120.923301,
        "ele": 6.25,
        "distanceKm": 29.0322019048614,
        "gradePct": -1.714020920423139,
        "smoothedEle": 6.908603497572187,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842868,
        "lng": 120.923192,
        "ele": 6,
        "distanceKm": 29.0434457459734,
        "gradePct": -1.796670687473922,
        "smoothedEle": 6.704057870766651,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 29.0434457459734,
      "elevationGainM": 64.79314832004972,
      "elevationLossM": 64.64184741574589,
      "minimumElevationM": -0.25,
      "maximumElevationM": 10.75,
      "maximumSustainedGradePct": 3.015098133492323
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 608,
        "startDistanceKm": 0,
        "endDistanceKm": 29.0434457459734,
        "distanceKm": 29.0434457459734,
        "gainM": 80.09361935332078,
        "averageGradePct": 0.2757717526145292,
        "maximumGradePct": 3.015098133492323
      }
    ]
  },
  "hsinchu-city-gangnan-morning": {
    "routeId": "hsinchu-city-gangnan-morning",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T07:04:17.870Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "476440aaab5999f82cf21278c2c18957d38682e0badc0e0a84ab51fe202a0069",
      "roadPolicyAuditSha256": "f926d2b060627275eaa9d98364a201e11fa014f0cb4be702ee600fd6f939d140",
      "reviewedAt": "2026-08-01T07:06:54.658Z",
      "reviewerNote": "原十八尖山方案因 3.038 公里分散 service 段缺乏逐段公開騎乘證據而撤回；本 ID 改為港南晨光短線，只走新竹市政府官方 17 公里海岸自行車道路廊，由新竹漁港至港南運河、金城湖後返回。受版控例外範圍完全落在官方路廊內，無 path、steps、私人或權限禁制。"
    },
    "waypoints": [
      {
        "name": "新竹漁港南側自行車道口",
        "lat": 24.842868,
        "lng": 120.923192,
        "role": "start"
      },
      {
        "name": "港南運河公園",
        "lat": 24.82231,
        "lng": 120.91052,
        "role": "via"
      },
      {
        "name": "金城湖",
        "lat": 24.811521,
        "lng": 120.911249,
        "role": "via"
      },
      {
        "name": "新竹漁港南側自行車道口",
        "lat": 24.842868,
        "lng": 120.923192,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.842868,
        "lng": 120.923192,
        "ele": 6,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 6.711041945076551,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84256080444985,
        "lng": 120.92353898032388,
        "ele": 7.391878142628246,
        "distanceKm": 0.04891492844812484,
        "gradePct": 1.3916511007265489,
        "smoothedEle": 7.391767085244484,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842188,
        "lng": 120.923814,
        "ele": 8.75,
        "distanceKm": 0.0988003905519849,
        "gradePct": 1.6393681044052744,
        "smoothedEle": 8.330744034813634,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.841944,
        "lng": 120.924061,
        "ele": 8.5,
        "distanceKm": 0.13564221555822376,
        "gradePct": 0.8355831788928869,
        "smoothedEle": 8.042640409108788,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84164,
        "lng": 120.924517,
        "ele": 6,
        "distanceKm": 0.19273763078755068,
        "gradePct": -1.4265384275334885,
        "smoothedEle": 6.790088358897705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841329,
        "lng": 120.9242185,
        "ele": 6.9375,
        "distanceKm": 0.2385976736111685,
        "gradePct": -1.0403041744645805,
        "smoothedEle": 6.937499766975831,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841018,
        "lng": 120.92392,
        "ele": 7.875,
        "distanceKm": 0.28445776614660917,
        "gradePct": 0.9032687772376359,
        "smoothedEle": 7.8749997669810226,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840707,
        "lng": 120.9236215,
        "ele": 8.8125,
        "distanceKm": 0.3303179083927651,
        "gradePct": 1.9016142762748718,
        "smoothedEle": 8.812499766982025,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840396,
        "lng": 120.923323,
        "ele": 9.75,
        "distanceKm": 0.37617810034942234,
        "gradePct": 2.1104970893969814,
        "smoothedEle": 9.816238875075262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840137,
        "lng": 120.923109,
        "ele": 10.75,
        "distanceKm": 0.41217425529373625,
        "gradePct": 1.8113700014740683,
        "smoothedEle": 10.252966540789295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8397805,
        "lng": 120.922935,
        "ele": 10.125,
        "distanceKm": 0.45552970043540814,
        "gradePct": 0.7606914061571748,
        "smoothedEle": 10.125000064001052,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839424,
        "lng": 120.922761,
        "ele": 9.5,
        "distanceKm": 0.4988851660574159,
        "gradePct": -0.7976352987791271,
        "smoothedEle": 9.294099773520768,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838991,
        "lng": 120.9225445,
        "ele": 7.875000000000001,
        "distanceKm": 0.5517572403453596,
        "gradePct": -2.261134474012682,
        "smoothedEle": 7.87500025657916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838558,
        "lng": 120.922328,
        "ele": 6.25,
        "distanceKm": 0.6046293462122766,
        "gradePct": -2.4067903640131996,
        "smoothedEle": 6.733134197114829,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838132666666667,
        "lng": 120.92211633333334,
        "ele": 6.666666666666666,
        "distanceKm": 0.6565237187161824,
        "gradePct": -1.1053931743928314,
        "smoothedEle": 6.666666603732281,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83770733333333,
        "lng": 120.92190466666666,
        "ele": 7.083333333333334,
        "distanceKm": 0.7084181214285927,
        "gradePct": 0.35505183011677144,
        "smoothedEle": 7.083333270403738,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837282,
        "lng": 120.921693,
        "ele": 7.5,
        "distanceKm": 0.7603125543472088,
        "gradePct": 0.6901438302716365,
        "smoothedEle": 7.387231470386099,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8368748,
        "lng": 120.9214874,
        "ele": 7.45,
        "distanceKm": 0.810118161569804,
        "gradePct": 0.35671115746791593,
        "smoothedEle": 7.450000007107332,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8364676,
        "lng": 120.9212818,
        "ele": 7.4,
        "distanceKm": 0.8599237972217224,
        "gradePct": 0.01504513141563724,
        "smoothedEle": 7.400000007107062,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8360604,
        "lng": 120.9210762,
        "ele": 7.35,
        "distanceKm": 0.9097294613018866,
        "gradePct": -0.09951013252539379,
        "smoothedEle": 7.350000007107152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8356532,
        "lng": 120.9208706,
        "ele": 7.3,
        "distanceKm": 0.9595351538106556,
        "gradePct": -0.10039016007542226,
        "smoothedEle": 7.300000007106882,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835246,
        "lng": 120.920665,
        "ele": 7.25,
        "distanceKm": 1.0093408747469517,
        "gradePct": -0.3279487936462121,
        "smoothedEle": 7.022441316235504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834749869762884,
        "lng": 120.92046439220594,
        "ele": 6.085442459127894,
        "distanceKm": 1.0681050843109354,
        "gradePct": -1.0473969750745726,
        "smoothedEle": 6.204844287739484,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834254,
        "lng": 120.920263,
        "ele": 5.5,
        "distanceKm": 1.1268694605406184,
        "gradePct": -1.2670339660939962,
        "smoothedEle": 5.511528979872012,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83383595247455,
        "lng": 120.9201529956506,
        "ele": 5.081764175626594,
        "distanceKm": 1.1746613814214328,
        "gradePct": -1.0610273507550483,
        "smoothedEle": 5.066464271283221,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83341597593699,
        "lng": 120.92005029229732,
        "ele": 4.604518110216116,
        "distanceKm": 1.2224969495227078,
        "gradePct": -0.979941150063275,
        "smoothedEle": 4.58317569676214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832995994722907,
        "lng": 120.91994761234707,
        "ele": 4.045444550964656,
        "distanceKm": 1.2703325212712953,
        "gradePct": -1.1229832527930226,
        "smoothedEle": 3.983793750134681,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832576,
        "lng": 120.919845,
        "ele": 3.25,
        "distanceKm": 1.318168089841714,
        "gradePct": -1.2494056424875544,
        "smoothedEle": 3.3775050512145195,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832256,
        "lng": 120.919789,
        "ele": 3,
        "distanceKm": 1.3541964798740107,
        "gradePct": -1.00183365502432,
        "smoothedEle": 3.184145446931755,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8318595,
        "lng": 120.91973399999999,
        "ele": 3.375000000000001,
        "distanceKm": 1.3986333148222105,
        "gradePct": -0.2500972484711308,
        "smoothedEle": 3.374999995837901,
        "gradeBand": "descent"
      },
      {
        "lat": 24.831463,
        "lng": 120.919679,
        "ele": 3.75,
        "distanceKm": 1.443070151990197,
        "gradePct": 0.7237716310663955,
        "smoothedEle": 3.967630608211574,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8310515,
        "lng": 120.91969875000001,
        "ele": 4.9375,
        "distanceKm": 1.4888703139234014,
        "gradePct": 1.6044317272145587,
        "smoothedEle": 4.937499998286631,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83064,
        "lng": 120.9197185,
        "ele": 6.125,
        "distanceKm": 1.5346704761451735,
        "gradePct": 2.2693914275807177,
        "smoothedEle": 6.124999998288624,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.830228499999997,
        "lng": 120.91973825,
        "ele": 7.3125,
        "distanceKm": 1.5804706386551777,
        "gradePct": 2.5528724699987824,
        "smoothedEle": 7.312499998290618,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829817,
        "lng": 120.919758,
        "ele": 8.5,
        "distanceKm": 1.626270801453078,
        "gradePct": 2.3667155192579776,
        "smoothedEle": 8.27392996367495,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829348201522272,
        "lng": 120.91973079347753,
        "ele": 8.900594879207402,
        "distanceKm": 1.6784711404829489,
        "gradePct": 1.3533741243953876,
        "smoothedEle": 8.6140314228046,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828881467681516,
        "lng": 120.91966619565169,
        "ele": 8.10039658613827,
        "distanceKm": 1.7307774723026557,
        "gradePct": -0.20289572882811216,
        "smoothedEle": 8.100396598391667,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828414733840756,
        "lng": 120.91960159782585,
        "ele": 7.300198293069135,
        "distanceKm": 1.7830838071849529,
        "gradePct": -1.2685379081075563,
        "smoothedEle": 7.300198305319228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827948,
        "lng": 120.919537,
        "ele": 6.5,
        "distanceKm": 1.835390145129014,
        "gradePct": -1.316427446787287,
        "smoothedEle": 6.713403073318463,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827537666666665,
        "lng": 120.919497,
        "ele": 6.583333333333333,
        "distanceKm": 1.8811954127732444,
        "gradePct": -0.7457542071804516,
        "smoothedEle": 6.583333332842316,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827127333333333,
        "lng": 120.919457,
        "ele": 6.666666666666667,
        "distanceKm": 1.9270006815959166,
        "gradePct": -0.14085305521597824,
        "smoothedEle": 6.666666666175432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826717,
        "lng": 120.919417,
        "ele": 6.75,
        "distanceKm": 1.9728059515975507,
        "gradePct": -0.2442729325309452,
        "smoothedEle": 6.362883316189358,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826279620019644,
        "lng": 120.91944882474328,
        "ele": 5.327687739980662,
        "distanceKm": 2.021546385529215,
        "gradePct": -1.3768562212037014,
        "smoothedEle": 5.279887467028219,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825843080013097,
        "lng": 120.91949388316219,
        "ele": 3.718458493320441,
        "distanceKm": 2.0703000115126446,
        "gradePct": -2.661044358628237,
        "smoothedEle": 3.718458505351799,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825406540006547,
        "lng": 120.9195389415811,
        "ele": 2.1092292466602203,
        "distanceKm": 2.119053638991369,
        "gradePct": -3.226046187803535,
        "smoothedEle": 2.10922925868509,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82497,
        "lng": 120.919584,
        "ele": 0.5,
        "distanceKm": 2.167807267964581,
        "gradePct": -2.7792531083177763,
        "smoothedEle": 1.0190403199031752,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82455050859193,
        "lng": 120.9195006755596,
        "ele": 0.9056998680587498,
        "distanceKm": 2.2152045766172965,
        "gradePct": -1.3630436568193882,
        "smoothedEle": 0.8732330456134437,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824136757732738,
        "lng": 120.91937220800364,
        "ele": 1.1901298812528764,
        "distanceKm": 2.2630035438102074,
        "gradePct": 0.06367257798238185,
        "smoothedEle": 1.1901298645473655,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.823723006873546,
        "lng": 120.91924374044768,
        "ele": 1.4745598944470004,
        "distanceKm": 2.3108025227497757,
        "gradePct": 0.5877848928489429,
        "smoothedEle": 1.4745598777400515,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82330925601435,
        "lng": 120.91911527289172,
        "ele": 1.7589899076411244,
        "distanceKm": 2.3586015134370126,
        "gradePct": 0.5980445360980879,
        "smoothedEle": 1.7589898909365735,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82289550515516,
        "lng": 120.91898680533576,
        "ele": 2.043419920835251,
        "distanceKm": 2.406400515870233,
        "gradePct": 0.5950543699206853,
        "smoothedEle": 2.0434199041287204,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822481754295964,
        "lng": 120.9188583377798,
        "ele": 2.327849934029375,
        "distanceKm": 2.4541995300508272,
        "gradePct": 0.595054223684928,
        "smoothedEle": 2.3278499173252416,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822068003436772,
        "lng": 120.91872987022384,
        "ele": 2.6122799472234988,
        "distanceKm": 2.501998555977111,
        "gradePct": 0.5950540774511593,
        "smoothedEle": 2.6122799305173876,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821654252577577,
        "lng": 120.91860140266787,
        "ele": 2.8967099604176254,
        "distanceKm": 2.549797593650475,
        "gradePct": 0.5950539312192569,
        "smoothedEle": 2.896709943713909,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821240501718385,
        "lng": 120.91847293511192,
        "ele": 3.1811399736117494,
        "distanceKm": 2.5975966430692337,
        "gradePct": 0.5950537849892971,
        "smoothedEle": 3.181139956906057,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82082675085919,
        "lng": 120.91834446755595,
        "ele": 3.465569986805876,
        "distanceKm": 2.645395704234779,
        "gradePct": 0.5950536387611994,
        "smoothedEle": 3.4655699701025804,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820413,
        "lng": 120.918216,
        "ele": 3.75,
        "distanceKm": 2.693194777145425,
        "gradePct": 0.36265866479821895,
        "smoothedEle": 3.517605155557905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8205293571151,
        "lng": 120.91777868466806,
        "ele": 3.1643098233162865,
        "distanceKm": 2.7391876249566143,
        "gradePct": -0.21597382662457704,
        "smoothedEle": 3.21265474697446,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820644398310016,
        "lng": 120.91734094763818,
        "ele": 2.757652029366569,
        "distanceKm": 2.785180363561965,
        "gradePct": -0.6434824011743258,
        "smoothedEle": 2.865398076858753,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820758917460985,
        "lng": 120.91690304289067,
        "ele": 2.75,
        "distanceKm": 2.831173216205431,
        "gradePct": -0.4462180575479673,
        "smoothedEle": 2.8195753259654004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820873,
        "lng": 120.916465,
        "ele": 3,
        "distanceKm": 2.8771660125434178,
        "gradePct": 0.07854773342772063,
        "smoothedEle": 3.004456163273269,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820971999999998,
        "lng": 120.916059,
        "ele": 3.25,
        "distanceKm": 2.919593878262789,
        "gradePct": 0.4188882010944042,
        "smoothedEle": 3.2500000395298794,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821071,
        "lng": 120.915653,
        "ele": 3.5,
        "distanceKm": 2.962021712358257,
        "gradePct": 0.2879486212630116,
        "smoothedEle": 3.23152805770935,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821202,
        "lng": 120.915204,
        "ele": 2.75,
        "distanceKm": 3.00961991638226,
        "gradePct": -0.3267721277535475,
        "smoothedEle": 2.865505346187495,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821321527454902,
        "lng": 120.91474466412619,
        "ele": 2.43710090340235,
        "distanceKm": 3.057845149626284,
        "gradePct": -0.7636798192445495,
        "smoothedEle": 2.4696666058762426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821441889024694,
        "lng": 120.91428559402965,
        "ele": 2.25,
        "distanceKm": 3.1060702138907317,
        "gradePct": -0.742527020747856,
        "smoothedEle": 2.1502749799602574,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821560918028595,
        "lng": 120.91382610143455,
        "ele": 1.677673501049957,
        "distanceKm": 3.154295324361712,
        "gradePct": -0.7534011227586297,
        "smoothedEle": 1.745402892447353,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821680847035108,
        "lng": 120.91336689140444,
        "ele": 1.3669765929883053,
        "distanceKm": 3.2025205478486547,
        "gradePct": -0.5899408896296747,
        "smoothedEle": 1.583843309570204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8218006015795,
        "lng": 120.91290762597683,
        "ele": 1.8940105300049588,
        "distanceKm": 3.250745740911834,
        "gradePct": 0.19013452225634203,
        "smoothedEle": 1.9653378080489472,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821920986062928,
        "lng": 120.91244855981337,
        "ele": 2.696573752855161,
        "distanceKm": 3.2989709588586287,
        "gradePct": 0.8421884234272904,
        "smoothedEle": 2.4379232303333076,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822040133804773,
        "lng": 120.91198910197232,
        "ele": 2.5,
        "distanceKm": 3.3471961496098923,
        "gradePct": 0.6136297471771689,
        "smoothedEle": 2.5508878427869215,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82216016784712,
        "lng": 120.9115299236223,
        "ele": 2.5,
        "distanceKm": 3.395421359429947,
        "gradePct": 0.22629846179482074,
        "smoothedEle": 2.629437215948163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822281,
        "lng": 120.911071,
        "ele": 3,
        "distanceKm": 3.4436464730506815,
        "gradePct": 0.22301101904537668,
        "smoothedEle": 2.765583957720977,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822155,
        "lng": 120.911011,
        "ele": 2.5,
        "distanceKm": 3.458909613951103,
        "gradePct": 0.34824859644408707,
        "smoothedEle": 2.9182153667251933,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822178,
        "lng": 120.910927,
        "ele": 2.75,
        "distanceKm": 3.467764462588132,
        "gradePct": 0.42237427755398305,
        "smoothedEle": 3.006763853095484,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822286,
        "lng": 120.910513,
        "ele": 3.5,
        "distanceKm": 3.5112378876557835,
        "gradePct": 0.3914652833101631,
        "smoothedEle": 3.0655549349382194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822178,
        "lng": 120.910927,
        "ele": 2.75,
        "distanceKm": 3.554711312723435,
        "gradePct": 0.12529548299048432,
        "smoothedEle": 3.001527837438995,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822155,
        "lng": 120.911011,
        "ele": 2.5,
        "distanceKm": 3.563566161360464,
        "gradePct": -0.05180148975009664,
        "smoothedEle": 2.9129793510687043,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822235,
        "lng": 120.91105,
        "ele": 2.75,
        "distanceKm": 3.573293631507131,
        "gradePct": -0.1985365490656788,
        "smoothedEle": 2.8157046496020324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822281,
        "lng": 120.911071,
        "ele": 3,
        "distanceKm": 3.578830297883459,
        "gradePct": -0.2613906975523308,
        "smoothedEle": 2.760337985838751,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82216016784712,
        "lng": 120.9115299236223,
        "ele": 2.5,
        "distanceKm": 3.6270554115041937,
        "gradePct": -0.41282187468833664,
        "smoothedEle": 2.629437215948163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822040133804773,
        "lng": 120.91198910197232,
        "ele": 2.5,
        "distanceKm": 3.675280621324249,
        "gradePct": -0.2449469086439351,
        "smoothedEle": 2.5508878427869206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821920986062928,
        "lng": 120.91244855981337,
        "ele": 2.696573752855161,
        "distanceKm": 3.7235058120755125,
        "gradePct": -0.20114890947780345,
        "smoothedEle": 2.437923230333303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8218006015795,
        "lng": 120.91290762597683,
        "ele": 1.8940105300049588,
        "distanceKm": 3.7717310300223073,
        "gradePct": -0.5913316201947636,
        "smoothedEle": 1.9653378080489434,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821680847035108,
        "lng": 120.91336689140444,
        "ele": 1.3669765929883053,
        "distanceKm": 3.8199562230854864,
        "gradePct": -0.8623946197488663,
        "smoothedEle": 1.5838433095702027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821560918028595,
        "lng": 120.91382610143455,
        "ele": 1.677673501049957,
        "distanceKm": 3.868181446572429,
        "gradePct": -0.254719235196476,
        "smoothedEle": 1.745402892447352,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821441889024694,
        "lng": 120.91428559402965,
        "ele": 2.25,
        "distanceKm": 3.9164065570434095,
        "gradePct": 0.5383513667049011,
        "smoothedEle": 2.1502749799602574,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821321527454902,
        "lng": 120.91474466412619,
        "ele": 2.43710090340235,
        "distanceKm": 3.964631621307857,
        "gradePct": 0.7361560023093412,
        "smoothedEle": 2.469666605876242,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821202,
        "lng": 120.915204,
        "ele": 2.75,
        "distanceKm": 4.012856854551881,
        "gradePct": 0.7450317589821556,
        "smoothedEle": 2.865505346187497,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821071,
        "lng": 120.915653,
        "ele": 3.5,
        "distanceKm": 4.060455058575884,
        "gradePct": 0.830199752216765,
        "smoothedEle": 3.272205240745603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82064053542296,
        "lng": 120.91552047046186,
        "ele": 3.375596333653683,
        "distanceKm": 4.110154251110432,
        "gradePct": 0.5274217678676095,
        "smoothedEle": 3.3707438073117078,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820210299355224,
        "lng": 120.91538702159916,
        "ele": 3.231896912231991,
        "distanceKm": 4.159854047631765,
        "gradePct": -0.035173018766277445,
        "smoothedEle": 3.2318969213390356,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819780063287485,
        "lng": 120.91525357273648,
        "ele": 3.088197490810299,
        "distanceKm": 4.209553856828229,
        "gradePct": -0.2813559059226264,
        "smoothedEle": 3.0881974999172366,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81934982721975,
        "lng": 120.91512012387378,
        "ele": 2.9444980693886094,
        "distanceKm": 4.259253678699676,
        "gradePct": -0.28907610034746617,
        "smoothedEle": 2.9444980784954216,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818919591152014,
        "lng": 120.91498667501108,
        "ele": 2.800798647966917,
        "distanceKm": 4.308953513245933,
        "gradePct": -0.28913464478756506,
        "smoothedEle": 2.8007986570738863,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818489355084274,
        "lng": 120.91485322614838,
        "ele": 2.657099226545225,
        "distanceKm": 4.358653360467214,
        "gradePct": -0.28913457105054147,
        "smoothedEle": 2.6570992356512497,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81805911901654,
        "lng": 120.9147197772857,
        "ele": 2.513399805123533,
        "distanceKm": 4.408353220362205,
        "gradePct": -0.2891344973153604,
        "smoothedEle": 2.51339981423027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.817628882948803,
        "lng": 120.914586328423,
        "ele": 2.369700383701841,
        "distanceKm": 4.458053092931899,
        "gradePct": -0.28913442358116515,
        "smoothedEle": 2.3697003928081792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.817198646881067,
        "lng": 120.9144528795603,
        "ele": 2.2260009622801484,
        "distanceKm": 4.507752978175742,
        "gradePct": -0.2891343498471339,
        "smoothedEle": 2.2260009713863633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.816768410813328,
        "lng": 120.91431943069762,
        "ele": 2.082301540858456,
        "distanceKm": 4.557452876093561,
        "gradePct": -0.2715309742015838,
        "smoothedEle": 2.099904851877094,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81633816298949,
        "lng": 120.9141860301241,
        "ele": 2.008595334323532,
        "distanceKm": 4.607152724488592,
        "gradePct": -0.195544547885431,
        "smoothedEle": 2.0321919628714276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81590789940703,
        "lng": 120.91405269428043,
        "ele": 2.028712389796571,
        "distanceKm": 4.656852502967536,
        "gradePct": -0.07271570031387524,
        "smoothedEle": 2.0287123885238776,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81547763582457,
        "lng": 120.91391935843676,
        "ele": 2.04882944526961,
        "distanceKm": 4.706552294099358,
        "gradePct": 0.015819432829287605,
        "smoothedEle": 2.0488294439969326,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.815047372242116,
        "lng": 120.91378602259307,
        "ele": 2.068946500742649,
        "distanceKm": 4.7562520978839,
        "gradePct": 0.0401920754644444,
        "smoothedEle": 2.0689464994699898,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814617108659657,
        "lng": 120.9136526867494,
        "ele": 2.089063556215688,
        "distanceKm": 4.805951914320983,
        "gradePct": 0.04047712752689462,
        "smoothedEle": 2.0890635549430447,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8141868450772,
        "lng": 120.91351935090573,
        "ele": 2.109180611688727,
        "distanceKm": 4.855651743410449,
        "gradePct": 0.04047711722235651,
        "smoothedEle": 2.109180610416139,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813756581494744,
        "lng": 120.91338601506206,
        "ele": 2.129297667161766,
        "distanceKm": 4.905351585151752,
        "gradePct": 0.04047710691795651,
        "smoothedEle": 2.1292976658890788,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813326317912285,
        "lng": 120.91325267921837,
        "ele": 2.1494147226348055,
        "distanceKm": 4.955051439545879,
        "gradePct": 0.040477096613616016,
        "smoothedEle": 2.1494147213622887,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81289605432983,
        "lng": 120.9131193433747,
        "ele": 2.1695317781078445,
        "distanceKm": 5.0047513065911255,
        "gradePct": 0.04047708630945627,
        "smoothedEle": 2.169531776835229,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81246579074737,
        "lng": 120.91298600753103,
        "ele": 2.189648833580883,
        "distanceKm": 5.0544511862884764,
        "gradePct": 0.04047707600547593,
        "smoothedEle": 2.1896488323083223,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812035527164912,
        "lng": 120.91285267168736,
        "ele": 2.209765889053922,
        "distanceKm": 5.104151078637387,
        "gradePct": 0.04047706570155554,
        "smoothedEle": 2.2097658877813773,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811605263582457,
        "lng": 120.91271933584368,
        "ele": 2.229882944526961,
        "distanceKm": 5.1538509836377004,
        "gradePct": 0.04047705539777461,
        "smoothedEle": 2.2298829432544345,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811175,
        "lng": 120.912586,
        "ele": 2.25,
        "distanceKm": 5.203550901289235,
        "gradePct": 0.030357969218517963,
        "smoothedEle": 2.2398809228518357,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81160771602308,
        "lng": 120.91272009583884,
        "ele": 2.2297682802001533,
        "distanceKm": 5.2535341012968795,
        "gradePct": 0.000013600275289515954,
        "smoothedEle": 2.2297682789057034,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812040432046157,
        "lng": 120.91285419167767,
        "ele": 2.209536560400306,
        "distanceKm": 5.3035172885082815,
        "gradePct": -0.030337601966140878,
        "smoothedEle": 2.209536559105916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.812473148069238,
        "lng": 120.9129882875165,
        "ele": 2.1893048406004594,
        "distanceKm": 5.353500462924034,
        "gradePct": -0.040470245344207324,
        "smoothedEle": 2.1893048393059757,
        "gradeBand": "descent"
      },
      {
        "lat": 24.812905864092315,
        "lng": 120.91312238335533,
        "ele": 2.1690731208006127,
        "distanceKm": 5.403483624543209,
        "gradePct": -0.040477065779743665,
        "smoothedEle": 2.169073119506228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.813338580115396,
        "lng": 120.91325647919417,
        "ele": 2.148841401000766,
        "distanceKm": 5.453466773366787,
        "gradePct": -0.040477076142270946,
        "smoothedEle": 2.1488413997062086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.813771296138473,
        "lng": 120.913390575033,
        "ele": 2.1286096812009188,
        "distanceKm": 5.503449909393065,
        "gradePct": -0.040477086505016725,
        "smoothedEle": 2.1286096799064613,
        "gradeBand": "descent"
      },
      {
        "lat": 24.814204012161554,
        "lng": 120.91352467087184,
        "ele": 2.108377961401072,
        "distanceKm": 5.553433032623022,
        "gradePct": -0.04047709686798321,
        "smoothedEle": 2.1083779601065205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81463672818463,
        "lng": 120.91365876671067,
        "ele": 2.0881462416012253,
        "distanceKm": 5.603416143055731,
        "gradePct": -0.04047710723105095,
        "smoothedEle": 2.0881462403067337,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81506944420771,
        "lng": 120.9137928625495,
        "ele": 2.067914521801378,
        "distanceKm": 5.653399240691785,
        "gradePct": -0.040477117594220825,
        "smoothedEle": 2.0679145205067924,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81550216023079,
        "lng": 120.91392695838833,
        "ele": 2.0476828020015314,
        "distanceKm": 5.703382325530256,
        "gradePct": -0.04047712795753237,
        "smoothedEle": 2.047682800707005,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81593487625387,
        "lng": 120.91406105422716,
        "ele": 2.0274510822016847,
        "distanceKm": 5.753365397571736,
        "gradePct": -0.040477138320982466,
        "smoothedEle": 2.027451080907065,
        "gradeBand": "descent"
      },
      {
        "lat": 24.816367592276947,
        "lng": 120.91419515006599,
        "ele": 2.0072193624018375,
        "distanceKm": 5.803348456815298,
        "gradePct": -0.013977767274364665,
        "smoothedEle": 2.033718742517488,
        "gradeBand": "descent"
      },
      {
        "lat": 24.816800290502623,
        "lng": 120.91432931900917,
        "ele": 2.0929493996739357,
        "distanceKm": 5.853331596576562,
        "gradePct": 0.08018667706915156,
        "smoothedEle": 2.10765143965354,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81723297885415,
        "lng": 120.9144635285112,
        "ele": 2.237467887158356,
        "distanceKm": 5.903314775792992,
        "gradePct": 0.20375337735912671,
        "smoothedEle": 2.237467896420633,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81766566720568,
        "lng": 120.91459773801326,
        "ele": 2.3819863746427767,
        "distanceKm": 5.953297942191301,
        "gradePct": 0.27438472422824944,
        "smoothedEle": 2.381986383906287,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.818098355557208,
        "lng": 120.91473194751529,
        "ele": 2.5265048621271977,
        "distanceKm": 6.003281095769784,
        "gradePct": 0.2891244488221921,
        "smoothedEle": 2.5265048713897182,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.818531043908738,
        "lng": 120.91486615701734,
        "ele": 2.6710233496116187,
        "distanceKm": 6.053264236529812,
        "gradePct": 0.2891344296036956,
        "smoothedEle": 2.671023358875371,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.818963732260265,
        "lng": 120.91500036651938,
        "ele": 2.8155418370960392,
        "distanceKm": 6.103247364469678,
        "gradePct": 0.2891345037587484,
        "smoothedEle": 2.8155418463588004,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819396420611795,
        "lng": 120.91513457602143,
        "ele": 2.9600603245804598,
        "distanceKm": 6.153230479590753,
        "gradePct": 0.289134577914533,
        "smoothedEle": 2.960060333844174,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819829108963322,
        "lng": 120.91526878552348,
        "ele": 3.1045788120648807,
        "distanceKm": 6.203213581891719,
        "gradePct": 0.2891346520713262,
        "smoothedEle": 3.1045788213284484,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820261797314853,
        "lng": 120.91540299502552,
        "ele": 3.2490972995493017,
        "distanceKm": 6.25319667137278,
        "gradePct": 0.2891347262296883,
        "smoothedEle": 3.2490973088129773,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82069448566638,
        "lng": 120.91553720452757,
        "ele": 3.3936157870337222,
        "distanceKm": 6.303179748033785,
        "gradePct": 0.2795993650070502,
        "smoothedEle": 3.3840803609155223,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821127,
        "lng": 120.915672,
        "ele": 3.5,
        "distanceKm": 6.35316025042635,
        "gradePct": 0.3246950303532244,
        "smoothedEle": 3.573687033548933,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821552413280912,
        "lng": 120.91580499097928,
        "ele": 3.8946319860019756,
        "distanceKm": 6.4023313964377575,
        "gradePct": 0.5128426871063013,
        "smoothedEle": 3.8946320108280834,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82197782656182,
        "lng": 120.91593798195856,
        "ele": 4.289263972003951,
        "distanceKm": 6.451502529867261,
        "gradePct": 0.6309019120182877,
        "smoothedEle": 4.198300195668387,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82240321532687,
        "lng": 120.91607106918342,
        "ele": 4.325974252090329,
        "distanceKm": 6.500673680579236,
        "gradePct": 0.337922237762234,
        "smoothedEle": 4.221734171742299,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822828575997907,
        "lng": 120.91620426670113,
        "ele": 3.952523267861179,
        "distanceKm": 6.549844855439156,
        "gradePct": -0.23553958343733944,
        "smoothedEle": 3.9525232442972724,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823253936668944,
        "lng": 120.91633746421884,
        "ele": 3.57907228363203,
        "distanceKm": 6.599016017679534,
        "gradePct": -0.6418719030590078,
        "smoothedEle": 3.5790722600671083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82367929733998,
        "lng": 120.91647066173655,
        "ele": 3.20562129940288,
        "distanceKm": 6.648187167299826,
        "gradePct": -0.7559777687153781,
        "smoothedEle": 3.205621275838349,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824104658011017,
        "lng": 120.91660385925425,
        "ele": 2.832170315173738,
        "distanceKm": 6.697358304300238,
        "gradePct": -0.7594921669572031,
        "smoothedEle": 2.832170291609654,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824530018682054,
        "lng": 120.91673705677196,
        "ele": 2.4587193309445885,
        "distanceKm": 6.746529428681011,
        "gradePct": -0.7594923618820718,
        "smoothedEle": 2.458719307379471,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824955379353092,
        "lng": 120.91687025428968,
        "ele": 2.085268346715439,
        "distanceKm": 6.795700540441592,
        "gradePct": -0.7594925568101903,
        "smoothedEle": 2.085268323148577,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825380740024126,
        "lng": 120.91700345180737,
        "ele": 1.7118173624862898,
        "distanceKm": 6.844871639581045,
        "gradePct": -0.6756662055504246,
        "smoothedEle": 1.7956438851154752,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825806150166,
        "lng": 120.91713645861957,
        "ele": 1.6682043898440704,
        "distanceKm": 6.894042760155525,
        "gradePct": -0.31980194830827835,
        "smoothedEle": 1.7780570944173681,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826231625138334,
        "lng": 120.91726921551631,
        "ele": 2.0568369915367266,
        "distanceKm": 6.943213925156083,
        "gradePct": 0.25142896816049465,
        "smoothedEle": 2.056837015907096,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.826657100110666,
        "lng": 120.91740197241305,
        "ele": 2.4454695932293826,
        "distanceKm": 6.992385077615045,
        "gradePct": 0.6668196280912312,
        "smoothedEle": 2.44546961759707,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827082575083,
        "lng": 120.91753472930979,
        "ele": 2.834102194922039,
        "distanceKm": 7.041556217533789,
        "gradePct": 0.7866637116537586,
        "smoothedEle": 2.834102219293033,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827508050055332,
        "lng": 120.91766748620653,
        "ele": 3.222734796614695,
        "distanceKm": 7.090727344910613,
        "gradePct": 0.7903673769493367,
        "smoothedEle": 3.2227348209830056,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827933525027667,
        "lng": 120.91780024310327,
        "ele": 3.611367398307344,
        "distanceKm": 7.139898459746898,
        "gradePct": 0.7903675785345695,
        "smoothedEle": 3.611367422678971,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828359,
        "lng": 120.917933,
        "ele": 4,
        "distanceKm": 7.189069562040939,
        "gradePct": 0.9177716609299919,
        "smoothedEle": 4.127403905176426,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828805,
        "lng": 120.9180795,
        "ele": 4.937499999999996,
        "distanceKm": 7.240819377729555,
        "gradePct": 1.316467881024044,
        "smoothedEle": 4.937500071305687,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829251,
        "lng": 120.918226,
        "ele": 5.875000000000009,
        "distanceKm": 7.292569178206291,
        "gradePct": 1.6928128668903923,
        "smoothedEle": 5.875000071306649,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829697,
        "lng": 120.9183725,
        "ele": 6.8125000000000036,
        "distanceKm": 7.344318963470941,
        "gradePct": 1.8116014631510051,
        "smoothedEle": 6.812500071307614,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.830143,
        "lng": 120.918519,
        "ele": 7.75,
        "distanceKm": 7.396068733523299,
        "gradePct": 1.6561858700236909,
        "smoothedEle": 7.594583945649002,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.830034333333334,
        "lng": 120.918932,
        "ele": 8,
        "distanceKm": 7.439463214700437,
        "gradePct": 1.2754667130299877,
        "smoothedEle": 7.999999956087562,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829925666666664,
        "lng": 120.919345,
        "ele": 8.25,
        "distanceKm": 7.482857731007525,
        "gradePct": 0.855071236369381,
        "smoothedEle": 8.249999956091456,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829817,
        "lng": 120.919758,
        "ele": 8.5,
        "distanceKm": 7.526252282441446,
        "gradePct": 0.2308557690840471,
        "smoothedEle": 8.107431655904573,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.830228499999997,
        "lng": 120.91973825000001,
        "ele": 7.3125000000000115,
        "distanceKm": 7.572052445239284,
        "gradePct": -0.8752496627861759,
        "smoothedEle": 7.312499998291372,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83064,
        "lng": 120.9197185,
        "ele": 6.125,
        "distanceKm": 7.6178526077493505,
        "gradePct": -2.0100279180542806,
        "smoothedEle": 6.124999998288624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8310515,
        "lng": 120.91969875,
        "ele": 4.9374999999999885,
        "distanceKm": 7.663652769971185,
        "gradePct": -2.520789171405503,
        "smoothedEle": 4.937499998285877,
        "gradeBand": "descent"
      },
      {
        "lat": 24.831463,
        "lng": 120.919679,
        "ele": 3.75,
        "distanceKm": 7.709452931904328,
        "gradePct": -2.3751549724705283,
        "smoothedEle": 3.9676306082119415,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8318595,
        "lng": 120.91973399999999,
        "ele": 3.375000000000004,
        "distanceKm": 7.753889769072314,
        "gradePct": -1.815633681566448,
        "smoothedEle": 3.3749999958379044,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832256,
        "lng": 120.919789,
        "ele": 3,
        "distanceKm": 7.798326604020514,
        "gradePct": -0.9714631812501938,
        "smoothedEle": 3.2317797999963536,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83274555513614,
        "lng": 120.91988642540258,
        "ele": 3.571127151780074,
        "distanceKm": 7.853643431411217,
        "gradePct": 0.24911093498629233,
        "smoothedEle": 3.627396206020422,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83323171377096,
        "lng": 120.92000523182217,
        "ele": 4.395129285182687,
        "distanceKm": 7.9090154110915805,
        "gradePct": 1.026307535931788,
        "smoothedEle": 4.334531840025834,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833717856885478,
        "lng": 120.92012411591108,
        "ele": 4.947564642591348,
        "distanceKm": 7.964387393368037,
        "gradePct": 1.1829611914442208,
        "smoothedEle": 4.9475646707809044,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.834204,
        "lng": 120.920243,
        "ele": 5.5,
        "distanceKm": 8.019759365438937,
        "gradePct": 1.0296592711559356,
        "smoothedEle": 5.483139295376782,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.834724914650064,
        "lng": 120.92045425695352,
        "ele": 6.055979516013794,
        "distanceKm": 8.081481049382623,
        "gradePct": 1.0651960820790773,
        "smoothedEle": 6.178095814274455,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835246,
        "lng": 120.920665,
        "ele": 7.25,
        "distanceKm": 8.143202627948545,
        "gradePct": 1.286923300901374,
        "smoothedEle": 7.034022473331196,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8356532,
        "lng": 120.9208706,
        "ele": 7.3,
        "distanceKm": 8.193008348884842,
        "gradePct": 0.9620488686471756,
        "smoothedEle": 7.300000007106881,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8360604,
        "lng": 120.9210762,
        "ele": 7.35,
        "distanceKm": 8.242814041393611,
        "gradePct": 0.32136627462553347,
        "smoothedEle": 7.35000000710715,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8364676,
        "lng": 120.9212818,
        "ele": 7.4,
        "distanceKm": 8.292619705473776,
        "gradePct": 0.10207547273805542,
        "smoothedEle": 7.400000007107062,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8368748,
        "lng": 120.9214874,
        "ele": 7.45,
        "distanceKm": 8.342425341125693,
        "gradePct": 0.10039021670869398,
        "smoothedEle": 7.450000007107331,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837282,
        "lng": 120.921693,
        "ele": 7.5,
        "distanceKm": 8.392230948348288,
        "gradePct": -0.012378262710304223,
        "smoothedEle": 7.387231470386094,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83770733333333,
        "lng": 120.92190466666666,
        "ele": 7.083333333333329,
        "distanceKm": 8.444125381266904,
        "gradePct": -0.3645242262919805,
        "smoothedEle": 7.083333270403737,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838132666666667,
        "lng": 120.92211633333334,
        "ele": 6.666666666666671,
        "distanceKm": 8.496019783979314,
        "gradePct": -0.6983771238933609,
        "smoothedEle": 6.666666603732284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838558,
        "lng": 120.922328,
        "ele": 6.25,
        "distanceKm": 8.54791415648322,
        "gradePct": -0.3197785219791956,
        "smoothedEle": 6.733134197119646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838991,
        "lng": 120.92254449999999,
        "ele": 7.874999999999972,
        "distanceKm": 8.600786262349544,
        "gradePct": 1.2022286296735263,
        "smoothedEle": 7.875000256569508,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839424,
        "lng": 120.922761,
        "ele": 9.5,
        "distanceKm": 8.653658336638081,
        "gradePct": 2.4369099094199305,
        "smoothedEle": 9.29409977352558,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8397805,
        "lng": 120.922935,
        "ele": 10.125,
        "distanceKm": 8.69701380226009,
        "gradePct": 2.3314727139140055,
        "smoothedEle": 10.12500006400106,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840137,
        "lng": 120.923109,
        "ele": 10.75,
        "distanceKm": 8.74036924740176,
        "gradePct": 1.3155492006619511,
        "smoothedEle": 10.252966540789288,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840396,
        "lng": 120.923323,
        "ele": 9.75,
        "distanceKm": 8.776365402346075,
        "gradePct": 0.08536987719582564,
        "smoothedEle": 9.814646789795667,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84072659876858,
        "lng": 120.92364031103672,
        "ele": 8.753420110792248,
        "distanceKm": 8.825115635368382,
        "gradePct": -1.4545246605658197,
        "smoothedEle": 8.753419830886243,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84105719753716,
        "lng": 120.92395762207344,
        "ele": 7.756840221584497,
        "distanceKm": 8.873865812217367,
        "gradePct": -2.088243980211063,
        "smoothedEle": 7.756839941675411,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841387796305742,
        "lng": 120.92427493311017,
        "ele": 6.760260332376745,
        "distanceKm": 8.922615932892414,
        "gradePct": -1.9232258749948323,
        "smoothedEle": 6.884609114389951,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841728,
        "lng": 120.924578,
        "ele": 6.25,
        "distanceKm": 8.971260103339938,
        "gradePct": -1.0241917378366292,
        "smoothedEle": 6.785915642691935,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841845,
        "lng": 120.924548,
        "ele": 7,
        "distanceKm": 8.984617476297954,
        "gradePct": -0.4125996762334033,
        "smoothedEle": 7.151872888175067,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84219,
        "lng": 120.924005,
        "ele": 9.5,
        "distanceKm": 9.051504204141938,
        "gradePct": 1.922439950110729,
        "smoothedEle": 8.748438058192216,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842527,
        "lng": 120.92374099999999,
        "ele": 8.249999999999975,
        "distanceKm": 9.097480837764726,
        "gradePct": 0.7910824540885868,
        "smoothedEle": 8.249999737305567,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842864,
        "lng": 120.923477,
        "ele": 7,
        "distanceKm": 9.143457429356408,
        "gradePct": -1.3218955992916845,
        "smoothedEle": 7.23446847400601,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842904,
        "lng": 120.923431,
        "ele": 7,
        "distanceKm": 9.149886105385852,
        "gradePct": -1.5630159015633325,
        "smoothedEle": 7.146798647916642,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842889,
        "lng": 120.923301,
        "ele": 6.25,
        "distanceKm": 9.163109426688962,
        "gradePct": -1.7140209204163037,
        "smoothedEle": 6.90860349758397,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842868,
        "lng": 120.923192,
        "ele": 6,
        "distanceKm": 9.174353267800964,
        "gradePct": -1.7966706874766116,
        "smoothedEle": 6.70405787076666,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 9.174353267800964,
      "elevationGainM": 25.813441300181466,
      "elevationLossM": 25.820425374491357,
      "minimumElevationM": 0.5,
      "maximumElevationM": 10.75,
      "maximumSustainedGradePct": 2.5528724699987824
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 195,
        "startDistanceKm": 0,
        "endDistanceKm": 9.174353267800964,
        "distanceKm": 9.174353267800964,
        "gainM": 36.36697897733371,
        "averageGradePct": 0.39639828460683046,
        "maximumGradePct": 2.5528724699987824
      }
    ]
  },
  "hsinchu-city-nanliao-xiangshan": {
    "routeId": "hsinchu-city-nanliao-xiangshan",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T07:07:17.624Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "fdccf03346222ac2f3804786394c4822742b0df053b1af2d1ebce10aa01ade40",
      "roadPolicyAuditSha256": "42372b87cbd02f3df623cfe1bb384f0134d7345bff96a26910df1394ab6b9302",
      "reviewedAt": "2026-08-01T07:07:33.889Z",
      "reviewerNote": "原南寮—寶山內陸方案因 3.343 公里分散 service 段無法由海岸自行車資料佐證而撤回；本 ID 改為南寮—香山海風線，只走新竹市政府官方 17 公里海岸自行車道路廊至香山濕地後返回。service 與 OSM 權限缺漏 footway 的精確範圍皆落在官方路廊內。"
    },
    "waypoints": [
      {
        "name": "新竹漁港南側",
        "lat": 24.842868,
        "lng": 120.923192,
        "role": "start"
      },
      {
        "name": "港南運河公園",
        "lat": 24.82231,
        "lng": 120.91052,
        "role": "via"
      },
      {
        "name": "金城湖",
        "lat": 24.811521,
        "lng": 120.911249,
        "role": "via"
      },
      {
        "name": "香山濕地自行車道",
        "lat": 24.774178,
        "lng": 120.913828,
        "role": "via"
      },
      {
        "name": "新竹漁港南側",
        "lat": 24.842868,
        "lng": 120.923192,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.842868,
        "lng": 120.923192,
        "ele": 6,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 6.552756966462803,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842737,
        "lng": 120.923409,
        "ele": 6.75,
        "distanceKm": 0.026299071138293034,
        "gradePct": 1.5810318051701115,
        "smoothedEle": 6.968553645623529,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842188,
        "lng": 120.923814,
        "ele": 8.75,
        "distanceKm": 0.09976147930647027,
        "gradePct": 1.857349559527425,
        "smoothedEle": 8.405676362939571,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.841944,
        "lng": 120.924061,
        "ele": 8.5,
        "distanceKm": 0.13660330431270912,
        "gradePct": 0.8725081881467817,
        "smoothedEle": 8.042640409108788,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84164,
        "lng": 120.924517,
        "ele": 6,
        "distanceKm": 0.19369871954203605,
        "gradePct": -1.496984081241628,
        "smoothedEle": 6.790088358897705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841329,
        "lng": 120.9242185,
        "ele": 6.9375,
        "distanceKm": 0.23955876236565385,
        "gradePct": -1.0403041744645805,
        "smoothedEle": 6.937499766975831,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841018,
        "lng": 120.92392,
        "ele": 7.875,
        "distanceKm": 0.28541885490109453,
        "gradePct": 0.9032687772376348,
        "smoothedEle": 7.874999766981022,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840707,
        "lng": 120.9236215,
        "ele": 8.8125,
        "distanceKm": 0.33127899714725045,
        "gradePct": 1.9016142762748718,
        "smoothedEle": 8.812499766982025,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840396,
        "lng": 120.923323,
        "ele": 9.75,
        "distanceKm": 0.3771391891039077,
        "gradePct": 2.1104970893969823,
        "smoothedEle": 9.816238875075262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840137,
        "lng": 120.923109,
        "ele": 10.75,
        "distanceKm": 0.4131353440482216,
        "gradePct": 1.8113700014740677,
        "smoothedEle": 10.252966540789295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8397805,
        "lng": 120.922935,
        "ele": 10.125,
        "distanceKm": 0.4564907891898935,
        "gradePct": 0.7606914061571717,
        "smoothedEle": 10.12500006400105,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839424,
        "lng": 120.922761,
        "ele": 9.5,
        "distanceKm": 0.49984625481190126,
        "gradePct": -0.7976352987791275,
        "smoothedEle": 9.294099773520768,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838991,
        "lng": 120.9225445,
        "ele": 7.875000000000001,
        "distanceKm": 0.552718329099845,
        "gradePct": -2.2611344740126804,
        "smoothedEle": 7.87500025657916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838558,
        "lng": 120.922328,
        "ele": 6.25,
        "distanceKm": 0.605590434966762,
        "gradePct": -2.4067903640131996,
        "smoothedEle": 6.733134197114829,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838132666666667,
        "lng": 120.92211633333334,
        "ele": 6.666666666666666,
        "distanceKm": 0.6574848074706678,
        "gradePct": -1.1053931743928314,
        "smoothedEle": 6.666666603732281,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83770733333333,
        "lng": 120.92190466666666,
        "ele": 7.083333333333334,
        "distanceKm": 0.7093792101830781,
        "gradePct": 0.35505183011677144,
        "smoothedEle": 7.083333270403738,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837282,
        "lng": 120.921693,
        "ele": 7.5,
        "distanceKm": 0.7612736431016942,
        "gradePct": 0.6901438302716365,
        "smoothedEle": 7.387231470386099,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8368748,
        "lng": 120.9214874,
        "ele": 7.45,
        "distanceKm": 0.8110792503242894,
        "gradePct": 0.35671115746791593,
        "smoothedEle": 7.450000007107332,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8364676,
        "lng": 120.9212818,
        "ele": 7.4,
        "distanceKm": 0.8608848859762078,
        "gradePct": 0.01504513141563724,
        "smoothedEle": 7.400000007107062,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8360604,
        "lng": 120.9210762,
        "ele": 7.35,
        "distanceKm": 0.910690550056372,
        "gradePct": -0.09951013252539379,
        "smoothedEle": 7.350000007107152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8356532,
        "lng": 120.9208706,
        "ele": 7.3,
        "distanceKm": 0.960496242565141,
        "gradePct": -0.10039016007542315,
        "smoothedEle": 7.300000007106881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835246,
        "lng": 120.920665,
        "ele": 7.25,
        "distanceKm": 1.0103019635014372,
        "gradePct": -0.32794879364621565,
        "smoothedEle": 7.022441316235501,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834749869762884,
        "lng": 120.92046439220594,
        "ele": 6.085442459127894,
        "distanceKm": 1.069066173065421,
        "gradePct": -1.0473969750745735,
        "smoothedEle": 6.204844287739482,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834254,
        "lng": 120.920263,
        "ele": 5.5,
        "distanceKm": 1.127830549295104,
        "gradePct": -1.2670339660939927,
        "smoothedEle": 5.511528979872012,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83383595247455,
        "lng": 120.9201529956506,
        "ele": 5.081764175626594,
        "distanceKm": 1.1756224701759184,
        "gradePct": -1.0610273507550456,
        "smoothedEle": 5.066464271283221,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83341597593699,
        "lng": 120.92005029229732,
        "ele": 4.604518110216116,
        "distanceKm": 1.2234580382771933,
        "gradePct": -0.9799411500632768,
        "smoothedEle": 4.583175696762138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832995994722907,
        "lng": 120.91994761234707,
        "ele": 4.045444550964656,
        "distanceKm": 1.2712936100257808,
        "gradePct": -1.122983252793024,
        "smoothedEle": 3.9837937501346796,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832576,
        "lng": 120.919845,
        "ele": 3.25,
        "distanceKm": 1.3191291785961996,
        "gradePct": -1.2494056424875528,
        "smoothedEle": 3.3775050512145195,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832256,
        "lng": 120.919789,
        "ele": 3,
        "distanceKm": 1.3551575686284962,
        "gradePct": -1.001833655024319,
        "smoothedEle": 3.1841454469317547,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8318595,
        "lng": 120.91973399999999,
        "ele": 3.375000000000001,
        "distanceKm": 1.399594403576696,
        "gradePct": -0.25009724847113124,
        "smoothedEle": 3.3749999958379,
        "gradeBand": "descent"
      },
      {
        "lat": 24.831463,
        "lng": 120.919679,
        "ele": 3.75,
        "distanceKm": 1.4440312407446825,
        "gradePct": 0.7237716310663946,
        "smoothedEle": 3.9676306082115733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8310515,
        "lng": 120.91969875000001,
        "ele": 4.9375,
        "distanceKm": 1.489831402677887,
        "gradePct": 1.604431727214557,
        "smoothedEle": 4.937499998286628,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83064,
        "lng": 120.9197185,
        "ele": 6.125,
        "distanceKm": 1.535631564899659,
        "gradePct": 2.2693914275807145,
        "smoothedEle": 6.12499999828862,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.830228499999997,
        "lng": 120.91973825,
        "ele": 7.3125,
        "distanceKm": 1.5814317274096632,
        "gradePct": 2.5528724699987815,
        "smoothedEle": 7.3124999982906145,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829817,
        "lng": 120.919758,
        "ele": 8.5,
        "distanceKm": 1.6272318902075635,
        "gradePct": 2.366715519257982,
        "smoothedEle": 8.27392996367495,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829348201522272,
        "lng": 120.91973079347753,
        "ele": 8.900594879207402,
        "distanceKm": 1.6794322292374344,
        "gradePct": 1.3533741243953938,
        "smoothedEle": 8.614031422804603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828881467681516,
        "lng": 120.91966619565169,
        "ele": 8.10039658613827,
        "distanceKm": 1.7317385610571412,
        "gradePct": -0.20289572882811038,
        "smoothedEle": 8.100396598391669,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828414733840756,
        "lng": 120.91960159782585,
        "ele": 7.300198293069135,
        "distanceKm": 1.7840448959394384,
        "gradePct": -1.2685379081075598,
        "smoothedEle": 7.300198305319226,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827948,
        "lng": 120.919537,
        "ele": 6.5,
        "distanceKm": 1.8363512338834995,
        "gradePct": -1.3164274467872896,
        "smoothedEle": 6.713403073318462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827537666666665,
        "lng": 120.919497,
        "ele": 6.583333333333333,
        "distanceKm": 1.88215650152773,
        "gradePct": -0.7457542071804497,
        "smoothedEle": 6.583333332842316,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827127333333333,
        "lng": 120.919457,
        "ele": 6.666666666666667,
        "distanceKm": 1.9279617703504022,
        "gradePct": -0.14085305521597735,
        "smoothedEle": 6.666666666175432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826717,
        "lng": 120.919417,
        "ele": 6.75,
        "distanceKm": 1.9737670403520362,
        "gradePct": -0.2442729325309443,
        "smoothedEle": 6.362883316189359,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826279620019644,
        "lng": 120.91944882474328,
        "ele": 5.327687739980662,
        "distanceKm": 2.022507474283701,
        "gradePct": -1.3768562212037014,
        "smoothedEle": 5.279887467028219,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825843080013097,
        "lng": 120.91949388316219,
        "ele": 3.718458493320441,
        "distanceKm": 2.0712611002671304,
        "gradePct": -2.661044358628237,
        "smoothedEle": 3.718458505351799,
        "gradeBand": "descent"
      },
      {
        "lat": 24.825406540006547,
        "lng": 120.9195389415811,
        "ele": 2.1092292466602203,
        "distanceKm": 2.1200147277458545,
        "gradePct": -3.226046187803535,
        "smoothedEle": 2.10922925868509,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82497,
        "lng": 120.919584,
        "ele": 0.5,
        "distanceKm": 2.1687683567190668,
        "gradePct": -2.7849770717240125,
        "smoothedEle": 1.0133163564969392,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824924,
        "lng": 120.919591,
        "ele": 0.5,
        "distanceKm": 2.1739318840062025,
        "gradePct": -2.6716801806134223,
        "smoothedEle": 0.9586227653123159,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824777,
        "lng": 120.919571,
        "ele": 0.75,
        "distanceKm": 2.190401707945435,
        "gradePct": -2.3025077238309195,
        "smoothedEle": 0.7841695732745166,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8243406,
        "lng": 120.9194355,
        "ele": 1.0500000000000014,
        "distanceKm": 2.2408172325385074,
        "gradePct": -0.5916182741375825,
        "smoothedEle": 1.0499999803979434,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8239042,
        "lng": 120.9193,
        "ele": 1.35,
        "distanceKm": 2.291232770199618,
        "gradePct": 0.5614483914803893,
        "smoothedEle": 1.3499999803970606,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8234678,
        "lng": 120.91916450000001,
        "ele": 1.6499999999999986,
        "distanceKm": 2.3416483209293544,
        "gradePct": 0.5950545699045547,
        "smoothedEle": 1.6499999803984602,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8230314,
        "lng": 120.91902900000001,
        "ele": 1.9500000000000002,
        "distanceKm": 2.392063884726784,
        "gradePct": 0.5950544156605376,
        "smoothedEle": 1.9499999803969952,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822595,
        "lng": 120.9188935,
        "ele": 2.2500000000000013,
        "distanceKm": 2.4424794615928835,
        "gradePct": 0.5950542614175145,
        "smoothedEle": 2.249999980398992,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822158599999998,
        "lng": 120.918758,
        "ele": 2.55,
        "distanceKm": 2.492895051526322,
        "gradePct": 0.5950541071777816,
        "smoothedEle": 2.5499999803992375,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8217222,
        "lng": 120.9186225,
        "ele": 2.8499999999999988,
        "distanceKm": 2.543310654526936,
        "gradePct": 0.5950539529423854,
        "smoothedEle": 2.8499999803983536,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8212858,
        "lng": 120.918487,
        "ele": 3.1500000000000004,
        "distanceKm": 2.593726270595314,
        "gradePct": 0.5950537987085526,
        "smoothedEle": 3.149999980399754,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8208494,
        "lng": 120.9183515,
        "ele": 3.449999999999999,
        "distanceKm": 2.644141899730522,
        "gradePct": 0.5950536444757013,
        "smoothedEle": 3.4499999803988723,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820413,
        "lng": 120.918216,
        "ele": 3.75,
        "distanceKm": 2.6945575419331482,
        "gradePct": 0.3625196806103916,
        "smoothedEle": 3.5174661707656965,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8205293571151,
        "lng": 120.91777868466806,
        "ele": 3.1643098233162865,
        "distanceKm": 2.7405503897443375,
        "gradePct": -0.21597382510651492,
        "smoothedEle": 3.21265474697446,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820644398310016,
        "lng": 120.91734094763818,
        "ele": 2.757652029366569,
        "distanceKm": 2.786543128349688,
        "gradePct": -0.6413432091513934,
        "smoothedEle": 2.865398076858753,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820758917460985,
        "lng": 120.91690304289067,
        "ele": 2.75,
        "distanceKm": 2.8325359809931543,
        "gradePct": -0.4461938389794732,
        "smoothedEle": 2.8195753259654004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.820873,
        "lng": 120.916465,
        "ele": 3,
        "distanceKm": 2.878528777331141,
        "gradePct": 0.07854773342772063,
        "smoothedEle": 3.004456163273269,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820971999999998,
        "lng": 120.916059,
        "ele": 3.25,
        "distanceKm": 2.9209566430505123,
        "gradePct": 0.4188882010944042,
        "smoothedEle": 3.2500000395298794,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821071,
        "lng": 120.915653,
        "ele": 3.5,
        "distanceKm": 2.96338447714598,
        "gradePct": 0.2879486212630116,
        "smoothedEle": 3.23152805770935,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821202,
        "lng": 120.915204,
        "ele": 2.75,
        "distanceKm": 3.0109826811699834,
        "gradePct": -0.3267721277535475,
        "smoothedEle": 2.865505346187495,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821321527454902,
        "lng": 120.91474466412619,
        "ele": 2.43710090340235,
        "distanceKm": 3.0592079144140074,
        "gradePct": -0.7636798192445495,
        "smoothedEle": 2.4696666058762426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821441889024694,
        "lng": 120.91428559402965,
        "ele": 2.25,
        "distanceKm": 3.107432978678455,
        "gradePct": -0.742527020747856,
        "smoothedEle": 2.1502749799602574,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821560918028595,
        "lng": 120.91382610143455,
        "ele": 1.677673501049957,
        "distanceKm": 3.1556580891494352,
        "gradePct": -0.7534011227586297,
        "smoothedEle": 1.745402892447353,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821680847035108,
        "lng": 120.91336689140444,
        "ele": 1.3669765929883053,
        "distanceKm": 3.203883312636378,
        "gradePct": -0.5899408896296747,
        "smoothedEle": 1.583843309570204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8218006015795,
        "lng": 120.91290762597683,
        "ele": 1.8940105300049588,
        "distanceKm": 3.252108505699557,
        "gradePct": 0.19013452225634203,
        "smoothedEle": 1.9653378080489472,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821920986062928,
        "lng": 120.91244855981337,
        "ele": 2.696573752855161,
        "distanceKm": 3.300333723646352,
        "gradePct": 0.8421884234272904,
        "smoothedEle": 2.4379232303333076,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822040133804773,
        "lng": 120.91198910197232,
        "ele": 2.5,
        "distanceKm": 3.3485589143976155,
        "gradePct": 0.6136297471771689,
        "smoothedEle": 2.5508878427869215,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82216016784712,
        "lng": 120.9115299236223,
        "ele": 2.5,
        "distanceKm": 3.39678412421767,
        "gradePct": 0.22629846179482074,
        "smoothedEle": 2.629437215948163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822281,
        "lng": 120.911071,
        "ele": 3,
        "distanceKm": 3.4450092378384047,
        "gradePct": 0.21776504716315054,
        "smoothedEle": 2.760337985838751,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822235,
        "lng": 120.91105,
        "ele": 2.75,
        "distanceKm": 3.450545904214733,
        "gradePct": 0.2615803915627002,
        "smoothedEle": 2.8157046496020324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822155,
        "lng": 120.911011,
        "ele": 2.5,
        "distanceKm": 3.4602733743614,
        "gradePct": 0.34301095911442403,
        "smoothedEle": 2.9129793510687043,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822178,
        "lng": 120.910927,
        "ele": 2.75,
        "distanceKm": 3.469128222998429,
        "gradePct": 0.4171366402243205,
        "smoothedEle": 3.001527837438995,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822286,
        "lng": 120.910513,
        "ele": 3.5,
        "distanceKm": 3.5126016480660804,
        "gradePct": 0.39318311720138566,
        "smoothedEle": 3.0655549349382194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822178,
        "lng": 120.910927,
        "ele": 2.75,
        "distanceKm": 3.556075073133732,
        "gradePct": 0.13053149864697333,
        "smoothedEle": 3.001527837438995,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822155,
        "lng": 120.911011,
        "ele": 2.5,
        "distanceKm": 3.564929921770761,
        "gradePct": -0.04656547409360764,
        "smoothedEle": 2.9129793510687043,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822235,
        "lng": 120.91105,
        "ele": 2.75,
        "distanceKm": 3.574657391917428,
        "gradePct": -0.19396647622327007,
        "smoothedEle": 2.8157046496020324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822281,
        "lng": 120.911071,
        "ele": 3,
        "distanceKm": 3.580194058293756,
        "gradePct": -0.25748747053092846,
        "smoothedEle": 2.760337985838751,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82216016784712,
        "lng": 120.9115299236223,
        "ele": 2.5,
        "distanceKm": 3.6284191719144907,
        "gradePct": -0.41282187468833664,
        "smoothedEle": 2.629437215948163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822040133804773,
        "lng": 120.91198910197232,
        "ele": 2.5,
        "distanceKm": 3.6766443817345458,
        "gradePct": -0.2449469086439351,
        "smoothedEle": 2.5508878427869206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821920986062928,
        "lng": 120.91244855981337,
        "ele": 2.696573752855161,
        "distanceKm": 3.7248695724858094,
        "gradePct": -0.20114890947780345,
        "smoothedEle": 2.437923230333303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8218006015795,
        "lng": 120.91290762597683,
        "ele": 1.8940105300049588,
        "distanceKm": 3.773094790432604,
        "gradePct": -0.5913316201947636,
        "smoothedEle": 1.9653378080489434,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821680847035108,
        "lng": 120.91336689140444,
        "ele": 1.3669765929883053,
        "distanceKm": 3.8213199834957834,
        "gradePct": -0.8623946197488663,
        "smoothedEle": 1.5838433095702027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821560918028595,
        "lng": 120.91382610143455,
        "ele": 1.677673501049957,
        "distanceKm": 3.869545206982726,
        "gradePct": -0.254719235196476,
        "smoothedEle": 1.745402892447352,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821441889024694,
        "lng": 120.91428559402965,
        "ele": 2.25,
        "distanceKm": 3.9177703174537064,
        "gradePct": 0.5383513667049011,
        "smoothedEle": 2.1502749799602574,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821321527454902,
        "lng": 120.91474466412619,
        "ele": 2.43710090340235,
        "distanceKm": 3.965995381718154,
        "gradePct": 0.7361560023093412,
        "smoothedEle": 2.469666605876242,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821202,
        "lng": 120.915204,
        "ele": 2.75,
        "distanceKm": 4.014220614962178,
        "gradePct": 0.7450317589821489,
        "smoothedEle": 2.8655053461874904,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821071,
        "lng": 120.915653,
        "ele": 3.5,
        "distanceKm": 4.061818818986181,
        "gradePct": 0.8301218139231549,
        "smoothedEle": 3.272127302451993,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82063328548546,
        "lng": 120.91551822170592,
        "ele": 3.373174844842914,
        "distanceKm": 4.112355504552753,
        "gradePct": 0.5182068406616108,
        "smoothedEle": 3.3684031275590773,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820195799480224,
        "lng": 120.91538252408728,
        "ele": 3.2270539346104528,
        "distanceKm": 4.162892796081581,
        "gradePct": -0.04711935771919301,
        "smoothedEle": 3.2270539441854083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81975831347499,
        "lng": 120.91524682646865,
        "ele": 3.080933024377991,
        "distanceKm": 4.213430100715933,
        "gradePct": -0.28446452513284604,
        "smoothedEle": 3.080933033953388,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819320827469753,
        "lng": 120.91511112885,
        "ele": 2.9348121141455294,
        "distanceKm": 4.263967418456412,
        "gradePct": -0.2891347137308139,
        "smoothedEle": 2.934812123720232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818883341464517,
        "lng": 120.91497543123137,
        "ele": 2.7886912039130682,
        "distanceKm": 4.314504749302067,
        "gradePct": -0.2891346387508916,
        "smoothedEle": 2.788691213487926,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81844585545928,
        "lng": 120.91483973361274,
        "ele": 2.642570293680607,
        "distanceKm": 4.3650420932531135,
        "gradePct": -0.28913456377198143,
        "smoothedEle": 2.642570303255621,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818008369454045,
        "lng": 120.91470403599409,
        "ele": 2.4964493834481427,
        "distanceKm": 4.415579450309767,
        "gradePct": -0.2891344887932844,
        "smoothedEle": 2.496449393022742,
        "gradeBand": "descent"
      },
      {
        "lat": 24.817570883448806,
        "lng": 120.91456833837546,
        "ele": 2.350328473215681,
        "distanceKm": 4.466116820471457,
        "gradePct": -0.28913441381563587,
        "smoothedEle": 2.3503284827898825,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81713339744357,
        "lng": 120.91443264075683,
        "ele": 2.2042075629832194,
        "distanceKm": 4.516654203737638,
        "gradePct": -0.289134338839825,
        "smoothedEle": 2.2042075725578556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.816695911438334,
        "lng": 120.91429694313818,
        "ele": 2.058086652750758,
        "distanceKm": 4.567191600108905,
        "gradePct": -0.2643143212192958,
        "smoothedEle": 2.082906604970445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.816258408576818,
        "lng": 120.91416131475815,
        "ele": 2.0123242670274237,
        "distanceKm": 4.617728920552705,
        "gradePct": -0.17292703586383124,
        "smoothedEle": 2.0287009778146485,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81582089459321,
        "lng": 120.91402573206301,
        "ele": 2.0327803163826346,
        "distanceKm": 4.668266195902665,
        "gradePct": -0.048973693420411205,
        "smoothedEle": 2.032780315044556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8153833806096,
        "lng": 120.91389014936789,
        "ele": 2.0532363657378454,
        "distanceKm": 4.718803484335101,
        "gradePct": 0.0244486484692584,
        "smoothedEle": 2.0532363643997447,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81494586662599,
        "lng": 120.91375456667276,
        "ele": 2.0736924150930562,
        "distanceKm": 4.76934078585023,
        "gradePct": 0.04047713542517131,
        "smoothedEle": 2.0736924137549733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81450835264238,
        "lng": 120.91361898397764,
        "ele": 2.094148464448267,
        "distanceKm": 4.819878100447877,
        "gradePct": 0.040477124946844224,
        "smoothedEle": 2.094148463110162,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814070838658772,
        "lng": 120.9134834012825,
        "ele": 2.114604513803478,
        "distanceKm": 4.870415428128258,
        "gradePct": 0.04047711446858463,
        "smoothedEle": 2.1146045124654695,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813633324675163,
        "lng": 120.91334781858738,
        "ele": 2.1350605631586888,
        "distanceKm": 4.920952768890422,
        "gradePct": 0.04047710399050889,
        "smoothedEle": 2.13506056182062,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81319581069155,
        "lng": 120.91321223589226,
        "ele": 2.1555166125139,
        "distanceKm": 4.9714901227349655,
        "gradePct": 0.04047709351261745,
        "smoothedEle": 2.1555166111759263,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81275829670794,
        "lng": 120.91307665319714,
        "ele": 2.175972661869111,
        "distanceKm": 5.022027489660954,
        "gradePct": 0.040477083034907185,
        "smoothedEle": 2.1759726605311163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81232078272433,
        "lng": 120.91294107050201,
        "ele": 2.1964287112243217,
        "distanceKm": 5.072564869668595,
        "gradePct": 0.04047707255733727,
        "smoothedEle": 2.196428709886305,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811883268740722,
        "lng": 120.91280548780688,
        "ele": 2.216884760579533,
        "distanceKm": 5.123102262758103,
        "gradePct": 0.04047706207983751,
        "smoothedEle": 2.2168847592416134,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811445754757113,
        "lng": 120.91266990511176,
        "ele": 2.237340809934744,
        "distanceKm": 5.173639668928528,
        "gradePct": 0.018755044515475893,
        "smoothedEle": 2.215618801509757,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81100820670953,
        "lng": 120.9125344573517,
        "ele": 2.1699648318293496,
        "distanceKm": 5.2241770485986265,
        "gradePct": -0.08216148953623643,
        "smoothedEle": 2.1346963464113657,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810570603354765,
        "lng": 120.91239922867585,
        "ele": 1.9599824159146748,
        "distanceKm": 5.274714385438298,
        "gradePct": -0.2539154932638994,
        "smoothedEle": 1.959982429579947,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810133,
        "lng": 120.912264,
        "ele": 1.75,
        "distanceKm": 5.3252517352936035,
        "gradePct": -0.3844956577277139,
        "smoothedEle": 1.7464853618859277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81029725,
        "lng": 120.91278475,
        "ele": 1.500000000000002,
        "distanceKm": 5.380894877702644,
        "gradePct": -0.4338727735984942,
        "smoothedEle": 1.4999999177557342,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810461500000002,
        "lng": 120.9133055,
        "ele": 1.25,
        "distanceKm": 5.436537954316272,
        "gradePct": -0.4464902679452845,
        "smoothedEle": 1.2499999177533794,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81062575,
        "lng": 120.91382625,
        "ele": 0.999999999999998,
        "distanceKm": 5.492180965132603,
        "gradePct": -0.44929249011236744,
        "smoothedEle": 0.9999999177565913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81079,
        "lng": 120.914347,
        "ele": 0.75,
        "distanceKm": 5.547823910154207,
        "gradePct": -0.432261435763232,
        "smoothedEle": 0.7670315033767695,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810773,
        "lng": 120.914406,
        "ele": 0.75,
        "distanceKm": 5.554071702150547,
        "gradePct": -0.43542952078418107,
        "smoothedEle": 0.7357925433950708,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810944,
        "lng": 120.914936,
        "ele": 0.5,
        "distanceKm": 5.610844265880888,
        "gradePct": -0.36782526552910455,
        "smoothedEle": 0.5540342953370734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81111,
        "lng": 120.915185,
        "ele": 0.5,
        "distanceKm": 5.64202639839978,
        "gradePct": -0.2913047894196416,
        "smoothedEle": 0.5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811361,
        "lng": 120.915387,
        "ele": 0.5,
        "distanceKm": 5.676589980610103,
        "gradePct": -0.06352011228719956,
        "smoothedEle": 0.6001798114838651,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811204,
        "lng": 120.915955,
        "ele": 1,
        "distanceKm": 5.736518056016557,
        "gradePct": 0.4478879547140227,
        "smoothedEle": 0.9574331453443431,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811113,
        "lng": 120.915967,
        "ele": 1,
        "distanceKm": 5.746709037058247,
        "gradePct": 0.5202932450734198,
        "smoothedEle": 1.0338655031570203,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810859,
        "lng": 120.916146,
        "ele": 1.25,
        "distanceKm": 5.780236709512299,
        "gradePct": 0.6742614281162972,
        "smoothedEle": 1.2961807339716853,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810745400000002,
        "lng": 120.9166078,
        "ele": 1.7499999999999982,
        "distanceKm": 5.828528252150649,
        "gradePct": 0.8401969157048063,
        "smoothedEle": 1.7499998969127661,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8106318,
        "lng": 120.91706959999999,
        "ele": 2.2499999999999964,
        "distanceKm": 5.876819836023891,
        "gradePct": 0.9805522431726554,
        "smoothedEle": 2.2499998969102575,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8105182,
        "lng": 120.9175314,
        "ele": 2.7500000000000036,
        "distanceKm": 5.92511146113303,
        "gradePct": 1.0321092505033937,
        "smoothedEle": 2.749999896917103,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8104046,
        "lng": 120.9179932,
        "ele": 3.2500000000000018,
        "distanceKm": 5.973403127475328,
        "gradePct": 1.035375817843675,
        "smoothedEle": 3.249999896914595,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810291,
        "lng": 120.918455,
        "ele": 3.75,
        "distanceKm": 6.02169483505179,
        "gradePct": 0.9789916543519723,
        "smoothedEle": 3.6936166174832956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810107,
        "lng": 120.919127,
        "ele": 4.25,
        "distanceKm": 6.092539895634933,
        "gradePct": 0.8242749157484985,
        "smoothedEle": 4.250068769002406,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.809745987970953,
        "lng": 120.9190175483727,
        "ele": 4.5,
        "distanceKm": 6.134175001599297,
        "gradePct": 0.6354018632078821,
        "smoothedEle": 4.427043882455455,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.809385,
        "lng": 120.918908,
        "ele": 4.5,
        "distanceKm": 6.175810129007077,
        "gradePct": 0.24851414525980609,
        "smoothedEle": 4.367179051270842,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.809123914214496,
        "lng": 120.91860893362772,
        "ele": 4.042936469741749,
        "distanceKm": 6.217690878646362,
        "gradePct": -0.33185177077021627,
        "smoothedEle": 4.025124329648934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808873957107245,
        "lng": 120.91829396681386,
        "ele": 3.5214682348708806,
        "distanceKm": 6.259918198069078,
        "gradePct": -0.8685608130886807,
        "smoothedEle": 3.5214683607117045,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808624,
        "lng": 120.917979,
        "ele": 3,
        "distanceKm": 6.302145565755839,
        "gradePct": -1.1542644779856381,
        "smoothedEle": 2.9978238558678822,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808407,
        "lng": 120.917677,
        "ele": 2.5,
        "distanceKm": 6.341021922910534,
        "gradePct": -1.0122400475647995,
        "smoothedEle": 2.734608988605106,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808233,
        "lng": 120.917575,
        "ele": 2.5,
        "distanceKm": 6.3629384616779046,
        "gradePct": -0.7494063048523603,
        "smoothedEle": 2.734608988605106,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808023,
        "lng": 120.917554,
        "ele": 3,
        "distanceKm": 6.386385431546426,
        "gradePct": -0.19824375395763322,
        "smoothedEle": 2.9950151509423857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.807392,
        "lng": 120.917567,
        "ele": 4.25,
        "distanceKm": 6.456561795343053,
        "gradePct": 1.4010631010451717,
        "smoothedEle": 4.1356720896502726,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.807017,
        "lng": 120.91764,
        "ele": 4.5,
        "distanceKm": 6.498905942605978,
        "gradePct": 1.3245647796029625,
        "smoothedEle": 4.52309015882727,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806842,
        "lng": 120.917777,
        "ele": 4.75,
        "distanceKm": 6.522777962807086,
        "gradePct": 1.0559055531568646,
        "smoothedEle": 4.642450259832812,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806716,
        "lng": 120.918046,
        "ele": 4.75,
        "distanceKm": 6.5533311824388765,
        "gradePct": 0.6777970470406804,
        "smoothedEle": 4.7609582793870935,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806285000000003,
        "lng": 120.91783550000001,
        "ele": 4.874999999999999,
        "distanceKm": 6.605754854348908,
        "gradePct": 0.31766526374527015,
        "smoothedEle": 4.874999981287193,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805854,
        "lng": 120.917625,
        "ele": 5,
        "distanceKm": 6.658178556199431,
        "gradePct": 0.19876162710715642,
        "smoothedEle": 4.970264813656576,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805747,
        "lng": 120.917572,
        "ele": 5,
        "distanceKm": 6.671223766541897,
        "gradePct": 0.19355048914394124,
        "smoothedEle": 4.993432038652231,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805552,
        "lng": 120.917574,
        "ele": 5,
        "distanceKm": 6.692907746890948,
        "gradePct": 0.19233411409704784,
        "smoothedEle": 5.039386682591149,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805125,
        "lng": 120.9175678,
        "ele": 5.150000000000001,
        "distanceKm": 6.740392170102749,
        "gradePct": 0.2120567704554447,
        "smoothedEle": 5.149999999978399,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804698,
        "lng": 120.9175616,
        "ele": 5.3,
        "distanceKm": 6.787876593343352,
        "gradePct": 0.271275791073947,
        "smoothedEle": 5.29999999997899,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804271,
        "lng": 120.9175554,
        "ele": 5.45,
        "distanceKm": 6.8353610166119685,
        "gradePct": 0.31171989760552266,
        "smoothedEle": 5.449999999978398,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803843999999998,
        "lng": 120.9175492,
        "ele": 5.599999999999999,
        "distanceKm": 6.882845439909387,
        "gradePct": 0.31589306479040435,
        "smoothedEle": 5.5999999999789924,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803417,
        "lng": 120.917543,
        "ele": 5.75,
        "distanceKm": 6.9303298632348165,
        "gradePct": 0.3473891472619743,
        "smoothedEle": 5.781496082638941,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803075,
        "lng": 120.917338,
        "ele": 6,
        "distanceKm": 6.973623651118921,
        "gradePct": 0.3582482261048043,
        "smoothedEle": 5.9291172348551315,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802785,
        "lng": 120.917117,
        "ele": 6,
        "distanceKm": 7.012834071594584,
        "gradePct": 0.12705709147496824,
        "smoothedEle": 5.841680346703236,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802419,
        "lng": 120.917094,
        "ele": 5.5,
        "distanceKm": 7.053597634367262,
        "gradePct": -0.6690766840266452,
        "smoothedEle": 5.191756766672332,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802327,
        "lng": 120.917083,
        "ele": 5.25,
        "distanceKm": 7.063887660639138,
        "gradePct": -0.935688730010227,
        "smoothedEle": 4.960231175555108,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802054,
        "lng": 120.916942,
        "ele": 3.75,
        "distanceKm": 7.097414693530609,
        "gradePct": -1.829077217583878,
        "smoothedEle": 4.046987418264859,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801722,
        "lng": 120.916827,
        "ele": 3,
        "distanceKm": 7.136113434869117,
        "gradePct": -2.4347501366359845,
        "smoothedEle": 3.035770132509827,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801202,
        "lng": 120.916629,
        "ele": 2,
        "distanceKm": 7.197291517374962,
        "gradePct": -2.0241262832472233,
        "smoothedEle": 2.0262163336585366,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80086943007392,
        "lng": 120.91656153213404,
        "ele": 1.4618634845510239,
        "distanceKm": 7.234893501632746,
        "gradePct": -1.6596806228077874,
        "smoothedEle": 1.4079669696249497,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800534,
        "lng": 120.916508,
        "ele": 0.75,
        "distanceKm": 7.272581057308341,
        "gradePct": -1.597732950649675,
        "smoothedEle": 0.8362526005098685,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800609,
        "lng": 120.916954,
        "ele": 0.25,
        "distanceKm": 7.318366190016961,
        "gradePct": -1.2941707772341877,
        "smoothedEle": 0.3855371682284506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800218,
        "lng": 120.91695650000001,
        "ele": 0.25,
        "distanceKm": 7.361844198725522,
        "gradePct": -0.7491290784590363,
        "smoothedEle": 0.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799827,
        "lng": 120.916959,
        "ele": 0.25,
        "distanceKm": 7.405322207438693,
        "gradePct": -0.15568608884200635,
        "smoothedEle": 0.3582579201801707,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799324,
        "lng": 120.917051,
        "ele": 0.75,
        "distanceKm": 7.462019039366624,
        "gradePct": 0.5875535196964888,
        "smoothedEle": 0.8379888635571872,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798921,
        "lng": 120.917212,
        "ele": 1.5,
        "distanceKm": 7.509686563703328,
        "gradePct": 1.3046005963830736,
        "smoothedEle": 1.6997868012111066,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798462,
        "lng": 120.917408,
        "ele": 3.25,
        "distanceKm": 7.564425582566359,
        "gradePct": 2.2054094511038227,
        "smoothedEle": 3.0869070555756095,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797986,
        "lng": 120.917479,
        "ele": 4.25,
        "distanceKm": 7.617837454461539,
        "gradePct": 2.168728841048031,
        "smoothedEle": 4.075064204814091,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797504,
        "lng": 120.91748,
        "ele": 4.500000000000002,
        "distanceKm": 7.67143357819099,
        "gradePct": 1.2834401026006759,
        "smoothedEle": 4.4999999999995675,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797022000000002,
        "lng": 120.91748100000001,
        "ele": 4.749999999999998,
        "distanceKm": 7.7250297019207865,
        "gradePct": 0.6179122050328307,
        "smoothedEle": 4.749999999998585,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79654,
        "lng": 120.917482,
        "ele": 5,
        "distanceKm": 7.778625825651715,
        "gradePct": -0.2252264318055416,
        "smoothedEle": 4.308321924680388,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796101248887346,
        "lng": 120.91738023279235,
        "ele": 2.4725475432032873,
        "distanceKm": 7.8284825892652705,
        "gradePct": -1.9217991095761149,
        "smoothedEle": 2.7997461341744545,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795667,
        "lng": 120.917257,
        "ele": 1.25,
        "distanceKm": 7.87834553885509,
        "gradePct": -2.5767594446626934,
        "smoothedEle": 1.7338722838664264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795453,
        "lng": 120.917264,
        "ele": 1.5,
        "distanceKm": 7.902151774977068,
        "gradePct": -1.9155770179122726,
        "smoothedEle": 1.68089209024779,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795196,
        "lng": 120.917369,
        "ele": 2.25,
        "distanceKm": 7.932631185397971,
        "gradePct": -0.7408113467611191,
        "smoothedEle": 1.9702541102831166,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794906,
        "lng": 120.91719,
        "ele": 2.25,
        "distanceKm": 7.969595114899402,
        "gradePct": 0.3923684132263761,
        "smoothedEle": 2.3132903632316957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794467,
        "lng": 120.917117,
        "ele": 2.5,
        "distanceKm": 8.018962824314047,
        "gradePct": 0.6314710023378858,
        "smoothedEle": 2.4719619538459803,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793822,
        "lng": 120.91715,
        "ele": 2.75,
        "distanceKm": 8.090760970651909,
        "gradePct": 0.44722496545148505,
        "smoothedEle": 2.8285440065129537,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7934685,
        "lng": 120.917147,
        "ele": 3.125,
        "distanceKm": 8.13006959807024,
        "gradePct": 0.5978767866035389,
        "smoothedEle": 3.12499999998753,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793115,
        "lng": 120.917144,
        "ele": 3.5,
        "distanceKm": 8.169378225495219,
        "gradePct": 0.725287271755115,
        "smoothedEle": 3.4476348992731642,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79266,
        "lng": 120.917195,
        "ele": 3.75,
        "distanceKm": 8.220233247214157,
        "gradePct": 0.6998345843511874,
        "smoothedEle": 3.750651247073562,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.792208,
        "lng": 120.917168,
        "ele": 4,
        "distanceKm": 8.270567271274246,
        "gradePct": 0.5967807852114356,
        "smoothedEle": 4.051500536622101,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.791857,
        "lng": 120.917113,
        "ele": 4.375,
        "distanceKm": 8.309989667782517,
        "gradePct": 0.6853844522900496,
        "smoothedEle": 4.374999995850719,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.791506,
        "lng": 120.917058,
        "ele": 4.75,
        "distanceKm": 8.349412066503737,
        "gradePct": 0.7113623083827946,
        "smoothedEle": 4.636416997602282,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.791085,
        "lng": 120.917016,
        "ele": 4.75,
        "distanceKm": 8.396416799015004,
        "gradePct": 0.5247864070896836,
        "smoothedEle": 4.788407691969591,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7907415,
        "lng": 120.9169645,
        "ele": 4.874999999999997,
        "distanceKm": 8.434964491863655,
        "gradePct": 0.33438746178283757,
        "smoothedEle": 4.87499999878645,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790398,
        "lng": 120.916913,
        "ele": 5,
        "distanceKm": 8.473512186653982,
        "gradePct": 0.17932947471194158,
        "smoothedEle": 4.893674668056927,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790027,
        "lng": 120.916719,
        "ele": 4.75,
        "distanceKm": 8.519178073704364,
        "gradePct": -0.019891343745983184,
        "smoothedEle": 4.819646549171883,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789803,
        "lng": 120.916643,
        "ele": 4.75,
        "distanceKm": 8.54524058386116,
        "gradePct": -0.07775702168652138,
        "smoothedEle": 4.802221293455556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78939349777112,
        "lng": 120.91657926709496,
        "ele": 4.933140531700538,
        "distanceKm": 8.591227496532792,
        "gradePct": 0.06931862054642782,
        "smoothedEle": 4.934275329739508,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.788983997690575,
        "lng": 120.91651551771271,
        "ele": 5.120482997880131,
        "distanceKm": 8.637214408383311,
        "gradePct": 0.31354793292114214,
        "smoothedEle": 5.1211354846259685,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.788574498845286,
        "lng": 120.91645175885635,
        "ele": 5.310241498940066,
        "distanceKm": 8.683201321054858,
        "gradePct": 0.3990137859351611,
        "smoothedEle": 5.310241496119241,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.788165,
        "lng": 120.916388,
        "ele": 5.5,
        "distanceKm": 8.729188236699473,
        "gradePct": 0.36023031722683857,
        "smoothedEle": 5.448752790375491,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787805,
        "lng": 120.916305,
        "ele": 5.5,
        "distanceKm": 8.770085969956254,
        "gradePct": 0.24369105972126978,
        "smoothedEle": 5.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787578,
        "lng": 120.916184,
        "ele": 5.5,
        "distanceKm": 8.79812752098898,
        "gradePct": -0.007657590036331845,
        "smoothedEle": 5.347541199744005,
        "gradeBand": "descent"
      },
      {
        "lat": 24.787059,
        "lng": 120.916047,
        "ele": 4.75,
        "distanceKm": 8.857471840920716,
        "gradePct": -0.7586072139141091,
        "smoothedEle": 4.725586557636604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.786588,
        "lng": 120.915978,
        "ele": 4,
        "distanceKm": 8.910305909555545,
        "gradePct": -1.1609849232049976,
        "smoothedEle": 4.058921394024977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785972,
        "lng": 120.915952,
        "ele": 3.25,
        "distanceKm": 8.978852349930367,
        "gradePct": -1.1393254615586765,
        "smoothedEle": 3.31647985633402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785847,
        "lng": 120.915995,
        "ele": 3,
        "distanceKm": 8.993413825681559,
        "gradePct": -1.0342150301849884,
        "smoothedEle": 3.2378522401764647,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78573,
        "lng": 120.916225,
        "ele": 3.25,
        "distanceKm": 9.020029143738684,
        "gradePct": -0.6579561560393331,
        "smoothedEle": 3.295650754858801,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785665,
        "lng": 120.916434,
        "ele": 3.5,
        "distanceKm": 9.042331746043327,
        "gradePct": -0.3272688895646885,
        "smoothedEle": 3.384773641636621,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785185000000002,
        "lng": 120.91623266666666,
        "ele": 3.5833333333333335,
        "distanceKm": 9.099444381028592,
        "gradePct": 0.3323849711673817,
        "smoothedEle": 3.5833333216747465,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784705,
        "lng": 120.91603133333334,
        "ele": 3.6666666666666665,
        "distanceKm": 9.156557043994463,
        "gradePct": 0.2324368709548085,
        "smoothedEle": 3.666666655008133,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784225,
        "lng": 120.91583,
        "ele": 3.75,
        "distanceKm": 9.213669734940812,
        "gradePct": 0.1677429177065052,
        "smoothedEle": 3.7718325147463276,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78379201390868,
        "lng": 120.915686948548,
        "ele": 3.909655638391819,
        "distanceKm": 9.263934909096978,
        "gradePct": 0.2498060966624358,
        "smoothedEle": 3.93005816523946,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.783359015186342,
        "lng": 120.91554394382158,
        "ele": 4.151356532734262,
        "distanceKm": 9.314200087996564,
        "gradePct": 0.4044484070908606,
        "smoothedEle": 4.177950377054368,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782926,
        "lng": 120.915401,
        "ele": 4.5,
        "distanceKm": 9.364465269386764,
        "gradePct": 0.4806276649240137,
        "smoothedEle": 4.41330140198023,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782542696224215,
        "lng": 120.91528706685,
        "ele": 4.5,
        "distanceKm": 9.408611493264262,
        "gradePct": 0.349610832105855,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782155305946915,
        "lng": 120.91519084572032,
        "ele": 4.5,
        "distanceKm": 9.452769097030234,
        "gradePct": 0.14146227489681135,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.781767816544733,
        "lng": 120.91509511447529,
        "ele": 4.5,
        "distanceKm": 9.496926609078537,
        "gradePct": 0.022947898776957215,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78138,
        "lng": 120.915001,
        "ele": 4.5,
        "distanceKm": 9.541084215386643,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.781095,
        "lng": 120.914992,
        "ele": 4.5,
        "distanceKm": 9.572787835822734,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.780606,
        "lng": 120.914897,
        "ele": 4.5,
        "distanceKm": 9.628001588876414,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.780117,
        "lng": 120.914802,
        "ele": 4.5,
        "distanceKm": 9.683215348493706,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779664666666665,
        "lng": 120.91473833333333,
        "ele": 4.5,
        "distanceKm": 9.733921622913373,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779212333333334,
        "lng": 120.91467466666666,
        "ele": 4.5,
        "distanceKm": 9.78462790030223,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77876,
        "lng": 120.914611,
        "ele": 4.5,
        "distanceKm": 9.835334180660658,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778782,
        "lng": 120.91446,
        "ele": 4.5,
        "distanceKm": 9.850773817748033,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778785,
        "lng": 120.914415,
        "ele": 4.5,
        "distanceKm": 9.855329142762814,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7783514,
        "lng": 120.91435,
        "ele": 4.5,
        "distanceKm": 9.903987862940081,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7779178,
        "lng": 120.914285,
        "ele": 4.5,
        "distanceKm": 9.952646586208383,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7774842,
        "lng": 120.91422,
        "ele": 4.5,
        "distanceKm": 10.00130531256885,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777050600000003,
        "lng": 120.91415500000001,
        "ele": 4.5,
        "distanceKm": 10.04996404202027,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776617,
        "lng": 120.91409,
        "ele": 4.5,
        "distanceKm": 10.098622774563774,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7761985,
        "lng": 120.91403275,
        "ele": 4.5,
        "distanceKm": 10.145515492748682,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77578,
        "lng": 120.91397549999999,
        "ele": 4.5,
        "distanceKm": 10.192408213335217,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775361500000002,
        "lng": 120.91391825,
        "ele": 4.5,
        "distanceKm": 10.239300936323382,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774943,
        "lng": 120.913861,
        "ele": 4.5,
        "distanceKm": 10.28619366171372,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774559382645148,
        "lng": 120.9138474521752,
        "ele": 4.5,
        "distanceKm": 10.32887194829864,
        "gradePct": 0,
        "smoothedEle": 4.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774176,
        "lng": 120.913828,
        "ele": 4.5,
        "distanceKm": 10.37154742571848,
        "gradePct": 0.07165565322520376,
        "smoothedEle": 4.5716556532252035,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774559382645148,
        "lng": 120.9138474521752,
        "ele": 4.75,
        "distanceKm": 10.41422290313832,
        "gradePct": 0.17834434677480157,
        "smoothedEle": 4.678344346774801,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.774943,
        "lng": 120.913861,
        "ele": 4.75,
        "distanceKm": 10.456901189723242,
        "gradePct": 0.20293658735372483,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775361500000002,
        "lng": 120.91391825,
        "ele": 4.75,
        "distanceKm": 10.50379391511358,
        "gradePct": 0.09772812328705029,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77578,
        "lng": 120.91397549999999,
        "ele": 4.75,
        "distanceKm": 10.550686638101745,
        "gradePct": 0.010434058899107904,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7761985,
        "lng": 120.91403275,
        "ele": 4.75,
        "distanceKm": 10.597579358688279,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776617,
        "lng": 120.91409,
        "ele": 4.75,
        "distanceKm": 10.644472076873187,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777050600000003,
        "lng": 120.91415500000001,
        "ele": 4.75,
        "distanceKm": 10.693130809416692,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7774842,
        "lng": 120.91422,
        "ele": 4.75,
        "distanceKm": 10.741789538868112,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7779178,
        "lng": 120.914285,
        "ele": 4.75,
        "distanceKm": 10.790448265228578,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7783514,
        "lng": 120.91435,
        "ele": 4.75,
        "distanceKm": 10.83910698849688,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778785,
        "lng": 120.914415,
        "ele": 4.75,
        "distanceKm": 10.887765708674147,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77876,
        "lng": 120.914611,
        "ele": 4.75,
        "distanceKm": 10.907747722130553,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778674,
        "lng": 120.914686,
        "ele": 4.75,
        "distanceKm": 10.91994523345839,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778649,
        "lng": 120.914864,
        "ele": 4.75,
        "distanceKm": 10.938129453770529,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779057,
        "lng": 120.914925,
        "ele": 4.75,
        "distanceKm": 10.983913124730176,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7794598,
        "lng": 120.9149968,
        "ele": 4.75,
        "distanceKm": 11.029285280540062,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7798626,
        "lng": 120.9150686,
        "ele": 4.75,
        "distanceKm": 11.074657432591627,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7802654,
        "lng": 120.9151404,
        "ele": 4.75,
        "distanceKm": 11.120029580884824,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7806682,
        "lng": 120.9152122,
        "ele": 4.75,
        "distanceKm": 11.165401725419606,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.781071,
        "lng": 120.915284,
        "ele": 4.75,
        "distanceKm": 11.21077386619593,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7815255,
        "lng": 120.91538,
        "ele": 4.75,
        "distanceKm": 11.262232935463834,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78198,
        "lng": 120.915476,
        "ele": 4.75,
        "distanceKm": 11.31369199804697,
        "gradePct": 0,
        "smoothedEle": 4.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782587,
        "lng": 120.915629,
        "ele": 4.75,
        "distanceKm": 11.382932249530507,
        "gradePct": 0.034174417995966114,
        "smoothedEle": 4.784174417995966,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.782980000000002,
        "lng": 120.91574800000001,
        "ele": 4.875,
        "distanceKm": 11.428253180736961,
        "gradePct": 0.11781314702595444,
        "smoothedEle": 4.875000006303635,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.783373,
        "lng": 120.915867,
        "ele": 5,
        "distanceKm": 11.4735741018576,
        "gradePct": 0.08597757583387752,
        "smoothedEle": 4.865533159504582,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7837725,
        "lng": 120.9160035,
        "ele": 4.625,
        "distanceKm": 11.52008481321983,
        "gradePct": -0.23363018228266158,
        "smoothedEle": 4.624999975354868,
        "gradeBand": "descent"
      },
      {
        "lat": 24.784172,
        "lng": 120.91614,
        "ele": 4.25,
        "distanceKm": 11.566595511437987,
        "gradePct": -0.53550652215145,
        "smoothedEle": 4.331484358086566,
        "gradeBand": "descent"
      },
      {
        "lat": 24.784633666666668,
        "lng": 120.91633166666666,
        "ele": 4.166666666666667,
        "distanceKm": 11.621456112827449,
        "gradePct": -0.44967944249926695,
        "smoothedEle": 4.166666656087245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785095333333334,
        "lng": 120.91652333333333,
        "ele": 4.083333333333333,
        "distanceKm": 11.6763166888263,
        "gradePct": -0.2189457025932783,
        "smoothedEle": 4.083333322753762,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785557,
        "lng": 120.916715,
        "ele": 4,
        "distanceKm": 11.731177239434182,
        "gradePct": 0.15908829642042266,
        "smoothedEle": 4.310988540213476,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785980666666667,
        "lng": 120.91687833333333,
        "ele": 5.166666666666652,
        "distanceKm": 11.781089164639878,
        "gradePct": 1.0635290755462086,
        "smoothedEle": 5.16666677516317,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786404333333333,
        "lng": 120.91704166666666,
        "ele": 6.333333333333348,
        "distanceKm": 11.831001071246172,
        "gradePct": 2.023075948001866,
        "smoothedEle": 6.333333441831252,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786828,
        "lng": 120.917205,
        "ele": 7.5,
        "distanceKm": 11.880912959252822,
        "gradePct": 2.22065142972599,
        "smoothedEle": 7.384297381429354,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78728258453913,
        "lng": 120.9173702176153,
        "ele": 8.254634308647416,
        "distanceKm": 11.934141156618983,
        "gradePct": 1.79454965260911,
        "smoothedEle": 8.194001941590445,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787737,
        "lng": 120.917536,
        "ele": 8.75,
        "distanceKm": 11.987369379853174,
        "gradePct": 0.9814155323185121,
        "smoothedEle": 8.463927646936387,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.788246674338772,
        "lng": 120.91774366557559,
        "ele": 7.889696677326679,
        "distanceKm": 12.047795736253208,
        "gradePct": -0.27854985452265535,
        "smoothedEle": 7.98469584188475,
        "gradeBand": "descent"
      },
      {
        "lat": 24.788779,
        "lng": 120.917905,
        "ele": 7.5,
        "distanceKm": 12.109187492860064,
        "gradePct": -0.7894885054088389,
        "smoothedEle": 7.501403163486901,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7891365,
        "lng": 120.918002,
        "ele": 7.250000000000005,
        "distanceKm": 12.150128006978669,
        "gradePct": -0.7163355780636181,
        "smoothedEle": 7.249999991563818,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789494,
        "lng": 120.918099,
        "ele": 7,
        "distanceKm": 12.191068514348322,
        "gradePct": -0.5192212637580554,
        "smoothedEle": 7.124819448135388,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790014,
        "lng": 120.918225,
        "ele": 7.25,
        "distanceKm": 12.250272448470366,
        "gradePct": -0.34912541153025456,
        "smoothedEle": 6.900432932736402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790362,
        "lng": 120.918336,
        "ele": 6.25,
        "distanceKm": 12.290558051487137,
        "gradePct": -1.1052336492801411,
        "smoothedEle": 6.021146600674,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7907035,
        "lng": 120.9184515,
        "ele": 4.5,
        "distanceKm": 12.33028086471661,
        "gradePct": -2.4762023349399356,
        "smoothedEle": 4.49999991756102,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791045,
        "lng": 120.918567,
        "ele": 2.75,
        "distanceKm": 12.370003668524486,
        "gradePct": -3.2311965929010915,
        "smoothedEle": 3.238576480994902,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791366,
        "lng": 120.9186915,
        "ele": 2.625,
        "distanceKm": 12.407845291426595,
        "gradePct": -2.734148487045272,
        "smoothedEle": 2.624999993249533,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791687,
        "lng": 120.918816,
        "ele": 2.5,
        "distanceKm": 12.445686903527958,
        "gradePct": -1.535340054123634,
        "smoothedEle": 2.4754310941069204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792099,
        "lng": 120.91899550000001,
        "ele": 2.2499999999999956,
        "distanceKm": 12.494952584864178,
        "gradePct": -0.5840465945975745,
        "smoothedEle": 2.249999972329918,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792511,
        "lng": 120.919175,
        "ele": 2,
        "distanceKm": 12.544218244064336,
        "gradePct": 0.0033413963337158964,
        "smoothedEle": 2.484577364149531,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.792875,
        "lng": 120.919342,
        "ele": 3.5,
        "distanceKm": 12.588063652311039,
        "gradePct": 1.0101885492249965,
        "smoothedEle": 3.2917110693240503,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793341,
        "lng": 120.919746,
        "ele": 4.75,
        "distanceKm": 12.654004371115235,
        "gradePct": 1.777639641202528,
        "smoothedEle": 4.442366154413634,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793743148407067,
        "lng": 120.91970865894903,
        "ele": 4.406184224662824,
        "distanceKm": 12.698879885905301,
        "gradePct": 0.908676806703014,
        "smoothedEle": 4.389129436817611,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794145,
        "lng": 120.919661,
        "ele": 4,
        "distanceKm": 12.743822048023677,
        "gradePct": -0.21263708876070883,
        "smoothedEle": 4.052049142597855,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794607666666668,
        "lng": 120.91974766666667,
        "ele": 3.7499999999999973,
        "distanceKm": 12.796006861335721,
        "gradePct": -0.642537769964875,
        "smoothedEle": 3.74999999316103,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79507033333333,
        "lng": 120.91983433333334,
        "ele": 3.500000000000003,
        "distanceKm": 12.848191669176588,
        "gradePct": -0.5267574933237681,
        "smoothedEle": 3.4999999931613073,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795533,
        "lng": 120.919921,
        "ele": 3.25,
        "distanceKm": 12.9003764715465,
        "gradePct": -0.4451688397139957,
        "smoothedEle": 3.2838978090908664,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795981272418533,
        "lng": 120.91998932404893,
        "ele": 3.1458474864001555,
        "distanceKm": 12.950697040772233,
        "gradePct": -0.3437775286778181,
        "smoothedEle": 3.145847484620784,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796429544837068,
        "lng": 120.92005764809784,
        "ele": 3.0416949728003106,
        "distanceKm": 13.001017606581108,
        "gradePct": -0.2404439370694495,
        "smoothedEle": 3.0416949710209167,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7968778172556,
        "lng": 120.92012597214676,
        "ele": 2.937542459200466,
        "distanceKm": 13.05133816897308,
        "gradePct": -0.206978032707524,
        "smoothedEle": 2.9375424574213542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797326089674133,
        "lng": 120.92019429619569,
        "ele": 2.8333899456006253,
        "distanceKm": 13.101658727948688,
        "gradePct": -0.20697804676108675,
        "smoothedEle": 2.8333899438211825,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797774362092667,
        "lng": 120.9202626202446,
        "ele": 2.729237432000781,
        "distanceKm": 13.1519792835073,
        "gradePct": -0.20697806081464415,
        "smoothedEle": 2.72923743022152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798222634511202,
        "lng": 120.92033094429353,
        "ele": 2.625084918400936,
        "distanceKm": 13.202299835649264,
        "gradePct": -0.20697807486848982,
        "smoothedEle": 2.6250849166215477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798670906929736,
        "lng": 120.92039926834245,
        "ele": 2.5209324048010915,
        "distanceKm": 13.252620384374335,
        "gradePct": -0.24840586243111362,
        "smoothedEle": 2.479504629513091,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799119,
        "lng": 120.920469,
        "ele": 2.25,
        "distanceKm": 13.302940853452123,
        "gradePct": -0.18843891106214428,
        "smoothedEle": 2.4347915036084857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799507666666667,
        "lng": 120.92052633333333,
        "ele": 2.6666666666666723,
        "distanceKm": 13.346544439197201,
        "gradePct": 0.1695839778243335,
        "smoothedEle": 2.6666666716819742,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.799896333333333,
        "lng": 120.92058366666667,
        "ele": 3.0833333333333277,
        "distanceKm": 13.39014802253493,
        "gradePct": 0.6371745428623777,
        "smoothedEle": 3.0833333383494903,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800285,
        "lng": 120.920641,
        "ele": 3.5,
        "distanceKm": 13.433751603464902,
        "gradePct": 0.510241788178817,
        "smoothedEle": 3.108878712194955,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800855,
        "lng": 120.920682,
        "ele": 2,
        "distanceKm": 13.497267770388127,
        "gradePct": -1.0237440941582714,
        "smoothedEle": 2.0637603837333502,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801251,
        "lng": 120.920678,
        "ele": 1.25,
        "distanceKm": 13.541302873230135,
        "gradePct": -1.4525237438251903,
        "smoothedEle": 1.5321036034480966,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80189,
        "lng": 120.920651,
        "ele": 1.75,
        "distanceKm": 13.61240877758789,
        "gradePct": -0.10266692980151274,
        "smoothedEle": 1.7782888589934946,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802298999999998,
        "lng": 120.92056050000001,
        "ele": 2.1249999999999925,
        "distanceKm": 13.658795925268361,
        "gradePct": 0.5323313740813062,
        "smoothedEle": 2.125000011125377,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802708,
        "lng": 120.92047,
        "ele": 2.5,
        "distanceKm": 13.705183067015295,
        "gradePct": 0.7772640576690292,
        "smoothedEle": 2.530535818295256,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803122,
        "lng": 120.920351,
        "ele": 3,
        "distanceKm": 13.752759096007392,
        "gradePct": 0.9007427572855634,
        "smoothedEle": 2.9806217352594375,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803519625,
        "lng": 120.920143,
        "ele": 3.437499999999996,
        "distanceKm": 13.801704621594045,
        "gradePct": 0.9373742705641253,
        "smoothedEle": 3.437500063182466,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803917249999998,
        "lng": 120.919935,
        "ele": 3.875000000000008,
        "distanceKm": 13.850650118297285,
        "gradePct": 0.9143299965801861,
        "smoothedEle": 3.8750000631816928,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804314875,
        "lng": 120.919727,
        "ele": 4.3125000000000036,
        "distanceKm": 13.899595586117465,
        "gradePct": 0.8946866330604292,
        "smoothedEle": 4.312500063184599,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8047125,
        "lng": 120.91951900000001,
        "ele": 4.75,
        "distanceKm": 13.948541025053258,
        "gradePct": 0.8938521591667979,
        "smoothedEle": 4.750000063183476,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805110125,
        "lng": 120.91931100000001,
        "ele": 5.1874999999999964,
        "distanceKm": 13.997486435105177,
        "gradePct": 0.8938526866521125,
        "smoothedEle": 5.18750006318404,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80550775,
        "lng": 120.919103,
        "ele": 5.624999999999992,
        "distanceKm": 14.046431816272964,
        "gradePct": 0.8938532141417538,
        "smoothedEle": 5.625000063186387,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805905375,
        "lng": 120.918895,
        "ele": 6.0625000000000036,
        "distanceKm": 14.095377168555546,
        "gradePct": 0.8938537416391586,
        "smoothedEle": 6.062500063185605,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806303,
        "lng": 120.918687,
        "ele": 6.5,
        "distanceKm": 14.144322491953279,
        "gradePct": 0.7821721008896214,
        "smoothedEle": 6.388317894932538,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80679,
        "lng": 120.91842,
        "ele": 6.5,
        "distanceKm": 14.204809877178251,
        "gradePct": 0.5994805490959156,
        "smoothedEle": 6.724771997803202,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.807253,
        "lng": 120.918227,
        "ele": 7.5,
        "distanceKm": 14.25985547761761,
        "gradePct": 0.8806676570948758,
        "smoothedEle": 7.355385992997998,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.807575,
        "lng": 120.918205,
        "ele": 7.75,
        "distanceKm": 14.295729084976635,
        "gradePct": 0.706206126217462,
        "smoothedEle": 7.380467264902088,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.807951,
        "lng": 120.918256,
        "ele": 6.75,
        "distanceKm": 14.337854136117297,
        "gradePct": -0.2279779708969051,
        "smoothedEle": 6.8753560188089935,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808427,
        "lng": 120.918445,
        "ele": 6,
        "distanceKm": 14.394115809320578,
        "gradePct": -1.289292950874087,
        "smoothedEle": 6.090046381590633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808744,
        "lng": 120.918649,
        "ele": 5.75,
        "distanceKm": 14.434937934202923,
        "gradePct": -1.163813161177567,
        "smoothedEle": 5.746510325751764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809006923451037,
        "lng": 120.91888997518731,
        "ele": 5.5,
        "distanceKm": 14.472968319686679,
        "gradePct": -0.8077644828220107,
        "smoothedEle": 5.577462018145304,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809259,
        "lng": 120.919145,
        "ele": 5.5,
        "distanceKm": 14.511023951348248,
        "gradePct": -0.519464617463501,
        "smoothedEle": 5.428292345325677,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809531333333332,
        "lng": 120.91944233333334,
        "ele": 5.2500000000000036,
        "distanceKm": 14.55365782760879,
        "gradePct": -0.413298860707983,
        "smoothedEle": 5.249999941979234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809803666666667,
        "lng": 120.91973966666666,
        "ele": 4.9999999999999964,
        "distanceKm": 14.596291657452719,
        "gradePct": -0.48603974228888885,
        "smoothedEle": 4.999999941980526,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810076,
        "lng": 120.920037,
        "ele": 4.75,
        "distanceKm": 14.638925440881069,
        "gradePct": -0.7982208711187886,
        "smoothedEle": 4.513389059608892,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810432,
        "lng": 120.9204175,
        "ele": 3.3750000000000226,
        "distanceKm": 14.694079082902064,
        "gradePct": -1.6379747592541647,
        "smoothedEle": 3.3749994719160936,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810788,
        "lng": 120.920798,
        "ele": 2,
        "distanceKm": 14.749232648110853,
        "gradePct": -2.026404097103739,
        "smoothedEle": 2.2742407635978243,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8111025,
        "lng": 120.921086,
        "ele": 1.8749999999999976,
        "distanceKm": 14.794707087164015,
        "gradePct": -1.4874657484436142,
        "smoothedEle": 1.8749999705303633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811417,
        "lng": 120.921374,
        "ele": 1.75,
        "distanceKm": 14.84018147906576,
        "gradePct": -0.7722861586354998,
        "smoothedEle": 1.682598469218961,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811866,
        "lng": 120.921693,
        "ele": 1.25,
        "distanceKm": 14.899589464728782,
        "gradePct": -0.26732884070513135,
        "smoothedEle": 1.5870138602247947,
        "gradeBand": "descent"
      },
      {
        "lat": 24.812365,
        "lng": 120.921974,
        "ele": 2.5,
        "distanceKm": 14.96190405282761,
        "gradePct": 0.785374900156122,
        "smoothedEle": 2.4330227866175553,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812808782870558,
        "lng": 120.9221729690983,
        "ele": 3.2215031201725455,
        "distanceKm": 15.015180315594272,
        "gradePct": 1.4359047453545992,
        "smoothedEle": 3.2345865216272967,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813262,
        "lng": 120.922346,
        "ele": 4,
        "distanceKm": 15.068516027743847,
        "gradePct": 1.3694511116548096,
        "smoothedEle": 3.9019538361362978,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813747560200664,
        "lng": 120.92251478997453,
        "ele": 4.385365238621662,
        "distanceKm": 15.125131809234718,
        "gradePct": 1.0217630127125723,
        "smoothedEle": 4.380868385190744,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814233,
        "lng": 120.922684,
        "ele": 4.75,
        "distanceKm": 15.181747577374317,
        "gradePct": 0.5694091810287134,
        "smoothedEle": 4.583289081907045,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814363358639984,
        "lng": 120.92217940082774,
        "ele": 4.377561435422489,
        "distanceKm": 15.23469878529644,
        "gradePct": 0.013194466331788716,
        "smoothedEle": 4.428268056600857,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814494518979988,
        "lng": 120.9216750506208,
        "ele": 4.22067107656687,
        "distanceKm": 15.287650257874118,
        "gradePct": -0.3453372393745763,
        "smoothedEle": 4.220671035936333,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81462567931999,
        "lng": 120.92117070041387,
        "ele": 4.063780717711245,
        "distanceKm": 15.34060167865698,
        "gradePct": -0.3413449999936201,
        "smoothedEle": 4.063780677079432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.814756839659996,
        "lng": 120.92066635020694,
        "ele": 3.906890358855625,
        "distanceKm": 15.393553047643397,
        "gradePct": -0.2962912756622222,
        "smoothedEle": 3.9068903182257717,
        "gradeBand": "descent"
      },
      {
        "lat": 24.814888,
        "lng": 120.920162,
        "ele": 3.75,
        "distanceKm": 15.446504364835873,
        "gradePct": -0.25048949576213575,
        "smoothedEle": 3.7958020290907606,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8153089712332,
        "lng": 120.9202920302592,
        "ele": 3.7846193448355185,
        "distanceKm": 15.495119189950351,
        "gradePct": -0.11898531046499715,
        "smoothedEle": 3.7846193469189666,
        "gradeBand": "descent"
      },
      {
        "lat": 24.815729942466398,
        "lng": 120.9204220605184,
        "ele": 3.819238689671037,
        "distanceKm": 15.543734003028502,
        "gradePct": 0.017624630597505027,
        "smoothedEle": 3.8192386917543804,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816150913699598,
        "lng": 120.9205520907776,
        "ele": 3.8538580345065543,
        "distanceKm": 15.592348804070934,
        "gradePct": 0.06860142840946962,
        "smoothedEle": 3.8538580365899913,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8165718849328,
        "lng": 120.9206821210368,
        "ele": 3.8884773793420724,
        "distanceKm": 15.64096359307711,
        "gradePct": 0.07121154056515147,
        "smoothedEle": 3.888477381425535,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816992856166,
        "lng": 120.920812151296,
        "ele": 3.923096724177591,
        "distanceKm": 15.68957837004688,
        "gradePct": 0.0712115581960984,
        "smoothedEle": 3.923096726261145,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817413827399196,
        "lng": 120.9209421815552,
        "ele": 3.9577160690131095,
        "distanceKm": 15.738193134979708,
        "gradePct": 0.07121157582742103,
        "smoothedEle": 3.95771607109656,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817834798632397,
        "lng": 120.9210722118144,
        "ele": 3.992335413848628,
        "distanceKm": 15.786807887876202,
        "gradePct": -0.18022789300824923,
        "smoothedEle": 3.7408959294650788,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81825559295748,
        "lng": 120.92120293660781,
        "ele": 3.048309678064853,
        "distanceKm": 15.835422664519447,
        "gradePct": -0.9789302088431588,
        "smoothedEle": 2.9768129663162832,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81867633697874,
        "lng": 120.92133385889203,
        "ele": 1.8260061947442998,
        "distanceKm": 15.88403745904915,
        "gradePct": -1.9272458274398239,
        "smoothedEle": 1.8260061202064153,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819097081,
        "lng": 120.92146478117624,
        "ele": 0.603702711423701,
        "distanceKm": 15.932652241382561,
        "gradePct": -2.3219523550941914,
        "smoothedEle": 0.6984036091698566,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819518,
        "lng": 120.921595,
        "ele": -0.25,
        "distanceKm": 15.981266495022837,
        "gradePct": -1.6063535799641027,
        "smoothedEle": 0.2852466541875443,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8196545,
        "lng": 120.921081,
        "ele": 1.125,
        "distanceKm": 16.035316546047074,
        "gradePct": 0.44923983908150605,
        "smoothedEle": 1.1250003771372636,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819791,
        "lng": 120.920567,
        "ele": 2.5,
        "distanceKm": 16.08936654221499,
        "gradePct": 1.8525851843797143,
        "smoothedEle": 2.2636789868452203,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819893,
        "lng": 120.920225,
        "ele": 2.75,
        "distanceKm": 16.12569833166236,
        "gradePct": 1.8544950283744241,
        "smoothedEle": 2.830061109250425,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820023080793305,
        "lng": 120.91972276037292,
        "ele": 3.4252014855241146,
        "distanceKm": 16.178409818273714,
        "gradePct": 1.4868309579890624,
        "smoothedEle": 3.519683153549292,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82015419013909,
        "lng": 120.91922084482562,
        "ele": 4.5,
        "distanceKm": 16.23112131963073,
        "gradePct": 1.3076846505549422,
        "smoothedEle": 4.20869447116557,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820281798003005,
        "lng": 120.91871788715717,
        "ele": 4.342780106899718,
        "distanceKm": 16.28382770094808,
        "gradePct": 0.6492968949866796,
        "smoothedEle": 4.239799174989449,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820413,
        "lng": 120.918216,
        "ele": 3.75,
        "distanceKm": 16.33653919762385,
        "gradePct": -0.3961099516617647,
        "smoothedEle": 3.8157818835822623,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8208494,
        "lng": 120.9183515,
        "ele": 3.4500000000000077,
        "distanceKm": 16.386954839826476,
        "gradePct": -0.7646441327787776,
        "smoothedEle": 3.4499999803988732,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8212858,
        "lng": 120.918487,
        "ele": 3.1500000000000044,
        "distanceKm": 16.437370468961685,
        "gradePct": -0.6597507589040474,
        "smoothedEle": 3.1499999803997576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8217222,
        "lng": 120.9186225,
        "ele": 2.850000000000001,
        "distanceKm": 16.487786085030063,
        "gradePct": -0.5950536457577367,
        "smoothedEle": 2.8499999803983584,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822158599999998,
        "lng": 120.918758,
        "ele": 2.549999999999998,
        "distanceKm": 16.53820168803068,
        "gradePct": -0.595053799989989,
        "smoothedEle": 2.5499999803998152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822595,
        "lng": 120.91889350000001,
        "ele": 2.2499999999999947,
        "distanceKm": 16.588617277964506,
        "gradePct": -0.5950539542232307,
        "smoothedEle": 2.249999980397819,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8230314,
        "lng": 120.91902900000001,
        "ele": 1.9499999999999913,
        "distanceKm": 16.639032854830216,
        "gradePct": -0.5950541084597605,
        "smoothedEle": 1.9499999803975756,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8234678,
        "lng": 120.91916450000001,
        "ele": 1.6500000000000097,
        "distanceKm": 16.689448418627645,
        "gradePct": -0.5950542627006268,
        "smoothedEle": 1.6499999803984573,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8239042,
        "lng": 120.9193,
        "ele": 1.3500000000000068,
        "distanceKm": 16.73986396935738,
        "gradePct": -0.5950544169430596,
        "smoothedEle": 1.3499999803970633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8243406,
        "lng": 120.9194355,
        "ele": 1.0500000000000034,
        "distanceKm": 16.79027950701849,
        "gradePct": -0.5950545711864634,
        "smoothedEle": 1.0499999803979554,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824777,
        "lng": 120.919571,
        "ele": 0.75,
        "distanceKm": 16.840695031611563,
        "gradePct": -0.36386571908131643,
        "smoothedEle": 0.9811889867472191,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82519772122022,
        "lng": 120.9195604952628,
        "ele": 1.339454900277565,
        "distanceKm": 16.88748917190525,
        "gradePct": 0.5272098133976976,
        "smoothedEle": 1.5938138125724965,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.825619147480147,
        "lng": 120.91951699684186,
        "ele": 2.8929699335183368,
        "distanceKm": 16.934554867809844,
        "gradePct": 1.903400388795012,
        "smoothedEle": 2.892969944340956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.826040573740073,
        "lng": 120.91947349842094,
        "ele": 4.446484966759228,
        "distanceKm": 16.981620562321133,
        "gradePct": 2.929502492642483,
        "smoothedEle": 4.446484977579908,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.826462,
        "lng": 120.91943,
        "ele": 6,
        "distanceKm": 17.028686255439364,
        "gradePct": 3.01509813349238,
        "smoothedEle": 5.7460765551426745,
        "gradeBand": "hard"
      },
      {
        "lat": 24.82695781361166,
        "lng": 120.91944047492558,
        "ele": 6.701093905024163,
        "distanceKm": 17.08382842353102,
        "gradePct": 2.0139082073636354,
        "smoothedEle": 6.521357289425947,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827452906805828,
        "lng": 120.9194887374628,
        "ele": 6.600546952512085,
        "distanceKm": 17.139095386241166,
        "gradePct": 0.7081214434178774,
        "smoothedEle": 6.600546951649545,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.827948,
        "lng": 120.919537,
        "ele": 6.5,
        "distanceKm": 17.194362347235625,
        "gradePct": 0.1753080115973768,
        "smoothedEle": 6.711758908834409,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828349,
        "lng": 120.91959250000001,
        "ele": 7.187499999999986,
        "distanceKm": 17.239301967572686,
        "gradePct": 0.5865373590423882,
        "smoothedEle": 7.1875000077699545,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82875,
        "lng": 120.91964800000001,
        "ele": 7.8750000000000275,
        "distanceKm": 17.284241585649394,
        "gradePct": 1.183606787296073,
        "smoothedEle": 7.8750000077707,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829151,
        "lng": 120.9197035,
        "ele": 8.562500000000014,
        "distanceKm": 17.329181201465538,
        "gradePct": 1.4821407447093276,
        "smoothedEle": 8.562500007769577,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829552,
        "lng": 120.919759,
        "ele": 9.25,
        "distanceKm": 17.374120815021453,
        "gradePct": 1.0209717563836314,
        "smoothedEle": 8.741141124631746,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83002993711296,
        "lng": 120.91974778005351,
        "ele": 7.885509546429865,
        "distanceKm": 17.427277131193463,
        "gradePct": -0.6510706396603091,
        "smoothedEle": 7.882300318199141,
        "gradeBand": "descent"
      },
      {
        "lat": 24.830507624741976,
        "lng": 120.919724853369,
        "ele": 6.5070063642865765,
        "distanceKm": 17.48044401112832,
        "gradePct": -2.131971572745643,
        "smoothedEle": 6.507006361606312,
        "gradeBand": "descent"
      },
      {
        "lat": 24.830985312370988,
        "lng": 120.91970192668451,
        "ele": 5.128503182143288,
        "distanceKm": 17.53361089067431,
        "gradePct": -2.589958652306502,
        "smoothedEle": 5.128503179466599,
        "gradeBand": "descent"
      },
      {
        "lat": 24.831463,
        "lng": 120.919679,
        "ele": 3.75,
        "distanceKm": 17.58677776983195,
        "gradePct": -2.3741684795059914,
        "smoothedEle": 3.968617100244816,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8318595,
        "lng": 120.919734,
        "ele": 3.374999999999985,
        "distanceKm": 17.631214607000118,
        "gradePct": -1.8156336810065634,
        "smoothedEle": 3.3749999958372165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832256,
        "lng": 120.919789,
        "ele": 3,
        "distanceKm": 17.675651441948137,
        "gradePct": -0.9795687343620182,
        "smoothedEle": 3.2317797999966844,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83274555513614,
        "lng": 120.91988642540258,
        "ele": 3.571127151780104,
        "distanceKm": 17.730968269338838,
        "gradePct": 0.24910546632036248,
        "smoothedEle": 3.627396206020444,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83323171377096,
        "lng": 120.92000523182217,
        "ele": 4.3951292851826755,
        "distanceKm": 17.7863402490192,
        "gradePct": 1.026307535931525,
        "smoothedEle": 4.334531840025831,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833717856885478,
        "lng": 120.92012411591108,
        "ele": 4.947564642591338,
        "distanceKm": 17.84171223129566,
        "gradePct": 1.1829611914441696,
        "smoothedEle": 4.947564670780882,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.834204,
        "lng": 120.920243,
        "ele": 5.5,
        "distanceKm": 17.89708420336656,
        "gradePct": 1.0296592711559085,
        "smoothedEle": 5.483139295376783,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.834724914650064,
        "lng": 120.92045425695352,
        "ele": 6.0559795160138075,
        "distanceKm": 17.958805887310245,
        "gradePct": 1.065196082079093,
        "smoothedEle": 6.178095814274452,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835246,
        "lng": 120.920665,
        "ele": 7.25,
        "distanceKm": 18.020527465876167,
        "gradePct": 1.2869233009013858,
        "smoothedEle": 7.034022473331198,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8356532,
        "lng": 120.9208706,
        "ele": 7.299999999999999,
        "distanceKm": 18.070333186812462,
        "gradePct": 0.9620488686472065,
        "smoothedEle": 7.3000000071068785,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8360604,
        "lng": 120.9210762,
        "ele": 7.3500000000000005,
        "distanceKm": 18.12013887932123,
        "gradePct": 0.32136627462557577,
        "smoothedEle": 7.35000000710715,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8364676,
        "lng": 120.9212818,
        "ele": 7.3999999999999995,
        "distanceKm": 18.169944543401396,
        "gradePct": 0.10207547273806605,
        "smoothedEle": 7.400000007107062,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8368748,
        "lng": 120.9214874,
        "ele": 7.450000000000001,
        "distanceKm": 18.219750179053314,
        "gradePct": 0.10039021670869487,
        "smoothedEle": 7.450000007107332,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837282,
        "lng": 120.921693,
        "ele": 7.5,
        "distanceKm": 18.26955578627591,
        "gradePct": -0.012378262710297785,
        "smoothedEle": 7.387231470386099,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83770733333333,
        "lng": 120.92190466666666,
        "ele": 7.083333333333343,
        "distanceKm": 18.321450219194524,
        "gradePct": -0.36452422629198206,
        "smoothedEle": 7.083333270403733,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838132666666667,
        "lng": 120.92211633333334,
        "ele": 6.666666666666657,
        "distanceKm": 18.373344621906934,
        "gradePct": -0.6983771238933806,
        "smoothedEle": 6.666666603732266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838558,
        "lng": 120.922328,
        "ele": 6.25,
        "distanceKm": 18.42523899441084,
        "gradePct": -0.31977852197924583,
        "smoothedEle": 6.733134197119599,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838991,
        "lng": 120.92254449999999,
        "ele": 7.874999999999944,
        "distanceKm": 18.478111100277165,
        "gradePct": 1.2022286296734845,
        "smoothedEle": 7.875000256569465,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839424,
        "lng": 120.922761,
        "ele": 9.5,
        "distanceKm": 18.5309831745657,
        "gradePct": 2.436909909419964,
        "smoothedEle": 9.294099773525573,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8397805,
        "lng": 120.922935,
        "ele": 10.125,
        "distanceKm": 18.574338640187708,
        "gradePct": 2.331472713914071,
        "smoothedEle": 10.125000064001048,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840137,
        "lng": 120.923109,
        "ele": 10.75,
        "distanceKm": 18.61769408532938,
        "gradePct": 1.3155492006620397,
        "smoothedEle": 10.252966540789288,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.840396,
        "lng": 120.923323,
        "ele": 9.75,
        "distanceKm": 18.653690240273693,
        "gradePct": 0.08536987719590762,
        "smoothedEle": 9.814646789795692,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84072659876858,
        "lng": 120.92364031103672,
        "ele": 8.753420110792275,
        "distanceKm": 18.702440473296,
        "gradePct": -1.4545246605657762,
        "smoothedEle": 8.753419830886251,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84105719753716,
        "lng": 120.92395762207344,
        "ele": 7.756840221584477,
        "distanceKm": 18.751190650144984,
        "gradePct": -2.0882439802110584,
        "smoothedEle": 7.7568399416754445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841387796305742,
        "lng": 120.92427493311017,
        "ele": 6.760260332376753,
        "distanceKm": 18.799940770820033,
        "gradePct": -1.9232258749948292,
        "smoothedEle": 6.884609114389968,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841728,
        "lng": 120.924578,
        "ele": 6.25,
        "distanceKm": 18.848584941267557,
        "gradePct": -1.0241917378366119,
        "smoothedEle": 6.785915642691969,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841845,
        "lng": 120.924548,
        "ele": 7,
        "distanceKm": 18.861942314225573,
        "gradePct": -0.4125996762334013,
        "smoothedEle": 7.151872888175099,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84219,
        "lng": 120.924005,
        "ele": 9.5,
        "distanceKm": 18.928829042069555,
        "gradePct": 1.9224399501034883,
        "smoothedEle": 8.748438058185043,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842526999999997,
        "lng": 120.923741,
        "ele": 8.25000000000005,
        "distanceKm": 18.97480567569119,
        "gradePct": 0.7910824541319664,
        "smoothedEle": 8.249999737320012,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842864,
        "lng": 120.923477,
        "ele": 7,
        "distanceKm": 19.020782267284023,
        "gradePct": -1.3218955992941677,
        "smoothedEle": 7.234468473997109,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842904,
        "lng": 120.923431,
        "ele": 7,
        "distanceKm": 19.027210943313467,
        "gradePct": -1.5630159015658958,
        "smoothedEle": 7.146798647906967,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842889,
        "lng": 120.923301,
        "ele": 6.25,
        "distanceKm": 19.04043426461658,
        "gradePct": -1.714020920423234,
        "smoothedEle": 6.908603497572158,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842868,
        "lng": 120.923192,
        "ele": 6,
        "distanceKm": 19.05167810572858,
        "gradePct": -1.7966706874740022,
        "smoothedEle": 6.704057870766616,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 19.05167810572858,
      "elevationGainM": 60.61038916375535,
      "elevationLossM": 60.45908825945154,
      "minimumElevationM": -0.25,
      "maximumElevationM": 10.75,
      "maximumSustainedGradePct": 3.01509813349238
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 412,
        "startDistanceKm": 0,
        "endDistanceKm": 19.05167810572858,
        "distanceKm": 19.05167810572858,
        "gainM": 73.14611854648749,
        "averageGradePct": 0.3839353055439953,
        "maximumGradePct": 3.01509813349238
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
