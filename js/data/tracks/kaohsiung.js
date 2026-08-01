"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("kaohsiung", {
  "kaohsiung-qimei": {
    "routeId": "kaohsiung-qimei",
    "direction": "point-to-point",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T16:12:21.960Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "7b07b30bc4ac5d4bbf7a7a1a925b8f132a11dd91a9252df0e4e5e3415ea727e0",
      "roadPolicyAuditSha256": "5a6598b9563a5a5892efc1196cb9abfc51ec520f17a33729fe2ae17d663ce2dc",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "旗山、美濃至十八羅漢山以平緩台28與荖濃溪谷為主，預設100公尺分析為爬升336公尺、最大持續坡度16.5%，局部尖峰偏高。比較500/200、750/300、1000/500公尺後，爬升依序為225、208、201公尺，最大持續坡度依序為10.0%、8.0%、7.1%；茂林國家風景區自行車路線資料公布較長的旗美六龜路線總爬升381公尺，本路線為31.2公里單向線，500/200所得225公尺尺度合理並保留新威與十八羅漢山短坡，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://theme.maolin-nsa.gov.tw/bike/zh-tw/bike-route/1",
        "referenceLabel": "茂林國家風景區騎遊茂林路線總爬升381公尺資料"
      },
      "reviewedAt": "2026-07-29T16:22:30.000Z",
      "reviewerNote": "2026-07-30 重新稽核：原旗山往返方案在新威由台27甲南向轉台28西向時只能切入service，現況無合法南向轉西向主線連接，故改為旗山經美濃至十八羅漢山的單向GPX。新威僅依序使用 live OSM 台28 way 1337383115、北向primary_link ways 1337383113／1337383114與台27甲 way 881515395。最終 raw messages 的 service、track、footway、path、steps、private、access禁制與bicycle=no均為0；live OSM `/api/0.6/map?bbox=`幾何取樣亦無禁止道路段。500/200公尺分析為31.2公里、爬升225公尺、最大10.0%。本GPX不可反轉騎乘，回程交通須自行另行安排。"
    },
    "waypoints": [
      {
        "name": "旗山車站外公共道路",
        "lat": 22.88462,
        "lng": 120.48197,
        "role": "start"
      },
      {
        "name": "美濃湖外民權路",
        "lat": 22.907483,
        "lng": 120.551383,
        "role": "via"
      },
      {
        "name": "美濃客家文物館外民族路",
        "lat": 22.91107,
        "lng": 120.55754,
        "role": "via"
      },
      {
        "name": "美濃永安老街公共道路",
        "lat": 22.8997,
        "lng": 120.5418,
        "role": "via"
      },
      {
        "name": "新威森林公園外台28主線",
        "lat": 22.8874176,
        "lng": 120.6220085,
        "role": "via"
      },
      {
        "name": "新威台28西側主線",
        "lat": 22.8909368,
        "lng": 120.6246803,
        "role": "via"
      },
      {
        "name": "台28與台27甲銜接主線",
        "lat": 22.8918773,
        "lng": 120.6248767,
        "role": "via"
      },
      {
        "name": "台28北向台27甲第一連接道",
        "lat": 22.8922142,
        "lng": 120.625765,
        "role": "via"
      },
      {
        "name": "台28北向台27甲第二連接道",
        "lat": 22.892201,
        "lng": 120.6259869,
        "role": "via"
      },
      {
        "name": "台28北向台27甲第三連接道",
        "lat": 22.8923038,
        "lng": 120.6252566,
        "role": "via"
      },
      {
        "name": "新威台27甲北側主線",
        "lat": 22.8930136,
        "lng": 120.6251182,
        "role": "via"
      },
      {
        "name": "新威北側台27甲主線",
        "lat": 22.9025431,
        "lng": 120.6288512,
        "role": "via"
      },
      {
        "name": "十八羅漢山台27甲",
        "lat": 22.95008,
        "lng": 120.64185,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.88475,
        "lng": 120.48198,
        "ele": 51.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 50.60330692317661,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884939,
        "lng": 120.481986,
        "ele": 51.75,
        "distanceKm": 0.021024856746076598,
        "gradePct": -0.5639076178639649,
        "smoothedEle": 50.4847461543405,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884909,
        "lng": 120.482504,
        "ele": 51.75,
        "distanceKm": 0.07419490579094579,
        "gradePct": -0.14185150945363217,
        "smoothedEle": 50.498060329374454,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884921,
        "lng": 120.48305148606002,
        "ele": 51,
        "distanceKm": 0.13029671185914973,
        "gradePct": -0.06571057493593928,
        "smoothedEle": 50.51768820469134,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884931,
        "lng": 120.483599,
        "ele": 49.75,
        "distanceKm": 0.18639652010321867,
        "gradePct": -0.09497742616416296,
        "smoothedEle": 50.42627230592301,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884928,
        "lng": 120.484043,
        "ele": 48.25,
        "distanceKm": 0.23188228549529757,
        "gradePct": -0.04778671873197737,
        "smoothedEle": 50.391891497644714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884895146658366,
        "lng": 120.48443418564466,
        "ele": 49.16181931345259,
        "distanceKm": 0.27212255376810046,
        "gradePct": -0.10217943542057029,
        "smoothedEle": 50.29318252620092,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884878,
        "lng": 120.484827,
        "ele": 51.5,
        "distanceKm": 0.312408657695217,
        "gradePct": -0.21356667638052332,
        "smoothedEle": 50.0842965062299,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884522535960837,
        "lng": 120.48480912001837,
        "ele": 50.64555657641241,
        "distanceKm": 0.35197692833485206,
        "gradePct": -0.3400227451702804,
        "smoothedEle": 49.80231431418949,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884167,
        "lng": 120.484793,
        "ele": 49.75,
        "distanceKm": 0.3915452533293445,
        "gradePct": -0.4626388157192416,
        "smoothedEle": 49.497102960046,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883754574020614,
        "lng": 120.48476304100147,
        "ele": 49.895110456555905,
        "distanceKm": 0.4375075762109483,
        "gradePct": -0.5993835501181017,
        "smoothedEle": 49.17932561612679,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883342,
        "lng": 120.484736,
        "ele": 50.25,
        "distanceKm": 0.48346733847401263,
        "gradePct": -0.62890412194497,
        "smoothedEle": 48.976550849572654,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88288252914153,
        "lng": 120.48471700378879,
        "ele": 49.211144699840794,
        "distanceKm": 0.5345952864340676,
        "gradePct": -0.5812273560652699,
        "smoothedEle": 48.76372939483011,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882423,
        "lng": 120.4847,
        "ele": 48.25,
        "distanceKm": 0.5857223495475469,
        "gradePct": -0.6110474971639306,
        "smoothedEle": 48.31992309286939,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88223,
        "lng": 120.484766,
        "ele": 47.75,
        "distanceKm": 0.6082229119962197,
        "gradePct": -0.618588598552364,
        "smoothedEle": 48.14461866482957,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882161,
        "lng": 120.484936,
        "ele": 46.75,
        "distanceKm": 0.6272536737184741,
        "gradePct": -0.622017020084698,
        "smoothedEle": 48.00618568431781,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882074820047272,
        "lng": 120.48539792498346,
        "ele": 46.75,
        "distanceKm": 0.6755360002814753,
        "gradePct": -0.6491237258422622,
        "smoothedEle": 47.713296512979724,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882001910023636,
        "lng": 120.48586296249174,
        "ele": 46.75,
        "distanceKm": 0.7238615950327745,
        "gradePct": -0.7042917550946515,
        "smoothedEle": 47.39982516299881,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881929,
        "lng": 120.486328,
        "ele": 46.75,
        "distanceKm": 0.7721872150060549,
        "gradePct": -0.6742671362831951,
        "smoothedEle": 47.08887998137492,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881868666666666,
        "lng": 120.48676466666667,
        "ele": 46.75,
        "distanceKm": 0.8174217672013097,
        "gradePct": -0.5987603604324291,
        "smoothedEle": 46.88018391488265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881808333333336,
        "lng": 120.48720133333333,
        "ele": 46.75,
        "distanceKm": 0.8626563390559514,
        "gradePct": -0.5156314593616538,
        "smoothedEle": 46.76016390760279,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881748,
        "lng": 120.487638,
        "ele": 46.75,
        "distanceKm": 0.907890930572928,
        "gradePct": -0.37671065841998075,
        "smoothedEle": 46.74999999999999,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8817245,
        "lng": 120.4880395,
        "ele": 46.75,
        "distanceKm": 0.9491055477565907,
        "gradePct": -0.24369804696315703,
        "smoothedEle": 46.749999999999986,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881701,
        "lng": 120.488441,
        "ele": 46.75,
        "distanceKm": 0.990320172045867,
        "gradePct": -0.12480293690141411,
        "smoothedEle": 46.75561512070411,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881694500000002,
        "lng": 120.48899,
        "ele": 46.75,
        "distanceKm": 1.0465671766321532,
        "gradePct": 0.02583473302678386,
        "smoothedEle": 46.85452243452414,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881688,
        "lng": 120.489539,
        "ele": 46.75,
        "distanceKm": 1.1028141839095904,
        "gradePct": 0.16635061090643083,
        "smoothedEle": 47.08384193254503,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88172869701028,
        "lng": 120.49006870711793,
        "ele": 46.75,
        "distanceKm": 1.1572684379498634,
        "gradePct": 0.33695239748464456,
        "smoothedEle": 47.425016915109154,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881761,
        "lng": 120.490599,
        "ele": 46.75,
        "distanceKm": 1.211712943869442,
        "gradePct": 0.517982795681288,
        "smoothedEle": 47.82919874367206,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88216,
        "lng": 120.490717,
        "ele": 47.25,
        "distanceKm": 1.2576971588140804,
        "gradePct": 0.5642232565493013,
        "smoothedEle": 48.02834597389459,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882214,
        "lng": 120.490912,
        "ele": 48,
        "distanceKm": 1.2785567821385566,
        "gradePct": 0.5528821013317826,
        "smoothedEle": 48.090708514398536,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88262,
        "lng": 120.491295,
        "ele": 49,
        "distanceKm": 1.338369605853333,
        "gradePct": 0.4560679790599097,
        "smoothedEle": 48.218745067913204,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8827805,
        "lng": 120.49166,
        "ele": 49.875,
        "distanceKm": 1.3798024938148306,
        "gradePct": 0.32357881820457035,
        "smoothedEle": 48.23946151189396,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882941,
        "lng": 120.492025,
        "ele": 50.75,
        "distanceKm": 1.4212353418788646,
        "gradePct": 0.19486992053897373,
        "smoothedEle": 48.260177935925974,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883073,
        "lng": 120.492379,
        "ele": 50,
        "distanceKm": 1.4603582541350677,
        "gradePct": 0.14430345819166848,
        "smoothedEle": 48.32490857874643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882883,
        "lng": 120.492561,
        "ele": 48.5,
        "distanceKm": 1.488535952214669,
        "gradePct": 0.13268147205607767,
        "smoothedEle": 48.37743307403272,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883145,
        "lng": 120.493059,
        "ele": 48,
        "distanceKm": 1.5472853297990197,
        "gradePct": 0.1203305457300701,
        "smoothedEle": 48.46386402134619,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883436,
        "lng": 120.49356,
        "ele": 47,
        "distanceKm": 1.607958376135376,
        "gradePct": 0.003527423667957664,
        "smoothedEle": 48.260594300390146,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883574,
        "lng": 120.493903,
        "ele": 47,
        "distanceKm": 1.646301039591527,
        "gradePct": -0.1836759938298727,
        "smoothedEle": 47.934298288440154,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883871,
        "lng": 120.494482,
        "ele": 47.75,
        "distanceKm": 1.7141898864221237,
        "gradePct": -0.6746170693021407,
        "smoothedEle": 47.06594050694865,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88417,
        "lng": 120.495094,
        "ele": 48.5,
        "distanceKm": 1.7851552948916989,
        "gradePct": -0.9591152761932558,
        "smoothedEle": 46.418759713613206,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88436340799366,
        "lng": 120.49546796021227,
        "ele": 47.071580549032035,
        "distanceKm": 1.8290886462197253,
        "gradePct": -0.9909657904873159,
        "smoothedEle": 46.09884415079066,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884556815987324,
        "lng": 120.49584192042452,
        "ele": 45.64316109806408,
        "distanceKm": 1.8730219499491918,
        "gradePct": -0.8538552071625356,
        "smoothedEle": 45.884804038907006,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884750223980983,
        "lng": 120.4962158806368,
        "ele": 44.214741647096105,
        "distanceKm": 1.9169552060818857,
        "gradePct": -0.6745077499792809,
        "smoothedEle": 45.691706216457824,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884945,
        "lng": 120.496589,
        "ele": 43.75,
        "distanceKm": 1.9608881137234135,
        "gradePct": -0.5877178616052883,
        "smoothedEle": 45.46463256734458,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885116582412525,
        "lng": 120.49694273840161,
        "ele": 44.087953395231224,
        "distanceKm": 2.001841703658071,
        "gradePct": -0.5494418744173651,
        "smoothedEle": 45.198368233394106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885289,
        "lng": 120.497296,
        "ele": 44.25,
        "distanceKm": 2.042795431195419,
        "gradePct": -0.6136522530869011,
        "smoothedEle": 44.804761106680616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885491000000002,
        "lng": 120.49768766666666,
        "ele": 44.5,
        "distanceKm": 2.088777918713632,
        "gradePct": -0.7152002466192153,
        "smoothedEle": 44.38515205996487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885693,
        "lng": 120.49807933333334,
        "ele": 44.75,
        "distanceKm": 2.1347603541300226,
        "gradePct": -0.786757465982838,
        "smoothedEle": 44.02616277653903,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885895,
        "lng": 120.498471,
        "ele": 45,
        "distanceKm": 2.180742737442019,
        "gradePct": -0.8038761987535248,
        "smoothedEle": 43.72779311864845,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886094849800074,
        "lng": 120.49889320998646,
        "ele": 44.538918079362915,
        "distanceKm": 2.229369526983177,
        "gradePct": -0.7599287382005777,
        "smoothedEle": 43.413940274762965,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886311387350055,
        "lng": 120.49930615748984,
        "ele": 43.65418855952219,
        "distanceKm": 2.2780449145913084,
        "gradePct": -0.7130384913069172,
        "smoothedEle": 43.05701813940005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886527924900037,
        "lng": 120.49971910499323,
        "ele": 42.76945903968145,
        "distanceKm": 2.32672024354701,
        "gradePct": -0.6854828162681053,
        "smoothedEle": 42.717967058443485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886744462450018,
        "lng": 120.50013205249661,
        "ele": 41.884729519840725,
        "distanceKm": 2.375395513847249,
        "gradePct": -0.6737773643093513,
        "smoothedEle": 42.414935357862205,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886961,
        "lng": 120.500545,
        "ele": 41,
        "distanceKm": 2.4240707254940537,
        "gradePct": -0.6501087415300221,
        "smoothedEle": 42.14792295034466,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887185544020863,
        "lng": 120.50098757031672,
        "ele": 40.340523958354275,
        "distanceKm": 2.475828693418032,
        "gradePct": -0.5692337204993829,
        "smoothedEle": 41.93480158889179,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887412,
        "lng": 120.501429,
        "ele": 40.5,
        "distanceKm": 2.5275873705745697,
        "gradePct": -0.43861735588902884,
        "smoothedEle": 41.83533397956524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88763875,
        "lng": 120.50187825,
        "ele": 41.1875,
        "distanceKm": 2.5800630503268165,
        "gradePct": -0.2779540151414428,
        "smoothedEle": 41.83342312144605,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8878655,
        "lng": 120.5023275,
        "ele": 41.875,
        "distanceKm": 2.6325386626469323,
        "gradePct": -0.06630568242732687,
        "smoothedEle": 41.98044355710509,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88809225,
        "lng": 120.50277675,
        "ele": 42.5625,
        "distanceKm": 2.6850142075330337,
        "gradePct": 0.17962282234420698,
        "smoothedEle": 42.276394905900126,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888319,
        "lng": 120.503226,
        "ele": 43.25,
        "distanceKm": 2.7374896849870685,
        "gradePct": 0.42913164098418444,
        "smoothedEle": 42.69323667701173,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888516,
        "lng": 120.503632,
        "ele": 43,
        "distanceKm": 2.784496389223097,
        "gradePct": 0.6139906582216591,
        "smoothedEle": 43.07382528229952,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888757333333334,
        "lng": 120.50410733333334,
        "ele": 43.5,
        "distanceKm": 2.840094390459637,
        "gradePct": 0.7134289236231369,
        "smoothedEle": 43.44991416506022,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888998666666666,
        "lng": 120.50458266666666,
        "ele": 44,
        "distanceKm": 2.8956923158591885,
        "gradePct": 0.6662810297323206,
        "smoothedEle": 43.693779091865565,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88924,
        "lng": 120.505058,
        "ele": 44.5,
        "distanceKm": 2.951290165423957,
        "gradePct": 0.5150928817723357,
        "smoothedEle": 43.83515768528669,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8894385,
        "lng": 120.5054415,
        "ele": 44.5,
        "distanceKm": 2.996351594045568,
        "gradePct": 0.38665194483646526,
        "smoothedEle": 43.92732289544127,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889637,
        "lng": 120.505825,
        "ele": 44.5,
        "distanceKm": 3.0414129725698817,
        "gradePct": 0.2846590804974125,
        "smoothedEle": 44.025015921890514,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889892,
        "lng": 120.506338,
        "ele": 44,
        "distanceKm": 3.101125799110771,
        "gradePct": 0.20269873910445552,
        "smoothedEle": 44.112993259487816,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890147,
        "lng": 120.506851,
        "ele": 43.5,
        "distanceKm": 3.160838538747203,
        "gradePct": 0.1338486114118459,
        "smoothedEle": 44.12238442283929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89035826570686,
        "lng": 120.5072695452683,
        "ele": 44.09792181186011,
        "distanceKm": 3.2097276371306793,
        "gradePct": 0.05527354100062704,
        "smoothedEle": 44.06686922632691,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890568699621863,
        "lng": 120.50768858451431,
        "ele": 44.18210588307619,
        "distanceKm": 3.2586167254529386,
        "gradePct": -0.031781995728369566,
        "smoothedEle": 43.98679891973258,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890778849810932,
        "lng": 120.50810779225716,
        "ele": 44.091052941538095,
        "distanceKm": 3.307505823821175,
        "gradePct": -0.10824316193948737,
        "smoothedEle": 43.89751033713767,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890989,
        "lng": 120.508527,
        "ele": 44,
        "distanceKm": 3.356394863773165,
        "gradePct": -0.13182971074169803,
        "smoothedEle": 43.85802613411557,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891213507017834,
        "lng": 120.50896549427826,
        "ele": 43.87171027552317,
        "distanceKm": 3.407784306330451,
        "gradePct": -0.08105700583450563,
        "smoothedEle": 43.90696193138679,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89143801403567,
        "lng": 120.50940398855653,
        "ele": 43.74342055104635,
        "distanceKm": 3.4591736839303855,
        "gradePct": 0.008119205003627165,
        "smoothedEle": 44.00202012887757,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891662521053505,
        "lng": 120.50984248283478,
        "ele": 43.61513082656952,
        "distanceKm": 3.510562996569462,
        "gradePct": 0.10740694907340033,
        "smoothedEle": 44.10985517412914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89188702666767,
        "lng": 120.51028097825748,
        "ele": 43.550003621431564,
        "distanceKm": 3.5619522708992,
        "gradePct": 0.1772654426569281,
        "smoothedEle": 44.217849082058244,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892111520000753,
        "lng": 120.51071948369311,
        "ele": 44.03750271607367,
        "distanceKm": 3.613341713458839,
        "gradePct": 0.16433210733606515,
        "smoothedEle": 44.24590603519203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892336013333836,
        "lng": 120.51115798912873,
        "ele": 44.52500181071578,
        "distanceKm": 3.664731091058334,
        "gradePct": 0.10494869763996552,
        "smoothedEle": 44.223579156087325,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892560506666918,
        "lng": 120.51159649456437,
        "ele": 45.01250090535789,
        "distanceKm": 3.7161204036983806,
        "gradePct": 0.0396562786929557,
        "smoothedEle": 44.20084655207893,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892785,
        "lng": 120.512035,
        "ele": 45.5,
        "distanceKm": 3.7675096513758564,
        "gradePct": -0.01481012742557296,
        "smoothedEle": 44.191262974997265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892999500000002,
        "lng": 120.5124805,
        "ele": 44.625,
        "distanceKm": 3.819002253756882,
        "gradePct": -0.017897928415063533,
        "smoothedEle": 44.20765087247408,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893214,
        "lng": 120.512926,
        "ele": 43.75,
        "distanceKm": 3.870494792199814,
        "gradePct": -0.003933599588517463,
        "smoothedEle": 44.213162322970064,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893421500000002,
        "lng": 120.5133415,
        "ele": 43.625,
        "distanceKm": 3.918908750483898,
        "gradePct": -0.005456155044619488,
        "smoothedEle": 44.189414243399376,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893629,
        "lng": 120.513757,
        "ele": 43.5,
        "distanceKm": 3.9673226515440403,
        "gradePct": -0.03334898786944859,
        "smoothedEle": 44.124599872843476,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893838890963657,
        "lng": 120.51416655860233,
        "ele": 43.63481608430673,
        "distanceKm": 4.015331005759237,
        "gradePct": -0.10694251905148269,
        "smoothedEle": 43.99259743283351,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894050788711024,
        "lng": 120.51457492685208,
        "ele": 43.80496952169995,
        "distanceKm": 4.063341899867084,
        "gradePct": -0.18669426543418396,
        "smoothedEle": 43.839008189682644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89426268645839,
        "lng": 120.51498329510181,
        "ele": 43.97512295909317,
        "distanceKm": 4.111352737050825,
        "gradePct": -0.23131284309534528,
        "smoothedEle": 43.73049494302397,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894474584205756,
        "lng": 120.51539166335156,
        "ele": 44.14527639648639,
        "distanceKm": 4.159363517312519,
        "gradePct": -0.24374827001486898,
        "smoothedEle": 43.6477586665937,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89468612474617,
        "lng": 120.51580025045392,
        "ele": 44.118446357563684,
        "distanceKm": 4.20737430218167,
        "gradePct": -0.1875109948685923,
        "smoothedEle": 43.63945297470191,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894897093559624,
        "lng": 120.51620918784045,
        "ele": 43.77633476817276,
        "distanceKm": 4.255385218722306,
        "gradePct": -0.06207669804097544,
        "smoothedEle": 43.74030861314994,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895108062373083,
        "lng": 120.51661812522697,
        "ele": 43.43422317878184,
        "distanceKm": 4.303396078430153,
        "gradePct": 0.09172211079784978,
        "smoothedEle": 43.93192266397377,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895319031186542,
        "lng": 120.51702706261348,
        "ele": 43.092111589390925,
        "distanceKm": 4.351406881303276,
        "gradePct": 0.25823147787443523,
        "smoothedEle": 44.17793317697109,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89553,
        "lng": 120.517436,
        "ele": 42.75,
        "distanceKm": 4.399417627343738,
        "gradePct": 0.41080670598332564,
        "smoothedEle": 44.46244286259719,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895716333333333,
        "lng": 120.51781233333334,
        "ele": 43.74999999999999,
        "distanceKm": 4.4431824456822895,
        "gradePct": 0.5216774777554707,
        "smoothedEle": 44.758029430542614,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895902666666668,
        "lng": 120.51818866666666,
        "ele": 44.75000000000001,
        "distanceKm": 4.486947217382661,
        "gradePct": 0.6176575502344045,
        "smoothedEle": 45.101589431629385,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896089,
        "lng": 120.518565,
        "ele": 45.75,
        "distanceKm": 4.530711942446699,
        "gradePct": 0.6772158759610456,
        "smoothedEle": 45.426322700480355,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896270934035744,
        "lng": 120.51895826131154,
        "ele": 46.38272873821349,
        "distanceKm": 4.5757897834807695,
        "gradePct": 0.7150697853007124,
        "smoothedEle": 45.752564812480735,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896465622690496,
        "lng": 120.51934517420769,
        "ele": 46.921819158808994,
        "distanceKm": 4.620949859520196,
        "gradePct": 0.7308482413293753,
        "smoothedEle": 46.069567541941424,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896660311345247,
        "lng": 120.51973208710385,
        "ele": 47.4609095794045,
        "distanceKm": 4.66610988564441,
        "gradePct": 0.7189033317750557,
        "smoothedEle": 46.37581992566007,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896855,
        "lng": 120.520119,
        "ele": 48,
        "distanceKm": 4.711269861850471,
        "gradePct": 0.641711856531923,
        "smoothedEle": 46.56548661581809,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897086714285713,
        "lng": 120.52057414285714,
        "ele": 47.464285714285715,
        "distanceKm": 4.764537701934484,
        "gradePct": 0.4701883964599918,
        "smoothedEle": 46.61150685245223,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897318428571428,
        "lng": 120.52102928571428,
        "ele": 46.92857142857143,
        "distanceKm": 4.817805472318624,
        "gradePct": 0.21591559033192434,
        "smoothedEle": 46.47932658693151,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897550142857142,
        "lng": 120.52148442857143,
        "ele": 46.392857142857146,
        "distanceKm": 4.871073173004802,
        "gradePct": -0.07827394702998795,
        "smoothedEle": 46.24011726592115,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897781857142856,
        "lng": 120.52193957142856,
        "ele": 45.857142857142854,
        "distanceKm": 4.924340803989828,
        "gradePct": -0.2905705943738714,
        "smoothedEle": 45.99563794145305,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89801357142857,
        "lng": 120.52239471428571,
        "ele": 45.32142857142857,
        "distanceKm": 4.977608365275613,
        "gradePct": -0.4165921424464077,
        "smoothedEle": 45.745888626012714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898245285714285,
        "lng": 120.52284985714284,
        "ele": 44.785714285714285,
        "distanceKm": 5.030875856858968,
        "gradePct": -0.4165089946826722,
        "smoothedEle": 45.58761340759242,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898477,
        "lng": 120.523305,
        "ele": 44.25,
        "distanceKm": 5.084143278741801,
        "gradePct": -0.316408415134848,
        "smoothedEle": 45.547313337253804,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8987006,
        "lng": 120.5237416,
        "ele": 44.8,
        "distanceKm": 5.135311958619887,
        "gradePct": -0.18463553932073024,
        "smoothedEle": 45.57492770749253,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8989242,
        "lng": 120.5241782,
        "ele": 45.35,
        "distanceKm": 5.186480574066067,
        "gradePct": -0.06153514195890603,
        "smoothedEle": 45.59645609483229,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8991478,
        "lng": 120.5246148,
        "ele": 45.9,
        "distanceKm": 5.237649125080154,
        "gradePct": -0.01134116140223539,
        "smoothedEle": 45.55980669212752,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8993714,
        "lng": 120.5250514,
        "ele": 46.45,
        "distanceKm": 5.288817611661193,
        "gradePct": 0.028847546783271817,
        "smoothedEle": 45.607531043484244,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899595,
        "lng": 120.525488,
        "ele": 47,
        "distanceKm": 5.339986033808999,
        "gradePct": 0.12036698268006409,
        "smoothedEle": 45.81762821621618,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899805500000003,
        "lng": 120.525848,
        "ele": 46.49999999999999,
        "distanceKm": 5.383662781175519,
        "gradePct": 0.24069315277408854,
        "smoothedEle": 46.07665685849582,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900016,
        "lng": 120.526208,
        "ele": 46,
        "distanceKm": 5.42733948022619,
        "gradePct": 0.3745354434338314,
        "smoothedEle": 46.31626184762324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900281,
        "lng": 120.52658,
        "ele": 44.75,
        "distanceKm": 5.47550825858356,
        "gradePct": 0.44878771879735485,
        "smoothedEle": 46.492692976497345,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90069,
        "lng": 120.527116,
        "ele": 46,
        "distanceKm": 5.546801010716991,
        "gradePct": 0.3951069939167088,
        "smoothedEle": 46.64825900067666,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900983,
        "lng": 120.527516,
        "ele": 47.5,
        "distanceKm": 5.59914786284898,
        "gradePct": 0.28295812842665646,
        "smoothedEle": 46.72752236533028,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901235,
        "lng": 120.528069,
        "ele": 47.75,
        "distanceKm": 5.662343846936472,
        "gradePct": 0.25074385626735896,
        "smoothedEle": 46.945962484479985,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901378671316476,
        "lng": 120.5284937365209,
        "ele": 47.25,
        "distanceKm": 5.708690155571097,
        "gradePct": 0.2708317801613018,
        "smoothedEle": 47.10676187445396,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90152633565824,
        "lng": 120.52891686826045,
        "ele": 47.25,
        "distanceKm": 5.755037583141696,
        "gradePct": 0.32571373389679054,
        "smoothedEle": 47.31215824885446,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901674,
        "lng": 120.52934,
        "ele": 47.25,
        "distanceKm": 5.801384966584846,
        "gradePct": 0.3473650523192437,
        "smoothedEle": 47.429985132315416,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90177,
        "lng": 120.530001,
        "ele": 48.5,
        "distanceKm": 5.869927522818939,
        "gradePct": 0.2822037937301009,
        "smoothedEle": 47.5366817781275,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90181349573472,
        "lng": 120.5304180354079,
        "ele": 47.81864068953084,
        "distanceKm": 5.912917360139779,
        "gradePct": 0.22080369950412387,
        "smoothedEle": 47.56710283728155,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90185374786736,
        "lng": 120.53083551770396,
        "ele": 47.284320344765426,
        "distanceKm": 5.955913628333573,
        "gradePct": 0.13475133773817294,
        "smoothedEle": 47.58388805490564,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901894,
        "lng": 120.531253,
        "ele": 46.75,
        "distanceKm": 5.998909883903426,
        "gradePct": 0.09860361182802525,
        "smoothedEle": 47.62090006378592,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90197447165565,
        "lng": 120.53171598137122,
        "ele": 47.332343021992216,
        "distanceKm": 6.047169785490374,
        "gradePct": 0.1043563916943703,
        "smoothedEle": 47.709968770990756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902061,
        "lng": 120.532178,
        "ele": 48,
        "distanceKm": 6.09546241512066,
        "gradePct": 0.12856623641409815,
        "smoothedEle": 47.81188360217016,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90215926009965,
        "lng": 120.53271338250741,
        "ele": 48.04452262320138,
        "distanceKm": 6.151379330265393,
        "gradePct": 0.13318281086047878,
        "smoothedEle": 47.84848354207669,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902252,
        "lng": 120.53325,
        "ele": 47.5,
        "distanceKm": 6.207303840894007,
        "gradePct": 0.1323410996664086,
        "smoothedEle": 47.901074190638255,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902314,
        "lng": 120.533755,
        "ele": 48,
        "distanceKm": 6.259488164722136,
        "gradePct": 0.10086983818250408,
        "smoothedEle": 47.937704661465865,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902306,
        "lng": 120.534165,
        "ele": 48.5,
        "distanceKm": 6.301493696609785,
        "gradePct": 0.08519059832265079,
        "smoothedEle": 47.98621252267487,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902230988364014,
        "lng": 120.53456738029901,
        "ele": 48.624191450310036,
        "distanceKm": 6.3435448577536215,
        "gradePct": 0.11072211160610115,
        "smoothedEle": 48.06479977812458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902155976728025,
        "lng": 120.53496976059802,
        "ele": 48.74838290062007,
        "distanceKm": 6.385596041240479,
        "gradePct": 0.1489729402904628,
        "smoothedEle": 48.17860635190736,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90209,
        "lng": 120.535374,
        "ele": 48,
        "distanceKm": 6.427647049959538,
        "gradePct": 0.2144551197221707,
        "smoothedEle": 48.34426422277799,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902,
        "lng": 120.536023,
        "ele": 47.25,
        "distanceKm": 6.494873009681814,
        "gradePct": 0.3871475091810265,
        "smoothedEle": 48.7528619917919,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901915458959376,
        "lng": 120.53641865553988,
        "ele": 47.8033639255507,
        "distanceKm": 6.536475913159859,
        "gradePct": 0.47765308271214435,
        "smoothedEle": 49.00689515603578,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901842,
        "lng": 120.536817,
        "ele": 48.75,
        "distanceKm": 6.5780878596828005,
        "gradePct": 0.5474038031504374,
        "smoothedEle": 49.25309394941026,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901778,
        "lng": 120.53726,
        "ele": 49.5,
        "distanceKm": 6.624018970217102,
        "gradePct": 0.5781905010374823,
        "smoothedEle": 49.48635258399156,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901779251780077,
        "lng": 120.53771556767815,
        "ele": 50.21377670112325,
        "distanceKm": 6.670682948592303,
        "gradePct": 0.5469537764605827,
        "smoothedEle": 49.69974293424418,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901815,
        "lng": 120.538171,
        "ele": 50.75,
        "distanceKm": 6.717501897662197,
        "gradePct": 0.5171950304913291,
        "smoothedEle": 49.92542721691931,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901821499999997,
        "lng": 120.538638,
        "ele": 51.125,
        "distanceKm": 6.76534212661513,
        "gradePct": 0.49490354555501836,
        "smoothedEle": 50.16749038651007,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901828,
        "lng": 120.539105,
        "ele": 51.5,
        "distanceKm": 6.813182353275807,
        "gradePct": 0.4315919197924632,
        "smoothedEle": 50.29450325669237,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9019185,
        "lng": 120.539538,
        "ele": 51.125,
        "distanceKm": 6.858661786682996,
        "gradePct": 0.28505017590808257,
        "smoothedEle": 50.21487154898201,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902009,
        "lng": 120.539971,
        "ele": 50.75,
        "distanceKm": 6.90414119122986,
        "gradePct": 0.14730261857015836,
        "smoothedEle": 50.15562901256602,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902103666666665,
        "lng": 120.54039166666666,
        "ele": 50.25,
        "distanceKm": 6.948497126151414,
        "gradePct": -0.013835730998213322,
        "smoothedEle": 50.05458617598276,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902198333333335,
        "lng": 120.54081233333334,
        "ele": 49.75,
        "distanceKm": 6.992853031856022,
        "gradePct": -0.18224473687443052,
        "smoothedEle": 49.8760406803347,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902293,
        "lng": 120.541233,
        "ele": 49.25,
        "distanceKm": 7.037208908343382,
        "gradePct": -0.32011741926708454,
        "smoothedEle": 49.612199388992906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902414,
        "lng": 120.541718,
        "ele": 48,
        "distanceKm": 7.088676966339179,
        "gradePct": -0.40448600383274746,
        "smoothedEle": 49.366801066049945,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902559829580785,
        "lng": 120.54228405152917,
        "ele": 49.22857824853859,
        "distanceKm": 7.148882126112763,
        "gradePct": -0.39561154678487725,
        "smoothedEle": 49.261813344946674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902706,
        "lng": 120.54285,
        "ele": 49,
        "distanceKm": 7.209087280332757,
        "gradePct": -0.24640666883716358,
        "smoothedEle": 49.28666144381525,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902822,
        "lng": 120.543274,
        "ele": 48,
        "distanceKm": 7.254392222485359,
        "gradePct": -0.06119109445353383,
        "smoothedEle": 49.40788761818113,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90294434212908,
        "lng": 120.54375552758242,
        "ele": 48.92492283409425,
        "distanceKm": 7.305556347458984,
        "gradePct": 0.08405427583995355,
        "smoothedEle": 49.50547480244049,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903054,
        "lng": 120.544242,
        "ele": 50,
        "distanceKm": 7.356855450429374,
        "gradePct": 0.17472405384285836,
        "smoothedEle": 49.61455223318926,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903160333333332,
        "lng": 120.54463933333334,
        "ele": 50.416666666666664,
        "distanceKm": 7.399236616548036,
        "gradePct": 0.14819042178203634,
        "smoothedEle": 49.57897668417948,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903266666666667,
        "lng": 120.54503666666666,
        "ele": 50.833333333333336,
        "distanceKm": 7.441617752022021,
        "gradePct": 0.0635076410435999,
        "smoothedEle": 49.50072119491256,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903373,
        "lng": 120.545434,
        "ele": 51.25,
        "distanceKm": 7.483998856853772,
        "gradePct": -0.021940112770344893,
        "smoothedEle": 49.42047719613848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90348433333333,
        "lng": 120.54585900000001,
        "ele": 50.33333333333333,
        "distanceKm": 7.529257110229154,
        "gradePct": 0.007707633623866166,
        "smoothedEle": 49.5712850699916,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903595666666668,
        "lng": 120.546284,
        "ele": 49.41666666666667,
        "distanceKm": 7.574515329228433,
        "gradePct": 0.07674413643903925,
        "smoothedEle": 49.75321647121271,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903707,
        "lng": 120.546709,
        "ele": 48.5,
        "distanceKm": 7.619773513854035,
        "gradePct": 0.184628824509886,
        "smoothedEle": 49.91031357131471,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903823499999998,
        "lng": 120.5471445,
        "ele": 48.25,
        "distanceKm": 7.666224011623459,
        "gradePct": 0.30432367076831185,
        "smoothedEle": 50.06277926811531,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90394,
        "lng": 120.54758,
        "ele": 48,
        "distanceKm": 7.712674472592646,
        "gradePct": 0.3443754047051716,
        "smoothedEle": 50.20477982910552,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90406963946268,
        "lng": 120.54806245572186,
        "ele": 49.846131588765516,
        "distanceKm": 7.764151164684024,
        "gradePct": 0.3181210300669332,
        "smoothedEle": 50.347796110249526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904199,
        "lng": 120.548545,
        "ele": 51.25,
        "distanceKm": 7.815627844027418,
        "gradePct": 0.36293481558310575,
        "smoothedEle": 50.62179303829008,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9043311117998,
        "lng": 120.54907859441217,
        "ele": 51.821912553239,
        "distanceKm": 7.872222677083728,
        "gradePct": 0.46879222812065846,
        "smoothedEle": 51.01870183861379,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904463759042244,
        "lng": 120.54961203143556,
        "ele": 52.30023667000241,
        "distanceKm": 7.928817378067003,
        "gradePct": 0.5760036402323395,
        "smoothedEle": 51.401636500896736,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904598,
        "lng": 120.550145,
        "ele": 52.5,
        "distanceKm": 7.985412185325012,
        "gradePct": 0.6414440794155206,
        "smoothedEle": 51.743851132540755,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904638,
        "lng": 120.550688,
        "ele": 52.75,
        "distanceKm": 8.041208041577114,
        "gradePct": 0.5491950077897303,
        "smoothedEle": 51.89958115389382,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904996,
        "lng": 120.550709,
        "ele": 52.75,
        "distanceKm": 8.081073951090778,
        "gradePct": 0.43042758606244613,
        "smoothedEle": 51.939447063407485,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.905385,
        "lng": 120.550892,
        "ele": 52,
        "distanceKm": 8.128215551681663,
        "gradePct": 0.3576612669290459,
        "smoothedEle": 52.112886918821374,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.905734,
        "lng": 120.550922,
        "ele": 51.5,
        "distanceKm": 8.167144099924123,
        "gradePct": 0.31194380262058247,
        "smoothedEle": 52.25727619856332,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906084473745377,
        "lng": 120.55087477540809,
        "ele": 51,
        "distanceKm": 8.206414096442858,
        "gradePct": 0.29647151643246267,
        "smoothedEle": 52.39541192461812,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906438,
        "lng": 120.5509,
        "ele": 51,
        "distanceKm": 8.24580929076845,
        "gradePct": 0.3107147437522013,
        "smoothedEle": 52.52561189058956,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906535,
        "lng": 120.550913,
        "ele": 51,
        "distanceKm": 8.256677093539922,
        "gradePct": 0.32346246960094166,
        "smoothedEle": 52.56197514505851,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906845,
        "lng": 120.551163,
        "ele": 51.75,
        "distanceKm": 8.299617860340746,
        "gradePct": 0.3416562849663135,
        "smoothedEle": 52.69098499902158,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907483,
        "lng": 120.551383,
        "ele": 53.75,
        "distanceKm": 8.374053067661846,
        "gradePct": 0.2589428467367592,
        "smoothedEle": 52.79946480416682,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907950135244302,
        "lng": 120.55135644910946,
        "ele": 54.047864771494396,
        "distanceKm": 8.426067349391841,
        "gradePct": 0.23165738847751965,
        "smoothedEle": 52.92368012822813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908417067622153,
        "lng": 120.55132572455473,
        "ele": 54.1489323857472,
        "distanceKm": 8.478083215769015,
        "gradePct": 0.23644152437734162,
        "smoothedEle": 53.0991700566055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908884,
        "lng": 120.551295,
        "ele": 54.25,
        "distanceKm": 8.530099081490107,
        "gradePct": 0.27144534755448385,
        "smoothedEle": 53.278298179804665,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909184,
        "lng": 120.551394,
        "ele": 53.5,
        "distanceKm": 8.564964697331424,
        "gradePct": 0.2809048729927791,
        "smoothedEle": 53.348029411487296,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909636,
        "lng": 120.551576,
        "ele": 53,
        "distanceKm": 8.61857047749257,
        "gradePct": 0.24391744324991382,
        "smoothedEle": 53.39361173237085,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9100545,
        "lng": 120.5517375,
        "ele": 52.875,
        "distanceKm": 8.667958117390075,
        "gradePct": 0.17504686824654378,
        "smoothedEle": 53.41510397008517,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910473,
        "lng": 120.551899,
        "ele": 52.75,
        "distanceKm": 8.717345740184927,
        "gradePct": 0.07558855108708001,
        "smoothedEle": 53.38555633415693,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910831506828167,
        "lng": 120.55188258841031,
        "ele": 52.75,
        "distanceKm": 8.757245359282923,
        "gradePct": -0.00942549062569501,
        "smoothedEle": 53.31373975413891,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911191,
        "lng": 120.551835,
        "ele": 52.75,
        "distanceKm": 8.797515295349262,
        "gradePct": -0.08674274437104788,
        "smoothedEle": 53.20222250142348,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9112365,
        "lng": 120.55237,
        "ele": 53.5,
        "distanceKm": 8.852544573600747,
        "gradePct": -0.16176155775047418,
        "smoothedEle": 53.084873274553516,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911282,
        "lng": 120.552905,
        "ele": 54.25,
        "distanceKm": 8.90757383353857,
        "gradePct": -0.20648305325111313,
        "smoothedEle": 52.97843656573643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911331906801227,
        "lng": 120.5534031606159,
        "ele": 53.56945271052725,
        "distanceKm": 8.958897706722624,
        "gradePct": -0.19286145043897984,
        "smoothedEle": 52.92344110109925,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911384742052,
        "lng": 120.55390096438337,
        "ele": 53.019835683911055,
        "distanceKm": 9.01022148023736,
        "gradePct": -0.12064159480810631,
        "smoothedEle": 52.93384353624083,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911437910129745,
        "lng": 120.55439872759398,
        "ele": 52.485099269819884,
        "distanceKm": 9.061545357203247,
        "gradePct": -0.033294828036449904,
        "smoothedEle": 53.000874447713876,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911491078207487,
        "lng": 120.55489649080458,
        "ele": 51.95036285572869,
        "distanceKm": 9.1128692143068,
        "gradePct": 0.046675884278457314,
        "smoothedEle": 53.066114134204525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911547566503298,
        "lng": 120.55539381527802,
        "ele": 52.09496701224502,
        "distanceKm": 9.164192288469991,
        "gradePct": 0.07086168019868946,
        "smoothedEle": 53.06623758101721,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91160604433553,
        "lng": 120.55589087685202,
        "ele": 52.64664467483001,
        "distanceKm": 9.215516175675166,
        "gradePct": 0.07187685750585285,
        "smoothedEle": 53.08451232240751,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911664522167765,
        "lng": 120.556387938426,
        "ele": 53.19832233741499,
        "distanceKm": 9.26684004109444,
        "gradePct": 0.08662537855828875,
        "smoothedEle": 53.18085547680576,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911723,
        "lng": 120.556885,
        "ele": 53.75,
        "distanceKm": 9.318163884730646,
        "gradePct": 0.14350117625480557,
        "smoothedEle": 53.35312922192532,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911681,
        "lng": 120.556993,
        "ele": 54,
        "distanceKm": 9.330170975758026,
        "gradePct": 0.16836733443178592,
        "smoothedEle": 53.4028904188002,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91117632069767,
        "lng": 120.55717400444071,
        "ele": 54,
        "distanceKm": 9.389271792642907,
        "gradePct": 0.3186316762091981,
        "smoothedEle": 53.71243091668346,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910671,
        "lng": 120.557353,
        "ele": 54,
        "distanceKm": 9.448376210158782,
        "gradePct": 0.48588928634296197,
        "smoothedEle": 54.11797446763663,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910242,
        "lng": 120.55740925,
        "ele": 54.1875,
        "distanceKm": 9.496425552863121,
        "gradePct": 0.5413620604108741,
        "smoothedEle": 54.362886402273645,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909813,
        "lng": 120.5574655,
        "ele": 54.375,
        "distanceKm": 9.544474897753455,
        "gradePct": 0.5056622848637797,
        "smoothedEle": 54.489131772584614,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909384,
        "lng": 120.55752175,
        "ele": 54.5625,
        "distanceKm": 9.592524244829754,
        "gradePct": 0.3756742950804557,
        "smoothedEle": 54.486096129942894,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908955,
        "lng": 120.557578,
        "ele": 54.75,
        "distanceKm": 9.640573594091984,
        "gradePct": 0.17970553993756574,
        "smoothedEle": 54.42384808348712,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908846,
        "lng": 120.557622,
        "ele": 55.25,
        "distanceKm": 9.653504601963418,
        "gradePct": 0.13986686474019244,
        "smoothedEle": 54.42384808348712,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908719,
        "lng": 120.557765,
        "ele": 56,
        "distanceKm": 9.673850390043253,
        "gradePct": 0.08801468487782703,
        "smoothedEle": 54.423848083487115,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90845525,
        "lng": 120.5581075,
        "ele": 55.31249999999999,
        "distanceKm": 9.719575166329491,
        "gradePct": -0.0021663793452617675,
        "smoothedEle": 54.41937718927949,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9081915,
        "lng": 120.55845,
        "ele": 54.625000000000014,
        "distanceKm": 9.765299994970777,
        "gradePct": -0.047400092763986545,
        "smoothedEle": 54.39301590730285,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907927750000002,
        "lng": 120.5587925,
        "ele": 53.93750000000001,
        "distanceKm": 9.811024875969068,
        "gradePct": -0.05877614211307879,
        "smoothedEle": 54.344576233994545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907664,
        "lng": 120.559135,
        "ele": 53.25,
        "distanceKm": 9.856749809322972,
        "gradePct": -0.07489499324882258,
        "smoothedEle": 54.27405809698948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9073,
        "lng": 120.558778,
        "ele": 54,
        "distanceKm": 9.911296075610887,
        "gradePct": -0.16884277015087495,
        "smoothedEle": 54.08250116499388,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90699075,
        "lng": 120.55849425000001,
        "ele": 53.9375,
        "distanceKm": 9.956319949726085,
        "gradePct": -0.3200054216148669,
        "smoothedEle": 53.758182240497675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906681499999998,
        "lng": 120.5582105,
        "ele": 53.875,
        "distanceKm": 10.001343866630513,
        "gradePct": -0.4651041941571615,
        "smoothedEle": 53.424623639012346,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90637225,
        "lng": 120.55792675,
        "ele": 53.8125,
        "distanceKm": 10.046367826322442,
        "gradePct": -0.6023359915498844,
        "smoothedEle": 53.08539746800037,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906063,
        "lng": 120.557643,
        "ele": 53.75,
        "distanceKm": 10.091391828801044,
        "gradePct": -0.6822718720459011,
        "smoothedEle": 52.78785764894796,
        "gradeBand": "descent"
      },
      {
        "lat": 22.905736735952765,
        "lng": 120.55734996039749,
        "ele": 52.97476295633002,
        "distanceKm": 10.138477601383025,
        "gradePct": -0.6632384991459889,
        "smoothedEle": 52.560228416606506,
        "gradeBand": "descent"
      },
      {
        "lat": 22.905410471905526,
        "lng": 120.55705692079499,
        "ele": 52.199525912660064,
        "distanceKm": 10.18556342000064,
        "gradePct": -0.6317998830520559,
        "smoothedEle": 52.27793293081733,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90508420785829,
        "lng": 120.55676388119248,
        "ele": 51.424288868990075,
        "distanceKm": 10.232649284654583,
        "gradePct": -0.5934885420023924,
        "smoothedEle": 52.001780648034966,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904757943811056,
        "lng": 120.55647084158997,
        "ele": 50.64905182532009,
        "distanceKm": 10.279735195343674,
        "gradePct": -0.5782996164624221,
        "smoothedEle": 51.70829094131481,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90443187065711,
        "lng": 120.556177552906,
        "ele": 50.495035138774774,
        "distanceKm": 10.326821072591573,
        "gradePct": -0.6177037322086592,
        "smoothedEle": 51.381172723755526,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904106,
        "lng": 120.555884,
        "ele": 51,
        "distanceKm": 10.373906937269828,
        "gradePct": -0.6411673187533169,
        "smoothedEle": 51.06548286900026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9037875,
        "lng": 120.555635,
        "ele": 51,
        "distanceKm": 10.417550426165262,
        "gradePct": -0.6308669122942897,
        "smoothedEle": 50.828599603986326,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903469,
        "lng": 120.555386,
        "ele": 51,
        "distanceKm": 10.461193950064665,
        "gradePct": -0.5920067732544169,
        "smoothedEle": 50.63984624670935,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90316,
        "lng": 120.555131,
        "ele": 50.75,
        "distanceKm": 10.504353885157562,
        "gradePct": -0.5304716953083198,
        "smoothedEle": 50.47631490988817,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902673,
        "lng": 120.554771,
        "ele": 50.25,
        "distanceKm": 10.569868509936331,
        "gradePct": -0.3636386739686421,
        "smoothedEle": 50.36528138654963,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902323,
        "lng": 120.554449,
        "ele": 50.25,
        "distanceKm": 10.620882843815636,
        "gradePct": -0.24846746340987466,
        "smoothedEle": 50.317252343716895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9019,
        "lng": 120.554042,
        "ele": 50,
        "distanceKm": 10.683734280490452,
        "gradePct": -0.13839854106547428,
        "smoothedEle": 50.277644718093796,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901505,
        "lng": 120.553642,
        "ele": 49.5,
        "distanceKm": 10.743799676738885,
        "gradePct": -0.0617533672960564,
        "smoothedEle": 50.28595584675198,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901128500000002,
        "lng": 120.5533285,
        "ele": 49.87499999999999,
        "distanceKm": 10.79656185750555,
        "gradePct": 0.00695676463675812,
        "smoothedEle": 50.354063627491826,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900752,
        "lng": 120.553015,
        "ele": 50.25,
        "distanceKm": 10.849324092525604,
        "gradePct": 0.08561660928048939,
        "smoothedEle": 50.4705624981324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900397040454212,
        "lng": 120.5526846884874,
        "ele": 50.68851196960172,
        "distanceKm": 10.901310698290775,
        "gradePct": 0.1280149186885926,
        "smoothedEle": 50.536106569222866,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900057026969474,
        "lng": 120.55233412565826,
        "ele": 50.95900797973449,
        "distanceKm": 10.953453339926202,
        "gradePct": 0.1398853074673992,
        "smoothedEle": 50.578187841526365,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89971701348474,
        "lng": 120.55198356282914,
        "ele": 51.22950398986724,
        "distanceKm": 11.005596043549957,
        "gradePct": 0.11964864569437282,
        "smoothedEle": 50.61330837696172,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899377,
        "lng": 120.551633,
        "ele": 51.5,
        "distanceKm": 11.057738809163828,
        "gradePct": 0.04700779918028547,
        "smoothedEle": 50.57518726740198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899051,
        "lng": 120.5513265,
        "ele": 51.0625,
        "distanceKm": 11.105694022951235,
        "gradePct": -0.0047496781023248676,
        "smoothedEle": 50.53014473764003,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898725,
        "lng": 120.55102,
        "ele": 50.625,
        "distanceKm": 11.153649286137899,
        "gradePct": -0.023718935608158714,
        "smoothedEle": 50.530881949194786,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898399,
        "lng": 120.5507135,
        "ele": 50.1875,
        "distanceKm": 11.201604598721017,
        "gradePct": -0.02657741334996909,
        "smoothedEle": 50.55746512657427,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898073,
        "lng": 120.550407,
        "ele": 49.75,
        "distanceKm": 11.249559960701543,
        "gradePct": 0.012959144595367223,
        "smoothedEle": 50.60708503954941,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897779,
        "lng": 120.550115,
        "ele": 49.25,
        "distanceKm": 11.293869735955175,
        "gradePct": 0.07304547604758253,
        "smoothedEle": 50.687341798057325,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89762,
        "lng": 120.549714,
        "ele": 49.75,
        "distanceKm": 11.338588763099189,
        "gradePct": 0.1281261245150103,
        "smoothedEle": 50.78690267428213,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897278,
        "lng": 120.549305,
        "ele": 50.75,
        "distanceKm": 11.395169588022336,
        "gradePct": 0.20619855673391002,
        "smoothedEle": 50.966295105941036,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897095,
        "lng": 120.54891,
        "ele": 51.25,
        "distanceKm": 11.440459520970963,
        "gradePct": 0.24839285064021951,
        "smoothedEle": 51.094454420968674,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89699349209874,
        "lng": 120.54851655143862,
        "ele": 51.67633270038932,
        "distanceKm": 11.482312566339283,
        "gradePct": 0.27463956556920005,
        "smoothedEle": 51.21568782886767,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896904,
        "lng": 120.548119,
        "ele": 52.25,
        "distanceKm": 11.524233394757864,
        "gradePct": 0.3096790077169669,
        "smoothedEle": 51.37430040028514,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897156,
        "lng": 120.54789,
        "ele": 52.5,
        "distanceKm": 11.560776920932193,
        "gradePct": 0.34773514162486074,
        "smoothedEle": 51.55272165946578,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897389,
        "lng": 120.547603,
        "ele": 52.75,
        "distanceKm": 11.59996253216486,
        "gradePct": 0.3346715393811917,
        "smoothedEle": 51.649201031859064,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8975535,
        "lng": 120.547254,
        "ele": 52.250000000000014,
        "distanceKm": 11.64011955538029,
        "gradePct": 0.254613934918436,
        "smoothedEle": 51.602720272220026,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897718,
        "lng": 120.546905,
        "ele": 51.75,
        "distanceKm": 11.680276540003222,
        "gradePct": 0.11674134575674029,
        "smoothedEle": 51.44327287520096,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897875,
        "lng": 120.546529,
        "ele": 51.5,
        "distanceKm": 11.722563153969318,
        "gradePct": -0.10042331381190585,
        "smoothedEle": 51.16713421275873,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898106,
        "lng": 120.545937,
        "ele": 51.75,
        "distanceKm": 11.788419133454742,
        "gradePct": -0.5799762869672896,
        "smoothedEle": 50.46082731486193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898248,
        "lng": 120.545589,
        "ele": 51,
        "distanceKm": 11.82740621282165,
        "gradePct": -0.806541648543383,
        "smoothedEle": 50.004352354221666,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898386,
        "lng": 120.545233,
        "ele": 49.75,
        "distanceKm": 11.866969264081378,
        "gradePct": -0.9612057211734564,
        "smoothedEle": 49.573699327110205,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89873196599406,
        "lng": 120.54478616211287,
        "ele": 48.75228762375826,
        "distanceKm": 11.926759504776625,
        "gradePct": -1.0097690957669663,
        "smoothedEle": 49.10259006209468,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899109,
        "lng": 120.544367,
        "ele": 47,
        "distanceKm": 11.98676883468871,
        "gradePct": -0.8384876090018021,
        "smoothedEle": 48.801551589161775,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899272,
        "lng": 120.544057,
        "ele": 46.25,
        "distanceKm": 12.023331352393672,
        "gradePct": -0.6942770217920138,
        "smoothedEle": 48.66350826438848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899378579356647,
        "lng": 120.5436539868881,
        "ele": 46.69202622380238,
        "distanceKm": 12.066280146926701,
        "gradePct": -0.5659338075192564,
        "smoothedEle": 48.44933291279425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899482,
        "lng": 120.54325,
        "ele": 47.5,
        "distanceKm": 12.109229417956003,
        "gradePct": -0.47727533116725057,
        "smoothedEle": 48.2861653919236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899676,
        "lng": 120.542617,
        "ele": 48.75,
        "distanceKm": 12.177562916240733,
        "gradePct": -0.4042909712918089,
        "smoothedEle": 48.039151392576386,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899676,
        "lng": 120.542236,
        "ele": 49.25,
        "distanceKm": 12.21658932907926,
        "gradePct": -0.38985034494042875,
        "smoothedEle": 47.90926236735123,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89957,
        "lng": 120.541893,
        "ele": 49.75,
        "distanceKm": 12.253647738978797,
        "gradePct": -0.328369261473694,
        "smoothedEle": 47.85558918267262,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899676,
        "lng": 120.542236,
        "ele": 49.25,
        "distanceKm": 12.290706148878334,
        "gradePct": -0.22373171146298967,
        "smoothedEle": 47.90907326567833,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899689,
        "lng": 120.542501,
        "ele": 48.75,
        "distanceKm": 12.31788896575136,
        "gradePct": -0.1300954705599158,
        "smoothedEle": 47.9946716551448,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899676,
        "lng": 120.542617,
        "ele": 48.75,
        "distanceKm": 12.329858629498798,
        "gradePct": -0.08797086353462222,
        "smoothedEle": 48.03565256613301,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899482,
        "lng": 120.54325,
        "ele": 47.5,
        "distanceKm": 12.398192127783528,
        "gradePct": 0.14289857639390086,
        "smoothedEle": 48.25628970680929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899378579356647,
        "lng": 120.5436539868881,
        "ele": 46.69202622380238,
        "distanceKm": 12.44114139881283,
        "gradePct": 0.28792940429706804,
        "smoothedEle": 48.44956142644115,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899272,
        "lng": 120.544057,
        "ele": 46.25,
        "distanceKm": 12.484090193345859,
        "gradePct": 0.3797300965369046,
        "smoothedEle": 48.658985064316965,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899109,
        "lng": 120.544367,
        "ele": 47,
        "distanceKm": 12.52065271105082,
        "gradePct": 0.3963658217934608,
        "smoothedEle": 48.79686561968752,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898807363815987,
        "lng": 120.54470232958755,
        "ele": 48.4038918138854,
        "distanceKm": 12.56866085817288,
        "gradePct": 0.432401522617942,
        "smoothedEle": 49.02574134971707,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898507,
        "lng": 120.545039,
        "ele": 49.25,
        "distanceKm": 12.616668886189721,
        "gradePct": 0.49538069435805987,
        "smoothedEle": 49.33019650835328,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898254,
        "lng": 120.545575,
        "ele": 51,
        "distanceKm": 12.678360533431139,
        "gradePct": 0.6698432909320916,
        "smoothedEle": 49.97073311528224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898106,
        "lng": 120.545937,
        "ele": 51.75,
        "distanceKm": 12.71892900904318,
        "gradePct": 0.8275733370062207,
        "smoothedEle": 50.44551205780197,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897875,
        "lng": 120.546529,
        "ele": 51.5,
        "distanceKm": 12.784784988528603,
        "gradePct": 1.0055941351267315,
        "smoothedEle": 51.13918490659886,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897739,
        "lng": 120.546857,
        "ele": 51.5,
        "distanceKm": 12.821629484183621,
        "gradePct": 0.9969750721125514,
        "smoothedEle": 51.37565191705798,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897564648634535,
        "lng": 120.54723034727384,
        "ele": 52.216113572838616,
        "distanceKm": 12.864505949133603,
        "gradePct": 0.8672166308351835,
        "smoothedEle": 51.56131597234878,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897389,
        "lng": 120.547603,
        "ele": 52.75,
        "distanceKm": 12.907384527036774,
        "gradePct": 0.6895473587149563,
        "smoothedEle": 51.689499974292275,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897156,
        "lng": 120.54789,
        "ele": 52.5,
        "distanceKm": 12.94657013826944,
        "gradePct": 0.486215874088268,
        "smoothedEle": 51.70909277990861,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896904,
        "lng": 120.548119,
        "ele": 52.25,
        "distanceKm": 12.983113664443769,
        "gradePct": 0.31285914388429004,
        "smoothedEle": 51.74729883788761,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896446,
        "lng": 120.548331,
        "ele": 51.25,
        "distanceKm": 13.038477712080631,
        "gradePct": 0.21402088395949267,
        "smoothedEle": 51.87665003339495,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895928832988403,
        "lng": 120.5485672949178,
        "ele": 51,
        "distanceKm": 13.100870462870104,
        "gradePct": 0.2187764998600209,
        "smoothedEle": 52.10757940808189,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895406,
        "lng": 120.548789,
        "ele": 51.25,
        "distanceKm": 13.163285232905027,
        "gradePct": 0.24062513736924002,
        "smoothedEle": 52.207818595231906,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.894836,
        "lng": 120.54903,
        "ele": 52.25,
        "distanceKm": 13.231304461280764,
        "gradePct": 0.21277190055570194,
        "smoothedEle": 52.285434428244685,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.894252,
        "lng": 120.54928,
        "ele": 53.5,
        "distanceKm": 13.30110952990201,
        "gradePct": 0.10840692411760992,
        "smoothedEle": 52.324777202055266,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893769333333335,
        "lng": 120.54938433333334,
        "ele": 53.33333333333333,
        "distanceKm": 13.355833454622,
        "gradePct": 0.04259508290793705,
        "smoothedEle": 52.28104107779757,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89328666666667,
        "lng": 120.54948866666666,
        "ele": 53.16666666666667,
        "distanceKm": 13.410557386766898,
        "gradePct": -0.04309935436082683,
        "smoothedEle": 52.175561509899886,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892804,
        "lng": 120.549593,
        "ele": 53,
        "distanceKm": 13.465281326337154,
        "gradePct": -0.1180120023406208,
        "smoothedEle": 52.068560094828136,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892378333333333,
        "lng": 120.54972866666667,
        "ele": 52.000000000000014,
        "distanceKm": 13.514611398731335,
        "gradePct": -0.18309652156613218,
        "smoothedEle": 51.94779327694858,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89195266666667,
        "lng": 120.54986433333333,
        "ele": 50.999999999999986,
        "distanceKm": 13.563941483407312,
        "gradePct": -0.2591201226458227,
        "smoothedEle": 51.747172727228104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891527,
        "lng": 120.55,
        "ele": 50,
        "distanceKm": 13.613271580365662,
        "gradePct": -0.2859750971401784,
        "smoothedEle": 51.598304267952145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891134,
        "lng": 120.55014075,
        "ele": 50.375,
        "distanceKm": 13.659288350950042,
        "gradePct": -0.281656817794791,
        "smoothedEle": 51.51696449072435,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890741,
        "lng": 120.5502815,
        "ele": 50.75,
        "distanceKm": 13.705305134618357,
        "gradePct": -0.24308193205266182,
        "smoothedEle": 51.484412430356194,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890348,
        "lng": 120.55042225,
        "ele": 51.125,
        "distanceKm": 13.751321931369677,
        "gradePct": -0.10262448566301821,
        "smoothedEle": 51.59324621933683,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889955,
        "lng": 120.550563,
        "ele": 51.5,
        "distanceKm": 13.797338741204202,
        "gradePct": 0.07352581951925811,
        "smoothedEle": 51.79343805894469,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889580333333335,
        "lng": 120.55069566666667,
        "ele": 51.916666666666664,
        "distanceKm": 13.84116043794291,
        "gradePct": 0.2562342257747021,
        "smoothedEle": 52.06147605148979,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889205666666665,
        "lng": 120.55082833333333,
        "ele": 52.333333333333336,
        "distanceKm": 13.884982146317693,
        "gradePct": 0.4619935975015589,
        "smoothedEle": 52.42277601347876,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888831,
        "lng": 120.550961,
        "ele": 52.75,
        "distanceKm": 13.928803866328549,
        "gradePct": 0.6031294392340655,
        "smoothedEle": 52.74624788496195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888346,
        "lng": 120.551163,
        "ele": 54,
        "distanceKm": 13.986567156662463,
        "gradePct": 0.6315333059563053,
        "smoothedEle": 53.00964389687804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887927,
        "lng": 120.5513235,
        "ele": 54,
        "distanceKm": 14.035973887683669,
        "gradePct": 0.5338775884093377,
        "smoothedEle": 53.097507387764125,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887508,
        "lng": 120.551484,
        "ele": 54,
        "distanceKm": 14.08538063559782,
        "gradePct": 0.30447031130851093,
        "smoothedEle": 53.03465810149643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887085,
        "lng": 120.551786,
        "ele": 54.25,
        "distanceKm": 14.141678477074718,
        "gradePct": 0.08198613506842307,
        "smoothedEle": 52.96892735660879,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88676351349927,
        "lng": 120.55222590659393,
        "ele": 53.22666080386052,
        "distanceKm": 14.199199882593799,
        "gradePct": -0.06839277294562177,
        "smoothedEle": 52.89532402270383,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886449756749634,
        "lng": 120.55267245329696,
        "ele": 52.11333040193028,
        "distanceKm": 14.256730569428896,
        "gradePct": -0.19234395063888668,
        "smoothedEle": 52.68641534761771,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886136,
        "lng": 120.553119,
        "ele": 51,
        "distanceKm": 14.314261340347228,
        "gradePct": -0.2646172793160853,
        "smoothedEle": 52.471703773397834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8858805,
        "lng": 120.5534815,
        "ele": 51.50000000000001,
        "distanceKm": 14.361017820558523,
        "gradePct": -0.27075195597910195,
        "smoothedEle": 52.40267717596859,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885625,
        "lng": 120.553844,
        "ele": 52,
        "distanceKm": 14.407774356287227,
        "gradePct": -0.23423789269287892,
        "smoothedEle": 52.39571212479452,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885380964266805,
        "lng": 120.5542147314558,
        "ele": 52,
        "distanceKm": 14.454451011113374,
        "gradePct": -0.12685347584241358,
        "smoothedEle": 52.44098605666797,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885128,
        "lng": 120.554579,
        "ele": 52,
        "distanceKm": 14.501181416509661,
        "gradePct": 0.012338393834504345,
        "smoothedEle": 52.545196368555786,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884882962130032,
        "lng": 120.55496173605263,
        "ele": 52.1965412796724,
        "distanceKm": 14.548927663341551,
        "gradePct": 0.15221357635081442,
        "smoothedEle": 52.724953029241796,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884632,
        "lng": 120.55534,
        "ele": 53.5,
        "distanceKm": 14.596680420112996,
        "gradePct": 0.28422582102414495,
        "smoothedEle": 52.96581636646276,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884386,
        "lng": 120.55562,
        "ele": 54.25,
        "distanceKm": 14.63631644642129,
        "gradePct": 0.35194461115033115,
        "smoothedEle": 53.12728569270796,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8840286162788,
        "lng": 120.55597502085362,
        "ele": 53.954641552729456,
        "distanceKm": 14.690186211533764,
        "gradePct": 0.3979127213706604,
        "smoothedEle": 53.31650214941761,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88367122499836,
        "lng": 120.55633003202362,
        "ele": 53.72678193704738,
        "distanceKm": 14.744055991623414,
        "gradePct": 0.45358358327555404,
        "smoothedEle": 53.613779163814115,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883313816665574,
        "lng": 120.55668502134908,
        "ele": 53.651187958031585,
        "distanceKm": 14.797925724419837,
        "gradePct": 0.48678391058206394,
        "smoothedEle": 53.944457310896915,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882956408332785,
        "lng": 120.55704001067454,
        "ele": 53.57559397901579,
        "distanceKm": 14.851795521854502,
        "gradePct": 0.5202049372072413,
        "smoothedEle": 54.22206550544496,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882599,
        "lng": 120.557395,
        "ele": 53.5,
        "distanceKm": 14.905665383925962,
        "gradePct": 0.4977339683329891,
        "smoothedEle": 54.397390931433684,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882363,
        "lng": 120.557708,
        "ele": 54.5,
        "distanceKm": 14.94709987776933,
        "gradePct": 0.4445877385255253,
        "smoothedEle": 54.52163946773198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882165,
        "lng": 120.558011,
        "ele": 55,
        "distanceKm": 14.985155877581008,
        "gradePct": 0.3899891814756678,
        "smoothedEle": 54.64604825531114,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881935,
        "lng": 120.558538,
        "ele": 55.25,
        "distanceKm": 15.04489551509664,
        "gradePct": 0.34835782899011514,
        "smoothedEle": 54.883223234685204,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881629,
        "lng": 120.559083,
        "ele": 55.75,
        "distanceKm": 15.110279160124753,
        "gradePct": 0.3834342272573977,
        "smoothedEle": 55.1780945963332,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88137649886538,
        "lng": 120.55955631961737,
        "ele": 55.50997991005514,
        "distanceKm": 15.166310651890782,
        "gradePct": 0.45367605809761163,
        "smoothedEle": 55.491793484514076,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88112374003916,
        "lng": 120.56002946293555,
        "ele": 55.48120758563488,
        "distanceKm": 15.222340960290293,
        "gradePct": 0.4791880737412501,
        "smoothedEle": 55.75205454571658,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88087,
        "lng": 120.560502,
        "ele": 55.75,
        "distanceKm": 15.278372487298958,
        "gradePct": 0.4977293700121965,
        "smoothedEle": 56.02965857402438,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880721,
        "lng": 120.560888,
        "ele": 55.75,
        "distanceKm": 15.321247123942179,
        "gradePct": 0.5304954092091007,
        "smoothedEle": 56.30049084849394,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880562,
        "lng": 120.561323,
        "ele": 56.25,
        "distanceKm": 15.369190111709742,
        "gradePct": 0.5608880960405307,
        "smoothedEle": 56.626944781776224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88038185659044,
        "lng": 120.56178873141458,
        "ele": 56.44567943185046,
        "distanceKm": 15.420936706752965,
        "gradePct": 0.5767093963805173,
        "smoothedEle": 56.89895057381217,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880214,
        "lng": 120.56226,
        "ele": 57,
        "distanceKm": 15.472698670900254,
        "gradePct": 0.5488035856405544,
        "smoothedEle": 57.09915524444558,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880110178054963,
        "lng": 120.56267428778014,
        "ele": 57.892938504602135,
        "distanceKm": 15.516682968548382,
        "gradePct": 0.49119228625390393,
        "smoothedEle": 57.254044375817145,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88000658902748,
        "lng": 120.56308864389007,
        "ele": 58.57146925230107,
        "distanceKm": 15.560667262636539,
        "gradePct": 0.4305353252361372,
        "smoothedEle": 57.42998155216978,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879903,
        "lng": 120.563503,
        "ele": 59.25,
        "distanceKm": 15.604651587982037,
        "gradePct": 0.40908926275156227,
        "smoothedEle": 57.63152643065689,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879862,
        "lng": 120.563857,
        "ele": 58.25,
        "distanceKm": 15.64120307090999,
        "gradePct": 0.4170252387909074,
        "smoothedEle": 57.81138719511621,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879861,
        "lng": 120.564309,
        "ele": 57.5,
        "distanceKm": 15.68750901652345,
        "gradePct": 0.6111453518390761,
        "smoothedEle": 58.37360005064552,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879921,
        "lng": 120.5647,
        "ele": 57.25,
        "distanceKm": 15.728117393257554,
        "gradePct": 0.7499120991099089,
        "smoothedEle": 58.799606272873646,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879975,
        "lng": 120.5652925,
        "ele": 57.75000000000001,
        "distanceKm": 15.789113166241336,
        "gradePct": 0.8211795945980741,
        "smoothedEle": 59.20268549805938,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880029,
        "lng": 120.565885,
        "ele": 58.25,
        "distanceKm": 15.850108915200327,
        "gradePct": 0.7088826317970981,
        "smoothedEle": 59.337280693282395,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880107,
        "lng": 120.566605,
        "ele": 62.5,
        "distanceKm": 15.924378442443773,
        "gradePct": 0.360250771588356,
        "smoothedEle": 59.48088398000036,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880047,
        "lng": 120.567044,
        "ele": 62,
        "distanceKm": 15.96984454629808,
        "gradePct": 0.42173761582847086,
        "smoothedEle": 59.91882763732006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879831,
        "lng": 120.567644,
        "ele": 60.25,
        "distanceKm": 16.035838245816695,
        "gradePct": 0.7215477633025092,
        "smoothedEle": 60.74888609861774,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879689,
        "lng": 120.567955,
        "ele": 59.75,
        "distanceKm": 16.07139707629455,
        "gradePct": 0.9121104058605487,
        "smoothedEle": 61.20266306903622,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879392,
        "lng": 120.568552,
        "ele": 59.25,
        "distanceKm": 16.140904467849236,
        "gradePct": 1.151502362239264,
        "smoothedEle": 61.943072522608944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879094,
        "lng": 120.569045,
        "ele": 62.25,
        "distanceKm": 16.201310548451552,
        "gradePct": 0.8197481519321805,
        "smoothedEle": 61.95409840937184,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878884,
        "lng": 120.569334,
        "ele": 63.5,
        "distanceKm": 16.23901804670322,
        "gradePct": 0.5780864719750112,
        "smoothedEle": 61.94563744161606,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87858,
        "lng": 120.569686,
        "ele": 64.25,
        "distanceKm": 16.288445696156153,
        "gradePct": 0.32685107591973167,
        "smoothedEle": 62.03797122037529,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878352,
        "lng": 120.5699765,
        "ele": 64,
        "distanceKm": 16.3275412955533,
        "gradePct": 0.18489193888512,
        "smoothedEle": 62.170508674816105,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878124,
        "lng": 120.570267,
        "ele": 63.75,
        "distanceKm": 16.36663693299354,
        "gradePct": 0.2017593647440961,
        "smoothedEle": 62.35128818399509,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8778915,
        "lng": 120.5705875,
        "ele": 62.875,
        "distanceKm": 16.408427813233875,
        "gradePct": 0.32277529207565553,
        "smoothedEle": 62.59805199158389,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877659,
        "lng": 120.570908,
        "ele": 62,
        "distanceKm": 16.450218737646978,
        "gradePct": 0.35217981098467405,
        "smoothedEle": 62.67092061813429,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87735926524136,
        "lng": 120.571262775872,
        "ele": 61.7008635143309,
        "distanceKm": 16.499532715934084,
        "gradePct": 0.2565856587728854,
        "smoothedEle": 62.58872849136239,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87706008622586,
        "lng": 120.5716181014878,
        "ele": 61.605814597412554,
        "distanceKm": 16.548846569456398,
        "gradePct": 0.0647071437881055,
        "smoothedEle": 62.39843924736179,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87676204311293,
        "lng": 120.5719745507439,
        "ele": 61.92790729870629,
        "distanceKm": 16.598160547669586,
        "gradePct": -0.16775905595131196,
        "smoothedEle": 62.20190846261423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876464,
        "lng": 120.572331,
        "ele": 62.25,
        "distanceKm": 16.647474585236075,
        "gradePct": -0.3074090706625239,
        "smoothedEle": 62.051317643259004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876133,
        "lng": 120.57271850000001,
        "ele": 62.1875,
        "distanceKm": 16.701610202878697,
        "gradePct": -0.26823457791223243,
        "smoothedEle": 62.044242857573316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875802,
        "lng": 120.573106,
        "ele": 62.125,
        "distanceKm": 16.7557458914812,
        "gradePct": -0.08585904885600146,
        "smoothedEle": 62.19922531133192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875470999999997,
        "lng": 120.5734935,
        "ele": 62.0625,
        "distanceKm": 16.809881651045096,
        "gradePct": 0.14910071600358119,
        "smoothedEle": 62.46431703222018,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87514,
        "lng": 120.573881,
        "ele": 62,
        "distanceKm": 16.864017481567885,
        "gradePct": 0.38505395308388085,
        "smoothedEle": 62.81926361886673,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874870246536556,
        "lng": 120.57426217748308,
        "ele": 62.2608262737015,
        "distanceKm": 16.913259232644645,
        "gradePct": 0.5952579806661106,
        "smoothedEle": 63.268108264781986,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874582623268278,
        "lng": 120.57462808874153,
        "ele": 63.00541313685078,
        "distanceKm": 16.96253597890902,
        "gradePct": 0.8228797731820408,
        "smoothedEle": 63.8782345243807,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874295,
        "lng": 120.574994,
        "ele": 63.75,
        "distanceKm": 17.011812785575174,
        "gradePct": 0.9431365526627963,
        "smoothedEle": 64.36325179994546,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873885,
        "lng": 120.575473,
        "ele": 65,
        "distanceKm": 17.07879561474535,
        "gradePct": 0.9837053068423706,
        "smoothedEle": 64.9213787426122,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873427,
        "lng": 120.57583,
        "ele": 66.75,
        "distanceKm": 17.1414959352401,
        "gradePct": 0.9425336499537236,
        "smoothedEle": 65.50279186535866,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.872986,
        "lng": 120.575901,
        "ele": 68.5,
        "distanceKm": 17.191069539656294,
        "gradePct": 0.9278402519023704,
        "smoothedEle": 66.01476256746622,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.872354,
        "lng": 120.575812,
        "ele": 66.5,
        "distanceKm": 17.26193390604664,
        "gradePct": 1.0305416093208886,
        "smoothedEle": 66.84196365682675,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.871881402323595,
        "lng": 120.57579529330951,
        "ele": 66.08444096898089,
        "distanceKm": 17.314512310364055,
        "gradePct": 1.0947460126301716,
        "smoothedEle": 67.4420677277923,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8714082011618,
        "lng": 120.57580014665476,
        "ele": 66.79222048449041,
        "distanceKm": 17.367132300922183,
        "gradePct": 1.0784540611871916,
        "smoothedEle": 67.92445919361104,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.870935,
        "lng": 120.575805,
        "ele": 67.5,
        "distanceKm": 17.419752291497076,
        "gradePct": 0.9655394080956333,
        "smoothedEle": 68.28065568846422,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.870298,
        "lng": 120.5758,
        "ele": 69.5,
        "distanceKm": 17.4905854099967,
        "gradePct": 0.7102155866302152,
        "smoothedEle": 68.58940901743144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869756,
        "lng": 120.575886,
        "ele": 70,
        "distanceKm": 17.55149381708187,
        "gradePct": 0.6495277991136157,
        "smoothedEle": 69.08014967407799,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869435,
        "lng": 120.576127,
        "ele": 69.75,
        "distanceKm": 17.5948954673233,
        "gradePct": 0.6758686434483987,
        "smoothedEle": 69.46413156848602,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869276,
        "lng": 120.576469,
        "ele": 70.25,
        "distanceKm": 17.634142673820328,
        "gradePct": 0.7129086321798636,
        "smoothedEle": 69.76919895644383,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869233,
        "lng": 120.577095,
        "ele": 70.25,
        "distanceKm": 17.698457163512632,
        "gradePct": 0.777905401146252,
        "smoothedEle": 70.20864274726769,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869243166666667,
        "lng": 120.57756566666667,
        "ele": 70.375,
        "distanceKm": 17.74669233138016,
        "gradePct": 0.667453839626314,
        "smoothedEle": 70.3763716552653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869253333333333,
        "lng": 120.57803633333333,
        "ele": 70.5,
        "distanceKm": 17.794927495638195,
        "gradePct": 0.5290827985962868,
        "smoothedEle": 70.52254612083331,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869263500000002,
        "lng": 120.578507,
        "ele": 70.625,
        "distanceKm": 17.843162656289653,
        "gradePct": 0.4293992695755422,
        "smoothedEle": 70.68962863514759,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86927366666667,
        "lng": 120.57897766666667,
        "ele": 70.75,
        "distanceKm": 17.891397813333057,
        "gradePct": 0.35941460659484775,
        "smoothedEle": 70.87923729952006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869283833333334,
        "lng": 120.57944833333333,
        "ele": 70.875,
        "distanceKm": 17.93963296676696,
        "gradePct": 0.36546842729209444,
        "smoothedEle": 71.08276087023143,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869294,
        "lng": 120.579919,
        "ele": 71,
        "distanceKm": 17.987868116594278,
        "gradePct": 0.4102216908997051,
        "smoothedEle": 71.32159637637598,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86931325,
        "lng": 120.58046675,
        "ele": 71.43750000000001,
        "distanceKm": 18.044028349212795,
        "gradePct": 0.47284074903232376,
        "smoothedEle": 71.63871310500656,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8693325,
        "lng": 120.58101450000001,
        "ele": 71.875,
        "distanceKm": 18.10018857388586,
        "gradePct": 0.5202061434284122,
        "smoothedEle": 71.95674135139897,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86935175,
        "lng": 120.58156225,
        "ele": 72.31249999999999,
        "distanceKm": 18.156348790610586,
        "gradePct": 0.5893829996354348,
        "smoothedEle": 72.34429498077816,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869371,
        "lng": 120.58211,
        "ele": 72.75,
        "distanceKm": 18.21250899938841,
        "gradePct": 0.6837749068170094,
        "smoothedEle": 72.82828443388667,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869379,
        "lng": 120.582576,
        "ele": 73.25,
        "distanceKm": 18.260261035210256,
        "gradePct": 0.8236425623512773,
        "smoothedEle": 73.37792187659736,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8694,
        "lng": 120.582943,
        "ele": 73.25,
        "distanceKm": 18.297934232965666,
        "gradePct": 0.9996558435909471,
        "smoothedEle": 73.94328699119069,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869449,
        "lng": 120.583298,
        "ele": 73.5,
        "distanceKm": 18.33471137412181,
        "gradePct": 1.225335211961725,
        "smoothedEle": 74.64564868586277,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86961816005022,
        "lng": 120.5836649935647,
        "ele": 74.1320309237545,
        "distanceKm": 18.376753874576924,
        "gradePct": 1.5382785569877753,
        "smoothedEle": 75.59670338954804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869819,
        "lng": 120.584016,
        "ele": 74.75,
        "distanceKm": 18.419085973912512,
        "gradePct": 1.9581906092840242,
        "smoothedEle": 76.82036821457555,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.870082,
        "lng": 120.584408,
        "ele": 76,
        "distanceKm": 18.468767076687918,
        "gradePct": 2.581149523606252,
        "smoothedEle": 78.66787186403468,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.870395000000002,
        "lng": 120.58486099999999,
        "ele": 78.875,
        "distanceKm": 18.52677875063026,
        "gradePct": 3.4564037785511115,
        "smoothedEle": 81.40696075681326,
        "gradeBand": "hard"
      },
      {
        "lat": 22.870708,
        "lng": 120.585314,
        "ele": 81.75,
        "distanceKm": 18.58479033901323,
        "gradePct": 4.358760835883147,
        "smoothedEle": 84.54652960095777,
        "gradeBand": "hard"
      },
      {
        "lat": 22.8710525,
        "lng": 120.58576199999999,
        "ele": 86.75,
        "distanceKm": 18.644574346201264,
        "gradePct": 5.152691114500269,
        "smoothedEle": 88.07359294689411,
        "gradeBand": "hard"
      },
      {
        "lat": 22.871397,
        "lng": 120.58621,
        "ele": 91.75,
        "distanceKm": 18.70435826401524,
        "gradePct": 5.668956093416255,
        "smoothedEle": 91.68626350033048,
        "gradeBand": "hard"
      },
      {
        "lat": 22.871706,
        "lng": 120.586551,
        "ele": 97.75,
        "distanceKm": 18.753359401195198,
        "gradePct": 5.884260406215694,
        "smoothedEle": 94.6140179840701,
        "gradeBand": "hard"
      },
      {
        "lat": 22.872051554857293,
        "lng": 120.58685518124688,
        "ele": 100.11577216373189,
        "distanceKm": 18.802832696093027,
        "gradePct": 5.958226479334975,
        "smoothedEle": 97.52742335782133,
        "gradeBand": "hard"
      },
      {
        "lat": 22.872407,
        "lng": 120.587146,
        "ele": 102.75,
        "distanceKm": 18.852328867308973,
        "gradePct": 5.908612896737927,
        "smoothedEle": 100.3594151637257,
        "gradeBand": "hard"
      },
      {
        "lat": 22.872761,
        "lng": 120.587492,
        "ele": 105.25,
        "distanceKm": 18.905300919445143,
        "gradePct": 5.764653696814448,
        "smoothedEle": 103.27189333503622,
        "gradeBand": "hard"
      },
      {
        "lat": 22.872979,
        "lng": 120.587911,
        "ele": 105,
        "distanceKm": 18.954599552686492,
        "gradePct": 5.609906878943419,
        "smoothedEle": 105.90686233404637,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873055,
        "lng": 120.588344,
        "ele": 107.25,
        "distanceKm": 18.99975888053291,
        "gradePct": 5.532184808150026,
        "smoothedEle": 108.4107807575455,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873066,
        "lng": 120.588921,
        "ele": 109.5,
        "distanceKm": 19.05888611685343,
        "gradePct": 5.584249134465756,
        "smoothedEle": 111.88844026505124,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873136,
        "lng": 120.589523,
        "ele": 112.25,
        "distanceKm": 19.121051191135702,
        "gradePct": 6.305759154669041,
        "smoothedEle": 116.72524994499076,
        "gradeBand": "steep"
      },
      {
        "lat": 22.873266,
        "lng": 120.589956,
        "ele": 116.25,
        "distanceKm": 19.167708457908798,
        "gradePct": 7.005572087976919,
        "smoothedEle": 120.64484702918743,
        "gradeBand": "steep"
      },
      {
        "lat": 22.873492,
        "lng": 120.590585,
        "ele": 122.25,
        "distanceKm": 19.23687696187203,
        "gradePct": 8.262217500647722,
        "smoothedEle": 127.11837290438422,
        "gradeBand": "steep"
      },
      {
        "lat": 22.87364,
        "lng": 120.590977,
        "ele": 128.25,
        "distanceKm": 19.28027886616625,
        "gradePct": 9.037472437447544,
        "smoothedEle": 131.627867297354,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.873687,
        "lng": 120.591413,
        "ele": 138.25,
        "distanceKm": 19.32525226090393,
        "gradePct": 9.646570822101316,
        "smoothedEle": 136.3713162663746,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.873527,
        "lng": 120.591759,
        "ele": 144.5,
        "distanceKm": 19.36491453851375,
        "gradePct": 9.970002323926693,
        "smoothedEle": 140.35013929306078,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.873136,
        "lng": 120.59202,
        "ele": 148.5,
        "distanceKm": 19.415956594478384,
        "gradePct": 9.945117481715613,
        "smoothedEle": 145.05065689473403,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.872805,
        "lng": 120.592352,
        "ele": 154,
        "distanceKm": 19.466072455760617,
        "gradePct": 9.425348316741525,
        "smoothedEle": 149.00250593038294,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.872808,
        "lng": 120.592756,
        "ele": 159.25,
        "distanceKm": 19.507464331054553,
        "gradePct": 8.629496939971776,
        "smoothedEle": 151.75417564508285,
        "gradeBand": "steep"
      },
      {
        "lat": 22.873094,
        "lng": 120.593081,
        "ele": 162.25,
        "distanceKm": 19.553508126546205,
        "gradePct": 7.3873659341253255,
        "smoothedEle": 153.98060771192488,
        "gradeBand": "steep"
      },
      {
        "lat": 22.873654,
        "lng": 120.593351,
        "ele": 161,
        "distanceKm": 19.621645033445738,
        "gradePct": 4.871061786030995,
        "smoothedEle": 155.24133809849843,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874065,
        "lng": 120.59368,
        "ele": 157.75,
        "distanceKm": 19.678431633901997,
        "gradePct": 2.8503777965840937,
        "smoothedEle": 155.52488112760904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874233,
        "lng": 120.593944,
        "ele": 156.75,
        "distanceKm": 19.711302777285255,
        "gradePct": 1.641129079761447,
        "smoothedEle": 155.22204056624713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874343,
        "lng": 120.594423,
        "ele": 154.25,
        "distanceKm": 19.761878012591183,
        "gradePct": 0.027882090526276312,
        "smoothedEle": 154.1912390589411,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874413,
        "lng": 120.594795,
        "ele": 150.5,
        "distanceKm": 19.80077636474745,
        "gradePct": -0.9317587078761738,
        "smoothedEle": 152.9916897890432,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874545,
        "lng": 120.595099,
        "ele": 149.25,
        "distanceKm": 19.835206661061747,
        "gradePct": -1.7602618407740416,
        "smoothedEle": 151.78852942265624,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874762,
        "lng": 120.59534,
        "ele": 150.75,
        "distanceKm": 19.86972981209699,
        "gradePct": -2.4449379311953354,
        "smoothedEle": 150.59155591460487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875015,
        "lng": 120.595557,
        "ele": 149.25,
        "distanceKm": 19.905586164143553,
        "gradePct": -3.040750489690023,
        "smoothedEle": 149.19320652068004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875367,
        "lng": 120.59581,
        "ele": 147.25,
        "distanceKm": 19.952531139120197,
        "gradePct": -3.552702258780185,
        "smoothedEle": 147.2763382771362,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875728,
        "lng": 120.59612,
        "ele": 146,
        "distanceKm": 20.00371702266356,
        "gradePct": -3.5780135564032616,
        "smoothedEle": 145.73290192670748,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876039499999997,
        "lng": 120.596503,
        "ele": 144.875,
        "distanceKm": 20.056056042765185,
        "gradePct": -3.2264762538020166,
        "smoothedEle": 144.61269511516113,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876351,
        "lng": 120.596886,
        "ele": 143.75,
        "distanceKm": 20.108394995389368,
        "gradePct": -2.7612507528625185,
        "smoothedEle": 143.5560141578557,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876563899823445,
        "lng": 120.59718522846185,
        "ele": 140.20343291428296,
        "distanceKm": 20.147127420855714,
        "gradePct": -2.605048983733236,
        "smoothedEle": 142.2868862029394,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876752,
        "lng": 120.597504,
        "ele": 136.25,
        "distanceKm": 20.18590889634249,
        "gradePct": -2.607559950713631,
        "smoothedEle": 141.05476034028152,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877052,
        "lng": 120.59803,
        "ele": 142.75,
        "distanceKm": 20.24928642033502,
        "gradePct": -2.81609748912464,
        "smoothedEle": 139.1253896885913,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877215,
        "lng": 120.598372,
        "ele": 141.37499999999994,
        "distanceKm": 20.2887342070659,
        "gradePct": -3.1292531783811883,
        "smoothedEle": 137.69444315393076,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877378,
        "lng": 120.598714,
        "ele": 140,
        "distanceKm": 20.328181956440403,
        "gradePct": -3.249565070349459,
        "smoothedEle": 136.4085335689121,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877575,
        "lng": 120.59918,
        "ele": 134,
        "distanceKm": 20.38070853613893,
        "gradePct": -2.9908819412058243,
        "smoothedEle": 135.23821704892575,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877694,
        "lng": 120.599641,
        "ele": 132.75,
        "distanceKm": 20.429755785223087,
        "gradePct": -2.300243350500517,
        "smoothedEle": 135.1194644633317,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877665,
        "lng": 120.600058,
        "ele": 131.25,
        "distanceKm": 20.472598185770533,
        "gradePct": -1.4023912460308927,
        "smoothedEle": 135.4749858643534,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877399,
        "lng": 120.600573,
        "ele": 127.25,
        "distanceKm": 20.53308420501363,
        "gradePct": -0.6940291990777065,
        "smoothedEle": 134.91125080238442,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876945,
        "lng": 120.601036,
        "ele": 132.25,
        "distanceKm": 20.602354991780665,
        "gradePct": -0.653152917993341,
        "smoothedEle": 133.87950108547213,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87668,
        "lng": 120.601454,
        "ele": 137.75,
        "distanceKm": 20.654337164870785,
        "gradePct": -0.4994957150249224,
        "smoothedEle": 134.32445802057777,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876612,
        "lng": 120.601896,
        "ele": 141.25,
        "distanceKm": 20.70024653491319,
        "gradePct": -0.005922219618653933,
        "smoothedEle": 135.20545635983459,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876604,
        "lng": 120.602298,
        "ele": 139,
        "distanceKm": 20.741440615365832,
        "gradePct": 0.5281543321909955,
        "smoothedEle": 135.84309539731265,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.876628,
        "lng": 120.602878,
        "ele": 132.75,
        "distanceKm": 20.800920895660315,
        "gradePct": 1.4425261022185418,
        "smoothedEle": 136.78591335141928,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87691,
        "lng": 120.60321,
        "ele": 133.5,
        "distanceKm": 20.84718261824317,
        "gradePct": 1.3833250102761716,
        "smoothedEle": 137.02986656255678,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877327,
        "lng": 120.603282,
        "ele": 141.25,
        "distanceKm": 20.894134013136625,
        "gradePct": 0.5436233288142366,
        "smoothedEle": 136.1754040536818,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87772,
        "lng": 120.60329,
        "ele": 142.75,
        "distanceKm": 20.937841364648754,
        "gradePct": -0.595461436539923,
        "smoothedEle": 134.59646008356995,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878154,
        "lng": 120.603355,
        "ele": 137.5,
        "distanceKm": 20.98655730204828,
        "gradePct": -2.013313635765364,
        "smoothedEle": 132.5316097159597,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878465,
        "lng": 120.603551,
        "ele": 135.75,
        "distanceKm": 21.02654589909766,
        "gradePct": -2.96940838314843,
        "smoothedEle": 130.98222561890958,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878646,
        "lng": 120.603851,
        "ele": 133.25,
        "distanceKm": 21.063283644657133,
        "gradePct": -3.3817767418222906,
        "smoothedEle": 129.973292531677,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878751,
        "lng": 120.604483,
        "ele": 125,
        "distanceKm": 21.129074651053873,
        "gradePct": -3.462028955454071,
        "smoothedEle": 127.98910288980534,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878767,
        "lng": 120.604835,
        "ele": 120.25,
        "distanceKm": 21.16517996780841,
        "gradePct": -3.5075913859530043,
        "smoothedEle": 126.42251638459379,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8788135,
        "lng": 120.605225,
        "ele": 119.49999999999997,
        "distanceKm": 21.205467589905314,
        "gradePct": -3.6058776392357133,
        "smoothedEle": 124.58716308449706,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87886,
        "lng": 120.605615,
        "ele": 118.75,
        "distanceKm": 21.24575519843072,
        "gradePct": -3.6507526802901245,
        "smoothedEle": 123.1531729800592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878906440184977,
        "lng": 120.6061011455202,
        "ele": 119.01844037559123,
        "distanceKm": 21.29582645105607,
        "gradePct": -3.6542654857432515,
        "smoothedEle": 121.68330371495222,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878952880369955,
        "lng": 120.6065872910404,
        "ele": 119.28688075118242,
        "distanceKm": 21.34589768673763,
        "gradePct": -3.334218296963049,
        "smoothedEle": 120.59072558221541,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878999320554932,
        "lng": 120.6070734365606,
        "ele": 119.55532112677365,
        "distanceKm": 21.39596890547537,
        "gradePct": -2.3032516784460255,
        "smoothedEle": 120.41338424465744,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87904585577754,
        "lng": 120.60755957152867,
        "ele": 120.00711555083721,
        "distanceKm": 21.446040122972935,
        "gradePct": -1.2022671473933542,
        "smoothedEle": 120.74027456802924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879092641833157,
        "lng": 120.6080456786465,
        "ele": 120.94283666312793,
        "distanceKm": 21.49611137576684,
        "gradePct": -0.2836011464833358,
        "smoothedEle": 121.10988422953506,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87913942788877,
        "lng": 120.60853178576433,
        "ele": 121.87855777541864,
        "distanceKm": 21.54618261149187,
        "gradePct": 0.4060762915714747,
        "smoothedEle": 121.40186902401341,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879186213944386,
        "lng": 120.60901789288216,
        "ele": 122.81427888770929,
        "distanceKm": 21.59625383015096,
        "gradePct": 0.6506367714934905,
        "smoothedEle": 121.716517920551,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879233,
        "lng": 120.609504,
        "ele": 123.75,
        "distanceKm": 21.646325031742556,
        "gradePct": 0.6794201054850102,
        "smoothedEle": 122.10121788263704,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879255,
        "lng": 120.609914,
        "ele": 123.25,
        "distanceKm": 21.688399458792425,
        "gradePct": 0.6835325342394281,
        "smoothedEle": 122.4200224415159,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879277,
        "lng": 120.610324,
        "ele": 122.75,
        "distanceKm": 21.730473879047892,
        "gradePct": 0.7255193168743287,
        "smoothedEle": 122.76130394661425,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879323,
        "lng": 120.610863,
        "ele": 121.5,
        "distanceKm": 21.785929160113046,
        "gradePct": 0.8383928755303133,
        "smoothedEle": 123.32842316497441,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879375,
        "lng": 120.611258,
        "ele": 122.5,
        "distanceKm": 21.82680668493403,
        "gradePct": 0.9229290002336261,
        "smoothedEle": 123.79711528622335,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879458,
        "lng": 120.611651,
        "ele": 123.25,
        "distanceKm": 21.86811255038448,
        "gradePct": 0.9796056705933047,
        "smoothedEle": 124.22551668327904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879568734719516,
        "lng": 120.61199871889634,
        "ele": 123.42426310976649,
        "distanceKm": 21.905803245263847,
        "gradePct": 0.995320907474845,
        "smoothedEle": 124.55183293818035,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879686,
        "lng": 120.612344,
        "ele": 123.75,
        "distanceKm": 21.943502923953123,
        "gradePct": 1.0019370259280116,
        "smoothedEle": 124.89842088572482,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87987,
        "lng": 120.612777,
        "ele": 125.5,
        "distanceKm": 21.992353305430434,
        "gradePct": 0.9966676181900986,
        "smoothedEle": 125.39541614626955,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880026,
        "lng": 120.613086,
        "ele": 127.25,
        "distanceKm": 22.02845036252341,
        "gradePct": 1.0054473798628614,
        "smoothedEle": 125.82505735310318,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880196,
        "lng": 120.613467,
        "ele": 128,
        "distanceKm": 22.071818896357676,
        "gradePct": 1.0579860427303809,
        "smoothedEle": 126.3735773503171,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880402,
        "lng": 120.613834,
        "ele": 128,
        "distanceKm": 22.11584483645353,
        "gradePct": 1.1372589358886924,
        "smoothedEle": 126.91866710021574,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880603037619522,
        "lng": 120.61422354572083,
        "ele": 128,
        "distanceKm": 22.161586717604166,
        "gradePct": 1.268340110245501,
        "smoothedEle": 127.61908246860112,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880818737803466,
        "lng": 120.61460396029206,
        "ele": 128,
        "distanceKm": 22.207347825633438,
        "gradePct": 1.5280660258841066,
        "smoothedEle": 128.63001880685542,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881035,
        "lng": 120.614984,
        "ele": 128,
        "distanceKm": 22.253108988660166,
        "gradePct": 1.740458295953039,
        "smoothedEle": 129.61785328110858,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881486,
        "lng": 120.615527,
        "ele": 128.25,
        "distanceKm": 22.328004783908106,
        "gradePct": 1.98585131004166,
        "smoothedEle": 131.07656700518763,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881793,
        "lng": 120.615904,
        "ele": 131,
        "distanceKm": 22.379550610094324,
        "gradePct": 2.011766786487776,
        "smoothedEle": 132.0394672647415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882058,
        "lng": 120.616472,
        "ele": 134.75,
        "distanceKm": 22.444774940820402,
        "gradePct": 1.925277471919948,
        "smoothedEle": 133.28850327451298,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882242,
        "lng": 120.617129,
        "ele": 137,
        "distanceKm": 22.515122171364606,
        "gradePct": 1.8174035825901376,
        "smoothedEle": 134.46046497503875,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882384000000002,
        "lng": 120.6175745,
        "ele": 137.1875,
        "distanceKm": 22.56341545065461,
        "gradePct": 1.7165858734364638,
        "smoothedEle": 135.1712266498004,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882526,
        "lng": 120.61802,
        "ele": 137.375,
        "distanceKm": 22.611708684829487,
        "gradePct": 1.6562989631917078,
        "smoothedEle": 135.967887429575,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882668,
        "lng": 120.6184655,
        "ele": 137.5625,
        "distanceKm": 22.66000187388924,
        "gradePct": 1.6083085905580874,
        "smoothedEle": 136.7587961474097,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88281,
        "lng": 120.618911,
        "ele": 137.75,
        "distanceKm": 22.708295017833475,
        "gradePct": 1.553514640902199,
        "smoothedEle": 137.4537561267107,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883053,
        "lng": 120.619287,
        "ele": 134.75,
        "distanceKm": 22.75534622653367,
        "gradePct": 1.660198709489356,
        "smoothedEle": 138.3728643710625,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883472,
        "lng": 120.619788,
        "ele": 136.25,
        "distanceKm": 22.824663550421004,
        "gradePct": 2.1111161799476226,
        "smoothedEle": 140.4022846171446,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883732,
        "lng": 120.620062,
        "ele": 138.25,
        "distanceKm": 22.864959086221937,
        "gradePct": 2.4725609098850416,
        "smoothedEle": 141.77525447374683,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884145,
        "lng": 120.620336,
        "ele": 140.75,
        "distanceKm": 22.918781670969228,
        "gradePct": 2.9352874420398893,
        "smoothedEle": 143.52917950712012,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884596,
        "lng": 120.620407,
        "ele": 144.25,
        "distanceKm": 22.969455367495083,
        "gradePct": 3.023065571003041,
        "smoothedEle": 144.8320722840134,
        "gradeBand": "hard"
      },
      {
        "lat": 22.884963807308626,
        "lng": 120.62034421485424,
        "ele": 148.8392572874844,
        "distanceKm": 23.01085639708622,
        "gradePct": 3.1251343046771582,
        "smoothedEle": 146.24831782116334,
        "gradeBand": "hard"
      },
      {
        "lat": 22.885327,
        "lng": 120.620251,
        "ele": 153.5,
        "distanceKm": 23.052355242303786,
        "gradePct": 3.192247024311553,
        "smoothedEle": 147.73030398383773,
        "gradeBand": "hard"
      },
      {
        "lat": 22.885836,
        "lng": 120.62026,
        "ele": 154.5,
        "distanceKm": 23.108961047113347,
        "gradePct": 3.1017419165036384,
        "smoothedEle": 149.41263712613105,
        "gradeBand": "hard"
      },
      {
        "lat": 22.886148,
        "lng": 120.620388,
        "ele": 153.75,
        "distanceKm": 23.146049240188326,
        "gradePct": 2.9757231707671785,
        "smoothedEle": 150.18171381765382,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886453,
        "lng": 120.620609,
        "ele": 150.5,
        "distanceKm": 23.186826007476242,
        "gradePct": 2.7429297532865418,
        "smoothedEle": 150.91214627253797,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886913,
        "lng": 120.620969,
        "ele": 152.75,
        "distanceKm": 23.249884294225286,
        "gradePct": 1.9815118837963936,
        "smoothedEle": 151.6050864800933,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887197,
        "lng": 120.621406,
        "ele": 153.25,
        "distanceKm": 23.304668597739724,
        "gradePct": 1.0303708392863806,
        "smoothedEle": 151.3458065554061,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887337,
        "lng": 120.621777,
        "ele": 150.5,
        "distanceKm": 23.345738839736345,
        "gradePct": 0.4128636301527152,
        "smoothedEle": 151.00100448094915,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887468,
        "lng": 120.622154,
        "ele": 148.5,
        "distanceKm": 23.387014775215043,
        "gradePct": -0.15047706826443683,
        "smoothedEle": 150.61326648282136,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887744,
        "lng": 120.62261,
        "ele": 150.75,
        "distanceKm": 23.44290721221679,
        "gradePct": -0.7406313409181449,
        "smoothedEle": 150.04715345238577,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8880585,
        "lng": 120.6229525,
        "ele": 149.375,
        "distanceKm": 23.492444844059012,
        "gradePct": -0.7564445258254748,
        "smoothedEle": 149.89076936515366,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888373,
        "lng": 120.623295,
        "ele": 148,
        "distanceKm": 23.541982418315868,
        "gradePct": -0.5239647971834264,
        "smoothedEle": 149.98461163521947,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888733,
        "lng": 120.623629,
        "ele": 150.5,
        "distanceKm": 23.594642470132253,
        "gradePct": 0.025053874326829463,
        "smoothedEle": 150.5861162388653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889018,
        "lng": 120.623923,
        "ele": 148.75,
        "distanceKm": 23.63836138792954,
        "gradePct": 0.7091664453533635,
        "smoothedEle": 151.51152925159911,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889273,
        "lng": 120.624161,
        "ele": 146.25,
        "distanceKm": 23.675756642537085,
        "gradePct": 1.199142696015376,
        "smoothedEle": 152.3417373151812,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889785,
        "lng": 120.624478,
        "ele": 151.75,
        "distanceKm": 23.741298608696592,
        "gradePct": 1.5726289100963469,
        "smoothedEle": 153.12857407008235,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890240588917145,
        "lng": 120.62456225984212,
        "ele": 155.90427038990296,
        "distanceKm": 23.792687923341038,
        "gradePct": 1.2785783328797795,
        "smoothedEle": 153.12094727347932,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890698,
        "lng": 120.624635,
        "ele": 160,
        "distanceKm": 23.84409271148457,
        "gradePct": 0.5500672764156624,
        "smoothedEle": 152.7389043080805,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891241,
        "lng": 120.624737,
        "ele": 160.25,
        "distanceKm": 23.90536905329425,
        "gradePct": -0.2469814271284898,
        "smoothedEle": 152.2032739149422,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891877,
        "lng": 120.624877,
        "ele": 155,
        "distanceKm": 23.977528602448285,
        "gradePct": -0.46142711938782266,
        "smoothedEle": 152.20034286149917,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892093,
        "lng": 120.625046,
        "ele": 149,
        "distanceKm": 24.00713558044629,
        "gradePct": -0.5364878374987986,
        "smoothedEle": 151.94059588577295,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89218,
        "lng": 120.625212,
        "ele": 148,
        "distanceKm": 24.026699359185343,
        "gradePct": -0.6166018079615179,
        "smoothedEle": 151.63496895938712,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892203823187316,
        "lng": 120.62559947713488,
        "ele": 145.54761307034596,
        "distanceKm": 24.066479723164036,
        "gradePct": -0.8779375331579362,
        "smoothedEle": 150.78733929825742,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892201,
        "lng": 120.625987,
        "ele": 144.25,
        "distanceKm": 24.106177711079823,
        "gradePct": -1.2847805861581396,
        "smoothedEle": 149.6336798957025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892284,
        "lng": 120.625562,
        "ele": 146,
        "distanceKm": 24.150680998616714,
        "gradePct": -1.8975167976342886,
        "smoothedEle": 148.40639979080524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892329,
        "lng": 120.625195,
        "ele": 148,
        "distanceKm": 24.188606949237887,
        "gradePct": -2.334020345372062,
        "smoothedEle": 147.43510997927777,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892389,
        "lng": 120.625127,
        "ele": 148.25,
        "distanceKm": 24.19825230543425,
        "gradePct": -2.370868257406934,
        "smoothedEle": 147.2767938301625,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892477,
        "lng": 120.625073,
        "ele": 148.5,
        "distanceKm": 24.209492771173135,
        "gradePct": -2.3883505805081398,
        "smoothedEle": 147.12707050146318,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892625,
        "lng": 120.625071,
        "ele": 148,
        "distanceKm": 24.22595091824913,
        "gradePct": -2.3605474291324327,
        "smoothedEle": 146.92556630567884,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893014,
        "lng": 120.625118,
        "ele": 146,
        "distanceKm": 24.269472922272854,
        "gradePct": -1.939603543520199,
        "smoothedEle": 146.8211471402625,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893424,
        "lng": 120.625197,
        "ele": 144.75,
        "distanceKm": 24.31577556483743,
        "gradePct": -1.1173345328035151,
        "smoothedEle": 147.13432802533276,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89381460873457,
        "lng": 120.62527905430339,
        "ele": 145.88439129110782,
        "distanceKm": 24.360015160178843,
        "gradePct": -0.2596043798948964,
        "smoothedEle": 147.64814162352644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894205217469143,
        "lng": 120.62536110860678,
        "ele": 147.01878258221564,
        "distanceKm": 24.404254750923098,
        "gradePct": 0.4740321077626265,
        "smoothedEle": 148.14490529819457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89459597437182,
        "lng": 120.62544231930596,
        "ele": 148.33998554075157,
        "distanceKm": 24.448494181626387,
        "gradePct": 0.7961219264828998,
        "smoothedEle": 148.46372375337867,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.894987,
        "lng": 120.625522,
        "ele": 150,
        "distanceKm": 24.49273377241616,
        "gradePct": 0.8560123030327021,
        "smoothedEle": 148.6905030179763,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8954785,
        "lng": 120.6256305,
        "ele": 150.375,
        "distanceKm": 24.548504803960373,
        "gradePct": 0.8503300837252994,
        "smoothedEle": 149.2151166272801,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89597,
        "lng": 120.625739,
        "ele": 150.75,
        "distanceKm": 24.60427582748058,
        "gradePct": 0.9094916278409958,
        "smoothedEle": 149.96404044542197,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896419,
        "lng": 120.625874,
        "ele": 151,
        "distanceKm": 24.656082149346876,
        "gradePct": 1.076554535202025,
        "smoothedEle": 150.65572996791818,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896912,
        "lng": 120.626162,
        "ele": 150.75,
        "distanceKm": 24.71833523827677,
        "gradePct": 1.2731897276894744,
        "smoothedEle": 151.4777042232265,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897408,
        "lng": 120.626528,
        "ele": 150.75,
        "distanceKm": 24.78502387782789,
        "gradePct": 1.2697011942841714,
        "smoothedEle": 152.24491712062692,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897894,
        "lng": 120.626796,
        "ele": 152.25,
        "distanceKm": 24.84563761078831,
        "gradePct": 1.1921689336191619,
        "smoothedEle": 152.90061809952553,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89830631381058,
        "lng": 120.62694059749748,
        "ele": 153.43916996987568,
        "distanceKm": 24.893818030969854,
        "gradePct": 1.1277965817886337,
        "smoothedEle": 153.40957829808457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898727643446488,
        "lng": 120.6270528581384,
        "ele": 154.7192843602941,
        "distanceKm": 24.942058388223685,
        "gradePct": 1.1038363740619173,
        "smoothedEle": 153.95829761763653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899149,
        "lng": 120.627165,
        "ele": 155.75,
        "distanceKm": 24.9902987452038,
        "gradePct": 1.139583816939283,
        "smoothedEle": 154.5811466699002,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8996815,
        "lng": 120.627316,
        "ele": 155.875,
        "distanceKm": 25.051496960349315,
        "gradePct": 1.2697898538155716,
        "smoothedEle": 155.50209381604907,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900214,
        "lng": 120.627467,
        "ele": 156,
        "distanceKm": 25.112695160148547,
        "gradePct": 1.4056221780058897,
        "smoothedEle": 156.43554422888744,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9005855,
        "lng": 120.6275635,
        "ele": 156.49999999999997,
        "distanceKm": 25.155170285929405,
        "gradePct": 1.424592624065317,
        "smoothedEle": 156.9767754160431,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900957,
        "lng": 120.62766,
        "ele": 157,
        "distanceKm": 25.19764540541016,
        "gradePct": 1.3619417873678876,
        "smoothedEle": 157.41558715768787,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901526,
        "lng": 120.627824,
        "ele": 158,
        "distanceKm": 25.263107494985203,
        "gradePct": 1.1327847269589921,
        "smoothedEle": 157.94475766791828,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901951,
        "lng": 120.628087,
        "ele": 159.5,
        "distanceKm": 25.31750440802084,
        "gradePct": 0.9091910958008672,
        "smoothedEle": 158.31520734402727,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902269081770438,
        "lng": 120.62849795377504,
        "ele": 159.6292387022626,
        "distanceKm": 25.37248503163391,
        "gradePct": 0.7826320769197138,
        "smoothedEle": 158.72091873047378,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90258671583341,
        "lng": 120.6289093172384,
        "ele": 159.5,
        "distanceKm": 25.427465721079788,
        "gradePct": 0.7600883027771941,
        "smoothedEle": 159.1768197967506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902904,
        "lng": 120.629321,
        "ele": 159.5,
        "distanceKm": 25.482446429447705,
        "gradePct": 0.7817788332044727,
        "smoothedEle": 159.64001585937785,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903368,
        "lng": 120.629726,
        "ele": 159.25,
        "distanceKm": 25.548649847090633,
        "gradePct": 0.7711627182360017,
        "smoothedEle": 160.08736028037302,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9036,
        "lng": 120.629989,
        "ele": 159.5,
        "distanceKm": 25.58594856083667,
        "gradePct": 0.7559205977098911,
        "smoothedEle": 160.34439980129798,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903826143242096,
        "lng": 120.63040277454735,
        "ele": 160.22288538006234,
        "distanceKm": 25.635229199290983,
        "gradePct": 0.7206002440941032,
        "smoothedEle": 160.68342527236922,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904047,
        "lng": 120.63082,
        "ele": 161.25,
        "distanceKm": 25.68451859370944,
        "gradePct": 0.6906969829061491,
        "smoothedEle": 161.0354116872522,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904322,
        "lng": 120.631249,
        "ele": 161.25,
        "distanceKm": 25.738052915643273,
        "gradePct": 0.7065285551607329,
        "smoothedEle": 161.4288126559025,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904556,
        "lng": 120.631507,
        "ele": 161.75,
        "distanceKm": 25.775138992380057,
        "gradePct": 0.7205898858780725,
        "smoothedEle": 161.7110867549797,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904913,
        "lng": 120.631808,
        "ele": 163,
        "distanceKm": 25.825401882039053,
        "gradePct": 0.7597747193645885,
        "smoothedEle": 162.13536781790054,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90529143745006,
        "lng": 120.6320254529327,
        "ele": 163.06191712206487,
        "distanceKm": 25.873013347118285,
        "gradePct": 0.791795021115081,
        "smoothedEle": 162.53684023109622,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90566987490012,
        "lng": 120.6322429058654,
        "ele": 163.1238342441297,
        "distanceKm": 25.920624783119514,
        "gradePct": 0.8190556569795605,
        "smoothedEle": 162.93885203453223,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906048312350183,
        "lng": 120.63246035879808,
        "ele": 163.18575136619458,
        "distanceKm": 25.968236190041335,
        "gradePct": 0.8461247284111582,
        "smoothedEle": 163.3507967554152,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906426749800243,
        "lng": 120.63267781173077,
        "ele": 163.24766848825945,
        "distanceKm": 26.01584756788334,
        "gradePct": 0.8922125637233793,
        "smoothedEle": 163.83914269636705,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906804880893798,
        "lng": 120.63289589356138,
        "ele": 163.61780413793568,
        "distanceKm": 26.063458998493218,
        "gradePct": 0.9427678723489554,
        "smoothedEle": 164.34181119181542,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907183,
        "lng": 120.633114,
        "ele": 164,
        "distanceKm": 26.111070405341938,
        "gradePct": 0.9805544067065347,
        "smoothedEle": 164.8192875273386,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90756019347882,
        "lng": 120.63333925492917,
        "ele": 164.90439612888133,
        "distanceKm": 26.158939485014447,
        "gradePct": 1.036568964718061,
        "smoothedEle": 165.3434974786221,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907937386957638,
        "lng": 120.63356450985835,
        "ele": 165.80879225776263,
        "distanceKm": 26.20680853375247,
        "gradePct": 1.0820476608155938,
        "smoothedEle": 165.9105253970238,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908314580436457,
        "lng": 120.63378976478751,
        "ele": 166.71318838664396,
        "distanceKm": 26.25467755155418,
        "gradePct": 1.135636078370045,
        "smoothedEle": 166.52037122745008,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908691773915276,
        "lng": 120.63401501971667,
        "ele": 167.6175845155253,
        "distanceKm": 26.302546538419872,
        "gradePct": 1.2156410340335428,
        "smoothedEle": 167.16508703961046,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909068824407395,
        "lng": 120.63424055938555,
        "ele": 168.18489784783085,
        "distanceKm": 26.350415631534645,
        "gradePct": 1.2862424114330981,
        "smoothedEle": 167.82263835487467,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909445850373444,
        "lng": 120.63446614789497,
        "ele": 168.69439239654378,
        "distanceKm": 26.398284719480465,
        "gradePct": 1.334707402357926,
        "smoothedEle": 168.47897223201983,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90982287633949,
        "lng": 120.63469173640438,
        "ele": 169.20388694525667,
        "distanceKm": 26.446153776410153,
        "gradePct": 1.360378682269276,
        "smoothedEle": 169.13253666823934,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91019990230554,
        "lng": 120.63491732491379,
        "ele": 169.71338149396956,
        "distanceKm": 26.49402280232469,
        "gradePct": 1.3698201929647573,
        "smoothedEle": 169.789926845894,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910576928271585,
        "lng": 120.63514291342321,
        "ele": 170.22287604268246,
        "distanceKm": 26.541891797223666,
        "gradePct": 1.3727958065912182,
        "smoothedEle": 170.45114276005756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910953954237634,
        "lng": 120.63536850193262,
        "ele": 170.73237059139538,
        "distanceKm": 26.589760761105957,
        "gradePct": 1.3808813898949004,
        "smoothedEle": 171.12386287388844,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91133,
        "lng": 120.635596,
        "ele": 171.25,
        "distanceKm": 26.637629165165077,
        "gradePct": 1.414128605800021,
        "smoothedEle": 171.84440590189024,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911781,
        "lng": 120.63586033333334,
        "ele": 172.41666666666669,
        "distanceKm": 26.694619561870134,
        "gradePct": 1.4294404995328926,
        "smoothedEle": 172.6570509031065,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.912232,
        "lng": 120.63612466666666,
        "ele": 173.58333333333331,
        "distanceKm": 26.75160991578477,
        "gradePct": 1.4184639302535706,
        "smoothedEle": 173.42464290653945,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.912683,
        "lng": 120.636389,
        "ele": 174.75,
        "distanceKm": 26.808600226910375,
        "gradePct": 1.4162975268182032,
        "smoothedEle": 174.2400405119763,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.913140782831206,
        "lng": 120.63665707474924,
        "ele": 175.85252525380233,
        "distanceKm": 26.866436218876093,
        "gradePct": 1.447602681696514,
        "smoothedEle": 175.15038061505948,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.913595891415603,
        "lng": 120.63693053737461,
        "ele": 176.05126262690118,
        "distanceKm": 26.92427581771444,
        "gradePct": 1.531525493052234,
        "smoothedEle": 176.11953623685426,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.914051,
        "lng": 120.637204,
        "ele": 176.25,
        "distanceKm": 26.982115371015936,
        "gradePct": 1.6161560577156195,
        "smoothedEle": 177.09341649510483,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91445433333188,
        "lng": 120.6374440841159,
        "ele": 177.3476414276715,
        "distanceKm": 27.033262704820135,
        "gradePct": 1.6396791139835813,
        "smoothedEle": 177.90758682005742,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.914857666663753,
        "lng": 120.63768416823181,
        "ele": 178.44528285534298,
        "distanceKm": 27.084410003447218,
        "gradePct": 1.562487781456417,
        "smoothedEle": 178.57652345284774,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91526099999563,
        "lng": 120.63792425234772,
        "ele": 179.5429242830145,
        "distanceKm": 27.13555726689597,
        "gradePct": 1.397910698531097,
        "smoothedEle": 179.1053103568408,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91566433332751,
        "lng": 120.63816433646363,
        "ele": 180.64056571068588,
        "distanceKm": 27.186704495166936,
        "gradePct": 1.1991508184317226,
        "smoothedEle": 179.56476844414232,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916067666659384,
        "lng": 120.63840442057953,
        "ele": 181.73820713835738,
        "distanceKm": 27.23785168825787,
        "gradePct": 0.9649738760461337,
        "smoothedEle": 179.89755219206643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916470779370293,
        "lng": 120.63864494387323,
        "ele": 181.41906276324193,
        "distanceKm": 27.288998985206213,
        "gradePct": 0.721327335399084,
        "smoothedEle": 180.06662139417887,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916873889685146,
        "lng": 120.63888547193662,
        "ele": 181.08453138162096,
        "distanceKm": 27.340146248655124,
        "gradePct": 0.43978807648838525,
        "smoothedEle": 180.02610956046956,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917277,
        "lng": 120.639126,
        "ele": 180.75,
        "distanceKm": 27.391293476812926,
        "gradePct": 0.094665700464731,
        "smoothedEle": 179.7839575639224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917857,
        "lng": 120.63941,
        "ele": 179.5,
        "distanceKm": 27.462042349570222,
        "gradePct": -0.31434187062480246,
        "smoothedEle": 179.3488315388131,
        "gradeBand": "descent"
      },
      {
        "lat": 22.918226205906397,
        "lng": 120.63954465610264,
        "ele": 178.75059054940786,
        "distanceKm": 27.505350746590263,
        "gradePct": -0.49935641440564105,
        "smoothedEle": 179.05495694697441,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9186,
        "lng": 120.639664,
        "ele": 178,
        "distanceKm": 27.548674763508227,
        "gradePct": -0.5701598815458644,
        "smoothedEle": 178.84541230335432,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919046,
        "lng": 120.639821,
        "ele": 176.75,
        "distanceKm": 27.600809357331748,
        "gradePct": -0.5069518660005929,
        "smoothedEle": 178.71152841513083,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919417,
        "lng": 120.639916,
        "ele": 176.75,
        "distanceKm": 27.643194565679728,
        "gradePct": -0.39219555636462783,
        "smoothedEle": 178.68035974701104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919843,
        "lng": 120.639958,
        "ele": 177.5,
        "distanceKm": 27.690758573674156,
        "gradePct": -0.23108479152453834,
        "smoothedEle": 178.69180439422033,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920175,
        "lng": 120.639951,
        "ele": 178.25,
        "distanceKm": 27.72768230078123,
        "gradePct": -0.11087836483247354,
        "smoothedEle": 178.72518951337844,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920579,
        "lng": 120.63992366666666,
        "ele": 179.00000000000003,
        "distanceKm": 27.77269225006527,
        "gradePct": 0.0143709483908197,
        "smoothedEle": 178.8124762575304,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.920983,
        "lng": 120.63989633333334,
        "ele": 179.74999999999997,
        "distanceKm": 27.817702198830126,
        "gradePct": 0.1425004040614089,
        "smoothedEle": 178.98410679121224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.921387,
        "lng": 120.639869,
        "ele": 180.5,
        "distanceKm": 27.86271214707597,
        "gradePct": 0.2931698619853062,
        "smoothedEle": 179.27139570754534,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.921898,
        "lng": 120.640011,
        "ele": 180.5,
        "distanceKm": 27.921364401055527,
        "gradePct": 0.48225816456349146,
        "smoothedEle": 179.68399342256038,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.922372,
        "lng": 120.640263,
        "ele": 179.75,
        "distanceKm": 27.980050420432235,
        "gradePct": 0.5834828705458953,
        "smoothedEle": 180.00749994451326,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9227525,
        "lng": 120.64046900000001,
        "ele": 179.91666666666669,
        "distanceKm": 28.027328433839248,
        "gradePct": 0.5771431799055071,
        "smoothedEle": 180.19983535951087,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.923133,
        "lng": 120.640675,
        "ele": 180.08333333333334,
        "distanceKm": 28.074606420806035,
        "gradePct": 0.4948851678983335,
        "smoothedEle": 180.34483802233362,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9235135,
        "lng": 120.640881,
        "ele": 180.25,
        "distanceKm": 28.121884381333246,
        "gradePct": 0.38344579573147675,
        "smoothedEle": 180.45375140388782,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.923894,
        "lng": 120.641087,
        "ele": 180.41666666666666,
        "distanceKm": 28.169162315421524,
        "gradePct": 0.30812852146856184,
        "smoothedEle": 180.56373633823813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.924274500000003,
        "lng": 120.641293,
        "ele": 180.58333333333334,
        "distanceKm": 28.21644022306951,
        "gradePct": 0.26460358084867247,
        "smoothedEle": 180.6847473322596,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.924655,
        "lng": 120.641499,
        "ele": 180.75,
        "distanceKm": 28.263718104275853,
        "gradePct": 0.24593289449831077,
        "smoothedEle": 180.80330909654168,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925039397579216,
        "lng": 120.64170310844582,
        "ele": 181.06866294514782,
        "distanceKm": 28.311298777823136,
        "gradePct": 0.2631299850693276,
        "smoothedEle": 180.95562551090504,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925423,
        "lng": 120.641909,
        "ele": 181.5,
        "distanceKm": 28.358880655040497,
        "gradePct": 0.31875721089493086,
        "smoothedEle": 181.17733203845467,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925903,
        "lng": 120.642151,
        "ele": 181.75,
        "distanceKm": 28.417727711107563,
        "gradePct": 0.5057890202587476,
        "smoothedEle": 181.6995540888149,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926489,
        "lng": 120.642393,
        "ele": 181,
        "distanceKm": 28.48744207691553,
        "gradePct": 0.7349333262837402,
        "smoothedEle": 182.34912150980418,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926809,
        "lng": 120.642515,
        "ele": 181.25,
        "distanceKm": 28.525154317051,
        "gradePct": 0.8426826251420778,
        "smoothedEle": 182.7055502882441,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.927172,
        "lng": 120.642671,
        "ele": 182.25,
        "distanceKm": 28.568564836857846,
        "gradePct": 0.9304659203544677,
        "smoothedEle": 183.1242034931853,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.927795,
        "lng": 120.642896,
        "ele": 184.75,
        "distanceKm": 28.641571082183948,
        "gradePct": 0.9485559935523786,
        "smoothedEle": 183.81882799159195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9282428,
        "lng": 120.64306839999999,
        "ele": 185.1,
        "distanceKm": 28.694401710451316,
        "gradePct": 0.9823179682681945,
        "smoothedEle": 184.37953486159458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9286906,
        "lng": 120.6432408,
        "ele": 185.45,
        "distanceKm": 28.747232319212987,
        "gradePct": 1.1691431267274666,
        "smoothedEle": 185.2567578889886,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9291384,
        "lng": 120.6434132,
        "ele": 185.8,
        "distanceKm": 28.80006290846768,
        "gradePct": 1.3829854675603221,
        "smoothedEle": 186.18986566835025,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9295862,
        "lng": 120.64358560000001,
        "ele": 186.15,
        "distanceKm": 28.852893478216064,
        "gradePct": 1.539308430224514,
        "smoothedEle": 187.01761274419567,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930034,
        "lng": 120.643758,
        "ele": 186.5,
        "distanceKm": 28.905724028456866,
        "gradePct": 1.551491021566667,
        "smoothedEle": 187.67051773058915,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930518,
        "lng": 120.643908,
        "ele": 189.25,
        "distanceKm": 28.961691791913907,
        "gradePct": 1.4865117463319901,
        "smoothedEle": 188.4851683961273,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930986,
        "lng": 120.64402,
        "ele": 190.25,
        "distanceKm": 29.014980088345276,
        "gradePct": 1.5229148801903334,
        "smoothedEle": 189.46941715617675,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.931322,
        "lng": 120.644099,
        "ele": 189.75,
        "distanceKm": 29.053207522427215,
        "gradePct": 1.6445689274810236,
        "smoothedEle": 190.31063170640482,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.931701500000003,
        "lng": 120.64417499999999,
        "ele": 190.375,
        "distanceKm": 29.096117786613444,
        "gradePct": 1.9567771145143167,
        "smoothedEle": 191.46535346867864,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932081,
        "lng": 120.644251,
        "ele": 191,
        "distanceKm": 29.139028046843805,
        "gradePct": 2.3414896613472473,
        "smoothedEle": 192.83826076489487,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932487894908654,
        "lng": 120.6443237074509,
        "ele": 192.33408166771898,
        "distanceKm": 29.18488132443615,
        "gradePct": 2.818280656009701,
        "smoothedEle": 194.55004643357518,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932895,
        "lng": 120.644395,
        "ele": 194,
        "distanceKm": 29.23073436607968,
        "gradePct": 3.1923288544908504,
        "smoothedEle": 196.20075593274223,
        "gradeBand": "hard"
      },
      {
        "lat": 22.933211,
        "lng": 120.644379,
        "ele": 196,
        "distanceKm": 29.26591019309573,
        "gradePct": 3.309567963392792,
        "smoothedEle": 197.27159844076303,
        "gradeBand": "hard"
      },
      {
        "lat": 22.933725,
        "lng": 120.644311,
        "ele": 199.25,
        "distanceKm": 29.323487120340253,
        "gradePct": 3.3803602033336633,
        "smoothedEle": 199.1017515749076,
        "gradeBand": "hard"
      },
      {
        "lat": 22.934067,
        "lng": 120.644279,
        "ele": 201.25,
        "distanceKm": 29.361656767409453,
        "gradePct": 3.3130072054621826,
        "smoothedEle": 200.3090461845402,
        "gradeBand": "hard"
      },
      {
        "lat": 22.934327,
        "lng": 120.644294,
        "ele": 204.5,
        "distanceKm": 29.390608266981385,
        "gradePct": 3.172594030747402,
        "smoothedEle": 201.1014044266984,
        "gradeBand": "hard"
      },
      {
        "lat": 22.934861,
        "lng": 120.644527,
        "ele": 207.25,
        "distanceKm": 29.454601125987267,
        "gradePct": 2.7744984222000495,
        "smoothedEle": 202.47631824001286,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935312,
        "lng": 120.644677,
        "ele": 205.25,
        "distanceKm": 29.50704988089181,
        "gradePct": 2.1625596094896555,
        "smoothedEle": 202.90439301098098,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935746,
        "lng": 120.644688,
        "ele": 206,
        "distanceKm": 29.555321690648814,
        "gradePct": 1.4330861286383987,
        "smoothedEle": 202.97484184386568,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.936110189778862,
        "lng": 120.64458525565233,
        "ele": 206.18387411062574,
        "distanceKm": 29.597162291544763,
        "gradePct": 0.756209823578618,
        "smoothedEle": 202.75464008121924,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93647209488943,
        "lng": 120.64447312782616,
        "ele": 204.09193705531285,
        "distanceKm": 29.639010442519943,
        "gradePct": 0.05583262897731364,
        "smoothedEle": 202.25301102773818,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.936834,
        "lng": 120.644361,
        "ele": 202,
        "distanceKm": 29.680858585073686,
        "gradePct": -0.6108037852647378,
        "smoothedEle": 201.46901805971754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.937374,
        "lng": 120.644238,
        "ele": 197.75,
        "distanceKm": 29.74221078444475,
        "gradePct": -1.4755429547217513,
        "smoothedEle": 200.0046216188706,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93779911061387,
        "lng": 120.64414200526927,
        "ele": 197.37211102740358,
        "distanceKm": 29.790492294673236,
        "gradePct": -1.9350666056225447,
        "smoothedEle": 198.91961021544495,
        "gradeBand": "descent"
      },
      {
        "lat": 22.938224092178228,
        "lng": 120.64404533772439,
        "ele": 196.68509252283633,
        "distanceKm": 29.83877382840239,
        "gradePct": -2.2753303667680678,
        "smoothedEle": 197.70518656087248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93864907374258,
        "lng": 120.64394867017951,
        "ele": 195.99807401826905,
        "distanceKm": 29.887055355760314,
        "gradePct": -2.251890867919877,
        "smoothedEle": 196.81732754422086,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939074055306936,
        "lng": 120.64385200263463,
        "ele": 195.3110555137018,
        "distanceKm": 29.935336876747307,
        "gradePct": -1.7993402126662297,
        "smoothedEle": 196.57001234453253,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93949903687129,
        "lng": 120.64375533508976,
        "ele": 194.62403700913453,
        "distanceKm": 29.983618391362977,
        "gradePct": -1.0281645652613671,
        "smoothedEle": 197.01775561238375,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939924018435647,
        "lng": 120.64365866754488,
        "ele": 193.93701850456728,
        "distanceKm": 30.031899899608213,
        "gradePct": 0.09516810642233543,
        "smoothedEle": 198.06842245363043,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.940349,
        "lng": 120.643562,
        "ele": 193.25,
        "distanceKm": 30.080181401481852,
        "gradePct": 1.2816790101460827,
        "smoothedEle": 199.5070921348963,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.940785,
        "lng": 120.643444,
        "ele": 197.66666666666657,
        "distanceKm": 30.130145570581337,
        "gradePct": 2.2673559758199326,
        "smoothedEle": 201.1313160210152,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.941221,
        "lng": 120.643326,
        "ele": 202.08333333333343,
        "distanceKm": 30.180109730268573,
        "gradePct": 2.884543974875594,
        "smoothedEle": 202.75430565613308,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.941657,
        "lng": 120.643208,
        "ele": 206.5,
        "distanceKm": 30.230073880544182,
        "gradePct": 2.961528913862775,
        "smoothedEle": 203.9517437910973,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.942045,
        "lng": 120.6431255,
        "ele": 209.75,
        "distanceKm": 30.274036891181186,
        "gradePct": 2.726758570980901,
        "smoothedEle": 204.77751802383685,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.942433,
        "lng": 120.643043,
        "ele": 213,
        "distanceKm": 30.31799989716468,
        "gradePct": 2.3222183934246,
        "smoothedEle": 205.38092400890937,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9428335,
        "lng": 120.6429875,
        "ele": 212.62500000000003,
        "distanceKm": 30.36289468904697,
        "gradePct": 1.7613705924443002,
        "smoothedEle": 205.71784933533596,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943234,
        "lng": 120.642932,
        "ele": 212.25,
        "distanceKm": 30.407789478800993,
        "gradePct": 1.2949405581437123,
        "smoothedEle": 206.0075581352098,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943573,
        "lng": 120.642909,
        "ele": 207.75,
        "distanceKm": 30.445558113852925,
        "gradePct": 0.9562783510658794,
        "smoothedEle": 206.1551468364348,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943999333333334,
        "lng": 120.64291666666666,
        "ele": 204.33333333333343,
        "distanceKm": 30.492970782905378,
        "gradePct": 0.6365442576638453,
        "smoothedEle": 206.3104801154023,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.944425666666667,
        "lng": 120.64292433333334,
        "ele": 200.91666666666657,
        "distanceKm": 30.540383451916906,
        "gradePct": 0.5516526427561266,
        "smoothedEle": 206.65221284385547,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.944852,
        "lng": 120.642932,
        "ele": 197.5,
        "distanceKm": 30.587796120887468,
        "gradePct": 0.5044053843300436,
        "smoothedEle": 206.88735055322582,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.945238,
        "lng": 120.64292266666666,
        "ele": 200.75000000000009,
        "distanceKm": 30.630728060674297,
        "gradePct": 0.5598664576008494,
        "smoothedEle": 207.21692827193058,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.945624000000002,
        "lng": 120.64291333333334,
        "ele": 203.99999999999991,
        "distanceKm": 30.67366000040081,
        "gradePct": 0.687053504199272,
        "smoothedEle": 207.62132118189524,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94601,
        "lng": 120.642904,
        "ele": 207.25,
        "distanceKm": 30.716591940066284,
        "gradePct": 0.508685004537826,
        "smoothedEle": 207.49810256236233,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.946644,
        "lng": 120.64287,
        "ele": 214,
        "distanceKm": 30.787175533502584,
        "gradePct": 0.3526988475925505,
        "smoothedEle": 207.58967051624958,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94714,
        "lng": 120.642862,
        "ele": 216.25,
        "distanceKm": 30.842334376376783,
        "gradePct": 0.31212171597157234,
        "smoothedEle": 207.9504961790965,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.947586,
        "lng": 120.642829,
        "ele": 217,
        "distanceKm": 30.89204236575303,
        "gradePct": 0.4379154981681255,
        "smoothedEle": 208.44439309722793,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948247,
        "lng": 120.642688,
        "ele": 205,
        "distanceKm": 30.966946902712138,
        "gradePct": 0.7381355506291127,
        "smoothedEle": 209.03969905544423,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948744,
        "lng": 120.642531,
        "ele": 203.49999999999994,
        "distanceKm": 31.02450158172765,
        "gradePct": 0.5427946960122246,
        "smoothedEle": 208.91943102192454,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.949241,
        "lng": 120.642374,
        "ele": 202,
        "distanceKm": 31.082056244250683,
        "gradePct": -0.17902240408174983,
        "smoothedEle": 207.98712652017002,
        "gradeBand": "descent"
      },
      {
        "lat": 22.94969397405456,
        "lng": 120.64222261286511,
        "ele": 205.85888775183662,
        "distanceKm": 31.13475604561967,
        "gradePct": -1.139417143728029,
        "smoothedEle": 206.5050270069498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.950146,
        "lng": 120.642068,
        "ele": 209.75,
        "distanceKm": 31.18745336320089,
        "gradePct": -2.1610149122968285,
        "smoothedEle": 204.6748182981442,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 31.18745336320089,
      "elevationGainM": 224.81393731309942,
      "elevationLossM": 70.74242593813183,
      "minimumElevationM": 40.340523958354275,
      "maximumElevationM": 217,
      "maximumSustainedGradePct": 9.970002323926693
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 403,
        "startDistanceKm": 0,
        "endDistanceKm": 19.678431633901997,
        "distanceKm": 19.678431633901997,
        "gainM": 129.41580681671664,
        "averageGradePct": 0.657653055001391,
        "maximumGradePct": 9.970002323926693
      },
      {
        "startIndex": 435,
        "endIndex": 640,
        "startDistanceKm": 21.16517996780841,
        "endDistanceKm": 31.18745336320089,
        "distanceKm": 10.022273395392482,
        "gainM": 104.56236862158016,
        "averageGradePct": 1.0432999030903547,
        "maximumGradePct": 3.3803602033336633
      }
    ]
  },
  "kaohsiung-jiaxian-liugui": {
    "routeId": "kaohsiung-jiaxian-liugui",
    "direction": "point-to-point",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T16:15:57.241Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "c1f6121cb745c723287e2c78b97459b0b92cc3d6620e260cc8bc6067c24337b9",
      "roadPolicyAuditSha256": "ef046a108ad011b86f2ccbe25439d8eff8315ed907496cf799a584487477c0cd",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "甲仙、寶來與荖濃溪谷路線包含長距離河谷爬升及陡峭側坡，預設100公尺分析為爬升1292公尺、最大持續坡度26.0%，短距離尖峰偏高。比較500/200、750/300、1000/500公尺後，爬升依序為847、783、748公尺，最大持續坡度依序為10.0%、8.6%、7.1%；相近的旗山、甲仙、荖濃、六龜、美濃100公里實騎環線記錄總爬升約1100公尺，本路線73.7公里至十八羅漢山所得847公尺合理且500/200仍保留台20主要爬升，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://www.ptt.cc/bbs/bicycle/M.1763468449.A.983.html",
        "referenceLabel": "旗山甲仙六龜美濃100公里環線約1100公尺爬升實騎資料"
      },
      "reviewedAt": "2026-07-29T16:22:30.000Z",
      "reviewerNote": "2026-07-30 重新稽核：舊環線在寶來西側台20切入679公尺service／track，荖濃橋繞行另導入115公尺service，新威返旗山也缺少台27甲南向轉台28西向的合法主線。新增八個目前台20主線控制點、移除荖濃橋西繞行，並改為旗山經甲仙、寶來、荖濃、六龜至十八羅漢山的單向GPX。live OSM node 1450372250是台20 ways 447651531／447650033與台27 way 53097995的共用節點；解析`/api/0.6/map`時已同時納入自閉合與帶tag的非自閉合node。最終 raw messages 的service、track、footway、path、steps、private、access禁制與bicycle=no均為0，live幾何取樣亦無禁止道路段。500/200公尺分析為73.7公里、爬升847公尺、最大10.0%。本GPX不可反轉騎乘，回程交通須自行另行安排。"
    },
    "waypoints": [
      {
        "name": "旗山車站外公共道路",
        "lat": 22.88462,
        "lng": 120.48197,
        "role": "start"
      },
      {
        "name": "甲仙台29主線",
        "lat": 23.08145,
        "lng": 120.58718,
        "role": "via"
      },
      {
        "name": "寶來台20主線",
        "lat": 23.108026,
        "lng": 120.698936,
        "role": "via"
      },
      {
        "name": "寶來西側第一控制點台20主線",
        "lat": 23.0908648,
        "lng": 120.6832002,
        "role": "via"
      },
      {
        "name": "寶來西側第二控制點台20主線",
        "lat": 23.088564,
        "lng": 120.6817261,
        "role": "via"
      },
      {
        "name": "寶來西側第三控制點台20主線",
        "lat": 23.0861907,
        "lng": 120.6795146,
        "role": "via"
      },
      {
        "name": "寶來西側第四控制點台20主線",
        "lat": 23.0859249,
        "lng": 120.679326,
        "role": "via"
      },
      {
        "name": "寶來西側第五控制點台20主線",
        "lat": 23.0844862,
        "lng": 120.6794588,
        "role": "via"
      },
      {
        "name": "寶來西側第六控制點台20主線",
        "lat": 23.0830527,
        "lng": 120.6788396,
        "role": "via"
      },
      {
        "name": "寶來西側第七控制點台20主線",
        "lat": 23.0816651,
        "lng": 120.6780336,
        "role": "via"
      },
      {
        "name": "寶來西側第八控制點台20主線",
        "lat": 23.0800716,
        "lng": 120.6770399,
        "role": "via"
      },
      {
        "name": "荖濃東側台20主線",
        "lat": 23.0760736,
        "lng": 120.6746016,
        "role": "via"
      },
      {
        "name": "荖濃台20與台27實際銜接",
        "lat": 23.0717047,
        "lng": 120.6728859,
        "role": "via"
      },
      {
        "name": "六龜台27主線",
        "lat": 22.99569,
        "lng": 120.634967,
        "role": "via"
      },
      {
        "name": "十八羅漢山台27甲",
        "lat": 22.95008,
        "lng": 120.64185,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.88475,
        "lng": 120.48198,
        "ele": 51.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 51.960068574076985,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885338,
        "lng": 120.48199,
        "ele": 51.75,
        "distanceKm": 0.06539073211076402,
        "gradePct": 0.2593907787752597,
        "smoothedEle": 52.12968610334594,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886007,
        "lng": 120.482001,
        "ele": 51.75,
        "distanceKm": 0.13978877524064345,
        "gradePct": 0.23434470581232855,
        "smoothedEle": 52.28765616817333,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886485,
        "lng": 120.482023,
        "ele": 52.25,
        "distanceKm": 0.19298778312973525,
        "gradePct": 0.22404883470529818,
        "smoothedEle": 52.392455453302745,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887125,
        "lng": 120.482037,
        "ele": 52.75,
        "distanceKm": 0.2641670844229003,
        "gradePct": 0.2152543235233679,
        "smoothedEle": 52.55702072112566,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887559500091424,
        "lng": 120.48204499413905,
        "ele": 52.81804861449917,
        "distanceKm": 0.31248829684735885,
        "gradePct": 0.25583631680549246,
        "smoothedEle": 52.7413614392009,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887994,
        "lng": 120.482053,
        "ele": 53,
        "distanceKm": 0.36080950926401495,
        "gradePct": 0.30665334737697236,
        "smoothedEle": 52.94237261822079,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888391378969846,
        "lng": 120.48205724989238,
        "ele": 53.100692949672435,
        "distanceKm": 0.4049982403951198,
        "gradePct": 0.361737392600066,
        "smoothedEle": 53.143698200264865,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888788689484922,
        "lng": 120.48207162494619,
        "ele": 53.30034647483622,
        "distanceKm": 0.4492017502779201,
        "gradePct": 0.4176437804016473,
        "smoothedEle": 53.35770869782395,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889186,
        "lng": 120.482086,
        "ele": 53.5,
        "distanceKm": 0.4934052600171019,
        "gradePct": 0.4752956473704337,
        "smoothedEle": 53.61915280745306,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889607333333334,
        "lng": 120.48209833333333,
        "ele": 53.666666666666664,
        "distanceKm": 0.540272486139751,
        "gradePct": 0.5399556851010452,
        "smoothedEle": 53.93685212474836,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890028666666666,
        "lng": 120.48211066666667,
        "ele": 53.833333333333336,
        "distanceKm": 0.5871397121563023,
        "gradePct": 0.5608961222573257,
        "smoothedEle": 54.184126293782214,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89045,
        "lng": 120.482123,
        "ele": 54,
        "distanceKm": 0.6340069380674658,
        "gradePct": 0.5159686887083375,
        "smoothedEle": 54.316080665387474,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890773,
        "lng": 120.482035,
        "ele": 54.5,
        "distanceKm": 0.6710369588145696,
        "gradePct": 0.4108845458926957,
        "smoothedEle": 54.308623341356565,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8911275,
        "lng": 120.4817025,
        "ele": 55.375,
        "distanceKm": 0.7231326396882195,
        "gradePct": 0.2578838355069094,
        "smoothedEle": 54.33643375347439,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891482,
        "lng": 120.48137,
        "ele": 56.25,
        "distanceKm": 0.7752282623849467,
        "gradePct": 0.13293927066134617,
        "smoothedEle": 54.38715934381937,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891923,
        "lng": 120.480962,
        "ele": 55,
        "distanceKm": 0.8396597165688021,
        "gradePct": 0.0878513773824032,
        "smoothedEle": 54.490645030269995,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892472,
        "lng": 120.480957,
        "ele": 53,
        "distanceKm": 0.9007079642375341,
        "gradePct": 0.1410097045536531,
        "smoothedEle": 54.60648212284417,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892879998715937,
        "lng": 120.48095838181624,
        "ele": 53.53636217720477,
        "distanceKm": 0.9460756350106261,
        "gradePct": 0.15685572833432465,
        "smoothedEle": 54.672484841032684,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893288,
        "lng": 120.480959,
        "ele": 54,
        "distanceKm": 0.9914434147215944,
        "gradePct": 0.1305692364114179,
        "smoothedEle": 54.674341558657886,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89387,
        "lng": 120.480955,
        "ele": 54.5,
        "distanceKm": 1.0561602485474557,
        "gradePct": 0.05364864778833224,
        "smoothedEle": 54.62925155622304,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89429,
        "lng": 120.480847,
        "ele": 54.75,
        "distanceKm": 1.104154643452282,
        "gradePct": 0.07469680716199181,
        "smoothedEle": 54.760890105175605,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89470671104401,
        "lng": 120.48077313479651,
        "ele": 55.12466961641844,
        "distanceKm": 1.1511045713060568,
        "gradePct": 0.17615501637518,
        "smoothedEle": 55.02500068757237,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89512382374482,
        "lng": 120.48070186930993,
        "ele": 55.29933992664221,
        "distanceKm": 1.1980564333624213,
        "gradePct": 0.3134147403260209,
        "smoothedEle": 55.29656356689527,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895540936445638,
        "lng": 120.48063060382336,
        "ele": 55.474010236865986,
        "distanceKm": 1.2450082919293892,
        "gradePct": 0.4354726344062777,
        "smoothedEle": 55.50796670068209,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895958,
        "lng": 120.480559,
        "ele": 56,
        "distanceKm": 1.291960150233043,
        "gradePct": 0.4821582226613261,
        "smoothedEle": 55.69175961579316,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896133,
        "lng": 120.480529,
        "ele": 56.25,
        "distanceKm": 1.3116604444980515,
        "gradePct": 0.4787988269096638,
        "smoothedEle": 55.76071064572069,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89650622269693,
        "lng": 120.48072491120924,
        "ele": 56.632147829911304,
        "distanceKm": 1.3577583585393258,
        "gradePct": 0.42238382192735824,
        "smoothedEle": 55.908252888595435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896879611348467,
        "lng": 120.48092045560462,
        "ele": 56.31607391495565,
        "distanceKm": 1.4038565232694844,
        "gradePct": 0.3584060069847227,
        "smoothedEle": 56.039490780987194,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897253,
        "lng": 120.481116,
        "ele": 56,
        "distanceKm": 1.4499546640437533,
        "gradePct": 0.3409133051634932,
        "smoothedEle": 56.20915587051084,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897696500000002,
        "lng": 120.481352,
        "ele": 56.125,
        "distanceKm": 1.5048761039817875,
        "gradePct": 0.3718240773996301,
        "smoothedEle": 56.48061360871303,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89814,
        "lng": 120.481588,
        "ele": 56.25,
        "distanceKm": 1.5597975091317913,
        "gradePct": 0.40196100474549123,
        "smoothedEle": 56.71798020134721,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898536,
        "lng": 120.481821,
        "ele": 56.25,
        "distanceKm": 1.609882941522007,
        "gradePct": 0.43449459119039363,
        "smoothedEle": 56.93066031110322,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898863,
        "lng": 120.481729,
        "ele": 56.5,
        "distanceKm": 1.6474450840800772,
        "gradePct": 0.466155688543875,
        "smoothedEle": 57.132230690504265,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8991803850749,
        "lng": 120.48194404260161,
        "ele": 57.31568959385416,
        "distanceKm": 1.6890467773125104,
        "gradePct": 0.49902056796902644,
        "smoothedEle": 57.400415841596946,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899499,
        "lng": 120.482157,
        "ele": 58,
        "distanceKm": 1.7306521351709232,
        "gradePct": 0.5381094579392426,
        "smoothedEle": 57.66823478530001,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89983928319933,
        "lng": 120.48235543020299,
        "ele": 58,
        "distanceKm": 1.7736035823221228,
        "gradePct": 0.569300015979426,
        "smoothedEle": 57.9152056064194,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900179,
        "lng": 120.482555,
        "ele": 58.25,
        "distanceKm": 1.8165549665909069,
        "gradePct": 0.5313267379310674,
        "smoothedEle": 58.029117991223195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900547,
        "lng": 120.482727,
        "ele": 59,
        "distanceKm": 1.8611063730370394,
        "gradePct": 0.4045663488928498,
        "smoothedEle": 58.029430833587774,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900929083924602,
        "lng": 120.4829042923173,
        "ele": 59.49747594276886,
        "distanceKm": 1.9073107002417868,
        "gradePct": 0.22207848671063607,
        "smoothedEle": 57.96213999382819,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9013315419623,
        "lng": 120.48303164615865,
        "ele": 59.24873797138443,
        "distanceKm": 1.9539245749462133,
        "gradePct": -0.023352052857681833,
        "smoothedEle": 57.75534720829256,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901734,
        "lng": 120.483159,
        "ele": 59,
        "distanceKm": 2.000538438818419,
        "gradePct": -0.2823367265414022,
        "smoothedEle": 57.421966725005824,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9021585,
        "lng": 120.4832885,
        "ele": 57.5,
        "distanceKm": 2.049569137874602,
        "gradePct": -0.48008808499605504,
        "smoothedEle": 57.069173648511814,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902583,
        "lng": 120.483418,
        "ele": 56,
        "distanceKm": 2.0985998256989724,
        "gradePct": -0.643265779113648,
        "smoothedEle": 56.68829473791256,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903047,
        "lng": 120.48367,
        "ele": 55.5,
        "distanceKm": 2.1562909099109424,
        "gradePct": -0.7891067616587437,
        "smoothedEle": 56.16020975229439,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903345644176234,
        "lng": 120.48402484998094,
        "ele": 54.29743686387566,
        "distanceKm": 2.205523535616422,
        "gradePct": -0.8423624487987339,
        "smoothedEle": 55.701372307498545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903640715340988,
        "lng": 120.48438327998475,
        "ele": 54.38794949110053,
        "distanceKm": 2.254761808439136,
        "gradePct": -0.8834229436163838,
        "smoothedEle": 55.26199019320729,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90393578650574,
        "lng": 120.48474170998857,
        "ele": 54.478462118325396,
        "distanceKm": 2.304000021699733,
        "gradePct": -0.8679374549810169,
        "smoothedEle": 54.902988230913465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90423085767049,
        "lng": 120.48510013999237,
        "ele": 54.568974745550264,
        "distanceKm": 2.353238175396196,
        "gradePct": -0.7565440285350598,
        "smoothedEle": 54.675065411039924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904525928835245,
        "lng": 120.48545856999618,
        "ele": 54.65948737277513,
        "distanceKm": 2.4024762695305535,
        "gradePct": -0.607301655635687,
        "smoothedEle": 54.515168858400216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904821,
        "lng": 120.485817,
        "ele": 54.75,
        "distanceKm": 2.4517143041007885,
        "gradePct": -0.42584797257446605,
        "smoothedEle": 54.437488924531195,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90514325,
        "lng": 120.48619099999999,
        "ele": 54.5625,
        "distanceKm": 2.504168769699662,
        "gradePct": -0.1996966288103968,
        "smoothedEle": 54.50281384083533,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9054655,
        "lng": 120.486565,
        "ele": 54.375,
        "distanceKm": 2.556623168816191,
        "gradePct": -0.012562297950626787,
        "smoothedEle": 54.63894833486337,
        "gradeBand": "descent"
      },
      {
        "lat": 22.905787750000002,
        "lng": 120.486939,
        "ele": 54.1875,
        "distanceKm": 2.6090775014487706,
        "gradePct": 0.16945249432109208,
        "smoothedEle": 54.843659474020875,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90611,
        "lng": 120.487313,
        "ele": 54,
        "distanceKm": 2.661531767594987,
        "gradePct": 0.2688424759138994,
        "smoothedEle": 54.987400194438024,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906454,
        "lng": 120.48771733333334,
        "ele": 54.833333333333336,
        "distanceKm": 2.717908226363795,
        "gradePct": 0.28942272318343476,
        "smoothedEle": 55.117317192214834,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906798000000002,
        "lng": 120.48812166666666,
        "ele": 55.666666666666664,
        "distanceKm": 2.7742846079493284,
        "gradePct": 0.2796439359081544,
        "smoothedEle": 55.267162702216865,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907142,
        "lng": 120.488526,
        "ele": 56.5,
        "distanceKm": 2.830660912352184,
        "gradePct": 0.2868057475897492,
        "smoothedEle": 55.476416111440436,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907462777759164,
        "lng": 120.48891043169066,
        "ele": 56,
        "distanceKm": 2.8837901672319872,
        "gradePct": 0.3410034442845384,
        "smoothedEle": 55.72070055761171,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90778346284949,
        "lng": 120.48929495541938,
        "ele": 55.876761910075345,
        "distanceKm": 2.936919423655311,
        "gradePct": 0.3956831568673064,
        "smoothedEle": 55.95921428628295,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90810363790737,
        "lng": 120.4896799803336,
        "ele": 55.88285512294663,
        "distanceKm": 2.9900486563585122,
        "gradePct": 0.3753245515453042,
        "smoothedEle": 56.07632363767618,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908423318953687,
        "lng": 120.4900654901668,
        "ele": 56.19142756147331,
        "distanceKm": 3.0431779288227196,
        "gradePct": 0.310815655818416,
        "smoothedEle": 56.15559975358028,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908743,
        "lng": 120.490451,
        "ele": 56.5,
        "distanceKm": 3.096307132093706,
        "gradePct": 0.22617062933995752,
        "smoothedEle": 56.22923435806235,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909197,
        "lng": 120.490959,
        "ele": 56.25,
        "distanceKm": 3.168803905949427,
        "gradePct": 0.18236913982900643,
        "smoothedEle": 56.3942334800628,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90965,
        "lng": 120.49138,
        "ele": 55.75,
        "distanceKm": 3.235111213155641,
        "gradePct": 0.19665926405673045,
        "smoothedEle": 56.53688164244521,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910142,
        "lng": 120.491772,
        "ele": 57,
        "distanceKm": 3.3029713358258097,
        "gradePct": 0.1819761324144798,
        "smoothedEle": 56.6083540256066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910484500000003,
        "lng": 120.4920335,
        "ele": 57.125,
        "distanceKm": 3.3495308030467332,
        "gradePct": 0.13906970689908238,
        "smoothedEle": 56.628508251504634,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910827,
        "lng": 120.492295,
        "ele": 57.25,
        "distanceKm": 3.396090231340999,
        "gradePct": 0.09937899967743027,
        "smoothedEle": 56.65169306660731,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911128333628668,
        "lng": 120.49247266512754,
        "ele": 57.142977628593144,
        "distanceKm": 3.4342194508699517,
        "gradePct": 0.07732702196878442,
        "smoothedEle": 56.689617221334274,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911438,
        "lng": 120.492633,
        "ele": 56.75,
        "distanceKm": 3.472368337913244,
        "gradePct": 0.10724892520234866,
        "smoothedEle": 56.79061985068289,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911852889104807,
        "lng": 120.49282523595866,
        "ele": 56.528752474527636,
        "distanceKm": 3.5225278786032335,
        "gradePct": 0.19778502371649492,
        "smoothedEle": 57.01238952602793,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.912273418054564,
        "lng": 120.49300289099568,
        "ele": 56.602529483257264,
        "distanceKm": 3.5727041224871936,
        "gradePct": 0.29351629524480294,
        "smoothedEle": 57.22708026904963,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.912693947004325,
        "lng": 120.4931805460327,
        "ele": 56.67630649198689,
        "distanceKm": 3.6228803459015486,
        "gradePct": 0.4422433201436494,
        "smoothedEle": 57.562825740102184,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.913114475652147,
        "lng": 120.49335820191179,
        "ele": 56.75098976368417,
        "distanceKm": 3.6730565488327898,
        "gradePct": 0.6129579839902911,
        "smoothedEle": 58.01957859597158,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.913534737826076,
        "lng": 120.49353660095589,
        "ele": 57.62549488184209,
        "distanceKm": 3.7232327865505925,
        "gradePct": 0.7526838212517284,
        "smoothedEle": 58.52077328132234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.913955,
        "lng": 120.493715,
        "ele": 58.5,
        "distanceKm": 3.7734090036384513,
        "gradePct": 0.8920256754334119,
        "smoothedEle": 59.01584820952924,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.914354666666668,
        "lng": 120.493872,
        "ele": 59.75000000000001,
        "distanceKm": 3.8206696322400813,
        "gradePct": 0.9512335008168114,
        "smoothedEle": 59.45050013581363,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.914754333333335,
        "lng": 120.494029,
        "ele": 60.99999999999999,
        "distanceKm": 3.8679302447095387,
        "gradePct": 0.9344936504094354,
        "smoothedEle": 59.841901264722566,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.915154,
        "lng": 120.494186,
        "ele": 62.25,
        "distanceKm": 3.9151908410466,
        "gradePct": 0.8747877988410686,
        "smoothedEle": 60.190020410195196,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.915567,
        "lng": 120.4943424,
        "ele": 61.85,
        "distanceKm": 3.96382790995519,
        "gradePct": 0.8363846495819508,
        "smoothedEle": 60.5940834935226,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91598,
        "lng": 120.4944988,
        "ele": 61.449999999999996,
        "distanceKm": 4.012464962788961,
        "gradePct": 0.8421859981647295,
        "smoothedEle": 61.05941449463437,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916393,
        "lng": 120.4946552,
        "ele": 61.050000000000004,
        "distanceKm": 4.061101999545978,
        "gradePct": 0.8937756984463896,
        "smoothedEle": 61.57290276253793,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916806,
        "lng": 120.4948116,
        "ele": 60.65,
        "distanceKm": 4.109739020227716,
        "gradePct": 0.9656891572564481,
        "smoothedEle": 62.081240890236344,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917219,
        "lng": 120.494968,
        "ele": 60.25,
        "distanceKm": 4.158376024832238,
        "gradePct": 1.0127092350327436,
        "smoothedEle": 62.57420923600068,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917611666666666,
        "lng": 120.49512633333333,
        "ele": 61.666666666666664,
        "distanceKm": 4.20495271463078,
        "gradePct": 0.9644672800347457,
        "smoothedEle": 62.91647623856112,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.918004333333332,
        "lng": 120.49528466666666,
        "ele": 63.083333333333336,
        "distanceKm": 4.251529388070832,
        "gradePct": 0.9192645176929118,
        "smoothedEle": 63.31036841056643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.918397,
        "lng": 120.495443,
        "ele": 64.5,
        "distanceKm": 4.298106045152171,
        "gradePct": 0.9030018330928683,
        "smoothedEle": 63.765660530785304,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9187385,
        "lng": 120.495578,
        "ele": 65.50000000000001,
        "distanceKm": 4.338517989306891,
        "gradePct": 0.9170665075852888,
        "smoothedEle": 64.20706787166003,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91908,
        "lng": 120.495713,
        "ele": 66.5,
        "distanceKm": 4.378929921540736,
        "gradePct": 0.9874223471721413,
        "smoothedEle": 64.70009344491292,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.919622,
        "lng": 120.495925,
        "ele": 65.75,
        "distanceKm": 4.442989465012741,
        "gradePct": 1.059000057048329,
        "smoothedEle": 65.35614763395394,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.920101235464315,
        "lng": 120.49611442686147,
        "ele": 66.07943336625233,
        "distanceKm": 4.4996997194262045,
        "gradePct": 1.0601259480683067,
        "smoothedEle": 65.90331964496687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.920579239997426,
        "lng": 120.49630782181335,
        "ele": 66.45326381446084,
        "distanceKm": 4.5564219813947675,
        "gradePct": 0.9937710447763868,
        "smoothedEle": 66.41303866468489,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.921058,
        "lng": 120.496499,
        "ele": 66.75,
        "distanceKm": 4.61314417587509,
        "gradePct": 0.8951526590482921,
        "smoothedEle": 66.84079783962449,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.92146,
        "lng": 120.496649,
        "ele": 65.5,
        "distanceKm": 4.660410733878261,
        "gradePct": 0.7818218566329441,
        "smoothedEle": 67.08788141872691,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.922013,
        "lng": 120.496908,
        "ele": 67,
        "distanceKm": 4.727378843556539,
        "gradePct": 0.6329239490359265,
        "smoothedEle": 67.41789838572245,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.922311999999998,
        "lng": 120.4971045,
        "ele": 68,
        "distanceKm": 4.766242434032268,
        "gradePct": 0.5011768876753417,
        "smoothedEle": 67.48945143504163,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.922611,
        "lng": 120.497301,
        "ele": 69,
        "distanceKm": 4.805106001510872,
        "gradePct": 0.39975716404209255,
        "smoothedEle": 67.57969387066356,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.923018824933397,
        "lng": 120.49756922961281,
        "ele": 69.25,
        "distanceKm": 4.858125618997899,
        "gradePct": 0.3221167716144319,
        "smoothedEle": 67.7201696376683,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.923422,
        "lng": 120.497846,
        "ele": 69,
        "distanceKm": 4.9111658890985845,
        "gradePct": 0.3117643198028685,
        "smoothedEle": 67.9615300403012,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9237455,
        "lng": 120.49804,
        "ele": 68,
        "distanceKm": 4.952259714452443,
        "gradePct": 0.37571307066636417,
        "smoothedEle": 68.21513352618588,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.924069,
        "lng": 120.498234,
        "ele": 67,
        "distanceKm": 4.993353516868704,
        "gradePct": 0.42382570413836584,
        "smoothedEle": 68.40005563705905,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.924496666666666,
        "lng": 120.49853733333333,
        "ele": 67.58333333333333,
        "distanceKm": 5.050155576623376,
        "gradePct": 0.4392286455734006,
        "smoothedEle": 68.5775102578792,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.924924333333333,
        "lng": 120.49884066666667,
        "ele": 68.16666666666667,
        "distanceKm": 5.106957582745782,
        "gradePct": 0.3846400377206788,
        "smoothedEle": 68.71166016583116,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925352,
        "lng": 120.499144,
        "ele": 68.75,
        "distanceKm": 5.163759535235094,
        "gradePct": 0.31876725880678664,
        "smoothedEle": 68.90441723732138,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9257664,
        "lng": 120.4994156,
        "ele": 69.25,
        "distanceKm": 5.217583097090331,
        "gradePct": 0.3713064418646323,
        "smoothedEle": 69.21836385629958,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9261808,
        "lng": 120.4996872,
        "ele": 69.75,
        "distanceKm": 5.271406614973439,
        "gradePct": 0.5454648508970474,
        "smoothedEle": 69.71862876519543,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926595199999998,
        "lng": 120.4999588,
        "ele": 70.25,
        "distanceKm": 5.325230088884933,
        "gradePct": 0.6969479167066049,
        "smoothedEle": 70.16756363485923,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.927009599999998,
        "lng": 120.50023039999999,
        "ele": 70.75,
        "distanceKm": 5.379053518823329,
        "gradePct": 0.7937574483929944,
        "smoothedEle": 70.58114017372297,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.927424,
        "lng": 120.500502,
        "ele": 71.25,
        "distanceKm": 5.432876904789142,
        "gradePct": 0.8355939954579049,
        "smoothedEle": 71.03170077422779,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.927963,
        "lng": 120.500867,
        "ele": 71.75,
        "distanceKm": 5.503512237097906,
        "gradePct": 0.8124092794085122,
        "smoothedEle": 71.61123630596528,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.928294,
        "lng": 120.5010785,
        "ele": 71.75,
        "distanceKm": 5.546218134024338,
        "gradePct": 0.7968068653356034,
        "smoothedEle": 71.92244845279124,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.928625,
        "lng": 120.50129,
        "ele": 71.75,
        "distanceKm": 5.5889240041048245,
        "gradePct": 0.7731711315263248,
        "smoothedEle": 72.21010919270898,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.928979186943,
        "lng": 120.5016148317033,
        "ele": 72.58470248157643,
        "distanceKm": 5.64047693498037,
        "gradePct": 0.743663164483116,
        "smoothedEle": 72.58138240604502,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.929327,
        "lng": 120.501948,
        "ele": 73.5,
        "distanceKm": 5.692051200718303,
        "gradePct": 0.7550085229030536,
        "smoothedEle": 73.02721998921166,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.929665,
        "lng": 120.502178,
        "ele": 73.25,
        "distanceKm": 5.736405980699224,
        "gradePct": 0.7897174889075906,
        "smoothedEle": 73.43037898927471,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93011264395148,
        "lng": 120.5023840384185,
        "ele": 73.43716732467627,
        "distanceKm": 5.790469333469339,
        "gradePct": 0.8343395813024649,
        "smoothedEle": 73.88991748782068,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930565,
        "lng": 120.502583,
        "ele": 73.75,
        "distanceKm": 5.8447392202322765,
        "gradePct": 0.8664917384006963,
        "smoothedEle": 74.35121152530564,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9309805,
        "lng": 120.5027155,
        "ele": 74.875,
        "distanceKm": 5.892892135654279,
        "gradePct": 0.8905256926623998,
        "smoothedEle": 74.81591498111172,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.931396,
        "lng": 120.502848,
        "ele": 76,
        "distanceKm": 5.941045039346097,
        "gradePct": 0.9435250379723207,
        "smoothedEle": 75.35686106371777,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.931749,
        "lng": 120.50299050000001,
        "ele": 76,
        "distanceKm": 5.982921836316906,
        "gradePct": 1.0205486918426478,
        "smoothedEle": 75.8668611457103,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932102,
        "lng": 120.503133,
        "ele": 76,
        "distanceKm": 6.024798620032135,
        "gradePct": 1.0707682704459875,
        "smoothedEle": 76.32325296449642,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932541,
        "lng": 120.503386,
        "ele": 76,
        "distanceKm": 6.080062912714713,
        "gradePct": 1.0864168815258841,
        "smoothedEle": 76.86493933027702,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932884,
        "lng": 120.503594,
        "ele": 77.25,
        "distanceKm": 6.123747772957493,
        "gradePct": 1.0345599566885104,
        "smoothedEle": 77.23166479311982,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.933233,
        "lng": 120.503795,
        "ele": 78.75,
        "distanceKm": 6.167675862300323,
        "gradePct": 0.9164988994727629,
        "smoothedEle": 77.5141845721881,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.933583,
        "lng": 120.504023,
        "ele": 79.5,
        "distanceKm": 6.213060754141144,
        "gradePct": 0.7489747245808965,
        "smoothedEle": 77.69327792931658,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.933903,
        "lng": 120.50413,
        "ele": 78.75,
        "distanceKm": 6.250292112544335,
        "gradePct": 0.6277457206375269,
        "smoothedEle": 77.82862505455324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.934333574686928,
        "lng": 120.50432411892267,
        "ele": 78.41220605104967,
        "distanceKm": 6.302132743111336,
        "gradePct": 0.4741613333118831,
        "smoothedEle": 77.9985337071016,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93476414937386,
        "lng": 120.50451823784532,
        "ele": 78.07441210209933,
        "distanceKm": 6.35397334943979,
        "gradePct": 0.35627741518676687,
        "smoothedEle": 78.13861285383274,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935195445721867,
        "lng": 120.50471044726658,
        "ele": 78.11441780151875,
        "distanceKm": 6.4058134911228235,
        "gradePct": 0.19668203979129098,
        "smoothedEle": 78.05804357864407,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935626630481245,
        "lng": 120.50490296484438,
        "ele": 77.90961186767917,
        "distanceKm": 6.457654122873169,
        "gradePct": 0.010069144734302418,
        "smoothedEle": 77.87289247287961,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.936057815240623,
        "lng": 120.50509548242219,
        "ele": 77.70480593383958,
        "distanceKm": 6.5094947307491395,
        "gradePct": -0.13801254894205772,
        "smoothedEle": 77.742401527522,
        "gradeBand": "descent"
      },
      {
        "lat": 22.936489,
        "lng": 120.505288,
        "ele": 77.5,
        "distanceKm": 6.561335314749268,
        "gradePct": -0.1899556677631507,
        "smoothedEle": 77.74725964739923,
        "gradeBand": "descent"
      },
      {
        "lat": 22.937088,
        "lng": 120.505544,
        "ele": 76.75,
        "distanceKm": 6.632914509803652,
        "gradePct": -0.06376663265225341,
        "smoothedEle": 77.83371782824287,
        "gradeBand": "descent"
      },
      {
        "lat": 22.937429,
        "lng": 120.50571099999999,
        "ele": 77.125,
        "distanceKm": 6.674510107172379,
        "gradePct": 0.03592121422908431,
        "smoothedEle": 77.90230574365121,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93777,
        "lng": 120.505878,
        "ele": 77.5,
        "distanceKm": 6.716105686833135,
        "gradePct": 0.13909046942320902,
        "smoothedEle": 78.02120199675718,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.938205312339914,
        "lng": 120.50606758049297,
        "ele": 78.51497486623776,
        "distanceKm": 6.768258247269617,
        "gradePct": 0.262311831224302,
        "smoothedEle": 78.28024529479832,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93864054155994,
        "lng": 120.50625738699532,
        "ele": 78.67664991082518,
        "distanceKm": 6.820410827284544,
        "gradePct": 0.4210613304179486,
        "smoothedEle": 78.6607376977771,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.939075770779972,
        "lng": 120.50644719349765,
        "ele": 78.83832495541259,
        "distanceKm": 6.872563384012114,
        "gradePct": 0.6436392016699765,
        "smoothedEle": 79.18637415141745,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.939511,
        "lng": 120.506637,
        "ele": 79,
        "distanceKm": 6.924715917452326,
        "gradePct": 0.8546965554524129,
        "smoothedEle": 79.77336237580423,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93990075,
        "lng": 120.50681925,
        "ele": 79.87500000000001,
        "distanceKm": 6.971901726562637,
        "gradePct": 0.9802262189143667,
        "smoothedEle": 80.26727966186253,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9402905,
        "lng": 120.5070015,
        "ele": 80.75,
        "distanceKm": 7.019087514421301,
        "gradePct": 1.0218405599995029,
        "smoothedEle": 80.69476425243947,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94068025,
        "lng": 120.50718375,
        "ele": 81.62499999999999,
        "distanceKm": 7.066273281028605,
        "gradePct": 0.9773190041263353,
        "smoothedEle": 81.07761531716142,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94107,
        "lng": 120.507366,
        "ele": 82.5,
        "distanceKm": 7.113459026384833,
        "gradePct": 0.9018897653652963,
        "smoothedEle": 81.45044312386881,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.941492,
        "lng": 120.50755683333334,
        "ele": 82.54166666666667,
        "distanceKm": 7.164289691378034,
        "gradePct": 0.8264920139119305,
        "smoothedEle": 81.84058473894572,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.941914,
        "lng": 120.50774766666667,
        "ele": 82.58333333333333,
        "distanceKm": 7.215120332951092,
        "gradePct": 0.7395268258942231,
        "smoothedEle": 82.13787680790425,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.942335999999997,
        "lng": 120.5079385,
        "ele": 82.625,
        "distanceKm": 7.265950951102737,
        "gradePct": 0.6154570908280655,
        "smoothedEle": 82.30591421111147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.942757999999998,
        "lng": 120.50812933333333,
        "ele": 82.66666666666667,
        "distanceKm": 7.316781545834472,
        "gradePct": 0.4953352448100002,
        "smoothedEle": 82.46661501317303,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943179999999998,
        "lng": 120.50832016666666,
        "ele": 82.70833333333333,
        "distanceKm": 7.367612117145026,
        "gradePct": 0.3799813406687914,
        "smoothedEle": 82.61997921967955,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943602,
        "lng": 120.508511,
        "ele": 82.75,
        "distanceKm": 7.418442665034057,
        "gradePct": 0.33480839771104315,
        "smoothedEle": 82.81847666975587,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.944016,
        "lng": 120.508695,
        "ele": 81.5,
        "distanceKm": 7.468183921917663,
        "gradePct": 0.3902943758420673,
        "smoothedEle": 83.09356249461561,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94444166666667,
        "lng": 120.50889016666667,
        "ele": 82.375,
        "distanceKm": 7.519562011392719,
        "gradePct": 0.4936383319883997,
        "smoothedEle": 83.46228079974013,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.944867333333335,
        "lng": 120.50908533333333,
        "ele": 83.25,
        "distanceKm": 7.5709400764189905,
        "gradePct": 0.6152756808204524,
        "smoothedEle": 83.8635265346846,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.945293,
        "lng": 120.5092805,
        "ele": 84.12499999999999,
        "distanceKm": 7.622318116997609,
        "gradePct": 0.6830850774442391,
        "smoothedEle": 84.20607937313407,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.945718666666668,
        "lng": 120.50947566666667,
        "ele": 85,
        "distanceKm": 7.673696133128009,
        "gradePct": 0.6926529805428027,
        "smoothedEle": 84.51842720916467,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.946144333333333,
        "lng": 120.50967083333333,
        "ele": 85.875,
        "distanceKm": 7.725074124808533,
        "gradePct": 0.7191955753348147,
        "smoothedEle": 84.94371973738839,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94657,
        "lng": 120.509866,
        "ele": 86.75,
        "distanceKm": 7.776452092040676,
        "gradePct": 0.7617811381519737,
        "smoothedEle": 85.42383907580056,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.946981443918613,
        "lng": 120.51004868273095,
        "ele": 86.24028255870502,
        "distanceKm": 7.825879059278905,
        "gradePct": 0.787764336062309,
        "smoothedEle": 85.8032564602728,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94739288783723,
        "lng": 120.51023136546192,
        "ele": 85.73056511741004,
        "distanceKm": 7.875306004994358,
        "gradePct": 0.7602187595622063,
        "smoothedEle": 86.05219079366769,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94780428455076,
        "lng": 120.51041417423725,
        "ele": 85.82244926158181,
        "distanceKm": 7.924732957067298,
        "gradePct": 0.6516220881662343,
        "smoothedEle": 86.24413982335703,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94821564227538,
        "lng": 120.51059708711863,
        "ele": 86.4112246307909,
        "distanceKm": 7.974159913555562,
        "gradePct": 0.48834223786196373,
        "smoothedEle": 86.37910349002568,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948627,
        "lng": 120.51078,
        "ele": 87,
        "distanceKm": 8.023586848469483,
        "gradePct": 0.3357105043827954,
        "smoothedEle": 86.45708171759813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.949233,
        "lng": 120.511037,
        "ele": 86.25,
        "distanceKm": 8.095927222650282,
        "gradePct": 0.2325006989931351,
        "smoothedEle": 86.59727446567778,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.949639718906287,
        "lng": 120.51122078754489,
        "ele": 86.5116565274625,
        "distanceKm": 8.144911484040524,
        "gradePct": 0.24390677420798546,
        "smoothedEle": 86.78705221219879,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.950046437812574,
        "lng": 120.51140457508978,
        "ele": 86.773313054925,
        "distanceKm": 8.193895723700106,
        "gradePct": 0.29445865963423024,
        "smoothedEle": 86.99915693977559,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95045315671886,
        "lng": 120.51158836263467,
        "ele": 87.0349695823875,
        "distanceKm": 8.2428799416276,
        "gradePct": 0.3451704538245307,
        "smoothedEle": 87.18481186713905,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.950859875625152,
        "lng": 120.51177215017957,
        "ele": 87.29662610985001,
        "distanceKm": 8.29186413782418,
        "gradePct": 0.37477021522523435,
        "smoothedEle": 87.33894080045343,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95126659453144,
        "lng": 120.51195593772445,
        "ele": 87.55828263731252,
        "distanceKm": 8.340848312287692,
        "gradePct": 0.4101918978760268,
        "smoothedEle": 87.59169422564985,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.951673313437727,
        "lng": 120.51213972526934,
        "ele": 87.81993916477501,
        "distanceKm": 8.389832465018749,
        "gradePct": 0.4751282408483436,
        "smoothedEle": 87.9318192650319,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.952080032344014,
        "lng": 120.51232351281423,
        "ele": 88.08159569223751,
        "distanceKm": 8.438816596017602,
        "gradePct": 0.5704185777639543,
        "smoothedEle": 88.31024854949429,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9524867512503,
        "lng": 120.51250730035912,
        "ele": 88.3432522197,
        "distanceKm": 8.487800705282826,
        "gradePct": 0.7004134241818062,
        "smoothedEle": 88.72698204505454,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95289347015659,
        "lng": 120.512691087904,
        "ele": 88.60490874716251,
        "distanceKm": 8.53678479281467,
        "gradePct": 0.8056464224213642,
        "smoothedEle": 89.18201971774228,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95330009489783,
        "lng": 120.51287512195043,
        "ele": 89.43148674483174,
        "distanceKm": 8.585768895335468,
        "gradePct": 0.8858791692271057,
        "smoothedEle": 89.6753619108284,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95370679562671,
        "lng": 120.5130589616718,
        "ele": 90.08413149557006,
        "distanceKm": 8.634753125987274,
        "gradePct": 0.9640769564741268,
        "smoothedEle": 90.20700992725502,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.954113496355596,
        "lng": 120.51324280139316,
        "ele": 90.73677624630838,
        "distanceKm": 8.683737334893292,
        "gradePct": 1.0422747437370639,
        "smoothedEle": 90.77696231055879,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.954520197084477,
        "lng": 120.51342664111453,
        "ele": 91.3894209970467,
        "distanceKm": 8.732721522053602,
        "gradePct": 1.0657371688373767,
        "smoothedEle": 91.27574830238214,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95492689781336,
        "lng": 120.5136104808359,
        "ele": 92.04206574778502,
        "distanceKm": 8.781705687467142,
        "gradePct": 0.9973639680238017,
        "smoothedEle": 91.62916734799234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95533359854224,
        "lng": 120.51379432055727,
        "ele": 92.69471049852336,
        "distanceKm": 8.830689831134722,
        "gradePct": 0.8261884026200363,
        "smoothedEle": 91.81528595516797,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.95574029927112,
        "lng": 120.51397816027863,
        "ele": 93.34735524926168,
        "distanceKm": 8.879673953054915,
        "gradePct": 0.6796365721887435,
        "smoothedEle": 92.08895625588869,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.956147,
        "lng": 120.514162,
        "ele": 94,
        "distanceKm": 8.928658053228531,
        "gradePct": 0.6123315600131627,
        "smoothedEle": 92.45903477729802,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.956498,
        "lng": 120.51433133333333,
        "ele": 92.91666666666666,
        "distanceKm": 8.971365192963603,
        "gradePct": 0.6482110863945771,
        "smoothedEle": 92.85098321346308,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.956849000000002,
        "lng": 120.51450066666666,
        "ele": 91.83333333333334,
        "distanceKm": 9.014072314434593,
        "gradePct": 0.7470864563860244,
        "smoothedEle": 93.24631947565146,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9572,
        "lng": 120.51467,
        "ele": 90.75,
        "distanceKm": 9.056779417640556,
        "gradePct": 0.8326424044201021,
        "smoothedEle": 93.62633115951681,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9576575,
        "lng": 120.5148795,
        "ele": 92.625,
        "distanceKm": 9.111988551119582,
        "gradePct": 0.82223287356059,
        "smoothedEle": 93.97756119571366,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.958115,
        "lng": 120.515089,
        "ele": 94.5,
        "distanceKm": 9.167197656409012,
        "gradePct": 0.6789512274033906,
        "smoothedEle": 94.17063774426077,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.958525,
        "lng": 120.515287,
        "ele": 96,
        "distanceKm": 9.217091818690568,
        "gradePct": 0.5410957214209111,
        "smoothedEle": 94.35537874165652,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.959133,
        "lng": 120.515556,
        "ele": 96.5,
        "distanceKm": 9.29009331246184,
        "gradePct": 0.5339023775157249,
        "smoothedEle": 94.9060725950684,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.959510620968263,
        "lng": 120.51572076469132,
        "ele": 95.94721216889917,
        "distanceKm": 9.335344961245452,
        "gradePct": 0.6598707584842126,
        "smoothedEle": 95.37898443945365,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.959886,
        "lng": 120.515892,
        "ele": 95.25,
        "distanceKm": 9.380617780070876,
        "gradePct": 0.7420471227589996,
        "smoothedEle": 95.70442211217178,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.960215,
        "lng": 120.516071,
        "ele": 95.25,
        "distanceKm": 9.421534900537761,
        "gradePct": 0.7564262485481194,
        "smoothedEle": 95.90174805788966,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.960491,
        "lng": 120.516394,
        "ele": 95.75,
        "distanceKm": 9.466651734369146,
        "gradePct": 0.632354842067381,
        "smoothedEle": 95.99394845974231,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.960716,
        "lng": 120.516815,
        "ele": 96,
        "distanceKm": 9.516490714009997,
        "gradePct": 0.40905655214356934,
        "smoothedEle": 96.00005727947878,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96076771734037,
        "lng": 120.51723408996214,
        "ele": 96,
        "distanceKm": 9.55978303565232,
        "gradePct": 0.2025157741907158,
        "smoothedEle": 95.95968585481093,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96079505192287,
        "lng": 120.51765753021651,
        "ele": 96.17918955796202,
        "distanceKm": 9.603243519518934,
        "gradePct": 0.07374583472540079,
        "smoothedEle": 95.9610281421448,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.960822,
        "lng": 120.518081,
        "ele": 96.5,
        "distanceKm": 9.646704026312896,
        "gradePct": 0.00515570067391737,
        "smoothedEle": 95.96349488397098,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.960843666666666,
        "lng": 120.51858266666666,
        "ele": 96.33333333333333,
        "distanceKm": 9.698123784336508,
        "gradePct": -0.019170803591329458,
        "smoothedEle": 95.95946441708793,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960865333333334,
        "lng": 120.51908433333334,
        "ele": 96.16666666666667,
        "distanceKm": 9.749543534141603,
        "gradePct": -0.03258799667737134,
        "smoothedEle": 95.90405851230683,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960887,
        "lng": 120.519586,
        "ele": 96,
        "distanceKm": 9.80096327572523,
        "gradePct": -0.05824646858111058,
        "smoothedEle": 95.84446477911314,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960884,
        "lng": 120.51998,
        "ele": 96,
        "distanceKm": 9.841304442567715,
        "gradePct": -0.07934966541941463,
        "smoothedEle": 95.80448908226812,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960869,
        "lng": 120.520331,
        "ele": 95.25,
        "distanceKm": 9.87728035215494,
        "gradePct": -0.09448501870421955,
        "smoothedEle": 95.77212816339154,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960814,
        "lng": 120.520968,
        "ele": 95.25,
        "distanceKm": 9.942785889429558,
        "gradePct": -0.11533975170084473,
        "smoothedEle": 95.6806605188479,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960795,
        "lng": 120.521377,
        "ele": 95.25,
        "distanceKm": 9.984714742063447,
        "gradePct": -0.10725959317595406,
        "smoothedEle": 95.64877709113145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960792,
        "lng": 120.521986,
        "ele": 95.5,
        "distanceKm": 10.047068292659969,
        "gradePct": -0.08202010068178851,
        "smoothedEle": 95.63526420350813,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960822,
        "lng": 120.522698,
        "ele": 95.75,
        "distanceKm": 10.120042916284987,
        "gradePct": -0.019884064321836165,
        "smoothedEle": 95.67264918924752,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960874,
        "lng": 120.523228,
        "ele": 95.75,
        "distanceKm": 10.174614302507957,
        "gradePct": 0.07555082583778754,
        "smoothedEle": 95.80755929245821,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.960969,
        "lng": 120.52387,
        "ele": 96,
        "distanceKm": 10.241189023959125,
        "gradePct": 0.23452398807606384,
        "smoothedEle": 96.10558629952195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961077,
        "lng": 120.524479,
        "ele": 96,
        "distanceKm": 10.3046875162842,
        "gradePct": 0.4122318246450064,
        "smoothedEle": 96.48924624900907,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961129949472046,
        "lng": 120.52492057861592,
        "ele": 96.24976166058222,
        "distanceKm": 10.350280338993546,
        "gradePct": 0.5299987577410851,
        "smoothedEle": 96.80739895312905,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961184,
        "lng": 120.525362,
        "ele": 96.5,
        "distanceKm": 10.395873158308653,
        "gradePct": 0.6221334941466403,
        "smoothedEle": 97.1469932304552,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961224,
        "lng": 120.526002,
        "ele": 97.5,
        "distanceKm": 10.461550343093688,
        "gradePct": 0.7254546742766291,
        "smoothedEle": 97.67951939847649,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961246603394024,
        "lng": 120.52649023331091,
        "ele": 98.21919890073461,
        "distanceKm": 10.511601248953838,
        "gradePct": 0.7784694661518784,
        "smoothedEle": 98.09443011579364,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961269206788046,
        "lng": 120.5269784666218,
        "ele": 98.93839780146921,
        "distanceKm": 10.56165214646802,
        "gradePct": 0.8232506269027582,
        "smoothedEle": 98.53860215779433,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96129246883687,
        "lng": 120.52746666315737,
        "ele": 99.41560045332996,
        "distanceKm": 10.611703006577606,
        "gradePct": 0.8830608798003357,
        "smoothedEle": 99.04146714867252,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961316234418437,
        "lng": 120.52795483157868,
        "ele": 99.70780022666497,
        "distanceKm": 10.661753908357237,
        "gradePct": 0.948605068340189,
        "smoothedEle": 99.5784170452642,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96134,
        "lng": 120.528443,
        "ele": 100,
        "distanceKm": 10.711804801365597,
        "gradePct": 0.99018752562937,
        "smoothedEle": 100.0766115740276,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9613485,
        "lng": 120.52884900000001,
        "ele": 100.25,
        "distanceKm": 10.753383814798196,
        "gradePct": 0.9990514867873052,
        "smoothedEle": 100.46332858980574,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961357,
        "lng": 120.529255,
        "ele": 100.5,
        "distanceKm": 10.794962825617283,
        "gradePct": 0.9730506292569848,
        "smoothedEle": 100.81937847143952,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961487,
        "lng": 120.529676,
        "ele": 101.25,
        "distanceKm": 10.840426149703992,
        "gradePct": 0.9206400837273454,
        "smoothedEle": 101.19089138912327,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.961642,
        "lng": 120.52998,
        "ele": 101.75,
        "distanceKm": 10.876004464500927,
        "gradePct": 0.8832177106353956,
        "smoothedEle": 101.48669906858134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.962036430755578,
        "lng": 120.53032829147635,
        "ele": 102.13223623190126,
        "distanceKm": 10.932530582054612,
        "gradePct": 0.8751765907968578,
        "smoothedEle": 102.01973056211936,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96245321537779,
        "lng": 120.53064664573817,
        "ele": 102.44111811595063,
        "distanceKm": 10.989189223828678,
        "gradePct": 0.9058941031595925,
        "smoothedEle": 102.5817261020226,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96287,
        "lng": 120.530965,
        "ele": 102.75,
        "distanceKm": 11.045847807810535,
        "gradePct": 0.9270815199671067,
        "smoothedEle": 103.09013155293097,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96324333333333,
        "lng": 120.53125666666666,
        "ele": 103.50000000000001,
        "distanceKm": 11.096985339962206,
        "gradePct": 0.9054212501894799,
        "smoothedEle": 103.4953875889393,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.963616666666667,
        "lng": 120.53154833333333,
        "ele": 104.24999999999999,
        "distanceKm": 11.148122823969926,
        "gradePct": 0.8405204145023392,
        "smoothedEle": 103.85543041822253,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96399,
        "lng": 120.53184,
        "ele": 105,
        "distanceKm": 11.199260259832402,
        "gradePct": 0.7953247827498402,
        "smoothedEle": 104.26274449146301,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.964338641892827,
        "lng": 120.53209906986503,
        "ele": 104.8851640669216,
        "distanceKm": 11.246233003153295,
        "gradePct": 0.7790199027909736,
        "smoothedEle": 104.6512239645173,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.964687283785654,
        "lng": 120.53235813973005,
        "ele": 104.77032813384321,
        "distanceKm": 11.293205707855499,
        "gradePct": 0.7849298638819305,
        "smoothedEle": 105.03529439053162,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96503657234548,
        "lng": 120.53261618053749,
        "ele": 104.97572397604344,
        "distanceKm": 11.340178400100463,
        "gradePct": 0.7917184716777144,
        "smoothedEle": 105.3829331891702,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.965386,
        "lng": 120.532874,
        "ele": 105.25,
        "distanceKm": 11.387151104919523,
        "gradePct": 0.7385714398958383,
        "smoothedEle": 105.64343691127604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.965629,
        "lng": 120.533108,
        "ele": 106,
        "distanceKm": 11.423262818740346,
        "gradePct": 0.6723431816808182,
        "smoothedEle": 105.80593962346974,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96568,
        "lng": 120.533261,
        "ele": 106.5,
        "distanceKm": 11.439922134191281,
        "gradePct": 0.6361424722436078,
        "smoothedEle": 105.87131602275707,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.966084,
        "lng": 120.533342,
        "ele": 106.5,
        "distanceKm": 11.485603982259214,
        "gradePct": 0.5867649523385005,
        "smoothedEle": 106.14666909237926,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.966403391416666,
        "lng": 120.53353618208996,
        "ele": 106.75,
        "distanceKm": 11.526304544503313,
        "gradePct": 0.6217898873497512,
        "smoothedEle": 106.52383435930675,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.966725,
        "lng": 120.533726,
        "ele": 106.75,
        "distanceKm": 11.567005160933416,
        "gradePct": 0.6884981968822952,
        "smoothedEle": 106.90870685850253,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.96716,
        "lng": 120.533772,
        "ele": 106.5,
        "distanceKm": 11.615603749754177,
        "gradePct": 0.8287890045933922,
        "smoothedEle": 107.42905182221877,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.967544,
        "lng": 120.533607,
        "ele": 106.5,
        "distanceKm": 11.661522833547997,
        "gradePct": 1.0035026093994084,
        "smoothedEle": 108.00852216654938,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.967936,
        "lng": 120.533498,
        "ele": 107.75,
        "distanceKm": 11.706517140279917,
        "gradePct": 1.1241571120961749,
        "smoothedEle": 108.58878203561311,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.968346,
        "lng": 120.533564,
        "ele": 109.5,
        "distanceKm": 11.752605147950394,
        "gradePct": 1.1823162413147343,
        "smoothedEle": 109.13717017537144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.968748,
        "lng": 120.533698,
        "ele": 109.5,
        "distanceKm": 11.799363403695407,
        "gradePct": 1.1943420520281236,
        "smoothedEle": 109.6438505833928,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.969139,
        "lng": 120.533955,
        "ele": 110.5,
        "distanceKm": 11.850182351587302,
        "gradePct": 1.1678182088924598,
        "smoothedEle": 110.20104873884729,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.969323,
        "lng": 120.534259,
        "ele": 111.75,
        "distanceKm": 11.887428297850608,
        "gradePct": 1.1526967042066159,
        "smoothedEle": 110.64800009400697,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.969525,
        "lng": 120.5347,
        "ele": 112.75,
        "distanceKm": 11.937855977248471,
        "gradePct": 1.1615875490619743,
        "smoothedEle": 111.28484907192305,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.969808,
        "lng": 120.535355,
        "ele": 112.25,
        "distanceKm": 12.011930406407044,
        "gradePct": 1.0890631172732808,
        "smoothedEle": 111.95976618629487,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.969927,
        "lng": 120.535698,
        "ele": 112,
        "distanceKm": 12.049456549426875,
        "gradePct": 1.0428238161867436,
        "smoothedEle": 112.27873840196342,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.97005,
        "lng": 120.5363,
        "ele": 112.5,
        "distanceKm": 12.11258764481202,
        "gradePct": 0.9440002241466023,
        "smoothedEle": 112.85373684483744,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.970158,
        "lng": 120.536953,
        "ele": 113,
        "distanceKm": 12.180510707728896,
        "gradePct": 0.9323432029494148,
        "smoothedEle": 113.53817711755059,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.970272,
        "lng": 120.537444,
        "ele": 113,
        "distanceKm": 12.232352076239334,
        "gradePct": 0.9215199980775101,
        "smoothedEle": 113.97639037602434,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.970387,
        "lng": 120.537868,
        "ele": 113.75,
        "distanceKm": 12.277604701603554,
        "gradePct": 0.9069774041698043,
        "smoothedEle": 114.34906677031542,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.970584,
        "lng": 120.538404,
        "ele": 114.75,
        "distanceKm": 12.336689972399446,
        "gradePct": 0.9807957418880981,
        "smoothedEle": 115.05820023336193,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.970822,
        "lng": 120.538821,
        "ele": 116.75,
        "distanceKm": 12.386918791814304,
        "gradePct": 1.0923796906493346,
        "smoothedEle": 115.77710380747413,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.971042,
        "lng": 120.539084,
        "ele": 117.25,
        "distanceKm": 12.423297455372003,
        "gradePct": 1.223814914994908,
        "smoothedEle": 116.3474818153712,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.971362,
        "lng": 120.539376,
        "ele": 116.75,
        "distanceKm": 12.469770812043153,
        "gradePct": 1.4282017188495695,
        "smoothedEle": 117.14095448785143,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.971682,
        "lng": 120.539668,
        "ele": 116.25,
        "distanceKm": 12.516244123190148,
        "gradePct": 1.5880424849883623,
        "smoothedEle": 117.98889687458237,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.972088,
        "lng": 120.539979,
        "ele": 118.75,
        "distanceKm": 12.571487451721497,
        "gradePct": 1.6761649050978762,
        "smoothedEle": 118.90857145775261,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9724725,
        "lng": 120.54023099999999,
        "ele": 119.87499999999999,
        "distanceKm": 12.621422726194686,
        "gradePct": 1.6549047662989467,
        "smoothedEle": 119.6278976267894,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.972857,
        "lng": 120.540483,
        "ele": 121,
        "distanceKm": 12.671357962751493,
        "gradePct": 1.506415308904577,
        "smoothedEle": 120.18274392797206,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.973185598234632,
        "lng": 120.54069994055105,
        "ele": 121.92291360179459,
        "distanceKm": 12.714116882337517,
        "gradePct": 1.3579627765449565,
        "smoothedEle": 120.66600923271774,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.973518,
        "lng": 120.54091,
        "ele": 122.5,
        "distanceKm": 12.756879171649341,
        "gradePct": 1.2815458645241595,
        "smoothedEle": 121.22846886373313,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.973955,
        "lng": 120.541174,
        "ele": 122.25,
        "distanceKm": 12.81248198504029,
        "gradePct": 1.2566645911266408,
        "smoothedEle": 122.01243390361078,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.974293499999998,
        "lng": 120.5414605,
        "ele": 122.375,
        "distanceKm": 12.860200041027449,
        "gradePct": 1.2372142984029297,
        "smoothedEle": 122.53319330640716,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.974632,
        "lng": 120.541747,
        "ele": 122.5,
        "distanceKm": 12.90791805186039,
        "gradePct": 1.1644195440775646,
        "smoothedEle": 122.92478855957397,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.974963,
        "lng": 120.542009,
        "ele": 122.75,
        "distanceKm": 12.953460110964642,
        "gradePct": 1.0120359873418643,
        "smoothedEle": 123.20756935438072,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.975426,
        "lng": 120.542302,
        "ele": 123.5,
        "distanceKm": 13.013044292013015,
        "gradePct": 0.7496751983465471,
        "smoothedEle": 123.51792090074258,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.975749,
        "lng": 120.542519,
        "ele": 124.75,
        "distanceKm": 13.055275491162543,
        "gradePct": 0.6435183660631006,
        "smoothedEle": 123.76648716083987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.976278,
        "lng": 120.542852,
        "ele": 124.25,
        "distanceKm": 13.123262337105372,
        "gradePct": 0.6060396007644493,
        "smoothedEle": 124.23214384792593,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.976641,
        "lng": 120.543146,
        "ele": 124.25,
        "distanceKm": 13.173612260324651,
        "gradePct": 0.6412669904374959,
        "smoothedEle": 124.59506828746872,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.97687152895144,
        "lng": 120.54342498651391,
        "ele": 124.55722665007488,
        "distanceKm": 13.211989366329707,
        "gradePct": 0.7069870437441165,
        "smoothedEle": 124.92640027786724,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9771,
        "lng": 120.543706,
        "ele": 125,
        "distanceKm": 13.250369264479147,
        "gradePct": 0.7708618109488611,
        "smoothedEle": 125.27933349669219,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9773325,
        "lng": 120.5439715,
        "ele": 125.37500000000001,
        "distanceKm": 13.287880896670496,
        "gradePct": 0.8245433480784387,
        "smoothedEle": 125.63889536720032,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.977565,
        "lng": 120.544237,
        "ele": 125.75,
        "distanceKm": 13.325392494976903,
        "gradePct": 0.87015431663519,
        "smoothedEle": 125.98780675191279,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.977855,
        "lng": 120.544583,
        "ele": 125.75,
        "distanceKm": 13.373293233214778,
        "gradePct": 0.9564076692443527,
        "smoothedEle": 126.50558406465431,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.978038,
        "lng": 120.544858,
        "ele": 126.25,
        "distanceKm": 13.40802976486885,
        "gradePct": 1.0179637993978796,
        "smoothedEle": 126.92814232257152,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.978197,
        "lng": 120.54534933333333,
        "ele": 127.33333333333331,
        "distanceKm": 13.461345425188199,
        "gradePct": 1.14204903796475,
        "smoothedEle": 127.66864184061036,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.978356,
        "lng": 120.54584066666668,
        "ele": 128.41666666666669,
        "distanceKm": 13.514661029671135,
        "gradePct": 1.292906495803206,
        "smoothedEle": 128.47380180483142,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.978515,
        "lng": 120.546332,
        "ele": 129.5,
        "distanceKm": 13.567976578314553,
        "gradePct": 1.4364681617472266,
        "smoothedEle": 129.3210506415795,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.97872,
        "lng": 120.546802,
        "ele": 130,
        "distanceKm": 13.621217927313205,
        "gradePct": 1.5488186699057904,
        "smoothedEle": 130.20894963299526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.978932176103797,
        "lng": 120.54725129504727,
        "ele": 131.05278219441524,
        "distanceKm": 13.672911003656926,
        "gradePct": 1.6330494968812688,
        "smoothedEle": 131.10940153336313,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.979144352207594,
        "lng": 120.54770059009455,
        "ele": 132.10556438883054,
        "distanceKm": 13.724604015736082,
        "gradePct": 1.67102704685002,
        "smoothedEle": 131.97386202604355,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.979356528311392,
        "lng": 120.54814988514183,
        "ele": 133.1583465832458,
        "distanceKm": 13.77629696355013,
        "gradePct": 1.6699829511444961,
        "smoothedEle": 132.79977451671863,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.979568614102984,
        "lng": 120.54859923339045,
        "ele": 133.86758884524497,
        "distanceKm": 13.827990110970635,
        "gradePct": 1.6301137906814405,
        "smoothedEle": 133.5871432182273,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.97978069128239,
        "lng": 120.54904858671236,
        "ele": 134.54407107619596,
        "distanceKm": 13.879683219430701,
        "gradePct": 1.5857358915920143,
        "smoothedEle": 134.39412485188757,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.97999276846179,
        "lng": 120.54949794003427,
        "ele": 135.220553307147,
        "distanceKm": 13.931376263637517,
        "gradePct": 1.5537919507700677,
        "smoothedEle": 135.18964800094705,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.980204845641193,
        "lng": 120.54994729335618,
        "ele": 135.89703553809798,
        "distanceKm": 13.983069243590727,
        "gradePct": 1.4552718024122324,
        "smoothedEle": 135.81347069800435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9804169228206,
        "lng": 120.5503966466781,
        "ele": 136.573517769049,
        "distanceKm": 14.034762159289969,
        "gradePct": 1.3135730206797025,
        "smoothedEle": 136.32000777369356,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.980629,
        "lng": 120.550846,
        "ele": 137.25,
        "distanceKm": 14.086455010734342,
        "gradePct": 1.1205747078034745,
        "smoothedEle": 136.73948783868784,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.980828,
        "lng": 120.551325,
        "ele": 138.5,
        "distanceKm": 14.140251892810218,
        "gradePct": 0.9538398734440142,
        "smoothedEle": 137.2044374353324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.98089,
        "lng": 120.551692,
        "ele": 138.25,
        "distanceKm": 14.178449025865305,
        "gradePct": 0.8780606180291559,
        "smoothedEle": 137.5138358781132,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.980877,
        "lng": 120.552044,
        "ele": 137.75,
        "distanceKm": 14.214512284155331,
        "gradePct": 0.8364185483650347,
        "smoothedEle": 137.7944170511563,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.980871,
        "lng": 120.552183,
        "ele": 137.25,
        "distanceKm": 14.228757361343085,
        "gradePct": 0.8250720868791349,
        "smoothedEle": 137.9113111420731,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.980802,
        "lng": 120.552293,
        "ele": 137.5,
        "distanceKm": 14.242383452292119,
        "gradePct": 0.8206362020628746,
        "smoothedEle": 138.02312587591013,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.980723,
        "lng": 120.552362,
        "ele": 138,
        "distanceKm": 14.25365552072717,
        "gradePct": 0.8211494900741372,
        "smoothedEle": 138.11562366831242,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.980915530690357,
        "lng": 120.55267452301216,
        "ele": 137.39211922454626,
        "distanceKm": 14.292150666080172,
        "gradePct": 0.8550855046440264,
        "smoothedEle": 138.4988846126203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.981106,
        "lng": 120.552989,
        "ele": 138,
        "distanceKm": 14.330685722614165,
        "gradePct": 0.9322135046928995,
        "smoothedEle": 138.98618703289694,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.981332,
        "lng": 120.553406,
        "ele": 139,
        "distanceKm": 14.380221628696685,
        "gradePct": 1.0971679177216098,
        "smoothedEle": 139.72196300711533,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.981556,
        "lng": 120.553776,
        "ele": 139,
        "distanceKm": 14.425554220830726,
        "gradePct": 1.2690205838527122,
        "smoothedEle": 140.42306756640113,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.981849,
        "lng": 120.554269,
        "ele": 140,
        "distanceKm": 14.485625023226158,
        "gradePct": 1.554463920653282,
        "smoothedEle": 141.54284259813048,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.982045110593393,
        "lng": 120.55460826553703,
        "ele": 141.55933380584375,
        "distanceKm": 14.52663384871248,
        "gradePct": 1.7219649313054708,
        "smoothedEle": 142.37887814989438,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.982242,
        "lng": 120.554947,
        "ele": 143.5,
        "distanceKm": 14.567642766581134,
        "gradePct": 1.894119755282979,
        "smoothedEle": 143.3233638130009,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.982555,
        "lng": 120.555358,
        "ele": 145.75,
        "distanceKm": 14.622246006146499,
        "gradePct": 2.059573512451202,
        "smoothedEle": 144.49105042245677,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.982791,
        "lng": 120.555588,
        "ele": 146.25,
        "distanceKm": 14.657502250323535,
        "gradePct": 2.088783536188309,
        "smoothedEle": 145.19617530599749,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.983086,
        "lng": 120.555851,
        "ele": 147,
        "distanceKm": 14.69993868755113,
        "gradePct": 2.121930814760653,
        "smoothedEle": 146.07851293248004,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.98341219267767,
        "lng": 120.5561827763409,
        "ele": 147.9306105393942,
        "distanceKm": 14.74962871011685,
        "gradePct": 2.0858377833393082,
        "smoothedEle": 147.08015357070985,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.983738,
        "lng": 120.556515,
        "ele": 149,
        "distanceKm": 14.79931873671185,
        "gradePct": 1.9944468134535998,
        "smoothedEle": 147.98964593292752,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.984067,
        "lng": 120.55684049999999,
        "ele": 149,
        "distanceKm": 14.848802064882024,
        "gradePct": 1.8569677266257893,
        "smoothedEle": 148.73610705041884,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.984396,
        "lng": 120.557166,
        "ele": 149,
        "distanceKm": 14.898285338407169,
        "gradePct": 1.6353884335963247,
        "smoothedEle": 149.31491339451864,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9847285,
        "lng": 120.55748799999999,
        "ele": 149.625,
        "distanceKm": 14.947817825606023,
        "gradePct": 1.4126234538086826,
        "smoothedEle": 149.86889706328478,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.985061,
        "lng": 120.55780999999999,
        "ele": 150.25,
        "distanceKm": 14.997350258811558,
        "gradePct": 1.1922563537919373,
        "smoothedEle": 150.3381289633671,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9853935,
        "lng": 120.558132,
        "ele": 150.875,
        "distanceKm": 15.046882638023485,
        "gradePct": 0.9978178114196119,
        "smoothedEle": 150.70278792080404,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.985726,
        "lng": 120.558454,
        "ele": 151.5,
        "distanceKm": 15.096414963239498,
        "gradePct": 0.8881281299847958,
        "smoothedEle": 151.06929185749195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.986173,
        "lng": 120.558899,
        "ele": 152,
        "distanceKm": 15.163835896109196,
        "gradePct": 0.8590992610774352,
        "smoothedEle": 151.73883837640386,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.986445,
        "lng": 120.559183,
        "ele": 152.5,
        "distanceKm": 15.205787553138228,
        "gradePct": 0.9123913619058646,
        "smoothedEle": 152.2250273174333,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.986559,
        "lng": 120.559536,
        "ele": 151.75,
        "distanceKm": 15.244081620388108,
        "gradePct": 1.001769310198359,
        "smoothedEle": 152.6857053599264,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.986709113250736,
        "lng": 120.56003229278815,
        "ele": 152.4064719419951,
        "distanceKm": 15.297556862083033,
        "gradePct": 1.0618883602532956,
        "smoothedEle": 153.20440859308133,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.986859226501473,
        "lng": 120.5605285855763,
        "ele": 153.06294388399016,
        "distanceKm": 15.351032050135144,
        "gradePct": 0.9689067022036005,
        "smoothedEle": 153.549498830893,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.987009,
        "lng": 120.561025,
        "ele": 154.75,
        "distanceKm": 15.40450723620782,
        "gradePct": 0.7861028273409004,
        "smoothedEle": 153.7823950377721,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.987139499999998,
        "lng": 120.5614205,
        "ele": 155.5,
        "distanceKm": 15.447514737921914,
        "gradePct": 0.608925188448412,
        "smoothedEle": 153.9368565524557,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.98727,
        "lng": 120.561816,
        "ele": 156.25,
        "distanceKm": 15.490522202812755,
        "gradePct": 0.48839233602334,
        "smoothedEle": 154.11295793991988,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.987446,
        "lng": 120.5623,
        "ele": 154.75,
        "distanceKm": 15.543792087951802,
        "gradePct": 0.45549243818055796,
        "smoothedEle": 154.4137622208488,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.987603999999997,
        "lng": 120.5627495,
        "ele": 154.25,
        "distanceKm": 15.593045196893268,
        "gradePct": 0.49274750329046135,
        "smoothedEle": 154.71797033999087,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.987762,
        "lng": 120.563199,
        "ele": 153.75,
        "distanceKm": 15.642298255548063,
        "gradePct": 0.5664807500687508,
        "smoothedEle": 155.0510830473808,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.987899,
        "lng": 120.563601,
        "ele": 154,
        "distanceKm": 15.68617813236583,
        "gradePct": 0.5690606856288005,
        "smoothedEle": 155.23329177510934,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.988048533336055,
        "lng": 120.56400204800742,
        "ele": 154.36800001166918,
        "distanceKm": 15.73047070813514,
        "gradePct": 0.5094652375795211,
        "smoothedEle": 155.3574695550855,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.988196,
        "lng": 120.564404,
        "ele": 155,
        "distanceKm": 15.774763435090414,
        "gradePct": 0.4651292769578549,
        "smoothedEle": 155.53531296855334,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.988418,
        "lng": 120.564696,
        "ele": 155.75,
        "distanceKm": 15.813529425885978,
        "gradePct": 0.528513361112518,
        "smoothedEle": 155.91353783846256,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.988816,
        "lng": 120.565142,
        "ele": 157,
        "distanceKm": 15.877113156295795,
        "gradePct": 0.714911913188362,
        "smoothedEle": 156.62547379671366,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.989055,
        "lng": 120.565383,
        "ele": 157,
        "distanceKm": 15.913374141868099,
        "gradePct": 0.860367260779458,
        "smoothedEle": 157.03027248523472,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.989237,
        "lng": 120.565726,
        "ele": 157,
        "distanceKm": 15.953899746882065,
        "gradePct": 1.0142580771083693,
        "smoothedEle": 157.48005759223756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.989505,
        "lng": 120.566051,
        "ele": 158,
        "distanceKm": 15.998563260068309,
        "gradePct": 1.1091493989327756,
        "smoothedEle": 157.9858175096849,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.989984,
        "lng": 120.566445,
        "ele": 160,
        "distanceKm": 16.065372626834613,
        "gradePct": 1.1191994882251106,
        "smoothedEle": 158.7324161090385,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.990393,
        "lng": 120.566579,
        "ele": 159.75,
        "distanceKm": 16.112874906687793,
        "gradePct": 1.1043529927432343,
        "smoothedEle": 159.23340527012937,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.990475,
        "lng": 120.566585,
        "ele": 159.5,
        "distanceKm": 16.122013564971425,
        "gradePct": 1.0993161202390707,
        "smoothedEle": 159.3247918529657,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.990716,
        "lng": 120.566788,
        "ele": 159.25,
        "distanceKm": 16.155924136523097,
        "gradePct": 1.0846084417118116,
        "smoothedEle": 159.67219822403405,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.991130104578914,
        "lng": 120.56708564236378,
        "ele": 159.83506572197757,
        "distanceKm": 16.2111376633095,
        "gradePct": 1.0977927093348436,
        "smoothedEle": 160.32192262345092,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.991539736385942,
        "lng": 120.56739109490918,
        "ele": 160.55671048131836,
        "distanceKm": 16.266385534448663,
        "gradePct": 1.1154572735076766,
        "smoothedEle": 160.97401342196306,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.991949368192973,
        "lng": 120.5676965474546,
        "ele": 161.27835524065918,
        "distanceKm": 16.321633351911196,
        "gradePct": 1.0860918348547026,
        "smoothedEle": 161.4931733920728,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.992359,
        "lng": 120.568002,
        "ele": 162,
        "distanceKm": 16.376881115694005,
        "gradePct": 1.042216299329443,
        "smoothedEle": 162.0032417801506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.99270050903954,
        "lng": 120.56826362732552,
        "ele": 162.71443255390707,
        "distanceKm": 16.42334862806457,
        "gradePct": 1.0167753887580098,
        "smoothedEle": 162.4995994567507,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.99305275451977,
        "lng": 120.56850831366276,
        "ele": 163.35721627695352,
        "distanceKm": 16.469840010484997,
        "gradePct": 0.9784110818704795,
        "smoothedEle": 162.96329706125434,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.993405,
        "lng": 120.568753,
        "ele": 164,
        "distanceKm": 16.51633135770536,
        "gradePct": 0.9615266485571998,
        "smoothedEle": 163.3664042114886,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.993793333333333,
        "lng": 120.569022,
        "ele": 164.25,
        "distanceKm": 16.56754416852385,
        "gradePct": 0.9169221715498882,
        "smoothedEle": 163.75088387239782,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.994181666666666,
        "lng": 120.56929099999999,
        "ele": 164.5,
        "distanceKm": 16.618756936762843,
        "gradePct": 0.8357576902619741,
        "smoothedEle": 164.12206721002025,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.99457,
        "lng": 120.56956,
        "ele": 164.75,
        "distanceKm": 16.669969662423313,
        "gradePct": 0.7571774409767498,
        "smoothedEle": 164.47877610128242,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.994990501683695,
        "lng": 120.56983249615686,
        "ele": 164.6347308981102,
        "distanceKm": 16.72441487123069,
        "gradePct": 0.6784112267448019,
        "smoothedEle": 164.7839135612743,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995411003367387,
        "lng": 120.57010499231373,
        "ele": 164.51946179622038,
        "distanceKm": 16.77886003553278,
        "gradePct": 0.5926540349149313,
        "smoothedEle": 165.018207842342,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995831501994175,
        "lng": 120.57037749544817,
        "ele": 165.06737336716878,
        "distanceKm": 16.83330522931219,
        "gradePct": 0.5018753586455791,
        "smoothedEle": 165.22715026684438,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.996252,
        "lng": 120.57065,
        "ele": 165.75,
        "distanceKm": 16.887750393612933,
        "gradePct": 0.4469785478979434,
        "smoothedEle": 165.4723850722542,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.996654333333332,
        "lng": 120.570921,
        "ele": 165.83333333333334,
        "distanceKm": 16.94038973635378,
        "gradePct": 0.4411402648393634,
        "smoothedEle": 165.73493884702356,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.997056666666666,
        "lng": 120.571192,
        "ele": 165.91666666666666,
        "distanceKm": 16.99302903553161,
        "gradePct": 0.4599130534198269,
        "smoothedEle": 165.99240982714298,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.997459,
        "lng": 120.571463,
        "ele": 166,
        "distanceKm": 17.045668291145798,
        "gradePct": 0.5355186085165277,
        "smoothedEle": 166.35387384467685,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.99788947413951,
        "lng": 120.57174801036957,
        "ele": 166.61637190651285,
        "distanceKm": 17.101724253166847,
        "gradePct": 0.6190527711122109,
        "smoothedEle": 166.780189234996,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.99831994827902,
        "lng": 120.57203302073914,
        "ele": 167.23274381302573,
        "distanceKm": 17.157780166773414,
        "gradePct": 0.5269131049405634,
        "smoothedEle": 166.8738256719732,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.998751,
        "lng": 120.572317,
        "ele": 167,
        "distanceKm": 17.21383608386534,
        "gradePct": 0.21557338011420846,
        "smoothedEle": 166.56643473403167,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.998985,
        "lng": 120.572592,
        "ele": 167.5,
        "distanceKm": 17.252167972207964,
        "gradePct": -0.09179465096880823,
        "smoothedEle": 166.219715753427,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99916,
        "lng": 120.573083,
        "ele": 169,
        "distanceKm": 17.306060635437472,
        "gradePct": -0.5453549334861397,
        "smoothedEle": 165.69672291039183,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999279,
        "lng": 120.573445,
        "ele": 168.5,
        "distanceKm": 17.345405422485378,
        "gradePct": -0.7735030306898977,
        "smoothedEle": 165.3061486966954,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999442000000002,
        "lng": 120.573857,
        "ele": 165.625,
        "distanceKm": 17.391306154688742,
        "gradePct": -0.9864082155511119,
        "smoothedEle": 164.71716451215468,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999605,
        "lng": 120.574269,
        "ele": 162.75,
        "distanceKm": 17.437206840106903,
        "gradePct": -1.2592593665155833,
        "smoothedEle": 163.83652321211397,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99973731147374,
        "lng": 120.57480536275908,
        "ele": 161.32113044865258,
        "distanceKm": 17.494043889486022,
        "gradePct": -1.6176575328987526,
        "smoothedEle": 162.57802245876576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999842,
        "lng": 120.57535,
        "ele": 161,
        "distanceKm": 17.55099308715204,
        "gradePct": -2.033609959332587,
        "smoothedEle": 161.1672295706494,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999923,
        "lng": 120.575625,
        "ele": 161.5,
        "distanceKm": 17.580546802745033,
        "gradePct": -2.2184008176086474,
        "smoothedEle": 160.41842359681166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.000138,
        "lng": 120.575916,
        "ele": 160.25,
        "distanceKm": 17.61873994968461,
        "gradePct": -2.361678782563993,
        "smoothedEle": 159.46746768498483,
        "gradeBand": "descent"
      },
      {
        "lat": 23.000526,
        "lng": 120.576033,
        "ele": 157.75,
        "distanceKm": 17.6635148592846,
        "gradePct": -2.2796295300726905,
        "smoothedEle": 158.69474513812276,
        "gradeBand": "descent"
      },
      {
        "lat": 23.000871,
        "lng": 120.575978,
        "ele": 156.5,
        "distanceKm": 17.70228801841617,
        "gradePct": -2.038812895246515,
        "smoothedEle": 158.29616624993434,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001047,
        "lng": 120.575866,
        "ele": 155.75,
        "distanceKm": 17.72496874751803,
        "gradePct": -1.8806138525652112,
        "smoothedEle": 158.0506984508669,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001149,
        "lng": 120.575686,
        "ele": 155.25,
        "distanceKm": 17.746603841136135,
        "gradePct": -1.7099833084238076,
        "smoothedEle": 157.85599700655783,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001262,
        "lng": 120.575126,
        "ele": 156.25,
        "distanceKm": 17.805283528478917,
        "gradePct": -1.0641430343815197,
        "smoothedEle": 157.67422767351133,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001362,
        "lng": 120.574578,
        "ele": 156,
        "distanceKm": 17.86246541841767,
        "gradePct": -0.21621690928860537,
        "smoothedEle": 158.280422503392,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001578,
        "lng": 120.574137,
        "ele": 157.75,
        "distanceKm": 17.913596035615658,
        "gradePct": 0.6730656019939284,
        "smoothedEle": 159.51991364159812,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.00204,
        "lng": 120.573661,
        "ele": 156.75,
        "distanceKm": 17.98439712349499,
        "gradePct": 2.276654719480555,
        "smoothedEle": 162.29223595589826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.002195,
        "lng": 120.573603,
        "ele": 157.25,
        "distanceKm": 18.002626106606716,
        "gradePct": 2.7189030356195283,
        "smoothedEle": 163.12026551664974,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.002271,
        "lng": 120.573605,
        "ele": 158,
        "distanceKm": 18.011079411701882,
        "gradePct": 2.8846100461971207,
        "smoothedEle": 163.5048908984798,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.002328,
        "lng": 120.573635,
        "ele": 158.75,
        "distanceKm": 18.018122169858,
        "gradePct": 3.007502062552856,
        "smoothedEle": 163.82533639458313,
        "gradeBand": "hard"
      },
      {
        "lat": 23.002414,
        "lng": 120.573712,
        "ele": 160.5,
        "distanceKm": 18.030514131073865,
        "gradePct": 3.2373587689635426,
        "smoothedEle": 164.41641907185493,
        "gradeBand": "hard"
      },
      {
        "lat": 23.002688,
        "lng": 120.574003,
        "ele": 165.25,
        "distanceKm": 18.07312172525312,
        "gradePct": 3.9401134533906084,
        "smoothedEle": 166.4189759982799,
        "gradeBand": "hard"
      },
      {
        "lat": 23.002978,
        "lng": 120.57436,
        "ele": 169.75,
        "distanceKm": 18.121855970834808,
        "gradePct": 4.424948099818097,
        "smoothedEle": 168.69323993826546,
        "gradeBand": "hard"
      },
      {
        "lat": 23.003155,
        "lng": 120.574689,
        "ele": 173.25,
        "distanceKm": 18.16086002731392,
        "gradePct": 4.521233743969491,
        "smoothedEle": 170.41307329787364,
        "gradeBand": "hard"
      },
      {
        "lat": 23.003353,
        "lng": 120.575038,
        "ele": 177,
        "distanceKm": 18.202821191561846,
        "gradePct": 4.5064494856631985,
        "smoothedEle": 172.14204085343454,
        "gradeBand": "hard"
      },
      {
        "lat": 23.003574,
        "lng": 120.575343,
        "ele": 178,
        "distanceKm": 18.24255064321888,
        "gradePct": 4.369499650632791,
        "smoothedEle": 173.72113444393625,
        "gradeBand": "hard"
      },
      {
        "lat": 23.003963,
        "lng": 120.575677,
        "ele": 179.75,
        "distanceKm": 18.297683713510228,
        "gradePct": 3.980638734031302,
        "smoothedEle": 175.5264791546802,
        "gradeBand": "hard"
      },
      {
        "lat": 23.0043615,
        "lng": 120.575985,
        "ele": 179.375,
        "distanceKm": 18.352064625367355,
        "gradePct": 3.3019561582241694,
        "smoothedEle": 176.62916375566567,
        "gradeBand": "hard"
      },
      {
        "lat": 23.00476,
        "lng": 120.576293,
        "ele": 179,
        "distanceKm": 18.406445483260683,
        "gradePct": 2.343713080388306,
        "smoothedEle": 176.9735187328492,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.005168,
        "lng": 120.576529,
        "ele": 177.5,
        "distanceKm": 18.45784280053704,
        "gradePct": 1.3704681598089983,
        "smoothedEle": 176.96281587323733,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.005491,
        "lng": 120.576733,
        "ele": 175,
        "distanceKm": 18.499387024594615,
        "gradePct": 0.5706609336075721,
        "smoothedEle": 176.70233915006017,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.005797,
        "lng": 120.576998,
        "ele": 175.75,
        "distanceKm": 18.542900362621104,
        "gradePct": -0.2371546252367844,
        "smoothedEle": 175.96903026899275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00613283360551,
        "lng": 120.57720077873638,
        "ele": 175.25522654792906,
        "distanceKm": 18.58562339401698,
        "gradePct": -0.8929955209423529,
        "smoothedEle": 175.05567633105227,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006492,
        "lng": 120.577351,
        "ele": 173.75,
        "distanceKm": 18.6284183203011,
        "gradePct": -1.44323027425421,
        "smoothedEle": 174.0824826110895,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006918,
        "lng": 120.57785,
        "ele": 175.25,
        "distanceKm": 18.698076589128107,
        "gradePct": -2.2423595411816786,
        "smoothedEle": 172.22583632263945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00702,
        "lng": 120.577961,
        "ele": 175,
        "distanceKm": 18.71412988749842,
        "gradePct": -2.358044148412995,
        "smoothedEle": 171.73779663689393,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007144,
        "lng": 120.57804,
        "ele": 174.25,
        "distanceKm": 18.730114011639692,
        "gradePct": -2.4953362514727306,
        "smoothedEle": 171.19383984938935,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007607,
        "lng": 120.578157,
        "ele": 169.75,
        "distanceKm": 18.782971668942327,
        "gradePct": -2.752959591966923,
        "smoothedEle": 169.60644702749767,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00795,
        "lng": 120.578196,
        "ele": 168.75,
        "distanceKm": 18.821319890635078,
        "gradePct": -2.938396499081204,
        "smoothedEle": 168.36711405671997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.008399,
        "lng": 120.578263,
        "ele": 167.75,
        "distanceKm": 18.871715213541908,
        "gradePct": -2.95550616008887,
        "smoothedEle": 167.01745056732946,
        "gradeBand": "descent"
      },
      {
        "lat": 23.008841,
        "lng": 120.578281,
        "ele": 164.5,
        "distanceKm": 18.92089795516953,
        "gradePct": -2.8473697274858227,
        "smoothedEle": 165.81273262266262,
        "gradeBand": "descent"
      },
      {
        "lat": 23.009468,
        "lng": 120.578241,
        "ele": 160.25,
        "distanceKm": 18.99073736615264,
        "gradePct": -2.74424694605204,
        "smoothedEle": 163.86698231669624,
        "gradeBand": "descent"
      },
      {
        "lat": 23.010102,
        "lng": 120.578193,
        "ele": 159.5,
        "distanceKm": 19.06140601378231,
        "gradePct": -2.3130470161503722,
        "smoothedEle": 162.66745260342947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.010327,
        "lng": 120.578147,
        "ele": 161.5,
        "distanceKm": 19.08686402411088,
        "gradePct": -2.1234457431933937,
        "smoothedEle": 162.39949306614062,
        "gradeBand": "descent"
      },
      {
        "lat": 23.010759,
        "lng": 120.577892,
        "ele": 161.75,
        "distanceKm": 19.141532321892598,
        "gradePct": -1.770509846789856,
        "smoothedEle": 161.69683228791394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0112205,
        "lng": 120.57766050000001,
        "ele": 161.125,
        "distanceKm": 19.198054557663824,
        "gradePct": -1.2401624871644303,
        "smoothedEle": 161.26245532450332,
        "gradeBand": "descent"
      },
      {
        "lat": 23.011682,
        "lng": 120.577429,
        "ele": 160.5,
        "distanceKm": 19.254576759459734,
        "gradePct": -0.7095694348683165,
        "smoothedEle": 161.36423350510708,
        "gradeBand": "descent"
      },
      {
        "lat": 23.012016,
        "lng": 120.577229,
        "ele": 163.75,
        "distanceKm": 19.296983247446335,
        "gradePct": -0.34476714871678504,
        "smoothedEle": 161.57989469807637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.012575,
        "lng": 120.57684,
        "ele": 161.5,
        "distanceKm": 19.37079838566291,
        "gradePct": 0.24413096234833717,
        "smoothedEle": 161.9601826581034,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.012918195491118,
        "lng": 120.57654971471858,
        "ele": 160.8297422326965,
        "distanceKm": 19.419161255405164,
        "gradePct": 0.45169068935240536,
        "smoothedEle": 162.20384303039305,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0132559962426,
        "lng": 120.57625192893215,
        "ele": 161.5664518605804,
        "distanceKm": 19.46753211919892,
        "gradePct": 0.5741805655296467,
        "smoothedEle": 162.57848003411732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.01359379699408,
        "lng": 120.57595414314572,
        "ele": 162.30316148846433,
        "distanceKm": 19.515902934905256,
        "gradePct": 0.7489079089668165,
        "smoothedEle": 163.17518278961046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.01393159774556,
        "lng": 120.57565635735929,
        "ele": 163.03987111634825,
        "distanceKm": 19.564273702523575,
        "gradePct": 0.8558993826935821,
        "smoothedEle": 163.63836693057178,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.01426939849704,
        "lng": 120.57535857157286,
        "ele": 163.77658074423215,
        "distanceKm": 19.612644422052977,
        "gradePct": 1.0444472374843095,
        "smoothedEle": 164.25990458934146,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.01460719924852,
        "lng": 120.57506078578643,
        "ele": 164.51329037211607,
        "distanceKm": 19.66101509349348,
        "gradePct": 1.323866173583345,
        "smoothedEle": 165.17573738886105,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.014945,
        "lng": 120.574763,
        "ele": 165.25,
        "distanceKm": 19.709385716844178,
        "gradePct": 1.3882453978589573,
        "smoothedEle": 165.87127713307905,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.015367,
        "lng": 120.574411,
        "ele": 168,
        "distanceKm": 19.76854399642578,
        "gradePct": 1.218695697957959,
        "smoothedEle": 166.13062930008613,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.015697,
        "lng": 120.574196,
        "ele": 167.75,
        "distanceKm": 19.81133009120157,
        "gradePct": 0.9455876287895,
        "smoothedEle": 166.1341914043217,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.016005500000002,
        "lng": 120.5740385,
        "ele": 169.37500000000009,
        "distanceKm": 19.849232181955525,
        "gradePct": 0.5244727047984147,
        "smoothedEle": 166.00158941275683,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.016314,
        "lng": 120.573881,
        "ele": 171,
        "distanceKm": 19.887134257029345,
        "gradePct": 0.10636517833482666,
        "smoothedEle": 165.7640452152112,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.016649480527416,
        "lng": 120.57363727906413,
        "ele": 168.67775343309538,
        "distanceKm": 19.932008898592795,
        "gradePct": -0.29027062665139275,
        "smoothedEle": 165.38991677639117,
        "gradeBand": "descent"
      },
      {
        "lat": 23.016948,
        "lng": 120.573338,
        "ele": 164.5,
        "distanceKm": 19.97717498305224,
        "gradePct": -0.5810718425962327,
        "smoothedEle": 164.96920417717845,
        "gradeBand": "descent"
      },
      {
        "lat": 23.017238,
        "lng": 120.572957,
        "ele": 163.00000000000006,
        "distanceKm": 20.02777399749986,
        "gradePct": -0.827893371284833,
        "smoothedEle": 164.42087499304816,
        "gradeBand": "descent"
      },
      {
        "lat": 23.017528,
        "lng": 120.572576,
        "ele": 161.5,
        "distanceKm": 20.078372947335808,
        "gradePct": -0.8933486948990637,
        "smoothedEle": 164.0322577024197,
        "gradeBand": "descent"
      },
      {
        "lat": 23.017881,
        "lng": 120.572228,
        "ele": 160.5,
        "distanceKm": 20.13137429280358,
        "gradePct": -0.9937890552024875,
        "smoothedEle": 163.40762949539257,
        "gradeBand": "descent"
      },
      {
        "lat": 23.018196,
        "lng": 120.571944,
        "ele": 160.25,
        "distanceKm": 20.17688948461201,
        "gradePct": -1.0864237113944493,
        "smoothedEle": 162.7990161124521,
        "gradeBand": "descent"
      },
      {
        "lat": 23.018501,
        "lng": 120.571611,
        "ele": 160.75,
        "distanceKm": 20.224968845217102,
        "gradePct": -1.0374428990638798,
        "smoothedEle": 162.37638794634586,
        "gradeBand": "descent"
      },
      {
        "lat": 23.018809,
        "lng": 120.571031,
        "ele": 164,
        "distanceKm": 20.29349846650412,
        "gradePct": -0.9044309857119576,
        "smoothedEle": 162.04513938985818,
        "gradeBand": "descent"
      },
      {
        "lat": 23.019037,
        "lng": 120.57066300000001,
        "ele": 163.875,
        "distanceKm": 20.33889827855225,
        "gradePct": -0.6662835789165935,
        "smoothedEle": 161.97445420568624,
        "gradeBand": "descent"
      },
      {
        "lat": 23.019265,
        "lng": 120.570295,
        "ele": 163.75,
        "distanceKm": 20.384298037780443,
        "gradePct": -0.3101199772179666,
        "smoothedEle": 162.1136533444082,
        "gradeBand": "descent"
      },
      {
        "lat": 23.019476,
        "lng": 120.569797,
        "ele": 162.75,
        "distanceKm": 20.440404930496424,
        "gradePct": 0.21525558873102643,
        "smoothedEle": 162.7322864107859,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.019603,
        "lng": 120.569289,
        "ele": 161.25,
        "distanceKm": 20.49427786599697,
        "gradePct": 0.7507689197393459,
        "smoothedEle": 163.5454637442097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.019669555468646,
        "lng": 120.56880166606848,
        "ele": 161.06512369821124,
        "distanceKm": 20.54469805663653,
        "gradePct": 1.1348112841363798,
        "smoothedEle": 164.26185933773985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.01974,
        "lng": 120.568315,
        "ele": 161,
        "distanceKm": 20.595115987681005,
        "gradePct": 1.3999741650482398,
        "smoothedEle": 165.03288009458726,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.019779,
        "lng": 120.567879,
        "ele": 164.75,
        "distanceKm": 20.639946737872236,
        "gradePct": 1.5743519075210826,
        "smoothedEle": 165.8759382064705,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.019699,
        "lng": 120.567339,
        "ele": 167.5,
        "distanceKm": 20.695922047703323,
        "gradePct": 1.786838370512192,
        "smoothedEle": 167.14250185127523,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.019694,
        "lng": 120.566885,
        "ele": 169,
        "distanceKm": 20.74238803779174,
        "gradePct": 2.0724715334399164,
        "smoothedEle": 168.37398048743952,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.019812,
        "lng": 120.566527,
        "ele": 170.75,
        "distanceKm": 20.781304616612243,
        "gradePct": 2.381547606417237,
        "smoothedEle": 169.58476366993617,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.020083958327373,
        "lng": 120.56606717477763,
        "ele": 171.90992249498555,
        "distanceKm": 20.83724215192065,
        "gradePct": 2.8957457811881926,
        "smoothedEle": 171.61656907354185,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.020376,
        "lng": 120.565621,
        "ele": 174.25,
        "distanceKm": 20.89327357443221,
        "gradePct": 3.223138498382281,
        "smoothedEle": 173.52885135555155,
        "gradeBand": "hard"
      },
      {
        "lat": 23.020694,
        "lng": 120.565179,
        "ele": 174.75,
        "distanceKm": 20.950688498530152,
        "gradePct": 3.2525449630127783,
        "smoothedEle": 175.1373166050277,
        "gradeBand": "hard"
      },
      {
        "lat": 23.021175,
        "lng": 120.564857,
        "ele": 176.75,
        "distanceKm": 21.013510099349748,
        "gradePct": 3.037879794395078,
        "smoothedEle": 176.8303151255117,
        "gradeBand": "hard"
      },
      {
        "lat": 23.021491,
        "lng": 120.564657,
        "ele": 179.25,
        "distanceKm": 21.054174438209046,
        "gradePct": 2.8719857796065145,
        "smoothedEle": 177.93841835942757,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.021704369276257,
        "lng": 120.56428911194392,
        "ele": 179.6106130381172,
        "distanceKm": 21.098675904354973,
        "gradePct": 2.7791348913346168,
        "smoothedEle": 179.23846610790403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.021870684638127,
        "lng": 120.56389155597196,
        "ele": 180.0553065190586,
        "distanceKm": 21.143367275823348,
        "gradePct": 2.8538411989596524,
        "smoothedEle": 180.63989671477745,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.022037,
        "lng": 120.563494,
        "ele": 180.5,
        "distanceKm": 21.188058601606425,
        "gradePct": 2.9750138301946083,
        "smoothedEle": 182.09444259454338,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.022305,
        "lng": 120.563131,
        "ele": 182.25,
        "distanceKm": 21.235683212678634,
        "gradePct": 3.135384000540338,
        "smoothedEle": 183.7053004648045,
        "gradeBand": "hard"
      },
      {
        "lat": 23.022624,
        "lng": 120.5628255,
        "ele": 184.375,
        "distanceKm": 21.282966116010005,
        "gradePct": 3.2272674421770633,
        "smoothedEle": 185.23406161934074,
        "gradeBand": "hard"
      },
      {
        "lat": 23.022943,
        "lng": 120.56252,
        "ele": 186.5,
        "distanceKm": 21.33024897043193,
        "gradePct": 3.200131143046133,
        "smoothedEle": 186.62879559711172,
        "gradeBand": "hard"
      },
      {
        "lat": 23.02323548734572,
        "lng": 120.56224498424352,
        "ele": 189.2501575648168,
        "distanceKm": 21.373259124966552,
        "gradePct": 3.177877368874402,
        "smoothedEle": 187.96852628333505,
        "gradeBand": "hard"
      },
      {
        "lat": 23.023528,
        "lng": 120.56197,
        "ele": 190.75,
        "distanceKm": 21.416269257453372,
        "gradePct": 3.152586719950887,
        "smoothedEle": 189.353815049895,
        "gradeBand": "hard"
      },
      {
        "lat": 23.024031,
        "lng": 120.561537,
        "ele": 192.25,
        "distanceKm": 21.487626520633775,
        "gradePct": 3.1442554160505662,
        "smoothedEle": 191.66004352332195,
        "gradeBand": "hard"
      },
      {
        "lat": 23.024184,
        "lng": 120.561455,
        "ele": 193,
        "distanceKm": 21.506596416146465,
        "gradePct": 3.1765078263268522,
        "smoothedEle": 192.28411603812197,
        "gradeBand": "hard"
      },
      {
        "lat": 23.024325,
        "lng": 120.561429,
        "ele": 193.25,
        "distanceKm": 21.522499096537814,
        "gradePct": 3.177685608447842,
        "smoothedEle": 192.75556360094603,
        "gradeBand": "hard"
      },
      {
        "lat": 23.024586,
        "lng": 120.561444,
        "ele": 194,
        "distanceKm": 21.551561580969686,
        "gradePct": 3.1613864216959198,
        "smoothedEle": 193.6154386044197,
        "gradeBand": "hard"
      },
      {
        "lat": 23.025042166666665,
        "lng": 120.56161816666666,
        "ele": 195.20833333333334,
        "distanceKm": 21.60532546368729,
        "gradePct": 3.0457487900507196,
        "smoothedEle": 195.09283023361348,
        "gradeBand": "hard"
      },
      {
        "lat": 23.02549833333333,
        "lng": 120.56179233333333,
        "ele": 196.41666666666666,
        "distanceKm": 21.65908932641171,
        "gradePct": 2.800107586566095,
        "smoothedEle": 196.33795188515933,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.025954499999997,
        "lng": 120.5619665,
        "ele": 197.625,
        "distanceKm": 21.71285316914263,
        "gradePct": 2.475865805562842,
        "smoothedEle": 197.4213340501967,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.026410666666667,
        "lng": 120.56214066666666,
        "ele": 198.83333333333334,
        "distanceKm": 21.76661699188011,
        "gradePct": 2.1529888341139913,
        "smoothedEle": 198.33512780032814,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.026866833333333,
        "lng": 120.56231483333333,
        "ele": 200.04166666666666,
        "distanceKm": 21.820380794623087,
        "gradePct": 1.818479696207752,
        "smoothedEle": 199.0784572546076,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.027323,
        "lng": 120.562489,
        "ele": 201.25,
        "distanceKm": 21.874144577371624,
        "gradePct": 1.5593434627241776,
        "smoothedEle": 199.7600135240143,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.027691,
        "lng": 120.56262466666666,
        "ele": 201.16666666666666,
        "distanceKm": 21.91735543637304,
        "gradePct": 1.474527506889691,
        "smoothedEle": 200.4469115924551,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.028059,
        "lng": 120.56276033333333,
        "ele": 201.08333333333334,
        "distanceKm": 21.96056628319656,
        "gradePct": 1.4618394902806011,
        "smoothedEle": 201.15596625546965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.028427,
        "lng": 120.562896,
        "ele": 201,
        "distanceKm": 22.003777117842777,
        "gradePct": 1.4984576248335966,
        "smoothedEle": 201.8458128122429,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.02876,
        "lng": 120.5630425,
        "ele": 200.625,
        "distanceKm": 22.043724928476077,
        "gradePct": 1.459737446243471,
        "smoothedEle": 202.29386260377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.029093,
        "lng": 120.563189,
        "ele": 200.25,
        "distanceKm": 22.083672725210224,
        "gradePct": 1.3101065583724865,
        "smoothedEle": 202.53169010381933,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.029408,
        "lng": 120.563315,
        "ele": 203,
        "distanceKm": 22.120997083567847,
        "gradePct": 1.018837789978182,
        "smoothedEle": 202.544343625116,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.029794,
        "lng": 120.563383,
        "ele": 205,
        "distanceKm": 22.16447881474457,
        "gradePct": 0.5304496173583165,
        "smoothedEle": 202.27932775083826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03038,
        "lng": 120.563321,
        "ele": 206,
        "distanceKm": 22.229947290174255,
        "gradePct": -0.31144800349176305,
        "smoothedEle": 201.516438279189,
        "gradeBand": "descent"
      },
      {
        "lat": 23.030931,
        "lng": 120.563093,
        "ele": 204,
        "distanceKm": 22.295507945565713,
        "gradePct": -0.9733982036996771,
        "smoothedEle": 200.5889060149007,
        "gradeBand": "descent"
      },
      {
        "lat": 23.03132,
        "lng": 120.562859,
        "ele": 201.0833333333334,
        "distanceKm": 22.344948628021815,
        "gradePct": -1.298846172706168,
        "smoothedEle": 199.80066952318225,
        "gradeBand": "descent"
      },
      {
        "lat": 23.031709,
        "lng": 120.562625,
        "ele": 198.1666666666666,
        "distanceKm": 22.394389277004272,
        "gradePct": -1.6313368753132722,
        "smoothedEle": 198.66811408691257,
        "gradeBand": "descent"
      },
      {
        "lat": 23.032098,
        "lng": 120.562391,
        "ele": 195.25,
        "distanceKm": 22.44382989251191,
        "gradePct": -2.0681559591169862,
        "smoothedEle": 197.18371951444664,
        "gradeBand": "descent"
      },
      {
        "lat": 23.032384926323264,
        "lng": 120.56203941010926,
        "ele": 194.33798192349042,
        "distanceKm": 22.491917056948235,
        "gradePct": -2.552408865682219,
        "smoothedEle": 195.53489108638027,
        "gradeBand": "descent"
      },
      {
        "lat": 23.032646849129655,
        "lng": 120.56165870926682,
        "ele": 193.14315009653288,
        "distanceKm": 22.540557810412412,
        "gradePct": -3.0072473685778185,
        "smoothedEle": 193.8561779189988,
        "gradeBand": "descent"
      },
      {
        "lat": 23.03290877193605,
        "lng": 120.5612780084244,
        "ele": 191.9483182695754,
        "distanceKm": 22.58919850323402,
        "gradePct": -3.265944071578514,
        "smoothedEle": 192.25513293977883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.033170694742445,
        "lng": 120.56089730758195,
        "ele": 190.75348644261786,
        "distanceKm": 22.637839135414538,
        "gradePct": -3.273329989767075,
        "smoothedEle": 190.81692475764476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.03343261754884,
        "lng": 120.56051660673951,
        "ele": 189.5586546156603,
        "distanceKm": 22.68647970695219,
        "gradePct": -3.0898879628097657,
        "smoothedEle": 189.54155279649814,
        "gradeBand": "descent"
      },
      {
        "lat": 23.033694540355235,
        "lng": 120.56013590589707,
        "ele": 188.36382278870272,
        "distanceKm": 22.735120217846372,
        "gradePct": -2.8400130546390545,
        "smoothedEle": 188.3638166296374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.03395646316163,
        "lng": 120.55975520505464,
        "ele": 187.16899096174527,
        "distanceKm": 22.783760668095304,
        "gradePct": -2.6325692848354927,
        "smoothedEle": 187.16898480263717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.034218385968025,
        "lng": 120.5593745042122,
        "ele": 185.9741591347877,
        "distanceKm": 22.832401057700707,
        "gradePct": -2.5017825420523483,
        "smoothedEle": 185.97415297561076,
        "gradeBand": "descent"
      },
      {
        "lat": 23.03448030877442,
        "lng": 120.55899380336976,
        "ele": 184.77932730783013,
        "distanceKm": 22.881041386660808,
        "gradePct": -2.3905890207990494,
        "smoothedEle": 184.90296932145432,
        "gradeBand": "descent"
      },
      {
        "lat": 23.034742231580815,
        "lng": 120.55861310252732,
        "ele": 183.5844954808726,
        "distanceKm": 22.929681654974996,
        "gradePct": -2.186179392146536,
        "smoothedEle": 184.1231421568702,
        "gradeBand": "descent"
      },
      {
        "lat": 23.03500415438721,
        "lng": 120.55823240168489,
        "ele": 182.3896636539151,
        "distanceKm": 22.978321862641497,
        "gradePct": -1.8083053454962572,
        "smoothedEle": 183.68597603810326,
        "gradeBand": "descent"
      },
      {
        "lat": 23.035266077193604,
        "lng": 120.55785170084245,
        "ele": 181.19483182695757,
        "distanceKm": 23.026962009662032,
        "gradePct": -1.2581454583490528,
        "smoothedEle": 183.5914701109463,
        "gradeBand": "descent"
      },
      {
        "lat": 23.035528,
        "lng": 120.557471,
        "ele": 180,
        "distanceKm": 23.075602096034824,
        "gradePct": -0.5915664013879528,
        "smoothedEle": 183.83962352121983,
        "gradeBand": "descent"
      },
      {
        "lat": 23.035768344165863,
        "lng": 120.55708472024219,
        "ele": 180.7802436242025,
        "distanceKm": 23.123316347157466,
        "gradePct": 0.09575009056139584,
        "smoothedEle": 184.41669440553062,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03600854719758,
        "lng": 120.55669833555909,
        "ele": 183.06433192717688,
        "distanceKm": 23.171030648276236,
        "gradePct": 0.7953763221796806,
        "smoothedEle": 185.3422603082117,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.036248750229294,
        "lng": 120.55631195087598,
        "ele": 185.34842023015145,
        "distanceKm": 23.21874489099134,
        "gradePct": 1.462515580209361,
        "smoothedEle": 186.5324668155934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03648895326101,
        "lng": 120.55592556619287,
        "ele": 187.63250853312584,
        "distanceKm": 23.266459075301025,
        "gradePct": 2.07586862865697,
        "smoothedEle": 187.94471464888045,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03672915629273,
        "lng": 120.55553918150977,
        "ele": 189.91659683610038,
        "distanceKm": 23.31417320120377,
        "gradePct": 2.624618269568837,
        "smoothedEle": 189.55535091466172,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.036969359324445,
        "lng": 120.55515279682666,
        "ele": 192.20068513907478,
        "distanceKm": 23.361887268700993,
        "gradePct": 3.032455107961635,
        "smoothedEle": 191.2298065017835,
        "gradeBand": "hard"
      },
      {
        "lat": 23.037209,
        "lng": 120.554766,
        "ele": 194.75,
        "distanceKm": 23.40960128043504,
        "gradePct": 3.2491763934896745,
        "smoothedEle": 192.80273708117448,
        "gradeBand": "hard"
      },
      {
        "lat": 23.037551,
        "lng": 120.554225,
        "ele": 196.5,
        "distanceKm": 23.47676381872795,
        "gradePct": 3.2444791362637315,
        "smoothedEle": 194.78151945865363,
        "gradeBand": "hard"
      },
      {
        "lat": 23.037783,
        "lng": 120.55377,
        "ele": 197.75,
        "distanceKm": 23.529991819967353,
        "gradePct": 3.092508572009504,
        "smoothedEle": 196.29549940586202,
        "gradeBand": "hard"
      },
      {
        "lat": 23.037992,
        "lng": 120.553149,
        "ele": 197.75,
        "distanceKm": 23.597653118876657,
        "gradePct": 3.07856584654817,
        "smoothedEle": 198.5659880671226,
        "gradeBand": "hard"
      },
      {
        "lat": 23.038142178222635,
        "lng": 120.5527822068606,
        "ele": 197.87006047335564,
        "distanceKm": 23.63873311162305,
        "gradePct": 3.0547129259379737,
        "smoothedEle": 199.77046215228376,
        "gradeBand": "hard"
      },
      {
        "lat": 23.038332,
        "lng": 120.552437,
        "ele": 198.5,
        "distanceKm": 23.679882713299975,
        "gradePct": 3.0566206972589183,
        "smoothedEle": 200.98347250361022,
        "gradeBand": "hard"
      },
      {
        "lat": 23.038686,
        "lng": 120.551832,
        "ele": 201,
        "distanceKm": 23.753244722873532,
        "gradePct": 3.2477876599448168,
        "smoothedEle": 203.57136498385978,
        "gradeBand": "hard"
      },
      {
        "lat": 23.039031,
        "lng": 120.551522,
        "ele": 206,
        "distanceKm": 23.8030231750014,
        "gradePct": 3.388626679199104,
        "smoothedEle": 205.5006926080963,
        "gradeBand": "hard"
      },
      {
        "lat": 23.039109,
        "lng": 120.551371,
        "ele": 207,
        "distanceKm": 23.820742229171838,
        "gradePct": 3.4856513947195378,
        "smoothedEle": 206.21426845905685,
        "gradeBand": "hard"
      },
      {
        "lat": 23.039147,
        "lng": 120.551228,
        "ele": 207.5,
        "distanceKm": 23.835972701101248,
        "gradePct": 3.5784033564012803,
        "smoothedEle": 206.84633304412736,
        "gradeBand": "hard"
      },
      {
        "lat": 23.03915,
        "lng": 120.550943,
        "ele": 206.75,
        "distanceKm": 23.865137490668005,
        "gradePct": 3.760196354608324,
        "smoothedEle": 208.06920468255925,
        "gradeBand": "hard"
      },
      {
        "lat": 23.039339,
        "lng": 120.55063,
        "ele": 209,
        "distanceKm": 23.903444912494482,
        "gradePct": 3.9309311264453015,
        "smoothedEle": 209.6765066187229,
        "gradeBand": "hard"
      },
      {
        "lat": 23.039629499999997,
        "lng": 120.5503995,
        "ele": 212.12499999999986,
        "distanceKm": 23.94344156897454,
        "gradePct": 3.973065171215396,
        "smoothedEle": 211.1716827128493,
        "gradeBand": "hard"
      },
      {
        "lat": 23.03992,
        "lng": 120.550169,
        "ele": 215.25,
        "distanceKm": 23.98343819546354,
        "gradePct": 3.8725241664638754,
        "smoothedEle": 212.48666064769873,
        "gradeBand": "hard"
      },
      {
        "lat": 23.040399,
        "lng": 120.549814,
        "ele": 217.75,
        "distanceKm": 24.04790853110892,
        "gradePct": 3.351335603049816,
        "smoothedEle": 214.04947033327954,
        "gradeBand": "hard"
      },
      {
        "lat": 23.0406875,
        "lng": 120.549593,
        "ele": 218.49999999999997,
        "distanceKm": 24.08715768171079,
        "gradePct": 2.890092275855064,
        "smoothedEle": 214.77331191061344,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.040976,
        "lng": 120.549372,
        "ele": 219.25,
        "distanceKm": 24.126406804409864,
        "gradePct": 2.5156650448883173,
        "smoothedEle": 215.56621025492117,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.041272,
        "lng": 120.549227,
        "ele": 217.5,
        "distanceKm": 24.162510159180677,
        "gradePct": 2.2264443980455093,
        "smoothedEle": 216.25149376641258,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.041371,
        "lng": 120.549222,
        "ele": 217,
        "distanceKm": 24.17353035473995,
        "gradePct": 2.153936844199429,
        "smoothedEle": 216.4687920653812,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.041482,
        "lng": 120.549267,
        "ele": 216.75,
        "distanceKm": 24.186703939411483,
        "gradePct": 2.0405212479548496,
        "smoothedEle": 216.64686724631372,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.041840999999998,
        "lng": 120.549471,
        "ele": 215.5,
        "distanceKm": 24.23175121542349,
        "gradePct": 1.770175274095883,
        "smoothedEle": 217.19815533182893,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0422,
        "lng": 120.549675,
        "ele": 214.25,
        "distanceKm": 24.276798465657766,
        "gradePct": 1.4993905784286508,
        "smoothedEle": 217.5810460977204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.042597711511533,
        "lng": 120.54992885841162,
        "ele": 216.2027570124307,
        "distanceKm": 24.32808646306938,
        "gradePct": 1.1894615135410092,
        "smoothedEle": 217.97701514981316,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.04299526378337,
        "lng": 120.55018301163655,
        "ele": 217.76759489710577,
        "distanceKm": 24.37937444397043,
        "gradePct": 1.126624516424958,
        "smoothedEle": 218.8010391289913,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.043392631891685,
        "lng": 120.55043750581827,
        "ele": 218.88379744855288,
        "distanceKm": 24.430662441424733,
        "gradePct": 1.1478085168528662,
        "smoothedEle": 219.48044796089866,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.04379,
        "lng": 120.550692,
        "ele": 220,
        "distanceKm": 24.481950399875135,
        "gradePct": 1.1334196374357686,
        "smoothedEle": 219.88766088755548,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.044095,
        "lng": 120.551016,
        "ele": 220.25,
        "distanceKm": 24.529376929346284,
        "gradePct": 1.0534392046672034,
        "smoothedEle": 220.10462697734437,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.044473,
        "lng": 120.551616,
        "ele": 227,
        "distanceKm": 24.60377983382595,
        "gradePct": 0.39500803443805094,
        "smoothedEle": 219.91435184107826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.044664,
        "lng": 120.551857,
        "ele": 226.25,
        "distanceKm": 24.63632452774884,
        "gradePct": -0.05445598540498528,
        "smoothedEle": 219.41649146916578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.044998,
        "lng": 120.55203,
        "ele": 222.5,
        "distanceKm": 24.677466535688637,
        "gradePct": -0.6522212476253367,
        "smoothedEle": 218.547617687709,
        "gradeBand": "descent"
      },
      {
        "lat": 23.045305,
        "lng": 120.552118,
        "ele": 219.25,
        "distanceKm": 24.71277098662565,
        "gradePct": -1.1212610961334417,
        "smoothedEle": 217.78613619746355,
        "gradeBand": "descent"
      },
      {
        "lat": 23.045695287533423,
        "lng": 120.55238255987483,
        "ele": 216.794723091535,
        "distanceKm": 24.763919581134562,
        "gradePct": -1.624132383313983,
        "smoothedEle": 216.76802415695397,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046069,
        "lng": 120.552677,
        "ele": 214.75,
        "distanceKm": 24.815246707672323,
        "gradePct": -1.8890619453782231,
        "smoothedEle": 215.96081065829395,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046348239082175,
        "lng": 120.5528839181688,
        "ele": 212.0714476530009,
        "distanceKm": 24.85282803175289,
        "gradePct": -1.9767689421898709,
        "smoothedEle": 215.11441780227713,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046628,
        "lng": 120.55309,
        "ele": 207.75,
        "distanceKm": 24.890409205085817,
        "gradePct": -1.9654836728681957,
        "smoothedEle": 214.33748998346988,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046951558185985,
        "lng": 120.5533136004767,
        "ele": 207.92559399194502,
        "distanceKm": 24.933045605479375,
        "gradePct": -1.9002144846183948,
        "smoothedEle": 213.5821412305702,
        "gradeBand": "descent"
      },
      {
        "lat": 23.04727722013057,
        "lng": 120.55353359551374,
        "ele": 209.51348467919198,
        "distanceKm": 24.97568365350616,
        "gradePct": -1.7208850822137751,
        "smoothedEle": 213.141242310437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.047606,
        "lng": 120.553748,
        "ele": 211.25,
        "distanceKm": 25.01831937903852,
        "gradePct": -1.4827905125707073,
        "smoothedEle": 212.9260280508011,
        "gradeBand": "descent"
      },
      {
        "lat": 23.04799,
        "lng": 120.554245,
        "ele": 215.5,
        "distanceKm": 25.08472114712503,
        "gradePct": -0.7726941227068692,
        "smoothedEle": 212.9096928102021,
        "gradeBand": "descent"
      },
      {
        "lat": 23.04828,
        "lng": 120.55443,
        "ele": 216.5,
        "distanceKm": 25.122112986017477,
        "gradePct": -0.28378158733822645,
        "smoothedEle": 213.20826092781175,
        "gradeBand": "descent"
      },
      {
        "lat": 23.048455,
        "lng": 120.554444,
        "ele": 215.5,
        "distanceKm": 25.14162477852749,
        "gradePct": 0.03790041735321394,
        "smoothedEle": 213.569229089247,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.048565,
        "lng": 120.554494,
        "ele": 215,
        "distanceKm": 25.154883037145346,
        "gradePct": 0.22908784987429068,
        "smoothedEle": 213.81450687367732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.048990852796724,
        "lng": 120.55489018835215,
        "ele": 215,
        "distanceKm": 25.21721733731501,
        "gradePct": 0.8258908308635314,
        "smoothedEle": 214.58337253785015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.049427,
        "lng": 120.555273,
        "ele": 215,
        "distanceKm": 25.279556578048897,
        "gradePct": 0.9077724502027312,
        "smoothedEle": 214.72650822615074,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.049718,
        "lng": 120.555547,
        "ele": 215.5,
        "distanceKm": 25.32237005163866,
        "gradePct": 0.6967256058843982,
        "smoothedEle": 214.60646785357247,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.050027,
        "lng": 120.55619,
        "ele": 217,
        "distanceKm": 25.396592189576445,
        "gradePct": -0.05849441522531172,
        "smoothedEle": 214.2119817509885,
        "gradeBand": "descent"
      },
      {
        "lat": 23.050288,
        "lng": 120.556706,
        "ele": 213,
        "distanceKm": 25.456838959679672,
        "gradePct": -0.30303493511228047,
        "smoothedEle": 214.06827695800814,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05054,
        "lng": 120.557182,
        "ele": 211,
        "distanceKm": 25.513027686207028,
        "gradePct": -0.34214357075937707,
        "smoothedEle": 213.94837482650286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05082,
        "lng": 120.557754,
        "ele": 212.5,
        "distanceKm": 25.579319372436878,
        "gradePct": -0.32872259795463893,
        "smoothedEle": 213.64634051685334,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05101,
        "lng": 120.558179,
        "ele": 213.75,
        "distanceKm": 25.627664721559864,
        "gradePct": -0.43622069559316556,
        "smoothedEle": 213.26542399193048,
        "gradeBand": "descent"
      },
      {
        "lat": 23.051167,
        "lng": 120.558496,
        "ele": 213.75,
        "distanceKm": 25.664498962983334,
        "gradePct": -0.5951916290549398,
        "smoothedEle": 212.8615478814359,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05143,
        "lng": 120.558897,
        "ele": 214,
        "distanceKm": 25.714883554225313,
        "gradePct": -0.6946682019423374,
        "smoothedEle": 212.55058282512803,
        "gradeBand": "descent"
      },
      {
        "lat": 23.051517,
        "lng": 120.558991,
        "ele": 214,
        "distanceKm": 25.72852492277062,
        "gradePct": -0.6983776883485884,
        "smoothedEle": 212.48101184554696,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05161,
        "lng": 120.559056,
        "ele": 214,
        "distanceKm": 25.740820015904728,
        "gradePct": -0.6899476972394349,
        "smoothedEle": 212.44185364240852,
        "gradeBand": "descent"
      },
      {
        "lat": 23.051913,
        "lng": 120.559123,
        "ele": 213.25,
        "distanceKm": 25.775202451908534,
        "gradePct": -0.6520538918137812,
        "smoothedEle": 212.36099000612649,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0523508,
        "lng": 120.5591428,
        "ele": 212.54999999999998,
        "distanceKm": 25.823925792605344,
        "gradePct": -0.5937342888909306,
        "smoothedEle": 212.10741470754758,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0527886,
        "lng": 120.55916260000001,
        "ele": 211.85000000000002,
        "distanceKm": 25.872649133028258,
        "gradePct": -0.5698500415912113,
        "smoothedEle": 211.67154634647102,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0532264,
        "lng": 120.5591824,
        "ele": 211.14999999999998,
        "distanceKm": 25.92137247317721,
        "gradePct": -0.7115503221848937,
        "smoothedEle": 211.09438869410357,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0536642,
        "lng": 120.5592022,
        "ele": 210.45000000000002,
        "distanceKm": 25.970095813052318,
        "gradePct": -0.9113585312442499,
        "smoothedEle": 210.55028318593284,
        "gradeBand": "descent"
      },
      {
        "lat": 23.054102,
        "lng": 120.559222,
        "ele": 209.75,
        "distanceKm": 26.018819152653517,
        "gradePct": -1.039177925958928,
        "smoothedEle": 210.05563580482902,
        "gradeBand": "descent"
      },
      {
        "lat": 23.054656,
        "lng": 120.5592565,
        "ele": 208.75,
        "distanceKm": 26.080522275570473,
        "gradePct": -0.9599690277587632,
        "smoothedEle": 209.65834612024582,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05521,
        "lng": 120.559291,
        "ele": 207.75,
        "distanceKm": 26.142225397656052,
        "gradePct": -0.6902238105833074,
        "smoothedEle": 209.481071341521,
        "gradeBand": "descent"
      },
      {
        "lat": 23.055589,
        "lng": 120.559386,
        "ele": 208.25,
        "distanceKm": 26.185474689858445,
        "gradePct": -0.4438204930840486,
        "smoothedEle": 209.5065133055072,
        "gradeBand": "descent"
      },
      {
        "lat": 23.056018407164885,
        "lng": 120.55964792863347,
        "ele": 208.736856196016,
        "distanceKm": 26.24022906952662,
        "gradePct": -0.059937361984040864,
        "smoothedEle": 209.79790842901193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.056447935861875,
        "lng": 120.55990962341468,
        "ele": 209.5681986332684,
        "distanceKm": 26.294983488521076,
        "gradePct": 0.37377416230087723,
        "smoothedEle": 210.3643469795126,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05687746793094,
        "lng": 120.56017131170734,
        "ele": 210.40909931663415,
        "distanceKm": 26.349737868188146,
        "gradePct": 0.8589696581438235,
        "smoothedEle": 211.20342996723525,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.057307,
        "lng": 120.560433,
        "ele": 211.25,
        "distanceKm": 26.40449220607971,
        "gradePct": 1.348496158919564,
        "smoothedEle": 212.30471417545908,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.057606,
        "lng": 120.560748,
        "ele": 212.75,
        "distanceKm": 26.45079605818979,
        "gradePct": 1.7310190566324823,
        "smoothedEle": 213.36926282855015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.057767272277616,
        "lng": 120.56115444154825,
        "ele": 214.3547538666784,
        "distanceKm": 26.496081721464467,
        "gradePct": 2.0799778168773106,
        "smoothedEle": 214.54113247390956,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05791351485174,
        "lng": 120.5615682943655,
        "ele": 215.65316924445224,
        "distanceKm": 26.541438954372175,
        "gradePct": 2.362628990972945,
        "smoothedEle": 215.80151132071964,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05805975742587,
        "lng": 120.56198214718276,
        "ele": 216.95158462222616,
        "distanceKm": 26.586796144335846,
        "gradePct": 2.5279713716976264,
        "smoothedEle": 217.00473272916062,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.058206,
        "lng": 120.562396,
        "ele": 218.25,
        "distanceKm": 26.63215329135237,
        "gradePct": 2.610143357176876,
        "smoothedEle": 218.16094303562053,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.058417983399504,
        "lng": 120.56293550730055,
        "ele": 219.92104031142097,
        "distanceKm": 26.69217332022195,
        "gradePct": 2.57918697902276,
        "smoothedEle": 219.59836765100778,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05863,
        "lng": 120.563475,
        "ele": 223,
        "distanceKm": 26.75219334530599,
        "gradePct": 2.330227925598416,
        "smoothedEle": 220.74725630505444,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.058789393101648,
        "lng": 120.5638622972733,
        "ele": 223.17477313777061,
        "distanceKm": 26.795601342515017,
        "gradePct": 2.0932157938631026,
        "smoothedEle": 221.41561981188238,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05895,
        "lng": 120.564249,
        "ele": 223,
        "distanceKm": 26.83900913041306,
        "gradePct": 1.8390045756148006,
        "smoothedEle": 222.00314324124605,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0590849958501,
        "lng": 120.56476331517538,
        "ele": 223.71300625053075,
        "distanceKm": 26.893728328540075,
        "gradePct": 1.5249978404932476,
        "smoothedEle": 222.67812892124786,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05922274942249,
        "lng": 120.56527676592228,
        "ele": 223.35617643829067,
        "distanceKm": 26.948447479332735,
        "gradePct": 1.2938788778253116,
        "smoothedEle": 223.26331160956101,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059358,
        "lng": 120.565791,
        "ele": 222.75,
        "distanceKm": 27.00316637411719,
        "gradePct": 1.0551691583113902,
        "smoothedEle": 223.62835066047643,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059466,
        "lng": 120.566245,
        "ele": 223,
        "distanceKm": 27.05114266440967,
        "gradePct": 0.8226514540033094,
        "smoothedEle": 223.7981186951938,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059581,
        "lng": 120.566784,
        "ele": 223.75,
        "distanceKm": 27.10775118269275,
        "gradePct": 0.5624616731060306,
        "smoothedEle": 223.95301679307872,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05968025659005,
        "lng": 120.56720415410935,
        "ele": 224.47274216055496,
        "distanceKm": 27.15213155547,
        "gradePct": 0.35379318473542426,
        "smoothedEle": 223.99547507734397,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059777,
        "lng": 120.567625,
        "ele": 225,
        "distanceKm": 27.19651189041007,
        "gradePct": 0.24512883403426233,
        "smoothedEle": 224.0742151362784,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059948,
        "lng": 120.568033,
        "ele": 225,
        "distanceKm": 27.242381117277976,
        "gradePct": 0.22761673221931827,
        "smoothedEle": 224.22234870712364,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.060241,
        "lng": 120.568606,
        "ele": 224.75,
        "distanceKm": 27.309449706956823,
        "gradePct": 0.29369641326172874,
        "smoothedEle": 224.54203458175374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.060534434981335,
        "lng": 120.5689979458204,
        "ele": 223.91308452095427,
        "distanceKm": 27.361147109204108,
        "gradePct": 0.380844002440854,
        "smoothedEle": 224.77315857287056,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06085436548601,
        "lng": 120.56936724646393,
        "ele": 224.32575285484452,
        "distanceKm": 27.41304231458376,
        "gradePct": 0.42119444419711427,
        "smoothedEle": 224.96998863408598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.061174295990682,
        "lng": 120.56973654710745,
        "ele": 224.73842118873478,
        "distanceKm": 27.464937454570535,
        "gradePct": 0.412277755952816,
        "smoothedEle": 225.154420158314,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06149422649536,
        "lng": 120.57010584775098,
        "ele": 225.15108952262506,
        "distanceKm": 27.516832529163924,
        "gradePct": 0.43828299989265124,
        "smoothedEle": 225.45160702403007,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.061814157000033,
        "lng": 120.57047514839451,
        "ele": 225.5637578565153,
        "distanceKm": 27.5687275383626,
        "gradePct": 0.5865156615861927,
        "smoothedEle": 225.97494122912642,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.062134087504706,
        "lng": 120.57084444903803,
        "ele": 225.97642619040556,
        "distanceKm": 27.620622482166052,
        "gradePct": 0.8933622159006692,
        "smoothedEle": 226.78365242594035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06245401800938,
        "lng": 120.57121374968156,
        "ele": 226.3890945242958,
        "distanceKm": 27.67251736057349,
        "gradePct": 1.1757944693491467,
        "smoothedEle": 227.54941684861666,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.062774,
        "lng": 120.571583,
        "ele": 227.25,
        "distanceKm": 27.724412350190086,
        "gradePct": 1.360274796186109,
        "smoothedEle": 228.2485951732645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063113,
        "lng": 120.571995,
        "ele": 229.5,
        "distanceKm": 27.78095980589519,
        "gradePct": 1.4508479747050325,
        "smoothedEle": 229.0672602140579,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063487,
        "lng": 120.572439,
        "ele": 232,
        "distanceKm": 27.84254604715575,
        "gradePct": 1.474741531142973,
        "smoothedEle": 230.05664113276282,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063795048410764,
        "lng": 120.57277351244348,
        "ele": 231.6259990912345,
        "distanceKm": 27.89096626990548,
        "gradePct": 1.5980913282365408,
        "smoothedEle": 230.99416064005902,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064104,
        "lng": 120.573107,
        "ele": 231.25,
        "distanceKm": 27.939383591063386,
        "gradePct": 1.793426841147599,
        "smoothedEle": 232.05219479695424,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064476499999998,
        "lng": 120.57353549999999,
        "ele": 232.25,
        "distanceKm": 27.999694792336513,
        "gradePct": 1.9960816508682695,
        "smoothedEle": 233.36040045021747,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064849,
        "lng": 120.573964,
        "ele": 233.25,
        "distanceKm": 28.060005905399578,
        "gradePct": 2.0424876023851013,
        "smoothedEle": 234.47967669266237,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065148506025995,
        "lng": 120.57432549395351,
        "ele": 235.398096497912,
        "distanceKm": 28.109774155591047,
        "gradePct": 1.8991787622639502,
        "smoothedEle": 235.20351540686335,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065448,
        "lng": 120.574687,
        "ele": 237.25,
        "distanceKm": 28.159542367227672,
        "gradePct": 1.692855660707514,
        "smoothedEle": 235.87516859008758,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06581033333333,
        "lng": 120.57508299999999,
        "ele": 237.91666666666666,
        "distanceKm": 28.216678773545237,
        "gradePct": 1.393063405839134,
        "smoothedEle": 236.4617223512183,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066172666666667,
        "lng": 120.575479,
        "ele": 238.58333333333334,
        "distanceKm": 28.273815102507065,
        "gradePct": 1.1932588285633343,
        "smoothedEle": 237.06703788838996,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066535,
        "lng": 120.575875,
        "ele": 239.25,
        "distanceKm": 28.330951354109498,
        "gradePct": 1.1193520562842605,
        "smoothedEle": 237.72801907559315,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06681,
        "lng": 120.576192,
        "ele": 238.75,
        "distanceKm": 28.37552491866286,
        "gradePct": 1.0078837057843835,
        "smoothedEle": 238.05501047292555,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067096,
        "lng": 120.576464,
        "ele": 237.5,
        "distanceKm": 28.417782347199818,
        "gradePct": 0.850994583661975,
        "smoothedEle": 238.17540303410982,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06737,
        "lng": 120.576653,
        "ele": 235.5,
        "distanceKm": 28.45386737963709,
        "gradePct": 0.6944497280700428,
        "smoothedEle": 238.24460653620216,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067866,
        "lng": 120.576967,
        "ele": 238.5,
        "distanceKm": 28.517693304506913,
        "gradePct": 0.41467023464351066,
        "smoothedEle": 238.40398369118765,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068334,
        "lng": 120.577282,
        "ele": 239.25,
        "distanceKm": 28.578902666837877,
        "gradePct": 0.2640780189378385,
        "smoothedEle": 238.59278980705716,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068741,
        "lng": 120.577666,
        "ele": 238.25,
        "distanceKm": 28.638831115111405,
        "gradePct": 0.360418379209507,
        "smoothedEle": 238.93660690198737,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.069101,
        "lng": 120.577954,
        "ele": 238.5,
        "distanceKm": 28.688535318190766,
        "gradePct": 0.5938535880452086,
        "smoothedEle": 239.51888163006527,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06963,
        "lng": 120.578256,
        "ele": 239.75,
        "distanceKm": 28.754977639133713,
        "gradePct": 1.1073147917154,
        "smoothedEle": 240.73362036071748,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070062058754566,
        "lng": 120.57850687282523,
        "ele": 240.62108619872734,
        "distanceKm": 28.809445981087926,
        "gradePct": 1.4238026710106675,
        "smoothedEle": 241.61562600983868,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070492,
        "lng": 120.578762,
        "ele": 242,
        "distanceKm": 28.863913926972444,
        "gradePct": 1.6061461395643506,
        "smoothedEle": 242.44273927010204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070885831496184,
        "lng": 120.57899355788408,
        "ele": 243.44506265994085,
        "distanceKm": 28.91370258343884,
        "gradePct": 1.655065969470448,
        "smoothedEle": 243.28913674663696,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.071276915748093,
        "lng": 120.57923077894203,
        "ele": 245.09753132997048,
        "distanceKm": 28.963502473091026,
        "gradePct": 1.619585981056153,
        "smoothedEle": 244.11083492589802,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.071668,
        "lng": 120.579468,
        "ele": 246.75,
        "distanceKm": 29.013302328360712,
        "gradePct": 1.5338406421571504,
        "smoothedEle": 244.7418671666377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.072016381135743,
        "lng": 120.57967246281657,
        "ele": 246.75,
        "distanceKm": 29.05732691626451,
        "gradePct": 1.4098565052460879,
        "smoothedEle": 245.16242640641164,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.072368587423828,
        "lng": 120.57986930854439,
        "ele": 246.75,
        "distanceKm": 29.101364467046952,
        "gradePct": 1.1737809452211434,
        "smoothedEle": 245.4269530580569,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.072720793711916,
        "lng": 120.58006615427219,
        "ele": 246.75,
        "distanceKm": 29.14540199371696,
        "gradePct": 0.9319943501552961,
        "smoothedEle": 245.6761657165365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073073,
        "lng": 120.580263,
        "ele": 246.75,
        "distanceKm": 29.18943949627486,
        "gradePct": 0.7310825841838975,
        "smoothedEle": 245.90165763291083,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073559,
        "lng": 120.580538,
        "ele": 245.75,
        "distanceKm": 29.250364413482625,
        "gradePct": 0.5128863422010587,
        "smoothedEle": 246.12168751134658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073886,
        "lng": 120.580719,
        "ele": 244.87499999999997,
        "distanceKm": 29.291168310050345,
        "gradePct": 0.44767077470585703,
        "smoothedEle": 246.2610478936519,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074213,
        "lng": 120.5809,
        "ele": 244,
        "distanceKm": 29.33197218618929,
        "gradePct": 0.4299466015958317,
        "smoothedEle": 246.46005832909736,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07465185214602,
        "lng": 120.58110636674878,
        "ele": 245.25008184426474,
        "distanceKm": 29.385141200228034,
        "gradePct": 0.4471976028335705,
        "smoothedEle": 246.77404362015173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075088901430682,
        "lng": 120.58131724449919,
        "ele": 246.50005456284316,
        "distanceKm": 29.438311807194488,
        "gradePct": 0.5305510661749812,
        "smoothedEle": 247.13926174709934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075525950715342,
        "lng": 120.5815281222496,
        "ele": 247.75002728142158,
        "distanceKm": 29.491482385717973,
        "gradePct": 0.6381822546868272,
        "smoothedEle": 247.53894422650146,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075963,
        "lng": 120.581739,
        "ele": 249,
        "distanceKm": 29.544652935798418,
        "gradePct": 0.7346878413538488,
        "smoothedEle": 248.00431914798435,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076337668178574,
        "lng": 120.58191339340509,
        "ele": 249.52503167555545,
        "distanceKm": 29.589973219152725,
        "gradePct": 0.8306402072525032,
        "smoothedEle": 248.46851419368886,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076711071887868,
        "lng": 120.58209102880276,
        "ele": 249.94477505380755,
        "distanceKm": 29.635296214328335,
        "gradePct": 0.8819961664692674,
        "smoothedEle": 248.88254058359598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07708447559716,
        "lng": 120.58226866420044,
        "ele": 250.3645184320596,
        "distanceKm": 29.680619189274136,
        "gradePct": 0.8864967518223241,
        "smoothedEle": 249.2302792376212,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.077458,
        "lng": 120.582446,
        "ele": 250,
        "distanceKm": 29.725942163130753,
        "gradePct": 0.8297186855521688,
        "smoothedEle": 249.49999059325333,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0779605,
        "lng": 120.582703,
        "ele": 249.625,
        "distanceKm": 29.787693685114736,
        "gradePct": 0.6383126466411988,
        "smoothedEle": 249.72179125680515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078463,
        "lng": 120.58296,
        "ele": 249.25,
        "distanceKm": 29.849445165273405,
        "gradePct": 0.2661160694626839,
        "smoothedEle": 249.52332996448067,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078938447858874,
        "lng": 120.58318703101659,
        "ele": 249.60735690802764,
        "distanceKm": 29.90718889234519,
        "gradePct": -0.185976874201075,
        "smoothedEle": 249.01643847308256,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07941472392944,
        "lng": 120.5834120155083,
        "ele": 249.80367845401383,
        "distanceKm": 29.964933155768396,
        "gradePct": -0.5659588400334619,
        "smoothedEle": 248.5081217372756,
        "gradeBand": "descent"
      },
      {
        "lat": 23.079891,
        "lng": 120.583637,
        "ele": 250,
        "distanceKm": 30.022677386699353,
        "gradePct": -0.7578568873610037,
        "smoothedEle": 248.09364437750108,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080144,
        "lng": 120.583857,
        "ele": 248.75,
        "distanceKm": 30.05870374225668,
        "gradePct": -0.7788048655866674,
        "smoothedEle": 247.88444570993892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080338,
        "lng": 120.584199,
        "ele": 245.25,
        "distanceKm": 30.099804581758093,
        "gradePct": -0.69577429045552,
        "smoothedEle": 247.6897115515318,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080515333333334,
        "lng": 120.58465,
        "ele": 245.625,
        "distanceKm": 30.149976740100303,
        "gradePct": -0.5803063163073736,
        "smoothedEle": 247.47916887380634,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080692666666668,
        "lng": 120.585101,
        "ele": 246,
        "distanceKm": 30.200148842491373,
        "gradePct": -0.41494670443224074,
        "smoothedEle": 247.4254566727796,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08087,
        "lng": 120.585552,
        "ele": 246.375,
        "distanceKm": 30.250320888932247,
        "gradePct": -0.15878356510297978,
        "smoothedEle": 247.6155563246425,
        "gradeBand": "descent"
      },
      {
        "lat": 23.081047333333334,
        "lng": 120.586003,
        "ele": 246.75,
        "distanceKm": 30.300492879419856,
        "gradePct": 0.1353251058550034,
        "smoothedEle": 247.95747338774493,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081224666666667,
        "lng": 120.586454,
        "ele": 247.125,
        "distanceKm": 30.35066481395514,
        "gradePct": 0.5996262196086114,
        "smoothedEle": 248.67768468929341,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081402,
        "lng": 120.586905,
        "ele": 247.5,
        "distanceKm": 30.40083669253771,
        "gradePct": 1.153403738686795,
        "smoothedEle": 249.73487038337703,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081529,
        "lng": 120.587263,
        "ele": 250.25,
        "distanceKm": 30.440086324557495,
        "gradePct": 1.6172790940154642,
        "smoothedEle": 250.8113362035825,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081601786469573,
        "lng": 120.58774409773721,
        "ele": 252.34466173927888,
        "distanceKm": 30.4899606500012,
        "gradePct": 2.2723942292710797,
        "smoothedEle": 252.4304857633422,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081648,
        "lng": 120.58823,
        "ele": 253.5,
        "distanceKm": 30.539930274034877,
        "gradePct": 2.977497247398656,
        "smoothedEle": 254.47858632243197,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081701674184657,
        "lng": 120.58868087717043,
        "ele": 254.75,
        "distanceKm": 30.586436666012194,
        "gradePct": 3.582950811985496,
        "smoothedEle": 256.59734501861874,
        "gradeBand": "hard"
      },
      {
        "lat": 23.08174,
        "lng": 120.589134,
        "ele": 256.25,
        "distanceKm": 30.632983702582408,
        "gradePct": 4.061650857083521,
        "smoothedEle": 258.7398404280261,
        "gradeBand": "hard"
      },
      {
        "lat": 23.081824,
        "lng": 120.589622,
        "ele": 260.25,
        "distanceKm": 30.683769249099768,
        "gradePct": 4.430845075291275,
        "smoothedEle": 261.0911746180743,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082012,
        "lng": 120.589987,
        "ele": 263.25,
        "distanceKm": 30.7265601766256,
        "gradePct": 4.551322192391938,
        "smoothedEle": 263.03323170765225,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082277,
        "lng": 120.590183,
        "ele": 267.25,
        "distanceKm": 30.7622009881628,
        "gradePct": 4.666569859412322,
        "smoothedEle": 264.826345047862,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082702338669293,
        "lng": 120.59039493108253,
        "ele": 269.61677132164596,
        "distanceKm": 30.814228405765597,
        "gradePct": 4.926170053794567,
        "smoothedEle": 267.72890028636726,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083138,
        "lng": 120.590583,
        "ele": 270.25,
        "distanceKm": 30.866351968169283,
        "gradePct": 5.314356447428271,
        "smoothedEle": 270.91347996279205,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083402,
        "lng": 120.590846,
        "ele": 271.25,
        "distanceKm": 30.906170443368023,
        "gradePct": 5.79384467355549,
        "smoothedEle": 273.695537373758,
        "gradeBand": "hard"
      },
      {
        "lat": 23.08349,
        "lng": 120.591227,
        "ele": 272.5,
        "distanceKm": 30.946353406925137,
        "gradePct": 6.248475283986942,
        "smoothedEle": 276.52599308254054,
        "gradeBand": "steep"
      },
      {
        "lat": 23.083321,
        "lng": 120.591607,
        "ele": 277.5,
        "distanceKm": 30.989528598681762,
        "gradePct": 6.6978822459294305,
        "smoothedEle": 279.7466883622412,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082893,
        "lng": 120.591967,
        "ele": 282,
        "distanceKm": 31.049703781377183,
        "gradePct": 7.172512361184001,
        "smoothedEle": 284.241354765574,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082726,
        "lng": 120.592255,
        "ele": 284.75,
        "distanceKm": 31.08452817715901,
        "gradePct": 7.410088424522113,
        "smoothedEle": 287.0036013958705,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082664,
        "lng": 120.592727,
        "ele": 291,
        "distanceKm": 31.133300089086223,
        "gradePct": 7.747277114277465,
        "smoothedEle": 291.1010820769498,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082449,
        "lng": 120.593068,
        "ele": 295.25,
        "distanceKm": 31.175588236554884,
        "gradePct": 8.127511193271658,
        "smoothedEle": 294.9618159232458,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082099499999998,
        "lng": 120.5932875,
        "ele": 300.125,
        "distanceKm": 31.220470976880137,
        "gradePct": 8.628199703235312,
        "smoothedEle": 299.3142675856704,
        "gradeBand": "steep"
      },
      {
        "lat": 23.08175,
        "lng": 120.593507,
        "ele": 305,
        "distanceKm": 31.265353746405378,
        "gradePct": 9.016228915845321,
        "smoothedEle": 303.5151568386469,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.081106,
        "lng": 120.593594,
        "ele": 309.5,
        "distanceKm": 31.33751427208407,
        "gradePct": 9.391581327925627,
        "smoothedEle": 310.2689822989556,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.080991,
        "lng": 120.593629,
        "ele": 310.75,
        "distanceKm": 31.350793464944275,
        "gradePct": 9.38961677122885,
        "smoothedEle": 311.4773888492341,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.080865,
        "lng": 120.593733,
        "ele": 313.5,
        "distanceKm": 31.36838539397145,
        "gradePct": 9.3348498540544,
        "smoothedEle": 312.97392574350226,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.080798,
        "lng": 120.59391,
        "ele": 316.75,
        "distanceKm": 31.387964299371532,
        "gradePct": 9.184239234369588,
        "smoothedEle": 314.53044872280884,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.080593,
        "lng": 120.594596,
        "ele": 321.25,
        "distanceKm": 31.461747686341997,
        "gradePct": 8.468576172511776,
        "smoothedEle": 320.1147930471646,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080691,
        "lng": 120.595239,
        "ele": 328,
        "distanceKm": 31.528419522095735,
        "gradePct": 7.461989112816182,
        "smoothedEle": 324.34174230730576,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080707,
        "lng": 120.59539,
        "ele": 329.5,
        "distanceKm": 31.54396808575373,
        "gradePct": 7.17809126462947,
        "smoothedEle": 325.2124618721534,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080561,
        "lng": 120.595753,
        "ele": 330.25,
        "distanceKm": 31.584494710065144,
        "gradePct": 6.471652150089249,
        "smoothedEle": 327.19792067312943,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080512,
        "lng": 120.596137,
        "ele": 330.75,
        "distanceKm": 31.6241518510666,
        "gradePct": 5.841939712952033,
        "smoothedEle": 328.9532068749169,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080636,
        "lng": 120.596457,
        "ele": 332.5,
        "distanceKm": 31.65967146223326,
        "gradePct": 5.123565137987176,
        "smoothedEle": 330.20478293159846,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080902647919135,
        "lng": 120.5967372328839,
        "ele": 334.0095997872024,
        "distanceKm": 31.700913075832407,
        "gradePct": 4.415071072302355,
        "smoothedEle": 331.4279943764768,
        "gradeBand": "hard"
      },
      {
        "lat": 23.081184,
        "lng": 120.597002,
        "ele": 334.75,
        "distanceKm": 31.742292995233534,
        "gradePct": 3.743256416292822,
        "smoothedEle": 332.60516963560815,
        "gradeBand": "hard"
      },
      {
        "lat": 23.081446,
        "lng": 120.597464,
        "ele": 333,
        "distanceKm": 31.797810765465194,
        "gradePct": 2.9415487870186148,
        "smoothedEle": 333.67040738908906,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081547,
        "lng": 120.5979035,
        "ele": 333.5,
        "distanceKm": 31.844150360823832,
        "gradePct": 2.5102807717619076,
        "smoothedEle": 334.6784398706147,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081648,
        "lng": 120.598343,
        "ele": 334,
        "distanceKm": 31.890489923415966,
        "gradePct": 2.5263668167639626,
        "smoothedEle": 336.171581053452,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081753,
        "lng": 120.598829,
        "ele": 334.5,
        "distanceKm": 31.94155718327181,
        "gradePct": 2.8872348632934393,
        "smoothedEle": 338.3587069957417,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081829,
        "lng": 120.599181,
        "ele": 335.75,
        "distanceKm": 31.978542891194003,
        "gradePct": 3.5552163209374736,
        "smoothedEle": 340.41114097753746,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082098794603887,
        "lng": 120.59961515564244,
        "ele": 338.1268131695038,
        "distanceKm": 32.0321371808115,
        "gradePct": 4.781593362722407,
        "smoothedEle": 343.9803020081963,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082415,
        "lng": 120.600017,
        "ele": 341.75,
        "distanceKm": 32.086229288275476,
        "gradePct": 5.962870063529799,
        "smoothedEle": 347.96003611700536,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082559,
        "lng": 120.600537,
        "ele": 350.5,
        "distanceKm": 32.14177937157725,
        "gradePct": 7.173431349278073,
        "smoothedEle": 352.71789950638095,
        "gradeBand": "steep"
      },
      {
        "lat": 23.0826,
        "lng": 120.600892,
        "ele": 356.5,
        "distanceKm": 32.178378404060275,
        "gradePct": 7.922640359964077,
        "smoothedEle": 356.2472938748066,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082559,
        "lng": 120.60127,
        "ele": 363,
        "distanceKm": 32.21731295119471,
        "gradePct": 8.560891734664857,
        "smoothedEle": 360.1148522660137,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082391,
        "lng": 120.601649,
        "ele": 368.75,
        "distanceKm": 32.260347928271976,
        "gradePct": 9.163954432420878,
        "smoothedEle": 364.38376827257594,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.082073,
        "lng": 120.601843,
        "ele": 369,
        "distanceKm": 32.300896060335646,
        "gradePct": 9.64958976036653,
        "smoothedEle": 368.515424335866,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.081998,
        "lng": 120.601931,
        "ele": 369.75,
        "distanceKm": 32.31316724747515,
        "gradePct": 9.78300063002749,
        "smoothedEle": 369.83327297856897,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.081973,
        "lng": 120.601995,
        "ele": 370.25,
        "distanceKm": 32.32027976883254,
        "gradePct": 9.84292370219413,
        "smoothedEle": 370.5623064177016,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.081967,
        "lng": 120.602186,
        "ele": 373.25,
        "distanceKm": 32.33982918609932,
        "gradePct": 9.989766117449477,
        "smoothedEle": 372.5303983988182,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.082126,
        "lng": 120.602755,
        "ele": 381.75,
        "distanceKm": 32.40066002807378,
        "gradePct": 9.727556877182653,
        "smoothedEle": 377.9157499758957,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.08215,
        "lng": 120.603114,
        "ele": 384.25,
        "distanceKm": 32.43748013324154,
        "gradePct": 9.543657732901757,
        "smoothedEle": 381.2026801543617,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.082045,
        "lng": 120.603529,
        "ele": 385,
        "distanceKm": 32.481508120833524,
        "gradePct": 9.381165769167021,
        "smoothedEle": 385.30221979592005,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.08185,
        "lng": 120.603812,
        "ele": 387.5,
        "distanceKm": 32.517677170492405,
        "gradePct": 8.928852721593772,
        "smoothedEle": 388.1532455310251,
        "gradeBand": "steep"
      },
      {
        "lat": 23.08168,
        "lng": 120.604192,
        "ele": 393,
        "distanceKm": 32.56090130231058,
        "gradePct": 8.458529708101956,
        "smoothedEle": 391.3129712714744,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081584,
        "lng": 120.604618,
        "ele": 390.25,
        "distanceKm": 32.605766783077705,
        "gradePct": 7.906019618305181,
        "smoothedEle": 394.18366914712203,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081554,
        "lng": 120.604706,
        "ele": 390,
        "distanceKm": 32.61536683838554,
        "gradePct": 7.7679229022060134,
        "smoothedEle": 394.76447249324616,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081498,
        "lng": 120.604771,
        "ele": 391,
        "distanceKm": 32.62447644766791,
        "gradePct": 7.600301101287932,
        "smoothedEle": 395.2424435611624,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081391,
        "lng": 120.604855,
        "ele": 393.25,
        "distanceKm": 32.639152736607656,
        "gradePct": 7.257552085764825,
        "smoothedEle": 395.8735239855716,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081163,
        "lng": 120.604956,
        "ele": 400,
        "distanceKm": 32.66652958443904,
        "gradePct": 6.60497707274674,
        "smoothedEle": 397.1174905347865,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080855,
        "lng": 120.605268,
        "ele": 408.5,
        "distanceKm": 32.7133435416122,
        "gradePct": 5.770756784399285,
        "smoothedEle": 399.3531607559248,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080731,
        "lng": 120.605782,
        "ele": 406.5,
        "distanceKm": 32.76770060931071,
        "gradePct": 5.035408756409239,
        "smoothedEle": 401.81883942517305,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080834,
        "lng": 120.606254,
        "ele": 404.25,
        "distanceKm": 32.81732329077179,
        "gradePct": 4.439121132937935,
        "smoothedEle": 403.7453676399862,
        "gradeBand": "hard"
      },
      {
        "lat": 23.08079,
        "lng": 120.606589,
        "ele": 403.5,
        "distanceKm": 32.85193935713135,
        "gradePct": 4.376403289417761,
        "smoothedEle": 405.2073371253869,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080488,
        "lng": 120.606805,
        "ele": 403.25,
        "distanceKm": 32.89213752306908,
        "gradePct": 4.320490030932542,
        "smoothedEle": 406.9814158308722,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080372,
        "lng": 120.60681,
        "ele": 404.5,
        "distanceKm": 32.90504628916886,
        "gradePct": 4.26522363735216,
        "smoothedEle": 407.4873603872986,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080286,
        "lng": 120.606769,
        "ele": 406.25,
        "distanceKm": 32.915488367329125,
        "gradePct": 4.164643432503365,
        "smoothedEle": 407.77973857578615,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080237,
        "lng": 120.606703,
        "ele": 407.5,
        "distanceKm": 32.924164128287444,
        "gradePct": 4.089334469380986,
        "smoothedEle": 408.02265988261905,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080002,
        "lng": 120.606306,
        "ele": 409.5,
        "distanceKm": 32.972455699047636,
        "gradePct": 3.3753289486818208,
        "smoothedEle": 408.7541067445274,
        "gradeBand": "hard"
      },
      {
        "lat": 23.079931,
        "lng": 120.606247,
        "ele": 408.75,
        "distanceKm": 32.98239323850397,
        "gradePct": 3.202298791674775,
        "smoothedEle": 408.7938569023528,
        "gradeBand": "hard"
      },
      {
        "lat": 23.079845,
        "lng": 120.606231,
        "ele": 408.25,
        "distanceKm": 32.99209507084966,
        "gradePct": 3.036518703575339,
        "smoothedEle": 408.83895621328827,
        "gradeBand": "hard"
      },
      {
        "lat": 23.079755,
        "lng": 120.606264,
        "ele": 407.75,
        "distanceKm": 33.00265664214384,
        "gradePct": 2.873746189969909,
        "smoothedEle": 408.92344878364173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.079605,
        "lng": 120.606408,
        "ele": 408.25,
        "distanceKm": 33.024909399457485,
        "gradePct": 2.5115442024944272,
        "smoothedEle": 409.08884656237876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.079323,
        "lng": 120.606703,
        "ele": 412.5,
        "distanceKm": 33.06842858626218,
        "gradePct": 1.8366975293774623,
        "smoothedEle": 409.608456685707,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078837,
        "lng": 120.606744,
        "ele": 413.25,
        "distanceKm": 33.12263190403635,
        "gradePct": 1.5291290166587213,
        "smoothedEle": 411.0380156369059,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078498,
        "lng": 120.606839,
        "ele": 414,
        "distanceKm": 33.16155958815981,
        "gradePct": 2.004019725515775,
        "smoothedEle": 412.5971085711776,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078159,
        "lng": 120.60682,
        "ele": 413.25,
        "distanceKm": 33.1993047954655,
        "gradePct": 2.6965480616006987,
        "smoothedEle": 414.28973013341647,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.077771,
        "lng": 120.606712,
        "ele": 410.5,
        "distanceKm": 33.24384058584788,
        "gradePct": 3.5108928086548086,
        "smoothedEle": 416.3366666444225,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077441,
        "lng": 120.606749,
        "ele": 410,
        "distanceKm": 33.280729653522634,
        "gradePct": 4.096042178064634,
        "smoothedEle": 418.1249695368732,
        "gradeBand": "hard"
      },
      {
        "lat": 23.0769375,
        "lng": 120.606988,
        "ele": 416.8750000000004,
        "distanceKm": 33.34182192588156,
        "gradePct": 4.4650871397590715,
        "smoothedEle": 420.73676960825713,
        "gradeBand": "hard"
      },
      {
        "lat": 23.076434,
        "lng": 120.607227,
        "ele": 423.75,
        "distanceKm": 33.40291423487395,
        "gradePct": 4.536220647155396,
        "smoothedEle": 423.52806706460666,
        "gradeBand": "hard"
      },
      {
        "lat": 23.07625,
        "lng": 120.607521,
        "ele": 431.75,
        "distanceKm": 33.43928927011693,
        "gradePct": 4.639098603057837,
        "smoothedEle": 425.4056780639426,
        "gradeBand": "hard"
      },
      {
        "lat": 23.076187,
        "lng": 120.607615,
        "ele": 431.5,
        "distanceKm": 33.45118638222807,
        "gradePct": 4.695519177183532,
        "smoothedEle": 426.0838134542778,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075945,
        "lng": 120.607725,
        "ele": 432.5,
        "distanceKm": 33.48035366206536,
        "gradePct": 4.8845102034553225,
        "smoothedEle": 427.8757626842471,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075356,
        "lng": 120.607826,
        "ele": 432,
        "distanceKm": 33.546657536822124,
        "gradePct": 6.01027566353622,
        "smoothedEle": 432.97825919647755,
        "gradeBand": "steep"
      },
      {
        "lat": 23.07492321458156,
        "lng": 120.60798505141257,
        "ele": 434.3708438417585,
        "distanceKm": 33.597457323883496,
        "gradePct": 6.444948282050738,
        "smoothedEle": 436.1686382714186,
        "gradeBand": "steep"
      },
      {
        "lat": 23.07449910729078,
        "lng": 120.6081730257063,
        "ele": 438.060421920879,
        "distanceKm": 33.64838583872509,
        "gradePct": 6.335762297168822,
        "smoothedEle": 438.59570706894544,
        "gradeBand": "steep"
      },
      {
        "lat": 23.074075,
        "lng": 120.608361,
        "ele": 441.75,
        "distanceKm": 33.699314376461736,
        "gradePct": 5.588039099277699,
        "smoothedEle": 440.5109860599405,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073781,
        "lng": 120.608686,
        "ele": 447,
        "distanceKm": 33.74594172166973,
        "gradePct": 4.755941708384217,
        "smoothedEle": 442.43505617475506,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073753,
        "lng": 120.608749,
        "ele": 448,
        "distanceKm": 33.75309923864012,
        "gradePct": 4.660322829644533,
        "smoothedEle": 442.70346306114465,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073742,
        "lng": 120.608859,
        "ele": 449.5,
        "distanceKm": 33.76441847506985,
        "gradePct": 4.517573942405072,
        "smoothedEle": 443.12884730288573,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073759,
        "lng": 120.608953,
        "ele": 450,
        "distanceKm": 33.7742186729023,
        "gradePct": 4.329513189616985,
        "smoothedEle": 443.3682076310651,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073832,
        "lng": 120.609081,
        "ele": 449.75,
        "distanceKm": 33.78962488785426,
        "gradePct": 4.0113517342389855,
        "smoothedEle": 443.6994412525322,
        "gradeBand": "hard"
      },
      {
        "lat": 23.074135,
        "lng": 120.609247,
        "ele": 445.25,
        "distanceKm": 33.827354670703016,
        "gradePct": 3.356895515217454,
        "smoothedEle": 444.30722870588465,
        "gradeBand": "hard"
      },
      {
        "lat": 23.074461,
        "lng": 120.609495,
        "ele": 444.25,
        "distanceKm": 33.87160035026446,
        "gradePct": 2.7512057885841905,
        "smoothedEle": 444.97115109930303,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074574,
        "lng": 120.609687,
        "ele": 444,
        "distanceKm": 33.8949169832855,
        "gradePct": 2.4677933751752836,
        "smoothedEle": 445.2811992272295,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074595,
        "lng": 120.609905,
        "ele": 445.75,
        "distanceKm": 33.917340075700466,
        "gradePct": 2.2296708500977016,
        "smoothedEle": 445.71415542283387,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074523,
        "lng": 120.610304,
        "ele": 452.5,
        "distanceKm": 33.958935128099085,
        "gradePct": 1.8192029452686453,
        "smoothedEle": 446.56118546015824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074572,
        "lng": 120.610507,
        "ele": 453.5,
        "distanceKm": 33.980404698589716,
        "gradePct": 1.805837893142697,
        "smoothedEle": 447.11288296962994,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074618,
        "lng": 120.610558,
        "ele": 452.75,
        "distanceKm": 33.987711039748525,
        "gradePct": 1.7967049666942247,
        "smoothedEle": 447.25170345164736,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074698,
        "lng": 120.610616,
        "ele": 451.25,
        "distanceKm": 33.998403855074315,
        "gradePct": 1.813647396474411,
        "smoothedEle": 447.46815605182275,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075009,
        "lng": 120.61069,
        "ele": 442.75,
        "distanceKm": 34.03380439798089,
        "gradePct": 1.8268673785220555,
        "smoothedEle": 448.0577439489257,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075203,
        "lng": 120.610738,
        "ele": 440.25,
        "distanceKm": 34.05592804766288,
        "gradePct": 1.8447889310785421,
        "smoothedEle": 448.4255604036088,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075283,
        "lng": 120.610804,
        "ele": 439.75,
        "distanceKm": 34.06709573541315,
        "gradePct": 1.8983611679231855,
        "smoothedEle": 448.70028006325066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075316,
        "lng": 120.610875,
        "ele": 439.75,
        "distanceKm": 34.07523322108775,
        "gradePct": 1.9706105767898239,
        "smoothedEle": 448.960679604838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075179,
        "lng": 120.611373,
        "ele": 444.5,
        "distanceKm": 34.12840673122193,
        "gradePct": 2.3481076429301546,
        "smoothedEle": 450.6357289928855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075178,
        "lng": 120.611821,
        "ele": 449,
        "distanceKm": 34.17423660088093,
        "gradePct": 2.480545701704749,
        "smoothedEle": 451.9154745024622,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075381,
        "lng": 120.612182,
        "ele": 456.5,
        "distanceKm": 34.21751855723575,
        "gradePct": 2.3711771255633725,
        "smoothedEle": 452.528861269511,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075817,
        "lng": 120.61218,
        "ele": 457.5,
        "distanceKm": 34.26600004392747,
        "gradePct": 2.2655228164947765,
        "smoothedEle": 453.20437222129095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07601,
        "lng": 120.612223,
        "ele": 457.75,
        "distanceKm": 34.287906870881926,
        "gradePct": 2.3802698306966708,
        "smoothedEle": 454.12045921255975,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076074,
        "lng": 120.612266,
        "ele": 458.25,
        "distanceKm": 34.296273104901424,
        "gradePct": 2.441298300820784,
        "smoothedEle": 454.50606571233976,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076336,
        "lng": 120.612522,
        "ele": 461.25,
        "distanceKm": 34.33544657836595,
        "gradePct": 2.936021904290457,
        "smoothedEle": 456.70435229945986,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076724,
        "lng": 120.612737,
        "ele": 459,
        "distanceKm": 34.38387293842342,
        "gradePct": 3.69165887336519,
        "smoothedEle": 459.4353572852766,
        "gradeBand": "hard"
      },
      {
        "lat": 23.076932,
        "lng": 120.613075,
        "ele": 458.25,
        "distanceKm": 34.425471779926355,
        "gradePct": 4.345987198478038,
        "smoothedEle": 461.33165093629606,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077114,
        "lng": 120.613367,
        "ele": 456.75,
        "distanceKm": 34.46155250468784,
        "gradePct": 4.829925796221021,
        "smoothedEle": 462.80225456175975,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077159,
        "lng": 120.61376,
        "ele": 460.25,
        "distanceKm": 34.50206543334402,
        "gradePct": 4.741547993081259,
        "smoothedEle": 464.3142081342003,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077140500000002,
        "lng": 120.614172,
        "ele": 465.37499999999955,
        "distanceKm": 34.54426197630956,
        "gradePct": 4.3948734318791995,
        "smoothedEle": 465.99124360495176,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077122,
        "lng": 120.614584,
        "ele": 470.5,
        "distanceKm": 34.58645852506632,
        "gradePct": 4.161956217611928,
        "smoothedEle": 467.8771343378298,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077165,
        "lng": 120.614948,
        "ele": 471.5,
        "distanceKm": 34.62400036794666,
        "gradePct": 4.140971668446068,
        "smoothedEle": 469.5465195880689,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077278,
        "lng": 120.615284,
        "ele": 469.5,
        "distanceKm": 34.66059680927379,
        "gradePct": 4.145239116641902,
        "smoothedEle": 471.0537798873615,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077303,
        "lng": 120.615858,
        "ele": 474.75,
        "distanceKm": 34.719381001114215,
        "gradePct": 4.113295520765972,
        "smoothedEle": 473.22897928021445,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077368,
        "lng": 120.6163,
        "ele": 477.5,
        "distanceKm": 34.76517025029577,
        "gradePct": 4.083057689031249,
        "smoothedEle": 475.09181266021795,
        "gradeBand": "hard"
      },
      {
        "lat": 23.07745,
        "lng": 120.617004,
        "ele": 483,
        "distanceKm": 34.8377621259571,
        "gradePct": 4.71498049959526,
        "smoothedEle": 479.5432720769618,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077616,
        "lng": 120.617293,
        "ele": 482.25,
        "distanceKm": 34.87261506588376,
        "gradePct": 4.947974252356986,
        "smoothedEle": 481.39444156517,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077928,
        "lng": 120.617425,
        "ele": 477,
        "distanceKm": 34.90984314360334,
        "gradePct": 5.057351858891322,
        "smoothedEle": 482.99075236788667,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078169,
        "lng": 120.617805,
        "ele": 475.5,
        "distanceKm": 34.95705768670029,
        "gradePct": 5.212528984981486,
        "smoothedEle": 485.18682909132235,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078199,
        "lng": 120.618036,
        "ele": 476.75,
        "distanceKm": 34.980922411285725,
        "gradePct": 5.119388178721051,
        "smoothedEle": 486.2965387845451,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078181,
        "lng": 120.618119,
        "ele": 478.25,
        "distanceKm": 34.989645719667,
        "gradePct": 5.139785965136054,
        "smoothedEle": 486.872262720711,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078079,
        "lng": 120.618287,
        "ele": 484,
        "distanceKm": 35.010236724012856,
        "gradePct": 5.1540013345533975,
        "smoothedEle": 488.1633694733628,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077725,
        "lng": 120.618515,
        "ele": 500.25,
        "distanceKm": 35.05599085142016,
        "gradePct": 5.33945708970351,
        "smoothedEle": 491.1903817789605,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077677,
        "lng": 120.618645,
        "ele": 503,
        "distanceKm": 35.07032050894864,
        "gradePct": 5.392378480863821,
        "smoothedEle": 492.0573260594334,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077688,
        "lng": 120.618709,
        "ele": 502.75,
        "distanceKm": 35.07698076968393,
        "gradePct": 5.439316155262625,
        "smoothedEle": 492.4602718339183,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077713,
        "lng": 120.618795,
        "ele": 502,
        "distanceKm": 35.08620702846531,
        "gradePct": 5.492390948569728,
        "smoothedEle": 492.96203616788307,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077874,
        "lng": 120.61894,
        "ele": 495.75,
        "distanceKm": 35.10945598515553,
        "gradePct": 5.5725546454503165,
        "smoothedEle": 494.1192606079015,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078066,
        "lng": 120.619326,
        "ele": 490.75,
        "distanceKm": 35.15434446472006,
        "gradePct": 5.831432699732774,
        "smoothedEle": 496.7234951622451,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078087,
        "lng": 120.619859,
        "ele": 498,
        "distanceKm": 35.20891837797275,
        "gradePct": 6.124993696177084,
        "smoothedEle": 500.33069331778495,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077946,
        "lng": 120.620274,
        "ele": 508.5,
        "distanceKm": 35.25417400455778,
        "gradePct": 6.210123978713281,
        "smoothedEle": 503.4904303550099,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077915,
        "lng": 120.620792,
        "ele": 513.25,
        "distanceKm": 35.30727555037187,
        "gradePct": 6.377249425387641,
        "smoothedEle": 506.7652276025967,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077872,
        "lng": 120.621255,
        "ele": 507.75,
        "distanceKm": 35.35487953886622,
        "gradePct": 6.2182478239063785,
        "smoothedEle": 509.1953578628871,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077565,
        "lng": 120.621589,
        "ele": 511.25,
        "distanceKm": 35.40317772863135,
        "gradePct": 6.549277266306085,
        "smoothedEle": 513.0498053937049,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077405,
        "lng": 120.621612,
        "ele": 510.75,
        "distanceKm": 35.421123843587836,
        "gradePct": 6.772562911162498,
        "smoothedEle": 514.7280018336386,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077277,
        "lng": 120.621607,
        "ele": 508.25,
        "distanceKm": 35.43536600139293,
        "gradePct": 7.035174396707802,
        "smoothedEle": 516.2476088604267,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077143,
        "lng": 120.621516,
        "ele": 508,
        "distanceKm": 35.45293506872449,
        "gradePct": 7.30167507557898,
        "smoothedEle": 518.0072783022522,
        "gradeBand": "steep"
      },
      {
        "lat": 23.076731,
        "lng": 120.620966,
        "ele": 521.75,
        "distanceKm": 35.52549090281949,
        "gradePct": 8.532504176975115,
        "smoothedEle": 524.7601092840745,
        "gradeBand": "steep"
      },
      {
        "lat": 23.076357,
        "lng": 120.62068,
        "ele": 525.75,
        "distanceKm": 35.57633824169361,
        "gradePct": 8.293626888662113,
        "smoothedEle": 527.4951280829562,
        "gradeBand": "steep"
      },
      {
        "lat": 23.076037,
        "lng": 120.6204765,
        "ele": 531.6250000000006,
        "distanceKm": 35.61756300460588,
        "gradePct": 7.801957114809059,
        "smoothedEle": 529.9989310513369,
        "gradeBand": "steep"
      },
      {
        "lat": 23.075717,
        "lng": 120.620273,
        "ele": 537.5,
        "distanceKm": 35.65878779253181,
        "gradePct": 6.560214327085383,
        "smoothedEle": 531.6724247609534,
        "gradeBand": "steep"
      },
      {
        "lat": 23.0755,
        "lng": 120.620224,
        "ele": 546,
        "distanceKm": 35.683432283878915,
        "gradePct": 5.855938322105518,
        "smoothedEle": 532.5575557714669,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075412,
        "lng": 120.620227,
        "ele": 548.5,
        "distanceKm": 35.69322226237194,
        "gradePct": 5.596157228442087,
        "smoothedEle": 532.949154911188,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075191,
        "lng": 120.620315,
        "ele": 552.25,
        "distanceKm": 35.719393386180165,
        "gradePct": 4.908006439581059,
        "smoothedEle": 534.0086212890778,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075138,
        "lng": 120.620348,
        "ele": 553,
        "distanceKm": 35.72618513263315,
        "gradePct": 4.743117963923385,
        "smoothedEle": 534.2836870204236,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075089,
        "lng": 120.6204,
        "ele": 553,
        "distanceKm": 35.7337998646994,
        "gradePct": 4.6965107844400125,
        "smoothedEle": 534.6000601799149,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075042,
        "lng": 120.620498,
        "ele": 551.75,
        "distanceKm": 35.74510555956012,
        "gradePct": 4.550943263221135,
        "smoothedEle": 534.917045221304,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075042,
        "lng": 120.620584,
        "ele": 549.25,
        "distanceKm": 35.75390324078738,
        "gradePct": 4.378117968018154,
        "smoothedEle": 535.0446115990993,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075085,
        "lng": 120.620972,
        "ele": 539.75,
        "distanceKm": 35.79388205081203,
        "gradePct": 3.6062586397109784,
        "smoothedEle": 535.7731758407675,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075062,
        "lng": 120.621512,
        "ele": 538.75,
        "distanceKm": 35.84918246199783,
        "gradePct": 2.9062745160059236,
        "smoothedEle": 537.0950515875123,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075198,
        "lng": 120.622029,
        "ele": 528.25,
        "distanceKm": 35.90419035827434,
        "gradePct": 2.7726632507738778,
        "smoothedEle": 538.9384947811801,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075156,
        "lng": 120.622513,
        "ele": 528.25,
        "distanceKm": 35.953922607027565,
        "gradePct": 2.7346227482483028,
        "smoothedEle": 540.5142100213104,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07506,
        "lng": 120.62269,
        "ele": 528.25,
        "distanceKm": 35.97494182936492,
        "gradePct": 2.750110865326935,
        "smoothedEle": 540.9282355201465,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074996,
        "lng": 120.622755,
        "ele": 529.25,
        "distanceKm": 35.98468138922577,
        "gradePct": 2.841875363463276,
        "smoothedEle": 541.289255918485,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074867,
        "lng": 120.622798,
        "ele": 529,
        "distanceKm": 35.999684885822596,
        "gradePct": 2.9944954961586205,
        "smoothedEle": 541.9008751482374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074484,
        "lng": 120.622798,
        "ele": 532.25,
        "distanceKm": 36.042272601551964,
        "gradePct": 3.7667777774381683,
        "smoothedEle": 544.4634369973406,
        "gradeBand": "hard"
      },
      {
        "lat": 23.074258,
        "lng": 120.622723,
        "ele": 536.5,
        "distanceKm": 36.06854782912054,
        "gradePct": 4.223284899510472,
        "smoothedEle": 546.1906001083479,
        "gradeBand": "hard"
      },
      {
        "lat": 23.07416,
        "lng": 120.622677,
        "ele": 539,
        "distanceKm": 36.080417597768395,
        "gradePct": 4.365565842021619,
        "smoothedEle": 546.8729456881748,
        "gradeBand": "hard"
      },
      {
        "lat": 23.07405,
        "lng": 120.622489,
        "ele": 544.25,
        "distanceKm": 36.103209898256196,
        "gradePct": 4.513575193431044,
        "smoothedEle": 547.9327876608577,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073988,
        "lng": 120.62198,
        "ele": 557.25,
        "distanceKm": 36.15573469604437,
        "gradePct": 4.924578280403055,
        "smoothedEle": 550.3990601509403,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073693,
        "lng": 120.621732,
        "ele": 561.75,
        "distanceKm": 36.197203461596075,
        "gradePct": 5.301798558334478,
        "smoothedEle": 552.4033167266412,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073221,
        "lng": 120.621509,
        "ele": 572.5,
        "distanceKm": 36.254431121434656,
        "gradePct": 5.227945847728204,
        "smoothedEle": 555.7185509629383,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073157,
        "lng": 120.621509,
        "ele": 575.5,
        "distanceKm": 36.261547606569806,
        "gradePct": 5.223556695985774,
        "smoothedEle": 556.1775642541554,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073062,
        "lng": 120.621586,
        "ele": 576.75,
        "distanceKm": 36.274724747138784,
        "gradePct": 5.286051114673437,
        "smoothedEle": 557.1177886777696,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073007,
        "lng": 120.621699,
        "ele": 575.25,
        "distanceKm": 36.28780273686659,
        "gradePct": 5.414985646101379,
        "smoothedEle": 558.0463259484436,
        "gradeBand": "hard"
      },
      {
        "lat": 23.072971,
        "lng": 120.621844,
        "ele": 572.25,
        "distanceKm": 36.303166905920556,
        "gradePct": 5.6031967170124295,
        "smoothedEle": 559.1371819512752,
        "gradeBand": "hard"
      },
      {
        "lat": 23.072883,
        "lng": 120.622264,
        "ele": 562,
        "distanceKm": 36.34723316132253,
        "gradePct": 6.164977813898387,
        "smoothedEle": 562.329830972876,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072709,
        "lng": 120.622753,
        "ele": 552.75,
        "distanceKm": 36.400869245777976,
        "gradePct": 6.435102790610834,
        "smoothedEle": 565.4858834852549,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072665,
        "lng": 120.62284,
        "ele": 551.75,
        "distanceKm": 36.41102551422441,
        "gradePct": 6.362586864854701,
        "smoothedEle": 565.9292106363931,
        "gradeBand": "steep"
      },
      {
        "lat": 23.0726,
        "lng": 120.622911,
        "ele": 551.75,
        "distanceKm": 36.42127223828439,
        "gradePct": 6.289425084512199,
        "smoothedEle": 566.3764862287984,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072544,
        "lng": 120.622935,
        "ele": 552.75,
        "distanceKm": 36.427965716776534,
        "gradePct": 6.234898665863536,
        "smoothedEle": 566.6551907997136,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072457,
        "lng": 120.62295,
        "ele": 553.25,
        "distanceKm": 36.43776063635455,
        "gradePct": 6.120885638941358,
        "smoothedEle": 566.9945905818794,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072373,
        "lng": 120.622935,
        "ele": 552.75,
        "distanceKm": 36.4472262342281,
        "gradePct": 5.999535804340297,
        "smoothedEle": 567.3002389357473,
        "gradeBand": "hard"
      },
      {
        "lat": 23.072051,
        "lng": 120.622605,
        "ele": 561.25,
        "distanceKm": 36.49643672199063,
        "gradePct": 4.931708237198323,
        "smoothedEle": 568.5227553666468,
        "gradeBand": "hard"
      },
      {
        "lat": 23.071746,
        "lng": 120.622418,
        "ele": 567.75,
        "distanceKm": 36.535374637002356,
        "gradePct": 3.902152562556354,
        "smoothedEle": 569.2749728738148,
        "gradeBand": "hard"
      },
      {
        "lat": 23.071185,
        "lng": 120.622106,
        "ele": 578.75,
        "distanceKm": 36.60544659399799,
        "gradePct": 2.742576191629741,
        "smoothedEle": 571.1708398375457,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070698972080304,
        "lng": 120.62198066178243,
        "ele": 579.0752970309013,
        "distanceKm": 36.6609907783283,
        "gradePct": 3.497398376076383,
        "smoothedEle": 574.636982742104,
        "gradeBand": "hard"
      },
      {
        "lat": 23.070208,
        "lng": 120.621877,
        "ele": 577.75,
        "distanceKm": 36.71660491381292,
        "gradePct": 5.93498383001807,
        "smoothedEle": 580.7823398557322,
        "gradeBand": "hard"
      },
      {
        "lat": 23.070061,
        "lng": 120.621779,
        "ele": 580,
        "distanceKm": 36.73578027340528,
        "gradePct": 6.796641570360765,
        "smoothedEle": 582.8792309136055,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069899,
        "lng": 120.621507,
        "ele": 585.5,
        "distanceKm": 36.76892829416964,
        "gradePct": 7.951079035533952,
        "smoothedEle": 586.0849587388144,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069493,
        "lng": 120.621151,
        "ele": 581.25,
        "distanceKm": 36.82693250029861,
        "gradePct": 8.98693083649458,
        "smoothedEle": 590.4854939367776,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069424,
        "lng": 120.621088,
        "ele": 580,
        "distanceKm": 36.836952765446874,
        "gradePct": 8.941497897228757,
        "smoothedEle": 591.0199261225564,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069387,
        "lng": 120.621017,
        "ele": 580.5,
        "distanceKm": 36.8453005384084,
        "gradePct": 8.900162458889143,
        "smoothedEle": 591.4581842030367,
        "gradeBand": "steep"
      },
      {
        "lat": 23.06936,
        "lng": 120.620924,
        "ele": 581.75,
        "distanceKm": 36.85527716541769,
        "gradePct": 8.850761468651216,
        "smoothedEle": 591.9819571210242,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069364,
        "lng": 120.620705,
        "ele": 586.75,
        "distanceKm": 36.87768592357334,
        "gradePct": 8.190341511357472,
        "smoothedEle": 592.8624778562165,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069584,
        "lng": 120.620173,
        "ele": 606,
        "distanceKm": 36.93735608216714,
        "gradePct": 5.61273849206359,
        "smoothedEle": 594.2571035424382,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069618,
        "lng": 120.619988,
        "ele": 611,
        "distanceKm": 36.956656005501415,
        "gradePct": 5.111813673935258,
        "smoothedEle": 595.1217394407751,
        "gradeBand": "hard"
      },
      {
        "lat": 23.06956,
        "lng": 120.619841,
        "ele": 613.5,
        "distanceKm": 36.97301908410417,
        "gradePct": 4.852519014947903,
        "smoothedEle": 596.1003477983296,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069505,
        "lng": 120.619781,
        "ele": 613.75,
        "distanceKm": 36.981683912977665,
        "gradePct": 4.79554840963026,
        "smoothedEle": 596.6437707167257,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069434,
        "lng": 120.619746,
        "ele": 613,
        "distanceKm": 36.99035278625313,
        "gradePct": 4.746921528093186,
        "smoothedEle": 597.2041879144533,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069367,
        "lng": 120.619736,
        "ele": 611.5,
        "distanceKm": 36.99787276877544,
        "gradePct": 4.704919242654502,
        "smoothedEle": 597.6906927942852,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069135,
        "lng": 120.619778,
        "ele": 604.5,
        "distanceKm": 37.024025405635214,
        "gradePct": 4.429705303904762,
        "smoothedEle": 599.1243554974776,
        "gradeBand": "hard"
      },
      {
        "lat": 23.06883,
        "lng": 120.619671,
        "ele": 608.5,
        "distanceKm": 37.05966271669959,
        "gradePct": 4.316663523178415,
        "smoothedEle": 600.7876082565671,
        "gradeBand": "hard"
      },
      {
        "lat": 23.068504,
        "lng": 120.61974,
        "ele": 605,
        "distanceKm": 37.09659321689616,
        "gradePct": 4.357320186090244,
        "smoothedEle": 602.0190241583684,
        "gradeBand": "hard"
      },
      {
        "lat": 23.068219,
        "lng": 120.619995,
        "ele": 591,
        "distanceKm": 37.13764012539485,
        "gradePct": 4.1246544600477915,
        "smoothedEle": 602.5191375893182,
        "gradeBand": "hard"
      },
      {
        "lat": 23.067917,
        "lng": 120.619889,
        "ele": 590.5,
        "distanceKm": 37.172928577009735,
        "gradePct": 3.28318426377491,
        "smoothedEle": 602.6613034692167,
        "gradeBand": "hard"
      },
      {
        "lat": 23.067772,
        "lng": 120.619475,
        "ele": 607.5,
        "distanceKm": 37.218247587866394,
        "gradePct": 1.8354142122962311,
        "smoothedEle": 602.4784494418944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06774,
        "lng": 120.619408,
        "ele": 610.25,
        "distanceKm": 37.22597051463634,
        "gradePct": 1.543865592402802,
        "smoothedEle": 602.3028681642811,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067683,
        "lng": 120.619346,
        "ele": 612.25,
        "distanceKm": 37.23493732193012,
        "gradePct": 1.230790714998687,
        "smoothedEle": 602.0952142646922,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067636,
        "lng": 120.619323,
        "ele": 612.5,
        "distanceKm": 37.240668764736725,
        "gradePct": 1.0339452914726475,
        "smoothedEle": 601.969019414867,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067535,
        "lng": 120.619307,
        "ele": 611.75,
        "distanceKm": 37.25201812732372,
        "gradePct": 0.6576168806090457,
        "smoothedEle": 601.7460562785762,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067344,
        "lng": 120.61929,
        "ele": 612.25,
        "distanceKm": 37.2733274781034,
        "gradePct": 0.08330167454368957,
        "smoothedEle": 601.4098513721726,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067022,
        "lng": 120.619551,
        "ele": 600,
        "distanceKm": 37.31799239624998,
        "gradePct": -0.6765054856600063,
        "smoothedEle": 600.9267396923462,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066736,
        "lng": 120.619759,
        "ele": 590.25,
        "distanceKm": 37.35625683234646,
        "gradePct": -0.7878600268448851,
        "smoothedEle": 601.0184182909313,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066588,
        "lng": 120.619776,
        "ele": 589.75,
        "distanceKm": 37.37280534877192,
        "gradePct": -0.667084554888722,
        "smoothedEle": 601.3266379122998,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066516,
        "lng": 120.619761,
        "ele": 590.75,
        "distanceKm": 37.38095713955022,
        "gradePct": -0.5003277488364617,
        "smoothedEle": 601.628254171097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066432,
        "lng": 120.61972,
        "ele": 592.75,
        "distanceKm": 37.391196121093856,
        "gradePct": -0.29391405595543607,
        "smoothedEle": 601.9997691147836,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066331,
        "lng": 120.619628,
        "ele": 597.25,
        "distanceKm": 37.40584930918112,
        "gradePct": -0.0003127071062181086,
        "smoothedEle": 602.5278488439039,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066191,
        "lng": 120.619478,
        "ele": 604.75,
        "distanceKm": 37.427708737099664,
        "gradePct": 0.5204788462470373,
        "smoothedEle": 603.3035719892573,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066112,
        "lng": 120.619434,
        "ele": 607,
        "distanceKm": 37.43757934068658,
        "gradePct": 0.7665179818528605,
        "smoothedEle": 603.570078286104,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066028,
        "lng": 120.619431,
        "ele": 607.25,
        "distanceKm": 37.44692476855687,
        "gradePct": 0.965419998140917,
        "smoothedEle": 603.7769575105625,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065720886925043,
        "lng": 120.61963544725876,
        "ele": 602.1324652011011,
        "distanceKm": 37.48697060432819,
        "gradePct": 1.073273293983546,
        "smoothedEle": 603.4088290424735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065422,
        "lng": 120.619855,
        "ele": 598.75,
        "distanceKm": 37.527083806867964,
        "gradePct": 0.9453623796367631,
        "smoothedEle": 602.8392467609818,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064983,
        "lng": 120.619954,
        "ele": 606.25,
        "distanceKm": 37.57693811102934,
        "gradePct": 1.2175251983190205,
        "smoothedEle": 603.9146005124625,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064656,
        "lng": 120.620063,
        "ele": 609.5,
        "distanceKm": 37.614970476069985,
        "gradePct": 1.5924233243346524,
        "smoothedEle": 606.0363773517091,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064372,
        "lng": 120.620266,
        "ele": 609,
        "distanceKm": 37.65276701926197,
        "gradePct": 1.9964859497715395,
        "smoothedEle": 607.7162234813659,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064123,
        "lng": 120.620591,
        "ele": 604,
        "distanceKm": 37.69603531741081,
        "gradePct": 2.5060059720447256,
        "smoothedEle": 608.2921277542165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063589,
        "lng": 120.620761,
        "ele": 605,
        "distanceKm": 37.757908222832846,
        "gradePct": 3.315109051749696,
        "smoothedEle": 610.1343452976278,
        "gradeBand": "hard"
      },
      {
        "lat": 23.063232,
        "lng": 120.620653,
        "ele": 615.25,
        "distanceKm": 37.79911390778905,
        "gradePct": 3.4079283260758273,
        "smoothedEle": 611.9676164079666,
        "gradeBand": "hard"
      },
      {
        "lat": 23.062891,
        "lng": 120.620949,
        "ele": 620.75,
        "distanceKm": 37.84764022968721,
        "gradePct": 2.8140315098606434,
        "smoothedEle": 613.1164292184519,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063101,
        "lng": 120.621591,
        "ele": 608.25,
        "distanceKm": 37.91734919242356,
        "gradePct": 2.1368002815874814,
        "smoothedEle": 613.2003323366908,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063137,
        "lng": 120.621946,
        "ele": 614.25,
        "distanceKm": 37.953888357005304,
        "gradePct": 1.7359987133059216,
        "smoothedEle": 613.4866543517744,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06323,
        "lng": 120.622243,
        "ele": 621,
        "distanceKm": 37.98598523883666,
        "gradePct": 1.308255896801465,
        "smoothedEle": 614.0000241020211,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063322,
        "lng": 120.622326,
        "ele": 622.25,
        "distanceKm": 37.999280270670475,
        "gradePct": 1.1205948631290268,
        "smoothedEle": 614.2127446113623,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063805,
        "lng": 120.622334,
        "ele": 620,
        "distanceKm": 38.052993730417555,
        "gradePct": 0.6989529471844563,
        "smoothedEle": 614.5207786946379,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064248,
        "lng": 120.622275,
        "ele": 614.5,
        "distanceKm": 38.102621597281555,
        "gradePct": 0.5107316460388274,
        "smoothedEle": 614.2040691972155,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064659,
        "lng": 120.622196,
        "ele": 607,
        "distanceKm": 38.14903194162497,
        "gradePct": 0.5960529009103568,
        "smoothedEle": 614.6407051336269,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064817,
        "lng": 120.622198,
        "ele": 605.75,
        "distanceKm": 38.166601955759994,
        "gradePct": 0.7134895486841413,
        "smoothedEle": 615.1169795888619,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065003,
        "lng": 120.622311,
        "ele": 610.25,
        "distanceKm": 38.190295936433785,
        "gradePct": 0.8276449217603836,
        "smoothedEle": 615.7242851070959,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065328,
        "lng": 120.622557,
        "ele": 613,
        "distanceKm": 38.234334299499736,
        "gradePct": 0.7685499820388946,
        "smoothedEle": 615.9508712024044,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065633,
        "lng": 120.622818,
        "ele": 612.25,
        "distanceKm": 38.27749888444949,
        "gradePct": 0.5127464666484157,
        "smoothedEle": 615.3898874126111,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065826,
        "lng": 120.623177,
        "ele": 614.75,
        "distanceKm": 38.320036948516695,
        "gradePct": 0.3408336476468841,
        "smoothedEle": 615.0495829000735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065942,
        "lng": 120.623714,
        "ele": 621,
        "distanceKm": 38.37646893669932,
        "gradePct": 0.11305904963040642,
        "smoothedEle": 615.596000400219,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066094,
        "lng": 120.624253,
        "ele": 622.25,
        "distanceKm": 38.43414369898713,
        "gradePct": 0.4330479869407152,
        "smoothedEle": 616.8159864989194,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066324,
        "lng": 120.624782,
        "ele": 615.25,
        "distanceKm": 38.49400183680757,
        "gradePct": 0.9648329686864234,
        "smoothedEle": 617.1875297311194,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066412,
        "lng": 120.625212,
        "ele": 616,
        "distanceKm": 38.53906822036613,
        "gradePct": 1.218555716246993,
        "smoothedEle": 617.6709696048636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066517,
        "lng": 120.625869,
        "ele": 620.25,
        "distanceKm": 38.607289207016436,
        "gradePct": 1.0971493650585968,
        "smoothedEle": 618.4422359542357,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066747,
        "lng": 120.626415,
        "ele": 616.75,
        "distanceKm": 38.668724133343275,
        "gradePct": 0.8477002153523351,
        "smoothedEle": 618.7260298640585,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067027,
        "lng": 120.626819,
        "ele": 614.25,
        "distanceKm": 38.72046993975923,
        "gradePct": 0.9648555279920151,
        "smoothedEle": 619.4011716317555,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067079,
        "lng": 120.627231,
        "ele": 617.5,
        "distanceKm": 38.763014227566586,
        "gradePct": 1.2061573035261801,
        "smoothedEle": 620.3540036849456,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067044,
        "lng": 120.627647,
        "ele": 620.5,
        "distanceKm": 38.805750553455745,
        "gradePct": 1.236259098923693,
        "smoothedEle": 620.8973590399194,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067128,
        "lng": 120.628146,
        "ele": 621.5,
        "distanceKm": 38.85764803316296,
        "gradePct": 1.4558998457820642,
        "smoothedEle": 621.5866643640338,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067284,
        "lng": 120.628535,
        "ele": 624.75,
        "distanceKm": 38.9010606882171,
        "gradePct": 1.734643744226933,
        "smoothedEle": 622.6172212773107,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067427,
        "lng": 120.628951,
        "ele": 628.25,
        "distanceKm": 38.94649281142967,
        "gradePct": 2.2273346615724816,
        "smoothedEle": 624.4386554177004,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067681,
        "lng": 120.629428,
        "ele": 626.25,
        "distanceKm": 39.00287592880297,
        "gradePct": 3.0379947116795867,
        "smoothedEle": 626.9368001015248,
        "gradeBand": "hard"
      },
      {
        "lat": 23.067831,
        "lng": 120.629798,
        "ele": 621,
        "distanceKm": 39.04424031576865,
        "gradePct": 2.8771088015174247,
        "smoothedEle": 627.1627998899378,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06822,
        "lng": 120.630092,
        "ele": 627.25,
        "distanceKm": 39.09692459174906,
        "gradePct": 2.3962088919135116,
        "smoothedEle": 627.3114538014754,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068569210902815,
        "lng": 120.6302458255613,
        "ele": 632.2429454938595,
        "distanceKm": 39.138822814317166,
        "gradePct": 1.9455551268657993,
        "smoothedEle": 628.0222653036406,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068925,
        "lng": 120.630382,
        "ele": 637.75,
        "distanceKm": 39.180765959402315,
        "gradePct": 1.53130491762986,
        "smoothedEle": 629.0197921878743,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.069076,
        "lng": 120.630811,
        "ele": 638,
        "distanceKm": 39.22775620203055,
        "gradePct": 1.4270556891175172,
        "smoothedEle": 629.9268481368111,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068968,
        "lng": 120.631219,
        "ele": 622.75,
        "distanceKm": 39.27118914650303,
        "gradePct": 1.656752611021465,
        "smoothedEle": 630.5523439115178,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068947,
        "lng": 120.631326,
        "ele": 619,
        "distanceKm": 39.28238188462074,
        "gradePct": 1.6760939146413183,
        "smoothedEle": 630.6226079397992,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068968,
        "lng": 120.631412,
        "ele": 617.75,
        "distanceKm": 39.29148456961187,
        "gradePct": 1.7019382614592231,
        "smoothedEle": 630.6999807622238,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.069076,
        "lng": 120.631519,
        "ele": 619.75,
        "distanceKm": 39.30773394884134,
        "gradePct": 1.6716319184392652,
        "smoothedEle": 630.8381004856743,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06947372571275,
        "lng": 120.63166740824724,
        "ele": 628.591989978841,
        "distanceKm": 39.35449263647601,
        "gradePct": 1.1587724644441386,
        "smoothedEle": 630.7124830219173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.069876,
        "lng": 120.631803,
        "ele": 636.75,
        "distanceKm": 39.40132500946266,
        "gradePct": 0.4678581812278755,
        "smoothedEle": 630.3523613354765,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070185,
        "lng": 120.632055,
        "ele": 639.25,
        "distanceKm": 39.44428056164492,
        "gradePct": -0.7587222125217074,
        "smoothedEle": 628.6473778404863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070287,
        "lng": 120.632447,
        "ele": 633.75,
        "distanceKm": 39.48595607577231,
        "gradePct": -1.865937522656937,
        "smoothedEle": 626.9211135192736,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070049,
        "lng": 120.633053,
        "ele": 625.25,
        "distanceKm": 39.553363582836056,
        "gradePct": -2.1229210801773473,
        "smoothedEle": 626.469674070189,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069985,
        "lng": 120.633225,
        "ele": 623.5,
        "distanceKm": 39.57234421174369,
        "gradePct": -1.967509946235652,
        "smoothedEle": 626.6401918578651,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070006,
        "lng": 120.633397,
        "ele": 624.5,
        "distanceKm": 39.59009449874416,
        "gradePct": -1.916785708712241,
        "smoothedEle": 626.605147926447,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070157,
        "lng": 120.633697,
        "ele": 628.5,
        "distanceKm": 39.62507791754856,
        "gradePct": -1.8390059216843349,
        "smoothedEle": 625.731553644143,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070006,
        "lng": 120.634062,
        "ele": 618.25,
        "distanceKm": 39.6660196188263,
        "gradePct": -2.2378485460335154,
        "smoothedEle": 623.2712153414587,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069985,
        "lng": 120.634212,
        "ele": 615.25,
        "distanceKm": 39.681541635863745,
        "gradePct": -2.4383382995460687,
        "smoothedEle": 622.2272898560565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070213,
        "lng": 120.63462,
        "ele": 618,
        "distanceKm": 39.73037731129998,
        "gradePct": -3.7738291618085245,
        "smoothedEle": 619.0759586857305,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07036602259741,
        "lng": 120.63498890764298,
        "ele": 620.8974749374491,
        "distanceKm": 39.7717758112689,
        "gradePct": -4.898407994673549,
        "smoothedEle": 616.8382694839008,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070505,
        "lng": 120.635365,
        "ele": 624.25,
        "distanceKm": 39.813238361263004,
        "gradePct": -5.42656827629228,
        "smoothedEle": 615.1740705476687,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070505,
        "lng": 120.635537,
        "ele": 623.75,
        "distanceKm": 39.83083431723904,
        "gradePct": -5.469835907982521,
        "smoothedEle": 614.4459584736996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070462,
        "lng": 120.635601,
        "ele": 622,
        "distanceKm": 39.83894167510066,
        "gradePct": -5.410292696892761,
        "smoothedEle": 614.0778437670054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070419,
        "lng": 120.635644,
        "ele": 620.25,
        "distanceKm": 39.84543881279643,
        "gradePct": -5.362884058601121,
        "smoothedEle": 613.782224001848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070381,
        "lng": 120.635653,
        "ele": 618.75,
        "distanceKm": 39.84976337514971,
        "gradePct": -5.331328376395144,
        "smoothedEle": 613.5854564147736,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07014,
        "lng": 120.635709,
        "ele": 609.5,
        "distanceKm": 39.877166918151815,
        "gradePct": -5.153621650583244,
        "smoothedEle": 612.2142660045857,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06999,
        "lng": 120.635859,
        "ele": 604.5,
        "distanceKm": 39.89983138097462,
        "gradePct": -4.976758885892409,
        "smoothedEle": 611.0935479274365,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069958865193563,
        "lng": 120.63646602118538,
        "ele": 605.2668508044417,
        "distanceKm": 39.96202757820428,
        "gradePct": -4.654354409056897,
        "smoothedEle": 608.0564762758214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069947,
        "lng": 120.637076,
        "ele": 606.75,
        "distanceKm": 40.02444387519227,
        "gradePct": -5.678937335849956,
        "smoothedEle": 603.3525171762699,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06984,
        "lng": 120.63742,
        "ele": 603.5,
        "distanceKm": 40.061592782608734,
        "gradePct": -5.906598494467205,
        "smoothedEle": 601.1803516544692,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069883,
        "lng": 120.637656,
        "ele": 601.75,
        "distanceKm": 40.08620508905353,
        "gradePct": -5.991710820111308,
        "smoothedEle": 599.7839226087888,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070097,
        "lng": 120.637956,
        "ele": 602.5,
        "distanceKm": 40.125040111981775,
        "gradePct": -5.811382871175314,
        "smoothedEle": 598.2398271472348,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070226,
        "lng": 120.638364,
        "ele": 597,
        "distanceKm": 40.16917545496731,
        "gradePct": -5.184787295307257,
        "smoothedEle": 597.148207120414,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070208,
        "lng": 120.638841,
        "ele": 581,
        "distanceKm": 40.21801467649832,
        "gradePct": -4.136947296149229,
        "smoothedEle": 595.5631544956458,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070229,
        "lng": 120.638949,
        "ele": 578.5,
        "distanceKm": 40.229307385569705,
        "gradePct": -3.961597512971594,
        "smoothedEle": 595.1449436775401,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070272,
        "lng": 120.639013,
        "ele": 578,
        "distanceKm": 40.23741475259061,
        "gradePct": -3.8746940247370407,
        "smoothedEle": 594.8446978664543,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070422,
        "lng": 120.639056,
        "ele": 581.75,
        "distanceKm": 40.25466435930078,
        "gradePct": -3.7387258208542598,
        "smoothedEle": 594.108017774671,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070637,
        "lng": 120.639035,
        "ele": 590.25,
        "distanceKm": 40.27866763544601,
        "gradePct": -3.716632752413606,
        "smoothedEle": 592.7783097976095,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070698,
        "lng": 120.639013,
        "ele": 593.25,
        "distanceKm": 40.28581418174794,
        "gradePct": -3.7729581678164017,
        "smoothedEle": 592.2601851907199,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070763,
        "lng": 120.639035,
        "ele": 594.5,
        "distanceKm": 40.293384171815255,
        "gradePct": -3.8923703123690547,
        "smoothedEle": 591.7137388897854,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071023,
        "lng": 120.639222,
        "ele": 595.5,
        "distanceKm": 40.328051205191194,
        "gradePct": -4.515087396503127,
        "smoothedEle": 589.1351775812308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071271,
        "lng": 120.639437,
        "ele": 597.25,
        "distanceKm": 40.36332484569967,
        "gradePct": -5.354663032678085,
        "smoothedEle": 586.5835869033333,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071378,
        "lng": 120.639823,
        "ele": 592.75,
        "distanceKm": 40.404566691409094,
        "gradePct": -6.192931924891835,
        "smoothedEle": 583.6137383081161,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071371095986112,
        "lng": 120.6402207835943,
        "ele": 588.4288830750099,
        "distanceKm": 40.44526775395994,
        "gradePct": -6.834732455133592,
        "smoothedEle": 580.8398543086194,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071335,
        "lng": 120.640617,
        "ele": 586.75,
        "distanceKm": 40.48599949347619,
        "gradePct": -6.5489073001409315,
        "smoothedEle": 579.1489937025525,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071292,
        "lng": 120.640703,
        "ele": 585,
        "distanceKm": 40.496012742785105,
        "gradePct": -6.376389092746332,
        "smoothedEle": 578.7654455205693,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071206,
        "lng": 120.640789,
        "ele": 581.25,
        "distanceKm": 40.5090069823735,
        "gradePct": -6.200449174739245,
        "smoothedEle": 578.150803558385,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07112,
        "lng": 120.640789,
        "ele": 577.75,
        "distanceKm": 40.51856975927354,
        "gradePct": -6.10722920874022,
        "smoothedEle": 577.6259565957305,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070943,
        "lng": 120.640824,
        "ele": 570.5,
        "distanceKm": 40.5385743335085,
        "gradePct": -6.078161467946045,
        "smoothedEle": 576.2176427111665,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070799,
        "lng": 120.640877,
        "ele": 565.5,
        "distanceKm": 40.55547951333697,
        "gradePct": -6.157592304207324,
        "smoothedEle": 574.8359104010601,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07068,
        "lng": 120.641078,
        "ele": 565.75,
        "distanceKm": 40.57993182031804,
        "gradePct": -6.554407383085467,
        "smoothedEle": 572.2788945183804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070411,
        "lng": 120.641647,
        "ele": 565.5,
        "distanceKm": 40.64537709702546,
        "gradePct": -8.057317478388141,
        "smoothedEle": 564.7206802900638,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070304,
        "lng": 120.642141,
        "ele": 560,
        "distanceKm": 40.69729603233777,
        "gradePct": -9.620918756404285,
        "smoothedEle": 559.462906986871,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070325112982253,
        "lng": 120.64251972826575,
        "ele": 558.8479660222802,
        "distanceKm": 40.736111833301464,
        "gradePct": -10.115126871467536,
        "smoothedEle": 556.160747980604,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070368,
        "lng": 120.642897,
        "ele": 556,
        "distanceKm": 40.77500105622244,
        "gradePct": -9.618123588737808,
        "smoothedEle": 553.5582650335807,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070239,
        "lng": 120.643412,
        "ele": 543,
        "distanceKm": 40.82960446495172,
        "gradePct": -7.590297801514629,
        "smoothedEle": 551.3616513172849,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070196,
        "lng": 120.643648,
        "ele": 538.25,
        "distanceKm": 40.854216708721026,
        "gradePct": -6.709278722303072,
        "smoothedEle": 550.4069451207226,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070218,
        "lng": 120.643734,
        "ele": 537.25,
        "distanceKm": 40.86334847213286,
        "gradePct": -6.447622210625149,
        "smoothedEle": 550.0054945373324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070282,
        "lng": 120.64382,
        "ele": 536.75,
        "distanceKm": 40.8746643490685,
        "gradePct": -6.183589699006714,
        "smoothedEle": 549.387613186736,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070346,
        "lng": 120.643884,
        "ele": 536.5,
        "distanceKm": 40.884334511667575,
        "gradePct": -5.959875821237888,
        "smoothedEle": 548.8557542437869,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070625,
        "lng": 120.643905,
        "ele": 539.75,
        "distanceKm": 40.91543223550207,
        "gradePct": -5.583138034216666,
        "smoothedEle": 546.7537379436286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071007415096858,
        "lng": 120.643682742788,
        "ele": 545.0068750070625,
        "distanceKm": 40.96365218801208,
        "gradePct": -5.149068082740809,
        "smoothedEle": 544.0195998414716,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07138,
        "lng": 120.643438,
        "ele": 548.75,
        "distanceKm": 41.01205975068724,
        "gradePct": -5.346595564487737,
        "smoothedEle": 541.374257882972,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071699000000002,
        "lng": 120.64331200000001,
        "ele": 548,
        "distanceKm": 41.04980043577659,
        "gradePct": -5.543804070273758,
        "smoothedEle": 539.4906437161754,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072018,
        "lng": 120.643186,
        "ele": 547.25,
        "distanceKm": 41.087541110425555,
        "gradePct": -5.1511764380829685,
        "smoothedEle": 538.336654865748,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072131,
        "lng": 120.643174,
        "ele": 545.25,
        "distanceKm": 41.1001659811162,
        "gradePct": -4.972497027368419,
        "smoothedEle": 537.840649494982,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072188,
        "lng": 120.64318,
        "ele": 543.75,
        "distanceKm": 41.10653375279426,
        "gradePct": -4.871905670374064,
        "smoothedEle": 537.6114097145717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072302,
        "lng": 120.643247,
        "ele": 538,
        "distanceKm": 41.12094438814341,
        "gradePct": -4.689381925336581,
        "smoothedEle": 537.0624274026935,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072529,
        "lng": 120.643464,
        "ele": 530.75,
        "distanceKm": 41.15455879517309,
        "gradePct": -4.424609099616185,
        "smoothedEle": 535.6859896124836,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072561,
        "lng": 120.643596,
        "ele": 532,
        "distanceKm": 41.16852339865172,
        "gradePct": -4.34616389500024,
        "smoothedEle": 535.0610736068146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072552,
        "lng": 120.64368,
        "ele": 532.5,
        "distanceKm": 41.1771747184155,
        "gradePct": -4.303351598755394,
        "smoothedEle": 534.6739270473855,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072379,
        "lng": 120.643957,
        "ele": 532.25,
        "distanceKm": 41.21142457720859,
        "gradePct": -4.247659425627031,
        "smoothedEle": 532.9136495389434,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072223,
        "lng": 120.644352,
        "ele": 530.5,
        "distanceKm": 41.25539920691735,
        "gradePct": -4.44719306265278,
        "smoothedEle": 530.4250651166327,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072136,
        "lng": 120.644808,
        "ele": 531.5,
        "distanceKm": 41.303040891875604,
        "gradePct": -5.2154748667503945,
        "smoothedEle": 527.3062029741426,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071807,
        "lng": 120.645132,
        "ele": 520.25,
        "distanceKm": 41.352406405559634,
        "gradePct": -6.101357085834507,
        "smoothedEle": 523.5714111738232,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071693,
        "lng": 120.645308,
        "ele": 516.5,
        "distanceKm": 41.37442610078466,
        "gradePct": -6.383966518793409,
        "smoothedEle": 522.0289946487787,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071536000000002,
        "lng": 120.645839,
        "ele": 517.375,
        "distanceKm": 41.43148434394645,
        "gradePct": -6.772894720713583,
        "smoothedEle": 518.2326504698367,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071379,
        "lng": 120.64637,
        "ele": 518.25,
        "distanceKm": 41.488542647472265,
        "gradePct": -7.318878306396423,
        "smoothedEle": 513.6175736989275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071274,
        "lng": 120.6465,
        "ele": 518,
        "distanceKm": 41.50623968988616,
        "gradePct": -7.400222557086815,
        "smoothedEle": 512.2637499542645,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071222,
        "lng": 120.646543,
        "ele": 517.5,
        "distanceKm": 41.51350495530589,
        "gradePct": -7.403288904037149,
        "smoothedEle": 511.70795714965504,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071157,
        "lng": 120.646577,
        "ele": 516.75,
        "distanceKm": 41.521526027735014,
        "gradePct": -7.40667424367181,
        "smoothedEle": 511.0943451088271,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071031,
        "lng": 120.646605,
        "ele": 514.75,
        "distanceKm": 41.535826426417835,
        "gradePct": -7.43022499280577,
        "smoothedEle": 509.965334241931,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070781,
        "lng": 120.646611,
        "ele": 510.5,
        "distanceKm": 41.56363197227121,
        "gradePct": -7.557454360002118,
        "smoothedEle": 507.670183686825,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070334,
        "lng": 120.646479,
        "ele": 506,
        "distanceKm": 41.61513791399027,
        "gradePct": -7.527073639263995,
        "smoothedEle": 504.26610545124294,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069867,
        "lng": 120.64627,
        "ele": 496.75,
        "distanceKm": 41.67129557958014,
        "gradePct": -6.6844722839944,
        "smoothedEle": 501.6436327934509,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069719,
        "lng": 120.646234,
        "ele": 493.25,
        "distanceKm": 41.688159515659805,
        "gradePct": -6.564595004881105,
        "smoothedEle": 500.51937274104057,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069635,
        "lng": 120.646244,
        "ele": 492,
        "distanceKm": 41.69755576005141,
        "gradePct": -6.517556413683585,
        "smoothedEle": 499.89295775925586,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06949,
        "lng": 120.646323,
        "ele": 491,
        "distanceKm": 41.7155912197012,
        "gradePct": -6.433761320720856,
        "smoothedEle": 498.68083528197195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069295,
        "lng": 120.6467,
        "ele": 492.25,
        "distanceKm": 41.75983667417294,
        "gradePct": -6.579715844777089,
        "smoothedEle": 494.82402693109077,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069229,
        "lng": 120.647095,
        "ele": 490.25,
        "distanceKm": 41.80090737185391,
        "gradePct": -7.0929166925291565,
        "smoothedEle": 491.02078256167533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069208,
        "lng": 120.647331,
        "ele": 489.25,
        "distanceKm": 41.82516355048599,
        "gradePct": -7.3648820852796835,
        "smoothedEle": 489.06816018179296,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069428,
        "lng": 120.64788,
        "ele": 494.25,
        "distanceKm": 41.88642419451296,
        "gradePct": -7.882338511953919,
        "smoothedEle": 484.87038355147234,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069456263317825,
        "lng": 120.64847345134912,
        "ele": 484.04173642798327,
        "distanceKm": 41.94721726294019,
        "gradePct": -6.7934477873684385,
        "smoothedEle": 482.3371460631019,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069445,
        "lng": 120.649071,
        "ele": 471,
        "distanceKm": 42.00836103400064,
        "gradePct": -4.813175073827,
        "smoothedEle": 480.7944126112094,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06951,
        "lng": 120.649286,
        "ele": 468.25,
        "distanceKm": 42.031513233805484,
        "gradePct": -4.175151413517679,
        "smoothedEle": 480.2827566033393,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06966,
        "lng": 120.649393,
        "ele": 470.25,
        "distanceKm": 42.051463706838454,
        "gradePct": -3.661195101035934,
        "smoothedEle": 479.94359856177874,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070124432568274,
        "lng": 120.64960195652498,
        "ele": 472.9191526912364,
        "distanceKm": 42.10735580540504,
        "gradePct": -2.638100610947665,
        "smoothedEle": 478.721965434204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07058886513655,
        "lng": 120.64981091304995,
        "ele": 475.5883053824724,
        "distanceKm": 42.16324787574488,
        "gradePct": -3.0463066183974514,
        "smoothedEle": 475.8400605113155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071054,
        "lng": 120.650018,
        "ele": 478.25,
        "distanceKm": 42.219139303929516,
        "gradePct": -3.7427741696784875,
        "smoothedEle": 473.07066804816566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071355,
        "lng": 120.65023,
        "ele": 480.5,
        "distanceKm": 42.259021483325064,
        "gradePct": -3.7924161864025647,
        "smoothedEle": 472.1935759319671,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071355,
        "lng": 120.650316,
        "ele": 481.25,
        "distanceKm": 42.267819405720466,
        "gradePct": -3.7358587793374096,
        "smoothedEle": 472.11439463040847,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071312,
        "lng": 120.65038,
        "ele": 481.25,
        "distanceKm": 42.275926730171165,
        "gradePct": -3.6672694885139996,
        "smoothedEle": 472.0743714898267,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071248,
        "lng": 120.650445,
        "ele": 481.75,
        "distanceKm": 42.28566641653692,
        "gradePct": -3.5778738182259877,
        "smoothedEle": 472.0402825875466,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070729,
        "lng": 120.650675,
        "ele": 477.5,
        "distanceKm": 42.34798900336556,
        "gradePct": -2.7230564550925926,
        "smoothedEle": 471.1807250305637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070322,
        "lng": 120.650997,
        "ele": 464,
        "distanceKm": 42.403964607258985,
        "gradePct": -1.8328159471300602,
        "smoothedEle": 470.1569348252212,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070223,
        "lng": 120.651131,
        "ele": 460.75,
        "distanceKm": 42.42154601659272,
        "gradePct": -1.7140562694330341,
        "smoothedEle": 469.5896268896794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070155,
        "lng": 120.651448,
        "ele": 459.25,
        "distanceKm": 42.45484566756821,
        "gradePct": -1.9942949909709,
        "smoothedEle": 468.2968208280221,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070375,
        "lng": 120.652078,
        "ele": 466.5,
        "distanceKm": 42.52378252875258,
        "gradePct": -2.9627650546456583,
        "smoothedEle": 465.5890523434412,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070462,
        "lng": 120.652537,
        "ele": 463.25,
        "distanceKm": 42.57172536497127,
        "gradePct": -3.8632235827689403,
        "smoothedEle": 463.0201413335349,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070676,
        "lng": 120.652944,
        "ele": 465.5,
        "distanceKm": 42.6196823342357,
        "gradePct": -4.378287602956499,
        "smoothedEle": 460.8931880340668,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070719,
        "lng": 120.65303,
        "ele": 465.5,
        "distanceKm": 42.629695618943636,
        "gradePct": -4.317681446357166,
        "smoothedEle": 460.6378686291242,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070719,
        "lng": 120.653223,
        "ele": 462.25,
        "distanceKm": 42.64943988697051,
        "gradePct": -4.002582446511212,
        "smoothedEle": 460.50152678108856,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070655,
        "lng": 120.653417,
        "ele": 458,
        "distanceKm": 42.67052378808632,
        "gradePct": -3.650844834255542,
        "smoothedEle": 460.37931082903685,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070634,
        "lng": 120.65361,
        "ele": 457,
        "distanceKm": 42.69040566999544,
        "gradePct": -3.381321993033689,
        "smoothedEle": 460.1374167889177,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070776,
        "lng": 120.654009,
        "ele": 460.5,
        "distanceKm": 42.7341716586462,
        "gradePct": -2.762653097439017,
        "smoothedEle": 459.5070675648156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070804,
        "lng": 120.654181,
        "ele": 461,
        "distanceKm": 42.752040906024696,
        "gradePct": -2.5459382238783723,
        "smoothedEle": 458.9830131505918,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07074,
        "lng": 120.654353,
        "ele": 458.25,
        "distanceKm": 42.771021443380036,
        "gradePct": -2.3532675558624536,
        "smoothedEle": 458.35132430585475,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070547,
        "lng": 120.654696,
        "ele": 452.25,
        "distanceKm": 42.8121533981771,
        "gradePct": -2.069769902822798,
        "smoothedEle": 457.08756623110025,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070547,
        "lng": 120.654782,
        "ele": 452,
        "distanceKm": 42.82095137341747,
        "gradePct": -2.0070922319370648,
        "smoothedEle": 456.84664552403797,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07059,
        "lng": 120.654868,
        "ele": 453,
        "distanceKm": 42.830964665538225,
        "gradePct": -2.0289126891092617,
        "smoothedEle": 456.57127999071724,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070783,
        "lng": 120.655104,
        "ele": 458,
        "distanceKm": 42.8632672400885,
        "gradePct": -2.4125261840022114,
        "smoothedEle": 455.5963221150636,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070804,
        "lng": 120.655189,
        "ele": 459.5,
        "distanceKm": 42.87227096886381,
        "gradePct": -2.5294272949328085,
        "smoothedEle": 455.29919906547826,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070804,
        "lng": 120.655297,
        "ele": 460.75,
        "distanceKm": 42.883319567826284,
        "gradePct": -2.644517475900661,
        "smoothedEle": 454.9345952997166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070719,
        "lng": 120.655426,
        "ele": 460.25,
        "distanceKm": 42.89955199439279,
        "gradePct": -2.7709310294668117,
        "smoothedEle": 454.4638227923541,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070415,
        "lng": 120.655624,
        "ele": 454.5,
        "distanceKm": 42.938959618523114,
        "gradePct": -2.935510017525915,
        "smoothedEle": 453.4956302275978,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070171,
        "lng": 120.655978,
        "ele": 449.75,
        "distanceKm": 42.98421057625982,
        "gradePct": -2.70693178422825,
        "smoothedEle": 452.53223143920246,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070166,
        "lng": 120.656535,
        "ele": 450,
        "distanceKm": 43.04119568383259,
        "gradePct": -1.8648250137712257,
        "smoothedEle": 452.53283687157386,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070272,
        "lng": 120.656949,
        "ele": 449.5,
        "distanceKm": 43.08515833661749,
        "gradePct": -1.2995820541299665,
        "smoothedEle": 452.28210325612,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070378,
        "lng": 120.657333,
        "ele": 449,
        "distanceKm": 43.12617250688233,
        "gradePct": -1.2661385866354455,
        "smoothedEle": 451.2775152675671,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070568,
        "lng": 120.657915,
        "ele": 446,
        "distanceKm": 43.18934958258991,
        "gradePct": -1.1816025504203198,
        "smoothedEle": 450.1690809372021,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070676,
        "lng": 120.658043,
        "ele": 447.5,
        "distanceKm": 43.20711718459715,
        "gradePct": -1.3133322542240746,
        "smoothedEle": 449.9058102996413,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070749,
        "lng": 120.658097,
        "ele": 449.25,
        "distanceKm": 43.21693591798753,
        "gradePct": -1.442613066349005,
        "smoothedEle": 449.64735299350707,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071114,
        "lng": 120.658247,
        "ele": 460.25,
        "distanceKm": 43.26032620535386,
        "gradePct": -1.9542950511584543,
        "smoothedEle": 448.5151390488922,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071178,
        "lng": 120.65829,
        "ele": 461.75,
        "distanceKm": 43.268692523565086,
        "gradePct": -2.0766936998197694,
        "smoothedEle": 448.222625859096,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0712,
        "lng": 120.658355,
        "ele": 461.25,
        "distanceKm": 43.27577782758518,
        "gradePct": -2.180854445793412,
        "smoothedEle": 447.973894524225,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0712,
        "lng": 120.65844,
        "ele": 459,
        "distanceKm": 43.28447345857607,
        "gradePct": -2.308688538466636,
        "smoothedEle": 447.6686322662081,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071139,
        "lng": 120.658751,
        "ele": 448,
        "distanceKm": 43.31700424400682,
        "gradePct": -2.6790424985982684,
        "smoothedEle": 446.14399477334985,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071152,
        "lng": 120.658885,
        "ele": 444.75,
        "distanceKm": 43.33078866041089,
        "gradePct": -2.8501990984213585,
        "smoothedEle": 445.49612720235854,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07121,
        "lng": 120.659019,
        "ele": 443.75,
        "distanceKm": 43.34593838388887,
        "gradePct": -3.0588667623837713,
        "smoothedEle": 444.8129917656054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071492,
        "lng": 120.659417,
        "ele": 450.75,
        "distanceKm": 43.3973295529915,
        "gradePct": -3.587371100506181,
        "smoothedEle": 442.87609588639566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071533,
        "lng": 120.659781,
        "ele": 448,
        "distanceKm": 43.43484526787272,
        "gradePct": -3.6758880206276148,
        "smoothedEle": 441.8282554176466,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071404,
        "lng": 120.660157,
        "ele": 438.75,
        "distanceKm": 43.475898094676545,
        "gradePct": -3.670167566420536,
        "smoothedEle": 440.6293373856533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071216415191504,
        "lng": 120.6604983184595,
        "ele": 432.44737740501154,
        "distanceKm": 43.51657118751944,
        "gradePct": -3.8790659843378443,
        "smoothedEle": 438.4061590916663,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070979,
        "lng": 120.660804,
        "ele": 426,
        "distanceKm": 43.55749610214418,
        "gradePct": -4.436674380584969,
        "smoothedEle": 435.5040409885119,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07093,
        "lng": 120.661487,
        "ele": 430.25,
        "distanceKm": 43.627580296995454,
        "gradePct": -4.364291291781678,
        "smoothedEle": 433.3025886125398,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070769,
        "lng": 120.66187,
        "ele": 433,
        "distanceKm": 43.670658056758384,
        "gradePct": -4.037039669767836,
        "smoothedEle": 432.70828955302045,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07048,
        "lng": 120.662323,
        "ele": 433,
        "distanceKm": 43.727052536158595,
        "gradePct": -2.527808412543201,
        "smoothedEle": 432.60727592356903,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0702,
        "lng": 120.662667,
        "ele": 424.25,
        "distanceKm": 43.77404017730993,
        "gradePct": -1.2725443707482886,
        "smoothedEle": 432.4392773950864,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070135,
        "lng": 120.662865,
        "ele": 421.25,
        "distanceKm": 43.795546903005665,
        "gradePct": -0.9098341599483475,
        "smoothedEle": 432.4891384771985,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070135,
        "lng": 120.662957,
        "ele": 421,
        "distanceKm": 43.8049587192992,
        "gradePct": -0.7149552641445679,
        "smoothedEle": 432.5832566401339,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070166,
        "lng": 120.663031,
        "ele": 422,
        "distanceKm": 43.81327693336728,
        "gradePct": -0.5427202436035182,
        "smoothedEle": 432.66643878081464,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070282,
        "lng": 120.66316,
        "ele": 426.25,
        "distanceKm": 43.8317305320168,
        "gradePct": -0.1872471015112156,
        "smoothedEle": 432.870837932311,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070673,
        "lng": 120.66334,
        "ele": 440.5,
        "distanceKm": 43.87894666077671,
        "gradePct": 0.23255177911064728,
        "smoothedEle": 433.15854658754154,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070943,
        "lng": 120.663639,
        "ele": 447,
        "distanceKm": 43.92180692030522,
        "gradePct": 0.6800089263504009,
        "smoothedEle": 433.9766897083131,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070934,
        "lng": 120.664027,
        "ele": 441.5,
        "distanceKm": 43.96151260910208,
        "gradePct": 0.8984489257180017,
        "smoothedEle": 434.2809660249658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070693,
        "lng": 120.664431,
        "ele": 431.25,
        "distanceKm": 44.01077007172214,
        "gradePct": 0.9787818880503354,
        "smoothedEle": 434.59893394046395,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070606,
        "lng": 120.664769,
        "ele": 431,
        "distanceKm": 44.04667589482334,
        "gradePct": 1.2032849229473583,
        "smoothedEle": 435.3684764521512,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070524,
        "lng": 120.665252,
        "ele": 432,
        "distanceKm": 44.0969220042091,
        "gradePct": 1.2385564236375723,
        "smoothedEle": 435.97878389870215,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070566,
        "lng": 120.665844,
        "ele": 441.25,
        "distanceKm": 44.15766461135836,
        "gradePct": 0.06618463422643023,
        "smoothedEle": 434.3838469602496,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070231,
        "lng": 120.666249,
        "ele": 434.5,
        "distanceKm": 44.213380229290905,
        "gradePct": -1.065828938483306,
        "smoothedEle": 432.5232176082908,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06983,
        "lng": 120.66664,
        "ele": 434.25,
        "distanceKm": 44.27328197555407,
        "gradePct": -1.642764559059008,
        "smoothedEle": 432.4061144287993,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069487,
        "lng": 120.66679,
        "ele": 430.75,
        "distanceKm": 44.31439322028404,
        "gradePct": -1.6100684927814142,
        "smoothedEle": 432.29989992835596,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0691,
        "lng": 120.666876,
        "ele": 426.75,
        "distanceKm": 44.35831589696915,
        "gradePct": -1.263253416594903,
        "smoothedEle": 431.835590370548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068714,
        "lng": 120.666854,
        "ele": 425.5,
        "distanceKm": 44.40129616689167,
        "gradePct": -1.202076104511275,
        "smoothedEle": 430.52261402755676,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068552,
        "lng": 120.666901,
        "ele": 426.25,
        "distanceKm": 44.41994045012795,
        "gradePct": -1.4553354438468566,
        "smoothedEle": 429.59972200736064,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068478,
        "lng": 120.666962,
        "ele": 427.25,
        "distanceKm": 44.43026765836052,
        "gradePct": -1.7008394096712083,
        "smoothedEle": 429.0885251998486,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068285,
        "lng": 120.667369,
        "ele": 434.5,
        "distanceKm": 44.47711047230189,
        "gradePct": -2.8322470502781862,
        "smoothedEle": 426.73172907167327,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068264,
        "lng": 120.667498,
        "ele": 436.5,
        "distanceKm": 44.49051265083316,
        "gradePct": -3.1527595991091584,
        "smoothedEle": 426.05607827228664,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068264,
        "lng": 120.667584,
        "ele": 434.5,
        "distanceKm": 44.499310775382824,
        "gradePct": -3.3488547763564704,
        "smoothedEle": 425.64115719265783,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068306,
        "lng": 120.667691,
        "ele": 432.75,
        "distanceKm": 44.5112118935707,
        "gradePct": -3.61315726332399,
        "smoothedEle": 425.0818046378274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068349,
        "lng": 120.667777,
        "ele": 431.25,
        "distanceKm": 44.52122531446497,
        "gradePct": -3.8082517736304764,
        "smoothedEle": 424.61117385579684,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068433,
        "lng": 120.667855,
        "ele": 430.25,
        "distanceKm": 44.53351019241603,
        "gradePct": -4.032014271561564,
        "smoothedEle": 424.033784592097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068747,
        "lng": 120.66811,
        "ele": 427.5,
        "distanceKm": 44.57709490805683,
        "gradePct": -4.618056329179032,
        "smoothedEle": 422.0258099025801,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06899,
        "lng": 120.668378,
        "ele": 424,
        "distanceKm": 44.61558919270825,
        "gradePct": -4.77358954300259,
        "smoothedEle": 420.2679301636308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069122,
        "lng": 120.668817,
        "ele": 416.5,
        "distanceKm": 44.66283792364387,
        "gradePct": -4.889899540304997,
        "smoothedEle": 417.67002279092185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069225,
        "lng": 120.66915,
        "ele": 410.75,
        "distanceKm": 44.69877855271119,
        "gradePct": -5.196346819104247,
        "smoothedEle": 415.27356326794745,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069298,
        "lng": 120.669236,
        "ele": 409.25,
        "distanceKm": 44.710749160332256,
        "gradePct": -5.397122479159444,
        "smoothedEle": 414.3093081417155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069352,
        "lng": 120.669252,
        "ele": 409.25,
        "distanceKm": 44.7169728009225,
        "gradePct": -5.520039380816747,
        "smoothedEle": 413.7709632306595,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069766,
        "lng": 120.669301,
        "ele": 410.75,
        "distanceKm": 44.76327968978214,
        "gradePct": -6.410036638576082,
        "smoothedEle": 409.84221223890563,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070301,
        "lng": 120.669519,
        "ele": 407.75,
        "distanceKm": 44.82681205121022,
        "gradePct": -7.038906635764746,
        "smoothedEle": 405.5730432423378,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07062,
        "lng": 120.669766,
        "ele": 401.25,
        "distanceKm": 44.87036330072363,
        "gradePct": -6.905758995922256,
        "smoothedEle": 403.35672555829143,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070901727638535,
        "lng": 120.67010360616655,
        "ele": 394.2701620738681,
        "distanceKm": 44.916991828460695,
        "gradePct": -6.05351367243449,
        "smoothedEle": 401.6623215588211,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071154,
        "lng": 120.670471,
        "ele": 391.25,
        "distanceKm": 44.96389082713529,
        "gradePct": -4.58222184152904,
        "smoothedEle": 400.63670210432485,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071345,
        "lng": 120.670865,
        "ele": 393,
        "distanceKm": 45.00945069117293,
        "gradePct": -3.47371708560133,
        "smoothedEle": 399.792236256768,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07148,
        "lng": 120.671515,
        "ele": 398.75,
        "distanceKm": 45.077619925248875,
        "gradePct": -2.2122303851524205,
        "smoothedEle": 398.66857098904103,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071623,
        "lng": 120.671848,
        "ele": 401.25,
        "distanceKm": 45.11521451196352,
        "gradePct": -1.6457781797199738,
        "smoothedEle": 398.4353499574099,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072012,
        "lng": 120.672275,
        "ele": 401.5,
        "distanceKm": 45.17668931177184,
        "gradePct": -0.6798077115465634,
        "smoothedEle": 399.03986290095185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072367203568678,
        "lng": 120.67250806341116,
        "ele": 400.56323412559533,
        "distanceKm": 45.22282468263105,
        "gradePct": 0.29198429098908757,
        "smoothedEle": 400.15575510220344,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.072737,
        "lng": 120.672715,
        "ele": 400.75,
        "distanceKm": 45.269073724730546,
        "gradePct": 1.317304926135857,
        "smoothedEle": 401.4440518489404,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073118333333333,
        "lng": 120.67298633333333,
        "ele": 401.4166666666667,
        "distanceKm": 45.31975349785355,
        "gradePct": 2.093984276876539,
        "smoothedEle": 402.6679526658025,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073499666666667,
        "lng": 120.67325766666667,
        "ele": 402.0833333333333,
        "distanceKm": 45.370433227875395,
        "gradePct": 2.3703744280549817,
        "smoothedEle": 403.71909250522083,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073881,
        "lng": 120.673529,
        "ele": 402.75,
        "distanceKm": 45.421112914793916,
        "gradePct": 2.330693946188428,
        "smoothedEle": 404.77573987276213,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074217,
        "lng": 120.673828,
        "ele": 405.25,
        "distanceKm": 45.46939832807914,
        "gradePct": 2.236945856148079,
        "smoothedEle": 405.9257826315207,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074525199867377,
        "lng": 120.67400041999448,
        "ele": 407.0052694114724,
        "distanceKm": 45.5079413919411,
        "gradePct": 2.2758167344393843,
        "smoothedEle": 406.93432743709366,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074848,
        "lng": 120.674139,
        "ele": 408.25,
        "distanceKm": 45.54653335170429,
        "gradePct": 2.3730203798492884,
        "smoothedEle": 407.96942991389955,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075333,
        "lng": 120.674255,
        "ele": 410.5,
        "distanceKm": 45.60175309722464,
        "gradePct": 2.5270897803476013,
        "smoothedEle": 409.42627644522133,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075704652257645,
        "lng": 120.67442552656715,
        "ele": 411.85193863388866,
        "distanceKm": 45.64661001714653,
        "gradePct": 2.6044690806911235,
        "smoothedEle": 410.5919578715714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076074,
        "lng": 120.674602,
        "ele": 413,
        "distanceKm": 45.69147227955269,
        "gradePct": 2.6220028155787443,
        "smoothedEle": 411.74739073810287,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07648393067453,
        "lng": 120.6748476362588,
        "ele": 413.7046941850995,
        "distanceKm": 45.743521881470876,
        "gradePct": 2.5323627587522064,
        "smoothedEle": 412.95338264047643,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076893861349063,
        "lng": 120.67509327251761,
        "ele": 414.40938837019917,
        "distanceKm": 45.79557144641072,
        "gradePct": 2.4092685290876203,
        "smoothedEle": 414.08172480276534,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.077303886487453,
        "lng": 120.67533872310825,
        "ele": 414.92032675840375,
        "distanceKm": 45.84762100830933,
        "gradePct": 2.256337447636664,
        "smoothedEle": 415.1306709636414,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.077714,
        "lng": 120.675584,
        "ele": 415.25,
        "distanceKm": 45.8996705732726,
        "gradePct": 2.07748347241366,
        "smoothedEle": 416.0923125620286,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078200000000002,
        "lng": 120.675861,
        "ele": 416.7500000000001,
        "distanceKm": 45.96068978158118,
        "gradePct": 1.9110170683037224,
        "smoothedEle": 417.1475863726378,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078686,
        "lng": 120.676138,
        "ele": 418.25,
        "distanceKm": 46.0217089423314,
        "gradePct": 1.775912398404134,
        "smoothedEle": 418.1602942060761,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.079024333333333,
        "lng": 120.676361,
        "ele": 419.16666666666663,
        "distanceKm": 46.06570581318549,
        "gradePct": 1.705901938034235,
        "smoothedEle": 418.8766006038714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07936266666667,
        "lng": 120.67658399999999,
        "ele": 420.08333333333337,
        "distanceKm": 46.109702654278735,
        "gradePct": 1.6644513898019728,
        "smoothedEle": 419.5947114036946,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.079701,
        "lng": 120.676807,
        "ele": 421,
        "distanceKm": 46.15369946561161,
        "gradePct": 1.6598720639097213,
        "smoothedEle": 420.3464391028949,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.080136496932973,
        "lng": 120.67708050463844,
        "ele": 421.59408742957,
        "distanceKm": 46.20962591531306,
        "gradePct": 1.714874245726581,
        "smoothedEle": 421.3895060798067,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.080571997955314,
        "lng": 120.67735400309229,
        "ele": 422.2293916197134,
        "distanceKm": 46.2655523969205,
        "gradePct": 1.828871918179916,
        "smoothedEle": 422.5318466932323,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.08100749897766,
        "lng": 120.67762750154616,
        "ele": 422.8646958098567,
        "distanceKm": 46.32147883319642,
        "gradePct": 2.023236176768421,
        "smoothedEle": 423.8423910632834,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081443,
        "lng": 120.677901,
        "ele": 423.5,
        "distanceKm": 46.377405224138,
        "gradePct": 2.2697147590976066,
        "smoothedEle": 425.3279974172773,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.08174576935207,
        "lng": 120.67808195680279,
        "ele": 424.67067370869745,
        "distanceKm": 46.41582498179425,
        "gradePct": 2.4769608960344205,
        "smoothedEle": 426.47004848528184,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.082049,
        "lng": 120.678262,
        "ele": 426.25,
        "distanceKm": 46.45424478787873,
        "gradePct": 2.710926923830858,
        "smoothedEle": 427.7227340885465,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.082383602935487,
        "lng": 120.67845479708564,
        "ele": 428.147970856381,
        "distanceKm": 46.49635478257419,
        "gradePct": 3.0145735266550697,
        "smoothedEle": 429.2827971688707,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082718301467743,
        "lng": 120.67864739854281,
        "ele": 430.0739854281903,
        "distanceKm": 46.53846478026225,
        "gradePct": 3.3485917550808133,
        "smoothedEle": 430.99078249987747,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083053,
        "lng": 120.67884,
        "ele": 432,
        "distanceKm": 46.580574755002836,
        "gradePct": 3.6686788872867213,
        "smoothedEle": 432.7595714579096,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083387000000002,
        "lng": 120.6790295,
        "ele": 434.375,
        "distanceKm": 46.62246833794512,
        "gradePct": 3.922449561031443,
        "smoothedEle": 434.531555587855,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083721,
        "lng": 120.679219,
        "ele": 436.75,
        "distanceKm": 46.66436189860335,
        "gradePct": 4.075993821288164,
        "smoothedEle": 436.2495337213685,
        "gradeBand": "hard"
      },
      {
        "lat": 23.084219,
        "lng": 120.679444,
        "ele": 440.25,
        "distanceKm": 46.72432962229115,
        "gradePct": 3.9836121699871114,
        "smoothedEle": 438.38468354867166,
        "gradeBand": "hard"
      },
      {
        "lat": 23.084846,
        "lng": 120.679442,
        "ele": 443.5,
        "distanceKm": 46.794049237758294,
        "gradePct": 3.387820535839276,
        "smoothedEle": 440.1051463458193,
        "gradeBand": "hard"
      },
      {
        "lat": 23.085207,
        "lng": 120.679395,
        "ele": 444.25,
        "distanceKm": 46.834477540793664,
        "gradePct": 2.892577484535239,
        "smoothedEle": 440.8091859533959,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.08555,
        "lng": 120.679364,
        "ele": 444.5,
        "distanceKm": 46.87274904785887,
        "gradePct": 2.3453749066319127,
        "smoothedEle": 441.23890784756617,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.085925,
        "lng": 120.679326,
        "ele": 444.5,
        "distanceKm": 46.914627982951394,
        "gradePct": 1.6956403742033828,
        "smoothedEle": 441.4305375860583,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.086191,
        "lng": 120.679515,
        "ele": 443.25,
        "distanceKm": 46.94996367222976,
        "gradePct": 1.2059141266616507,
        "smoothedEle": 441.4290802544182,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.086455,
        "lng": 120.679773,
        "ele": 441.75,
        "distanceKm": 46.98943798441563,
        "gradePct": 0.5858322288954328,
        "smoothedEle": 441.163019444161,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.086837,
        "lng": 120.680155,
        "ele": 440.25,
        "distanceKm": 47.04715355406995,
        "gradePct": -0.24509543037521206,
        "smoothedEle": 440.46132448736546,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08721611108982,
        "lng": 120.68053719112298,
        "ele": 438.93142975588285,
        "distanceKm": 47.10464633646794,
        "gradePct": -0.8118937802149331,
        "smoothedEle": 439.76107598207597,
        "gradeBand": "descent"
      },
      {
        "lat": 23.087614,
        "lng": 120.680898,
        "ele": 437.5,
        "distanceKm": 47.16226217163948,
        "gradePct": -0.9429406637866443,
        "smoothedEle": 439.4603058113805,
        "gradeBand": "descent"
      },
      {
        "lat": 23.087930666666665,
        "lng": 120.681174,
        "ele": 437,
        "distanceKm": 47.20739420666,
        "gradePct": -0.6615706929365407,
        "smoothedEle": 439.6215697115552,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088247333333335,
        "lng": 120.68145,
        "ele": 436.5,
        "distanceKm": 47.25252620007331,
        "gradePct": -0.09467861186109737,
        "smoothedEle": 440.20652970476397,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088564,
        "lng": 120.681726,
        "ele": 436,
        "distanceKm": 47.29765815187833,
        "gradePct": 0.6756395911491114,
        "smoothedEle": 441.19746960151673,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.088935666666668,
        "lng": 120.68202933333333,
        "ele": 439.58333333333314,
        "distanceKm": 47.34933661244201,
        "gradePct": 1.6181979171733245,
        "smoothedEle": 442.7641765445043,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.089307333333334,
        "lng": 120.68233266666667,
        "ele": 443.16666666666686,
        "distanceKm": 47.40101502149052,
        "gradePct": 2.4491475401399834,
        "smoothedEle": 444.4970709541565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.089679,
        "lng": 120.682636,
        "ele": 446.75,
        "distanceKm": 47.452693379023174,
        "gradePct": 3.132262257604379,
        "smoothedEle": 446.4747248853149,
        "gradeBand": "hard"
      },
      {
        "lat": 23.090135,
        "lng": 120.682941,
        "ele": 451,
        "distanceKm": 47.51222727428494,
        "gradePct": 3.4258785878492204,
        "smoothedEle": 448.4909107008209,
        "gradeBand": "hard"
      },
      {
        "lat": 23.090552,
        "lng": 120.683123,
        "ele": 454.25,
        "distanceKm": 47.56219314010147,
        "gradePct": 3.204627719445409,
        "smoothedEle": 449.6045405511474,
        "gradeBand": "hard"
      },
      {
        "lat": 23.090865,
        "lng": 120.6832,
        "ele": 455.75,
        "distanceKm": 47.59787724258711,
        "gradePct": 2.8679481257405985,
        "smoothedEle": 450.12775035356043,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.091319,
        "lng": 120.683231,
        "ele": 454.75,
        "distanceKm": 47.64845929458259,
        "gradePct": 2.0057694078768407,
        "smoothedEle": 450.3242315828169,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.091699,
        "lng": 120.683106,
        "ele": 457.5,
        "distanceKm": 47.69260549749704,
        "gradePct": 1.0789818884755806,
        "smoothedEle": 449.9843597864212,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092058,
        "lng": 120.68302,
        "ele": 453.5,
        "distanceKm": 47.73348225214512,
        "gradePct": 0.2090908090442808,
        "smoothedEle": 449.3828192808327,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092457,
        "lng": 120.68296,
        "ele": 448.5,
        "distanceKm": 47.77827154333799,
        "gradePct": -0.7973967612334605,
        "smoothedEle": 448.24549285369824,
        "gradeBand": "descent"
      },
      {
        "lat": 23.092619,
        "lng": 120.682908,
        "ele": 446,
        "distanceKm": 47.79705397950658,
        "gradePct": -1.2251985585642553,
        "smoothedEle": 447.6652823341618,
        "gradeBand": "descent"
      },
      {
        "lat": 23.09288702566797,
        "lng": 120.68266745739368,
        "ele": 445.75,
        "distanceKm": 47.8357008487074,
        "gradePct": -1.993561269495558,
        "smoothedEle": 446.2875500593625,
        "gradeBand": "descent"
      },
      {
        "lat": 23.09316,
        "lng": 120.682433,
        "ele": 442.75,
        "distanceKm": 47.87438468853421,
        "gradePct": -2.556895934342882,
        "smoothedEle": 445.01084587291945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093334,
        "lng": 120.681874,
        "ele": 440.25,
        "distanceKm": 47.93474670762831,
        "gradePct": -2.8161074016383507,
        "smoothedEle": 443.7184963865668,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093562,
        "lng": 120.681472,
        "ele": 439,
        "distanceKm": 47.98305273387043,
        "gradePct": -2.338225441114043,
        "smoothedEle": 443.4213456333632,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093841,
        "lng": 120.681217,
        "ele": 437.75,
        "distanceKm": 48.02358360200103,
        "gradePct": -1.6447493624422174,
        "smoothedEle": 443.43002220855635,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094014,
        "lng": 120.681107,
        "ele": 437,
        "distanceKm": 48.045869102302994,
        "gradePct": -1.2237396960025075,
        "smoothedEle": 443.5044821634129,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094237,
        "lng": 120.681095,
        "ele": 436.5,
        "distanceKm": 48.070695964548165,
        "gradePct": -0.645325821677792,
        "smoothedEle": 443.8419352298549,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094776,
        "lng": 120.681187,
        "ele": 441,
        "distanceKm": 48.13136434430016,
        "gradePct": 0.6817413025601882,
        "smoothedEle": 445.1543953153191,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.09505,
        "lng": 120.681412,
        "ele": 447.5,
        "distanceKm": 48.1695468013454,
        "gradePct": 1.4215991315571241,
        "smoothedEle": 446.34762458712294,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.095266,
        "lng": 120.681673,
        "ele": 453.25,
        "distanceKm": 48.20545702780711,
        "gradePct": 2.1161030296519225,
        "smoothedEle": 447.65834785297545,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.095391,
        "lng": 120.68199,
        "ele": 452.5,
        "distanceKm": 48.24073440974845,
        "gradePct": 2.7747755984247138,
        "smoothedEle": 449.0368774081575,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.095499,
        "lng": 120.682351,
        "ele": 449.25,
        "distanceKm": 48.279562415441184,
        "gradePct": 3.306592762971472,
        "smoothedEle": 450.6469317608781,
        "gradeBand": "hard"
      },
      {
        "lat": 23.095737,
        "lng": 120.682588,
        "ele": 453,
        "distanceKm": 48.31545106388769,
        "gradePct": 3.748033285976053,
        "smoothedEle": 452.30620437692505,
        "gradeBand": "hard"
      },
      {
        "lat": 23.096162,
        "lng": 120.682593,
        "ele": 456.25,
        "distanceKm": 48.362711740102135,
        "gradePct": 4.1955023575259505,
        "smoothedEle": 454.5250287174778,
        "gradeBand": "hard"
      },
      {
        "lat": 23.096827,
        "lng": 120.682481,
        "ele": 458.5,
        "distanceKm": 48.437538566916785,
        "gradePct": 4.173296631871066,
        "smoothedEle": 457.25858714725234,
        "gradeBand": "hard"
      },
      {
        "lat": 23.097376,
        "lng": 120.68251,
        "ele": 458.75,
        "distanceKm": 48.498656685278085,
        "gradePct": 3.5653329992516434,
        "smoothedEle": 458.66040055177416,
        "gradeBand": "hard"
      },
      {
        "lat": 23.097855833333334,
        "lng": 120.6825915,
        "ele": 460.12500000000006,
        "distanceKm": 48.55265904808142,
        "gradePct": 3.1408958920489005,
        "smoothedEle": 460.334860311196,
        "gradeBand": "hard"
      },
      {
        "lat": 23.098335666666667,
        "lng": 120.682673,
        "ele": 461.49999999999994,
        "distanceKm": 48.60666140628861,
        "gradePct": 2.8160986307503206,
        "smoothedEle": 461.7627862519993,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0988155,
        "lng": 120.68275449999999,
        "ele": 462.875,
        "distanceKm": 48.66066375989979,
        "gradePct": 2.635002791001247,
        "smoothedEle": 463.05899527394865,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.099295333333334,
        "lng": 120.682836,
        "ele": 464.25000000000006,
        "distanceKm": 48.714666108915125,
        "gradePct": 2.5969261669808845,
        "smoothedEle": 464.3506596031491,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.099775166666667,
        "lng": 120.68291749999999,
        "ele": 465.62499999999994,
        "distanceKm": 48.76866845333408,
        "gradePct": 2.4252755680500058,
        "smoothedEle": 465.6087308321531,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100255,
        "lng": 120.682999,
        "ele": 467,
        "distanceKm": 48.82267079315704,
        "gradePct": 2.155581905458545,
        "smoothedEle": 466.45822056794185,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100644,
        "lng": 120.683071,
        "ele": 468.25,
        "distanceKm": 48.86654806829129,
        "gradePct": 1.7864985246988596,
        "smoothedEle": 466.7727371500048,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100955,
        "lng": 120.68328,
        "ele": 469.25,
        "distanceKm": 48.90720318747082,
        "gradePct": 1.3380687551566077,
        "smoothedEle": 466.84829396319196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101228,
        "lng": 120.683539,
        "ele": 471,
        "distanceKm": 48.947492558718984,
        "gradePct": 0.8182645896627205,
        "smoothedEle": 466.75193358185186,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101268,
        "lng": 120.683914,
        "ele": 470.75,
        "distanceKm": 48.986104096647225,
        "gradePct": 0.2925830780440564,
        "smoothedEle": 466.4681702897305,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101223,
        "lng": 120.684026,
        "ele": 470.25,
        "distanceKm": 48.99860448375621,
        "gradePct": 0.11909803615253453,
        "smoothedEle": 466.31783891784926,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101168,
        "lng": 120.684118,
        "ele": 469.75,
        "distanceKm": 49.00982693912458,
        "gradePct": -0.04351876383546421,
        "smoothedEle": 466.16914138421834,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100827000000002,
        "lng": 120.684372,
        "ele": 467.1250000000002,
        "distanceKm": 49.05579038337852,
        "gradePct": -0.6748417799087083,
        "smoothedEle": 465.34594145687186,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100486,
        "lng": 120.684626,
        "ele": 464.5,
        "distanceKm": 49.10175386490907,
        "gradePct": -1.2893438358120863,
        "smoothedEle": 464.25947882287244,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100185,
        "lng": 120.685102,
        "ele": 462.5,
        "distanceKm": 49.16083389010544,
        "gradePct": -2.0375366275680444,
        "smoothedEle": 462.5788124291537,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100088,
        "lng": 120.685589,
        "ele": 460.75,
        "distanceKm": 49.211798435305454,
        "gradePct": -2.665726170032305,
        "smoothedEle": 460.80237977742655,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100161,
        "lng": 120.685981,
        "ele": 459,
        "distanceKm": 49.2527054570612,
        "gradePct": -3.062487222631133,
        "smoothedEle": 459.27621768225686,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100365,
        "lng": 120.686284,
        "ele": 456.25,
        "distanceKm": 49.291110873108195,
        "gradePct": -3.2838262103819704,
        "smoothedEle": 457.9434003151492,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10079951403332,
        "lng": 120.68659056216312,
        "ele": 454.9878008112375,
        "distanceKm": 49.34870905184834,
        "gradePct": -3.6339012540658806,
        "smoothedEle": 455.65592866674433,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101246,
        "lng": 120.686879,
        "ele": 454,
        "distanceKm": 49.40645974996521,
        "gradePct": -4.26288978386992,
        "smoothedEle": 452.46268673157147,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101665,
        "lng": 120.687248,
        "ele": 452,
        "distanceKm": 49.466418592950866,
        "gradePct": -5.284024733279021,
        "smoothedEle": 448.23226904437115,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101981,
        "lng": 120.687616,
        "ele": 452,
        "distanceKm": 49.517909394232525,
        "gradePct": -6.369557855076431,
        "smoothedEle": 444.1399999586423,
        "gradeBand": "descent"
      },
      {
        "lat": 23.102093,
        "lng": 120.688014,
        "ele": 449,
        "distanceKm": 49.560478533548064,
        "gradePct": -7.087427731659046,
        "smoothedEle": 440.83029661120634,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10193910184087,
        "lng": 120.68835895877415,
        "ele": 440.83299059550853,
        "distanceKm": 49.59969135302813,
        "gradePct": -7.4961227261714285,
        "smoothedEle": 437.8446900699469,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101734,
        "lng": 120.688676,
        "ele": 433.25,
        "distanceKm": 49.63933476841902,
        "gradePct": -7.643773779391329,
        "smoothedEle": 434.8556304463228,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101594,
        "lng": 120.689014,
        "ele": 428,
        "distanceKm": 49.677248248341314,
        "gradePct": -7.662600322960321,
        "smoothedEle": 432.04637361685246,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101615,
        "lng": 120.689392,
        "ele": 422.5,
        "distanceKm": 49.71597993930481,
        "gradePct": -7.506385013469448,
        "smoothedEle": 429.2805747730433,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101805,
        "lng": 120.689706,
        "ele": 418.25,
        "distanceKm": 49.75442147131219,
        "gradePct": -7.365389856329481,
        "smoothedEle": 426.5704467665228,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10219961115776,
        "lng": 120.69001981240505,
        "ele": 417.3416713912867,
        "distanceKm": 49.8087860993299,
        "gradePct": -7.135418163476044,
        "smoothedEle": 422.8881222365218,
        "gradeBand": "descent"
      },
      {
        "lat": 23.102598,
        "lng": 120.690328,
        "ele": 417,
        "distanceKm": 49.86315473282625,
        "gradePct": -6.543421933700691,
        "smoothedEle": 420.00381016879214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.102922055809163,
        "lng": 120.69059621102168,
        "ele": 416.95174123784045,
        "distanceKm": 49.908441807561125,
        "gradePct": -5.684327055555291,
        "smoothedEle": 418.45021257593186,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10324,
        "lng": 120.690873,
        "ele": 416.75,
        "distanceKm": 49.95373314693545,
        "gradePct": -4.616126952302741,
        "smoothedEle": 417.3867197304778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.103521,
        "lng": 120.691156,
        "ele": 416.75,
        "distanceKm": 49.996325161689654,
        "gradePct": -3.4663598162678473,
        "smoothedEle": 416.7994296490079,
        "gradeBand": "descent"
      },
      {
        "lat": 23.1039185,
        "lng": 120.691542,
        "ele": 417.24999999999994,
        "distanceKm": 50.05558917175056,
        "gradePct": -2.0928469239279637,
        "smoothedEle": 416.2194771370257,
        "gradeBand": "descent"
      },
      {
        "lat": 23.104316,
        "lng": 120.691928,
        "ele": 417.75,
        "distanceKm": 50.114853103975136,
        "gradePct": -1.725432543236199,
        "smoothedEle": 414.84880286082677,
        "gradeBand": "descent"
      },
      {
        "lat": 23.104673,
        "lng": 120.692235,
        "ele": 416.25,
        "distanceKm": 50.16546642035905,
        "gradePct": -2.068164683453573,
        "smoothedEle": 413.0886033444633,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10493,
        "lng": 120.692477,
        "ele": 414.25,
        "distanceKm": 50.20327189631495,
        "gradePct": -2.6090381155332154,
        "smoothedEle": 411.513373269587,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105223,
        "lng": 120.69277,
        "ele": 414.75,
        "distanceKm": 50.247537861595,
        "gradePct": -3.4103432028092953,
        "smoothedEle": 409.47758016102324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105395,
        "lng": 120.693092,
        "ele": 412.25,
        "distanceKm": 50.2856213489545,
        "gradePct": -3.9061806099887817,
        "smoothedEle": 407.7125225749172,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105464,
        "lng": 120.693448,
        "ele": 407.25,
        "distanceKm": 50.32283102763727,
        "gradePct": -4.3072401493930625,
        "smoothedEle": 405.9568711248505,
        "gradeBand": "descent"
      },
      {
        "lat": 23.1054935,
        "lng": 120.69393099999999,
        "ele": 401.625,
        "distanceKm": 50.372338861418264,
        "gradePct": -4.612338419576295,
        "smoothedEle": 403.5775744472937,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105523,
        "lng": 120.694414,
        "ele": 396,
        "distanceKm": 50.42184668437307,
        "gradePct": -4.692463293349324,
        "smoothedEle": 401.27419160717676,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105645,
        "lng": 120.695016,
        "ele": 393.75,
        "distanceKm": 50.48489323906497,
        "gradePct": -4.577529848095074,
        "smoothedEle": 398.59120862978995,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105894714285714,
        "lng": 120.69544257142857,
        "ele": 393.67857142857144,
        "distanceKm": 50.53660766415899,
        "gradePct": -4.407422530307195,
        "smoothedEle": 396.4799347748244,
        "gradeBand": "descent"
      },
      {
        "lat": 23.106144428571426,
        "lng": 120.69586914285713,
        "ele": 393.60714285714283,
        "distanceKm": 50.58832202081116,
        "gradePct": -3.986640989323007,
        "smoothedEle": 394.86066584806167,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10639414285714,
        "lng": 120.69629571428571,
        "ele": 393.5357142857143,
        "distanceKm": 50.64003630902369,
        "gradePct": -3.2473889080875824,
        "smoothedEle": 394.0053436845356,
        "gradeBand": "descent"
      },
      {
        "lat": 23.106643857142856,
        "lng": 120.69672228571429,
        "ele": 393.4642857142857,
        "distanceKm": 50.691750528794486,
        "gradePct": -2.076059554425796,
        "smoothedEle": 394.1591363648212,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10689357142857,
        "lng": 120.69714885714286,
        "ele": 393.39285714285717,
        "distanceKm": 50.74346468012288,
        "gradePct": -0.5678787402436489,
        "smoothedEle": 395.1294718701682,
        "gradeBand": "descent"
      },
      {
        "lat": 23.107143285714283,
        "lng": 120.69757542857143,
        "ele": 393.32142857142856,
        "distanceKm": 50.79517876300676,
        "gradePct": 0.41421046141263085,
        "smoothedEle": 395.5756805194971,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.107393,
        "lng": 120.698002,
        "ele": 393.25,
        "distanceKm": 50.84689277744835,
        "gradePct": 0.7556350101559879,
        "smoothedEle": 395.53700412475524,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.107708075770724,
        "lng": 120.69847013654147,
        "ele": 397.5193675884083,
        "distanceKm": 50.906220331148944,
        "gradePct": 0.5386000420874021,
        "smoothedEle": 395.50783975358905,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.108026,
        "lng": 120.698936,
        "ele": 404,
        "distanceKm": 50.96554852574458,
        "gradePct": 0.08879034555664463,
        "smoothedEle": 395.497600326558,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.107764625561664,
        "lng": 120.69855330495785,
        "ele": 398.70241760804373,
        "distanceKm": 51.0142988967513,
        "gradePct": -0.028526046263692297,
        "smoothedEle": 395.5043286699656,
        "gradeBand": "descent"
      },
      {
        "lat": 23.107504,
        "lng": 120.69817,
        "ele": 393.25,
        "distanceKm": 51.063049876946245,
        "gradePct": -0.00245008289314793,
        "smoothedEle": 395.5241614159626,
        "gradeBand": "descent"
      },
      {
        "lat": 23.107263885810106,
        "lng": 120.69778144223626,
        "ele": 393.28693197651387,
        "distanceKm": 51.11092555683668,
        "gradePct": 0.02471362693060506,
        "smoothedEle": 395.55645493461674,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.107032616408663,
        "lng": 120.69738637905965,
        "ele": 393.3530845512976,
        "distanceKm": 51.15881980017819,
        "gradePct": -0.08900591814008736,
        "smoothedEle": 395.32074979806606,
        "gradeBand": "descent"
      },
      {
        "lat": 23.106801347007217,
        "lng": 120.69699131588304,
        "ele": 393.4192371260813,
        "distanceKm": 51.20671410222577,
        "gradePct": -0.4076744398583627,
        "smoothedEle": 394.6879329653491,
        "gradeBand": "descent"
      },
      {
        "lat": 23.106570077605774,
        "lng": 120.69659625270643,
        "ele": 393.4853897008651,
        "distanceKm": 51.25460846297845,
        "gradePct": -0.8136131427261715,
        "smoothedEle": 393.893501016603,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10633880820433,
        "lng": 120.69620118952983,
        "ele": 393.5515422756488,
        "distanceKm": 51.30250288243471,
        "gradePct": -0.7679865863922719,
        "smoothedEle": 394.01480042647484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10610753880289,
        "lng": 120.69580612635322,
        "ele": 393.61769485043254,
        "distanceKm": 51.35039736059646,
        "gradePct": -0.17086791406688676,
        "smoothedEle": 395.02046388401794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105876269401442,
        "lng": 120.6954110631766,
        "ele": 393.68384742521624,
        "distanceKm": 51.398291897462165,
        "gradePct": 0.8845487333324955,
        "smoothedEle": 396.56831116302266,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.105645,
        "lng": 120.695016,
        "ele": 393.75,
        "distanceKm": 51.44618649303088,
        "gradePct": 2.2503775022600188,
        "smoothedEle": 398.5339526762739,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.105552,
        "lng": 120.694681,
        "ele": 394,
        "distanceKm": 51.48197532850931,
        "gradePct": 3.0358501025447846,
        "smoothedEle": 400.03451168993973,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105514284228246,
        "lng": 120.69427129770308,
        "ele": 397.66190563173575,
        "distanceKm": 51.524087145272716,
        "gradePct": 3.7101306127235647,
        "smoothedEle": 401.88827682885494,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105489142114124,
        "lng": 120.69385964885154,
        "ele": 402.4559528158679,
        "distanceKm": 51.56628142984644,
        "gradePct": 4.172029434388688,
        "smoothedEle": 403.87786132911447,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105464,
        "lng": 120.693448,
        "ele": 407.25,
        "distanceKm": 51.608475722285064,
        "gradePct": 4.4585184213495035,
        "smoothedEle": 405.903302236212,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105395,
        "lng": 120.693092,
        "ele": 412.25,
        "distanceKm": 51.645685400967835,
        "gradePct": 4.572896170733478,
        "smoothedEle": 407.6591797044861,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105223,
        "lng": 120.69277,
        "ele": 414.75,
        "distanceKm": 51.683768888327336,
        "gradePct": 4.655363877612407,
        "smoothedEle": 409.42419207463433,
        "gradeBand": "hard"
      },
      {
        "lat": 23.10493,
        "lng": 120.692477,
        "ele": 414.25,
        "distanceKm": 51.72803485360738,
        "gradePct": 4.68951331470898,
        "smoothedEle": 411.4534495060978,
        "gradeBand": "hard"
      },
      {
        "lat": 23.104627847685983,
        "lng": 120.69219617153949,
        "ele": 416.43971560510204,
        "distanceKm": 51.772236316318526,
        "gradePct": 4.584276139820552,
        "smoothedEle": 413.3322643710412,
        "gradeBand": "hard"
      },
      {
        "lat": 23.104316,
        "lng": 120.691928,
        "ele": 417.75,
        "distanceKm": 51.81644821160034,
        "gradePct": 4.280772977021481,
        "smoothedEle": 414.8410598333087,
        "gradeBand": "hard"
      },
      {
        "lat": 23.1039185,
        "lng": 120.691542,
        "ele": 417.24999999999994,
        "distanceKm": 51.87571214382491,
        "gradePct": 3.5934782451904312,
        "smoothedEle": 416.237751728332,
        "gradeBand": "hard"
      },
      {
        "lat": 23.103521,
        "lng": 120.691156,
        "ele": 416.75,
        "distanceKm": 51.93497615388582,
        "gradePct": 2.535947598913331,
        "smoothedEle": 416.820389649165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.10324,
        "lng": 120.690873,
        "ele": 416.75,
        "distanceKm": 51.977568168640026,
        "gradePct": 1.9489381322686947,
        "smoothedEle": 417.41209787891506,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.102846,
        "lng": 120.69053,
        "ele": 417,
        "distanceKm": 52.033693709542774,
        "gradePct": 1.8128730355881002,
        "smoothedEle": 418.8732360264445,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.10243274319568,
        "lng": 120.69020015983061,
        "ele": 417.3208648389027,
        "distanceKm": 52.090699549833076,
        "gradePct": 2.3750718055425413,
        "smoothedEle": 421.13523992622964,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.102015,
        "lng": 120.689877,
        "ele": 417.5,
        "distanceKm": 52.14770952158975,
        "gradePct": 3.8081535595787015,
        "smoothedEle": 424.6135946799693,
        "gradeBand": "hard"
      },
      {
        "lat": 23.101713,
        "lng": 120.689621,
        "ele": 419,
        "distanceKm": 52.19029166393569,
        "gradePct": 4.8930395628570285,
        "smoothedEle": 427.52941273166863,
        "gradeBand": "hard"
      },
      {
        "lat": 23.10159,
        "lng": 120.689193,
        "ele": 426.25,
        "distanceKm": 52.23615366552827,
        "gradePct": 5.894966491972697,
        "smoothedEle": 430.76078058850464,
        "gradeBand": "hard"
      },
      {
        "lat": 23.101674,
        "lng": 120.688784,
        "ele": 431.25,
        "distanceKm": 52.27901562075643,
        "gradePct": 6.61020613281922,
        "smoothedEle": 433.8920313943921,
        "gradeBand": "steep"
      },
      {
        "lat": 23.102018,
        "lng": 120.688237,
        "ele": 443.75,
        "distanceKm": 52.34678820350282,
        "gradePct": 7.206752879709466,
        "smoothedEle": 438.9708879725399,
        "gradeBand": "steep"
      },
      {
        "lat": 23.102095,
        "lng": 120.687897,
        "ele": 450.75,
        "distanceKm": 52.382601285603066,
        "gradePct": 7.351991147649793,
        "smoothedEle": 441.7067953133021,
        "gradeBand": "steep"
      },
      {
        "lat": 23.101807,
        "lng": 120.687405,
        "ele": 451.25,
        "distanceKm": 52.44224804338568,
        "gradePct": 7.625672201768571,
        "smoothedEle": 446.45734559562413,
        "gradeBand": "steep"
      },
      {
        "lat": 23.101482,
        "lng": 120.687073,
        "ele": 453,
        "distanceKm": 52.4918365751292,
        "gradePct": 7.658378989229709,
        "smoothedEle": 450.16958776381637,
        "gradeBand": "steep"
      },
      {
        "lat": 23.101151901103727,
        "lng": 120.68681821044754,
        "ele": 454.20818339883635,
        "distanceKm": 52.53685194183343,
        "gradePct": 7.43585393135269,
        "smoothedEle": 453.0979754312893,
        "gradeBand": "steep"
      },
      {
        "lat": 23.10080345055186,
        "lng": 120.68659310522378,
        "ele": 454.9790916994181,
        "distanceKm": 52.58192225958872,
        "gradePct": 6.926362152714903,
        "smoothedEle": 455.50764605331216,
        "gradeBand": "steep"
      },
      {
        "lat": 23.100455,
        "lng": 120.686368,
        "ele": 455.75,
        "distanceKm": 52.62699260785458,
        "gradePct": 6.063771327720388,
        "smoothedEle": 457.3698731142265,
        "gradeBand": "steep"
      },
      {
        "lat": 23.100161,
        "lng": 120.685981,
        "ele": 459,
        "distanceKm": 52.67832942851039,
        "gradePct": 5.022826033603067,
        "smoothedEle": 459.2040826644895,
        "gradeBand": "hard"
      },
      {
        "lat": 23.100088,
        "lng": 120.685589,
        "ele": 460.75,
        "distanceKm": 52.71923645026613,
        "gradePct": 4.41602715094782,
        "smoothedEle": 460.78408797953676,
        "gradeBand": "hard"
      },
      {
        "lat": 23.100132,
        "lng": 120.685242,
        "ele": 461.75,
        "distanceKm": 52.755063095615,
        "gradePct": 3.993592108461684,
        "smoothedEle": 462.05881336192385,
        "gradeBand": "hard"
      },
      {
        "lat": 23.100314,
        "lng": 120.684828,
        "ele": 463.25,
        "distanceKm": 52.80199437579647,
        "gradePct": 3.590003604395099,
        "smoothedEle": 463.51699759623955,
        "gradeBand": "hard"
      },
      {
        "lat": 23.100722313719885,
        "lng": 120.68444997746377,
        "ele": 466.31913054162425,
        "distanceKm": 52.861628917156644,
        "gradePct": 3.2151502864928543,
        "smoothedEle": 465.0376918758365,
        "gradeBand": "hard"
      },
      {
        "lat": 23.101168,
        "lng": 120.684118,
        "ele": 469.75,
        "distanceKm": 52.92170304924157,
        "gradePct": 2.6472076400731246,
        "smoothedEle": 466.16626576972396,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101282,
        "lng": 120.683791,
        "ele": 471,
        "distanceKm": 52.95746984839853,
        "gradePct": 2.2135029337573227,
        "smoothedEle": 466.5605985440293,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101182,
        "lng": 120.683466,
        "ele": 470.75,
        "distanceKm": 52.99252094214257,
        "gradePct": 1.7862808877862082,
        "smoothedEle": 466.7952138618336,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100644,
        "lng": 120.683071,
        "ele": 468.25,
        "distanceKm": 53.06470792196334,
        "gradePct": 0.8547198777208272,
        "smoothedEle": 466.8049749046371,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100255,
        "lng": 120.682999,
        "ele": 467,
        "distanceKm": 53.10858519709759,
        "gradePct": 0.2740056473798763,
        "smoothedEle": 466.4678404542528,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.099775166666667,
        "lng": 120.68291749999999,
        "ele": 465.62499999999994,
        "distanceKm": 53.16258753692055,
        "gradePct": -0.47939383439696603,
        "smoothedEle": 465.6360662433498,
        "gradeBand": "descent"
      },
      {
        "lat": 23.099295333333334,
        "lng": 120.682836,
        "ele": 464.25000000000006,
        "distanceKm": 53.2165898813395,
        "gradePct": -1.2089811760404643,
        "smoothedEle": 464.38050608483417,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0988155,
        "lng": 120.68275449999999,
        "ele": 462.875,
        "distanceKm": 53.270592230354836,
        "gradePct": -1.8592793904270215,
        "smoothedEle": 463.04120358336456,
        "gradeBand": "descent"
      },
      {
        "lat": 23.098335666666667,
        "lng": 120.682673,
        "ele": 461.49999999999994,
        "distanceKm": 53.32459458396602,
        "gradePct": -2.223655278448202,
        "smoothedEle": 461.77394437581813,
        "gradeBand": "descent"
      },
      {
        "lat": 23.097855833333334,
        "lng": 120.6825915,
        "ele": 460.12500000000006,
        "distanceKm": 53.3785969421732,
        "gradePct": -2.4312809324133804,
        "smoothedEle": 460.4012840311836,
        "gradeBand": "descent"
      },
      {
        "lat": 23.097376,
        "lng": 120.68251,
        "ele": 458.75,
        "distanceKm": 53.43259930497654,
        "gradePct": -2.634043768598465,
        "smoothedEle": 458.7153717243947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.096924,
        "lng": 120.682467,
        "ele": 458.75,
        "distanceKm": 53.48305154727598,
        "gradePct": -2.639175388098911,
        "smoothedEle": 457.47047325271734,
        "gradeBand": "descent"
      },
      {
        "lat": 23.09654284878951,
        "lng": 120.68252885704598,
        "ele": 457.5385861299242,
        "distanceKm": 53.52590332691457,
        "gradePct": -2.692033204578725,
        "smoothedEle": 456.3566116500323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.096162,
        "lng": 120.682593,
        "ele": 456.25,
        "distanceKm": 53.56875702183418,
        "gradePct": -3.0557189321151688,
        "smoothedEle": 454.5399624376524,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095833,
        "lng": 120.682611,
        "ele": 455.5,
        "distanceKm": 53.60538650130809,
        "gradePct": -3.356187545640902,
        "smoothedEle": 452.8525594712048,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095652,
        "lng": 120.682542,
        "ele": 450.75,
        "distanceKm": 53.626714344435,
        "gradePct": -3.514162541214865,
        "smoothedEle": 451.87077059193507,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095499,
        "lng": 120.682351,
        "ele": 449.25,
        "distanceKm": 53.652619832132004,
        "gradePct": -3.750860791731388,
        "smoothedEle": 450.7196478424793,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095391,
        "lng": 120.68199,
        "ele": 452.5,
        "distanceKm": 53.69144783782474,
        "gradePct": -4.037373525423617,
        "smoothedEle": 449.1774784248552,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095179,
        "lng": 120.681546,
        "ele": 451.25,
        "distanceKm": 53.7426153237524,
        "gradePct": -4.165329274812106,
        "smoothedEle": 447.31749993319124,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094776,
        "lng": 120.681187,
        "ele": 441,
        "distanceKm": 53.800549956660454,
        "gradePct": -3.810385275138716,
        "smoothedEle": 445.4545930640108,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094237,
        "lng": 120.681095,
        "ele": 437,
        "distanceKm": 53.86121833641245,
        "gradePct": -3.132777924712867,
        "smoothedEle": 444.112576890693,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094014,
        "lng": 120.681107,
        "ele": 437.75,
        "distanceKm": 53.88604519865762,
        "gradePct": -2.786828408896429,
        "smoothedEle": 443.81840344687987,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093841,
        "lng": 120.681217,
        "ele": 438.5,
        "distanceKm": 53.90833069895958,
        "gradePct": -2.4561169119063146,
        "smoothedEle": 443.6515392758885,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093562,
        "lng": 120.681472,
        "ele": 440,
        "distanceKm": 53.948861567090184,
        "gradePct": -1.661955758674144,
        "smoothedEle": 443.7927384399919,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093334,
        "lng": 120.681874,
        "ele": 441.5,
        "distanceKm": 53.99716759333231,
        "gradePct": -0.6790244592239293,
        "smoothedEle": 444.20530513293426,
        "gradeBand": "descent"
      },
      {
        "lat": 23.09323,
        "lng": 120.68228,
        "ele": 441.75,
        "distanceKm": 54.04027530360605,
        "gradePct": 0.19140080233759432,
        "smoothedEle": 444.95864929408424,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092944,
        "lng": 120.682613,
        "ele": 445.75,
        "distanceKm": 54.086874624911815,
        "gradePct": 1.2678389487583492,
        "smoothedEle": 446.347870959957,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092695,
        "lng": 120.682851,
        "ele": 445.75,
        "distanceKm": 54.12374229272951,
        "gradePct": 1.977042433837511,
        "smoothedEle": 447.65931418915557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092058,
        "lng": 120.68302,
        "ele": 453.5,
        "distanceKm": 54.19665238987092,
        "gradePct": 2.677063466702284,
        "smoothedEle": 449.55503187437955,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.091699,
        "lng": 120.683106,
        "ele": 457.5,
        "distanceKm": 54.237529144519,
        "gradePct": 2.6172100333495987,
        "smoothedEle": 450.1450778785015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.091319,
        "lng": 120.683231,
        "ele": 454.75,
        "distanceKm": 54.281675347433456,
        "gradePct": 2.093952070719807,
        "smoothedEle": 450.3807739400615,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.090865,
        "lng": 120.6832,
        "ele": 455.75,
        "distanceKm": 54.33225739942893,
        "gradePct": 1.146450079013517,
        "smoothedEle": 450.173613563403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.090552,
        "lng": 120.683123,
        "ele": 454.25,
        "distanceKm": 54.36794150191457,
        "gradePct": 0.42104411384695456,
        "smoothedEle": 449.6506152942171,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.090135,
        "lng": 120.682941,
        "ele": 451,
        "distanceKm": 54.417907367731104,
        "gradePct": -0.6461055515987845,
        "smoothedEle": 448.56963120322513,
        "gradeBand": "descent"
      },
      {
        "lat": 23.089769,
        "lng": 120.682703,
        "ele": 447.75,
        "distanceKm": 54.465330218011225,
        "gradePct": -1.6605533057850483,
        "smoothedEle": 446.9724008734811,
        "gradeBand": "descent"
      },
      {
        "lat": 23.089365488279327,
        "lng": 120.68238012944771,
        "ele": 443.727353365695,
        "distanceKm": 54.52104266758259,
        "gradePct": -2.7143098400469414,
        "smoothedEle": 444.7909241684944,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088964744139663,
        "lng": 120.68205306472385,
        "ele": 439.86367668284777,
        "distanceKm": 54.57676414870606,
        "gradePct": -3.2731895408032403,
        "smoothedEle": 442.9133630902062,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088564,
        "lng": 120.681726,
        "ele": 436,
        "distanceKm": 54.632485689719495,
        "gradePct": -3.4334192730477833,
        "smoothedEle": 441.2117859399227,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088247333333335,
        "lng": 120.68145,
        "ele": 436.5,
        "distanceKm": 54.67761764152451,
        "gradePct": -3.1313187737038515,
        "smoothedEle": 440.22863696446535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.087930666666665,
        "lng": 120.681174,
        "ele": 437,
        "distanceKm": 54.72274963493783,
        "gradePct": -2.55035708609062,
        "smoothedEle": 439.6326929417863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.087614,
        "lng": 120.680898,
        "ele": 437.5,
        "distanceKm": 54.76788166995834,
        "gradePct": -1.8688101388303568,
        "smoothedEle": 439.4750420421996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.087298625805126,
        "lng": 120.68061118821475,
        "ele": 438.6718729461127,
        "distanceKm": 54.813603347248964,
        "gradePct": -1.0645559149653954,
        "smoothedEle": 439.6592870662621,
        "gradeBand": "descent"
      },
      {
        "lat": 23.086982,
        "lng": 120.680326,
        "ele": 439.75,
        "distanceKm": 54.85932576318497,
        "gradePct": -0.2619386336732495,
        "smoothedEle": 440.10322776086247,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08672472550609,
        "lng": 120.68004272550608,
        "ele": 440.6908684315782,
        "distanceKm": 54.900044422492556,
        "gradePct": 0.39573635129121393,
        "smoothedEle": 440.72397592565864,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.086455,
        "lng": 120.679773,
        "ele": 441.75,
        "distanceKm": 54.94079668483356,
        "gradePct": 0.7957765377622537,
        "smoothedEle": 441.16120579212145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.086191,
        "lng": 120.679515,
        "ele": 443.25,
        "distanceKm": 54.98027099701943,
        "gradePct": 0.9266489915007281,
        "smoothedEle": 441.37826539972264,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.085925,
        "lng": 120.679326,
        "ele": 444.5,
        "distanceKm": 55.015606686297794,
        "gradePct": 0.8861143888293997,
        "smoothedEle": 441.45096721609036,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.08555,
        "lng": 120.679364,
        "ele": 444.5,
        "distanceKm": 55.05748562139032,
        "gradePct": 0.5683104135643963,
        "smoothedEle": 441.22198177562456,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.085207,
        "lng": 120.679395,
        "ele": 444.25,
        "distanceKm": 55.095757128455524,
        "gradePct": 0.05895574653626939,
        "smoothedEle": 440.7765284420191,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.084846,
        "lng": 120.679442,
        "ele": 443.5,
        "distanceKm": 55.136185431490894,
        "gradePct": -0.5177295118898184,
        "smoothedEle": 440.0762727620555,
        "gradeBand": "descent"
      },
      {
        "lat": 23.084486,
        "lng": 120.679459,
        "ele": 441.5,
        "distanceKm": 55.17625341345593,
        "gradePct": -1.0982849038737597,
        "smoothedEle": 439.15960388059347,
        "gradeBand": "descent"
      },
      {
        "lat": 23.083967,
        "lng": 120.679347,
        "ele": 438.5,
        "distanceKm": 55.23508986209318,
        "gradePct": -1.9876620654829085,
        "smoothedEle": 437.3691130699433,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08350788898804,
        "lng": 120.67909808821328,
        "ele": 435.2346148101679,
        "distanceKm": 55.29213800286363,
        "gradePct": -2.8352195511011353,
        "smoothedEle": 435.14821340764877,
        "gradeBand": "descent"
      },
      {
        "lat": 23.083053,
        "lng": 120.67884,
        "ele": 432,
        "distanceKm": 55.34919467267079,
        "gradePct": -3.5197512074616735,
        "smoothedEle": 432.73914700859086,
        "gradeBand": "descent"
      },
      {
        "lat": 23.082718301467743,
        "lng": 120.67864739854281,
        "ele": 430.0739854281903,
        "distanceKm": 55.391304647411374,
        "gradePct": -3.865954827749137,
        "smoothedEle": 430.9696601881954,
        "gradeBand": "descent"
      },
      {
        "lat": 23.082383602935487,
        "lng": 120.67845479708564,
        "ele": 428.147970856381,
        "distanceKm": 55.43341464509944,
        "gradePct": -4.066531082473431,
        "smoothedEle": 429.2870305392642,
        "gradeBand": "descent"
      },
      {
        "lat": 23.082049,
        "lng": 120.678262,
        "ele": 426.25,
        "distanceKm": 55.4755246397949,
        "gradePct": -4.027082836854134,
        "smoothedEle": 427.7408104843234,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08174576935207,
        "lng": 120.67808195680279,
        "ele": 424.67067370869745,
        "distanceKm": 55.513944445879375,
        "gradePct": -3.9011934938864687,
        "smoothedEle": 426.4251072589127,
        "gradeBand": "descent"
      },
      {
        "lat": 23.081443,
        "lng": 120.677901,
        "ele": 423.5,
        "distanceKm": 55.552364203535625,
        "gradePct": -3.641255365687675,
        "smoothedEle": 425.32345065725946,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08100749897766,
        "lng": 120.67762750154616,
        "ele": 422.8646958098567,
        "distanceKm": 55.608290594477204,
        "gradePct": -3.224272656527415,
        "smoothedEle": 423.8423910632834,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080571997955314,
        "lng": 120.67735400309229,
        "ele": 422.2293916197134,
        "distanceKm": 55.66421703075313,
        "gradePct": -2.8120816827250392,
        "smoothedEle": 422.53184669323235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080136496932973,
        "lng": 120.67708050463844,
        "ele": 421.59408742957,
        "distanceKm": 55.720143512360565,
        "gradePct": -2.428923890040857,
        "smoothedEle": 421.38950607980667,
        "gradeBand": "descent"
      },
      {
        "lat": 23.079701,
        "lng": 120.676807,
        "ele": 421,
        "distanceKm": 55.77606996206202,
        "gradePct": -2.1746142448762646,
        "smoothedEle": 420.3464391028949,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07936266666667,
        "lng": 120.67658399999999,
        "ele": 420.08333333333337,
        "distanceKm": 55.82006677339489,
        "gradePct": -1.985862103973034,
        "smoothedEle": 419.59471140369465,
        "gradeBand": "descent"
      },
      {
        "lat": 23.079024333333333,
        "lng": 120.676361,
        "ele": 419.16666666666663,
        "distanceKm": 55.86406361448814,
        "gradePct": -1.8294205740399743,
        "smoothedEle": 418.87660060387145,
        "gradeBand": "descent"
      },
      {
        "lat": 23.078686,
        "lng": 120.676138,
        "ele": 418.25,
        "distanceKm": 55.908060485342226,
        "gradePct": -1.7380084118595713,
        "smoothedEle": 418.16029420607623,
        "gradeBand": "descent"
      },
      {
        "lat": 23.078200000000002,
        "lng": 120.675861,
        "ele": 416.7500000000001,
        "distanceKm": 55.969079646092446,
        "gradePct": -1.6646134794990008,
        "smoothedEle": 417.14758637263776,
        "gradeBand": "descent"
      },
      {
        "lat": 23.077714,
        "lng": 120.675584,
        "ele": 415.25,
        "distanceKm": 56.030098854401025,
        "gradePct": -1.6604066737180339,
        "smoothedEle": 416.11015571621334,
        "gradeBand": "descent"
      },
      {
        "lat": 23.077303886487453,
        "lng": 120.67533872310825,
        "ele": 414.92032675840375,
        "distanceKm": 56.082148419364295,
        "gradePct": -1.7214546645164757,
        "smoothedEle": 415.13925530282063,
        "gradeBand": "descent"
      },
      {
        "lat": 23.076893861349063,
        "lng": 120.67509327251761,
        "ele": 414.40938837019917,
        "distanceKm": 56.13419798126291,
        "gradePct": -1.821286336312627,
        "smoothedEle": 414.0839291551242,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07648393067453,
        "lng": 120.6748476362588,
        "ele": 413.7046941850995,
        "distanceKm": 56.18624754620275,
        "gradePct": -1.9529170854750655,
        "smoothedEle": 412.9498686067581,
        "gradeBand": "descent"
      },
      {
        "lat": 23.076074,
        "lng": 120.674602,
        "ele": 413,
        "distanceKm": 56.238297148120935,
        "gradePct": -2.1039340981708663,
        "smoothedEle": 411.74936161612214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.075511,
        "lng": 120.674333,
        "ele": 411.25,
        "distanceKm": 56.306681095774955,
        "gradePct": -2.3321796599211053,
        "smoothedEle": 409.9774859386907,
        "gradeBand": "descent"
      },
      {
        "lat": 23.075184218151882,
        "lng": 120.67421941506313,
        "ele": 409.80977493141194,
        "distanceKm": 56.34483024735561,
        "gradePct": -2.434012337134839,
        "smoothedEle": 408.9842477219671,
        "gradeBand": "descent"
      },
      {
        "lat": 23.074848,
        "lng": 120.674139,
        "ele": 408.25,
        "distanceKm": 56.38311041490315,
        "gradePct": -2.521167480814391,
        "smoothedEle": 407.97588574079106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.074459,
        "lng": 120.673972,
        "ele": 406.75,
        "distanceKm": 56.42961681725335,
        "gradePct": -2.6070568750362977,
        "smoothedEle": 406.7354568494718,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07415573665121,
        "lng": 120.67377348291284,
        "ele": 404.79417151197435,
        "distanceKm": 56.46898117478163,
        "gradePct": -2.6747240997358874,
        "smoothedEle": 405.6048689304675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.073881,
        "lng": 120.673529,
        "ele": 402.75,
        "distanceKm": 56.508462644902835,
        "gradePct": -2.720459645852078,
        "smoothedEle": 404.49018284536936,
        "gradeBand": "descent"
      },
      {
        "lat": 23.073499666666667,
        "lng": 120.67325766666667,
        "ele": 402.0833333333333,
        "distanceKm": 56.559142331821356,
        "gradePct": -2.708697989452294,
        "smoothedEle": 403.1898481202671,
        "gradeBand": "descent"
      },
      {
        "lat": 23.073118333333333,
        "lng": 120.67298633333333,
        "ele": 401.4166666666667,
        "distanceKm": 56.609822061843204,
        "gradePct": -2.643003814883533,
        "smoothedEle": 401.9774192467657,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072737,
        "lng": 120.672715,
        "ele": 400.75,
        "distanceKm": 56.660501834966205,
        "gradePct": -2.5248769403926516,
        "smoothedEle": 400.79865107461455,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072316,
        "lng": 120.673031,
        "ele": 398.75,
        "distanceKm": 56.71739209685427,
        "gradePct": -2.4367026056002254,
        "smoothedEle": 399.387666580913,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07196,
        "lng": 120.672975,
        "ele": 399,
        "distanceKm": 56.75738993952678,
        "gradePct": -2.428721113325758,
        "smoothedEle": 398.37736861322156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071466207698514,
        "lng": 120.67279266253296,
        "ele": 398.7893086265271,
        "distanceKm": 56.815379211152035,
        "gradePct": -2.554631283491509,
        "smoothedEle": 396.7389021403584,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070976,
        "lng": 120.672599,
        "ele": 397.25,
        "distanceKm": 56.873376719065725,
        "gradePct": -2.8208950921067695,
        "smoothedEle": 394.8375397760358,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070697,
        "lng": 120.67252,
        "ele": 395.75,
        "distanceKm": 56.905435559382454,
        "gradePct": -2.9952229838531963,
        "smoothedEle": 393.69376502012614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070464,
        "lng": 120.672565,
        "ele": 394,
        "distanceKm": 56.93174983343228,
        "gradePct": -3.1831351559513736,
        "smoothedEle": 392.6587369074997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070045333333333,
        "lng": 120.67269083333333,
        "ele": 391.41666666666663,
        "distanceKm": 56.98005055329305,
        "gradePct": -3.491226119803635,
        "smoothedEle": 390.7546487021997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069626666666668,
        "lng": 120.67281666666668,
        "ele": 388.8333333333332,
        "distanceKm": 57.028351283831626,
        "gradePct": -3.827998703178909,
        "smoothedEle": 388.65763455141035,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069208,
        "lng": 120.6729425,
        "ele": 386.24999999999983,
        "distanceKm": 57.07665202504784,
        "gradePct": -4.146033707583794,
        "smoothedEle": 386.42861809342696,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06878933333333,
        "lng": 120.67306833333333,
        "ele": 383.6666666666668,
        "distanceKm": 57.12495277694155,
        "gradePct": -4.457096174320207,
        "smoothedEle": 384.0118954474947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068370666666667,
        "lng": 120.67319416666668,
        "ele": 381.08333333333337,
        "distanceKm": 57.1732535395126,
        "gradePct": -4.828857522314098,
        "smoothedEle": 381.3648823301361,
        "gradeBand": "descent"
      },
      {
        "lat": 23.067952,
        "lng": 120.67332,
        "ele": 378.5,
        "distanceKm": 57.22155431276084,
        "gradePct": -5.122099507827171,
        "smoothedEle": 378.7085313730035,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06733,
        "lng": 120.673414,
        "ele": 375.75,
        "distanceKm": 57.2913830072092,
        "gradePct": -5.508011327546946,
        "smoothedEle": 374.675532415701,
        "gradeBand": "descent"
      },
      {
        "lat": 23.067071,
        "lng": 120.673331,
        "ele": 375.75,
        "distanceKm": 57.32140823871749,
        "gradePct": -5.7088558409161045,
        "smoothedEle": 372.77153433391675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066638,
        "lng": 120.673024,
        "ele": 370,
        "distanceKm": 57.3788940230605,
        "gradePct": -5.813793596083857,
        "smoothedEle": 369.427090914236,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066225,
        "lng": 120.672685,
        "ele": 365.75,
        "distanceKm": 57.436442065618806,
        "gradePct": -5.655421202815977,
        "smoothedEle": 366.5378376952392,
        "gradeBand": "descent"
      },
      {
        "lat": 23.065795,
        "lng": 120.672212,
        "ele": 362,
        "distanceKm": 57.504470057103475,
        "gradePct": -5.558841553183419,
        "smoothedEle": 362.72795669425017,
        "gradeBand": "descent"
      },
      {
        "lat": 23.065359,
        "lng": 120.671941,
        "ele": 355.5,
        "distanceKm": 57.56031879445347,
        "gradePct": -5.703414349367709,
        "smoothedEle": 359.1009433229052,
        "gradeBand": "descent"
      },
      {
        "lat": 23.065056,
        "lng": 120.672015,
        "ele": 355.75,
        "distanceKm": 57.59485099667279,
        "gradePct": -5.910850733918297,
        "smoothedEle": 356.8042546844646,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0648125,
        "lng": 120.672319,
        "ele": 356.50000000000006,
        "distanceKm": 57.63608677434743,
        "gradePct": -6.028556687745123,
        "smoothedEle": 354.4985620498239,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064569,
        "lng": 120.672623,
        "ele": 357.25,
        "distanceKm": 57.67732259447142,
        "gradePct": -5.866710385120912,
        "smoothedEle": 352.5149189288518,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064279,
        "lng": 120.67278,
        "ele": 352.5,
        "distanceKm": 57.71334806017365,
        "gradePct": -5.640878562301884,
        "smoothedEle": 350.86963083462615,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064129,
        "lng": 120.672812,
        "ele": 349.5,
        "distanceKm": 57.73034557988851,
        "gradePct": -5.4427964739255765,
        "smoothedEle": 350.161916316698,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064062,
        "lng": 120.672788,
        "ele": 348,
        "distanceKm": 57.73818983727505,
        "gradePct": -5.343219482057387,
        "smoothedEle": 349.85163664482695,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063993,
        "lng": 120.672751,
        "ele": 346.5,
        "distanceKm": 57.74674527952289,
        "gradePct": -5.242934658163687,
        "smoothedEle": 349.49658579154163,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063939,
        "lng": 120.672684,
        "ele": 345.25,
        "distanceKm": 57.755857885471166,
        "gradePct": -5.136118896188817,
        "smoothedEle": 349.1184126446882,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063861,
        "lng": 120.672257,
        "ele": 342,
        "distanceKm": 57.80039567969834,
        "gradePct": -4.495057018856208,
        "smoothedEle": 347.5041104852187,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064185,
        "lng": 120.671855,
        "ele": 343,
        "distanceKm": 57.855071302283946,
        "gradePct": -3.6813057799403497,
        "smoothedEle": 346.22270253869755,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064246,
        "lng": 120.671774,
        "ele": 342.75,
        "distanceKm": 57.86578016296893,
        "gradePct": -3.552471474513772,
        "smoothedEle": 345.9652229660697,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064272,
        "lng": 120.671721,
        "ele": 342.5,
        "distanceKm": 57.87192501582424,
        "gradePct": -3.4830197226226933,
        "smoothedEle": 345.8085292182593,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064248,
        "lng": 120.671581,
        "ele": 342.75,
        "distanceKm": 57.886494466421496,
        "gradePct": -3.3327128247162343,
        "smoothedEle": 345.43061259524023,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064084,
        "lng": 120.671394,
        "ele": 344.5,
        "distanceKm": 57.91292477985553,
        "gradePct": -3.2360157824063944,
        "smoothedEle": 344.4169305415777,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063764,
        "lng": 120.671399,
        "ele": 342.75,
        "distanceKm": 57.94851088227412,
        "gradePct": -3.242202403642988,
        "smoothedEle": 342.93890847007964,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063107,
        "lng": 120.671294,
        "ele": 341.25,
        "distanceKm": 58.02235161728328,
        "gradePct": -3.332060116739039,
        "smoothedEle": 340.3254188291544,
        "gradeBand": "descent"
      },
      {
        "lat": 23.062587,
        "lng": 120.670973,
        "ele": 344.25,
        "distanceKm": 58.08884853051474,
        "gradePct": -3.2472830667560224,
        "smoothedEle": 338.84576101995896,
        "gradeBand": "descent"
      },
      {
        "lat": 23.062417,
        "lng": 120.67091,
        "ele": 343.75,
        "distanceKm": 58.10882033449184,
        "gradePct": -3.0627634781800017,
        "smoothedEle": 338.44882141591415,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0619285,
        "lng": 120.670918,
        "ele": 337.5,
        "distanceKm": 58.163145297104904,
        "gradePct": -2.428577527644756,
        "smoothedEle": 337.5637887499407,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06144,
        "lng": 120.670926,
        "ele": 331.25,
        "distanceKm": 58.21747025976273,
        "gradePct": -1.7522209988989381,
        "smoothedEle": 336.9937456602696,
        "gradeBand": "descent"
      },
      {
        "lat": 23.061097,
        "lng": 120.670804,
        "ele": 330.75,
        "distanceKm": 58.257600622259176,
        "gradePct": -1.3443614504537416,
        "smoothedEle": 336.8523517693322,
        "gradeBand": "descent"
      },
      {
        "lat": 23.060796,
        "lng": 120.670555,
        "ele": 330.75,
        "distanceKm": 58.29966246957545,
        "gradePct": -0.8261483349231352,
        "smoothedEle": 336.97853731128106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.060510999999998,
        "lng": 120.6702375,
        "ele": 333.0625,
        "distanceKm": 58.34504371922946,
        "gradePct": -0.3759150974772698,
        "smoothedEle": 337.10685959043724,
        "gradeBand": "descent"
      },
      {
        "lat": 23.060226,
        "lng": 120.66991999999999,
        "ele": 335.375,
        "distanceKm": 58.390425018121306,
        "gradePct": -0.034101542407938244,
        "smoothedEle": 337.20933389995565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.059941000000002,
        "lng": 120.6696025,
        "ele": 337.6875,
        "distanceKm": 58.435806366248656,
        "gradePct": 0.32400269190420766,
        "smoothedEle": 337.57714625908716,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059656,
        "lng": 120.669285,
        "ele": 340,
        "distanceKm": 58.48118776361231,
        "gradePct": 0.7140213659033533,
        "smoothedEle": 338.3511559251983,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0593345,
        "lng": 120.6689695,
        "ele": 342.7500000000002,
        "distanceKm": 58.52935348623273,
        "gradePct": 1.0184675147948918,
        "smoothedEle": 339.099428136645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059013,
        "lng": 120.668654,
        "ele": 345.5,
        "distanceKm": 58.57751926052551,
        "gradePct": 1.195530312964746,
        "smoothedEle": 339.57125237634926,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.058725,
        "lng": 120.668426,
        "ele": 344.5,
        "distanceKm": 58.61713859992078,
        "gradePct": 0.9414644067564532,
        "smoothedEle": 339.3087742528557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05843,
        "lng": 120.668227,
        "ele": 341.75,
        "distanceKm": 58.65574602666016,
        "gradePct": 0.4717563421366653,
        "smoothedEle": 338.86074300410024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05809,
        "lng": 120.6680035,
        "ele": 340.625,
        "distanceKm": 58.699929728102994,
        "gradePct": -0.25121854751753503,
        "smoothedEle": 338.1398821399472,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05775,
        "lng": 120.66778,
        "ele": 339.5,
        "distanceKm": 58.74411345943907,
        "gradePct": -1.0304402277353542,
        "smoothedEle": 337.18313402362156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.057372,
        "lng": 120.667616,
        "ele": 336,
        "distanceKm": 58.78937058245153,
        "gradePct": -1.7342078216407837,
        "smoothedEle": 336.0243217253078,
        "gradeBand": "descent"
      },
      {
        "lat": 23.056711,
        "lng": 120.667486,
        "ele": 329.75,
        "distanceKm": 58.864064279071364,
        "gradePct": -2.1944609143990563,
        "smoothedEle": 334.336108176491,
        "gradeBand": "descent"
      },
      {
        "lat": 23.056322333333334,
        "lng": 120.667412,
        "ele": 329.3333333333333,
        "distanceKm": 58.90794026602314,
        "gradePct": -2.139026652359119,
        "smoothedEle": 333.68836980779736,
        "gradeBand": "descent"
      },
      {
        "lat": 23.055933666666665,
        "lng": 120.667338,
        "ele": 328.9166666666667,
        "distanceKm": 58.951816256747456,
        "gradePct": -1.8304288919117961,
        "smoothedEle": 333.32504549117266,
        "gradeBand": "descent"
      },
      {
        "lat": 23.055545,
        "lng": 120.667264,
        "ele": 328.5,
        "distanceKm": 58.99569225124349,
        "gradePct": -1.340338607242027,
        "smoothedEle": 333.20076328538335,
        "gradeBand": "descent"
      },
      {
        "lat": 23.054928,
        "lng": 120.667131,
        "ele": 332.5,
        "distanceKm": 59.06563608931397,
        "gradePct": -0.25334090519183045,
        "smoothedEle": 333.8062218327584,
        "gradeBand": "descent"
      },
      {
        "lat": 23.054531,
        "lng": 120.667053,
        "ele": 335.25,
        "distanceKm": 59.11049609955577,
        "gradePct": 0.701945154045849,
        "smoothedEle": 335.07109600184134,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.054098,
        "lng": 120.66715,
        "ele": 336.25,
        "distanceKm": 59.15965578260603,
        "gradePct": 1.7965043986404823,
        "smoothedEle": 336.8958482147855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0537855,
        "lng": 120.66735800000001,
        "ele": 337.7500000000001,
        "distanceKm": 59.20040324570917,
        "gradePct": 2.6498816812536083,
        "smoothedEle": 338.5413066786205,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.053473,
        "lng": 120.667566,
        "ele": 339.25,
        "distanceKm": 59.24115073461124,
        "gradePct": 3.3335150062465098,
        "smoothedEle": 340.2612979734131,
        "gradeBand": "hard"
      },
      {
        "lat": 23.052902,
        "lng": 120.667625,
        "ele": 342.75,
        "distanceKm": 59.30492944749396,
        "gradePct": 3.8620658231669456,
        "smoothedEle": 342.6382701628047,
        "gradeBand": "hard"
      },
      {
        "lat": 23.052334,
        "lng": 120.667542,
        "ele": 347.75,
        "distanceKm": 59.36865661743964,
        "gradePct": 3.5002940809007512,
        "smoothedEle": 344.259906853781,
        "gradeBand": "hard"
      },
      {
        "lat": 23.051818,
        "lng": 120.667432,
        "ele": 349.25,
        "distanceKm": 59.42712670460413,
        "gradePct": 2.713762733013955,
        "smoothedEle": 345.096855438956,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.051463,
        "lng": 120.667407,
        "ele": 350,
        "distanceKm": 59.46668374687182,
        "gradePct": 2.043900123745913,
        "smoothedEle": 345.30068939155774,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.051164,
        "lng": 120.667548,
        "ele": 349,
        "distanceKm": 59.50292616792599,
        "gradePct": 1.3093712635339712,
        "smoothedEle": 345.1823523587775,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05088,
        "lng": 120.667869,
        "ele": 348.25,
        "distanceKm": 59.54848896562454,
        "gradePct": 0.47443350723980193,
        "smoothedEle": 344.69557668435806,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.050565,
        "lng": 120.668262,
        "ele": 345.75,
        "distanceKm": 59.6018157549402,
        "gradePct": -0.49132364898306247,
        "smoothedEle": 343.75190384937713,
        "gradeBand": "descent"
      },
      {
        "lat": 23.050152,
        "lng": 120.668635,
        "ele": 342.3750000000002,
        "distanceKm": 59.66152751553242,
        "gradePct": -1.5692022476976948,
        "smoothedEle": 342.13571529049443,
        "gradeBand": "descent"
      },
      {
        "lat": 23.049739,
        "lng": 120.669008,
        "ele": 339,
        "distanceKm": 59.72123935094164,
        "gradePct": -2.3670743728161145,
        "smoothedEle": 340.25255250163565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.04961,
        "lng": 120.669134,
        "ele": 336.5,
        "distanceKm": 59.740525620314536,
        "gradePct": -2.5787073667502427,
        "smoothedEle": 339.62323931615805,
        "gradeBand": "descent"
      },
      {
        "lat": 23.049428,
        "lng": 120.66914,
        "ele": 336,
        "distanceKm": 59.760772434279836,
        "gradePct": -2.754751110867904,
        "smoothedEle": 338.9687057472337,
        "gradeBand": "descent"
      },
      {
        "lat": 23.04899787340683,
        "lng": 120.66899567204156,
        "ele": 335.50840250376683,
        "distanceKm": 59.81082829820239,
        "gradePct": -3.067926031053061,
        "smoothedEle": 337.3721137562647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.048575061172357,
        "lng": 120.66881856003464,
        "ele": 334.8403354198057,
        "distanceKm": 59.86121458416905,
        "gradePct": -3.1217292710579,
        "smoothedEle": 335.90072670612534,
        "gradeBand": "descent"
      },
      {
        "lat": 23.048152248937885,
        "lng": 120.66864144802771,
        "ele": 334.1722683358446,
        "distanceKm": 59.91160089059986,
        "gradePct": -2.9589864038820655,
        "smoothedEle": 334.63855276274705,
        "gradeBand": "descent"
      },
      {
        "lat": 23.047729436703413,
        "lng": 120.66846433602078,
        "ele": 333.5042012518834,
        "distanceKm": 59.961987217495036,
        "gradePct": -2.667550581210454,
        "smoothedEle": 333.5948576129265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.047306624468945,
        "lng": 120.66828722401385,
        "ele": 332.83613416792224,
        "distanceKm": 60.01237356485287,
        "gradePct": -2.2301002627256388,
        "smoothedEle": 332.8667881477692,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046883812234473,
        "lng": 120.66811011200693,
        "ele": 332.16806708396115,
        "distanceKm": 60.062759932674325,
        "gradePct": -1.8244685630928668,
        "smoothedEle": 332.2130786928958,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046461,
        "lng": 120.667933,
        "ele": 331.5,
        "distanceKm": 60.11314632095873,
        "gradePct": -1.411007937110989,
        "smoothedEle": 331.78452506568885,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046113,
        "lng": 120.667815,
        "ele": 331,
        "distanceKm": 60.15368209263272,
        "gradePct": -1.0337635423612563,
        "smoothedEle": 331.6993616936328,
        "gradeBand": "descent"
      },
      {
        "lat": 23.045509,
        "lng": 120.667713,
        "ele": 330.25,
        "distanceKm": 60.221650000095075,
        "gradePct": -0.27996505921279496,
        "smoothedEle": 332.1865061626079,
        "gradeBand": "descent"
      },
      {
        "lat": 23.044965,
        "lng": 120.667456,
        "ele": 329.25,
        "distanceKm": 60.28760880953583,
        "gradePct": 0.5111245913319847,
        "smoothedEle": 333.023979599297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.044519,
        "lng": 120.667311,
        "ele": 330.5,
        "distanceKm": 60.3393735861264,
        "gradePct": 1.0046212223526396,
        "smoothedEle": 333.73866550420934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.044306,
        "lng": 120.667317,
        "ele": 332.25,
        "distanceKm": 60.36306609379199,
        "gradePct": 1.1607902647574921,
        "smoothedEle": 334.08819991037507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0438675,
        "lng": 120.667524,
        "ele": 335.8749999999998,
        "distanceKm": 60.416226846800214,
        "gradePct": 1.3721032601344323,
        "smoothedEle": 334.89184346899873,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.043429,
        "lng": 120.667731,
        "ele": 339.5,
        "distanceKm": 60.469387627282224,
        "gradePct": 1.4853955758981174,
        "smoothedEle": 335.76341793784735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.042973666666665,
        "lng": 120.667585,
        "ele": 339.25,
        "distanceKm": 60.5221764353987,
        "gradePct": 1.5973436024741887,
        "smoothedEle": 336.6959217369939,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.042518333333334,
        "lng": 120.667439,
        "ele": 339,
        "distanceKm": 60.57496525780617,
        "gradePct": 1.7128977562620704,
        "smoothedEle": 337.6938778732385,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.042063,
        "lng": 120.667293,
        "ele": 338.75,
        "distanceKm": 60.62775409450517,
        "gradePct": 1.779533278851321,
        "smoothedEle": 338.6399000058672,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.041515,
        "lng": 120.667076,
        "ele": 338.75,
        "distanceKm": 60.69260849146974,
        "gradePct": 1.6604472865134643,
        "smoothedEle": 339.4945044596402,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0410895,
        "lng": 120.6669285,
        "ele": 338.75,
        "distanceKm": 60.74227096623883,
        "gradePct": 1.393665560937828,
        "smoothedEle": 339.8631336639777,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.040664,
        "lng": 120.666781,
        "ele": 338.75,
        "distanceKm": 60.79193345549554,
        "gradePct": 1.1529332520861266,
        "smoothedEle": 340.3038293235612,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.04026378386431,
        "lng": 120.66663963649032,
        "ele": 339.97750588628406,
        "distanceKm": 60.83872736804894,
        "gradePct": 1.0045597395259307,
        "smoothedEle": 340.79361736697325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03986351850499,
        "lng": 120.66649843763538,
        "ele": 341.20206065895053,
        "distanceKm": 60.88552129439361,
        "gradePct": 0.9812664902267019,
        "smoothedEle": 341.3636474701069,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.039463259252493,
        "lng": 120.6663572188177,
        "ele": 342.35103032947535,
        "distanceKm": 60.9323152188825,
        "gradePct": 1.0738183383775055,
        "smoothedEle": 341.93687190446644,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.039063,
        "lng": 120.666216,
        "ele": 343.5,
        "distanceKm": 60.97910915662867,
        "gradePct": 1.1260763816614041,
        "smoothedEle": 342.44218165254375,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03869,
        "lng": 120.666062,
        "ele": 343.75,
        "distanceKm": 61.02347762055347,
        "gradePct": 1.1133695845573597,
        "smoothedEle": 342.8607386802438,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03821501308213,
        "lng": 120.66587815845799,
        "ele": 344.4024590742385,
        "distanceKm": 61.079543987666156,
        "gradePct": 0.9912210362574713,
        "smoothedEle": 343.2732757174853,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.037737,
        "lng": 120.665703,
        "ele": 345.25,
        "distanceKm": 61.135637286846276,
        "gradePct": 0.753168050411478,
        "smoothedEle": 343.4790817403654,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.037324,
        "lng": 120.665628,
        "ele": 344.5,
        "distanceKm": 61.182197705590625,
        "gradePct": 0.4657418914307177,
        "smoothedEle": 343.402801757898,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.036926666666666,
        "lng": 120.665569,
        "ele": 343.8333333333333,
        "distanceKm": 61.22678980366138,
        "gradePct": 0.07694779896428264,
        "smoothedEle": 343.0390053633078,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.036529333333334,
        "lng": 120.66551,
        "ele": 343.1666666666667,
        "distanceKm": 61.27138190414237,
        "gradePct": -0.3781677218053065,
        "smoothedEle": 342.45688356023294,
        "gradeBand": "descent"
      },
      {
        "lat": 23.036132,
        "lng": 120.665451,
        "ele": 342.5,
        "distanceKm": 61.31597400703395,
        "gradePct": -0.8468320406847902,
        "smoothedEle": 341.7132731876578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.035693882500137,
        "lng": 120.66531594067509,
        "ele": 342.27901981995467,
        "distanceKm": 61.36661294292128,
        "gradePct": -1.3844740951822219,
        "smoothedEle": 340.6593861004281,
        "gradeBand": "descent"
      },
      {
        "lat": 23.035261,
        "lng": 120.665161,
        "ele": 340.75,
        "distanceKm": 61.4172913207359,
        "gradePct": -1.8636170626033979,
        "smoothedEle": 339.38926285638917,
        "gradeBand": "descent"
      },
      {
        "lat": 23.034908,
        "lng": 120.665007,
        "ele": 338.5,
        "distanceKm": 61.45958841598587,
        "gradePct": -2.171411544263063,
        "smoothedEle": 338.26801703612415,
        "gradeBand": "descent"
      },
      {
        "lat": 23.034521308621027,
        "lng": 120.66472401643189,
        "ele": 336.7416478475463,
        "distanceKm": 61.51142836465525,
        "gradePct": -2.4750715040881563,
        "smoothedEle": 336.83893254365876,
        "gradeBand": "descent"
      },
      {
        "lat": 23.034139,
        "lng": 120.664434,
        "ele": 335,
        "distanceKm": 61.56327342930592,
        "gradePct": -2.7021163269422646,
        "smoothedEle": 335.32465471498807,
        "gradeBand": "descent"
      },
      {
        "lat": 23.033827,
        "lng": 120.664292,
        "ele": 333.75,
        "distanceKm": 61.600886459615936,
        "gradePct": -2.853556313822042,
        "smoothedEle": 334.0932958952444,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0334055,
        "lng": 120.6642075,
        "ele": 332.375,
        "distanceKm": 61.648546151980405,
        "gradePct": -3.044356792744011,
        "smoothedEle": 332.472020770566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.032984,
        "lng": 120.664123,
        "ele": 331,
        "distanceKm": 61.69620584925209,
        "gradePct": -3.159327383454053,
        "smoothedEle": 330.9399205668645,
        "gradeBand": "descent"
      },
      {
        "lat": 23.032556479851078,
        "lng": 120.66396220070966,
        "ele": 329.56522332492744,
        "distanceKm": 61.746511236758224,
        "gradePct": -3.1657654273654834,
        "smoothedEle": 329.4827098354298,
        "gradeBand": "descent"
      },
      {
        "lat": 23.032137,
        "lng": 120.663775,
        "ele": 328,
        "distanceKm": 61.796935845547125,
        "gradePct": -3.0458853330166127,
        "smoothedEle": 328.13085869255985,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0317,
        "lng": 120.663661,
        "ele": 325.5,
        "distanceKm": 61.846908809805406,
        "gradePct": -2.8488803274971866,
        "smoothedEle": 326.8299587994535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.031268904835553,
        "lng": 120.66357086660243,
        "ele": 324.72742802070144,
        "distanceKm": 61.89572377360675,
        "gradePct": -2.71025945687676,
        "smoothedEle": 325.5348987761879,
        "gradeBand": "descent"
      },
      {
        "lat": 23.03083779208966,
        "lng": 120.66348083351387,
        "ele": 323.9645158919739,
        "distanceKm": 61.94453872432824,
        "gradePct": -2.655696340530445,
        "smoothedEle": 324.2284554932896,
        "gradeBand": "descent"
      },
      {
        "lat": 23.030406396044828,
        "lng": 120.66339241675693,
        "ele": 323.357257945987,
        "distanceKm": 61.99335368822739,
        "gradePct": -2.622326890843558,
        "smoothedEle": 322.9822402313826,
        "gradeBand": "descent"
      },
      {
        "lat": 23.029975,
        "lng": 120.663304,
        "ele": 322.75,
        "distanceKm": 62.04216865749386,
        "gradePct": -2.5968636780251217,
        "smoothedEle": 321.7596274381561,
        "gradeBand": "descent"
      },
      {
        "lat": 23.029448,
        "lng": 120.663239,
        "ele": 320.5,
        "distanceKm": 62.101144770054866,
        "gradePct": -2.501710292428861,
        "smoothedEle": 320.38639509093605,
        "gradeBand": "descent"
      },
      {
        "lat": 23.028914,
        "lng": 120.663282,
        "ele": 318.5,
        "distanceKm": 62.16068576765683,
        "gradePct": -2.284512679755831,
        "smoothedEle": 319.2472062945401,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0285207246864,
        "lng": 120.66335375825574,
        "ele": 317.95316569867,
        "distanceKm": 62.20502831378979,
        "gradePct": -1.944602528223158,
        "smoothedEle": 318.8006341597722,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0281293623432,
        "lng": 120.66343787912787,
        "ele": 316.85158284933493,
        "distanceKm": 62.24938915024248,
        "gradePct": -1.3421022188454779,
        "smoothedEle": 318.9072970631204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.027738,
        "lng": 120.663522,
        "ele": 315.75,
        "distanceKm": 62.29374999154566,
        "gradePct": -0.7952259984584659,
        "smoothedEle": 318.96812719718235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.02738,
        "lng": 120.663587,
        "ele": 314.75,
        "distanceKm": 62.33410974719555,
        "gradePct": -0.4728164120460793,
        "smoothedEle": 318.81004840337863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.026953,
        "lng": 120.66378,
        "ele": 315.25,
        "distanceKm": 62.38553413036597,
        "gradePct": -0.21142385439315756,
        "smoothedEle": 318.5741116480332,
        "gradeBand": "descent"
      },
      {
        "lat": 23.026644,
        "lng": 120.664004,
        "ele": 318.5,
        "distanceKm": 62.42683823102404,
        "gradePct": -0.1286363217918715,
        "smoothedEle": 318.5958021210104,
        "gradeBand": "descent"
      },
      {
        "lat": 23.026244,
        "lng": 120.66418,
        "ele": 324.75,
        "distanceKm": 62.47482461962633,
        "gradePct": -0.09015050103567873,
        "smoothedEle": 318.7618746378996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.025935,
        "lng": 120.664106,
        "ele": 324.75,
        "distanceKm": 62.51000853884532,
        "gradePct": 0.05497419158726224,
        "smoothedEle": 319.014395027669,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.025664,
        "lng": 120.663841,
        "ele": 321.24999999999966,
        "distanceKm": 62.550548553470776,
        "gradePct": 0.3602538525904271,
        "smoothedEle": 319.45513432661073,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.025393,
        "lng": 120.663576,
        "ele": 317.75,
        "distanceKm": 62.59108860456335,
        "gradePct": 0.6573514834911882,
        "smoothedEle": 319.89173149664623,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.024965,
        "lng": 120.663397,
        "ele": 318.5,
        "distanceKm": 62.6420837814335,
        "gradePct": 0.7425925144261677,
        "smoothedEle": 320.13374933934205,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0246,
        "lng": 120.663401,
        "ele": 319.25,
        "distanceKm": 62.68267204997825,
        "gradePct": 0.531108900808213,
        "smoothedEle": 319.88041465191145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.024276,
        "lng": 120.663425,
        "ele": 320.25,
        "distanceKm": 62.7187828786646,
        "gradePct": 0.013739535772685744,
        "smoothedEle": 319.13726618075043,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.023734,
        "lng": 120.663723,
        "ele": 321.5,
        "distanceKm": 62.786327226701545,
        "gradePct": -1.350333047826306,
        "smoothedEle": 317.13978761411585,
        "gradeBand": "descent"
      },
      {
        "lat": 23.023433,
        "lng": 120.663977,
        "ele": 320.25,
        "distanceKm": 62.82870527209343,
        "gradePct": -1.993805332842868,
        "smoothedEle": 316.0826456500471,
        "gradeBand": "descent"
      },
      {
        "lat": 23.023041,
        "lng": 120.664102,
        "ele": 316.75,
        "distanceKm": 62.87413209727416,
        "gradePct": -2.408176967523866,
        "smoothedEle": 315.11736346483815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.022726,
        "lng": 120.664124,
        "ele": 314.25,
        "distanceKm": 62.909230832402805,
        "gradePct": -2.551889431880844,
        "smoothedEle": 314.2300651534479,
        "gradeBand": "descent"
      },
      {
        "lat": 23.022242,
        "lng": 120.66409,
        "ele": 311,
        "distanceKm": 62.96316161397732,
        "gradePct": -2.5042986487863956,
        "smoothedEle": 312.8162634017742,
        "gradeBand": "descent"
      },
      {
        "lat": 23.021582,
        "lng": 120.664084,
        "ele": 308.5,
        "distanceKm": 63.036552935656545,
        "gradePct": -2.421751054626918,
        "smoothedEle": 311.0723872287937,
        "gradeBand": "descent"
      },
      {
        "lat": 23.021052,
        "lng": 120.664091,
        "ele": 307.25,
        "distanceKm": 63.095490682042126,
        "gradePct": -2.260790551552528,
        "smoothedEle": 310.0558359468883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.020417,
        "lng": 120.664214,
        "ele": 305.5,
        "distanceKm": 63.167212827908756,
        "gradePct": -1.3031051669876588,
        "smoothedEle": 310.11379079475313,
        "gradeBand": "descent"
      },
      {
        "lat": 23.019983333333332,
        "lng": 120.66436433333334,
        "ele": 307.6666666666666,
        "distanceKm": 63.21782928497694,
        "gradePct": -0.5207249138129765,
        "smoothedEle": 310.4758364375154,
        "gradeBand": "descent"
      },
      {
        "lat": 23.019549666666666,
        "lng": 120.66451466666666,
        "ele": 309.8333333333334,
        "distanceKm": 63.26844575708372,
        "gradePct": 0.06493454509063576,
        "smoothedEle": 310.6521727054403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.019116,
        "lng": 120.664665,
        "ele": 312,
        "distanceKm": 63.31906224422974,
        "gradePct": 0.2739321594042071,
        "smoothedEle": 310.6227471902416,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.018751,
        "lng": 120.664803,
        "ele": 316,
        "distanceKm": 63.36203551165203,
        "gradePct": 0.14640620129961027,
        "smoothedEle": 310.4024196837056,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.018252,
        "lng": 120.664948,
        "ele": 317.5,
        "distanceKm": 63.419471964295404,
        "gradePct": -0.3618052111277114,
        "smoothedEle": 309.75794873611267,
        "gradeBand": "descent"
      },
      {
        "lat": 23.017778,
        "lng": 120.665136,
        "ele": 313.25,
        "distanceKm": 63.47558043394184,
        "gradePct": -1.1038986891451386,
        "smoothedEle": 308.4402276362658,
        "gradeBand": "descent"
      },
      {
        "lat": 23.017399,
        "lng": 120.665275,
        "ele": 309.75,
        "distanceKm": 63.52005957511432,
        "gradePct": -1.9173496701274086,
        "smoothedEle": 306.7829344518169,
        "gradeBand": "descent"
      },
      {
        "lat": 23.01695,
        "lng": 120.665389,
        "ele": 306.25,
        "distanceKm": 63.57133125005524,
        "gradePct": -2.9269264057660545,
        "smoothedEle": 304.4442631928622,
        "gradeBand": "descent"
      },
      {
        "lat": 23.016525,
        "lng": 120.66546,
        "ele": 302.25,
        "distanceKm": 63.61914453032597,
        "gradePct": -3.9946369883413984,
        "smoothedEle": 301.7723487621031,
        "gradeBand": "descent"
      },
      {
        "lat": 23.016143,
        "lng": 120.665475,
        "ele": 298.75,
        "distanceKm": 63.661648782899356,
        "gradePct": -4.7984559436522325,
        "smoothedEle": 299.17050397295077,
        "gradeBand": "descent"
      },
      {
        "lat": 23.015748780566767,
        "lng": 120.66543542117257,
        "ele": 293.77632328645393,
        "distanceKm": 63.70567079791625,
        "gradePct": -5.394691622061922,
        "smoothedEle": 296.52967717043236,
        "gradeBand": "descent"
      },
      {
        "lat": 23.015358,
        "lng": 120.665363,
        "ele": 290.25,
        "distanceKm": 63.74975127122505,
        "gradePct": -5.566697585978296,
        "smoothedEle": 294.2952024768632,
        "gradeBand": "descent"
      },
      {
        "lat": 23.015032,
        "lng": 120.665329,
        "ele": 288.75,
        "distanceKm": 63.786167497359074,
        "gradePct": -5.424729550106585,
        "smoothedEle": 292.76572097923423,
        "gradeBand": "descent"
      },
      {
        "lat": 23.014676040089366,
        "lng": 120.66533859531044,
        "ele": 286.888426622755,
        "distanceKm": 63.82576066860245,
        "gradePct": -4.9946577370677545,
        "smoothedEle": 291.3780346382619,
        "gradeBand": "descent"
      },
      {
        "lat": 23.014326,
        "lng": 120.665415,
        "ele": 286,
        "distanceKm": 63.865461117435025,
        "gradePct": -4.356050522656341,
        "smoothedEle": 290.2297056447423,
        "gradeBand": "descent"
      },
      {
        "lat": 23.013895,
        "lng": 120.66544,
        "ele": 286.25,
        "distanceKm": 63.91345444825211,
        "gradePct": -3.4809578213964945,
        "smoothedEle": 289.1732020233157,
        "gradeBand": "descent"
      },
      {
        "lat": 23.013398393312215,
        "lng": 120.6653960160063,
        "ele": 287.673391099103,
        "distanceKm": 63.968857848265834,
        "gradePct": -2.714160761745138,
        "smoothedEle": 288.06440471766007,
        "gradeBand": "descent"
      },
      {
        "lat": 23.012901,
        "lng": 120.665363,
        "ele": 288.75,
        "distanceKm": 64.02426866337338,
        "gradePct": -2.275913533850055,
        "smoothedEle": 286.8785003072137,
        "gradeBand": "descent"
      },
      {
        "lat": 23.01256425665616,
        "lng": 120.6654375644014,
        "ele": 289.75,
        "distanceKm": 64.06248261470587,
        "gradePct": -2.2090651683386366,
        "smoothedEle": 285.8977280126752,
        "gradeBand": "descent"
      },
      {
        "lat": 23.012248,
        "lng": 120.665588,
        "ele": 289.75,
        "distanceKm": 64.10087158574682,
        "gradePct": -2.2544553474053792,
        "smoothedEle": 284.9412848102748,
        "gradeBand": "descent"
      },
      {
        "lat": 23.01178,
        "lng": 120.665679,
        "ele": 289.5,
        "distanceKm": 64.15373774085548,
        "gradePct": -2.2338885408864506,
        "smoothedEle": 283.8992288183719,
        "gradeBand": "descent"
      },
      {
        "lat": 23.011239,
        "lng": 120.665322,
        "ele": 282.25,
        "distanceKm": 64.22412113817786,
        "gradePct": -2.099205207566881,
        "smoothedEle": 282.6832472320265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.010891,
        "lng": 120.665129,
        "ele": 277.75,
        "distanceKm": 64.26756711925385,
        "gradePct": -1.8455848421369319,
        "smoothedEle": 282.07988028310274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.01063,
        "lng": 120.665052,
        "ele": 275,
        "distanceKm": 64.2976399954452,
        "gradePct": -1.641113409502571,
        "smoothedEle": 281.7395715474583,
        "gradeBand": "descent"
      },
      {
        "lat": 23.010357,
        "lng": 120.665073,
        "ele": 274.25,
        "distanceKm": 64.32807224522536,
        "gradePct": -1.5203940486804366,
        "smoothedEle": 281.36433874691346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.009974,
        "lng": 120.66514000000001,
        "ele": 275.875,
        "distanceKm": 64.37120849706456,
        "gradePct": -1.2149729384720556,
        "smoothedEle": 281.1674487211718,
        "gradeBand": "descent"
      },
      {
        "lat": 23.009591,
        "lng": 120.665207,
        "ele": 277.5,
        "distanceKm": 64.41434475199813,
        "gradePct": -0.8719608198470202,
        "smoothedEle": 281.10822772021794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.009256,
        "lng": 120.665212,
        "ele": 278.75,
        "distanceKm": 64.45159861884778,
        "gradePct": -0.46369664578346514,
        "smoothedEle": 281.37425354232556,
        "gradeBand": "descent"
      },
      {
        "lat": 23.008882,
        "lng": 120.665133,
        "ele": 281.25,
        "distanceKm": 64.49396430495828,
        "gradePct": 0.550400212827433,
        "smoothedEle": 282.88196658396,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.00843235377473,
        "lng": 120.66488113655565,
        "ele": 283.58494806898204,
        "distanceKm": 64.5502168535333,
        "gradePct": 2.272504164104841,
        "smoothedEle": 285.8082707805012,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007997,
        "lng": 120.664598,
        "ele": 287.5,
        "distanceKm": 64.60663692315786,
        "gradePct": 3.4165703227381328,
        "smoothedEle": 287.95195030749255,
        "gradeBand": "hard"
      },
      {
        "lat": 23.007524,
        "lng": 120.664102,
        "ele": 290.25,
        "distanceKm": 64.67973545287522,
        "gradePct": 3.567892798732692,
        "smoothedEle": 289.51137478446395,
        "gradeBand": "hard"
      },
      {
        "lat": 23.007323,
        "lng": 120.663766,
        "ele": 300,
        "distanceKm": 64.72074979286835,
        "gradePct": 2.880693104996185,
        "smoothedEle": 290.0367560736827,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007215,
        "lng": 120.663335,
        "ele": 305.25,
        "distanceKm": 64.76646811519839,
        "gradePct": 2.01177886999244,
        "smoothedEle": 290.44929491411256,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007495,
        "lng": 120.663058,
        "ele": 295.5,
        "distanceKm": 64.80857680312181,
        "gradePct": 1.172655154639313,
        "smoothedEle": 290.3386444354315,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007785,
        "lng": 120.662593,
        "ele": 290,
        "distanceKm": 64.86606509086525,
        "gradePct": 0.02977307652443486,
        "smoothedEle": 289.2792885721309,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007873,
        "lng": 120.662242,
        "ele": 285.75,
        "distanceKm": 64.90329862553553,
        "gradePct": -0.8765448457401295,
        "smoothedEle": 288.0601222073302,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007817005179287,
        "lng": 120.6617649968825,
        "ele": 285.0562176294452,
        "distanceKm": 64.95251516697888,
        "gradePct": -2.274854234802628,
        "smoothedEle": 285.77368215087415,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007706,
        "lng": 120.661296,
        "ele": 285.75,
        "distanceKm": 65.00207844665404,
        "gradePct": -3.98278568148541,
        "smoothedEle": 282.3901490320608,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00764225,
        "lng": 120.660872,
        "ele": 281.125,
        "distanceKm": 65.04604990682755,
        "gradePct": -5.2791789117610035,
        "smoothedEle": 279.0897572243599,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0075785,
        "lng": 120.660448,
        "ele": 276.5,
        "distanceKm": 65.09002138723616,
        "gradePct": -6.050819393723059,
        "smoothedEle": 276.3932302816948,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00751475,
        "lng": 120.66002399999999,
        "ele": 271.875,
        "distanceKm": 65.13399288788132,
        "gradePct": -6.313779759144462,
        "smoothedEle": 274.00660733190665,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007451,
        "lng": 120.6596,
        "ele": 267.25,
        "distanceKm": 65.17796440875998,
        "gradePct": -5.99906245904819,
        "smoothedEle": 272.0382155358727,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007349,
        "lng": 120.659253,
        "ele": 267,
        "distanceKm": 65.21524692225552,
        "gradePct": -5.466798447968422,
        "smoothedEle": 270.46815810000305,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007149927437414,
        "lng": 120.6587925503643,
        "ele": 265.91522552658927,
        "distanceKm": 65.26731378833409,
        "gradePct": -4.459366894859124,
        "smoothedEle": 268.8670275524198,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006915,
        "lng": 120.658351,
        "ele": 264.5,
        "distanceKm": 65.31951329762302,
        "gradePct": -3.404057380643573,
        "smoothedEle": 267.9843953009554,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006736,
        "lng": 120.657939,
        "ele": 262.75,
        "distanceKm": 65.36614309706239,
        "gradePct": -2.425200727309936,
        "smoothedEle": 267.71699689091963,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0065705,
        "lng": 120.65761649999999,
        "ele": 263.3750000000001,
        "distanceKm": 65.4039345560102,
        "gradePct": -1.6044174857046924,
        "smoothedEle": 267.73571441972456,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006405,
        "lng": 120.657294,
        "ele": 264,
        "distanceKm": 65.44172605031656,
        "gradePct": -0.8320035750774816,
        "smoothedEle": 267.9898799171356,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006152,
        "lng": 120.656755,
        "ele": 271.25,
        "distanceKm": 65.50365212885042,
        "gradePct": 0.001849001199872165,
        "smoothedEle": 268.2562869951221,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.005995,
        "lng": 120.656359,
        "ele": 273.5,
        "distanceKm": 65.54778296337983,
        "gradePct": 0.2763448443203305,
        "smoothedEle": 268.37497269731733,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.005983,
        "lng": 120.656143,
        "ele": 273.5,
        "distanceKm": 65.56993102544482,
        "gradePct": 0.37042881181369053,
        "smoothedEle": 268.4597306172587,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006037,
        "lng": 120.65575,
        "ele": 273,
        "distanceKm": 65.61060069106345,
        "gradePct": 0.565785989298937,
        "smoothedEle": 268.9121192783849,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006176,
        "lng": 120.6553125,
        "ele": 271.3124999999999,
        "distanceKm": 65.65797167794798,
        "gradePct": 0.7737577215129537,
        "smoothedEle": 269.6072843356919,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006314999999997,
        "lng": 120.654875,
        "ele": 269.6250000000003,
        "distanceKm": 65.70534262122948,
        "gradePct": 1.00882074962486,
        "smoothedEle": 270.27847491360916,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006453999999998,
        "lng": 120.6544375,
        "ele": 267.9375000000001,
        "distanceKm": 65.7527135209107,
        "gradePct": 0.9542477838059119,
        "smoothedEle": 270.30233690450774,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006593,
        "lng": 120.654,
        "ele": 266.25,
        "distanceKm": 65.80008437698991,
        "gradePct": 0.4739383705270587,
        "smoothedEle": 269.74301789406366,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006644,
        "lng": 120.65364,
        "ele": 269.25,
        "distanceKm": 65.83736443966177,
        "gradePct": -0.14440912908855602,
        "smoothedEle": 269.0160566719625,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006712500000003,
        "lng": 120.65323,
        "ele": 270.25000000000017,
        "distanceKm": 65.88001383273863,
        "gradePct": -0.9530496741388823,
        "smoothedEle": 268.0134964084588,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006781,
        "lng": 120.65282,
        "ele": 271.25,
        "distanceKm": 65.92266320485373,
        "gradePct": -1.6122386491661072,
        "smoothedEle": 267.06272245714354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006845,
        "lng": 120.652344,
        "ele": 269.125,
        "distanceKm": 65.9718990346953,
        "gradePct": -2.0020235613568502,
        "smoothedEle": 266.07176183881325,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006909,
        "lng": 120.651868,
        "ele": 267,
        "distanceKm": 66.02113484167222,
        "gradePct": -2.0640201942888714,
        "smoothedEle": 265.2044934441809,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006958,
        "lng": 120.651447,
        "ele": 263.75,
        "distanceKm": 66.06456745235862,
        "gradePct": -1.840562510490005,
        "smoothedEle": 264.695469806161,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006915,
        "lng": 120.650856,
        "ele": 260.75,
        "distanceKm": 66.12524518878881,
        "gradePct": -1.5688649423511325,
        "smoothedEle": 263.8730254500214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006816,
        "lng": 120.650403,
        "ele": 260,
        "distanceKm": 66.1728988500258,
        "gradePct": -1.433785072024173,
        "smoothedEle": 263.1865803608627,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00666,
        "lng": 120.649979,
        "ele": 259.75,
        "distanceKm": 66.2196338977664,
        "gradePct": -1.336872761755766,
        "smoothedEle": 262.557186427349,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006547,
        "lng": 120.649723,
        "ele": 259.25,
        "distanceKm": 66.24869267033762,
        "gradePct": -1.3511353487902886,
        "smoothedEle": 262.17924915644534,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006141,
        "lng": 120.649266,
        "ele": 261,
        "distanceKm": 66.31369979229213,
        "gradePct": -1.1878250400021502,
        "smoothedEle": 261.6538651592994,
        "gradeBand": "descent"
      },
      {
        "lat": 23.005755,
        "lng": 120.649049,
        "ele": 263.5,
        "distanceKm": 66.36202711955248,
        "gradePct": -0.8612494044466975,
        "smoothedEle": 261.6206874831895,
        "gradeBand": "descent"
      },
      {
        "lat": 23.005437523407007,
        "lng": 120.64881446264822,
        "ele": 263.5,
        "distanceKm": 66.40471751762996,
        "gradePct": -0.5475797775686069,
        "smoothedEle": 261.66290992725794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00512,
        "lng": 120.64858,
        "ele": 263.5,
        "distanceKm": 66.4474079535805,
        "gradePct": -0.26979624420124154,
        "smoothedEle": 261.65636564444173,
        "gradeBand": "descent"
      },
      {
        "lat": 23.005006,
        "lng": 120.647926,
        "ele": 261.75,
        "distanceKm": 66.51553570644826,
        "gradePct": -0.08275393277290159,
        "smoothedEle": 261.48709690198996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.004766,
        "lng": 120.647321,
        "ele": 262.5,
        "distanceKm": 66.58296442603222,
        "gradePct": -0.3499229219235595,
        "smoothedEle": 260.94154943996256,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0045825,
        "lng": 120.64691333333334,
        "ele": 261.2083333333334,
        "distanceKm": 66.62941176004189,
        "gradePct": -0.7459003161018992,
        "smoothedEle": 260.1673237608314,
        "gradeBand": "descent"
      },
      {
        "lat": 23.004399,
        "lng": 120.64650566666667,
        "ele": 259.9166666666668,
        "distanceKm": 66.67585914502193,
        "gradePct": -1.14185169227734,
        "smoothedEle": 259.30197304449644,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0042155,
        "lng": 120.646098,
        "ele": 258.6249999999998,
        "distanceKm": 66.72230658097031,
        "gradePct": -1.529511538410595,
        "smoothedEle": 258.3732925178267,
        "gradeBand": "descent"
      },
      {
        "lat": 23.004032000000002,
        "lng": 120.64569033333333,
        "ele": 257.3333333333332,
        "distanceKm": 66.76875406788552,
        "gradePct": -1.7652644260733472,
        "smoothedEle": 257.5259927372095,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0038485,
        "lng": 120.64528266666666,
        "ele": 256.0416666666666,
        "distanceKm": 66.81520160576999,
        "gradePct": -1.8865086105333562,
        "smoothedEle": 256.6311740925812,
        "gradeBand": "descent"
      },
      {
        "lat": 23.003665,
        "lng": 120.644875,
        "ele": 254.75,
        "distanceKm": 66.86164919462037,
        "gradePct": -1.952640399551428,
        "smoothedEle": 255.66143461494482,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00350866666667,
        "lng": 120.64450466666666,
        "ele": 254.16666666666666,
        "distanceKm": 66.90334992967968,
        "gradePct": -1.9458648221126404,
        "smoothedEle": 254.86058644174943,
        "gradeBand": "descent"
      },
      {
        "lat": 23.003352333333332,
        "lng": 120.64413433333334,
        "ele": 253.58333333333334,
        "distanceKm": 66.94505070464925,
        "gradePct": -1.9203716389696706,
        "smoothedEle": 254.1176486223648,
        "gradeBand": "descent"
      },
      {
        "lat": 23.003196,
        "lng": 120.643764,
        "ele": 253,
        "distanceKm": 66.98675151953115,
        "gradePct": -1.8644124034571254,
        "smoothedEle": 253.45044437891204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.002968499999998,
        "lng": 120.6432305,
        "ele": 252.37499999999991,
        "distanceKm": 67.04693199552509,
        "gradePct": -1.6602573252652963,
        "smoothedEle": 252.64818777564344,
        "gradeBand": "descent"
      },
      {
        "lat": 23.002741,
        "lng": 120.642697,
        "ele": 251.75,
        "distanceKm": 67.10711255503884,
        "gradePct": -1.3761464894778843,
        "smoothedEle": 252.04125881699784,
        "gradeBand": "descent"
      },
      {
        "lat": 23.002598,
        "lng": 120.64237,
        "ele": 251.5,
        "distanceKm": 67.14416730049979,
        "gradePct": -1.2072851980081623,
        "smoothedEle": 251.7188168871507,
        "gradeBand": "descent"
      },
      {
        "lat": 23.002336,
        "lng": 120.642008,
        "ele": 250.75,
        "distanceKm": 67.19130107671398,
        "gradePct": -1.0371164857334487,
        "smoothedEle": 251.31556196538622,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001903,
        "lng": 120.641727,
        "ele": 250.75,
        "distanceKm": 67.24738495398479,
        "gradePct": -0.9301726818171554,
        "smoothedEle": 250.7832742656097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001462924894234,
        "lng": 120.64160358195406,
        "ele": 250.75,
        "distanceKm": 67.2979233695679,
        "gradePct": -0.9537517619795046,
        "smoothedEle": 250.22642945249734,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001022638084482,
        "lng": 120.64148104738076,
        "ele": 250.4803467490702,
        "distanceKm": 67.34846207206607,
        "gradePct": -1.0183605692797923,
        "smoothedEle": 249.6453516573881,
        "gradeBand": "descent"
      },
      {
        "lat": 23.000582,
        "lng": 120.64136,
        "ele": 250,
        "distanceKm": 67.39900109084478,
        "gradePct": -1.0945203827340024,
        "smoothedEle": 249.05344096707097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.000042,
        "lng": 120.6411915,
        "ele": 248.625,
        "distanceKm": 67.46147427025305,
        "gradePct": -1.1519297573244223,
        "smoothedEle": 248.32417516551368,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999502,
        "lng": 120.641023,
        "ele": 247.25,
        "distanceKm": 67.5239474687095,
        "gradePct": -1.2036178457334017,
        "smoothedEle": 247.51997701423238,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999337,
        "lng": 120.640977,
        "ele": 246.75,
        "distanceKm": 67.54288917251353,
        "gradePct": -1.2273169542045077,
        "smoothedEle": 247.25479316097594,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999201,
        "lng": 120.640956,
        "ele": 246.5,
        "distanceKm": 67.55816370043371,
        "gradePct": -1.245388428455552,
        "smoothedEle": 247.04094977009333,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9986821340942,
        "lng": 120.64100567218134,
        "ele": 245.82315718384825,
        "distanceKm": 67.61608262275912,
        "gradePct": -1.2889594317944773,
        "smoothedEle": 246.27612490325416,
        "gradeBand": "descent"
      },
      {
        "lat": 22.998164,
        "lng": 120.641067,
        "ele": 245.25,
        "distanceKm": 67.67403754817617,
        "gradePct": -1.4290278634568463,
        "smoothedEle": 245.30439624962554,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9976665,
        "lng": 120.641167,
        "ele": 244.5,
        "distanceKm": 67.7302960837657,
        "gradePct": -1.5258076234169589,
        "smoothedEle": 244.37948115661166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.997169,
        "lng": 120.641267,
        "ele": 243.75,
        "distanceKm": 67.78655462621902,
        "gradePct": -1.5508132129661114,
        "smoothedEle": 243.56441847436417,
        "gradeBand": "descent"
      },
      {
        "lat": 22.996572,
        "lng": 120.641382,
        "ele": 244,
        "distanceKm": 67.85397364835883,
        "gradePct": -1.4718973973179819,
        "smoothedEle": 242.69701231594306,
        "gradeBand": "descent"
      },
      {
        "lat": 22.996318,
        "lng": 120.640894,
        "ele": 240.75,
        "distanceKm": 67.91135644992059,
        "gradePct": -1.3415300594037185,
        "smoothedEle": 242.00779695642584,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99614833333333,
        "lng": 120.64043416666667,
        "ele": 240.49999999999997,
        "distanceKm": 67.96206454379515,
        "gradePct": -1.2453159709593358,
        "smoothedEle": 241.42859402297762,
        "gradeBand": "descent"
      },
      {
        "lat": 22.995978666666666,
        "lng": 120.63997433333334,
        "ele": 240.25000000000003,
        "distanceKm": 68.01277269257375,
        "gradePct": -1.0909974700294058,
        "smoothedEle": 241.04510460715116,
        "gradeBand": "descent"
      },
      {
        "lat": 22.995809,
        "lng": 120.6395145,
        "ele": 240,
        "distanceKm": 68.06348089625887,
        "gradePct": -0.7852415170937691,
        "smoothedEle": 241.01233929623538,
        "gradeBand": "descent"
      },
      {
        "lat": 22.995639333333333,
        "lng": 120.63905466666667,
        "ele": 239.74999999999997,
        "distanceKm": 68.11418915484892,
        "gradePct": -0.4279237582388841,
        "smoothedEle": 241.1195934415519,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99546966666667,
        "lng": 120.63859483333334,
        "ele": 239.50000000000003,
        "distanceKm": 68.16489746834188,
        "gradePct": 0.07148115386017549,
        "smoothedEle": 241.55013183373504,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9953,
        "lng": 120.638135,
        "ele": 239.25,
        "distanceKm": 68.21560583674038,
        "gradePct": 0.5967809166170128,
        "smoothedEle": 242.23683579282243,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995315240727884,
        "lng": 120.63773848958748,
        "ele": 241.90165113042104,
        "distanceKm": 68.25622767871856,
        "gradePct": 0.9408481853026566,
        "smoothedEle": 242.8987223626922,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995367,
        "lng": 120.637344,
        "ele": 244,
        "distanceKm": 68.2970153946451,
        "gradePct": 1.2839716804893544,
        "smoothedEle": 243.6512122072133,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9954525,
        "lng": 120.636777,
        "ele": 245.375,
        "distanceKm": 68.35582653337894,
        "gradePct": 1.6667050043872866,
        "smoothedEle": 244.8065251664358,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995538,
        "lng": 120.63621,
        "ele": 246.75,
        "distanceKm": 68.41463763584048,
        "gradePct": 1.8700198030227302,
        "smoothedEle": 245.96376380778042,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995606,
        "lng": 120.63577400000001,
        "ele": 247.87499999999983,
        "distanceKm": 68.45990215464992,
        "gradePct": 1.928624861237169,
        "smoothedEle": 246.8237622459902,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995674,
        "lng": 120.635338,
        "ele": 249,
        "distanceKm": 68.5051666512987,
        "gradePct": 1.8285996042078831,
        "smoothedEle": 247.46853843660827,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.99569,
        "lng": 120.634967,
        "ele": 249.75,
        "distanceKm": 68.54318345040188,
        "gradePct": 1.581719002438766,
        "smoothedEle": 247.72159665567708,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995334,
        "lng": 120.635067,
        "ele": 249.75,
        "distanceKm": 68.584070874084,
        "gradePct": 1.2562885177276506,
        "smoothedEle": 247.8748721346955,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.99491072957859,
        "lng": 120.63516963512097,
        "ele": 249.55109472678112,
        "distanceKm": 68.63229471167591,
        "gradePct": 0.8336365698146319,
        "smoothedEle": 247.9665106924361,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.994487,
        "lng": 120.63527,
        "ele": 249,
        "distanceKm": 68.6805183482644,
        "gradePct": 0.4054948554178366,
        "smoothedEle": 247.92842209054967,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.994031999999997,
        "lng": 120.6353955,
        "ele": 247.4999999999998,
        "distanceKm": 68.73271751421943,
        "gradePct": 0.009411422641662037,
        "smoothedEle": 247.67075316308615,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.993577,
        "lng": 120.635521,
        "ele": 246,
        "distanceKm": 68.78491669082779,
        "gradePct": -0.3592902407172096,
        "smoothedEle": 247.15789893775735,
        "gradeBand": "descent"
      },
      {
        "lat": 22.993104,
        "lng": 120.63568649999999,
        "ele": 246.24999999999997,
        "distanceKm": 68.84017290938864,
        "gradePct": -0.7327319598809263,
        "smoothedEle": 246.49482431502707,
        "gradeBand": "descent"
      },
      {
        "lat": 22.992631,
        "lng": 120.635852,
        "ele": 246.5,
        "distanceKm": 68.89542914614393,
        "gradePct": -1.0342941864629291,
        "smoothedEle": 245.7862300646353,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99223333333333,
        "lng": 120.63598,
        "ele": 245.58333333333334,
        "distanceKm": 68.94154803130108,
        "gradePct": -1.218147874552582,
        "smoothedEle": 245.14769803784864,
        "gradeBand": "descent"
      },
      {
        "lat": 22.991835666666667,
        "lng": 120.636108,
        "ele": 244.66666666666666,
        "distanceKm": 68.98766692741968,
        "gradePct": -1.3010863671853299,
        "smoothedEle": 244.52272336428393,
        "gradeBand": "descent"
      },
      {
        "lat": 22.991438,
        "lng": 120.636236,
        "ele": 243.75,
        "distanceKm": 69.03378583450116,
        "gradePct": -1.321281903070864,
        "smoothedEle": 243.92890540753513,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99103155768591,
        "lng": 120.63638235652135,
        "ele": 243.75,
        "distanceKm": 69.08139858868574,
        "gradePct": -1.3413762653789072,
        "smoothedEle": 243.2834024243236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.990624,
        "lng": 120.636525,
        "ele": 243,
        "distanceKm": 69.1290111683046,
        "gradePct": -1.347346048299537,
        "smoothedEle": 242.6265831756387,
        "gradeBand": "descent"
      },
      {
        "lat": 22.990183,
        "lng": 120.636696,
        "ele": 242,
        "distanceKm": 69.18107864607775,
        "gradePct": -1.3383792048491991,
        "smoothedEle": 241.93524525675141,
        "gradeBand": "descent"
      },
      {
        "lat": 22.989555,
        "lng": 120.636858,
        "ele": 240.25,
        "distanceKm": 69.25285114222578,
        "gradePct": -1.269397915427472,
        "smoothedEle": 241.13163444280372,
        "gradeBand": "descent"
      },
      {
        "lat": 22.988946,
        "lng": 120.636963,
        "ele": 239.25,
        "distanceKm": 69.32141661934564,
        "gradePct": -1.0999572890212745,
        "smoothedEle": 240.53143599271016,
        "gradeBand": "descent"
      },
      {
        "lat": 22.988465499999997,
        "lng": 120.6370195,
        "ele": 239.50000000000003,
        "distanceKm": 69.3751579722705,
        "gradePct": -0.9311507960885886,
        "smoothedEle": 240.15155677362762,
        "gradeBand": "descent"
      },
      {
        "lat": 22.987985,
        "lng": 120.637076,
        "ele": 239.75,
        "distanceKm": 69.42889932740941,
        "gradePct": -0.739780440949165,
        "smoothedEle": 239.92025341298142,
        "gradeBand": "descent"
      },
      {
        "lat": 22.98762319162623,
        "lng": 120.63709357358248,
        "ele": 239.46646131384009,
        "distanceKm": 69.46917083719191,
        "gradePct": -0.5773850626531558,
        "smoothedEle": 239.83400735746272,
        "gradeBand": "descent"
      },
      {
        "lat": 22.987263,
        "lng": 120.637136,
        "ele": 239.25,
        "distanceKm": 69.50945715153885,
        "gradePct": -0.36278178303806835,
        "smoothedEle": 239.9105614675785,
        "gradeBand": "descent"
      },
      {
        "lat": 22.98683296490443,
        "lng": 120.63717352590338,
        "ele": 239.66250792430935,
        "distanceKm": 69.55742898451719,
        "gradePct": -0.10547668011484596,
        "smoothedEle": 240.06592355619875,
        "gradeBand": "descent"
      },
      {
        "lat": 22.986403,
        "lng": 120.637212,
        "ele": 240,
        "distanceKm": 69.60540090978532,
        "gradePct": 0.13861483631063523,
        "smoothedEle": 240.29862052347102,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.985976666666666,
        "lng": 120.63722866666667,
        "ele": 240.4166666666667,
        "distanceKm": 69.65283776951051,
        "gradePct": 0.3319934041133005,
        "smoothedEle": 240.53297330279267,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.985550333333332,
        "lng": 120.63724533333334,
        "ele": 240.8333333333333,
        "distanceKm": 69.70027462942939,
        "gradePct": 0.4193541817286015,
        "smoothedEle": 240.73182073398863,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.985124,
        "lng": 120.637262,
        "ele": 241.25,
        "distanceKm": 69.74771148954193,
        "gradePct": 0.42173640584147987,
        "smoothedEle": 240.87792518527763,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.984729,
        "lng": 120.637303,
        "ele": 241.5,
        "distanceKm": 69.79183361868992,
        "gradePct": 0.3396938631978466,
        "smoothedEle": 240.91219751839506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.984319,
        "lng": 120.63731750000001,
        "ele": 241.75000000000003,
        "distanceKm": 69.83744775866349,
        "gradePct": 0.17833999416234037,
        "smoothedEle": 240.81362187089508,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.983909,
        "lng": 120.637332,
        "ele": 242,
        "distanceKm": 69.88306189878321,
        "gradePct": -0.019736002109254688,
        "smoothedEle": 240.6201958242297,
        "gradeBand": "descent"
      },
      {
        "lat": 22.983405504859526,
        "lng": 120.63737506723596,
        "ele": 241.80423983651858,
        "distanceKm": 69.93922139781267,
        "gradePct": -0.28262466412266063,
        "smoothedEle": 240.28652656741758,
        "gradeBand": "descent"
      },
      {
        "lat": 22.982902,
        "lng": 120.637418,
        "ele": 240.5,
        "distanceKm": 69.9953808965501,
        "gradePct": -0.5058254452223067,
        "smoothedEle": 239.89288068900842,
        "gradeBand": "descent"
      },
      {
        "lat": 22.982487,
        "lng": 120.637496,
        "ele": 239,
        "distanceKm": 70.04221257251119,
        "gradePct": -0.6549126591348418,
        "smoothedEle": 239.48359143414154,
        "gradeBand": "descent"
      },
      {
        "lat": 22.982094,
        "lng": 120.637603,
        "ele": 238.25,
        "distanceKm": 70.08726409554261,
        "gradePct": -0.7852215294840792,
        "smoothedEle": 239.02478559329745,
        "gradeBand": "descent"
      },
      {
        "lat": 22.98171470524867,
        "lng": 120.63771415796963,
        "ele": 237.61359941052484,
        "distanceKm": 70.13094791375003,
        "gradePct": -0.9071798011267886,
        "smoothedEle": 238.52132351616848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.98133580929679,
        "lng": 120.63782690620994,
        "ele": 237.5,
        "distanceKm": 70.17463165908256,
        "gradePct": -1.0788691078046913,
        "smoothedEle": 237.88058272825987,
        "gradeBand": "descent"
      },
      {
        "lat": 22.980957,
        "lng": 120.63794,
        "ele": 237.5,
        "distanceKm": 70.21831548156624,
        "gradePct": -1.2564466893879107,
        "smoothedEle": 237.17954863236562,
        "gradeBand": "descent"
      },
      {
        "lat": 22.980514666666668,
        "lng": 120.63808166666666,
        "ele": 237,
        "distanceKm": 70.26959426632209,
        "gradePct": -1.356558233788528,
        "smoothedEle": 236.49161910981834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.980072333333332,
        "lng": 120.63822333333333,
        "ele": 236.5,
        "distanceKm": 70.32087306450642,
        "gradePct": -1.3262171735367,
        "smoothedEle": 235.98500320708663,
        "gradeBand": "descent"
      },
      {
        "lat": 22.97963,
        "lng": 120.638365,
        "ele": 236,
        "distanceKm": 70.37215187611825,
        "gradePct": -1.1578778900001914,
        "smoothedEle": 235.6011997015182,
        "gradeBand": "descent"
      },
      {
        "lat": 22.979198,
        "lng": 120.638527,
        "ele": 233.75,
        "distanceKm": 70.4229703498907,
        "gradePct": -0.8989653953968301,
        "smoothedEle": 235.31917054764295,
        "gradeBand": "descent"
      },
      {
        "lat": 22.978637,
        "lng": 120.638709,
        "ele": 233.75,
        "distanceKm": 70.48807378233393,
        "gradePct": -0.6382649980357707,
        "smoothedEle": 235.0325182069028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.978180240535593,
        "lng": 120.63886521808071,
        "ele": 233.948246295316,
        "distanceKm": 70.54132149652325,
        "gradePct": -0.4742099595239825,
        "smoothedEle": 234.88353411149285,
        "gradeBand": "descent"
      },
      {
        "lat": 22.977723491284838,
        "lng": 120.63902147060759,
        "ele": 234.33723892402324,
        "distanceKm": 70.59456920290108,
        "gradePct": -0.3257070261288913,
        "smoothedEle": 234.82537538591768,
        "gradeBand": "descent"
      },
      {
        "lat": 22.97726674564242,
        "lng": 120.6391777353038,
        "ele": 234.79361946201155,
        "distanceKm": 70.64781691708976,
        "gradePct": -0.17528863649101573,
        "smoothedEle": 234.8591931035843,
        "gradeBand": "descent"
      },
      {
        "lat": 22.97681,
        "lng": 120.639334,
        "ele": 235.25,
        "distanceKm": 70.70106464752318,
        "gradePct": 0.07556445100698177,
        "smoothedEle": 235.14729940219772,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.976386,
        "lng": 120.639482,
        "ele": 235.56249999999994,
        "distanceKm": 70.75058608921402,
        "gradePct": 0.26639059796145736,
        "smoothedEle": 235.40619624425753,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.975962000000003,
        "lng": 120.63963000000001,
        "ele": 235.875,
        "distanceKm": 70.80010754544995,
        "gradePct": 0.40672286503549904,
        "smoothedEle": 235.64233852715859,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.975538,
        "lng": 120.639778,
        "ele": 236.18750000000006,
        "distanceKm": 70.84962901623021,
        "gradePct": 0.409097133499054,
        "smoothedEle": 235.68719205468494,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.975114,
        "lng": 120.639926,
        "ele": 236.5,
        "distanceKm": 70.89915050155429,
        "gradePct": 0.19077685847463227,
        "smoothedEle": 235.51849629256273,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.974711666666668,
        "lng": 120.64005866666668,
        "ele": 236.41666666666666,
        "distanceKm": 70.94590416824711,
        "gradePct": -0.07201891858663499,
        "smoothedEle": 235.23768144293052,
        "gradeBand": "descent"
      },
      {
        "lat": 22.974309333333334,
        "lng": 120.64019133333333,
        "ele": 236.33333333333334,
        "distanceKm": 70.99265784668512,
        "gradePct": -0.4047791119543347,
        "smoothedEle": 234.79725653220262,
        "gradeBand": "descent"
      },
      {
        "lat": 22.973907,
        "lng": 120.640324,
        "ele": 236.25,
        "distanceKm": 71.03941153686901,
        "gradePct": -0.7387982558881313,
        "smoothedEle": 234.20034117334822,
        "gradeBand": "descent"
      },
      {
        "lat": 22.973276,
        "lng": 120.640467,
        "ele": 233,
        "distanceKm": 71.1110866479971,
        "gradePct": -1.2226697887759141,
        "smoothedEle": 233.00146507228803,
        "gradeBand": "descent"
      },
      {
        "lat": 22.972695,
        "lng": 120.640566,
        "ele": 232,
        "distanceKm": 71.1764811729297,
        "gradePct": -1.5587054334442376,
        "smoothedEle": 231.83223175198435,
        "gradeBand": "descent"
      },
      {
        "lat": 22.972228666666666,
        "lng": 120.64066166666667,
        "ele": 230.4166666666668,
        "distanceKm": 71.22925197185126,
        "gradePct": -1.7140512573588649,
        "smoothedEle": 230.9019482147003,
        "gradeBand": "descent"
      },
      {
        "lat": 22.971762333333334,
        "lng": 120.64075733333334,
        "ele": 228.8333333333332,
        "distanceKm": 71.28202277704389,
        "gradePct": -1.7488419628650613,
        "smoothedEle": 229.98991893890576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.971296,
        "lng": 120.640853,
        "ele": 227.25,
        "distanceKm": 71.3347935885083,
        "gradePct": -1.7113884434703877,
        "smoothedEle": 229.15481562420044,
        "gradeBand": "descent"
      },
      {
        "lat": 22.97077,
        "lng": 120.640978,
        "ele": 227.5,
        "distanceKm": 71.39466583557511,
        "gradePct": -1.50244562643109,
        "smoothedEle": 228.5067675186896,
        "gradeBand": "descent"
      },
      {
        "lat": 22.970285333333333,
        "lng": 120.641087,
        "ele": 227.58333333333334,
        "distanceKm": 71.44970159199107,
        "gradePct": -1.3361596238213973,
        "smoothedEle": 227.8762014955928,
        "gradeBand": "descent"
      },
      {
        "lat": 22.969800666666668,
        "lng": 120.64119600000001,
        "ele": 227.66666666666666,
        "distanceKm": 71.5047373565197,
        "gradePct": -1.1810871778633727,
        "smoothedEle": 227.2682841146741,
        "gradeBand": "descent"
      },
      {
        "lat": 22.969316,
        "lng": 120.641305,
        "ele": 227.75,
        "distanceKm": 71.55977312916104,
        "gradePct": -1.0899541673756503,
        "smoothedEle": 226.70453253671144,
        "gradeBand": "descent"
      },
      {
        "lat": 22.968863,
        "lng": 120.64143,
        "ele": 227.75,
        "distanceKm": 71.61174473652434,
        "gradePct": -1.0567690137217332,
        "smoothedEle": 226.19754989398527,
        "gradeBand": "descent"
      },
      {
        "lat": 22.968450103852255,
        "lng": 120.64152814569229,
        "ele": 226.6274185522282,
        "distanceKm": 71.65874343638818,
        "gradePct": -1.0963492188767945,
        "smoothedEle": 225.58362810540342,
        "gradeBand": "descent"
      },
      {
        "lat": 22.968037207704516,
        "lng": 120.64162629138458,
        "ele": 225.50483710445673,
        "distanceKm": 71.7057421428129,
        "gradePct": -1.2113257204901628,
        "smoothedEle": 224.83534027965405,
        "gradeBand": "descent"
      },
      {
        "lat": 22.967624311556772,
        "lng": 120.64172443707687,
        "ele": 224.38225565668526,
        "distanceKm": 71.75274085579917,
        "gradePct": -1.411644179476292,
        "smoothedEle": 223.9532783296232,
        "gradeBand": "descent"
      },
      {
        "lat": 22.967211415409032,
        "lng": 120.64182258276917,
        "ele": 223.25967420891345,
        "distanceKm": 71.79973957534615,
        "gradePct": -1.6562569743731979,
        "smoothedEle": 223.00214620311345,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96679853571883,
        "lng": 120.64192080963554,
        "ele": 222.06225272210725,
        "distanceKm": 71.84673829133814,
        "gradePct": -1.8648400371147338,
        "smoothedEle": 222.01076556320476,
        "gradeBand": "descent"
      },
      {
        "lat": 22.966385690479218,
        "lng": 120.6420192064237,
        "ele": 220.70816848140495,
        "distanceKm": 71.89373699773621,
        "gradePct": -2.0001938641560457,
        "smoothedEle": 221.02609193773392,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96597284523961,
        "lng": 120.64211760321184,
        "ele": 219.3540842407027,
        "distanceKm": 71.9407357107272,
        "gradePct": -2.0115210077245393,
        "smoothedEle": 220.1555463492741,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96556,
        "lng": 120.642216,
        "ele": 218,
        "distanceKm": 71.987734430312,
        "gradePct": -1.9249277779225349,
        "smoothedEle": 219.395243630572,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96507294073915,
        "lng": 120.64231536468411,
        "ele": 217.4256376640956,
        "distanceKm": 72.04284020248869,
        "gradePct": -1.7539518731117774,
        "smoothedEle": 218.5850872509409,
        "gradeBand": "descent"
      },
      {
        "lat": 22.964585794021733,
        "lng": 120.64241421826995,
        "ele": 217.0286571249468,
        "distanceKm": 72.09794590446194,
        "gradePct": -1.541980939996413,
        "smoothedEle": 217.8641695147998,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96409839701087,
        "lng": 120.64251160913497,
        "ele": 217.13932856247337,
        "distanceKm": 72.1530516767354,
        "gradePct": -1.352376438165161,
        "smoothedEle": 217.2515569294336,
        "gradeBand": "descent"
      },
      {
        "lat": 22.963611,
        "lng": 120.642609,
        "ele": 217.25,
        "distanceKm": 72.20815745551278,
        "gradePct": -1.1822466154666929,
        "smoothedEle": 216.73049430115367,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9631465,
        "lng": 120.64268799999999,
        "ele": 216.75000000000006,
        "distanceKm": 72.26043703773152,
        "gradePct": -1.0158786278313554,
        "smoothedEle": 216.32312023163763,
        "gradeBand": "descent"
      },
      {
        "lat": 22.962682,
        "lng": 120.642767,
        "ele": 216.25,
        "distanceKm": 72.31271662424902,
        "gradePct": -0.892846460390645,
        "smoothedEle": 215.9142700424511,
        "gradeBand": "descent"
      },
      {
        "lat": 22.962322,
        "lng": 120.642812,
        "ele": 216,
        "distanceKm": 72.35301111845604,
        "gradePct": -0.8383965729598822,
        "smoothedEle": 215.57521467116777,
        "gradeBand": "descent"
      },
      {
        "lat": 22.961892444444445,
        "lng": 120.64284500000001,
        "ele": 215.36111111111114,
        "distanceKm": 72.40089493160892,
        "gradePct": -0.8390609544614045,
        "smoothedEle": 215.12104449663173,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96146288888889,
        "lng": 120.64287800000001,
        "ele": 214.7222222222223,
        "distanceKm": 72.44877874551908,
        "gradePct": -0.9086374940391989,
        "smoothedEle": 214.59668923543197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.961033333333333,
        "lng": 120.642911,
        "ele": 214.08333333333326,
        "distanceKm": 72.4966625601864,
        "gradePct": -1.011440872328819,
        "smoothedEle": 214.0169383942354,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960603777777777,
        "lng": 120.642944,
        "ele": 213.44444444444443,
        "distanceKm": 72.54454637561106,
        "gradePct": -1.1134749865789486,
        "smoothedEle": 213.4194907199417,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960174222222225,
        "lng": 120.642977,
        "ele": 212.80555555555557,
        "distanceKm": 72.59243019179257,
        "gradePct": -1.2232664472582084,
        "smoothedEle": 212.75479828161423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.95974466666667,
        "lng": 120.64301,
        "ele": 212.16666666666674,
        "distanceKm": 72.6403140087317,
        "gradePct": -1.3083009675408404,
        "smoothedEle": 212.07278102933054,
        "gradeBand": "descent"
      },
      {
        "lat": 22.959315111111113,
        "lng": 120.64304299999999,
        "ele": 211.5277777777777,
        "distanceKm": 72.68819782642797,
        "gradePct": -1.3063435863933774,
        "smoothedEle": 211.50673755323004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.958885555555558,
        "lng": 120.643076,
        "ele": 210.88888888888886,
        "distanceKm": 72.73608164488152,
        "gradePct": -1.1635685715449544,
        "smoothedEle": 211.1979682536071,
        "gradeBand": "descent"
      },
      {
        "lat": 22.958456,
        "lng": 120.643109,
        "ele": 210.25,
        "distanceKm": 72.78396546409228,
        "gradePct": -0.8744625270317687,
        "smoothedEle": 211.12337515082183,
        "gradeBand": "descent"
      },
      {
        "lat": 22.957975,
        "lng": 120.643154,
        "ele": 208.75,
        "distanceKm": 72.83764838324662,
        "gradePct": -0.43033714473804097,
        "smoothedEle": 211.25007369163842,
        "gradeBand": "descent"
      },
      {
        "lat": 22.957582698468045,
        "lng": 120.64310852774011,
        "ele": 208.67232088402307,
        "distanceKm": 72.88151813756691,
        "gradePct": -0.07882427147150282,
        "smoothedEle": 211.42805084925664,
        "gradeBand": "descent"
      },
      {
        "lat": 22.957197,
        "lng": 120.643015,
        "ele": 209.5,
        "distanceKm": 72.92546199773693,
        "gradePct": 0.014721627529070037,
        "smoothedEle": 211.29589019555732,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.956653,
        "lng": 120.642838,
        "ele": 212.5,
        "distanceKm": 72.98860855759293,
        "gradePct": -0.035111983154933524,
        "smoothedEle": 211.0641094777768,
        "gradeBand": "descent"
      },
      {
        "lat": 22.956162,
        "lng": 120.642698,
        "ele": 214.25,
        "distanceKm": 73.04505573781618,
        "gradePct": -0.2486956791196029,
        "smoothedEle": 210.78273355962983,
        "gradeBand": "descent"
      },
      {
        "lat": 22.955688,
        "lng": 120.642596,
        "ele": 214.75,
        "distanceKm": 73.09878694093346,
        "gradePct": -0.3208536660681415,
        "smoothedEle": 210.73440778974688,
        "gradeBand": "descent"
      },
      {
        "lat": 22.955127,
        "lng": 120.64254,
        "ele": 210.5,
        "distanceKm": 73.1614303430461,
        "gradePct": -0.12670462563887772,
        "smoothedEle": 210.91045840952629,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9546775,
        "lng": 120.6425215,
        "ele": 209.24999999999983,
        "distanceKm": 73.21144841186727,
        "gradePct": 0.09690685160357622,
        "smoothedEle": 211.14407187891067,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.954228,
        "lng": 120.642503,
        "ele": 208,
        "distanceKm": 73.26146648092639,
        "gradePct": 0.16342144086509103,
        "smoothedEle": 211.09481664166933,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953613,
        "lng": 120.642449,
        "ele": 208.75,
        "distanceKm": 73.3300746111369,
        "gradePct": -0.10017453294069725,
        "smoothedEle": 210.62198839474866,
        "gradeBand": "descent"
      },
      {
        "lat": 22.953252,
        "lng": 120.642374,
        "ele": 209.75,
        "distanceKm": 73.3709439862592,
        "gradePct": -0.3689997504452497,
        "smoothedEle": 210.21689315509667,
        "gradeBand": "descent"
      },
      {
        "lat": 22.952893999999997,
        "lng": 120.6422615,
        "ele": 211.25000000000026,
        "distanceKm": 73.41238492634619,
        "gradePct": -0.5833364111340902,
        "smoothedEle": 209.97647682506283,
        "gradeBand": "descent"
      },
      {
        "lat": 22.952536,
        "lng": 120.642149,
        "ele": 212.75,
        "distanceKm": 73.45382587490548,
        "gradePct": -0.5771047152160296,
        "smoothedEle": 209.94813128942153,
        "gradeBand": "descent"
      },
      {
        "lat": 22.952052000000002,
        "lng": 120.6420025,
        "ele": 211.50000000000017,
        "distanceKm": 73.50969566953057,
        "gradePct": -0.36419983464777256,
        "smoothedEle": 210.03403475137236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.951568,
        "lng": 120.641856,
        "ele": 210.25,
        "distanceKm": 73.5655654785637,
        "gradePct": 0.0019578266189625715,
        "smoothedEle": 210.27412031254434,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.951244,
        "lng": 120.64182,
        "ele": 209.75,
        "distanceKm": 73.60178076685239,
        "gradePct": 0.18990780444806618,
        "smoothedEle": 210.41781162496292,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.950877,
        "lng": 120.64185,
        "ele": 208.5,
        "distanceKm": 73.64270480888518,
        "gradePct": 0.269571673572553,
        "smoothedEle": 210.4948814260878,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.950465,
        "lng": 120.641956,
        "ele": 209.75,
        "distanceKm": 73.68978532894668,
        "gradePct": 0.1664147161656023,
        "smoothedEle": 210.33625073333644,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.950146,
        "lng": 120.642068,
        "ele": 208.5,
        "distanceKm": 73.72706433440743,
        "gradePct": -0.06617494911372906,
        "smoothedEle": 209.97632204496517,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 73.72706433440743,
      "elevationGainM": 847.3883065347818,
      "elevationLossM": 689.4002438194374,
      "minimumElevationM": 51.75,
      "maximumElevationM": 639.25,
      "maximumSustainedGradePct": 9.989766117449477
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 379,
        "startDistanceKm": 0,
        "endDistanceKm": 18.406445483260683,
        "distanceKm": 18.406445483260683,
        "gainM": 138.62235082419787,
        "averageGradePct": 0.7531185255201215,
        "maximumGradePct": 4.521233743969491
      },
      {
        "startIndex": 391,
        "endIndex": 457,
        "startDistanceKm": 18.92089795516953,
        "endDistanceKm": 22.120997083567847,
        "distanceKm": 3.2000991283983176,
        "gainM": 45.44162549924815,
        "averageGradePct": 1.4200068084138426,
        "maximumGradePct": 3.2525449630127783
      },
      {
        "startIndex": 466,
        "endIndex": 889,
        "startDistanceKm": 22.58919850323402,
        "endDistanceKm": 39.57234421174369,
        "distanceKm": 16.98314570850967,
        "gainM": 466.04412612440626,
        "averageGradePct": 2.7441566722876765,
        "maximumGradePct": 9.989766117449477
      },
      {
        "startIndex": 1056,
        "endIndex": 1141,
        "startDistanceKm": 44.87036330072363,
        "endDistanceKm": 48.90720318747082,
        "distanceKm": 4.036839886747188,
        "gainM": 77.28606172991346,
        "averageGradePct": 1.9145188785822553,
        "maximumGradePct": 4.1955023575259505
      },
      {
        "startIndex": 1176,
        "endIndex": 1229,
        "startDistanceKm": 50.48489323906497,
        "endDistanceKm": 53.06470792196334,
        "distanceKm": 2.5798146828983732,
        "gainM": 74.54066533105436,
        "averageGradePct": 2.8893806142427767,
        "maximumGradePct": 7.658378989229709
      }
    ]
  },
  "kaohsiung-harbor": {
    "routeId": "kaohsiung-harbor",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T15:21:37.580Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "6c5b6862aa617dec876e99c46907b04ae63ca09498303211f9b5edbc2d2d3912",
      "roadPolicyAuditSha256": "b384011fdbd966657edb5baa7842d7e00240d7fc1c0d46689c6d67c3e137a894",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "旗津一路與旗津二路位於狹長沙洲半島，實際高程僅約負1至11公尺；預設100公尺分析仍累計44公尺爬升、最大持續坡度4.0%，主要來自低海拔SRTM細微起伏。比較500/200、750/300、1000/500公尺後，爬升依序為12、9、7公尺，最大持續坡度依序為1.0%、0.7%、0.4%；500/200已排除平坦海岸道路的短距離雜訊且使用最小合理視窗，因此採用。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://khh.travel/zh-tw/attractions/detail/1143/",
        "referenceLabel": "高雄旅遊網旗津狹長沙洲半島與自行車旅遊資料"
      },
      "reviewedAt": "2026-07-29T15:45:00.000Z",
      "reviewerNote": "依旗津島內方案重建。初版旗津輪渡站入口觸發1與9公尺逆向單行service而被產生器拒絕；第二版海岸公園點導入service 39／28公尺與footway 44公尺往返，風車公園與回程研究點導入service、access=permit及oneway service，均未採用。最終起終點設於旗津輪渡站南側廟前路公共道路，只沿旗津一路與旗津二路往返；raw全程3979公尺去程加3979公尺回程皆為tertiary，無footway、path、steps、track、service、private、access禁制、bicycle=no或oneway=yes。raw明確無route=ferry與tunnel，軌跡座標全在旗津島，不含渡輪、跨水域、高雄港過港隧道、港區管制道路、壽山或北岸里程與海拔，也不宣稱行經壽山或北岸。500/200公尺分析為8.0公里、爬升12公尺、最大1.0%，三組比較已記於elevationAnalysis。抵達起點需自行另行搭乘渡輪者，必須獨立查詢當日班次、營運公告及自行車載運規定，渡輪移動不屬本GPX；旗津交通資訊：https://cijin.kcg.gov.tw/Content_List.aspx?Create=1&n=7957C12CCD70E4E1。過港隧道禁止腳踏車等慢車：https://kh.twport.com.tw/zh-tw/service/Articles?a=1047。"
    },
    "waypoints": [
      {
        "name": "旗津輪渡站南側廟前路",
        "lat": 22.611748,
        "lng": 120.270071,
        "role": "start"
      },
      {
        "name": "旗津一路北段公共道路",
        "lat": 22.607997,
        "lng": 120.272372,
        "role": "via"
      },
      {
        "name": "旗津一路南段公共道路",
        "lat": 22.596066,
        "lng": 120.281338,
        "role": "via"
      },
      {
        "name": "旗津二路中段公共道路",
        "lat": 22.58802,
        "lng": 120.288264,
        "role": "via"
      },
      {
        "name": "旗津二路南側公共道路",
        "lat": 22.582187,
        "lng": 120.291247,
        "role": "via"
      },
      {
        "name": "旗津二路中段公共道路",
        "lat": 22.58802,
        "lng": 120.288264,
        "role": "via"
      },
      {
        "name": "旗津一路南段公共道路",
        "lat": 22.596066,
        "lng": 120.281338,
        "role": "via"
      },
      {
        "name": "旗津一路北段公共道路",
        "lat": 22.607997,
        "lng": 120.272372,
        "role": "via"
      },
      {
        "name": "旗津輪渡站南側廟前路",
        "lat": 22.611748,
        "lng": 120.270071,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.611748,
        "lng": 120.270071,
        "ele": 5.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 4.855590500822481,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.611369,
        "lng": 120.270366,
        "ele": 5.5,
        "distanceKm": 0.05189385599869501,
        "gradePct": -0.5318394094212429,
        "smoothedEle": 4.579598523553111,
        "gradeBand": "descent"
      },
      {
        "lat": 22.611019,
        "lng": 120.270587,
        "ele": 4.75,
        "distanceKm": 0.09694107421761314,
        "gradePct": -0.4627847839703752,
        "smoothedEle": 4.406961959925939,
        "gradeBand": "descent"
      },
      {
        "lat": 22.610709,
        "lng": 120.2707715,
        "ele": 4.625,
        "distanceKm": 0.13627153119804333,
        "gradePct": -0.41566369021363003,
        "smoothedEle": 4.289159225534076,
        "gradeBand": "descent"
      },
      {
        "lat": 22.610399,
        "lng": 120.270956,
        "ele": 4.5,
        "distanceKm": 0.1756020087286494,
        "gradePct": -0.30652971131688844,
        "smoothedEle": 4.317318170399894,
        "gradeBand": "descent"
      },
      {
        "lat": 22.610004,
        "lng": 120.271045,
        "ele": 4.5,
        "distanceKm": 0.22046411865668003,
        "gradePct": -0.13842592231526263,
        "smoothedEle": 4.469902408385006,
        "gradeBand": "descent"
      },
      {
        "lat": 22.609617,
        "lng": 120.271232,
        "ele": 3.25,
        "distanceKm": 0.2675837378085535,
        "gradePct": 0.027868410860803383,
        "smoothedEle": 4.575206276567143,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.609191,
        "lng": 120.27153,
        "ele": 3.25,
        "distanceKm": 0.32397124695574925,
        "gradePct": 0.12730090524930615,
        "smoothedEle": 4.58060289419519,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.608765,
        "lng": 120.271828,
        "ele": 3.25,
        "distanceKm": 0.3803588074850097,
        "gradePct": 0.24852090697711038,
        "smoothedEle": 4.8305387266079265,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.60844053259835,
        "lng": 120.27205705420022,
        "ele": 5.479138721255185,
        "distanceKm": 0.42342318857435635,
        "gradePct": 0.3112549895327459,
        "smoothedEle": 5.099025376141013,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.608116,
        "lng": 120.272286,
        "ele": 6.25,
        "distanceKm": 0.4664876002884346,
        "gradePct": 0.38826190844819264,
        "smoothedEle": 5.349280423389667,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.607809963216855,
        "lng": 120.27250744042918,
        "ele": 5.965461283247061,
        "distanceKm": 0.5074109825878129,
        "gradePct": 0.4655473525910816,
        "smoothedEle": 5.510112684278872,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.607504,
        "lng": 120.272729,
        "ele": 5.5,
        "distanceKm": 0.5483343865473678,
        "gradePct": 0.5074323895759263,
        "smoothedEle": 5.703456412651682,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.606972,
        "lng": 120.273114,
        "ele": 7.25,
        "distanceKm": 0.6194771183351324,
        "gradePct": 0.5313388678745552,
        "smoothedEle": 6.137101175195541,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.606541,
        "lng": 120.273418,
        "ele": 8,
        "distanceKm": 0.6766665332652297,
        "gradePct": 0.5908837760547678,
        "smoothedEle": 6.571052019938181,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.606247,
        "lng": 120.27361950000001,
        "ele": 6.749999999999998,
        "distanceKm": 0.7153519995117247,
        "gradePct": 0.6572511204786519,
        "smoothedEle": 6.862132474378913,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.605953,
        "lng": 120.273821,
        "ele": 5.5,
        "distanceKm": 0.754037489387112,
        "gradePct": 0.7312322159058724,
        "smoothedEle": 7.200683646151756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.605515,
        "lng": 120.273994,
        "ele": 5.75,
        "distanceKm": 0.8058776414883734,
        "gradePct": 0.7671256443182715,
        "smoothedEle": 7.58845795360261,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.605104363611243,
        "lng": 120.27418625243835,
        "ele": 6.756136457832337,
        "distanceKm": 0.855620795823489,
        "gradePct": 0.708085621547897,
        "smoothedEle": 7.8275291036823145,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.604706,
        "lng": 120.27441,
        "ele": 8.25,
        "distanceKm": 0.905517542493815,
        "gradePct": 0.560633036325103,
        "smoothedEle": 7.909401294424974,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.604424412719418,
        "lng": 120.27462075333175,
        "ele": 9.583346713833533,
        "distanceKm": 0.9435758721021326,
        "gradePct": 0.39352983473976316,
        "smoothedEle": 7.896189795128439,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.604154,
        "lng": 120.274849,
        "ele": 10.5,
        "distanceKm": 0.9816953628288645,
        "gradePct": 0.2681947411713544,
        "smoothedEle": 7.943959340913159,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.603854,
        "lng": 120.275162,
        "ele": 9.5,
        "distanceKm": 1.0280112567541944,
        "gradePct": 0.20385430444636038,
        "smoothedEle": 8.102543187133428,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.60351319666692,
        "lng": 120.27544036870181,
        "ele": 8.727417733433853,
        "distanceKm": 1.0754732835789602,
        "gradePct": 0.16840009281793394,
        "smoothedEle": 8.196903891325228,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.603171619537818,
        "lng": 120.27571762691994,
        "ele": 8.259076148742896,
        "distanceKm": 1.1229356339790733,
        "gradePct": 0.12105746929497489,
        "smoothedEle": 8.145469748427377,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.60283066279806,
        "lng": 120.27599577849415,
        "ele": 7.826430909704882,
        "distanceKm": 1.1703979545961547,
        "gradePct": -0.01265620464526718,
        "smoothedEle": 7.90448955308654,
        "gradeBand": "descent"
      },
      {
        "lat": 22.602489566402895,
        "lng": 120.27627372844941,
        "ele": 7.4509214134684445,
        "distanceKm": 1.217860277893998,
        "gradePct": -0.29662605451544094,
        "smoothedEle": 7.474534515417048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.602148,
        "lng": 120.276551,
        "ele": 7.25,
        "distanceKm": 1.2653226215512323,
        "gradePct": -0.5779366739799163,
        "smoothedEle": 7.020849702364109,
        "gradeBand": "descent"
      },
      {
        "lat": 22.601757,
        "lng": 120.27687866666666,
        "ele": 6.500000000000001,
        "distanceKm": 1.3202925714409925,
        "gradePct": -0.7897625299705939,
        "smoothedEle": 6.568808930461684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.601366,
        "lng": 120.27720633333334,
        "ele": 5.749999999999999,
        "distanceKm": 1.3752625798047797,
        "gradePct": -0.8226974170019463,
        "smoothedEle": 6.21502670956493,
        "gradeBand": "descent"
      },
      {
        "lat": 22.600975,
        "lng": 120.277534,
        "ele": 5,
        "distanceKm": 1.430232646639954,
        "gradePct": -0.6834813356373848,
        "smoothedEle": 5.989306386328639,
        "gradeBand": "descent"
      },
      {
        "lat": 22.600471,
        "lng": 120.277909,
        "ele": 5.5,
        "distanceKm": 1.4982229449370927,
        "gradePct": -0.44221065152926553,
        "smoothedEle": 5.865875349702851,
        "gradeBand": "descent"
      },
      {
        "lat": 22.600056,
        "lng": 120.278316,
        "ele": 5,
        "distanceKm": 1.5604733171599157,
        "gradePct": -0.2700897387731747,
        "smoothedEle": 5.770029647660566,
        "gradeBand": "descent"
      },
      {
        "lat": 22.59973643239958,
        "lng": 120.27875057890394,
        "ele": 5.435625275870261,
        "distanceKm": 1.6175079717710197,
        "gradePct": -0.13681823537712526,
        "smoothedEle": 5.767920492840463,
        "gradeBand": "descent"
      },
      {
        "lat": 22.59944,
        "lng": 120.279205,
        "ele": 6.25,
        "distanceKm": 1.6746275599615037,
        "gradePct": 0.007952462100550674,
        "smoothedEle": 5.924615838683994,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.59921,
        "lng": 120.279494,
        "ele": 6.75,
        "distanceKm": 1.7137971337956228,
        "gradePct": 0.11870051847358723,
        "smoothedEle": 6.079297107304646,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.598928,
        "lng": 120.279786,
        "ele": 6.5,
        "distanceKm": 1.7571770336782822,
        "gradePct": 0.19569134852995881,
        "smoothedEle": 6.166487569062864,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.598577,
        "lng": 120.280069,
        "ele": 6,
        "distanceKm": 1.8058321512340387,
        "gradePct": 0.24277858199309504,
        "smoothedEle": 6.253909431391295,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.59826335058042,
        "lng": 120.28022582270077,
        "ele": 6.250502255687897,
        "distanceKm": 1.8442448261393856,
        "gradePct": 0.2643231529265058,
        "smoothedEle": 6.369913627246366,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.597949,
        "lng": 120.280381,
        "ele": 6.75,
        "distanceKm": 1.882657961749977,
        "gradePct": 0.28558231402520307,
        "smoothedEle": 6.527492650824915,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.597529034826632,
        "lng": 120.28057739988714,
        "ele": 7.041349773869474,
        "distanceKm": 1.9335226538551615,
        "gradePct": 0.3083203053934739,
        "smoothedEle": 6.735584586965527,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.597114,
        "lng": 120.280786,
        "ele": 6.5,
        "distanceKm": 1.9843988790093183,
        "gradePct": 0.27526951517523035,
        "smoothedEle": 6.765937886332497,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.596532,
        "lng": 120.281049,
        "ele": 6,
        "distanceKm": 2.054520637521529,
        "gradePct": -0.0014016511336754083,
        "smoothedEle": 6.409263934631986,
        "gradeBand": "descent"
      },
      {
        "lat": 22.596183,
        "lng": 120.28126,
        "ele": 7.25,
        "distanceKm": 2.098963770975864,
        "gradePct": -0.2617187842248297,
        "smoothedEle": 6.070763584318757,
        "gradeBand": "descent"
      },
      {
        "lat": 22.595873744909117,
        "lng": 120.28148006801896,
        "ele": 7.943027199684071,
        "distanceKm": 2.1401087685212827,
        "gradePct": -0.5431498766235239,
        "smoothedEle": 5.653214180078597,
        "gradeBand": "descent"
      },
      {
        "lat": 22.595568,
        "lng": 120.281706,
        "ele": 8.25,
        "distanceKm": 2.181264379977377,
        "gradePct": -0.7484060916712594,
        "smoothedEle": 5.267255627386026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.595301,
        "lng": 120.281964,
        "ele": 6.25,
        "distanceKm": 2.2210508434818075,
        "gradePct": -0.8054461828960161,
        "smoothedEle": 4.968615498199924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.594913,
        "lng": 120.282298,
        "ele": 3.25,
        "distanceKm": 2.2761605259696367,
        "gradePct": -0.7676469381650108,
        "smoothedEle": 4.709150225606096,
        "gradeBand": "descent"
      },
      {
        "lat": 22.594555,
        "lng": 120.2825395,
        "ele": 2.375,
        "distanceKm": 2.3230575509350055,
        "gradePct": -0.5911653012659261,
        "smoothedEle": 4.643923465004756,
        "gradeBand": "descent"
      },
      {
        "lat": 22.594197,
        "lng": 120.282781,
        "ele": 1.5,
        "distanceKm": 2.3699546099807263,
        "gradePct": -0.4706791226176531,
        "smoothedEle": 4.431960742765591,
        "gradeBand": "descent"
      },
      {
        "lat": 22.593877,
        "lng": 120.283017,
        "ele": 2.25,
        "distanceKm": 2.4130022980114245,
        "gradePct": -0.45594411846790683,
        "smoothedEle": 4.117140237118769,
        "gradeBand": "descent"
      },
      {
        "lat": 22.593530376605266,
        "lng": 120.28330434338423,
        "ele": 3.279166848977732,
        "distanceKm": 2.461538258549182,
        "gradePct": -0.543928320010683,
        "smoothedEle": 3.6901375787074624,
        "gradeBand": "descent"
      },
      {
        "lat": 22.593182816284617,
        "lng": 120.28359035377592,
        "ele": 4.379818729093256,
        "distanceKm": 2.5100741280027585,
        "gradePct": -0.6221998358029525,
        "smoothedEle": 3.4175817964387654,
        "gradeBand": "descent"
      },
      {
        "lat": 22.592835,
        "lng": 120.283876,
        "ele": 5.5,
        "distanceKm": 2.5586101109599277,
        "gradePct": -0.5811628248444308,
        "smoothedEle": 3.3209093295388428,
        "gradeBand": "descent"
      },
      {
        "lat": 22.592469,
        "lng": 120.284113,
        "ele": 4.75,
        "distanceKm": 2.6060260336093104,
        "gradePct": -0.45027681641721756,
        "smoothedEle": 3.267606094228447,
        "gradeBand": "descent"
      },
      {
        "lat": 22.592208,
        "lng": 120.284336,
        "ele": 4.25,
        "distanceKm": 2.642990763014063,
        "gradePct": -0.29073181262839043,
        "smoothedEle": 3.2718484288833163,
        "gradeBand": "descent"
      },
      {
        "lat": 22.591808,
        "lng": 120.284681,
        "ele": 3.25,
        "distanceKm": 2.6998481926966966,
        "gradePct": -0.13823462984473245,
        "smoothedEle": 3.198536825798839,
        "gradeBand": "descent"
      },
      {
        "lat": 22.591421,
        "lng": 120.284992,
        "ele": 2.5,
        "distanceKm": 2.7534317630295426,
        "gradePct": -0.1452550121179973,
        "smoothedEle": 3.0407133782523585,
        "gradeBand": "descent"
      },
      {
        "lat": 22.590995,
        "lng": 120.28531,
        "ele": 1.75,
        "distanceKm": 2.810961299753672,
        "gradePct": -0.22901804016230187,
        "smoothedEle": 2.8101364200681074,
        "gradeBand": "descent"
      },
      {
        "lat": 22.590633,
        "lng": 120.285553,
        "ele": 1.5,
        "distanceKm": 2.858317767410168,
        "gradePct": -0.20368338526380916,
        "smoothedEle": 2.844719117751361,
        "gradeBand": "descent"
      },
      {
        "lat": 22.590316,
        "lng": 120.285798,
        "ele": 1.75,
        "distanceKm": 2.901620565890557,
        "gradePct": -0.0523107438863168,
        "smoothedEle": 3.0886950429608255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.590018673547146,
        "lng": 120.28603255187123,
        "ele": 1.9198406358630038,
        "distanceKm": 2.942521554509213,
        "gradePct": 0.15408106783987194,
        "smoothedEle": 3.3810101162259323,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.589742,
        "lng": 120.286298,
        "ele": 2.25,
        "distanceKm": 2.9836206841516963,
        "gradePct": 0.3519659900962758,
        "smoothedEle": 3.6236489103665988,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.589529,
        "lng": 120.286551,
        "ele": 2.25,
        "distanceKm": 3.0187719060779465,
        "gradePct": 0.47800919829415434,
        "smoothedEle": 3.771858617015738,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.589327,
        "lng": 120.286897,
        "ele": 4,
        "distanceKm": 3.0607994787014703,
        "gradePct": 0.5250108086831009,
        "smoothedEle": 3.9087231526435917,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.589073,
        "lng": 120.287238,
        "ele": 6.75,
        "distanceKm": 3.105780580495441,
        "gradePct": 0.45093391726542165,
        "smoothedEle": 4.020294065296158,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.588752,
        "lng": 120.287551,
        "ele": 7.75,
        "distanceKm": 3.1538079875766347,
        "gradePct": 0.3609086692021772,
        "smoothedEle": 4.1694596809925155,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.588458,
        "lng": 120.287961,
        "ele": 6.25,
        "distanceKm": 3.2071044545263567,
        "gradePct": 0.25295727771843857,
        "smoothedEle": 4.228579162200789,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.588128428539164,
        "lng": 120.28820248765567,
        "ele": 4.608172895953574,
        "distanceKm": 3.2513497259473656,
        "gradePct": 0.09873245451441628,
        "smoothedEle": 4.075414549386238,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.58777357536575,
        "lng": 120.28840545840069,
        "ele": 3.4874695627048653,
        "distanceKm": 3.2959720683182954,
        "gradePct": -0.09941576141323374,
        "smoothedEle": 3.797133555145626,
        "gradeBand": "descent"
      },
      {
        "lat": 22.587419,
        "lng": 120.288609,
        "ele": 2.75,
        "distanceKm": 3.3405945381458193,
        "gradePct": -0.3708540253099143,
        "smoothedEle": 3.3867127228070917,
        "gradeBand": "descent"
      },
      {
        "lat": 22.58707,
        "lng": 120.288819,
        "ele": 3.25,
        "distanceKm": 3.384988420094431,
        "gradePct": -0.6852580644699102,
        "smoothedEle": 2.833530666355048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.586626,
        "lng": 120.289063,
        "ele": 2.25,
        "distanceKm": 3.440350757255084,
        "gradePct": -0.9464651084252815,
        "smoothedEle": 2.2205596505754848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.58627962674283,
        "lng": 120.28927892097354,
        "ele": 0.22438701932333174,
        "distanceKm": 3.484789696534516,
        "gradePct": -0.9367228698490979,
        "smoothedEle": 1.9934251123398847,
        "gradeBand": "descent"
      },
      {
        "lat": 22.585885,
        "lng": 120.289352,
        "ele": -0.75,
        "distanceKm": 3.5293070497768975,
        "gradePct": -0.7477835115681397,
        "smoothedEle": 1.994963807213729,
        "gradeBand": "descent"
      },
      {
        "lat": 22.585429,
        "lng": 120.289407,
        "ele": 0,
        "distanceKm": 3.580325455803483,
        "gradePct": -0.35442893182943347,
        "smoothedEle": 2.1827769391764056,
        "gradeBand": "descent"
      },
      {
        "lat": 22.584822,
        "lng": 120.289641,
        "ele": 1.5,
        "distanceKm": 3.6519689697380437,
        "gradePct": 0.007857378660308882,
        "smoothedEle": 2.176891862537701,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.584436,
        "lng": 120.289862,
        "ele": 3.25,
        "distanceKm": 3.70051849327622,
        "gradePct": 0.1976030363853532,
        "smoothedEle": 2.3891748342082013,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.5840605,
        "lng": 120.29012399999999,
        "ele": 4.374999999999995,
        "distanceKm": 3.750186747025048,
        "gradePct": 0.38124345940731696,
        "smoothedEle": 2.834314776476433,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.583685,
        "lng": 120.290386,
        "ele": 5.5,
        "distanceKm": 3.7998550404853693,
        "gradePct": 0.6255746591558676,
        "smoothedEle": 3.4323220215111077,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.583321,
        "lng": 120.290658,
        "ele": 2.5,
        "distanceKm": 3.84902903778805,
        "gradePct": 0.8194454705374946,
        "smoothedEle": 3.8160243010475345,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.582917160177367,
        "lng": 120.29089281651726,
        "ele": 3.758623879511138,
        "distanceKm": 3.8999964118874004,
        "gradePct": 0.8005062205591837,
        "smoothedEle": 3.9879044725183124,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.582512,
        "lng": 120.291125,
        "ele": 5.5,
        "distanceKm": 3.950966229771481,
        "gradePct": 0.7327172536787994,
        "smoothedEle": 4.3091342716657355,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.582187,
        "lng": 120.291247,
        "ele": 5,
        "distanceKm": 3.9892138042254603,
        "gradePct": 0.5325931373509443,
        "smoothedEle": 4.36938759916036,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.582512,
        "lng": 120.291125,
        "ele": 5.5,
        "distanceKm": 4.0274613786794395,
        "gradePct": 0.3305935343681227,
        "smoothedEle": 4.308919987789759,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.582861,
        "lng": 120.290925,
        "ele": 4.000000000000008,
        "distanceKm": 4.071366155674222,
        "gradePct": 0.07634540885226654,
        "smoothedEle": 4.044043850519851,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.58321,
        "lng": 120.290725,
        "ele": 2.5,
        "distanceKm": 4.115270908340377,
        "gradePct": -0.08996276111407468,
        "smoothedEle": 3.9042442231782593,
        "gradeBand": "descent"
      },
      {
        "lat": 22.583685,
        "lng": 120.290386,
        "ele": 5.5,
        "distanceKm": 4.178524949326445,
        "gradePct": -0.4496925269239864,
        "smoothedEle": 3.453163854651157,
        "gradeBand": "descent"
      },
      {
        "lat": 22.5840605,
        "lng": 120.29012399999999,
        "ele": 4.375,
        "distanceKm": 4.228193242786767,
        "gradePct": -0.7252804687223579,
        "smoothedEle": 2.8539437372282412,
        "gradeBand": "descent"
      },
      {
        "lat": 22.584436,
        "lng": 120.289862,
        "ele": 3.25,
        "distanceKm": 4.2778614965355946,
        "gradePct": -0.807659553759588,
        "smoothedEle": 2.4080425576623097,
        "gradeBand": "descent"
      },
      {
        "lat": 22.584822,
        "lng": 120.289641,
        "ele": 1.5,
        "distanceKm": 4.326411020073771,
        "gradePct": -0.8151046817745219,
        "smoothedEle": 2.1945919398126077,
        "gradeBand": "descent"
      },
      {
        "lat": 22.585189,
        "lng": 120.289476,
        "ele": 0.5,
        "distanceKm": 4.370595975372622,
        "gradePct": -0.6522160603806458,
        "smoothedEle": 2.205275227987268,
        "gradeBand": "descent"
      },
      {
        "lat": 22.58553360689754,
        "lng": 120.28939438293999,
        "ele": -0.17205081831686267,
        "distanceKm": 4.409820061440581,
        "gradePct": -0.464125697553953,
        "smoothedEle": 2.1473544753782265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.585885,
        "lng": 120.289352,
        "ele": -0.75,
        "distanceKm": 4.4491347892761475,
        "gradePct": -0.33656422591075497,
        "smoothedEle": 1.9928106833369439,
        "gradeBand": "descent"
      },
      {
        "lat": 22.58629,
        "lng": 120.289277,
        "ele": 0.25,
        "distanceKm": 4.494822336741019,
        "gradePct": -0.16331196984601068,
        "smoothedEle": 2.0068493625531656,
        "gradeBand": "descent"
      },
      {
        "lat": 22.586626,
        "lng": 120.289063,
        "ele": 2.25,
        "distanceKm": 4.538165088264632,
        "gradePct": 0.0038339456303051436,
        "smoothedEle": 2.205101796100867,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.58707,
        "lng": 120.288819,
        "ele": 3.25,
        "distanceKm": 4.593527425425285,
        "gradePct": 0.33712590550965,
        "smoothedEle": 2.845665017513814,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.587419,
        "lng": 120.288609,
        "ele": 2.75,
        "distanceKm": 4.637921307373897,
        "gradePct": 0.6822535805869921,
        "smoothedEle": 3.4013973564538382,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.587875100308217,
        "lng": 120.28834717869162,
        "ele": 3.69862792890482,
        "distanceKm": 4.695320446069402,
        "gradePct": 0.9526195356194667,
        "smoothedEle": 3.914366816752416,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.588332,
        "lng": 120.288087,
        "ele": 5.75,
        "distanceKm": 4.752719424032995,
        "gradePct": 0.9055856104458863,
        "smoothedEle": 4.184672197436457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.588752,
        "lng": 120.287551,
        "ele": 7.75,
        "distanceKm": 4.824894201473786,
        "gradePct": 0.461459434043295,
        "smoothedEle": 4.161240059228535,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.589073,
        "lng": 120.287238,
        "ele": 6.75,
        "distanceKm": 4.87292160855498,
        "gradePct": 0.14658268262637728,
        "smoothedEle": 4.007356363130233,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.589327,
        "lng": 120.286897,
        "ele": 4,
        "distanceKm": 4.91790271034895,
        "gradePct": -0.05819546022367178,
        "smoothedEle": 3.9043211268188034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.589529,
        "lng": 120.286551,
        "ele": 2.25,
        "distanceKm": 4.959930282972474,
        "gradePct": -0.21425933487328688,
        "smoothedEle": 3.7538124627187264,
        "gradeBand": "descent"
      },
      {
        "lat": 22.589742,
        "lng": 120.286298,
        "ele": 2,
        "distanceKm": 4.995081504898724,
        "gradePct": -0.3026794254422196,
        "smoothedEle": 3.5655601467664657,
        "gradeBand": "descent"
      },
      {
        "lat": 22.590161,
        "lng": 120.285896,
        "ele": 1.75,
        "distanceKm": 5.057322841612082,
        "gradePct": -0.4732049274438899,
        "smoothedEle": 3.110926218945781,
        "gradeBand": "descent"
      },
      {
        "lat": 22.590633,
        "lng": 120.285553,
        "ele": 1.5,
        "distanceKm": 5.120525507457443,
        "gradePct": -0.6625260721014529,
        "smoothedEle": 2.5698762515024223,
        "gradeBand": "descent"
      },
      {
        "lat": 22.590995,
        "lng": 120.28531,
        "ele": 1.75,
        "distanceKm": 5.167881975113938,
        "gradePct": -0.6734703810580119,
        "smoothedEle": 2.364286425345109,
        "gradeBand": "descent"
      },
      {
        "lat": 22.591421,
        "lng": 120.284992,
        "ele": 2.25,
        "distanceKm": 5.225411511838067,
        "gradePct": -0.5008418829875316,
        "smoothedEle": 2.3423347026432384,
        "gradeBand": "descent"
      },
      {
        "lat": 22.591808,
        "lng": 120.284681,
        "ele": 2.75,
        "distanceKm": 5.278995082170914,
        "gradePct": -0.2883686887039054,
        "smoothedEle": 2.3486624101455034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.592208,
        "lng": 120.284336,
        "ele": 3,
        "distanceKm": 5.335852511853547,
        "gradePct": -0.09799901682166903,
        "smoothedEle": 2.3073387075188276,
        "gradeBand": "descent"
      },
      {
        "lat": 22.592469,
        "lng": 120.284113,
        "ele": 3.5,
        "distanceKm": 5.3728172412583,
        "gradePct": -0.028678269478426645,
        "smoothedEle": 2.3050467216692265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.592835,
        "lng": 120.283876,
        "ele": 3,
        "distanceKm": 5.420233163907683,
        "gradePct": 0.00701966807539866,
        "smoothedEle": 2.358349956979623,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.593182816284617,
        "lng": 120.28359035377592,
        "ele": 2.439909364546631,
        "distanceKm": 5.468769146864852,
        "gradePct": 0.059314400324094796,
        "smoothedEle": 2.4660836255739715,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.593530376605266,
        "lng": 120.28330434338423,
        "ele": 1.8675001093866346,
        "distanceKm": 5.517305016318429,
        "gradePct": 0.2248196326999996,
        "smoothedEle": 2.770458202226431,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.593877,
        "lng": 120.283017,
        "ele": 1.25,
        "distanceKm": 5.565840976856186,
        "gradePct": 0.4765716541499417,
        "smoothedEle": 3.258622590941427,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.594197,
        "lng": 120.282781,
        "ele": 1.5,
        "distanceKm": 5.608888664886884,
        "gradePct": 0.666340085996257,
        "smoothedEle": 3.678277060656761,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.594555,
        "lng": 120.2825395,
        "ele": 2.375,
        "distanceKm": 5.655785723932604,
        "gradePct": 0.8046432454659864,
        "smoothedEle": 4.046551254742347,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.594913,
        "lng": 120.282298,
        "ele": 3.25,
        "distanceKm": 5.702682748897973,
        "gradePct": 0.8291690793462458,
        "smoothedEle": 4.337098272352546,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.595301,
        "lng": 120.281964,
        "ele": 6.25,
        "distanceKm": 5.757792431385803,
        "gradePct": 0.8085590109191967,
        "smoothedEle": 4.794790050844656,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.595568,
        "lng": 120.281706,
        "ele": 8.25,
        "distanceKm": 5.797578894890233,
        "gradePct": 0.8148218232268656,
        "smoothedEle": 5.197666341599332,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.596066,
        "lng": 120.281338,
        "ele": 7.75,
        "distanceKm": 5.864613502331469,
        "gradePct": 0.9255612334037864,
        "smoothedEle": 5.952365563682933,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.596532,
        "lng": 120.281049,
        "ele": 6,
        "distanceKm": 5.924322900303652,
        "gradePct": 0.9639652631085803,
        "smoothedEle": 6.44475255919727,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.597114,
        "lng": 120.280786,
        "ele": 6.5,
        "distanceKm": 5.994444658815863,
        "gradePct": 0.8177458294816772,
        "smoothedEle": 6.801420839408591,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.597689,
        "lng": 120.280497,
        "ele": 7.25,
        "distanceKm": 6.064929891801529,
        "gradePct": 0.3688291222746246,
        "smoothedEle": 6.692632879263975,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.598135414323295,
        "lng": 120.28028897767516,
        "ele": 6.453790799850044,
        "distanceKm": 6.118967661161439,
        "gradePct": 0.02994357556226077,
        "smoothedEle": 6.460478318630593,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.598577,
        "lng": 120.280069,
        "ele": 6,
        "distanceKm": 6.173013808969817,
        "gradePct": -0.21229427428918404,
        "smoothedEle": 6.267826120417011,
        "gradeBand": "descent"
      },
      {
        "lat": 22.598928,
        "lng": 120.279786,
        "ele": 6.5,
        "distanceKm": 6.221668926525574,
        "gradePct": -0.28883493086549117,
        "smoothedEle": 6.18173263674125,
        "gradeBand": "descent"
      },
      {
        "lat": 22.59921,
        "lng": 120.279494,
        "ele": 6.75,
        "distanceKm": 6.265048826408233,
        "gradePct": -0.30393380930510333,
        "smoothedEle": 6.084254299307834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.59944,
        "lng": 120.279205,
        "ele": 6.25,
        "distanceKm": 6.304218400242352,
        "gradePct": -0.29587902376901515,
        "smoothedEle": 5.932085362377736,
        "gradeBand": "descent"
      },
      {
        "lat": 22.599670469162213,
        "lng": 120.27885169837222,
        "ele": 5.616842960954625,
        "distanceKm": 6.3486275328421815,
        "gradePct": -0.28965827250426224,
        "smoothedEle": 5.77543657932539,
        "gradeBand": "descent"
      },
      {
        "lat": 22.599903,
        "lng": 120.2785,
        "ele": 5,
        "distanceKm": 6.393035388182821,
        "gradePct": -0.24934252128367332,
        "smoothedEle": 5.733713612256505,
        "gradeBand": "descent"
      },
      {
        "lat": 22.60017876410263,
        "lng": 120.2781956024343,
        "ele": 5.147908557386808,
        "distanceKm": 6.436815715218339,
        "gradePct": -0.18188732716507455,
        "smoothedEle": 5.783921855467059,
        "gradeBand": "descent"
      },
      {
        "lat": 22.600471,
        "lng": 120.277909,
        "ele": 5.5,
        "distanceKm": 6.480651353130837,
        "gradePct": -0.0839417727917308,
        "smoothedEle": 5.855756872275039,
        "gradeBand": "descent"
      },
      {
        "lat": 22.600817,
        "lng": 120.27764,
        "ele": 5,
        "distanceKm": 6.528009224349431,
        "gradePct": 0.038840002462696664,
        "smoothedEle": 5.925845609676503,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.601158004171605,
        "lng": 120.27738063844784,
        "ele": 5.3510310197031865,
        "distanceKm": 6.574341299274188,
        "gradePct": 0.15449252753445583,
        "smoothedEle": 6.060262516107007,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.601488002781068,
        "lng": 120.27710409229856,
        "ele": 5.984020679802124,
        "distanceKm": 6.620735258588305,
        "gradePct": 0.2652657861666412,
        "smoothedEle": 6.296012006000032,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.601818001390534,
        "lng": 120.27682754614928,
        "ele": 6.6170103399010625,
        "distanceKm": 6.667129176251995,
        "gradePct": 0.39958040788824,
        "smoothedEle": 6.6327584165174525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.602148,
        "lng": 120.276551,
        "ele": 7.25,
        "distanceKm": 6.713523052264432,
        "gradePct": 0.5566941625184616,
        "smoothedEle": 7.017794678997488,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.602489566402895,
        "lng": 120.27627372844941,
        "ele": 7.450921413468443,
        "distanceKm": 6.760985395921667,
        "gradePct": 0.7283098685942487,
        "smoothedEle": 7.47813459923196,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.60283066279806,
        "lng": 120.27599577849415,
        "ele": 7.82643090970488,
        "distanceKm": 6.80844771921951,
        "gradePct": 0.8319426662793783,
        "smoothedEle": 7.897458581852966,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.603171619537818,
        "lng": 120.27571762691994,
        "ele": 8.259076148742901,
        "distanceKm": 6.8559100398365915,
        "gradePct": 0.7966219583835344,
        "smoothedEle": 8.144569160419508,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.60351319666692,
        "lng": 120.27544036870181,
        "ele": 8.727417733433857,
        "distanceKm": 6.903372390236704,
        "gradePct": 0.6271819556992209,
        "smoothedEle": 8.187915295703185,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.603854,
        "lng": 120.275162,
        "ele": 9.5,
        "distanceKm": 6.95083441706147,
        "gradePct": 0.3501344328458195,
        "smoothedEle": 8.079948554383325,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.604154,
        "lng": 120.274849,
        "ele": 10.5,
        "distanceKm": 6.9971503109868,
        "gradePct": 0.0671963614628725,
        "smoothedEle": 7.932040046410529,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.604562,
        "lng": 120.274505,
        "ele": 9,
        "distanceKm": 7.054641222534804,
        "gradePct": -0.12826507748758276,
        "smoothedEle": 7.881432961461168,
        "gradeBand": "descent"
      },
      {
        "lat": 22.60493116004663,
        "lng": 120.27428353510714,
        "ele": 7.405649825134297,
        "distanceKm": 7.101564966300135,
        "gradePct": -0.16775121173743632,
        "smoothedEle": 7.850762198761679,
        "gradeBand": "descent"
      },
      {
        "lat": 22.605306,
        "lng": 120.274073,
        "ele": 6,
        "distanceKm": 7.148515258750732,
        "gradePct": -0.17853534906583132,
        "smoothedEle": 7.72815348357242,
        "gradeBand": "descent"
      },
      {
        "lat": 22.605795,
        "lng": 120.273923,
        "ele": 5.25,
        "distanceKm": 7.2050278091409075,
        "gradePct": -0.30086306425876924,
        "smoothedEle": 7.3233796528493675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.606168758101262,
        "lng": 120.27367312497482,
        "ele": 6.417338865918755,
        "distanceKm": 7.253866008117944,
        "gradePct": -0.47864615236152774,
        "smoothedEle": 6.924823048803077,
        "gradeBand": "descent"
      },
      {
        "lat": 22.606541,
        "lng": 120.273418,
        "ele": 8,
        "distanceKm": 7.3028467992046675,
        "gradePct": -0.6431358369631076,
        "smoothedEle": 6.561143072086847,
        "gradeBand": "descent"
      },
      {
        "lat": 22.606972,
        "lng": 120.273114,
        "ele": 7.25,
        "distanceKm": 7.360036214134765,
        "gradePct": -0.764943966131572,
        "smoothedEle": 6.1157461602680385,
        "gradeBand": "descent"
      },
      {
        "lat": 22.607504,
        "lng": 120.272729,
        "ele": 5.5,
        "distanceKm": 7.43117894592253,
        "gradePct": -0.7105374093735558,
        "smoothedEle": 5.6888917991020485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.607809963216855,
        "lng": 120.27250744042918,
        "ele": 5.965461283247067,
        "distanceKm": 7.472102349882085,
        "gradePct": -0.6321104602103297,
        "smoothedEle": 5.525198183263827,
        "gradeBand": "descent"
      },
      {
        "lat": 22.608116,
        "lng": 120.272286,
        "ele": 6.25,
        "distanceKm": 7.513025732181463,
        "gradePct": -0.564959388309318,
        "smoothedEle": 5.351949742318529,
        "gradeBand": "descent"
      },
      {
        "lat": 22.60844053259835,
        "lng": 120.27205705420022,
        "ele": 5.4791387212551825,
        "distanceKm": 7.556090143895541,
        "gradePct": -0.5237265878929236,
        "smoothedEle": 5.099025376141011,
        "gradeBand": "descent"
      },
      {
        "lat": 22.608765,
        "lng": 120.271828,
        "ele": 3.25,
        "distanceKm": 7.599154524984888,
        "gradePct": -0.5249515600556585,
        "smoothedEle": 4.831134291023566,
        "gradeBand": "descent"
      },
      {
        "lat": 22.609191,
        "lng": 120.27153,
        "ele": 3.25,
        "distanceKm": 7.655542085514148,
        "gradePct": -0.50536707179474,
        "smoothedEle": 4.580705097146093,
        "gradeBand": "descent"
      },
      {
        "lat": 22.609617,
        "lng": 120.271232,
        "ele": 3.25,
        "distanceKm": 7.711929594661344,
        "gradePct": -0.39085397712914294,
        "smoothedEle": 4.574882267555145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.610004,
        "lng": 120.271045,
        "ele": 4.5,
        "distanceKm": 7.759049213813217,
        "gradePct": -0.30564698920325845,
        "smoothedEle": 4.469323877850719,
        "gradeBand": "descent"
      },
      {
        "lat": 22.610343,
        "lng": 120.270975,
        "ele": 4.5,
        "distanceKm": 7.797423075228487,
        "gradePct": -0.2538989768958333,
        "smoothedEle": 4.334107186419453,
        "gradeBand": "descent"
      },
      {
        "lat": 22.61068328437743,
        "lng": 120.27078680494311,
        "ele": 4.614630797350125,
        "distanceKm": 7.839907117428842,
        "gradePct": -0.18530944533684474,
        "smoothedEle": 4.279524437478541,
        "gradeBand": "descent"
      },
      {
        "lat": 22.611019,
        "lng": 120.270587,
        "ele": 4.75,
        "distanceKm": 7.882500179162523,
        "gradePct": -0.08599985034687833,
        "smoothedEle": 4.40592158160069,
        "gradeBand": "descent"
      },
      {
        "lat": 22.611393703462397,
        "lng": 120.27034681539622,
        "ele": 5.5219002326219195,
        "distanceKm": 7.930913308455243,
        "gradePct": 0.030517451551752978,
        "smoothedEle": 4.593389444527528,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.611748,
        "lng": 120.270071,
        "ele": 5.75,
        "distanceKm": 7.979427304980179,
        "gradePct": 0.2282819640095102,
        "smoothedEle": 4.854082207901305,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 7.979427304980179,
      "elevationGainM": 11.912380489689465,
      "elevationLossM": 12.488446553033404,
      "minimumElevationM": -0.75,
      "maximumElevationM": 10.5,
      "maximumSustainedGradePct": 0.9639652631085803
    },
    "climbs": []
  }
});
})(typeof window !== "undefined" ? window : globalThis);
