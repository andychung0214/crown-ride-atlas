"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("kaohsiung", {
  "kaohsiung-qimei": {
    "routeId": "kaohsiung-qimei",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T15:15:44.303Z",
      "reviewStatus": "approved",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "旗山、美濃至十八羅漢山以平緩台28與荖濃溪谷為主，預設100公尺分析為爬升484公尺、最大持續坡度16.5%，局部尖峰偏高。比較500/200、750/300、1000/500公尺後，爬升依序為291、252、239公尺，最大持續坡度依序為10.0%、8.0%、7.1%；茂林國家風景區自行車路線資料公布相關旗美六龜路線總爬升381公尺，本路線較短且原路折返，500/200所得291公尺尺度合理並保留新威與十八羅漢山短坡，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://theme.maolin-nsa.gov.tw/bike/zh-tw/bike-route/1",
        "referenceLabel": "茂林國家風景區騎遊茂林路線總爬升381公尺資料"
      },
      "reviewedAt": "2026-07-29T15:32:00.000Z",
      "reviewerNote": "初版美濃湖研究點導入footway 31與8公尺往返、龍肚研究點導入service 1046公尺往返、新威研究點導入service 935與177公尺往返，均未採用；美濃湖移到民權路，刪除偏離台28的龍肚點，並以現行台28與台27甲primary節點加密新威銜接。最終raw無footway、path、steps、track、private、access禁制或bicycle=no；2303公尺oneway=yes全順向，精確為1640公尺primary asphalt class5 ncn、464公尺tertiary asphalt class1、190公尺primary asphalt class4 ncn及9公尺primary asphalt class4，沒有reversedirection=yes與oneway=yes同段。raw仍有兩項經核准的BRouter資料快照分類差異：22.891887,120.628252起621公尺 `highway=service` 與22.891582,120.624810起386公尺 `reversedirection=yes highway=service`，兩段均無surface、access、private、bicycle或oneway標記，故不據此猜測鋪面；其折線位於現行OpenStreetMap台28／台27甲新威省道銜接，對應ways 260286147、1337383115、881515396，皆為highway=primary且ref=28或27甲（https://www.openstreetmap.org/way/260286147；https://www.openstreetmap.org/way/1337383115；https://www.openstreetmap.org/way/881515396），判定為BRouter舊快照分類差異。500/200公尺分析為55.9公里、爬升291公尺、最大10.0%，三組比較已記於elevationAnalysis。旗美六龜正式道路系統：https://thbwcs.thb.gov.tw/cp.aspx?n=5667；省道工程與活動管制仍須出發前查核。"
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
        "name": "新威台27甲南側主線",
        "lat": 22.8922612,
        "lng": 120.624978,
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
        "role": "via"
      },
      {
        "name": "旗山車站外公共道路",
        "lat": 22.88462,
        "lng": 120.48197,
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
        "gradePct": 0.5536985568070949,
        "smoothedEle": 51.90858825192855,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904996,
        "lng": 120.550709,
        "ele": 52.75,
        "distanceKm": 8.081073951090778,
        "gradePct": 0.4349311350798072,
        "smoothedEle": 51.94845416144221,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.905385,
        "lng": 120.550892,
        "ele": 52,
        "distanceKm": 8.128215551681663,
        "gradePct": 0.364448138496076,
        "smoothedEle": 52.126460661955434,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.905734,
        "lng": 120.550922,
        "ele": 51.5,
        "distanceKm": 8.167144099924123,
        "gradePct": 0.3190707348623644,
        "smoothedEle": 52.27153006304688,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906084473745377,
        "lng": 120.55087477540809,
        "ele": 51,
        "distanceKm": 8.206414096442858,
        "gradePct": 0.3020186694887254,
        "smoothedEle": 52.40989655906435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906438,
        "lng": 120.5509,
        "ele": 51,
        "distanceKm": 8.24580929076845,
        "gradePct": 0.31345351195795357,
        "smoothedEle": 52.54009652503579,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906845,
        "lng": 120.551163,
        "ele": 51.75,
        "distanceKm": 8.298476199065913,
        "gradePct": 0.3440552187406011,
        "smoothedEle": 52.70227541960598,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907483,
        "lng": 120.551383,
        "ele": 53.75,
        "distanceKm": 8.372911406387013,
        "gradePct": 0.2585958808920746,
        "smoothedEle": 52.80904273283896,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907950135244302,
        "lng": 120.55135644910946,
        "ele": 54.047864771494396,
        "distanceKm": 8.424925688117009,
        "gradePct": 0.23051978352791463,
        "smoothedEle": 52.932116395625435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908417067622153,
        "lng": 120.55132572455473,
        "ele": 54.1489323857472,
        "distanceKm": 8.476941554494182,
        "gradePct": 0.23525078132529925,
        "smoothedEle": 53.10646466272797,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908884,
        "lng": 120.551295,
        "ele": 54.25,
        "distanceKm": 8.528957420215274,
        "gradePct": 0.26615077002447146,
        "smoothedEle": 53.278298179804665,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909184,
        "lng": 120.551394,
        "ele": 53.5,
        "distanceKm": 8.563823036056592,
        "gradePct": 0.27601136296357,
        "smoothedEle": 53.348029411487296,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909636,
        "lng": 120.551576,
        "ele": 53,
        "distanceKm": 8.617428816217737,
        "gradePct": 0.23961703514464444,
        "smoothedEle": 53.39361173237085,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9100545,
        "lng": 120.5517375,
        "ele": 52.875,
        "distanceKm": 8.666816456115242,
        "gradePct": 0.17128845069728688,
        "smoothedEle": 53.41510397008517,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910473,
        "lng": 120.551899,
        "ele": 52.75,
        "distanceKm": 8.716204078910094,
        "gradePct": 0.07469429891731165,
        "smoothedEle": 53.38555633415693,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910831506828167,
        "lng": 120.55188258841031,
        "ele": 52.75,
        "distanceKm": 8.75610369800809,
        "gradePct": -0.00942549062569501,
        "smoothedEle": 53.31373975413891,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911191,
        "lng": 120.551835,
        "ele": 52.75,
        "distanceKm": 8.79637363407443,
        "gradePct": -0.08674274437104788,
        "smoothedEle": 53.20222250142348,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9112365,
        "lng": 120.55237,
        "ele": 53.5,
        "distanceKm": 8.851402912325915,
        "gradePct": -0.16176155775047418,
        "smoothedEle": 53.084873274553516,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911282,
        "lng": 120.552905,
        "ele": 54.25,
        "distanceKm": 8.906432172263738,
        "gradePct": -0.20648305325111313,
        "smoothedEle": 52.97843656573643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911331906801227,
        "lng": 120.5534031606159,
        "ele": 53.56945271052725,
        "distanceKm": 8.957756045447791,
        "gradePct": -0.19286145043897984,
        "smoothedEle": 52.92344110109925,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911384742052,
        "lng": 120.55390096438337,
        "ele": 53.019835683911055,
        "distanceKm": 9.009079818962528,
        "gradePct": -0.12064159480810631,
        "smoothedEle": 52.93384353624083,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911437910129745,
        "lng": 120.55439872759398,
        "ele": 52.485099269819884,
        "distanceKm": 9.060403695928414,
        "gradePct": -0.033294828036449904,
        "smoothedEle": 53.000874447713876,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911491078207487,
        "lng": 120.55489649080458,
        "ele": 51.95036285572869,
        "distanceKm": 9.111727553031967,
        "gradePct": 0.046675884278457314,
        "smoothedEle": 53.066114134204525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911547566503298,
        "lng": 120.55539381527802,
        "ele": 52.09496701224502,
        "distanceKm": 9.163050627195158,
        "gradePct": 0.07086168019868946,
        "smoothedEle": 53.06623758101721,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91160604433553,
        "lng": 120.55589087685202,
        "ele": 52.64664467483001,
        "distanceKm": 9.214374514400333,
        "gradePct": 0.07187685750585285,
        "smoothedEle": 53.08451232240751,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911664522167765,
        "lng": 120.556387938426,
        "ele": 53.19832233741499,
        "distanceKm": 9.265698379819607,
        "gradePct": 0.08662537855828875,
        "smoothedEle": 53.18085547680576,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911723,
        "lng": 120.556885,
        "ele": 53.75,
        "distanceKm": 9.317022223455814,
        "gradePct": 0.14350117625480557,
        "smoothedEle": 53.35312922192532,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911681,
        "lng": 120.556993,
        "ele": 54,
        "distanceKm": 9.329029314483194,
        "gradePct": 0.16836733443178592,
        "smoothedEle": 53.4028904188002,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91117632069767,
        "lng": 120.55717400444071,
        "ele": 54,
        "distanceKm": 9.388130131368074,
        "gradePct": 0.3186316762091981,
        "smoothedEle": 53.71243091668346,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910671,
        "lng": 120.557353,
        "ele": 54,
        "distanceKm": 9.44723454888395,
        "gradePct": 0.48588928634296197,
        "smoothedEle": 54.11797446763663,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910242,
        "lng": 120.55740925,
        "ele": 54.1875,
        "distanceKm": 9.495283891588288,
        "gradePct": 0.5413620604108741,
        "smoothedEle": 54.362886402273645,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909813,
        "lng": 120.5574655,
        "ele": 54.375,
        "distanceKm": 9.543333236478622,
        "gradePct": 0.5056622848637797,
        "smoothedEle": 54.489131772584614,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909384,
        "lng": 120.55752175,
        "ele": 54.5625,
        "distanceKm": 9.591382583554921,
        "gradePct": 0.3756742950804557,
        "smoothedEle": 54.486096129942894,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908955,
        "lng": 120.557578,
        "ele": 54.75,
        "distanceKm": 9.639431932817152,
        "gradePct": 0.17970553993756574,
        "smoothedEle": 54.42384808348712,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908846,
        "lng": 120.557622,
        "ele": 55.25,
        "distanceKm": 9.652362940688585,
        "gradePct": 0.13986686474019244,
        "smoothedEle": 54.42384808348712,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908719,
        "lng": 120.557765,
        "ele": 56,
        "distanceKm": 9.67270872876842,
        "gradePct": 0.08801468487782703,
        "smoothedEle": 54.423848083487115,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90845525,
        "lng": 120.5581075,
        "ele": 55.31249999999999,
        "distanceKm": 9.718433505054659,
        "gradePct": -0.0021663793452617675,
        "smoothedEle": 54.41937718927949,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9081915,
        "lng": 120.55845,
        "ele": 54.625000000000014,
        "distanceKm": 9.764158333695944,
        "gradePct": -0.047400092763986545,
        "smoothedEle": 54.39301590730285,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907927750000002,
        "lng": 120.5587925,
        "ele": 53.93750000000001,
        "distanceKm": 9.809883214694235,
        "gradePct": -0.05877614211307879,
        "smoothedEle": 54.344576233994545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907664,
        "lng": 120.559135,
        "ele": 53.25,
        "distanceKm": 9.85560814804814,
        "gradePct": -0.07489499324882258,
        "smoothedEle": 54.27405809698948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9073,
        "lng": 120.558778,
        "ele": 54,
        "distanceKm": 9.910154414336054,
        "gradePct": -0.16884277015087495,
        "smoothedEle": 54.08250116499388,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90699075,
        "lng": 120.55849425000001,
        "ele": 53.9375,
        "distanceKm": 9.955178288451252,
        "gradePct": -0.3200054216148669,
        "smoothedEle": 53.758182240497675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906681499999998,
        "lng": 120.5582105,
        "ele": 53.875,
        "distanceKm": 10.00020220535568,
        "gradePct": -0.4651041941571615,
        "smoothedEle": 53.424623639012346,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90637225,
        "lng": 120.55792675,
        "ele": 53.8125,
        "distanceKm": 10.045226165047609,
        "gradePct": -0.6023359915498844,
        "smoothedEle": 53.08539746800037,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906063,
        "lng": 120.557643,
        "ele": 53.75,
        "distanceKm": 10.09025016752621,
        "gradePct": -0.6822718720459011,
        "smoothedEle": 52.78785764894796,
        "gradeBand": "descent"
      },
      {
        "lat": 22.905736735952765,
        "lng": 120.55734996039749,
        "ele": 52.97476295633002,
        "distanceKm": 10.137335940108192,
        "gradePct": -0.6632384991459889,
        "smoothedEle": 52.560228416606506,
        "gradeBand": "descent"
      },
      {
        "lat": 22.905410471905526,
        "lng": 120.55705692079499,
        "ele": 52.199525912660064,
        "distanceKm": 10.184421758725808,
        "gradePct": -0.6317998830520559,
        "smoothedEle": 52.27793293081733,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90508420785829,
        "lng": 120.55676388119248,
        "ele": 51.424288868990075,
        "distanceKm": 10.23150762337975,
        "gradePct": -0.5934885420023924,
        "smoothedEle": 52.001780648034966,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904757943811056,
        "lng": 120.55647084158997,
        "ele": 50.64905182532009,
        "distanceKm": 10.278593534068841,
        "gradePct": -0.5782996164624221,
        "smoothedEle": 51.70829094131481,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90443187065711,
        "lng": 120.556177552906,
        "ele": 50.495035138774774,
        "distanceKm": 10.32567941131674,
        "gradePct": -0.6177037322086592,
        "smoothedEle": 51.381172723755526,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904106,
        "lng": 120.555884,
        "ele": 51,
        "distanceKm": 10.372765275994995,
        "gradePct": -0.6411673187533169,
        "smoothedEle": 51.06548286900026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9037875,
        "lng": 120.555635,
        "ele": 51,
        "distanceKm": 10.416408764890429,
        "gradePct": -0.6308669122942897,
        "smoothedEle": 50.828599603986326,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903469,
        "lng": 120.555386,
        "ele": 51,
        "distanceKm": 10.460052288789832,
        "gradePct": -0.5920067732544169,
        "smoothedEle": 50.63984624670935,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90316,
        "lng": 120.555131,
        "ele": 50.75,
        "distanceKm": 10.503212223882729,
        "gradePct": -0.5304716953083198,
        "smoothedEle": 50.47631490988817,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902673,
        "lng": 120.554771,
        "ele": 50.25,
        "distanceKm": 10.568726848661498,
        "gradePct": -0.3636386739686421,
        "smoothedEle": 50.36528138654963,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902323,
        "lng": 120.554449,
        "ele": 50.25,
        "distanceKm": 10.619741182540803,
        "gradePct": -0.24846746340987466,
        "smoothedEle": 50.317252343716895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9019,
        "lng": 120.554042,
        "ele": 50,
        "distanceKm": 10.682592619215619,
        "gradePct": -0.13839854106547428,
        "smoothedEle": 50.277644718093796,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901505,
        "lng": 120.553642,
        "ele": 49.5,
        "distanceKm": 10.742658015464052,
        "gradePct": -0.0617533672960564,
        "smoothedEle": 50.28595584675198,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901128500000002,
        "lng": 120.5533285,
        "ele": 49.87499999999999,
        "distanceKm": 10.795420196230717,
        "gradePct": 0.00695676463675812,
        "smoothedEle": 50.354063627491826,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900752,
        "lng": 120.553015,
        "ele": 50.25,
        "distanceKm": 10.848182431250772,
        "gradePct": 0.08561660928048939,
        "smoothedEle": 50.4705624981324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900397040454212,
        "lng": 120.5526846884874,
        "ele": 50.68851196960172,
        "distanceKm": 10.900169037015942,
        "gradePct": 0.1280149186885926,
        "smoothedEle": 50.536106569222866,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900057026969474,
        "lng": 120.55233412565826,
        "ele": 50.95900797973449,
        "distanceKm": 10.95231167865137,
        "gradePct": 0.1398853074673992,
        "smoothedEle": 50.578187841526365,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89971701348474,
        "lng": 120.55198356282914,
        "ele": 51.22950398986724,
        "distanceKm": 11.004454382275124,
        "gradePct": 0.11964864569437282,
        "smoothedEle": 50.61330837696172,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899377,
        "lng": 120.551633,
        "ele": 51.5,
        "distanceKm": 11.056597147888995,
        "gradePct": 0.04700779918028547,
        "smoothedEle": 50.57518726740198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899051,
        "lng": 120.5513265,
        "ele": 51.0625,
        "distanceKm": 11.104552361676403,
        "gradePct": -0.0047496781023248676,
        "smoothedEle": 50.53014473764003,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898725,
        "lng": 120.55102,
        "ele": 50.625,
        "distanceKm": 11.152507624863066,
        "gradePct": -0.023718935608158714,
        "smoothedEle": 50.530881949194786,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898399,
        "lng": 120.5507135,
        "ele": 50.1875,
        "distanceKm": 11.200462937446185,
        "gradePct": -0.02657741334996909,
        "smoothedEle": 50.55746512657427,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898073,
        "lng": 120.550407,
        "ele": 49.75,
        "distanceKm": 11.24841829942671,
        "gradePct": 0.012959144595367223,
        "smoothedEle": 50.60708503954941,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897779,
        "lng": 120.550115,
        "ele": 49.25,
        "distanceKm": 11.292728074680342,
        "gradePct": 0.07304547604758253,
        "smoothedEle": 50.687341798057325,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89762,
        "lng": 120.549714,
        "ele": 49.75,
        "distanceKm": 11.337447101824356,
        "gradePct": 0.1281261245150103,
        "smoothedEle": 50.78690267428213,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897278,
        "lng": 120.549305,
        "ele": 50.75,
        "distanceKm": 11.394027926747503,
        "gradePct": 0.20619855673391002,
        "smoothedEle": 50.966295105941036,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897095,
        "lng": 120.54891,
        "ele": 51.25,
        "distanceKm": 11.43931785969613,
        "gradePct": 0.24839285064021951,
        "smoothedEle": 51.094454420968674,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89699349209874,
        "lng": 120.54851655143862,
        "ele": 51.67633270038932,
        "distanceKm": 11.48117090506445,
        "gradePct": 0.27463956556920005,
        "smoothedEle": 51.21568782886767,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896904,
        "lng": 120.548119,
        "ele": 52.25,
        "distanceKm": 11.523091733483032,
        "gradePct": 0.3096790077169669,
        "smoothedEle": 51.37430040028514,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897156,
        "lng": 120.54789,
        "ele": 52.5,
        "distanceKm": 11.55963525965736,
        "gradePct": 0.34773514162486074,
        "smoothedEle": 51.55272165946578,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897389,
        "lng": 120.547603,
        "ele": 52.75,
        "distanceKm": 11.598820870890027,
        "gradePct": 0.3346715393811917,
        "smoothedEle": 51.649201031859064,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8975535,
        "lng": 120.547254,
        "ele": 52.250000000000014,
        "distanceKm": 11.638977894105457,
        "gradePct": 0.254613934918436,
        "smoothedEle": 51.602720272220026,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897718,
        "lng": 120.546905,
        "ele": 51.75,
        "distanceKm": 11.679134878728389,
        "gradePct": 0.11674134575674029,
        "smoothedEle": 51.44327287520096,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897875,
        "lng": 120.546529,
        "ele": 51.5,
        "distanceKm": 11.721421492694486,
        "gradePct": -0.10042331381190585,
        "smoothedEle": 51.16713421275873,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898106,
        "lng": 120.545937,
        "ele": 51.75,
        "distanceKm": 11.787277472179909,
        "gradePct": -0.5799762869672896,
        "smoothedEle": 50.46082731486193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898248,
        "lng": 120.545589,
        "ele": 51,
        "distanceKm": 11.826264551546817,
        "gradePct": -0.806541648543383,
        "smoothedEle": 50.004352354221666,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898386,
        "lng": 120.545233,
        "ele": 49.75,
        "distanceKm": 11.865827602806545,
        "gradePct": -0.9612057211734564,
        "smoothedEle": 49.573699327110205,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89873196599406,
        "lng": 120.54478616211287,
        "ele": 48.75228762375826,
        "distanceKm": 11.925617843501792,
        "gradePct": -1.0097690957669663,
        "smoothedEle": 49.10259006209468,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899109,
        "lng": 120.544367,
        "ele": 47,
        "distanceKm": 11.985627173413878,
        "gradePct": -0.8384876090018021,
        "smoothedEle": 48.801551589161775,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899272,
        "lng": 120.544057,
        "ele": 46.25,
        "distanceKm": 12.02218969111884,
        "gradePct": -0.6942770217920138,
        "smoothedEle": 48.66350826438848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899378579356647,
        "lng": 120.5436539868881,
        "ele": 46.69202622380238,
        "distanceKm": 12.065138485651868,
        "gradePct": -0.5659338075192564,
        "smoothedEle": 48.44933291279425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899482,
        "lng": 120.54325,
        "ele": 47.5,
        "distanceKm": 12.10808775668117,
        "gradePct": -0.47727533116725057,
        "smoothedEle": 48.2861653919236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899676,
        "lng": 120.542617,
        "ele": 48.75,
        "distanceKm": 12.1764212549659,
        "gradePct": -0.4042909712918089,
        "smoothedEle": 48.039151392576386,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899676,
        "lng": 120.542236,
        "ele": 49.25,
        "distanceKm": 12.215447667804428,
        "gradePct": -0.38985034494042875,
        "smoothedEle": 47.90926236735123,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89957,
        "lng": 120.541893,
        "ele": 49.75,
        "distanceKm": 12.252506077703964,
        "gradePct": -0.328369261473694,
        "smoothedEle": 47.85558918267262,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899676,
        "lng": 120.542236,
        "ele": 49.25,
        "distanceKm": 12.289564487603501,
        "gradePct": -0.22373171146298967,
        "smoothedEle": 47.90907326567833,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899689,
        "lng": 120.542501,
        "ele": 48.75,
        "distanceKm": 12.316747304476527,
        "gradePct": -0.1300954705599158,
        "smoothedEle": 47.9946716551448,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899676,
        "lng": 120.542617,
        "ele": 48.75,
        "distanceKm": 12.328716968223965,
        "gradePct": -0.08797086353462222,
        "smoothedEle": 48.03565256613301,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899482,
        "lng": 120.54325,
        "ele": 47.5,
        "distanceKm": 12.397050466508695,
        "gradePct": 0.14289857639390086,
        "smoothedEle": 48.25628970680929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899378579356647,
        "lng": 120.5436539868881,
        "ele": 46.69202622380238,
        "distanceKm": 12.439999737537997,
        "gradePct": 0.28792940429706804,
        "smoothedEle": 48.44956142644115,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899272,
        "lng": 120.544057,
        "ele": 46.25,
        "distanceKm": 12.482948532071026,
        "gradePct": 0.3797300965369046,
        "smoothedEle": 48.658985064316965,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899109,
        "lng": 120.544367,
        "ele": 47,
        "distanceKm": 12.519511049775987,
        "gradePct": 0.3963658217934608,
        "smoothedEle": 48.79686561968752,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898807363815987,
        "lng": 120.54470232958755,
        "ele": 48.4038918138854,
        "distanceKm": 12.567519196898047,
        "gradePct": 0.432401522617942,
        "smoothedEle": 49.02574134971707,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898507,
        "lng": 120.545039,
        "ele": 49.25,
        "distanceKm": 12.615527224914889,
        "gradePct": 0.49538069435805987,
        "smoothedEle": 49.33019650835328,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898254,
        "lng": 120.545575,
        "ele": 51,
        "distanceKm": 12.677218872156306,
        "gradePct": 0.6698432909320916,
        "smoothedEle": 49.97073311528224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898106,
        "lng": 120.545937,
        "ele": 51.75,
        "distanceKm": 12.717787347768347,
        "gradePct": 0.8275733370062207,
        "smoothedEle": 50.44551205780197,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897875,
        "lng": 120.546529,
        "ele": 51.5,
        "distanceKm": 12.78364332725377,
        "gradePct": 1.0055941351267315,
        "smoothedEle": 51.13918490659886,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897739,
        "lng": 120.546857,
        "ele": 51.5,
        "distanceKm": 12.820487822908788,
        "gradePct": 0.9969750721125514,
        "smoothedEle": 51.37565191705798,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897564648634535,
        "lng": 120.54723034727384,
        "ele": 52.216113572838616,
        "distanceKm": 12.86336428785877,
        "gradePct": 0.8672166308351835,
        "smoothedEle": 51.56131597234878,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897389,
        "lng": 120.547603,
        "ele": 52.75,
        "distanceKm": 12.906242865761941,
        "gradePct": 0.6895473587149563,
        "smoothedEle": 51.689499974292275,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897156,
        "lng": 120.54789,
        "ele": 52.5,
        "distanceKm": 12.945428476994607,
        "gradePct": 0.486215874088268,
        "smoothedEle": 51.70909277990861,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896904,
        "lng": 120.548119,
        "ele": 52.25,
        "distanceKm": 12.981972003168936,
        "gradePct": 0.31285914388429004,
        "smoothedEle": 51.74729883788761,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896446,
        "lng": 120.548331,
        "ele": 51.25,
        "distanceKm": 13.037336050805798,
        "gradePct": 0.21402088395949267,
        "smoothedEle": 51.87665003339495,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895928832988403,
        "lng": 120.5485672949178,
        "ele": 51,
        "distanceKm": 13.09972880159527,
        "gradePct": 0.2187764998600209,
        "smoothedEle": 52.10757940808189,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.895406,
        "lng": 120.548789,
        "ele": 51.25,
        "distanceKm": 13.162143571630194,
        "gradePct": 0.24062513736924002,
        "smoothedEle": 52.207818595231906,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.894836,
        "lng": 120.54903,
        "ele": 52.25,
        "distanceKm": 13.230162800005932,
        "gradePct": 0.21277190055570194,
        "smoothedEle": 52.285434428244685,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.894252,
        "lng": 120.54928,
        "ele": 53.5,
        "distanceKm": 13.299967868627178,
        "gradePct": 0.10840692411760992,
        "smoothedEle": 52.324777202055266,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893769333333335,
        "lng": 120.54938433333334,
        "ele": 53.33333333333333,
        "distanceKm": 13.354691793347166,
        "gradePct": 0.04259508290793705,
        "smoothedEle": 52.28104107779757,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89328666666667,
        "lng": 120.54948866666666,
        "ele": 53.16666666666667,
        "distanceKm": 13.409415725492066,
        "gradePct": -0.04309935436082683,
        "smoothedEle": 52.175561509899886,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892804,
        "lng": 120.549593,
        "ele": 53,
        "distanceKm": 13.464139665062321,
        "gradePct": -0.1180120023406208,
        "smoothedEle": 52.068560094828136,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892378333333333,
        "lng": 120.54972866666667,
        "ele": 52.000000000000014,
        "distanceKm": 13.513469737456502,
        "gradePct": -0.18309652156613218,
        "smoothedEle": 51.94779327694858,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89195266666667,
        "lng": 120.54986433333333,
        "ele": 50.999999999999986,
        "distanceKm": 13.56279982213248,
        "gradePct": -0.2591201226458227,
        "smoothedEle": 51.747172727228104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891527,
        "lng": 120.55,
        "ele": 50,
        "distanceKm": 13.61212991909083,
        "gradePct": -0.2859750971401784,
        "smoothedEle": 51.598304267952145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891134,
        "lng": 120.55014075,
        "ele": 50.375,
        "distanceKm": 13.65814668967521,
        "gradePct": -0.281656817794791,
        "smoothedEle": 51.51696449072435,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890741,
        "lng": 120.5502815,
        "ele": 50.75,
        "distanceKm": 13.704163473343524,
        "gradePct": -0.24308193205266182,
        "smoothedEle": 51.484412430356194,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890348,
        "lng": 120.55042225,
        "ele": 51.125,
        "distanceKm": 13.750180270094845,
        "gradePct": -0.10262448566301821,
        "smoothedEle": 51.59324621933683,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889955,
        "lng": 120.550563,
        "ele": 51.5,
        "distanceKm": 13.79619707992937,
        "gradePct": 0.07352581951925811,
        "smoothedEle": 51.79343805894469,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889580333333335,
        "lng": 120.55069566666667,
        "ele": 51.916666666666664,
        "distanceKm": 13.840018776668078,
        "gradePct": 0.2562342257747021,
        "smoothedEle": 52.06147605148979,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889205666666665,
        "lng": 120.55082833333333,
        "ele": 52.333333333333336,
        "distanceKm": 13.88384048504286,
        "gradePct": 0.4619935975015589,
        "smoothedEle": 52.42277601347876,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888831,
        "lng": 120.550961,
        "ele": 52.75,
        "distanceKm": 13.927662205053716,
        "gradePct": 0.6031294392340655,
        "smoothedEle": 52.74624788496195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888346,
        "lng": 120.551163,
        "ele": 54,
        "distanceKm": 13.98542549538763,
        "gradePct": 0.6315333059563053,
        "smoothedEle": 53.00964389687804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887927,
        "lng": 120.5513235,
        "ele": 54,
        "distanceKm": 14.034832226408836,
        "gradePct": 0.5338775884093377,
        "smoothedEle": 53.097507387764125,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887508,
        "lng": 120.551484,
        "ele": 54,
        "distanceKm": 14.084238974322988,
        "gradePct": 0.30447031130851093,
        "smoothedEle": 53.03465810149643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887085,
        "lng": 120.551786,
        "ele": 54.25,
        "distanceKm": 14.140536815799885,
        "gradePct": 0.08198613506842307,
        "smoothedEle": 52.96892735660879,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88676351349927,
        "lng": 120.55222590659393,
        "ele": 53.22666080386052,
        "distanceKm": 14.198058221318966,
        "gradePct": -0.06839277294562177,
        "smoothedEle": 52.89532402270383,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886449756749634,
        "lng": 120.55267245329696,
        "ele": 52.11333040193028,
        "distanceKm": 14.255588908154063,
        "gradePct": -0.19234395063888668,
        "smoothedEle": 52.68641534761771,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886136,
        "lng": 120.553119,
        "ele": 51,
        "distanceKm": 14.313119679072395,
        "gradePct": -0.2646172793160853,
        "smoothedEle": 52.471703773397834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8858805,
        "lng": 120.5534815,
        "ele": 51.50000000000001,
        "distanceKm": 14.35987615928369,
        "gradePct": -0.27075195597910195,
        "smoothedEle": 52.40267717596859,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885625,
        "lng": 120.553844,
        "ele": 52,
        "distanceKm": 14.406632695012394,
        "gradePct": -0.23423789269287892,
        "smoothedEle": 52.39571212479452,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885380964266805,
        "lng": 120.5542147314558,
        "ele": 52,
        "distanceKm": 14.453309349838541,
        "gradePct": -0.12685347584241358,
        "smoothedEle": 52.44098605666797,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885128,
        "lng": 120.554579,
        "ele": 52,
        "distanceKm": 14.500039755234829,
        "gradePct": 0.012338393834504345,
        "smoothedEle": 52.545196368555786,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884882962130032,
        "lng": 120.55496173605263,
        "ele": 52.1965412796724,
        "distanceKm": 14.547786002066719,
        "gradePct": 0.15221357635081442,
        "smoothedEle": 52.724953029241796,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884632,
        "lng": 120.55534,
        "ele": 53.5,
        "distanceKm": 14.595538758838163,
        "gradePct": 0.28422582102414495,
        "smoothedEle": 52.96581636646276,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884386,
        "lng": 120.55562,
        "ele": 54.25,
        "distanceKm": 14.635174785146457,
        "gradePct": 0.35194461115033115,
        "smoothedEle": 53.12728569270796,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8840286162788,
        "lng": 120.55597502085362,
        "ele": 53.954641552729456,
        "distanceKm": 14.68904455025893,
        "gradePct": 0.3979127213706604,
        "smoothedEle": 53.31650214941761,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88367122499836,
        "lng": 120.55633003202362,
        "ele": 53.72678193704738,
        "distanceKm": 14.742914330348581,
        "gradePct": 0.45358358327555404,
        "smoothedEle": 53.613779163814115,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883313816665574,
        "lng": 120.55668502134908,
        "ele": 53.651187958031585,
        "distanceKm": 14.796784063145004,
        "gradePct": 0.48678391058206394,
        "smoothedEle": 53.944457310896915,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882956408332785,
        "lng": 120.55704001067454,
        "ele": 53.57559397901579,
        "distanceKm": 14.85065386057967,
        "gradePct": 0.5202049372072413,
        "smoothedEle": 54.22206550544496,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882599,
        "lng": 120.557395,
        "ele": 53.5,
        "distanceKm": 14.90452372265113,
        "gradePct": 0.4977339683329891,
        "smoothedEle": 54.397390931433684,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882363,
        "lng": 120.557708,
        "ele": 54.5,
        "distanceKm": 14.945958216494498,
        "gradePct": 0.4445877385255253,
        "smoothedEle": 54.52163946773198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882165,
        "lng": 120.558011,
        "ele": 55,
        "distanceKm": 14.984014216306175,
        "gradePct": 0.3899891814756678,
        "smoothedEle": 54.64604825531114,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881935,
        "lng": 120.558538,
        "ele": 55.25,
        "distanceKm": 15.043753853821807,
        "gradePct": 0.34835782899011514,
        "smoothedEle": 54.883223234685204,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881629,
        "lng": 120.559083,
        "ele": 55.75,
        "distanceKm": 15.10913749884992,
        "gradePct": 0.3834342272573977,
        "smoothedEle": 55.1780945963332,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88137649886538,
        "lng": 120.55955631961737,
        "ele": 55.50997991005514,
        "distanceKm": 15.16516899061595,
        "gradePct": 0.45367605809761163,
        "smoothedEle": 55.491793484514076,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88112374003916,
        "lng": 120.56002946293555,
        "ele": 55.48120758563488,
        "distanceKm": 15.22119929901546,
        "gradePct": 0.4791880737412501,
        "smoothedEle": 55.75205454571658,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88087,
        "lng": 120.560502,
        "ele": 55.75,
        "distanceKm": 15.277230826024125,
        "gradePct": 0.4977293700121965,
        "smoothedEle": 56.02965857402438,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880721,
        "lng": 120.560888,
        "ele": 55.75,
        "distanceKm": 15.320105462667346,
        "gradePct": 0.5304954092091007,
        "smoothedEle": 56.30049084849394,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880562,
        "lng": 120.561323,
        "ele": 56.25,
        "distanceKm": 15.368048450434909,
        "gradePct": 0.5608880960405307,
        "smoothedEle": 56.626944781776224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88038185659044,
        "lng": 120.56178873141458,
        "ele": 56.44567943185046,
        "distanceKm": 15.419795045478132,
        "gradePct": 0.5767093963805173,
        "smoothedEle": 56.89895057381217,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880214,
        "lng": 120.56226,
        "ele": 57,
        "distanceKm": 15.471557009625421,
        "gradePct": 0.5488035856405544,
        "smoothedEle": 57.09915524444558,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880110178054963,
        "lng": 120.56267428778014,
        "ele": 57.892938504602135,
        "distanceKm": 15.51554130727355,
        "gradePct": 0.49119228625390393,
        "smoothedEle": 57.254044375817145,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88000658902748,
        "lng": 120.56308864389007,
        "ele": 58.57146925230107,
        "distanceKm": 15.559525601361706,
        "gradePct": 0.4305353252361372,
        "smoothedEle": 57.42998155216978,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879903,
        "lng": 120.563503,
        "ele": 59.25,
        "distanceKm": 15.603509926707204,
        "gradePct": 0.40908926275156227,
        "smoothedEle": 57.63152643065689,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879862,
        "lng": 120.563857,
        "ele": 58.25,
        "distanceKm": 15.640061409635157,
        "gradePct": 0.4170252387909074,
        "smoothedEle": 57.81138719511621,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879861,
        "lng": 120.564309,
        "ele": 57.5,
        "distanceKm": 15.686367355248617,
        "gradePct": 0.6111453518390761,
        "smoothedEle": 58.37360005064552,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879921,
        "lng": 120.5647,
        "ele": 57.25,
        "distanceKm": 15.726975731982721,
        "gradePct": 0.7499120991099089,
        "smoothedEle": 58.799606272873646,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879975,
        "lng": 120.5652925,
        "ele": 57.75000000000001,
        "distanceKm": 15.787971504966503,
        "gradePct": 0.8211795945980741,
        "smoothedEle": 59.20268549805938,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880029,
        "lng": 120.565885,
        "ele": 58.25,
        "distanceKm": 15.848967253925494,
        "gradePct": 0.7088826317970981,
        "smoothedEle": 59.337280693282395,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880107,
        "lng": 120.566605,
        "ele": 62.5,
        "distanceKm": 15.92323678116894,
        "gradePct": 0.3602507715883489,
        "smoothedEle": 59.48088398000034,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880047,
        "lng": 120.567044,
        "ele": 62,
        "distanceKm": 15.968702885023248,
        "gradePct": 0.42173761582847086,
        "smoothedEle": 59.91882763732006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879831,
        "lng": 120.567644,
        "ele": 60.25,
        "distanceKm": 16.034696584541862,
        "gradePct": 0.7215477633025199,
        "smoothedEle": 60.74888609861776,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879689,
        "lng": 120.567955,
        "ele": 59.75,
        "distanceKm": 16.070255415019716,
        "gradePct": 0.9121104058605521,
        "smoothedEle": 61.20266306903622,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879392,
        "lng": 120.568552,
        "ele": 59.25,
        "distanceKm": 16.139762806574403,
        "gradePct": 1.151502362239271,
        "smoothedEle": 61.94307252260895,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879094,
        "lng": 120.569045,
        "ele": 62.25,
        "distanceKm": 16.200168887176716,
        "gradePct": 0.8197481519321947,
        "smoothedEle": 61.95409840937184,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878884,
        "lng": 120.569334,
        "ele": 63.5,
        "distanceKm": 16.237876385428383,
        "gradePct": 0.5780864719750254,
        "smoothedEle": 61.94563744161606,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87858,
        "lng": 120.569686,
        "ele": 64.25,
        "distanceKm": 16.287304034881316,
        "gradePct": 0.32685107591974233,
        "smoothedEle": 62.037971220375276,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878352,
        "lng": 120.5699765,
        "ele": 64,
        "distanceKm": 16.326399634278463,
        "gradePct": 0.18489193888512356,
        "smoothedEle": 62.17050867481608,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878124,
        "lng": 120.570267,
        "ele": 63.75,
        "distanceKm": 16.365495271718704,
        "gradePct": 0.20175936474408546,
        "smoothedEle": 62.35128818399507,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8778915,
        "lng": 120.5705875,
        "ele": 62.875,
        "distanceKm": 16.40728615195904,
        "gradePct": 0.32277529207564487,
        "smoothedEle": 62.598051991583866,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877659,
        "lng": 120.570908,
        "ele": 62,
        "distanceKm": 16.44907707637214,
        "gradePct": 0.3521798109846776,
        "smoothedEle": 62.67092061813429,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87735926524136,
        "lng": 120.571262775872,
        "ele": 61.7008635143309,
        "distanceKm": 16.498391054659248,
        "gradePct": 0.2565856587728925,
        "smoothedEle": 62.58872849136239,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87706008622586,
        "lng": 120.5716181014878,
        "ele": 61.605814597412554,
        "distanceKm": 16.54770490818156,
        "gradePct": 0.06470714378811972,
        "smoothedEle": 62.39843924736179,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87676204311293,
        "lng": 120.5719745507439,
        "ele": 61.92790729870629,
        "distanceKm": 16.59701888639475,
        "gradePct": -0.16775905595130128,
        "smoothedEle": 62.20190846261423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876464,
        "lng": 120.572331,
        "ele": 62.25,
        "distanceKm": 16.64633292396124,
        "gradePct": -0.3074090706625239,
        "smoothedEle": 62.051317643259004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876133,
        "lng": 120.57271850000001,
        "ele": 62.1875,
        "distanceKm": 16.70046854160386,
        "gradePct": -0.26823457791223243,
        "smoothedEle": 62.044242857573316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875802,
        "lng": 120.573106,
        "ele": 62.125,
        "distanceKm": 16.754604230206365,
        "gradePct": -0.08585904885600146,
        "smoothedEle": 62.19922531133192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875470999999997,
        "lng": 120.5734935,
        "ele": 62.0625,
        "distanceKm": 16.80873998977026,
        "gradePct": 0.14910071600358119,
        "smoothedEle": 62.46431703222018,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87514,
        "lng": 120.573881,
        "ele": 62,
        "distanceKm": 16.86287582029305,
        "gradePct": 0.38505395308388085,
        "smoothedEle": 62.81926361886673,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874870246536556,
        "lng": 120.57426217748308,
        "ele": 62.2608262737015,
        "distanceKm": 16.91211757136981,
        "gradePct": 0.5952579806661106,
        "smoothedEle": 63.268108264781986,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874582623268278,
        "lng": 120.57462808874153,
        "ele": 63.00541313685078,
        "distanceKm": 16.961394317634184,
        "gradePct": 0.8228797731820408,
        "smoothedEle": 63.8782345243807,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874295,
        "lng": 120.574994,
        "ele": 63.75,
        "distanceKm": 17.010671124300337,
        "gradePct": 0.9431365526627963,
        "smoothedEle": 64.36325179994546,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873885,
        "lng": 120.575473,
        "ele": 65,
        "distanceKm": 17.077653953470513,
        "gradePct": 0.9837053068423706,
        "smoothedEle": 64.9213787426122,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.873427,
        "lng": 120.57583,
        "ele": 66.75,
        "distanceKm": 17.140354273965265,
        "gradePct": 0.9425336499537236,
        "smoothedEle": 65.50279186535866,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.872986,
        "lng": 120.575901,
        "ele": 68.5,
        "distanceKm": 17.189927878381457,
        "gradePct": 0.9278402519023704,
        "smoothedEle": 66.01476256746622,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.872354,
        "lng": 120.575812,
        "ele": 66.5,
        "distanceKm": 17.260792244771803,
        "gradePct": 1.0305416093208886,
        "smoothedEle": 66.84196365682675,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.871881402323595,
        "lng": 120.57579529330951,
        "ele": 66.08444096898089,
        "distanceKm": 17.31337064908922,
        "gradePct": 1.0947460126301716,
        "smoothedEle": 67.4420677277923,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8714082011618,
        "lng": 120.57580014665476,
        "ele": 66.79222048449041,
        "distanceKm": 17.365990639647347,
        "gradePct": 1.0784540611871916,
        "smoothedEle": 67.92445919361104,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.870935,
        "lng": 120.575805,
        "ele": 67.5,
        "distanceKm": 17.41861063022224,
        "gradePct": 0.9655394080956333,
        "smoothedEle": 68.28065568846422,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.870298,
        "lng": 120.5758,
        "ele": 69.5,
        "distanceKm": 17.489443748721865,
        "gradePct": 0.7102155866302152,
        "smoothedEle": 68.58940901743144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869756,
        "lng": 120.575886,
        "ele": 70,
        "distanceKm": 17.550352155807033,
        "gradePct": 0.6495277991136157,
        "smoothedEle": 69.08014967407799,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869435,
        "lng": 120.576127,
        "ele": 69.75,
        "distanceKm": 17.593753806048465,
        "gradePct": 0.6758686434483987,
        "smoothedEle": 69.46413156848602,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869276,
        "lng": 120.576469,
        "ele": 70.25,
        "distanceKm": 17.633001012545492,
        "gradePct": 0.7129086321798636,
        "smoothedEle": 69.76919895644383,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869233,
        "lng": 120.577095,
        "ele": 70.25,
        "distanceKm": 17.697315502237796,
        "gradePct": 0.777905401146252,
        "smoothedEle": 70.20864274726769,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869243166666667,
        "lng": 120.57756566666667,
        "ele": 70.375,
        "distanceKm": 17.745550670105324,
        "gradePct": 0.667453839626314,
        "smoothedEle": 70.3763716552653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869253333333333,
        "lng": 120.57803633333333,
        "ele": 70.5,
        "distanceKm": 17.79378583436336,
        "gradePct": 0.5290827985962868,
        "smoothedEle": 70.52254612083331,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869263500000002,
        "lng": 120.578507,
        "ele": 70.625,
        "distanceKm": 17.842020995014817,
        "gradePct": 0.4293992695755422,
        "smoothedEle": 70.68962863514759,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86927366666667,
        "lng": 120.57897766666667,
        "ele": 70.75,
        "distanceKm": 17.89025615205822,
        "gradePct": 0.35941460659484775,
        "smoothedEle": 70.87923729952006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869283833333334,
        "lng": 120.57944833333333,
        "ele": 70.875,
        "distanceKm": 17.938491305492125,
        "gradePct": 0.36546842729209444,
        "smoothedEle": 71.08276087023143,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869294,
        "lng": 120.579919,
        "ele": 71,
        "distanceKm": 17.98672645531944,
        "gradePct": 0.4102216908997051,
        "smoothedEle": 71.32159637637598,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86931325,
        "lng": 120.58046675,
        "ele": 71.43750000000001,
        "distanceKm": 18.04288668793796,
        "gradePct": 0.47284074903232376,
        "smoothedEle": 71.63871310500656,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8693325,
        "lng": 120.58101450000001,
        "ele": 71.875,
        "distanceKm": 18.099046912611023,
        "gradePct": 0.5202061434284122,
        "smoothedEle": 71.95674135139897,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86935175,
        "lng": 120.58156225,
        "ele": 72.31249999999999,
        "distanceKm": 18.15520712933575,
        "gradePct": 0.5893829996354348,
        "smoothedEle": 72.34429498077816,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869371,
        "lng": 120.58211,
        "ele": 72.75,
        "distanceKm": 18.211367338113575,
        "gradePct": 0.6837749068170094,
        "smoothedEle": 72.82828443388667,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869379,
        "lng": 120.582576,
        "ele": 73.25,
        "distanceKm": 18.25911937393542,
        "gradePct": 0.8236425623512773,
        "smoothedEle": 73.37792187659736,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8694,
        "lng": 120.582943,
        "ele": 73.25,
        "distanceKm": 18.29679257169083,
        "gradePct": 0.9996558435909471,
        "smoothedEle": 73.94328699119069,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869449,
        "lng": 120.583298,
        "ele": 73.5,
        "distanceKm": 18.333569712846973,
        "gradePct": 1.225335211961725,
        "smoothedEle": 74.64564868586277,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.86961816005022,
        "lng": 120.5836649935647,
        "ele": 74.1320309237545,
        "distanceKm": 18.375612213302087,
        "gradePct": 1.5382785569877753,
        "smoothedEle": 75.59670338954804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.869819,
        "lng": 120.584016,
        "ele": 74.75,
        "distanceKm": 18.417944312637676,
        "gradePct": 1.9581906092840242,
        "smoothedEle": 76.82036821457555,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.870082,
        "lng": 120.584408,
        "ele": 76,
        "distanceKm": 18.46762541541308,
        "gradePct": 2.581149523606252,
        "smoothedEle": 78.66787186403468,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.870395000000002,
        "lng": 120.58486099999999,
        "ele": 78.875,
        "distanceKm": 18.525637089355424,
        "gradePct": 3.4564037785511115,
        "smoothedEle": 81.40696075681326,
        "gradeBand": "hard"
      },
      {
        "lat": 22.870708,
        "lng": 120.585314,
        "ele": 81.75,
        "distanceKm": 18.583648677738395,
        "gradePct": 4.358760835883147,
        "smoothedEle": 84.54652960095777,
        "gradeBand": "hard"
      },
      {
        "lat": 22.8710525,
        "lng": 120.58576199999999,
        "ele": 86.75,
        "distanceKm": 18.643432684926427,
        "gradePct": 5.152691114500269,
        "smoothedEle": 88.07359294689411,
        "gradeBand": "hard"
      },
      {
        "lat": 22.871397,
        "lng": 120.58621,
        "ele": 91.75,
        "distanceKm": 18.703216602740405,
        "gradePct": 5.668956093416255,
        "smoothedEle": 91.68626350033048,
        "gradeBand": "hard"
      },
      {
        "lat": 22.871706,
        "lng": 120.586551,
        "ele": 97.75,
        "distanceKm": 18.75221773992036,
        "gradePct": 5.884260406215694,
        "smoothedEle": 94.6140179840701,
        "gradeBand": "hard"
      },
      {
        "lat": 22.872051554857293,
        "lng": 120.58685518124688,
        "ele": 100.11577216373189,
        "distanceKm": 18.80169103481819,
        "gradePct": 5.958226479334975,
        "smoothedEle": 97.52742335782133,
        "gradeBand": "hard"
      },
      {
        "lat": 22.872407,
        "lng": 120.587146,
        "ele": 102.75,
        "distanceKm": 18.851187206034137,
        "gradePct": 5.908612896737927,
        "smoothedEle": 100.3594151637257,
        "gradeBand": "hard"
      },
      {
        "lat": 22.872761,
        "lng": 120.587492,
        "ele": 105.25,
        "distanceKm": 18.904159258170306,
        "gradePct": 5.764653696814448,
        "smoothedEle": 103.27189333503622,
        "gradeBand": "hard"
      },
      {
        "lat": 22.872979,
        "lng": 120.587911,
        "ele": 105,
        "distanceKm": 18.953457891411656,
        "gradePct": 5.609906878943419,
        "smoothedEle": 105.90686233404637,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873055,
        "lng": 120.588344,
        "ele": 107.25,
        "distanceKm": 18.998617219258072,
        "gradePct": 5.532184808150026,
        "smoothedEle": 108.4107807575455,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873066,
        "lng": 120.588921,
        "ele": 109.5,
        "distanceKm": 19.057744455578593,
        "gradePct": 5.584249134465756,
        "smoothedEle": 111.88844026505124,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873136,
        "lng": 120.589523,
        "ele": 112.25,
        "distanceKm": 19.119909529860866,
        "gradePct": 6.305759154669041,
        "smoothedEle": 116.72524994499076,
        "gradeBand": "steep"
      },
      {
        "lat": 22.873266,
        "lng": 120.589956,
        "ele": 116.25,
        "distanceKm": 19.166566796633962,
        "gradePct": 7.005572087976919,
        "smoothedEle": 120.64484702918743,
        "gradeBand": "steep"
      },
      {
        "lat": 22.873492,
        "lng": 120.590585,
        "ele": 122.25,
        "distanceKm": 19.235735300597195,
        "gradePct": 8.262217500647722,
        "smoothedEle": 127.11837290438422,
        "gradeBand": "steep"
      },
      {
        "lat": 22.87364,
        "lng": 120.590977,
        "ele": 128.25,
        "distanceKm": 19.279137204891413,
        "gradePct": 9.037472437447544,
        "smoothedEle": 131.627867297354,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.873687,
        "lng": 120.591413,
        "ele": 138.25,
        "distanceKm": 19.324110599629094,
        "gradePct": 9.646570822101316,
        "smoothedEle": 136.3713162663746,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.873527,
        "lng": 120.591759,
        "ele": 144.5,
        "distanceKm": 19.363772877238915,
        "gradePct": 9.970002323926693,
        "smoothedEle": 140.35013929306078,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.873136,
        "lng": 120.59202,
        "ele": 148.5,
        "distanceKm": 19.414814933203548,
        "gradePct": 9.945117481715613,
        "smoothedEle": 145.05065689473403,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.872805,
        "lng": 120.592352,
        "ele": 154,
        "distanceKm": 19.46493079448578,
        "gradePct": 9.425348316741525,
        "smoothedEle": 149.00250593038294,
        "gradeBand": "extreme"
      },
      {
        "lat": 22.872808,
        "lng": 120.592756,
        "ele": 159.25,
        "distanceKm": 19.506322669779717,
        "gradePct": 8.629496939971776,
        "smoothedEle": 151.75417564508285,
        "gradeBand": "steep"
      },
      {
        "lat": 22.873094,
        "lng": 120.593081,
        "ele": 162.25,
        "distanceKm": 19.55236646527137,
        "gradePct": 7.3873659341253255,
        "smoothedEle": 153.98060771192488,
        "gradeBand": "steep"
      },
      {
        "lat": 22.873654,
        "lng": 120.593351,
        "ele": 161,
        "distanceKm": 19.6205033721709,
        "gradePct": 4.871061786030995,
        "smoothedEle": 155.24133809849843,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874065,
        "lng": 120.59368,
        "ele": 157.75,
        "distanceKm": 19.67728997262716,
        "gradePct": 2.8503777965840937,
        "smoothedEle": 155.52488112760904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874233,
        "lng": 120.593944,
        "ele": 156.75,
        "distanceKm": 19.71016111601042,
        "gradePct": 1.641129079761447,
        "smoothedEle": 155.22204056624713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874343,
        "lng": 120.594423,
        "ele": 154.25,
        "distanceKm": 19.760736351316346,
        "gradePct": 0.027882090526276312,
        "smoothedEle": 154.1912390589411,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874413,
        "lng": 120.594795,
        "ele": 150.5,
        "distanceKm": 19.799634703472613,
        "gradePct": -0.9317587078761738,
        "smoothedEle": 152.9916897890432,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874545,
        "lng": 120.595099,
        "ele": 149.25,
        "distanceKm": 19.83406499978691,
        "gradePct": -1.7602618407740416,
        "smoothedEle": 151.78852942265624,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874762,
        "lng": 120.59534,
        "ele": 150.75,
        "distanceKm": 19.868588150822152,
        "gradePct": -2.4449379311953354,
        "smoothedEle": 150.59155591460487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875015,
        "lng": 120.595557,
        "ele": 149.25,
        "distanceKm": 19.904444502868717,
        "gradePct": -3.040750489690023,
        "smoothedEle": 149.19320652068004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875367,
        "lng": 120.59581,
        "ele": 147.25,
        "distanceKm": 19.95138947784536,
        "gradePct": -3.552702258780185,
        "smoothedEle": 147.2763382771362,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875728,
        "lng": 120.59612,
        "ele": 146,
        "distanceKm": 20.002575361388725,
        "gradePct": -3.5780135564032616,
        "smoothedEle": 145.73290192670748,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876039499999997,
        "lng": 120.596503,
        "ele": 144.875,
        "distanceKm": 20.05491438149035,
        "gradePct": -3.2264762538020166,
        "smoothedEle": 144.61269511516113,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876351,
        "lng": 120.596886,
        "ele": 143.75,
        "distanceKm": 20.10725333411453,
        "gradePct": -2.7612507528625185,
        "smoothedEle": 143.5560141578557,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876563899823445,
        "lng": 120.59718522846185,
        "ele": 140.20343291428296,
        "distanceKm": 20.145985759580878,
        "gradePct": -2.605048983733236,
        "smoothedEle": 142.2868862029394,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876752,
        "lng": 120.597504,
        "ele": 136.25,
        "distanceKm": 20.184767235067653,
        "gradePct": -2.607559950713631,
        "smoothedEle": 141.05476034028152,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877052,
        "lng": 120.59803,
        "ele": 142.75,
        "distanceKm": 20.248144759060185,
        "gradePct": -2.81609748912464,
        "smoothedEle": 139.1253896885913,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877215,
        "lng": 120.598372,
        "ele": 141.37499999999994,
        "distanceKm": 20.287592545791064,
        "gradePct": -3.1292531783811883,
        "smoothedEle": 137.69444315393076,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877378,
        "lng": 120.598714,
        "ele": 140,
        "distanceKm": 20.327040295165567,
        "gradePct": -3.249565070349459,
        "smoothedEle": 136.4085335689121,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877575,
        "lng": 120.59918,
        "ele": 134,
        "distanceKm": 20.379566874864093,
        "gradePct": -2.9908819412058243,
        "smoothedEle": 135.23821704892575,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877694,
        "lng": 120.599641,
        "ele": 132.75,
        "distanceKm": 20.42861412394825,
        "gradePct": -2.300243350500517,
        "smoothedEle": 135.1194644633317,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877665,
        "lng": 120.600058,
        "ele": 131.25,
        "distanceKm": 20.471456524495697,
        "gradePct": -1.4023912460308927,
        "smoothedEle": 135.4749858643534,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877399,
        "lng": 120.600573,
        "ele": 127.25,
        "distanceKm": 20.531942543738793,
        "gradePct": -0.6940291990777065,
        "smoothedEle": 134.91125080238442,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876945,
        "lng": 120.601036,
        "ele": 132.25,
        "distanceKm": 20.60121333050583,
        "gradePct": -0.653152917993341,
        "smoothedEle": 133.87950108547213,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87668,
        "lng": 120.601454,
        "ele": 137.75,
        "distanceKm": 20.65319550359595,
        "gradePct": -0.4994957150249224,
        "smoothedEle": 134.32445802057777,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876612,
        "lng": 120.601896,
        "ele": 141.25,
        "distanceKm": 20.699104873638355,
        "gradePct": -0.005922219618653933,
        "smoothedEle": 135.20545635983459,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876604,
        "lng": 120.602298,
        "ele": 139,
        "distanceKm": 20.740298954090996,
        "gradePct": 0.5281543321909955,
        "smoothedEle": 135.84309539731265,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.876628,
        "lng": 120.602878,
        "ele": 132.75,
        "distanceKm": 20.79977923438548,
        "gradePct": 1.4425261022185418,
        "smoothedEle": 136.78591335141928,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87691,
        "lng": 120.60321,
        "ele": 133.5,
        "distanceKm": 20.846040956968334,
        "gradePct": 1.3833250102761716,
        "smoothedEle": 137.02986656255678,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877327,
        "lng": 120.603282,
        "ele": 141.25,
        "distanceKm": 20.89299235186179,
        "gradePct": 0.5436233288142366,
        "smoothedEle": 136.1754040536818,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87772,
        "lng": 120.60329,
        "ele": 142.75,
        "distanceKm": 20.936699703373918,
        "gradePct": -0.595461436539923,
        "smoothedEle": 134.59646008356995,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878154,
        "lng": 120.603355,
        "ele": 137.5,
        "distanceKm": 20.985415640773443,
        "gradePct": -2.013313635765364,
        "smoothedEle": 132.5316097159597,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878465,
        "lng": 120.603551,
        "ele": 135.75,
        "distanceKm": 21.025404237822823,
        "gradePct": -2.96940838314843,
        "smoothedEle": 130.98222561890958,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878646,
        "lng": 120.603851,
        "ele": 133.25,
        "distanceKm": 21.062141983382297,
        "gradePct": -3.3817767418222906,
        "smoothedEle": 129.973292531677,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878751,
        "lng": 120.604483,
        "ele": 125,
        "distanceKm": 21.127932989779037,
        "gradePct": -3.462028955454071,
        "smoothedEle": 127.98910288980534,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878767,
        "lng": 120.604835,
        "ele": 120.25,
        "distanceKm": 21.164038306533573,
        "gradePct": -3.5075913859530043,
        "smoothedEle": 126.42251638459379,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8788135,
        "lng": 120.605225,
        "ele": 119.49999999999997,
        "distanceKm": 21.204325928630478,
        "gradePct": -3.6058776392357133,
        "smoothedEle": 124.58716308449706,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87886,
        "lng": 120.605615,
        "ele": 118.75,
        "distanceKm": 21.244613537155885,
        "gradePct": -3.6507526802901245,
        "smoothedEle": 123.1531729800592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878906440184977,
        "lng": 120.6061011455202,
        "ele": 119.01844037559123,
        "distanceKm": 21.294684789781233,
        "gradePct": -3.6542654857432515,
        "smoothedEle": 121.68330371495222,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878952880369955,
        "lng": 120.6065872910404,
        "ele": 119.28688075118242,
        "distanceKm": 21.344756025462793,
        "gradePct": -3.334218296963049,
        "smoothedEle": 120.59072558221541,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878999320554932,
        "lng": 120.6070734365606,
        "ele": 119.55532112677365,
        "distanceKm": 21.394827244200535,
        "gradePct": -2.3032516784460255,
        "smoothedEle": 120.41338424465744,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87904585577754,
        "lng": 120.60755957152867,
        "ele": 120.00711555083721,
        "distanceKm": 21.4448984616981,
        "gradePct": -1.2022671473933542,
        "smoothedEle": 120.74027456802924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879092641833157,
        "lng": 120.6080456786465,
        "ele": 120.94283666312793,
        "distanceKm": 21.494969714492004,
        "gradePct": -0.2836011464833358,
        "smoothedEle": 121.10988422953506,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87913942788877,
        "lng": 120.60853178576433,
        "ele": 121.87855777541864,
        "distanceKm": 21.545040950217032,
        "gradePct": 0.4060762915714747,
        "smoothedEle": 121.40186902401341,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879186213944386,
        "lng": 120.60901789288216,
        "ele": 122.81427888770929,
        "distanceKm": 21.595112168876124,
        "gradePct": 0.6506367714934905,
        "smoothedEle": 121.716517920551,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879233,
        "lng": 120.609504,
        "ele": 123.75,
        "distanceKm": 21.64518337046772,
        "gradePct": 0.6794201054850102,
        "smoothedEle": 122.10121788263704,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879255,
        "lng": 120.609914,
        "ele": 123.25,
        "distanceKm": 21.68725779751759,
        "gradePct": 0.6835325342394281,
        "smoothedEle": 122.4200224415159,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879277,
        "lng": 120.610324,
        "ele": 122.75,
        "distanceKm": 21.729332217773056,
        "gradePct": 0.7255193168743287,
        "smoothedEle": 122.76130394661425,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879323,
        "lng": 120.610863,
        "ele": 121.5,
        "distanceKm": 21.78478749883821,
        "gradePct": 0.8383928755303133,
        "smoothedEle": 123.32842316497441,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879375,
        "lng": 120.611258,
        "ele": 122.5,
        "distanceKm": 21.825665023659194,
        "gradePct": 0.9229290002336261,
        "smoothedEle": 123.79711528622335,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879458,
        "lng": 120.611651,
        "ele": 123.25,
        "distanceKm": 21.866970889109645,
        "gradePct": 0.9796056705933047,
        "smoothedEle": 124.22551668327904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879568734719516,
        "lng": 120.61199871889634,
        "ele": 123.42426310976649,
        "distanceKm": 21.90466158398901,
        "gradePct": 0.995320907474845,
        "smoothedEle": 124.55183293818035,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.879686,
        "lng": 120.612344,
        "ele": 123.75,
        "distanceKm": 21.942361262678286,
        "gradePct": 1.0019370259280116,
        "smoothedEle": 124.89842088572482,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87987,
        "lng": 120.612777,
        "ele": 125.5,
        "distanceKm": 21.991211644155598,
        "gradePct": 0.9966676181900986,
        "smoothedEle": 125.39541614626955,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880026,
        "lng": 120.613086,
        "ele": 127.25,
        "distanceKm": 22.027308701248575,
        "gradePct": 1.0054473798628614,
        "smoothedEle": 125.82505735310318,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880196,
        "lng": 120.613467,
        "ele": 128,
        "distanceKm": 22.07067723508284,
        "gradePct": 1.0579860427303809,
        "smoothedEle": 126.3735773503171,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880402,
        "lng": 120.613834,
        "ele": 128,
        "distanceKm": 22.114703175178693,
        "gradePct": 1.1372589358886924,
        "smoothedEle": 126.91866710021574,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880603037619522,
        "lng": 120.61422354572083,
        "ele": 128,
        "distanceKm": 22.16044505632933,
        "gradePct": 1.268340110245501,
        "smoothedEle": 127.61908246860112,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.880818737803466,
        "lng": 120.61460396029206,
        "ele": 128,
        "distanceKm": 22.2062061643586,
        "gradePct": 1.5280660258841066,
        "smoothedEle": 128.63001880685542,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881035,
        "lng": 120.614984,
        "ele": 128,
        "distanceKm": 22.25196732738533,
        "gradePct": 1.740458295953039,
        "smoothedEle": 129.61785328110858,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881486,
        "lng": 120.615527,
        "ele": 128.25,
        "distanceKm": 22.32686312263327,
        "gradePct": 1.98585131004166,
        "smoothedEle": 131.07656700518763,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881793,
        "lng": 120.615904,
        "ele": 131,
        "distanceKm": 22.378408948819487,
        "gradePct": 2.011766786487776,
        "smoothedEle": 132.0394672647415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882058,
        "lng": 120.616472,
        "ele": 134.75,
        "distanceKm": 22.443633279545566,
        "gradePct": 1.925277471919948,
        "smoothedEle": 133.28850327451298,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882242,
        "lng": 120.617129,
        "ele": 137,
        "distanceKm": 22.51398051008977,
        "gradePct": 1.8174035825901376,
        "smoothedEle": 134.46046497503875,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882384000000002,
        "lng": 120.6175745,
        "ele": 137.1875,
        "distanceKm": 22.562273789379773,
        "gradePct": 1.7165858734364638,
        "smoothedEle": 135.1712266498004,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882526,
        "lng": 120.61802,
        "ele": 137.375,
        "distanceKm": 22.61056702355465,
        "gradePct": 1.6562989631917078,
        "smoothedEle": 135.967887429575,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882668,
        "lng": 120.6184655,
        "ele": 137.5625,
        "distanceKm": 22.658860212614403,
        "gradePct": 1.6083085905580874,
        "smoothedEle": 136.7587961474097,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88281,
        "lng": 120.618911,
        "ele": 137.75,
        "distanceKm": 22.70715335655864,
        "gradePct": 1.553514640902199,
        "smoothedEle": 137.4537561267107,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883053,
        "lng": 120.619287,
        "ele": 134.75,
        "distanceKm": 22.754204565258835,
        "gradePct": 1.660198709489356,
        "smoothedEle": 138.3728643710625,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883472,
        "lng": 120.619788,
        "ele": 136.25,
        "distanceKm": 22.823521889146168,
        "gradePct": 2.1111161799476226,
        "smoothedEle": 140.4022846171446,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883732,
        "lng": 120.620062,
        "ele": 138.25,
        "distanceKm": 22.8638174249471,
        "gradePct": 2.4725609098850416,
        "smoothedEle": 141.77525447374683,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884145,
        "lng": 120.620336,
        "ele": 140.75,
        "distanceKm": 22.91764000969439,
        "gradePct": 2.9352874420398893,
        "smoothedEle": 143.52917950712012,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884596,
        "lng": 120.620407,
        "ele": 144.25,
        "distanceKm": 22.968313706220247,
        "gradePct": 3.023065571003041,
        "smoothedEle": 144.8320722840134,
        "gradeBand": "hard"
      },
      {
        "lat": 22.884963807308626,
        "lng": 120.62034421485424,
        "ele": 148.8392572874844,
        "distanceKm": 23.009714735811382,
        "gradePct": 3.1251343046771582,
        "smoothedEle": 146.24831782116334,
        "gradeBand": "hard"
      },
      {
        "lat": 22.885327,
        "lng": 120.620251,
        "ele": 153.5,
        "distanceKm": 23.05121358102895,
        "gradePct": 3.192247024311553,
        "smoothedEle": 147.73030398383773,
        "gradeBand": "hard"
      },
      {
        "lat": 22.885836,
        "lng": 120.62026,
        "ele": 154.5,
        "distanceKm": 23.10781938583851,
        "gradePct": 3.1017419165036384,
        "smoothedEle": 149.41263712613105,
        "gradeBand": "hard"
      },
      {
        "lat": 22.886148,
        "lng": 120.620388,
        "ele": 153.75,
        "distanceKm": 23.14490757891349,
        "gradePct": 2.9757231707671785,
        "smoothedEle": 150.18171381765382,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886453,
        "lng": 120.620609,
        "ele": 150.5,
        "distanceKm": 23.185684346201406,
        "gradePct": 2.7429297532865418,
        "smoothedEle": 150.91214627253797,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886913,
        "lng": 120.620969,
        "ele": 152.75,
        "distanceKm": 23.24874263295045,
        "gradePct": 1.9815118837963936,
        "smoothedEle": 151.6050864800933,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887197,
        "lng": 120.621406,
        "ele": 153.25,
        "distanceKm": 23.303526936464888,
        "gradePct": 1.0303708392863806,
        "smoothedEle": 151.3458065554061,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887337,
        "lng": 120.621777,
        "ele": 150.5,
        "distanceKm": 23.34459717846151,
        "gradePct": 0.4128636301527152,
        "smoothedEle": 151.00100448094915,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887468,
        "lng": 120.622154,
        "ele": 148.5,
        "distanceKm": 23.385873113940207,
        "gradePct": -0.15047706826443683,
        "smoothedEle": 150.61326648282136,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887744,
        "lng": 120.62261,
        "ele": 150.75,
        "distanceKm": 23.441765550941955,
        "gradePct": -0.7406313409181449,
        "smoothedEle": 150.04715345238577,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8880585,
        "lng": 120.6229525,
        "ele": 149.375,
        "distanceKm": 23.491303182784176,
        "gradePct": -0.7564445258254748,
        "smoothedEle": 149.89076936515366,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888373,
        "lng": 120.623295,
        "ele": 148,
        "distanceKm": 23.540840757041032,
        "gradePct": -0.5239647971834264,
        "smoothedEle": 149.98461163521947,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888733,
        "lng": 120.623629,
        "ele": 150.5,
        "distanceKm": 23.593500808857417,
        "gradePct": 0.025053874326829463,
        "smoothedEle": 150.5861162388653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889018,
        "lng": 120.623923,
        "ele": 148.75,
        "distanceKm": 23.637219726654703,
        "gradePct": 0.7091664453533635,
        "smoothedEle": 151.51152925159911,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889273,
        "lng": 120.624161,
        "ele": 146.25,
        "distanceKm": 23.67461498126225,
        "gradePct": 1.199142696015376,
        "smoothedEle": 152.3417373151812,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889785,
        "lng": 120.624478,
        "ele": 151.75,
        "distanceKm": 23.740156947421756,
        "gradePct": 1.5726289100963469,
        "smoothedEle": 153.12857407008235,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890240588917145,
        "lng": 120.62456225984212,
        "ele": 155.90427038990296,
        "distanceKm": 23.791546262066202,
        "gradePct": 1.37972540009496,
        "smoothedEle": 153.32324140790968,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890698,
        "lng": 120.624635,
        "ele": 160,
        "distanceKm": 23.842951050209734,
        "gradePct": 0.7565003134016903,
        "smoothedEle": 153.15177038205255,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891241,
        "lng": 120.624737,
        "ele": 160.25,
        "distanceKm": 23.904227392019415,
        "gradePct": -0.013652797425820089,
        "smoothedEle": 152.66993117434754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891877,
        "lng": 120.624877,
        "ele": 155,
        "distanceKm": 23.97638694117345,
        "gradePct": -0.4455462454464383,
        "smoothedEle": 152.37472404840588,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892261,
        "lng": 120.624978,
        "ele": 149.75,
        "distanceKm": 24.020321439083705,
        "gradePct": -0.6419316446508697,
        "smoothedEle": 151.94339271918105,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89264881076687,
        "lng": 120.62505010293143,
        "ele": 147.81867147973605,
        "distanceKm": 24.06407205028867,
        "gradePct": -0.8393732854667947,
        "smoothedEle": 151.3069413453024,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893036597706903,
        "lng": 120.6251223541923,
        "ele": 145.93110455212536,
        "distanceKm": 24.107822614366476,
        "gradePct": -1.098108824094798,
        "smoothedEle": 150.45900535144455,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893424,
        "lng": 120.625197,
        "ele": 144.75,
        "distanceKm": 24.15157322378214,
        "gradePct": -1.43671183812477,
        "smoothedEle": 149.60281411885921,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89381460873457,
        "lng": 120.62527905430339,
        "ele": 145.88439129110782,
        "distanceKm": 24.195812819123553,
        "gradePct": -1.6859492260872804,
        "smoothedEle": 148.81211009574483,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894205217469143,
        "lng": 120.62536110860678,
        "ele": 147.01878258221564,
        "distanceKm": 24.240052409867808,
        "gradePct": -1.6041248828575532,
        "smoothedEle": 148.44811145567337,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89459597437182,
        "lng": 120.62544231930596,
        "ele": 148.33998554075157,
        "distanceKm": 24.284291840571097,
        "gradePct": -1.224580038570541,
        "smoothedEle": 148.46589859578623,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894987,
        "lng": 120.625522,
        "ele": 150,
        "distanceKm": 24.32853143136087,
        "gradePct": -0.6795057352886313,
        "smoothedEle": 148.69472621066507,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8954785,
        "lng": 120.6256305,
        "ele": 150.375,
        "distanceKm": 24.384302462905083,
        "gradePct": 0.09863970090920339,
        "smoothedEle": 149.21511662728008,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89597,
        "lng": 120.625739,
        "ele": 150.75,
        "distanceKm": 24.44007348642529,
        "gradePct": 0.7579602577980636,
        "smoothedEle": 149.96404044542197,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896419,
        "lng": 120.625874,
        "ele": 151,
        "distanceKm": 24.491879808291586,
        "gradePct": 1.0752914476376996,
        "smoothedEle": 150.6557299679182,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896912,
        "lng": 120.626162,
        "ele": 150.75,
        "distanceKm": 24.55413289722148,
        "gradePct": 1.272047451083755,
        "smoothedEle": 151.47770422322645,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897408,
        "lng": 120.626528,
        "ele": 150.75,
        "distanceKm": 24.6208215367726,
        "gradePct": 1.2697011942841714,
        "smoothedEle": 152.2449171206269,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897894,
        "lng": 120.626796,
        "ele": 152.25,
        "distanceKm": 24.68143526973302,
        "gradePct": 1.1921689336191192,
        "smoothedEle": 152.90061809952545,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89830631381058,
        "lng": 120.62694059749748,
        "ele": 153.43916996987568,
        "distanceKm": 24.729615689914564,
        "gradePct": 1.12779658178852,
        "smoothedEle": 153.4095782980843,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.898727643446488,
        "lng": 120.6270528581384,
        "ele": 154.7192843602941,
        "distanceKm": 24.777856047168395,
        "gradePct": 1.1038363740617325,
        "smoothedEle": 153.9582976176361,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.899149,
        "lng": 120.627165,
        "ele": 155.75,
        "distanceKm": 24.826096404148508,
        "gradePct": 1.1395838169391124,
        "smoothedEle": 154.5811466698998,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8996815,
        "lng": 120.62731600000001,
        "ele": 155.875,
        "distanceKm": 24.88729461929439,
        "gradePct": 1.2697898538167083,
        "smoothedEle": 155.5020938160551,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900214,
        "lng": 120.627467,
        "ele": 156,
        "distanceKm": 24.948492819093254,
        "gradePct": 1.4056221780058755,
        "smoothedEle": 156.43554422888704,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9005855,
        "lng": 120.62756350000001,
        "ele": 156.50000000000003,
        "distanceKm": 24.99096794487445,
        "gradePct": 1.4245926240652034,
        "smoothedEle": 156.97677541604676,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900957,
        "lng": 120.62766,
        "ele": 157,
        "distanceKm": 25.033443064354863,
        "gradePct": 1.3619417873678734,
        "smoothedEle": 157.41558715768744,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901526,
        "lng": 120.627824,
        "ele": 158,
        "distanceKm": 25.098905153929906,
        "gradePct": 1.132784726958708,
        "smoothedEle": 157.94475766791788,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901951,
        "lng": 120.628087,
        "ele": 159.5,
        "distanceKm": 25.153302066965544,
        "gradePct": 0.9091910958009242,
        "smoothedEle": 158.3152073440269,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902269081770438,
        "lng": 120.62849795377504,
        "ele": 159.6292387022626,
        "distanceKm": 25.208282690578613,
        "gradePct": 0.7826320769196001,
        "smoothedEle": 158.72091873047347,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90258671583341,
        "lng": 120.6289093172384,
        "ele": 159.5,
        "distanceKm": 25.26326338002449,
        "gradePct": 0.760088302777393,
        "smoothedEle": 159.1768197967506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.902904,
        "lng": 120.629321,
        "ele": 159.5,
        "distanceKm": 25.318244088392408,
        "gradePct": 0.7817788332046718,
        "smoothedEle": 159.64001585937785,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903368,
        "lng": 120.629726,
        "ele": 159.25,
        "distanceKm": 25.384447506035336,
        "gradePct": 0.7711627182361723,
        "smoothedEle": 160.08736028037302,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9036,
        "lng": 120.629989,
        "ele": 159.5,
        "distanceKm": 25.421746219781372,
        "gradePct": 0.7559205977100047,
        "smoothedEle": 160.34439980129798,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.903826143242096,
        "lng": 120.63040277454735,
        "ele": 160.22288538006242,
        "distanceKm": 25.471026858235685,
        "gradePct": 0.7206002440941032,
        "smoothedEle": 160.68342527236922,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904047,
        "lng": 120.63082,
        "ele": 161.25,
        "distanceKm": 25.520316252654144,
        "gradePct": 0.6906969829061633,
        "smoothedEle": 161.03541168725224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904322,
        "lng": 120.631249,
        "ele": 161.25,
        "distanceKm": 25.573850574587976,
        "gradePct": 0.7065285551607329,
        "smoothedEle": 161.4288126559025,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904556,
        "lng": 120.631507,
        "ele": 161.75,
        "distanceKm": 25.61093665132476,
        "gradePct": 0.7205898858780583,
        "smoothedEle": 161.71108675497968,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.904913,
        "lng": 120.631808,
        "ele": 163,
        "distanceKm": 25.661199540983755,
        "gradePct": 0.7597747193646027,
        "smoothedEle": 162.13536781790057,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90529143745006,
        "lng": 120.6320254529327,
        "ele": 163.06191712206487,
        "distanceKm": 25.708811006062987,
        "gradePct": 0.7917950211150668,
        "smoothedEle": 162.53684023109622,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90566987490012,
        "lng": 120.6322429058654,
        "ele": 163.1238342441297,
        "distanceKm": 25.756422442064217,
        "gradePct": 0.8190556569795462,
        "smoothedEle": 162.9388520345322,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906048312350183,
        "lng": 120.63246035879808,
        "ele": 163.18575136619458,
        "distanceKm": 25.804033848986037,
        "gradePct": 0.8461247284111721,
        "smoothedEle": 163.3507967554152,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906426749800243,
        "lng": 120.63267781173077,
        "ele": 163.24766848825945,
        "distanceKm": 25.851645226828044,
        "gradePct": 0.8922125637233652,
        "smoothedEle": 163.83914269636705,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.906804880893798,
        "lng": 120.63289589356138,
        "ele": 163.61780413793568,
        "distanceKm": 25.89925665743792,
        "gradePct": 0.9427678723489412,
        "smoothedEle": 164.3418111918154,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907183,
        "lng": 120.633114,
        "ele": 164,
        "distanceKm": 25.94686806428664,
        "gradePct": 0.9805544067065347,
        "smoothedEle": 164.8192875273386,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90756019347882,
        "lng": 120.63333925492917,
        "ele": 164.90439612888133,
        "distanceKm": 25.99473714395915,
        "gradePct": 1.0365689647180896,
        "smoothedEle": 165.34349747862217,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.907937386957638,
        "lng": 120.63356450985835,
        "ele": 165.80879225776263,
        "distanceKm": 26.04260619269717,
        "gradePct": 1.0820476608155938,
        "smoothedEle": 165.9105253970238,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908314580436457,
        "lng": 120.63378976478751,
        "ele": 166.71318838664396,
        "distanceKm": 26.090475210498884,
        "gradePct": 1.1356360783700734,
        "smoothedEle": 166.5203712274501,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.908691773915276,
        "lng": 120.63401501971667,
        "ele": 167.6175845155253,
        "distanceKm": 26.138344197364574,
        "gradePct": 1.215641034033557,
        "smoothedEle": 167.16508703961046,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909068824407395,
        "lng": 120.63424055938555,
        "ele": 168.18489784783085,
        "distanceKm": 26.186213290479348,
        "gradePct": 1.2862424114330555,
        "smoothedEle": 167.82263835487464,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.909445850373444,
        "lng": 120.63446614789497,
        "ele": 168.69439239654378,
        "distanceKm": 26.234082378425168,
        "gradePct": 1.3347074023578975,
        "smoothedEle": 168.4789722320198,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90982287633949,
        "lng": 120.63469173640438,
        "ele": 169.20388694525667,
        "distanceKm": 26.281951435354856,
        "gradePct": 1.3603786822692334,
        "smoothedEle": 169.13253666823928,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91019990230554,
        "lng": 120.63491732491379,
        "ele": 169.71338149396956,
        "distanceKm": 26.329820461269392,
        "gradePct": 1.369820192964743,
        "smoothedEle": 169.789926845894,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910576928271585,
        "lng": 120.63514291342321,
        "ele": 170.22287604268246,
        "distanceKm": 26.37768945616837,
        "gradePct": 1.3727958065911898,
        "smoothedEle": 170.4511427600575,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.910953954237634,
        "lng": 120.63536850193262,
        "ele": 170.73237059139538,
        "distanceKm": 26.42555842005066,
        "gradePct": 1.3808813898948862,
        "smoothedEle": 171.12386287388838,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91133,
        "lng": 120.635596,
        "ele": 171.25,
        "distanceKm": 26.47342682410978,
        "gradePct": 1.4141286058000495,
        "smoothedEle": 171.84440590189024,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.911781,
        "lng": 120.63586033333334,
        "ele": 172.41666666666669,
        "distanceKm": 26.530417220814837,
        "gradePct": 1.4294404995328926,
        "smoothedEle": 172.6570509031065,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.912232,
        "lng": 120.63612466666666,
        "ele": 173.58333333333331,
        "distanceKm": 26.587407574729472,
        "gradePct": 1.4184639302535849,
        "smoothedEle": 173.42464290653942,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.912683,
        "lng": 120.636389,
        "ele": 174.75,
        "distanceKm": 26.644397885855078,
        "gradePct": 1.4162975268182174,
        "smoothedEle": 174.2400405119763,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.913140782831206,
        "lng": 120.63665707474924,
        "ele": 175.85252525380233,
        "distanceKm": 26.702233877820795,
        "gradePct": 1.4476026816964855,
        "smoothedEle": 175.15038061505942,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.913595891415603,
        "lng": 120.63693053737461,
        "ele": 176.05126262690118,
        "distanceKm": 26.760073476659144,
        "gradePct": 1.5315254930522482,
        "smoothedEle": 176.11953623685426,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.914051,
        "lng": 120.637204,
        "ele": 176.25,
        "distanceKm": 26.81791302996064,
        "gradePct": 1.6161560577156338,
        "smoothedEle": 177.09341649510483,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91445433333188,
        "lng": 120.6374440841159,
        "ele": 177.3476414276715,
        "distanceKm": 26.869060363764838,
        "gradePct": 1.6396791139835956,
        "smoothedEle": 177.90758682005742,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.914857666663753,
        "lng": 120.63768416823181,
        "ele": 178.44528285534298,
        "distanceKm": 26.92020766239192,
        "gradePct": 1.5624877814564313,
        "smoothedEle": 178.57652345284774,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91526099999563,
        "lng": 120.63792425234772,
        "ele": 179.5429242830145,
        "distanceKm": 26.97135492584067,
        "gradePct": 1.3979106985311112,
        "smoothedEle": 179.10531035684082,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91566433332751,
        "lng": 120.63816433646363,
        "ele": 180.64056571068596,
        "distanceKm": 27.02250215411164,
        "gradePct": 1.1991508184317226,
        "smoothedEle": 179.56476844414232,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916067666659384,
        "lng": 120.63840442057953,
        "ele": 181.73820713835738,
        "distanceKm": 27.073649347202572,
        "gradePct": 0.9649738760461337,
        "smoothedEle": 179.89755219206643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916470779370293,
        "lng": 120.63864494387323,
        "ele": 181.41906276324193,
        "distanceKm": 27.124796644150916,
        "gradePct": 0.721327335399084,
        "smoothedEle": 180.06662139417887,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916873889685146,
        "lng": 120.63888547193662,
        "ele": 181.08453138162096,
        "distanceKm": 27.175943907599827,
        "gradePct": 0.43978807648838525,
        "smoothedEle": 180.0261095604696,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917277,
        "lng": 120.639126,
        "ele": 180.75,
        "distanceKm": 27.22709113575763,
        "gradePct": 0.094665700464731,
        "smoothedEle": 179.7839575639224,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917857,
        "lng": 120.63941,
        "ele": 179.5,
        "distanceKm": 27.297840008514925,
        "gradePct": -0.31434187062480246,
        "smoothedEle": 179.3488315388131,
        "gradeBand": "descent"
      },
      {
        "lat": 22.918226205906397,
        "lng": 120.63954465610264,
        "ele": 178.75059054940786,
        "distanceKm": 27.341148405534966,
        "gradePct": -0.4993564144056553,
        "smoothedEle": 179.05495694697441,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9186,
        "lng": 120.639664,
        "ele": 178,
        "distanceKm": 27.38447242245293,
        "gradePct": -0.5701598815458644,
        "smoothedEle": 178.84541230335435,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919046,
        "lng": 120.639821,
        "ele": 176.75,
        "distanceKm": 27.43660701627645,
        "gradePct": -0.5069518660005787,
        "smoothedEle": 178.71152841513086,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919417,
        "lng": 120.639916,
        "ele": 176.75,
        "distanceKm": 27.47899222462443,
        "gradePct": -0.3921955563645994,
        "smoothedEle": 178.6803597470111,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919843,
        "lng": 120.639958,
        "ele": 177.5,
        "distanceKm": 27.52655623261886,
        "gradePct": -0.23108479152453834,
        "smoothedEle": 178.69180439422033,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920175,
        "lng": 120.639951,
        "ele": 178.25,
        "distanceKm": 27.56347995972593,
        "gradePct": -0.11087836483248777,
        "smoothedEle": 178.72518951337844,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920579,
        "lng": 120.63992366666666,
        "ele": 179.00000000000003,
        "distanceKm": 27.608489909009972,
        "gradePct": 0.014370948390904966,
        "smoothedEle": 178.8124762575306,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.920983,
        "lng": 120.63989633333334,
        "ele": 179.74999999999997,
        "distanceKm": 27.653499857774825,
        "gradePct": 0.14250040406153683,
        "smoothedEle": 178.98410679121255,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.921387,
        "lng": 120.639869,
        "ele": 180.5,
        "distanceKm": 27.69850980602067,
        "gradePct": 0.293169861985363,
        "smoothedEle": 179.27139570754548,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.921898,
        "lng": 120.640011,
        "ele": 180.5,
        "distanceKm": 27.757162060000226,
        "gradePct": 0.4822581645635057,
        "smoothedEle": 179.6839934225604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.922372,
        "lng": 120.640263,
        "ele": 179.75,
        "distanceKm": 27.815848079376934,
        "gradePct": 0.5834828705458811,
        "smoothedEle": 180.00749994451343,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.922752499999998,
        "lng": 120.640469,
        "ele": 179.91666666666666,
        "distanceKm": 27.863126092782945,
        "gradePct": 0.577143179906971,
        "smoothedEle": 180.1998353595077,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.923133,
        "lng": 120.640675,
        "ele": 180.08333333333334,
        "distanceKm": 27.910404079750737,
        "gradePct": 0.49488516789843295,
        "smoothedEle": 180.34483802233396,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.923513500000002,
        "lng": 120.64088100000001,
        "ele": 180.25,
        "distanceKm": 27.95768204027895,
        "gradePct": 0.38344579572985676,
        "smoothedEle": 180.45375140389015,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.923894,
        "lng": 120.641087,
        "ele": 180.41666666666666,
        "distanceKm": 28.004959974366226,
        "gradePct": 0.30812852146863284,
        "smoothedEle": 180.56373633823844,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9242745,
        "lng": 120.64129299999999,
        "ele": 180.58333333333331,
        "distanceKm": 28.052237882013213,
        "gradePct": 0.2646035808492551,
        "smoothedEle": 180.68474733225744,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.924655,
        "lng": 120.641499,
        "ele": 180.75,
        "distanceKm": 28.099515763220555,
        "gradePct": 0.24593289449828235,
        "smoothedEle": 180.80330909654185,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925039397579216,
        "lng": 120.64170310844582,
        "ele": 181.06866294514782,
        "distanceKm": 28.14709643676784,
        "gradePct": 0.26312998506928503,
        "smoothedEle": 180.95562551090504,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925423,
        "lng": 120.641909,
        "ele": 181.5,
        "distanceKm": 28.1946783139852,
        "gradePct": 0.31875721089488823,
        "smoothedEle": 181.17733203845484,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.925903,
        "lng": 120.642151,
        "ele": 181.75,
        "distanceKm": 28.253525370052266,
        "gradePct": 0.5057890202587334,
        "smoothedEle": 181.6995540888152,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926489,
        "lng": 120.642393,
        "ele": 181,
        "distanceKm": 28.323239735860234,
        "gradePct": 0.7349333262837687,
        "smoothedEle": 182.34912150980432,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.926809,
        "lng": 120.642515,
        "ele": 181.25,
        "distanceKm": 28.360951975995704,
        "gradePct": 0.8426826251420353,
        "smoothedEle": 182.70555028824407,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.927172,
        "lng": 120.642671,
        "ele": 182.25,
        "distanceKm": 28.40436249580255,
        "gradePct": 0.9304659203543684,
        "smoothedEle": 183.1242034931853,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.927795,
        "lng": 120.642896,
        "ele": 184.75,
        "distanceKm": 28.47736874112865,
        "gradePct": 0.9485559935522507,
        "smoothedEle": 183.81882799159195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9282428,
        "lng": 120.64306839999999,
        "ele": 185.1,
        "distanceKm": 28.53019936939602,
        "gradePct": 0.9823179682681236,
        "smoothedEle": 184.37953486159452,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9286906,
        "lng": 120.6432408,
        "ele": 185.45,
        "distanceKm": 28.58302997815769,
        "gradePct": 1.1691431267274521,
        "smoothedEle": 185.25675788898857,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9291384,
        "lng": 120.6434132,
        "ele": 185.8,
        "distanceKm": 28.635860567412383,
        "gradePct": 1.382985467560308,
        "smoothedEle": 186.18986566835022,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9295862,
        "lng": 120.64358560000001,
        "ele": 186.15,
        "distanceKm": 28.688691137160767,
        "gradePct": 1.539308430224514,
        "smoothedEle": 187.01761274419565,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930034,
        "lng": 120.643758,
        "ele": 186.5,
        "distanceKm": 28.74152168740157,
        "gradePct": 1.5514910215666957,
        "smoothedEle": 187.67051773058915,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930518,
        "lng": 120.643908,
        "ele": 189.25,
        "distanceKm": 28.79748945085861,
        "gradePct": 1.4865117463319901,
        "smoothedEle": 188.48516839612728,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.930986,
        "lng": 120.64402,
        "ele": 190.25,
        "distanceKm": 28.85077774728998,
        "gradePct": 1.5229148801903474,
        "smoothedEle": 189.46941715617675,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.931322,
        "lng": 120.644099,
        "ele": 189.75,
        "distanceKm": 28.889005181371918,
        "gradePct": 1.6445689274810094,
        "smoothedEle": 190.31063170640476,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.931701500000003,
        "lng": 120.64417499999999,
        "ele": 190.375,
        "distanceKm": 28.931915445558147,
        "gradePct": 1.9567771145142885,
        "smoothedEle": 191.4653534686786,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932081,
        "lng": 120.644251,
        "ele": 191,
        "distanceKm": 28.974825705788508,
        "gradePct": 2.341489661347233,
        "smoothedEle": 192.83826076489484,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932487894908654,
        "lng": 120.6443237074509,
        "ele": 192.33408166771886,
        "distanceKm": 29.020678983380854,
        "gradePct": 2.818280656009701,
        "smoothedEle": 194.55004643357515,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.932895,
        "lng": 120.644395,
        "ele": 194,
        "distanceKm": 29.066532025024383,
        "gradePct": 3.1923288544908504,
        "smoothedEle": 196.2007559327422,
        "gradeBand": "hard"
      },
      {
        "lat": 22.933211,
        "lng": 120.644379,
        "ele": 196,
        "distanceKm": 29.101707852040434,
        "gradePct": 3.309567963392806,
        "smoothedEle": 197.271598440763,
        "gradeBand": "hard"
      },
      {
        "lat": 22.933725,
        "lng": 120.644311,
        "ele": 199.25,
        "distanceKm": 29.159284779284956,
        "gradePct": 3.3803602033336633,
        "smoothedEle": 199.10175157490755,
        "gradeBand": "hard"
      },
      {
        "lat": 22.934067,
        "lng": 120.644279,
        "ele": 201.25,
        "distanceKm": 29.197454426354156,
        "gradePct": 3.3130072054621826,
        "smoothedEle": 200.30904618454016,
        "gradeBand": "hard"
      },
      {
        "lat": 22.934327,
        "lng": 120.644294,
        "ele": 204.5,
        "distanceKm": 29.226405925926088,
        "gradePct": 3.1725940307473874,
        "smoothedEle": 201.10140442669834,
        "gradeBand": "hard"
      },
      {
        "lat": 22.934861,
        "lng": 120.644527,
        "ele": 207.25,
        "distanceKm": 29.29039878493197,
        "gradePct": 2.7744984222000353,
        "smoothedEle": 202.4763182400128,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935312,
        "lng": 120.644677,
        "ele": 205.25,
        "distanceKm": 29.342847539836512,
        "gradePct": 2.1625596094896555,
        "smoothedEle": 202.90439301098095,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935746,
        "lng": 120.644688,
        "ele": 206,
        "distanceKm": 29.391119349593517,
        "gradePct": 1.4330861286383987,
        "smoothedEle": 202.97484184386565,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.936110189778862,
        "lng": 120.64458525565233,
        "ele": 206.18387411062574,
        "distanceKm": 29.432959950489465,
        "gradePct": 0.756209823578618,
        "smoothedEle": 202.75464008121918,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93647209488943,
        "lng": 120.64447312782616,
        "ele": 204.09193705531285,
        "distanceKm": 29.474808101464646,
        "gradePct": 0.05583262897732785,
        "smoothedEle": 202.25301102773815,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.936834,
        "lng": 120.644361,
        "ele": 202,
        "distanceKm": 29.51665624401839,
        "gradePct": -0.6108037852647378,
        "smoothedEle": 201.4690180597175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.937374,
        "lng": 120.644238,
        "ele": 197.75,
        "distanceKm": 29.57800844338945,
        "gradePct": -1.4755429547216945,
        "smoothedEle": 200.0046216188707,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93779911061387,
        "lng": 120.64414200526927,
        "ele": 197.37211102740358,
        "distanceKm": 29.626289953617935,
        "gradePct": -1.935066605622488,
        "smoothedEle": 198.91961021544503,
        "gradeBand": "descent"
      },
      {
        "lat": 22.938224092178228,
        "lng": 120.64404533772439,
        "ele": 196.68509252283633,
        "distanceKm": 29.674571487347087,
        "gradePct": -2.2753303667680393,
        "smoothedEle": 197.70518656087253,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93864907374258,
        "lng": 120.64394867017951,
        "ele": 195.99807401826905,
        "distanceKm": 29.722853014705013,
        "gradePct": -2.2518908679198626,
        "smoothedEle": 196.81732754422094,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939074055306936,
        "lng": 120.64385200263463,
        "ele": 195.3110555137018,
        "distanceKm": 29.771134535692006,
        "gradePct": -1.7993402126662439,
        "smoothedEle": 196.57001234453256,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93949903687129,
        "lng": 120.64375533508976,
        "ele": 194.62403700913453,
        "distanceKm": 29.819416050307677,
        "gradePct": -1.0281645652614098,
        "smoothedEle": 197.01775561238375,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939924018435647,
        "lng": 120.64365866754488,
        "ele": 193.93701850456728,
        "distanceKm": 29.867697558552912,
        "gradePct": 0.095168106422307,
        "smoothedEle": 198.06842245363043,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.940349,
        "lng": 120.643562,
        "ele": 193.25,
        "distanceKm": 29.91597906042655,
        "gradePct": 1.28167901014604,
        "smoothedEle": 199.5070921348963,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.940785,
        "lng": 120.643444,
        "ele": 197.66666666666657,
        "distanceKm": 29.965943229526037,
        "gradePct": 2.2673559758200037,
        "smoothedEle": 201.13131602101538,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.941221,
        "lng": 120.643326,
        "ele": 202.08333333333343,
        "distanceKm": 30.01590738921327,
        "gradePct": 2.88454397487575,
        "smoothedEle": 202.7543056561334,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.941657,
        "lng": 120.643208,
        "ele": 206.5,
        "distanceKm": 30.06587153948888,
        "gradePct": 2.961528913862931,
        "smoothedEle": 203.9517437910976,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.942045,
        "lng": 120.6431255,
        "ele": 209.75,
        "distanceKm": 30.109834550125885,
        "gradePct": 2.726758570981043,
        "smoothedEle": 204.77751802383713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.942433,
        "lng": 120.643043,
        "ele": 213,
        "distanceKm": 30.153797556109378,
        "gradePct": 2.322218393424671,
        "smoothedEle": 205.38092400890966,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.942833500000003,
        "lng": 120.6429875,
        "ele": 212.62499999999997,
        "distanceKm": 30.19869234799206,
        "gradePct": 1.7613705924391703,
        "smoothedEle": 205.71784933533866,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943234,
        "lng": 120.642932,
        "ele": 212.25,
        "distanceKm": 30.243587137745692,
        "gradePct": 1.2949405581436981,
        "smoothedEle": 206.00755813521008,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943573,
        "lng": 120.642909,
        "ele": 207.75,
        "distanceKm": 30.281355772797625,
        "gradePct": 0.9562783510658652,
        "smoothedEle": 206.15514683643508,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.943999333333334,
        "lng": 120.64291666666666,
        "ele": 204.33333333333343,
        "distanceKm": 30.328768441850077,
        "gradePct": 0.6365442576638453,
        "smoothedEle": 206.31048011540258,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.944425666666667,
        "lng": 120.64292433333334,
        "ele": 200.91666666666657,
        "distanceKm": 30.376181110861605,
        "gradePct": 0.5516526427562545,
        "smoothedEle": 206.65221284385575,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.944852,
        "lng": 120.642932,
        "ele": 197.5,
        "distanceKm": 30.423593779832167,
        "gradePct": 0.5044053843300578,
        "smoothedEle": 206.8873505532261,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.945238,
        "lng": 120.64292266666666,
        "ele": 200.75000000000009,
        "distanceKm": 30.466525719618996,
        "gradePct": 0.5598664576007926,
        "smoothedEle": 207.21692827193075,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.945624000000002,
        "lng": 120.64291333333334,
        "ele": 203.99999999999991,
        "distanceKm": 30.50945765934551,
        "gradePct": 0.6870535041991299,
        "smoothedEle": 207.62132118189524,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94601,
        "lng": 120.642904,
        "ele": 207.25,
        "distanceKm": 30.552389599010983,
        "gradePct": 0.508685004537684,
        "smoothedEle": 207.49810256236233,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.946644,
        "lng": 120.64287,
        "ele": 214,
        "distanceKm": 30.622973192447283,
        "gradePct": 0.3526988475924084,
        "smoothedEle": 207.58967051624958,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94714,
        "lng": 120.642862,
        "ele": 216.25,
        "distanceKm": 30.678132035321482,
        "gradePct": 0.3121217159715013,
        "smoothedEle": 207.9504961790965,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.947586,
        "lng": 120.642829,
        "ele": 217,
        "distanceKm": 30.72784002469773,
        "gradePct": 0.4379154981681255,
        "smoothedEle": 208.44439309722793,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948247,
        "lng": 120.642688,
        "ele": 205,
        "distanceKm": 30.802744561656837,
        "gradePct": 0.7468477557111468,
        "smoothedEle": 209.0571234656083,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948744,
        "lng": 120.642531,
        "ele": 203.49999999999994,
        "distanceKm": 30.86029924067235,
        "gradePct": 0.34803048366002665,
        "smoothedEle": 208.52990259722014,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.949241,
        "lng": 120.642374,
        "ele": 202,
        "distanceKm": 30.917853903195383,
        "gradePct": -0.6215755705257089,
        "smoothedEle": 207.1020201872821,
        "gradeBand": "descent"
      },
      {
        "lat": 22.94969397405456,
        "lng": 120.64222261286511,
        "ele": 205.85888775183662,
        "distanceKm": 30.97055370456437,
        "gradePct": -1.5226264961766187,
        "smoothedEle": 205.7485444248541,
        "gradeBand": "descent"
      },
      {
        "lat": 22.950146,
        "lng": 120.642068,
        "ele": 209.75,
        "distanceKm": 31.02325102214559,
        "gradePct": -2.0972294302076127,
        "smoothedEle": 204.6748182981442,
        "gradeBand": "descent"
      },
      {
        "lat": 22.94969397405456,
        "lng": 120.64222261286511,
        "ele": 205.85888775183662,
        "distanceKm": 31.07594833972681,
        "gradePct": -1.1965586423154135,
        "smoothedEle": 205.74854442485412,
        "gradeBand": "descent"
      },
      {
        "lat": 22.949241,
        "lng": 120.642374,
        "ele": 202,
        "distanceKm": 31.1286481410958,
        "gradePct": 0.13861285045273114,
        "smoothedEle": 207.1020201872821,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948744,
        "lng": 120.642531,
        "ele": 203.49999999999994,
        "distanceKm": 31.18620280361883,
        "gradePct": 1.5501069971800858,
        "smoothedEle": 208.52990259722014,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948247,
        "lng": 120.642688,
        "ele": 205,
        "distanceKm": 31.243757482634344,
        "gradePct": 1.9822394606003042,
        "smoothedEle": 209.05712346560836,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.947586,
        "lng": 120.642829,
        "ele": 217,
        "distanceKm": 31.31866201959345,
        "gradePct": 0.7994219801834845,
        "smoothedEle": 208.44439309722796,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94714,
        "lng": 120.642862,
        "ele": 216.25,
        "distanceKm": 31.3683700089697,
        "gradePct": -0.06849494648757594,
        "smoothedEle": 207.95049617909655,
        "gradeBand": "descent"
      },
      {
        "lat": 22.946644,
        "lng": 120.64287,
        "ele": 214,
        "distanceKm": 31.423528851843898,
        "gradePct": -0.6410758294662622,
        "smoothedEle": 207.58967051624958,
        "gradeBand": "descent"
      },
      {
        "lat": 22.94601,
        "lng": 120.642904,
        "ele": 207.25,
        "distanceKm": 31.494112445280198,
        "gradePct": -0.5735548709308793,
        "smoothedEle": 207.49810256236233,
        "gradeBand": "descent"
      },
      {
        "lat": 22.945624000000002,
        "lng": 120.64291333333334,
        "ele": 203.99999999999991,
        "distanceKm": 31.53704438494567,
        "gradePct": -0.3202126743335055,
        "smoothedEle": 207.62132118189524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.945238,
        "lng": 120.64292266666666,
        "ele": 200.75000000000009,
        "distanceKm": 31.579976324672185,
        "gradePct": -0.32882216596787944,
        "smoothedEle": 207.21692827193075,
        "gradeBand": "descent"
      },
      {
        "lat": 22.944852,
        "lng": 120.642932,
        "ele": 197.5,
        "distanceKm": 31.622908264459014,
        "gradePct": -0.35318979072128925,
        "smoothedEle": 206.88735055322604,
        "gradeBand": "descent"
      },
      {
        "lat": 22.944425666666667,
        "lng": 120.64292433333334,
        "ele": 200.91666666666657,
        "distanceKm": 31.670320933429576,
        "gradePct": -0.43837719950396253,
        "smoothedEle": 206.65221284385572,
        "gradeBand": "descent"
      },
      {
        "lat": 22.943999333333334,
        "lng": 120.64291666666666,
        "ele": 204.33333333333343,
        "distanceKm": 31.717733602441104,
        "gradePct": -0.6277086713918174,
        "smoothedEle": 206.31048011540256,
        "gradeBand": "descent"
      },
      {
        "lat": 22.943573,
        "lng": 120.642909,
        "ele": 207.75,
        "distanceKm": 31.765146271493556,
        "gradePct": -0.6007357841254212,
        "smoothedEle": 206.15514683643508,
        "gradeBand": "descent"
      },
      {
        "lat": 22.943234,
        "lng": 120.642932,
        "ele": 212.25,
        "distanceKm": 31.80291490654549,
        "gradePct": -0.5166382025343116,
        "smoothedEle": 206.00755813521005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.942833500000003,
        "lng": 120.6429875,
        "ele": 212.62499999999997,
        "distanceKm": 31.84780969629912,
        "gradePct": -0.5230027072746443,
        "smoothedEle": 205.71784933533863,
        "gradeBand": "descent"
      },
      {
        "lat": 22.942433,
        "lng": 120.643043,
        "ele": 213,
        "distanceKm": 31.892704488181803,
        "gradePct": -0.5549782854303676,
        "smoothedEle": 205.38092400890963,
        "gradeBand": "descent"
      },
      {
        "lat": 22.942045,
        "lng": 120.6431255,
        "ele": 209.75,
        "distanceKm": 31.936667494165295,
        "gradePct": -0.7354654591903679,
        "smoothedEle": 204.77751802383727,
        "gradeBand": "descent"
      },
      {
        "lat": 22.941657,
        "lng": 120.643208,
        "ele": 206.5,
        "distanceKm": 31.9806305048023,
        "gradePct": -1.0714476111842441,
        "smoothedEle": 203.9517437910976,
        "gradeBand": "descent"
      },
      {
        "lat": 22.941221,
        "lng": 120.643326,
        "ele": 202.08333333333343,
        "distanceKm": 32.03059465507791,
        "gradePct": -1.53731669190403,
        "smoothedEle": 202.7543056561333,
        "gradeBand": "descent"
      },
      {
        "lat": 22.940785,
        "lng": 120.643444,
        "ele": 197.66666666666657,
        "distanceKm": 32.08055881476515,
        "gradePct": -2.1703792690403465,
        "smoothedEle": 201.13131602101527,
        "gradeBand": "descent"
      },
      {
        "lat": 22.940349,
        "lng": 120.643562,
        "ele": 193.25,
        "distanceKm": 32.13052298386464,
        "gradePct": -2.677380605755469,
        "smoothedEle": 199.50709213489614,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939924018435647,
        "lng": 120.64365866754488,
        "ele": 193.93701850456728,
        "distanceKm": 32.178804485738276,
        "gradePct": -2.95881007990587,
        "smoothedEle": 198.06842245363023,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93949903687129,
        "lng": 120.64375533508976,
        "ele": 194.62403700913453,
        "distanceKm": 32.227085993983515,
        "gradePct": -2.910319213299347,
        "smoothedEle": 197.01775561238352,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939074055306936,
        "lng": 120.64385200263463,
        "ele": 195.3110555137018,
        "distanceKm": 32.27536750859918,
        "gradePct": -2.373208318645732,
        "smoothedEle": 196.55352898047536,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93864907374258,
        "lng": 120.64394867017951,
        "ele": 195.99807401826905,
        "distanceKm": 32.32364902958617,
        "gradePct": -1.4691986995720687,
        "smoothedEle": 196.7921516836489,
        "gradeBand": "descent"
      },
      {
        "lat": 22.938224092178228,
        "lng": 120.64404533772439,
        "ele": 196.68509252283633,
        "distanceKm": 32.3719305569441,
        "gradePct": -0.29625027862209247,
        "smoothedEle": 197.68074802158088,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93779911061387,
        "lng": 120.64414200526927,
        "ele": 197.37211102740358,
        "distanceKm": 32.42021209067325,
        "gradePct": 0.8798812938476477,
        "smoothedEle": 198.9271030523446,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.937374,
        "lng": 120.644238,
        "ele": 197.75,
        "distanceKm": 32.46849360090174,
        "gradePct": 1.7001074381298948,
        "smoothedEle": 200.0198364605782,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93698,
        "lng": 120.644339,
        "ele": 200.75,
        "distanceKm": 32.5135087482819,
        "gradePct": 2.1726886287544973,
        "smoothedEle": 201.08741243102529,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93647237104454,
        "lng": 120.64447304226597,
        "ele": 204.09034078299922,
        "distanceKm": 32.57159960138781,
        "gradePct": 2.2912646358703443,
        "smoothedEle": 202.25718622886214,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935969,
        "lng": 120.644629,
        "ele": 207,
        "distanceKm": 32.62980587612213,
        "gradePct": 1.889058546489851,
        "smoothedEle": 202.922351917338,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935555,
        "lng": 120.644694,
        "ele": 205.25,
        "distanceKm": 32.67631937357356,
        "gradePct": 1.4213445499381063,
        "smoothedEle": 203.04812101755832,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935202913332354,
        "lng": 120.64464071840322,
        "ele": 205.73375462370356,
        "distanceKm": 32.7158480640356,
        "gradePct": 0.8862050978303431,
        "smoothedEle": 202.90692935910994,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.934861,
        "lng": 120.644527,
        "ele": 207.25,
        "distanceKm": 32.755610656467624,
        "gradePct": 0.2873107168819717,
        "smoothedEle": 202.50983874974762,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.934327,
        "lng": 120.644294,
        "ele": 204.5,
        "distanceKm": 32.8196035154735,
        "gradePct": -0.8055644389297952,
        "smoothedEle": 201.1946331997077,
        "gradeBand": "descent"
      },
      {
        "lat": 22.933725,
        "lng": 120.644311,
        "ele": 199.25,
        "distanceKm": 32.8865655876816,
        "gradePct": -1.9176381409990184,
        "smoothedEle": 199.1762465091626,
        "gradeBand": "descent"
      },
      {
        "lat": 22.933211,
        "lng": 120.644379,
        "ele": 196,
        "distanceKm": 32.94414251492613,
        "gradePct": -2.636280012663482,
        "smoothedEle": 197.35180574679097,
        "gradeBand": "descent"
      },
      {
        "lat": 22.932895,
        "lng": 120.644395,
        "ele": 194,
        "distanceKm": 32.97931834194218,
        "gradePct": -2.886708204007464,
        "smoothedEle": 196.24917298298976,
        "gradeBand": "descent"
      },
      {
        "lat": 22.932487894908654,
        "lng": 120.6443237074509,
        "ele": 192.33408166771883,
        "distanceKm": 33.02517138358571,
        "gradePct": -3.2044501792974502,
        "smoothedEle": 194.6179048375609,
        "gradeBand": "descent"
      },
      {
        "lat": 22.932081,
        "lng": 120.644251,
        "ele": 191,
        "distanceKm": 33.07102466117805,
        "gradePct": -3.369720274412666,
        "smoothedEle": 192.90524425949903,
        "gradeBand": "descent"
      },
      {
        "lat": 22.931701500000003,
        "lng": 120.644175,
        "ele": 190.37500000000006,
        "distanceKm": 33.113934921408145,
        "gradePct": -3.428912007867603,
        "smoothedEle": 191.4511700977309,
        "gradeBand": "descent"
      },
      {
        "lat": 22.931322,
        "lng": 120.644099,
        "ele": 189.75,
        "distanceKm": 33.15684518559464,
        "gradePct": -3.3214960242589298,
        "smoothedEle": 190.31063170640448,
        "gradeBand": "descent"
      },
      {
        "lat": 22.930986,
        "lng": 120.64402,
        "ele": 190.25,
        "distanceKm": 33.19507261967658,
        "gradePct": -3.1096407633593786,
        "smoothedEle": 189.46941715617643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.930518,
        "lng": 120.643908,
        "ele": 189.25,
        "distanceKm": 33.24836091610795,
        "gradePct": -2.63329341930781,
        "smoothedEle": 188.485168396127,
        "gradeBand": "descent"
      },
      {
        "lat": 22.930034,
        "lng": 120.643758,
        "ele": 186.5,
        "distanceKm": 33.30432867956499,
        "gradePct": -2.0530866513580994,
        "smoothedEle": 187.67051773058884,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9295862,
        "lng": 120.64358560000001,
        "ele": 186.14999999999998,
        "distanceKm": 33.35715922980579,
        "gradePct": -1.6697390592417538,
        "smoothedEle": 186.964242881875,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9291384,
        "lng": 120.6434132,
        "ele": 185.8,
        "distanceKm": 33.409989799554175,
        "gradePct": -1.5170809810003687,
        "smoothedEle": 186.15973098377302,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9286906,
        "lng": 120.6432408,
        "ele": 185.45,
        "distanceKm": 33.462820388808865,
        "gradePct": -1.5220442790613402,
        "smoothedEle": 185.23061191269275,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9282428,
        "lng": 120.64306839999999,
        "ele": 185.10000000000002,
        "distanceKm": 33.51565099757053,
        "gradePct": -1.5828765513144334,
        "smoothedEle": 184.35340015418473,
        "gradeBand": "descent"
      },
      {
        "lat": 22.927795,
        "lng": 120.642896,
        "ele": 184.75,
        "distanceKm": 33.568481625837904,
        "gradePct": -1.4995652201286802,
        "smoothedEle": 183.79269328418204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.927449,
        "lng": 120.642768,
        "ele": 183,
        "distanceKm": 33.609126965862416,
        "gradePct": -1.3825663302864883,
        "smoothedEle": 183.4077376850205,
        "gradeBand": "descent"
      },
      {
        "lat": 22.927125811529738,
        "lng": 120.64265115040948,
        "ele": 182.12275903509266,
        "distanceKm": 33.647003954125964,
        "gradePct": -1.2313781838067366,
        "smoothedEle": 183.04601543895316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.926809,
        "lng": 120.642515,
        "ele": 181.25,
        "distanceKm": 33.68489087838022,
        "gradePct": -1.0943161545052917,
        "smoothedEle": 182.67551604360162,
        "gradeBand": "descent"
      },
      {
        "lat": 22.926489,
        "lng": 120.642393,
        "ele": 181,
        "distanceKm": 33.72260311851569,
        "gradePct": -0.9816532051894459,
        "smoothedEle": 182.31630885608288,
        "gradeBand": "descent"
      },
      {
        "lat": 22.925903,
        "lng": 120.642151,
        "ele": 181.75,
        "distanceKm": 33.79231748432366,
        "gradePct": -0.9493648390113244,
        "smoothedEle": 181.6682120887805,
        "gradeBand": "descent"
      },
      {
        "lat": 22.925423,
        "lng": 120.641909,
        "ele": 181.5,
        "distanceKm": 33.85116454039073,
        "gradePct": -0.9078489803138736,
        "smoothedEle": 181.18963075788704,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9250895,
        "lng": 120.64173,
        "ele": 181.125,
        "distanceKm": 33.89253173365177,
        "gradePct": -0.8129638424694744,
        "smoothedEle": 180.9768095971128,
        "gradeBand": "descent"
      },
      {
        "lat": 22.924756,
        "lng": 120.641551,
        "ele": 180.75,
        "distanceKm": 33.93389894691074,
        "gradePct": -0.6901966440897711,
        "smoothedEle": 180.83090435849212,
        "gradeBand": "descent"
      },
      {
        "lat": 22.924357861175572,
        "lng": 120.64133813114893,
        "ele": 180.61984720787183,
        "distanceKm": 33.98324658450916,
        "gradePct": -0.5237375477002569,
        "smoothedEle": 180.70506424470284,
        "gradeBand": "descent"
      },
      {
        "lat": 22.923960688940458,
        "lng": 120.64112310491915,
        "ele": 180.44587776629749,
        "distanceKm": 34.03259604622062,
        "gradePct": -0.3808830967385378,
        "smoothedEle": 180.57887525630406,
        "gradeBand": "descent"
      },
      {
        "lat": 22.923563516705343,
        "lng": 120.64090807868936,
        "ele": 180.2719083247231,
        "distanceKm": 34.08194553674025,
        "gradePct": -0.2853342243981944,
        "smoothedEle": 180.4606037921965,
        "gradeBand": "descent"
      },
      {
        "lat": 22.92316634447023,
        "lng": 120.64069305245957,
        "ele": 180.09793888314871,
        "distanceKm": 34.131295056068296,
        "gradePct": -0.24414248677355144,
        "smoothedEle": 180.35180350165916,
        "gradeBand": "descent"
      },
      {
        "lat": 22.922769172235114,
        "lng": 120.64047802622979,
        "ele": 179.92396944157437,
        "distanceKm": 34.18064460420305,
        "gradePct": -0.2531155673411795,
        "smoothedEle": 180.20546835161932,
        "gradeBand": "descent"
      },
      {
        "lat": 22.922372,
        "lng": 120.640263,
        "ele": 179.75,
        "distanceKm": 34.22999418114477,
        "gradePct": -0.28870634436108433,
        "smoothedEle": 180.00811566389714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.921898,
        "lng": 120.640011,
        "ele": 180.5,
        "distanceKm": 34.288680200521476,
        "gradePct": -0.3809379683271121,
        "smoothedEle": 179.68388002346518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.921387,
        "lng": 120.639869,
        "ele": 180.5,
        "distanceKm": 34.34733245450103,
        "gradePct": -0.5166952461154393,
        "smoothedEle": 179.27085765796903,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920983,
        "lng": 120.63989633333334,
        "ele": 179.74999999999997,
        "distanceKm": 34.39234240274688,
        "gradePct": -0.5874216861563527,
        "smoothedEle": 178.98384459888342,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920579,
        "lng": 120.63992366666666,
        "ele": 179.00000000000003,
        "distanceKm": 34.437352351511734,
        "gradePct": -0.5807773982122402,
        "smoothedEle": 178.80590755503675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920175,
        "lng": 120.639951,
        "ele": 178.25,
        "distanceKm": 34.48236230079577,
        "gradePct": -0.49619980303408096,
        "smoothedEle": 178.72638631637443,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919843,
        "lng": 120.639958,
        "ele": 177.5,
        "distanceKm": 34.519286027902844,
        "gradePct": -0.3833006475825672,
        "smoothedEle": 178.7017560439131,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919417,
        "lng": 120.639916,
        "ele": 176.75,
        "distanceKm": 34.566850035897275,
        "gradePct": -0.22736326242384697,
        "smoothedEle": 178.6916741861395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919046,
        "lng": 120.639821,
        "ele": 176.75,
        "distanceKm": 34.609235244245255,
        "gradePct": -0.09562293773438887,
        "smoothedEle": 178.72581654834275,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9186,
        "lng": 120.639664,
        "ele": 178,
        "distanceKm": 34.66136983806878,
        "gradePct": 0.04805755630449869,
        "smoothedEle": 178.85958982088738,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.918102,
        "lng": 120.639505,
        "ele": 179,
        "distanceKm": 34.719089747455456,
        "gradePct": 0.2300816454069657,
        "smoothedEle": 179.16205026519577,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917718169626323,
        "lng": 120.63934233704117,
        "ele": 179.83696692640666,
        "distanceKm": 34.764905989546435,
        "gradePct": 0.38302452812505716,
        "smoothedEle": 179.45813531024598,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917342,
        "lng": 120.639159,
        "ele": 180.75,
        "distanceKm": 34.81075548037817,
        "gradePct": 0.5082007300875871,
        "smoothedEle": 179.74611881501946,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91692891355345,
        "lng": 120.63891830360575,
        "ele": 181.03886842037375,
        "distanceKm": 34.86288574635904,
        "gradePct": 0.5710594126758427,
        "smoothedEle": 180.009652218914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91651794268598,
        "lng": 120.63867308530392,
        "ele": 181.37992308217287,
        "distanceKm": 34.915030364383526,
        "gradePct": 0.47073261546744805,
        "smoothedEle": 180.08224375782407,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916106971818515,
        "lng": 120.63842786700208,
        "ele": 181.72097774397196,
        "distanceKm": 34.96717501908911,
        "gradePct": 0.22790563308009512,
        "smoothedEle": 179.92819849214789,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91569579293308,
        "lng": 120.63818306278995,
        "ele": 180.72618066893807,
        "distanceKm": 35.019319576944056,
        "gradePct": -0.0997334604895869,
        "smoothedEle": 179.5899458515297,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91528459469981,
        "lng": 120.63793829709246,
        "ele": 179.60713550170348,
        "distanceKm": 35.07146416121708,
        "gradePct": -0.44573223985093413,
        "smoothedEle": 179.1301299177062,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91487339646654,
        "lng": 120.63769353139497,
        "ele": 178.48809033446904,
        "distanceKm": 35.123608782053935,
        "gradePct": -0.7301193796331414,
        "smoothedEle": 178.59666271493197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91446219823327,
        "lng": 120.63744876569748,
        "ele": 177.3690451672346,
        "distanceKm": 35.17575343945409,
        "gradePct": -0.9659715649327444,
        "smoothedEle": 177.94060864745438,
        "gradeBand": "descent"
      },
      {
        "lat": 22.914051,
        "lng": 120.637204,
        "ele": 176.25,
        "distanceKm": 35.22789813341701,
        "gradePct": -1.1987341826706313,
        "smoothedEle": 177.11683095432974,
        "gradeBand": "descent"
      },
      {
        "lat": 22.913669333333335,
        "lng": 120.63697466666666,
        "ele": 176.08333333333334,
        "distanceKm": 35.27640398205304,
        "gradePct": -1.38666859199642,
        "smoothedEle": 176.30625573946017,
        "gradeBand": "descent"
      },
      {
        "lat": 22.913287666666665,
        "lng": 120.63674533333334,
        "ele": 175.91666666666666,
        "distanceKm": 35.3249098627152,
        "gradePct": -1.5421392753588414,
        "smoothedEle": 175.49601471617302,
        "gradeBand": "descent"
      },
      {
        "lat": 22.912906,
        "lng": 120.636516,
        "ele": 175.75,
        "distanceKm": 35.37341577540377,
        "gradePct": -1.627437814120048,
        "smoothedEle": 174.71514416284955,
        "gradeBand": "descent"
      },
      {
        "lat": 22.912510942674437,
        "lng": 120.63628815634947,
        "ele": 174.30491453106305,
        "distanceKm": 35.423157931034076,
        "gradePct": -1.6125596757578704,
        "smoothedEle": 173.9665969398865,
        "gradeBand": "descent"
      },
      {
        "lat": 22.912117295116293,
        "lng": 120.63605743756631,
        "ele": 173.28660968737535,
        "distanceKm": 35.47290095136134,
        "gradePct": -1.5467005587720657,
        "smoothedEle": 173.27139333292646,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911723647558144,
        "lng": 120.63582671878316,
        "ele": 172.26830484368767,
        "distanceKm": 35.52264400428719,
        "gradePct": -1.4696396255871709,
        "smoothedEle": 172.59458430778386,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91133,
        "lng": 120.635596,
        "ele": 171.25,
        "distanceKm": 35.57238708981184,
        "gradePct": -1.4247667091656322,
        "smoothedEle": 171.88217099960562,
        "gradeBand": "descent"
      },
      {
        "lat": 22.910953954237634,
        "lng": 120.63536850193262,
        "ele": 170.73237059139538,
        "distanceKm": 35.62025549387096,
        "gradePct": -1.4238781180752877,
        "smoothedEle": 171.16251816907186,
        "gradeBand": "descent"
      },
      {
        "lat": 22.910576928271585,
        "lng": 120.63514291342321,
        "ele": 170.22287604268246,
        "distanceKm": 35.668124457753244,
        "gradePct": -1.4409050183720575,
        "smoothedEle": 170.4563391056029,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91019990230554,
        "lng": 120.63491732491379,
        "ele": 169.71338149396956,
        "distanceKm": 35.71599345265222,
        "gradePct": -1.4474719449426565,
        "smoothedEle": 169.79012849822269,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90982287633949,
        "lng": 120.63469173640438,
        "ele": 169.20388694525667,
        "distanceKm": 35.76386247856676,
        "gradePct": -1.4366265254630912,
        "smoothedEle": 169.13100620343866,
        "gradeBand": "descent"
      },
      {
        "lat": 22.909445850373444,
        "lng": 120.63446614789497,
        "ele": 168.69439239654378,
        "distanceKm": 35.81173153549645,
        "gradePct": -1.4058474963083483,
        "smoothedEle": 168.47897223201988,
        "gradeBand": "descent"
      },
      {
        "lat": 22.909068824407395,
        "lng": 120.63424055938555,
        "ele": 168.18489784783088,
        "distanceKm": 35.85960062344227,
        "gradePct": -1.3797236114099665,
        "smoothedEle": 167.82263835487478,
        "gradeBand": "descent"
      },
      {
        "lat": 22.908691773915276,
        "lng": 120.63401501971667,
        "ele": 167.61758451552535,
        "distanceKm": 35.907469716557046,
        "gradePct": -1.3718347321705497,
        "smoothedEle": 167.16508703961054,
        "gradeBand": "descent"
      },
      {
        "lat": 22.908314580436457,
        "lng": 120.63378976478751,
        "ele": 166.71318838664402,
        "distanceKm": 35.95533870342274,
        "gradePct": -1.3640006356645191,
        "smoothedEle": 166.52037122745014,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907937386957638,
        "lng": 120.63356450985835,
        "ele": 165.8087922577627,
        "distanceKm": 36.003207721224456,
        "gradePct": -1.3422757045899751,
        "smoothedEle": 165.91052539702378,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90756019347882,
        "lng": 120.63333925492917,
        "ele": 164.90439612888133,
        "distanceKm": 36.05107676996248,
        "gradePct": -1.298005787980297,
        "smoothedEle": 165.3434974786221,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907183,
        "lng": 120.633114,
        "ele": 164,
        "distanceKm": 36.09894584963499,
        "gradePct": -1.2314435841159617,
        "smoothedEle": 164.81928752733856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906804880893798,
        "lng": 120.63289589356138,
        "ele": 163.61780413793568,
        "distanceKm": 36.1465572564837,
        "gradePct": -1.1484157763318288,
        "smoothedEle": 164.34181119181542,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906426749800243,
        "lng": 120.63267781173077,
        "ele": 163.24766848825945,
        "distanceKm": 36.19416868709358,
        "gradePct": -1.0932694825832088,
        "smoothedEle": 163.8391426963671,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906048312350183,
        "lng": 120.63246035879808,
        "ele": 163.18575136619458,
        "distanceKm": 36.24178006493558,
        "gradePct": -1.05141194563707,
        "smoothedEle": 163.3507967554152,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90566987490012,
        "lng": 120.6322429058654,
        "ele": 163.1238342441297,
        "distanceKm": 36.28939147185741,
        "gradePct": -0.992532308784533,
        "smoothedEle": 162.93885203453218,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90529143745006,
        "lng": 120.6320254529327,
        "ele": 163.06191712206487,
        "distanceKm": 36.33700290785863,
        "gradePct": -0.9505404509368709,
        "smoothedEle": 162.53654714711428,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904913,
        "lng": 120.631808,
        "ele": 163,
        "distanceKm": 36.38461437293786,
        "gradePct": -0.9032423847540954,
        "smoothedEle": 162.13352976919123,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904556,
        "lng": 120.631507,
        "ele": 161.75,
        "distanceKm": 36.434877262596856,
        "gradePct": -0.8499619436439496,
        "smoothedEle": 161.72167433735797,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904322,
        "lng": 120.631249,
        "ele": 161.25,
        "distanceKm": 36.47196333933364,
        "gradePct": -0.8305999981119095,
        "smoothedEle": 161.42844420455967,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904047,
        "lng": 120.63082,
        "ele": 161.25,
        "distanceKm": 36.52549766126747,
        "gradePct": -0.7973722132758241,
        "smoothedEle": 161.03901921565958,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903724,
        "lng": 120.630207,
        "ele": 159.75,
        "distanceKm": 36.59783275290303,
        "gradePct": -0.74324797219629,
        "smoothedEle": 160.53872207381048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903501,
        "lng": 120.629852,
        "ele": 159.5,
        "distanceKm": 36.64184492861451,
        "gradePct": -0.708556248711521,
        "smoothedEle": 160.24947028505972,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903132,
        "lng": 120.629549,
        "ele": 159.25,
        "distanceKm": 36.69329169776235,
        "gradePct": -0.6929591890123178,
        "smoothedEle": 159.88737684090628,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902831051968843,
        "lng": 120.62922647116773,
        "ele": 159.52051406950466,
        "distanceKm": 36.74031545261961,
        "gradePct": -0.6953117921546025,
        "smoothedEle": 159.54591012266613,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902559034645893,
        "lng": 120.62887398077848,
        "ele": 159.59700937966977,
        "distanceKm": 36.787416141142,
        "gradePct": -0.7336104569997739,
        "smoothedEle": 159.14354642821328,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902287017322948,
        "lng": 120.62852149038925,
        "ele": 159.67350468983489,
        "distanceKm": 36.834516885174764,
        "gradePct": -0.770759089384288,
        "smoothedEle": 158.75611263547935,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902015,
        "lng": 120.628169,
        "ele": 159.75,
        "distanceKm": 36.88161768472006,
        "gradePct": -0.7808719862784019,
        "smoothedEle": 158.4077970870087,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901662,
        "lng": 120.627883,
        "ele": 158.25,
        "distanceKm": 36.93059628101799,
        "gradePct": -0.7786352044229008,
        "smoothedEle": 158.0592162477635,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90131227666142,
        "lng": 120.62776239960013,
        "ele": 157.62438780566282,
        "distanceKm": 36.97139871152807,
        "gradePct": -0.7535791586863673,
        "smoothedEle": 157.77321906506404,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900957,
        "lng": 120.62766,
        "ele": 157,
        "distanceKm": 37.01227244411251,
        "gradePct": -0.7545530006864459,
        "smoothedEle": 157.42998141178728,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9005855,
        "lng": 120.62756350000001,
        "ele": 156.50000000000006,
        "distanceKm": 37.054747563592926,
        "gradePct": -0.8039704545262963,
        "smoothedEle": 156.9985636535876,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900214,
        "lng": 120.627467,
        "ele": 156,
        "distanceKm": 37.09722268937412,
        "gradePct": -0.9320685112902973,
        "smoothedEle": 156.43259919233515,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8996815,
        "lng": 120.627316,
        "ele": 155.875,
        "distanceKm": 37.15842088917336,
        "gradePct": -1.195006772892836,
        "smoothedEle": 155.4741711942301,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899149,
        "lng": 120.627165,
        "ele": 155.75,
        "distanceKm": 37.21961910431887,
        "gradePct": -1.3881645129956668,
        "smoothedEle": 154.5790327092593,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898658980969426,
        "lng": 120.6270345839762,
        "ele": 154.55132331073102,
        "distanceKm": 37.27572050609896,
        "gradePct": -1.43876706936343,
        "smoothedEle": 153.8415732475043,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898169,
        "lng": 120.626904,
        "ele": 153,
        "distanceKm": 37.33182190824522,
        "gradePct": -1.3341170133309341,
        "smoothedEle": 153.22250510790346,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897671,
        "lng": 120.626697,
        "ele": 151.5,
        "distanceKm": 37.39111777601325,
        "gradePct": -1.196812911645421,
        "smoothedEle": 152.6022921787582,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897315723550467,
        "lng": 120.62645879266285,
        "ele": 150.6970891917821,
        "distanceKm": 37.437550747303824,
        "gradePct": -1.1268402272905416,
        "smoothedEle": 152.0896387187509,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896972,
        "lng": 120.626201,
        "ele": 150.5,
        "distanceKm": 37.48400615058878,
        "gradePct": -1.0955777149373902,
        "smoothedEle": 151.55898733062787,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896632,
        "lng": 120.625977,
        "ele": 151,
        "distanceKm": 37.52823055828031,
        "gradePct": -1.1701298148803805,
        "smoothedEle": 150.921875331522,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896238,
        "lng": 120.625811,
        "ele": 151,
        "distanceKm": 37.57522554714404,
        "gradePct": -1.2436691305482945,
        "smoothedEle": 150.2811807761027,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89582269866984,
        "lng": 120.62570648281928,
        "ele": 150.63761343070277,
        "distanceKm": 37.62262981328468,
        "gradePct": -1.265095636360808,
        "smoothedEle": 149.7241853087774,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89540484933492,
        "lng": 120.62561424140964,
        "ele": 150.3188067153514,
        "distanceKm": 37.67004361967218,
        "gradePct": -1.1916200556668715,
        "smoothedEle": 149.335238600031,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894987,
        "lng": 120.625522,
        "ele": 150,
        "distanceKm": 37.717457431858776,
        "gradePct": -1.0318669293890248,
        "smoothedEle": 149.0133428303047,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894892,
        "lng": 120.625907,
        "ele": 147.5,
        "distanceKm": 37.75828519058999,
        "gradePct": -0.8991951885618916,
        "smoothedEle": 148.71374255948518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894703,
        "lng": 120.626294,
        "ele": 147,
        "distanceKm": 37.80315376384958,
        "gradePct": -0.8320285668860403,
        "smoothedEle": 148.28896984137714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894444,
        "lng": 120.626722,
        "ele": 146.75,
        "distanceKm": 37.85560911430411,
        "gradePct": -0.852765950127891,
        "smoothedEle": 147.74811637372989,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894264,
        "lng": 120.627265,
        "ele": 147.5,
        "distanceKm": 37.91472313647956,
        "gradePct": -0.9568201022166967,
        "smoothedEle": 147.11826595320488,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893934,
        "lng": 120.627762,
        "ele": 147,
        "distanceKm": 37.977479512340636,
        "gradePct": -1.0565066170794912,
        "smoothedEle": 146.41901585351394,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89371153485117,
        "lng": 120.62811697611812,
        "ele": 146.33990558140704,
        "distanceKm": 38.02145835564457,
        "gradePct": -1.0173768738014386,
        "smoothedEle": 146.06548221133133,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893477,
        "lng": 120.628463,
        "ele": 146,
        "distanceKm": 38.06546395794247,
        "gradePct": -0.9340378322533819,
        "smoothedEle": 145.77503893161767,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893141,
        "lng": 120.628395,
        "ele": 145.5,
        "distanceKm": 38.1034692965507,
        "gradePct": -0.8306137962327848,
        "smoothedEle": 145.57694621932956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892803,
        "lng": 120.6283145,
        "ele": 145.125,
        "distanceKm": 38.1419472285008,
        "gradePct": -0.7278856668351249,
        "smoothedEle": 145.35915573486122,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892465,
        "lng": 120.628234,
        "ele": 144.75,
        "distanceKm": 38.18042516485314,
        "gradePct": -0.6485600659891496,
        "smoothedEle": 145.0982164434302,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892383,
        "lng": 120.628234,
        "ele": 144.5,
        "distanceKm": 38.189543161432574,
        "gradePct": -0.6427479769678592,
        "smoothedEle": 145.03654359276607,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892255,
        "lng": 120.628401,
        "ele": 144.5,
        "distanceKm": 38.21179685005169,
        "gradePct": -0.6195216588975595,
        "smoothedEle": 144.90410503945125,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892227,
        "lng": 120.628684,
        "ele": 144.25,
        "distanceKm": 38.24095327349416,
        "gradePct": -0.5984150377507319,
        "smoothedEle": 144.73998288504552,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892192,
        "lng": 120.628756,
        "ele": 144,
        "distanceKm": 38.249292576261354,
        "gradePct": -0.5938278238556394,
        "smoothedEle": 144.69411671982596,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892135,
        "lng": 120.628794,
        "ele": 144,
        "distanceKm": 38.256730600259054,
        "gradePct": -0.5849429924732933,
        "smoothedEle": 144.66279435858297,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891964,
        "lng": 120.628825,
        "ele": 143.75,
        "distanceKm": 38.27600830741033,
        "gradePct": -0.5689310666902178,
        "smoothedEle": 144.5822171830386,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891884,
        "lng": 120.628676,
        "ele": 143.75,
        "distanceKm": 38.29367455131325,
        "gradePct": -0.5504659837215009,
        "smoothedEle": 144.52706675454303,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891903,
        "lng": 120.628346,
        "ele": 144.25,
        "distanceKm": 38.32754485097582,
        "gradePct": -0.4765619020334743,
        "smoothedEle": 144.4875514049367,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891926391484446,
        "lng": 120.6278951840139,
        "ele": 144.05210513815837,
        "distanceKm": 38.37379845445882,
        "gradePct": -0.2835550651525653,
        "smoothedEle": 144.57604555048383,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891976260989633,
        "lng": 120.62744345600926,
        "ele": 144.11807009210557,
        "distanceKm": 38.42040335367701,
        "gradePct": 0.003590051349973982,
        "smoothedEle": 144.86283894230525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892026130494816,
        "lng": 120.62699172800464,
        "ele": 144.1840350460528,
        "distanceKm": 38.467008236007864,
        "gradePct": 0.46919522581718137,
        "smoothedEle": 145.55822623358713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892076,
        "lng": 120.62654,
        "ele": 144.25,
        "distanceKm": 38.51361310145428,
        "gradePct": 1.2403243809508773,
        "smoothedEle": 146.98445387461362,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892083333333332,
        "lng": 120.62610833333333,
        "ele": 145.4166666666666,
        "distanceKm": 38.557839372316565,
        "gradePct": 1.9441055238954028,
        "smoothedEle": 148.43372307803958,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892090666666668,
        "lng": 120.62567666666668,
        "ele": 146.5833333333334,
        "distanceKm": 38.60206564078802,
        "gradePct": 2.5037876577906744,
        "smoothedEle": 149.7575691500567,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892098,
        "lng": 120.625245,
        "ele": 147.75,
        "distanceKm": 38.64629190687154,
        "gradePct": 2.7693913251050932,
        "smoothedEle": 150.78790238501588,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892007,
        "lng": 120.625084,
        "ele": 149,
        "distanceKm": 38.66564102844931,
        "gradePct": 2.811460814994663,
        "smoothedEle": 151.16074788157428,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89182,
        "lng": 120.624996,
        "ele": 149.75,
        "distanceKm": 38.688304431718045,
        "gradePct": 2.638385615846294,
        "smoothedEle": 151.48671532090768,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891582,
        "lng": 120.62481,
        "ele": 158.75,
        "distanceKm": 38.720914207392035,
        "gradePct": 2.3168906124111386,
        "smoothedEle": 151.85748809952452,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891241,
        "lng": 120.624737,
        "ele": 160.25,
        "distanceKm": 38.75956208373344,
        "gradePct": 1.7675462323014022,
        "smoothedEle": 152.02038228840848,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890698,
        "lng": 120.624635,
        "ele": 160,
        "distanceKm": 38.82083842554312,
        "gradePct": 1.1857813915318731,
        "smoothedEle": 152.566478916232,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890349,
        "lng": 120.6245795,
        "ele": 156.875,
        "distanceKm": 38.86005975529211,
        "gradePct": 0.8886397054032089,
        "smoothedEle": 152.83047964204633,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89,
        "lng": 120.624524,
        "ele": 153.75,
        "distanceKm": 38.89928108716059,
        "gradePct": 0.6371632049892834,
        "smoothedEle": 152.88584617845555,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889596,
        "lng": 120.624409,
        "ele": 150.25,
        "distanceKm": 38.94572286650857,
        "gradePct": 0.4736067024350565,
        "smoothedEle": 152.90926575957874,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889273,
        "lng": 120.624161,
        "ele": 146.25,
        "distanceKm": 38.98971571439759,
        "gradePct": 0.03526098099372582,
        "smoothedEle": 152.3596343268987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889018,
        "lng": 120.623923,
        "ele": 148.75,
        "distanceKm": 39.027110969005136,
        "gradePct": -0.5388530810817039,
        "smoothedEle": 151.53099355681215,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888733,
        "lng": 120.623629,
        "ele": 150.5,
        "distanceKm": 39.07082988680242,
        "gradePct": -1.1199160368326186,
        "smoothedEle": 150.60585115403177,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888373,
        "lng": 120.623295,
        "ele": 148,
        "distanceKm": 39.12348993861881,
        "gradePct": -1.451760776798772,
        "smoothedEle": 149.99453262309973,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888058500000003,
        "lng": 120.6229525,
        "ele": 149.3749999999999,
        "distanceKm": 39.173027512875386,
        "gradePct": -1.3464583822504843,
        "smoothedEle": 149.87521418290845,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887744,
        "lng": 120.62261,
        "ele": 150.75,
        "distanceKm": 39.22256514471788,
        "gradePct": -0.7922854712693267,
        "smoothedEle": 150.04715345238654,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887468,
        "lng": 120.622154,
        "ele": 148.5,
        "distanceKm": 39.278457581719636,
        "gradePct": 0.04798174968708156,
        "smoothedEle": 150.61326648282218,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887337,
        "lng": 120.621777,
        "ele": 150.5,
        "distanceKm": 39.31973351719833,
        "gradePct": 0.4814322091686096,
        "smoothedEle": 151.00100448094992,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887197,
        "lng": 120.621406,
        "ele": 153.25,
        "distanceKm": 39.36080375919495,
        "gradePct": 0.738714378322289,
        "smoothedEle": 151.3820856251169,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886913,
        "lng": 120.620969,
        "ele": 152.75,
        "distanceKm": 39.41558806270939,
        "gradePct": 0.7902112902408223,
        "smoothedEle": 151.60335940524573,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886453,
        "lng": 120.620609,
        "ele": 150.5,
        "distanceKm": 39.47864634945844,
        "gradePct": 0.14768979972944654,
        "smoothedEle": 150.9104193291937,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886148,
        "lng": 120.620388,
        "ele": 153.75,
        "distanceKm": 39.51942311674635,
        "gradePct": -0.4028703801083054,
        "smoothedEle": 150.19234788009945,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885836,
        "lng": 120.62026,
        "ele": 154.5,
        "distanceKm": 39.55651130982133,
        "gradePct": -0.9328518636158957,
        "smoothedEle": 149.47655326676298,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885425,
        "lng": 120.620233,
        "ele": 154.25,
        "distanceKm": 39.602296111657886,
        "gradePct": -1.7090554427765494,
        "smoothedEle": 148.1315623346765,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884801,
        "lng": 120.620386,
        "ele": 146.75,
        "distanceKm": 39.67343010214019,
        "gradePct": -2.691998257786726,
        "smoothedEle": 145.58374354020128,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884431,
        "lng": 120.620401,
        "ele": 142.75,
        "distanceKm": 39.7146009683268,
        "gradePct": -2.924985275633234,
        "smoothedEle": 144.42729448469592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88387,
        "lng": 120.620174,
        "ele": 139.25,
        "distanceKm": 39.78117496134827,
        "gradePct": -3.1253837157901336,
        "smoothedEle": 142.50125746932247,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883472,
        "lng": 120.619788,
        "ele": 136.25,
        "distanceKm": 39.84052333305846,
        "gradePct": -3.1414411438012007,
        "smoothedEle": 140.47948885613184,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883205,
        "lng": 120.619488,
        "ele": 134.75,
        "distanceKm": 39.88325469053899,
        "gradePct": -3.14462430574447,
        "smoothedEle": 139.0185319231485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88281,
        "lng": 120.618911,
        "ele": 137.75,
        "distanceKm": 39.95689685982157,
        "gradePct": -2.847575894476608,
        "smoothedEle": 137.5084899010114,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882668,
        "lng": 120.6184655,
        "ele": 137.5625,
        "distanceKm": 40.005190003765804,
        "gradePct": -2.4884959276710177,
        "smoothedEle": 136.70616635354398,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882526000000002,
        "lng": 120.61802,
        "ele": 137.375,
        "distanceKm": 40.053483192825425,
        "gradePct": -2.043487157437809,
        "smoothedEle": 135.94942548222812,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882384000000002,
        "lng": 120.6175745,
        "ele": 137.1875,
        "distanceKm": 40.10177642700043,
        "gradePct": -1.7410337769942892,
        "smoothedEle": 135.1566738136644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882242,
        "lng": 120.617129,
        "ele": 137,
        "distanceKm": 40.15006970629044,
        "gradePct": -1.5907196082749864,
        "smoothedEle": 134.4670423335943,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882126,
        "lng": 120.616742,
        "ele": 135.5,
        "distanceKm": 40.19176129839883,
        "gradePct": -1.5843779831491163,
        "smoothedEle": 133.76050968557195,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881908,
        "lng": 120.616089,
        "ele": 132.75,
        "distanceKm": 40.26291426085134,
        "gradePct": -1.7048162309638186,
        "smoothedEle": 132.38497847864465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881643,
        "lng": 120.615708,
        "ele": 128.75,
        "distanceKm": 40.311819771414314,
        "gradePct": -1.7757061792645776,
        "smoothedEle": 131.46184177904726,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881385205625346,
        "lng": 120.61540428142521,
        "ele": 128.10763506404757,
        "distanceKm": 40.354126064645634,
        "gradePct": -1.8598828942319463,
        "smoothedEle": 130.67853487648478,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881132,
        "lng": 120.615096,
        "ele": 127.75,
        "distanceKm": 40.39643611834719,
        "gradePct": -1.904322395468769,
        "smoothedEle": 129.86149113500318,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880817189030903,
        "lng": 120.61460123861863,
        "ele": 128,
        "distanceKm": 40.45803535522479,
        "gradePct": -1.966360327877752,
        "smoothedEle": 128.54657697298012,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880526,
        "lng": 120.614087,
        "ele": 128,
        "distanceKm": 40.51987174876392,
        "gradePct": -2.0023977232512493,
        "smoothedEle": 127.30796285215717,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880196,
        "lng": 120.613467,
        "ele": 128,
        "distanceKm": 40.59322591869427,
        "gradePct": -1.7972627780130024,
        "smoothedEle": 126.3289573115763,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880026,
        "lng": 120.613086,
        "ele": 127.25,
        "distanceKm": 40.636594452528534,
        "gradePct": -1.6145115617090848,
        "smoothedEle": 125.77523722407977,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87987,
        "lng": 120.612777,
        "ele": 125.5,
        "distanceKm": 40.67269150962151,
        "gradePct": -1.4446636814486178,
        "smoothedEle": 125.36367945254692,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879686,
        "lng": 120.612344,
        "ele": 123.75,
        "distanceKm": 40.721541891098816,
        "gradePct": -1.2083511954742263,
        "smoothedEle": 124.86897026828615,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879506,
        "lng": 120.611814,
        "ele": 123.25,
        "distanceKm": 40.7794102005952,
        "gradePct": -1.081191439570225,
        "smoothedEle": 124.35096292158292,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879414,
        "lng": 120.611467,
        "ele": 122.75,
        "distanceKm": 40.81640189954175,
        "gradePct": -1.0194628405679675,
        "smoothedEle": 123.99412570492011,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879323,
        "lng": 120.610863,
        "ele": 121.5,
        "distanceKm": 40.8791016922372,
        "gradePct": -0.9998395520698224,
        "smoothedEle": 123.29908424914929,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879277,
        "lng": 120.610324,
        "ele": 122.75,
        "distanceKm": 40.93455697330236,
        "gradePct": -1.0102748921635578,
        "smoothedEle": 122.73191616133316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879254999999997,
        "lng": 120.609914,
        "ele": 123.25000000000004,
        "distanceKm": 40.976631393557845,
        "gradePct": -0.9926257931733958,
        "smoothedEle": 122.39058578677874,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879233,
        "lng": 120.609504,
        "ele": 123.75,
        "distanceKm": 41.01870582060769,
        "gradePct": -0.9485150985898166,
        "smoothedEle": 122.07155601896689,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879186213944386,
        "lng": 120.60901789288216,
        "ele": 122.81427888770938,
        "distanceKm": 41.06877702219929,
        "gradePct": -0.8521762620688612,
        "smoothedEle": 121.7091830395216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87913942788877,
        "lng": 120.60853178576433,
        "ele": 121.8785577754186,
        "distanceKm": 41.118848240858384,
        "gradePct": -0.7453539859901462,
        "smoothedEle": 121.40186902401342,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879092641833157,
        "lng": 120.6080456786465,
        "ele": 120.94283666312784,
        "distanceKm": 41.16891947658341,
        "gradePct": -0.6716323921703211,
        "smoothedEle": 121.10988422953504,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87904585577754,
        "lng": 120.60755957152867,
        "ele": 120.00711555083721,
        "distanceKm": 41.21899072937732,
        "gradePct": -0.6646097611975795,
        "smoothedEle": 120.74027456802924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878999320554932,
        "lng": 120.6070734365606,
        "ele": 119.55532112677366,
        "distanceKm": 41.26906194687488,
        "gradePct": -0.6470250293966849,
        "smoothedEle": 120.41338424465756,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878952880369955,
        "lng": 120.6065872910404,
        "ele": 119.28688075118244,
        "distanceKm": 41.31913316561262,
        "gradePct": -0.34356527770151724,
        "smoothedEle": 120.713076961867,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878906440184977,
        "lng": 120.6061011455202,
        "ele": 119.0184403755912,
        "distanceKm": 41.369204401294176,
        "gradePct": 0.3037651492056269,
        "smoothedEle": 121.71531130663621,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87886,
        "lng": 120.605615,
        "ele": 118.75,
        "distanceKm": 41.41927565391952,
        "gradePct": 1.2054107837349164,
        "smoothedEle": 123.14923600346336,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8788135,
        "lng": 120.605225,
        "ele": 119.49999999999993,
        "distanceKm": 41.459563262444924,
        "gradePct": 2.0660544528178724,
        "smoothedEle": 124.60750538367006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878767,
        "lng": 120.604835,
        "ele": 120.25,
        "distanceKm": 41.49985088454183,
        "gradePct": 2.9238078405451953,
        "smoothedEle": 126.4452818470196,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878751,
        "lng": 120.604483,
        "ele": 125,
        "distanceKm": 41.535956201296365,
        "gradePct": 3.39969725004847,
        "smoothedEle": 127.84920419715665,
        "gradeBand": "hard"
      },
      {
        "lat": 22.87869,
        "lng": 120.604056,
        "ele": 130.75,
        "distanceKm": 41.58022395808603,
        "gradePct": 3.624058388041851,
        "smoothedEle": 129.2790026650089,
        "gradeBand": "hard"
      },
      {
        "lat": 22.878578,
        "lng": 120.603706,
        "ele": 134.75,
        "distanceKm": 41.61818174689225,
        "gradePct": 3.588973550495949,
        "smoothedEle": 130.29585614097434,
        "gradeBand": "hard"
      },
      {
        "lat": 22.878264,
        "lng": 120.603406,
        "ele": 136.5,
        "distanceKm": 41.66469701890366,
        "gradePct": 3.5226719840516547,
        "smoothedEle": 131.88703286267253,
        "gradeBand": "hard"
      },
      {
        "lat": 22.87772,
        "lng": 120.60329,
        "ele": 142.75,
        "distanceKm": 41.726343458150446,
        "gradePct": 3.5015749089462886,
        "smoothedEle": 134.47857125500772,
        "gradeBand": "hard"
      },
      {
        "lat": 22.877161,
        "lng": 120.603275,
        "ele": 138,
        "distanceKm": 41.78852050121321,
        "gradePct": 3.4764414405166733,
        "smoothedEle": 136.45414213639432,
        "gradeBand": "hard"
      },
      {
        "lat": 22.876786,
        "lng": 120.603118,
        "ele": 132.25,
        "distanceKm": 41.83321328995829,
        "gradePct": 3.0110175651930717,
        "smoothedEle": 136.83208457570186,
        "gradeBand": "hard"
      },
      {
        "lat": 22.876628,
        "lng": 120.602878,
        "ele": 132.75,
        "distanceKm": 41.86343281845938,
        "gradePct": 2.346570050958088,
        "smoothedEle": 136.53692767693337,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87658,
        "lng": 120.602577,
        "ele": 137,
        "distanceKm": 41.89472844412366,
        "gradePct": 1.48057314027448,
        "smoothedEle": 136.11066230340208,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.876612,
        "lng": 120.601896,
        "ele": 141.25,
        "distanceKm": 41.964586858111396,
        "gradePct": -0.37214240390957265,
        "smoothedEle": 134.94940610625306,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876755,
        "lng": 120.6013,
        "ele": 136,
        "distanceKm": 42.027682859273135,
        "gradePct": -1.446260500441803,
        "smoothedEle": 133.89279575114332,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877203,
        "lng": 120.600783,
        "ele": 127.75,
        "distanceKm": 42.10039438791465,
        "gradePct": -0.8679019432264586,
        "smoothedEle": 134.28067345103887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877553,
        "lng": 120.60037,
        "ele": 128.5,
        "distanceKm": 42.15788236692129,
        "gradePct": -0.008284544369999362,
        "smoothedEle": 135.04428575358955,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877701,
        "lng": 120.599792,
        "ele": 132.25,
        "distanceKm": 42.21934170357907,
        "gradePct": 0.5468974570638558,
        "smoothedEle": 135.12627228245222,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877657,
        "lng": 120.599398,
        "ele": 133.25,
        "distanceKm": 42.26000170179786,
        "gradePct": 0.43702763463648703,
        "smoothedEle": 134.93925501928672,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877521736947585,
        "lng": 120.59905400719582,
        "ele": 135.62222494661629,
        "distanceKm": 42.298318520628996,
        "gradePct": 0.5270510948368138,
        "smoothedEle": 135.32370198233824,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877378,
        "lng": 120.598714,
        "ele": 140,
        "distanceKm": 42.33664345187906,
        "gradePct": 0.7760111874840621,
        "smoothedEle": 136.31419181312413,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877215,
        "lng": 120.598372,
        "ele": 141.3750000000001,
        "distanceKm": 42.376091201253566,
        "gradePct": 1.2979076701376429,
        "smoothedEle": 137.66439161183533,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877052,
        "lng": 120.59803,
        "ele": 142.75,
        "distanceKm": 42.41553898798445,
        "gradePct": 1.9521293304766238,
        "smoothedEle": 139.02545813480052,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.876752,
        "lng": 120.597504,
        "ele": 136.25,
        "distanceKm": 42.478916511976976,
        "gradePct": 2.958909991463117,
        "smoothedEle": 141.0468543615618,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.876526,
        "lng": 120.597121,
        "ele": 141,
        "distanceKm": 42.52551197237377,
        "gradePct": 3.2527000700715085,
        "smoothedEle": 142.53190409860014,
        "gradeBand": "hard"
      },
      {
        "lat": 22.876266203827846,
        "lng": 120.59678174017999,
        "ele": 144.05624620760983,
        "distanceKm": 42.570706655362116,
        "gradePct": 3.1891267020931453,
        "smoothedEle": 143.85834520439573,
        "gradeBand": "hard"
      },
      {
        "lat": 22.875997101913924,
        "lng": 120.59645087009,
        "ele": 145.02812310380483,
        "distanceKm": 42.61592179510933,
        "gradePct": 2.839265582059442,
        "smoothedEle": 144.71619875156233,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875728,
        "lng": 120.59612,
        "ele": 146,
        "distanceKm": 42.6611369852158,
        "gradePct": 2.6132661365813785,
        "smoothedEle": 145.7063170169073,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875367,
        "lng": 120.59581,
        "ele": 147.25,
        "distanceKm": 42.712322868759166,
        "gradePct": 2.5692863156700616,
        "smoothedEle": 147.2501251616148,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875015,
        "lng": 120.595557,
        "ele": 149.25,
        "distanceKm": 42.759267843735806,
        "gradePct": 2.8622926554719488,
        "smoothedEle": 149.2472071749081,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874762,
        "lng": 120.59534,
        "ele": 150.75,
        "distanceKm": 42.79512419578237,
        "gradePct": 3.1488430904971496,
        "smoothedEle": 150.61929819778317,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874545,
        "lng": 120.595099,
        "ele": 149.25,
        "distanceKm": 42.829647346817616,
        "gradePct": 3.419760090952431,
        "smoothedEle": 151.85627986036616,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874413,
        "lng": 120.594795,
        "ele": 150.5,
        "distanceKm": 42.864077643131914,
        "gradePct": 3.6472690745382628,
        "smoothedEle": 153.0895478157425,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874343,
        "lng": 120.594423,
        "ele": 154.25,
        "distanceKm": 42.90297599528818,
        "gradePct": 3.6658699759148634,
        "smoothedEle": 154.29995575888915,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874233,
        "lng": 120.593944,
        "ele": 156.75,
        "distanceKm": 42.95355123059411,
        "gradePct": 3.2198957327173017,
        "smoothedEle": 155.44380870813117,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873915,
        "lng": 120.593524,
        "ele": 159.25,
        "distanceKm": 43.00924555524741,
        "gradePct": 2.283549147419943,
        "smoothedEle": 155.69237182179165,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87360766894204,
        "lng": 120.59332956878869,
        "ele": 161.21678970970484,
        "distanceKm": 43.0488010341303,
        "gradePct": 1.4041587690174082,
        "smoothedEle": 155.3506684264978,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87328,
        "lng": 120.593178,
        "ele": 162.75,
        "distanceKm": 43.08840726939826,
        "gradePct": 0.44532774221759375,
        "smoothedEle": 154.7372732338414,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.872966,
        "lng": 120.592979,
        "ele": 161.5,
        "distanceKm": 43.128839187311904,
        "gradePct": -0.7211966993067347,
        "smoothedEle": 153.4425065190956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872877,
        "lng": 120.592899,
        "ele": 160.5,
        "distanceKm": 43.141688882205415,
        "gradePct": -1.1830200136155442,
        "smoothedEle": 152.8094796238691,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872808,
        "lng": 120.592756,
        "ele": 159.25,
        "distanceKm": 43.158226925443,
        "gradePct": -1.7575874517739045,
        "smoothedEle": 151.9495013755145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872771,
        "lng": 120.592499,
        "ele": 157,
        "distanceKm": 43.18487653935744,
        "gradePct": -2.6829687163067084,
        "smoothedEle": 150.21767575884806,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872912,
        "lng": 120.592186,
        "ele": 150.75,
        "distanceKm": 43.22057155615462,
        "gradePct": -3.9528552026129384,
        "smoothedEle": 147.68882078678715,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87343,
        "lng": 120.591836,
        "ele": 145.75,
        "distanceKm": 43.28842028175762,
        "gradePct": -6.49463751209651,
        "smoothedEle": 141.74758150990598,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873649,
        "lng": 120.591554,
        "ele": 141,
        "distanceKm": 43.32620534456066,
        "gradePct": -7.751502231104343,
        "smoothedEle": 138.02384660698863,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87371,
        "lng": 120.591268,
        "ele": 135,
        "distanceKm": 43.356281215994024,
        "gradePct": -8.611659559491121,
        "smoothedEle": 134.8273591478791,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87364,
        "lng": 120.590977,
        "ele": 128.25,
        "distanceKm": 43.387093832124144,
        "gradePct": -9.21996872014601,
        "smoothedEle": 131.62065163417492,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873492,
        "lng": 120.590585,
        "ele": 122.25,
        "distanceKm": 43.430495736418365,
        "gradePct": -9.850277631924628,
        "smoothedEle": 127.11924508003625,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873266,
        "lng": 120.589956,
        "ele": 116.25,
        "distanceKm": 43.4996642403816,
        "gradePct": -10.038625260538467,
        "smoothedEle": 120.56223381843864,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873136,
        "lng": 120.589523,
        "ele": 112.25,
        "distanceKm": 43.546321507154694,
        "gradePct": -9.596194342710403,
        "smoothedEle": 116.69349621363524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873066,
        "lng": 120.588921,
        "ele": 109.5,
        "distanceKm": 43.60848658143696,
        "gradePct": -8.707321661913785,
        "smoothedEle": 111.98727013436849,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873055,
        "lng": 120.588344,
        "ele": 107.25,
        "distanceKm": 43.667613817757484,
        "gradePct": -7.577917299131371,
        "smoothedEle": 108.44470379586821,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872979,
        "lng": 120.587911,
        "ele": 105,
        "distanceKm": 43.712773145603904,
        "gradePct": -6.768452802239235,
        "smoothedEle": 105.93836110039189,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872761,
        "lng": 120.587492,
        "ele": 105.25,
        "distanceKm": 43.762071778845254,
        "gradePct": -6.099288966594164,
        "smoothedEle": 103.30253911511247,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872497,
        "lng": 120.587212,
        "ele": 103.75,
        "distanceKm": 43.803116428505845,
        "gradePct": -5.678678636736923,
        "smoothedEle": 101.03646194115998,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872197366992904,
        "lng": 120.58697448208511,
        "ele": 101.19639569840376,
        "distanceKm": 43.844374453186155,
        "gradePct": -5.588494239435233,
        "smoothedEle": 98.66008532753303,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871901,
        "lng": 120.586732,
        "ele": 99,
        "distanceKm": 43.885643939554896,
        "gradePct": -5.605951050493259,
        "smoothedEle": 96.23212993512533,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871534,
        "lng": 120.586371,
        "ele": 94.5,
        "distanceKm": 43.940718989971,
        "gradePct": -5.733326326066416,
        "smoothedEle": 92.97754388147723,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871253589948505,
        "lng": 120.58602350449036,
        "ele": 89.66857690135835,
        "distanceKm": 43.988044483005275,
        "gradePct": -5.836184487833906,
        "smoothedEle": 90.19621583530167,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87098079497425,
        "lng": 120.58566875224518,
        "ele": 85.70928845067948,
        "distanceKm": 44.03538486016808,
        "gradePct": -5.93322527255095,
        "smoothedEle": 87.31141668739893,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870708,
        "lng": 120.585314,
        "ele": 81.75,
        "distanceKm": 44.08272529337328,
        "gradePct": -5.9434931360391525,
        "smoothedEle": 84.51685267516969,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870395,
        "lng": 120.58486099999999,
        "ele": 78.87499999999982,
        "distanceKm": 44.14073688175649,
        "gradePct": -5.789227131421096,
        "smoothedEle": 81.3980381150674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870082,
        "lng": 120.584408,
        "ele": 76,
        "distanceKm": 44.19874855569859,
        "gradePct": -5.415439924349024,
        "smoothedEle": 78.71305770672052,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869819,
        "lng": 120.584016,
        "ele": 74.75,
        "distanceKm": 44.248429658473995,
        "gradePct": -4.836871812502056,
        "smoothedEle": 76.86762257015523,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869494,
        "lng": 120.583448,
        "ele": 73.75,
        "distanceKm": 44.316931651412894,
        "gradePct": -3.8562885596696876,
        "smoothedEle": 74.96527596151999,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8694,
        "lng": 120.582943,
        "ele": 73.25,
        "distanceKm": 44.369716321282965,
        "gradePct": -3.05461415012246,
        "smoothedEle": 73.94754137545434,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869379,
        "lng": 120.582576,
        "ele": 73.25,
        "distanceKm": 44.407389519038375,
        "gradePct": -2.5049537724579167,
        "smoothedEle": 73.382176260861,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869371,
        "lng": 120.58211,
        "ele": 72.75,
        "distanceKm": 44.45514155486022,
        "gradePct": -1.9239570277937414,
        "smoothedEle": 72.83331461885683,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86935175,
        "lng": 120.58156225,
        "ele": 72.31250000000001,
        "distanceKm": 44.511301763638045,
        "gradePct": -1.3859796384624603,
        "smoothedEle": 72.34966247040362,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869332500000002,
        "lng": 120.58101450000001,
        "ele": 71.87500000000003,
        "distanceKm": 44.56746198036276,
        "gradePct": -1.0126682836050092,
        "smoothedEle": 71.96567047221316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86931325,
        "lng": 120.58046675,
        "ele": 71.43749999999999,
        "distanceKm": 44.623622205035836,
        "gradePct": -0.7784423753061734,
        "smoothedEle": 71.63871310500653,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869294,
        "lng": 120.579919,
        "ele": 71,
        "distanceKm": 44.67978243765435,
        "gradePct": -0.649755385494769,
        "smoothedEle": 71.32159637637598,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869283833333334,
        "lng": 120.57944833333333,
        "ele": 70.875,
        "distanceKm": 44.728017587481666,
        "gradePct": -0.5763040957689032,
        "smoothedEle": 71.08276087023145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86927366666667,
        "lng": 120.57897766666667,
        "ele": 70.75,
        "distanceKm": 44.776252740915574,
        "gradePct": -0.517627266299996,
        "smoothedEle": 70.87923729952004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869263500000002,
        "lng": 120.578507,
        "ele": 70.625,
        "distanceKm": 44.82448789795898,
        "gradePct": -0.47209810591695645,
        "smoothedEle": 70.68962863514757,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869253333333333,
        "lng": 120.57803633333333,
        "ele": 70.5,
        "distanceKm": 44.87272305861044,
        "gradePct": -0.4194560208979266,
        "smoothedEle": 70.52254612083333,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869243166666667,
        "lng": 120.57756566666667,
        "ele": 70.375,
        "distanceKm": 44.92095822286847,
        "gradePct": -0.37067176808574415,
        "smoothedEle": 70.3763716552653,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869233,
        "lng": 120.577095,
        "ele": 70.25,
        "distanceKm": 44.969193390736,
        "gradePct": -0.35019039922381484,
        "smoothedEle": 70.20864274726767,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869276,
        "lng": 120.576469,
        "ele": 70.25,
        "distanceKm": 45.0335078804283,
        "gradePct": -0.44613380100794664,
        "smoothedEle": 69.76611657722668,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869435,
        "lng": 120.576127,
        "ele": 69.75,
        "distanceKm": 45.072755086925326,
        "gradePct": -0.5315352359486876,
        "smoothedEle": 69.4593785885883,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869756,
        "lng": 120.575886,
        "ele": 70,
        "distanceKm": 45.11615673716676,
        "gradePct": -0.6555824677100452,
        "smoothedEle": 69.07975740329732,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870298,
        "lng": 120.5758,
        "ele": 69.5,
        "distanceKm": 45.177065144251934,
        "gradePct": -0.7897302225258501,
        "smoothedEle": 68.5750194385817,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870935,
        "lng": 120.575805,
        "ele": 67.5,
        "distanceKm": 45.247898262751555,
        "gradePct": -0.7001504214872768,
        "smoothedEle": 68.25334717091867,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871325,
        "lng": 120.575801,
        "ele": 66.9166666666667,
        "distanceKm": 45.29126628037581,
        "gradePct": -0.667740103410606,
        "smoothedEle": 67.96198653832954,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871715000000002,
        "lng": 120.57579700000001,
        "ele": 66.3333333333333,
        "distanceKm": 45.334634297989325,
        "gradePct": -0.665802463245034,
        "smoothedEle": 67.59503196539004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872105,
        "lng": 120.575793,
        "ele": 65.75,
        "distanceKm": 45.378002315591345,
        "gradePct": -0.7092946665285893,
        "smoothedEle": 67.15217415807616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872546230173178,
        "lng": 120.57583907038831,
        "ele": 67.1083233328367,
        "distanceKm": 45.42729145872493,
        "gradePct": -0.8900939154211559,
        "smoothedEle": 66.56674038692194,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872986,
        "lng": 120.575901,
        "ele": 68.5,
        "distanceKm": 45.47660160076651,
        "gradePct": -1.0387434597372827,
        "smoothedEle": 65.98302176862677,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873427,
        "lng": 120.57583,
        "ele": 66.75,
        "distanceKm": 45.526175205182696,
        "gradePct": -1.0964986874227294,
        "smoothedEle": 65.47361044203899,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873885,
        "lng": 120.575473,
        "ele": 65,
        "distanceKm": 45.588875525677445,
        "gradePct": -1.066995885047418,
        "smoothedEle": 64.88903539980981,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874295,
        "lng": 120.574994,
        "ele": 63.75,
        "distanceKm": 45.655858354847624,
        "gradePct": -0.9301240547662684,
        "smoothedEle": 64.3683259602115,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874633,
        "lng": 120.574564,
        "ele": 62.87499999999994,
        "distanceKm": 45.713765905112716,
        "gradePct": -0.919785969879347,
        "smoothedEle": 63.76155470944578,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874971,
        "lng": 120.574134,
        "ele": 62,
        "distanceKm": 45.77167337196481,
        "gradePct": -0.9721633297316363,
        "smoothedEle": 63.10508989396183,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875248200149695,
        "lng": 120.57375433064045,
        "ele": 62.02043054186123,
        "distanceKm": 45.82130263669853,
        "gradePct": -0.973688011364651,
        "smoothedEle": 62.68957831366819,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87555215011227,
        "lng": 120.57339849798035,
        "ele": 62.07782290639592,
        "distanceKm": 45.87101435117614,
        "gradePct": -0.9213508898275021,
        "smoothedEle": 62.36681547932915,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87585610007485,
        "lng": 120.57304266532023,
        "ele": 62.135215270930615,
        "distanceKm": 45.920726005819716,
        "gradePct": -0.7636058878992243,
        "smoothedEle": 62.155440134496395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876160050037424,
        "lng": 120.57268683266012,
        "ele": 62.192607635465315,
        "distanceKm": 45.970437600625885,
        "gradePct": -0.5442400909267768,
        "smoothedEle": 62.030618965976345,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876464,
        "lng": 120.572331,
        "ele": 62.25,
        "distanceKm": 46.02014913559636,
        "gradePct": -0.32593758739115836,
        "smoothedEle": 62.047360607486425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87676204311293,
        "lng": 120.5719745507439,
        "ele": 61.92790729870629,
        "distanceKm": 46.06946317316285,
        "gradePct": -0.08763236121610038,
        "smoothedEle": 62.20162207745783,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87706008622586,
        "lng": 120.5716181014878,
        "ele": 61.605814597412575,
        "distanceKm": 46.11877715137604,
        "gradePct": 0.11728885984886449,
        "smoothedEle": 62.39830443775317,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87735926524136,
        "lng": 120.571262775872,
        "ele": 61.700863514330884,
        "distanceKm": 46.16809100489835,
        "gradePct": 0.2760904452365121,
        "smoothedEle": 62.58869193900874,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877659,
        "lng": 120.570908,
        "ele": 62,
        "distanceKm": 46.21740498318546,
        "gradePct": 0.31224627849369124,
        "smoothedEle": 62.67092900037509,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8778915,
        "lng": 120.5705875,
        "ele": 62.87499999999992,
        "distanceKm": 46.25919590759857,
        "gradePct": 0.21427370581583155,
        "smoothedEle": 62.59805199158388,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878124,
        "lng": 120.570267,
        "ele": 63.75,
        "distanceKm": 46.3009867878389,
        "gradePct": 0.011969143641198884,
        "smoothedEle": 62.351288183995095,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878352,
        "lng": 120.5699765,
        "ele": 64,
        "distanceKm": 46.34008242527914,
        "gradePct": -0.15502484247698825,
        "smoothedEle": 62.17050867481609,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87858,
        "lng": 120.569686,
        "ele": 64.25,
        "distanceKm": 46.37917802467629,
        "gradePct": -0.2846048368210527,
        "smoothedEle": 62.03797122037528,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878884,
        "lng": 120.569334,
        "ele": 63.5,
        "distanceKm": 46.42860567412922,
        "gradePct": -0.3571249965290824,
        "smoothedEle": 61.93714670780837,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879094,
        "lng": 120.569045,
        "ele": 62.25,
        "distanceKm": 46.46631317238089,
        "gradePct": -0.31352209813324716,
        "smoothedEle": 61.928982278094395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879392,
        "lng": 120.568552,
        "ele": 59.25,
        "distanceKm": 46.526719252983206,
        "gradePct": -0.20300233806013138,
        "smoothedEle": 61.82629574547133,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879689,
        "lng": 120.567955,
        "ele": 59.75,
        "distanceKm": 46.59622664453789,
        "gradePct": -0.4292875180782022,
        "smoothedEle": 61.1446197219248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879831,
        "lng": 120.567644,
        "ele": 60.25,
        "distanceKm": 46.63178547501575,
        "gradePct": -0.6229469095015735,
        "smoothedEle": 60.69056439813236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879972,
        "lng": 120.56728,
        "ele": 61,
        "distanceKm": 46.67223788800017,
        "gradePct": -0.8701081738714419,
        "smoothedEle": 60.17869428693985,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880088,
        "lng": 120.566819,
        "ele": 62.5,
        "distanceKm": 46.72119539073922,
        "gradePct": -1.1018944639465558,
        "smoothedEle": 59.63189703549775,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880081120950802,
        "lng": 120.56635156657572,
        "ele": 60.982146614561515,
        "distanceKm": 46.7690883330457,
        "gradePct": -1.037138236972136,
        "smoothedEle": 59.336495319723994,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880029,
        "lng": 120.565885,
        "ele": 58.25,
        "distanceKm": 46.817236452258136,
        "gradePct": -0.7981351763327985,
        "smoothedEle": 59.280072406292916,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879975,
        "lng": 120.5652925,
        "ele": 57.75000000000003,
        "distanceKm": 46.87823220121713,
        "gradePct": -0.4829946759807735,
        "smoothedEle": 59.145755564443874,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879921,
        "lng": 120.5647,
        "ele": 57.25,
        "distanceKm": 46.93922797420091,
        "gradePct": -0.3736434428962437,
        "smoothedEle": 58.773385910018156,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879861,
        "lng": 120.564309,
        "ele": 57.5,
        "distanceKm": 46.97983635093502,
        "gradePct": -0.49428710162327866,
        "smoothedEle": 58.335325931185785,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879862,
        "lng": 120.563857,
        "ele": 58.25,
        "distanceKm": 47.02614229654848,
        "gradePct": -0.6976147770939257,
        "smoothedEle": 57.86523156936005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879903,
        "lng": 120.563503,
        "ele": 59.25,
        "distanceKm": 47.06269377947643,
        "gradePct": -0.7781284998675946,
        "smoothedEle": 57.62371523998766,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88000658902748,
        "lng": 120.56308864389007,
        "ele": 58.57146925230112,
        "distanceKm": 47.10667810482193,
        "gradePct": -0.7796801902427037,
        "smoothedEle": 57.41273739134448,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880110178054963,
        "lng": 120.56267428778014,
        "ele": 57.89293850460213,
        "distanceKm": 47.150662398910086,
        "gradePct": -0.7066188254405793,
        "smoothedEle": 57.23680021499185,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880214,
        "lng": 120.56226,
        "ele": 57,
        "distanceKm": 47.194646696558216,
        "gradePct": -0.5515311001634507,
        "smoothedEle": 57.08191025287847,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880343387003713,
        "lng": 120.561895529567,
        "ele": 56.54441195874932,
        "distanceKm": 47.2346612261451,
        "gradePct": -0.44024062428915034,
        "smoothedEle": 56.92846093273112,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880475,
        "lng": 120.561532,
        "ele": 56.25,
        "distanceKm": 47.27467565723189,
        "gradePct": -0.4147849293502949,
        "smoothedEle": 56.73667238899505,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880721,
        "lng": 120.560888,
        "ele": 55.75,
        "distanceKm": 47.346096698193996,
        "gradePct": -0.4878804799029732,
        "smoothedEle": 56.27930205805026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88087,
        "lng": 120.560502,
        "ele": 55.75,
        "distanceKm": 47.388971334837215,
        "gradePct": -0.5467141284736095,
        "smoothedEle": 56.008467686483314,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88112374003916,
        "lng": 120.56002946293555,
        "ele": 55.48120758563486,
        "distanceKm": 47.44500286184588,
        "gradePct": -0.575818032076909,
        "smoothedEle": 55.72725757005444,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88137649886538,
        "lng": 120.55955631961737,
        "ele": 55.50997991005513,
        "distanceKm": 47.50103317024539,
        "gradePct": -0.5588164204577836,
        "smoothedEle": 55.45024973085653,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881629,
        "lng": 120.559083,
        "ele": 55.75,
        "distanceKm": 47.55706466201142,
        "gradePct": -0.552702693210228,
        "smoothedEle": 55.10461324859861,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881907,
        "lng": 120.55861,
        "ele": 55.25,
        "distanceKm": 47.614541607485414,
        "gradePct": -0.5948283980847919,
        "smoothedEle": 54.69047922183348,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882145,
        "lng": 120.558072,
        "ele": 55,
        "distanceKm": 47.67568133064725,
        "gradePct": -0.7219311711554542,
        "smoothedEle": 54.131724166217786,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882124398037238,
        "lng": 120.55761886138528,
        "ele": 54.26257118914464,
        "distanceKm": 47.72215950277571,
        "gradePct": -0.8037914653486802,
        "smoothedEle": 53.712346670734775,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88207713406464,
        "lng": 120.5571623802824,
        "ele": 53.40414433638029,
        "distanceKm": 47.7692180074708,
        "gradePct": -0.8462852435360966,
        "smoothedEle": 53.32447523593414,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88202987009204,
        "lng": 120.55670589917952,
        "ele": 52.545717483615945,
        "distanceKm": 47.81627652834657,
        "gradePct": -0.8422554037392788,
        "smoothedEle": 52.99011299741595,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88198260611944,
        "lng": 120.55624941807665,
        "ele": 51.68729063085159,
        "distanceKm": 47.86333506540005,
        "gradePct": -0.7731554526753218,
        "smoothedEle": 52.69824560239714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881935342146843,
        "lng": 120.55579293697376,
        "ele": 50.828863778087246,
        "distanceKm": 47.91039361863406,
        "gradePct": -0.7245386402728333,
        "smoothedEle": 52.36943421547163,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881892,
        "lng": 120.555336,
        "ele": 51,
        "distanceKm": 47.9574519381836,
        "gradePct": -0.7034769843064062,
        "smoothedEle": 52.01450102062965,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881892862516636,
        "lng": 120.55482509764957,
        "ele": 51.513325000848276,
        "distanceKm": 48.00979139407455,
        "gradePct": -0.6500278930981424,
        "smoothedEle": 51.73613566782923,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881858,
        "lng": 120.554314,
        "ele": 52.5,
        "distanceKm": 48.062294083977676,
        "gradePct": -0.559135681402462,
        "smoothedEle": 51.586430635286504,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881836,
        "lng": 120.553846,
        "ele": 52.25,
        "distanceKm": 48.110300707531124,
        "gradePct": -0.40326296506780107,
        "smoothedEle": 51.56355748142299,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881815,
        "lng": 120.553291,
        "ele": 51,
        "distanceKm": 48.16720561589275,
        "gradePct": -0.17832261107947037,
        "smoothedEle": 51.60598124436254,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881828249999998,
        "lng": 120.552855,
        "ele": 51.25,
        "distanceKm": 48.211895932128826,
        "gradePct": -0.05586286718106157,
        "smoothedEle": 51.61840909925301,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8818415,
        "lng": 120.552419,
        "ele": 51.5,
        "distanceKm": 48.25658624400643,
        "gradePct": -0.019292375034563217,
        "smoothedEle": 51.564121096453626,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881854750000002,
        "lng": 120.551983,
        "ele": 51.75,
        "distanceKm": 48.301276551526996,
        "gradePct": -0.056250812509652005,
        "smoothedEle": 51.455355490360255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881868,
        "lng": 120.551547,
        "ele": 52,
        "distanceKm": 48.345966854691966,
        "gradePct": -0.14318657925823935,
        "smoothedEle": 51.30377415875165,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881904666666667,
        "lng": 120.55104133333333,
        "ele": 51.50000000000002,
        "distanceKm": 48.39793005402391,
        "gradePct": -0.22184928008008994,
        "smoothedEle": 51.17082679153577,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881941333333334,
        "lng": 120.55053566666668,
        "ele": 50.99999999999998,
        "distanceKm": 48.449893239406116,
        "gradePct": -0.21628876225323218,
        "smoothedEle": 51.13967396614699,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881978,
        "lng": 120.55003,
        "ele": 50.5,
        "distanceKm": 48.50185641084146,
        "gradePct": -0.16654313409422392,
        "smoothedEle": 51.12030244547066,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882032,
        "lng": 120.549532,
        "ele": 50.75,
        "distanceKm": 48.553226093845424,
        "gradePct": -0.07976422951965631,
        "smoothedEle": 51.12567300315304,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88206,
        "lng": 120.549147,
        "ele": 50.75,
        "distanceKm": 48.59279005297743,
        "gradePct": -0.03394430434250447,
        "smoothedEle": 51.11608882821906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882122,
        "lng": 120.548777,
        "ele": 50.75,
        "distanceKm": 48.631316479707415,
        "gradePct": -0.022308706806416403,
        "smoothedEle": 51.10619364020356,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882172,
        "lng": 120.54819,
        "ele": 50.75,
        "distanceKm": 48.69170802025733,
        "gradePct": -0.04363150612025928,
        "smoothedEle": 51.03682268495635,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882312,
        "lng": 120.547857,
        "ele": 51.25,
        "distanceKm": 48.729206177133726,
        "gradePct": -0.07564407079443107,
        "smoothedEle": 50.971873645985596,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882646872794023,
        "lng": 120.54737757237243,
        "ele": 51.75,
        "distanceKm": 48.79084051610968,
        "gradePct": -0.1064857094155605,
        "smoothedEle": 50.90358967512652,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883002,
        "lng": 120.546915,
        "ele": 51.75,
        "distanceKm": 48.852524750624056,
        "gradePct": 0.001438032687644843,
        "smoothedEle": 51.084708048313075,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883347,
        "lng": 120.546452,
        "ele": 50.75,
        "distanceKm": 48.91352819082613,
        "gradePct": 0.10150412738499026,
        "smoothedEle": 51.20203710593091,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883692,
        "lng": 120.545936,
        "ele": 50,
        "distanceKm": 48.97884241338467,
        "gradePct": 0.15480016362176977,
        "smoothedEle": 51.22648256152542,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883882,
        "lng": 120.545653,
        "ele": 50,
        "distanceKm": 49.01471525788604,
        "gradePct": 0.10299240154221176,
        "smoothedEle": 51.179675929981,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884124,
        "lng": 120.545063,
        "ele": 52.5,
        "distanceKm": 49.080876353378834,
        "gradePct": -0.065512317904953,
        "smoothedEle": 51.0082125804018,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884294,
        "lng": 120.544414,
        "ele": 51.5,
        "distanceKm": 49.149997045183994,
        "gradePct": -0.18263858317812615,
        "smoothedEle": 50.85040930605052,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884396333333335,
        "lng": 120.54398133333333,
        "ele": 51.08333333333336,
        "distanceKm": 49.19575808334356,
        "gradePct": -0.25818087989665617,
        "smoothedEle": 50.68804935626692,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884498666666666,
        "lng": 120.54354866666667,
        "ele": 50.66666666666664,
        "distanceKm": 49.24151908913759,
        "gradePct": -0.2680339977675741,
        "smoothedEle": 50.57414302226877,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884601,
        "lng": 120.543116,
        "ele": 50.25,
        "distanceKm": 49.287280062566126,
        "gradePct": -0.2443496656415541,
        "smoothedEle": 50.50489351295349,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884699,
        "lng": 120.542628,
        "ele": 51,
        "distanceKm": 49.33844606165931,
        "gradePct": -0.30018583815851874,
        "smoothedEle": 50.276408647941906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884782,
        "lng": 120.542122,
        "ele": 49.75,
        "distanceKm": 49.39109732025961,
        "gradePct": -0.3045172248221589,
        "smoothedEle": 50.09555127228863,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884865,
        "lng": 120.541616,
        "ele": 48.5,
        "distanceKm": 49.44374854765596,
        "gradePct": -0.26345248826761014,
        "smoothedEle": 50.043864234014336,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8849386,
        "lng": 120.54115920000001,
        "ele": 49.00000000000003,
        "distanceKm": 49.491254607565864,
        "gradePct": -0.21514504552992314,
        "smoothedEle": 50.05685485069711,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885012200000002,
        "lng": 120.5407024,
        "ele": 49.499999999999986,
        "distanceKm": 49.53876064248281,
        "gradePct": -0.09316529060023138,
        "smoothedEle": 50.088997479806174,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8850858,
        "lng": 120.5402456,
        "ele": 50.000000000000014,
        "distanceKm": 49.5862666524038,
        "gradePct": -0.01702495667145219,
        "smoothedEle": 50.0780947307716,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8851594,
        "lng": 120.5397888,
        "ele": 50.49999999999997,
        "distanceKm": 49.63377263733175,
        "gradePct": -0.002231823129473977,
        "smoothedEle": 50.04919381166006,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885233,
        "lng": 120.539332,
        "ele": 51,
        "distanceKm": 49.681278597263656,
        "gradePct": 0.02379240791547554,
        "smoothedEle": 50.1017117087453,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8853058968843,
        "lng": 120.53891651107124,
        "ele": 51.026905741285375,
        "distanceKm": 49.72460723571314,
        "gradePct": 0.05949542678843671,
        "smoothedEle": 50.19841212469245,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88537544844215,
        "lng": 120.53850025553561,
        "ele": 50.763452870642666,
        "distanceKm": 49.76794507620612,
        "gradePct": 0.08147106318467817,
        "smoothedEle": 50.24524170506512,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885445,
        "lng": 120.538084,
        "ele": 50.5,
        "distanceKm": 49.81128289519821,
        "gradePct": 0.10659591089204161,
        "smoothedEle": 50.276067577292416,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885518666666666,
        "lng": 120.53752066666667,
        "ele": 50.166666666666664,
        "distanceKm": 49.86957047912231,
        "gradePct": 0.10611029106513419,
        "smoothedEle": 50.30098895188209,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885592333333335,
        "lng": 120.53695733333333,
        "ele": 49.833333333333336,
        "distanceKm": 49.92785803203688,
        "gradePct": 0.04907940025090271,
        "smoothedEle": 50.300083638933245,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885666,
        "lng": 120.536394,
        "ele": 49.5,
        "distanceKm": 49.986145553941725,
        "gradePct": 0.0054828118412756695,
        "smoothedEle": 50.26915319483419,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8856995,
        "lng": 120.53602599999999,
        "ele": 49.75,
        "distanceKm": 50.02402783422465,
        "gradePct": -0.024871191501478408,
        "smoothedEle": 50.23177440625223,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885733,
        "lng": 120.535658,
        "ele": 50,
        "distanceKm": 50.06191010524681,
        "gradePct": -0.04654642645005614,
        "smoothedEle": 50.2046208380431,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88579806059005,
        "lng": 120.53513519725705,
        "ele": 50.54247522500502,
        "distanceKm": 50.115953480194655,
        "gradePct": -0.046360341531168865,
        "smoothedEle": 50.207547855466004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885868840542738,
        "lng": 120.53461314826848,
        "ele": 50.75,
        "distanceKm": 50.17000923543871,
        "gradePct": -0.015831546756043254,
        "smoothedEle": 50.2460528859647,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885939,
        "lng": 120.534091,
        "ele": 50.75,
        "distanceKm": 50.224065024594296,
        "gradePct": 0.03186949036956887,
        "smoothedEle": 50.29548672936996,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886004,
        "lng": 120.533728,
        "ele": 50.25,
        "distanceKm": 50.26194731308805,
        "gradePct": 0.053187355437589144,
        "smoothedEle": 50.3109975641144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886125,
        "lng": 120.533193,
        "ele": 50.25,
        "distanceKm": 50.31838102781203,
        "gradePct": 0.04450724366155193,
        "smoothedEle": 50.29829153507626,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886298,
        "lng": 120.532813,
        "ele": 50.5,
        "distanceKm": 50.36180256108168,
        "gradePct": 0.005207221190193604,
        "smoothedEle": 50.25062154476508,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886477,
        "lng": 120.532163,
        "ele": 50.25,
        "distanceKm": 50.43130073818207,
        "gradePct": -0.1458893025413787,
        "smoothedEle": 50.006670774174005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886588,
        "lng": 120.531475,
        "ele": 49.75,
        "distanceKm": 50.50285304041774,
        "gradePct": -0.33469826619852816,
        "smoothedEle": 49.632391123033855,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8866235,
        "lng": 120.531099,
        "ele": 49.75,
        "distanceKm": 50.54157274891473,
        "gradePct": -0.4314108333259351,
        "smoothedEle": 49.41000901900205,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886659,
        "lng": 120.530723,
        "ele": 49.75,
        "distanceKm": 50.580292447389674,
        "gradePct": -0.5233738383053034,
        "smoothedEle": 49.13897112967745,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886695,
        "lng": 120.530124,
        "ele": 49,
        "distanceKm": 50.64178524377228,
        "gradePct": -0.6693328059715047,
        "smoothedEle": 48.613162243525764,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88665546201513,
        "lng": 120.52957213478096,
        "ele": 48.388712694345756,
        "distanceKm": 50.69848974851868,
        "gradePct": -0.7528335197605145,
        "smoothedEle": 48.14954782668775,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886632,
        "lng": 120.529019,
        "ele": 47.5,
        "distanceKm": 50.755213658008344,
        "gradePct": -0.7866869929355782,
        "smoothedEle": 47.7411486694756,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886618,
        "lng": 120.52843200000001,
        "ele": 46.75,
        "distanceKm": 50.81536689675664,
        "gradePct": -0.7740457677609275,
        "smoothedEle": 47.29096711271175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886604,
        "lng": 120.527845,
        "ele": 46,
        "distanceKm": 50.875520141706964,
        "gradePct": -0.8027965295394415,
        "smoothedEle": 46.73175361912232,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886615,
        "lng": 120.527231,
        "ele": 46.25,
        "distanceKm": 50.93843104958566,
        "gradePct": -0.8590429150945005,
        "smoothedEle": 46.14389377631669,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886594646251776,
        "lng": 120.52673421127368,
        "ele": 46.33781251875716,
        "distanceKm": 50.989373081270394,
        "gradePct": -0.9101863012368141,
        "smoothedEle": 45.665129942832145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88655746858478,
        "lng": 120.52623833450404,
        "ele": 45.9450906842945,
        "distanceKm": 51.04033933564486,
        "gradePct": -0.9176481720437172,
        "smoothedEle": 45.22351496712664,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886527,
        "lng": 120.525743,
        "ele": 45,
        "distanceKm": 51.09119509467741,
        "gradePct": -0.8080228118756444,
        "smoothedEle": 44.969236171963885,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886512,
        "lng": 120.525223,
        "ele": 44.333333333333364,
        "distanceKm": 51.14449076102646,
        "gradePct": -0.6156475864688905,
        "smoothedEle": 44.85564817201091,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886497000000002,
        "lng": 120.524703,
        "ele": 43.666666666666636,
        "distanceKm": 51.197786433258294,
        "gradePct": -0.41195889272053904,
        "smoothedEle": 44.768311720046015,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886482,
        "lng": 120.524183,
        "ele": 43,
        "distanceKm": 51.25108211137583,
        "gradePct": -0.28209051576954947,
        "smoothedEle": 44.60562005693269,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886412,
        "lng": 120.523495,
        "ele": 44.25,
        "distanceKm": 51.321990378896984,
        "gradePct": -0.29812583272282045,
        "smoothedEle": 44.30735112613088,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88639679421957,
        "lng": 120.52309458111543,
        "ele": 44.883574184441116,
        "distanceKm": 51.36304474222605,
        "gradePct": -0.34876422667534823,
        "smoothedEle": 44.1277150193678,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886386,
        "lng": 120.522694,
        "ele": 45.5,
        "distanceKm": 51.404098445730895,
        "gradePct": -0.4035416447952698,
        "smoothedEle": 43.94196023004915,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886367545480155,
        "lng": 120.52222791016658,
        "ele": 45.1555415735221,
        "distanceKm": 51.4518894959328,
        "gradePct": -0.4468706645548338,
        "smoothedEle": 43.70848254093296,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886356436384123,
        "lng": 120.52176132813327,
        "ele": 44.37443325881775,
        "distanceKm": 51.499702856843655,
        "gradePct": -0.4230554991259805,
        "smoothedEle": 43.55499048457865,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886345327288094,
        "lng": 120.52129474609995,
        "ele": 43.593324944113284,
        "distanceKm": 51.547516221665326,
        "gradePct": -0.36743642832630574,
        "smoothedEle": 43.46078824082047,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88633421819206,
        "lng": 120.52082816406664,
        "ele": 42.812216629408816,
        "distanceKm": 51.595329590397824,
        "gradePct": -0.3273857392493642,
        "smoothedEle": 43.326864998414926,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886323109096033,
        "lng": 120.52036158203332,
        "ele": 42.03110831470447,
        "distanceKm": 51.643142963042585,
        "gradePct": -0.29453563138037286,
        "smoothedEle": 43.1621414604628,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886312,
        "lng": 120.519895,
        "ele": 41.25,
        "distanceKm": 51.69095633959671,
        "gradePct": -0.30778729759875306,
        "smoothedEle": 42.967494252679536,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88630553821665,
        "lng": 120.51937601434012,
        "ele": 41.93272291862549,
        "distanceKm": 51.74412692719252,
        "gradePct": -0.3257089301093313,
        "smoothedEle": 42.81604799355137,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886300269108325,
        "lng": 120.51885700717006,
        "ele": 42.591361459312786,
        "distanceKm": 51.797298093708214,
        "gradePct": -0.28376270797057707,
        "smoothedEle": 42.75255782222927,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886295,
        "lng": 120.518338,
        "ele": 43.25,
        "distanceKm": 51.85046926228636,
        "gradePct": -0.18190122632056668,
        "smoothedEle": 42.76851380420797,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886287,
        "lng": 120.51789033333333,
        "ele": 43.33333333333333,
        "distanceKm": 51.89633759430649,
        "gradePct": -0.038694156207000126,
        "smoothedEle": 42.87477846445491,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886279000000002,
        "lng": 120.51744266666667,
        "ele": 43.41666666666667,
        "distanceKm": 51.942205929027665,
        "gradePct": 0.142605094049548,
        "smoothedEle": 43.106729777865866,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886271,
        "lng": 120.516995,
        "ele": 43.5,
        "distanceKm": 51.98807426645281,
        "gradePct": 0.31154473177239606,
        "smoothedEle": 43.3866611944593,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88625,
        "lng": 120.5164255,
        "ele": 43.37499999999999,
        "distanceKm": 52.046461503416126,
        "gradePct": 0.4644085225582165,
        "smoothedEle": 43.69612817257274,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886229,
        "lng": 120.515856,
        "ele": 43.25,
        "distanceKm": 52.10484874939867,
        "gradePct": 0.5182390025141463,
        "smoothedEle": 43.954296479858044,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886170205632617,
        "lng": 120.51538172543646,
        "ele": 43.949932945021764,
        "distanceKm": 52.15387212199942,
        "gradePct": 0.4917455343350562,
        "smoothedEle": 44.16141884733914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88611143428479,
        "lng": 120.51490744766762,
        "ele": 44.55133053598085,
        "distanceKm": 52.20289549959384,
        "gradePct": 0.4590662511102443,
        "smoothedEle": 44.38334994408282,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886052747427833,
        "lng": 120.5144331581341,
        "ele": 44.791064428784686,
        "distanceKm": 52.25191884097834,
        "gradePct": 0.4303700673289558,
        "smoothedEle": 44.580998775743296,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885994060570873,
        "lng": 120.51395886860057,
        "ele": 45.03079832158853,
        "distanceKm": 52.30094220318395,
        "gradePct": 0.40339901084252855,
        "smoothedEle": 44.74382109865153,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885935373713917,
        "lng": 120.51348457906705,
        "ele": 45.27053221439236,
        "distanceKm": 52.349965586209066,
        "gradePct": 0.3652200513136192,
        "smoothedEle": 44.8753539463605,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885876686856957,
        "lng": 120.51301028953353,
        "ele": 45.510266107196166,
        "distanceKm": 52.39898899005664,
        "gradePct": 0.28935915302097415,
        "smoothedEle": 44.94438330085006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885818,
        "lng": 120.512536,
        "ele": 45.75,
        "distanceKm": 52.448012414725056,
        "gradePct": 0.17110052537388512,
        "smoothedEle": 44.90745017411886,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8857538,
        "lng": 120.5120306,
        "ele": 45.3,
        "distanceKm": 52.50027644294831,
        "gradePct": 0.014883418517921642,
        "smoothedEle": 44.77137673222865,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8856896,
        "lng": 120.5115252,
        "ele": 44.85,
        "distanceKm": 52.552540495432176,
        "gradePct": -0.15956062270597599,
        "smoothedEle": 44.55985840433897,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885625400000002,
        "lng": 120.5110198,
        "ele": 44.4,
        "distanceKm": 52.60480457217365,
        "gradePct": -0.3088491001302734,
        "smoothedEle": 44.32230377405437,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8855612,
        "lng": 120.51051439999999,
        "ele": 43.95,
        "distanceKm": 52.65706867317566,
        "gradePct": -0.3574859625904898,
        "smoothedEle": 44.16889957925025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885497,
        "lng": 120.510009,
        "ele": 43.5,
        "distanceKm": 52.7093327984352,
        "gradePct": -0.30000887987175345,
        "smoothedEle": 44.13470691283187,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885446200011515,
        "lng": 120.50957862249756,
        "ele": 43.093600092121385,
        "distanceKm": 52.75378202592527,
        "gradePct": -0.1884595372389812,
        "smoothedEle": 44.177296231663135,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885395400023032,
        "lng": 120.50914824499512,
        "ele": 42.6872001842427,
        "distanceKm": 52.79823126978222,
        "gradePct": -0.05532039322783354,
        "smoothedEle": 44.241540458257354,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885344,
        "lng": 120.508718,
        "ele": 43,
        "distanceKm": 52.84267559671285,
        "gradePct": 0.03834073289432939,
        "smoothedEle": 44.28782721905129,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885271106112334,
        "lng": 120.50816698356721,
        "ele": 44.38736516912519,
        "distanceKm": 52.89970200203168,
        "gradePct": 0.0705844868595261,
        "smoothedEle": 44.282176625482904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885198,
        "lng": 120.507616,
        "ele": 46,
        "distanceKm": 52.95672846387975,
        "gradePct": 0.043893203397561906,
        "smoothedEle": 44.269341240206415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8851355,
        "lng": 120.50719550000001,
        "ele": 45.87500000000001,
        "distanceKm": 53.00036252962283,
        "gradePct": 0.0419225255992431,
        "smoothedEle": 44.32760512039934,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885073,
        "lng": 120.506775,
        "ele": 45.75,
        "distanceKm": 53.04399661494911,
        "gradePct": 0.07932076898539607,
        "smoothedEle": 44.446337860867786,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885008499999998,
        "lng": 120.506231,
        "ele": 44.625,
        "distanceKm": 53.10018499243202,
        "gradePct": 0.19063533665884777,
        "smoothedEle": 44.66333858842875,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884944,
        "lng": 120.505687,
        "ele": 43.5,
        "distanceKm": 53.15637339617963,
        "gradePct": 0.28829178877373296,
        "smoothedEle": 44.846004735577694,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884900000000002,
        "lng": 120.50521333333333,
        "ele": 43.83333333333335,
        "distanceKm": 53.20514310622024,
        "gradePct": 0.2738033856147727,
        "smoothedEle": 44.88822032199212,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884856,
        "lng": 120.50473966666667,
        "ele": 44.16666666666665,
        "distanceKm": 53.25391283191069,
        "gradePct": 0.17877946349448692,
        "smoothedEle": 44.84219343196202,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884812,
        "lng": 120.504266,
        "ele": 44.5,
        "distanceKm": 53.30268257325088,
        "gradePct": 0.05702313138040712,
        "smoothedEle": 44.785504381821234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884764541608845,
        "lng": 120.50368189672426,
        "ele": 45.412661368348715,
        "distanceKm": 53.36275197943706,
        "gradePct": -0.036697130698406445,
        "smoothedEle": 44.77813184456592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884715,
        "lng": 120.503098,
        "ele": 45.75,
        "distanceKm": 53.42282112942652,
        "gradePct": -0.011618111875932704,
        "smoothedEle": 44.84830029658779,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88466875,
        "lng": 120.50261975,
        "ele": 45.49999999999999,
        "distanceKm": 53.472083594709765,
        "gradePct": -0.0006538408336602592,
        "smoothedEle": 44.81976438989568,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884622500000003,
        "lng": 120.50214150000001,
        "ele": 45.25000000000002,
        "distanceKm": 53.521346076593616,
        "gradePct": -0.02440049299494583,
        "smoothedEle": 44.73441275601242,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884576250000002,
        "lng": 120.50166325000001,
        "ele": 45.00000000000001,
        "distanceKm": 53.57060857508102,
        "gradePct": -0.048809390284151294,
        "smoothedEle": 44.6896905728286,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88453,
        "lng": 120.501185,
        "ele": 44.75,
        "distanceKm": 53.61987109017045,
        "gradePct": -0.0991750720440642,
        "smoothedEle": 44.64650412924082,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8845075,
        "lng": 120.50073850000001,
        "ele": 44,
        "distanceKm": 53.665680249353194,
        "gradePct": -0.1265636275855879,
        "smoothedEle": 44.570346353590466,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884485,
        "lng": 120.500292,
        "ele": 43.25,
        "distanceKm": 53.71148941610795,
        "gradePct": -0.1277495079608517,
        "smoothedEle": 44.495991281556606,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884389,
        "lng": 120.499838,
        "ele": 43.25,
        "distanceKm": 53.75920785787049,
        "gradePct": -0.12369334324563576,
        "smoothedEle": 44.452653847853114,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88417,
        "lng": 120.49916,
        "ele": 44.75,
        "distanceKm": 53.832809528484944,
        "gradePct": -0.08607438257190358,
        "smoothedEle": 44.45284519669816,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883974,
        "lng": 120.498578,
        "ele": 44.75,
        "distanceKm": 53.89629001631943,
        "gradePct": -0.014411240887728178,
        "smoothedEle": 44.491839680004695,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883799999999997,
        "lng": 120.4981445,
        "ele": 44.87500000000001,
        "distanceKm": 53.94473094025058,
        "gradePct": 0.12457640992781728,
        "smoothedEle": 44.714954466220405,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883626,
        "lng": 120.497711,
        "ele": 45,
        "distanceKm": 53.99317191636821,
        "gradePct": 0.3337042316928832,
        "smoothedEle": 45.12015061063906,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883462773306398,
        "lng": 120.49722223275195,
        "ele": 45.22011198822989,
        "distanceKm": 54.04643110023769,
        "gradePct": 0.6281316219622947,
        "smoothedEle": 45.71747583303642,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883293,
        "lng": 120.496736,
        "ele": 44.75,
        "distanceKm": 54.09969992282904,
        "gradePct": 0.86713901876462,
        "smoothedEle": 46.24182345764302,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88315,
        "lng": 120.49624,
        "ele": 45.75,
        "distanceKm": 54.15294199426932,
        "gradePct": 0.9917092184886372,
        "smoothedEle": 46.76705623075755,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883008,
        "lng": 120.4958375,
        "ele": 46.875,
        "distanceKm": 54.197095538519235,
        "gradePct": 0.9939412927708774,
        "smoothedEle": 47.15203834803794,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882866,
        "lng": 120.495435,
        "ele": 48,
        "distanceKm": 54.24124912304759,
        "gradePct": 0.9128193671383731,
        "smoothedEle": 47.484996409041685,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882739,
        "lng": 120.495109,
        "ele": 49.25,
        "distanceKm": 54.277508919974004,
        "gradePct": 0.8710707841214091,
        "smoothedEle": 47.765529568358644,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882535,
        "lng": 120.494625,
        "ele": 49.75,
        "distanceKm": 54.33203448311515,
        "gradePct": 0.8336704930139678,
        "smoothedEle": 48.22814472199395,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882328832935343,
        "lng": 120.4941663532835,
        "ele": 49.669719076065334,
        "distanceKm": 54.3843146453847,
        "gradePct": 0.7920115733678827,
        "smoothedEle": 48.62462275563607,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88213091646767,
        "lng": 120.49370267664176,
        "ele": 49.08485953803267,
        "distanceKm": 54.43666622865444,
        "gradePct": 0.6559255503551724,
        "smoothedEle": 48.762288330758345,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881933,
        "lng": 120.493239,
        "ele": 48.5,
        "distanceKm": 54.48901787476042,
        "gradePct": 0.46963792692087164,
        "smoothedEle": 48.80245167434302,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881861,
        "lng": 120.492888,
        "ele": 49.25,
        "distanceKm": 54.52585654085946,
        "gradePct": 0.2630145027198336,
        "smoothedEle": 48.701757767998764,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.881854,
        "lng": 120.492366,
        "ele": 49.5,
        "distanceKm": 54.579338485231325,
        "gradePct": -0.10192233378447423,
        "smoothedEle": 48.38304029026674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881851,
        "lng": 120.491658,
        "ele": 47.25,
        "distanceKm": 54.65187030142805,
        "gradePct": -0.42767664917167736,
        "smoothedEle": 47.91859935329338,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881837,
        "lng": 120.491112,
        "ele": 47.75,
        "distanceKm": 54.70782692508399,
        "gradePct": -0.5659016430127606,
        "smoothedEle": 47.61923619150737,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881821,
        "lng": 120.490769,
        "ele": 47.5,
        "distanceKm": 54.7430105718268,
        "gradePct": -0.5634478127974125,
        "smoothedEle": 47.472635315255815,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881816,
        "lng": 120.490349,
        "ele": 46.5,
        "distanceKm": 54.78604106801855,
        "gradePct": -0.5412571451993239,
        "smoothedEle": 47.25760754017592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8818015,
        "lng": 120.4899495,
        "ele": 46.5,
        "distanceKm": 54.82699959943504,
        "gradePct": -0.528859322547969,
        "smoothedEle": 47.020134574190386,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881787,
        "lng": 120.48955,
        "ele": 46.5,
        "distanceKm": 54.867958135219446,
        "gradePct": -0.5237778086474233,
        "smoothedEle": 46.784975197987855,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8817895,
        "lng": 120.4889985,
        "ele": 46.5,
        "distanceKm": 54.924457254840995,
        "gradePct": -0.42485776119474145,
        "smoothedEle": 46.70022651855553,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881792,
        "lng": 120.488447,
        "ele": 46.5,
        "distanceKm": 54.98095637342213,
        "gradePct": -0.3571210530305058,
        "smoothedEle": 46.568774171238374,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881828333333335,
        "lng": 120.487982,
        "ele": 46.5,
        "distanceKm": 55.02876431905995,
        "gradePct": -0.248861269555384,
        "smoothedEle": 46.51228007215129,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881864666666665,
        "lng": 120.487517,
        "ele": 46.5,
        "distanceKm": 55.07657225199559,
        "gradePct": -0.12035170820909086,
        "smoothedEle": 46.531350606405454,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881901,
        "lng": 120.487052,
        "ele": 46.5,
        "distanceKm": 55.1243801722262,
        "gradePct": -0.06841303069889096,
        "smoothedEle": 46.56351608107994,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882005,
        "lng": 120.486336,
        "ele": 46.5,
        "distanceKm": 55.19863673176425,
        "gradePct": 0.26970416966874894,
        "smoothedEle": 47.08728983462528,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882078365907063,
        "lng": 120.48588431797621,
        "ele": 46.59263372103937,
        "distanceKm": 55.24562285142711,
        "gradePct": 0.5062749241385623,
        "smoothedEle": 47.531554771289805,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882151731814126,
        "lng": 120.48543263595242,
        "ele": 46.68526744207875,
        "distanceKm": 55.292608946464505,
        "gradePct": 0.7061447147782763,
        "smoothedEle": 47.95442962662638,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88223,
        "lng": 120.484982,
        "ele": 46.75,
        "distanceKm": 55.33958740708142,
        "gradePct": 0.8237870601454691,
        "smoothedEle": 48.31835547908792,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882291,
        "lng": 120.484333,
        "ele": 49.75,
        "distanceKm": 55.40641909918459,
        "gradePct": 0.8293596001533553,
        "smoothedEle": 48.81959316986171,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882488,
        "lng": 120.483819,
        "ele": 51.25,
        "distanceKm": 55.46345028664524,
        "gradePct": 0.7846126215890687,
        "smoothedEle": 49.26122693143114,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882817,
        "lng": 120.483406,
        "ele": 51,
        "distanceKm": 55.51938261567863,
        "gradePct": 0.7961471575979779,
        "smoothedEle": 49.7541302779245,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883342,
        "lng": 120.483205,
        "ele": 50.25,
        "distanceKm": 55.58128514102997,
        "gradePct": 0.8618905589438326,
        "smoothedEle": 50.354869601589755,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883686,
        "lng": 120.483074,
        "ele": 50.25,
        "distanceKm": 55.62182212522642,
        "gradePct": 0.9106847474553752,
        "smoothedEle": 50.760239443554255,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884151,
        "lng": 120.483079,
        "ele": 50.25,
        "distanceKm": 55.67353037458478,
        "gradePct": 0.7691493547575338,
        "smoothedEle": 50.88835636128648,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884180497171634,
        "lng": 120.48251214131034,
        "ele": 50.891242861609214,
        "distanceKm": 55.73169376931099,
        "gradePct": 0.5023660832326229,
        "smoothedEle": 50.878337281073186,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884204,
        "lng": 120.481945,
        "ele": 51.5,
        "distanceKm": 55.78985229793975,
        "gradePct": 0.20466214498524657,
        "smoothedEle": 50.84986546065802,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884426,
        "lng": 120.481969,
        "ele": 51.5,
        "distanceKm": 55.8146597425479,
        "gradePct": 0.09198109905973209,
        "smoothedEle": 50.872577814888494,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884468,
        "lng": 120.481921,
        "ele": 51.75,
        "distanceKm": 55.82144135031697,
        "gradePct": 0.06505634701856784,
        "smoothedEle": 50.8865443884968,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884507,
        "lng": 120.481826,
        "ele": 51.75,
        "distanceKm": 55.832095909962845,
        "gradePct": 0.062052206158695895,
        "smoothedEle": 50.909799090775316,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884546,
        "lng": 120.481808,
        "ele": 51.75,
        "distanceKm": 55.83680827751676,
        "gradePct": 0.061632355777184074,
        "smoothedEle": 50.92063516735383,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884759,
        "lng": 120.481856,
        "ele": 51.75,
        "distanceKm": 55.860997891657625,
        "gradePct": 0.0625365244695173,
        "smoothedEle": 50.98237782553482,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88475,
        "lng": 120.48198,
        "ele": 51.75,
        "distanceKm": 55.873740157791204,
        "gradePct": 0.06569310681474412,
        "smoothedEle": 51.01970643818801,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 55.873740157791204,
      "elevationGainM": 291.4732729247121,
      "elevationLossM": 291.0568734097007,
      "minimumElevationM": 40.340523958354275,
      "maximumElevationM": 217,
      "maximumSustainedGradePct": 9.970002323926693
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 402,
        "startDistanceKm": 0,
        "endDistanceKm": 19.67728997262716,
        "distanceKm": 19.67728997262716,
        "gainM": 129.41580681671664,
        "averageGradePct": 0.6576912115273261,
        "maximumGradePct": 9.970002323926693
      },
      {
        "startIndex": 434,
        "endIndex": 641,
        "startDistanceKm": 21.164038306533573,
        "endDistanceKm": 31.53704438494567,
        "distanceKm": 10.373006078412097,
        "gainM": 107.65301984115763,
        "averageGradePct": 1.0378189217993516,
        "maximumGradePct": 3.3803602033336633
      },
      {
        "startIndex": 830,
        "endIndex": 884,
        "startDistanceKm": 40.39643611834719,
        "endDistanceKm": 43.00924555524741,
        "distanceKm": 2.6128094369002213,
        "gainM": 38.40529366485812,
        "averageGradePct": 1.4698849874953492,
        "maximumGradePct": 3.6658699759148634
      }
    ]
  },
  "kaohsiung-jiaxian-liugui": {
    "routeId": "kaohsiung-jiaxian-liugui",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T15:19:01.839Z",
      "reviewStatus": "approved",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "甲仙、寶來與荖濃溪谷路線包含長距離河谷爬升及陡峭側坡，預設100公尺分析為爬升1577公尺、最大持續坡度26.0%，短距離尖峰偏高。比較500/200、750/300、1000/500公尺後，爬升依序為956、872、822公尺，最大持續坡度依序為10.0%、8.6%、7.1%；相近的旗山、甲仙、荖濃、六龜、美濃100公里實騎環線記錄總爬升約1100公尺，本路線103.7公里所得956公尺合理且500/200仍保留台20主要爬升，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://www.ptt.cc/bbs/bicycle/M.1763468449.A.983.html",
        "referenceLabel": "旗山甲仙六龜美濃100公里環線約1100公尺爬升實騎資料"
      },
      "reviewedAt": "2026-07-29T15:39:00.000Z",
      "reviewerNote": "初版寶來景點座標導入service 670公尺往返、荖濃研究點導入service 928公尺往返、六龜景點座標導入service 218公尺往返，均未採用；改至台20與台27主線，並以現行省道節點固定台29、台20、台27、台27甲與台28。最終raw無footway、path、steps、track、private、access禁制或bicycle=no；1218公尺oneway=yes全部順向，精確為568公尺primary asphalt class5 ncn、466公尺tertiary asphalt class1、71公尺primary asphalt class2、52公尺tertiary_link、36公尺primary asphalt class4 ncn與25公尺tertiary_link，沒有reversedirection=yes與oneway=yes同段。raw保留四項經核准的BRouter資料快照分類差異：23.085925,120.679326起679公尺 `reversedirection=yes highway=service`，現行OSM way1456044235為ref=20 primary；23.070858,120.672552起115公尺 `highway=service`，現行台20由ways447651531、447650033、354320381、398280701連續；22.891887,120.628252起621公尺 `highway=service`及22.891582,120.624810起386公尺 `reversedirection=yes highway=service`，現行台28／27甲對應ways260286147、1337383115、881515396均為primary。上述raw段皆無surface、access、private、bicycle或oneway，故不據此猜測鋪面；精確證據：https://www.openstreetmap.org/way/1456044235；https://www.openstreetmap.org/way/447650033；https://www.openstreetmap.org/way/354320381；https://www.openstreetmap.org/way/260286147。500/200公尺分析為103.7公里、爬升956公尺、最大10.0%，三組比較已記於elevationAnalysis。公路局省道路線：https://www.thb.gov.tw/News.aspx?PageSize=100&n=455&page=1&sms=13741；不使用台20臨時便道、河床便道或台27甲延伸工程construction段，施工、豪雨與颱風期間須查分時放行或預警封閉。"
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
        "name": "荖濃東側台20主線",
        "lat": 23.0760736,
        "lng": 120.6746016,
        "role": "via"
      },
      {
        "name": "荖濃橋東側台20主線",
        "lat": 23.0715542,
        "lng": 120.6717151,
        "role": "via"
      },
      {
        "name": "荖濃橋台20主線",
        "lat": 23.0707987,
        "lng": 120.6699538,
        "role": "via"
      },
      {
        "name": "荖濃橋西側台20主線",
        "lat": 23.0702307,
        "lng": 120.6662486,
        "role": "via"
      },
      {
        "name": "荖濃台20與台27路口",
        "lat": 23.07144,
        "lng": 120.660021,
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
        "role": "via"
      },
      {
        "name": "美濃市區台28",
        "lat": 22.9,
        "lng": 120.542,
        "role": "via"
      },
      {
        "name": "旗山車站外公共道路",
        "lat": 22.88462,
        "lng": 120.48197,
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
        "gradePct": -0.34225139502919555,
        "smoothedEle": 213.94815917796322,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05082,
        "lng": 120.557754,
        "ele": 212.5,
        "distanceKm": 25.579319372436878,
        "gradePct": -0.32893105820960616,
        "smoothedEle": 213.6459235963434,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05101,
        "lng": 120.558179,
        "ele": 213.75,
        "distanceKm": 25.627664721559864,
        "gradePct": -0.43652979183328156,
        "smoothedEle": 213.26480579945024,
        "gradeBand": "descent"
      },
      {
        "lat": 23.051167,
        "lng": 120.558496,
        "ele": 213.75,
        "distanceKm": 25.664498962983334,
        "gradePct": -0.5955866619924158,
        "smoothedEle": 212.86072841698535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05143,
        "lng": 120.558897,
        "ele": 214,
        "distanceKm": 25.714883554225313,
        "gradePct": -0.695067928529613,
        "smoothedEle": 212.5495620887071,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05161,
        "lng": 120.559056,
        "ele": 214,
        "distanceKm": 25.74067625021164,
        "gradePct": -0.690556705785428,
        "smoothedEle": 212.44099104825,
        "gradeBand": "descent"
      },
      {
        "lat": 23.051913,
        "lng": 120.559123,
        "ele": 213.25,
        "distanceKm": 25.775058686215445,
        "gradePct": -0.6526107051221027,
        "smoothedEle": 212.36012741196794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0523508,
        "lng": 120.5591428,
        "ele": 212.54999999999998,
        "distanceKm": 25.823782026912255,
        "gradePct": -0.5942152936126796,
        "smoothedEle": 212.10698341046833,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0527886,
        "lng": 120.55916260000001,
        "ele": 211.85000000000002,
        "distanceKm": 25.87250536733517,
        "gradePct": -0.5699039077474615,
        "smoothedEle": 211.67147446362446,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0532264,
        "lng": 120.5591824,
        "ele": 211.14999999999998,
        "distanceKm": 25.921228707484122,
        "gradePct": -0.7142680849487728,
        "smoothedEle": 211.09431681125702,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0536642,
        "lng": 120.5592022,
        "ele": 210.45000000000002,
        "distanceKm": 25.96995204735923,
        "gradePct": -0.910927234164976,
        "smoothedEle": 210.55028318593284,
        "gradeBand": "descent"
      },
      {
        "lat": 23.054102,
        "lng": 120.559222,
        "ele": 209.75,
        "distanceKm": 26.018675386960428,
        "gradePct": -1.0389396755321523,
        "smoothedEle": 210.05563580482902,
        "gradeBand": "descent"
      },
      {
        "lat": 23.054656,
        "lng": 120.5592565,
        "ele": 208.75,
        "distanceKm": 26.080378509877384,
        "gradePct": -0.9599330863354856,
        "smoothedEle": 209.65834612024582,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05521,
        "lng": 120.559291,
        "ele": 207.75,
        "distanceKm": 26.142081631962963,
        "gradePct": -0.6902032515986487,
        "smoothedEle": 209.481071341521,
        "gradeBand": "descent"
      },
      {
        "lat": 23.055589,
        "lng": 120.559386,
        "ele": 208.25,
        "distanceKm": 26.185330924165356,
        "gradePct": -0.4438204930840486,
        "smoothedEle": 209.5065133055072,
        "gradeBand": "descent"
      },
      {
        "lat": 23.056018407164885,
        "lng": 120.55964792863347,
        "ele": 208.736856196016,
        "distanceKm": 26.24008530383353,
        "gradePct": -0.059937361984040864,
        "smoothedEle": 209.79790842901193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.056447935861875,
        "lng": 120.55990962341468,
        "ele": 209.5681986332684,
        "distanceKm": 26.294839722827987,
        "gradePct": 0.37377416230087723,
        "smoothedEle": 210.3643469795126,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05687746793094,
        "lng": 120.56017131170734,
        "ele": 210.40909931663415,
        "distanceKm": 26.349594102495058,
        "gradePct": 0.8589696581438235,
        "smoothedEle": 211.20342996723525,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.057307,
        "lng": 120.560433,
        "ele": 211.25,
        "distanceKm": 26.40434844038662,
        "gradePct": 1.348496158919564,
        "smoothedEle": 212.30471417545908,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.057606,
        "lng": 120.560748,
        "ele": 212.75,
        "distanceKm": 26.450652292496702,
        "gradePct": 1.7310190566324823,
        "smoothedEle": 213.36926282855015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.057767272277616,
        "lng": 120.56115444154825,
        "ele": 214.3547538666784,
        "distanceKm": 26.495937955771378,
        "gradePct": 2.0799778168773106,
        "smoothedEle": 214.54113247390956,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05791351485174,
        "lng": 120.5615682943655,
        "ele": 215.65316924445224,
        "distanceKm": 26.541295188679086,
        "gradePct": 2.362628990972945,
        "smoothedEle": 215.80151132071964,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05805975742587,
        "lng": 120.56198214718276,
        "ele": 216.95158462222616,
        "distanceKm": 26.586652378642757,
        "gradePct": 2.5279713716976264,
        "smoothedEle": 217.00473272916062,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.058206,
        "lng": 120.562396,
        "ele": 218.25,
        "distanceKm": 26.63200952565928,
        "gradePct": 2.610143357176876,
        "smoothedEle": 218.16094303562053,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.058417983399504,
        "lng": 120.56293550730055,
        "ele": 219.92104031142097,
        "distanceKm": 26.69202955452886,
        "gradePct": 2.57918697902276,
        "smoothedEle": 219.59836765100778,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05863,
        "lng": 120.563475,
        "ele": 223,
        "distanceKm": 26.7520495796129,
        "gradePct": 2.330227925598416,
        "smoothedEle": 220.74725630505444,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.058789393101648,
        "lng": 120.5638622972733,
        "ele": 223.17477313777061,
        "distanceKm": 26.795457576821928,
        "gradePct": 2.0932157938631026,
        "smoothedEle": 221.41561981188238,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05895,
        "lng": 120.564249,
        "ele": 223,
        "distanceKm": 26.83886536471997,
        "gradePct": 1.8390045756148006,
        "smoothedEle": 222.00314324124605,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0590849958501,
        "lng": 120.56476331517538,
        "ele": 223.71300625053075,
        "distanceKm": 26.893584562846986,
        "gradePct": 1.5249978404932476,
        "smoothedEle": 222.67812892124786,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05922274942249,
        "lng": 120.56527676592228,
        "ele": 223.35617643829067,
        "distanceKm": 26.948303713639646,
        "gradePct": 1.2938788778253116,
        "smoothedEle": 223.26331160956101,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059358,
        "lng": 120.565791,
        "ele": 222.75,
        "distanceKm": 27.0030226084241,
        "gradePct": 1.0551691583113902,
        "smoothedEle": 223.62835066047643,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059466,
        "lng": 120.566245,
        "ele": 223,
        "distanceKm": 27.050998898716582,
        "gradePct": 0.8226514540033094,
        "smoothedEle": 223.7981186951938,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059581,
        "lng": 120.566784,
        "ele": 223.75,
        "distanceKm": 27.10760741699966,
        "gradePct": 0.5624616731060306,
        "smoothedEle": 223.95301679307872,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05968025659005,
        "lng": 120.56720415410935,
        "ele": 224.47274216055496,
        "distanceKm": 27.15198778977691,
        "gradePct": 0.35379318473542426,
        "smoothedEle": 223.99547507734397,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059777,
        "lng": 120.567625,
        "ele": 225,
        "distanceKm": 27.19636812471698,
        "gradePct": 0.24512883403426233,
        "smoothedEle": 224.0742151362784,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059948,
        "lng": 120.568033,
        "ele": 225,
        "distanceKm": 27.242237351584887,
        "gradePct": 0.22761673221931827,
        "smoothedEle": 224.22234870712364,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.060241,
        "lng": 120.568606,
        "ele": 224.75,
        "distanceKm": 27.309305941263734,
        "gradePct": 0.29369641326172874,
        "smoothedEle": 224.54203458175374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.060534434981335,
        "lng": 120.5689979458204,
        "ele": 223.91308452095427,
        "distanceKm": 27.36100334351102,
        "gradePct": 0.380844002440854,
        "smoothedEle": 224.77315857287056,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06085436548601,
        "lng": 120.56936724646393,
        "ele": 224.32575285484452,
        "distanceKm": 27.41289854889067,
        "gradePct": 0.42119444419711427,
        "smoothedEle": 224.96998863408598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.061174295990682,
        "lng": 120.56973654710745,
        "ele": 224.73842118873478,
        "distanceKm": 27.464793688877446,
        "gradePct": 0.412277755952816,
        "smoothedEle": 225.154420158314,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06149422649536,
        "lng": 120.57010584775098,
        "ele": 225.15108952262506,
        "distanceKm": 27.516688763470835,
        "gradePct": 0.43828299989265124,
        "smoothedEle": 225.45160702403007,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.061814157000033,
        "lng": 120.57047514839451,
        "ele": 225.5637578565153,
        "distanceKm": 27.568583772669513,
        "gradePct": 0.5865156615861927,
        "smoothedEle": 225.97494122912642,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.062134087504706,
        "lng": 120.57084444903803,
        "ele": 225.97642619040556,
        "distanceKm": 27.620478716472963,
        "gradePct": 0.8933622159006692,
        "smoothedEle": 226.78365242594035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06245401800938,
        "lng": 120.57121374968156,
        "ele": 226.3890945242958,
        "distanceKm": 27.6723735948804,
        "gradePct": 1.1757944693491467,
        "smoothedEle": 227.54941684861666,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.062774,
        "lng": 120.571583,
        "ele": 227.25,
        "distanceKm": 27.724268584496997,
        "gradePct": 1.360274796186109,
        "smoothedEle": 228.2485951732645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063113,
        "lng": 120.571995,
        "ele": 229.5,
        "distanceKm": 27.7808160402021,
        "gradePct": 1.4508479747050325,
        "smoothedEle": 229.0672602140579,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063487,
        "lng": 120.572439,
        "ele": 232,
        "distanceKm": 27.84240228146266,
        "gradePct": 1.474741531142973,
        "smoothedEle": 230.05664113276282,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063795048410764,
        "lng": 120.57277351244348,
        "ele": 231.6259990912345,
        "distanceKm": 27.89082250421239,
        "gradePct": 1.5980913282365408,
        "smoothedEle": 230.99416064005902,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064104,
        "lng": 120.573107,
        "ele": 231.25,
        "distanceKm": 27.939239825370297,
        "gradePct": 1.793426841147599,
        "smoothedEle": 232.05219479695424,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064476499999998,
        "lng": 120.57353549999999,
        "ele": 232.25,
        "distanceKm": 27.999551026643424,
        "gradePct": 1.9960816508682695,
        "smoothedEle": 233.36040045021747,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064849,
        "lng": 120.573964,
        "ele": 233.25,
        "distanceKm": 28.05986213970649,
        "gradePct": 2.0424876023851013,
        "smoothedEle": 234.47967669266237,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065148506025995,
        "lng": 120.57432549395351,
        "ele": 235.398096497912,
        "distanceKm": 28.10963038989796,
        "gradePct": 1.8991787622639502,
        "smoothedEle": 235.20351540686335,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065448,
        "lng": 120.574687,
        "ele": 237.25,
        "distanceKm": 28.159398601534583,
        "gradePct": 1.692855660707514,
        "smoothedEle": 235.87516859008758,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06581033333333,
        "lng": 120.57508299999999,
        "ele": 237.91666666666666,
        "distanceKm": 28.216535007852148,
        "gradePct": 1.393063405839134,
        "smoothedEle": 236.4617223512183,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066172666666667,
        "lng": 120.575479,
        "ele": 238.58333333333334,
        "distanceKm": 28.273671336813976,
        "gradePct": 1.1932588285633343,
        "smoothedEle": 237.06703788838996,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066535,
        "lng": 120.575875,
        "ele": 239.25,
        "distanceKm": 28.33080758841641,
        "gradePct": 1.1193520562842605,
        "smoothedEle": 237.72801907559315,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06681,
        "lng": 120.576192,
        "ele": 238.75,
        "distanceKm": 28.375381152969773,
        "gradePct": 1.0078837057843835,
        "smoothedEle": 238.05501047292555,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067096,
        "lng": 120.576464,
        "ele": 237.5,
        "distanceKm": 28.41763858150673,
        "gradePct": 0.850994583661975,
        "smoothedEle": 238.17540303410982,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06737,
        "lng": 120.576653,
        "ele": 235.5,
        "distanceKm": 28.453723613944,
        "gradePct": 0.6944497280700428,
        "smoothedEle": 238.24460653620216,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067866,
        "lng": 120.576967,
        "ele": 238.5,
        "distanceKm": 28.517549538813824,
        "gradePct": 0.41467023464351066,
        "smoothedEle": 238.40398369118765,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068334,
        "lng": 120.577282,
        "ele": 239.25,
        "distanceKm": 28.578758901144788,
        "gradePct": 0.2640780189378385,
        "smoothedEle": 238.59278980705716,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068741,
        "lng": 120.577666,
        "ele": 238.25,
        "distanceKm": 28.638687349418316,
        "gradePct": 0.360418379209507,
        "smoothedEle": 238.93660690198737,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.069101,
        "lng": 120.577954,
        "ele": 238.5,
        "distanceKm": 28.688391552497677,
        "gradePct": 0.5938535880452086,
        "smoothedEle": 239.51888163006527,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06963,
        "lng": 120.578256,
        "ele": 239.75,
        "distanceKm": 28.754833873440624,
        "gradePct": 1.1073147917154,
        "smoothedEle": 240.73362036071748,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070062058754566,
        "lng": 120.57850687282523,
        "ele": 240.62108619872734,
        "distanceKm": 28.809302215394837,
        "gradePct": 1.4238026710106675,
        "smoothedEle": 241.61562600983868,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070492,
        "lng": 120.578762,
        "ele": 242,
        "distanceKm": 28.863770161279355,
        "gradePct": 1.6061461395643506,
        "smoothedEle": 242.44273927010204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070885831496184,
        "lng": 120.57899355788408,
        "ele": 243.44506265994085,
        "distanceKm": 28.913558817745752,
        "gradePct": 1.655065969470448,
        "smoothedEle": 243.28913674663696,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.071276915748093,
        "lng": 120.57923077894203,
        "ele": 245.09753132997048,
        "distanceKm": 28.963358707397937,
        "gradePct": 1.619585981056153,
        "smoothedEle": 244.11083492589802,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.071668,
        "lng": 120.579468,
        "ele": 246.75,
        "distanceKm": 29.013158562667623,
        "gradePct": 1.5338406421571504,
        "smoothedEle": 244.7418671666377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.072016381135743,
        "lng": 120.57967246281657,
        "ele": 246.75,
        "distanceKm": 29.057183150571422,
        "gradePct": 1.4098565052460879,
        "smoothedEle": 245.16242640641164,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.072368587423828,
        "lng": 120.57986930854439,
        "ele": 246.75,
        "distanceKm": 29.101220701353864,
        "gradePct": 1.1737809452211434,
        "smoothedEle": 245.4269530580569,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.072720793711916,
        "lng": 120.58006615427219,
        "ele": 246.75,
        "distanceKm": 29.14525822802387,
        "gradePct": 0.9319943501552961,
        "smoothedEle": 245.6761657165365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073073,
        "lng": 120.580263,
        "ele": 246.75,
        "distanceKm": 29.189295730581772,
        "gradePct": 0.7310825841838975,
        "smoothedEle": 245.90165763291083,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073559,
        "lng": 120.580538,
        "ele": 245.75,
        "distanceKm": 29.250220647789536,
        "gradePct": 0.5128863422010587,
        "smoothedEle": 246.12168751134658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073886,
        "lng": 120.580719,
        "ele": 244.87499999999997,
        "distanceKm": 29.291024544357256,
        "gradePct": 0.44767077470585703,
        "smoothedEle": 246.2610478936519,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074213,
        "lng": 120.5809,
        "ele": 244,
        "distanceKm": 29.3318284204962,
        "gradePct": 0.4299466015958317,
        "smoothedEle": 246.46005832909736,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07465185214602,
        "lng": 120.58110636674878,
        "ele": 245.25008184426474,
        "distanceKm": 29.384997434534945,
        "gradePct": 0.4471976028335705,
        "smoothedEle": 246.77404362015173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075088901430682,
        "lng": 120.58131724449919,
        "ele": 246.50005456284316,
        "distanceKm": 29.4381680415014,
        "gradePct": 0.5305510661749812,
        "smoothedEle": 247.13926174709934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075525950715342,
        "lng": 120.5815281222496,
        "ele": 247.75002728142158,
        "distanceKm": 29.491338620024884,
        "gradePct": 0.6381822546868272,
        "smoothedEle": 247.53894422650146,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075963,
        "lng": 120.581739,
        "ele": 249,
        "distanceKm": 29.54450917010533,
        "gradePct": 0.7346878413538488,
        "smoothedEle": 248.00431914798435,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076337668178574,
        "lng": 120.58191339340509,
        "ele": 249.52503167555545,
        "distanceKm": 29.589829453459636,
        "gradePct": 0.8306402072525032,
        "smoothedEle": 248.46851419368886,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076711071887868,
        "lng": 120.58209102880276,
        "ele": 249.94477505380755,
        "distanceKm": 29.635152448635246,
        "gradePct": 0.8819961664692674,
        "smoothedEle": 248.88254058359598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07708447559716,
        "lng": 120.58226866420044,
        "ele": 250.3645184320596,
        "distanceKm": 29.680475423581047,
        "gradePct": 0.8864967518223241,
        "smoothedEle": 249.2302792376212,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.077458,
        "lng": 120.582446,
        "ele": 250,
        "distanceKm": 29.725798397437664,
        "gradePct": 0.8297186855521688,
        "smoothedEle": 249.49999059325333,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0779605,
        "lng": 120.582703,
        "ele": 249.625,
        "distanceKm": 29.787549919421647,
        "gradePct": 0.6383126466411988,
        "smoothedEle": 249.72179125680515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078463,
        "lng": 120.58296,
        "ele": 249.25,
        "distanceKm": 29.849301399580316,
        "gradePct": 0.2661160694626839,
        "smoothedEle": 249.52332996448067,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078938447858874,
        "lng": 120.58318703101659,
        "ele": 249.60735690802764,
        "distanceKm": 29.9070451266521,
        "gradePct": -0.185976874201075,
        "smoothedEle": 249.01643847308256,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07941472392944,
        "lng": 120.5834120155083,
        "ele": 249.80367845401383,
        "distanceKm": 29.964789390075307,
        "gradePct": -0.5659588400334619,
        "smoothedEle": 248.5081217372756,
        "gradeBand": "descent"
      },
      {
        "lat": 23.079891,
        "lng": 120.583637,
        "ele": 250,
        "distanceKm": 30.022533621006264,
        "gradePct": -0.7578568873610037,
        "smoothedEle": 248.09364437750108,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080144,
        "lng": 120.583857,
        "ele": 248.75,
        "distanceKm": 30.05855997656359,
        "gradePct": -0.7788048655866674,
        "smoothedEle": 247.88444570993892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080338,
        "lng": 120.584199,
        "ele": 245.25,
        "distanceKm": 30.099660816065004,
        "gradePct": -0.69577429045552,
        "smoothedEle": 247.6897115515318,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080515333333334,
        "lng": 120.58465,
        "ele": 245.625,
        "distanceKm": 30.149832974407214,
        "gradePct": -0.5803063163073736,
        "smoothedEle": 247.47916887380634,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080692666666668,
        "lng": 120.585101,
        "ele": 246,
        "distanceKm": 30.200005076798284,
        "gradePct": -0.41494670443224074,
        "smoothedEle": 247.4254566727796,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08087,
        "lng": 120.585552,
        "ele": 246.375,
        "distanceKm": 30.25017712323916,
        "gradePct": -0.15878356510297978,
        "smoothedEle": 247.6155563246425,
        "gradeBand": "descent"
      },
      {
        "lat": 23.081047333333334,
        "lng": 120.586003,
        "ele": 246.75,
        "distanceKm": 30.300349113726767,
        "gradePct": 0.1353251058550034,
        "smoothedEle": 247.95747338774493,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081224666666667,
        "lng": 120.586454,
        "ele": 247.125,
        "distanceKm": 30.350521048262053,
        "gradePct": 0.5996262196086114,
        "smoothedEle": 248.67768468929341,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081402,
        "lng": 120.586905,
        "ele": 247.5,
        "distanceKm": 30.40069292684462,
        "gradePct": 1.153403738686795,
        "smoothedEle": 249.73487038337703,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081529,
        "lng": 120.587263,
        "ele": 250.25,
        "distanceKm": 30.439942558864406,
        "gradePct": 1.6172790940154642,
        "smoothedEle": 250.8113362035825,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081601786469573,
        "lng": 120.58774409773721,
        "ele": 252.34466173927888,
        "distanceKm": 30.489816884308112,
        "gradePct": 2.2723942292710797,
        "smoothedEle": 252.4304857633422,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081648,
        "lng": 120.58823,
        "ele": 253.5,
        "distanceKm": 30.539786508341788,
        "gradePct": 2.977497247398656,
        "smoothedEle": 254.47858632243197,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081701674184657,
        "lng": 120.58868087717043,
        "ele": 254.75,
        "distanceKm": 30.586292900319105,
        "gradePct": 3.582950811985496,
        "smoothedEle": 256.59734501861874,
        "gradeBand": "hard"
      },
      {
        "lat": 23.08174,
        "lng": 120.589134,
        "ele": 256.25,
        "distanceKm": 30.63283993688932,
        "gradePct": 4.061650857083521,
        "smoothedEle": 258.7398404280261,
        "gradeBand": "hard"
      },
      {
        "lat": 23.081824,
        "lng": 120.589622,
        "ele": 260.25,
        "distanceKm": 30.68362548340668,
        "gradePct": 4.430845075291275,
        "smoothedEle": 261.0911746180743,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082012,
        "lng": 120.589987,
        "ele": 263.25,
        "distanceKm": 30.72641641093251,
        "gradePct": 4.551322192391938,
        "smoothedEle": 263.03323170765225,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082277,
        "lng": 120.590183,
        "ele": 267.25,
        "distanceKm": 30.76205722246971,
        "gradePct": 4.666569859412322,
        "smoothedEle": 264.826345047862,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082702338669293,
        "lng": 120.59039493108253,
        "ele": 269.61677132164596,
        "distanceKm": 30.814084640072508,
        "gradePct": 4.926170053794567,
        "smoothedEle": 267.72890028636726,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083138,
        "lng": 120.590583,
        "ele": 270.25,
        "distanceKm": 30.866208202476194,
        "gradePct": 5.314356447428271,
        "smoothedEle": 270.91347996279205,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083402,
        "lng": 120.590846,
        "ele": 271.25,
        "distanceKm": 30.906026677674934,
        "gradePct": 5.79384467355549,
        "smoothedEle": 273.695537373758,
        "gradeBand": "hard"
      },
      {
        "lat": 23.08349,
        "lng": 120.591227,
        "ele": 272.5,
        "distanceKm": 30.94620964123205,
        "gradePct": 6.248475283986942,
        "smoothedEle": 276.52599308254054,
        "gradeBand": "steep"
      },
      {
        "lat": 23.083321,
        "lng": 120.591607,
        "ele": 277.5,
        "distanceKm": 30.989384832988673,
        "gradePct": 6.6978822459294305,
        "smoothedEle": 279.7466883622412,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082893,
        "lng": 120.591967,
        "ele": 282,
        "distanceKm": 31.049560015684094,
        "gradePct": 7.172512361184001,
        "smoothedEle": 284.241354765574,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082726,
        "lng": 120.592255,
        "ele": 284.75,
        "distanceKm": 31.084384411465923,
        "gradePct": 7.410088424522113,
        "smoothedEle": 287.0036013958705,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082664,
        "lng": 120.592727,
        "ele": 291,
        "distanceKm": 31.133156323393134,
        "gradePct": 7.747277114277465,
        "smoothedEle": 291.1010820769498,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082449,
        "lng": 120.593068,
        "ele": 295.25,
        "distanceKm": 31.175444470861795,
        "gradePct": 8.127511193271658,
        "smoothedEle": 294.9618159232458,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082099499999998,
        "lng": 120.5932875,
        "ele": 300.125,
        "distanceKm": 31.220327211187048,
        "gradePct": 8.628199703235312,
        "smoothedEle": 299.3142675856704,
        "gradeBand": "steep"
      },
      {
        "lat": 23.08175,
        "lng": 120.593507,
        "ele": 305,
        "distanceKm": 31.26520998071229,
        "gradePct": 9.016228915845321,
        "smoothedEle": 303.5151568386469,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.081106,
        "lng": 120.593594,
        "ele": 309.5,
        "distanceKm": 31.337370506390982,
        "gradePct": 9.391581327925627,
        "smoothedEle": 310.2689822989556,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.080991,
        "lng": 120.593629,
        "ele": 310.75,
        "distanceKm": 31.350649699251186,
        "gradePct": 9.38961677122885,
        "smoothedEle": 311.4773888492341,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.080865,
        "lng": 120.593733,
        "ele": 313.5,
        "distanceKm": 31.368241628278362,
        "gradePct": 9.3348498540544,
        "smoothedEle": 312.97392574350226,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.080798,
        "lng": 120.59391,
        "ele": 316.75,
        "distanceKm": 31.387820533678443,
        "gradePct": 9.184239234369588,
        "smoothedEle": 314.53044872280884,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.080593,
        "lng": 120.594596,
        "ele": 321.25,
        "distanceKm": 31.46160392064891,
        "gradePct": 8.468576172511776,
        "smoothedEle": 320.1147930471646,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080691,
        "lng": 120.595239,
        "ele": 328,
        "distanceKm": 31.528275756402646,
        "gradePct": 7.461989112816182,
        "smoothedEle": 324.34174230730576,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080707,
        "lng": 120.59539,
        "ele": 329.5,
        "distanceKm": 31.54382432006064,
        "gradePct": 7.17809126462947,
        "smoothedEle": 325.2124618721534,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080561,
        "lng": 120.595753,
        "ele": 330.25,
        "distanceKm": 31.584350944372055,
        "gradePct": 6.471652150089249,
        "smoothedEle": 327.19792067312943,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080512,
        "lng": 120.596137,
        "ele": 330.75,
        "distanceKm": 31.62400808537351,
        "gradePct": 5.841939712952033,
        "smoothedEle": 328.9532068749169,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080636,
        "lng": 120.596457,
        "ele": 332.5,
        "distanceKm": 31.65952769654017,
        "gradePct": 5.123565137987176,
        "smoothedEle": 330.20478293159846,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080902647919135,
        "lng": 120.5967372328839,
        "ele": 334.0095997872024,
        "distanceKm": 31.700769310139318,
        "gradePct": 4.415071072302355,
        "smoothedEle": 331.4279943764768,
        "gradeBand": "hard"
      },
      {
        "lat": 23.081184,
        "lng": 120.597002,
        "ele": 334.75,
        "distanceKm": 31.742149229540445,
        "gradePct": 3.743256416292822,
        "smoothedEle": 332.60516963560815,
        "gradeBand": "hard"
      },
      {
        "lat": 23.081446,
        "lng": 120.597464,
        "ele": 333,
        "distanceKm": 31.797666999772105,
        "gradePct": 2.9415487870185864,
        "smoothedEle": 333.670407389089,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081547,
        "lng": 120.5979035,
        "ele": 333.5,
        "distanceKm": 31.844006595130743,
        "gradePct": 2.5102807717619076,
        "smoothedEle": 334.6784398706147,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081648,
        "lng": 120.598343,
        "ele": 334,
        "distanceKm": 31.890346157722878,
        "gradePct": 2.5263668167637636,
        "smoothedEle": 336.1715810534516,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081753,
        "lng": 120.598829,
        "ele": 334.5,
        "distanceKm": 31.941413417578723,
        "gradePct": 2.8872348632933256,
        "smoothedEle": 338.3587069957415,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081829,
        "lng": 120.599181,
        "ele": 335.75,
        "distanceKm": 31.978399125500914,
        "gradePct": 3.55521632093736,
        "smoothedEle": 340.41114097753723,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082098794603887,
        "lng": 120.59961515564244,
        "ele": 338.1268131695038,
        "distanceKm": 32.031993415118414,
        "gradePct": 4.781593362722378,
        "smoothedEle": 343.98030200819625,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082415,
        "lng": 120.600017,
        "ele": 341.75,
        "distanceKm": 32.08608552258239,
        "gradePct": 5.962870063529884,
        "smoothedEle": 347.9600361170052,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082559,
        "lng": 120.600537,
        "ele": 350.5,
        "distanceKm": 32.14163560588416,
        "gradePct": 7.173431349278073,
        "smoothedEle": 352.7178995063807,
        "gradeBand": "steep"
      },
      {
        "lat": 23.0826,
        "lng": 120.600892,
        "ele": 356.5,
        "distanceKm": 32.17823463836719,
        "gradePct": 7.922640359964049,
        "smoothedEle": 356.2472938748063,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082559,
        "lng": 120.60127,
        "ele": 363,
        "distanceKm": 32.21716918550162,
        "gradePct": 8.560891734664827,
        "smoothedEle": 360.11485226601354,
        "gradeBand": "steep"
      },
      {
        "lat": 23.082391,
        "lng": 120.601649,
        "ele": 368.75,
        "distanceKm": 32.26020416257889,
        "gradePct": 9.16395443242085,
        "smoothedEle": 364.38376827257576,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.082073,
        "lng": 120.601843,
        "ele": 369,
        "distanceKm": 32.30075229464256,
        "gradePct": 9.64958976036653,
        "smoothedEle": 368.5154243358658,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.081998,
        "lng": 120.601931,
        "ele": 369.75,
        "distanceKm": 32.31302348178206,
        "gradePct": 9.78300063002752,
        "smoothedEle": 369.8332729785688,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.081973,
        "lng": 120.601995,
        "ele": 370.25,
        "distanceKm": 32.32013600313945,
        "gradePct": 9.842923702194158,
        "smoothedEle": 370.56230641770145,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.081967,
        "lng": 120.602186,
        "ele": 373.25,
        "distanceKm": 32.339685420406234,
        "gradePct": 9.989766117449477,
        "smoothedEle": 372.53039839881797,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.082126,
        "lng": 120.602755,
        "ele": 381.75,
        "distanceKm": 32.40051626238069,
        "gradePct": 9.727556877182767,
        "smoothedEle": 377.9157499758957,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.08215,
        "lng": 120.603114,
        "ele": 384.25,
        "distanceKm": 32.437336367548454,
        "gradePct": 9.543657732901842,
        "smoothedEle": 381.2026801543617,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.082045,
        "lng": 120.603529,
        "ele": 385,
        "distanceKm": 32.481364355140435,
        "gradePct": 9.381165769167106,
        "smoothedEle": 385.30221979592005,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.08185,
        "lng": 120.603812,
        "ele": 387.5,
        "distanceKm": 32.517533404799316,
        "gradePct": 8.928852721593856,
        "smoothedEle": 388.1532455310251,
        "gradeBand": "steep"
      },
      {
        "lat": 23.08168,
        "lng": 120.604192,
        "ele": 393,
        "distanceKm": 32.560757536617494,
        "gradePct": 8.458529708102041,
        "smoothedEle": 391.3129712714744,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081584,
        "lng": 120.604618,
        "ele": 390.25,
        "distanceKm": 32.605623017384616,
        "gradePct": 7.90601961830521,
        "smoothedEle": 394.1836691471221,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081554,
        "lng": 120.604706,
        "ele": 390,
        "distanceKm": 32.61522307269245,
        "gradePct": 7.7679229022060134,
        "smoothedEle": 394.76447249324616,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081498,
        "lng": 120.604771,
        "ele": 391,
        "distanceKm": 32.62433268197482,
        "gradePct": 7.600301101288016,
        "smoothedEle": 395.2424435611626,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081391,
        "lng": 120.604855,
        "ele": 393.25,
        "distanceKm": 32.63900897091457,
        "gradePct": 7.257552085764882,
        "smoothedEle": 395.8735239855717,
        "gradeBand": "steep"
      },
      {
        "lat": 23.081163,
        "lng": 120.604956,
        "ele": 400,
        "distanceKm": 32.66638581874595,
        "gradePct": 6.60497707274674,
        "smoothedEle": 397.1174905347865,
        "gradeBand": "steep"
      },
      {
        "lat": 23.080855,
        "lng": 120.605268,
        "ele": 408.5,
        "distanceKm": 32.71319977591911,
        "gradePct": 5.77075678439937,
        "smoothedEle": 399.353160755925,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080731,
        "lng": 120.605782,
        "ele": 406.5,
        "distanceKm": 32.76755684361762,
        "gradePct": 5.0354087564092955,
        "smoothedEle": 401.81883942517317,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080834,
        "lng": 120.606254,
        "ele": 404.25,
        "distanceKm": 32.8171795250787,
        "gradePct": 4.439121132938021,
        "smoothedEle": 403.7453676399864,
        "gradeBand": "hard"
      },
      {
        "lat": 23.08079,
        "lng": 120.606589,
        "ele": 403.5,
        "distanceKm": 32.85179559143826,
        "gradePct": 4.3764032894178175,
        "smoothedEle": 405.2073371253871,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080488,
        "lng": 120.606805,
        "ele": 403.25,
        "distanceKm": 32.89199375737599,
        "gradePct": 4.320490030932571,
        "smoothedEle": 406.9814158308724,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080372,
        "lng": 120.60681,
        "ele": 404.5,
        "distanceKm": 32.90490252347577,
        "gradePct": 4.265223637352132,
        "smoothedEle": 407.4873603872987,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080286,
        "lng": 120.606769,
        "ele": 406.25,
        "distanceKm": 32.915344601636036,
        "gradePct": 4.16464343250328,
        "smoothedEle": 407.77973857578615,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080237,
        "lng": 120.606703,
        "ele": 407.5,
        "distanceKm": 32.924020362594355,
        "gradePct": 4.089334469380929,
        "smoothedEle": 408.0226598826191,
        "gradeBand": "hard"
      },
      {
        "lat": 23.080002,
        "lng": 120.606306,
        "ele": 409.5,
        "distanceKm": 32.97231193335455,
        "gradePct": 3.3753289486818208,
        "smoothedEle": 408.7541067445275,
        "gradeBand": "hard"
      },
      {
        "lat": 23.079931,
        "lng": 120.606247,
        "ele": 408.75,
        "distanceKm": 32.98224947281088,
        "gradePct": 3.202298791674718,
        "smoothedEle": 408.79385690235284,
        "gradeBand": "hard"
      },
      {
        "lat": 23.079845,
        "lng": 120.606231,
        "ele": 408.25,
        "distanceKm": 32.99195130515657,
        "gradePct": 3.036518703575339,
        "smoothedEle": 408.8389562132884,
        "gradeBand": "hard"
      },
      {
        "lat": 23.079755,
        "lng": 120.606264,
        "ele": 407.75,
        "distanceKm": 33.00251287645075,
        "gradePct": 2.873746189969909,
        "smoothedEle": 408.9234487836419,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.079605,
        "lng": 120.606408,
        "ele": 408.25,
        "distanceKm": 33.024765633764396,
        "gradePct": 2.5115442024943415,
        "smoothedEle": 409.08884656237876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.079323,
        "lng": 120.606703,
        "ele": 412.5,
        "distanceKm": 33.06828482056909,
        "gradePct": 1.8366975293773204,
        "smoothedEle": 409.60845668570687,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078837,
        "lng": 120.606744,
        "ele": 413.25,
        "distanceKm": 33.122488138343265,
        "gradePct": 1.529129016658636,
        "smoothedEle": 411.0380156369058,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078498,
        "lng": 120.606839,
        "ele": 414,
        "distanceKm": 33.16141582246672,
        "gradePct": 2.004019725515775,
        "smoothedEle": 412.5971085711777,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078159,
        "lng": 120.60682,
        "ele": 413.25,
        "distanceKm": 33.19916102977241,
        "gradePct": 2.696548061600585,
        "smoothedEle": 414.2897301334164,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.077771,
        "lng": 120.606712,
        "ele": 410.5,
        "distanceKm": 33.24369682015479,
        "gradePct": 3.5108928086548086,
        "smoothedEle": 416.33666664442245,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077441,
        "lng": 120.606749,
        "ele": 410,
        "distanceKm": 33.280585887829545,
        "gradePct": 4.096042178064692,
        "smoothedEle": 418.1249695368732,
        "gradeBand": "hard"
      },
      {
        "lat": 23.0769375,
        "lng": 120.606988,
        "ele": 416.8750000000004,
        "distanceKm": 33.34167816018847,
        "gradePct": 4.4650871397590715,
        "smoothedEle": 420.73676960825713,
        "gradeBand": "hard"
      },
      {
        "lat": 23.076434,
        "lng": 120.607227,
        "ele": 423.75,
        "distanceKm": 33.40277046918086,
        "gradePct": 4.5362206471554245,
        "smoothedEle": 423.52806706460666,
        "gradeBand": "hard"
      },
      {
        "lat": 23.07625,
        "lng": 120.607521,
        "ele": 431.75,
        "distanceKm": 33.43914550442384,
        "gradePct": 4.639098603057837,
        "smoothedEle": 425.40567806394256,
        "gradeBand": "hard"
      },
      {
        "lat": 23.076187,
        "lng": 120.607615,
        "ele": 431.5,
        "distanceKm": 33.451042616534984,
        "gradePct": 4.695519177183503,
        "smoothedEle": 426.0838134542777,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075945,
        "lng": 120.607725,
        "ele": 432.5,
        "distanceKm": 33.48020989637227,
        "gradePct": 4.884510203455237,
        "smoothedEle": 427.8757626842469,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075356,
        "lng": 120.607826,
        "ele": 432,
        "distanceKm": 33.546513771129035,
        "gradePct": 6.010275663536162,
        "smoothedEle": 432.97825919647744,
        "gradeBand": "steep"
      },
      {
        "lat": 23.07492321458156,
        "lng": 120.60798505141257,
        "ele": 434.3708438417585,
        "distanceKm": 33.59731355819041,
        "gradePct": 6.444948282050738,
        "smoothedEle": 436.1686382714186,
        "gradeBand": "steep"
      },
      {
        "lat": 23.07449910729078,
        "lng": 120.6081730257063,
        "ele": 438.060421920879,
        "distanceKm": 33.648242073032,
        "gradePct": 6.335762297168879,
        "smoothedEle": 438.59570706894544,
        "gradeBand": "steep"
      },
      {
        "lat": 23.074075,
        "lng": 120.608361,
        "ele": 441.75,
        "distanceKm": 33.69917061076865,
        "gradePct": 5.588039099277813,
        "smoothedEle": 440.5109860599406,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073781,
        "lng": 120.608686,
        "ele": 447,
        "distanceKm": 33.74579795597664,
        "gradePct": 4.755941708384274,
        "smoothedEle": 442.43505617475506,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073753,
        "lng": 120.608749,
        "ele": 448,
        "distanceKm": 33.75295547294703,
        "gradePct": 4.66032282964459,
        "smoothedEle": 442.70346306114465,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073742,
        "lng": 120.608859,
        "ele": 449.5,
        "distanceKm": 33.764274709376764,
        "gradePct": 4.517573942405129,
        "smoothedEle": 443.1288473028858,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073759,
        "lng": 120.608953,
        "ele": 450,
        "distanceKm": 33.77407490720921,
        "gradePct": 4.329513189617013,
        "smoothedEle": 443.3682076310651,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073832,
        "lng": 120.609081,
        "ele": 449.75,
        "distanceKm": 33.78948112216117,
        "gradePct": 4.0113517342389855,
        "smoothedEle": 443.6994412525322,
        "gradeBand": "hard"
      },
      {
        "lat": 23.074135,
        "lng": 120.609247,
        "ele": 445.25,
        "distanceKm": 33.82721090500993,
        "gradePct": 3.356895515217454,
        "smoothedEle": 444.30722870588465,
        "gradeBand": "hard"
      },
      {
        "lat": 23.074461,
        "lng": 120.609495,
        "ele": 444.25,
        "distanceKm": 33.87145658457137,
        "gradePct": 2.7512057885841905,
        "smoothedEle": 444.9711510993031,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074574,
        "lng": 120.609687,
        "ele": 444,
        "distanceKm": 33.89477321759241,
        "gradePct": 2.467793375175255,
        "smoothedEle": 445.28119922722954,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074595,
        "lng": 120.609905,
        "ele": 445.75,
        "distanceKm": 33.91719631000738,
        "gradePct": 2.2296708500977016,
        "smoothedEle": 445.7141554228339,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074523,
        "lng": 120.610304,
        "ele": 452.5,
        "distanceKm": 33.958791362406,
        "gradePct": 1.8192029452686738,
        "smoothedEle": 446.5611854601583,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074572,
        "lng": 120.610507,
        "ele": 453.5,
        "distanceKm": 33.98026093289663,
        "gradePct": 1.8058378931427823,
        "smoothedEle": 447.1128829696301,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074618,
        "lng": 120.610558,
        "ele": 452.75,
        "distanceKm": 33.987567274055436,
        "gradePct": 1.7967049666942811,
        "smoothedEle": 447.2517034516475,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074698,
        "lng": 120.610616,
        "ele": 451.25,
        "distanceKm": 33.998260089381226,
        "gradePct": 1.8136473964744395,
        "smoothedEle": 447.4681560518228,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075009,
        "lng": 120.61069,
        "ele": 442.75,
        "distanceKm": 34.0336606322878,
        "gradePct": 1.8268673785221405,
        "smoothedEle": 448.05774394892586,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075203,
        "lng": 120.610738,
        "ele": 440.25,
        "distanceKm": 34.05578428196979,
        "gradePct": 1.8447889310786274,
        "smoothedEle": 448.425560403609,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075283,
        "lng": 120.610804,
        "ele": 439.75,
        "distanceKm": 34.06695196972006,
        "gradePct": 1.898361167923214,
        "smoothedEle": 448.7002800632508,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075316,
        "lng": 120.610875,
        "ele": 439.75,
        "distanceKm": 34.07508945539466,
        "gradePct": 1.9706105767898525,
        "smoothedEle": 448.9606796048381,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075179,
        "lng": 120.611373,
        "ele": 444.5,
        "distanceKm": 34.12826296552884,
        "gradePct": 2.3481076429302115,
        "smoothedEle": 450.6357289928857,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075178,
        "lng": 120.611821,
        "ele": 449,
        "distanceKm": 34.17409283518784,
        "gradePct": 2.480545701704749,
        "smoothedEle": 451.9154745024623,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075381,
        "lng": 120.612182,
        "ele": 456.5,
        "distanceKm": 34.21737479154266,
        "gradePct": 2.3711771255633725,
        "smoothedEle": 452.52886126951114,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075817,
        "lng": 120.61218,
        "ele": 457.5,
        "distanceKm": 34.26585627823438,
        "gradePct": 2.265522816494748,
        "smoothedEle": 453.204372221291,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07601,
        "lng": 120.612223,
        "ele": 457.75,
        "distanceKm": 34.28776310518884,
        "gradePct": 2.3802698306966708,
        "smoothedEle": 454.12045921255987,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076074,
        "lng": 120.612266,
        "ele": 458.25,
        "distanceKm": 34.296129339208335,
        "gradePct": 2.441298300820727,
        "smoothedEle": 454.50606571233976,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076336,
        "lng": 120.612522,
        "ele": 461.25,
        "distanceKm": 34.335302812672865,
        "gradePct": 2.936021904290457,
        "smoothedEle": 456.70435229946,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076724,
        "lng": 120.612737,
        "ele": 459,
        "distanceKm": 34.383729172730334,
        "gradePct": 3.691658873365161,
        "smoothedEle": 459.43535728527667,
        "gradeBand": "hard"
      },
      {
        "lat": 23.076932,
        "lng": 120.613075,
        "ele": 458.25,
        "distanceKm": 34.425328014233266,
        "gradePct": 4.345987198478009,
        "smoothedEle": 461.3316509362961,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077114,
        "lng": 120.613367,
        "ele": 456.75,
        "distanceKm": 34.46140873899475,
        "gradePct": 4.829925796220965,
        "smoothedEle": 462.8022545617597,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077159,
        "lng": 120.61376,
        "ele": 460.25,
        "distanceKm": 34.50192166765093,
        "gradePct": 4.74154799308123,
        "smoothedEle": 464.31420813420027,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077140500000002,
        "lng": 120.614172,
        "ele": 465.37499999999955,
        "distanceKm": 34.544118210616475,
        "gradePct": 4.394873431879057,
        "smoothedEle": 465.99124360495165,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077122,
        "lng": 120.614584,
        "ele": 470.5,
        "distanceKm": 34.58631475937323,
        "gradePct": 4.161956217611842,
        "smoothedEle": 467.87713433782966,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077165,
        "lng": 120.614948,
        "ele": 471.5,
        "distanceKm": 34.62385660225357,
        "gradePct": 4.140971668446011,
        "smoothedEle": 469.54651958806886,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077278,
        "lng": 120.615284,
        "ele": 469.5,
        "distanceKm": 34.6604530435807,
        "gradePct": 4.145239116641958,
        "smoothedEle": 471.05377988736154,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077303,
        "lng": 120.615858,
        "ele": 474.75,
        "distanceKm": 34.719237235421126,
        "gradePct": 4.1132955207660284,
        "smoothedEle": 473.2289792802145,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077368,
        "lng": 120.6163,
        "ele": 477.5,
        "distanceKm": 34.76502648460268,
        "gradePct": 4.083057689031419,
        "smoothedEle": 475.0918126602182,
        "gradeBand": "hard"
      },
      {
        "lat": 23.07745,
        "lng": 120.617004,
        "ele": 483,
        "distanceKm": 34.83761836026401,
        "gradePct": 4.71498049959526,
        "smoothedEle": 479.5432720769618,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077616,
        "lng": 120.617293,
        "ele": 482.25,
        "distanceKm": 34.87247130019067,
        "gradePct": 4.947974252356986,
        "smoothedEle": 481.39444156517004,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077928,
        "lng": 120.617425,
        "ele": 477,
        "distanceKm": 34.90969937791025,
        "gradePct": 5.057351858891322,
        "smoothedEle": 482.9907523678867,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078169,
        "lng": 120.617805,
        "ele": 475.5,
        "distanceKm": 34.9569139210072,
        "gradePct": 5.212528984981458,
        "smoothedEle": 485.1868290913225,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078199,
        "lng": 120.618036,
        "ele": 476.75,
        "distanceKm": 34.980778645592636,
        "gradePct": 5.1193881787210795,
        "smoothedEle": 486.2965387845453,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078181,
        "lng": 120.618119,
        "ele": 478.25,
        "distanceKm": 34.989501953973914,
        "gradePct": 5.139785965136082,
        "smoothedEle": 486.8722627207112,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078079,
        "lng": 120.618287,
        "ele": 484,
        "distanceKm": 35.01009295831977,
        "gradePct": 5.154001334553454,
        "smoothedEle": 488.16336947336305,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077725,
        "lng": 120.618515,
        "ele": 500.25,
        "distanceKm": 35.05584708572707,
        "gradePct": 5.3394570897036235,
        "smoothedEle": 491.1903817789607,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077677,
        "lng": 120.618645,
        "ele": 503,
        "distanceKm": 35.07017674325555,
        "gradePct": 5.392378480863848,
        "smoothedEle": 492.05732605943354,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077688,
        "lng": 120.618709,
        "ele": 502.75,
        "distanceKm": 35.07683700399084,
        "gradePct": 5.43931615526271,
        "smoothedEle": 492.4602718339185,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077713,
        "lng": 120.618795,
        "ele": 502,
        "distanceKm": 35.08606326277222,
        "gradePct": 5.492390948569728,
        "smoothedEle": 492.9620361678831,
        "gradeBand": "hard"
      },
      {
        "lat": 23.077874,
        "lng": 120.61894,
        "ele": 495.75,
        "distanceKm": 35.10931221946244,
        "gradePct": 5.5725546454503165,
        "smoothedEle": 494.11926060790154,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078066,
        "lng": 120.619326,
        "ele": 490.75,
        "distanceKm": 35.15420069902697,
        "gradePct": 5.831432699732689,
        "smoothedEle": 496.7234951622451,
        "gradeBand": "hard"
      },
      {
        "lat": 23.078087,
        "lng": 120.619859,
        "ele": 498,
        "distanceKm": 35.20877461227966,
        "gradePct": 6.124993696177027,
        "smoothedEle": 500.33069331778506,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077946,
        "lng": 120.620274,
        "ele": 508.5,
        "distanceKm": 35.254030238864694,
        "gradePct": 6.210123978713168,
        "smoothedEle": 503.4904303550099,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077915,
        "lng": 120.620792,
        "ele": 513.25,
        "distanceKm": 35.30713178467878,
        "gradePct": 6.377249425387613,
        "smoothedEle": 506.7652276025967,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077872,
        "lng": 120.621255,
        "ele": 507.75,
        "distanceKm": 35.35473577317313,
        "gradePct": 6.218247823906435,
        "smoothedEle": 509.1953578628872,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077565,
        "lng": 120.621589,
        "ele": 511.25,
        "distanceKm": 35.40303396293826,
        "gradePct": 6.54927726630614,
        "smoothedEle": 513.0498053937051,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077405,
        "lng": 120.621612,
        "ele": 510.75,
        "distanceKm": 35.42098007789475,
        "gradePct": 6.772562911162498,
        "smoothedEle": 514.7280018336387,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077277,
        "lng": 120.621607,
        "ele": 508.25,
        "distanceKm": 35.43522223569984,
        "gradePct": 7.03517439670783,
        "smoothedEle": 516.2476088604268,
        "gradeBand": "steep"
      },
      {
        "lat": 23.077143,
        "lng": 120.621516,
        "ele": 508,
        "distanceKm": 35.452791303031404,
        "gradePct": 7.301675075579037,
        "smoothedEle": 518.0072783022523,
        "gradeBand": "steep"
      },
      {
        "lat": 23.076731,
        "lng": 120.620966,
        "ele": 521.75,
        "distanceKm": 35.5253471371264,
        "gradePct": 8.532504176975145,
        "smoothedEle": 524.7601092840746,
        "gradeBand": "steep"
      },
      {
        "lat": 23.076357,
        "lng": 120.62068,
        "ele": 525.75,
        "distanceKm": 35.57619447600052,
        "gradePct": 8.293626888662086,
        "smoothedEle": 527.4951280829563,
        "gradeBand": "steep"
      },
      {
        "lat": 23.076037,
        "lng": 120.6204765,
        "ele": 531.6250000000006,
        "distanceKm": 35.61741923891279,
        "gradePct": 7.801957114809059,
        "smoothedEle": 529.998931051337,
        "gradeBand": "steep"
      },
      {
        "lat": 23.075717,
        "lng": 120.620273,
        "ele": 537.5,
        "distanceKm": 35.65864402683872,
        "gradePct": 6.560214327085326,
        "smoothedEle": 531.6724247609534,
        "gradeBand": "steep"
      },
      {
        "lat": 23.0755,
        "lng": 120.620224,
        "ele": 546,
        "distanceKm": 35.683288518185826,
        "gradePct": 5.8559383221054615,
        "smoothedEle": 532.5575557714669,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075412,
        "lng": 120.620227,
        "ele": 548.5,
        "distanceKm": 35.69307849667885,
        "gradePct": 5.596157228441974,
        "smoothedEle": 532.9491549111879,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075191,
        "lng": 120.620315,
        "ele": 552.25,
        "distanceKm": 35.719249620487076,
        "gradePct": 4.908006439580945,
        "smoothedEle": 534.0086212890777,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075138,
        "lng": 120.620348,
        "ele": 553,
        "distanceKm": 35.72604136694006,
        "gradePct": 4.743117963923272,
        "smoothedEle": 534.2836870204235,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075089,
        "lng": 120.6204,
        "ele": 553,
        "distanceKm": 35.73365609900631,
        "gradePct": 4.696510784439899,
        "smoothedEle": 534.6000601799147,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075042,
        "lng": 120.620498,
        "ele": 551.75,
        "distanceKm": 35.744961793867034,
        "gradePct": 4.550943263221021,
        "smoothedEle": 534.9170452213039,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075042,
        "lng": 120.620584,
        "ele": 549.25,
        "distanceKm": 35.75375947509429,
        "gradePct": 4.37811796801804,
        "smoothedEle": 535.0446115990992,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075085,
        "lng": 120.620972,
        "ele": 539.75,
        "distanceKm": 35.79373828511894,
        "gradePct": 3.6062586397108647,
        "smoothedEle": 535.7731758407674,
        "gradeBand": "hard"
      },
      {
        "lat": 23.075062,
        "lng": 120.621512,
        "ele": 538.75,
        "distanceKm": 35.84903869630474,
        "gradePct": 2.9062745160058667,
        "smoothedEle": 537.0950515875122,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075198,
        "lng": 120.622029,
        "ele": 528.25,
        "distanceKm": 35.90404659258125,
        "gradePct": 2.772663250773991,
        "smoothedEle": 538.9384947811802,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075156,
        "lng": 120.622513,
        "ele": 528.25,
        "distanceKm": 35.953778841334476,
        "gradePct": 2.7346227482483596,
        "smoothedEle": 540.5142100213104,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07506,
        "lng": 120.62269,
        "ele": 528.25,
        "distanceKm": 35.974798063671834,
        "gradePct": 2.7501108653269917,
        "smoothedEle": 540.9282355201465,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074996,
        "lng": 120.622755,
        "ele": 529.25,
        "distanceKm": 35.98453762353268,
        "gradePct": 2.8418753634633895,
        "smoothedEle": 541.2892559184851,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074867,
        "lng": 120.622798,
        "ele": 529,
        "distanceKm": 35.99954112012951,
        "gradePct": 2.994495496158791,
        "smoothedEle": 541.9008751482377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074484,
        "lng": 120.622798,
        "ele": 532.25,
        "distanceKm": 36.042128835858875,
        "gradePct": 3.7667777774383384,
        "smoothedEle": 544.4634369973409,
        "gradeBand": "hard"
      },
      {
        "lat": 23.074258,
        "lng": 120.622723,
        "ele": 536.5,
        "distanceKm": 36.06840406342745,
        "gradePct": 4.223284899510528,
        "smoothedEle": 546.190600108348,
        "gradeBand": "hard"
      },
      {
        "lat": 23.07416,
        "lng": 120.622677,
        "ele": 539,
        "distanceKm": 36.08027383207531,
        "gradePct": 4.365565842021676,
        "smoothedEle": 546.8729456881749,
        "gradeBand": "hard"
      },
      {
        "lat": 23.07405,
        "lng": 120.622489,
        "ele": 544.25,
        "distanceKm": 36.10306613256311,
        "gradePct": 4.513575193430988,
        "smoothedEle": 547.9327876608577,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073988,
        "lng": 120.62198,
        "ele": 557.25,
        "distanceKm": 36.15559093035128,
        "gradePct": 4.924578280403282,
        "smoothedEle": 550.3990601509407,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073693,
        "lng": 120.621732,
        "ele": 561.75,
        "distanceKm": 36.197059695902986,
        "gradePct": 5.301798558334592,
        "smoothedEle": 552.4033167266416,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073221,
        "lng": 120.621509,
        "ele": 572.5,
        "distanceKm": 36.25428735574157,
        "gradePct": 5.227945847728375,
        "smoothedEle": 555.7185509629387,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073157,
        "lng": 120.621509,
        "ele": 575.5,
        "distanceKm": 36.26140384087672,
        "gradePct": 5.223556695985946,
        "smoothedEle": 556.1775642541559,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073062,
        "lng": 120.621586,
        "ele": 576.75,
        "distanceKm": 36.274580981445695,
        "gradePct": 5.28605111467355,
        "smoothedEle": 557.1177886777699,
        "gradeBand": "hard"
      },
      {
        "lat": 23.073007,
        "lng": 120.621699,
        "ele": 575.25,
        "distanceKm": 36.2876589711735,
        "gradePct": 5.414985646101493,
        "smoothedEle": 558.046325948444,
        "gradeBand": "hard"
      },
      {
        "lat": 23.072971,
        "lng": 120.621844,
        "ele": 572.25,
        "distanceKm": 36.30302314022747,
        "gradePct": 5.603196717012599,
        "smoothedEle": 559.1371819512756,
        "gradeBand": "hard"
      },
      {
        "lat": 23.072883,
        "lng": 120.622264,
        "ele": 562,
        "distanceKm": 36.34708939562944,
        "gradePct": 6.1649778138983296,
        "smoothedEle": 562.3298309728764,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072709,
        "lng": 120.622753,
        "ele": 552.75,
        "distanceKm": 36.40072548008489,
        "gradePct": 6.4351027906106655,
        "smoothedEle": 565.485883485255,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072665,
        "lng": 120.62284,
        "ele": 551.75,
        "distanceKm": 36.410881748531324,
        "gradePct": 6.362586864854474,
        "smoothedEle": 565.9292106363931,
        "gradeBand": "steep"
      },
      {
        "lat": 23.0726,
        "lng": 120.622911,
        "ele": 551.75,
        "distanceKm": 36.4211284725913,
        "gradePct": 6.289425084512028,
        "smoothedEle": 566.3764862287985,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072544,
        "lng": 120.622935,
        "ele": 552.75,
        "distanceKm": 36.427821951083445,
        "gradePct": 6.234898665863366,
        "smoothedEle": 566.6551907997138,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072457,
        "lng": 120.62295,
        "ele": 553.25,
        "distanceKm": 36.43761687066146,
        "gradePct": 6.120885638941187,
        "smoothedEle": 566.9945905818795,
        "gradeBand": "steep"
      },
      {
        "lat": 23.072373,
        "lng": 120.622935,
        "ele": 552.75,
        "distanceKm": 36.44708246853501,
        "gradePct": 5.99953580434007,
        "smoothedEle": 567.3002389357473,
        "gradeBand": "hard"
      },
      {
        "lat": 23.072051,
        "lng": 120.622605,
        "ele": 561.25,
        "distanceKm": 36.49629295629754,
        "gradePct": 4.931708237198266,
        "smoothedEle": 568.5227553666471,
        "gradeBand": "hard"
      },
      {
        "lat": 23.071746,
        "lng": 120.622418,
        "ele": 567.75,
        "distanceKm": 36.53523087130927,
        "gradePct": 3.9021525625561835,
        "smoothedEle": 569.2749728738148,
        "gradeBand": "hard"
      },
      {
        "lat": 23.071185,
        "lng": 120.622106,
        "ele": 578.75,
        "distanceKm": 36.6053028283049,
        "gradePct": 2.742576191629741,
        "smoothedEle": 571.1708398375458,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070698972080304,
        "lng": 120.62198066178243,
        "ele": 579.0752970309013,
        "distanceKm": 36.66084701263521,
        "gradePct": 3.497398376076383,
        "smoothedEle": 574.6369827421041,
        "gradeBand": "hard"
      },
      {
        "lat": 23.070208,
        "lng": 120.621877,
        "ele": 577.75,
        "distanceKm": 36.71646114811983,
        "gradePct": 5.93498383001807,
        "smoothedEle": 580.7823398557323,
        "gradeBand": "hard"
      },
      {
        "lat": 23.070061,
        "lng": 120.621779,
        "ele": 580,
        "distanceKm": 36.735636507712194,
        "gradePct": 6.796641570360708,
        "smoothedEle": 582.8792309136054,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069899,
        "lng": 120.621507,
        "ele": 585.5,
        "distanceKm": 36.76878452847655,
        "gradePct": 7.951079035533838,
        "smoothedEle": 586.0849587388142,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069493,
        "lng": 120.621151,
        "ele": 581.25,
        "distanceKm": 36.82678873460552,
        "gradePct": 8.986930836494466,
        "smoothedEle": 590.4854939367775,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069424,
        "lng": 120.621088,
        "ele": 580,
        "distanceKm": 36.836808999753785,
        "gradePct": 8.941497897228643,
        "smoothedEle": 591.0199261225563,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069387,
        "lng": 120.621017,
        "ele": 580.5,
        "distanceKm": 36.84515677271531,
        "gradePct": 8.90016245888903,
        "smoothedEle": 591.4581842030366,
        "gradeBand": "steep"
      },
      {
        "lat": 23.06936,
        "lng": 120.620924,
        "ele": 581.75,
        "distanceKm": 36.8551333997246,
        "gradePct": 8.850761468651102,
        "smoothedEle": 591.981957121024,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069364,
        "lng": 120.620705,
        "ele": 586.75,
        "distanceKm": 36.87754215788025,
        "gradePct": 8.190341511357243,
        "smoothedEle": 592.8624778562162,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069584,
        "lng": 120.620173,
        "ele": 606,
        "distanceKm": 36.93721231647405,
        "gradePct": 5.612738492063476,
        "smoothedEle": 594.2571035424379,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069618,
        "lng": 120.619988,
        "ele": 611,
        "distanceKm": 36.956512239808326,
        "gradePct": 5.111813673935202,
        "smoothedEle": 595.1217394407747,
        "gradeBand": "hard"
      },
      {
        "lat": 23.06956,
        "lng": 120.619841,
        "ele": 613.5,
        "distanceKm": 36.972875318411084,
        "gradePct": 4.852519014947903,
        "smoothedEle": 596.1003477983294,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069505,
        "lng": 120.619781,
        "ele": 613.75,
        "distanceKm": 36.981540147284576,
        "gradePct": 4.7955484096303165,
        "smoothedEle": 596.6437707167256,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069434,
        "lng": 120.619746,
        "ele": 613,
        "distanceKm": 36.990209020560044,
        "gradePct": 4.746921528093186,
        "smoothedEle": 597.2041879144531,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069367,
        "lng": 120.619736,
        "ele": 611.5,
        "distanceKm": 36.99772900308235,
        "gradePct": 4.704919242654502,
        "smoothedEle": 597.690692794285,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069135,
        "lng": 120.619778,
        "ele": 604.5,
        "distanceKm": 37.023881639942125,
        "gradePct": 4.429705303904705,
        "smoothedEle": 599.1243554974774,
        "gradeBand": "hard"
      },
      {
        "lat": 23.06883,
        "lng": 120.619671,
        "ele": 608.5,
        "distanceKm": 37.0595189510065,
        "gradePct": 4.316663523178302,
        "smoothedEle": 600.7876082565667,
        "gradeBand": "hard"
      },
      {
        "lat": 23.068504,
        "lng": 120.61974,
        "ele": 605,
        "distanceKm": 37.09644945120307,
        "gradePct": 4.3573201860903,
        "smoothedEle": 602.0190241583682,
        "gradeBand": "hard"
      },
      {
        "lat": 23.068219,
        "lng": 120.619995,
        "ele": 591,
        "distanceKm": 37.137496359701764,
        "gradePct": 4.124654460047848,
        "smoothedEle": 602.519137589318,
        "gradeBand": "hard"
      },
      {
        "lat": 23.067917,
        "lng": 120.619889,
        "ele": 590.5,
        "distanceKm": 37.172784811316646,
        "gradePct": 3.2831842637747957,
        "smoothedEle": 602.6613034692163,
        "gradeBand": "hard"
      },
      {
        "lat": 23.067772,
        "lng": 120.619475,
        "ele": 607.5,
        "distanceKm": 37.218103822173305,
        "gradePct": 1.8354142122962311,
        "smoothedEle": 602.4784494418942,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06774,
        "lng": 120.619408,
        "ele": 610.25,
        "distanceKm": 37.22582674894325,
        "gradePct": 1.543865592402802,
        "smoothedEle": 602.3028681642809,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067683,
        "lng": 120.619346,
        "ele": 612.25,
        "distanceKm": 37.23479355623703,
        "gradePct": 1.2307907149987438,
        "smoothedEle": 602.0952142646921,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067636,
        "lng": 120.619323,
        "ele": 612.5,
        "distanceKm": 37.240524999043636,
        "gradePct": 1.0339452914726475,
        "smoothedEle": 601.9690194148668,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067535,
        "lng": 120.619307,
        "ele": 611.75,
        "distanceKm": 37.251874361630634,
        "gradePct": 0.6576168806091593,
        "smoothedEle": 601.7460562785761,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067344,
        "lng": 120.61929,
        "ele": 612.25,
        "distanceKm": 37.27318371241031,
        "gradePct": 0.08330167454380324,
        "smoothedEle": 601.4098513721725,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067022,
        "lng": 120.619551,
        "ele": 600,
        "distanceKm": 37.31784863055689,
        "gradePct": -0.6765054856599494,
        "smoothedEle": 600.9267396923461,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066736,
        "lng": 120.619759,
        "ele": 590.25,
        "distanceKm": 37.35611306665337,
        "gradePct": -0.7878600268447715,
        "smoothedEle": 601.0184182909312,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066588,
        "lng": 120.619776,
        "ele": 589.75,
        "distanceKm": 37.37266158307883,
        "gradePct": -0.6670845548884377,
        "smoothedEle": 601.3266379122999,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066516,
        "lng": 120.619761,
        "ele": 590.75,
        "distanceKm": 37.38081337385713,
        "gradePct": -0.5003277488362343,
        "smoothedEle": 601.6282541710971,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066432,
        "lng": 120.61972,
        "ele": 592.75,
        "distanceKm": 37.39105235540077,
        "gradePct": -0.2939140559552087,
        "smoothedEle": 601.9997691147837,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066331,
        "lng": 120.619628,
        "ele": 597.25,
        "distanceKm": 37.40570554348803,
        "gradePct": -0.0003127071059907349,
        "smoothedEle": 602.5278488439042,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066191,
        "lng": 120.619478,
        "ele": 604.75,
        "distanceKm": 37.427564971406575,
        "gradePct": 0.5204788462472646,
        "smoothedEle": 603.3035719892575,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066112,
        "lng": 120.619434,
        "ele": 607,
        "distanceKm": 37.43743557499349,
        "gradePct": 0.7665179818530878,
        "smoothedEle": 603.5700782861043,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066028,
        "lng": 120.619431,
        "ele": 607.25,
        "distanceKm": 37.44678100286378,
        "gradePct": 0.9654199981411442,
        "smoothedEle": 603.7769575105629,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065720886925043,
        "lng": 120.61963544725876,
        "ele": 602.1324652011011,
        "distanceKm": 37.4868268386351,
        "gradePct": 1.0732732939837735,
        "smoothedEle": 603.4088290424738,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065422,
        "lng": 120.619855,
        "ele": 598.75,
        "distanceKm": 37.526940041174875,
        "gradePct": 0.9453623796368767,
        "smoothedEle": 602.839246760982,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064983,
        "lng": 120.619954,
        "ele": 606.25,
        "distanceKm": 37.57679434533625,
        "gradePct": 1.2175251983190205,
        "smoothedEle": 603.9146005124626,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064656,
        "lng": 120.620063,
        "ele": 609.5,
        "distanceKm": 37.614826710376896,
        "gradePct": 1.5924233243347659,
        "smoothedEle": 606.0363773517096,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064372,
        "lng": 120.620266,
        "ele": 609,
        "distanceKm": 37.65262325356888,
        "gradePct": 1.996485949771426,
        "smoothedEle": 607.716223481366,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064123,
        "lng": 120.620591,
        "ele": 604,
        "distanceKm": 37.69589155171772,
        "gradePct": 2.506005972044555,
        "smoothedEle": 608.2921277542165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063589,
        "lng": 120.620761,
        "ele": 605,
        "distanceKm": 37.75776445713976,
        "gradePct": 3.3151090517495834,
        "smoothedEle": 610.1343452976276,
        "gradeBand": "hard"
      },
      {
        "lat": 23.063232,
        "lng": 120.620653,
        "ele": 615.25,
        "distanceKm": 37.79897014209596,
        "gradePct": 3.40792832607577,
        "smoothedEle": 611.9676164079667,
        "gradeBand": "hard"
      },
      {
        "lat": 23.062891,
        "lng": 120.620949,
        "ele": 620.75,
        "distanceKm": 37.84749646399412,
        "gradePct": 2.814031509860473,
        "smoothedEle": 613.1164292184517,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063101,
        "lng": 120.621591,
        "ele": 608.25,
        "distanceKm": 37.91720542673047,
        "gradePct": 2.1368002815874245,
        "smoothedEle": 613.2003323366907,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063137,
        "lng": 120.621946,
        "ele": 614.25,
        "distanceKm": 37.953744591312216,
        "gradePct": 1.7359987133059216,
        "smoothedEle": 613.4866543517743,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06323,
        "lng": 120.622243,
        "ele": 621,
        "distanceKm": 37.98584147314357,
        "gradePct": 1.3082558968014084,
        "smoothedEle": 614.000024102021,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063322,
        "lng": 120.622326,
        "ele": 622.25,
        "distanceKm": 37.999136504977386,
        "gradePct": 1.1205948631287992,
        "smoothedEle": 614.2127446113619,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.063805,
        "lng": 120.622334,
        "ele": 620,
        "distanceKm": 38.052849964724466,
        "gradePct": 0.6989529471844563,
        "smoothedEle": 614.5207786946377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064248,
        "lng": 120.622275,
        "ele": 614.5,
        "distanceKm": 38.102477831588466,
        "gradePct": 0.5107316460387706,
        "smoothedEle": 614.2040691972153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064659,
        "lng": 120.622196,
        "ele": 607,
        "distanceKm": 38.14888817593188,
        "gradePct": 0.5960529009103568,
        "smoothedEle": 614.6407051336267,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.064817,
        "lng": 120.622198,
        "ele": 605.75,
        "distanceKm": 38.166458190066905,
        "gradePct": 0.7134895486841982,
        "smoothedEle": 615.1169795888619,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065003,
        "lng": 120.622311,
        "ele": 610.25,
        "distanceKm": 38.190152170740696,
        "gradePct": 0.8276449217603836,
        "smoothedEle": 615.7242851070957,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065328,
        "lng": 120.622557,
        "ele": 613,
        "distanceKm": 38.23419053380665,
        "gradePct": 0.7685499820390651,
        "smoothedEle": 615.9508712024044,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065633,
        "lng": 120.622818,
        "ele": 612.25,
        "distanceKm": 38.277355118756404,
        "gradePct": 0.5127464666485293,
        "smoothedEle": 615.3898874126111,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065826,
        "lng": 120.623177,
        "ele": 614.75,
        "distanceKm": 38.319893182823606,
        "gradePct": 0.34083364764694096,
        "smoothedEle": 615.0495829000735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.065942,
        "lng": 120.623714,
        "ele": 621,
        "distanceKm": 38.37632517100623,
        "gradePct": 0.11305904963046327,
        "smoothedEle": 615.596000400219,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066094,
        "lng": 120.624253,
        "ele": 622.25,
        "distanceKm": 38.43399993329404,
        "gradePct": 0.43304798694082886,
        "smoothedEle": 616.8159864989196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066324,
        "lng": 120.624782,
        "ele": 615.25,
        "distanceKm": 38.49385807111448,
        "gradePct": 0.9648329686864804,
        "smoothedEle": 617.1875297311195,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066412,
        "lng": 120.625212,
        "ele": 616,
        "distanceKm": 38.538924454673044,
        "gradePct": 1.21855571624705,
        "smoothedEle": 617.6709696048637,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066517,
        "lng": 120.625869,
        "ele": 620.25,
        "distanceKm": 38.60714544132335,
        "gradePct": 1.0971493650585968,
        "smoothedEle": 618.4422359542358,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.066747,
        "lng": 120.626415,
        "ele": 616.75,
        "distanceKm": 38.668580367650186,
        "gradePct": 0.8477002153522215,
        "smoothedEle": 618.7260298640585,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067027,
        "lng": 120.626819,
        "ele": 614.25,
        "distanceKm": 38.72032617406614,
        "gradePct": 0.9648555279919582,
        "smoothedEle": 619.4011716317555,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067079,
        "lng": 120.627231,
        "ele": 617.5,
        "distanceKm": 38.7628704618735,
        "gradePct": 1.2061573035261801,
        "smoothedEle": 620.3540036849457,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067044,
        "lng": 120.627647,
        "ele": 620.5,
        "distanceKm": 38.805606787762656,
        "gradePct": 1.2362590989237499,
        "smoothedEle": 620.8973590399196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067128,
        "lng": 120.628146,
        "ele": 621.5,
        "distanceKm": 38.85750426746987,
        "gradePct": 1.455899845782121,
        "smoothedEle": 621.5866643640339,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067284,
        "lng": 120.628535,
        "ele": 624.75,
        "distanceKm": 38.90091692252401,
        "gradePct": 1.7346437442269897,
        "smoothedEle": 622.6172212773108,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067427,
        "lng": 120.628951,
        "ele": 628.25,
        "distanceKm": 38.94634904573658,
        "gradePct": 2.2273346615725953,
        "smoothedEle": 624.4386554177007,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.067681,
        "lng": 120.629428,
        "ele": 626.25,
        "distanceKm": 39.00273216310988,
        "gradePct": 3.037994711679644,
        "smoothedEle": 626.9368001015251,
        "gradeBand": "hard"
      },
      {
        "lat": 23.067831,
        "lng": 120.629798,
        "ele": 621,
        "distanceKm": 39.04409655007556,
        "gradePct": 2.877108801517595,
        "smoothedEle": 627.1627998899382,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06822,
        "lng": 120.630092,
        "ele": 627.25,
        "distanceKm": 39.09678082605597,
        "gradePct": 2.3962088919135116,
        "smoothedEle": 627.3114538014755,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068569210902815,
        "lng": 120.6302458255613,
        "ele": 632.2429454938595,
        "distanceKm": 39.13867904862408,
        "gradePct": 1.9455551268656854,
        "smoothedEle": 628.0222653036407,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068925,
        "lng": 120.630382,
        "ele": 637.75,
        "distanceKm": 39.180622193709226,
        "gradePct": 1.5313049176297464,
        "smoothedEle": 629.0197921878744,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.069076,
        "lng": 120.630811,
        "ele": 638,
        "distanceKm": 39.22761243633746,
        "gradePct": 1.4270556891171762,
        "smoothedEle": 629.9268481368109,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068968,
        "lng": 120.631219,
        "ele": 622.75,
        "distanceKm": 39.271045380809944,
        "gradePct": 1.6567526110212376,
        "smoothedEle": 630.5523439115177,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068947,
        "lng": 120.631326,
        "ele": 619,
        "distanceKm": 39.28223811892765,
        "gradePct": 1.676093914641091,
        "smoothedEle": 630.622607939799,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.068968,
        "lng": 120.631412,
        "ele": 617.75,
        "distanceKm": 39.29134080391878,
        "gradePct": 1.7019382614590528,
        "smoothedEle": 630.6999807622236,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.069076,
        "lng": 120.631519,
        "ele": 619.75,
        "distanceKm": 39.30759018314825,
        "gradePct": 1.6716319184390944,
        "smoothedEle": 630.8381004856741,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.06947372571275,
        "lng": 120.63166740824724,
        "ele": 628.591989978841,
        "distanceKm": 39.35434887078292,
        "gradePct": 1.1833384483450518,
        "smoothedEle": 630.7616149897192,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.069876,
        "lng": 120.631803,
        "ele": 636.75,
        "distanceKm": 39.40118124376957,
        "gradePct": 0.48482697049239953,
        "smoothedEle": 630.3862989140056,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070185,
        "lng": 120.632055,
        "ele": 639.25,
        "distanceKm": 39.444136795951835,
        "gradePct": -0.7454000766825751,
        "smoothedEle": 628.6740221121644,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070287,
        "lng": 120.632447,
        "ele": 633.75,
        "distanceKm": 39.48581231007922,
        "gradePct": -1.8492726211777912,
        "smoothedEle": 626.9544433222317,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070049,
        "lng": 120.633053,
        "ele": 625.25,
        "distanceKm": 39.55321981714297,
        "gradePct": -2.1226317880652044,
        "smoothedEle": 626.51819826242,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070006,
        "lng": 120.633397,
        "ele": 624.5,
        "distanceKm": 39.58873518190923,
        "gradePct": -1.9109070478206445,
        "smoothedEle": 626.6642279404316,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070157,
        "lng": 120.633697,
        "ele": 628.5,
        "distanceKm": 39.62371860071363,
        "gradePct": -1.8486451363386058,
        "smoothedEle": 625.7906336581275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070006,
        "lng": 120.634062,
        "ele": 618.25,
        "distanceKm": 39.66466030199137,
        "gradePct": -2.238535378599775,
        "smoothedEle": 623.350128312236,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069985,
        "lng": 120.634212,
        "ele": 615.25,
        "distanceKm": 39.680182319028816,
        "gradePct": -2.4372312650586077,
        "smoothedEle": 622.3122805825428,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070213,
        "lng": 120.63462,
        "ele": 618,
        "distanceKm": 39.72901799446505,
        "gradePct": -3.763624123761364,
        "smoothedEle": 619.1475783496566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07036602259741,
        "lng": 120.63498890764298,
        "ele": 620.8974749374491,
        "distanceKm": 39.770416494433974,
        "gradePct": -4.849840810082286,
        "smoothedEle": 616.8892247784156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070505,
        "lng": 120.635365,
        "ele": 624.25,
        "distanceKm": 39.811879044428075,
        "gradePct": -5.431303447980192,
        "smoothedEle": 615.2236802182774,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070505,
        "lng": 120.635537,
        "ele": 623.75,
        "distanceKm": 39.82947500040411,
        "gradePct": -5.50038513298248,
        "smoothedEle": 614.4467285497094,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070462,
        "lng": 120.635601,
        "ele": 622,
        "distanceKm": 39.837582358265735,
        "gradePct": -5.443190640853097,
        "smoothedEle": 614.0778437670054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070419,
        "lng": 120.635644,
        "ele": 620.25,
        "distanceKm": 39.8440794959615,
        "gradePct": -5.397355672526069,
        "smoothedEle": 613.782224001848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070381,
        "lng": 120.635653,
        "ele": 618.75,
        "distanceKm": 39.848404058314784,
        "gradePct": -5.366847441398344,
        "smoothedEle": 613.5854564147736,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07014,
        "lng": 120.635709,
        "ele": 609.5,
        "distanceKm": 39.875807601316886,
        "gradePct": -5.195260537974019,
        "smoothedEle": 612.2142660045855,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06999,
        "lng": 120.635859,
        "ele": 604.5,
        "distanceKm": 39.89847206413969,
        "gradePct": -5.016750410252413,
        "smoothedEle": 611.0935479274365,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069958865193563,
        "lng": 120.63646602118538,
        "ele": 605.2668508044417,
        "distanceKm": 39.96066826136935,
        "gradePct": -4.68226500786209,
        "smoothedEle": 608.0564762758214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069947,
        "lng": 120.637076,
        "ele": 606.75,
        "distanceKm": 40.02308455835734,
        "gradePct": -5.6881910763935695,
        "smoothedEle": 603.3525171762699,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06984,
        "lng": 120.63742,
        "ele": 603.5,
        "distanceKm": 40.060233465773806,
        "gradePct": -5.906598494467376,
        "smoothedEle": 601.1803516544688,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069883,
        "lng": 120.637656,
        "ele": 601.75,
        "distanceKm": 40.0848457722186,
        "gradePct": -5.991710820111308,
        "smoothedEle": 599.7839226087887,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070097,
        "lng": 120.637956,
        "ele": 602.5,
        "distanceKm": 40.123680795146846,
        "gradePct": -5.811382871175257,
        "smoothedEle": 598.2398271472349,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070226,
        "lng": 120.638364,
        "ele": 597,
        "distanceKm": 40.16781613813238,
        "gradePct": -5.184787295307257,
        "smoothedEle": 597.148207120414,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070208,
        "lng": 120.638841,
        "ele": 581,
        "distanceKm": 40.21665535966339,
        "gradePct": -4.136947296149229,
        "smoothedEle": 595.5631544956458,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070229,
        "lng": 120.638949,
        "ele": 578.5,
        "distanceKm": 40.227948068734776,
        "gradePct": -3.9615975129714807,
        "smoothedEle": 595.1449436775403,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070272,
        "lng": 120.639013,
        "ele": 578,
        "distanceKm": 40.23605543575568,
        "gradePct": -3.874694024736927,
        "smoothedEle": 594.8446978664545,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070422,
        "lng": 120.639056,
        "ele": 581.75,
        "distanceKm": 40.253305042465854,
        "gradePct": -3.7387258208540324,
        "smoothedEle": 594.1080177746712,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070637,
        "lng": 120.639035,
        "ele": 590.25,
        "distanceKm": 40.277308318611084,
        "gradePct": -3.716632752413436,
        "smoothedEle": 592.7783097976097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070698,
        "lng": 120.639013,
        "ele": 593.25,
        "distanceKm": 40.28445486491301,
        "gradePct": -3.7729581678162307,
        "smoothedEle": 592.2601851907201,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070763,
        "lng": 120.639035,
        "ele": 594.5,
        "distanceKm": 40.292024854980326,
        "gradePct": -3.892370312368941,
        "smoothedEle": 591.7137388897855,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071023,
        "lng": 120.639222,
        "ele": 595.5,
        "distanceKm": 40.326691888356265,
        "gradePct": -4.515087396503013,
        "smoothedEle": 589.135177581231,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071271,
        "lng": 120.639437,
        "ele": 597.25,
        "distanceKm": 40.361965528864744,
        "gradePct": -5.354663032677971,
        "smoothedEle": 586.5835869033335,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071378,
        "lng": 120.639823,
        "ele": 592.75,
        "distanceKm": 40.403207374574166,
        "gradePct": -6.192931924891835,
        "smoothedEle": 583.6137383081161,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071371095986112,
        "lng": 120.6402207835943,
        "ele": 588.4288830750099,
        "distanceKm": 40.44390843712501,
        "gradePct": -6.834732455133649,
        "smoothedEle": 580.8398543086195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071335,
        "lng": 120.640617,
        "ele": 586.75,
        "distanceKm": 40.484640176641264,
        "gradePct": -6.548907300141045,
        "smoothedEle": 579.1489937025525,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071292,
        "lng": 120.640703,
        "ele": 585,
        "distanceKm": 40.494653425950176,
        "gradePct": -6.376389092746387,
        "smoothedEle": 578.7654455205693,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071206,
        "lng": 120.640789,
        "ele": 581.25,
        "distanceKm": 40.50764766553857,
        "gradePct": -6.200449174739245,
        "smoothedEle": 578.1508035583851,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07112,
        "lng": 120.640789,
        "ele": 577.75,
        "distanceKm": 40.51721044243861,
        "gradePct": -6.10722920874022,
        "smoothedEle": 577.6259565957307,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070943,
        "lng": 120.640824,
        "ele": 570.5,
        "distanceKm": 40.53721501667357,
        "gradePct": -6.078161467946045,
        "smoothedEle": 576.2176427111667,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070799,
        "lng": 120.640877,
        "ele": 565.5,
        "distanceKm": 40.55412019650204,
        "gradePct": -6.157592304207381,
        "smoothedEle": 574.8359104010602,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07068,
        "lng": 120.641078,
        "ele": 565.75,
        "distanceKm": 40.57857250348311,
        "gradePct": -6.554407383085412,
        "smoothedEle": 572.2788945183806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070411,
        "lng": 120.641647,
        "ele": 565.5,
        "distanceKm": 40.64401778019053,
        "gradePct": -8.057317478388141,
        "smoothedEle": 564.7206802900639,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070304,
        "lng": 120.642141,
        "ele": 560,
        "distanceKm": 40.69593671550284,
        "gradePct": -9.620918756404341,
        "smoothedEle": 559.462906986871,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070325112982253,
        "lng": 120.64251972826575,
        "ele": 558.8479660222802,
        "distanceKm": 40.734752516466536,
        "gradePct": -10.11512687146765,
        "smoothedEle": 556.160747980604,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070368,
        "lng": 120.642897,
        "ele": 556,
        "distanceKm": 40.773641739387514,
        "gradePct": -9.618123588737808,
        "smoothedEle": 553.5582650335809,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070239,
        "lng": 120.643412,
        "ele": 543,
        "distanceKm": 40.82824514811679,
        "gradePct": -7.590297801514685,
        "smoothedEle": 551.3616513172849,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070196,
        "lng": 120.643648,
        "ele": 538.25,
        "distanceKm": 40.8528573918861,
        "gradePct": -6.709278722303129,
        "smoothedEle": 550.4069451207226,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070218,
        "lng": 120.643734,
        "ele": 537.25,
        "distanceKm": 40.861989155297934,
        "gradePct": -6.447622210625149,
        "smoothedEle": 550.0054945373324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070282,
        "lng": 120.64382,
        "ele": 536.75,
        "distanceKm": 40.873305032233574,
        "gradePct": -6.183589699006771,
        "smoothedEle": 549.3876131867358,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070346,
        "lng": 120.643884,
        "ele": 536.5,
        "distanceKm": 40.882975194832646,
        "gradePct": -5.959875821238001,
        "smoothedEle": 548.8557542437868,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070625,
        "lng": 120.643905,
        "ele": 539.75,
        "distanceKm": 40.91407291866714,
        "gradePct": -5.583138034216609,
        "smoothedEle": 546.7537379436287,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071007415096858,
        "lng": 120.643682742788,
        "ele": 545.0068750070625,
        "distanceKm": 40.96229287117715,
        "gradePct": -5.149068082740866,
        "smoothedEle": 544.0195998414716,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07138,
        "lng": 120.643438,
        "ele": 548.75,
        "distanceKm": 41.010700433852314,
        "gradePct": -5.346595564487795,
        "smoothedEle": 541.374257882972,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071699000000002,
        "lng": 120.64331200000001,
        "ele": 548,
        "distanceKm": 41.04844111894166,
        "gradePct": -5.543804070273758,
        "smoothedEle": 539.4906437161754,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072018,
        "lng": 120.643186,
        "ele": 547.25,
        "distanceKm": 41.086181793590626,
        "gradePct": -5.151176438083025,
        "smoothedEle": 538.3366548657477,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072131,
        "lng": 120.643174,
        "ele": 545.25,
        "distanceKm": 41.09880666428127,
        "gradePct": -4.972497027368476,
        "smoothedEle": 537.8406494949819,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072188,
        "lng": 120.64318,
        "ele": 543.75,
        "distanceKm": 41.105174435959334,
        "gradePct": -4.871905670374121,
        "smoothedEle": 537.6114097145716,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072302,
        "lng": 120.643247,
        "ele": 538,
        "distanceKm": 41.11958507130848,
        "gradePct": -4.689381925336581,
        "smoothedEle": 537.0624274026936,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072529,
        "lng": 120.643464,
        "ele": 530.75,
        "distanceKm": 41.15319947833816,
        "gradePct": -4.424609099616242,
        "smoothedEle": 535.6859896124835,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072561,
        "lng": 120.643596,
        "ele": 532,
        "distanceKm": 41.16716408181679,
        "gradePct": -4.34616389500024,
        "smoothedEle": 535.0610736068146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072552,
        "lng": 120.64368,
        "ele": 532.5,
        "distanceKm": 41.17581540158057,
        "gradePct": -4.303351598755394,
        "smoothedEle": 534.6739270473855,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072379,
        "lng": 120.643957,
        "ele": 532.25,
        "distanceKm": 41.21006526037366,
        "gradePct": -4.247659425627031,
        "smoothedEle": 532.9136495389434,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072223,
        "lng": 120.644352,
        "ele": 530.5,
        "distanceKm": 41.254039890082424,
        "gradePct": -4.447193062652894,
        "smoothedEle": 530.4250651166324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072136,
        "lng": 120.644808,
        "ele": 531.5,
        "distanceKm": 41.301681575040675,
        "gradePct": -5.215474866750451,
        "smoothedEle": 527.3062029741424,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071807,
        "lng": 120.645132,
        "ele": 520.25,
        "distanceKm": 41.351047088724705,
        "gradePct": -6.101357085834676,
        "smoothedEle": 523.5714111738228,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071693,
        "lng": 120.645308,
        "ele": 516.5,
        "distanceKm": 41.37306678394973,
        "gradePct": -6.383966518793523,
        "smoothedEle": 522.0289946487785,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071536000000002,
        "lng": 120.645839,
        "ele": 517.375,
        "distanceKm": 41.43012502711152,
        "gradePct": -6.772894720713583,
        "smoothedEle": 518.2326504698366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071379,
        "lng": 120.64637,
        "ele": 518.25,
        "distanceKm": 41.487183330637336,
        "gradePct": -7.318878306396423,
        "smoothedEle": 513.6175736989272,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071274,
        "lng": 120.6465,
        "ele": 518,
        "distanceKm": 41.50488037305123,
        "gradePct": -7.400222557086758,
        "smoothedEle": 512.2637499542644,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071222,
        "lng": 120.646543,
        "ele": 517.5,
        "distanceKm": 41.51214563847096,
        "gradePct": -7.40328890403712,
        "smoothedEle": 511.7079571496549,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071157,
        "lng": 120.646577,
        "ele": 516.75,
        "distanceKm": 41.520166710900085,
        "gradePct": -7.406674243671725,
        "smoothedEle": 511.09434510882693,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071031,
        "lng": 120.646605,
        "ele": 514.75,
        "distanceKm": 41.534467109582906,
        "gradePct": -7.430224992805686,
        "smoothedEle": 509.9653342419308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070781,
        "lng": 120.646611,
        "ele": 510.5,
        "distanceKm": 41.56227265543628,
        "gradePct": -7.557454360002118,
        "smoothedEle": 507.67018368682477,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070334,
        "lng": 120.646479,
        "ele": 506,
        "distanceKm": 41.61377859715534,
        "gradePct": -7.527073639263938,
        "smoothedEle": 504.26610545124294,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069867,
        "lng": 120.64627,
        "ele": 496.75,
        "distanceKm": 41.66993626274521,
        "gradePct": -6.684472283994343,
        "smoothedEle": 501.6436327934509,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069719,
        "lng": 120.646234,
        "ele": 493.25,
        "distanceKm": 41.686800198824876,
        "gradePct": -6.5645950048809905,
        "smoothedEle": 500.51937274104057,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069635,
        "lng": 120.646244,
        "ele": 492,
        "distanceKm": 41.69619644321648,
        "gradePct": -6.517556413683528,
        "smoothedEle": 499.89295775925575,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06949,
        "lng": 120.646323,
        "ele": 491,
        "distanceKm": 41.714231902866274,
        "gradePct": -6.433761320720828,
        "smoothedEle": 498.68083528197184,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069295,
        "lng": 120.6467,
        "ele": 492.25,
        "distanceKm": 41.75847735733801,
        "gradePct": -6.579715844777119,
        "smoothedEle": 494.8240269310905,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069229,
        "lng": 120.647095,
        "ele": 490.25,
        "distanceKm": 41.79954805501898,
        "gradePct": -7.092916692529243,
        "smoothedEle": 491.0207825616751,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069208,
        "lng": 120.647331,
        "ele": 489.25,
        "distanceKm": 41.82380423365106,
        "gradePct": -7.364882085279797,
        "smoothedEle": 489.06816018179273,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069428,
        "lng": 120.64788,
        "ele": 494.25,
        "distanceKm": 41.88506487767803,
        "gradePct": -7.882338511953976,
        "smoothedEle": 484.87038355147223,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069456263317825,
        "lng": 120.64847345134912,
        "ele": 484.04173642798327,
        "distanceKm": 41.945857946105264,
        "gradePct": -6.793447787368468,
        "smoothedEle": 482.3371460631016,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069445,
        "lng": 120.649071,
        "ele": 471,
        "distanceKm": 42.007001717165714,
        "gradePct": -4.813175073827057,
        "smoothedEle": 480.79441261120905,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06951,
        "lng": 120.649286,
        "ele": 468.25,
        "distanceKm": 42.030153916970555,
        "gradePct": -4.175151413517679,
        "smoothedEle": 480.28275660333907,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06966,
        "lng": 120.649393,
        "ele": 470.25,
        "distanceKm": 42.050104390003526,
        "gradePct": -3.6611951010359056,
        "smoothedEle": 479.94359856177863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070124432568274,
        "lng": 120.64960195652498,
        "ele": 472.9191526912364,
        "distanceKm": 42.10599648857011,
        "gradePct": -2.638100610947665,
        "smoothedEle": 478.7219654342038,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07058886513655,
        "lng": 120.64981091304995,
        "ele": 475.5883053824724,
        "distanceKm": 42.16188855890995,
        "gradePct": -3.04630661839748,
        "smoothedEle": 475.8400605113152,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071054,
        "lng": 120.650018,
        "ele": 478.25,
        "distanceKm": 42.21777998709459,
        "gradePct": -3.742774169678516,
        "smoothedEle": 473.0706680481653,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071355,
        "lng": 120.65023,
        "ele": 480.5,
        "distanceKm": 42.257662166490135,
        "gradePct": -3.792416186402593,
        "smoothedEle": 472.19357593196685,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071355,
        "lng": 120.650316,
        "ele": 481.25,
        "distanceKm": 42.26646008888554,
        "gradePct": -3.7358587793374665,
        "smoothedEle": 472.11439463040824,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071312,
        "lng": 120.65038,
        "ele": 481.25,
        "distanceKm": 42.274567413336236,
        "gradePct": -3.667269488514028,
        "smoothedEle": 472.0743714898265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071248,
        "lng": 120.650445,
        "ele": 481.75,
        "distanceKm": 42.28430709970199,
        "gradePct": -3.577873818226044,
        "smoothedEle": 472.04028258754636,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070729,
        "lng": 120.650675,
        "ele": 477.5,
        "distanceKm": 42.34662968653063,
        "gradePct": -2.7230564550925362,
        "smoothedEle": 471.1807250305635,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070322,
        "lng": 120.650997,
        "ele": 464,
        "distanceKm": 42.402605290424056,
        "gradePct": -1.8328159471300034,
        "smoothedEle": 470.15693482522096,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070223,
        "lng": 120.651131,
        "ele": 460.75,
        "distanceKm": 42.42018669975779,
        "gradePct": -1.7140562694330057,
        "smoothedEle": 469.5896268896791,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070155,
        "lng": 120.651448,
        "ele": 459.25,
        "distanceKm": 42.45348635073328,
        "gradePct": -1.9942949909709,
        "smoothedEle": 468.29682082802185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070375,
        "lng": 120.652078,
        "ele": 466.5,
        "distanceKm": 42.52242321191765,
        "gradePct": -2.9627650546456867,
        "smoothedEle": 465.5890523434409,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070462,
        "lng": 120.652537,
        "ele": 463.25,
        "distanceKm": 42.57036604813634,
        "gradePct": -3.8632235827690256,
        "smoothedEle": 463.0201413335346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070676,
        "lng": 120.652944,
        "ele": 465.5,
        "distanceKm": 42.61832301740077,
        "gradePct": -4.378287602956471,
        "smoothedEle": 460.89318803406655,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070719,
        "lng": 120.65303,
        "ele": 465.5,
        "distanceKm": 42.62833630210871,
        "gradePct": -4.317681446357109,
        "smoothedEle": 460.6378686291241,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070719,
        "lng": 120.653223,
        "ele": 462.25,
        "distanceKm": 42.64808057013558,
        "gradePct": -4.002582446511127,
        "smoothedEle": 460.50152678108844,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070655,
        "lng": 120.653417,
        "ele": 458,
        "distanceKm": 42.66916447125139,
        "gradePct": -3.650844834255542,
        "smoothedEle": 460.3793108290366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070634,
        "lng": 120.65361,
        "ele": 457,
        "distanceKm": 42.68904635316051,
        "gradePct": -3.3813219930336604,
        "smoothedEle": 460.1374167889175,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070776,
        "lng": 120.654009,
        "ele": 460.5,
        "distanceKm": 42.73281234181127,
        "gradePct": -2.7626530974389314,
        "smoothedEle": 459.5070675648155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070804,
        "lng": 120.654181,
        "ele": 461,
        "distanceKm": 42.75068158918977,
        "gradePct": -2.545938223878259,
        "smoothedEle": 458.98301315059166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07074,
        "lng": 120.654353,
        "ele": 458.25,
        "distanceKm": 42.76966212654511,
        "gradePct": -2.3532675558623684,
        "smoothedEle": 458.3513243058546,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070547,
        "lng": 120.654696,
        "ele": 452.25,
        "distanceKm": 42.81079408134217,
        "gradePct": -2.069769902822741,
        "smoothedEle": 457.0875662311001,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070547,
        "lng": 120.654782,
        "ele": 452,
        "distanceKm": 42.81959205658254,
        "gradePct": -2.007092231937037,
        "smoothedEle": 456.84664552403785,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07059,
        "lng": 120.654868,
        "ele": 453,
        "distanceKm": 42.829605348703296,
        "gradePct": -2.0289126891092617,
        "smoothedEle": 456.57127999071713,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070783,
        "lng": 120.655104,
        "ele": 458,
        "distanceKm": 42.86190792325357,
        "gradePct": -2.412526184002155,
        "smoothedEle": 455.59632211506346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070804,
        "lng": 120.655189,
        "ele": 459.5,
        "distanceKm": 42.87091165202888,
        "gradePct": -2.5294272949327232,
        "smoothedEle": 455.2991990654782,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070804,
        "lng": 120.655297,
        "ele": 460.75,
        "distanceKm": 42.881960250991355,
        "gradePct": -2.644517475900576,
        "smoothedEle": 454.93459529971653,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070719,
        "lng": 120.655426,
        "ele": 460.25,
        "distanceKm": 42.89819267755786,
        "gradePct": -2.770931029466727,
        "smoothedEle": 454.4638227923541,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070415,
        "lng": 120.655624,
        "ele": 454.5,
        "distanceKm": 42.937600301688185,
        "gradePct": -2.935510017525858,
        "smoothedEle": 453.4956302275978,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070171,
        "lng": 120.655978,
        "ele": 449.75,
        "distanceKm": 42.98285125942489,
        "gradePct": -2.7069317842282214,
        "smoothedEle": 452.53223143920235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070166,
        "lng": 120.656535,
        "ele": 450,
        "distanceKm": 43.03983636699766,
        "gradePct": -1.864825013771169,
        "smoothedEle": 452.53283687157386,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070272,
        "lng": 120.656949,
        "ele": 449.5,
        "distanceKm": 43.08379901978256,
        "gradePct": -1.299582054129938,
        "smoothedEle": 452.28210325612,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070378,
        "lng": 120.657333,
        "ele": 449,
        "distanceKm": 43.1248131900474,
        "gradePct": -1.2661385866354171,
        "smoothedEle": 451.27751526756714,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070568,
        "lng": 120.657915,
        "ele": 446,
        "distanceKm": 43.18799026575498,
        "gradePct": -1.1816025504202063,
        "smoothedEle": 450.16908093720224,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070676,
        "lng": 120.658043,
        "ele": 447.5,
        "distanceKm": 43.20575786776222,
        "gradePct": -1.3133322542239325,
        "smoothedEle": 449.90581029964153,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070749,
        "lng": 120.658097,
        "ele": 449.25,
        "distanceKm": 43.2155766011526,
        "gradePct": -1.442613066348863,
        "smoothedEle": 449.6473529935073,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071114,
        "lng": 120.658247,
        "ele": 460.25,
        "distanceKm": 43.258966888518934,
        "gradePct": -1.9542950511583688,
        "smoothedEle": 448.51513904889237,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071178,
        "lng": 120.65829,
        "ele": 461.75,
        "distanceKm": 43.26733320673016,
        "gradePct": -2.0766936998196845,
        "smoothedEle": 448.2226258590962,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0712,
        "lng": 120.658355,
        "ele": 461.25,
        "distanceKm": 43.27441851075025,
        "gradePct": -2.180854445793299,
        "smoothedEle": 447.9738945242252,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0712,
        "lng": 120.65844,
        "ele": 459,
        "distanceKm": 43.283114141741144,
        "gradePct": -2.308688538466522,
        "smoothedEle": 447.6686322662083,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071139,
        "lng": 120.658751,
        "ele": 448,
        "distanceKm": 43.31564492717189,
        "gradePct": -2.6790424985981267,
        "smoothedEle": 446.1439947733502,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071152,
        "lng": 120.658885,
        "ele": 444.75,
        "distanceKm": 43.32942934357596,
        "gradePct": -2.850199098421245,
        "smoothedEle": 445.4961272023588,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07121,
        "lng": 120.659019,
        "ele": 443.75,
        "distanceKm": 43.34457906705394,
        "gradePct": -3.058866762383686,
        "smoothedEle": 444.8129917656056,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071492,
        "lng": 120.659417,
        "ele": 450.75,
        "distanceKm": 43.39597023615657,
        "gradePct": -3.5873711005061524,
        "smoothedEle": 442.8760958863959,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071533,
        "lng": 120.659781,
        "ele": 448,
        "distanceKm": 43.43348595103779,
        "gradePct": -3.6758880206275864,
        "smoothedEle": 441.8282554176468,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071404,
        "lng": 120.660157,
        "ele": 438.75,
        "distanceKm": 43.474538777841616,
        "gradePct": -3.670167566420536,
        "smoothedEle": 440.6293373856535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071216415191504,
        "lng": 120.6604983184595,
        "ele": 432.44737740501154,
        "distanceKm": 43.51521187068451,
        "gradePct": -3.879065984337872,
        "smoothedEle": 438.4061590916666,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070979,
        "lng": 120.660804,
        "ele": 426,
        "distanceKm": 43.55613678530925,
        "gradePct": -4.436674380584997,
        "smoothedEle": 435.5040409885121,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07093,
        "lng": 120.661487,
        "ele": 430.25,
        "distanceKm": 43.626220980160525,
        "gradePct": -4.3642912917817345,
        "smoothedEle": 433.3025886125399,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070769,
        "lng": 120.66187,
        "ele": 433,
        "distanceKm": 43.669298739923455,
        "gradePct": -4.037039669767779,
        "smoothedEle": 432.7082895530208,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07048,
        "lng": 120.662323,
        "ele": 433,
        "distanceKm": 43.72569321932367,
        "gradePct": -2.527808412543201,
        "smoothedEle": 432.60727592356926,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0702,
        "lng": 120.662667,
        "ele": 424.25,
        "distanceKm": 43.772680860475,
        "gradePct": -1.2725443707483168,
        "smoothedEle": 432.4392773950865,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070135,
        "lng": 120.662865,
        "ele": 421.25,
        "distanceKm": 43.794187586170736,
        "gradePct": -0.9098341599483759,
        "smoothedEle": 432.4891384771986,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070135,
        "lng": 120.662957,
        "ele": 421,
        "distanceKm": 43.80359940246427,
        "gradePct": -0.7149552641445962,
        "smoothedEle": 432.583256640134,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070166,
        "lng": 120.663031,
        "ele": 422,
        "distanceKm": 43.81191761653235,
        "gradePct": -0.5427202436035182,
        "smoothedEle": 432.66643878081476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070282,
        "lng": 120.66316,
        "ele": 426.25,
        "distanceKm": 43.83037121518187,
        "gradePct": -0.1872471015112156,
        "smoothedEle": 432.87083793231113,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070673,
        "lng": 120.66334,
        "ele": 440.5,
        "distanceKm": 43.877587343941784,
        "gradePct": 0.23255177911053362,
        "smoothedEle": 433.15854658754165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070943,
        "lng": 120.663639,
        "ele": 447,
        "distanceKm": 43.92044760347029,
        "gradePct": 0.6800089263504009,
        "smoothedEle": 433.9766897083133,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070934,
        "lng": 120.664027,
        "ele": 441.5,
        "distanceKm": 43.96015329226715,
        "gradePct": 0.8984489257179732,
        "smoothedEle": 434.28096602496584,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070693,
        "lng": 120.664431,
        "ele": 431.25,
        "distanceKm": 44.00941075488721,
        "gradePct": 0.9787818880503923,
        "smoothedEle": 434.5989339404642,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070606,
        "lng": 120.664769,
        "ele": 431,
        "distanceKm": 44.04531657798841,
        "gradePct": 1.2032849229473868,
        "smoothedEle": 435.36847645215136,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070524,
        "lng": 120.665252,
        "ele": 432,
        "distanceKm": 44.09556268737417,
        "gradePct": 1.2385564236376008,
        "smoothedEle": 435.9787838987024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070566,
        "lng": 120.665844,
        "ele": 441.25,
        "distanceKm": 44.156305294523435,
        "gradePct": 0.06618463422645866,
        "smoothedEle": 434.38384696024974,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070231,
        "lng": 120.666249,
        "ele": 434.5,
        "distanceKm": 44.212020912455976,
        "gradePct": -1.065828938483306,
        "smoothedEle": 432.523217608291,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06983,
        "lng": 120.66664,
        "ele": 434.25,
        "distanceKm": 44.27192265871914,
        "gradePct": -1.6427645590590365,
        "smoothedEle": 432.40611442879947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069487,
        "lng": 120.66679,
        "ele": 430.75,
        "distanceKm": 44.31303390344911,
        "gradePct": -1.6100684927814142,
        "smoothedEle": 432.2998999283561,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0691,
        "lng": 120.666876,
        "ele": 426.75,
        "distanceKm": 44.356956580134224,
        "gradePct": -1.263253416594903,
        "smoothedEle": 431.8355903705481,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068714,
        "lng": 120.666854,
        "ele": 425.5,
        "distanceKm": 44.39993685005674,
        "gradePct": -1.2020761045113317,
        "smoothedEle": 430.52261402755687,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068552,
        "lng": 120.666901,
        "ele": 426.25,
        "distanceKm": 44.418581133293024,
        "gradePct": -1.4553354438469135,
        "smoothedEle": 429.59972200736075,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068478,
        "lng": 120.666962,
        "ele": 427.25,
        "distanceKm": 44.42890834152559,
        "gradePct": -1.7008394096712647,
        "smoothedEle": 429.0885251998487,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068285,
        "lng": 120.667369,
        "ele": 434.5,
        "distanceKm": 44.47575115546696,
        "gradePct": -2.8322470502782715,
        "smoothedEle": 426.73172907167327,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068264,
        "lng": 120.667498,
        "ele": 436.5,
        "distanceKm": 44.48915333399823,
        "gradePct": -3.152759599109328,
        "smoothedEle": 426.05607827228647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068264,
        "lng": 120.667584,
        "ele": 434.5,
        "distanceKm": 44.497951458547895,
        "gradePct": -3.3488547763566414,
        "smoothedEle": 425.64115719265766,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068306,
        "lng": 120.667691,
        "ele": 432.75,
        "distanceKm": 44.509852576735774,
        "gradePct": -3.613157263324103,
        "smoothedEle": 425.08180463782736,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068349,
        "lng": 120.667777,
        "ele": 431.25,
        "distanceKm": 44.51986599763004,
        "gradePct": -3.80825177363059,
        "smoothedEle": 424.6111738557968,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068433,
        "lng": 120.667855,
        "ele": 430.25,
        "distanceKm": 44.5321508755811,
        "gradePct": -4.032014271561677,
        "smoothedEle": 424.03378459209694,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068747,
        "lng": 120.66811,
        "ele": 427.5,
        "distanceKm": 44.5757355912219,
        "gradePct": -4.618056329179202,
        "smoothedEle": 422.02580990257985,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06899,
        "lng": 120.668378,
        "ele": 424,
        "distanceKm": 44.61422987587332,
        "gradePct": -4.7735895430027595,
        "smoothedEle": 420.2679301636306,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069122,
        "lng": 120.668817,
        "ele": 416.5,
        "distanceKm": 44.66147860680894,
        "gradePct": -4.889899540305139,
        "smoothedEle": 417.67002279092156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069225,
        "lng": 120.66915,
        "ele": 410.75,
        "distanceKm": 44.69741923587626,
        "gradePct": -5.196346819104304,
        "smoothedEle": 415.27356326794717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069298,
        "lng": 120.669236,
        "ele": 409.25,
        "distanceKm": 44.70938984349733,
        "gradePct": -5.397122479159585,
        "smoothedEle": 414.3093081417152,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069352,
        "lng": 120.669252,
        "ele": 409.25,
        "distanceKm": 44.71561348408757,
        "gradePct": -5.52003938081689,
        "smoothedEle": 413.77096323065916,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069766,
        "lng": 120.669301,
        "ele": 410.75,
        "distanceKm": 44.76192037294721,
        "gradePct": -6.410036638576111,
        "smoothedEle": 409.8422122389054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070301,
        "lng": 120.669519,
        "ele": 407.75,
        "distanceKm": 44.82545273437529,
        "gradePct": -7.038906635764717,
        "smoothedEle": 405.57304324233763,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07062,
        "lng": 120.669766,
        "ele": 401.25,
        "distanceKm": 44.8690039838887,
        "gradePct": -6.905758995922256,
        "smoothedEle": 403.35672555829115,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070901727638535,
        "lng": 120.67010360616655,
        "ele": 394.2701620738681,
        "distanceKm": 44.915632511625766,
        "gradePct": -6.053513672434433,
        "smoothedEle": 401.66232155882085,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071154,
        "lng": 120.670471,
        "ele": 391.25,
        "distanceKm": 44.96253151030036,
        "gradePct": -4.582221841529068,
        "smoothedEle": 400.6367021043246,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071345,
        "lng": 120.670865,
        "ele": 393,
        "distanceKm": 45.008091374338,
        "gradePct": -3.473717085601273,
        "smoothedEle": 399.7922362567679,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07148,
        "lng": 120.671515,
        "ele": 398.75,
        "distanceKm": 45.076260608413946,
        "gradePct": -2.2122303851523353,
        "smoothedEle": 398.6685709890409,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071623,
        "lng": 120.671848,
        "ele": 401.25,
        "distanceKm": 45.11385519512859,
        "gradePct": -1.6457781797198885,
        "smoothedEle": 398.43534995740987,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072012,
        "lng": 120.672275,
        "ele": 401.5,
        "distanceKm": 45.17532999493691,
        "gradePct": -0.6798077115464213,
        "smoothedEle": 399.03986290095196,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072367203568678,
        "lng": 120.67250806341116,
        "ele": 400.56323412559533,
        "distanceKm": 45.22146536579612,
        "gradePct": 0.29198429098917283,
        "smoothedEle": 400.1557551022035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.072737,
        "lng": 120.672715,
        "ele": 400.75,
        "distanceKm": 45.26771440789562,
        "gradePct": 1.3173049261359706,
        "smoothedEle": 401.4440518489405,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073118333333333,
        "lng": 120.67298633333333,
        "ele": 401.4166666666667,
        "distanceKm": 45.31839418101862,
        "gradePct": 2.093984276876539,
        "smoothedEle": 402.66795266580243,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073499666666667,
        "lng": 120.67325766666667,
        "ele": 402.0833333333333,
        "distanceKm": 45.369073911040466,
        "gradePct": 2.3703744280549532,
        "smoothedEle": 403.7190925052209,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.073881,
        "lng": 120.673529,
        "ele": 402.75,
        "distanceKm": 45.41975359795899,
        "gradePct": 2.330693946188371,
        "smoothedEle": 404.7757398727621,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074217,
        "lng": 120.673828,
        "ele": 405.25,
        "distanceKm": 45.46803901124421,
        "gradePct": 2.2369458561480227,
        "smoothedEle": 405.9257826315207,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074525199867377,
        "lng": 120.67400041999448,
        "ele": 407.0052694114724,
        "distanceKm": 45.506582075106174,
        "gradePct": 2.2758167344394127,
        "smoothedEle": 406.93432743709366,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.074848,
        "lng": 120.674139,
        "ele": 408.25,
        "distanceKm": 45.54517403486936,
        "gradePct": 2.373020379849345,
        "smoothedEle": 407.96942991389966,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075333,
        "lng": 120.674255,
        "ele": 410.5,
        "distanceKm": 45.60039378038971,
        "gradePct": 2.527089780347658,
        "smoothedEle": 409.42627644522145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.075704652257645,
        "lng": 120.67442552656715,
        "ele": 411.85193863388866,
        "distanceKm": 45.6452507003116,
        "gradePct": 2.6044690806911235,
        "smoothedEle": 410.5919578715714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076074,
        "lng": 120.674602,
        "ele": 413,
        "distanceKm": 45.69011296271776,
        "gradePct": 2.6220028155787443,
        "smoothedEle": 411.74739073810287,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07648393067453,
        "lng": 120.6748476362588,
        "ele": 413.7046941850995,
        "distanceKm": 45.74216256463595,
        "gradePct": 2.532362758752121,
        "smoothedEle": 412.9533826404764,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.076893861349063,
        "lng": 120.67509327251761,
        "ele": 414.40938837019917,
        "distanceKm": 45.79421212957579,
        "gradePct": 2.4092685290875635,
        "smoothedEle": 414.08172480276534,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.077303886487453,
        "lng": 120.67533872310825,
        "ele": 414.92032675840375,
        "distanceKm": 45.8462616914744,
        "gradePct": 2.256337447636635,
        "smoothedEle": 415.13067096364136,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.077714,
        "lng": 120.675584,
        "ele": 415.25,
        "distanceKm": 45.89831125643767,
        "gradePct": 2.07748347241366,
        "smoothedEle": 416.0923125620286,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078200000000002,
        "lng": 120.675861,
        "ele": 416.7500000000001,
        "distanceKm": 45.95933046474625,
        "gradePct": 1.9110170683037224,
        "smoothedEle": 417.1475863726378,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.078686,
        "lng": 120.676138,
        "ele": 418.25,
        "distanceKm": 46.02034962549647,
        "gradePct": 1.7759123984041625,
        "smoothedEle": 418.1602942060762,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.079024333333333,
        "lng": 120.676361,
        "ele": 419.16666666666663,
        "distanceKm": 46.06434649635056,
        "gradePct": 1.705901938034263,
        "smoothedEle": 418.87660060387145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07936266666667,
        "lng": 120.67658399999999,
        "ele": 420.08333333333337,
        "distanceKm": 46.108343337443806,
        "gradePct": 1.6644513898019728,
        "smoothedEle": 419.5947114036946,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.079701,
        "lng": 120.676807,
        "ele": 421,
        "distanceKm": 46.15234014877668,
        "gradePct": 1.6598720639097213,
        "smoothedEle": 420.3464391028949,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.080136496932973,
        "lng": 120.67708050463844,
        "ele": 421.59408742957,
        "distanceKm": 46.20826659847813,
        "gradePct": 1.7148742457264956,
        "smoothedEle": 421.3895060798066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.080571997955314,
        "lng": 120.67735400309229,
        "ele": 422.2293916197134,
        "distanceKm": 46.26419308008557,
        "gradePct": 1.8288719181798596,
        "smoothedEle": 422.53184669323224,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.08100749897766,
        "lng": 120.67762750154616,
        "ele": 422.8646958098567,
        "distanceKm": 46.320119516361494,
        "gradePct": 2.0232361767683926,
        "smoothedEle": 423.84239106328334,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.081443,
        "lng": 120.677901,
        "ele": 423.5,
        "distanceKm": 46.37604590730307,
        "gradePct": 2.269714759097578,
        "smoothedEle": 425.32799741727723,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.08174576935207,
        "lng": 120.67808195680279,
        "ele": 424.67067370869745,
        "distanceKm": 46.41446566495932,
        "gradePct": 2.4769608960344485,
        "smoothedEle": 426.4700484852818,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.082049,
        "lng": 120.678262,
        "ele": 426.25,
        "distanceKm": 46.4528854710438,
        "gradePct": 2.71092692383083,
        "smoothedEle": 427.72273408854636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.082383602935487,
        "lng": 120.67845479708564,
        "ele": 428.147970856381,
        "distanceKm": 46.49499546573926,
        "gradePct": 3.0145735266550133,
        "smoothedEle": 429.2827971688705,
        "gradeBand": "hard"
      },
      {
        "lat": 23.082718301467743,
        "lng": 120.67864739854281,
        "ele": 430.0739854281903,
        "distanceKm": 46.537105463427324,
        "gradePct": 3.3485917550807565,
        "smoothedEle": 430.9907824998773,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083053,
        "lng": 120.67884,
        "ele": 432,
        "distanceKm": 46.57921543816791,
        "gradePct": 3.6686788872866645,
        "smoothedEle": 432.75957145790943,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083387000000002,
        "lng": 120.6790295,
        "ele": 434.375,
        "distanceKm": 46.62110902111019,
        "gradePct": 3.9224495610313577,
        "smoothedEle": 434.53155558785477,
        "gradeBand": "hard"
      },
      {
        "lat": 23.083721,
        "lng": 120.679219,
        "ele": 436.75,
        "distanceKm": 46.663002581768424,
        "gradePct": 4.075993821288136,
        "smoothedEle": 436.24953372136827,
        "gradeBand": "hard"
      },
      {
        "lat": 23.084219,
        "lng": 120.679444,
        "ele": 440.25,
        "distanceKm": 46.72297030545622,
        "gradePct": 3.98361216998714,
        "smoothedEle": 438.38468354867155,
        "gradeBand": "hard"
      },
      {
        "lat": 23.084846,
        "lng": 120.679442,
        "ele": 443.5,
        "distanceKm": 46.792689920923365,
        "gradePct": 3.3878205358393045,
        "smoothedEle": 440.1051463458192,
        "gradeBand": "hard"
      },
      {
        "lat": 23.085207,
        "lng": 120.679395,
        "ele": 444.25,
        "distanceKm": 46.833118223958735,
        "gradePct": 2.892577484535296,
        "smoothedEle": 440.8091859533958,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.08555,
        "lng": 120.679364,
        "ele": 444.5,
        "distanceKm": 46.87138973102394,
        "gradePct": 2.3453749066319696,
        "smoothedEle": 441.23890784756605,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.085925,
        "lng": 120.679326,
        "ele": 444.5,
        "distanceKm": 46.913268666116466,
        "gradePct": 1.6956403742034114,
        "smoothedEle": 441.43053758605816,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.086191,
        "lng": 120.679515,
        "ele": 443.25,
        "distanceKm": 46.94860435539483,
        "gradePct": 1.2059141266616507,
        "smoothedEle": 441.42908025441807,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.086455,
        "lng": 120.679773,
        "ele": 441.75,
        "distanceKm": 46.9880786675807,
        "gradePct": 0.5858322288954328,
        "smoothedEle": 441.1630194441609,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.086837,
        "lng": 120.680155,
        "ele": 440.25,
        "distanceKm": 47.04579423723502,
        "gradePct": -0.2450954303751836,
        "smoothedEle": 440.4613244873654,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08721611108982,
        "lng": 120.68053719112298,
        "ele": 438.93142975588285,
        "distanceKm": 47.10328701963301,
        "gradePct": -0.8118937802149047,
        "smoothedEle": 439.7610759820759,
        "gradeBand": "descent"
      },
      {
        "lat": 23.087614,
        "lng": 120.680898,
        "ele": 437.5,
        "distanceKm": 47.160902854804554,
        "gradePct": -0.9429406637866443,
        "smoothedEle": 439.4603058113804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.087930666666665,
        "lng": 120.681174,
        "ele": 437,
        "distanceKm": 47.20603488982507,
        "gradePct": -0.6615706929365407,
        "smoothedEle": 439.62156971155514,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088247333333335,
        "lng": 120.68145,
        "ele": 436.5,
        "distanceKm": 47.25116688323838,
        "gradePct": -0.09467861186106895,
        "smoothedEle": 440.20652970476397,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088564,
        "lng": 120.681726,
        "ele": 436,
        "distanceKm": 47.2962988350434,
        "gradePct": 0.6756395911491399,
        "smoothedEle": 441.19746960151673,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.088935666666668,
        "lng": 120.68202933333333,
        "ele": 439.58333333333314,
        "distanceKm": 47.34797729560708,
        "gradePct": 1.618197917173353,
        "smoothedEle": 442.76417654450427,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.089307333333334,
        "lng": 120.68233266666667,
        "ele": 443.16666666666686,
        "distanceKm": 47.39965570465559,
        "gradePct": 2.44914754014004,
        "smoothedEle": 444.4970709541566,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.089679,
        "lng": 120.682636,
        "ele": 446.75,
        "distanceKm": 47.451334062188245,
        "gradePct": 3.132262257604379,
        "smoothedEle": 446.4747248853149,
        "gradeBand": "hard"
      },
      {
        "lat": 23.090135,
        "lng": 120.682941,
        "ele": 451,
        "distanceKm": 47.51086795745001,
        "gradePct": 3.4258785878492204,
        "smoothedEle": 448.4909107008209,
        "gradeBand": "hard"
      },
      {
        "lat": 23.090552,
        "lng": 120.683123,
        "ele": 454.25,
        "distanceKm": 47.56083382326654,
        "gradePct": 3.204627719445409,
        "smoothedEle": 449.60454055114735,
        "gradeBand": "hard"
      },
      {
        "lat": 23.090865,
        "lng": 120.6832,
        "ele": 455.75,
        "distanceKm": 47.59651792575218,
        "gradePct": 2.8679481257405985,
        "smoothedEle": 450.12775035356043,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.091319,
        "lng": 120.683231,
        "ele": 454.75,
        "distanceKm": 47.64709997774766,
        "gradePct": 2.0057694078768975,
        "smoothedEle": 450.324231582817,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.091699,
        "lng": 120.683106,
        "ele": 457.5,
        "distanceKm": 47.69124618066211,
        "gradePct": 1.0789818884756375,
        "smoothedEle": 449.9843597864213,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092058,
        "lng": 120.68302,
        "ele": 453.5,
        "distanceKm": 47.732122935310194,
        "gradePct": 0.20909080904436605,
        "smoothedEle": 449.3828192808328,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092457,
        "lng": 120.68296,
        "ele": 448.5,
        "distanceKm": 47.776912226503065,
        "gradePct": -0.7973967612334605,
        "smoothedEle": 448.24549285369824,
        "gradeBand": "descent"
      },
      {
        "lat": 23.092619,
        "lng": 120.682908,
        "ele": 446,
        "distanceKm": 47.79569466267165,
        "gradePct": -1.2251985585641987,
        "smoothedEle": 447.66528233416193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.09288702566797,
        "lng": 120.68266745739368,
        "ele": 445.75,
        "distanceKm": 47.83434153187247,
        "gradePct": -1.993561269495615,
        "smoothedEle": 446.2875500593625,
        "gradeBand": "descent"
      },
      {
        "lat": 23.09316,
        "lng": 120.682433,
        "ele": 442.75,
        "distanceKm": 47.87302537169928,
        "gradePct": -2.5568959343429105,
        "smoothedEle": 445.0108458729195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093334,
        "lng": 120.681874,
        "ele": 440.25,
        "distanceKm": 47.93338739079338,
        "gradePct": -2.816107401638379,
        "smoothedEle": 443.71849638656687,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093562,
        "lng": 120.681472,
        "ele": 439,
        "distanceKm": 47.9816934170355,
        "gradePct": -2.3382254411140715,
        "smoothedEle": 443.4213456333632,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093841,
        "lng": 120.681217,
        "ele": 437.75,
        "distanceKm": 48.022224285166104,
        "gradePct": -1.644749362442189,
        "smoothedEle": 443.4300222085564,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094014,
        "lng": 120.681107,
        "ele": 437,
        "distanceKm": 48.044509785468065,
        "gradePct": -1.2237396960025075,
        "smoothedEle": 443.5044821634129,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094237,
        "lng": 120.681095,
        "ele": 436.5,
        "distanceKm": 48.069336647713236,
        "gradePct": -0.6453258216777635,
        "smoothedEle": 443.84193522985504,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094776,
        "lng": 120.681187,
        "ele": 441,
        "distanceKm": 48.13000502746523,
        "gradePct": 0.6817413025602167,
        "smoothedEle": 445.1543953153192,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.09505,
        "lng": 120.681412,
        "ele": 447.5,
        "distanceKm": 48.16818748451047,
        "gradePct": 1.4215991315572094,
        "smoothedEle": 446.3476245871231,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.095266,
        "lng": 120.681673,
        "ele": 453.25,
        "distanceKm": 48.20409771097218,
        "gradePct": 2.116103029651951,
        "smoothedEle": 447.65834785297557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.095391,
        "lng": 120.68199,
        "ele": 452.5,
        "distanceKm": 48.23937509291352,
        "gradePct": 2.7747755984248275,
        "smoothedEle": 449.03687740815775,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.095499,
        "lng": 120.682351,
        "ele": 449.25,
        "distanceKm": 48.278203098606255,
        "gradePct": 3.3065927629715572,
        "smoothedEle": 450.6469317608784,
        "gradeBand": "hard"
      },
      {
        "lat": 23.095737,
        "lng": 120.682588,
        "ele": 453,
        "distanceKm": 48.314091747052764,
        "gradePct": 3.7480332859760814,
        "smoothedEle": 452.3062043769252,
        "gradeBand": "hard"
      },
      {
        "lat": 23.096162,
        "lng": 120.682593,
        "ele": 456.25,
        "distanceKm": 48.361352423267206,
        "gradePct": 4.195502357525893,
        "smoothedEle": 454.5250287174779,
        "gradeBand": "hard"
      },
      {
        "lat": 23.096827,
        "lng": 120.682481,
        "ele": 458.5,
        "distanceKm": 48.43617925008186,
        "gradePct": 4.1732966318710085,
        "smoothedEle": 457.25858714725246,
        "gradeBand": "hard"
      },
      {
        "lat": 23.097376,
        "lng": 120.68251,
        "ele": 458.75,
        "distanceKm": 48.49729736844316,
        "gradePct": 3.5653329992515874,
        "smoothedEle": 458.6604005517743,
        "gradeBand": "hard"
      },
      {
        "lat": 23.097855833333334,
        "lng": 120.6825915,
        "ele": 460.12500000000006,
        "distanceKm": 48.551299731246495,
        "gradePct": 3.1408958920489005,
        "smoothedEle": 460.3348603111961,
        "gradeBand": "hard"
      },
      {
        "lat": 23.098335666666667,
        "lng": 120.682673,
        "ele": 461.49999999999994,
        "distanceKm": 48.60530208945368,
        "gradePct": 2.8160986307503206,
        "smoothedEle": 461.76278625199933,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0988155,
        "lng": 120.68275449999999,
        "ele": 462.875,
        "distanceKm": 48.65930444306486,
        "gradePct": 2.6350027910012184,
        "smoothedEle": 463.0589952739487,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.099295333333334,
        "lng": 120.682836,
        "ele": 464.25000000000006,
        "distanceKm": 48.713306792080196,
        "gradePct": 2.5969261669808277,
        "smoothedEle": 464.3506596031491,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.099775166666667,
        "lng": 120.68291749999999,
        "ele": 465.62499999999994,
        "distanceKm": 48.76730913649915,
        "gradePct": 2.4252755680499205,
        "smoothedEle": 465.60873083215307,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100255,
        "lng": 120.682999,
        "ele": 467,
        "distanceKm": 48.82131147632211,
        "gradePct": 2.155581905458545,
        "smoothedEle": 466.4582205679419,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100644,
        "lng": 120.683071,
        "ele": 468.25,
        "distanceKm": 48.86518875145636,
        "gradePct": 1.7864985246988314,
        "smoothedEle": 466.7727371500048,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100955,
        "lng": 120.68328,
        "ele": 469.25,
        "distanceKm": 48.90584387063589,
        "gradePct": 1.3380687551566648,
        "smoothedEle": 466.8482939631921,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101228,
        "lng": 120.683539,
        "ele": 471,
        "distanceKm": 48.946133241884056,
        "gradePct": 0.8182645896627488,
        "smoothedEle": 466.75193358185186,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101268,
        "lng": 120.683914,
        "ele": 470.75,
        "distanceKm": 48.984744779812296,
        "gradePct": 0.2925830780440564,
        "smoothedEle": 466.4681702897305,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101223,
        "lng": 120.684026,
        "ele": 470.25,
        "distanceKm": 48.99724516692128,
        "gradePct": 0.11909803615253453,
        "smoothedEle": 466.31783891784926,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101168,
        "lng": 120.684118,
        "ele": 469.75,
        "distanceKm": 49.00846762228965,
        "gradePct": -0.04351876383549263,
        "smoothedEle": 466.16914138421834,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100827000000002,
        "lng": 120.684372,
        "ele": 467.1250000000002,
        "distanceKm": 49.05443106654359,
        "gradePct": -0.6748417799087083,
        "smoothedEle": 465.34594145687186,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100486,
        "lng": 120.684626,
        "ele": 464.5,
        "distanceKm": 49.10039454807414,
        "gradePct": -1.289343835812143,
        "smoothedEle": 464.25947882287244,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100185,
        "lng": 120.685102,
        "ele": 462.5,
        "distanceKm": 49.15947457327051,
        "gradePct": -2.0375366275680444,
        "smoothedEle": 462.5788124291537,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100088,
        "lng": 120.685589,
        "ele": 460.75,
        "distanceKm": 49.210439118470525,
        "gradePct": -2.6657261700322765,
        "smoothedEle": 460.8023797774266,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100161,
        "lng": 120.685981,
        "ele": 459,
        "distanceKm": 49.25134614022627,
        "gradePct": -3.0624872226311046,
        "smoothedEle": 459.2762176822569,
        "gradeBand": "descent"
      },
      {
        "lat": 23.100365,
        "lng": 120.686284,
        "ele": 456.25,
        "distanceKm": 49.289751556273266,
        "gradePct": -3.2838262103819704,
        "smoothedEle": 457.9434003151492,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10079951403332,
        "lng": 120.68659056216312,
        "ele": 454.9878008112375,
        "distanceKm": 49.34734973501341,
        "gradePct": -3.6339012540659374,
        "smoothedEle": 455.6559286667442,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101246,
        "lng": 120.686879,
        "ele": 454,
        "distanceKm": 49.40510043313028,
        "gradePct": -4.262889783870062,
        "smoothedEle": 452.46268673157124,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101665,
        "lng": 120.687248,
        "ele": 452,
        "distanceKm": 49.46505927611594,
        "gradePct": -5.284024733279078,
        "smoothedEle": 448.23226904437104,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101981,
        "lng": 120.687616,
        "ele": 452,
        "distanceKm": 49.516550077397596,
        "gradePct": -6.369557855076488,
        "smoothedEle": 444.13999995864214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.102093,
        "lng": 120.688014,
        "ele": 449,
        "distanceKm": 49.559119216713135,
        "gradePct": -7.087427731659046,
        "smoothedEle": 440.8302966112062,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10193910184087,
        "lng": 120.68835895877415,
        "ele": 440.83299059550853,
        "distanceKm": 49.5983320361932,
        "gradePct": -7.496122726171371,
        "smoothedEle": 437.84469006994686,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101734,
        "lng": 120.688676,
        "ele": 433.25,
        "distanceKm": 49.63797545158409,
        "gradePct": -7.643773779391329,
        "smoothedEle": 434.8556304463226,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101594,
        "lng": 120.689014,
        "ele": 428,
        "distanceKm": 49.675888931506385,
        "gradePct": -7.662600322960321,
        "smoothedEle": 432.0463736168523,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101615,
        "lng": 120.689392,
        "ele": 422.5,
        "distanceKm": 49.71462062246988,
        "gradePct": -7.506385013469448,
        "smoothedEle": 429.28057477304316,
        "gradeBand": "descent"
      },
      {
        "lat": 23.101805,
        "lng": 120.689706,
        "ele": 418.25,
        "distanceKm": 49.75306215447726,
        "gradePct": -7.365389856329509,
        "smoothedEle": 426.57044676652265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10219961115776,
        "lng": 120.69001981240505,
        "ele": 417.3416713912867,
        "distanceKm": 49.80742678249497,
        "gradePct": -7.135418163476073,
        "smoothedEle": 422.8881222365216,
        "gradeBand": "descent"
      },
      {
        "lat": 23.102598,
        "lng": 120.690328,
        "ele": 417,
        "distanceKm": 49.861795415991324,
        "gradePct": -6.543421933700663,
        "smoothedEle": 420.00381016879203,
        "gradeBand": "descent"
      },
      {
        "lat": 23.102922055809163,
        "lng": 120.69059621102168,
        "ele": 416.95174123784045,
        "distanceKm": 49.9070824907262,
        "gradePct": -5.684327055555149,
        "smoothedEle": 418.45021257593197,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10324,
        "lng": 120.690873,
        "ele": 416.75,
        "distanceKm": 49.95237383010052,
        "gradePct": -4.616126952302684,
        "smoothedEle": 417.38671973047775,
        "gradeBand": "descent"
      },
      {
        "lat": 23.103521,
        "lng": 120.691156,
        "ele": 416.75,
        "distanceKm": 49.994965844854725,
        "gradePct": -3.4663598162677904,
        "smoothedEle": 416.79942964900783,
        "gradeBand": "descent"
      },
      {
        "lat": 23.1039185,
        "lng": 120.691542,
        "ele": 417.24999999999994,
        "distanceKm": 50.05422985491563,
        "gradePct": -2.0928469239279637,
        "smoothedEle": 416.2194771370256,
        "gradeBand": "descent"
      },
      {
        "lat": 23.104316,
        "lng": 120.691928,
        "ele": 417.75,
        "distanceKm": 50.11349378714021,
        "gradePct": -1.725432543236313,
        "smoothedEle": 414.84880286082665,
        "gradeBand": "descent"
      },
      {
        "lat": 23.104673,
        "lng": 120.692235,
        "ele": 416.25,
        "distanceKm": 50.164107103524124,
        "gradePct": -2.0681646834536016,
        "smoothedEle": 413.0886033444632,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10493,
        "lng": 120.692477,
        "ele": 414.25,
        "distanceKm": 50.20191257948002,
        "gradePct": -2.609038115533187,
        "smoothedEle": 411.513373269587,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105223,
        "lng": 120.69277,
        "ele": 414.75,
        "distanceKm": 50.24617854476007,
        "gradePct": -3.410343202809267,
        "smoothedEle": 409.4775801610232,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105395,
        "lng": 120.693092,
        "ele": 412.25,
        "distanceKm": 50.28426203211957,
        "gradePct": -3.9061806099887817,
        "smoothedEle": 407.7125225749171,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105464,
        "lng": 120.693448,
        "ele": 407.25,
        "distanceKm": 50.32147171080234,
        "gradePct": -4.307240149393006,
        "smoothedEle": 405.9568711248505,
        "gradeBand": "descent"
      },
      {
        "lat": 23.1054935,
        "lng": 120.69393099999999,
        "ele": 401.625,
        "distanceKm": 50.370979544583335,
        "gradePct": -4.612338419576238,
        "smoothedEle": 403.5775744472937,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105523,
        "lng": 120.694414,
        "ele": 396,
        "distanceKm": 50.42048736753814,
        "gradePct": -4.692463293349296,
        "smoothedEle": 401.2741916071768,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105645,
        "lng": 120.695016,
        "ele": 393.75,
        "distanceKm": 50.48353392223004,
        "gradePct": -4.577529848094961,
        "smoothedEle": 398.59120862979006,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105894714285714,
        "lng": 120.69544257142857,
        "ele": 393.67857142857144,
        "distanceKm": 50.535248347324064,
        "gradePct": -4.407422530307195,
        "smoothedEle": 396.4799347748244,
        "gradeBand": "descent"
      },
      {
        "lat": 23.106144428571426,
        "lng": 120.69586914285713,
        "ele": 393.60714285714283,
        "distanceKm": 50.58696270397623,
        "gradePct": -3.986640989323007,
        "smoothedEle": 394.8606658480617,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10639414285714,
        "lng": 120.69629571428571,
        "ele": 393.5357142857143,
        "distanceKm": 50.63867699218876,
        "gradePct": -3.247388908087668,
        "smoothedEle": 394.00534368453555,
        "gradeBand": "descent"
      },
      {
        "lat": 23.106643857142856,
        "lng": 120.69672228571429,
        "ele": 393.4642857142857,
        "distanceKm": 50.69039121195956,
        "gradePct": -2.0760595544258806,
        "smoothedEle": 394.15913636482117,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10689357142857,
        "lng": 120.69714885714286,
        "ele": 393.39285714285717,
        "distanceKm": 50.74210536328795,
        "gradePct": -0.5678787402437057,
        "smoothedEle": 395.12947187016806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.107143285714283,
        "lng": 120.69757542857143,
        "ele": 393.32142857142856,
        "distanceKm": 50.79381944617183,
        "gradePct": 0.4142104614125456,
        "smoothedEle": 395.575680519497,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.107393,
        "lng": 120.698002,
        "ele": 393.25,
        "distanceKm": 50.845533460613424,
        "gradePct": 0.7556350101560162,
        "smoothedEle": 395.53700412475524,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.107708075770724,
        "lng": 120.69847013654147,
        "ele": 397.5193675884083,
        "distanceKm": 50.904861014314015,
        "gradePct": 0.5386000420874305,
        "smoothedEle": 395.50783975358905,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.108026,
        "lng": 120.698936,
        "ele": 404,
        "distanceKm": 50.96418920890965,
        "gradePct": 0.08879034555667305,
        "smoothedEle": 395.4976003265579,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.107764625561664,
        "lng": 120.69855330495785,
        "ele": 398.70241760804373,
        "distanceKm": 51.01293957991637,
        "gradePct": -0.028526046263663882,
        "smoothedEle": 395.5043286699656,
        "gradeBand": "descent"
      },
      {
        "lat": 23.107504,
        "lng": 120.69817,
        "ele": 393.25,
        "distanceKm": 51.061690560111316,
        "gradePct": -0.00245008289314793,
        "smoothedEle": 395.5241614159626,
        "gradeBand": "descent"
      },
      {
        "lat": 23.107263885810106,
        "lng": 120.69778144223626,
        "ele": 393.28693197651387,
        "distanceKm": 51.109566240001755,
        "gradePct": 0.02471362693057664,
        "smoothedEle": 395.5564549346167,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.107032616408663,
        "lng": 120.69738637905965,
        "ele": 393.3530845512976,
        "distanceKm": 51.157460483343264,
        "gradePct": -0.08900591814008736,
        "smoothedEle": 395.32074979806606,
        "gradeBand": "descent"
      },
      {
        "lat": 23.106801347007217,
        "lng": 120.69699131588304,
        "ele": 393.4192371260813,
        "distanceKm": 51.20535478539084,
        "gradePct": -0.4076744398583058,
        "smoothedEle": 394.6879329653492,
        "gradeBand": "descent"
      },
      {
        "lat": 23.106570077605774,
        "lng": 120.69659625270643,
        "ele": 393.4853897008651,
        "distanceKm": 51.253249146143524,
        "gradePct": -0.8136131427261146,
        "smoothedEle": 393.8935010166031,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10633880820433,
        "lng": 120.69620118952983,
        "ele": 393.5515422756488,
        "distanceKm": 51.30114356559978,
        "gradePct": -0.7679865863922435,
        "smoothedEle": 394.01480042647484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.10610753880289,
        "lng": 120.69580612635322,
        "ele": 393.61769485043254,
        "distanceKm": 51.34903804376153,
        "gradePct": -0.17086791406682988,
        "smoothedEle": 395.02046388401806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.105876269401442,
        "lng": 120.6954110631766,
        "ele": 393.68384742521624,
        "distanceKm": 51.39693258062724,
        "gradePct": 0.8845487333324388,
        "smoothedEle": 396.56831116302266,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.105645,
        "lng": 120.695016,
        "ele": 393.75,
        "distanceKm": 51.44482717619595,
        "gradePct": 2.250377502259962,
        "smoothedEle": 398.5339526762739,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.105552,
        "lng": 120.694681,
        "ele": 394,
        "distanceKm": 51.48061601167438,
        "gradePct": 3.035850102544756,
        "smoothedEle": 400.03451168993973,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105514284228246,
        "lng": 120.69427129770308,
        "ele": 397.66190563173575,
        "distanceKm": 51.52272782843779,
        "gradePct": 3.7101306127235363,
        "smoothedEle": 401.88827682885494,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105489142114124,
        "lng": 120.69385964885154,
        "ele": 402.4559528158679,
        "distanceKm": 51.56492211301151,
        "gradePct": 4.172029434388603,
        "smoothedEle": 403.8778613291144,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105464,
        "lng": 120.693448,
        "ele": 407.25,
        "distanceKm": 51.607116405450135,
        "gradePct": 4.4585184213495035,
        "smoothedEle": 405.903302236212,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105395,
        "lng": 120.693092,
        "ele": 412.25,
        "distanceKm": 51.644326084132906,
        "gradePct": 4.572896170733478,
        "smoothedEle": 407.6591797044861,
        "gradeBand": "hard"
      },
      {
        "lat": 23.105223,
        "lng": 120.69277,
        "ele": 414.75,
        "distanceKm": 51.68240957149241,
        "gradePct": 4.655363877612379,
        "smoothedEle": 409.4241920746343,
        "gradeBand": "hard"
      },
      {
        "lat": 23.10493,
        "lng": 120.692477,
        "ele": 414.25,
        "distanceKm": 51.726675536772454,
        "gradePct": 4.689513314709008,
        "smoothedEle": 411.45344950609785,
        "gradeBand": "hard"
      },
      {
        "lat": 23.104627847685983,
        "lng": 120.69219617153949,
        "ele": 416.43971560510204,
        "distanceKm": 51.7708769994836,
        "gradePct": 4.584276139820637,
        "smoothedEle": 413.33226437104133,
        "gradeBand": "hard"
      },
      {
        "lat": 23.104316,
        "lng": 120.691928,
        "ele": 417.75,
        "distanceKm": 51.81508889476541,
        "gradePct": 4.280772977021481,
        "smoothedEle": 414.8410598333087,
        "gradeBand": "hard"
      },
      {
        "lat": 23.1039185,
        "lng": 120.691542,
        "ele": 417.24999999999994,
        "distanceKm": 51.874352826989984,
        "gradePct": 3.593478245190403,
        "smoothedEle": 416.23775172833194,
        "gradeBand": "hard"
      },
      {
        "lat": 23.103521,
        "lng": 120.691156,
        "ele": 416.75,
        "distanceKm": 51.93361683705089,
        "gradePct": 2.5359475989133027,
        "smoothedEle": 416.820389649165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.10324,
        "lng": 120.690873,
        "ele": 416.75,
        "distanceKm": 51.9762088518051,
        "gradePct": 1.9489381322687231,
        "smoothedEle": 417.4120978789152,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.102846,
        "lng": 120.69053,
        "ele": 417,
        "distanceKm": 52.032334392707845,
        "gradePct": 1.8128730355881002,
        "smoothedEle": 418.8732360264445,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.10243274319568,
        "lng": 120.69020015983061,
        "ele": 417.3208648389027,
        "distanceKm": 52.08934023299815,
        "gradePct": 2.375071805542513,
        "smoothedEle": 421.13523992622953,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.102015,
        "lng": 120.689877,
        "ele": 417.5,
        "distanceKm": 52.146350204754825,
        "gradePct": 3.808153559578673,
        "smoothedEle": 424.6135946799693,
        "gradeBand": "hard"
      },
      {
        "lat": 23.101713,
        "lng": 120.689621,
        "ele": 419,
        "distanceKm": 52.18893234710076,
        "gradePct": 4.893039562856972,
        "smoothedEle": 427.52941273166863,
        "gradeBand": "hard"
      },
      {
        "lat": 23.10159,
        "lng": 120.689193,
        "ele": 426.25,
        "distanceKm": 52.23479434869334,
        "gradePct": 5.894966491972697,
        "smoothedEle": 430.76078058850464,
        "gradeBand": "hard"
      },
      {
        "lat": 23.101674,
        "lng": 120.688784,
        "ele": 431.25,
        "distanceKm": 52.2776563039215,
        "gradePct": 6.610206132819249,
        "smoothedEle": 433.8920313943921,
        "gradeBand": "steep"
      },
      {
        "lat": 23.102018,
        "lng": 120.688237,
        "ele": 443.75,
        "distanceKm": 52.34542888666789,
        "gradePct": 7.206752879709466,
        "smoothedEle": 438.9708879725399,
        "gradeBand": "steep"
      },
      {
        "lat": 23.102095,
        "lng": 120.687897,
        "ele": 450.75,
        "distanceKm": 52.38124196876814,
        "gradePct": 7.351991147649793,
        "smoothedEle": 441.7067953133021,
        "gradeBand": "steep"
      },
      {
        "lat": 23.101807,
        "lng": 120.687405,
        "ele": 451.25,
        "distanceKm": 52.44088872655075,
        "gradePct": 7.625672201768571,
        "smoothedEle": 446.45734559562413,
        "gradeBand": "steep"
      },
      {
        "lat": 23.101482,
        "lng": 120.687073,
        "ele": 453,
        "distanceKm": 52.49047725829427,
        "gradePct": 7.658378989229709,
        "smoothedEle": 450.16958776381637,
        "gradeBand": "steep"
      },
      {
        "lat": 23.101151901103727,
        "lng": 120.68681821044754,
        "ele": 454.20818339883635,
        "distanceKm": 52.535492624998504,
        "gradePct": 7.43585393135269,
        "smoothedEle": 453.0979754312893,
        "gradeBand": "steep"
      },
      {
        "lat": 23.10080345055186,
        "lng": 120.68659310522378,
        "ele": 454.9790916994181,
        "distanceKm": 52.580562942753794,
        "gradePct": 6.926362152714846,
        "smoothedEle": 455.50764605331204,
        "gradeBand": "steep"
      },
      {
        "lat": 23.100455,
        "lng": 120.686368,
        "ele": 455.75,
        "distanceKm": 52.62563329101965,
        "gradePct": 6.063771327720359,
        "smoothedEle": 457.36987311422644,
        "gradeBand": "steep"
      },
      {
        "lat": 23.100161,
        "lng": 120.685981,
        "ele": 459,
        "distanceKm": 52.67697011167546,
        "gradePct": 5.02282603360301,
        "smoothedEle": 459.20408266448936,
        "gradeBand": "hard"
      },
      {
        "lat": 23.100088,
        "lng": 120.685589,
        "ele": 460.75,
        "distanceKm": 52.7178771334312,
        "gradePct": 4.416027150947792,
        "smoothedEle": 460.7840879795367,
        "gradeBand": "hard"
      },
      {
        "lat": 23.100132,
        "lng": 120.685242,
        "ele": 461.75,
        "distanceKm": 52.75370377878007,
        "gradePct": 3.9935921084616273,
        "smoothedEle": 462.0588133619237,
        "gradeBand": "hard"
      },
      {
        "lat": 23.100314,
        "lng": 120.684828,
        "ele": 463.25,
        "distanceKm": 52.80063505896154,
        "gradePct": 3.590003604395099,
        "smoothedEle": 463.51699759623943,
        "gradeBand": "hard"
      },
      {
        "lat": 23.100722313719885,
        "lng": 120.68444997746377,
        "ele": 466.31913054162425,
        "distanceKm": 52.860269600321715,
        "gradePct": 3.2151502864928543,
        "smoothedEle": 465.0376918758364,
        "gradeBand": "hard"
      },
      {
        "lat": 23.101168,
        "lng": 120.684118,
        "ele": 469.75,
        "distanceKm": 52.92034373240664,
        "gradePct": 2.647207640073096,
        "smoothedEle": 466.16626576972385,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101282,
        "lng": 120.683791,
        "ele": 471,
        "distanceKm": 52.9561105315636,
        "gradePct": 2.213502933757408,
        "smoothedEle": 466.5605985440293,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.101182,
        "lng": 120.683466,
        "ele": 470.75,
        "distanceKm": 52.99116162530764,
        "gradePct": 1.7862808877862648,
        "smoothedEle": 466.79521386183353,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100644,
        "lng": 120.683071,
        "ele": 468.25,
        "distanceKm": 53.06334860512841,
        "gradePct": 0.8547198777208841,
        "smoothedEle": 466.8049749046371,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.100255,
        "lng": 120.682999,
        "ele": 467,
        "distanceKm": 53.10722588026266,
        "gradePct": 0.27400564737993316,
        "smoothedEle": 466.4678404542528,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.099775166666667,
        "lng": 120.68291749999999,
        "ele": 465.62499999999994,
        "distanceKm": 53.16122822008562,
        "gradePct": -0.47939383439693756,
        "smoothedEle": 465.63606624334983,
        "gradeBand": "descent"
      },
      {
        "lat": 23.099295333333334,
        "lng": 120.682836,
        "ele": 464.25000000000006,
        "distanceKm": 53.21523056450457,
        "gradePct": -1.2089811760404074,
        "smoothedEle": 464.3805060848342,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0988155,
        "lng": 120.68275449999999,
        "ele": 462.875,
        "distanceKm": 53.26923291351991,
        "gradePct": -1.85927939042705,
        "smoothedEle": 463.0412035833645,
        "gradeBand": "descent"
      },
      {
        "lat": 23.098335666666667,
        "lng": 120.682673,
        "ele": 461.49999999999994,
        "distanceKm": 53.32323526713109,
        "gradePct": -2.223655278448231,
        "smoothedEle": 461.7739443758181,
        "gradeBand": "descent"
      },
      {
        "lat": 23.097855833333334,
        "lng": 120.6825915,
        "ele": 460.12500000000006,
        "distanceKm": 53.377237625338275,
        "gradePct": -2.431280932413409,
        "smoothedEle": 460.4012840311836,
        "gradeBand": "descent"
      },
      {
        "lat": 23.097376,
        "lng": 120.68251,
        "ele": 458.75,
        "distanceKm": 53.43123998814161,
        "gradePct": -2.634043768598465,
        "smoothedEle": 458.7153717243947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.096924,
        "lng": 120.682467,
        "ele": 458.75,
        "distanceKm": 53.48169223044105,
        "gradePct": -2.639175388098911,
        "smoothedEle": 457.4704732527173,
        "gradeBand": "descent"
      },
      {
        "lat": 23.09654284878951,
        "lng": 120.68252885704598,
        "ele": 457.5385861299242,
        "distanceKm": 53.524544010079644,
        "gradePct": -2.6920332045787534,
        "smoothedEle": 456.35661165003216,
        "gradeBand": "descent"
      },
      {
        "lat": 23.096162,
        "lng": 120.682593,
        "ele": 456.25,
        "distanceKm": 53.56739770499925,
        "gradePct": -3.055718932115254,
        "smoothedEle": 454.5399624376522,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095833,
        "lng": 120.682611,
        "ele": 455.5,
        "distanceKm": 53.60402718447316,
        "gradePct": -3.356187545640959,
        "smoothedEle": 452.8525594712047,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095652,
        "lng": 120.682542,
        "ele": 450.75,
        "distanceKm": 53.62535502760007,
        "gradePct": -3.514162541214922,
        "smoothedEle": 451.87077059193496,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095499,
        "lng": 120.682351,
        "ele": 449.25,
        "distanceKm": 53.651260515297075,
        "gradePct": -3.750860791731388,
        "smoothedEle": 450.7196478424792,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095391,
        "lng": 120.68199,
        "ele": 452.5,
        "distanceKm": 53.69008852098981,
        "gradePct": -4.037373525423617,
        "smoothedEle": 449.17747842485517,
        "gradeBand": "descent"
      },
      {
        "lat": 23.095179,
        "lng": 120.681546,
        "ele": 451.25,
        "distanceKm": 53.741256006917475,
        "gradePct": -4.165329274812049,
        "smoothedEle": 447.3174999331912,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094776,
        "lng": 120.681187,
        "ele": 441,
        "distanceKm": 53.799190639825525,
        "gradePct": -3.810385275138716,
        "smoothedEle": 445.4545930640107,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094237,
        "lng": 120.681095,
        "ele": 437,
        "distanceKm": 53.85985901957752,
        "gradePct": -3.1327779247128955,
        "smoothedEle": 444.1125768906929,
        "gradeBand": "descent"
      },
      {
        "lat": 23.094014,
        "lng": 120.681107,
        "ele": 437.75,
        "distanceKm": 53.88468588182269,
        "gradePct": -2.786828408896429,
        "smoothedEle": 443.8184034468798,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093841,
        "lng": 120.681217,
        "ele": 438.5,
        "distanceKm": 53.90697138212465,
        "gradePct": -2.456116911906371,
        "smoothedEle": 443.65153927588835,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093562,
        "lng": 120.681472,
        "ele": 440,
        "distanceKm": 53.947502250255255,
        "gradePct": -1.661955758674059,
        "smoothedEle": 443.79273843999204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.093334,
        "lng": 120.681874,
        "ele": 441.5,
        "distanceKm": 53.99580827649738,
        "gradePct": -0.679024459223844,
        "smoothedEle": 444.2053051329343,
        "gradeBand": "descent"
      },
      {
        "lat": 23.09323,
        "lng": 120.68228,
        "ele": 441.75,
        "distanceKm": 54.03891598677112,
        "gradePct": 0.19140080233779327,
        "smoothedEle": 444.9586492940845,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092944,
        "lng": 120.682613,
        "ele": 445.75,
        "distanceKm": 54.085515308076886,
        "gradePct": 1.2678389487584345,
        "smoothedEle": 446.3478709599571,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092695,
        "lng": 120.682851,
        "ele": 445.75,
        "distanceKm": 54.12238297589458,
        "gradePct": 1.9770424338375965,
        "smoothedEle": 447.6593141891557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.092058,
        "lng": 120.68302,
        "ele": 453.5,
        "distanceKm": 54.19529307303599,
        "gradePct": 2.660229349347778,
        "smoothedEle": 449.5213636396706,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.091699,
        "lng": 120.683106,
        "ele": 457.5,
        "distanceKm": 54.23616982768407,
        "gradePct": 2.678473943535569,
        "smoothedEle": 450.2676056988737,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.091319,
        "lng": 120.683231,
        "ele": 454.75,
        "distanceKm": 54.28031603059853,
        "gradePct": 2.566238885927553,
        "smoothedEle": 451.32534757047716,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.090865,
        "lng": 120.6832,
        "ele": 455.75,
        "distanceKm": 54.330898082594004,
        "gradePct": 2.3143917530468867,
        "smoothedEle": 452.5055648276822,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.090552,
        "lng": 120.683123,
        "ele": 454.25,
        "distanceKm": 54.36658218507964,
        "gradePct": 2.168047175280376,
        "smoothedEle": 453.12421122141654,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.090208344529714,
        "lng": 120.68297301128155,
        "ele": 451.5716300277596,
        "distanceKm": 54.40775974494798,
        "gradePct": 1.9639374609486997,
        "smoothedEle": 453.6768289121011,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.089881,
        "lng": 120.682786,
        "ele": 448.5,
        "distanceKm": 54.44887917949322,
        "gradePct": 1.399663215512257,
        "smoothedEle": 453.37144786810387,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.089814,
        "lng": 120.682401,
        "ele": 451.25,
        "distanceKm": 54.48895832201713,
        "gradePct": 0.7391404743376492,
        "smoothedEle": 453.00527675348945,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.089777,
        "lng": 120.682092,
        "ele": 455.25,
        "distanceKm": 54.52083177311649,
        "gradePct": 0.1283205635593258,
        "smoothedEle": 452.52733149453195,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.089571,
        "lng": 120.681679,
        "ele": 454.75,
        "distanceKm": 54.56888706144588,
        "gradePct": -0.6400407197932247,
        "smoothedEle": 451.8750620531665,
        "gradeBand": "descent"
      },
      {
        "lat": 23.089365,
        "lng": 120.681266,
        "ele": 454.25,
        "distanceKm": 54.61694240669908,
        "gradePct": -1.014259271539842,
        "smoothedEle": 451.58011364250416,
        "gradeBand": "descent"
      },
      {
        "lat": 23.089128,
        "lng": 120.680912,
        "ele": 450.25,
        "distanceKm": 54.66172687642758,
        "gradePct": -0.8867949255287487,
        "smoothedEle": 451.4804788714253,
        "gradeBand": "descent"
      },
      {
        "lat": 23.089043,
        "lng": 120.680878,
        "ele": 449,
        "distanceKm": 54.671797994560066,
        "gradePct": -0.8490637772388133,
        "smoothedEle": 451.4639294052838,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088883,
        "lng": 120.680497,
        "ele": 451.25,
        "distanceKm": 54.71463867196985,
        "gradePct": -0.6235400713446122,
        "smoothedEle": 451.37311745918873,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088469,
        "lng": 120.679983,
        "ele": 447.75,
        "distanceKm": 54.784520370811975,
        "gradePct": -0.6571871766567958,
        "smoothedEle": 450.46473542385473,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088307,
        "lng": 120.679472,
        "ele": 451.25,
        "distanceKm": 54.83980672209544,
        "gradePct": -1.0350019680073639,
        "smoothedEle": 449.45924205428315,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088282,
        "lng": 120.679304,
        "ele": 453.5,
        "distanceKm": 54.8572145899562,
        "gradePct": -1.1682592774668143,
        "smoothedEle": 449.15399907841834,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088264,
        "lng": 120.679283,
        "ele": 453.5,
        "distanceKm": 54.86015060904517,
        "gradePct": -1.1936194922377126,
        "smoothedEle": 449.09674670618335,
        "gradeBand": "descent"
      },
      {
        "lat": 23.088138,
        "lng": 120.679248,
        "ele": 452.75,
        "distanceKm": 54.87461136559225,
        "gradePct": -1.3216018904655682,
        "smoothedEle": 448.8147619535153,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08791,
        "lng": 120.679222,
        "ele": 450.75,
        "distanceKm": 54.90010295507986,
        "gradePct": -1.5000536104923086,
        "smoothedEle": 448.4038224666392,
        "gradeBand": "descent"
      },
      {
        "lat": 23.087429,
        "lng": 120.67914,
        "ele": 447.5,
        "distanceKm": 54.954241489580845,
        "gradePct": -1.5214405497404255,
        "smoothedEle": 447.81544509586485,
        "gradeBand": "descent"
      },
      {
        "lat": 23.086985,
        "lng": 120.67922,
        "ele": 446,
        "distanceKm": 55.00428568620615,
        "gradePct": -1.5009078207461428,
        "smoothedEle": 447.10344781297096,
        "gradeBand": "descent"
      },
      {
        "lat": 23.086623072699943,
        "lng": 120.67919554572734,
        "ele": 445.75,
        "distanceKm": 55.04460788493524,
        "gradePct": -1.3664165108019208,
        "smoothedEle": 446.64222174193503,
        "gradeBand": "descent"
      },
      {
        "lat": 23.086259,
        "lng": 120.679201,
        "ele": 445.75,
        "distanceKm": 55.08509482229891,
        "gradePct": -1.3970428736661888,
        "smoothedEle": 445.85167668883946,
        "gradeBand": "descent"
      },
      {
        "lat": 23.085925,
        "lng": 120.679326,
        "ele": 444.5,
        "distanceKm": 55.12437338940956,
        "gradePct": -1.7044433677506035,
        "smoothedEle": 444.73116475044765,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08556615114505,
        "lng": 120.67936236335065,
        "ele": 444.5,
        "distanceKm": 55.16444861046781,
        "gradePct": -2.117279965023242,
        "smoothedEle": 443.4356646841689,
        "gradeBand": "descent"
      },
      {
        "lat": 23.085207,
        "lng": 120.679395,
        "ele": 444.25,
        "distanceKm": 55.20452374545768,
        "gradePct": -2.4465777911506956,
        "smoothedEle": 442.20756918637346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.084846,
        "lng": 120.679442,
        "ele": 443.5,
        "distanceKm": 55.24495204849305,
        "gradePct": -2.8477647554059495,
        "smoothedEle": 440.93997211802497,
        "gradeBand": "descent"
      },
      {
        "lat": 23.084486,
        "lng": 120.679459,
        "ele": 441.5,
        "distanceKm": 55.285020030458085,
        "gradePct": -3.1188220269856246,
        "smoothedEle": 439.6154930150211,
        "gradeBand": "descent"
      },
      {
        "lat": 23.083967,
        "lng": 120.679347,
        "ele": 438.5,
        "distanceKm": 55.34385647909534,
        "gradePct": -3.336680936630794,
        "smoothedEle": 437.427978678773,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08350788898804,
        "lng": 120.67909808821328,
        "ele": 435.2346148101679,
        "distanceKm": 55.400904619865784,
        "gradePct": -3.585357078024066,
        "smoothedEle": 435.1477625006678,
        "gradeBand": "descent"
      },
      {
        "lat": 23.083053,
        "lng": 120.67884,
        "ele": 432,
        "distanceKm": 55.457961289672944,
        "gradePct": -3.885397132880316,
        "smoothedEle": 432.73914700859103,
        "gradeBand": "descent"
      },
      {
        "lat": 23.082718301467743,
        "lng": 120.67864739854281,
        "ele": 430.0739854281903,
        "distanceKm": 55.50007126441353,
        "gradePct": -4.043117149365201,
        "smoothedEle": 430.9696601881955,
        "gradeBand": "descent"
      },
      {
        "lat": 23.082383602935487,
        "lng": 120.67845479708564,
        "ele": 428.147970856381,
        "distanceKm": 55.54218126210159,
        "gradePct": -4.101616000266942,
        "smoothedEle": 429.2870305392643,
        "gradeBand": "descent"
      },
      {
        "lat": 23.082049,
        "lng": 120.678262,
        "ele": 426.25,
        "distanceKm": 55.58429125679705,
        "gradePct": -4.035494359081127,
        "smoothedEle": 427.74081048432356,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08174576935207,
        "lng": 120.67808195680279,
        "ele": 424.67067370869773,
        "distanceKm": 55.62271106288153,
        "gradePct": -3.901054206285296,
        "smoothedEle": 426.4251072589127,
        "gradeBand": "descent"
      },
      {
        "lat": 23.081443,
        "lng": 120.677901,
        "ele": 423.5,
        "distanceKm": 55.66113082053778,
        "gradePct": -3.64125536568776,
        "smoothedEle": 425.32345065725946,
        "gradeBand": "descent"
      },
      {
        "lat": 23.08100749897766,
        "lng": 120.67762750154616,
        "ele": 422.8646958098567,
        "distanceKm": 55.71705721147936,
        "gradePct": -3.2242726565275,
        "smoothedEle": 423.84239106328334,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080571997955314,
        "lng": 120.67735400309229,
        "ele": 422.2293916197133,
        "distanceKm": 55.77298364775528,
        "gradePct": -2.812081682725096,
        "smoothedEle": 422.53184669323235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.080136496932973,
        "lng": 120.67708050463844,
        "ele": 421.59408742957,
        "distanceKm": 55.82891012936272,
        "gradePct": -2.42892389004063,
        "smoothedEle": 421.3895060798071,
        "gradeBand": "descent"
      },
      {
        "lat": 23.079701,
        "lng": 120.676807,
        "ele": 421,
        "distanceKm": 55.88483657906417,
        "gradePct": -2.174614244875781,
        "smoothedEle": 420.3464391028959,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07936266666667,
        "lng": 120.67658399999999,
        "ele": 420.08333333333337,
        "distanceKm": 55.928833390397045,
        "gradePct": -1.9858621039725792,
        "smoothedEle": 419.5947114036955,
        "gradeBand": "descent"
      },
      {
        "lat": 23.079024333333333,
        "lng": 120.676361,
        "ele": 419.16666666666663,
        "distanceKm": 55.97283023149029,
        "gradePct": -1.8294205740395193,
        "smoothedEle": 418.87660060387236,
        "gradeBand": "descent"
      },
      {
        "lat": 23.078686,
        "lng": 120.676138,
        "ele": 418.25,
        "distanceKm": 56.01682710234438,
        "gradePct": -1.7380084118593153,
        "smoothedEle": 418.16029420607714,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0782,
        "lng": 120.675861,
        "ele": 416.7499999999999,
        "distanceKm": 56.07784626309495,
        "gradePct": -1.6646134794986882,
        "smoothedEle": 417.14758637263276,
        "gradeBand": "descent"
      },
      {
        "lat": 23.077714,
        "lng": 120.675584,
        "ele": 415.25,
        "distanceKm": 56.13886547140318,
        "gradePct": -1.660406673717977,
        "smoothedEle": 416.11015571621436,
        "gradeBand": "descent"
      },
      {
        "lat": 23.077303886487453,
        "lng": 120.67533872310825,
        "ele": 414.92032675840375,
        "distanceKm": 56.19091503636645,
        "gradePct": -1.7214546645163618,
        "smoothedEle": 415.13925530282177,
        "gradeBand": "descent"
      },
      {
        "lat": 23.076893861349063,
        "lng": 120.67509327251761,
        "ele": 414.40938837019917,
        "distanceKm": 56.24296459826506,
        "gradePct": -1.821286336312485,
        "smoothedEle": 414.08392915512536,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07648393067453,
        "lng": 120.6748476362588,
        "ele": 413.70469418509964,
        "distanceKm": 56.295014163204904,
        "gradePct": -1.9529170854750084,
        "smoothedEle": 412.94986860675914,
        "gradeBand": "descent"
      },
      {
        "lat": 23.076074,
        "lng": 120.674602,
        "ele": 413,
        "distanceKm": 56.34706376512309,
        "gradePct": -2.103934098171122,
        "smoothedEle": 411.74936161612266,
        "gradeBand": "descent"
      },
      {
        "lat": 23.075511,
        "lng": 120.674333,
        "ele": 411.25,
        "distanceKm": 56.41544771277711,
        "gradePct": -2.332179659921645,
        "smoothedEle": 409.97748593869073,
        "gradeBand": "descent"
      },
      {
        "lat": 23.075184218151882,
        "lng": 120.67421941506313,
        "ele": 409.80977493141194,
        "distanceKm": 56.45359686435776,
        "gradePct": -2.4340123371353792,
        "smoothedEle": 408.98424772196717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.074848,
        "lng": 120.674139,
        "ele": 408.25,
        "distanceKm": 56.491877031905304,
        "gradePct": -2.5211674808149023,
        "smoothedEle": 407.9758857407911,
        "gradeBand": "descent"
      },
      {
        "lat": 23.074459,
        "lng": 120.673972,
        "ele": 406.75,
        "distanceKm": 56.5383834342555,
        "gradePct": -2.6070568750365535,
        "smoothedEle": 406.73545684947186,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07415573665121,
        "lng": 120.67377348291284,
        "ele": 404.7941715119747,
        "distanceKm": 56.577747791783786,
        "gradePct": -2.62153704378567,
        "smoothedEle": 405.7112430423682,
        "gradeBand": "descent"
      },
      {
        "lat": 23.073881,
        "lng": 120.673529,
        "ele": 402.75,
        "distanceKm": 56.61722926190499,
        "gradePct": -2.5993172990507305,
        "smoothedEle": 404.7324675389721,
        "gradeBand": "descent"
      },
      {
        "lat": 23.073499666666667,
        "lng": 120.67325766666667,
        "ele": 402.0833333333333,
        "distanceKm": 56.66790894882351,
        "gradePct": -2.443756527429138,
        "smoothedEle": 403.71973104431345,
        "gradeBand": "descent"
      },
      {
        "lat": 23.073118333333333,
        "lng": 120.67298633333333,
        "ele": 401.4166666666667,
        "distanceKm": 56.71858867884536,
        "gradePct": -2.2675917445699802,
        "smoothedEle": 402.72824338739287,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072737,
        "lng": 120.672715,
        "ele": 400.75,
        "distanceKm": 56.76926845196836,
        "gradePct": -2.219795141081701,
        "smoothedEle": 401.4922751063931,
        "gradeBand": "descent"
      },
      {
        "lat": 23.072242,
        "lng": 120.672438,
        "ele": 400.5,
        "distanceKm": 56.83117623725943,
        "gradePct": -2.303196599653428,
        "smoothedEle": 399.847370744786,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071777,
        "lng": 120.672045,
        "ele": 401.75,
        "distanceKm": 56.89667328684339,
        "gradePct": -2.2705706464202215,
        "smoothedEle": 398.6158502480481,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071554,
        "lng": 120.671715,
        "ele": 400.5,
        "distanceKm": 56.93856079196456,
        "gradePct": -1.8513701717898265,
        "smoothedEle": 398.53842710012333,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071418,
        "lng": 120.67108,
        "ele": 395.75,
        "distanceKm": 57.00525911799857,
        "gradePct": -0.5536296850212273,
        "smoothedEle": 399.428735306484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071154,
        "lng": 120.670471,
        "ele": 391.25,
        "distanceKm": 57.07413026324651,
        "gradePct": 0.8508869439573223,
        "smoothedEle": 400.7414935437354,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070799,
        "lng": 120.669954,
        "ele": 395.5,
        "distanceKm": 57.14012698407547,
        "gradePct": 1.9024879968602606,
        "smoothedEle": 402.36430907112987,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070523,
        "lng": 120.669664,
        "ele": 404.25,
        "distanceKm": 57.18281223762463,
        "gradePct": 2.507209464547621,
        "smoothedEle": 404.1435268986964,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07020624797639,
        "lng": 120.66947538750314,
        "ele": 408.4694955063823,
        "distanceKm": 57.222972575613575,
        "gradePct": 3.2377932376030394,
        "smoothedEle": 406.2419593701255,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069873,
        "lng": 120.669322,
        "ele": 411,
        "distanceKm": 57.263213709451215,
        "gradePct": 4.224275974977442,
        "smoothedEle": 408.98196421573886,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069352,
        "lng": 120.669252,
        "ele": 409.25,
        "distanceKm": 57.321587274385976,
        "gradePct": 5.955544444390001,
        "smoothedEle": 413.81951881349795,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069298,
        "lng": 120.669236,
        "ele": 409.25,
        "distanceKm": 57.32781091497622,
        "gradePct": 6.160646587043002,
        "smoothedEle": 414.3827582869149,
        "gradeBand": "steep"
      },
      {
        "lat": 23.06915,
        "lng": 120.668991,
        "ele": 413.25,
        "distanceKm": 57.3577949948499,
        "gradePct": 6.71788481135376,
        "smoothedEle": 416.5365213088799,
        "gradeBand": "steep"
      },
      {
        "lat": 23.069079,
        "lng": 120.668549,
        "ele": 421.5,
        "distanceKm": 57.40369700546487,
        "gradePct": 7.047714849010006,
        "smoothedEle": 419.33021422025246,
        "gradeBand": "steep"
      },
      {
        "lat": 23.068823,
        "lng": 120.668181,
        "ele": 426.5,
        "distanceKm": 57.45089500641978,
        "gradePct": 6.717860680370581,
        "smoothedEle": 421.57890935973643,
        "gradeBand": "steep"
      },
      {
        "lat": 23.068433,
        "lng": 120.667855,
        "ele": 430.25,
        "distanceKm": 57.505602430115275,
        "gradePct": 5.774787387367926,
        "smoothedEle": 424.04439195346777,
        "gradeBand": "hard"
      },
      {
        "lat": 23.068349,
        "lng": 120.667777,
        "ele": 431.25,
        "distanceKm": 57.517887308066335,
        "gradePct": 5.551372437232607,
        "smoothedEle": 424.6156387781921,
        "gradeBand": "hard"
      },
      {
        "lat": 23.068264,
        "lng": 120.667498,
        "ele": 436.5,
        "distanceKm": 57.54795424384464,
        "gradePct": 5.1025877344258515,
        "smoothedEle": 426.034833478515,
        "gradeBand": "hard"
      },
      {
        "lat": 23.068478,
        "lng": 120.666962,
        "ele": 427.25,
        "distanceKm": 57.60772957812572,
        "gradePct": 4.790560566754794,
        "smoothedEle": 429.10346269726404,
        "gradeBand": "hard"
      },
      {
        "lat": 23.068552,
        "lng": 120.666901,
        "ele": 426.25,
        "distanceKm": 57.61805678635829,
        "gradePct": 4.824098835994124,
        "smoothedEle": 429.66256734047533,
        "gradeBand": "hard"
      },
      {
        "lat": 23.068714,
        "lng": 120.666854,
        "ele": 425.5,
        "distanceKm": 57.63670106959457,
        "gradePct": 4.8596928389376775,
        "smoothedEle": 430.6220410416115,
        "gradeBand": "hard"
      },
      {
        "lat": 23.0691,
        "lng": 120.666876,
        "ele": 426.75,
        "distanceKm": 57.67968133951709,
        "gradePct": 4.545540674689582,
        "smoothedEle": 431.96729550606244,
        "gradeBand": "hard"
      },
      {
        "lat": 23.069487,
        "lng": 120.66679,
        "ele": 430.75,
        "distanceKm": 57.7236040162022,
        "gradePct": 3.7762942390425596,
        "smoothedEle": 432.4380625979806,
        "gradeBand": "hard"
      },
      {
        "lat": 23.06983,
        "lng": 120.66664,
        "ele": 434.25,
        "distanceKm": 57.76471526093217,
        "gradePct": 2.8177296884898224,
        "smoothedEle": 432.5307371740305,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070231,
        "lng": 120.666249,
        "ele": 434.5,
        "distanceKm": 57.824617007195336,
        "gradePct": 1.2672305958125027,
        "smoothedEle": 432.5346311788216,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07047,
        "lng": 120.66602,
        "ele": 440,
        "distanceKm": 57.86004436300956,
        "gradePct": 1.1346974441974973,
        "smoothedEle": 433.6220658152563,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070546,
        "lng": 120.665927,
        "ele": 442,
        "distanceKm": 57.87276970832252,
        "gradePct": 1.196752028748489,
        "smoothedEle": 434.14447000727944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070566,
        "lng": 120.665844,
        "ele": 441.25,
        "distanceKm": 57.88154717855106,
        "gradePct": 1.26384683276866,
        "smoothedEle": 434.51498739762565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070524,
        "lng": 120.665252,
        "ele": 432,
        "distanceKm": 57.942289785700325,
        "gradePct": 1.8133515809958878,
        "smoothedEle": 436.1068879525204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070606,
        "lng": 120.664769,
        "ele": 431,
        "distanceKm": 57.992535895086085,
        "gradePct": 1.4771591908031285,
        "smoothedEle": 435.4868640785839,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070693,
        "lng": 120.664431,
        "ele": 431.25,
        "distanceKm": 58.02844171818728,
        "gradePct": 1.0283949396588663,
        "smoothedEle": 434.70881969293447,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070934,
        "lng": 120.664027,
        "ele": 441.5,
        "distanceKm": 58.07769918080734,
        "gradePct": 0.018845009420516323,
        "smoothedEle": 434.3902445007246,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070943,
        "lng": 120.663639,
        "ele": 447,
        "distanceKm": 58.1174048696042,
        "gradePct": -0.7317005416160394,
        "smoothedEle": 433.9913200690621,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070673,
        "lng": 120.66334,
        "ele": 440.5,
        "distanceKm": 58.16026512913271,
        "gradePct": -1.368991224677595,
        "smoothedEle": 433.14709445736423,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070282,
        "lng": 120.66316,
        "ele": 426.25,
        "distanceKm": 58.207481257892624,
        "gradePct": -1.189637058157115,
        "smoothedEle": 432.78373843572626,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070166,
        "lng": 120.663031,
        "ele": 422,
        "distanceKm": 58.225934856542146,
        "gradePct": -1.0783356987079304,
        "smoothedEle": 432.6064695576465,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070135,
        "lng": 120.662957,
        "ele": 421,
        "distanceKm": 58.23425307061022,
        "gradePct": -1.0739735265032226,
        "smoothedEle": 432.5232874169656,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070135,
        "lng": 120.662865,
        "ele": 421.25,
        "distanceKm": 58.24366488690376,
        "gradePct": -1.090596903153069,
        "smoothedEle": 432.4291692540303,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0702,
        "lng": 120.662667,
        "ele": 424.25,
        "distanceKm": 58.265171612599495,
        "gradePct": -1.0768214847471842,
        "smoothedEle": 432.3176242278421,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07048,
        "lng": 120.662323,
        "ele": 433,
        "distanceKm": 58.31215925375083,
        "gradePct": -0.772865548913035,
        "smoothedEle": 432.4982918555439,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070769,
        "lng": 120.66187,
        "ele": 433,
        "distanceKm": 58.36855373315104,
        "gradePct": -0.5802768255718067,
        "smoothedEle": 431.9227550986641,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070899,
        "lng": 120.661624,
        "ele": 430.75,
        "distanceKm": 58.39757609456835,
        "gradePct": -0.7766827824911108,
        "smoothedEle": 431.30659895775517,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070949,
        "lng": 120.661015,
        "ele": 427,
        "distanceKm": 58.46012544271876,
        "gradePct": -1.048158229437589,
        "smoothedEle": 430.24747982134994,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070979,
        "lng": 120.660804,
        "ele": 426,
        "distanceKm": 58.481967346482996,
        "gradePct": -0.9132690506519778,
        "smoothedEle": 430.5556657760351,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071292,
        "lng": 120.660401,
        "ele": 434.5,
        "distanceKm": 58.53592133356887,
        "gradePct": -0.402252234703576,
        "smoothedEle": 431.451282259737,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07144,
        "lng": 120.660021,
        "ele": 440.5,
        "distanceKm": 58.578135766030236,
        "gradePct": -0.11001038565805588,
        "smoothedEle": 431.49930400284705,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071292,
        "lng": 120.660401,
        "ele": 434.5,
        "distanceKm": 58.6203501984916,
        "gradePct": 0.2629513130539996,
        "smoothedEle": 431.4468782321763,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070979,
        "lng": 120.660804,
        "ele": 426,
        "distanceKm": 58.674304185577476,
        "gradePct": 0.050441713715371594,
        "smoothedEle": 430.5484231634893,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07093,
        "lng": 120.661487,
        "ele": 430.25,
        "distanceKm": 58.74438838042875,
        "gradePct": -0.2509762317470141,
        "smoothedEle": 430.9589616289006,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070769,
        "lng": 120.66187,
        "ele": 433,
        "distanceKm": 58.78746614019168,
        "gradePct": 0.24964291762836055,
        "smoothedEle": 431.98700252003414,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.07048,
        "lng": 120.662323,
        "ele": 433,
        "distanceKm": 58.843860619591894,
        "gradePct": 0.7550911332030985,
        "smoothedEle": 432.5655591815269,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0702,
        "lng": 120.662667,
        "ele": 424.25,
        "distanceKm": 58.890848260743226,
        "gradePct": 0.8682683874105682,
        "smoothedEle": 432.38187164921203,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070135,
        "lng": 120.662865,
        "ele": 421.25,
        "distanceKm": 58.91235498643896,
        "gradePct": 0.8589108647033916,
        "smoothedEle": 432.4891384771985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070135,
        "lng": 120.662957,
        "ele": 421,
        "distanceKm": 58.9217668027325,
        "gradePct": 0.87840372652572,
        "smoothedEle": 432.5832566401339,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070166,
        "lng": 120.663031,
        "ele": 422,
        "distanceKm": 58.930085016800575,
        "gradePct": 0.8956316230740684,
        "smoothedEle": 432.66643878081464,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070282,
        "lng": 120.66316,
        "ele": 426.25,
        "distanceKm": 58.9485386154501,
        "gradePct": 0.9064159465901169,
        "smoothedEle": 432.870837932311,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070673,
        "lng": 120.66334,
        "ele": 440.5,
        "distanceKm": 58.99575474421001,
        "gradePct": 0.5432552207581616,
        "smoothedEle": 433.15854658754154,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070943,
        "lng": 120.663639,
        "ele": 447,
        "distanceKm": 59.03861500373852,
        "gradePct": 0.732472914885552,
        "smoothedEle": 433.9766897083131,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070934,
        "lng": 120.664027,
        "ele": 441.5,
        "distanceKm": 59.07832069253538,
        "gradePct": 0.9250603437448471,
        "smoothedEle": 434.2809660249658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070693,
        "lng": 120.664431,
        "ele": 431.25,
        "distanceKm": 59.12757815515544,
        "gradePct": 0.9787818880503354,
        "smoothedEle": 434.59893394046395,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070606,
        "lng": 120.664769,
        "ele": 431,
        "distanceKm": 59.163483978256636,
        "gradePct": 1.2032849229473583,
        "smoothedEle": 435.3684764521512,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070524,
        "lng": 120.665252,
        "ele": 432,
        "distanceKm": 59.213730087642396,
        "gradePct": 1.2385564236375723,
        "smoothedEle": 435.97878389870215,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070566,
        "lng": 120.665844,
        "ele": 441.25,
        "distanceKm": 59.27447269479166,
        "gradePct": 0.06618463422643023,
        "smoothedEle": 434.3838469602496,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.070231,
        "lng": 120.666249,
        "ele": 434.5,
        "distanceKm": 59.330188312724204,
        "gradePct": -1.065828938483306,
        "smoothedEle": 432.5232176082908,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06983,
        "lng": 120.66664,
        "ele": 434.25,
        "distanceKm": 59.39009005898737,
        "gradePct": -1.642764559059008,
        "smoothedEle": 432.4061144287993,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069487,
        "lng": 120.66679,
        "ele": 430.75,
        "distanceKm": 59.43120130371734,
        "gradePct": -1.6100684927814142,
        "smoothedEle": 432.29989992835596,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0691,
        "lng": 120.666876,
        "ele": 426.75,
        "distanceKm": 59.47512398040245,
        "gradePct": -1.263253416594903,
        "smoothedEle": 431.835590370548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068714,
        "lng": 120.666854,
        "ele": 425.5,
        "distanceKm": 59.51810425032497,
        "gradePct": -1.202076104511275,
        "smoothedEle": 430.52261402755676,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068552,
        "lng": 120.666901,
        "ele": 426.25,
        "distanceKm": 59.53674853356125,
        "gradePct": -1.4553354438468566,
        "smoothedEle": 429.59972200736064,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068478,
        "lng": 120.666962,
        "ele": 427.25,
        "distanceKm": 59.54707574179382,
        "gradePct": -1.7008394096712083,
        "smoothedEle": 429.0885251998486,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068285,
        "lng": 120.667369,
        "ele": 434.5,
        "distanceKm": 59.593918555735186,
        "gradePct": -2.8322470502781862,
        "smoothedEle": 426.73172907167327,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068264,
        "lng": 120.667498,
        "ele": 436.5,
        "distanceKm": 59.60732073426646,
        "gradePct": -3.1527595991091584,
        "smoothedEle": 426.05607827228664,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068264,
        "lng": 120.667584,
        "ele": 434.5,
        "distanceKm": 59.61611885881612,
        "gradePct": -3.3488547763564704,
        "smoothedEle": 425.64115719265783,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068306,
        "lng": 120.667691,
        "ele": 432.75,
        "distanceKm": 59.628019977004,
        "gradePct": -3.61315726332399,
        "smoothedEle": 425.0818046378274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068349,
        "lng": 120.667777,
        "ele": 431.25,
        "distanceKm": 59.63803339789827,
        "gradePct": -3.8082517736304764,
        "smoothedEle": 424.61117385579684,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068433,
        "lng": 120.667855,
        "ele": 430.25,
        "distanceKm": 59.65031827584933,
        "gradePct": -4.032014271561564,
        "smoothedEle": 424.033784592097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068747,
        "lng": 120.66811,
        "ele": 427.5,
        "distanceKm": 59.69390299149013,
        "gradePct": -4.618056329179032,
        "smoothedEle": 422.0258099025801,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06899,
        "lng": 120.668378,
        "ele": 424,
        "distanceKm": 59.73239727614155,
        "gradePct": -4.77358954300259,
        "smoothedEle": 420.2679301636308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069122,
        "lng": 120.668817,
        "ele": 416.5,
        "distanceKm": 59.77964600707717,
        "gradePct": -4.889899540304997,
        "smoothedEle": 417.67002279092185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069225,
        "lng": 120.66915,
        "ele": 410.75,
        "distanceKm": 59.81558663614449,
        "gradePct": -5.196346819104247,
        "smoothedEle": 415.27356326794745,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069298,
        "lng": 120.669236,
        "ele": 409.25,
        "distanceKm": 59.827557243765554,
        "gradePct": -5.397122479159444,
        "smoothedEle": 414.3093081417155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069352,
        "lng": 120.669252,
        "ele": 409.25,
        "distanceKm": 59.8337808843558,
        "gradePct": -5.520039380816747,
        "smoothedEle": 413.7709632306595,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069766,
        "lng": 120.669301,
        "ele": 410.75,
        "distanceKm": 59.880087773215436,
        "gradePct": -6.410036638576082,
        "smoothedEle": 409.84221223890563,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070301,
        "lng": 120.669519,
        "ele": 407.75,
        "distanceKm": 59.94362013464352,
        "gradePct": -7.041749850345027,
        "smoothedEle": 405.56735681317724,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07062,
        "lng": 120.669766,
        "ele": 401.25,
        "distanceKm": 59.98717138415693,
        "gradePct": -6.8927890761167285,
        "smoothedEle": 403.3826653979025,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070901727638535,
        "lng": 120.67010360616655,
        "ele": 394.2701620738681,
        "distanceKm": 60.03379991189399,
        "gradePct": -6.153296005301823,
        "smoothedEle": 401.4627568930864,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071154,
        "lng": 120.670471,
        "ele": 391.25,
        "distanceKm": 60.080698910568586,
        "gradePct": -4.855823277496926,
        "smoothedEle": 400.0894445328755,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071345,
        "lng": 120.670865,
        "ele": 393,
        "distanceKm": 60.12625877460623,
        "gradePct": -3.983839674208895,
        "smoothedEle": 398.7678585693993,
        "gradeBand": "descent"
      },
      {
        "lat": 23.07144804176691,
        "lng": 120.671290776913,
        "ele": 397.20363388268476,
        "distanceKm": 60.17129810981601,
        "gradePct": -3.487490683280562,
        "smoothedEle": 397.2039460576292,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071554,
        "lng": 120.671715,
        "ele": 400.5,
        "distanceKm": 60.216267576581856,
        "gradePct": -3.2664569861658594,
        "smoothedEle": 395.65172888431914,
        "gradeBand": "descent"
      },
      {
        "lat": 23.071206,
        "lng": 120.6721335,
        "ele": 398.625,
        "distanceKm": 60.27397664430287,
        "gradePct": -3.0112479179744156,
        "smoothedEle": 394.263792374025,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070858,
        "lng": 120.672552,
        "ele": 396.75,
        "distanceKm": 60.331685794194826,
        "gradePct": -2.6427300989656057,
        "smoothedEle": 393.293954563479,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070464,
        "lng": 120.672565,
        "ele": 394,
        "distanceKm": 60.37551683680917,
        "gradePct": -2.3374757023119863,
        "smoothedEle": 392.38337628215845,
        "gradeBand": "descent"
      },
      {
        "lat": 23.070045333333333,
        "lng": 120.67269083333333,
        "ele": 391.41666666666663,
        "distanceKm": 60.42381755666994,
        "gradePct": -2.3085615720471777,
        "smoothedEle": 390.85302434530604,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069626666666668,
        "lng": 120.67281666666668,
        "ele": 388.8333333333332,
        "distanceKm": 60.47211828720852,
        "gradePct": -2.7847116900944004,
        "smoothedEle": 388.7390635585255,
        "gradeBand": "descent"
      },
      {
        "lat": 23.069208,
        "lng": 120.6729425,
        "ele": 386.24999999999983,
        "distanceKm": 60.52041902842473,
        "gradePct": -3.52012959569101,
        "smoothedEle": 386.4430403107567,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06878933333333,
        "lng": 120.67306833333333,
        "ele": 383.6666666666668,
        "distanceKm": 60.56871978031844,
        "gradePct": -4.258469620686181,
        "smoothedEle": 384.0076440860262,
        "gradeBand": "descent"
      },
      {
        "lat": 23.068370666666667,
        "lng": 120.67319416666668,
        "ele": 381.08333333333337,
        "distanceKm": 60.61702054288949,
        "gradePct": -4.851748731992603,
        "smoothedEle": 381.3648823301361,
        "gradeBand": "descent"
      },
      {
        "lat": 23.067952,
        "lng": 120.67332,
        "ele": 378.5,
        "distanceKm": 60.66532131613773,
        "gradePct": -5.164006392879783,
        "smoothedEle": 378.7085313730035,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06733,
        "lng": 120.673414,
        "ele": 375.75,
        "distanceKm": 60.73515001058609,
        "gradePct": -5.512374859876253,
        "smoothedEle": 374.675532415701,
        "gradeBand": "descent"
      },
      {
        "lat": 23.067071,
        "lng": 120.673331,
        "ele": 375.75,
        "distanceKm": 60.76517524209438,
        "gradePct": -5.707415338064525,
        "smoothedEle": 372.77153433391675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066638,
        "lng": 120.673024,
        "ele": 370,
        "distanceKm": 60.82266102643739,
        "gradePct": -5.813793596083857,
        "smoothedEle": 369.427090914236,
        "gradeBand": "descent"
      },
      {
        "lat": 23.066225,
        "lng": 120.672685,
        "ele": 365.75,
        "distanceKm": 60.8802090689957,
        "gradePct": -5.655421202815977,
        "smoothedEle": 366.5378376952392,
        "gradeBand": "descent"
      },
      {
        "lat": 23.065795,
        "lng": 120.672212,
        "ele": 362,
        "distanceKm": 60.948237060480366,
        "gradePct": -5.558841553183419,
        "smoothedEle": 362.72795669425017,
        "gradeBand": "descent"
      },
      {
        "lat": 23.065359,
        "lng": 120.671941,
        "ele": 355.5,
        "distanceKm": 61.00408579783036,
        "gradePct": -5.703414349367709,
        "smoothedEle": 359.1009433229052,
        "gradeBand": "descent"
      },
      {
        "lat": 23.065056,
        "lng": 120.672015,
        "ele": 355.75,
        "distanceKm": 61.03861800004968,
        "gradePct": -5.910850733918297,
        "smoothedEle": 356.8042546844646,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0648125,
        "lng": 120.672319,
        "ele": 356.50000000000006,
        "distanceKm": 61.079853777724324,
        "gradePct": -6.033198585991471,
        "smoothedEle": 354.4892782533312,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064569,
        "lng": 120.672623,
        "ele": 357.25,
        "distanceKm": 61.12108959784831,
        "gradePct": -5.871896890835332,
        "smoothedEle": 352.50454591742294,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064279,
        "lng": 120.67278,
        "ele": 352.5,
        "distanceKm": 61.15711506355054,
        "gradePct": -5.645520460548232,
        "smoothedEle": 350.86034703813345,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064129,
        "lng": 120.672812,
        "ele": 349.5,
        "distanceKm": 61.1741125832654,
        "gradePct": -5.447438372171981,
        "smoothedEle": 350.1526325202052,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064062,
        "lng": 120.672788,
        "ele": 348,
        "distanceKm": 61.18195684065194,
        "gradePct": -5.347394573902572,
        "smoothedEle": 349.8432864611366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063993,
        "lng": 120.672751,
        "ele": 346.5,
        "distanceKm": 61.19051228289978,
        "gradePct": -5.247109750008871,
        "smoothedEle": 349.48823560785127,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063939,
        "lng": 120.672684,
        "ele": 345.25,
        "distanceKm": 61.19962488884806,
        "gradePct": -5.140293988033973,
        "smoothedEle": 349.1100624609979,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063861,
        "lng": 120.672257,
        "ele": 342,
        "distanceKm": 61.24416268307523,
        "gradePct": -4.49860794751438,
        "smoothedEle": 347.4957603015283,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064185,
        "lng": 120.671855,
        "ele": 343,
        "distanceKm": 61.29883830566084,
        "gradePct": -3.681366252788881,
        "smoothedEle": 346.2127963336698,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064246,
        "lng": 120.671774,
        "ele": 342.75,
        "distanceKm": 61.30954716634582,
        "gradePct": -3.552390513883217,
        "smoothedEle": 345.95531676104196,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064272,
        "lng": 120.671721,
        "ele": 342.5,
        "distanceKm": 61.31569201920113,
        "gradePct": -3.4828576060276153,
        "smoothedEle": 345.7986230132316,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064274,
        "lng": 120.671652,
        "ele": 342,
        "distanceKm": 61.32275469117531,
        "gradePct": -3.405013168048734,
        "smoothedEle": 345.61852487788997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064248,
        "lng": 120.671581,
        "ele": 342.75,
        "distanceKm": 61.33057267406585,
        "gradePct": -3.329484262983537,
        "smoothedEle": 345.41277068139226,
        "gradeBand": "descent"
      },
      {
        "lat": 23.064084,
        "lng": 120.671394,
        "ele": 344.5,
        "distanceKm": 61.35700298749988,
        "gradePct": -3.2334201786280907,
        "smoothedEle": 344.39862182132856,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063764,
        "lng": 120.671399,
        "ele": 342.75,
        "distanceKm": 61.392589089918474,
        "gradePct": -3.2392459631021033,
        "smoothedEle": 342.92355619037136,
        "gradeBand": "descent"
      },
      {
        "lat": 23.063107,
        "lng": 120.671294,
        "ele": 341.25,
        "distanceKm": 61.46642982492763,
        "gradePct": -3.329341304784985,
        "smoothedEle": 340.3145790113243,
        "gradeBand": "descent"
      },
      {
        "lat": 23.062587,
        "lng": 120.670973,
        "ele": 344.25,
        "distanceKm": 61.53292673815909,
        "gradePct": -3.2430610206633155,
        "smoothedEle": 338.8363216213325,
        "gradeBand": "descent"
      },
      {
        "lat": 23.062417,
        "lng": 120.67091,
        "ele": 343.75,
        "distanceKm": 61.55289854213619,
        "gradePct": -3.0583650632757573,
        "smoothedEle": 338.43938201728764,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0619285,
        "lng": 120.670918,
        "ele": 337.5,
        "distanceKm": 61.60722350474926,
        "gradePct": -2.4213485477425194,
        "smoothedEle": 337.5637887499407,
        "gradeBand": "descent"
      },
      {
        "lat": 23.06144,
        "lng": 120.670926,
        "ele": 331.25,
        "distanceKm": 61.66154846740708,
        "gradePct": -1.7466519383014294,
        "smoothedEle": 336.9937456602696,
        "gradeBand": "descent"
      },
      {
        "lat": 23.061097,
        "lng": 120.670804,
        "ele": 330.75,
        "distanceKm": 61.70167882990353,
        "gradePct": -1.339312712026763,
        "smoothedEle": 336.8523517693322,
        "gradeBand": "descent"
      },
      {
        "lat": 23.060796,
        "lng": 120.670555,
        "ele": 330.75,
        "distanceKm": 61.743740677219805,
        "gradePct": -0.8214286356099076,
        "smoothedEle": 336.97853731128106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.060510999999998,
        "lng": 120.6702375,
        "ele": 333.0625,
        "distanceKm": 61.78912192687381,
        "gradePct": -0.374342450197668,
        "smoothedEle": 337.10685959043724,
        "gradeBand": "descent"
      },
      {
        "lat": 23.060226,
        "lng": 120.66991999999999,
        "ele": 335.375,
        "distanceKm": 61.83450322576566,
        "gradePct": -0.034101542407938244,
        "smoothedEle": 337.20933389995565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.059941000000002,
        "lng": 120.6696025,
        "ele": 337.6875,
        "distanceKm": 61.87988457389301,
        "gradePct": 0.32400269190420766,
        "smoothedEle": 337.57714625908716,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059656,
        "lng": 120.669285,
        "ele": 340,
        "distanceKm": 61.925265971256664,
        "gradePct": 0.7140213659033533,
        "smoothedEle": 338.3511559251983,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0593345,
        "lng": 120.6689695,
        "ele": 342.7500000000002,
        "distanceKm": 61.97343169387708,
        "gradePct": 1.0184675147948918,
        "smoothedEle": 339.099428136645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.059013,
        "lng": 120.668654,
        "ele": 345.5,
        "distanceKm": 62.021597468169865,
        "gradePct": 1.195530312964746,
        "smoothedEle": 339.57125237634926,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.058725,
        "lng": 120.668426,
        "ele": 344.5,
        "distanceKm": 62.06121680756513,
        "gradePct": 0.9414644067564532,
        "smoothedEle": 339.3087742528557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05843,
        "lng": 120.668227,
        "ele": 341.75,
        "distanceKm": 62.09982423430451,
        "gradePct": 0.4717563421366653,
        "smoothedEle": 338.86074300410024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05809,
        "lng": 120.6680035,
        "ele": 340.625,
        "distanceKm": 62.14400793574735,
        "gradePct": -0.25121854751753503,
        "smoothedEle": 338.1398821399472,
        "gradeBand": "descent"
      },
      {
        "lat": 23.05775,
        "lng": 120.66778,
        "ele": 339.5,
        "distanceKm": 62.18819166708342,
        "gradePct": -1.0304402277353542,
        "smoothedEle": 337.18313402362156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.057372,
        "lng": 120.667616,
        "ele": 336,
        "distanceKm": 62.233448790095885,
        "gradePct": -1.7342078216407837,
        "smoothedEle": 336.0243217253078,
        "gradeBand": "descent"
      },
      {
        "lat": 23.056711,
        "lng": 120.667486,
        "ele": 329.75,
        "distanceKm": 62.30814248671572,
        "gradePct": -2.1944609143990563,
        "smoothedEle": 334.336108176491,
        "gradeBand": "descent"
      },
      {
        "lat": 23.056322333333334,
        "lng": 120.667412,
        "ele": 329.3333333333333,
        "distanceKm": 62.35201847366749,
        "gradePct": -2.139026652359119,
        "smoothedEle": 333.68836980779736,
        "gradeBand": "descent"
      },
      {
        "lat": 23.055933666666665,
        "lng": 120.667338,
        "ele": 328.9166666666667,
        "distanceKm": 62.39589446439181,
        "gradePct": -1.8304288919117961,
        "smoothedEle": 333.32504549117266,
        "gradeBand": "descent"
      },
      {
        "lat": 23.055545,
        "lng": 120.667264,
        "ele": 328.5,
        "distanceKm": 62.43977045888784,
        "gradePct": -1.340338607242027,
        "smoothedEle": 333.20076328538335,
        "gradeBand": "descent"
      },
      {
        "lat": 23.054928,
        "lng": 120.667131,
        "ele": 332.5,
        "distanceKm": 62.50971429695832,
        "gradePct": -0.25334090519183045,
        "smoothedEle": 333.8062218327584,
        "gradeBand": "descent"
      },
      {
        "lat": 23.054531,
        "lng": 120.667053,
        "ele": 335.25,
        "distanceKm": 62.55457430720012,
        "gradePct": 0.701945154045849,
        "smoothedEle": 335.07109600184134,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.054098,
        "lng": 120.66715,
        "ele": 336.25,
        "distanceKm": 62.60373399025038,
        "gradePct": 1.7965043986404823,
        "smoothedEle": 336.8958482147855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0537855,
        "lng": 120.66735800000001,
        "ele": 337.7500000000001,
        "distanceKm": 62.64448145335352,
        "gradePct": 2.6498816812536083,
        "smoothedEle": 338.5413066786205,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.053473,
        "lng": 120.667566,
        "ele": 339.25,
        "distanceKm": 62.68522894225559,
        "gradePct": 3.3335150062465098,
        "smoothedEle": 340.2612979734131,
        "gradeBand": "hard"
      },
      {
        "lat": 23.052902,
        "lng": 120.667625,
        "ele": 342.75,
        "distanceKm": 62.749007655138314,
        "gradePct": 3.8620658231669456,
        "smoothedEle": 342.6382701628047,
        "gradeBand": "hard"
      },
      {
        "lat": 23.052334,
        "lng": 120.667542,
        "ele": 347.75,
        "distanceKm": 62.81273482508399,
        "gradePct": 3.5002940809007512,
        "smoothedEle": 344.259906853781,
        "gradeBand": "hard"
      },
      {
        "lat": 23.051818,
        "lng": 120.667432,
        "ele": 349.25,
        "distanceKm": 62.87120491224848,
        "gradePct": 2.713762733013955,
        "smoothedEle": 345.096855438956,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.051463,
        "lng": 120.667407,
        "ele": 350,
        "distanceKm": 62.910761954516175,
        "gradePct": 2.043900123745913,
        "smoothedEle": 345.30068939155774,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.051164,
        "lng": 120.667548,
        "ele": 349,
        "distanceKm": 62.947004375570344,
        "gradePct": 1.3093712635339712,
        "smoothedEle": 345.1823523587775,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.05088,
        "lng": 120.667869,
        "ele": 348.25,
        "distanceKm": 62.992567173268895,
        "gradePct": 0.47443350723980193,
        "smoothedEle": 344.69557668435806,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.050565,
        "lng": 120.668262,
        "ele": 345.75,
        "distanceKm": 63.04589396258455,
        "gradePct": -0.49132364898306247,
        "smoothedEle": 343.75190384937713,
        "gradeBand": "descent"
      },
      {
        "lat": 23.050152,
        "lng": 120.668635,
        "ele": 342.3750000000002,
        "distanceKm": 63.10560572317677,
        "gradePct": -1.5692022476976948,
        "smoothedEle": 342.13571529049443,
        "gradeBand": "descent"
      },
      {
        "lat": 23.049739,
        "lng": 120.669008,
        "ele": 339,
        "distanceKm": 63.16531755858599,
        "gradePct": -2.3670743728161145,
        "smoothedEle": 340.25255250163565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.04961,
        "lng": 120.669134,
        "ele": 336.5,
        "distanceKm": 63.18460382795889,
        "gradePct": -2.5787073667502427,
        "smoothedEle": 339.62323931615805,
        "gradeBand": "descent"
      },
      {
        "lat": 23.049428,
        "lng": 120.66914,
        "ele": 336,
        "distanceKm": 63.20485064192419,
        "gradePct": -2.754751110867904,
        "smoothedEle": 338.9687057472337,
        "gradeBand": "descent"
      },
      {
        "lat": 23.04899787340683,
        "lng": 120.66899567204156,
        "ele": 335.50840250376683,
        "distanceKm": 63.25490650584674,
        "gradePct": -3.067926031053061,
        "smoothedEle": 337.3721137562647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.048575061172357,
        "lng": 120.66881856003464,
        "ele": 334.8403354198057,
        "distanceKm": 63.3052927918134,
        "gradePct": -3.1217292710579,
        "smoothedEle": 335.90072670612534,
        "gradeBand": "descent"
      },
      {
        "lat": 23.048152248937885,
        "lng": 120.66864144802771,
        "ele": 334.1722683358446,
        "distanceKm": 63.35567909824421,
        "gradePct": -2.9589864038820655,
        "smoothedEle": 334.63855276274705,
        "gradeBand": "descent"
      },
      {
        "lat": 23.047729436703413,
        "lng": 120.66846433602078,
        "ele": 333.5042012518834,
        "distanceKm": 63.40606542513939,
        "gradePct": -2.667550581210454,
        "smoothedEle": 333.5948576129265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.047306624468945,
        "lng": 120.66828722401385,
        "ele": 332.83613416792224,
        "distanceKm": 63.456451772497225,
        "gradePct": -2.2301002627256388,
        "smoothedEle": 332.8667881477692,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046883812234473,
        "lng": 120.66811011200693,
        "ele": 332.16806708396115,
        "distanceKm": 63.50683814031868,
        "gradePct": -1.8244685630928668,
        "smoothedEle": 332.2130786928958,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046461,
        "lng": 120.667933,
        "ele": 331.5,
        "distanceKm": 63.55722452860308,
        "gradePct": -1.411007937110989,
        "smoothedEle": 331.78452506568885,
        "gradeBand": "descent"
      },
      {
        "lat": 23.046113,
        "lng": 120.667815,
        "ele": 331,
        "distanceKm": 63.59776030027707,
        "gradePct": -1.0337635423612563,
        "smoothedEle": 331.6993616936328,
        "gradeBand": "descent"
      },
      {
        "lat": 23.045509,
        "lng": 120.667713,
        "ele": 330.25,
        "distanceKm": 63.66572820773943,
        "gradePct": -0.27996505921279496,
        "smoothedEle": 332.1865061626079,
        "gradeBand": "descent"
      },
      {
        "lat": 23.044965,
        "lng": 120.667456,
        "ele": 329.25,
        "distanceKm": 63.731687017180185,
        "gradePct": 0.5111245913319847,
        "smoothedEle": 333.023979599297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.044519,
        "lng": 120.667311,
        "ele": 330.5,
        "distanceKm": 63.78345179377075,
        "gradePct": 1.0046212223526396,
        "smoothedEle": 333.73866550420934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.044306,
        "lng": 120.667317,
        "ele": 332.25,
        "distanceKm": 63.807144301436345,
        "gradePct": 1.1607902647575208,
        "smoothedEle": 334.0881999103751,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0438675,
        "lng": 120.667524,
        "ele": 335.8749999999998,
        "distanceKm": 63.86030505444457,
        "gradePct": 1.3721032601344607,
        "smoothedEle": 334.8918434689988,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.043429,
        "lng": 120.667731,
        "ele": 339.5,
        "distanceKm": 63.913465834926576,
        "gradePct": 1.4853955758981174,
        "smoothedEle": 335.76341793784735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.042973666666665,
        "lng": 120.667585,
        "ele": 339.25,
        "distanceKm": 63.96625464304305,
        "gradePct": 1.5973436024741887,
        "smoothedEle": 336.6959217369939,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.042518333333334,
        "lng": 120.667439,
        "ele": 339,
        "distanceKm": 64.01904346545052,
        "gradePct": 1.712897756261985,
        "smoothedEle": 337.69387787323836,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.042063,
        "lng": 120.667293,
        "ele": 338.75,
        "distanceKm": 64.07183230214953,
        "gradePct": 1.7795332788511788,
        "smoothedEle": 338.6399000058671,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.041515,
        "lng": 120.667076,
        "ele": 338.75,
        "distanceKm": 64.13668669911411,
        "gradePct": 1.660447286513294,
        "smoothedEle": 339.4945044596401,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0410895,
        "lng": 120.6669285,
        "ele": 338.75,
        "distanceKm": 64.1863491738832,
        "gradePct": 1.393665560937572,
        "smoothedEle": 339.8631336639776,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.040664,
        "lng": 120.666781,
        "ele": 338.75,
        "distanceKm": 64.23601166313992,
        "gradePct": 1.1529332520858993,
        "smoothedEle": 340.3038293235611,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.04026378386431,
        "lng": 120.66663963649032,
        "ele": 339.97750588628406,
        "distanceKm": 64.28280557569333,
        "gradePct": 1.0045597395257886,
        "smoothedEle": 340.7936173669732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03986351850499,
        "lng": 120.66649843763538,
        "ele": 341.20206065895053,
        "distanceKm": 64.329599502038,
        "gradePct": 0.9812664902266736,
        "smoothedEle": 341.3636474701069,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.039463259252493,
        "lng": 120.6663572188177,
        "ele": 342.35103032947535,
        "distanceKm": 64.37639342652689,
        "gradePct": 1.073818338377477,
        "smoothedEle": 341.9368719044664,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.039063,
        "lng": 120.666216,
        "ele": 343.5,
        "distanceKm": 64.42318736427305,
        "gradePct": 1.1260763816613757,
        "smoothedEle": 342.44218165254364,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03869,
        "lng": 120.666062,
        "ele": 343.75,
        "distanceKm": 64.46755582819785,
        "gradePct": 1.113369584557388,
        "smoothedEle": 342.8607386802436,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.03821501308213,
        "lng": 120.66587815845799,
        "ele": 344.4024590742385,
        "distanceKm": 64.52362219531052,
        "gradePct": 0.9912210362574997,
        "smoothedEle": 343.27327571748515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.037737,
        "lng": 120.665703,
        "ele": 345.25,
        "distanceKm": 64.57971549449064,
        "gradePct": 0.7531680504115633,
        "smoothedEle": 343.4790817403653,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.037324,
        "lng": 120.665628,
        "ele": 344.5,
        "distanceKm": 64.62627591323499,
        "gradePct": 0.4657418914307745,
        "smoothedEle": 343.40280175789786,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.036926666666666,
        "lng": 120.665569,
        "ele": 343.8333333333333,
        "distanceKm": 64.67086801130576,
        "gradePct": 0.07694779896428264,
        "smoothedEle": 343.03900536330764,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.036529333333334,
        "lng": 120.66551,
        "ele": 343.1666666666667,
        "distanceKm": 64.71546011178674,
        "gradePct": -0.3781677218052781,
        "smoothedEle": 342.4568835602328,
        "gradeBand": "descent"
      },
      {
        "lat": 23.036132,
        "lng": 120.665451,
        "ele": 342.5,
        "distanceKm": 64.76005221467831,
        "gradePct": -0.8468320406847333,
        "smoothedEle": 341.71327318765776,
        "gradeBand": "descent"
      },
      {
        "lat": 23.035693882500137,
        "lng": 120.66531594067509,
        "ele": 342.27901981995467,
        "distanceKm": 64.81069115056563,
        "gradePct": -1.384474095182165,
        "smoothedEle": 340.65938610042815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.035261,
        "lng": 120.665161,
        "ele": 340.75,
        "distanceKm": 64.86136952838025,
        "gradePct": -1.8636170626033126,
        "smoothedEle": 339.38926285638934,
        "gradeBand": "descent"
      },
      {
        "lat": 23.034908,
        "lng": 120.665007,
        "ele": 338.5,
        "distanceKm": 64.90366662363023,
        "gradePct": -2.171411544263063,
        "smoothedEle": 338.2680170361241,
        "gradeBand": "descent"
      },
      {
        "lat": 23.034521308621027,
        "lng": 120.66472401643189,
        "ele": 336.7416478475463,
        "distanceKm": 64.95550657229961,
        "gradePct": -2.4750715040881848,
        "smoothedEle": 336.83893254365864,
        "gradeBand": "descent"
      },
      {
        "lat": 23.034139,
        "lng": 120.664434,
        "ele": 335,
        "distanceKm": 65.00735163695029,
        "gradePct": -2.7021163269422646,
        "smoothedEle": 335.32465471498784,
        "gradeBand": "descent"
      },
      {
        "lat": 23.033827,
        "lng": 120.664292,
        "ele": 333.75,
        "distanceKm": 65.0449646672603,
        "gradePct": -2.853556313821985,
        "smoothedEle": 334.0932958952443,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0334055,
        "lng": 120.6642075,
        "ele": 332.375,
        "distanceKm": 65.09262435962476,
        "gradePct": -3.0443567927438973,
        "smoothedEle": 332.4720207705662,
        "gradeBand": "descent"
      },
      {
        "lat": 23.032984,
        "lng": 120.664123,
        "ele": 331,
        "distanceKm": 65.14028405689645,
        "gradePct": -3.159327383453911,
        "smoothedEle": 330.93992056686466,
        "gradeBand": "descent"
      },
      {
        "lat": 23.032556479851078,
        "lng": 120.66396220070966,
        "ele": 329.56522332492744,
        "distanceKm": 65.19058944440259,
        "gradePct": -3.1657654273653697,
        "smoothedEle": 329.4827098354298,
        "gradeBand": "descent"
      },
      {
        "lat": 23.032137,
        "lng": 120.663775,
        "ele": 328,
        "distanceKm": 65.24101405319149,
        "gradePct": -3.045885333016528,
        "smoothedEle": 328.1308586925599,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0317,
        "lng": 120.663661,
        "ele": 325.5,
        "distanceKm": 65.29098701744978,
        "gradePct": -2.848880327497073,
        "smoothedEle": 326.8299587994534,
        "gradeBand": "descent"
      },
      {
        "lat": 23.031268904835553,
        "lng": 120.66357086660243,
        "ele": 324.72742802070144,
        "distanceKm": 65.33980198125111,
        "gradePct": -2.7102594568766745,
        "smoothedEle": 325.534898776188,
        "gradeBand": "descent"
      },
      {
        "lat": 23.03083779208966,
        "lng": 120.66348083351387,
        "ele": 323.9645158919739,
        "distanceKm": 65.3886169319726,
        "gradePct": -2.655696340530388,
        "smoothedEle": 324.2284554932897,
        "gradeBand": "descent"
      },
      {
        "lat": 23.030406396044828,
        "lng": 120.66339241675693,
        "ele": 323.3572579459869,
        "distanceKm": 65.43743189587175,
        "gradePct": -2.6223268908435013,
        "smoothedEle": 322.9822402313828,
        "gradeBand": "descent"
      },
      {
        "lat": 23.029975,
        "lng": 120.663304,
        "ele": 322.75,
        "distanceKm": 65.48624686513823,
        "gradePct": -2.5968636780250365,
        "smoothedEle": 321.7596274381563,
        "gradeBand": "descent"
      },
      {
        "lat": 23.029448,
        "lng": 120.663239,
        "ele": 320.5,
        "distanceKm": 65.54522297769924,
        "gradePct": -2.501710292428861,
        "smoothedEle": 320.386395090936,
        "gradeBand": "descent"
      },
      {
        "lat": 23.028914,
        "lng": 120.663282,
        "ele": 318.5,
        "distanceKm": 65.60476397530121,
        "gradePct": -2.284512679755831,
        "smoothedEle": 319.24720629453986,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0285207246864,
        "lng": 120.66335375825574,
        "ele": 317.9531656986698,
        "distanceKm": 65.64910652143418,
        "gradePct": -1.944602528223158,
        "smoothedEle": 318.80063415977185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0281293623432,
        "lng": 120.66343787912787,
        "ele": 316.8515828493351,
        "distanceKm": 65.69346735788687,
        "gradePct": -1.342102218845421,
        "smoothedEle": 318.90729706312004,
        "gradeBand": "descent"
      },
      {
        "lat": 23.027738,
        "lng": 120.663522,
        "ele": 315.75,
        "distanceKm": 65.73782819919005,
        "gradePct": -0.7952259984584089,
        "smoothedEle": 318.9681271971821,
        "gradeBand": "descent"
      },
      {
        "lat": 23.02738,
        "lng": 120.663587,
        "ele": 314.75,
        "distanceKm": 65.77818795483994,
        "gradePct": -0.4728164120459088,
        "smoothedEle": 318.81004840337863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.026953,
        "lng": 120.66378,
        "ele": 315.25,
        "distanceKm": 65.82961233801036,
        "gradePct": -0.21142385439298703,
        "smoothedEle": 318.5741116480331,
        "gradeBand": "descent"
      },
      {
        "lat": 23.026644,
        "lng": 120.664004,
        "ele": 318.5,
        "distanceKm": 65.87091643866843,
        "gradePct": -0.1286363217917294,
        "smoothedEle": 318.59580212101037,
        "gradeBand": "descent"
      },
      {
        "lat": 23.026244,
        "lng": 120.66418,
        "ele": 324.75,
        "distanceKm": 65.91890282727073,
        "gradePct": -0.09015050103553662,
        "smoothedEle": 318.7618746378996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.025935,
        "lng": 120.664106,
        "ele": 324.75,
        "distanceKm": 65.95408674648971,
        "gradePct": 0.05497419158731908,
        "smoothedEle": 319.014395027669,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.025664,
        "lng": 120.663841,
        "ele": 321.25,
        "distanceKm": 65.99462676111517,
        "gradePct": 0.3602538525904555,
        "smoothedEle": 319.45513432661073,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.025393,
        "lng": 120.663576,
        "ele": 317.75,
        "distanceKm": 66.03516681220775,
        "gradePct": 0.6573514834912166,
        "smoothedEle": 319.89173149664623,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.024965,
        "lng": 120.663397,
        "ele": 318.5,
        "distanceKm": 66.0861619890779,
        "gradePct": 0.7425925144261961,
        "smoothedEle": 320.13374933934205,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.0246,
        "lng": 120.663401,
        "ele": 319.25,
        "distanceKm": 66.12675025762265,
        "gradePct": 0.5311089008081846,
        "smoothedEle": 319.8804146519114,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.024276,
        "lng": 120.663425,
        "ele": 320.25,
        "distanceKm": 66.162861086309,
        "gradePct": 0.0137395357726289,
        "smoothedEle": 319.1372661807504,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.023734,
        "lng": 120.663723,
        "ele": 321.5,
        "distanceKm": 66.23040543434594,
        "gradePct": -1.3503330478263627,
        "smoothedEle": 317.13978761411573,
        "gradeBand": "descent"
      },
      {
        "lat": 23.023433,
        "lng": 120.663977,
        "ele": 320.25,
        "distanceKm": 66.27278347973783,
        "gradePct": -1.993805332842925,
        "smoothedEle": 316.08264565004697,
        "gradeBand": "descent"
      },
      {
        "lat": 23.023041,
        "lng": 120.664102,
        "ele": 316.75,
        "distanceKm": 66.31821030491855,
        "gradePct": -2.408176967523866,
        "smoothedEle": 315.11736346483815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.022726,
        "lng": 120.664124,
        "ele": 314.25,
        "distanceKm": 66.3533090400472,
        "gradePct": -2.5518894318808725,
        "smoothedEle": 314.2300651534479,
        "gradeBand": "descent"
      },
      {
        "lat": 23.022242,
        "lng": 120.66409,
        "ele": 311,
        "distanceKm": 66.40723982162172,
        "gradePct": -2.504298648786367,
        "smoothedEle": 312.81626340177417,
        "gradeBand": "descent"
      },
      {
        "lat": 23.021582,
        "lng": 120.664084,
        "ele": 308.5,
        "distanceKm": 66.48063114330094,
        "gradePct": -2.421751054626918,
        "smoothedEle": 311.07238722879356,
        "gradeBand": "descent"
      },
      {
        "lat": 23.021052,
        "lng": 120.664091,
        "ele": 307.25,
        "distanceKm": 66.53956888968652,
        "gradePct": -2.260790551552414,
        "smoothedEle": 310.05583594688835,
        "gradeBand": "descent"
      },
      {
        "lat": 23.020417,
        "lng": 120.664214,
        "ele": 305.5,
        "distanceKm": 66.61129103555315,
        "gradePct": -1.3031051669875453,
        "smoothedEle": 310.1137907947533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.019983333333332,
        "lng": 120.66436433333334,
        "ele": 307.66666666666686,
        "distanceKm": 66.66190749262134,
        "gradePct": -0.5207249138128912,
        "smoothedEle": 310.4758364375155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.019549666666666,
        "lng": 120.66451466666666,
        "ele": 309.83333333333314,
        "distanceKm": 66.71252396472812,
        "gradePct": 0.06493454509072102,
        "smoothedEle": 310.6521727054403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.019116,
        "lng": 120.664665,
        "ele": 312,
        "distanceKm": 66.76314045187414,
        "gradePct": 0.27393215940412186,
        "smoothedEle": 310.6227471902415,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.018751,
        "lng": 120.664803,
        "ele": 316,
        "distanceKm": 66.80611371929642,
        "gradePct": 0.14640620129946816,
        "smoothedEle": 310.4024196837055,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.018252,
        "lng": 120.664948,
        "ele": 317.5,
        "distanceKm": 66.86355017193979,
        "gradePct": -0.3618052111279672,
        "smoothedEle": 309.7579487361122,
        "gradeBand": "descent"
      },
      {
        "lat": 23.017778,
        "lng": 120.665136,
        "ele": 313.25,
        "distanceKm": 66.91965864158622,
        "gradePct": -1.103898689145309,
        "smoothedEle": 308.44022763626543,
        "gradeBand": "descent"
      },
      {
        "lat": 23.017399,
        "lng": 120.665275,
        "ele": 309.75,
        "distanceKm": 66.9641377827587,
        "gradePct": -1.917349670127494,
        "smoothedEle": 306.7829344518167,
        "gradeBand": "descent"
      },
      {
        "lat": 23.01695,
        "lng": 120.665389,
        "ele": 306.25,
        "distanceKm": 67.01540945769962,
        "gradePct": -2.926926405766083,
        "smoothedEle": 304.444263192862,
        "gradeBand": "descent"
      },
      {
        "lat": 23.016525,
        "lng": 120.66546,
        "ele": 302.25,
        "distanceKm": 67.06322273797035,
        "gradePct": -3.9946369883412847,
        "smoothedEle": 301.7723487621029,
        "gradeBand": "descent"
      },
      {
        "lat": 23.016143,
        "lng": 120.665475,
        "ele": 298.75,
        "distanceKm": 67.10572699054373,
        "gradePct": -4.798455943652004,
        "smoothedEle": 299.1705039729511,
        "gradeBand": "descent"
      },
      {
        "lat": 23.015748780566767,
        "lng": 120.66543542117257,
        "ele": 293.77632328645467,
        "distanceKm": 67.14974900556062,
        "gradePct": -5.394691622061836,
        "smoothedEle": 296.52967717043254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.015358,
        "lng": 120.665363,
        "ele": 290.25,
        "distanceKm": 67.19382947886943,
        "gradePct": -5.566697585978296,
        "smoothedEle": 294.29520247686304,
        "gradeBand": "descent"
      },
      {
        "lat": 23.015032,
        "lng": 120.665329,
        "ele": 288.75,
        "distanceKm": 67.23024570500345,
        "gradePct": -5.424729550106585,
        "smoothedEle": 292.76572097923406,
        "gradeBand": "descent"
      },
      {
        "lat": 23.014676040089366,
        "lng": 120.66533859531044,
        "ele": 286.88842662275516,
        "distanceKm": 67.26983887624682,
        "gradePct": -4.994657737067925,
        "smoothedEle": 291.37803463826185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.014326,
        "lng": 120.665415,
        "ele": 286,
        "distanceKm": 67.3095393250794,
        "gradePct": -4.356050522656569,
        "smoothedEle": 290.2297056447422,
        "gradeBand": "descent"
      },
      {
        "lat": 23.013895,
        "lng": 120.66544,
        "ele": 286.25,
        "distanceKm": 67.35753265589649,
        "gradePct": -3.4809578213964945,
        "smoothedEle": 289.1732020233155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.013398393312215,
        "lng": 120.6653960160063,
        "ele": 287.673391099103,
        "distanceKm": 67.41293605591022,
        "gradePct": -2.7141607617449393,
        "smoothedEle": 288.06440471766,
        "gradeBand": "descent"
      },
      {
        "lat": 23.012901,
        "lng": 120.665363,
        "ele": 288.75,
        "distanceKm": 67.46834687101777,
        "gradePct": -2.2759135338496566,
        "smoothedEle": 286.8785003072137,
        "gradeBand": "descent"
      },
      {
        "lat": 23.01256425665616,
        "lng": 120.6654375644014,
        "ele": 289.75,
        "distanceKm": 67.50656082235027,
        "gradePct": -2.2090651683382956,
        "smoothedEle": 285.8977280126752,
        "gradeBand": "descent"
      },
      {
        "lat": 23.012248,
        "lng": 120.665588,
        "ele": 289.75,
        "distanceKm": 67.54494979339121,
        "gradePct": -2.2544553474051234,
        "smoothedEle": 284.9412848102748,
        "gradeBand": "descent"
      },
      {
        "lat": 23.01178,
        "lng": 120.665679,
        "ele": 289.5,
        "distanceKm": 67.59781594849987,
        "gradePct": -2.233888540886309,
        "smoothedEle": 283.8992288183719,
        "gradeBand": "descent"
      },
      {
        "lat": 23.011239,
        "lng": 120.665322,
        "ele": 282.25,
        "distanceKm": 67.66819934582226,
        "gradePct": -2.099205207566881,
        "smoothedEle": 282.6832472320265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.010891,
        "lng": 120.665129,
        "ele": 277.75,
        "distanceKm": 67.71164532689825,
        "gradePct": -1.8455848421369319,
        "smoothedEle": 282.07988028310274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.01063,
        "lng": 120.665052,
        "ele": 275,
        "distanceKm": 67.74171820308959,
        "gradePct": -1.641113409502571,
        "smoothedEle": 281.7395715474583,
        "gradeBand": "descent"
      },
      {
        "lat": 23.010357,
        "lng": 120.665073,
        "ele": 274.25,
        "distanceKm": 67.77215045286975,
        "gradePct": -1.520394048680465,
        "smoothedEle": 281.3643387469134,
        "gradeBand": "descent"
      },
      {
        "lat": 23.009974,
        "lng": 120.66514000000001,
        "ele": 275.875,
        "distanceKm": 67.81528670470895,
        "gradePct": -1.214972938472084,
        "smoothedEle": 281.16744872117175,
        "gradeBand": "descent"
      },
      {
        "lat": 23.009591,
        "lng": 120.665207,
        "ele": 277.5,
        "distanceKm": 67.85842295964252,
        "gradePct": -0.8719608198470485,
        "smoothedEle": 281.1082277202179,
        "gradeBand": "descent"
      },
      {
        "lat": 23.009256,
        "lng": 120.665212,
        "ele": 278.75,
        "distanceKm": 67.89567682649218,
        "gradePct": -0.4636966457834935,
        "smoothedEle": 281.3742535423255,
        "gradeBand": "descent"
      },
      {
        "lat": 23.008882,
        "lng": 120.665133,
        "ele": 281.25,
        "distanceKm": 67.93804251260268,
        "gradePct": 0.5504002128274045,
        "smoothedEle": 282.8819665839599,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.00843235377473,
        "lng": 120.66488113655565,
        "ele": 283.58494806898153,
        "distanceKm": 67.9942950611777,
        "gradePct": 2.2725041641048125,
        "smoothedEle": 285.80827078050106,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007997,
        "lng": 120.664598,
        "ele": 287.5,
        "distanceKm": 68.05071513080226,
        "gradePct": 3.4165703227381328,
        "smoothedEle": 287.9519503074925,
        "gradeBand": "hard"
      },
      {
        "lat": 23.007524,
        "lng": 120.664102,
        "ele": 290.25,
        "distanceKm": 68.12381366051962,
        "gradePct": 3.567892798732692,
        "smoothedEle": 289.5113747844639,
        "gradeBand": "hard"
      },
      {
        "lat": 23.007323,
        "lng": 120.663766,
        "ele": 300,
        "distanceKm": 68.16482800051274,
        "gradePct": 2.880693104996185,
        "smoothedEle": 290.0367560736826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007215,
        "lng": 120.663335,
        "ele": 305.25,
        "distanceKm": 68.21054632284279,
        "gradePct": 2.0117788699924684,
        "smoothedEle": 290.4492949141125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007495,
        "lng": 120.663058,
        "ele": 295.5,
        "distanceKm": 68.2526550107662,
        "gradePct": 1.1726551546392845,
        "smoothedEle": 290.3386444354314,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007785,
        "lng": 120.662593,
        "ele": 290,
        "distanceKm": 68.31014329850964,
        "gradePct": 0.029773076524406437,
        "smoothedEle": 289.2792885721308,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.007873,
        "lng": 120.662242,
        "ele": 285.75,
        "distanceKm": 68.34737683317992,
        "gradePct": -0.8765448457401009,
        "smoothedEle": 288.0601222073302,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007817005179287,
        "lng": 120.6617649968825,
        "ele": 285.0562176294451,
        "distanceKm": 68.39659337462328,
        "gradePct": -2.2748542348025995,
        "smoothedEle": 285.77368215087415,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007706,
        "lng": 120.661296,
        "ele": 285.75,
        "distanceKm": 68.44615665429843,
        "gradePct": -3.9827856814853533,
        "smoothedEle": 282.3901490320608,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00764225,
        "lng": 120.660872,
        "ele": 281.12499999999926,
        "distanceKm": 68.49012811447194,
        "gradePct": -5.279178911760918,
        "smoothedEle": 279.08975722435997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0075785,
        "lng": 120.660448,
        "ele": 276.5,
        "distanceKm": 68.53409959488056,
        "gradePct": -6.050819393723088,
        "smoothedEle": 276.39323028169474,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00751475,
        "lng": 120.66002399999999,
        "ele": 271.87500000000074,
        "distanceKm": 68.57807109552571,
        "gradePct": -6.313779759144462,
        "smoothedEle": 274.00660733190665,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007451,
        "lng": 120.6596,
        "ele": 267.25,
        "distanceKm": 68.62204261640437,
        "gradePct": -5.999062459047309,
        "smoothedEle": 272.0382155358745,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007349,
        "lng": 120.659253,
        "ele": 267,
        "distanceKm": 68.65932512989991,
        "gradePct": -5.466798447967513,
        "smoothedEle": 270.46815810000487,
        "gradeBand": "descent"
      },
      {
        "lat": 23.007149927437414,
        "lng": 120.6587925503643,
        "ele": 265.91522552658944,
        "distanceKm": 68.71139199597849,
        "gradePct": -4.459366894858214,
        "smoothedEle": 268.86702755242163,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006915,
        "lng": 120.658351,
        "ele": 264.5,
        "distanceKm": 68.76359150526741,
        "gradePct": -3.4040573806425787,
        "smoothedEle": 267.9843953009573,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006736,
        "lng": 120.657939,
        "ele": 262.75,
        "distanceKm": 68.81022130470679,
        "gradePct": -2.4252007273096803,
        "smoothedEle": 267.71699689092145,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006570500000002,
        "lng": 120.6576165,
        "ele": 263.3749999999999,
        "distanceKm": 68.84801276365313,
        "gradePct": -1.604417485734649,
        "smoothedEle": 267.7357144197281,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006405,
        "lng": 120.657294,
        "ele": 264,
        "distanceKm": 68.88580425796096,
        "gradePct": -0.832003575076231,
        "smoothedEle": 267.98987991713994,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006152,
        "lng": 120.656755,
        "ele": 271.25,
        "distanceKm": 68.94773033649481,
        "gradePct": 0.0018490012023732751,
        "smoothedEle": 268.25628699512896,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.005995,
        "lng": 120.656359,
        "ele": 273.5,
        "distanceKm": 68.99186117102423,
        "gradePct": 0.27634484432283163,
        "smoothedEle": 268.3749726973242,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.005983,
        "lng": 120.656143,
        "ele": 273.5,
        "distanceKm": 69.01400923308921,
        "gradePct": 0.3704288118159927,
        "smoothedEle": 268.45973061726534,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006037,
        "lng": 120.65575,
        "ele": 273,
        "distanceKm": 69.05467889870785,
        "gradePct": 0.5657859892971464,
        "smoothedEle": 268.9121192783931,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006176,
        "lng": 120.6553125,
        "ele": 271.3124999999999,
        "distanceKm": 69.10204988559238,
        "gradePct": 0.7737577215147727,
        "smoothedEle": 269.6072843357005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006315,
        "lng": 120.65487499999999,
        "ele": 269.6249999999997,
        "distanceKm": 69.14942082887538,
        "gradePct": 1.008820749631056,
        "smoothedEle": 270.27847491363246,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006453999999998,
        "lng": 120.6544375,
        "ele": 267.9375000000001,
        "distanceKm": 69.19679172855511,
        "gradePct": 0.9542477838063668,
        "smoothedEle": 270.3023369045155,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006593,
        "lng": 120.654,
        "ele": 266.25,
        "distanceKm": 69.24416258463432,
        "gradePct": 0.47393837052700183,
        "smoothedEle": 269.7430178940715,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.006644,
        "lng": 120.65364,
        "ele": 269.25,
        "distanceKm": 69.28144264730618,
        "gradePct": -0.1444091290889255,
        "smoothedEle": 269.0160566719704,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0067125,
        "lng": 120.65323000000001,
        "ele": 270.24999999999983,
        "distanceKm": 69.32409204038154,
        "gradePct": -0.9530496741089258,
        "smoothedEle": 268.01349640850333,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006781,
        "lng": 120.65282,
        "ele": 271.25,
        "distanceKm": 69.36674141249816,
        "gradePct": -1.6122386491708254,
        "smoothedEle": 267.06272245715127,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006845,
        "lng": 120.652344,
        "ele": 269.125,
        "distanceKm": 69.41597724233972,
        "gradePct": -2.002023561358044,
        "smoothedEle": 266.07176183881853,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006909,
        "lng": 120.651868,
        "ele": 267,
        "distanceKm": 69.46521304931665,
        "gradePct": -2.0640201942912304,
        "smoothedEle": 265.2044934441838,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006958,
        "lng": 120.651447,
        "ele": 263.75,
        "distanceKm": 69.50864566000304,
        "gradePct": -1.84056251049279,
        "smoothedEle": 264.69546980616394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006915,
        "lng": 120.650856,
        "ele": 260.75,
        "distanceKm": 69.56932339643323,
        "gradePct": -1.5688649423542023,
        "smoothedEle": 263.87302545002285,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006816,
        "lng": 120.650403,
        "ele": 260,
        "distanceKm": 69.61697705767023,
        "gradePct": -1.4337850720267875,
        "smoothedEle": 263.1865803608627,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00666,
        "lng": 120.649979,
        "ele": 259.75,
        "distanceKm": 69.66371210541082,
        "gradePct": -1.3368727617572442,
        "smoothedEle": 262.557186427349,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006547,
        "lng": 120.649723,
        "ele": 259.25,
        "distanceKm": 69.69277087798204,
        "gradePct": -1.3511353487917381,
        "smoothedEle": 262.17924915644534,
        "gradeBand": "descent"
      },
      {
        "lat": 23.006141,
        "lng": 120.649266,
        "ele": 261,
        "distanceKm": 69.75777799993655,
        "gradePct": -1.1878250400030312,
        "smoothedEle": 261.6538651592994,
        "gradeBand": "descent"
      },
      {
        "lat": 23.005755,
        "lng": 120.649049,
        "ele": 263.5,
        "distanceKm": 69.8061053271969,
        "gradePct": -0.861249404446868,
        "smoothedEle": 261.6206874831895,
        "gradeBand": "descent"
      },
      {
        "lat": 23.005437523407007,
        "lng": 120.64881446264822,
        "ele": 263.5,
        "distanceKm": 69.84879572527439,
        "gradePct": -0.5475797775686069,
        "smoothedEle": 261.66290992725794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00512,
        "lng": 120.64858,
        "ele": 263.5,
        "distanceKm": 69.89148616122492,
        "gradePct": -0.26979624420124154,
        "smoothedEle": 261.65636564444173,
        "gradeBand": "descent"
      },
      {
        "lat": 23.005006,
        "lng": 120.647926,
        "ele": 261.75,
        "distanceKm": 69.95961391409269,
        "gradePct": -0.08275393277457847,
        "smoothedEle": 261.4870969019866,
        "gradeBand": "descent"
      },
      {
        "lat": 23.004766,
        "lng": 120.647321,
        "ele": 262.5,
        "distanceKm": 70.02704263367664,
        "gradePct": -0.3499229219252364,
        "smoothedEle": 260.9415494399592,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0045825,
        "lng": 120.64691333333334,
        "ele": 261.2083333333334,
        "distanceKm": 70.07348996768631,
        "gradePct": -0.7459003161035761,
        "smoothedEle": 260.167323760828,
        "gradeBand": "descent"
      },
      {
        "lat": 23.004399,
        "lng": 120.64650566666667,
        "ele": 259.9166666666668,
        "distanceKm": 70.11993735266635,
        "gradePct": -1.1418516922783064,
        "smoothedEle": 259.3019730444931,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0042155,
        "lng": 120.64609800000001,
        "ele": 258.6250000000002,
        "distanceKm": 70.16638478861343,
        "gradePct": -1.5295115384021538,
        "smoothedEle": 258.3732925178508,
        "gradeBand": "descent"
      },
      {
        "lat": 23.004032000000002,
        "lng": 120.64569033333333,
        "ele": 257.3333333333332,
        "distanceKm": 70.21283227552995,
        "gradePct": -1.765264426073404,
        "smoothedEle": 257.525992737206,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0038485,
        "lng": 120.64528266666666,
        "ele": 256.0416666666666,
        "distanceKm": 70.25927981341441,
        "gradePct": -1.8865086105333846,
        "smoothedEle": 256.6311740925778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.003665,
        "lng": 120.644875,
        "ele": 254.75,
        "distanceKm": 70.3057274022648,
        "gradePct": -1.952640399551513,
        "smoothedEle": 255.6614346149413,
        "gradeBand": "descent"
      },
      {
        "lat": 23.00350866666667,
        "lng": 120.64450466666666,
        "ele": 254.16666666666666,
        "distanceKm": 70.3474281373241,
        "gradePct": -1.945864822113081,
        "smoothedEle": 254.86058644174594,
        "gradeBand": "descent"
      },
      {
        "lat": 23.003352333333332,
        "lng": 120.64413433333334,
        "ele": 253.58333333333334,
        "distanceKm": 70.38912891229367,
        "gradePct": -1.920371638970623,
        "smoothedEle": 254.11764862236132,
        "gradeBand": "descent"
      },
      {
        "lat": 23.003196,
        "lng": 120.643764,
        "ele": 253,
        "distanceKm": 70.43082972717558,
        "gradePct": -1.8644124034563294,
        "smoothedEle": 253.45044437891022,
        "gradeBand": "descent"
      },
      {
        "lat": 23.0029685,
        "lng": 120.6432305,
        "ele": 252.37500000000009,
        "distanceKm": 70.49101020316935,
        "gradePct": -1.6602573252644297,
        "smoothedEle": 252.64818777564494,
        "gradeBand": "descent"
      },
      {
        "lat": 23.002741,
        "lng": 120.642697,
        "ele": 251.75,
        "distanceKm": 70.55119076268328,
        "gradePct": -1.3761464894761506,
        "smoothedEle": 252.04125881699758,
        "gradeBand": "descent"
      },
      {
        "lat": 23.002598,
        "lng": 120.64237,
        "ele": 251.5,
        "distanceKm": 70.58824550814423,
        "gradePct": -1.207285198006386,
        "smoothedEle": 251.7188168871505,
        "gradeBand": "descent"
      },
      {
        "lat": 23.002336,
        "lng": 120.642008,
        "ele": 250.75,
        "distanceKm": 70.63537928435842,
        "gradePct": -1.037116485732596,
        "smoothedEle": 251.315561965386,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001903,
        "lng": 120.641727,
        "ele": 250.75,
        "distanceKm": 70.69146316162923,
        "gradePct": -0.930172681817127,
        "smoothedEle": 250.78327426560952,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001462924894234,
        "lng": 120.64160358195406,
        "ele": 250.75,
        "distanceKm": 70.74200157721233,
        "gradePct": -0.9537517619794194,
        "smoothedEle": 250.22642945249726,
        "gradeBand": "descent"
      },
      {
        "lat": 23.001022638084482,
        "lng": 120.64148104738076,
        "ele": 250.4803467490702,
        "distanceKm": 70.79254027971051,
        "gradePct": -1.018360569279707,
        "smoothedEle": 249.64535165738806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.000582,
        "lng": 120.64136,
        "ele": 250,
        "distanceKm": 70.84307929848922,
        "gradePct": -1.0945203827338887,
        "smoothedEle": 249.05344096707097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.000042,
        "lng": 120.6411915,
        "ele": 248.625,
        "distanceKm": 70.90555247789749,
        "gradePct": -1.1519297573243654,
        "smoothedEle": 248.32417516551362,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999502,
        "lng": 120.641023,
        "ele": 247.25,
        "distanceKm": 70.96802567635393,
        "gradePct": -1.2036178457333733,
        "smoothedEle": 247.51997701423238,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999337,
        "lng": 120.640977,
        "ele": 246.75,
        "distanceKm": 70.98696738015796,
        "gradePct": -1.2273169542044935,
        "smoothedEle": 247.25479316097594,
        "gradeBand": "descent"
      },
      {
        "lat": 22.999201,
        "lng": 120.640956,
        "ele": 246.5,
        "distanceKm": 71.00224190807815,
        "gradePct": -1.2453884284555379,
        "smoothedEle": 247.04094977009336,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9986821340942,
        "lng": 120.64100567218134,
        "ele": 245.82315718384825,
        "distanceKm": 71.06016083040356,
        "gradePct": -1.288959431794463,
        "smoothedEle": 246.27612490325419,
        "gradeBand": "descent"
      },
      {
        "lat": 22.998164,
        "lng": 120.641067,
        "ele": 245.25,
        "distanceKm": 71.11811575582061,
        "gradePct": -1.4290278634568747,
        "smoothedEle": 245.30439624962543,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9976665,
        "lng": 120.641167,
        "ele": 244.5,
        "distanceKm": 71.17437429141013,
        "gradePct": -1.52580762341703,
        "smoothedEle": 244.37948115661152,
        "gradeBand": "descent"
      },
      {
        "lat": 22.997169,
        "lng": 120.641267,
        "ele": 243.75,
        "distanceKm": 71.23063283386345,
        "gradePct": -1.5508132129661825,
        "smoothedEle": 243.56441847436406,
        "gradeBand": "descent"
      },
      {
        "lat": 22.996572,
        "lng": 120.641382,
        "ele": 244,
        "distanceKm": 71.29805185600327,
        "gradePct": -1.4718973973180245,
        "smoothedEle": 242.6970123159429,
        "gradeBand": "descent"
      },
      {
        "lat": 22.996318,
        "lng": 120.640894,
        "ele": 240.75,
        "distanceKm": 71.35543465756503,
        "gradePct": -1.3415300594037185,
        "smoothedEle": 242.00779695642572,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99614833333333,
        "lng": 120.64043416666667,
        "ele": 240.49999999999997,
        "distanceKm": 71.40614275143959,
        "gradePct": -1.2453159709592931,
        "smoothedEle": 241.42859402297756,
        "gradeBand": "descent"
      },
      {
        "lat": 22.995978666666666,
        "lng": 120.63997433333334,
        "ele": 240.25000000000003,
        "distanceKm": 71.45685090021819,
        "gradePct": -1.09099747002942,
        "smoothedEle": 241.04510460715102,
        "gradeBand": "descent"
      },
      {
        "lat": 22.995809,
        "lng": 120.6395145,
        "ele": 240,
        "distanceKm": 71.5075591039033,
        "gradePct": -0.7852415170937833,
        "smoothedEle": 241.01233929623524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.995639333333333,
        "lng": 120.63905466666667,
        "ele": 239.74999999999997,
        "distanceKm": 71.55826736249335,
        "gradePct": -0.4279237582389267,
        "smoothedEle": 241.1195934415517,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99546966666667,
        "lng": 120.63859483333334,
        "ele": 239.50000000000003,
        "distanceKm": 71.60897567598631,
        "gradePct": 0.07148115386016128,
        "smoothedEle": 241.55013183373495,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9953,
        "lng": 120.638135,
        "ele": 239.25,
        "distanceKm": 71.65968404438482,
        "gradePct": 0.596780916616217,
        "smoothedEle": 242.2368357928207,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995315240727884,
        "lng": 120.63773848958748,
        "ele": 241.90165113042028,
        "distanceKm": 71.700305886363,
        "gradePct": 0.9408481853010223,
        "smoothedEle": 242.8987223626888,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995367,
        "lng": 120.637344,
        "ele": 244,
        "distanceKm": 71.74109360228954,
        "gradePct": 1.2839716804877486,
        "smoothedEle": 243.6512122072099,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.9954525,
        "lng": 120.636777,
        "ele": 245.375,
        "distanceKm": 71.79990474102338,
        "gradePct": 1.6667050043856384,
        "smoothedEle": 244.80652516643238,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995538,
        "lng": 120.63621,
        "ele": 246.75,
        "distanceKm": 71.85871584348492,
        "gradePct": 1.8700198030218491,
        "smoothedEle": 245.96376380777696,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995606000000002,
        "lng": 120.635774,
        "ele": 247.87500000000017,
        "distanceKm": 71.90398036229585,
        "gradePct": 1.9286248612354353,
        "smoothedEle": 246.82376224601086,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995674,
        "lng": 120.635338,
        "ele": 249,
        "distanceKm": 71.94924485894313,
        "gradePct": 1.8285996042076271,
        "smoothedEle": 247.46853843660435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.99569,
        "lng": 120.634967,
        "ele": 249.75,
        "distanceKm": 71.98726165804632,
        "gradePct": 1.5817190024382686,
        "smoothedEle": 247.72159665567267,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.995334,
        "lng": 120.635067,
        "ele": 249.75,
        "distanceKm": 72.02814908172844,
        "gradePct": 1.2562885177271106,
        "smoothedEle": 247.87487213469097,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.99491072957859,
        "lng": 120.63516963512097,
        "ele": 249.55109472678112,
        "distanceKm": 72.07637291932035,
        "gradePct": 0.8336365698149162,
        "smoothedEle": 247.96651069243154,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.994487,
        "lng": 120.63527,
        "ele": 249,
        "distanceKm": 72.12459655590884,
        "gradePct": 0.4054948554165861,
        "smoothedEle": 247.92842209054507,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.994032,
        "lng": 120.6353955,
        "ele": 247.5000000000002,
        "distanceKm": 72.17679572186348,
        "gradePct": 0.009411422646095824,
        "smoothedEle": 247.6707531630882,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.993577,
        "lng": 120.635521,
        "ele": 246,
        "distanceKm": 72.22899489847222,
        "gradePct": -0.3592902407156038,
        "smoothedEle": 247.15789893775604,
        "gradeBand": "descent"
      },
      {
        "lat": 22.993104,
        "lng": 120.6356865,
        "ele": 246.25000000000003,
        "distanceKm": 72.28425111703353,
        "gradePct": -0.7327319598818358,
        "smoothedEle": 246.49482431502034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.992631,
        "lng": 120.635852,
        "ele": 246.5,
        "distanceKm": 72.33950735378836,
        "gradePct": -1.0342941864619628,
        "smoothedEle": 245.786230064634,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99223333333333,
        "lng": 120.63598,
        "ele": 245.58333333333334,
        "distanceKm": 72.38562623894552,
        "gradePct": -1.2181478745524115,
        "smoothedEle": 245.14769803784733,
        "gradeBand": "descent"
      },
      {
        "lat": 22.991835666666667,
        "lng": 120.636108,
        "ele": 244.66666666666666,
        "distanceKm": 72.43174513506412,
        "gradePct": -1.301086367185117,
        "smoothedEle": 244.52272336428305,
        "gradeBand": "descent"
      },
      {
        "lat": 22.991438,
        "lng": 120.636236,
        "ele": 243.75,
        "distanceKm": 72.4778640421456,
        "gradePct": -1.3212819030703669,
        "smoothedEle": 243.92890540753484,
        "gradeBand": "descent"
      },
      {
        "lat": 22.99103155768591,
        "lng": 120.63638235652135,
        "ele": 243.75,
        "distanceKm": 72.52547679633018,
        "gradePct": -1.341376265378424,
        "smoothedEle": 243.28340242432336,
        "gradeBand": "descent"
      },
      {
        "lat": 22.990624,
        "lng": 120.636525,
        "ele": 243,
        "distanceKm": 72.57308937594904,
        "gradePct": -1.3473460482988977,
        "smoothedEle": 242.62658317563867,
        "gradeBand": "descent"
      },
      {
        "lat": 22.990183,
        "lng": 120.636696,
        "ele": 242,
        "distanceKm": 72.62515685372219,
        "gradePct": -1.3383792048486591,
        "smoothedEle": 241.93524525675156,
        "gradeBand": "descent"
      },
      {
        "lat": 22.989555,
        "lng": 120.636858,
        "ele": 240.25,
        "distanceKm": 72.69692934987022,
        "gradePct": -1.2693979154273156,
        "smoothedEle": 241.13163444280377,
        "gradeBand": "descent"
      },
      {
        "lat": 22.988946,
        "lng": 120.636963,
        "ele": 239.25,
        "distanceKm": 72.76549482699008,
        "gradePct": -1.0999572890211895,
        "smoothedEle": 240.53143599271024,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9884655,
        "lng": 120.6370195,
        "ele": 239.49999999999997,
        "distanceKm": 72.81923617991454,
        "gradePct": -0.9311507960900381,
        "smoothedEle": 240.15155677363012,
        "gradeBand": "descent"
      },
      {
        "lat": 22.987985,
        "lng": 120.637076,
        "ele": 239.75,
        "distanceKm": 72.87297753505383,
        "gradePct": -0.7397804409492077,
        "smoothedEle": 239.9202534129816,
        "gradeBand": "descent"
      },
      {
        "lat": 22.98762319162623,
        "lng": 120.63709357358248,
        "ele": 239.46646131384009,
        "distanceKm": 72.91324904483633,
        "gradePct": -0.5773850626531416,
        "smoothedEle": 239.83400735746292,
        "gradeBand": "descent"
      },
      {
        "lat": 22.987263,
        "lng": 120.637136,
        "ele": 239.25,
        "distanceKm": 72.95353535918328,
        "gradePct": -0.36278178303808256,
        "smoothedEle": 239.91056146757867,
        "gradeBand": "descent"
      },
      {
        "lat": 22.98683296490443,
        "lng": 120.63717352590338,
        "ele": 239.66250792430935,
        "distanceKm": 73.00150719216161,
        "gradePct": -0.10547668011471807,
        "smoothedEle": 240.06592355619892,
        "gradeBand": "descent"
      },
      {
        "lat": 22.986403,
        "lng": 120.637212,
        "ele": 240,
        "distanceKm": 73.04947911742974,
        "gradePct": 0.13861483631050733,
        "smoothedEle": 240.29862052347124,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.985976666666666,
        "lng": 120.63722866666667,
        "ele": 240.4166666666667,
        "distanceKm": 73.09691597715494,
        "gradePct": 0.33199340411331474,
        "smoothedEle": 240.5329733027929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.985550333333332,
        "lng": 120.63724533333334,
        "ele": 240.8333333333333,
        "distanceKm": 73.14435283707381,
        "gradePct": 0.4193541817286015,
        "smoothedEle": 240.73182073398883,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.985124,
        "lng": 120.637262,
        "ele": 241.25,
        "distanceKm": 73.19178969718635,
        "gradePct": 0.4217364058414941,
        "smoothedEle": 240.87792518527783,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.984729,
        "lng": 120.637303,
        "ele": 241.5,
        "distanceKm": 73.23591182633434,
        "gradePct": 0.3396938631978466,
        "smoothedEle": 240.91219751839526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.984319000000003,
        "lng": 120.6373175,
        "ele": 241.74999999999997,
        "distanceKm": 73.28152596630747,
        "gradePct": 0.1783399941641736,
        "smoothedEle": 240.8136218708968,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.983909,
        "lng": 120.637332,
        "ele": 242,
        "distanceKm": 73.32714010642763,
        "gradePct": -0.019736002109254688,
        "smoothedEle": 240.6201958242299,
        "gradeBand": "descent"
      },
      {
        "lat": 22.983405504859526,
        "lng": 120.63737506723596,
        "ele": 241.80423983651852,
        "distanceKm": 73.3832996054571,
        "gradePct": -0.2826246641226464,
        "smoothedEle": 240.2865265674178,
        "gradeBand": "descent"
      },
      {
        "lat": 22.982902,
        "lng": 120.637418,
        "ele": 240.5,
        "distanceKm": 73.43945910419453,
        "gradePct": -0.5058254452223493,
        "smoothedEle": 239.8928806890086,
        "gradeBand": "descent"
      },
      {
        "lat": 22.982487,
        "lng": 120.637496,
        "ele": 239,
        "distanceKm": 73.48629078015561,
        "gradePct": -0.6549126591346854,
        "smoothedEle": 239.48359143414177,
        "gradeBand": "descent"
      },
      {
        "lat": 22.982094,
        "lng": 120.637603,
        "ele": 238.25,
        "distanceKm": 73.53134230318703,
        "gradePct": -0.7852215294841218,
        "smoothedEle": 239.02478559329757,
        "gradeBand": "descent"
      },
      {
        "lat": 22.98171470524867,
        "lng": 120.63771415796963,
        "ele": 237.61359941052484,
        "distanceKm": 73.57502612139446,
        "gradePct": -0.9071798011269023,
        "smoothedEle": 238.52132351616848,
        "gradeBand": "descent"
      },
      {
        "lat": 22.98133580929679,
        "lng": 120.63782690620994,
        "ele": 237.5,
        "distanceKm": 73.61870986672699,
        "gradePct": -1.0788691078047907,
        "smoothedEle": 237.88058272825987,
        "gradeBand": "descent"
      },
      {
        "lat": 22.980957,
        "lng": 120.63794,
        "ele": 237.5,
        "distanceKm": 73.66239368921066,
        "gradePct": -1.2564466893880102,
        "smoothedEle": 237.17954863236562,
        "gradeBand": "descent"
      },
      {
        "lat": 22.980514666666668,
        "lng": 120.63808166666666,
        "ele": 237,
        "distanceKm": 73.71367247396651,
        "gradePct": -1.356558233788599,
        "smoothedEle": 236.49161910981834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.980072333333332,
        "lng": 120.63822333333333,
        "ele": 236.5,
        "distanceKm": 73.76495127215084,
        "gradePct": -1.3262171735367143,
        "smoothedEle": 235.98500320708663,
        "gradeBand": "descent"
      },
      {
        "lat": 22.97963,
        "lng": 120.638365,
        "ele": 236,
        "distanceKm": 73.81623008376268,
        "gradePct": -1.1578778900001914,
        "smoothedEle": 235.6011997015182,
        "gradeBand": "descent"
      },
      {
        "lat": 22.979198,
        "lng": 120.638527,
        "ele": 233.75,
        "distanceKm": 73.86704855753513,
        "gradePct": -0.8989653953968301,
        "smoothedEle": 235.31917054764295,
        "gradeBand": "descent"
      },
      {
        "lat": 22.978637,
        "lng": 120.638709,
        "ele": 233.75,
        "distanceKm": 73.93215198997835,
        "gradePct": -0.6382649980357707,
        "smoothedEle": 235.0325182069028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.978180240535593,
        "lng": 120.63886521808071,
        "ele": 233.948246295316,
        "distanceKm": 73.98539970416768,
        "gradePct": -0.4742099595239967,
        "smoothedEle": 234.88353411149282,
        "gradeBand": "descent"
      },
      {
        "lat": 22.977723491284838,
        "lng": 120.63902147060759,
        "ele": 234.3372389240231,
        "distanceKm": 74.03864741054551,
        "gradePct": -0.3257070261289055,
        "smoothedEle": 234.82537538591765,
        "gradeBand": "descent"
      },
      {
        "lat": 22.97726674564242,
        "lng": 120.6391777353038,
        "ele": 234.79361946201155,
        "distanceKm": 74.09189512473418,
        "gradePct": -0.17528863649101573,
        "smoothedEle": 234.8591931035843,
        "gradeBand": "descent"
      },
      {
        "lat": 22.97681,
        "lng": 120.639334,
        "ele": 235.25,
        "distanceKm": 74.1451428551676,
        "gradePct": 0.07556445100698177,
        "smoothedEle": 235.14729940219772,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.976386,
        "lng": 120.639482,
        "ele": 235.56250000000006,
        "distanceKm": 74.19466429685845,
        "gradePct": 0.2663905979615,
        "smoothedEle": 235.4061962442576,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.975962000000003,
        "lng": 120.63963000000001,
        "ele": 235.875,
        "distanceKm": 74.24418575309437,
        "gradePct": 0.40672286503551325,
        "smoothedEle": 235.64233852715859,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.975538,
        "lng": 120.639778,
        "ele": 236.18749999999994,
        "distanceKm": 74.29370722387463,
        "gradePct": 0.409097133499054,
        "smoothedEle": 235.68719205468494,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.975114,
        "lng": 120.639926,
        "ele": 236.5,
        "distanceKm": 74.34322870919871,
        "gradePct": 0.19077685847463227,
        "smoothedEle": 235.51849629256273,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.974711666666668,
        "lng": 120.64005866666668,
        "ele": 236.41666666666666,
        "distanceKm": 74.38998237589153,
        "gradePct": -0.0720189185866634,
        "smoothedEle": 235.23768144293052,
        "gradeBand": "descent"
      },
      {
        "lat": 22.974309333333334,
        "lng": 120.64019133333333,
        "ele": 236.33333333333334,
        "distanceKm": 74.43673605432954,
        "gradePct": -0.4047791119543489,
        "smoothedEle": 234.79725653220262,
        "gradeBand": "descent"
      },
      {
        "lat": 22.973907,
        "lng": 120.640324,
        "ele": 236.25,
        "distanceKm": 74.48348974451343,
        "gradePct": -0.7387982558881455,
        "smoothedEle": 234.2003411733482,
        "gradeBand": "descent"
      },
      {
        "lat": 22.973276,
        "lng": 120.640467,
        "ele": 233,
        "distanceKm": 74.55516485564152,
        "gradePct": -1.2226697887759141,
        "smoothedEle": 233.00146507228803,
        "gradeBand": "descent"
      },
      {
        "lat": 22.972695,
        "lng": 120.640566,
        "ele": 232,
        "distanceKm": 74.62055938057412,
        "gradePct": -1.5587054334442376,
        "smoothedEle": 231.83223175198435,
        "gradeBand": "descent"
      },
      {
        "lat": 22.972228666666666,
        "lng": 120.64066166666667,
        "ele": 230.4166666666668,
        "distanceKm": 74.67333017949568,
        "gradePct": -1.7140512573588507,
        "smoothedEle": 230.9019482147003,
        "gradeBand": "descent"
      },
      {
        "lat": 22.971762333333334,
        "lng": 120.64075733333334,
        "ele": 228.8333333333332,
        "distanceKm": 74.72610098468832,
        "gradePct": -1.7488419628650613,
        "smoothedEle": 229.98991893890576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.971296,
        "lng": 120.640853,
        "ele": 227.25,
        "distanceKm": 74.77887179615273,
        "gradePct": -1.7113884434703877,
        "smoothedEle": 229.15481562420044,
        "gradeBand": "descent"
      },
      {
        "lat": 22.97077,
        "lng": 120.640978,
        "ele": 227.5,
        "distanceKm": 74.83874404321953,
        "gradePct": -1.5024456264310757,
        "smoothedEle": 228.50676751868963,
        "gradeBand": "descent"
      },
      {
        "lat": 22.970285333333333,
        "lng": 120.641087,
        "ele": 227.58333333333334,
        "distanceKm": 74.8937797996355,
        "gradePct": -1.336159623821383,
        "smoothedEle": 227.87620149559282,
        "gradeBand": "descent"
      },
      {
        "lat": 22.969800666666668,
        "lng": 120.64119600000001,
        "ele": 227.66666666666666,
        "distanceKm": 74.94881556416412,
        "gradePct": -1.1810871778633585,
        "smoothedEle": 227.26828411467412,
        "gradeBand": "descent"
      },
      {
        "lat": 22.969316,
        "lng": 120.641305,
        "ele": 227.75,
        "distanceKm": 75.00385133680547,
        "gradePct": -1.0899541673756645,
        "smoothedEle": 226.7045325367114,
        "gradeBand": "descent"
      },
      {
        "lat": 22.968863,
        "lng": 120.64143,
        "ele": 227.75,
        "distanceKm": 75.05582294416877,
        "gradePct": -1.0567690137217474,
        "smoothedEle": 226.19754989398527,
        "gradeBand": "descent"
      },
      {
        "lat": 22.968450103852255,
        "lng": 120.64152814569229,
        "ele": 226.62741855222853,
        "distanceKm": 75.1028216440326,
        "gradePct": -1.0963492188767945,
        "smoothedEle": 225.58362810540345,
        "gradeBand": "descent"
      },
      {
        "lat": 22.968037207704516,
        "lng": 120.64162629138458,
        "ele": 225.50483710445673,
        "distanceKm": 75.14982035045732,
        "gradePct": -1.2113257204901628,
        "smoothedEle": 224.83534027965408,
        "gradeBand": "descent"
      },
      {
        "lat": 22.967624311556772,
        "lng": 120.64172443707687,
        "ele": 224.38225565668492,
        "distanceKm": 75.1968190634436,
        "gradePct": -1.4116441794762635,
        "smoothedEle": 223.95327832962323,
        "gradeBand": "descent"
      },
      {
        "lat": 22.967211415409032,
        "lng": 120.64182258276917,
        "ele": 223.25967420891345,
        "distanceKm": 75.24381778299058,
        "gradePct": -1.6562569743731836,
        "smoothedEle": 223.00214620311348,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96679853571883,
        "lng": 120.64192080963554,
        "ele": 222.06225272210767,
        "distanceKm": 75.29081649898257,
        "gradePct": -1.8648400371147338,
        "smoothedEle": 222.01076556320476,
        "gradeBand": "descent"
      },
      {
        "lat": 22.966385690479218,
        "lng": 120.6420192064237,
        "ele": 220.70816848140495,
        "distanceKm": 75.33781520538064,
        "gradePct": -2.00019386415606,
        "smoothedEle": 221.02609193773392,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96597284523961,
        "lng": 120.64211760321184,
        "ele": 219.35408424070226,
        "distanceKm": 75.38481391837162,
        "gradePct": -2.011521007724596,
        "smoothedEle": 220.155546349274,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96556,
        "lng": 120.642216,
        "ele": 218,
        "distanceKm": 75.43181263795643,
        "gradePct": -1.9249277779225207,
        "smoothedEle": 219.39524363057205,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96507294073915,
        "lng": 120.64231536468411,
        "ele": 217.42563766409575,
        "distanceKm": 75.48691841013311,
        "gradePct": -1.753951873111692,
        "smoothedEle": 218.58508725094106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.964585794021733,
        "lng": 120.64241421826995,
        "ele": 217.0286571249468,
        "distanceKm": 75.54202411210636,
        "gradePct": -1.5419809399963422,
        "smoothedEle": 217.86416951479995,
        "gradeBand": "descent"
      },
      {
        "lat": 22.964098397010865,
        "lng": 120.64251160913497,
        "ele": 217.1393285624734,
        "distanceKm": 75.59712988438022,
        "gradePct": -1.3523764381639813,
        "smoothedEle": 217.25155692942948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.963611,
        "lng": 120.642609,
        "ele": 217.25,
        "distanceKm": 75.65223566315721,
        "gradePct": -1.1822466154665934,
        "smoothedEle": 216.73049430115375,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9631465,
        "lng": 120.642688,
        "ele": 216.74999999999994,
        "distanceKm": 75.70451524537619,
        "gradePct": -1.0158786278306733,
        "smoothedEle": 216.32312023163598,
        "gradeBand": "descent"
      },
      {
        "lat": 22.962682,
        "lng": 120.642767,
        "ele": 216.25,
        "distanceKm": 75.75679483189346,
        "gradePct": -0.8928464603906023,
        "smoothedEle": 215.91427004245122,
        "gradeBand": "descent"
      },
      {
        "lat": 22.962322,
        "lng": 120.642812,
        "ele": 216,
        "distanceKm": 75.79708932610048,
        "gradePct": -0.838396572959868,
        "smoothedEle": 215.57521467116797,
        "gradeBand": "descent"
      },
      {
        "lat": 22.961892444444445,
        "lng": 120.64284500000001,
        "ele": 215.36111111111114,
        "distanceKm": 75.84497313925336,
        "gradePct": -0.8390609544612909,
        "smoothedEle": 215.12104449663195,
        "gradeBand": "descent"
      },
      {
        "lat": 22.96146288888889,
        "lng": 120.64287800000001,
        "ele": 214.7222222222223,
        "distanceKm": 75.89285695316352,
        "gradePct": -0.908637494039128,
        "smoothedEle": 214.59668923543222,
        "gradeBand": "descent"
      },
      {
        "lat": 22.961033333333333,
        "lng": 120.642911,
        "ele": 214.08333333333326,
        "distanceKm": 75.94074076783083,
        "gradePct": -1.011440872328819,
        "smoothedEle": 214.01693839423552,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960603777777777,
        "lng": 120.642944,
        "ele": 213.44444444444443,
        "distanceKm": 75.9886245832555,
        "gradePct": -1.1134749865790197,
        "smoothedEle": 213.41949071994173,
        "gradeBand": "descent"
      },
      {
        "lat": 22.960174222222225,
        "lng": 120.642977,
        "ele": 212.80555555555557,
        "distanceKm": 76.03650839943701,
        "gradePct": -1.223266447258308,
        "smoothedEle": 212.75479828161423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.95974466666667,
        "lng": 120.64301,
        "ele": 212.16666666666674,
        "distanceKm": 76.08439221637614,
        "gradePct": -1.308300967540954,
        "smoothedEle": 212.07278102933054,
        "gradeBand": "descent"
      },
      {
        "lat": 22.959315111111113,
        "lng": 120.64304299999999,
        "ele": 211.5277777777777,
        "distanceKm": 76.1322760340724,
        "gradePct": -1.3063435863934487,
        "smoothedEle": 211.50673755323004,
        "gradeBand": "descent"
      },
      {
        "lat": 22.958885555555558,
        "lng": 120.643076,
        "ele": 210.88888888888886,
        "distanceKm": 76.18015985252596,
        "gradePct": -1.1635685715450257,
        "smoothedEle": 211.19796825360697,
        "gradeBand": "descent"
      },
      {
        "lat": 22.958456,
        "lng": 120.643109,
        "ele": 210.25,
        "distanceKm": 76.22804367173671,
        "gradePct": -0.8744625270318398,
        "smoothedEle": 211.1233751508217,
        "gradeBand": "descent"
      },
      {
        "lat": 22.957975,
        "lng": 120.643154,
        "ele": 208.75,
        "distanceKm": 76.28172659089105,
        "gradePct": -0.430337144738112,
        "smoothedEle": 211.25007369163828,
        "gradeBand": "descent"
      },
      {
        "lat": 22.957582698468045,
        "lng": 120.64310852774011,
        "ele": 208.67232088402278,
        "distanceKm": 76.32559634521135,
        "gradePct": -0.07882427147148863,
        "smoothedEle": 211.42805084925666,
        "gradeBand": "descent"
      },
      {
        "lat": 22.957197,
        "lng": 120.643015,
        "ele": 209.5,
        "distanceKm": 76.36954020538137,
        "gradePct": 0.014721627529112671,
        "smoothedEle": 211.29589019555732,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.956653,
        "lng": 120.642838,
        "ele": 212.5,
        "distanceKm": 76.43268676523736,
        "gradePct": -0.03511198315531722,
        "smoothedEle": 211.0641094777759,
        "gradeBand": "descent"
      },
      {
        "lat": 22.956162,
        "lng": 120.642698,
        "ele": 214.25,
        "distanceKm": 76.48913394546062,
        "gradePct": -0.24869567911998658,
        "smoothedEle": 210.78273355962895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.955688,
        "lng": 120.642596,
        "ele": 214.75,
        "distanceKm": 76.5428651485779,
        "gradePct": -0.3208536660685962,
        "smoothedEle": 210.73440778974597,
        "gradeBand": "descent"
      },
      {
        "lat": 22.955127,
        "lng": 120.64254,
        "ele": 210.5,
        "distanceKm": 76.60550855069054,
        "gradePct": -0.12670462563877824,
        "smoothedEle": 210.91045840952597,
        "gradeBand": "descent"
      },
      {
        "lat": 22.954677500000003,
        "lng": 120.6425215,
        "ele": 209.25000000000017,
        "distanceKm": 76.6555266195113,
        "gradePct": 0.09690685160306463,
        "smoothedEle": 211.14407187891072,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.954228,
        "lng": 120.642503,
        "ele": 208,
        "distanceKm": 76.70554468857082,
        "gradePct": 0.16342144086588684,
        "smoothedEle": 211.09481664167,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.953613,
        "lng": 120.642449,
        "ele": 208.75,
        "distanceKm": 76.77415281878133,
        "gradePct": -0.10017453293983039,
        "smoothedEle": 210.6219883947498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.953252,
        "lng": 120.642374,
        "ele": 209.75,
        "distanceKm": 76.81502219390364,
        "gradePct": -0.3689997504447239,
        "smoothedEle": 210.2168931550978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.952894,
        "lng": 120.6422615,
        "ele": 211.24999999999974,
        "distanceKm": 76.85646313399025,
        "gradePct": -0.5833364111328679,
        "smoothedEle": 209.97647682506533,
        "gradeBand": "descent"
      },
      {
        "lat": 22.952536,
        "lng": 120.642149,
        "ele": 212.75,
        "distanceKm": 76.8979040825499,
        "gradePct": -0.577104715215589,
        "smoothedEle": 209.94813128942295,
        "gradeBand": "descent"
      },
      {
        "lat": 22.952052,
        "lng": 120.6420025,
        "ele": 211.49999999999983,
        "distanceKm": 76.95377387717538,
        "gradePct": -0.403863327120726,
        "smoothedEle": 209.95470776642492,
        "gradeBand": "descent"
      },
      {
        "lat": 22.951568,
        "lng": 120.641856,
        "ele": 210.25,
        "distanceKm": 77.00964368620812,
        "gradePct": -0.32331999107533244,
        "smoothedEle": 209.62356467715702,
        "gradeBand": "descent"
      },
      {
        "lat": 22.951244,
        "lng": 120.64182,
        "ele": 209.75,
        "distanceKm": 77.04585897449681,
        "gradePct": -0.4529403335581399,
        "smoothedEle": 209.1321153489511,
        "gradeBand": "descent"
      },
      {
        "lat": 22.950877,
        "lng": 120.64185,
        "ele": 208.5,
        "distanceKm": 77.08678301652961,
        "gradePct": -0.6833375055707522,
        "smoothedEle": 208.5890630678028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.950465,
        "lng": 120.641956,
        "ele": 209.75,
        "distanceKm": 77.13386353659111,
        "gradePct": -1.0250599534348477,
        "smoothedEle": 207.90224419787125,
        "gradeBand": "descent"
      },
      {
        "lat": 22.950004,
        "lng": 120.642119,
        "ele": 208.5,
        "distanceKm": 77.18777311739224,
        "gradePct": -1.2243202064770282,
        "smoothedEle": 207.30455219469206,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9496225,
        "lng": 120.6422465,
        "ele": 205.24999999999946,
        "distanceKm": 77.232157491232,
        "gradePct": -0.7620726860500644,
        "smoothedEle": 207.79390208078007,
        "gradeBand": "descent"
      },
      {
        "lat": 22.949241,
        "lng": 120.642374,
        "ele": 202,
        "distanceKm": 77.27654187589853,
        "gradePct": -0.19228373942425217,
        "smoothedEle": 208.3403930835569,
        "gradeBand": "descent"
      },
      {
        "lat": 22.948743999999998,
        "lng": 120.642531,
        "ele": 203.5,
        "distanceKm": 77.33409653842195,
        "gradePct": 0.5255159989702275,
        "smoothedEle": 208.95069291972337,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.948247,
        "lng": 120.642688,
        "ele": 205,
        "distanceKm": 77.39165121743709,
        "gradePct": 0.8432589830788992,
        "smoothedEle": 209.0338272767221,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.947586,
        "lng": 120.642829,
        "ele": 217,
        "distanceKm": 77.4665557543962,
        "gradePct": 0.10650986655617904,
        "smoothedEle": 208.43045683576145,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.94714,
        "lng": 120.642862,
        "ele": 216.25,
        "distanceKm": 77.51626374377244,
        "gradePct": -0.405550412113834,
        "smoothedEle": 207.95049617909524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.946644,
        "lng": 120.64287,
        "ele": 214,
        "distanceKm": 77.57142258664663,
        "gradePct": -0.7074688450736104,
        "smoothedEle": 207.58967051624893,
        "gradeBand": "descent"
      },
      {
        "lat": 22.94601,
        "lng": 120.642904,
        "ele": 207.25,
        "distanceKm": 77.64200618008293,
        "gradePct": -0.565052906313432,
        "smoothedEle": 207.49810256236216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.945624000000002,
        "lng": 120.64291333333334,
        "ele": 204,
        "distanceKm": 77.68493811974841,
        "gradePct": -0.3158214075322218,
        "smoothedEle": 207.6213211818951,
        "gradeBand": "descent"
      },
      {
        "lat": 22.945238,
        "lng": 120.64292266666666,
        "ele": 200.75,
        "distanceKm": 77.72787005947492,
        "gradePct": -0.3288221659674331,
        "smoothedEle": 207.2169282719305,
        "gradeBand": "descent"
      },
      {
        "lat": 22.944852,
        "lng": 120.642932,
        "ele": 197.5,
        "distanceKm": 77.77080199926175,
        "gradePct": -0.3531897907211551,
        "smoothedEle": 206.88735055322567,
        "gradeBand": "descent"
      },
      {
        "lat": 22.944425666666667,
        "lng": 120.64292433333334,
        "ele": 200.91666666666632,
        "distanceKm": 77.81821466823232,
        "gradePct": -0.4383771995039689,
        "smoothedEle": 206.65221284385535,
        "gradeBand": "descent"
      },
      {
        "lat": 22.943999333333334,
        "lng": 120.64291666666666,
        "ele": 204.33333333333368,
        "distanceKm": 77.86562733724385,
        "gradePct": -0.6277086713919768,
        "smoothedEle": 206.31048011540207,
        "gradeBand": "descent"
      },
      {
        "lat": 22.943573,
        "lng": 120.642909,
        "ele": 207.75,
        "distanceKm": 77.9130400062963,
        "gradePct": -0.6007357841256237,
        "smoothedEle": 206.15514683643443,
        "gradeBand": "descent"
      },
      {
        "lat": 22.943234,
        "lng": 120.642932,
        "ele": 212.25,
        "distanceKm": 77.95080864134823,
        "gradePct": -0.5166382025344161,
        "smoothedEle": 206.0075581352095,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9428335,
        "lng": 120.6429875,
        "ele": 212.62500000000006,
        "distanceKm": 77.99570343110226,
        "gradePct": -0.523002707274976,
        "smoothedEle": 205.71784933533561,
        "gradeBand": "descent"
      },
      {
        "lat": 22.942433,
        "lng": 120.643043,
        "ele": 213,
        "distanceKm": 78.04059822298454,
        "gradePct": -0.5549782854305142,
        "smoothedEle": 205.38092400890895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.942045,
        "lng": 120.6431255,
        "ele": 209.75,
        "distanceKm": 78.08456122896803,
        "gradePct": -0.7354654591904686,
        "smoothedEle": 204.77751802383656,
        "gradeBand": "descent"
      },
      {
        "lat": 22.941657,
        "lng": 120.643208,
        "ele": 206.5,
        "distanceKm": 78.12852423960503,
        "gradePct": -1.0714476111842108,
        "smoothedEle": 203.9517437910971,
        "gradeBand": "descent"
      },
      {
        "lat": 22.941221,
        "lng": 120.643326,
        "ele": 202.08333333333377,
        "distanceKm": 78.17848838988064,
        "gradePct": -1.5373166919040167,
        "smoothedEle": 202.7543056561329,
        "gradeBand": "descent"
      },
      {
        "lat": 22.940785,
        "lng": 120.643444,
        "ele": 197.66666666666623,
        "distanceKm": 78.22845254956788,
        "gradePct": -2.1703792690401515,
        "smoothedEle": 201.13131602101518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.940349,
        "lng": 120.643562,
        "ele": 193.25,
        "distanceKm": 78.27841671866736,
        "gradePct": -2.6773806057551655,
        "smoothedEle": 199.50709213489617,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939924018435647,
        "lng": 120.64365866754488,
        "ele": 193.93701850456733,
        "distanceKm": 78.326698220541,
        "gradePct": -2.9588100799058457,
        "smoothedEle": 198.06842245362972,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93949903687129,
        "lng": 120.64375533508976,
        "ele": 194.62403700913447,
        "distanceKm": 78.37497972878624,
        "gradePct": -2.910319213299432,
        "smoothedEle": 197.01775561238296,
        "gradeBand": "descent"
      },
      {
        "lat": 22.939074055306936,
        "lng": 120.64385200263463,
        "ele": 195.3110555137018,
        "distanceKm": 78.42326124340191,
        "gradePct": -2.373208318645945,
        "smoothedEle": 196.55352898047482,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93864907374258,
        "lng": 120.64394867017951,
        "ele": 195.99807401826916,
        "distanceKm": 78.4715427643889,
        "gradePct": -1.4691986995722819,
        "smoothedEle": 196.7921516836483,
        "gradeBand": "descent"
      },
      {
        "lat": 22.938224092178224,
        "lng": 120.64404533772439,
        "ele": 196.6850925228365,
        "distanceKm": 78.51982429174721,
        "gradePct": -0.29625027861112163,
        "smoothedEle": 197.68074802159092,
        "gradeBand": "descent"
      },
      {
        "lat": 22.93779911061387,
        "lng": 120.64414200526927,
        "ele": 197.37211102740363,
        "distanceKm": 78.56810582547598,
        "gradePct": 0.8798812938476761,
        "smoothedEle": 198.92710305234408,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.937374,
        "lng": 120.644238,
        "ele": 197.75,
        "distanceKm": 78.61638733570447,
        "gradePct": 1.7001074381300088,
        "smoothedEle": 200.0198364605778,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93698,
        "lng": 120.644339,
        "ele": 200.75,
        "distanceKm": 78.66140248308463,
        "gradePct": 2.1726886287545115,
        "smoothedEle": 201.08741243102472,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.93647237104454,
        "lng": 120.64447304226597,
        "ele": 204.0903407829993,
        "distanceKm": 78.71949333619054,
        "gradePct": 2.29126463586861,
        "smoothedEle": 202.2571862288616,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935969,
        "lng": 120.644629,
        "ele": 207,
        "distanceKm": 78.77769961092486,
        "gradePct": 1.8890585464899787,
        "smoothedEle": 202.92235191733775,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935555,
        "lng": 120.644694,
        "ele": 205.25,
        "distanceKm": 78.8242131083763,
        "gradePct": 1.4213445499383337,
        "smoothedEle": 203.04812101755837,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.935202913332354,
        "lng": 120.64464071840322,
        "ele": 205.73375462370367,
        "distanceKm": 78.86374179883833,
        "gradePct": 0.8862050978305848,
        "smoothedEle": 202.90692935911,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.934861,
        "lng": 120.644527,
        "ele": 207.25,
        "distanceKm": 78.90350439127036,
        "gradePct": 0.2873107168821848,
        "smoothedEle": 202.50983874974764,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.934327,
        "lng": 120.644294,
        "ele": 204.5,
        "distanceKm": 78.96749725027624,
        "gradePct": -0.8055644389297241,
        "smoothedEle": 201.19463319970762,
        "gradeBand": "descent"
      },
      {
        "lat": 22.933725,
        "lng": 120.644311,
        "ele": 199.25,
        "distanceKm": 79.03445932248434,
        "gradePct": -1.9176381409991177,
        "smoothedEle": 199.17624650916247,
        "gradeBand": "descent"
      },
      {
        "lat": 22.933211,
        "lng": 120.644379,
        "ele": 196,
        "distanceKm": 79.09203624972886,
        "gradePct": -2.636280012663539,
        "smoothedEle": 197.3518057467909,
        "gradeBand": "descent"
      },
      {
        "lat": 22.932895,
        "lng": 120.644395,
        "ele": 194,
        "distanceKm": 79.12721207674491,
        "gradePct": -2.886708204007478,
        "smoothedEle": 196.24917298298988,
        "gradeBand": "descent"
      },
      {
        "lat": 22.932487894908654,
        "lng": 120.6443237074509,
        "ele": 192.33408166771883,
        "distanceKm": 79.17306511838844,
        "gradePct": -3.2044501792974502,
        "smoothedEle": 194.617904837561,
        "gradeBand": "descent"
      },
      {
        "lat": 22.932081,
        "lng": 120.644251,
        "ele": 191,
        "distanceKm": 79.21891839598078,
        "gradePct": -3.369720274412723,
        "smoothedEle": 192.905244259499,
        "gradeBand": "descent"
      },
      {
        "lat": 22.931701500000003,
        "lng": 120.644175,
        "ele": 190.3750000000001,
        "distanceKm": 79.26182865621088,
        "gradePct": -3.42891200786766,
        "smoothedEle": 191.45117009773068,
        "gradeBand": "descent"
      },
      {
        "lat": 22.931322,
        "lng": 120.644099,
        "ele": 189.75,
        "distanceKm": 79.30473892039737,
        "gradePct": -3.3214960242590577,
        "smoothedEle": 190.31063170640437,
        "gradeBand": "descent"
      },
      {
        "lat": 22.930986,
        "lng": 120.64402,
        "ele": 190.25,
        "distanceKm": 79.3429663544793,
        "gradePct": -3.109640763359577,
        "smoothedEle": 189.4694171561764,
        "gradeBand": "descent"
      },
      {
        "lat": 22.930518,
        "lng": 120.643908,
        "ele": 189.25,
        "distanceKm": 79.39625465091066,
        "gradePct": -2.6332934193080795,
        "smoothedEle": 188.48516839612702,
        "gradeBand": "descent"
      },
      {
        "lat": 22.930034,
        "lng": 120.643758,
        "ele": 186.5,
        "distanceKm": 79.45222241436771,
        "gradePct": -2.0530866513582704,
        "smoothedEle": 187.67051773058876,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9295862,
        "lng": 120.64358560000001,
        "ele": 186.14999999999998,
        "distanceKm": 79.50505296460851,
        "gradePct": -1.6697390592417964,
        "smoothedEle": 186.96424288187498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9291384,
        "lng": 120.6434132,
        "ele": 185.79999999999995,
        "distanceKm": 79.55788353435689,
        "gradePct": -1.5170809810003971,
        "smoothedEle": 186.15973098377304,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9286906,
        "lng": 120.6432408,
        "ele": 185.45000000000005,
        "distanceKm": 79.61071412361159,
        "gradePct": -1.5220442790613118,
        "smoothedEle": 185.23061191269272,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9282428,
        "lng": 120.64306839999999,
        "ele": 185.10000000000002,
        "distanceKm": 79.66354473237325,
        "gradePct": -1.5828765513144192,
        "smoothedEle": 184.3534001541847,
        "gradeBand": "descent"
      },
      {
        "lat": 22.927795,
        "lng": 120.642896,
        "ele": 184.75,
        "distanceKm": 79.71637536064063,
        "gradePct": -1.4995652201286802,
        "smoothedEle": 183.792693284182,
        "gradeBand": "descent"
      },
      {
        "lat": 22.927449,
        "lng": 120.642768,
        "ele": 183,
        "distanceKm": 79.75702070066514,
        "gradePct": -1.3825663302864457,
        "smoothedEle": 183.4077376850205,
        "gradeBand": "descent"
      },
      {
        "lat": 22.927125811529738,
        "lng": 120.64265115040948,
        "ele": 182.12275903509249,
        "distanceKm": 79.79489768892869,
        "gradePct": -1.231378183806836,
        "smoothedEle": 183.0460154389529,
        "gradeBand": "descent"
      },
      {
        "lat": 22.926809,
        "lng": 120.642515,
        "ele": 181.25,
        "distanceKm": 79.83278461318295,
        "gradePct": -1.0943161545055191,
        "smoothedEle": 182.67551604360102,
        "gradeBand": "descent"
      },
      {
        "lat": 22.926489,
        "lng": 120.642393,
        "ele": 181,
        "distanceKm": 79.87049685331841,
        "gradePct": -0.9816532051896874,
        "smoothedEle": 182.31630885608237,
        "gradeBand": "descent"
      },
      {
        "lat": 22.925903,
        "lng": 120.642151,
        "ele": 181.75,
        "distanceKm": 79.94021121912638,
        "gradePct": -0.9493648390115517,
        "smoothedEle": 181.66821208878002,
        "gradeBand": "descent"
      },
      {
        "lat": 22.925423,
        "lng": 120.641909,
        "ele": 181.5,
        "distanceKm": 79.99905827519345,
        "gradePct": -0.9078489803139873,
        "smoothedEle": 181.18963075788653,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9250895,
        "lng": 120.64173000000001,
        "ele": 181.12500000000006,
        "distanceKm": 80.04042546845385,
        "gradePct": -0.8129638424712223,
        "smoothedEle": 180.97680959711494,
        "gradeBand": "descent"
      },
      {
        "lat": 22.924756,
        "lng": 120.641551,
        "ele": 180.75,
        "distanceKm": 80.08179268171345,
        "gradePct": -0.6901966440897853,
        "smoothedEle": 180.83090435849167,
        "gradeBand": "descent"
      },
      {
        "lat": 22.924357861175572,
        "lng": 120.64133813114893,
        "ele": 180.6198472078718,
        "distanceKm": 80.13114031931188,
        "gradePct": -0.5237375477002569,
        "smoothedEle": 180.70506424470236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.923960688940458,
        "lng": 120.64112310491915,
        "ele": 180.44587776629743,
        "distanceKm": 80.18048978102334,
        "gradePct": -0.3808830967385521,
        "smoothedEle": 180.57887525630355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.923563516705343,
        "lng": 120.64090807868936,
        "ele": 180.27190832472306,
        "distanceKm": 80.22983927154297,
        "gradePct": -0.2853342243979386,
        "smoothedEle": 180.460603792196,
        "gradeBand": "descent"
      },
      {
        "lat": 22.92316634447023,
        "lng": 120.64069305245957,
        "ele": 180.09793888314874,
        "distanceKm": 80.27918879087102,
        "gradePct": -0.24414248677342348,
        "smoothedEle": 180.35180350165894,
        "gradeBand": "descent"
      },
      {
        "lat": 22.922769172235114,
        "lng": 120.64047802622979,
        "ele": 179.92396944157437,
        "distanceKm": 80.32853833900577,
        "gradePct": -0.25311556734096635,
        "smoothedEle": 180.2054683516193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.922372,
        "lng": 120.640263,
        "ele": 179.75,
        "distanceKm": 80.37788791594748,
        "gradePct": -0.2887063443608143,
        "smoothedEle": 180.00811566389717,
        "gradeBand": "descent"
      },
      {
        "lat": 22.921898,
        "lng": 120.640011,
        "ele": 180.5,
        "distanceKm": 80.43657393532419,
        "gradePct": -0.3809379683268847,
        "smoothedEle": 179.68388002346518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.921387,
        "lng": 120.639869,
        "ele": 180.5,
        "distanceKm": 80.49522618930375,
        "gradePct": -0.5166952461153966,
        "smoothedEle": 179.27085765796897,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920983,
        "lng": 120.63989633333334,
        "ele": 179.75,
        "distanceKm": 80.5402361375496,
        "gradePct": -0.5874216861563527,
        "smoothedEle": 178.98384459888342,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920579,
        "lng": 120.63992366666666,
        "ele": 179,
        "distanceKm": 80.58524608631446,
        "gradePct": -0.5807773982122544,
        "smoothedEle": 178.80590755503673,
        "gradeBand": "descent"
      },
      {
        "lat": 22.920175,
        "lng": 120.639951,
        "ele": 178.25,
        "distanceKm": 80.63025603559849,
        "gradePct": -0.49619980303402406,
        "smoothedEle": 178.7263863163745,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919843,
        "lng": 120.639958,
        "ele": 177.5,
        "distanceKm": 80.66717976270556,
        "gradePct": -0.3833006475825388,
        "smoothedEle": 178.70175604391315,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919417,
        "lng": 120.639916,
        "ele": 176.75,
        "distanceKm": 80.71474377069998,
        "gradePct": -0.22736326242381852,
        "smoothedEle": 178.6916741861396,
        "gradeBand": "descent"
      },
      {
        "lat": 22.919046,
        "lng": 120.639821,
        "ele": 176.75,
        "distanceKm": 80.75712897904796,
        "gradePct": -0.09562293773438887,
        "smoothedEle": 178.7258165483428,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9186,
        "lng": 120.639664,
        "ele": 178,
        "distanceKm": 80.80926357287149,
        "gradePct": 0.04805755630452711,
        "smoothedEle": 178.85958982088746,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.918102,
        "lng": 120.639505,
        "ele": 179,
        "distanceKm": 80.86698348225816,
        "gradePct": 0.2300816454069657,
        "smoothedEle": 179.16205026519583,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917718169626323,
        "lng": 120.63934233704117,
        "ele": 179.83696692640686,
        "distanceKm": 80.91279972434914,
        "gradePct": 0.38302452812502874,
        "smoothedEle": 179.45813531024604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.917342,
        "lng": 120.639159,
        "ele": 180.75,
        "distanceKm": 80.95864921518087,
        "gradePct": 0.5082007300875587,
        "smoothedEle": 179.74611881501943,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91692891355345,
        "lng": 120.63891830360575,
        "ele": 181.03886842037375,
        "distanceKm": 81.01077948116173,
        "gradePct": 0.5710594126757859,
        "smoothedEle": 180.00965221891389,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91651794268598,
        "lng": 120.63867308530392,
        "ele": 181.3799230821729,
        "distanceKm": 81.06292409918622,
        "gradePct": 0.47073261546744805,
        "smoothedEle": 180.08224375782405,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.916106971818515,
        "lng": 120.63842786700208,
        "ele": 181.72097774397196,
        "distanceKm": 81.1150687538918,
        "gradePct": 0.22790563308009512,
        "smoothedEle": 179.92819849214786,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.91569579293308,
        "lng": 120.63818306278995,
        "ele": 180.72618066893807,
        "distanceKm": 81.16721331174675,
        "gradePct": -0.09973346048954426,
        "smoothedEle": 179.58994585152973,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91528459469981,
        "lng": 120.63793829709246,
        "ele": 179.60713550170348,
        "distanceKm": 81.21935789601977,
        "gradePct": -0.445732239850863,
        "smoothedEle": 179.13012991770623,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91487339646654,
        "lng": 120.63769353139497,
        "ele": 178.4880903344692,
        "distanceKm": 81.27150251685663,
        "gradePct": -0.7301193796331129,
        "smoothedEle": 178.596662714932,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91446219823327,
        "lng": 120.63744876569748,
        "ele": 177.3690451672346,
        "distanceKm": 81.32364717425679,
        "gradePct": -0.9659715649327016,
        "smoothedEle": 177.94060864745438,
        "gradeBand": "descent"
      },
      {
        "lat": 22.914051,
        "lng": 120.637204,
        "ele": 176.25,
        "distanceKm": 81.37579186821971,
        "gradePct": -1.198734182670617,
        "smoothedEle": 177.11683095432974,
        "gradeBand": "descent"
      },
      {
        "lat": 22.913669333333335,
        "lng": 120.63697466666666,
        "ele": 176.08333333333331,
        "distanceKm": 81.42429771685573,
        "gradePct": -1.3866685919963773,
        "smoothedEle": 176.30625573946028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.913287666666665,
        "lng": 120.63674533333334,
        "ele": 175.91666666666669,
        "distanceKm": 81.4728035975179,
        "gradePct": -1.5421392753587706,
        "smoothedEle": 175.4960147161732,
        "gradeBand": "descent"
      },
      {
        "lat": 22.912906,
        "lng": 120.636516,
        "ele": 175.75,
        "distanceKm": 81.52130951020646,
        "gradePct": -1.62743781412002,
        "smoothedEle": 174.7151441628497,
        "gradeBand": "descent"
      },
      {
        "lat": 22.912510942674437,
        "lng": 120.63628815634947,
        "ele": 174.30491453106305,
        "distanceKm": 81.57105166583678,
        "gradePct": -1.6125596757578562,
        "smoothedEle": 173.96659693988653,
        "gradeBand": "descent"
      },
      {
        "lat": 22.912117295116293,
        "lng": 120.63605743756631,
        "ele": 173.28660968737526,
        "distanceKm": 81.62079468616405,
        "gradePct": -1.5467005587720088,
        "smoothedEle": 173.27139333292646,
        "gradeBand": "descent"
      },
      {
        "lat": 22.911723647558144,
        "lng": 120.63582671878316,
        "ele": 172.2683048436878,
        "distanceKm": 81.6705377390899,
        "gradePct": -1.4696396255871282,
        "smoothedEle": 172.5945843077839,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91133,
        "lng": 120.635596,
        "ele": 171.25,
        "distanceKm": 81.72028082461455,
        "gradePct": -1.4247667091655896,
        "smoothedEle": 171.88217099960562,
        "gradeBand": "descent"
      },
      {
        "lat": 22.910953954237634,
        "lng": 120.63536850193262,
        "ele": 170.73237059139538,
        "distanceKm": 81.76814922867366,
        "gradePct": -1.4238781180752451,
        "smoothedEle": 171.1625181690719,
        "gradeBand": "descent"
      },
      {
        "lat": 22.910576928271585,
        "lng": 120.63514291342321,
        "ele": 170.22287604268246,
        "distanceKm": 81.81601819255596,
        "gradePct": -1.4409050183720433,
        "smoothedEle": 170.4563391056028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.91019990230554,
        "lng": 120.63491732491379,
        "ele": 169.71338149396956,
        "distanceKm": 81.86388718745494,
        "gradePct": -1.447471944942685,
        "smoothedEle": 169.79012849822257,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90982287633949,
        "lng": 120.63469173640438,
        "ele": 169.20388694525667,
        "distanceKm": 81.91175621336947,
        "gradePct": -1.4366265254631054,
        "smoothedEle": 169.13100620343852,
        "gradeBand": "descent"
      },
      {
        "lat": 22.909445850373444,
        "lng": 120.63446614789497,
        "ele": 168.69439239654378,
        "distanceKm": 81.95962527029916,
        "gradePct": -1.405847496308405,
        "smoothedEle": 168.4789722320198,
        "gradeBand": "descent"
      },
      {
        "lat": 22.909068824407395,
        "lng": 120.63424055938555,
        "ele": 168.18489784783088,
        "distanceKm": 82.00749435824497,
        "gradePct": -1.3797236114100802,
        "smoothedEle": 167.8226383548747,
        "gradeBand": "descent"
      },
      {
        "lat": 22.908691773915276,
        "lng": 120.63401501971667,
        "ele": 167.61758451552535,
        "distanceKm": 82.05536345135974,
        "gradePct": -1.3718347321706208,
        "smoothedEle": 167.1650870396106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.908314580436457,
        "lng": 120.63378976478751,
        "ele": 166.71318838664402,
        "distanceKm": 82.10323243822543,
        "gradePct": -1.3640006356645762,
        "smoothedEle": 166.52037122745017,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907937386957638,
        "lng": 120.63356450985835,
        "ele": 165.8087922577627,
        "distanceKm": 82.15110145602715,
        "gradePct": -1.3422757045900178,
        "smoothedEle": 165.9105253970238,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90756019347882,
        "lng": 120.63333925492917,
        "ele": 164.90439612888133,
        "distanceKm": 82.19897050476517,
        "gradePct": -1.2980057879803113,
        "smoothedEle": 165.3434974786221,
        "gradeBand": "descent"
      },
      {
        "lat": 22.907183,
        "lng": 120.633114,
        "ele": 164,
        "distanceKm": 82.24683958443768,
        "gradePct": -1.2314435841160043,
        "smoothedEle": 164.81928752733853,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906804880893798,
        "lng": 120.63289589356138,
        "ele": 163.61780413793574,
        "distanceKm": 82.2944509912864,
        "gradePct": -1.1484157763318572,
        "smoothedEle": 164.34181119181542,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906426749800243,
        "lng": 120.63267781173077,
        "ele": 163.24766848825945,
        "distanceKm": 82.34206242189627,
        "gradePct": -1.0932694825832514,
        "smoothedEle": 163.83914269636705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.906048312350183,
        "lng": 120.63246035879808,
        "ele": 163.18575136619458,
        "distanceKm": 82.38967379973828,
        "gradePct": -1.05141194563707,
        "smoothedEle": 163.3507967554152,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90566987490012,
        "lng": 120.6322429058654,
        "ele": 163.1238342441297,
        "distanceKm": 82.43728520666009,
        "gradePct": -0.992532308784533,
        "smoothedEle": 162.93885203453223,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90529143745006,
        "lng": 120.6320254529327,
        "ele": 163.06191712206487,
        "distanceKm": 82.48489664266133,
        "gradePct": -0.9505404509368709,
        "smoothedEle": 162.53654714711425,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904913,
        "lng": 120.631808,
        "ele": 163,
        "distanceKm": 82.53250810774055,
        "gradePct": -0.9032423847540811,
        "smoothedEle": 162.13352976919123,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904556,
        "lng": 120.631507,
        "ele": 161.75,
        "distanceKm": 82.58277099739955,
        "gradePct": -0.8499619436439496,
        "smoothedEle": 161.72167433735797,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904322,
        "lng": 120.631249,
        "ele": 161.25,
        "distanceKm": 82.61985707413633,
        "gradePct": -0.8305999981119522,
        "smoothedEle": 161.42844420455958,
        "gradeBand": "descent"
      },
      {
        "lat": 22.904047,
        "lng": 120.63082,
        "ele": 161.25,
        "distanceKm": 82.67339139607016,
        "gradePct": -0.7973722132758383,
        "smoothedEle": 161.03901921565958,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903724,
        "lng": 120.630207,
        "ele": 159.75,
        "distanceKm": 82.74572648770571,
        "gradePct": -0.7432479721963184,
        "smoothedEle": 160.53872207381053,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903501,
        "lng": 120.629852,
        "ele": 159.5,
        "distanceKm": 82.7897386634172,
        "gradePct": -0.7085562487115352,
        "smoothedEle": 160.24947028505972,
        "gradeBand": "descent"
      },
      {
        "lat": 22.903132,
        "lng": 120.629549,
        "ele": 159.25,
        "distanceKm": 82.84118543256503,
        "gradePct": -0.6929591890123036,
        "smoothedEle": 159.88737684090634,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902831051968843,
        "lng": 120.62922647116773,
        "ele": 159.52051406950466,
        "distanceKm": 82.88820918742229,
        "gradePct": -0.6953117921545883,
        "smoothedEle": 159.5459101226662,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902559034645893,
        "lng": 120.62887398077848,
        "ele": 159.59700937966977,
        "distanceKm": 82.93530987594468,
        "gradePct": -0.7336104569997455,
        "smoothedEle": 159.1435464282134,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902287017322948,
        "lng": 120.62852149038925,
        "ele": 159.67350468983489,
        "distanceKm": 82.98241061997744,
        "gradePct": -0.7707590893842738,
        "smoothedEle": 158.75611263547944,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902015,
        "lng": 120.628169,
        "ele": 159.75,
        "distanceKm": 83.02951141952275,
        "gradePct": -0.7808719862784304,
        "smoothedEle": 158.40779708700865,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901662,
        "lng": 120.627883,
        "ele": 158.25,
        "distanceKm": 83.07849001582068,
        "gradePct": -0.7786352044229293,
        "smoothedEle": 158.05921624776346,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90131227666142,
        "lng": 120.62776239960013,
        "ele": 157.62438780566282,
        "distanceKm": 83.11929244633076,
        "gradePct": -0.75357915868641,
        "smoothedEle": 157.77321906506393,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900957,
        "lng": 120.62766,
        "ele": 157,
        "distanceKm": 83.1601661789152,
        "gradePct": -0.7545530006864887,
        "smoothedEle": 157.42998141178717,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9005855,
        "lng": 120.62756350000001,
        "ele": 156.5,
        "distanceKm": 83.20264129839562,
        "gradePct": -0.803970454526339,
        "smoothedEle": 156.99856365358747,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900214,
        "lng": 120.627467,
        "ele": 156,
        "distanceKm": 83.24511642417681,
        "gradePct": -0.9320685112902973,
        "smoothedEle": 156.43259919233503,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8996815,
        "lng": 120.62731600000001,
        "ele": 155.87500000000003,
        "distanceKm": 83.30631462397568,
        "gradePct": -1.1950067728916567,
        "smoothedEle": 155.47417119423494,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899149,
        "lng": 120.627165,
        "ele": 155.75,
        "distanceKm": 83.36751283912156,
        "gradePct": -1.3881645129956952,
        "smoothedEle": 154.5790327092592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898658980969426,
        "lng": 120.6270345839762,
        "ele": 154.5513233107312,
        "distanceKm": 83.42361424090164,
        "gradePct": -1.4387670693634727,
        "smoothedEle": 153.84157324750427,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898169,
        "lng": 120.626904,
        "ele": 153,
        "distanceKm": 83.4797156430479,
        "gradePct": -1.3341170133307778,
        "smoothedEle": 153.2225051079034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897671,
        "lng": 120.626697,
        "ele": 151.5,
        "distanceKm": 83.53901151081594,
        "gradePct": -1.1968129116453212,
        "smoothedEle": 152.60229217875815,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897315723550467,
        "lng": 120.62645879266285,
        "ele": 150.69708919178208,
        "distanceKm": 83.58544448210651,
        "gradePct": -1.126840227290499,
        "smoothedEle": 152.08963871875088,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896972,
        "lng": 120.626201,
        "ele": 150.5,
        "distanceKm": 83.63189988539146,
        "gradePct": -1.0955777149373476,
        "smoothedEle": 151.55898733062793,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896632,
        "lng": 120.625977,
        "ele": 151,
        "distanceKm": 83.67612429308299,
        "gradePct": -1.1701298148803094,
        "smoothedEle": 150.92187533152207,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896238,
        "lng": 120.625811,
        "ele": 151,
        "distanceKm": 83.72311928194672,
        "gradePct": -1.243669130548252,
        "smoothedEle": 150.2811807761028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89582269866984,
        "lng": 120.62570648281928,
        "ele": 150.63761343070286,
        "distanceKm": 83.77052354808737,
        "gradePct": -1.2650956363607653,
        "smoothedEle": 149.72418530877746,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89540484933492,
        "lng": 120.62561424140964,
        "ele": 150.31880671535137,
        "distanceKm": 83.81793735447486,
        "gradePct": -1.1916200556668715,
        "smoothedEle": 149.335238600031,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894987,
        "lng": 120.625522,
        "ele": 150,
        "distanceKm": 83.86535116666147,
        "gradePct": -1.031866929388968,
        "smoothedEle": 149.0133428303047,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894892,
        "lng": 120.625907,
        "ele": 147.5,
        "distanceKm": 83.90617892539268,
        "gradePct": -0.8991951885618491,
        "smoothedEle": 148.71374255948515,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894703,
        "lng": 120.626294,
        "ele": 147,
        "distanceKm": 83.95104749865227,
        "gradePct": -0.8320285668859834,
        "smoothedEle": 148.2889698413772,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894444,
        "lng": 120.626722,
        "ele": 146.75,
        "distanceKm": 84.00350284910681,
        "gradePct": -0.8527659501278486,
        "smoothedEle": 147.74811637372986,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894264,
        "lng": 120.627265,
        "ele": 147.5,
        "distanceKm": 84.06261687128226,
        "gradePct": -0.9568201022166397,
        "smoothedEle": 147.11826595320494,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893934,
        "lng": 120.627762,
        "ele": 147,
        "distanceKm": 84.12537324714334,
        "gradePct": -1.0565066170794488,
        "smoothedEle": 146.41901585351388,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89371153485117,
        "lng": 120.62811697611812,
        "ele": 146.33990558140707,
        "distanceKm": 84.16935209044728,
        "gradePct": -1.0173768738014102,
        "smoothedEle": 146.0654822113313,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893477,
        "lng": 120.628463,
        "ele": 146,
        "distanceKm": 84.21335769274518,
        "gradePct": -0.934037832253325,
        "smoothedEle": 145.7750389316177,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893141,
        "lng": 120.628395,
        "ele": 145.5,
        "distanceKm": 84.2513630313534,
        "gradePct": -0.830613796232728,
        "smoothedEle": 145.5769462193296,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892803,
        "lng": 120.6283145,
        "ele": 145.125,
        "distanceKm": 84.2898409633035,
        "gradePct": -0.7278856668351107,
        "smoothedEle": 145.3591557348612,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892465,
        "lng": 120.628234,
        "ele": 144.75,
        "distanceKm": 84.32831889965586,
        "gradePct": -0.648560065989107,
        "smoothedEle": 145.09821644343018,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892383,
        "lng": 120.628234,
        "ele": 144.5,
        "distanceKm": 84.33743689623529,
        "gradePct": -0.6427479769678166,
        "smoothedEle": 145.03654359276604,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892255,
        "lng": 120.628401,
        "ele": 144.5,
        "distanceKm": 84.3596905848544,
        "gradePct": -0.6195216588975453,
        "smoothedEle": 144.9041050394512,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892227,
        "lng": 120.628684,
        "ele": 144.25,
        "distanceKm": 84.38884700829688,
        "gradePct": -0.5984150377507035,
        "smoothedEle": 144.73998288504552,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892192,
        "lng": 120.628756,
        "ele": 144,
        "distanceKm": 84.39718631106406,
        "gradePct": -0.593827823855611,
        "smoothedEle": 144.694116719826,
        "gradeBand": "descent"
      },
      {
        "lat": 22.892135,
        "lng": 120.628794,
        "ele": 144,
        "distanceKm": 84.40462433506175,
        "gradePct": -0.5849429924733075,
        "smoothedEle": 144.662794358583,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891964,
        "lng": 120.628825,
        "ele": 143.75,
        "distanceKm": 84.42390204221303,
        "gradePct": -0.5689310666902178,
        "smoothedEle": 144.58221718303867,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891884,
        "lng": 120.628676,
        "ele": 143.75,
        "distanceKm": 84.44156828611595,
        "gradePct": -0.5504659837215151,
        "smoothedEle": 144.52706675454309,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891903,
        "lng": 120.628346,
        "ele": 144.25,
        "distanceKm": 84.47543858577852,
        "gradePct": -0.4765619020334743,
        "smoothedEle": 144.48755140493677,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891926391484446,
        "lng": 120.6278951840139,
        "ele": 144.05210513815834,
        "distanceKm": 84.52169218926153,
        "gradePct": -0.28355506515253687,
        "smoothedEle": 144.57604555048388,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891976260989633,
        "lng": 120.62744345600926,
        "ele": 144.11807009210557,
        "distanceKm": 84.56829708847971,
        "gradePct": 0.0035900513499881924,
        "smoothedEle": 144.8628389423053,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892026130494816,
        "lng": 120.62699172800464,
        "ele": 144.1840350460528,
        "distanceKm": 84.61490197081056,
        "gradePct": 0.46919522581718137,
        "smoothedEle": 145.5582262335872,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892076,
        "lng": 120.62654,
        "ele": 144.25,
        "distanceKm": 84.66150683625698,
        "gradePct": 1.2403243809507354,
        "smoothedEle": 146.9844538746134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892083333333332,
        "lng": 120.62610833333333,
        "ele": 145.4166666666668,
        "distanceKm": 84.70573310711926,
        "gradePct": 1.944105523895275,
        "smoothedEle": 148.43372307803935,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892090666666668,
        "lng": 120.62567666666668,
        "ele": 146.5833333333332,
        "distanceKm": 84.7499593755907,
        "gradePct": 2.5037876577905607,
        "smoothedEle": 149.7575691500564,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892098,
        "lng": 120.625245,
        "ele": 147.75,
        "distanceKm": 84.79418564167423,
        "gradePct": 2.7693913251051363,
        "smoothedEle": 150.7879023850159,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892007,
        "lng": 120.625084,
        "ele": 149,
        "distanceKm": 84.81353476325201,
        "gradePct": 2.81146081499472,
        "smoothedEle": 151.16074788157445,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89182,
        "lng": 120.624996,
        "ele": 149.75,
        "distanceKm": 84.83619816652075,
        "gradePct": 2.638385615846394,
        "smoothedEle": 151.4867153209079,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891582,
        "lng": 120.62481,
        "ele": 158.75,
        "distanceKm": 84.86880794219474,
        "gradePct": 2.3168906124112665,
        "smoothedEle": 151.8574880995248,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891241,
        "lng": 120.624737,
        "ele": 160.25,
        "distanceKm": 84.90745581853615,
        "gradePct": 1.7675462323014448,
        "smoothedEle": 152.02038228840877,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890698,
        "lng": 120.624635,
        "ele": 160,
        "distanceKm": 84.96873216034584,
        "gradePct": 1.1857813915318163,
        "smoothedEle": 152.56647891623234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890349,
        "lng": 120.6245795,
        "ele": 156.87500000000057,
        "distanceKm": 85.00795349009482,
        "gradePct": 0.8886397054031522,
        "smoothedEle": 152.83047964204653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89,
        "lng": 120.624524,
        "ele": 153.75,
        "distanceKm": 85.0471748219633,
        "gradePct": 0.6371632049890417,
        "smoothedEle": 152.88584617845538,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889596,
        "lng": 120.624409,
        "ele": 150.25,
        "distanceKm": 85.09361660131128,
        "gradePct": 0.47360670243481484,
        "smoothedEle": 152.90926575957857,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889273,
        "lng": 120.624161,
        "ele": 146.25,
        "distanceKm": 85.1376094492003,
        "gradePct": 0.035260980993256856,
        "smoothedEle": 152.35963432689806,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889018,
        "lng": 120.623923,
        "ele": 148.75,
        "distanceKm": 85.17500470380784,
        "gradePct": -0.5388530810822297,
        "smoothedEle": 151.53099355681138,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888733,
        "lng": 120.623629,
        "ele": 150.5,
        "distanceKm": 85.21872362160512,
        "gradePct": -1.1199160368329455,
        "smoothedEle": 150.6058511540312,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888373,
        "lng": 120.623295,
        "ele": 148,
        "distanceKm": 85.27138367342151,
        "gradePct": -1.4517607767990277,
        "smoothedEle": 149.99453262309905,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8880585,
        "lng": 120.6229525,
        "ele": 149.375,
        "distanceKm": 85.32092124767837,
        "gradePct": -1.3464583822482106,
        "smoothedEle": 149.87521418290908,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887744,
        "lng": 120.62261,
        "ele": 150.75,
        "distanceKm": 85.37045887952058,
        "gradePct": -0.7922854712694972,
        "smoothedEle": 150.0471534523856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887468,
        "lng": 120.622154,
        "ele": 148.5,
        "distanceKm": 85.42635131652233,
        "gradePct": 0.04798174968692524,
        "smoothedEle": 150.61326648282136,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887337,
        "lng": 120.621777,
        "ele": 150.5,
        "distanceKm": 85.46762725200102,
        "gradePct": 0.48143220916855284,
        "smoothedEle": 151.0010044809492,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887197,
        "lng": 120.621406,
        "ele": 153.25,
        "distanceKm": 85.50869749399764,
        "gradePct": 0.7387143783214648,
        "smoothedEle": 151.38208562511608,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886913,
        "lng": 120.620969,
        "ele": 152.75,
        "distanceKm": 85.56348179751208,
        "gradePct": 0.7902112902410637,
        "smoothedEle": 151.60335940524533,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886453,
        "lng": 120.620609,
        "ele": 150.5,
        "distanceKm": 85.62654008426112,
        "gradePct": 0.1476897997299581,
        "smoothedEle": 150.91041932919381,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886148,
        "lng": 120.620388,
        "ele": 153.75,
        "distanceKm": 85.66731685154903,
        "gradePct": -0.4028703801077511,
        "smoothedEle": 150.1923478800997,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885836,
        "lng": 120.62026,
        "ele": 154.5,
        "distanceKm": 85.70440504462401,
        "gradePct": -0.9328518636152704,
        "smoothedEle": 149.4765532667633,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885425,
        "lng": 120.620233,
        "ele": 154.25,
        "distanceKm": 85.75018984646057,
        "gradePct": -1.7090554427761517,
        "smoothedEle": 148.13156233467674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884801,
        "lng": 120.620386,
        "ele": 146.75,
        "distanceKm": 85.82132383694288,
        "gradePct": -2.691998257786726,
        "smoothedEle": 145.58374354020128,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884431,
        "lng": 120.620401,
        "ele": 142.75,
        "distanceKm": 85.8624947031295,
        "gradePct": -2.9249852756332198,
        "smoothedEle": 144.42729448469584,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88387,
        "lng": 120.620174,
        "ele": 139.25,
        "distanceKm": 85.92906869615096,
        "gradePct": -3.125383715790106,
        "smoothedEle": 142.5012574693225,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883472,
        "lng": 120.619788,
        "ele": 136.25,
        "distanceKm": 85.98841706786115,
        "gradePct": -3.1414411438012144,
        "smoothedEle": 140.4794888561318,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883205,
        "lng": 120.619488,
        "ele": 134.75,
        "distanceKm": 86.03114842534168,
        "gradePct": -3.14462430574447,
        "smoothedEle": 139.01853192314852,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88281,
        "lng": 120.618911,
        "ele": 137.75,
        "distanceKm": 86.10479059462426,
        "gradePct": -2.847575894476622,
        "smoothedEle": 137.50848990101142,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882668,
        "lng": 120.6184655,
        "ele": 137.5625,
        "distanceKm": 86.1530837385685,
        "gradePct": -2.488495927671032,
        "smoothedEle": 136.70616635354398,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882526,
        "lng": 120.61802,
        "ele": 137.37499999999997,
        "distanceKm": 86.20137692762825,
        "gradePct": -2.0434871574369415,
        "smoothedEle": 135.94942548222548,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882384000000002,
        "lng": 120.6175745,
        "ele": 137.1875,
        "distanceKm": 86.24967016180312,
        "gradePct": -1.7410337769942466,
        "smoothedEle": 135.15667381366453,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882242,
        "lng": 120.617129,
        "ele": 137,
        "distanceKm": 86.29796344109313,
        "gradePct": -1.5907196082749437,
        "smoothedEle": 134.4670423335944,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882126,
        "lng": 120.616742,
        "ele": 135.5,
        "distanceKm": 86.33965503320152,
        "gradePct": -1.5843779831490736,
        "smoothedEle": 133.76050968557203,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881908,
        "lng": 120.616089,
        "ele": 132.75,
        "distanceKm": 86.41080799565404,
        "gradePct": -1.704816230963577,
        "smoothedEle": 132.3849784786446,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881643,
        "lng": 120.615708,
        "ele": 128.75,
        "distanceKm": 86.45971350621701,
        "gradePct": -1.7757061792646058,
        "smoothedEle": 131.4618417790472,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881385205625346,
        "lng": 120.61540428142521,
        "ele": 128.1076350640475,
        "distanceKm": 86.50201979944833,
        "gradePct": -1.8598828942319747,
        "smoothedEle": 130.6785348764847,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881132,
        "lng": 120.615096,
        "ele": 127.75,
        "distanceKm": 86.54432985314989,
        "gradePct": -1.9043223954687831,
        "smoothedEle": 129.8614911350031,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880817189030903,
        "lng": 120.61460123861863,
        "ele": 128,
        "distanceKm": 86.60592909002749,
        "gradePct": -1.966360327877752,
        "smoothedEle": 128.54657697298006,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880526,
        "lng": 120.614087,
        "ele": 128,
        "distanceKm": 86.66776548356661,
        "gradePct": -2.002397723251235,
        "smoothedEle": 127.30796285215729,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880196,
        "lng": 120.613467,
        "ele": 128,
        "distanceKm": 86.74111965349697,
        "gradePct": -1.7972627780129955,
        "smoothedEle": 126.32895731157637,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880026,
        "lng": 120.613086,
        "ele": 127.25,
        "distanceKm": 86.78448818733123,
        "gradePct": -1.6145115617090706,
        "smoothedEle": 125.77523722407975,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87987,
        "lng": 120.612777,
        "ele": 125.5,
        "distanceKm": 86.82058524442421,
        "gradePct": -1.444663681448582,
        "smoothedEle": 125.36367945254693,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879686,
        "lng": 120.612344,
        "ele": 123.75,
        "distanceKm": 86.86943562590152,
        "gradePct": -1.208351195474212,
        "smoothedEle": 124.86897026828619,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879506,
        "lng": 120.611814,
        "ele": 123.25,
        "distanceKm": 86.9273039353979,
        "gradePct": -1.0811914395701965,
        "smoothedEle": 124.35096292158296,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879414,
        "lng": 120.611467,
        "ele": 122.75,
        "distanceKm": 86.96429563434445,
        "gradePct": -1.0194628405679536,
        "smoothedEle": 123.99412570492011,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879323,
        "lng": 120.610863,
        "ele": 121.5,
        "distanceKm": 87.02699542703989,
        "gradePct": -0.999839552069858,
        "smoothedEle": 123.2990842491493,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879277,
        "lng": 120.610324,
        "ele": 122.75,
        "distanceKm": 87.08245070810504,
        "gradePct": -1.0102748921636362,
        "smoothedEle": 122.73191616133317,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879255,
        "lng": 120.609914,
        "ele": 123.25,
        "distanceKm": 87.1245251283605,
        "gradePct": -0.9926257931735307,
        "smoothedEle": 122.3905857867789,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879233,
        "lng": 120.609504,
        "ele": 123.75,
        "distanceKm": 87.16659955541037,
        "gradePct": -0.9485150985899516,
        "smoothedEle": 122.07155601896685,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879186213944386,
        "lng": 120.60901789288216,
        "ele": 122.81427888770938,
        "distanceKm": 87.21667075700196,
        "gradePct": -0.8521762620689962,
        "smoothedEle": 121.7091830395216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87913942788877,
        "lng": 120.60853178576433,
        "ele": 121.87855777541847,
        "distanceKm": 87.26674197566106,
        "gradePct": -0.7453539859902528,
        "smoothedEle": 121.40186902401331,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879092641833157,
        "lng": 120.6080456786465,
        "ele": 120.94283666312784,
        "distanceKm": 87.31681321138609,
        "gradePct": -0.6716323921703495,
        "smoothedEle": 121.10988422953498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87904585577754,
        "lng": 120.60755957152867,
        "ele": 120.00711555083721,
        "distanceKm": 87.36688446417999,
        "gradePct": -0.6646097611976008,
        "smoothedEle": 120.74027456802919,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878999320554932,
        "lng": 120.6070734365606,
        "ele": 119.55532112677366,
        "distanceKm": 87.41695568167755,
        "gradePct": -0.6470250293966636,
        "smoothedEle": 120.4133842446576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878952880369955,
        "lng": 120.6065872910404,
        "ele": 119.28688075118247,
        "distanceKm": 87.46702690041529,
        "gradePct": -0.34356527770141776,
        "smoothedEle": 120.71307696186713,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878906440184977,
        "lng": 120.6061011455202,
        "ele": 119.0184403755912,
        "distanceKm": 87.51709813609685,
        "gradePct": 0.30376514920569797,
        "smoothedEle": 121.71531130663635,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87886,
        "lng": 120.605615,
        "ele": 118.75,
        "distanceKm": 87.56716938872219,
        "gradePct": 1.2054107837350656,
        "smoothedEle": 123.14923600346361,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8788135,
        "lng": 120.605225,
        "ele": 119.49999999999986,
        "distanceKm": 87.6074569972476,
        "gradePct": 2.066054452818036,
        "smoothedEle": 124.60750538367041,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878767,
        "lng": 120.604835,
        "ele": 120.25,
        "distanceKm": 87.6477446193445,
        "gradePct": 2.923807840545181,
        "smoothedEle": 126.44528184701963,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878751,
        "lng": 120.604483,
        "ele": 125,
        "distanceKm": 87.68384993609904,
        "gradePct": 3.399697250048541,
        "smoothedEle": 127.84920419715694,
        "gradeBand": "hard"
      },
      {
        "lat": 22.87869,
        "lng": 120.604056,
        "ele": 130.75,
        "distanceKm": 87.7281176928887,
        "gradePct": 3.6240583880418646,
        "smoothedEle": 129.2790026650091,
        "gradeBand": "hard"
      },
      {
        "lat": 22.878578,
        "lng": 120.603706,
        "ele": 134.75,
        "distanceKm": 87.76607548169491,
        "gradePct": 3.588973550495942,
        "smoothedEle": 130.29585614097437,
        "gradeBand": "hard"
      },
      {
        "lat": 22.878264,
        "lng": 120.603406,
        "ele": 136.5,
        "distanceKm": 87.81259075370632,
        "gradePct": 3.522671984051669,
        "smoothedEle": 131.88703286267227,
        "gradeBand": "hard"
      },
      {
        "lat": 22.87772,
        "lng": 120.60329,
        "ele": 142.75,
        "distanceKm": 87.8742371929531,
        "gradePct": 3.501574908946274,
        "smoothedEle": 134.47857125500744,
        "gradeBand": "hard"
      },
      {
        "lat": 22.877161,
        "lng": 120.603275,
        "ele": 138,
        "distanceKm": 87.93641423601588,
        "gradePct": 3.476441440516645,
        "smoothedEle": 136.4541421363943,
        "gradeBand": "hard"
      },
      {
        "lat": 22.876786,
        "lng": 120.603118,
        "ele": 132.25,
        "distanceKm": 87.98110702476095,
        "gradePct": 3.011017565193185,
        "smoothedEle": 136.83208457570186,
        "gradeBand": "hard"
      },
      {
        "lat": 22.876628,
        "lng": 120.602878,
        "ele": 132.75,
        "distanceKm": 88.01132655326204,
        "gradePct": 2.3465700509582583,
        "smoothedEle": 136.53692767693346,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87658,
        "lng": 120.602577,
        "ele": 137,
        "distanceKm": 88.04262217892632,
        "gradePct": 1.4805731402744373,
        "smoothedEle": 136.11066230340202,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.876612,
        "lng": 120.601896,
        "ele": 141.25,
        "distanceKm": 88.11248059291405,
        "gradePct": -0.3721424039092885,
        "smoothedEle": 134.94940610625338,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876755,
        "lng": 120.6013,
        "ele": 136,
        "distanceKm": 88.17557659407579,
        "gradePct": -1.4462605004416609,
        "smoothedEle": 133.89279575114358,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877203,
        "lng": 120.600783,
        "ele": 127.75,
        "distanceKm": 88.2482881227173,
        "gradePct": -0.8679019432265014,
        "smoothedEle": 134.28067345103898,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877553,
        "lng": 120.60037,
        "ele": 128.5,
        "distanceKm": 88.30577610172394,
        "gradePct": -0.008284544370169893,
        "smoothedEle": 135.04428575358975,
        "gradeBand": "descent"
      },
      {
        "lat": 22.877701,
        "lng": 120.599792,
        "ele": 132.25,
        "distanceKm": 88.36723543838171,
        "gradePct": 0.5468974570638558,
        "smoothedEle": 135.1262722824527,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877657,
        "lng": 120.599398,
        "ele": 133.25,
        "distanceKm": 88.40789543660051,
        "gradePct": 0.437027634636558,
        "smoothedEle": 134.93925501928703,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877521736947585,
        "lng": 120.59905400719582,
        "ele": 135.6222249466177,
        "distanceKm": 88.44621225543165,
        "gradePct": 0.5270510948369558,
        "smoothedEle": 135.32370198233863,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877378,
        "lng": 120.598714,
        "ele": 140,
        "distanceKm": 88.48453718668172,
        "gradePct": 0.7760111874841048,
        "smoothedEle": 136.31419181312452,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877215,
        "lng": 120.598372,
        "ele": 141.37500000000026,
        "distanceKm": 88.52398493605622,
        "gradePct": 1.297907670137714,
        "smoothedEle": 137.66439161183578,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877052,
        "lng": 120.59803,
        "ele": 142.75,
        "distanceKm": 88.5634327227871,
        "gradePct": 1.9521293304764673,
        "smoothedEle": 139.0254581348007,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.876752,
        "lng": 120.597504,
        "ele": 136.25,
        "distanceKm": 88.62681024677963,
        "gradePct": 2.958909991463003,
        "smoothedEle": 141.04685436156194,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.876526,
        "lng": 120.597121,
        "ele": 141,
        "distanceKm": 88.67340570717641,
        "gradePct": 3.252700070071423,
        "smoothedEle": 142.53190409860005,
        "gradeBand": "hard"
      },
      {
        "lat": 22.876266203827846,
        "lng": 120.59678174017999,
        "ele": 144.0562462076097,
        "distanceKm": 88.71860039016475,
        "gradePct": 3.189126702093259,
        "smoothedEle": 143.85834520439568,
        "gradeBand": "hard"
      },
      {
        "lat": 22.875997101913924,
        "lng": 120.59645087009,
        "ele": 145.02812310380483,
        "distanceKm": 88.76381552991197,
        "gradePct": 2.8392655820595416,
        "smoothedEle": 144.71619875156225,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875728,
        "lng": 120.59612,
        "ele": 146,
        "distanceKm": 88.80903072001844,
        "gradePct": 2.613266136581436,
        "smoothedEle": 145.70631701690732,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875367,
        "lng": 120.59581,
        "ele": 147.25,
        "distanceKm": 88.86021660356181,
        "gradePct": 2.569286315670076,
        "smoothedEle": 147.25012516161473,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.875015,
        "lng": 120.595557,
        "ele": 149.25,
        "distanceKm": 88.90716157853845,
        "gradePct": 2.862292655471892,
        "smoothedEle": 149.2472071749081,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.874762,
        "lng": 120.59534,
        "ele": 150.75,
        "distanceKm": 88.94301793058501,
        "gradePct": 3.148843090497122,
        "smoothedEle": 150.61929819778317,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874545,
        "lng": 120.595099,
        "ele": 149.25,
        "distanceKm": 88.97754108162026,
        "gradePct": 3.4197600909524026,
        "smoothedEle": 151.85627986036616,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874413,
        "lng": 120.594795,
        "ele": 150.5,
        "distanceKm": 89.01197137793456,
        "gradePct": 3.647269074538235,
        "smoothedEle": 153.08954781574243,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874343,
        "lng": 120.594423,
        "ele": 154.25,
        "distanceKm": 89.05086973009082,
        "gradePct": 3.6658699759149065,
        "smoothedEle": 154.29995575888918,
        "gradeBand": "hard"
      },
      {
        "lat": 22.874233,
        "lng": 120.593944,
        "ele": 156.75,
        "distanceKm": 89.10144496539675,
        "gradePct": 3.219895732717557,
        "smoothedEle": 155.44380870813166,
        "gradeBand": "hard"
      },
      {
        "lat": 22.873915,
        "lng": 120.593524,
        "ele": 159.25,
        "distanceKm": 89.15713929005005,
        "gradePct": 2.283549147420327,
        "smoothedEle": 155.69237182179242,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87360766894204,
        "lng": 120.59332956878869,
        "ele": 161.21678970970513,
        "distanceKm": 89.19669476893294,
        "gradePct": 1.404158769017792,
        "smoothedEle": 155.35066842649854,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87328,
        "lng": 120.593178,
        "ele": 162.75,
        "distanceKm": 89.23630100420091,
        "gradePct": 0.445327742217878,
        "smoothedEle": 154.7372732338422,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.872966,
        "lng": 120.592979,
        "ele": 161.5,
        "distanceKm": 89.27673292211456,
        "gradePct": -0.7211966993064362,
        "smoothedEle": 153.44250651909675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872877,
        "lng": 120.592899,
        "ele": 160.5,
        "distanceKm": 89.28958261700808,
        "gradePct": -1.1830200136155868,
        "smoothedEle": 152.80947962386986,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872808,
        "lng": 120.592756,
        "ele": 159.25,
        "distanceKm": 89.30612066024567,
        "gradePct": -1.7575874517738332,
        "smoothedEle": 151.94950137551524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872771,
        "lng": 120.592499,
        "ele": 157,
        "distanceKm": 89.33277027416011,
        "gradePct": -2.682968716306921,
        "smoothedEle": 150.2176757588484,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872912,
        "lng": 120.592186,
        "ele": 150.75,
        "distanceKm": 89.36846529095729,
        "gradePct": -3.95285520261308,
        "smoothedEle": 147.68882078678737,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87343,
        "lng": 120.591836,
        "ele": 145.75,
        "distanceKm": 89.43631401656029,
        "gradePct": -6.494637512096581,
        "smoothedEle": 141.74758150990596,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873649,
        "lng": 120.591554,
        "ele": 141,
        "distanceKm": 89.47409907936333,
        "gradePct": -7.751502231104484,
        "smoothedEle": 138.02384660698925,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87371,
        "lng": 120.591268,
        "ele": 135,
        "distanceKm": 89.5041749507967,
        "gradePct": -8.611659559491349,
        "smoothedEle": 134.827359147879,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87364,
        "lng": 120.590977,
        "ele": 128.25,
        "distanceKm": 89.53498756692682,
        "gradePct": -9.219968720146209,
        "smoothedEle": 131.62065163417486,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873492,
        "lng": 120.590585,
        "ele": 122.25,
        "distanceKm": 89.57838947122103,
        "gradePct": -9.850277631924701,
        "smoothedEle": 127.11924508003693,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873266,
        "lng": 120.589956,
        "ele": 116.25,
        "distanceKm": 89.64755797518426,
        "gradePct": -10.038625260538552,
        "smoothedEle": 120.56223381843984,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873136,
        "lng": 120.589523,
        "ele": 112.25,
        "distanceKm": 89.69421524195735,
        "gradePct": -9.596194342710566,
        "smoothedEle": 116.69349621363634,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873066,
        "lng": 120.588921,
        "ele": 109.5,
        "distanceKm": 89.75638031623963,
        "gradePct": -8.707321661913898,
        "smoothedEle": 111.98727013436894,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873055,
        "lng": 120.588344,
        "ele": 107.25,
        "distanceKm": 89.81550755256015,
        "gradePct": -7.577917299131498,
        "smoothedEle": 108.44470379586855,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872979,
        "lng": 120.587911,
        "ele": 105,
        "distanceKm": 89.86066688040657,
        "gradePct": -6.768452802239356,
        "smoothedEle": 105.93836110039223,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872761,
        "lng": 120.587492,
        "ele": 105.25,
        "distanceKm": 89.90996551364792,
        "gradePct": -6.099288966594207,
        "smoothedEle": 103.3025391151129,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872497,
        "lng": 120.587212,
        "ele": 103.75,
        "distanceKm": 89.95101016330851,
        "gradePct": -5.678678636736945,
        "smoothedEle": 101.0364619411604,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872197366992904,
        "lng": 120.58697448208511,
        "ele": 101.19639569840415,
        "distanceKm": 89.99226818798883,
        "gradePct": -5.588494239435213,
        "smoothedEle": 98.66008532753303,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871901,
        "lng": 120.586732,
        "ele": 99,
        "distanceKm": 90.03353767435758,
        "gradePct": -5.605951050493649,
        "smoothedEle": 96.2321299351241,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871534,
        "lng": 120.586371,
        "ele": 94.5,
        "distanceKm": 90.08861272477368,
        "gradePct": -5.733326326067182,
        "smoothedEle": 92.97754388147533,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871253589948505,
        "lng": 120.58602350449036,
        "ele": 89.66857690135822,
        "distanceKm": 90.13593821780795,
        "gradePct": -5.836184487834674,
        "smoothedEle": 90.19621583530017,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87098079497425,
        "lng": 120.58566875224518,
        "ele": 85.70928845067911,
        "distanceKm": 90.18327859497074,
        "gradePct": -5.933225272551696,
        "smoothedEle": 87.31141668739785,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870708,
        "lng": 120.585314,
        "ele": 81.75,
        "distanceKm": 90.23061902817594,
        "gradePct": -5.943493136039579,
        "smoothedEle": 84.51685267516892,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870395000000002,
        "lng": 120.58486099999999,
        "ele": 78.875,
        "distanceKm": 90.2886306165589,
        "gradePct": -5.789227131422076,
        "smoothedEle": 81.39803811507898,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870082,
        "lng": 120.584408,
        "ele": 76,
        "distanceKm": 90.34664229050125,
        "gradePct": -5.415439924349259,
        "smoothedEle": 78.71305770671941,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869819,
        "lng": 120.584016,
        "ele": 74.75,
        "distanceKm": 90.39632339327666,
        "gradePct": -4.836871812502254,
        "smoothedEle": 76.86762257015373,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869494,
        "lng": 120.583448,
        "ele": 73.75,
        "distanceKm": 90.46482538621557,
        "gradePct": -3.8562885596695455,
        "smoothedEle": 74.96527596151837,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8694,
        "lng": 120.582943,
        "ele": 73.25,
        "distanceKm": 90.51761005608564,
        "gradePct": -3.0546141501222257,
        "smoothedEle": 73.94754137545347,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869379,
        "lng": 120.582576,
        "ele": 73.25,
        "distanceKm": 90.55528325384105,
        "gradePct": -2.504953772457405,
        "smoothedEle": 73.3821762608601,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869371,
        "lng": 120.58211,
        "ele": 72.75,
        "distanceKm": 90.6030352896629,
        "gradePct": -1.9239570277928177,
        "smoothedEle": 72.83331461885679,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86935175,
        "lng": 120.58156225,
        "ele": 72.3125,
        "distanceKm": 90.65919549844072,
        "gradePct": -1.3859796384615437,
        "smoothedEle": 72.34966247040363,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8693325,
        "lng": 120.58101450000001,
        "ele": 71.875,
        "distanceKm": 90.71535571516546,
        "gradePct": -1.0126682836043983,
        "smoothedEle": 71.96567047221308,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86931325,
        "lng": 120.58046675,
        "ele": 71.4375,
        "distanceKm": 90.77151593983852,
        "gradePct": -0.7784423753058182,
        "smoothedEle": 71.63871310500656,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869294,
        "lng": 120.579919,
        "ele": 71,
        "distanceKm": 90.82767617245705,
        "gradePct": -0.6497553854947121,
        "smoothedEle": 71.32159637637596,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869283833333334,
        "lng": 120.57944833333333,
        "ele": 70.87500000000001,
        "distanceKm": 90.87591132228437,
        "gradePct": -0.5763040957688748,
        "smoothedEle": 71.0827608702314,
        "gradeBand": "descent"
      },
      {
        "lat": 22.86927366666667,
        "lng": 120.57897766666667,
        "ele": 70.74999999999999,
        "distanceKm": 90.92414647571827,
        "gradePct": -0.5176272662999748,
        "smoothedEle": 70.87923729952001,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869263500000002,
        "lng": 120.578507,
        "ele": 70.625,
        "distanceKm": 90.97238163276168,
        "gradePct": -0.4720981059169422,
        "smoothedEle": 70.68962863514754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869253333333333,
        "lng": 120.57803633333333,
        "ele": 70.50000000000001,
        "distanceKm": 91.02061679341314,
        "gradePct": -0.4194560208979124,
        "smoothedEle": 70.5225461208333,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869243166666667,
        "lng": 120.57756566666667,
        "ele": 70.37499999999999,
        "distanceKm": 91.06885195767117,
        "gradePct": -0.3706717680857086,
        "smoothedEle": 70.37637165526532,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869233,
        "lng": 120.577095,
        "ele": 70.25,
        "distanceKm": 91.1170871255387,
        "gradePct": -0.35019039922379347,
        "smoothedEle": 70.20864274726769,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869276,
        "lng": 120.576469,
        "ele": 70.25,
        "distanceKm": 91.18140161523101,
        "gradePct": -0.44613380100793953,
        "smoothedEle": 69.76611657722664,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869435,
        "lng": 120.576127,
        "ele": 69.75,
        "distanceKm": 91.22064882172803,
        "gradePct": -0.5315352359486876,
        "smoothedEle": 69.45937858858825,
        "gradeBand": "descent"
      },
      {
        "lat": 22.869756,
        "lng": 120.575886,
        "ele": 70,
        "distanceKm": 91.26405047196947,
        "gradePct": -0.6555824677100737,
        "smoothedEle": 69.07975740329726,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870298,
        "lng": 120.5758,
        "ele": 69.5,
        "distanceKm": 91.32495887905463,
        "gradePct": -0.7897302225258501,
        "smoothedEle": 68.57501943858172,
        "gradeBand": "descent"
      },
      {
        "lat": 22.870935,
        "lng": 120.575805,
        "ele": 67.5,
        "distanceKm": 91.39579199755426,
        "gradePct": -0.700150421487298,
        "smoothedEle": 68.25334717091864,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871325,
        "lng": 120.575801,
        "ele": 66.91666666666667,
        "distanceKm": 91.43916001517852,
        "gradePct": -0.6677401034105847,
        "smoothedEle": 67.96198653832954,
        "gradeBand": "descent"
      },
      {
        "lat": 22.871715000000002,
        "lng": 120.57579700000001,
        "ele": 66.33333333333333,
        "distanceKm": 91.48252803279203,
        "gradePct": -0.6658024632449558,
        "smoothedEle": 67.59503196539015,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872105,
        "lng": 120.575793,
        "ele": 65.75,
        "distanceKm": 91.52589605039405,
        "gradePct": -0.709294666528504,
        "smoothedEle": 67.15217415807632,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872546230173178,
        "lng": 120.57583907038831,
        "ele": 67.10832333283685,
        "distanceKm": 91.57518519352764,
        "gradePct": -0.8900939154210847,
        "smoothedEle": 66.56674038692199,
        "gradeBand": "descent"
      },
      {
        "lat": 22.872986,
        "lng": 120.575901,
        "ele": 68.5,
        "distanceKm": 91.62449533556922,
        "gradePct": -1.038743459737183,
        "smoothedEle": 65.9830217686269,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873427,
        "lng": 120.57583,
        "ele": 66.75,
        "distanceKm": 91.67406893998542,
        "gradePct": -1.0964986874226939,
        "smoothedEle": 65.47361044203903,
        "gradeBand": "descent"
      },
      {
        "lat": 22.873885,
        "lng": 120.575473,
        "ele": 65,
        "distanceKm": 91.73676926048017,
        "gradePct": -1.0669958850473682,
        "smoothedEle": 64.88903539980981,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874295,
        "lng": 120.574994,
        "ele": 63.75,
        "distanceKm": 91.80375208965035,
        "gradePct": -0.9301240547662469,
        "smoothedEle": 64.36832596021155,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874633,
        "lng": 120.574564,
        "ele": 62.87499999999989,
        "distanceKm": 91.86165963991543,
        "gradePct": -0.919785969879347,
        "smoothedEle": 63.761554709445896,
        "gradeBand": "descent"
      },
      {
        "lat": 22.874971,
        "lng": 120.574134,
        "ele": 62,
        "distanceKm": 91.91956710676752,
        "gradePct": -0.972163329731654,
        "smoothedEle": 63.105089893961996,
        "gradeBand": "descent"
      },
      {
        "lat": 22.875248200149695,
        "lng": 120.57375433064045,
        "ele": 62.020430541861224,
        "distanceKm": 91.96919637150124,
        "gradePct": -0.973688011364708,
        "smoothedEle": 62.68957831366825,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87555215011227,
        "lng": 120.57339849798035,
        "ele": 62.07782290639591,
        "distanceKm": 92.01890808597885,
        "gradePct": -0.9213508898275695,
        "smoothedEle": 62.36681547932921,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87585610007485,
        "lng": 120.57304266532023,
        "ele": 62.135215270930615,
        "distanceKm": 92.06861974062242,
        "gradePct": -0.7636058878993024,
        "smoothedEle": 62.15544013449643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876160050037424,
        "lng": 120.57268683266012,
        "ele": 62.19260763546531,
        "distanceKm": 92.11833133542859,
        "gradePct": -0.544240090926855,
        "smoothedEle": 62.03061896597635,
        "gradeBand": "descent"
      },
      {
        "lat": 22.876464,
        "lng": 120.572331,
        "ele": 62.25,
        "distanceKm": 92.16804287039908,
        "gradePct": -0.3259375873911477,
        "smoothedEle": 62.04736060748644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87676204311293,
        "lng": 120.5719745507439,
        "ele": 61.92790729870634,
        "distanceKm": 92.21735690796557,
        "gradePct": -0.08763236121609683,
        "smoothedEle": 62.201622077457856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87706008622586,
        "lng": 120.5716181014878,
        "ele": 61.605814597412575,
        "distanceKm": 92.26667088617876,
        "gradePct": 0.11728885984891067,
        "smoothedEle": 62.39830443775324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.87735926524136,
        "lng": 120.571262775872,
        "ele": 61.700863514330926,
        "distanceKm": 92.31598473970107,
        "gradePct": 0.2760904452365405,
        "smoothedEle": 62.58869193900878,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.877659,
        "lng": 120.570908,
        "ele": 62,
        "distanceKm": 92.36529871798817,
        "gradePct": 0.31224627849371966,
        "smoothedEle": 62.67092900037515,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8778915,
        "lng": 120.5705875,
        "ele": 62.87499999999985,
        "distanceKm": 92.40708964240127,
        "gradePct": 0.21427370581586355,
        "smoothedEle": 62.598051991583944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878124,
        "lng": 120.570267,
        "ele": 63.75,
        "distanceKm": 92.44888052264162,
        "gradePct": 0.011969143641188226,
        "smoothedEle": 62.35128818399511,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.878352,
        "lng": 120.5699765,
        "ele": 64.00000000000004,
        "distanceKm": 92.48797616008186,
        "gradePct": -0.15502484247699888,
        "smoothedEle": 62.17050867481611,
        "gradeBand": "descent"
      },
      {
        "lat": 22.87858,
        "lng": 120.569686,
        "ele": 64.25,
        "distanceKm": 92.527071759479,
        "gradePct": -0.28460483682105625,
        "smoothedEle": 62.03797122037532,
        "gradeBand": "descent"
      },
      {
        "lat": 22.878884,
        "lng": 120.569334,
        "ele": 63.5,
        "distanceKm": 92.57649940893194,
        "gradePct": -0.35712499652909657,
        "smoothedEle": 61.93714670780839,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879094,
        "lng": 120.569045,
        "ele": 62.25,
        "distanceKm": 92.6142069071836,
        "gradePct": -0.3135220981332436,
        "smoothedEle": 61.928982278094466,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879392,
        "lng": 120.568552,
        "ele": 59.25,
        "distanceKm": 92.67461298778592,
        "gradePct": -0.2030023380601278,
        "smoothedEle": 61.826295745471356,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879689,
        "lng": 120.567955,
        "ele": 59.75,
        "distanceKm": 92.7441203793406,
        "gradePct": -0.4292875180781951,
        "smoothedEle": 61.14461972192485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879831,
        "lng": 120.567644,
        "ele": 60.25,
        "distanceKm": 92.77967920981845,
        "gradePct": -0.62294690950157,
        "smoothedEle": 60.690564398132395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879972,
        "lng": 120.56728,
        "ele": 61,
        "distanceKm": 92.82013162280288,
        "gradePct": -0.8701081738714809,
        "smoothedEle": 60.178694286939844,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880088,
        "lng": 120.566819,
        "ele": 62.5,
        "distanceKm": 92.86908912554192,
        "gradePct": -1.1018944639465629,
        "smoothedEle": 59.63189703549779,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880081120950802,
        "lng": 120.56635156657572,
        "ele": 60.98214661456104,
        "distanceKm": 92.91698206784841,
        "gradePct": -1.0371382369721718,
        "smoothedEle": 59.33649531972399,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880029,
        "lng": 120.565885,
        "ele": 58.25,
        "distanceKm": 92.96513018706084,
        "gradePct": -0.7981351763328555,
        "smoothedEle": 59.28007240629294,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879975,
        "lng": 120.5652925,
        "ele": 57.75,
        "distanceKm": 93.02612593601982,
        "gradePct": -0.4829946759808233,
        "smoothedEle": 59.145755564443924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879921,
        "lng": 120.5647,
        "ele": 57.25,
        "distanceKm": 93.08712170900361,
        "gradePct": -0.3736434428962756,
        "smoothedEle": 58.773385910018135,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879861,
        "lng": 120.564309,
        "ele": 57.5,
        "distanceKm": 93.12773008573771,
        "gradePct": -0.49428710162327866,
        "smoothedEle": 58.3353259311858,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879862,
        "lng": 120.563857,
        "ele": 58.25,
        "distanceKm": 93.17403603135116,
        "gradePct": -0.6976147770939186,
        "smoothedEle": 57.86523156936012,
        "gradeBand": "descent"
      },
      {
        "lat": 22.879903,
        "lng": 120.563503,
        "ele": 59.25,
        "distanceKm": 93.21058751427911,
        "gradePct": -0.7781284998676302,
        "smoothedEle": 57.62371523998767,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88000658902748,
        "lng": 120.56308864389007,
        "ele": 58.57146925230107,
        "distanceKm": 93.25457183962462,
        "gradePct": -0.7796801902427641,
        "smoothedEle": 57.412737391344436,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880110178054963,
        "lng": 120.56267428778014,
        "ele": 57.89293850460214,
        "distanceKm": 93.29855613371278,
        "gradePct": -0.7066188254406363,
        "smoothedEle": 57.23680021499178,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880214,
        "lng": 120.56226,
        "ele": 57,
        "distanceKm": 93.3425404313609,
        "gradePct": -0.5515311001635147,
        "smoothedEle": 57.08191025287842,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880343387003713,
        "lng": 120.561895529567,
        "ele": 56.54441195874939,
        "distanceKm": 93.38255496094779,
        "gradePct": -0.44024062428919647,
        "smoothedEle": 56.92846093273107,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880475,
        "lng": 120.561532,
        "ele": 56.25,
        "distanceKm": 93.42256939203457,
        "gradePct": -0.4147849293502949,
        "smoothedEle": 56.73667238899502,
        "gradeBand": "descent"
      },
      {
        "lat": 22.880721,
        "lng": 120.560888,
        "ele": 55.75,
        "distanceKm": 93.49399043299668,
        "gradePct": -0.48788047990295896,
        "smoothedEle": 56.27930205805025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88087,
        "lng": 120.560502,
        "ele": 55.75,
        "distanceKm": 93.5368650696399,
        "gradePct": -0.5467141284735846,
        "smoothedEle": 56.008467686483314,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88112374003916,
        "lng": 120.56002946293555,
        "ele": 55.48120758563488,
        "distanceKm": 93.59289659664857,
        "gradePct": -0.5758180320768769,
        "smoothedEle": 55.72725757005443,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88137649886538,
        "lng": 120.55955631961737,
        "ele": 55.50997991005513,
        "distanceKm": 93.64892690504809,
        "gradePct": -0.5525143805605232,
        "smoothedEle": 55.46285381065098,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881629,
        "lng": 120.559083,
        "ele": 55.75,
        "distanceKm": 93.70495839681412,
        "gradePct": -0.5273379469866089,
        "smoothedEle": 55.15534274104575,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881907,
        "lng": 120.55861,
        "ele": 55.25,
        "distanceKm": 93.76243534228811,
        "gradePct": -0.4873616014655655,
        "smoothedEle": 54.90541281507187,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882145,
        "lng": 120.558072,
        "ele": 55,
        "distanceKm": 93.82357506544996,
        "gradePct": -0.4622976917543836,
        "smoothedEle": 54.65789228047999,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882363,
        "lng": 120.557708,
        "ele": 54.5,
        "distanceKm": 93.86805131909048,
        "gradePct": -0.4234698767187066,
        "smoothedEle": 54.51095577692527,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882599,
        "lng": 120.557395,
        "ele": 53.5,
        "distanceKm": 93.90948581293385,
        "gradePct": -0.3744718685130284,
        "smoothedEle": 54.38671221018738,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882956408332785,
        "lng": 120.55704001067454,
        "ele": 53.57559397901579,
        "distanceKm": 93.96335567500532,
        "gradePct": -0.345129331135793,
        "smoothedEle": 54.21142824050655,
        "gradeBand": "descent"
      },
      {
        "lat": 22.883313816665574,
        "lng": 120.55668502134908,
        "ele": 53.651187958031585,
        "distanceKm": 94.01722547243999,
        "gradePct": -0.37248317532759323,
        "smoothedEle": 53.938631879655624,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88367122499836,
        "lng": 120.55633003202362,
        "ele": 53.72678193704738,
        "distanceKm": 94.07109520523642,
        "gradePct": -0.4571966958546133,
        "smoothedEle": 53.587435128275374,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8840286162788,
        "lng": 120.55597502085362,
        "ele": 53.954641552729456,
        "distanceKm": 94.12496498532607,
        "gradePct": -0.5214886012619463,
        "smoothedEle": 53.2933682407933,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884386,
        "lng": 120.55562,
        "ele": 54.25,
        "distanceKm": 94.17883475043854,
        "gradePct": -0.5170337781994438,
        "smoothedEle": 53.09897473040808,
        "gradeBand": "descent"
      },
      {
        "lat": 22.884632,
        "lng": 120.55534,
        "ele": 53.5,
        "distanceKm": 94.21847077674684,
        "gradePct": -0.49527453241105235,
        "smoothedEle": 52.93996421456686,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88483291960369,
        "lng": 120.55503732712063,
        "ele": 52.42210513043573,
        "distanceKm": 94.25668785949676,
        "gradePct": -0.4667970355236198,
        "smoothedEle": 52.747767883241906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885033,
        "lng": 120.554734,
        "ele": 51.75,
        "distanceKm": 94.29490490351297,
        "gradePct": -0.4375661876181746,
        "smoothedEle": 52.5823292530095,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885301380685526,
        "lng": 120.55432933181285,
        "ele": 52,
        "distanceKm": 94.34598441255574,
        "gradePct": -0.3879945989699587,
        "smoothedEle": 52.44152869828755,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885578,
        "lng": 120.553931,
        "ele": 52,
        "distanceKm": 94.39708460003135,
        "gradePct": -0.3234683575034179,
        "smoothedEle": 52.37882386484021,
        "gradeBand": "descent"
      },
      {
        "lat": 22.885852271198303,
        "lng": 120.5535215506482,
        "ele": 51.555242273384685,
        "distanceKm": 94.4489447350525,
        "gradePct": -0.20650899649643567,
        "smoothedEle": 52.37369059435556,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886136,
        "lng": 120.553119,
        "ele": 51,
        "distanceKm": 94.5008670871933,
        "gradePct": -0.045814332392111426,
        "smoothedEle": 52.47426584197818,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886394333333335,
        "lng": 120.55275133333333,
        "ele": 51.91666666666657,
        "distanceKm": 94.54823536773621,
        "gradePct": 0.1075731654624568,
        "smoothedEle": 52.653912891211384,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886652666666667,
        "lng": 120.55238366666666,
        "ele": 52.83333333333343,
        "distanceKm": 94.59560359127877,
        "gradePct": 0.2369246129190474,
        "smoothedEle": 52.8544904305307,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.886911,
        "lng": 120.552016,
        "ele": 53.75,
        "distanceKm": 94.6429717578186,
        "gradePct": 0.29097552120642983,
        "smoothedEle": 52.95623285982883,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88724,
        "lng": 120.551628,
        "ele": 54.5,
        "distanceKm": 94.69699178258578,
        "gradePct": 0.27994932284817464,
        "smoothedEle": 53.0266578993856,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88759897728733,
        "lng": 120.55144915070497,
        "ele": 54,
        "distanceKm": 94.74091220604241,
        "gradePct": 0.22731309497516636,
        "smoothedEle": 53.08076555055705,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.887972488643666,
        "lng": 120.55130607535249,
        "ele": 54,
        "distanceKm": 94.7849551186867,
        "gradePct": 0.1504186424904944,
        "smoothedEle": 53.11023747842249,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888346,
        "lng": 120.551163,
        "ele": 54,
        "distanceKm": 94.82899801790718,
        "gradePct": 0.0530083975048711,
        "smoothedEle": 53.03223535728765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.888831,
        "lng": 120.550961,
        "ele": 52.75,
        "distanceKm": 94.88676130824109,
        "gradePct": -0.12511502396178464,
        "smoothedEle": 52.763090546203195,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889205666666665,
        "lng": 120.55082833333333,
        "ele": 52.333333333333286,
        "distanceKm": 94.93058302825195,
        "gradePct": -0.30881093117867225,
        "smoothedEle": 52.450418684550165,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889580333333335,
        "lng": 120.55069566666667,
        "ele": 51.916666666666714,
        "distanceKm": 94.97440473662672,
        "gradePct": -0.5208507459828621,
        "smoothedEle": 52.061476051489784,
        "gradeBand": "descent"
      },
      {
        "lat": 22.889955,
        "lng": 120.550563,
        "ele": 51.5,
        "distanceKm": 95.01822643336543,
        "gradePct": -0.6289371497823542,
        "smoothedEle": 51.79343805894471,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890348,
        "lng": 120.55042225,
        "ele": 51.125,
        "distanceKm": 95.06424324319995,
        "gradePct": -0.6373829938883782,
        "smoothedEle": 51.59324621933685,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890741,
        "lng": 120.5502815,
        "ele": 50.75,
        "distanceKm": 95.11026003995127,
        "gradePct": -0.5555062897381432,
        "smoothedEle": 51.4844124303562,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891134,
        "lng": 120.55014075,
        "ele": 50.375,
        "distanceKm": 95.15627682361959,
        "gradePct": -0.324962601473575,
        "smoothedEle": 51.572446406437905,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891527,
        "lng": 120.55,
        "ele": 50,
        "distanceKm": 95.20229359420397,
        "gradePct": -0.05195712087625563,
        "smoothedEle": 51.78697796758366,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89195266666667,
        "lng": 120.54986433333333,
        "ele": 50.9999999999999,
        "distanceKm": 95.25162369116232,
        "gradePct": 0.21334683391609185,
        "smoothedEle": 52.07484007139575,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892378333333333,
        "lng": 120.54972866666667,
        "ele": 52.0000000000001,
        "distanceKm": 95.3009537758383,
        "gradePct": 0.42963901377880825,
        "smoothedEle": 52.36570059456336,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892804,
        "lng": 120.549593,
        "ele": 53,
        "distanceKm": 95.35028384823248,
        "gradePct": 0.5343363324723883,
        "smoothedEle": 52.62965400559952,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893007,
        "lng": 120.54919100000001,
        "ele": 54,
        "distanceKm": 95.39724421475917,
        "gradePct": 0.5407161019212191,
        "smoothedEle": 52.84486981339243,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89321,
        "lng": 120.548789,
        "ele": 55,
        "distanceKm": 95.44420452726182,
        "gradePct": 0.5008921229901127,
        "smoothedEle": 53.03333033944747,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893524,
        "lng": 120.548156,
        "ele": 54.5,
        "distanceKm": 95.51784950364915,
        "gradePct": 0.4044906143337435,
        "smoothedEle": 53.26508681903089,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89371609330105,
        "lng": 120.54777798518987,
        "ele": 53.93557801112166,
        "distanceKm": 95.56207239137439,
        "gradePct": 0.3101522573964166,
        "smoothedEle": 53.30398452194719,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893906546650523,
        "lng": 120.54739899259494,
        "ele": 53.21778900556095,
        "distanceKm": 95.6062953448046,
        "gradePct": 0.18490751436502698,
        "smoothedEle": 53.25100872156125,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.894097,
        "lng": 120.54702,
        "ele": 52.5,
        "distanceKm": 95.65051825039443,
        "gradePct": 0.024467376214822076,
        "smoothedEle": 53.10213401326262,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.894258,
        "lng": 120.546641,
        "ele": 52,
        "distanceKm": 95.69327022244173,
        "gradePct": -0.1615394035220467,
        "smoothedEle": 52.864658436187305,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894486468301125,
        "lng": 120.54621779697241,
        "ele": 52.191668037856296,
        "distanceKm": 95.74351664395846,
        "gradePct": -0.36855843800961635,
        "smoothedEle": 52.55054632483152,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894714,
        "lng": 120.545794,
        "ele": 52.25,
        "distanceKm": 95.79376298304226,
        "gradePct": -0.4937690957992339,
        "smoothedEle": 52.278483364782446,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894903666666668,
        "lng": 120.545432,
        "ele": 52.083333333333336,
        "distanceKm": 95.8364224371911,
        "gradePct": -0.5461289640147975,
        "smoothedEle": 52.05732909744213,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89509333333333,
        "lng": 120.54507,
        "ele": 51.916666666666664,
        "distanceKm": 95.87908184627996,
        "gradePct": -0.5464087482676796,
        "smoothedEle": 51.85065351028727,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895283,
        "lng": 120.544708,
        "ele": 51.75,
        "distanceKm": 95.92174121030634,
        "gradePct": -0.5189915764333504,
        "smoothedEle": 51.64869082511278,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895497,
        "lng": 120.54426050000001,
        "ele": 51.75,
        "distanceKm": 95.97338908196339,
        "gradePct": -0.5144814859924124,
        "smoothedEle": 51.359836565803164,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895711,
        "lng": 120.543813,
        "ele": 51.75,
        "distanceKm": 96.0250368894469,
        "gradePct": -0.5434744377424993,
        "smoothedEle": 51.02940494507836,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895960600983337,
        "lng": 120.54335320119233,
        "ele": 51.193534070289,
        "distanceKm": 96.0797053824448,
        "gradePct": -0.5843854324793464,
        "smoothedEle": 50.67893063136801,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89619410505044,
        "lng": 120.54288248664436,
        "ele": 50.39930254952648,
        "distanceKm": 96.13446907962523,
        "gradePct": -0.6136900342737681,
        "smoothedEle": 50.35012681138524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896428,
        "lng": 120.542412,
        "ele": 49.25,
        "distanceKm": 96.18923277869267,
        "gradePct": -0.6271627805266835,
        "smoothedEle": 50.004146423296845,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896944,
        "lng": 120.54239,
        "ele": 49,
        "distanceKm": 96.246653678468,
        "gradePct": -0.6531719232584564,
        "smoothedEle": 49.584477997375885,
        "gradeBand": "descent"
      },
      {
        "lat": 22.897489,
        "lng": 120.542355,
        "ele": 49,
        "distanceKm": 96.3073609536907,
        "gradePct": -0.6196713268341352,
        "smoothedEle": 49.27354262397757,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898039,
        "lng": 120.54231,
        "ele": 49,
        "distanceKm": 96.36869171241851,
        "gradePct": -0.5509766311509622,
        "smoothedEle": 49.031965367809,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898597,
        "lng": 120.542275,
        "ele": 48.5,
        "distanceKm": 96.43084205764377,
        "gradePct": -0.39917758547413273,
        "smoothedEle": 48.90168419952564,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898941,
        "lng": 120.542214,
        "ele": 48,
        "distanceKm": 96.46960014452951,
        "gradePct": -0.29190766988791533,
        "smoothedEle": 48.88313361405736,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8995,
        "lng": 120.542047,
        "ele": 49.25,
        "distanceKm": 96.53406907194704,
        "gradePct": -0.1182823611753162,
        "smoothedEle": 48.93177662807956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899935755301776,
        "lng": 120.54190964143062,
        "ele": 49.080101586871145,
        "distanceKm": 96.58452435589916,
        "gradePct": 0.024022525386683584,
        "smoothedEle": 49.04682161999731,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90037035890897,
        "lng": 120.54176775344935,
        "ele": 49,
        "distanceKm": 96.63498831574098,
        "gradePct": 0.1652767335321007,
        "smoothedEle": 49.23025316422179,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.900805,
        "lng": 120.541626,
        "ele": 49,
        "distanceKm": 96.68545228691582,
        "gradePct": 0.29327267634896553,
        "smoothedEle": 49.48163970528884,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901115,
        "lng": 120.541472,
        "ele": 49,
        "distanceKm": 96.72336062868567,
        "gradePct": 0.39769136336579225,
        "smoothedEle": 49.7190796336713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901604,
        "lng": 120.54132,
        "ele": 49.75,
        "distanceKm": 96.7799201631788,
        "gradePct": 0.5002245818703734,
        "smoothedEle": 50.036772590629006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.90155,
        "lng": 120.5408725,
        "ele": 50.3749999999999,
        "distanceKm": 96.82614924303621,
        "gradePct": 0.5026120914387668,
        "smoothedEle": 50.20334818480547,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901496,
        "lng": 120.540425,
        "ele": 51,
        "distanceKm": 96.87237834099058,
        "gradePct": 0.4620040759863754,
        "smoothedEle": 50.340519926032066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901456333333336,
        "lng": 120.54000666666667,
        "ele": 51.166666666666686,
        "distanceKm": 96.91545470594292,
        "gradePct": 0.38613313103824415,
        "smoothedEle": 50.441826933899435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901416666666666,
        "lng": 120.53958833333333,
        "ele": 51.333333333333314,
        "distanceKm": 96.95853108336301,
        "gradePct": 0.30567441132616857,
        "smoothedEle": 50.52797968873961,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901377,
        "lng": 120.53917,
        "ele": 51.5,
        "distanceKm": 97.00160747324787,
        "gradePct": 0.20063626449938068,
        "smoothedEle": 50.516190230280785,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901451333333334,
        "lng": 120.53876033333333,
        "ele": 51.083333333333286,
        "distanceKm": 97.04437601966256,
        "gradePct": 0.06475820825087815,
        "smoothedEle": 50.38694739325901,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.901525666666664,
        "lng": 120.53835066666667,
        "ele": 50.666666666666714,
        "distanceKm": 97.08714454351126,
        "gradePct": -0.11321609376627445,
        "smoothedEle": 50.14881489796593,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9016,
        "lng": 120.537941,
        "ele": 50.25,
        "distanceKm": 97.12991304479691,
        "gradePct": -0.3036845087722454,
        "smoothedEle": 49.863374594062904,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901765,
        "lng": 120.537534,
        "ele": 50,
        "distanceKm": 97.17546074903497,
        "gradePct": -0.4724589422096099,
        "smoothedEle": 49.57842837076908,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901842,
        "lng": 120.536817,
        "ele": 48.75,
        "distanceKm": 97.24940040687794,
        "gradePct": -0.5871980921743708,
        "smoothedEle": 49.18457573168433,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901939,
        "lng": 120.536291,
        "ele": 47.5,
        "distanceKm": 97.30434752987203,
        "gradePct": -0.5785777664791982,
        "smoothedEle": 48.87684529607249,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902017869274953,
        "lng": 120.5358920402452,
        "ele": 47.372392294199145,
        "distanceKm": 97.3461433276454,
        "gradePct": -0.5589906563135713,
        "smoothedEle": 48.643856708341005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902073,
        "lng": 120.535488,
        "ele": 47.75,
        "distanceKm": 97.38798062457423,
        "gradePct": -0.5378369899235474,
        "smoothedEle": 48.43606506389506,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902155,
        "lng": 120.534975,
        "ele": 48.75,
        "distanceKm": 97.44131227738607,
        "gradePct": -0.492815514770996,
        "smoothedEle": 48.24202755157066,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9022305,
        "lng": 120.53457,
        "ele": 48.625,
        "distanceKm": 97.48363723574656,
        "gradePct": -0.41746471401254337,
        "smoothedEle": 48.15790352100546,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902306,
        "lng": 120.534165,
        "ele": 48.5,
        "distanceKm": 97.52596217147214,
        "gradePct": -0.3402840327515109,
        "smoothedEle": 48.075787490236245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902385,
        "lng": 120.533727,
        "ele": 48,
        "distanceKm": 97.57167820558361,
        "gradePct": -0.2369222624854148,
        "smoothedEle": 48.043189117182756,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902328574881444,
        "lng": 120.53330268690038,
        "ele": 47.88698819079651,
        "distanceKm": 97.61559092234884,
        "gradePct": -0.16980892972805364,
        "smoothedEle": 47.99599216109681,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902253787440724,
        "lng": 120.53288134345019,
        "ele": 48.19349409539831,
        "distanceKm": 97.6595428352023,
        "gradePct": -0.13418518616554018,
        "smoothedEle": 47.93742257766263,
        "gradeBand": "descent"
      },
      {
        "lat": 22.902179,
        "lng": 120.53246,
        "ele": 48.5,
        "distanceKm": 97.7034947714234,
        "gradePct": -0.151801623935858,
        "smoothedEle": 47.815774000555045,
        "gradeBand": "descent"
      },
      {
        "lat": 22.9020995,
        "lng": 120.532039,
        "ele": 47.875,
        "distanceKm": 97.7475144201353,
        "gradePct": -0.1634150306036174,
        "smoothedEle": 47.733589336504835,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90202,
        "lng": 120.531618,
        "ele": 47.25,
        "distanceKm": 97.7915340936099,
        "gradePct": -0.1941616296582901,
        "smoothedEle": 47.633524944703495,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901967585513596,
        "lng": 120.53119566064194,
        "ele": 46.80155686338086,
        "distanceKm": 97.8351850604975,
        "gradePct": -0.2045594705489406,
        "smoothedEle": 47.560762399454106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901922292756797,
        "lng": 120.53077233032097,
        "ele": 47.02577843169043,
        "distanceKm": 97.87883820547765,
        "gradePct": -0.1903890071424401,
        "smoothedEle": 47.503239536419386,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901877,
        "lng": 120.530349,
        "ele": 47.25,
        "distanceKm": 97.92249136484195,
        "gradePct": -0.17215672112642832,
        "smoothedEle": 47.43599392706168,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901761,
        "lng": 120.529699,
        "ele": 47.75,
        "distanceKm": 97.99030874304212,
        "gradePct": -0.1390630153269983,
        "smoothedEle": 47.358184349506644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901674,
        "lng": 120.52934,
        "ele": 47.25,
        "distanceKm": 98.02833232273578,
        "gradePct": -0.14692351243825788,
        "smoothedEle": 47.278338320666116,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901503,
        "lng": 120.52885,
        "ele": 47.25,
        "distanceKm": 98.08200406955311,
        "gradePct": -0.18568024140444897,
        "smoothedEle": 47.127002191042045,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901332,
        "lng": 120.52836,
        "ele": 47.25,
        "distanceKm": 98.13567587554691,
        "gradePct": -0.2541045374865866,
        "smoothedEle": 46.91265773813262,
        "gradeBand": "descent"
      },
      {
        "lat": 22.901129,
        "lng": 120.527811,
        "ele": 48,
        "distanceKm": 98.19627137807915,
        "gradePct": -0.27780370108386837,
        "smoothedEle": 46.79005596080982,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900932498867757,
        "lng": 120.52744705647476,
        "ele": 47.241461780321146,
        "distanceKm": 98.23948177692726,
        "gradePct": -0.26652150965068316,
        "smoothedEle": 46.71385762055844,
        "gradeBand": "descent"
      },
      {
        "lat": 22.90069,
        "lng": 120.527116,
        "ele": 46,
        "distanceKm": 98.28280619269641,
        "gradePct": -0.23540152883870058,
        "smoothedEle": 46.65299576349225,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900281,
        "lng": 120.52658,
        "ele": 44.75,
        "distanceKm": 98.35409894482984,
        "gradePct": -0.1889764690367963,
        "smoothedEle": 46.49742973931294,
        "gradeBand": "descent"
      },
      {
        "lat": 22.900016,
        "lng": 120.526208,
        "ele": 46,
        "distanceKm": 98.40226772318721,
        "gradePct": -0.22515285927544007,
        "smoothedEle": 46.329176131466426,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8998055,
        "lng": 120.525848,
        "ele": 46.5,
        "distanceKm": 98.44594442223809,
        "gradePct": -0.3082436451355362,
        "smoothedEle": 46.08829164825106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.899595,
        "lng": 120.525488,
        "ele": 47,
        "distanceKm": 98.48962116960439,
        "gradePct": -0.40904602648266447,
        "smoothedEle": 45.820032930107836,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8993714,
        "lng": 120.5250514,
        "ele": 46.44999999999994,
        "distanceKm": 98.5407895917522,
        "gradePct": -0.4594703411481908,
        "smoothedEle": 45.607531043484016,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8991478,
        "lng": 120.5246148,
        "ele": 45.900000000000034,
        "distanceKm": 98.59195807833323,
        "gradePct": -0.40269052136779276,
        "smoothedEle": 45.559806692127296,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8989242,
        "lng": 120.5241782,
        "ele": 45.349999999999966,
        "distanceKm": 98.64312662934732,
        "gradePct": -0.25368808214750155,
        "smoothedEle": 45.59645609483211,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8987006,
        "lng": 120.5237416,
        "ele": 44.80000000000006,
        "distanceKm": 98.6942952447935,
        "gradePct": -0.11284692023677872,
        "smoothedEle": 45.57492770749245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898477,
        "lng": 120.523305,
        "ele": 44.25,
        "distanceKm": 98.74546392467158,
        "gradePct": -0.02792900061691444,
        "smoothedEle": 45.54731333725384,
        "gradeBand": "descent"
      },
      {
        "lat": 22.898245285714285,
        "lng": 120.52284985714284,
        "ele": 44.785714285714285,
        "distanceKm": 98.79873134655442,
        "gradePct": 0.01147768581353487,
        "smoothedEle": 45.58761340759245,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89801357142857,
        "lng": 120.52239471428571,
        "ele": 45.32142857142857,
        "distanceKm": 98.85199883813777,
        "gradePct": 0.0765826864982582,
        "smoothedEle": 45.74588862601273,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897781857142856,
        "lng": 120.52193957142856,
        "ele": 45.857142857142854,
        "distanceKm": 98.90526639942355,
        "gradePct": 0.21376168488497932,
        "smoothedEle": 45.99653023805723,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897550142857142,
        "lng": 120.52148442857143,
        "ele": 46.392857142857146,
        "distanceKm": 98.95853403040859,
        "gradePct": 0.34179666086223875,
        "smoothedEle": 46.24079499526186,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897318428571428,
        "lng": 120.52102928571428,
        "ele": 46.92857142857143,
        "distanceKm": 99.01180173109476,
        "gradePct": 0.4261165333480978,
        "smoothedEle": 46.4786828810063,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.897086714285713,
        "lng": 120.52057414285714,
        "ele": 47.464285714285715,
        "distanceKm": 99.0650695014789,
        "gradePct": 0.39696163726522266,
        "smoothedEle": 46.60131372362712,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896855,
        "lng": 120.520119,
        "ele": 48,
        "distanceKm": 99.11833734156292,
        "gradePct": 0.24890734423995298,
        "smoothedEle": 46.55428321267953,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89664433333333,
        "lng": 120.51970033333333,
        "ele": 47.416666666666664,
        "distanceKm": 99.1672035792887,
        "gradePct": 0.03425342089444023,
        "smoothedEle": 46.348019120261384,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.896433666666667,
        "lng": 120.51928166666666,
        "ele": 46.833333333333336,
        "distanceKm": 99.21606987546193,
        "gradePct": -0.23681318683803826,
        "smoothedEle": 46.01488245154372,
        "gradeBand": "descent"
      },
      {
        "lat": 22.896223,
        "lng": 120.518863,
        "ele": 46.25,
        "distanceKm": 99.26493623007994,
        "gradePct": -0.4665439906078395,
        "smoothedEle": 45.667918930546875,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895999289552716,
        "lng": 120.51838381378357,
        "ele": 45.26854858345298,
        "distanceKm": 99.31996471696309,
        "gradePct": -0.6422418351127115,
        "smoothedEle": 45.262930400781634,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89576464477636,
        "lng": 120.51790990689179,
        "ele": 44.009274291726655,
        "distanceKm": 99.37507654600908,
        "gradePct": -0.7274570450214813,
        "smoothedEle": 44.83943257882458,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89553,
        "lng": 120.517436,
        "ele": 42.75,
        "distanceKm": 99.43018844901118,
        "gradePct": -0.7249013317711505,
        "smoothedEle": 44.46483433223956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895298136817775,
        "lng": 120.51698656142084,
        "ele": 43.125994349551604,
        "distanceKm": 99.48295418641064,
        "gradePct": -0.6905488102142288,
        "smoothedEle": 44.154216071322026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.895066273635553,
        "lng": 120.51653712284167,
        "ele": 43.5019886991032,
        "distanceKm": 99.53571999245892,
        "gradePct": -0.6259448449815128,
        "smoothedEle": 43.88997187727924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894834410453328,
        "lng": 120.5160876842625,
        "ele": 43.8779830486547,
        "distanceKm": 99.5884858671558,
        "gradePct": -0.5215632035099024,
        "smoothedEle": 43.7051623731727,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894602536471297,
        "lng": 120.51563825230014,
        "ele": 44.24802179172624,
        "distanceKm": 99.64125180591022,
        "gradePct": -0.3841498721908872,
        "smoothedEle": 43.631407464666616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894369652353472,
        "lng": 120.5151894392251,
        "ele": 44.06101634379466,
        "distanceKm": 99.69401754314782,
        "gradePct": -0.20094315083369169,
        "smoothedEle": 43.69692593896646,
        "gradeBand": "descent"
      },
      {
        "lat": 22.894136768235647,
        "lng": 120.51474062615007,
        "ele": 43.874010895863144,
        "distanceKm": 99.74678334914151,
        "gradePct": -0.02906916730496748,
        "smoothedEle": 43.79308475902821,
        "gradeBand": "descent"
      },
      {
        "lat": 22.893903884117826,
        "lng": 120.51429181307503,
        "ele": 43.68700544793157,
        "distanceKm": 99.79954922389297,
        "gradePct": 0.12721728549805708,
        "smoothedEle": 43.94413286102765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893671,
        "lng": 120.513843,
        "ele": 43.5,
        "distanceKm": 99.8523151674007,
        "gradePct": 0.23272206853535263,
        "smoothedEle": 44.11058882220333,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893442867336223,
        "lng": 120.51338428616,
        "ele": 43.61212811070882,
        "distanceKm": 99.90571414840845,
        "gradePct": 0.2335822961010268,
        "smoothedEle": 44.185406073296775,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.893214,
        "lng": 120.512926,
        "ele": 43.75,
        "distanceKm": 99.95911353633252,
        "gradePct": 0.1920207192400349,
        "smoothedEle": 44.212422710288045,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892999500000002,
        "lng": 120.5124805,
        "ele": 44.625,
        "distanceKm": 100.01060607477545,
        "gradePct": 0.11392350180447701,
        "smoothedEle": 44.20685991451101,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892785,
        "lng": 120.512035,
        "ele": 45.5,
        "distanceKm": 100.06209867715648,
        "gradePct": 0.033099309093148815,
        "smoothedEle": 44.19049510469632,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892560506666918,
        "lng": 120.51159649456437,
        "ele": 45.01250090535787,
        "distanceKm": 100.11348792483396,
        "gradePct": 0.006312712481108117,
        "smoothedEle": 44.201964526406016,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892336013333836,
        "lng": 120.51115798912873,
        "ele": 44.52500181071573,
        "distanceKm": 100.164877237474,
        "gradePct": 0.005975412514171467,
        "smoothedEle": 44.2237508763188,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.892111520000753,
        "lng": 120.51071948369311,
        "ele": 44.03750271607373,
        "distanceKm": 100.2162666150735,
        "gradePct": 0.02042254552035387,
        "smoothedEle": 44.24590603519204,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.89188702666767,
        "lng": 120.51028097825748,
        "ele": 43.5500036214316,
        "distanceKm": 100.26765605763313,
        "gradePct": 0.013056820618888835,
        "smoothedEle": 44.21784908205826,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.891662521053505,
        "lng": 120.50984248283478,
        "ele": 43.615130826569526,
        "distanceKm": 100.31904533196287,
        "gradePct": -0.04723269944811225,
        "smoothedEle": 44.10985517412917,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89143801403567,
        "lng": 120.50940398855653,
        "ele": 43.74342055104633,
        "distanceKm": 100.37043464460194,
        "gradePct": -0.11206333761502858,
        "smoothedEle": 44.002020128877604,
        "gradeBand": "descent"
      },
      {
        "lat": 22.891213507017834,
        "lng": 120.50896549427826,
        "ele": 43.871710275523164,
        "distanceKm": 100.42182402220187,
        "gradePct": -0.1679549707320523,
        "smoothedEle": 43.9069619313868,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890989,
        "lng": 120.508527,
        "ele": 44,
        "distanceKm": 100.47321346475916,
        "gradePct": -0.17407206369244685,
        "smoothedEle": 43.858026134115576,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890778849810932,
        "lng": 120.50810779225716,
        "ele": 44.091052941538095,
        "distanceKm": 100.52210250471114,
        "gradePct": -0.10296484142651816,
        "smoothedEle": 43.897510337137625,
        "gradeBand": "descent"
      },
      {
        "lat": 22.890568699621863,
        "lng": 120.50768858451431,
        "ele": 44.1821058830762,
        "distanceKm": 100.57099160307938,
        "gradePct": -0.007095483827601511,
        "smoothedEle": 43.986798919732536,
        "gradeBand": "descent"
      },
      {
        "lat": 22.89035826570686,
        "lng": 120.5072695452683,
        "ele": 44.09792181186018,
        "distanceKm": 100.61988069140163,
        "gradePct": 0.07815629623104914,
        "smoothedEle": 44.06686922632687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.890147,
        "lng": 120.506851,
        "ele": 43.5,
        "distanceKm": 100.66876978978512,
        "gradePct": 0.13006339094200384,
        "smoothedEle": 44.122384422839275,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889892,
        "lng": 120.506338,
        "ele": 43.999999999999936,
        "distanceKm": 100.72848252942156,
        "gradePct": 0.10191538355933927,
        "smoothedEle": 44.11299325948777,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.889637,
        "lng": 120.505825,
        "ele": 44.5,
        "distanceKm": 100.78819535596244,
        "gradePct": 0.005020390467862441,
        "smoothedEle": 44.02501592189047,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8894385,
        "lng": 120.5054415,
        "ele": 44.5,
        "distanceKm": 100.83325673448675,
        "gradePct": -0.07736763624491051,
        "smoothedEle": 43.92732289544125,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88924,
        "lng": 120.505058,
        "ele": 44.5,
        "distanceKm": 100.87831816310836,
        "gradePct": -0.14286252118359297,
        "smoothedEle": 43.835157685286674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888998666666666,
        "lng": 120.50458266666666,
        "ele": 43.99999999999996,
        "distanceKm": 100.93391601267312,
        "gradePct": -0.20560439780506518,
        "smoothedEle": 43.693779091865565,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888757333333334,
        "lng": 120.50410733333334,
        "ele": 43.50000000000004,
        "distanceKm": 100.98951393807268,
        "gradePct": -0.28612153602491425,
        "smoothedEle": 43.44991416506026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888516,
        "lng": 120.503632,
        "ele": 43,
        "distanceKm": 101.04511193930922,
        "gradePct": -0.4146249405804715,
        "smoothedEle": 43.07382528229951,
        "gradeBand": "descent"
      },
      {
        "lat": 22.888319,
        "lng": 120.503226,
        "ele": 43.25,
        "distanceKm": 101.09211864354525,
        "gradePct": -0.5534140295167972,
        "smoothedEle": 42.693236677011754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88809225,
        "lng": 120.50277675,
        "ele": 42.56249999999995,
        "distanceKm": 101.14459412099929,
        "gradePct": -0.6852738081576543,
        "smoothedEle": 42.27639490590012,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8878655,
        "lng": 120.5023275,
        "ele": 41.87500000000009,
        "distanceKm": 101.1970696658854,
        "gradePct": -0.7103691115106733,
        "smoothedEle": 41.978065737205476,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88763875,
        "lng": 120.50187825,
        "ele": 41.18750000000005,
        "distanceKm": 101.2495452782055,
        "gradePct": -0.6044865865904349,
        "smoothedEle": 41.82895769161532,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887412,
        "lng": 120.501429,
        "ele": 40.5,
        "distanceKm": 101.30202095795775,
        "gradePct": -0.39275298038348944,
        "smoothedEle": 41.82907115032798,
        "gradeBand": "descent"
      },
      {
        "lat": 22.887185544020863,
        "lng": 120.50098757031672,
        "ele": 40.340523958354275,
        "distanceKm": 101.3537796351143,
        "gradePct": -0.1489019729132025,
        "smoothedEle": 41.92637031527794,
        "gradeBand": "descent"
      },
      {
        "lat": 22.886961,
        "lng": 120.500545,
        "ele": 41,
        "distanceKm": 101.40553760303827,
        "gradePct": 0.10181208883262938,
        "smoothedEle": 42.157628498467574,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88671625,
        "lng": 120.50007825,
        "ele": 42.000000000000064,
        "distanceKm": 101.46055466121906,
        "gradePct": 0.3153548254280016,
        "smoothedEle": 42.45969114607769,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8864715,
        "lng": 120.4996115,
        "ele": 43.000000000000135,
        "distanceKm": 101.51557179433426,
        "gradePct": 0.47672820535747845,
        "smoothedEle": 42.8080012619998,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88622675,
        "lng": 120.49914475,
        "ele": 43.999999999999936,
        "distanceKm": 101.57058900238316,
        "gradePct": 0.6004025351871634,
        "smoothedEle": 43.20228080209511,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885982,
        "lng": 120.498678,
        "ele": 45,
        "distanceKm": 101.62560628536501,
        "gradePct": 0.662995486905268,
        "smoothedEle": 43.59380346826243,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885761260763605,
        "lng": 120.49821168712415,
        "ele": 44.83448114307537,
        "distanceKm": 101.67931322874706,
        "gradePct": 0.6759925864139344,
        "smoothedEle": 43.93043566640789,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885525130381804,
        "lng": 120.49775384356208,
        "ele": 44.54224057153768,
        "distanceKm": 101.73306494613706,
        "gradePct": 0.6969481452715777,
        "smoothedEle": 44.32726181751066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885289,
        "lng": 120.497296,
        "ele": 44.25,
        "distanceKm": 101.78681673472455,
        "gradePct": 0.7490666596066156,
        "smoothedEle": 44.81589646954151,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.885116582412525,
        "lng": 120.49694273840161,
        "ele": 44.08795339523123,
        "distanceKm": 101.8277704622619,
        "gradePct": 0.7900648508111268,
        "smoothedEle": 45.18749811289014,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884945,
        "lng": 120.496589,
        "ele": 43.75,
        "distanceKm": 101.86872405219655,
        "gradePct": 0.8013201646707763,
        "smoothedEle": 45.466703613441446,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884750223980983,
        "lng": 120.4962158806368,
        "ele": 44.21474164709598,
        "distanceKm": 101.91265695983809,
        "gradePct": 0.7507833908049193,
        "smoothedEle": 45.678165084576,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884556815987324,
        "lng": 120.49584192042452,
        "ele": 45.643161098063985,
        "distanceKm": 101.95659021597078,
        "gradePct": 0.6637780422112604,
        "smoothedEle": 45.86867612583987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88436340799366,
        "lng": 120.49546796021227,
        "ele": 47.07158054903199,
        "distanceKm": 102.00052351970024,
        "gradePct": 0.5721817246963485,
        "smoothedEle": 46.084631108769024,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88417,
        "lng": 120.495094,
        "ele": 48.5,
        "distanceKm": 102.04445687102826,
        "gradePct": 0.5522207385569786,
        "smoothedEle": 46.40570097501209,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883965,
        "lng": 120.494686,
        "ele": 48,
        "distanceKm": 102.09206558998397,
        "gradePct": 0.6126752824118304,
        "smoothedEle": 46.80440358066169,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883807279920127,
        "lng": 120.49436142622818,
        "ele": 47.54400836248141,
        "distanceKm": 102.1296576596288,
        "gradePct": 0.7394763333493374,
        "smoothedEle": 47.230839148331206,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883639,
        "lng": 120.494043,
        "ele": 47,
        "distanceKm": 102.16726412955147,
        "gradePct": 0.8988775747440394,
        "smoothedEle": 47.718899098811036,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883436,
        "lng": 120.49356,
        "ele": 47,
        "distanceKm": 102.22165000769795,
        "gradePct": 1.0042459390993554,
        "smoothedEle": 48.2475177342513,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883145,
        "lng": 120.493059,
        "ele": 48,
        "distanceKm": 102.28232305403431,
        "gradePct": 0.8639975224737084,
        "smoothedEle": 48.4508090648318,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882883,
        "lng": 120.492561,
        "ele": 48.5,
        "distanceKm": 102.34107243161866,
        "gradePct": 0.4957516676796488,
        "smoothedEle": 48.3704843609675,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883073,
        "lng": 120.492379,
        "ele": 50,
        "distanceKm": 102.36925012969826,
        "gradePct": 0.28492297727775856,
        "smoothedEle": 48.30804853293438,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882941,
        "lng": 120.492025,
        "ele": 50.75,
        "distanceKm": 102.40837304195446,
        "gradePct": 0.06413006290978893,
        "smoothedEle": 48.246728706994666,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.8827805,
        "lng": 120.49166,
        "ele": 49.875,
        "distanceKm": 102.4498058900185,
        "gradePct": -0.06828053871250264,
        "smoothedEle": 48.20529585893063,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88262,
        "lng": 120.491295,
        "ele": 49,
        "distanceKm": 102.49123877797999,
        "gradePct": -0.13737806418326476,
        "smoothedEle": 48.16386297096914,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882214,
        "lng": 120.490912,
        "ele": 48,
        "distanceKm": 102.55105160169477,
        "gradePct": -0.17122631100253582,
        "smoothedEle": 48.00592000559709,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88216,
        "lng": 120.490717,
        "ele": 47.25,
        "distanceKm": 102.57191122501924,
        "gradePct": -0.18537498787096232,
        "smoothedEle": 47.93312765343093,
        "gradeBand": "descent"
      },
      {
        "lat": 22.88182,
        "lng": 120.490622,
        "ele": 46.75,
        "distanceKm": 102.61095012022196,
        "gradePct": -0.24227303739882455,
        "smoothedEle": 47.75960555392952,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881806451349068,
        "lng": 120.49008591820363,
        "ele": 46.5,
        "distanceKm": 102.66588968744574,
        "gradePct": -0.4274003152847047,
        "smoothedEle": 47.33441143093397,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881787,
        "lng": 120.48955,
        "ele": 46.5,
        "distanceKm": 102.72083442967741,
        "gradePct": -0.572365556027665,
        "smoothedEle": 46.940980975860704,
        "gradeBand": "descent"
      },
      {
        "lat": 22.8817895,
        "lng": 120.4889985,
        "ele": 46.5,
        "distanceKm": 102.77733354929896,
        "gradePct": -0.6190820647453973,
        "smoothedEle": 46.67086209667614,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881792,
        "lng": 120.488447,
        "ele": 46.5,
        "distanceKm": 102.8338326678801,
        "gradePct": -0.5229918071396998,
        "smoothedEle": 46.53652690095465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881828333333335,
        "lng": 120.487982,
        "ele": 46.5,
        "distanceKm": 102.88164061351792,
        "gradePct": -0.3529788003506823,
        "smoothedEle": 46.51566971730926,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881864666666665,
        "lng": 120.487517,
        "ele": 46.5,
        "distanceKm": 102.92944854645356,
        "gradePct": -0.18422339865801002,
        "smoothedEle": 46.53135060640545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.881901,
        "lng": 120.487052,
        "ele": 46.5,
        "distanceKm": 102.97725646668417,
        "gradePct": -0.05385727146145592,
        "smoothedEle": 46.56351608107989,
        "gradeBand": "descent"
      },
      {
        "lat": 22.882005,
        "lng": 120.486336,
        "ele": 46.5,
        "distanceKm": 103.05151302622221,
        "gradePct": 0.27923817387355104,
        "smoothedEle": 47.087289834625125,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882078365907063,
        "lng": 120.48588431797621,
        "ele": 46.592633721039384,
        "distanceKm": 103.09849914588507,
        "gradePct": 0.5051777475891831,
        "smoothedEle": 47.53155477128973,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882151731814126,
        "lng": 120.48543263595242,
        "ele": 46.68526744207873,
        "distanceKm": 103.14548524092247,
        "gradePct": 0.706144714778248,
        "smoothedEle": 47.9544296266263,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88223,
        "lng": 120.484982,
        "ele": 46.75,
        "distanceKm": 103.19246370153938,
        "gradePct": 0.8237870601454691,
        "smoothedEle": 48.31835547908786,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882291,
        "lng": 120.484333,
        "ele": 49.75,
        "distanceKm": 103.25929539364256,
        "gradePct": 0.8293596001533624,
        "smoothedEle": 48.819593169861704,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882488,
        "lng": 120.483819,
        "ele": 51.25,
        "distanceKm": 103.31632658110321,
        "gradePct": 0.7846126215890722,
        "smoothedEle": 49.26122693143113,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.882817,
        "lng": 120.483406,
        "ele": 51,
        "distanceKm": 103.37225891013661,
        "gradePct": 0.796147157597985,
        "smoothedEle": 49.75413027792457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883342,
        "lng": 120.483205,
        "ele": 50.25,
        "distanceKm": 103.43416143548795,
        "gradePct": 0.8618905589438431,
        "smoothedEle": 50.354869601589826,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.883686,
        "lng": 120.483074,
        "ele": 50.25,
        "distanceKm": 103.4746984196844,
        "gradePct": 0.9106847474553857,
        "smoothedEle": 50.760239443554326,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884151,
        "lng": 120.483079,
        "ele": 50.25,
        "distanceKm": 103.52640666904276,
        "gradePct": 0.7691493547574983,
        "smoothedEle": 50.88835636128647,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884180497171634,
        "lng": 120.48251214131034,
        "ele": 50.89124286160929,
        "distanceKm": 103.58457006376896,
        "gradePct": 0.5023660832326229,
        "smoothedEle": 50.878337281073186,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884204,
        "lng": 120.481945,
        "ele": 51.5,
        "distanceKm": 103.64272859239772,
        "gradePct": 0.2046621449852821,
        "smoothedEle": 50.84986546065802,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884426,
        "lng": 120.481969,
        "ele": 51.5,
        "distanceKm": 103.66753603700587,
        "gradePct": 0.09198109905971788,
        "smoothedEle": 50.872577814888466,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884468,
        "lng": 120.481921,
        "ele": 51.75,
        "distanceKm": 103.67431764477493,
        "gradePct": 0.0650563470185856,
        "smoothedEle": 50.886544388496766,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884507,
        "lng": 120.481826,
        "ele": 51.75,
        "distanceKm": 103.6849722044208,
        "gradePct": 0.06205220615866392,
        "smoothedEle": 50.90979909077526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884546,
        "lng": 120.481808,
        "ele": 51.75,
        "distanceKm": 103.68968457197472,
        "gradePct": 0.06163235577715566,
        "smoothedEle": 50.92063516735379,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.884759,
        "lng": 120.481856,
        "ele": 51.75,
        "distanceKm": 103.71387418611559,
        "gradePct": 0.06253652446951374,
        "smoothedEle": 50.982377825534776,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.88475,
        "lng": 120.48198,
        "ele": 51.75,
        "distanceKm": 103.72661645224916,
        "gradePct": 0.06569310681471215,
        "smoothedEle": 51.01970643818794,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 103.72661645224916,
      "elevationGainM": 956.3094579765635,
      "elevationLossM": 957.2498201124527,
      "minimumElevationM": 40.340523958354275,
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
        "endIndex": 888,
        "startDistanceKm": 22.58919850323402,
        "endDistanceKm": 39.58873518190923,
        "distanceKm": 16.99953667867521,
        "gainM": 466.0196380147413,
        "averageGradePct": 2.741366702066251,
        "maximumGradePct": 9.989766117449477
      },
      {
        "startIndex": 1054,
        "endIndex": 1139,
        "startDistanceKm": 44.8690039838887,
        "endDistanceKm": 48.90584387063589,
        "distanceKm": 4.036839886747188,
        "gainM": 77.28606172991374,
        "averageGradePct": 1.9145188785822622,
        "maximumGradePct": 4.195502357525893
      },
      {
        "startIndex": 1174,
        "endIndex": 1227,
        "startDistanceKm": 50.48353392223004,
        "endDistanceKm": 53.06334860512841,
        "distanceKm": 2.5798146828983732,
        "gainM": 74.54066533105419,
        "averageGradePct": 2.8893806142427705,
        "maximumGradePct": 7.658378989229709
      },
      {
        "startIndex": 1310,
        "endIndex": 1371,
        "startDistanceKm": 56.76926845196836,
        "endDistanceKm": 59.213730087642396,
        "distanceKm": 2.4444616356740383,
        "gainM": 44.61500092912377,
        "averageGradePct": 1.8251462930741222,
        "maximumGradePct": 7.047714849010006
      },
      {
        "startIndex": 1951,
        "endIndex": 2005,
        "startDistanceKm": 86.54432985314989,
        "endDistanceKm": 89.15713929005005,
        "distanceKm": 2.6128094369001644,
        "gainM": 38.40529366485876,
        "averageGradePct": 1.4698849874954056,
        "maximumGradePct": 3.6658699759149065
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
