"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("pingtung", {
  "pingtung-south-border": {
    "routeId": "pingtung-south-border",
    "direction": "point-to-point",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T15:42:13.914Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "74f20da620a05eb50439b9a9e7e9d5f750bd5c3b58565c325ee11f254b462880",
      "roadPolicyAuditSha256": "6d8b3fa65b768101838e9e617fc70f457fbe50fa414a4c98ce5db12777554a26",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "台1與台26由西岸低地繞行鵝鑾鼻至風吹砂，含海岸丘陵與長緩坡；預設100公尺分析為爬升388公尺、最大持續坡度9.5%。比較500/200、750/300、1000/500公尺後，爬升依序為273、244、216公尺，最大持續坡度依序為5.9%、5.6%、5.1%；路線最高約119公尺，公路局資料確認風吹砂位於台26約49K海岸丘陵路段，500/200保留鵝鑾鼻至風吹砂持續緩坡並排除短距離高程雜訊，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://www.thb.gov.tw/News_Content_table.aspx?n=87&s=57348",
        "referenceLabel": "公路局台26風吹砂49K海岸丘陵路段資料"
      },
      "reviewedAt": "2026-07-29T15:55:00.000Z",
      "reviewerNote": "初版枋山車站點導入pedestrian 67公尺，楓港研究點導入footway 8公尺，車城福安宮點導入steps 9公尺往返，南灣點導入service／footway約76與71公尺往返，鵝鑾鼻點導入path 42公尺往返，均未採用；起點移到車站南側公共道路，刪除楓港偏點，車城、南灣與鵝鑾鼻均改至台26主線。最終raw無footway、pedestrian、path、steps、track、service、private、access禁制、bicycle=no、motorway、trunk或motorroad；46492公尺oneway=yes全部順向，沒有reversedirection=yes與oneway=yes同段。軌跡只走枋山南側公共道路、台1與台26一般道路，不使用台9快速化路段、交流道匝道、國家公園步道、沙灘、草原或珊瑚礁小徑。500/200公尺分析為57.0公里、爬升273公尺、最大5.9%，三組比較已記於elevationAnalysis。公路局台26資料：https://www.thb.gov.tw/News.aspx?PageSize=100&n=455&page=1&sms=13741；冬季落山風、夏季曝曬、大型車、野生動物及墾丁活動交通管制均須出發前重新查核。"
    },
    "waypoints": [
      {
        "name": "枋山車站南側公共道路",
        "lat": 22.262287,
        "lng": 120.659198,
        "role": "start"
      },
      {
        "name": "車城福安宮外台26主線",
        "lat": 22.073247,
        "lng": 120.714,
        "role": "via"
      },
      {
        "name": "恆春古城東門外台26",
        "lat": 22.00455,
        "lng": 120.75048,
        "role": "via"
      },
      {
        "name": "南灣台26主線",
        "lat": 21.961084,
        "lng": 120.763083,
        "role": "via"
      },
      {
        "name": "船帆石台26",
        "lat": 21.93215,
        "lng": 120.82352,
        "role": "via"
      },
      {
        "name": "鵝鑾鼻公園外台26主線",
        "lat": 21.905757,
        "lng": 120.850661,
        "role": "via"
      },
      {
        "name": "風吹砂台26觀景道路",
        "lat": 21.946683,
        "lng": 120.839111,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.262287,
        "lng": 120.659198,
        "ele": 14.25,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 13.721831763129122,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.262160666666666,
        "lng": 120.65877366666668,
        "ele": 14.083333333333334,
        "distanceKm": 0.045870642016404596,
        "gradePct": -0.2961358548218939,
        "smoothedEle": 13.585992345281552,
        "gradeBand": "descent"
      },
      {
        "lat": 22.262034333333332,
        "lng": 120.65834933333333,
        "ele": 13.916666666666666,
        "distanceKm": 0.09174132155439686,
        "gradePct": -0.3005318877805542,
        "smoothedEle": 13.446119837586865,
        "gradeBand": "descent"
      },
      {
        "lat": 22.261908,
        "lng": 120.657925,
        "ele": 13.75,
        "distanceKm": 0.1376120386109936,
        "gradePct": -0.3038874738410466,
        "smoothedEle": 13.303646015293008,
        "gradeBand": "descent"
      },
      {
        "lat": 22.261964222222222,
        "lng": 120.65744077777778,
        "ele": 13.416666666666666,
        "distanceKm": 0.18783242041939438,
        "gradePct": -0.3068888386991245,
        "smoothedEle": 13.145395029403586,
        "gradeBand": "descent"
      },
      {
        "lat": 22.262020444444442,
        "lng": 120.65695655555555,
        "ele": 13.083333333333334,
        "distanceKm": 0.23805278236760513,
        "gradePct": -0.3118658682318891,
        "smoothedEle": 12.985412094317521,
        "gradeBand": "descent"
      },
      {
        "lat": 22.262076666666665,
        "lng": 120.65647233333334,
        "ele": 12.75,
        "distanceKm": 0.2882731244542257,
        "gradePct": -0.3682708869242184,
        "smoothedEle": 12.720153564918405,
        "gradeBand": "descent"
      },
      {
        "lat": 22.26213288888889,
        "lng": 120.65598811111111,
        "ele": 12.416666666666668,
        "distanceKm": 0.3384934466820615,
        "gradePct": -0.4457401644576064,
        "smoothedEle": 12.409388254363249,
        "gradeBand": "descent"
      },
      {
        "lat": 22.26218911111111,
        "lng": 120.65550388888889,
        "ele": 12.083333333333334,
        "distanceKm": 0.3887137490495648,
        "gradePct": -0.5264275851282614,
        "smoothedEle": 12.089732281989905,
        "gradeBand": "descent"
      },
      {
        "lat": 22.262245333333333,
        "lng": 120.65501966666666,
        "ele": 11.75,
        "distanceKm": 0.43893403155678645,
        "gradePct": -0.6104674338046534,
        "smoothedEle": 11.759822561800652,
        "gradeBand": "descent"
      },
      {
        "lat": 22.262301555555556,
        "lng": 120.65453544444445,
        "ele": 11.416666666666666,
        "distanceKm": 0.4891542942021789,
        "gradePct": -0.6599729510254608,
        "smoothedEle": 11.394754950136328,
        "gradeBand": "descent"
      },
      {
        "lat": 22.262357777777776,
        "lng": 120.65405122222222,
        "ele": 11.083333333333334,
        "distanceKm": 0.5393745369885473,
        "gradePct": -0.7046252764281071,
        "smoothedEle": 10.994529495952886,
        "gradeBand": "descent"
      },
      {
        "lat": 22.262414,
        "lng": 120.653567,
        "ele": 10.75,
        "distanceKm": 0.5895947599144917,
        "gradePct": -0.7623992254301424,
        "smoothedEle": 10.559146248236395,
        "gradeBand": "descent"
      },
      {
        "lat": 22.262486,
        "lng": 120.652991,
        "ele": 10.5,
        "distanceKm": 0.6494070833788671,
        "gradePct": -0.8962801237774327,
        "smoothedEle": 9.891130254911078,
        "gradeBand": "descent"
      },
      {
        "lat": 22.26207775,
        "lng": 120.652957,
        "ele": 9.875,
        "distanceKm": 0.6949371099959716,
        "gradePct": -1.0497069320131658,
        "smoothedEle": 9.24925548498347,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2616695,
        "lng": 120.652923,
        "ele": 9.25,
        "distanceKm": 0.7404671373973227,
        "gradePct": -1.2233334275064516,
        "smoothedEle": 8.538390362907078,
        "gradeBand": "descent"
      },
      {
        "lat": 22.26126125,
        "lng": 120.652889,
        "ele": 8.625,
        "distanceKm": 0.7859971655829092,
        "gradePct": -1.4117189493889737,
        "smoothedEle": 7.766897623674945,
        "gradeBand": "descent"
      },
      {
        "lat": 22.260853,
        "lng": 120.652855,
        "ele": 8,
        "distanceKm": 0.8315271945527196,
        "gradePct": -1.479242180682907,
        "smoothedEle": 7.132338047317874,
        "gradeBand": "descent"
      },
      {
        "lat": 22.26049,
        "lng": 120.6528105,
        "ele": 6.5,
        "distanceKm": 0.8721499508666178,
        "gradePct": -1.447240105826427,
        "smoothedEle": 6.676024866406033,
        "gradeBand": "descent"
      },
      {
        "lat": 22.260127,
        "lng": 120.652766,
        "ele": 5,
        "distanceKm": 0.9127727085192656,
        "gradePct": -1.3543278829536411,
        "smoothedEle": 6.262130637346826,
        "gradeBand": "descent"
      },
      {
        "lat": 22.259677,
        "lng": 120.652722,
        "ele": 3.75,
        "distanceKm": 0.9630149466882841,
        "gradePct": -1.1683226286661983,
        "smoothedEle": 5.819679206501189,
        "gradeBand": "descent"
      },
      {
        "lat": 22.259155,
        "lng": 120.652749,
        "ele": 2.75,
        "distanceKm": 1.0211252440993641,
        "gradePct": -0.9375950107039349,
        "smoothedEle": 5.4021217371576995,
        "gradeBand": "descent"
      },
      {
        "lat": 22.25877374526596,
        "lng": 120.65285260106096,
        "ele": 4.214681120605938,
        "distanceKm": 1.064838957376073,
        "gradePct": -0.8163457457109103,
        "smoothedEle": 5.125457361587133,
        "gradeBand": "descent"
      },
      {
        "lat": 22.258406,
        "lng": 120.653005,
        "ele": 5.25,
        "distanceKm": 1.1086348071349832,
        "gradePct": -0.6999533312535162,
        "smoothedEle": 4.904383926609069,
        "gradeBand": "descent"
      },
      {
        "lat": 22.257933,
        "lng": 120.6532355,
        "ele": 5.499999999999999,
        "distanceKm": 1.1663317047291661,
        "gradePct": -0.4911577585513919,
        "smoothedEle": 4.813530786183711,
        "gradeBand": "descent"
      },
      {
        "lat": 22.25746,
        "lng": 120.653466,
        "ele": 5.75,
        "distanceKm": 1.2240286352735317,
        "gradePct": -0.24418155461766894,
        "smoothedEle": 4.895383046302162,
        "gradeBand": "descent"
      },
      {
        "lat": 22.257086823575573,
        "lng": 120.65366507239858,
        "ele": 5.441277757835703,
        "distanceKm": 1.2703057006475647,
        "gradePct": -0.0261006694357473,
        "smoothedEle": 5.045660903090724,
        "gradeBand": "descent"
      },
      {
        "lat": 22.256712058860458,
        "lng": 120.65386065791887,
        "ele": 5.303022206268563,
        "distanceKm": 1.3165840248019949,
        "gradePct": 0.1811493111380496,
        "smoothedEle": 5.254165214000847,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.256337294145343,
        "lng": 120.65405624343914,
        "ele": 5.164766654701422,
        "distanceKm": 1.3628623723893452,
        "gradePct": 0.31464747290575634,
        "smoothedEle": 5.448288759495749,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.255962529430228,
        "lng": 120.65425182895943,
        "ele": 5.026511103134281,
        "distanceKm": 1.4091407434105638,
        "gradePct": 0.38772562369423247,
        "smoothedEle": 5.649713454403588,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.255587764715116,
        "lng": 120.6544474144797,
        "ele": 4.88825555156714,
        "distanceKm": 1.4554191378636994,
        "gradePct": 0.3743856995416134,
        "smoothedEle": 5.746090413334929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.255213,
        "lng": 120.654643,
        "ele": 4.75,
        "distanceKm": 1.5016975557504117,
        "gradePct": 0.2957764454529915,
        "smoothedEle": 5.778647980216758,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.254874666666666,
        "lng": 120.65481899999999,
        "ele": 5.750000000000002,
        "distanceKm": 1.5434516201889374,
        "gradePct": 0.23995025307262016,
        "smoothedEle": 5.846767083685294,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.254536333333334,
        "lng": 120.654995,
        "ele": 6.749999999999998,
        "distanceKm": 1.5852057036134486,
        "gradePct": 0.19786546421512527,
        "smoothedEle": 5.941268112529716,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.254198,
        "lng": 120.655171,
        "ele": 7.75,
        "distanceKm": 1.6269598060231514,
        "gradePct": 0.1870406609713116,
        "smoothedEle": 6.060903822282268,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.253853,
        "lng": 120.6553485,
        "ele": 6.874999999999997,
        "distanceKm": 1.6694492048448233,
        "gradePct": 0.22657592697203208,
        "smoothedEle": 6.209112631586016,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.253508,
        "lng": 120.655526,
        "ele": 6,
        "distanceKm": 1.7119386230155949,
        "gradePct": 0.29456230277390866,
        "smoothedEle": 6.384480236386046,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2531286,
        "lng": 120.65571399999999,
        "ele": 6.2,
        "distanceKm": 1.758351013556469,
        "gradePct": 0.2861637077228548,
        "smoothedEle": 6.452815943524223,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2527492,
        "lng": 120.655902,
        "ele": 6.3999999999999995,
        "distanceKm": 1.8047634259507765,
        "gradePct": 0.1922261249444333,
        "smoothedEle": 6.381758017593415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2523698,
        "lng": 120.65608999999999,
        "ele": 6.6000000000000005,
        "distanceKm": 1.8511758601969932,
        "gradePct": 0.05813923488424068,
        "smoothedEle": 6.261651186755598,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2519904,
        "lng": 120.656278,
        "ele": 6.8,
        "distanceKm": 1.8975883162960336,
        "gradePct": -0.08023814383094988,
        "smoothedEle": 6.164775580205643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.251611,
        "lng": 120.656466,
        "ele": 7,
        "distanceKm": 1.944000794246374,
        "gradePct": -0.15367029708778596,
        "smoothedEle": 6.124346672874216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.250974,
        "lng": 120.656685,
        "ele": 4.5,
        "distanceKm": 2.018331428012007,
        "gradePct": -0.11323258337670476,
        "smoothedEle": 6.120181360679194,
        "gradeBand": "descent"
      },
      {
        "lat": 22.250533,
        "lng": 120.656815,
        "ele": 5.25,
        "distanceKm": 2.0691608155848127,
        "gradePct": -0.055761349616235925,
        "smoothedEle": 6.1125889214581255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.249916,
        "lng": 120.657065,
        "ele": 6.75,
        "distanceKm": 2.1424338938721657,
        "gradePct": -0.015561440720011092,
        "smoothedEle": 6.094588684515193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.249635,
        "lng": 120.65724,
        "ele": 6.25,
        "distanceKm": 2.178498699809158,
        "gradePct": -0.01808794069790843,
        "smoothedEle": 6.086237610776665,
        "gradeBand": "descent"
      },
      {
        "lat": 22.249206,
        "lng": 120.657586,
        "ele": 6,
        "distanceKm": 2.2380263599385284,
        "gradePct": -0.013232241585229941,
        "smoothedEle": 6.090775024758669,
        "gradeBand": "descent"
      },
      {
        "lat": 22.248869,
        "lng": 120.657946,
        "ele": 6.25,
        "distanceKm": 2.2907226405589527,
        "gradePct": 0.11030811796617437,
        "smoothedEle": 6.32790828755058,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.248633333333334,
        "lng": 120.65827333333333,
        "ele": 6.416666666666667,
        "distanceKm": 2.333402628485908,
        "gradePct": 0.18183808570317858,
        "smoothedEle": 6.460483473190632,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.248397666666666,
        "lng": 120.65860066666667,
        "ele": 6.583333333333333,
        "distanceKm": 2.3760826611560493,
        "gradePct": 0.2204352947214699,
        "smoothedEle": 6.527667651918375,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.248162,
        "lng": 120.658928,
        "ele": 6.75,
        "distanceKm": 2.4187627385661608,
        "gradePct": 0.22332870595857582,
        "smoothedEle": 6.535964093643875,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24787,
        "lng": 120.659267,
        "ele": 6.75,
        "distanceKm": 2.4664226436044774,
        "gradePct": 0.185423014401833,
        "smoothedEle": 6.589404330059105,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247578,
        "lng": 120.659606,
        "ele": 6.75,
        "distanceKm": 2.514082601887213,
        "gradePct": 0.13505646757298562,
        "smoothedEle": 6.670583361536393,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.247286000000003,
        "lng": 120.65994500000001,
        "ele": 6.75,
        "distanceKm": 2.561742613415096,
        "gradePct": 0.11548639420777097,
        "smoothedEle": 6.736067253995506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246994,
        "lng": 120.660284,
        "ele": 6.75,
        "distanceKm": 2.6094026781856416,
        "gradePct": 0.12895806273653043,
        "smoothedEle": 6.7920607473585335,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246539,
        "lng": 120.660797,
        "ele": 6.75,
        "distanceKm": 2.682527509577096,
        "gradePct": 0.12138732751416892,
        "smoothedEle": 6.859610344006661,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.246236666666665,
        "lng": 120.66112150000001,
        "ele": 6.833333333333333,
        "distanceKm": 2.7299144834926916,
        "gradePct": 0.1064448862440929,
        "smoothedEle": 6.905225819331254,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24593433333333,
        "lng": 120.661446,
        "ele": 6.916666666666667,
        "distanceKm": 2.777301508208984,
        "gradePct": 0.09913310043504656,
        "smoothedEle": 6.952612844047546,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.245632,
        "lng": 120.6617705,
        "ele": 7,
        "distanceKm": 2.824688583727154,
        "gradePct": 0.0969093527048778,
        "smoothedEle": 6.999999919565717,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.245329666666667,
        "lng": 120.66209500000001,
        "ele": 7.083333333333333,
        "distanceKm": 2.872075710046131,
        "gradePct": 0.09871581398494236,
        "smoothedEle": 7.047387045884692,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.245027333333333,
        "lng": 120.6624195,
        "ele": 7.166666666666667,
        "distanceKm": 2.9194628871640043,
        "gradePct": 0.08822756186866203,
        "smoothedEle": 7.071620065678876,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.244725,
        "lng": 120.662744,
        "ele": 7.25,
        "distanceKm": 2.966850115082235,
        "gradePct": 0.05443529167040979,
        "smoothedEle": 7.051032034261617,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.244451052758592,
        "lng": 120.66306130348713,
        "ele": 7.25,
        "distanceKm": 3.0115084834877437,
        "gradePct": 0.020551733437826663,
        "smoothedEle": 7.027923286201959,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24417710551718,
        "lng": 120.66337860697423,
        "ele": 7.25,
        "distanceKm": 3.0561668985915236,
        "gradePct": -0.013968229229346362,
        "smoothedEle": 7.003541775971392,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243903158275774,
        "lng": 120.66369591046136,
        "ele": 7.25,
        "distanceKm": 3.100825360394671,
        "gradePct": -0.0421008207892943,
        "smoothedEle": 6.977887500703174,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243629,
        "lng": 120.664013,
        "ele": 7,
        "distanceKm": 3.145483784638578,
        "gradePct": -0.05470100154166286,
        "smoothedEle": 6.950912926628614,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243290274313015,
        "lng": 120.6643781323177,
        "ele": 6.525169553033972,
        "distanceKm": 3.198689487239819,
        "gradePct": -0.0587111223802958,
        "smoothedEle": 6.9171343100816625,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242951561927512,
        "lng": 120.6647432769314,
        "ele": 6.604307960861645,
        "distanceKm": 3.251895100858454,
        "gradePct": -0.06104504526946902,
        "smoothedEle": 6.88378389717552,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24261284954201,
        "lng": 120.66510842154513,
        "ele": 6.6834463686893155,
        "distanceKm": 3.305100778654427,
        "gradePct": -0.05761364688444943,
        "smoothedEle": 6.860077769499456,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242274137156507,
        "lng": 120.66547356615884,
        "ele": 6.762584776516986,
        "distanceKm": 3.358306520624823,
        "gradePct": -0.0462963025349787,
        "smoothedEle": 6.850179572338439,
        "gradeBand": "descent"
      },
      {
        "lat": 22.241935424771004,
        "lng": 120.66583871077256,
        "ele": 6.841723184344658,
        "distanceKm": 3.411512326770858,
        "gradePct": -0.017914232262161694,
        "smoothedEle": 6.873268216369287,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2415967123855,
        "lng": 120.66620385538627,
        "ele": 6.920861592172329,
        "distanceKm": 3.4647181970896157,
        "gradePct": 0.04000197865676421,
        "smoothedEle": 6.958074442517791,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.241258,
        "lng": 120.666569,
        "ele": 7,
        "distanceKm": 3.5179241315823124,
        "gradePct": 0.09382768369420039,
        "smoothedEle": 7.045347528289143,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24092675,
        "lng": 120.66691425,
        "ele": 7.125000000000001,
        "distanceKm": 3.5691037359511557,
        "gradePct": 0.12035054227748343,
        "smoothedEle": 7.095566105329426,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240595499999998,
        "lng": 120.6672595,
        "ele": 7.25,
        "distanceKm": 3.6202833986458316,
        "gradePct": 0.1215313545027027,
        "smoothedEle": 7.13031136588882,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24026425,
        "lng": 120.66760475,
        "ele": 7.374999999999999,
        "distanceKm": 3.671463119666034,
        "gradePct": 0.10599952909645873,
        "smoothedEle": 7.181137120063427,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.239933,
        "lng": 120.66795,
        "ele": 7.5,
        "distanceKm": 3.7226428990123095,
        "gradePct": 0.09903286067285225,
        "smoothedEle": 7.248043410196673,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.239586000000003,
        "lng": 120.6682845,
        "ele": 7.25,
        "distanceKm": 3.7743541139767847,
        "gradePct": 0.11710820258550736,
        "smoothedEle": 7.333346929313126,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.239239,
        "lng": 120.668619,
        "ele": 7,
        "distanceKm": 3.8260653857043527,
        "gradePct": 0.15837664765037726,
        "smoothedEle": 7.452806659133666,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.238846000000002,
        "lng": 120.66893766666666,
        "ele": 7.25,
        "distanceKm": 3.880704114665838,
        "gradePct": 0.2260468552879409,
        "smoothedEle": 7.645311396450145,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.238453,
        "lng": 120.66925633333334,
        "ele": 7.5,
        "distanceKm": 3.9353428988455668,
        "gradePct": 0.30278806184834983,
        "smoothedEle": 7.874569625267158,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.23806,
        "lng": 120.669575,
        "ele": 7.75,
        "distanceKm": 3.9899817382403246,
        "gradePct": 0.38482072897769826,
        "smoothedEle": 8.139090221740796,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2376340348397,
        "lng": 120.66991455137772,
        "ele": 8.233750288304352,
        "distanceKm": 4.048844613819996,
        "gradePct": 0.48159143849911734,
        "smoothedEle": 8.49624596610422,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.237208,
        "lng": 120.670254,
        "ele": 9,
        "distanceKm": 4.107707509264988,
        "gradePct": 0.5894080394106432,
        "smoothedEle": 8.937430699543118,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236773,
        "lng": 120.6705905,
        "ele": 9.500000000000004,
        "distanceKm": 4.167198500205408,
        "gradePct": 0.6884287058562919,
        "smoothedEle": 9.4056481508627,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236338,
        "lng": 120.670927,
        "ele": 10,
        "distanceKm": 4.226689553732827,
        "gradePct": 0.7414996352524618,
        "smoothedEle": 9.844817434723403,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.23595,
        "lng": 120.67124100000001,
        "ele": 10.416666666666664,
        "distanceKm": 4.28059572318154,
        "gradePct": 0.738558507148751,
        "smoothedEle": 10.211341500047482,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.235562,
        "lng": 120.671555,
        "ele": 10.833333333333336,
        "distanceKm": 4.334501946272399,
        "gradePct": 0.6760022061791163,
        "smoothedEle": 10.500317849049187,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.235174,
        "lng": 120.671869,
        "ele": 11.25,
        "distanceKm": 4.388408223006995,
        "gradePct": 0.5623007731527854,
        "smoothedEle": 10.686822126489329,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.234745999999998,
        "lng": 120.672201,
        "ele": 11.25,
        "distanceKm": 4.446997050394544,
        "gradePct": 0.41250919861128615,
        "smoothedEle": 10.807912536507393,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.234318,
        "lng": 120.672533,
        "ele": 11.25,
        "distanceKm": 4.505585938644271,
        "gradePct": 0.24906913062561456,
        "smoothedEle": 10.84344539292929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233903499999997,
        "lng": 120.67277200000001,
        "ele": 10.999999999999998,
        "distanceKm": 4.557830191756696,
        "gradePct": 0.1149006990521605,
        "smoothedEle": 10.810830025777971,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233489,
        "lng": 120.673011,
        "ele": 10.75,
        "distanceKm": 4.61007447912226,
        "gradePct": -0.007211573561305856,
        "smoothedEle": 10.717178435681818,
        "gradeBand": "descent"
      },
      {
        "lat": 22.233080318251673,
        "lng": 120.67320966473878,
        "ele": 10.572620768955204,
        "distanceKm": 4.659906483098009,
        "gradePct": -0.12065312019497111,
        "smoothedEle": 10.574435579663252,
        "gradeBand": "descent"
      },
      {
        "lat": 22.23267157426459,
        "lng": 120.67340817925214,
        "ele": 10.386012400656712,
        "distanceKm": 4.70973848068736,
        "gradePct": -0.21460894014013016,
        "smoothedEle": 10.411635137884762,
        "gradeBand": "descent"
      },
      {
        "lat": 22.232262787132296,
        "lng": 120.67360658962606,
        "ele": 10.193006200328355,
        "distanceKm": 4.7595704846742475,
        "gradePct": -0.29058464514751375,
        "smoothedEle": 10.22654113701237,
        "gradeBand": "descent"
      },
      {
        "lat": 22.231854,
        "lng": 120.673805,
        "ele": 10,
        "distanceKm": 4.809402513069636,
        "gradePct": -0.3304095762054586,
        "smoothedEle": 10.057563830073857,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2314375,
        "lng": 120.673952,
        "ele": 9.875,
        "distanceKm": 4.858124222613185,
        "gradePct": -0.3101873225432638,
        "smoothedEle": 9.959166186853889,
        "gradeBand": "descent"
      },
      {
        "lat": 22.231021,
        "lng": 120.674099,
        "ele": 9.75,
        "distanceKm": 4.906845946117873,
        "gradePct": -0.24837468398947474,
        "smoothedEle": 9.924335640040514,
        "gradeBand": "descent"
      },
      {
        "lat": 22.23058,
        "lng": 120.674283,
        "ele": 9.5,
        "distanceKm": 4.959413219215081,
        "gradePct": -0.13286475657939956,
        "smoothedEle": 9.961395764379883,
        "gradeBand": "descent"
      },
      {
        "lat": 22.230136,
        "lng": 120.674571,
        "ele": 9.25,
        "distanceKm": 5.016999802460283,
        "gradePct": 0.027200715650232944,
        "smoothedEle": 10.096621888206524,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.229816666666668,
        "lng": 120.67484266666666,
        "ele": 9.666666666666666,
        "distanceKm": 5.062196625178676,
        "gradePct": 0.15575566026331866,
        "smoothedEle": 10.267766198050785,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.229497333333335,
        "lng": 120.67511433333334,
        "ele": 10.083333333333334,
        "distanceKm": 5.107393487305358,
        "gradePct": 0.2859105258350707,
        "smoothedEle": 10.496542710297764,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.229178,
        "lng": 120.675386,
        "ele": 10.5,
        "distanceKm": 5.152590388838036,
        "gradePct": 0.41464554150116106,
        "smoothedEle": 10.785876726422496,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.228633,
        "lng": 120.675647,
        "ele": 11.25,
        "distanceKm": 5.218879514667079,
        "gradePct": 0.5998263178616647,
        "smoothedEle": 11.303392326221893,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.228193,
        "lng": 120.675736,
        "ele": 11.75,
        "distanceKm": 5.268655606925989,
        "gradePct": 0.7374544582955107,
        "smoothedEle": 11.775369050620714,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.227787098563457,
        "lng": 120.67573436754581,
        "ele": 12.219766278200257,
        "distanceKm": 5.313790162512126,
        "gradePct": 0.8458150220051064,
        "smoothedEle": 12.229121927031281,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.227382,
        "lng": 120.675687,
        "ele": 12.75,
        "distanceKm": 5.359098229249057,
        "gradePct": 0.9151999832622091,
        "smoothedEle": 12.667083049066227,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.227043,
        "lng": 120.675631,
        "ele": 13.25,
        "distanceKm": 5.397231536039613,
        "gradePct": 0.9298301824998766,
        "smoothedEle": 12.994048099537483,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.226722,
        "lng": 120.675623,
        "ele": 13.5,
        "distanceKm": 5.432934654241859,
        "gradePct": 0.8596606346007852,
        "smoothedEle": 13.155984377367691,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.226243,
        "lng": 120.675733,
        "ele": 14,
        "distanceKm": 5.487387288627039,
        "gradePct": 0.5641878255258903,
        "smoothedEle": 13.092060601574008,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.225890432803293,
        "lng": 120.6759476655611,
        "ele": 14.5,
        "distanceKm": 5.532389233175994,
        "gradePct": 0.26601402198769786,
        "smoothedEle": 12.940934067822159,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.22556,
        "lng": 120.676203,
        "ele": 14.5,
        "distanceKm": 5.577564203462559,
        "gradePct": -0.17140333110057412,
        "smoothedEle": 12.48260853004585,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225371,
        "lng": 120.676488,
        "ele": 15.25,
        "distanceKm": 5.613651204701584,
        "gradePct": -0.38533786407467796,
        "smoothedEle": 12.297845979302785,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225187,
        "lng": 120.6768635,
        "ele": 13,
        "distanceKm": 5.657383961574135,
        "gradePct": -0.4935122011425235,
        "smoothedEle": 12.140258112301058,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225003,
        "lng": 120.677239,
        "ele": 10.75,
        "distanceKm": 5.701116763273572,
        "gradePct": -0.4945142329288372,
        "smoothedEle": 12.056925507783681,
        "gradeBand": "descent"
      },
      {
        "lat": 22.224669,
        "lng": 120.677624,
        "ele": 10,
        "distanceKm": 5.755429030414441,
        "gradePct": -0.335927456735815,
        "smoothedEle": 12.035327424297734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.224187,
        "lng": 120.677767,
        "ele": 7,
        "distanceKm": 5.811009613286915,
        "gradePct": -0.10080180065153047,
        "smoothedEle": 12.109767114083015,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223818607113852,
        "lng": 120.67774523318653,
        "ele": 10.436449665134857,
        "distanceKm": 5.852034319442677,
        "gradePct": 0.0318330718680668,
        "smoothedEle": 12.223201309509395,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.223457,
        "lng": 120.677661,
        "ele": 11.5,
        "distanceKm": 5.89316747400136,
        "gradePct": 0.1686090219218606,
        "smoothedEle": 12.409290877053024,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.222888,
        "lng": 120.677487,
        "ele": 13.25,
        "distanceKm": 5.958923746547458,
        "gradePct": 0.5399636977604136,
        "smoothedEle": 13.119935331813664,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.222313,
        "lng": 120.677506,
        "ele": 15,
        "distanceKm": 6.022890823387438,
        "gradePct": 0.9026912604721036,
        "smoothedEle": 13.948001436654454,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.221804,
        "lng": 120.677748,
        "ele": 16,
        "distanceKm": 6.084728526760657,
        "gradePct": 1.3374022864101256,
        "smoothedEle": 15.045917000897145,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.221307,
        "lng": 120.678089,
        "ele": 17.75,
        "distanceKm": 6.15019766305929,
        "gradePct": 1.340869845456681,
        "smoothedEle": 15.707370059830932,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.220732,
        "lng": 120.678363,
        "ele": 16.75,
        "distanceKm": 6.220079467052116,
        "gradePct": 1.0817126425192862,
        "smoothedEle": 16.075033173559934,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.220255,
        "lng": 120.67845600000001,
        "ele": 16.625,
        "distanceKm": 6.2739765232898765,
        "gradePct": 0.6607746753584308,
        "smoothedEle": 16.176566765869147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.219778,
        "lng": 120.678549,
        "ele": 16.5,
        "distanceKm": 6.327873585310203,
        "gradePct": 0.3637304508436611,
        "smoothedEle": 16.20928453842733,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.219437728571155,
        "lng": 120.67864186510727,
        "ele": 15.907160713942291,
        "distanceKm": 6.366898991284967,
        "gradePct": 0.21603139800319654,
        "smoothedEle": 16.227302114900713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.219112,
        "lng": 120.678786,
        "ele": 15.5,
        "distanceKm": 6.406039530284675,
        "gradePct": 0.06490858651856962,
        "smoothedEle": 16.130983237084475,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.21880799676945,
        "lng": 120.67905181585283,
        "ele": 15.059368885586254,
        "distanceKm": 6.449529781633594,
        "gradePct": -0.038582574654094835,
        "smoothedEle": 16.053347793330467,
        "gradeBand": "descent"
      },
      {
        "lat": 22.218519,
        "lng": 120.679337,
        "ele": 15.25,
        "distanceKm": 6.493055180898595,
        "gradePct": -0.11591231725116635,
        "smoothedEle": 15.95632367509033,
        "gradeBand": "descent"
      },
      {
        "lat": 22.218155,
        "lng": 120.67973433333334,
        "ele": 15.750000000000004,
        "distanceKm": 6.550597509702165,
        "gradePct": -0.2526436024472918,
        "smoothedEle": 15.714488705378367,
        "gradeBand": "descent"
      },
      {
        "lat": 22.217791000000002,
        "lng": 120.68013166666667,
        "ele": 16.249999999999996,
        "distanceKm": 6.60813991394624,
        "gradePct": -0.3670377713540841,
        "smoothedEle": 15.39315825139629,
        "gradeBand": "descent"
      },
      {
        "lat": 22.217427,
        "lng": 120.680529,
        "ele": 16.75,
        "distanceKm": 6.66568239363238,
        "gradePct": -0.4672872977848735,
        "smoothedEle": 15.082766797752404,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2171035,
        "lng": 120.68084150000001,
        "ele": 15.75,
        "distanceKm": 6.713939795422858,
        "gradePct": -0.517251591753086,
        "smoothedEle": 14.834048059951048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21678,
        "lng": 120.681154,
        "ele": 14.75,
        "distanceKm": 6.762197246664197,
        "gradePct": -0.5510677533632431,
        "smoothedEle": 14.547577512042187,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21647,
        "lng": 120.68141,
        "ele": 14,
        "distanceKm": 6.805587061899498,
        "gradePct": -0.5900481307697149,
        "smoothedEle": 14.227317722093025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21616,
        "lng": 120.681666,
        "ele": 13.25,
        "distanceKm": 6.848976912504458,
        "gradePct": -0.6594505491552031,
        "smoothedEle": 13.85397718923873,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215830999999998,
        "lng": 120.6819035,
        "ele": 12.9375,
        "distanceKm": 6.892977504957891,
        "gradePct": -0.7607011757918463,
        "smoothedEle": 13.420685392072434,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215502,
        "lng": 120.682141,
        "ele": 12.625,
        "distanceKm": 6.936978129268886,
        "gradePct": -0.8861911854095822,
        "smoothedEle": 12.924903304256379,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215173,
        "lng": 120.6823785,
        "ele": 12.3125,
        "distanceKm": 6.980978785437705,
        "gradePct": -0.9611934542327819,
        "smoothedEle": 12.48656425474553,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214844,
        "lng": 120.682616,
        "ele": 12,
        "distanceKm": 7.024979473463621,
        "gradePct": -0.9790385618694232,
        "smoothedEle": 12.102381916756139,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214495166666666,
        "lng": 120.6828545,
        "ele": 11.708333333333332,
        "distanceKm": 7.070885138379079,
        "gradePct": -0.9462489830487392,
        "smoothedEle": 11.745739978902979,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214146333333332,
        "lng": 120.683093,
        "ele": 11.416666666666664,
        "distanceKm": 7.116790835942029,
        "gradePct": -0.8573041393906574,
        "smoothedEle": 11.437757671509456,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213797500000002,
        "lng": 120.6833315,
        "ele": 11.125000000000004,
        "distanceKm": 7.162696566152491,
        "gradePct": -0.7516242873900725,
        "smoothedEle": 11.16544502352978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213448666666668,
        "lng": 120.68357,
        "ele": 10.833333333333336,
        "distanceKm": 7.208602329011485,
        "gradePct": -0.6611806839299174,
        "smoothedEle": 10.923013986669503,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213099833333334,
        "lng": 120.6838085,
        "ele": 10.541666666666668,
        "distanceKm": 7.254508124516684,
        "gradePct": -0.5807765352596007,
        "smoothedEle": 10.711420224160587,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212751,
        "lng": 120.684047,
        "ele": 10.25,
        "distanceKm": 7.300413952669223,
        "gradePct": -0.5091929965270121,
        "smoothedEle": 10.529244538820024,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212453,
        "lng": 120.684251,
        "ele": 10,
        "distanceKm": 7.339644286414289,
        "gradePct": -0.4467919762986834,
        "smoothedEle": 10.408607122213992,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21209225,
        "lng": 120.684484,
        "ele": 10,
        "distanceKm": 7.386382070508979,
        "gradePct": -0.3855099443861191,
        "smoothedEle": 10.269340591508804,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2117315,
        "lng": 120.684717,
        "ele": 10,
        "distanceKm": 7.433119886252643,
        "gradePct": -0.3743324132064757,
        "smoothedEle": 10.061340287910642,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21137075,
        "lng": 120.68495,
        "ele": 10,
        "distanceKm": 7.479857733642673,
        "gradePct": -0.41310754865282695,
        "smoothedEle": 9.784606083084345,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21101,
        "lng": 120.685183,
        "ele": 10,
        "distanceKm": 7.5265956126797295,
        "gradePct": -0.4955480511286319,
        "smoothedEle": 9.457637068837721,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210438,
        "lng": 120.685521,
        "ele": 10.25,
        "distanceKm": 7.599094732057075,
        "gradePct": -0.5218552665928518,
        "smoothedEle": 9.169054084040367,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210028,
        "lng": 120.685694,
        "ele": 9.16666666666666,
        "distanceKm": 7.648039831377266,
        "gradePct": -0.44748884419817403,
        "smoothedEle": 9.07802179263761,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209618,
        "lng": 120.685867,
        "ele": 8.08333333333334,
        "distanceKm": 7.6969849496312674,
        "gradePct": -0.30477560208593485,
        "smoothedEle": 9.055236242638038,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209208,
        "lng": 120.68604,
        "ele": 7,
        "distanceKm": 7.74593008681806,
        "gradePct": -0.16837778826412625,
        "smoothedEle": 9.043920553966402,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208746666666666,
        "lng": 120.68625300000001,
        "ele": 7.916666666666667,
        "distanceKm": 7.801718047719559,
        "gradePct": -0.06012723136409721,
        "smoothedEle": 9.043920553966402,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208285333333333,
        "lng": 120.686466,
        "ele": 8.833333333333334,
        "distanceKm": 7.857506036952432,
        "gradePct": -0.02601242165676518,
        "smoothedEle": 9.021590121674388,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207824,
        "lng": 120.686679,
        "ele": 9.75,
        "distanceKm": 7.9132940545173485,
        "gradePct": 0.014868785278093974,
        "smoothedEle": 9.08120329044138,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.207363849009223,
        "lng": 120.68686678416155,
        "ele": 9.882991615831145,
        "distanceKm": 7.9679907659386275,
        "gradePct": 0.21226237884052762,
        "smoothedEle": 9.468445311647457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20690367556915,
        "lng": 120.68705450389247,
        "ele": 10,
        "distanceKm": 8.022687491037056,
        "gradePct": 0.5880526734570783,
        "smoothedEle": 10.211632396460676,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206443337784574,
        "lng": 120.68724175194623,
        "ele": 10,
        "distanceKm": 8.077384202511041,
        "gradePct": 1.0107044150425546,
        "smoothedEle": 11.064240080050975,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205983,
        "lng": 120.687429,
        "ele": 10,
        "distanceKm": 8.132080936266817,
        "gradePct": 1.3817410385951931,
        "smoothedEle": 11.977692816741287,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205457,
        "lng": 120.687617,
        "ele": 11.75,
        "distanceKm": 8.19368859953984,
        "gradePct": 1.5692056696480772,
        "smoothedEle": 12.95602377211462,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2050645,
        "lng": 120.68772799999999,
        "ele": 13.499999999999964,
        "distanceKm": 8.238803866382165,
        "gradePct": 1.5675007989420575,
        "smoothedEle": 13.597854681668942,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204672,
        "lng": 120.687839,
        "ele": 15.25,
        "distanceKm": 8.283919141318579,
        "gradePct": 1.4637455699121444,
        "smoothedEle": 14.100866762858558,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204152,
        "lng": 120.687968,
        "ele": 17,
        "distanceKm": 8.343246106248095,
        "gradePct": 1.2187042771467977,
        "smoothedEle": 14.59240449915844,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203714025464674,
        "lng": 120.68806813030389,
        "ele": 17.57326509859832,
        "distanceKm": 8.39302573942133,
        "gradePct": 0.9550147823187619,
        "smoothedEle": 14.855527104485434,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203276,
        "lng": 120.688168,
        "ele": 17.75,
        "distanceKm": 8.442805371287404,
        "gradePct": 0.6250882760645919,
        "smoothedEle": 14.892645952717869,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.202941026785197,
        "lng": 120.6882481307453,
        "ele": 16.48691323648663,
        "distanceKm": 8.480955343666631,
        "gradePct": 0.3571800638271702,
        "smoothedEle": 14.782182073048475,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.202606,
        "lng": 120.688328,
        "ele": 15.25,
        "distanceKm": 8.51910532485732,
        "gradePct": 0.06418248933616266,
        "smoothedEle": 14.520757475675765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20218433333333,
        "lng": 120.68842133333334,
        "ele": 14,
        "distanceKm": 8.566967025707699,
        "gradePct": -0.35757785905615463,
        "smoothedEle": 14.002631587850722,
        "gradeBand": "descent"
      },
      {
        "lat": 22.201762666666667,
        "lng": 120.68851466666666,
        "ele": 12.75,
        "distanceKm": 8.614828732351633,
        "gradePct": -0.7991935748611392,
        "smoothedEle": 13.27339764802554,
        "gradeBand": "descent"
      },
      {
        "lat": 22.201341,
        "lng": 120.688608,
        "ele": 11.5,
        "distanceKm": 8.662690444790394,
        "gradePct": -1.1987126532985444,
        "smoothedEle": 12.437643084993969,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20093694735822,
        "lng": 120.68869896081263,
        "ele": 10.97697201962053,
        "distanceKm": 8.708584667946628,
        "gradePct": -1.4897284003492812,
        "smoothedEle": 11.613393986982437,
        "gradeBand": "descent"
      },
      {
        "lat": 22.200533460518663,
        "lng": 120.68879472060947,
        "ele": 10.420229014715387,
        "distanceKm": 8.754520801298964,
        "gradePct": -1.6172373307164638,
        "smoothedEle": 10.902893280481033,
        "gradeBand": "descent"
      },
      {
        "lat": 22.200129973679108,
        "lng": 120.68889048040631,
        "ele": 9.863486009810265,
        "distanceKm": 8.800456940732367,
        "gradePct": -1.6019396248964937,
        "smoothedEle": 10.288490912163834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.199726486839555,
        "lng": 120.68898624020315,
        "ele": 9.30674300490512,
        "distanceKm": 8.846393086245733,
        "gradePct": -1.4856150541051356,
        "smoothedEle": 9.750995184043612,
        "gradeBand": "descent"
      },
      {
        "lat": 22.199323,
        "lng": 120.689082,
        "ele": 8.75,
        "distanceKm": 8.892329237840373,
        "gradePct": -1.2806119619108876,
        "smoothedEle": 9.344113638657262,
        "gradeBand": "descent"
      },
      {
        "lat": 22.198894,
        "lng": 120.689153,
        "ele": 8.75,
        "distanceKm": 8.940588720382902,
        "gradePct": -1.0187943067284566,
        "smoothedEle": 9.080794143640974,
        "gradeBand": "descent"
      },
      {
        "lat": 22.198568,
        "lng": 120.68922,
        "ele": 8.75,
        "distanceKm": 8.977488771065739,
        "gradePct": -0.8437887573230002,
        "smoothedEle": 8.908115918520856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1981525,
        "lng": 120.68932550000001,
        "ele": 8.374999999999993,
        "distanceKm": 9.02494989085182,
        "gradePct": -0.6383012384702408,
        "smoothedEle": 8.725298084397394,
        "gradeBand": "descent"
      },
      {
        "lat": 22.197737,
        "lng": 120.689431,
        "ele": 8,
        "distanceKm": 9.072411017992764,
        "gradePct": -0.469901795610692,
        "smoothedEle": 8.580736582781212,
        "gradeBand": "descent"
      },
      {
        "lat": 22.197340631458964,
        "lng": 120.68962851509394,
        "ele": 8.2255025559579,
        "distanceKm": 9.120950170604566,
        "gradePct": -0.35457922601717534,
        "smoothedEle": 8.478790031811712,
        "gradeBand": "descent"
      },
      {
        "lat": 22.196956,
        "lng": 120.689853,
        "ele": 8.75,
        "distanceKm": 9.169564454991153,
        "gradePct": -0.24332228244155815,
        "smoothedEle": 8.458554143762106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.196612,
        "lng": 120.690154,
        "ele": 8.624999999999998,
        "distanceKm": 9.218793372471504,
        "gradePct": -0.0852099844849,
        "smoothedEle": 8.578592712999324,
        "gradeBand": "descent"
      },
      {
        "lat": 22.196268,
        "lng": 120.690455,
        "ele": 8.5,
        "distanceKm": 9.268022337739426,
        "gradePct": 0.09700339857179364,
        "smoothedEle": 8.788110829156494,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.19587311979063,
        "lng": 120.69084558854274,
        "ele": 8.25,
        "distanceKm": 9.327562830279907,
        "gradePct": 0.33060379265648204,
        "smoothedEle": 9.137245071394776,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.195486,
        "lng": 120.691246,
        "ele": 8.25,
        "distanceKm": 9.387164878925551,
        "gradePct": 0.4719469919748275,
        "smoothedEle": 9.445364564131408,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.195219834697422,
        "lng": 120.69153603585757,
        "ele": 9.497061448297083,
        "distanceKm": 9.429207817739655,
        "gradePct": 0.4690627449042529,
        "smoothedEle": 9.561042005705772,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.194935,
        "lng": 120.691805,
        "ele": 10.75,
        "distanceKm": 9.47127853118465,
        "gradePct": 0.4095653046025586,
        "smoothedEle": 9.626335143881542,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.194666,
        "lng": 120.692053,
        "ele": 10.75,
        "distanceKm": 9.510605822639059,
        "gradePct": 0.31467001738903044,
        "smoothedEle": 9.667152404817687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.194316,
        "lng": 120.692126,
        "ele": 11.25,
        "distanceKm": 9.550243175726614,
        "gradePct": 0.2137400466613676,
        "smoothedEle": 9.681973760913904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.19389920234209,
        "lng": 120.69207354900266,
        "ele": 10.938817216590666,
        "distanceKm": 9.596902575751844,
        "gradePct": 0.10772717985078412,
        "smoothedEle": 9.687611338622842,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.193483755318553,
        "lng": 120.69200888798733,
        "ele": 10.231587361347255,
        "distanceKm": 9.64357547013507,
        "gradePct": 0.07018054595633164,
        "smoothedEle": 9.723701486124298,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.193068308295015,
        "lng": 120.69194422697198,
        "ele": 9.524357506103847,
        "distanceKm": 9.690248367327447,
        "gradePct": 0.037410630380863584,
        "smoothedEle": 9.72084493957973,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.192652871942915,
        "lng": 120.69187948653655,
        "ele": 9.093011305717368,
        "distanceKm": 9.736921259918592,
        "gradePct": -0.025204485805950673,
        "smoothedEle": 9.626583405766166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.192237435971457,
        "lng": 120.69181474326828,
        "ele": 8.671505652858693,
        "distanceKm": 9.783594155088176,
        "gradePct": -0.07521811608801637,
        "smoothedEle": 9.53556712915533,
        "gradeBand": "descent"
      },
      {
        "lat": 22.191822,
        "lng": 120.69175,
        "ele": 8.25,
        "distanceKm": 9.83026705307386,
        "gradePct": -0.15135867465432506,
        "smoothedEle": 9.410693308678738,
        "gradeBand": "descent"
      },
      {
        "lat": 22.191473,
        "lng": 120.691693,
        "ele": 8.625,
        "distanceKm": 9.869515371255673,
        "gradePct": -0.2065529184400166,
        "smoothedEle": 9.309008035460465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.191124,
        "lng": 120.691636,
        "ele": 9,
        "distanceKm": 9.908763691617855,
        "gradePct": -0.22625893048586745,
        "smoothedEle": 9.23093314886042,
        "gradeBand": "descent"
      },
      {
        "lat": 22.19072901167423,
        "lng": 120.69166220775621,
        "ele": 9.374396517317185,
        "distanceKm": 9.952767259370495,
        "gradePct": -0.17032898131771707,
        "smoothedEle": 9.255024341665969,
        "gradeBand": "descent"
      },
      {
        "lat": 22.190334023348463,
        "lng": 120.69168841551242,
        "ele": 9.748793034634387,
        "distanceKm": 9.996770827588026,
        "gradePct": -0.06409844983647363,
        "smoothedEle": 9.372115906154743,
        "gradeBand": "descent"
      },
      {
        "lat": 22.189939023461733,
        "lng": 120.69171441752819,
        "ele": 9.938106410347952,
        "distanceKm": 10.040774385535695,
        "gradePct": 0.09925888534424968,
        "smoothedEle": 9.581988486867155,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.189544,
        "lng": 120.69174,
        "ele": 9.75,
        "distanceKm": 10.084777953750018,
        "gradePct": 0.2974677111429928,
        "smoothedEle": 9.873582301231377,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.189071,
        "lng": 120.691702,
        "ele": 9.25,
        "distanceKm": 10.13751854783186,
        "gradePct": 0.5050605557967627,
        "smoothedEle": 10.256797047244358,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.188446,
        "lng": 120.691574,
        "ele": 10.25,
        "distanceKm": 10.208254020923198,
        "gradePct": 0.6429025942678989,
        "smoothedEle": 10.71268956188899,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.188071483175143,
        "lng": 120.69148228159392,
        "ele": 10.966550047560746,
        "distanceKm": 10.250955734409203,
        "gradePct": 0.6322754406501061,
        "smoothedEle": 10.914007041219227,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18769674695913,
        "lng": 120.6913916150434,
        "ele": 11.488050602282945,
        "distanceKm": 10.29365743850029,
        "gradePct": 0.5744002442206732,
        "smoothedEle": 11.086901393464352,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.187322,
        "lng": 120.691301,
        "ele": 12,
        "distanceKm": 10.336359154708417,
        "gradePct": 0.5172372508439526,
        "smoothedEle": 11.282847363557332,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.186974,
        "lng": 120.691274,
        "ele": 12.25,
        "distanceKm": 10.375154772357346,
        "gradePct": 0.511535800272216,
        "smoothedEle": 11.522435386806688,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.186605,
        "lng": 120.691292,
        "ele": 12.5,
        "distanceKm": 10.416227591518203,
        "gradePct": 0.5503684663735593,
        "smoothedEle": 11.851017940093541,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.186135,
        "lng": 120.691335,
        "ele": 12,
        "distanceKm": 10.468676477736249,
        "gradePct": 0.6658992702265667,
        "smoothedEle": 12.317554859694058,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.185753282324576,
        "lng": 120.69140518679839,
        "ele": 11.846081582490505,
        "distanceKm": 10.51173240389598,
        "gradePct": 0.7764174652927097,
        "smoothedEle": 12.722677173817805,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.185372,
        "lng": 120.691478,
        "ele": 12,
        "distanceKm": 10.554786876026483,
        "gradePct": 0.8340844183589965,
        "smoothedEle": 13.064819294313896,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.184967,
        "lng": 120.691546,
        "ele": 12.625,
        "distanceKm": 10.60036189910606,
        "gradePct": 0.8219848943148363,
        "smoothedEle": 13.368062189426073,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.184562,
        "lng": 120.691614,
        "ele": 13.25,
        "distanceKm": 10.645936925286058,
        "gradePct": 0.7571841282621437,
        "smoothedEle": 13.629653029698261,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.184193999999998,
        "lng": 120.691704,
        "ele": 14.375000000000025,
        "distanceKm": 10.687892872713212,
        "gradePct": 0.6705333915887849,
        "smoothedEle": 13.83943276683403,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.183826,
        "lng": 120.691794,
        "ele": 15.5,
        "distanceKm": 10.729848825500442,
        "gradePct": 0.6003784901987221,
        "smoothedEle": 14.067400404335881,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.183324,
        "lng": 120.69195500000001,
        "ele": 15.333333333333334,
        "distanceKm": 10.788078284346447,
        "gradePct": 0.6005184595127323,
        "smoothedEle": 14.48736752280552,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.182822,
        "lng": 120.692116,
        "ele": 15.166666666666666,
        "distanceKm": 10.846307760051829,
        "gradePct": 0.626351705510467,
        "smoothedEle": 14.884210614548048,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18232,
        "lng": 120.692277,
        "ele": 15,
        "distanceKm": 10.904537252617871,
        "gradePct": 0.5967831653459216,
        "smoothedEle": 15.12343632305596,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181714,
        "lng": 120.692569,
        "ele": 14.75,
        "distanceKm": 10.978324729152957,
        "gradePct": 0.3329381076112868,
        "smoothedEle": 15.0828983741758,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181319,
        "lng": 120.692808,
        "ele": 16,
        "distanceKm": 11.028670944675408,
        "gradePct": 0.14014563447608147,
        "smoothedEle": 15.04430419568514,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.180853022308213,
        "lng": 120.69305699212016,
        "ele": 15.41164432855315,
        "distanceKm": 11.086481230541127,
        "gradePct": 0.04026381168722995,
        "smoothedEle": 15.129783930706523,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.180387044616428,
        "lng": 120.69330598424031,
        "ele": 14.823288657106318,
        "distanceKm": 11.144291554106262,
        "gradePct": 0.23729600485277122,
        "smoothedEle": 15.57618779941928,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.179922,
        "lng": 120.693557,
        "ele": 14,
        "distanceKm": 11.202101799143211,
        "gradePct": 0.5782966563127067,
        "smoothedEle": 16.22126476599562,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1794575,
        "lng": 120.6938345,
        "ele": 15.124999999999982,
        "distanceKm": 11.261128678510387,
        "gradePct": 0.9566821059833044,
        "smoothedEle": 17.005661224951645,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.178993,
        "lng": 120.694112,
        "ele": 16.25,
        "distanceKm": 11.320155603592813,
        "gradePct": 1.1930010792808934,
        "smoothedEle": 17.775815258449693,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.178498,
        "lng": 120.694299,
        "ele": 19.75,
        "distanceKm": 11.37846793745843,
        "gradePct": 1.37540006026529,
        "smoothedEle": 18.70834589010334,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1779945,
        "lng": 120.6943875,
        "ele": 20.75,
        "distanceKm": 11.435191426231562,
        "gradePct": 1.5574396527124945,
        "smoothedEle": 19.775865543986058,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.177491,
        "lng": 120.694476,
        "ele": 21.75,
        "distanceKm": 11.491914920248785,
        "gradePct": 1.787540588832049,
        "smoothedEle": 20.982426010866792,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17703542857143,
        "lng": 120.69456342857143,
        "ele": 22.46428571428572,
        "distanceKm": 11.543365924750493,
        "gradePct": 1.952461080231389,
        "smoothedEle": 22.05191679067172,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17657985714286,
        "lng": 120.69465085714285,
        "ele": 23.178571428571434,
        "distanceKm": 11.594816934357242,
        "gradePct": 2.034621771135951,
        "smoothedEle": 23.085272825767234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.176124285714288,
        "lng": 120.69473828571428,
        "ele": 23.892857142857153,
        "distanceKm": 11.646267949069465,
        "gradePct": 1.9515214464008217,
        "smoothedEle": 23.91451618271847,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.175668714285713,
        "lng": 120.69482571428571,
        "ele": 24.607142857142847,
        "distanceKm": 11.697718968887207,
        "gradePct": 1.8411797046152496,
        "smoothedEle": 24.785431781902055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.175213142857142,
        "lng": 120.69491314285715,
        "ele": 25.321428571428562,
        "distanceKm": 11.749169993809609,
        "gradePct": 1.7230518943316353,
        "smoothedEle": 25.614591076905214,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17475757142857,
        "lng": 120.69500057142857,
        "ele": 26.03571428571428,
        "distanceKm": 11.80062102383672,
        "gradePct": 1.5628000225124679,
        "smoothedEle": 26.30441821039195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.174302,
        "lng": 120.695088,
        "ele": 26.75,
        "distanceKm": 11.85207205896897,
        "gradePct": 1.3684290297734871,
        "smoothedEle": 26.749620882832748,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17386,
        "lng": 120.695157,
        "ele": 28.75,
        "distanceKm": 11.901731190269228,
        "gradePct": 1.036732506033511,
        "smoothedEle": 26.92355577126896,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.173352,
        "lng": 120.695181,
        "ele": 29.5,
        "distanceKm": 11.95827232544033,
        "gradePct": 0.5186500792256618,
        "smoothedEle": 26.773930295285123,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17295,
        "lng": 120.695121,
        "ele": 29.5,
        "distanceKm": 12.003397698970621,
        "gradePct": 0.04103150306027296,
        "smoothedEle": 26.41050761728238,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.172555,
        "lng": 120.694988,
        "ele": 28.25,
        "distanceKm": 12.049405398969832,
        "gradePct": -0.41644026696360975,
        "smoothedEle": 25.89366590239429,
        "gradeBand": "descent"
      },
      {
        "lat": 22.172017,
        "lng": 120.694764,
        "ele": 25.75,
        "distanceKm": 12.11352107071236,
        "gradePct": -0.9597888100196011,
        "smoothedEle": 24.97277845090967,
        "gradeBand": "descent"
      },
      {
        "lat": 22.171669,
        "lng": 120.694686,
        "ele": 24.75,
        "distanceKm": 12.153041735226514,
        "gradePct": -1.2613241235002741,
        "smoothedEle": 24.265123821146943,
        "gradeBand": "descent"
      },
      {
        "lat": 22.17125567888426,
        "lng": 120.6946474082069,
        "ele": 21.723031096120206,
        "distanceKm": 12.199172494572185,
        "gradePct": -1.5448072891661513,
        "smoothedEle": 23.354921235892498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.17084,
        "lng": 120.694691,
        "ele": 20.75,
        "distanceKm": 12.245611394881875,
        "gradePct": -1.7628552257290222,
        "smoothedEle": 22.410576568252385,
        "gradeBand": "descent"
      },
      {
        "lat": 22.170348,
        "lng": 120.694896,
        "ele": 19.5,
        "distanceKm": 12.30425079702344,
        "gradePct": -1.8950007167196143,
        "smoothedEle": 21.31592509936587,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16993550215108,
        "lng": 120.69509532471652,
        "ele": 19.065124631126285,
        "distanceKm": 12.354501531557341,
        "gradePct": -1.8260405461033886,
        "smoothedEle": 20.584239595995676,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16952175107554,
        "lng": 120.69529166235826,
        "ele": 19.157562315563144,
        "distanceKm": 12.404754984434529,
        "gradePct": -1.551258677373639,
        "smoothedEle": 20.138882792176627,
        "gradeBand": "descent"
      },
      {
        "lat": 22.169108,
        "lng": 120.695488,
        "ele": 19.25,
        "distanceKm": 12.455008461245372,
        "gradePct": -1.1491040468318183,
        "smoothedEle": 19.93694866943465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16873055937002,
        "lng": 120.69561912831792,
        "ele": 19.456176600501077,
        "distanceKm": 12.499096689126032,
        "gradePct": -0.7434880014408565,
        "smoothedEle": 19.92516344340189,
        "gradeBand": "descent"
      },
      {
        "lat": 22.168353118740033,
        "lng": 120.69575025663583,
        "ele": 19.662353201002155,
        "distanceKm": 12.543184928107555,
        "gradePct": -0.3780875189636066,
        "smoothedEle": 19.992842143279898,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16797567811005,
        "lng": 120.69588138495375,
        "ele": 19.86852980150323,
        "distanceKm": 12.587273178189035,
        "gradePct": -0.08091747785594833,
        "smoothedEle": 20.13197532718868,
        "gradeBand": "descent"
      },
      {
        "lat": 22.167599,
        "lng": 120.696015,
        "ele": 21,
        "distanceKm": 12.631359978966502,
        "gradePct": 0.13514223361298555,
        "smoothedEle": 20.30226010446899,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.167188749999998,
        "lng": 120.696149,
        "ele": 21,
        "distanceKm": 12.679019070302298,
        "gradePct": 0.2736737618542487,
        "smoothedEle": 20.477877916235165,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1667785,
        "lng": 120.696283,
        "ele": 21,
        "distanceKm": 12.72667817329227,
        "gradePct": 0.33867060160757434,
        "smoothedEle": 20.644844259906176,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.16636825,
        "lng": 120.696417,
        "ele": 21,
        "distanceKm": 12.77433728793747,
        "gradePct": 0.3498413419897814,
        "smoothedEle": 20.7908350800229,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.165958,
        "lng": 120.696551,
        "ele": 21,
        "distanceKm": 12.821996414237681,
        "gradePct": 0.3247266262821101,
        "smoothedEle": 20.915546692492377,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.165547749999998,
        "lng": 120.696685,
        "ele": 21,
        "distanceKm": 12.869655552192349,
        "gradePct": 0.22429571187106037,
        "smoothedEle": 20.891965942727932,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1651375,
        "lng": 120.696819,
        "ele": 21,
        "distanceKm": 12.917314701800922,
        "gradePct": -0.007550836859309157,
        "smoothedEle": 20.596939102678714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.164727250000002,
        "lng": 120.696953,
        "ele": 21,
        "distanceKm": 12.964973863063182,
        "gradePct": -0.323616688202365,
        "smoothedEle": 20.114919381534037,
        "gradeBand": "descent"
      },
      {
        "lat": 22.164317,
        "lng": 120.697087,
        "ele": 21,
        "distanceKm": 13.012633035980182,
        "gradePct": -0.6613039615501007,
        "smoothedEle": 19.568437229156242,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16384,
        "lng": 120.697248,
        "ele": 21,
        "distanceKm": 13.06820397033369,
        "gradePct": -0.947655406900484,
        "smoothedEle": 18.99737334142599,
        "gradeBand": "descent"
      },
      {
        "lat": 22.163436333333333,
        "lng": 120.69736733333333,
        "ele": 19.083333333333307,
        "distanceKm": 13.114741538952536,
        "gradePct": -0.9820263921169036,
        "smoothedEle": 18.648815098339774,
        "gradeBand": "descent"
      },
      {
        "lat": 22.163032666666666,
        "lng": 120.69748666666666,
        "ele": 17.166666666666693,
        "distanceKm": 13.161279116884256,
        "gradePct": -0.8501727656242966,
        "smoothedEle": 18.451942122737123,
        "gradeBand": "descent"
      },
      {
        "lat": 22.162629,
        "lng": 120.697606,
        "ele": 15.25,
        "distanceKm": 13.207816704128708,
        "gradePct": -0.6084545192544764,
        "smoothedEle": 18.40675448257943,
        "gradeBand": "descent"
      },
      {
        "lat": 22.162142702833194,
        "lng": 120.69774433272879,
        "ele": 15.279756507036236,
        "distanceKm": 13.263735530863118,
        "gradePct": -0.23528554897859072,
        "smoothedEle": 18.572721291723767,
        "gradeBand": "descent"
      },
      {
        "lat": 22.161656,
        "lng": 120.697881,
        "ele": 16.5,
        "distanceKm": 13.319654578600954,
        "gradePct": 0.16714742607613844,
        "smoothedEle": 18.962325784709787,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.161188717046464,
        "lng": 120.6980055838459,
        "ele": 18.417394024719425,
        "distanceKm": 13.37317464851636,
        "gradePct": 0.6054907218083517,
        "smoothedEle": 19.651373096406758,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.160721434092927,
        "lng": 120.6981301676918,
        "ele": 20.33478804943885,
        "distanceKm": 13.426694728648043,
        "gradePct": 1.1188149028553487,
        "smoothedEle": 20.700414174383823,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.16025415113939,
        "lng": 120.6982547515377,
        "ele": 22.252182074158277,
        "distanceKm": 13.480214818995831,
        "gradePct": 1.68141004901818,
        "smoothedEle": 22.050357449000202,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.159786868185854,
        "lng": 120.69837933538359,
        "ele": 24.169576098877634,
        "distanceKm": 13.533734919559201,
        "gradePct": 2.1128976417781655,
        "smoothedEle": 23.369399252326637,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.159319585232318,
        "lng": 120.6985039192295,
        "ele": 26.086970123597062,
        "distanceKm": 13.587255030338682,
        "gradePct": 2.2957046464267115,
        "smoothedEle": 24.51877037150674,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.158852294636052,
        "lng": 120.69862846869984,
        "ele": 27.34321868813024,
        "distanceKm": 13.640775127880596,
        "gradePct": 2.182442174327341,
        "smoothedEle": 25.420450020810314,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.158385,
        "lng": 120.698753,
        "ele": 28.25,
        "distanceKm": 13.694295223333183,
        "gradePct": 1.8306803369372644,
        "smoothedEle": 26.058739928387144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.157954999999998,
        "lng": 120.698852,
        "ele": 27.74999999999999,
        "distanceKm": 13.743183993387586,
        "gradePct": 1.4167748041618835,
        "smoothedEle": 26.405872442144744,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.157525,
        "lng": 120.698951,
        "ele": 27.25,
        "distanceKm": 13.792072769939384,
        "gradePct": 0.9519567091747037,
        "smoothedEle": 26.50385064031257,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.157095,
        "lng": 120.69905,
        "ele": 26.75000000000001,
        "distanceKm": 13.840961552989473,
        "gradePct": 0.4617925393510588,
        "smoothedEle": 26.34625843757842,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.156665,
        "lng": 120.699149,
        "ele": 26.25,
        "distanceKm": 13.889850342537834,
        "gradePct": -0.025081885168637272,
        "smoothedEle": 25.955565741531334,
        "gradeBand": "descent"
      },
      {
        "lat": 22.156235,
        "lng": 120.699248,
        "ele": 25.74999999999999,
        "distanceKm": 13.938739138583674,
        "gradePct": -0.5067342415404976,
        "smoothedEle": 25.360843467366948,
        "gradeBand": "descent"
      },
      {
        "lat": 22.155805,
        "lng": 120.699347,
        "ele": 25.25,
        "distanceKm": 13.987627941127117,
        "gradePct": -0.9338971870815055,
        "smoothedEle": 24.627148366445248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.155385647096406,
        "lng": 120.69944631034456,
        "ele": 24.25986331283922,
        "distanceKm": 14.0353663516181,
        "gradePct": -1.229717815209647,
        "smoothedEle": 23.904858848431676,
        "gradeBand": "descent"
      },
      {
        "lat": 22.154968942987633,
        "lng": 120.69955854982703,
        "ele": 23.478158542444373,
        "distanceKm": 14.083121811571512,
        "gradePct": -1.406669948126028,
        "smoothedEle": 23.19599661620557,
        "gradeBand": "descent"
      },
      {
        "lat": 22.15455229532509,
        "lng": 120.69967103321802,
        "ele": 22.4021056949629,
        "distanceKm": 14.130877276880955,
        "gradePct": -1.4778320407556969,
        "smoothedEle": 22.500817336657676,
        "gradeBand": "descent"
      },
      {
        "lat": 22.154135647662542,
        "lng": 120.699783516609,
        "ele": 21.32605284748147,
        "distanceKm": 14.17863275051047,
        "gradePct": -1.5033055013795789,
        "smoothedEle": 21.75553202389333,
        "gradeBand": "descent"
      },
      {
        "lat": 22.153719,
        "lng": 120.699896,
        "ele": 20.25,
        "distanceKm": 14.226388232459874,
        "gradePct": -1.543662104115768,
        "smoothedEle": 20.953374968622647,
        "gradeBand": "descent"
      },
      {
        "lat": 22.15332,
        "lng": 120.70001766666667,
        "ele": 19.91666666666667,
        "distanceKm": 14.272490478965977,
        "gradePct": -1.6089375743003171,
        "smoothedEle": 20.13592855750941,
        "gradeBand": "descent"
      },
      {
        "lat": 22.152921,
        "lng": 120.70013933333333,
        "ele": 19.58333333333333,
        "distanceKm": 14.31859273512763,
        "gradePct": -1.6862424786574772,
        "smoothedEle": 19.30715921791116,
        "gradeBand": "descent"
      },
      {
        "lat": 22.152522,
        "lng": 120.700261,
        "ele": 19.25,
        "distanceKm": 14.364695000944728,
        "gradePct": -1.7580500972410489,
        "smoothedEle": 18.456948257473947,
        "gradeBand": "descent"
      },
      {
        "lat": 22.152054857142858,
        "lng": 120.700358,
        "ele": 18.035714285714302,
        "distanceKm": 14.417590871451976,
        "gradePct": -1.81070674643603,
        "smoothedEle": 17.47973226377708,
        "gradeBand": "descent"
      },
      {
        "lat": 22.151587714285714,
        "lng": 120.700455,
        "ele": 16.821428571428566,
        "distanceKm": 14.470486748221823,
        "gradePct": -1.836251012414878,
        "smoothedEle": 16.498955007532373,
        "gradeBand": "descent"
      },
      {
        "lat": 22.15112057142857,
        "lng": 120.700552,
        "ele": 15.607142857142868,
        "distanceKm": 14.523382631253615,
        "gradePct": -1.8306886019636788,
        "smoothedEle": 15.557447479585342,
        "gradeBand": "descent"
      },
      {
        "lat": 22.15065342857143,
        "lng": 120.700649,
        "ele": 14.392857142857132,
        "distanceKm": 14.576278520547131,
        "gradePct": -1.7026182801326832,
        "smoothedEle": 14.837713883953604,
        "gradeBand": "descent"
      },
      {
        "lat": 22.150186285714287,
        "lng": 120.700746,
        "ele": 13.178571428571434,
        "distanceKm": 14.629174416103043,
        "gradePct": -1.4625999317757017,
        "smoothedEle": 14.339754276972458,
        "gradeBand": "descent"
      },
      {
        "lat": 22.149719142857144,
        "lng": 120.700843,
        "ele": 11.964285714285698,
        "distanceKm": 14.682070317921134,
        "gradePct": -1.0810582553295085,
        "smoothedEle": 14.13065953837396,
        "gradeBand": "descent"
      },
      {
        "lat": 22.149252,
        "lng": 120.70094,
        "ele": 10.75,
        "distanceKm": 14.734966226000747,
        "gradePct": -0.5635071111284626,
        "smoothedEle": 14.272819831993363,
        "gradeBand": "descent"
      },
      {
        "lat": 22.148849333333334,
        "lng": 120.700995,
        "ele": 12.25000000000002,
        "distanceKm": 14.780097659197677,
        "gradePct": -0.0798357104268324,
        "smoothedEle": 14.642089261789213,
        "gradeBand": "descent"
      },
      {
        "lat": 22.148446666666665,
        "lng": 120.70105,
        "ele": 13.74999999999998,
        "distanceKm": 14.825229094428607,
        "gradePct": 0.4094695966336067,
        "smoothedEle": 15.195834552922332,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.148044,
        "lng": 120.701105,
        "ele": 15.25,
        "distanceKm": 14.870360531693091,
        "gradePct": 0.8403289243367464,
        "smoothedEle": 15.857605560728974,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.147623,
        "lng": 120.701142,
        "ele": 16.75,
        "distanceKm": 14.917328500117142,
        "gradePct": 1.254030885649362,
        "smoothedEle": 16.73347936781825,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.147125,
        "lng": 120.70121,
        "ele": 19,
        "distanceKm": 14.973144756583817,
        "gradePct": 1.6878485040393674,
        "smoothedEle": 17.960896997762557,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.146516,
        "lng": 120.701253,
        "ele": 21,
        "distanceKm": 15.041007217865447,
        "gradePct": 2.019932907405499,
        "smoothedEle": 19.467058048343066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.146094,
        "lng": 120.701196,
        "ele": 21.25,
        "distanceKm": 15.088297334982277,
        "gradePct": 2.038181466498497,
        "smoothedEle": 20.26845978025703,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.145509,
        "lng": 120.700978,
        "ele": 22.25,
        "distanceKm": 15.15711224312039,
        "gradePct": 1.695156772539385,
        "smoothedEle": 20.998650358353142,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.145138801502764,
        "lng": 120.7008085001706,
        "ele": 22.75,
        "distanceKm": 15.201825201527258,
        "gradePct": 1.3386566145336274,
        "smoothedEle": 21.274753144244205,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144769558955076,
        "lng": 120.70063657771452,
        "ele": 22.75,
        "distanceKm": 15.246538556742031,
        "gradePct": 0.8569791447221883,
        "smoothedEle": 21.274753144244205,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144399,
        "lng": 120.700468,
        "ele": 22.25,
        "distanceKm": 15.29125149022907,
        "gradePct": 0.4384851299179269,
        "smoothedEle": 21.176776392007103,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.143812,
        "lng": 120.700248,
        "ele": 20.75,
        "distanceKm": 15.360344022458655,
        "gradePct": 0.07389189327031102,
        "smoothedEle": 21.166390401658546,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.143253,
        "lng": 120.700175,
        "ele": 20.25,
        "distanceKm": 15.422955135756098,
        "gradePct": 0.024645155962586512,
        "smoothedEle": 21.324043456169377,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.142794,
        "lng": 120.700269,
        "ele": 19,
        "distanceKm": 15.474903792369208,
        "gradePct": 0.11534869358114228,
        "smoothedEle": 21.443295502727896,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.142333,
        "lng": 120.700469,
        "ele": 19.5,
        "distanceKm": 15.530148668527623,
        "gradePct": 0.14925011684149378,
        "smoothedEle": 21.469429601339435,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.142009666666667,
        "lng": 120.700708,
        "ele": 21.00000000000002,
        "distanceKm": 15.573721101249298,
        "gradePct": 0.11027968602386946,
        "smoothedEle": 21.42063288874304,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.141686333333332,
        "lng": 120.700947,
        "ele": 22.49999999999998,
        "distanceKm": 15.617293565903342,
        "gradePct": 0.06349593757469862,
        "smoothedEle": 21.43677965475265,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.141363,
        "lng": 120.701186,
        "ele": 24,
        "distanceKm": 15.660866062491017,
        "gradePct": 0.005786469403572546,
        "smoothedEle": 21.422643777296326,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140993153940013,
        "lng": 120.70147256567202,
        "ele": 23.778799076386086,
        "distanceKm": 15.711486232902017,
        "gradePct": -0.03176344323390279,
        "smoothedEle": 21.39707427743297,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140623076970005,
        "lng": 120.70175878283601,
        "ele": 22.63939953819302,
        "distanceKm": 15.762106398514259,
        "gradePct": -0.025833601183691803,
        "smoothedEle": 21.3819729773588,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140253,
        "lng": 120.702045,
        "ele": 21.5,
        "distanceKm": 15.812726609243802,
        "gradePct": -0.12288375037762522,
        "smoothedEle": 21.189319764522924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1399115,
        "lng": 120.7023075,
        "ele": 20.8125,
        "distanceKm": 15.859341299744333,
        "gradePct": -0.29432311984478615,
        "smoothedEle": 20.834492204220446,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13957,
        "lng": 120.70257000000001,
        "ele": 20.125,
        "distanceKm": 15.905956028272719,
        "gradePct": -0.5397156298553638,
        "smoothedEle": 20.320436460837215,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1392285,
        "lng": 120.7028325,
        "ele": 19.4375,
        "distanceKm": 15.952570794827292,
        "gradePct": -0.8187641303563933,
        "smoothedEle": 19.747289432994208,
        "gradeBand": "descent"
      },
      {
        "lat": 22.138887,
        "lng": 120.703095,
        "ele": 18.75,
        "distanceKm": 15.999185599409897,
        "gradePct": -1.0020439754047583,
        "smoothedEle": 19.23676694191511,
        "gradeBand": "descent"
      },
      {
        "lat": 22.138543,
        "lng": 120.70328,
        "ele": 17.75,
        "distanceKm": 16.04191989540218,
        "gradePct": -1.0613539186452121,
        "smoothedEle": 18.844394802254023,
        "gradeBand": "descent"
      },
      {
        "lat": 22.138104499999997,
        "lng": 120.703461,
        "ele": 17.625,
        "distanceKm": 16.094121315726508,
        "gradePct": -0.9927174173703878,
        "smoothedEle": 18.465511920755024,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137666,
        "lng": 120.703642,
        "ele": 17.5,
        "distanceKm": 16.146322756780105,
        "gradePct": -0.8382527293985328,
        "smoothedEle": 18.147606078034187,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137161,
        "lng": 120.703881,
        "ele": 18,
        "distanceKm": 16.207635002492196,
        "gradePct": -0.6375852550106367,
        "smoothedEle": 17.884016813714105,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13684,
        "lng": 120.704086,
        "ele": 18,
        "distanceKm": 16.24910624354109,
        "gradePct": -0.5008165986747279,
        "smoothedEle": 17.790602405530144,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136453666666668,
        "lng": 120.704314,
        "ele": 17.833333333333332,
        "distanceKm": 16.29806443973465,
        "gradePct": -0.2897995351517519,
        "smoothedEle": 17.861899295739995,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136067333333333,
        "lng": 120.704542,
        "ele": 17.666666666666668,
        "distanceKm": 16.347022666827094,
        "gradePct": -0.012514073820774784,
        "smoothedEle": 18.119568926689812,
        "gradeBand": "descent"
      },
      {
        "lat": 22.135681,
        "lng": 120.70477,
        "ele": 17.5,
        "distanceKm": 16.395980924815877,
        "gradePct": 0.27381361444957003,
        "smoothedEle": 18.481746427958168,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.135321,
        "lng": 120.704993,
        "ele": 17.75,
        "distanceKm": 16.44213272767698,
        "gradePct": 0.5397734426209749,
        "smoothedEle": 18.88585720886017,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.134843,
        "lng": 120.705148,
        "ele": 18,
        "distanceKm": 16.497629893304715,
        "gradePct": 0.770190366601006,
        "smoothedEle": 19.401647207238696,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.134477,
        "lng": 120.705201,
        "ele": 19.5,
        "distanceKm": 16.538691786269265,
        "gradePct": 0.8810547424502562,
        "smoothedEle": 19.837832564910265,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.133997,
        "lng": 120.70522,
        "ele": 20.75,
        "distanceKm": 16.592101290736466,
        "gradePct": 1.045884575015487,
        "smoothedEle": 20.544815288509096,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.133387,
        "lng": 120.705261,
        "ele": 22,
        "distanceKm": 16.660061625537033,
        "gradePct": 1.2368816400186562,
        "smoothedEle": 21.526251452723557,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.132892,
        "lng": 120.705378,
        "ele": 22.5,
        "distanceKm": 16.71640702343114,
        "gradePct": 1.3312320737749235,
        "smoothedEle": 22.26357388875676,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.132555,
        "lng": 120.705532,
        "ele": 23.25,
        "distanceKm": 16.757098752873063,
        "gradePct": 1.3360629100869634,
        "smoothedEle": 22.753611785589666,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.131994,
        "lng": 120.705891,
        "ele": 24.5,
        "distanceKm": 16.8296154184247,
        "gradePct": 1.1586662274716049,
        "smoothedEle": 23.403900836491612,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13168747735588,
        "lng": 120.70609037242552,
        "ele": 25,
        "distanceKm": 16.869407689085662,
        "gradePct": 0.9870437112197692,
        "smoothedEle": 23.622639233320957,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13138,
        "lng": 120.706288,
        "ele": 24.5,
        "distanceKm": 16.909198709161092,
        "gradePct": 0.7353743242734945,
        "smoothedEle": 23.639996256259934,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.130944,
        "lng": 120.70661,
        "ele": 24,
        "distanceKm": 16.967939265917263,
        "gradePct": 0.2420844111222662,
        "smoothedEle": 23.33499228855859,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1304905,
        "lng": 120.70691,
        "ele": 24,
        "distanceKm": 17.02708099812497,
        "gradePct": -0.2490197214710319,
        "smoothedEle": 22.88313412446234,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130037,
        "lng": 120.70721,
        "ele": 24,
        "distanceKm": 17.086222782303658,
        "gradePct": -0.6610360893644748,
        "smoothedEle": 22.30790187431145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129721,
        "lng": 120.70746,
        "ele": 22.25,
        "distanceKm": 17.129786103029442,
        "gradePct": -0.8721885426372,
        "smoothedEle": 21.78872136202295,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129356,
        "lng": 120.707762,
        "ele": 19.75,
        "distanceKm": 17.180922151402164,
        "gradePct": -1.0922923097796304,
        "smoothedEle": 21.051215058622674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129074,
        "lng": 120.7080725,
        "ele": 19.374999999999986,
        "distanceKm": 17.22571232479129,
        "gradePct": -1.3092744588582506,
        "smoothedEle": 20.275042225786684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128792,
        "lng": 120.708383,
        "ele": 19,
        "distanceKm": 17.270502543888565,
        "gradePct": -1.5594685818556668,
        "smoothedEle": 19.341864868111447,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128375,
        "lng": 120.708785,
        "ele": 19.5,
        "distanceKm": 17.33266870670895,
        "gradePct": -1.937669094028482,
        "smoothedEle": 17.871809011481886,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127967,
        "lng": 120.709024,
        "ele": 18.25,
        "distanceKm": 17.384285294744814,
        "gradePct": -2.161715517308445,
        "smoothedEle": 16.669503818818384,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127607666666666,
        "lng": 120.70916566666666,
        "ele": 16.5,
        "distanceKm": 17.426822663689624,
        "gradePct": -2.20544229811111,
        "smoothedEle": 15.841024384401676,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127248333333334,
        "lng": 120.70930733333334,
        "ele": 14.75,
        "distanceKm": 17.469360045400315,
        "gradePct": -2.1156999459262473,
        "smoothedEle": 15.134268247194015,
        "gradeBand": "descent"
      },
      {
        "lat": 22.126889,
        "lng": 120.709449,
        "ele": 13,
        "distanceKm": 17.511897439876453,
        "gradePct": -1.944172290686361,
        "smoothedEle": 14.474646788347231,
        "gradeBand": "descent"
      },
      {
        "lat": 22.12638,
        "lng": 120.709631,
        "ele": 11.75,
        "distanceKm": 17.571519753876593,
        "gradePct": -1.7627042956775334,
        "smoothedEle": 13.441442972772544,
        "gradeBand": "descent"
      },
      {
        "lat": 22.125844,
        "lng": 120.70991,
        "ele": 11.25,
        "distanceKm": 17.637687299495443,
        "gradePct": -1.722731413055725,
        "smoothedEle": 12.21504626267298,
        "gradeBand": "descent"
      },
      {
        "lat": 22.125524,
        "lng": 120.710127,
        "ele": 11.25,
        "distanceKm": 17.679708018717214,
        "gradePct": -1.7047904249567174,
        "smoothedEle": 11.564222814541978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.125058,
        "lng": 120.710456,
        "ele": 11.5,
        "distanceKm": 17.741623086497842,
        "gradePct": -1.5784406000219895,
        "smoothedEle": 10.80264550239763,
        "gradeBand": "descent"
      },
      {
        "lat": 22.124725154324715,
        "lng": 120.7106758664444,
        "ele": 10.669270361187944,
        "distanceKm": 17.785013452972436,
        "gradePct": -1.3570616647522233,
        "smoothedEle": 10.477217753838179,
        "gradeBand": "descent"
      },
      {
        "lat": 22.124392070579095,
        "lng": 120.71089530989833,
        "ele": 9.918634810896641,
        "distanceKm": 17.828403715167614,
        "gradePct": -1.0397062508310662,
        "smoothedEle": 10.307702366111684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.124058,
        "lng": 120.711113,
        "ele": 9.5,
        "distanceKm": 17.871794095557988,
        "gradePct": -0.715951424014503,
        "smoothedEle": 10.254892041768239,
        "gradeBand": "descent"
      },
      {
        "lat": 22.123685,
        "lng": 120.711322,
        "ele": 9.5,
        "distanceKm": 17.91852441415134,
        "gradePct": -0.37512465293181885,
        "smoothedEle": 10.336518065899963,
        "gradeBand": "descent"
      },
      {
        "lat": 22.123348,
        "lng": 120.711453,
        "ele": 9,
        "distanceKm": 17.958352753284277,
        "gradePct": -0.08911028190422363,
        "smoothedEle": 10.498952437690916,
        "gradeBand": "descent"
      },
      {
        "lat": 22.12285,
        "lng": 120.711548,
        "ele": 9.25,
        "distanceKm": 18.01458592282608,
        "gradePct": 0.22894155754143766,
        "smoothedEle": 10.819568294567823,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.122402628061725,
        "lng": 120.7116063538807,
        "ele": 10.077747869493084,
        "distanceKm": 18.064693330905175,
        "gradePct": 0.4784362604707448,
        "smoothedEle": 11.22040688575524,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.121956,
        "lng": 120.711672,
        "ele": 11.25,
        "distanceKm": 18.1148144316645,
        "gradePct": 0.6934983825545842,
        "smoothedEle": 11.717034431792628,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.121484956498346,
        "lng": 120.71173110431769,
        "ele": 12.742533275204574,
        "distanceKm": 18.16754481250108,
        "gradePct": 0.8730465888259215,
        "smoothedEle": 12.297454539937839,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.121014,
        "lng": 120.711791,
        "ele": 14.25,
        "distanceKm": 18.220275062185433,
        "gradePct": 1.0602625287535734,
        "smoothedEle": 12.985604119709816,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.120510499999998,
        "lng": 120.71185200000001,
        "ele": 14.500000000000009,
        "distanceKm": 18.276613300480257,
        "gradePct": 1.2158221318246394,
        "smoothedEle": 13.77016079083756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.120007,
        "lng": 120.711913,
        "ele": 14.75,
        "distanceKm": 18.33295154127792,
        "gradePct": 1.260819543831011,
        "smoothedEle": 14.438314465646357,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.119635,
        "lng": 120.711989,
        "ele": 14.75,
        "distanceKm": 18.375050451581693,
        "gradePct": 1.2284217351219489,
        "smoothedEle": 14.85224942156631,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.11922,
        "lng": 120.712158,
        "ele": 15.5,
        "distanceKm": 18.424371027605673,
        "gradePct": 1.1284992143604113,
        "smoothedEle": 15.299642262351787,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.118756,
        "lng": 120.712463,
        "ele": 16.25,
        "distanceKm": 18.48477895664235,
        "gradePct": 0.9505323435964969,
        "smoothedEle": 15.768067571334873,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.118356319508884,
        "lng": 120.71274470251483,
        "ele": 15.848714366348812,
        "distanceKm": 18.53785645962268,
        "gradePct": 0.8730084836657971,
        "smoothedEle": 16.232558742050298,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.117957,
        "lng": 120.713027,
        "ele": 15.75,
        "distanceKm": 18.590933957142365,
        "gradePct": 0.9332340260772846,
        "smoothedEle": 16.86279865134066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.117618216182333,
        "lng": 120.71325801829852,
        "ele": 16.556628137301466,
        "distanceKm": 18.63549228458555,
        "gradePct": 1.0805365651918504,
        "smoothedEle": 17.54695371144884,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.11728,
        "lng": 120.71349,
        "ele": 17.25,
        "distanceKm": 18.68005043927454,
        "gradePct": 1.2502720405894525,
        "smoothedEle": 18.23194498897523,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.116851856890783,
        "lng": 120.71379908084008,
        "ele": 18.15198688739825,
        "distanceKm": 18.737323542198908,
        "gradePct": 1.3598897017125355,
        "smoothedEle": 18.947674485277282,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.116423,
        "lng": 120.714107,
        "ele": 19.75,
        "distanceKm": 18.794596326777775,
        "gradePct": 1.3050647245273332,
        "smoothedEle": 19.529160658074858,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.115989,
        "lng": 120.714388,
        "ele": 22.25,
        "distanceKm": 18.850870806120824,
        "gradePct": 1.1346646858625697,
        "smoothedEle": 20.052696668665604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.115583,
        "lng": 120.714552,
        "ele": 23,
        "distanceKm": 18.899073565103052,
        "gradePct": 0.9578624598539242,
        "smoothedEle": 20.38539776996747,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.115198,
        "lng": 120.714602,
        "ele": 22.75,
        "distanceKm": 18.94219241216323,
        "gradePct": 0.7868665546638003,
        "smoothedEle": 20.570840856532357,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.114859,
        "lng": 120.714578,
        "ele": 21.5,
        "distanceKm": 18.979968535443458,
        "gradePct": 0.6351383898659209,
        "smoothedEle": 20.650922598480868,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1144012,
        "lng": 120.7144954,
        "ele": 20.89999999999999,
        "distanceKm": 19.031579904077546,
        "gradePct": 0.4107343815004697,
        "smoothedEle": 20.694697189324078,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1139434,
        "lng": 120.7144128,
        "ele": 20.299999999999983,
        "distanceKm": 19.08319127726643,
        "gradePct": 0.23231856800357678,
        "smoothedEle": 20.7404134908107,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1134856,
        "lng": 120.71433019999999,
        "ele": 19.700000000000017,
        "distanceKm": 19.134802655010276,
        "gradePct": 0.09790805016378669,
        "smoothedEle": 20.73487550932966,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1130278,
        "lng": 120.7142476,
        "ele": 19.10000000000001,
        "distanceKm": 19.186414037308527,
        "gradePct": 0.053683790417375664,
        "smoothedEle": 20.76375698274265,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.11257,
        "lng": 120.714165,
        "ele": 18.5,
        "distanceKm": 19.23802542416135,
        "gradePct": 0.013745042703913461,
        "smoothedEle": 20.727896584932022,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.112102333333333,
        "lng": 120.71409899999999,
        "ele": 20.16666666666663,
        "distanceKm": 19.29047024967421,
        "gradePct": 0.09070300745721159,
        "smoothedEle": 20.921038460611477,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.111634666666667,
        "lng": 120.714033,
        "ele": 21.83333333333337,
        "distanceKm": 19.34291507810973,
        "gradePct": 0.2658051944789977,
        "smoothedEle": 21.27102556999627,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.111167,
        "lng": 120.713967,
        "ele": 23.5,
        "distanceKm": 19.395359909469022,
        "gradePct": 0.5267935426491307,
        "smoothedEle": 21.811128336319666,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.11059,
        "lng": 120.713893,
        "ele": 21.75,
        "distanceKm": 19.459970774734916,
        "gradePct": 0.7491650160865833,
        "smoothedEle": 22.30704614755023,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.110044,
        "lng": 120.713919,
        "ele": 23,
        "distanceKm": 19.520742342992246,
        "gradePct": 0.6037064087149902,
        "smoothedEle": 22.33047009956229,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.10955,
        "lng": 120.714076,
        "ele": 24,
        "distanceKm": 19.578004368196893,
        "gradePct": 0.12170308893348157,
        "smoothedEle": 21.87579858141381,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.109105,
        "lng": 120.714446,
        "ele": 25.5,
        "distanceKm": 19.640465129229266,
        "gradePct": -0.6029517219319608,
        "smoothedEle": 20.951427992608036,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1087795,
        "lng": 120.7148895,
        "ele": 21.62500000000012,
        "distanceKm": 19.69875302923555,
        "gradePct": -1.2437417289096144,
        "smoothedEle": 19.834511023209846,
        "gradeBand": "descent"
      },
      {
        "lat": 22.108454,
        "lng": 120.715333,
        "ele": 17.75,
        "distanceKm": 19.757041011893538,
        "gradePct": -1.6769905627277975,
        "smoothedEle": 18.688270545975037,
        "gradeBand": "descent"
      },
      {
        "lat": 22.108167,
        "lng": 120.715687,
        "ele": 16.25,
        "distanceKm": 19.805501469849403,
        "gradePct": -1.9854543843368635,
        "smoothedEle": 17.49795413624698,
        "gradeBand": "descent"
      },
      {
        "lat": 22.107744,
        "lng": 120.716039,
        "ele": 15,
        "distanceKm": 19.86489286908353,
        "gradePct": -2.450106303977307,
        "smoothedEle": 15.583129261044071,
        "gradeBand": "descent"
      },
      {
        "lat": 22.107449,
        "lng": 120.716206,
        "ele": 13.75,
        "distanceKm": 19.901933330918222,
        "gradePct": -2.7642274409572387,
        "smoothedEle": 14.243515110498583,
        "gradeBand": "descent"
      },
      {
        "lat": 22.107035,
        "lng": 120.716404,
        "ele": 12.5,
        "distanceKm": 19.952284868158337,
        "gradePct": -3.0411824605328723,
        "smoothedEle": 12.699435786981,
        "gradeBand": "descent"
      },
      {
        "lat": 22.106562,
        "lng": 120.71662,
        "ele": 12,
        "distanceKm": 20.009393824654413,
        "gradePct": -2.996002904936745,
        "smoothedEle": 11.380455782000734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.106049,
        "lng": 120.716709,
        "ele": 8.75,
        "distanceKm": 20.06716908237075,
        "gradePct": -2.5500743209773002,
        "smoothedEle": 10.400658548084293,
        "gradeBand": "descent"
      },
      {
        "lat": 22.10571,
        "lng": 120.716677,
        "ele": 7.25,
        "distanceKm": 20.105008097495844,
        "gradePct": -2.1900703893752445,
        "smoothedEle": 9.76908359590604,
        "gradeBand": "descent"
      },
      {
        "lat": 22.105320666666664,
        "lng": 120.71658133333334,
        "ele": 7.5,
        "distanceKm": 20.14940773865746,
        "gradePct": -1.8390096859329959,
        "smoothedEle": 9.1096464159629,
        "gradeBand": "descent"
      },
      {
        "lat": 22.104931333333333,
        "lng": 120.71648566666667,
        "ele": 7.75,
        "distanceKm": 20.19380738585679,
        "gradePct": -1.5924979758941311,
        "smoothedEle": 8.55544191330878,
        "gradeBand": "descent"
      },
      {
        "lat": 22.104542,
        "lng": 120.71639,
        "ele": 8,
        "distanceKm": 20.238207039094526,
        "gradePct": -1.3865030341644577,
        "smoothedEle": 8.118813073619567,
        "gradeBand": "descent"
      },
      {
        "lat": 22.104141,
        "lng": 120.716302,
        "ele": 8.5,
        "distanceKm": 20.283708586131368,
        "gradePct": -1.20764840682923,
        "smoothedEle": 7.709299150287985,
        "gradeBand": "descent"
      },
      {
        "lat": 22.103663,
        "lng": 120.71627,
        "ele": 7.25,
        "distanceKm": 20.33696197644731,
        "gradePct": -0.8727162615806058,
        "smoothedEle": 7.549062196062281,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1033045,
        "lng": 120.71630049999999,
        "ele": 7.125,
        "distanceKm": 20.37694906134143,
        "gradePct": -0.5984074296631928,
        "smoothedEle": 7.569055738509342,
        "gradeBand": "descent"
      },
      {
        "lat": 22.102946,
        "lng": 120.716331,
        "ele": 7,
        "distanceKm": 20.41693614686311,
        "gradePct": -0.3794035651913257,
        "smoothedEle": 7.569185166876951,
        "gradeBand": "descent"
      },
      {
        "lat": 22.102527,
        "lng": 120.716379,
        "ele": 7.5,
        "distanceKm": 20.463788587369333,
        "gradePct": -0.17024224241272606,
        "smoothedEle": 7.548094654320846,
        "gradeBand": "descent"
      },
      {
        "lat": 22.102158,
        "lng": 120.716413,
        "ele": 7.5,
        "distanceKm": 20.50496881745354,
        "gradePct": -0.06865218720763246,
        "smoothedEle": 7.508023736789801,
        "gradeBand": "descent"
      },
      {
        "lat": 22.101789,
        "lng": 120.716447,
        "ele": 7.5,
        "distanceKm": 20.54614904831701,
        "gradePct": -0.026210696783829684,
        "smoothedEle": 7.501234338429472,
        "gradeBand": "descent"
      },
      {
        "lat": 22.101125,
        "lng": 120.716568,
        "ele": 7.5,
        "distanceKm": 20.621027553171466,
        "gradePct": 0.10010347131641764,
        "smoothedEle": 7.7675503728748065,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.10052,
        "lng": 120.716692,
        "ele": 7.5,
        "distanceKm": 20.689502821127256,
        "gradePct": 0.3122715148751831,
        "smoothedEle": 8.147616140039505,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100033,
        "lng": 120.716781,
        "ele": 7.5,
        "distanceKm": 20.744425626929427,
        "gradePct": 0.4230457817953598,
        "smoothedEle": 8.347610043077625,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09952,
        "lng": 120.716768,
        "ele": 9,
        "distanceKm": 20.801484424233127,
        "gradePct": 0.38615043513327096,
        "smoothedEle": 8.470343330161134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.099139666666666,
        "lng": 120.71673833333334,
        "ele": 9.333333333333334,
        "distanceKm": 20.843885922035764,
        "gradePct": 0.289004000889607,
        "smoothedEle": 8.472431678810379,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.098759333333334,
        "lng": 120.71670866666666,
        "ele": 9.666666666666666,
        "distanceKm": 20.886287420432335,
        "gradePct": 0.15241855086038267,
        "smoothedEle": 8.434606451695196,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.098379,
        "lng": 120.716679,
        "ele": 10,
        "distanceKm": 20.928688919422623,
        "gradePct": 0.03718150448852522,
        "smoothedEle": 8.364669978963486,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09788,
        "lng": 120.716752,
        "ele": 9,
        "distanceKm": 20.98468266247453,
        "gradePct": -0.10957668398621262,
        "smoothedEle": 8.215049427391758,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09748676527341,
        "lng": 120.71686519583761,
        "ele": 8.45168620425533,
        "distanceKm": 21.029936950200934,
        "gradePct": -0.21289954603548444,
        "smoothedEle": 8.045945575242195,
        "gradeBand": "descent"
      },
      {
        "lat": 22.0971,
        "lng": 120.717003,
        "ele": 7.5,
        "distanceKm": 21.07522626510589,
        "gradePct": -0.2991815236246273,
        "smoothedEle": 7.846110761218714,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09660866666667,
        "lng": 120.71717000000001,
        "ele": 6.9166666666666545,
        "distanceKm": 21.132505329275606,
        "gradePct": -0.3499071718230037,
        "smoothedEle": 7.654657828989408,
        "gradeBand": "descent"
      },
      {
        "lat": 22.096117333333332,
        "lng": 120.717337,
        "ele": 6.3333333333333455,
        "distanceKm": 21.189784411438712,
        "gradePct": -0.3283486711693991,
        "smoothedEle": 7.539288136731442,
        "gradeBand": "descent"
      },
      {
        "lat": 22.095626,
        "lng": 120.717504,
        "ele": 5.75,
        "distanceKm": 21.24706351159501,
        "gradePct": -0.17908492848834331,
        "smoothedEle": 7.612206387657855,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09515075,
        "lng": 120.71768725,
        "ele": 6.812499999999982,
        "distanceKm": 21.303180338216904,
        "gradePct": -0.08412042391153148,
        "smoothedEle": 7.584434565901168,
        "gradeBand": "descent"
      },
      {
        "lat": 22.094675499999997,
        "lng": 120.7178705,
        "ele": 7.875000000000035,
        "distanceKm": 21.359297186228538,
        "gradePct": 0.03712596471209353,
        "smoothedEle": 7.674946458462705,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09420025,
        "lng": 120.71805375000001,
        "ele": 8.937500000000018,
        "distanceKm": 21.41541405562867,
        "gradePct": 0.06963498761450973,
        "smoothedEle": 7.711185524421524,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.093725,
        "lng": 120.718237,
        "ele": 10,
        "distanceKm": 21.471530946417182,
        "gradePct": 0.06017449967553089,
        "smoothedEle": 7.720446626060918,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.093255,
        "lng": 120.718365,
        "ele": 8.25,
        "distanceKm": 21.525430888227966,
        "gradePct": 0.01967346355126505,
        "smoothedEle": 7.659669812882584,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.092743,
        "lng": 120.718369,
        "ele": 8.25,
        "distanceKm": 21.58236426093613,
        "gradePct": -0.18914212301537403,
        "smoothedEle": 7.311558432601424,
        "gradeBand": "descent"
      },
      {
        "lat": 22.092254,
        "lng": 120.718235,
        "ele": 7.25,
        "distanceKm": 21.638464031640154,
        "gradePct": -0.42527138131102243,
        "smoothedEle": 6.864446753211488,
        "gradeBand": "descent"
      },
      {
        "lat": 22.091922161331354,
        "lng": 120.71809469210642,
        "ele": 6.662296441360926,
        "distanceKm": 21.678093591623778,
        "gradePct": -0.5945912842665847,
        "smoothedEle": 6.52386411147443,
        "gradeBand": "descent"
      },
      {
        "lat": 22.091593,
        "lng": 120.717947,
        "ele": 6,
        "distanceKm": 21.717731919226367,
        "gradePct": -0.7408302540265792,
        "smoothedEle": 6.186690553546147,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09121,
        "lng": 120.717785,
        "ele": 4.75,
        "distanceKm": 21.76347366761,
        "gradePct": -0.7698250281820919,
        "smoothedEle": 5.887412345250241,
        "gradeBand": "descent"
      },
      {
        "lat": 22.090806,
        "lng": 120.717593,
        "ele": 3.5,
        "distanceKm": 21.812559227787073,
        "gradePct": -0.6666714733727115,
        "smoothedEle": 5.737563480180694,
        "gradeBand": "descent"
      },
      {
        "lat": 22.090322,
        "lng": 120.717345,
        "ele": 4,
        "distanceKm": 21.872135461428606,
        "gradePct": -0.5137258913357009,
        "smoothedEle": 5.547617432329881,
        "gradeBand": "descent"
      },
      {
        "lat": 22.08988163876688,
        "lng": 120.71715917118993,
        "ele": 4.855396021070355,
        "distanceKm": 21.924711647922287,
        "gradePct": -0.33127446658180554,
        "smoothedEle": 5.478474789263899,
        "gradeBand": "descent"
      },
      {
        "lat": 22.089440366103034,
        "lng": 120.71697586486556,
        "ele": 5.990748098220511,
        "distanceKm": 21.977288337186657,
        "gradePct": -0.14106477918258348,
        "smoothedEle": 5.563109232179677,
        "gradeBand": "descent"
      },
      {
        "lat": 22.089,
        "lng": 120.71679,
        "ele": 6.75,
        "distanceKm": 22.029866424503414,
        "gradePct": 0.046517356010873534,
        "smoothedEle": 5.775417906126856,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.088544499999998,
        "lng": 120.7165815,
        "ele": 6.5,
        "distanceKm": 22.084883292917414,
        "gradePct": 0.27519831201819545,
        "smoothedEle": 6.081249455864064,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.088089,
        "lng": 120.716373,
        "ele": 6.25,
        "distanceKm": 22.139900188394304,
        "gradePct": 0.3876159982350554,
        "smoothedEle": 6.278156283782263,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.087689,
        "lng": 120.716215,
        "ele": 7,
        "distanceKm": 22.187263831198713,
        "gradePct": 0.35442009298840466,
        "smoothedEle": 6.31223015132406,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.087351,
        "lng": 120.716107,
        "ele": 7.25,
        "distanceKm": 22.22646049814863,
        "gradePct": 0.22992763084484918,
        "smoothedEle": 6.221520143603452,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.08702,
        "lng": 120.716031,
        "ele": 7,
        "distanceKm": 22.264089862627042,
        "gradePct": 0.04257975639320681,
        "smoothedEle": 6.0508210191110114,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.086590602612866,
        "lng": 120.7159214858384,
        "ele": 6.363289758104555,
        "distanceKm": 22.31315194930497,
        "gradePct": -0.228410691337705,
        "smoothedEle": 5.7256022926813115,
        "gradeBand": "descent"
      },
      {
        "lat": 22.086161196328568,
        "lng": 120.7158120125672,
        "ele": 5.726265280894021,
        "distanceKm": 22.362214037878076,
        "gradePct": -0.4677489693653615,
        "smoothedEle": 5.358711146454456,
        "gradeBand": "descent"
      },
      {
        "lat": 22.085731557062857,
        "lng": 120.71570361005375,
        "ele": 5.081012224715236,
        "distanceKm": 22.411276113025615,
        "gradePct": -0.6103230082529659,
        "smoothedEle": 5.036014249942695,
        "gradeBand": "descent"
      },
      {
        "lat": 22.085301917797143,
        "lng": 120.71559520754032,
        "ele": 4.435759168536403,
        "distanceKm": 22.46033819591013,
        "gradePct": -0.6710201733880129,
        "smoothedEle": 4.725799461592825,
        "gradeBand": "descent"
      },
      {
        "lat": 22.084872278531428,
        "lng": 120.71548680502688,
        "ele": 3.790506112357618,
        "distanceKm": 22.509400286531445,
        "gradePct": -0.6561492455780177,
        "smoothedEle": 4.438172515267703,
        "gradeBand": "descent"
      },
      {
        "lat": 22.084442639265713,
        "lng": 120.71537840251344,
        "ele": 3.145253056178785,
        "distanceKm": 22.55846238488978,
        "gradePct": -0.5797946968608614,
        "smoothedEle": 4.227176984484037,
        "gradeBand": "descent"
      },
      {
        "lat": 22.084013,
        "lng": 120.71527,
        "ele": 2.5,
        "distanceKm": 22.607524490984343,
        "gradePct": -0.4740614183858666,
        "smoothedEle": 4.112567026380613,
        "gradeBand": "descent"
      },
      {
        "lat": 22.083388,
        "lng": 120.715119,
        "ele": 3.75,
        "distanceKm": 22.678741720279948,
        "gradePct": -0.2523278008020955,
        "smoothedEle": 4.113253033301943,
        "gradeBand": "descent"
      },
      {
        "lat": 22.082975979980624,
        "lng": 120.7150227032141,
        "ele": 4.177054736623525,
        "distanceKm": 22.72561844726317,
        "gradePct": -0.08225684967926557,
        "smoothedEle": 4.203911301097795,
        "gradeBand": "descent"
      },
      {
        "lat": 22.082564984985467,
        "lng": 120.71492127741057,
        "ele": 4.5077910524676374,
        "distanceKm": 22.77249876492399,
        "gradePct": 0.08771023377945339,
        "smoothedEle": 4.369808217016134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.08215398999031,
        "lng": 120.71481985160705,
        "ele": 4.838527368311776,
        "distanceKm": 22.819379089364414,
        "gradePct": 0.2509832857102574,
        "smoothedEle": 4.614647788378585,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.081742994995157,
        "lng": 120.71471842580353,
        "ele": 5.169263684155887,
        "distanceKm": 22.866259420584278,
        "gradePct": 0.4137733520390198,
        "smoothedEle": 4.940679500408252,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.081332,
        "lng": 120.714617,
        "ele": 5.5,
        "distanceKm": 22.91313975858425,
        "gradePct": 0.542963851432588,
        "smoothedEle": 5.26570557202777,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.080948,
        "lng": 120.714515,
        "ele": 5.5,
        "distanceKm": 22.957113125866762,
        "gradePct": 0.5636991632652768,
        "smoothedEle": 5.442760878577138,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.080416,
        "lng": 120.714389,
        "ele": 5.75,
        "distanceKm": 23.017676847657274,
        "gradePct": 0.5076893045191571,
        "smoothedEle": 5.621136183133909,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.079873,
        "lng": 120.7142355,
        "ele": 6.125,
        "distanceKm": 23.080093037152967,
        "gradePct": 0.3585113623596147,
        "smoothedEle": 5.753612072228291,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07933,
        "lng": 120.714082,
        "ele": 6.5,
        "distanceKm": 23.142509242057127,
        "gradePct": 0.23584761934164694,
        "smoothedEle": 5.855654727134581,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.078941743204712,
        "lng": 120.7139682005945,
        "ele": 5.782776855992384,
        "distanceKm": 23.18724559234249,
        "gradePct": 0.17352657841957314,
        "smoothedEle": 5.878561683773267,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.078554464251777,
        "lng": 120.7138505887759,
        "ele": 5.75,
        "distanceKm": 23.23198184546209,
        "gradePct": 0.1087798355645066,
        "smoothedEle": 5.869057645298197,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07816723212589,
        "lng": 120.71373279438795,
        "ele": 5.75,
        "distanceKm": 23.276718195734535,
        "gradePct": 0.03466605923842282,
        "smoothedEle": 5.8157812235155095,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07778,
        "lng": 120.713615,
        "ele": 5.75,
        "distanceKm": 23.321454555034602,
        "gradePct": -0.037290256830959344,
        "smoothedEle": 5.746652444874295,
        "gradeBand": "descent"
      },
      {
        "lat": 22.077329,
        "lng": 120.713607,
        "ele": 6,
        "distanceKm": 23.371610310848162,
        "gradePct": -0.08461850179422366,
        "smoothedEle": 5.70131873618314,
        "gradeBand": "descent"
      },
      {
        "lat": 22.076934,
        "lng": 120.713623,
        "ele": 5.75,
        "distanceKm": 23.41556329925011,
        "gradePct": -0.07246756977625182,
        "smoothedEle": 5.727610560377498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.076440599161828,
        "lng": 120.71368196790978,
        "ele": 5.3394767275289565,
        "distanceKm": 23.470762491042944,
        "gradePct": 0.0634154993617233,
        "smoothedEle": 5.949704857941912,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.075947,
        "lng": 120.713739,
        "ele": 5,
        "distanceKm": 23.525962011077247,
        "gradePct": 0.2780448735462918,
        "smoothedEle": 6.298668089286916,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.075399,
        "lng": 120.713792,
        "ele": 5.5,
        "distanceKm": 23.58714115942996,
        "gradePct": 0.4397860137350682,
        "smoothedEle": 6.5901810157009315,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.075007000000003,
        "lng": 120.713838,
        "ele": 6.499999999999958,
        "distanceKm": 23.63098659775823,
        "gradePct": 0.466835210351812,
        "smoothedEle": 6.723336720251057,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.074615,
        "lng": 120.713884,
        "ele": 7.5,
        "distanceKm": 23.674832037508704,
        "gradePct": 0.4256091424899295,
        "smoothedEle": 6.826650215981788,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.073984,
        "lng": 120.713966,
        "ele": 9,
        "distanceKm": 23.745503081369062,
        "gradePct": 0.27251495938530435,
        "smoothedEle": 6.936809382429512,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.073614,
        "lng": 120.713995,
        "ele": 8.5,
        "distanceKm": 23.786753643029495,
        "gradePct": 0.20478029414156113,
        "smoothedEle": 6.997895124538444,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.073247,
        "lng": 120.714,
        "ele": 7.75,
        "distanceKm": 23.827565489795877,
        "gradePct": 0.1537593895215964,
        "smoothedEle": 7.020465820038255,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072587,
        "lng": 120.713959,
        "ele": 7,
        "distanceKm": 23.901075750581217,
        "gradePct": 0.070408457666878,
        "smoothedEle": 7.008374770408491,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07207,
        "lng": 120.713913,
        "ele": 6.25,
        "distanceKm": 23.95875869585702,
        "gradePct": -0.027102419741849553,
        "smoothedEle": 6.902234070775579,
        "gradeBand": "descent"
      },
      {
        "lat": 22.0716775,
        "lng": 120.71387150000001,
        "ele": 5.875,
        "distanceKm": 24.002611773446716,
        "gradePct": -0.14162215264936245,
        "smoothedEle": 6.723421043113496,
        "gradeBand": "descent"
      },
      {
        "lat": 22.071285,
        "lng": 120.71383,
        "ele": 5.5,
        "distanceKm": 24.046464852194926,
        "gradePct": -0.23493219268475887,
        "smoothedEle": 6.547492846475791,
        "gradeBand": "descent"
      },
      {
        "lat": 22.070793000000002,
        "lng": 120.71379800000001,
        "ele": 5.874999999999988,
        "distanceKm": 24.101272118661623,
        "gradePct": -0.32188731221977457,
        "smoothedEle": 6.364238814810484,
        "gradeBand": "descent"
      },
      {
        "lat": 22.070301,
        "lng": 120.713766,
        "ele": 6.25,
        "distanceKm": 24.15607938581956,
        "gradePct": -0.3766921818468969,
        "smoothedEle": 6.1537798270773925,
        "gradeBand": "descent"
      },
      {
        "lat": 22.069766,
        "lng": 120.71376,
        "ele": 7,
        "distanceKm": 24.215571966625017,
        "gradePct": -0.4205897378830514,
        "smoothedEle": 5.830248332687038,
        "gradeBand": "descent"
      },
      {
        "lat": 22.069334328527464,
        "lng": 120.71376077989426,
        "ele": 6.707539652752309,
        "distanceKm": 24.263571777927112,
        "gradePct": -0.4542330650889224,
        "smoothedEle": 5.581827857242882,
        "gradeBand": "descent"
      },
      {
        "lat": 22.068902657054924,
        "lng": 120.71376155978852,
        "ele": 6.415079305504595,
        "distanceKm": 24.311571589230013,
        "gradePct": -0.4150616122444381,
        "smoothedEle": 5.494565795879863,
        "gradeBand": "descent"
      },
      {
        "lat": 22.068471,
        "lng": 120.71376,
        "ele": 5.75,
        "distanceKm": 24.359569999212756,
        "gradePct": -0.32150418494889643,
        "smoothedEle": 5.4917888655328735,
        "gradeBand": "descent"
      },
      {
        "lat": 22.0681215,
        "lng": 120.713806,
        "ele": 4.749999999999954,
        "distanceKm": 24.398720704878503,
        "gradePct": -0.23596889104546423,
        "smoothedEle": 5.4499507823930875,
        "gradeBand": "descent"
      },
      {
        "lat": 22.067772,
        "lng": 120.713852,
        "ele": 3.75,
        "distanceKm": 24.43787141196339,
        "gradePct": -0.1821523114070971,
        "smoothedEle": 5.3505341142343354,
        "gradeBand": "descent"
      },
      {
        "lat": 22.067457,
        "lng": 120.713921,
        "ele": 3,
        "distanceKm": 24.47361228199798,
        "gradePct": -0.19391809728973164,
        "smoothedEle": 5.175738360023981,
        "gradeBand": "descent"
      },
      {
        "lat": 22.067003,
        "lng": 120.71402549999999,
        "ele": 4.375,
        "distanceKm": 24.525230626174043,
        "gradePct": -0.30407306819581253,
        "smoothedEle": 4.885629420932126,
        "gradeBand": "descent"
      },
      {
        "lat": 22.066549,
        "lng": 120.71413,
        "ele": 5.75,
        "distanceKm": 24.576848977566858,
        "gradePct": -0.4486051509319909,
        "smoothedEle": 4.5761135240059705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.066246,
        "lng": 120.714234,
        "ele": 5.75,
        "distanceKm": 24.61220454965094,
        "gradePct": -0.522827168654498,
        "smoothedEle": 4.370056478016858,
        "gradeBand": "descent"
      },
      {
        "lat": 22.06587233333333,
        "lng": 120.71437033333333,
        "ele": 5.166666666666683,
        "distanceKm": 24.65606538768621,
        "gradePct": -0.5222124212136531,
        "smoothedEle": 4.217129073354188,
        "gradeBand": "descent"
      },
      {
        "lat": 22.065498666666667,
        "lng": 120.71450666666667,
        "ele": 4.583333333333317,
        "distanceKm": 24.69992623761798,
        "gradePct": -0.4175895698765403,
        "smoothedEle": 4.192667731884713,
        "gradeBand": "descent"
      },
      {
        "lat": 22.065125,
        "lng": 120.714643,
        "ele": 4,
        "distanceKm": 24.74378709944684,
        "gradePct": -0.2599751465257736,
        "smoothedEle": 4.254410106033903,
        "gradeBand": "descent"
      },
      {
        "lat": 22.064613,
        "lng": 120.714838,
        "ele": 3.5,
        "distanceKm": 24.804161318640606,
        "gradePct": -0.09100397701123907,
        "smoothedEle": 4.2349255599041875,
        "gradeBand": "descent"
      },
      {
        "lat": 22.064249,
        "lng": 120.714969,
        "ele": 3,
        "distanceKm": 24.846828274094353,
        "gradePct": -0.06815478535873767,
        "smoothedEle": 4.113026087632667,
        "gradeBand": "descent"
      },
      {
        "lat": 22.063624,
        "lng": 120.71517,
        "ele": 3.75,
        "distanceKm": 24.9193463236112,
        "gradePct": -0.19979278814178875,
        "smoothedEle": 3.8204195622412853,
        "gradeBand": "descent"
      },
      {
        "lat": 22.063287,
        "lng": 120.715292,
        "ele": 3.75,
        "distanceKm": 24.958871891253235,
        "gradePct": -0.25602087047802535,
        "smoothedEle": 3.7375000566221277,
        "gradeBand": "descent"
      },
      {
        "lat": 22.06286706330896,
        "lng": 120.71547772675926,
        "ele": 3.9913862085856446,
        "distanceKm": 25.00933709420366,
        "gradePct": -0.1993671110403364,
        "smoothedEle": 3.8214041494004762,
        "gradeBand": "descent"
      },
      {
        "lat": 22.06245,
        "lng": 120.715671,
        "ele": 4.5,
        "distanceKm": 25.05980863453899,
        "gradePct": -0.025998909153310473,
        "smoothedEle": 4.008653195901734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.062022,
        "lng": 120.715913,
        "ele": 3.75,
        "distanceKm": 25.113538468800176,
        "gradePct": 0.19870511381192163,
        "smoothedEle": 4.24126417933856,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.061587,
        "lng": 120.716134,
        "ele": 3,
        "distanceKm": 25.16700185652394,
        "gradePct": 0.3511279187909534,
        "smoothedEle": 4.453272878590839,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0612465,
        "lng": 120.7163075,
        "ele": 4.249999999999946,
        "distanceKm": 25.208873236013204,
        "gradePct": 0.3986577807728607,
        "smoothedEle": 4.6179484943777,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.060906,
        "lng": 120.716481,
        "ele": 5.5,
        "distanceKm": 25.25074463389104,
        "gradePct": 0.3789951175656958,
        "smoothedEle": 4.733016054742661,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.060533,
        "lng": 120.716708,
        "ele": 5.5,
        "distanceKm": 25.298362744565466,
        "gradePct": 0.29697654414565705,
        "smoothedEle": 4.769517453231753,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.060141,
        "lng": 120.716924,
        "ele": 5.25,
        "distanceKm": 25.34730608887242,
        "gradePct": 0.17966361073537726,
        "smoothedEle": 4.734496667818412,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.05974,
        "lng": 120.71714800000001,
        "ele": 5.500000000000009,
        "distanceKm": 25.397516460167118,
        "gradePct": 0.09221576952942845,
        "smoothedEle": 4.757715059924353,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.059339,
        "lng": 120.717372,
        "ele": 5.75,
        "distanceKm": 25.447726861561563,
        "gradePct": 0.06187633084391986,
        "smoothedEle": 4.848475520662289,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.058959,
        "lng": 120.7175685,
        "ele": 5,
        "distanceKm": 25.494582899586856,
        "gradePct": 0.03026015955609173,
        "smoothedEle": 4.827140353151173,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.058579,
        "lng": 120.717765,
        "ele": 4.25,
        "distanceKm": 25.54143896113319,
        "gradePct": 0.010005623522446197,
        "smoothedEle": 4.75870606324196,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.058121,
        "lng": 120.718049,
        "ele": 3.75,
        "distanceKm": 25.600177378483412,
        "gradePct": -0.012571286084393885,
        "smoothedEle": 4.737382371079852,
        "gradeBand": "descent"
      },
      {
        "lat": 22.05781,
        "lng": 120.71833266666667,
        "ele": 3.9999999999999933,
        "distanceKm": 25.645459758457438,
        "gradePct": -0.03703987122602483,
        "smoothedEle": 4.770297756355081,
        "gradeBand": "descent"
      },
      {
        "lat": 22.057499,
        "lng": 120.71861633333333,
        "ele": 4.250000000000007,
        "distanceKm": 25.69074217993959,
        "gradePct": 0.007613356932661768,
        "smoothedEle": 4.844115878919744,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.057188,
        "lng": 120.7189,
        "ele": 4.5,
        "distanceKm": 25.73602464293126,
        "gradePct": 0.09508982802658561,
        "smoothedEle": 4.956793447970217,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0567705,
        "lng": 120.719273,
        "ele": 5,
        "distanceKm": 25.79629761296821,
        "gradePct": 0.22531066429703453,
        "smoothedEle": 5.189412163320702,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.056353,
        "lng": 120.719646,
        "ele": 5.5,
        "distanceKm": 25.85657065538685,
        "gradePct": 0.3707925389864313,
        "smoothedEle": 5.529995504200554,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.056022114762115,
        "lng": 120.71991216663764,
        "ele": 6.183647185718115,
        "distanceKm": 25.902463354335964,
        "gradePct": 0.46886757778161653,
        "smoothedEle": 5.81101714759045,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.055691229524225,
        "lng": 120.72017833327529,
        "ele": 6.867294371436231,
        "distanceKm": 25.948356091648023,
        "gradePct": 0.5184194368470024,
        "smoothedEle": 6.041224563379627,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.05536,
        "lng": 120.720444,
        "ele": 6.5,
        "distanceKm": 25.99424881015402,
        "gradePct": 0.5302134229380365,
        "smoothedEle": 6.241931818322466,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.054997666666665,
        "lng": 120.720695,
        "ele": 6.6666666666666705,
        "distanceKm": 26.042127727818333,
        "gradePct": 0.4814189202257849,
        "smoothedEle": 6.411221062842865,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.054635333333334,
        "lng": 120.720946,
        "ele": 6.8333333333333295,
        "distanceKm": 26.090006681288095,
        "gradePct": 0.38281161157293303,
        "smoothedEle": 6.500362557244366,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.054273,
        "lng": 120.721197,
        "ele": 7,
        "distanceKm": 26.137885670565062,
        "gradePct": 0.2531850590031253,
        "smoothedEle": 6.495072894259889,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.053815,
        "lng": 120.721521,
        "ele": 6.5,
        "distanceKm": 26.198783619014144,
        "gradePct": 0.07484799249684508,
        "smoothedEle": 6.407661882686066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.053451621210854,
        "lng": 120.7217841991731,
        "ele": 6.727680945579464,
        "distanceKm": 26.24744994181951,
        "gradePct": -0.008910362852192075,
        "smoothedEle": 6.403309286169486,
        "gradeBand": "descent"
      },
      {
        "lat": 22.053089645793463,
        "lng": 120.72204963723166,
        "ele": 6.283779704950578,
        "distanceKm": 26.296116146207073,
        "gradePct": -0.02845224226931996,
        "smoothedEle": 6.4427831000105025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.05272782289673,
        "lng": 120.72231531861583,
        "ele": 5.76688985247527,
        "distanceKm": 26.34478246898411,
        "gradePct": 0.008596369118364176,
        "smoothedEle": 6.502366183635316,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.052366,
        "lng": 120.722581,
        "ele": 5.25,
        "distanceKm": 26.3934488311719,
        "gradePct": 0.0833696177286239,
        "smoothedEle": 6.582058505850096,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.051933,
        "lng": 120.722991,
        "ele": 6.5,
        "distanceKm": 26.457508501842963,
        "gradePct": 0.1794292688079648,
        "smoothedEle": 6.77032645729446,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.051640199999998,
        "lng": 120.7232932,
        "ele": 6.850000000000011,
        "distanceKm": 26.502564284967036,
        "gradePct": 0.23981473352720425,
        "smoothedEle": 6.930307143211941,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.051347399999997,
        "lng": 120.7235954,
        "ele": 7.199999999999994,
        "distanceKm": 26.547620112656567,
        "gradePct": 0.30704398167973035,
        "smoothedEle": 7.121100855803697,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0510546,
        "lng": 120.7238976,
        "ele": 7.550000000000006,
        "distanceKm": 26.59267598491278,
        "gradePct": 0.39276040254448047,
        "smoothedEle": 7.366313756861549,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0507618,
        "lng": 120.7241998,
        "ele": 7.899999999999989,
        "distanceKm": 26.63773190173371,
        "gradePct": 0.5044978694276661,
        "smoothedEle": 7.721199824459462,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.050469,
        "lng": 120.724502,
        "ele": 8.25,
        "distanceKm": 26.682787863120577,
        "gradePct": 0.6209814123728488,
        "smoothedEle": 8.102049336717526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.050172333333332,
        "lng": 120.72480133333333,
        "ele": 8.416666666666663,
        "distanceKm": 26.72795321901327,
        "gradePct": 0.6684207771330258,
        "smoothedEle": 8.374660849264597,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.04987566666667,
        "lng": 120.72510066666666,
        "ele": 8.583333333333337,
        "distanceKm": 26.77311861909825,
        "gradePct": 0.6713292590355714,
        "smoothedEle": 8.602532910466282,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.049579,
        "lng": 120.7254,
        "ele": 8.75,
        "distanceKm": 26.818284063375575,
        "gradePct": 0.6197622976155128,
        "smoothedEle": 8.807542166056,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.049113,
        "lng": 120.725886,
        "ele": 9.75,
        "distanceKm": 26.890352300986926,
        "gradePct": 0.5346383776880065,
        "smoothedEle": 9.216983937748807,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.048806666666664,
        "lng": 120.72619433333334,
        "ele": 9.583333333333329,
        "distanceKm": 26.936936533108916,
        "gradePct": 0.5388160523066291,
        "smoothedEle": 9.497616283141976,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.048500333333333,
        "lng": 120.72650266666666,
        "ele": 9.416666666666671,
        "distanceKm": 26.983520812170447,
        "gradePct": 0.5589946540155524,
        "smoothedEle": 9.767738533809986,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.048194,
        "lng": 120.726811,
        "ele": 9.25,
        "distanceKm": 27.030105138173525,
        "gradePct": 0.5767758640751438,
        "smoothedEle": 10.028253047378412,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.04782,
        "lng": 120.727202,
        "ele": 10.25,
        "distanceKm": 27.088013560324434,
        "gradePct": 0.5822605430896861,
        "smoothedEle": 10.368217920592246,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.047545806803647,
        "lng": 120.72754036492955,
        "ele": 10.876714362573374,
        "distanceKm": 27.134335351475748,
        "gradePct": 0.5520840313118749,
        "smoothedEle": 10.586114328911139,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.047286,
        "lng": 120.727892,
        "ele": 11.25,
        "distanceKm": 27.180681726154074,
        "gradePct": 0.5129515193773139,
        "smoothedEle": 10.777178930659824,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.046892,
        "lng": 120.728391,
        "ele": 11.25,
        "distanceKm": 27.24824153510711,
        "gradePct": 0.47765832290465754,
        "smoothedEle": 11.090043633507044,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.046673,
        "lng": 120.72867600000001,
        "ele": 11.5,
        "distanceKm": 27.286396450878982,
        "gradePct": 0.47459718053406336,
        "smoothedEle": 11.307918664200665,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.046454,
        "lng": 120.728961,
        "ele": 11.75,
        "distanceKm": 27.324551401652407,
        "gradePct": 0.4914777559950396,
        "smoothedEle": 11.52304641493493,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.046104,
        "lng": 120.729392,
        "ele": 11.75,
        "distanceKm": 27.38360937141199,
        "gradePct": 0.48689939432359436,
        "smoothedEle": 11.764535437688018,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0458605,
        "lng": 120.729678,
        "ele": 11.75,
        "distanceKm": 27.423634066512715,
        "gradePct": 0.45650084443061784,
        "smoothedEle": 11.889089873575356,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.045617,
        "lng": 120.729964,
        "ele": 11.75,
        "distanceKm": 27.463658798972748,
        "gradePct": 0.4102615393983321,
        "smoothedEle": 11.99860351621179,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.045303120747434,
        "lng": 120.73031446126991,
        "ele": 12.142578491087036,
        "distanceKm": 27.513886462038005,
        "gradePct": 0.3384561743902917,
        "smoothedEle": 12.13982700035439,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.044965,
        "lng": 120.730639,
        "ele": 12.5,
        "distanceKm": 27.564209210926727,
        "gradePct": 0.2864046156644033,
        "smoothedEle": 12.258017089421543,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.044666333333335,
        "lng": 120.73095383333333,
        "ele": 12.541666666666666,
        "distanceKm": 27.610640098685543,
        "gradePct": 0.25088894752292124,
        "smoothedEle": 12.350431324856203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.044367666666666,
        "lng": 120.73126866666667,
        "ele": 12.583333333333334,
        "distanceKm": 27.65707103431105,
        "gradePct": 0.21136548033667946,
        "smoothedEle": 12.403309369393059,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.044069,
        "lng": 120.7315835,
        "ele": 12.625,
        "distanceKm": 27.703502017802116,
        "gradePct": 0.15954706174761635,
        "smoothedEle": 12.429723520250755,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.043770333333335,
        "lng": 120.73189833333333,
        "ele": 12.666666666666666,
        "distanceKm": 27.749933049158464,
        "gradePct": 0.09927285115086662,
        "smoothedEle": 12.423033207823575,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.043471666666665,
        "lng": 120.73221316666667,
        "ele": 12.708333333333334,
        "distanceKm": 27.79636412837981,
        "gradePct": 0.018440413036449565,
        "smoothedEle": 12.358897814168081,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.043173,
        "lng": 120.732528,
        "ele": 12.75,
        "distanceKm": 27.842795255465024,
        "gradePct": -0.07233944945471586,
        "smoothedEle": 12.24237244640014,
        "gradeBand": "descent"
      },
      {
        "lat": 22.04283,
        "lng": 120.73282,
        "ele": 12.25,
        "distanceKm": 27.89137915972876,
        "gradePct": -0.07650878304037995,
        "smoothedEle": 12.269809373957827,
        "gradeBand": "descent"
      },
      {
        "lat": 22.0425005,
        "lng": 120.7330595,
        "ele": 12.000000000000005,
        "distanceKm": 27.935557545341986,
        "gradePct": -0.03523541530329334,
        "smoothedEle": 12.3546337637234,
        "gradeBand": "descent"
      },
      {
        "lat": 22.042171,
        "lng": 120.733299,
        "ele": 11.74999999999999,
        "distanceKm": 27.979735963071363,
        "gradePct": 0.03748512209400548,
        "smoothedEle": 12.456836594640633,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0418415,
        "lng": 120.73353850000001,
        "ele": 11.499999999999995,
        "distanceKm": 28.02391441291567,
        "gradePct": 0.13531749842397692,
        "smoothedEle": 12.56039154223398,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.041512,
        "lng": 120.733778,
        "ele": 11.25,
        "distanceKm": 28.068092894873683,
        "gradePct": 0.20425792735551057,
        "smoothedEle": 12.665174709549396,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.041019,
        "lng": 120.734197,
        "ele": 13.25,
        "distanceKm": 28.137879268079736,
        "gradePct": 0.2480265125875425,
        "smoothedEle": 12.856057887471017,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.040708,
        "lng": 120.734439,
        "ele": 13.75,
        "distanceKm": 28.18051756816079,
        "gradePct": 0.2932535937053677,
        "smoothedEle": 13.0451758760782,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.04034125,
        "lng": 120.73471275,
        "ele": 13.812499999999998,
        "distanceKm": 28.230107528775687,
        "gradePct": 0.38882824262416854,
        "smoothedEle": 13.352736949930595,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0399745,
        "lng": 120.73498649999999,
        "ele": 13.875,
        "distanceKm": 28.279697530991346,
        "gradePct": 0.48969165047425717,
        "smoothedEle": 13.676299591540142,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.03960775,
        "lng": 120.73526025,
        "ele": 13.937500000000002,
        "distanceKm": 28.329287574808525,
        "gradePct": 0.5928891421417543,
        "smoothedEle": 14.018335742659373,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.039241,
        "lng": 120.735534,
        "ele": 14,
        "distanceKm": 28.378877660225484,
        "gradePct": 0.6243964213275777,
        "smoothedEle": 14.28669506829146,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.038739,
        "lng": 120.735974,
        "ele": 15,
        "distanceKm": 28.450798145585317,
        "gradePct": 0.5050702320485412,
        "smoothedEle": 14.497878630650751,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.03850113925355,
        "lng": 120.73629812478829,
        "ele": 14.9244739279869,
        "distanceKm": 28.49340817366872,
        "gradePct": 0.4166907866860715,
        "smoothedEle": 14.60424723281149,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.038282,
        "lng": 120.736638,
        "ele": 14.75,
        "distanceKm": 28.536080596901748,
        "gradePct": 0.3329316162647403,
        "smoothedEle": 14.720959767444269,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.037904,
        "lng": 120.737231,
        "ele": 15,
        "distanceKm": 28.61025892931274,
        "gradePct": 0.3265110119043924,
        "smoothedEle": 15.031863414028477,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.037574,
        "lng": 120.737588,
        "ele": 15,
        "distanceKm": 28.662224723830466,
        "gradePct": 0.3751036453873149,
        "smoothedEle": 15.276610407563663,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.037132623682925,
        "lng": 120.73787871714207,
        "ele": 15.054042267858614,
        "distanceKm": 28.719727849431997,
        "gradePct": 0.36823230021168696,
        "smoothedEle": 15.41269827872614,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.036649,
        "lng": 120.738088,
        "ele": 15.25,
        "distanceKm": 28.77766947249747,
        "gradePct": 0.3662463375778748,
        "smoothedEle": 15.627763897977678,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.036027,
        "lng": 120.738328,
        "ele": 16.5,
        "distanceKm": 28.851123531343966,
        "gradePct": 0.495068428120331,
        "smoothedEle": 16.2144631890405,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.035503,
        "lng": 120.73853,
        "ele": 16.25,
        "distanceKm": 28.912998000103162,
        "gradePct": 0.7316778060251651,
        "smoothedEle": 16.860126915349916,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.034979,
        "lng": 120.738732,
        "ele": 16,
        "distanceKm": 28.97487249479595,
        "gradePct": 0.9187096474395396,
        "smoothedEle": 17.454801472263064,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.034601333333335,
        "lng": 120.73888033333333,
        "ele": 17.416666666666668,
        "distanceKm": 29.019563781289655,
        "gradePct": 0.9297384315675,
        "smoothedEle": 17.821862995117574,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.034223666666666,
        "lng": 120.73902866666667,
        "ele": 18.833333333333332,
        "distanceKm": 29.06425508173813,
        "gradePct": 0.9199440768362022,
        "smoothedEle": 18.191379844609415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.033846,
        "lng": 120.739177,
        "ele": 20.25,
        "distanceKm": 29.108946396139437,
        "gradePct": 0.8210165460755114,
        "smoothedEle": 18.45988128147374,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.03345477828853,
        "lng": 120.73933382472622,
        "ele": 20.1848701332024,
        "distanceKm": 29.155354473096693,
        "gradePct": 0.7661694555114532,
        "smoothedEle": 18.799553058921457,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.033059889144265,
        "lng": 120.73948041236311,
        "ele": 19.71743506660118,
        "distanceKm": 29.20179107469729,
        "gradePct": 0.7662617371043609,
        "smoothedEle": 19.208414463173405,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.032665,
        "lng": 120.739627,
        "ele": 19.25,
        "distanceKm": 29.248227690010417,
        "gradePct": 0.8171874081919921,
        "smoothedEle": 19.69323689495471,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.032307777680295,
        "lng": 120.73976393496962,
        "ele": 19.37637648615309,
        "distanceKm": 29.29038224590234,
        "gradePct": 0.8718728135394112,
        "smoothedEle": 20.092095147189106,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.031948,
        "lng": 120.739893,
        "ele": 19.5,
        "distanceKm": 29.33254170781509,
        "gradePct": 0.9178746581841072,
        "smoothedEle": 20.468330308361814,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.03149666131545,
        "lng": 120.74007698519625,
        "ele": 20.039019129636248,
        "distanceKm": 29.386191908947836,
        "gradePct": 0.9189716099837973,
        "smoothedEle": 20.909011353012513,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.03104532870456,
        "lng": 120.74026098719483,
        "ele": 20.722918897106332,
        "distanceKm": 29.43984211191856,
        "gradePct": 0.9035497733601116,
        "smoothedEle": 21.41278664212618,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.030594,
        "lng": 120.740445,
        "ele": 21.5,
        "distanceKm": 29.4934923237373,
        "gradePct": 0.9334781660083971,
        "smoothedEle": 21.986806117960956,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.030194227099237,
        "lng": 120.74060132703283,
        "ele": 22.674192306564276,
        "distanceKm": 29.54077548649445,
        "gradePct": 0.994586723951091,
        "smoothedEle": 22.52513575229073,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.029798,
        "lng": 120.740768,
        "ele": 24,
        "distanceKm": 29.588065086133028,
        "gradePct": 1.0619177694334943,
        "smoothedEle": 23.05043602157107,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.029287,
        "lng": 120.740989,
        "ele": 24.75,
        "distanceKm": 29.649282056293632,
        "gradePct": 1.0837094928031576,
        "smoothedEle": 23.681206383151626,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.028831500000003,
        "lng": 120.7411685,
        "ele": 24.874999999999996,
        "distanceKm": 29.703205097995113,
        "gradePct": 1.0431031296343607,
        "smoothedEle": 24.183594536071105,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.028376,
        "lng": 120.741348,
        "ele": 25,
        "distanceKm": 29.757128160118327,
        "gradePct": 0.9457157791861909,
        "smoothedEle": 24.59821536697418,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.028058,
        "lng": 120.741501,
        "ele": 25,
        "distanceKm": 29.795845769760756,
        "gradePct": 0.8397005533845256,
        "smoothedEle": 24.81000811054212,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.027733532037345,
        "lng": 120.74163608977433,
        "ele": 25,
        "distanceKm": 29.834518902659212,
        "gradePct": 0.7059723892226221,
        "smoothedEle": 24.941033869094127,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.027409,
        "lng": 120.741771,
        "ele": 25,
        "distanceKm": 29.873192035135546,
        "gradePct": 0.5545948576080343,
        "smoothedEle": 25.013159683798055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.026987641524983,
        "lng": 120.74194652422754,
        "ele": 25.211686033639385,
        "distanceKm": 29.923417039679688,
        "gradePct": 0.3580002011264382,
        "smoothedEle": 25.055006959182034,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.026564481143737,
        "lng": 120.74211714317066,
        "ele": 25.15876452522954,
        "distanceKm": 29.973649772818344,
        "gradePct": 0.226603817633129,
        "smoothedEle": 25.141799389476624,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.02614132076249,
        "lng": 120.74228776211376,
        "ele": 25.10584301681969,
        "distanceKm": 30.023882524354843,
        "gradePct": 0.18822349279006967,
        "smoothedEle": 25.28144447925996,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.025718160381246,
        "lng": 120.74245838105688,
        "ele": 25.05292150840985,
        "distanceKm": 30.074115294289925,
        "gradePct": 0.215399592194056,
        "smoothedEle": 25.444728124066472,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.025295,
        "lng": 120.742629,
        "ele": 25,
        "distanceKm": 30.124348082622788,
        "gradePct": 0.2881152234912047,
        "smoothedEle": 25.632846067980978,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.02476,
        "lng": 120.742875,
        "ele": 25.5,
        "distanceKm": 30.189016450512774,
        "gradePct": 0.3610496413153394,
        "smoothedEle": 25.906617436671713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.02444,
        "lng": 120.74301,
        "ele": 26.25,
        "distanceKm": 30.227223255783784,
        "gradePct": 0.38655266248434966,
        "smoothedEle": 26.065408986486418,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.023959358344122,
        "lng": 120.74315699497616,
        "ele": 26.579228109507643,
        "distanceKm": 30.282774674859667,
        "gradePct": 0.40509686363866815,
        "smoothedEle": 26.28735056817232,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.023473,
        "lng": 120.743282,
        "ele": 26.75,
        "distanceKm": 30.33836925330229,
        "gradePct": 0.3771342717702253,
        "smoothedEle": 26.446472767801232,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.023054,
        "lng": 120.743364,
        "ele": 27.25,
        "distanceKm": 30.38572054244432,
        "gradePct": 0.31062692204116726,
        "smoothedEle": 26.5139181643786,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.022636,
        "lng": 120.743454,
        "ele": 27.25,
        "distanceKm": 30.433116926168246,
        "gradePct": 0.2023686040731814,
        "smoothedEle": 26.49369285732516,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.022218,
        "lng": 120.743544,
        "ele": 27.25,
        "distanceKm": 30.48051331525089,
        "gradePct": 0.059169205132260524,
        "smoothedEle": 26.396654290634412,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.021792,
        "lng": 120.743646,
        "ele": 27,
        "distanceKm": 30.5290353151761,
        "gradePct": -0.1082198617325773,
        "smoothedEle": 26.203317547835418,
        "gradeBand": "descent"
      },
      {
        "lat": 22.021397,
        "lng": 120.743713,
        "ele": 26.25,
        "distanceKm": 30.57349706566946,
        "gradePct": -0.2766364051708968,
        "smoothedEle": 25.94323469313248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.020996,
        "lng": 120.7437545,
        "ele": 25.625,
        "distanceKm": 30.618291037825575,
        "gradePct": -0.4488988702073227,
        "smoothedEle": 25.60222172076741,
        "gradeBand": "descent"
      },
      {
        "lat": 22.020595,
        "lng": 120.743796,
        "ele": 25,
        "distanceKm": 30.663085011138314,
        "gradePct": -0.6388808256366478,
        "smoothedEle": 25.154575054913618,
        "gradeBand": "descent"
      },
      {
        "lat": 22.01996,
        "lng": 120.743819,
        "ele": 24.75,
        "distanceKm": 30.733733681546717,
        "gradePct": -0.85388061678174,
        "smoothedEle": 24.46807281385751,
        "gradeBand": "descent"
      },
      {
        "lat": 22.019488162728706,
        "lng": 120.74385666626827,
        "ele": 23.909235083225692,
        "distanceKm": 30.786343142996028,
        "gradePct": -0.9243932189780677,
        "smoothedEle": 23.996652083024056,
        "gradeBand": "descent"
      },
      {
        "lat": 22.019016325457414,
        "lng": 120.74389433253654,
        "ele": 23.068470166451444,
        "distanceKm": 30.838952605399342,
        "gradePct": -0.8760979234781181,
        "smoothedEle": 23.643545377626225,
        "gradeBand": "descent"
      },
      {
        "lat": 22.018544490624617,
        "lng": 120.74393203372453,
        "ele": 22.25327128017372,
        "distanceKm": 30.89156206414478,
        "gradePct": -0.7327444694550165,
        "smoothedEle": 23.412370919601436,
        "gradeBand": "descent"
      },
      {
        "lat": 22.01807274531231,
        "lng": 120.74397101686228,
        "ele": 22.376635640086857,
        "distanceKm": 30.944171526038087,
        "gradePct": -0.5618347646319857,
        "smoothedEle": 23.25087227053462,
        "gradeBand": "descent"
      },
      {
        "lat": 22.017601,
        "lng": 120.74401,
        "ele": 22.5,
        "distanceKm": 30.996780988953724,
        "gradePct": -0.3992509167580099,
        "smoothedEle": 23.12809301590019,
        "gradeBand": "descent"
      },
      {
        "lat": 22.017115999999998,
        "lng": 120.744026,
        "ele": 23.000000000000018,
        "distanceKm": 31.050735818950862,
        "gradePct": -0.24653136926243935,
        "smoothedEle": 23.09870529579615,
        "gradeBand": "descent"
      },
      {
        "lat": 22.016631,
        "lng": 120.744042,
        "ele": 23.5,
        "distanceKm": 31.104690649120148,
        "gradePct": -0.09162693286204192,
        "smoothedEle": 23.188815392134813,
        "gradeBand": "descent"
      },
      {
        "lat": 22.016137931074727,
        "lng": 120.74408778971177,
        "ele": 23.5,
        "distanceKm": 31.159720308648932,
        "gradePct": 0.10991948329880193,
        "smoothedEle": 23.434423698092075,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.015652,
        "lng": 120.744044,
        "ele": 23.25,
        "distanceKm": 31.213941689879682,
        "gradePct": 0.31138108295521794,
        "smoothedEle": 23.741508217403027,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.015622,
        "lng": 120.744197,
        "ele": 24,
        "distanceKm": 31.230062895674845,
        "gradePct": 0.3582240539319516,
        "smoothedEle": 23.82641337951393,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.015543,
        "lng": 120.744244,
        "ele": 24,
        "distanceKm": 31.24009488189518,
        "gradePct": 0.3868720925820149,
        "smoothedEle": 23.878245308318984,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.015061,
        "lng": 120.74428,
        "ele": 23.75,
        "distanceKm": 31.293819241654713,
        "gradePct": 0.4758217596496389,
        "smoothedEle": 24.122302546730992,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.014625666666667,
        "lng": 120.744316,
        "ele": 24.25,
        "distanceKm": 31.342368217053085,
        "gradePct": 0.46067552318158345,
        "smoothedEle": 24.27832891145964,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.01419033333333,
        "lng": 120.744352,
        "ele": 24.75,
        "distanceKm": 31.39091719332346,
        "gradePct": 0.36095486262490034,
        "smoothedEle": 24.33301797317853,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.013755,
        "lng": 120.744388,
        "ele": 25.25,
        "distanceKm": 31.439466170464815,
        "gradePct": 0.24400392644887337,
        "smoothedEle": 24.363004818826525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.013372333333333,
        "lng": 120.74441666666667,
        "ele": 25.08333333333333,
        "distanceKm": 31.482119319120788,
        "gradePct": 0.17082763227577286,
        "smoothedEle": 24.410807791514134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.012989666666666,
        "lng": 120.74444533333333,
        "ele": 24.91666666666667,
        "distanceKm": 31.52477246832963,
        "gradePct": 0.1017481934871313,
        "smoothedEle": 24.425276201661582,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.012607,
        "lng": 120.744474,
        "ele": 24.75,
        "distanceKm": 31.567425618091335,
        "gradePct": 0.07758467964870014,
        "smoothedEle": 24.461724731069285,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.012086,
        "lng": 120.744435,
        "ele": 24,
        "distanceKm": 31.62549759661286,
        "gradePct": 0.03997713208516999,
        "smoothedEle": 24.43433122938006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.011659,
        "lng": 120.744343,
        "ele": 23.75,
        "distanceKm": 31.673915875942317,
        "gradePct": -0.04255152427938229,
        "smoothedEle": 24.316510838576406,
        "gradeBand": "descent"
      },
      {
        "lat": 22.011236270295502,
        "lng": 120.74423318792866,
        "ele": 24.048650081069624,
        "distanceKm": 31.722265310333636,
        "gradePct": -0.1537008429952712,
        "smoothedEle": 24.11702406052615,
        "gradeBand": "descent"
      },
      {
        "lat": 22.010811281774572,
        "lng": 120.74413361660321,
        "ele": 24.16179931454456,
        "distanceKm": 31.77062393066192,
        "gradePct": -0.26342257741764913,
        "smoothedEle": 23.93337087990513,
        "gradeBand": "descent"
      },
      {
        "lat": 22.010386247469903,
        "lng": 120.74403427397287,
        "ele": 24.190961882810324,
        "distanceKm": 31.81898253401759,
        "gradePct": -0.28762631817537637,
        "smoothedEle": 23.862151854570463,
        "gradeBand": "descent"
      },
      {
        "lat": 22.009961,
        "lng": 120.743936,
        "ele": 24,
        "distanceKm": 31.867341109060675,
        "gradePct": -0.15234416938661666,
        "smoothedEle": 24.027821449252965,
        "gradeBand": "descent"
      },
      {
        "lat": 22.00983148292385,
        "lng": 120.74438683061773,
        "ele": 23.434528914048673,
        "distanceKm": 31.915997906294496,
        "gradePct": 0.18599827084951204,
        "smoothedEle": 24.514879523932258,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.009700675616944,
        "lng": 120.744837224344,
        "ele": 23,
        "distanceKm": 31.9646544191722,
        "gradePct": 0.5378970387164373,
        "smoothedEle": 25.031835574580562,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.009571643747456,
        "lng": 120.74528821532637,
        "ele": 23.191444692981186,
        "distanceKm": 32.0133111529122,
        "gradePct": 0.7285998692424025,
        "smoothedEle": 25.32770398966309,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.009441242530446,
        "lng": 120.74573874659599,
        "ele": 24.595452554102273,
        "distanceKm": 32.06196780268347,
        "gradePct": 0.7600723366431117,
        "smoothedEle": 25.52955793973348,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.009313,
        "lng": 120.74619,
        "ele": 27,
        "distanceKm": 32.11062467339737,
        "gradePct": 0.6012143873213777,
        "smoothedEle": 25.66352184696986,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.009157,
        "lng": 120.74672,
        "ele": 30.5,
        "distanceKm": 32.16795065168649,
        "gradePct": 0.37800859309847246,
        "smoothedEle": 25.807896257633622,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.009021,
        "lng": 120.747183,
        "ele": 27.5,
        "distanceKm": 32.21802042091629,
        "gradePct": 0.3207445778009327,
        "smoothedEle": 25.98872972151987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.008873,
        "lng": 120.747686,
        "ele": 26.5,
        "distanceKm": 32.272424342320825,
        "gradePct": 0.34984908989109476,
        "smoothedEle": 26.25804545358997,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.008725,
        "lng": 120.748189,
        "ele": 25.5,
        "distanceKm": 32.32682831533102,
        "gradePct": 0.39973319633494564,
        "smoothedEle": 26.50379681063316,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.008428,
        "lng": 120.748759,
        "ele": 25,
        "distanceKm": 32.394235095945476,
        "gradePct": 0.34049564726469805,
        "smoothedEle": 26.583817230785314,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.008129,
        "lng": 120.749173,
        "ele": 25,
        "distanceKm": 32.448336705056526,
        "gradePct": 0.07795073753857795,
        "smoothedEle": 26.29470589794368,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.007719,
        "lng": 120.749583,
        "ele": 25.75,
        "distanceKm": 32.51050602838366,
        "gradePct": -0.09916297934526278,
        "smoothedEle": 26.231740498341225,
        "gradeBand": "descent"
      },
      {
        "lat": 22.007414,
        "lng": 120.749783,
        "ele": 26.5,
        "distanceKm": 32.55019630599225,
        "gradePct": -0.17877905601771638,
        "smoothedEle": 26.173979475026705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.00705032362908,
        "lng": 120.74995574424506,
        "ele": 27.346876464659115,
        "distanceKm": 32.5943830160626,
        "gradePct": -0.2236159525195255,
        "smoothedEle": 26.135794861600772,
        "gradeBand": "descent"
      },
      {
        "lat": 22.006673,
        "lng": 120.750092,
        "ele": 27.75,
        "distanceKm": 32.63862858367945,
        "gradePct": -0.1264836661800057,
        "smoothedEle": 26.093617390573048,
        "gradeBand": "descent"
      },
      {
        "lat": 22.006208001813288,
        "lng": 120.75022909407265,
        "ele": 27.390508883108907,
        "distanceKm": 32.69223097415745,
        "gradePct": -0.05759548029334657,
        "smoothedEle": 26.13505860348869,
        "gradeBand": "descent"
      },
      {
        "lat": 22.005744334542193,
        "lng": 120.75037139604844,
        "ele": 26.42700592207256,
        "distanceKm": 32.74583508340735,
        "gradePct": 0.01710337714076513,
        "smoothedEle": 26.214533090418424,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.005280667271094,
        "lng": 120.75051369802422,
        "ele": 25.463502961036347,
        "distanceKm": 32.79943920578901,
        "gradePct": 0.020611770986922615,
        "smoothedEle": 26.172198546870714,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.004817,
        "lng": 120.750656,
        "ele": 24.5,
        "distanceKm": 32.853043341301436,
        "gradePct": -0.08481252796118234,
        "smoothedEle": 25.935136707773093,
        "gradeBand": "descent"
      },
      {
        "lat": 22.004407,
        "lng": 120.750762,
        "ele": 25.25,
        "distanceKm": 32.89992477783776,
        "gradePct": -0.28228902875823136,
        "smoothedEle": 25.58188752779856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.003829,
        "lng": 120.750862,
        "ele": 26,
        "distanceKm": 32.965017146908274,
        "gradePct": -0.6118537809662803,
        "smoothedEle": 24.97567624767433,
        "gradeBand": "descent"
      },
      {
        "lat": 22.003387,
        "lng": 120.750844,
        "ele": 25.75,
        "distanceKm": 33.0142003937497,
        "gradePct": -0.7799831666954904,
        "smoothedEle": 24.54695153444675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.002926,
        "lng": 120.750748,
        "ele": 25,
        "distanceKm": 33.06640803696679,
        "gradePct": -0.7998624462992466,
        "smoothedEle": 24.23470953015102,
        "gradeBand": "descent"
      },
      {
        "lat": 22.00251,
        "lng": 120.750588,
        "ele": 24,
        "distanceKm": 33.11551834912717,
        "gradePct": -0.6788753693315633,
        "smoothedEle": 24.07891241110087,
        "gradeBand": "descent"
      },
      {
        "lat": 22.002089257901968,
        "lng": 120.75031596954992,
        "ele": 23.124334895517254,
        "distanceKm": 33.1700649377727,
        "gradePct": -0.5086910034202069,
        "smoothedEle": 23.914293227688905,
        "gradeBand": "descent"
      },
      {
        "lat": 22.00168,
        "lng": 120.750023,
        "ele": 22,
        "distanceKm": 33.22468385834032,
        "gradePct": -0.39856760110943024,
        "smoothedEle": 23.68711712203509,
        "gradeBand": "descent"
      },
      {
        "lat": 22.00133875,
        "lng": 120.749772,
        "ele": 22.437500000000018,
        "distanceKm": 33.27061300917353,
        "gradePct": -0.3627158254408142,
        "smoothedEle": 23.49593806270792,
        "gradeBand": "descent"
      },
      {
        "lat": 22.0009975,
        "lng": 120.749521,
        "ele": 22.875000000000036,
        "distanceKm": 33.316542195092275,
        "gradePct": -0.35408709489890666,
        "smoothedEle": 23.36764829962509,
        "gradeBand": "descent"
      },
      {
        "lat": 22.000656250000002,
        "lng": 120.74927000000001,
        "ele": 23.312499999999982,
        "distanceKm": 33.36247141609724,
        "gradePct": -0.31021866853105085,
        "smoothedEle": 23.316772801995143,
        "gradeBand": "descent"
      },
      {
        "lat": 22.000315,
        "lng": 120.749019,
        "ele": 23.75,
        "distanceKm": 33.40840067218913,
        "gradePct": -0.23201894466702935,
        "smoothedEle": 23.290805778356283,
        "gradeBand": "descent"
      },
      {
        "lat": 21.999967,
        "lng": 120.748703,
        "ele": 23.75,
        "distanceKm": 33.45898490507151,
        "gradePct": -0.15667180789418955,
        "smoothedEle": 23.23099616921691,
        "gradeBand": "descent"
      },
      {
        "lat": 21.999772,
        "lng": 120.748422,
        "ele": 23.75,
        "distanceKm": 33.49517126268911,
        "gradePct": -0.09074289485489521,
        "smoothedEle": 23.245855966265943,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9995306010472,
        "lng": 120.7479076203956,
        "ele": 23.942908494026153,
        "distanceKm": 33.55460932549217,
        "gradePct": -0.048869062386782874,
        "smoothedEle": 23.227743463549597,
        "gradeBand": "descent"
      },
      {
        "lat": 21.99931,
        "lng": 120.747382,
        "ele": 24,
        "distanceKm": 33.61409335301472,
        "gradePct": -0.08651856693156167,
        "smoothedEle": 23.111037752360723,
        "gradeBand": "descent"
      },
      {
        "lat": 21.999164272175843,
        "lng": 120.74703008991713,
        "ele": 22.90947752688875,
        "distanceKm": 33.653829047080684,
        "gradePct": -0.13138150070655455,
        "smoothedEle": 22.974329333222112,
        "gradeBand": "descent"
      },
      {
        "lat": 21.999023,
        "lng": 120.746676,
        "ele": 22,
        "distanceKm": 33.69357165796333,
        "gradePct": -0.2246525263297329,
        "smoothedEle": 22.795894041703665,
        "gradeBand": "descent"
      },
      {
        "lat": 21.998844,
        "lng": 120.746298,
        "ele": 22.25,
        "distanceKm": 33.737331679218755,
        "gradePct": -0.30772230590154154,
        "smoothedEle": 22.617563851988795,
        "gradeBand": "descent"
      },
      {
        "lat": 21.998678471615133,
        "lng": 120.74587049165375,
        "ele": 22.3843692039932,
        "distanceKm": 33.78509622103356,
        "gradePct": -0.3623189396300132,
        "smoothedEle": 22.443291295071333,
        "gradeBand": "descent"
      },
      {
        "lat": 21.99850631441009,
        "lng": 120.74544599443584,
        "ele": 22.0895794693288,
        "distanceKm": 33.83286507344014,
        "gradePct": -0.3712365308703572,
        "smoothedEle": 22.303981642954824,
        "gradeBand": "descent"
      },
      {
        "lat": 21.998334157205043,
        "lng": 120.74502149721792,
        "ele": 21.7947897346644,
        "distanceKm": 33.88063397452212,
        "gradePct": -0.34328270836417696,
        "smoothedEle": 22.167415883591083,
        "gradeBand": "descent"
      },
      {
        "lat": 21.998162,
        "lng": 120.744597,
        "ele": 21.5,
        "distanceKm": 33.9284029242775,
        "gradePct": -0.2390677828995253,
        "smoothedEle": 22.175814615924324,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9977955,
        "lng": 120.7447445,
        "ele": 21.75000000000002,
        "distanceKm": 33.97190081042187,
        "gradePct": -0.12272391761395877,
        "smoothedEle": 22.24598791720661,
        "gradeBand": "descent"
      },
      {
        "lat": 21.997429,
        "lng": 120.744892,
        "ele": 22,
        "distanceKm": 34.01539871030455,
        "gradePct": -0.03327903964795051,
        "smoothedEle": 22.288361211301147,
        "gradeBand": "descent"
      },
      {
        "lat": 21.99707,
        "lng": 120.745028,
        "ele": 22.5,
        "distanceKm": 34.05770870444627,
        "gradePct": 0.011879353233510246,
        "smoothedEle": 22.256715283806837,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.996761,
        "lng": 120.745176,
        "ele": 22.5,
        "distanceKm": 34.095303829905745,
        "gradePct": 0.04578049528824947,
        "smoothedEle": 22.261556126785976,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.996273,
        "lng": 120.745361,
        "ele": 23,
        "distanceKm": 34.15282164398833,
        "gradePct": 0.04610017415506397,
        "smoothedEle": 22.30740865268884,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9959465,
        "lng": 120.74549350000001,
        "ele": 22.875,
        "distanceKm": 34.19161194177287,
        "gradePct": 0.016080097455517743,
        "smoothedEle": 22.297349626855702,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.99562,
        "lng": 120.745626,
        "ele": 22.75,
        "distanceKm": 34.230402250631236,
        "gradePct": -0.018290804681366974,
        "smoothedEle": 22.24055764459789,
        "gradeBand": "descent"
      },
      {
        "lat": 21.995014,
        "lng": 120.745848,
        "ele": 22,
        "distanceKm": 34.301567690036684,
        "gradePct": -0.05848854663465014,
        "smoothedEle": 22.149572509250874,
        "gradeBand": "descent"
      },
      {
        "lat": 21.994481,
        "lng": 120.74605,
        "ele": 22.5,
        "distanceKm": 34.36438745555352,
        "gradePct": -0.042066150160646146,
        "smoothedEle": 22.220277128232645,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9941575,
        "lng": 120.74619200000001,
        "ele": 21.74999999999993,
        "distanceKm": 34.40322432079717,
        "gradePct": 0.08160347681830221,
        "smoothedEle": 22.443555168466254,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.993834,
        "lng": 120.746334,
        "ele": 21,
        "distanceKm": 34.44206119862677,
        "gradePct": 0.2794353393604303,
        "smoothedEle": 22.78452233847219,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.99342232564565,
        "lng": 120.746502971342,
        "ele": 20.896166719474493,
        "distanceKm": 34.491040414466234,
        "gradePct": 0.5043178238599423,
        "smoothedEle": 23.171667296696672,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9930108548426,
        "lng": 120.74667252212515,
        "ele": 21.9300129582989,
        "distanceKm": 34.540019786022484,
        "gradePct": 0.5699008638708535,
        "smoothedEle": 23.332652666533974,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.992598702126664,
        "lng": 120.74684011914934,
        "ele": 23.312709970775284,
        "distanceKm": 34.58899858405633,
        "gradePct": 0.4971169215708642,
        "smoothedEle": 23.356003455527492,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.992187,
        "lng": 120.747009,
        "ele": 25.75,
        "distanceKm": 34.63797742241109,
        "gradePct": 0.24656564156735078,
        "smoothedEle": 23.24180023438799,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.991677,
        "lng": 120.747174,
        "ele": 28.25,
        "distanceKm": 34.697183678639796,
        "gradePct": -0.04319498828032247,
        "smoothedEle": 23.10546899723529,
        "gradeBand": "descent"
      },
      {
        "lat": 21.991442,
        "lng": 120.747283,
        "ele": 26,
        "distanceKm": 34.72562875240268,
        "gradePct": -0.12506105434599135,
        "smoothedEle": 23.035230116941776,
        "gradeBand": "descent"
      },
      {
        "lat": 21.991287,
        "lng": 120.747296,
        "ele": 25,
        "distanceKm": 34.742916030166455,
        "gradePct": -0.17353759322517456,
        "smoothedEle": 22.986958273173578,
        "gradeBand": "descent"
      },
      {
        "lat": 21.991027,
        "lng": 120.7472,
        "ele": 23.5,
        "distanceKm": 34.77347419141277,
        "gradePct": -0.22924347975664566,
        "smoothedEle": 22.89011519521825,
        "gradeBand": "descent"
      },
      {
        "lat": 21.990555,
        "lng": 120.747553,
        "ele": 21.75,
        "distanceKm": 34.83734320878744,
        "gradePct": -0.30034133333600116,
        "smoothedEle": 22.642596354088727,
        "gradeBand": "descent"
      },
      {
        "lat": 21.990248,
        "lng": 120.747728,
        "ele": 21,
        "distanceKm": 34.875955282753445,
        "gradePct": -0.39836698364097034,
        "smoothedEle": 22.35761657826091,
        "gradeBand": "descent"
      },
      {
        "lat": 21.989779850802094,
        "lng": 120.74792387945661,
        "ele": 20.02640434366874,
        "distanceKm": 34.931791688893796,
        "gradePct": -0.6693218736044309,
        "smoothedEle": 21.679377396086633,
        "gradeBand": "descent"
      },
      {
        "lat": 21.989311,
        "lng": 120.748119,
        "ele": 19.5,
        "distanceKm": 34.98767264062143,
        "gradePct": -0.9760066577703735,
        "smoothedEle": 20.883077020388527,
        "gradeBand": "descent"
      },
      {
        "lat": 21.988748,
        "lng": 120.748342,
        "ele": 20.5,
        "distanceKm": 35.054364307127884,
        "gradePct": -1.1260056474732814,
        "smoothedEle": 20.264959359945735,
        "gradeBand": "descent"
      },
      {
        "lat": 21.988365333333334,
        "lng": 120.74849766666667,
        "ele": 20.416666666666668,
        "distanceKm": 35.09984143046433,
        "gradePct": -1.0622549174639433,
        "smoothedEle": 19.942964121187842,
        "gradeBand": "descent"
      },
      {
        "lat": 21.987982666666667,
        "lng": 120.74865333333332,
        "ele": 20.333333333333332,
        "distanceKm": 35.14531856907683,
        "gradePct": -0.9284974106107111,
        "smoothedEle": 19.629625303581236,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9876,
        "lng": 120.748809,
        "ele": 20.25,
        "distanceKm": 35.1907957229662,
        "gradePct": -0.7591560035614185,
        "smoothedEle": 19.335819382522896,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9872675,
        "lng": 120.7489395,
        "ele": 19.75,
        "distanceKm": 35.230140438915605,
        "gradePct": -0.7048292712978366,
        "smoothedEle": 19.07981463640121,
        "gradeBand": "descent"
      },
      {
        "lat": 21.986935,
        "lng": 120.74907,
        "ele": 19.25,
        "distanceKm": 35.26948516564729,
        "gradePct": -0.64830091788888,
        "smoothedEle": 18.861296125117736,
        "gradeBand": "descent"
      },
      {
        "lat": 21.986367,
        "lng": 120.749313,
        "ele": 18.25,
        "distanceKm": 35.33743220231505,
        "gradePct": -0.6196612944284824,
        "smoothedEle": 18.44464001279844,
        "gradeBand": "descent"
      },
      {
        "lat": 21.985899,
        "lng": 120.7494915,
        "ele": 17.374999999999943,
        "distanceKm": 35.39263027037724,
        "gradePct": -0.5642974143708139,
        "smoothedEle": 18.195287681627583,
        "gradeBand": "descent"
      },
      {
        "lat": 21.985431,
        "lng": 120.74967,
        "ele": 16.5,
        "distanceKm": 35.4478283586769,
        "gradePct": -0.515810002325251,
        "smoothedEle": 17.94995686992055,
        "gradeBand": "descent"
      },
      {
        "lat": 21.984823,
        "lng": 120.74994,
        "ele": 16.75,
        "distanceKm": 35.520942576191146,
        "gradePct": -0.391734432245675,
        "smoothedEle": 17.7622867208372,
        "gradeBand": "descent"
      },
      {
        "lat": 21.984444,
        "lng": 120.750088,
        "ele": 17.75,
        "distanceKm": 35.56576333779129,
        "gradePct": -0.28504544901557644,
        "smoothedEle": 17.746565746440737,
        "gradeBand": "descent"
      },
      {
        "lat": 21.983858,
        "lng": 120.750345,
        "ele": 18.25,
        "distanceKm": 35.636105896177106,
        "gradePct": -0.04730411794326383,
        "smoothedEle": 17.907449736243716,
        "gradeBand": "descent"
      },
      {
        "lat": 21.983502,
        "lng": 120.750488,
        "ele": 18,
        "distanceKm": 35.67834823757265,
        "gradePct": 0.10348664715132859,
        "smoothedEle": 18.078591498815836,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.983095666666667,
        "lng": 120.750639,
        "ele": 18.333333333333318,
        "distanceKm": 35.726137902132656,
        "gradePct": 0.28487488533552024,
        "smoothedEle": 18.33021422023949,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.982689333333333,
        "lng": 120.75079,
        "ele": 18.666666666666682,
        "distanceKm": 35.77392758121419,
        "gradePct": 0.38863607271803224,
        "smoothedEle": 18.542510742079305,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.982283,
        "lng": 120.750941,
        "ele": 19,
        "distanceKm": 35.821717274817985,
        "gradePct": 0.39992944301556366,
        "smoothedEle": 18.674399685421527,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.98182274544607,
        "lng": 120.75113153024162,
        "ele": 19.25,
        "distanceKm": 35.876536527455976,
        "gradePct": 0.3319325412368889,
        "smoothedEle": 18.7351165700025,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.981360877978833,
        "lng": 120.75131765993511,
        "ele": 19.219770099947837,
        "distanceKm": 35.9313627969084,
        "gradePct": 0.23091290948133494,
        "smoothedEle": 18.815250636326642,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.98089958531922,
        "lng": 120.75150543995674,
        "ele": 18.979846733298547,
        "distanceKm": 35.98618908610498,
        "gradePct": 0.1761825626824038,
        "smoothedEle": 18.928714898454412,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.980438292659613,
        "lng": 120.75169321997836,
        "ele": 18.73992336664929,
        "distanceKm": 36.04101539752231,
        "gradePct": 0.17288943567042311,
        "smoothedEle": 19.04155283372681,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.979977,
        "lng": 120.751881,
        "ele": 18.5,
        "distanceKm": 36.095841731161784,
        "gradePct": 0.14975225440111437,
        "smoothedEle": 19.062837561334234,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.979582077899785,
        "lng": 120.75203822625316,
        "ele": 18.780531822820294,
        "distanceKm": 36.14265217171441,
        "gradePct": 0.07836650497532527,
        "smoothedEle": 18.995347266194273,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.97918705193319,
        "lng": 120.75219515083545,
        "ele": 19.10368788188018,
        "distanceKm": 36.18946270109628,
        "gradePct": -0.024225908908385926,
        "smoothedEle": 18.887000501903927,
        "gradeBand": "descent"
      },
      {
        "lat": 21.978792025966595,
        "lng": 120.75235207541772,
        "ele": 19.426843940940064,
        "distanceKm": 36.23627324604222,
        "gradePct": -0.12402083424062306,
        "smoothedEle": 18.78375135160992,
        "gradeBand": "descent"
      },
      {
        "lat": 21.978397,
        "lng": 120.752509,
        "ele": 19.75,
        "distanceKm": 36.28308380655226,
        "gradePct": -0.13952492337471314,
        "smoothedEle": 18.778834821839222,
        "gradeBand": "descent"
      },
      {
        "lat": 21.977936323875422,
        "lng": 120.75270339105116,
        "ele": 18.821140450910203,
        "distanceKm": 36.33809083315636,
        "gradePct": -0.019524916134503634,
        "smoothedEle": 18.962873874605638,
        "gradeBand": "descent"
      },
      {
        "lat": 21.977476161937712,
        "lng": 120.75289919552557,
        "ele": 18.2855702254551,
        "distanceKm": 36.39309797155531,
        "gradePct": 0.21790691583924593,
        "smoothedEle": 19.314796084993002,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.977016,
        "lng": 120.753095,
        "ele": 17.75,
        "distanceKm": 36.44810513397514,
        "gradePct": 0.49138345068545963,
        "smoothedEle": 19.76527554559534,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.976567978896906,
        "lng": 120.75327861644094,
        "ele": 18.668235052161194,
        "distanceKm": 36.50139950564689,
        "gradePct": 0.676501943783996,
        "smoothedEle": 20.193118224411556,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.97611916586707,
        "lng": 120.75345997134629,
        "ele": 20.148134131367787,
        "distanceKm": 36.554693947570364,
        "gradePct": 0.7576793573852906,
        "smoothedEle": 20.584455252360687,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.975670446472552,
        "lng": 120.75364159459643,
        "ele": 21.60607224339872,
        "distanceKm": 36.60798837803225,
        "gradePct": 0.8577900864384083,
        "smoothedEle": 21.15232078259713,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.975222,
        "lng": 120.753824,
        "ele": 23,
        "distanceKm": 36.661282829176294,
        "gradePct": 1.0476906514356952,
        "smoothedEle": 21.96644626372077,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.974838,
        "lng": 120.7539815,
        "ele": 23.25000000000002,
        "distanceKm": 36.7069661059554,
        "gradePct": 1.2381226611421303,
        "smoothedEle": 22.710238668789106,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.974454,
        "lng": 120.754139,
        "ele": 23.5,
        "distanceKm": 36.75264939834869,
        "gradePct": 1.4076182756775348,
        "smoothedEle": 23.384678834501173,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.974042,
        "lng": 120.754313,
        "ele": 23.25,
        "distanceKm": 36.80185002539432,
        "gradePct": 1.4402185199088828,
        "smoothedEle": 23.967352134704083,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.973422,
        "lng": 120.754559,
        "ele": 26,
        "distanceKm": 36.87530976123305,
        "gradePct": 1.1710624762532948,
        "smoothedEle": 24.53695075171186,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.972846,
        "lng": 120.754796,
        "ele": 26,
        "distanceKm": 36.94386232499169,
        "gradePct": 0.8105346776656583,
        "smoothedEle": 24.876021217441853,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.972426,
        "lng": 120.75497266666666,
        "ele": 25.583333333333314,
        "distanceKm": 36.993991652398236,
        "gradePct": 0.5862636194532881,
        "smoothedEle": 25.04681421564816,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.972006,
        "lng": 120.75514933333334,
        "ele": 25.166666666666686,
        "distanceKm": 37.04412099938541,
        "gradePct": 0.44713965938425637,
        "smoothedEle": 25.189395881835857,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.971586,
        "lng": 120.755326,
        "ele": 24.75,
        "distanceKm": 37.09425036595259,
        "gradePct": 0.35878695966265917,
        "smoothedEle": 25.348207522725605,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9712325,
        "lng": 120.7554895,
        "ele": 25.125000000000032,
        "distanceKm": 37.13702109099871,
        "gradePct": 0.25301199760540166,
        "smoothedEle": 25.348207522725605,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.970879,
        "lng": 120.755653,
        "ele": 25.5,
        "distanceKm": 37.17979183258789,
        "gradePct": 0.21188421679144884,
        "smoothedEle": 25.422203189045398,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.97034,
        "lng": 120.755892,
        "ele": 24.75,
        "distanceKm": 37.244595438875194,
        "gradePct": 0.20331874096760028,
        "smoothedEle": 25.597536405182403,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.96981,
        "lng": 120.756128,
        "ele": 25,
        "distanceKm": 37.30835594004442,
        "gradePct": 0.25871982680644645,
        "smoothedEle": 25.865647176338506,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.969335,
        "lng": 120.756342,
        "ele": 26,
        "distanceKm": 37.365598334442154,
        "gradePct": 0.36858196163286483,
        "smoothedEle": 26.13481160278104,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.968905097582446,
        "lng": 120.75653092572611,
        "ele": 26.963906765815256,
        "distanceKm": 37.41721891623792,
        "gradePct": 0.45279173973533804,
        "smoothedEle": 26.429049720419325,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.968475051583972,
        "lng": 120.75671947027718,
        "ele": 27.245230104282115,
        "distanceKm": 37.468839487520775,
        "gradePct": 0.5433272320435087,
        "smoothedEle": 26.786136281540585,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.968045,
        "lng": 120.756908,
        "ele": 27.5,
        "distanceKm": 37.52046008040236,
        "gradePct": 0.751906041780467,
        "smoothedEle": 27.426375187880843,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.96756,
        "lng": 120.757108,
        "ele": 27,
        "distanceKm": 37.578198858081564,
        "gradePct": 1.0133215818349386,
        "smoothedEle": 28.233277946816955,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.96711,
        "lng": 120.75731,
        "ele": 28,
        "distanceKm": 37.632399373629525,
        "gradePct": 1.2055302232417844,
        "smoothedEle": 28.94512135123314,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.966579,
        "lng": 120.757557,
        "ele": 28.75,
        "distanceKm": 37.69670370201835,
        "gradePct": 1.3195700154557854,
        "smoothedEle": 29.77087006138255,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.966293009200342,
        "lng": 120.75775653356536,
        "ele": 30.56159046372576,
        "distanceKm": 37.734580853130396,
        "gradePct": 1.2671692368937941,
        "smoothedEle": 30.158052277595985,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.966001,
        "lng": 120.757946,
        "ele": 31.75,
        "distanceKm": 37.77247605223339,
        "gradePct": 1.1495442442444241,
        "smoothedEle": 30.452389892445716,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.965666,
        "lng": 120.75821300000001,
        "ele": 32.125,
        "distanceKm": 37.81879778196143,
        "gradePct": 0.9730122613474051,
        "smoothedEle": 30.712509135501925,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.965331,
        "lng": 120.75848,
        "ele": 32.5,
        "distanceKm": 37.86511955028373,
        "gradePct": 0.7442355782578077,
        "smoothedEle": 30.853760859476164,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.964855,
        "lng": 120.758841,
        "ele": 33.5,
        "distanceKm": 37.92982937031263,
        "gradePct": 0.3041831977298496,
        "smoothedEle": 30.71784876762007,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9645046,
        "lng": 120.75910640000001,
        "ele": 32.1,
        "distanceKm": 37.97744411251318,
        "gradePct": -0.09350674222643507,
        "smoothedEle": 30.293274504351174,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9641542,
        "lng": 120.7593718,
        "ele": 30.7,
        "distanceKm": 38.0250588935154,
        "gradePct": -0.6328159393224783,
        "smoothedEle": 29.465969636811867,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9638038,
        "lng": 120.7596372,
        "ele": 29.3,
        "distanceKm": 38.0726737133198,
        "gradePct": -1.1605256032707607,
        "smoothedEle": 28.516843404195306,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9634534,
        "lng": 120.75990259999999,
        "ele": 27.9,
        "distanceKm": 38.12028857192482,
        "gradePct": -1.6182404066333387,
        "smoothedEle": 27.501406796468597,
        "gradeBand": "descent"
      },
      {
        "lat": 21.963103,
        "lng": 120.760168,
        "ele": 26.5,
        "distanceKm": 38.167903469330966,
        "gradePct": -2.059949263876063,
        "smoothedEle": 26.258448610892398,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9627585,
        "lng": 120.760457,
        "ele": 24.125,
        "distanceKm": 38.21643833880816,
        "gradePct": -2.3737520948816897,
        "smoothedEle": 24.868247231613562,
        "gradeBand": "descent"
      },
      {
        "lat": 21.962414,
        "lng": 120.760746,
        "ele": 21.75,
        "distanceKm": 38.26497325265913,
        "gradePct": -2.541910725958011,
        "smoothedEle": 23.586518473872687,
        "gradeBand": "descent"
      },
      {
        "lat": 21.961996,
        "lng": 120.761234,
        "ele": 22.25,
        "distanceKm": 38.333478652703945,
        "gradePct": -2.578651409995989,
        "smoothedEle": 21.999784871197782,
        "gradeBand": "descent"
      },
      {
        "lat": 21.961759,
        "lng": 120.761562,
        "ele": 20.5,
        "distanceKm": 38.376358079187995,
        "gradePct": -2.4616773489789954,
        "smoothedEle": 21.09292554180017,
        "gradeBand": "descent"
      },
      {
        "lat": 21.961564,
        "lng": 120.761928,
        "ele": 19,
        "distanceKm": 38.41988710629857,
        "gradePct": -2.3325036740001193,
        "smoothedEle": 20.112163499202936,
        "gradeBand": "descent"
      },
      {
        "lat": 21.961335,
        "lng": 120.762412,
        "ele": 18.5,
        "distanceKm": 38.475920297023926,
        "gradePct": -2.241147671722432,
        "smoothedEle": 18.85066584688188,
        "gradeBand": "descent"
      },
      {
        "lat": 21.961084,
        "lng": 120.763083,
        "ele": 18.5,
        "distanceKm": 38.55053470101177,
        "gradePct": -2.2494379925685433,
        "smoothedEle": 17.14018959014471,
        "gradeBand": "descent"
      },
      {
        "lat": 21.960889,
        "lng": 120.763517,
        "ele": 17.75,
        "distanceKm": 38.60026737828514,
        "gradePct": -2.3731311376499598,
        "smoothedEle": 15.807957612454334,
        "gradeBand": "descent"
      },
      {
        "lat": 21.96052,
        "lng": 120.763993,
        "ele": 15.5,
        "distanceKm": 38.66424557558734,
        "gradePct": -2.3866166531422475,
        "smoothedEle": 14.340270217572535,
        "gradeBand": "descent"
      },
      {
        "lat": 21.960223,
        "lng": 120.764327,
        "ele": 13,
        "distanceKm": 38.71196418930195,
        "gradePct": -2.245736918661132,
        "smoothedEle": 13.53291425825573,
        "gradeBand": "descent"
      },
      {
        "lat": 21.960042,
        "lng": 120.764632,
        "ele": 11.25,
        "distanceKm": 38.74930599462984,
        "gradePct": -2.032436608067074,
        "smoothedEle": 13.103483496984982,
        "gradeBand": "descent"
      },
      {
        "lat": 21.959876,
        "lng": 120.765102,
        "ele": 9.5,
        "distanceKm": 38.80117158562916,
        "gradePct": -1.6054051699215244,
        "smoothedEle": 12.576404366791134,
        "gradeBand": "descent"
      },
      {
        "lat": 21.959727,
        "lng": 120.765528,
        "ele": 8.25,
        "distanceKm": 38.84812420516553,
        "gradePct": -1.2606191851960602,
        "smoothedEle": 12.188863026457659,
        "gradeBand": "descent"
      },
      {
        "lat": 21.959518,
        "lng": 120.766112,
        "ele": 9.25,
        "distanceKm": 38.91267899870636,
        "gradePct": -0.8039041171197666,
        "smoothedEle": 11.916885715865494,
        "gradeBand": "descent"
      },
      {
        "lat": 21.959146,
        "lng": 120.766628,
        "ele": 12.75,
        "distanceKm": 38.9800789454754,
        "gradePct": -0.3492255204243232,
        "smoothedEle": 12.092305273187916,
        "gradeBand": "descent"
      },
      {
        "lat": 21.95873281273568,
        "lng": 120.76698058708928,
        "ele": 13.579916025985993,
        "distanceKm": 39.038671230677295,
        "gradePct": 0.2106164889683596,
        "smoothedEle": 12.688119732132796,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.958312,
        "lng": 120.767323,
        "ele": 14.25,
        "distanceKm": 39.09729283501162,
        "gradePct": 0.7918625099207762,
        "smoothedEle": 13.56543454184906,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.957843,
        "lng": 120.76764750000001,
        "ele": 14.875000000000037,
        "distanceKm": 39.1592573284362,
        "gradePct": 1.2889595671535576,
        "smoothedEle": 14.616032690456027,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.957374,
        "lng": 120.767972,
        "ele": 15.5,
        "distanceKm": 39.221221881506644,
        "gradePct": 1.6125064224803083,
        "smoothedEle": 15.735693269184077,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.957079,
        "lng": 120.768212,
        "ele": 16,
        "distanceKm": 39.2623147201771,
        "gradePct": 1.7054580839521536,
        "smoothedEle": 16.452877862008204,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.956784,
        "lng": 120.768452,
        "ele": 16.5,
        "distanceKm": 39.30340758979187,
        "gradePct": 1.7786156144698022,
        "smoothedEle": 17.226340467316774,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.956352,
        "lng": 120.768839,
        "ele": 16.5,
        "distanceKm": 39.365860700694896,
        "gradePct": 1.9437864783703673,
        "smoothedEle": 18.622924438963487,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.95608364229883,
        "lng": 120.76907426644686,
        "ele": 18.277127777363745,
        "distanceKm": 39.40432008778824,
        "gradePct": 2.1377009705565087,
        "smoothedEle": 19.70569040709014,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.955821,
        "lng": 120.769317,
        "ele": 20,
        "distanceKm": 39.44278519758684,
        "gradePct": 2.405924053597237,
        "smoothedEle": 20.923881355880493,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.95553563508507,
        "lng": 120.76969147561863,
        "ele": 21.535763064417562,
        "distanceKm": 39.49276879607079,
        "gradePct": 2.6871443553319443,
        "smoothedEle": 22.400382536994414,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.95526821677384,
        "lng": 120.77008141403479,
        "ele": 23.2141206662647,
        "distanceKm": 39.54278300369069,
        "gradePct": 2.713405521548879,
        "smoothedEle": 23.53366924816875,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.955002,
        "lng": 120.770472,
        "ele": 25.75,
        "distanceKm": 39.59277175194079,
        "gradePct": 2.4701356208374254,
        "smoothedEle": 24.32083569151112,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.954741,
        "lng": 120.770762,
        "ele": 28.75,
        "distanceKm": 39.63444621064987,
        "gradePct": 2.0918707193944273,
        "smoothedEle": 24.84352687860691,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.95425,
        "lng": 120.771019,
        "ele": 31.5,
        "distanceKm": 39.695136496288015,
        "gradePct": 1.2928536755691262,
        "smoothedEle": 25.039740307081924,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.953815,
        "lng": 120.771173,
        "ele": 28.75,
        "distanceKm": 39.74604710489229,
        "gradePct": 0.679217055352095,
        "smoothedEle": 24.943502744205016,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.953474,
        "lng": 120.771314,
        "ele": 26.25,
        "distanceKm": 39.78665740871836,
        "gradePct": 0.2552641133107513,
        "smoothedEle": 24.735082135206333,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.953159,
        "lng": 120.771435,
        "ele": 23.75,
        "distanceKm": 39.823840436149375,
        "gradePct": -0.10457095358741093,
        "smoothedEle": 24.50136477067955,
        "gradeBand": "descent"
      },
      {
        "lat": 21.95286,
        "lng": 120.771644,
        "ele": 22.75,
        "distanceKm": 39.863463520964466,
        "gradePct": -0.5066156966557996,
        "smoothedEle": 23.924109279085897,
        "gradeBand": "descent"
      },
      {
        "lat": 21.952536,
        "lng": 120.772039,
        "ele": 20.25,
        "distanceKm": 39.91784637342751,
        "gradePct": -1.2814291170046643,
        "smoothedEle": 22.43395303943781,
        "gradeBand": "descent"
      },
      {
        "lat": 21.95237557688022,
        "lng": 120.77246709528639,
        "ele": 19.931740729451846,
        "distanceKm": 39.96546449311802,
        "gradePct": -2.0741033501478308,
        "smoothedEle": 20.695641929118565,
        "gradeBand": "descent"
      },
      {
        "lat": 21.952236,
        "lng": 120.772904,
        "ele": 19.75,
        "distanceKm": 40.013121763389535,
        "gradePct": -2.718961422081645,
        "smoothedEle": 19.13081513740665,
        "gradeBand": "descent"
      },
      {
        "lat": 21.952107,
        "lng": 120.773354,
        "ele": 20.5,
        "distanceKm": 40.06169778671676,
        "gradePct": -3.112223789175756,
        "smoothedEle": 17.725386093369032,
        "gradeBand": "descent"
      },
      {
        "lat": 21.951898,
        "lng": 120.773781,
        "ele": 17.5,
        "distanceKm": 40.1114915548671,
        "gradePct": -3.0832761999547267,
        "smoothedEle": 16.441530390005454,
        "gradeBand": "descent"
      },
      {
        "lat": 21.951684,
        "lng": 120.774106,
        "ele": 14,
        "distanceKm": 40.15259770300429,
        "gradePct": -2.8560820410585657,
        "smoothedEle": 15.453183168299567,
        "gradeBand": "descent"
      },
      {
        "lat": 21.951489315379515,
        "lng": 120.77444576675033,
        "ele": 13.162655665507469,
        "distanceKm": 40.19378663884297,
        "gradePct": -2.588764439866693,
        "smoothedEle": 14.588155202939577,
        "gradeBand": "descent"
      },
      {
        "lat": 21.951316,
        "lng": 120.774799,
        "ele": 12.75,
        "distanceKm": 40.23500026566588,
        "gradePct": -2.3786575312547242,
        "smoothedEle": 13.740498844391272,
        "gradeBand": "descent"
      },
      {
        "lat": 21.951158,
        "lng": 120.775197,
        "ele": 11.75,
        "distanceKm": 40.279649309186496,
        "gradePct": -2.1748012709230413,
        "smoothedEle": 12.912931163303584,
        "gradeBand": "descent"
      },
      {
        "lat": 21.951025,
        "lng": 120.775699,
        "ele": 10.5,
        "distanceKm": 40.333493286740236,
        "gradePct": -1.9471161845805207,
        "smoothedEle": 12.018293199060652,
        "gradeBand": "descent"
      },
      {
        "lat": 21.950974,
        "lng": 120.776242,
        "ele": 10,
        "distanceKm": 40.38978137649576,
        "gradePct": -1.5382899677136754,
        "smoothedEle": 11.595691641688793,
        "gradeBand": "descent"
      },
      {
        "lat": 21.950898,
        "lng": 120.776857,
        "ele": 9.5,
        "distanceKm": 40.45376923613556,
        "gradePct": -0.8067413311636873,
        "smoothedEle": 11.77913429830485,
        "gradeBand": "descent"
      },
      {
        "lat": 21.950854,
        "lng": 120.777342,
        "ele": 10.5,
        "distanceKm": 40.50402791467058,
        "gradePct": -0.22035047415938044,
        "smoothedEle": 12.06717050408972,
        "gradeBand": "descent"
      },
      {
        "lat": 21.950695,
        "lng": 120.77783,
        "ele": 12,
        "distanceKm": 40.55737238311799,
        "gradePct": 0.32516113956191073,
        "smoothedEle": 12.489335219044385,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.950469,
        "lng": 120.778132,
        "ele": 13,
        "distanceKm": 40.59739271586846,
        "gradePct": 0.6706151239512137,
        "smoothedEle": 12.958742346202747,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.950166,
        "lng": 120.778436,
        "ele": 14.25,
        "distanceKm": 40.643416179668996,
        "gradePct": 0.8904914854574463,
        "smoothedEle": 13.530436761182564,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.949868,
        "lng": 120.778662,
        "ele": 15.5,
        "distanceKm": 40.68392896287818,
        "gradePct": 1.0455522270381803,
        "smoothedEle": 14.043086378138021,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.949385,
        "lng": 120.778891,
        "ele": 15.75,
        "distanceKm": 40.7425998273098,
        "gradePct": 1.1985121590089107,
        "smoothedEle": 14.76945047425912,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.948959,
        "lng": 120.779065,
        "ele": 15.75,
        "distanceKm": 40.7932542827779,
        "gradePct": 1.2400471115524498,
        "smoothedEle": 15.390295993693545,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.948609,
        "lng": 120.779235,
        "ele": 16.5,
        "distanceKm": 40.83593963792106,
        "gradePct": 1.1812353690597615,
        "smoothedEle": 15.800035368269437,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.948111,
        "lng": 120.779574,
        "ele": 16.25,
        "distanceKm": 40.90142872670641,
        "gradePct": 0.9961966384608134,
        "smoothedEle": 16.252132337077697,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.947766,
        "lng": 120.779931,
        "ele": 15.75,
        "distanceKm": 40.9546015396063,
        "gradePct": 0.7577496631764554,
        "smoothedEle": 16.432048594508135,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.947425,
        "lng": 120.780378,
        "ele": 17,
        "distanceKm": 41.0142934793819,
        "gradePct": 0.35723031463324456,
        "smoothedEle": 16.306713177595427,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.947125,
        "lng": 120.78082,
        "ele": 17,
        "distanceKm": 41.070781599728726,
        "gradePct": 0.04983890624816674,
        "smoothedEle": 16.14024096352675,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.946895,
        "lng": 120.781109,
        "ele": 17,
        "distanceKm": 41.110056309160896,
        "gradePct": -0.13491218673252434,
        "smoothedEle": 16.01150036967935,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946507,
        "lng": 120.78151,
        "ele": 17.25,
        "distanceKm": 41.16982132077341,
        "gradePct": -0.13141054999562296,
        "smoothedEle": 16.13727045601101,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946151,
        "lng": 120.781878,
        "ele": 14.75,
        "distanceKm": 41.22466247878435,
        "gradePct": -0.007493259251944445,
        "smoothedEle": 16.261168901502778,
        "gradeBand": "descent"
      },
      {
        "lat": 21.94591,
        "lng": 120.782141,
        "ele": 14.5,
        "distanceKm": 41.26279261955801,
        "gradePct": 0.003728162064520593,
        "smoothedEle": 16.171241055956173,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.945666,
        "lng": 120.782572,
        "ele": 14.25,
        "distanceKm": 41.314870763368496,
        "gradePct": -0.027470653186296767,
        "smoothedEle": 15.966690648744322,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945583,
        "lng": 120.782973,
        "ele": 15.25,
        "distanceKm": 41.357246256355936,
        "gradePct": -0.16740321738441052,
        "smoothedEle": 15.776000930300846,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945621,
        "lng": 120.783344,
        "ele": 18.25,
        "distanceKm": 41.39574296843363,
        "gradePct": -0.2979848041379533,
        "smoothedEle": 15.59986364921798,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945736,
        "lng": 120.783689,
        "ele": 17.25,
        "distanceKm": 41.43355346897451,
        "gradePct": -0.4146944211517377,
        "smoothedEle": 15.410811146513588,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946036,
        "lng": 120.784215,
        "ele": 15.5,
        "distanceKm": 41.49723936507527,
        "gradePct": -0.3923895400410566,
        "smoothedEle": 15.251163455091167,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946182,
        "lng": 120.784561,
        "ele": 15,
        "distanceKm": 41.536444168353746,
        "gradePct": -0.36803064052748635,
        "smoothedEle": 15.133549045255727,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946192,
        "lng": 120.785101,
        "ele": 14.75,
        "distanceKm": 41.592149441877595,
        "gradePct": -0.353967824293853,
        "smoothedEle": 14.908369768327262,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946084,
        "lng": 120.785529,
        "ele": 14.75,
        "distanceKm": 41.63789662747672,
        "gradePct": -0.40023328113775014,
        "smoothedEle": 14.599457162205695,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945976,
        "lng": 120.785957,
        "ele": 14.75,
        "distanceKm": 41.68364384542681,
        "gradePct": -0.5755078307195844,
        "smoothedEle": 14.134229018200209,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945908,
        "lng": 120.786306,
        "ele": 13.75,
        "distanceKm": 41.72042444912434,
        "gradePct": -0.6780743911964119,
        "smoothedEle": 13.82545942055112,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945906,
        "lng": 120.786793,
        "ele": 13,
        "distanceKm": 41.77065293468858,
        "gradePct": -0.7085688262258666,
        "smoothedEle": 13.57812816070399,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945956,
        "lng": 120.787133,
        "ele": 12.25,
        "distanceKm": 41.80615770774951,
        "gradePct": -0.6888342172745759,
        "smoothedEle": 13.436109068460247,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9460505,
        "lng": 120.787504,
        "ele": 12.5,
        "distanceKm": 41.84583832218767,
        "gradePct": -0.6127682070998086,
        "smoothedEle": 13.293157369243627,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946145,
        "lng": 120.787875,
        "ele": 12.75,
        "distanceKm": 41.88551891210467,
        "gradePct": -0.4775991952620581,
        "smoothedEle": 13.163289624933174,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946232,
        "lng": 120.788284,
        "ele": 12.75,
        "distanceKm": 41.928797155974884,
        "gradePct": -0.37312343879893284,
        "smoothedEle": 13.037984301440224,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946316,
        "lng": 120.788904,
        "ele": 13,
        "distanceKm": 41.99342084915133,
        "gradePct": -0.26607434250234685,
        "smoothedEle": 12.9549078178483,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946329,
        "lng": 120.789454,
        "ele": 13,
        "distanceKm": 42.05016475842458,
        "gradePct": -0.14917572067848772,
        "smoothedEle": 12.980646246385804,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946314,
        "lng": 120.789851,
        "ele": 13,
        "distanceKm": 42.09114420926615,
        "gradePct": -0.07071483848838589,
        "smoothedEle": 13.005572787999629,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946264156128922,
        "lng": 120.79026968851707,
        "ele": 13.199375484315645,
        "distanceKm": 42.13468083248899,
        "gradePct": -0.022058965958704175,
        "smoothedEle": 12.986302655173505,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946214312257844,
        "lng": 120.79068837703413,
        "ele": 13.398750968631292,
        "distanceKm": 42.178217470723936,
        "gradePct": -0.007775682910262983,
        "smoothedEle": 12.958901036318503,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946164,
        "lng": 120.791107,
        "ele": 13.5,
        "distanceKm": 42.22175408024067,
        "gradePct": -0.011196260016489941,
        "smoothedEle": 12.945366947498423,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946107542944002,
        "lng": 120.79163073684022,
        "ele": 13.056155220147726,
        "distanceKm": 42.27613450573512,
        "gradePct": -0.08141048999688899,
        "smoothedEle": 12.833621866242504,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946051085888005,
        "lng": 120.79215447368044,
        "ele": 12.612310440295394,
        "distanceKm": 42.33051495253273,
        "gradePct": -0.18602323668870116,
        "smoothedEle": 12.61610007905207,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945992152447978,
        "lng": 120.79267786250355,
        "ele": 12.25,
        "distanceKm": 42.38489226447228,
        "gradePct": -0.2726786308685579,
        "smoothedEle": 12.411468802449914,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945939,
        "lng": 120.793202,
        "ele": 12.75,
        "distanceKm": 42.439272638215705,
        "gradePct": -0.3442808297469422,
        "smoothedEle": 12.220806807547511,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945874,
        "lng": 120.793721,
        "ele": 12,
        "distanceKm": 42.493286788957235,
        "gradePct": -0.3385359565590203,
        "smoothedEle": 12.087940820236014,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945868,
        "lng": 120.794329,
        "ele": 11,
        "distanceKm": 42.555997992245985,
        "gradePct": -0.2620196505087014,
        "smoothedEle": 11.996163670174248,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945939192060656,
        "lng": 120.79484327985404,
        "ele": 11.207781486936174,
        "distanceKm": 42.609627039508446,
        "gradePct": -0.1579914298467808,
        "smoothedEle": 12.008763818077544,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946014,
        "lng": 120.795357,
        "ele": 11.5,
        "distanceKm": 42.66325985288452,
        "gradePct": -0.01907591452474628,
        "smoothedEle": 12.123650348857986,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946059,
        "lng": 120.795753,
        "ele": 12.25,
        "distanceKm": 42.7044076660192,
        "gradePct": 0.07894668814530424,
        "smoothedEle": 12.229558916362812,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.946105,
        "lng": 120.796277,
        "ele": 12.25,
        "distanceKm": 42.758693195232105,
        "gradePct": 0.23776110429822345,
        "smoothedEle": 12.472319116875571,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.945989,
        "lng": 120.796712,
        "ele": 12.5,
        "distanceKm": 42.80537536033479,
        "gradePct": 0.4228502944423058,
        "smoothedEle": 12.85346547468274,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.945725462569158,
        "lng": 120.7972134794997,
        "ele": 12.973988184969201,
        "distanceKm": 42.86482139153191,
        "gradePct": 0.6965576919241617,
        "smoothedEle": 13.520784909149725,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.945462,
        "lng": 120.797715,
        "ele": 14,
        "distanceKm": 42.92426708261146,
        "gradePct": 0.9217180842797472,
        "smoothedEle": 14.161804681584716,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.945252,
        "lng": 120.798123,
        "ele": 14.25,
        "distanceKm": 42.97239211075441,
        "gradePct": 1.0059944496418973,
        "smoothedEle": 14.596155693869912,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.945159,
        "lng": 120.798498,
        "ele": 14.75,
        "distanceKm": 43.0124274988986,
        "gradePct": 1.0245364353547486,
        "smoothedEle": 14.981703077224033,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.945151628666157,
        "lng": 120.7989050614356,
        "ele": 16.183314914077403,
        "distanceKm": 43.05441904575357,
        "gradePct": 1.011256115495249,
        "smoothedEle": 15.426524205729923,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.94514,
        "lng": 120.799312,
        "ele": 17,
        "distanceKm": 43.09640983589295,
        "gradePct": 1.0226226521874648,
        "smoothedEle": 15.906657381754425,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.94495,
        "lng": 120.79979,
        "ele": 16.75,
        "distanceKm": 43.15004609426219,
        "gradePct": 1.0706594369296054,
        "smoothedEle": 16.535791259511452,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.94461276321068,
        "lng": 120.80019110115772,
        "ele": 16.602298871753327,
        "distanceKm": 43.2058812822259,
        "gradePct": 1.1206577333683798,
        "smoothedEle": 17.159977398963306,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.94426,
        "lng": 120.800577,
        "ele": 17.25,
        "distanceKm": 43.261763016936115,
        "gradePct": 1.1224131316312818,
        "smoothedEle": 17.755323268666032,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.944046,
        "lng": 120.800854,
        "ele": 18,
        "distanceKm": 43.298944349315974,
        "gradePct": 1.0488657394327243,
        "smoothedEle": 18.03411778479422,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.943803333333335,
        "lng": 120.80120666666667,
        "ele": 18.583333333333332,
        "distanceKm": 43.34423392605417,
        "gradePct": 0.8021912713487567,
        "smoothedEle": 18.071999174931424,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.943560666666666,
        "lng": 120.80155933333333,
        "ele": 19.166666666666668,
        "distanceKm": 43.38952355263927,
        "gradePct": 0.44961532447601976,
        "smoothedEle": 17.876343649079345,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.943318,
        "lng": 120.801912,
        "ele": 19.75,
        "distanceKm": 43.434813229072645,
        "gradePct": 0.11261206745269642,
        "smoothedEle": 17.693433108049195,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.94295,
        "lng": 120.802473,
        "ele": 19.75,
        "distanceKm": 43.505681835292805,
        "gradePct": -0.3873441948620398,
        "smoothedEle": 17.265064805096316,
        "gradeBand": "descent"
      },
      {
        "lat": 21.942592,
        "lng": 120.803018,
        "ele": 17,
        "distanceKm": 43.57456118137328,
        "gradePct": -0.647770717411635,
        "smoothedEle": 16.645441091605637,
        "gradeBand": "descent"
      },
      {
        "lat": 21.942458,
        "lng": 120.803346,
        "ele": 14.75,
        "distanceKm": 43.61152708505649,
        "gradePct": -0.8004483638406896,
        "smoothedEle": 16.186581680222556,
        "gradeBand": "descent"
      },
      {
        "lat": 21.942322,
        "lng": 120.803754,
        "ele": 14.75,
        "distanceKm": 43.65624302751759,
        "gradePct": -1.0139105236102617,
        "smoothedEle": 15.536078733138186,
        "gradeBand": "descent"
      },
      {
        "lat": 21.942151241754523,
        "lng": 120.80423204471845,
        "ele": 13.873083183504331,
        "distanceKm": 43.70907834143071,
        "gradePct": -1.2288154822618957,
        "smoothedEle": 14.776879605292688,
        "gradeBand": "descent"
      },
      {
        "lat": 21.941979001024112,
        "lng": 120.80470947244648,
        "ele": 13.545629323407999,
        "distanceKm": 43.761913861397915,
        "gradePct": -1.2756222448826298,
        "smoothedEle": 14.207969159432349,
        "gradeBand": "descent"
      },
      {
        "lat": 21.941807,
        "lng": 120.805187,
        "ele": 13,
        "distanceKm": 43.81474937858133,
        "gradePct": -1.1307805882437059,
        "smoothedEle": 13.87814434908167,
        "gradeBand": "descent"
      },
      {
        "lat": 21.941567,
        "lng": 120.805672,
        "ele": 11.75,
        "distanceKm": 43.871446001995196,
        "gradePct": -0.7562840707062567,
        "smoothedEle": 13.8050566050032,
        "gradeBand": "descent"
      },
      {
        "lat": 21.941224,
        "lng": 120.806132,
        "ele": 12.5,
        "distanceKm": 43.932320138262135,
        "gradePct": -0.3523542617540233,
        "smoothedEle": 13.821913281612197,
        "gradeBand": "descent"
      },
      {
        "lat": 21.940884,
        "lng": 120.806591,
        "ele": 14.5,
        "distanceKm": 43.99290528770164,
        "gradePct": -0.05475307827257503,
        "smoothedEle": 13.904999555418001,
        "gradeBand": "descent"
      },
      {
        "lat": 21.940529,
        "lng": 120.806951,
        "ele": 15.5,
        "distanceKm": 44.047098635751404,
        "gradePct": 0.08061118938334096,
        "smoothedEle": 13.9976652280621,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.940098000000003,
        "lng": 120.807237,
        "ele": 15.16666666666668,
        "distanceKm": 44.1033745181941,
        "gradePct": 0.16251024353362756,
        "smoothedEle": 14.138918427737384,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.939667,
        "lng": 120.807523,
        "ele": 14.83333333333332,
        "distanceKm": 44.1596504474898,
        "gradePct": 0.29535827139831317,
        "smoothedEle": 14.450110520201363,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.939236,
        "lng": 120.807809,
        "ele": 14.5,
        "distanceKm": 44.21592642363706,
        "gradePct": 0.42497039990853497,
        "smoothedEle": 14.794304393871847,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.938867442652466,
        "lng": 120.80802211923337,
        "ele": 14.395607512566786,
        "distanceKm": 44.26243124328332,
        "gradePct": 0.49712866838886427,
        "smoothedEle": 15.030407609929147,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.938492,
        "lng": 120.808221,
        "ele": 14,
        "distanceKm": 44.30894609557026,
        "gradePct": 0.5581548441707219,
        "smoothedEle": 15.286037573047587,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.938125151512107,
        "lng": 120.80840481554301,
        "ele": 14.068590476907103,
        "distanceKm": 44.35392855532036,
        "gradePct": 0.597321583634137,
        "smoothedEle": 15.613113026545028,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.937766,
        "lng": 120.808606,
        "ele": 15,
        "distanceKm": 44.398933797339026,
        "gradePct": 0.7249535303809637,
        "smoothedEle": 16.140281531604987,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.93745237777323,
        "lng": 120.80890866342132,
        "ele": 15.87254511069524,
        "distanceKm": 44.445738645595554,
        "gradePct": 0.9065704301862846,
        "smoothedEle": 16.758800781171654,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.937174130617443,
        "lng": 120.80925103567313,
        "ele": 17.127166554618313,
        "distanceKm": 44.492688772509524,
        "gradePct": 1.0209828745304088,
        "smoothedEle": 17.238658549630497,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.936896675099753,
        "lng": 120.80959415137843,
        "ele": 18.168644531987223,
        "distanceKm": 44.53963876503315,
        "gradePct": 1.0063874179050545,
        "smoothedEle": 17.5219842593833,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.93662,
        "lng": 120.809938,
        "ele": 19,
        "distanceKm": 44.58658891024734,
        "gradePct": 0.8919117765510014,
        "smoothedEle": 17.779503358744545,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.936362,
        "lng": 120.810322,
        "ele": 21.25,
        "distanceKm": 44.6354946370594,
        "gradePct": 0.7191653807554137,
        "smoothedEle": 18.06175846257742,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.936174706726067,
        "lng": 120.81070019873628,
        "ele": 21.414642372038305,
        "distanceKm": 44.67971498319325,
        "gradePct": 0.6347886403184544,
        "smoothedEle": 18.375636112248102,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.935999353363034,
        "lng": 120.81108509936814,
        "ele": 19.33232118601898,
        "distanceKm": 44.72394523162543,
        "gradePct": 0.679161763280658,
        "smoothedEle": 18.78560315976102,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.935824,
        "lng": 120.81147,
        "ele": 17.25,
        "distanceKm": 44.76817552397884,
        "gradePct": 0.798634086983774,
        "smoothedEle": 19.275775068773104,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.935696,
        "lng": 120.811824,
        "ele": 16.75,
        "distanceKm": 44.80736479129935,
        "gradePct": 0.940032354868367,
        "smoothedEle": 19.779474239921882,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.93563,
        "lng": 120.81224,
        "ele": 16.75,
        "distanceKm": 44.850896190460986,
        "gradePct": 1.091931086964943,
        "smoothedEle": 20.354941431245884,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.935674,
        "lng": 120.812622,
        "ele": 18,
        "distanceKm": 44.89060018134639,
        "gradePct": 1.0840179412830089,
        "smoothedEle": 20.6445661273732,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.935761,
        "lng": 120.812971,
        "ele": 19.5,
        "distanceKm": 44.927874999839084,
        "gradePct": 0.9911301810766419,
        "smoothedEle": 20.81141426247624,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9358675,
        "lng": 120.8134595,
        "ele": 22,
        "distanceKm": 44.9796342134051,
        "gradePct": 0.8062579774262942,
        "smoothedEle": 21.03556941796905,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.935974,
        "lng": 120.813948,
        "ele": 24.5,
        "distanceKm": 45.03139339025513,
        "gradePct": 0.6308436709552544,
        "smoothedEle": 21.35880977644224,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.936005,
        "lng": 120.814378,
        "ele": 25.5,
        "distanceKm": 45.07587938506903,
        "gradePct": 0.5372317855702095,
        "smoothedEle": 21.61164739125667,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9359935,
        "lng": 120.8149075,
        "ele": 24.24999999999992,
        "distanceKm": 45.13050949701227,
        "gradePct": 0.4531691470912864,
        "smoothedEle": 21.729161851406843,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.935982,
        "lng": 120.815437,
        "ele": 23,
        "distanceKm": 45.185139613368975,
        "gradePct": 0.22815655288780187,
        "smoothedEle": 21.526264203789857,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.935980333333333,
        "lng": 120.81586733333333,
        "ele": 21.75,
        "distanceKm": 45.229526629007495,
        "gradePct": -0.129197253198086,
        "smoothedEle": 21.088757191003975,
        "gradeBand": "descent"
      },
      {
        "lat": 21.935978666666667,
        "lng": 120.81629766666667,
        "ele": 20.5,
        "distanceKm": 45.27391364516746,
        "gradePct": -0.6213444171906578,
        "smoothedEle": 20.357786209485152,
        "gradeBand": "descent"
      },
      {
        "lat": 21.935977,
        "lng": 120.816728,
        "ele": 19.25,
        "distanceKm": 45.31830066184594,
        "gradePct": -1.189782470311422,
        "smoothedEle": 19.323334568961844,
        "gradeBand": "descent"
      },
      {
        "lat": 21.935964,
        "lng": 120.817207,
        "ele": 17.5,
        "distanceKm": 45.36772814829599,
        "gradePct": -1.7993938131547254,
        "smoothedEle": 17.992143203518783,
        "gradeBand": "descent"
      },
      {
        "lat": 21.936033000000002,
        "lng": 120.81772699999999,
        "ele": 16.625,
        "distanceKm": 45.421909406520165,
        "gradePct": -2.3379338442988993,
        "smoothedEle": 16.4879697529753,
        "gradeBand": "descent"
      },
      {
        "lat": 21.936102,
        "lng": 120.818247,
        "ele": 15.75,
        "distanceKm": 45.47609063899497,
        "gradePct": -2.7007147449034594,
        "smoothedEle": 14.905621279344702,
        "gradeBand": "descent"
      },
      {
        "lat": 21.936169000000003,
        "lng": 120.8187025,
        "ele": 13.999999999999867,
        "distanceKm": 45.52366004400707,
        "gradePct": -2.840437482317695,
        "smoothedEle": 13.498119607102002,
        "gradeBand": "descent"
      },
      {
        "lat": 21.936236,
        "lng": 120.819158,
        "ele": 12.25,
        "distanceKm": 45.5712294271662,
        "gradePct": -2.8666029653682417,
        "smoothedEle": 12.161735197892613,
        "gradeBand": "descent"
      },
      {
        "lat": 21.936263,
        "lng": 120.819499,
        "ele": 11.25,
        "distanceKm": 45.60652962677067,
        "gradePct": -2.831703508311335,
        "smoothedEle": 11.251534296862998,
        "gradeBand": "descent"
      },
      {
        "lat": 21.936253,
        "lng": 120.819922,
        "ele": 9.75,
        "distanceKm": 45.650173942910484,
        "gradePct": -2.669979225528305,
        "smoothedEle": 10.32255303948626,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9361725,
        "lng": 120.820361,
        "ele": 8.125000000000128,
        "distanceKm": 45.69633069308585,
        "gradePct": -2.420615613637528,
        "smoothedEle": 9.465519623231067,
        "gradeBand": "descent"
      },
      {
        "lat": 21.936092,
        "lng": 120.8208,
        "ele": 6.5,
        "distanceKm": 45.74248746839607,
        "gradePct": -2.1409050594436323,
        "smoothedEle": 8.68738363826505,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9360145,
        "lng": 120.8211725,
        "ele": 5.999999999999954,
        "distanceKm": 45.78186344627309,
        "gradePct": -1.8723379557410542,
        "smoothedEle": 8.142865545833704,
        "gradeBand": "descent"
      },
      {
        "lat": 21.935937,
        "lng": 120.821545,
        "ele": 5.5,
        "distanceKm": 45.82123944457247,
        "gradePct": -1.6120863675131574,
        "smoothedEle": 7.71425904939222,
        "gradeBand": "descent"
      },
      {
        "lat": 21.935779,
        "lng": 120.822101,
        "ele": 6.75,
        "distanceKm": 45.88121875925339,
        "gradePct": -1.2541906931304307,
        "smoothedEle": 7.237734947731807,
        "gradeBand": "descent"
      },
      {
        "lat": 21.935431,
        "lng": 120.822513,
        "ele": 7.5,
        "distanceKm": 45.938692760640656,
        "gradePct": -0.861036751177813,
        "smoothedEle": 7.029283380077224,
        "gradeBand": "descent"
      },
      {
        "lat": 21.935048398663646,
        "lng": 120.82271375974503,
        "ele": 7.302935898964145,
        "distanceKm": 45.98600805539891,
        "gradePct": -0.5368328386408381,
        "smoothedEle": 7.024085929267742,
        "gradeBand": "descent"
      },
      {
        "lat": 21.934659,
        "lng": 120.822899,
        "ele": 7.5,
        "distanceKm": 46.03333551640656,
        "gradePct": -0.2762316766534419,
        "smoothedEle": 7.065694735362093,
        "gradeBand": "descent"
      },
      {
        "lat": 21.934116,
        "lng": 120.823228,
        "ele": 7.5,
        "distanceKm": 46.102597336166326,
        "gradePct": -0.0129535086773032,
        "smoothedEle": 7.134290300072031,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9338275,
        "lng": 120.8234215,
        "ele": 7.5,
        "distanceKm": 46.14037915386502,
        "gradePct": 0.03378766664185747,
        "smoothedEle": 7.096673467852614,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.933539,
        "lng": 120.823615,
        "ele": 7.5,
        "distanceKm": 46.17816099294279,
        "gradePct": 0.012763396008971735,
        "smoothedEle": 7.050474698820075,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.933239,
        "lng": 120.823839,
        "ele": 7.5,
        "distanceKm": 46.218739621557006,
        "gradePct": -0.005822016312161089,
        "smoothedEle": 7.041218453856501,
        "gradeBand": "descent"
      },
      {
        "lat": 21.932794882842348,
        "lng": 120.82414630381524,
        "ele": 6.447589673808766,
        "distanceKm": 46.27742072436321,
        "gradePct": 0.03821884029982926,
        "smoothedEle": 7.185793552005105,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.932351,
        "lng": 120.824454,
        "ele": 6,
        "distanceKm": 46.336101835254404,
        "gradePct": 0.22380955688262277,
        "smoothedEle": 7.548551222051945,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.931824,
        "lng": 120.824833,
        "ele": 6.5,
        "distanceKm": 46.40654468381839,
        "gradePct": 0.6101163120184225,
        "smoothedEle": 8.264232821261217,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.93150535367471,
        "lng": 120.82514895322223,
        "ele": 7.409948134964919,
        "distanceKm": 46.454685331065214,
        "gradePct": 0.883288108858009,
        "smoothedEle": 8.896355626149909,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.931209176837353,
        "lng": 120.8254909766111,
        "ele": 8.829974067482567,
        "distanceKm": 46.502947343922656,
        "gradePct": 1.1383474285983521,
        "smoothedEle": 9.620290074762085,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.930913,
        "lng": 120.825833,
        "ele": 10.25,
        "distanceKm": 46.551209410454945,
        "gradePct": 1.367590801941888,
        "smoothedEle": 10.437221984879617,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.930579,
        "lng": 120.826111,
        "ele": 12,
        "distanceKm": 46.59813051139942,
        "gradePct": 1.5406228326524707,
        "smoothedEle": 11.259992614038438,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9302725,
        "lng": 120.826384,
        "ele": 13.125000000000092,
        "distanceKm": 46.642340223229894,
        "gradePct": 1.6422759440582204,
        "smoothedEle": 12.018806989287846,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.929966,
        "lng": 120.826657,
        "ele": 14.25,
        "distanceKm": 46.68654997368994,
        "gradePct": 1.7589364501012543,
        "smoothedEle": 12.89220097555166,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.929653,
        "lng": 120.827004,
        "ele": 15,
        "distanceKm": 46.736474376720636,
        "gradePct": 1.8264628623540586,
        "smoothedEle": 13.840727821068015,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9293335,
        "lng": 120.8274825,
        "ele": 14.875,
        "distanceKm": 46.79728778634438,
        "gradePct": 1.7617750789632538,
        "smoothedEle": 14.768765424251715,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.929014,
        "lng": 120.827961,
        "ele": 14.75,
        "distanceKm": 46.858101285899814,
        "gradePct": 1.4661667004963834,
        "smoothedEle": 15.262511008974197,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.92869,
        "lng": 120.828485,
        "ele": 16.5,
        "distanceKm": 46.92305837089736,
        "gradePct": 0.8438658065939236,
        "smoothedEle": 15.273565215988281,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.928459,
        "lng": 120.828823,
        "ele": 17.25,
        "distanceKm": 46.96636338475084,
        "gradePct": 0.4003438886918179,
        "smoothedEle": 15.097534134569054,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.928248,
        "lng": 120.829116,
        "ele": 17.25,
        "distanceKm": 47.00462439472792,
        "gradePct": 0.03461218251943294,
        "smoothedEle": 14.89755580707761,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.927963,
        "lng": 120.829448,
        "ele": 16.25,
        "distanceKm": 47.05128357915468,
        "gradePct": -0.273849944656369,
        "smoothedEle": 14.659458070947714,
        "gradeBand": "descent"
      },
      {
        "lat": 21.927673,
        "lng": 120.829761,
        "ele": 14.5,
        "distanceKm": 47.09691512262293,
        "gradePct": -0.444448577506109,
        "smoothedEle": 14.380219079337527,
        "gradeBand": "descent"
      },
      {
        "lat": 21.927186,
        "lng": 120.830254,
        "ele": 12.25,
        "distanceKm": 47.171201798314755,
        "gradePct": -0.7101248705360975,
        "smoothedEle": 13.65199551971117,
        "gradeBand": "descent"
      },
      {
        "lat": 21.92682358710192,
        "lng": 120.83065358345172,
        "ele": 12.386656447238925,
        "distanceKm": 47.2288460277249,
        "gradePct": -1.0024094936170007,
        "smoothedEle": 12.769135945700526,
        "gradeBand": "descent"
      },
      {
        "lat": 21.926461208989593,
        "lng": 120.83105320328507,
        "ele": 12.354266484892205,
        "distanceKm": 47.28649031173765,
        "gradePct": -1.324185745511129,
        "smoothedEle": 11.795641478639334,
        "gradeBand": "descent"
      },
      {
        "lat": 21.926099,
        "lng": 120.831453,
        "ele": 11.5,
        "distanceKm": 47.344134578671934,
        "gradePct": -1.413326265976012,
        "smoothedEle": 11.090679763889137,
        "gradeBand": "descent"
      },
      {
        "lat": 21.925692,
        "lng": 120.831864,
        "ele": 10,
        "distanceKm": 47.40614683600897,
        "gradePct": -1.1684590948403886,
        "smoothedEle": 10.779870919810381,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9254085,
        "lng": 120.832179,
        "ele": 9.24999999999994,
        "distanceKm": 47.451418727170605,
        "gradePct": -0.7565126926733318,
        "smoothedEle": 10.87490367413133,
        "gradeBand": "descent"
      },
      {
        "lat": 21.925125,
        "lng": 120.832494,
        "ele": 8.5,
        "distanceKm": 47.49669066477932,
        "gradePct": -0.25537102312527965,
        "smoothedEle": 11.160154010966206,
        "gradeBand": "descent"
      },
      {
        "lat": 21.924864,
        "lng": 120.832804,
        "ele": 9,
        "distanceKm": 47.539874251557436,
        "gradePct": 0.27592028019904513,
        "smoothedEle": 11.694622079895638,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.924595,
        "lng": 120.833165,
        "ele": 10,
        "distanceKm": 47.5876380472305,
        "gradePct": 0.7786599674819406,
        "smoothedEle": 12.429957922005364,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.92436,
        "lng": 120.83353199999999,
        "ele": 11.625,
        "distanceKm": 47.63363791277266,
        "gradePct": 1.2085932072058028,
        "smoothedEle": 13.254765388316214,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.924125,
        "lng": 120.833899,
        "ele": 13.25,
        "distanceKm": 47.6796378297491,
        "gradePct": 1.588258226448289,
        "smoothedEle": 14.22922361724442,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923888,
        "lng": 120.834189,
        "ele": 15,
        "distanceKm": 47.7195047347297,
        "gradePct": 1.8595417768296971,
        "smoothedEle": 15.161599286301344,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.92362,
        "lng": 120.834439,
        "ele": 18.25,
        "distanceKm": 47.758914107354045,
        "gradePct": 2.0869843238793764,
        "smoothedEle": 16.16171417395001,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923295341056704,
        "lng": 120.83460008642042,
        "ele": 19.421431668511072,
        "distanceKm": 47.798655252212505,
        "gradePct": 2.2685537915820295,
        "smoothedEle": 17.16461114622586,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.922959,
        "lng": 120.834732,
        "ele": 20,
        "distanceKm": 47.8384532721615,
        "gradePct": 2.376696928910815,
        "smoothedEle": 18.1101673994157,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.922584,
        "lng": 120.83487375,
        "ele": 20.374999999999968,
        "distanceKm": 47.882640857924045,
        "gradePct": 2.3501551495992845,
        "smoothedEle": 18.999766366270123,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.922209,
        "lng": 120.8350155,
        "ele": 20.75,
        "distanceKm": 47.926828456432204,
        "gradePct": 2.177922441654018,
        "smoothedEle": 19.703302573839405,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.921833999999997,
        "lng": 120.83515725000001,
        "ele": 21.125000000000032,
        "distanceKm": 47.97101606768592,
        "gradePct": 1.8434666141076055,
        "smoothedEle": 20.15404925756393,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.921459,
        "lng": 120.835299,
        "ele": 21.5,
        "distanceKm": 48.01520369168367,
        "gradePct": 1.4271934047466701,
        "smoothedEle": 20.41217029048733,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.921039,
        "lng": 120.835423,
        "ele": 21.5,
        "distanceKm": 48.06362566304238,
        "gradePct": 1.0008672342988074,
        "smoothedEle": 20.618680695922627,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9206045,
        "lng": 120.835536,
        "ele": 20.875,
        "distanceKm": 48.11332620890798,
        "gradePct": 0.6845437302040773,
        "smoothedEle": 20.857412974222377,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.92017,
        "lng": 120.835649,
        "ele": 20.25,
        "distanceKm": 48.16302676311663,
        "gradePct": 0.5278772933469394,
        "smoothedEle": 21.128306962265345,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.919804,
        "lng": 120.835738,
        "ele": 19,
        "distanceKm": 48.20474687244344,
        "gradePct": 0.477086172608065,
        "smoothedEle": 21.30525935628747,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.919432,
        "lng": 120.835961,
        "ele": 20,
        "distanceKm": 48.25207771081083,
        "gradePct": 0.4014387772885413,
        "smoothedEle": 21.372308452724678,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.919007,
        "lng": 120.836376,
        "ele": 22,
        "distanceKm": 48.31584303128224,
        "gradePct": 0.1977307217668763,
        "smoothedEle": 21.26659241468826,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.918691000000003,
        "lng": 120.836672,
        "ele": 22.75,
        "distanceKm": 48.36239419990852,
        "gradePct": -0.0172492270429456,
        "smoothedEle": 21.09036070819284,
        "gradeBand": "descent"
      },
      {
        "lat": 21.918375,
        "lng": 120.836968,
        "ele": 23.5,
        "distanceKm": 48.408945412983776,
        "gradePct": -0.22616525245223543,
        "smoothedEle": 20.85887652438636,
        "gradeBand": "descent"
      },
      {
        "lat": 21.918038,
        "lng": 120.83724566666666,
        "ele": 22.41666666666661,
        "distanceKm": 48.45611164006893,
        "gradePct": -0.5203799453289049,
        "smoothedEle": 20.32486074154415,
        "gradeBand": "descent"
      },
      {
        "lat": 21.917701,
        "lng": 120.83752333333334,
        "ele": 21.33333333333339,
        "distanceKm": 48.503277908321316,
        "gradePct": -0.7873433891749173,
        "smoothedEle": 19.71273725777541,
        "gradeBand": "descent"
      },
      {
        "lat": 21.917364,
        "lng": 120.837801,
        "ele": 20.25,
        "distanceKm": 48.550444217739226,
        "gradePct": -1.0915704734208327,
        "smoothedEle": 18.95245956547276,
        "gradeBand": "descent"
      },
      {
        "lat": 21.916944,
        "lng": 120.83834,
        "ele": 18.5,
        "distanceKm": 48.62305754502274,
        "gradePct": -1.6151891731050052,
        "smoothedEle": 17.46872069110379,
        "gradeBand": "descent"
      },
      {
        "lat": 21.916635,
        "lng": 120.83886,
        "ele": 14,
        "distanceKm": 48.68676059640851,
        "gradePct": -2.0411253247369134,
        "smoothedEle": 15.844848161275383,
        "gradeBand": "descent"
      },
      {
        "lat": 21.916499,
        "lng": 120.839243,
        "ele": 13,
        "distanceKm": 48.729065652377564,
        "gradePct": -2.2090898673115835,
        "smoothedEle": 14.878882716648693,
        "gradeBand": "descent"
      },
      {
        "lat": 21.916362,
        "lng": 120.8397255,
        "ele": 12.625,
        "distanceKm": 48.78111885328456,
        "gradePct": -2.306636270450668,
        "smoothedEle": 13.712399203129078,
        "gradeBand": "descent"
      },
      {
        "lat": 21.916225,
        "lng": 120.840208,
        "ele": 12.25,
        "distanceKm": 48.83317209997827,
        "gradePct": -2.3276290700981335,
        "smoothedEle": 12.55562956510184,
        "gradeBand": "descent"
      },
      {
        "lat": 21.916009,
        "lng": 120.840817,
        "ele": 10.5,
        "distanceKm": 48.900430680142314,
        "gradePct": -2.1838418028514015,
        "smoothedEle": 11.165030976984092,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915777,
        "lng": 120.841385,
        "ele": 11,
        "distanceKm": 48.964452654030936,
        "gradePct": -1.914387202713946,
        "smoothedEle": 10.257105127894937,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915522,
        "lng": 120.84198,
        "ele": 9.5,
        "distanceKm": 49.032065401612904,
        "gradePct": -1.6187362364436402,
        "smoothedEle": 9.342751044538877,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915439918444775,
        "lng": 120.84238003942181,
        "ele": 8.872377937782435,
        "distanceKm": 49.07433056456177,
        "gradePct": -1.4132663979816553,
        "smoothedEle": 8.878128720165282,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915381,
        "lng": 120.842785,
        "ele": 8.25,
        "distanceKm": 49.11661675654553,
        "gradePct": -1.1969935514006629,
        "smoothedEle": 8.541501480076336,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915359,
        "lng": 120.84327033333334,
        "ele": 7.416666666666626,
        "distanceKm": 49.16674332415886,
        "gradePct": -0.8740609128550131,
        "smoothedEle": 8.478005658767186,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915337,
        "lng": 120.84375566666667,
        "ele": 6.583333333333374,
        "distanceKm": 49.21686989949705,
        "gradePct": -0.508520306457842,
        "smoothedEle": 8.531205251833477,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915315,
        "lng": 120.844241,
        "ele": 5.75,
        "distanceKm": 49.26699648256014,
        "gradePct": -0.1231215146069218,
        "smoothedEle": 8.712509495262054,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915298,
        "lng": 120.84473399999999,
        "ele": 7.374999999999884,
        "distanceKm": 49.31788935411691,
        "gradePct": 0.26930912216889585,
        "smoothedEle": 9.078507712424534,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.915281,
        "lng": 120.845227,
        "ele": 9,
        "distanceKm": 49.3687822317417,
        "gradePct": 0.5193735457950185,
        "smoothedEle": 9.518916653495939,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9152,
        "lng": 120.845725,
        "ele": 11,
        "distanceKm": 49.42093936715979,
        "gradePct": 0.6881745977693416,
        "smoothedEle": 9.922273419036799,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.9150825,
        "lng": 120.8461105,
        "ele": 11.749999999999934,
        "distanceKm": 49.46279876498294,
        "gradePct": 0.7399420438875338,
        "smoothedEle": 10.17721074066181,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.914965,
        "lng": 120.846496,
        "ele": 12.5,
        "distanceKm": 49.50465819397829,
        "gradePct": 0.7072556898817399,
        "smoothedEle": 10.397866649938322,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.914641,
        "lng": 120.84708,
        "ele": 13.25,
        "distanceKm": 49.57485420671273,
        "gradePct": 0.5257100104632363,
        "smoothedEle": 10.617294241495975,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.914366,
        "lng": 120.847363,
        "ele": 12.5,
        "distanceKm": 49.61713144654936,
        "gradePct": 0.34418756291703234,
        "smoothedEle": 10.581200023042577,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.913982,
        "lng": 120.847585,
        "ele": 11,
        "distanceKm": 49.665584334308726,
        "gradePct": 0.10263137884560734,
        "smoothedEle": 10.397157223076105,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.913625,
        "lng": 120.847687,
        "ele": 9.5,
        "distanceKm": 49.706651894746564,
        "gradePct": -0.1355171908528668,
        "smoothedEle": 10.133064430727684,
        "gradeBand": "descent"
      },
      {
        "lat": 21.913179856305607,
        "lng": 120.84776044870958,
        "ele": 8.526248168512877,
        "distanceKm": 49.75672626747389,
        "gradePct": -0.41122003255430106,
        "smoothedEle": 9.738187566816082,
        "gradeBand": "descent"
      },
      {
        "lat": 21.912734725408306,
        "lng": 120.84783398699277,
        "ele": 7.772039695238334,
        "distanceKm": 49.80680063631434,
        "gradePct": -0.6510041826832268,
        "smoothedEle": 9.28801159300926,
        "gradeBand": "descent"
      },
      {
        "lat": 21.912289644807384,
        "lng": 120.8479078773269,
        "ele": 7.880701951322969,
        "distanceKm": 49.856874996334895,
        "gradePct": -0.8073711050328206,
        "smoothedEle": 8.815496445731625,
        "gradeBand": "descent"
      },
      {
        "lat": 21.91184456420646,
        "lng": 120.84798176766104,
        "ele": 7.989364207407603,
        "distanceKm": 49.906949359981276,
        "gradePct": -0.8356461659017104,
        "smoothedEle": 8.459426345345971,
        "gradeBand": "descent"
      },
      {
        "lat": 21.911399483605535,
        "lng": 120.84805565799518,
        "ele": 8.098026463492223,
        "distanceKm": 49.95702372725382,
        "gradePct": -0.7275546144073285,
        "smoothedEle": 8.280404130633464,
        "gradeBand": "descent"
      },
      {
        "lat": 21.910954403004613,
        "lng": 120.84812954832931,
        "ele": 8.206688719576857,
        "distanceKm": 50.00709809815168,
        "gradePct": -0.5179749760050425,
        "smoothedEle": 8.249254710989074,
        "gradeBand": "descent"
      },
      {
        "lat": 21.91050932240369,
        "lng": 120.84820343866345,
        "ele": 8.315350975661477,
        "distanceKm": 50.05717247267519,
        "gradePct": -0.23786595871163668,
        "smoothedEle": 8.337649225733587,
        "gradeBand": "descent"
      },
      {
        "lat": 21.91006424180277,
        "lng": 120.8482773289976,
        "ele": 8.42401323174611,
        "distanceKm": 50.10724685082452,
        "gradePct": 0.018899230753579754,
        "smoothedEle": 8.496161239353151,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.909619161201846,
        "lng": 120.84835121933173,
        "ele": 8.532675487830746,
        "distanceKm": 50.15732123259915,
        "gradePct": 0.21887852050682224,
        "smoothedEle": 8.717976104542288,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.909174080600923,
        "lng": 120.84842510966587,
        "ele": 8.641337743915365,
        "distanceKm": 50.20739561799926,
        "gradePct": 0.392406648058867,
        "smoothedEle": 9.034593208326081,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.908729,
        "lng": 120.848499,
        "ele": 8.75,
        "distanceKm": 50.257470007024786,
        "gradePct": 0.5556852097500827,
        "smoothedEle": 9.449961499543654,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.908339,
        "lng": 120.848576,
        "ele": 9.25,
        "distanceKm": 50.30155763596019,
        "gradePct": 0.6991223525807787,
        "smoothedEle": 9.876396556532505,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.907933,
        "lng": 120.848713,
        "ele": 9.5,
        "distanceKm": 50.34886353262369,
        "gradePct": 0.8650505666918545,
        "smoothedEle": 10.410612100796392,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.907503048177986,
        "lng": 120.84903021698727,
        "ele": 10.604905513461196,
        "distanceKm": 50.4067999725065,
        "gradePct": 1.0905723893858377,
        "smoothedEle": 11.211971759129248,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.907087,
        "lng": 120.84937,
        "ele": 12,
        "distanceKm": 50.46484302351198,
        "gradePct": 1.3321269949616557,
        "smoothedEle": 12.185530567683228,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.906698,
        "lng": 120.8497015,
        "ele": 13,
        "distanceKm": 50.519984561960605,
        "gradePct": 1.6122000264106282,
        "smoothedEle": 13.308888010145653,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.906309,
        "lng": 120.850033,
        "ele": 14,
        "distanceKm": 50.57512615831949,
        "gradePct": 1.927425468628288,
        "smoothedEle": 14.628719889821623,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.905957,
        "lng": 120.850366,
        "ele": 15.25,
        "distanceKm": 50.62720510966901,
        "gradePct": 2.2589283087783443,
        "smoothedEle": 16.072084696438033,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.905757,
        "lng": 120.850661,
        "ele": 16.25,
        "distanceKm": 50.664898754963964,
        "gradePct": 2.5178985311632265,
        "smoothedEle": 17.22246300532067,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.905566092334322,
        "lng": 120.85100755922123,
        "ele": 17.70338938049072,
        "distanceKm": 50.7064791823547,
        "gradePct": 2.8200163735628574,
        "smoothedEle": 18.67378572984173,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.905375,
        "lng": 120.851354,
        "ele": 19.25,
        "distanceKm": 50.7480596341947,
        "gradePct": 3.2558844227042845,
        "smoothedEle": 20.492642757405942,
        "gradeBand": "hard"
      },
      {
        "lat": 21.905139,
        "lng": 120.851715,
        "ele": 21,
        "distanceKm": 50.79361956830478,
        "gradePct": 3.806816054517117,
        "smoothedEle": 22.754895674091284,
        "gradeBand": "hard"
      },
      {
        "lat": 21.905071,
        "lng": 120.852236,
        "ele": 23,
        "distanceKm": 50.84789887672309,
        "gradePct": 4.391963100180087,
        "smoothedEle": 25.487567239035915,
        "gradeBand": "hard"
      },
      {
        "lat": 21.905099,
        "lng": 120.852672,
        "ele": 25.75,
        "distanceKm": 50.8929873763629,
        "gradePct": 4.641909931978063,
        "smoothedEle": 27.486687763956507,
        "gradeBand": "hard"
      },
      {
        "lat": 21.905028,
        "lng": 120.853066,
        "ele": 28.75,
        "distanceKm": 50.93439483108745,
        "gradePct": 4.788889529582942,
        "smoothedEle": 29.472681242286104,
        "gradeBand": "hard"
      },
      {
        "lat": 21.904623,
        "lng": 120.853597,
        "ele": 36.5,
        "distanceKm": 51.005311072935385,
        "gradePct": 4.823087909532324,
        "smoothedEle": 32.989675939057435,
        "gradeBand": "hard"
      },
      {
        "lat": 21.904347,
        "lng": 120.853785,
        "ele": 39.5,
        "distanceKm": 51.04161605917021,
        "gradePct": 4.77855533453291,
        "smoothedEle": 34.7283717985584,
        "gradeBand": "hard"
      },
      {
        "lat": 21.904228,
        "lng": 120.853773,
        "ele": 39.5,
        "distanceKm": 51.054906062075545,
        "gradePct": 4.7806985957614785,
        "smoothedEle": 35.35964693656186,
        "gradeBand": "hard"
      },
      {
        "lat": 21.904055,
        "lng": 120.853575,
        "ele": 38.75,
        "distanceKm": 51.08296536062394,
        "gradePct": 4.8325499247464565,
        "smoothedEle": 36.707434451891714,
        "gradeBand": "hard"
      },
      {
        "lat": 21.903884,
        "lng": 120.853254,
        "ele": 37,
        "distanceKm": 51.12115273759351,
        "gradePct": 4.887303179814328,
        "smoothedEle": 38.61216739244183,
        "gradeBand": "hard"
      },
      {
        "lat": 21.903771,
        "lng": 120.853204,
        "ele": 37.5,
        "distanceKm": 51.134735427009836,
        "gradePct": 4.904260286751598,
        "smoothedEle": 39.29809320796622,
        "gradeBand": "hard"
      },
      {
        "lat": 21.903624,
        "lng": 120.85323,
        "ele": 38.75,
        "distanceKm": 51.15129973408446,
        "gradePct": 4.911766884434711,
        "smoothedEle": 40.13459071523474,
        "gradeBand": "hard"
      },
      {
        "lat": 21.903544,
        "lng": 120.853281,
        "ele": 40,
        "distanceKm": 51.161634918454936,
        "gradePct": 4.916450573930477,
        "smoothedEle": 40.65651752594377,
        "gradeBand": "hard"
      },
      {
        "lat": 21.903506,
        "lng": 120.85334,
        "ele": 40.75,
        "distanceKm": 51.16904469649281,
        "gradePct": 4.906442471284589,
        "smoothedEle": 41.00397919855958,
        "gradeBand": "hard"
      },
      {
        "lat": 21.903461,
        "lng": 120.853451,
        "ele": 41.75,
        "distanceKm": 51.181541848868505,
        "gradePct": 4.949597376610636,
        "smoothedEle": 41.71006830778629,
        "gradeBand": "hard"
      },
      {
        "lat": 21.903443,
        "lng": 120.853578,
        "ele": 42.75,
        "distanceKm": 51.19479621974649,
        "gradePct": 4.995367093038869,
        "smoothedEle": 42.4589402623926,
        "gradeBand": "hard"
      },
      {
        "lat": 21.90372881203129,
        "lng": 120.85396947082486,
        "ele": 43.54120367828044,
        "distanceKm": 51.246188469305224,
        "gradePct": 5.075242051876027,
        "smoothedEle": 45.096045383723656,
        "gradeBand": "hard"
      },
      {
        "lat": 21.904002,
        "lng": 120.854372,
        "ele": 44.75,
        "distanceKm": 51.29764095477462,
        "gradePct": 5.084842668720984,
        "smoothedEle": 47.609117894970105,
        "gradeBand": "hard"
      },
      {
        "lat": 21.904229,
        "lng": 120.854657,
        "ele": 46.75,
        "distanceKm": 51.336392073112634,
        "gradePct": 5.1280704076994095,
        "smoothedEle": 49.63789465155632,
        "gradeBand": "hard"
      },
      {
        "lat": 21.904583,
        "lng": 120.85491,
        "ele": 51,
        "distanceKm": 51.38362272083364,
        "gradePct": 5.329591063840225,
        "smoothedEle": 52.48681970149697,
        "gradeBand": "hard"
      },
      {
        "lat": 21.905182,
        "lng": 120.855117,
        "ele": 57,
        "distanceKm": 51.45356843243383,
        "gradePct": 5.6127210252247846,
        "smoothedEle": 56.681943927252696,
        "gradeBand": "hard"
      },
      {
        "lat": 21.9055645,
        "lng": 120.8552525,
        "ele": 60.5,
        "distanceKm": 51.4983389235147,
        "gradePct": 5.814289565189973,
        "smoothedEle": 59.27423849350453,
        "gradeBand": "hard"
      },
      {
        "lat": 21.905947,
        "lng": 120.855388,
        "ele": 64,
        "distanceKm": 51.54310940287846,
        "gradePct": 5.931228827550673,
        "smoothedEle": 61.905537709822326,
        "gradeBand": "hard"
      },
      {
        "lat": 21.906433,
        "lng": 120.855561,
        "ele": 67.5,
        "distanceKm": 51.6000211960956,
        "gradePct": 5.821331859213485,
        "smoothedEle": 65.11301249215789,
        "gradeBand": "hard"
      },
      {
        "lat": 21.9069145,
        "lng": 120.85566449999999,
        "ele": 69.74999999999984,
        "distanceKm": 51.65461598180394,
        "gradePct": 5.53254699011142,
        "smoothedEle": 67.80769296116056,
        "gradeBand": "hard"
      },
      {
        "lat": 21.907396,
        "lng": 120.855768,
        "ele": 72,
        "distanceKm": 51.70921076045509,
        "gradePct": 5.055632724451136,
        "smoothedEle": 70.02447534561107,
        "gradeBand": "hard"
      },
      {
        "lat": 21.907996,
        "lng": 120.855782,
        "ele": 73.5,
        "distanceKm": 51.77594344026229,
        "gradePct": 4.2749000590272,
        "smoothedEle": 72.30582154939799,
        "gradeBand": "hard"
      },
      {
        "lat": 21.90842,
        "lng": 120.85575150000001,
        "ele": 74.12499999999996,
        "distanceKm": 51.823195035868295,
        "gradePct": 3.7277308877617696,
        "smoothedEle": 73.71228484623893,
        "gradeBand": "hard"
      },
      {
        "lat": 21.908844,
        "lng": 120.855721,
        "ele": 74.75,
        "distanceKm": 51.870446630850815,
        "gradePct": 3.2607416678965495,
        "smoothedEle": 74.97196860802354,
        "gradeBand": "hard"
      },
      {
        "lat": 21.90926,
        "lng": 120.8557075,
        "ele": 75.50000000000006,
        "distanceKm": 51.91672474556094,
        "gradePct": 2.9015711602086838,
        "smoothedEle": 76.08449332943748,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.909676,
        "lng": 120.855694,
        "ele": 76.25,
        "distanceKm": 51.963002860148634,
        "gradePct": 2.603563090649557,
        "smoothedEle": 77.07055663532401,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.910095,
        "lng": 120.855634,
        "ele": 77.5,
        "distanceKm": 52.010002975027135,
        "gradePct": 2.3378922608522523,
        "smoothedEle": 77.99540221787524,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.910489499999997,
        "lng": 120.85552849999999,
        "ele": 79.25,
        "distanceKm": 52.05519945662508,
        "gradePct": 2.1327141327127332,
        "smoothedEle": 78.83092132924016,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.910884,
        "lng": 120.855423,
        "ele": 81,
        "distanceKm": 52.100395930964886,
        "gradePct": 1.9773304615480076,
        "smoothedEle": 79.64660995760522,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.911343,
        "lng": 120.855328,
        "ele": 81.5,
        "distanceKm": 52.15236690217545,
        "gradePct": 1.848587979343231,
        "smoothedEle": 80.54110867093698,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.91193,
        "lng": 120.855082,
        "ele": 82.25,
        "distanceKm": 52.22239839990615,
        "gradePct": 1.6616055940520957,
        "smoothedEle": 81.54775987963708,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.912338,
        "lng": 120.854931,
        "ele": 82.75,
        "distanceKm": 52.27036584705348,
        "gradePct": 1.4842578004664377,
        "smoothedEle": 82.07315412573968,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.912824348721575,
        "lng": 120.85481714710878,
        "ele": 83.19824644623229,
        "distanceKm": 52.32570618183069,
        "gradePct": 1.181748666584956,
        "smoothedEle": 82.44573484027457,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.913315,
        "lng": 120.854723,
        "ele": 83.5,
        "distanceKm": 52.381121936759534,
        "gradePct": 0.7660139440176115,
        "smoothedEle": 82.48646900591758,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.913849,
        "lng": 120.854572,
        "ele": 83,
        "distanceKm": 52.44250939469643,
        "gradePct": 0.28075501657476876,
        "smoothedEle": 82.32954848866657,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.914257666666668,
        "lng": 120.85448233333334,
        "ele": 82.66666666666664,
        "distanceKm": 52.48888302940843,
        "gradePct": 0.01383738963288275,
        "smoothedEle": 82.22549647452327,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.914666333333333,
        "lng": 120.85439266666667,
        "ele": 82.33333333333336,
        "distanceKm": 52.535256658825844,
        "gradePct": -0.12748823918525962,
        "smoothedEle": 82.19777858047527,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915075,
        "lng": 120.854303,
        "ele": 82,
        "distanceKm": 52.58163028294938,
        "gradePct": -0.1239737809798296,
        "smoothedEle": 82.23722199371625,
        "gradeBand": "descent"
      },
      {
        "lat": 21.915611,
        "lng": 120.854116,
        "ele": 80,
        "distanceKm": 52.644275032619525,
        "gradePct": 0.0158596306791805,
        "smoothedEle": 82.3573060553403,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.91605,
        "lng": 120.854016,
        "ele": 80.75,
        "distanceKm": 52.69416779404915,
        "gradePct": 0.21863506907860544,
        "smoothedEle": 82.65960786603459,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.916639,
        "lng": 120.853933,
        "ele": 82.25,
        "distanceKm": 52.760219004772594,
        "gradePct": 0.5940096792129368,
        "smoothedEle": 83.40702983839685,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.917005,
        "lng": 120.853874,
        "ele": 83.5,
        "distanceKm": 52.80136899984066,
        "gradePct": 0.9036062456704897,
        "smoothedEle": 84.08227173890587,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.917509,
        "lng": 120.853523,
        "ele": 84.25,
        "distanceKm": 52.868090829147,
        "gradePct": 1.479918889554945,
        "smoothedEle": 85.46144449464795,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.917831,
        "lng": 120.853337,
        "ele": 85.75,
        "distanceKm": 52.90871275570411,
        "gradePct": 1.898367210964865,
        "smoothedEle": 86.62093009504633,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.918153,
        "lng": 120.853151,
        "ele": 87.25,
        "distanceKm": 52.94933466176765,
        "gradePct": 2.2791029572224377,
        "smoothedEle": 87.84207075665897,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.91858342143229,
        "lng": 120.85305692590282,
        "ele": 89.39309974449885,
        "distanceKm": 52.99816935588063,
        "gradePct": 2.6704064679856265,
        "smoothedEle": 89.37058081272718,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.919026337145834,
        "lng": 120.85303854072225,
        "ele": 91.06447979559898,
        "distanceKm": 53.047455907927024,
        "gradePct": 2.963033462458164,
        "smoothedEle": 90.96097753313843,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.919469252859376,
        "lng": 120.85302015554169,
        "ele": 92.73585984669911,
        "distanceKm": 53.096742459746416,
        "gradePct": 3.198445297970591,
        "smoothedEle": 92.67614842254059,
        "gradeBand": "hard"
      },
      {
        "lat": 21.919912168572917,
        "lng": 120.85300177036112,
        "ele": 94.4072398977995,
        "distanceKm": 53.14602901133879,
        "gradePct": 3.362885136978259,
        "smoothedEle": 94.46846942197052,
        "gradeBand": "hard"
      },
      {
        "lat": 21.92035508428646,
        "lng": 120.85298338518056,
        "ele": 96.07861994889987,
        "distanceKm": 53.195315562704096,
        "gradePct": 3.473803005572066,
        "smoothedEle": 96.22886402483473,
        "gradeBand": "hard"
      },
      {
        "lat": 21.920798,
        "lng": 120.852965,
        "ele": 97.75,
        "distanceKm": 53.24460211384243,
        "gradePct": 3.5753353283536518,
        "smoothedEle": 98.01956090509128,
        "gradeBand": "hard"
      },
      {
        "lat": 21.921123,
        "lng": 120.852936,
        "ele": 99.25,
        "distanceKm": 53.28086412132898,
        "gradePct": 3.630656630340644,
        "smoothedEle": 99.38489586515742,
        "gradeBand": "hard"
      },
      {
        "lat": 21.921541800472603,
        "lng": 120.85282047281332,
        "ele": 101.4087864448391,
        "distanceKm": 53.32893335172743,
        "gradePct": 3.6347770469745035,
        "smoothedEle": 101.11633446017132,
        "gradeBand": "hard"
      },
      {
        "lat": 21.921954410060447,
        "lng": 120.8526792699793,
        "ele": 102.84750020547071,
        "distanceKm": 53.37707014585607,
        "gradePct": 3.5185576071355267,
        "smoothedEle": 102.61429774676084,
        "gradeBand": "hard"
      },
      {
        "lat": 21.922367,
        "lng": 120.852538,
        "ele": 104.25,
        "distanceKm": 53.4252069412402,
        "gradePct": 3.323869642436523,
        "smoothedEle": 103.96262773330618,
        "gradeBand": "hard"
      },
      {
        "lat": 21.922774,
        "lng": 120.85238349999999,
        "ele": 106.50000000000017,
        "distanceKm": 53.47318757487665,
        "gradePct": 3.0731339622982707,
        "smoothedEle": 105.24212691699304,
        "gradeBand": "hard"
      },
      {
        "lat": 21.923181,
        "lng": 120.852229,
        "ele": 108.75,
        "distanceKm": 53.5211681933784,
        "gradePct": 2.769129931691882,
        "smoothedEle": 106.37489575649965,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923513,
        "lng": 120.852006,
        "ele": 109.5,
        "distanceKm": 53.5646653261735,
        "gradePct": 2.559828701487752,
        "smoothedEle": 107.3479310117018,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923772,
        "lng": 120.851772,
        "ele": 108.5,
        "distanceKm": 53.60224263478696,
        "gradePct": 2.3934717736631383,
        "smoothedEle": 108.10633230379513,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923835,
        "lng": 120.851694,
        "ele": 108.25,
        "distanceKm": 53.612910899866876,
        "gradePct": 2.337459997235849,
        "smoothedEle": 108.29313092214817,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923868,
        "lng": 120.851584,
        "ele": 108.25,
        "distanceKm": 53.6248363643388,
        "gradePct": 2.273626673442688,
        "smoothedEle": 108.4995010799341,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923871,
        "lng": 120.851478,
        "ele": 108.25,
        "distanceKm": 53.63577572688261,
        "gradePct": 2.2221706432488486,
        "smoothedEle": 108.68880674425941,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923768,
        "lng": 120.8510695,
        "ele": 109.125,
        "distanceKm": 53.67944269666914,
        "gradePct": 2.063598288395453,
        "smoothedEle": 109.51699993637915,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923665,
        "lng": 120.850661,
        "ele": 110,
        "distanceKm": 53.723109695875294,
        "gradePct": 1.9279787837230211,
        "smoothedEle": 110.2742849309539,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923671,
        "lng": 120.850406,
        "ele": 109.75,
        "distanceKm": 53.74942234524844,
        "gradePct": 1.8541608240057905,
        "smoothedEle": 110.71526563640029,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923943,
        "lng": 120.849769,
        "ele": 111.5,
        "distanceKm": 53.821757776137254,
        "gradePct": 1.6495508706643753,
        "smoothedEle": 111.74532785370026,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.923989,
        "lng": 120.849397,
        "ele": 111.5,
        "distanceKm": 53.86047026821481,
        "gradePct": 1.6231250929067311,
        "smoothedEle": 112.40341667918821,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.924246,
        "lng": 120.848986,
        "ele": 113.25,
        "distanceKm": 53.91159830467689,
        "gradePct": 1.671397592442358,
        "smoothedEle": 113.41744643411769,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.924522500000002,
        "lng": 120.84867899999999,
        "ele": 114.25000000000009,
        "distanceKm": 53.95573610803377,
        "gradePct": 1.739572642349163,
        "smoothedEle": 114.2843193990637,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.924799,
        "lng": 120.848372,
        "ele": 115.25,
        "distanceKm": 53.99987386725635,
        "gradePct": 1.8153580177765984,
        "smoothedEle": 115.06441530796104,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.925188,
        "lng": 120.847866,
        "ele": 117,
        "distanceKm": 54.06766274771111,
        "gradePct": 1.714568690041507,
        "smoothedEle": 115.97520354721658,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.925417,
        "lng": 120.847545,
        "ele": 117.5,
        "distanceKm": 54.109433551895535,
        "gradePct": 1.4839765586772489,
        "smoothedEle": 116.34246569591542,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.925673,
        "lng": 120.847217,
        "ele": 118.75,
        "distanceKm": 54.153649463092044,
        "gradePct": 1.166459197304879,
        "smoothedEle": 116.57625577939429,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.925988,
        "lng": 120.846817,
        "ele": 119.25,
        "distanceKm": 54.20777256115776,
        "gradePct": 0.6946875221883148,
        "smoothedEle": 116.55991450518728,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.92639063263387,
        "lng": 120.84657206190269,
        "ele": 117.93098543530597,
        "distanceKm": 54.2591805695458,
        "gradePct": 0.213130368217446,
        "smoothedEle": 116.28750063556622,
        "gradeBand": "moderate"
      },
      {
        "lat": 21.926821860528225,
        "lng": 120.84638171825223,
        "ele": 116.60915452942176,
        "distanceKm": 54.31099510743187,
        "gradePct": -0.3050468715040494,
        "smoothedEle": 115.74062862317187,
        "gradeBand": "descent"
      },
      {
        "lat": 21.92725308842258,
        "lng": 120.84619137460179,
        "ele": 115.28732362353738,
        "distanceKm": 54.362809622776545,
        "gradePct": -0.7912630680485891,
        "smoothedEle": 114.99096393537323,
        "gradeBand": "descent"
      },
      {
        "lat": 21.927684316316935,
        "lng": 120.84600103095134,
        "ele": 113.96549271765298,
        "distanceKm": 54.41462411557965,
        "gradePct": -1.1962838587970708,
        "smoothedEle": 114.13104002311204,
        "gradeBand": "descent"
      },
      {
        "lat": 21.92811554421129,
        "lng": 120.8458106873009,
        "ele": 112.6436618117686,
        "distanceKm": 54.466438585841544,
        "gradePct": -1.5311227865344033,
        "smoothedEle": 113.1486509637332,
        "gradeBand": "descent"
      },
      {
        "lat": 21.928546772105644,
        "lng": 120.84562034365044,
        "ele": 111.32183090588438,
        "distanceKm": 54.5182530335617,
        "gradePct": -1.760826007965047,
        "smoothedEle": 112.11396721190171,
        "gradeBand": "descent"
      },
      {
        "lat": 21.928978,
        "lng": 120.84543,
        "ele": 110,
        "distanceKm": 54.570067458739366,
        "gradePct": -1.904943727856812,
        "smoothedEle": 111.06062395068444,
        "gradeBand": "descent"
      },
      {
        "lat": 21.92937529743718,
        "lng": 120.84524561886893,
        "ele": 110,
        "distanceKm": 54.61816496632148,
        "gradePct": -1.9997679427837625,
        "smoothedEle": 110.06437051614326,
        "gradeBand": "descent"
      },
      {
        "lat": 21.929772594874354,
        "lng": 120.84506123773787,
        "ele": 110,
        "distanceKm": 54.666262452908775,
        "gradePct": -2.0412198967457362,
        "smoothedEle": 109.06955060544726,
        "gradeBand": "descent"
      },
      {
        "lat": 21.930169668963206,
        "lng": 120.84487629818663,
        "ele": 109.23627569873372,
        "distanceKm": 54.71435992471728,
        "gradePct": -2.054768570327666,
        "smoothedEle": 108.0821716403004,
        "gradeBand": "descent"
      },
      {
        "lat": 21.930567,
        "lng": 120.844692,
        "ele": 107.75,
        "distanceKm": 54.7624574187877,
        "gradePct": -2.100025788435494,
        "smoothedEle": 107.01527802331547,
        "gradeBand": "descent"
      },
      {
        "lat": 21.930909474618154,
        "lng": 120.84451894173691,
        "ele": 106.50928449207515,
        "distanceKm": 54.80451509301562,
        "gradePct": -2.18948749319338,
        "smoothedEle": 105.96812812538636,
        "gradeBand": "descent"
      },
      {
        "lat": 21.931252,
        "lng": 120.844346,
        "ele": 105.25,
        "distanceKm": 54.8465727606594,
        "gradePct": -2.297992744440637,
        "smoothedEle": 104.88081504322494,
        "gradeBand": "descent"
      },
      {
        "lat": 21.931842,
        "lng": 120.844075,
        "ele": 103.75,
        "distanceKm": 54.917884783973605,
        "gradePct": -2.6288973530961837,
        "smoothedEle": 102.74618887225517,
        "gradeBand": "descent"
      },
      {
        "lat": 21.932419,
        "lng": 120.843847,
        "ele": 101,
        "distanceKm": 54.98621873444909,
        "gradePct": -2.914731087300639,
        "smoothedEle": 100.59420778368784,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9329545,
        "lng": 120.843695,
        "ele": 98.24999999999984,
        "distanceKm": 55.047793194199485,
        "gradePct": -3.0613789515855876,
        "smoothedEle": 98.72152516054283,
        "gradeBand": "descent"
      },
      {
        "lat": 21.93349,
        "lng": 120.843543,
        "ele": 95.5,
        "distanceKm": 55.109367638925654,
        "gradePct": -2.9998176824397405,
        "smoothedEle": 97.00150239083669,
        "gradeBand": "descent"
      },
      {
        "lat": 21.933937999999998,
        "lng": 120.84346525,
        "ele": 94.5,
        "distanceKm": 55.159824434163774,
        "gradePct": -2.83363566036657,
        "smoothedEle": 95.75814898125253,
        "gradeBand": "descent"
      },
      {
        "lat": 21.934386,
        "lng": 120.8433875,
        "ele": 93.5,
        "distanceKm": 55.21028122538868,
        "gradePct": -2.6484538023706086,
        "smoothedEle": 94.5654803816668,
        "gradeBand": "descent"
      },
      {
        "lat": 21.934834000000002,
        "lng": 120.84330975,
        "ele": 92.5,
        "distanceKm": 55.26073801260038,
        "gradePct": -2.4244579496835366,
        "smoothedEle": 93.51100823499903,
        "gradeBand": "descent"
      },
      {
        "lat": 21.935282,
        "lng": 120.843232,
        "ele": 91.5,
        "distanceKm": 55.31119479579818,
        "gradePct": -2.1781366612863855,
        "smoothedEle": 92.6002043750273,
        "gradeBand": "descent"
      },
      {
        "lat": 21.935609,
        "lng": 120.843101,
        "ele": 92.25,
        "distanceKm": 55.34998502235567,
        "gradePct": -2.0124220393591727,
        "smoothedEle": 91.97576711524859,
        "gradeBand": "descent"
      },
      {
        "lat": 21.93601147832598,
        "lng": 120.84286829133828,
        "ele": 92.04296382408556,
        "distanceKm": 55.40076903146974,
        "gradePct": -1.781021362974332,
        "smoothedEle": 91.22828142253073,
        "gradeBand": "descent"
      },
      {
        "lat": 21.93641397815597,
        "lng": 120.8426356243422,
        "ele": 91.21454316182377,
        "distanceKm": 55.45155308471031,
        "gradePct": -1.6180999691334093,
        "smoothedEle": 90.46675969047811,
        "gradeBand": "descent"
      },
      {
        "lat": 21.936816483616976,
        "lng": 120.84240296825665,
        "ele": 90.2234073713678,
        "distanceKm": 55.50233712590627,
        "gradePct": -1.5497028848344874,
        "smoothedEle": 89.66068989086256,
        "gradeBand": "descent"
      },
      {
        "lat": 21.937218989077984,
        "lng": 120.8421703121711,
        "ele": 89.23227158091181,
        "distanceKm": 55.55312113501966,
        "gradePct": -1.518993616836894,
        "smoothedEle": 88.89161969477625,
        "gradeBand": "descent"
      },
      {
        "lat": 21.93762149453899,
        "lng": 120.84193765608555,
        "ele": 88.24113579045598,
        "distanceKm": 55.60390511205067,
        "gradePct": -1.53226879880151,
        "smoothedEle": 88.11671737935177,
        "gradeBand": "descent"
      },
      {
        "lat": 21.938024,
        "lng": 120.841705,
        "ele": 87.25,
        "distanceKm": 55.654689056997434,
        "gradePct": -1.563032187428738,
        "smoothedEle": 87.29091958896419,
        "gradeBand": "descent"
      },
      {
        "lat": 21.938397,
        "lng": 120.841278,
        "ele": 85.5,
        "distanceKm": 55.715186558176036,
        "gradePct": -1.7268140425108496,
        "smoothedEle": 86.01247072160328,
        "gradeBand": "descent"
      },
      {
        "lat": 21.938611,
        "lng": 120.84099,
        "ele": 84.75,
        "distanceKm": 55.75324748789825,
        "gradePct": -1.8514587861408978,
        "smoothedEle": 85.18677412977105,
        "gradeBand": "descent"
      },
      {
        "lat": 21.93896,
        "lng": 120.840457,
        "ele": 84.25,
        "distanceKm": 55.82053974920192,
        "gradePct": -2.0190886391909046,
        "smoothedEle": 83.80804424607324,
        "gradeBand": "descent"
      },
      {
        "lat": 21.939277,
        "lng": 120.84008,
        "ele": 84,
        "distanceKm": 55.87302309884254,
        "gradePct": -1.9859034402298055,
        "smoothedEle": 82.93167298662544,
        "gradeBand": "descent"
      },
      {
        "lat": 21.939759,
        "lng": 120.839636,
        "ele": 80.75,
        "distanceKm": 55.94351940158354,
        "gradePct": -1.5949143222452222,
        "smoothedEle": 82.20798730096215,
        "gradeBand": "descent"
      },
      {
        "lat": 21.940139,
        "lng": 120.839303,
        "ele": 79.5,
        "distanceKm": 55.9979719153041,
        "gradePct": -1.1066374898134355,
        "smoothedEle": 82.05715448582313,
        "gradeBand": "descent"
      },
      {
        "lat": 21.94039,
        "lng": 120.838987,
        "ele": 79.25,
        "distanceKm": 56.040881755155254,
        "gradePct": -0.7445455587515007,
        "smoothedEle": 81.97928065150677,
        "gradeBand": "descent"
      },
      {
        "lat": 21.940459,
        "lng": 120.838518,
        "ele": 79.75,
        "distanceKm": 56.089859818847835,
        "gradePct": -0.429293664978169,
        "smoothedEle": 81.90024690076842,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9404395,
        "lng": 120.838074,
        "ele": 81.25,
        "distanceKm": 56.13570595819065,
        "gradePct": -0.23434163679289477,
        "smoothedEle": 81.8195135833293,
        "gradeBand": "descent"
      },
      {
        "lat": 21.94042,
        "lng": 120.83763,
        "ele": 82.75,
        "distanceKm": 56.181552103806126,
        "gradePct": -0.16905284594881678,
        "smoothedEle": 81.7645314764147,
        "gradeBand": "descent"
      },
      {
        "lat": 21.94056,
        "lng": 120.837195,
        "ele": 84.25,
        "distanceKm": 56.229042612186326,
        "gradePct": -0.1304812943700905,
        "smoothedEle": 81.73980403104818,
        "gradeBand": "descent"
      },
      {
        "lat": 21.941017,
        "lng": 120.836704,
        "ele": 83.5,
        "distanceKm": 56.300784723363655,
        "gradePct": -0.14348902252100057,
        "smoothedEle": 81.5940305120641,
        "gradeBand": "descent"
      },
      {
        "lat": 21.941445,
        "lng": 120.83642,
        "ele": 83.25,
        "distanceKm": 56.356668293534135,
        "gradePct": -0.278110451310194,
        "smoothedEle": 81.23815308941803,
        "gradeBand": "descent"
      },
      {
        "lat": 21.941911,
        "lng": 120.836496,
        "ele": 81.75,
        "distanceKm": 56.409074752288696,
        "gradePct": -0.587508598893996,
        "smoothedEle": 80.57518373532642,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9422995,
        "lng": 120.83674099999999,
        "ele": 80.18750000000011,
        "distanceKm": 56.45912193033469,
        "gradePct": -1.0397757753425902,
        "smoothedEle": 79.59913401056647,
        "gradeBand": "descent"
      },
      {
        "lat": 21.942688,
        "lng": 120.836986,
        "ele": 78.625,
        "distanceKm": 56.50916907352956,
        "gradePct": -1.6116032171387202,
        "smoothedEle": 78.31743090840781,
        "gradeBand": "descent"
      },
      {
        "lat": 21.9430765,
        "lng": 120.837231,
        "ele": 77.06249999999989,
        "distanceKm": 56.55921618187207,
        "gradePct": -2.1586310029705564,
        "smoothedEle": 76.88865895167788,
        "gradeBand": "descent"
      },
      {
        "lat": 21.943465,
        "lng": 120.837476,
        "ele": 75.5,
        "distanceKm": 56.60926325536094,
        "gradePct": -2.597551263608898,
        "smoothedEle": 75.37640490948465,
        "gradeBand": "descent"
      },
      {
        "lat": 21.943764,
        "lng": 120.83765,
        "ele": 74.25,
        "distanceKm": 56.64704488961762,
        "gradePct": -2.8078883206756684,
        "smoothedEle": 74.2188909742663,
        "gradeBand": "descent"
      },
      {
        "lat": 21.944087500000002,
        "lng": 120.837804,
        "ele": 73,
        "distanceKm": 56.686367137791,
        "gradePct": -2.9348590715037526,
        "smoothedEle": 73.03166841013186,
        "gradeBand": "descent"
      },
      {
        "lat": 21.944411,
        "lng": 120.837958,
        "ele": 71.75,
        "distanceKm": 56.72568937136898,
        "gradePct": -3.0239335829639487,
        "smoothedEle": 71.79793333162283,
        "gradeBand": "descent"
      },
      {
        "lat": 21.944843,
        "lng": 120.838184,
        "ele": 69.5,
        "distanceKm": 56.779082321340454,
        "gradePct": -2.892212846849306,
        "smoothedEle": 70.50394541656294,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945147,
        "lng": 120.8383675,
        "ele": 68.625,
        "distanceKm": 56.81782314895034,
        "gradePct": -2.60277224319926,
        "smoothedEle": 69.90861141484052,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945451,
        "lng": 120.838551,
        "ele": 67.75,
        "distanceKm": 56.85656395679418,
        "gradePct": -2.3131674904550747,
        "smoothedEle": 69.30515504690726,
        "gradeBand": "descent"
      },
      {
        "lat": 21.945781,
        "lng": 120.83876,
        "ele": 67,
        "distanceKm": 56.899121324601005,
        "gradePct": -1.993940309079072,
        "smoothedEle": 68.64362518080992,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946253,
        "lng": 120.839057,
        "ele": 64.5,
        "distanceKm": 56.95989045817402,
        "gradePct": -1.6354651650530607,
        "smoothedEle": 67.69813340297826,
        "gradeBand": "descent"
      },
      {
        "lat": 21.946683,
        "lng": 120.839111,
        "ele": 64.25,
        "distanceKm": 57.00802761470705,
        "gradePct": -1.5452061772215935,
        "smoothedEle": 66.96872797162214,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 57.00802761470705,
      "elevationGainM": 272.6546496318939,
      "elevationLossM": 219.4077534234009,
      "minimumElevationM": 2.5,
      "maximumElevationM": 119.25,
      "maximumSustainedGradePct": 5.931228827550673
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 278,
        "startDistanceKm": 0,
        "endDistanceKm": 13.792072769939384,
        "distanceKm": 13.792072769939384,
        "gainM": 48.03699419077236,
        "averageGradePct": 0.3482942338839145,
        "maximumGradePct": 2.2957046464267115
      },
      {
        "startIndex": 400,
        "endIndex": 758,
        "startDistanceKm": 20.009393824654413,
        "endDistanceKm": 37.86511955028373,
        "distanceKm": 17.855725725629316,
        "gainM": 47.37755429119812,
        "averageGradePct": 0.2653353608763966,
        "maximumGradePct": 1.4402185199088828
      },
      {
        "startIndex": 980,
        "endIndex": 1094,
        "startDistanceKm": 48.900430680142314,
        "endDistanceKm": 54.153649463092044,
        "distanceKm": 5.25321878294973,
        "gainM": 110.75498007657632,
        "averageGradePct": 2.1083260502313665,
        "maximumGradePct": 5.931228827550673
      }
    ]
  },
  "pingtung-dapengbay": {
    "routeId": "pingtung-dapengbay",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T15:30:26.289Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "aa816381612f451f9ce5648d61b5fe35c6389d93f71015c4ac781db389768da9",
      "roadPolicyAuditSha256": "b82df070062c2258e2c8f656abd04f4a03752bd809df1a9f2d7877667b3004c0",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "大鵬灣環灣道路與自行車道位於低平潟湖海岸，軌跡高程約負3至3公尺；預設100公尺分析仍累計16公尺爬升、最大持續坡度3.0%，主要來自低海拔SRTM細微起伏。比較500/200、750/300、1000/500公尺後，爬升依序為7、6、6公尺，最大持續坡度依序為0.7%、0.4%、0.2%；500/200已排除平坦環灣路線的短距離雜訊且使用最小合理視窗，因此採用。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://www.dbnsa.gov.tw/zh-tw/PlanTrip/articles?a=566",
        "referenceLabel": "大鵬灣國家風景區16公里環灣自行車道資料"
      },
      "reviewedAt": "2026-07-29T16:04:00.000Z",
      "reviewerNote": "初版遊客中心點導入footway／service，右岸濕地點導入footway 172公尺，崎峰濕地點導入木棧footway 39公尺與混凝土footway 92公尺，南側點導入service 437公尺，青洲點導入footway，東隆宮及聯絡點另導入多段service，均未採用。刪除景點內部與東隆宮偏點後，以現行環灣道路及OpenStreetMap way651980145 `環灣自行車道`精確節點加密；最終raw無footway、pedestrian、path、steps、track、service、private、access禁制或bicycle=no，2889公尺為官方環灣cycleway，其中2796公尺明確標記surface=asphalt bicycle=yes；9029公尺oneway=yes環灣道路全部順向，沒有reversedirection=yes與oneway=yes同段。軌跡不使用濕地木棧道、賞鳥步道、維護道路、沙灘、未鋪裝海堤或水域活動區。500/200公尺分析為11.9公里、爬升7公尺、最大0.7%，三組比較已記於elevationAnalysis。官方環灣自行車路線：https://www.dbnsa.gov.tw/zh-tw/Experience/articles?a=330；跨海大橋自行車側道可能因開橋、燈具或橋面施工局部管制，出發前須查最新公告。"
    },
    "waypoints": [
      {
        "name": "大鵬灣遊客中心外環灣道路",
        "lat": 22.45598,
        "lng": 120.483478,
        "role": "start"
      },
      {
        "name": "右岸濕地外環灣道路",
        "lat": 22.442388,
        "lng": 120.491254,
        "role": "via"
      },
      {
        "name": "環灣自行車道東側",
        "lat": 22.436619,
        "lng": 120.4901678,
        "role": "via"
      },
      {
        "name": "環灣自行車道東南側",
        "lat": 22.4325183,
        "lng": 120.4850095,
        "role": "via"
      },
      {
        "name": "環灣自行車道南側",
        "lat": 22.434699,
        "lng": 120.480255,
        "role": "via"
      },
      {
        "name": "環灣自行車道西南側",
        "lat": 22.4374842,
        "lng": 120.4751351,
        "role": "via"
      },
      {
        "name": "環灣自行車道西側",
        "lat": 22.4404476,
        "lng": 120.4697525,
        "role": "via"
      },
      {
        "name": "鵬灣跨海大橋東側環灣道路",
        "lat": 22.445649,
        "lng": 120.458829,
        "role": "via"
      },
      {
        "name": "鵬灣跨海大橋官方自行車側道",
        "lat": 22.456375,
        "lng": 120.453979,
        "role": "via"
      },
      {
        "name": "大鵬灣遊客中心外環灣道路",
        "lat": 22.45598,
        "lng": 120.483478,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.45598,
        "lng": 120.483478,
        "ele": 3.25,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 1.9612804198192482,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4558395,
        "lng": 120.4839065,
        "ele": 2.75,
        "distanceKm": 0.04672349805948647,
        "gradePct": -0.335688480517051,
        "smoothedEle": 1.8044350191389442,
        "gradeBand": "descent"
      },
      {
        "lat": 22.455699,
        "lng": 120.484335,
        "ele": 2.25,
        "distanceKm": 0.0934470381795722,
        "gradePct": -0.2487992355215881,
        "smoothedEle": 1.728784903210906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45555279282361,
        "lng": 120.48489758894087,
        "ele": 1.7369117651169597,
        "distanceKm": 0.15350316788612273,
        "gradePct": -0.23669814271794928,
        "smoothedEle": 1.59794127241958,
        "gradeBand": "descent"
      },
      {
        "lat": 22.455406,
        "lng": 120.48546,
        "ele": 1,
        "distanceKm": 0.21355942581723492,
        "gradePct": -0.17203253390483753,
        "smoothedEle": 1.5716979215168605,
        "gradeBand": "descent"
      },
      {
        "lat": 22.455214,
        "lng": 120.485703,
        "ele": 0.75,
        "distanceKm": 0.24641338854976672,
        "gradePct": -0.10827140141750101,
        "smoothedEle": 1.5889332182050593,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45505,
        "lng": 120.485787,
        "ele": 1,
        "distanceKm": 0.26658926836506996,
        "gradePct": -0.10588683796391507,
        "smoothedEle": 1.5604966608528286,
        "gradeBand": "descent"
      },
      {
        "lat": 22.454512,
        "lng": 120.485897,
        "ele": 1.25,
        "distanceKm": 0.32747085889555966,
        "gradePct": -0.1179041128616043,
        "smoothedEle": 1.4188493526396668,
        "gradeBand": "descent"
      },
      {
        "lat": 22.454108,
        "lng": 120.486137,
        "ele": 0.75,
        "distanceKm": 0.37871877972560325,
        "gradePct": -0.16137851920743707,
        "smoothedEle": 1.264165529667694,
        "gradeBand": "descent"
      },
      {
        "lat": 22.453826333333335,
        "lng": 120.48645033333334,
        "ele": 1.25,
        "distanceKm": 0.4236382639885586,
        "gradePct": -0.2393991385600108,
        "smoothedEle": 1.0981870359839456,
        "gradeBand": "descent"
      },
      {
        "lat": 22.453544666666666,
        "lng": 120.48676366666666,
        "ele": 1.75,
        "distanceKm": 0.46855779514461227,
        "gradePct": -0.29957142968508027,
        "smoothedEle": 0.9567738206208335,
        "gradeBand": "descent"
      },
      {
        "lat": 22.453263,
        "lng": 120.487077,
        "ele": 2.25,
        "distanceKm": 0.5134773731947957,
        "gradePct": -0.31173077185529685,
        "smoothedEle": 0.8279450986575654,
        "gradeBand": "descent"
      },
      {
        "lat": 22.452994698869144,
        "lng": 120.48730390072426,
        "ele": 1.4124984117160113,
        "distanceKm": 0.5513424482287022,
        "gradePct": -0.31847171379372385,
        "smoothedEle": 0.7098532712340622,
        "gradeBand": "descent"
      },
      {
        "lat": 22.452701,
        "lng": 120.487492,
        "ele": 1,
        "distanceKm": 0.5892923139975932,
        "gradePct": -0.31838423852561426,
        "smoothedEle": 0.5883276082500775,
        "gradeBand": "descent"
      },
      {
        "lat": 22.452311,
        "lng": 120.487666,
        "ele": 0,
        "distanceKm": 0.6362002869195829,
        "gradePct": -0.2815214446776063,
        "smoothedEle": 0.49559707192820185,
        "gradeBand": "descent"
      },
      {
        "lat": 22.452001,
        "lng": 120.487732,
        "ele": -0.25,
        "distanceKm": 0.6713317119170458,
        "gradePct": -0.25863006238937825,
        "smoothedEle": 0.431558141312472,
        "gradeBand": "descent"
      },
      {
        "lat": 22.451676,
        "lng": 120.487767,
        "ele": -0.5,
        "distanceKm": 0.7076486669564438,
        "gradePct": -0.2482012416854171,
        "smoothedEle": 0.348259263304825,
        "gradeBand": "descent"
      },
      {
        "lat": 22.451193154549006,
        "lng": 120.48777430387891,
        "ele": -0.6264178660745751,
        "distanceKm": 0.7613439521073001,
        "gradePct": -0.24115106672692502,
        "smoothedEle": 0.195523636099828,
        "gradeBand": "descent"
      },
      {
        "lat": 22.450710123639205,
        "lng": 120.48776384310314,
        "ele": -0.35113429285965975,
        "distanceKm": 0.8150653701775659,
        "gradePct": -0.22587952690951238,
        "smoothedEle": 0.08561880807988759,
        "gradeBand": "descent"
      },
      {
        "lat": 22.450227092729403,
        "lng": 120.48775338232736,
        "ele": -0.07585071964474488,
        "distanceKm": 0.8687867883228002,
        "gradePct": -0.1966487203288765,
        "smoothedEle": 0.04289968656223617,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4497440618196,
        "lng": 120.48774292155157,
        "ele": 0.19943285357016993,
        "distanceKm": 0.9225082065429727,
        "gradePct": -0.10845648713367184,
        "smoothedEle": 0.0890784978832001,
        "gradeBand": "descent"
      },
      {
        "lat": 22.449261030909803,
        "lng": 120.48773246077579,
        "ele": 0.47471642678508474,
        "distanceKm": 0.9762296248376872,
        "gradePct": -0.007060694131566613,
        "smoothedEle": 0.15094870881703468,
        "gradeBand": "descent"
      },
      {
        "lat": 22.448778,
        "lng": 120.487722,
        "ele": 0.75,
        "distanceKm": 1.0299510432077321,
        "gradePct": 0.06942640295901277,
        "smoothedEle": 0.21263456842088543,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.448319714285716,
        "lng": 120.48771057142858,
        "ele": 0.5714285714285716,
        "distanceKm": 1.0809236931260293,
        "gradePct": 0.08885684463549486,
        "smoothedEle": 0.23104623214077513,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.44786142857143,
        "lng": 120.48769914285714,
        "ele": 0.3928571428571425,
        "distanceKm": 1.1318963431341889,
        "gradePct": 0.052406104420912536,
        "smoothedEle": 0.20470289317899568,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.447403142857144,
        "lng": 120.48768771428571,
        "ele": 0.2142857142857142,
        "distanceKm": 1.1828689932313523,
        "gradePct": -0.008801229308362664,
        "smoothedEle": 0.14096993473836025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.446944857142856,
        "lng": 120.48767628571429,
        "ele": 0.03571428571428592,
        "distanceKm": 1.2338416434183415,
        "gradePct": -0.07645584187394626,
        "smoothedEle": 0.06112819561643201,
        "gradeBand": "descent"
      },
      {
        "lat": 22.446486571428572,
        "lng": 120.48766485714286,
        "ele": -0.14285714285714246,
        "distanceKm": 1.2848142936943652,
        "gradePct": -0.1196210372841025,
        "smoothedEle": -0.010206556202761424,
        "gradeBand": "descent"
      },
      {
        "lat": 22.446028285714284,
        "lng": 120.48765342857142,
        "ele": -0.3214285714285716,
        "distanceKm": 1.3357869440602457,
        "gradePct": -0.14785548246605743,
        "smoothedEle": -0.0958726316034863,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44557,
        "lng": 120.487642,
        "ele": -0.5,
        "distanceKm": 1.386759594515124,
        "gradePct": -0.14200210211708536,
        "smoothedEle": -0.14912836842115204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.445016,
        "lng": 120.487724,
        "ele": -0.5,
        "distanceKm": 1.448935427904835,
        "gradePct": -0.1271166672441322,
        "smoothedEle": -0.2142284543071859,
        "gradeBand": "descent"
      },
      {
        "lat": 22.444599,
        "lng": 120.487876,
        "ele": 0,
        "distanceKm": 1.4978644498086973,
        "gradePct": -0.11484339458842821,
        "smoothedEle": -0.2618258062121809,
        "gradeBand": "descent"
      },
      {
        "lat": 22.444181,
        "lng": 120.488103,
        "ele": -0.25,
        "distanceKm": 1.549870245325171,
        "gradePct": -0.10924154238788017,
        "smoothedEle": -0.3290698146063475,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4438218751165,
        "lng": 120.48839695477561,
        "ele": 0,
        "distanceKm": 1.599943278461697,
        "gradePct": -0.10639129179537675,
        "smoothedEle": -0.37571469070627495,
        "gradeBand": "descent"
      },
      {
        "lat": 22.443496,
        "lng": 120.488736,
        "ele": -0.25,
        "distanceKm": 1.6502142562558821,
        "gradePct": -0.0859884083758277,
        "smoothedEle": -0.38744929435385983,
        "gradeBand": "descent"
      },
      {
        "lat": 22.443242,
        "lng": 120.489152,
        "ele": -0.25,
        "distanceKm": 1.7014544845568869,
        "gradePct": -0.05098367461282978,
        "smoothedEle": -0.3684351059040369,
        "gradeBand": "descent"
      },
      {
        "lat": 22.443008,
        "lng": 120.489681,
        "ele": -0.75,
        "distanceKm": 1.7617270865835117,
        "gradePct": -0.002949891919664633,
        "smoothedEle": -0.34601468313075817,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44287,
        "lng": 120.490038,
        "ele": -0.75,
        "distanceKm": 1.8014967321923299,
        "gradePct": 0.03492775051511183,
        "smoothedEle": -0.30622180772355523,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.442732,
        "lng": 120.490395,
        "ele": -0.75,
        "distanceKm": 1.8412664114768535,
        "gradePct": 0.06603687825381506,
        "smoothedEle": -0.2532868692627005,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.44256,
        "lng": 120.4908245,
        "ele": -0.4999999999999994,
        "distanceKm": 1.8893728588568977,
        "gradePct": 0.09946909738119727,
        "smoothedEle": -0.17398015244358075,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.442388,
        "lng": 120.491254,
        "ele": -0.25,
        "distanceKm": 1.9374793564575843,
        "gradePct": 0.13863364257810568,
        "smoothedEle": -0.07776715724220742,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.442185666666667,
        "lng": 120.49176,
        "ele": 0.08333333333333287,
        "distanceKm": 1.994141008249303,
        "gradePct": 0.17883021328233736,
        "smoothedEle": 0.04407859835530075,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.441983333333333,
        "lng": 120.492266,
        "ele": 0.4166666666666671,
        "distanceKm": 2.0508027296562528,
        "gradePct": 0.21347765833478488,
        "smoothedEle": 0.18938970986834067,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.441781,
        "lng": 120.492772,
        "ele": 0.75,
        "distanceKm": 2.107464520677855,
        "gradePct": 0.2244020411827361,
        "smoothedEle": 0.3110072535638058,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.441461,
        "lng": 120.493042,
        "ele": 0.75,
        "distanceKm": 2.152587877618546,
        "gradePct": 0.2091334619811808,
        "smoothedEle": 0.3729892745019827,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.440993,
        "lng": 120.492965,
        "ele": 0.75,
        "distanceKm": 2.205225450476876,
        "gradePct": 0.1600171395107036,
        "smoothedEle": 0.39253934555656655,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.440529531810753,
        "lng": 120.49284829241205,
        "ele": 0.5883609367600242,
        "distanceKm": 2.2581382660495666,
        "gradePct": 0.05424335032341989,
        "smoothedEle": 0.31362123435075917,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.440066687873834,
        "lng": 120.4927285282747,
        "ele": 0.3922406245066828,
        "distanceKm": 2.311055672522391,
        "gradePct": -0.09390787707178945,
        "smoothedEle": 0.12812435158175317,
        "gradeBand": "descent"
      },
      {
        "lat": 22.43960384393692,
        "lng": 120.49260876413736,
        "ele": 0.19612031225334137,
        "distanceKm": 2.3639730885462344,
        "gradePct": -0.250814302505701,
        "smoothedEle": -0.12441076010768809,
        "gradeBand": "descent"
      },
      {
        "lat": 22.439141,
        "lng": 120.492489,
        "ele": 0,
        "distanceKm": 2.4168905141223878,
        "gradePct": -0.37190479652963676,
        "smoothedEle": -0.36866839160136433,
        "gradeBand": "descent"
      },
      {
        "lat": 22.438707,
        "lng": 120.492293,
        "ele": -0.5,
        "distanceKm": 2.4691847260435065,
        "gradePct": -0.41072643814536225,
        "smoothedEle": -0.5465539458299089,
        "gradeBand": "descent"
      },
      {
        "lat": 22.43835,
        "lng": 120.492075,
        "ele": -1.25,
        "distanceKm": 2.514767831448453,
        "gradePct": -0.3785655656061339,
        "smoothedEle": -0.646722128176249,
        "gradeBand": "descent"
      },
      {
        "lat": 22.437946,
        "lng": 120.491762,
        "ele": -1.75,
        "distanceKm": 2.5700209873395328,
        "gradePct": -0.29022333335862727,
        "smoothedEle": -0.7327734756251358,
        "gradeBand": "descent"
      },
      {
        "lat": 22.437591,
        "lng": 120.491409,
        "ele": -1.75,
        "distanceKm": 2.623635126290352,
        "gradePct": -0.22527895201765244,
        "smoothedEle": -0.8421689699686711,
        "gradeBand": "descent"
      },
      {
        "lat": 22.437271000000003,
        "lng": 120.491014,
        "ele": -1.125,
        "distanceKm": 2.677618707735079,
        "gradePct": -0.17325430396986594,
        "smoothedEle": -0.9115961005405773,
        "gradeBand": "descent"
      },
      {
        "lat": 22.436951,
        "lng": 120.490619,
        "ele": -0.5,
        "distanceKm": 2.731602359590893,
        "gradePct": -0.10979652523740904,
        "smoothedEle": -0.8925332979052658,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4366725,
        "lng": 120.490349,
        "ele": -0.375,
        "distanceKm": 2.773184425370501,
        "gradePct": -0.07403745902575876,
        "smoothedEle": -0.8873031437480918,
        "gradeBand": "descent"
      },
      {
        "lat": 22.436394,
        "lng": 120.490079,
        "ele": -0.25,
        "distanceKm": 2.814766528319705,
        "gradePct": -0.022989802228277935,
        "smoothedEle": -0.8700528877627405,
        "gradeBand": "descent"
      },
      {
        "lat": 22.436054,
        "lng": 120.489845,
        "ele": -1,
        "distanceKm": 2.859574174858057,
        "gradePct": 0.01121308010391863,
        "smoothedEle": -0.8659632521761798,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.436107,
        "lng": 120.489777,
        "ele": -1,
        "distanceKm": 2.8687161921463504,
        "gradePct": 0.01480625232551651,
        "smoothedEle": -0.8705342608203264,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.436131,
        "lng": 120.489789,
        "ele": -1,
        "distanceKm": 2.871656088055511,
        "gradePct": 0.01596174700268281,
        "smoothedEle": -0.8720042087749067,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.436619,
        "lng": 120.490168,
        "ele": 0,
        "distanceKm": 2.938452956788221,
        "gradePct": -0.057050933233565256,
        "smoothedEle": -1.0057735025299899,
        "gradeBand": "descent"
      },
      {
        "lat": 22.436131,
        "lng": 120.489789,
        "ele": -1,
        "distanceKm": 3.005249825520931,
        "gradePct": -0.1528298541391778,
        "smoothedEle": -1.179660582019966,
        "gradeBand": "descent"
      },
      {
        "lat": 22.435593,
        "lng": 120.489491,
        "ele": -1.5,
        "distanceKm": 3.072457402288554,
        "gradePct": -0.19286554593595912,
        "smoothedEle": -1.2593400351360864,
        "gradeBand": "descent"
      },
      {
        "lat": 22.435274,
        "lng": 120.48936950000001,
        "ele": -2,
        "distanceKm": 3.11006257206233,
        "gradePct": -0.13058040742805066,
        "smoothedEle": -1.2100789320024676,
        "gradeBand": "descent"
      },
      {
        "lat": 22.434955,
        "lng": 120.489248,
        "ele": -2.5,
        "distanceKm": 3.147667751369286,
        "gradePct": -0.060524306754569275,
        "smoothedEle": -1.1508102721937719,
        "gradeBand": "descent"
      },
      {
        "lat": 22.434463,
        "lng": 120.489153,
        "ele": -2.25,
        "distanceKm": 3.2032402205948896,
        "gradePct": -0.005657610236205364,
        "smoothedEle": -1.1857443546992723,
        "gradeBand": "descent"
      },
      {
        "lat": 22.433892,
        "lng": 120.489117,
        "ele": -1.25,
        "distanceKm": 3.2668403322058617,
        "gradePct": 0.046657003624574325,
        "smoothedEle": -1.1593665842076728,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43354,
        "lng": 120.48911,
        "ele": -0.6249999999999964,
        "distanceKm": 3.3059876122303136,
        "gradePct": 0.05616582131991728,
        "smoothedEle": -1.10308530585765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.433188,
        "lng": 120.489103,
        "ele": 0,
        "distanceKm": 3.3451348922883026,
        "gradePct": 0.06421442030138064,
        "smoothedEle": -1.0263734126420467,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.432829,
        "lng": 120.489,
        "ele": -0.25,
        "distanceKm": 3.3864338152294042,
        "gradePct": 0.12981101251458815,
        "smoothedEle": -0.9155574517756966,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.432433,
        "lng": 120.488873,
        "ele": -0.5,
        "distanceKm": 3.4323610659689403,
        "gradePct": 0.2109285757768127,
        "smoothedEle": -0.7518095045954203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.431987,
        "lng": 120.48849,
        "ele": -0.5,
        "distanceKm": 3.495678387044134,
        "gradePct": 0.3339061278696118,
        "smoothedEle": -0.450094421409459,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.431705,
        "lng": 120.487883,
        "ele": -0.5,
        "distanceKm": 3.56550362352858,
        "gradePct": 0.4377805322546169,
        "smoothedEle": -0.09615764134448201,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.431634,
        "lng": 120.487527,
        "ele": -0.75,
        "distanceKm": 3.602935872995083,
        "gradePct": 0.4152983861289767,
        "smoothedEle": -0.026124628156757316,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.431609,
        "lng": 120.487179,
        "ele": -0.75,
        "distanceKm": 3.6388117219749136,
        "gradePct": 0.34144704699946243,
        "smoothedEle": -0.038177214785353304,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43168437054709,
        "lng": 120.48681548631691,
        "ele": -0.6177237202016503,
        "distanceKm": 3.67710264491871,
        "gradePct": 0.2354973291148563,
        "smoothedEle": -0.06761553556938094,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.431818,
        "lng": 120.486471,
        "ele": 0.25,
        "distanceKm": 3.7155009560952217,
        "gradePct": 0.1314006062576618,
        "smoothedEle": -0.08681469115763674,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43198,
        "lng": 120.486124,
        "ele": 1.75,
        "distanceKm": 3.7554570772138014,
        "gradePct": 0.02014488813982741,
        "smoothedEle": -0.10679275171692659,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.432264,
        "lng": 120.485596,
        "ele": 1.25,
        "distanceKm": 3.81824502043619,
        "gradePct": -0.04435530257081206,
        "smoothedEle": -0.11997838199007171,
        "gradeBand": "descent"
      },
      {
        "lat": 22.432441356812177,
        "lng": 120.48518842709045,
        "ele": -0.31491304861504466,
        "distanceKm": 3.86454579692097,
        "gradePct": -0.021993592235965725,
        "smoothedEle": -0.10194893029233396,
        "gradeBand": "descent"
      },
      {
        "lat": 22.432619,
        "lng": 120.484781,
        "ele": -0.75,
        "distanceKm": 3.910846541761845,
        "gradePct": 0.00781208594403813,
        "smoothedEle": -0.06886331210287203,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4328085,
        "lng": 120.4843765,
        "ele": -0.75,
        "distanceKm": 3.9574563282836155,
        "gradePct": 0.02515245431120891,
        "smoothedEle": -0.056907690983718714,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.432998,
        "lng": 120.483972,
        "ele": -0.75,
        "distanceKm": 4.004066064170258,
        "gradePct": -0.019521456535520208,
        "smoothedEle": -0.15604367761759302,
        "gradeBand": "descent"
      },
      {
        "lat": 22.433198,
        "lng": 120.483477,
        "ele": -0.5,
        "distanceKm": 4.0595906113499245,
        "gradePct": -0.12091606422090068,
        "smoothedEle": -0.3457106004327692,
        "gradeBand": "descent"
      },
      {
        "lat": 22.433423683540326,
        "lng": 120.48309925335438,
        "ele": -0.45498791564477165,
        "distanceKm": 4.10581969758314,
        "gradePct": -0.176718531945297,
        "smoothedEle": -0.42589246177450824,
        "gradeBand": "descent"
      },
      {
        "lat": 22.43362334177016,
        "lng": 120.48270362667719,
        "ele": -0.3524939578223858,
        "distanceKm": 4.152148196859621,
        "gradePct": -0.16551770491669962,
        "smoothedEle": -0.38930466054291324,
        "gradeBand": "descent"
      },
      {
        "lat": 22.433823,
        "lng": 120.482308,
        "ele": -0.25,
        "distanceKm": 4.198476644790448,
        "gradePct": -0.08810295651510273,
        "smoothedEle": -0.32036124598359283,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4339982,
        "lng": 120.48189740000001,
        "ele": -0.2,
        "distanceKm": 4.24495764754988,
        "gradePct": 0.022542976797072935,
        "smoothedEle": -0.25063974184444515,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4341734,
        "lng": 120.4814868,
        "ele": -0.15,
        "distanceKm": 4.2914386019381014,
        "gradePct": 0.10761289161464213,
        "smoothedEle": -0.1857234423511179,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4343486,
        "lng": 120.4810762,
        "ele": -0.1,
        "distanceKm": 4.337919507952445,
        "gradePct": 0.13041488658851116,
        "smoothedEle": -0.13971195417470622,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.434523799999997,
        "lng": 120.4806656,
        "ele": -0.04999999999999999,
        "distanceKm": 4.3844003655948836,
        "gradePct": 0.12529536299523975,
        "smoothedEle": -0.09071805429172727,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.434699,
        "lng": 120.480255,
        "ele": 0,
        "distanceKm": 4.430881174862749,
        "gradePct": 0.11465532371782358,
        "smoothedEle": -0.042443803439494915,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43502,
        "lng": 120.479646,
        "ele": 0,
        "distanceKm": 4.502935720262094,
        "gradePct": 0.10392579811570862,
        "smoothedEle": 0.03350916103330025,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43535,
        "lng": 120.479088,
        "ele": 0,
        "distanceKm": 4.571020766376237,
        "gradePct": 0.11013811461520777,
        "smoothedEle": 0.11545519195082186,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.435571334071458,
        "lng": 120.47867720877498,
        "ele": 0.10024188018996753,
        "distanceKm": 4.619890931720796,
        "gradePct": 0.11649729545152351,
        "smoothedEle": 0.17913649062323383,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43579266814292,
        "lng": 120.47826641754997,
        "ele": 0.20048376037993693,
        "distanceKm": 4.668761038884571,
        "gradePct": 0.1248111627485197,
        "smoothedEle": 0.24710782770145906,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.436014002214378,
        "lng": 120.47785562632495,
        "ele": 0.3007256405699045,
        "distanceKm": 4.717631087869167,
        "gradePct": 0.1335532928812186,
        "smoothedEle": 0.31830284722385005,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43623533628584,
        "lng": 120.47744483509993,
        "ele": 0.40096752075987385,
        "distanceKm": 4.7665010786731985,
        "gradePct": 0.1407962312734149,
        "smoothedEle": 0.39160783342989736,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43645667792565,
        "lng": 120.47703404862706,
        "ele": 0.5011622941187164,
        "distanceKm": 4.81537101316268,
        "gradePct": 0.14939017457740628,
        "smoothedEle": 0.47202706466382227,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.436678639304258,
        "lng": 120.4766236512864,
        "ele": 0.5974996980286006,
        "distanceKm": 4.864241108238169,
        "gradePct": 0.1601147499841006,
        "smoothedEle": 0.5610507498950876,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.436900600682865,
        "lng": 120.47621325394574,
        "ele": 0.6938371019384866,
        "distanceKm": 4.913111145078532,
        "gradePct": 0.1667544827475072,
        "smoothedEle": 0.6452270553489512,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.437122597410475,
        "lng": 120.47580287835376,
        "ele": 0.75,
        "distanceKm": 4.961981179727929,
        "gradePct": 0.16955665628211034,
        "smoothedEle": 0.7239412975762141,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.437344643555054,
        "lng": 120.47539253316587,
        "ele": 0.75,
        "distanceKm": 5.010851235194838,
        "gradePct": 0.16752819640080888,
        "smoothedEle": 0.7996458156245233,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.437566766654065,
        "lng": 120.4749822364042,
        "ele": 0.8682380772360426,
        "distanceKm": 5.059721261432396,
        "gradePct": 0.15976254226844108,
        "smoothedEle": 0.8723423039117378,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.437788549877734,
        "lng": 120.47457172373103,
        "ele": 1,
        "distanceKm": 5.108591296756928,
        "gradePct": 0.15317453481379203,
        "smoothedEle": 0.9437909020153312,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43801,
        "lng": 120.474161,
        "ele": 1,
        "distanceKm": 5.157461329068461,
        "gradePct": 0.15115222135803238,
        "smoothedEle": 1.0189656836646779,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.438264333333333,
        "lng": 120.47367933333334,
        "ele": 1.0833333333333328,
        "distanceKm": 5.214474066469136,
        "gradePct": 0.1542954083817454,
        "smoothedEle": 1.1136257662104168,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.438518666666667,
        "lng": 120.47319766666666,
        "ele": 1.1666666666666672,
        "distanceKm": 5.271486725077564,
        "gradePct": 0.166288206958246,
        "smoothedEle": 1.2221199716825324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.438773,
        "lng": 120.472716,
        "ele": 1.25,
        "distanceKm": 5.328499304890396,
        "gradePct": 0.1757558466066112,
        "smoothedEle": 1.3259262738659365,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43898675,
        "lng": 120.47234225000001,
        "ele": 1.3749999999999987,
        "distanceKm": 5.373670572038582,
        "gradePct": 0.1746477554059178,
        "smoothedEle": 1.3951739221845745,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4392005,
        "lng": 120.4719685,
        "ele": 1.5,
        "distanceKm": 5.41884178886288,
        "gradePct": 0.1704966366037672,
        "smoothedEle": 1.4629307474210227,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.43941425,
        "lng": 120.47159475,
        "ele": 1.6250000000000013,
        "distanceKm": 5.464012955362033,
        "gradePct": 0.1590578918960681,
        "smoothedEle": 1.5260132875708798,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.439628,
        "lng": 120.471221,
        "ele": 1.75,
        "distanceKm": 5.509184071534158,
        "gradePct": 0.14045016996088633,
        "smoothedEle": 1.57165818329214,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.439849,
        "lng": 120.4708195,
        "ele": 1.75,
        "distanceKm": 5.5572115280580725,
        "gradePct": 0.1118478537651414,
        "smoothedEle": 1.5936378803932294,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.44007,
        "lng": 120.470418,
        "ele": 1.75,
        "distanceKm": 5.605238928107263,
        "gradePct": 0.07801006509203383,
        "smoothedEle": 1.5985465864716641,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.44027123157397,
        "lng": 120.47006637430232,
        "ele": 1.75,
        "distanceKm": 5.647743852823758,
        "gradePct": 0.04076188906340946,
        "smoothedEle": 1.5848169016281661,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.44047259422236,
        "lng": 120.46971483668123,
        "ele": 1.75,
        "distanceKm": 5.690248712859921,
        "gradePct": 0.0006433635215082884,
        "smoothedEle": 1.5538109471885124,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.440675,
        "lng": 120.469364,
        "ele": 1.75,
        "distanceKm": 5.732753615289592,
        "gradePct": -0.03849667802568243,
        "smoothedEle": 1.5054513953842987,
        "gradeBand": "descent"
      },
      {
        "lat": 22.440633,
        "lng": 120.469339,
        "ele": 1.5,
        "distanceKm": 5.738083941586305,
        "gradePct": -0.04323351859883525,
        "smoothedEle": 1.498417130478855,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4408428,
        "lng": 120.4689098,
        "ele": 1.4,
        "distanceKm": 5.787983897171458,
        "gradePct": -0.09003843436855066,
        "smoothedEle": 1.416706143709081,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4410526,
        "lng": 120.4684806,
        "ele": 1.3,
        "distanceKm": 5.837883793786781,
        "gradePct": -0.133239135401519,
        "smoothedEle": 1.321523567724062,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4412624,
        "lng": 120.4680514,
        "ele": 1.2,
        "distanceKm": 5.887783631433064,
        "gradePct": -0.17136985604439312,
        "smoothedEle": 1.212869434231452,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4414722,
        "lng": 120.4676222,
        "ele": 1.1,
        "distanceKm": 5.93768341010722,
        "gradePct": -0.20410096219863663,
        "smoothedEle": 1.0907437749477302,
        "gradeBand": "descent"
      },
      {
        "lat": 22.441682,
        "lng": 120.467193,
        "ele": 1,
        "distanceKm": 5.987583129810037,
        "gradePct": -0.23056680073284327,
        "smoothedEle": 0.956228797267728,
        "gradeBand": "descent"
      },
      {
        "lat": 22.441876333333333,
        "lng": 120.46679883333333,
        "ele": 0.875,
        "distanceKm": 6.033496237396514,
        "gradePct": -0.2418619216627627,
        "smoothedEle": 0.8461688583613681,
        "gradeBand": "descent"
      },
      {
        "lat": 22.442070666666666,
        "lng": 120.46640466666666,
        "ele": 0.75,
        "distanceKm": 6.07940929491142,
        "gradePct": -0.24362008617602343,
        "smoothedEle": 0.743863915963546,
        "gradeBand": "descent"
      },
      {
        "lat": 22.442265,
        "lng": 120.4660105,
        "ele": 0.625,
        "distanceKm": 6.125322302354357,
        "gradePct": -0.23552613243617784,
        "smoothedEle": 0.6499443182822642,
        "gradeBand": "descent"
      },
      {
        "lat": 22.442459333333336,
        "lng": 120.46561633333333,
        "ele": 0.5,
        "distanceKm": 6.171235259725117,
        "gradePct": -0.21794390147240156,
        "smoothedEle": 0.5644100470688154,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44265366666667,
        "lng": 120.46522216666666,
        "ele": 0.375,
        "distanceKm": 6.217148167022932,
        "gradePct": -0.1990481568530537,
        "smoothedEle": 0.4872610840753906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.442848,
        "lng": 120.464828,
        "ele": 0.25,
        "distanceKm": 6.263061024247593,
        "gradePct": -0.19739784250040843,
        "smoothedEle": 0.3854959702398151,
        "gradeBand": "descent"
      },
      {
        "lat": 22.443040316949048,
        "lng": 120.46438465882272,
        "ele": 0.25,
        "distanceKm": 6.31339337447553,
        "gradePct": -0.24115778397885307,
        "smoothedEle": 0.19203055211331893,
        "gradeBand": "descent"
      },
      {
        "lat": 22.443232633898095,
        "lng": 120.46394131764545,
        "ele": 0.25,
        "distanceKm": 6.363725667518084,
        "gradePct": -0.30688344085939767,
        "smoothedEle": -0.035366720892946193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44342495084714,
        "lng": 120.46349797646816,
        "ele": 0.25,
        "distanceKm": 6.414057903376125,
        "gradePct": -0.34781787930146585,
        "smoothedEle": -0.20318200323401975,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44361726779619,
        "lng": 120.46305463529089,
        "ele": 0.25,
        "distanceKm": 6.464390082046559,
        "gradePct": -0.34590140995551283,
        "smoothedEle": -0.31141542738766487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44380961979987,
        "lng": 120.46261131089595,
        "ele": -0.46317591886642673,
        "distanceKm": 6.514722298465232,
        "gradePct": -0.2730468686720521,
        "smoothedEle": -0.36006715749239643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.444002,
        "lng": 120.462168,
        "ele": -1.75,
        "distanceKm": 6.565054534317922,
        "gradePct": -0.1582994609913175,
        "smoothedEle": -0.3563962856516641,
        "gradeBand": "descent"
      },
      {
        "lat": 22.444211,
        "lng": 120.46173066666667,
        "ele": -1.2916666666666694,
        "distanceKm": 6.6156530371141615,
        "gradePct": -0.04990990494048186,
        "smoothedEle": -0.30643196040864973,
        "gradeBand": "descent"
      },
      {
        "lat": 22.44442,
        "lng": 120.46129333333333,
        "ele": -0.8333333333333306,
        "distanceKm": 6.666251479753029,
        "gradePct": 0.051177703220106736,
        "smoothedEle": -0.21085927051912645,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.444629,
        "lng": 120.460856,
        "ele": -0.375,
        "distanceKm": 6.716849862232353,
        "gradePct": 0.1442313566058617,
        "smoothedEle": -0.0714492750578124,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.444838,
        "lng": 120.46041866666667,
        "ele": 0.08333333333333037,
        "distanceKm": 6.767448184554578,
        "gradePct": 0.2816153311516611,
        "smoothedEle": 0.20919802601543291,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.445047000000002,
        "lng": 120.45998133333333,
        "ele": 0.5416666666666696,
        "distanceKm": 6.818046446717713,
        "gradePct": 0.47301676167847573,
        "smoothedEle": 0.6441223462350818,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.445256,
        "lng": 120.459544,
        "ele": 1,
        "distanceKm": 6.868644648721066,
        "gradePct": 0.6374935517422519,
        "smoothedEle": 1.0707215551087388,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.445452500000002,
        "lng": 120.45918649999999,
        "ele": 1.375000000000004,
        "distanceKm": 6.911391574968401,
        "gradePct": 0.7313188987416248,
        "smoothedEle": 1.3761497056607905,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.445649,
        "lng": 120.458829,
        "ele": 1.75,
        "distanceKm": 6.95413845647541,
        "gradePct": 0.7467276592218404,
        "smoothedEle": 1.6288299627341323,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.446016,
        "lng": 120.458309,
        "ele": 3.25,
        "distanceKm": 7.02137888811334,
        "gradePct": 0.6276866575280008,
        "smoothedEle": 1.9275918545688169,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.446392,
        "lng": 120.457803,
        "ele": 2.75,
        "distanceKm": 7.088103925354956,
        "gradePct": 0.4653542052426367,
        "smoothedEle": 2.1404671173878254,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.446686999999997,
        "lng": 120.45744,
        "ele": 2.500000000000002,
        "distanceKm": 7.137780099812862,
        "gradePct": 0.3500354216457162,
        "smoothedEle": 2.2322052431898936,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.446982,
        "lng": 120.457077,
        "ele": 2.25,
        "distanceKm": 7.187456214681057,
        "gradePct": 0.245829357635448,
        "smoothedEle": 2.268525747826494,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.44735722477858,
        "lng": 120.45668469203558,
        "ele": 2,
        "distanceKm": 7.245476235127372,
        "gradePct": 0.1176123374613366,
        "smoothedEle": 2.2396951539316357,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.447733,
        "lng": 120.456293,
        "ele": 2,
        "distanceKm": 7.303496275548837,
        "gradePct": -0.058271652015419784,
        "smoothedEle": 2.0523492179676466,
        "gradeBand": "descent"
      },
      {
        "lat": 22.448117,
        "lng": 120.45590250000001,
        "ele": 1.875,
        "distanceKm": 7.3620943402415335,
        "gradePct": -0.16827807846015927,
        "smoothedEle": 1.9134263517535626,
        "gradeBand": "descent"
      },
      {
        "lat": 22.448501,
        "lng": 120.455512,
        "ele": 1.75,
        "distanceKm": 7.420692328831513,
        "gradePct": -0.22521480374420602,
        "smoothedEle": 1.8015808598824055,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4487966,
        "lng": 120.4551934,
        "ele": 1.7000000000000002,
        "distanceKm": 7.467086720462039,
        "gradePct": -0.22234423033041964,
        "smoothedEle": 1.725226724621182,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4490922,
        "lng": 120.4548748,
        "ele": 1.6500000000000004,
        "distanceKm": 7.51348106283657,
        "gradePct": -0.1826008865815276,
        "smoothedEle": 1.6634757540102927,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4493878,
        "lng": 120.4545562,
        "ele": 1.5999999999999996,
        "distanceKm": 7.559875355955105,
        "gradePct": -0.16240137569221533,
        "smoothedEle": 1.5938843143324901,
        "gradeBand": "descent"
      },
      {
        "lat": 22.449683399999998,
        "lng": 120.4542376,
        "ele": 1.5499999999999998,
        "distanceKm": 7.606269599816522,
        "gradePct": -0.14947394044358672,
        "smoothedEle": 1.5301615215206992,
        "gradeBand": "descent"
      },
      {
        "lat": 22.449979,
        "lng": 120.453919,
        "ele": 1.5,
        "distanceKm": 7.652663794420818,
        "gradePct": -0.13698851881774265,
        "smoothedEle": 1.4749863932364031,
        "gradeBand": "descent"
      },
      {
        "lat": 22.450260666666665,
        "lng": 120.45361866666667,
        "ele": 1.4166666666666672,
        "distanceKm": 7.696636099371097,
        "gradePct": -0.13364833747592542,
        "smoothedEle": 1.4185997620697601,
        "gradeBand": "descent"
      },
      {
        "lat": 22.450542333333335,
        "lng": 120.45331833333333,
        "ele": 1.3333333333333328,
        "distanceKm": 7.7406083603167035,
        "gradePct": -0.13285688208872093,
        "smoothedEle": 1.357071043612651,
        "gradeBand": "descent"
      },
      {
        "lat": 22.450824,
        "lng": 120.453018,
        "ele": 1.25,
        "distanceKm": 7.784580577254546,
        "gradePct": -0.13188565829325694,
        "smoothedEle": 1.2961802171420667,
        "gradeBand": "descent"
      },
      {
        "lat": 22.451267,
        "lng": 120.452646,
        "ele": 1.25,
        "distanceKm": 7.846934220391905,
        "gradePct": -0.1419638025501927,
        "smoothedEle": 1.197872786843312,
        "gradeBand": "descent"
      },
      {
        "lat": 22.451665,
        "lng": 120.45246,
        "ele": 1.25,
        "distanceKm": 7.895141390002284,
        "gradePct": -0.11775189894973194,
        "smoothedEle": 1.1850126621004107,
        "gradeBand": "descent"
      },
      {
        "lat": 22.452125,
        "lng": 120.452357,
        "ele": 1,
        "distanceKm": 7.947374873984728,
        "gradePct": -0.07945045892079199,
        "smoothedEle": 1.1888001499485397,
        "gradeBand": "descent"
      },
      {
        "lat": 22.452482,
        "lng": 120.452365,
        "ele": 1,
        "distanceKm": 7.987080030000632,
        "gradePct": -0.07199702000205149,
        "smoothedEle": 1.1482455128197693,
        "gradeBand": "descent"
      },
      {
        "lat": 22.452872275278775,
        "lng": 120.45243182150344,
        "ele": 0.9270149003752031,
        "distanceKm": 8.031016667920088,
        "gradePct": -0.126272378902899,
        "smoothedEle": 0.9704238149678206,
        "gradeBand": "descent"
      },
      {
        "lat": 22.453261,
        "lng": 120.452509,
        "ele": 0.75,
        "distanceKm": 8.074962584864691,
        "gradePct": -0.25569086333394025,
        "smoothedEle": 0.6790139926277458,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45376,
        "lng": 120.452625,
        "ele": 1.5,
        "distanceKm": 8.131715025346082,
        "gradePct": -0.46758495809830425,
        "smoothedEle": 0.25249472675717677,
        "gradeBand": "descent"
      },
      {
        "lat": 22.454349,
        "lng": 120.452833,
        "ele": 1.5,
        "distanceKm": 8.200608758956228,
        "gradePct": -0.5643860111571466,
        "smoothedEle": -0.03528039296355512,
        "gradeBand": "descent"
      },
      {
        "lat": 22.454677999999998,
        "lng": 120.45297649999999,
        "ele": 3.4638958368304884e-14,
        "distanceKm": 8.240052325606673,
        "gradePct": -0.47165357518549306,
        "smoothedEle": -0.03279969588080778,
        "gradeBand": "descent"
      },
      {
        "lat": 22.455007,
        "lng": 120.45312,
        "ele": -1.5,
        "distanceKm": 8.279495879174076,
        "gradePct": -0.3132778648854345,
        "smoothedEle": 0.018388585070095942,
        "gradeBand": "descent"
      },
      {
        "lat": 22.455428,
        "lng": 120.453321,
        "ele": -2.75,
        "distanceKm": 8.330663467239496,
        "gradePct": -0.08071107881904711,
        "smoothedEle": 0.09897548550182572,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45595,
        "lng": 120.453615,
        "ele": -2,
        "distanceKm": 8.396099572811922,
        "gradePct": 0.026615731548236946,
        "smoothedEle": 0.036786333001145144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456421,
        "lng": 120.453911,
        "ele": 1,
        "distanceKm": 8.456665000012585,
        "gradePct": -0.04839801371526122,
        "smoothedEle": -0.10803645271004969,
        "gradeBand": "descent"
      },
      {
        "lat": 22.456375,
        "lng": 120.453979,
        "ele": 0.75,
        "distanceKm": 8.465324889131235,
        "gradePct": -0.06192424458397731,
        "smoothedEle": -0.12385045347941412,
        "gradeBand": "descent"
      },
      {
        "lat": 22.456421,
        "lng": 120.453911,
        "ele": 1,
        "distanceKm": 8.473984778249886,
        "gradePct": -0.06978592972689629,
        "smoothedEle": -0.12833536279718435,
        "gradeBand": "descent"
      },
      {
        "lat": 22.456459,
        "lng": 120.453935,
        "ele": 1.25,
        "distanceKm": 8.47887730639517,
        "gradePct": -0.06998547817641784,
        "smoothedEle": -0.12238513052554247,
        "gradeBand": "descent"
      },
      {
        "lat": 22.456913,
        "lng": 120.454306,
        "ele": 2,
        "distanceKm": 8.542138753142657,
        "gradePct": -0.0063828851855573885,
        "smoothedEle": 0.07530383528383111,
        "gradeBand": "descent"
      },
      {
        "lat": 22.457186,
        "lng": 120.454529,
        "ele": 1,
        "distanceKm": 8.580173598251097,
        "gradePct": 0.13249276168458315,
        "smoothedEle": 0.31690758078454606,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.457535999999998,
        "lng": 120.4548315,
        "ele": 0.625,
        "distanceKm": 8.629982737433835,
        "gradePct": 0.32895916352701565,
        "smoothedEle": 0.6136839438469204,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.457886,
        "lng": 120.455134,
        "ele": 0.25,
        "distanceKm": 8.67979182763124,
        "gradePct": 0.4559951765765906,
        "smoothedEle": 0.7924630573226155,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.458238897147055,
        "lng": 120.45550581515162,
        "ele": 0.6080938213281348,
        "distanceKm": 8.734561321983414,
        "gradePct": 0.3164206702127184,
        "smoothedEle": 0.6844660692964497,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.458589,
        "lng": 120.455881,
        "ele": 1,
        "distanceKm": 8.789351676036567,
        "gradePct": 0.0892210192493013,
        "smoothedEle": 0.5500350964820713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.458927,
        "lng": 120.456324,
        "ele": 0.5,
        "distanceKm": 8.84838493516111,
        "gradePct": -0.1594986913215418,
        "smoothedEle": 0.36073732789417856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.459265,
        "lng": 120.456767,
        "ele": 0,
        "distanceKm": 8.907418108680096,
        "gradePct": -0.25129148096368803,
        "smoothedEle": 0.2354053338709463,
        "gradeBand": "descent"
      },
      {
        "lat": 22.459573,
        "lng": 120.457215,
        "ele": 0,
        "distanceKm": 8.964796927769594,
        "gradePct": -0.1827585229940112,
        "smoothedEle": 0.24476439775325795,
        "gradeBand": "descent"
      },
      {
        "lat": 22.459766,
        "lng": 120.457508,
        "ele": 0.5,
        "distanceKm": 9.001771324298634,
        "gradePct": -0.11621420487275312,
        "smoothedEle": 0.2777814807845123,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45997,
        "lng": 120.458019,
        "ele": 0,
        "distanceKm": 9.058972083108163,
        "gradePct": 0.005648310400694876,
        "smoothedEle": 0.34955661461159976,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.460038,
        "lng": 120.458421,
        "ele": -0.75,
        "distanceKm": 9.100968119189808,
        "gradePct": 0.09175646377771961,
        "smoothedEle": 0.4326120880675458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.459994,
        "lng": 120.458997,
        "ele": 0,
        "distanceKm": 9.160360047431283,
        "gradePct": 0.16150540474423147,
        "smoothedEle": 0.567051507326257,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4598586241377,
        "lng": 120.459471460165,
        "ele": 0.752088123890307,
        "distanceKm": 9.211386762436884,
        "gradePct": 0.19045146948665714,
        "smoothedEle": 0.670749807936978,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4597232482754,
        "lng": 120.45994592033003,
        "ele": 1.5041762477806409,
        "distanceKm": 9.262413522946572,
        "gradePct": 0.1833215593987476,
        "smoothedEle": 0.723005861839729,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.459586867992854,
        "lng": 120.46042004227802,
        "ele": 1.6494192061730004,
        "distanceKm": 9.31344020253032,
        "gradePct": 0.1516381259330407,
        "smoothedEle": 0.7641201163869421,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.45945,
        "lng": 120.460894,
        "ele": 1.5,
        "distanceKm": 9.364466963174557,
        "gradePct": 0.1402000669529171,
        "smoothedEle": 0.8557978611147986,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4593185719177,
        "lng": 120.46133743050417,
        "ele": 1.117529159570599,
        "distanceKm": 9.412320468178148,
        "gradePct": 0.11505545698906995,
        "smoothedEle": 0.9018169217023946,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.459187381278465,
        "lng": 120.46178095366945,
        "ele": 0.9116861063803993,
        "distanceKm": 9.460175026416731,
        "gradePct": 0.07561857119123737,
        "smoothedEle": 0.8719505797344247,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.459056190639235,
        "lng": 120.46222447683472,
        "ele": 0.7058430531901997,
        "distanceKm": 9.508029625741386,
        "gradePct": 0.0007971781306954668,
        "smoothedEle": 0.7613549526254337,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.458925,
        "lng": 120.462668,
        "ele": 0.5,
        "distanceKm": 9.55588426615213,
        "gradePct": -0.1237254798109692,
        "smoothedEle": 0.5929267122281645,
        "gradeBand": "descent"
      },
      {
        "lat": 22.458788333333334,
        "lng": 120.46313766666667,
        "ele": 0.33333333333333137,
        "distanceKm": 9.606483806468553,
        "gradePct": -0.2504091034535405,
        "smoothedEle": 0.3953857991097671,
        "gradeBand": "descent"
      },
      {
        "lat": 22.458651666666665,
        "lng": 120.46360733333333,
        "ele": 0.16666666666666868,
        "distanceKm": 9.65708339217506,
        "gradePct": -0.33444927247131245,
        "smoothedEle": 0.20498154388979145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.458515,
        "lng": 120.464077,
        "ele": 0,
        "distanceKm": 9.70768302327394,
        "gradePct": -0.3656935470354637,
        "smoothedEle": 0.030768883279103904,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4583785,
        "lng": 120.4645,
        "ele": -0.125,
        "distanceKm": 9.753724956795988,
        "gradePct": -0.35933672196465755,
        "smoothedEle": -0.11814686944731728,
        "gradeBand": "descent"
      },
      {
        "lat": 22.458242,
        "lng": 120.464923,
        "ele": -0.25,
        "distanceKm": 9.799766930731984,
        "gradePct": -0.33824882790820593,
        "smoothedEle": -0.25488913298213645,
        "gradeBand": "descent"
      },
      {
        "lat": 22.458077666666664,
        "lng": 120.46537666666667,
        "ele": -0.41666666666666663,
        "distanceKm": 9.849839842740137,
        "gradePct": -0.31182636547140036,
        "smoothedEle": -0.391413994804331,
        "gradeBand": "descent"
      },
      {
        "lat": 22.457913333333334,
        "lng": 120.46583033333333,
        "ele": -0.5833333333333333,
        "distanceKm": 9.899912806206029,
        "gradePct": -0.28799385523254734,
        "smoothedEle": -0.5184662568702474,
        "gradeBand": "descent"
      },
      {
        "lat": 22.457749,
        "lng": 120.466284,
        "ele": -0.75,
        "distanceKm": 9.949985821132318,
        "gradePct": -0.2741265799365566,
        "smoothedEle": -0.6543063538531507,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45759425,
        "lng": 120.46667599999999,
        "ele": -0.8124999999999993,
        "distanceKm": 9.993789937671492,
        "gradePct": -0.25741500074911244,
        "smoothedEle": -0.7519677765268618,
        "gradeBand": "descent"
      },
      {
        "lat": 22.4574395,
        "lng": 120.467068,
        "ele": -0.8749999999999987,
        "distanceKm": 10.037594095568851,
        "gradePct": -0.2370358122192883,
        "smoothedEle": -0.8320973285799422,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45728475,
        "lng": 120.46746,
        "ele": -0.9375000000000007,
        "distanceKm": 10.081398294822788,
        "gradePct": -0.2119135888776794,
        "smoothedEle": -0.89531577663482,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45713,
        "lng": 120.467852,
        "ele": -1,
        "distanceKm": 10.125202535431699,
        "gradePct": -0.1765630424964944,
        "smoothedEle": -0.9401993405778838,
        "gradeBand": "descent"
      },
      {
        "lat": 22.456971,
        "lng": 120.468308,
        "ele": -1.25,
        "distanceKm": 10.175286707002932,
        "gradePct": -0.12858509314839245,
        "smoothedEle": -0.9678849488623841,
        "gradeBand": "descent"
      },
      {
        "lat": 22.456841659688404,
        "lng": 120.46879819572638,
        "ele": -1.1486361194400898,
        "distanceKm": 10.227673462408177,
        "gradePct": -0.07845403522093342,
        "smoothedEle": -0.9708579004873001,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45671231937681,
        "lng": 120.46928839145276,
        "ele": -1.0472722388801796,
        "distanceKm": 10.280060263009371,
        "gradePct": -0.0324034691733865,
        "smoothedEle": -0.9581916605134613,
        "gradeBand": "descent"
      },
      {
        "lat": 22.45658331089683,
        "lng": 120.46977868833122,
        "ele": -0.9591622454401925,
        "distanceKm": 10.33244698828045,
        "gradePct": 0.007158825235837188,
        "smoothedEle": -0.9298862903125007,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456454592414023,
        "lng": 120.47026907360934,
        "ele": -0.8826352045334932,
        "distanceKm": 10.384833676302138,
        "gradePct": 0.04124245663172219,
        "smoothedEle": -0.8859418266999834,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.45632587393122,
        "lng": 120.47075945888749,
        "ele": -0.8061081636267967,
        "distanceKm": 10.437220409338025,
        "gradePct": 0.07674120550981905,
        "smoothedEle": -0.815067199603742,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456197155448415,
        "lng": 120.47124984416561,
        "ele": -0.7295811227200975,
        "distanceKm": 10.489607187385275,
        "gradePct": 0.10440842633870794,
        "smoothedEle": -0.7442164546971122,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.45606843696561,
        "lng": 120.47174022944374,
        "ele": -0.6530540818133983,
        "distanceKm": 10.541994010444943,
        "gradePct": 0.1193334762612642,
        "smoothedEle": -0.6832108382272254,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455939718482806,
        "lng": 120.47223061472188,
        "ele": -0.5765270409066992,
        "distanceKm": 10.594380878518086,
        "gradePct": 0.12575295324186314,
        "smoothedEle": -0.621519398080697,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455811,
        "lng": 120.472721,
        "ele": -0.5,
        "distanceKm": 10.646767791601867,
        "gradePct": 0.1221369481983271,
        "smoothedEle": -0.5578809010606629,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455672,
        "lng": 120.4732805,
        "ele": -0.5,
        "distanceKm": 10.706305298961896,
        "gradePct": 0.11764562850393195,
        "smoothedEle": -0.4894798766883081,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455533,
        "lng": 120.47384,
        "ele": -0.5,
        "distanceKm": 10.765842861996203,
        "gradePct": 0.11381892623594878,
        "smoothedEle": -0.42748827574777765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.45543,
        "lng": 120.47424333333333,
        "ele": -0.4166666666666667,
        "distanceKm": 10.808844240535016,
        "gradePct": 0.11134131902555587,
        "smoothedEle": -0.3812669784480271,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455327,
        "lng": 120.47464666666666,
        "ele": -0.33333333333333337,
        "distanceKm": 10.851845648755555,
        "gradePct": 0.11089653764240061,
        "smoothedEle": -0.33025401367438434,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455224,
        "lng": 120.47505,
        "ele": -0.25,
        "distanceKm": 10.894847086660505,
        "gradePct": 0.10912891577990597,
        "smoothedEle": -0.28438607388353987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4551265,
        "lng": 120.475416,
        "ele": -0.25,
        "distanceKm": 10.933990107321302,
        "gradePct": 0.10770544700543544,
        "smoothedEle": -0.24524305322274306,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455029,
        "lng": 120.475782,
        "ele": -0.25,
        "distanceKm": 10.973133153399587,
        "gradePct": 0.10677604216359671,
        "smoothedEle": -0.20610000714445773,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4549015,
        "lng": 120.476299,
        "ele": -0.12499999999999795,
        "distanceKm": 11.028121354745801,
        "gradePct": 0.10364327767238388,
        "smoothedEle": -0.15111180579824354,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.454774,
        "lng": 120.476816,
        "ele": 0,
        "distanceKm": 11.083109603302601,
        "gradePct": 0.11043666369182584,
        "smoothedEle": -0.07603265760487014,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.454679,
        "lng": 120.477268,
        "ele": 0,
        "distanceKm": 11.1307451699309,
        "gradePct": 0.1340520035463337,
        "smoothedEle": 0.019616016479522935,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.454621,
        "lng": 120.477687,
        "ele": 0,
        "distanceKm": 11.174283811538224,
        "gradePct": 0.1501886852641963,
        "smoothedEle": 0.09542802152257157,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.454585,
        "lng": 120.478256,
        "ele": 0,
        "distanceKm": 11.232893697861615,
        "gradePct": 0.16711996832481016,
        "smoothedEle": 0.18964413136831726,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.454703,
        "lng": 120.478766,
        "ele": 0,
        "distanceKm": 11.286921087827498,
        "gradePct": 0.17595905676137394,
        "smoothedEle": 0.2835386332999007,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.454875,
        "lng": 120.479063,
        "ele": 0.5,
        "distanceKm": 11.32293941593979,
        "gradePct": 0.17635858790901165,
        "smoothedEle": 0.35665981896907173,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455182,
        "lng": 120.479358,
        "ele": 0.75,
        "distanceKm": 11.368594136957856,
        "gradePct": 0.19070844159412131,
        "smoothedEle": 0.46693771371780013,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.455733,
        "lng": 120.479605,
        "ele": 0.5,
        "distanceKm": 11.434912373432198,
        "gradePct": 0.26897334339803114,
        "smoothedEle": 0.7310990856816708,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456122,
        "lng": 120.47974400000001,
        "ele": 0.625,
        "distanceKm": 11.480464779405748,
        "gradePct": 0.33270492830783144,
        "smoothedEle": 0.9377280355504775,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456511,
        "lng": 120.479883,
        "ele": 0.75,
        "distanceKm": 11.526017172809334,
        "gradePct": 0.39938912208737026,
        "smoothedEle": 1.1628723117944066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456748,
        "lng": 120.480124,
        "ele": 1,
        "distanceKm": 11.562181276264013,
        "gradePct": 0.44731650844802545,
        "smoothedEle": 1.346080617853024,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.45688,
        "lng": 120.480454,
        "ele": 1.25,
        "distanceKm": 11.599133186801325,
        "gradePct": 0.4641288101038119,
        "smoothedEle": 1.516839661850893,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456855,
        "lng": 120.480923,
        "ele": 2,
        "distanceKm": 11.647409073186296,
        "gradePct": 0.4734342861342606,
        "smoothedEle": 1.734653575890824,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456709166666666,
        "lng": 120.48134883333334,
        "ele": 2.208333333333331,
        "distanceKm": 11.694076878700006,
        "gradePct": 0.46890566547214474,
        "smoothedEle": 1.9428176369604606,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456563333333335,
        "lng": 120.48177466666667,
        "ele": 2.416666666666669,
        "distanceKm": 11.740744727380493,
        "gradePct": 0.42503447579761644,
        "smoothedEle": 2.0875514449678794,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.4564175,
        "lng": 120.4822005,
        "ele": 2.625,
        "distanceKm": 11.787412619230508,
        "gradePct": 0.39446526218394756,
        "smoothedEle": 2.2516080905543667,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456271666666666,
        "lng": 120.48262633333334,
        "ele": 2.8333333333333304,
        "distanceKm": 11.834080554248287,
        "gradePct": 0.3747959199804308,
        "smoothedEle": 2.4241090393780906,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.456125833333335,
        "lng": 120.48305216666667,
        "ele": 3.0416666666666696,
        "distanceKm": 11.880748532432062,
        "gradePct": 0.35326767477579324,
        "smoothedEle": 2.5899012369400105,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.45598,
        "lng": 120.483478,
        "ele": 3.25,
        "distanceKm": 11.927416553784585,
        "gradePct": 0.3241210190866393,
        "smoothedEle": 2.6944580161577347,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 11.927416553784585,
      "elevationGainM": 7.193181699607615,
      "elevationLossM": 6.460004103269128,
      "minimumElevationM": -2.75,
      "maximumElevationM": 3.25,
      "maximumSustainedGradePct": 0.7467276592218404
    },
    "climbs": []
  },
  "pingtung-shouka-mudan": {
    "routeId": "pingtung-shouka-mudan",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T15:42:57.745Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "0169be6559b5509890e31f421776139e4290cefb46a719c10c360c93429acfd9",
      "roadPolicyAuditSha256": "ac5bea658bff74f43c6bcd7683cddcad4554381c62683bc4b46bf7101165ffc9",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "縣道199爬升壽卡後由台9戊與台9一般道路下降，沿線有髮夾彎及陡峭側坡；預設100公尺分析為爬升1527公尺、最大持續坡度24.7%，短距離尖峰明顯偏高。比較500/200、750/300、1000/500公尺後，爬升依序為731、661、618公尺，最大持續坡度依序為7.3%、6.3%、6.2%；國立臺灣科學教育館資料記載壽卡海拔約460公尺、東源後連續數公里約3%至6%，本軌跡最高468公尺，500/200最接近路段尺度且保留真實長爬坡，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://twsf.ntsec.gov.tw/activity/race-1/65/pdf/NPHSF2025-032807.pdf",
        "referenceLabel": "國立臺灣科學教育館壽卡海拔與東源後3%至6%坡度資料"
      },
      "reviewedAt": "2026-07-29T16:15:00.000Z",
      "reviewerNote": "初版車城點導入steps／pedestrian，石門點導入path／footway，東源點導入footway 296公尺往返，楓港點導入footway 8公尺；最嚴重的是草埔研究點偏離正式道路，導入track 5054公尺往返、concrete grade1 track 2972公尺往返及asphalt grade1 track 144公尺往返，均未採用。重建時把199沿線景點移到secondary主線，並以現行ref=9戊 primary ways 345069464、386557627、724352236、724352237、724352952、724352953、763170624逐段固定壽卡至草埔，再以不含motorroad與tunnel的ref=9一般道路節點加密至楓港；精確路廊範例：https://www.openstreetmap.org/way/345069464；https://www.openstreetmap.org/way/724352952；https://www.openstreetmap.org/way/380718566；https://www.openstreetmap.org/way/300963447。最終raw的tunnel、motorroad、trunk、track、service、footway、pedestrian、path、steps、private、access禁制與bicycle=no全為零；21436公尺oneway=yes全部順向，沒有reversedirection=yes與oneway=yes同段。軌跡明確不使用草埔隧道、森永隧道、安朔高架、河床便道、牡丹水庫管理道路、199甲、林道或產業道路。500/200公尺分析為81.4公里、爬升731公尺、最大7.3%，三組比較已記於elevationAnalysis。縣道199官方起訖與里程：https://www.thb.gov.tw/News.aspx?PageSize=200&n=107&page=1&sms=13789；台9戊替代道路：https://www.thb.gov.tw/News_Content_table.aspx?n=12181&s=275170&sms=14672；道路改善、落石與豪雨管制須出發前查核。"
    },
    "waypoints": [
      {
        "name": "車城東側縣道199主線",
        "lat": 22.072264,
        "lng": 120.720304,
        "role": "start"
      },
      {
        "name": "石門古戰場外縣道199主線",
        "lat": 22.112339,
        "lng": 120.761589,
        "role": "via"
      },
      {
        "name": "牡丹大橋縣道199",
        "lat": 22.140621,
        "lng": 120.779828,
        "role": "via"
      },
      {
        "name": "東源村縣道199主線",
        "lat": 22.205344,
        "lng": 120.854436,
        "role": "via"
      },
      {
        "name": "壽卡縣道199與台9戊",
        "lat": 22.2452,
        "lng": 120.83571,
        "role": "via"
      },
      {
        "name": "壽卡西側台9戊主線",
        "lat": 22.2435416,
        "lng": 120.8251117,
        "role": "via"
      },
      {
        "name": "渡月橋西側台9戊主線",
        "lat": 22.2406171,
        "lng": 120.8084833,
        "role": "via"
      },
      {
        "name": "遊仙橋西側台9戊主線",
        "lat": 22.2387398,
        "lng": 120.8039067,
        "role": "via"
      },
      {
        "name": "台9戊與台9一般道路銜接",
        "lat": 22.2380885,
        "lng": 120.8036506,
        "role": "via"
      },
      {
        "name": "草埔東側台9一般道路",
        "lat": 22.2295669,
        "lng": 120.79876,
        "role": "via"
      },
      {
        "name": "草埔台9一般道路",
        "lat": 22.2195074,
        "lng": 120.7940678,
        "role": "via"
      },
      {
        "name": "草埔西側台9一般道路",
        "lat": 22.2149447,
        "lng": 120.7921742,
        "role": "via"
      },
      {
        "name": "伊屯橋台9一般道路",
        "lat": 22.2142071,
        "lng": 120.7887981,
        "role": "via"
      },
      {
        "name": "丹路東側台9一般道路",
        "lat": 22.2124705,
        "lng": 120.7646954,
        "role": "via"
      },
      {
        "name": "丹路台9一般道路",
        "lat": 22.2092172,
        "lng": 120.7550101,
        "role": "via"
      },
      {
        "name": "沙布鐵橋台9一般道路",
        "lat": 22.2044675,
        "lng": 120.7458213,
        "role": "via"
      },
      {
        "name": "丹路西側台9一般道路",
        "lat": 22.2059792,
        "lng": 120.7405699,
        "role": "via"
      },
      {
        "name": "上牡丹台9一般道路",
        "lat": 22.2066427,
        "lng": 120.721025,
        "role": "via"
      },
      {
        "name": "楓港台9一般道路",
        "lat": 22.2052208,
        "lng": 120.6889048,
        "role": "via"
      },
      {
        "name": "車城東側縣道199主線",
        "lat": 22.072264,
        "lng": 120.720304,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 22.072264,
        "lng": 120.720304,
        "ele": 7.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 7.776600181079184,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072237783047395,
        "lng": 120.72080093041984,
        "ele": 7.75,
        "distanceKm": 0.05128944434565301,
        "gradePct": 0.15965349420223138,
        "smoothedEle": 7.858485571133928,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07221156609479,
        "lng": 120.7212978608397,
        "ele": 7.75,
        "distanceKm": 0.10257889817840042,
        "gradePct": 0.19751009016083484,
        "smoothedEle": 7.9792038553573335,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072185349142185,
        "lng": 120.72179479125954,
        "ele": 7.75,
        "distanceKm": 0.15386836149530753,
        "gradePct": 0.22575145100663285,
        "smoothedEle": 8.123960239794972,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07215913218958,
        "lng": 120.7222917216794,
        "ele": 7.75,
        "distanceKm": 0.20515783429928763,
        "gradePct": 0.24989684445253113,
        "smoothedEle": 8.28462853266822,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07213224592163,
        "lng": 120.72278860994919,
        "ele": 8.09640252183227,
        "distanceKm": 0.25644726467850765,
        "gradePct": 0.2974286075822965,
        "smoothedEle": 8.465482576730784,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072105196737304,
        "lng": 120.72328548795936,
        "ele": 8.527122017465816,
        "distanceKm": 0.30773670854795054,
        "gradePct": 0.3779924886429331,
        "smoothedEle": 8.7497459352609,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07207814755298,
        "lng": 120.72378236596951,
        "ele": 8.957841513099362,
        "distanceKm": 0.3590261622005653,
        "gradePct": 0.4855076237838061,
        "smoothedEle": 9.111132702264388,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07205109836865,
        "lng": 120.72427924397968,
        "ele": 9.388561008732909,
        "distanceKm": 0.4103156256392875,
        "gradePct": 0.6234136244160027,
        "smoothedEle": 9.549642909245122,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072024049184325,
        "lng": 120.72477612198983,
        "ele": 9.819280504366453,
        "distanceKm": 0.4616050988611356,
        "gradePct": 0.7958850367095485,
        "smoothedEle": 10.08583910297295,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.071997,
        "lng": 120.725273,
        "ele": 10.25,
        "distanceKm": 0.5128945818690452,
        "gradePct": 1.006412906020845,
        "smoothedEle": 10.798914251099742,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.071970666666665,
        "lng": 120.72581866666667,
        "ele": 11.083333333333334,
        "distanceKm": 0.5691994682073731,
        "gradePct": 1.2613418099478508,
        "smoothedEle": 11.720795171686436,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.071944333333334,
        "lng": 120.72636433333334,
        "ele": 11.916666666666666,
        "distanceKm": 0.6255043650104902,
        "gradePct": 1.5214084656330362,
        "smoothedEle": 12.751247672141599,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.071918,
        "lng": 120.72691,
        "ele": 12.75,
        "distanceKm": 0.6818092722784257,
        "gradePct": 1.681069948757508,
        "smoothedEle": 13.728876625252319,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07192257350605,
        "lng": 120.72736272943213,
        "ele": 14.551153960426001,
        "distanceKm": 0.7284639627958365,
        "gradePct": 1.730290738225076,
        "smoothedEle": 14.514413482565143,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.071949,
        "lng": 120.727815,
        "ele": 16.25,
        "distanceKm": 0.7751611388853104,
        "gradePct": 1.7296905518332877,
        "smoothedEle": 15.289282566382225,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072078,
        "lng": 120.728457,
        "ele": 18,
        "distanceKm": 0.8428538011944678,
        "gradePct": 1.6354885539799187,
        "smoothedEle": 16.323465150730062,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072208,
        "lng": 120.728787,
        "ele": 18,
        "distanceKm": 0.8798038237557482,
        "gradePct": 1.5851229461073166,
        "smoothedEle": 16.86430167085028,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072394,
        "lng": 120.729241,
        "ele": 18,
        "distanceKm": 0.9309543834399213,
        "gradePct": 1.5375224508978458,
        "smoothedEle": 17.630783152246234,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072558,
        "lng": 120.729523,
        "ele": 18.25,
        "distanceKm": 0.9652613400389001,
        "gradePct": 1.5032857193923497,
        "smoothedEle": 18.13158180062519,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072637,
        "lng": 120.729611,
        "ele": 18.5,
        "distanceKm": 0.9778864916744077,
        "gradePct": 1.4820995265312003,
        "smoothedEle": 18.295118516185603,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072827,
        "lng": 120.729687,
        "ele": 18.5,
        "distanceKm": 1.0004183449052395,
        "gradePct": 1.455913349192079,
        "smoothedEle": 18.58697919075336,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07315,
        "lng": 120.729759,
        "ele": 18.25,
        "distanceKm": 1.0370926561858123,
        "gradePct": 1.3680164093594667,
        "smoothedEle": 18.971481401173943,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0736025,
        "lng": 120.7298705,
        "ele": 18.875,
        "distanceKm": 1.0887035632776583,
        "gradePct": 1.2246590316639507,
        "smoothedEle": 19.446980650948415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.074055,
        "lng": 120.729982,
        "ele": 19.5,
        "distanceKm": 1.1403144621778971,
        "gradePct": 1.0676516586430849,
        "smoothedEle": 19.90272099632801,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.074429,
        "lng": 120.730151,
        "ele": 20.5,
        "distanceKm": 1.1854003705235148,
        "gradePct": 0.9779471670455921,
        "smoothedEle": 20.348341983706433,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.074795666666667,
        "lng": 120.73041955555556,
        "ele": 21.02777777777778,
        "distanceKm": 1.2346762669365987,
        "gradePct": 0.9568174153968274,
        "smoothedEle": 20.859782231815526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07516233333333,
        "lng": 120.73068811111112,
        "ele": 21.555555555555554,
        "distanceKm": 1.2839521230166462,
        "gradePct": 1.001594297582262,
        "smoothedEle": 21.406393493917015,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.075529,
        "lng": 120.73095666666667,
        "ele": 22.083333333333332,
        "distanceKm": 1.3332279387621013,
        "gradePct": 1.0782502097091575,
        "smoothedEle": 21.996645202235726,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.075895666666668,
        "lng": 120.73122522222222,
        "ele": 22.61111111111111,
        "distanceKm": 1.3825037141728949,
        "gradePct": 1.130261088304808,
        "smoothedEle": 22.580234131324193,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.076262333333332,
        "lng": 120.73149377777779,
        "ele": 23.13888888888889,
        "distanceKm": 1.4317794492489575,
        "gradePct": 1.1414768654172058,
        "smoothedEle": 23.112669555648957,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.076629,
        "lng": 120.73176233333334,
        "ele": 23.666666666666668,
        "distanceKm": 1.4810551439887336,
        "gradePct": 1.0971333762257953,
        "smoothedEle": 23.568524399552338,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07699566666667,
        "lng": 120.73203088888889,
        "ele": 24.194444444444446,
        "distanceKm": 1.5303307983921537,
        "gradePct": 1.0083679000567083,
        "smoothedEle": 23.978677527089914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.077362333333333,
        "lng": 120.73229944444445,
        "ele": 24.72222222222222,
        "distanceKm": 1.5796064124591485,
        "gradePct": 0.8986042810161712,
        "smoothedEle": 24.343129013048603,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.077729,
        "lng": 120.732568,
        "ele": 25.25,
        "distanceKm": 1.6288819861881623,
        "gradePct": 0.7810411975878131,
        "smoothedEle": 24.643444209359977,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.078087500000002,
        "lng": 120.7328285,
        "ele": 25.3125,
        "distanceKm": 1.6769403243649978,
        "gradePct": 0.6703210483275408,
        "smoothedEle": 24.871099849614723,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.078446,
        "lng": 120.733089,
        "ele": 25.375,
        "distanceKm": 1.7249986244928777,
        "gradePct": 0.5521977420596118,
        "smoothedEle": 25.038689880678646,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0788045,
        "lng": 120.7333495,
        "ele": 25.4375,
        "distanceKm": 1.7730568865703007,
        "gradePct": 0.42576344530921356,
        "smoothedEle": 25.146214408056846,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.079163,
        "lng": 120.73361,
        "ele": 25.5,
        "distanceKm": 1.8211151105972367,
        "gradePct": 0.2987826863737749,
        "smoothedEle": 25.19367353726222,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07966,
        "lng": 120.733801,
        "ele": 25.25,
        "distanceKm": 1.8797788616965692,
        "gradePct": 0.19584918928251763,
        "smoothedEle": 25.272696842119668,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.08013725,
        "lng": 120.733876,
        "ele": 25.125,
        "distanceKm": 1.9334064573504586,
        "gradePct": 0.4143337313960665,
        "smoothedEle": 25.886168848822965,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0806145,
        "lng": 120.73395099999999,
        "ele": 25,
        "distanceKm": 1.9870340492414325,
        "gradePct": 0.9302561383436674,
        "smoothedEle": 27.02052960781437,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.08109175,
        "lng": 120.734026,
        "ele": 24.875,
        "distanceKm": 2.040661637369637,
        "gradePct": 1.6929165268381792,
        "smoothedEle": 28.605836839432648,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.081569,
        "lng": 120.734101,
        "ele": 24.75,
        "distanceKm": 2.094289221734586,
        "gradePct": 2.3481690848174748,
        "smoothedEle": 30.135026038985465,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0820185,
        "lng": 120.73403549999999,
        "ele": 29.75000000000002,
        "distanceKm": 2.1447250091983285,
        "gradePct": 2.8379354064983344,
        "smoothedEle": 31.801455988604097,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.082468,
        "lng": 120.73397,
        "ele": 34.75,
        "distanceKm": 2.1951607937870836,
        "gradePct": 2.744937923304179,
        "smoothedEle": 32.75064349882136,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.083014,
        "lng": 120.733979,
        "ele": 40.25,
        "distanceKm": 2.255880389441085,
        "gradePct": 2.305844951533524,
        "smoothedEle": 33.65148906942377,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.083485,
        "lng": 120.734258,
        "ele": 39.75,
        "distanceKm": 2.3156243253660915,
        "gradePct": 1.8530325782635533,
        "smoothedEle": 34.546016357934526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.083923,
        "lng": 120.734694,
        "ele": 42,
        "distanceKm": 2.3818830284188928,
        "gradePct": 1.4607294878987624,
        "smoothedEle": 35.422218604389734,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.084113,
        "lng": 120.735108,
        "ele": 32.5,
        "distanceKm": 2.4294855794634933,
        "gradePct": 1.1765873587606306,
        "smoothedEle": 35.6130661914884,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.08417925,
        "lng": 120.73562575,
        "ele": 32.4375,
        "distanceKm": 2.483339210132326,
        "gradePct": 0.7470503627826688,
        "smoothedEle": 35.55672213902267,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0842455,
        "lng": 120.7361435,
        "ele": 32.375,
        "distanceKm": 2.5371928160088113,
        "gradePct": 0.20743185852707294,
        "smoothedEle": 35.24610086988922,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.08431175,
        "lng": 120.73666125,
        "ele": 32.3125,
        "distanceKm": 2.5910463970927706,
        "gradePct": -0.11019816192196777,
        "smoothedEle": 35.2385599503288,
        "gradeBand": "descent"
      },
      {
        "lat": 22.084378,
        "lng": 120.737179,
        "ele": 32.25,
        "distanceKm": 2.6448999533841873,
        "gradePct": -0.16145561677174655,
        "smoothedEle": 35.27402775756626,
        "gradeBand": "descent"
      },
      {
        "lat": 22.0844308,
        "lng": 120.7376124,
        "ele": 34.25000000000001,
        "distanceKm": 2.6899403997510274,
        "gradePct": 0.37244322559234144,
        "smoothedEle": 36.26353370434262,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0844836,
        "lng": 120.7380458,
        "ele": 36.24999999999999,
        "distanceKm": 2.734980829561749,
        "gradePct": 1.1976373311902033,
        "smoothedEle": 37.65413401011545,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0845364,
        "lng": 120.7384792,
        "ele": 38.25000000000001,
        "distanceKm": 2.780021242819269,
        "gradePct": 1.9977246172591112,
        "smoothedEle": 39.235552996787554,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0845892,
        "lng": 120.73891259999999,
        "ele": 40.24999999999999,
        "distanceKm": 2.825061639520545,
        "gradePct": 2.8390528116591875,
        "smoothedEle": 40.9390679207649,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.084642,
        "lng": 120.739346,
        "ele": 42.25,
        "distanceKm": 2.8701020196684928,
        "gradePct": 3.550162955328063,
        "smoothedEle": 42.92802478986855,
        "gradeBand": "hard"
      },
      {
        "lat": 22.084807,
        "lng": 120.740033,
        "ele": 47,
        "distanceKm": 2.9432272212638577,
        "gradePct": 4.1848677087980555,
        "smoothedEle": 46.31340940894326,
        "gradeBand": "hard"
      },
      {
        "lat": 22.08479345657334,
        "lng": 120.74056574320701,
        "ele": 49.82769859356495,
        "distanceKm": 2.998139881459452,
        "gradePct": 4.330224083308767,
        "smoothedEle": 48.581283123295776,
        "gradeBand": "hard"
      },
      {
        "lat": 22.084753,
        "lng": 120.741098,
        "ele": 51.25,
        "distanceKm": 3.0531659747078157,
        "gradePct": 4.10058176874157,
        "smoothedEle": 50.38130247804627,
        "gradeBand": "hard"
      },
      {
        "lat": 22.08485887659599,
        "lng": 120.74150111770234,
        "ele": 54.273344857715664,
        "distanceKm": 3.0963380582759843,
        "gradePct": 3.619282552425844,
        "smoothedEle": 51.381206465061176,
        "gradeBand": "hard"
      },
      {
        "lat": 22.085009,
        "lng": 120.741889,
        "ele": 56.75,
        "distanceKm": 3.139650149050972,
        "gradePct": 3.0864772818433233,
        "smoothedEle": 52.32076080181293,
        "gradeBand": "hard"
      },
      {
        "lat": 22.08513,
        "lng": 120.742297,
        "ele": 55.25,
        "distanceKm": 3.18378957326797,
        "gradePct": 2.641463497055765,
        "smoothedEle": 53.27154739401349,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.085307,
        "lng": 120.742651,
        "ele": 56.5,
        "distanceKm": 3.2252356235664634,
        "gradePct": 2.3714201409551143,
        "smoothedEle": 54.21048217328734,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.085546,
        "lng": 120.742954,
        "ele": 55.5,
        "distanceKm": 3.266234985096662,
        "gradePct": 2.168211557548007,
        "smoothedEle": 55.020415537988534,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.085764,
        "lng": 120.743169,
        "ele": 52.25,
        "distanceKm": 3.299073165214158,
        "gradePct": 1.976535082526196,
        "smoothedEle": 55.39360836726269,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.086144,
        "lng": 120.743351,
        "ele": 51.5,
        "distanceKm": 3.3453015931762917,
        "gradePct": 1.3935445847721355,
        "smoothedEle": 55.22958507316796,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.086574,
        "lng": 120.743512,
        "ele": 55,
        "distanceKm": 3.3959113985998406,
        "gradePct": 0.30223287295037665,
        "smoothedEle": 54.15062563761682,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.08692,
        "lng": 120.743568,
        "ele": 57.25,
        "distanceKm": 3.434815158476477,
        "gradePct": -0.7021472980679342,
        "smoothedEle": 52.99542918122437,
        "gradeBand": "descent"
      },
      {
        "lat": 22.08735,
        "lng": 120.743606,
        "ele": 60.75,
        "distanceKm": 3.482789081657186,
        "gradePct": -1.9426525891069473,
        "smoothedEle": 51.32324106949713,
        "gradeBand": "descent"
      },
      {
        "lat": 22.087708,
        "lng": 120.743748,
        "ele": 57.25,
        "distanceKm": 3.525200487534065,
        "gradePct": -2.796022806148423,
        "smoothedEle": 49.70886028460937,
        "gradeBand": "descent"
      },
      {
        "lat": 22.087999,
        "lng": 120.743936,
        "ele": 52.5,
        "distanceKm": 3.562913076736782,
        "gradePct": -3.1783371662255187,
        "smoothedEle": 48.49744839300351,
        "gradeBand": "descent"
      },
      {
        "lat": 22.08824,
        "lng": 120.744177,
        "ele": 47,
        "distanceKm": 3.5994469368874222,
        "gradePct": -3.304008286785707,
        "smoothedEle": 47.43762586154248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.088516,
        "lng": 120.744494,
        "ele": 42.75,
        "distanceKm": 3.6442649719897178,
        "gradePct": -3.2796485417506966,
        "smoothedEle": 46.10674761617123,
        "gradeBand": "descent"
      },
      {
        "lat": 22.088807,
        "lng": 120.744714,
        "ele": 39.5,
        "distanceKm": 3.683772399794726,
        "gradePct": -3.1957764388753778,
        "smoothedEle": 44.89425840431407,
        "gradeBand": "descent"
      },
      {
        "lat": 22.089085,
        "lng": 120.74492550000001,
        "ele": 37.99999999999999,
        "distanceKm": 3.721593547896326,
        "gradePct": -3.1259034179592513,
        "smoothedEle": 43.594350808281355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.089363,
        "lng": 120.745137,
        "ele": 36.5,
        "distanceKm": 3.7594146712729772,
        "gradePct": -3.2168240799003245,
        "smoothedEle": 42.17617676502175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.089751,
        "lng": 120.745499,
        "ele": 37,
        "distanceKm": 3.8164455065636598,
        "gradePct": -3.1691724134361157,
        "smoothedEle": 40.59450596961227,
        "gradeBand": "descent"
      },
      {
        "lat": 22.090123,
        "lng": 120.745879,
        "ele": 38.5,
        "distanceKm": 3.8734011228143785,
        "gradePct": -2.6822797510434895,
        "smoothedEle": 39.84799503413219,
        "gradeBand": "descent"
      },
      {
        "lat": 22.090387,
        "lng": 120.746285,
        "ele": 41,
        "distanceKm": 3.9245048962300086,
        "gradePct": -1.771738523704981,
        "smoothedEle": 39.941707288035616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09056924640172,
        "lng": 120.74679727876533,
        "ele": 41.5,
        "distanceKm": 3.981042775411173,
        "gradePct": -0.48626995988855937,
        "smoothedEle": 40.60381149635924,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09072,
        "lng": 120.747323,
        "ele": 41.5,
        "distanceKm": 4.037743587960432,
        "gradePct": 0.745379823125986,
        "smoothedEle": 41.80611402882063,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09102,
        "lng": 120.747671,
        "ele": 41.75,
        "distanceKm": 4.08671688845178,
        "gradePct": 1.6486055722955357,
        "smoothedEle": 43.16962414880508,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.091675,
        "lng": 120.747718,
        "ele": 43,
        "distanceKm": 4.1597104718242095,
        "gradePct": 2.3496354171150933,
        "smoothedEle": 45.05326383398634,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0920985,
        "lng": 120.7476925,
        "ele": 44.875,
        "distanceKm": 4.206874822273162,
        "gradePct": 2.412897774922333,
        "smoothedEle": 45.977358197633144,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.092522,
        "lng": 120.747667,
        "ele": 46.75,
        "distanceKm": 4.254039172282945,
        "gradePct": 2.2735868035003026,
        "smoothedEle": 46.80698779308818,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.092952,
        "lng": 120.747641,
        "ele": 50.25,
        "distanceKm": 4.301928038574485,
        "gradePct": 2.0480301113986368,
        "smoothedEle": 47.658216491613324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.093114,
        "lng": 120.747647,
        "ele": 51.25,
        "distanceKm": 4.319952245721243,
        "gradePct": 1.9744196371087472,
        "smoothedEle": 47.976120151347885,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09324,
        "lng": 120.747696,
        "ele": 52,
        "distanceKm": 4.334844646651631,
        "gradePct": 1.9080317569009237,
        "smoothedEle": 48.227651012200326,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09353966666667,
        "lng": 120.74806133333334,
        "ele": 51.41666666666667,
        "distanceKm": 4.3851150974379625,
        "gradePct": 1.7438172907524838,
        "smoothedEle": 49.03865299319159,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09383933333333,
        "lng": 120.74842666666666,
        "ele": 50.83333333333333,
        "distanceKm": 4.435385488387571,
        "gradePct": 1.6152945275571702,
        "smoothedEle": 49.70945511599049,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.094139,
        "lng": 120.748792,
        "ele": 50.25,
        "distanceKm": 4.485655819502459,
        "gradePct": 1.3594659647654752,
        "smoothedEle": 50.087908333929185,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.094483770652314,
        "lng": 120.74920994646423,
        "ele": 50.4259033940368,
        "distanceKm": 4.543309500163863,
        "gradePct": 0.8600216007812016,
        "smoothedEle": 50.08425580928929,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09482570060097,
        "lng": 120.74963056058569,
        "ele": 50.15528098477431,
        "distanceKm": 4.6009598631308934,
        "gradePct": 0.12649705059688177,
        "smoothedEle": 49.503077764831566,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.095171,
        "lng": 120.750048,
        "ele": 49.75,
        "distanceKm": 4.658613518072947,
        "gradePct": -0.5707305504098481,
        "smoothedEle": 48.74286301614705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.095546,
        "lng": 120.750492,
        "ele": 48.75,
        "distanceKm": 4.720511193842045,
        "gradePct": -0.9646601065277229,
        "smoothedEle": 48.15637993377887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09579898800677,
        "lng": 120.75073889809434,
        "ele": 47.80899124419847,
        "distanceKm": 4.758437753212725,
        "gradePct": -0.9742593170578601,
        "smoothedEle": 47.98322801355689,
        "gradeBand": "descent"
      },
      {
        "lat": 22.096046,
        "lng": 120.750994,
        "ele": 47,
        "distanceKm": 4.796453436145374,
        "gradePct": -0.8547909191317118,
        "smoothedEle": 47.83892558716601,
        "gradeBand": "descent"
      },
      {
        "lat": 22.096347,
        "lng": 120.751332,
        "ele": 45.5,
        "distanceKm": 4.844753544923556,
        "gradePct": -0.6302469269013814,
        "smoothedEle": 47.66512524285867,
        "gradeBand": "descent"
      },
      {
        "lat": 22.096786,
        "lng": 120.751675,
        "ele": 44.5,
        "distanceKm": 4.905017003085012,
        "gradePct": -0.4475828790152821,
        "smoothedEle": 47.40802228511712,
        "gradeBand": "descent"
      },
      {
        "lat": 22.097219,
        "lng": 120.75195,
        "ele": 47,
        "distanceKm": 4.960882150676281,
        "gradePct": -0.40307075360568556,
        "smoothedEle": 47.16780790188957,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09755,
        "lng": 120.752221,
        "ele": 48.5,
        "distanceKm": 5.007079545290876,
        "gradePct": -0.34268864791772174,
        "smoothedEle": 47.11531190895269,
        "gradeBand": "descent"
      },
      {
        "lat": 22.0978485,
        "lng": 120.75244450000001,
        "ele": 48.5,
        "distanceKm": 5.047476493332318,
        "gradePct": -0.1845817732570437,
        "smoothedEle": 47.284344737892006,
        "gradeBand": "descent"
      },
      {
        "lat": 22.098147,
        "lng": 120.752668,
        "ele": 48.5,
        "distanceKm": 5.087873413609268,
        "gradePct": 0.04799963595429442,
        "smoothedEle": 47.5771615276645,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.098532,
        "lng": 120.753022,
        "ele": 47.5,
        "distanceKm": 5.144112815783379,
        "gradePct": 0.46327832480773484,
        "smoothedEle": 48.16647096511208,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.098765461577017,
        "lng": 120.75331646401956,
        "ele": 47.10607294213693,
        "distanceKm": 5.18404123115207,
        "gradePct": 0.7727812418003588,
        "smoothedEle": 48.68705377315264,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09899,
        "lng": 120.753619,
        "ele": 47.5,
        "distanceKm": 5.223977369071672,
        "gradePct": 0.920246761489934,
        "smoothedEle": 49.026510945469276,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.099291,
        "lng": 120.753996,
        "ele": 49.5,
        "distanceKm": 5.2752495013862335,
        "gradePct": 0.9422887576970238,
        "smoothedEle": 49.37023470495117,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.099572011264257,
        "lng": 120.75437134835235,
        "ele": 50.01664319946543,
        "distanceKm": 5.324966632302012,
        "gradePct": 0.9175318371880287,
        "smoothedEle": 49.80090970073539,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.099844,
        "lng": 120.754754,
        "ele": 50.5,
        "distanceKm": 5.374654210631111,
        "gradePct": 0.9115797271352186,
        "smoothedEle": 50.3878261640545,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100133,
        "lng": 120.755202,
        "ele": 51.25,
        "distanceKm": 5.430894791708515,
        "gradePct": 1.0932746577191592,
        "smoothedEle": 51.25943403955353,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100331,
        "lng": 120.75573,
        "ele": 51.25,
        "distanceKm": 5.48957870681231,
        "gradePct": 1.319007285413529,
        "smoothedEle": 52.13237611843375,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100406,
        "lng": 120.756106,
        "ele": 52.25,
        "distanceKm": 5.529203700944062,
        "gradePct": 1.3666688416033341,
        "smoothedEle": 52.5842962175914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1004245,
        "lng": 120.75662,
        "ele": 53.750000000000014,
        "distanceKm": 5.582198554382713,
        "gradePct": 1.321738973965522,
        "smoothedEle": 53.14822519109598,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100443,
        "lng": 120.757134,
        "ele": 55.25,
        "distanceKm": 5.635193400883511,
        "gradePct": 1.212920457490081,
        "smoothedEle": 53.749218146171096,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.10046080708298,
        "lng": 120.75756402211033,
        "ele": 54.96584442048784,
        "distanceKm": 5.67954069571351,
        "gradePct": 1.1330538530959646,
        "smoothedEle": 54.24916518661541,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100478614165965,
        "lng": 120.75799404422065,
        "ele": 54.681688840975696,
        "distanceKm": 5.723887984956463,
        "gradePct": 1.1075217380084714,
        "smoothedEle": 54.73871434970994,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.10049689079517,
        "lng": 120.75842404289133,
        "ele": 54.69877293760543,
        "distanceKm": 5.768235218055536,
        "gradePct": 1.0629569071140592,
        "smoothedEle": 55.125552314150404,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100516,
        "lng": 120.758854,
        "ele": 55.25,
        "distanceKm": 5.812582507225553,
        "gradePct": 0.9169237023020207,
        "smoothedEle": 55.32664462131399,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.10053158543668,
        "lng": 120.75927613310262,
        "ele": 55.96463591702317,
        "distanceKm": 5.856107303806896,
        "gradePct": 0.735493269920162,
        "smoothedEle": 55.45597653885537,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100553,
        "lng": 120.759698,
        "ele": 56.5,
        "distanceKm": 5.89963533357827,
        "gradePct": 0.5553855662457389,
        "smoothedEle": 55.58176077145363,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100659,
        "lng": 120.760109,
        "ele": 57,
        "distanceKm": 5.943588469248998,
        "gradePct": 0.5487603262369833,
        "smoothedEle": 56.00808101623376,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100806,
        "lng": 120.760465,
        "ele": 56,
        "distanceKm": 5.983742837464495,
        "gradePct": 0.6969517211846281,
        "smoothedEle": 56.58977489042674,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100979,
        "lng": 120.760971,
        "ele": 54.75,
        "distanceKm": 6.039309421329753,
        "gradePct": 0.9604294381084122,
        "smoothedEle": 57.32692128514987,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.101166,
        "lng": 120.761402,
        "ele": 55.25,
        "distanceKm": 6.088340537526643,
        "gradePct": 1.1667938812187755,
        "smoothedEle": 57.8827096283131,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.101256,
        "lng": 120.761817,
        "ele": 56.75,
        "distanceKm": 6.132251322216825,
        "gradePct": 1.259277667199895,
        "smoothedEle": 58.416672517016025,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.101221,
        "lng": 120.762203,
        "ele": 60,
        "distanceKm": 6.172208769694688,
        "gradePct": 1.2519317019230722,
        "smoothedEle": 58.926550705440285,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.101155,
        "lng": 120.762587,
        "ele": 62,
        "distanceKm": 6.212445144483312,
        "gradePct": 1.199305542326299,
        "smoothedEle": 59.36915082811516,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.101236,
        "lng": 120.762963,
        "ele": 61.5,
        "distanceKm": 6.252215681281362,
        "gradePct": 1.1866304611747605,
        "smoothedEle": 59.846480097315606,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.101442,
        "lng": 120.763232,
        "ele": 61,
        "distanceKm": 6.288170315206613,
        "gradePct": 1.266822030647975,
        "smoothedEle": 60.41442414795148,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.101653,
        "lng": 120.763353,
        "ele": 60.75,
        "distanceKm": 6.314738580042609,
        "gradePct": 1.3406913828240714,
        "smoothedEle": 60.885097248176,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.101898,
        "lng": 120.763379,
        "ele": 61.5,
        "distanceKm": 6.342112744965777,
        "gradePct": 1.4391860867400461,
        "smoothedEle": 61.420881666677026,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.102305,
        "lng": 120.763383,
        "ele": 63,
        "distanceKm": 6.3873710188114865,
        "gradePct": 1.575743215523444,
        "smoothedEle": 62.24482187677196,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.10277,
        "lng": 120.763367,
        "ele": 62.5,
        "distanceKm": 6.439102999564094,
        "gradePct": 1.597745371685241,
        "smoothedEle": 62.88459135111208,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.103235,
        "lng": 120.763351,
        "ele": 62,
        "distanceKm": 6.490834980143982,
        "gradePct": 1.3903096506272543,
        "smoothedEle": 63.242249622242625,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1036995,
        "lng": 120.76333749999999,
        "ele": 63.625000000000014,
        "distanceKm": 6.542503817032854,
        "gradePct": 1.06104355601257,
        "smoothedEle": 63.55008836090735,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.104164,
        "lng": 120.763324,
        "ele": 65.25,
        "distanceKm": 6.594172653798422,
        "gradePct": 0.6900097039357533,
        "smoothedEle": 63.70895711351641,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.104573000000002,
        "lng": 120.76330366666666,
        "ele": 65.25,
        "distanceKm": 6.639699659710154,
        "gradePct": 0.3606164389296783,
        "smoothedEle": 63.60994934527088,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.104982,
        "lng": 120.76328333333333,
        "ele": 65.25,
        "distanceKm": 6.68522666534198,
        "gradePct": 0.09474063743251185,
        "smoothedEle": 63.39295681280708,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.105391,
        "lng": 120.763263,
        "ele": 65.25,
        "distanceKm": 6.730753670694818,
        "gradePct": 0.18058305113502712,
        "smoothedEle": 63.84124804449981,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.105712,
        "lng": 120.763204,
        "ele": 64.25,
        "distanceKm": 6.766961125982684,
        "gradePct": 0.2865616550738321,
        "smoothedEle": 64.19841178021682,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1060405,
        "lng": 120.7630625,
        "ele": 63,
        "distanceKm": 6.806290092561048,
        "gradePct": 0.40992062562929343,
        "smoothedEle": 64.50244652052973,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.106369,
        "lng": 120.762921,
        "ele": 61.75,
        "distanceKm": 6.8456190465567825,
        "gradePct": 0.6864104307408597,
        "smoothedEle": 64.95455700176235,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.106753,
        "lng": 120.762556,
        "ele": 60.25,
        "distanceKm": 6.902514981038968,
        "gradePct": 0.9438333801161811,
        "smoothedEle": 65.45085660896243,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.107085,
        "lng": 120.762051,
        "ele": 67.25,
        "distanceKm": 6.966307443593983,
        "gradePct": 0.9847732338155089,
        "smoothedEle": 66.16151008290322,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.107481,
        "lng": 120.761697,
        "ele": 66.75,
        "distanceKm": 7.023481946822933,
        "gradePct": 1.2406933414537766,
        "smoothedEle": 67.18146412706838,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.107869,
        "lng": 120.76145,
        "ele": 70.5,
        "distanceKm": 7.073570585179661,
        "gradePct": 1.5849698863416664,
        "smoothedEle": 68.36831626287533,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.108293,
        "lng": 120.761305,
        "ele": 69.5,
        "distanceKm": 7.123027146298152,
        "gradePct": 2.0338880668711337,
        "smoothedEle": 69.74714001324493,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.108688,
        "lng": 120.761247,
        "ele": 70,
        "distanceKm": 7.167353764305289,
        "gradePct": 2.7628923234946234,
        "smoothedEle": 71.70596037595355,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.109021,
        "lng": 120.761159,
        "ele": 71.75,
        "distanceKm": 7.2054753630723045,
        "gradePct": 3.255600347428985,
        "smoothedEle": 73.37143967993416,
        "gradeBand": "hard"
      },
      {
        "lat": 22.109561,
        "lng": 120.761117,
        "ele": 74.75,
        "distanceKm": 7.265676395500085,
        "gradePct": 4.086777591028689,
        "smoothedEle": 76.3548183289158,
        "gradeBand": "hard"
      },
      {
        "lat": 22.110209,
        "lng": 120.76124,
        "ele": 75.75,
        "distanceKm": 7.338836484313058,
        "gradePct": 4.447814560134393,
        "smoothedEle": 79.34139345038706,
        "gradeBand": "hard"
      },
      {
        "lat": 22.110838,
        "lng": 120.761229,
        "ele": 82.5,
        "distanceKm": 7.408787369188399,
        "gradePct": 3.3168299097831353,
        "smoothedEle": 80.16923237120669,
        "gradeBand": "hard"
      },
      {
        "lat": 22.111382,
        "lng": 120.761051,
        "ele": 91.25,
        "distanceKm": 7.47199578330707,
        "gradePct": 2.061661355987111,
        "smoothedEle": 80.73611402470523,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.111719,
        "lng": 120.761146,
        "ele": 92.75,
        "distanceKm": 7.5107254129220635,
        "gradePct": 1.3893414399562036,
        "smoothedEle": 80.97251311903995,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.112223,
        "lng": 120.761495,
        "ele": 87,
        "distanceKm": 7.577308797536203,
        "gradePct": 0.6788320319195472,
        "smoothedEle": 81.15436095058497,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.112532,
        "lng": 120.76187,
        "ele": 72.5,
        "distanceKm": 7.629009140308565,
        "gradePct": 0.4693807202753173,
        "smoothedEle": 81.28935180355485,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.112838914489497,
        "lng": 120.76221168909646,
        "ele": 74.90317413005823,
        "distanceKm": 7.678036508927744,
        "gradePct": 0.1814751274322431,
        "smoothedEle": 81.1359358448299,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.11317,
        "lng": 120.762528,
        "ele": 76.75,
        "distanceKm": 7.727200889516005,
        "gradePct": -0.26387180722095116,
        "smoothedEle": 80.489766161191,
        "gradeBand": "descent"
      },
      {
        "lat": 22.113479,
        "lng": 120.762925,
        "ele": 76.75,
        "distanceKm": 7.780615714858311,
        "gradePct": -0.829134480513168,
        "smoothedEle": 79.50472643115175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.113639,
        "lng": 120.763353,
        "ele": 76,
        "distanceKm": 7.828160558011058,
        "gradePct": -1.1672533817203918,
        "smoothedEle": 78.95262937108727,
        "gradeBand": "descent"
      },
      {
        "lat": 22.113772,
        "lng": 120.763936,
        "ele": 80.5,
        "distanceKm": 7.890012597136186,
        "gradePct": -0.7337487340655565,
        "smoothedEle": 79.5110361062687,
        "gradeBand": "descent"
      },
      {
        "lat": 22.113790004656522,
        "lng": 120.76442528521198,
        "ele": 82.1674427537245,
        "distanceKm": 7.940456233915032,
        "gradePct": 0.15168315253971076,
        "smoothedEle": 80.5486864574195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.113798,
        "lng": 120.764915,
        "ele": 83.5,
        "distanceKm": 7.990912207758929,
        "gradePct": 1.104473980828323,
        "smoothedEle": 81.59411014393407,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.113855,
        "lng": 120.765299,
        "ele": 82.5,
        "distanceKm": 8.03097463495544,
        "gradePct": 1.824091469477891,
        "smoothedEle": 82.62621809360796,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.114149,
        "lng": 120.765722,
        "ele": 83.25,
        "distanceKm": 8.085449790967099,
        "gradePct": 2.4411871999605927,
        "smoothedEle": 84.3522170106773,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.114543,
        "lng": 120.765892,
        "ele": 82.5,
        "distanceKm": 8.132631150531438,
        "gradePct": 2.6771664800962944,
        "smoothedEle": 85.74205361420721,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.114962,
        "lng": 120.765841,
        "ele": 85.5,
        "distanceKm": 8.17951716960259,
        "gradePct": 2.770701725305732,
        "smoothedEle": 86.89941384480669,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.115341,
        "lng": 120.765704,
        "ele": 87,
        "distanceKm": 8.22396042384561,
        "gradePct": 2.7264168291443935,
        "smoothedEle": 87.89834819612773,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.115867,
        "lng": 120.765337,
        "ele": 91.75,
        "distanceKm": 8.293603963508344,
        "gradePct": 2.20289752785071,
        "smoothedEle": 88.998212170275,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.116192,
        "lng": 120.765207,
        "ele": 92.75,
        "distanceKm": 8.332143863504905,
        "gradePct": 1.7831867830102432,
        "smoothedEle": 89.29407300832266,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.116708,
        "lng": 120.765089,
        "ele": 93.24999999999999,
        "distanceKm": 8.390794008068182,
        "gradePct": 1.1301039551878032,
        "smoothedEle": 89.41308702250906,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.117224,
        "lng": 120.764971,
        "ele": 93.75,
        "distanceKm": 8.449444143411247,
        "gradePct": 0.3148883978694965,
        "smoothedEle": 88.93058335646526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.117588,
        "lng": 120.76496,
        "ele": 92.75,
        "distanceKm": 8.489935011221519,
        "gradePct": -0.2756627047104781,
        "smoothedEle": 88.38894386388634,
        "gradeBand": "descent"
      },
      {
        "lat": 22.118091,
        "lng": 120.765042,
        "ele": 87.75,
        "distanceKm": 8.54650039701204,
        "gradePct": -1.0382456036466048,
        "smoothedEle": 87.24671435807954,
        "gradeBand": "descent"
      },
      {
        "lat": 22.118471,
        "lng": 120.76512266666666,
        "ele": 85.16666666666667,
        "distanceKm": 8.589563857958767,
        "gradePct": -1.5736196089903116,
        "smoothedEle": 86.26335155999804,
        "gradeBand": "descent"
      },
      {
        "lat": 22.118851,
        "lng": 120.76520333333333,
        "ele": 82.58333333333333,
        "distanceKm": 8.632627314583576,
        "gradePct": -1.8319880650150957,
        "smoothedEle": 85.40495612389489,
        "gradeBand": "descent"
      },
      {
        "lat": 22.119231,
        "lng": 120.765284,
        "ele": 80,
        "distanceKm": 8.675690766885845,
        "gradePct": -1.9695512470016112,
        "smoothedEle": 84.64038421797163,
        "gradeBand": "descent"
      },
      {
        "lat": 22.119572,
        "lng": 120.765403,
        "ele": 80.25,
        "distanceKm": 8.715540552097256,
        "gradePct": -1.9345507040867387,
        "smoothedEle": 84.00278765458906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.119895,
        "lng": 120.765599,
        "ele": 80,
        "distanceKm": 8.756742522030562,
        "gradePct": -1.8399377618738548,
        "smoothedEle": 83.33295784810608,
        "gradeBand": "descent"
      },
      {
        "lat": 22.120211,
        "lng": 120.765909,
        "ele": 80.25,
        "distanceKm": 8.804222964219166,
        "gradePct": -1.51969346097634,
        "smoothedEle": 82.93176073948446,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1204675,
        "lng": 120.76615899999999,
        "ele": 82.125,
        "distanceKm": 8.842650515646344,
        "gradePct": -1.2481621764237518,
        "smoothedEle": 82.7306744190399,
        "gradeBand": "descent"
      },
      {
        "lat": 22.120724,
        "lng": 120.766409,
        "ele": 84,
        "distanceKm": 8.881078035669573,
        "gradePct": -0.9683251446234242,
        "smoothedEle": 82.61753762818513,
        "gradeBand": "descent"
      },
      {
        "lat": 22.121071,
        "lng": 120.766949,
        "ele": 85.75,
        "distanceKm": 8.948775696493641,
        "gradePct": -0.4639852901736548,
        "smoothedEle": 82.53450576447912,
        "gradeBand": "descent"
      },
      {
        "lat": 22.121208334871366,
        "lng": 120.76733048562562,
        "ele": 84.60184117107102,
        "distanceKm": 8.990935428102492,
        "gradePct": -0.2285431258361336,
        "smoothedEle": 82.58695063405234,
        "gradeBand": "descent"
      },
      {
        "lat": 22.121348,
        "lng": 120.767711,
        "ele": 84.75,
        "distanceKm": 9.033096639305944,
        "gradePct": -0.0852918115832256,
        "smoothedEle": 82.61008497369438,
        "gradeBand": "descent"
      },
      {
        "lat": 22.121333,
        "lng": 120.768325,
        "ele": 83,
        "distanceKm": 9.096366667769779,
        "gradePct": -0.00681963784370512,
        "smoothedEle": 82.58514669104675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.121281,
        "lng": 120.768847,
        "ele": 79.75,
        "distanceKm": 9.150447805832176,
        "gradePct": -0.22372613371087705,
        "smoothedEle": 82.08913352823464,
        "gradeBand": "descent"
      },
      {
        "lat": 22.121409,
        "lng": 120.769203,
        "ele": 81,
        "distanceKm": 9.189784511386868,
        "gradePct": -0.6154181905916424,
        "smoothedEle": 81.35468256261068,
        "gradeBand": "descent"
      },
      {
        "lat": 22.121682,
        "lng": 120.769583,
        "ele": 80.75,
        "distanceKm": 9.239319651380672,
        "gradePct": -1.1666227329117163,
        "smoothedEle": 80.2743866682278,
        "gradeBand": "descent"
      },
      {
        "lat": 22.121899,
        "lng": 120.76984,
        "ele": 80,
        "distanceKm": 9.275139588467772,
        "gradePct": -1.541265059578974,
        "smoothedEle": 79.51098335970715,
        "gradeBand": "descent"
      },
      {
        "lat": 22.122405,
        "lng": 120.770216,
        "ele": 81.25,
        "distanceKm": 9.343446578293289,
        "gradePct": -1.8321465960679713,
        "smoothedEle": 78.48905313079108,
        "gradeBand": "descent"
      },
      {
        "lat": 22.122763,
        "lng": 120.770507,
        "ele": 77.25,
        "distanceKm": 9.393278300108665,
        "gradePct": -1.4121886129806476,
        "smoothedEle": 78.45411042506801,
        "gradeBand": "descent"
      },
      {
        "lat": 22.123031,
        "lng": 120.770905,
        "ele": 74.5,
        "distanceKm": 9.44396211100427,
        "gradePct": -0.7287982587504186,
        "smoothedEle": 78.71784890949277,
        "gradeBand": "descent"
      },
      {
        "lat": 22.123386,
        "lng": 120.771464,
        "ele": 74,
        "distanceKm": 9.5137752398035,
        "gradePct": 0.08595747153557229,
        "smoothedEle": 79.10487634463465,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.123656,
        "lng": 120.771886,
        "ele": 77.25,
        "distanceKm": 9.566604742725058,
        "gradePct": 0.5236657614919428,
        "smoothedEle": 79.52014582245735,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.124018,
        "lng": 120.772409,
        "ele": 82,
        "distanceKm": 9.633854976723054,
        "gradePct": 0.8465295292748495,
        "smoothedEle": 80.3583144430075,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.124332435365105,
        "lng": 120.7727600663885,
        "ele": 83.3627769946475,
        "distanceKm": 9.684155960312502,
        "gradePct": 1.3210622471405433,
        "smoothedEle": 81.58279857539709,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.12465421768255,
        "lng": 120.77310353319426,
        "ele": 83.55638849732375,
        "distanceKm": 9.734474674625321,
        "gradePct": 1.921448342737754,
        "smoothedEle": 83.11048217962545,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.124976,
        "lng": 120.773447,
        "ele": 83.75,
        "distanceKm": 9.784793332138404,
        "gradePct": 2.497500484173992,
        "smoothedEle": 84.741839011665,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.125264925353406,
        "lng": 120.77373972537501,
        "ele": 85.65813815389741,
        "distanceKm": 9.828853966896594,
        "gradePct": 2.828908062933532,
        "smoothedEle": 85.95380083024901,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.125569,
        "lng": 120.774015,
        "ele": 87.5,
        "distanceKm": 9.872981515052055,
        "gradePct": 2.820952563516744,
        "smoothedEle": 86.95268256222084,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.126013,
        "lng": 120.774358,
        "ele": 89.25,
        "distanceKm": 9.933691938345689,
        "gradePct": 2.501685259281283,
        "smoothedEle": 88.09008870904084,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.126383,
        "lng": 120.774656,
        "ele": 90,
        "distanceKm": 9.985023367199938,
        "gradePct": 2.1533718889962974,
        "smoothedEle": 89.05491029068077,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.126801,
        "lng": 120.77498,
        "ele": 90.5,
        "distanceKm": 10.042243713835106,
        "gradePct": 2.0145714959376164,
        "smoothedEle": 90.28603733562484,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.127036,
        "lng": 120.775222,
        "ele": 90.75,
        "distanceKm": 10.078357367262806,
        "gradePct": 2.077298817057305,
        "smoothedEle": 91.20799646575313,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.127433,
        "lng": 120.775694,
        "ele": 91.75,
        "distanceKm": 10.144027005450946,
        "gradePct": 2.4231203203322536,
        "smoothedEle": 93.13058647469522,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.127715233437055,
        "lng": 120.77619558919831,
        "ele": 92.85372070113124,
        "distanceKm": 10.204477820685467,
        "gradePct": 2.7986228093838603,
        "smoothedEle": 95.0707291135458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.127972,
        "lng": 120.776716,
        "ele": 94,
        "distanceKm": 10.265212171111799,
        "gradePct": 3.413574214931023,
        "smoothedEle": 97.69955620661666,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128318500000002,
        "lng": 120.7767815,
        "ele": 97.25000000000007,
        "distanceKm": 10.304327522891594,
        "gradePct": 4.061118603435851,
        "smoothedEle": 100.09055401426478,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128665,
        "lng": 120.776847,
        "ele": 100.5,
        "distanceKm": 10.343442871809238,
        "gradePct": 4.760477430539747,
        "smoothedEle": 102.63443983294295,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128941,
        "lng": 120.777013,
        "ele": 102.5,
        "distanceKm": 10.378574522640491,
        "gradePct": 5.293081054148456,
        "smoothedEle": 104.82553613045242,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129206918918523,
        "lng": 120.77727491891852,
        "ele": 104.33608927943828,
        "distanceKm": 10.418601651565922,
        "gradePct": 5.814330720553747,
        "smoothedEle": 107.31072679215083,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129471,
        "lng": 120.777539,
        "ele": 107.5,
        "distanceKm": 10.458629033473727,
        "gradePct": 6.182381865409732,
        "smoothedEle": 109.77937524865791,
        "gradeBand": "steep"
      },
      {
        "lat": 22.129933,
        "lng": 120.77772,
        "ele": 116,
        "distanceKm": 10.513279578089573,
        "gradePct": 6.291190310719459,
        "smoothedEle": 113.2551359172035,
        "gradeBand": "steep"
      },
      {
        "lat": 22.130087,
        "lng": 120.777875,
        "ele": 122.75,
        "distanceKm": 10.536691783711602,
        "gradePct": 6.210062690009288,
        "smoothedEle": 114.61550490166576,
        "gradeBand": "steep"
      },
      {
        "lat": 22.12989,
        "lng": 120.778182,
        "ele": 123.25,
        "distanceKm": 10.575160001666335,
        "gradePct": 6.013861804606975,
        "smoothedEle": 116.64030236114243,
        "gradeBand": "steep"
      },
      {
        "lat": 22.129598,
        "lng": 120.77854,
        "ele": 122.25,
        "distanceKm": 10.624292709659882,
        "gradePct": 5.61091646032991,
        "smoothedEle": 118.8835499877156,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129351,
        "lng": 120.778989,
        "ele": 123.5,
        "distanceKm": 10.678081955674248,
        "gradePct": 5.132321119461776,
        "smoothedEle": 121.28121836724559,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129166,
        "lng": 120.779531,
        "ele": 125.25,
        "distanceKm": 10.737579493836368,
        "gradePct": 4.761699708477297,
        "smoothedEle": 124.18562946735204,
        "gradeBand": "hard"
      },
      {
        "lat": 22.12898,
        "lng": 120.780005,
        "ele": 123.25,
        "distanceKm": 10.79060343443677,
        "gradePct": 4.4191889787733,
        "smoothedEle": 126.18377973867156,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129067,
        "lng": 120.780411,
        "ele": 124.5,
        "distanceKm": 10.833527485788686,
        "gradePct": 4.4380958843798,
        "smoothedEle": 128.1713840894084,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129082,
        "lng": 120.780801,
        "ele": 123,
        "distanceKm": 10.873733728613084,
        "gradePct": 4.6728698512588265,
        "smoothedEle": 130.43313481875904,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129144,
        "lng": 120.780864,
        "ele": 124.25,
        "distanceKm": 10.883201519490642,
        "gradePct": 4.73503453001734,
        "smoothedEle": 131.00120227141252,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129228,
        "lng": 120.780854,
        "ele": 125.25,
        "distanceKm": 10.892598530129629,
        "gradePct": 4.789586337029692,
        "smoothedEle": 131.56902708383913,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129302,
        "lng": 120.780793,
        "ele": 126,
        "distanceKm": 10.902951614070393,
        "gradePct": 4.860806859557601,
        "smoothedEle": 132.21686066859894,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129405,
        "lng": 120.780438,
        "ele": 130.25,
        "distanceKm": 10.941269702318026,
        "gradePct": 5.088225290474316,
        "smoothedEle": 134.50114159286636,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129493,
        "lng": 120.780398,
        "ele": 131.5,
        "distanceKm": 10.951886913961852,
        "gradePct": 5.188112408703657,
        "smoothedEle": 135.10101405074252,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129795,
        "lng": 120.780462,
        "ele": 133,
        "distanceKm": 10.986108770184167,
        "gradePct": 5.469074771356011,
        "smoothedEle": 136.95255268480975,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130018,
        "lng": 120.78039,
        "ele": 136.5,
        "distanceKm": 11.011990567452083,
        "gradePct": 5.640233320589686,
        "smoothedEle": 138.45458063983278,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130073,
        "lng": 120.7803,
        "ele": 139,
        "distanceKm": 11.023096459695964,
        "gradePct": 5.787043101027819,
        "smoothedEle": 139.2624601330201,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130228,
        "lng": 120.779787,
        "ele": 148.5,
        "distanceKm": 11.078677009260428,
        "gradePct": 6.221059700473085,
        "smoothedEle": 143.17185105854583,
        "gradeBand": "steep"
      },
      {
        "lat": 22.130371,
        "lng": 120.779633,
        "ele": 150.5,
        "distanceKm": 11.101137143194384,
        "gradePct": 6.316128980870525,
        "smoothedEle": 144.73557998052584,
        "gradeBand": "steep"
      },
      {
        "lat": 22.130529,
        "lng": 120.779608,
        "ele": 152.25,
        "distanceKm": 11.118893679017013,
        "gradePct": 6.439771837610772,
        "smoothedEle": 146.04676895010397,
        "gradeBand": "steep"
      },
      {
        "lat": 22.130917,
        "lng": 120.779723,
        "ele": 153.75,
        "distanceKm": 11.163633931850638,
        "gradePct": 6.882763824051505,
        "smoothedEle": 149.50210212300465,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131171,
        "lng": 120.779974,
        "ele": 151.75,
        "distanceKm": 11.201923765428225,
        "gradePct": 7.214075677520282,
        "smoothedEle": 152.2985137545017,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131252,
        "lng": 120.780037,
        "ele": 151.25,
        "distanceKm": 11.213024744547454,
        "gradePct": 7.272567403033787,
        "smoothedEle": 153.07494492312986,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131339,
        "lng": 120.780034,
        "ele": 152.5,
        "distanceKm": 11.222703650457872,
        "gradePct": 7.258571966700413,
        "smoothedEle": 153.75102981761495,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131904,
        "lng": 120.779826,
        "ele": 160,
        "distanceKm": 11.289081483923415,
        "gradePct": 7.048657560222249,
        "smoothedEle": 157.99355090422668,
        "gradeBand": "steep"
      },
      {
        "lat": 22.132176,
        "lng": 120.779853,
        "ele": 157.25,
        "distanceKm": 11.319454136563577,
        "gradePct": 6.6550598874741045,
        "smoothedEle": 159.40017340562486,
        "gradeBand": "steep"
      },
      {
        "lat": 22.1324,
        "lng": 120.779696,
        "ele": 160,
        "distanceKm": 11.349151004623039,
        "gradePct": 5.997017241054728,
        "smoothedEle": 160.37760607118247,
        "gradeBand": "hard"
      },
      {
        "lat": 22.132661,
        "lng": 120.779459,
        "ele": 163,
        "distanceKm": 11.387074449836632,
        "gradePct": 4.970555596100272,
        "smoothedEle": 161.15513867553688,
        "gradeBand": "hard"
      },
      {
        "lat": 22.132892,
        "lng": 120.779161,
        "ele": 166,
        "distanceKm": 11.427098474059811,
        "gradePct": 3.9753761247504684,
        "smoothedEle": 161.98267601664267,
        "gradeBand": "hard"
      },
      {
        "lat": 22.133391,
        "lng": 120.778906,
        "ele": 167,
        "distanceKm": 11.488487405633752,
        "gradePct": 3.2121237658137405,
        "smoothedEle": 164.37982808431656,
        "gradeBand": "hard"
      },
      {
        "lat": 22.133828,
        "lng": 120.778825,
        "ele": 169.25,
        "distanceKm": 11.53779068735138,
        "gradePct": 3.2829043318832705,
        "smoothedEle": 166.56950509672777,
        "gradeBand": "hard"
      },
      {
        "lat": 22.13416489858512,
        "lng": 120.77889680159004,
        "ele": 166.1420086541006,
        "distanceKm": 11.575975191536967,
        "gradePct": 3.559184842062662,
        "smoothedEle": 168.04594371822378,
        "gradeBand": "hard"
      },
      {
        "lat": 22.134494,
        "lng": 120.779006,
        "ele": 162,
        "distanceKm": 11.614259131168634,
        "gradePct": 3.2626832589571797,
        "smoothedEle": 168.2425760832461,
        "gradeBand": "hard"
      },
      {
        "lat": 22.134913,
        "lng": 120.778879,
        "ele": 164,
        "distanceKm": 11.662651379635102,
        "gradePct": 2.3840500536012796,
        "smoothedEle": 168.1390674481367,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.134980000000002,
        "lng": 120.7784925,
        "ele": 170.62500000000014,
        "distanceKm": 11.703151953226113,
        "gradePct": 1.8732782253761608,
        "smoothedEle": 168.77767227174147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.135047,
        "lng": 120.778106,
        "ele": 177.25,
        "distanceKm": 11.74365250820426,
        "gradePct": 1.4065076635288756,
        "smoothedEle": 169.60917306427598,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.135078,
        "lng": 120.777985,
        "ele": 179.75,
        "distanceKm": 11.756583398292676,
        "gradePct": 1.259962464785521,
        "smoothedEle": 169.81606730569064,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.135121,
        "lng": 120.777913,
        "ele": 180.75,
        "distanceKm": 11.765407144369213,
        "gradePct": 1.1548601251207526,
        "smoothedEle": 169.9470408024703,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.135186,
        "lng": 120.777867,
        "ele": 181,
        "distanceKm": 11.774049360026314,
        "gradePct": 1.0011310213857207,
        "smoothedEle": 169.97374173215772,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.135313,
        "lng": 120.77786,
        "ele": 179.25,
        "distanceKm": 11.788189528772106,
        "gradePct": 0.8547606955598357,
        "smoothedEle": 169.818199875954,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13584,
        "lng": 120.778214,
        "ele": 162,
        "distanceKm": 11.857206918837297,
        "gradePct": 0.6378564204971178,
        "smoothedEle": 169.4264257225205,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.135949,
        "lng": 120.778232,
        "ele": 160.75,
        "distanceKm": 11.869468160848571,
        "gradePct": 0.6526484197834771,
        "smoothedEle": 169.55184991021213,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136128,
        "lng": 120.7781,
        "ele": 162.75,
        "distanceKm": 11.893572392049737,
        "gradePct": 0.7201486485801237,
        "smoothedEle": 170.0669209927253,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136122,
        "lng": 120.777634,
        "ele": 175,
        "distanceKm": 11.9415745759472,
        "gradePct": 1.0377901865075823,
        "smoothedEle": 171.64209223624067,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136139,
        "lng": 120.777528,
        "ele": 177.5,
        "distanceKm": 11.952654908157404,
        "gradePct": 1.0425555812386058,
        "smoothedEle": 171.8383226260035,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136208,
        "lng": 120.777458,
        "ele": 178.75,
        "distanceKm": 11.963183428196233,
        "gradePct": 1.0134710884078437,
        "smoothedEle": 171.94097569638205,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136311,
        "lng": 120.777457,
        "ele": 177.5,
        "distanceKm": 11.974636984591209,
        "gradePct": 1.0128634001299768,
        "smoothedEle": 171.99300466220382,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13645,
        "lng": 120.777485,
        "ele": 175,
        "distanceKm": 11.990359859501243,
        "gradePct": 0.991980821689868,
        "smoothedEle": 171.78984173321496,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136831,
        "lng": 120.77791,
        "ele": 163.75,
        "distanceKm": 12.051278011629671,
        "gradePct": 0.43252653903727073,
        "smoothedEle": 170.325133979382,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136935,
        "lng": 120.778004,
        "ele": 162.25,
        "distanceKm": 12.066360157083599,
        "gradePct": 0.18533818005414626,
        "smoothedEle": 169.890733500289,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13702,
        "lng": 120.778033,
        "ele": 162.25,
        "distanceKm": 12.076272487363156,
        "gradePct": -0.0011507701557320657,
        "smoothedEle": 169.69494656967692,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137128,
        "lng": 120.77802,
        "ele": 163.25,
        "distanceKm": 12.088355971679489,
        "gradePct": -0.12792911951162056,
        "smoothedEle": 169.69959571438753,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13726,
        "lng": 120.77797,
        "ele": 165.5,
        "distanceKm": 12.10391096957289,
        "gradePct": -0.35496452425397373,
        "smoothedEle": 169.69624796740396,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137374,
        "lng": 120.777758,
        "ele": 172.25,
        "distanceKm": 12.129159353070518,
        "gradePct": -0.7305084517523878,
        "smoothedEle": 169.77367507571932,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13745,
        "lng": 120.777556,
        "ele": 178.75,
        "distanceKm": 12.151615755724228,
        "gradePct": -0.9820962346204318,
        "smoothedEle": 169.85572698228046,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13753,
        "lng": 120.777475,
        "ele": 182,
        "distanceKm": 12.16381144349943,
        "gradePct": -0.9281917354560141,
        "smoothedEle": 170.0874450500093,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137632,
        "lng": 120.777478,
        "ele": 183.5,
        "distanceKm": 12.175157549951992,
        "gradePct": -0.9345333633708781,
        "smoothedEle": 170.11721145674667,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137688,
        "lng": 120.777529,
        "ele": 183,
        "distanceKm": 12.183304173523753,
        "gradePct": -0.9043033315484653,
        "smoothedEle": 170.072405027102,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13773,
        "lng": 120.7778,
        "ele": 175.5,
        "distanceKm": 12.211604598465758,
        "gradePct": -0.7133452392190404,
        "smoothedEle": 169.85234564426062,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137756,
        "lng": 120.77793,
        "ele": 172,
        "distanceKm": 12.22530287923896,
        "gradePct": -0.5680711609816476,
        "smoothedEle": 169.81353420328094,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137843,
        "lng": 120.778057,
        "ele": 169.25,
        "distanceKm": 12.241572206151353,
        "gradePct": -0.3619999555553774,
        "smoothedEle": 169.83449913343796,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137999,
        "lng": 120.778167,
        "ele": 168,
        "distanceKm": 12.262290843306015,
        "gradePct": -0.08788611133420009,
        "smoothedEle": 169.8321668741295,
        "gradeBand": "descent"
      },
      {
        "lat": 22.138342,
        "lng": 120.778379,
        "ele": 165.5,
        "distanceKm": 12.30623900570818,
        "gradePct": 0.288008633377019,
        "smoothedEle": 170.2794044280801,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13842,
        "lng": 120.778403,
        "ele": 163.75,
        "distanceKm": 12.315257606110459,
        "gradePct": 0.3086392729132126,
        "smoothedEle": 170.3483222955541,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.138532,
        "lng": 120.778386,
        "ele": 162.5,
        "distanceKm": 12.327833940845872,
        "gradePct": 0.3428052980122812,
        "smoothedEle": 170.45522114080512,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.138625,
        "lng": 120.778346,
        "ele": 161.75,
        "distanceKm": 12.338965549705422,
        "gradePct": 0.3635159559869136,
        "smoothedEle": 170.5365371757431,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.138822,
        "lng": 120.77822,
        "ele": 162.75,
        "distanceKm": 12.364426637477228,
        "gradePct": 0.22037033772522896,
        "smoothedEle": 170.52979968124646,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.139279,
        "lng": 120.7778,
        "ele": 172.25,
        "distanceKm": 12.431161904176852,
        "gradePct": -0.24490197334705588,
        "smoothedEle": 169.33128029533597,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139689,
        "lng": 120.777467,
        "ele": 176.75,
        "distanceKm": 12.488212667837043,
        "gradePct": -0.6035839126242472,
        "smoothedEle": 168.8887919531464,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139771,
        "lng": 120.777466,
        "ele": 175.75,
        "distanceKm": 12.497331246118339,
        "gradePct": -0.6568203567557328,
        "smoothedEle": 168.87511408572448,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139907,
        "lng": 120.777503,
        "ele": 173.25,
        "distanceKm": 12.512926553816442,
        "gradePct": -0.7326948893000944,
        "smoothedEle": 168.8651192038113,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139979,
        "lng": 120.777548,
        "ele": 171.75,
        "distanceKm": 12.522177414529674,
        "gradePct": -0.791825168257833,
        "smoothedEle": 168.82349033060177,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140005,
        "lng": 120.777592,
        "ele": 171.25,
        "distanceKm": 12.527552896505856,
        "gradePct": -0.8284414441008636,
        "smoothedEle": 168.79594937571326,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140004,
        "lng": 120.77767,
        "ele": 170.5,
        "distanceKm": 12.535587368913346,
        "gradePct": -0.8867869290926254,
        "smoothedEle": 168.7382858184846,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139884,
        "lng": 120.77802,
        "ele": 166.5,
        "distanceKm": 12.57402633461316,
        "gradePct": -0.7305006969819372,
        "smoothedEle": 168.8963943442809,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139994,
        "lng": 120.778499,
        "ele": 163.5,
        "distanceKm": 12.62485516894674,
        "gradePct": 0.21002411913795602,
        "smoothedEle": 169.86459315079122,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140197,
        "lng": 120.778728,
        "ele": 171,
        "distanceKm": 12.657502175454367,
        "gradePct": 0.5957030871789065,
        "smoothedEle": 170.31839011636478,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140256,
        "lng": 120.778858,
        "ele": 172.75,
        "distanceKm": 12.672412526323143,
        "gradePct": 0.6348878315344445,
        "smoothedEle": 170.28111423919282,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140307,
        "lng": 120.779125,
        "ele": 173.5,
        "distanceKm": 12.700491090323654,
        "gradePct": 0.47770495677092295,
        "smoothedEle": 169.82849888566756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140431,
        "lng": 120.779593,
        "ele": 168.5,
        "distanceKm": 12.750626466303718,
        "gradePct": 0.0007966710361415637,
        "smoothedEle": 168.8017385127639,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.14053,
        "lng": 120.779749,
        "ele": 165.75,
        "distanceKm": 12.770103189298112,
        "gradePct": -0.1432171626805717,
        "smoothedEle": 168.59382319757313,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140621,
        "lng": 120.779828,
        "ele": 164,
        "distanceKm": 12.783087583144637,
        "gradePct": -0.2485670906843049,
        "smoothedEle": 168.57186081623624,
        "gradeBand": "descent"
      },
      {
        "lat": 22.14053,
        "lng": 120.779749,
        "ele": 165.75,
        "distanceKm": 12.796071976991161,
        "gradePct": -0.36297216796792625,
        "smoothedEle": 168.5903802491028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140431,
        "lng": 120.779593,
        "ele": 168.5,
        "distanceKm": 12.815548699985555,
        "gradePct": -0.4397200597104971,
        "smoothedEle": 168.8078813654117,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140307,
        "lng": 120.779125,
        "ele": 173.5,
        "distanceKm": 12.86568407596562,
        "gradePct": -0.23299934340570952,
        "smoothedEle": 169.8319366782752,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140256,
        "lng": 120.778858,
        "ele": 172.75,
        "distanceKm": 12.89376263996613,
        "gradePct": 0.17379659290809063,
        "smoothedEle": 170.2845520318005,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140197,
        "lng": 120.778728,
        "ele": 171,
        "distanceKm": 12.908672990834907,
        "gradePct": 0.33044618333409065,
        "smoothedEle": 170.32182790897244,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.139994,
        "lng": 120.778499,
        "ele": 163.5,
        "distanceKm": 12.941319997342534,
        "gradePct": 0.43417794580700936,
        "smoothedEle": 169.86068863757566,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.139884,
        "lng": 120.77802,
        "ele": 166.5,
        "distanceKm": 12.992148831676113,
        "gradePct": 0.16885792445069175,
        "smoothedEle": 168.92250057871027,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140004,
        "lng": 120.77767,
        "ele": 170.5,
        "distanceKm": 13.030587797375928,
        "gradePct": -0.17389666343373794,
        "smoothedEle": 168.76727367906693,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140005,
        "lng": 120.777592,
        "ele": 171.25,
        "distanceKm": 13.038622269783417,
        "gradePct": -0.22591948253889962,
        "smoothedEle": 168.82733859142309,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139907,
        "lng": 120.777503,
        "ele": 173.25,
        "distanceKm": 13.052862175324243,
        "gradePct": -0.337634804698426,
        "smoothedEle": 168.89476945235248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139771,
        "lng": 120.777466,
        "ele": 175.75,
        "distanceKm": 13.068457483022346,
        "gradePct": -0.49062693088628073,
        "smoothedEle": 168.89538904205705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139689,
        "lng": 120.777467,
        "ele": 176.75,
        "distanceKm": 13.077576061303642,
        "gradePct": -0.5448199488723324,
        "smoothedEle": 168.93399088382546,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139279,
        "lng": 120.7778,
        "ele": 172.25,
        "distanceKm": 13.134626824963833,
        "gradePct": -0.2653560103681381,
        "smoothedEle": 169.42451773911122,
        "gradeBand": "descent"
      },
      {
        "lat": 22.138822,
        "lng": 120.77822,
        "ele": 162.75,
        "distanceKm": 13.201362091663457,
        "gradePct": 0.853431123127439,
        "smoothedEle": 170.59215719891858,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.138532,
        "lng": 120.778386,
        "ele": 162.5,
        "distanceKm": 13.237860954417906,
        "gradePct": 0.8473203198306465,
        "smoothedEle": 170.5162877135353,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13842,
        "lng": 120.778403,
        "ele": 163.75,
        "distanceKm": 13.25043728915332,
        "gradePct": 0.763051043878991,
        "smoothedEle": 170.40938886828428,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.138342,
        "lng": 120.778379,
        "ele": 165.5,
        "distanceKm": 13.259455889555598,
        "gradePct": 0.7235960777405975,
        "smoothedEle": 170.34222357108132,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.137999,
        "lng": 120.778167,
        "ele": 168,
        "distanceKm": 13.303404051957763,
        "gradePct": 0.4002088400887672,
        "smoothedEle": 169.95647961478468,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.137756,
        "lng": 120.77793,
        "ele": 172,
        "distanceKm": 13.339817965637094,
        "gradePct": 0.14905047379072353,
        "smoothedEle": 169.81344593578112,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.137688,
        "lng": 120.777529,
        "ele": 183,
        "distanceKm": 13.38180653164967,
        "gradePct": -0.08203051143829072,
        "smoothedEle": 170.0859406013366,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137632,
        "lng": 120.777478,
        "ele": 183.5,
        "distanceKm": 13.38995315522143,
        "gradePct": -0.15525114647117333,
        "smoothedEle": 170.08203744667838,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13753,
        "lng": 120.777475,
        "ele": 182,
        "distanceKm": 13.401299261673993,
        "gradePct": -0.2913850668742423,
        "smoothedEle": 170.00828775473673,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13745,
        "lng": 120.777556,
        "ele": 178.75,
        "distanceKm": 13.413494949449195,
        "gradePct": -0.34982218295351813,
        "smoothedEle": 169.8672924944321,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137374,
        "lng": 120.777758,
        "ele": 172.25,
        "distanceKm": 13.435951352102904,
        "gradePct": -0.3708104111421604,
        "smoothedEle": 169.77863634492684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13726,
        "lng": 120.77797,
        "ele": 165.5,
        "distanceKm": 13.461199735600532,
        "gradePct": -0.31113270983542063,
        "smoothedEle": 169.7046519807818,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137128,
        "lng": 120.77802,
        "ele": 163.25,
        "distanceKm": 13.476754733493934,
        "gradePct": -0.25274811224078153,
        "smoothedEle": 169.68489108916836,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13702,
        "lng": 120.778033,
        "ele": 162.25,
        "distanceKm": 13.488838217810267,
        "gradePct": -0.16043774944022063,
        "smoothedEle": 169.7634520663919,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136935,
        "lng": 120.778004,
        "ele": 162.25,
        "distanceKm": 13.498750548089824,
        "gradePct": 0.013606503615704974,
        "smoothedEle": 170.02453758331922,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136831,
        "lng": 120.77791,
        "ele": 163.75,
        "distanceKm": 13.513832693543751,
        "gradePct": 0.22748694727907628,
        "smoothedEle": 170.37048985500485,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136538,
        "lng": 120.777526,
        "ele": 172.75,
        "distanceKm": 13.56507511242154,
        "gradePct": 0.8373478771617785,
        "smoothedEle": 171.6520538790528,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136208,
        "lng": 120.777458,
        "ele": 178.75,
        "distanceKm": 13.602431934862153,
        "gradePct": 0.9670372484274629,
        "smoothedEle": 171.92926733198166,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136139,
        "lng": 120.777528,
        "ele": 177.5,
        "distanceKm": 13.612960454900982,
        "gradePct": 1.0085240551954548,
        "smoothedEle": 171.89051993634948,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136122,
        "lng": 120.777634,
        "ele": 175,
        "distanceKm": 13.624040787111186,
        "gradePct": 0.915026807336918,
        "smoothedEle": 171.6557119535897,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13613,
        "lng": 120.777864,
        "ele": 169,
        "distanceKm": 13.647747259281187,
        "gradePct": 0.5347844754038694,
        "smoothedEle": 170.81364020398598,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136147,
        "lng": 120.777984,
        "ele": 165.75,
        "distanceKm": 13.660250858150796,
        "gradePct": 0.3373137983712139,
        "smoothedEle": 170.3820600365099,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136128,
        "lng": 120.7781,
        "ele": 162.75,
        "distanceKm": 13.672384098213854,
        "gradePct": 0.16684298017723678,
        "smoothedEle": 170.02412945464968,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136056,
        "lng": 120.778174,
        "ele": 161.5,
        "distanceKm": 13.68343808320836,
        "gradePct": 0.030117848124021514,
        "smoothedEle": 169.78857869638404,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.135949,
        "lng": 120.778232,
        "ele": 160.75,
        "distanceKm": 13.69675151479637,
        "gradePct": -0.2281153794314585,
        "smoothedEle": 169.51565334882983,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13584,
        "lng": 120.778214,
        "ele": 162,
        "distanceKm": 13.709012756807644,
        "gradePct": -0.4273652583250411,
        "smoothedEle": 169.40520026250374,
        "gradeBand": "descent"
      },
      {
        "lat": 22.135457,
        "lng": 120.777903,
        "ele": 176.25,
        "distanceKm": 13.762302663967985,
        "gradePct": -0.9651374806243105,
        "smoothedEle": 169.65244046200104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.135186,
        "lng": 120.777867,
        "ele": 181,
        "distanceKm": 13.792663808320107,
        "gradePct": -0.9936861421840781,
        "smoothedEle": 169.86940879448878,
        "gradeBand": "descent"
      },
      {
        "lat": 22.135121,
        "lng": 120.777913,
        "ele": 180.75,
        "distanceKm": 13.801306023977208,
        "gradePct": -1.058160058821205,
        "smoothedEle": 169.80459217706056,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13499799432488,
        "lng": 120.77838869691692,
        "ele": 172.40428958693317,
        "distanceKm": 13.852175987335436,
        "gradePct": -0.7580536416317356,
        "smoothedEle": 169.1446688361265,
        "gradeBand": "descent"
      },
      {
        "lat": 22.134913,
        "lng": 120.778879,
        "ele": 164,
        "distanceKm": 13.903553878338188,
        "gradePct": -0.5235039095825745,
        "smoothedEle": 168.40736772054754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.134494,
        "lng": 120.779006,
        "ele": 162,
        "distanceKm": 13.951946126804657,
        "gradePct": -0.5597627644974941,
        "smoothedEle": 168.48486545326764,
        "gradeBand": "descent"
      },
      {
        "lat": 22.134057,
        "lng": 120.778861,
        "ele": 167.5,
        "distanceKm": 14.002781770213476,
        "gradePct": -1.0550043685601376,
        "smoothedEle": 167.6754389522639,
        "gradeBand": "descent"
      },
      {
        "lat": 22.133622,
        "lng": 120.778843,
        "ele": 169,
        "distanceKm": 14.051187149145981,
        "gradePct": -1.66511251204671,
        "smoothedEle": 165.82727176311755,
        "gradeBand": "descent"
      },
      {
        "lat": 22.133072,
        "lng": 120.779018,
        "ele": 167.5,
        "distanceKm": 14.114945457908721,
        "gradePct": -2.7283799962128183,
        "smoothedEle": 162.96885076531885,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132776,
        "lng": 120.779301,
        "ele": 165,
        "distanceKm": 14.158911368758412,
        "gradePct": -3.299310754567555,
        "smoothedEle": 161.7753404314548,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1324,
        "lng": 120.779696,
        "ele": 160,
        "distanceKm": 14.217249545691738,
        "gradePct": -3.274719858445633,
        "smoothedEle": 160.57360467657486,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132261,
        "lng": 120.779806,
        "ele": 158,
        "distanceKm": 14.236413702883015,
        "gradePct": -3.1986950650219628,
        "smoothedEle": 159.99394701704475,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132176,
        "lng": 120.779853,
        "ele": 157.25,
        "distanceKm": 14.247032956042522,
        "gradePct": -3.1977338672751583,
        "smoothedEle": 159.59041539698347,
        "gradeBand": "descent"
      },
      {
        "lat": 22.131904,
        "lng": 120.779826,
        "ele": 160,
        "distanceKm": 14.277405608682685,
        "gradePct": -3.22057545049486,
        "smoothedEle": 158.2106913891076,
        "gradeBand": "descent"
      },
      {
        "lat": 22.131339,
        "lng": 120.780034,
        "ele": 152.5,
        "distanceKm": 14.343783442148228,
        "gradePct": -4.167227903112121,
        "smoothedEle": 153.8515513529351,
        "gradeBand": "descent"
      },
      {
        "lat": 22.131252,
        "lng": 120.780037,
        "ele": 151.25,
        "distanceKm": 14.353462348058645,
        "gradePct": -4.378736723560949,
        "smoothedEle": 153.1657875525396,
        "gradeBand": "descent"
      },
      {
        "lat": 22.131171,
        "lng": 120.779974,
        "ele": 151.75,
        "distanceKm": 14.364563327177875,
        "gradePct": -4.646198002691409,
        "smoothedEle": 152.3665170559551,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130917,
        "lng": 120.779723,
        "ele": 153.75,
        "distanceKm": 14.40285316075546,
        "gradePct": -5.66765148596287,
        "smoothedEle": 149.5348596608347,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130529,
        "lng": 120.779608,
        "ele": 152.25,
        "distanceKm": 14.447593413589086,
        "gradePct": -6.764987949811636,
        "smoothedEle": 146.03497985965421,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130371,
        "lng": 120.779633,
        "ele": 150.5,
        "distanceKm": 14.465349949411715,
        "gradePct": -7.014930736553591,
        "smoothedEle": 144.72847660079915,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130228,
        "lng": 120.779787,
        "ele": 148.5,
        "distanceKm": 14.487810083345671,
        "gradePct": -7.174845863370916,
        "smoothedEle": 143.17772092772145,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130073,
        "lng": 120.7803,
        "ele": 139,
        "distanceKm": 14.543390632910135,
        "gradePct": -7.3074438199995315,
        "smoothedEle": 139.26246013302008,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130018,
        "lng": 120.78039,
        "ele": 136.5,
        "distanceKm": 14.554496525154017,
        "gradePct": -7.318373080920051,
        "smoothedEle": 138.45458063983276,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129795,
        "lng": 120.780462,
        "ele": 133,
        "distanceKm": 14.580378322421932,
        "gradePct": -7.122197086600021,
        "smoothedEle": 136.95255268480975,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129493,
        "lng": 120.780398,
        "ele": 131.5,
        "distanceKm": 14.614600178644247,
        "gradePct": -6.757457915721968,
        "smoothedEle": 135.10101405074252,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129405,
        "lng": 120.780438,
        "ele": 130.25,
        "distanceKm": 14.625217390288073,
        "gradePct": -6.6421197304176,
        "smoothedEle": 134.5011415928664,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129302,
        "lng": 120.780793,
        "ele": 126,
        "distanceKm": 14.663535478535707,
        "gradePct": -6.322561192525662,
        "smoothedEle": 132.21686066859894,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129228,
        "lng": 120.780854,
        "ele": 125.25,
        "distanceKm": 14.67388856247647,
        "gradePct": -6.284951301444503,
        "smoothedEle": 131.56902708383916,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129144,
        "lng": 120.780864,
        "ele": 124.25,
        "distanceKm": 14.683285573115457,
        "gradePct": -6.244456302046836,
        "smoothedEle": 131.00120227141252,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129082,
        "lng": 120.780801,
        "ele": 123,
        "distanceKm": 14.692753363993015,
        "gradePct": -6.198183288858027,
        "smoothedEle": 130.43313481875907,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129067,
        "lng": 120.780411,
        "ele": 124.5,
        "distanceKm": 14.732959606817413,
        "gradePct": -5.912934420630329,
        "smoothedEle": 128.17138408940843,
        "gradeBand": "descent"
      },
      {
        "lat": 22.12898,
        "lng": 120.780005,
        "ele": 123.25,
        "distanceKm": 14.77588365816933,
        "gradePct": -5.514808469771408,
        "smoothedEle": 126.18377973867156,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129166,
        "lng": 120.779531,
        "ele": 125.25,
        "distanceKm": 14.828907598769732,
        "gradePct": -5.095805397480969,
        "smoothedEle": 124.08954401811663,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129351,
        "lng": 120.778989,
        "ele": 123.5,
        "distanceKm": 14.888405136931851,
        "gradePct": -4.69476544544496,
        "smoothedEle": 121.30449755153896,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129598,
        "lng": 120.77854,
        "ele": 122.25,
        "distanceKm": 14.942194382946218,
        "gradePct": -4.4161518553755466,
        "smoothedEle": 118.91146274626735,
        "gradeBand": "descent"
      },
      {
        "lat": 22.12989,
        "lng": 120.778182,
        "ele": 123.25,
        "distanceKm": 14.991327090939764,
        "gradePct": -4.4502814736647895,
        "smoothedEle": 116.67326234077464,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130087,
        "lng": 120.777875,
        "ele": 122.75,
        "distanceKm": 15.029795308894498,
        "gradePct": -4.695662094192367,
        "smoothedEle": 114.65666661555372,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129933,
        "lng": 120.77772,
        "ele": 116,
        "distanceKm": 15.053207514516526,
        "gradePct": -4.823789597441052,
        "smoothedEle": 113.3044993653472,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129738,
        "lng": 120.777695,
        "ele": 112.75,
        "distanceKm": 15.075042929412032,
        "gradePct": -4.995094536839662,
        "smoothedEle": 111.93978593437808,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1296,
        "lng": 120.77764,
        "ele": 110.25,
        "distanceKm": 15.091400226373626,
        "gradePct": -5.11334214040394,
        "smoothedEle": 110.94456445595584,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129471,
        "lng": 120.777539,
        "ele": 107.5,
        "distanceKm": 15.109119864402485,
        "gradePct": -5.196795930037259,
        "smoothedEle": 109.98932624032837,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129206918918523,
        "lng": 120.77727491891852,
        "ele": 104.33608927943828,
        "distanceKm": 15.14914724631029,
        "gradePct": -5.303999687183091,
        "smoothedEle": 107.9867313569907,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128941,
        "lng": 120.777013,
        "ele": 102.5,
        "distanceKm": 15.189174375235721,
        "gradePct": -5.26744227857984,
        "smoothedEle": 106.2364429902454,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128665,
        "lng": 120.776847,
        "ele": 100.5,
        "distanceKm": 15.224306026066975,
        "gradePct": -5.020256203267682,
        "smoothedEle": 104.90391550582542,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128318500000002,
        "lng": 120.7767815,
        "ele": 97.25000000000007,
        "distanceKm": 15.263421374984619,
        "gradePct": -4.548527435569797,
        "smoothedEle": 103.56907821495179,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127972,
        "lng": 120.776716,
        "ele": 94,
        "distanceKm": 15.302536726764414,
        "gradePct": -3.8509150951737388,
        "smoothedEle": 102.6423827943026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128269,
        "lng": 120.77733,
        "ele": 98.25,
        "distanceKm": 15.37388500088227,
        "gradePct": -2.1349157118593927,
        "smoothedEle": 102.63517848061915,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128475,
        "lng": 120.77768750000001,
        "ele": 100.875,
        "distanceKm": 15.417252195354878,
        "gradePct": -1.1501543190413241,
        "smoothedEle": 102.87115544778136,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128681,
        "lng": 120.778045,
        "ele": 103.5,
        "distanceKm": 15.460619344111342,
        "gradePct": -0.3108015099571457,
        "smoothedEle": 103.0430963617489,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128917,
        "lng": 120.778653,
        "ele": 109,
        "distanceKm": 15.5285218028932,
        "gradePct": 0.33538652842636313,
        "smoothedEle": 103.31053203660852,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.128816,
        "lng": 120.779135,
        "ele": 111.75,
        "distanceKm": 15.579424273456652,
        "gradePct": 0.44587240757253865,
        "smoothedEle": 103.55706452943829,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.128683,
        "lng": 120.779475,
        "ele": 109.5,
        "distanceKm": 15.617440304282912,
        "gradePct": 0.27486066479858906,
        "smoothedEle": 103.42162258663599,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.128575,
        "lng": 120.779846,
        "ele": 106.5,
        "distanceKm": 15.657497500354465,
        "gradePct": -0.0561761329148853,
        "smoothedEle": 102.91836669311049,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1285235,
        "lng": 120.780304,
        "ele": 103.37500000000006,
        "distanceKm": 15.70501988440948,
        "gradePct": -0.5955494135679466,
        "smoothedEle": 102.02687026634887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128472,
        "lng": 120.780762,
        "ele": 100.25,
        "distanceKm": 15.752542285581914,
        "gradePct": -1.2809326083130135,
        "smoothedEle": 100.86500359913434,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128381369954486,
        "lng": 120.7811260448451,
        "ele": 97.40146984454324,
        "distanceKm": 15.791371165484813,
        "gradePct": -1.9460105971198016,
        "smoothedEle": 99.62247944224158,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128265,
        "lng": 120.781482,
        "ele": 95.5,
        "distanceKm": 15.83025258253753,
        "gradePct": -2.4974115543270248,
        "smoothedEle": 98.2658332803078,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128011,
        "lng": 120.782146,
        "ele": 92.75,
        "distanceKm": 15.904249920073852,
        "gradePct": -3.001998927539926,
        "smoothedEle": 96.03731656148574,
        "gradeBand": "descent"
      },
      {
        "lat": 22.12787,
        "lng": 120.782659,
        "ele": 92,
        "distanceKm": 15.959368403656207,
        "gradePct": -2.783367281243268,
        "smoothedEle": 95.07983325827043,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127731,
        "lng": 120.783297,
        "ele": 93,
        "distanceKm": 16.026878774880117,
        "gradePct": -1.8321890652273318,
        "smoothedEle": 94.71917367856125,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127651,
        "lng": 120.783701,
        "ele": 93.5,
        "distanceKm": 16.069433034699866,
        "gradePct": -1.016763915614103,
        "smoothedEle": 95.05234012057144,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127724,
        "lng": 120.784182,
        "ele": 94.25,
        "distanceKm": 16.119639071879387,
        "gradePct": 0.0614417539678842,
        "smoothedEle": 95.89286949450774,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.128021,
        "lng": 120.784528,
        "ele": 95.75,
        "distanceKm": 16.168227532182975,
        "gradePct": 1.1657580686966866,
        "smoothedEle": 97.36402141459764,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1283375,
        "lng": 120.784908,
        "ele": 97.5,
        "distanceKm": 16.220864476077224,
        "gradePct": 2.3320880838868105,
        "smoothedEle": 99.41547993892911,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.128654,
        "lng": 120.785288,
        "ele": 99.25,
        "distanceKm": 16.273501354590223,
        "gradePct": 3.092279102887009,
        "smoothedEle": 101.30500850915449,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128747,
        "lng": 120.785461,
        "ele": 100.75,
        "distanceKm": 16.29410435116572,
        "gradePct": 3.2700664846518466,
        "smoothedEle": 102.0055103927214,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128734,
        "lng": 120.785601,
        "ele": 101.75,
        "distanceKm": 16.308597240878417,
        "gradePct": 3.384839962591902,
        "smoothedEle": 102.47769150578826,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128331,
        "lng": 120.786058,
        "ele": 105.25,
        "distanceKm": 16.37358921829837,
        "gradePct": 3.3511932029117277,
        "smoothedEle": 104.27537277682731,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128172,
        "lng": 120.786185,
        "ele": 108.25,
        "distanceKm": 16.39558266024074,
        "gradePct": 3.1400702496862083,
        "smoothedEle": 104.71029354104606,
        "gradeBand": "hard"
      },
      {
        "lat": 22.127984,
        "lng": 120.786207,
        "ele": 110.5,
        "distanceKm": 16.416609801894225,
        "gradePct": 2.8936356127885534,
        "smoothedEle": 105.03693060245948,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.127869,
        "lng": 120.786197,
        "ele": 111.75,
        "distanceKm": 16.42943865521717,
        "gradePct": 2.7747195448499538,
        "smoothedEle": 105.27271000918944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.127727,
        "lng": 120.78614,
        "ele": 112.25,
        "distanceKm": 16.44628462612305,
        "gradePct": 2.654711347936465,
        "smoothedEle": 105.63742064741822,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.127575,
        "lng": 120.785942,
        "ele": 111,
        "distanceKm": 16.472772798476495,
        "gradePct": 2.529586150868697,
        "smoothedEle": 106.33802752006628,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.127416,
        "lng": 120.785472,
        "ele": 110,
        "distanceKm": 16.524312628079485,
        "gradePct": 2.574706876468549,
        "smoothedEle": 108.06179363658374,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.127305,
        "lng": 120.784884,
        "ele": 108.5,
        "distanceKm": 16.586124652959764,
        "gradePct": 3.080365223529622,
        "smoothedEle": 110.68399170068946,
        "gradeBand": "hard"
      },
      {
        "lat": 22.1272,
        "lng": 120.784418,
        "ele": 104.25,
        "distanceKm": 16.635524770920174,
        "gradePct": 3.922783057249567,
        "smoothedEle": 113.25003885525084,
        "gradeBand": "hard"
      },
      {
        "lat": 22.127096,
        "lng": 120.784247,
        "ele": 103.5,
        "distanceKm": 16.65659570394054,
        "gradePct": 4.221934306463077,
        "smoothedEle": 114.35401521089122,
        "gradeBand": "hard"
      },
      {
        "lat": 22.126925,
        "lng": 120.784159,
        "ele": 105,
        "distanceKm": 16.67766015301091,
        "gradePct": 4.409978891304371,
        "smoothedEle": 115.3214444411845,
        "gradeBand": "hard"
      },
      {
        "lat": 22.126803,
        "lng": 120.784167,
        "ele": 107.5,
        "distanceKm": 16.691250957857058,
        "gradePct": 4.46301902170705,
        "smoothedEle": 115.88207352511274,
        "gradeBand": "hard"
      },
      {
        "lat": 22.126686,
        "lng": 120.784223,
        "ele": 111,
        "distanceKm": 16.705482231787602,
        "gradePct": 4.513217560359246,
        "smoothedEle": 116.45844011929981,
        "gradeBand": "hard"
      },
      {
        "lat": 22.126419,
        "lng": 120.784558,
        "ele": 115.25,
        "distanceKm": 16.7510033941217,
        "gradePct": 4.6406293753234085,
        "smoothedEle": 118.4753316675316,
        "gradeBand": "hard"
      },
      {
        "lat": 22.126231,
        "lng": 120.784856,
        "ele": 119,
        "distanceKm": 16.78814151982773,
        "gradePct": 4.747973632909665,
        "smoothedEle": 120.28470340233093,
        "gradeBand": "hard"
      },
      {
        "lat": 22.126229,
        "lng": 120.785223,
        "ele": 126,
        "distanceKm": 16.825945472455306,
        "gradePct": 4.777439623293584,
        "smoothedEle": 122.30732958214725,
        "gradeBand": "hard"
      },
      {
        "lat": 22.126606,
        "lng": 120.785665,
        "ele": 134.5,
        "distanceKm": 16.887834044360613,
        "gradePct": 5.413703482456908,
        "smoothedEle": 126.56853070044019,
        "gradeBand": "hard"
      },
      {
        "lat": 22.12693,
        "lng": 120.786174,
        "ele": 132.5,
        "distanceKm": 16.951449004687987,
        "gradePct": 6.717276561617555,
        "smoothedEle": 131.9315949645582,
        "gradeBand": "steep"
      },
      {
        "lat": 22.1270835,
        "lng": 120.78654250000001,
        "ele": 133.62500000000006,
        "distanceKm": 16.993067643592198,
        "gradePct": 7.163911332179869,
        "smoothedEle": 134.87608863617083,
        "gradeBand": "steep"
      },
      {
        "lat": 22.127237,
        "lng": 120.786911,
        "ele": 134.75,
        "distanceKm": 17.03468624478376,
        "gradePct": 7.320572229964246,
        "smoothedEle": 137.55030064227168,
        "gradeBand": "steep"
      },
      {
        "lat": 22.127485,
        "lng": 120.787469,
        "ele": 139.5,
        "distanceKm": 17.098436272980706,
        "gradePct": 6.924695908886623,
        "smoothedEle": 141.31174424096258,
        "gradeBand": "steep"
      },
      {
        "lat": 22.127847,
        "lng": 120.787814,
        "ele": 147.25,
        "distanceKm": 17.152131127406527,
        "gradePct": 6.1293168335291535,
        "smoothedEle": 144.23848840370147,
        "gradeBand": "steep"
      },
      {
        "lat": 22.128374,
        "lng": 120.787993,
        "ele": 147.75,
        "distanceKm": 17.213563143881903,
        "gradePct": 5.7164834727536435,
        "smoothedEle": 147.62599827981194,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128757,
        "lng": 120.788085,
        "ele": 148.5,
        "distanceKm": 17.25719244653945,
        "gradePct": 5.536086760881892,
        "smoothedEle": 149.95040782805285,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129143,
        "lng": 120.788217,
        "ele": 150.5,
        "distanceKm": 17.30221582531315,
        "gradePct": 5.352412096163737,
        "smoothedEle": 152.22258040305957,
        "gradeBand": "hard"
      },
      {
        "lat": 22.12954,
        "lng": 120.788523,
        "ele": 159,
        "distanceKm": 17.356457814997448,
        "gradePct": 5.205233829232701,
        "smoothedEle": 154.88754007399015,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129872,
        "lng": 120.788689,
        "ele": 162,
        "distanceKm": 17.39714209194549,
        "gradePct": 5.206661197020357,
        "smoothedEle": 157.1338241786657,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129994,
        "lng": 120.78868,
        "ele": 160.5,
        "distanceKm": 17.41073952965415,
        "gradePct": 5.270284773607533,
        "smoothedEle": 158.0108669135356,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130094,
        "lng": 120.788627,
        "ele": 161.25,
        "distanceKm": 17.423126867963976,
        "gradePct": 5.3726273022727655,
        "smoothedEle": 158.88077309712824,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130242,
        "lng": 120.788473,
        "ele": 160.25,
        "distanceKm": 17.44598399397121,
        "gradePct": 5.614329093783317,
        "smoothedEle": 160.5819206893439,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130519500000002,
        "lng": 120.7881065,
        "ele": 160,
        "distanceKm": 17.49474100369035,
        "gradePct": 5.930954550363402,
        "smoothedEle": 163.70726138015394,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130797,
        "lng": 120.78774,
        "ele": 159.75,
        "distanceKm": 17.54349795583827,
        "gradePct": 6.1920218847395825,
        "smoothedEle": 166.63485384515675,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131196,
        "lng": 120.787403,
        "ele": 164.5,
        "distanceKm": 17.599830315541265,
        "gradePct": 6.606527200445095,
        "smoothedEle": 170.52027058361548,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131305,
        "lng": 120.787364,
        "ele": 167.25,
        "distanceKm": 17.612598944858256,
        "gradePct": 6.593766552360643,
        "smoothedEle": 171.3289782541507,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131427,
        "lng": 120.787361,
        "ele": 171,
        "distanceKm": 17.6261682635421,
        "gradePct": 6.5553194339960985,
        "smoothedEle": 172.21776862794263,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131534,
        "lng": 120.787432,
        "ele": 175.25,
        "distanceKm": 17.640134003143363,
        "gradePct": 6.452993342326787,
        "smoothedEle": 173.05252027379387,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131633,
        "lng": 120.78764,
        "ele": 182,
        "distanceKm": 17.66422117124866,
        "gradePct": 6.319859639246582,
        "smoothedEle": 174.3906491535737,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131616,
        "lng": 120.78778,
        "ele": 184.75,
        "distanceKm": 17.678764866112083,
        "gradePct": 6.2193581699578795,
        "smoothedEle": 175.12190193808547,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131268,
        "lng": 120.788014,
        "ele": 179.5,
        "distanceKm": 17.724353305568037,
        "gradePct": 6.043553415340362,
        "smoothedEle": 177.5724275034971,
        "gradeBand": "steep"
      },
      {
        "lat": 22.131062,
        "lng": 120.788232,
        "ele": 177.75,
        "distanceKm": 17.756429799950528,
        "gradePct": 5.935373145419369,
        "smoothedEle": 179.39754934312654,
        "gradeBand": "hard"
      },
      {
        "lat": 22.131017,
        "lng": 120.788381,
        "ele": 180,
        "distanceKm": 17.772572314393816,
        "gradePct": 5.940489205615414,
        "smoothedEle": 180.52118051424983,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130842,
        "lng": 120.788892,
        "ele": 189.25,
        "distanceKm": 17.8286886477651,
        "gradePct": 6.0015332013240865,
        "smoothedEle": 184.37148189487408,
        "gradeBand": "steep"
      },
      {
        "lat": 22.130499,
        "lng": 120.789254,
        "ele": 191.75,
        "distanceKm": 17.882027003208478,
        "gradePct": 6.002407054953757,
        "smoothedEle": 187.30206643173045,
        "gradeBand": "steep"
      },
      {
        "lat": 22.130131,
        "lng": 120.789321,
        "ele": 186.25,
        "distanceKm": 17.923524665864868,
        "gradePct": 5.450711760153131,
        "smoothedEle": 188.42930896881387,
        "gradeBand": "hard"
      },
      {
        "lat": 22.12964305205756,
        "lng": 120.78931998426002,
        "ele": 188.13845734835968,
        "distanceKm": 17.977782177348406,
        "gradePct": 4.490879532393906,
        "smoothedEle": 189.86040310742248,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129155,
        "lng": 120.789329,
        "ele": 194.75,
        "distanceKm": 18.032059110103084,
        "gradePct": 3.950931191947646,
        "smoothedEle": 192.45852855615556,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128718,
        "lng": 120.789283,
        "ele": 194.5,
        "distanceKm": 18.080881822826942,
        "gradePct": 3.818827116061612,
        "smoothedEle": 194.8768006902223,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128395,
        "lng": 120.789223,
        "ele": 194,
        "distanceKm": 18.117325692317984,
        "gradePct": 4.170895457013061,
        "smoothedEle": 196.60271096112737,
        "gradeBand": "hard"
      },
      {
        "lat": 22.127952,
        "lng": 120.789112,
        "ele": 191.75,
        "distanceKm": 18.167894618465933,
        "gradePct": 4.808786856718615,
        "smoothedEle": 199.21718292937894,
        "gradeBand": "hard"
      },
      {
        "lat": 22.127847,
        "lng": 120.789134,
        "ele": 193,
        "distanceKm": 18.179787985187456,
        "gradePct": 5.002050667358606,
        "smoothedEle": 199.96051834947414,
        "gradeBand": "hard"
      },
      {
        "lat": 22.127806,
        "lng": 120.789161,
        "ele": 194,
        "distanceKm": 18.185128321477098,
        "gradePct": 5.041120703844233,
        "smoothedEle": 200.29428936757677,
        "gradeBand": "hard"
      },
      {
        "lat": 22.127765,
        "lng": 120.789205,
        "ele": 194.75,
        "distanceKm": 18.191556815370134,
        "gradePct": 5.08815172910676,
        "smoothedEle": 200.69607023589157,
        "gradeBand": "hard"
      },
      {
        "lat": 22.127718,
        "lng": 120.789313,
        "ele": 196,
        "distanceKm": 18.203847812481076,
        "gradePct": 5.172040506498139,
        "smoothedEle": 201.4521926134847,
        "gradeBand": "hard"
      },
      {
        "lat": 22.127735,
        "lng": 120.789699,
        "ele": 200.5,
        "distanceKm": 18.243652718166675,
        "gradePct": 5.395168352077297,
        "smoothedEle": 203.82311641820974,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128072,
        "lng": 120.789991,
        "ele": 209.25,
        "distanceKm": 18.291703323694072,
        "gradePct": 5.490987265170366,
        "smoothedEle": 206.37126030389862,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128472,
        "lng": 120.790239,
        "ele": 213.75,
        "distanceKm": 18.342995152615483,
        "gradePct": 5.711130159658672,
        "smoothedEle": 209.3521120663022,
        "gradeBand": "hard"
      },
      {
        "lat": 22.128907,
        "lng": 120.79041,
        "ele": 216,
        "distanceKm": 18.394472215586525,
        "gradePct": 5.837997187307699,
        "smoothedEle": 212.5514153436782,
        "gradeBand": "hard"
      },
      {
        "lat": 22.129297,
        "lng": 120.790546,
        "ele": 217.5,
        "distanceKm": 18.44004476142684,
        "gradePct": 6.0066763858622565,
        "smoothedEle": 215.6215662684587,
        "gradeBand": "steep"
      },
      {
        "lat": 22.129644,
        "lng": 120.790659,
        "ele": 218,
        "distanceKm": 18.480346809585434,
        "gradePct": 6.214111310256151,
        "smoothedEle": 218.19724218943898,
        "gradeBand": "steep"
      },
      {
        "lat": 22.129977,
        "lng": 120.79084,
        "ele": 219.75,
        "distanceKm": 18.52180348577805,
        "gradePct": 6.3081350067373805,
        "smoothedEle": 220.73681715473953,
        "gradeBand": "steep"
      },
      {
        "lat": 22.130159,
        "lng": 120.791084,
        "ele": 222.75,
        "distanceKm": 18.554071371022363,
        "gradePct": 5.980682974436611,
        "smoothedEle": 222.00186580975492,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130228,
        "lng": 120.791328,
        "ele": 224.5,
        "distanceKm": 18.58034922007753,
        "gradePct": 5.613813630913135,
        "smoothedEle": 222.90129738830524,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130165,
        "lng": 120.792017,
        "ele": 225.5,
        "distanceKm": 18.651663440871687,
        "gradePct": 3.842482221912135,
        "smoothedEle": 224.04907245015988,
        "gradeBand": "hard"
      },
      {
        "lat": 22.130109,
        "lng": 120.792556,
        "ele": 228,
        "distanceKm": 18.707530387880567,
        "gradePct": 2.3039862451677147,
        "smoothedEle": 224.47044067582044,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.130233,
        "lng": 120.792884,
        "ele": 232,
        "distanceKm": 18.744020767305955,
        "gradePct": 1.702786249539563,
        "smoothedEle": 225.0134086841075,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.130605854306562,
        "lng": 120.79331213366505,
        "ele": 228.59008018923583,
        "distanceKm": 18.804548690065165,
        "gradePct": 1.6283574899846855,
        "smoothedEle": 226.54749356645075,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.130985,
        "lng": 120.793734,
        "ele": 223.25,
        "distanceKm": 18.86509285984057,
        "gradePct": 1.6088548139973882,
        "smoothedEle": 227.3680714942681,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.131214,
        "lng": 120.794066,
        "ele": 219.75,
        "distanceKm": 18.907728835909655,
        "gradePct": 1.2841614999265873,
        "smoothedEle": 227.04171653428455,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.131239,
        "lng": 120.794171,
        "ele": 220.25,
        "distanceKm": 18.91889565593631,
        "gradePct": 1.134080791007936,
        "smoothedEle": 226.9077146939647,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13121,
        "lng": 120.794295,
        "ele": 220.5,
        "distanceKm": 18.93206876002918,
        "gradePct": 0.9508562530565888,
        "smoothedEle": 226.73727821658505,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.131141,
        "lng": 120.794366,
        "ele": 222,
        "distanceKm": 18.942668258555884,
        "gradePct": 0.778115686437519,
        "smoothedEle": 226.54951505434403,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.130944,
        "lng": 120.794548,
        "ele": 224.75,
        "distanceKm": 18.971500170461603,
        "gradePct": 0.16033217912489364,
        "smoothedEle": 226.03054064004107,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.130679,
        "lng": 120.794755,
        "ele": 230.25,
        "distanceKm": 19.007871820801448,
        "gradePct": -0.564068936473108,
        "smoothedEle": 225.46439533553055,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130494,
        "lng": 120.794987,
        "ele": 235.25,
        "distanceKm": 19.039403117694047,
        "gradePct": -1.0014300506714342,
        "smoothedEle": 225.01702864543765,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130487,
        "lng": 120.795094,
        "ele": 236.75,
        "distanceKm": 19.050451905836166,
        "gradePct": -1.1496781354220968,
        "smoothedEle": 224.87028086149,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130549,
        "lng": 120.795163,
        "ele": 236,
        "distanceKm": 19.06035347453145,
        "gradePct": -1.358767268743255,
        "smoothedEle": 224.58630228331077,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130615,
        "lng": 120.795197,
        "ele": 234.25,
        "distanceKm": 19.068485130476965,
        "gradePct": -1.4945102203066138,
        "smoothedEle": 224.35308508665085,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1307,
        "lng": 120.795196,
        "ele": 231.75,
        "distanceKm": 19.077937273542172,
        "gradePct": -1.5938792301423261,
        "smoothedEle": 224.08199610762045,
        "gradeBand": "descent"
      },
      {
        "lat": 22.131141,
        "lng": 120.795141,
        "ele": 222.5,
        "distanceKm": 19.127300461646065,
        "gradePct": -2.048973014695214,
        "smoothedEle": 222.70102546569478,
        "gradeBand": "descent"
      },
      {
        "lat": 22.131466,
        "lng": 120.795205,
        "ele": 219.5,
        "distanceKm": 19.164035195227534,
        "gradePct": -2.298725138466915,
        "smoothedEle": 221.5674599173205,
        "gradeBand": "descent"
      },
      {
        "lat": 22.131691,
        "lng": 120.795534,
        "ele": 219,
        "distanceKm": 19.20615794731023,
        "gradePct": -2.5108322182225695,
        "smoothedEle": 220.46940830911524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.131699,
        "lng": 120.795955,
        "ele": 224.75,
        "distanceKm": 19.249531025201847,
        "gradePct": -2.711112781978609,
        "smoothedEle": 219.460286249075,
        "gradeBand": "descent"
      },
      {
        "lat": 22.131862,
        "lng": 120.796142,
        "ele": 223,
        "distanceKm": 19.275979282458234,
        "gradePct": -2.650336238337639,
        "smoothedEle": 218.83747912925213,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132232,
        "lng": 120.796348,
        "ele": 214.25,
        "distanceKm": 19.3222707508677,
        "gradePct": -3.000030319156661,
        "smoothedEle": 216.84167459895625,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132561,
        "lng": 120.796568,
        "ele": 208,
        "distanceKm": 19.365303555300603,
        "gradePct": -3.3535762473414907,
        "smoothedEle": 214.82724394152208,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132691,
        "lng": 120.796771,
        "ele": 205.5,
        "distanceKm": 19.390723177612543,
        "gradePct": -3.49252119826309,
        "smoothedEle": 213.88671791598028,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132694,
        "lng": 120.796891,
        "ele": 204.75,
        "distanceKm": 19.403087862913107,
        "gradePct": -3.5378470947819505,
        "smoothedEle": 213.47374476671726,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13245,
        "lng": 120.797332,
        "ele": 210,
        "distanceKm": 19.455997576454937,
        "gradePct": -3.8303767831222038,
        "smoothedEle": 211.6472574640106,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13222,
        "lng": 120.797669,
        "ele": 218.5,
        "distanceKm": 19.499113345308274,
        "gradePct": -3.9840121354009312,
        "smoothedEle": 209.87205579061643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132192,
        "lng": 120.797757,
        "ele": 219.5,
        "distanceKm": 19.508697330114828,
        "gradePct": -3.9982469475583713,
        "smoothedEle": 209.43038345417293,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132207,
        "lng": 120.797837,
        "ele": 219,
        "distanceKm": 19.51710459371679,
        "gradePct": -3.9985640075342985,
        "smoothedEle": 209.06727963168817,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13223,
        "lng": 120.797919,
        "ele": 218,
        "distanceKm": 19.52592946005581,
        "gradePct": -3.9846786049425873,
        "smoothedEle": 208.7010476786189,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132312,
        "lng": 120.798045,
        "ele": 215,
        "distanceKm": 19.54179049359093,
        "gradePct": -3.9425555669561163,
        "smoothedEle": 208.04281478691138,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13262,
        "lng": 120.798336,
        "ele": 206,
        "distanceKm": 19.5873024893785,
        "gradePct": -3.522883333706245,
        "smoothedEle": 206.96751671322733,
        "gradeBand": "descent"
      },
      {
        "lat": 22.132946,
        "lng": 120.79854,
        "ele": 204,
        "distanceKm": 19.62920177322259,
        "gradePct": -3.140543520726322,
        "smoothedEle": 206.2911838292364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13335,
        "lng": 120.798802,
        "ele": 202,
        "distanceKm": 19.68160711947068,
        "gradePct": -2.732766396200158,
        "smoothedEle": 205.12730526020997,
        "gradeBand": "descent"
      },
      {
        "lat": 22.133662,
        "lng": 120.799038,
        "ele": 201.25,
        "distanceKm": 19.72396847655549,
        "gradePct": -2.6547508010257084,
        "smoothedEle": 203.4729268918307,
        "gradeBand": "descent"
      },
      {
        "lat": 22.134122,
        "lng": 120.799355,
        "ele": 202.25,
        "distanceKm": 19.784651234209687,
        "gradePct": -3.5307222428056075,
        "smoothedEle": 199.96871262662606,
        "gradeBand": "descent"
      },
      {
        "lat": 22.134356,
        "lng": 120.79945,
        "ele": 204.5,
        "distanceKm": 19.812449959092053,
        "gradePct": -3.961066042098295,
        "smoothedEle": 198.63945738741657,
        "gradeBand": "descent"
      },
      {
        "lat": 22.134648,
        "lng": 120.799387,
        "ele": 202.75,
        "distanceKm": 19.845560997781494,
        "gradePct": -4.098995933105186,
        "smoothedEle": 197.72986737435025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.134957,
        "lng": 120.799216,
        "ele": 197.125,
        "distanceKm": 19.88417159023923,
        "gradePct": -3.882450744067768,
        "smoothedEle": 197.2622510560664,
        "gradeBand": "descent"
      },
      {
        "lat": 22.135266,
        "lng": 120.799045,
        "ele": 191.5,
        "distanceKm": 19.922782165071414,
        "gradePct": -3.150115368490003,
        "smoothedEle": 197.21902630554646,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13566,
        "lng": 120.798977,
        "ele": 190,
        "distanceKm": 19.96714935054543,
        "gradePct": -1.913828347156233,
        "smoothedEle": 197.15172770754393,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136015,
        "lng": 120.798965,
        "ele": 189,
        "distanceKm": 20.006642949538683,
        "gradePct": -1.1269236823008169,
        "smoothedEle": 196.66328455305396,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136163,
        "lng": 120.798975,
        "ele": 188.75,
        "distanceKm": 20.023132022054217,
        "gradePct": -1.059843689470956,
        "smoothedEle": 196.22632413139232,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136219,
        "lng": 120.799013,
        "ele": 189.25,
        "distanceKm": 20.03048686272473,
        "gradePct": -1.056273284251777,
        "smoothedEle": 196.03142085362376,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136286,
        "lng": 120.799116,
        "ele": 190.75,
        "distanceKm": 20.043450353865115,
        "gradePct": -1.0631579662770785,
        "smoothedEle": 195.66153272850485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13632,
        "lng": 120.799179,
        "ele": 191.5,
        "distanceKm": 20.050960307529678,
        "gradePct": -1.1101552750701171,
        "smoothedEle": 195.4441653037747,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136333,
        "lng": 120.799282,
        "ele": 191.75,
        "distanceKm": 20.0616672216587,
        "gradePct": -1.194808778955992,
        "smoothedEle": 195.14518590699015,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136281,
        "lng": 120.799467,
        "ele": 193.25,
        "distanceKm": 20.081579992137154,
        "gradePct": -1.3227718051627353,
        "smoothedEle": 194.64809452078492,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136098,
        "lng": 120.799891,
        "ele": 200.5,
        "distanceKm": 20.12975960852976,
        "gradePct": -1.2445787287476735,
        "smoothedEle": 194.719285076343,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136097,
        "lng": 120.80011,
        "ele": 203,
        "distanceKm": 20.152316674233553,
        "gradePct": -1.0703047155725651,
        "smoothedEle": 195.03361729926334,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136246,
        "lng": 120.800465,
        "ele": 201.5,
        "distanceKm": 20.19245984254759,
        "gradePct": -0.34486612805791717,
        "smoothedEle": 196.148964052154,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136435,
        "lng": 120.800821,
        "ele": 195.25,
        "distanceKm": 20.234723059930946,
        "gradePct": 0.9791548950699003,
        "smoothedEle": 197.8688589568643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136624,
        "lng": 120.801177,
        "ele": 189,
        "distanceKm": 20.27698623462502,
        "gradePct": 2.825961341074073,
        "smoothedEle": 200.414693224136,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13666,
        "lng": 120.801283,
        "ele": 187.75,
        "distanceKm": 20.2886148111671,
        "gradePct": 3.242097372988053,
        "smoothedEle": 201.14268396710298,
        "gradeBand": "hard"
      },
      {
        "lat": 22.136652,
        "lng": 120.801373,
        "ele": 188.5,
        "distanceKm": 20.297927273197907,
        "gradePct": 3.523362157871245,
        "smoothedEle": 201.7189736992622,
        "gradeBand": "hard"
      },
      {
        "lat": 22.136593,
        "lng": 120.801466,
        "ele": 191.25,
        "distanceKm": 20.309537404539835,
        "gradePct": 3.8651851132446344,
        "smoothedEle": 202.419774825476,
        "gradeBand": "hard"
      },
      {
        "lat": 22.136344,
        "lng": 120.801773,
        "ele": 201.75,
        "distanceKm": 20.35156674797042,
        "gradePct": 4.663661649491887,
        "smoothedEle": 204.35049039198302,
        "gradeBand": "hard"
      },
      {
        "lat": 22.136281,
        "lng": 120.802344,
        "ele": 204.25,
        "distanceKm": 20.41079485443255,
        "gradePct": 4.1549354064676445,
        "smoothedEle": 205.20497525550746,
        "gradeBand": "hard"
      },
      {
        "lat": 22.136257,
        "lng": 120.802732,
        "ele": 208.75,
        "distanceKm": 20.450847441912032,
        "gradePct": 3.4854413151323467,
        "smoothedEle": 205.8110364433051,
        "gradeBand": "hard"
      },
      {
        "lat": 22.136102,
        "lng": 120.803216,
        "ele": 218.25,
        "distanceKm": 20.503594257042828,
        "gradePct": 2.9453836436340843,
        "smoothedEle": 207.9518067688884,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136117,
        "lng": 120.803359,
        "ele": 220.5,
        "distanceKm": 20.518417258557513,
        "gradePct": 2.9629742096243454,
        "smoothedEle": 208.7536399757713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.136425,
        "lng": 120.803449,
        "ele": 221.75,
        "distanceKm": 20.553897709613857,
        "gradePct": 3.1632676581176016,
        "smoothedEle": 210.71065453008586,
        "gradeBand": "hard"
      },
      {
        "lat": 22.13673,
        "lng": 120.803141,
        "ele": 211.5,
        "distanceKm": 20.600336701828393,
        "gradePct": 3.571641823465056,
        "smoothedEle": 212.19737896325879,
        "gradeBand": "hard"
      },
      {
        "lat": 22.136944,
        "lng": 120.802879,
        "ele": 206.5,
        "distanceKm": 20.636315316008506,
        "gradePct": 3.6169475795150263,
        "smoothedEle": 212.82503675806754,
        "gradeBand": "hard"
      },
      {
        "lat": 22.137338,
        "lng": 120.802878,
        "ele": 209.5,
        "distanceKm": 20.6801262986936,
        "gradePct": 3.275550657736898,
        "smoothedEle": 213.55044282723776,
        "gradeBand": "hard"
      },
      {
        "lat": 22.137691,
        "lng": 120.803118,
        "ele": 217.5,
        "distanceKm": 20.726513404544768,
        "gradePct": 2.6259070793054016,
        "smoothedEle": 214.45201766610705,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.138041,
        "lng": 120.803134,
        "ele": 217,
        "distanceKm": 20.765466557876405,
        "gradePct": 1.7472752771873479,
        "smoothedEle": 214.5755768034708,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1386,
        "lng": 120.802973,
        "ele": 211.75,
        "distanceKm": 20.829798550610217,
        "gradePct": 0.6391315357874015,
        "smoothedEle": 213.98961288831939,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.138952,
        "lng": 120.802941,
        "ele": 210.75,
        "distanceKm": 20.86907774246209,
        "gradePct": 0.29910398000997523,
        "smoothedEle": 213.96571287409756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13905,
        "lng": 120.80298,
        "ele": 211,
        "distanceKm": 20.880691635147464,
        "gradePct": 0.2289830590774792,
        "smoothedEle": 214.01939676437703,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.139129,
        "lng": 120.803052,
        "ele": 211.75,
        "distanceKm": 20.892187703424774,
        "gradePct": 0.13922775517005498,
        "smoothedEle": 214.06332251273412,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.139168,
        "lng": 120.803146,
        "ele": 212.25,
        "distanceKm": 20.902796261334526,
        "gradePct": 0.06796002920751244,
        "smoothedEle": 214.12697386019263,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.139174,
        "lng": 120.803233,
        "ele": 213,
        "distanceKm": 20.91178178576781,
        "gradePct": -0.003087179715834065,
        "smoothedEle": 214.15952113629183,
        "gradeBand": "descent"
      },
      {
        "lat": 22.138897,
        "lng": 120.80342,
        "ele": 217.25,
        "distanceKm": 20.94810901637643,
        "gradePct": 0.027624464854554373,
        "smoothedEle": 214.57576772962798,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13883,
        "lng": 120.803613,
        "ele": 220.25,
        "distanceKm": 20.96933766134937,
        "gradePct": 0.05410483519798978,
        "smoothedEle": 214.6485267710256,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.138901,
        "lng": 120.803744,
        "ele": 220.75,
        "distanceKm": 20.984970293786645,
        "gradePct": 0.2200027959027161,
        "smoothedEle": 214.83793384175897,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1391735,
        "lng": 120.8039625,
        "ele": 218.00000000000014,
        "distanceKm": 21.022714127548458,
        "gradePct": 0.6883372918580786,
        "smoothedEle": 215.43081549452404,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.139446,
        "lng": 120.804181,
        "ele": 215.25,
        "distanceKm": 21.060457935345635,
        "gradePct": 1.1256859874090606,
        "smoothedEle": 216.22232970001775,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13985,
        "lng": 120.804246,
        "ele": 211,
        "distanceKm": 21.105876863252735,
        "gradePct": 1.70223974585405,
        "smoothedEle": 217.54261187714076,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.139994,
        "lng": 120.804249,
        "ele": 209,
        "distanceKm": 21.121891935840154,
        "gradePct": 1.8662321945426392,
        "smoothedEle": 218.00783018116903,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140089,
        "lng": 120.804299,
        "ele": 208.25,
        "distanceKm": 21.133643903591597,
        "gradePct": 1.955365446551248,
        "smoothedEle": 218.32075370306458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140149,
        "lng": 120.80442,
        "ele": 209.5,
        "distanceKm": 21.14777989574874,
        "gradePct": 2.053031329952624,
        "smoothedEle": 218.6780592421659,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140196,
        "lng": 120.804873,
        "ele": 217.25,
        "distanceKm": 21.194728899154285,
        "gradePct": 2.1382449583925554,
        "smoothedEle": 219.26771232259296,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140373,
        "lng": 120.805372,
        "ele": 225,
        "distanceKm": 21.24976350945746,
        "gradePct": 1.7954541629261407,
        "smoothedEle": 219.58896839055456,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140595,
        "lng": 120.805803,
        "ele": 225.75,
        "distanceKm": 21.30055665568116,
        "gradePct": 1.9941787618879727,
        "smoothedEle": 221.376316361776,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140806,
        "lng": 120.806109,
        "ele": 226.25,
        "distanceKm": 21.33984754624221,
        "gradePct": 2.5002879526296855,
        "smoothedEle": 223.47813472373633,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.141159,
        "lng": 120.806385,
        "ele": 224.25,
        "distanceKm": 21.38831185234725,
        "gradePct": 3.4760073965799427,
        "smoothedEle": 226.13913261656126,
        "gradeBand": "hard"
      },
      {
        "lat": 22.141358,
        "lng": 120.806549,
        "ele": 220,
        "distanceKm": 21.416149846898133,
        "gradePct": 4.030382335170216,
        "smoothedEle": 227.45351847876,
        "gradeBand": "hard"
      },
      {
        "lat": 22.141609,
        "lng": 120.806943,
        "ele": 220.75,
        "distanceKm": 21.46540132898958,
        "gradePct": 4.231735263494515,
        "smoothedEle": 228.60271443881103,
        "gradeBand": "hard"
      },
      {
        "lat": 22.141825,
        "lng": 120.807383,
        "ele": 232.5,
        "distanceKm": 21.516690425985246,
        "gradePct": 3.0981677945441075,
        "smoothedEle": 228.435708353724,
        "gradeBand": "hard"
      },
      {
        "lat": 22.142021,
        "lng": 120.807679,
        "ele": 242,
        "distanceKm": 21.55416592178739,
        "gradePct": 1.8853174991632569,
        "smoothedEle": 228.03493938416057,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.142314,
        "lng": 120.807748,
        "ele": 240.5,
        "distanceKm": 21.587512149315952,
        "gradePct": 0.7813471712759564,
        "smoothedEle": 227.6579181888822,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.142851,
        "lng": 120.80769,
        "ele": 233,
        "distanceKm": 21.647521971708862,
        "gradePct": -0.35551273221887086,
        "smoothedEle": 227.47450589108743,
        "gradeBand": "descent"
      },
      {
        "lat": 22.143335,
        "lng": 120.807557,
        "ele": 227,
        "distanceKm": 21.703056309702475,
        "gradePct": -0.032811658377099324,
        "smoothedEle": 228.41448005496358,
        "gradeBand": "descent"
      },
      {
        "lat": 22.143714,
        "lng": 120.807343,
        "ele": 221,
        "distanceKm": 21.75061486885598,
        "gradePct": 0.5564543048110429,
        "smoothedEle": 229.18582352402512,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144051,
        "lng": 120.807299,
        "ele": 220,
        "distanceKm": 21.788360633780144,
        "gradePct": 0.713106468138167,
        "smoothedEle": 229.08153784160902,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144119,
        "lng": 120.807318,
        "ele": 220.5,
        "distanceKm": 21.796171016555586,
        "gradePct": 0.6469383551915677,
        "smoothedEle": 228.92533018610015,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144271,
        "lng": 120.807402,
        "ele": 220.25,
        "distanceKm": 21.81515819537876,
        "gradePct": 0.486082500999716,
        "smoothedEle": 228.54558660963664,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144417,
        "lng": 120.807762,
        "ele": 221.75,
        "distanceKm": 21.85563409405304,
        "gradePct": 0.1843727920147138,
        "smoothedEle": 227.98055725192486,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.14438,
        "lng": 120.80818,
        "ele": 227.25,
        "distanceKm": 21.89888130134924,
        "gradePct": -0.16991229416947878,
        "smoothedEle": 228.00398927832035,
        "gradeBand": "descent"
      },
      {
        "lat": 22.144346666348717,
        "lng": 120.80866801797643,
        "ele": 230.5833761343692,
        "distanceKm": 21.94928021980357,
        "gradePct": -0.17059212458872314,
        "smoothedEle": 228.82299284887537,
        "gradeBand": "descent"
      },
      {
        "lat": 22.144338,
        "lng": 120.809158,
        "ele": 231.75,
        "distanceKm": 21.999754147243802,
        "gradePct": 0.7466509786755919,
        "smoothedEle": 230.346969529687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144256,
        "lng": 120.809586,
        "ele": 232,
        "distanceKm": 22.04476830850512,
        "gradePct": 2.1920927537801242,
        "smoothedEle": 232.5164253170135,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.14418,
        "lng": 120.810035,
        "ele": 233.87499999999991,
        "distanceKm": 22.09177804479046,
        "gradePct": 3.6601825643967336,
        "smoothedEle": 235.3205057494643,
        "gradeBand": "hard"
      },
      {
        "lat": 22.144104,
        "lng": 120.810484,
        "ele": 235.75,
        "distanceKm": 22.138787805631942,
        "gradePct": 4.5623245487980055,
        "smoothedEle": 237.77713581392229,
        "gradeBand": "hard"
      },
      {
        "lat": 22.144052,
        "lng": 120.810728,
        "ele": 238.75,
        "distanceKm": 22.16457476671746,
        "gradePct": 4.693533402416551,
        "smoothedEle": 238.67185317805726,
        "gradeBand": "hard"
      },
      {
        "lat": 22.144145,
        "lng": 120.810972,
        "ele": 238,
        "distanceKm": 22.191749630367227,
        "gradePct": 4.632009357961168,
        "smoothedEle": 239.36930510978618,
        "gradeBand": "hard"
      },
      {
        "lat": 22.144322,
        "lng": 120.811164,
        "ele": 238.5,
        "distanceKm": 22.2196494575083,
        "gradePct": 4.381973632710116,
        "smoothedEle": 240.06977051545994,
        "gradeBand": "hard"
      },
      {
        "lat": 22.144338,
        "lng": 120.811381,
        "ele": 241,
        "distanceKm": 22.242069645681088,
        "gradePct": 4.110819591598258,
        "smoothedEle": 240.60800254820228,
        "gradeBand": "hard"
      },
      {
        "lat": 22.144333000000003,
        "lng": 120.8117485,
        "ele": 245.75,
        "distanceKm": 22.27992366483716,
        "gradePct": 3.311932625388008,
        "smoothedEle": 241.23726992942983,
        "gradeBand": "hard"
      },
      {
        "lat": 22.144328,
        "lng": 120.812116,
        "ele": 250.5,
        "distanceKm": 22.317777685338758,
        "gradePct": 2.494662063729871,
        "smoothedEle": 241.66851576455122,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144378,
        "lng": 120.812349,
        "ele": 251.5,
        "distanceKm": 22.34241068556276,
        "gradePct": 1.9484300155119383,
        "smoothedEle": 241.79969710813612,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144532,
        "lng": 120.812552,
        "ele": 248.25,
        "distanceKm": 22.369435843125295,
        "gradePct": 1.4744226163081515,
        "smoothedEle": 241.74545955665837,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144969,
        "lng": 120.812875,
        "ele": 242.25,
        "distanceKm": 22.42832452340016,
        "gradePct": 0.4384956366457702,
        "smoothedEle": 241.15502044890033,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.145355,
        "lng": 120.81291,
        "ele": 243.5,
        "distanceKm": 22.471396929751076,
        "gradePct": -0.20407954534046338,
        "smoothedEle": 240.6873664116666,
        "gradeBand": "descent"
      },
      {
        "lat": 22.145817,
        "lng": 120.812786,
        "ele": 239.5,
        "distanceKm": 22.524332687308554,
        "gradePct": -0.7219294423416781,
        "smoothedEle": 240.2595650907143,
        "gradeBand": "descent"
      },
      {
        "lat": 22.146185,
        "lng": 120.812727,
        "ele": 236.5,
        "distanceKm": 22.5657011925681,
        "gradePct": -0.9362964868344823,
        "smoothedEle": 239.88036175860046,
        "gradeBand": "descent"
      },
      {
        "lat": 22.146707,
        "lng": 120.812608,
        "ele": 232.75,
        "distanceKm": 22.625024843948314,
        "gradePct": -1.092490558110118,
        "smoothedEle": 239.00312310671515,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147071,
        "lng": 120.812541,
        "ele": 231.5,
        "distanceKm": 22.66608385017546,
        "gradePct": -1.0038320329333352,
        "smoothedEle": 238.73738853805577,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147138,
        "lng": 120.812556,
        "ele": 231.75,
        "distanceKm": 22.673692408275183,
        "gradePct": -0.9638113208337308,
        "smoothedEle": 238.74119281710563,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147201,
        "lng": 120.812601,
        "ele": 232,
        "distanceKm": 22.68209202366336,
        "gradePct": -0.9277705920664976,
        "smoothedEle": 238.7453926247997,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147294,
        "lng": 120.812718,
        "ele": 232.75,
        "distanceKm": 22.697970945162876,
        "gradePct": -0.8646405300346944,
        "smoothedEle": 238.74332694592349,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147321,
        "lng": 120.812822,
        "ele": 233.25,
        "distanceKm": 22.709094800772018,
        "gradePct": -0.8340152624542897,
        "smoothedEle": 238.71467983262792,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147185,
        "lng": 120.813303,
        "ele": 239.25,
        "distanceKm": 22.760890221105072,
        "gradePct": -0.7959616525441533,
        "smoothedEle": 238.33253809883504,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147124,
        "lng": 120.813674,
        "ele": 243.75,
        "distanceKm": 22.799697241292996,
        "gradePct": -0.6795693436319847,
        "smoothedEle": 238.01851214139526,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147304,
        "lng": 120.814245,
        "ele": 242.5,
        "distanceKm": 22.86181779965551,
        "gradePct": -0.40813154155468256,
        "smoothedEle": 237.948735404601,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147551,
        "lng": 120.81472,
        "ele": 242.5,
        "distanceKm": 22.91792094227046,
        "gradePct": -0.1382795050063242,
        "smoothedEle": 238.3730023817719,
        "gradeBand": "descent"
      },
      {
        "lat": 22.147808,
        "lng": 120.814993,
        "ele": 242,
        "distanceKm": 22.95801066880333,
        "gradePct": 0.20331207758268094,
        "smoothedEle": 238.76040731972358,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.148178,
        "lng": 120.815279,
        "ele": 236,
        "distanceKm": 23.00860997784085,
        "gradePct": 0.47771133613693617,
        "smoothedEle": 238.96392360822267,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.148352,
        "lng": 120.81564,
        "ele": 234.25,
        "distanceKm": 23.05052243374383,
        "gradePct": 0.41022119687890923,
        "smoothedEle": 238.7818652853195,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.148501,
        "lng": 120.816134,
        "ele": 235.5,
        "distanceKm": 23.104029233281402,
        "gradePct": 0.0865737786441375,
        "smoothedEle": 238.4410971183835,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.148674,
        "lng": 120.816433,
        "ele": 236,
        "distanceKm": 23.14033793674088,
        "gradePct": -0.15176275961519592,
        "smoothedEle": 238.28610229511352,
        "gradeBand": "descent"
      },
      {
        "lat": 22.148903,
        "lng": 120.81674650000001,
        "ele": 237.00000000000006,
        "distanceKm": 23.18145810029212,
        "gradePct": -0.3886133812554973,
        "smoothedEle": 238.0774888456498,
        "gradeBand": "descent"
      },
      {
        "lat": 22.149132,
        "lng": 120.81706,
        "ele": 238,
        "distanceKm": 23.222578222597217,
        "gradePct": -0.4896412665371361,
        "smoothedEle": 237.9239661478635,
        "gradeBand": "descent"
      },
      {
        "lat": 22.149494,
        "lng": 120.817581,
        "ele": 239.25,
        "distanceKm": 23.289655768708236,
        "gradePct": 0.06615027902795158,
        "smoothedEle": 238.66493780250653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.149867,
        "lng": 120.818037,
        "ele": 240.5,
        "distanceKm": 23.352311700347165,
        "gradePct": 0.8506367194235795,
        "smoothedEle": 239.9266296689345,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.150146,
        "lng": 120.818233,
        "ele": 240.25,
        "distanceKm": 23.38932413540629,
        "gradePct": 1.4610496086593994,
        "smoothedEle": 240.97022008291617,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.150477,
        "lng": 120.818186,
        "ele": 239.75,
        "distanceKm": 23.426446638211658,
        "gradePct": 2.228662190616313,
        "smoothedEle": 242.42402295574055,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.150812,
        "lng": 120.818007,
        "ele": 240.5,
        "distanceKm": 23.46800906320753,
        "gradePct": 2.9150202306210207,
        "smoothedEle": 244.25585807938936,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.151168,
        "lng": 120.818153,
        "ele": 242.75,
        "distanceKm": 23.510354041307014,
        "gradePct": 3.6125144199275483,
        "smoothedEle": 246.30676424641737,
        "gradeBand": "hard"
      },
      {
        "lat": 22.151588,
        "lng": 120.818361,
        "ele": 243.25,
        "distanceKm": 23.561734487894707,
        "gradePct": 4.149060873478846,
        "smoothedEle": 248.49043322639432,
        "gradeBand": "hard"
      },
      {
        "lat": 22.152016,
        "lng": 120.818447,
        "ele": 249.25,
        "distanceKm": 23.610143118797353,
        "gradePct": 4.48353489102462,
        "smoothedEle": 250.7526092959288,
        "gradeBand": "hard"
      },
      {
        "lat": 22.152483,
        "lng": 120.818475,
        "ele": 256,
        "distanceKm": 23.662151226052128,
        "gradePct": 4.709084565431584,
        "smoothedEle": 253.41584709080703,
        "gradeBand": "hard"
      },
      {
        "lat": 22.153021,
        "lng": 120.818788,
        "ele": 262.5,
        "distanceKm": 23.730106165388865,
        "gradePct": 5.021639406575449,
        "smoothedEle": 257.1895083330469,
        "gradeBand": "hard"
      },
      {
        "lat": 22.153331,
        "lng": 120.819189,
        "ele": 260.5,
        "distanceKm": 23.783899344369644,
        "gradePct": 5.03260690802556,
        "smoothedEle": 259.5914294425531,
        "gradeBand": "hard"
      },
      {
        "lat": 22.153683,
        "lng": 120.819705,
        "ele": 264,
        "distanceKm": 23.849898974126166,
        "gradePct": 3.9068345599776952,
        "smoothedEle": 260.6021013301989,
        "gradeBand": "hard"
      },
      {
        "lat": 22.154058,
        "lng": 120.82024,
        "ele": 267.5,
        "distanceKm": 23.918996546385813,
        "gradePct": 2.200605723880536,
        "smoothedEle": 260.97378245355765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.154365,
        "lng": 120.820641,
        "ele": 268.25,
        "distanceKm": 23.97257634296544,
        "gradePct": 1.229270157638301,
        "smoothedEle": 261.54438602749383,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.154523,
        "lng": 120.821013,
        "ele": 263.5,
        "distanceKm": 24.01472334379039,
        "gradePct": 1.063335075744565,
        "smoothedEle": 262.1901166310208,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.154456,
        "lng": 120.821444,
        "ele": 253.25,
        "distanceKm": 24.059731018122275,
        "gradePct": 1.732588757895775,
        "smoothedEle": 264.12016616225753,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.154465,
        "lng": 120.821554,
        "ele": 251,
        "distanceKm": 24.071103553370477,
        "gradePct": 1.9630704899981095,
        "smoothedEle": 264.6423033629374,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.154506,
        "lng": 120.821612,
        "ele": 250,
        "distanceKm": 24.07861775064656,
        "gradePct": 2.081996707899954,
        "smoothedEle": 264.9205752403131,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.154626,
        "lng": 120.821676,
        "ele": 249.75,
        "distanceKm": 24.093500251857993,
        "gradePct": 2.317295924455786,
        "smoothedEle": 265.4712277851361,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.154791,
        "lng": 120.82169,
        "ele": 250.75,
        "distanceKm": 24.111904003979635,
        "gradePct": 2.52818435135803,
        "smoothedEle": 265.9919998284804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.155344,
        "lng": 120.821514,
        "ele": 263,
        "distanceKm": 24.176010618372434,
        "gradePct": 2.512399538156936,
        "smoothedEle": 266.6218013442953,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.155756,
        "lng": 120.821571,
        "ele": 266.5,
        "distanceKm": 24.2221975429854,
        "gradePct": 2.048772205738551,
        "smoothedEle": 266.6081747074859,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.156325,
        "lng": 120.821738,
        "ele": 280.75,
        "distanceKm": 24.28776337327729,
        "gradePct": 0.632450185442766,
        "smoothedEle": 266.5238636485356,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.156414,
        "lng": 120.821773,
        "ele": 283.5,
        "distanceKm": 24.298295705699328,
        "gradePct": 0.5482198819239861,
        "smoothedEle": 266.7033647850264,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.156489,
        "lng": 120.821836,
        "ele": 284.75,
        "distanceKm": 24.308861859898354,
        "gradePct": 0.4750396696649108,
        "smoothedEle": 266.855995439944,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.156589,
        "lng": 120.822049,
        "ele": 282.5,
        "distanceKm": 24.333454837136205,
        "gradePct": 0.5390156849474029,
        "smoothedEle": 267.2817526801231,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.156647,
        "lng": 120.822441,
        "ele": 272.5,
        "distanceKm": 24.37433649230742,
        "gradePct": 0.7837725286703715,
        "smoothedEle": 268.17289931355634,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1567235,
        "lng": 120.82293250000001,
        "ele": 269.25,
        "distanceKm": 24.42566292226897,
        "gradePct": 1.1474876816635102,
        "smoothedEle": 268.89869394182375,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1568,
        "lng": 120.823424,
        "ele": 266,
        "distanceKm": 24.47698932508949,
        "gradePct": 1.5324695129746486,
        "smoothedEle": 269.6026570161115,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.156974,
        "lng": 120.823964,
        "ele": 262.5,
        "distanceKm": 24.535870193104955,
        "gradePct": 1.036306618888066,
        "smoothedEle": 269.4070163385116,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.157047,
        "lng": 120.824111,
        "ele": 260.5,
        "distanceKm": 24.553047711635227,
        "gradePct": 0.6669394575733657,
        "smoothedEle": 269.0427210581587,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.15713,
        "lng": 120.82417,
        "ele": 259.5,
        "distanceKm": 24.56409742719329,
        "gradePct": 0.4035250208277446,
        "smoothedEle": 268.7567561315581,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.157236,
        "lng": 120.824195,
        "ele": 260.25,
        "distanceKm": 24.5761620161507,
        "gradePct": 0.13343985922770732,
        "smoothedEle": 268.4655933230158,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.157638,
        "lng": 120.824156,
        "ele": 261.75,
        "distanceKm": 24.621042511348815,
        "gradePct": -0.6618848300641696,
        "smoothedEle": 267.50958816872696,
        "gradeBand": "descent"
      },
      {
        "lat": 22.158259,
        "lng": 120.823998,
        "ele": 271.5,
        "distanceKm": 24.69198583155936,
        "gradePct": -1.3077440749486915,
        "smoothedEle": 266.93734068286216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.158696,
        "lng": 120.823964,
        "ele": 272.75,
        "distanceKm": 24.740704068849272,
        "gradePct": -1.0503148824358883,
        "smoothedEle": 267.2038712937777,
        "gradeBand": "descent"
      },
      {
        "lat": 22.159047,
        "lng": 120.823972,
        "ele": 271.75,
        "distanceKm": 24.779742236315453,
        "gradePct": -0.2738568342872734,
        "smoothedEle": 267.8416169279298,
        "gradeBand": "descent"
      },
      {
        "lat": 22.159424,
        "lng": 120.823998,
        "ele": 271.75,
        "distanceKm": 24.821748203846198,
        "gradePct": 0.7400702399506569,
        "smoothedEle": 268.9840363472781,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.159651,
        "lng": 120.824272,
        "ele": 266.25,
        "distanceKm": 24.859607466111523,
        "gradePct": 1.4376091247187384,
        "smoothedEle": 270.07373134668546,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.159909,
        "lng": 120.824467,
        "ele": 265.25,
        "distanceKm": 24.89462580953158,
        "gradePct": 2.048218202963433,
        "smoothedEle": 271.04822003625344,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.160265,
        "lng": 120.824331,
        "ele": 268.5,
        "distanceKm": 24.93661582390098,
        "gradePct": 2.3865644272602338,
        "smoothedEle": 271.9546339362951,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.160636,
        "lng": 120.824327,
        "ele": 269.75,
        "distanceKm": 24.97787125520147,
        "gradePct": 2.40234609219352,
        "smoothedEle": 272.6157438959025,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.161016,
        "lng": 120.824242,
        "ele": 272.75,
        "distanceKm": 25.021022538220045,
        "gradePct": 2.0738530347693502,
        "smoothedEle": 273.1120067803822,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.161393,
        "lng": 120.824198,
        "ele": 275.25,
        "distanceKm": 25.063187256087932,
        "gradePct": 1.8078998463858291,
        "smoothedEle": 273.78914925386533,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.161748,
        "lng": 120.824289,
        "ele": 275,
        "distanceKm": 25.103758630266856,
        "gradePct": 1.7884431674179444,
        "smoothedEle": 274.82225123482334,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162356,
        "lng": 120.824512,
        "ele": 279.5,
        "distanceKm": 25.17515908014375,
        "gradePct": 2.368762721943179,
        "smoothedEle": 277.3098072819134,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162478,
        "lng": 120.824618,
        "ele": 280,
        "distanceKm": 25.19257134237351,
        "gradePct": 2.4496840709972023,
        "smoothedEle": 277.68417091985316,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162545,
        "lng": 120.825236,
        "ele": 278.25,
        "distanceKm": 25.256647390881962,
        "gradePct": 2.5234836097478794,
        "smoothedEle": 278.7310897893052,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162558,
        "lng": 120.825618,
        "ele": 280,
        "distanceKm": 25.296012183465,
        "gradePct": 2.2459075670567836,
        "smoothedEle": 279.1168122778851,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162566,
        "lng": 120.826028,
        "ele": 283,
        "distanceKm": 25.338243224122778,
        "gradePct": 1.6213392091129948,
        "smoothedEle": 279.26635569624153,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162477,
        "lng": 120.826417,
        "ele": 284.25,
        "distanceKm": 25.379506648440206,
        "gradePct": 0.9800678240944228,
        "smoothedEle": 279.363415648476,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162325,
        "lng": 120.826656,
        "ele": 282.75,
        "distanceKm": 25.409363387995306,
        "gradePct": 0.7438500550856331,
        "smoothedEle": 279.4462311041454,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.16227,
        "lng": 120.826923,
        "ele": 279.25,
        "distanceKm": 25.4375309522838,
        "gradePct": 0.5575252744415897,
        "smoothedEle": 279.5338027213877,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162348,
        "lng": 120.827347,
        "ele": 277.5,
        "distanceKm": 25.482047497979778,
        "gradePct": 0.43454499590967693,
        "smoothedEle": 279.8490669688139,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162728,
        "lng": 120.827831,
        "ele": 278,
        "distanceKm": 25.547390087758124,
        "gradePct": 0.7903421940189929,
        "smoothedEle": 280.86855536475434,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.162998,
        "lng": 120.828075,
        "ele": 276,
        "distanceKm": 25.586540137620396,
        "gradePct": 0.892843826337614,
        "smoothedEle": 281.16861251816835,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.163076,
        "lng": 120.828115,
        "ele": 275.75,
        "distanceKm": 25.59614181822219,
        "gradePct": 0.8531228217474083,
        "smoothedEle": 281.1158032748585,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.163164,
        "lng": 120.82814,
        "ele": 275.5,
        "distanceKm": 25.60625999253735,
        "gradePct": 0.8112651444214152,
        "smoothedEle": 281.0601533161251,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.163288,
        "lng": 120.828092,
        "ele": 277,
        "distanceKm": 25.620907430750165,
        "gradePct": 0.7170845439779637,
        "smoothedEle": 280.91629007179426,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.163507,
        "lng": 120.827932,
        "ele": 280,
        "distanceKm": 25.65030958105411,
        "gradePct": 0.29463033064956895,
        "smoothedEle": 280.2135610778567,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.163956,
        "lng": 120.827809,
        "ele": 282.75,
        "distanceKm": 25.701817852975715,
        "gradePct": -0.4640613452498615,
        "smoothedEle": 279.22940538416185,
        "gradeBand": "descent"
      },
      {
        "lat": 22.164353,
        "lng": 120.827771,
        "ele": 285.5,
        "distanceKm": 25.74613540248704,
        "gradePct": -1.1713738310990647,
        "smoothedEle": 278.5062318473787,
        "gradeBand": "descent"
      },
      {
        "lat": 22.164838,
        "lng": 120.827776,
        "ele": 288.5,
        "distanceKm": 25.800067474295645,
        "gradePct": -1.7298369197386654,
        "smoothedEle": 277.6345383269771,
        "gradeBand": "descent"
      },
      {
        "lat": 22.165167,
        "lng": 120.827991,
        "ele": 280.25,
        "distanceKm": 25.842828668668105,
        "gradePct": -1.5266452450569883,
        "smoothedEle": 277.33906887223577,
        "gradeBand": "descent"
      },
      {
        "lat": 22.165572,
        "lng": 120.828246,
        "ele": 272,
        "distanceKm": 25.89495939307603,
        "gradePct": -1.054108653033442,
        "smoothedEle": 277.25223095933404,
        "gradeBand": "descent"
      },
      {
        "lat": 22.165912,
        "lng": 120.828311,
        "ele": 271,
        "distanceKm": 25.933353685641944,
        "gradePct": -0.9104112080516449,
        "smoothedEle": 276.8939814186473,
        "gradeBand": "descent"
      },
      {
        "lat": 22.166557,
        "lng": 120.828421,
        "ele": 268.75,
        "distanceKm": 26.005963523514506,
        "gradePct": -0.9937305344259961,
        "smoothedEle": 275.6063369917834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.166953,
        "lng": 120.828521,
        "ele": 271.25,
        "distanceKm": 26.051184858006483,
        "gradePct": -1.4728490063700743,
        "smoothedEle": 274.3794513513707,
        "gradeBand": "descent"
      },
      {
        "lat": 22.167321,
        "lng": 120.828454,
        "ele": 275.5,
        "distanceKm": 26.092682220506653,
        "gradePct": -1.85444211556598,
        "smoothedEle": 273.5471399790247,
        "gradeBand": "descent"
      },
      {
        "lat": 22.167438,
        "lng": 120.828515,
        "ele": 276.25,
        "distanceKm": 26.107129135253057,
        "gradePct": -1.8588400932129683,
        "smoothedEle": 273.4209973186359,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1675,
        "lng": 120.828587,
        "ele": 276.25,
        "distanceKm": 26.117253367215483,
        "gradePct": -1.8551301178269235,
        "smoothedEle": 273.3339500658746,
        "gradeBand": "descent"
      },
      {
        "lat": 22.167868,
        "lng": 120.82916,
        "ele": 275.75,
        "distanceKm": 26.189058966080957,
        "gradePct": -0.9221669391852776,
        "smoothedEle": 274.06178424232974,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1681095,
        "lng": 120.8294875,
        "ele": 274.75,
        "distanceKm": 26.23216884238134,
        "gradePct": -0.12524232541812852,
        "smoothedEle": 274.6448841711364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.168351,
        "lng": 120.829815,
        "ele": 273.75,
        "distanceKm": 26.27527867337355,
        "gradePct": 0.8005602291145266,
        "smoothedEle": 275.4973228673776,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.168587,
        "lng": 120.830148,
        "ele": 274.25,
        "distanceKm": 26.318458566960224,
        "gradePct": 1.4940261250242823,
        "smoothedEle": 276.3342184324592,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.168789487348505,
        "lng": 120.83057698078244,
        "ele": 275.9510441342911,
        "distanceKm": 26.36804009659848,
        "gradePct": 1.6121819392468866,
        "smoothedEle": 277.0730971637741,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.168985,
        "lng": 120.83101,
        "ele": 277.5,
        "distanceKm": 26.417647691167637,
        "gradePct": 1.59365017813102,
        "smoothedEle": 277.6357728703595,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.169201,
        "lng": 120.831264,
        "ele": 276.75,
        "distanceKm": 26.45315807912929,
        "gradePct": 1.5695295182359867,
        "smoothedEle": 278.19897702232583,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.169497,
        "lng": 120.831435,
        "ele": 278.25,
        "distanceKm": 26.490486084807884,
        "gradePct": 1.7750951982315035,
        "smoothedEle": 279.34225727844125,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.169956,
        "lng": 120.8316645,
        "ele": 280.75,
        "distanceKm": 26.546730498983525,
        "gradePct": 2.400198522533921,
        "smoothedEle": 281.55593223434363,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.170415,
        "lng": 120.831894,
        "ele": 283.25,
        "distanceKm": 26.602974880744554,
        "gradePct": 2.7205957881388185,
        "smoothedEle": 282.91053763146687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.170735,
        "lng": 120.832173,
        "ele": 281.5,
        "distanceKm": 26.648707849075198,
        "gradePct": 2.560145443663837,
        "smoothedEle": 283.24868608310805,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.171087,
        "lng": 120.832257,
        "ele": 283.75,
        "distanceKm": 26.688792891224583,
        "gradePct": 1.931580127605549,
        "smoothedEle": 283.1535584868488,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.171566,
        "lng": 120.832207,
        "ele": 293.5,
        "distanceKm": 26.742303606175337,
        "gradePct": 0.8195245143450649,
        "smoothedEle": 283.0207470411012,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.171867,
        "lng": 120.832302,
        "ele": 293.75,
        "distanceKm": 26.77717362337722,
        "gradePct": 0.2485011726516584,
        "smoothedEle": 282.78613528908323,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.172127,
        "lng": 120.83261,
        "ele": 288,
        "distanceKm": 26.820088772358776,
        "gradePct": -0.3796862105124048,
        "smoothedEle": 282.27770490734224,
        "gradeBand": "descent"
      },
      {
        "lat": 22.172202,
        "lng": 120.832933,
        "ele": 282.25,
        "distanceKm": 26.854378539805143,
        "gradePct": -0.7499597182835229,
        "smoothedEle": 281.73530927817256,
        "gradeBand": "descent"
      },
      {
        "lat": 22.172506,
        "lng": 120.833317,
        "ele": 276.25,
        "distanceKm": 26.906399586508293,
        "gradePct": -1.0415837705417383,
        "smoothedEle": 281.0266918350803,
        "gradeBand": "descent"
      },
      {
        "lat": 22.172802,
        "lng": 120.833662,
        "ele": 276.25,
        "distanceKm": 26.95482862254255,
        "gradePct": -1.2621520150953005,
        "smoothedEle": 280.41217244640376,
        "gradeBand": "descent"
      },
      {
        "lat": 22.173126,
        "lng": 120.8340145,
        "ele": 275.5,
        "distanceKm": 27.00597037890595,
        "gradePct": -1.5813067415143736,
        "smoothedEle": 279.2823568385819,
        "gradeBand": "descent"
      },
      {
        "lat": 22.17345,
        "lng": 120.834367,
        "ele": 274.75,
        "distanceKm": 27.057112075898743,
        "gradePct": -1.8049705413172386,
        "smoothedEle": 278.0881326633832,
        "gradeBand": "descent"
      },
      {
        "lat": 22.173861,
        "lng": 120.834761,
        "ele": 275.25,
        "distanceKm": 27.118223343927102,
        "gradePct": -1.7968547787174949,
        "smoothedEle": 277.2829498017619,
        "gradeBand": "descent"
      },
      {
        "lat": 22.17418314584748,
        "lng": 120.83507732659842,
        "ele": 275.8501321916834,
        "distanceKm": 27.166639436414673,
        "gradePct": -1.4564772239410555,
        "smoothedEle": 277.238295363034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.174505,
        "lng": 120.835394,
        "ele": 279.25,
        "distanceKm": 27.215055530192007,
        "gradePct": -0.8879209103822379,
        "smoothedEle": 277.2943650904758,
        "gradeBand": "descent"
      },
      {
        "lat": 22.174722,
        "lng": 120.835731,
        "ele": 282.25,
        "distanceKm": 27.257321314798055,
        "gradePct": -0.4144634856714064,
        "smoothedEle": 277.2564488260622,
        "gradeBand": "descent"
      },
      {
        "lat": 22.174679,
        "lng": 120.83624,
        "ele": 279.75,
        "distanceKm": 27.309951093138157,
        "gradePct": -0.12782584447222736,
        "smoothedEle": 277.1362906894271,
        "gradeBand": "descent"
      },
      {
        "lat": 22.174624,
        "lng": 120.836471,
        "ele": 278.25,
        "distanceKm": 27.33451098747884,
        "gradePct": -0.08739163979373674,
        "smoothedEle": 277.0931443354668,
        "gradeBand": "descent"
      },
      {
        "lat": 22.17463,
        "lng": 120.836533,
        "ele": 278,
        "distanceKm": 27.34092994630857,
        "gradePct": -0.07643419854522931,
        "smoothedEle": 277.10913897556026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.174657,
        "lng": 120.8366,
        "ele": 278,
        "distanceKm": 27.348453937622335,
        "gradePct": -0.06544049714284506,
        "smoothedEle": 277.1241869581878,
        "gradeBand": "descent"
      },
      {
        "lat": 22.174696,
        "lng": 120.836646,
        "ele": 278,
        "distanceKm": 27.35487593835887,
        "gradePct": -0.05605697242052108,
        "smoothedEle": 277.1370309596609,
        "gradeBand": "descent"
      },
      {
        "lat": 22.175056,
        "lng": 120.837018,
        "ele": 277,
        "distanceKm": 27.410280802791554,
        "gradePct": 0.0059825353686165025,
        "smoothedEle": 277.3008006431734,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.175341,
        "lng": 120.837305,
        "ele": 276.75,
        "distanceKm": 27.453612604695838,
        "gradePct": -0.001544671749655896,
        "smoothedEle": 277.25668653384514,
        "gradeBand": "descent"
      },
      {
        "lat": 22.175539,
        "lng": 120.837612,
        "ele": 275,
        "distanceKm": 27.492135870540007,
        "gradePct": -0.16042185011141954,
        "smoothedEle": 276.8561206157831,
        "gradeBand": "descent"
      },
      {
        "lat": 22.175762,
        "lng": 120.838166,
        "ele": 273.5,
        "distanceKm": 27.554337544470528,
        "gradePct": -0.5396480141541834,
        "smoothedEle": 276.0566581435758,
        "gradeBand": "descent"
      },
      {
        "lat": 22.175979,
        "lng": 120.838632,
        "ele": 276.25,
        "distanceKm": 27.60804683707211,
        "gradePct": -0.5733916269788061,
        "smoothedEle": 276.14741407265507,
        "gradeBand": "descent"
      },
      {
        "lat": 22.175994947761154,
        "lng": 120.83903550501624,
        "ele": 277.4329275740628,
        "distanceKm": 27.649633514822543,
        "gradePct": -0.48108103947555664,
        "smoothedEle": 276.2985753828034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.175945,
        "lng": 120.83944,
        "ele": 276,
        "distanceKm": 27.69165297415934,
        "gradePct": -0.21975030656682373,
        "smoothedEle": 276.4216411717485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.175918,
        "lng": 120.839784,
        "ele": 274.25,
        "distanceKm": 27.727201623032066,
        "gradePct": 0.1473799493691109,
        "smoothedEle": 276.70018921627064,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.176005,
        "lng": 120.840187,
        "ele": 274.5,
        "distanceKm": 27.769811187569328,
        "gradePct": 0.7430358652827378,
        "smoothedEle": 277.56887665038147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.176469,
        "lng": 120.840403,
        "ele": 279.5,
        "distanceKm": 27.825995493654915,
        "gradePct": 1.6619124651177288,
        "smoothedEle": 279.53647966627653,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.176815,
        "lng": 120.840663,
        "ele": 279.5,
        "distanceKm": 27.872867148204122,
        "gradePct": 2.1529247991725318,
        "smoothedEle": 280.6724712022873,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.177079,
        "lng": 120.841024,
        "ele": 278.25,
        "distanceKm": 27.920232672162857,
        "gradePct": 2.224299120109756,
        "smoothedEle": 281.0941809468605,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.177156,
        "lng": 120.841092,
        "ele": 278.5,
        "distanceKm": 27.931293174960686,
        "gradePct": 2.2080319527224868,
        "smoothedEle": 281.1996681902572,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.177248,
        "lng": 120.841102,
        "ele": 279,
        "distanceKm": 27.941574813164976,
        "gradePct": 2.159774330730308,
        "smoothedEle": 281.31276621050444,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.177339,
        "lng": 120.841091,
        "ele": 279.75,
        "distanceKm": 27.951756761012025,
        "gradePct": 2.111984612731654,
        "smoothedEle": 281.4247676368219,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.177494,
        "lng": 120.841042,
        "ele": 281.5,
        "distanceKm": 27.969715329777802,
        "gradePct": 2.0274087009457915,
        "smoothedEle": 281.62173978543495,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.178099,
        "lng": 120.840952,
        "ele": 291.25,
        "distanceKm": 28.037623650988916,
        "gradePct": 1.4032667435584238,
        "smoothedEle": 282.6248356842571,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.178486,
        "lng": 120.841008,
        "ele": 290.75,
        "distanceKm": 28.081040755649937,
        "gradePct": 1.1996848349921878,
        "smoothedEle": 283.14461299891843,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.178944,
        "lng": 120.841183,
        "ele": 282.25,
        "distanceKm": 28.135061978398724,
        "gradePct": 1.174261748905313,
        "smoothedEle": 283.5896485258863,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.179222,
        "lng": 120.841395,
        "ele": 280.75,
        "distanceKm": 28.172904770816086,
        "gradePct": 1.1856599614343721,
        "smoothedEle": 284.0401719792004,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.179269,
        "lng": 120.841528,
        "ele": 281.5,
        "distanceKm": 28.187562768921982,
        "gradePct": 1.1801570702690227,
        "smoothedEle": 284.24568425419665,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.179219,
        "lng": 120.841864,
        "ele": 280.25,
        "distanceKm": 28.22260371707531,
        "gradePct": 1.0905802881624749,
        "smoothedEle": 284.5841319317249,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.179273,
        "lng": 120.84239,
        "ele": 283,
        "distanceKm": 28.27709643321781,
        "gradePct": 0.6963370041729913,
        "smoothedEle": 284.4900666931063,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.179456,
        "lng": 120.842761,
        "ele": 284.75,
        "distanceKm": 28.320378971909452,
        "gradePct": 0.28169991563891117,
        "smoothedEle": 284.03208738668013,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.179515,
        "lng": 120.843188,
        "ele": 283.25,
        "distanceKm": 28.364832771243993,
        "gradePct": -0.09283666072641983,
        "smoothedEle": 283.7584004342798,
        "gradeBand": "descent"
      },
      {
        "lat": 22.179562,
        "lng": 120.843537,
        "ele": 284.5,
        "distanceKm": 28.40114637869619,
        "gradePct": -0.23661424961537222,
        "smoothedEle": 283.9036548640886,
        "gradeBand": "descent"
      },
      {
        "lat": 22.17983,
        "lng": 120.843755,
        "ele": 285.5,
        "distanceKm": 28.438454785376944,
        "gradePct": -0.1998711569294194,
        "smoothedEle": 284.1570275293577,
        "gradeBand": "descent"
      },
      {
        "lat": 22.180002,
        "lng": 120.843721,
        "ele": 284.75,
        "distanceKm": 28.457898111969115,
        "gradePct": -0.12124107145518835,
        "smoothedEle": 284.2807246613369,
        "gradeBand": "descent"
      },
      {
        "lat": 22.180275,
        "lng": 120.843484,
        "ele": 284.75,
        "distanceKm": 28.49684699260184,
        "gradePct": 0.20813769254911635,
        "smoothedEle": 284.6973583225919,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18074,
        "lng": 120.843436,
        "ele": 285.75,
        "distanceKm": 28.54878838210687,
        "gradePct": 0.5762120644121204,
        "smoothedEle": 285.00960442065946,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18104,
        "lng": 120.84357,
        "ele": 286.75,
        "distanceKm": 28.58488771112016,
        "gradePct": 0.608482034657245,
        "smoothedEle": 285.055584263099,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181247,
        "lng": 120.843963,
        "ele": 284.25,
        "distanceKm": 28.631441659584514,
        "gradePct": 0.6080463087310498,
        "smoothedEle": 285.3254918900277,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181447,
        "lng": 120.844523,
        "ele": 284.5,
        "distanceKm": 28.693242593171885,
        "gradePct": 0.534766991090523,
        "smoothedEle": 285.72833627680166,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181506,
        "lng": 120.845006,
        "ele": 286,
        "distanceKm": 28.743405941447207,
        "gradePct": 0.4462048362517821,
        "smoothedEle": 285.86965750605447,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181537,
        "lng": 120.845469,
        "ele": 285.75,
        "distanceKm": 28.7912035645377,
        "gradePct": 0.3358610801034286,
        "smoothedEle": 285.76392409085474,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181597,
        "lng": 120.845802,
        "ele": 285.25,
        "distanceKm": 28.82613422652838,
        "gradePct": 0.0738801701448895,
        "smoothedEle": 285.4424811204865,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181973,
        "lng": 120.846181,
        "ele": 287.25,
        "distanceKm": 28.8833259354201,
        "gradePct": -0.3994224499896021,
        "smoothedEle": 284.8648504453838,
        "gradeBand": "descent"
      },
      {
        "lat": 22.182236,
        "lng": 120.846369,
        "ele": 288.5,
        "distanceKm": 28.918396462243628,
        "gradePct": -0.5898208703246176,
        "smoothedEle": 284.61955853985035,
        "gradeBand": "descent"
      },
      {
        "lat": 22.182638,
        "lng": 120.846944,
        "ele": 285.5,
        "distanceKm": 28.992581054130653,
        "gradePct": -0.8901936971601888,
        "smoothedEle": 283.9708606027767,
        "gradeBand": "descent"
      },
      {
        "lat": 22.182896,
        "lng": 120.847423,
        "ele": 282,
        "distanceKm": 29.049638047667937,
        "gradePct": -0.9751606741453749,
        "smoothedEle": 283.25477347380695,
        "gradeBand": "descent"
      },
      {
        "lat": 22.18298,
        "lng": 120.847598,
        "ele": 280.75,
        "distanceKm": 29.06993388890206,
        "gradePct": -0.9837362572573659,
        "smoothedEle": 283.03263629298357,
        "gradeBand": "descent"
      },
      {
        "lat": 22.18312,
        "lng": 120.847691,
        "ele": 280.5,
        "distanceKm": 29.088210526964808,
        "gradePct": -0.994977407647216,
        "smoothedEle": 282.84073159332473,
        "gradeBand": "descent"
      },
      {
        "lat": 22.183549,
        "lng": 120.847845,
        "ele": 280.75,
        "distanceKm": 29.138479563865324,
        "gradePct": -1.1133669260754613,
        "smoothedEle": 282.2172105033972,
        "gradeBand": "descent"
      },
      {
        "lat": 22.183963,
        "lng": 120.847933,
        "ele": 281,
        "distanceKm": 29.185397559966148,
        "gradePct": -1.2536810655727537,
        "smoothedEle": 281.5263136429082,
        "gradeBand": "descent"
      },
      {
        "lat": 22.184303,
        "lng": 120.84802,
        "ele": 280.24999999999994,
        "distanceKm": 29.224250637093636,
        "gradePct": -1.2489628207993393,
        "smoothedEle": 281.0754695615191,
        "gradeBand": "descent"
      },
      {
        "lat": 22.184643,
        "lng": 120.848107,
        "ele": 279.5,
        "distanceKm": 29.263103709223245,
        "gradePct": -1.1499608059825488,
        "smoothedEle": 280.80747072787887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.185142666666668,
        "lng": 120.84824633333334,
        "ele": 280,
        "distanceKm": 29.32048646384161,
        "gradePct": -0.7395259805597076,
        "smoothedEle": 280.9613392123225,
        "gradeBand": "descent"
      },
      {
        "lat": 22.185642333333334,
        "lng": 120.84838566666666,
        "ele": 280.5,
        "distanceKm": 29.37786920570443,
        "gradePct": -0.0048329838247411945,
        "smoothedEle": 281.6275074040692,
        "gradeBand": "descent"
      },
      {
        "lat": 22.186142,
        "lng": 120.848525,
        "ele": 281,
        "distanceKm": 29.435251934812207,
        "gradePct": 0.7167027218066292,
        "smoothedEle": 282.43299078811935,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18649,
        "lng": 120.848588,
        "ele": 281.5,
        "distanceKm": 29.47448773520649,
        "gradePct": 1.0203760177166465,
        "smoothedEle": 282.8787483600103,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.186798,
        "lng": 120.848556,
        "ele": 282.5,
        "distanceKm": 29.508893939843382,
        "gradePct": 1.1663234446495818,
        "smoothedEle": 283.26290142974864,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18742,
        "lng": 120.848333,
        "ele": 285,
        "distanceKm": 29.58176883477342,
        "gradePct": 1.2175169581436522,
        "smoothedEle": 284.1172805505721,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.187856,
        "lng": 120.848252,
        "ele": 288.75,
        "distanceKm": 29.6309619853896,
        "gradePct": 1.16381908263384,
        "smoothedEle": 284.70041078265774,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.188299,
        "lng": 120.848551,
        "ele": 286.75,
        "distanceKm": 29.689050086621787,
        "gradePct": 1.1038402311187707,
        "smoothedEle": 285.2490207750027,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.188666,
        "lng": 120.84868,
        "ele": 285.5,
        "distanceKm": 29.731965713664625,
        "gradePct": 0.9894391021294133,
        "smoothedEle": 285.5122711640763,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18897980900402,
        "lng": 120.84847539880869,
        "ele": 285.5047929076068,
        "distanceKm": 29.772725518077607,
        "gradePct": 0.835159506508947,
        "smoothedEle": 285.6815764814941,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.189277,
        "lng": 120.84824,
        "ele": 285.75,
        "distanceKm": 29.81370683211789,
        "gradePct": 0.6596132017143669,
        "smoothedEle": 285.8150964846683,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18957,
        "lng": 120.8481,
        "ele": 286.25,
        "distanceKm": 29.849333250506415,
        "gradePct": 0.5309237963632844,
        "smoothedEle": 285.9357648147637,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.190141,
        "lng": 120.848074,
        "ele": 285.5,
        "distanceKm": 29.91288204878818,
        "gradePct": 0.14045171932880912,
        "smoothedEle": 285.67611276419524,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.190806,
        "lng": 120.848138,
        "ele": 284,
        "distanceKm": 29.98711979477001,
        "gradePct": -0.03698271700383784,
        "smoothedEle": 285.65450861323484,
        "gradeBand": "descent"
      },
      {
        "lat": 22.191248,
        "lng": 120.848143,
        "ele": 285.25,
        "distanceKm": 30.03627071621861,
        "gradePct": -0.030955275468471766,
        "smoothedEle": 285.8296108548449,
        "gradeBand": "descent"
      },
      {
        "lat": 22.191763,
        "lng": 120.848087,
        "ele": 286.75,
        "distanceKm": 30.09382570419347,
        "gradePct": 0.23929187677450242,
        "smoothedEle": 286.23255824108344,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.192377,
        "lng": 120.848129,
        "ele": 285.75,
        "distanceKm": 30.162236287998418,
        "gradePct": 0.8154170172751123,
        "smoothedEle": 287.29258407234084,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.192999,
        "lng": 120.848173,
        "ele": 286.5,
        "distanceKm": 30.231547828960007,
        "gradePct": 1.1955938316111243,
        "smoothedEle": 288.2039730319627,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.193366,
        "lng": 120.848198,
        "ele": 287.625,
        "distanceKm": 30.272437515960824,
        "gradePct": 1.2111485650597487,
        "smoothedEle": 288.5051148387492,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.193733,
        "lng": 120.848223,
        "ele": 288.75,
        "distanceKm": 30.313327202538346,
        "gradePct": 1.1172416821530118,
        "smoothedEle": 288.7692184155265,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.194075,
        "lng": 120.848127,
        "ele": 292.5,
        "distanceKm": 30.35261936143895,
        "gradePct": 0.9049386949637641,
        "smoothedEle": 288.95344664609013,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.194479,
        "lng": 120.847803,
        "ele": 295,
        "distanceKm": 30.40857298409032,
        "gradePct": 0.7150201561360373,
        "smoothedEle": 289.33191329462164,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.194836,
        "lng": 120.847497,
        "ele": 289.75,
        "distanceKm": 30.459251999507572,
        "gradePct": 0.7362785539795054,
        "smoothedEle": 289.8805640806571,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.195219,
        "lng": 120.847353,
        "ele": 288,
        "distanceKm": 30.504346493810317,
        "gradePct": 0.8474149384674975,
        "smoothedEle": 290.4060425336604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.195571,
        "lng": 120.8472985,
        "ele": 288.5,
        "distanceKm": 30.543887310064548,
        "gradePct": 1.0669073891655254,
        "smoothedEle": 291.046319658458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.195923,
        "lng": 120.847244,
        "ele": 289,
        "distanceKm": 30.583428124322715,
        "gradePct": 1.1820373361451615,
        "smoothedEle": 291.5259097779923,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.196174,
        "lng": 120.847272,
        "ele": 289.25,
        "distanceKm": 30.611486569902635,
        "gradePct": 1.1309287517126774,
        "smoothedEle": 291.62531326454814,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.196221,
        "lng": 120.847326,
        "ele": 289,
        "distanceKm": 30.619116883385495,
        "gradePct": 1.0953506872162715,
        "smoothedEle": 291.6367628739581,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.196448,
        "lng": 120.847774,
        "ele": 291.25,
        "distanceKm": 30.67169566790222,
        "gradePct": 0.7201788990255434,
        "smoothedEle": 291.4659258247289,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.196703,
        "lng": 120.847993,
        "ele": 291.5,
        "distanceKm": 30.707922219160213,
        "gradePct": 0.6451554601676174,
        "smoothedEle": 291.7542545132803,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.197363,
        "lng": 120.84809,
        "ele": 295.75,
        "distanceKm": 30.781987331280856,
        "gradePct": 0.5446106397068907,
        "smoothedEle": 292.59765569378163,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.19785784990841,
        "lng": 120.84812680158682,
        "ele": 294.27136481550224,
        "distanceKm": 30.83714249822182,
        "gradePct": 0.716103283622746,
        "smoothedEle": 293.0104012776851,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.198353,
        "lng": 120.848158,
        "ele": 292.5,
        "distanceKm": 30.892294363403884,
        "gradePct": 1.004186817716036,
        "smoothedEle": 293.63824536871755,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.198735,
        "lng": 120.848359,
        "ele": 295.5,
        "distanceKm": 30.93954349691429,
        "gradePct": 1.1179422543684194,
        "smoothedEle": 294.3502197972046,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.19912,
        "lng": 120.848669,
        "ele": 295,
        "distanceKm": 30.99294106837266,
        "gradePct": 1.2269456392029143,
        "smoothedEle": 295.1335176534968,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.19947,
        "lng": 120.848871,
        "ele": 291.75,
        "distanceKm": 31.037067308933068,
        "gradePct": 1.1035484353198837,
        "smoothedEle": 295.21693548033545,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.19991914813672,
        "lng": 120.84884840686426,
        "ele": 293.2996879882852,
        "distanceKm": 31.087064508029925,
        "gradePct": 0.8976840366795531,
        "smoothedEle": 295.3740772181855,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.200368,
        "lng": 120.848789,
        "ele": 296,
        "distanceKm": 31.137347966706425,
        "gradePct": 0.7309025114984163,
        "smoothedEle": 295.7789414332939,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.200835,
        "lng": 120.848775,
        "ele": 300.75,
        "distanceKm": 31.189296068162516,
        "gradePct": 0.6729837336926916,
        "smoothedEle": 296.42601600659833,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.201311,
        "lng": 120.849031,
        "ele": 296.5,
        "distanceKm": 31.24842372999549,
        "gradePct": 0.8155785874986663,
        "smoothedEle": 296.88378600963546,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.201814422745493,
        "lng": 120.84921222480831,
        "ele": 296.506124041562,
        "distanceKm": 31.30742920411938,
        "gradePct": 0.9714171720341688,
        "smoothedEle": 297.4808807265713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.202324,
        "lng": 120.849374,
        "ele": 297.5,
        "distanceKm": 31.366488681979785,
        "gradePct": 0.858454804457469,
        "smoothedEle": 297.8588328523763,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.202809,
        "lng": 120.849532,
        "ele": 300.5,
        "distanceKm": 31.422817992090554,
        "gradePct": 0.609682445667206,
        "smoothedEle": 297.90490969955687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203289,
        "lng": 120.849947,
        "ele": 298.5,
        "distanceKm": 31.491185436578125,
        "gradePct": 0.32755378146737374,
        "smoothedEle": 297.97161256121933,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203594047754404,
        "lng": 120.8502671898022,
        "ele": 297.42349829308847,
        "distanceKm": 31.538483880110668,
        "gradePct": 0.36203637398915717,
        "smoothedEle": 298.40368839792353,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203894,
        "lng": 120.850593,
        "ele": 296.5,
        "distanceKm": 31.585786127698476,
        "gradePct": 0.37740345672108466,
        "smoothedEle": 298.6294248953648,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204224,
        "lng": 120.850808,
        "ele": 296.5,
        "distanceKm": 31.628639312057953,
        "gradePct": 0.3419444268161852,
        "smoothedEle": 298.5944781380178,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204684,
        "lng": 120.850936,
        "ele": 298.75,
        "distanceKm": 31.68145920709971,
        "gradePct": 0.08594439479676938,
        "smoothedEle": 298.1340119316272,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205111,
        "lng": 120.851156,
        "ele": 301,
        "distanceKm": 31.734064745669816,
        "gradePct": -0.3525474291669765,
        "smoothedEle": 297.6582243208916,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205298,
        "lng": 120.851397,
        "ele": 301.5,
        "distanceKm": 31.766436544522893,
        "gradePct": -0.5521640044272847,
        "smoothedEle": 297.4327565146305,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20537,
        "lng": 120.851637,
        "ele": 299.75,
        "distanceKm": 31.79240888310969,
        "gradePct": -0.6553311388777582,
        "smoothedEle": 297.31336176281206,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205483,
        "lng": 120.852114,
        "ele": 297.5,
        "distanceKm": 31.84309726116767,
        "gradePct": -0.6373703913452312,
        "smoothedEle": 297.19369778305105,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205684,
        "lng": 120.852597,
        "ele": 295.25,
        "distanceKm": 31.897613352588525,
        "gradePct": -0.3187796876268021,
        "smoothedEle": 297.35034736489536,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20567095553704,
        "lng": 120.85297081910463,
        "ele": 295.183467090604,
        "distanceKm": 31.936124640476876,
        "gradePct": -0.0025345431847085906,
        "smoothedEle": 297.63880817999535,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205599,
        "lng": 120.853341,
        "ele": 294.75,
        "distanceKm": 31.975064929554865,
        "gradePct": 0.38333087346592404,
        "smoothedEle": 298.1597536050262,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205517,
        "lng": 120.85377650000001,
        "ele": 295.125,
        "distanceKm": 32.0208166428877,
        "gradePct": 0.7340769421473707,
        "smoothedEle": 298.7144512484937,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205435,
        "lng": 120.854212,
        "ele": 295.5,
        "distanceKm": 32.06656838188614,
        "gradePct": 1.0728461960597466,
        "smoothedEle": 299.40683340431883,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20526,
        "lng": 120.854555,
        "ele": 297,
        "distanceKm": 32.106886423062775,
        "gradePct": 1.3511244721411848,
        "smoothedEle": 300.1220543204298,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204956,
        "lng": 120.854677,
        "ele": 299.25,
        "distanceKm": 32.142947619703875,
        "gradePct": 1.6446599859159563,
        "smoothedEle": 301.01940636001586,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204779,
        "lng": 120.854963,
        "ele": 303.5,
        "distanceKm": 32.17836332107216,
        "gradePct": 2.058978794332383,
        "smoothedEle": 302.31770117152126,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204723,
        "lng": 120.855138,
        "ele": 306.25,
        "distanceKm": 32.197425117822895,
        "gradePct": 2.3402258954007293,
        "smoothedEle": 303.111302210269,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204741,
        "lng": 120.855238,
        "ele": 307,
        "distanceKm": 32.20791275667793,
        "gradePct": 2.495970428785732,
        "smoothedEle": 303.54994429786916,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204807,
        "lng": 120.855376,
        "ele": 306.5,
        "distanceKm": 32.223903250448636,
        "gradePct": 2.7304663231771156,
        "smoothedEle": 304.2220949498594,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204878,
        "lng": 120.855882,
        "ele": 308.25,
        "distanceKm": 32.276590152699626,
        "gradePct": 3.3495545109421507,
        "smoothedEle": 306.2837233871103,
        "gradeBand": "hard"
      },
      {
        "lat": 22.205015,
        "lng": 120.856196,
        "ele": 307,
        "distanceKm": 32.312325683954086,
        "gradePct": 3.521513677360566,
        "smoothedEle": 307.30043303088206,
        "gradeBand": "hard"
      },
      {
        "lat": 22.205248,
        "lng": 120.856537,
        "ele": 306,
        "distanceKm": 32.35595640206287,
        "gradePct": 3.519259654617009,
        "smoothedEle": 308.5348111744968,
        "gradeBand": "hard"
      },
      {
        "lat": 22.205178,
        "lng": 120.856996,
        "ele": 313,
        "distanceKm": 32.40384651034899,
        "gradePct": 3.410097040221339,
        "smoothedEle": 310.2000689467576,
        "gradeBand": "hard"
      },
      {
        "lat": 22.205244,
        "lng": 120.857337,
        "ele": 316,
        "distanceKm": 32.43971082805368,
        "gradePct": 3.3706385431868373,
        "smoothedEle": 311.58191953328185,
        "gradeBand": "hard"
      },
      {
        "lat": 22.205564,
        "lng": 120.857725,
        "ele": 315.5,
        "distanceKm": 32.49320500631388,
        "gradePct": 3.3846357331346812,
        "smoothedEle": 313.52570314416124,
        "gradeBand": "hard"
      },
      {
        "lat": 22.205625,
        "lng": 120.857773,
        "ele": 315,
        "distanceKm": 32.50159704208848,
        "gradePct": 3.4034585612124113,
        "smoothedEle": 313.80211015081005,
        "gradeBand": "hard"
      },
      {
        "lat": 22.205701,
        "lng": 120.85779,
        "ele": 314,
        "distanceKm": 32.51022718541002,
        "gradePct": 3.3730262562429605,
        "smoothedEle": 313.98678127614994,
        "gradeBand": "hard"
      },
      {
        "lat": 22.205759,
        "lng": 120.85779,
        "ele": 312.75,
        "distanceKm": 32.516676500063475,
        "gradePct": 3.33322309872555,
        "smoothedEle": 314.0899703106052,
        "gradeBand": "hard"
      },
      {
        "lat": 22.205989,
        "lng": 120.857662,
        "ele": 309.25,
        "distanceKm": 32.54544655584221,
        "gradePct": 3.1576454300829204,
        "smoothedEle": 314.5527627968534,
        "gradeBand": "hard"
      },
      {
        "lat": 22.206099,
        "lng": 120.857645,
        "ele": 308.75,
        "distanceKm": 32.5578025859648,
        "gradePct": 3.0982944837467543,
        "smoothedEle": 314.79559653247117,
        "gradeBand": "hard"
      },
      {
        "lat": 22.206158,
        "lng": 120.857663,
        "ele": 309,
        "distanceKm": 32.56461977879669,
        "gradePct": 3.047941065657155,
        "smoothedEle": 314.93194038910895,
        "gradeBand": "hard"
      },
      {
        "lat": 22.206246,
        "lng": 120.85775,
        "ele": 309.75,
        "distanceKm": 32.57788505293016,
        "gradePct": 2.9534144877720654,
        "smoothedEle": 315.20415369613204,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206273,
        "lng": 120.857891,
        "ele": 311.25,
        "distanceKm": 32.59270790176656,
        "gradePct": 2.8757474378242183,
        "smoothedEle": 315.5642467922743,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206183,
        "lng": 120.858341,
        "ele": 317,
        "distanceKm": 32.64010296476586,
        "gradePct": 2.727271708911179,
        "smoothedEle": 317.05071177105344,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206223,
        "lng": 120.858859,
        "ele": 325,
        "distanceKm": 32.693615041904025,
        "gradePct": 2.632256226496869,
        "smoothedEle": 318.80372086728676,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206256,
        "lng": 120.858909,
        "ele": 325.75,
        "distanceKm": 32.69993646054872,
        "gradePct": 2.6467513731958174,
        "smoothedEle": 319.04091861502405,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206308,
        "lng": 120.858938,
        "ele": 326,
        "distanceKm": 32.706443863453046,
        "gradePct": 2.693498538460166,
        "smoothedEle": 319.29282137503577,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206347,
        "lng": 120.858941,
        "ele": 325.75,
        "distanceKm": 32.71079145519641,
        "gradePct": 2.73437082808319,
        "smoothedEle": 319.4645512488986,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206394,
        "lng": 120.858932,
        "ele": 325.5,
        "distanceKm": 32.716099118957146,
        "gradePct": 2.799706149391784,
        "smoothedEle": 319.68014451168756,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206432,
        "lng": 120.858905,
        "ele": 324.75,
        "distanceKm": 32.72115680636647,
        "gradePct": 2.866348660142039,
        "smoothedEle": 319.89473742835736,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206504,
        "lng": 120.858829,
        "ele": 323.25,
        "distanceKm": 32.732351086774514,
        "gradePct": 3.01419203334693,
        "smoothedEle": 320.37049434569906,
        "gradeBand": "hard"
      },
      {
        "lat": 22.206757,
        "lng": 120.858486,
        "ele": 316.25,
        "distanceKm": 32.777498544858894,
        "gradePct": 3.624182341304452,
        "smoothedEle": 322.4445869451942,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207129,
        "lng": 120.858442,
        "ele": 317,
        "distanceKm": 32.819110389271046,
        "gradePct": 4.159839627323803,
        "smoothedEle": 324.711994848701,
        "gradeBand": "hard"
      },
      {
        "lat": 22.20722,
        "lng": 120.858474,
        "ele": 318,
        "distanceKm": 32.82975189223552,
        "gradePct": 4.239324457912314,
        "smoothedEle": 325.2047170249554,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207287,
        "lng": 120.858524,
        "ele": 319,
        "distanceKm": 32.838807207072364,
        "gradePct": 4.296860034193709,
        "smoothedEle": 325.60379261859225,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207335,
        "lng": 120.858593,
        "ele": 320.25,
        "distanceKm": 32.847692297329175,
        "gradePct": 4.331996424659702,
        "smoothedEle": 325.9633245530935,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207451,
        "lng": 120.858921,
        "ele": 326,
        "distanceKm": 32.88383860103318,
        "gradePct": 4.409918854776203,
        "smoothedEle": 327.30329087855637,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207792,
        "lng": 120.859321,
        "ele": 333.75,
        "distanceKm": 32.93981556963201,
        "gradePct": 4.2034704572641575,
        "smoothedEle": 329.12035664075904,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207847,
        "lng": 120.859398,
        "ele": 335,
        "distanceKm": 32.949827442784986,
        "gradePct": 4.10136127583459,
        "smoothedEle": 329.37608780539847,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207861,
        "lng": 120.859465,
        "ele": 335.75,
        "distanceKm": 32.95689835125788,
        "gradePct": 4.031790696451338,
        "smoothedEle": 329.56178705974935,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207858,
        "lng": 120.859586,
        "ele": 336.75,
        "distanceKm": 32.96935934241659,
        "gradePct": 4.015067725259172,
        "smoothedEle": 330.1008041228426,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207743,
        "lng": 120.860248,
        "ele": 337.75,
        "distanceKm": 33.03869925457459,
        "gradePct": 4.117072949647648,
        "smoothedEle": 333.8331809575033,
        "gradeBand": "hard"
      },
      {
        "lat": 22.20769,
        "lng": 120.860654,
        "ele": 332.75,
        "distanceKm": 33.08090901171739,
        "gradePct": 4.557054834747183,
        "smoothedEle": 336.3087988203957,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207693,
        "lng": 120.86074,
        "ele": 331.75,
        "distanceKm": 33.0897687027414,
        "gradePct": 4.654332396720993,
        "smoothedEle": 336.80445242646914,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207712,
        "lng": 120.860798,
        "ele": 331.25,
        "distanceKm": 33.09610235986096,
        "gradePct": 4.723727348302295,
        "smoothedEle": 337.148838877454,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207737,
        "lng": 120.860834,
        "ele": 331.25,
        "distanceKm": 33.100735147828,
        "gradePct": 4.771303872561691,
        "smoothedEle": 337.39437663970716,
        "gradeBand": "hard"
      },
      {
        "lat": 22.207989,
        "lng": 120.860877,
        "ele": 333.75,
        "distanceKm": 33.12910381158925,
        "gradePct": 4.985940943964195,
        "smoothedEle": 338.7445246513608,
        "gradeBand": "hard"
      },
      {
        "lat": 22.208411,
        "lng": 120.861003,
        "ele": 338,
        "distanceKm": 33.17778794534652,
        "gradePct": 5.0255928541689485,
        "smoothedEle": 340.6056783540699,
        "gradeBand": "hard"
      },
      {
        "lat": 22.208908,
        "lng": 120.861125,
        "ele": 347.25,
        "distanceKm": 33.23446107161317,
        "gradePct": 4.413417834239647,
        "smoothedEle": 342.43188688924147,
        "gradeBand": "hard"
      },
      {
        "lat": 22.209212,
        "lng": 120.861433,
        "ele": 346.5,
        "distanceKm": 33.28080773210676,
        "gradePct": 3.8488022027546855,
        "smoothedEle": 344.0004631392949,
        "gradeBand": "hard"
      },
      {
        "lat": 22.209484,
        "lng": 120.861611,
        "ele": 346.25,
        "distanceKm": 33.316170749967426,
        "gradePct": 3.4844662669230573,
        "smoothedEle": 345.09793480529305,
        "gradeBand": "hard"
      },
      {
        "lat": 22.209602,
        "lng": 120.861927,
        "ele": 346.75,
        "distanceKm": 33.35124791673226,
        "gradePct": 3.452804724620599,
        "smoothedEle": 346.49668471369444,
        "gradeBand": "hard"
      },
      {
        "lat": 22.209605,
        "lng": 120.86232,
        "ele": 346.75,
        "distanceKm": 33.39170675966931,
        "gradePct": 3.5209558919822324,
        "smoothedEle": 348.09610355506646,
        "gradeBand": "hard"
      },
      {
        "lat": 22.209713,
        "lng": 120.862778,
        "ele": 350.5,
        "distanceKm": 33.440361002490874,
        "gradePct": 3.45535677848654,
        "smoothedEle": 349.54228023658493,
        "gradeBand": "hard"
      },
      {
        "lat": 22.209723,
        "lng": 120.863334,
        "ele": 354.25,
        "distanceKm": 33.497609292684764,
        "gradePct": 3.2603322442452725,
        "smoothedEle": 351.042554751216,
        "gradeBand": "hard"
      },
      {
        "lat": 22.209638,
        "lng": 120.864013,
        "ele": 352.25,
        "distanceKm": 33.568145161440945,
        "gradePct": 2.7672410643267713,
        "smoothedEle": 352.69914866269784,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.209628,
        "lng": 120.864123,
        "ele": 352,
        "distanceKm": 33.57952359492429,
        "gradePct": 2.6532746939087324,
        "smoothedEle": 352.9210281156231,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20964,
        "lng": 120.864176,
        "ele": 352.25,
        "distanceKm": 33.585140483572665,
        "gradePct": 2.5958805749868277,
        "smoothedEle": 353.02828670072176,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.209707,
        "lng": 120.864263,
        "ele": 352,
        "distanceKm": 33.59679027256764,
        "gradePct": 2.442965605594133,
        "smoothedEle": 353.1331348016765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.209834,
        "lng": 120.864362,
        "ele": 352.75,
        "distanceKm": 33.61420556772036,
        "gradePct": 2.262512260307286,
        "smoothedEle": 353.28987245805104,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210263,
        "lng": 120.864646,
        "ele": 351.75,
        "distanceKm": 33.67015474614851,
        "gradePct": 1.5656218590456552,
        "smoothedEle": 353.45431223942006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210315,
        "lng": 120.864677,
        "ele": 351.75,
        "distanceKm": 33.676759100556446,
        "gradePct": 1.4552423201417148,
        "smoothedEle": 353.4066298521169,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210358,
        "lng": 120.864693,
        "ele": 352,
        "distanceKm": 33.68181624031646,
        "gradePct": 1.3624274936161476,
        "smoothedEle": 353.35352988463677,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210504,
        "lng": 120.864671,
        "ele": 354.75,
        "distanceKm": 33.69820793427254,
        "gradePct": 1.0624013740853249,
        "smoothedEle": 353.18141709809794,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210654,
        "lng": 120.864599,
        "ele": 358.25,
        "distanceKm": 33.71645993634887,
        "gradePct": 0.7522465909587659,
        "smoothedEle": 352.9897710762965,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210969,
        "lng": 120.864621,
        "ele": 360.75,
        "distanceKm": 33.751559529297325,
        "gradePct": 0.017712627383332097,
        "smoothedEle": 352.3450464655212,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.211037,
        "lng": 120.864668,
        "ele": 360.25,
        "distanceKm": 33.76053631178146,
        "gradePct": -0.173940417329246,
        "smoothedEle": 352.17256762569457,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211069,
        "lng": 120.864718,
        "ele": 359.75,
        "distanceKm": 33.76679369411816,
        "gradePct": -0.3115585168716235,
        "smoothedEle": 352.04429128779225,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211101,
        "lng": 120.864868,
        "ele": 358.25,
        "distanceKm": 33.78263997675111,
        "gradePct": -0.6305476027726423,
        "smoothedEle": 351.7194424938166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211123,
        "lng": 120.865118,
        "ele": 356,
        "distanceKm": 33.80849200519884,
        "gradePct": -0.9732576860876212,
        "smoothedEle": 351.2919350231821,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211126,
        "lng": 120.865634,
        "ele": 351.25,
        "distanceKm": 33.86161220545769,
        "gradePct": -1.2860508281155307,
        "smoothedEle": 350.85710327039186,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211218,
        "lng": 120.86601,
        "ele": 347.25,
        "distanceKm": 33.90164820272156,
        "gradePct": -1.2431161884726514,
        "smoothedEle": 350.6590619024379,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211489,
        "lng": 120.866371,
        "ele": 345.25,
        "distanceKm": 33.94949295656548,
        "gradePct": -0.8514868475944743,
        "smoothedEle": 350.68003247835895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211749,
        "lng": 120.866645,
        "ele": 344.75,
        "distanceKm": 33.989884058038854,
        "gradePct": -0.6086151690608317,
        "smoothedEle": 350.38241889170973,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212043,
        "lng": 120.866847,
        "ele": 344,
        "distanceKm": 34.02862860201984,
        "gradePct": -0.5375758233207856,
        "smoothedEle": 350.0519490640146,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212691,
        "lng": 120.867016,
        "ele": 348.75,
        "distanceKm": 34.10275354884825,
        "gradePct": -0.4266534429742645,
        "smoothedEle": 349.8062394947865,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213313,
        "lng": 120.866897,
        "ele": 352.5,
        "distanceKm": 34.17299338497279,
        "gradePct": -0.018892991316391505,
        "smoothedEle": 350.46908838587115,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213708,
        "lng": 120.86675,
        "ele": 354.25,
        "distanceKm": 34.219449174323834,
        "gradePct": 0.8112932856386009,
        "smoothedEle": 351.75283114679735,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.214202,
        "lng": 120.866626,
        "ele": 356.25,
        "distanceKm": 34.27584319784006,
        "gradePct": 1.7969342138319206,
        "smoothedEle": 353.48931042493996,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.214378,
        "lng": 120.866625,
        "ele": 355,
        "distanceKm": 34.29541380270089,
        "gradePct": 2.185272797926868,
        "smoothedEle": 354.20111490052585,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.21489,
        "lng": 120.866886,
        "ele": 351,
        "distanceKm": 34.3583670739107,
        "gradePct": 3.2815237953914886,
        "smoothedEle": 356.89410840422397,
        "gradeBand": "hard"
      },
      {
        "lat": 22.21549,
        "lng": 120.867108,
        "ele": 357.25,
        "distanceKm": 34.42888955810183,
        "gradePct": 3.5663932086096173,
        "smoothedEle": 359.17630494161585,
        "gradeBand": "hard"
      },
      {
        "lat": 22.215547,
        "lng": 120.867138,
        "ele": 358.25,
        "distanceKm": 34.43594001200958,
        "gradePct": 3.5562127391127443,
        "smoothedEle": 359.3730408924865,
        "gradeBand": "hard"
      },
      {
        "lat": 22.215589,
        "lng": 120.86717,
        "ele": 359,
        "distanceKm": 34.44165506625895,
        "gradePct": 3.54966356532649,
        "smoothedEle": 359.5359199385936,
        "gradeBand": "hard"
      },
      {
        "lat": 22.215638,
        "lng": 120.867284,
        "ele": 360.25,
        "distanceKm": 34.45459349421143,
        "gradePct": 3.537706846873313,
        "smoothedEle": 359.91040531472373,
        "gradeBand": "hard"
      },
      {
        "lat": 22.215636,
        "lng": 120.867349,
        "ele": 360.5,
        "distanceKm": 34.46128833986833,
        "gradePct": 3.5300348798602164,
        "smoothedEle": 360.1012084159455,
        "gradeBand": "hard"
      },
      {
        "lat": 22.215524,
        "lng": 120.867689,
        "ele": 359.5,
        "distanceKm": 34.498437902502765,
        "gradePct": 3.5450665801772696,
        "smoothedEle": 361.42061196786204,
        "gradeBand": "hard"
      },
      {
        "lat": 22.215516,
        "lng": 120.867857,
        "ele": 360,
        "distanceKm": 34.51575483180166,
        "gradePct": 3.4863824682665627,
        "smoothedEle": 362.0440214226222,
        "gradeBand": "hard"
      },
      {
        "lat": 22.21554,
        "lng": 120.867937,
        "ele": 360.75,
        "distanceKm": 34.524411708858544,
        "gradePct": 3.4570457923908657,
        "smoothedEle": 362.3556689966701,
        "gradeBand": "hard"
      },
      {
        "lat": 22.215601,
        "lng": 120.868007,
        "ele": 362.5,
        "distanceKm": 34.534307774972945,
        "gradePct": 3.4266938528136928,
        "smoothedEle": 362.7182956489734,
        "gradeBand": "hard"
      },
      {
        "lat": 22.215899,
        "lng": 120.86816,
        "ele": 369.25,
        "distanceKm": 34.57099651409388,
        "gradePct": 3.4306930065643053,
        "smoothedEle": 364.1641990310065,
        "gradeBand": "hard"
      },
      {
        "lat": 22.215959,
        "lng": 120.868144,
        "ele": 369.5,
        "distanceKm": 34.577868516415336,
        "gradePct": 3.4591340335126195,
        "smoothedEle": 364.4434677475804,
        "gradeBand": "hard"
      },
      {
        "lat": 22.216022,
        "lng": 120.868093,
        "ele": 369.75,
        "distanceKm": 34.58662272909019,
        "gradePct": 3.52539790268171,
        "smoothedEle": 364.8592928496359,
        "gradeBand": "hard"
      },
      {
        "lat": 22.216053,
        "lng": 120.868014,
        "ele": 369.5,
        "distanceKm": 34.59545541942548,
        "gradePct": 3.5922557982489765,
        "smoothedEle": 365.2788456405621,
        "gradeBand": "hard"
      },
      {
        "lat": 22.216054,
        "lng": 120.867933,
        "ele": 369.25,
        "distanceKm": 34.60379433955401,
        "gradePct": 3.6553761647435916,
        "smoothedEle": 365.6749443466673,
        "gradeBand": "hard"
      },
      {
        "lat": 22.216005,
        "lng": 120.867367,
        "ele": 366,
        "distanceKm": 34.66231286525346,
        "gradePct": 3.985428987710719,
        "smoothedEle": 368.10845342626885,
        "gradeBand": "hard"
      },
      {
        "lat": 22.216007,
        "lng": 120.867299,
        "ele": 365.75,
        "distanceKm": 34.66931635194039,
        "gradePct": 3.9783695027854837,
        "smoothedEle": 368.3430702302809,
        "gradeBand": "hard"
      },
      {
        "lat": 22.216044,
        "lng": 120.867236,
        "ele": 366,
        "distanceKm": 34.67699653914186,
        "gradePct": 3.987102124532015,
        "smoothedEle": 368.6333049373804,
        "gradeBand": "hard"
      },
      {
        "lat": 22.216114,
        "lng": 120.867185,
        "ele": 366.75,
        "distanceKm": 34.68638522439542,
        "gradePct": 3.9947924720321453,
        "smoothedEle": 368.9821340983363,
        "gradeBand": "hard"
      },
      {
        "lat": 22.216252,
        "lng": 120.867129,
        "ele": 368.5,
        "distanceKm": 34.70277723233861,
        "gradePct": 3.981408311136761,
        "smoothedEle": 369.53964446422606,
        "gradeBand": "hard"
      },
      {
        "lat": 22.216657,
        "lng": 120.86707,
        "ele": 374.25,
        "distanceKm": 34.748218940924566,
        "gradePct": 3.788173809315882,
        "smoothedEle": 370.8428823834596,
        "gradeBand": "hard"
      },
      {
        "lat": 22.217124,
        "lng": 120.866789,
        "ele": 374.75,
        "distanceKm": 34.80766006465151,
        "gradePct": 3.2332882647140875,
        "smoothedEle": 372.30227812367764,
        "gradeBand": "hard"
      },
      {
        "lat": 22.217494,
        "lng": 120.866792,
        "ele": 374.75,
        "distanceKm": 34.848803403338614,
        "gradePct": 2.539653799470407,
        "smoothedEle": 372.6259663142636,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.217757,
        "lng": 120.866746,
        "ele": 373.25,
        "distanceKm": 34.878428589295545,
        "gradePct": 2.091133591656727,
        "smoothedEle": 372.8687788093904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.217931,
        "lng": 120.866624,
        "ele": 374,
        "distanceKm": 34.90149503284271,
        "gradePct": 1.8962382178556836,
        "smoothedEle": 373.2885118733568,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.218189,
        "lng": 120.866407,
        "ele": 376.25,
        "distanceKm": 34.93785429617424,
        "gradePct": 1.7747065689766008,
        "smoothedEle": 374.09504441712244,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.218725,
        "lng": 120.866458,
        "ele": 373.5,
        "distanceKm": 34.9976856282012,
        "gradePct": 1.4792511737557068,
        "smoothedEle": 375.01588856548534,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.219096,
        "lng": 120.866328,
        "ele": 374.5,
        "distanceKm": 35.04105518636731,
        "gradePct": 1.536286612160786,
        "smoothedEle": 375.63758176481815,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.21918,
        "lng": 120.866329,
        "ele": 374.25,
        "distanceKm": 35.050396140318796,
        "gradePct": 1.5670024850930764,
        "smoothedEle": 375.7730255971147,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.219232,
        "lng": 120.86636,
        "ele": 374,
        "distanceKm": 35.05700039672114,
        "gradePct": 1.588518214403456,
        "smoothedEle": 375.8701865379214,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.219342,
        "lng": 120.866469,
        "ele": 373.5,
        "distanceKm": 35.07359866991707,
        "gradePct": 1.6491338556118982,
        "smoothedEle": 376.1274597724583,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.219499,
        "lng": 120.866677,
        "ele": 372.75,
        "distanceKm": 35.10122482059025,
        "gradePct": 1.6360351023918491,
        "smoothedEle": 376.55566510789254,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.219802,
        "lng": 120.866928,
        "ele": 375.75,
        "distanceKm": 35.14368338083293,
        "gradePct": 1.3965670977323812,
        "smoothedEle": 376.97789211747545,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.219976,
        "lng": 120.867232,
        "ele": 377.75,
        "distanceKm": 35.18047465554699,
        "gradePct": 1.2077141706670145,
        "smoothedEle": 377.1664285461671,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.220255,
        "lng": 120.867525,
        "ele": 378.25,
        "distanceKm": 35.22374265837553,
        "gradePct": 0.8920353643226961,
        "smoothedEle": 377.1734811638289,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.220703,
        "lng": 120.867811,
        "ele": 382,
        "distanceKm": 35.28160706967023,
        "gradePct": 0.7593695270397979,
        "smoothedEle": 377.77032902271185,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.221095,
        "lng": 120.868006,
        "ele": 382.5,
        "distanceKm": 35.329595277826705,
        "gradePct": 0.849572098187155,
        "smoothedEle": 378.53693788448675,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.221568,
        "lng": 120.868047,
        "ele": 378.25,
        "distanceKm": 35.3823596078202,
        "gradePct": 0.8609886708238312,
        "smoothedEle": 378.88871313212525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.22214,
        "lng": 120.867876,
        "ele": 375.75,
        "distanceKm": 35.44835392459198,
        "gradePct": 0.6631672300003592,
        "smoothedEle": 378.75367082112655,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2225145,
        "lng": 120.8677565,
        "ele": 378.125,
        "distanceKm": 35.491775269440176,
        "gradePct": 0.25677206028037947,
        "smoothedEle": 378.44630954903545,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.222889,
        "lng": 120.867637,
        "ele": 380.5,
        "distanceKm": 35.535196604982865,
        "gradePct": -0.4317426181178457,
        "smoothedEle": 377.71079621440083,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223038,
        "lng": 120.867564,
        "ele": 383,
        "distanceKm": 35.553389057189165,
        "gradePct": -0.6697627838188016,
        "smoothedEle": 377.35604339637797,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223155,
        "lng": 120.867386,
        "ele": 382,
        "distanceKm": 35.57586057225512,
        "gradePct": -1.0365575882376699,
        "smoothedEle": 376.77226944478656,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223374,
        "lng": 120.86701,
        "ele": 374,
        "distanceKm": 35.621587778190815,
        "gradePct": -1.5656238601033354,
        "smoothedEle": 375.67719391215564,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223418,
        "lng": 120.866964,
        "ele": 373,
        "distanceKm": 35.62839642947277,
        "gradePct": -1.6080204062563208,
        "smoothedEle": 375.57846846856734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223472,
        "lng": 120.866935,
        "ele": 372.75,
        "distanceKm": 35.635102050501615,
        "gradePct": -1.6327976837858156,
        "smoothedEle": 375.5151923901301,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223577,
        "lng": 120.866923,
        "ele": 373.25,
        "distanceKm": 35.64684269279645,
        "gradePct": -1.6648128196256995,
        "smoothedEle": 375.42713757291887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223705,
        "lng": 120.866997,
        "ele": 376.5,
        "distanceKm": 35.66298576946548,
        "gradePct": -1.679293460923053,
        "smoothedEle": 375.29151127919965,
        "gradeBand": "descent"
      },
      {
        "lat": 22.22378,
        "lng": 120.867019,
        "ele": 377.75,
        "distanceKm": 35.671627395838584,
        "gradePct": -1.6697585961400183,
        "smoothedEle": 375.24941060319077,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223821,
        "lng": 120.867016,
        "ele": 378,
        "distanceKm": 35.676196840613066,
        "gradePct": -1.6691641536540136,
        "smoothedEle": 375.218254327884,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223852,
        "lng": 120.867006,
        "ele": 378,
        "distanceKm": 35.67979429707397,
        "gradePct": -1.6870100998114923,
        "smoothedEle": 375.1570975680487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.224068,
        "lng": 120.866872,
        "ele": 375.5,
        "distanceKm": 35.707491310817026,
        "gradePct": -1.7469237157792785,
        "smoothedEle": 374.68624833441675,
        "gradeBand": "descent"
      },
      {
        "lat": 22.224437,
        "lng": 120.866773,
        "ele": 372.75,
        "distanceKm": 35.74976882522868,
        "gradePct": -1.7827905095297498,
        "smoothedEle": 373.86105690054796,
        "gradeBand": "descent"
      },
      {
        "lat": 22.224823,
        "lng": 120.866768,
        "ele": 372.25,
        "distanceKm": 35.79269321180686,
        "gradePct": -1.7882616336861505,
        "smoothedEle": 372.79263797638765,
        "gradeBand": "descent"
      },
      {
        "lat": 22.22515,
        "lng": 120.86671,
        "ele": 368,
        "distanceKm": 35.82954087169191,
        "gradePct": -1.9133276968090072,
        "smoothedEle": 371.7410138044099,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225228,
        "lng": 120.86674,
        "ele": 367.75,
        "distanceKm": 35.83874741859006,
        "gradePct": -2.004302227415934,
        "smoothedEle": 371.47924767463485,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225367,
        "lng": 120.866986,
        "ele": 371,
        "distanceKm": 35.86841355151258,
        "gradePct": -2.1878036589235395,
        "smoothedEle": 370.8894606411318,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225426,
        "lng": 120.867207,
        "ele": 374.5,
        "distanceKm": 35.89208899906751,
        "gradePct": -2.164904384872043,
        "smoothedEle": 370.6182788644144,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225512,
        "lng": 120.867288,
        "ele": 374,
        "distanceKm": 35.90477610246068,
        "gradePct": -2.104640643754492,
        "smoothedEle": 370.5231255889656,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225854,
        "lng": 120.867426,
        "ele": 367.25,
        "distanceKm": 35.945371176010475,
        "gradePct": -2.004689239123394,
        "smoothedEle": 369.9375137064829,
        "gradeBand": "descent"
      },
      {
        "lat": 22.226141,
        "lng": 120.867653,
        "ele": 367.75,
        "distanceKm": 35.98492368416847,
        "gradePct": -1.6313562614764177,
        "smoothedEle": 369.72331459705197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.226461,
        "lng": 120.867769,
        "ele": 367.25,
        "distanceKm": 36.02245604277493,
        "gradePct": -1.3095754165049796,
        "smoothedEle": 369.3240624425922,
        "gradeBand": "descent"
      },
      {
        "lat": 22.226844,
        "lng": 120.867821,
        "ele": 368.25,
        "distanceKm": 36.06537879654294,
        "gradePct": -1.0208805353932886,
        "smoothedEle": 368.9080329860833,
        "gradeBand": "descent"
      },
      {
        "lat": 22.227183,
        "lng": 120.867978,
        "ele": 366.75,
        "distanceKm": 36.10639198058656,
        "gradePct": -0.7240989263154812,
        "smoothedEle": 369.05161758196346,
        "gradeBand": "descent"
      },
      {
        "lat": 22.227711,
        "lng": 120.868042,
        "ele": 369.5,
        "distanceKm": 36.16547141018993,
        "gradePct": -0.3356529386589623,
        "smoothedEle": 369.15735373972535,
        "gradeBand": "descent"
      },
      {
        "lat": 22.228082,
        "lng": 120.868106,
        "ele": 372.5,
        "distanceKm": 36.207247454223946,
        "gradePct": 0.24655571482841415,
        "smoothedEle": 369.9789559176819,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.228443,
        "lng": 120.868443,
        "ele": 367.5,
        "distanceKm": 36.260300124256226,
        "gradePct": 0.9083805299850537,
        "smoothedEle": 370.7740191559485,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.228581,
        "lng": 120.868533,
        "ele": 366.5,
        "distanceKm": 36.278224547944525,
        "gradePct": 1.0792126342671924,
        "smoothedEle": 371.1114304280001,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.228711,
        "lng": 120.868576,
        "ele": 366.75,
        "distanceKm": 36.29334232896316,
        "gradePct": 1.1950387955382498,
        "smoothedEle": 371.3960091577155,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.22902,
        "lng": 120.868595,
        "ele": 369.5,
        "distanceKm": 36.32775722156513,
        "gradePct": 1.4939267055388328,
        "smoothedEle": 372.077708980542,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.229421,
        "lng": 120.868651,
        "ele": 371.75,
        "distanceKm": 36.37271747427217,
        "gradePct": 1.9064152907745622,
        "smoothedEle": 373.1126914008518,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.229891,
        "lng": 120.868591,
        "ele": 379.25,
        "distanceKm": 36.42534279967701,
        "gradePct": 1.8093416320871851,
        "smoothedEle": 373.8688214606127,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.230347,
        "lng": 120.868719,
        "ele": 374.75,
        "distanceKm": 36.47773148949453,
        "gradePct": 1.5490251332213696,
        "smoothedEle": 374.2001993093506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.23075166160763,
        "lng": 120.86866332892849,
        "ele": 376.66205357335656,
        "distanceKm": 36.52309126863188,
        "gradePct": 1.678505647212039,
        "smoothedEle": 375.3422957736114,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.231155,
        "lng": 120.868596,
        "ele": 378.25,
        "distanceKm": 36.56847277972881,
        "gradePct": 2.256751827442112,
        "smoothedEle": 377.528482432531,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.231647,
        "lng": 120.868411,
        "ele": 378.75,
        "distanceKm": 36.626399950722096,
        "gradePct": 2.9250695243910494,
        "smoothedEle": 379.7256473809378,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.231954,
        "lng": 120.868163,
        "ele": 373.5,
        "distanceKm": 36.66902532932392,
        "gradePct": 2.880962706233918,
        "smoothedEle": 379.9070550371565,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.232155,
        "lng": 120.867632,
        "ele": 376.25,
        "distanceKm": 36.728073768238474,
        "gradePct": 2.0370390390003474,
        "smoothedEle": 379.65639834406977,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.232099,
        "lng": 120.867265,
        "ele": 384,
        "distanceKm": 36.76635838686403,
        "gradePct": 1.1287845289220524,
        "smoothedEle": 379.68419376547854,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.231986,
        "lng": 120.867026,
        "ele": 391.25,
        "distanceKm": 36.793981544170705,
        "gradePct": 0.774873321740461,
        "smoothedEle": 380.0457709419075,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.231964,
        "lng": 120.866951,
        "ele": 393,
        "distanceKm": 36.80207953674405,
        "gradePct": 0.709316809106373,
        "smoothedEle": 380.22181300689357,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.231987,
        "lng": 120.866784,
        "ele": 395,
        "distanceKm": 36.81945786161139,
        "gradePct": 0.5908956022356536,
        "smoothedEle": 380.6441266611218,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.232026,
        "lng": 120.866734,
        "ele": 394.5,
        "distanceKm": 36.82618779462068,
        "gradePct": 0.5383529013533271,
        "smoothedEle": 380.79430614903816,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.232119,
        "lng": 120.866685,
        "ele": 392.5,
        "distanceKm": 36.837693279959936,
        "gradePct": 0.6282291930442252,
        "smoothedEle": 381.03016859849293,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.232187,
        "lng": 120.866687,
        "ele": 390.5,
        "distanceKm": 36.84525734715482,
        "gradePct": 0.689665075181769,
        "smoothedEle": 381.185231975988,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.232432,
        "lng": 120.866734,
        "ele": 382.75,
        "distanceKm": 36.872926330464416,
        "gradePct": 0.9375709310445624,
        "smoothedEle": 381.7656374090444,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.232614,
        "lng": 120.86672,
        "ele": 377.75,
        "distanceKm": 36.8932150728152,
        "gradePct": 1.1733761638344735,
        "smoothedEle": 382.15112351370936,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.23269,
        "lng": 120.866694,
        "ele": 376.25,
        "distanceKm": 36.90207950532574,
        "gradePct": 1.2662484278526553,
        "smoothedEle": 382.2992391157314,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.232753,
        "lng": 120.866663,
        "ele": 375,
        "distanceKm": 36.90977724117812,
        "gradePct": 1.3383952009587954,
        "smoothedEle": 382.4108562855909,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.232834,
        "lng": 120.866574,
        "ele": 375,
        "distanceKm": 36.92262400065823,
        "gradePct": 1.458801026663203,
        "smoothedEle": 382.5971342980525,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233123,
        "lng": 120.866068,
        "ele": 375.25,
        "distanceKm": 36.983821836568325,
        "gradePct": 1.5849409109341424,
        "smoothedEle": 383.0826658518371,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233178,
        "lng": 120.865918,
        "ele": 375.25,
        "distanceKm": 37.000428182028415,
        "gradePct": 1.4350258812764105,
        "smoothedEle": 383.0559660091632,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.23318,
        "lng": 120.865772,
        "ele": 378.25,
        "distanceKm": 37.0154573019386,
        "gradePct": 1.1455196332541513,
        "smoothedEle": 382.83794764063924,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.23314,
        "lng": 120.865517,
        "ele": 387.25,
        "distanceKm": 37.042078121007975,
        "gradePct": 0.7032456390625057,
        "smoothedEle": 382.5265491181027,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233138,
        "lng": 120.865442,
        "ele": 389.25,
        "distanceKm": 37.04980091894479,
        "gradePct": 0.5677768306808763,
        "smoothedEle": 382.4160950212498,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233154,
        "lng": 120.865373,
        "ele": 390.5,
        "distanceKm": 37.05712239856052,
        "gradePct": 0.4674626178200119,
        "smoothedEle": 382.36904746618876,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233195,
        "lng": 120.865309,
        "ele": 390.5,
        "distanceKm": 37.065133523527095,
        "gradePct": 0.3687009299200331,
        "smoothedEle": 382.3395714813415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233296,
        "lng": 120.865216,
        "ele": 388.5,
        "distanceKm": 37.07989013030864,
        "gradePct": 0.1837639200754469,
        "smoothedEle": 382.26547744623554,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233515,
        "lng": 120.865001,
        "ele": 389.5,
        "distanceKm": 37.11279483484887,
        "gradePct": 0.05332751365651158,
        "smoothedEle": 382.56126642112974,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.233593,
        "lng": 120.865,
        "ele": 388.25,
        "distanceKm": 37.12146866182181,
        "gradePct": 0.10537047549413919,
        "smoothedEle": 382.7911228359126,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.234063,
        "lng": 120.864963,
        "ele": 380.75,
        "distanceKm": 37.173868921982084,
        "gradePct": 0.699455109912482,
        "smoothedEle": 384.40261161136897,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.234619,
        "lng": 120.864785,
        "ele": 377,
        "distanceKm": 37.238350888732526,
        "gradePct": 2.092491933405141,
        "smoothedEle": 386.7551324932791,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.234794,
        "lng": 120.864722,
        "ele": 376.5,
        "distanceKm": 37.25886199238875,
        "gradePct": 2.6372364581973127,
        "smoothedEle": 387.6371197532667,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.23484,
        "lng": 120.864672,
        "ele": 377.75,
        "distanceKm": 37.26611786738539,
        "gradePct": 2.8163165244956927,
        "smoothedEle": 387.9672620656138,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.234867,
        "lng": 120.864605,
        "ele": 379.75,
        "distanceKm": 37.27363914582731,
        "gradePct": 3.006308062081004,
        "smoothedEle": 388.30948023472115,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234859,
        "lng": 120.864521,
        "ele": 382.5,
        "distanceKm": 37.28233062860885,
        "gradePct": 3.1766972352944096,
        "smoothedEle": 388.64081019284106,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234833,
        "lng": 120.864474,
        "ele": 384.5,
        "distanceKm": 37.28796624991038,
        "gradePct": 3.228856993003103,
        "smoothedEle": 388.7957897786333,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234647,
        "lng": 120.864286,
        "ele": 392.25,
        "distanceKm": 37.31628917967434,
        "gradePct": 3.4183898138586897,
        "smoothedEle": 389.49064618672213,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234433,
        "lng": 120.863908,
        "ele": 396,
        "distanceKm": 37.36189557500564,
        "gradePct": 3.3956272927377795,
        "smoothedEle": 390.8256444704988,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234208,
        "lng": 120.863581,
        "ele": 392.75,
        "distanceKm": 37.40383301481218,
        "gradePct": 3.3985203876407097,
        "smoothedEle": 392.29284413688197,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234179,
        "lng": 120.863527,
        "ele": 392,
        "distanceKm": 37.41025878487539,
        "gradePct": 3.437128367015483,
        "smoothedEle": 392.60449398494757,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234173,
        "lng": 120.863472,
        "ele": 391.5,
        "distanceKm": 37.41595895825658,
        "gradePct": 3.471376741011007,
        "smoothedEle": 392.88095239393544,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234183,
        "lng": 120.863398,
        "ele": 390.75,
        "distanceKm": 37.42365630814137,
        "gradePct": 3.526654204826208,
        "smoothedEle": 393.27233275620887,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234234,
        "lng": 120.863322,
        "ele": 390.75,
        "distanceKm": 37.43331811949118,
        "gradePct": 3.5967825678931207,
        "smoothedEle": 393.7650851350495,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234334,
        "lng": 120.86327,
        "ele": 392,
        "distanceKm": 37.44565868672194,
        "gradePct": 3.662541382207342,
        "smoothedEle": 394.3944540638182,
        "gradeBand": "hard"
      },
      {
        "lat": 22.234688,
        "lng": 120.863324,
        "ele": 396.75,
        "distanceKm": 37.48541220647659,
        "gradePct": 4.010851436752176,
        "smoothedEle": 396.7472564577084,
        "gradeBand": "hard"
      },
      {
        "lat": 22.235091,
        "lng": 120.863242,
        "ele": 401,
        "distanceKm": 37.53101170648883,
        "gradePct": 5.186863287790243,
        "smoothedEle": 400.2953331108991,
        "gradeBand": "hard"
      },
      {
        "lat": 22.235541,
        "lng": 120.862923,
        "ele": 403.75,
        "distanceKm": 37.590860005341355,
        "gradePct": 5.947484983776037,
        "smoothedEle": 403.7339476963896,
        "gradeBand": "hard"
      },
      {
        "lat": 22.23595,
        "lng": 120.86261,
        "ele": 405,
        "distanceKm": 37.646593126642,
        "gradePct": 5.044200823950503,
        "smoothedEle": 404.538160311021,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236139,
        "lng": 120.862283,
        "ele": 406.25,
        "distanceKm": 37.68627237535172,
        "gradePct": 4.245511795330511,
        "smoothedEle": 405.30520940292,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236275,
        "lng": 120.861945,
        "ele": 408,
        "distanceKm": 37.7242059644537,
        "gradePct": 3.175306849079772,
        "smoothedEle": 406.11639507239465,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236545,
        "lng": 120.861664,
        "ele": 418.25,
        "distanceKm": 37.765893459517045,
        "gradePct": 2.4926847520542808,
        "smoothedEle": 407.28485155541193,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236602,
        "lng": 120.86158,
        "ele": 421.25,
        "distanceKm": 37.77661355699411,
        "gradePct": 2.364282046215118,
        "smoothedEle": 407.6439748208935,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236631,
        "lng": 120.861502,
        "ele": 422.75,
        "distanceKm": 37.785265151445934,
        "gradePct": 2.260655363732493,
        "smoothedEle": 407.9338032350296,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236625,
        "lng": 120.861431,
        "ele": 422.75,
        "distanceKm": 37.79260324511522,
        "gradePct": 2.2102636186331184,
        "smoothedEle": 408.1796293729506,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236599,
        "lng": 120.86137,
        "ele": 422,
        "distanceKm": 37.799515351446885,
        "gradePct": 2.322350982006408,
        "smoothedEle": 408.5035437693205,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236534,
        "lng": 120.861307,
        "ele": 419.5,
        "distanceKm": 37.809225424887345,
        "gradePct": 2.507183652116929,
        "smoothedEle": 409.0133226249445,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236176,
        "lng": 120.861167,
        "ele": 405.5,
        "distanceKm": 37.85156098952185,
        "gradePct": 3.2715270913148617,
        "smoothedEle": 411.1772494447796,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236048,
        "lng": 120.861077,
        "ele": 401.25,
        "distanceKm": 37.86854293579228,
        "gradePct": 3.5828805447932615,
        "smoothedEle": 412.1282384359236,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236001,
        "lng": 120.860997,
        "ele": 400.25,
        "distanceKm": 37.87829550842544,
        "gradePct": 3.742735566192895,
        "smoothedEle": 412.636477803879,
        "gradeBand": "hard"
      },
      {
        "lat": 22.235982,
        "lng": 120.860896,
        "ele": 400.75,
        "distanceKm": 37.8889035316739,
        "gradePct": 3.82048979951563,
        "smoothedEle": 413.00245460595096,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236142,
        "lng": 120.860398,
        "ele": 401.75,
        "distanceKm": 37.943160436762845,
        "gradePct": 3.959515234664196,
        "smoothedEle": 414.5666993929856,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236274,
        "lng": 120.860313,
        "ele": 404.25,
        "distanceKm": 37.96024773664136,
        "gradePct": 3.8266200275803066,
        "smoothedEle": 414.7798479577603,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236462,
        "lng": 120.860315,
        "ele": 409,
        "distanceKm": 37.98115342522225,
        "gradePct": 3.5434393271664026,
        "smoothedEle": 414.88293906086915,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236852,
        "lng": 120.860191,
        "ele": 417.75,
        "distanceKm": 38.02635856469672,
        "gradePct": 2.298947340210698,
        "smoothedEle": 414.48695525905964,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.237175,
        "lng": 120.860123,
        "ele": 427.25,
        "distanceKm": 38.062950155643485,
        "gradePct": 0.8943172570275111,
        "smoothedEle": 413.60367726164606,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.237341,
        "lng": 120.859976,
        "ele": 429.75,
        "distanceKm": 38.08681702943767,
        "gradePct": 0.12292637109325534,
        "smoothedEle": 413.17632302098747,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.237381,
        "lng": 120.859849,
        "ele": 431.75,
        "distanceKm": 38.100624486378855,
        "gradePct": -0.07650808283102498,
        "smoothedEle": 413.1873574990011,
        "gradeBand": "descent"
      },
      {
        "lat": 22.237087,
        "lng": 120.859433,
        "ele": 422.25,
        "distanceKm": 38.154494704849164,
        "gradePct": -0.3079112654666814,
        "smoothedEle": 414.0922615742388,
        "gradeBand": "descent"
      },
      {
        "lat": 22.236846,
        "lng": 120.859008,
        "ele": 413,
        "distanceKm": 38.20579382012311,
        "gradePct": 0.7385462219942733,
        "smoothedEle": 416.14418885147006,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236753,
        "lng": 120.85888,
        "ele": 410,
        "distanceKm": 38.22254210003843,
        "gradePct": 1.2090260484930695,
        "smoothedEle": 416.938438470349,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236722,
        "lng": 120.858798,
        "ele": 409.5,
        "distanceKm": 38.23165876670358,
        "gradePct": 1.4948369290288,
        "smoothedEle": 417.3486884702808,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236712,
        "lng": 120.85871,
        "ele": 409.5,
        "distanceKm": 38.240784193909576,
        "gradePct": 1.8387637331582334,
        "smoothedEle": 417.8162649913865,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236775,
        "lng": 120.858485,
        "ele": 412.5,
        "distanceKm": 38.264978735818325,
        "gradePct": 2.7428073430000843,
        "smoothedEle": 419.052968701137,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.236683,
        "lng": 120.858056,
        "ele": 408.25,
        "distanceKm": 38.31030325193915,
        "gradePct": 3.6377109394953546,
        "smoothedEle": 420.6253618706471,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236685,
        "lng": 120.857963,
        "ele": 407.25,
        "distanceKm": 38.319877890995,
        "gradePct": 3.6675722880828565,
        "smoothedEle": 420.8459179586379,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236709,
        "lng": 120.857842,
        "ele": 406,
        "distanceKm": 38.33261457369691,
        "gradePct": 3.7068472408489055,
        "smoothedEle": 421.1384168031058,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236738,
        "lng": 120.857781,
        "ele": 405.75,
        "distanceKm": 38.33967270859793,
        "gradePct": 3.7216768968368155,
        "smoothedEle": 421.2866376360273,
        "gradeBand": "hard"
      },
      {
        "lat": 22.236878,
        "lng": 120.857731,
        "ele": 406.5,
        "distanceKm": 38.356068598102354,
        "gradePct": 3.8923242968478475,
        "smoothedEle": 421.9398647526369,
        "gradeBand": "hard"
      },
      {
        "lat": 22.23694,
        "lng": 120.857756,
        "ele": 407.5,
        "distanceKm": 38.363427235161915,
        "gradePct": 3.894166633793874,
        "smoothedEle": 422.2378895535491,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237007,
        "lng": 120.857808,
        "ele": 409.25,
        "distanceKm": 38.37260048922371,
        "gradePct": 3.8964632852982692,
        "smoothedEle": 422.6094063430517,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237053,
        "lng": 120.857869,
        "ele": 410.75,
        "distanceKm": 38.38069873822107,
        "gradePct": 3.918698282691851,
        "smoothedEle": 422.97780040410714,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237085,
        "lng": 120.857948,
        "ele": 412.75,
        "distanceKm": 38.389574296541454,
        "gradePct": 3.940890408155412,
        "smoothedEle": 423.3772005285244,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237221,
        "lng": 120.858418,
        "ele": 423.5,
        "distanceKm": 38.44025769483519,
        "gradePct": 3.757845129230734,
        "smoothedEle": 425.3049780355203,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237258,
        "lng": 120.858496,
        "ele": 425,
        "distanceKm": 38.449278664192015,
        "gradePct": 3.71895474930469,
        "smoothedEle": 425.68836923318537,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237304,
        "lng": 120.858545,
        "ele": 426.5,
        "distanceKm": 38.456461841124515,
        "gradePct": 3.5999030788653728,
        "smoothedEle": 425.81743389216894,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237367,
        "lng": 120.858571,
        "ele": 428.5,
        "distanceKm": 38.46396086186808,
        "gradePct": 3.4738633341967575,
        "smoothedEle": 425.9486667551813,
        "gradeBand": "hard"
      },
      {
        "lat": 22.23747,
        "lng": 120.858569,
        "ele": 431.5,
        "distanceKm": 38.475415804878224,
        "gradePct": 3.4007824820498427,
        "smoothedEle": 426.21661532664353,
        "gradeBand": "hard"
      },
      {
        "lat": 22.23766,
        "lng": 120.858547,
        "ele": 437.5,
        "distanceKm": 38.49666386680162,
        "gradePct": 3.2149454597329847,
        "smoothedEle": 426.5820767286323,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237705,
        "lng": 120.858536,
        "ele": 438.75,
        "distanceKm": 38.50179413098981,
        "gradePct": 3.1647576882379957,
        "smoothedEle": 426.6596797512774,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237792,
        "lng": 120.858429,
        "ele": 440,
        "distanceKm": 38.5164525857069,
        "gradePct": 3.027214464449869,
        "smoothedEle": 426.82144345001785,
        "gradeBand": "hard"
      },
      {
        "lat": 22.237883,
        "lng": 120.858227,
        "ele": 438,
        "distanceKm": 38.539574961747896,
        "gradePct": 2.9660824521111953,
        "smoothedEle": 427.21674985639896,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.237943,
        "lng": 120.858141,
        "ele": 437.5,
        "distanceKm": 38.55065921704161,
        "gradePct": 2.9558113710163108,
        "smoothedEle": 427.63597284436656,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.237993,
        "lng": 120.858088,
        "ele": 437.25,
        "distanceKm": 38.55844817138369,
        "gradePct": 2.9848553525421413,
        "smoothedEle": 428.0059481756152,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.23811,
        "lng": 120.858068,
        "ele": 440.25,
        "distanceKm": 38.5716198416484,
        "gradePct": 3.037485468649933,
        "smoothedEle": 428.6446610535516,
        "gradeBand": "hard"
      },
      {
        "lat": 22.238452,
        "lng": 120.85812,
        "ele": 452,
        "distanceKm": 38.610023329212204,
        "gradePct": 3.536622258112579,
        "smoothedEle": 431.2282379029559,
        "gradeBand": "hard"
      },
      {
        "lat": 22.238627,
        "lng": 120.857795,
        "ele": 444.75,
        "distanceKm": 38.64872190821311,
        "gradePct": 4.319513414087591,
        "smoothedEle": 434.30373393225716,
        "gradeBand": "hard"
      },
      {
        "lat": 22.238641,
        "lng": 120.857488,
        "ele": 434.25,
        "distanceKm": 38.68035787053539,
        "gradePct": 5.103664788100543,
        "smoothedEle": 436.5089472080102,
        "gradeBand": "hard"
      },
      {
        "lat": 22.238495,
        "lng": 120.857153,
        "ele": 421.75,
        "distanceKm": 38.71846818286182,
        "gradePct": 5.975905910307347,
        "smoothedEle": 438.80771446576944,
        "gradeBand": "hard"
      },
      {
        "lat": 22.238543,
        "lng": 120.856968,
        "ele": 417.75,
        "distanceKm": 38.73824303421007,
        "gradePct": 6.321655749916796,
        "smoothedEle": 439.8372903621271,
        "gradeBand": "steep"
      },
      {
        "lat": 22.23859,
        "lng": 120.856915,
        "ele": 417,
        "distanceKm": 38.74579747203812,
        "gradePct": 6.340352417366854,
        "smoothedEle": 440.1327992666051,
        "gradeBand": "steep"
      },
      {
        "lat": 22.238663,
        "lng": 120.856869,
        "ele": 417.25,
        "distanceKm": 38.75519455065266,
        "gradePct": 6.297876249664281,
        "smoothedEle": 440.44715369022,
        "gradeBand": "steep"
      },
      {
        "lat": 22.23875,
        "lng": 120.856859,
        "ele": 418.5,
        "distanceKm": 38.76492312021449,
        "gradePct": 6.194995468359733,
        "smoothedEle": 440.7099185180668,
        "gradeBand": "steep"
      },
      {
        "lat": 22.238857,
        "lng": 120.856894,
        "ele": 421.25,
        "distanceKm": 38.777354378917174,
        "gradePct": 5.9318579838493415,
        "smoothedEle": 440.894165361568,
        "gradeBand": "hard"
      },
      {
        "lat": 22.239103,
        "lng": 120.857097,
        "ele": 432,
        "distanceKm": 38.811774999321315,
        "gradePct": 4.8209689325633915,
        "smoothedEle": 441.0093864214012,
        "gradeBand": "hard"
      },
      {
        "lat": 22.23938,
        "lng": 120.857278,
        "ele": 442,
        "distanceKm": 38.84777151232798,
        "gradePct": 3.1452040218183424,
        "smoothedEle": 440.5186110689083,
        "gradeBand": "hard"
      },
      {
        "lat": 22.239595,
        "lng": 120.857487,
        "ele": 450.75,
        "distanceKm": 38.87993147923409,
        "gradePct": 1.8066648876528886,
        "smoothedEle": 440.0925549932365,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.239656,
        "lng": 120.857487,
        "ele": 451.5,
        "distanceKm": 38.88671437912819,
        "gradePct": 1.6034869448220719,
        "smoothedEle": 440.0993378931306,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240162,
        "lng": 120.857258,
        "ele": 454.75,
        "distanceKm": 38.947716283484546,
        "gradePct": 0.9325632466943583,
        "smoothedEle": 442.06211452450333,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240299,
        "lng": 120.857188,
        "ele": 457.5,
        "distanceKm": 38.964567768248344,
        "gradePct": 1.215786668492211,
        "smoothedEle": 443.1318939385624,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240362,
        "lng": 120.857121,
        "ele": 458,
        "distanceKm": 38.97439764072125,
        "gradePct": 1.451513179185391,
        "smoothedEle": 443.7533691519521,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240405,
        "lng": 120.85706,
        "ele": 458.25,
        "distanceKm": 38.9822893116362,
        "gradePct": 1.6856646387790921,
        "smoothedEle": 444.28201404439596,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24042,
        "lng": 120.856989,
        "ele": 457.5,
        "distanceKm": 38.98978474995893,
        "gradePct": 1.9392074235070433,
        "smoothedEle": 444.81419016530964,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240411,
        "lng": 120.856916,
        "ele": 456,
        "distanceKm": 38.9973644550214,
        "gradePct": 2.1996087898708336,
        "smoothedEle": 445.3603655275909,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240365,
        "lng": 120.856838,
        "ele": 453,
        "distanceKm": 39.006883444373685,
        "gradePct": 2.4858295933698504,
        "smoothedEle": 445.9646714074821,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240156,
        "lng": 120.856686,
        "ele": 442.25,
        "distanceKm": 39.034898254598474,
        "gradePct": 3.419042101353577,
        "smoothedEle": 447.5322088720235,
        "gradeBand": "hard"
      },
      {
        "lat": 22.240064,
        "lng": 120.856531,
        "ele": 437,
        "distanceKm": 39.05384953951605,
        "gradePct": 3.927739192088411,
        "smoothedEle": 448.29356759125824,
        "gradeBand": "hard"
      },
      {
        "lat": 22.240048,
        "lng": 120.856475,
        "ele": 435.75,
        "distanceKm": 39.05988156067097,
        "gradePct": 4.049127664033221,
        "smoothedEle": 448.45643216244116,
        "gradeBand": "hard"
      },
      {
        "lat": 22.240059,
        "lng": 120.856353,
        "ele": 435,
        "distanceKm": 39.072497582460805,
        "gradePct": 4.303012650136163,
        "smoothedEle": 448.7970647507667,
        "gradeBand": "hard"
      },
      {
        "lat": 22.240427,
        "lng": 120.856106,
        "ele": 445.25,
        "distanceKm": 39.12067125540128,
        "gradePct": 4.0667359515211094,
        "smoothedEle": 449.3253947560436,
        "gradeBand": "hard"
      },
      {
        "lat": 22.240817,
        "lng": 120.85599,
        "ele": 456.75,
        "distanceKm": 39.16565077076026,
        "gradePct": 3.0026739898812735,
        "smoothedEle": 449.20571271680666,
        "gradeBand": "hard"
      },
      {
        "lat": 22.24097,
        "lng": 120.855646,
        "ele": 454.75,
        "distanceKm": 39.20493141191554,
        "gradePct": 1.5500848886441425,
        "smoothedEle": 448.9409178722693,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240908,
        "lng": 120.855456,
        "ele": 453.25,
        "distanceKm": 39.22566628964552,
        "gradePct": 0.7323400924484995,
        "smoothedEle": 448.4803247532904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.240604,
        "lng": 120.855133,
        "ele": 447.75,
        "distanceKm": 39.27307748425905,
        "gradePct": -0.6021137864468556,
        "smoothedEle": 447.59919707325616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.240555,
        "lng": 120.85506,
        "ele": 447.5,
        "distanceKm": 39.28235849062169,
        "gradePct": -0.6199216869839487,
        "smoothedEle": 447.6653678672503,
        "gradeBand": "descent"
      },
      {
        "lat": 22.240535,
        "lng": 120.85499,
        "ele": 447.25,
        "distanceKm": 39.28989849303967,
        "gradePct": -0.6311080110471518,
        "smoothedEle": 447.7256878865941,
        "gradeBand": "descent"
      },
      {
        "lat": 22.240546,
        "lng": 120.854904,
        "ele": 446,
        "distanceKm": 39.298833940310104,
        "gradePct": -0.6209493856622341,
        "smoothedEle": 447.84400191891245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.240583,
        "lng": 120.854846,
        "ele": 445.5,
        "distanceKm": 39.30608388980016,
        "gradePct": -0.5936431532836566,
        "smoothedEle": 447.9781259844785,
        "gradeBand": "descent"
      },
      {
        "lat": 22.240667,
        "lng": 120.854799,
        "ele": 445.5,
        "distanceKm": 39.31660257907368,
        "gradePct": -0.546107518737663,
        "smoothedEle": 448.18855775693606,
        "gradeBand": "descent"
      },
      {
        "lat": 22.241285,
        "lng": 120.85471,
        "ele": 449.75,
        "distanceKm": 39.38592896213569,
        "gradePct": -0.23538711469256787,
        "smoothedEle": 448.59824111245945,
        "gradeBand": "descent"
      },
      {
        "lat": 22.241701,
        "lng": 120.854633,
        "ele": 451.25,
        "distanceKm": 39.4328600768184,
        "gradePct": -0.3917343480576336,
        "smoothedEle": 447.5631609445763,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242086,
        "lng": 120.854491,
        "ele": 446.25,
        "distanceKm": 39.478096114687965,
        "gradePct": -0.6007559967142327,
        "smoothedEle": 446.4334664107813,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242221,
        "lng": 120.854365,
        "ele": 445.25,
        "distanceKm": 39.49793323776595,
        "gradePct": -0.9373501411473776,
        "smoothedEle": 445.95737545690963,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242306,
        "lng": 120.854247,
        "ele": 445.5,
        "distanceKm": 39.51332239874719,
        "gradePct": -1.1680435871808872,
        "smoothedEle": 445.7868488932045,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242412,
        "lng": 120.853976,
        "ele": 446.25,
        "distanceKm": 39.54360224564687,
        "gradePct": -1.4220540819693295,
        "smoothedEle": 445.5040037700821,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242271,
        "lng": 120.853598,
        "ele": 444,
        "distanceKm": 39.58554688458289,
        "gradePct": -1.5513730285230798,
        "smoothedEle": 445.4932371731037,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242329,
        "lng": 120.853239,
        "ele": 443.5,
        "distanceKm": 39.623054231893335,
        "gradePct": -1.13763511415304,
        "smoothedEle": 445.50416164185754,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242574,
        "lng": 120.853024,
        "ele": 444,
        "distanceKm": 39.658151522799955,
        "gradePct": -0.658637813113605,
        "smoothedEle": 445.6142736736795,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242882,
        "lng": 120.852405,
        "ele": 441.25,
        "distanceKm": 39.73048163266916,
        "gradePct": -0.20053033303790072,
        "smoothedEle": 445.22550321487535,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24303,
        "lng": 120.8521,
        "ele": 442.75,
        "distanceKm": 39.765924718091426,
        "gradePct": -0.037833105972054595,
        "smoothedEle": 445.42260769443027,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24313,
        "lng": 120.851603,
        "ele": 445.5,
        "distanceKm": 39.81827092234303,
        "gradePct": 0.5672037688715851,
        "smoothedEle": 446.63717598281477,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243243,
        "lng": 120.851252,
        "ele": 448.25,
        "distanceKm": 39.85651885427735,
        "gradePct": 1.1440885501176417,
        "smoothedEle": 447.8973285424356,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243335,
        "lng": 120.850859,
        "ele": 451.75,
        "distanceKm": 39.89824021859632,
        "gradePct": 1.9458247186942124,
        "smoothedEle": 449.29044852260415,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243051,
        "lng": 120.85059,
        "ele": 446,
        "distanceKm": 39.94023727450783,
        "gradePct": 2.661535750152116,
        "smoothedEle": 450.6028273482229,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.242942,
        "lng": 120.850238,
        "ele": 445.75,
        "distanceKm": 39.97843904075861,
        "gradePct": 3.0656169269610833,
        "smoothedEle": 451.8442064311454,
        "gradeBand": "hard"
      },
      {
        "lat": 22.242986,
        "lng": 120.849953,
        "ele": 449.75,
        "distanceKm": 40.0081766831072,
        "gradePct": 3.161924008329305,
        "smoothedEle": 452.7268113560451,
        "gradeBand": "hard"
      },
      {
        "lat": 22.243071,
        "lng": 120.849837,
        "ele": 453.25,
        "distanceKm": 40.02340387253351,
        "gradePct": 3.175832777893999,
        "smoothedEle": 453.15795657290164,
        "gradeBand": "hard"
      },
      {
        "lat": 22.243275,
        "lng": 120.849644,
        "ele": 460.5,
        "distanceKm": 40.053555489050765,
        "gradePct": 3.1125321805273938,
        "smoothedEle": 454.0247590684956,
        "gradeBand": "hard"
      },
      {
        "lat": 22.243296,
        "lng": 120.849546,
        "ele": 461.25,
        "distanceKm": 40.063908472050095,
        "gradePct": 3.0826952471120834,
        "smoothedEle": 454.30946610097715,
        "gradeBand": "hard"
      },
      {
        "lat": 22.243219,
        "lng": 120.849207,
        "ele": 460,
        "distanceKm": 40.0998337259828,
        "gradePct": 2.9545715533400174,
        "smoothedEle": 455.2493876282439,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243168,
        "lng": 120.848735,
        "ele": 460.5,
        "distanceKm": 40.14874211342567,
        "gradePct": 2.6853858818388305,
        "smoothedEle": 456.24996667739276,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24295,
        "lng": 120.848414,
        "ele": 458.75,
        "distanceKm": 40.18971871018367,
        "gradePct": 2.4419438273719374,
        "smoothedEle": 457.0628715261819,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.242657,
        "lng": 120.848114,
        "ele": 456.5,
        "distanceKm": 40.23460534106341,
        "gradePct": 2.30704140315225,
        "smoothedEle": 458.0940606171214,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24255,
        "lng": 120.8479,
        "ele": 456.75,
        "distanceKm": 40.259638599357665,
        "gradePct": 2.19234247199864,
        "smoothedEle": 458.5767295459326,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.242539,
        "lng": 120.84767,
        "ele": 458,
        "distanceKm": 40.28334201537335,
        "gradePct": 2.0118129610902713,
        "smoothedEle": 458.84153674437846,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.242598,
        "lng": 120.847363,
        "ele": 459.25,
        "distanceKm": 40.31561266640648,
        "gradePct": 1.5618779043326532,
        "smoothedEle": 458.6959526324515,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.242803,
        "lng": 120.846952,
        "ele": 460.25,
        "distanceKm": 40.363664134242356,
        "gradePct": 0.9321963724672324,
        "smoothedEle": 458.4103865215823,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243052,
        "lng": 120.846691,
        "ele": 459.5,
        "distanceKm": 40.402241145198076,
        "gradePct": 0.41946356110545335,
        "smoothedEle": 458.1894789248085,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24332,
        "lng": 120.846487,
        "ele": 458,
        "distanceKm": 40.43869495335378,
        "gradePct": -0.11232823975217185,
        "smoothedEle": 457.94825638929933,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243365,
        "lng": 120.846413,
        "ele": 456.75,
        "distanceKm": 40.44780774509744,
        "gradePct": -0.22524077285507038,
        "smoothedEle": 457.8981360347092,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243376,
        "lng": 120.846324,
        "ele": 456.5,
        "distanceKm": 40.45704896660156,
        "gradePct": -0.33879587857682714,
        "smoothedEle": 457.8492068028197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24333,
        "lng": 120.846191,
        "ele": 458,
        "distanceKm": 40.471661828650504,
        "gradePct": -0.44607886072946534,
        "smoothedEle": 457.8188916061963,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243174,
        "lng": 120.845952,
        "ele": 458,
        "distanceKm": 40.50176100475828,
        "gradePct": -0.47845989344764234,
        "smoothedEle": 457.8015225008686,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242924,
        "lng": 120.845451,
        "ele": 457.25,
        "distanceKm": 40.56034035539911,
        "gradePct": -0.17604796545446993,
        "smoothedEle": 458.0780435480835,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242635,
        "lng": 120.845187,
        "ele": 457.5,
        "distanceKm": 40.602423030319585,
        "gradePct": 0.08990949869550363,
        "smoothedEle": 458.36809434999674,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.242575,
        "lng": 120.84512,
        "ele": 457.75,
        "distanceKm": 40.61201794591832,
        "gradePct": 0.14804130648090352,
        "smoothedEle": 458.42086638578974,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.242549,
        "lng": 120.845053,
        "ele": 457.75,
        "distanceKm": 40.61949518385849,
        "gradePct": 0.1933429408966533,
        "smoothedEle": 458.46199119446067,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.242554,
        "lng": 120.844991,
        "ele": 457.75,
        "distanceKm": 40.625900462134624,
        "gradePct": 0.23260468451988128,
        "smoothedEle": 458.4981296046855,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24259,
        "lng": 120.844861,
        "ele": 457.25,
        "distanceKm": 40.63986618430299,
        "gradePct": 0.3322226788297608,
        "smoothedEle": 458.6062599767382,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.242774,
        "lng": 120.84453,
        "ele": 456,
        "distanceKm": 40.67960478006943,
        "gradePct": 0.5537088305695966,
        "smoothedEle": 458.9217256880603,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243093,
        "lng": 120.844226,
        "ele": 456.25,
        "distanceKm": 40.726903207601225,
        "gradePct": 0.7061694328731292,
        "smoothedEle": 459.33254394304095,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243193,
        "lng": 120.843704,
        "ele": 459.75,
        "distanceKm": 40.78176640513583,
        "gradePct": 0.8423305615218504,
        "smoothedEle": 459.91038166456246,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243284,
        "lng": 120.843364,
        "ele": 463,
        "distanceKm": 40.818193009970486,
        "gradePct": 1.064722307963435,
        "smoothedEle": 460.5842738540035,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243246,
        "lng": 120.842989,
        "ele": 463,
        "distanceKm": 40.857018807938935,
        "gradePct": 1.0403307352147941,
        "smoothedEle": 460.82308792492046,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243282,
        "lng": 120.842636,
        "ele": 463.75,
        "distanceKm": 40.89356961005558,
        "gradePct": 0.9003455067029492,
        "smoothedEle": 460.8437105242292,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24347,
        "lng": 120.842317,
        "ele": 462.25,
        "distanceKm": 40.932491586701126,
        "gradePct": 0.6799406199082699,
        "smoothedEle": 460.75128387850765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243793,
        "lng": 120.841995,
        "ele": 461,
        "distanceKm": 40.98136121175818,
        "gradePct": 0.28974950495415486,
        "smoothedEle": 460.48561304099985,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.244158,
        "lng": 120.841623,
        "ele": 466.5,
        "distanceKm": 41.03715615329019,
        "gradePct": -0.23997662226895158,
        "smoothedEle": 460.2209612373605,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244505,
        "lng": 120.841114,
        "ele": 460.25,
        "distanceKm": 41.102218321154155,
        "gradePct": -0.7013689607263032,
        "smoothedEle": 459.4204348134465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244605,
        "lng": 120.840746,
        "ele": 456.25,
        "distanceKm": 41.14169126440671,
        "gradePct": -0.9866080131471764,
        "smoothedEle": 458.72805547585494,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24449,
        "lng": 120.840278,
        "ele": 454,
        "distanceKm": 41.19152615178762,
        "gradePct": -1.273846594104281,
        "smoothedEle": 457.88970455515295,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244445,
        "lng": 120.840021,
        "ele": 452.75,
        "distanceKm": 41.218445630825634,
        "gradePct": -1.38082152492718,
        "smoothedEle": 457.5480676938469,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244402,
        "lng": 120.839906,
        "ele": 453.5,
        "distanceKm": 41.231210695609796,
        "gradePct": -1.3952250249592255,
        "smoothedEle": 457.4587122403578,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244252,
        "lng": 120.839742,
        "ele": 456.25,
        "distanceKm": 41.25494027242634,
        "gradePct": -1.3676491481575201,
        "smoothedEle": 457.26684672630927,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244073,
        "lng": 120.839594,
        "ele": 457,
        "distanceKm": 41.280003871165235,
        "gradePct": -1.4846848315423034,
        "smoothedEle": 456.7243922587673,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24405,
        "lng": 120.839515,
        "ele": 457,
        "distanceKm": 41.28852728513493,
        "gradePct": -1.5387913644800115,
        "smoothedEle": 456.5113069095249,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244055,
        "lng": 120.839432,
        "ele": 457,
        "distanceKm": 41.29708771213341,
        "gradePct": -1.5931328556947677,
        "smoothedEle": 456.29729623456296,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244372,
        "lng": 120.838976,
        "ele": 455,
        "distanceKm": 41.355782174047064,
        "gradePct": -1.4526235001325254,
        "smoothedEle": 455.58576315069075,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244468,
        "lng": 120.838646,
        "ele": 454,
        "distanceKm": 41.39138369232992,
        "gradePct": -1.1690900914396258,
        "smoothedEle": 455.5539209065854,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244431,
        "lng": 120.838139,
        "ele": 455,
        "distanceKm": 41.443725888247315,
        "gradePct": -0.8163587213057211,
        "smoothedEle": 455.7248031967592,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244267,
        "lng": 120.837777,
        "ele": 457.5,
        "distanceKm": 41.48520637110189,
        "gradePct": -0.3287437937075832,
        "smoothedEle": 455.9368421729359,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244268,
        "lng": 120.837687,
        "ele": 457,
        "distanceKm": 41.49446981713485,
        "gradePct": -0.16063726527036465,
        "smoothedEle": 456.0414690789863,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244296,
        "lng": 120.837629,
        "ele": 456.25,
        "distanceKm": 41.5012023303517,
        "gradePct": -0.06257843690076381,
        "smoothedEle": 456.1222592375886,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244346,
        "lng": 120.837568,
        "ele": 455,
        "distanceKm": 41.50958835703245,
        "gradePct": 0.03856820387164762,
        "smoothedEle": 456.22289155775746,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24453,
        "lng": 120.837409,
        "ele": 454,
        "distanceKm": 41.53578749950989,
        "gradePct": 0.3408281536785532,
        "smoothedEle": 456.5098081259156,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.244779,
        "lng": 120.837049,
        "ele": 457.25,
        "distanceKm": 41.58204092438178,
        "gradePct": 0.9289160562919544,
        "smoothedEle": 457.42010925541916,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.245161,
        "lng": 120.836558,
        "ele": 457.75,
        "distanceKm": 41.648055121886465,
        "gradePct": 1.4149092179584184,
        "smoothedEle": 458.5767517094086,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24534,
        "lng": 120.836252,
        "ele": 455.75,
        "distanceKm": 41.68531085048112,
        "gradePct": 1.449220386543154,
        "smoothedEle": 458.83646299868906,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.245411,
        "lng": 120.836105,
        "ele": 455,
        "distanceKm": 41.70237595797682,
        "gradePct": 1.3841903297909057,
        "smoothedEle": 458.9047234286718,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.245404,
        "lng": 120.836003,
        "ele": 456.25,
        "distanceKm": 41.71290250516043,
        "gradePct": 1.3438217945081115,
        "smoothedEle": 458.9468296174063,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.245266,
        "lng": 120.835511,
        "ele": 462.25,
        "distanceKm": 41.76581266494069,
        "gradePct": 0.7169203520884548,
        "smoothedEle": 458.534565980139,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.24492,
        "lng": 120.835271,
        "ele": 466.5,
        "distanceKm": 41.811532786828764,
        "gradePct": 0.047971861437530836,
        "smoothedEle": 458.0327833399861,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.244798,
        "lng": 120.835147,
        "ele": 468,
        "distanceKm": 41.83015802462979,
        "gradePct": -0.22694704729388737,
        "smoothedEle": 457.80928048637384,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244746,
        "lng": 120.83477,
        "ele": 463,
        "distanceKm": 41.869387102974194,
        "gradePct": -0.6364826976430801,
        "smoothedEle": 457.4524924734215,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244725,
        "lng": 120.834636,
        "ele": 460.75,
        "distanceKm": 41.88337459497243,
        "gradePct": -0.724296746335018,
        "smoothedEle": 457.37437178543996,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244702,
        "lng": 120.834561,
        "ele": 459.5,
        "distanceKm": 41.891506202792776,
        "gradePct": -0.7739298405741867,
        "smoothedEle": 457.31338472678726,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244625,
        "lng": 120.834489,
        "ele": 458.5,
        "distanceKm": 41.90282959891539,
        "gradePct": -0.8390393682791619,
        "smoothedEle": 457.22845925586773,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244556,
        "lng": 120.834455,
        "ele": 458,
        "distanceKm": 41.91126236229675,
        "gradePct": -0.887527757722056,
        "smoothedEle": 457.16521353050746,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244241,
        "lng": 120.834363,
        "ele": 457,
        "distanceKm": 41.94754606085404,
        "gradePct": -0.9611386728773686,
        "smoothedEle": 456.7546177574215,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24405,
        "lng": 120.834079,
        "ele": 453.75,
        "distanceKm": 41.98367654739841,
        "gradePct": -1.0389229396402722,
        "smoothedEle": 456.2606623098281,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243973,
        "lng": 120.833685,
        "ele": 448.5,
        "distanceKm": 42.025121065244136,
        "gradePct": -1.4876498228906672,
        "smoothedEle": 454.8944243532203,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243575,
        "lng": 120.833274,
        "ele": 451.25,
        "distanceKm": 42.08634088513486,
        "gradePct": -2.9118427771719424,
        "smoothedEle": 451.52843905487777,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243355,
        "lng": 120.833037,
        "ele": 455,
        "distanceKm": 42.12088665227473,
        "gradePct": -3.787684981226281,
        "smoothedEle": 449.48093259863776,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24332,
        "lng": 120.832809,
        "ele": 454,
        "distanceKm": 42.14467305567896,
        "gradePct": -4.345056026337824,
        "smoothedEle": 448.097017378799,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243442,
        "lng": 120.832455,
        "ele": 450,
        "distanceKm": 42.183550486647874,
        "gradePct": -5.161296242288342,
        "smoothedEle": 445.93979325608245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243789,
        "lng": 120.832208,
        "ele": 448.75,
        "distanceKm": 42.22975677408873,
        "gradePct": -5.491612924476591,
        "smoothedEle": 443.6563181755412,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244239,
        "lng": 120.832098,
        "ele": 440.75,
        "distanceKm": 42.28105930307469,
        "gradePct": -4.955774914633978,
        "smoothedEle": 441.9072809255241,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244592,
        "lng": 120.831991,
        "ele": 437,
        "distanceKm": 42.32182671399786,
        "gradePct": -4.383548386540292,
        "smoothedEle": 440.65914215438215,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24468,
        "lng": 120.831909,
        "ele": 435.75,
        "distanceKm": 42.3347485149045,
        "gradePct": -4.2260388135148865,
        "smoothedEle": 440.22235882577877,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244706,
        "lng": 120.831802,
        "ele": 435.25,
        "distanceKm": 42.346134068753116,
        "gradePct": -4.088669467469655,
        "smoothedEle": 439.8386100047003,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244736,
        "lng": 120.831235,
        "ele": 431,
        "distanceKm": 42.4045846536471,
        "gradePct": -3.644798279700671,
        "smoothedEle": 437.61070621079966,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244738,
        "lng": 120.831079,
        "ele": 429.75,
        "distanceKm": 42.42064162294082,
        "gradePct": -3.533035908108452,
        "smoothedEle": 437.0407093082954,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244695,
        "lng": 120.830977,
        "ele": 430,
        "distanceKm": 42.43217700786638,
        "gradePct": -3.4683158224493487,
        "smoothedEle": 436.6371744378757,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244597,
        "lng": 120.830872,
        "ele": 431.5,
        "distanceKm": 42.44752394930538,
        "gradePct": -3.4982990446698703,
        "smoothedEle": 436.05399066319376,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244097,
        "lng": 120.830536,
        "ele": 434,
        "distanceKm": 42.512998627265,
        "gradePct": -4.0355368165355685,
        "smoothedEle": 432.8583500299173,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24382595203853,
        "lng": 120.83011509179181,
        "ele": 434.3489762278813,
        "distanceKm": 42.565771558644826,
        "gradePct": -4.479655791747824,
        "smoothedEle": 430.1307954197072,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243597,
        "lng": 120.829659,
        "ele": 434.5,
        "distanceKm": 42.61917182849601,
        "gradePct": -4.893285176517894,
        "smoothedEle": 427.3063143231971,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243555,
        "lng": 120.829513,
        "ele": 435.75,
        "distanceKm": 42.63490720857852,
        "gradePct": -5.013568534760665,
        "smoothedEle": 426.506289741293,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243561,
        "lng": 120.829374,
        "ele": 435.75,
        "distanceKm": 42.649228676658815,
        "gradePct": -5.10010625293482,
        "smoothedEle": 425.77057506004945,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243644,
        "lng": 120.829273,
        "ele": 434.5,
        "distanceKm": 42.66312949922074,
        "gradePct": -5.132077168371763,
        "smoothedEle": 425.02817195530355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243856,
        "lng": 120.829193,
        "ele": 431,
        "distanceKm": 42.688099391447054,
        "gradePct": -5.162375736927186,
        "smoothedEle": 423.74886241373974,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244294,
        "lng": 120.829208,
        "ele": 422,
        "distanceKm": 42.73682729805826,
        "gradePct": -5.280578471320023,
        "smoothedEle": 421.06561471598025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24464,
        "lng": 120.829006,
        "ele": 415,
        "distanceKm": 42.78055857121986,
        "gradePct": -5.442533683150239,
        "smoothedEle": 418.4636039628648,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244868,
        "lng": 120.828745,
        "ele": 411.5,
        "distanceKm": 42.8174951832232,
        "gradePct": -5.588988812325459,
        "smoothedEle": 416.21701888857615,
        "gradeBand": "descent"
      },
      {
        "lat": 22.245121,
        "lng": 120.828358,
        "ele": 407.25,
        "distanceKm": 42.86625826062078,
        "gradePct": -5.786291822837914,
        "smoothedEle": 413.2952890870249,
        "gradeBand": "descent"
      },
      {
        "lat": 22.245064,
        "lng": 120.827901,
        "ele": 404.25,
        "distanceKm": 42.913717443553736,
        "gradePct": -6.05382804842253,
        "smoothedEle": 410.2305243459903,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244917,
        "lng": 120.827515,
        "ele": 404.25,
        "distanceKm": 42.956675581808874,
        "gradePct": -6.255857320382799,
        "smoothedEle": 407.37292719205306,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24445,
        "lng": 120.82719,
        "ele": 404.25,
        "distanceKm": 43.01844411442201,
        "gradePct": -5.962540009254525,
        "smoothedEle": 404.2350819055122,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244128,
        "lng": 120.827025,
        "ele": 403.75,
        "distanceKm": 43.05807194491322,
        "gradePct": -5.726206104476919,
        "smoothedEle": 402.3333750960705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243503,
        "lng": 120.826949,
        "ele": 405.25,
        "distanceKm": 43.128007666471035,
        "gradePct": -4.966121250243689,
        "smoothedEle": 399.34768896610325,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243236,
        "lng": 120.82676,
        "ele": 399.25,
        "distanceKm": 43.163501617978035,
        "gradePct": -4.578926208693125,
        "smoothedEle": 397.8683117140432,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243008,
        "lng": 120.826461,
        "ele": 398.25,
        "distanceKm": 43.20337318336477,
        "gradePct": -4.485135596480227,
        "smoothedEle": 396.03041494469267,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242938,
        "lng": 120.826287,
        "ele": 398.25,
        "distanceKm": 43.22289980804491,
        "gradePct": -4.496904079390184,
        "smoothedEle": 395.02744869503414,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242945,
        "lng": 120.826014,
        "ele": 394.5,
        "distanceKm": 43.25100794842839,
        "gradePct": -4.6375969460078945,
        "smoothedEle": 393.3971765527923,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243176,
        "lng": 120.825605,
        "ele": 389.25,
        "distanceKm": 43.3003204684183,
        "gradePct": -5.204658964914626,
        "smoothedEle": 390.12038905742753,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243542,
        "lng": 120.825112,
        "ele": 387.25,
        "distanceKm": 43.36536508986806,
        "gradePct": -6.5699502849270095,
        "smoothedEle": 384.64251361462823,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243787,
        "lng": 120.8248155,
        "ele": 383.62499999999966,
        "distanceKm": 43.40627213584671,
        "gradePct": -7.453525927616917,
        "smoothedEle": 380.9744611903143,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244032,
        "lng": 120.824519,
        "ele": 380,
        "distanceKm": 43.44717914201447,
        "gradePct": -8.062600745043111,
        "smoothedEle": 377.49404583471323,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2442995,
        "lng": 120.824264,
        "ele": 375.24999999999955,
        "distanceKm": 43.48684679982866,
        "gradePct": -8.387948892635416,
        "smoothedEle": 374.2398085011331,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244567,
        "lng": 120.824009,
        "ele": 370.5,
        "distanceKm": 43.526514424487004,
        "gradePct": -8.137668963355138,
        "smoothedEle": 371.639069675212,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244857,
        "lng": 120.823694,
        "ele": 363,
        "distanceKm": 43.57224049365278,
        "gradePct": -7.586859909217998,
        "smoothedEle": 368.8522901861823,
        "gradeBand": "descent"
      },
      {
        "lat": 22.245099,
        "lng": 120.823206,
        "ele": 359.25,
        "distanceKm": 43.62921956818567,
        "gradePct": -6.933105722312819,
        "smoothedEle": 365.1558556849601,
        "gradeBand": "descent"
      },
      {
        "lat": 22.245178,
        "lng": 120.822798,
        "ele": 356.5,
        "distanceKm": 43.67211956978278,
        "gradePct": -6.344518181090786,
        "smoothedEle": 362.7589579627787,
        "gradeBand": "descent"
      },
      {
        "lat": 22.245006,
        "lng": 120.822498,
        "ele": 355.75,
        "distanceKm": 43.70843896632083,
        "gradePct": -6.0753187991603275,
        "smoothedEle": 360.6735180570574,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244836,
        "lng": 120.822196,
        "ele": 361.5,
        "distanceKm": 43.74481748887977,
        "gradePct": -5.864037141212721,
        "smoothedEle": 358.7955134507192,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244825,
        "lng": 120.82206,
        "ele": 362.25,
        "distanceKm": 43.75886786167475,
        "gradePct": -5.780268988241093,
        "smoothedEle": 358.1067484949833,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24486,
        "lng": 120.821939,
        "ele": 361,
        "distanceKm": 43.77191506498429,
        "gradePct": -5.6501551535042775,
        "smoothedEle": 357.5718131592922,
        "gradeBand": "descent"
      },
      {
        "lat": 22.245145,
        "lng": 120.821353,
        "ele": 354.75,
        "distanceKm": 43.84004486933511,
        "gradePct": -3.9546229358635694,
        "smoothedEle": 356.64178140528327,
        "gradeBand": "descent"
      },
      {
        "lat": 22.245141,
        "lng": 120.820806,
        "ele": 357,
        "distanceKm": 43.89634338464633,
        "gradePct": -2.6779255664802877,
        "smoothedEle": 356.0121886152953,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24517,
        "lng": 120.820426,
        "ele": 351.75,
        "distanceKm": 43.93558536191633,
        "gradePct": -2.1198193050033165,
        "smoothedEle": 355.0324741015964,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244905,
        "lng": 120.819821,
        "ele": 350,
        "distanceKm": 44.0044719002084,
        "gradePct": -1.8664940364167555,
        "smoothedEle": 353.394395649783,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244587,
        "lng": 120.819384,
        "ele": 361,
        "distanceKm": 44.0616833775167,
        "gradePct": -1.8525825502406144,
        "smoothedEle": 352.69463037210176,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244377,
        "lng": 120.818712,
        "ele": 353.25,
        "distanceKm": 44.13468095542803,
        "gradePct": -1.1640310597900743,
        "smoothedEle": 352.72699137848184,
        "gradeBand": "descent"
      },
      {
        "lat": 22.244113,
        "lng": 120.81832,
        "ele": 339.75,
        "distanceKm": 44.18457512784275,
        "gradePct": -0.5770180335177517,
        "smoothedEle": 352.7134922858981,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243894,
        "lng": 120.817871,
        "ele": 350,
        "distanceKm": 44.23680987207396,
        "gradePct": -0.011760694484621415,
        "smoothedEle": 352.9753419143895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243831063615126,
        "lng": 120.81750453565539,
        "ele": 354.2270991273847,
        "distanceKm": 44.27517016205584,
        "gradePct": 0.11249980294118539,
        "smoothedEle": 352.9256088876001,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.243809,
        "lng": 120.817132,
        "ele": 355.5,
        "distanceKm": 44.313589977760685,
        "gradePct": -0.4228872377065269,
        "smoothedEle": 351.87186693170827,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243807,
        "lng": 120.816728,
        "ele": 355.5,
        "distanceKm": 44.35517029296729,
        "gradePct": -1.137365374599211,
        "smoothedEle": 350.44671714692794,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243703406002773,
        "lng": 120.81621479839453,
        "ele": 354.90644873571375,
        "distanceKm": 44.409230576280244,
        "gradePct": -1.9098069034648417,
        "smoothedEle": 349.0174747578181,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243562,
        "lng": 120.815709,
        "ele": 354,
        "distanceKm": 44.463610284513095,
        "gradePct": -1.9937026104778681,
        "smoothedEle": 348.95319071965633,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243611998345102,
        "lng": 120.81534642956655,
        "ele": 349.9307384712098,
        "distanceKm": 44.501338007044716,
        "gradePct": -1.9970588494518893,
        "smoothedEle": 348.2137845663667,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243707,
        "lng": 120.81499,
        "ele": 345.25,
        "distanceKm": 44.539512523436194,
        "gradePct": -1.889159256811867,
        "smoothedEle": 347.20506284006893,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243647,
        "lng": 120.814603,
        "ele": 343,
        "distanceKm": 44.57989754277986,
        "gradePct": -2.2305124194100725,
        "smoothedEle": 345.33195482409116,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243508,
        "lng": 120.814288,
        "ele": 340.5,
        "distanceKm": 44.61581328394915,
        "gradePct": -2.737637618174677,
        "smoothedEle": 343.5344178866503,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243473,
        "lng": 120.813939,
        "ele": 339.5,
        "distanceKm": 44.65194270398185,
        "gradePct": -3.6399628791957976,
        "smoothedEle": 341.68705759120877,
        "gradeBand": "descent"
      },
      {
        "lat": 22.243249,
        "lng": 120.813447,
        "ele": 340,
        "distanceKm": 44.70837393721284,
        "gradePct": -4.38109190194009,
        "smoothedEle": 339.2656836560975,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242965,
        "lng": 120.813002,
        "ele": 340.5,
        "distanceKm": 44.76400548219109,
        "gradePct": -4.339358173266073,
        "smoothedEle": 337.3903322455704,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242731,
        "lng": 120.812559,
        "ele": 332,
        "distanceKm": 44.816501457019065,
        "gradePct": -3.4416209646694904,
        "smoothedEle": 336.61598846732124,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24261,
        "lng": 120.812234,
        "ele": 330.25,
        "distanceKm": 44.85255533803115,
        "gradePct": -2.799072224914613,
        "smoothedEle": 336.0626259944611,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242502,
        "lng": 120.811893,
        "ele": 329.5,
        "distanceKm": 44.889649161046,
        "gradePct": -1.926471378206544,
        "smoothedEle": 336.2161910877318,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24233,
        "lng": 120.811424,
        "ele": 334.25,
        "distanceKm": 44.941570065749126,
        "gradePct": -1.0891841558194373,
        "smoothedEle": 335.9682666734411,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242366,
        "lng": 120.810866,
        "ele": 335,
        "distanceKm": 44.999139421717345,
        "gradePct": -1.2110049923484607,
        "smoothedEle": 334.4500778132432,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242536,
        "lng": 120.810498,
        "ele": 338.75,
        "distanceKm": 45.04146958204593,
        "gradePct": -1.8182561552164342,
        "smoothedEle": 332.59626017514944,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242462,
        "lng": 120.810058,
        "ele": 335,
        "distanceKm": 45.087496341481824,
        "gradePct": -2.1933203577486866,
        "smoothedEle": 331.8206378927351,
        "gradeBand": "descent"
      },
      {
        "lat": 22.242275,
        "lng": 120.809672,
        "ele": 344.25,
        "distanceKm": 45.13233659549958,
        "gradePct": -2.0577338565989853,
        "smoothedEle": 331.89688915313513,
        "gradeBand": "descent"
      },
      {
        "lat": 22.241642,
        "lng": 120.809617,
        "ele": 329,
        "distanceKm": 45.202950338371224,
        "gradePct": -2.00868047738453,
        "smoothedEle": 330.26582062053353,
        "gradeBand": "descent"
      },
      {
        "lat": 22.241326,
        "lng": 120.809532,
        "ele": 324.75,
        "distanceKm": 45.239160665797186,
        "gradePct": -1.7466214471608374,
        "smoothedEle": 329.20413453702463,
        "gradeBand": "descent"
      },
      {
        "lat": 22.241042,
        "lng": 120.809149,
        "ele": 314.75,
        "distanceKm": 45.28966934837088,
        "gradePct": -2.000785253227292,
        "smoothedEle": 327.82276260428887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.240991,
        "lng": 120.808812,
        "ele": 327.5,
        "distanceKm": 45.32481465496949,
        "gradePct": -2.625630814927737,
        "smoothedEle": 326.63283639489197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.24093,
        "lng": 120.80864,
        "ele": 332.25,
        "distanceKm": 45.343772249240736,
        "gradePct": -2.8885840812084935,
        "smoothedEle": 325.8555750297707,
        "gradeBand": "descent"
      },
      {
        "lat": 22.240849,
        "lng": 120.808554,
        "ele": 331.75,
        "distanceKm": 45.35640032173888,
        "gradePct": -3.001615070007418,
        "smoothedEle": 325.3378240573468,
        "gradeBand": "descent"
      },
      {
        "lat": 22.240617,
        "lng": 120.808483,
        "ele": 328.25,
        "distanceKm": 45.38321259365952,
        "gradePct": -3.6285430676784127,
        "smoothedEle": 323.4646459408589,
        "gradeBand": "descent"
      },
      {
        "lat": 22.240189,
        "lng": 120.808292,
        "ele": 315.75,
        "distanceKm": 45.43470430002911,
        "gradePct": -4.972507884238085,
        "smoothedEle": 319.3897793246747,
        "gradeBand": "descent"
      },
      {
        "lat": 22.239988,
        "lng": 120.807752,
        "ele": 322,
        "distanceKm": 45.49460824526966,
        "gradePct": -5.91464385538626,
        "smoothedEle": 315.8262570361651,
        "gradeBand": "descent"
      },
      {
        "lat": 22.239918,
        "lng": 120.8076,
        "ele": 324,
        "distanceKm": 45.512081910283726,
        "gradePct": -6.068784916621012,
        "smoothedEle": 314.92636328794066,
        "gradeBand": "descent"
      },
      {
        "lat": 22.239804,
        "lng": 120.807502,
        "ele": 322.25,
        "distanceKm": 45.52828140387106,
        "gradePct": -6.017917750569239,
        "smoothedEle": 314.4548641887888,
        "gradeBand": "descent"
      },
      {
        "lat": 22.239598,
        "lng": 120.807381,
        "ele": 321,
        "distanceKm": 45.55435414739051,
        "gradePct": -5.822372174173384,
        "smoothedEle": 313.7769728572831,
        "gradeBand": "descent"
      },
      {
        "lat": 22.239278,
        "lng": 120.807274,
        "ele": 314.5,
        "distanceKm": 45.59160184065027,
        "gradePct": -5.439786561245634,
        "smoothedEle": 311.92117828257284,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238773,
        "lng": 120.807317,
        "ele": 301.75,
        "distanceKm": 45.64792949160065,
        "gradePct": -4.889642892919499,
        "smoothedEle": 308.8237629696597,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238426,
        "lng": 120.807306,
        "ele": 295.5,
        "distanceKm": 45.68653079099723,
        "gradePct": -4.453042681740606,
        "smoothedEle": 307.4006773926099,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238275,
        "lng": 120.807132,
        "ele": 297.25,
        "distanceKm": 45.7110796074258,
        "gradePct": -4.187570513221201,
        "smoothedEle": 306.60284085868136,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238245,
        "lng": 120.806981,
        "ele": 299,
        "distanceKm": 45.72697513206934,
        "gradePct": -4.297281697592662,
        "smoothedEle": 305.89832086962855,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238255,
        "lng": 120.806286,
        "ele": 301.75,
        "distanceKm": 45.79851608117992,
        "gradePct": -4.799368175640968,
        "smoothedEle": 301.94223302620867,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238282,
        "lng": 120.805827,
        "ele": 303.25,
        "distanceKm": 45.84585357664424,
        "gradePct": -5.061833245604489,
        "smoothedEle": 298.81424948617973,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238396,
        "lng": 120.805245,
        "ele": 301.5,
        "distanceKm": 45.90708197729304,
        "gradePct": -5.550013695039815,
        "smoothedEle": 295.63273644791644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238497,
        "lng": 120.80492,
        "ele": 299.5,
        "distanceKm": 45.94236727312365,
        "gradePct": -5.427661646242947,
        "smoothedEle": 294.19183942413804,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238735,
        "lng": 120.804402,
        "ele": 296,
        "distanceKm": 46.00188879233265,
        "gradePct": -4.991128564970964,
        "smoothedEle": 291.73711271207134,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238796,
        "lng": 120.804208,
        "ele": 295,
        "distanceKm": 46.02297664492717,
        "gradePct": -4.6807085506313415,
        "smoothedEle": 290.9645022600438,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238795,
        "lng": 120.804066,
        "ele": 292.25,
        "distanceKm": 46.03759224500045,
        "gradePct": -4.424362991457621,
        "smoothedEle": 290.5114186577722,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238761,
        "lng": 120.803775,
        "ele": 284.5,
        "distanceKm": 46.067780737261984,
        "gradePct": -4.048499388164486,
        "smoothedEle": 289.5778848819306,
        "gradeBand": "descent"
      },
      {
        "lat": 22.23842009190582,
        "lng": 120.80366802973424,
        "ele": 282.43842919484456,
        "distanceKm": 46.1072545173933,
        "gradePct": -3.6299599088503722,
        "smoothedEle": 288.3657708477985,
        "gradeBand": "descent"
      },
      {
        "lat": 22.23808,
        "lng": 120.803558,
        "ele": 279,
        "distanceKm": 46.146730339141,
        "gradePct": -3.5277778689158543,
        "smoothedEle": 286.956346499863,
        "gradeBand": "descent"
      },
      {
        "lat": 22.237562,
        "lng": 120.80349,
        "ele": 274.5,
        "distanceKm": 46.20475304904088,
        "gradePct": -3.5438220665840054,
        "smoothedEle": 284.54452879614684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.237951,
        "lng": 120.803605,
        "ele": 281.5,
        "distanceKm": 46.249598157098276,
        "gradePct": -3.773264876155284,
        "smoothedEle": 282.5936241083989,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238314,
        "lng": 120.803724,
        "ele": 286.25,
        "distanceKm": 46.291779322346684,
        "gradePct": -4.036854397865823,
        "smoothedEle": 280.7672559918044,
        "gradeBand": "descent"
      },
      {
        "lat": 22.23874,
        "lng": 120.803907,
        "ele": 288.5,
        "distanceKm": 46.34275571472571,
        "gradePct": -3.979321310400735,
        "smoothedEle": 279.13961181604157,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238761,
        "lng": 120.803775,
        "ele": 284.5,
        "distanceKm": 46.356540871258765,
        "gradePct": -3.9116883220822287,
        "smoothedEle": 278.7251775432518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.238624,
        "lng": 120.803734,
        "ele": 284.5,
        "distanceKm": 46.37234826760995,
        "gradePct": -3.820772221852425,
        "smoothedEle": 278.24994704472283,
        "gradeBand": "descent"
      },
      {
        "lat": 22.23808,
        "lng": 120.803558,
        "ele": 279,
        "distanceKm": 46.4354925100263,
        "gradePct": -3.359364765169156,
        "smoothedEle": 276.4885350438438,
        "gradeBand": "descent"
      },
      {
        "lat": 22.237724,
        "lng": 120.803502,
        "ele": 275.75,
        "distanceKm": 46.475495369498304,
        "gradePct": -3.0919362100354832,
        "smoothedEle": 275.28844925968366,
        "gradeBand": "descent"
      },
      {
        "lat": 22.237354077768092,
        "lng": 120.80346225301238,
        "ele": 273.148685667846,
        "distanceKm": 46.5168318343101,
        "gradePct": -3.5200867446217283,
        "smoothedEle": 272.92717153824043,
        "gradeBand": "descent"
      },
      {
        "lat": 22.236985,
        "lng": 120.803413,
        "ele": 270.75,
        "distanceKm": 46.558183374312094,
        "gradePct": -4.453312283651449,
        "smoothedEle": 269.7691730826681,
        "gradeBand": "descent"
      },
      {
        "lat": 22.23658301662118,
        "lng": 120.80331976546468,
        "ele": 267.40652615493144,
        "distanceKm": 46.60390043197897,
        "gradePct": -5.802051480435241,
        "smoothedEle": 265.7656947805025,
        "gradeBand": "descent"
      },
      {
        "lat": 22.236187,
        "lng": 120.803199,
        "ele": 265.25,
        "distanceKm": 46.649656210353136,
        "gradePct": -7.094865173082879,
        "smoothedEle": 261.87389368787285,
        "gradeBand": "descent"
      },
      {
        "lat": 22.235725,
        "lng": 120.803028,
        "ele": 259.5,
        "distanceKm": 46.703959680066056,
        "gradePct": -7.961042536403141,
        "smoothedEle": 257.74038715410774,
        "gradeBand": "descent"
      },
      {
        "lat": 22.235286,
        "lng": 120.802911,
        "ele": 252,
        "distanceKm": 46.754237783257885,
        "gradePct": -8.015908339166998,
        "smoothedEle": 254.03867941322108,
        "gradeBand": "descent"
      },
      {
        "lat": 22.234849,
        "lng": 120.802726,
        "ele": 245.5,
        "distanceKm": 46.80642764738884,
        "gradePct": -7.714838000513287,
        "smoothedEle": 250.1210640777332,
        "gradeBand": "descent"
      },
      {
        "lat": 22.234518,
        "lng": 120.8024,
        "ele": 242.25,
        "distanceKm": 46.85623256927171,
        "gradePct": -7.165119084869145,
        "smoothedEle": 247.0430719881682,
        "gradeBand": "descent"
      },
      {
        "lat": 22.234291,
        "lng": 120.802151,
        "ele": 241.75,
        "distanceKm": 46.89220421140916,
        "gradePct": -6.821366839096131,
        "smoothedEle": 244.9924638215093,
        "gradeBand": "descent"
      },
      {
        "lat": 22.234007,
        "lng": 120.801889,
        "ele": 241.25,
        "distanceKm": 46.93373099464753,
        "gradePct": -6.550718553400079,
        "smoothedEle": 242.44704743669888,
        "gradeBand": "descent"
      },
      {
        "lat": 22.233541,
        "lng": 120.801789,
        "ele": 238.25,
        "distanceKm": 46.98656027187614,
        "gradePct": -5.9844237333503685,
        "smoothedEle": 239.64355475265245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.233201,
        "lng": 120.801633,
        "ele": 234.5,
        "distanceKm": 47.02763504526835,
        "gradePct": -5.407137738951912,
        "smoothedEle": 237.99615100728582,
        "gradeBand": "descent"
      },
      {
        "lat": 22.23283,
        "lng": 120.80126,
        "ele": 238,
        "distanceKm": 47.08398926807712,
        "gradePct": -4.2967986107424805,
        "smoothedEle": 236.86716965444023,
        "gradeBand": "descent"
      },
      {
        "lat": 22.232545,
        "lng": 120.801228,
        "ele": 239.25,
        "distanceKm": 47.115850568788034,
        "gradePct": -3.3559798599304234,
        "smoothedEle": 236.831082287111,
        "gradeBand": "descent"
      },
      {
        "lat": 22.232308,
        "lng": 120.801364,
        "ele": 235.25,
        "distanceKm": 47.14569088581881,
        "gradePct": -2.323246728455937,
        "smoothedEle": 237.16587811141255,
        "gradeBand": "descent"
      },
      {
        "lat": 22.231951,
        "lng": 120.801442,
        "ele": 231.5,
        "distanceKm": 47.18619124773113,
        "gradePct": -1.1910147892255738,
        "smoothedEle": 237.28110818848882,
        "gradeBand": "descent"
      },
      {
        "lat": 22.231637,
        "lng": 120.801192,
        "ele": 232.25,
        "distanceKm": 47.22956431263064,
        "gradePct": -0.7028276106380715,
        "smoothedEle": 236.55184549916117,
        "gradeBand": "descent"
      },
      {
        "lat": 22.231408,
        "lng": 120.800817,
        "ele": 231.75,
        "distanceKm": 47.27580538515743,
        "gradePct": -0.9990215092634145,
        "smoothedEle": 235.03307976577113,
        "gradeBand": "descent"
      },
      {
        "lat": 22.231266,
        "lng": 120.800178,
        "ele": 240.75,
        "distanceKm": 47.34344593469054,
        "gradePct": -2.431139088207595,
        "smoothedEle": 232.27841252620635,
        "gradeBand": "descent"
      },
      {
        "lat": 22.231219,
        "lng": 120.799832,
        "ele": 247.5,
        "distanceKm": 47.37944090143315,
        "gradePct": -3.363111069830803,
        "smoothedEle": 230.53568022232383,
        "gradeBand": "descent"
      },
      {
        "lat": 22.231014,
        "lng": 120.79957,
        "ele": 243.75,
        "distanceKm": 47.41475178002875,
        "gradePct": -3.905940459771019,
        "smoothedEle": 228.989018396453,
        "gradeBand": "descent"
      },
      {
        "lat": 22.230694,
        "lng": 120.7995,
        "ele": 231.5,
        "distanceKm": 47.45105635403621,
        "gradePct": -4.080919313274832,
        "smoothedEle": 227.68411113439163,
        "gradeBand": "descent"
      },
      {
        "lat": 22.230119,
        "lng": 120.799685,
        "ele": 219,
        "distanceKm": 47.51776887998527,
        "gradePct": -3.819986622037251,
        "smoothedEle": 225.684139559456,
        "gradeBand": "descent"
      },
      {
        "lat": 22.229787,
        "lng": 120.799669,
        "ele": 216,
        "distanceKm": 47.55472236273339,
        "gradePct": -3.3093995443433313,
        "smoothedEle": 225.11365389925402,
        "gradeBand": "descent"
      },
      {
        "lat": 22.229676,
        "lng": 120.799567,
        "ele": 215.25,
        "distanceKm": 47.57092631613646,
        "gradePct": -3.0958089262729502,
        "smoothedEle": 224.75630453010046,
        "gradeBand": "descent"
      },
      {
        "lat": 22.22962,
        "lng": 120.799341,
        "ele": 215,
        "distanceKm": 47.59500761307285,
        "gradePct": -2.793183141171173,
        "smoothedEle": 224.2674719806465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.229567,
        "lng": 120.79876,
        "ele": 213.5,
        "distanceKm": 47.65509993897931,
        "gradePct": -2.3772115512773215,
        "smoothedEle": 222.8084655952407,
        "gradeBand": "descent"
      },
      {
        "lat": 22.229687,
        "lng": 120.798312,
        "ele": 213.75,
        "distanceKm": 47.70310455787771,
        "gradePct": -2.2659084640195277,
        "smoothedEle": 221.59194363157542,
        "gradeBand": "descent"
      },
      {
        "lat": 22.229831,
        "lng": 120.797766,
        "ele": 220,
        "distanceKm": 47.76154108771343,
        "gradePct": -2.194254340363142,
        "smoothedEle": 220.57477036805528,
        "gradeBand": "descent"
      },
      {
        "lat": 22.229748,
        "lng": 120.79735,
        "ele": 227,
        "distanceKm": 47.80534346855637,
        "gradePct": -1.9324999183683085,
        "smoothedEle": 220.15152364222328,
        "gradeBand": "descent"
      },
      {
        "lat": 22.229394,
        "lng": 120.796996,
        "ele": 233.75,
        "distanceKm": 47.85898240702683,
        "gradePct": -1.524711896026666,
        "smoothedEle": 219.66065319472807,
        "gradeBand": "descent"
      },
      {
        "lat": 22.229265,
        "lng": 120.796921,
        "ele": 233.75,
        "distanceKm": 47.875271988641316,
        "gradePct": -1.4035014732860502,
        "smoothedEle": 219.49026722562166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.229128,
        "lng": 120.796895,
        "ele": 231.75,
        "distanceKm": 47.89073900072118,
        "gradePct": -1.2465165838719336,
        "smoothedEle": 219.41227555700544,
        "gradeBand": "descent"
      },
      {
        "lat": 22.228812,
        "lng": 120.796921,
        "ele": 225.5,
        "distanceKm": 47.92597841330436,
        "gradePct": -0.9612364094259936,
        "smoothedEle": 219.27131790667275,
        "gradeBand": "descent"
      },
      {
        "lat": 22.228295,
        "lng": 120.796936,
        "ele": 216.75,
        "distanceKm": 47.98348699948722,
        "gradePct": -0.8327263010830871,
        "smoothedEle": 218.6972622765549,
        "gradeBand": "descent"
      },
      {
        "lat": 22.227772114577345,
        "lng": 120.79685334763204,
        "ele": 212.73920559547545,
        "distanceKm": 48.04224841409775,
        "gradePct": -1.2378707159036788,
        "smoothedEle": 217.3380509344202,
        "gradeBand": "descent"
      },
      {
        "lat": 22.22725,
        "lng": 120.796765,
        "ele": 209.75,
        "distanceKm": 48.1010128835521,
        "gradePct": -2.1574887776017397,
        "smoothedEle": 215.05620247047824,
        "gradeBand": "descent"
      },
      {
        "lat": 22.226732,
        "lng": 120.796803,
        "ele": 211.5,
        "distanceKm": 48.15874459104295,
        "gradePct": -3.557579235791869,
        "smoothedEle": 211.8290846440574,
        "gradeBand": "descent"
      },
      {
        "lat": 22.226365,
        "lng": 120.796945,
        "ele": 209,
        "distanceKm": 48.202091818301575,
        "gradePct": -4.174197582022001,
        "smoothedEle": 209.91851871265627,
        "gradeBand": "descent"
      },
      {
        "lat": 22.226145,
        "lng": 120.796976,
        "ele": 208,
        "distanceKm": 48.22676196884444,
        "gradePct": -4.271390237425248,
        "smoothedEle": 209.1534877042898,
        "gradeBand": "descent"
      },
      {
        "lat": 22.226068,
        "lng": 120.796961,
        "ele": 208.25,
        "distanceKm": 48.235462091362685,
        "gradePct": -4.3012707296855375,
        "smoothedEle": 208.89248402874256,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225933,
        "lng": 120.796885,
        "ele": 209.75,
        "distanceKm": 48.2523895337044,
        "gradePct": -4.283199917331852,
        "smoothedEle": 208.37786726384405,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225657,
        "lng": 120.79664050000001,
        "ele": 209.75,
        "distanceKm": 48.292079007208535,
        "gradePct": -4.080103543302456,
        "smoothedEle": 207.24290146846667,
        "gradeBand": "descent"
      },
      {
        "lat": 22.225381,
        "lng": 120.796396,
        "ele": 209.75,
        "distanceKm": 48.33176851212591,
        "gradePct": -3.739253942673759,
        "smoothedEle": 205.8585000290186,
        "gradeBand": "descent"
      },
      {
        "lat": 22.224978,
        "lng": 120.796148,
        "ele": 204.25,
        "distanceKm": 48.38334116245573,
        "gradePct": -3.551769413481927,
        "smoothedEle": 203.64143099954933,
        "gradeBand": "descent"
      },
      {
        "lat": 22.224529134206,
        "lng": 120.79616218781885,
        "ele": 203.46207448285148,
        "distanceKm": 48.433274191589405,
        "gradePct": -4.182737476878185,
        "smoothedEle": 200.59264606818454,
        "gradeBand": "descent"
      },
      {
        "lat": 22.22408,
        "lng": 120.796197,
        "ele": 201.75,
        "distanceKm": 48.483344096532406,
        "gradePct": -4.968078142627548,
        "smoothedEle": 197.55652992379396,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223767,
        "lng": 120.796239,
        "ele": 199.5,
        "distanceKm": 48.51841563992221,
        "gradePct": -5.527915080795218,
        "smoothedEle": 195.26842865021092,
        "gradeBand": "descent"
      },
      {
        "lat": 22.223317,
        "lng": 120.796363,
        "ele": 194.25,
        "distanceKm": 48.570055722674084,
        "gradePct": -6.296781129538896,
        "smoothedEle": 191.61899969640245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.222862,
        "lng": 120.796319,
        "ele": 186.25,
        "distanceKm": 48.62085180458847,
        "gradePct": -6.689121877772326,
        "smoothedEle": 187.97288195942124,
        "gradeBand": "descent"
      },
      {
        "lat": 22.222502,
        "lng": 120.796211,
        "ele": 179.75,
        "distanceKm": 48.662397056328835,
        "gradePct": -6.797815999952507,
        "smoothedEle": 185.23107502951072,
        "gradeBand": "descent"
      },
      {
        "lat": 22.222045,
        "lng": 120.795743,
        "ele": 177.75,
        "distanceKm": 48.732418597771314,
        "gradePct": -6.844626051560043,
        "smoothedEle": 180.5895809250423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.221802,
        "lng": 120.795476,
        "ele": 175.5,
        "distanceKm": 48.77096039556689,
        "gradePct": -6.900557125160477,
        "smoothedEle": 177.75294847149007,
        "gradeBand": "descent"
      },
      {
        "lat": 22.221412,
        "lng": 120.795174,
        "ele": 173,
        "distanceKm": 48.824317735659235,
        "gradePct": -7.015869525891219,
        "smoothedEle": 173.7124064472652,
        "gradeBand": "descent"
      },
      {
        "lat": 22.221050666666667,
        "lng": 120.794957,
        "ele": 171.75000000000006,
        "distanceKm": 48.87028798827924,
        "gradePct": -7.1049000663364685,
        "smoothedEle": 170.49821137421253,
        "gradeBand": "descent"
      },
      {
        "lat": 22.220689333333333,
        "lng": 120.79474,
        "ele": 170.49999999999994,
        "distanceKm": 48.916258268861526,
        "gradePct": -6.847802200707139,
        "smoothedEle": 167.96519075021956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.220328,
        "lng": 120.794523,
        "ele": 169.25,
        "distanceKm": 48.962228577407146,
        "gradePct": -6.2480200775176336,
        "smoothedEle": 165.89956019537902,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2199175,
        "lng": 120.7942955,
        "ele": 162.87500000000045,
        "distanceKm": 49.01353096355124,
        "gradePct": -5.310444683708606,
        "smoothedEle": 163.90835701101142,
        "gradeBand": "descent"
      },
      {
        "lat": 22.219507,
        "lng": 120.794068,
        "ele": 156.5,
        "distanceKm": 49.064833380982634,
        "gradePct": -4.291482006232623,
        "smoothedEle": 162.29662816561424,
        "gradeBand": "descent"
      },
      {
        "lat": 22.219156073894393,
        "lng": 120.79385642858328,
        "ele": 154.37398146416763,
        "distanceKm": 49.10952088008415,
        "gradePct": -3.584049992428823,
        "smoothedEle": 161.16832941147834,
        "gradeBand": "descent"
      },
      {
        "lat": 22.218798,
        "lng": 120.793659,
        "ele": 155.5,
        "distanceKm": 49.15422369147466,
        "gradePct": -3.012206756883799,
        "smoothedEle": 160.23483834984862,
        "gradeBand": "descent"
      },
      {
        "lat": 22.218365695223138,
        "lng": 120.79351519229577,
        "ele": 157.09250423168882,
        "distanceKm": 49.204521607690296,
        "gradePct": -2.417713155682884,
        "smoothedEle": 159.42261147334355,
        "gradeBand": "descent"
      },
      {
        "lat": 22.217926912685947,
        "lng": 120.79339382691315,
        "ele": 158.20208685974058,
        "distanceKm": 49.25488617440598,
        "gradePct": -1.7918140750096143,
        "smoothedEle": 159.02550380339713,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21748813014876,
        "lng": 120.7932724615305,
        "ele": 159.3116694877925,
        "distanceKm": 49.30525075081556,
        "gradePct": -0.9596502207149632,
        "smoothedEle": 159.35684394360072,
        "gradeBand": "descent"
      },
      {
        "lat": 22.217049347611567,
        "lng": 120.79315109614788,
        "ele": 160.42125211584442,
        "distanceKm": 49.35561533691891,
        "gradePct": -0.06040996731635942,
        "smoothedEle": 160.0915456784223,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21661056507438,
        "lng": 120.79302973076526,
        "ele": 161.53083474389632,
        "distanceKm": 49.405979932715475,
        "gradePct": 0.7159644532632723,
        "smoothedEle": 160.84304197751035,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.216171782537188,
        "lng": 120.79290836538263,
        "ele": 162.64041737194808,
        "distanceKm": 49.45634453820587,
        "gradePct": 0.958092042762275,
        "smoothedEle": 160.95128222089804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.215733,
        "lng": 120.792787,
        "ele": 163.75,
        "distanceKm": 49.506709153389174,
        "gradePct": 0.6497956328813267,
        "smoothedEle": 160.6777098982629,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.215351,
        "lng": 120.792616,
        "ele": 164.5,
        "distanceKm": 49.552688674919445,
        "gradePct": 0.21106855901706165,
        "smoothedEle": 160.47098963019408,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.215086,
        "lng": 120.792362,
        "ele": 162.25,
        "distanceKm": 49.592083518954716,
        "gradePct": -0.2866342037905087,
        "smoothedEle": 160.06242347912365,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214842,
        "lng": 120.792007,
        "ele": 162.5,
        "distanceKm": 49.63759833911447,
        "gradePct": -0.7998028630314054,
        "smoothedEle": 159.31138841687866,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214772,
        "lng": 120.791677,
        "ele": 158.25,
        "distanceKm": 49.67244932202738,
        "gradePct": -1.1971465508359216,
        "smoothedEle": 158.46951057700852,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214798,
        "lng": 120.791234,
        "ele": 154.5,
        "distanceKm": 49.718143916178825,
        "gradePct": -1.762226321214431,
        "smoothedEle": 157.1018474727282,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214652,
        "lng": 120.79074,
        "ele": 156.5,
        "distanceKm": 49.771525503967425,
        "gradePct": -2.496854311796419,
        "smoothedEle": 155.28192318932912,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214334,
        "lng": 120.790159,
        "ele": 154.25,
        "distanceKm": 49.8410054185471,
        "gradePct": -3.097928978002612,
        "smoothedEle": 153.0332273396049,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214204,
        "lng": 120.789848,
        "ele": 151.25,
        "distanceKm": 49.87613248797345,
        "gradePct": -3.1023309068221168,
        "smoothedEle": 152.15460968005647,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214172528811226,
        "lng": 120.7893899234505,
        "ele": 148.48733414925448,
        "distanceKm": 49.92341740431089,
        "gradePct": -2.796833051331478,
        "smoothedEle": 151.3283937408968,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214198,
        "lng": 120.788928,
        "ele": 146.25,
        "distanceKm": 49.97105293226636,
        "gradePct": -2.150784720915096,
        "smoothedEle": 150.99646500889156,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214251,
        "lng": 120.788314,
        "ele": 146.75,
        "distanceKm": 50.034533362134006,
        "gradePct": -1.4130759895085645,
        "smoothedEle": 150.41654145569382,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214279,
        "lng": 120.78789400000001,
        "ele": 148.49999999999986,
        "distanceKm": 50.077880871915156,
        "gradePct": -1.0440330353476663,
        "smoothedEle": 150.03599385285742,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214307,
        "lng": 120.787474,
        "ele": 150.25,
        "distanceKm": 50.12122837309138,
        "gradePct": -0.838536016508217,
        "smoothedEle": 149.6895709557372,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214394,
        "lng": 120.786995,
        "ele": 153.5,
        "distanceKm": 50.17147747112489,
        "gradePct": -0.7712414581582326,
        "smoothedEle": 149.45010373063235,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214553,
        "lng": 120.7865785,
        "ele": 152.125,
        "distanceKm": 50.21785489147863,
        "gradePct": -0.6397764140710132,
        "smoothedEle": 149.28935429338827,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214712,
        "lng": 120.786162,
        "ele": 150.75,
        "distanceKm": 50.26423226691094,
        "gradePct": -0.5445755952633597,
        "smoothedEle": 149.06666370724514,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21474,
        "lng": 120.78573,
        "ele": 151,
        "distanceKm": 50.308811830174236,
        "gradePct": -0.5687812026460567,
        "smoothedEle": 148.65123860184036,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2146588,
        "lng": 120.7852848,
        "ele": 149.19999999999993,
        "distanceKm": 50.35552232797441,
        "gradePct": -0.9163769153751827,
        "smoothedEle": 147.6933857692989,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2145776,
        "lng": 120.7848396,
        "ele": 147.3999999999999,
        "distanceKm": 50.40223285179932,
        "gradePct": -1.3378634487197683,
        "smoothedEle": 146.66777517018667,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2144964,
        "lng": 120.7843944,
        "ele": 145.6000000000001,
        "distanceKm": 50.44894340164878,
        "gradePct": -1.7038297921462842,
        "smoothedEle": 145.73241678020094,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2144152,
        "lng": 120.7839492,
        "ele": 143.80000000000007,
        "distanceKm": 50.49565397752287,
        "gradePct": -1.8224496185396954,
        "smoothedEle": 145.12895389762008,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214334,
        "lng": 120.783504,
        "ele": 142,
        "distanceKm": 50.54236457942142,
        "gradePct": -1.6579758364669364,
        "smoothedEle": 144.6472489627206,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21417,
        "lng": 120.783065,
        "ele": 137.75,
        "distanceKm": 50.591096690176784,
        "gradePct": -1.3727680561168345,
        "smoothedEle": 144.16675280899364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213886646555814,
        "lng": 120.78272528925406,
        "ele": 140.14851515398095,
        "distanceKm": 50.638167470832585,
        "gradePct": -0.9348252888386677,
        "smoothedEle": 144.0785495176702,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213608,
        "lng": 120.782381,
        "ele": 144,
        "distanceKm": 50.685243400401546,
        "gradePct": -0.7401646205948716,
        "smoothedEle": 143.78312089762204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213527,
        "lng": 120.782224,
        "ele": 145.5,
        "distanceKm": 50.70374558472722,
        "gradePct": -0.6885507612805002,
        "smoothedEle": 143.66840735480287,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213492499999997,
        "lng": 120.7816265,
        "ele": 145.625,
        "distanceKm": 50.765373151530184,
        "gradePct": -0.8404833432298938,
        "smoothedEle": 142.73941891594978,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213458,
        "lng": 120.781029,
        "ele": 145.75,
        "distanceKm": 50.82700073342823,
        "gradePct": -0.9808034347316552,
        "smoothedEle": 142.13786737005526,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2135,
        "lng": 120.780721,
        "ele": 148,
        "distanceKm": 50.85904908654937,
        "gradePct": -0.9740052602038252,
        "smoothedEle": 141.99949481030606,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213615,
        "lng": 120.780556,
        "ele": 148,
        "distanceKm": 50.880309967098235,
        "gradePct": -1.007513045529208,
        "smoothedEle": 141.79905494704818,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213882,
        "lng": 120.780302,
        "ele": 142.5,
        "distanceKm": 50.9198716117467,
        "gradePct": -1.073435808361565,
        "smoothedEle": 141.27844821340716,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214243,
        "lng": 120.779698,
        "ele": 136.5,
        "distanceKm": 50.99388042670127,
        "gradePct": -1.4452319724091687,
        "smoothedEle": 139.57069327530868,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214386914963516,
        "lng": 120.77925339381366,
        "ele": 136.7143625905811,
        "distanceKm": 51.042365926219965,
        "gradePct": -1.894563410426487,
        "smoothedEle": 138.28239950978607,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214505452787364,
        "lng": 120.77879790444972,
        "ele": 135.59119079026988,
        "distanceKm": 51.09107215252125,
        "gradePct": -2.4031756458102875,
        "smoothedEle": 136.85107996284097,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214623990611212,
        "lng": 120.77834241508577,
        "ele": 134.46801898995847,
        "distanceKm": 51.139778340684245,
        "gradePct": -2.86616535904402,
        "smoothedEle": 135.0867693127364,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214746,
        "lng": 120.777888,
        "ele": 133.75,
        "distanceKm": 51.18848414874251,
        "gradePct": -3.045346617683577,
        "smoothedEle": 133.60451926561856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21490480254258,
        "lng": 120.7774681192326,
        "ele": 133.12464657456786,
        "distanceKm": 51.235175089723796,
        "gradePct": -2.9981206580003033,
        "smoothedEle": 132.4772237684184,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215072,
        "lng": 120.777052,
        "ele": 132,
        "distanceKm": 51.281871494064355,
        "gradePct": -2.7759053927333954,
        "smoothedEle": 131.56964697697333,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215177,
        "lng": 120.776515,
        "ele": 130.5,
        "distanceKm": 51.33837042582839,
        "gradePct": -1.9548779698886996,
        "smoothedEle": 131.22801303580104,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215194,
        "lng": 120.776048,
        "ele": 129.25,
        "distanceKm": 51.38648107713718,
        "gradePct": -1.2981633849793284,
        "smoothedEle": 131.06915140589578,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215179,
        "lng": 120.775645,
        "ele": 128,
        "distanceKm": 51.427999862385136,
        "gradePct": -0.9828605867224385,
        "smoothedEle": 130.68473965767276,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21523,
        "lng": 120.775269,
        "ele": 126.5,
        "distanceKm": 51.46711894723537,
        "gradePct": -0.6511605605575334,
        "smoothedEle": 130.5540517677518,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21538529674592,
        "lng": 120.77493676629817,
        "ele": 125.8346144483104,
        "distanceKm": 51.50543166838659,
        "gradePct": -0.2785130503088982,
        "smoothedEle": 130.8701587986294,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215579,
        "lng": 120.774628,
        "ele": 132.25,
        "distanceKm": 51.543826822799105,
        "gradePct": 0.07634756430019143,
        "smoothedEle": 131.36269111219787,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2159,
        "lng": 120.774235,
        "ele": 135.5,
        "distanceKm": 51.597777708807214,
        "gradePct": 0.5887411553863361,
        "smoothedEle": 132.14204111109547,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.216175,
        "lng": 120.774017,
        "ele": 130.5,
        "distanceKm": 51.63570729277601,
        "gradePct": 0.952783829176284,
        "smoothedEle": 132.56455855890712,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.216246,
        "lng": 120.773928,
        "ele": 129.25,
        "distanceKm": 51.6478013108587,
        "gradePct": 1.0334555898223665,
        "smoothedEle": 132.68549873973404,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.21629,
        "lng": 120.773814,
        "ele": 129,
        "distanceKm": 51.66051556317859,
        "gradePct": 1.1223584185893412,
        "smoothedEle": 132.82082899647654,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.216281,
        "lng": 120.773654,
        "ele": 130.5,
        "distanceKm": 51.67701638773707,
        "gradePct": 1.2307551702857717,
        "smoothedEle": 133.09722298847672,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.215992,
        "lng": 120.773129,
        "ele": 137.25,
        "distanceKm": 51.73989250483195,
        "gradePct": 1.5542078558647383,
        "smoothedEle": 134.42063746756384,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.215603,
        "lng": 120.772657,
        "ele": 139.5,
        "distanceKm": 51.80494462529417,
        "gradePct": 1.5355054733575098,
        "smoothedEle": 135.29288808409643,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.215512,
        "lng": 120.772264,
        "ele": 136.25,
        "distanceKm": 51.84664662684132,
        "gradePct": 1.2254739188940786,
        "smoothedEle": 135.12489973734836,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.215418,
        "lng": 120.771867,
        "ele": 134.25,
        "distanceKm": 51.88882964817941,
        "gradePct": 0.4822963442892887,
        "smoothedEle": 134.3104608007837,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.215204,
        "lng": 120.771407,
        "ele": 137.25,
        "distanceKm": 51.94182523228833,
        "gradePct": -0.5819947068153711,
        "smoothedEle": 133.28256300802585,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21508,
        "lng": 120.771049,
        "ele": 137.75,
        "distanceKm": 51.98117307438357,
        "gradePct": -1.2588106044083354,
        "smoothedEle": 132.45652630555838,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215063076184197,
        "lng": 120.77060501583924,
        "ele": 135.19519952643523,
        "distanceKm": 52.02691606159885,
        "gradePct": -1.845369561619679,
        "smoothedEle": 131.51364133236035,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215103,
        "lng": 120.770158,
        "ele": 132.25,
        "distanceKm": 52.073146045915344,
        "gradePct": -1.9037876006658947,
        "smoothedEle": 130.80569312589893,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215232,
        "lng": 120.769702,
        "ele": 123,
        "distanceKm": 52.122229923768344,
        "gradePct": -1.6322104278484115,
        "smoothedEle": 130.39821107155643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.215095,
        "lng": 120.769296,
        "ele": 119.75,
        "distanceKm": 52.166713776363764,
        "gradePct": -1.4712853868081983,
        "smoothedEle": 129.8175023141865,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214629,
        "lng": 120.768888,
        "ele": 125,
        "distanceKm": 52.23341458537147,
        "gradePct": -1.755271977452093,
        "smoothedEle": 127.90358148279397,
        "gradeBand": "descent"
      },
      {
        "lat": 22.214317,
        "lng": 120.76875,
        "ele": 129,
        "distanceKm": 52.270903300829396,
        "gradePct": -1.9227695569024386,
        "smoothedEle": 126.99449854810507,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213965,
        "lng": 120.768514,
        "ele": 133.5,
        "distanceKm": 52.316970687849064,
        "gradePct": -2.0414173339317325,
        "smoothedEle": 126.35903726241884,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213811,
        "lng": 120.768148,
        "ele": 131.5,
        "distanceKm": 52.35835635959146,
        "gradePct": -1.8692891201989088,
        "smoothedEle": 126.18802490084171,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213751,
        "lng": 120.767689,
        "ele": 126.75,
        "distanceKm": 52.40607549812223,
        "gradePct": -1.058761316556633,
        "smoothedEle": 126.57052982351165,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213728,
        "lng": 120.767331,
        "ele": 122,
        "distanceKm": 52.44301743077765,
        "gradePct": -0.33892767635778626,
        "smoothedEle": 126.99286184607779,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213513,
        "lng": 120.76694,
        "ele": 124,
        "distanceKm": 52.48983237068561,
        "gradePct": -0.11781986368060703,
        "smoothedEle": 126.49774804703016,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213225,
        "lng": 120.766564,
        "ele": 127,
        "distanceKm": 52.54006911659762,
        "gradePct": -0.554351122548936,
        "smoothedEle": 125.15488853348474,
        "gradeBand": "descent"
      },
      {
        "lat": 22.213028,
        "lng": 120.766263,
        "ele": 128.25,
        "distanceKm": 52.57801596607821,
        "gradePct": -1.3610624374992233,
        "smoothedEle": 123.62348661458867,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21287,
        "lng": 120.76587,
        "ele": 126,
        "distanceKm": 52.622122566213186,
        "gradePct": -2.4878670981904136,
        "smoothedEle": 121.77825085635018,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212719,
        "lng": 120.765515,
        "ele": 126.75,
        "distanceKm": 52.66233992453766,
        "gradePct": -3.2468212590047654,
        "smoothedEle": 120.294865049041,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212648,
        "lng": 120.765057,
        "ele": 119.75,
        "distanceKm": 52.71014421778768,
        "gradePct": -3.348884846031931,
        "smoothedEle": 119.2570300285268,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212471,
        "lng": 120.764695,
        "ele": 115.25,
        "distanceKm": 52.752287677814955,
        "gradePct": -3.0551934753573198,
        "smoothedEle": 118.55140325311973,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212167666666666,
        "lng": 120.76441633333333,
        "ele": 113.33333333333333,
        "distanceKm": 52.79656625262358,
        "gradePct": -2.410883687740083,
        "smoothedEle": 118.02565280110765,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211864333333335,
        "lng": 120.76413766666667,
        "ele": 111.41666666666667,
        "distanceKm": 52.84084486760931,
        "gradePct": -1.799054397628953,
        "smoothedEle": 117.48958461703768,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211561,
        "lng": 120.763859,
        "ele": 109.5,
        "distanceKm": 52.885123522774194,
        "gradePct": -1.3919184743733781,
        "smoothedEle": 117.01639436479415,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211177,
        "lng": 120.763464,
        "ele": 112.5,
        "distanceKm": 52.944086766166876,
        "gradePct": -1.4355919094237644,
        "smoothedEle": 115.81753096108768,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210925,
        "lng": 120.763231,
        "ele": 115.5,
        "distanceKm": 52.98097189831487,
        "gradePct": -1.5562722899668122,
        "smoothedEle": 115.09827088420181,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210609,
        "lng": 120.762861,
        "ele": 120.75,
        "distanceKm": 53.032793297670146,
        "gradePct": -1.577498645546888,
        "smoothedEle": 114.43206531791795,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210544,
        "lng": 120.762493,
        "ele": 122,
        "distanceKm": 53.071360182404305,
        "gradePct": -1.4728891609390904,
        "smoothedEle": 114.21769997030918,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210715,
        "lng": 120.762043,
        "ele": 121,
        "distanceKm": 53.121435645633326,
        "gradePct": -0.7563049249132198,
        "smoothedEle": 114.76547242930474,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210836,
        "lng": 120.761682,
        "ele": 115.75,
        "distanceKm": 53.16095916155805,
        "gradePct": 0.12263965925023793,
        "smoothedEle": 115.73379856946039,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.21089,
        "lng": 120.761187,
        "ele": 110,
        "distanceKm": 53.21226913396634,
        "gradePct": 0.790429934586942,
        "smoothedEle": 116.27677973893556,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210797,
        "lng": 120.76048,
        "ele": 107.75,
        "distanceKm": 53.28578174193522,
        "gradePct": 0.3671158170173944,
        "smoothedEle": 115.10968817048231,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210586,
        "lng": 120.760112,
        "ele": 115.5,
        "distanceKm": 53.330342216875216,
        "gradePct": -0.5760258729126295,
        "smoothedEle": 113.8316316789057,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210156,
        "lng": 120.759682,
        "ele": 121.75,
        "distanceKm": 53.39550097584223,
        "gradePct": -2.0393177734563817,
        "smoothedEle": 112.0206973199854,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20994,
        "lng": 120.759391,
        "ele": 117.25,
        "distanceKm": 53.433897465967526,
        "gradePct": -2.2746531305679514,
        "smoothedEle": 111.38410048892432,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209748,
        "lng": 120.758818,
        "ele": 110,
        "distanceKm": 53.496629634200424,
        "gradePct": -1.9748559904226612,
        "smoothedEle": 110.84884352895196,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209626,
        "lng": 120.75847,
        "ele": 107.5,
        "distanceKm": 53.53493701256997,
        "gradePct": -1.5791464543434572,
        "smoothedEle": 110.54563723741246,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209451,
        "lng": 120.758156,
        "ele": 107,
        "distanceKm": 53.572666994037164,
        "gradePct": -1.3665837594317074,
        "smoothedEle": 109.92214658721969,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209158,
        "lng": 120.757744,
        "ele": 107,
        "distanceKm": 53.62614945058453,
        "gradePct": -1.587832247366626,
        "smoothedEle": 108.33689466381774,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208994,
        "lng": 120.757422,
        "ele": 107.5,
        "distanceKm": 53.66398294539074,
        "gradePct": -2.1519218947126837,
        "smoothedEle": 106.82355487156916,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20898,
        "lng": 120.757075,
        "ele": 106.75,
        "distanceKm": 53.69973899455264,
        "gradePct": -2.5445148540779523,
        "smoothedEle": 105.73520295830471,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209067,
        "lng": 120.7566135,
        "ele": 104.62499999999984,
        "distanceKm": 53.74822332052123,
        "gradePct": -2.7939605100805265,
        "smoothedEle": 104.73815902530328,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209154,
        "lng": 120.756152,
        "ele": 102.5,
        "distanceKm": 53.79670761762895,
        "gradePct": -2.5978784938894806,
        "smoothedEle": 104.01381117187906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20918732460623,
        "lng": 120.75570822320613,
        "ele": 102.34415908291106,
        "distanceKm": 53.8425424868944,
        "gradePct": -2.223592005191723,
        "smoothedEle": 103.23398920103938,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2092,
        "lng": 120.755263,
        "ele": 101.75,
        "distanceKm": 53.88839788326853,
        "gradePct": -1.8989643318542464,
        "smoothedEle": 102.28247798610916,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209285,
        "lng": 120.754593,
        "ele": 102.25,
        "distanceKm": 53.95801592507358,
        "gradePct": -1.9784426169287317,
        "smoothedEle": 100.63497380340696,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209259,
        "lng": 120.754011,
        "ele": 101.25,
        "distanceKm": 54.01799989068492,
        "gradePct": -2.1385201626918313,
        "smoothedEle": 99.37450991711428,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209155,
        "lng": 120.7536,
        "ele": 99,
        "distanceKm": 54.06186240001391,
        "gradePct": -2.1040396856526424,
        "smoothedEle": 98.62501668610709,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209051,
        "lng": 120.753189,
        "ele": 96.75,
        "distanceKm": 54.10572493958922,
        "gradePct": -2.0019681362882054,
        "smoothedEle": 97.8684986123178,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208827,
        "lng": 120.7527,
        "ele": 95.5,
        "distanceKm": 54.161890355539384,
        "gradePct": -1.8286616376689817,
        "smoothedEle": 96.89623577610448,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208603494722993,
        "lng": 120.7522411795384,
        "ele": 94.919418774871,
        "distanceKm": 54.215263339793346,
        "gradePct": -1.7692741933918474,
        "smoothedEle": 95.89346562391087,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208374621042246,
        "lng": 120.7517853846538,
        "ele": 94.37706408115325,
        "distanceKm": 54.26864295412569,
        "gradePct": -1.8103205570848813,
        "smoothedEle": 94.88742813146683,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2081457473615,
        "lng": 120.7513295897692,
        "ele": 93.83470938743551,
        "distanceKm": 54.32202263572414,
        "gradePct": -1.7801796823503326,
        "smoothedEle": 94.02601466971073,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207916873680748,
        "lng": 120.7508737948846,
        "ele": 93.29235469371775,
        "distanceKm": 54.37540238458825,
        "gradePct": -1.6260297666476389,
        "smoothedEle": 93.3903126146991,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207688,
        "lng": 120.750418,
        "ele": 92.75,
        "distanceKm": 54.42878220071701,
        "gradePct": -1.389714355464237,
        "smoothedEle": 92.85924899226674,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207318,
        "lng": 120.749826,
        "ele": 92.25,
        "distanceKm": 54.50231388228959,
        "gradePct": -1.0995946740548619,
        "smoothedEle": 92.14487490553566,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207007166666667,
        "lng": 120.74948266666667,
        "ele": 91.75000000000001,
        "distanceKm": 54.55174958981817,
        "gradePct": -1.002591318862187,
        "smoothedEle": 91.66681227338987,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206696333333333,
        "lng": 120.74913933333333,
        "ele": 91.25000000000003,
        "distanceKm": 54.60118535331409,
        "gradePct": -0.9664606345676893,
        "smoothedEle": 91.20088246708472,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2063855,
        "lng": 120.748796,
        "ele": 90.75000000000004,
        "distanceKm": 54.650621172776646,
        "gradePct": -0.9476534330413465,
        "smoothedEle": 90.75177241393766,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206074666666666,
        "lng": 120.74845266666667,
        "ele": 90.24999999999997,
        "distanceKm": 54.700057048205174,
        "gradePct": -0.9395669652014299,
        "smoothedEle": 90.28766654182024,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205763833333332,
        "lng": 120.74810933333333,
        "ele": 89.74999999999999,
        "distanceKm": 54.74949297959898,
        "gradePct": -0.9371330275175618,
        "smoothedEle": 89.81436852201023,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205453,
        "lng": 120.747766,
        "ele": 89.25,
        "distanceKm": 54.79892896695739,
        "gradePct": -0.9378061835555096,
        "smoothedEle": 89.34653643802089,
        "gradeBand": "descent"
      },
      {
        "lat": 22.204998,
        "lng": 120.747243,
        "ele": 88.75,
        "distanceKm": 54.87281193058549,
        "gradePct": -0.9608022874509108,
        "smoothedEle": 88.62184016370801,
        "gradeBand": "descent"
      },
      {
        "lat": 22.204707,
        "lng": 120.746694,
        "ele": 88,
        "distanceKm": 54.93793799095864,
        "gradePct": -0.8431335669658631,
        "smoothedEle": 88.23872847829831,
        "gradeBand": "descent"
      },
      {
        "lat": 22.204581,
        "lng": 120.746249,
        "ele": 87.5,
        "distanceKm": 54.9858447489103,
        "gradePct": -0.4926285837627305,
        "smoothedEle": 88.48510034343087,
        "gradeBand": "descent"
      },
      {
        "lat": 22.204468,
        "lng": 120.745821,
        "ele": 87.25,
        "distanceKm": 55.031663445052544,
        "gradePct": 0.019916476587986835,
        "smoothedEle": 89.06528651698324,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204309,
        "lng": 120.745316,
        "ele": 86.5,
        "distanceKm": 55.086576708436326,
        "gradePct": 0.48898270047045156,
        "smoothedEle": 89.5188326451831,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204033,
        "lng": 120.744916,
        "ele": 86,
        "distanceKm": 55.137934592899214,
        "gradePct": 0.9380625619010923,
        "smoothedEle": 90.11487359158349,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203644,
        "lng": 120.74446,
        "ele": 92.25,
        "distanceKm": 55.20176885459768,
        "gradePct": 1.3373246161954264,
        "smoothedEle": 91.36139097385107,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203391,
        "lng": 120.743984,
        "ele": 96,
        "distanceKm": 55.258273950338214,
        "gradePct": 1.6491806238810063,
        "smoothedEle": 92.583432401426,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203344,
        "lng": 120.743327,
        "ele": 92.75,
        "distanceKm": 55.326113562797175,
        "gradePct": 1.9957397402119528,
        "smoothedEle": 93.96916249176579,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203439,
        "lng": 120.742613,
        "ele": 96.5,
        "distanceKm": 55.40037485748198,
        "gradePct": 2.2833874416405453,
        "smoothedEle": 95.90094471304246,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.203633,
        "lng": 120.742145,
        "ele": 100.25,
        "distanceKm": 55.45316405565928,
        "gradePct": 2.205267062052468,
        "smoothedEle": 96.88345431585559,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204069,
        "lng": 120.741706,
        "ele": 95.5,
        "distanceKm": 55.51944363481253,
        "gradePct": 2.0215131640389643,
        "smoothedEle": 97.87594511835867,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204416,
        "lng": 120.741412,
        "ele": 99.25,
        "distanceKm": 55.56848313637931,
        "gradePct": 1.7017156048900444,
        "smoothedEle": 98.47476663451769,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.204873,
        "lng": 120.741129,
        "ele": 99.25,
        "distanceKm": 55.62705874355651,
        "gradePct": 0.6296716838197919,
        "smoothedEle": 97.65692707528362,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20533,
        "lng": 120.740846,
        "ele": 99.25,
        "distanceKm": 55.685634303553975,
        "gradePct": -0.7682499355300043,
        "smoothedEle": 95.83317392298451,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2056545,
        "lng": 120.74070800000001,
        "ele": 101.25,
        "distanceKm": 55.72441320820299,
        "gradePct": -1.7883807970120273,
        "smoothedEle": 94.3598670014756,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205979,
        "lng": 120.74057,
        "ele": 103.25,
        "distanceKm": 55.76319210081921,
        "gradePct": -2.6446163929740347,
        "smoothedEle": 93.12092499580959,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206293,
        "lng": 120.740537,
        "ele": 99.5,
        "distanceKm": 55.7982722451835,
        "gradePct": -3.0040172147922206,
        "smoothedEle": 92.05081314257176,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206653,
        "lng": 120.740656,
        "ele": 86.75,
        "distanceKm": 55.84013511872377,
        "gradePct": -3.405350466486476,
        "smoothedEle": 90.43909251127117,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207266,
        "lng": 120.740637,
        "ele": 81.5,
        "distanceKm": 55.90832576179379,
        "gradePct": -3.658161148648998,
        "smoothedEle": 87.6547467574228,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20773,
        "lng": 120.740431,
        "ele": 81.25,
        "distanceKm": 55.96410866592859,
        "gradePct": -3.9070085602452105,
        "smoothedEle": 85.2789482643886,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208034,
        "lng": 120.73999,
        "ele": 80.75,
        "distanceKm": 56.02071050712791,
        "gradePct": -4.0069623679183834,
        "smoothedEle": 83.17301532187514,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208185,
        "lng": 120.73952,
        "ele": 80,
        "distanceKm": 56.07192578645972,
        "gradePct": -3.3824222748619253,
        "smoothedEle": 82.3761782156482,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208472,
        "lng": 120.73895,
        "ele": 78.5,
        "distanceKm": 56.13872174002608,
        "gradePct": -1.559449191432143,
        "smoothedEle": 83.24128115188299,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208766,
        "lng": 120.738546,
        "ele": 78.25,
        "distanceKm": 56.19162226687309,
        "gradePct": -0.5742368190023147,
        "smoothedEle": 83.10680123752465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209061,
        "lng": 120.738164,
        "ele": 82.5,
        "distanceKm": 56.242832456947035,
        "gradePct": 0.12284997077239093,
        "smoothedEle": 83.07452910046332,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.209282,
        "lng": 120.737944,
        "ele": 89.25,
        "distanceKm": 56.27625130860201,
        "gradePct": 0.3796475900337572,
        "smoothedEle": 83.19149508125577,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20957,
        "lng": 120.737838,
        "ele": 93.75,
        "distanceKm": 56.310083608934995,
        "gradePct": 0.16420939799914913,
        "smoothedEle": 83.19879527518187,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.209963,
        "lng": 120.737867,
        "ele": 93.75,
        "distanceKm": 56.35388513303774,
        "gradePct": -0.010925294464115455,
        "smoothedEle": 83.18088327590245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210344,
        "lng": 120.738164,
        "ele": 81,
        "distanceKm": 56.40613096966141,
        "gradePct": -0.044272398664382075,
        "smoothedEle": 83.00911320436155,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210582,
        "lng": 120.738192,
        "ele": 79,
        "distanceKm": 56.43275191095193,
        "gradePct": -0.1314558140127086,
        "smoothedEle": 82.81797012923408,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210695,
        "lng": 120.738128,
        "ele": 80.25,
        "distanceKm": 56.44693950899553,
        "gradePct": -0.18867031936296016,
        "smoothedEle": 82.71156314390711,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211048,
        "lng": 120.737677,
        "ele": 82.5,
        "distanceKm": 56.50773635037953,
        "gradePct": -0.35472315122160786,
        "smoothedEle": 82.48884249098951,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211171,
        "lng": 120.737249,
        "ele": 80.25,
        "distanceKm": 56.55387040062332,
        "gradePct": -0.5627411789252568,
        "smoothedEle": 82.05540694265956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211176,
        "lng": 120.736793,
        "ele": 79.5,
        "distanceKm": 56.600816183677786,
        "gradePct": -0.8539667437295385,
        "smoothedEle": 81.31865328470477,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211205,
        "lng": 120.736341,
        "ele": 75.25,
        "distanceKm": 56.64745849583967,
        "gradePct": -0.7956792339443723,
        "smoothedEle": 81.11830344091877,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211115,
        "lng": 120.736018,
        "ele": 74.5,
        "distanceKm": 56.68218277874383,
        "gradePct": -0.49786668556840397,
        "smoothedEle": 81.58672102516753,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210829595787587,
        "lng": 120.73571150696085,
        "ele": 79.03662442738876,
        "distanceKm": 56.72693379492817,
        "gradePct": -0.0803456837718872,
        "smoothedEle": 82.14778857429813,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210522,
        "lng": 120.735428,
        "ele": 84.75,
        "distanceKm": 56.77189651043802,
        "gradePct": 0.2757206290694714,
        "smoothedEle": 82.32395160219954,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210412,
        "lng": 120.735289,
        "ele": 86,
        "distanceKm": 56.790721083281014,
        "gradePct": 0.3516263315648821,
        "smoothedEle": 82.18033555877777,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210347,
        "lng": 120.735155,
        "ele": 85.75,
        "distanceKm": 56.80629445322749,
        "gradePct": 0.3811301083632603,
        "smoothedEle": 82.0573818539287,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210129,
        "lng": 120.734469,
        "ele": 86.75,
        "distanceKm": 56.88095904321138,
        "gradePct": -0.2660990255053084,
        "smoothedEle": 81.03801523968606,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210088,
        "lng": 120.734303,
        "ele": 87.25,
        "distanceKm": 56.89864556450197,
        "gradePct": -0.40148089707796825,
        "smoothedEle": 80.99016202685272,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210176,
        "lng": 120.733988,
        "ele": 86.75,
        "distanceKm": 56.93251738138196,
        "gradePct": -0.6008635069444054,
        "smoothedEle": 80.96793794143068,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210445,
        "lng": 120.733385,
        "ele": 84.75,
        "distanceKm": 57.001423713804094,
        "gradePct": -0.8463641143821711,
        "smoothedEle": 80.40310872252087,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210621,
        "lng": 120.733079,
        "ele": 77.5,
        "distanceKm": 57.03850892109815,
        "gradePct": -1.0626807032953627,
        "smoothedEle": 79.49220884387199,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2108,
        "lng": 120.732873,
        "ele": 71.75,
        "distanceKm": 57.06759299924491,
        "gradePct": -1.2390034228806892,
        "smoothedEle": 78.74248979490548,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210898,
        "lng": 120.732607,
        "ele": 72.5,
        "distanceKm": 57.097064780410264,
        "gradePct": -1.5020610346347425,
        "smoothedEle": 77.99031697714747,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210880028677128,
        "lng": 120.73221720177708,
        "ele": 73.89718414528475,
        "distanceKm": 57.13724199965801,
        "gradePct": -2.0029964216576133,
        "smoothedEle": 76.92321712701752,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210835,
        "lng": 120.731829,
        "ele": 74.75,
        "distanceKm": 57.17751759524628,
        "gradePct": -2.3844669467105053,
        "smoothedEle": 75.8301346748431,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210688,
        "lng": 120.731392,
        "ele": 73.25,
        "distanceKm": 57.225381809876374,
        "gradePct": -2.6691032205705243,
        "smoothedEle": 74.47643511624152,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210383847124792,
        "lng": 120.73103586851549,
        "ele": 72.71151305057663,
        "distanceKm": 57.275260658563596,
        "gradePct": -2.71274639205355,
        "smoothedEle": 73.12130456577827,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210070423562396,
        "lng": 120.73068893425774,
        "ele": 73.10575652528831,
        "distanceKm": 57.32516225012081,
        "gradePct": -2.397768275964667,
        "smoothedEle": 72.44851659017588,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209757,
        "lng": 120.730342,
        "ele": 73.5,
        "distanceKm": 57.37506389876997,
        "gradePct": -2.128320330228993,
        "smoothedEle": 71.64008750659889,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209576,
        "lng": 120.730051,
        "ele": 73.5,
        "distanceKm": 57.41115396315702,
        "gradePct": -2.024891617961529,
        "smoothedEle": 70.82904498282082,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209477,
        "lng": 120.729695,
        "ele": 72.25,
        "distanceKm": 57.44942009187671,
        "gradePct": -1.9044789845067398,
        "smoothedEle": 70.01439450445143,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20955997880547,
        "lng": 120.72923434209528,
        "ele": 70.53166001326007,
        "distanceKm": 57.4977319235448,
        "gradePct": -1.7006340931871022,
        "smoothedEle": 69.41707215713886,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209665,
        "lng": 120.728778,
        "ele": 68.5,
        "distanceKm": 57.54613983659855,
        "gradePct": -1.4507353226457702,
        "smoothedEle": 69.20719963777964,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209766500958324,
        "lng": 120.72829888031522,
        "ele": 64.62738695266798,
        "distanceKm": 57.59673771202753,
        "gradePct": -1.1261427340773107,
        "smoothedEle": 68.90073213422392,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209873,
        "lng": 120.727821,
        "ele": 62.75,
        "distanceKm": 57.64733836140206,
        "gradePct": -0.9628652089180113,
        "smoothedEle": 68.13298220249882,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209868,
        "lng": 120.727481,
        "ele": 64.25,
        "distanceKm": 57.682344081749235,
        "gradePct": -1.0135878849120983,
        "smoothedEle": 67.58015002631033,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20974,
        "lng": 120.727139,
        "ele": 66.75,
        "distanceKm": 57.720319405262536,
        "gradePct": -1.1384889239334492,
        "smoothedEle": 67.04216627653857,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209572,
        "lng": 120.726818,
        "ele": 69.49999999999973,
        "distanceKm": 57.758279512891676,
        "gradePct": -1.2700746122155484,
        "smoothedEle": 66.59352131245275,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209404,
        "lng": 120.726497,
        "ele": 72.25,
        "distanceKm": 57.79623965495976,
        "gradePct": -1.3695598086099654,
        "smoothedEle": 66.16462921098358,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209073,
        "lng": 120.725973,
        "ele": 66,
        "distanceKm": 57.86154312959427,
        "gradePct": -1.2392872369975656,
        "smoothedEle": 65.43007716669644,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208683,
        "lng": 120.72588866666666,
        "ele": 65.58333333333336,
        "distanceKm": 57.90576970443419,
        "gradePct": -1.1589181891331228,
        "smoothedEle": 64.93045066000721,
        "gradeBand": "descent"
      },
      {
        "lat": 22.208293,
        "lng": 120.72580433333333,
        "ele": 65.16666666666664,
        "distanceKm": 57.94999628401023,
        "gradePct": -1.0966812130806844,
        "smoothedEle": 64.49805715782254,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207903,
        "lng": 120.72572,
        "ele": 64.75,
        "distanceKm": 57.99422286832231,
        "gradePct": -1.0777491866579882,
        "smoothedEle": 64.03191747154268,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207583,
        "lng": 120.725454,
        "ele": 63.25,
        "distanceKm": 58.03912254445954,
        "gradePct": -1.1701297403352033,
        "smoothedEle": 63.342010800358835,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2074835,
        "lng": 120.725099,
        "ele": 60.62499999999975,
        "distanceKm": 58.0773066605701,
        "gradePct": -1.3056985968997656,
        "smoothedEle": 62.64059975883895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207384,
        "lng": 120.724744,
        "ele": 58,
        "distanceKm": 58.115490801478764,
        "gradePct": -1.2123159016789387,
        "smoothedEle": 62.410777837504895,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207344,
        "lng": 120.724605,
        "ele": 57.25,
        "distanceKm": 58.13047572610582,
        "gradePct": -1.1802722948862592,
        "smoothedEle": 62.32836075205608,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207262,
        "lng": 120.7245,
        "ele": 57.5,
        "distanceKm": 58.144617208170466,
        "gradePct": -1.1454653005716453,
        "smoothedEle": 62.25971659333073,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207073,
        "lng": 120.724362,
        "ele": 58.5,
        "distanceKm": 58.16998444521915,
        "gradePct": -1.0730248160336717,
        "smoothedEle": 62.1413361537702,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206719,
        "lng": 120.724202,
        "ele": 61.5,
        "distanceKm": 58.212654837455766,
        "gradePct": -0.888758285397939,
        "smoothedEle": 61.971184192693954,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206433,
        "lng": 120.723995,
        "ele": 62.25,
        "distanceKm": 58.25093636269909,
        "gradePct": -0.6293151492538324,
        "smoothedEle": 61.86637030494787,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206146,
        "lng": 120.723742,
        "ele": 63,
        "distanceKm": 58.29212883856408,
        "gradePct": -0.49978469589492386,
        "smoothedEle": 61.55181894723269,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205912,
        "lng": 120.723323,
        "ele": 63.25,
        "distanceKm": 58.342504056473935,
        "gradePct": -0.5962101008912505,
        "smoothedEle": 61.077553839799,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205794154616534,
        "lng": 120.72288504683601,
        "ele": 63.25,
        "distanceKm": 58.38945607912908,
        "gradePct": -0.6240457367753418,
        "smoothedEle": 60.81559981872487,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205688,
        "lng": 120.722443,
        "ele": 63.25,
        "distanceKm": 58.436469868780414,
        "gradePct": -0.7674896916368394,
        "smoothedEle": 60.37099983119474,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20563,
        "lng": 120.72189,
        "ele": 63.5,
        "distanceKm": 58.493764308980495,
        "gradePct": -1.1196184499936894,
        "smoothedEle": 59.29718466367204,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205960596147644,
        "lng": 120.72159240531086,
        "ele": 57.60873965811365,
        "distanceKm": 58.541617822362504,
        "gradePct": -1.503765788725662,
        "smoothedEle": 58.07836584741803,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206302719072262,
        "lng": 120.72130996028655,
        "ele": 56.014291940180655,
        "distanceKm": 58.58949996747527,
        "gradePct": -2.093778808271223,
        "smoothedEle": 56.62762715888739,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206643,
        "lng": 120.721025,
        "ele": 54.5,
        "distanceKm": 58.63737772174781,
        "gradePct": -2.572510390972801,
        "smoothedEle": 55.208964025053625,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206708,
        "lng": 120.721028,
        "ele": 53.75,
        "distanceKm": 58.64461199743507,
        "gradePct": -2.608526333825582,
        "smoothedEle": 55.00134699475301,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20690362119496,
        "lng": 120.72061479929496,
        "ele": 52.7492280575747,
        "distanceKm": 58.69238883122677,
        "gradePct": -2.7938515174711394,
        "smoothedEle": 53.735260899272916,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207139,
        "lng": 120.720225,
        "ele": 51.25,
        "distanceKm": 58.74029851053525,
        "gradePct": -2.707256472007157,
        "smoothedEle": 52.69745549527049,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207293,
        "lng": 120.71985,
        "ele": 49,
        "distanceKm": 58.78253105007712,
        "gradePct": -2.390310354319153,
        "smoothedEle": 52.05815150364767,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207293,
        "lng": 120.719384,
        "ele": 47.5,
        "distanceKm": 58.83050430794338,
        "gradePct": -1.8191192803052258,
        "smoothedEle": 51.774391215188835,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2072,
        "lng": 120.71898700000001,
        "ele": 48.74999999999989,
        "distanceKm": 58.87266223495122,
        "gradePct": -1.346843919195765,
        "smoothedEle": 51.564327862183525,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207107,
        "lng": 120.71859,
        "ele": 50,
        "distanceKm": 58.914820188214975,
        "gradePct": -0.9333079033876973,
        "smoothedEle": 51.38274362462139,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206975,
        "lng": 120.718004,
        "ele": 52.75,
        "distanceKm": 58.97690708431023,
        "gradePct": -0.5305979567622638,
        "smoothedEle": 51.08208956033964,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206901,
        "lng": 120.71745,
        "ele": 54.5,
        "distanceKm": 59.03453033851753,
        "gradePct": -0.45093707391452115,
        "smoothedEle": 50.85245627353684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206953452292865,
        "lng": 120.71698254762318,
        "ele": 53.737526796256155,
        "distanceKm": 59.08300539312687,
        "gradePct": -0.3572742098136941,
        "smoothedEle": 50.805229023337276,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207024726146432,
        "lng": 120.71651777381159,
        "ele": 52.24376339812797,
        "distanceKm": 59.13150444651692,
        "gradePct": -0.29549912685288793,
        "smoothedEle": 50.71095231499749,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207096,
        "lng": 120.716053,
        "ele": 50.75,
        "distanceKm": 59.180003475935386,
        "gradePct": -0.3313153894265947,
        "smoothedEle": 50.4071194126692,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207185,
        "lng": 120.715523,
        "ele": 48.75,
        "distanceKm": 59.23545562646732,
        "gradePct": -0.5839674183521334,
        "smoothedEle": 49.68361996687314,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207199550378665,
        "lng": 120.71511769405485,
        "ele": 47.94250631109412,
        "distanceKm": 59.27721200583812,
        "gradePct": -0.9526654702942856,
        "smoothedEle": 48.90554234149565,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207178775189334,
        "lng": 120.71471234702743,
        "ele": 47.59625315554703,
        "distanceKm": 59.3190051524738,
        "gradePct": -1.3642476439640332,
        "smoothedEle": 48.00675424972814,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207158,
        "lng": 120.714307,
        "ele": 47.25,
        "distanceKm": 59.36079830527705,
        "gradePct": -1.7122096444157833,
        "smoothedEle": 47.10301516541266,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20715,
        "lng": 120.71362,
        "ele": 46.25,
        "distanceKm": 59.43152849340156,
        "gradePct": -1.9893126430809114,
        "smoothedEle": 45.75623306496495,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207279973603267,
        "lng": 120.71316920774699,
        "ele": 44.73345903205991,
        "distanceKm": 59.480134527813604,
        "gradePct": -1.9100400149454386,
        "smoothedEle": 45.022611625285585,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207437,
        "lng": 120.712728,
        "ele": 44,
        "distanceKm": 59.528795950295866,
        "gradePct": -1.6686903183088204,
        "smoothedEle": 44.457656476093184,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207602,
        "lng": 120.712343,
        "ele": 43,
        "distanceKm": 59.57247102873164,
        "gradePct": -1.4291422469081896,
        "smoothedEle": 44.02246892694427,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207713,
        "lng": 120.71183,
        "ele": 42.25,
        "distanceKm": 59.62670578573934,
        "gradePct": -1.1558948651463914,
        "smoothedEle": 43.53627309686276,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207668894451743,
        "lng": 120.71137770620851,
        "ele": 42.089831939068446,
        "distanceKm": 59.67352546988275,
        "gradePct": -0.9654336169811981,
        "smoothedEle": 43.191496338850065,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207577788480222,
        "lng": 120.71093229923663,
        "ele": 42.37102320919376,
        "distanceKm": 59.720484389892455,
        "gradePct": -0.8117231363718025,
        "smoothedEle": 42.93070674225455,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2074866825087,
        "lng": 120.71048689226475,
        "ele": 42.65221447931907,
        "distanceKm": 59.76744333896698,
        "gradePct": -0.6428120744747667,
        "smoothedEle": 42.78694172263522,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207395240953456,
        "lng": 120.71004156611536,
        "ele": 42.811480500558474,
        "distanceKm": 59.814402258310714,
        "gradePct": -0.4630042707054548,
        "smoothedEle": 42.72056142154166,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20730362047673,
        "lng": 120.70959628305768,
        "ele": 42.90574025027924,
        "distanceKm": 59.86136118818556,
        "gradePct": -0.2929912322663058,
        "smoothedEle": 42.69509076241143,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207212,
        "lng": 120.709151,
        "ele": 43,
        "distanceKm": 59.90832014727147,
        "gradePct": -0.2393818076828255,
        "smoothedEle": 42.5194980861035,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207147,
        "lng": 120.70868433333334,
        "ele": 43,
        "distanceKm": 59.95690271828437,
        "gradePct": -0.3672579446243792,
        "smoothedEle": 42.084695987832,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207082,
        "lng": 120.70821766666667,
        "ele": 43,
        "distanceKm": 60.005485311299395,
        "gradePct": -0.672206754782086,
        "smoothedEle": 41.38875275117988,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207017,
        "lng": 120.707751,
        "ele": 43,
        "distanceKm": 60.054067926316485,
        "gradePct": -1.0670471708032128,
        "smoothedEle": 40.56495230709774,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20693070907336,
        "lng": 120.70735522252578,
        "ele": 42.406969112134206,
        "distanceKm": 60.095926652164465,
        "gradePct": -1.4118986464479568,
        "smoothedEle": 39.74204353625403,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206860854536682,
        "lng": 120.70695511126289,
        "ele": 40.0784845560673,
        "distanceKm": 60.13784296497596,
        "gradePct": -1.7126777532094948,
        "smoothedEle": 38.829920600131544,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206791,
        "lng": 120.706555,
        "ele": 37.75,
        "distanceKm": 60.17975929793343,
        "gradePct": -1.9580644101705438,
        "smoothedEle": 37.8411477970418,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206707990942075,
        "lng": 120.70607449114364,
        "ele": 35.28016578901014,
        "distanceKm": 60.23008016529041,
        "gradePct": -2.215232395655612,
        "smoothedEle": 36.54124059358739,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20664,
        "lng": 120.705591,
        "ele": 34.25,
        "distanceKm": 60.28042519651776,
        "gradePct": -2.4619548010733334,
        "smoothedEle": 35.1228800426928,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20659,
        "lng": 120.70516,
        "ele": 33,
        "distanceKm": 60.325142498487374,
        "gradePct": -2.6652202342660103,
        "smoothedEle": 33.77584954500167,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206545,
        "lng": 120.704469,
        "ele": 31.5,
        "distanceKm": 60.39645494437923,
        "gradePct": -2.871727473910907,
        "smoothedEle": 31.666404753025972,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206554,
        "lng": 120.704062,
        "ele": 30.5,
        "distanceKm": 60.43836650641969,
        "gradePct": -2.8733356314973406,
        "smoothedEle": 30.56111989015137,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206603,
        "lng": 120.70358,
        "ele": 29.25,
        "distanceKm": 60.488285408537195,
        "gradePct": -2.7596951008307986,
        "smoothedEle": 29.366714703844043,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206697,
        "lng": 120.703101,
        "ele": 28.25,
        "distanceKm": 60.5386927923559,
        "gradePct": -2.582097983948524,
        "smoothedEle": 28.210831582104547,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206801,
        "lng": 120.70268,
        "ele": 27.25,
        "distanceKm": 60.58354988789405,
        "gradePct": -2.4409105633634782,
        "smoothedEle": 27.166319294629545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206937,
        "lng": 120.702304,
        "ele": 26.25,
        "distanceKm": 60.62510722269024,
        "gradePct": -2.3530940569185166,
        "smoothedEle": 26.204603439340733,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207073,
        "lng": 120.701928,
        "ele": 25.25,
        "distanceKm": 60.66666452254971,
        "gradePct": -2.312319931682697,
        "smoothedEle": 25.25939588041708,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2072285,
        "lng": 120.701537,
        "ele": 24.25,
        "distanceKm": 60.71047341526723,
        "gradePct": -2.2640357997802276,
        "smoothedEle": 24.32985370595793,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207384,
        "lng": 120.701146,
        "ele": 23.25,
        "distanceKm": 60.75428226700914,
        "gradePct": -2.173331523150949,
        "smoothedEle": 23.501162468752764,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207589,
        "lng": 120.700598,
        "ele": 21.75,
        "distanceKm": 60.815128337250975,
        "gradePct": -1.9987313264688764,
        "smoothedEle": 22.438071195971297,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207743,
        "lng": 120.700138,
        "ele": 20.75,
        "distanceKm": 60.8654847819841,
        "gradePct": -1.7938905826133005,
        "smoothedEle": 21.69844753888098,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207834352634396,
        "lng": 120.69968483861928,
        "ele": 19.80290437316519,
        "distanceKm": 60.91322927970766,
        "gradePct": -1.5826338514902525,
        "smoothedEle": 21.112455882650124,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207899,
        "lng": 120.699226,
        "ele": 20,
        "distanceKm": 60.96100895156285,
        "gradePct": -1.3686928745105453,
        "smoothedEle": 20.646249332747026,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207932,
        "lng": 120.698818,
        "ele": 19.75,
        "distanceKm": 61.003171084648066,
        "gradePct": -1.158764205428827,
        "smoothedEle": 20.32945768854247,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207948,
        "lng": 120.698326,
        "ele": 19.5,
        "distanceKm": 61.05385196566422,
        "gradePct": -0.9059178329039327,
        "smoothedEle": 20.057471952539956,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207918,
        "lng": 120.697852,
        "ele": 19.75,
        "distanceKm": 61.10276246674711,
        "gradePct": -0.6648616014015646,
        "smoothedEle": 19.911197013008994,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207849,
        "lng": 120.697364,
        "ele": 19.75,
        "distanceKm": 61.153582847282955,
        "gradePct": -0.42839806336569913,
        "smoothedEle": 19.861912859276643,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207732,
        "lng": 120.696826,
        "ele": 20,
        "distanceKm": 61.21047555506159,
        "gradePct": -0.2075623533949435,
        "smoothedEle": 19.875132562941836,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207600833333334,
        "lng": 120.696403,
        "ele": 20,
        "distanceKm": 61.25639957850911,
        "gradePct": -0.08128277600202401,
        "smoothedEle": 19.88728734314366,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207469666666668,
        "lng": 120.69598,
        "ele": 20,
        "distanceKm": 61.302323640547925,
        "gradePct": 0.07465113399559692,
        "smoothedEle": 20.06181166329703,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2073385,
        "lng": 120.69555700000001,
        "ele": 20,
        "distanceKm": 61.34824774117795,
        "gradePct": 0.22207889339345893,
        "smoothedEle": 20.31124447960604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.207207333333333,
        "lng": 120.695134,
        "ele": 20,
        "distanceKm": 61.39417188040011,
        "gradePct": 0.34302295725460086,
        "smoothedEle": 20.55739012291329,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.207076166666667,
        "lng": 120.694711,
        "ele": 20,
        "distanceKm": 61.44009605821154,
        "gradePct": 0.4630929858550262,
        "smoothedEle": 20.80915823767066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206945,
        "lng": 120.694288,
        "ele": 20,
        "distanceKm": 61.486020274613416,
        "gradePct": 0.5258519879123732,
        "smoothedEle": 21.051558274515685,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20684,
        "lng": 120.693904,
        "ele": 21.5,
        "distanceKm": 61.52724010176512,
        "gradePct": 0.5402506351073976,
        "smoothedEle": 21.277644556964383,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206714377579623,
        "lng": 120.69346769792432,
        "ele": 22.32322093168358,
        "distanceKm": 61.574278159813645,
        "gradePct": 0.47408974585915903,
        "smoothedEle": 21.39894262641868,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206583783184715,
        "lng": 120.69303302344323,
        "ele": 22.429915698762674,
        "distanceKm": 61.62132398481908,
        "gradePct": 0.32000211224697217,
        "smoothedEle": 21.34624914387912,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206453188789812,
        "lng": 120.69259834896215,
        "ele": 22.53661046584179,
        "distanceKm": 61.66836984942858,
        "gradePct": 0.13262861656344416,
        "smoothedEle": 21.22365194274481,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206322594394905,
        "lng": 120.69216367448108,
        "ele": 22.643305232920888,
        "distanceKm": 61.71541575364078,
        "gradePct": -0.09081919175202784,
        "smoothedEle": 21.031150906115936,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206192,
        "lng": 120.691729,
        "ele": 22.75,
        "distanceKm": 61.762461697457994,
        "gradePct": -0.3086099335677473,
        "smoothedEle": 20.751251389269523,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2060855,
        "lng": 120.691351,
        "ele": 21.125,
        "distanceKm": 61.80313796047269,
        "gradePct": -0.5130230856015794,
        "smoothedEle": 20.34057215434616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205979,
        "lng": 120.690973,
        "ele": 19.5,
        "distanceKm": 61.843814251735786,
        "gradePct": -0.720407760472995,
        "smoothedEle": 19.84682605349767,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205845,
        "lng": 120.690535,
        "ele": 18.75000000000003,
        "distanceKm": 61.89130350785687,
        "gradePct": -0.9345475392017901,
        "smoothedEle": 19.260717600433654,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205710999999997,
        "lng": 120.690097,
        "ele": 17.999999999999943,
        "distanceKm": 61.938792804852866,
        "gradePct": -1.2119381752438607,
        "smoothedEle": 18.468192951378114,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205576999999998,
        "lng": 120.689659,
        "ele": 17.24999999999997,
        "distanceKm": 61.98628214272191,
        "gradePct": -1.5620099584830358,
        "smoothedEle": 17.386733414923253,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205443,
        "lng": 120.689221,
        "ele": 16.5,
        "distanceKm": 62.03377152146668,
        "gradePct": -1.8323355507002013,
        "smoothedEle": 16.30405787781313,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205335,
        "lng": 120.68885,
        "ele": 16.25,
        "distanceKm": 62.073808824263104,
        "gradePct": -1.9720980493761149,
        "smoothedEle": 15.532439432925514,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205293,
        "lng": 120.688381,
        "ele": 16.25,
        "distanceKm": 62.12231694202926,
        "gradePct": -1.9917439681791358,
        "smoothedEle": 14.759662283881235,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205407,
        "lng": 120.688007,
        "ele": 14.25,
        "distanceKm": 62.162852643163035,
        "gradePct": -1.880239916600127,
        "smoothedEle": 14.159806098335974,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205723,
        "lng": 120.687688,
        "ele": 11.25,
        "distanceKm": 62.21094786538921,
        "gradePct": -1.6700641662228695,
        "smoothedEle": 13.484269350933243,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206053,
        "lng": 120.687574,
        "ele": 11.25,
        "distanceKm": 62.249473343703905,
        "gradePct": -1.5195326228748705,
        "smoothedEle": 12.962379448598158,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206386121746508,
        "lng": 120.68739729336689,
        "ele": 11.464252728915751,
        "distanceKm": 62.290740822496524,
        "gradePct": -1.4406136485822163,
        "smoothedEle": 12.381470452822095,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206738,
        "lng": 120.687263,
        "ele": 11.5,
        "distanceKm": 62.33223862195011,
        "gradePct": -1.4119658070531238,
        "smoothedEle": 11.788907476760945,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207195544176614,
        "lng": 120.68706581468868,
        "ele": 11.350890464857166,
        "distanceKm": 62.38701554288667,
        "gradePct": -1.4268098609348512,
        "smoothedEle": 10.966798679901236,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207651,
        "lng": 120.686863,
        "ele": 11,
        "distanceKm": 62.441795081602095,
        "gradePct": -1.3323677901076363,
        "smoothedEle": 10.40165834487254,
        "gradeBand": "descent"
      },
      {
        "lat": 22.207983,
        "lng": 120.686727,
        "ele": 10.5,
        "distanceKm": 62.48127758419749,
        "gradePct": -1.108253900918146,
        "smoothedEle": 10.298173605905184,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2084101742811,
        "lng": 120.68653177797925,
        "ele": 9.462599457609882,
        "distanceKm": 62.532853972932614,
        "gradePct": -0.7540651630234282,
        "smoothedEle": 10.271541774807211,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20883708714055,
        "lng": 120.68633588898962,
        "ele": 8.981299728804942,
        "distanceKm": 62.58443037539958,
        "gradePct": -0.3579267281728698,
        "smoothedEle": 10.289744208532392,
        "gradeBand": "descent"
      },
      {
        "lat": 22.209264,
        "lng": 120.68614,
        "ele": 8.5,
        "distanceKm": 62.63600675387989,
        "gradePct": -0.08849214118021782,
        "smoothedEle": 10.284390108774888,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20966831842927,
        "lng": 120.68596795931396,
        "ele": 9.412682684581018,
        "distanceKm": 62.68432769509187,
        "gradePct": -0.02463450256827536,
        "smoothedEle": 10.247329654554653,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210072636858538,
        "lng": 120.6857959186279,
        "ele": 10.325365369161897,
        "distanceKm": 62.73264861760154,
        "gradePct": -0.03628378203218789,
        "smoothedEle": 10.19908024741245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.210477,
        "lng": 120.685624,
        "ele": 11.75,
        "distanceKm": 62.780969543644275,
        "gradePct": -0.05692070684655189,
        "smoothedEle": 10.174681392072774,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211017,
        "lng": 120.685306,
        "ele": 11.5,
        "distanceKm": 62.84935893798092,
        "gradePct": -0.03582662026975074,
        "smoothedEle": 10.20249621490363,
        "gradeBand": "descent"
      },
      {
        "lat": 22.211396437131206,
        "lng": 120.68505718423928,
        "ele": 10.947689765344077,
        "distanceKm": 62.89871689847457,
        "gradePct": 0.047800382013606355,
        "smoothedEle": 10.328562511339936,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.21177587426242,
        "lng": 120.68480836847857,
        "ele": 10.395379530688155,
        "distanceKm": 62.948074823024875,
        "gradePct": 0.10807501410103383,
        "smoothedEle": 10.40744106738968,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.212155311393627,
        "lng": 120.68455955271786,
        "ele": 9.843069296032231,
        "distanceKm": 62.99743271163065,
        "gradePct": 0.10647667076308157,
        "smoothedEle": 10.394330510118344,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.212536,
        "lng": 120.684313,
        "ele": 9.25,
        "distanceKm": 63.04678936821302,
        "gradePct": 0.023423436662384334,
        "smoothedEle": 10.248298012035827,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.212796,
        "lng": 120.684133,
        "ele": 9.5,
        "distanceKm": 63.081128570342585,
        "gradePct": -0.07377339530400812,
        "smoothedEle": 10.136092969347343,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212751,
        "lng": 120.684047,
        "ele": 9.5,
        "distanceKm": 63.091297885421405,
        "gradePct": -0.1017521045308104,
        "smoothedEle": 10.10610923125773,
        "gradeBand": "descent"
      },
      {
        "lat": 22.212453,
        "lng": 120.684251,
        "ele": 10,
        "distanceKm": 63.13052821916647,
        "gradePct": -0.1923316928461815,
        "smoothedEle": 9.994736576068624,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21209225,
        "lng": 120.684484,
        "ele": 10,
        "distanceKm": 63.17726600326116,
        "gradePct": -0.2776218417167438,
        "smoothedEle": 9.844443554707887,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2117315,
        "lng": 120.684717,
        "ele": 10,
        "distanceKm": 63.22400381900482,
        "gradePct": -0.2669539175156064,
        "smoothedEle": 9.781806223825015,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21137075,
        "lng": 120.68495,
        "ele": 10,
        "distanceKm": 63.27074166639485,
        "gradePct": -0.17216580724772101,
        "smoothedEle": 9.82570107763462,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21101,
        "lng": 120.685183,
        "ele": 10,
        "distanceKm": 63.3174795454319,
        "gradePct": -0.02969662684934307,
        "smoothedEle": 9.972387754618707,
        "gradeBand": "descent"
      },
      {
        "lat": 22.21068818201405,
        "lng": 120.68534732719438,
        "ele": 10.065078083045357,
        "distanceKm": 63.357061176424935,
        "gradePct": 0.10548618211557,
        "smoothedEle": 10.120387858240539,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.210354,
        "lng": 120.685481,
        "ele": 9.25,
        "distanceKm": 63.39668670683648,
        "gradePct": 0.22377641493510886,
        "smoothedEle": 10.26596904426556,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20990769924551,
        "lng": 120.68563832599942,
        "ele": 9.71051479605692,
        "distanceKm": 63.44888911529802,
        "gradePct": 0.3529387768207866,
        "smoothedEle": 10.511055338285031,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20947117710712,
        "lng": 120.68582640088837,
        "ele": 10.326013152050558,
        "distanceKm": 63.50114721809204,
        "gradePct": 0.4497921271501431,
        "smoothedEle": 10.820713054206893,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20903465496873,
        "lng": 120.68601447577733,
        "ele": 10.941511508044195,
        "distanceKm": 63.5534053431996,
        "gradePct": 0.5439910291791954,
        "smoothedEle": 11.194700351131333,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20859813283034,
        "lng": 120.68620255066628,
        "ele": 11.55700986403792,
        "distanceKm": 63.60566349062034,
        "gradePct": 0.661254475410479,
        "smoothedEle": 11.630623304750152,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20816161069195,
        "lng": 120.68639062555523,
        "ele": 12.172508220031641,
        "distanceKm": 63.65792166035389,
        "gradePct": 0.8062513746093326,
        "smoothedEle": 12.177080835583295,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20772508855356,
        "lng": 120.68657870044419,
        "ele": 12.788006576025278,
        "distanceKm": 63.71017985239992,
        "gradePct": 0.9522609196048177,
        "smoothedEle": 12.789877290784526,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20728856641517,
        "lng": 120.68676677533314,
        "ele": 13.403504932018915,
        "distanceKm": 63.76243806675805,
        "gradePct": 1.0727777429979815,
        "smoothedEle": 13.415604308651185,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20685204427678,
        "lng": 120.6869548502221,
        "ele": 14.01900328801264,
        "distanceKm": 63.81469630342794,
        "gradePct": 1.1612770727207624,
        "smoothedEle": 14.04763251068243,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20641552213839,
        "lng": 120.68714292511105,
        "ele": 14.634501644006363,
        "distanceKm": 63.86695456240922,
        "gradePct": 1.19544253174808,
        "smoothedEle": 14.673888628951342,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205979,
        "lng": 120.687331,
        "ele": 15.25,
        "distanceKm": 63.91921284370154,
        "gradePct": 1.2015980563020061,
        "smoothedEle": 15.301232221652828,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205558,
        "lng": 120.687613,
        "ele": 16,
        "distanceKm": 63.97429721426778,
        "gradePct": 1.19799337513158,
        "smoothedEle": 15.955019466679884,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205255,
        "lng": 120.68806,
        "ele": 16.75,
        "distanceKm": 64.03133057281205,
        "gradePct": 1.1900139346829173,
        "smoothedEle": 16.627003281587847,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205174,
        "lng": 120.688571,
        "ele": 17.25,
        "distanceKm": 64.08470268022427,
        "gradePct": 1.1703351177903871,
        "smoothedEle": 17.227619220105247,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.20523956572429,
        "lng": 120.68897114039278,
        "ele": 17.822522360505864,
        "distanceKm": 64.12653668625848,
        "gradePct": 1.1347052557203803,
        "smoothedEle": 17.657568203950238,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205349,
        "lng": 120.689361,
        "ele": 18.25,
        "distanceKm": 64.16847622546064,
        "gradePct": 1.108016853180555,
        "smoothedEle": 18.101964823724593,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2055175,
        "lng": 120.68989,
        "ele": 18.87500000000004,
        "distanceKm": 64.22606878912663,
        "gradePct": 1.132318662129794,
        "smoothedEle": 18.829644721957713,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205686,
        "lng": 120.690419,
        "ele": 19.5,
        "distanceKm": 64.28366129097132,
        "gradePct": 1.2047852466380469,
        "smoothedEle": 19.62547057741603,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2058265,
        "lng": 120.6908695,
        "ele": 19.625,
        "distanceKm": 64.3326000525392,
        "gradePct": 1.2086985673881994,
        "smoothedEle": 20.139213528641697,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.205967,
        "lng": 120.69132,
        "ele": 19.75,
        "distanceKm": 64.38153877011132,
        "gradePct": 1.1059979442962224,
        "smoothedEle": 20.47900547776975,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.2060755,
        "lng": 120.6916905,
        "ele": 21.125000000000124,
        "distanceKm": 64.42154353994835,
        "gradePct": 0.9271240985634723,
        "smoothedEle": 20.626716564154002,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206184,
        "lng": 120.692061,
        "ele": 22.5,
        "distanceKm": 64.46154828167168,
        "gradePct": 0.6743603601273016,
        "smoothedEle": 20.668628872372604,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206299,
        "lng": 120.692446,
        "ele": 23.5,
        "distanceKm": 64.50319489309344,
        "gradePct": 0.37998675238261187,
        "smoothedEle": 20.59050138401676,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.206452666666667,
        "lng": 120.69293933333334,
        "ele": 22.25,
        "distanceKm": 64.55677970520668,
        "gradePct": -0.009681334264239757,
        "smoothedEle": 20.287735343334756,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206606333333333,
        "lng": 120.69343266666667,
        "ele": 21,
        "distanceKm": 64.6103644646166,
        "gradePct": -0.35885661886039366,
        "smoothedEle": 19.86772641448616,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20676,
        "lng": 120.693926,
        "ele": 19.75,
        "distanceKm": 64.66394917132563,
        "gradePct": -0.6429952651806211,
        "smoothedEle": 19.378134362645955,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2064055,
        "lng": 120.6936775,
        "ele": 18.5,
        "distanceKm": 64.71094163283466,
        "gradePct": -0.8955030996910246,
        "smoothedEle": 18.75572439162179,
        "gradeBand": "descent"
      },
      {
        "lat": 22.206051,
        "lng": 120.693429,
        "ele": 17.25,
        "distanceKm": 64.75793412952058,
        "gradePct": -1.1512355536355598,
        "smoothedEle": 17.976215608714043,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205735,
        "lng": 120.69313,
        "ele": 16,
        "distanceKm": 64.8046476249993,
        "gradePct": -1.346077993440876,
        "smoothedEle": 17.22038025245942,
        "gradeBand": "descent"
      },
      {
        "lat": 22.205348,
        "lng": 120.692895,
        "ele": 15.5,
        "distanceKm": 64.85401450135183,
        "gradePct": -1.4671021018095485,
        "smoothedEle": 16.534701122526542,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20499,
        "lng": 120.692632,
        "ele": 15.5,
        "distanceKm": 64.90215745296774,
        "gradePct": -1.430967874016191,
        "smoothedEle": 16.010134137331818,
        "gradeBand": "descent"
      },
      {
        "lat": 22.204662,
        "lng": 120.6925,
        "ele": 15,
        "distanceKm": 64.94107882200076,
        "gradePct": -1.281480905803281,
        "smoothedEle": 15.692848651114158,
        "gradeBand": "descent"
      },
      {
        "lat": 22.204352,
        "lng": 120.692422,
        "ele": 14.75,
        "distanceKm": 64.97647225115122,
        "gradePct": -1.0913353128007484,
        "smoothedEle": 15.493593810043738,
        "gradeBand": "descent"
      },
      {
        "lat": 22.203754,
        "lng": 120.692393,
        "ele": 14.75,
        "distanceKm": 65.04303389869884,
        "gradePct": -0.729147019010915,
        "smoothedEle": 15.2289216981391,
        "gradeBand": "descent"
      },
      {
        "lat": 22.203409,
        "lng": 120.692474,
        "ele": 14.75,
        "distanceKm": 65.08229206792342,
        "gradePct": -0.5788929967652183,
        "smoothedEle": 15.068801950488815,
        "gradeBand": "descent"
      },
      {
        "lat": 22.203153,
        "lng": 120.692498,
        "ele": 15,
        "distanceKm": 65.11086503776232,
        "gradePct": -0.5115330594139669,
        "smoothedEle": 14.916084126005497,
        "gradeBand": "descent"
      },
      {
        "lat": 22.2027905,
        "lng": 120.692433,
        "ele": 15.375000000000034,
        "distanceKm": 65.1517249436273,
        "gradePct": -0.509992655505428,
        "smoothedEle": 14.612928732928209,
        "gradeBand": "descent"
      },
      {
        "lat": 22.202428,
        "lng": 120.692368,
        "ele": 15.75,
        "distanceKm": 65.19258485232166,
        "gradePct": -0.6047239404233075,
        "smoothedEle": 14.220076659021586,
        "gradeBand": "descent"
      },
      {
        "lat": 22.201993,
        "lng": 120.69227,
        "ele": 15.5,
        "distanceKm": 65.24199572700921,
        "gradePct": -0.7976472960971972,
        "smoothedEle": 13.63775523533657,
        "gradeBand": "descent"
      },
      {
        "lat": 22.201589,
        "lng": 120.692129,
        "ele": 14.75,
        "distanceKm": 65.28920563836287,
        "gradePct": -1.0134323592865453,
        "smoothedEle": 13.00498533496981,
        "gradeBand": "descent"
      },
      {
        "lat": 22.201285,
        "lng": 120.692077,
        "ele": 13.5,
        "distanceKm": 65.32343023401464,
        "gradePct": -1.1399523987321236,
        "smoothedEle": 12.54295329367099,
        "gradeBand": "descent"
      },
      {
        "lat": 22.200976,
        "lng": 120.692195,
        "ele": 12.5,
        "distanceKm": 65.35987389638233,
        "gradePct": -1.2451317764502792,
        "smoothedEle": 12.044316179937475,
        "gradeBand": "descent"
      },
      {
        "lat": 22.200560600459607,
        "lng": 120.69230193161764,
        "ele": 10.898695181381141,
        "distanceKm": 65.40735805334215,
        "gradePct": -1.3557841549905458,
        "smoothedEle": 11.334401909819633,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20014,
        "lng": 120.692384,
        "ele": 9.25,
        "distanceKm": 65.45488382349919,
        "gradePct": -1.4697502514749812,
        "smoothedEle": 10.525511355031224,
        "gradeBand": "descent"
      },
      {
        "lat": 22.20003,
        "lng": 120.692347,
        "ele": 8.75,
        "distanceKm": 65.46769471052968,
        "gradePct": -1.4990928726892037,
        "smoothedEle": 10.295117598914398,
        "gradeBand": "descent"
      },
      {
        "lat": 22.199899,
        "lng": 120.691835,
        "ele": 8,
        "distanceKm": 65.52238194736563,
        "gradePct": -1.6302005326758715,
        "smoothedEle": 9.296704098080827,
        "gradeBand": "descent"
      },
      {
        "lat": 22.199886,
        "lng": 120.691642,
        "ele": 8,
        "distanceKm": 65.54230425987112,
        "gradePct": -1.6616495021012831,
        "smoothedEle": 8.961412137989402,
        "gradeBand": "descent"
      },
      {
        "lat": 22.19962,
        "lng": 120.691006,
        "ele": 8,
        "distanceKm": 65.61415262264156,
        "gradePct": -1.5840409204374013,
        "smoothedEle": 8.05067622115482,
        "gradeBand": "descent"
      },
      {
        "lat": 22.199538,
        "lng": 120.690927,
        "ele": 7.75,
        "distanceKm": 65.62637095546765,
        "gradePct": -1.5350451555655822,
        "smoothedEle": 7.940711225719969,
        "gradeBand": "descent"
      },
      {
        "lat": 22.199136,
        "lng": 120.691094,
        "ele": 7.25,
        "distanceKm": 65.67426386411464,
        "gradePct": -1.2676657797023958,
        "smoothedEle": 7.639854369750195,
        "gradeBand": "descent"
      },
      {
        "lat": 22.198802,
        "lng": 120.691096,
        "ele": 6.75,
        "distanceKm": 65.7114035916977,
        "gradePct": -0.9863123639187628,
        "smoothedEle": 7.524508924742356,
        "gradeBand": "descent"
      },
      {
        "lat": 22.198635,
        "lng": 120.691104,
        "ele": 6.5,
        "distanceKm": 65.72999142645503,
        "gradePct": -0.8299478077656236,
        "smoothedEle": 7.508741163132907,
        "gradeBand": "descent"
      },
      {
        "lat": 22.198365,
        "lng": 120.690963,
        "ele": 6,
        "distanceKm": 65.7633394001177,
        "gradePct": -0.5876204618214841,
        "smoothedEle": 7.5195338547809065,
        "gradeBand": "descent"
      },
      {
        "lat": 22.198123,
        "lng": 120.690809,
        "ele": 6.5,
        "distanceKm": 65.79457210211537,
        "gradePct": -0.36632788210034584,
        "smoothedEle": 7.5662193389592005,
        "gradeBand": "descent"
      },
      {
        "lat": 22.198017,
        "lng": 120.690488,
        "ele": 7.25,
        "distanceKm": 65.8296592014668,
        "gradePct": -0.15498834517686036,
        "smoothedEle": 7.610078213148488,
        "gradeBand": "descent"
      },
      {
        "lat": 22.197744,
        "lng": 120.689991,
        "ele": 8,
        "distanceKm": 65.88915433503796,
        "gradePct": 0.0443913574842865,
        "smoothedEle": 7.682391511398796,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.197562,
        "lng": 120.689506,
        "ele": 8,
        "distanceKm": 65.94303224245135,
        "gradePct": 0.13520483622009602,
        "smoothedEle": 7.783371347059356,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.19725781302919,
        "lng": 120.68967685094114,
        "ele": 8.33843677837775,
        "distanceKm": 65.98115665631282,
        "gradePct": 0.17840386698027333,
        "smoothedEle": 7.902974162261989,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.196956,
        "lng": 120.689853,
        "ele": 8.75,
        "distanceKm": 66.01930336810298,
        "gradePct": 0.2451852916187219,
        "smoothedEle": 8.087504004681167,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.196612000000002,
        "lng": 120.69015399999999,
        "ele": 8.625000000000018,
        "distanceKm": 66.06853228558211,
        "gradePct": 0.3858868360355044,
        "smoothedEle": 8.429100134896558,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.196268,
        "lng": 120.690455,
        "ele": 8.5,
        "distanceKm": 66.11776125085126,
        "gradePct": 0.5125817932208333,
        "smoothedEle": 8.761171167882281,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.19587311979063,
        "lng": 120.69084558854274,
        "ele": 8.25,
        "distanceKm": 66.17730174339174,
        "gradePct": 0.6212091786847093,
        "smoothedEle": 9.133298997632684,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.195486,
        "lng": 120.691246,
        "ele": 8.25,
        "distanceKm": 66.23690379203738,
        "gradePct": 0.6166260826087441,
        "smoothedEle": 9.44288432168445,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.195219834697422,
        "lng": 120.69153603585757,
        "ele": 9.497061448297174,
        "distanceKm": 66.27894673085149,
        "gradePct": 0.5308459273967938,
        "smoothedEle": 9.56104200570547,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.194935,
        "lng": 120.691805,
        "ele": 10.75,
        "distanceKm": 66.32101744429649,
        "gradePct": 0.42240639028179605,
        "smoothedEle": 9.626335143881414,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.194666,
        "lng": 120.692053,
        "ele": 10.75,
        "distanceKm": 66.3603447357509,
        "gradePct": 0.31991731706582793,
        "smoothedEle": 9.667152404817712,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.194316,
        "lng": 120.692126,
        "ele": 11.25,
        "distanceKm": 66.39998208883846,
        "gradePct": 0.21543418741928957,
        "smoothedEle": 9.681973760913937,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.19389920234209,
        "lng": 120.69207354900266,
        "ele": 10.938817216590616,
        "distanceKm": 66.44664148886369,
        "gradePct": 0.10868007271103532,
        "smoothedEle": 9.687611338622869,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.193483755318553,
        "lng": 120.69200888798733,
        "ele": 10.231587361347245,
        "distanceKm": 66.49331438324691,
        "gradePct": 0.07018054595645562,
        "smoothedEle": 9.72370148612431,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.193068308295015,
        "lng": 120.69194422697198,
        "ele": 9.524357506103874,
        "distanceKm": 66.53998728043929,
        "gradePct": 0.03741063038087091,
        "smoothedEle": 9.720844939579694,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.192652871942915,
        "lng": 120.69187948653655,
        "ele": 9.093011305717376,
        "distanceKm": 66.58666017303044,
        "gradePct": -0.02520448580598664,
        "smoothedEle": 9.626583405766123,
        "gradeBand": "descent"
      },
      {
        "lat": 22.192237435971457,
        "lng": 120.69181474326828,
        "ele": 8.671505652858688,
        "distanceKm": 66.63333306820002,
        "gradePct": -0.07521811608804434,
        "smoothedEle": 9.535567129155298,
        "gradeBand": "descent"
      },
      {
        "lat": 22.191822,
        "lng": 120.69175,
        "ele": 8.25,
        "distanceKm": 66.6800059661857,
        "gradePct": -0.15135867465434547,
        "smoothedEle": 9.410693308678708,
        "gradeBand": "descent"
      },
      {
        "lat": 22.191473,
        "lng": 120.691693,
        "ele": 8.625,
        "distanceKm": 66.71925428436752,
        "gradePct": -0.20655291844002893,
        "smoothedEle": 9.309008035460419,
        "gradeBand": "descent"
      },
      {
        "lat": 22.191124,
        "lng": 120.691636,
        "ele": 9,
        "distanceKm": 66.7585026047297,
        "gradePct": -0.22625893048586343,
        "smoothedEle": 9.23093314886039,
        "gradeBand": "descent"
      },
      {
        "lat": 22.19072901167423,
        "lng": 120.69166220775621,
        "ele": 9.374396517317221,
        "distanceKm": 66.80250617248234,
        "gradePct": -0.17032898131770782,
        "smoothedEle": 9.25502434166595,
        "gradeBand": "descent"
      },
      {
        "lat": 22.190334023348463,
        "lng": 120.69168841551242,
        "ele": 9.748793034634442,
        "distanceKm": 66.84650974069987,
        "gradePct": -0.06409844983646006,
        "smoothedEle": 9.372115906154734,
        "gradeBand": "descent"
      },
      {
        "lat": 22.189939023461733,
        "lng": 120.69171441752819,
        "ele": 9.938106410347975,
        "distanceKm": 66.89051329864755,
        "gradePct": 0.09925888534428876,
        "smoothedEle": 9.581988486867193,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.189544,
        "lng": 120.69174,
        "ele": 9.75,
        "distanceKm": 66.93451686686187,
        "gradePct": 0.29746771114302656,
        "smoothedEle": 9.873582301231414,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.189071,
        "lng": 120.691702,
        "ele": 9.25,
        "distanceKm": 66.98725746094371,
        "gradePct": 0.5050605557967751,
        "smoothedEle": 10.256797047244378,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.188446,
        "lng": 120.691574,
        "ele": 10.25,
        "distanceKm": 67.05799293403504,
        "gradePct": 0.6429025942678954,
        "smoothedEle": 10.712689561888974,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.188071483175143,
        "lng": 120.69148228159392,
        "ele": 10.966550047560746,
        "distanceKm": 67.10069464752105,
        "gradePct": 0.6322754406501011,
        "smoothedEle": 10.914007041219232,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18769674695913,
        "lng": 120.6913916150434,
        "ele": 11.488050602282957,
        "distanceKm": 67.14339635161214,
        "gradePct": 0.5744002442206656,
        "smoothedEle": 11.086901393464355,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.187322,
        "lng": 120.691301,
        "ele": 12,
        "distanceKm": 67.18609806782027,
        "gradePct": 0.5172372508439442,
        "smoothedEle": 11.282847363557341,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.186974,
        "lng": 120.691274,
        "ele": 12.25,
        "distanceKm": 67.2248936854692,
        "gradePct": 0.5115358002722176,
        "smoothedEle": 11.522435386806716,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.186605,
        "lng": 120.691292,
        "ele": 12.5,
        "distanceKm": 67.26596650463006,
        "gradePct": 0.5503684663735691,
        "smoothedEle": 11.851017940093596,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.186135,
        "lng": 120.691335,
        "ele": 12,
        "distanceKm": 67.3184153908481,
        "gradePct": 0.6658992702269749,
        "smoothedEle": 12.317554859694903,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.185753282324576,
        "lng": 120.69140518679839,
        "ele": 11.846081582490472,
        "distanceKm": 67.36147131700783,
        "gradePct": 0.7764174652930946,
        "smoothedEle": 12.722677173818573,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.185372,
        "lng": 120.691478,
        "ele": 12,
        "distanceKm": 67.40452578913833,
        "gradePct": 0.8340844183593894,
        "smoothedEle": 13.064819294314695,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.184967,
        "lng": 120.691546,
        "ele": 12.625,
        "distanceKm": 67.45010081221791,
        "gradePct": 0.821984894315232,
        "smoothedEle": 13.368062189426894,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.184562,
        "lng": 120.691614,
        "ele": 13.25,
        "distanceKm": 67.49567583839791,
        "gradePct": 0.7571841282623096,
        "smoothedEle": 13.629653029699115,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.184194,
        "lng": 120.691704,
        "ele": 14.374999999999805,
        "distanceKm": 67.53763178582469,
        "gradePct": 0.6705333915896212,
        "smoothedEle": 13.839432766832973,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.183826,
        "lng": 120.691794,
        "ele": 15.5,
        "distanceKm": 67.5795877386123,
        "gradePct": 0.6003784901987282,
        "smoothedEle": 14.067400404336782,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.183324,
        "lng": 120.69195500000001,
        "ele": 15.333333333333346,
        "distanceKm": 67.6378171974583,
        "gradePct": 0.6005184595127394,
        "smoothedEle": 14.487367522806386,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.182822,
        "lng": 120.692116,
        "ele": 15.166666666666654,
        "distanceKm": 67.69604667316369,
        "gradePct": 0.6263517055104737,
        "smoothedEle": 14.884210614548955,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.18232,
        "lng": 120.692277,
        "ele": 15,
        "distanceKm": 67.75427616572973,
        "gradePct": 0.5967831653458568,
        "smoothedEle": 15.123436323056833,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181714,
        "lng": 120.692569,
        "ele": 14.75,
        "distanceKm": 67.82806364226482,
        "gradePct": 0.3329381076108208,
        "smoothedEle": 15.082898374175784,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.181319,
        "lng": 120.692808,
        "ele": 16,
        "distanceKm": 67.87840985778728,
        "gradePct": 0.14014563447502115,
        "smoothedEle": 15.044304195683932,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.180853022308213,
        "lng": 120.69305699212016,
        "ele": 15.411644328553216,
        "distanceKm": 67.93622014365299,
        "gradePct": 0.040263811685610086,
        "smoothedEle": 15.129783930704146,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.180387044616428,
        "lng": 120.69330598424031,
        "ele": 14.823288657106284,
        "distanceKm": 67.99403046721812,
        "gradePct": 0.23729600485138586,
        "smoothedEle": 15.576187799416914,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.179922,
        "lng": 120.693557,
        "ele": 14,
        "distanceKm": 68.05184071225507,
        "gradePct": 0.5782966563117851,
        "smoothedEle": 16.221264765993226,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.179457499999998,
        "lng": 120.69383450000001,
        "ele": 15.125,
        "distanceKm": 68.1108675916233,
        "gradePct": 0.9566821059883358,
        "smoothedEle": 17.00566122496143,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.178993,
        "lng": 120.694112,
        "ele": 16.25,
        "distanceKm": 68.16989451670467,
        "gradePct": 1.193001079280906,
        "smoothedEle": 17.77581525844735,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.178498,
        "lng": 120.694299,
        "ele": 19.75,
        "distanceKm": 68.22820685057029,
        "gradePct": 1.3754000602653127,
        "smoothedEle": 18.708345890100986,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1779945,
        "lng": 120.6943875,
        "ele": 20.75,
        "distanceKm": 68.28493033934342,
        "gradePct": 1.5574396527130512,
        "smoothedEle": 19.77586554398369,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.177491,
        "lng": 120.694476,
        "ele": 21.75,
        "distanceKm": 68.34165383336064,
        "gradePct": 1.787540588833037,
        "smoothedEle": 20.982426010865552,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17703542857143,
        "lng": 120.69456342857143,
        "ele": 22.464285714285655,
        "distanceKm": 68.39310483786234,
        "gradePct": 1.9524610802325728,
        "smoothedEle": 22.051916790671534,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17657985714286,
        "lng": 120.69465085714285,
        "ele": 23.178571428571516,
        "distanceKm": 68.44455584746909,
        "gradePct": 2.0346217711371515,
        "smoothedEle": 23.085272825767092,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.176124285714288,
        "lng": 120.69473828571428,
        "ele": 23.89285714285717,
        "distanceKm": 68.49600686218132,
        "gradePct": 1.951521446401922,
        "smoothedEle": 23.914516182718458,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.175668714285713,
        "lng": 120.69482571428571,
        "ele": 24.60714285714283,
        "distanceKm": 68.54745788199907,
        "gradePct": 1.8411797046157978,
        "smoothedEle": 24.78543178190215,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.175213142857142,
        "lng": 120.69491314285715,
        "ele": 25.321428571428484,
        "distanceKm": 68.59890890692147,
        "gradePct": 1.7230518943316526,
        "smoothedEle": 25.614591076905267,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17475757142857,
        "lng": 120.69500057142857,
        "ele": 26.03571428571434,
        "distanceKm": 68.65035993694858,
        "gradePct": 1.5628000225124863,
        "smoothedEle": 26.30441821039196,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.174302,
        "lng": 120.695088,
        "ele": 26.75,
        "distanceKm": 68.70181097208082,
        "gradePct": 1.368429029773486,
        "smoothedEle": 26.749620882832694,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17386,
        "lng": 120.695157,
        "ele": 28.75,
        "distanceKm": 68.75147010338108,
        "gradePct": 1.0367325060334944,
        "smoothedEle": 26.923555771268912,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.173352,
        "lng": 120.695181,
        "ele": 29.5,
        "distanceKm": 68.80801123855218,
        "gradePct": 0.5098069292272526,
        "smoothedEle": 26.756243995288276,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.17295,
        "lng": 120.695121,
        "ele": 29.5,
        "distanceKm": 68.85313661208248,
        "gradePct": 0.02822258500203172,
        "smoothedEle": 26.38488978116591,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.172555,
        "lng": 120.694988,
        "ele": 28.25,
        "distanceKm": 68.89914431208169,
        "gradePct": -0.42886400927277635,
        "smoothedEle": 25.868818417775906,
        "gradeBand": "descent"
      },
      {
        "lat": 22.172017,
        "lng": 120.694764,
        "ele": 25.75,
        "distanceKm": 68.96325998382422,
        "gradePct": -0.9702345879870973,
        "smoothedEle": 24.94819897180481,
        "gradeBand": "descent"
      },
      {
        "lat": 22.171669,
        "lng": 120.694686,
        "ele": 24.75,
        "distanceKm": 69.00278064833837,
        "gradePct": -1.2656172719406305,
        "smoothedEle": 24.240487374435084,
        "gradeBand": "descent"
      },
      {
        "lat": 22.171374,
        "lng": 120.694635,
        "ele": 22,
        "distanceKm": 69.03600092542585,
        "gradePct": -1.4655066449930279,
        "smoothedEle": 23.594892707866585,
        "gradeBand": "descent"
      },
      {
        "lat": 22.17084,
        "lng": 120.694691,
        "ele": 20.75,
        "distanceKm": 69.09565844859297,
        "gradePct": -1.7641766518060837,
        "smoothedEle": 22.3795662716492,
        "gradeBand": "descent"
      },
      {
        "lat": 22.170348,
        "lng": 120.694896,
        "ele": 19.5,
        "distanceKm": 69.15429785073454,
        "gradePct": -1.89559932128599,
        "smoothedEle": 21.28568515426081,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16993550215108,
        "lng": 120.69509532471652,
        "ele": 19.065124631126277,
        "distanceKm": 69.20454858526844,
        "gradePct": -1.8252946852770495,
        "smoothedEle": 20.555540353886805,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16952175107554,
        "lng": 120.69529166235826,
        "ele": 19.15756231556314,
        "distanceKm": 69.25480203814563,
        "gradePct": -1.5505409239441719,
        "smoothedEle": 20.110799831266316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.169108,
        "lng": 120.695488,
        "ele": 19.25,
        "distanceKm": 69.30505551495646,
        "gradePct": -1.1371075785355096,
        "smoothedEle": 19.93005475959397,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16873055937002,
        "lng": 120.69561912831792,
        "ele": 19.456176600501095,
        "distanceKm": 69.34914374283713,
        "gradePct": -0.7283341738813242,
        "smoothedEle": 19.92516344340193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.168353118740033,
        "lng": 120.69575025663583,
        "ele": 19.662353201002194,
        "distanceKm": 69.39323198181864,
        "gradePct": -0.3635644126358086,
        "smoothedEle": 19.992842143279937,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16797567811005,
        "lng": 120.69588138495375,
        "ele": 19.86852980150322,
        "distanceKm": 69.43732023190012,
        "gradePct": -0.06676880368692377,
        "smoothedEle": 20.131975327188684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.167599,
        "lng": 120.696015,
        "ele": 21,
        "distanceKm": 69.48140703267758,
        "gradePct": 0.1435748027686185,
        "smoothedEle": 20.302260104468985,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.167188749999998,
        "lng": 120.696149,
        "ele": 21,
        "distanceKm": 69.52906612401337,
        "gradePct": 0.2752434926036692,
        "smoothedEle": 20.477877916235137,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1667785,
        "lng": 120.696283,
        "ele": 21,
        "distanceKm": 69.57672522700334,
        "gradePct": 0.3386706016075505,
        "smoothedEle": 20.644844259906137,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.16636825,
        "lng": 120.696417,
        "ele": 21,
        "distanceKm": 69.62438434164854,
        "gradePct": 0.3498413419897911,
        "smoothedEle": 20.79083508002288,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.165958,
        "lng": 120.696551,
        "ele": 21,
        "distanceKm": 69.67204346794874,
        "gradePct": 0.3247266262821345,
        "smoothedEle": 20.915546692492345,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.165547749999998,
        "lng": 120.696685,
        "ele": 21,
        "distanceKm": 69.71970260590341,
        "gradePct": 0.224295711871099,
        "smoothedEle": 20.891965942727932,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1651375,
        "lng": 120.696819,
        "ele": 21,
        "distanceKm": 69.76736175551198,
        "gradePct": -0.007550836859275271,
        "smoothedEle": 20.59693910267871,
        "gradeBand": "descent"
      },
      {
        "lat": 22.164727250000002,
        "lng": 120.696953,
        "ele": 21,
        "distanceKm": 69.81502091677424,
        "gradePct": -0.32361668820233086,
        "smoothedEle": 20.114919381534044,
        "gradeBand": "descent"
      },
      {
        "lat": 22.164317,
        "lng": 120.697087,
        "ele": 21,
        "distanceKm": 69.86268008969124,
        "gradePct": -0.6613039615500287,
        "smoothedEle": 19.568437229156316,
        "gradeBand": "descent"
      },
      {
        "lat": 22.16384,
        "lng": 120.697248,
        "ele": 21,
        "distanceKm": 69.91825102404475,
        "gradePct": -0.9476554069004458,
        "smoothedEle": 18.997373341426034,
        "gradeBand": "descent"
      },
      {
        "lat": 22.163436333333333,
        "lng": 120.69736733333333,
        "ele": 19.083333333333332,
        "distanceKm": 69.9647885926636,
        "gradePct": -0.9820263921168809,
        "smoothedEle": 18.648815098339824,
        "gradeBand": "descent"
      },
      {
        "lat": 22.163032666666666,
        "lng": 120.69748666666666,
        "ele": 17.166666666666668,
        "distanceKm": 70.01132617059531,
        "gradePct": -0.8501727656243099,
        "smoothedEle": 18.45194212273718,
        "gradeBand": "descent"
      },
      {
        "lat": 22.162629,
        "lng": 120.697606,
        "ele": 15.25,
        "distanceKm": 70.05786375783977,
        "gradePct": -0.6084545192544406,
        "smoothedEle": 18.406754482579554,
        "gradeBand": "descent"
      },
      {
        "lat": 22.162142702833194,
        "lng": 120.69774433272879,
        "ele": 15.27975650703643,
        "distanceKm": 70.11378258457418,
        "gradePct": -0.23528554897850662,
        "smoothedEle": 18.57272129172397,
        "gradeBand": "descent"
      },
      {
        "lat": 22.161656,
        "lng": 120.697881,
        "ele": 16.5,
        "distanceKm": 70.16970163231201,
        "gradePct": 0.1671474260761781,
        "smoothedEle": 18.962325784709936,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.161188717046464,
        "lng": 120.6980055838459,
        "ele": 18.417394024719272,
        "distanceKm": 70.22322170222742,
        "gradePct": 0.6054907218083623,
        "smoothedEle": 19.65137309640687,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.160721434092927,
        "lng": 120.6981301676918,
        "ele": 20.334788049439062,
        "distanceKm": 70.2767417823591,
        "gradePct": 1.118814902855247,
        "smoothedEle": 20.700414174383777,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.16025415113939,
        "lng": 120.6982547515377,
        "ele": 22.252182074158334,
        "distanceKm": 70.33026187270688,
        "gradePct": 1.681410049018063,
        "smoothedEle": 22.050357449000128,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.159786868185854,
        "lng": 120.69837933538359,
        "ele": 24.169576098877606,
        "distanceKm": 70.38378197327026,
        "gradePct": 2.112897641778107,
        "smoothedEle": 23.369399252326684,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.159319585232318,
        "lng": 120.6985039192295,
        "ele": 26.086970123596874,
        "distanceKm": 70.43730208404975,
        "gradePct": 2.2957046464267985,
        "smoothedEle": 24.518770371507138,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.158852294636052,
        "lng": 120.69862846869984,
        "ele": 27.34321868813032,
        "distanceKm": 70.49082218159167,
        "gradePct": 2.1824421743274796,
        "smoothedEle": 25.420450020810975,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.158385,
        "lng": 120.698753,
        "ele": 28.25,
        "distanceKm": 70.54434227704425,
        "gradePct": 1.8306803369373081,
        "smoothedEle": 26.05873992838748,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.157954999999998,
        "lng": 120.698852,
        "ele": 27.74999999999995,
        "distanceKm": 70.59323104709866,
        "gradePct": 1.4167748041617678,
        "smoothedEle": 26.405872442144798,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.157525,
        "lng": 120.698951,
        "ele": 27.25000000000005,
        "distanceKm": 70.64211982365045,
        "gradePct": 0.9519567091745144,
        "smoothedEle": 26.50385064031252,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.157094999999998,
        "lng": 120.69905,
        "ele": 26.75,
        "distanceKm": 70.69100860670092,
        "gradePct": 0.461792539347489,
        "smoothedEle": 26.346258437576385,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.156665,
        "lng": 120.699149,
        "ele": 26.24999999999995,
        "distanceKm": 70.73989739624889,
        "gradePct": -0.025081885168741633,
        "smoothedEle": 25.955565741531338,
        "gradeBand": "descent"
      },
      {
        "lat": 22.156235000000002,
        "lng": 120.699248,
        "ele": 25.75000000000005,
        "distanceKm": 70.78878619229435,
        "gradePct": -0.5067342415365025,
        "smoothedEle": 25.3608434673722,
        "gradeBand": "descent"
      },
      {
        "lat": 22.155805,
        "lng": 120.699347,
        "ele": 25.25,
        "distanceKm": 70.83767499483818,
        "gradePct": -0.9338971870815423,
        "smoothedEle": 24.627148366445095,
        "gradeBand": "descent"
      },
      {
        "lat": 22.155385647096406,
        "lng": 120.69944631034456,
        "ele": 24.259863312839148,
        "distanceKm": 70.88541340532916,
        "gradePct": -1.2297178152093322,
        "smoothedEle": 23.904858848431566,
        "gradeBand": "descent"
      },
      {
        "lat": 22.154968942987633,
        "lng": 120.69955854982703,
        "ele": 23.478158542444454,
        "distanceKm": 70.93316886528257,
        "gradePct": -1.4066699481262286,
        "smoothedEle": 23.195996616205324,
        "gradeBand": "descent"
      },
      {
        "lat": 22.15455229532509,
        "lng": 120.69967103321802,
        "ele": 22.40210569496286,
        "distanceKm": 70.980924330592,
        "gradePct": -1.477832040756193,
        "smoothedEle": 22.500817336657327,
        "gradeBand": "descent"
      },
      {
        "lat": 22.154135647662542,
        "lng": 120.699783516609,
        "ele": 21.326052847481595,
        "distanceKm": 71.02867980422151,
        "gradePct": -1.503305501379666,
        "smoothedEle": 21.75553202389328,
        "gradeBand": "descent"
      },
      {
        "lat": 22.153719,
        "lng": 120.699896,
        "ele": 20.25,
        "distanceKm": 71.07643528617092,
        "gradePct": -1.5436621041157725,
        "smoothedEle": 20.953374968622747,
        "gradeBand": "descent"
      },
      {
        "lat": 22.15332,
        "lng": 120.70001766666667,
        "ele": 19.916666666666668,
        "distanceKm": 71.12253753267703,
        "gradePct": -1.6089375743002332,
        "smoothedEle": 20.13592855750943,
        "gradeBand": "descent"
      },
      {
        "lat": 22.152921,
        "lng": 120.70013933333333,
        "ele": 19.583333333333332,
        "distanceKm": 71.16863978883869,
        "gradePct": -1.6862424786572892,
        "smoothedEle": 19.307159217911078,
        "gradeBand": "descent"
      },
      {
        "lat": 22.152522,
        "lng": 120.700261,
        "ele": 19.25,
        "distanceKm": 71.21474205465579,
        "gradePct": -1.7580500972408968,
        "smoothedEle": 18.456948257473865,
        "gradeBand": "descent"
      },
      {
        "lat": 22.152054857142858,
        "lng": 120.700358,
        "ele": 18.035714285714334,
        "distanceKm": 71.26763792516303,
        "gradePct": -1.8107067464359874,
        "smoothedEle": 17.479732263777095,
        "gradeBand": "descent"
      },
      {
        "lat": 22.151587714285714,
        "lng": 120.700455,
        "ele": 16.82142857142867,
        "distanceKm": 71.32053380193288,
        "gradePct": -1.8362510124148597,
        "smoothedEle": 16.498955007532302,
        "gradeBand": "descent"
      },
      {
        "lat": 22.15112057142857,
        "lng": 120.700552,
        "ele": 15.607142857143,
        "distanceKm": 71.37342968496468,
        "gradePct": -1.8306886019636603,
        "smoothedEle": 15.557447479585232,
        "gradeBand": "descent"
      },
      {
        "lat": 22.15065342857143,
        "lng": 120.700649,
        "ele": 14.392857142857,
        "distanceKm": 71.42632557425819,
        "gradePct": -1.7026182801326724,
        "smoothedEle": 14.837713883953615,
        "gradeBand": "descent"
      },
      {
        "lat": 22.150186285714287,
        "lng": 120.700746,
        "ele": 13.178571428571333,
        "distanceKm": 71.47922146981409,
        "gradePct": -1.4625999317757301,
        "smoothedEle": 14.3397542769725,
        "gradeBand": "descent"
      },
      {
        "lat": 22.149719142857144,
        "lng": 120.700843,
        "ele": 11.964285714285666,
        "distanceKm": 71.53211737163218,
        "gradePct": -1.0810582553295807,
        "smoothedEle": 14.130659538373962,
        "gradeBand": "descent"
      },
      {
        "lat": 22.149252,
        "lng": 120.70094,
        "ele": 10.75,
        "distanceKm": 71.5850132797118,
        "gradePct": -0.5635071111285033,
        "smoothedEle": 14.272819831993303,
        "gradeBand": "descent"
      },
      {
        "lat": 22.148849333333334,
        "lng": 120.700995,
        "ele": 12.249999999999838,
        "distanceKm": 71.63014471290873,
        "gradePct": -0.07983571042691893,
        "smoothedEle": 14.642089261789096,
        "gradeBand": "descent"
      },
      {
        "lat": 22.148446666666665,
        "lng": 120.70105,
        "ele": 13.750000000000162,
        "distanceKm": 71.67527614813966,
        "gradePct": 0.4094695966334822,
        "smoothedEle": 15.195834552922156,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.148044,
        "lng": 120.701105,
        "ele": 15.25,
        "distanceKm": 71.72040758540415,
        "gradePct": 0.8403289243366792,
        "smoothedEle": 15.857605560728867,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.147623,
        "lng": 120.701142,
        "ele": 16.75,
        "distanceKm": 71.7673755538282,
        "gradePct": 1.2540308856493656,
        "smoothedEle": 16.733479367818273,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.147125,
        "lng": 120.70121,
        "ele": 19,
        "distanceKm": 71.82319181029487,
        "gradePct": 1.6878485040393594,
        "smoothedEle": 17.960896997762475,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.146516,
        "lng": 120.701253,
        "ele": 21,
        "distanceKm": 71.89105427157651,
        "gradePct": 2.0199329074056114,
        "smoothedEle": 19.467058048343272,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.146094,
        "lng": 120.701196,
        "ele": 21.25,
        "distanceKm": 71.93834438869334,
        "gradePct": 2.03818146649856,
        "smoothedEle": 20.268459780257164,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.145509,
        "lng": 120.700978,
        "ele": 22.25,
        "distanceKm": 72.00715929683145,
        "gradePct": 1.695156772539483,
        "smoothedEle": 20.998650358353274,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.145138801502764,
        "lng": 120.7008085001706,
        "ele": 22.75,
        "distanceKm": 72.05187225523831,
        "gradePct": 1.3386566145337935,
        "smoothedEle": 21.27475314424438,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144769558955073,
        "lng": 120.70063657771452,
        "ele": 22.75,
        "distanceKm": 72.09658561045345,
        "gradePct": 0.8569791447191959,
        "smoothedEle": 21.27475314424438,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.144399,
        "lng": 120.700468,
        "ele": 22.25,
        "distanceKm": 72.14129854394012,
        "gradePct": 0.4384851299180026,
        "smoothedEle": 21.17677639200729,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.143812,
        "lng": 120.700248,
        "ele": 20.75,
        "distanceKm": 72.21039107616971,
        "gradePct": 0.07389189327032215,
        "smoothedEle": 21.1663904016587,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.143253,
        "lng": 120.700175,
        "ele": 20.25,
        "distanceKm": 72.27300218946716,
        "gradePct": 0.024645155962580753,
        "smoothedEle": 21.32404345616954,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.142794,
        "lng": 120.700269,
        "ele": 19,
        "distanceKm": 72.32495084608027,
        "gradePct": 0.11534869358098389,
        "smoothedEle": 21.44329550272804,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.142333,
        "lng": 120.700469,
        "ele": 19.5,
        "distanceKm": 72.38019572223868,
        "gradePct": 0.14925011684139877,
        "smoothedEle": 21.469429601339417,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.142009666666667,
        "lng": 120.700708,
        "ele": 21.000000000000167,
        "distanceKm": 72.42376815496036,
        "gradePct": 0.11027968602377689,
        "smoothedEle": 21.420632888743,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.141686333333332,
        "lng": 120.700947,
        "ele": 22.499999999999833,
        "distanceKm": 72.4673406196144,
        "gradePct": 0.06349593757461934,
        "smoothedEle": 21.43677965475264,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.141363,
        "lng": 120.701186,
        "ele": 24,
        "distanceKm": 72.51091311620208,
        "gradePct": 0.005786469403094603,
        "smoothedEle": 21.4226437772955,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.140993153940013,
        "lng": 120.70147256567202,
        "ele": 23.778799076386036,
        "distanceKm": 72.56153328661307,
        "gradePct": -0.031763443234737114,
        "smoothedEle": 21.397074277431333,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140623076970005,
        "lng": 120.70175878283601,
        "ele": 22.639399538193018,
        "distanceKm": 72.61215345222531,
        "gradePct": -0.02583360118448005,
        "smoothedEle": 21.381972977357197,
        "gradeBand": "descent"
      },
      {
        "lat": 22.140253,
        "lng": 120.702045,
        "ele": 21.5,
        "distanceKm": 72.66277366295486,
        "gradePct": -0.12288375037840996,
        "smoothedEle": 21.189319764521333,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1399115,
        "lng": 120.7023075,
        "ele": 20.812499999999947,
        "distanceKm": 72.7093883534554,
        "gradePct": -0.29432311984518417,
        "smoothedEle": 20.834492204218844,
        "gradeBand": "descent"
      },
      {
        "lat": 22.139570000000003,
        "lng": 120.70257,
        "ele": 20.125000000000107,
        "distanceKm": 72.75600308198261,
        "gradePct": -0.5397156298480764,
        "smoothedEle": 20.32043646085081,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1392285,
        "lng": 120.7028325,
        "ele": 19.437500000000053,
        "distanceKm": 72.80261784853836,
        "gradePct": -0.8187641303564126,
        "smoothedEle": 19.74728943299253,
        "gradeBand": "descent"
      },
      {
        "lat": 22.138887,
        "lng": 120.703095,
        "ele": 18.75,
        "distanceKm": 72.84923265312096,
        "gradePct": -1.0020439754047548,
        "smoothedEle": 19.23676694191347,
        "gradeBand": "descent"
      },
      {
        "lat": 22.138543,
        "lng": 120.70328,
        "ele": 17.75,
        "distanceKm": 72.89196694911325,
        "gradePct": -1.0613539186451844,
        "smoothedEle": 18.84439480225238,
        "gradeBand": "descent"
      },
      {
        "lat": 22.138104499999997,
        "lng": 120.703461,
        "ele": 17.625,
        "distanceKm": 72.94416836943758,
        "gradePct": -0.9927174173712087,
        "smoothedEle": 18.46551192075343,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137666,
        "lng": 120.703642,
        "ele": 17.5,
        "distanceKm": 72.99636981049117,
        "gradePct": -0.8382527293981413,
        "smoothedEle": 18.147606078033416,
        "gradeBand": "descent"
      },
      {
        "lat": 22.137161,
        "lng": 120.703881,
        "ele": 18,
        "distanceKm": 73.05768205620326,
        "gradePct": -0.6375852550098207,
        "smoothedEle": 17.884016813714133,
        "gradeBand": "descent"
      },
      {
        "lat": 22.13684,
        "lng": 120.704086,
        "ele": 18,
        "distanceKm": 73.09915329725216,
        "gradePct": -0.5008165986739268,
        "smoothedEle": 17.790602405530144,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136453666666668,
        "lng": 120.704314,
        "ele": 17.833333333333318,
        "distanceKm": 73.14811149344573,
        "gradePct": -0.2897995351509651,
        "smoothedEle": 17.861899295740002,
        "gradeBand": "descent"
      },
      {
        "lat": 22.136067333333333,
        "lng": 120.704542,
        "ele": 17.666666666666682,
        "distanceKm": 73.19706972053817,
        "gradePct": -0.012514073820387318,
        "smoothedEle": 18.119568926689823,
        "gradeBand": "descent"
      },
      {
        "lat": 22.135681,
        "lng": 120.70477,
        "ele": 17.5,
        "distanceKm": 73.24602797852695,
        "gradePct": 0.27381361444966645,
        "smoothedEle": 18.48174642795822,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.135321,
        "lng": 120.704993,
        "ele": 17.75,
        "distanceKm": 73.29217978138806,
        "gradePct": 0.5397734426209867,
        "smoothedEle": 18.88585720886021,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.134843,
        "lng": 120.705148,
        "ele": 18,
        "distanceKm": 73.34767694701578,
        "gradePct": 0.7701903666009816,
        "smoothedEle": 19.401647207238668,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.134477,
        "lng": 120.705201,
        "ele": 19.5,
        "distanceKm": 73.38873883998033,
        "gradePct": 0.8810547424502405,
        "smoothedEle": 19.837832564910233,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.133997,
        "lng": 120.70522,
        "ele": 20.75,
        "distanceKm": 73.44214834444753,
        "gradePct": 1.045884575015463,
        "smoothedEle": 20.54481528850903,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.133387,
        "lng": 120.705261,
        "ele": 22,
        "distanceKm": 73.5101086792481,
        "gradePct": 1.2368816400186662,
        "smoothedEle": 21.526251452723592,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.132892,
        "lng": 120.705378,
        "ele": 22.5,
        "distanceKm": 73.56645407714221,
        "gradePct": 1.3312320737749228,
        "smoothedEle": 22.26357388875674,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.132555,
        "lng": 120.705532,
        "ele": 23.25,
        "distanceKm": 73.60714580658413,
        "gradePct": 1.33606291008697,
        "smoothedEle": 22.753611785589605,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.131994,
        "lng": 120.705891,
        "ele": 24.5,
        "distanceKm": 73.67966247213576,
        "gradePct": 1.1586662274716573,
        "smoothedEle": 23.403900836491538,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13168747735588,
        "lng": 120.70609037242552,
        "ele": 25,
        "distanceKm": 73.71945474279671,
        "gradePct": 0.9870437112198492,
        "smoothedEle": 23.62263923332086,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.13138,
        "lng": 120.706288,
        "ele": 24.5,
        "distanceKm": 73.75924576287214,
        "gradePct": 0.7353743242736732,
        "smoothedEle": 23.63999625625997,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.130944,
        "lng": 120.70661,
        "ele": 24,
        "distanceKm": 73.81798631962832,
        "gradePct": 0.2420844111223116,
        "smoothedEle": 23.33499228855851,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1304905,
        "lng": 120.70691000000001,
        "ele": 24,
        "distanceKm": 73.87712805183679,
        "gradePct": -0.2490197214777332,
        "smoothedEle": 22.883134124455673,
        "gradeBand": "descent"
      },
      {
        "lat": 22.130037,
        "lng": 120.70721,
        "ele": 24,
        "distanceKm": 73.93626983601472,
        "gradePct": -0.6610360893645305,
        "smoothedEle": 22.307901874311277,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129721,
        "lng": 120.70746,
        "ele": 22.25,
        "distanceKm": 73.9798331567405,
        "gradePct": -0.8721885426372626,
        "smoothedEle": 21.788721362022784,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129356,
        "lng": 120.707762,
        "ele": 19.75,
        "distanceKm": 74.03096920511322,
        "gradePct": -1.0922923097796038,
        "smoothedEle": 21.05121505862245,
        "gradeBand": "descent"
      },
      {
        "lat": 22.129074000000003,
        "lng": 120.7080725,
        "ele": 19.375,
        "distanceKm": 74.07575937850207,
        "gradePct": -1.3092744588564544,
        "smoothedEle": 20.27504222579156,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128792,
        "lng": 120.708383,
        "ele": 19,
        "distanceKm": 74.12054959759962,
        "gradePct": -1.5594685818558256,
        "smoothedEle": 19.341864868111216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.128375,
        "lng": 120.708785,
        "ele": 19.5,
        "distanceKm": 74.18271576042001,
        "gradePct": -1.9376690940285348,
        "smoothedEle": 17.871809011481545,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127967,
        "lng": 120.709024,
        "ele": 18.25,
        "distanceKm": 74.23433234845587,
        "gradePct": -2.1617155173084934,
        "smoothedEle": 16.669503818818193,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127607666666666,
        "lng": 120.70916566666666,
        "ele": 16.5000000000002,
        "distanceKm": 74.27686971740067,
        "gradePct": -2.2054422981108783,
        "smoothedEle": 15.841024384401472,
        "gradeBand": "descent"
      },
      {
        "lat": 22.127248333333334,
        "lng": 120.70930733333334,
        "ele": 14.749999999999801,
        "distanceKm": 74.31940709911136,
        "gradePct": -2.1156999459262575,
        "smoothedEle": 15.134268247193969,
        "gradeBand": "descent"
      },
      {
        "lat": 22.126889,
        "lng": 120.709449,
        "ele": 13,
        "distanceKm": 74.3619444935875,
        "gradePct": -1.9441722906863326,
        "smoothedEle": 14.474646788347222,
        "gradeBand": "descent"
      },
      {
        "lat": 22.12638,
        "lng": 120.709631,
        "ele": 11.75,
        "distanceKm": 74.42156680758764,
        "gradePct": -1.7627042956774852,
        "smoothedEle": 13.441442972772638,
        "gradeBand": "descent"
      },
      {
        "lat": 22.125844,
        "lng": 120.70991,
        "ele": 11.25,
        "distanceKm": 74.48773435320649,
        "gradePct": -1.7227314130556215,
        "smoothedEle": 12.215046262673006,
        "gradeBand": "descent"
      },
      {
        "lat": 22.125524,
        "lng": 120.710127,
        "ele": 11.25,
        "distanceKm": 74.52975507242826,
        "gradePct": -1.7047904249566759,
        "smoothedEle": 11.564222814542031,
        "gradeBand": "descent"
      },
      {
        "lat": 22.125058,
        "lng": 120.710456,
        "ele": 11.5,
        "distanceKm": 74.59167014020889,
        "gradePct": -1.578440600021987,
        "smoothedEle": 10.80264550239765,
        "gradeBand": "descent"
      },
      {
        "lat": 22.124725154324715,
        "lng": 120.7106758664444,
        "ele": 10.669270361188014,
        "distanceKm": 74.63506050668349,
        "gradePct": -1.3570616647522151,
        "smoothedEle": 10.477217753838175,
        "gradeBand": "descent"
      },
      {
        "lat": 22.124392070579095,
        "lng": 120.71089530989833,
        "ele": 9.918634810896606,
        "distanceKm": 74.67845076887866,
        "gradePct": -1.0397062508310735,
        "smoothedEle": 10.307702366111727,
        "gradeBand": "descent"
      },
      {
        "lat": 22.124058,
        "lng": 120.711113,
        "ele": 9.5,
        "distanceKm": 74.72184114926904,
        "gradePct": -0.7159514240144769,
        "smoothedEle": 10.254892041768269,
        "gradeBand": "descent"
      },
      {
        "lat": 22.123685,
        "lng": 120.711322,
        "ele": 9.5,
        "distanceKm": 74.76857146786239,
        "gradePct": -0.3751246529318353,
        "smoothedEle": 10.336518065899977,
        "gradeBand": "descent"
      },
      {
        "lat": 22.123348,
        "lng": 120.711453,
        "ele": 9,
        "distanceKm": 74.80839980699533,
        "gradePct": -0.08911028190423538,
        "smoothedEle": 10.498952437690937,
        "gradeBand": "descent"
      },
      {
        "lat": 22.12285,
        "lng": 120.711548,
        "ele": 9.25,
        "distanceKm": 74.86463297653712,
        "gradePct": 0.2289415575414674,
        "smoothedEle": 10.81956829456795,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.122402628061725,
        "lng": 120.7116063538807,
        "ele": 10.077747869493134,
        "distanceKm": 74.91474038461622,
        "gradePct": 0.4784362604708571,
        "smoothedEle": 11.220406885755523,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.121956,
        "lng": 120.711672,
        "ele": 11.25,
        "distanceKm": 74.96486148537555,
        "gradePct": 0.693498382554723,
        "smoothedEle": 11.717034431792946,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.121484956498346,
        "lng": 120.71173110431769,
        "ele": 12.742533275204512,
        "distanceKm": 75.01759186621213,
        "gradePct": 0.8730465888260399,
        "smoothedEle": 12.29745453993813,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.121014,
        "lng": 120.711791,
        "ele": 14.25,
        "distanceKm": 75.07032211589647,
        "gradePct": 1.0602625287536132,
        "smoothedEle": 12.985604119710018,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1205105,
        "lng": 120.711852,
        "ele": 14.5,
        "distanceKm": 75.12666035419075,
        "gradePct": 1.2158221318237215,
        "smoothedEle": 13.770160790830488,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.120007,
        "lng": 120.711913,
        "ele": 14.75,
        "distanceKm": 75.18299859498896,
        "gradePct": 1.2608195438310055,
        "smoothedEle": 14.438314465646519,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.119635,
        "lng": 120.711989,
        "ele": 14.75,
        "distanceKm": 75.22509750529272,
        "gradePct": 1.2284217351219877,
        "smoothedEle": 14.852249421566444,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.11922,
        "lng": 120.712158,
        "ele": 15.5,
        "distanceKm": 75.27441808131671,
        "gradePct": 1.1284992143604633,
        "smoothedEle": 15.299642262352062,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.118756,
        "lng": 120.712463,
        "ele": 16.25,
        "distanceKm": 75.33482601035338,
        "gradePct": 0.9505323435969196,
        "smoothedEle": 15.768067571335152,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.118356319508884,
        "lng": 120.71274470251483,
        "ele": 15.84871436634883,
        "distanceKm": 75.38790351333371,
        "gradePct": 0.8730084836658537,
        "smoothedEle": 16.232558742050504,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.117957,
        "lng": 120.713027,
        "ele": 15.75,
        "distanceKm": 75.44098101085339,
        "gradePct": 0.9332340260772513,
        "smoothedEle": 16.86279865134072,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.117618216182333,
        "lng": 120.71325801829852,
        "ele": 16.556628137301445,
        "distanceKm": 75.48553933829658,
        "gradePct": 1.0805365651917753,
        "smoothedEle": 17.546953711448904,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.11728,
        "lng": 120.71349,
        "ele": 17.25,
        "distanceKm": 75.53009749298556,
        "gradePct": 1.2502720405893388,
        "smoothedEle": 18.23194498897521,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.116851856890783,
        "lng": 120.71379908084008,
        "ele": 18.151986887398436,
        "distanceKm": 75.58737059590993,
        "gradePct": 1.3598897017124865,
        "smoothedEle": 18.947674485277346,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.116423,
        "lng": 120.714107,
        "ele": 19.75,
        "distanceKm": 75.6446433804888,
        "gradePct": 1.305064724527349,
        "smoothedEle": 19.529160658074943,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.115989,
        "lng": 120.714388,
        "ele": 22.25,
        "distanceKm": 75.70091785983185,
        "gradePct": 1.134664685862594,
        "smoothedEle": 20.052696668665654,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.115583,
        "lng": 120.714552,
        "ele": 23,
        "distanceKm": 75.74912061881408,
        "gradePct": 0.9578624598539497,
        "smoothedEle": 20.385397769967547,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.115198,
        "lng": 120.714602,
        "ele": 22.75,
        "distanceKm": 75.79223946587426,
        "gradePct": 0.786866554663804,
        "smoothedEle": 20.57084085653249,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.114859,
        "lng": 120.714578,
        "ele": 21.5,
        "distanceKm": 75.83001558915448,
        "gradePct": 0.635138389865938,
        "smoothedEle": 20.650922598480978,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1144012,
        "lng": 120.7144954,
        "ele": 20.899999999999967,
        "distanceKm": 75.88162695778857,
        "gradePct": 0.41073438150045527,
        "smoothedEle": 20.69469718932408,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1139434,
        "lng": 120.7144128,
        "ele": 20.299999999999933,
        "distanceKm": 75.93323833097746,
        "gradePct": 0.2323185680035052,
        "smoothedEle": 20.74041349081066,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1134856,
        "lng": 120.71433019999999,
        "ele": 19.700000000000067,
        "distanceKm": 75.98484970872131,
        "gradePct": 0.0979080501636606,
        "smoothedEle": 20.73487550932956,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.1130278,
        "lng": 120.7142476,
        "ele": 19.100000000000033,
        "distanceKm": 76.03646109101956,
        "gradePct": 0.05368379041729123,
        "smoothedEle": 20.76375698274258,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.11257,
        "lng": 120.714165,
        "ele": 18.5,
        "distanceKm": 76.08807247787239,
        "gradePct": 0.013745042703881244,
        "smoothedEle": 20.727896584931965,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.112102333333333,
        "lng": 120.71409899999999,
        "ele": 20.16666666666682,
        "distanceKm": 76.14051730338525,
        "gradePct": 0.09070300745722774,
        "smoothedEle": 20.921038460611463,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.111634666666667,
        "lng": 120.714033,
        "ele": 21.83333333333318,
        "distanceKm": 76.19296213182078,
        "gradePct": 0.2658051944790676,
        "smoothedEle": 21.271025569996326,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.111167,
        "lng": 120.713967,
        "ele": 23.5,
        "distanceKm": 76.24540696318007,
        "gradePct": 0.5267935426492102,
        "smoothedEle": 21.81112833631977,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.11059,
        "lng": 120.713893,
        "ele": 21.75,
        "distanceKm": 76.31001782844596,
        "gradePct": 0.7491650160870336,
        "smoothedEle": 22.30704614755114,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.110044,
        "lng": 120.713919,
        "ele": 23,
        "distanceKm": 76.37078939670329,
        "gradePct": 0.6037064087159013,
        "smoothedEle": 22.330470099564113,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.10955,
        "lng": 120.714076,
        "ele": 24,
        "distanceKm": 76.42805142190794,
        "gradePct": 0.12170308893437114,
        "smoothedEle": 21.875798581415584,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.109105,
        "lng": 120.714446,
        "ele": 25.5,
        "distanceKm": 76.49051218294031,
        "gradePct": -0.6029517219312875,
        "smoothedEle": 20.951427992609936,
        "gradeBand": "descent"
      },
      {
        "lat": 22.108779499999997,
        "lng": 120.7148895,
        "ele": 21.625,
        "distanceKm": 76.54880008294684,
        "gradePct": -1.2437417289117203,
        "smoothedEle": 19.834511023207178,
        "gradeBand": "descent"
      },
      {
        "lat": 22.108454,
        "lng": 120.715333,
        "ele": 17.75,
        "distanceKm": 76.60708806560459,
        "gradePct": -1.676990562727766,
        "smoothedEle": 18.68827054597682,
        "gradeBand": "descent"
      },
      {
        "lat": 22.108167,
        "lng": 120.715687,
        "ele": 16.25,
        "distanceKm": 76.65554852356046,
        "gradePct": -1.9854543843368655,
        "smoothedEle": 17.49795413624866,
        "gradeBand": "descent"
      },
      {
        "lat": 22.107744,
        "lng": 120.716039,
        "ele": 15,
        "distanceKm": 76.71493992279458,
        "gradePct": -2.450106303977377,
        "smoothedEle": 15.58312926104562,
        "gradeBand": "descent"
      },
      {
        "lat": 22.107449,
        "lng": 120.716206,
        "ele": 13.75,
        "distanceKm": 76.75198038462928,
        "gradePct": -2.7642274409574172,
        "smoothedEle": 14.243515110500125,
        "gradeBand": "descent"
      },
      {
        "lat": 22.107035,
        "lng": 120.716404,
        "ele": 12.5,
        "distanceKm": 76.8023319218694,
        "gradePct": -3.0411824605333275,
        "smoothedEle": 12.699435786981649,
        "gradeBand": "descent"
      },
      {
        "lat": 22.106562,
        "lng": 120.71662,
        "ele": 12,
        "distanceKm": 76.85944087836548,
        "gradePct": -2.9960029049375194,
        "smoothedEle": 11.380455782000524,
        "gradeBand": "descent"
      },
      {
        "lat": 22.106049,
        "lng": 120.716709,
        "ele": 8.75,
        "distanceKm": 76.9172161360818,
        "gradePct": -2.5500743209781214,
        "smoothedEle": 10.400658548084238,
        "gradeBand": "descent"
      },
      {
        "lat": 22.10571,
        "lng": 120.716677,
        "ele": 7.25,
        "distanceKm": 76.9550551512069,
        "gradePct": -2.1900703893759763,
        "smoothedEle": 9.769083595905883,
        "gradeBand": "descent"
      },
      {
        "lat": 22.105320666666664,
        "lng": 120.71658133333334,
        "ele": 7.4999999999999725,
        "distanceKm": 76.99945479236852,
        "gradePct": -1.8390096859333487,
        "smoothedEle": 9.109646415962711,
        "gradeBand": "descent"
      },
      {
        "lat": 22.104931333333333,
        "lng": 120.71648566666667,
        "ele": 7.7500000000000275,
        "distanceKm": 77.04385443956785,
        "gradePct": -1.5924979758942126,
        "smoothedEle": 8.555441913308645,
        "gradeBand": "descent"
      },
      {
        "lat": 22.104542,
        "lng": 120.71639,
        "ele": 8,
        "distanceKm": 77.08825409280558,
        "gradePct": -1.3865030341644473,
        "smoothedEle": 8.118813073619467,
        "gradeBand": "descent"
      },
      {
        "lat": 22.104141,
        "lng": 120.716302,
        "ele": 8.5,
        "distanceKm": 77.13375563984242,
        "gradePct": -1.2076484068292612,
        "smoothedEle": 7.709299150287951,
        "gradeBand": "descent"
      },
      {
        "lat": 22.103663,
        "lng": 120.71627,
        "ele": 7.25,
        "distanceKm": 77.18700903015836,
        "gradePct": -0.8727162615806154,
        "smoothedEle": 7.549062196062248,
        "gradeBand": "descent"
      },
      {
        "lat": 22.1033045,
        "lng": 120.71630049999999,
        "ele": 7.125,
        "distanceKm": 77.22699611505249,
        "gradePct": -0.598407429663196,
        "smoothedEle": 7.569055738509309,
        "gradeBand": "descent"
      },
      {
        "lat": 22.102946,
        "lng": 120.716331,
        "ele": 7,
        "distanceKm": 77.26698320057417,
        "gradePct": -0.3794035651912821,
        "smoothedEle": 7.569185166876926,
        "gradeBand": "descent"
      },
      {
        "lat": 22.102527,
        "lng": 120.716379,
        "ele": 7.5,
        "distanceKm": 77.3138356410804,
        "gradePct": -0.17024224241265642,
        "smoothedEle": 7.548094654320817,
        "gradeBand": "descent"
      },
      {
        "lat": 22.102158,
        "lng": 120.716413,
        "ele": 7.5,
        "distanceKm": 77.35501587116461,
        "gradePct": -0.06865218720761436,
        "smoothedEle": 7.508023736789763,
        "gradeBand": "descent"
      },
      {
        "lat": 22.101789,
        "lng": 120.716447,
        "ele": 7.5,
        "distanceKm": 77.39619610202809,
        "gradePct": -0.026210696783841653,
        "smoothedEle": 7.501234338429423,
        "gradeBand": "descent"
      },
      {
        "lat": 22.101125,
        "lng": 120.716568,
        "ele": 7.5,
        "distanceKm": 77.47107460688254,
        "gradePct": 0.10010347131642786,
        "smoothedEle": 7.767550372874802,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.10052,
        "lng": 120.716692,
        "ele": 7.5,
        "distanceKm": 77.53954987483833,
        "gradePct": 0.3122715148751869,
        "smoothedEle": 8.147616140039489,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.100033,
        "lng": 120.716781,
        "ele": 7.5,
        "distanceKm": 77.59447268064051,
        "gradePct": 0.42304578179537544,
        "smoothedEle": 8.347610043077623,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09952,
        "lng": 120.716768,
        "ele": 9,
        "distanceKm": 77.6515314779442,
        "gradePct": 0.38615043513327657,
        "smoothedEle": 8.470343330161139,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.099139666666666,
        "lng": 120.71673833333334,
        "ele": 9.333333333333371,
        "distanceKm": 77.69393297574685,
        "gradePct": 0.2890040008896032,
        "smoothedEle": 8.472431678810413,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.098759333333334,
        "lng": 120.71670866666666,
        "ele": 9.666666666666629,
        "distanceKm": 77.73633447414342,
        "gradePct": 0.15241855086038886,
        "smoothedEle": 8.434606451695238,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.098379,
        "lng": 120.716679,
        "ele": 10,
        "distanceKm": 77.7787359731337,
        "gradePct": 0.037181504488544986,
        "smoothedEle": 8.364669978963528,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09788,
        "lng": 120.716752,
        "ele": 9,
        "distanceKm": 77.8347297161856,
        "gradePct": -0.10957668398617426,
        "smoothedEle": 8.215049427391824,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09748676527341,
        "lng": 120.71686519583761,
        "ele": 8.451686204255482,
        "distanceKm": 77.87998400391201,
        "gradePct": -0.2128995460354824,
        "smoothedEle": 8.045945575242216,
        "gradeBand": "descent"
      },
      {
        "lat": 22.0971,
        "lng": 120.717003,
        "ele": 7.5,
        "distanceKm": 77.92527331881698,
        "gradePct": -0.29918152362465483,
        "smoothedEle": 7.846110761218689,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09660866666667,
        "lng": 120.71717000000001,
        "ele": 6.916666666666617,
        "distanceKm": 77.9825523829867,
        "gradePct": -0.3499071718228367,
        "smoothedEle": 7.6546578289897615,
        "gradeBand": "descent"
      },
      {
        "lat": 22.096117333333332,
        "lng": 120.717337,
        "ele": 6.333333333333383,
        "distanceKm": 78.0398314651498,
        "gradePct": -0.32834867116901356,
        "smoothedEle": 7.539288136732225,
        "gradeBand": "descent"
      },
      {
        "lat": 22.095626,
        "lng": 120.717504,
        "ele": 5.75,
        "distanceKm": 78.0971105653061,
        "gradePct": -0.1790849284879369,
        "smoothedEle": 7.612206387658661,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09515075,
        "lng": 120.71768725,
        "ele": 6.812499999999862,
        "distanceKm": 78.15322739192798,
        "gradePct": -0.08412042391123911,
        "smoothedEle": 7.584434565901951,
        "gradeBand": "descent"
      },
      {
        "lat": 22.0946755,
        "lng": 120.7178705,
        "ele": 7.875,
        "distanceKm": 78.20934423993924,
        "gradePct": 0.03712596471130239,
        "smoothedEle": 7.6749464584624665,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.09420025,
        "lng": 120.71805375000001,
        "ele": 8.937500000000139,
        "distanceKm": 78.26546110933975,
        "gradePct": 0.06963498761450405,
        "smoothedEle": 7.711185524422298,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.093725,
        "lng": 120.718237,
        "ele": 10,
        "distanceKm": 78.32157800012827,
        "gradePct": 0.0601744996755236,
        "smoothedEle": 7.720446626061702,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.093255,
        "lng": 120.718365,
        "ele": 8.25,
        "distanceKm": 78.37547794193905,
        "gradePct": 0.01967346355134064,
        "smoothedEle": 7.659669812883361,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.092743,
        "lng": 120.718369,
        "ele": 8.25,
        "distanceKm": 78.43241131464721,
        "gradePct": -0.18914212301531205,
        "smoothedEle": 7.311558432601859,
        "gradeBand": "descent"
      },
      {
        "lat": 22.092254,
        "lng": 120.718235,
        "ele": 7.25,
        "distanceKm": 78.48851108535123,
        "gradePct": -0.4252713813113839,
        "smoothedEle": 6.864446753211526,
        "gradeBand": "descent"
      },
      {
        "lat": 22.091922161331354,
        "lng": 120.71809469210642,
        "ele": 6.662296441360987,
        "distanceKm": 78.52814064533486,
        "gradePct": -0.5945912842669676,
        "smoothedEle": 6.523864111474439,
        "gradeBand": "descent"
      },
      {
        "lat": 22.091593,
        "lng": 120.717947,
        "ele": 6,
        "distanceKm": 78.56777897293745,
        "gradePct": -0.7408302540269519,
        "smoothedEle": 6.186690553546165,
        "gradeBand": "descent"
      },
      {
        "lat": 22.09121,
        "lng": 120.717785,
        "ele": 4.75,
        "distanceKm": 78.61352072132108,
        "gradePct": -0.7698250281823802,
        "smoothedEle": 5.887412345250222,
        "gradeBand": "descent"
      },
      {
        "lat": 22.090806,
        "lng": 120.717593,
        "ele": 3.5,
        "distanceKm": 78.66260628149816,
        "gradePct": -0.6666714733728715,
        "smoothedEle": 5.7375634801805715,
        "gradeBand": "descent"
      },
      {
        "lat": 22.090322,
        "lng": 120.717345,
        "ele": 4,
        "distanceKm": 78.72218251513969,
        "gradePct": -0.5137258913357943,
        "smoothedEle": 5.547617432329658,
        "gradeBand": "descent"
      },
      {
        "lat": 22.08988163876688,
        "lng": 120.71715917118993,
        "ele": 4.855396021070013,
        "distanceKm": 78.77475870163337,
        "gradePct": -0.33127446658189913,
        "smoothedEle": 5.478474789263689,
        "gradeBand": "descent"
      },
      {
        "lat": 22.089440366103034,
        "lng": 120.71697586486556,
        "ele": 5.990748098220479,
        "distanceKm": 78.82733539089774,
        "gradePct": -0.1410647791826587,
        "smoothedEle": 5.563109232179465,
        "gradeBand": "descent"
      },
      {
        "lat": 22.089,
        "lng": 120.71679,
        "ele": 6.75,
        "distanceKm": 78.8799134782145,
        "gradePct": 0.04651735601085272,
        "smoothedEle": 5.775417906126656,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.0885445,
        "lng": 120.7165815,
        "ele": 6.500000000000033,
        "distanceKm": 78.93493034662814,
        "gradePct": 0.2751983120169085,
        "smoothedEle": 6.081249455861766,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.088089,
        "lng": 120.716373,
        "ele": 6.25,
        "distanceKm": 78.98994724210539,
        "gradePct": 0.3876159982350538,
        "smoothedEle": 6.278156283782051,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.087689,
        "lng": 120.716215,
        "ele": 7,
        "distanceKm": 79.0373108849098,
        "gradePct": 0.35442009298841304,
        "smoothedEle": 6.312230151323862,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.087351,
        "lng": 120.716107,
        "ele": 7.25,
        "distanceKm": 79.07650755185972,
        "gradePct": 0.2299276308448491,
        "smoothedEle": 6.221520143603246,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.08702,
        "lng": 120.716031,
        "ele": 7,
        "distanceKm": 79.11413691633813,
        "gradePct": 0.04257975639326556,
        "smoothedEle": 6.050821019110844,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.086590602612866,
        "lng": 120.7159214858384,
        "ele": 6.363289758104507,
        "distanceKm": 79.16319900301606,
        "gradePct": -0.2284106913374576,
        "smoothedEle": 5.725602292681215,
        "gradeBand": "descent"
      },
      {
        "lat": 22.086161196328568,
        "lng": 120.7158120125672,
        "ele": 5.726265280893973,
        "distanceKm": 79.21226109158917,
        "gradePct": -0.46774896936531324,
        "smoothedEle": 5.358711146454334,
        "gradeBand": "descent"
      },
      {
        "lat": 22.085731557062857,
        "lng": 120.71570361005375,
        "ele": 5.08101222471514,
        "distanceKm": 79.2613231667367,
        "gradePct": -0.6103230082528548,
        "smoothedEle": 5.036014249942705,
        "gradeBand": "descent"
      },
      {
        "lat": 22.085301917797143,
        "lng": 120.71559520754032,
        "ele": 4.4357591685364985,
        "distanceKm": 79.31038524962122,
        "gradePct": -0.671020173387914,
        "smoothedEle": 4.725799461592814,
        "gradeBand": "descent"
      },
      {
        "lat": 22.084872278531428,
        "lng": 120.71548680502688,
        "ele": 3.790506112357666,
        "distanceKm": 79.35944734024254,
        "gradePct": -0.6561492455779625,
        "smoothedEle": 4.438172515267684,
        "gradeBand": "descent"
      },
      {
        "lat": 22.084442639265713,
        "lng": 120.71537840251344,
        "ele": 3.145253056178833,
        "distanceKm": 79.40850943860087,
        "gradePct": -0.5797946968608031,
        "smoothedEle": 4.227176984484037,
        "gradeBand": "descent"
      },
      {
        "lat": 22.084013,
        "lng": 120.71527,
        "ele": 2.5,
        "distanceKm": 79.45757154469544,
        "gradePct": -0.4740614183858328,
        "smoothedEle": 4.112567026380621,
        "gradeBand": "descent"
      },
      {
        "lat": 22.083388,
        "lng": 120.715119,
        "ele": 3.75,
        "distanceKm": 79.52878877399104,
        "gradePct": -0.25232780080208433,
        "smoothedEle": 4.113253033301971,
        "gradeBand": "descent"
      },
      {
        "lat": 22.082975979980624,
        "lng": 120.7150227032141,
        "ele": 4.177054736623551,
        "distanceKm": 79.57566550097425,
        "gradePct": -0.0822568496792832,
        "smoothedEle": 4.203911301097806,
        "gradeBand": "descent"
      },
      {
        "lat": 22.082564984985467,
        "lng": 120.71492127741057,
        "ele": 4.507791052467612,
        "distanceKm": 79.62254581863507,
        "gradePct": 0.08771023377942919,
        "smoothedEle": 4.369808217016127,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.08215398999031,
        "lng": 120.71481985160705,
        "ele": 4.838527368311776,
        "distanceKm": 79.6694261430755,
        "gradePct": 0.2509832857102192,
        "smoothedEle": 4.614647788378528,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.081742994995157,
        "lng": 120.71471842580353,
        "ele": 5.169263684155837,
        "distanceKm": 79.71630647429537,
        "gradePct": 0.4137733520389689,
        "smoothedEle": 4.94067950040819,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.081332,
        "lng": 120.714617,
        "ele": 5.5,
        "distanceKm": 79.76318681229534,
        "gradePct": 0.5429638514325638,
        "smoothedEle": 5.265705572027765,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.080948,
        "lng": 120.714515,
        "ele": 5.5,
        "distanceKm": 79.80716017957786,
        "gradePct": 0.5636991632652681,
        "smoothedEle": 5.4427608785771895,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.080416,
        "lng": 120.714389,
        "ele": 5.75,
        "distanceKm": 79.86772390136838,
        "gradePct": 0.5076893045191538,
        "smoothedEle": 5.621136183133958,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.079873,
        "lng": 120.7142355,
        "ele": 6.125,
        "distanceKm": 79.93014009086407,
        "gradePct": 0.35851136235960657,
        "smoothedEle": 5.753612072228327,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07933,
        "lng": 120.714082,
        "ele": 6.5,
        "distanceKm": 79.99255629576824,
        "gradePct": 0.23584761934161788,
        "smoothedEle": 5.855654727134603,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.078941743204712,
        "lng": 120.7139682005945,
        "ele": 5.782776855992439,
        "distanceKm": 80.0372926460536,
        "gradePct": 0.17352657841955096,
        "smoothedEle": 5.878561683773295,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.078554464251777,
        "lng": 120.7138505887759,
        "ele": 5.75,
        "distanceKm": 80.0820288991732,
        "gradePct": 0.10877983556450378,
        "smoothedEle": 5.869057645298233,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07816723212589,
        "lng": 120.71373279438795,
        "ele": 5.75,
        "distanceKm": 80.12676524944564,
        "gradePct": 0.03466605923843242,
        "smoothedEle": 5.815781223515559,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.07778,
        "lng": 120.713615,
        "ele": 5.75,
        "distanceKm": 80.17150160874571,
        "gradePct": -0.037290256830961786,
        "smoothedEle": 5.746652444874313,
        "gradeBand": "descent"
      },
      {
        "lat": 22.077329,
        "lng": 120.713607,
        "ele": 6,
        "distanceKm": 80.22165736455928,
        "gradePct": -0.08461850179424348,
        "smoothedEle": 5.701318736183123,
        "gradeBand": "descent"
      },
      {
        "lat": 22.076934,
        "lng": 120.713623,
        "ele": 5.75,
        "distanceKm": 80.26561035296123,
        "gradePct": -0.07246756977628296,
        "smoothedEle": 5.727610560377464,
        "gradeBand": "descent"
      },
      {
        "lat": 22.076440599161828,
        "lng": 120.71368196790978,
        "ele": 5.339476727528919,
        "distanceKm": 80.32080954475407,
        "gradePct": 0.06341549936169598,
        "smoothedEle": 5.949704857941887,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.075947,
        "lng": 120.713739,
        "ele": 5,
        "distanceKm": 80.37600906478838,
        "gradePct": 0.2780448735462837,
        "smoothedEle": 6.298668089286911,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.075399,
        "lng": 120.713792,
        "ele": 5.5,
        "distanceKm": 80.43718821314108,
        "gradePct": 0.43978601373505466,
        "smoothedEle": 6.590181015700898,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.075007000000003,
        "lng": 120.713838,
        "ele": 6.499999999999834,
        "distanceKm": 80.48103365146936,
        "gradePct": 0.4668352103518161,
        "smoothedEle": 6.72333672025106,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.074615,
        "lng": 120.713884,
        "ele": 7.5,
        "distanceKm": 80.52487909121983,
        "gradePct": 0.4255266250582165,
        "smoothedEle": 6.82648518111833,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.073984,
        "lng": 120.713966,
        "ele": 9,
        "distanceKm": 80.59555013508019,
        "gradePct": 0.29370587258079467,
        "smoothedEle": 6.979191208820466,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.073614,
        "lng": 120.713995,
        "ele": 8.5,
        "distanceKm": 80.63680069674062,
        "gradePct": 0.2511718351505525,
        "smoothedEle": 7.090678206556402,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.073247,
        "lng": 120.714,
        "ele": 7.75,
        "distanceKm": 80.67761254350701,
        "gradePct": 0.24427072040858464,
        "smoothedEle": 7.201488481812241,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072587,
        "lng": 120.713959,
        "ele": 7,
        "distanceKm": 80.75112280429235,
        "gradePct": 0.2296108151356336,
        "smoothedEle": 7.342414240013094,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072571920171512,
        "lng": 120.71441497518133,
        "ele": 6.667605145309272,
        "distanceKm": 80.79813887568606,
        "gradePct": 0.172631271906315,
        "smoothedEle": 7.331450285684982,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072558,
        "lng": 120.714871,
        "ele": 6.25,
        "distanceKm": 80.84515564178415,
        "gradePct": 0.058786940293174494,
        "smoothedEle": 7.230937014029778,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072533333333332,
        "lng": 120.71537866666667,
        "ele": 6.583333333333333,
        "distanceKm": 80.89754024152155,
        "gradePct": -0.05296236654266209,
        "smoothedEle": 7.13376693181856,
        "gradeBand": "descent"
      },
      {
        "lat": 22.072508666666668,
        "lng": 120.71588633333333,
        "ele": 6.916666666666667,
        "distanceKm": 80.94992485037882,
        "gradePct": -0.09705730991287925,
        "smoothedEle": 7.146003035169803,
        "gradeBand": "descent"
      },
      {
        "lat": 22.072484,
        "lng": 120.716394,
        "ele": 7.25,
        "distanceKm": 81.00230946835599,
        "gradePct": -0.03361698714991276,
        "smoothedEle": 7.255300344831424,
        "gradeBand": "descent"
      },
      {
        "lat": 22.072451,
        "lng": 120.71693775,
        "ele": 7.499999999999984,
        "distanceKm": 81.05846049395912,
        "gradePct": 0.15288990605110137,
        "smoothedEle": 7.512037176270566,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072418,
        "lng": 120.7174815,
        "ele": 7.750000000000032,
        "distanceKm": 81.11461153262034,
        "gradePct": 0.3251134346532994,
        "smoothedEle": 7.7879813479787305,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072384999999997,
        "lng": 120.71802525,
        "ele": 8.000000000000016,
        "distanceKm": 81.17076258433816,
        "gradePct": 0.3747796522644533,
        "smoothedEle": 7.939039000389328,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072352,
        "lng": 120.718569,
        "ele": 8.25,
        "distanceKm": 81.22691364911546,
        "gradePct": 0.35335992088549506,
        "smoothedEle": 8.074516785560178,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072322,
        "lng": 120.71924,
        "ele": 9.25,
        "distanceKm": 81.29613767720258,
        "gradePct": 0.26249204975537116,
        "smoothedEle": 8.222179010532043,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072291,
        "lng": 120.719598,
        "ele": 8.75,
        "distanceKm": 81.33318871080147,
        "gradePct": 0.23355500182480984,
        "smoothedEle": 8.305067707165836,
        "gradeBand": "moderate"
      },
      {
        "lat": 22.072264,
        "lng": 120.720304,
        "ele": 7.75,
        "distanceKm": 81.40600086577899,
        "gradePct": 0.2163520895515912,
        "smoothedEle": 8.456763906023074,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 81.40600086577899,
      "elevationGainM": 731.0243377169654,
      "elevationLossM": 730.3441739920215,
      "minimumElevationM": 2.5,
      "maximumElevationM": 468,
      "maximumSustainedGradePct": 7.320572229964246
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 67,
        "startDistanceKm": 0,
        "endDistanceKm": 3.299073165214158,
        "distanceKm": 3.299073165214158,
        "gainM": 47.99151442734311,
        "averageGradePct": 1.4546968807291596,
        "maximumGradePct": 4.330224083308767
      },
      {
        "startIndex": 76,
        "endIndex": 342,
        "startDistanceKm": 3.683772399794726,
        "endDistanceKm": 13.951946126804657,
        "distanceKm": 10.26817372700993,
        "gainM": 158.82018918699387,
        "averageGradePct": 1.5467228487693492,
        "maximumGradePct": 7.272567403033787
      },
      {
        "startIndex": 382,
        "endIndex": 470,
        "startDistanceKm": 15.302536726764414,
        "endDistanceKm": 18.86509285984057,
        "distanceKm": 3.5625561330761553,
        "gainM": 133.570783864526,
        "averageGradePct": 3.7492962601880975,
        "maximumGradePct": 7.320572229964246
      },
      {
        "startIndex": 508,
        "endIndex": 1149,
        "startDistanceKm": 20.023132022054217,
        "endDistanceKm": 41.71290250516043,
        "distanceKm": 21.689770483106212,
        "gainM": 326.8611981665649,
        "averageGradePct": 1.5069832040000215,
        "maximumGradePct": 6.340352417366854
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
