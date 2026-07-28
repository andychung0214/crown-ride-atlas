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
  "hsinchu-city-18-peaks": {
    "routeId": "hsinchu-city-18-peaks",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-28T04:00:18.521Z",
      "reviewStatus": "approved",
      "reviewedAt": "2026-07-28T04:38:44.415Z",
      "reviewerNote": "以 OpenStreetMap 疊圖逐段檢查站前信義街、學府路、寶山路、高峰路與青草湖明湖路環線；十八尖山官方定位為健行森林公園，本路線只沿山腳公共道路騎乘，不進園內步道，BRouter 訊息無 footway、path、steps、私人或未鋪面路段。"
    },
    "waypoints": [
      {
        "name": "信義街站前道路",
        "lat": 24.8016,
        "lng": 120.97,
        "role": "start"
      },
      {
        "name": "十八尖山學府路北側",
        "lat": 24.796364,
        "lng": 120.983156,
        "role": "via"
      },
      {
        "name": "寶山路赤土崎",
        "lat": 24.785343,
        "lng": 120.989488,
        "role": "via"
      },
      {
        "name": "高峰路丘陵",
        "lat": 24.780427,
        "lng": 120.980933,
        "role": "via"
      },
      {
        "name": "青草湖明湖路",
        "lat": 24.770683,
        "lng": 120.973294,
        "role": "via"
      },
      {
        "name": "信義街站前道路",
        "lat": 24.8016,
        "lng": 120.97,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.80159,
        "lng": 120.970039,
        "ele": 27,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 27.207810631873674,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801889,
        "lng": 120.970113,
        "ele": 27.25,
        "distanceKm": 0.03407606310508419,
        "gradePct": 1.4836076215930403,
        "smoothedEle": 27.713365701239557,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801916,
        "lng": 120.969856,
        "ele": 28,
        "distanceKm": 0.060190498276731355,
        "gradePct": 1.7722495941693677,
        "smoothedEle": 28.274536493311565,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801939,
        "lng": 120.969692,
        "ele": 29,
        "distanceKm": 0.07694085790213356,
        "gradePct": 2.660472509536814,
        "smoothedEle": 29.25480100496172,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801804,
        "lng": 120.969128,
        "ele": 33,
        "distanceKm": 0.135816239014608,
        "gradePct": 4.66447614770108,
        "smoothedEle": 32.41523633544105,
        "gradeBand": "hard"
      },
      {
        "lat": 24.801638,
        "lng": 120.968542,
        "ele": 34.25,
        "distanceKm": 0.19777964490395744,
        "gradePct": 3.384857101663432,
        "smoothedEle": 33.75828591744273,
        "gradeBand": "hard"
      },
      {
        "lat": 24.801551,
        "lng": 120.968237,
        "ele": 33.5,
        "distanceKm": 0.2300502130731019,
        "gradePct": 0.962879153282465,
        "smoothedEle": 33.0685947390033,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801259,
        "lng": 120.967763,
        "ele": 30.25,
        "distanceKm": 0.287872328127723,
        "gradePct": -2.9295083423924986,
        "smoothedEle": 30.614037641631445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800998,
        "lng": 120.967377,
        "ele": 29,
        "distanceKm": 0.33645584993076944,
        "gradePct": -3.5857499946367213,
        "smoothedEle": 29.210924538796064,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8007925,
        "lng": 120.9670385,
        "ele": 28.625,
        "distanceKm": 0.3775606766321574,
        "gradePct": -2.4267686419043963,
        "smoothedEle": 28.62500008825877,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800587,
        "lng": 120.9667,
        "ele": 28.25,
        "distanceKm": 0.4186655504048894,
        "gradePct": -1.5930902576177253,
        "smoothedEle": 28.131625818756067,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800304,
        "lng": 120.966928,
        "ele": 27.5,
        "distanceKm": 0.45765153895954025,
        "gradePct": -1.300762793620486,
        "smoothedEle": 27.608030014073485,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799919,
        "lng": 120.967215,
        "ele": 27,
        "distanceKm": 0.5093425274209112,
        "gradePct": -0.8664831050221589,
        "smoothedEle": 27.377045250637657,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799540592855514,
        "lng": 120.96749213596482,
        "ele": 28.036022298388477,
        "distanceKm": 0.5598700938275973,
        "gradePct": 0.43790580563421255,
        "smoothedEle": 28.036022053563517,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.799162185711026,
        "lng": 120.96776927192963,
        "ele": 29.072044596776955,
        "distanceKm": 0.6103977074967726,
        "gradePct": 1.681237520410193,
        "smoothedEle": 29.072044351950154,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79878377856654,
        "lng": 120.96804640789445,
        "ele": 30.108066895165436,
        "distanceKm": 0.6609253684287918,
        "gradePct": 2.028464651480658,
        "smoothedEle": 30.08612414125711,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798405453388185,
        "lng": 120.96832367891409,
        "ele": 31.05538217940004,
        "distanceKm": 0.7114530370665211,
        "gradePct": 1.8263291393405194,
        "smoothedEle": 30.919553739257818,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798027635592124,
        "lng": 120.96860178594272,
        "ele": 31.453588119600028,
        "distanceKm": 0.7619806268662629,
        "gradePct": 1.3500579032254696,
        "smoothedEle": 31.453588024988708,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79764981779606,
        "lng": 120.96887989297136,
        "ele": 31.851794059800014,
        "distanceKm": 0.8125082641847953,
        "gradePct": 0.9210873594968984,
        "smoothedEle": 31.85179396519115,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797272,
        "lng": 120.969158,
        "ele": 32.25,
        "distanceKm": 0.863035949020883,
        "gradePct": 0.4991589247650163,
        "smoothedEle": 31.961063894164717,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797016768543834,
        "lng": 120.96948105669348,
        "ele": 31.579092781787597,
        "distanceKm": 0.9062664727662952,
        "gradePct": -0.2681854857907631,
        "smoothedEle": 31.5344172139414,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796776,
        "lng": 120.969818,
        "ele": 30.75,
        "distanceKm": 0.9495512703239393,
        "gradePct": -0.8294167700743069,
        "smoothedEle": 31.102485489469185,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796503,
        "lng": 120.970249,
        "ele": 31.25,
        "distanceKm": 1.0026014044614258,
        "gradePct": 0.06037339648842634,
        "smoothedEle": 31.630961563025103,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796208,
        "lng": 120.970695,
        "ele": 33.5,
        "distanceKm": 1.058304850889747,
        "gradePct": 1.95109474162042,
        "smoothedEle": 33.14078185578266,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79592611783406,
        "lng": 120.97111359591904,
        "ele": 34.08712914929154,
        "distanceKm": 1.1109155895553648,
        "gradePct": 2.2487610576133523,
        "smoothedEle": 34.10507538025136,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795644,
        "lng": 120.971532,
        "ele": 34.75,
        "distanceKm": 1.16352647469053,
        "gradePct": 1.837151873212518,
        "smoothedEle": 35.07364000771347,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79532960037248,
        "lng": 120.9719080805836,
        "ele": 36.73670650329402,
        "distanceKm": 1.2151343924840925,
        "gradePct": 2.3788542707296525,
        "smoothedEle": 36.56159767113503,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795011,
        "lng": 120.97228,
        "ele": 38,
        "distanceKm": 1.2667536336540677,
        "gradePct": 2.3848474715447003,
        "smoothedEle": 37.551532812535974,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794562,
        "lng": 120.972786,
        "ele": 37,
        "distanceKm": 1.338179294156933,
        "gradePct": -0.06652391972608734,
        "smoothedEle": 36.93702054254743,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794186,
        "lng": 120.973196,
        "ele": 36,
        "distanceKm": 1.3970090631692833,
        "gradePct": -0.19923302027861195,
        "smoothedEle": 37.091996526736594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79392548626986,
        "lng": 120.97349298565237,
        "ele": 39.039326851653385,
        "distanceKm": 1.4386971135139652,
        "gradePct": 2.150899784789784,
        "smoothedEle": 39.08928442523927,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793665,
        "lng": 120.97379,
        "ele": 42.25,
        "distanceKm": 1.4803851706825193,
        "gradePct": 4.897165228897943,
        "smoothedEle": 41.94536923116193,
        "gradeBand": "hard"
      },
      {
        "lat": 24.793438,
        "lng": 120.974056,
        "ele": 44.25,
        "distanceKm": 1.5172379530279032,
        "gradePct": 5.256784590186558,
        "smoothedEle": 43.31795373547232,
        "gradeBand": "hard"
      },
      {
        "lat": 24.793679,
        "lng": 120.974696,
        "ele": 42.25,
        "distanceKm": 1.5871805442297517,
        "gradePct": 0.030870585700782244,
        "smoothedEle": 42.229333988817416,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793870457543385,
        "lng": 120.97522992649552,
        "ele": 40.722116585595906,
        "distanceKm": 1.6451302024123575,
        "gradePct": -2.255055130931195,
        "smoothedEle": 40.62877037256139,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794064,
        "lng": 120.975763,
        "ele": 38.75,
        "distanceKm": 1.7030853947953337,
        "gradePct": -2.4114126376589677,
        "smoothedEle": 39.37863100958227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794207999999998,
        "lng": 120.9761575,
        "ele": 39.5,
        "distanceKm": 1.7460068088263567,
        "gradePct": -1.1098611176423594,
        "smoothedEle": 39.500000160859976,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794352,
        "lng": 120.976552,
        "ele": 40.25,
        "distanceKm": 1.7889281799613854,
        "gradePct": 0.4601690543238984,
        "smoothedEle": 40.14418239129311,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794137,
        "lng": 120.976723,
        "ele": 40.75,
        "distanceKm": 1.8184155499370462,
        "gradePct": 0.9138332821740952,
        "smoothedEle": 40.335813467465265,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794116,
        "lng": 120.976772,
        "ele": 40.5,
        "distanceKm": 1.823885348124936,
        "gradePct": 0.8163193267618133,
        "smoothedEle": 40.25376649464691,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794129,
        "lng": 120.976882,
        "ele": 40.25,
        "distanceKm": 1.8350830132393472,
        "gradePct": 0.6166906422692614,
        "smoothedEle": 40.085801517930754,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794334,
        "lng": 120.977471,
        "ele": 38.75,
        "distanceKm": 1.8987595823585468,
        "gradePct": -0.743318952500004,
        "smoothedEle": 39.46475527530496,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794537,
        "lng": 120.978029,
        "ele": 41,
        "distanceKm": 1.9594414006964167,
        "gradePct": 0.6765484795957443,
        "smoothedEle": 40.52477933038961,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794680422497674,
        "lng": 120.97845903120313,
        "ele": 40.87762306409633,
        "distanceKm": 2.005687601962133,
        "gradePct": 0.3497435453252959,
        "smoothedEle": 39.935521354810255,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794824,
        "lng": 120.978889,
        "ele": 37.25,
        "distanceKm": 2.051933790280467,
        "gradePct": -3.10342123940836,
        "smoothedEle": 37.29021093924627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794992,
        "lng": 120.97935,
        "ele": 33.5,
        "distanceKm": 2.102078755829733,
        "gradePct": -4.463445652277759,
        "smoothedEle": 35.5180587521226,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79513957259459,
        "lng": 120.97975422729702,
        "ele": 37.36748994479788,
        "distanceKm": 2.1460591218224905,
        "gradePct": -0.5584728969993402,
        "smoothedEle": 37.06777269126274,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79528713787289,
        "lng": 120.98015845824895,
        "ele": 40.164935978919786,
        "distanceKm": 2.1900394815449857,
        "gradePct": 3.9518410608340737,
        "smoothedEle": 39.89537475388839,
        "gradeBand": "hard"
      },
      {
        "lat": 24.795434,
        "lng": 120.980563,
        "ele": 42,
        "distanceKm": 2.234019814470673,
        "gradePct": 4.672822869024483,
        "smoothedEle": 41.31637256896932,
        "gradeBand": "hard"
      },
      {
        "lat": 24.795693,
        "lng": 120.981226,
        "ele": 40.75,
        "distanceKm": 2.306879165922535,
        "gradePct": 0.20885002043279127,
        "smoothedEle": 40.64831239520351,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79581971511895,
        "lng": 120.98157415898439,
        "ele": 39.87670344284504,
        "distanceKm": 2.3447429635066572,
        "gradePct": -1.1870466565166768,
        "smoothedEle": 40.03100347798753,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795938,
        "lng": 120.981926,
        "ele": 39.5,
        "distanceKm": 2.382616309077328,
        "gradePct": -1.2111328411642566,
        "smoothedEle": 39.65964994441561,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79612463116477,
        "lng": 120.98246582133253,
        "ele": 39.70452265249854,
        "distanceKm": 2.440925747357222,
        "gradePct": -0.2606538994361356,
        "smoothedEle": 39.83258320851818,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796311331425798,
        "lng": 120.98300561436793,
        "ele": 40.52338344648564,
        "distanceKm": 2.4992351746472314,
        "gradePct": 0.6909905757525998,
        "smoothedEle": 40.39992850430021,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796499,
        "lng": 120.983545,
        "ele": 40.75,
        "distanceKm": 2.5575445439872935,
        "gradePct": 0.8920657975867237,
        "smoothedEle": 40.88634834921001,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7966745,
        "lng": 120.98401225,
        "ele": 41.5,
        "distanceKm": 2.6085879348192984,
        "gradePct": 1.0220505066517935,
        "smoothedEle": 41.50000023127842,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796850000000003,
        "lng": 120.9844795,
        "ele": 42.25,
        "distanceKm": 2.659631263977057,
        "gradePct": 1.3385649975944165,
        "smoothedEle": 42.250000231280474,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7970255,
        "lng": 120.98494675,
        "ele": 43,
        "distanceKm": 2.710674531460023,
        "gradePct": 1.4693408030736408,
        "smoothedEle": 43.00000023128083,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797201,
        "lng": 120.985414,
        "ele": 43.75,
        "distanceKm": 2.761717737268102,
        "gradePct": 1.3646622130416464,
        "smoothedEle": 43.645319865867606,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797488,
        "lng": 120.985597,
        "ele": 44,
        "distanceKm": 2.798591461998253,
        "gradePct": 1.1582500855002982,
        "smoothedEle": 43.98070874189359,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79741097162936,
        "lng": 120.98601538923371,
        "ele": 44.20952295146001,
        "distanceKm": 2.8416844877832865,
        "gradePct": 0.8404635879905549,
        "smoothedEle": 44.23251077961166,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797343,
        "lng": 120.986436,
        "ele": 44.5,
        "distanceKm": 2.8848094854051434,
        "gradePct": 0.7423381937417085,
        "smoothedEle": 44.59769150510024,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797252,
        "lng": 120.9869405,
        "ele": 45.25,
        "distanceKm": 2.9367305736097395,
        "gradePct": 1.046435894199333,
        "smoothedEle": 45.24999986256125,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797161,
        "lng": 120.987445,
        "ele": 46,
        "distanceKm": 2.9886516984646696,
        "gradePct": 1.283068580070611,
        "smoothedEle": 45.92903156361133,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79742212046359,
        "lng": 120.98784622337912,
        "ele": 46.43585487001206,
        "distanceKm": 3.038484841133322,
        "gradePct": 1.1938056409907947,
        "smoothedEle": 46.46674805851332,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797638,
        "lng": 120.988284,
        "ele": 47,
        "distanceKm": 3.0887740392658656,
        "gradePct": 0.9294278037830913,
        "smoothedEle": 46.85977946609339,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797766666666668,
        "lng": 120.98868033333333,
        "ele": 47,
        "distanceKm": 3.131262105260744,
        "gradePct": 0.6111877089101648,
        "smoothedEle": 47,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797895333333333,
        "lng": 120.98907666666666,
        "ele": 47,
        "distanceKm": 3.1737501321698747,
        "gradePct": 0.25763873846271657,
        "smoothedEle": 47,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798024,
        "lng": 120.989473,
        "ele": 47,
        "distanceKm": 3.2162381199960395,
        "gradePct": -0.14089465238033216,
        "smoothedEle": 46.809522689857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798014,
        "lng": 120.989846,
        "ele": 46.5,
        "distanceKm": 3.25390590272232,
        "gradePct": -0.2593307637776119,
        "smoothedEle": 46.74066923622239,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798068,
        "lng": 120.989935,
        "ele": 46,
        "distanceKm": 3.2647116304862784,
        "gradePct": -0.17667048042098785,
        "smoothedEle": 46.82332951957901,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797968341439027,
        "lng": 120.99035179389502,
        "ele": 47.76496729477426,
        "distanceKm": 3.308218579753781,
        "gradePct": 1.0576842768445962,
        "smoothedEle": 47.903159256562404,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79787,
        "lng": 120.990769,
        "ele": 50,
        "distanceKm": 3.3517287609977546,
        "gradePct": 3.5540726008406667,
        "smoothedEle": 50.29872146410608,
        "gradeBand": "hard"
      },
      {
        "lat": 24.797757,
        "lng": 120.991174,
        "ele": 53.25,
        "distanceKm": 3.394497719381382,
        "gradePct": 5.598337520433179,
        "smoothedEle": 53.16094904159782,
        "gradeBand": "hard"
      },
      {
        "lat": 24.797562,
        "lng": 120.991601,
        "ele": 56.5,
        "distanceKm": 3.4427467367436053,
        "gradePct": 6.382411859962916,
        "smoothedEle": 56.18660544035762,
        "gradeBand": "steep"
      },
      {
        "lat": 24.797265,
        "lng": 120.992013,
        "ele": 58.75,
        "distanceKm": 3.4958526115683624,
        "gradePct": 5.098775648563378,
        "smoothedEle": 58.34468887055871,
        "gradeBand": "hard"
      },
      {
        "lat": 24.796868,
        "lng": 120.992268,
        "ele": 59.25,
        "distanceKm": 3.546953500056285,
        "gradePct": 2.7701949562320514,
        "smoothedEle": 59.12775222121981,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796542,
        "lng": 120.992341,
        "ele": 59.25,
        "distanceKm": 3.583944486617702,
        "gradePct": 1.6275080403239373,
        "smoothedEle": 59.488281953722314,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796072,
        "lng": 120.99237,
        "ele": 60.25,
        "distanceKm": 3.6362880958732373,
        "gradePct": 0.8088591843135398,
        "smoothedEle": 59.77317614280389,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796055,
        "lng": 120.99273,
        "ele": 59.5,
        "distanceKm": 3.6726769216135593,
        "gradePct": 0.8598037105330284,
        "smoothedEle": 60.23826723077957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795799216445992,
        "lng": 120.99305540946318,
        "ele": 61.2673863658879,
        "distanceKm": 3.7161272800693093,
        "gradePct": 1.6643094240882221,
        "smoothedEle": 61.32775489773548,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795544,
        "lng": 120.993382,
        "ele": 63.25,
        "distanceKm": 3.7596267244878696,
        "gradePct": 2.5624529759604093,
        "smoothedEle": 62.63392366258114,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795284,
        "lng": 120.993848,
        "ele": 63,
        "distanceKm": 3.814840741875462,
        "gradePct": 1.7604866353475315,
        "smoothedEle": 63.05598247826551,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795081801888564,
        "lng": 120.99432439847719,
        "ele": 63,
        "distanceKm": 3.8679267628787652,
        "gradePct": 0.41991535882664943,
        "smoothedEle": 63.117284945815086,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79488,
        "lng": 120.994801,
        "ele": 63.5,
        "distanceKm": 3.9210127845527296,
        "gradePct": -0.6391683199189012,
        "smoothedEle": 62.4239414856314,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794412,
        "lng": 120.994786,
        "ele": 59.5,
        "distanceKm": 3.9730741061250536,
        "gradePct": -2.333666608135528,
        "smoothedEle": 60.716390154730504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7942515,
        "lng": 120.99433950000001,
        "ele": 60.49999999999999,
        "distanceKm": 4.021550788889656,
        "gradePct": -1.906295834740531,
        "smoothedEle": 60.499999728855,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794091,
        "lng": 120.993893,
        "ele": 61.5,
        "distanceKm": 4.070027525883259,
        "gradePct": 0.9865862242550341,
        "smoothedEle": 61.80290069879647,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793959,
        "lng": 120.993568,
        "ele": 63.25,
        "distanceKm": 4.105968438588578,
        "gradePct": 2.605506256316874,
        "smoothedEle": 63.175062547739586,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.793718,
        "lng": 120.993216,
        "ele": 65,
        "distanceKm": 4.15047363155223,
        "gradePct": 3.6929115833885993,
        "smoothedEle": 64.97026560825375,
        "gradeBand": "hard"
      },
      {
        "lat": 24.793446,
        "lng": 120.992848,
        "ele": 66.75,
        "distanceKm": 4.198377040715455,
        "gradePct": 3.806348313645955,
        "smoothedEle": 66.69158442800992,
        "gradeBand": "hard"
      },
      {
        "lat": 24.793138,
        "lng": 120.992529,
        "ele": 68.25,
        "distanceKm": 4.24538642767123,
        "gradePct": 3.397701601322763,
        "smoothedEle": 68.16276499903697,
        "gradeBand": "hard"
      },
      {
        "lat": 24.792536,
        "lng": 120.992364,
        "ele": 70.25,
        "distanceKm": 4.314366967984364,
        "gradePct": 3.7149184852644614,
        "smoothedEle": 70.90691510440305,
        "gradeBand": "hard"
      },
      {
        "lat": 24.792101,
        "lng": 120.992342,
        "ele": 74,
        "distanceKm": 4.3627877839165405,
        "gradePct": 4.98771852465271,
        "smoothedEle": 73.84273576406521,
        "gradeBand": "hard"
      },
      {
        "lat": 24.791735,
        "lng": 120.992285,
        "ele": 76.75,
        "distanceKm": 4.40388993189204,
        "gradePct": 5.875751509272837,
        "smoothedEle": 76.36587428983842,
        "gradeBand": "hard"
      },
      {
        "lat": 24.791394,
        "lng": 120.99231950000001,
        "ele": 78.125,
        "distanceKm": 4.441967058412001,
        "gradePct": 5.587086457432255,
        "smoothedEle": 78.16743300089855,
        "gradeBand": "hard"
      },
      {
        "lat": 24.791053,
        "lng": 120.992354,
        "ele": 79.5,
        "distanceKm": 4.480044185807473,
        "gradePct": 5.01436371741379,
        "smoothedEle": 79.91641863076508,
        "gradeBand": "hard"
      },
      {
        "lat": 24.79105,
        "lng": 120.992422,
        "ele": 80,
        "distanceKm": 4.486916728249452,
        "gradePct": 4.927515236718509,
        "smoothedEle": 80.25145507481156,
        "gradeBand": "hard"
      },
      {
        "lat": 24.791004,
        "lng": 120.992513,
        "ele": 80.75,
        "distanceKm": 4.497431002443856,
        "gradePct": 4.794646106100973,
        "smoothedEle": 80.76402594178877,
        "gradeBand": "hard"
      },
      {
        "lat": 24.790918,
        "lng": 120.992568,
        "ele": 81.5,
        "distanceKm": 4.508488705900855,
        "gradePct": 4.719631013805102,
        "smoothedEle": 81.30308898531744,
        "gradeBand": "hard"
      },
      {
        "lat": 24.790807,
        "lng": 120.992612,
        "ele": 82.25,
        "distanceKm": 4.521606245423571,
        "gradePct": 4.632063525149947,
        "smoothedEle": 81.83615702656331,
        "gradeBand": "hard"
      },
      {
        "lat": 24.790679,
        "lng": 120.992625,
        "ele": 83,
        "distanceKm": 4.535899587733462,
        "gradePct": 4.515434794387916,
        "smoothedEle": 82.39579506543397,
        "gradeBand": "hard"
      },
      {
        "lat": 24.790188,
        "lng": 120.992517,
        "ele": 83.5,
        "distanceKm": 4.5915742790822,
        "gradePct": 2.5746155043384484,
        "smoothedEle": 83.05312618224647,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78968491506302,
        "lng": 120.99253187520752,
        "ele": 81.97381450653296,
        "distanceKm": 4.647534999772583,
        "gradePct": -0.9302593770305554,
        "smoothedEle": 81.60291082610004,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789182,
        "lng": 120.992581,
        "ele": 78.75,
        "distanceKm": 4.703676134746342,
        "gradePct": -3.5500386927302383,
        "smoothedEle": 79.18946935333983,
        "gradeBand": "descent"
      },
      {
        "lat": 24.788764,
        "lng": 120.992595,
        "ele": 77.75,
        "distanceKm": 4.750177160102641,
        "gradePct": -3.8274020167999216,
        "smoothedEle": 77.66192543908103,
        "gradeBand": "descent"
      },
      {
        "lat": 24.788316,
        "lng": 120.992428,
        "ele": 76.25,
        "distanceKm": 4.802767902217645,
        "gradePct": -2.0255636088271345,
        "smoothedEle": 77.20294959449349,
        "gradeBand": "descent"
      },
      {
        "lat": 24.787923,
        "lng": 120.992145,
        "ele": 78.75,
        "distanceKm": 4.8549774893891655,
        "gradePct": 1.0754679597868668,
        "smoothedEle": 78.6954994247581,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787515,
        "lng": 120.99189849999999,
        "ele": 81,
        "distanceKm": 4.906721526267914,
        "gradePct": 3.6840251099814183,
        "smoothedEle": 80.9999995572816,
        "gradeBand": "hard"
      },
      {
        "lat": 24.787107,
        "lng": 120.991652,
        "ele": 83.25,
        "distanceKm": 4.958465602499409,
        "gradePct": 4.639491903461621,
        "smoothedEle": 83.49033980139063,
        "gradeBand": "hard"
      },
      {
        "lat": 24.786707616627996,
        "lng": 120.99155004935852,
        "ele": 86.12876553141086,
        "distanceKm": 5.004052074531227,
        "gradePct": 5.3811689985499,
        "smoothedEle": 86.26228042394153,
        "gradeBand": "hard"
      },
      {
        "lat": 24.786306,
        "lng": 120.991458,
        "ele": 89.5,
        "distanceKm": 5.0496664276794,
        "gradePct": 6.364683549022482,
        "smoothedEle": 89.43153643625534,
        "gradeBand": "steep"
      },
      {
        "lat": 24.786043,
        "lng": 120.991285,
        "ele": 92,
        "distanceKm": 5.083728765782573,
        "gradePct": 6.508672185806015,
        "smoothedEle": 91.53516921625051,
        "gradeBand": "steep"
      },
      {
        "lat": 24.785894,
        "lng": 120.991073,
        "ele": 93,
        "distanceKm": 5.110794189803829,
        "gradePct": 5.684077226386086,
        "smoothedEle": 92.41479549694131,
        "gradeBand": "hard"
      },
      {
        "lat": 24.785772,
        "lng": 120.990683,
        "ele": 92.75,
        "distanceKm": 5.152437029815,
        "gradePct": 3.4930954291059475,
        "smoothedEle": 93.09573959892674,
        "gradeBand": "hard"
      },
      {
        "lat": 24.78534947039131,
        "lng": 120.99068241195263,
        "ele": 93.77908290433231,
        "distanceKm": 5.199420281058944,
        "gradePct": 2.0499486432157923,
        "smoothedEle": 94.09509210594835,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784927,
        "lng": 120.990682,
        "ele": 96,
        "distanceKm": 5.246396928525407,
        "gradePct": 2.2230351947853046,
        "smoothedEle": 95.22000700199948,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784962,
        "lng": 120.990198,
        "ele": 95.25,
        "distanceKm": 5.295412755873733,
        "gradePct": 1.2759608282223427,
        "smoothedEle": 95.28581127390333,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785113,
        "lng": 120.989862,
        "ele": 94.75,
        "distanceKm": 5.333261006457553,
        "gradePct": -0.19361816769563303,
        "smoothedEle": 94.71183266215375,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78535709510223,
        "lng": 120.9894651974987,
        "ele": 94,
        "distanceKm": 5.381648550087764,
        "gradePct": -1.0737859691911675,
        "smoothedEle": 94.19354671138672,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785602,
        "lng": 120.989069,
        "ele": 94,
        "distanceKm": 5.430036097444779,
        "gradePct": -0.3590905642377477,
        "smoothedEle": 94.40164868592518,
        "gradeBand": "descent"
      },
      {
        "lat": 24.785152,
        "lng": 120.988744,
        "ele": 96,
        "distanceKm": 5.489871228852261,
        "gradePct": 2.310326188082791,
        "smoothedEle": 96.53923645435816,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784838,
        "lng": 120.988511,
        "ele": 99.25,
        "distanceKm": 5.531970604834824,
        "gradePct": 4.927989785450155,
        "smoothedEle": 99.39874802687615,
        "gradeBand": "hard"
      },
      {
        "lat": 24.784697,
        "lng": 120.988171,
        "ele": 102.75,
        "distanceKm": 5.5697058524257095,
        "gradePct": 7.009430657507718,
        "smoothedEle": 102.82826655484708,
        "gradeBand": "steep"
      },
      {
        "lat": 24.784389,
        "lng": 120.988405,
        "ele": 106.75,
        "distanceKm": 5.611310866325378,
        "gradePct": 8.027349939817924,
        "smoothedEle": 106.02282867886841,
        "gradeBand": "steep"
      },
      {
        "lat": 24.784073,
        "lng": 120.988836,
        "ele": 108.75,
        "distanceKm": 5.667238026237874,
        "gradePct": 6.396842539677359,
        "smoothedEle": 109.00082394535168,
        "gradeBand": "steep"
      },
      {
        "lat": 24.783771,
        "lng": 120.989199,
        "ele": 111.5,
        "distanceKm": 5.716943310148658,
        "gradePct": 6.148227843481245,
        "smoothedEle": 112.47097146655038,
        "gradeBand": "steep"
      },
      {
        "lat": 24.783504,
        "lng": 120.989279,
        "ele": 115.5,
        "distanceKm": 5.747711287273275,
        "gradePct": 7.30273822775767,
        "smoothedEle": 115.26380731522968,
        "gradeBand": "steep"
      },
      {
        "lat": 24.783345,
        "lng": 120.989234,
        "ele": 118.25,
        "distanceKm": 5.7659656344589925,
        "gradePct": 8.110534216126752,
        "smoothedEle": 117.04360616583712,
        "gradeBand": "steep"
      },
      {
        "lat": 24.78291,
        "lng": 120.988852,
        "ele": 121.25,
        "distanceKm": 5.827827270318162,
        "gradePct": 7.568089459392921,
        "smoothedEle": 121.0270073877426,
        "gradeBand": "steep"
      },
      {
        "lat": 24.782622,
        "lng": 120.988551,
        "ele": 122.5,
        "distanceKm": 5.871974014341352,
        "gradePct": 5.233357466008575,
        "smoothedEle": 122.66385588635299,
        "gradeBand": "hard"
      },
      {
        "lat": 24.782321,
        "lng": 120.98831,
        "ele": 124.25,
        "distanceKm": 5.9133524444890035,
        "gradePct": 4.181478073891186,
        "smoothedEle": 124.27642089376492,
        "gradeBand": "hard"
      },
      {
        "lat": 24.781785,
        "lng": 120.988011,
        "ele": 127.5,
        "distanceKm": 5.980161082644514,
        "gradePct": 4.454545216506348,
        "smoothedEle": 127.43746056963614,
        "gradeBand": "hard"
      },
      {
        "lat": 24.7813605,
        "lng": 120.98778750000001,
        "ele": 129.49999999999997,
        "distanceKm": 6.032479062683603,
        "gradePct": 4.318605993691124,
        "smoothedEle": 129.49999966713816,
        "gradeBand": "hard"
      },
      {
        "lat": 24.780936,
        "lng": 120.987564,
        "ele": 131.5,
        "distanceKm": 6.084797076008874,
        "gradePct": 3.6940274814711946,
        "smoothedEle": 131.3142534706172,
        "gradeBand": "hard"
      },
      {
        "lat": 24.780607,
        "lng": 120.987364,
        "ele": 132.5,
        "distanceKm": 6.126582408535981,
        "gradePct": 3.1129495149378497,
        "smoothedEle": 132.380484554909,
        "gradeBand": "hard"
      },
      {
        "lat": 24.780201,
        "lng": 120.987066,
        "ele": 133.25,
        "distanceKm": 6.180833637263055,
        "gradePct": 1.9016304733417608,
        "smoothedEle": 133.07844210772652,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779958,
        "lng": 120.986797,
        "ele": 133.25,
        "distanceKm": 6.219143199713404,
        "gradePct": 1.189993713680029,
        "smoothedEle": 133.38065291099437,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779659,
        "lng": 120.98645766666667,
        "ele": 133.75,
        "distanceKm": 6.266882035315651,
        "gradePct": 0.8510490881227812,
        "smoothedEle": 133.74999985193742,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77936,
        "lng": 120.98611833333332,
        "ele": 134.25,
        "distanceKm": 6.314620930142932,
        "gradePct": 0.9050215514651574,
        "smoothedEle": 134.2499998519427,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779061,
        "lng": 120.985779,
        "ele": 134.75,
        "distanceKm": 6.362359884193139,
        "gradePct": 0.7118854248866481,
        "smoothedEle": 134.42689819214738,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778709,
        "lng": 120.985309,
        "ele": 133.75,
        "distanceKm": 6.423870045597508,
        "gradePct": -0.2851878290837543,
        "smoothedEle": 133.9990849390723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778387724203583,
        "lng": 120.98489881245231,
        "ele": 134,
        "distanceKm": 6.47856144872219,
        "gradePct": -0.48411945015360114,
        "smoothedEle": 133.83009420552324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778065,
        "lng": 120.98449,
        "ele": 133.5,
        "distanceKm": 6.53325342936914,
        "gradePct": -0.32644653266399476,
        "smoothedEle": 133.64364472886223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777761940129924,
        "lng": 120.9841041992591,
        "ele": 133.62526756308392,
        "distanceKm": 6.584757745838911,
        "gradePct": -0.12938250132273812,
        "smoothedEle": 133.67958801584652,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777465932542153,
        "lng": 120.98371123170557,
        "ele": 133.97488282422876,
        "distanceKm": 6.636307267467423,
        "gradePct": 0.25054680166576393,
        "smoothedEle": 133.89632271072207,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77715,
        "lng": 120.983343,
        "ele": 134,
        "distanceKm": 6.687456076621827,
        "gradePct": 0.42410367170248414,
        "smoothedEle": 134.1150365435328,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777464749601254,
        "lng": 120.98307611889379,
        "ele": 134.43406391644834,
        "distanceKm": 6.73162486896937,
        "gradePct": 0.3341106048011125,
        "smoothedEle": 134.21074664962018,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777779620838572,
        "lng": 120.98280941167225,
        "ele": 134.06815511101203,
        "distanceKm": 6.775793633403431,
        "gradePct": -0.053470689743307015,
        "smoothedEle": 134.01169689890273,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778094,
        "lng": 120.982542,
        "ele": 133.5,
        "distanceKm": 6.8199624307635,
        "gradePct": -0.9175611573461457,
        "smoothedEle": 133.2679139569072,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77842718597657,
        "lng": 120.98228376538174,
        "ele": 132.07145925064464,
        "distanceKm": 6.865264661877562,
        "gradePct": -1.944372027237456,
        "smoothedEle": 132.1147744479527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778760130123796,
        "lng": 120.98202516225092,
        "ele": 130.80131250335955,
        "distanceKm": 6.9105662953783575,
        "gradePct": -2.359859049490589,
        "smoothedEle": 131.06628165656662,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779094,
        "lng": 120.981768,
        "ele": 130.5,
        "distanceKm": 6.955868526564927,
        "gradePct": -1.8980061675822593,
        "smoothedEle": 130.4559409346532,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779422906336876,
        "lng": 120.98155432628886,
        "ele": 130.06042298456543,
        "distanceKm": 6.998329269891756,
        "gradePct": -1.3238475970511605,
        "smoothedEle": 130.02565636341944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779752,
        "lng": 120.981341,
        "ele": 129.5,
        "distanceKm": 7.040790125645353,
        "gradePct": -1.092350195726372,
        "smoothedEle": 129.56673662957076,
        "gradeBand": "descent"
      },
      {
        "lat": 24.780090387575207,
        "lng": 120.98113876055076,
        "ele": 129.16954338358423,
        "distanceKm": 7.0835997651110745,
        "gradePct": -1.2453277590444474,
        "smoothedEle": 128.92959303435111,
        "gradeBand": "descent"
      },
      {
        "lat": 24.780427,
        "lng": 120.980933,
        "ele": 128,
        "distanceKm": 7.126407356672674,
        "gradePct": -1.0532965179154454,
        "smoothedEle": 128.66889002880376,
        "gradeBand": "descent"
      },
      {
        "lat": 24.780090387575207,
        "lng": 120.98113876055076,
        "ele": 129.16954338358423,
        "distanceKm": 7.1692149482342735,
        "gradePct": -0.21409182735115528,
        "smoothedEle": 128.92959303435111,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779752,
        "lng": 120.981341,
        "ele": 129.5,
        "distanceKm": 7.212024587699995,
        "gradePct": 0.8102539340813478,
        "smoothedEle": 129.56673662957076,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779422906336876,
        "lng": 120.98155432628886,
        "ele": 130.06042298456543,
        "distanceKm": 7.254485443453592,
        "gradePct": 1.185767655484885,
        "smoothedEle": 130.02565636341944,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779094,
        "lng": 120.981768,
        "ele": 130.5,
        "distanceKm": 7.296946186780421,
        "gradePct": 1.1136188689974953,
        "smoothedEle": 130.4559409346532,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778760130123796,
        "lng": 120.98202516225092,
        "ele": 130.80131250335955,
        "distanceKm": 7.3422484179669905,
        "gradePct": 1.172883872955343,
        "smoothedEle": 131.06628165656662,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77842718597657,
        "lng": 120.98228376538174,
        "ele": 132.07145925064464,
        "distanceKm": 7.387550051467786,
        "gradePct": 1.7540511599415318,
        "smoothedEle": 132.1147744479527,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778094,
        "lng": 120.982542,
        "ele": 133.5,
        "distanceKm": 7.432852282581848,
        "gradePct": 2.329847228628304,
        "smoothedEle": 133.2695381212534,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777717061967657,
        "lng": 120.98286262439859,
        "ele": 134.18121331145937,
        "distanceKm": 7.485810312814096,
        "gradePct": 1.9974510691135163,
        "smoothedEle": 134.07195978498711,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777339415949992,
        "lng": 120.98318223520211,
        "ele": 134.39793266805262,
        "distanceKm": 7.538768318647689,
        "gradePct": 0.8941802927956278,
        "smoothedEle": 134.2533583701018,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776964,
        "lng": 120.983505,
        "ele": 134,
        "distanceKm": 7.591725312670904,
        "gradePct": -0.44269339867284585,
        "smoothedEle": 133.64952720595974,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776673,
        "lng": 120.983259,
        "ele": 132.5,
        "distanceKm": 7.63251564087783,
        "gradePct": -1.7760321622076622,
        "smoothedEle": 132.45590873035178,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776242,
        "lng": 120.983081,
        "ele": 130.5,
        "distanceKm": 7.683699260068203,
        "gradePct": -2.544618779736348,
        "smoothedEle": 131.19642382991927,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775857,
        "lng": 120.9832,
        "ele": 131.25,
        "distanceKm": 7.728163254248736,
        "gradePct": -2.548408750286209,
        "smoothedEle": 130.03486078645872,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775529,
        "lng": 120.983093,
        "ele": 128,
        "distanceKm": 7.766201457835302,
        "gradePct": -3.4201382076616493,
        "smoothedEle": 128.206857317884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775193,
        "lng": 120.982628,
        "ele": 124,
        "distanceKm": 7.826200364143584,
        "gradePct": -5.116391127117628,
        "smoothedEle": 124.9697475673775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775141,
        "lng": 120.982627,
        "ele": 124,
        "distanceKm": 7.831983389672636,
        "gradePct": -5.112849839644017,
        "smoothedEle": 124.73842654621542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775085,
        "lng": 120.982955,
        "ele": 124.75,
        "distanceKm": 7.865678845568578,
        "gradePct": -5.0532101254442985,
        "smoothedEle": 123.17876239100886,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774981,
        "lng": 120.982956,
        "ele": 124,
        "distanceKm": 7.877243574617474,
        "gradePct": -5.196364184357766,
        "smoothedEle": 122.41473987565615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774889,
        "lng": 120.982882,
        "ele": 122,
        "distanceKm": 7.889911215627383,
        "gradePct": -5.36797509055973,
        "smoothedEle": 121.55967410748725,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77481,
        "lng": 120.982742,
        "ele": 120,
        "distanceKm": 7.906553046148645,
        "gradePct": -6.289438356235218,
        "smoothedEle": 119.74033727775289,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774699,
        "lng": 120.982593,
        "ele": 117.25,
        "distanceKm": 7.926011677384711,
        "gradePct": -7.929670339334905,
        "smoothedEle": 117.05025740939125,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77437,
        "lng": 120.9824,
        "ele": 110.75,
        "distanceKm": 7.967460605509843,
        "gradePct": -11.988341199137267,
        "smoothedEle": 111.07270942306798,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77393718957377,
        "lng": 120.9821617042626,
        "ele": 103.90857715771675,
        "distanceKm": 8.021265524477904,
        "gradePct": -13.868735249002064,
        "smoothedEle": 103.83765928698739,
        "gradeBand": "descent"
      },
      {
        "lat": 24.773515,
        "lng": 120.9819,
        "ele": 96.75,
        "distanceKm": 8.075135735073747,
        "gradePct": -13.631506409164466,
        "smoothedEle": 96.40914222353744,
        "gradeBand": "descent"
      },
      {
        "lat": 24.773098,
        "lng": 120.981756,
        "ele": 89,
        "distanceKm": 8.123729901265826,
        "gradePct": -14.503098388408967,
        "smoothedEle": 88.9947318016182,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772548,
        "lng": 120.98158,
        "ele": 78,
        "distanceKm": 8.187416369294212,
        "gradePct": -16.021702610617808,
        "smoothedEle": 78.51368254520736,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7723,
        "lng": 120.981247,
        "ele": 72.75,
        "distanceKm": 8.23089973259968,
        "gradePct": -14.538449874224776,
        "smoothedEle": 73.27632395992084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772022,
        "lng": 120.98093733333333,
        "ele": 69.33333333333333,
        "distanceKm": 8.27486630313759,
        "gradePct": -11.245745699873877,
        "smoothedEle": 69.33333418374656,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771744,
        "lng": 120.98062766666666,
        "ele": 65.91666666666667,
        "distanceKm": 8.31883292345579,
        "gradePct": -8.813044627713726,
        "smoothedEle": 65.91666751708135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771466,
        "lng": 120.980318,
        "ele": 62.5,
        "distanceKm": 8.362799593554364,
        "gradePct": -8.35507089778586,
        "smoothedEle": 62.060424390104636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771096,
        "lng": 120.980299,
        "ele": 57.75,
        "distanceKm": 8.40398647092792,
        "gradePct": -8.892212772293293,
        "smoothedEle": 58.17817952743195,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770968,
        "lng": 120.98041,
        "ele": 56.5,
        "distanceKm": 8.422102051962971,
        "gradePct": -9.172738392232665,
        "smoothedEle": 56.457199329102124,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770862,
        "lng": 120.980447,
        "ele": 55.5,
        "distanceKm": 8.434466558430683,
        "gradePct": -9.320251900826568,
        "smoothedEle": 55.22521563030111,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770748,
        "lng": 120.980436,
        "ele": 54,
        "distanceKm": 8.447191356410405,
        "gradePct": -8.967669023251585,
        "smoothedEle": 54.461727751517806,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770633,
        "lng": 120.980464,
        "ele": 53,
        "distanceKm": 8.46028755414673,
        "gradePct": -8.70034805302261,
        "smoothedEle": 53.580403113675885,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770426,
        "lng": 120.98067,
        "ele": 51.75,
        "distanceKm": 8.491309870175181,
        "gradePct": -8.002672633791292,
        "smoothedEle": 51.37039398600547,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770195,
        "lng": 120.98079,
        "ele": 49.75,
        "distanceKm": 8.519709960752028,
        "gradePct": -7.04888575853894,
        "smoothedEle": 49.63556223560281,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770098,
        "lng": 120.980783,
        "ele": 48.75,
        "distanceKm": 8.530519013888874,
        "gradePct": -6.464430597452692,
        "smoothedEle": 49.154113350359495,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770051,
        "lng": 120.980747,
        "ele": 48,
        "distanceKm": 8.536884868575685,
        "gradePct": -6.164723221996931,
        "smoothedEle": 48.9153937996041,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769991,
        "lng": 120.980584,
        "ele": 47,
        "distanceKm": 8.554643050424199,
        "gradePct": -5.886599646340052,
        "smoothedEle": 48.073657246212356,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77014,
        "lng": 120.980467,
        "ele": 48,
        "distanceKm": 8.574991142680977,
        "gradePct": -5.188792545177226,
        "smoothedEle": 47.344136716436964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770158,
        "lng": 120.980412,
        "ele": 48,
        "distanceKm": 8.580893895593839,
        "gradePct": -4.939824063335681,
        "smoothedEle": 47.1725970130146,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770097,
        "lng": 120.980149,
        "ele": 46.25,
        "distanceKm": 8.608300235646277,
        "gradePct": -3.672273421059983,
        "smoothedEle": 46.66025678100977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770182,
        "lng": 120.979804,
        "ele": 45.75,
        "distanceKm": 8.64439258185897,
        "gradePct": -2.5722494042765853,
        "smoothedEle": 45.98727932102911,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770384,
        "lng": 120.979466,
        "ele": 46,
        "distanceKm": 8.685247205265533,
        "gradePct": -1.5982034122519393,
        "smoothedEle": 45.4930118590592,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77038621928098,
        "lng": 120.97907055195822,
        "ele": 44.55823346943332,
        "distanceKm": 8.725174175268258,
        "gradePct": -1.6779713431838688,
        "smoothedEle": 44.667654159500366,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77036,
        "lng": 120.978687,
        "ele": 43.5,
        "distanceKm": 8.764008895681085,
        "gradePct": -1.3732845441585488,
        "smoothedEle": 44.37667266158447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770705,
        "lng": 120.978751,
        "ele": 45.25,
        "distanceKm": 8.80291159588487,
        "gradePct": -0.8056551224119375,
        "smoothedEle": 44.32220403899227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770768,
        "lng": 120.978726,
        "ele": 45.5,
        "distanceKm": 8.81035774888881,
        "gradePct": -0.6517306018816834,
        "smoothedEle": 44.32220403899227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770812,
        "lng": 120.978649,
        "ele": 45,
        "distanceKm": 8.819543399632364,
        "gradePct": -0.46184773408247703,
        "smoothedEle": 44.32220403899227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770831,
        "lng": 120.978535,
        "ele": 44.25,
        "distanceKm": 8.831245603403877,
        "gradePct": -0.34828748748584226,
        "smoothedEle": 44.27387456509034,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7708,
        "lng": 120.978408,
        "ele": 43.5,
        "distanceKm": 8.84452330018883,
        "gradePct": -0.5751805399921628,
        "smoothedEle": 43.94749414513839,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770549,
        "lng": 120.97784,
        "ele": 42.5,
        "distanceKm": 8.908302011838538,
        "gradePct": -1.410697942823793,
        "smoothedEle": 42.91150609616848,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770349,
        "lng": 120.977528,
        "ele": 43.25,
        "distanceKm": 8.946862103994002,
        "gradePct": -0.7301367610373813,
        "smoothedEle": 43.17936707780021,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77023,
        "lng": 120.977305,
        "ele": 43.5,
        "distanceKm": 8.972977637770187,
        "gradePct": 0.2023838518041437,
        "smoothedEle": 43.68768061300124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769959,
        "lng": 120.977143,
        "ele": 44.5,
        "distanceKm": 9.007264340330327,
        "gradePct": 0.8458568480910915,
        "smoothedEle": 43.774218337751485,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770118,
        "lng": 120.97692,
        "ele": 43.5,
        "distanceKm": 9.03589150714552,
        "gradePct": 0.6061303595914489,
        "smoothedEle": 43.70928924709292,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770142,
        "lng": 120.976766,
        "ele": 43.25,
        "distanceKm": 9.051667427318545,
        "gradePct": -0.08479219694366011,
        "smoothedEle": 43.18810583863119,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770158,
        "lng": 120.976066,
        "ele": 40.75,
        "distanceKm": 9.122365089290843,
        "gradePct": -2.696815623244947,
        "smoothedEle": 41.04315280411202,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770154,
        "lng": 120.975655,
        "ele": 40.5,
        "distanceKm": 9.163863952303444,
        "gradePct": -1.9359697421797148,
        "smoothedEle": 40.88209594877022,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770138,
        "lng": 120.975277,
        "ele": 41.5,
        "distanceKm": 9.202070046796253,
        "gradePct": -0.10606377391254578,
        "smoothedEle": 41.55283659200037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770092,
        "lng": 120.974607,
        "ele": 43.75,
        "distanceKm": 9.269909502837468,
        "gradePct": 2.953176896901706,
        "smoothedEle": 43.941407652374934,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770031,
        "lng": 120.974059,
        "ele": 46.25,
        "distanceKm": 9.325652401084566,
        "gradePct": 4.692595144159685,
        "smoothedEle": 47.07574689898128,
        "gradeBand": "hard"
      },
      {
        "lat": 24.770079,
        "lng": 120.973647,
        "ele": 51,
        "distanceKm": 9.367590899152251,
        "gradePct": 7.040451808149317,
        "smoothedEle": 50.9002233451105,
        "gradeBand": "steep"
      },
      {
        "lat": 24.770313,
        "lng": 120.9734,
        "ele": 55,
        "distanceKm": 9.403631698352106,
        "gradePct": 8.75676078947507,
        "smoothedEle": 54.594316726331485,
        "gradeBand": "steep"
      },
      {
        "lat": 24.770695,
        "lng": 120.973239,
        "ele": 58.5,
        "distanceKm": 9.449112336975118,
        "gradePct": 7.711071008592539,
        "smoothedEle": 56.92618808950813,
        "gradeBand": "steep"
      },
      {
        "lat": 24.770664,
        "lng": 120.973275,
        "ele": 54.5,
        "distanceKm": 9.454121655640947,
        "gradePct": 7.486501411880118,
        "smoothedEle": 57.15843078058197,
        "gradeBand": "steep"
      },
      {
        "lat": 24.77090808607405,
        "lng": 120.97298214993631,
        "ele": 59.63621315725196,
        "distanceKm": 9.494257324561886,
        "gradePct": 4.644271511158368,
        "smoothedEle": 58.277737952802454,
        "gradeBand": "hard"
      },
      {
        "lat": 24.771129,
        "lng": 120.972667,
        "ele": 59.25,
        "distanceKm": 9.534454986171708,
        "gradePct": 2.8129053676016254,
        "smoothedEle": 58.98758561479879,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771245,
        "lng": 120.972119,
        "ele": 57.5,
        "distanceKm": 9.591266799336871,
        "gradePct": -0.4104843442487451,
        "smoothedEle": 57.78385357005782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771189361921838,
        "lng": 120.97167833206915,
        "ele": 57.158524450121256,
        "distanceKm": 9.63618639034102,
        "gradePct": -1.7419881799838697,
        "smoothedEle": 57.20891234125981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771138,
        "lng": 120.971237,
        "ele": 57,
        "distanceKm": 9.681109493906337,
        "gradePct": -1.0623980393158627,
        "smoothedEle": 56.936669116680676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77110273012951,
        "lng": 120.97085169664659,
        "ele": 56.64865633668758,
        "distanceKm": 9.720208405826858,
        "gradePct": -0.7791477824350707,
        "smoothedEle": 56.634272254574675,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771082,
        "lng": 120.970465,
        "ele": 56.25,
        "distanceKm": 9.759318798477757,
        "gradePct": -1.1286162347009392,
        "smoothedEle": 55.9401089671225,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771127,
        "lng": 120.970047,
        "ele": 54.75,
        "distanceKm": 9.801817308888664,
        "gradePct": -2.0841441449820053,
        "smoothedEle": 54.69236761784555,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771198,
        "lng": 120.969617,
        "ele": 53,
        "distanceKm": 9.845943759851787,
        "gradePct": -3.208950003885374,
        "smoothedEle": 52.96855010541452,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771278,
        "lng": 120.969092,
        "ele": 50.75,
        "distanceKm": 9.89969100885995,
        "gradePct": -4.3106051807281185,
        "smoothedEle": 50.44418985965868,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771433,
        "lng": 120.968636,
        "ele": 47.5,
        "distanceKm": 9.948850787998444,
        "gradePct": -5.281229105701475,
        "smoothedEle": 47.55078589471449,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771737,
        "lng": 120.968059,
        "ele": 42.75,
        "distanceKm": 10.016203727186443,
        "gradePct": -5.94693080387497,
        "smoothedEle": 43.525367694285066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771962,
        "lng": 120.967787,
        "ele": 42.75,
        "distanceKm": 10.053353522816963,
        "gradePct": -4.749963556371443,
        "smoothedEle": 42.53171172626446,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77221,
        "lng": 120.967476,
        "ele": 42,
        "distanceKm": 10.095143316487489,
        "gradePct": -2.9954939500074182,
        "smoothedEle": 41.78857101210519,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772184,
        "lng": 120.967054,
        "ele": 40.5,
        "distanceKm": 10.137847681603445,
        "gradePct": -2.5737222022436037,
        "smoothedEle": 40.37272859322679,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772226,
        "lng": 120.9669,
        "ele": 39.5,
        "distanceKm": 10.154082225634571,
        "gradePct": -2.592474697004763,
        "smoothedEle": 39.92627863237081,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772268,
        "lng": 120.966836,
        "ele": 39,
        "distanceKm": 10.162054889504676,
        "gradePct": -2.669946442907284,
        "smoothedEle": 39.70703037594295,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7725195,
        "lng": 120.9665125,
        "ele": 39.25000000000001,
        "distanceKm": 10.20505308841427,
        "gradePct": -2.1949399435407466,
        "smoothedEle": 39.26507740859904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772771,
        "lng": 120.966189,
        "ele": 39.5,
        "distanceKm": 10.248051237066052,
        "gradePct": -0.5617528233765532,
        "smoothedEle": 39.530377994628516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.773277,
        "lng": 120.966376,
        "ele": 40,
        "distanceKm": 10.307399113540537,
        "gradePct": 0.24418484762949874,
        "smoothedEle": 39.52373734086252,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773812,
        "lng": 120.966567,
        "ele": 38,
        "distanceKm": 10.36993587850817,
        "gradePct": -1.3767218370960967,
        "smoothedEle": 38.15120740392499,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774252286410864,
        "lng": 120.96679549231847,
        "ele": 37.02603547858131,
        "distanceKm": 10.424056394916049,
        "gradePct": -2.029318249482806,
        "smoothedEle": 37.12883226629027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774691,
        "lng": 120.967028,
        "ele": 36.5,
        "distanceKm": 10.478193268339473,
        "gradePct": -0.8722882231177738,
        "smoothedEle": 37.12293120017418,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775056,
        "lng": 120.967156,
        "ele": 38.25,
        "distanceKm": 10.520787206455536,
        "gradePct": 0.9364965606807407,
        "smoothedEle": 38.12708612760503,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775536987694327,
        "lng": 120.96720982919813,
        "ele": 39.8909165369921,
        "distanceKm": 10.574546077118766,
        "gradePct": 2.759328858057901,
        "smoothedEle": 39.882657611972625,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776021,
        "lng": 120.967233,
        "ele": 41.5,
        "distanceKm": 10.628416680775803,
        "gradePct": 2.692388577030722,
        "smoothedEle": 41.0686259124668,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77640262856941,
        "lng": 120.96730044274754,
        "ele": 41.28869956668156,
        "distanceKm": 10.671394702621663,
        "gradePct": 1.4158425003057977,
        "smoothedEle": 41.19558754853923,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776779,
        "lng": 120.967401,
        "ele": 40.75,
        "distanceKm": 10.71445912253563,
        "gradePct": 0.1428415749073016,
        "smoothedEle": 40.904190039166316,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777232142486877,
        "lng": 120.96733207642914,
        "ele": 40.753395481048635,
        "distanceKm": 10.765324549329474,
        "gradePct": -0.4259248665077721,
        "smoothedEle": 40.751730805223566,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777683,
        "lng": 120.967235,
        "ele": 40.75,
        "distanceKm": 10.816406693367497,
        "gradePct": -0.2941099163760665,
        "smoothedEle": 40.60424265762399,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778316,
        "lng": 120.967171,
        "ele": 39.75,
        "distanceKm": 10.887089125239438,
        "gradePct": -0.7432295714292989,
        "smoothedEle": 39.94566093911397,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778858,
        "lng": 120.967246,
        "ele": 40,
        "distanceKm": 10.947830646460503,
        "gradePct": -0.6926546439492351,
        "smoothedEle": 39.61879614895985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779214462103276,
        "lng": 120.96745790844034,
        "ele": 38.791331603295205,
        "distanceKm": 10.99287252006753,
        "gradePct": -1.1458204128765783,
        "smoothedEle": 38.768718682416875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779568,
        "lng": 120.967676,
        "ele": 37.5,
        "distanceKm": 11.037930215156916,
        "gradePct": -1.8094570087860613,
        "smoothedEle": 37.86261575122054,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779764,
        "lng": 120.967754,
        "ele": 37.25,
        "distanceKm": 11.061103447165413,
        "gradePct": -1.6393673792417462,
        "smoothedEle": 37.72893055786309,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779815,
        "lng": 120.967758,
        "ele": 37.5,
        "distanceKm": 11.066788756314805,
        "gradePct": -1.4027961214066216,
        "smoothedEle": 37.85820270020416,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779879,
        "lng": 120.96775,
        "ele": 37.5,
        "distanceKm": 11.073950925411056,
        "gradePct": -1.0348536608328696,
        "smoothedEle": 38.09097319583231,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779965,
        "lng": 120.96771,
        "ele": 38,
        "distanceKm": 11.084331403213538,
        "gradePct": -0.5015768709040191,
        "smoothedEle": 38.42833872441296,
        "gradeBand": "descent"
      },
      {
        "lat": 24.780268,
        "lng": 120.967345,
        "ele": 40.75,
        "distanceKm": 11.134261533660512,
        "gradePct": 2.090950247836155,
        "smoothedEle": 40.02734258818142,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.780825,
        "lng": 120.966969,
        "ele": 40.5,
        "distanceKm": 11.206904169288944,
        "gradePct": 0.8227158155101749,
        "smoothedEle": 39.973943501906675,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.781201,
        "lng": 120.966834,
        "ele": 38.5,
        "distanceKm": 11.250878848933167,
        "gradePct": -1.515896493369345,
        "smoothedEle": 38.49923082420381,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78173,
        "lng": 120.9669,
        "ele": 35.75,
        "distanceKm": 11.31007722134379,
        "gradePct": -3.9870745756815746,
        "smoothedEle": 35.8804590528582,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78211,
        "lng": 120.966953,
        "ele": 34.25,
        "distanceKm": 11.352668777811017,
        "gradePct": -4.197075316026933,
        "smoothedEle": 34.22297402011983,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782452413134557,
        "lng": 120.96710367077351,
        "ele": 32.69883310617202,
        "distanceKm": 11.393669413113807,
        "gradePct": -3.655928949843697,
        "smoothedEle": 32.950366021682754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782793,
        "lng": 120.96726,
        "ele": 32,
        "distanceKm": 11.434697853510984,
        "gradePct": -2.606779105425931,
        "smoothedEle": 32.31554803823371,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78313119349081,
        "lng": 120.96739721155714,
        "ele": 32.36543235503746,
        "distanceKm": 11.474773412853704,
        "gradePct": -0.9410868397955701,
        "smoothedEle": 32.59578719308962,
        "gradeBand": "descent"
      },
      {
        "lat": 24.783464,
        "lng": 120.96755,
        "ele": 33.5,
        "distanceKm": 11.514865749008443,
        "gradePct": 1.0430516188326955,
        "smoothedEle": 33.66545452325137,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.783849969893417,
        "lng": 120.9675567371778,
        "ele": 35.27060475610431,
        "distanceKm": 11.557789091224718,
        "gradePct": 2.6391008120216335,
        "smoothedEle": 35.11612055639259,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784236,
        "lng": 120.967551,
        "ele": 36.5,
        "distanceKm": 11.600717647244075,
        "gradePct": 2.861201364383955,
        "smoothedEle": 36.149183191039675,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784585,
        "lng": 120.967528,
        "ele": 36.5,
        "distanceKm": 11.639594131229575,
        "gradePct": 2.104939137743742,
        "smoothedEle": 36.606130635110055,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785102,
        "lng": 120.967554,
        "ele": 37,
        "distanceKm": 11.697141877185556,
        "gradePct": 0.6544396355142249,
        "smoothedEle": 36.71757300843565,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785576,
        "lng": 120.967608,
        "ele": 36.25,
        "distanceKm": 11.75012951546441,
        "gradePct": 0.11429630760502404,
        "smoothedEle": 36.740828927250234,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786143,
        "lng": 120.96772,
        "ele": 38,
        "distanceKm": 11.814182935944874,
        "gradePct": 1.290694255535219,
        "smoothedEle": 38.015746470289436,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786493159057496,
        "lng": 120.96770959531509,
        "ele": 39.08199751972875,
        "distanceKm": 11.853133065670088,
        "gradePct": 2.230973737668024,
        "smoothedEle": 39.03158524670537,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786842,
        "lng": 120.967667,
        "ele": 40,
        "distanceKm": 11.892160078324927,
        "gradePct": 2.7208342390288487,
        "smoothedEle": 40.29823834888043,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787368,
        "lng": 120.967854,
        "ele": 43,
        "distanceKm": 11.95361973719543,
        "gradePct": 4.247666419457134,
        "smoothedEle": 43.295046982159825,
        "gradeBand": "hard"
      },
      {
        "lat": 24.78775257930317,
        "lng": 120.96796677137462,
        "ele": 46.1325381837312,
        "distanceKm": 11.997872477440575,
        "gradePct": 5.83029515247459,
        "smoothedEle": 46.40707339729848,
        "gradeBand": "hard"
      },
      {
        "lat": 24.788138,
        "lng": 120.968076,
        "ele": 50.25,
        "distanceKm": 12.04212515717959,
        "gradePct": 6.266300693684827,
        "smoothedEle": 49.000865283647045,
        "gradeBand": "steep"
      },
      {
        "lat": 24.788519924368067,
        "lng": 120.96801963980036,
        "ele": 49.89499376095557,
        "distanceKm": 12.084972694757251,
        "gradePct": 3.3230835742453855,
        "smoothedEle": 48.822993613124375,
        "gradeBand": "hard"
      },
      {
        "lat": 24.788891,
        "lng": 120.967887,
        "ele": 45.75,
        "distanceKm": 12.128352703549155,
        "gradePct": -1.8650373976115513,
        "smoothedEle": 46.32858008336196,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789461,
        "lng": 120.967899,
        "ele": 42.5,
        "distanceKm": 12.191745474739763,
        "gradePct": -5.560228844463146,
        "smoothedEle": 42.87332007989863,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789808,
        "lng": 120.968034,
        "ele": 41.75,
        "distanceKm": 12.232666171205375,
        "gradePct": -4.260488571020653,
        "smoothedEle": 41.83298343946721,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790384,
        "lng": 120.968366,
        "ele": 40.75,
        "distanceKm": 12.304953381448028,
        "gradePct": -2.1160082455564297,
        "smoothedEle": 40.42152406729979,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790785964822327,
        "lng": 120.96844068777155,
        "ele": 39.04148563034959,
        "distanceKm": 12.350281335396406,
        "gradePct": -2.399835819031041,
        "smoothedEle": 39.08919896746922,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791196,
        "lng": 120.968443,
        "ele": 37.5,
        "distanceKm": 12.395875827344778,
        "gradePct": -2.864162191910562,
        "smoothedEle": 37.73460759800573,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79175591604288,
        "lng": 120.96842670535783,
        "ele": 36.52053578257795,
        "distanceKm": 12.458157461920928,
        "gradePct": -2.3894825991039226,
        "smoothedEle": 36.4657202745608,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792316,
        "lng": 120.968413,
        "ele": 35.25,
        "distanceKm": 12.52045140788242,
        "gradePct": -2.27889721091237,
        "smoothedEle": 34.95502277953888,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79283647213984,
        "lng": 120.96839387817626,
        "ele": 32.71038278494092,
        "distanceKm": 12.578357530768157,
        "gradePct": -3.2487981743596253,
        "smoothedEle": 32.727047956963524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793357,
        "lng": 120.968377,
        "ele": 30.25,
        "distanceKm": 12.636262739178264,
        "gradePct": -3.5147925260366133,
        "smoothedEle": 30.83187924875535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793871006536257,
        "lng": 120.9683748262297,
        "ele": 30.548907095562516,
        "distanceKm": 12.693418158444866,
        "gradePct": -1.7061786448925094,
        "smoothedEle": 30.527952852868864,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794385,
        "lng": 120.96837,
        "ele": 30.75,
        "distanceKm": 12.750573779261105,
        "gradePct": 0.013359735554701095,
        "smoothedEle": 30.76913941423295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794621,
        "lng": 120.96842,
        "ele": 30.75,
        "distanceKm": 12.777296789408412,
        "gradePct": 0.3772754671446399,
        "smoothedEle": 30.99095439202691,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794771,
        "lng": 120.968557,
        "ele": 31.25,
        "distanceKm": 12.798963602122852,
        "gradePct": 0.6833523954866567,
        "smoothedEle": 31.234706035064352,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7950515,
        "lng": 120.968839,
        "ele": 31.875,
        "distanceKm": 12.84119112107381,
        "gradePct": 1.1454538713254299,
        "smoothedEle": 31.87500013562263,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795332,
        "lng": 120.969121,
        "ele": 32.5,
        "distanceKm": 12.883418596625527,
        "gradePct": 1.1269309092058575,
        "smoothedEle": 32.1867556324253,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795648,
        "lng": 120.969429,
        "ele": 32,
        "distanceKm": 12.930336505156006,
        "gradePct": 0.30910245298956807,
        "smoothedEle": 32.019514502249194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79593302028735,
        "lng": 120.96970230712486,
        "ele": 31.609561250201313,
        "distanceKm": 12.97235520771411,
        "gradePct": -0.44441186436181984,
        "smoothedEle": 31.660665375942322,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79621801511013,
        "lng": 120.96997564714646,
        "ele": 31.395400454014755,
        "distanceKm": 13.014373913481801,
        "gradePct": -0.6610794194473245,
        "smoothedEle": 31.415334504701708,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796503,
        "lng": 120.970249,
        "ele": 31.25,
        "distanceKm": 13.056392595222146,
        "gradePct": -0.6222117747322415,
        "smoothedEle": 31.17477788534035,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796776,
        "lng": 120.969818,
        "ele": 30.75,
        "distanceKm": 13.109442729359632,
        "gradePct": -0.3596214731603395,
        "smoothedEle": 31.08450429664192,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797139,
        "lng": 120.96931,
        "ele": 32,
        "distanceKm": 13.17470198824193,
        "gradePct": 0.7106592580329537,
        "smoothedEle": 31.854280678989962,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797272,
        "lng": 120.969158,
        "ele": 32.25,
        "distanceKm": 13.196012298134226,
        "gradePct": 0.9640519114327971,
        "smoothedEle": 32.071410310975615,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797571,
        "lng": 120.969026,
        "ele": 32,
        "distanceKm": 13.231830237022423,
        "gradePct": 0.5382517025480686,
        "smoothedEle": 31.88683154883016,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797995722386208,
        "lng": 120.96872893540274,
        "ele": 31.162098687938798,
        "distanceKm": 13.287772838021246,
        "gradePct": -0.7783660388148618,
        "smoothedEle": 31.2090928443714,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7984160093164,
        "lng": 120.96842421590165,
        "ele": 30.537454107490312,
        "distanceKm": 13.343720713014713,
        "gradePct": -1.0209254903567138,
        "smoothedEle": 30.721854197270527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798836,
        "lng": 120.968119,
        "ele": 30.75,
        "distanceKm": 13.399668594656104,
        "gradePct": -0.5642118131263578,
        "smoothedEle": 30.5412833098001,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79908056291223,
        "lng": 120.96852469420597,
        "ele": 30.11311741606547,
        "distanceKm": 13.448826819353554,
        "gradePct": -0.8404316444206396,
        "smoothedEle": 29.86494267682826,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799327,
        "lng": 120.968929,
        "ele": 28.5,
        "distanceKm": 13.497984153929988,
        "gradePct": -1.8704208004361251,
        "smoothedEle": 28.67629901469506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799668500000003,
        "lng": 120.968662,
        "ele": 27.625,
        "distanceKm": 13.544549426918639,
        "gradePct": -2.2987931248273847,
        "smoothedEle": 27.624999812047996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80001,
        "lng": 120.968395,
        "ele": 26.75,
        "distanceKm": 13.59111465694683,
        "gradePct": -1.5689319031175712,
        "smoothedEle": 27.273474247398223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8002527285505,
        "lng": 120.96876958607702,
        "ele": 27.832083565832143,
        "distanceKm": 13.63757033968354,
        "gradePct": 0.06138406540098651,
        "smoothedEle": 27.843949985721377,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800497394881106,
        "lng": 120.96914266843748,
        "ele": 28.958539968250623,
        "distanceKm": 13.684028356520528,
        "gradePct": 1.341106283278241,
        "smoothedEle": 28.668075719192128,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800743,
        "lng": 120.969515,
        "ele": 29,
        "distanceKm": 13.730486190082269,
        "gradePct": 0.6012128092287007,
        "smoothedEle": 28.35816944481289,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800954,
        "lng": 120.969883,
        "ele": 26.75,
        "distanceKm": 13.774421189585844,
        "gradePct": -1.0480513086951149,
        "smoothedEle": 27.449601434320414,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80159,
        "lng": 120.970039,
        "ele": 27.25,
        "distanceKm": 13.846873118091585,
        "gradePct": -0.9070310325622085,
        "smoothedEle": 27.11225964252869,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 13.846873118091585,
      "elevationGainM": 176.6140286465649,
      "elevationLossM": 176.70957963590985,
      "minimumElevationM": 26.75,
      "maximumElevationM": 134.75,
      "maximumSustainedGradePct": 8.75676078947507
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 165,
        "startDistanceKm": 0,
        "endDistanceKm": 7.538768318647689,
        "distanceKm": 7.538768318647689,
        "gainM": 142.51787041569725,
        "averageGradePct": 1.8904662458344683,
        "maximumGradePct": 8.110534216126752
      }
    ]
  },
  "hsinchu-city-nanliao-baoshan": {
    "routeId": "hsinchu-city-nanliao-baoshan",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-28T03:58:33.498Z",
      "reviewStatus": "approved",
      "reviewedAt": "2026-07-28T04:38:44.415Z",
      "reviewerNote": "以 OpenStreetMap 疊圖逐段檢查新竹漁港南側經東大路、站前道路、光復路、水仙路、山湖一路水庫北側、寶山市區與明湖路返回；避開寶山水庫行人環湖步道，BRouter 訊息無 footway、path、steps、私人或未鋪面路段。"
    },
    "waypoints": [
      {
        "name": "新竹漁港南側",
        "lat": 24.842868,
        "lng": 120.923192,
        "role": "start"
      },
      {
        "name": "信義街站前道路",
        "lat": 24.8016,
        "lng": 120.97,
        "role": "via"
      },
      {
        "name": "光復路清華大學",
        "lat": 24.795905,
        "lng": 120.995829,
        "role": "via"
      },
      {
        "name": "水仙路柯仔湖",
        "lat": 24.75,
        "lng": 121.032,
        "role": "via"
      },
      {
        "name": "山湖一路水庫北側",
        "lat": 24.752,
        "lng": 121.038,
        "role": "via"
      },
      {
        "name": "寶山市區",
        "lat": 24.766924,
        "lng": 121.022746,
        "role": "via"
      },
      {
        "name": "青草湖明湖路",
        "lat": 24.770683,
        "lng": 120.973294,
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
        "gradePct": -1.8120726817248647,
        "smoothedEle": 6.4749997584144685,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84139575,
        "lng": 120.92494425,
        "ele": 5.75,
        "distanceKm": 0.24465267856687986,
        "gradePct": -2.0716326209953326,
        "smoothedEle": 5.750000089985553,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841151500000002,
        "lng": 120.9253715,
        "ele": 5.5,
        "distanceKm": 0.2956067095801667,
        "gradePct": -0.9478517848989396,
        "smoothedEle": 5.500000089985302,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84090725,
        "lng": 120.92579875,
        "ele": 5.25,
        "distanceKm": 0.3465608125816952,
        "gradePct": -0.4906379633926506,
        "smoothedEle": 5.25000008998426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840663,
        "lng": 120.926226,
        "ele": 5,
        "distanceKm": 0.39751498757063214,
        "gradePct": -0.6552027241238293,
        "smoothedEle": 4.83543463608083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840411,
        "lng": 120.926693,
        "ele": 4,
        "distanceKm": 0.4523404585340323,
        "gradePct": -0.977103986013988,
        "smoothedEle": 4.225872645182999,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8402685,
        "lng": 120.92703900000001,
        "ele": 4,
        "distanceKm": 0.4906818354423632,
        "gradePct": -0.8910294683838169,
        "smoothedEle": 4,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840126,
        "lng": 120.927385,
        "ele": 4,
        "distanceKm": 0.5290232489533611,
        "gradePct": -0.38922282266171504,
        "smoothedEle": 4.095895834355169,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839952,
        "lng": 120.927965,
        "ele": 4.5,
        "distanceKm": 0.5906649152112936,
        "gradePct": 0.3650477426173292,
        "smoothedEle": 4.3651474212845285,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8398925,
        "lng": 120.9283325,
        "ele": 4.375,
        "distanceKm": 0.6283341242348094,
        "gradePct": 0.2808277486949607,
        "smoothedEle": 4.375000010969478,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839833,
        "lng": 120.9287,
        "ele": 4.25,
        "distanceKm": 0.6660033508094897,
        "gradePct": 0.20223097202855472,
        "smoothedEle": 4.45965636445745,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8397775,
        "lng": 120.9291455,
        "ele": 4.874999999999999,
        "distanceKm": 0.7113794688681696,
        "gradePct": 0.5044345103830122,
        "smoothedEle": 4.874999937592769,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839722,
        "lng": 120.929591,
        "ele": 5.5,
        "distanceKm": 0.7567556068971634,
        "gradePct": 1.1664025170152021,
        "smoothedEle": 5.6052758617826655,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839658837915344,
        "lng": 120.93013907140036,
        "ele": 6.747318132201734,
        "distanceKm": 0.8125045977412368,
        "gradePct": 1.6157897118371998,
        "smoothedEle": 6.508897284043714,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839595148121177,
        "lng": 120.93068706813162,
        "ele": 6.917052398894457,
        "distanceKm": 0.8682535658007888,
        "gradePct": 1.050893243421728,
        "smoothedEle": 6.84253663976036,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839531,
        "lng": 120.931235,
        "ele": 6.75,
        "distanceKm": 0.9240025677969732,
        "gradePct": 0.34012100096928066,
        "smoothedEle": 6.917829878392577,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839470738810014,
        "lng": 120.93171622983564,
        "ele": 7.263413704158898,
        "distanceKm": 0.973022743736018,
        "gradePct": 0.5048502027481138,
        "smoothedEle": 7.3538279775871125,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839417869405008,
        "lng": 120.93219861491782,
        "ele": 8.13170685207945,
        "distanceKm": 1.0220530970215007,
        "gradePct": 1.2165097916224774,
        "smoothedEle": 8.131706762464274,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839365,
        "lng": 120.932681,
        "ele": 9,
        "distanceKm": 1.0710834709486698,
        "gradePct": 1.4421375298447159,
        "smoothedEle": 8.77871711464444,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839305,
        "lng": 120.933101,
        "ele": 9,
        "distanceKm": 1.1139868929803096,
        "gradePct": 0.9962655766620445,
        "smoothedEle": 9,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839245,
        "lng": 120.933521,
        "ele": 9,
        "distanceKm": 1.1568903353076845,
        "gradePct": 0.401211018793013,
        "smoothedEle": 8.992633912445877,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839156310025988,
        "lng": 120.93392721719948,
        "ele": 8.97452926296486,
        "distanceKm": 1.1990507247462634,
        "gradePct": -0.005921135146431661,
        "smoothedEle": 8.917042622836593,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839018,
        "lng": 120.934317,
        "ele": 8.75,
        "distanceKm": 1.2412829960983147,
        "gradePct": -0.4637959576333635,
        "smoothedEle": 8.53151757725926,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838873537639564,
        "lng": 120.93467927780492,
        "ele": 7.806641573113881,
        "distanceKm": 1.281213537375531,
        "gradePct": -1.1763792797016315,
        "smoothedEle": 7.772644451808552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838718,
        "lng": 120.935036,
        "ele": 6.75,
        "distanceKm": 1.3211492204296635,
        "gradePct": -1.605666001315964,
        "smoothedEle": 7.1096464449806565,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8384840362821,
        "lng": 120.93544910456765,
        "ele": 6.916387735441875,
        "distanceKm": 1.370287090309528,
        "gradePct": -1.1326984744271618,
        "smoothedEle": 6.8476012399906265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838248777211575,
        "lng": 120.93586132842574,
        "ele": 6.8122908015814065,
        "distanceKm": 1.4194261836193554,
        "gradePct": -0.3259608528877231,
        "smoothedEle": 6.812290836414834,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83801351814105,
        "lng": 120.93627355228384,
        "ele": 6.708193867720937,
        "distanceKm": 1.4685653438541668,
        "gradePct": -0.14858916408003597,
        "smoothedEle": 6.708193902553444,
        "gradeBand": "descent"
      },
      {
        "lat": 24.837778259070525,
        "lng": 120.93668577614191,
        "ele": 6.604096933860469,
        "distanceKm": 1.517704571012191,
        "gradePct": -0.2094309852960279,
        "smoothedEle": 6.604096968693948,
        "gradeBand": "descent"
      },
      {
        "lat": 24.837543,
        "lng": 120.937098,
        "ele": 6.5,
        "distanceKm": 1.5668438650952983,
        "gradePct": -0.22289510324632358,
        "smoothedEle": 6.488945598716175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.837316571428573,
        "lng": 120.93749671428571,
        "ele": 6.357142857142858,
        "distanceKm": 1.6143065985184502,
        "gradePct": -0.25415235923631996,
        "smoothedEle": 6.357142901705894,
        "gradeBand": "descent"
      },
      {
        "lat": 24.837090142857143,
        "lng": 120.93789542857144,
        "ele": 6.2142857142857135,
        "distanceKm": 1.6617693943298517,
        "gradePct": -0.286551184087443,
        "smoothedEle": 6.214285758846357,
        "gradeBand": "descent"
      },
      {
        "lat": 24.836863714285716,
        "lng": 120.93829414285715,
        "ele": 6.071428571428571,
        "distanceKm": 1.7092322525261523,
        "gradePct": -0.2998056040852821,
        "smoothedEle": 6.0714286159900235,
        "gradeBand": "descent"
      },
      {
        "lat": 24.836637285714286,
        "lng": 120.93869285714285,
        "ele": 5.928571428571429,
        "distanceKm": 1.7566951731084859,
        "gradePct": -0.3009870637612157,
        "smoothedEle": 5.928571473132224,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83641085714286,
        "lng": 120.93909157142856,
        "ele": 5.7857142857142865,
        "distanceKm": 1.8041581560759328,
        "gradePct": -0.30098666814120517,
        "smoothedEle": 5.785714330275891,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83618442857143,
        "lng": 120.93949028571429,
        "ele": 5.642857142857142,
        "distanceKm": 1.8516212014296272,
        "gradePct": -0.30098627252346133,
        "smoothedEle": 5.642857187416354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835958,
        "lng": 120.939889,
        "ele": 5.5,
        "distanceKm": 1.8990843091662182,
        "gradePct": -0.09136318422724968,
        "smoothedEle": 5.7096227372444455,
        "gradeBand": "descent"
      },
      {
        "lat": 24.835745091928064,
        "lng": 120.94033790934743,
        "ele": 6.204061084445659,
        "distanceKm": 1.950197532314115,
        "gradePct": 0.5055001586686889,
        "smoothedEle": 6.152642391444098,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835532360787028,
        "lng": 120.94078691991169,
        "ele": 6.697764020863724,
        "distanceKm": 2.0013107691517535,
        "gradePct": 0.7913135023436219,
        "smoothedEle": 6.520233898239473,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835320240524684,
        "lng": 120.94123627994112,
        "ele": 6.465176013909149,
        "distanceKm": 2.052423957881909,
        "gradePct": 0.2965218986413303,
        "smoothedEle": 6.46517609406945,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835108120262344,
        "lng": 120.94168563997056,
        "ele": 6.2325880069545745,
        "distanceKm": 2.1035372155410714,
        "gradePct": -0.28524754069119385,
        "smoothedEle": 6.232588087114688,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834896,
        "lng": 120.942135,
        "ele": 6,
        "distanceKm": 2.1546505421290787,
        "gradePct": -0.3610237794732602,
        "smoothedEle": 6.0940203680898755,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834718000000002,
        "lng": 120.9424855,
        "ele": 6.125,
        "distanceKm": 2.1951815846695544,
        "gradePct": -0.1456099436331034,
        "smoothedEle": 6.124999972264542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83454,
        "lng": 120.942836,
        "ele": 6.25,
        "distanceKm": 2.2357126715867635,
        "gradePct": -0.1213590289689711,
        "smoothedEle": 6.024001717441174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83435700050301,
        "lng": 120.94323277805793,
        "ele": 5.564418720897052,
        "distanceKm": 2.280626508169595,
        "gradePct": -0.5160825181573068,
        "smoothedEle": 5.59779238846772,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834173,
        "lng": 120.943629,
        "ele": 5,
        "distanceKm": 2.3255409702326753,
        "gradePct": -0.8938917444528035,
        "smoothedEle": 5.15545654431141,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834007500000002,
        "lng": 120.94406,
        "ele": 5,
        "distanceKm": 2.3727673729585934,
        "gradePct": -0.6723715604877988,
        "smoothedEle": 5,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833842,
        "lng": 120.944491,
        "ele": 5,
        "distanceKm": 2.4199938292306173,
        "gradePct": -0.025176658430174446,
        "smoothedEle": 5.184910380939894,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833703,
        "lng": 120.9449694,
        "ele": 5.749999999999997,
        "distanceKm": 2.470684394313312,
        "gradePct": 0.7431432041207551,
        "smoothedEle": 5.749999806431738,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833564,
        "lng": 120.9454478,
        "ele": 6.500000000000002,
        "distanceKm": 2.5213750110142104,
        "gradePct": 1.2996922560232622,
        "smoothedEle": 6.499999806422939,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833425000000002,
        "lng": 120.9459262,
        "ele": 7.249999999999998,
        "distanceKm": 2.572065679335658,
        "gradePct": 1.479563007236972,
        "smoothedEle": 7.249999806433272,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833286,
        "lng": 120.9464046,
        "ele": 8.000000000000004,
        "distanceKm": 2.6227563992748997,
        "gradePct": 1.4795615005727822,
        "smoothedEle": 7.999999806424479,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833147,
        "lng": 120.946883,
        "ele": 8.75,
        "distanceKm": 2.6734471708342804,
        "gradePct": 1.5646935050539281,
        "smoothedEle": 8.835133317571083,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833043,
        "lng": 120.947434,
        "ele": 10,
        "distanceKm": 2.7302403029585363,
        "gradePct": 1.4257350968411664,
        "smoothedEle": 9.5490326667072,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832994,
        "lng": 120.947944,
        "ele": 9.25,
        "distanceKm": 2.7819937938733625,
        "gradePct": 0.48835858343443084,
        "smoothedEle": 9.4309244090694,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833146,
        "lng": 120.948327,
        "ele": 9.25,
        "distanceKm": 2.8241776406575974,
        "gradePct": -0.22282396842299496,
        "smoothedEle": 9.25,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832963,
        "lng": 120.948797,
        "ele": 9.25,
        "distanceKm": 2.875787821728198,
        "gradePct": -0.02626061866575744,
        "smoothedEle": 9.4188266332198,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832873243977335,
        "lng": 120.94929669671451,
        "ele": 9.944822224934367,
        "distanceKm": 2.9271921875756637,
        "gradePct": 0.613669189596345,
        "smoothedEle": 9.873530340948712,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832807621988668,
        "lng": 120.94980234835727,
        "ele": 10.347411112467183,
        "distanceKm": 2.9787384163690773,
        "gradePct": 0.9024845737003677,
        "smoothedEle": 10.347411058578567,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832742,
        "lng": 120.950308,
        "ele": 10.75,
        "distanceKm": 3.0302846719335315,
        "gradePct": 0.8646751300127234,
        "smoothedEle": 10.766635653752086,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832679666666667,
        "lng": 120.95084200000001,
        "ele": 11.249999999999998,
        "distanceKm": 3.084616532294485,
        "gradePct": 0.8547822829250463,
        "smoothedEle": 11.249999932733711,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83261733333333,
        "lng": 120.951376,
        "ele": 11.750000000000002,
        "distanceKm": 3.1389484195619537,
        "gradePct": 0.9062871073509459,
        "smoothedEle": 11.749999932727007,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832555,
        "lng": 120.95191,
        "ele": 12.25,
        "distanceKm": 3.1932803337386186,
        "gradePct": 0.3646893910396291,
        "smoothedEle": 11.694419679920982,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832482,
        "lng": 120.952578,
        "ele": 9.5,
        "distanceKm": 3.261177780609841,
        "gradePct": -2.184901451590463,
        "smoothedEle": 9.5423583747832,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832452,
        "lng": 120.953116,
        "ele": 7.75,
        "distanceKm": 3.3155718685255566,
        "gradePct": -3.1381705299923146,
        "smoothedEle": 7.849701972417128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832419,
        "lng": 120.953512,
        "ele": 6.75,
        "distanceKm": 3.3557019168614857,
        "gradePct": -2.666570289663809,
        "smoothedEle": 7.049349758320352,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83227369437945,
        "lng": 120.95388297832812,
        "ele": 6.75,
        "distanceKm": 3.3964766707996477,
        "gradePct": -1.398364938625282,
        "smoothedEle": 7.0455488300313345,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83209,
        "lng": 120.954234,
        "ele": 7.75,
        "distanceKm": 3.4373669047933806,
        "gradePct": 0.38787505878985906,
        "smoothedEle": 7.802897626207249,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.831752,
        "lng": 120.954844,
        "ele": 10.25,
        "distanceKm": 3.5094911882942936,
        "gradePct": 2.6381174079279686,
        "smoothedEle": 9.924714727896808,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.831479890299654,
        "lng": 120.95510446548373,
        "ele": 10.327306782278725,
        "distanceKm": 3.549571001597389,
        "gradePct": 1.969572083408185,
        "smoothedEle": 10.131500816095574,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.831182,
        "lng": 120.95533,
        "ele": 9.75,
        "distanceKm": 3.589760589751436,
        "gradePct": 0.5783825644941055,
        "smoothedEle": 9.922644782047762,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.830756,
        "lng": 120.955459,
        "ele": 9.75,
        "distanceKm": 3.638885958143276,
        "gradePct": -0.25234509717957443,
        "smoothedEle": 9.824027759077442,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8304,
        "lng": 120.955362,
        "ele": 10,
        "distanceKm": 3.679663750881323,
        "gradePct": -0.19407953788846816,
        "smoothedEle": 9.781036190483716,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83007,
        "lng": 120.955159,
        "ele": 9.5,
        "distanceKm": 3.721689330705786,
        "gradePct": -0.08460787834437859,
        "smoothedEle": 9.773941356266603,
        "gradeBand": "descent"
      },
      {
        "lat": 24.829655,
        "lng": 120.954697,
        "ele": 10.25,
        "distanceKm": 3.787287915818383,
        "gradePct": 0.4828786588621319,
        "smoothedEle": 10.262627724064096,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829317,
        "lng": 120.954483,
        "ele": 10.75,
        "distanceKm": 3.8306347038616404,
        "gradePct": 0.4911790838199824,
        "smoothedEle": 10.331760321245977,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.828916,
        "lng": 120.954455,
        "ele": 9.75,
        "distanceKm": 3.875313374089207,
        "gradePct": -0.5917465022682785,
        "smoothedEle": 9.581675101059734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828506,
        "lng": 120.954637,
        "ele": 8,
        "distanceKm": 3.924464054340357,
        "gradePct": -1.844264079556574,
        "smoothedEle": 8.477654842892338,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828149684570782,
        "lng": 120.9548893900957,
        "ele": 8.12372063514547,
        "distanceKm": 3.971565368439781,
        "gradePct": -1.5208776622355917,
        "smoothedEle": 8.123720610630505,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827793369141563,
        "lng": 120.9551417801914,
        "ele": 8.247441270290938,
        "distanceKm": 4.018666722168754,
        "gradePct": -0.1742894969370264,
        "smoothedEle": 8.433584747356699,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82743710764867,
        "lng": 120.95539426040536,
        "ele": 9.074934626409242,
        "distanceKm": 4.06576798986536,
        "gradePct": 0.9115815430294536,
        "smoothedEle": 9.078865497360685,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82708084729482,
        "lng": 120.95564674252246,
        "ele": 9.917290444149403,
        "distanceKm": 4.112869294587192,
        "gradePct": 1.5218448771907074,
        "smoothedEle": 9.917290277149235,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.826724586940973,
        "lng": 120.95589922463957,
        "ele": 10.759646261889573,
        "distanceKm": 4.159970638959766,
        "gradePct": 1.7602034904421828,
        "smoothedEle": 10.75964609488852,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.826368326587122,
        "lng": 120.95615170675667,
        "ele": 11.602002079629743,
        "distanceKm": 4.2070720229832945,
        "gradePct": 1.8827383285614938,
        "smoothedEle": 11.696834518061197,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82601212100762,
        "lng": 120.95640428167835,
        "ele": 12.80290167684976,
        "distanceKm": 4.254173392030689,
        "gradePct": 2.1459277660475125,
        "smoothedEle": 12.801896466105168,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.825656,
        "lng": 120.956657,
        "ele": 14,
        "distanceKm": 4.3012747276261525,
        "gradePct": 2.153333911003323,
        "smoothedEle": 13.73481814356734,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8252700649833,
        "lng": 120.95695010432226,
        "ele": 14.214885866757951,
        "distanceKm": 4.353395677578557,
        "gradePct": 1.1488039216397703,
        "smoothedEle": 13.932454152765446,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.824884,
        "lng": 120.957243,
        "ele": 13.25,
        "distanceKm": 4.405516634863688,
        "gradePct": -0.4714424876961569,
        "smoothedEle": 13.27946042828191,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82443287664558,
        "lng": 120.95755228230128,
        "ele": 12.264992686590583,
        "distanceKm": 4.464597419925492,
        "gradePct": -1.4309580691056778,
        "smoothedEle": 12.361155847470037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823982,
        "lng": 120.957862,
        "ele": 11.75,
        "distanceKm": 4.523678210107747,
        "gradePct": -0.9185577723605377,
        "smoothedEle": 12.078613621949804,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823663,
        "lng": 120.958055,
        "ele": 12.5,
        "distanceKm": 4.564145369317404,
        "gradePct": 0.2606698620679664,
        "smoothedEle": 12.628852023486461,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.823354977908384,
        "lng": 120.95821494848856,
        "ele": 13.633318066222591,
        "distanceKm": 4.602009207026475,
        "gradePct": 1.6012485306412911,
        "smoothedEle": 13.7834898856749,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.823047,
        "lng": 120.958375,
        "ele": 15.25,
        "distanceKm": 4.639873052052692,
        "gradePct": 2.908172918439723,
        "smoothedEle": 15.206990382689346,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.822683981721532,
        "lng": 120.9586349173924,
        "ele": 17.021170886039695,
        "distanceKm": 4.688013304107219,
        "gradePct": 3.458723662531362,
        "smoothedEle": 16.815415832923033,
        "gradeBand": "hard"
      },
      {
        "lat": 24.822341,
        "lng": 120.958927,
        "ele": 18,
        "distanceKm": 4.736215227842497,
        "gradePct": 2.7126084178876715,
        "smoothedEle": 17.782082006453294,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821983814167385,
        "lng": 120.95930229270758,
        "ele": 18.15776042013633,
        "distanceKm": 4.791097026588009,
        "gradePct": 1.3221204534690625,
        "smoothedEle": 18.199378843280602,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821627,
        "lng": 120.959678,
        "ele": 18.5,
        "distanceKm": 4.845977899745027,
        "gradePct": 0.8457189105057588,
        "smoothedEle": 18.702031940668743,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821046,
        "lng": 120.959465,
        "ele": 20.25,
        "distanceKm": 4.914064791660281,
        "gradePct": 1.6538475906903778,
        "smoothedEle": 20.06358785115598,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820631503719415,
        "lng": 120.95937697926973,
        "ele": 20.59988483183803,
        "distanceKm": 4.96100301907079,
        "gradePct": 1.4117356035842847,
        "smoothedEle": 20.414229783728306,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820217,
        "lng": 120.959289,
        "ele": 20.25,
        "distanceKm": 5.007941272595777,
        "gradePct": 0.24737399788380277,
        "smoothedEle": 20.188507829760503,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819894,
        "lng": 120.95942,
        "ele": 19.75,
        "distanceKm": 5.046213404015095,
        "gradePct": -0.610992433758947,
        "smoothedEle": 19.692754711590723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819564,
        "lng": 120.959653,
        "ele": 19,
        "distanceKm": 5.089796081385501,
        "gradePct": -1.2062365120726433,
        "smoothedEle": 19.069529954461014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819189275118994,
        "lng": 120.9599881982528,
        "ele": 18.386834294667118,
        "distanceKm": 5.143467656894488,
        "gradePct": -1.2311531295028049,
        "smoothedEle": 18.49716826328037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818825,
        "lng": 120.960337,
        "ele": 18.25,
        "distanceKm": 5.197132727681262,
        "gradePct": -1.002311201724627,
        "smoothedEle": 17.98897966171636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818384,
        "lng": 120.960696,
        "ele": 16.75,
        "distanceKm": 5.258103211005214,
        "gradePct": -0.8999469738820768,
        "smoothedEle": 17.458627942411088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.817929849325708,
        "lng": 120.96085409907244,
        "ele": 18.518317873794345,
        "distanceKm": 5.311063414201226,
        "gradePct": 0.7923214924390465,
        "smoothedEle": 18.660125084290407,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817475676950256,
        "lng": 120.96101212196858,
        "ele": 20.889560307204295,
        "distanceKm": 5.3640236202114755,
        "gradePct": 3.0127526860935383,
        "smoothedEle": 20.605695723817824,
        "gradeBand": "hard"
      },
      {
        "lat": 24.817021325023017,
        "lng": 120.96116951239033,
        "ele": 22.05388712494105,
        "distanceKm": 5.416983701474118,
        "gradePct": 3.0073477618908946,
        "smoothedEle": 21.884963259520656,
        "gradeBand": "hard"
      },
      {
        "lat": 24.816567,
        "lng": 120.961327,
        "ele": 22.5,
        "distanceKm": 5.469943889401421,
        "gradePct": 1.2176021168986795,
        "smoothedEle": 21.966303817987562,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.816075493885315,
        "lng": 120.96118852614283,
        "ele": 20.532633575340448,
        "distanceKm": 5.526355582962094,
        "gradePct": -1.1085212732631402,
        "smoothedEle": 20.790836083105592,
        "gradeBand": "descent"
      },
      {
        "lat": 24.815584,
        "lng": 120.96105,
        "ele": 19.75,
        "distanceKm": 5.582767280443087,
        "gradePct": -1.3698830716332728,
        "smoothedEle": 20.329215820038062,
        "gradeBand": "descent"
      },
      {
        "lat": 24.815478,
        "lng": 120.961565,
        "ele": 21.5,
        "distanceKm": 5.636064711892149,
        "gradePct": 0.555656335696517,
        "smoothedEle": 21.26704204146931,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.815404,
        "lng": 120.961848,
        "ele": 22,
        "distanceKm": 5.665788905376142,
        "gradePct": 1.5341431274403432,
        "smoothedEle": 22.00229399667636,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.815019588882684,
        "lng": 120.96213458705266,
        "ele": 22.73564266470818,
        "distanceKm": 5.717400327196822,
        "gradePct": 1.5338683581752675,
        "smoothedEle": 22.47249026947589,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.81463585964404,
        "lng": 120.9624228164004,
        "ele": 22.38340031749392,
        "distanceKm": 5.769042210724183,
        "gradePct": 0.28348631857447615,
        "smoothedEle": 22.315418949393536,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.814251789920306,
        "lng": 120.96271049377017,
        "ele": 21.75,
        "distanceKm": 5.820684088337303,
        "gradePct": -0.5593522986404678,
        "smoothedEle": 21.9031502503663,
        "gradeBand": "descent"
      },
      {
        "lat": 24.813867,
        "lng": 120.962997,
        "ele": 21.75,
        "distanceKm": 5.872325982737841,
        "gradePct": -0.5392038604280406,
        "smoothedEle": 21.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.813452429083796,
        "lng": 120.96331915064826,
        "ele": 21.75,
        "distanceKm": 5.92873729715062,
        "gradePct": 0.022253291490624685,
        "smoothedEle": 21.90152078231976,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.813037725030487,
        "lng": 120.96364109182628,
        "ele": 22.4452295656801,
        "distanceKm": 5.985148592124377,
        "gradePct": 0.6846615575531547,
        "smoothedEle": 22.469103084503082,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812623,
        "lng": 120.963963,
        "ele": 23.25,
        "distanceKm": 6.041559937854051,
        "gradePct": 1.29969182717083,
        "smoothedEle": 23.33022762206757,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812307112695674,
        "lng": 120.96420417859436,
        "ele": 24.142775146501382,
        "distanceKm": 6.084295368110579,
        "gradePct": 1.7436579503424372,
        "smoothedEle": 24.204176320556392,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811991,
        "lng": 120.964445,
        "ele": 25.25,
        "distanceKm": 6.127030920647427,
        "gradePct": 1.858666749298386,
        "smoothedEle": 24.96710754707577,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811451,
        "lng": 120.964851,
        "ele": 25.5,
        "distanceKm": 6.199726405174543,
        "gradePct": 0.9374479745710855,
        "smoothedEle": 25.4171049976064,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.811036296847963,
        "lng": 120.96517027683534,
        "ele": 25.27704131610938,
        "distanceKm": 6.2559834504696115,
        "gradePct": 0.06494970182934547,
        "smoothedEle": 25.211278347590213,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810621623815642,
        "lng": 120.9654896002065,
        "ele": 24.75340341165431,
        "distanceKm": 6.312240503063676,
        "gradePct": -0.3947761503892636,
        "smoothedEle": 24.976543740072152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810207,
        "lng": 120.965809,
        "ele": 25.25,
        "distanceKm": 6.368497551784851,
        "gradePct": 0.48237831094946587,
        "smoothedEle": 25.641441113550673,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.809891,
        "lng": 120.966052,
        "ele": 27,
        "distanceKm": 6.41134851002521,
        "gradePct": 1.481492002709727,
        "smoothedEle": 26.461757616327294,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.809515661043765,
        "lng": 120.96634201882895,
        "ele": 26.844199681786876,
        "distanceKm": 6.462326442915437,
        "gradePct": 1.2050912781061072,
        "smoothedEle": 26.77359656988874,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80913981301129,
        "lng": 120.96663123636219,
        "ele": 26.400352667695465,
        "distanceKm": 6.513304425544571,
        "gradePct": 0.09465944749739597,
        "smoothedEle": 26.568381665255774,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.808764194647676,
        "lng": 120.96692080835497,
        "ele": 26.642028394049202,
        "distanceKm": 6.564282028235523,
        "gradePct": -0.20397171324424052,
        "smoothedEle": 26.56175253149027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80838841886793,
        "lng": 120.96721013755709,
        "ele": 26.556196623639046,
        "distanceKm": 6.615259981801967,
        "gradePct": -0.24417176224699674,
        "smoothedEle": 26.32395560223095,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808012863584057,
        "lng": 120.96749981342266,
        "ele": 25.52286827346967,
        "distanceKm": 6.66623795186556,
        "gradePct": -0.9659196535362858,
        "smoothedEle": 25.58670907833966,
        "gradeBand": "descent"
      },
      {
        "lat": 24.807637,
        "lng": 120.967789,
        "ele": 24.75,
        "distanceKm": 6.717215765753493,
        "gradePct": -1.2631192609503161,
        "smoothedEle": 25.032551674042093,
        "gradeBand": "descent"
      },
      {
        "lat": 24.807326361846698,
        "lng": 120.9680311953829,
        "ele": 25.072843256592034,
        "distanceKm": 6.759532533763894,
        "gradePct": -0.6807478330765473,
        "smoothedEle": 25.002935412349885,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80701573519569,
        "lng": 120.96827340617422,
        "ele": 25.153301036059027,
        "distanceKm": 6.801849191660852,
        "gradePct": -0.18581779167075463,
        "smoothedEle": 25.013777153996205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.806706,
        "lng": 120.968517,
        "ele": 24.75,
        "distanceKm": 6.844165970655405,
        "gradePct": 0.4056290124182361,
        "smoothedEle": 25.419319030465296,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80627595690357,
        "lng": 120.96884363580001,
        "ele": 27.388521428614006,
        "distanceKm": 6.902248515637258,
        "gradePct": 2.7320263308757182,
        "smoothedEle": 27.749630396998942,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805847,
        "lng": 120.969172,
        "ele": 31.75,
        "distanceKm": 6.960331103002295,
        "gradePct": 4.339064220525186,
        "smoothedEle": 30.40693939916282,
        "gradeBand": "hard"
      },
      {
        "lat": 24.805426,
        "lng": 120.969496,
        "ele": 29.75,
        "distanceKm": 7.017435991406247,
        "gradePct": 1.3780297187525519,
        "smoothedEle": 29.82249514139247,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805102594422088,
        "lng": 120.96974956264371,
        "ele": 28.473779391535246,
        "distanceKm": 7.061574806873768,
        "gradePct": -1.8461480295007135,
        "smoothedEle": 28.54806258923078,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804778731862392,
        "lng": 120.97000241790423,
        "ele": 27.463512939722804,
        "distanceKm": 7.105713746384973,
        "gradePct": -2.535729688477206,
        "smoothedEle": 27.406737647631726,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804456,
        "lng": 120.970257,
        "ele": 26.25,
        "distanceKm": 7.149851454707889,
        "gradePct": -1.8302834537520944,
        "smoothedEle": 27.056270811397017,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804366,
        "lng": 120.970113,
        "ele": 27.25,
        "distanceKm": 7.167498394673738,
        "gradePct": -1.410096664279107,
        "smoothedEle": 26.984796442976652,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804215,
        "lng": 120.970048,
        "ele": 27.5,
        "distanceKm": 7.18552517576192,
        "gradePct": -1.0488440524630074,
        "smoothedEle": 26.879920618076124,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804163,
        "lng": 120.970048,
        "ele": 27.5,
        "distanceKm": 7.191307319934082,
        "gradePct": -0.8993319565066745,
        "smoothedEle": 26.879920618076117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804045,
        "lng": 120.970117,
        "ele": 27.25,
        "distanceKm": 7.206162204311746,
        "gradePct": -0.5232561371406544,
        "smoothedEle": 26.879920618076117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804003,
        "lng": 120.970195,
        "ele": 26.75,
        "distanceKm": 7.215316237784467,
        "gradePct": -0.48347693272929065,
        "smoothedEle": 26.847014010924728,
        "gradeBand": "descent"
      },
      {
        "lat": 24.803971,
        "lng": 120.970312,
        "ele": 26.25,
        "distanceKm": 7.227650289207938,
        "gradePct": -0.45127224392348864,
        "smoothedEle": 26.781282577883992,
        "gradeBand": "descent"
      },
      {
        "lat": 24.803441927175342,
        "lng": 120.97012906765934,
        "ele": 26.74014990365782,
        "distanceKm": 7.289310236806342,
        "gradePct": -0.1839107958798933,
        "smoothedEle": 26.696009822196228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802911,
        "lng": 120.969953,
        "ele": 27,
        "distanceKm": 7.350963679160901,
        "gradePct": 0.4218224501263756,
        "smoothedEle": 27.170863725785125,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802420494400348,
        "lng": 120.96983721786427,
        "ele": 27.998121859755646,
        "distanceKm": 7.406743525655407,
        "gradePct": 1.1700229088417877,
        "smoothedEle": 28.00030366460186,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801939,
        "lng": 120.969692,
        "ele": 29,
        "distanceKm": 7.462253621110773,
        "gradePct": 0.8482824164493857,
        "smoothedEle": 28.18702628799771,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801894,
        "lng": 120.970072,
        "ele": 27,
        "distanceKm": 7.500935379960098,
        "gradePct": -0.32490586527399873,
        "smoothedEle": 27.58903133701374,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801889,
        "lng": 120.970113,
        "ele": 27.25,
        "distanceKm": 7.505111051358574,
        "gradePct": -0.48095022793719433,
        "smoothedEle": 27.495078730548038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80159,
        "lng": 120.970039,
        "ele": 26.75,
        "distanceKm": 7.539187114463658,
        "gradePct": -1.0945565964409387,
        "smoothedEle": 27.014879505512326,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80200522906734,
        "lng": 120.97014188626669,
        "ele": 27.26128569256024,
        "distanceKm": 7.586512096084039,
        "gradePct": -0.6539445133384328,
        "smoothedEle": 27.15806145541551,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80242011453367,
        "lng": 120.97024644313335,
        "ele": 27.38064284628012,
        "distanceKm": 7.633837114920739,
        "gradePct": 0.2903712549401984,
        "smoothedEle": 27.38064285098036,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802835,
        "lng": 120.970351,
        "ele": 27.5,
        "distanceKm": 7.681162125881512,
        "gradePct": 0.283231711278206,
        "smoothedEle": 27.425106807200404,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8034,
        "lng": 120.970525,
        "ele": 27.25,
        "distanceKm": 7.746396118697628,
        "gradePct": -0.5712983120225152,
        "smoothedEle": 26.821144282534576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.803942,
        "lng": 120.970678,
        "ele": 24.75,
        "distanceKm": 7.808611060582005,
        "gradePct": -2.1088713600899998,
        "smoothedEle": 25.06210217723946,
        "gradeBand": "descent"
      },
      {
        "lat": 24.803945,
        "lng": 120.970763,
        "ele": 24.5,
        "distanceKm": 7.8171972034147545,
        "gradePct": -2.2869616837412154,
        "smoothedEle": 24.804517892256975,
        "gradeBand": "descent"
      },
      {
        "lat": 24.803962,
        "lng": 120.970858,
        "ele": 24.25,
        "distanceKm": 7.82697078086649,
        "gradePct": -2.489681298999743,
        "smoothedEle": 24.511310568704914,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804044,
        "lng": 120.970946,
        "ele": 24.5,
        "distanceKm": 7.839700120619446,
        "gradePct": -2.1406321478534562,
        "smoothedEle": 24.74250637617813,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804097,
        "lng": 120.970979,
        "ele": 24.5,
        "distanceKm": 7.846469647848498,
        "gradePct": -1.8057778813562342,
        "smoothedEle": 25.013287465340245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804183,
        "lng": 120.971009,
        "ele": 24.25,
        "distanceKm": 7.856500408322799,
        "gradePct": -1.120941475011961,
        "smoothedEle": 25.41451788431228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804172,
        "lng": 120.971531,
        "ele": 28.75,
        "distanceKm": 7.909203711779596,
        "gradePct": 2.740564007343866,
        "smoothedEle": 27.784886648655583,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80416,
        "lng": 120.972129,
        "ele": 29.25,
        "distanceKm": 7.969578783428536,
        "gradePct": 2.9733300871899644,
        "smoothedEle": 28.976057245033182,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8041512155411,
        "lng": 120.97266599779195,
        "ele": 28.486134008592433,
        "distanceKm": 8.02379053364223,
        "gradePct": 0.41345652280797796,
        "smoothedEle": 28.486134023264132,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804142431082198,
        "lng": 120.97320299558392,
        "ele": 27.722268017184867,
        "distanceKm": 8.07800228769736,
        "gradePct": -1.1681407980848495,
        "smoothedEle": 27.731791430993294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804134,
        "lng": 120.97374,
        "ele": 27,
        "distanceKm": 8.132214020274542,
        "gradePct": -1.6178684800626457,
        "smoothedEle": 26.751054896674262,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80412002814156,
        "lng": 120.97426045172686,
        "ele": 25.253517695115217,
        "distanceKm": 8.1847698397322,
        "gradePct": -2.4168310007574174,
        "smoothedEle": 25.19252963503814,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80411,
        "lng": 120.974781,
        "ele": 23.25,
        "distanceKm": 8.237324272351318,
        "gradePct": -3.196883237090895,
        "smoothedEle": 23.4026288421148,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804093,
        "lng": 120.974918,
        "ele": 22.5,
        "distanceKm": 8.251281251845425,
        "gradePct": -3.1235300917098923,
        "smoothedEle": 23.062092425080568,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804207,
        "lng": 120.975103,
        "ele": 22.5,
        "distanceKm": 8.273850720794037,
        "gradePct": -2.3113576137669805,
        "smoothedEle": 23.20497484416589,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804012,
        "lng": 120.97556,
        "ele": 24.75,
        "distanceKm": 8.324820984404406,
        "gradePct": 0.7542360804771553,
        "smoothedEle": 24.582702361890732,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804137813574727,
        "lng": 120.97591550286593,
        "ele": 26,
        "distanceKm": 8.363335081000557,
        "gradePct": 2.4773104972739204,
        "smoothedEle": 25.615713103725952,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.804286,
        "lng": 120.976246,
        "ele": 26,
        "distanceKm": 8.400542060595876,
        "gradePct": 2.44856443968033,
        "smoothedEle": 26.375006875441287,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803742,
        "lng": 120.976646,
        "ele": 28.75,
        "distanceKm": 8.473268833291057,
        "gradePct": 3.0668738682134986,
        "smoothedEle": 28.885307975524707,
        "gradeBand": "hard"
      },
      {
        "lat": 24.803722302492922,
        "lng": 120.97702904313424,
        "ele": 30.415663823986563,
        "distanceKm": 8.51199418187375,
        "gradePct": 3.601805561243028,
        "smoothedEle": 30.372103903316912,
        "gradeBand": "hard"
      },
      {
        "lat": 24.803654,
        "lng": 120.977429,
        "ele": 32,
        "distanceKm": 8.553072983536818,
        "gradePct": 3.146441201594737,
        "smoothedEle": 31.334651506256574,
        "gradeBand": "hard"
      },
      {
        "lat": 24.803565294365377,
        "lng": 120.977945659536,
        "ele": 31.153572188733904,
        "distanceKm": 8.606147879988992,
        "gradePct": 1.1553890186269704,
        "smoothedEle": 31.3030337975453,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803476400090336,
        "lng": 120.97846227947606,
        "ele": 30.944166290272292,
        "distanceKm": 8.659222788578806,
        "gradePct": -0.03130661721762007,
        "smoothedEle": 31.29968133512842,
        "gradeBand": "descent"
      },
      {
        "lat": 24.803388,
        "lng": 120.978979,
        "ele": 32.25,
        "distanceKm": 8.712297504304395,
        "gradePct": 0.5118038172634539,
        "smoothedEle": 31.814449175432348,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8033274729425,
        "lng": 120.97942349557852,
        "ele": 31.77713236327761,
        "distanceKm": 8.757665838139822,
        "gradePct": 0.3942402860224781,
        "smoothedEle": 31.69401996550928,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.803267,
        "lng": 120.979868,
        "ele": 31,
        "distanceKm": 8.803034184087927,
        "gradePct": -0.4669418972383372,
        "smoothedEle": 31.257663003445018,
        "gradeBand": "descent"
      },
      {
        "lat": 24.80313926362149,
        "lng": 120.98032357871233,
        "ele": 31.174982655712295,
        "distanceKm": 8.851162904452,
        "gradePct": -0.40250660954569073,
        "smoothedEle": 31.308775245479907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802994842414325,
        "lng": 120.98077371914155,
        "ele": 31.86665510380819,
        "distanceKm": 8.899353565626866,
        "gradePct": 0.5735913978217566,
        "smoothedEle": 31.866654931231505,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802850421207165,
        "lng": 120.98122385957078,
        "ele": 32.55832755190408,
        "distanceKm": 8.94754427670301,
        "gradePct": 1.253395082006965,
        "smoothedEle": 32.5583273793274,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802706,
        "lng": 120.981674,
        "ele": 33.25,
        "distanceKm": 8.995735037680427,
        "gradePct": 1.2460598788898816,
        "smoothedEle": 33.07082488405631,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8025722374019,
        "lng": 120.98208349595372,
        "ele": 33.25,
        "distanceKm": 9.03966351769432,
        "gradePct": 0.8047837110605613,
        "smoothedEle": 33.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802438474803804,
        "lng": 120.98249299190745,
        "ele": 33.25,
        "distanceKm": 9.083592039668995,
        "gradePct": 0.30831306800266955,
        "smoothedEle": 33.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802304712205704,
        "lng": 120.98290248786117,
        "ele": 33.25,
        "distanceKm": 9.127520603601814,
        "gradePct": -0.23083035265884258,
        "smoothedEle": 32.96964123115806,
        "gradeBand": "descent"
      },
      {
        "lat": 24.802171,
        "lng": 120.983312,
        "ele": 32.25,
        "distanceKm": 9.171448849833425,
        "gradePct": -0.596365902183971,
        "smoothedEle": 32.65363409781603,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801988,
        "lng": 120.983877,
        "ele": 32.875,
        "distanceKm": 9.232000744561722,
        "gradePct": -0.06241263702295918,
        "smoothedEle": 32.87499975225864,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801805,
        "lng": 120.984442,
        "ele": 33.5,
        "distanceKm": 9.29255271856725,
        "gradePct": 0.8747059550834239,
        "smoothedEle": 33.6054915893542,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801627,
        "lng": 120.985102,
        "ele": 35,
        "distanceKm": 9.362050495822327,
        "gradePct": 1.9131131368278245,
        "smoothedEle": 35.15062952645686,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801465,
        "lng": 120.985634,
        "ele": 36.75,
        "distanceKm": 9.418690930445893,
        "gradePct": 2.2708376545469457,
        "smoothedEle": 36.45745779760272,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801306121721016,
        "lng": 120.98611278184073,
        "ele": 37.10783396167552,
        "distanceKm": 9.470146631162583,
        "gradePct": 1.6039646141580648,
        "smoothedEle": 36.94139105734035,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801147858229704,
        "lng": 120.98659180980074,
        "ele": 36.77993196495542,
        "distanceKm": 9.521602303598415,
        "gradePct": 0.1853759023027315,
        "smoothedEle": 36.67021473408416,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80099,
        "lng": 120.987071,
        "ele": 36,
        "distanceKm": 9.573058033311787,
        "gradePct": -0.5348013081268183,
        "smoothedEle": 36.39124638097117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800860372932856,
        "lng": 120.98748034863308,
        "ele": 36.71815549663485,
        "distanceKm": 9.616819449507156,
        "gradePct": 0.022734516832386555,
        "smoothedEle": 36.71815535018103,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800730745865714,
        "lng": 120.98788969726617,
        "ele": 37.436310993269664,
        "distanceKm": 9.660580906488628,
        "gradePct": 1.0745810012721189,
        "smoothedEle": 37.533472395555265,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800601,
        "lng": 120.988299,
        "ele": 38.5,
        "distanceKm": 9.704342382944525,
        "gradePct": 2.6162824635616553,
        "smoothedEle": 39.241230936009494,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.800442,
        "lng": 120.988802,
        "ele": 43,
        "distanceKm": 9.758105385955526,
        "gradePct": 5.387898494715769,
        "smoothedEle": 42.87524961767111,
        "gradeBand": "hard"
      },
      {
        "lat": 24.800319760250165,
        "lng": 120.98920120820868,
        "ele": 46.18611989627648,
        "distanceKm": 9.800632216098135,
        "gradePct": 6.551608112392013,
        "smoothedEle": 45.648052591646156,
        "gradeBand": "steep"
      },
      {
        "lat": 24.800191,
        "lng": 120.989598,
        "ele": 47.5,
        "distanceKm": 9.843166585220043,
        "gradePct": 4.902885120690182,
        "smoothedEle": 46.76837192910647,
        "gradeBand": "hard"
      },
      {
        "lat": 24.800047798760232,
        "lng": 120.99002313165619,
        "ele": 46.19398534820817,
        "distanceKm": 9.888938506673684,
        "gradePct": 1.2009296098232383,
        "smoothedEle": 46.08653759508359,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.799903756440962,
        "lng": 120.99044792555047,
        "ele": 44.491667029550285,
        "distanceKm": 9.934711154049198,
        "gradePct": -2.132457357470131,
        "smoothedEle": 44.41320566016498,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799758,
        "lng": 120.990872,
        "ele": 42.5,
        "distanceKm": 9.980482968303495,
        "gradePct": -2.8056226671264737,
        "smoothedEle": 43.40687154481626,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799590402536825,
        "lng": 120.9913866292594,
        "ele": 44.1373064296551,
        "distanceKm": 10.035671674575994,
        "gradePct": 0.09115936100126763,
        "smoothedEle": 44.483247121638875,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.799424201268412,
        "lng": 120.9919018146297,
        "ele": 47.31865321482749,
        "distanceKm": 10.09086110617069,
        "gradePct": 3.709370116218074,
        "smoothedEle": 47.31865217013361,
        "gradeBand": "hard"
      },
      {
        "lat": 24.799258,
        "lng": 120.992417,
        "ele": 50.5,
        "distanceKm": 10.14605060344159,
        "gradePct": 4.806997897057658,
        "smoothedEle": 49.82347151611001,
        "gradeBand": "hard"
      },
      {
        "lat": 24.799083040306794,
        "lng": 120.99294421778917,
        "ele": 50.66733869467216,
        "distanceKm": 10.202713035669882,
        "gradePct": 2.738256879526257,
        "smoothedEle": 50.59481832161799,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798907,
        "lng": 120.993471,
        "ele": 50.5,
        "distanceKm": 10.259375643778203,
        "gradePct": 0.9827657002895726,
        "smoothedEle": 50.98763125284864,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798661,
        "lng": 120.994043,
        "ele": 53,
        "distanceKm": 10.323265952586171,
        "gradePct": 1.999707737499861,
        "smoothedEle": 52.737008938193824,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.798420612487618,
        "lng": 120.99442969461799,
        "ele": 53.71503210238753,
        "distanceKm": 10.370574590208104,
        "gradePct": 2.169625125663622,
        "smoothedEle": 53.463894229375214,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79817940832508,
        "lng": 120.99481612974533,
        "ele": 53.476688068258355,
        "distanceKm": 10.417913070781077,
        "gradePct": 0.886246221645361,
        "smoothedEle": 53.47668814276206,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797938204162538,
        "lng": 120.99520256487266,
        "ele": 53.23834403412918,
        "distanceKm": 10.465251613871827,
        "gradePct": -0.14376393118547576,
        "smoothedEle": 53.23834410863452,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797697,
        "lng": 120.995589,
        "ele": 53,
        "distanceKm": 10.512590219481737,
        "gradePct": -0.10342847895219658,
        "smoothedEle": 53.37182108577207,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797482,
        "lng": 120.995884,
        "ele": 54,
        "distanceKm": 10.550777531509127,
        "gradePct": 2.057291830392934,
        "smoothedEle": 55.36851125278619,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.797218,
        "lng": 120.996265,
        "ele": 60.5,
        "distanceKm": 10.599159848658381,
        "gradePct": 5.521046557440249,
        "smoothedEle": 58.85499907323138,
        "gradeBand": "hard"
      },
      {
        "lat": 24.796913650801816,
        "lng": 120.99668213409657,
        "ele": 60.6416895708486,
        "distanceKm": 10.653180789387399,
        "gradePct": 5.034849144428382,
        "smoothedEle": 60.57654204323077,
        "gradeBand": "hard"
      },
      {
        "lat": 24.796609,
        "lng": 120.997099,
        "ele": 60.5,
        "distanceKm": 10.70720173596505,
        "gradePct": 1.4633786272817397,
        "smoothedEle": 60.574657105712134,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796591,
        "lng": 120.997004,
        "ele": 60.5,
        "distanceKm": 10.716997983961317,
        "gradePct": 1.1618014959583047,
        "smoothedEle": 60.58526746395763,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796267,
        "lng": 120.996709,
        "ele": 60.75,
        "distanceKm": 10.763738812788828,
        "gradePct": 0.26451804967451503,
        "smoothedEle": 60.84069169479876,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796154,
        "lng": 120.996701,
        "ele": 61,
        "distanceKm": 10.776329780417429,
        "gradePct": 0.4538218971545421,
        "smoothedEle": 61.02955620922776,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796122,
        "lng": 120.996675,
        "ele": 61,
        "distanceKm": 10.78075123466537,
        "gradePct": 0.520297987418724,
        "smoothedEle": 61.095878022946884,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795715,
        "lng": 120.996342,
        "ele": 62,
        "distanceKm": 10.837125517252264,
        "gradePct": 0.6859163280162075,
        "smoothedEle": 61.381174561040886,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796007,
        "lng": 120.995912,
        "ele": 60.25,
        "distanceKm": 10.891331591321572,
        "gradePct": -0.09802893183244556,
        "smoothedEle": 61.0513937037871,
        "gradeBand": "descent"
      },
      {
        "lat": 24.795715,
        "lng": 120.996342,
        "ele": 62,
        "distanceKm": 10.94553766539088,
        "gradePct": 0.05117812850551946,
        "smoothedEle": 61.381174561040886,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796122,
        "lng": 120.996675,
        "ele": 61,
        "distanceKm": 11.001911947977774,
        "gradePct": 0.05319304051886339,
        "smoothedEle": 61.16895589754277,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.796204,
        "lng": 120.996831,
        "ele": 61,
        "distanceKm": 11.020108425423762,
        "gradePct": -0.3236456825559071,
        "smoothedEle": 60.902821556479964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796376,
        "lng": 120.996979,
        "ele": 60.75,
        "distanceKm": 11.044377318913577,
        "gradePct": -0.6288019271069865,
        "smoothedEle": 60.74531327642524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79653,
        "lng": 120.997091,
        "ele": 60.5,
        "distanceKm": 11.064896833543582,
        "gradePct": -0.6304509537283445,
        "smoothedEle": 60.67784681663287,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796609,
        "lng": 120.997099,
        "ele": 60.5,
        "distanceKm": 11.073718285364352,
        "gradePct": -0.6142066276380355,
        "smoothedEle": 60.66088315089409,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79624406798671,
        "lng": 120.99753039517928,
        "ele": 60.80769984257187,
        "distanceKm": 11.133240717223792,
        "gradePct": 0.017463740226752185,
        "smoothedEle": 60.83505501229068,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795881,
        "lng": 120.997963,
        "ele": 61.25,
        "distanceKm": 11.192711734841014,
        "gradePct": 0.6392615606338931,
        "smoothedEle": 61.355722488617204,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79553625,
        "lng": 120.9983585,
        "ele": 62.12500000000001,
        "distanceKm": 11.248059765684733,
        "gradePct": 1.1602041879036133,
        "smoothedEle": 62.12499964979246,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7951915,
        "lng": 120.99875399999999,
        "ele": 62.999999999999986,
        "distanceKm": 11.30340787657589,
        "gradePct": 1.495612476561794,
        "smoothedEle": 62.99999964979202,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79484675,
        "lng": 120.9991495,
        "ele": 63.87499999999999,
        "distanceKm": 11.358756067514582,
        "gradePct": 1.5809018329674331,
        "smoothedEle": 63.87499964980517,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794502,
        "lng": 120.999545,
        "ele": 64.75,
        "distanceKm": 11.414104338497806,
        "gradePct": 1.1336890921181362,
        "smoothedEle": 64.30278919529597,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794205,
        "lng": 120.999962,
        "ele": 63.666666666666664,
        "distanceKm": 11.46760720183523,
        "gradePct": -0.27674341196750973,
        "smoothedEle": 63.66666709622303,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793908,
        "lng": 121.000379,
        "ele": 62.583333333333336,
        "distanceKm": 11.521110144475367,
        "gradePct": -1.6361599277216203,
        "smoothedEle": 62.58333376288261,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793611,
        "lng": 121.000796,
        "ele": 61.5,
        "distanceKm": 11.57461316641691,
        "gradePct": -1.6585907744391892,
        "smoothedEle": 61.866218797898,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793212,
        "lng": 121.001326,
        "ele": 62.25,
        "distanceKm": 11.64411712195077,
        "gradePct": -0.33796064821933075,
        "smoothedEle": 61.93700459176559,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792901898891035,
        "lng": 121.00175824441969,
        "ele": 61.354974918761805,
        "distanceKm": 11.69973060236596,
        "gradePct": -0.5440280959085178,
        "smoothedEle": 61.34777137045526,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792591949445516,
        "lng": 121.00219062220984,
        "ele": 60.427487459380885,
        "distanceKm": 11.755344279357278,
        "gradePct": -1.3905633076819988,
        "smoothedEle": 60.427487856328206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792282,
        "lng": 121.002623,
        "ele": 59.5,
        "distanceKm": 11.81095804194486,
        "gradePct": -1.2745344047481713,
        "smoothedEle": 59.88744763996387,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792023824553866,
        "lng": 121.0029828223658,
        "ele": 60.176357830440416,
        "distanceKm": 11.857255921870346,
        "gradePct": -0.23256712646456007,
        "smoothedEle": 60.176357629862224,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79176564910773,
        "lng": 121.00334264473159,
        "ele": 60.85271566088083,
        "distanceKm": 11.903553861107097,
        "gradePct": 0.8963259108470499,
        "smoothedEle": 60.85567221825548,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.791507538962836,
        "lng": 121.0037025232998,
        "ele": 61.540084569923906,
        "distanceKm": 11.949851809272475,
        "gradePct": 1.4141393777281885,
        "smoothedEle": 61.54429355077338,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79124952177969,
        "lng": 121.00406248187683,
        "ele": 62.24312866568912,
        "distanceKm": 11.996149748220759,
        "gradePct": 1.4434202076922966,
        "smoothedEle": 62.19045428825271,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790991,
        "lng": 121.004422,
        "ele": 62.75,
        "distanceKm": 12.042447675085063,
        "gradePct": 1.3655682157648292,
        "smoothedEle": 62.799734969297326,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79071537929143,
        "lng": 121.00482163601143,
        "ele": 63.50333714283705,
        "distanceKm": 12.093111152017787,
        "gradePct": 1.5386235440306761,
        "smoothedEle": 63.686669431218114,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790437,
        "lng": 121.005219,
        "ele": 65,
        "distanceKm": 12.143779071216914,
        "gradePct": 2.1855159257438648,
        "smoothedEle": 65.00855883171073,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.790185909073003,
        "lng": 121.00558903725228,
        "ele": 66.41565447233475,
        "distanceKm": 12.190414877609143,
        "gradePct": 2.7098809892148834,
        "smoothedEle": 66.34934839568848,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7899359545365,
        "lng": 121.00596001862614,
        "ele": 67.58282723616738,
        "distanceKm": 12.237051702983994,
        "gradePct": 2.749780227013839,
        "smoothedEle": 67.58282688256122,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.789686,
        "lng": 121.006331,
        "ele": 68.75,
        "distanceKm": 12.283688588950758,
        "gradePct": 1.9713685553230602,
        "smoothedEle": 68.12733469100269,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.789419,
        "lng": 121.006732,
        "ele": 67.5,
        "distanceKm": 12.333889318145497,
        "gradePct": 0.6493640572677487,
        "smoothedEle": 68.14855030532725,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.789122,
        "lng": 121.007168,
        "ele": 69,
        "distanceKm": 12.388915336439583,
        "gradePct": 1.1182380730399797,
        "smoothedEle": 69.24778166938475,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.788822897360824,
        "lng": 121.00760652499167,
        "ele": 71.62196155021643,
        "distanceKm": 12.44428565587613,
        "gradePct": 3.024583805379674,
        "smoothedEle": 71.38081732783102,
        "gradeBand": "hard"
      },
      {
        "lat": 24.788523617300967,
        "lng": 121.0080449025022,
        "ele": 73.16327932776333,
        "distanceKm": 12.499656013007668,
        "gradePct": 3.288716846959628,
        "smoothedEle": 72.95026253917648,
        "gradeBand": "hard"
      },
      {
        "lat": 24.788224,
        "lng": 121.008483,
        "ele": 73.75,
        "distanceKm": 12.55502642097108,
        "gradePct": 1.9338155107464485,
        "smoothedEle": 73.61907447879322,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787809,
        "lng": 121.008711,
        "ele": 73.75,
        "distanceKm": 12.606593996415322,
        "gradePct": 0.9537261891935492,
        "smoothedEle": 73.98779172550468,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787339,
        "lng": 121.008754,
        "ele": 74.75,
        "distanceKm": 12.65903565131439,
        "gradePct": 1.1924504165846244,
        "smoothedEle": 74.840191598454,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78683,
        "lng": 121.008491,
        "ele": 76.5,
        "distanceKm": 12.721551842861974,
        "gradePct": 2.069008871989404,
        "smoothedEle": 76.29992920270803,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78652990522266,
        "lng": 121.00821106891675,
        "ele": 76.9546176064171,
        "distanceKm": 12.765279263506862,
        "gradePct": 1.987750679225023,
        "smoothedEle": 76.9737290775162,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78623845261133,
        "lng": 121.00792003445837,
        "ele": 77.47730880320856,
        "distanceKm": 12.809022720956197,
        "gradePct": 1.469931375781874,
        "smoothedEle": 77.4773086820708,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785947,
        "lng": 121.007629,
        "ele": 78,
        "distanceKm": 12.852766224757087,
        "gradePct": 1.444104315094213,
        "smoothedEle": 78.22501881954105,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785683,
        "lng": 121.007353,
        "ele": 79.25,
        "distanceKm": 12.893239393370035,
        "gradePct": 3.071547687535738,
        "smoothedEle": 80.36715692635605,
        "gradeBand": "hard"
      },
      {
        "lat": 24.785337,
        "lng": 121.007106,
        "ele": 84.75,
        "distanceKm": 12.939086679823667,
        "gradePct": 7.4714840041604,
        "smoothedEle": 85.46267760317829,
        "gradeBand": "steep"
      },
      {
        "lat": 24.784921,
        "lng": 121.006794,
        "ele": 94.75,
        "distanceKm": 12.995049135309598,
        "gradePct": 12.621710062524985,
        "smoothedEle": 93.19000381040445,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.784513,
        "lng": 121.00662,
        "ele": 97.25,
        "distanceKm": 13.043698652420955,
        "gradePct": 10.278730160943702,
        "smoothedEle": 96.3782314418642,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.784169,
        "lng": 121.006562,
        "ele": 96.5,
        "distanceKm": 13.082395313213553,
        "gradePct": 5.057242817190033,
        "smoothedEle": 96.50000000920892,
        "gradeBand": "hard"
      },
      {
        "lat": 24.783825,
        "lng": 121.006504,
        "ele": 95.75,
        "distanceKm": 13.121091976461864,
        "gradePct": 0.5080383655868861,
        "smoothedEle": 95.40474988232515,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.783443,
        "lng": 121.006495,
        "ele": 93.75,
        "distanceKm": 13.1635782134125,
        "gradePct": -2.076250005793192,
        "smoothedEle": 94.36453736755969,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782975,
        "lng": 121.00657866666667,
        "ele": 93.91666666666667,
        "distanceKm": 13.216298528933224,
        "gradePct": -1.623754452861752,
        "smoothedEle": 93.91666666241349,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782507,
        "lng": 121.00666233333334,
        "ele": 94.08333333333333,
        "distanceKm": 13.269018849557781,
        "gradePct": -0.23498463476768536,
        "smoothedEle": 94.08333332908086,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782039,
        "lng": 121.006746,
        "ele": 94.25,
        "distanceKm": 13.32173917528532,
        "gradePct": 0.8002636351105992,
        "smoothedEle": 94.73413001067601,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.781517,
        "lng": 121.006717,
        "ele": 96.75,
        "distanceKm": 13.37985679614641,
        "gradePct": 2.217548004458927,
        "smoothedEle": 96.43466843704967,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.781037122882918,
        "lng": 121.00654566047598,
        "ele": 97.69837374917549,
        "distanceKm": 13.435950440352176,
        "gradePct": 2.461338494123078,
        "smoothedEle": 97.61129423846657,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.780558,
        "lng": 121.006372,
        "ele": 98.25,
        "distanceKm": 13.492037132964755,
        "gradePct": 1.4387169535218243,
        "smoothedEle": 98.12888133442284,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.78013,
        "lng": 121.006273,
        "ele": 98.25,
        "distanceKm": 13.540666794724364,
        "gradePct": 0.5951816375515641,
        "smoothedEle": 98.24999999999999,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.779607,
        "lng": 121.006307,
        "ele": 98.25,
        "distanceKm": 13.598923034087184,
        "gradePct": 0.036029110435080856,
        "smoothedEle": 98.18206070099927,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778992,
        "lng": 121.006555,
        "ele": 97.75,
        "distanceKm": 13.671747314486897,
        "gradePct": -0.17736371742020715,
        "smoothedEle": 98.03638971485863,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77868,
        "lng": 121.006785,
        "ele": 98.5,
        "distanceKm": 13.71349387025812,
        "gradePct": 0.21584686825909294,
        "smoothedEle": 98.36876141000675,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.778320500000003,
        "lng": 121.007137,
        "ele": 98.875,
        "distanceKm": 13.76698089646363,
        "gradePct": 0.8290758531111664,
        "smoothedEle": 98.87499987177611,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777961,
        "lng": 121.007489,
        "ele": 99.25,
        "distanceKm": 13.820467991055223,
        "gradePct": 1.1413478632151353,
        "smoothedEle": 99.57611720888377,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777567,
        "lng": 121.007941,
        "ele": 101.5,
        "distanceKm": 13.8837276438086,
        "gradePct": 2.3955455048204555,
        "smoothedEle": 101.49006440251063,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777329541852545,
        "lng": 121.00825260358661,
        "ele": 102.86909065263771,
        "distanceKm": 13.924798995328242,
        "gradePct": 3.0912007020521313,
        "smoothedEle": 102.79835425263458,
        "gradeBand": "hard"
      },
      {
        "lat": 24.777104,
        "lng": 121.008576,
        "ele": 104,
        "distanceKm": 13.965969008679371,
        "gradePct": 3.0333857976569583,
        "smoothedEle": 103.9861552832837,
        "gradeBand": "hard"
      },
      {
        "lat": 24.776921,
        "lng": 121.008873,
        "ele": 105,
        "distanceKm": 14.002206570216229,
        "gradePct": 2.743052686915415,
        "smoothedEle": 104.82174616944857,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776668,
        "lng": 121.009426,
        "ele": 105.75,
        "distanceKm": 14.064724340412422,
        "gradePct": 1.6630606934844738,
        "smoothedEle": 105.61330590217845,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776459603610814,
        "lng": 121.00994191824424,
        "ele": 105.76797702209939,
        "distanceKm": 14.12173319403286,
        "gradePct": 0.9598367327209762,
        "smoothedEle": 106.02881643402624,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776266,
        "lng": 121.010465,
        "ele": 107,
        "distanceKm": 14.178762619519611,
        "gradePct": 0.8751982709359285,
        "smoothedEle": 106.59082254030858,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776139,
        "lng": 121.010859,
        "ele": 106.5,
        "distanceKm": 14.220973105990872,
        "gradePct": -0.16475038648047816,
        "smoothedEle": 105.85852612582272,
        "gradeBand": "descent"
      },
      {
        "lat": 24.776059,
        "lng": 121.011216,
        "ele": 104,
        "distanceKm": 14.258097293350941,
        "gradePct": -2.2487316780955746,
        "smoothedEle": 104.13844091490981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775998,
        "lng": 121.011631,
        "ele": 101.75,
        "distanceKm": 14.300541138409667,
        "gradePct": -4.462993657459096,
        "smoothedEle": 101.75000022866284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775937,
        "lng": 121.012046,
        "ele": 99.5,
        "distanceKm": 14.34298500379398,
        "gradePct": -4.691136280132315,
        "smoothedEle": 100.14750651442647,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775903,
        "lng": 121.012506,
        "ele": 99.5,
        "distanceKm": 14.389580225175216,
        "gradePct": -2.655214520009191,
        "smoothedEle": 99.71158871251352,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775937,
        "lng": 121.012681,
        "ele": 99.5,
        "distanceKm": 14.407648188560279,
        "gradePct": -1.4648284859188774,
        "smoothedEle": 100.01684078160282,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775849,
        "lng": 121.012962,
        "ele": 100.75,
        "distanceKm": 14.437658067787991,
        "gradePct": 0.16783476704533545,
        "smoothedEle": 100.51646296038685,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775825,
        "lng": 121.013039,
        "ele": 101.25,
        "distanceKm": 14.445877298622156,
        "gradePct": 0.5193035373752952,
        "smoothedEle": 100.63975142289931,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775744,
        "lng": 121.0131,
        "ele": 101.25,
        "distanceKm": 14.456788320769942,
        "gradePct": 0.7850460494035217,
        "smoothedEle": 100.80341675511609,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775674,
        "lng": 121.013099,
        "ele": 101.25,
        "distanceKm": 14.464572631125275,
        "gradePct": 0.9552633215292622,
        "smoothedEle": 100.90080854516629,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775454,
        "lng": 121.01302,
        "ele": 101,
        "distanceKm": 14.490302938289945,
        "gradePct": 0.7027126744847604,
        "smoothedEle": 100.42651137818143,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775162508681177,
        "lng": 121.01268314302794,
        "ele": 98.51410216786856,
        "distanceKm": 14.537283702763114,
        "gradePct": -1.7380554647521993,
        "smoothedEle": 98.77217484578057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774893,
        "lng": 121.012324,
        "ele": 97,
        "distanceKm": 14.584324352478388,
        "gradePct": -2.831257951911904,
        "smoothedEle": 97.70545911852379,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774566350757425,
        "lng": 121.01192365060868,
        "ele": 98.3339516104097,
        "distanceKm": 14.63866605711411,
        "gradePct": -0.40229715149755096,
        "smoothedEle": 98.33853078186206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774239513068068,
        "lng": 121.01152348795651,
        "ele": 99.68796370780727,
        "distanceKm": 14.693007830692771,
        "gradePct": 1.881343002145989,
        "smoothedEle": 99.6879631724548,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773912675378714,
        "lng": 121.01112332530434,
        "ele": 101.04197580520484,
        "distanceKm": 14.747349683347903,
        "gradePct": 2.487809889855834,
        "smoothedEle": 101.04197526985479,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773585837689357,
        "lng": 121.01072316265217,
        "ele": 102.39598790260243,
        "distanceKm": 14.801691615079147,
        "gradePct": 2.4916541496950746,
        "smoothedEle": 102.39598736726013,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773259,
        "lng": 121.010323,
        "ele": 103.75,
        "distanceKm": 14.856033625885356,
        "gradePct": 1.9840629853927891,
        "smoothedEle": 103.2424119260813,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.772942,
        "lng": 121.010014,
        "ele": 103,
        "distanceKm": 14.903105432455359,
        "gradePct": 0.47833068993729627,
        "smoothedEle": 102.89633950489802,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.772780292647752,
        "lng": 121.01040214807911,
        "ele": 101.9376807108129,
        "distanceKm": 14.946222116198214,
        "gradePct": -1.045354666017236,
        "smoothedEle": 102.04423437708456,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772618,
        "lng": 121.01079,
        "ele": 101.25,
        "distanceKm": 14.989338870494953,
        "gradePct": -1.454239636023322,
        "smoothedEle": 101.5433117784266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772353,
        "lng": 121.011318,
        "ele": 101.75,
        "distanceKm": 15.050249180801444,
        "gradePct": -0.08339749949783512,
        "smoothedEle": 101.914051174467,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771996,
        "lng": 121.011829,
        "ele": 103.25,
        "distanceKm": 15.11534579430801,
        "gradePct": 1.2410832079417744,
        "smoothedEle": 102.94268988223749,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771757333333333,
        "lng": 121.01219333333334,
        "ele": 103.08333333333333,
        "distanceKm": 15.160704131433915,
        "gradePct": 1.004075964281359,
        "smoothedEle": 103.08333338111771,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77151866666667,
        "lng": 121.01255766666667,
        "ele": 102.91666666666667,
        "distanceKm": 15.20606252590107,
        "gradePct": 0.12066847566075056,
        "smoothedEle": 102.91666671445296,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77128,
        "lng": 121.012922,
        "ele": 102.75,
        "distanceKm": 15.251420977711781,
        "gradePct": 0.32609370610767147,
        "smoothedEle": 103.3806426276783,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770857,
        "lng": 121.013468,
        "ele": 107,
        "distanceKm": 15.32388648339709,
        "gradePct": 2.8905559328385624,
        "smoothedEle": 105.98954560203029,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770311,
        "lng": 121.013884,
        "ele": 103.75,
        "distanceKm": 15.397711320702784,
        "gradePct": -1.9143251717311995,
        "smoothedEle": 103.1328622812527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769932,
        "lng": 121.014109,
        "ele": 99.75,
        "distanceKm": 15.445587115076298,
        "gradePct": -3.8512798285935186,
        "smoothedEle": 101.29855064732497,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769453470173744,
        "lng": 121.01441495472662,
        "ele": 102.38075482236546,
        "distanceKm": 15.507114009905655,
        "gradePct": -0.24987065315757295,
        "smoothedEle": 102.52273729872627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768976,
        "lng": 121.014723,
        "ele": 105.75,
        "distanceKm": 15.568645511652226,
        "gradePct": 3.2680721191050823,
        "smoothedEle": 105.02541044569223,
        "gradeBand": "hard"
      },
      {
        "lat": 24.768669499999998,
        "lng": 121.01490600000001,
        "ele": 105.5,
        "distanceKm": 15.607413077130836,
        "gradePct": 2.9650987556416304,
        "smoothedEle": 105.50000002716808,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.768363,
        "lng": 121.015089,
        "ele": 105.25,
        "distanceKm": 15.646180664343913,
        "gradePct": 1.5089056004674628,
        "smoothedEle": 105.62060244396666,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767993,
        "lng": 121.01532850000001,
        "ele": 106.37500000000003,
        "distanceKm": 15.693902988258046,
        "gradePct": 1.04038924563341,
        "smoothedEle": 106.3749997946467,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767623,
        "lng": 121.015568,
        "ele": 107.5,
        "distanceKm": 15.741625348679436,
        "gradePct": 2.3592255521199177,
        "smoothedEle": 107.96565682584075,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.76724061745231,
        "lng": 121.01582729159155,
        "ele": 110.53477787489257,
        "distanceKm": 15.791557859077923,
        "gradePct": 4.176664928646248,
        "smoothedEle": 110.5145927809527,
        "gradeBand": "hard"
      },
      {
        "lat": 24.766882,
        "lng": 121.016128,
        "ele": 113.5,
        "distanceKm": 15.841677383125129,
        "gradePct": 5.34390102391213,
        "smoothedEle": 113.31221408450797,
        "gradeBand": "hard"
      },
      {
        "lat": 24.766557858897052,
        "lng": 121.016471162231,
        "ele": 115.70680897291408,
        "distanceKm": 15.891673278029442,
        "gradePct": 5.344030793412235,
        "smoothedEle": 115.86506614387737,
        "gradeBand": "hard"
      },
      {
        "lat": 24.76624790593137,
        "lng": 121.01683177482066,
        "ele": 118.55453931527612,
        "distanceKm": 15.94180867537097,
        "gradePct": 5.235620347067955,
        "smoothedEle": 118.55453837558605,
        "gradeBand": "hard"
      },
      {
        "lat": 24.765937952965682,
        "lng": 121.01719238741033,
        "ele": 121.40226965763806,
        "distanceKm": 15.991944138708213,
        "gradePct": 5.522672475353707,
        "smoothedEle": 121.40226871798055,
        "gradeBand": "hard"
      },
      {
        "lat": 24.765628,
        "lng": 121.017553,
        "ele": 124.25,
        "distanceKm": 16.04207966803889,
        "gradePct": 5.342652153041489,
        "smoothedEle": 123.91258310688725,
        "gradeBand": "hard"
      },
      {
        "lat": 24.765315544413166,
        "lng": 121.0177908576403,
        "ele": 125.54003002099122,
        "distanceKm": 16.084315750691427,
        "gradePct": 4.228721186803939,
        "smoothedEle": 125.19769198405257,
        "gradeBand": "hard"
      },
      {
        "lat": 24.764981272206583,
        "lng": 121.01799242882015,
        "ele": 125.64501501049561,
        "distanceKm": 16.12669246426629,
        "gradePct": 2.502877909838226,
        "smoothedEle": 125.6450149966859,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764647,
        "lng": 121.018194,
        "ele": 125.75,
        "distanceKm": 16.169069204149142,
        "gradePct": 0.583936045963546,
        "smoothedEle": 125.31772439414165,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.764372,
        "lng": 121.018376,
        "ele": 124.5,
        "distanceKm": 16.204744769098696,
        "gradePct": -0.3768940396258617,
        "smoothedEle": 125.03644397471493,
        "gradeBand": "descent"
      },
      {
        "lat": 24.764013,
        "lng": 121.018607,
        "ele": 125,
        "distanceKm": 16.250978266838835,
        "gradePct": 0.40658438765435667,
        "smoothedEle": 125.86403151151164,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.763671,
        "lng": 121.01867,
        "ele": 128.25,
        "distanceKm": 16.289535327321218,
        "gradePct": 2.963307469385271,
        "smoothedEle": 128.119668764778,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.763084,
        "lng": 121.018663,
        "ele": 133.25,
        "distanceKm": 16.354810666043644,
        "gradePct": 7.087789792174943,
        "smoothedEle": 133.17602154892325,
        "gradeBand": "steep"
      },
      {
        "lat": 24.762593,
        "lng": 121.018647,
        "ele": 136.75,
        "distanceKm": 16.409431347137204,
        "gradePct": 6.295009344991992,
        "smoothedEle": 135.95586191913728,
        "gradeBand": "steep"
      },
      {
        "lat": 24.762228,
        "lng": 121.018647,
        "ele": 136.75,
        "distanceKm": 16.450017551422288,
        "gradePct": 3.8952469115287456,
        "smoothedEle": 136.69998461980458,
        "gradeBand": "hard"
      },
      {
        "lat": 24.76169,
        "lng": 121.018691,
        "ele": 136.5,
        "distanceKm": 16.510005247265962,
        "gradePct": 0.8796855537361682,
        "smoothedEle": 136.84606957320892,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.761153,
        "lng": 121.018789,
        "ele": 138,
        "distanceKm": 16.57053135486416,
        "gradePct": 1.0773626666824743,
        "smoothedEle": 137.82730349797018,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7607055,
        "lng": 121.018883,
        "ele": 138.5,
        "distanceKm": 16.621188278470672,
        "gradePct": 1.472633941612266,
        "smoothedEle": 138.49999998398405,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.760258,
        "lng": 121.018977,
        "ele": 139,
        "distanceKm": 16.671845208483564,
        "gradePct": 0.7985295481819776,
        "smoothedEle": 138.6432803100203,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.759648,
        "lng": 121.019096,
        "ele": 137.5,
        "distanceKm": 16.74073027314864,
        "gradePct": -1.3829702459026494,
        "smoothedEle": 137.1723031896732,
        "gradeBand": "descent"
      },
      {
        "lat": 24.759333,
        "lng": 121.019173,
        "ele": 135.75,
        "distanceKm": 16.776609264538497,
        "gradePct": -2.0704134185703245,
        "smoothedEle": 136.47113486156903,
        "gradeBand": "descent"
      },
      {
        "lat": 24.759022,
        "lng": 121.019271,
        "ele": 136.25,
        "distanceKm": 16.812578850046393,
        "gradePct": -1.0504454690514955,
        "smoothedEle": 136.72300543660273,
        "gradeBand": "descent"
      },
      {
        "lat": 24.758558471475308,
        "lng": 121.0195447914857,
        "ele": 139.3001326438161,
        "distanceKm": 16.871067116180228,
        "gradePct": 2.6462635867622075,
        "smoothedEle": 139.22570636747673,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.758085,
        "lng": 121.0198,
        "ele": 142,
        "distanceKm": 16.929683216692425,
        "gradePct": 4.5154106638427365,
        "smoothedEle": 141.9703084466655,
        "gradeBand": "hard"
      },
      {
        "lat": 24.757733,
        "lng": 121.019856,
        "ele": 143.75,
        "distanceKm": 16.969230228902816,
        "gradePct": 4.174060765852798,
        "smoothedEle": 143.32116710287949,
        "gradeBand": "hard"
      },
      {
        "lat": 24.757394007294604,
        "lng": 121.01979784552414,
        "ele": 144.07378036656516,
        "distanceKm": 17.007379198773464,
        "gradePct": 2.483693579750131,
        "smoothedEle": 143.40965323112331,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.757056,
        "lng": 121.019733,
        "ele": 142.25,
        "distanceKm": 17.045530041962387,
        "gradePct": 1.425893218551388,
        "smoothedEle": 143.9375022564108,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.756772,
        "lng": 121.0199,
        "ele": 145.75,
        "distanceKm": 17.08132970670481,
        "gradePct": 1.4749694280371917,
        "smoothedEle": 144.82420114047497,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.756362,
        "lng": 121.020024,
        "ele": 146.5,
        "distanceKm": 17.12860783804278,
        "gradePct": 2.8328529004981418,
        "smoothedEle": 146.53622222305876,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.756195,
        "lng": 121.020348,
        "ele": 147.25,
        "distanceKm": 17.166226709898417,
        "gradePct": 3.957868886589524,
        "smoothedEle": 148.40799360733806,
        "gradeBand": "hard"
      },
      {
        "lat": 24.756297,
        "lng": 121.020824,
        "ele": 152.75,
        "distanceKm": 17.21561133397553,
        "gradePct": 5.800739351911832,
        "smoothedEle": 151.86633618574027,
        "gradeBand": "hard"
      },
      {
        "lat": 24.756218,
        "lng": 121.021499,
        "ele": 156,
        "distanceKm": 17.284333855598938,
        "gradePct": 5.3987235529821564,
        "smoothedEle": 155.07473760432845,
        "gradeBand": "hard"
      },
      {
        "lat": 24.756001,
        "lng": 121.021959,
        "ele": 154.25,
        "distanceKm": 17.336676327364433,
        "gradePct": 2.2988492908559652,
        "smoothedEle": 155.14863243219344,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.755956,
        "lng": 121.022075,
        "ele": 154,
        "distanceKm": 17.349413586069947,
        "gradePct": 2.024272998344543,
        "smoothedEle": 155.46871183528697,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.755994,
        "lng": 121.022289,
        "ele": 156.25,
        "distanceKm": 17.37143173650251,
        "gradePct": 2.3083206024945424,
        "smoothedEle": 156.7807057867734,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.75620493452279,
        "lng": 121.02265830248238,
        "ele": 161.09024437386168,
        "distanceKm": 17.415485447873696,
        "gradePct": 5.150456346703249,
        "smoothedEle": 160.26917241577024,
        "gradeBand": "hard"
      },
      {
        "lat": 24.756426,
        "lng": 121.023022,
        "ele": 163,
        "distanceKm": 17.45967761796234,
        "gradePct": 6.308623215340699,
        "smoothedEle": 162.38893718323754,
        "gradeBand": "steep"
      },
      {
        "lat": 24.756567,
        "lng": 121.023359,
        "ele": 162.75,
        "distanceKm": 17.497144633175527,
        "gradePct": 3.7316234955748406,
        "smoothedEle": 162.5484479017962,
        "gradeBand": "hard"
      },
      {
        "lat": 24.756721,
        "lng": 121.023761,
        "ele": 161.75,
        "distanceKm": 17.541200967338067,
        "gradePct": -0.5290456837776599,
        "smoothedEle": 160.97362244013163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756795,
        "lng": 121.024098,
        "ele": 158.5,
        "distanceKm": 17.576210451088492,
        "gradePct": -4.284741457494898,
        "smoothedEle": 158.17458201290097,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756926,
        "lng": 121.024452,
        "ele": 154,
        "distanceKm": 17.614809834370515,
        "gradePct": -7.380424413949081,
        "smoothedEle": 154.53656812152772,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757209,
        "lng": 121.024811,
        "ele": 150.75,
        "distanceKm": 17.662813172547335,
        "gradePct": -7.510756339536336,
        "smoothedEle": 151.7349504154173,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757518,
        "lng": 121.02533,
        "ele": 151.5,
        "distanceKm": 17.725478596336504,
        "gradePct": -2.506683737209862,
        "smoothedEle": 151.40722367859584,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75761770282764,
        "lng": 121.0257073048193,
        "ele": 151.65658900913598,
        "distanceKm": 17.765157198753084,
        "gradePct": 0.06535948461521364,
        "smoothedEle": 151.78805114531608,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.757681,
        "lng": 121.026095,
        "ele": 152.25,
        "distanceKm": 17.80493233661956,
        "gradePct": 1.279254601121163,
        "smoothedEle": 152.7939308148435,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.757621,
        "lng": 121.026443,
        "ele": 154.5,
        "distanceKm": 17.840699333027562,
        "gradePct": 2.80424533288259,
        "smoothedEle": 154.35755466577683,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.757518,
        "lng": 121.026843,
        "ele": 156.5,
        "distanceKm": 17.882681737408877,
        "gradePct": 4.159968526223507,
        "smoothedEle": 156.39120046480005,
        "gradeBand": "hard"
      },
      {
        "lat": 24.757543,
        "lng": 121.027299,
        "ele": 158.25,
        "distanceKm": 17.92881014643895,
        "gradePct": 2.469590593446633,
        "smoothedEle": 156.3073863310179,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.757299,
        "lng": 121.027673,
        "ele": 152.75,
        "distanceKm": 17.975310610148217,
        "gradePct": -2.636495614798539,
        "smoothedEle": 153.3976442621524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75701312467841,
        "lng": 121.02797250474953,
        "ele": 149.81510609443646,
        "distanceKm": 18.019186401754762,
        "gradePct": -6.045962185710123,
        "smoothedEle": 150.2789102420842,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756732062339204,
        "lng": 121.02827775237476,
        "ele": 148.5325530472182,
        "distanceKm": 18.06308130123276,
        "gradePct": -5.630333476756425,
        "smoothedEle": 148.53255336118914,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756451,
        "lng": 121.028583,
        "ele": 147.25,
        "distanceKm": 18.106976249671064,
        "gradePct": -1.6997180747529557,
        "smoothedEle": 149.44710167504164,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756069,
        "lng": 121.02889,
        "ele": 155,
        "distanceKm": 18.15956171674674,
        "gradePct": 5.770277080717736,
        "smoothedEle": 154.44285697478776,
        "gradeBand": "hard"
      },
      {
        "lat": 24.755654,
        "lng": 121.029047,
        "ele": 160,
        "distanceKm": 18.20835491172253,
        "gradePct": 9.912843469825505,
        "smoothedEle": 159.49092160344384,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.755329,
        "lng": 121.029173,
        "ele": 162.5,
        "distanceKm": 18.246667573398597,
        "gradePct": 8.583095683167263,
        "smoothedEle": 161.8009757099615,
        "gradeBand": "steep"
      },
      {
        "lat": 24.754951,
        "lng": 121.029224,
        "ele": 162.75,
        "distanceKm": 18.289013622190037,
        "gradePct": 4.545428761701479,
        "smoothedEle": 162.0353319934231,
        "gradeBand": "hard"
      },
      {
        "lat": 24.754584,
        "lng": 121.029213,
        "ele": 160.5,
        "distanceKm": 18.32983733030044,
        "gradePct": 1.8802953402073417,
        "smoothedEle": 162.6664949818468,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.75449,
        "lng": 121.029275,
        "ele": 161.25,
        "distanceKm": 18.342021189761827,
        "gradePct": 1.8767035914532944,
        "smoothedEle": 163.39752654953006,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.754423,
        "lng": 121.029376,
        "ele": 163,
        "distanceKm": 18.35465121156881,
        "gradePct": 2.4502169020162166,
        "smoothedEle": 164.29537656357354,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.754348,
        "lng": 121.029649,
        "ele": 168.75,
        "distanceKm": 18.383451921990176,
        "gradePct": 6.359506815107972,
        "smoothedEle": 168.36405861945175,
        "gradeBand": "steep"
      },
      {
        "lat": 24.754161,
        "lng": 121.029963,
        "ele": 175,
        "distanceKm": 18.421368942567465,
        "gradePct": 9.689003982097862,
        "smoothedEle": 172.22457178569286,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.753716,
        "lng": 121.030311,
        "ele": 170.75,
        "distanceKm": 18.48205905516288,
        "gradePct": 4.4817826453003065,
        "smoothedEle": 172.64907069265348,
        "gradeBand": "hard"
      },
      {
        "lat": 24.753414,
        "lng": 121.030634,
        "ele": 174.75,
        "distanceKm": 18.528872275897587,
        "gradePct": 2.4077749869348337,
        "smoothedEle": 174.68482907429077,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.753122,
        "lng": 121.030967,
        "ele": 178.5,
        "distanceKm": 18.575615494052443,
        "gradePct": 4.188247810882754,
        "smoothedEle": 176.79224881209333,
        "gradeBand": "hard"
      },
      {
        "lat": 24.752721,
        "lng": 121.031154,
        "ele": 175.75,
        "distanceKm": 18.62403829199351,
        "gradePct": 0.6407800211576864,
        "smoothedEle": 175.11539447882993,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.752337,
        "lng": 121.031232,
        "ele": 171,
        "distanceKm": 18.667457574120654,
        "gradePct": -3.842946430502112,
        "smoothedEle": 172.58150225651823,
        "gradeBand": "descent"
      },
      {
        "lat": 24.752067,
        "lng": 121.031658,
        "ele": 172,
        "distanceKm": 18.71991553271306,
        "gradePct": -4.89991537352178,
        "smoothedEle": 170.35824794681207,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751759,
        "lng": 121.031929,
        "ele": 167,
        "distanceKm": 18.763753858867062,
        "gradePct": -4.8696989809893,
        "smoothedEle": 167.92794722851397,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751527,
        "lng": 121.032185,
        "ele": 165.5,
        "distanceKm": 18.800274576515598,
        "gradePct": -5.581712224866556,
        "smoothedEle": 165.60895165433138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751115,
        "lng": 121.032408,
        "ele": 164,
        "distanceKm": 18.851322181408314,
        "gradePct": -4.329530729697121,
        "smoothedEle": 164.28760144970917,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750806,
        "lng": 121.032526,
        "ele": 163.75,
        "distanceKm": 18.887688970531944,
        "gradePct": -2.5785719988181968,
        "smoothedEle": 163.82954151359547,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750605,
        "lng": 121.032611,
        "ele": 163.75,
        "distanceKm": 18.911630684682947,
        "gradePct": -1.6070571374958775,
        "smoothedEle": 163.70794544944684,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750335,
        "lng": 121.032627,
        "ele": 163.75,
        "distanceKm": 18.94169679966902,
        "gradePct": -0.9365678715505945,
        "smoothedEle": 163.6001833699561,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750203,
        "lng": 121.032589,
        "ele": 163.25,
        "distanceKm": 18.956867858188428,
        "gradePct": -0.6175671962183654,
        "smoothedEle": 163.6001833699561,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750605,
        "lng": 121.032611,
        "ele": 163.75,
        "distanceKm": 19.001623451686573,
        "gradePct": 0.33294772890746555,
        "smoothedEle": 164.0917182837625,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.750197,
        "lng": 121.032863,
        "ele": 165.75,
        "distanceKm": 19.05364052168486,
        "gradePct": 2.555718985704792,
        "smoothedEle": 166.15590235566094,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.749935,
        "lng": 121.033148,
        "ele": 168.75,
        "distanceKm": 19.094591744639654,
        "gradePct": 3.8497768214415395,
        "smoothedEle": 167.86426834432194,
        "gradeBand": "hard"
      },
      {
        "lat": 24.749789,
        "lng": 121.03355,
        "ele": 168.75,
        "distanceKm": 19.13831206045076,
        "gradePct": 2.6864719039753213,
        "smoothedEle": 168.23409767798375,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.749565,
        "lng": 121.033873,
        "ele": 167,
        "distanceKm": 19.179351795077476,
        "gradePct": 0.1968625486747414,
        "smoothedEle": 167.4253644952587,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.749024,
        "lng": 121.034083,
        "ele": 166.5,
        "distanceKm": 19.243136664374443,
        "gradePct": -1.787620812353825,
        "smoothedEle": 166.35140273023222,
        "gradeBand": "descent"
      },
      {
        "lat": 24.748724,
        "lng": 121.034223,
        "ele": 165.75,
        "distanceKm": 19.27936730530101,
        "gradePct": -1.2727343776948419,
        "smoothedEle": 166.15236896805885,
        "gradeBand": "descent"
      },
      {
        "lat": 24.748305,
        "lng": 121.034539,
        "ele": 166.5,
        "distanceKm": 19.33583827289209,
        "gradePct": -0.7905989395502675,
        "smoothedEle": 165.68368862974543,
        "gradeBand": "descent"
      },
      {
        "lat": 24.748118,
        "lng": 121.034814,
        "ele": 164.5,
        "distanceKm": 19.370530523019976,
        "gradePct": -0.633025223556947,
        "smoothedEle": 165.56788878753514,
        "gradeBand": "descent"
      },
      {
        "lat": 24.748006,
        "lng": 121.03532,
        "ele": 166.25,
        "distanceKm": 19.423123518584095,
        "gradePct": -0.4568886722126641,
        "smoothedEle": 165.33232595796886,
        "gradeBand": "descent"
      },
      {
        "lat": 24.747809,
        "lng": 121.035681,
        "ele": 164.5,
        "distanceKm": 19.465653489644993,
        "gradePct": 1.8977336651047962,
        "smoothedEle": 167.48190158395013,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.74799,
        "lng": 121.036095,
        "ele": 173.75,
        "distanceKm": 19.512052650061577,
        "gradePct": 8.02364397900385,
        "smoothedEle": 173.4055561049967,
        "gradeBand": "steep"
      },
      {
        "lat": 24.748054,
        "lng": 121.036496,
        "ele": 181,
        "distanceKm": 19.553167272524203,
        "gradePct": 11.859116946352232,
        "smoothedEle": 178.70993256165394,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.747866,
        "lng": 121.036808,
        "ele": 180.5,
        "distanceKm": 19.590978271477756,
        "gradePct": 9.101222850645497,
        "smoothedEle": 179.81627040213652,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.747572,
        "lng": 121.037018,
        "ele": 177.75,
        "distanceKm": 19.629945391442877,
        "gradePct": 2.740000751616652,
        "smoothedEle": 178.45397732707485,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.747119,
        "lng": 121.037408,
        "ele": 177,
        "distanceKm": 19.693885451868287,
        "gradePct": -3.300248111338827,
        "smoothedEle": 176.41438707327276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.746868,
        "lng": 121.037632,
        "ele": 174.75,
        "distanceKm": 19.729810989634334,
        "gradePct": -2.0316924114186743,
        "smoothedEle": 176.4269836117163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.747088,
        "lng": 121.037897,
        "ele": 177.75,
        "distanceKm": 19.766067928862046,
        "gradePct": -0.3383494920473945,
        "smoothedEle": 176.9633740715409,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7474,
        "lng": 121.038317,
        "ele": 178.5,
        "distanceKm": 19.820862600028654,
        "gradePct": 1.7455267413477638,
        "smoothedEle": 178.16937278740232,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.747678,
        "lng": 121.038491,
        "ele": 178,
        "distanceKm": 19.856419708239684,
        "gradePct": -0.10098266634713438,
        "smoothedEle": 176.7196542187033,
        "gradeBand": "descent"
      },
      {
        "lat": 24.747835,
        "lng": 121.038873,
        "ele": 173,
        "distanceKm": 19.898761587808917,
        "gradePct": -5.579088397917366,
        "smoothedEle": 172.10385401607869,
        "gradeBand": "descent"
      },
      {
        "lat": 24.747658,
        "lng": 121.039191,
        "ele": 165.5,
        "distanceKm": 19.936425614617164,
        "gradePct": -10.565905583208995,
        "smoothedEle": 166.96893890959763,
        "gradeBand": "descent"
      },
      {
        "lat": 24.747467,
        "lng": 121.039802,
        "ele": 160.5,
        "distanceKm": 20.001679211213435,
        "gradePct": -11.650283706561487,
        "smoothedEle": 160.0557968964098,
        "gradeBand": "descent"
      },
      {
        "lat": 24.747745000000002,
        "lng": 121.0402445,
        "ele": 154.75,
        "distanceKm": 20.056014404650536,
        "gradePct": -10.14365202524996,
        "smoothedEle": 154.74999763699668,
        "gradeBand": "descent"
      },
      {
        "lat": 24.748023,
        "lng": 121.040687,
        "ele": 149,
        "distanceKm": 20.110349515896218,
        "gradePct": -10.309237727019417,
        "smoothedEle": 148.89990908397115,
        "gradeBand": "descent"
      },
      {
        "lat": 24.74825178385308,
        "lng": 121.0410478335938,
        "ele": 143.91378178973216,
        "distanceKm": 20.154789317363516,
        "gradePct": -10.955846289318131,
        "smoothedEle": 143.9137803911955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.748480567706164,
        "lng": 121.04140866718758,
        "ele": 138.8275635794639,
        "distanceKm": 20.199229063837635,
        "gradePct": -10.919996334078819,
        "smoothedEle": 139.177216441758,
        "gradeBand": "descent"
      },
      {
        "lat": 24.74871,
        "lng": 121.041769,
        "ele": 135,
        "distanceKm": 20.24366865409483,
        "gradePct": -8.774740339804357,
        "smoothedEle": 136.3867742080682,
        "gradeBand": "descent"
      },
      {
        "lat": 24.74906,
        "lng": 121.042317,
        "ele": 137,
        "distanceKm": 20.31132173368384,
        "gradePct": -0.9072650662753445,
        "smoothedEle": 137.51063076830283,
        "gradeBand": "descent"
      },
      {
        "lat": 24.749248,
        "lng": 121.042647,
        "ele": 139.75,
        "distanceKm": 20.350659917508363,
        "gradePct": 3.571097466993826,
        "smoothedEle": 140.07401091512858,
        "gradeBand": "hard"
      },
      {
        "lat": 24.749584,
        "lng": 121.043182,
        "ele": 146.5,
        "distanceKm": 20.416345520840473,
        "gradePct": 7.503895080090793,
        "smoothedEle": 145.34188911245877,
        "gradeBand": "steep"
      },
      {
        "lat": 24.75013,
        "lng": 121.043048,
        "ele": 146.5,
        "distanceKm": 20.478547692780136,
        "gradePct": 3.282490252923064,
        "smoothedEle": 145.59305523581946,
        "gradeBand": "hard"
      },
      {
        "lat": 24.750534,
        "lng": 121.042796,
        "ele": 142.75,
        "distanceKm": 20.53017730535717,
        "gradePct": -2.5599109177611785,
        "smoothedEle": 142.83782955145708,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750827,
        "lng": 121.042483,
        "ele": 139.75,
        "distanceKm": 20.57556962450893,
        "gradePct": -4.5127775551910005,
        "smoothedEle": 141.0682525400351,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751016,
        "lng": 121.042112,
        "ele": 141.5,
        "distanceKm": 20.61852535853048,
        "gradePct": -2.7801325073598266,
        "smoothedEle": 140.67950576136826,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751111,
        "lng": 121.041774,
        "ele": 140.5,
        "distanceKm": 20.654253976266418,
        "gradePct": -0.22464916936817436,
        "smoothedEle": 141.67457393613643,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751429,
        "lng": 121.04146,
        "ele": 143.75,
        "distanceKm": 20.701748313200806,
        "gradePct": 1.671992940250367,
        "smoothedEle": 142.50332994082382,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.751672,
        "lng": 121.041209,
        "ele": 142.5,
        "distanceKm": 20.738795827703218,
        "gradePct": -0.45652045621991344,
        "smoothedEle": 140.78753271950634,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75183,
        "lng": 121.040855,
        "ele": 135.5,
        "distanceKm": 20.77862667585026,
        "gradePct": -5.173849273448139,
        "smoothedEle": 136.92601791730198,
        "gradeBand": "descent"
      },
      {
        "lat": 24.752026,
        "lng": 121.040528,
        "ele": 133.25,
        "distanceKm": 20.818190907179005,
        "gradePct": -8.66902819881229,
        "smoothedEle": 133.07278892696934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751517,
        "lng": 121.040341,
        "ele": 129,
        "distanceKm": 20.877856155622197,
        "gradePct": -6.988114114024527,
        "smoothedEle": 130.01260407717254,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750995,
        "lng": 121.040266,
        "ele": 129.75,
        "distanceKm": 20.936391993864742,
        "gradePct": -1.8016708224078315,
        "smoothedEle": 130.33759832246324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750859,
        "lng": 121.040191,
        "ele": 130.25,
        "distanceKm": 20.95330498248627,
        "gradePct": -0.21541458607694303,
        "smoothedEle": 131.05640033887815,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750771,
        "lng": 121.040046,
        "ele": 132,
        "distanceKm": 20.970915838414648,
        "gradePct": 1.5749120872469353,
        "smoothedEle": 131.9434797131434,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.750756,
        "lng": 121.039971,
        "ele": 132.75,
        "distanceKm": 20.97867086076606,
        "gradePct": 2.507979023836832,
        "smoothedEle": 132.5251063894992,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.750766,
        "lng": 121.039912,
        "ele": 133.25,
        "distanceKm": 20.984731583443583,
        "gradePct": 2.928883753632463,
        "smoothedEle": 132.97966059031356,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.751078,
        "lng": 121.039424,
        "ele": 137.25,
        "distanceKm": 21.04499728214356,
        "gradePct": 6.719617577457587,
        "smoothedEle": 137.42294065177057,
        "gradeBand": "steep"
      },
      {
        "lat": 24.751249,
        "lng": 121.039199,
        "ele": 140,
        "distanceKm": 21.074624432851113,
        "gradePct": 6.9920147515668845,
        "smoothedEle": 139.21363904744518,
        "gradeBand": "steep"
      },
      {
        "lat": 24.751707,
        "lng": 121.039113,
        "ele": 140.75,
        "distanceKm": 21.12628690612677,
        "gradePct": 5.753493568916216,
        "smoothedEle": 141.79695231819287,
        "gradeBand": "hard"
      },
      {
        "lat": 24.751833,
        "lng": 121.038898,
        "ele": 143.25,
        "distanceKm": 21.15212577712308,
        "gradePct": 5.6517681949285405,
        "smoothedEle": 143.5055631211922,
        "gradeBand": "hard"
      },
      {
        "lat": 24.751882,
        "lng": 121.038608,
        "ele": 146.5,
        "distanceKm": 21.181912408615812,
        "gradePct": 6.831695108380091,
        "smoothedEle": 146.40975969173368,
        "gradeBand": "steep"
      },
      {
        "lat": 24.751849,
        "lng": 121.03823,
        "ele": 150.5,
        "distanceKm": 21.220258645855584,
        "gradePct": 6.538332309336105,
        "smoothedEle": 148.03384948959084,
        "gradeBand": "steep"
      },
      {
        "lat": 24.751882,
        "lng": 121.038608,
        "ele": 146.5,
        "distanceKm": 21.258604883095355,
        "gradePct": 2.2920149359882727,
        "smoothedEle": 146.42929088947733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.75175,
        "lng": 121.039059,
        "ele": 141.5,
        "distanceKm": 21.30645350846627,
        "gradePct": -5.120049348664436,
        "smoothedEle": 142.32910697659287,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751707,
        "lng": 121.039113,
        "ele": 140.75,
        "distanceKm": 21.3137058050069,
        "gradePct": -5.898607335337603,
        "smoothedEle": 141.85770770145183,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751249,
        "lng": 121.039199,
        "ele": 140,
        "distanceKm": 21.365368278282556,
        "gradePct": -6.72954416729154,
        "smoothedEle": 139.1201864123948,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75102863628362,
        "lng": 121.03949689758116,
        "ele": 136.53250412239132,
        "distanceKm": 21.404166803196553,
        "gradePct": -5.871798722161175,
        "smoothedEle": 136.65325771144788,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75082,
        "lng": 121.039805,
        "ele": 133.5,
        "distanceKm": 21.44297637043064,
        "gradePct": -6.638514399702805,
        "smoothedEle": 133.6681874959937,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750766,
        "lng": 121.039912,
        "ele": 133.25,
        "distanceKm": 21.455337615404844,
        "gradePct": -6.76273727559526,
        "smoothedEle": 132.88895975621136,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750756,
        "lng": 121.039971,
        "ele": 132.75,
        "distanceKm": 21.46139833808237,
        "gradePct": -6.868817834107108,
        "smoothedEle": 132.4617300868494,
        "gradeBand": "descent"
      },
      {
        "lat": 24.750859,
        "lng": 121.040191,
        "ele": 130.25,
        "distanceKm": 21.486392539590383,
        "gradePct": -6.6947533959683945,
        "smoothedEle": 131.08864627642907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751180588249476,
        "lng": 121.04029266497838,
        "ele": 129.4833502162691,
        "distanceKm": 21.523596063568746,
        "gradePct": -5.577795424248598,
        "smoothedEle": 129.58104452944602,
        "gradeBand": "descent"
      },
      {
        "lat": 24.751517,
        "lng": 121.040341,
        "ele": 129,
        "distanceKm": 21.561320476529268,
        "gradePct": -2.4596006046600327,
        "smoothedEle": 130.00761806290117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.752026,
        "lng": 121.040528,
        "ele": 133.25,
        "distanceKm": 21.62098572497246,
        "gradePct": 1.8799469543797915,
        "smoothedEle": 131.56677046944745,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.752326,
        "lng": 121.04023,
        "ele": 130.25,
        "distanceKm": 21.665911320974438,
        "gradePct": -0.03300828909334494,
        "smoothedEle": 130.09457619230986,
        "gradeBand": "descent"
      },
      {
        "lat": 24.752637,
        "lng": 121.039962,
        "ele": 126.75,
        "distanceKm": 21.70982332853669,
        "gradePct": -3.1371510774788884,
        "smoothedEle": 128.13792736487125,
        "gradeBand": "descent"
      },
      {
        "lat": 24.752878,
        "lng": 121.039594,
        "ele": 128.25,
        "distanceKm": 21.755638328908613,
        "gradePct": -3.2636471879606965,
        "smoothedEle": 127.16757095179756,
        "gradeBand": "descent"
      },
      {
        "lat": 24.753022,
        "lng": 121.039232,
        "ele": 126,
        "distanceKm": 21.795545746598226,
        "gradePct": -2.525991080407031,
        "smoothedEle": 126.24812250116022,
        "gradeBand": "descent"
      },
      {
        "lat": 24.753036,
        "lng": 121.038807,
        "ele": 124.5,
        "distanceKm": 21.838489873287337,
        "gradePct": -3.975425573256132,
        "smoothedEle": 123.55534768676647,
        "gradeBand": "descent"
      },
      {
        "lat": 24.753257,
        "lng": 121.038402,
        "ele": 119.25,
        "distanceKm": 21.88620144040866,
        "gradePct": -6.1474565465564535,
        "smoothedEle": 120.31595444846471,
        "gradeBand": "descent"
      },
      {
        "lat": 24.753441,
        "lng": 121.03794,
        "ele": 118,
        "distanceKm": 21.93714273407255,
        "gradePct": -5.20922171927148,
        "smoothedEle": 118.43059718227406,
        "gradeBand": "descent"
      },
      {
        "lat": 24.753552,
        "lng": 121.037456,
        "ele": 118.5,
        "distanceKm": 21.987550627003184,
        "gradePct": -0.9844000083000426,
        "smoothedEle": 119.28162051492482,
        "gradeBand": "descent"
      },
      {
        "lat": 24.753964,
        "lng": 121.037306,
        "ele": 122,
        "distanceKm": 22.035802010854713,
        "gradePct": 2.5676209288533647,
        "smoothedEle": 121.04783880347546,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.754451,
        "lng": 121.036992,
        "ele": 121.75,
        "distanceKm": 22.09855367971368,
        "gradePct": 1.8164076599402132,
        "smoothedEle": 121.5007895337302,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.754805,
        "lng": 121.036884,
        "ele": 120.75,
        "distanceKm": 22.139399503674465,
        "gradePct": 0.22285512021774107,
        "smoothedEle": 121.29666115340073,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.755253,
        "lng": 121.036892,
        "ele": 121.75,
        "distanceKm": 22.189221449033536,
        "gradePct": 0.2621186110983265,
        "smoothedEle": 121.6955467378996,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.755799,
        "lng": 121.036893,
        "ele": 122.75,
        "distanceKm": 22.249934046812683,
        "gradePct": 1.7050232507087242,
        "smoothedEle": 123.08602630137646,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.756151,
        "lng": 121.0369,
        "ele": 124.5,
        "distanceKm": 22.289081096814886,
        "gradePct": 3.4270311820936796,
        "smoothedEle": 125.12145422888958,
        "gradeBand": "hard"
      },
      {
        "lat": 24.756548,
        "lng": 121.037017,
        "ele": 128.75,
        "distanceKm": 22.334779094868054,
        "gradePct": 5.565448695148354,
        "smoothedEle": 128.3043863899537,
        "gradeBand": "hard"
      },
      {
        "lat": 24.757055,
        "lng": 121.037037,
        "ele": 132,
        "distanceKm": 22.39119116063274,
        "gradePct": 6.975273712079229,
        "smoothedEle": 132.24369696092305,
        "gradeBand": "steep"
      },
      {
        "lat": 24.757381,
        "lng": 121.037082,
        "ele": 135,
        "distanceKm": 22.427724434482947,
        "gradePct": 5.678994246879474,
        "smoothedEle": 133.49201326010436,
        "gradeBand": "hard"
      },
      {
        "lat": 24.757913,
        "lng": 121.037013,
        "ele": 132.25,
        "distanceKm": 22.48728910010849,
        "gradePct": 1.1470262641410167,
        "smoothedEle": 133.11823846380994,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.758232,
        "lng": 121.037135,
        "ele": 133.25,
        "distanceKm": 22.524838576876252,
        "gradePct": -2.0211020904456234,
        "smoothedEle": 131.37230344284163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.758549,
        "lng": 121.037068,
        "ele": 128.75,
        "distanceKm": 22.56073077213527,
        "gradePct": -4.15737017975226,
        "smoothedEle": 129.12752469896168,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75869,
        "lng": 121.037041,
        "ele": 126.75,
        "distanceKm": 22.57664454818473,
        "gradePct": -5.404345185983496,
        "smoothedEle": 127.78068900621946,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75886,
        "lng": 121.037177,
        "ele": 125.75,
        "distanceKm": 22.60000926244478,
        "gradePct": -7.458407482364955,
        "smoothedEle": 125.0683826096691,
        "gradeBand": "descent"
      },
      {
        "lat": 24.759246,
        "lng": 121.036971,
        "ele": 120.25,
        "distanceKm": 22.647705197959866,
        "gradePct": -8.802022368013796,
        "smoothedEle": 121.14015108187459,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75958,
        "lng": 121.036932,
        "ele": 118.5,
        "distanceKm": 22.685052547507233,
        "gradePct": -7.892760061355178,
        "smoothedEle": 118.91188147042087,
        "gradeBand": "descent"
      },
      {
        "lat": 24.759846,
        "lng": 121.03659,
        "ele": 118,
        "distanceKm": 22.730520859091367,
        "gradePct": -4.904039341108119,
        "smoothedEle": 117.65141182867836,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75974,
        "lng": 121.03626,
        "ele": 116.5,
        "distanceKm": 22.765865206776528,
        "gradePct": -3.5345451346896004,
        "smoothedEle": 116.52211819556884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.759881,
        "lng": 121.035914,
        "ele": 115,
        "distanceKm": 22.8041586472042,
        "gradePct": -2.6395702872715585,
        "smoothedEle": 115.74265310258542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.760146,
        "lng": 121.03559,
        "ele": 116,
        "distanceKm": 22.848187866045613,
        "gradePct": -0.7403939537538841,
        "smoothedEle": 116.34653614655163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76052,
        "lng": 121.035242,
        "ele": 118.75,
        "distanceKm": 22.902632225875106,
        "gradePct": 3.5403726956594634,
        "smoothedEle": 119.31409618862845,
        "gradeBand": "hard"
      },
      {
        "lat": 24.760651,
        "lng": 121.034868,
        "ele": 122.75,
        "distanceKm": 22.943107913826463,
        "gradePct": 6.897829093946826,
        "smoothedEle": 123.1746911220375,
        "gradeBand": "steep"
      },
      {
        "lat": 24.760884,
        "lng": 121.034518,
        "ele": 128.5,
        "distanceKm": 22.986927831634798,
        "gradePct": 10.031477738453162,
        "smoothedEle": 128.48958566716806,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.760915,
        "lng": 121.034165,
        "ele": 133.5,
        "distanceKm": 23.022737310427658,
        "gradePct": 11.249188342496705,
        "smoothedEle": 132.48091932593394,
        "gradeBand": "extreme"
      },
      {
        "lat": 24.760723,
        "lng": 121.033683,
        "ele": 136,
        "distanceKm": 23.075882721938655,
        "gradePct": 8.485086713243355,
        "smoothedEle": 135.63501689472182,
        "gradeBand": "steep"
      },
      {
        "lat": 24.760511,
        "lng": 121.033349,
        "ele": 136.75,
        "distanceKm": 23.11702958838282,
        "gradePct": 4.763080935448858,
        "smoothedEle": 136.60781610343335,
        "gradeBand": "hard"
      },
      {
        "lat": 24.760312,
        "lng": 121.033053,
        "ele": 137,
        "distanceKm": 23.15421730496862,
        "gradePct": 2.317255044145294,
        "smoothedEle": 136.66646311644732,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.760028,
        "lng": 121.032682,
        "ele": 136,
        "distanceKm": 23.20321299911163,
        "gradePct": 0.1342739962755369,
        "smoothedEle": 136.41543661982982,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.75976404422107,
        "lng": 121.03237745350438,
        "ele": 136.55806021732647,
        "distanceKm": 23.2457227550253,
        "gradePct": -0.05652285937551857,
        "smoothedEle": 136.59654389862843,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7595,
        "lng": 121.032073,
        "ele": 137.25,
        "distanceKm": 23.288232558095654,
        "gradePct": 1.2233219565131432,
        "smoothedEle": 137.71550996627226,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.759197,
        "lng": 121.0317155,
        "ele": 139.87499999999991,
        "distanceKm": 23.337610939953247,
        "gradePct": 3.313014588254485,
        "smoothedEle": 139.8749991552133,
        "gradeBand": "hard"
      },
      {
        "lat": 24.758894,
        "lng": 121.031358,
        "ele": 142.5,
        "distanceKm": 23.38698938617554,
        "gradePct": 3.655789418863554,
        "smoothedEle": 141.33857594032114,
        "gradeBand": "hard"
      },
      {
        "lat": 24.758601421287196,
        "lng": 121.03103703391557,
        "ele": 140.66187543250737,
        "distanceKm": 23.432910769836237,
        "gradePct": 0.5669030722005378,
        "smoothedEle": 140.23634736368535,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.758308,
        "lng": 121.030717,
        "ele": 137.25,
        "distanceKm": 23.478832345613668,
        "gradePct": -2.367996268444239,
        "smoothedEle": 138.72880504924504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7579505,
        "lng": 121.0303675,
        "ele": 139.62500000000009,
        "distanceKm": 23.531989329691438,
        "gradePct": -0.6334650426947998,
        "smoothedEle": 139.62499919940961,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757593,
        "lng": 121.030018,
        "ele": 142,
        "distanceKm": 23.585146381187347,
        "gradePct": 3.708266740001424,
        "smoothedEle": 142.54352255659595,
        "gradeBand": "hard"
      },
      {
        "lat": 24.757218,
        "lng": 121.029683,
        "ele": 146.75,
        "distanceKm": 23.638839746657574,
        "gradePct": 6.65667309498115,
        "smoothedEle": 146.65778611860603,
        "gradeBand": "steep"
      },
      {
        "lat": 24.756936,
        "lng": 121.0294,
        "ele": 150.25,
        "distanceKm": 23.681264393018242,
        "gradePct": 7.371025806276416,
        "smoothedEle": 149.70141251682713,
        "gradeBand": "steep"
      },
      {
        "lat": 24.756697,
        "lng": 121.02912,
        "ele": 151.75,
        "distanceKm": 23.72006689894951,
        "gradePct": 5.390073277861526,
        "smoothedEle": 150.60938664282213,
        "gradeBand": "hard"
      },
      {
        "lat": 24.756387,
        "lng": 121.028621,
        "ele": 148.25,
        "distanceKm": 23.78111649028309,
        "gradePct": -0.7565246493431522,
        "smoothedEle": 148.9342770384565,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756672154009163,
        "lng": 121.02834281578926,
        "ele": 148.25917735603045,
        "distanceKm": 23.823477083349218,
        "gradePct": -1.9019986415518146,
        "smoothedEle": 148.61381763469092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756945077004584,
        "lng": 121.02804640789464,
        "ele": 149.50458867801518,
        "distanceKm": 23.866100831961816,
        "gradePct": 0.1583046896309361,
        "smoothedEle": 149.50458896548895,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.757218,
        "lng": 121.02775,
        "ele": 150.75,
        "distanceKm": 23.908724534409146,
        "gradePct": 3.653137957895415,
        "smoothedEle": 152.37855915370693,
        "gradeBand": "hard"
      },
      {
        "lat": 24.757505,
        "lng": 121.027385,
        "ele": 158.5,
        "distanceKm": 23.95747693165727,
        "gradePct": 6.737267884775965,
        "smoothedEle": 156.06163048817817,
        "gradeBand": "steep"
      },
      {
        "lat": 24.757518,
        "lng": 121.026843,
        "ele": 156.5,
        "distanceKm": 24.01222444113861,
        "gradePct": 3.729384209594063,
        "smoothedEle": 156.3723489489998,
        "gradeBand": "hard"
      },
      {
        "lat": 24.757621,
        "lng": 121.026443,
        "ele": 154.5,
        "distanceKm": 24.054206845519925,
        "gradePct": -1.4570323703139896,
        "smoothedEle": 154.35755466577686,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757681,
        "lng": 121.026095,
        "ele": 152.25,
        "distanceKm": 24.089973841927925,
        "gradePct": -3.45992860528947,
        "smoothedEle": 152.78613748619583,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757601,
        "lng": 121.025605,
        "ele": 151.5,
        "distanceKm": 24.140244827470816,
        "gradePct": -3.7180250511740143,
        "smoothedEle": 151.30958638153066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757379,
        "lng": 121.025097,
        "ele": 149.75,
        "distanceKm": 24.197170836306988,
        "gradePct": -1.8660342097900031,
        "smoothedEle": 150.7087143432884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757109,
        "lng": 121.024659,
        "ele": 152.25,
        "distanceKm": 24.2506254826586,
        "gradePct": 1.4487652055619058,
        "smoothedEle": 152.64878048649211,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.756862,
        "lng": 121.024319,
        "ele": 155.75,
        "distanceKm": 24.2945913451102,
        "gradePct": 5.382733244740175,
        "smoothedEle": 156.11867493392432,
        "gradeBand": "hard"
      },
      {
        "lat": 24.756769,
        "lng": 121.023936,
        "ele": 160.25,
        "distanceKm": 24.334623685509253,
        "gradePct": 7.302178192077615,
        "smoothedEle": 159.3701944794082,
        "gradeBand": "steep"
      },
      {
        "lat": 24.756567,
        "lng": 121.023359,
        "ele": 162.75,
        "distanceKm": 24.3970663398749,
        "gradePct": 6.03899966088889,
        "smoothedEle": 162.3586994105541,
        "gradeBand": "steep"
      },
      {
        "lat": 24.756426,
        "lng": 121.023022,
        "ele": 163,
        "distanceKm": 24.43453335508809,
        "gradePct": 2.9675575614104024,
        "smoothedEle": 162.33041519448278,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.756051,
        "lng": 121.02242,
        "ele": 158.5,
        "distanceKm": 24.508248085108814,
        "gradePct": -4.68976870572529,
        "smoothedEle": 157.66048949603612,
        "gradeBand": "descent"
      },
      {
        "lat": 24.755956,
        "lng": 121.022075,
        "ele": 154,
        "distanceKm": 24.544651237175586,
        "gradePct": -5.649816678062427,
        "smoothedEle": 156.03961729650717,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756136,
        "lng": 121.021742,
        "ele": 156,
        "distanceKm": 24.58378241537464,
        "gradePct": -3.9712371339747676,
        "smoothedEle": 155.2391849167789,
        "gradeBand": "descent"
      },
      {
        "lat": 24.75623873617733,
        "lng": 121.02137158493449,
        "ele": 155.5003330764211,
        "distanceKm": 24.622891106371444,
        "gradePct": -1.811786141437923,
        "smoothedEle": 155.19671404229436,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756301,
        "lng": 121.020989,
        "ele": 154,
        "distanceKm": 24.662138476638656,
        "gradePct": -2.380754269908431,
        "smoothedEle": 153.30115969788469,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756195,
        "lng": 121.020348,
        "ele": 147.25,
        "distanceKm": 24.727928515114105,
        "gradePct": -6.7827622477618545,
        "smoothedEle": 148.1706569709123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756362,
        "lng": 121.020024,
        "ele": 146.5,
        "distanceKm": 24.765547386969743,
        "gradePct": -6.499100515995615,
        "smoothedEle": 146.53622222305873,
        "gradeBand": "descent"
      },
      {
        "lat": 24.756772,
        "lng": 121.0199,
        "ele": 145.75,
        "distanceKm": 24.81282551830771,
        "gradePct": -4.5242324071992845,
        "smoothedEle": 144.82420114047508,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757056,
        "lng": 121.019733,
        "ele": 142.25,
        "distanceKm": 24.848625183050135,
        "gradePct": -3.3024396037807366,
        "smoothedEle": 143.96900504175278,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757473,
        "lng": 121.019813,
        "ele": 144.5,
        "distanceKm": 24.895691923072793,
        "gradePct": -1.945340927749812,
        "smoothedEle": 143.49929666891575,
        "gradeBand": "descent"
      },
      {
        "lat": 24.757885,
        "lng": 121.019851,
        "ele": 143,
        "distanceKm": 24.941664702227573,
        "gradePct": -1.2782221992224367,
        "smoothedEle": 142.85705747352245,
        "gradeBand": "descent"
      },
      {
        "lat": 24.758238904246028,
        "lng": 121.01971704320952,
        "ele": 141.12239475555702,
        "distanceKm": 24.98327685052775,
        "gradePct": -2.513799199635194,
        "smoothedEle": 141.10939522640112,
        "gradeBand": "descent"
      },
      {
        "lat": 24.758578452123015,
        "lng": 121.01953402160477,
        "ele": 139.1861973777786,
        "distanceKm": 25.02531311001112,
        "gradePct": -3.899291865674401,
        "smoothedEle": 139.18619716281532,
        "gradeBand": "descent"
      },
      {
        "lat": 24.758918,
        "lng": 121.019351,
        "ele": 137.25,
        "distanceKm": 25.067349347289806,
        "gradePct": -4.3457659687954004,
        "smoothedEle": 137.4325660281627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.759333,
        "lng": 121.019173,
        "ele": 135.75,
        "distanceKm": 25.11687196078671,
        "gradePct": -2.8827483857683536,
        "smoothedEle": 136.68963922411197,
        "gradeBand": "descent"
      },
      {
        "lat": 24.759648,
        "lng": 121.019096,
        "ele": 137.5,
        "distanceKm": 25.152750952176568,
        "gradePct": -0.8692659711156684,
        "smoothedEle": 137.1723031896732,
        "gradeBand": "descent"
      },
      {
        "lat": 24.760258,
        "lng": 121.018977,
        "ele": 139,
        "distanceKm": 25.221636016841643,
        "gradePct": 1.8895523783232888,
        "smoothedEle": 138.6432803100203,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7607055,
        "lng": 121.018883,
        "ele": 138.5,
        "distanceKm": 25.272292946854535,
        "gradePct": 0.9103954939927673,
        "smoothedEle": 138.49999998398405,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.761153,
        "lng": 121.018789,
        "ele": 138,
        "distanceKm": 25.32294987046105,
        "gradePct": -0.8122606497223499,
        "smoothedEle": 137.8273034979702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76169,
        "lng": 121.018691,
        "ele": 136.5,
        "distanceKm": 25.383475978059245,
        "gradePct": -1.5054258183362277,
        "smoothedEle": 136.84606957320895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.762228,
        "lng": 121.018647,
        "ele": 136.75,
        "distanceKm": 25.44346367390292,
        "gradePct": -0.7947542930336511,
        "smoothedEle": 136.69998461980458,
        "gradeBand": "descent"
      },
      {
        "lat": 24.762593,
        "lng": 121.018647,
        "ele": 136.75,
        "distanceKm": 25.484049878188003,
        "gradePct": -0.8888100645761926,
        "smoothedEle": 135.95586191913728,
        "gradeBand": "descent"
      },
      {
        "lat": 24.763084,
        "lng": 121.018663,
        "ele": 133.25,
        "distanceKm": 25.538670559281563,
        "gradePct": -3.4797229797944245,
        "smoothedEle": 133.231934065768,
        "gradeBand": "descent"
      },
      {
        "lat": 24.763717,
        "lng": 121.018696,
        "ele": 127.75,
        "distanceKm": 25.60913586782358,
        "gradePct": -7.1171467976225795,
        "smoothedEle": 127.58767935027207,
        "gradeBand": "descent"
      },
      {
        "lat": 24.764032,
        "lng": 121.01869,
        "ele": 124.75,
        "distanceKm": 25.644167556835413,
        "gradePct": -7.067101183946916,
        "smoothedEle": 125.72452466482255,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7644,
        "lng": 121.018751,
        "ele": 124.75,
        "distanceKm": 25.685548279083598,
        "gradePct": -4.244168055776779,
        "smoothedEle": 125.23287162977908,
        "gradeBand": "descent"
      },
      {
        "lat": 24.764692,
        "lng": 121.018606,
        "ele": 126.25,
        "distanceKm": 25.721165395113058,
        "gradePct": -0.9376239705766389,
        "smoothedEle": 126.01026692628793,
        "gradeBand": "descent"
      },
      {
        "lat": 24.764969,
        "lng": 121.018438,
        "ele": 127,
        "distanceKm": 25.756328446828537,
        "gradePct": 0.859360929295095,
        "smoothedEle": 126.43939951100657,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.765338,
        "lng": 121.018169,
        "ele": 125.75,
        "distanceKm": 25.805534537560305,
        "gradePct": 0.009970828026510363,
        "smoothedEle": 125.67907158207692,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.765615,
        "lng": 121.017951,
        "ele": 124.5,
        "distanceKm": 25.843392081424387,
        "gradePct": -1.8908511915739314,
        "smoothedEle": 124.39067192213732,
        "gradeBand": "descent"
      },
      {
        "lat": 24.765910004831095,
        "lng": 121.01767422916156,
        "ele": 122.75077892519144,
        "distanceKm": 25.886484645780023,
        "gradePct": -3.29401067371587,
        "smoothedEle": 122.67941806106784,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766183,
        "lng": 121.017371,
        "ele": 120.75,
        "distanceKm": 25.929598871377795,
        "gradePct": -4.096732297589098,
        "smoothedEle": 120.76336170848761,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7665205,
        "lng": 121.0169975,
        "ele": 118.375,
        "distanceKm": 25.982801601116886,
        "gradePct": -4.450676740900584,
        "smoothedEle": 118.37499913736904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766858,
        "lng": 121.016624,
        "ele": 116,
        "distanceKm": 26.036004258213367,
        "gradePct": -3.831612585446595,
        "smoothedEle": 116.64420022758698,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766972,
        "lng": 121.01659,
        "ele": 115.75,
        "distanceKm": 26.0491371086851,
        "gradePct": -3.4882971561582043,
        "smoothedEle": 116.39795928124202,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767024,
        "lng": 121.016607,
        "ele": 116,
        "distanceKm": 26.055168639829194,
        "gradePct": -3.3306224983633212,
        "smoothedEle": 116.28486807229022,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76714,
        "lng": 121.016712,
        "ele": 116.5,
        "distanceKm": 26.071864973546575,
        "gradePct": -2.5981779105318084,
        "smoothedEle": 116.26778535727367,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767364500000003,
        "lng": 121.0169915,
        "ele": 116.5,
        "distanceKm": 26.109541897757307,
        "gradePct": -1.02495329085508,
        "smoothedEle": 116.4801254553471,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767589,
        "lng": 121.017271,
        "ele": 116.5,
        "distanceKm": 26.147218783755257,
        "gradePct": 0.06607212632341847,
        "smoothedEle": 116.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.76778,
        "lng": 121.017646,
        "ele": 116.5,
        "distanceKm": 26.190631143455544,
        "gradePct": 0.29984961136360794,
        "smoothedEle": 116.67339759237603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.768025,
        "lng": 121.018234,
        "ele": 117.5,
        "distanceKm": 26.255951624980337,
        "gradePct": 0.31562854280950153,
        "smoothedEle": 116.85050924621943,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.768128,
        "lng": 121.018946,
        "ele": 114,
        "distanceKm": 26.328746301471508,
        "gradePct": -2.801876506167619,
        "smoothedEle": 113.97486751775828,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768175985308087,
        "lng": 121.01946507410935,
        "ele": 111.8815526456043,
        "distanceKm": 26.38142620710086,
        "gradePct": -3.964561483718285,
        "smoothedEle": 111.8796135785754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768204,
        "lng": 121.019987,
        "ele": 109.75,
        "distanceKm": 26.434215108495074,
        "gradePct": -3.0393505545385007,
        "smoothedEle": 110.71800443502016,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76824,
        "lng": 121.020693,
        "ele": 113,
        "distanceKm": 26.505609586996925,
        "gradePct": 1.5922156860417602,
        "smoothedEle": 112.93967886050936,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.768153,
        "lng": 121.021029,
        "ele": 114.25,
        "distanceKm": 26.540886613420238,
        "gradePct": 3.239862707541743,
        "smoothedEle": 114.16547299924417,
        "gradeBand": "hard"
      },
      {
        "lat": 24.767987356337336,
        "lng": 121.02148249564623,
        "ele": 115.51362916732235,
        "distanceKm": 26.590240174991383,
        "gradePct": 2.9185820284417487,
        "smoothedEle": 115.37999099604005,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767804,
        "lng": 121.021928,
        "ele": 116.25,
        "distanceKm": 26.63962616244595,
        "gradePct": 1.9010060566408113,
        "smoothedEle": 116.0226813333132,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767821,
        "lng": 121.022177,
        "ele": 116,
        "distanceKm": 26.66483780561354,
        "gradePct": 1.6152988849298338,
        "smoothedEle": 116.37017522280742,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767853,
        "lng": 121.02223,
        "ele": 116,
        "distanceKm": 26.67126405843657,
        "gradePct": 1.5060574504220694,
        "smoothedEle": 116.41907434507141,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767791,
        "lng": 121.022267,
        "ele": 116.25,
        "distanceKm": 26.679105261837545,
        "gradePct": 1.4795365323758818,
        "smoothedEle": 116.58551382023398,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767722,
        "lng": 121.022286,
        "ele": 116.5,
        "distanceKm": 26.687013913936234,
        "gradePct": 1.6803489316254787,
        "smoothedEle": 116.9809464251684,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767653,
        "lng": 121.022278,
        "ele": 116.75,
        "distanceKm": 26.69472877517609,
        "gradePct": 1.9282855664176577,
        "smoothedEle": 117.36668948716128,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767573,
        "lng": 121.022259,
        "ele": 117,
        "distanceKm": 26.70382888228548,
        "gradePct": 2.268857856850328,
        "smoothedEle": 117.82568708827012,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7672,
        "lng": 121.022074,
        "ele": 121.25,
        "distanceKm": 26.74931667905289,
        "gradePct": 2.7769849425449027,
        "smoothedEle": 118.93323136261463,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767573,
        "lng": 121.022259,
        "ele": 117,
        "distanceKm": 26.794804475820296,
        "gradePct": 0.455179358787739,
        "smoothedEle": 117.82568708827012,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767653,
        "lng": 121.022278,
        "ele": 116.75,
        "distanceKm": 26.803904582929686,
        "gradePct": -0.46084077270669666,
        "smoothedEle": 117.36668948716128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767722,
        "lng": 121.022286,
        "ele": 116.5,
        "distanceKm": 26.811619444169544,
        "gradePct": -1.0344265310002494,
        "smoothedEle": 116.9809464251684,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767791,
        "lng": 121.022267,
        "ele": 116.25,
        "distanceKm": 26.819528096268233,
        "gradePct": -1.6224202835864838,
        "smoothedEle": 116.58551382023398,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767853,
        "lng": 121.02223,
        "ele": 116,
        "distanceKm": 26.827369299669208,
        "gradePct": -1.9797786545383365,
        "smoothedEle": 116.41907434507141,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767821,
        "lng": 121.022177,
        "ele": 116,
        "distanceKm": 26.833795552492237,
        "gradePct": -2.1844429996848875,
        "smoothedEle": 116.3708774488987,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767804,
        "lng": 121.021928,
        "ele": 116.25,
        "distanceKm": 26.859007195659828,
        "gradePct": -2.6529167407776604,
        "smoothedEle": 116.04436834731558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768053,
        "lng": 121.021323,
        "ele": 115.25,
        "distanceKm": 26.92607391589707,
        "gradePct": -1.404040808497919,
        "smoothedEle": 115.04252969808638,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76824,
        "lng": 121.020693,
        "ele": 113,
        "distanceKm": 26.992995098054635,
        "gradePct": -2.7301953712947307,
        "smoothedEle": 112.80646372611422,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768251,
        "lng": 121.020263,
        "ele": 111,
        "distanceKm": 27.03642780059332,
        "gradePct": -3.108738634975394,
        "smoothedEle": 111.58783230236325,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76826233097899,
        "lng": 121.01970174459852,
        "ele": 111.10230964042614,
        "distanceKm": 27.09310963886815,
        "gradePct": -1.2044048486553123,
        "smoothedEle": 111.59884510013235,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76825,
        "lng": 121.01914,
        "ele": 113.5,
        "distanceKm": 27.149843436008783,
        "gradePct": 1.8497309050734878,
        "smoothedEle": 113.44016975098354,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.768255,
        "lng": 121.018669,
        "ele": 115.25,
        "distanceKm": 27.197401774472795,
        "gradePct": 3.4168705381887543,
        "smoothedEle": 115.15501911335625,
        "gradeBand": "hard"
      },
      {
        "lat": 24.768197346073574,
        "lng": 121.01828473480013,
        "ele": 116.44942990212922,
        "distanceKm": 27.2367256730766,
        "gradePct": 2.934964837535021,
        "smoothedEle": 115.94939082609808,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.768076,
        "lng": 121.017918,
        "ele": 116,
        "distanceKm": 27.276135390325052,
        "gradePct": 1.6021887101972028,
        "smoothedEle": 115.99038866053061,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767919,
        "lng": 121.017543,
        "ele": 115.5,
        "distanceKm": 27.317828684843274,
        "gradePct": 0.263070738408924,
        "smoothedEle": 115.83072848509363,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767678,
        "lng": 121.017117,
        "ele": 116.25,
        "distanceKm": 27.3685055591395,
        "gradePct": 0.21660308580363766,
        "smoothedEle": 116.1990544512321,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767412,
        "lng": 121.016763,
        "ele": 116.75,
        "distanceKm": 27.414899090091,
        "gradePct": 0.40532479050514203,
        "smoothedEle": 116.24727185684817,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.766964,
        "lng": 121.016232,
        "ele": 114,
        "distanceKm": 27.48808367405241,
        "gradePct": -2.6725391920930734,
        "smoothedEle": 113.54686305092359,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767293303104683,
        "lng": 121.0158997672055,
        "ele": 110.73485964792256,
        "distanceKm": 27.537742872066115,
        "gradePct": -4.661878503578952,
        "smoothedEle": 110.74248974342228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767623,
        "lng": 121.015568,
        "ele": 107.5,
        "distanceKm": 27.58740258452813,
        "gradePct": -5.551837200443635,
        "smoothedEle": 108.02015710148163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767993,
        "lng": 121.0153285,
        "ele": 106.37499999999996,
        "distanceKm": 27.63512494495025,
        "gradePct": -4.515330534584116,
        "smoothedEle": 106.37499979463848,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768363,
        "lng": 121.015089,
        "ele": 105.25,
        "distanceKm": 27.682847268863654,
        "gradePct": -2.649275888524931,
        "smoothedEle": 105.62060244396945,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7686695,
        "lng": 121.014906,
        "ele": 105.50000000000001,
        "distanceKm": 27.72161485607776,
        "gradePct": -1.340739961961129,
        "smoothedEle": 105.50000002717066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768976,
        "lng": 121.014723,
        "ele": 105.75,
        "distanceKm": 27.760382421555338,
        "gradePct": -0.9752757129766256,
        "smoothedEle": 105.00045238085283,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769414166617178,
        "lng": 121.01444031185989,
        "ele": 102.6580984674853,
        "distanceKm": 27.816848882798254,
        "gradePct": -2.816722181123626,
        "smoothedEle": 102.69810435285879,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769852,
        "lng": 121.014157,
        "ele": 99.75,
        "distanceKm": 27.873315199348536,
        "gradePct": -3.25024954042831,
        "smoothedEle": 101.22288530018486,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770311,
        "lng": 121.013884,
        "ele": 103.75,
        "distanceKm": 27.931320993870326,
        "gradePct": 1.4441652135557144,
        "smoothedEle": 103.76417630143379,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77064,
        "lng": 121.013659,
        "ele": 106.75,
        "distanceKm": 27.97438363313713,
        "gradePct": 4.5316819996274305,
        "smoothedEle": 105.80137643663679,
        "gradeBand": "hard"
      },
      {
        "lat": 24.77089948833563,
        "lng": 121.01341457250334,
        "ele": 106.44511501974235,
        "distanceKm": 28.012351615498606,
        "gradePct": 2.6944559088634223,
        "smoothedEle": 105.6275650565281,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771125,
        "lng": 121.013131,
        "ele": 103.5,
        "distanceKm": 28.05041086890872,
        "gradePct": -0.40342561059454735,
        "smoothedEle": 104.26385130592861,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771422968601506,
        "lng": 121.01270375323821,
        "ele": 102.84983840887135,
        "distanceKm": 28.104803188703038,
        "gradePct": -2.6184540166941073,
        "smoothedEle": 103.04366653626504,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771709484300754,
        "lng": 121.01226637661911,
        "ele": 103.04991920443568,
        "distanceKm": 28.159255271308872,
        "gradePct": -1.0155252373796342,
        "smoothedEle": 103.04991928710908,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771996,
        "lng": 121.011829,
        "ele": 103.25,
        "distanceKm": 28.21370727127471,
        "gradePct": -0.10203079415936,
        "smoothedEle": 102.94265820088322,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772353,
        "lng": 121.011318,
        "ele": 101.75,
        "distanceKm": 28.278803884781276,
        "gradePct": -1.2302387819976526,
        "smoothedEle": 101.78117309461088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77254,
        "lng": 121.010997,
        "ele": 101,
        "distanceKm": 28.31730993702398,
        "gradePct": -1.5239567142635688,
        "smoothedEle": 101.35442099051934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772698,
        "lng": 121.010817,
        "ele": 101.25,
        "distanceKm": 28.342587034166446,
        "gradePct": -0.9806552013750578,
        "smoothedEle": 101.44671637145579,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7728620294852,
        "lng": 121.0104377250722,
        "ele": 102.11513441561839,
        "distanceKm": 28.385001549180675,
        "gradePct": 0.4803917357544026,
        "smoothedEle": 102.19287780147368,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773021,
        "lng": 121.010056,
        "ele": 103.25,
        "distanceKm": 28.42740189775769,
        "gradePct": 1.4066182937398906,
        "smoothedEle": 102.79788850610873,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.772631080093404,
        "lng": 121.00981151719421,
        "ele": 102.75,
        "distanceKm": 28.477293024345823,
        "gradePct": 0.8180037108947741,
        "smoothedEle": 102.87527218352967,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.772244716671427,
        "lng": 121.00955973703088,
        "ele": 102.75,
        "distanceKm": 28.52721203008258,
        "gradePct": -0.04517928366689652,
        "smoothedEle": 102.75,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771858353249453,
        "lng": 121.00930795686756,
        "ele": 102.75,
        "distanceKm": 28.577131076102273,
        "gradePct": -0.563294869628229,
        "smoothedEle": 102.3117261239305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771476,
        "lng": 121.009049,
        "ele": 101,
        "distanceKm": 28.627042633122898,
        "gradePct": -1.3221996715176043,
        "smoothedEle": 101.42822543164118,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77146442950886,
        "lng": 121.00850057221614,
        "ele": 100.95495365991981,
        "distanceKm": 28.682428822498142,
        "gradePct": -1.1568094954506711,
        "smoothedEle": 101.06113949773655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771437953005904,
        "lng": 121.00795204814409,
        "ele": 101.38663577327986,
        "distanceKm": 28.737887994693132,
        "gradePct": 0.030290684295564595,
        "smoothedEle": 101.38663574782603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77141147650295,
        "lng": 121.00740352407205,
        "ele": 101.81831788663992,
        "distanceKm": 28.793347178680982,
        "gradePct": 0.6930972772378298,
        "smoothedEle": 101.81831786118606,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771385,
        "lng": 121.006855,
        "ele": 102.25,
        "distanceKm": 28.848806374461702,
        "gradePct": 1.1489812754914488,
        "smoothedEle": 102.6206032945543,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771370971843762,
        "lng": 121.00643265229618,
        "ele": 103.87826813454039,
        "distanceKm": 28.891476672168327,
        "gradePct": 2.074270836228094,
        "smoothedEle": 103.8780290853468,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771356946777132,
        "lng": 121.00601030447154,
        "ele": 105.50570244996536,
        "distanceKm": 28.934146974321873,
        "gradePct": 2.5573664485185144,
        "smoothedEle": 104.96590350178431,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771342,
        "lng": 121.005588,
        "ele": 105.25,
        "distanceKm": 28.97681677639092,
        "gradePct": 1.04219263924493,
        "smoothedEle": 104.48821791792548,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77098758810732,
        "lng": 121.00557351535053,
        "ele": 102.49232473512251,
        "distanceKm": 29.01625276052944,
        "gradePct": -2.0112448398491694,
        "smoothedEle": 102.49844775166306,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770632,
        "lng": 121.005579,
        "ele": 99.75,
        "distanceKm": 29.055796286118746,
        "gradePct": -4.848286161637349,
        "smoothedEle": 99.87525474073534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770239,
        "lng": 121.005573,
        "ele": 97.25,
        "distanceKm": 29.099500151307673,
        "gradePct": -5.5558022486615135,
        "smoothedEle": 97.78791012019578,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769807,
        "lng": 121.005292,
        "ele": 96.5,
        "distanceKm": 29.155289067322983,
        "gradePct": -3.243110474060426,
        "smoothedEle": 96.6657915649426,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769584,
        "lng": 121.005042,
        "ele": 96.5,
        "distanceKm": 29.1906725072165,
        "gradePct": -1.4841085776789174,
        "smoothedEle": 96.72541952358313,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769406,
        "lng": 121.004699,
        "ele": 97.25,
        "distanceKm": 29.230560634260996,
        "gradePct": 0.39273645368600696,
        "smoothedEle": 97.55590698855836,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769212,
        "lng": 121.004222,
        "ele": 99.5,
        "distanceKm": 29.28333161095953,
        "gradePct": 1.0826648596525374,
        "smoothedEle": 97.79571354931697,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769176,
        "lng": 121.003577,
        "ele": 92.75,
        "distanceKm": 29.348577242410148,
        "gradePct": -5.0791797061416295,
        "smoothedEle": 92.55859995385622,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769258,
        "lng": 121.00311,
        "ele": 87.5,
        "distanceKm": 29.39660162394594,
        "gradePct": -8.850180026880086,
        "smoothedEle": 87.88038074702574,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769459,
        "lng": 121.002405,
        "ele": 79.75,
        "distanceKm": 29.471208611361174,
        "gradePct": -9.693824766395384,
        "smoothedEle": 80.6601761584312,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76948,
        "lng": 121.002,
        "ele": 79.5,
        "distanceKm": 29.512166147978228,
        "gradePct": -6.47598617735094,
        "smoothedEle": 79.89811410278305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76934,
        "lng": 121.001688,
        "ele": 80.5,
        "distanceKm": 29.54730394326735,
        "gradePct": -2.5551208980580844,
        "smoothedEle": 80.41846584347638,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76914,
        "lng": 121.001417,
        "ele": 81.25,
        "distanceKm": 29.58256344539248,
        "gradePct": -0.3377999036052254,
        "smoothedEle": 80.11110651357309,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768857,
        "lng": 121.00104766666666,
        "ele": 77.75,
        "distanceKm": 29.631356781426987,
        "gradePct": -2.4323049434678348,
        "smoothedEle": 77.7500011365836,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768574,
        "lng": 121.00067833333334,
        "ele": 74.25,
        "distanceKm": 29.68015018240913,
        "gradePct": -5.882141944376174,
        "smoothedEle": 74.25000113661096,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768291,
        "lng": 121.000309,
        "ele": 70.75,
        "distanceKm": 29.728943648340465,
        "gradePct": -7.1181482566014145,
        "smoothedEle": 70.74862418461174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768241,
        "lng": 120.999915,
        "ele": 67.75,
        "distanceKm": 29.76911097090113,
        "gradePct": -7.421970278168197,
        "smoothedEle": 67.61988466448982,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76815,
        "lng": 120.999444,
        "ele": 63.75,
        "distanceKm": 29.817730696046123,
        "gradePct": -7.649225310090797,
        "smoothedEle": 63.9040306418671,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768059,
        "lng": 120.999097,
        "ele": 61,
        "distanceKm": 29.854197979301908,
        "gradePct": -7.419584128876701,
        "smoothedEle": 61.36191309042718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767866,
        "lng": 120.99848,
        "ele": 58,
        "distanceKm": 29.920087194981523,
        "gradePct": -5.345797312728445,
        "smoothedEle": 58.39396287165459,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767616,
        "lng": 120.998034,
        "ele": 57.5,
        "distanceKm": 29.973007637721018,
        "gradePct": -3.0405586351777454,
        "smoothedEle": 57.474081813676534,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767507,
        "lng": 120.99763,
        "ele": 57,
        "distanceKm": 30.01556080593112,
        "gradePct": -1.383810680514111,
        "smoothedEle": 57.21404135925138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767445,
        "lng": 120.997203,
        "ele": 57.25,
        "distanceKm": 30.059221382109826,
        "gradePct": -0.3812177427098521,
        "smoothedEle": 57.332501434917084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767335,
        "lng": 120.996838,
        "ele": 57.75,
        "distanceKm": 30.098051096232346,
        "gradePct": -0.09985731148395019,
        "smoothedEle": 57.221185078676356,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76707,
        "lng": 120.996634,
        "ele": 56.75,
        "distanceKm": 30.134002928428234,
        "gradePct": -1.0178548239661322,
        "smoothedEle": 56.24622378668344,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766958,
        "lng": 120.996589,
        "ele": 56,
        "distanceKm": 30.147259699340616,
        "gradePct": -1.6835197739848669,
        "smoothedEle": 55.616527168345335,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766821,
        "lng": 120.996463,
        "ele": 54.5,
        "distanceKm": 30.16710693381824,
        "gradePct": -2.8461380863536783,
        "smoothedEle": 54.46375718462514,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766726,
        "lng": 120.996284,
        "ele": 53,
        "distanceKm": 30.188040820968034,
        "gradePct": -3.989823690029077,
        "smoothedEle": 53.260058673511956,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766731,
        "lng": 120.995927,
        "ele": 51,
        "distanceKm": 30.22409049057719,
        "gradePct": -5.105702587557799,
        "smoothedEle": 51.40933206699451,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766796,
        "lng": 120.995502,
        "ele": 50,
        "distanceKm": 30.267606082746557,
        "gradePct": -4.0855045408490716,
        "smoothedEle": 50.349551580397815,
        "gradeBand": "descent"
      },
      {
        "lat": 24.766986,
        "lng": 120.995094,
        "ele": 50.25,
        "distanceKm": 30.31390244975085,
        "gradePct": -1.2426475214986645,
        "smoothedEle": 50.68972063514724,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767101,
        "lng": 120.994697,
        "ele": 52,
        "distanceKm": 30.355976715306067,
        "gradePct": 1.0840750359529838,
        "smoothedEle": 51.71684869998758,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767089,
        "lng": 120.994482,
        "ele": 52.5,
        "distanceKm": 30.37772562535332,
        "gradePct": 1.8910373862010503,
        "smoothedEle": 52.314943726287055,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767026,
        "lng": 120.994039,
        "ele": 53,
        "distanceKm": 30.4229993446598,
        "gradePct": 2.2732460117888884,
        "smoothedEle": 53.18504244411492,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767045,
        "lng": 120.993474,
        "ele": 54.5,
        "distanceKm": 30.4800849252133,
        "gradePct": 2.4679160423484636,
        "smoothedEle": 54.82820227229077,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767235,
        "lng": 120.993112,
        "ele": 56.75,
        "distanceKm": 30.522301776934235,
        "gradePct": 3.1402383321043086,
        "smoothedEle": 56.31187448239338,
        "gradeBand": "hard"
      },
      {
        "lat": 24.76733,
        "lng": 120.992967,
        "ele": 56.75,
        "distanceKm": 30.540355146259888,
        "gradePct": 3.48479511055767,
        "smoothedEle": 57.16940952536187,
        "gradeBand": "hard"
      },
      {
        "lat": 24.767458,
        "lng": 120.992881,
        "ele": 57.5,
        "distanceKm": 30.557027717124136,
        "gradePct": 3.590576563112512,
        "smoothedEle": 57.755096733642056,
        "gradeBand": "hard"
      },
      {
        "lat": 24.767685,
        "lng": 120.992799,
        "ele": 59.25,
        "distanceKm": 30.583592144033915,
        "gradePct": 3.1356918358724055,
        "smoothedEle": 58.08715207001429,
        "gradeBand": "hard"
      },
      {
        "lat": 24.767842,
        "lng": 120.9925,
        "ele": 58,
        "distanceKm": 30.61846542275223,
        "gradePct": 1.2324156603285525,
        "smoothedEle": 57.409465022990645,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.76814,
        "lng": 120.992149,
        "ele": 54.25,
        "distanceKm": 30.666982857522846,
        "gradePct": -3.0097502323719496,
        "smoothedEle": 54.869785756253926,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768589,
        "lng": 120.991947,
        "ele": 52.75,
        "distanceKm": 30.720914545283243,
        "gradePct": -4.128051032741352,
        "smoothedEle": 53.15321294781748,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769047,
        "lng": 120.991774,
        "ele": 53,
        "distanceKm": 30.774754060466883,
        "gradePct": -1.8348955527309863,
        "smoothedEle": 52.78754330568733,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76923,
        "lng": 120.991455,
        "ele": 52.5,
        "distanceKm": 30.812851625149992,
        "gradePct": -1.17185169764272,
        "smoothedEle": 52.237993112296785,
        "gradeBand": "descent"
      },
      {
        "lat": 24.769237,
        "lng": 120.991015,
        "ele": 51,
        "distanceKm": 30.8572832283506,
        "gradePct": -1.9637438518937889,
        "smoothedEle": 50.94245863758979,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768979,
        "lng": 120.99047,
        "ele": 48.5,
        "distanceKm": 30.91933888127815,
        "gradePct": -3.1983886317947823,
        "smoothedEle": 48.85044938919599,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768693,
        "lng": 120.990082,
        "ele": 48,
        "distanceKm": 30.969796901594314,
        "gradePct": -2.6288173477871393,
        "smoothedEle": 47.891782540080165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768518355467275,
        "lng": 120.98955859817595,
        "ele": 46.93786106955364,
        "distanceKm": 31.026097833143467,
        "gradePct": -1.9907341863222356,
        "smoothedEle": 46.731299877669784,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768374677368858,
        "lng": 120.98902129914165,
        "ele": 44.91871500165512,
        "distanceKm": 31.082650396825024,
        "gradePct": -2.740620916471574,
        "smoothedEle": 44.88622358517506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768231,
        "lng": 120.988484,
        "ele": 42.75,
        "distanceKm": 31.139203008197768,
        "gradePct": -3.2716024854150123,
        "smoothedEle": 43.03212972374305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768199,
        "lng": 120.987994,
        "ele": 42,
        "distanceKm": 31.18880426319769,
        "gradePct": -1.8833323064746086,
        "smoothedEle": 42.80113497446144,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767993,
        "lng": 120.987684,
        "ele": 44,
        "distanceKm": 31.227590295126575,
        "gradePct": 0.6821217067180401,
        "smoothedEle": 44.09497761617089,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767748,
        "lng": 120.987349,
        "ele": 46.5,
        "distanceKm": 31.271020911376013,
        "gradePct": 3.4084999614987144,
        "smoothedEle": 46.29245261659029,
        "gradeBand": "hard"
      },
      {
        "lat": 24.767513,
        "lng": 120.986863,
        "ele": 48.75,
        "distanceKm": 31.326614696845137,
        "gradePct": 4.187996935333598,
        "smoothedEle": 48.2504300865276,
        "gradeBand": "hard"
      },
      {
        "lat": 24.767409,
        "lng": 120.98636,
        "ele": 48.75,
        "distanceKm": 31.378701011795176,
        "gradePct": 2.1870591721702057,
        "smoothedEle": 48.75,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767396005831845,
        "lng": 120.98588821885534,
        "ele": 48.75,
        "distanceKm": 31.426357204432144,
        "gradePct": 0.3453123612008846,
        "smoothedEle": 48.586673730081905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767394002585068,
        "lng": 120.98541610942947,
        "ele": 48.12580783333159,
        "distanceKm": 31.474025157142975,
        "gradePct": -0.5797678942462514,
        "smoothedEle": 48.12538508007625,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767392,
        "lng": 120.984944,
        "ele": 47.5,
        "distanceKm": 31.52169311064183,
        "gradePct": -1.1932895573013242,
        "smoothedEle": 47.40936885387171,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767357011776024,
        "lng": 120.98445916318202,
        "ele": 46.50033645777741,
        "distanceKm": 31.570799953382906,
        "gradePct": -1.6228464219656882,
        "smoothedEle": 46.53374935216953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767321700489287,
        "lng": 120.98397435507835,
        "ele": 45.6319792447972,
        "distanceKm": 31.619906779097807,
        "gradePct": -1.8042106315906663,
        "smoothedEle": 45.63199055463474,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767286389093783,
        "lng": 120.98348954698433,
        "ele": 44.76366624060153,
        "distanceKm": 31.669013618681127,
        "gradePct": -1.801935017667158,
        "smoothedEle": 44.763666300829996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.76725107769828,
        "lng": 120.98300473889033,
        "ele": 43.895353236405796,
        "distanceKm": 31.718120472136974,
        "gradePct": -1.7127042262512018,
        "smoothedEle": 43.95208865257327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767215,
        "lng": 120.98252,
        "ele": 43.25,
        "distanceKm": 31.767227262213442,
        "gradePct": -1.160800522165514,
        "smoothedEle": 43.63445275636441,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767029955904796,
        "lng": 120.98208696872298,
        "ele": 44.102318693639745,
        "distanceKm": 31.815548877277923,
        "gradePct": 0.4519502038009484,
        "smoothedEle": 44.446539011874016,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7667984779524,
        "lng": 120.9816779843615,
        "ele": 46.30115934681987,
        "distanceKm": 31.864207950403006,
        "gradePct": 2.6471761532742852,
        "smoothedEle": 46.301158628672475,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.766567,
        "lng": 120.981269,
        "ele": 48.5,
        "distanceKm": 31.912867088848635,
        "gradePct": 3.6988693565890185,
        "smoothedEle": 48.10033860991499,
        "gradeBand": "hard"
      },
      {
        "lat": 24.76695,
        "lng": 120.980908,
        "ele": 49.25,
        "distanceKm": 31.968922961464582,
        "gradePct": 2.3607116899868092,
        "smoothedEle": 48.836208660527,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.767273,
        "lng": 120.98043,
        "ele": 48,
        "distanceKm": 32.02908282357934,
        "gradePct": -0.2057275239411182,
        "smoothedEle": 48.107482155143465,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767411,
        "lng": 120.980028,
        "ele": 47.5,
        "distanceKm": 32.07247534092361,
        "gradePct": -1.430736390109659,
        "smoothedEle": 47.36244170189582,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767511,
        "lng": 120.979491,
        "ele": 46.25,
        "distanceKm": 32.12782302016465,
        "gradePct": -1.7845693649642942,
        "smoothedEle": 46.33817300035228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767617,
        "lng": 120.979019,
        "ele": 45.5,
        "distanceKm": 32.17691528566032,
        "gradePct": -1.9833192403439244,
        "smoothedEle": 45.2969564792965,
        "gradeBand": "descent"
      },
      {
        "lat": 24.767852,
        "lng": 120.97876,
        "ele": 44.25,
        "distanceKm": 32.213883681645164,
        "gradePct": -2.6410994665679492,
        "smoothedEle": 43.955036078221795,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768115,
        "lng": 120.978508,
        "ele": 42,
        "distanceKm": 32.25264710858979,
        "gradePct": -3.688233970110557,
        "smoothedEle": 42.12343550209048,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768275,
        "lng": 120.978048,
        "ele": 39.75,
        "distanceKm": 32.302382580164675,
        "gradePct": -4.215115493117094,
        "smoothedEle": 40.15740049734721,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768482,
        "lng": 120.977764,
        "ele": 39.25,
        "distanceKm": 32.33915240119051,
        "gradePct": -2.786879708201265,
        "smoothedEle": 39.97419069347007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.768905,
        "lng": 120.97736,
        "ele": 42.25,
        "distanceKm": 32.40141138478819,
        "gradePct": 2.1088032232035787,
        "smoothedEle": 42.30459491392158,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769136,
        "lng": 120.97722,
        "ele": 44,
        "distanceKm": 32.43072993284542,
        "gradePct": 3.440924523783374,
        "smoothedEle": 43.45708112110113,
        "gradeBand": "hard"
      },
      {
        "lat": 24.7694915,
        "lng": 120.9772035,
        "ele": 44.25,
        "distanceKm": 32.47029487236516,
        "gradePct": 3.110121367998685,
        "smoothedEle": 44.25000000025152,
        "gradeBand": "hard"
      },
      {
        "lat": 24.769847,
        "lng": 120.977187,
        "ele": 44.5,
        "distanceKm": 32.509859811683675,
        "gradePct": 1.5631216178876306,
        "smoothedEle": 44.19981672484753,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.769959,
        "lng": 120.977143,
        "ele": 44.5,
        "distanceKm": 32.523082283346014,
        "gradePct": 0.9441894077470899,
        "smoothedEle": 44.10064818737999,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770118,
        "lng": 120.97692,
        "ele": 43.5,
        "distanceKm": 32.551709450161205,
        "gradePct": -0.3678658648721528,
        "smoothedEle": 43.50966466312992,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77014821482977,
        "lng": 120.9764941011975,
        "ele": 42.278932848218005,
        "distanceKm": 32.59484124233374,
        "gradePct": -2.026669269745454,
        "smoothedEle": 42.19219666925082,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770158,
        "lng": 120.976066,
        "ele": 40.75,
        "distanceKm": 32.63807803232527,
        "gradePct": -2.6802644363788963,
        "smoothedEle": 41.11080926052701,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770154,
        "lng": 120.975655,
        "ele": 40.5,
        "distanceKm": 32.67957689533787,
        "gradePct": -1.7763528190274473,
        "smoothedEle": 40.882095948770214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770138,
        "lng": 120.975277,
        "ele": 41.5,
        "distanceKm": 32.717782989830674,
        "gradePct": -0.06556824667831669,
        "smoothedEle": 41.552836592000354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.770092,
        "lng": 120.974607,
        "ele": 43.75,
        "distanceKm": 32.78562244587189,
        "gradePct": 2.953176896901845,
        "smoothedEle": 43.941407652375034,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.770031,
        "lng": 120.974059,
        "ele": 46.25,
        "distanceKm": 32.841365344118984,
        "gradePct": 4.692595144159857,
        "smoothedEle": 47.07574689898139,
        "gradeBand": "hard"
      },
      {
        "lat": 24.770079,
        "lng": 120.973647,
        "ele": 51,
        "distanceKm": 32.88330384218667,
        "gradePct": 7.040451808149356,
        "smoothedEle": 50.90022334511069,
        "gradeBand": "steep"
      },
      {
        "lat": 24.770313,
        "lng": 120.9734,
        "ele": 55,
        "distanceKm": 32.91934464138652,
        "gradePct": 8.756760789475056,
        "smoothedEle": 54.5943167263316,
        "gradeBand": "steep"
      },
      {
        "lat": 24.770695,
        "lng": 120.973239,
        "ele": 58.5,
        "distanceKm": 32.964825280009535,
        "gradePct": 7.7110710085925875,
        "smoothedEle": 56.92618808950822,
        "gradeBand": "steep"
      },
      {
        "lat": 24.770664,
        "lng": 120.973275,
        "ele": 54.5,
        "distanceKm": 32.96983459867536,
        "gradePct": 7.486501411880283,
        "smoothedEle": 57.15843078058201,
        "gradeBand": "steep"
      },
      {
        "lat": 24.77090808607405,
        "lng": 120.97298214993631,
        "ele": 59.636213157251895,
        "distanceKm": 33.0099702675963,
        "gradePct": 4.644271511158491,
        "smoothedEle": 58.27773795280238,
        "gradeBand": "hard"
      },
      {
        "lat": 24.771129,
        "lng": 120.972667,
        "ele": 59.25,
        "distanceKm": 33.050167929206125,
        "gradePct": 2.8129053676014903,
        "smoothedEle": 58.98758561479871,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.771245,
        "lng": 120.972119,
        "ele": 57.5,
        "distanceKm": 33.10697974237129,
        "gradePct": -0.41048434424873065,
        "smoothedEle": 57.783853570057715,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771189361921838,
        "lng": 120.97167833206915,
        "ele": 57.158524450121234,
        "distanceKm": 33.15189933337543,
        "gradePct": -1.7419881799839096,
        "smoothedEle": 57.20891234125981,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771138,
        "lng": 120.971237,
        "ele": 57,
        "distanceKm": 33.19682243694075,
        "gradePct": -1.062398039315858,
        "smoothedEle": 56.936669116680676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77110273012951,
        "lng": 120.97085169664659,
        "ele": 56.64865633668756,
        "distanceKm": 33.23592134886127,
        "gradePct": -0.7791477824350923,
        "smoothedEle": 56.63427225457467,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771082,
        "lng": 120.970465,
        "ele": 56.25,
        "distanceKm": 33.275031741512166,
        "gradePct": -1.1286162347009334,
        "smoothedEle": 55.94010896712251,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771127,
        "lng": 120.970047,
        "ele": 54.75,
        "distanceKm": 33.317530251923074,
        "gradePct": -2.0841441449820395,
        "smoothedEle": 54.69236761784549,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771198,
        "lng": 120.969617,
        "ele": 53,
        "distanceKm": 33.361656702886194,
        "gradePct": -3.208950003885474,
        "smoothedEle": 52.96855010541445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771278,
        "lng": 120.969092,
        "ele": 50.75,
        "distanceKm": 33.415403951894355,
        "gradePct": -4.310605180728255,
        "smoothedEle": 50.444189859658614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771433,
        "lng": 120.968636,
        "ele": 47.5,
        "distanceKm": 33.46456373103285,
        "gradePct": -5.281229105701538,
        "smoothedEle": 47.55078589471451,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771737,
        "lng": 120.968059,
        "ele": 42.75,
        "distanceKm": 33.531916670220845,
        "gradePct": -5.94693080387522,
        "smoothedEle": 43.52536769428495,
        "gradeBand": "descent"
      },
      {
        "lat": 24.771962,
        "lng": 120.967787,
        "ele": 42.75,
        "distanceKm": 33.569066465851364,
        "gradePct": -4.749963556371593,
        "smoothedEle": 42.53171172626445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.77221,
        "lng": 120.967476,
        "ele": 42,
        "distanceKm": 33.61085625952189,
        "gradePct": -2.9954939500074573,
        "smoothedEle": 41.788571012105265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772184,
        "lng": 120.967054,
        "ele": 40.5,
        "distanceKm": 33.65356062463785,
        "gradePct": -2.5737222022434296,
        "smoothedEle": 40.37272859322686,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772226,
        "lng": 120.9669,
        "ele": 39.5,
        "distanceKm": 33.669795168668976,
        "gradePct": -2.592474697004674,
        "smoothedEle": 39.92627863237081,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772268,
        "lng": 120.966836,
        "ele": 39,
        "distanceKm": 33.67776783253908,
        "gradePct": -2.669946442907244,
        "smoothedEle": 39.70703037594288,
        "gradeBand": "descent"
      },
      {
        "lat": 24.7725195,
        "lng": 120.9665125,
        "ele": 39.25000000000002,
        "distanceKm": 33.720766031448676,
        "gradePct": -2.1949399435406365,
        "smoothedEle": 39.26507740859904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.772771,
        "lng": 120.966189,
        "ele": 39.5,
        "distanceKm": 33.76376418010046,
        "gradePct": -0.5617528233765503,
        "smoothedEle": 39.530377994628516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.773277,
        "lng": 120.966376,
        "ele": 40,
        "distanceKm": 33.82311205657494,
        "gradePct": 0.24418484762955125,
        "smoothedEle": 39.52373734086255,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.773812,
        "lng": 120.966567,
        "ele": 38,
        "distanceKm": 33.885648821542574,
        "gradePct": -1.376721837096115,
        "smoothedEle": 38.151207403924964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774252286410864,
        "lng": 120.96679549231847,
        "ele": 37.0260354785813,
        "distanceKm": 33.93976933795045,
        "gradePct": -2.029318249482848,
        "smoothedEle": 37.12883226629029,
        "gradeBand": "descent"
      },
      {
        "lat": 24.774691,
        "lng": 120.967028,
        "ele": 36.5,
        "distanceKm": 33.993906211373876,
        "gradePct": -0.8722882231178862,
        "smoothedEle": 37.122931200174094,
        "gradeBand": "descent"
      },
      {
        "lat": 24.775056,
        "lng": 120.967156,
        "ele": 38.25,
        "distanceKm": 34.03650014948994,
        "gradePct": 0.9364965606805892,
        "smoothedEle": 38.127086127604954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.775536987694327,
        "lng": 120.96720982919813,
        "ele": 39.890916536992066,
        "distanceKm": 34.09025902015317,
        "gradePct": 2.7593288580579447,
        "smoothedEle": 39.88265761197264,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776021,
        "lng": 120.967233,
        "ele": 41.5,
        "distanceKm": 34.14412962381021,
        "gradePct": 2.6923885770308305,
        "smoothedEle": 41.06862591246689,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.77640262856941,
        "lng": 120.96730044274754,
        "ele": 41.28869956668162,
        "distanceKm": 34.18710764565607,
        "gradePct": 1.4158425003057584,
        "smoothedEle": 41.19558754853928,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.776779,
        "lng": 120.967401,
        "ele": 40.75,
        "distanceKm": 34.23017206557004,
        "gradePct": 0.1428415749072138,
        "smoothedEle": 40.90419003916635,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.777232142486877,
        "lng": 120.96733207642914,
        "ele": 40.75339548104866,
        "distanceKm": 34.281037492363886,
        "gradePct": -0.4259248665078143,
        "smoothedEle": 40.75173080522359,
        "gradeBand": "descent"
      },
      {
        "lat": 24.777683,
        "lng": 120.967235,
        "ele": 40.75,
        "distanceKm": 34.332119636401906,
        "gradePct": -0.29410991637605416,
        "smoothedEle": 40.60424265762404,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778316,
        "lng": 120.967171,
        "ele": 39.75,
        "distanceKm": 34.40280206827385,
        "gradePct": -0.7432295714293639,
        "smoothedEle": 39.94566093911393,
        "gradeBand": "descent"
      },
      {
        "lat": 24.778858,
        "lng": 120.967246,
        "ele": 40,
        "distanceKm": 34.46354358949492,
        "gradePct": -0.6926546439491447,
        "smoothedEle": 39.6187961489599,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779214462103276,
        "lng": 120.96745790844034,
        "ele": 38.7913316032951,
        "distanceKm": 34.508585463101944,
        "gradePct": -1.1458204128765297,
        "smoothedEle": 38.76871868241687,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779568,
        "lng": 120.967676,
        "ele": 37.5,
        "distanceKm": 34.55364315819133,
        "gradePct": -1.8094570087861355,
        "smoothedEle": 37.862615751220495,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779764,
        "lng": 120.967754,
        "ele": 37.25,
        "distanceKm": 34.576816390199824,
        "gradePct": -1.6393673792420935,
        "smoothedEle": 37.72893055786287,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779815,
        "lng": 120.967758,
        "ele": 37.5,
        "distanceKm": 34.582501699349216,
        "gradePct": -1.4027961214069236,
        "smoothedEle": 37.85820270020398,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779879,
        "lng": 120.96775,
        "ele": 37.5,
        "distanceKm": 34.58966386844546,
        "gradePct": -1.0348536608333272,
        "smoothedEle": 38.090973195832035,
        "gradeBand": "descent"
      },
      {
        "lat": 24.779965,
        "lng": 120.96771,
        "ele": 38,
        "distanceKm": 34.60004434624795,
        "gradePct": -0.5015768709042518,
        "smoothedEle": 38.428338724412825,
        "gradeBand": "descent"
      },
      {
        "lat": 24.780268,
        "lng": 120.967345,
        "ele": 40.75,
        "distanceKm": 34.64997447669492,
        "gradePct": 2.0909502478360324,
        "smoothedEle": 40.02734258818137,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.780825,
        "lng": 120.966969,
        "ele": 40.5,
        "distanceKm": 34.722617112323356,
        "gradePct": 0.822715815510274,
        "smoothedEle": 39.97394350190669,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.781201,
        "lng": 120.966834,
        "ele": 38.5,
        "distanceKm": 34.76659179196758,
        "gradePct": -1.5158964933692756,
        "smoothedEle": 38.49923082420382,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78173,
        "lng": 120.9669,
        "ele": 35.75,
        "distanceKm": 34.8257901643782,
        "gradePct": -3.987074575681717,
        "smoothedEle": 35.88045905285817,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78211,
        "lng": 120.966953,
        "ele": 34.25,
        "distanceKm": 34.86838172084543,
        "gradePct": -4.197075316026951,
        "smoothedEle": 34.22297402011982,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782452413134557,
        "lng": 120.96710367077351,
        "ele": 32.698833106171975,
        "distanceKm": 34.90938235614822,
        "gradePct": -3.6559289498435685,
        "smoothedEle": 32.95036602168267,
        "gradeBand": "descent"
      },
      {
        "lat": 24.782793,
        "lng": 120.96726,
        "ele": 32,
        "distanceKm": 34.9504107965454,
        "gradePct": -2.606779105425785,
        "smoothedEle": 32.31554803823369,
        "gradeBand": "descent"
      },
      {
        "lat": 24.78313119349081,
        "lng": 120.96739721155714,
        "ele": 32.36543235503753,
        "distanceKm": 34.990486355888116,
        "gradePct": -0.9410868397955605,
        "smoothedEle": 32.59578719308963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.783464,
        "lng": 120.96755,
        "ele": 33.5,
        "distanceKm": 35.03057869204286,
        "gradePct": 1.0430516188328192,
        "smoothedEle": 33.66545452325146,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.783849969893417,
        "lng": 120.9675567371778,
        "ele": 35.27060475610431,
        "distanceKm": 35.073502034259135,
        "gradePct": 2.6391008120217356,
        "smoothedEle": 35.11612055639276,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784236,
        "lng": 120.967551,
        "ele": 36.5,
        "distanceKm": 35.11643059027849,
        "gradePct": 2.8612013643839256,
        "smoothedEle": 36.14918319103974,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.784585,
        "lng": 120.967528,
        "ele": 36.5,
        "distanceKm": 35.155307074263995,
        "gradePct": 2.1049391377435485,
        "smoothedEle": 36.60613063511006,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785102,
        "lng": 120.967554,
        "ele": 37,
        "distanceKm": 35.212854820219974,
        "gradePct": 0.6544396355141635,
        "smoothedEle": 36.71757300843567,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.785576,
        "lng": 120.967608,
        "ele": 36.25,
        "distanceKm": 35.265842458498824,
        "gradePct": 0.11429630760500781,
        "smoothedEle": 36.74082892725022,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786143,
        "lng": 120.96772,
        "ele": 38,
        "distanceKm": 35.329895878979286,
        "gradePct": 1.2906942555352603,
        "smoothedEle": 38.01574647028951,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786493159057496,
        "lng": 120.96770959531509,
        "ele": 39.08199751972877,
        "distanceKm": 35.3688460087045,
        "gradePct": 2.2309737376680765,
        "smoothedEle": 39.03158524670542,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.786842,
        "lng": 120.967667,
        "ele": 40,
        "distanceKm": 35.40787302135934,
        "gradePct": 2.720834239028687,
        "smoothedEle": 40.29823834888039,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.787368,
        "lng": 120.967854,
        "ele": 43,
        "distanceKm": 35.46933268022985,
        "gradePct": 4.2476664194570795,
        "smoothedEle": 43.29504698215995,
        "gradeBand": "hard"
      },
      {
        "lat": 24.78775257930317,
        "lng": 120.96796677137462,
        "ele": 46.132538183731214,
        "distanceKm": 35.513585420474996,
        "gradePct": 5.830295152474437,
        "smoothedEle": 46.40707339729857,
        "gradeBand": "hard"
      },
      {
        "lat": 24.788138,
        "lng": 120.968076,
        "ele": 50.25,
        "distanceKm": 35.55783810021401,
        "gradePct": 6.266300693684446,
        "smoothedEle": 49.000865283647066,
        "gradeBand": "steep"
      },
      {
        "lat": 24.788519924368067,
        "lng": 120.96801963980036,
        "ele": 49.894993760955366,
        "distanceKm": 35.60068563779167,
        "gradePct": 3.323083574245305,
        "smoothedEle": 48.822993613124275,
        "gradeBand": "hard"
      },
      {
        "lat": 24.788891,
        "lng": 120.967887,
        "ele": 45.75,
        "distanceKm": 35.64406564658357,
        "gradePct": -1.8650373976110493,
        "smoothedEle": 46.328580083361985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789461,
        "lng": 120.967899,
        "ele": 42.5,
        "distanceKm": 35.70745841777418,
        "gradePct": -5.560228844463373,
        "smoothedEle": 42.873320079898605,
        "gradeBand": "descent"
      },
      {
        "lat": 24.789808,
        "lng": 120.968034,
        "ele": 41.75,
        "distanceKm": 35.74837911423979,
        "gradePct": -4.260488571020812,
        "smoothedEle": 41.832983439467185,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790384,
        "lng": 120.968366,
        "ele": 40.75,
        "distanceKm": 35.82066632448244,
        "gradePct": -2.116008245556392,
        "smoothedEle": 40.421524067299906,
        "gradeBand": "descent"
      },
      {
        "lat": 24.790785964822327,
        "lng": 120.96844068777155,
        "ele": 39.04148563034958,
        "distanceKm": 35.86599427843082,
        "gradePct": -2.399835819030956,
        "smoothedEle": 39.08919896746933,
        "gradeBand": "descent"
      },
      {
        "lat": 24.791196,
        "lng": 120.968443,
        "ele": 37.5,
        "distanceKm": 35.91158877037919,
        "gradePct": -2.8641621919105678,
        "smoothedEle": 37.73460759800577,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79175591604288,
        "lng": 120.96842670535783,
        "ele": 36.52053578257794,
        "distanceKm": 35.97387040495534,
        "gradePct": -2.3894825991040367,
        "smoothedEle": 36.46572027456074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.792316,
        "lng": 120.968413,
        "ele": 35.25,
        "distanceKm": 36.036164350916835,
        "gradePct": -2.278897210912486,
        "smoothedEle": 34.95502277953874,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79283647213984,
        "lng": 120.96839387817626,
        "ele": 32.71038278494102,
        "distanceKm": 36.09407047380257,
        "gradePct": -3.2487981743596315,
        "smoothedEle": 32.727047956963496,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793357,
        "lng": 120.968377,
        "ele": 30.25,
        "distanceKm": 36.15197568221267,
        "gradePct": -3.5147925260367217,
        "smoothedEle": 30.8318792487553,
        "gradeBand": "descent"
      },
      {
        "lat": 24.793871006536257,
        "lng": 120.9683748262297,
        "ele": 30.5489070955625,
        "distanceKm": 36.20913110147927,
        "gradePct": -1.706178644892632,
        "smoothedEle": 30.52795285286884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.794385,
        "lng": 120.96837,
        "ele": 30.75,
        "distanceKm": 36.26628672229551,
        "gradePct": 0.013359735554736385,
        "smoothedEle": 30.769139414232956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794621,
        "lng": 120.96842,
        "ele": 30.75,
        "distanceKm": 36.29300973244282,
        "gradePct": 0.37727546714465454,
        "smoothedEle": 30.99095439202691,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.794771,
        "lng": 120.968557,
        "ele": 31.25,
        "distanceKm": 36.314676545157255,
        "gradePct": 0.6833523954866553,
        "smoothedEle": 31.234706035064317,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.7950515,
        "lng": 120.968839,
        "ele": 31.874999999999947,
        "distanceKm": 36.356904064108214,
        "gradePct": 1.1454538713254026,
        "smoothedEle": 31.875000135622603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795332,
        "lng": 120.969121,
        "ele": 32.5,
        "distanceKm": 36.39913153965993,
        "gradePct": 1.1269309092058766,
        "smoothedEle": 32.186755632425324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.795648,
        "lng": 120.969429,
        "ele": 32,
        "distanceKm": 36.446049448190415,
        "gradePct": 0.30910245298954125,
        "smoothedEle": 32.019514502249194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79593302028735,
        "lng": 120.96970230712486,
        "ele": 31.609561250201327,
        "distanceKm": 36.48806815074852,
        "gradePct": -0.44441186436179414,
        "smoothedEle": 31.660665375942354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79621801511013,
        "lng": 120.96997564714646,
        "ele": 31.395400454014748,
        "distanceKm": 36.53008685651621,
        "gradePct": -0.6610794194473129,
        "smoothedEle": 31.415334504701708,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796503,
        "lng": 120.970249,
        "ele": 31.25,
        "distanceKm": 36.57210553825656,
        "gradePct": -0.6222117747322483,
        "smoothedEle": 31.17477788534034,
        "gradeBand": "descent"
      },
      {
        "lat": 24.796776,
        "lng": 120.969818,
        "ele": 30.75,
        "distanceKm": 36.625155672394044,
        "gradePct": -0.359621473160358,
        "smoothedEle": 31.084504296641907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.797139,
        "lng": 120.96931,
        "ele": 32,
        "distanceKm": 36.690414931276344,
        "gradePct": 0.6522024629834262,
        "smoothedEle": 31.795823883940436,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79746316216441,
        "lng": 120.96901728788403,
        "ele": 32.04852217073196,
        "distanceKm": 36.737022777831456,
        "gradePct": 0.7235868861965326,
        "smoothedEle": 31.937441480202253,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.79781367107984,
        "lng": 120.96875928258625,
        "ele": 31.679098777570232,
        "distanceKm": 36.783898272767566,
        "gradePct": -0.045694236718581104,
        "smoothedEle": 31.679098702028455,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798164179995272,
        "lng": 120.96850127728847,
        "ele": 31.309675384408564,
        "distanceKm": 36.830773726806555,
        "gradePct": -0.6341985392553812,
        "smoothedEle": 31.28425524573083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798514777338305,
        "lng": 120.968243417692,
        "ele": 30.844552119635644,
        "distanceKm": 36.87764914750455,
        "gradePct": -1.000739473054729,
        "smoothedEle": 30.712799748136327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.798865833003727,
        "lng": 120.967986313269,
        "ele": 29.88341408972677,
        "distanceKm": 36.92452467372908,
        "gradePct": -1.4534786595644504,
        "smoothedEle": 29.883413894247585,
        "gradeBand": "descent"
      },
      {
        "lat": 24.79921688866915,
        "lng": 120.967729208846,
        "ele": 28.922276059817897,
        "distanceKm": 36.971400159277,
        "gradePct": -1.8667049318584275,
        "smoothedEle": 28.922275864338054,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799567944334576,
        "lng": 120.967472104423,
        "ele": 27.961138029908874,
        "distanceKm": 37.01827560414818,
        "gradePct": -2.032843136671971,
        "smoothedEle": 27.961137834423784,
        "gradeBand": "descent"
      },
      {
        "lat": 24.799919,
        "lng": 120.967215,
        "ele": 27,
        "distanceKm": 37.0651510083415,
        "gradePct": -1.6743359893443828,
        "smoothedEle": 27.376072875613257,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800304,
        "lng": 120.966928,
        "ele": 27.5,
        "distanceKm": 37.116841996802876,
        "gradePct": -0.38250262488654296,
        "smoothedEle": 27.60803001407347,
        "gradeBand": "descent"
      },
      {
        "lat": 24.800587,
        "lng": 120.9667,
        "ele": 28.25,
        "distanceKm": 37.155827985357526,
        "gradePct": 0.47605757258300624,
        "smoothedEle": 27.96849369139338,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801049881890133,
        "lng": 120.96635313867915,
        "ele": 27.970776890397932,
        "distanceKm": 37.218077696162865,
        "gradePct": 0.07936545598811294,
        "smoothedEle": 27.69882072184759,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.801514,
        "lng": 120.966008,
        "ele": 26.25,
        "distanceKm": 37.28034358477998,
        "gradePct": -1.287629336109212,
        "smoothedEle": 26.57465993423678,
        "gradeBand": "descent"
      },
      {
        "lat": 24.801772,
        "lng": 120.965792,
        "ele": 26.25,
        "distanceKm": 37.316376679887654,
        "gradePct": 0.048877370661031004,
        "smoothedEle": 27.755067092368183,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80204,
        "lng": 120.965581,
        "ele": 31,
        "distanceKm": 37.3530054338932,
        "gradePct": 2.9689496193685305,
        "smoothedEle": 30.037177989152525,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.802592,
        "lng": 120.965163,
        "ele": 35.25,
        "distanceKm": 37.42748801829223,
        "gradePct": 5.437942365224662,
        "smoothedEle": 33.885288164291445,
        "gradeBand": "hard"
      },
      {
        "lat": 24.803077,
        "lng": 120.964797,
        "ele": 30.5,
        "distanceKm": 37.492857839168515,
        "gradePct": -1.4149432177238537,
        "smoothedEle": 30.681191875039673,
        "gradeBand": "descent"
      },
      {
        "lat": 24.803433,
        "lng": 120.964516,
        "ele": 28.00000000000019,
        "distanceKm": 37.54155584883662,
        "gradePct": -5.195755222636927,
        "smoothedEle": 27.99999940705271,
        "gradeBand": "descent"
      },
      {
        "lat": 24.803789,
        "lng": 120.964235,
        "ele": 25.5,
        "distanceKm": 37.59025381106893,
        "gradePct": -4.735555737861909,
        "smoothedEle": 26.073272356141363,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804155,
        "lng": 120.964833,
        "ele": 25,
        "distanceKm": 37.663052564687014,
        "gradePct": -1.6639957763485331,
        "smoothedEle": 25.485489522185258,
        "gradeBand": "descent"
      },
      {
        "lat": 24.804472,
        "lng": 120.965349,
        "ele": 27.25,
        "distanceKm": 37.72594266191096,
        "gradePct": 1.858194676188129,
        "smoothedEle": 27.64331245761501,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.80469,
        "lng": 120.965677,
        "ele": 30,
        "distanceKm": 37.766975471813105,
        "gradePct": 3.944724250060933,
        "smoothedEle": 29.564812689148738,
        "gradeBand": "hard"
      },
      {
        "lat": 24.804954,
        "lng": 120.966077,
        "ele": 31.5,
        "distanceKm": 37.81689393141388,
        "gradePct": 3.7188163366185556,
        "smoothedEle": 31.051657685664605,
        "gradeBand": "hard"
      },
      {
        "lat": 24.805329,
        "lng": 120.966046,
        "ele": 31.25,
        "distanceKm": 37.85870932234089,
        "gradePct": 2.0390672760078052,
        "smoothedEle": 31.216789532826198,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.805718000000002,
        "lng": 120.96600049999999,
        "ele": 30.874999999999968,
        "distanceKm": 37.902207333799545,
        "gradePct": 0.26078958756642817,
        "smoothedEle": 30.874999997146055,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.806107,
        "lng": 120.965955,
        "ele": 30.5,
        "distanceKm": 37.9457053437361,
        "gradePct": -0.622849629716077,
        "smoothedEle": 30.542586299571944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.806540764200076,
        "lng": 120.96585313995098,
        "ele": 30.25,
        "distanceKm": 37.9950213982985,
        "gradePct": -0.6181091995926434,
        "smoothedEle": 30.313354931797,
        "gradeBand": "descent"
      },
      {
        "lat": 24.806972,
        "lng": 120.965736,
        "ele": 30.25,
        "distanceKm": 38.04440887091448,
        "gradePct": -0.2553676387187841,
        "smoothedEle": 30.2971263629542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.807478,
        "lng": 120.965471,
        "ele": 30.5,
        "distanceKm": 38.106707780551126,
        "gradePct": -0.29864926463628483,
        "smoothedEle": 30.010865558548865,
        "gradeBand": "descent"
      },
      {
        "lat": 24.807975,
        "lng": 120.965222,
        "ele": 28.25,
        "distanceKm": 38.16741817357362,
        "gradePct": -1.8692831404125716,
        "smoothedEle": 28.32211646863166,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8083,
        "lng": 120.965034,
        "ele": 27,
        "distanceKm": 38.208235515995206,
        "gradePct": -2.767131662882931,
        "smoothedEle": 27.20123768188145,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808583,
        "lng": 120.965116,
        "ele": 26.5,
        "distanceKm": 38.24077394480177,
        "gradePct": -2.632226790930302,
        "smoothedEle": 26.431038183746193,
        "gradeBand": "descent"
      },
      {
        "lat": 24.808978925614085,
        "lng": 120.96479422299916,
        "ele": 25.450727171157627,
        "distanceKm": 38.29548243668189,
        "gradePct": -1.94461137236343,
        "smoothedEle": 25.60683666668434,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809374932286914,
        "lng": 120.96447256623009,
        "ele": 25.090808796991066,
        "distanceKm": 38.350190918070524,
        "gradePct": -1.0808032496388573,
        "smoothedEle": 25.20836511851732,
        "gradeBand": "descent"
      },
      {
        "lat": 24.809771,
        "lng": 120.964151,
        "ele": 25.25,
        "distanceKm": 38.40489937917365,
        "gradePct": -0.16303526879322786,
        "smoothedEle": 25.375212697228125,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810025,
        "lng": 120.963938,
        "ele": 25.75,
        "distanceKm": 38.44039427115616,
        "gradePct": 0.17447761692744843,
        "smoothedEle": 25.454197029399353,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.810337363552957,
        "lng": 120.96380343152363,
        "ele": 25.320882294663065,
        "distanceKm": 38.47768877153047,
        "gradePct": -0.09217609376889738,
        "smoothedEle": 25.200050829248596,
        "gradeBand": "descent"
      },
      {
        "lat": 24.810669,
        "lng": 120.963722,
        "ele": 24.5,
        "distanceKm": 38.515469944877324,
        "gradePct": -0.6778682476212207,
        "smoothedEle": 24.72086639955925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811307,
        "lng": 120.963579,
        "ele": 24.25,
        "distanceKm": 38.58786573174763,
        "gradePct": -0.7864696118896995,
        "smoothedEle": 24.28450526641212,
        "gradeBand": "descent"
      },
      {
        "lat": 24.811679,
        "lng": 120.963471,
        "ele": 24.25,
        "distanceKm": 38.63064247379457,
        "gradePct": -0.32562492644356555,
        "smoothedEle": 24.303789992342374,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81217845325956,
        "lng": 120.96334527500032,
        "ele": 24.5,
        "distanceKm": 38.68761047992067,
        "gradePct": 0.1063762646214122,
        "smoothedEle": 24.39242004565246,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.812678,
        "lng": 120.96322,
        "ele": 24.25,
        "distanceKm": 38.744578510316536,
        "gradePct": -0.27800706217585575,
        "smoothedEle": 24.047464427271024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8131575,
        "lng": 120.9631115,
        "ele": 23.125,
        "distanceKm": 38.7990095263638,
        "gradePct": -1.1983960271702159,
        "smoothedEle": 23.12499995204668,
        "gradeBand": "descent"
      },
      {
        "lat": 24.813637,
        "lng": 120.963003,
        "ele": 22,
        "distanceKm": 38.85344053388602,
        "gradePct": -1.7339729954886034,
        "smoothedEle": 22.163303128952396,
        "gradeBand": "descent"
      },
      {
        "lat": 24.813867,
        "lng": 120.962997,
        "ele": 21.75,
        "distanceKm": 38.87902257089796,
        "gradePct": -1.62070452793599,
        "smoothedEle": 21.843022453735085,
        "gradeBand": "descent"
      },
      {
        "lat": 24.814251789920306,
        "lng": 120.96271049377017,
        "ele": 21.75,
        "distanceKm": 38.9306644652985,
        "gradePct": -0.6625645516431766,
        "smoothedEle": 21.903150250366277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81463585964404,
        "lng": 120.9624228164004,
        "ele": 22.383400317493894,
        "distanceKm": 38.98230634291162,
        "gradePct": 0.4685731274781735,
        "smoothedEle": 22.315418949393546,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.815019588882684,
        "lng": 120.96213458705266,
        "ele": 22.73564266470818,
        "distanceKm": 39.03394822643898,
        "gradePct": 0.5431250169471576,
        "smoothedEle": 22.472490269475912,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.815404,
        "lng": 120.961848,
        "ele": 22,
        "distanceKm": 39.08555964825966,
        "gradePct": -0.4036258543341922,
        "smoothedEle": 21.921688182742912,
        "gradeBand": "descent"
      },
      {
        "lat": 24.81550157445273,
        "lng": 120.96145114040917,
        "ele": 21.123811924553337,
        "distanceKm": 39.1270572930221,
        "gradePct": -1.473190676898192,
        "smoothedEle": 20.978340480816872,
        "gradeBand": "descent"
      },
      {
        "lat": 24.815584,
        "lng": 120.96105,
        "ele": 19.75,
        "distanceKm": 39.16856795153664,
        "gradePct": -1.7806900948276403,
        "smoothedEle": 20.32233511917731,
        "gradeBand": "descent"
      },
      {
        "lat": 24.816075493885315,
        "lng": 120.96118852614283,
        "ele": 20.532633575340473,
        "distanceKm": 39.224979649017634,
        "gradePct": -0.23473456482687305,
        "smoothedEle": 20.79083608310558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.816567,
        "lng": 120.961327,
        "ele": 22.5,
        "distanceKm": 39.28139134257831,
        "gradePct": 1.5374700233205796,
        "smoothedEle": 21.96630381798762,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817021325023017,
        "lng": 120.96116951239033,
        "ele": 22.05388712494101,
        "distanceKm": 39.334351530505614,
        "gradePct": 0.898842411698451,
        "smoothedEle": 21.884963259520582,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.817475676950256,
        "lng": 120.96101212196858,
        "ele": 20.88956030720419,
        "distanceKm": 39.387311611768254,
        "gradePct": -1.351515263856387,
        "smoothedEle": 20.60569572381788,
        "gradeBand": "descent"
      },
      {
        "lat": 24.817929849325708,
        "lng": 120.96085409907244,
        "ele": 18.518317873794487,
        "distanceKm": 39.4402718177785,
        "gradePct": -3.0818317611598074,
        "smoothedEle": 18.66012508429052,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818384,
        "lng": 120.960696,
        "ele": 16.75,
        "distanceKm": 39.49323202097451,
        "gradePct": -2.929572888666976,
        "smoothedEle": 17.458627942411074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.818825,
        "lng": 120.960337,
        "ele": 18.25,
        "distanceKm": 39.554202504298466,
        "gradePct": -0.3532308405091754,
        "smoothedEle": 17.990851649001122,
        "gradeBand": "descent"
      },
      {
        "lat": 24.819321,
        "lng": 120.959861,
        "ele": 18.5,
        "distanceKm": 39.62734408504132,
        "gradePct": 0.937272293688264,
        "smoothedEle": 18.693671357259905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.819713,
        "lng": 120.959536,
        "ele": 19.5,
        "distanceKm": 39.681895208775046,
        "gradePct": 1.1607922373080704,
        "smoothedEle": 19.41774393888466,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820217,
        "lng": 120.959289,
        "ele": 20.25,
        "distanceKm": 39.74323165671742,
        "gradePct": 1.2932875658809728,
        "smoothedEle": 20.197839180996105,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.820631503719415,
        "lng": 120.95937697926973,
        "ele": 20.599884831838068,
        "distanceKm": 39.790169910242405,
        "gradePct": 0.8912457231684934,
        "smoothedEle": 20.41422978372833,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.821046,
        "lng": 120.959465,
        "ele": 20.25,
        "distanceKm": 39.83710813765291,
        "gradePct": -0.05637058768017686,
        "smoothedEle": 20.063587851156054,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821627,
        "lng": 120.959678,
        "ele": 18.5,
        "distanceKm": 39.90519502956816,
        "gradePct": -1.5999559206827478,
        "smoothedEle": 18.702031940668814,
        "gradeBand": "descent"
      },
      {
        "lat": 24.821983814167385,
        "lng": 120.95930229270758,
        "ele": 18.157760420136377,
        "distanceKm": 39.96007590272518,
        "gradePct": -1.4049150761777809,
        "smoothedEle": 18.199378843280627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822341,
        "lng": 120.958927,
        "ele": 18,
        "distanceKm": 40.01495770147069,
        "gradePct": -0.8173040536052935,
        "smoothedEle": 17.795311720951307,
        "gradeBand": "descent"
      },
      {
        "lat": 24.822779,
        "lng": 120.958554,
        "ele": 16.75,
        "distanceKm": 40.07651328371433,
        "gradePct": -1.619356763218148,
        "smoothedEle": 16.45900189875038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823213253102768,
        "lng": 120.95828860074975,
        "ele": 14.377280300435118,
        "distanceKm": 40.131731279980436,
        "gradePct": -2.9423033214819148,
        "smoothedEle": 14.488870868817623,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823663,
        "lng": 120.958055,
        "ele": 12.5,
        "distanceKm": 40.18701924163995,
        "gradePct": -3.3877212860785413,
        "smoothedEle": 12.696436990880633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.823982,
        "lng": 120.957862,
        "ele": 11.75,
        "distanceKm": 40.22748640084961,
        "gradePct": -2.589398456735176,
        "smoothedEle": 12.050926080441899,
        "gradeBand": "descent"
      },
      {
        "lat": 24.824375912499388,
        "lng": 120.9575913457147,
        "ele": 12.07111606924408,
        "distanceKm": 40.27910643178673,
        "gradePct": -0.7348350053973134,
        "smoothedEle": 12.218135017718014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82477,
        "lng": 120.957321,
        "ele": 13,
        "distanceKm": 40.33072646341561,
        "gradePct": 0.9656936298161481,
        "smoothedEle": 13.02711500459504,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82521482099966,
        "lng": 120.95699206022074,
        "ele": 14.24564532312855,
        "distanceKm": 40.390295712242434,
        "gradePct": 1.5506991915222,
        "smoothedEle": 13.9441906294241,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.825656,
        "lng": 120.956657,
        "ele": 14,
        "distanceKm": 40.44987742743653,
        "gradePct": 0.41107194216375603,
        "smoothedEle": 13.733018300879522,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.82601212100762,
        "lng": 120.95640428167835,
        "ele": 12.802901676849832,
        "distanceKm": 40.496978763032,
        "gradePct": -1.1186077791250038,
        "smoothedEle": 12.801896466105273,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826368326587122,
        "lng": 120.95615170675667,
        "ele": 11.602002079629772,
        "distanceKm": 40.544080132079394,
        "gradePct": -2.0567308307815724,
        "smoothedEle": 11.696834518061207,
        "gradeBand": "descent"
      },
      {
        "lat": 24.826724586940973,
        "lng": 120.95589922463957,
        "ele": 10.759646261889692,
        "distanceKm": 40.59118151610292,
        "gradePct": -2.1568531341532053,
        "smoothedEle": 10.75964609488859,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82708084729482,
        "lng": 120.95564674252246,
        "ele": 9.917290444149483,
        "distanceKm": 40.63828286047549,
        "gradePct": -1.9155560890069918,
        "smoothedEle": 9.917290277149373,
        "gradeBand": "descent"
      },
      {
        "lat": 24.82743710764867,
        "lng": 120.95539426040536,
        "ele": 9.074934626409274,
        "distanceKm": 40.68538416519733,
        "gradePct": -1.796131988286976,
        "smoothedEle": 9.078865497360711,
        "gradeBand": "descent"
      },
      {
        "lat": 24.827793369141563,
        "lng": 120.9551417801914,
        "ele": 8.247441270290956,
        "distanceKm": 40.73248543289393,
        "gradePct": -1.5873861553947914,
        "smoothedEle": 8.433584747356718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828149684570782,
        "lng": 120.9548893900957,
        "ele": 8.123720635145478,
        "distanceKm": 40.77958678662291,
        "gradePct": -1.0583408785040023,
        "smoothedEle": 8.123720610630508,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828506,
        "lng": 120.954637,
        "ele": 8,
        "distanceKm": 40.82668810072233,
        "gradePct": -0.035352540725682,
        "smoothedEle": 8.477654842892358,
        "gradeBand": "descent"
      },
      {
        "lat": 24.828916,
        "lng": 120.954455,
        "ele": 9.75,
        "distanceKm": 40.87583878097348,
        "gradePct": 1.4332976081305846,
        "smoothedEle": 9.581675101059814,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829317,
        "lng": 120.954483,
        "ele": 10.75,
        "distanceKm": 40.92051745120105,
        "gradePct": 1.9004736984899497,
        "smoothedEle": 10.331760321246028,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829655,
        "lng": 120.954697,
        "ele": 10.25,
        "distanceKm": 40.96386423924431,
        "gradePct": 0.6856568808608765,
        "smoothedEle": 9.998360391217851,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.829885,
        "lng": 120.954963,
        "ele": 9,
        "distanceKm": 41.000940617056465,
        "gradePct": -0.3707424744949091,
        "smoothedEle": 9.632353321260588,
        "gradeBand": "descent"
      },
      {
        "lat": 24.830237,
        "lng": 120.955305,
        "ele": 10,
        "distanceKm": 41.05312448053915,
        "gradePct": -0.24355759001309182,
        "smoothedEle": 9.837407186961036,
        "gradeBand": "descent"
      },
      {
        "lat": 24.830534,
        "lng": 120.955507,
        "ele": 10.25,
        "distanceKm": 41.091934184901056,
        "gradePct": 0.3012765975007731,
        "smoothedEle": 10.022538761493289,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83089,
        "lng": 120.955521,
        "ele": 9.75,
        "distanceKm": 41.13154483731741,
        "gradePct": 0.22460675017458026,
        "smoothedEle": 9.977217814968052,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.831218,
        "lng": 120.955384,
        "ele": 10,
        "distanceKm": 41.17054928051025,
        "gradePct": 0.1712430952867916,
        "smoothedEle": 10.091770746770768,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.831636,
        "lng": 120.955089,
        "ele": 10.75,
        "distanceKm": 41.22574522910233,
        "gradePct": 0.16198840178114562,
        "smoothedEle": 10.145841899772554,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.831843,
        "lng": 120.954895,
        "ele": 9.5,
        "distanceKm": 41.25596236391068,
        "gradePct": -0.4684977229074438,
        "smoothedEle": 9.580432415828456,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832131,
        "lng": 120.954341,
        "ele": 7.5,
        "distanceKm": 41.32039131474875,
        "gradePct": -2.4842561306252833,
        "smoothedEle": 7.656340958077665,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832425,
        "lng": 120.953749,
        "ele": 6.25,
        "distanceKm": 41.38849218938208,
        "gradePct": -1.889217524127522,
        "smoothedEle": 6.719751620958752,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832452,
        "lng": 120.953116,
        "ele": 7.75,
        "distanceKm": 41.45244124439312,
        "gradePct": 0.6631104302928058,
        "smoothedEle": 7.878669643320183,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832482,
        "lng": 120.952578,
        "ele": 9.5,
        "distanceKm": 41.50683533230884,
        "gradePct": 2.4901827810086754,
        "smoothedEle": 9.542358374783051,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832555,
        "lng": 120.95191,
        "ele": 12.25,
        "distanceKm": 41.57473277918006,
        "gradePct": 3.1339447770014544,
        "smoothedEle": 11.694419679920934,
        "gradeBand": "hard"
      },
      {
        "lat": 24.83261733333333,
        "lng": 120.951376,
        "ele": 11.75,
        "distanceKm": 41.629064693356725,
        "gradePct": 1.50306502445771,
        "smoothedEle": 11.749999932727022,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.832679666666667,
        "lng": 120.95084200000001,
        "ele": 11.25,
        "distanceKm": 41.68339658062419,
        "gradePct": -0.4532826094998022,
        "smoothedEle": 11.2499999327337,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832742,
        "lng": 120.950308,
        "ele": 10.75,
        "distanceKm": 41.737728440985144,
        "gradePct": -0.9016347441549218,
        "smoothedEle": 10.768635327674264,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832796333333334,
        "lng": 120.94988933333333,
        "ele": 10.416666666666648,
        "distanceKm": 41.780407428131156,
        "gradePct": -0.8608415670625986,
        "smoothedEle": 10.416666636074815,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832850666666666,
        "lng": 120.94947066666667,
        "ele": 10.083333333333352,
        "distanceKm": 41.82308639692206,
        "gradePct": -0.8150263102894906,
        "smoothedEle": 10.083333302746365,
        "gradeBand": "descent"
      },
      {
        "lat": 24.832905,
        "lng": 120.949052,
        "ele": 9.75,
        "distanceKm": 41.86576534736077,
        "gradePct": -0.8443427460948212,
        "smoothedEle": 9.693075443746128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833001280865357,
        "lng": 120.94868021091925,
        "ele": 9.25,
        "distanceKm": 41.90478149181837,
        "gradePct": -0.8238395135192114,
        "smoothedEle": 9.402459638855982,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833146,
        "lng": 120.948327,
        "ele": 9.25,
        "distanceKm": 41.9438894182423,
        "gradePct": -0.5677817006086902,
        "smoothedEle": 9.325328026400218,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833085,
        "lng": 120.947939,
        "ele": 9.5,
        "distanceKm": 41.98362699712212,
        "gradePct": 0.08044612532420699,
        "smoothedEle": 9.640477215400228,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833128,
        "lng": 120.947521,
        "ele": 10.25,
        "distanceKm": 42.026078932642,
        "gradePct": 0.4501356163992838,
        "smoothedEle": 9.810590830523036,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833191,
        "lng": 120.947127,
        "ele": 9.5,
        "distanceKm": 42.06645121859492,
        "gradePct": 0.04085399108585838,
        "smoothedEle": 9.545114234393697,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.833317033260826,
        "lng": 120.94660513614787,
        "ele": 8.71550235745941,
        "distanceKm": 42.12094701728086,
        "gradePct": -1.0630667316542466,
        "smoothedEle": 8.726959461146214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83346954885281,
        "lng": 120.94609136073198,
        "ele": 7.980487456330524,
        "distanceKm": 42.17549689393248,
        "gradePct": -1.42882272571286,
        "smoothedEle": 7.980487233248088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833622064444796,
        "lng": 120.94557758531609,
        "ele": 7.245472555201538,
        "distanceKm": 42.230046709882636,
        "gradePct": -1.3942687323048053,
        "smoothedEle": 7.208168580917681,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833775076398283,
        "lng": 120.94506398984767,
        "ele": 6.346306990066495,
        "distanceKm": 42.28459639575019,
        "gradePct": -1.5501489551351242,
        "smoothedEle": 6.301507138019778,
        "gradeBand": "descent"
      },
      {
        "lat": 24.833927,
        "lng": 120.94455,
        "ele": 5.25,
        "distanceKm": 42.339146236029165,
        "gradePct": -1.562588484317989,
        "smoothedEle": 5.494338354791488,
        "gradeBand": "descent"
      },
      {
        "lat": 24.834135863084857,
        "lng": 120.94404190829336,
        "ele": 5.228046141151818,
        "distanceKm": 42.39543379120896,
        "gradePct": -0.824057465747959,
        "smoothedEle": 5.317089765421872,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83436243154243,
        "lng": 120.94354245414668,
        "ele": 5.614023070575909,
        "distanceKm": 42.45178074687893,
        "gradePct": 0.1594707427422421,
        "smoothedEle": 5.6140232297989785,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.834589,
        "lng": 120.943043,
        "ele": 6,
        "distanceKm": 42.50812762004499,
        "gradePct": 0.5703112422450757,
        "smoothedEle": 5.9542941082377885,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83480187533695,
        "lng": 120.94262882783312,
        "ele": 6.148322022897387,
        "distanceKm": 42.5561601417696,
        "gradePct": 0.43081174561625263,
        "smoothedEle": 6.071281528040917,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835003,
        "lng": 120.942207,
        "ele": 6,
        "distanceKm": 42.60424487444656,
        "gradePct": 0.2555447414227911,
        "smoothedEle": 6.186391492579397,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835304,
        "lng": 120.941593,
        "ele": 7,
        "distanceKm": 42.674666753399286,
        "gradePct": 0.7701665854120586,
        "smoothedEle": 6.88575106139141,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.8354955,
        "lng": 120.941187,
        "ele": 7.12499999999999,
        "distanceKm": 42.72084008679488,
        "gradePct": 0.7738015149090721,
        "smoothedEle": 7.125000035146122,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.835687,
        "lng": 120.940781,
        "ele": 7.25,
        "distanceKm": 42.76701336395666,
        "gradePct": 0.24281301731375313,
        "smoothedEle": 7.052558280221128,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83587026442992,
        "lng": 120.94041550057212,
        "ele": 6.683823865950202,
        "distanceKm": 42.80915150502123,
        "gradePct": -0.2795632913670256,
        "smoothedEle": 6.784871889818131,
        "gradeBand": "descent"
      },
      {
        "lat": 24.836048132214962,
        "lng": 120.94004675028606,
        "ele": 6.466911932975119,
        "distanceKm": 42.85129208412505,
        "gradePct": -0.6103116847499808,
        "smoothedEle": 6.466911881772529,
        "gradeBand": "descent"
      },
      {
        "lat": 24.836226,
        "lng": 120.939678,
        "ele": 6.25,
        "distanceKm": 42.89343261601841,
        "gradePct": -0.4465639581384443,
        "smoothedEle": 6.438163609979834,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8364535,
        "lng": 120.9392525,
        "ele": 6.750000000000036,
        "distanceKm": 42.94326799016231,
        "gradePct": 0.22254472104180986,
        "smoothedEle": 6.750000169970011,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.836681,
        "lng": 120.938827,
        "ele": 7.25,
        "distanceKm": 42.99310329631822,
        "gradePct": 0.6091123333889448,
        "smoothedEle": 7.047500605275566,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.836969999999997,
        "lng": 120.938338,
        "ele": 6.875000000000023,
        "distanceKm": 43.05198987759063,
        "gradePct": 0.0729328412400035,
        "smoothedEle": 6.874999818996694,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837259,
        "lng": 120.937849,
        "ele": 6.5,
        "distanceKm": 43.11087636232794,
        "gradePct": -0.30564867924594286,
        "smoothedEle": 6.689787978776833,
        "gradeBand": "descent"
      },
      {
        "lat": 24.837449499999998,
        "lng": 120.93751400000001,
        "ele": 6.874999999999966,
        "distanceKm": 43.15076962224298,
        "gradePct": -0.003574319929750607,
        "smoothedEle": 6.87500008265427,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83764,
        "lng": 120.937179,
        "ele": 7.25,
        "distanceKm": 43.190662838075745,
        "gradePct": 0.4900570652871067,
        "smoothedEle": 7.243421330554457,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.837876666666666,
        "lng": 120.93676866666667,
        "ele": 7.666666666666687,
        "distanceKm": 43.23972449365908,
        "gradePct": 0.8429458492303357,
        "smoothedEle": 7.666666805862378,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.838113333333332,
        "lng": 120.93635833333333,
        "ele": 8.083333333333313,
        "distanceKm": 43.28878608242847,
        "gradePct": 0.857244328492649,
        "smoothedEle": 8.083333472530219,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.83835,
        "lng": 120.935948,
        "ele": 8.5,
        "distanceKm": 43.33784760438336,
        "gradePct": 0.5632519919162995,
        "smoothedEle": 8.213727234649442,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.838551,
        "lng": 120.9355915,
        "ele": 7.875,
        "distanceKm": 43.38019930483458,
        "gradePct": -0.13540847194042968,
        "smoothedEle": 7.874999844939369,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838752,
        "lng": 120.935235,
        "ele": 7.25,
        "distanceKm": 43.4225509556664,
        "gradePct": -0.5804862690304008,
        "smoothedEle": 7.592586140930658,
        "gradeBand": "descent"
      },
      {
        "lat": 24.838998,
        "lng": 120.934743,
        "ele": 8,
        "distanceKm": 43.47923494239171,
        "gradePct": 0.15686533385415258,
        "smoothedEle": 8.039578115217049,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839168,
        "lng": 120.934326,
        "ele": 8.75,
        "distanceKm": 43.52536476505916,
        "gradePct": 1.007826614097695,
        "smoothedEle": 8.622601565103217,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839302662021147,
        "lng": 120.93375849061118,
        "ele": 9.115684517345295,
        "distanceKm": 43.584556512830204,
        "gradePct": 0.9615337529815934,
        "smoothedEle": 9.068369884303063,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839399,
        "lng": 120.93318,
        "ele": 9.25,
        "distanceKm": 43.64390580522982,
        "gradePct": 0.4087605322451426,
        "smoothedEle": 9.170993188240653,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.839481,
        "lng": 120.932606,
        "ele": 9,
        "distanceKm": 43.70254043346874,
        "gradePct": -0.34940298588451346,
        "smoothedEle": 8.750063635701462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839543942531623,
        "lng": 120.93206953473103,
        "ele": 7.671634922932836,
        "distanceKm": 43.757124744031024,
        "gradePct": -1.4255444096508445,
        "smoothedEle": 7.650551920508583,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83962,
        "lng": 120.931535,
        "ele": 6.25,
        "distanceKm": 43.811722640267504,
        "gradePct": -1.8709418287894382,
        "smoothedEle": 6.694161259777439,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839672260718988,
        "lng": 120.93106278517581,
        "ele": 6.7170883263060635,
        "distanceKm": 43.85972597432054,
        "gradePct": -0.9358552944370971,
        "smoothedEle": 6.669130907851732,
        "gradeBand": "descent"
      },
      {
        "lat": 24.83972394607882,
        "lng": 120.93059049332145,
        "ele": 6.999713185205255,
        "distanceKm": 43.90772930270066,
        "gradePct": -0.03268808573065527,
        "smoothedEle": 6.731424417910413,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839775972828594,
        "lng": 120.93011824663279,
        "ele": 6.250391895311052,
        "distanceKm": 43.9557326465204,
        "gradePct": -0.42109966516382014,
        "smoothedEle": 6.250113481394112,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839828,
        "lng": 120.929646,
        "ele": 5.5,
        "distanceKm": 44.003735970508345,
        "gradePct": -1.1045217088977861,
        "smoothedEle": 5.621720595865792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.8399095,
        "lng": 120.9290495,
        "ele": 5.125,
        "distanceKm": 44.064605930269934,
        "gradePct": -1.0089568407970189,
        "smoothedEle": 5.124999926514542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.839991,
        "lng": 120.928453,
        "ele": 4.75,
        "distanceKm": 44.12547585083928,
        "gradePct": -0.6209464883231428,
        "smoothedEle": 4.823368898932471,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840063,
        "lng": 120.928032,
        "ele": 4.75,
        "distanceKm": 44.168705840933775,
        "gradePct": -0.4288139428955013,
        "smoothedEle": 4.675869540703363,
        "gradeBand": "descent"
      },
      {
        "lat": 24.84025,
        "lng": 120.927366,
        "ele": 4.25,
        "distanceKm": 44.23905365721511,
        "gradePct": -0.45291139393867197,
        "smoothedEle": 4.324130459296673,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840501,
        "lng": 120.926779,
        "ele": 4.25,
        "distanceKm": 44.304532501196846,
        "gradePct": -0.03294284120759403,
        "smoothedEle": 4.463793398180412,
        "gradeBand": "descent"
      },
      {
        "lat": 24.840768,
        "lng": 120.926294,
        "ele": 5.25,
        "distanceKm": 44.36177382156075,
        "gradePct": 0.620802802260477,
        "smoothedEle": 4.9933941800993225,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.841008082804645,
        "lng": 120.92586505670171,
        "ele": 5.07577445236137,
        "distanceKm": 44.412627846931365,
        "gradePct": 0.5370822753432392,
        "smoothedEle": 5.075774390108953,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.84124816560929,
        "lng": 120.92543611340342,
        "ele": 4.901548904722739,
        "distanceKm": 44.4634818008401,
        "gradePct": -0.04658971235517417,
        "smoothedEle": 4.949571282970655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.841488210268473,
        "lng": 120.92500714398446,
        "ele": 4.922750563505719,
        "distanceKm": 44.514335700257874,
        "gradePct": 0.17214992999057022,
        "smoothedEle": 5.24368597912945,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.841728,
        "lng": 120.924578,
        "ele": 6.25,
        "distanceKm": 44.56518965416716,
        "gradePct": 1.6026345591419768,
        "smoothedEle": 6.5620832510847,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842012,
        "lng": 120.924149,
        "ele": 9,
        "distanceKm": 44.61877303155016,
        "gradePct": 2.882110812821246,
        "smoothedEle": 8.24083534885328,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842387111208257,
        "lng": 120.92378755885547,
        "ele": 8.457599650273423,
        "distanceKm": 44.67418010670265,
        "gradePct": 1.4117301647539489,
        "smoothedEle": 8.25548175760735,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.842792,
        "lng": 120.923463,
        "ele": 7,
        "distanceKm": 44.72985325978435,
        "gradePct": -1.0566655570838313,
        "smoothedEle": 7.187098759800314,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842889,
        "lng": 120.923301,
        "ele": 6.25,
        "distanceKm": 44.749437701842815,
        "gradePct": -1.468120965922321,
        "smoothedEle": 6.780820338608601,
        "gradeBand": "descent"
      },
      {
        "lat": 24.842868,
        "lng": 120.923192,
        "ele": 6,
        "distanceKm": 44.76068154295482,
        "gradePct": -1.5955640571912864,
        "smoothedEle": 6.6563494651013375,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 44.76068154295482,
      "elevationGainM": 476.57963909458397,
      "elevationLossM": 474.87691430343915,
      "minimumElevationM": 4,
      "maximumElevationM": 181,
      "maximumSustainedGradePct": 12.621710062524985
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 371,
        "startDistanceKm": 0,
        "endDistanceKm": 17.497144633175527,
        "distanceKm": 17.497144633175527,
        "gainM": 229.05508804567611,
        "averageGradePct": 1.3090998151285518,
        "maximumGradePct": 12.621710062524985
      },
      {
        "startIndex": 375,
        "endIndex": 397,
        "startDistanceKm": 17.662813172547335,
        "endDistanceKm": 18.575615494052443,
        "distanceKm": 0.912802321505108,
        "gainM": 33.2436722371084,
        "averageGradePct": 3.6419355487936684,
        "maximumGradePct": 9.912843469825505
      },
      {
        "startIndex": 494,
        "endIndex": 532,
        "startDistanceKm": 22.647705197959866,
        "endDistanceKm": 24.3970663398749,
        "distanceKm": 1.7493611419150348,
        "gainM": 57.136047309504875,
        "averageGradePct": 3.2661093207408136,
        "maximumGradePct": 11.249188342496705
      },
      {
        "startIndex": 685,
        "endIndex": 731,
        "startDistanceKm": 30.969796901594314,
        "endDistanceKm": 33.050167929206125,
        "distanceKm": 2.080371027611811,
        "gainM": 33.53191990251109,
        "averageGradePct": 1.6118240187667148,
        "maximumGradePct": 8.756760789475056
      },
      {
        "startIndex": 794,
        "endIndex": 970,
        "startDistanceKm": 35.91158877037919,
        "endDistanceKm": 44.76068154295482,
        "distanceKm": 8.84909277257563,
        "gainM": 41.54394044981959,
        "averageGradePct": 0.4694711821597023,
        "maximumGradePct": 5.437942365224662
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
