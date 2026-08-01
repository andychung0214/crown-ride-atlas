"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("hualien", {
  "hualien-qixingtan": {
    "routeId": "hualien-qixingtan",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T17:04:41.438Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "f93cc4252aeda5148542c4407c2b3ac005d197583796194970cb1a85c7e3d701",
      "roadPolicyAuditSha256": "522cd8ec94b05753bc19fa65346b221c539be998ff3d766e1eac369960f87043",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "七星潭與花蓮濱海路線平緩，預設100公尺分析為爬升105公尺、最大持續坡度6.2%。比較500/200、750/300、1000/500公尺後，爬升依序為82、76、68公尺，最大持續坡度依序為4.3%、3.0%、1.6%；官方兩潭自行車道資料確認本區為海岸自行車路線，500/200可抑制橋梁與海岸SRTM短尖峰並保留市區緩坡，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://tour-hualien.hl.gov.tw/TourContent.aspx?n=36&s=73",
        "referenceLabel": "花蓮觀光資訊網兩潭自行車道官方資料"
      },
      "reviewedAt": "2026-07-29T17:35:00.000Z",
      "reviewerNote": "初版奇萊鼻與四八高地景點定位導入1146公尺service、336公尺paved track與190公尺footway；即使部分service帶route_bicycle_ncn，仍屬不必要景點支線，故未採例外。核准版僅使用花蓮港濱海公共道路、海岸路secondary、七星潭大橋與七星街公共道路到兩潭自行車道公路入口，不進木棧、礫石灘、東13坑道、燈塔或軍事服務道路；raw所有特殊類別、私人與禁制道路為0。live OSM五點取樣5/5均貼合一般公共道路，最大0.0公尺、禁止0。最終500/200公尺bundle為11.1公里、爬升83公尺、最大4.2%。"
    },
    "waypoints": [
      {
        "name": "花蓮港濱海公共道路",
        "lat": 23.99852,
        "lng": 121.63483,
        "role": "start"
      },
      {
        "name": "七星潭南側海岸路",
        "lat": 24.0238743,
        "lng": 121.6298031,
        "role": "via"
      },
      {
        "name": "七星潭兩潭自行車道公路入口",
        "lat": 24.0279328,
        "lng": 121.6282194,
        "role": "via"
      },
      {
        "name": "花蓮市府前公共道路",
        "lat": 23.99115,
        "lng": 121.6212,
        "role": "via"
      },
      {
        "name": "花蓮港濱海公共道路",
        "lat": 23.99852,
        "lng": 121.63483,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.998536,
        "lng": 121.634956,
        "ele": 4.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 5.5332677280657965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.998967163607833,
        "lng": 121.63489247547217,
        "ele": 5.095241273566739,
        "distanceKm": 0.04837559802046964,
        "gradePct": 0.29272728476485066,
        "smoothedEle": 5.674876302639876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.999398330886265,
        "lng": 121.63482898037773,
        "ele": 5.376193018853391,
        "distanceKm": 0.09675119892196962,
        "gradePct": 0.32226091515128147,
        "smoothedEle": 5.8450590271315725,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9998294981647,
        "lng": 121.6347654852833,
        "ele": 5.657144764140043,
        "distanceKm": 0.14512679694259387,
        "gradePct": 0.37068054071464646,
        "smoothedEle": 6.07122452369445,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.000260665443133,
        "lng": 121.63470199018887,
        "ele": 5.938096509426696,
        "distanceKm": 0.19350239208132763,
        "gradePct": 0.43303007873029437,
        "smoothedEle": 6.371191288840572,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.000691832721568,
        "lng": 121.63463849509444,
        "ele": 6.219048254713348,
        "distanceKm": 0.24187798433929972,
        "gradePct": 0.5375510167112463,
        "smoothedEle": 6.73095804795897,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.001123,
        "lng": 121.634575,
        "ele": 6.5,
        "distanceKm": 0.29025357371549537,
        "gradePct": 0.7465665806173374,
        "smoothedEle": 7.315333897414673,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.001438,
        "lng": 121.63447,
        "ele": 7,
        "distanceKm": 0.32686798782668436,
        "gradePct": 0.913659883773764,
        "smoothedEle": 7.8131807443441,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.001925976984587,
        "lng": 121.63444973182085,
        "ele": 7.814739245710462,
        "distanceKm": 0.38116767395046414,
        "gradePct": 1.0470258733413438,
        "smoothedEle": 8.388758074747205,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.00241598465639,
        "lng": 121.63438648788058,
        "ele": 9.209826163806975,
        "distanceKm": 0.4360315447740581,
        "gradePct": 1.08640765271819,
        "smoothedEle": 8.86029368696456,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.002905992328195,
        "lng": 121.63432324394029,
        "ele": 10.604913081903486,
        "distanceKm": 0.4908954127331205,
        "gradePct": 0.9908161168865464,
        "smoothedEle": 9.305693227849495,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.003396,
        "lng": 121.63426,
        "ele": 12,
        "distanceKm": 0.545759277827438,
        "gradePct": 0.8557640301407279,
        "smoothedEle": 9.724956707379874,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.003869,
        "lng": 121.634499,
        "ele": 10.75,
        "distanceKm": 0.6036872738409724,
        "gradePct": 0.7721402464831097,
        "smoothedEle": 10.126586583226288,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.00424802826232,
        "lng": 121.63479538018466,
        "ele": 10.033989894984446,
        "distanceKm": 0.6554816305216191,
        "gradePct": 0.7053937066448039,
        "smoothedEle": 10.428982093829765,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.004616685508214,
        "lng": 121.63510758678977,
        "ele": 10.105993263322963,
        "distanceKm": 0.7073097653582102,
        "gradePct": 0.600664870304106,
        "smoothedEle": 10.632459603007659,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.004985342754107,
        "lng": 121.63541979339489,
        "ele": 10.177996631661482,
        "distanceKm": 0.7591378445920114,
        "gradePct": 0.4597131183123918,
        "smoothedEle": 10.737140030015421,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.005354,
        "lng": 121.635732,
        "ele": 10.25,
        "distanceKm": 0.810965868222319,
        "gradePct": 0.2869709587412243,
        "smoothedEle": 10.743023753193363,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0057076,
        "lng": 121.636041,
        "ele": 10.6,
        "distanceKm": 0.8612761114173765,
        "gradePct": 0.20821023920375298,
        "smoothedEle": 10.868151732386773,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0060612,
        "lng": 121.63635000000001,
        "ele": 10.95,
        "distanceKm": 0.9115863007925324,
        "gradePct": 0.28538514587209557,
        "smoothedEle": 11.211867481982495,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.006414799999998,
        "lng": 121.636659,
        "ele": 11.3,
        "distanceKm": 0.9618964363459223,
        "gradePct": 0.5488578222925201,
        "smoothedEle": 11.835168840897458,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0067684,
        "lng": 121.636968,
        "ele": 11.65,
        "distanceKm": 1.012206518079309,
        "gradePct": 0.9667365852476444,
        "smoothedEle": 12.679582577814589,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.007122,
        "lng": 121.637277,
        "ele": 12,
        "distanceKm": 1.0625165459908277,
        "gradePct": 1.4310337755562839,
        "smoothedEle": 13.738693847092392,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.007498,
        "lng": 121.63759,
        "ele": 12.75,
        "distanceKm": 1.1150411565299492,
        "gradePct": 1.9015807125966109,
        "smoothedEle": 15.05783173909617,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.007945,
        "lng": 121.637936,
        "ele": 15.75,
        "distanceKm": 1.175915545679966,
        "gradePct": 2.292868696502587,
        "smoothedEle": 16.65620556344345,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.008207585306312,
        "lng": 121.63756157280396,
        "ele": 17.93821088592554,
        "distanceKm": 1.2238635609524584,
        "gradePct": 2.446800055083208,
        "smoothedEle": 17.81858317742459,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.00847005903239,
        "lng": 121.6371870503807,
        "ele": 20.04374224671919,
        "distanceKm": 1.27181163425807,
        "gradePct": 2.4628594643739934,
        "smoothedEle": 18.89785578506948,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.008732529516195,
        "lng": 121.63681252519035,
        "ele": 22.146871123359595,
        "distanceKm": 1.3197596495304422,
        "gradePct": 2.344321604533486,
        "smoothedEle": 19.870368030420902,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.008995,
        "lng": 121.636438,
        "ele": 24.25,
        "distanceKm": 1.3677076032166269,
        "gradePct": 2.1357162884704186,
        "smoothedEle": 20.712122870854127,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.009240666666667,
        "lng": 121.63608966666666,
        "ele": 23.75,
        "distanceKm": 1.412407564651959,
        "gradePct": 1.8782908187709144,
        "smoothedEle": 21.29744333744802,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.00948633333333,
        "lng": 121.63574133333333,
        "ele": 23.25,
        "distanceKm": 1.4571074726001427,
        "gradePct": 1.56163219430656,
        "smoothedEle": 21.690141308387382,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.009732,
        "lng": 121.635393,
        "ele": 22.75,
        "distanceKm": 1.5018073270611842,
        "gradePct": 1.2206701698682887,
        "smoothedEle": 21.94758790897312,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.009985712030197,
        "lng": 121.63502821848103,
        "ele": 21.974768796625593,
        "distanceKm": 1.5483773178384268,
        "gradePct": 0.8501648135932068,
        "smoothedEle": 22.07309784297955,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.01023942406039,
        "lng": 121.63466343696206,
        "ele": 21.199537593251186,
        "distanceKm": 1.5949472504681954,
        "gradePct": 0.4942417809264265,
        "smoothedEle": 22.057294056749058,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.010493136090588,
        "lng": 121.63429865544309,
        "ele": 20.42430638987678,
        "distanceKm": 1.6415171249504326,
        "gradePct": 0.1738839729037594,
        "smoothedEle": 21.90094481356613,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.010747,
        "lng": 121.633934,
        "ele": 20.5,
        "distanceKm": 1.6880869880753475,
        "gradePct": -0.02266362438868797,
        "smoothedEle": 21.823239046515408,
        "gradeBand": "descent"
      },
      {
        "lat": 24.011123322489183,
        "lng": 121.6342515145375,
        "ele": 21.105020079077367,
        "distanceKm": 1.7409182757881514,
        "gradePct": -0.13791087816407457,
        "smoothedEle": 21.77717335826652,
        "gradeBand": "descent"
      },
      {
        "lat": 24.01149964497837,
        "lng": 121.634569029075,
        "ele": 21.710040158154737,
        "distanceKm": 1.7937495058989197,
        "gradePct": -0.12495104566442809,
        "smoothedEle": 21.8077984272307,
        "gradeBand": "descent"
      },
      {
        "lat": 24.011875967467557,
        "lng": 121.6348865436125,
        "ele": 22.315060237232103,
        "distanceKm": 1.8465806784062833,
        "gradePct": 0.07401956996804772,
        "smoothedEle": 22.040534985030195,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.01225228995674,
        "lng": 121.63520405815,
        "ele": 22.920080316309473,
        "distanceKm": 1.8994117933098111,
        "gradePct": 0.3310090549585284,
        "smoothedEle": 22.475382611063704,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.012628642677747,
        "lng": 121.63552153215917,
        "ele": 22.767679461061093,
        "distanceKm": 1.9522430005459308,
        "gradePct": 0.6324429756113494,
        "smoothedEle": 23.048623996247034,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.013005,
        "lng": 121.635839,
        "ele": 22.5,
        "distanceKm": 2.005074173057146,
        "gradePct": 0.9116231562997543,
        "smoothedEle": 23.680933166066882,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.013351333333333,
        "lng": 121.63612133333334,
        "ele": 23.45833333333333,
        "distanceKm": 2.0530890935588793,
        "gradePct": 1.1020225690705685,
        "smoothedEle": 24.2981502377433,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.013697666666665,
        "lng": 121.63640366666667,
        "ele": 24.416666666666664,
        "distanceKm": 2.101103967937699,
        "gradePct": 1.2228258690002678,
        "smoothedEle": 24.939395173630054,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.014044,
        "lng": 121.636686,
        "ele": 25.374999999999996,
        "distanceKm": 2.1491187961930596,
        "gradePct": 1.3138393214502515,
        "smoothedEle": 25.642403674415736,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.014390333333335,
        "lng": 121.63696833333334,
        "ele": 26.333333333333332,
        "distanceKm": 2.1971335783255936,
        "gradePct": 1.4169709891250943,
        "smoothedEle": 26.41983824424604,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.014736666666668,
        "lng": 121.63725066666667,
        "ele": 27.291666666666664,
        "distanceKm": 2.245148314332398,
        "gradePct": 1.5645120994460506,
        "smoothedEle": 27.3250981559755,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.015083,
        "lng": 121.637533,
        "ele": 28.25,
        "distanceKm": 2.293163004214105,
        "gradePct": 1.7473091066374438,
        "smoothedEle": 28.327960776340134,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.015199,
        "lng": 121.637598,
        "ele": 28.5,
        "distanceKm": 2.307653053730368,
        "gradePct": 1.7990878949266913,
        "smoothedEle": 28.633459320308017,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.015353,
        "lng": 121.637606,
        "ele": 28.75,
        "distanceKm": 2.324796363692341,
        "gradePct": 1.8543051760878486,
        "smoothedEle": 28.99489743867295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.015739,
        "lng": 121.637542,
        "ele": 29.75,
        "distanceKm": 2.368207121448208,
        "gradePct": 1.947318904102506,
        "smoothedEle": 29.84611138306422,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.01603,
        "lng": 121.637654,
        "ele": 30.5,
        "distanceKm": 2.402506289300087,
        "gradePct": 1.9791464213505545,
        "smoothedEle": 30.47942706953525,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.01625,
        "lng": 121.637855,
        "ele": 31.25,
        "distanceKm": 2.4343688341416225,
        "gradePct": 1.96472724846932,
        "smoothedEle": 31.051318560684457,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0166,
        "lng": 121.63814450000001,
        "ele": 32.375,
        "distanceKm": 2.4831462601516523,
        "gradePct": 1.875664291041897,
        "smoothedEle": 31.870073840782517,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.01695,
        "lng": 121.638434,
        "ele": 33.5,
        "distanceKm": 2.5319236379144083,
        "gradePct": 1.7463943362640042,
        "smoothedEle": 32.62744029926288,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.017118,
        "lng": 121.638495,
        "ele": 34,
        "distanceKm": 2.5516050399534436,
        "gradePct": 1.6967805759189774,
        "smoothedEle": 32.91413287596006,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.017299,
        "lng": 121.638445,
        "ele": 34,
        "distanceKm": 2.5723621729195854,
        "gradePct": 1.6439565386893702,
        "smoothedEle": 33.21074525105461,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0175775,
        "lng": 121.6380745,
        "ele": 34.34375,
        "distanceKm": 2.621097110810989,
        "gradePct": 1.5243956274572619,
        "smoothedEle": 33.861899538189455,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.017856000000002,
        "lng": 121.637704,
        "ele": 34.6875,
        "distanceKm": 2.669831985767247,
        "gradePct": 1.3989441006993624,
        "smoothedEle": 34.44447479931884,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.018134500000002,
        "lng": 121.6373335,
        "ele": 35.03125,
        "distanceKm": 2.7185667977877266,
        "gradePct": 1.2630176695529964,
        "smoothedEle": 34.946083950516446,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.018413,
        "lng": 121.63696300000001,
        "ele": 35.375,
        "distanceKm": 2.767301546870432,
        "gradePct": 1.1140405452184785,
        "smoothedEle": 35.36651171526871,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0186915,
        "lng": 121.6365925,
        "ele": 35.71875,
        "distanceKm": 2.8160362330174618,
        "gradePct": 0.9531642844605868,
        "smoothedEle": 35.70060901463812,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.01897,
        "lng": 121.636222,
        "ele": 36.0625,
        "distanceKm": 2.8647708562268197,
        "gradePct": 0.8197428735864201,
        "smoothedEle": 36.023459952896836,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0192485,
        "lng": 121.6358515,
        "ele": 36.40625,
        "distanceKm": 2.9135054164978738,
        "gradePct": 0.7222183842202796,
        "smoothedEle": 36.33842581867046,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.019527,
        "lng": 121.635481,
        "ele": 36.75,
        "distanceKm": 2.962239913829993,
        "gradePct": 0.6613304535541568,
        "smoothedEle": 36.645506632395694,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0197915,
        "lng": 121.63512983333334,
        "ele": 37,
        "distanceKm": 3.0084689582598916,
        "gradePct": 0.6407821704167945,
        "smoothedEle": 36.93029642222414,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.020056,
        "lng": 121.63477866666666,
        "ele": 37.25,
        "distanceKm": 3.0546979460800725,
        "gradePct": 0.6377717974866565,
        "smoothedEle": 37.2322738128745,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0203205,
        "lng": 121.6344275,
        "ele": 37.5,
        "distanceKm": 3.1009268772877685,
        "gradePct": 0.6507942325852086,
        "smoothedEle": 37.55872062959544,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.020585,
        "lng": 121.63407633333334,
        "ele": 37.75,
        "distanceKm": 3.1471557518835542,
        "gradePct": 0.6955460157006137,
        "smoothedEle": 37.941551890393086,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0208495,
        "lng": 121.63372516666666,
        "ele": 38,
        "distanceKm": 3.193384569868004,
        "gradePct": 0.7920398397669957,
        "smoothedEle": 38.42145011004029,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.021114,
        "lng": 121.633374,
        "ele": 38.25,
        "distanceKm": 3.2396133312383513,
        "gradePct": 0.9323072018189392,
        "smoothedEle": 38.998352366093435,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.021420178963588,
        "lng": 121.6329096063377,
        "ele": 38.8766479698761,
        "distanceKm": 3.2977833062416435,
        "gradePct": 1.1728729254047279,
        "smoothedEle": 39.88226807057074,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.02178,
        "lng": 121.632489,
        "ele": 39.75,
        "distanceKm": 3.3563129456668577,
        "gradePct": 1.3447272971573792,
        "smoothedEle": 40.72606669141808,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0220695,
        "lng": 121.63211125000001,
        "ele": 41.25,
        "distanceKm": 3.406394943883882,
        "gradePct": 1.2685309041386528,
        "smoothedEle": 41.12087218710623,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.022358999999998,
        "lng": 121.63173350000001,
        "ele": 42.74999999999999,
        "distanceKm": 3.456476875914194,
        "gradePct": 0.9771621521330182,
        "smoothedEle": 41.208924880390306,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.0226485,
        "lng": 121.63135575,
        "ele": 44.25,
        "distanceKm": 3.506558741758719,
        "gradePct": 0.5313751238699953,
        "smoothedEle": 41.07153029513752,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.022938,
        "lng": 121.630978,
        "ele": 45.75,
        "distanceKm": 3.5566405414143025,
        "gradePct": -0.055356456677657165,
        "smoothedEle": 40.61793627488917,
        "gradeBand": "descent"
      },
      {
        "lat": 24.023218500000002,
        "lng": 121.63059899999999,
        "ele": 42.999999999999986,
        "distanceKm": 3.6061835381412943,
        "gradePct": -0.6252416355275189,
        "smoothedEle": 39.86872236615372,
        "gradeBand": "descent"
      },
      {
        "lat": 24.023499,
        "lng": 121.63022,
        "ele": 40.25,
        "distanceKm": 3.655726469608287,
        "gradePct": -1.2208351206397117,
        "smoothedEle": 38.765935295115675,
        "gradeBand": "descent"
      },
      {
        "lat": 24.023769,
        "lng": 121.629906,
        "ele": 37.75,
        "distanceKm": 3.6995258384807896,
        "gradePct": -1.8154152063929223,
        "smoothedEle": 37.459993948431276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.024069,
        "lng": 121.629685,
        "ele": 36.5,
        "distanceKm": 3.739732639654444,
        "gradePct": -2.387658980710663,
        "smoothedEle": 35.995754246800125,
        "gradeBand": "descent"
      },
      {
        "lat": 24.024678,
        "lng": 121.629638,
        "ele": 33,
        "distanceKm": 3.8076184752224655,
        "gradePct": -3.4571188010982863,
        "smoothedEle": 32.92254418204138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.02510488757934,
        "lng": 121.62965843507982,
        "ele": 30.661496713646013,
        "distanceKm": 3.8551316240928877,
        "gradePct": -4.121772450062398,
        "smoothedEle": 30.53563119290539,
        "gradeBand": "descent"
      },
      {
        "lat": 24.02553,
        "lng": 121.629717,
        "ele": 28.25,
        "distanceKm": 3.902774774959709,
        "gradePct": -4.586166164447887,
        "smoothedEle": 28.169342786859293,
        "gradeBand": "descent"
      },
      {
        "lat": 24.02586,
        "lng": 121.629666,
        "ele": 26.25,
        "distanceKm": 3.9398329168748334,
        "gradePct": -4.807443354998097,
        "smoothedEle": 26.376327960022007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.026336,
        "lng": 121.629414,
        "ele": 23.5,
        "distanceKm": 3.9986248095443835,
        "gradePct": -4.791371172001801,
        "smoothedEle": 23.746947506198,
        "gradeBand": "descent"
      },
      {
        "lat": 24.026745691678666,
        "lng": 121.62913290799389,
        "ele": 20.73021771346249,
        "distanceKm": 4.052386375343946,
        "gradePct": -4.372168436119426,
        "smoothedEle": 21.929207089090447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.027142779940938,
        "lng": 121.6288302552556,
        "ele": 18.025033432926545,
        "distanceKm": 4.106185968490695,
        "gradePct": -3.64641682082312,
        "smoothedEle": 20.71146253838971,
        "gradeBand": "descent"
      },
      {
        "lat": 24.027539868203206,
        "lng": 121.6285276025173,
        "ele": 15.319849152390555,
        "distanceKm": 4.15998550737964,
        "gradePct": -2.6931160425873144,
        "smoothedEle": 20.088801067668925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.027933,
        "lng": 121.628219,
        "ele": 14.25,
        "distanceKm": 4.213774349043871,
        "gradePct": -1.5923369025103118,
        "smoothedEle": 20.050050334182185,
        "gradeBand": "descent"
      },
      {
        "lat": 24.027601717349107,
        "lng": 121.62848046233425,
        "ele": 16.77563489515376,
        "distanceKm": 4.259184516234575,
        "gradePct": -0.6129003693059326,
        "smoothedEle": 20.549531599012,
        "gradeBand": "descent"
      },
      {
        "lat": 24.02726647823274,
        "lng": 121.62873597488951,
        "ele": 19.26708993010254,
        "distanceKm": 4.304604407332512,
        "gradePct": 0.33373688576736854,
        "smoothedEle": 21.414734675103972,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.02693123911637,
        "lng": 121.62899148744475,
        "ele": 21.75854496505127,
        "distanceKm": 4.350024337101955,
        "gradePct": 1.2917314214089728,
        "smoothedEle": 22.78755183048201,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.026596,
        "lng": 121.629247,
        "ele": 24.25,
        "distanceKm": 4.395444305543465,
        "gradePct": 2.2037523561948102,
        "smoothedEle": 24.4707604365469,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.02623368907173,
        "lng": 121.62946816460908,
        "ele": 26.698551506036782,
        "distanceKm": 4.441570055498815,
        "gradePct": 3.0361679567271223,
        "smoothedEle": 26.428120304035055,
        "gradeBand": "hard"
      },
      {
        "lat": 24.02586,
        "lng": 121.629666,
        "ele": 29.25,
        "distanceKm": 4.487725285444262,
        "gradePct": 3.7179998368627007,
        "smoothedEle": 28.529204115567577,
        "gradeBand": "hard"
      },
      {
        "lat": 24.02553,
        "lng": 121.629717,
        "ele": 31.25,
        "distanceKm": 4.524783427359386,
        "gradePct": 4.034601743439664,
        "smoothedEle": 30.093848943709062,
        "gradeBand": "hard"
      },
      {
        "lat": 24.024913,
        "lng": 121.629632,
        "ele": 35,
        "distanceKm": 4.593931782001841,
        "gradePct": 4.1925866502238485,
        "smoothedEle": 32.799881460220874,
        "gradeBand": "hard"
      },
      {
        "lat": 24.024490741029155,
        "lng": 121.62965245184175,
        "ele": 36.326871498705685,
        "distanceKm": 4.640930824347431,
        "gradePct": 4.0088183836260445,
        "smoothedEle": 34.418631107959115,
        "gradeBand": "hard"
      },
      {
        "lat": 24.024069,
        "lng": 121.629685,
        "ele": 36.5,
        "distanceKm": 4.687942716400833,
        "gradePct": 3.6282816030939533,
        "smoothedEle": 35.7949475505553,
        "gradeBand": "hard"
      },
      {
        "lat": 24.023689571190506,
        "lng": 121.62937958397579,
        "ele": 37.63284875446069,
        "distanceKm": 4.740308952262801,
        "gradePct": 3.154779900250701,
        "smoothedEle": 37.01098032623563,
        "gradeBand": "hard"
      },
      {
        "lat": 24.02331014238101,
        "lng": 121.6290741679516,
        "ele": 38.765697508921384,
        "distanceKm": 4.792675242358636,
        "gradePct": 2.5787676335931145,
        "smoothedEle": 37.908243653797776,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.02293071357152,
        "lng": 121.6287687519274,
        "ele": 39.898546263382094,
        "distanceKm": 4.845041586689029,
        "gradePct": 1.949152235029173,
        "smoothedEle": 38.437281931997845,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.022551388931895,
        "lng": 121.62846318366663,
        "ele": 40.00754303234077,
        "distanceKm": 4.89740781520772,
        "gradePct": 1.3550470931923495,
        "smoothedEle": 38.72483737786722,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.022172111145515,
        "lng": 121.6281575469333,
        "ele": 39.65603442587262,
        "distanceKm": 4.949774023864178,
        "gradePct": 0.8372559219516298,
        "smoothedEle": 38.84767019774259,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.021792833359136,
        "lng": 121.62785191019998,
        "ele": 39.30452581940447,
        "distanceKm": 5.002140286808741,
        "gradePct": 0.32481732910619926,
        "smoothedEle": 38.65350024023525,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.02141355557276,
        "lng": 121.62754627346665,
        "ele": 38.9530172129363,
        "distanceKm": 5.054506604042101,
        "gradePct": -0.1867751362920272,
        "smoothedEle": 38.11570632633395,
        "gradeBand": "descent"
      },
      {
        "lat": 24.02103427778638,
        "lng": 121.62724063673333,
        "ele": 38.60150860646815,
        "distanceKm": 5.10687297556248,
        "gradePct": -0.7563757961105175,
        "smoothedEle": 37.23428774310648,
        "gradeBand": "descent"
      },
      {
        "lat": 24.020655,
        "lng": 121.626935,
        "ele": 38.25,
        "distanceKm": 5.159239401370569,
        "gradePct": -1.3627434446425704,
        "smoothedEle": 36.08708643797515,
        "gradeBand": "descent"
      },
      {
        "lat": 24.0203124,
        "lng": 121.6266632,
        "ele": 36.300000000000004,
        "distanceKm": 5.2062854128217015,
        "gradePct": -1.8006164544947638,
        "smoothedEle": 35.00969753333173,
        "gradeBand": "descent"
      },
      {
        "lat": 24.019969800000002,
        "lng": 121.6263914,
        "ele": 34.350000000000016,
        "distanceKm": 5.253331467437041,
        "gradePct": -2.1176660502715396,
        "smoothedEle": 33.892442695517076,
        "gradeBand": "descent"
      },
      {
        "lat": 24.0196272,
        "lng": 121.6261196,
        "ele": 32.399999999999984,
        "distanceKm": 5.300377565218099,
        "gradePct": -2.3156152105598675,
        "smoothedEle": 32.712386557849435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.0192846,
        "lng": 121.6258478,
        "ele": 30.449999999999992,
        "distanceKm": 5.347423706162037,
        "gradePct": -2.4271040722583734,
        "smoothedEle": 31.491726988115122,
        "gradeBand": "descent"
      },
      {
        "lat": 24.018942,
        "lng": 121.625576,
        "ele": 28.5,
        "distanceKm": 5.394469890270366,
        "gradePct": -2.5191294598078318,
        "smoothedEle": 30.242022931211206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.018551,
        "lng": 121.625274,
        "ele": 28.25,
        "distanceKm": 5.4476781607981435,
        "gradePct": -2.589804235773021,
        "smoothedEle": 28.847089566817544,
        "gradeBand": "descent"
      },
      {
        "lat": 24.018205000000002,
        "lng": 121.624991,
        "ele": 27.25,
        "distanceKm": 5.495703160750378,
        "gradePct": -2.555125514549267,
        "smoothedEle": 27.719383503444693,
        "gradeBand": "descent"
      },
      {
        "lat": 24.017859,
        "lng": 121.624708,
        "ele": 26.25,
        "distanceKm": 5.543728206995745,
        "gradePct": -2.432772501529031,
        "smoothedEle": 26.722065437594765,
        "gradeBand": "descent"
      },
      {
        "lat": 24.017547,
        "lng": 121.624419,
        "ele": 25.650000000000006,
        "distanceKm": 5.589172664413489,
        "gradePct": -2.2163710972707094,
        "smoothedEle": 25.949992778871383,
        "gradeBand": "descent"
      },
      {
        "lat": 24.017235,
        "lng": 121.62413,
        "ele": 25.049999999999997,
        "distanceKm": 5.634617167836683,
        "gradePct": -1.9277275444544095,
        "smoothedEle": 25.334047690616718,
        "gradeBand": "descent"
      },
      {
        "lat": 24.016923000000002,
        "lng": 121.623841,
        "ele": 24.450000000000003,
        "distanceKm": 5.680061717262663,
        "gradePct": -1.6541376319224228,
        "smoothedEle": 24.77839508350498,
        "gradeBand": "descent"
      },
      {
        "lat": 24.016611,
        "lng": 121.62355199999999,
        "ele": 23.849999999999994,
        "distanceKm": 5.7255063126934,
        "gradePct": -1.459995527393782,
        "smoothedEle": 24.180481605756817,
        "gradeBand": "descent"
      },
      {
        "lat": 24.016299,
        "lng": 121.623263,
        "ele": 23.25,
        "distanceKm": 5.770950954126231,
        "gradePct": -1.3251026951268094,
        "smoothedEle": 23.609362749561058,
        "gradeBand": "descent"
      },
      {
        "lat": 24.016025499999998,
        "lng": 121.62299949999999,
        "ele": 23.25,
        "distanceKm": 5.811462213498997,
        "gradePct": -1.247136956027684,
        "smoothedEle": 23.15361108161745,
        "gradeBand": "descent"
      },
      {
        "lat": 24.015752,
        "lng": 121.622736,
        "ele": 23.25,
        "distanceKm": 5.851973510476173,
        "gradePct": -1.2049400543782844,
        "smoothedEle": 22.71195077787872,
        "gradeBand": "descent"
      },
      {
        "lat": 24.015435333333333,
        "lng": 121.62245266666667,
        "ele": 22.499999999999996,
        "distanceKm": 5.897449251223122,
        "gradePct": -1.164909421451443,
        "smoothedEle": 22.219808863508646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.015118666666666,
        "lng": 121.62216933333333,
        "ele": 21.750000000000004,
        "distanceKm": 5.942925036816627,
        "gradePct": -1.115848471231332,
        "smoothedEle": 21.729877406376957,
        "gradeBand": "descent"
      },
      {
        "lat": 24.014802,
        "lng": 121.621886,
        "ele": 21,
        "distanceKm": 5.98840086725437,
        "gradePct": -1.0854474077785534,
        "smoothedEle": 21.242156411312394,
        "gradeBand": "descent"
      },
      {
        "lat": 24.014453500000002,
        "lng": 121.6215695,
        "ele": 20.625000000000004,
        "distanceKm": 6.038750697553523,
        "gradePct": -1.077582174858592,
        "smoothedEle": 20.700943540065122,
        "gradeBand": "descent"
      },
      {
        "lat": 24.014105,
        "lng": 121.621253,
        "ele": 20.25,
        "distanceKm": 6.0891005834752,
        "gradePct": -1.102131160226464,
        "smoothedEle": 20.10589645842632,
        "gradeBand": "descent"
      },
      {
        "lat": 24.013741714285715,
        "lng": 121.62092528571428,
        "ele": 19.571428571428577,
        "distanceKm": 6.141443431614272,
        "gradePct": -1.1518525164680316,
        "smoothedEle": 19.442134384568575,
        "gradeBand": "descent"
      },
      {
        "lat": 24.01337842857143,
        "lng": 121.62059757142858,
        "ele": 18.89285714285714,
        "distanceKm": 6.193786339546883,
        "gradePct": -1.1940587552984807,
        "smoothedEle": 18.79615018678857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.013015142857142,
        "lng": 121.62026985714286,
        "ele": 18.21428571428571,
        "distanceKm": 6.246129307274119,
        "gradePct": -1.2186305466413028,
        "smoothedEle": 18.17648025951992,
        "gradeBand": "descent"
      },
      {
        "lat": 24.01265185714286,
        "lng": 121.61994214285714,
        "ele": 17.53571428571429,
        "distanceKm": 6.298472334794006,
        "gradePct": -1.205769555410508,
        "smoothedEle": 17.575513736449064,
        "gradeBand": "descent"
      },
      {
        "lat": 24.012288571428574,
        "lng": 121.61961442857142,
        "ele": 16.85714285714286,
        "distanceKm": 6.350815422106404,
        "gradePct": -1.1757277854464734,
        "smoothedEle": 16.9750154315904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.011925285714288,
        "lng": 121.61928671428572,
        "ele": 16.178571428571423,
        "distanceKm": 6.40315856920934,
        "gradePct": -1.1439775518839468,
        "smoothedEle": 16.397240562758398,
        "gradeBand": "descent"
      },
      {
        "lat": 24.011562,
        "lng": 121.618959,
        "ele": 15.5,
        "distanceKm": 6.4555017761038975,
        "gradePct": -1.106883204687068,
        "smoothedEle": 15.855105630443894,
        "gradeBand": "descent"
      },
      {
        "lat": 24.011204084788087,
        "lng": 121.6186205270959,
        "ele": 15.113363197004947,
        "distanceKm": 6.508093339650934,
        "gradePct": -1.0496095039671607,
        "smoothedEle": 15.365919177429252,
        "gradeBand": "descent"
      },
      {
        "lat": 24.01084616957617,
        "lng": 121.6182820541918,
        "ele": 14.7267263940099,
        "distanceKm": 6.560684965738068,
        "gradePct": -0.9588147199495536,
        "smoothedEle": 14.94844385517813,
        "gradeBand": "descent"
      },
      {
        "lat": 24.010488254364255,
        "lng": 121.61794358128768,
        "ele": 14.340089591014847,
        "distanceKm": 6.613276654364869,
        "gradePct": -0.8448822796753339,
        "smoothedEle": 14.602679837173683,
        "gradeBand": "descent"
      },
      {
        "lat": 24.010130339152337,
        "lng": 121.61760510838357,
        "ele": 13.953452788019801,
        "distanceKm": 6.665868405529269,
        "gradePct": -0.7150259711887845,
        "smoothedEle": 14.32862729690609,
        "gradeBand": "descent"
      },
      {
        "lat": 24.009772237223313,
        "lng": 121.61726687441151,
        "ele": 13.75,
        "distanceKm": 6.7184600752713415,
        "gradePct": -0.5761923195708624,
        "smoothedEle": 14.131242800689389,
        "gradeBand": "descent"
      },
      {
        "lat": 24.009413927917485,
        "lng": 121.61692890580863,
        "ele": 13.75,
        "distanceKm": 6.771051670240943,
        "gradePct": -0.3987891934170614,
        "smoothedEle": 14.082709577252274,
        "gradeBand": "descent"
      },
      {
        "lat": 24.009055618611658,
        "lng": 121.61659093720576,
        "ele": 13.75,
        "distanceKm": 6.823643327629231,
        "gradePct": -0.19431864339075383,
        "smoothedEle": 14.160022422153023,
        "gradeBand": "descent"
      },
      {
        "lat": 24.008697309305827,
        "lng": 121.61625296860288,
        "ele": 13.75,
        "distanceKm": 6.876235047435729,
        "gradePct": -0.004219607781092979,
        "smoothedEle": 14.281280505292395,
        "gradeBand": "descent"
      },
      {
        "lat": 24.008339,
        "lng": 121.615915,
        "ele": 13.75,
        "distanceKm": 6.928826829659063,
        "gradePct": 0.1638926075491217,
        "smoothedEle": 14.449461239816912,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.007868,
        "lng": 121.616434,
        "ele": 14.75,
        "distanceKm": 7.003137431901668,
        "gradePct": 0.48337734837416635,
        "smoothedEle": 15.09663224013796,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.007613323166666,
        "lng": 121.61671048905683,
        "ele": 15.55006236471931,
        "distanceKm": 7.04302097874111,
        "gradePct": 0.7194088043969267,
        "smoothedEle": 15.643518106473124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.007367,
        "lng": 121.616996,
        "ele": 15.75,
        "distanceKm": 7.0829116653304665,
        "gradePct": 0.9929809399898019,
        "smoothedEle": 16.288593220976864,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.007066,
        "lng": 121.617403,
        "ele": 15.25,
        "distanceKm": 7.136103189348229,
        "gradePct": 1.3245906811150945,
        "smoothedEle": 17.162012415191118,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.006757,
        "lng": 121.617784,
        "ele": 16.5,
        "distanceKm": 7.187855429576757,
        "gradePct": 1.5352518675299724,
        "smoothedEle": 18.034045024067776,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.006342,
        "lng": 121.618242,
        "ele": 20.25,
        "distanceKm": 7.253382166283307,
        "gradePct": 1.7173797838858644,
        "smoothedEle": 19.24582917088821,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.005822752134563,
        "lng": 121.61844664602219,
        "ele": 21.835535367494195,
        "distanceKm": 7.314748013256487,
        "gradePct": 1.8461343704694413,
        "smoothedEle": 20.503623395541602,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.005289,
        "lng": 121.618627,
        "ele": 22,
        "distanceKm": 7.376861725182286,
        "gradePct": 2.049802779922853,
        "smoothedEle": 21.948405101167307,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.004866,
        "lng": 121.618779,
        "ele": 22.25,
        "distanceKm": 7.426366553547461,
        "gradePct": 2.2284208759394986,
        "smoothedEle": 23.203071936531313,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.004282,
        "lng": 121.618968,
        "ele": 24.25,
        "distanceKm": 7.494082932111668,
        "gradePct": 2.3264765858699246,
        "smoothedEle": 24.733011652952037,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.003678,
        "lng": 121.619181,
        "ele": 26.5,
        "distanceKm": 7.564643815981268,
        "gradePct": 2.138603732771003,
        "smoothedEle": 25.941420700737524,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.003173361460696,
        "lng": 121.61933614447751,
        "ele": 27.89048450008785,
        "distanceKm": 7.622928158856399,
        "gradePct": 1.9202679195317227,
        "smoothedEle": 26.956463956936418,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.002669180730347,
        "lng": 121.61949307223875,
        "ele": 28.695242250043933,
        "distanceKm": 7.681212792003258,
        "gradePct": 1.853917683390222,
        "smoothedEle": 28.150067463512027,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.002165,
        "lng": 121.61965,
        "ele": 29.5,
        "distanceKm": 7.739497442232577,
        "gradePct": 1.7834804883845872,
        "smoothedEle": 29.077730814160503,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.001585,
        "lng": 121.619838,
        "ele": 29.5,
        "distanceKm": 7.806758611564786,
        "gradePct": 1.5671435176203699,
        "smoothedEle": 29.809152382250232,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.00117680781669,
        "lng": 121.6199779529076,
        "ele": 31.039688593294237,
        "distanceKm": 7.854321907131374,
        "gradePct": 1.2373758070616112,
        "smoothedEle": 30.074124104620196,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.000765,
        "lng": 121.620105,
        "ele": 32.5,
        "distanceKm": 7.90189679242871,
        "gradePct": 0.8381950154345638,
        "smoothedEle": 30.155665769012565,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.000265,
        "lng": 121.620277,
        "ele": 31.25,
        "distanceKm": 7.9601750645562,
        "gradePct": 0.3806418551606804,
        "smoothedEle": 30.06387024873507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.99991,
        "lng": 121.620392,
        "ele": 31,
        "distanceKm": 8.001341596440103,
        "gradePct": 0.20715903012181852,
        "smoothedEle": 30.164563918325484,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.999507,
        "lng": 121.62052633333333,
        "ele": 30.16666666666666,
        "distanceKm": 8.048184847814275,
        "gradePct": 0.2315709298928608,
        "smoothedEle": 30.5030768452928,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.999104,
        "lng": 121.62066066666667,
        "ele": 29.33333333333334,
        "distanceKm": 8.095028111637147,
        "gradePct": 0.4268059558003557,
        "smoothedEle": 30.997505005588977,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.998701,
        "lng": 121.620795,
        "ele": 28.5,
        "distanceKm": 8.1418713879078,
        "gradePct": 0.6655379987833795,
        "smoothedEle": 31.423776811443766,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.99839,
        "lng": 121.620891,
        "ele": 27.25,
        "distanceKm": 8.177801773452096,
        "gradePct": 0.8110998837309815,
        "smoothedEle": 31.729185088570276,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.997978225142443,
        "lng": 121.62103329285618,
        "ele": 30.628461669162455,
        "distanceKm": 8.225816508025499,
        "gradePct": 0.9833202441745144,
        "smoothedEle": 32.30807244454532,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.99756658853902,
        "lng": 121.6211760633944,
        "ele": 33.09734027710312,
        "distanceKm": 8.273831231588293,
        "gradePct": 1.1089972672145376,
        "smoothedEle": 32.9917675975513,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.997155,
        "lng": 121.621319,
        "ele": 35.25,
        "distanceKm": 8.32184597316773,
        "gradePct": 1.2959140422517532,
        "smoothedEle": 33.83337448031793,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.996763,
        "lng": 121.62146075,
        "ele": 36,
        "distanceKm": 8.367751332566872,
        "gradePct": 1.5525182531988,
        "smoothedEle": 34.74879284744347,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.996371,
        "lng": 121.6216025,
        "ele": 36.75,
        "distanceKm": 8.413656705723161,
        "gradePct": 1.8194596099647913,
        "smoothedEle": 35.800387588319516,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.995979,
        "lng": 121.62174425,
        "ele": 37.5,
        "distanceKm": 8.459562092636501,
        "gradePct": 2.0831292993259467,
        "smoothedEle": 36.95484391345715,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.995587,
        "lng": 121.621886,
        "ele": 38.25,
        "distanceKm": 8.505467493305439,
        "gradePct": 2.156414148376382,
        "smoothedEle": 37.85911924963873,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.995209111128712,
        "lng": 121.62202676736838,
        "ele": 39.00276667587,
        "distanceKm": 8.549853481617141,
        "gradePct": 2.083202462521847,
        "smoothedEle": 38.558289086749596,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.994832,
        "lng": 121.62217,
        "ele": 39.25,
        "distanceKm": 8.594239087563926,
        "gradePct": 1.8711674408415528,
        "smoothedEle": 39.09790601971322,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.994505,
        "lng": 121.622232,
        "ele": 39.75,
        "distanceKm": 8.631141338182374,
        "gradePct": 1.6358255708694522,
        "smoothedEle": 39.51175280050838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.99408373399933,
        "lng": 121.62218845539799,
        "ele": 40.324959716434634,
        "distanceKm": 8.678192446810101,
        "gradePct": 1.3494346726838924,
        "smoothedEle": 40.020706456531926,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.99366380084202,
        "lng": 121.62212326911865,
        "ele": 40.73710728047037,
        "distanceKm": 8.72535416868488,
        "gradePct": 1.1598916830348895,
        "smoothedEle": 40.49215831000732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.993243972925317,
        "lng": 121.62205726779854,
        "ele": 41.04781402550272,
        "distanceKm": 8.772516007182872,
        "gradePct": 1.0437541412235272,
        "smoothedEle": 40.92131647675714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.99282417660414,
        "lng": 121.62199102600748,
        "ele": 41.32270250796032,
        "distanceKm": 8.81967785065092,
        "gradePct": 1.0106249819884958,
        "smoothedEle": 41.404443467096456,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.992404400035397,
        "lng": 121.62192463574037,
        "ele": 41.595965366860646,
        "distanceKm": 8.866839677995285,
        "gradePct": 0.950005426676263,
        "smoothedEle": 41.797913971922604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.991984535094424,
        "lng": 121.62185891924375,
        "ele": 42.106842368928355,
        "distanceKm": 8.914001496376143,
        "gradePct": 0.8155347495064824,
        "smoothedEle": 42.009740892319826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.991564767547214,
        "lng": 121.62179245962187,
        "ele": 42.42842118446417,
        "distanceKm": 8.961163345282836,
        "gradePct": 0.6335581299434936,
        "smoothedEle": 42.08512701905728,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.991145,
        "lng": 121.621726,
        "ele": 42.75,
        "distanceKm": 9.008325197341371,
        "gradePct": 0.4079711317325248,
        "smoothedEle": 42.10408889348973,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.991211,
        "lng": 121.621209,
        "ele": 44.5,
        "distanceKm": 9.06135682352559,
        "gradePct": 0.18271871366879888,
        "smoothedEle": 42.11760801658068,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.99115347988743,
        "lng": 121.62165957421512,
        "ele": 42.97484550007965,
        "distanceKm": 9.107574778211594,
        "gradePct": 0.07955714041534306,
        "smoothedEle": 42.13998962123173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.991095,
        "lng": 121.62211,
        "ele": 41.75,
        "distanceKm": 9.153792714177573,
        "gradePct": 0.04435360420182038,
        "smoothedEle": 42.162052600075285,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.990809,
        "lng": 121.622442,
        "ele": 41,
        "distanceKm": 9.200148936189894,
        "gradePct": 0.022084140419444585,
        "smoothedEle": 42.14496983020378,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.991287,
        "lng": 121.622512,
        "ele": 41,
        "distanceKm": 9.253773786957183,
        "gradePct": -0.10796897215024298,
        "smoothedEle": 41.899736961565935,
        "gradeBand": "descent"
      },
      {
        "lat": 23.991685230923732,
        "lng": 121.62285734806434,
        "ele": 41.45985095119235,
        "distanceKm": 9.310268734988068,
        "gradePct": -0.371085377172649,
        "smoothedEle": 41.399104876530146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.992083461847464,
        "lng": 121.62320269612869,
        "ele": 41.91970190238471,
        "distanceKm": 9.366763615625436,
        "gradePct": -0.6765768946297459,
        "smoothedEle": 40.80411889315122,
        "gradeBand": "descent"
      },
      {
        "lat": 23.992481,
        "lng": 121.623549,
        "ele": 42.25,
        "distanceKm": 9.423258483586157,
        "gradePct": -0.8673730207941044,
        "smoothedEle": 40.30454105906354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.992745,
        "lng": 121.62378,
        "ele": 40.875,
        "distanceKm": 9.460840833536244,
        "gradePct": -0.9065036859854272,
        "smoothedEle": 40.02410469325946,
        "gradeBand": "descent"
      },
      {
        "lat": 23.993009,
        "lng": 121.624011,
        "ele": 39.5,
        "distanceKm": 9.498423153437153,
        "gradePct": -0.8683846290993061,
        "smoothedEle": 39.76730568020421,
        "gradeBand": "descent"
      },
      {
        "lat": 23.99275825,
        "lng": 121.62435525,
        "ele": 38.93749999999999,
        "distanceKm": 9.543149184282985,
        "gradePct": -0.7927853321907313,
        "smoothedEle": 39.46724785421739,
        "gradeBand": "descent"
      },
      {
        "lat": 23.992507500000002,
        "lng": 121.62469949999999,
        "ele": 38.375000000000014,
        "distanceKm": 9.587875268391288,
        "gradePct": -0.7417191517114422,
        "smoothedEle": 39.13399259233167,
        "gradeBand": "descent"
      },
      {
        "lat": 23.99225675,
        "lng": 121.62504375,
        "ele": 37.81250000000001,
        "distanceKm": 9.632601405762955,
        "gradePct": -0.7615575356901686,
        "smoothedEle": 38.711709880395304,
        "gradeBand": "descent"
      },
      {
        "lat": 23.992006,
        "lng": 121.625388,
        "ele": 37.25,
        "distanceKm": 9.677327596394752,
        "gradePct": -0.8465630110648228,
        "smoothedEle": 38.21832504991367,
        "gradeBand": "descent"
      },
      {
        "lat": 23.991795,
        "lng": 121.62569500000001,
        "ele": 37.5,
        "distanceKm": 9.716354985805962,
        "gradePct": -0.9182520664338615,
        "smoothedEle": 37.81050053839851,
        "gradeBand": "descent"
      },
      {
        "lat": 23.991584,
        "lng": 121.626002,
        "ele": 37.75,
        "distanceKm": 9.755382416063888,
        "gradePct": -0.9650965314801389,
        "smoothedEle": 37.44590465052533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.99195205479499,
        "lng": 121.62632230018974,
        "ele": 37.78852878863642,
        "distanceKm": 9.807667187593683,
        "gradePct": -1.0351869468072685,
        "smoothedEle": 36.87675290152654,
        "gradeBand": "descent"
      },
      {
        "lat": 23.99231870319666,
        "lng": 121.62664453345984,
        "ele": 37.19235252575762,
        "distanceKm": 9.859952307204761,
        "gradePct": -1.1124168219607289,
        "smoothedEle": 36.18516219195624,
        "gradeBand": "descent"
      },
      {
        "lat": 23.99268535159833,
        "lng": 121.62696676672992,
        "ele": 36.59617626287882,
        "distanceKm": 9.912237368443579,
        "gradePct": -1.241402041282158,
        "smoothedEle": 35.37072432202649,
        "gradeBand": "descent"
      },
      {
        "lat": 23.993052,
        "lng": 121.627289,
        "ele": 36,
        "distanceKm": 9.9645223713103,
        "gradePct": -1.4840437585755222,
        "smoothedEle": 34.37832312465893,
        "gradeBand": "descent"
      },
      {
        "lat": 23.993409666666665,
        "lng": 121.627593,
        "ele": 34.24999999999998,
        "distanceKm": 10.014875543705667,
        "gradePct": -1.7971241697651081,
        "smoothedEle": 33.18715750808491,
        "gradeBand": "descent"
      },
      {
        "lat": 23.993767333333334,
        "lng": 121.627897,
        "ele": 32.50000000000002,
        "distanceKm": 10.065228663475267,
        "gradePct": -2.164150016295797,
        "smoothedEle": 31.774673016612894,
        "gradeBand": "descent"
      },
      {
        "lat": 23.994125,
        "lng": 121.628201,
        "ele": 30.75,
        "distanceKm": 10.115581730617826,
        "gradePct": -2.5467042612724473,
        "smoothedEle": 30.213837768608883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.994528666666668,
        "lng": 121.62855333333333,
        "ele": 28.416666666666643,
        "distanceKm": 10.172990903936327,
        "gradePct": -2.9328596442671753,
        "smoothedEle": 28.31227038329358,
        "gradeBand": "descent"
      },
      {
        "lat": 23.994932333333335,
        "lng": 121.62890566666667,
        "ele": 26.083333333333357,
        "distanceKm": 10.230400007276911,
        "gradePct": -3.2143716773411968,
        "smoothedEle": 26.322928445006685,
        "gradeBand": "descent"
      },
      {
        "lat": 23.995336,
        "lng": 121.629258,
        "ele": 23.75,
        "distanceKm": 10.287809040636803,
        "gradePct": -3.31757456087746,
        "smoothedEle": 24.439581456651233,
        "gradeBand": "descent"
      },
      {
        "lat": 23.995742,
        "lng": 121.629599,
        "ele": 21.87500000000003,
        "distanceKm": 10.344712987484655,
        "gradePct": -3.2540445155300834,
        "smoothedEle": 22.740832422800935,
        "gradeBand": "descent"
      },
      {
        "lat": 23.996148,
        "lng": 121.62994,
        "ele": 20,
        "distanceKm": 10.401616867816763,
        "gradePct": -3.07045204310977,
        "smoothedEle": 21.179418554337214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.996479402580103,
        "lng": 121.63022888357668,
        "ele": 18.87001845520216,
        "distanceKm": 10.448724652712073,
        "gradePct": -2.8954668284440923,
        "smoothedEle": 19.93084086210404,
        "gradeBand": "descent"
      },
      {
        "lat": 23.99680570129005,
        "lng": 121.63052494178834,
        "ele": 18.310009227601093,
        "distanceKm": 10.495851523344223,
        "gradePct": -2.6969736088037313,
        "smoothedEle": 18.805542637568102,
        "gradeBand": "descent"
      },
      {
        "lat": 23.997132,
        "lng": 121.630821,
        "ele": 17.75,
        "distanceKm": 10.542978345319202,
        "gradePct": -2.4824980017851743,
        "smoothedEle": 17.827620554881456,
        "gradeBand": "descent"
      },
      {
        "lat": 23.997148544446873,
        "lng": 121.6312697917775,
        "ele": 17.277867363928006,
        "distanceKm": 10.588605519302845,
        "gradePct": -2.3390815236557763,
        "smoothedEle": 16.858280368923918,
        "gradeBand": "descent"
      },
      {
        "lat": 23.997202,
        "lng": 121.631717,
        "ele": 16.5,
        "distanceKm": 10.634421923425045,
        "gradePct": -2.245148785313698,
        "smoothedEle": 15.819632836135149,
        "gradeBand": "descent"
      },
      {
        "lat": 23.997254861625617,
        "lng": 121.63218788579661,
        "ele": 14.93501766268752,
        "distanceKm": 10.682616153560321,
        "gradePct": -2.226218472050001,
        "smoothedEle": 14.669140641664743,
        "gradeBand": "descent"
      },
      {
        "lat": 23.997306792924192,
        "lng": 121.63265889490258,
        "ele": 14.160022111897671,
        "distanceKm": 10.730810292857191,
        "gradePct": -2.339135718497085,
        "smoothedEle": 13.401846670389519,
        "gradeBand": "descent"
      },
      {
        "lat": 23.997358,
        "lng": 121.63313,
        "ele": 14,
        "distanceKm": 10.779004513408553,
        "gradePct": -2.4848691148661235,
        "smoothedEle": 12.09251358923784,
        "gradeBand": "descent"
      },
      {
        "lat": 23.99741825,
        "lng": 121.63362175,
        "ele": 11.624999999999957,
        "distanceKm": 10.829405603961586,
        "gradePct": -2.564225860343522,
        "smoothedEle": 10.804899944636558,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9974785,
        "lng": 121.6341135,
        "ele": 9.25,
        "distanceKm": 10.879806671335897,
        "gradePct": -2.34836296624738,
        "smoothedEle": 10.039482641589077,
        "gradeBand": "descent"
      },
      {
        "lat": 23.99753875,
        "lng": 121.63460524999999,
        "ele": 6.8750000000000435,
        "distanceKm": 10.930207715532863,
        "gradePct": -2.0486897326665443,
        "smoothedEle": 9.320312339371299,
        "gradeBand": "descent"
      },
      {
        "lat": 23.997599,
        "lng": 121.635097,
        "ele": 4.5,
        "distanceKm": 10.980608736553856,
        "gradePct": -1.7379209160972318,
        "smoothedEle": 8.575688127756548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9980675,
        "lng": 121.6350265,
        "ele": 4.750000000000004,
        "distanceKm": 11.033193592793824,
        "gradePct": -1.5636012280288634,
        "smoothedEle": 7.620171083941158,
        "gradeBand": "descent"
      },
      {
        "lat": 23.998536,
        "lng": 121.634956,
        "ele": 5,
        "distanceKm": 11.085778445483067,
        "gradePct": -1.688041426528863,
        "smoothedEle": 6.578188803588014,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 11.085778445483067,
      "elevationGainM": 82.55262003870793,
      "elevationLossM": 81.5076989631857,
      "minimumElevationM": 4.5,
      "maximumElevationM": 45.75,
      "maximumSustainedGradePct": 4.1925866502238485
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 73,
        "startDistanceKm": 0,
        "endDistanceKm": 3.456476875914194,
        "distanceKm": 3.456476875914194,
        "gainM": 35.97158163703754,
        "averageGradePct": 1.040700775049262,
        "maximumGradePct": 2.4628594643739934
      }
    ]
  },
  "hualien-valley-north": {
    "routeId": "hualien-valley-north",
    "direction": "point-to-point",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T17:14:50.098Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "e9b94575aca9ee58115c696a52183d3b9f06805f659ef9a2416bb1139bb1ccca",
      "roadPolicyAuditSha256": "fc035fa2abaa04b279d351c7e6e39b6b6feb1323f0715d8cbd06c36ea5375c51",
      "elevationAnalysis": {
        "smoothingWindowM": 750,
        "gradeWindowM": 300,
        "reason": "台9花東縱谷長距離路線跨越多座橋梁與河谷，預設100公尺分析為爬升525公尺、最大持續坡度9.3%。比較500/200、750/300、1000/500公尺後，爬升依序為481、473、466公尺，最大持續坡度依序為6.2%、4.5%、4.3%；公路局資料確認台9為縱谷交通命脈及馬太鞍溪鋼便橋現行通路，750/300可排除橋梁SRTM尖峰並保留縱谷長緩坡，因此採用中等視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://www.thb.gov.tw/News_Content_Table.aspx?n=7839&s=288050&sms=13275",
        "referenceLabel": "公路局台9馬太鞍溪鋼便橋通行資料"
      },
      "reviewedAt": "2026-07-29T17:38:00.000Z",
      "reviewerNote": "初版86.1公里曾含769公尺service，且誤走舊馬太鞍溪橋construction453公尺與access=no722公尺。live OSM確認舊橋ways 238998744/238998745已封閉施工，現行鋼便橋為way 1464267788（unclassified、無禁制），本線以其南向節點23.6906474,121.408698固定通過。第一次修正雖raw禁制歸0，live 70%與90%仍落縣道193；再補富源、三民與瑞穗南側台9控制點，並排除掃叭頂服務道路後，raw所有特殊類別、construction、私人與禁制道路全0。live OSM五點均貼合台9或銜接公共道路，另精確核對鋼便橋全段；禁止0。750/300公尺分析為82.9公里、爬升473公尺、最大4.5%、最高238公尺。鋼便橋2026-01-01開放、速限40公里；永久橋施工、豪雨、堰塞湖警戒或演練可能臨時封橋，出發前須查最新公告。"
    },
    "waypoints": [
      {
        "name": "吉安台9主線",
        "lat": 23.9637973,
        "lng": 121.5821295,
        "role": "start"
      },
      {
        "name": "壽豐台9南向主線",
        "lat": 23.8707371,
        "lng": 121.5100892,
        "role": "via"
      },
      {
        "name": "平林台9南向主線",
        "lat": 23.7889238,
        "lng": 121.4628018,
        "role": "via"
      },
      {
        "name": "鳳林台9南向主線",
        "lat": 23.7443391,
        "lng": 121.4521989,
        "role": "via"
      },
      {
        "name": "鳳林南側台9南向主線",
        "lat": 23.7146821,
        "lng": 121.4227224,
        "role": "via"
      },
      {
        "name": "馬太鞍溪鋼便橋現行通路",
        "lat": 23.6906474,
        "lng": 121.408698,
        "role": "via"
      },
      {
        "name": "光復台9南向主線",
        "lat": 23.6662175,
        "lng": 121.4216626,
        "role": "via"
      },
      {
        "name": "瑞穗台9南向主線",
        "lat": 23.4992223,
        "lng": 121.3687923,
        "role": "via"
      },
      {
        "name": "瑞穗南側台9主線服務道路入口",
        "lat": 23.4739574,
        "lng": 121.3566756,
        "role": "via"
      },
      {
        "name": "瑞穗南側台9主線彎道控制點",
        "lat": 23.4712995,
        "lng": 121.3567688,
        "role": "via"
      },
      {
        "name": "瑞穗南側台9主線第一控制點",
        "lat": 23.4641566,
        "lng": 121.3557596,
        "role": "via"
      },
      {
        "name": "瑞穗南側台9主線服務道路岔口",
        "lat": 23.4638724,
        "lng": 121.3555625,
        "role": "via"
      },
      {
        "name": "瑞穗南側台9主線第二控制點",
        "lat": 23.4632659,
        "lng": 121.3552755,
        "role": "via"
      },
      {
        "name": "富源台9主線",
        "lat": 23.4493248,
        "lng": 121.3546027,
        "role": "via"
      },
      {
        "name": "三民台9南向主線",
        "lat": 23.3889019,
        "lng": 121.3316721,
        "role": "via"
      },
      {
        "name": "玉里台9南向主線",
        "lat": 23.3324403,
        "lng": 121.3197713,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.963797,
        "lng": 121.58213,
        "ele": 28.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 30.10379938577368,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963755,
        "lng": 121.581631,
        "ele": 29.25,
        "distanceKm": 0.050918183049635836,
        "gradePct": 0.1989054969102207,
        "smoothedEle": 30.205078450786214,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963713,
        "lng": 121.581132,
        "ele": 29.75,
        "distanceKm": 0.10183638254957911,
        "gradePct": 0.19188174505197575,
        "smoothedEle": 30.299204813707618,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963694999999998,
        "lng": 121.58070599999999,
        "ele": 30,
        "distanceKm": 0.14516865845468602,
        "gradePct": 0.1872869370734053,
        "smoothedEle": 30.375681319784015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963677,
        "lng": 121.58028,
        "ele": 30.25,
        "distanceKm": 0.1885009403960938,
        "gradePct": 0.21612976315957094,
        "smoothedEle": 30.51120602180532,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963659,
        "lng": 121.579854,
        "ele": 30.5,
        "distanceKm": 0.23183322837671955,
        "gradePct": 0.26513953199472123,
        "smoothedEle": 30.718480922499968,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963608166666667,
        "lng": 121.57939866666666,
        "ele": 30.625,
        "distanceKm": 0.2784438520096963,
        "gradePct": 0.3230500595194049,
        "smoothedEle": 31.003312415419128,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963557333333334,
        "lng": 121.57894333333333,
        "ele": 30.75,
        "distanceKm": 0.3250544937526157,
        "gradePct": 0.38110942223063066,
        "smoothedEle": 31.296962417762554,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963506499999998,
        "lng": 121.578488,
        "ele": 30.875,
        "distanceKm": 0.3716651536054897,
        "gradePct": 0.44727035652692376,
        "smoothedEle": 31.585241954255817,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963455666666665,
        "lng": 121.57803266666667,
        "ele": 31,
        "distanceKm": 0.418275831566753,
        "gradePct": 0.5696588892669645,
        "smoothedEle": 32.03719522695331,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963404833333332,
        "lng": 121.57757733333334,
        "ele": 31.125,
        "distanceKm": 0.46488652763928423,
        "gradePct": 0.6891185186356333,
        "smoothedEle": 32.50470587224529,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963354,
        "lng": 121.577122,
        "ele": 31.25,
        "distanceKm": 0.5114972418216139,
        "gradePct": 0.7852546224762129,
        "smoothedEle": 32.9769699911545,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.963133666666668,
        "lng": 121.576781,
        "ele": 32.5,
        "distanceKm": 0.5539333214055375,
        "gradePct": 0.8554816641335599,
        "smoothedEle": 33.419976725218426,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.962913333333333,
        "lng": 121.57644,
        "ele": 33.75,
        "distanceKm": 0.5963694493435296,
        "gradePct": 0.9194215699112671,
        "smoothedEle": 33.874509526472785,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.962693,
        "lng": 121.576099,
        "ele": 35,
        "distanceKm": 0.6388056256371013,
        "gradePct": 0.9868494404844093,
        "smoothedEle": 34.34255930832916,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.96243776923077,
        "lng": 121.5757153076923,
        "ele": 35.51923076923077,
        "distanceKm": 0.6870287552369565,
        "gradePct": 1.0547471674816886,
        "smoothedEle": 34.898454257845046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.96218253846154,
        "lng": 121.57533161538461,
        "ele": 36.03846153846154,
        "distanceKm": 0.7352519472422043,
        "gradePct": 1.0906537678516888,
        "smoothedEle": 35.4794289242446,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.96192730769231,
        "lng": 121.57494792307692,
        "ele": 36.55769230769231,
        "distanceKm": 0.783475201652262,
        "gradePct": 1.130811769493891,
        "smoothedEle": 36.085483365746676,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.96167207692308,
        "lng": 121.57456423076923,
        "ele": 37.07692307692308,
        "distanceKm": 0.831698518466547,
        "gradePct": 1.176252889398536,
        "smoothedEle": 36.71661764056938,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.96141684615385,
        "lng": 121.57418053846153,
        "ele": 37.59615384615385,
        "distanceKm": 0.8799218976844765,
        "gradePct": 1.2248305957526804,
        "smoothedEle": 37.37283180693018,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.96116161538462,
        "lng": 121.57379684615384,
        "ele": 38.11538461538461,
        "distanceKm": 0.9281453393054678,
        "gradePct": 1.2664804067969988,
        "smoothedEle": 38.02442290679847,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.960906384615384,
        "lng": 121.57341315384616,
        "ele": 38.63461538461539,
        "distanceKm": 0.9763688433280033,
        "gradePct": 1.283144481455662,
        "smoothedEle": 38.625004943634515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.960651153846154,
        "lng": 121.57302946153847,
        "ele": 39.15384615384615,
        "distanceKm": 1.0245924097533703,
        "gradePct": 1.2729571368847958,
        "smoothedEle": 39.1698782836197,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.960395923076923,
        "lng": 121.57264576923077,
        "ele": 39.67307692307692,
        "distanceKm": 1.072816038580051,
        "gradePct": 1.2469098633306333,
        "smoothedEle": 39.692252002633325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.960140692307693,
        "lng": 121.57226207692308,
        "ele": 40.19230769230769,
        "distanceKm": 1.1210397298074626,
        "gradePct": 1.2171265853270794,
        "smoothedEle": 40.22849793248955,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.959885461538462,
        "lng": 121.57187838461539,
        "ele": 40.71153846153846,
        "distanceKm": 1.1692634834350224,
        "gradePct": 1.1743976298912195,
        "smoothedEle": 40.75098711245144,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.959630230769232,
        "lng": 121.5714946923077,
        "ele": 41.230769230769226,
        "distanceKm": 1.2174872994621477,
        "gradePct": 1.109592919984474,
        "smoothedEle": 41.20919112601674,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.959375,
        "lng": 121.571111,
        "ele": 41.75,
        "distanceKm": 1.265711177888256,
        "gradePct": 1.0369065765085232,
        "smoothedEle": 41.60299266731643,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.959142500000002,
        "lng": 121.570694,
        "ele": 42.375,
        "distanceKm": 1.3153482687365317,
        "gradePct": 0.9585648232864276,
        "smoothedEle": 41.94112411219207,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95891,
        "lng": 121.570277,
        "ele": 43,
        "distanceKm": 1.364985424811192,
        "gradePct": 0.880812021891735,
        "smoothedEle": 42.249864363910426,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.958656,
        "lng": 121.569769,
        "ele": 43.5,
        "distanceKm": 1.4238269711633131,
        "gradePct": 0.8119577847170848,
        "smoothedEle": 42.69457016874404,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.958466,
        "lng": 121.569324,
        "ele": 44.25,
        "distanceKm": 1.473737481972129,
        "gradePct": 0.7788728361316802,
        "smoothedEle": 43.13011582130914,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.958248560946654,
        "lng": 121.5689486686028,
        "ele": 44.567874091869506,
        "distanceKm": 1.5188947401517185,
        "gradePct": 0.7755722499123103,
        "smoothedEle": 43.54740119256953,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95800292070999,
        "lng": 121.5685935014521,
        "ele": 44.113405568902124,
        "distanceKm": 1.5641557481550281,
        "gradePct": 0.787151736984588,
        "smoothedEle": 43.95174606650557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.957757280473327,
        "lng": 121.5682383343014,
        "ele": 43.65893704593475,
        "distanceKm": 1.6094168109807925,
        "gradePct": 0.8142238655269384,
        "smoothedEle": 44.34339019050234,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.957511640236664,
        "lng": 121.5678831671507,
        "ele": 43.204468522967375,
        "distanceKm": 1.654677928628521,
        "gradePct": 0.8455270675055262,
        "smoothedEle": 44.72233353387548,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.957266,
        "lng": 121.567528,
        "ele": 42.75,
        "distanceKm": 1.6999391010977223,
        "gradePct": 0.856726476621451,
        "smoothedEle": 45.08421262869757,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.956985333333332,
        "lng": 121.56713966666666,
        "ele": 44.166666666666664,
        "distanceKm": 1.7502494804511906,
        "gradePct": 0.8471854030554764,
        "smoothedEle": 45.46670324165524,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.956704666666667,
        "lng": 121.56675133333333,
        "ele": 45.583333333333336,
        "distanceKm": 1.8005599271712633,
        "gradePct": 0.8402512351713652,
        "smoothedEle": 45.89872810934655,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.956424,
        "lng": 121.566363,
        "ele": 47,
        "distanceKm": 1.8508704412577444,
        "gradePct": 0.8517764692854729,
        "smoothedEle": 46.3883895241465,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9561606,
        "lng": 121.5659756,
        "ele": 47.3,
        "distanceKm": 1.8999369770481822,
        "gradePct": 0.8615120727680694,
        "smoothedEle": 46.845897374922295,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9558972,
        "lng": 121.5655882,
        "ele": 47.6,
        "distanceKm": 1.9490035773522323,
        "gradePct": 0.8828184300733495,
        "smoothedEle": 47.323280990531934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9556338,
        "lng": 121.5652008,
        "ele": 47.9,
        "distanceKm": 1.998070242166485,
        "gradePct": 0.9240977900987036,
        "smoothedEle": 47.84156381032532,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9553704,
        "lng": 121.56481339999999,
        "ele": 48.2,
        "distanceKm": 2.0471369714931087,
        "gradePct": 0.9859019725740125,
        "smoothedEle": 48.40074594167723,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.955107,
        "lng": 121.564426,
        "ele": 48.5,
        "distanceKm": 2.0962037653286942,
        "gradePct": 1.0465021763033986,
        "smoothedEle": 49.000827491901056,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954805,
        "lng": 121.563972,
        "ele": 49.75,
        "distanceKm": 2.1532655440111466,
        "gradePct": 1.082877579834933,
        "smoothedEle": 49.65935476166535,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95454110473556,
        "lng": 121.56356436958927,
        "ele": 51.298415951243925,
        "distanceKm": 2.2040284826472583,
        "gradePct": 1.1113463576035678,
        "smoothedEle": 50.219743928260904,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95426608378845,
        "lng": 121.56316549567141,
        "ele": 51.438732760995144,
        "distanceKm": 2.2548034025841135,
        "gradePct": 1.1254473442802413,
        "smoothedEle": 50.76088558904464,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.953991062841336,
        "lng": 121.56276662175357,
        "ele": 51.579049570746356,
        "distanceKm": 2.3055783915208683,
        "gradePct": 1.1411131983929206,
        "smoothedEle": 51.350468981529026,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.953716041894225,
        "lng": 121.56236774783571,
        "ele": 51.71936638049757,
        "distanceKm": 2.356353449458661,
        "gradePct": 1.1565805668100502,
        "smoothedEle": 51.98320416488864,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95344102094711,
        "lng": 121.56196887391786,
        "ele": 51.85968319024879,
        "distanceKm": 2.407128576394969,
        "gradePct": 1.1755471605729237,
        "smoothedEle": 52.65354786863992,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.953166,
        "lng": 121.56157,
        "ele": 52,
        "distanceKm": 2.45790377233093,
        "gradePct": 1.2169808231268184,
        "smoothedEle": 53.36150019471257,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95291087908869,
        "lng": 121.56118993079254,
        "ele": 52.979559813047025,
        "distanceKm": 2.505824818201521,
        "gradePct": 1.2730040587090634,
        "smoothedEle": 54.057900831871024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.952655758177382,
        "lng": 121.56080986158508,
        "ele": 53.95911962609406,
        "distanceKm": 2.5537459256443302,
        "gradePct": 1.329042737066462,
        "smoothedEle": 54.736743574153145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.952400637266074,
        "lng": 121.56042979237762,
        "ele": 54.93867943914108,
        "distanceKm": 2.601667094661112,
        "gradePct": 1.3547223417462184,
        "smoothedEle": 55.36921924312326,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95214551635476,
        "lng": 121.56004972317015,
        "ele": 55.91823925218812,
        "distanceKm": 2.6495883252503605,
        "gradePct": 1.3755476221495053,
        "smoothedEle": 56.02554319633939,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.951890416364584,
        "lng": 121.55966963882973,
        "ele": 56.832811558096644,
        "distanceKm": 2.6975094797667833,
        "gradePct": 1.378879432976886,
        "smoothedEle": 56.66319286889172,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.951635346970487,
        "lng": 121.55928953235811,
        "ele": 57.652342965080535,
        "distanceKm": 2.7454304948584474,
        "gradePct": 1.3647106149673536,
        "smoothedEle": 57.28171866247019,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95138027757639,
        "lng": 121.55890942588648,
        "ele": 58.47187437206443,
        "distanceKm": 2.793351571520695,
        "gradePct": 1.334548626488106,
        "smoothedEle": 57.88028236749321,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95112520818229,
        "lng": 121.55852931941486,
        "ele": 59.291405779048326,
        "distanceKm": 2.841272709753186,
        "gradePct": 1.3000412482596468,
        "smoothedEle": 58.46017373790985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.950870138788193,
        "lng": 121.55814921294325,
        "ele": 60.11093718603222,
        "distanceKm": 2.8891939095537142,
        "gradePct": 1.2873639187910804,
        "smoothedEle": 59.066686758125705,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.950615069394097,
        "lng": 121.55776910647162,
        "ele": 60.9304685930161,
        "distanceKm": 2.937115170924267,
        "gradePct": 1.2837074914142532,
        "smoothedEle": 59.70583470786031,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95036,
        "lng": 121.557389,
        "ele": 61.75,
        "distanceKm": 2.985036493863106,
        "gradePct": 1.2934643865835613,
        "smoothedEle": 60.37761766962668,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9500645,
        "lng": 121.5569565,
        "ele": 61.5625,
        "distanceKm": 3.039912319932697,
        "gradePct": 1.31912573461406,
        "smoothedEle": 61.167871717188525,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.949769,
        "lng": 121.556524,
        "ele": 61.375,
        "distanceKm": 3.094788226643581,
        "gradePct": 1.352483953280825,
        "smoothedEle": 61.95511912132515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9494735,
        "lng": 121.55609150000001,
        "ele": 61.1875,
        "distanceKm": 3.1496642139937316,
        "gradePct": 1.3917696381914302,
        "smoothedEle": 62.741689437837444,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.949178,
        "lng": 121.555659,
        "ele": 61,
        "distanceKm": 3.204540281984592,
        "gradePct": 1.4204109896606534,
        "smoothedEle": 63.53260136933769,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.948892666666666,
        "lng": 121.55524133333334,
        "ele": 62.66666666666667,
        "distanceKm": 3.2575322276614704,
        "gradePct": 1.436762005315883,
        "smoothedEle": 64.30233633732463,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.948607333333335,
        "lng": 121.55482366666666,
        "ele": 64.33333333333333,
        "distanceKm": 3.3105242485353283,
        "gradePct": 1.4380245914348495,
        "smoothedEle": 65.05873468930204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.948322,
        "lng": 121.554406,
        "ele": 66,
        "distanceKm": 3.363516344603542,
        "gradePct": 1.4236818363894115,
        "smoothedEle": 65.77753955194676,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9480282,
        "lng": 121.5539774,
        "ele": 67,
        "distanceKm": 3.417962179905142,
        "gradePct": 1.4136092350601202,
        "smoothedEle": 66.52811294564026,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9477344,
        "lng": 121.5535488,
        "ele": 68,
        "distanceKm": 3.4724080945600058,
        "gradePct": 1.4208800178206888,
        "smoothedEle": 67.33213006388206,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9474406,
        "lng": 121.5531202,
        "ele": 69,
        "distanceKm": 3.526854088570067,
        "gradePct": 1.4445949422833484,
        "smoothedEle": 68.19050558788676,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.947146800000002,
        "lng": 121.5526916,
        "ele": 70,
        "distanceKm": 3.5813001619316895,
        "gradePct": 1.4874803751985588,
        "smoothedEle": 69.10403658184872,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.946853,
        "lng": 121.552263,
        "ele": 71,
        "distanceKm": 3.635746314646807,
        "gradePct": 1.533562861105604,
        "smoothedEle": 70.00154493060234,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.946586972726124,
        "lng": 121.55187691939227,
        "ele": 71.34106060753304,
        "distanceKm": 3.684882999600927,
        "gradePct": 1.55546602643653,
        "smoothedEle": 70.73849170806365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.94632094545225,
        "lng": 121.55149083878455,
        "ele": 71.68212121506609,
        "distanceKm": 3.734019749155554,
        "gradePct": 1.5477227570040912,
        "smoothedEle": 71.40840755820682,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.946054946182244,
        "lng": 121.5511047382655,
        "ele": 72.1607061547098,
        "distanceKm": 3.7831563045651304,
        "gradePct": 1.509338740881997,
        "smoothedEle": 72.02959861379306,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.945788953870494,
        "lng": 121.550718632799,
        "ele": 72.67346241832269,
        "distanceKm": 3.8322928603257504,
        "gradePct": 1.4466544978098463,
        "smoothedEle": 72.621724267616,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.945522961558744,
        "lng": 121.5503325273325,
        "ele": 73.18621868193557,
        "distanceKm": 3.88142948068664,
        "gradePct": 1.3544577104432287,
        "smoothedEle": 73.1695414462106,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.945256969246994,
        "lng": 121.549946421866,
        "ele": 73.69897494554846,
        "distanceKm": 3.9305661656460193,
        "gradePct": 1.2476681806791756,
        "smoothedEle": 73.6591581870458,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.944990976935248,
        "lng": 121.54956031639949,
        "ele": 74.21173120916134,
        "distanceKm": 3.979702915203023,
        "gradePct": 1.1441327072886724,
        "smoothedEle": 74.09319947479933,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.944724984623498,
        "lng": 121.549174210933,
        "ele": 74.72448747277423,
        "distanceKm": 4.028839729356347,
        "gradePct": 1.0457156777868786,
        "smoothedEle": 74.47493174005616,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.94445899231175,
        "lng": 121.5487881054665,
        "ele": 75.23724373638711,
        "distanceKm": 4.077976608107433,
        "gradePct": 0.9692917274047663,
        "smoothedEle": 74.87199136478374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.944193,
        "lng": 121.548402,
        "ele": 75.75,
        "distanceKm": 4.1271135514545,
        "gradePct": 0.9106890168491717,
        "smoothedEle": 75.29137746753302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9439645,
        "lng": 121.548104,
        "ele": 76.125,
        "distanceKm": 4.166644824304649,
        "gradePct": 0.8840465410532853,
        "smoothedEle": 75.6568490421332,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.943736,
        "lng": 121.547806,
        "ele": 76.5,
        "distanceKm": 4.206176138241691,
        "gradePct": 0.8725937088091442,
        "smoothedEle": 76.03390774273417,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.943348,
        "lng": 121.547233,
        "ele": 76.5,
        "distanceKm": 4.278649079518255,
        "gradePct": 0.890419634299946,
        "smoothedEle": 76.75514949581705,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9430385,
        "lng": 121.5468625,
        "ele": 76.625,
        "distanceKm": 4.3296599105547555,
        "gradePct": 0.9308505997449293,
        "smoothedEle": 77.2741111649588,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.942729,
        "lng": 121.546492,
        "ele": 76.75,
        "distanceKm": 4.3806708082546315,
        "gradePct": 0.9684103196145966,
        "smoothedEle": 77.80021744751586,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9424155,
        "lng": 121.54615,
        "ele": 77.375,
        "distanceKm": 4.429896882686851,
        "gradePct": 0.9796398743525909,
        "smoothedEle": 78.2560293368551,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.942102,
        "lng": 121.545808,
        "ele": 78,
        "distanceKm": 4.479123016739988,
        "gradePct": 0.9615123923494532,
        "smoothedEle": 78.66040606843349,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.941859,
        "lng": 121.545514,
        "ele": 79,
        "distanceKm": 4.519407334331364,
        "gradePct": 0.9287704034922328,
        "smoothedEle": 78.95189418116502,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.941578467411293,
        "lng": 121.54523129838802,
        "ele": 79.61856495612099,
        "distanceKm": 4.561815907437526,
        "gradePct": 0.8793287609373933,
        "smoothedEle": 79.22561413085838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.94132,
        "lng": 121.544924,
        "ele": 80.25,
        "distanceKm": 4.604257916105353,
        "gradePct": 0.8168121186566476,
        "smoothedEle": 79.46611884664271,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.940947,
        "lng": 121.5444985,
        "ele": 81.125,
        "distanceKm": 4.664176008420843,
        "gradePct": 0.7061859104158216,
        "smoothedEle": 79.74865431805755,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.940574,
        "lng": 121.544073,
        "ele": 82,
        "distanceKm": 4.724094190943057,
        "gradePct": 0.5837815171818906,
        "smoothedEle": 79.95364350430049,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.940289,
        "lng": 121.5437546,
        "ele": 81.75,
        "distanceKm": 4.769386266606743,
        "gradePct": 0.49890440964257754,
        "smoothedEle": 80.07713505178087,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.940004000000002,
        "lng": 121.5434362,
        "ele": 81.5,
        "distanceKm": 4.814678393325793,
        "gradePct": 0.4195075533897497,
        "smoothedEle": 80.17619930529668,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.939719,
        "lng": 121.54311779999999,
        "ele": 81.25,
        "distanceKm": 4.859970571101274,
        "gradePct": 0.34411379283198584,
        "smoothedEle": 80.24604505511995,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.939434000000002,
        "lng": 121.54279939999999,
        "ele": 81,
        "distanceKm": 4.905262799930054,
        "gradePct": 0.2647490968203055,
        "smoothedEle": 80.26510452769915,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.939149,
        "lng": 121.542481,
        "ele": 80.75,
        "distanceKm": 4.9505550798132,
        "gradePct": 0.18395269370523704,
        "smoothedEle": 80.23628479551384,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.938784895516115,
        "lng": 121.54205704585118,
        "ele": 80.02614397882033,
        "distanceKm": 5.009678726973265,
        "gradePct": 0.081570849774901,
        "smoothedEle": 80.14903856594294,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.938408,
        "lng": 121.541646,
        "ele": 79.25,
        "distanceKm": 5.068852035407859,
        "gradePct": -0.025578644291485392,
        "smoothedEle": 79.99894250565795,
        "gradeBand": "descent"
      },
      {
        "lat": 23.938108,
        "lng": 121.541456,
        "ele": 78.75,
        "distanceKm": 5.1073962808676505,
        "gradePct": -0.0987919485407266,
        "smoothedEle": 79.86389581204693,
        "gradeBand": "descent"
      },
      {
        "lat": 23.937747333333334,
        "lng": 121.54129366666666,
        "ele": 78.83333333333333,
        "distanceKm": 5.150761534940712,
        "gradePct": -0.16850677711254045,
        "smoothedEle": 79.72632333035469,
        "gradeBand": "descent"
      },
      {
        "lat": 23.937386666666665,
        "lng": 121.54113133333334,
        "ele": 78.91666666666667,
        "distanceKm": 5.194126806553195,
        "gradePct": -0.21734901959690484,
        "smoothedEle": 79.60837131929962,
        "gradeBand": "descent"
      },
      {
        "lat": 23.937026,
        "lng": 121.540969,
        "ele": 79,
        "distanceKm": 5.237492095705259,
        "gradePct": -0.24485235393152052,
        "smoothedEle": 79.51003978390759,
        "gradeBand": "descent"
      },
      {
        "lat": 23.936647,
        "lng": 121.5408015,
        "ele": 79,
        "distanceKm": 5.282943380258787,
        "gradePct": -0.25363710789960703,
        "smoothedEle": 79.42757944638156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.936268,
        "lng": 121.540634,
        "ele": 79,
        "distanceKm": 5.3283946835344915,
        "gradePct": -0.25572744113076845,
        "smoothedEle": 79.33438228142491,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9358785,
        "lng": 121.5404765,
        "ele": 79.125,
        "distanceKm": 5.374568530372603,
        "gradePct": -0.24117943636403077,
        "smoothedEle": 79.25537542872195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.935489,
        "lng": 121.540319,
        "ele": 79.25,
        "distanceKm": 5.420742393956163,
        "gradePct": -0.2074524790989899,
        "smoothedEle": 79.19919899642098,
        "gradeBand": "descent"
      },
      {
        "lat": 23.93505825,
        "lng": 121.54012275,
        "ele": 79.375,
        "distanceKm": 5.472626590717642,
        "gradePct": -0.16329431977253733,
        "smoothedEle": 79.1769681896158,
        "gradeBand": "descent"
      },
      {
        "lat": 23.934627499999998,
        "lng": 121.5399265,
        "ele": 79.5,
        "distanceKm": 5.524510813065549,
        "gradePct": -0.12365146014089141,
        "smoothedEle": 79.16852068405792,
        "gradeBand": "descent"
      },
      {
        "lat": 23.934196749999998,
        "lng": 121.53973025,
        "ele": 79.625,
        "distanceKm": 5.576395060999906,
        "gradePct": -0.09943302829019754,
        "smoothedEle": 79.14116069936323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.933766,
        "lng": 121.539534,
        "ele": 79.75,
        "distanceKm": 5.628279334520162,
        "gradePct": -0.07991019534865042,
        "smoothedEle": 79.09488821667408,
        "gradeBand": "descent"
      },
      {
        "lat": 23.933159,
        "lng": 121.539276,
        "ele": 79.25,
        "distanceKm": 5.700689310394508,
        "gradePct": -0.07192113547137073,
        "smoothedEle": 79.00783274033604,
        "gradeBand": "descent"
      },
      {
        "lat": 23.932751333333332,
        "lng": 121.5390965,
        "ele": 79.08333333333333,
        "distanceKm": 5.749553191380882,
        "gradePct": -0.08511383542313908,
        "smoothedEle": 78.93151293609792,
        "gradeBand": "descent"
      },
      {
        "lat": 23.932343666666668,
        "lng": 121.538917,
        "ele": 78.91666666666667,
        "distanceKm": 5.798417093875777,
        "gradePct": -0.11234231804979807,
        "smoothedEle": 78.83574216667614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.931936,
        "lng": 121.5387375,
        "ele": 78.75,
        "distanceKm": 5.847281017879638,
        "gradePct": -0.14517235242948354,
        "smoothedEle": 78.72099627424898,
        "gradeBand": "descent"
      },
      {
        "lat": 23.931528333333333,
        "lng": 121.538558,
        "ele": 78.58333333333333,
        "distanceKm": 5.896144963391812,
        "gradePct": -0.1785986133462104,
        "smoothedEle": 78.58775110173416,
        "gradeBand": "descent"
      },
      {
        "lat": 23.93112066666667,
        "lng": 121.5383785,
        "ele": 78.41666666666667,
        "distanceKm": 5.945008930411648,
        "gradePct": -0.21278269683305015,
        "smoothedEle": 78.43642683485436,
        "gradeBand": "descent"
      },
      {
        "lat": 23.930713,
        "lng": 121.538199,
        "ele": 78.25,
        "distanceKm": 5.993872918939051,
        "gradePct": -0.24893870107143826,
        "smoothedEle": 78.26921169861562,
        "gradeBand": "descent"
      },
      {
        "lat": 23.930305333333333,
        "lng": 121.5380195,
        "ele": 78.08333333333333,
        "distanceKm": 6.042736928974447,
        "gradePct": -0.28387750074928436,
        "smoothedEle": 78.09052665764551,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92989766666667,
        "lng": 121.53784,
        "ele": 77.91666666666667,
        "distanceKm": 6.0916009605166455,
        "gradePct": -0.3050341602414905,
        "smoothedEle": 77.93399896146909,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92949,
        "lng": 121.5376605,
        "ele": 77.75,
        "distanceKm": 6.140465013566092,
        "gradePct": -0.31897268538183254,
        "smoothedEle": 77.78008406523281,
        "gradeBand": "descent"
      },
      {
        "lat": 23.929082333333334,
        "lng": 121.537481,
        "ele": 77.58333333333333,
        "distanceKm": 6.189329088122134,
        "gradePct": -0.32639091112726737,
        "smoothedEle": 77.62716431074053,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92867466666667,
        "lng": 121.5373015,
        "ele": 77.41666666666667,
        "distanceKm": 6.2381931841841185,
        "gradePct": -0.33607583846683553,
        "smoothedEle": 77.44930664790103,
        "gradeBand": "descent"
      },
      {
        "lat": 23.928267,
        "lng": 121.537122,
        "ele": 77.25,
        "distanceKm": 6.287057301752491,
        "gradePct": -0.34867468130629714,
        "smoothedEle": 77.24651105482732,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9278635,
        "lng": 121.536948,
        "ele": 77.125,
        "distanceKm": 6.335284155985096,
        "gradePct": -0.3663057872202796,
        "smoothedEle": 77.01886246341769,
        "gradeBand": "descent"
      },
      {
        "lat": 23.927460000000004,
        "lng": 121.53677400000001,
        "ele": 77,
        "distanceKm": 6.383511030482327,
        "gradePct": -0.401248812277795,
        "smoothedEle": 76.75616725312892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.927056500000003,
        "lng": 121.5366,
        "ele": 76.875,
        "distanceKm": 6.431737925245713,
        "gradePct": -0.44971592322293485,
        "smoothedEle": 76.45842539664035,
        "gradeBand": "descent"
      },
      {
        "lat": 23.926653,
        "lng": 121.536426,
        "ele": 76.75,
        "distanceKm": 6.479964840274088,
        "gradePct": -0.5096294080576582,
        "smoothedEle": 76.12758142990903,
        "gradeBand": "descent"
      },
      {
        "lat": 23.926272,
        "lng": 121.536254,
        "ele": 76.75,
        "distanceKm": 6.525795422583654,
        "gradePct": -0.5703384687717662,
        "smoothedEle": 75.78341715366446,
        "gradeBand": "descent"
      },
      {
        "lat": 23.925840666666666,
        "lng": 121.536064,
        "ele": 76.16666666666666,
        "distanceKm": 6.577499441132378,
        "gradePct": -0.6438537113464381,
        "smoothedEle": 75.35461690157938,
        "gradeBand": "descent"
      },
      {
        "lat": 23.925409333333334,
        "lng": 121.535874,
        "ele": 75.58333333333334,
        "distanceKm": 6.629203483772199,
        "gradePct": -0.7273589082026513,
        "smoothedEle": 74.8654887609354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.924978,
        "lng": 121.535684,
        "ele": 75,
        "distanceKm": 6.680907550504587,
        "gradePct": -0.8173132985245583,
        "smoothedEle": 74.31840869788395,
        "gradeBand": "descent"
      },
      {
        "lat": 23.924605,
        "lng": 121.535509,
        "ele": 74.33333333333333,
        "distanceKm": 6.7260365092527366,
        "gradePct": -0.8927428690751313,
        "smoothedEle": 73.81539603229989,
        "gradeBand": "descent"
      },
      {
        "lat": 23.924232,
        "lng": 121.53533399999999,
        "ele": 73.66666666666667,
        "distanceKm": 6.771165488249805,
        "gradePct": -0.9546188530763597,
        "smoothedEle": 73.32408976291215,
        "gradeBand": "descent"
      },
      {
        "lat": 23.923859,
        "lng": 121.535159,
        "ele": 73,
        "distanceKm": 6.816294487494406,
        "gradePct": -1.0034248079684722,
        "smoothedEle": 72.8444899019715,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9234173580566,
        "lng": 121.53497326273408,
        "ele": 72.24954640033843,
        "distanceKm": 6.868906665543126,
        "gradePct": -1.0451220971395123,
        "smoothedEle": 72.29051362688959,
        "gradeBand": "descent"
      },
      {
        "lat": 23.922975716113196,
        "lng": 121.53478752546818,
        "ele": 71.49909280067688,
        "distanceKm": 6.921518866756871,
        "gradePct": -1.0764940055151164,
        "smoothedEle": 71.70870439510284,
        "gradeBand": "descent"
      },
      {
        "lat": 23.922534,
        "lng": 121.534602,
        "ele": 70.5,
        "distanceKm": 6.97413106948699,
        "gradePct": -1.0855141844497265,
        "smoothedEle": 71.1335680027573,
        "gradeBand": "descent"
      },
      {
        "lat": 23.922165,
        "lng": 121.53446450000001,
        "ele": 69.625,
        "distanceKm": 7.017476976790916,
        "gradePct": -1.079862472282993,
        "smoothedEle": 70.67121416787683,
        "gradeBand": "descent"
      },
      {
        "lat": 23.921796,
        "lng": 121.534327,
        "ele": 68.75,
        "distanceKm": 7.060822896969211,
        "gradePct": -1.0736113527853213,
        "smoothedEle": 70.21585253370672,
        "gradeBand": "descent"
      },
      {
        "lat": 23.921381,
        "lng": 121.534199,
        "ele": 68.83333333333333,
        "distanceKm": 7.108767858578741,
        "gradePct": -1.0664111578366218,
        "smoothedEle": 69.72524424653267,
        "gradeBand": "descent"
      },
      {
        "lat": 23.920966,
        "lng": 121.534071,
        "ele": 68.91666666666667,
        "distanceKm": 7.156712831531609,
        "gradePct": -1.0547845739084643,
        "smoothedEle": 69.25455403358086,
        "gradeBand": "descent"
      },
      {
        "lat": 23.920551,
        "lng": 121.533943,
        "ele": 69,
        "distanceKm": 7.204657815827663,
        "gradePct": -1.0304598454426313,
        "smoothedEle": 68.80378189463218,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92012225,
        "lng": 121.533817125,
        "ele": 68.59375,
        "distanceKm": 7.254019689901446,
        "gradePct": -0.9985903351400374,
        "smoothedEle": 68.3576468743563,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9196935,
        "lng": 121.53369125,
        "ele": 68.1875,
        "distanceKm": 7.30338157498238,
        "gradePct": -0.9726961532419793,
        "smoothedEle": 67.90347584466234,
        "gradeBand": "descent"
      },
      {
        "lat": 23.91926475,
        "lng": 121.533565375,
        "ele": 67.78125,
        "distanceKm": 7.352743471071451,
        "gradePct": -0.9498473084966202,
        "smoothedEle": 67.451187352437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.918836000000002,
        "lng": 121.5334395,
        "ele": 67.375,
        "distanceKm": 7.402105378166997,
        "gradePct": -0.9287128895877673,
        "smoothedEle": 67.00728100211857,
        "gradeBand": "descent"
      },
      {
        "lat": 23.91840725,
        "lng": 121.533313625,
        "ele": 66.96875,
        "distanceKm": 7.451467296270002,
        "gradePct": -0.9082652815949555,
        "smoothedEle": 66.58125518539997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9179785,
        "lng": 121.53318775,
        "ele": 66.5625,
        "distanceKm": 7.5008292253803095,
        "gradePct": -0.893058707819388,
        "smoothedEle": 66.16060165125306,
        "gradeBand": "descent"
      },
      {
        "lat": 23.917549750000003,
        "lng": 121.533061875,
        "ele": 66.15625,
        "distanceKm": 7.550191165496635,
        "gradePct": -0.8873545455317029,
        "smoothedEle": 65.73018562766264,
        "gradeBand": "descent"
      },
      {
        "lat": 23.917121,
        "lng": 121.532936,
        "ele": 65.75,
        "distanceKm": 7.5995531166199655,
        "gradePct": -0.8828979281351087,
        "smoothedEle": 65.29000711038925,
        "gradeBand": "descent"
      },
      {
        "lat": 23.916695584902513,
        "lng": 121.53281028631872,
        "ele": 64.93286107160728,
        "distanceKm": 7.648552743274676,
        "gradePct": -0.8745293476088236,
        "smoothedEle": 64.86599771215792,
        "gradeBand": "descent"
      },
      {
        "lat": 23.91627016980502,
        "lng": 121.53268457263742,
        "ele": 64.11572214321455,
        "distanceKm": 7.697552380903431,
        "gradePct": -0.8792674317950954,
        "smoothedEle": 64.41042332409516,
        "gradeBand": "descent"
      },
      {
        "lat": 23.915844754707532,
        "lng": 121.53255885895614,
        "ele": 63.29858321482183,
        "distanceKm": 7.746552029504565,
        "gradePct": -0.9040798561947629,
        "smoothedEle": 63.91143760158875,
        "gradeBand": "descent"
      },
      {
        "lat": 23.91541934142084,
        "lng": 121.5324331379897,
        "ele": 62.498588752314745,
        "distanceKm": 7.795551687820867,
        "gradePct": -0.9446416054606157,
        "smoothedEle": 63.37165106634851,
        "gradeBand": "descent"
      },
      {
        "lat": 23.91499400606563,
        "lng": 121.53230710349227,
        "ele": 62.43644156423606,
        "distanceKm": 7.844551314396411,
        "gradePct": -0.9955123702920623,
        "smoothedEle": 62.79282572251377,
        "gradeBand": "descent"
      },
      {
        "lat": 23.91456867071042,
        "lng": 121.53218106899484,
        "ele": 62.37429437615737,
        "distanceKm": 7.89355095199866,
        "gradePct": -1.049942774150225,
        "smoothedEle": 62.19370227846747,
        "gradeBand": "descent"
      },
      {
        "lat": 23.91414333535521,
        "lng": 121.53205503449743,
        "ele": 62.31214718807868,
        "distanceKm": 7.942550600627085,
        "gradePct": -1.1169030935585205,
        "smoothedEle": 61.567226886239126,
        "gradeBand": "descent"
      },
      {
        "lat": 23.913718,
        "lng": 121.531929,
        "ele": 62.25,
        "distanceKm": 7.991550260282289,
        "gradePct": -1.185525808789673,
        "smoothedEle": 60.9096506457076,
        "gradeBand": "descent"
      },
      {
        "lat": 23.91325539083178,
        "lng": 121.53179571176511,
        "ele": 61.28401384398561,
        "distanceKm": 8.04474450744713,
        "gradePct": -1.2434511462815137,
        "smoothedEle": 60.19949098249751,
        "gradeBand": "descent"
      },
      {
        "lat": 23.91279426055452,
        "lng": 121.53165614117674,
        "ele": 60.189342562657075,
        "distanceKm": 8.09794648672815,
        "gradePct": -1.2598923564485964,
        "smoothedEle": 59.56368459159703,
        "gradeBand": "descent"
      },
      {
        "lat": 23.912333130277258,
        "lng": 121.53151657058838,
        "ele": 59.09467128132854,
        "distanceKm": 8.151148479510653,
        "gradePct": -1.235768678436522,
        "smoothedEle": 59.00485549298565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.911872,
        "lng": 121.531377,
        "ele": 58,
        "distanceKm": 8.204350485794446,
        "gradePct": -1.1828666777805175,
        "smoothedEle": 58.5070269249965,
        "gradeBand": "descent"
      },
      {
        "lat": 23.911381,
        "lng": 121.531249,
        "ele": 57.25,
        "distanceKm": 8.260476280659418,
        "gradePct": -1.1224026514447285,
        "smoothedEle": 57.95945601029328,
        "gradeBand": "descent"
      },
      {
        "lat": 23.910863499999998,
        "lng": 121.5310925,
        "ele": 56.125,
        "distanceKm": 8.320178287835786,
        "gradePct": -1.0583280621415625,
        "smoothedEle": 57.35247343110151,
        "gradeBand": "descent"
      },
      {
        "lat": 23.910346,
        "lng": 121.530936,
        "ele": 55,
        "distanceKm": 8.37988031198723,
        "gradePct": -1.0196486263414783,
        "smoothedEle": 56.720644013740575,
        "gradeBand": "descent"
      },
      {
        "lat": 23.90985166666667,
        "lng": 121.53078233333333,
        "ele": 55.166666666666664,
        "distanceKm": 8.437024187630604,
        "gradePct": -1.0109363601922279,
        "smoothedEle": 56.12040674417548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.909357333333332,
        "lng": 121.53062866666666,
        "ele": 55.333333333333336,
        "distanceKm": 8.494168079607793,
        "gradePct": -1.0162362340376965,
        "smoothedEle": 55.55359832686193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.908863,
        "lng": 121.530475,
        "ele": 55.5,
        "distanceKm": 8.551311987916987,
        "gradePct": -1.00816409122965,
        "smoothedEle": 55.024371827334335,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9084615,
        "lng": 121.53037575,
        "ele": 55.1875,
        "distanceKm": 8.597082622304061,
        "gradePct": -0.9847132832943094,
        "smoothedEle": 54.633144223198904,
        "gradeBand": "descent"
      },
      {
        "lat": 23.90806,
        "lng": 121.5302765,
        "ele": 54.87499999999999,
        "distanceKm": 8.642853263600568,
        "gradePct": -0.9581335594399933,
        "smoothedEle": 54.238102384443714,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9076585,
        "lng": 121.53017725,
        "ele": 54.5625,
        "distanceKm": 8.688623911805328,
        "gradePct": -0.9334566232853024,
        "smoothedEle": 53.82843167744543,
        "gradeBand": "descent"
      },
      {
        "lat": 23.907257,
        "lng": 121.530078,
        "ele": 54.25,
        "distanceKm": 8.734394566918319,
        "gradePct": -0.9138042879355414,
        "smoothedEle": 53.40661532428674,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9067395,
        "lng": 121.52988400000001,
        "ele": 53.5,
        "distanceKm": 8.795223589583324,
        "gradePct": -0.895035504379126,
        "smoothedEle": 52.8587164261794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.906222,
        "lng": 121.52969,
        "ele": 52.75,
        "distanceKm": 8.856052637847485,
        "gradePct": -0.907715379001341,
        "smoothedEle": 52.26070466327465,
        "gradeBand": "descent"
      },
      {
        "lat": 23.905854,
        "lng": 121.52960666666667,
        "ele": 52.24999999999999,
        "distanceKm": 8.897840104535945,
        "gradePct": -0.9352794141890188,
        "smoothedEle": 51.820768227058124,
        "gradeBand": "descent"
      },
      {
        "lat": 23.905486,
        "lng": 121.52952333333333,
        "ele": 51.75000000000001,
        "distanceKm": 8.939627576114038,
        "gradePct": -0.9699467394402321,
        "smoothedEle": 51.35610275301087,
        "gradeBand": "descent"
      },
      {
        "lat": 23.905118,
        "lng": 121.52944,
        "ele": 51.25,
        "distanceKm": 8.981415052580934,
        "gradePct": -1.001186161970374,
        "smoothedEle": 50.88939616796009,
        "gradeBand": "descent"
      },
      {
        "lat": 23.904745666666667,
        "lng": 121.52934433333333,
        "ele": 50.333333333333336,
        "distanceKm": 9.023943560594317,
        "gradePct": -1.0313609900260399,
        "smoothedEle": 50.40884745748923,
        "gradeBand": "descent"
      },
      {
        "lat": 23.904373333333336,
        "lng": 121.52924866666666,
        "ele": 49.416666666666664,
        "distanceKm": 9.066472075012925,
        "gradePct": -1.0627404284318611,
        "smoothedEle": 49.929465653015704,
        "gradeBand": "descent"
      },
      {
        "lat": 23.904001,
        "lng": 121.529153,
        "ele": 48.5,
        "distanceKm": 9.10900059583745,
        "gradePct": -1.0885284485321212,
        "smoothedEle": 49.457689017412804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9035276,
        "lng": 121.5290112,
        "ele": 48.1,
        "distanceKm": 9.16357840185139,
        "gradePct": -1.107337553432129,
        "smoothedEle": 48.85946112209313,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9030542,
        "lng": 121.52886939999999,
        "ele": 47.7,
        "distanceKm": 9.218156221808039,
        "gradePct": -1.1138819038024363,
        "smoothedEle": 48.25321274158384,
        "gradeBand": "descent"
      },
      {
        "lat": 23.902580800000003,
        "lng": 121.5287276,
        "ele": 47.3,
        "distanceKm": 9.272734055706039,
        "gradePct": -1.1149383647550501,
        "smoothedEle": 47.641535442536245,
        "gradeBand": "descent"
      },
      {
        "lat": 23.902107400000002,
        "lng": 121.52858579999999,
        "ele": 46.9,
        "distanceKm": 9.327311903546702,
        "gradePct": -1.1115928494621532,
        "smoothedEle": 47.036100916458906,
        "gradeBand": "descent"
      },
      {
        "lat": 23.901634,
        "lng": 121.528444,
        "ele": 46.5,
        "distanceKm": 9.381889765328674,
        "gradePct": -1.1045583216240662,
        "smoothedEle": 46.4447594384101,
        "gradeBand": "descent"
      },
      {
        "lat": 23.901158086660732,
        "lng": 121.52830697347947,
        "ele": 46.1461426204482,
        "distanceKm": 9.43661169935254,
        "gradePct": -1.0830686813290549,
        "smoothedEle": 45.90583738266909,
        "gradeBand": "descent"
      },
      {
        "lat": 23.900684,
        "lng": 121.528162,
        "ele": 46,
        "distanceKm": 9.491349215106599,
        "gradePct": -1.0450473798207203,
        "smoothedEle": 45.4158418288207,
        "gradeBand": "descent"
      },
      {
        "lat": 23.900293333333334,
        "lng": 121.52802033333333,
        "ele": 45.33333333333332,
        "distanceKm": 9.537114544870617,
        "gradePct": -1.0049299999372894,
        "smoothedEle": 45.02594864712282,
        "gradeBand": "descent"
      },
      {
        "lat": 23.899902666666666,
        "lng": 121.52787866666667,
        "ele": 44.66666666666668,
        "distanceKm": 9.58287988832904,
        "gradePct": -0.9623844548573433,
        "smoothedEle": 44.64183389937535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.899512,
        "lng": 121.527737,
        "ele": 44,
        "distanceKm": 9.628645245480945,
        "gradePct": -0.919385600720837,
        "smoothedEle": 44.263497590295714,
        "gradeBand": "descent"
      },
      {
        "lat": 23.899090780892735,
        "lng": 121.52761143078894,
        "ele": 43.59002589670977,
        "distanceKm": 9.677191190360585,
        "gradePct": -0.8755339305092187,
        "smoothedEle": 43.86906587552381,
        "gradeBand": "descent"
      },
      {
        "lat": 23.898669561785468,
        "lng": 121.52748586157787,
        "ele": 43.18005179341955,
        "distanceKm": 9.725737146175533,
        "gradePct": -0.8423550515920917,
        "smoothedEle": 43.4858688913781,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8982483426782,
        "lng": 121.52736029236681,
        "ele": 42.77007769012933,
        "distanceKm": 9.774283112925643,
        "gradePct": -0.8159023512023377,
        "smoothedEle": 43.12090594275742,
        "gradeBand": "descent"
      },
      {
        "lat": 23.897827123570934,
        "lng": 121.52723472315574,
        "ele": 42.36010358683911,
        "distanceKm": 9.822829090610766,
        "gradePct": -0.7923099852912147,
        "smoothedEle": 42.770722200042684,
        "gradeBand": "descent"
      },
      {
        "lat": 23.897405789540002,
        "lng": 121.52710961753732,
        "ele": 41.97218092325613,
        "distanceKm": 9.871375039697119,
        "gradePct": -0.7687999968227555,
        "smoothedEle": 42.431995667132234,
        "gradeBand": "descent"
      },
      {
        "lat": 23.896984592155004,
        "lng": 121.52698396315299,
        "ele": 41.72913569244211,
        "distanceKm": 9.919920986651219,
        "gradePct": -0.7331634452683088,
        "smoothedEle": 42.136129577804866,
        "gradeBand": "descent"
      },
      {
        "lat": 23.896563394770002,
        "lng": 121.52685830876867,
        "ele": 41.486090461628066,
        "distanceKm": 9.968466944554175,
        "gradePct": -0.6805428586433596,
        "smoothedEle": 41.89832106222407,
        "gradeBand": "descent"
      },
      {
        "lat": 23.896142197385004,
        "lng": 121.52673265438433,
        "ele": 41.24304523081404,
        "distanceKm": 10.017012913405836,
        "gradePct": -0.6120544621794778,
        "smoothedEle": 41.71857014310277,
        "gradeBand": "descent"
      },
      {
        "lat": 23.895721,
        "lng": 121.526607,
        "ele": 41,
        "distanceKm": 10.065558893206434,
        "gradePct": -0.5373736077927529,
        "smoothedEle": 41.57437279156471,
        "gradeBand": "descent"
      },
      {
        "lat": 23.895311717450266,
        "lng": 121.52648814354175,
        "ele": 40.91606182327007,
        "distanceKm": 10.112645920603688,
        "gradePct": -0.46355633491472653,
        "smoothedEle": 41.45350893263906,
        "gradeBand": "descent"
      },
      {
        "lat": 23.89490243490053,
        "lng": 121.5263692870835,
        "ele": 40.83212364654015,
        "distanceKm": 10.15973295781484,
        "gradePct": -0.3873707496578917,
        "smoothedEle": 41.35111536657158,
        "gradeBand": "descent"
      },
      {
        "lat": 23.894493157607034,
        "lng": 121.52625040909822,
        "ele": 40.75403148615367,
        "distanceKm": 10.206820001622262,
        "gradePct": -0.3166527559996451,
        "smoothedEle": 41.26601602290874,
        "gradeBand": "descent"
      },
      {
        "lat": 23.894084118205278,
        "lng": 121.52613055682367,
        "ele": 40.94052361461525,
        "distanceKm": 10.253907023876097,
        "gradePct": -0.2571310177749779,
        "smoothedEle": 41.198251622089536,
        "gradeBand": "descent"
      },
      {
        "lat": 23.89367507880352,
        "lng": 121.52601070454912,
        "ele": 41.12701574307684,
        "distanceKm": 10.30099405610266,
        "gradePct": -0.20119864446749083,
        "smoothedEle": 41.17428715352715,
        "gradeBand": "descent"
      },
      {
        "lat": 23.89326603940176,
        "lng": 121.52589085227456,
        "ele": 41.31350787153841,
        "distanceKm": 10.348081098301808,
        "gradePct": -0.14197549365153336,
        "smoothedEle": 41.20036104683182,
        "gradeBand": "descent"
      },
      {
        "lat": 23.892857,
        "lng": 121.525771,
        "ele": 41.5,
        "distanceKm": 10.395168150472665,
        "gradePct": -0.07396595837436813,
        "smoothedEle": 41.276473323414145,
        "gradeBand": "descent"
      },
      {
        "lat": 23.89237725,
        "lng": 121.525626,
        "ele": 41.375,
        "distanceKm": 10.450513375947851,
        "gradePct": 0.016427903650717668,
        "smoothedEle": 41.42044760724495,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8918975,
        "lng": 121.525481,
        "ele": 41.25,
        "distanceKm": 10.505858615987288,
        "gradePct": 0.11471038006729582,
        "smoothedEle": 41.61188465350985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.89141775,
        "lng": 121.52533600000001,
        "ele": 41.125,
        "distanceKm": 10.561203870590365,
        "gradePct": 0.21855593813218566,
        "smoothedEle": 41.85020578019009,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.890938,
        "lng": 121.525191,
        "ele": 41,
        "distanceKm": 10.616549139757629,
        "gradePct": 0.3152148443809459,
        "smoothedEle": 42.12854513046732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.890513,
        "lng": 121.52506933333333,
        "ele": 41.58333333333333,
        "distanceKm": 10.665399079760455,
        "gradePct": 0.3895895271415493,
        "smoothedEle": 42.39712269500963,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.890088,
        "lng": 121.52494766666668,
        "ele": 42.16666666666667,
        "distanceKm": 10.714249030053969,
        "gradePct": 0.4538293750710844,
        "smoothedEle": 42.68759817788441,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.889663,
        "lng": 121.524826,
        "ele": 42.75,
        "distanceKm": 10.76309899063876,
        "gradePct": 0.5119969420451381,
        "smoothedEle": 42.999971588176315,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.889258333333334,
        "lng": 121.52470000000001,
        "ele": 43.166666666666664,
        "distanceKm": 10.80988390172149,
        "gradePct": 0.5654744356092334,
        "smoothedEle": 43.325641165113005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.888853666666666,
        "lng": 121.524574,
        "ele": 43.583333333333336,
        "distanceKm": 10.856668823777534,
        "gradePct": 0.6192200200645539,
        "smoothedEle": 43.688337563321284,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.888449,
        "lng": 121.524448,
        "ele": 44,
        "distanceKm": 10.9034537568052,
        "gradePct": 0.6822384672971759,
        "smoothedEle": 44.109401960570274,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.888032698260147,
        "lng": 121.52433213152189,
        "ele": 44.409694350896956,
        "distanceKm": 10.951219910311906,
        "gradePct": 0.7557355530079526,
        "smoothedEle": 44.586372107873025,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.887617558608117,
        "lng": 121.52421090521752,
        "ele": 44.92775548071757,
        "distanceKm": 10.998998470007393,
        "gradePct": 0.8243038694578909,
        "smoothedEle": 45.069825685925885,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.88720241895609,
        "lng": 121.52408967891313,
        "ele": 45.44581661053816,
        "distanceKm": 11.046777039905376,
        "gradePct": 0.8746713141889662,
        "smoothedEle": 45.51961403581941,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.88678727930406,
        "lng": 121.52396845260876,
        "ele": 45.963877740358775,
        "distanceKm": 11.094555620005734,
        "gradePct": 0.9016066152473248,
        "smoothedEle": 45.923760903790345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.886372139652032,
        "lng": 121.52384722630437,
        "ele": 46.481938870179384,
        "distanceKm": 11.142334210308315,
        "gradePct": 0.9198586910001204,
        "smoothedEle": 46.33678568213235,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.885957,
        "lng": 121.523726,
        "ele": 47,
        "distanceKm": 11.190112810812998,
        "gradePct": 0.9226470288088207,
        "smoothedEle": 46.75727453306692,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.885397,
        "lng": 121.523503,
        "ele": 48,
        "distanceKm": 11.256381319512645,
        "gradePct": 0.9067399501848076,
        "smoothedEle": 47.35881834954924,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.884924,
        "lng": 121.523224,
        "ele": 48.75,
        "distanceKm": 11.316138525300715,
        "gradePct": 0.8607154099574008,
        "smoothedEle": 47.81332871663847,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.884604333333336,
        "lng": 121.522997,
        "ele": 48.583333333333336,
        "distanceKm": 11.358519457802645,
        "gradePct": 0.8232451839172067,
        "smoothedEle": 48.08867571667782,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.884284666666666,
        "lng": 121.52277,
        "ele": 48.416666666666664,
        "distanceKm": 11.40090042135764,
        "gradePct": 0.7834449259421638,
        "smoothedEle": 48.328943682685924,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.883965,
        "lng": 121.522543,
        "ele": 48.25,
        "distanceKm": 11.443281415963128,
        "gradePct": 0.7282205411256804,
        "smoothedEle": 48.52978345209351,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.883614,
        "lng": 121.522276,
        "ele": 49,
        "distanceKm": 11.490823468072909,
        "gradePct": 0.6430409482358934,
        "smoothedEle": 48.69284827713428,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.883162088844824,
        "lng": 121.52195628650789,
        "ele": 49.646357921405,
        "distanceKm": 11.550671273357931,
        "gradePct": 0.48905107372355994,
        "smoothedEle": 48.774139365293884,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.88271,
        "lng": 121.521636,
        "ele": 50.5,
        "distanceKm": 11.610567386659623,
        "gradePct": 0.2959157177762741,
        "smoothedEle": 48.65870206357065,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.882421,
        "lng": 121.52144200000001,
        "ele": 50,
        "distanceKm": 11.648273492375894,
        "gradePct": 0.14097532936061644,
        "smoothedEle": 48.44503413117845,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.882132,
        "lng": 121.521248,
        "ele": 49.5,
        "distanceKm": 11.685979621137895,
        "gradePct": -0.025237218346956483,
        "smoothedEle": 48.16864239071149,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8817115,
        "lng": 121.520942,
        "ele": 49.25000000000001,
        "distanceKm": 11.742142355730675,
        "gradePct": -0.28013324857546407,
        "smoothedEle": 47.683985801090074,
        "gradeBand": "descent"
      },
      {
        "lat": 23.881291,
        "lng": 121.520636,
        "ele": 49,
        "distanceKm": 11.79830514633013,
        "gradePct": -0.5067365484640298,
        "smoothedEle": 47.182800972096906,
        "gradeBand": "descent"
      },
      {
        "lat": 23.880824,
        "lng": 121.520132,
        "ele": 48.25,
        "distanceKm": 11.871260736118636,
        "gradePct": -0.7377155193361306,
        "smoothedEle": 46.52131089982924,
        "gradeBand": "descent"
      },
      {
        "lat": 23.88028,
        "lng": 121.520017,
        "ele": 46.5,
        "distanceKm": 11.932870595421296,
        "gradePct": -0.879520491497765,
        "smoothedEle": 45.89375573942788,
        "gradeBand": "descent"
      },
      {
        "lat": 23.879747,
        "lng": 121.519595,
        "ele": 43.75,
        "distanceKm": 12.006039015610838,
        "gradePct": -0.9761480528122469,
        "smoothedEle": 45.06709559071681,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8794075,
        "lng": 121.519359,
        "ele": 42.875000000000014,
        "distanceKm": 12.050770548805966,
        "gradePct": -1.008726083175226,
        "smoothedEle": 44.58081138693646,
        "gradeBand": "descent"
      },
      {
        "lat": 23.879068,
        "lng": 121.519123,
        "ele": 42,
        "distanceKm": 12.095502115767804,
        "gradePct": -1.0310808287933568,
        "smoothedEle": 44.11457213582302,
        "gradeBand": "descent"
      },
      {
        "lat": 23.878709933410274,
        "lng": 121.51888375760736,
        "ele": 41.75,
        "distanceKm": 12.142160261945113,
        "gradePct": -1.0571892288464775,
        "smoothedEle": 43.613597906533606,
        "gradeBand": "descent"
      },
      {
        "lat": 23.878349966705137,
        "lng": 121.51864787880368,
        "ele": 41.75,
        "distanceKm": 12.188822166903764,
        "gradePct": -1.0741779199526889,
        "smoothedEle": 43.119897223055624,
        "gradeBand": "descent"
      },
      {
        "lat": 23.87799,
        "lng": 121.518412,
        "ele": 41.75,
        "distanceKm": 12.235484106147236,
        "gradePct": -1.0595490373442757,
        "smoothedEle": 42.68558106400408,
        "gradeBand": "descent"
      },
      {
        "lat": 23.877671333333332,
        "lng": 121.51818,
        "ele": 41.75,
        "distanceKm": 12.278052105811827,
        "gradePct": -1.0106364486171109,
        "smoothedEle": 42.35138362833339,
        "gradeBand": "descent"
      },
      {
        "lat": 23.877352666666667,
        "lng": 121.51794799999999,
        "ele": 41.75,
        "distanceKm": 12.320620137661201,
        "gradePct": -0.9120832150345969,
        "smoothedEle": 42.17233205574579,
        "gradeBand": "descent"
      },
      {
        "lat": 23.877034,
        "lng": 121.517716,
        "ele": 41.75,
        "distanceKm": 12.363188201694065,
        "gradePct": -0.7873673446074422,
        "smoothedEle": 42.08927956613454,
        "gradeBand": "descent"
      },
      {
        "lat": 23.87674777156415,
        "lng": 121.51751023504832,
        "ele": 41.75,
        "distanceKm": 12.401276214721248,
        "gradePct": -0.6730615225568602,
        "smoothedEle": 42.033390360589806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.87646,
        "lng": 121.517307,
        "ele": 41.75,
        "distanceKm": 12.439367589039211,
        "gradePct": -0.5608367773038112,
        "smoothedEle": 41.961072845605194,
        "gradeBand": "descent"
      },
      {
        "lat": 23.87614,
        "lng": 121.517056,
        "ele": 41.25,
        "distanceKm": 12.483156337639588,
        "gradePct": -0.4248989322441536,
        "smoothedEle": 41.90514705264868,
        "gradeBand": "descent"
      },
      {
        "lat": 23.875835,
        "lng": 121.516718,
        "ele": 41,
        "distanceKm": 12.531440165861861,
        "gradePct": -0.28997199266530943,
        "smoothedEle": 41.853304940687444,
        "gradeBand": "descent"
      },
      {
        "lat": 23.875839,
        "lng": 121.51623,
        "ele": 41.5,
        "distanceKm": 12.581061770617515,
        "gradePct": -0.17834696825255925,
        "smoothedEle": 41.803683335931794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.875950343095848,
        "lng": 121.51581454439182,
        "ele": 42.168025952234835,
        "distanceKm": 12.625082013587939,
        "gradePct": -0.13465453753354445,
        "smoothedEle": 41.75966309296137,
        "gradeBand": "descent"
      },
      {
        "lat": 23.876039,
        "lng": 121.515394,
        "ele": 43.25,
        "distanceKm": 12.66896438128398,
        "gradePct": -0.12167434951584227,
        "smoothedEle": 41.71578072526533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.875882,
        "lng": 121.515013,
        "ele": 44,
        "distanceKm": 12.71145609651905,
        "gradePct": -0.1135915222674813,
        "smoothedEle": 41.67328901003026,
        "gradeBand": "descent"
      },
      {
        "lat": 23.875602019877327,
        "lng": 121.51473307156832,
        "ele": 42.69060634949441,
        "distanceKm": 12.753638677982426,
        "gradePct": -0.10391325742398506,
        "smoothedEle": 41.63110642856689,
        "gradeBand": "descent"
      },
      {
        "lat": 23.875275,
        "lng": 121.514514,
        "ele": 41.5,
        "distanceKm": 12.796281974806357,
        "gradePct": -0.10634457247136903,
        "smoothedEle": 41.57202040232897,
        "gradeBand": "descent"
      },
      {
        "lat": 23.87471,
        "lng": 121.514125,
        "ele": 41,
        "distanceKm": 12.87052142017089,
        "gradePct": -0.1318613808959646,
        "smoothedEle": 41.418639543690524,
        "gradeBand": "descent"
      },
      {
        "lat": 23.874347666666665,
        "lng": 121.51384900000001,
        "ele": 41,
        "distanceKm": 12.919621699569827,
        "gradePct": -0.15945788342669176,
        "smoothedEle": 41.28674975669941,
        "gradeBand": "descent"
      },
      {
        "lat": 23.873985333333334,
        "lng": 121.513573,
        "ele": 41,
        "distanceKm": 12.968722023865668,
        "gradePct": -0.18163013685586268,
        "smoothedEle": 41.17113267211605,
        "gradeBand": "descent"
      },
      {
        "lat": 23.873623,
        "lng": 121.513297,
        "ele": 41,
        "distanceKm": 13.017822393056854,
        "gradePct": -0.20395609824023544,
        "smoothedEle": 41.05505441877175,
        "gradeBand": "descent"
      },
      {
        "lat": 23.873288,
        "lng": 121.513049,
        "ele": 41,
        "distanceKm": 13.062805558619974,
        "gradePct": -0.2432419153078005,
        "smoothedEle": 40.88867916587037,
        "gradeBand": "descent"
      },
      {
        "lat": 23.872902727327798,
        "lng": 121.51277277908416,
        "ele": 41,
        "distanceKm": 13.114032110623336,
        "gradePct": -0.29113709698102197,
        "smoothedEle": 40.66193681326744,
        "gradeBand": "descent"
      },
      {
        "lat": 23.87251674207773,
        "lng": 121.51249775514746,
        "ele": 40.610198016617915,
        "distanceKm": 13.16525844590148,
        "gradePct": -0.2929753976446859,
        "smoothedEle": 40.55058680904364,
        "gradeBand": "descent"
      },
      {
        "lat": 23.872130126461997,
        "lng": 121.512223789384,
        "ele": 39.78962466665508,
        "distanceKm": 13.216484976394296,
        "gradePct": -0.2579690956381994,
        "smoothedEle": 40.52126811942541,
        "gradeBand": "descent"
      },
      {
        "lat": 23.871744,
        "lng": 121.511949,
        "ele": 39,
        "distanceKm": 13.267711546628536,
        "gradePct": -0.2241445271778744,
        "smoothedEle": 40.50107847267146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.87141504806942,
        "lng": 121.51170911978703,
        "ele": 39.452011437572025,
        "distanceKm": 13.311676232655731,
        "gradePct": -0.1955678565234697,
        "smoothedEle": 40.48288099583544,
        "gradeBand": "descent"
      },
      {
        "lat": 23.871085,
        "lng": 121.511471,
        "ele": 40.25,
        "distanceKm": 13.355643579779546,
        "gradePct": -0.13432532749968087,
        "smoothedEle": 40.51219256058465,
        "gradeBand": "descent"
      },
      {
        "lat": 23.870626,
        "lng": 121.51115300000001,
        "ele": 40.375,
        "distanceKm": 13.416063002614852,
        "gradePct": -0.011440840063090218,
        "smoothedEle": 40.62319977014567,
        "gradeBand": "descent"
      },
      {
        "lat": 23.870167,
        "lng": 121.510835,
        "ele": 40.5,
        "distanceKm": 13.476482486800355,
        "gradePct": 0.031997978889412027,
        "smoothedEle": 40.64015684449876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8703805,
        "lng": 121.510475,
        "ele": 40.75,
        "distanceKm": 13.52011285353607,
        "gradePct": 0.033781690859268965,
        "smoothedEle": 40.62118335671219,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.870594,
        "lng": 121.510115,
        "ele": 41,
        "distanceKm": 13.563743169627681,
        "gradePct": 0.029080600359525432,
        "smoothedEle": 40.589884308380256,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.870737,
        "lng": 121.510089,
        "ele": 41,
        "distanceKm": 13.579862352193238,
        "gradePct": 0.0320092652484049,
        "smoothedEle": 40.59207691365986,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.870235,
        "lng": 121.509759,
        "ele": 40.5,
        "distanceKm": 13.644991800801993,
        "gradePct": 0.044873871298210015,
        "smoothedEle": 40.639712988494246,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86973,
        "lng": 121.509405,
        "ele": 41.5,
        "distanceKm": 13.711692193736297,
        "gradePct": 0.029789140783558734,
        "smoothedEle": 40.70453680633302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86932,
        "lng": 121.509146,
        "ele": 42.5,
        "distanceKm": 13.764342419987184,
        "gradePct": 0.03423978026714746,
        "smoothedEle": 40.73946900600403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86886,
        "lng": 121.50895,
        "ele": 41.25,
        "distanceKm": 13.81923786174639,
        "gradePct": 0.05388405743421731,
        "smoothedEle": 40.78321603569578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.868410500000003,
        "lng": 121.5087505,
        "ele": 40.62500000000001,
        "distanceKm": 13.87317994994558,
        "gradePct": 0.08473808321956472,
        "smoothedEle": 40.84538219225944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.867961,
        "lng": 121.508551,
        "ele": 40,
        "distanceKm": 13.927122064629165,
        "gradePct": 0.09563157885715136,
        "smoothedEle": 40.91353769134388,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86745,
        "lng": 121.5083415,
        "ele": 40,
        "distanceKm": 13.987804983795833,
        "gradePct": 0.10338197893110368,
        "smoothedEle": 40.99146758534784,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.866939,
        "lng": 121.508132,
        "ele": 40,
        "distanceKm": 14.048487932474735,
        "gradePct": 0.13244108190651804,
        "smoothedEle": 41.126273168276015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.866425,
        "lng": 121.507908,
        "ele": 40.75,
        "distanceKm": 14.110013862465324,
        "gradePct": 0.1394686323921966,
        "smoothedEle": 41.19427118465915,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.865965053074145,
        "lng": 121.50768787177164,
        "ele": 40.969260733153824,
        "distanceKm": 14.16584167267084,
        "gradePct": 0.11398319761887377,
        "smoothedEle": 41.178874706252444,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86550402653707,
        "lng": 121.50747043588582,
        "ele": 41.35963036657691,
        "distanceKm": 14.22167051889691,
        "gradePct": 0.10895258323857816,
        "smoothedEle": 41.23350744969438,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.865043,
        "lng": 121.507253,
        "ele": 41.75,
        "distanceKm": 14.277499396295505,
        "gradePct": 0.11062260828456254,
        "smoothedEle": 41.310100823721875,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.864656333333333,
        "lng": 121.50708300000001,
        "ele": 41.916666666666664,
        "distanceKm": 14.323839951073522,
        "gradePct": 0.11042120361815908,
        "smoothedEle": 41.40278193327791,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86426966666667,
        "lng": 121.506913,
        "ele": 42.083333333333336,
        "distanceKm": 14.37018052510518,
        "gradePct": 0.11507180511074913,
        "smoothedEle": 41.49546308134122,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.863883,
        "lng": 121.506743,
        "ele": 42.25,
        "distanceKm": 14.416521118389891,
        "gradePct": 0.1318892291663684,
        "smoothedEle": 41.58814426791065,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86354123041008,
        "lng": 121.50655034981125,
        "ele": 42.25,
        "distanceKm": 14.459276466042068,
        "gradePct": 0.16264803406732362,
        "smoothedEle": 41.66862939464297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.863206,
        "lng": 121.506344,
        "ele": 42.25,
        "distanceKm": 14.502052725824882,
        "gradePct": 0.16569856573838337,
        "smoothedEle": 41.71140565442578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.862652,
        "lng": 121.505962,
        "ele": 42,
        "distanceKm": 14.574879814316272,
        "gradePct": 0.1609555807906793,
        "smoothedEle": 41.7893736800679,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.862118,
        "lng": 121.50556,
        "ele": 41.5,
        "distanceKm": 14.64696930214466,
        "gradePct": 0.14116194678940244,
        "smoothedEle": 41.87252647578839,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8617804,
        "lng": 121.505314,
        "ele": 41.5,
        "distanceKm": 14.692080316560224,
        "gradePct": 0.12977574728300775,
        "smoothedEle": 41.928589906100335,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8614428,
        "lng": 121.505068,
        "ele": 41.5,
        "distanceKm": 14.737191367132585,
        "gradePct": 0.12242062181543854,
        "smoothedEle": 41.994316999038105,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8611052,
        "lng": 121.504822,
        "ele": 41.5,
        "distanceKm": 14.782302453859867,
        "gradePct": 0.12601746100785713,
        "smoothedEle": 42.06970776548434,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8607676,
        "lng": 121.504576,
        "ele": 41.5,
        "distanceKm": 14.827413576743915,
        "gradePct": 0.13967753600419966,
        "smoothedEle": 42.15758936123584,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86043,
        "lng": 121.50433,
        "ele": 41.5,
        "distanceKm": 14.872524735782852,
        "gradePct": 0.15934459535554843,
        "smoothedEle": 42.26488614024761,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.860057666666666,
        "lng": 121.50405611111111,
        "ele": 41.86111111111111,
        "distanceKm": 14.92242306309724,
        "gradePct": 0.18877587401130053,
        "smoothedEle": 42.41054083797398,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.859685333333335,
        "lng": 121.50378222222221,
        "ele": 42.22222222222223,
        "distanceKm": 14.972321435097639,
        "gradePct": 0.22989344826498784,
        "smoothedEle": 42.5937141488375,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.859313,
        "lng": 121.50350833333333,
        "ele": 42.583333333333336,
        "distanceKm": 15.022219851782523,
        "gradePct": 0.28051612323694936,
        "smoothedEle": 42.81405177389032,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.858940666666665,
        "lng": 121.50323444444444,
        "ele": 42.94444444444444,
        "distanceKm": 15.072118313151803,
        "gradePct": 0.33457929169508244,
        "smoothedEle": 43.056425652152576,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.858568333333334,
        "lng": 121.50296055555555,
        "ele": 43.30555555555556,
        "distanceKm": 15.122016819205388,
        "gradePct": 0.3882303978939623,
        "smoothedEle": 43.31176705771242,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.858196,
        "lng": 121.50268666666666,
        "ele": 43.666666666666664,
        "distanceKm": 15.171915369941756,
        "gradePct": 0.43887974942920394,
        "smoothedEle": 43.58007601340538,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.857823666666665,
        "lng": 121.50241277777778,
        "ele": 44.02777777777777,
        "distanceKm": 15.221813965360814,
        "gradePct": 0.4841965594873669,
        "smoothedEle": 43.861352542073824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.857451333333334,
        "lng": 121.50213888888888,
        "ele": 44.38888888888889,
        "distanceKm": 15.271712605462474,
        "gradePct": 0.5213724957442132,
        "smoothedEle": 44.15559666656003,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.857079,
        "lng": 121.501865,
        "ele": 44.75,
        "distanceKm": 15.32161129024521,
        "gradePct": 0.5425950439122986,
        "smoothedEle": 44.439149665976366,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85671122222222,
        "lng": 121.50158588888888,
        "ele": 44.94444444444444,
        "distanceKm": 15.37139141844276,
        "gradePct": 0.55269115573106,
        "smoothedEle": 44.71096834334818,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.856343444444445,
        "lng": 121.50130677777777,
        "ele": 45.138888888888886,
        "distanceKm": 15.421171592581972,
        "gradePct": 0.554637651510898,
        "smoothedEle": 44.97135480551833,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.855975666666666,
        "lng": 121.50102766666666,
        "ele": 45.333333333333336,
        "distanceKm": 15.470951812662914,
        "gradePct": 0.5805154345902216,
        "smoothedEle": 45.31644118378798,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.855607888888887,
        "lng": 121.50074855555555,
        "ele": 45.52777777777778,
        "distanceKm": 15.520732078684684,
        "gradePct": 0.6252476430746734,
        "smoothedEle": 45.73099691629607,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85524011111111,
        "lng": 121.50046944444445,
        "ele": 45.72222222222222,
        "distanceKm": 15.570512390645554,
        "gradePct": 0.6776674786217223,
        "smoothedEle": 46.1815216318312,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.854872333333333,
        "lng": 121.50019033333334,
        "ele": 45.916666666666664,
        "distanceKm": 15.620292748547243,
        "gradePct": 0.7410433968032855,
        "smoothedEle": 46.65478714480591,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.854504555555554,
        "lng": 121.49991122222222,
        "ele": 46.111111111111114,
        "distanceKm": 15.670073152388023,
        "gradePct": 0.8156744647112699,
        "smoothedEle": 47.15079349697122,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85413677777778,
        "lng": 121.49963211111111,
        "ele": 46.30555555555556,
        "distanceKm": 15.719853602166989,
        "gradePct": 0.8939606778101353,
        "smoothedEle": 47.64634279192568,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.853769,
        "lng": 121.499353,
        "ele": 46.5,
        "distanceKm": 15.769634097884214,
        "gradePct": 0.9461349408576517,
        "smoothedEle": 48.14571134564962,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8533305,
        "lng": 121.499017,
        "ele": 48.25000000000003,
        "distanceKm": 15.82917439492059,
        "gradePct": 0.9811207515475385,
        "smoothedEle": 48.75076431929591,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852892,
        "lng": 121.498681,
        "ele": 50,
        "distanceKm": 15.888714758317365,
        "gradePct": 1.0037245035862934,
        "smoothedEle": 49.36574638682916,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852542333333332,
        "lng": 121.49842000000001,
        "ele": 50.666666666666664,
        "distanceKm": 15.935792190822495,
        "gradePct": 0.9971481448260183,
        "smoothedEle": 49.800666281102245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852192666666667,
        "lng": 121.498159,
        "ele": 51.333333333333336,
        "distanceKm": 15.982869663710412,
        "gradePct": 0.9946741689640535,
        "smoothedEle": 50.26220139696134,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851843,
        "lng": 121.497898,
        "ele": 52,
        "distanceKm": 16.029947176979658,
        "gradePct": 1.0064884432419277,
        "smoothedEle": 50.76706090717491,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851481333333332,
        "lng": 121.49763366666667,
        "ele": 52.25,
        "distanceKm": 16.07832019837561,
        "gradePct": 1.0319018960236526,
        "smoothedEle": 51.32968583977808,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851119666666666,
        "lng": 121.49736933333334,
        "ele": 52.5,
        "distanceKm": 16.126693261464556,
        "gradePct": 1.062814519664151,
        "smoothedEle": 51.9139944136214,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.850758,
        "lng": 121.497105,
        "ele": 52.75,
        "distanceKm": 16.175066366245975,
        "gradePct": 1.0995158443394784,
        "smoothedEle": 52.52332204974607,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.850478,
        "lng": 121.496793,
        "ele": 53.25,
        "distanceKm": 16.21952049727164,
        "gradePct": 1.1206585114630174,
        "smoothedEle": 53.01231749102838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.850016,
        "lng": 121.496316,
        "ele": 52.5,
        "distanceKm": 16.290177311498077,
        "gradePct": 1.1180151902760302,
        "smoothedEle": 53.6946142226993,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.849749,
        "lng": 121.496089,
        "ele": 53,
        "distanceKm": 16.32778581684836,
        "gradePct": 1.1046940019882827,
        "smoothedEle": 54.05796447525069,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.849396,
        "lng": 121.495813,
        "ele": 54,
        "distanceKm": 16.37604129444138,
        "gradePct": 1.0660317771609134,
        "smoothedEle": 54.50127531871315,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.848874,
        "lng": 121.495418,
        "ele": 55,
        "distanceKm": 16.44663061055865,
        "gradePct": 0.9771311009130772,
        "smoothedEle": 55.0965268121245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8484125,
        "lng": 121.495123,
        "ele": 55.74999999999998,
        "distanceKm": 16.506073791851748,
        "gradePct": 0.9085077959377257,
        "smoothedEle": 55.58992711922275,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.847951,
        "lng": 121.494828,
        "ele": 56.5,
        "distanceKm": 16.565517027062523,
        "gradePct": 0.8737805366042416,
        "smoothedEle": 56.07782407329441,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.847612,
        "lng": 121.494724,
        "ele": 56.5,
        "distanceKm": 16.604667954456858,
        "gradePct": 0.8497885077132096,
        "smoothedEle": 56.38397942755097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.847255,
        "lng": 121.494555,
        "ele": 57.25,
        "distanceKm": 16.64792575642658,
        "gradePct": 0.8342978300722006,
        "smoothedEle": 56.745878486391454,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.846898,
        "lng": 121.494386,
        "ele": 58,
        "distanceKm": 16.691183577205617,
        "gradePct": 0.8367217971531251,
        "smoothedEle": 57.13912952945639,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84651425,
        "lng": 121.4941065,
        "ele": 58.1875,
        "distanceKm": 16.74245590023205,
        "gradePct": 0.8364666044506971,
        "smoothedEle": 57.57072296161986,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.846130499999997,
        "lng": 121.493827,
        "ele": 58.37500000000001,
        "distanceKm": 16.79372826991522,
        "gradePct": 0.8275473703354006,
        "smoothedEle": 57.97009684933911,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84574675,
        "lng": 121.4935475,
        "ele": 58.5625,
        "distanceKm": 16.845000686253393,
        "gradePct": 0.8142108748607111,
        "smoothedEle": 58.352063100960464,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.845363,
        "lng": 121.493268,
        "ele": 58.75,
        "distanceKm": 16.896273149248213,
        "gradePct": 0.8039581598472817,
        "smoothedEle": 58.73020758059125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.845019999999998,
        "lng": 121.4930264,
        "ele": 58.95000000000001,
        "distanceKm": 16.94164291699474,
        "gradePct": 0.7896970792845348,
        "smoothedEle": 59.062406866825256,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.844677,
        "lng": 121.4927848,
        "ele": 59.15,
        "distanceKm": 16.98701271995336,
        "gradePct": 0.7702627213818836,
        "smoothedEle": 59.41200099009301,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.844334,
        "lng": 121.4925432,
        "ele": 59.35,
        "distanceKm": 17.03238255812275,
        "gradePct": 0.7588325508752506,
        "smoothedEle": 59.76242655699045,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.843991000000003,
        "lng": 121.49230159999999,
        "ele": 59.55,
        "distanceKm": 17.07775243150341,
        "gradePct": 0.7505435050997095,
        "smoothedEle": 60.09728738389372,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.843648,
        "lng": 121.49206,
        "ele": 59.75,
        "distanceKm": 17.12312234009402,
        "gradePct": 0.7516641832675794,
        "smoothedEle": 60.44406762579766,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84327288888889,
        "lng": 121.49179422222221,
        "ele": 60.333333333333336,
        "distanceKm": 17.17282583107451,
        "gradePct": 0.7646329553423552,
        "smoothedEle": 60.85117787226002,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84289777777778,
        "lng": 121.49152844444444,
        "ele": 60.91666666666668,
        "distanceKm": 17.22252936458966,
        "gradePct": 0.786935791427468,
        "smoothedEle": 61.283264032373125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.842522666666667,
        "lng": 121.49126266666666,
        "ele": 61.500000000000014,
        "distanceKm": 17.272232940640507,
        "gradePct": 0.826558802887114,
        "smoothedEle": 61.77779275183005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.842147555555556,
        "lng": 121.49099688888889,
        "ele": 62.08333333333335,
        "distanceKm": 17.32193655922493,
        "gradePct": 0.8818222961965346,
        "smoothedEle": 62.32721109727826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.841772444444445,
        "lng": 121.4907311111111,
        "ele": 62.66666666666665,
        "distanceKm": 17.37164022034396,
        "gradePct": 0.9546478940369361,
        "smoothedEle": 62.91611874960267,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.841397333333333,
        "lng": 121.49046533333333,
        "ele": 63.249999999999986,
        "distanceKm": 17.42134392399548,
        "gradePct": 1.0379933949511204,
        "smoothedEle": 63.54445466964598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84102222222222,
        "lng": 121.49019955555555,
        "ele": 63.83333333333332,
        "distanceKm": 17.47104767018052,
        "gradePct": 1.1252018577291047,
        "smoothedEle": 64.21221892481668,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84064711111111,
        "lng": 121.48993377777778,
        "ele": 64.41666666666666,
        "distanceKm": 17.520751458896967,
        "gradePct": 1.217201120528919,
        "smoothedEle": 64.91941158248191,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.840272,
        "lng": 121.489668,
        "ele": 65,
        "distanceKm": 17.570455290145844,
        "gradePct": 1.2940788112694168,
        "smoothedEle": 65.64234234512067,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839869,
        "lng": 121.489371,
        "ele": 66.12499999999996,
        "distanceKm": 17.62449743589269,
        "gradePct": 1.3623220196769326,
        "smoothedEle": 66.44451938527868,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839466,
        "lng": 121.489074,
        "ele": 67.25,
        "distanceKm": 17.678539634118554,
        "gradePct": 1.419917872406218,
        "smoothedEle": 67.26309221531015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839079636163724,
        "lng": 121.48879990669607,
        "ele": 68.08783979366463,
        "distanceKm": 17.729753598755746,
        "gradePct": 1.466597127430576,
        "smoothedEle": 68.05722908910377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.838693272327443,
        "lng": 121.48852581339214,
        "ele": 68.92567958732924,
        "distanceKm": 17.780967608608808,
        "gradePct": 1.5092985693882273,
        "smoothedEle": 68.8812569443049,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.838306908491166,
        "lng": 121.48825172008821,
        "ele": 69.76351938099387,
        "distanceKm": 17.832181663676483,
        "gradePct": 1.5533337050592841,
        "smoothedEle": 69.74566239010292,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.83792054465489,
        "lng": 121.48797762678429,
        "ele": 70.6013591746585,
        "distanceKm": 17.883395763958504,
        "gradePct": 1.5891949487968788,
        "smoothedEle": 70.6020097011494,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.837534180818608,
        "lng": 121.48770353348037,
        "ele": 71.43919896832305,
        "distanceKm": 17.934609909453826,
        "gradePct": 1.6140948095765721,
        "smoothedEle": 71.43997663771484,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.83714781698233,
        "lng": 121.48742944017644,
        "ele": 72.27703876198768,
        "distanceKm": 17.98582410016276,
        "gradePct": 1.6254251326682654,
        "smoothedEle": 72.25232241251048,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.836761453146053,
        "lng": 121.48715534687251,
        "ele": 73.1148785556523,
        "distanceKm": 18.037038336084255,
        "gradePct": 1.6160057981787344,
        "smoothedEle": 73.02245711592082,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.836375089309772,
        "lng": 121.48688125356858,
        "ele": 73.95271834931692,
        "distanceKm": 18.08825261721805,
        "gradePct": 1.6033342391434562,
        "smoothedEle": 73.81421811730361,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.83598897581644,
        "lng": 121.486606741841,
        "ele": 75.03432813719498,
        "distanceKm": 18.139466783741273,
        "gradePct": 1.5913759420808364,
        "smoothedEle": 74.64160418835274,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.835603,
        "lng": 121.486332,
        "ele": 76.25,
        "distanceKm": 18.19068092928767,
        "gradePct": 1.594468996406288,
        "smoothedEle": 75.50461672024694,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.835244,
        "lng": 121.48606775,
        "ele": 76.5625,
        "distanceKm": 18.238804863517053,
        "gradePct": 1.6141880186294544,
        "smoothedEle": 76.34907993129401,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.834885,
        "lng": 121.4858035,
        "ele": 76.875,
        "distanceKm": 18.286928839298554,
        "gradePct": 1.6438573195582327,
        "smoothedEle": 77.20050689954536,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.834526,
        "lng": 121.48553925,
        "ele": 77.1875,
        "distanceKm": 18.335052856631663,
        "gradePct": 1.678010595765993,
        "smoothedEle": 78.02663223149781,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.834167,
        "lng": 121.485275,
        "ele": 77.5,
        "distanceKm": 18.383176915515868,
        "gradePct": 1.696207206483034,
        "smoothedEle": 78.82437055640942,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8338112,
        "lng": 121.4850306,
        "ele": 78.74999999999996,
        "distanceKm": 18.42990156438992,
        "gradePct": 1.6957031225646526,
        "smoothedEle": 79.57418347589297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.833455400000002,
        "lng": 121.4847862,
        "ele": 80.00000000000001,
        "distanceKm": 18.476626249544058,
        "gradePct": 1.6775809412278835,
        "smoothedEle": 80.300523321807,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8330996,
        "lng": 121.4845418,
        "ele": 81.24999999999999,
        "distanceKm": 18.52335097097852,
        "gradePct": 1.6392501554216978,
        "smoothedEle": 80.99565049663782,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.832743800000003,
        "lng": 121.4842974,
        "ele": 82.50000000000004,
        "distanceKm": 18.570075728692196,
        "gradePct": 1.5857129973731325,
        "smoothedEle": 81.6594744992111,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.832388,
        "lng": 121.484053,
        "ele": 83.75,
        "distanceKm": 18.616800522685313,
        "gradePct": 1.5356377605633906,
        "smoothedEle": 82.32021515807732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.832022028529124,
        "lng": 121.48379082629445,
        "ele": 84.14693218099406,
        "distanceKm": 18.66545370144906,
        "gradePct": 1.5011211736187384,
        "smoothedEle": 83.03394158699118,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.831656057058247,
        "lng": 121.4835286525889,
        "ele": 84.54386436198807,
        "distanceKm": 18.714106921451,
        "gradePct": 1.492560234117601,
        "smoothedEle": 83.7983999442789,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.83129008558737,
        "lng": 121.48326647888337,
        "ele": 84.94079654298213,
        "distanceKm": 18.76276018268982,
        "gradePct": 1.5095387917811833,
        "smoothedEle": 84.61359031829191,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.830924114116495,
        "lng": 121.48300430517781,
        "ele": 85.33772872397618,
        "distanceKm": 18.81141348516627,
        "gradePct": 1.5412742703200653,
        "smoothedEle": 85.4418784384902,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.830558142645618,
        "lng": 121.48274213147226,
        "ele": 85.73466090497023,
        "distanceKm": 18.860066828879695,
        "gradePct": 1.5799370704682723,
        "smoothedEle": 86.25708812072999,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.830192097082623,
        "lng": 121.48248008425841,
        "ele": 86.31810895332772,
        "distanceKm": 18.908720055192706,
        "gradePct": 1.6129115393636948,
        "smoothedEle": 87.04468296065717,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.829826048541314,
        "lng": 121.4822180421292,
        "ele": 86.90905447666384,
        "distanceKm": 18.957373316431962,
        "gradePct": 1.6236144041284852,
        "smoothedEle": 87.78624815924245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.82946,
        "lng": 121.481956,
        "ele": 87.5,
        "distanceKm": 19.006026618874085,
        "gradePct": 1.603448220491298,
        "smoothedEle": 88.48178374203012,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8291072,
        "lng": 121.4817118,
        "ele": 88.55000000000004,
        "distanceKm": 19.052458746700598,
        "gradePct": 1.5677897777457646,
        "smoothedEle": 89.14435803669183,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8287544,
        "lng": 121.4814676,
        "ele": 89.59999999999998,
        "distanceKm": 19.098890910663304,
        "gradePct": 1.5298871913910794,
        "smoothedEle": 89.81835202403461,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8284016,
        "lng": 121.48122339999999,
        "ele": 90.65000000000002,
        "distanceKm": 19.145323110763208,
        "gradePct": 1.4979051798176086,
        "smoothedEle": 90.50376572109337,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8280488,
        "lng": 121.4809792,
        "ele": 91.69999999999996,
        "distanceKm": 19.191755346997663,
        "gradePct": 1.4807435302205045,
        "smoothedEle": 91.21229010601361,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.827696,
        "lng": 121.480735,
        "ele": 92.75,
        "distanceKm": 19.23818761936768,
        "gradePct": 1.4910910055223463,
        "smoothedEle": 91.96709586060796,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8273355,
        "lng": 121.48047366666667,
        "ele": 93.33333333333331,
        "distanceKm": 19.28628631746766,
        "gradePct": 1.530909122212408,
        "smoothedEle": 92.7923086403055,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.826975,
        "lng": 121.48021233333333,
        "ele": 93.91666666666669,
        "distanceKm": 19.3343850563893,
        "gradePct": 1.589685179039384,
        "smoothedEle": 93.6555067500115,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.826614499999998,
        "lng": 121.479951,
        "ele": 94.5,
        "distanceKm": 19.38248383613083,
        "gradePct": 1.6587619755410128,
        "smoothedEle": 94.5564782647629,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.826254,
        "lng": 121.47968966666667,
        "ele": 95.08333333333331,
        "distanceKm": 19.43058265669189,
        "gradePct": 1.732746115950226,
        "smoothedEle": 95.48441134019959,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8258935,
        "lng": 121.47942833333333,
        "ele": 95.66666666666669,
        "distanceKm": 19.4786815180731,
        "gradePct": 1.8010314317044547,
        "smoothedEle": 96.41588665239577,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.825533,
        "lng": 121.479167,
        "ele": 96.25,
        "distanceKm": 19.52678042027236,
        "gradePct": 1.8534919243185712,
        "smoothedEle": 97.34213553316488,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.825149,
        "lng": 121.4788918,
        "ele": 97.50000000000001,
        "distanceKm": 19.57783736212299,
        "gradePct": 1.9029165702023083,
        "smoothedEle": 98.35610253711845,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.824765,
        "lng": 121.4786166,
        "ele": 98.75000000000003,
        "distanceKm": 19.628894349395356,
        "gradePct": 1.9570655542328317,
        "smoothedEle": 99.42816511411043,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.824381000000002,
        "lng": 121.4783414,
        "ele": 99.99999999999997,
        "distanceKm": 19.67995138208773,
        "gradePct": 1.9910886532179386,
        "smoothedEle": 100.48230707595864,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.823997000000002,
        "lng": 121.4780662,
        "ele": 101.24999999999999,
        "distanceKm": 19.731008460201764,
        "gradePct": 2.0214978707121154,
        "smoothedEle": 101.5571509990386,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.823613,
        "lng": 121.477791,
        "ele": 102.5,
        "distanceKm": 19.782065583735744,
        "gradePct": 2.0838965218036045,
        "smoothedEle": 102.73274375571604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.82333834175284,
        "lng": 121.47749371415993,
        "ele": 103.54779079155729,
        "distanceKm": 19.825044586620432,
        "gradePct": 2.1551915779416833,
        "smoothedEle": 103.77428301805526,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.823033,
        "lng": 121.477229,
        "ele": 104.5,
        "distanceKm": 19.86837855555808,
        "gradePct": 2.2292454805164583,
        "smoothedEle": 104.85599150081345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.822629,
        "lng": 121.476895,
        "ele": 106.25,
        "distanceKm": 19.924702173163897,
        "gradePct": 2.322300426469013,
        "smoothedEle": 106.30704170788674,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.822234,
        "lng": 121.476548,
        "ele": 108.25,
        "distanceKm": 19.981049748172413,
        "gradePct": 2.4132360937551827,
        "smoothedEle": 107.74513795168217,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.82187,
        "lng": 121.476239,
        "ele": 108.75,
        "distanceKm": 20.032296192155425,
        "gradePct": 2.4794330981982085,
        "smoothedEle": 109.02510038459963,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.821476,
        "lng": 121.475894,
        "ele": 109.75,
        "distanceKm": 20.08842984999203,
        "gradePct": 2.499071082576998,
        "smoothedEle": 110.38418657456309,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.821077,
        "lng": 121.475563,
        "ele": 112.25,
        "distanceKm": 20.144126273330073,
        "gradePct": 2.480051284825714,
        "smoothedEle": 111.69075655626254,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.820683,
        "lng": 121.475252,
        "ele": 113.75,
        "distanceKm": 20.19816525915445,
        "gradePct": 2.4390911074250465,
        "smoothedEle": 112.94065165402749,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.820382,
        "lng": 121.47502850000001,
        "ele": 114.74999999999996,
        "distanceKm": 20.238626421958458,
        "gradePct": 2.421928338553882,
        "smoothedEle": 113.92819977884142,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.820081,
        "lng": 121.474805,
        "ele": 115.75,
        "distanceKm": 20.279087614391642,
        "gradePct": 2.44388000336148,
        "smoothedEle": 115.02670061203993,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.819766825565594,
        "lng": 121.47448622227718,
        "ele": 116.61311657803806,
        "distanceKm": 20.326752593704814,
        "gradePct": 2.479525771448398,
        "smoothedEle": 116.32521740378145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.81945231945864,
        "lng": 121.47416783735635,
        "ele": 117.43078835574144,
        "distanceKm": 20.374417504295913,
        "gradePct": 2.5008916092389475,
        "smoothedEle": 117.5475999634473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.819136879639093,
        "lng": 121.47385055823757,
        "ele": 118.12052557049432,
        "distanceKm": 20.42208245715876,
        "gradePct": 2.5441247350847638,
        "smoothedEle": 118.80600979098824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.818821439819548,
        "lng": 121.47353327911878,
        "ele": 118.81026278524716,
        "distanceKm": 20.469747463136116,
        "gradePct": 2.584779479095558,
        "smoothedEle": 120.03770048103104,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.818506,
        "lng": 121.473216,
        "ele": 119.5,
        "distanceKm": 20.517412522226994,
        "gradePct": 2.584345278022903,
        "smoothedEle": 121.16346139566191,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.818086,
        "lng": 121.47286,
        "ele": 121,
        "distanceKm": 20.57651009738514,
        "gradePct": 2.4431750971577384,
        "smoothedEle": 122.28624762534196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.817919,
        "lng": 121.472738,
        "ele": 122.75,
        "distanceKm": 20.598845008120303,
        "gradePct": 2.381949147624723,
        "smoothedEle": 122.71079034280335,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.817847,
        "lng": 121.472705,
        "ele": 123.25,
        "distanceKm": 20.607526351056258,
        "gradePct": 2.3552031588074787,
        "smoothedEle": 122.86705451565052,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.817394,
        "lng": 121.47261,
        "ele": 127,
        "distanceKm": 20.658816368750855,
        "gradePct": 2.2273747038357494,
        "smoothedEle": 123.829627740675,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.817168,
        "lng": 121.472588,
        "ele": 126.5,
        "distanceKm": 20.684045910890113,
        "gradePct": 2.176834512353802,
        "smoothedEle": 124.33230455923136,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.816847499999998,
        "lng": 121.4722245,
        "ele": 127.62500000000004,
        "distanceKm": 20.73540142208366,
        "gradePct": 2.149188442207882,
        "smoothedEle": 125.59774469784445,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.816527,
        "lng": 121.471861,
        "ele": 128.75,
        "distanceKm": 20.78675699901524,
        "gradePct": 2.149257608894989,
        "smoothedEle": 126.88720722001892,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.81629,
        "lng": 121.471584,
        "ele": 128.875,
        "distanceKm": 20.825338093553306,
        "gradePct": 2.187321641468931,
        "smoothedEle": 127.87600309625144,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.816053,
        "lng": 121.471307,
        "ele": 129,
        "distanceKm": 20.863919225665246,
        "gradePct": 2.2769916194505786,
        "smoothedEle": 128.87801034429654,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.815774,
        "lng": 121.470933,
        "ele": 127,
        "distanceKm": 20.913010268677354,
        "gradePct": 2.4562305297227827,
        "smoothedEle": 130.33866422626969,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.815474000000002,
        "lng": 121.47054750000001,
        "ele": 128.25,
        "distanceKm": 20.964494829466165,
        "gradePct": 2.608721426980929,
        "smoothedEle": 131.76893044287465,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.815174,
        "lng": 121.470162,
        "ele": 129.5,
        "distanceKm": 21.01597945928819,
        "gradePct": 2.6249298423783536,
        "smoothedEle": 132.99396180459382,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.81479,
        "lng": 121.46957,
        "ele": 135.25,
        "distanceKm": 21.089803251208014,
        "gradePct": 2.5120658077845985,
        "smoothedEle": 134.5014771201193,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.814490999999997,
        "lng": 121.4690535,
        "ele": 136.75,
        "distanceKm": 21.151981026358992,
        "gradePct": 2.3325924161333984,
        "smoothedEle": 135.5657354615471,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.814192,
        "lng": 121.468537,
        "ele": 138.25,
        "distanceKm": 21.214158903773,
        "gradePct": 2.061496356991924,
        "smoothedEle": 136.55506294058978,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.813936,
        "lng": 121.468149,
        "ele": 141.75,
        "distanceKm": 21.262823338226028,
        "gradePct": 1.8690846618367285,
        "smoothedEle": 137.3297495862595,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.813616000000003,
        "lng": 121.46767750000001,
        "ele": 141.625,
        "distanceKm": 21.322545498967948,
        "gradePct": 1.7671945085557048,
        "smoothedEle": 138.42962683870383,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.813296,
        "lng": 121.467206,
        "ele": 141.5,
        "distanceKm": 21.38226775466426,
        "gradePct": 1.6929685010646796,
        "smoothedEle": 139.4265043659876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.81303,
        "lng": 121.466912,
        "ele": 142.75,
        "distanceKm": 21.424331449013774,
        "gradePct": 1.6636407858702624,
        "smoothedEle": 140.0833971845477,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.812706,
        "lng": 121.466596,
        "ele": 140.75,
        "distanceKm": 21.472615472615146,
        "gradePct": 1.5353261343565676,
        "smoothedEle": 140.5000336070248,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.812295,
        "lng": 121.466254,
        "ele": 140.75,
        "distanceKm": 21.530052731792512,
        "gradePct": 1.364856955416719,
        "smoothedEle": 140.90264684302701,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.811886,
        "lng": 121.465955,
        "ele": 140.75,
        "distanceKm": 21.584765821030924,
        "gradePct": 1.1539878218285247,
        "smoothedEle": 141.19581828503607,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.811583812110186,
        "lng": 121.46578221121473,
        "ele": 141,
        "distanceKm": 21.6226875758237,
        "gradePct": 0.9630272504341403,
        "smoothedEle": 141.32108012174086,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.811279,
        "lng": 121.465615,
        "ele": 141,
        "distanceKm": 21.6606102673927,
        "gradePct": 0.7504466295779065,
        "smoothedEle": 141.31633978529473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.810866375,
        "lng": 121.4653959375,
        "ele": 141.09375,
        "distanceKm": 21.711617920790676,
        "gradePct": 0.4792874823478512,
        "smoothedEle": 141.3227172658418,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.81045375,
        "lng": 121.465176875,
        "ele": 141.1875,
        "distanceKm": 21.762625605131348,
        "gradePct": 0.3095623899309973,
        "smoothedEle": 141.34251953800154,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.810041124999998,
        "lng": 121.4649578125,
        "ele": 141.28125,
        "distanceKm": 21.81363332041338,
        "gradePct": 0.174962211839376,
        "smoothedEle": 141.31243967979353,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8096285,
        "lng": 121.46473875,
        "ele": 141.375,
        "distanceKm": 21.864641066636903,
        "gradePct": 0.09480323753979271,
        "smoothedEle": 141.37239268168446,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.809215875,
        "lng": 121.4645196875,
        "ele": 141.46875,
        "distanceKm": 21.91564884380058,
        "gradePct": 0.05571067662161024,
        "smoothedEle": 141.4649620539742,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.80880325,
        "lng": 121.46430062499999,
        "ele": 141.5625,
        "distanceKm": 21.966656651905247,
        "gradePct": 0.08227055533337553,
        "smoothedEle": 141.56390742999687,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.808390625,
        "lng": 121.4640815625,
        "ele": 141.65625,
        "distanceKm": 22.01766449094922,
        "gradePct": 0.11039495994299361,
        "smoothedEle": 141.65624955331063,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.807978,
        "lng": 121.4638625,
        "ele": 141.75,
        "distanceKm": 22.068672360933054,
        "gradePct": 0.13701528644913658,
        "smoothedEle": 141.74999955331677,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.807565375,
        "lng": 121.4636434375,
        "ele": 141.84375,
        "distanceKm": 22.11968026185625,
        "gradePct": 0.17473415891337593,
        "smoothedEle": 141.84374955332336,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.80715275,
        "lng": 121.463424375,
        "ele": 141.9375,
        "distanceKm": 22.170688193717474,
        "gradePct": 0.18290051015667508,
        "smoothedEle": 141.93206859271234,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.806740125,
        "lng": 121.4632053125,
        "ele": 142.03125,
        "distanceKm": 22.221696156517563,
        "gradePct": 0.17349857705113397,
        "smoothedEle": 141.99718841329891,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.806327500000002,
        "lng": 121.46298625,
        "ele": 142.125,
        "distanceKm": 22.272704150254828,
        "gradePct": 0.1462143106753138,
        "smoothedEle": 142.01349846037013,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.805914875000003,
        "lng": 121.46276718749999,
        "ele": 142.21875,
        "distanceKm": 22.323712174930108,
        "gradePct": 0.11289251104075952,
        "smoothedEle": 142.0060424373273,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.80550225,
        "lng": 121.462548125,
        "ele": 142.3125,
        "distanceKm": 22.374720230542067,
        "gradePct": 0.06956855393128557,
        "smoothedEle": 141.96982090043824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.805089625,
        "lng": 121.46232906249999,
        "ele": 142.40625,
        "distanceKm": 22.425728317090837,
        "gradePct": 0.010713710691968926,
        "smoothedEle": 141.88636275138978,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.804677,
        "lng": 121.46211,
        "ele": 142.5,
        "distanceKm": 22.476736434575077,
        "gradePct": -0.07378763216456702,
        "smoothedEle": 141.7184272427751,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8043365,
        "lng": 121.4619205,
        "ele": 142.5,
        "distanceKm": 22.51922408384849,
        "gradePct": -0.16787635273174298,
        "smoothedEle": 141.49040335906207,
        "gradeBand": "descent"
      },
      {
        "lat": 23.803996,
        "lng": 121.461731,
        "ele": 142.5,
        "distanceKm": 22.56171175605633,
        "gradePct": -0.27084607959651835,
        "smoothedEle": 141.1974453515834,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8037,
        "lng": 121.46158,
        "ele": 141.75,
        "distanceKm": 22.598034059799776,
        "gradePct": -0.3679247136027083,
        "smoothedEle": 140.90602175726045,
        "gradeBand": "descent"
      },
      {
        "lat": 23.803282,
        "lng": 121.46140299999999,
        "ele": 141.5,
        "distanceKm": 22.647879938202394,
        "gradePct": -0.5049769035033655,
        "smoothedEle": 140.47394985859088,
        "gradeBand": "descent"
      },
      {
        "lat": 23.802864,
        "lng": 121.461226,
        "ele": 141.25,
        "distanceKm": 22.69772583753991,
        "gradePct": -0.6394432821107884,
        "smoothedEle": 140.01384985821548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.80232,
        "lng": 121.461096,
        "ele": 140.75,
        "distanceKm": 22.759644954560112,
        "gradePct": -0.7907776503859321,
        "smoothedEle": 139.40236506832608,
        "gradeBand": "descent"
      },
      {
        "lat": 23.801863,
        "lng": 121.461078,
        "ele": 139.75,
        "distanceKm": 22.81049409250904,
        "gradePct": -0.889257988707743,
        "smoothedEle": 138.8694817503661,
        "gradeBand": "descent"
      },
      {
        "lat": 23.801361,
        "lng": 121.461114,
        "ele": 138,
        "distanceKm": 22.86643405099042,
        "gradePct": -0.9699959449452797,
        "smoothedEle": 138.2495692767046,
        "gradeBand": "descent"
      },
      {
        "lat": 23.801005,
        "lng": 121.461181,
        "ele": 137,
        "distanceKm": 22.90660209492632,
        "gradePct": -1.0145919241086172,
        "smoothedEle": 137.78797691146994,
        "gradeBand": "descent"
      },
      {
        "lat": 23.800649,
        "lng": 121.461248,
        "ele": 136,
        "distanceKm": 22.94677014203234,
        "gradePct": -1.0575096258745849,
        "smoothedEle": 137.31104086838207,
        "gradeBand": "descent"
      },
      {
        "lat": 23.800201601243028,
        "lng": 121.46134341169251,
        "ele": 135.57895952589027,
        "distanceKm": 22.997456869168502,
        "gradePct": -1.100311086592472,
        "smoothedEle": 136.71539929710394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.79975422382707,
        "lng": 121.46143894234967,
        "ele": 135.24827648189898,
        "distanceKm": 23.04814359304622,
        "gradePct": -1.1394402940448431,
        "smoothedEle": 136.09762635543453,
        "gradeBand": "descent"
      },
      {
        "lat": 23.799306846411106,
        "lng": 121.46153447300682,
        "ele": 134.91759343790767,
        "distanceKm": 23.09883032334212,
        "gradePct": -1.1809104947667275,
        "smoothedEle": 135.4489829776574,
        "gradeBand": "descent"
      },
      {
        "lat": 23.798859468995147,
        "lng": 121.46163000366398,
        "ele": 134.58691039391638,
        "distanceKm": 23.149517060055892,
        "gradePct": -1.217988071347593,
        "smoothedEle": 134.78307487818952,
        "gradeBand": "descent"
      },
      {
        "lat": 23.798412091579188,
        "lng": 121.46172553432113,
        "ele": 134.25622734992507,
        "distanceKm": 23.200203803187275,
        "gradePct": -1.245135463878206,
        "smoothedEle": 134.12609669457265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.79796471416323,
        "lng": 121.46182106497828,
        "ele": 133.92554430593378,
        "distanceKm": 23.250890552736454,
        "gradePct": -1.2466408015050823,
        "smoothedEle": 133.52269774221483,
        "gradeBand": "descent"
      },
      {
        "lat": 23.797517336747266,
        "lng": 121.46191659563544,
        "ele": 133.59486126194247,
        "distanceKm": 23.301577308704005,
        "gradePct": -1.2364488552838842,
        "smoothedEle": 132.9558325580377,
        "gradeBand": "descent"
      },
      {
        "lat": 23.79706999174888,
        "lng": 121.46201230579602,
        "ele": 132.99540819420412,
        "distanceKm": 23.352264038707364,
        "gradePct": -1.2193111900295692,
        "smoothedEle": 132.3869630121687,
        "gradeBand": "descent"
      },
      {
        "lat": 23.796622659790735,
        "lng": 121.46210808816336,
        "ele": 132.28784016183678,
        "distanceKm": 23.402950764064435,
        "gradePct": -1.2126749453177743,
        "smoothedEle": 131.75682494970434,
        "gradeBand": "descent"
      },
      {
        "lat": 23.79617532783259,
        "lng": 121.46220387053069,
        "ele": 131.58027212946942,
        "distanceKm": 23.453637495871867,
        "gradePct": -1.2232935218832466,
        "smoothedEle": 131.05978712417354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.79572799587444,
        "lng": 121.46229965289801,
        "ele": 130.87270409710206,
        "distanceKm": 23.504324234130234,
        "gradePct": -1.2603985417804295,
        "smoothedEle": 130.29584951756632,
        "gradeBand": "descent"
      },
      {
        "lat": 23.795280663916294,
        "lng": 121.46239543526534,
        "ele": 130.1651360647347,
        "distanceKm": 23.555010978838666,
        "gradePct": -1.3417798870786413,
        "smoothedEle": 129.45127649503536,
        "gradeBand": "descent"
      },
      {
        "lat": 23.794833331958145,
        "lng": 121.46249121763267,
        "ele": 129.45756803236736,
        "distanceKm": 23.605697729998127,
        "gradePct": -1.4570893015397117,
        "smoothedEle": 128.53832015924385,
        "gradeBand": "descent"
      },
      {
        "lat": 23.794386,
        "lng": 121.462587,
        "ele": 128.75,
        "distanceKm": 23.65638448760719,
        "gradePct": -1.5656582562572852,
        "smoothedEle": 127.63876276635273,
        "gradeBand": "descent"
      },
      {
        "lat": 23.79392025,
        "lng": 121.4626825,
        "ele": 127.37500000000003,
        "distanceKm": 23.709077204348155,
        "gradePct": -1.6446596890684437,
        "smoothedEle": 126.73859581425961,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7934545,
        "lng": 121.462778,
        "ele": 125.99999999999996,
        "distanceKm": 23.76176992751108,
        "gradePct": -1.695845732124289,
        "smoothedEle": 125.84967998986762,
        "gradeBand": "descent"
      },
      {
        "lat": 23.79298875,
        "lng": 121.4628735,
        "ele": 124.62499999999997,
        "distanceKm": 23.814462657095866,
        "gradePct": -1.7162984047887173,
        "smoothedEle": 124.9780218026611,
        "gradeBand": "descent"
      },
      {
        "lat": 23.792523,
        "lng": 121.462969,
        "ele": 123.25,
        "distanceKm": 23.867155393102422,
        "gradePct": -1.7108031930674161,
        "smoothedEle": 124.10012494297138,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7921775,
        "lng": 121.463011,
        "ele": 122,
        "distanceKm": 23.90581022547999,
        "gradePct": -1.6992144536600913,
        "smoothedEle": 123.43868029765575,
        "gradeBand": "descent"
      },
      {
        "lat": 23.791832,
        "lng": 121.463053,
        "ele": 120.75,
        "distanceKm": 23.944465059114073,
        "gradePct": -1.6824535954293802,
        "smoothedEle": 122.80294066444286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7913505032612,
        "lng": 121.46306075357067,
        "ele": 120.55616073317127,
        "distanceKm": 23.998010939304827,
        "gradePct": -1.6607080731048627,
        "smoothedEle": 121.94552022806215,
        "gradeBand": "descent"
      },
      {
        "lat": 23.790869,
        "lng": 121.463068,
        "ele": 120.75,
        "distanceKm": 24.0515568093657,
        "gradePct": -1.650343385157594,
        "smoothedEle": 121.07094311875865,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7903775,
        "lng": 121.46304500000001,
        "ele": 120.25000000000001,
        "distanceKm": 24.10625927026928,
        "gradePct": -1.6505015459031551,
        "smoothedEle": 120.16221993356054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.789886,
        "lng": 121.463022,
        "ele": 119.75,
        "distanceKm": 24.160961731551918,
        "gradePct": -1.6422039060517157,
        "smoothedEle": 119.2767038434338,
        "gradeBand": "descent"
      },
      {
        "lat": 23.789404964723676,
        "lng": 121.46291218382346,
        "ele": 118.90785140699498,
        "distanceKm": 24.21560506312824,
        "gradePct": -1.6121675431221036,
        "smoothedEle": 118.44108613306709,
        "gradeBand": "descent"
      },
      {
        "lat": 23.788924,
        "lng": 121.462802,
        "ele": 118,
        "distanceKm": 24.270248386232616,
        "gradePct": -1.5590920981567216,
        "smoothedEle": 117.71280064431214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.788527000000002,
        "lng": 121.4626775,
        "ele": 117.75000000000001,
        "distanceKm": 24.316174418464676,
        "gradePct": -1.484019253667371,
        "smoothedEle": 117.19679415108241,
        "gradeBand": "descent"
      },
      {
        "lat": 23.78813,
        "lng": 121.462553,
        "ele": 117.5,
        "distanceKm": 24.36210046136932,
        "gradePct": -1.385660487784981,
        "smoothedEle": 116.73880937022155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.787776,
        "lng": 121.462399,
        "ele": 116.4166666666667,
        "distanceKm": 24.404467619622046,
        "gradePct": -1.2886642280485052,
        "smoothedEle": 116.3259903433604,
        "gradeBand": "descent"
      },
      {
        "lat": 23.787422,
        "lng": 121.462245,
        "ele": 115.3333333333333,
        "distanceKm": 24.446834793658645,
        "gradePct": -1.1995094013026273,
        "smoothedEle": 115.90686061119618,
        "gradeBand": "descent"
      },
      {
        "lat": 23.787068,
        "lng": 121.462091,
        "ele": 114.25,
        "distanceKm": 24.48920198347713,
        "gradePct": -1.1100529768309215,
        "smoothedEle": 115.5146888387746,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7867085,
        "lng": 121.4619245,
        "ele": 113.62499999999997,
        "distanceKm": 24.532618308455167,
        "gradePct": -1.0257031509008219,
        "smoothedEle": 115.13722437131196,
        "gradeBand": "descent"
      },
      {
        "lat": 23.786349,
        "lng": 121.461758,
        "ele": 113,
        "distanceKm": 24.57603465171466,
        "gradePct": -0.9508995853889319,
        "smoothedEle": 114.79508972804409,
        "gradeBand": "descent"
      },
      {
        "lat": 23.785944,
        "lng": 121.461575,
        "ele": 113.07142857142857,
        "distanceKm": 24.624766310718343,
        "gradePct": -0.8714841510718333,
        "smoothedEle": 114.49666142493015,
        "gradeBand": "descent"
      },
      {
        "lat": 23.785539,
        "lng": 121.461392,
        "ele": 113.14285714285714,
        "distanceKm": 24.67349799188781,
        "gradePct": -0.7779222164893707,
        "smoothedEle": 114.29398694898804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.785134,
        "lng": 121.461209,
        "ele": 113.21428571428571,
        "distanceKm": 24.722229695223874,
        "gradePct": -0.6679499480170803,
        "smoothedEle": 114.14642394140886,
        "gradeBand": "descent"
      },
      {
        "lat": 23.784729000000002,
        "lng": 121.461026,
        "ele": 113.28571428571429,
        "distanceKm": 24.770961420724767,
        "gradePct": -0.5382936580910531,
        "smoothedEle": 114.06865158189713,
        "gradeBand": "descent"
      },
      {
        "lat": 23.784324,
        "lng": 121.460843,
        "ele": 113.35714285714286,
        "distanceKm": 24.81969316839203,
        "gradePct": -0.386568246971307,
        "smoothedEle": 114.08989167278718,
        "gradeBand": "descent"
      },
      {
        "lat": 23.783919,
        "lng": 121.46066,
        "ele": 113.42857142857143,
        "distanceKm": 24.868424938223892,
        "gradePct": -0.21890139619373813,
        "smoothedEle": 114.19835251077075,
        "gradeBand": "descent"
      },
      {
        "lat": 23.783514,
        "lng": 121.460477,
        "ele": 113.5,
        "distanceKm": 24.917156730221166,
        "gradePct": -0.07054177294357547,
        "smoothedEle": 114.33163649364236,
        "gradeBand": "descent"
      },
      {
        "lat": 23.78304825,
        "lng": 121.46026549999999,
        "ele": 114.1875,
        "distanceKm": 24.97323922923631,
        "gradePct": 0.04357546714522196,
        "smoothedEle": 114.42578954117944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7825825,
        "lng": 121.460054,
        "ele": 114.875,
        "distanceKm": 25.029321757834705,
        "gradePct": 0.0935809673964246,
        "smoothedEle": 114.41584841730848,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.78211675,
        "lng": 121.45984250000001,
        "ele": 115.5625,
        "distanceKm": 25.085404316016454,
        "gradePct": 0.09999948695081642,
        "smoothedEle": 114.37494508496324,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.781651,
        "lng": 121.459631,
        "ele": 116.25,
        "distanceKm": 25.141486903781658,
        "gradePct": 0.054962670097575855,
        "smoothedEle": 114.30328534604489,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.781223,
        "lng": 121.459434,
        "ele": 116.375,
        "distanceKm": 25.19312768557163,
        "gradePct": -0.01850947338661982,
        "smoothedEle": 114.2103873879869,
        "gradeBand": "descent"
      },
      {
        "lat": 23.780795,
        "lng": 121.459237,
        "ele": 116.5,
        "distanceKm": 25.244768492974924,
        "gradePct": -0.09613419727678714,
        "smoothedEle": 114.08958938983038,
        "gradeBand": "descent"
      },
      {
        "lat": 23.780282000000003,
        "lng": 121.45901400000001,
        "ele": 114.75000000000006,
        "distanceKm": 25.306159070325076,
        "gradePct": -0.17221392259924034,
        "smoothedEle": 113.90331244059173,
        "gradeBand": "descent"
      },
      {
        "lat": 23.779769,
        "lng": 121.458791,
        "ele": 113,
        "distanceKm": 25.367549680765986,
        "gradePct": -0.2555765053082168,
        "smoothedEle": 113.62123769397779,
        "gradeBand": "descent"
      },
      {
        "lat": 23.779333,
        "lng": 121.45858425,
        "ele": 112.68750000000001,
        "distanceKm": 25.420398558334185,
        "gradePct": -0.35247720936172694,
        "smoothedEle": 113.27279943122302,
        "gradeBand": "descent"
      },
      {
        "lat": 23.778897,
        "lng": 121.45837750000001,
        "ele": 112.375,
        "distanceKm": 25.47324746398187,
        "gradePct": -0.4925534668806495,
        "smoothedEle": 112.76849003986689,
        "gradeBand": "descent"
      },
      {
        "lat": 23.778461,
        "lng": 121.45817075000001,
        "ele": 112.06249999999999,
        "distanceKm": 25.52609639770979,
        "gradePct": -0.6435861817098862,
        "smoothedEle": 112.20250854539584,
        "gradeBand": "descent"
      },
      {
        "lat": 23.778025,
        "lng": 121.457964,
        "ele": 111.75,
        "distanceKm": 25.57894535951696,
        "gradePct": -0.8009840668717612,
        "smoothedEle": 111.58293459007393,
        "gradeBand": "descent"
      },
      {
        "lat": 23.777636330922448,
        "lng": 121.45783005813126,
        "ele": 111.43246866642986,
        "distanceKm": 25.624261634997893,
        "gradePct": -0.9362881818227395,
        "smoothedEle": 111.01127106553224,
        "gradeBand": "descent"
      },
      {
        "lat": 23.77724521946365,
        "lng": 121.45770404269358,
        "ele": 111.01101235307443,
        "distanceKm": 25.66960232826439,
        "gradePct": -1.0515749583432925,
        "smoothedEle": 110.45297949598437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.776854108957192,
        "lng": 121.45757802399733,
        "ele": 110.54320688498952,
        "distanceKm": 25.714943024642395,
        "gradePct": -1.1267866677997984,
        "smoothedEle": 109.92840834087224,
        "gradeBand": "descent"
      },
      {
        "lat": 23.776463,
        "lng": 121.457452,
        "ele": 110,
        "distanceKm": 25.760283719253675,
        "gradePct": -1.143839147327064,
        "smoothedEle": 109.46067881532672,
        "gradeBand": "descent"
      },
      {
        "lat": 23.775941,
        "lng": 121.45734,
        "ele": 108.25,
        "distanceKm": 25.81943585147169,
        "gradePct": -1.1548618623299634,
        "smoothedEle": 108.8092535538961,
        "gradeBand": "descent"
      },
      {
        "lat": 23.775352,
        "lng": 121.457247,
        "ele": 108,
        "distanceKm": 25.885609933163835,
        "gradePct": -1.155313121949374,
        "smoothedEle": 108.03292181748384,
        "gradeBand": "descent"
      },
      {
        "lat": 23.774871666666666,
        "lng": 121.45716533333334,
        "ele": 107.41666666666667,
        "distanceKm": 25.939663276805355,
        "gradePct": -1.1539699925700757,
        "smoothedEle": 107.35971672734074,
        "gradeBand": "descent"
      },
      {
        "lat": 23.774391333333334,
        "lng": 121.45708366666666,
        "ele": 106.83333333333333,
        "distanceKm": 25.993716625165213,
        "gradePct": -1.1690205018412714,
        "smoothedEle": 106.66692658559721,
        "gradeBand": "descent"
      },
      {
        "lat": 23.773911,
        "lng": 121.457002,
        "ele": 106.25,
        "distanceKm": 26.04776997824367,
        "gradePct": -1.2100577911124164,
        "smoothedEle": 105.95959579218345,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7735022,
        "lng": 121.4569358,
        "ele": 105.54999999999998,
        "distanceKm": 26.093722976639533,
        "gradePct": -1.2482068870123555,
        "smoothedEle": 105.34780131944991,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7730934,
        "lng": 121.4568696,
        "ele": 104.84999999999998,
        "distanceKm": 26.139675978138946,
        "gradePct": -1.2761817029722113,
        "smoothedEle": 104.74325818833829,
        "gradeBand": "descent"
      },
      {
        "lat": 23.772684599999998,
        "lng": 121.4568034,
        "ele": 104.15000000000002,
        "distanceKm": 26.185628982742685,
        "gradePct": -1.2881333510973119,
        "smoothedEle": 104.16828451201502,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7722758,
        "lng": 121.4567372,
        "ele": 103.45000000000002,
        "distanceKm": 26.231581990449502,
        "gradePct": -1.2810036419558077,
        "smoothedEle": 103.61735384178225,
        "gradeBand": "descent"
      },
      {
        "lat": 23.771867,
        "lng": 121.456671,
        "ele": 102.75,
        "distanceKm": 26.277535001260173,
        "gradePct": -1.276669139584903,
        "smoothedEle": 103.04431556057153,
        "gradeBand": "descent"
      },
      {
        "lat": 23.771348,
        "lng": 121.45659133333334,
        "ele": 102.08333333333331,
        "distanceKm": 26.335811889208554,
        "gradePct": -1.270061743191644,
        "smoothedEle": 102.30589159705323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.770829,
        "lng": 121.45651166666667,
        "ele": 101.41666666666669,
        "distanceKm": 26.394088781656492,
        "gradePct": -1.2619991743919903,
        "smoothedEle": 101.55699138134754,
        "gradeBand": "descent"
      },
      {
        "lat": 23.77031,
        "lng": 121.456432,
        "ele": 100.75,
        "distanceKm": 26.452365678603915,
        "gradePct": -1.268765023732548,
        "smoothedEle": 100.7781869110862,
        "gradeBand": "descent"
      },
      {
        "lat": 23.769846,
        "lng": 121.456348,
        "ele": 100.25,
        "distanceKm": 26.504663510984344,
        "gradePct": -1.2900291987863917,
        "smoothedEle": 100.06999193136738,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7694292,
        "lng": 121.456283,
        "ele": 99.64999999999998,
        "distanceKm": 26.551479261931043,
        "gradePct": -1.315999572678613,
        "smoothedEle": 99.42123431404492,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7690124,
        "lng": 121.456218,
        "ele": 99.05000000000001,
        "distanceKm": 26.59829501587174,
        "gradePct": -1.3389577928825123,
        "smoothedEle": 98.76439292154224,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7685956,
        "lng": 121.456153,
        "ele": 98.44999999999999,
        "distanceKm": 26.64511077280681,
        "gradePct": -1.3378001392299095,
        "smoothedEle": 98.17299379986996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7681788,
        "lng": 121.45608800000001,
        "ele": 97.85000000000002,
        "distanceKm": 26.6919265327358,
        "gradePct": -1.3088196762971733,
        "smoothedEle": 97.65831881489589,
        "gradeBand": "descent"
      },
      {
        "lat": 23.767762,
        "lng": 121.456023,
        "ele": 97.25,
        "distanceKm": 26.738742295659076,
        "gradePct": -1.248557637231113,
        "smoothedEle": 97.2145750234569,
        "gradeBand": "descent"
      },
      {
        "lat": 23.76726525,
        "lng": 121.455949,
        "ele": 96.25,
        "distanceKm": 26.79448942476709,
        "gradePct": -1.1436651247309937,
        "smoothedEle": 96.77676970099942,
        "gradeBand": "descent"
      },
      {
        "lat": 23.7667685,
        "lng": 121.45587499999999,
        "ele": 95.25,
        "distanceKm": 26.8502365577592,
        "gradePct": -1.013851290908626,
        "smoothedEle": 96.39690143598983,
        "gradeBand": "descent"
      },
      {
        "lat": 23.76627175,
        "lng": 121.455801,
        "ele": 94.25,
        "distanceKm": 26.905983694634948,
        "gradePct": -0.8596574042727647,
        "smoothedEle": 96.08829362662449,
        "gradeBand": "descent"
      },
      {
        "lat": 23.765775,
        "lng": 121.455727,
        "ele": 93.25,
        "distanceKm": 26.961730835394473,
        "gradePct": -0.7065036341674171,
        "smoothedEle": 95.87076813474187,
        "gradeBand": "descent"
      },
      {
        "lat": 23.765284,
        "lng": 121.455647,
        "ele": 94,
        "distanceKm": 27.016931281906864,
        "gradePct": -0.5732508473545092,
        "smoothedEle": 95.70155844665781,
        "gradeBand": "descent"
      },
      {
        "lat": 23.764793,
        "lng": 121.455567,
        "ele": 94.75,
        "distanceKm": 27.072131732950112,
        "gradePct": -0.47077990657043634,
        "smoothedEle": 95.54001420655595,
        "gradeBand": "descent"
      },
      {
        "lat": 23.764302,
        "lng": 121.455487,
        "ele": 95.5,
        "distanceKm": 27.127332188524147,
        "gradePct": -0.38704229396865164,
        "smoothedEle": 95.39184792567215,
        "gradeBand": "descent"
      },
      {
        "lat": 23.763877,
        "lng": 121.4554235,
        "ele": 95.625,
        "distanceKm": 27.175029884024177,
        "gradePct": -0.32406450842697554,
        "smoothedEle": 95.28745576585762,
        "gradeBand": "descent"
      },
      {
        "lat": 23.763452,
        "lng": 121.45536,
        "ele": 95.75,
        "distanceKm": 27.222727582383452,
        "gradePct": -0.26177461665856977,
        "smoothedEle": 95.23763508200979,
        "gradeBand": "descent"
      },
      {
        "lat": 23.763018405220823,
        "lng": 121.45527190818471,
        "ele": 96.32202477464111,
        "distanceKm": 27.271767580565214,
        "gradePct": -0.19794559815025492,
        "smoothedEle": 95.2461650217734,
        "gradeBand": "descent"
      },
      {
        "lat": 23.762584767057767,
        "lng": 121.4551840729453,
        "ele": 96.69970859013173,
        "distanceKm": 27.3208075608148,
        "gradePct": -0.1263585927473227,
        "smoothedEle": 95.31113872975645,
        "gradeBand": "descent"
      },
      {
        "lat": 23.762151,
        "lng": 121.455097,
        "ele": 96.5,
        "distanceKm": 27.369847561711584,
        "gradePct": -0.04221664773383784,
        "smoothedEle": 95.42004889545467,
        "gradeBand": "descent"
      },
      {
        "lat": 23.761511,
        "lng": 121.454949,
        "ele": 95.75,
        "distanceKm": 27.442588841123744,
        "gradePct": 0.04517434436059857,
        "smoothedEle": 95.49397993430894,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.761081,
        "lng": 121.4548095,
        "ele": 95.25000000000001,
        "distanceKm": 27.492465861710937,
        "gradePct": 0.0785241665796167,
        "smoothedEle": 95.50481622682331,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.760651,
        "lng": 121.45467,
        "ele": 94.75,
        "distanceKm": 27.54234289564969,
        "gradePct": 0.08680668092010516,
        "smoothedEle": 95.50146698135266,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.760308,
        "lng": 121.454544,
        "ele": 95,
        "distanceKm": 27.582580720855344,
        "gradePct": 0.08372669031288145,
        "smoothedEle": 95.5116715629923,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7599655,
        "lng": 121.45441199999999,
        "ele": 95,
        "distanceKm": 27.622964857236866,
        "gradePct": 0.07201488056998531,
        "smoothedEle": 95.53197438913547,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.759623,
        "lng": 121.45428,
        "ele": 95,
        "distanceKm": 27.663349005377313,
        "gradePct": 0.046700770718733874,
        "smoothedEle": 95.54571893121972,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.759228333333333,
        "lng": 121.454115,
        "ele": 95,
        "distanceKm": 27.710336979096343,
        "gradePct": 0.03903784929370593,
        "smoothedEle": 95.57831410734349,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.758833666666668,
        "lng": 121.45394999999999,
        "ele": 95,
        "distanceKm": 27.75732497101207,
        "gradePct": 0.05684481773650406,
        "smoothedEle": 95.66771596235431,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.758439,
        "lng": 121.453785,
        "ele": 95,
        "distanceKm": 27.804312981123967,
        "gradePct": 0.11544281919968542,
        "smoothedEle": 95.85034914972631,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.757986,
        "lng": 121.453577,
        "ele": 95.25,
        "distanceKm": 27.858951622543326,
        "gradePct": 0.22781714891030397,
        "smoothedEle": 96.18913051232646,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.757607666666665,
        "lng": 121.45342233333334,
        "ele": 95.58333333333333,
        "distanceKm": 27.903868827934208,
        "gradePct": 0.32461583763977747,
        "smoothedEle": 96.49622151443492,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.757229333333335,
        "lng": 121.45326766666666,
        "ele": 95.91666666666667,
        "distanceKm": 27.948786049358063,
        "gradePct": 0.42702574075363864,
        "smoothedEle": 96.82183972450802,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.756851,
        "lng": 121.453113,
        "ele": 96.25,
        "distanceKm": 27.993703286814412,
        "gradePct": 0.5192571766045013,
        "smoothedEle": 97.12454697978139,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7564595,
        "lng": 121.452939,
        "ele": 96.87500000000003,
        "distanceKm": 28.040700113597552,
        "gradePct": 0.6005915115961249,
        "smoothedEle": 97.43785915833566,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.756068,
        "lng": 121.452765,
        "ele": 97.5,
        "distanceKm": 28.08769696044817,
        "gradePct": 0.6572187723247522,
        "smoothedEle": 97.75742225046662,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7555835,
        "lng": 121.45257699999999,
        "ele": 98.87500000000004,
        "distanceKm": 28.14486773878101,
        "gradePct": 0.6852709604649935,
        "smoothedEle": 98.1576176987965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.755099,
        "lng": 121.452389,
        "ele": 100.25,
        "distanceKm": 28.20203854094546,
        "gradePct": 0.7021623567368004,
        "smoothedEle": 98.59019523568183,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.754584,
        "lng": 121.452157,
        "ele": 100.25,
        "distanceKm": 28.263980801136192,
        "gradePct": 0.6966947671497634,
        "smoothedEle": 99.01432483833558,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.754207,
        "lng": 121.451997,
        "ele": 100.25,
        "distanceKm": 28.308953005811425,
        "gradePct": 0.6868491145279434,
        "smoothedEle": 99.28675911667864,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.75377,
        "lng": 121.45192,
        "ele": 100,
        "distanceKm": 28.358173126291078,
        "gradePct": 0.6651496211306744,
        "smoothedEle": 99.55211875775291,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.753167,
        "lng": 121.451947,
        "ele": 100,
        "distanceKm": 28.425280045391773,
        "gradePct": 0.6181614065342922,
        "smoothedEle": 99.87498806467472,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.75284,
        "lng": 121.45203,
        "ele": 100.25,
        "distanceKm": 28.462609196743564,
        "gradePct": 0.579704650725123,
        "smoothedEle": 100.03097073623293,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.752495,
        "lng": 121.452174,
        "ele": 100.25,
        "distanceKm": 28.503675695291026,
        "gradePct": 0.5259478894852936,
        "smoothedEle": 100.179248789278,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.752161,
        "lng": 121.452346,
        "ele": 100.75,
        "distanceKm": 28.544733707986346,
        "gradePct": 0.46993032704103055,
        "smoothedEle": 100.29232757110049,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.751799,
        "lng": 121.452595,
        "ele": 100.49999999999999,
        "distanceKm": 28.592299547082686,
        "gradePct": 0.395722670617558,
        "smoothedEle": 100.3730431926993,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.751437,
        "lng": 121.452844,
        "ele": 100.25,
        "distanceKm": 28.639865423718003,
        "gradePct": 0.3488229313386826,
        "smoothedEle": 100.49988553039348,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7511205,
        "lng": 121.4530335,
        "ele": 100.125,
        "distanceKm": 28.679997003819192,
        "gradePct": 0.32989946366013045,
        "smoothedEle": 100.64681765101051,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.750804,
        "lng": 121.453223,
        "ele": 100,
        "distanceKm": 28.72012860645018,
        "gradePct": 0.3231664884659762,
        "smoothedEle": 100.81970258176909,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.750249,
        "lng": 121.453566,
        "ele": 100.25,
        "distanceKm": 28.791031489894536,
        "gradePct": 0.3547825753124785,
        "smoothedEle": 101.19794231471606,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.749858,
        "lng": 121.453768,
        "ele": 100.5,
        "distanceKm": 28.839124662138143,
        "gradePct": 0.4016339256464733,
        "smoothedEle": 101.48178135068046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.749524,
        "lng": 121.453875,
        "ele": 100.75,
        "distanceKm": 28.877827572871773,
        "gradePct": 0.45726397416458425,
        "smoothedEle": 101.7202772724978,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.749056,
        "lng": 121.453944,
        "ele": 101.25,
        "distanceKm": 28.930338592848383,
        "gradePct": 0.5232111103014448,
        "smoothedEle": 102.04411397897883,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.748534,
        "lng": 121.453901,
        "ele": 102.25,
        "distanceKm": 28.988547184772862,
        "gradePct": 0.6224303309064525,
        "smoothedEle": 102.55094239432141,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.748073,
        "lng": 121.453766,
        "ele": 103,
        "distanceKm": 29.04161767550448,
        "gradePct": 0.7517927099993909,
        "smoothedEle": 103.18971666654836,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.747619,
        "lng": 121.453564,
        "ele": 103.62500000000001,
        "distanceKm": 29.09612623904711,
        "gradePct": 0.9011239480868415,
        "smoothedEle": 103.93138264106011,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.747165,
        "lng": 121.453362,
        "ele": 104.25,
        "distanceKm": 29.150634829623723,
        "gradePct": 0.9965840614318633,
        "smoothedEle": 104.5424617404446,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.746778,
        "lng": 121.45320766666667,
        "ele": 104.58333333333333,
        "distanceKm": 29.19644466341911,
        "gradePct": 1.0703413892110447,
        "smoothedEle": 105.0461134793904,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.746391,
        "lng": 121.45305333333333,
        "ele": 104.91666666666667,
        "distanceKm": 29.242254513220757,
        "gradePct": 1.1585260923294738,
        "smoothedEle": 105.62344544497266,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.746004,
        "lng": 121.452899,
        "ele": 105.25,
        "distanceKm": 29.288064379027464,
        "gradePct": 1.2069829895947985,
        "smoothedEle": 106.16768752201004,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.745598376420638,
        "lng": 121.45272787755245,
        "ele": 107.23058388360245,
        "distanceKm": 29.336413802039104,
        "gradePct": 1.1867864601685123,
        "smoothedEle": 106.68744047614092,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.74519269796418,
        "lng": 121.45255691105724,
        "ele": 109.02362568434788,
        "distanceKm": 29.384763221925798,
        "gradePct": 1.1102720981834033,
        "smoothedEle": 107.10758904279815,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.744787,
        "lng": 121.452386,
        "ele": 110.75,
        "distanceKm": 29.433112654691037,
        "gradePct": 1.051225901482778,
        "smoothedEle": 107.49970371313293,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.744339,
        "lng": 121.452199,
        "ele": 108.5,
        "distanceKm": 29.486440324740343,
        "gradePct": 1.0003959302096421,
        "smoothedEle": 107.9373095465158,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.743927,
        "lng": 121.452027,
        "ele": 108.5,
        "distanceKm": 29.535483729340864,
        "gradePct": 0.9100933971008353,
        "smoothedEle": 108.26839486171822,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.74334,
        "lng": 121.451777,
        "ele": 110,
        "distanceKm": 29.605539834499915,
        "gradePct": 0.7624797395075102,
        "smoothedEle": 108.64298667847645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.742744,
        "lng": 121.451533,
        "ele": 109.5,
        "distanceKm": 29.676312712153788,
        "gradePct": 0.6687457712758453,
        "smoothedEle": 109.04039280609801,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.742324,
        "lng": 121.451325,
        "ele": 108.75,
        "distanceKm": 29.72758926253944,
        "gradePct": 0.6123574265332731,
        "smoothedEle": 109.2919811943497,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.74188,
        "lng": 121.451033,
        "ele": 109,
        "distanceKm": 29.78521561547684,
        "gradePct": 0.49473795587076463,
        "smoothedEle": 109.41147347349856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.741518,
        "lng": 121.450657,
        "ele": 109.75,
        "distanceKm": 29.84075788861946,
        "gradePct": 0.3584205747750428,
        "smoothedEle": 109.37185765291049,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.741332,
        "lng": 121.450375,
        "ele": 109.25,
        "distanceKm": 29.87613638041129,
        "gradePct": 0.3425353251762186,
        "smoothedEle": 109.5133716200778,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.741093,
        "lng": 121.449879,
        "ele": 108.5,
        "distanceKm": 29.933189298009836,
        "gradePct": 0.35128751519096035,
        "smoothedEle": 109.85210737644537,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.74097,
        "lng": 121.449435,
        "ele": 108.75,
        "distanceKm": 29.980406154759162,
        "gradePct": 0.3349616587575394,
        "smoothedEle": 110.06536225801771,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.740886895449115,
        "lng": 121.44889857671407,
        "ele": 109.64799030025986,
        "distanceKm": 30.035782582259053,
        "gradePct": 0.30576655132144903,
        "smoothedEle": 110.22627027063886,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.740798,
        "lng": 121.448363,
        "ele": 110.75,
        "distanceKm": 30.091185342045566,
        "gradePct": 0.35017133615254575,
        "smoothedEle": 110.45772954285279,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.740723,
        "lng": 121.447872,
        "ele": 110.25,
        "distanceKm": 30.14185299310901,
        "gradePct": 0.46245231680538634,
        "smoothedEle": 110.76359502128484,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.74066,
        "lng": 121.447524,
        "ele": 109.75,
        "distanceKm": 30.177960390312332,
        "gradePct": 0.49217654912232817,
        "smoothedEle": 111.00073081656267,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.740458,
        "lng": 121.446962,
        "ele": 111.5,
        "distanceKm": 30.239415661020185,
        "gradePct": 0.5093234485097741,
        "smoothedEle": 111.40819908366228,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.74028,
        "lng": 121.446618,
        "ele": 113.25,
        "distanceKm": 30.279636934289183,
        "gradePct": 0.5521177535341988,
        "smoothedEle": 111.71824133521375,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.740045,
        "lng": 121.446334,
        "ele": 113,
        "distanceKm": 30.318604172598842,
        "gradePct": 0.6347375906746212,
        "smoothedEle": 112.08056751211642,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.739535,
        "lng": 121.445879,
        "ele": 112,
        "distanceKm": 30.391821867050364,
        "gradePct": 0.7726506972848105,
        "smoothedEle": 112.77952414607375,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.739151883556854,
        "lng": 121.44567529172419,
        "ele": 112.42934586058065,
        "distanceKm": 30.43920061935669,
        "gradePct": 0.8218672789322057,
        "smoothedEle": 113.21318526982532,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.738756,
        "lng": 121.4455,
        "ele": 113.25,
        "distanceKm": 30.486699436083704,
        "gradePct": 0.8488313587886561,
        "smoothedEle": 113.6051675851591,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.73834953820002,
        "lng": 121.44532865905506,
        "ele": 113.92563464092592,
        "distanceKm": 30.535144169726262,
        "gradePct": 0.8933871478363196,
        "smoothedEle": 114.06003916212934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.737943019839246,
        "lng": 121.44515747905822,
        "ele": 114.56925628705807,
        "distanceKm": 30.583588895948658,
        "gradePct": 0.9402976874119444,
        "smoothedEle": 114.57588062893677,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.73753618068465,
        "lng": 121.44498721190493,
        "ele": 115.03131097711527,
        "distanceKm": 30.63203360859966,
        "gradePct": 0.9319218440835166,
        "smoothedEle": 115.0045342046656,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.737129341530057,
        "lng": 121.44481694475165,
        "ele": 115.49336566717247,
        "distanceKm": 30.680478340610172,
        "gradePct": 0.8940791453225954,
        "smoothedEle": 115.35347309908347,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.73672250237546,
        "lng": 121.44464667759836,
        "ele": 115.95542035722966,
        "distanceKm": 30.728923091981706,
        "gradePct": 0.8724720498229014,
        "smoothedEle": 115.73653047284937,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.736315663220864,
        "lng": 121.44447641044508,
        "ele": 116.41747504728686,
        "distanceKm": 30.777367862712595,
        "gradePct": 0.8937164373112958,
        "smoothedEle": 116.20930841587678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.735909281841145,
        "lng": 121.44430484623821,
        "ele": 116.83822786370584,
        "distanceKm": 30.825812558806412,
        "gradePct": 0.9055984835853536,
        "smoothedEle": 116.68921550022594,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.735503,
        "lng": 121.444133,
        "ele": 117.25,
        "distanceKm": 30.87425730886309,
        "gradePct": 0.8903241626375574,
        "smoothedEle": 117.1474899880795,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.735072277167102,
        "lng": 121.44395656606974,
        "ele": 117.67008078631213,
        "distanceKm": 30.925407978500747,
        "gradePct": 0.8877263423654946,
        "smoothedEle": 117.60908763821557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.734641554334203,
        "lng": 121.4437801321395,
        "ele": 118.09016157262428,
        "distanceKm": 30.976558668981042,
        "gradePct": 0.910155845317654,
        "smoothedEle": 118.05570792885793,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.734210831501304,
        "lng": 121.44360369820924,
        "ele": 118.51024235893642,
        "distanceKm": 31.027709380303676,
        "gradePct": 0.9371812323125518,
        "smoothedEle": 118.5384772331792,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.733780108668405,
        "lng": 121.443427264279,
        "ele": 118.93032314524858,
        "distanceKm": 31.07886011246835,
        "gradePct": 0.9409741313609247,
        "smoothedEle": 119.04701346496928,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.733349385835506,
        "lng": 121.44325083034875,
        "ele": 119.3504039315607,
        "distanceKm": 31.130010865474773,
        "gradePct": 0.9307581469773186,
        "smoothedEle": 119.52120480883798,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.732918663002607,
        "lng": 121.4430743964185,
        "ele": 119.77048471787283,
        "distanceKm": 31.18116163932265,
        "gradePct": 0.9015897937208998,
        "smoothedEle": 119.91456593802168,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.732487940169708,
        "lng": 121.44289796248825,
        "ele": 120.190565504185,
        "distanceKm": 31.23231243401168,
        "gradePct": 0.8663081297664309,
        "smoothedEle": 120.26829801579898,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.73205721733681,
        "lng": 121.442721528558,
        "ele": 120.61064629049713,
        "distanceKm": 31.28346324954157,
        "gradePct": 0.8306802271388686,
        "smoothedEle": 120.6129152417376,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.73162651006682,
        "lng": 121.44254504959459,
        "ele": 121.08520003565525,
        "distanceKm": 31.33461407530584,
        "gradePct": 0.7955034061353702,
        "smoothedEle": 120.99363334245459,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.731196,
        "lng": 121.442368,
        "ele": 122.25,
        "distanceKm": 31.385764828315242,
        "gradePct": 0.7664760629689228,
        "smoothedEle": 121.41045159105249,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.730645,
        "lng": 121.442081,
        "ele": 123.25,
        "distanceKm": 31.453642076183776,
        "gradePct": 0.7697059945735022,
        "smoothedEle": 122.01205219818031,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.730181,
        "lng": 121.441635,
        "ele": 122.25,
        "distanceKm": 31.522367200167036,
        "gradePct": 0.8166944620237361,
        "smoothedEle": 122.6496053788732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7298845,
        "lng": 121.44133000000001,
        "ele": 122.125,
        "distanceKm": 31.567654054677607,
        "gradePct": 0.8564957135813983,
        "smoothedEle": 123.07589145353761,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.729588,
        "lng": 121.441025,
        "ele": 122,
        "distanceKm": 31.612940957608835,
        "gradePct": 0.8875437020693396,
        "smoothedEle": 123.49495037243936,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.729259,
        "lng": 121.44069999999999,
        "ele": 122.91666666666667,
        "distanceKm": 31.662264601729902,
        "gradePct": 0.9148107002559392,
        "smoothedEle": 123.96338458944825,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.728930000000002,
        "lng": 121.440375,
        "ele": 123.83333333333333,
        "distanceKm": 31.711588301860054,
        "gradePct": 0.9241007519182819,
        "smoothedEle": 124.41162902738033,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.728601,
        "lng": 121.44005,
        "ele": 124.75,
        "distanceKm": 31.760912058001168,
        "gradePct": 0.8978319574512246,
        "smoothedEle": 124.7729906557578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7282,
        "lng": 121.439673,
        "ele": 125.75,
        "distanceKm": 31.81974208167824,
        "gradePct": 0.8424197912846154,
        "smoothedEle": 125.15251190263054,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72787314752884,
        "lng": 121.43935431884061,
        "ele": 126.22142183340365,
        "distanceKm": 31.86845844183809,
        "gradePct": 0.7973065013318632,
        "smoothedEle": 125.47525429306802,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.727546,
        "lng": 121.439036,
        "ele": 126.75,
        "distanceKm": 31.917174797928556,
        "gradePct": 0.7846547916501104,
        "smoothedEle": 125.88912417859557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.727235,
        "lng": 121.438688,
        "ele": 127,
        "distanceKm": 31.966680535922166,
        "gradePct": 0.7834514381397243,
        "smoothedEle": 126.35387007680727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72688671886704,
        "lng": 121.4383296054403,
        "ele": 127.63208917052607,
        "distanceKm": 32.01988591564702,
        "gradePct": 0.8097202053491213,
        "smoothedEle": 126.9015806184931,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72653839157529,
        "lng": 121.43797126502074,
        "ele": 127.70524610382567,
        "distanceKm": 32.07309131957947,
        "gradePct": 0.8556666358039023,
        "smoothedEle": 127.41856079400195,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72619,
        "lng": 121.437613,
        "ele": 127,
        "distanceKm": 32.12629673271685,
        "gradePct": 0.902473266870092,
        "smoothedEle": 127.90335579604546,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.725815,
        "lng": 121.437242,
        "ele": 127.75,
        "distanceKm": 32.18255555832714,
        "gradePct": 0.9291147310053255,
        "smoothedEle": 128.38236056304962,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.725486,
        "lng": 121.436875,
        "ele": 128.25,
        "distanceKm": 32.2348438515646,
        "gradePct": 0.9213486717879606,
        "smoothedEle": 128.8190422834472,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.725243,
        "lng": 121.436556,
        "ele": 128.75,
        "distanceKm": 32.27708863388105,
        "gradePct": 0.9104336244530655,
        "smoothedEle": 129.1923147202224,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.725007587259483,
        "lng": 121.43613045310887,
        "ele": 129.27858990270084,
        "distanceKm": 32.32770298626025,
        "gradePct": 0.8960733202664093,
        "smoothedEle": 129.66575659576617,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.724789,
        "lng": 121.435694,
        "ele": 130,
        "distanceKm": 32.37834677149418,
        "gradePct": 0.9007844850649548,
        "smoothedEle": 130.16880067036138,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.724641666666667,
        "lng": 121.43528833333333,
        "ele": 130.41666666666669,
        "distanceKm": 32.42277372963936,
        "gradePct": 0.9067449484543214,
        "smoothedEle": 130.59148987978588,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.724494333333336,
        "lng": 121.43488266666667,
        "ele": 130.83333333333331,
        "distanceKm": 32.46720073116441,
        "gradePct": 0.9146926156593426,
        "smoothedEle": 130.99570273739877,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.724347,
        "lng": 121.434477,
        "ele": 131.25,
        "distanceKm": 32.511627776069375,
        "gradePct": 0.931244424383824,
        "smoothedEle": 131.4188882606012,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.724192245102735,
        "lng": 121.43400545830362,
        "ele": 131.77859035144587,
        "distanceKm": 32.562621084041076,
        "gradePct": 0.9524038837883491,
        "smoothedEle": 131.9216919435987,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72403649673516,
        "lng": 121.43353430553574,
        "ele": 132.68572690096394,
        "distanceKm": 32.6136145893476,
        "gradePct": 0.9694767777148169,
        "smoothedEle": 132.44240539374923,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72388074836758,
        "lng": 121.43306315276787,
        "ele": 133.592863450482,
        "distanceKm": 32.66460814854576,
        "gradePct": 0.9828571681195889,
        "smoothedEle": 132.9809066077137,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.723725,
        "lng": 121.432592,
        "ele": 134.5,
        "distanceKm": 32.7156017616351,
        "gradePct": 1.032995617448857,
        "smoothedEle": 133.62224083185245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.723548123017856,
        "lng": 121.43213279794861,
        "ele": 134.80803234329363,
        "distanceKm": 32.76631694822207,
        "gradePct": 1.087154799113649,
        "smoothedEle": 134.24912615928852,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72338406150893,
        "lng": 121.4316673989743,
        "ele": 134.5290161716468,
        "distanceKm": 32.81708494217719,
        "gradePct": 1.1264995084629668,
        "smoothedEle": 134.85219547828478,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72322,
        "lng": 121.431202,
        "ele": 134.25,
        "distanceKm": 32.867852991765915,
        "gradePct": 1.1395644043498327,
        "smoothedEle": 135.39381009195895,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.723101,
        "lng": 121.430878,
        "ele": 134.75,
        "distanceKm": 32.90339119315317,
        "gradePct": 1.131795605677772,
        "smoothedEle": 135.73339734965938,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.722943712222,
        "lng": 121.43040081048767,
        "ele": 135.55819220565175,
        "distanceKm": 32.95502124232529,
        "gradePct": 1.097317011983005,
        "smoothedEle": 136.17161817893293,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.722788,
        "lng": 121.429923,
        "ele": 136.5,
        "distanceKm": 33.006651812956,
        "gradePct": 1.0208089921965593,
        "smoothedEle": 136.57210648861303,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.722508,
        "lng": 121.429267,
        "ele": 138.75,
        "distanceKm": 33.08033353530823,
        "gradePct": 0.8878433766034172,
        "smoothedEle": 137.07915831074993,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.722251,
        "lng": 121.428838,
        "ele": 139.25,
        "distanceKm": 33.13252455824513,
        "gradePct": 0.796305513297377,
        "smoothedEle": 137.40582824737342,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.721993,
        "lng": 121.428559,
        "ele": 139.25,
        "distanceKm": 33.172894149239006,
        "gradePct": 0.7422108872187867,
        "smoothedEle": 137.66861381391377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.721685333333333,
        "lng": 121.428273,
        "ele": 138.83333333333334,
        "distanceKm": 33.217817057057616,
        "gradePct": 0.7127094044944681,
        "smoothedEle": 137.99396809698814,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72137766666667,
        "lng": 121.427987,
        "ele": 138.41666666666666,
        "distanceKm": 33.26274000940053,
        "gradePct": 0.707660549944229,
        "smoothedEle": 138.3544728059769,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.72107,
        "lng": 121.427701,
        "ele": 138,
        "distanceKm": 33.30766300626787,
        "gradePct": 0.7091995201853148,
        "smoothedEle": 138.70666372758947,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.720741,
        "lng": 121.42739742857142,
        "ele": 138.35714285714283,
        "distanceKm": 33.35555221218992,
        "gradePct": 0.7196419674482751,
        "smoothedEle": 139.06754782169455,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.720412,
        "lng": 121.42709385714286,
        "ele": 138.71428571428572,
        "distanceKm": 33.403441468428916,
        "gradePct": 0.7272498146910656,
        "smoothedEle": 139.40554310824706,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.720083,
        "lng": 121.42679028571429,
        "ele": 139.07142857142856,
        "distanceKm": 33.45133077498615,
        "gradePct": 0.7119788801053414,
        "smoothedEle": 139.66418382231572,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.719754000000002,
        "lng": 121.42648671428572,
        "ele": 139.42857142857144,
        "distanceKm": 33.49922013185979,
        "gradePct": 0.6717505975297009,
        "smoothedEle": 139.8745316078312,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.719425,
        "lng": 121.42618314285714,
        "ele": 139.78571428571428,
        "distanceKm": 33.54710953904987,
        "gradePct": 0.6073950532096395,
        "smoothedEle": 140.0512241312018,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.719096,
        "lng": 121.42587957142858,
        "ele": 140.14285714285717,
        "distanceKm": 33.594998996554565,
        "gradePct": 0.5496024959598226,
        "smoothedEle": 140.2561868942245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.718767,
        "lng": 121.425576,
        "ele": 140.5,
        "distanceKm": 33.64288850437516,
        "gradePct": 0.5111496624911118,
        "smoothedEle": 140.50556547689268,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7184535,
        "lng": 121.425296,
        "ele": 141,
        "distanceKm": 33.687918673089875,
        "gradePct": 0.5120071776336537,
        "smoothedEle": 140.83200704784295,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.71814,
        "lng": 121.425016,
        "ele": 141.5,
        "distanceKm": 33.73294888518169,
        "gradePct": 0.5324858049442349,
        "smoothedEle": 141.16236427018558,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.717899,
        "lng": 121.424782,
        "ele": 142,
        "distanceKm": 33.768804398828756,
        "gradePct": 0.5555939006072261,
        "smoothedEle": 141.40771614933206,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.717599,
        "lng": 121.4245085,
        "ele": 142.125,
        "distanceKm": 33.81225592861068,
        "gradePct": 0.5868142016337343,
        "smoothedEle": 141.6830710248921,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.717299,
        "lng": 121.424235,
        "ele": 142.25,
        "distanceKm": 33.85570749943562,
        "gradePct": 0.6150209005603966,
        "smoothedEle": 141.9330853645191,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.716993,
        "lng": 121.423967,
        "ele": 142,
        "distanceKm": 33.89932094632613,
        "gradePct": 0.6261741057805412,
        "smoothedEle": 142.1572152208664,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.716644,
        "lng": 121.42370149999999,
        "ele": 142.25,
        "distanceKm": 33.94661317843771,
        "gradePct": 0.5950358244085274,
        "smoothedEle": 142.31767459117273,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.716295,
        "lng": 121.423436,
        "ele": 142.5,
        "distanceKm": 33.99390545188651,
        "gradePct": 0.5163093776734846,
        "smoothedEle": 142.42485626233653,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.715814,
        "lng": 121.423192,
        "ele": 143.75,
        "distanceKm": 34.052877221592865,
        "gradePct": 0.4080256866968683,
        "smoothedEle": 142.52280682303896,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.715443491223162,
        "lng": 121.42301826645111,
        "ele": 143.69646316387073,
        "distanceKm": 34.09771208667988,
        "gradePct": 0.31648009291422186,
        "smoothedEle": 142.54034613004663,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.715062745611583,
        "lng": 121.42287013322556,
        "ele": 143.59823158193538,
        "distanceKm": 34.14265486899575,
        "gradePct": 0.21485460241397633,
        "smoothedEle": 142.5025461382489,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.714682,
        "lng": 121.422722,
        "ele": 143.5,
        "distanceKm": 34.18759766608462,
        "gradePct": 0.10761840484193981,
        "smoothedEle": 142.4198244034048,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.714346499999998,
        "lng": 121.4226255,
        "ele": 143.375,
        "distanceKm": 34.226175509930286,
        "gradePct": 0.018152843820568573,
        "smoothedEle": 142.30278948473017,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.714011,
        "lng": 121.422529,
        "ele": 143.25,
        "distanceKm": 34.26475336021078,
        "gradePct": -0.07010989455071193,
        "smoothedEle": 142.1484572257888,
        "gradeBand": "descent"
      },
      {
        "lat": 23.713517,
        "lng": 121.422422,
        "ele": 141.75,
        "distanceKm": 34.32075344275818,
        "gradePct": -0.17511906185135875,
        "smoothedEle": 141.9440928845096,
        "gradeBand": "descent"
      },
      {
        "lat": 23.712981,
        "lng": 121.422283,
        "ele": 142,
        "distanceKm": 34.38201094980249,
        "gradePct": -0.24918897915958618,
        "smoothedEle": 141.78663694011485,
        "gradeBand": "descent"
      },
      {
        "lat": 23.712584,
        "lng": 121.42219974999999,
        "ele": 141.62499999999997,
        "distanceKm": 34.42696164983011,
        "gradePct": -0.2938701457590326,
        "smoothedEle": 141.63413478489971,
        "gradeBand": "descent"
      },
      {
        "lat": 23.712187,
        "lng": 121.4221165,
        "ele": 141.25000000000003,
        "distanceKm": 34.471912354720985,
        "gradePct": -0.33093990187778227,
        "smoothedEle": 141.45587508972778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.71179,
        "lng": 121.42203325,
        "ele": 140.87500000000003,
        "distanceKm": 34.516863064475594,
        "gradePct": -0.349640177258487,
        "smoothedEle": 141.28212043587357,
        "gradeBand": "descent"
      },
      {
        "lat": 23.711393,
        "lng": 121.42195,
        "ele": 140.5,
        "distanceKm": 34.56181377909361,
        "gradePct": -0.3486542996573533,
        "smoothedEle": 141.11425424062364,
        "gradeBand": "descent"
      },
      {
        "lat": 23.711028,
        "lng": 121.421843,
        "ele": 139.25,
        "distanceKm": 34.60383649153759,
        "gradePct": -0.3475580230672065,
        "smoothedEle": 140.96315482417407,
        "gradeBand": "descent"
      },
      {
        "lat": 23.71062,
        "lng": 121.421714,
        "ele": 139,
        "distanceKm": 34.65106680730788,
        "gradePct": -0.36291657051481596,
        "smoothedEle": 140.77742587477175,
        "gradeBand": "descent"
      },
      {
        "lat": 23.710213,
        "lng": 121.421542,
        "ele": 140,
        "distanceKm": 34.6995929046548,
        "gradePct": -0.36538744379284904,
        "smoothedEle": 140.63082512594238,
        "gradeBand": "descent"
      },
      {
        "lat": 23.709903,
        "lng": 121.421392,
        "ele": 140.75,
        "distanceKm": 34.73729475171349,
        "gradePct": -0.3513134913676325,
        "smoothedEle": 140.5392166309944,
        "gradeBand": "descent"
      },
      {
        "lat": 23.70948978842497,
        "lng": 121.42110498807605,
        "ele": 140.75,
        "distanceKm": 34.79174635686206,
        "gradePct": -0.29859862576156404,
        "smoothedEle": 140.48341189850342,
        "gradeBand": "descent"
      },
      {
        "lat": 23.709077525616646,
        "lng": 121.42081632538402,
        "ele": 140.75,
        "distanceKm": 34.84619954160415,
        "gradePct": -0.215337977477439,
        "smoothedEle": 140.52655089705198,
        "gradeBand": "descent"
      },
      {
        "lat": 23.708665262808324,
        "lng": 121.42052766269201,
        "ele": 140.75,
        "distanceKm": 34.90065277646524,
        "gradePct": -0.1048499499445001,
        "smoothedEle": 140.66005253356738,
        "gradeBand": "descent"
      },
      {
        "lat": 23.708253,
        "lng": 121.420239,
        "ele": 140.75,
        "distanceKm": 34.95510606144608,
        "gradePct": 0.020970761198839425,
        "smoothedEle": 140.82813528787696,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.707936,
        "lng": 121.419968,
        "ele": 140.37499999999997,
        "distanceKm": 34.999869102655765,
        "gradePct": 0.1357294319994853,
        "smoothedEle": 141.0373423120311,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.707619,
        "lng": 121.419697,
        "ele": 140,
        "distanceKm": 35.04463218518374,
        "gradePct": 0.24286667137125773,
        "smoothedEle": 141.26029687574857,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.707321,
        "lng": 121.419402,
        "ele": 140,
        "distanceKm": 35.08935427594411,
        "gradePct": 0.3387824884252888,
        "smoothedEle": 141.5022108881257,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.707076,
        "lng": 121.419024,
        "ele": 141,
        "distanceKm": 35.13650559979555,
        "gradePct": 0.41826999583696933,
        "smoothedEle": 141.7736811327983,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.706885,
        "lng": 121.418721,
        "ele": 141.75,
        "distanceKm": 35.17395852580981,
        "gradePct": 0.4762534668615641,
        "smoothedEle": 142.02336730622667,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.706768,
        "lng": 121.4183615,
        "ele": 142.37499999999994,
        "distanceKm": 35.21280328197313,
        "gradePct": 0.5112450304354705,
        "smoothedEle": 142.231292991772,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.706651,
        "lng": 121.418002,
        "ele": 143,
        "distanceKm": 35.25164806906069,
        "gradePct": 0.538894196466037,
        "smoothedEle": 142.43414397790016,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.70654366666667,
        "lng": 121.417537,
        "ele": 142.91666666666666,
        "distanceKm": 35.300471873655106,
        "gradePct": 0.5485475128000752,
        "smoothedEle": 142.68598711340317,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.706436333333333,
        "lng": 121.417072,
        "ele": 142.83333333333334,
        "distanceKm": 35.34929571601008,
        "gradePct": 0.5602372403581773,
        "smoothedEle": 142.96623490970035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.706329,
        "lng": 121.416607,
        "ele": 142.75,
        "distanceKm": 35.39811959612808,
        "gradePct": 0.5756897436441721,
        "smoothedEle": 143.27974579892913,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.706127,
        "lng": 121.416038,
        "ele": 144.25,
        "distanceKm": 35.46025283723452,
        "gradePct": 0.6166783070290726,
        "smoothedEle": 143.7820309701453,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.70583,
        "lng": 121.415604,
        "ele": 145.75,
        "distanceKm": 35.51541718123073,
        "gradePct": 0.6791601409101482,
        "smoothedEle": 144.28242343247908,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.705365,
        "lng": 121.415167,
        "ele": 144.75,
        "distanceKm": 35.58363034940021,
        "gradePct": 0.7651826905984342,
        "smoothedEle": 144.89466317040493,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.704927,
        "lng": 121.414821,
        "ele": 144.5,
        "distanceKm": 35.64373851868813,
        "gradePct": 0.8414470417854512,
        "smoothedEle": 145.4586778429451,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.704621,
        "lng": 121.414609,
        "ele": 145,
        "distanceKm": 35.68403289102922,
        "gradePct": 0.8905055620686055,
        "smoothedEle": 145.86080807161485,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.704330499999998,
        "lng": 121.4144205,
        "ele": 145.125,
        "distanceKm": 35.72160626556333,
        "gradePct": 0.9300314709699642,
        "smoothedEle": 146.25970646649606,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.70404,
        "lng": 121.414232,
        "ele": 145.25,
        "distanceKm": 35.75917966192024,
        "gradePct": 0.9677094740848793,
        "smoothedEle": 146.67648384229378,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.703641333333334,
        "lng": 121.413982,
        "ele": 146.25000000000006,
        "distanceKm": 35.810297287342095,
        "gradePct": 1.0144678666684306,
        "smoothedEle": 147.27938478148982,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.703242666666664,
        "lng": 121.413732,
        "ele": 147.24999999999994,
        "distanceKm": 35.86141495148395,
        "gradePct": 1.051186308935883,
        "smoothedEle": 147.84883025303995,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.702844,
        "lng": 121.413482,
        "ele": 148.25,
        "distanceKm": 35.91253265434317,
        "gradePct": 1.0698583931988335,
        "smoothedEle": 148.3754381594645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.702287,
        "lng": 121.413098,
        "ele": 149.75,
        "distanceKm": 35.98577610764822,
        "gradePct": 1.1412090167180902,
        "smoothedEle": 149.30294201181752,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.701834666666667,
        "lng": 121.412808,
        "ele": 150.41666666666663,
        "distanceKm": 36.04409958106187,
        "gradePct": 1.2158278911781624,
        "smoothedEle": 150.1566939356795,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.70138233333333,
        "lng": 121.412518,
        "ele": 151.08333333333337,
        "distanceKm": 36.10242310628234,
        "gradePct": 1.2880856063849846,
        "smoothedEle": 151.05077048002542,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.70093,
        "lng": 121.412228,
        "ele": 151.75,
        "distanceKm": 36.16074668330961,
        "gradePct": 1.3874260552881157,
        "smoothedEle": 152.00366398082116,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7005784,
        "lng": 121.411996,
        "ele": 152.50000000000003,
        "distanceKm": 36.2064247404638,
        "gradePct": 1.4748165914247833,
        "smoothedEle": 152.73696500174614,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.7002268,
        "lng": 121.411764,
        "ele": 153.25000000000006,
        "distanceKm": 36.252102830524606,
        "gradePct": 1.5228671706190324,
        "smoothedEle": 153.44512869962986,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6998752,
        "lng": 121.411532,
        "ele": 153.99999999999994,
        "distanceKm": 36.2977809534917,
        "gradePct": 1.5472867629962417,
        "smoothedEle": 154.1205318936213,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6995236,
        "lng": 121.4113,
        "ele": 154.74999999999997,
        "distanceKm": 36.34345910936387,
        "gradePct": 1.5420748770962647,
        "smoothedEle": 154.77354320037327,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.699172,
        "lng": 121.411068,
        "ele": 155.5,
        "distanceKm": 36.389137298140795,
        "gradePct": 1.5251340836480412,
        "smoothedEle": 155.42250655360576,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.698834,
        "lng": 121.41085666666666,
        "ele": 156.25000000000003,
        "distanceKm": 36.43244499164962,
        "gradePct": 1.5047622140236143,
        "smoothedEle": 156.05555617764526,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.698496,
        "lng": 121.41064533333333,
        "ele": 156.99999999999997,
        "distanceKm": 36.47575271284181,
        "gradePct": 1.4831542855683275,
        "smoothedEle": 156.69402886930143,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.698158,
        "lng": 121.410434,
        "ele": 157.75,
        "distanceKm": 36.51906046171781,
        "gradePct": 1.4533305836582755,
        "smoothedEle": 157.2928528393733,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.697724,
        "lng": 121.410102,
        "ele": 158.5,
        "distanceKm": 36.57798073008836,
        "gradePct": 1.4194937312446183,
        "smoothedEle": 158.08624418049808,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.697367,
        "lng": 121.409855,
        "ele": 159,
        "distanceKm": 36.62497340584275,
        "gradePct": 1.4237196458279529,
        "smoothedEle": 158.78043198110348,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.696981,
        "lng": 121.409594,
        "ele": 159.25,
        "distanceKm": 36.67545569147423,
        "gradePct": 1.4429472618873969,
        "smoothedEle": 159.55696976214648,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6966405,
        "lng": 121.409401,
        "ele": 160.00000000000006,
        "distanceKm": 36.71811357252704,
        "gradePct": 1.4495100987696166,
        "smoothedEle": 160.19459714879176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6963,
        "lng": 121.409208,
        "ele": 160.75,
        "distanceKm": 36.76077147719219,
        "gradePct": 1.4435907906176855,
        "smoothedEle": 160.8039373954883,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.695891,
        "lng": 121.408991,
        "ele": 162,
        "distanceKm": 36.811333405900726,
        "gradePct": 1.4310711748310083,
        "smoothedEle": 161.4792229845302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.695522,
        "lng": 121.408861,
        "ele": 161.75000000000003,
        "distanceKm": 36.85444664148189,
        "gradePct": 1.4150005113880335,
        "smoothedEle": 162.01434725784918,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.695153,
        "lng": 121.408731,
        "ele": 161.5,
        "distanceKm": 36.897559888549715,
        "gradePct": 1.379004906131507,
        "smoothedEle": 162.5124872250477,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.694793,
        "lng": 121.408664,
        "ele": 162.5,
        "distanceKm": 36.93816726586323,
        "gradePct": 1.3237203362328038,
        "smoothedEle": 162.95454597926212,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.694159,
        "lng": 121.408624,
        "ele": 165,
        "distanceKm": 37.008782499285026,
        "gradePct": 1.2050454900369345,
        "smoothedEle": 163.67025768388052,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6938115,
        "lng": 121.40864450000001,
        "ele": 165.37500000000003,
        "distanceKm": 37.04747912786619,
        "gradePct": 1.1452458525017462,
        "smoothedEle": 164.04980244328962,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.693464,
        "lng": 121.408665,
        "ele": 165.75,
        "distanceKm": 37.086175756746954,
        "gradePct": 1.0910113958140366,
        "smoothedEle": 164.41626132763562,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.692915999999997,
        "lng": 121.40872300000001,
        "ele": 165.875,
        "distanceKm": 37.14739617706828,
        "gradePct": 1.0025420708242525,
        "smoothedEle": 164.93446264922403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.692368,
        "lng": 121.408781,
        "ele": 166,
        "distanceKm": 37.20861659978016,
        "gradePct": 0.909468334447296,
        "smoothedEle": 165.36125745056341,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6918595,
        "lng": 121.408743,
        "ele": 166.125,
        "distanceKm": 37.26529153346476,
        "gradePct": 0.8471454924417766,
        "smoothedEle": 165.77089701624996,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.691351,
        "lng": 121.408705,
        "ele": 166.25,
        "distanceKm": 37.32196646817811,
        "gradePct": 0.7894279907848517,
        "smoothedEle": 166.16785282583965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.690998999999998,
        "lng": 121.40870149999999,
        "ele": 166.375,
        "distanceKm": 37.361108758864454,
        "gradePct": 0.7342711898352902,
        "smoothedEle": 166.38168925545602,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.690647,
        "lng": 121.408698,
        "ele": 166.5,
        "distanceKm": 37.40025104955914,
        "gradePct": 0.6590866811740707,
        "smoothedEle": 166.51266193404086,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.69021133333333,
        "lng": 121.40873588888888,
        "ele": 166.63888888888889,
        "distanceKm": 37.44884842088897,
        "gradePct": 0.5709482306003941,
        "smoothedEle": 166.65743157874675,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.689775666666666,
        "lng": 121.40877377777778,
        "ele": 166.77777777777777,
        "distanceKm": 37.49744579324037,
        "gradePct": 0.5019647750214299,
        "smoothedEle": 166.78927511377603,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.689339999999998,
        "lng": 121.40881166666667,
        "ele": 166.91666666666666,
        "distanceKm": 37.54604316661386,
        "gradePct": 0.43258798045753066,
        "smoothedEle": 166.92953609016604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.688904333333333,
        "lng": 121.40884955555556,
        "ele": 167.05555555555554,
        "distanceKm": 37.59464054100889,
        "gradePct": 0.3666763067640144,
        "smoothedEle": 167.07648875031956,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.688468666666665,
        "lng": 121.40888744444445,
        "ele": 167.19444444444446,
        "distanceKm": 37.643237916425996,
        "gradePct": 0.3110023383855331,
        "smoothedEle": 167.21706690160357,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.688033,
        "lng": 121.40892533333334,
        "ele": 167.33333333333334,
        "distanceKm": 37.6918352928646,
        "gradePct": 0.28808041290460823,
        "smoothedEle": 167.3487434974511,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.687597333333333,
        "lng": 121.40896322222223,
        "ele": 167.47222222222223,
        "distanceKm": 37.740432670325255,
        "gradePct": 0.27156761599916757,
        "smoothedEle": 167.44706423908383,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.68716166666667,
        "lng": 121.40900111111112,
        "ele": 167.61111111111111,
        "distanceKm": 37.78903004880738,
        "gradePct": 0.22899041382033855,
        "smoothedEle": 167.4534146373424,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.686726,
        "lng": 121.409039,
        "ele": 167.75,
        "distanceKm": 37.83762742831153,
        "gradePct": 0.17297603805606981,
        "smoothedEle": 167.42417483251458,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6862895,
        "lng": 121.409175,
        "ele": 168,
        "distanceKm": 37.88810107928326,
        "gradePct": 0.08906493088035071,
        "smoothedEle": 167.32390899117635,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.685853,
        "lng": 121.409311,
        "ele": 168.25,
        "distanceKm": 37.938574742953705,
        "gradePct": -0.031153424926676422,
        "smoothedEle": 167.11011741469585,
        "gradeBand": "descent"
      },
      {
        "lat": 23.685469,
        "lng": 121.409374,
        "ele": 168.25,
        "distanceKm": 37.98175288097107,
        "gradePct": -0.13825018707133208,
        "smoothedEle": 166.90667422536492,
        "gradeBand": "descent"
      },
      {
        "lat": 23.685009,
        "lng": 121.409484,
        "ele": 168.25,
        "distanceKm": 38.034114713169544,
        "gradePct": -0.2692298095992316,
        "smoothedEle": 166.6265925107957,
        "gradeBand": "descent"
      },
      {
        "lat": 23.684612,
        "lng": 121.409764,
        "ele": 168,
        "distanceKm": 38.0866663402317,
        "gradePct": -0.39420779445269616,
        "smoothedEle": 166.27048237948756,
        "gradeBand": "descent"
      },
      {
        "lat": 23.684337977198492,
        "lng": 121.41009420185446,
        "ele": 166.63150338229576,
        "distanceKm": 38.13204263536316,
        "gradePct": -0.5127166950296149,
        "smoothedEle": 165.88938497502403,
        "gradeBand": "descent"
      },
      {
        "lat": 23.68409,
        "lng": 121.410449,
        "ele": 166.25,
        "distanceKm": 38.1774916753413,
        "gradePct": -0.6304767683453049,
        "smoothedEle": 165.4535542531315,
        "gradeBand": "descent"
      },
      {
        "lat": 23.683786017887982,
        "lng": 121.41095009593202,
        "ele": 165.2589566498971,
        "distanceKm": 38.2386981080738,
        "gradePct": -0.784719433552385,
        "smoothedEle": 164.75537785244114,
        "gradeBand": "descent"
      },
      {
        "lat": 23.683479,
        "lng": 121.411449,
        "ele": 163.5,
        "distanceKm": 38.299906322641895,
        "gradePct": -0.9878779845680012,
        "smoothedEle": 163.84593811050613,
        "gradeBand": "descent"
      },
      {
        "lat": 23.683196531966097,
        "lng": 121.41184445524746,
        "ele": 163.5,
        "distanceKm": 38.35097630658392,
        "gradePct": -1.1532937916698829,
        "smoothedEle": 163.05245046336663,
        "gradeBand": "descent"
      },
      {
        "lat": 23.682913629481703,
        "lng": 121.41223953869965,
        "ele": 162.93852679029007,
        "distanceKm": 38.40204625381078,
        "gradePct": -1.2832834284926309,
        "smoothedEle": 162.29146233414102,
        "gradeBand": "descent"
      },
      {
        "lat": 23.68263031474085,
        "lng": 121.41263426934982,
        "ele": 161.84426339514505,
        "distanceKm": 38.45311623776456,
        "gradePct": -1.3728065980204402,
        "smoothedEle": 161.56888119080813,
        "gradeBand": "descent"
      },
      {
        "lat": 23.682347,
        "lng": 121.413029,
        "ele": 160.75,
        "distanceKm": 38.50418629033289,
        "gradePct": -1.4083058763700498,
        "smoothedEle": 160.9241334961541,
        "gradeBand": "descent"
      },
      {
        "lat": 23.682017,
        "lng": 121.413624,
        "ele": 159.5,
        "distanceKm": 38.575021049793484,
        "gradePct": -1.402814811844028,
        "smoothedEle": 160.0072423480392,
        "gradeBand": "descent"
      },
      {
        "lat": 23.68182,
        "lng": 121.414187,
        "ele": 157,
        "distanceKm": 38.6363944346943,
        "gradePct": -1.440839104192941,
        "smoothedEle": 158.9564954937428,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6817235773303,
        "lng": 121.41469968578203,
        "ele": 156.50289377770727,
        "distanceKm": 38.68969151775459,
        "gradePct": -1.5228912367171812,
        "smoothedEle": 157.90688529902053,
        "gradeBand": "descent"
      },
      {
        "lat": 23.681626051553533,
        "lng": 121.41521212385467,
        "ele": 157.0019291851382,
        "distanceKm": 38.74298875236313,
        "gradePct": -1.6651976635722925,
        "smoothedEle": 156.71658039276306,
        "gradeBand": "descent"
      },
      {
        "lat": 23.681528525776766,
        "lng": 121.41572456192733,
        "ele": 157.50096459256906,
        "distanceKm": 38.79628602511433,
        "gradePct": -1.875068242145307,
        "smoothedEle": 155.39866780523238,
        "gradeBand": "descent"
      },
      {
        "lat": 23.681431,
        "lng": 121.416237,
        "ele": 158,
        "distanceKm": 38.8495833360066,
        "gradePct": -2.108005478272277,
        "smoothedEle": 154.0124938429377,
        "gradeBand": "descent"
      },
      {
        "lat": 23.681323,
        "lng": 121.416862,
        "ele": 157.25,
        "distanceKm": 38.91435122680672,
        "gradePct": -2.3289300136710867,
        "smoothedEle": 152.3470975646997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.681175,
        "lng": 121.417295,
        "ele": 153.75,
        "distanceKm": 38.96141539694068,
        "gradePct": -2.4287677804035885,
        "smoothedEle": 151.1774399126796,
        "gradeBand": "descent"
      },
      {
        "lat": 23.680815,
        "lng": 121.417825,
        "ele": 149.25,
        "distanceKm": 39.02861125595788,
        "gradePct": -2.4795024548144555,
        "smoothedEle": 149.59917044803709,
        "gradeBand": "descent"
      },
      {
        "lat": 23.680376,
        "lng": 121.418186,
        "ele": 146.75,
        "distanceKm": 39.08971996431245,
        "gradePct": -2.4615656494903955,
        "smoothedEle": 148.1763336519774,
        "gradeBand": "descent"
      },
      {
        "lat": 23.679903,
        "lng": 121.4184965,
        "ele": 144.375,
        "distanceKm": 39.15108792439368,
        "gradePct": -2.4565799507888686,
        "smoothedEle": 146.60406605633142,
        "gradeBand": "descent"
      },
      {
        "lat": 23.67943,
        "lng": 121.418807,
        "ele": 142,
        "distanceKm": 39.21245594345639,
        "gradePct": -2.520602392919571,
        "smoothedEle": 144.83402437741202,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6789845,
        "lng": 121.419087,
        "ele": 141.37499999999997,
        "distanceKm": 39.269613321594946,
        "gradePct": -2.647021396011891,
        "smoothedEle": 143.0438261487548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.678539,
        "lng": 121.419367,
        "ele": 140.75,
        "distanceKm": 39.32677074823356,
        "gradePct": -2.7912801537228784,
        "smoothedEle": 141.26855909626923,
        "gradeBand": "descent"
      },
      {
        "lat": 23.678198666666667,
        "lng": 121.419591,
        "ele": 140.08333333333337,
        "distanceKm": 39.37095735364377,
        "gradePct": -2.867537250998508,
        "smoothedEle": 140.01058488575367,
        "gradeBand": "descent"
      },
      {
        "lat": 23.677858333333333,
        "lng": 121.419815,
        "ele": 139.41666666666663,
        "distanceKm": 39.41514398972719,
        "gradePct": -2.851135439105253,
        "smoothedEle": 138.9715553278756,
        "gradeBand": "descent"
      },
      {
        "lat": 23.677518,
        "lng": 121.420039,
        "ele": 138.75,
        "distanceKm": 39.459330656483466,
        "gradePct": -2.7968073419420687,
        "smoothedEle": 137.9758983843213,
        "gradeBand": "descent"
      },
      {
        "lat": 23.677148,
        "lng": 121.42026425,
        "ele": 137.4374999999999,
        "distanceKm": 39.50643526929383,
        "gradePct": -2.6772181601008134,
        "smoothedEle": 136.97602458509996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.676778,
        "lng": 121.4204895,
        "ele": 136.125,
        "distanceKm": 39.55353991373444,
        "gradePct": -2.4972596275291465,
        "smoothedEle": 136.05547459641699,
        "gradeBand": "descent"
      },
      {
        "lat": 23.676408,
        "lng": 121.42071475,
        "ele": 134.8125000000001,
        "distanceKm": 39.600644589804894,
        "gradePct": -2.2802926067662694,
        "smoothedEle": 135.23914027603482,
        "gradeBand": "descent"
      },
      {
        "lat": 23.676038,
        "lng": 121.42094,
        "ele": 133.5,
        "distanceKm": 39.647749297504795,
        "gradePct": -2.0821198110238215,
        "smoothedEle": 134.424949122853,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6756675,
        "lng": 121.42117925,
        "ele": 132.75000000000003,
        "distanceKm": 39.69561237507794,
        "gradePct": -1.9455367700281834,
        "smoothedEle": 133.5942224539674,
        "gradeBand": "descent"
      },
      {
        "lat": 23.675297,
        "lng": 121.4214185,
        "ele": 132.00000000000006,
        "distanceKm": 39.743475487816404,
        "gradePct": -1.8614600163918347,
        "smoothedEle": 132.74878241350814,
        "gradeBand": "descent"
      },
      {
        "lat": 23.674926499999998,
        "lng": 121.42165775000001,
        "ele": 131.24999999999997,
        "distanceKm": 39.79133863571934,
        "gradePct": -1.7873129851155793,
        "smoothedEle": 131.93453680145367,
        "gradeBand": "descent"
      },
      {
        "lat": 23.674556,
        "lng": 121.421897,
        "ele": 130.5,
        "distanceKm": 39.83920181878489,
        "gradePct": -1.7237352931679835,
        "smoothedEle": 131.16447321267526,
        "gradeBand": "descent"
      },
      {
        "lat": 23.674246,
        "lng": 121.42213000000001,
        "ele": 130,
        "distanceKm": 39.88104956787519,
        "gradePct": -1.6782672519205515,
        "smoothedEle": 130.54392452837848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.673936,
        "lng": 121.422363,
        "ele": 129.5,
        "distanceKm": 39.922897348879715,
        "gradePct": -1.6245022368501683,
        "smoothedEle": 129.98100110606998,
        "gradeBand": "descent"
      },
      {
        "lat": 23.673607333333333,
        "lng": 121.42257466666668,
        "ele": 128.99999999999997,
        "distanceKm": 39.96532686491701,
        "gradePct": -1.5507626507413055,
        "smoothedEle": 129.46757936720462,
        "gradeBand": "descent"
      },
      {
        "lat": 23.67327866666667,
        "lng": 121.42278633333333,
        "ele": 128.50000000000003,
        "distanceKm": 40.0077564084941,
        "gradePct": -1.4554496952888245,
        "smoothedEle": 129.01336470965242,
        "gradeBand": "descent"
      },
      {
        "lat": 23.67295,
        "lng": 121.422998,
        "ele": 128,
        "distanceKm": 40.05018597961284,
        "gradePct": -1.33977952644181,
        "smoothedEle": 128.61528526460728,
        "gradeBand": "descent"
      },
      {
        "lat": 23.672424,
        "lng": 121.423222,
        "ele": 127,
        "distanceKm": 40.112965727658185,
        "gradePct": -1.1622399496538678,
        "smoothedEle": 128.0998619071609,
        "gradeBand": "descent"
      },
      {
        "lat": 23.671935,
        "lng": 121.423218,
        "ele": 127,
        "distanceKm": 40.16734164775877,
        "gradePct": -1.0034147730397034,
        "smoothedEle": 127.73695116116492,
        "gradeBand": "descent"
      },
      {
        "lat": 23.671477679777702,
        "lng": 121.42312508163027,
        "ele": 126.94176384555664,
        "distanceKm": 40.21906634920156,
        "gradePct": -0.8577088774134045,
        "smoothedEle": 127.45940789801432,
        "gradeBand": "descent"
      },
      {
        "lat": 23.671026294769852,
        "lng": 121.42299841234076,
        "ele": 126.79096707233363,
        "distanceKm": 40.2708893621019,
        "gradePct": -0.7353323154517922,
        "smoothedEle": 127.20203505029178,
        "gradeBand": "descent"
      },
      {
        "lat": 23.670574909762006,
        "lng": 121.42287174305126,
        "ele": 126.64017029911061,
        "distanceKm": 40.322712386091105,
        "gradePct": -0.6406569672652072,
        "smoothedEle": 126.95107498999128,
        "gradeBand": "descent"
      },
      {
        "lat": 23.670123524754157,
        "lng": 121.42274507376175,
        "ele": 126.4893735258876,
        "distanceKm": 40.374535421170506,
        "gradePct": -0.5654860084075283,
        "smoothedEle": 126.71891769354625,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66967213974631,
        "lng": 121.42261840447225,
        "ele": 126.33857675266458,
        "distanceKm": 40.426358467338446,
        "gradePct": -0.5017310395595682,
        "smoothedEle": 126.5052842017147,
        "gradeBand": "descent"
      },
      {
        "lat": 23.669220628731107,
        "lng": 121.4224922740758,
        "ele": 126.3980703937174,
        "distanceKm": 40.478181464474694,
        "gradePct": -0.45005055567665836,
        "smoothedEle": 126.32863544447639,
        "gradeBand": "descent"
      },
      {
        "lat": 23.668768938331166,
        "lng": 121.42236691085039,
        "ele": 126.75693458858647,
        "distanceKm": 40.53000449368572,
        "gradePct": -0.400021454334771,
        "smoothedEle": 126.20502053761687,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66831740531639,
        "lng": 121.42224087783745,
        "ele": 126.82634221897666,
        "distanceKm": 40.58182742544051,
        "gradePct": -0.35009661382200696,
        "smoothedEle": 126.09877614558468,
        "gradeBand": "descent"
      },
      {
        "lat": 23.667866202658193,
        "lng": 121.42211343891873,
        "ele": 126.28817110948837,
        "distanceKm": 40.63365045229103,
        "gradePct": -0.29630326941691765,
        "smoothedEle": 126.0131647348655,
        "gradeBand": "descent"
      },
      {
        "lat": 23.667415,
        "lng": 121.421986,
        "ele": 125.75,
        "distanceKm": 40.685473490360266,
        "gradePct": -0.25694489598680315,
        "smoothedEle": 125.90299229618734,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66697620634995,
        "lng": 121.42186742968923,
        "ele": 125.43687417931721,
        "distanceKm": 40.73573727304115,
        "gradePct": -0.2442767653484902,
        "smoothedEle": 125.74048442371497,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6665374126999,
        "lng": 121.42174885937847,
        "ele": 125.12374835863443,
        "distanceKm": 40.78600106545963,
        "gradePct": -0.2588316804746451,
        "smoothedEle": 125.53348809225265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.666098902033458,
        "lng": 121.42162909023322,
        "ele": 125.0039786807966,
        "distanceKm": 40.836263813211865,
        "gradePct": -0.29495923796147655,
        "smoothedEle": 125.30731032709299,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66566,
        "lng": 121.421511,
        "ele": 125.25,
        "distanceKm": 40.88652760276371,
        "gradePct": -0.3461334522597956,
        "smoothedEle": 125.05261111669478,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6651495,
        "lng": 121.421357,
        "ele": 125.5,
        "distanceKm": 40.945419563715525,
        "gradePct": -0.41963987629577487,
        "smoothedEle": 124.72922473366849,
        "gradeBand": "descent"
      },
      {
        "lat": 23.664639,
        "lng": 121.421203,
        "ele": 125.75,
        "distanceKm": 41.00431154097675,
        "gradePct": -0.46769037396039403,
        "smoothedEle": 124.4390158591084,
        "gradeBand": "descent"
      },
      {
        "lat": 23.664136499999998,
        "lng": 121.421063,
        "ele": 124.625,
        "distanceKm": 41.06197759226937,
        "gradePct": -0.46800151417935343,
        "smoothedEle": 124.22841700817641,
        "gradeBand": "descent"
      },
      {
        "lat": 23.663634,
        "lng": 121.420923,
        "ele": 123.5,
        "distanceKm": 41.11964365711116,
        "gradePct": -0.43372918677451777,
        "smoothedEle": 124.08091194825215,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6632185,
        "lng": 121.42081,
        "ele": 123.125,
        "distanceKm": 41.16725700366311,
        "gradePct": -0.38777798837080857,
        "smoothedEle": 123.98692610361292,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662803,
        "lng": 121.420697,
        "ele": 122.75,
        "distanceKm": 41.2148703590548,
        "gradePct": -0.32461332040860524,
        "smoothedEle": 123.9231359670012,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6623759540736,
        "lng": 121.42058487457271,
        "ele": 122.52558107022152,
        "distanceKm": 41.26370958744572,
        "gradePct": -0.25766952469227306,
        "smoothedEle": 123.86608627349746,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6619489770368,
        "lng": 121.42047243728636,
        "ele": 122.76279053511074,
        "distanceKm": 41.312548814194315,
        "gradePct": -0.1941993148763117,
        "smoothedEle": 123.82633504534682,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661522,
        "lng": 121.42036,
        "ele": 123,
        "distanceKm": 41.36138804971081,
        "gradePct": -0.1474636007599405,
        "smoothedEle": 123.78817924017976,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6609905,
        "lng": 121.4202125,
        "ele": 123.37499999999997,
        "distanceKm": 41.42236761205949,
        "gradePct": -0.11030057371686165,
        "smoothedEle": 123.74463330602549,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660459,
        "lng": 121.420065,
        "ele": 123.75,
        "distanceKm": 41.48334718945075,
        "gradePct": -0.06428898570908893,
        "smoothedEle": 123.77250227150682,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660093,
        "lng": 121.419937,
        "ele": 123.75,
        "distanceKm": 41.52608160481741,
        "gradePct": -0.028107689447504716,
        "smoothedEle": 123.82571690685815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659784522455126,
        "lng": 121.4197482837045,
        "ele": 124.04806203240811,
        "distanceKm": 41.56540077480914,
        "gradePct": 0.007270921296950019,
        "smoothedEle": 123.88652254600619,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65948,
        "lng": 121.419552,
        "ele": 124.25,
        "distanceKm": 41.60472307816013,
        "gradePct": 0.04625822832880096,
        "smoothedEle": 123.97147925416174,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658983,
        "lng": 121.419217,
        "ele": 124.75,
        "distanceKm": 41.66967104264213,
        "gradePct": 0.12117235605781332,
        "smoothedEle": 124.1457813648722,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658586613986277,
        "lng": 121.41907817761683,
        "ele": 125,
        "distanceKm": 41.71595947995358,
        "gradePct": 0.17383550803492817,
        "smoothedEle": 124.27071592231572,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658184883258613,
        "lng": 121.41895668646934,
        "ele": 125,
        "distanceKm": 41.76231207857701,
        "gradePct": 0.21025623612918984,
        "smoothedEle": 124.39365748626398,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65778325397645,
        "lng": 121.4188347969845,
        "ele": 124.75371277787477,
        "distanceKm": 41.808664665951085,
        "gradePct": 0.23430538638277895,
        "smoothedEle": 124.50694478402683,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657381626988226,
        "lng": 121.41871289849225,
        "ele": 124.50185638893738,
        "distanceKm": 41.85501726349568,
        "gradePct": 0.25090825008881035,
        "smoothedEle": 124.62318958085928,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65698,
        "lng": 121.418591,
        "ele": 124.25,
        "distanceKm": 41.90136987125174,
        "gradePct": 0.26369052871083687,
        "smoothedEle": 124.75530616242891,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656569341704216,
        "lng": 121.41850630549973,
        "ele": 124.3367439422716,
        "distanceKm": 41.947840697268816,
        "gradePct": 0.27361616853540977,
        "smoothedEle": 124.90804334961585,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656163673363373,
        "lng": 121.41839324439978,
        "ele": 124.51939515381727,
        "distanceKm": 41.994395669735574,
        "gradePct": 0.28901652243453946,
        "smoothedEle": 125.07956380378026,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655758005022527,
        "lng": 121.41828018329984,
        "ele": 124.70204636536296,
        "distanceKm": 42.040950651036674,
        "gradePct": 0.3046932529765182,
        "smoothedEle": 125.25108006980382,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655352336681684,
        "lng": 121.41816712219989,
        "ele": 124.88469757690865,
        "distanceKm": 42.08750564117195,
        "gradePct": 0.31932287197228315,
        "smoothedEle": 125.4132000247834,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65494666834084,
        "lng": 121.41805406109995,
        "ele": 125.06734878845431,
        "distanceKm": 42.13406064014095,
        "gradePct": 0.3325831954310827,
        "smoothedEle": 125.56838335468007,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654541,
        "lng": 121.417941,
        "ele": 125.25,
        "distanceKm": 42.18061564794428,
        "gradePct": 0.344674919483991,
        "smoothedEle": 125.73017616844614,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654132419173383,
        "lng": 121.41781274350211,
        "ele": 125.65587499332773,
        "distanceKm": 42.22788860037599,
        "gradePct": 0.35595938178475095,
        "smoothedEle": 125.91034428408146,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653723931894746,
        "lng": 121.41768413537862,
        "ele": 126.0883657534948,
        "distanceKm": 42.27516147858292,
        "gradePct": 0.36090255486532746,
        "smoothedEle": 126.09140777697694,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65331596594737,
        "lng": 121.41755356768931,
        "ele": 126.6691828767474,
        "distanceKm": 42.322434430848794,
        "gradePct": 0.372763566787705,
        "smoothedEle": 126.30115394655884,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652908,
        "lng": 121.417423,
        "ele": 127.25,
        "distanceKm": 42.36970739478196,
        "gradePct": 0.3935487717765122,
        "smoothedEle": 126.5318669283447,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6525695,
        "lng": 121.4173265,
        "ele": 127.375,
        "distanceKm": 42.40860909237691,
        "gradePct": 0.4167696859625202,
        "smoothedEle": 126.73385392002082,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652231,
        "lng": 121.41723,
        "ele": 127.5,
        "distanceKm": 42.44751079639742,
        "gradePct": 0.44438558078545465,
        "smoothedEle": 126.94828348145427,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6517035,
        "lng": 121.41705300000001,
        "ele": 127.5,
        "distanceKm": 42.50887426174706,
        "gradePct": 0.4919807392826669,
        "smoothedEle": 127.31381847561408,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.651176,
        "lng": 121.416876,
        "ele": 127.5,
        "distanceKm": 42.570237748454026,
        "gradePct": 0.5469171479442854,
        "smoothedEle": 127.71330046270096,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650573,
        "lng": 121.416758,
        "ele": 127.25,
        "distanceKm": 42.63835707358636,
        "gradePct": 0.5890801227696262,
        "smoothedEle": 128.14610385702989,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650105166666666,
        "lng": 121.41662933333333,
        "ele": 127.79166666666669,
        "distanceKm": 42.69200325680314,
        "gradePct": 0.5946950085193624,
        "smoothedEle": 128.43171744422597,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649637333333335,
        "lng": 121.41650066666666,
        "ele": 128.33333333333337,
        "distanceKm": 42.74564945146784,
        "gradePct": 0.5822177635030015,
        "smoothedEle": 128.6846768775197,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649169500000003,
        "lng": 121.41637200000001,
        "ele": 128.87499999999997,
        "distanceKm": 42.799295657580316,
        "gradePct": 0.5570761548259835,
        "smoothedEle": 128.9279883141132,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.648701666666668,
        "lng": 121.41624333333334,
        "ele": 129.41666666666663,
        "distanceKm": 42.85294187514149,
        "gradePct": 0.5263802853656996,
        "smoothedEle": 129.17984358014135,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.648233833333336,
        "lng": 121.41611466666667,
        "ele": 129.95833333333331,
        "distanceKm": 42.90658810415006,
        "gradePct": 0.5037457938017317,
        "smoothedEle": 129.45549370427864,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647766,
        "lng": 121.415986,
        "ele": 130.5,
        "distanceKm": 42.96023434460662,
        "gradePct": 0.49769176931647036,
        "smoothedEle": 129.7556542892003,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6473875,
        "lng": 121.4158755,
        "ele": 130.375,
        "distanceKm": 43.00380068546466,
        "gradePct": 0.5122337812365507,
        "smoothedEle": 130.0240475401182,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647009,
        "lng": 121.415765,
        "ele": 130.25,
        "distanceKm": 43.04736703473391,
        "gradePct": 0.5398173808937707,
        "smoothedEle": 130.3119190892892,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646566775967276,
        "lng": 121.41564044851214,
        "ele": 130.49844046782195,
        "distanceKm": 43.09815038191027,
        "gradePct": 0.5701378153493367,
        "smoothedEle": 130.63320738224024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646124551934555,
        "lng": 121.41551589702426,
        "ele": 130.74688093564387,
        "distanceKm": 43.14893373979752,
        "gradePct": 0.5936289844856958,
        "smoothedEle": 130.94191336364267,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64568232790183,
        "lng": 121.4153913455364,
        "ele": 130.99532140346582,
        "distanceKm": 43.19971710839554,
        "gradePct": 0.6056120716116463,
        "smoothedEle": 131.2370247193319,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645240062265326,
        "lng": 121.41526697496089,
        "ele": 131.31918018279617,
        "distanceKm": 43.25050036708215,
        "gradePct": 0.6057689616141565,
        "smoothedEle": 131.5184977789848,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64479779583031,
        "lng": 121.41514260785769,
        "ele": 131.64448648896482,
        "distanceKm": 43.301283634202214,
        "gradePct": 0.5929491612120386,
        "smoothedEle": 131.78738856721586,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64435552939529,
        "lng": 121.41501824075448,
        "ele": 131.9697927951334,
        "distanceKm": 43.35206691200267,
        "gradePct": 0.5673478465174125,
        "smoothedEle": 132.04369709158797,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643913262960275,
        "lng": 121.41489387365128,
        "ele": 132.29509910130204,
        "distanceKm": 43.40285020048188,
        "gradePct": 0.5543747491753431,
        "smoothedEle": 132.32490126684664,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64347099652526,
        "lng": 121.41476950654807,
        "ele": 132.62040540747066,
        "distanceKm": 43.45363349964079,
        "gradePct": 0.5552909988678375,
        "smoothedEle": 132.63509751618267,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64302873009024,
        "lng": 121.41464513944487,
        "ele": 132.9457117136393,
        "distanceKm": 43.504416809478904,
        "gradePct": 0.5624750112155971,
        "smoothedEle": 132.950498480012,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642586463655224,
        "lng": 121.41452077234166,
        "ele": 133.27101801980788,
        "distanceKm": 43.55520012999603,
        "gradePct": 0.5759072495844898,
        "smoothedEle": 133.27110416053327,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642144197220208,
        "lng": 121.41439640523845,
        "ele": 133.59632432597655,
        "distanceKm": 43.60598346119203,
        "gradePct": 0.5950715681663477,
        "smoothedEle": 133.59632379100273,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64170193078519,
        "lng": 121.41427203813525,
        "ele": 133.92163063214514,
        "distanceKm": 43.65676680306677,
        "gradePct": 0.6173027085185899,
        "smoothedEle": 133.9216300971794,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641259664350173,
        "lng": 121.41414767103204,
        "ele": 134.24693693831378,
        "distanceKm": 43.70755015562006,
        "gradePct": 0.6311089043565955,
        "smoothedEle": 134.246936403356,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.640817397915153,
        "lng": 121.41402330392884,
        "ele": 134.5722432444824,
        "distanceKm": 43.758333518851785,
        "gradePct": 0.6359848952671772,
        "smoothedEle": 134.57224270953265,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.640375131480138,
        "lng": 121.41389893682563,
        "ele": 134.89754955065104,
        "distanceKm": 43.80911689276174,
        "gradePct": 0.6391259769705342,
        "smoothedEle": 134.8975490157091,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63993286504512,
        "lng": 121.41377456972243,
        "ele": 135.22285585681962,
        "distanceKm": 43.859900277349446,
        "gradePct": 0.640550374537579,
        "smoothedEle": 135.2228553218834,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.639490598610102,
        "lng": 121.41365020261922,
        "ele": 135.54816216298826,
        "distanceKm": 43.91068367261584,
        "gradePct": 0.6273640406930064,
        "smoothedEle": 135.50852437700087,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.639048332175086,
        "lng": 121.41352583551603,
        "ele": 135.87346846915688,
        "distanceKm": 43.96146707855928,
        "gradePct": 0.600127629189232,
        "smoothedEle": 135.75212185274424,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63860606574007,
        "lng": 121.41340146841281,
        "ele": 136.19877477532552,
        "distanceKm": 44.01225049518072,
        "gradePct": 0.5620223404349793,
        "smoothedEle": 135.96311269673254,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63816379930505,
        "lng": 121.41327710130962,
        "ele": 136.5240810814941,
        "distanceKm": 44.063033922479676,
        "gradePct": 0.5165747576703033,
        "smoothedEle": 136.1520766586836,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637721532870035,
        "lng": 121.4131527342064,
        "ele": 136.84938738766274,
        "distanceKm": 44.11381736045594,
        "gradePct": 0.47019468321942737,
        "smoothedEle": 136.3382431455699,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637279266435016,
        "lng": 121.41302836710321,
        "ele": 137.17469369383136,
        "distanceKm": 44.1646008091094,
        "gradePct": 0.43011525810565776,
        "smoothedEle": 136.53964274035144,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636837,
        "lng": 121.412904,
        "ele": 137.5,
        "distanceKm": 44.21538426843986,
        "gradePct": 0.4091102951451395,
        "smoothedEle": 136.75840304661793,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63648,
        "lng": 121.412779,
        "ele": 137.25,
        "distanceKm": 44.25707312594582,
        "gradePct": 0.4066696211968254,
        "smoothedEle": 136.95105383609618,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63619,
        "lng": 121.412641,
        "ele": 137,
        "distanceKm": 44.29225064758051,
        "gradePct": 0.4122854809370287,
        "smoothedEle": 137.11687538560693,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635809,
        "lng": 121.412374,
        "ele": 136.75,
        "distanceKm": 44.34259525154436,
        "gradePct": 0.43348971840399436,
        "smoothedEle": 137.37649399064594,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635523,
        "lng": 121.412132,
        "ele": 136.75,
        "distanceKm": 44.38283291428426,
        "gradePct": 0.45822226765673174,
        "smoothedEle": 137.5993243836046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635134,
        "lng": 121.411848,
        "ele": 136.75,
        "distanceKm": 44.434870904794415,
        "gradePct": 0.49274372505497854,
        "smoothedEle": 137.89996954232598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634786,
        "lng": 121.411534,
        "ele": 137.25,
        "distanceKm": 44.4850755674118,
        "gradePct": 0.5266512198246813,
        "smoothedEle": 138.2077956768345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634480857142854,
        "lng": 121.41115450000001,
        "ele": 137.8392857142857,
        "distanceKm": 44.53651276142546,
        "gradePct": 0.561468233963368,
        "smoothedEle": 138.54044584889445,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634175714285714,
        "lng": 121.410775,
        "ele": 138.42857142857147,
        "distanceKm": 44.58795002315535,
        "gradePct": 0.5981047051430115,
        "smoothedEle": 138.89091700391552,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63387057142857,
        "lng": 121.4103955,
        "ele": 139.01785714285717,
        "distanceKm": 44.639387352599044,
        "gradePct": 0.6396284041564461,
        "smoothedEle": 139.2788366109859,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633565428571426,
        "lng": 121.410016,
        "ele": 139.60714285714283,
        "distanceKm": 44.69082474975771,
        "gradePct": 0.6943851377861913,
        "smoothedEle": 139.72865196120003,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633260285714286,
        "lng": 121.4096365,
        "ele": 140.19642857142853,
        "distanceKm": 44.74226221462815,
        "gradePct": 0.7645439327999077,
        "smoothedEle": 140.23892060424535,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632955142857142,
        "lng": 121.409257,
        "ele": 140.7857142857143,
        "distanceKm": 44.7936997472123,
        "gradePct": 0.8421894142739731,
        "smoothedEle": 140.79013746931295,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632649999999998,
        "lng": 121.4088775,
        "ele": 141.375,
        "distanceKm": 44.845137347506984,
        "gradePct": 0.9252612745508858,
        "smoothedEle": 141.374993855241,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632344857142858,
        "lng": 121.40849800000001,
        "ele": 141.9642857142857,
        "distanceKm": 44.89657501551226,
        "gradePct": 1.0101376335317223,
        "smoothedEle": 141.9863761206005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632039714285714,
        "lng": 121.4081185,
        "ele": 142.55357142857147,
        "distanceKm": 44.948012751228994,
        "gradePct": 1.0860063980314587,
        "smoothedEle": 142.61228412999142,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631734571428574,
        "lng": 121.407739,
        "ele": 143.14285714285717,
        "distanceKm": 44.99945055465372,
        "gradePct": 1.143619907689414,
        "smoothedEle": 143.24508117667128,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63142942857143,
        "lng": 121.4073595,
        "ele": 143.73214285714283,
        "distanceKm": 45.050888425788386,
        "gradePct": 1.1807279941533502,
        "smoothedEle": 143.8735451225219,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631124285714286,
        "lng": 121.40698,
        "ele": 144.32142857142853,
        "distanceKm": 45.1023263646298,
        "gradePct": 1.194547246781991,
        "smoothedEle": 144.47186567280417,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.630819142857145,
        "lng": 121.4066005,
        "ele": 144.9107142857143,
        "distanceKm": 45.15376437117913,
        "gradePct": 1.1875030261788044,
        "smoothedEle": 145.04004275489538,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.630514,
        "lng": 121.406221,
        "ele": 145.5,
        "distanceKm": 45.20520244543395,
        "gradePct": 1.1622397734227659,
        "smoothedEle": 145.5780762961339,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.630181,
        "lng": 121.405867,
        "ele": 146.5,
        "distanceKm": 45.25688970656373,
        "gradePct": 1.122271059545162,
        "smoothedEle": 146.08830319895137,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.629935,
        "lng": 121.405646,
        "ele": 147,
        "distanceKm": 45.29231716189323,
        "gradePct": 1.088133194429352,
        "smoothedEle": 146.42172448789668,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.629657,
        "lng": 121.405446,
        "ele": 147.5,
        "distanceKm": 45.329339873367374,
        "gradePct": 1.0472714962688014,
        "smoothedEle": 146.75208105832553,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.629252,
        "lng": 121.405191,
        "ele": 148.25,
        "distanceKm": 45.381329168110646,
        "gradePct": 0.9892152293239747,
        "smoothedEle": 147.19527423816396,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.628840800000003,
        "lng": 121.40495800000001,
        "ele": 148.4,
        "distanceKm": 45.43284656174391,
        "gradePct": 0.9325209733959424,
        "smoothedEle": 147.6065504549077,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6284296,
        "lng": 121.404725,
        "ele": 148.55,
        "distanceKm": 45.4843639897158,
        "gradePct": 0.8856554048002738,
        "smoothedEle": 148.01707579450968,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.628018400000002,
        "lng": 121.404492,
        "ele": 148.7,
        "distanceKm": 45.53588145202381,
        "gradePct": 0.8481189133332317,
        "smoothedEle": 148.4252785375533,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6276072,
        "lng": 121.404259,
        "ele": 148.85,
        "distanceKm": 45.58739894866949,
        "gradePct": 0.8184556834633822,
        "smoothedEle": 148.83080435855246,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.627196,
        "lng": 121.404026,
        "ele": 149,
        "distanceKm": 45.63891647965033,
        "gradePct": 0.7971333070132952,
        "smoothedEle": 149.22511868211868,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.626818333333333,
        "lng": 121.40381666666667,
        "ele": 149.16666666666666,
        "distanceKm": 45.68601568644722,
        "gradePct": 0.7837929489946379,
        "smoothedEle": 149.58406673120473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.626440666666667,
        "lng": 121.40360733333333,
        "ele": 149.33333333333334,
        "distanceKm": 45.73311492108655,
        "gradePct": 0.7783417378349571,
        "smoothedEle": 149.94371413523075,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.626063,
        "lng": 121.403398,
        "ele": 149.5,
        "distanceKm": 45.78021418356736,
        "gradePct": 0.7723048157276534,
        "smoothedEle": 150.30092180940792,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.62563133333333,
        "lng": 121.40314766666667,
        "ele": 150.08333333333337,
        "distanceKm": 45.83456776138561,
        "gradePct": 0.7792414211281745,
        "smoothedEle": 150.75259366784005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.625199666666667,
        "lng": 121.40289733333333,
        "ele": 150.66666666666663,
        "distanceKm": 45.88892137863827,
        "gradePct": 0.8018592229657296,
        "smoothedEle": 151.24803468105878,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.624768,
        "lng": 121.402647,
        "ele": 151.25,
        "distanceKm": 45.94327503532411,
        "gradePct": 0.8615614171415669,
        "smoothedEle": 151.8430199484856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.624369833333333,
        "lng": 121.402422,
        "ele": 151.95833333333334,
        "distanceKm": 45.993131072626916,
        "gradePct": 0.932247889636395,
        "smoothedEle": 152.43514313370855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.623971666666666,
        "lng": 121.402197,
        "ele": 152.6666666666667,
        "distanceKm": 46.04298714196353,
        "gradePct": 1.0188176223908274,
        "smoothedEle": 153.0750393649984,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6235735,
        "lng": 121.401972,
        "ele": 153.37500000000006,
        "distanceKm": 46.09284324333352,
        "gradePct": 1.1323777477079502,
        "smoothedEle": 153.8030010583661,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.623175333333332,
        "lng": 121.401747,
        "ele": 154.0833333333333,
        "distanceKm": 46.14269937673645,
        "gradePct": 1.2589933267964024,
        "smoothedEle": 154.60369448787455,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.622777166666665,
        "lng": 121.401522,
        "ele": 154.79166666666666,
        "distanceKm": 46.192555542171895,
        "gradePct": 1.389077570440552,
        "smoothedEle": 155.45504896171298,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.622379,
        "lng": 121.401297,
        "ele": 155.5,
        "distanceKm": 46.242411739639415,
        "gradePct": 1.50158278704131,
        "smoothedEle": 156.33831819631175,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.621884,
        "lng": 121.400996,
        "ele": 157.25,
        "distanceKm": 46.30541911917678,
        "gradePct": 1.6331853748492962,
        "smoothedEle": 157.49241475371767,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.621451,
        "lng": 121.400716,
        "ele": 158,
        "distanceKm": 46.361382547827155,
        "gradePct": 1.73784916165643,
        "smoothedEle": 158.5571828780304,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.621103,
        "lng": 121.400422,
        "ele": 159,
        "distanceKm": 46.410316284252595,
        "gradePct": 1.8099792048509546,
        "smoothedEle": 159.5135570863921,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.620756,
        "lng": 121.400113,
        "ele": 160.75,
        "distanceKm": 46.46011390167313,
        "gradePct": 1.8683281560255491,
        "smoothedEle": 160.50605308380727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.62042825,
        "lng": 121.399765,
        "ele": 161.78125000000003,
        "distanceKm": 46.51095834865743,
        "gradePct": 1.919448669362755,
        "smoothedEle": 161.5394253055391,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6201005,
        "lng": 121.399417,
        "ele": 162.81249999999991,
        "distanceKm": 46.56180285748589,
        "gradePct": 1.9487516888063958,
        "smoothedEle": 162.53975740965444,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61977275,
        "lng": 121.399069,
        "ele": 163.84374999999997,
        "distanceKm": 46.61264742815777,
        "gradePct": 1.9564120914188736,
        "smoothedEle": 163.49917785900038,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.619445,
        "lng": 121.398721,
        "ele": 164.875,
        "distanceKm": 46.663492060672354,
        "gradePct": 1.958381126738752,
        "smoothedEle": 164.47355514908418,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.619117250000002,
        "lng": 121.398373,
        "ele": 165.90625000000003,
        "distanceKm": 46.71433675502762,
        "gradePct": 1.929712092244007,
        "smoothedEle": 165.38282372595324,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.618789500000002,
        "lng": 121.398025,
        "ele": 166.93750000000009,
        "distanceKm": 46.76518151122541,
        "gradePct": 1.8815378603973623,
        "smoothedEle": 166.25366172645653,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61846175,
        "lng": 121.397677,
        "ele": 167.96874999999997,
        "distanceKm": 46.81602632926371,
        "gradePct": 1.8093823738160382,
        "smoothedEle": 167.06728159559373,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.618134,
        "lng": 121.397329,
        "ele": 169,
        "distanceKm": 46.86687120914179,
        "gradePct": 1.7163747571007255,
        "smoothedEle": 167.78451982203822,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617787,
        "lng": 121.39696599999999,
        "ele": 169.125,
        "distanceKm": 46.920317519144525,
        "gradePct": 1.609998078132128,
        "smoothedEle": 168.47616032206037,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61744,
        "lng": 121.396603,
        "ele": 169.25,
        "distanceKm": 46.973763896914924,
        "gradePct": 1.4834995774807993,
        "smoothedEle": 169.10774773671736,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617069,
        "lng": 121.396273,
        "ele": 170.75,
        "distanceKm": 47.02698239083006,
        "gradePct": 1.3616504008908745,
        "smoothedEle": 169.68436167268362,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.616667,
        "lng": 121.395966,
        "ele": 170.75,
        "distanceKm": 47.08153901555541,
        "gradePct": 1.2331820995421123,
        "smoothedEle": 170.21496116032588,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.616334,
        "lng": 121.395737,
        "ele": 171,
        "distanceKm": 47.125304374566035,
        "gradePct": 1.1329813441864864,
        "smoothedEle": 170.5971054487658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615924,
        "lng": 121.39554849999999,
        "ele": 171.25,
        "distanceKm": 47.17477429260325,
        "gradePct": 1.0306719400058173,
        "smoothedEle": 170.97880823293656,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615514,
        "lng": 121.39536,
        "ele": 171.5,
        "distanceKm": 47.224244233966076,
        "gradePct": 0.9286954363117932,
        "smoothedEle": 171.308649469985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614874,
        "lng": 121.39516,
        "ele": 171.75,
        "distanceKm": 47.29826884930148,
        "gradePct": 0.7881948435216448,
        "smoothedEle": 171.73783953753332,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614538,
        "lng": 121.3951115,
        "ele": 172,
        "distanceKm": 47.335955745902055,
        "gradePct": 0.7296040982678347,
        "smoothedEle": 171.96044581811213,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614202,
        "lng": 121.395063,
        "ele": 172.25,
        "distanceKm": 47.373642644163716,
        "gradePct": 0.6828011716212329,
        "smoothedEle": 172.1865672076821,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613774833333334,
        "lng": 121.39503716666667,
        "ele": 172.45833333333331,
        "distanceKm": 47.42121434249896,
        "gradePct": 0.6107938830138798,
        "smoothedEle": 172.39377432338264,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613347666666666,
        "lng": 121.39501133333333,
        "ele": 172.66666666666669,
        "distanceKm": 47.46878604130932,
        "gradePct": 0.5603194839592671,
        "smoothedEle": 172.6135621976857,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6129205,
        "lng": 121.39498549999999,
        "ele": 172.875,
        "distanceKm": 47.51635774059391,
        "gradePct": 0.526893423089817,
        "smoothedEle": 172.83674648044743,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.612493333333333,
        "lng": 121.39495966666667,
        "ele": 173.08333333333331,
        "distanceKm": 47.563929440353434,
        "gradePct": 0.5112863819914206,
        "smoothedEle": 173.07260094852845,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.612066166666665,
        "lng": 121.39493383333333,
        "ele": 173.29166666666669,
        "distanceKm": 47.61150114058765,
        "gradePct": 0.5022989744085702,
        "smoothedEle": 173.32289601785837,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.611639,
        "lng": 121.394908,
        "ele": 173.5,
        "distanceKm": 47.659072841295995,
        "gradePct": 0.5005637767036669,
        "smoothedEle": 173.60083972058678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.610982,
        "lng": 121.394855,
        "ele": 173.75,
        "distanceKm": 47.73232731018299,
        "gradePct": 0.5419983776155992,
        "smoothedEle": 174.0711129147468,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.610565666666666,
        "lng": 121.39477433333334,
        "ele": 174,
        "distanceKm": 47.77934543716306,
        "gradePct": 0.5794345167631015,
        "smoothedEle": 174.40140552110597,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.610149333333332,
        "lng": 121.39469366666667,
        "ele": 174.25,
        "distanceKm": 47.826363568706554,
        "gradePct": 0.6227960672957771,
        "smoothedEle": 174.7547423120631,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.609733,
        "lng": 121.394613,
        "ele": 174.5,
        "distanceKm": 47.87338170481291,
        "gradePct": 0.6640466948219215,
        "smoothedEle": 175.1144734406349,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6093055,
        "lng": 121.39444150000001,
        "ele": 174.99999999999997,
        "distanceKm": 47.92402746151557,
        "gradePct": 0.7066722449033469,
        "smoothedEle": 175.5160993733625,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.608878,
        "lng": 121.39427,
        "ele": 175.5,
        "distanceKm": 47.97467323788015,
        "gradePct": 0.750057786741363,
        "smoothedEle": 175.9511632619979,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.608437375623264,
        "lng": 121.39404994953196,
        "ele": 176.2355483057945,
        "distanceKm": 48.028554752861076,
        "gradePct": 0.7891514254474788,
        "smoothedEle": 176.41434842861804,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.607996583748843,
        "lng": 121.39383029968798,
        "ele": 176.907032203863,
        "distanceKm": 48.08243626858592,
        "gradePct": 0.8096348625557143,
        "smoothedEle": 176.8535374132298,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60755579187442,
        "lng": 121.39361064984398,
        "ele": 177.57851610193146,
        "distanceKm": 48.13631781556658,
        "gradePct": 0.8225015402713781,
        "smoothedEle": 177.2984058952176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.607115,
        "lng": 121.393391,
        "ele": 178.25,
        "distanceKm": 48.19019939380137,
        "gradePct": 0.8452439346668622,
        "smoothedEle": 177.783571205894,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.606610740170733,
        "lng": 121.39313493567151,
        "ele": 178.56147128639975,
        "distanceKm": 48.252043434996615,
        "gradePct": 0.8607876770358575,
        "smoothedEle": 178.33912883791217,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.606106,
        "lng": 121.39288,
        "ele": 179.5,
        "distanceKm": 48.31388755932226,
        "gradePct": 0.8480789939452871,
        "smoothedEle": 178.83250086206044,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60569646894797,
        "lng": 121.39267093869373,
        "ele": 179.85798168883747,
        "distanceKm": 48.364161232042164,
        "gradePct": 0.8236122209987288,
        "smoothedEle": 179.17541399900054,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6052863704332,
        "lng": 121.39246321029705,
        "ele": 179.67502681522132,
        "distanceKm": 48.414434766641406,
        "gradePct": 0.7800204082274886,
        "smoothedEle": 179.4577915583743,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.604876717187256,
        "lng": 121.39225444076614,
        "ele": 179.6529712484045,
        "distanceKm": 48.46470821721297,
        "gradePct": 0.7204956784746507,
        "smoothedEle": 179.71552831635685,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60446734352336,
        "lng": 121.39204501476829,
        "ele": 180.4428322316631,
        "distanceKm": 48.514981883814556,
        "gradePct": 0.648059988033468,
        "smoothedEle": 179.95037733091704,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.604057969859465,
        "lng": 121.39183558877043,
        "ele": 181.23269321492168,
        "distanceKm": 48.56525557869473,
        "gradePct": 0.5726021819872412,
        "smoothedEle": 180.16233750817844,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603648479357656,
        "lng": 121.39162643697088,
        "ele": 181.00413097461936,
        "distanceKm": 48.61552921608741,
        "gradePct": 0.5024503962194871,
        "smoothedEle": 180.35104967445832,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603238986238434,
        "lng": 121.39141729131391,
        "ele": 180.7527539830796,
        "distanceKm": 48.665802879986416,
        "gradePct": 0.4411091841876995,
        "smoothedEle": 180.5079623979502,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.602829493119216,
        "lng": 121.39120814565696,
        "ele": 180.5013769915398,
        "distanceKm": 48.7160765720945,
        "gradePct": 0.37846995624740865,
        "smoothedEle": 180.60161846652616,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60242,
        "lng": 121.390999,
        "ele": 180.25,
        "distanceKm": 48.76635029241286,
        "gradePct": 0.3134619621544091,
        "smoothedEle": 180.66358501278077,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6020595,
        "lng": 121.390824,
        "ele": 180.5,
        "distanceKm": 48.810223172863864,
        "gradePct": 0.25490172401350014,
        "smoothedEle": 180.6928526030339,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.601699,
        "lng": 121.390649,
        "ele": 180.74999999999997,
        "distanceKm": 48.85409607323851,
        "gradePct": 0.18996925070521029,
        "smoothedEle": 180.68519539136582,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6013385,
        "lng": 121.390474,
        "ele": 181,
        "distanceKm": 48.89796899353655,
        "gradePct": 0.10532067060013243,
        "smoothedEle": 180.60109587411955,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.600978,
        "lng": 121.390299,
        "ele": 181.25,
        "distanceKm": 48.94184193375776,
        "gradePct": 0.006896039640622641,
        "smoothedEle": 180.45386429604412,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.600607,
        "lng": 121.3901105,
        "ele": 181.125,
        "distanceKm": 48.98734746625711,
        "gradePct": -0.09377102895906446,
        "smoothedEle": 180.2667852383264,
        "gradeBand": "descent"
      },
      {
        "lat": 23.600236000000002,
        "lng": 121.389922,
        "ele": 181,
        "distanceKm": 49.03285302169155,
        "gradePct": -0.18420072305047278,
        "smoothedEle": 180.0696946683678,
        "gradeBand": "descent"
      },
      {
        "lat": 23.599865,
        "lng": 121.38973349999999,
        "ele": 180.875,
        "distanceKm": 49.078358600060895,
        "gradePct": -0.27044635007923784,
        "smoothedEle": 179.86025670230447,
        "gradeBand": "descent"
      },
      {
        "lat": 23.599494,
        "lng": 121.389545,
        "ele": 180.75,
        "distanceKm": 49.12386420136389,
        "gradePct": -0.34737672082145676,
        "smoothedEle": 179.64834164874355,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5991495,
        "lng": 121.389375,
        "ele": 180.12500000000006,
        "distanceKm": 49.1659054168953,
        "gradePct": -0.4037605919521772,
        "smoothedEle": 179.45127641484464,
        "gradeBand": "descent"
      },
      {
        "lat": 23.598805,
        "lng": 121.389205,
        "ele": 179.5,
        "distanceKm": 49.20794665117469,
        "gradePct": -0.46338873192149266,
        "smoothedEle": 179.17744602596815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.598332749756914,
        "lng": 121.38903837643576,
        "ele": 178.69311935135508,
        "distanceKm": 49.263135079546586,
        "gradePct": -0.5374923019338718,
        "smoothedEle": 178.75384854757374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.597855833171277,
        "lng": 121.38888691762384,
        "ele": 178.21207956757007,
        "distanceKm": 49.3183659109068,
        "gradePct": -0.6260455306777111,
        "smoothedEle": 178.2543036662821,
        "gradeBand": "descent"
      },
      {
        "lat": 23.597378916585637,
        "lng": 121.38873545881192,
        "ele": 177.731039783785,
        "distanceKm": 49.373596757948015,
        "gradePct": -0.7285972416473757,
        "smoothedEle": 177.6963812030774,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596902,
        "lng": 121.388584,
        "ele": 177.25,
        "distanceKm": 49.428827620670035,
        "gradePct": -0.8430818898574808,
        "smoothedEle": 177.09583030109448,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5965475,
        "lng": 121.388425,
        "ele": 177,
        "distanceKm": 49.4714459966396,
        "gradePct": -0.9337983719155426,
        "smoothedEle": 176.61379341699873,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596193,
        "lng": 121.388266,
        "ele": 176.75,
        "distanceKm": 49.51406438925555,
        "gradePct": -1.0022966778028035,
        "smoothedEle": 176.12359943842364,
        "gradeBand": "descent"
      },
      {
        "lat": 23.595689,
        "lng": 121.388012,
        "ele": 175.5,
        "distanceKm": 49.575794663367745,
        "gradePct": -1.064072575843597,
        "smoothedEle": 175.44712900753362,
        "gradeBand": "descent"
      },
      {
        "lat": 23.59528425,
        "lng": 121.3877535,
        "ele": 174.8125,
        "distanceKm": 49.627942482478694,
        "gradePct": -1.0828800963697165,
        "smoothedEle": 174.908924241587,
        "gradeBand": "descent"
      },
      {
        "lat": 23.594879499999998,
        "lng": 121.387495,
        "ele": 174.125,
        "distanceKm": 49.680090342644085,
        "gradePct": -1.076630056511619,
        "smoothedEle": 174.39588326183426,
        "gradeBand": "descent"
      },
      {
        "lat": 23.59447475,
        "lng": 121.3872365,
        "ele": 173.4375,
        "distanceKm": 49.73223824386301,
        "gradePct": -1.0547858137529624,
        "smoothedEle": 173.89289686674894,
        "gradeBand": "descent"
      },
      {
        "lat": 23.59407,
        "lng": 121.386978,
        "ele": 172.75,
        "distanceKm": 49.78438618613557,
        "gradePct": -1.0221973061037302,
        "smoothedEle": 173.39836428115788,
        "gradeBand": "descent"
      },
      {
        "lat": 23.59357,
        "lng": 121.386667,
        "ele": 172.25,
        "distanceKm": 49.848381468970395,
        "gradePct": -0.9813163939298115,
        "smoothedEle": 172.80358697106712,
        "gradeBand": "descent"
      },
      {
        "lat": 23.593202375,
        "lng": 121.386435625,
        "ele": 171.96875,
        "distanceKm": 49.89557151443553,
        "gradePct": -0.9615265183960651,
        "smoothedEle": 172.35843745530383,
        "gradeBand": "descent"
      },
      {
        "lat": 23.59283475,
        "lng": 121.38620425,
        "ele": 171.6875,
        "distanceKm": 49.94276159291075,
        "gradePct": -0.9456640741361084,
        "smoothedEle": 171.92613867481109,
        "gradeBand": "descent"
      },
      {
        "lat": 23.592467125,
        "lng": 121.38597287500001,
        "ele": 171.40625000000003,
        "distanceKm": 49.98995170439598,
        "gradePct": -0.9286659403056388,
        "smoothedEle": 171.51476884595806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5920995,
        "lng": 121.38574150000001,
        "ele": 171.12500000000003,
        "distanceKm": 50.037141848890116,
        "gradePct": -0.9119810832585425,
        "smoothedEle": 171.1104514470488,
        "gradeBand": "descent"
      },
      {
        "lat": 23.591731875,
        "lng": 121.385510125,
        "ele": 170.84374999999997,
        "distanceKm": 50.08433202639382,
        "gradePct": -0.8952304680813644,
        "smoothedEle": 170.7131864879204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.591364249999998,
        "lng": 121.38527875,
        "ele": 170.5625,
        "distanceKm": 50.13152223690555,
        "gradePct": -0.8789010971125688,
        "smoothedEle": 170.3235747396565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.590996625,
        "lng": 121.385047375,
        "ele": 170.28125,
        "distanceKm": 50.178712480424956,
        "gradePct": -0.8500038454442521,
        "smoothedEle": 169.9674592649251,
        "gradeBand": "descent"
      },
      {
        "lat": 23.590629,
        "lng": 121.384816,
        "ele": 170,
        "distanceKm": 50.225902756951946,
        "gradePct": -0.8169997943403267,
        "smoothedEle": 169.62957968394468,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5902324,
        "lng": 121.3845606,
        "ele": 169.45000000000005,
        "distanceKm": 50.27710973032456,
        "gradePct": -0.7772776029739984,
        "smoothedEle": 169.29488323337924,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5898358,
        "lng": 121.3843052,
        "ele": 168.89999999999998,
        "distanceKm": 50.3283167436812,
        "gradePct": -0.758137501549553,
        "smoothedEle": 168.9116509927852,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5894392,
        "lng": 121.3840498,
        "ele": 168.35000000000002,
        "distanceKm": 50.37952379702063,
        "gradePct": -0.7619518301945122,
        "smoothedEle": 168.4678085108039,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5890426,
        "lng": 121.3837944,
        "ele": 167.79999999999995,
        "distanceKm": 50.43073089034299,
        "gradePct": -0.7653202180834053,
        "smoothedEle": 168.03414759975976,
        "gradeBand": "descent"
      },
      {
        "lat": 23.588646,
        "lng": 121.383539,
        "ele": 167.25,
        "distanceKm": 50.48193802364707,
        "gradePct": -0.7760507309471409,
        "smoothedEle": 167.616212373927,
        "gradeBand": "descent"
      },
      {
        "lat": 23.588285,
        "lng": 121.3833255,
        "ele": 167.125,
        "distanceKm": 50.52759631165893,
        "gradePct": -0.7823129089768843,
        "smoothedEle": 167.27157162969522,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587924,
        "lng": 121.383112,
        "ele": 167,
        "distanceKm": 50.57325462819202,
        "gradePct": -0.7870481353791071,
        "smoothedEle": 166.95893635240984,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587514,
        "lng": 121.382913,
        "ele": 167.25,
        "distanceKm": 50.62315136894871,
        "gradePct": -0.7660131535101846,
        "smoothedEle": 166.65226909110217,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587100760250856,
        "lng": 121.38269793804844,
        "ele": 166.26181736850918,
        "distanceKm": 50.67406039026346,
        "gradePct": -0.7111583851004535,
        "smoothedEle": 166.38168800407217,
        "gradeBand": "descent"
      },
      {
        "lat": 23.586684,
        "lng": 121.382491,
        "ele": 165,
        "distanceKm": 50.72497461887417,
        "gradePct": -0.6448993460109462,
        "smoothedEle": 166.14819808009472,
        "gradeBand": "descent"
      },
      {
        "lat": 23.586303679520928,
        "lng": 121.38245504651306,
        "ele": 164.8595566916272,
        "distanceKm": 50.76742280122282,
        "gradePct": -0.5835597262638486,
        "smoothedEle": 165.98400150942024,
        "gradeBand": "descent"
      },
      {
        "lat": 23.585924156058102,
        "lng": 121.38241215061419,
        "ele": 164.75,
        "distanceKm": 50.809849738465225,
        "gradePct": -0.5203172840973548,
        "smoothedEle": 165.84457557074026,
        "gradeBand": "descent"
      },
      {
        "lat": 23.585544,
        "lng": 121.382375,
        "ele": 164.75,
        "distanceKm": 50.8522904165126,
        "gradePct": -0.45756410596388697,
        "smoothedEle": 165.72979186170787,
        "gradeBand": "descent"
      },
      {
        "lat": 23.585157,
        "lng": 121.382402,
        "ele": 165,
        "distanceKm": 50.89541078663852,
        "gradePct": -0.3969929425404397,
        "smoothedEle": 165.63178493457826,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58474,
        "lng": 121.3824615,
        "ele": 165.25000000000003,
        "distanceKm": 50.94217390417077,
        "gradePct": -0.33930273302810426,
        "smoothedEle": 165.5332562522993,
        "gradeBand": "descent"
      },
      {
        "lat": 23.584323,
        "lng": 121.382521,
        "ele": 165.5,
        "distanceKm": 50.98893702420092,
        "gradePct": -0.2929930736755873,
        "smoothedEle": 165.43448533702883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.583863125,
        "lng": 121.382606625,
        "ele": 165.5,
        "distanceKm": 51.04081200667996,
        "gradePct": -0.2502741153486099,
        "smoothedEle": 165.33611410581724,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58340325,
        "lng": 121.38269225,
        "ele": 165.5,
        "distanceKm": 51.09268699430217,
        "gradePct": -0.1913394843360473,
        "smoothedEle": 165.32695835408785,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582943375,
        "lng": 121.382777875,
        "ele": 165.5,
        "distanceKm": 51.144561987067,
        "gradePct": -0.12677625208363116,
        "smoothedEle": 165.370365170117,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5824835,
        "lng": 121.3828635,
        "ele": 165.5,
        "distanceKm": 51.19643698497461,
        "gradePct": -0.07483425243971051,
        "smoothedEle": 165.4051200038381,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582023625,
        "lng": 121.382949125,
        "ele": 165.5,
        "distanceKm": 51.24831198802454,
        "gradePct": -0.032253809478438526,
        "smoothedEle": 165.42353024494255,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58156375,
        "lng": 121.38303475,
        "ele": 165.5,
        "distanceKm": 51.300186996217484,
        "gradePct": -0.011728363260440836,
        "smoothedEle": 165.3779667730856,
        "gradeBand": "descent"
      },
      {
        "lat": 23.581103875,
        "lng": 121.383120375,
        "ele": 165.5,
        "distanceKm": 51.35206200955322,
        "gradePct": -0.022673515816005105,
        "smoothedEle": 165.26610797267594,
        "gradeBand": "descent"
      },
      {
        "lat": 23.580644,
        "lng": 121.383206,
        "ele": 165.5,
        "distanceKm": 51.40393702803119,
        "gradePct": -0.08089968833465454,
        "smoothedEle": 165.09367284498762,
        "gradeBand": "descent"
      },
      {
        "lat": 23.580202,
        "lng": 121.383278,
        "ele": 165.75,
        "distanceKm": 51.45362996023491,
        "gradePct": -0.1643237038561851,
        "smoothedEle": 164.88346935324435,
        "gradeBand": "descent"
      },
      {
        "lat": 23.579712,
        "lng": 121.383336,
        "ele": 165.5,
        "distanceKm": 51.50843522613355,
        "gradePct": -0.268606447746855,
        "smoothedEle": 164.6035587907099,
        "gradeBand": "descent"
      },
      {
        "lat": 23.579353,
        "lng": 121.383361,
        "ele": 165.25,
        "distanceKm": 51.548435481226505,
        "gradePct": -0.35398533202308,
        "smoothedEle": 164.36146578086093,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578879,
        "lng": 121.38337,
        "ele": 165,
        "distanceKm": 51.60114992924937,
        "gradePct": -0.4570498199039572,
        "smoothedEle": 164.00474092771339,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578415500000002,
        "lng": 121.38333392857143,
        "ele": 164.32142857142858,
        "distanceKm": 51.6528197844316,
        "gradePct": -0.5519849620046818,
        "smoothedEle": 163.6076342054789,
        "gradeBand": "descent"
      },
      {
        "lat": 23.577952,
        "lng": 121.38329785714285,
        "ele": 163.64285714285714,
        "distanceKm": 51.70448964053773,
        "gradePct": -0.6425189009152029,
        "smoothedEle": 163.1637785647777,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5774885,
        "lng": 121.38326178571428,
        "ele": 162.96428571428572,
        "distanceKm": 51.756159497566756,
        "gradePct": -0.7324586919438022,
        "smoothedEle": 162.6731740039472,
        "gradeBand": "descent"
      },
      {
        "lat": 23.577025,
        "lng": 121.38322571428571,
        "ele": 162.28571428571428,
        "distanceKm": 51.807829355519544,
        "gradePct": -0.8240604309860168,
        "smoothedEle": 162.13447190084634,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5765615,
        "lng": 121.38318964285715,
        "ele": 161.60714285714286,
        "distanceKm": 51.8594992143953,
        "gradePct": -0.9174314839631177,
        "smoothedEle": 161.53430174884832,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576097999999998,
        "lng": 121.38315357142856,
        "ele": 160.92857142857142,
        "distanceKm": 51.9111690741949,
        "gradePct": -1.0072369476277365,
        "smoothedEle": 160.906028324425,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5756345,
        "lng": 121.3831175,
        "ele": 160.25,
        "distanceKm": 51.962838934917336,
        "gradePct": -1.0905224538353393,
        "smoothedEle": 160.2500000964868,
        "gradeBand": "descent"
      },
      {
        "lat": 23.575171,
        "lng": 121.38308142857143,
        "ele": 159.57142857142858,
        "distanceKm": 52.01450879656309,
        "gradePct": -1.161744383252996,
        "smoothedEle": 159.58341367043204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5747075,
        "lng": 121.38304535714285,
        "ele": 158.89285714285714,
        "distanceKm": 52.066178659132646,
        "gradePct": -1.2102013394887783,
        "smoothedEle": 158.93811172643584,
        "gradeBand": "descent"
      },
      {
        "lat": 23.574244,
        "lng": 121.38300928571428,
        "ele": 158.21428571428572,
        "distanceKm": 52.117848522624996,
        "gradePct": -1.2340888945721173,
        "smoothedEle": 158.31582779370734,
        "gradeBand": "descent"
      },
      {
        "lat": 23.573780499999998,
        "lng": 121.38297321428571,
        "ele": 157.53571428571428,
        "distanceKm": 52.169518387041016,
        "gradePct": -1.2319709850921587,
        "smoothedEle": 157.71656187295648,
        "gradeBand": "descent"
      },
      {
        "lat": 23.573317,
        "lng": 121.38293714285714,
        "ele": 156.85714285714286,
        "distanceKm": 52.2211882523799,
        "gradePct": -1.2128351688831382,
        "smoothedEle": 157.14031396491234,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572853499999997,
        "lng": 121.38290107142856,
        "ele": 156.17857142857142,
        "distanceKm": 52.27285811864254,
        "gradePct": -1.1778865964731076,
        "smoothedEle": 156.5870840702856,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57239,
        "lng": 121.382865,
        "ele": 155.5,
        "distanceKm": 52.32452798582791,
        "gradePct": -1.1338041339107117,
        "smoothedEle": 156.0568721898069,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571927855169594,
        "lng": 121.38284101189872,
        "ele": 155.05232855733297,
        "distanceKm": 52.375974339625174,
        "gradePct": -1.0894657151746505,
        "smoothedEle": 155.55174069500168,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571466008371765,
        "lng": 121.38280979676308,
        "ele": 154.70930508895202,
        "distanceKm": 52.42742787648592,
        "gradePct": -1.0451208346743788,
        "smoothedEle": 155.06936415991453,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571004161573935,
        "lng": 121.38277858162746,
        "ele": 154.36628162057113,
        "distanceKm": 52.47888141403836,
        "gradePct": -1.0007762307352361,
        "smoothedEle": 154.60981207020993,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57054231477611,
        "lng": 121.38274736649184,
        "ele": 154.0232581521902,
        "distanceKm": 52.530334952282175,
        "gradePct": -0.9564319033583686,
        "smoothedEle": 154.17308442629982,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57008046797828,
        "lng": 121.38271615135622,
        "ele": 153.68023468380926,
        "distanceKm": 52.58178849121814,
        "gradePct": -0.9120878525438714,
        "smoothedEle": 153.75918122858735,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569618621180453,
        "lng": 121.3826849362206,
        "ele": 153.33721121542834,
        "distanceKm": 52.63324203084546,
        "gradePct": -0.8677366449302978,
        "smoothedEle": 153.36810247748815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569156774382623,
        "lng": 121.38265372108498,
        "ele": 152.9941877470474,
        "distanceKm": 52.68469557116491,
        "gradePct": -0.8233770130433776,
        "smoothedEle": 152.999848173406,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568694927584797,
        "lng": 121.38262250594936,
        "ele": 152.6511642786665,
        "distanceKm": 52.73614911217569,
        "gradePct": -0.7801023354333531,
        "smoothedEle": 152.6511643152075,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568233080786968,
        "lng": 121.38259129081374,
        "ele": 152.30814081028558,
        "distanceKm": 52.78760265387858,
        "gradePct": -0.7403405450195705,
        "smoothedEle": 152.31476624444647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56777123398914,
        "lng": 121.38256007567811,
        "ele": 151.96511734190463,
        "distanceKm": 52.83905619627278,
        "gradePct": -0.7052520305880013,
        "smoothedEle": 151.9871727951815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56730938719131,
        "lng": 121.38252886054248,
        "ele": 151.6220938735237,
        "distanceKm": 52.89050973935916,
        "gradePct": -0.6752026476904279,
        "smoothedEle": 151.66728640115943,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566847540393486,
        "lng": 121.38249764540686,
        "ele": 151.27907040514276,
        "distanceKm": 52.941963283136744,
        "gradePct": -0.6599214706710432,
        "smoothedEle": 151.32591983976474,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566385693595656,
        "lng": 121.38246643027124,
        "ele": 150.93604693676187,
        "distanceKm": 52.993416827606396,
        "gradePct": -0.6674016887148532,
        "smoothedEle": 150.93854199809348,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56592384679783,
        "lng": 121.38243521513562,
        "ele": 150.59302346838095,
        "distanceKm": 53.04487037276732,
        "gradePct": -0.6977132138161598,
        "smoothedEle": 150.50100595083865,
        "gradeBand": "descent"
      },
      {
        "lat": 23.565462,
        "lng": 121.382404,
        "ele": 150.25,
        "distanceKm": 53.09632391862029,
        "gradePct": -0.7486427208504433,
        "smoothedEle": 150.01331169700987,
        "gradeBand": "descent"
      },
      {
        "lat": 23.564914,
        "lng": 121.382371,
        "ele": 150,
        "distanceKm": 53.15735157766501,
        "gradePct": -0.8207796012053338,
        "smoothedEle": 149.41109170619956,
        "gradeBand": "descent"
      },
      {
        "lat": 23.564460985854495,
        "lng": 121.3823352118825,
        "ele": 149.77349292724645,
        "distanceKm": 53.20785641495243,
        "gradePct": -0.9018966430473834,
        "smoothedEle": 148.84651061856275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.564007971708985,
        "lng": 121.38229942376502,
        "ele": 149.5469858544929,
        "distanceKm": 53.25836125314861,
        "gradePct": -0.9991424064206361,
        "smoothedEle": 148.2050373698207,
        "gradeBand": "descent"
      },
      {
        "lat": 23.563554975300104,
        "lng": 121.38226336997445,
        "ele": 148.66408684540605,
        "distanceKm": 53.30886608816121,
        "gradePct": -1.0717736666717796,
        "smoothedEle": 147.59184796294477,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5631019835334,
        "lng": 121.38222724664963,
        "ele": 147.60939123027066,
        "distanceKm": 53.35937092543876,
        "gradePct": -1.1229158360897327,
        "smoothedEle": 146.994817259499,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5626489917667,
        "lng": 121.38219112332482,
        "ele": 146.5546956151354,
        "distanceKm": 53.4098757636414,
        "gradePct": -1.1741958631618576,
        "smoothedEle": 146.35699471151233,
        "gradeBand": "descent"
      },
      {
        "lat": 23.562196,
        "lng": 121.382155,
        "ele": 145.5,
        "distanceKm": 53.46038060276952,
        "gradePct": -1.2331923570947674,
        "smoothedEle": 145.67765391226308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.561706,
        "lng": 121.382092,
        "ele": 145,
        "distanceKm": 53.515243266445715,
        "gradePct": -1.2862651359447197,
        "smoothedEle": 144.893893157345,
        "gradeBand": "descent"
      },
      {
        "lat": 23.561305,
        "lng": 121.38196450000001,
        "ele": 143.6250000000001,
        "distanceKm": 53.561687644877104,
        "gradePct": -1.3222064154318438,
        "smoothedEle": 144.19803172942002,
        "gradeBand": "descent"
      },
      {
        "lat": 23.560904,
        "lng": 121.381837,
        "ele": 142.25,
        "distanceKm": 53.608132034406836,
        "gradePct": -1.3772683702014241,
        "smoothedEle": 143.468955147295,
        "gradeBand": "descent"
      },
      {
        "lat": 23.560532,
        "lng": 121.3816705,
        "ele": 142.375,
        "distanceKm": 53.65284253535065,
        "gradePct": -1.4387192660590475,
        "smoothedEle": 142.75583324381032,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56016,
        "lng": 121.381504,
        "ele": 142.5,
        "distanceKm": 53.6975530545309,
        "gradePct": -1.4836861931789398,
        "smoothedEle": 142.061558880264,
        "gradeBand": "descent"
      },
      {
        "lat": 23.559717499999998,
        "lng": 121.38130000000001,
        "ele": 141.5,
        "distanceKm": 53.75096992588564,
        "gradePct": -1.51316755102836,
        "smoothedEle": 141.26473431272564,
        "gradeBand": "descent"
      },
      {
        "lat": 23.559275,
        "lng": 121.381096,
        "ele": 140.5,
        "distanceKm": 53.804386824497925,
        "gradePct": -1.5134881225631651,
        "smoothedEle": 140.50852248300848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5588545,
        "lng": 121.3808975,
        "ele": 139.625,
        "distanceKm": 53.85533404830777,
        "gradePct": -1.4858645814800913,
        "smoothedEle": 139.83563191222174,
        "gradeBand": "descent"
      },
      {
        "lat": 23.558434,
        "lng": 121.380699,
        "ele": 138.75,
        "distanceKm": 53.90628129783001,
        "gradePct": -1.4398339450681064,
        "smoothedEle": 139.17850587821343,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55793,
        "lng": 121.38049,
        "ele": 138,
        "distanceKm": 53.96623588826024,
        "gradePct": -1.3519975618837003,
        "smoothedEle": 138.49186575183742,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55752325,
        "lng": 121.38030674999999,
        "ele": 137.49999999999997,
        "distanceKm": 54.01516955976909,
        "gradePct": -1.2666688205450523,
        "smoothedEle": 137.9987653288583,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5571165,
        "lng": 121.3801235,
        "ele": 136.99999999999997,
        "distanceKm": 54.0641032533455,
        "gradePct": -1.2006455073034412,
        "smoothedEle": 137.4768720286182,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55670975,
        "lng": 121.37994025,
        "ele": 136.50000000000003,
        "distanceKm": 54.11303696898972,
        "gradePct": -1.148900087164351,
        "smoothedEle": 136.94757457013807,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556303,
        "lng": 121.379757,
        "ele": 136,
        "distanceKm": 54.16197070670199,
        "gradePct": -1.0954908686392182,
        "smoothedEle": 136.46355859084719,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5559725,
        "lng": 121.379625,
        "ele": 135.75000000000003,
        "distanceKm": 54.201106213313864,
        "gradePct": -1.0463555956494592,
        "smoothedEle": 136.10618818558603,
        "gradeBand": "descent"
      },
      {
        "lat": 23.555642,
        "lng": 121.379493,
        "ele": 135.5,
        "distanceKm": 54.240241731559024,
        "gradePct": -1.003898918781412,
        "smoothedEle": 135.77787148856805,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5552384,
        "lng": 121.379325,
        "ele": 135.2,
        "distanceKm": 54.2882761181344,
        "gradePct": -0.9556360821282885,
        "smoothedEle": 135.40285999389474,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5548348,
        "lng": 121.37915699999999,
        "ele": 134.89999999999998,
        "distanceKm": 54.33631052345761,
        "gradePct": -0.9098845303092361,
        "smoothedEle": 135.04363668172152,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5544312,
        "lng": 121.378989,
        "ele": 134.60000000000002,
        "distanceKm": 54.38434494752716,
        "gradePct": -0.8523363763032027,
        "smoothedEle": 134.7009161644232,
        "gradeBand": "descent"
      },
      {
        "lat": 23.554027599999998,
        "lng": 121.378821,
        "ele": 134.3,
        "distanceKm": 54.432379390344565,
        "gradePct": -0.7946757394740567,
        "smoothedEle": 134.37222656872214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.553624,
        "lng": 121.378653,
        "ele": 134,
        "distanceKm": 54.48041385190832,
        "gradePct": -0.7430900297028865,
        "smoothedEle": 134.0658727880481,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55321877414938,
        "lng": 121.37851692492463,
        "ele": 133.83927735008186,
        "distanceKm": 54.52755947126057,
        "gradePct": -0.693853376790625,
        "smoothedEle": 133.80270570273578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55281138707469,
        "lng": 121.37838846246231,
        "ele": 133.54463867504091,
        "distanceKm": 54.57471349213065,
        "gradePct": -0.6460736117230742,
        "smoothedEle": 133.57052456732504,
        "gradeBand": "descent"
      },
      {
        "lat": 23.552404,
        "lng": 121.37826,
        "ele": 133.25,
        "distanceKm": 54.62186752427132,
        "gradePct": -0.6079601578399131,
        "smoothedEle": 133.32776757985306,
        "gradeBand": "descent"
      },
      {
        "lat": 23.551802,
        "lng": 121.378095,
        "ele": 132.75,
        "distanceKm": 54.69088752792033,
        "gradePct": -0.590623072155292,
        "smoothedEle": 132.88427744553076,
        "gradeBand": "descent"
      },
      {
        "lat": 23.551264,
        "lng": 121.37796449999999,
        "ele": 132.375,
        "distanceKm": 54.75217157585476,
        "gradePct": -0.6117837945668291,
        "smoothedEle": 132.41064475250596,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550726,
        "lng": 121.377834,
        "ele": 132,
        "distanceKm": 54.81345563560636,
        "gradePct": -0.6362561060623253,
        "smoothedEle": 131.97266506639576,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550261,
        "lng": 121.377767,
        "ele": 132.125,
        "distanceKm": 54.86561043712412,
        "gradePct": -0.6621430381879317,
        "smoothedEle": 131.6289178795262,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549796,
        "lng": 121.3777,
        "ele": 132.25,
        "distanceKm": 54.91776524180514,
        "gradePct": -0.6813038504598001,
        "smoothedEle": 131.30497527720044,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549294,
        "lng": 121.377615,
        "ele": 131.75,
        "distanceKm": 54.97425361715249,
        "gradePct": -0.6971183578945167,
        "smoothedEle": 130.8998040717997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54885,
        "lng": 121.377528,
        "ele": 130.75,
        "distanceKm": 55.02441440408202,
        "gradePct": -0.7282531190271843,
        "smoothedEle": 130.440406212188,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54835,
        "lng": 121.377489,
        "ele": 129,
        "distanceKm": 55.080153894256625,
        "gradePct": -0.7906884058396864,
        "smoothedEle": 129.83859789082103,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54788,
        "lng": 121.37744074999999,
        "ele": 129.0625,
        "distanceKm": 55.132646507506855,
        "gradePct": -0.8684948724414205,
        "smoothedEle": 129.2406952926258,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54741,
        "lng": 121.3773925,
        "ele": 129.125,
        "distanceKm": 55.185139122404415,
        "gradePct": -0.958178896932717,
        "smoothedEle": 128.63308511316242,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54694,
        "lng": 121.37734425000001,
        "ele": 129.1875,
        "distanceKm": 55.23763173894941,
        "gradePct": -1.0567093707635664,
        "smoothedEle": 127.99235178341688,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54647,
        "lng": 121.377296,
        "ele": 129.25,
        "distanceKm": 55.290124357141956,
        "gradePct": -1.153513538638418,
        "smoothedEle": 127.29391119113916,
        "gradeBand": "descent"
      },
      {
        "lat": 23.546014,
        "lng": 121.377285,
        "ele": 127.5,
        "distanceKm": 55.34084171063826,
        "gradePct": -1.226233848382461,
        "smoothedEle": 126.58434226648366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54554,
        "lng": 121.37723,
        "ele": 125.75,
        "distanceKm": 55.39384553196694,
        "gradePct": -1.278679258071859,
        "smoothedEle": 125.84660930269722,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54513,
        "lng": 121.377201,
        "ele": 124.25,
        "distanceKm": 55.43953125815151,
        "gradePct": -1.3061028108656985,
        "smoothedEle": 125.24269480081381,
        "gradeBand": "descent"
      },
      {
        "lat": 23.544473,
        "lng": 121.377177,
        "ele": 123.75,
        "distanceKm": 55.51262737935518,
        "gradePct": -1.3208887609721938,
        "smoothedEle": 124.33489273983143,
        "gradeBand": "descent"
      },
      {
        "lat": 23.544094,
        "lng": 121.37719849999999,
        "ele": 123.25,
        "distanceKm": 55.55482726601859,
        "gradePct": -1.3366979246709703,
        "smoothedEle": 123.75346290402986,
        "gradeBand": "descent"
      },
      {
        "lat": 23.543715,
        "lng": 121.37722,
        "ele": 122.75,
        "distanceKm": 55.59702715301055,
        "gradePct": -1.3561062677989768,
        "smoothedEle": 123.12901776182149,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5431805,
        "lng": 121.37721099999999,
        "ele": 121.99999999999996,
        "distanceKm": 55.65646800409065,
        "gradePct": -1.3952372631956762,
        "smoothedEle": 122.1811361247415,
        "gradeBand": "descent"
      },
      {
        "lat": 23.542646,
        "lng": 121.377202,
        "ele": 121.25,
        "distanceKm": 55.71590885522789,
        "gradePct": -1.4351721519622906,
        "smoothedEle": 121.24944024566317,
        "gradeBand": "descent"
      },
      {
        "lat": 23.542195666666668,
        "lng": 121.37721266666667,
        "ele": 120.66666666666664,
        "distanceKm": 55.76599551074592,
        "gradePct": -1.4517528186670645,
        "smoothedEle": 120.55876906873897,
        "gradeBand": "descent"
      },
      {
        "lat": 23.541745333333335,
        "lng": 121.37722333333333,
        "ele": 120.08333333333336,
        "distanceKm": 55.816082166344785,
        "gradePct": -1.4449251203707305,
        "smoothedEle": 119.95251734016661,
        "gradeBand": "descent"
      },
      {
        "lat": 23.541295,
        "lng": 121.377234,
        "ele": 119.5,
        "distanceKm": 55.86616882202449,
        "gradePct": -1.405080043431003,
        "smoothedEle": 119.37039816429376,
        "gradeBand": "descent"
      },
      {
        "lat": 23.540899333333336,
        "lng": 121.37725400000001,
        "ele": 118.75,
        "distanceKm": 55.91021222350368,
        "gradePct": -1.3592349800473362,
        "smoothedEle": 118.84105529714977,
        "gradeBand": "descent"
      },
      {
        "lat": 23.540503666666666,
        "lng": 121.377274,
        "ele": 118,
        "distanceKm": 55.95425562526714,
        "gradePct": -1.3033729532026332,
        "smoothedEle": 118.30629726572181,
        "gradeBand": "descent"
      },
      {
        "lat": 23.540108,
        "lng": 121.377294,
        "ele": 117.25,
        "distanceKm": 55.99829902731421,
        "gradePct": -1.2544889828210515,
        "smoothedEle": 117.76199565866602,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53967575,
        "lng": 121.37730400000001,
        "ele": 116.87499999999999,
        "distanceKm": 56.04637391020788,
        "gradePct": -1.21111748853126,
        "smoothedEle": 117.19598914979609,
        "gradeBand": "descent"
      },
      {
        "lat": 23.539243499999998,
        "lng": 121.37731400000001,
        "ele": 116.49999999999997,
        "distanceKm": 56.094448793172994,
        "gradePct": -1.187999879330592,
        "smoothedEle": 116.6503692816711,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53881125,
        "lng": 121.377324,
        "ele": 116.12500000000001,
        "distanceKm": 56.14252367620872,
        "gradePct": -1.1730068065907695,
        "smoothedEle": 116.12618732421652,
        "gradeBand": "descent"
      },
      {
        "lat": 23.538379,
        "lng": 121.377334,
        "ele": 115.75,
        "distanceKm": 56.19059855931552,
        "gradePct": -1.1463177058114946,
        "smoothedEle": 115.63783222979932,
        "gradeBand": "descent"
      },
      {
        "lat": 23.537910666666665,
        "lng": 121.37734033333334,
        "ele": 114.99999999999997,
        "distanceKm": 56.24267892403293,
        "gradePct": -1.106984827211672,
        "smoothedEle": 115.12590263447443,
        "gradeBand": "descent"
      },
      {
        "lat": 23.537442333333335,
        "lng": 121.37734666666667,
        "ele": 114.25000000000003,
        "distanceKm": 56.294759288778444,
        "gradePct": -1.0635538008275591,
        "smoothedEle": 114.61507940946456,
        "gradeBand": "descent"
      },
      {
        "lat": 23.536974,
        "lng": 121.377353,
        "ele": 113.5,
        "distanceKm": 56.346839653552856,
        "gradePct": -1.0255488065628813,
        "smoothedEle": 114.11405683429678,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5365575,
        "lng": 121.37734449999999,
        "ele": 113.25,
        "distanceKm": 56.39316051022437,
        "gradePct": -0.9958774116874782,
        "smoothedEle": 113.67735825271843,
        "gradeBand": "descent"
      },
      {
        "lat": 23.536141,
        "lng": 121.377336,
        "ele": 113,
        "distanceKm": 56.439481366947184,
        "gradePct": -0.9778409067996039,
        "smoothedEle": 113.22583626276294,
        "gradeBand": "descent"
      },
      {
        "lat": 23.535709,
        "lng": 121.377345,
        "ele": 112.75,
        "distanceKm": 56.4875264030545,
        "gradePct": -0.9767778721373188,
        "smoothedEle": 112.7387062433171,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53535,
        "lng": 121.37738,
        "ele": 112.75,
        "distanceKm": 56.52760458206175,
        "gradePct": -0.9841730790209339,
        "smoothedEle": 112.32155827727217,
        "gradeBand": "descent"
      },
      {
        "lat": 23.534991,
        "lng": 121.377415,
        "ele": 112.75,
        "distanceKm": 56.56768276193589,
        "gradePct": -1.0067650764150549,
        "smoothedEle": 111.86036063751504,
        "gradeBand": "descent"
      },
      {
        "lat": 23.534577000000002,
        "lng": 121.3774396,
        "ele": 112.10000000000004,
        "distanceKm": 56.61378578568641,
        "gradePct": -1.032384046569552,
        "smoothedEle": 111.33488891127776,
        "gradeBand": "descent"
      },
      {
        "lat": 23.534163000000003,
        "lng": 121.3774642,
        "ele": 111.44999999999997,
        "distanceKm": 56.659888809866246,
        "gradePct": -1.057599595937504,
        "smoothedEle": 110.81823467294731,
        "gradeBand": "descent"
      },
      {
        "lat": 23.533749,
        "lng": 121.3774888,
        "ele": 110.80000000000003,
        "distanceKm": 56.705991834475704,
        "gradePct": -1.0806281238330522,
        "smoothedEle": 110.31039793337152,
        "gradeBand": "descent"
      },
      {
        "lat": 23.533335,
        "lng": 121.3775134,
        "ele": 110.14999999999996,
        "distanceKm": 56.75209485951415,
        "gradePct": -1.096139696262304,
        "smoothedEle": 109.80952860572306,
        "gradeBand": "descent"
      },
      {
        "lat": 23.532921,
        "lng": 121.377538,
        "ele": 109.5,
        "distanceKm": 56.798197884981896,
        "gradePct": -1.1116624934168642,
        "smoothedEle": 109.29264617716153,
        "gradeBand": "descent"
      },
      {
        "lat": 23.532408,
        "lng": 121.377575,
        "ele": 108.75,
        "distanceKm": 56.855365540982,
        "gradePct": -1.111414057953213,
        "smoothedEle": 108.66785826446824,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53175,
        "lng": 121.377708,
        "ele": 107.25,
        "distanceKm": 56.92977766648601,
        "gradePct": -1.0993302650871006,
        "smoothedEle": 107.85768486176745,
        "gradeBand": "descent"
      },
      {
        "lat": 23.531325199999998,
        "lng": 121.3778536,
        "ele": 106.69999999999999,
        "distanceKm": 56.97929072013158,
        "gradePct": -1.1032083080349613,
        "smoothedEle": 107.29489268940533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5309004,
        "lng": 121.37799919999999,
        "ele": 106.14999999999996,
        "distanceKm": 57.028803788144096,
        "gradePct": -1.102605441964576,
        "smoothedEle": 106.75474954251662,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5304756,
        "lng": 121.3781448,
        "ele": 105.60000000000004,
        "distanceKm": 57.078316870524546,
        "gradePct": -1.094055246950604,
        "smoothedEle": 106.23337572204692,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5300508,
        "lng": 121.3782904,
        "ele": 105.05000000000001,
        "distanceKm": 57.1278299672711,
        "gradePct": -1.0796287253994172,
        "smoothedEle": 105.72990962581072,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529626,
        "lng": 121.378436,
        "ele": 104.5,
        "distanceKm": 57.177343078384745,
        "gradePct": -1.061407732299458,
        "smoothedEle": 105.24435126617374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529168,
        "lng": 121.378599,
        "ele": 105,
        "distanceKm": 57.230913093636815,
        "gradePct": -1.0387112634877511,
        "smoothedEle": 104.72864519162782,
        "gradeBand": "descent"
      },
      {
        "lat": 23.528583,
        "lng": 121.378647,
        "ele": 104.25,
        "distanceKm": 57.29614602768325,
        "gradePct": -0.9958498638964622,
        "smoothedEle": 104.1234668155911,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52826,
        "lng": 121.378637,
        "ele": 104,
        "distanceKm": 57.33207650543953,
        "gradePct": -0.9749013524807754,
        "smoothedEle": 103.79558370169092,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52777386536285,
        "lng": 121.37857658472292,
        "ele": 103.66131617793073,
        "distanceKm": 57.38648206985373,
        "gradePct": -0.9485550094009146,
        "smoothedEle": 103.30468415538513,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5272889102419,
        "lng": 121.37850238981528,
        "ele": 103.19087745195384,
        "distanceKm": 57.44093464659348,
        "gradePct": -0.9318726092351515,
        "smoothedEle": 102.80577863356706,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52680395512095,
        "lng": 121.37842819490764,
        "ele": 102.72043872597695,
        "distanceKm": 57.495387227205484,
        "gradePct": -0.9237917593778436,
        "smoothedEle": 102.29926916505202,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526319,
        "lng": 121.378354,
        "ele": 102.25,
        "distanceKm": 57.549839811689665,
        "gradePct": -0.9141141725006123,
        "smoothedEle": 101.81071589940302,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52587506684919,
        "lng": 121.37825889485228,
        "ele": 101.59523134098488,
        "distanceKm": 57.60014627207771,
        "gradePct": -0.9116833230663881,
        "smoothedEle": 101.35191266747971,
        "gradeBand": "descent"
      },
      {
        "lat": 23.525431133698376,
        "lng": 121.37816378970456,
        "ele": 100.94046268196975,
        "distanceKm": 57.65045273876971,
        "gradePct": -0.9193752783806977,
        "smoothedEle": 100.87164974192547,
        "gradeBand": "descent"
      },
      {
        "lat": 23.524987200547564,
        "lng": 121.37806868455684,
        "ele": 100.28569402295463,
        "distanceKm": 57.70075921176557,
        "gradePct": -0.918026230932416,
        "smoothedEle": 100.41979540065745,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52454326739675,
        "lng": 121.37797357940912,
        "ele": 99.6309253639395,
        "distanceKm": 57.751065691065214,
        "gradePct": -0.9123303228510851,
        "smoothedEle": 99.97455025894038,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52409933424594,
        "lng": 121.3778784742614,
        "ele": 98.97615670492438,
        "distanceKm": 57.801372176668536,
        "gradePct": -0.9023478592591649,
        "smoothedEle": 99.53852810656508,
        "gradeBand": "descent"
      },
      {
        "lat": 23.523655401095127,
        "lng": 121.37778336911367,
        "ele": 98.32138804590926,
        "distanceKm": 57.85167866857545,
        "gradePct": -0.8921141450459883,
        "smoothedEle": 99.11760278559404,
        "gradeBand": "descent"
      },
      {
        "lat": 23.523211456782697,
        "lng": 121.37768832839092,
        "ele": 98.0659312846065,
        "distanceKm": 57.90198511903761,
        "gradePct": -0.8741943356976746,
        "smoothedEle": 98.71177466042978,
        "gradeBand": "descent"
      },
      {
        "lat": 23.522767511104426,
        "lng": 121.37759329555183,
        "ele": 97.85933815614585,
        "distanceKm": 57.952291570011354,
        "gradePct": -0.8440748884264844,
        "smoothedEle": 98.32290863591948,
        "gradeBand": "descent"
      },
      {
        "lat": 23.522323565426156,
        "lng": 121.37749826271273,
        "ele": 97.65274502768523,
        "distanceKm": 58.00259802727929,
        "gradePct": -0.8131388723099615,
        "smoothedEle": 97.96410406752013,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52187961974789,
        "lng": 121.37740322987365,
        "ele": 97.44615189922457,
        "distanceKm": 58.05290449084039,
        "gradePct": -0.7744172798315037,
        "smoothedEle": 97.63536096275129,
        "gradeBand": "descent"
      },
      {
        "lat": 23.521435674069618,
        "lng": 121.37730819703455,
        "ele": 97.23955877076392,
        "distanceKm": 58.10321096069589,
        "gradePct": -0.7106353471073629,
        "smoothedEle": 97.39123656075697,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520991728391348,
        "lng": 121.37721316419547,
        "ele": 97.03296564230327,
        "distanceKm": 58.15351743684476,
        "gradePct": -0.6454388671758328,
        "smoothedEle": 97.16645262152161,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520547782713077,
        "lng": 121.37711813135637,
        "ele": 96.82637251384261,
        "distanceKm": 58.20382391928746,
        "gradePct": -0.5783732195857147,
        "smoothedEle": 96.96244117960437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520103837034807,
        "lng": 121.37702309851728,
        "ele": 96.61977938538196,
        "distanceKm": 58.254130408023336,
        "gradePct": -0.5089135477583919,
        "smoothedEle": 96.78305270854207,
        "gradeBand": "descent"
      },
      {
        "lat": 23.51965989135654,
        "lng": 121.37692806567819,
        "ele": 96.4131862569213,
        "distanceKm": 58.304436903052476,
        "gradePct": -0.4555822599644249,
        "smoothedEle": 96.58534058662724,
        "gradeBand": "descent"
      },
      {
        "lat": 23.51921594567827,
        "lng": 121.3768330328391,
        "ele": 96.20659312846065,
        "distanceKm": 58.354743404375,
        "gradePct": -0.42362078971165734,
        "smoothedEle": 96.35557481764386,
        "gradeBand": "descent"
      },
      {
        "lat": 23.518772,
        "lng": 121.376738,
        "ele": 96,
        "distanceKm": 58.405049911990986,
        "gradePct": -0.4212465602120349,
        "smoothedEle": 96.11927991189295,
        "gradeBand": "descent"
      },
      {
        "lat": 23.518208,
        "lng": 121.376631,
        "ele": 96.75,
        "distanceKm": 58.46870575915921,
        "gradePct": -0.4123615237991147,
        "smoothedEle": 95.86777377071498,
        "gradeBand": "descent"
      },
      {
        "lat": 23.517739,
        "lng": 121.37657,
        "ele": 96,
        "distanceKm": 58.52122581044657,
        "gradePct": -0.41433687729626373,
        "smoothedEle": 95.65737694932163,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5172594388562,
        "lng": 121.3765227280844,
        "ele": 95.84450027762665,
        "distanceKm": 58.57476802745034,
        "gradePct": -0.4274678702190132,
        "smoothedEle": 95.41954013718681,
        "gradeBand": "descent"
      },
      {
        "lat": 23.516779917817228,
        "lng": 121.37647497861099,
        "ele": 95.46303938984299,
        "distanceKm": 58.62831021016545,
        "gradePct": -0.4295682383652152,
        "smoothedEle": 95.18759889573751,
        "gradeBand": "descent"
      },
      {
        "lat": 23.516300458908614,
        "lng": 121.37642648930549,
        "ele": 94.7315196949215,
        "distanceKm": 58.681852427144584,
        "gradePct": -0.40995195922103195,
        "smoothedEle": 94.9983850365972,
        "gradeBand": "descent"
      },
      {
        "lat": 23.515821,
        "lng": 121.376378,
        "ele": 94,
        "distanceKm": 58.73539464578593,
        "gradePct": -0.3810076689495586,
        "smoothedEle": 94.85636396132661,
        "gradeBand": "descent"
      },
      {
        "lat": 23.51524,
        "lng": 121.376302,
        "ele": 94.5,
        "distanceKm": 58.80046205683192,
        "gradePct": -0.32956036646712833,
        "smoothedEle": 94.75187603831752,
        "gradeBand": "descent"
      },
      {
        "lat": 23.514777499999997,
        "lng": 121.376233,
        "ele": 94.24999999999999,
        "distanceKm": 58.85236876528959,
        "gradePct": -0.28282086211883745,
        "smoothedEle": 94.67057602893982,
        "gradeBand": "descent"
      },
      {
        "lat": 23.514315,
        "lng": 121.376164,
        "ele": 94,
        "distanceKm": 58.90427547709607,
        "gradePct": -0.21419804860013597,
        "smoothedEle": 94.6491216451275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.514057,
        "lng": 121.375939,
        "ele": 93.25,
        "distanceKm": 58.94100865266471,
        "gradePct": -0.15789281686649925,
        "smoothedEle": 94.66904517762167,
        "gradeBand": "descent"
      },
      {
        "lat": 23.513684,
        "lng": 121.375331,
        "ele": 93.75,
        "distanceKm": 59.0155964904541,
        "gradePct": -0.0367450106001763,
        "smoothedEle": 94.79864366238455,
        "gradeBand": "descent"
      },
      {
        "lat": 23.513327,
        "lng": 121.374912,
        "ele": 94.25,
        "distanceKm": 59.073914614214765,
        "gradePct": 0.06194648719932694,
        "smoothedEle": 94.98034647440299,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.512893,
        "lng": 121.374543,
        "ele": 94.75,
        "distanceKm": 59.135106722600106,
        "gradePct": 0.1963627382172622,
        "smoothedEle": 95.28670129283307,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.512474,
        "lng": 121.374301,
        "ele": 95.25,
        "distanceKm": 59.18782817785151,
        "gradePct": 0.3137264939545031,
        "smoothedEle": 95.59709922030856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.512094,
        "lng": 121.374128,
        "ele": 95.75,
        "distanceKm": 59.23361646634423,
        "gradePct": 0.4194500646719814,
        "smoothedEle": 95.92338595883625,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.511666,
        "lng": 121.37394866666666,
        "ele": 96.25000000000003,
        "distanceKm": 59.28459986893854,
        "gradePct": 0.5393191431353589,
        "smoothedEle": 96.36274358230592,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.511238,
        "lng": 121.37376933333333,
        "ele": 96.74999999999997,
        "distanceKm": 59.33558329284638,
        "gradePct": 0.6823577833311152,
        "smoothedEle": 96.90799024690165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.51081,
        "lng": 121.37359,
        "ele": 97.25,
        "distanceKm": 59.3865667380667,
        "gradePct": 0.8122640865712121,
        "smoothedEle": 97.48048087426655,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.51035,
        "lng": 121.373408,
        "ele": 97.25,
        "distanceKm": 59.44097884172536,
        "gradePct": 0.9216356148688232,
        "smoothedEle": 98.08618027885097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.509886666666667,
        "lng": 121.37320933333334,
        "ele": 98.1666666666667,
        "distanceKm": 59.49633853930123,
        "gradePct": 1.0111997241564459,
        "smoothedEle": 98.69134311597087,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.50942333333333,
        "lng": 121.37301066666666,
        "ele": 99.0833333333333,
        "distanceKm": 59.55169826295366,
        "gradePct": 1.065421085355733,
        "smoothedEle": 99.27547198824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.50896,
        "lng": 121.372812,
        "ele": 100,
        "distanceKm": 59.607058012680454,
        "gradePct": 1.0758978203515432,
        "smoothedEle": 99.83061761637236,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.508517531726863,
        "lng": 121.37262779379908,
        "ele": 101.08905693106375,
        "distanceKm": 59.659721663518766,
        "gradePct": 1.0776439296998894,
        "smoothedEle": 100.41197062657977,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.50807510300234,
        "lng": 121.37244347533608,
        "ele": 101.86585409570851,
        "distanceKm": 59.71238531249376,
        "gradePct": 1.0966021957448704,
        "smoothedEle": 101.0576921767423,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.507632735334894,
        "lng": 121.37225898355739,
        "ele": 102.16056939713901,
        "distanceKm": 59.76504895202877,
        "gradePct": 1.1394933925178126,
        "smoothedEle": 101.76778212936944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.507190367667448,
        "lng": 121.37207449177869,
        "ele": 102.4552846985695,
        "distanceKm": 59.81771261413112,
        "gradePct": 1.2152683431517792,
        "smoothedEle": 102.56267698485046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.506748,
        "lng": 121.37189,
        "ele": 102.75,
        "distanceKm": 59.87037629880047,
        "gradePct": 1.3106782828842523,
        "smoothedEle": 103.3948095251027,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.506360654579865,
        "lng": 121.37174152042886,
        "ele": 102.83461835329923,
        "distanceKm": 59.91603070921116,
        "gradePct": 1.398802437338644,
        "smoothedEle": 104.12607434966401,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.505973,
        "lng": 121.371594,
        "ele": 103,
        "distanceKm": 59.96168525034834,
        "gradePct": 1.4759674566756804,
        "smoothedEle": 104.86394900265934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.50552875,
        "lng": 121.37141,
        "ele": 104.4374999999999,
        "distanceKm": 60.014526720840145,
        "gradePct": 1.5427893912338488,
        "smoothedEle": 105.71493402048766,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.505084500000002,
        "lng": 121.37122600000001,
        "ele": 105.875,
        "distanceKm": 60.067368213796364,
        "gradePct": 1.5855221146820173,
        "smoothedEle": 106.55935494987341,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.50464025,
        "lng": 121.371042,
        "ele": 107.3125000000001,
        "distanceKm": 60.12020972921843,
        "gradePct": 1.5969174487938043,
        "smoothedEle": 107.3928859460501,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.504196,
        "lng": 121.370858,
        "ele": 108.75,
        "distanceKm": 60.17305126710513,
        "gradePct": 1.6009818249777379,
        "smoothedEle": 108.24060102981521,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5037808,
        "lng": 121.3706916,
        "ele": 109.65000000000005,
        "distanceKm": 60.22223872511468,
        "gradePct": 1.6052757579345884,
        "smoothedEle": 109.04223638681226,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.503365600000002,
        "lng": 121.3705252,
        "ele": 110.54999999999997,
        "distanceKm": 60.27142620157051,
        "gradePct": 1.6116365468988942,
        "smoothedEle": 109.8557317105193,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5029504,
        "lng": 121.37035879999999,
        "ele": 111.45000000000003,
        "distanceKm": 60.32061369647325,
        "gradePct": 1.6269972930448104,
        "smoothedEle": 110.6931973681916,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5025352,
        "lng": 121.3701924,
        "ele": 112.34999999999995,
        "distanceKm": 60.36980120982089,
        "gradePct": 1.6461264966304785,
        "smoothedEle": 111.53611293031003,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.50212,
        "lng": 121.370026,
        "ele": 113.25,
        "distanceKm": 60.41898874161405,
        "gradePct": 1.6448881087752494,
        "smoothedEle": 112.30829020751834,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.501719400000002,
        "lng": 121.3698538,
        "ele": 113.69999999999999,
        "distanceKm": 60.46686950939781,
        "gradePct": 1.6178516945766872,
        "smoothedEle": 112.99498471425873,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5013188,
        "lng": 121.36968159999999,
        "ele": 114.14999999999998,
        "distanceKm": 60.514750296761285,
        "gradePct": 1.5651627552172211,
        "smoothedEle": 113.61568157117166,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5009182,
        "lng": 121.3695094,
        "ele": 114.60000000000002,
        "distanceKm": 60.56263110370241,
        "gradePct": 1.4918207513586215,
        "smoothedEle": 114.18573476435192,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5005176,
        "lng": 121.36933719999999,
        "ele": 115.05000000000001,
        "distanceKm": 60.610511930222714,
        "gradePct": 1.415223302466647,
        "smoothedEle": 114.76687473290592,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.500117,
        "lng": 121.369165,
        "ele": 115.5,
        "distanceKm": 60.65839277632014,
        "gradePct": 1.3404102392451387,
        "smoothedEle": 115.36183984062158,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.49970566585031,
        "lng": 121.36899361077096,
        "ele": 115.98968351153657,
        "distanceKm": 60.70735644768515,
        "gradePct": 1.2866553246459753,
        "smoothedEle": 115.9856450048785,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.49929435347859,
        "lng": 121.36882215997633,
        "ele": 116.21191922179457,
        "distanceKm": 60.75632011777269,
        "gradePct": 1.2601030135538334,
        "smoothedEle": 116.62399690623266,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.49888291966728,
        "lng": 121.36865105697014,
        "ele": 116.54180751524953,
        "distanceKm": 60.80528377188007,
        "gradePct": 1.261083610131273,
        "smoothedEle": 117.2762142391624,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.498471459833638,
        "lng": 121.36848002848507,
        "ele": 116.89590375762477,
        "distanceKm": 60.854247441744654,
        "gradePct": 1.280147736617501,
        "smoothedEle": 117.92636484291283,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.49806,
        "lng": 121.368309,
        "ele": 117.25,
        "distanceKm": 60.90321113100498,
        "gradePct": 1.3004851776099173,
        "smoothedEle": 118.57971888334832,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.497635799999998,
        "lng": 121.3681378,
        "ele": 118.39999999999993,
        "distanceKm": 60.95350716966519,
        "gradePct": 1.3176676167448118,
        "smoothedEle": 119.25413437580647,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4972116,
        "lng": 121.3679666,
        "ele": 119.55000000000004,
        "distanceKm": 61.00380322783052,
        "gradePct": 1.3305784633512476,
        "smoothedEle": 119.93211179408455,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4967874,
        "lng": 121.36779539999999,
        "ele": 120.69999999999996,
        "distanceKm": 61.05409930550193,
        "gradePct": 1.3395358443984913,
        "smoothedEle": 120.61365114133885,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4963632,
        "lng": 121.3676242,
        "ele": 121.85000000000007,
        "distanceKm": 61.104395402677405,
        "gradePct": 1.3440783375310572,
        "smoothedEle": 121.29661578461382,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.495939,
        "lng": 121.367453,
        "ele": 123,
        "distanceKm": 61.15469151935791,
        "gradePct": 1.3566646801026712,
        "smoothedEle": 122.00228449681883,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.495496224242352,
        "lng": 121.36726907324201,
        "ele": 123.55089883582465,
        "distanceKm": 61.20737762418298,
        "gradePct": 1.3809076343571658,
        "smoothedEle": 122.77830995463579,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.495053448484708,
        "lng": 121.36708514648403,
        "ele": 124.1017976716493,
        "distanceKm": 61.260063751439255,
        "gradePct": 1.4177618893091375,
        "smoothedEle": 123.59580101325837,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.49461067272706,
        "lng": 121.36690121972603,
        "ele": 124.65269650747395,
        "distanceKm": 61.31274990112766,
        "gradePct": 1.4458677155541955,
        "smoothedEle": 124.39094725470346,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.49416789696941,
        "lng": 121.36671729296805,
        "ele": 125.20359534329859,
        "distanceKm": 61.36543607324646,
        "gradePct": 1.4458823241965078,
        "smoothedEle": 125.10523871714297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.493725121211767,
        "lng": 121.36653336621006,
        "ele": 125.75449417912324,
        "distanceKm": 61.41812226779546,
        "gradePct": 1.4165563864089838,
        "smoothedEle": 125.73887673560876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.49328234545412,
        "lng": 121.36634943945208,
        "ele": 126.3053930149479,
        "distanceKm": 61.47080848477508,
        "gradePct": 1.3507287812828759,
        "smoothedEle": 126.2918612400527,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.492839603024127,
        "lng": 121.36616541792672,
        "ele": 126.95217087091362,
        "distanceKm": 61.52349470260005,
        "gradePct": 1.2452684781712051,
        "smoothedEle": 126.76419198773829,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.492397,
        "lng": 121.365981,
        "ele": 128,
        "distanceKm": 61.57618087472831,
        "gradePct": 1.1092651836509295,
        "smoothedEle": 127.166838290585,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.492079,
        "lng": 121.365878,
        "ele": 128.75,
        "distanceKm": 61.61306802401137,
        "gradePct": 1.0099507630382951,
        "smoothedEle": 127.42511248686777,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.49162257826941,
        "lng": 121.36568689303854,
        "ele": 128.77670192305519,
        "distanceKm": 61.66743314642441,
        "gradePct": 0.8774885579303001,
        "smoothedEle": 127.7617224757859,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.491165933702057,
        "lng": 121.3654964197789,
        "ele": 128.8325264422914,
        "distanceKm": 61.72179830187814,
        "gradePct": 0.757962550390604,
        "smoothedEle": 128.05134734076861,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.490709289134703,
        "lng": 121.36530594651927,
        "ele": 128.8883509615276,
        "distanceKm": 61.77616348137255,
        "gradePct": 0.6512360337027033,
        "smoothedEle": 128.29357676418633,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.490252644567352,
        "lng": 121.36511547325964,
        "ele": 128.9441754807638,
        "distanceKm": 61.830528684906895,
        "gradePct": 0.5568804973735938,
        "smoothedEle": 128.48858965260297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.489796,
        "lng": 121.364925,
        "ele": 129,
        "distanceKm": 61.884893912481544,
        "gradePct": 0.4782603553243754,
        "smoothedEle": 128.6626257738779,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.489395428571427,
        "lng": 121.36475957142856,
        "ele": 128.92857142857142,
        "distanceKm": 61.932523374886436,
        "gradePct": 0.4348588295362573,
        "smoothedEle": 128.8501497626831,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.488994857142856,
        "lng": 121.36459414285714,
        "ele": 128.85714285714286,
        "distanceKm": 61.98015285544686,
        "gradePct": 0.40551011125073827,
        "smoothedEle": 129.04601577236792,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.488594285714285,
        "lng": 121.36442871428571,
        "ele": 128.78571428571428,
        "distanceKm": 62.0277823541636,
        "gradePct": 0.37544157619799395,
        "smoothedEle": 129.20433460498353,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.488193714285714,
        "lng": 121.36426328571429,
        "ele": 128.71428571428572,
        "distanceKm": 62.07541187103538,
        "gradePct": 0.35691487177949316,
        "smoothedEle": 129.36097250547894,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.487793142857143,
        "lng": 121.36409785714285,
        "ele": 128.64285714285714,
        "distanceKm": 62.12304140606299,
        "gradePct": 0.35092152868215815,
        "smoothedEle": 129.5144966941392,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.487392571428572,
        "lng": 121.36393242857143,
        "ele": 128.57142857142858,
        "distanceKm": 62.17067095924515,
        "gradePct": 0.3535367189873886,
        "smoothedEle": 129.6777048492137,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.486992,
        "lng": 121.363767,
        "ele": 128.5,
        "distanceKm": 62.21830053058265,
        "gradePct": 0.348811389629914,
        "smoothedEle": 129.84058656436915,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4865275,
        "lng": 121.363585,
        "ele": 129.875,
        "distanceKm": 62.27318441088004,
        "gradePct": 0.3339851653135813,
        "smoothedEle": 130.0193150366019,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.486063,
        "lng": 121.363403,
        "ele": 131.25,
        "distanceKm": 62.32806831328999,
        "gradePct": 0.33016775203336435,
        "smoothedEle": 130.1957782871078,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.485630333333333,
        "lng": 121.36322533333333,
        "ele": 131.25,
        "distanceKm": 62.37947757122997,
        "gradePct": 0.3369981340434297,
        "smoothedEle": 130.3850718712279,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.485197666666668,
        "lng": 121.36304766666667,
        "ele": 131.25,
        "distanceKm": 62.43088685012306,
        "gradePct": 0.3521675426321674,
        "smoothedEle": 130.5978826405898,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484765,
        "lng": 121.36287,
        "ele": 131.25,
        "distanceKm": 62.482296149970715,
        "gradePct": 0.372146328224075,
        "smoothedEle": 130.8338991991184,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484361,
        "lng": 121.36271,
        "ele": 131.5,
        "distanceKm": 62.53009071651569,
        "gradePct": 0.4060144339012804,
        "smoothedEle": 131.09702441667207,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4840385,
        "lng": 121.362551,
        "ele": 131.5,
        "distanceKm": 62.56944696562585,
        "gradePct": 0.4476363666878119,
        "smoothedEle": 131.35005320639007,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.483716,
        "lng": 121.362392,
        "ele": 131.5,
        "distanceKm": 62.6088032310746,
        "gradePct": 0.5059812906495675,
        "smoothedEle": 131.651780881565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.483335,
        "lng": 121.362192,
        "ele": 131.25,
        "distanceKm": 62.65582302452095,
        "gradePct": 0.5518613156486704,
        "smoothedEle": 131.9535576162797,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48295225,
        "lng": 121.3619545,
        "ele": 131.5,
        "distanceKm": 62.70479272503486,
        "gradePct": 0.5695640356727889,
        "smoothedEle": 132.19855707151132,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4825695,
        "lng": 121.361717,
        "ele": 131.75,
        "distanceKm": 62.75376246031996,
        "gradePct": 0.5705186993716189,
        "smoothedEle": 132.41445909122675,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48218675,
        "lng": 121.3614795,
        "ele": 132,
        "distanceKm": 62.80273223037581,
        "gradePct": 0.5637210287982892,
        "smoothedEle": 132.63756980448983,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481804,
        "lng": 121.361242,
        "ele": 132.25,
        "distanceKm": 62.85170203520194,
        "gradePct": 0.5439738460841335,
        "smoothedEle": 132.8678892214966,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4813535,
        "lng": 121.36095399999999,
        "ele": 133.25000000000006,
        "distanceKm": 62.909771592125026,
        "gradePct": 0.49442715679267707,
        "smoothedEle": 133.14127736937297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.480903,
        "lng": 121.360666,
        "ele": 134.25,
        "distanceKm": 62.96784119979472,
        "gradePct": 0.4661944440946444,
        "smoothedEle": 133.41226887183154,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48053242857143,
        "lng": 121.36043471428572,
        "ele": 134.35714285714286,
        "distanceKm": 63.015320845882236,
        "gradePct": 0.46384514278130445,
        "smoothedEle": 133.6365097929348,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.480161857142857,
        "lng": 121.36020342857142,
        "ele": 134.4642857142857,
        "distanceKm": 63.062800524895984,
        "gradePct": 0.4832798684347446,
        "smoothedEle": 133.90547693836822,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479791285714285,
        "lng": 121.35997214285715,
        "ele": 134.57142857142856,
        "distanceKm": 63.1102802368341,
        "gradePct": 0.5025782790898035,
        "smoothedEle": 134.18080513952944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479420714285716,
        "lng": 121.35974085714285,
        "ele": 134.67857142857144,
        "distanceKm": 63.15775998169726,
        "gradePct": 0.5070790224020765,
        "smoothedEle": 134.41764675381475,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479050142857144,
        "lng": 121.35950957142857,
        "ele": 134.7857142857143,
        "distanceKm": 63.20523975948429,
        "gradePct": 0.4871319366880346,
        "smoothedEle": 134.58133757093955,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.47867957142857,
        "lng": 121.35927828571428,
        "ele": 134.89285714285714,
        "distanceKm": 63.25271957019587,
        "gradePct": 0.46569478714412055,
        "smoothedEle": 134.7387856284693,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.478309,
        "lng": 121.359047,
        "ele": 135,
        "distanceKm": 63.300199413830136,
        "gradePct": 0.44039167780017807,
        "smoothedEle": 134.88626803764416,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477743,
        "lng": 121.358744,
        "ele": 135,
        "distanceKm": 63.37031344815647,
        "gradePct": 0.38595530821879137,
        "smoothedEle": 135.10690925301174,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477221,
        "lng": 121.358419,
        "ele": 135.75,
        "distanceKm": 63.43715500082732,
        "gradePct": 0.36424361530521654,
        "smoothedEle": 135.40759446672033,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.476848,
        "lng": 121.358211,
        "ele": 136,
        "distanceKm": 63.48374118345607,
        "gradePct": 0.43956588870972685,
        "smoothedEle": 135.82591695680077,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.476478999999998,
        "lng": 121.35802050000001,
        "ele": 135.125,
        "distanceKm": 63.52913981795652,
        "gradePct": 0.5810254329570396,
        "smoothedEle": 136.4036689831926,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.47611,
        "lng": 121.35783,
        "ele": 134.25,
        "distanceKm": 63.574538475716,
        "gradePct": 0.7820043923214236,
        "smoothedEle": 137.15257292820561,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4757155,
        "lng": 121.3576065,
        "ele": 135.0625,
        "distanceKm": 63.623974088124015,
        "gradePct": 1.1250298891567838,
        "smoothedEle": 138.33617401088793,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.475321,
        "lng": 121.357383,
        "ele": 135.875,
        "distanceKm": 63.67340973196349,
        "gradePct": 1.537984674041274,
        "smoothedEle": 139.7347918378486,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4749265,
        "lng": 121.35715950000001,
        "ele": 136.6875,
        "distanceKm": 63.72284540723366,
        "gradePct": 2.0268736642775598,
        "smoothedEle": 141.42384407624624,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.474532,
        "lng": 121.356936,
        "ele": 137.5,
        "distanceKm": 63.77228111393476,
        "gradePct": 2.543664861301281,
        "smoothedEle": 143.3540053881045,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.473957,
        "lng": 121.356676,
        "ele": 141.25,
        "distanceKm": 63.84149938235052,
        "gradePct": 3.2633512402362443,
        "smoothedEle": 146.39760817078775,
        "gradeBand": "hard"
      },
      {
        "lat": 23.473606,
        "lng": 121.356629,
        "ele": 144,
        "distanceKm": 63.88082213642683,
        "gradePct": 3.616261084333858,
        "smoothedEle": 148.15180132102185,
        "gradeBand": "hard"
      },
      {
        "lat": 23.473288,
        "lng": 121.356638,
        "ele": 146.5,
        "distanceKm": 63.91619408465784,
        "gradePct": 3.8163170955792682,
        "smoothedEle": 149.59885430638488,
        "gradeBand": "hard"
      },
      {
        "lat": 23.472777,
        "lng": 121.356737,
        "ele": 152.5,
        "distanceKm": 63.97390497460437,
        "gradePct": 4.024040241837592,
        "smoothedEle": 151.8238333535916,
        "gradeBand": "hard"
      },
      {
        "lat": 23.472405,
        "lng": 121.356812,
        "ele": 156,
        "distanceKm": 64.01597091079051,
        "gradePct": 4.1188154592314765,
        "smoothedEle": 153.5454118254664,
        "gradeBand": "hard"
      },
      {
        "lat": 23.471852499999997,
        "lng": 121.3567905,
        "ele": 160.625,
        "distanceKm": 64.07744531642761,
        "gradePct": 4.189932919188628,
        "smoothedEle": 156.15087976367315,
        "gradeBand": "hard"
      },
      {
        "lat": 23.4713,
        "lng": 121.356769,
        "ele": 165.25,
        "distanceKm": 64.13891972239186,
        "gradePct": 4.267108750780099,
        "smoothedEle": 159.0855039602134,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470873,
        "lng": 121.356684,
        "ele": 169.5,
        "distanceKm": 64.18718503339404,
        "gradePct": 4.3415576874557225,
        "smoothedEle": 161.43677808483721,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470597,
        "lng": 121.356739,
        "ele": 170.25,
        "distanceKm": 64.21838335947484,
        "gradePct": 4.39274742845454,
        "smoothedEle": 162.86150164252697,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470495,
        "lng": 121.35683,
        "ele": 169.75,
        "distanceKm": 64.23303894955042,
        "gradePct": 4.4127375393862325,
        "smoothedEle": 163.48650191807323,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470368,
        "lng": 121.357151,
        "ele": 166.5,
        "distanceKm": 64.26869518577652,
        "gradePct": 4.409556371884098,
        "smoothedEle": 164.85164486692517,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470381,
        "lng": 121.357269,
        "ele": 165.25,
        "distanceKm": 64.28081715072885,
        "gradePct": 4.389691668786596,
        "smoothedEle": 165.27579410287294,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470447,
        "lng": 121.357423,
        "ele": 163.25,
        "distanceKm": 64.29815434611224,
        "gradePct": 4.347741161704262,
        "smoothedEle": 165.85947968078042,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470576,
        "lng": 121.35756,
        "ele": 163,
        "distanceKm": 64.31817958138106,
        "gradePct": 4.334278836028918,
        "smoothedEle": 166.64185835466822,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470995,
        "lng": 121.357759,
        "ele": 165.75,
        "distanceKm": 64.36899952486338,
        "gradePct": 4.2110382226648,
        "smoothedEle": 168.42603669453572,
        "gradeBand": "hard"
      },
      {
        "lat": 23.471412,
        "lng": 121.357992,
        "ele": 167.75,
        "distanceKm": 64.42110316533977,
        "gradePct": 4.025180731990834,
        "smoothedEle": 170.31053123694446,
        "gradeBand": "hard"
      },
      {
        "lat": 23.471915,
        "lng": 121.358409,
        "ele": 173,
        "distanceKm": 64.49136863548198,
        "gradePct": 3.743895752379802,
        "smoothedEle": 172.85951650399218,
        "gradeBand": "hard"
      },
      {
        "lat": 23.4722195,
        "lng": 121.3586545,
        "ele": 174.2500000000001,
        "distanceKm": 64.53348045416688,
        "gradePct": 3.6246812603655356,
        "smoothedEle": 174.37744924754836,
        "gradeBand": "hard"
      },
      {
        "lat": 23.472524,
        "lng": 121.3589,
        "ele": 175.5,
        "distanceKm": 64.57559223849256,
        "gradePct": 3.562463073823812,
        "smoothedEle": 175.78036292009213,
        "gradeBand": "hard"
      },
      {
        "lat": 23.472834,
        "lng": 121.359113,
        "ele": 172.75,
        "distanceKm": 64.61633747629638,
        "gradePct": 3.5147729977299162,
        "smoothedEle": 177.1142069707829,
        "gradeBand": "hard"
      },
      {
        "lat": 23.473046,
        "lng": 121.359367,
        "ele": 171.75,
        "distanceKm": 64.65136378142324,
        "gradePct": 3.5451335300756033,
        "smoothedEle": 178.442284462125,
        "gradeBand": "hard"
      },
      {
        "lat": 23.473121,
        "lng": 121.359805,
        "ele": 176,
        "distanceKm": 64.69680864492564,
        "gradePct": 3.7107696220629096,
        "smoothedEle": 180.56415119171982,
        "gradeBand": "hard"
      },
      {
        "lat": 23.473011,
        "lng": 121.360131,
        "ele": 180.5,
        "distanceKm": 64.73223689654968,
        "gradePct": 3.833414327618639,
        "smoothedEle": 182.21466701043974,
        "gradeBand": "hard"
      },
      {
        "lat": 23.472829,
        "lng": 121.360444,
        "ele": 183,
        "distanceKm": 64.77003499744897,
        "gradePct": 3.9310245342894152,
        "smoothedEle": 183.87868040514493,
        "gradeBand": "hard"
      },
      {
        "lat": 23.472548,
        "lng": 121.360722,
        "ele": 187.25,
        "distanceKm": 64.81222817705896,
        "gradePct": 4.038204236607414,
        "smoothedEle": 185.72601745241525,
        "gradeBand": "hard"
      },
      {
        "lat": 23.47215,
        "lng": 121.360891,
        "ele": 189.75,
        "distanceKm": 64.85972212683441,
        "gradePct": 4.160869264916216,
        "smoothedEle": 187.7342731783549,
        "gradeBand": "hard"
      },
      {
        "lat": 23.471785,
        "lng": 121.360879,
        "ele": 193.5,
        "distanceKm": 64.90032678155958,
        "gradePct": 4.276747316235688,
        "smoothedEle": 189.4203196942557,
        "gradeBand": "hard"
      },
      {
        "lat": 23.471439,
        "lng": 121.360722,
        "ele": 194.25,
        "distanceKm": 64.94199968274394,
        "gradePct": 4.366199498846435,
        "smoothedEle": 191.18582841786576,
        "gradeBand": "hard"
      },
      {
        "lat": 23.471128,
        "lng": 121.360417,
        "ele": 194.75,
        "distanceKm": 64.98851446433619,
        "gradePct": 4.356134350706008,
        "smoothedEle": 193.24529054700506,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470712,
        "lng": 121.360075,
        "ele": 198.75,
        "distanceKm": 65.04644977143398,
        "gradePct": 4.429047397369804,
        "smoothedEle": 196.1275129713116,
        "gradeBand": "hard"
      },
      {
        "lat": 23.470352,
        "lng": 121.359916,
        "ele": 199,
        "distanceKm": 65.08964026593033,
        "gradePct": 4.469581019053422,
        "smoothedEle": 198.14579770956666,
        "gradeBand": "hard"
      },
      {
        "lat": 23.469991,
        "lng": 121.359858,
        "ele": 198.75,
        "distanceKm": 65.13021525798645,
        "gradePct": 4.454427774920498,
        "smoothedEle": 199.84987466998544,
        "gradeBand": "hard"
      },
      {
        "lat": 23.469431,
        "lng": 121.359823,
        "ele": 201.75,
        "distanceKm": 65.19258674797273,
        "gradePct": 4.421664027695238,
        "smoothedEle": 202.36391865750315,
        "gradeBand": "hard"
      },
      {
        "lat": 23.469095,
        "lng": 121.359795,
        "ele": 203.5,
        "distanceKm": 65.23005728762436,
        "gradePct": 4.368402905011876,
        "smoothedEle": 203.78508717105115,
        "gradeBand": "hard"
      },
      {
        "lat": 23.46858,
        "lng": 121.359625,
        "ele": 206.25,
        "distanceKm": 65.28989030187529,
        "gradePct": 4.198197733382388,
        "smoothedEle": 205.90833026113546,
        "gradeBand": "hard"
      },
      {
        "lat": 23.4682536001329,
        "lng": 121.35940297913837,
        "ele": 207.33010681236485,
        "distanceKm": 65.33266968510813,
        "gradePct": 3.986216232775935,
        "smoothedEle": 207.4006164329461,
        "gradeBand": "hard"
      },
      {
        "lat": 23.467943,
        "lng": 121.359155,
        "ele": 209,
        "distanceKm": 65.37547814213058,
        "gradePct": 3.8250371559590977,
        "smoothedEle": 208.9591154503835,
        "gradeBand": "hard"
      },
      {
        "lat": 23.467517,
        "lng": 121.358793,
        "ele": 210.5,
        "distanceKm": 65.43553767625647,
        "gradePct": 3.6624035281780007,
        "smoothedEle": 211.05161906882708,
        "gradeBand": "hard"
      },
      {
        "lat": 23.467217,
        "lng": 121.358521,
        "ele": 212.25,
        "distanceKm": 65.47892531898977,
        "gradePct": 3.590323719823427,
        "smoothedEle": 212.5842306391493,
        "gradeBand": "hard"
      },
      {
        "lat": 23.466824770896558,
        "lng": 121.35818058687452,
        "ele": 214.93772012402965,
        "distanceKm": 65.5346725853541,
        "gradePct": 3.585367254074949,
        "smoothedEle": 214.70496806317666,
        "gradeBand": "hard"
      },
      {
        "lat": 23.46644088544828,
        "lng": 121.35782879343726,
        "ele": 216.96886006201484,
        "distanceKm": 65.59043684820541,
        "gradePct": 3.6065248328126494,
        "smoothedEle": 216.7469701006107,
        "gradeBand": "hard"
      },
      {
        "lat": 23.466057,
        "lng": 121.357477,
        "ele": 219,
        "distanceKm": 65.64620117821381,
        "gradePct": 3.601853020847771,
        "smoothedEle": 218.69880756346174,
        "gradeBand": "hard"
      },
      {
        "lat": 23.465736,
        "lng": 121.357153,
        "ele": 220.5,
        "distanceKm": 65.694844597152,
        "gradePct": 3.56029749873972,
        "smoothedEle": 220.3147447356661,
        "gradeBand": "hard"
      },
      {
        "lat": 23.465469,
        "lng": 121.356897,
        "ele": 222.25,
        "distanceKm": 65.73438277221297,
        "gradePct": 3.512021263189908,
        "smoothedEle": 221.54744543522725,
        "gradeBand": "hard"
      },
      {
        "lat": 23.4650365,
        "lng": 121.356508,
        "ele": 224.25000000000023,
        "distanceKm": 65.796729821444,
        "gradePct": 3.3691667269118133,
        "smoothedEle": 223.3690496757389,
        "gradeBand": "hard"
      },
      {
        "lat": 23.464604,
        "lng": 121.356119,
        "ele": 226.25,
        "distanceKm": 65.85907695341594,
        "gradePct": 3.1826162932788136,
        "smoothedEle": 225.1464675851355,
        "gradeBand": "hard"
      },
      {
        "lat": 23.464155,
        "lng": 121.355761,
        "ele": 229.25,
        "distanceKm": 65.92093231479664,
        "gradePct": 3.0042380478141126,
        "smoothedEle": 226.8270725571722,
        "gradeBand": "hard"
      },
      {
        "lat": 23.463872,
        "lng": 121.355563,
        "ele": 229.25,
        "distanceKm": 65.95832388720274,
        "gradePct": 2.9148726982454787,
        "smoothedEle": 227.8461427473878,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.463266,
        "lng": 121.355276,
        "ele": 231.5,
        "distanceKm": 66.03179233238228,
        "gradePct": 2.757836152757664,
        "smoothedEle": 229.74019050504,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.462950499999998,
        "lng": 121.3551195,
        "ele": 231.125,
        "distanceKm": 66.07033546311015,
        "gradePct": 2.681138216765226,
        "smoothedEle": 230.64129591213973,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.462635,
        "lng": 121.354963,
        "ele": 230.75,
        "distanceKm": 66.10887860963933,
        "gradePct": 2.5680647324662456,
        "smoothedEle": 231.4195865681884,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.462280333333332,
        "lng": 121.35479666666666,
        "ele": 231.58333333333343,
        "distanceKm": 66.1518104860861,
        "gradePct": 2.4020405620285072,
        "smoothedEle": 232.14543380533848,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461925666666666,
        "lng": 121.35463033333333,
        "ele": 232.41666666666657,
        "distanceKm": 66.19474238054634,
        "gradePct": 2.2058364915405018,
        "smoothedEle": 232.7330037185176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461571,
        "lng": 121.354464,
        "ele": 233.25,
        "distanceKm": 66.23767429302097,
        "gradePct": 1.9703970049955801,
        "smoothedEle": 233.19454957020037,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461195,
        "lng": 121.3542905,
        "ele": 235.1249999999997,
        "distanceKm": 66.28307495920691,
        "gradePct": 1.69120907293135,
        "smoothedEle": 233.55786312732653,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460819,
        "lng": 121.354117,
        "ele": 237,
        "distanceKm": 66.32847564504154,
        "gradePct": 1.3820937912655171,
        "smoothedEle": 233.80096626884009,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460412,
        "lng": 121.353945,
        "ele": 237.5,
        "distanceKm": 66.37701379196294,
        "gradePct": 1.0839503412884814,
        "smoothedEle": 234.02800050693008,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459933,
        "lng": 121.353826,
        "ele": 237.5,
        "distanceKm": 66.43164188587988,
        "gradePct": 0.7830453457843568,
        "smoothedEle": 234.15358025759807,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459490499999998,
        "lng": 121.353774,
        "ele": 236.1249999999998,
        "distanceKm": 66.48113078025692,
        "gradePct": 0.5650603707717471,
        "smoothedEle": 234.24189519929345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459048,
        "lng": 121.353722,
        "ele": 234.75,
        "distanceKm": 66.53061967653896,
        "gradePct": 0.38365405996038154,
        "smoothedEle": 234.2696700559942,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458637,
        "lng": 121.35368,
        "ele": 234.125,
        "distanceKm": 66.5765212223197,
        "gradePct": 0.22990289886767556,
        "smoothedEle": 234.19512630581292,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458226,
        "lng": 121.353638,
        "ele": 233.5,
        "distanceKm": 66.62242276934502,
        "gradePct": 0.08566457599619152,
        "smoothedEle": 234.02554918474593,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.457852,
        "lng": 121.35359666666668,
        "ele": 233.33333333333334,
        "distanceKm": 66.66422290864978,
        "gradePct": -0.07316581885290506,
        "smoothedEle": 233.74867446951922,
        "gradeBand": "descent"
      },
      {
        "lat": 23.457478000000002,
        "lng": 121.35355533333333,
        "ele": 233.16666666666666,
        "distanceKm": 66.70602304915889,
        "gradePct": -0.24879895984759293,
        "smoothedEle": 233.34829047337666,
        "gradeBand": "descent"
      },
      {
        "lat": 23.457104,
        "lng": 121.353514,
        "ele": 233,
        "distanceKm": 66.74782319087284,
        "gradePct": -0.43696972354147984,
        "smoothedEle": 232.8715472828353,
        "gradeBand": "descent"
      },
      {
        "lat": 23.456777,
        "lng": 121.353492,
        "ele": 233.25,
        "distanceKm": 66.78425316828347,
        "gradePct": -0.6030866786844873,
        "smoothedEle": 232.43438755390775,
        "gradeBand": "descent"
      },
      {
        "lat": 23.456317908772647,
        "lng": 121.35343554859249,
        "ele": 232.27310592068164,
        "distanceKm": 66.8356256064386,
        "gradePct": -0.8290584930119548,
        "smoothedEle": 231.7743649860804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.455857931579487,
        "lng": 121.35338741144436,
        "ele": 231.5173294405112,
        "distanceKm": 66.88700796951375,
        "gradePct": -0.9852568951643735,
        "smoothedEle": 231.20061373657583,
        "gradeBand": "descent"
      },
      {
        "lat": 23.455397954386324,
        "lng": 121.35333927429625,
        "ele": 230.76155296034094,
        "distanceKm": 66.93839033422373,
        "gradePct": -1.0831322791940947,
        "smoothedEle": 230.67038679106292,
        "gradeBand": "descent"
      },
      {
        "lat": 23.454937977193165,
        "lng": 121.35329113714812,
        "ele": 230.00577648017045,
        "distanceKm": 66.989772700568,
        "gradePct": -1.1392721866793176,
        "smoothedEle": 230.08612840225393,
        "gradeBand": "descent"
      },
      {
        "lat": 23.454478,
        "lng": 121.353243,
        "ele": 229.25,
        "distanceKm": 67.04115506854704,
        "gradePct": -1.1739935209024583,
        "smoothedEle": 229.4256186611542,
        "gradeBand": "descent"
      },
      {
        "lat": 23.454116,
        "lng": 121.3532075,
        "ele": 228.875,
        "distanceKm": 67.08157025149927,
        "gradePct": -1.2152426888534764,
        "smoothedEle": 228.8208544887577,
        "gradeBand": "descent"
      },
      {
        "lat": 23.453754,
        "lng": 121.353172,
        "ele": 228.5,
        "distanceKm": 67.12198543534042,
        "gradePct": -1.2714498950170163,
        "smoothedEle": 228.13526142671716,
        "gradeBand": "descent"
      },
      {
        "lat": 23.453084,
        "lng": 121.353215,
        "ele": 227.75,
        "distanceKm": 67.19661515524778,
        "gradePct": -1.508568316959218,
        "smoothedEle": 226.5757699318232,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452515,
        "lng": 121.35326,
        "ele": 227.5,
        "distanceKm": 67.26005146051317,
        "gradePct": -1.7393700933929377,
        "smoothedEle": 225.20597226983648,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452121,
        "lng": 121.35331,
        "ele": 226.5,
        "distanceKm": 67.30415822196659,
        "gradePct": -1.8669174636641785,
        "smoothedEle": 224.30045310116034,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451626,
        "lng": 121.353465,
        "ele": 224.75,
        "distanceKm": 67.36142582066489,
        "gradePct": -2.013313970870797,
        "smoothedEle": 223.08234953998024,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451222205194004,
        "lng": 121.35370705463181,
        "ele": 223.04630245456187,
        "distanceKm": 67.41266746011861,
        "gradePct": -2.137318938553327,
        "smoothedEle": 221.8813724102647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.450818645101776,
        "lng": 121.35394961010219,
        "ele": 220.7819132638045,
        "distanceKm": 67.46391091840232,
        "gradePct": -2.2282831797224505,
        "smoothedEle": 220.5743207761868,
        "gradeBand": "descent"
      },
      {
        "lat": 23.450415,
        "lng": 121.354192,
        "ele": 218.5,
        "distanceKm": 67.51515453898612,
        "gradePct": -2.3466866420350936,
        "smoothedEle": 219.13538397170296,
        "gradeBand": "descent"
      },
      {
        "lat": 23.449965,
        "lng": 121.354444,
        "ele": 215.5,
        "distanceKm": 67.57140948676519,
        "gradePct": -2.5206440071690537,
        "smoothedEle": 217.4108580751064,
        "gradeBand": "descent"
      },
      {
        "lat": 23.449509,
        "lng": 121.354571,
        "ele": 216,
        "distanceKm": 67.62374337956156,
        "gradePct": -2.736701856154589,
        "smoothedEle": 215.67376379678004,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44908024844599,
        "lng": 121.35462849495354,
        "ele": 215.7719696210711,
        "distanceKm": 67.67177786507047,
        "gradePct": -2.9467893294753456,
        "smoothedEle": 213.9993552673557,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448650131599532,
        "lng": 121.35467461613048,
        "ele": 213.99823380193263,
        "distanceKm": 67.71983560577627,
        "gradePct": -3.145587495760453,
        "smoothedEle": 212.26177416581655,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448220070707325,
        "lng": 121.35472136187964,
        "ele": 211.77781071716942,
        "distanceKm": 67.76789343639159,
        "gradePct": -3.3428500069888623,
        "smoothedEle": 210.43394041138444,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44779,
        "lng": 121.354768,
        "ele": 209.75,
        "distanceKm": 67.81595126635013,
        "gradePct": -3.5304090258832685,
        "smoothedEle": 208.5197327851349,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44736066666667,
        "lng": 121.35481666666666,
        "ele": 207.58333333333334,
        "distanceKm": 67.86394847229144,
        "gradePct": -3.705995036616019,
        "smoothedEle": 206.52159440546654,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446931333333332,
        "lng": 121.35486533333334,
        "ele": 205.41666666666666,
        "distanceKm": 67.91194567990225,
        "gradePct": -3.852014826236113,
        "smoothedEle": 204.50931481155715,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446502,
        "lng": 121.354914,
        "ele": 203.25,
        "distanceKm": 67.95994288918143,
        "gradePct": -3.92728065537714,
        "smoothedEle": 202.63006241805525,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446175,
        "lng": 121.354933,
        "ele": 202,
        "distanceKm": 67.99635530489532,
        "gradePct": -3.9644104342263136,
        "smoothedEle": 201.21749927411324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445737,
        "lng": 121.354917,
        "ele": 200.25,
        "distanceKm": 68.04508609333507,
        "gradePct": -4.0105759019800855,
        "smoothedEle": 199.26966824710826,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44542,
        "lng": 121.354815,
        "ele": 198.25,
        "distanceKm": 68.08183871278446,
        "gradePct": -4.056542508155237,
        "smoothedEle": 197.70885388170723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444906,
        "lng": 121.354514,
        "ele": 194.5,
        "distanceKm": 68.14671937252584,
        "gradePct": -4.055960432727242,
        "smoothedEle": 195.07096580592898,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444527,
        "lng": 121.35419,
        "ele": 190.5,
        "distanceKm": 68.2002779856906,
        "gradePct": -3.8890867529238156,
        "smoothedEle": 193.33122182185772,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444318,
        "lng": 121.353761,
        "ele": 187.25,
        "distanceKm": 68.2498303081037,
        "gradePct": -3.717505900272222,
        "smoothedEle": 191.87348632468243,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444373,
        "lng": 121.353245,
        "ele": 186.5,
        "distanceKm": 68.30282442460916,
        "gradePct": -3.5474533258583802,
        "smoothedEle": 190.31656042885564,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444592,
        "lng": 121.352791,
        "ele": 186.75,
        "distanceKm": 68.3551511706315,
        "gradePct": -3.425707511872393,
        "smoothedEle": 188.56510087984384,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444778,
        "lng": 121.352582,
        "ele": 186.25,
        "distanceKm": 68.38485555789353,
        "gradePct": -3.370085454928693,
        "smoothedEle": 187.47594001356947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445004,
        "lng": 121.35248,
        "ele": 185.5,
        "distanceKm": 68.41205476267723,
        "gradePct": -3.3802329927628363,
        "smoothedEle": 186.33964461966113,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44538,
        "lng": 121.352476,
        "ele": 182.25,
        "distanceKm": 68.45386610413145,
        "gradePct": -3.408348373846881,
        "smoothedEle": 184.61377346133784,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445689,
        "lng": 121.352628,
        "ele": 182,
        "distanceKm": 68.49156230124977,
        "gradePct": -3.5119600485416105,
        "smoothedEle": 183.07845318112484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445989,
        "lng": 121.352857,
        "ele": 185.25,
        "distanceKm": 68.53228749909192,
        "gradePct": -3.6331306943006667,
        "smoothedEle": 181.490170465281,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446322,
        "lng": 121.352923,
        "ele": 187.25,
        "distanceKm": 68.56992262078522,
        "gradePct": -3.7010759723204076,
        "smoothedEle": 180.17996189966092,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44662,
        "lng": 121.352743,
        "ele": 185.75,
        "distanceKm": 68.60780645860007,
        "gradePct": -3.685047308474345,
        "smoothedEle": 179.09466188907797,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446798,
        "lng": 121.352391,
        "ele": 184,
        "distanceKm": 68.6488088619984,
        "gradePct": -3.578520171806214,
        "smoothedEle": 178.0418275380529,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446961,
        "lng": 121.351896,
        "ele": 179.25,
        "distanceKm": 68.70245986269983,
        "gradePct": -3.423443339637538,
        "smoothedEle": 176.47015869659757,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447096,
        "lng": 121.35156,
        "ele": 174.5,
        "distanceKm": 68.73987939672745,
        "gradePct": -3.355848722536814,
        "smoothedEle": 175.1235647832434,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447362,
        "lng": 121.351244,
        "ele": 169.25,
        "distanceKm": 68.78362897620299,
        "gradePct": -3.382050494110363,
        "smoothedEle": 173.25541638316398,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447867,
        "lng": 121.351134,
        "ele": 167.5,
        "distanceKm": 68.84089273399698,
        "gradePct": -3.5143655659753157,
        "smoothedEle": 170.6474958206259,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44831,
        "lng": 121.351023,
        "ele": 165.25,
        "distanceKm": 68.89143687427925,
        "gradePct": -3.7184920506498784,
        "smoothedEle": 168.4081432414723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448522,
        "lng": 121.350682,
        "ele": 166.25,
        "distanceKm": 68.93345813007934,
        "gradePct": -4.028092592802011,
        "smoothedEle": 166.35171635814484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448404,
        "lng": 121.350253,
        "ele": 169.25,
        "distanceKm": 68.97914608976191,
        "gradePct": -4.407559368541839,
        "smoothedEle": 163.93044139364568,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447979,
        "lng": 121.349893,
        "ele": 165.75,
        "distanceKm": 69.03899591874993,
        "gradePct": -4.859806695250719,
        "smoothedEle": 160.5759378797961,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447513,
        "lng": 121.349692,
        "ele": 159.75,
        "distanceKm": 69.09472231056021,
        "gradePct": -5.069394012642165,
        "smoothedEle": 157.54201890196543,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447047,
        "lng": 121.349669,
        "ele": 153.25,
        "distanceKm": 69.14659231196012,
        "gradePct": -5.127730231996311,
        "smoothedEle": 155.01178594950483,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446596,
        "lng": 121.349808,
        "ele": 148.25,
        "distanceKm": 69.19870747204446,
        "gradePct": -5.145337150129158,
        "smoothedEle": 152.61632489246742,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446166,
        "lng": 121.349952,
        "ele": 149.25,
        "distanceKm": 69.24872711013975,
        "gradePct": -5.040571903551249,
        "smoothedEle": 150.42080716608876,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445628,
        "lng": 121.349899,
        "ele": 148.75,
        "distanceKm": 69.30879389637629,
        "gradePct": -4.80656154621034,
        "smoothedEle": 147.84903652711293,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445198,
        "lng": 121.349732,
        "ele": 144.75,
        "distanceKm": 69.35955223279782,
        "gradePct": -4.704995541188592,
        "smoothedEle": 145.3418012578513,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444862,
        "lng": 121.349679,
        "ele": 141.25,
        "distanceKm": 69.39730297660661,
        "gradePct": -4.658795024213699,
        "smoothedEle": 143.43974822890678,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444488,
        "lng": 121.349754,
        "ele": 139.25,
        "distanceKm": 69.43958790702769,
        "gradePct": -4.611744199921812,
        "smoothedEle": 141.5182301512452,
        "gradeBand": "descent"
      },
      {
        "lat": 23.443988,
        "lng": 121.350037,
        "ele": 137,
        "distanceKm": 69.50223444323193,
        "gradePct": -4.39645316470774,
        "smoothedEle": 139.2721556464672,
        "gradeBand": "descent"
      },
      {
        "lat": 23.443661,
        "lng": 121.350406,
        "ele": 134,
        "distanceKm": 69.55457152771643,
        "gradePct": -4.161055850285646,
        "smoothedEle": 137.68740978827836,
        "gradeBand": "descent"
      },
      {
        "lat": 23.443449,
        "lng": 121.35075,
        "ele": 134.25,
        "distanceKm": 69.59684754932589,
        "gradePct": -3.889415302398332,
        "smoothedEle": 136.69227569365322,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4431,
        "lng": 121.351114,
        "ele": 134.25,
        "distanceKm": 69.65055901762445,
        "gradePct": -3.4999365212247966,
        "smoothedEle": 135.286216384275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.442794,
        "lng": 121.351235,
        "ele": 131.25,
        "distanceKm": 69.68675463399319,
        "gradePct": -3.2484583667972444,
        "smoothedEle": 134.2258462862315,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44221,
        "lng": 121.351212,
        "ele": 130,
        "distanceKm": 69.75173493790514,
        "gradePct": -2.9725330162410817,
        "smoothedEle": 132.16512200631823,
        "gradeBand": "descent"
      },
      {
        "lat": 23.441971,
        "lng": 121.351256,
        "ele": 131.25,
        "distanceKm": 69.77868698401355,
        "gradePct": -2.9023269049799763,
        "smoothedEle": 131.4094250849639,
        "gradeBand": "descent"
      },
      {
        "lat": 23.441785,
        "lng": 121.351387,
        "ele": 132,
        "distanceKm": 69.80331138662599,
        "gradePct": -2.8338344566932188,
        "smoothedEle": 130.73804286376821,
        "gradeBand": "descent"
      },
      {
        "lat": 23.441589,
        "lng": 121.351815,
        "ele": 132.5,
        "distanceKm": 69.85211194370946,
        "gradePct": -2.7751944566188036,
        "smoothedEle": 129.43630163243722,
        "gradeBand": "descent"
      },
      {
        "lat": 23.441423,
        "lng": 121.352482,
        "ele": 129.25,
        "distanceKm": 69.92261691531795,
        "gradePct": -2.7452160313938547,
        "smoothedEle": 127.78203690035868,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44122,
        "lng": 121.352896,
        "ele": 131.5,
        "distanceKm": 69.97050588145758,
        "gradePct": -2.683007667066943,
        "smoothedEle": 126.65283925181895,
        "gradeBand": "descent"
      },
      {
        "lat": 23.440954,
        "lng": 121.353306,
        "ele": 128,
        "distanceKm": 70.0217346329339,
        "gradePct": -2.6193013574318336,
        "smoothedEle": 125.25861940704151,
        "gradeBand": "descent"
      },
      {
        "lat": 23.440673,
        "lng": 121.353832,
        "ele": 123.25,
        "distanceKm": 70.08383030197271,
        "gradePct": -2.563349205965305,
        "smoothedEle": 123.57914534488874,
        "gradeBand": "descent"
      },
      {
        "lat": 23.440452,
        "lng": 121.354126,
        "ele": 120.75,
        "distanceKm": 70.12260521107554,
        "gradePct": -2.50919019442181,
        "smoothedEle": 122.69581490163152,
        "gradeBand": "descent"
      },
      {
        "lat": 23.440141,
        "lng": 121.354322,
        "ele": 120,
        "distanceKm": 70.16255165827508,
        "gradePct": -2.4450415340869345,
        "smoothedEle": 121.85622903254061,
        "gradeBand": "descent"
      },
      {
        "lat": 23.439712,
        "lng": 121.354346,
        "ele": 118.75,
        "distanceKm": 70.21031714283066,
        "gradePct": -2.4168269570438516,
        "smoothedEle": 120.82014673955734,
        "gradeBand": "descent"
      },
      {
        "lat": 23.439273,
        "lng": 121.354227,
        "ele": 119,
        "distanceKm": 70.26061879298423,
        "gradePct": -2.401386175303362,
        "smoothedEle": 119.68181328138017,
        "gradeBand": "descent"
      },
      {
        "lat": 23.43891,
        "lng": 121.354083,
        "ele": 117.25,
        "distanceKm": 70.30357293069399,
        "gradePct": -2.336441558093884,
        "smoothedEle": 118.74357587270778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.43842487496778,
        "lng": 121.35384836288254,
        "ele": 114.04601682843818,
        "distanceKm": 70.36258915873657,
        "gradePct": -2.2765740775091743,
        "smoothedEle": 117.32392290707757,
        "gradeBand": "descent"
      },
      {
        "lat": 23.437936,
        "lng": 121.353623,
        "ele": 111.75,
        "distanceKm": 70.42161183808051,
        "gradePct": -2.206995448438507,
        "smoothedEle": 116.09745856701936,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4375,
        "lng": 121.353446,
        "ele": 113.25,
        "distanceKm": 70.47334666150886,
        "gradePct": -2.1225660552930314,
        "smoothedEle": 115.25437618766523,
        "gradeBand": "descent"
      },
      {
        "lat": 23.436901,
        "lng": 121.353287,
        "ele": 115.5,
        "distanceKm": 70.54189935689126,
        "gradePct": -2.073858382414358,
        "smoothedEle": 113.88386162079765,
        "gradeBand": "descent"
      },
      {
        "lat": 23.436433,
        "lng": 121.353143,
        "ele": 116.25,
        "distanceKm": 70.59597261149638,
        "gradePct": -2.1914481868424427,
        "smoothedEle": 112.33524334662594,
        "gradeBand": "descent"
      },
      {
        "lat": 23.435946,
        "lng": 121.352971,
        "ele": 113,
        "distanceKm": 70.65289680300295,
        "gradePct": -2.3461652689608203,
        "smoothedEle": 110.5185796078622,
        "gradeBand": "descent"
      },
      {
        "lat": 23.435565,
        "lng": 121.35265,
        "ele": 112.75,
        "distanceKm": 70.70644422603031,
        "gradePct": -2.4665209918316386,
        "smoothedEle": 109.01307164774853,
        "gradeBand": "descent"
      },
      {
        "lat": 23.43533985161429,
        "lng": 121.35230967785054,
        "ele": 112.85942991413668,
        "distanceKm": 70.74924941364725,
        "gradePct": -2.529447844205748,
        "smoothedEle": 108.05872685436596,
        "gradeBand": "descent"
      },
      {
        "lat": 23.43512,
        "lng": 121.351965,
        "ele": 113,
        "distanceKm": 70.79207697863005,
        "gradePct": -2.543916608170994,
        "smoothedEle": 107.24816738216765,
        "gradeBand": "descent"
      },
      {
        "lat": 23.43481,
        "lng": 121.351639,
        "ele": 110.75,
        "distanceKm": 70.83997691785058,
        "gradePct": -2.4944212154731438,
        "smoothedEle": 106.4390316303341,
        "gradeBand": "descent"
      },
      {
        "lat": 23.434448,
        "lng": 121.351353,
        "ele": 104.25,
        "distanceKm": 70.88969275294806,
        "gradePct": -2.339911481612322,
        "smoothedEle": 105.49535943562778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.434045513016905,
        "lng": 121.35110886405688,
        "ele": 97.98759390933138,
        "distanceKm": 70.94091149033608,
        "gradePct": -2.2399985782439678,
        "smoothedEle": 104.1810800025155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.43364,
        "lng": 121.35087,
        "ele": 94.75,
        "distanceKm": 70.99216663523914,
        "gradePct": -2.2830192169628774,
        "smoothedEle": 102.5654343710274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.43327223643984,
        "lng": 121.35066132155255,
        "ele": 95.87712124391645,
        "distanceKm": 71.0382703360022,
        "gradePct": -2.365071381175652,
        "smoothedEle": 101.20829205114846,
        "gradeBand": "descent"
      },
      {
        "lat": 23.432904472879684,
        "lng": 121.35045264310511,
        "ele": 97.00424248783256,
        "distanceKm": 71.08437406411619,
        "gradePct": -2.5040584793018184,
        "smoothedEle": 99.88177819956881,
        "gradeBand": "descent"
      },
      {
        "lat": 23.432536709319525,
        "lng": 121.35024396465766,
        "ele": 98.131363731749,
        "distanceKm": 71.13047781958282,
        "gradePct": -2.6780286489041,
        "smoothedEle": 98.56540643041392,
        "gradeBand": "descent"
      },
      {
        "lat": 23.43216933577589,
        "lng": 121.35003447449411,
        "ele": 99.33601544444296,
        "distanceKm": 71.17658147379605,
        "gradePct": -2.832538112262728,
        "smoothedEle": 97.24661448921654,
        "gradeBand": "descent"
      },
      {
        "lat": 23.431801,
        "lng": 121.349827,
        "ele": 100.25,
        "distanceKm": 71.222685204624,
        "gradePct": -2.876273293056773,
        "smoothedEle": 96.01994897463301,
        "gradeBand": "descent"
      },
      {
        "lat": 23.431433,
        "lng": 121.349589,
        "ele": 97.75,
        "distanceKm": 71.27026720820862,
        "gradePct": -2.734580386867873,
        "smoothedEle": 95.05199881156621,
        "gradeBand": "descent"
      },
      {
        "lat": 23.430968,
        "lng": 121.349348,
        "ele": 93.25,
        "distanceKm": 71.327521556376,
        "gradePct": -2.410635161087914,
        "smoothedEle": 94.29279552153336,
        "gradeBand": "descent"
      },
      {
        "lat": 23.430627,
        "lng": 121.349253,
        "ele": 91.5,
        "distanceKm": 71.3666582726865,
        "gradePct": -2.1574017467613436,
        "smoothedEle": 93.91929839114323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.43007,
        "lng": 121.348951,
        "ele": 91.25,
        "distanceKm": 71.43583488356296,
        "gradePct": -1.743327052385427,
        "smoothedEle": 93.18218681686949,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4297525,
        "lng": 121.34876750000001,
        "ele": 91.375,
        "distanceKm": 71.47579627835442,
        "gradePct": -1.544173630709215,
        "smoothedEle": 92.63655406011183,
        "gradeBand": "descent"
      },
      {
        "lat": 23.429435,
        "lng": 121.348584,
        "ele": 91.5,
        "distanceKm": 71.51575769420948,
        "gradePct": -1.3880566704926962,
        "smoothedEle": 92.04009676075606,
        "gradeBand": "descent"
      },
      {
        "lat": 23.429070967832967,
        "lng": 121.34838256886758,
        "ele": 91.5,
        "distanceKm": 71.56115459420778,
        "gradePct": -1.2964767302427949,
        "smoothedEle": 91.3479445096945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.428707,
        "lng": 121.348181,
        "ele": 91.5,
        "distanceKm": 71.606551505751,
        "gradePct": -1.3130890562938127,
        "smoothedEle": 90.63159511851768,
        "gradeBand": "descent"
      },
      {
        "lat": 23.428337,
        "lng": 121.347976,
        "ele": 91,
        "distanceKm": 71.65270500444001,
        "gradePct": -1.3722542674994938,
        "smoothedEle": 89.93569713465388,
        "gradeBand": "descent"
      },
      {
        "lat": 23.427979,
        "lng": 121.347874,
        "ele": 89.5,
        "distanceKm": 71.69385068287744,
        "gradePct": -1.3777505884034003,
        "smoothedEle": 89.49629782167405,
        "gradeBand": "descent"
      },
      {
        "lat": 23.427504,
        "lng": 121.347675,
        "ele": 88,
        "distanceKm": 71.75043640412187,
        "gradePct": -1.2743681728946614,
        "smoothedEle": 89.15971318314367,
        "gradeBand": "descent"
      },
      {
        "lat": 23.426993,
        "lng": 121.347353,
        "ele": 86.75,
        "distanceKm": 71.81607120924811,
        "gradePct": -1.0502517317581053,
        "smoothedEle": 88.88456150032896,
        "gradeBand": "descent"
      },
      {
        "lat": 23.426445,
        "lng": 121.347126,
        "ele": 86.75,
        "distanceKm": 71.88125922325736,
        "gradePct": -0.8125488951598292,
        "smoothedEle": 88.5930529216451,
        "gradeBand": "descent"
      },
      {
        "lat": 23.425928,
        "lng": 121.346937,
        "ele": 88.25,
        "distanceKm": 71.94189510944783,
        "gradePct": -0.5988841507605078,
        "smoothedEle": 88.302035232266,
        "gradeBand": "descent"
      },
      {
        "lat": 23.425338,
        "lng": 121.346707,
        "ele": 87.25,
        "distanceKm": 72.01157096280558,
        "gradePct": -0.4887848154368819,
        "smoothedEle": 87.92453915176951,
        "gradeBand": "descent"
      },
      {
        "lat": 23.42489674370532,
        "lng": 121.34654375133421,
        "ele": 87.65408085593134,
        "distanceKm": 72.06338659294708,
        "gradePct": -0.4780178812186712,
        "smoothedEle": 87.67137026048131,
        "gradeBand": "descent"
      },
      {
        "lat": 23.424455487410647,
        "lng": 121.34638050266841,
        "ele": 88.05816171186267,
        "distanceKm": 72.115202240954,
        "gradePct": -0.446551467332028,
        "smoothedEle": 87.54854995349143,
        "gradeBand": "descent"
      },
      {
        "lat": 23.424014,
        "lng": 121.346218,
        "ele": 88.25,
        "distanceKm": 72.1670178365008,
        "gradePct": -0.36656279263348657,
        "smoothedEle": 87.55704935566882,
        "gradeBand": "descent"
      },
      {
        "lat": 23.42354934565649,
        "lng": 121.34603697329781,
        "ele": 88,
        "distanceKm": 72.2218873534069,
        "gradePct": -0.2355749592948393,
        "smoothedEle": 87.69133617833664,
        "gradeBand": "descent"
      },
      {
        "lat": 23.423085,
        "lng": 121.345855,
        "ele": 88,
        "distanceKm": 72.27675717888992,
        "gradePct": -0.08507126013891844,
        "smoothedEle": 87.85794260877549,
        "gradeBand": "descent"
      },
      {
        "lat": 23.422653,
        "lng": 121.34567866666667,
        "ele": 87.58333333333333,
        "distanceKm": 72.32805224624082,
        "gradePct": 0.03105447437146373,
        "smoothedEle": 87.93717574846276,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.422221,
        "lng": 121.34550233333333,
        "ele": 87.16666666666667,
        "distanceKm": 72.37934733420451,
        "gradePct": 0.13545038245254315,
        "smoothedEle": 88.03988914641934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.421789,
        "lng": 121.345326,
        "ele": 86.75,
        "distanceKm": 72.4306424427797,
        "gradePct": 0.20653645895885317,
        "smoothedEle": 88.17069201350385,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.421412500000002,
        "lng": 121.34517550000001,
        "ele": 87.375,
        "distanceKm": 72.47523482122395,
        "gradePct": 0.23022470339256745,
        "smoothedEle": 88.26783358951081,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.421036,
        "lng": 121.345025,
        "ele": 88,
        "distanceKm": 72.51982721472159,
        "gradePct": 0.2214857483624894,
        "smoothedEle": 88.35075147128192,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.420659,
        "lng": 121.34486650000001,
        "ele": 88.49999999999991,
        "distanceKm": 72.56475912839083,
        "gradePct": 0.2025460297825409,
        "smoothedEle": 88.42914988486133,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.420282,
        "lng": 121.344708,
        "ele": 89,
        "distanceKm": 72.60969105865135,
        "gradePct": 0.20561914297783046,
        "smoothedEle": 88.52567149241885,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.419842625,
        "lng": 121.344528375,
        "ele": 89.09375,
        "distanceKm": 72.66187203529192,
        "gradePct": 0.21349526813177716,
        "smoothedEle": 88.64538237349636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.419403250000002,
        "lng": 121.34434875,
        "ele": 89.1875,
        "distanceKm": 72.71405303331537,
        "gradePct": 0.23578353544965328,
        "smoothedEle": 88.83573951568854,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.418963875,
        "lng": 121.344169125,
        "ele": 89.28124999999999,
        "distanceKm": 72.76623405272174,
        "gradePct": 0.29319116967574427,
        "smoothedEle": 89.12779951383226,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4185245,
        "lng": 121.3439895,
        "ele": 89.37499999999999,
        "distanceKm": 72.8184150935095,
        "gradePct": 0.3773289934088465,
        "smoothedEle": 89.48011266512368,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.418085125,
        "lng": 121.343809875,
        "ele": 89.46875000000001,
        "distanceKm": 72.87059615567969,
        "gradePct": 0.45207559183053975,
        "smoothedEle": 89.79791561102813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.41764575,
        "lng": 121.34363025,
        "ele": 89.5625,
        "distanceKm": 72.92277723923188,
        "gradePct": 0.500361414007557,
        "smoothedEle": 90.05677736891617,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.417206375,
        "lng": 121.343450625,
        "ele": 89.65625,
        "distanceKm": 72.97495834416499,
        "gradePct": 0.5248903242799232,
        "smoothedEle": 90.26779241713355,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.416767,
        "lng": 121.343271,
        "ele": 89.75,
        "distanceKm": 73.02713947047909,
        "gradePct": 0.5090395199513722,
        "smoothedEle": 90.43610357471503,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.416375212536195,
        "lng": 121.34311395263911,
        "ele": 90.68480571957544,
        "distanceKm": 73.0735580486864,
        "gradePct": 0.46370380758953866,
        "smoothedEle": 90.56836069956837,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.41598342507239,
        "lng": 121.34295690527823,
        "ele": 91.61961143915086,
        "distanceKm": 73.1199766432762,
        "gradePct": 0.3981880246642447,
        "smoothedEle": 90.68418718400572,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.415591851989618,
        "lng": 121.34279922592684,
        "ele": 91.94282068709796,
        "distanceKm": 73.16639519487343,
        "gradePct": 0.33704553557305733,
        "smoothedEle": 90.78346673396577,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.41520042599481,
        "lng": 121.34264111296342,
        "ele": 91.84641034354898,
        "distanceKm": 73.21281378122951,
        "gradePct": 0.2861204208401421,
        "smoothedEle": 90.86571155791567,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.414809,
        "lng": 121.342483,
        "ele": 91.75,
        "distanceKm": 73.25923238417558,
        "gradePct": 0.24465536599271565,
        "smoothedEle": 90.9381643422845,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.414469,
        "lng": 121.342335,
        "ele": 91.75,
        "distanceKm": 73.29994331295764,
        "gradePct": 0.21955161237259538,
        "smoothedEle": 91.00703671861658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.41405268237622,
        "lng": 121.34216565045813,
        "ele": 91.55399358579099,
        "distanceKm": 73.3493558528016,
        "gradePct": 0.20430370924039878,
        "smoothedEle": 91.11231424680174,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.413636364752442,
        "lng": 121.34199630091625,
        "ele": 91.35798717158198,
        "distanceKm": 73.39876841165959,
        "gradePct": 0.2025912986024395,
        "smoothedEle": 91.23904101769153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.41322004712866,
        "lng": 121.34182695137437,
        "ele": 91.16198075737296,
        "distanceKm": 73.44818098953209,
        "gradePct": 0.20477003944320135,
        "smoothedEle": 91.35882048577928,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.41280372950488,
        "lng": 121.3416576018325,
        "ele": 90.96597434316395,
        "distanceKm": 73.49759358641847,
        "gradePct": 0.207776339798331,
        "smoothedEle": 91.46207331395813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4123874118811,
        "lng": 121.34148825229062,
        "ele": 90.769967928955,
        "distanceKm": 73.54700620231847,
        "gradePct": 0.21459667359858955,
        "smoothedEle": 91.56287104601499,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.41197109425732,
        "lng": 121.34131890274874,
        "ele": 90.57396151474599,
        "distanceKm": 73.59641883723144,
        "gradePct": 0.22509260950928675,
        "smoothedEle": 91.67635204454747,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.411554806925064,
        "lng": 121.3411494664801,
        "ele": 90.75781804536092,
        "distanceKm": 73.64583143138277,
        "gradePct": 0.2338826060013705,
        "smoothedEle": 91.80645299167527,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.41113853795004,
        "lng": 121.3409799776534,
        "ele": 91.17187869690727,
        "distanceKm": 73.69524400923562,
        "gradePct": 0.23943747947928518,
        "smoothedEle": 91.9483145366962,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.41072226897502,
        "lng": 121.3408104888267,
        "ele": 91.58593934845364,
        "distanceKm": 73.74465660612974,
        "gradePct": 0.253848174747103,
        "smoothedEle": 92.1118216636208,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.410306,
        "lng": 121.340641,
        "ele": 92,
        "distanceKm": 73.7940692220656,
        "gradePct": 0.2810711462462742,
        "smoothedEle": 92.29792222199228,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.409807,
        "lng": 121.3404315,
        "ele": 92.75,
        "distanceKm": 73.85353135449391,
        "gradePct": 0.3240435520179955,
        "smoothedEle": 92.54998735878915,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.409308,
        "lng": 121.340222,
        "ele": 93.5,
        "distanceKm": 73.91299351590185,
        "gradePct": 0.37064774348089574,
        "smoothedEle": 92.83193559443492,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.408878756253692,
        "lng": 121.34004972550557,
        "ele": 93.6545524770672,
        "distanceKm": 73.96385772108115,
        "gradePct": 0.434520705196111,
        "smoothedEle": 93.1617678677697,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.408449512507385,
        "lng": 121.33987745101112,
        "ele": 93.80910495413444,
        "distanceKm": 74.01472194596646,
        "gradePct": 0.5020677963588819,
        "smoothedEle": 93.51897075103322,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.408020268761074,
        "lng": 121.33970517651669,
        "ele": 93.96365743120164,
        "distanceKm": 74.06558619055683,
        "gradePct": 0.5606977834711089,
        "smoothedEle": 93.8727411857434,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.407591025014767,
        "lng": 121.33953290202226,
        "ele": 94.11820990826884,
        "distanceKm": 74.11645045485176,
        "gradePct": 0.6087853072647543,
        "smoothedEle": 94.21915413079772,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.407161829707533,
        "lng": 121.33936048496331,
        "ele": 94.26714720208108,
        "distanceKm": 74.16731471495237,
        "gradePct": 0.6476221048219974,
        "smoothedEle": 94.55820942337446,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.406732914853766,
        "lng": 121.33918724248166,
        "ele": 94.38357360104055,
        "distanceKm": 74.21817894960184,
        "gradePct": 0.6728133488926855,
        "smoothedEle": 94.88400092591719,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.406304,
        "lng": 121.339014,
        "ele": 94.5,
        "distanceKm": 74.26904320416217,
        "gradePct": 0.6636224470136811,
        "smoothedEle": 95.18905116741094,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.405866,
        "lng": 121.338815,
        "ele": 95.75,
        "distanceKm": 74.32181060762392,
        "gradePct": 0.63884574338296,
        "smoothedEle": 95.48481096280051,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.405263,
        "lng": 121.338573,
        "ele": 96,
        "distanceKm": 74.39326430678197,
        "gradePct": 0.6141304115962982,
        "smoothedEle": 95.90363525032872,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.404853222222222,
        "lng": 121.33839922222222,
        "ele": 96.30555555555554,
        "distanceKm": 74.44215872740747,
        "gradePct": 0.6043718137356024,
        "smoothedEle": 96.20363795239145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.404443444444446,
        "lng": 121.33822544444445,
        "ele": 96.61111111111109,
        "distanceKm": 74.49105316794272,
        "gradePct": 0.6012760135721569,
        "smoothedEle": 96.5140850928632,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.404033666666667,
        "lng": 121.33805166666666,
        "ele": 96.91666666666664,
        "distanceKm": 74.53994762838872,
        "gradePct": 0.6073585546811141,
        "smoothedEle": 96.83663076358084,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.40362388888889,
        "lng": 121.33787788888888,
        "ele": 97.22222222222219,
        "distanceKm": 74.58884210874338,
        "gradePct": 0.6241148575806944,
        "smoothedEle": 97.17236803713406,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.40321411111111,
        "lng": 121.33770411111111,
        "ele": 97.52777777777781,
        "distanceKm": 74.63773660900772,
        "gradePct": 0.6482721003073109,
        "smoothedEle": 97.52297717088385,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.402804333333336,
        "lng": 121.33753033333333,
        "ele": 97.83333333333336,
        "distanceKm": 74.6866311291807,
        "gradePct": 0.6681783136921019,
        "smoothedEle": 97.86928996664916,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.402394555555556,
        "lng": 121.33735655555554,
        "ele": 98.13888888888891,
        "distanceKm": 74.73552566926332,
        "gradePct": 0.6782822624842281,
        "smoothedEle": 98.19778612145932,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.40198477777778,
        "lng": 121.33718277777777,
        "ele": 98.44444444444446,
        "distanceKm": 74.78442022925353,
        "gradePct": 0.69222436670982,
        "smoothedEle": 98.54864344893498,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.401575,
        "lng": 121.337009,
        "ele": 98.75,
        "distanceKm": 74.83331480915228,
        "gradePct": 0.7092488161515832,
        "smoothedEle": 98.92062200725678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.401159867617245,
        "lng": 121.33683376958892,
        "ele": 99.08543340558656,
        "distanceKm": 74.8828180992669,
        "gradePct": 0.7265983112160818,
        "smoothedEle": 99.31079870015664,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.400744735234493,
        "lng": 121.33665853917783,
        "ele": 99.42086681117321,
        "distanceKm": 74.93232140963588,
        "gradePct": 0.7215301577525037,
        "smoothedEle": 99.64873672551903,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.400329602851738,
        "lng": 121.33648330876676,
        "ele": 99.75630021675978,
        "distanceKm": 74.98182474025863,
        "gradePct": 0.6995746081237892,
        "smoothedEle": 99.93397083530182,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.39991447424861,
        "lng": 121.33630806832706,
        "ele": 100.15998555719702,
        "distanceKm": 75.03132806894183,
        "gradePct": 0.665555717601655,
        "smoothedEle": 100.16625185212779,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.39949935568646,
        "lng": 121.3361328012453,
        "ele": 100.74498916789773,
        "distanceKm": 75.08083135904715,
        "gradePct": 0.6078011531445507,
        "smoothedEle": 100.34629391233968,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.399084237124306,
        "lng": 121.33595753416353,
        "ele": 101.32999277859842,
        "distanceKm": 75.1303346694139,
        "gradePct": 0.5405826344205598,
        "smoothedEle": 100.51969770256049,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.398669118562154,
        "lng": 121.33578226708177,
        "ele": 101.9149963892993,
        "distanceKm": 75.17983800004075,
        "gradePct": 0.4673178319011836,
        "smoothedEle": 100.68926354979483,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.398254,
        "lng": 121.335607,
        "ele": 102.5,
        "distanceKm": 75.22934135092846,
        "gradePct": 0.40886610585818445,
        "smoothedEle": 100.85499145096732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.397825750000003,
        "lng": 121.33542075,
        "ele": 102.00000000000007,
        "distanceKm": 75.28061381207714,
        "gradePct": 0.3646278670140538,
        "smoothedEle": 101.02087716799629,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3973975,
        "lng": 121.3352345,
        "ele": 101.5,
        "distanceKm": 75.33188629601396,
        "gradePct": 0.3376669708958847,
        "smoothedEle": 101.18128302082305,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.396969249999998,
        "lng": 121.33504825,
        "ele": 100.99999999999993,
        "distanceKm": 75.38315880273824,
        "gradePct": 0.3268689409981848,
        "smoothedEle": 101.335053474102,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.396541,
        "lng": 121.334862,
        "ele": 100.5,
        "distanceKm": 75.43443133224926,
        "gradePct": 0.31446929754843056,
        "smoothedEle": 101.47713806727818,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3961278,
        "lng": 121.3346876,
        "ele": 100.75000000000003,
        "distanceKm": 75.48370389260843,
        "gradePct": 0.2965382748891329,
        "smoothedEle": 101.59182065513438,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.395714599999998,
        "lng": 121.3345132,
        "ele": 100.99999999999999,
        "distanceKm": 75.5329764730266,
        "gradePct": 0.27264070734398893,
        "smoothedEle": 101.68467456169041,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3953014,
        "lng": 121.3343388,
        "ele": 101.25000000000001,
        "distanceKm": 75.58224907350413,
        "gradePct": 0.24303901390687338,
        "smoothedEle": 101.75511012148189,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3948882,
        "lng": 121.3341644,
        "ele": 101.49999999999997,
        "distanceKm": 75.63152169404046,
        "gradePct": 0.20758718670486764,
        "smoothedEle": 101.8029039244683,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.394475,
        "lng": 121.33399,
        "ele": 101.75,
        "distanceKm": 75.68079433463598,
        "gradePct": 0.18908062449734273,
        "smoothedEle": 101.89520411381052,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3940618,
        "lng": 121.3338156,
        "ele": 102.00000000000003,
        "distanceKm": 75.73006699528989,
        "gradePct": 0.18927332577747497,
        "smoothedEle": 102.03286375070176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3936486,
        "lng": 121.3336412,
        "ele": 102.24999999999999,
        "distanceKm": 75.77933967600138,
        "gradePct": 0.21112924958809942,
        "smoothedEle": 102.21505062742405,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.393235400000002,
        "lng": 121.3334668,
        "ele": 102.50000000000001,
        "distanceKm": 75.82861237677086,
        "gradePct": 0.25499657983514373,
        "smoothedEle": 102.44144018582595,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3928222,
        "lng": 121.3332924,
        "ele": 102.74999999999997,
        "distanceKm": 75.87788509759774,
        "gradePct": 0.29775956207467685,
        "smoothedEle": 102.64215047072139,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.392409,
        "lng": 121.333118,
        "ele": 103,
        "distanceKm": 75.9271578384824,
        "gradePct": 0.33764319177085006,
        "smoothedEle": 102.81160061647704,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3919806,
        "lng": 121.3329404,
        "ele": 103.19999999999999,
        "distanceKm": 75.97812552992008,
        "gradePct": 0.35470188274667536,
        "smoothedEle": 102.95431041195245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3915522,
        "lng": 121.3327628,
        "ele": 103.39999999999998,
        "distanceKm": 76.02909324220524,
        "gradePct": 0.348115037462495,
        "smoothedEle": 103.07448835856856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.391123800000003,
        "lng": 121.3325852,
        "ele": 103.60000000000002,
        "distanceKm": 76.08006097533719,
        "gradePct": 0.31958245172735,
        "smoothedEle": 103.17711208221012,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.390695400000002,
        "lng": 121.3324076,
        "ele": 103.80000000000001,
        "distanceKm": 76.1310287293164,
        "gradePct": 0.27043896727049127,
        "smoothedEle": 103.26259999461888,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.390267,
        "lng": 121.33223,
        "ele": 104,
        "distanceKm": 76.18199650414218,
        "gradePct": 0.22895568258876367,
        "smoothedEle": 103.3431567448775,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.389812000000003,
        "lng": 121.332044,
        "ele": 103.75,
        "distanceKm": 76.23603418761127,
        "gradePct": 0.19953920892045762,
        "smoothedEle": 103.4350720659841,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.389357,
        "lng": 121.331858,
        "ele": 103.5,
        "distanceKm": 76.29007189398533,
        "gradePct": 0.17945906116793423,
        "smoothedEle": 103.52085620335566,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.388902,
        "lng": 121.331672,
        "ele": 103.25,
        "distanceKm": 76.34410962326326,
        "gradePct": 0.16572186805992967,
        "smoothedEle": 103.60188950286557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.38843616626496,
        "lng": 121.33147648584114,
        "ele": 103.25,
        "distanceKm": 76.3996184865553,
        "gradePct": 0.15780187387655226,
        "smoothedEle": 103.68332140177453,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.38797033252992,
        "lng": 121.33128097168226,
        "ele": 103.25,
        "distanceKm": 76.45512737506995,
        "gradePct": 0.1587512870933822,
        "smoothedEle": 103.77694279727768,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.387504517466287,
        "lng": 121.33108540493507,
        "ele": 103.27787275224462,
        "distanceKm": 76.510636281061,
        "gradePct": 0.1698416924449823,
        "smoothedEle": 103.90139661017001,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.387039,
        "lng": 121.330889,
        "ele": 103.75,
        "distanceKm": 76.5661451695816,
        "gradePct": 0.17938876370195259,
        "smoothedEle": 104.02103913893394,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.38658475,
        "lng": 121.3306965,
        "ele": 103.93750000000001,
        "distanceKm": 76.62034188190411,
        "gradePct": 0.17458035560164048,
        "smoothedEle": 104.0899892033517,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3861305,
        "lng": 121.330504,
        "ele": 104.12499999999997,
        "distanceKm": 76.67453861864516,
        "gradePct": 0.18030951596309025,
        "smoothedEle": 104.18745760431233,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.38567625,
        "lng": 121.3303115,
        "ele": 104.31249999999999,
        "distanceKm": 76.72873537980489,
        "gradePct": 0.20612395652654156,
        "smoothedEle": 104.35080187813203,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.385222,
        "lng": 121.330119,
        "ele": 104.5,
        "distanceKm": 76.78293216538188,
        "gradePct": 0.2010396487855502,
        "smoothedEle": 104.44240150892442,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.384739,
        "lng": 121.329952,
        "ele": 105.25,
        "distanceKm": 76.83927905803536,
        "gradePct": 0.17403382307980236,
        "smoothedEle": 104.48523403484585,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.384191,
        "lng": 121.329861,
        "ele": 105.75,
        "distanceKm": 76.9009177019632,
        "gradePct": 0.16098322799654513,
        "smoothedEle": 104.54822708470986,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.383801000000002,
        "lng": 121.329848,
        "ele": 105.1250000000001,
        "distanceKm": 76.94430407569041,
        "gradePct": 0.1611357680554369,
        "smoothedEle": 104.61649055436106,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.383411,
        "lng": 121.329835,
        "ele": 104.5,
        "distanceKm": 76.98769044953744,
        "gradePct": 0.16205748264198558,
        "smoothedEle": 104.71326851439967,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.382956228007533,
        "lng": 121.32983835596804,
        "ele": 105.13813439847539,
        "distanceKm": 77.03826001772221,
        "gradePct": 0.14426061727078496,
        "smoothedEle": 104.79968160931803,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.382501,
        "lng": 121.32982,
        "ele": 105.75,
        "distanceKm": 77.08891379018215,
        "gradePct": 0.12536455454568932,
        "smoothedEle": 104.82304215088175,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.381861,
        "lng": 121.329787,
        "ele": 103.75,
        "distanceKm": 77.16015829973342,
        "gradePct": 0.08353427907626652,
        "smoothedEle": 104.75717490012973,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.381419813399255,
        "lng": 121.3297597266465,
        "ele": 103.88369290931762,
        "distanceKm": 77.20929498969387,
        "gradePct": 0.030419129222740843,
        "smoothedEle": 104.65266517123894,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.380978611315953,
        "lng": 121.32973276425504,
        "ele": 104.1068406351958,
        "distanceKm": 77.25843161128738,
        "gradePct": -0.0501621544970026,
        "smoothedEle": 104.49751707419215,
        "gradeBand": "descent"
      },
      {
        "lat": 23.380537305657977,
        "lng": 121.32970788212752,
        "ele": 104.9284203175979,
        "distanceKm": 77.30756830128625,
        "gradePct": -0.1455248690976006,
        "smoothedEle": 104.31066110816478,
        "gradeBand": "descent"
      },
      {
        "lat": 23.380096,
        "lng": 121.329683,
        "ele": 105.75,
        "distanceKm": 77.35670499172221,
        "gradePct": -0.211080506551115,
        "smoothedEle": 104.17494655543898,
        "gradeBand": "descent"
      },
      {
        "lat": 23.37963375029567,
        "lng": 121.32964749536201,
        "ele": 104.97441324776989,
        "distanceKm": 77.40823246851434,
        "gradePct": -0.25106480044659685,
        "smoothedEle": 104.0519871699981,
        "gradeBand": "descent"
      },
      {
        "lat": 23.379171500591344,
        "lng": 121.32961199072402,
        "ele": 104.19882649553978,
        "distanceKm": 77.45975994619496,
        "gradePct": -0.2864191036361896,
        "smoothedEle": 103.89828587658212,
        "gradeBand": "descent"
      },
      {
        "lat": 23.378709250780506,
        "lng": 121.32957648775678,
        "ele": 103.47748562032629,
        "distanceKm": 77.51128742458602,
        "gradePct": -0.31474714986848384,
        "smoothedEle": 103.70213264031815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.378247,
        "lng": 121.329541,
        "ele": 103.25,
        "distanceKm": 77.562814902267,
        "gradePct": -0.3193180686922102,
        "smoothedEle": 103.5228941818366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.377799000000003,
        "lng": 121.3295195,
        "ele": 103,
        "distanceKm": 77.61267860867547,
        "gradePct": -0.32278935630079125,
        "smoothedEle": 103.3281784728261,
        "gradeBand": "descent"
      },
      {
        "lat": 23.377351,
        "lng": 121.329498,
        "ele": 102.75,
        "distanceKm": 77.66254231541076,
        "gradePct": -0.3183104990726076,
        "smoothedEle": 103.20608552434821,
        "gradeBand": "descent"
      },
      {
        "lat": 23.3768415,
        "lng": 121.32946050000001,
        "ele": 102.87499999999999,
        "distanceKm": 77.71932535525931,
        "gradePct": -0.30905934331708623,
        "smoothedEle": 103.09172017242868,
        "gradeBand": "descent"
      },
      {
        "lat": 23.376332,
        "lng": 121.329423,
        "ele": 103,
        "distanceKm": 77.77610839609967,
        "gradePct": -0.28567631547934774,
        "smoothedEle": 102.97902214868687,
        "gradeBand": "descent"
      },
      {
        "lat": 23.375842,
        "lng": 121.329417,
        "ele": 103.25,
        "distanceKm": 77.83059742699727,
        "gradePct": -0.2237065985728911,
        "smoothedEle": 102.96384295348047,
        "gradeBand": "descent"
      },
      {
        "lat": 23.375224,
        "lng": 121.32931,
        "ele": 101.25,
        "distanceKm": 77.90017843169792,
        "gradePct": -0.1012081720722108,
        "smoothedEle": 103.07336663016004,
        "gradeBand": "descent"
      },
      {
        "lat": 23.374749,
        "lng": 121.329179,
        "ele": 100.75,
        "distanceKm": 77.95466228674928,
        "gradePct": 0.0015337379213870533,
        "smoothedEle": 103.22998125102288,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3743185,
        "lng": 121.32904,
        "ele": 102.1249999999998,
        "distanceKm": 78.00459000145021,
        "gradePct": 0.0988653145502866,
        "smoothedEle": 103.41799423702078,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.373888,
        "lng": 121.328901,
        "ele": 103.5,
        "distanceKm": 78.05451772924404,
        "gradePct": 0.2086621482104572,
        "smoothedEle": 103.6478598645761,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.373451499999998,
        "lng": 121.328745,
        "ele": 103.87500000000006,
        "distanceKm": 78.10559949144596,
        "gradePct": 0.3115148878882679,
        "smoothedEle": 103.90535137732304,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.373015,
        "lng": 121.328589,
        "ele": 104.25,
        "distanceKm": 78.15668126998993,
        "gradePct": 0.3922224018575225,
        "smoothedEle": 104.1815673182415,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.372564,
        "lng": 121.328437,
        "ele": 104.75,
        "distanceKm": 78.20917534540968,
        "gradePct": 0.4585768437677961,
        "smoothedEle": 104.47495891864953,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.372159285714286,
        "lng": 121.32830557142857,
        "ele": 105.1071428571429,
        "distanceKm": 78.25613453136187,
        "gradePct": 0.5169494036390225,
        "smoothedEle": 104.78637349910225,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.37175457142857,
        "lng": 121.32817414285714,
        "ele": 105.4642857142857,
        "distanceKm": 78.30309372901318,
        "gradePct": 0.5939620879246906,
        "smoothedEle": 105.19424598196223,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.371349857142857,
        "lng": 121.32804271428571,
        "ele": 105.8214285714286,
        "distanceKm": 78.35005293836264,
        "gradePct": 0.6728156720346796,
        "smoothedEle": 105.64575112933301,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.370945142857146,
        "lng": 121.32791128571428,
        "ele": 106.1785714285714,
        "distanceKm": 78.39701215941052,
        "gradePct": 0.7238035568478194,
        "smoothedEle": 106.03347526563834,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.37054042857143,
        "lng": 121.32777985714286,
        "ele": 106.5357142857143,
        "distanceKm": 78.44397139215661,
        "gradePct": 0.7496617076048414,
        "smoothedEle": 106.36182596040565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.370135714285716,
        "lng": 121.32764842857142,
        "ele": 106.8928571428571,
        "distanceKm": 78.49093063660119,
        "gradePct": 0.7726163588647597,
        "smoothedEle": 106.69083754860772,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.369731,
        "lng": 121.327517,
        "ele": 107.25,
        "distanceKm": 78.53788989274328,
        "gradePct": 0.7891580234229544,
        "smoothedEle": 107.03285640724359,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.369316900481007,
        "lng": 121.32737673034015,
        "ele": 107.45967064252895,
        "distanceKm": 78.58611039993407,
        "gradePct": 0.7822618978190007,
        "smoothedEle": 107.39351994299653,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.36890280096201,
        "lng": 121.3272364606803,
        "ele": 107.66934128505788,
        "distanceKm": 78.63433092040158,
        "gradePct": 0.7566203730931397,
        "smoothedEle": 107.76444760732454,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.368488701443017,
        "lng": 121.32709619102044,
        "ele": 107.87901192758683,
        "distanceKm": 78.68255145414561,
        "gradePct": 0.7446865340660835,
        "smoothedEle": 108.1481384141883,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.36807460192402,
        "lng": 121.3269559213606,
        "ele": 108.08868257011571,
        "distanceKm": 78.73077200116599,
        "gradePct": 0.7583532837836559,
        "smoothedEle": 108.5445923702153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.36766040290711,
        "lng": 121.32681600262593,
        "ele": 108.34875732736717,
        "distanceKm": 78.77899250468369,
        "gradePct": 0.7832698064245969,
        "smoothedEle": 108.95700457139917,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.367246123716164,
        "lng": 121.32667636791489,
        "ele": 108.86545195611903,
        "distanceKm": 78.82721295901018,
        "gradePct": 0.8105968255033467,
        "smoothedEle": 109.38688345670793,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.36683198199845,
        "lng": 121.3265362490254,
        "ele": 109.4304474782419,
        "distanceKm": 78.87543345952017,
        "gradePct": 0.8341332915053228,
        "smoothedEle": 109.81606202867867,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.366417840280732,
        "lng": 121.3263961301359,
        "ele": 109.99544300036477,
        "distanceKm": 78.9236539732786,
        "gradePct": 0.8540742905479879,
        "smoothedEle": 110.24453998721764,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.366003698563016,
        "lng": 121.32625601124641,
        "ele": 110.56043852248764,
        "distanceKm": 78.97187450028532,
        "gradePct": 0.8720976899624292,
        "smoothedEle": 110.67947495781134,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3655895568453,
        "lng": 121.32611589235694,
        "ele": 111.12543404461034,
        "distanceKm": 79.02009504053969,
        "gradePct": 0.8889938967931138,
        "smoothedEle": 111.12379149610292,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.365175415127585,
        "lng": 121.32597577346745,
        "ele": 111.69042956673321,
        "distanceKm": 79.06831559404239,
        "gradePct": 0.9037900941881618,
        "smoothedEle": 111.57705917083719,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.36476127340987,
        "lng": 121.32583565457796,
        "ele": 112.25542508885607,
        "distanceKm": 79.1165361607928,
        "gradePct": 0.9146469595214902,
        "smoothedEle": 112.035642110624,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.364347,
        "lng": 121.325696,
        "ele": 113,
        "distanceKm": 79.16475669260872,
        "gradePct": 0.905322252320563,
        "smoothedEle": 112.43700199147901,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.363938599999997,
        "lng": 121.3255612,
        "ele": 113.34999999999995,
        "distanceKm": 79.21220766472001,
        "gradePct": 0.8858558074496906,
        "smoothedEle": 112.80039777311276,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3635302,
        "lng": 121.3254264,
        "ele": 113.70000000000002,
        "distanceKm": 79.25965864911758,
        "gradePct": 0.8597851520163796,
        "smoothedEle": 113.14864702935125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3631218,
        "lng": 121.3252916,
        "ele": 114.04999999999998,
        "distanceKm": 79.30710964580202,
        "gradePct": 0.8255831852011191,
        "smoothedEle": 113.4808902637276,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3627134,
        "lng": 121.3251568,
        "ele": 114.40000000000005,
        "distanceKm": 79.35456065477238,
        "gradePct": 0.7831903816887668,
        "smoothedEle": 113.797335463685,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.362305,
        "lng": 121.325022,
        "ele": 114.75,
        "distanceKm": 79.40201167602929,
        "gradePct": 0.7335475635192876,
        "smoothedEle": 114.09815533961381,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.361796,
        "lng": 121.324849,
        "ele": 115.25,
        "distanceKm": 79.46130106034559,
        "gradePct": 0.6809180475630559,
        "smoothedEle": 114.45099344530563,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.361375859773233,
        "lng": 121.32470863278465,
        "ele": 114.52893553758432,
        "distanceKm": 79.51016654921598,
        "gradePct": 0.6370079280313058,
        "smoothedEle": 114.69578999622934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.36095542387608,
        "lng": 121.32456934822,
        "ele": 114.43925582704139,
        "distanceKm": 79.55903121296434,
        "gradePct": 0.5787861597709241,
        "smoothedEle": 114.8804006690284,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.360535539100866,
        "lng": 121.32442807857599,
        "ele": 114.75140466163313,
        "distanceKm": 79.60789667924462,
        "gradePct": 0.5281550378380333,
        "smoothedEle": 115.07060401073807,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.36011565432565,
        "lng": 121.324286808932,
        "ele": 115.06355349622478,
        "distanceKm": 79.65676215899518,
        "gradePct": 0.5079356737927062,
        "smoothedEle": 115.33509911254164,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.359695769550434,
        "lng": 121.324145539288,
        "ele": 115.37570233081652,
        "distanceKm": 79.70562765221669,
        "gradePct": 0.507421395017308,
        "smoothedEle": 115.6419386246345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.359275884775215,
        "lng": 121.324004269644,
        "ele": 115.68785116540826,
        "distanceKm": 79.75449315890847,
        "gradePct": 0.5065659654334856,
        "smoothedEle": 115.93017671871856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.358856,
        "lng": 121.323863,
        "ele": 116,
        "distanceKm": 79.80335867907046,
        "gradePct": 0.5041294482192457,
        "smoothedEle": 116.1740736349016,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.358437,
        "lng": 121.323873,
        "ele": 116,
        "distanceKm": 79.84996059953744,
        "gradePct": 0.5037899628445501,
        "smoothedEle": 116.35750178501786,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.358024,
        "lng": 121.323998,
        "ele": 115.75,
        "distanceKm": 79.89762398152214,
        "gradePct": 0.5072563585400806,
        "smoothedEle": 116.55238776371796,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.357632,
        "lng": 121.324134,
        "ele": 115.75,
        "distanceKm": 79.94336999549463,
        "gradePct": 0.51368627270071,
        "smoothedEle": 116.80366991524869,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.357259,
        "lng": 121.32428949999999,
        "ele": 117.125,
        "distanceKm": 79.98777965504614,
        "gradePct": 0.5204212414102474,
        "smoothedEle": 117.091129997138,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.356886,
        "lng": 121.324445,
        "ele": 118.5,
        "distanceKm": 80.03218933054998,
        "gradePct": 0.5211153651378171,
        "smoothedEle": 117.36196144473132,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.356474,
        "lng": 121.324599,
        "ele": 119,
        "distanceKm": 80.08062400079821,
        "gradePct": 0.5262892976995348,
        "smoothedEle": 117.63946851261771,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.355983,
        "lng": 121.32479433333334,
        "ele": 118.58333333333333,
        "distanceKm": 80.13874822030117,
        "gradePct": 0.5589799094489845,
        "smoothedEle": 117.99030886902092,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.355492,
        "lng": 121.32498966666667,
        "ele": 118.16666666666667,
        "distanceKm": 80.19687246511819,
        "gradePct": 0.6088172213291009,
        "smoothedEle": 118.37576662834032,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.355001,
        "lng": 121.325185,
        "ele": 117.75,
        "distanceKm": 80.25499673525059,
        "gradePct": 0.6580176208248186,
        "smoothedEle": 118.85298171003888,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.354643499999998,
        "lng": 121.3253055,
        "ele": 118.62500000000016,
        "distanceKm": 80.29660875305706,
        "gradePct": 0.7069449018100395,
        "smoothedEle": 119.26580876623467,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.354286,
        "lng": 121.325426,
        "ele": 119.5,
        "distanceKm": 80.33822078066056,
        "gradePct": 0.7764581589779953,
        "smoothedEle": 119.72589319286612,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.353925,
        "lng": 121.325463,
        "ele": 119.5,
        "distanceKm": 80.37853952048835,
        "gradePct": 0.8407271625090245,
        "smoothedEle": 120.14970694332426,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.353467,
        "lng": 121.325405,
        "ele": 119.5,
        "distanceKm": 80.42980990542128,
        "gradePct": 0.910420505507502,
        "smoothedEle": 120.66761832210204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.35305779466759,
        "lng": 121.32525743617246,
        "ele": 119.97487779571262,
        "distanceKm": 80.47774034052996,
        "gradePct": 0.9708008187195671,
        "smoothedEle": 121.16129215219625,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.352651,
        "lng": 121.325102,
        "ele": 120.5,
        "distanceKm": 80.52567639021755,
        "gradePct": 1.0299471319148858,
        "smoothedEle": 121.70209559525313,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3522231316173,
        "lng": 121.32491642869553,
        "ele": 121.60710153237065,
        "distanceKm": 80.5768861982208,
        "gradePct": 1.0863811208186394,
        "smoothedEle": 122.32928739809336,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3517952632346,
        "lng": 121.32473085739106,
        "ele": 122.71420306474097,
        "distanceKm": 80.62809602881968,
        "gradePct": 1.1316967952829498,
        "smoothedEle": 123.00903900610528,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3513673948519,
        "lng": 121.32454528608659,
        "ele": 123.82130459711162,
        "distanceKm": 80.67930588201388,
        "gradePct": 1.1798000252031422,
        "smoothedEle": 123.69684847347611,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.350939526469197,
        "lng": 121.3243597147821,
        "ele": 124.92840612948225,
        "distanceKm": 80.7305157578036,
        "gradePct": 1.2223126067744159,
        "smoothedEle": 124.34182627982904,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.35051170120066,
        "lng": 121.32417402617278,
        "ele": 125.95501635565593,
        "distanceKm": 80.78172563400648,
        "gradePct": 1.258631767818147,
        "smoothedEle": 124.98214861635829,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.350084,
        "lng": 121.323988,
        "ele": 126.75,
        "distanceKm": 80.83293548721349,
        "gradePct": 1.2805360072944512,
        "smoothedEle": 125.63260936213719,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.349672529625778,
        "lng": 121.32380530003567,
        "ele": 127.145454468256,
        "distanceKm": 80.88234460781777,
        "gradePct": 1.2895284268268843,
        "smoothedEle": 126.27032678860199,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.349261059251557,
        "lng": 121.32362260007133,
        "ele": 127.54090893651203,
        "distanceKm": 80.93175375025079,
        "gradePct": 1.2810016703340759,
        "smoothedEle": 126.90117158284727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.34884958887734,
        "lng": 121.323439900107,
        "ele": 127.93636340476803,
        "distanceKm": 80.9811629145108,
        "gradePct": 1.2374234853507056,
        "smoothedEle": 127.43250787019099,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.34843811850312,
        "lng": 121.32325720014266,
        "ele": 128.33181787302416,
        "distanceKm": 81.03057210059931,
        "gradePct": 1.1869862034632082,
        "smoothedEle": 127.9034893939838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.348026648128897,
        "lng": 121.32307450017834,
        "ele": 128.72727234128018,
        "distanceKm": 81.07998130851456,
        "gradePct": 1.1219815528074228,
        "smoothedEle": 128.32628243168799,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.34761483452884,
        "lng": 121.32289272198585,
        "ele": 128.87130170973688,
        "distanceKm": 81.12939045999673,
        "gradePct": 1.0367685487284228,
        "smoothedEle": 128.69788654401697,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.347203,
        "lng": 121.322711,
        "ele": 129,
        "distanceKm": 81.17879963506924,
        "gradePct": 0.9337397351654879,
        "smoothedEle": 129.0257914680022,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.3468075,
        "lng": 121.322532,
        "ele": 129.62500000000009,
        "distanceKm": 81.22642296026596,
        "gradePct": 0.8268126475289187,
        "smoothedEle": 129.3135472004159,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.346412,
        "lng": 121.322353,
        "ele": 130.25,
        "distanceKm": 81.27404630635516,
        "gradePct": 0.735690724810233,
        "smoothedEle": 129.56304946142865,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.345939,
        "lng": 121.322188,
        "ele": 129.75,
        "distanceKm": 81.32927327982812,
        "gradePct": 0.636952284899163,
        "smoothedEle": 129.8019655431004,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.34549603947611,
        "lng": 121.32206822634976,
        "ele": 129.9041472333328,
        "distanceKm": 81.38002344427505,
        "gradePct": 0.5545388116989761,
        "smoothedEle": 129.99021576803509,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.345053029607083,
        "lng": 121.32194866976232,
        "ele": 130.2406104249996,
        "distanceKm": 81.4307736095805,
        "gradePct": 0.5098140119735367,
        "smoothedEle": 130.23650787828572,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.344610019738056,
        "lng": 121.32182911317489,
        "ele": 130.57707361666638,
        "distanceKm": 81.48152378468234,
        "gradePct": 0.4648942781091938,
        "smoothedEle": 130.43693450673348,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.34416700986903,
        "lng": 121.32170955658744,
        "ele": 130.9135368083332,
        "distanceKm": 81.53227396958079,
        "gradePct": 0.42155039034182495,
        "smoothedEle": 130.60885224549972,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.343724,
        "lng": 121.32159,
        "ele": 131.25,
        "distanceKm": 81.583024164275,
        "gradePct": 0.3811099474070581,
        "smoothedEle": 130.74521819886948,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.343326666666666,
        "lng": 121.321479,
        "ele": 131.00000000000003,
        "distanceKm": 81.62863587587552,
        "gradePct": 0.3354537415415217,
        "smoothedEle": 130.80556930981592,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.342929333333334,
        "lng": 121.321368,
        "ele": 130.74999999999997,
        "distanceKm": 81.67424759590172,
        "gradePct": 0.28399403442630733,
        "smoothedEle": 130.82077321649135,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.342532,
        "lng": 121.321257,
        "ele": 130.5,
        "distanceKm": 81.71985932435497,
        "gradePct": 0.22383581832255786,
        "smoothedEle": 130.8550479719868,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.342036,
        "lng": 121.321128,
        "ele": 132,
        "distanceKm": 81.7765627627078,
        "gradePct": 0.13946903989596288,
        "smoothedEle": 130.83574916381377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.341637333333335,
        "lng": 121.32101566666667,
        "ele": 131.74999999999997,
        "distanceKm": 81.8223520411713,
        "gradePct": 0.0535740318531268,
        "smoothedEle": 130.735963517773,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.341238666666666,
        "lng": 121.32090333333333,
        "ele": 131.50000000000003,
        "distanceKm": 81.86814132826017,
        "gradePct": -0.04597256463047042,
        "smoothedEle": 130.5673102717536,
        "gradeBand": "descent"
      },
      {
        "lat": 23.34084,
        "lng": 121.320791,
        "ele": 131.25,
        "distanceKm": 81.91393062397351,
        "gradePct": -0.15040497310114298,
        "smoothedEle": 130.33489714460148,
        "gradeBand": "descent"
      },
      {
        "lat": 23.340466,
        "lng": 121.3206965,
        "ele": 130.87500000000006,
        "distanceKm": 81.95662207041623,
        "gradePct": -0.2378405568302662,
        "smoothedEle": 130.10137637083872,
        "gradeBand": "descent"
      },
      {
        "lat": 23.340092,
        "lng": 121.320602,
        "ele": 130.5,
        "distanceKm": 81.99931352300042,
        "gradePct": -0.32137818670799184,
        "smoothedEle": 129.87547434954783,
        "gradeBand": "descent"
      },
      {
        "lat": 23.339695,
        "lng": 121.320525,
        "ele": 130.5,
        "distanceKm": 82.04415249887236,
        "gradePct": -0.3973994932002388,
        "smoothedEle": 129.65458139915324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.339219307357034,
        "lng": 121.32044768947618,
        "ele": 130.1955505949648,
        "distanceKm": 82.0976328577851,
        "gradePct": -0.46638778311488205,
        "smoothedEle": 129.39066910383337,
        "gradeBand": "descent"
      },
      {
        "lat": 23.338743,
        "lng": 121.320375,
        "ele": 129,
        "distanceKm": 82.1511133182383,
        "gradePct": -0.5271878868958835,
        "smoothedEle": 129.04846497481475,
        "gradeBand": "descent"
      },
      {
        "lat": 23.338196,
        "lng": 121.320282,
        "ele": 127.75,
        "distanceKm": 82.21267368924433,
        "gradePct": -0.6005881476108319,
        "smoothedEle": 128.53951253632388,
        "gradeBand": "descent"
      },
      {
        "lat": 23.337645,
        "lng": 121.320217,
        "ele": 127,
        "distanceKm": 82.2743005407026,
        "gradePct": -0.6579680125827059,
        "smoothedEle": 128.03392662477475,
        "gradeBand": "descent"
      },
      {
        "lat": 23.337225375660886,
        "lng": 121.32016464920527,
        "ele": 127,
        "distanceKm": 82.32126583404992,
        "gradePct": -0.6878705140878214,
        "smoothedEle": 127.70371781375123,
        "gradeBand": "descent"
      },
      {
        "lat": 23.336806,
        "lng": 121.32011,
        "ele": 127.25,
        "distanceKm": 82.36823095768403,
        "gradePct": -0.6949757656528438,
        "smoothedEle": 127.45083288517333,
        "gradeBand": "descent"
      },
      {
        "lat": 23.336420535360535,
        "lng": 121.32006786961284,
        "ele": 127.18359277098749,
        "distanceKm": 82.4113080276517,
        "gradePct": -0.6744692693425727,
        "smoothedEle": 127.27975831707802,
        "gradeBand": "descent"
      },
      {
        "lat": 23.33603726768027,
        "lng": 121.32000543480642,
        "ele": 126.84179638549381,
        "distanceKm": 82.45439960688228,
        "gradePct": -0.6538105776312303,
        "smoothedEle": 127.05986373998981,
        "gradeBand": "descent"
      },
      {
        "lat": 23.335654,
        "lng": 121.319943,
        "ele": 126.5,
        "distanceKm": 82.49749118883416,
        "gradePct": -0.6176772337742555,
        "smoothedEle": 126.81200266795736,
        "gradeBand": "descent"
      },
      {
        "lat": 23.33519246288791,
        "lng": 121.31986477033648,
        "ele": 125.74231460303398,
        "distanceKm": 82.54942966473406,
        "gradePct": -0.5319590511955334,
        "smoothedEle": 126.64208982372979,
        "gradeBand": "descent"
      },
      {
        "lat": 23.334731,
        "lng": 121.319786,
        "ele": 125.25,
        "distanceKm": 82.60136850891318,
        "gradePct": -0.43588390824522055,
        "smoothedEle": 126.53596241687116,
        "gradeBand": "descent"
      },
      {
        "lat": 23.334288,
        "lng": 121.319747,
        "ele": 125.5,
        "distanceKm": 82.65078860710177,
        "gradePct": -0.35679665366050844,
        "smoothedEle": 126.47436171413452,
        "gradeBand": "descent"
      },
      {
        "lat": 23.333908333333333,
        "lng": 121.319738,
        "ele": 126.24999999999991,
        "distanceKm": 82.69301567190784,
        "gradePct": -0.3064208168093435,
        "smoothedEle": 126.43314140314249,
        "gradeBand": "descent"
      },
      {
        "lat": 23.333528666666666,
        "lng": 121.31972900000001,
        "ele": 127.00000000000009,
        "distanceKm": 82.73524273677104,
        "gradePct": -0.2601733921370601,
        "smoothedEle": 126.37710029300604,
        "gradeBand": "descent"
      },
      {
        "lat": 23.333149,
        "lng": 121.31972,
        "ele": 127.75,
        "distanceKm": 82.77746980169142,
        "gradePct": -0.2097974797834914,
        "smoothedEle": 126.29777245417372,
        "gradeBand": "descent"
      },
      {
        "lat": 23.33279412326052,
        "lng": 121.31973846211223,
        "ele": 126.22689438852623,
        "distanceKm": 82.81697534640668,
        "gradePct": -0.1757970409721961,
        "smoothedEle": 126.22087057896188,
        "gradeBand": "descent"
      },
      {
        "lat": 23.33244,
        "lng": 121.319771,
        "ele": 125,
        "distanceKm": 82.85649200621023,
        "gradePct": -0.15572164444277475,
        "smoothedEle": 126.16049430383255,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 82.85649200621023,
      "elevationGainM": 473.4397543314732,
      "elevationLossM": 377.38305941341434,
      "minimumElevationM": 28.75,
      "maximumElevationM": 237.5,
      "maximumSustainedGradePct": 4.469581019053422
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 100,
        "startDistanceKm": 0,
        "endDistanceKm": 4.905262799930054,
        "distanceKm": 4.905262799930054,
        "gainM": 50.161305141925475,
        "averageGradePct": 1.0226017888917336,
        "maximumGradePct": 1.55546602643653
      },
      {
        "startIndex": 184,
        "endIndex": 450,
        "startDistanceKm": 9.066472075012925,
        "endDistanceKm": 22.272704150254828,
        "distanceKm": 13.206232075241903,
        "gainM": 109.23095888548079,
        "averageGradePct": 0.8271167602018683,
        "maximumGradePct": 2.6249298423783536
      },
      {
        "startIndex": 528,
        "endIndex": 762,
        "startDistanceKm": 26.185628982742685,
        "endDistanceKm": 37.78903004880738,
        "distanceKm": 11.603401066064698,
        "gainM": 74.31567885293454,
        "averageGradePct": 0.6404646226551467,
        "maximumGradePct": 1.5472867629962417
      },
      {
        "startIndex": 817,
        "endIndex": 979,
        "startDistanceKm": 40.63365045229103,
        "endDistanceKm": 48.810223172863864,
        "distanceKm": 8.176572720572835,
        "gainM": 56.94821929700842,
        "averageGradePct": 0.6964803132457035,
        "maximumGradePct": 1.958381126738752
      },
      {
        "startIndex": 1149,
        "endIndex": 1335,
        "startDistanceKm": 57.33207650543953,
        "endDistanceKm": 66.53061967653896,
        "distanceKm": 9.19854317109943,
        "gainM": 139.62054841086672,
        "averageGradePct": 1.517855010449214,
        "maximumGradePct": 4.469581019053422
      },
      {
        "startIndex": 1435,
        "endIndex": 1664,
        "startDistanceKm": 71.3666582726865,
        "endDistanceKm": 82.85649200621023,
        "distanceKm": 11.489833733523739,
        "gainM": 45.16569721589666,
        "averageGradePct": 0.3930926962338653,
        "maximumGradePct": 1.2895284268268843
      }
    ]
  },
  "hualien-lake-route-193": {
    "routeId": "hualien-lake-route-193",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T17:10:38.057Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "15b6a6f910a2d07026898d2348ef39b9aec6276d4036c5c369a57e4bb18dbe68",
      "roadPolicyAuditSha256": "5bd450e7b3045bef3ca98719783db182043b1d6d4d9edb30c3bcbd06fe68a361",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "縣道193與台9丙沿丘陵、橋梁和鯉魚潭起伏，預設100公尺分析為爬升321公尺、最大持續坡度10.4%。比較500/200、750/300、1000/500公尺後，爬升依序為201、184、175公尺，最大持續坡度依序為4.3%、3.8%、3.1%；官方鯉魚潭自行車資料確認環潭與田園線路廊，500/200可排除橋梁與短距離SRTM尖峰並保留193丘陵起伏，因此採用最小合理視窗。此分析供路線規劃，不是道路測量。",
        "referenceUrl": "https://theme.erv-nsa.gov.tw/bike/zh-tw/themes/liyutan",
        "referenceLabel": "花東縱谷國家風景區鯉魚潭自行車官方資料"
      },
      "reviewedAt": "2026-07-29T17:40:00.000Z",
      "reviewerNote": "初版鯉魚潭景點座標導入42公尺footway與14公尺service，已改吸附環潭北路公共道路，並用花32公共道路控制返回路徑。最終raw的motorway、trunk、tunnel、service、highway=track、footway、pedestrian、path、steps、construction、私人與禁制道路全為0；waytags中的tracktype=grade1屬highway=cycleway、surface=paved的田園線自行車道，不是track道路。live OSM五點取樣5/5分別貼合台11丙、縣道193、台9丙與一般公共道路，最大0.0公尺、禁止0；不進米棧古道、河床、鯉魚山或湖畔木棧。最終500/200公尺bundle為43.8公里、爬升198公尺、最大4.3%。"
    },
    "waypoints": [
      {
        "name": "花蓮大橋縣道193主線",
        "lat": 23.923664,
        "lng": 121.597728,
        "role": "start"
      },
      {
        "name": "月眉縣道193主線",
        "lat": 23.86891,
        "lng": 121.553123,
        "role": "via"
      },
      {
        "name": "米棧大橋東端縣道193",
        "lat": 23.83917,
        "lng": 121.529313,
        "role": "via"
      },
      {
        "name": "壽豐台9北向主線",
        "lat": 23.868799,
        "lng": 121.5090329,
        "role": "via"
      },
      {
        "name": "鯉魚潭北側環潭公共道路",
        "lat": 23.9348728,
        "lng": 121.507174,
        "role": "via"
      },
      {
        "name": "干城花32公共道路",
        "lat": 23.9524926,
        "lng": 121.534682,
        "role": "via"
      },
      {
        "name": "花蓮大橋縣道193主線",
        "lat": 23.923664,
        "lng": 121.597728,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.923726,
        "lng": 121.597769,
        "ele": 11.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 11.519279485410523,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.92351,
        "lng": 121.5981562,
        "ele": 11.5,
        "distanceKm": 0.046105828356736385,
        "gradePct": 1.117316257888625,
        "smoothedEle": 12.034427401474563,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.923294,
        "lng": 121.5985434,
        "ele": 11.5,
        "distanceKm": 0.09221171289654741,
        "gradePct": 0.6669873680046776,
        "smoothedEle": 12.134319962251235,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.923078,
        "lng": 121.5989306,
        "ele": 11.5,
        "distanceKm": 0.13831765362103546,
        "gradePct": 0.45477112362888783,
        "smoothedEle": 12.14830823296002,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.922862,
        "lng": 121.5993178,
        "ele": 11.5,
        "distanceKm": 0.18442365052769422,
        "gradePct": 0.36711526727396493,
        "smoothedEle": 12.196326862961671,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.922646,
        "lng": 121.599705,
        "ele": 11.5,
        "distanceKm": 0.2305297036181261,
        "gradePct": 0.20409386340436517,
        "smoothedEle": 12.26858055422979,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9225,
        "lng": 121.600011,
        "ele": 14,
        "distanceKm": 0.26561439929976915,
        "gradePct": 0.1418343357870926,
        "smoothedEle": 12.360363153011399,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.922513,
        "lng": 121.60014,
        "ele": 16.75,
        "distanceKm": 0.2788057669472981,
        "gradePct": 0.1539269266937442,
        "smoothedEle": 12.413128623601514,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.922625,
        "lng": 121.600124,
        "ele": 14.25,
        "distanceKm": 0.2913653511856824,
        "gradePct": 0.165440358675216,
        "smoothedEle": 12.463366960555053,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.922722,
        "lng": 121.599732,
        "ele": 12,
        "distanceKm": 0.3326433811957004,
        "gradePct": 0.25141928409154346,
        "smoothedEle": 12.649425260328327,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9229537,
        "lng": 121.5993179,
        "ele": 12.375,
        "distanceKm": 0.38199277576625057,
        "gradePct": 0.3554930671780925,
        "smoothedEle": 12.904781281628324,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9231854,
        "lng": 121.5989038,
        "ele": 12.75,
        "distanceKm": 0.43134210593583167,
        "gradePct": 0.4632216946766948,
        "smoothedEle": 13.197149212009384,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9234171,
        "lng": 121.5984897,
        "ele": 13.125,
        "distanceKm": 0.48069137170388815,
        "gradePct": 0.5529289561202884,
        "smoothedEle": 13.526528954868452,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.923648800000002,
        "lng": 121.5980756,
        "ele": 13.5,
        "distanceKm": 0.5300405730698644,
        "gradePct": 0.5261584277574949,
        "smoothedEle": 13.690010110841829,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9238805,
        "lng": 121.5976615,
        "ele": 13.875,
        "distanceKm": 0.5793897100329987,
        "gradePct": 0.4918451035811468,
        "smoothedEle": 13.875002052851029,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9241122,
        "lng": 121.5972474,
        "ele": 14.25,
        "distanceKm": 0.6287387825931479,
        "gradePct": 0.5267576867451407,
        "smoothedEle": 14.235241311157386,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9243439,
        "lng": 121.5968333,
        "ele": 14.625,
        "distanceKm": 0.6780877907495502,
        "gradePct": 0.5300314810957625,
        "smoothedEle": 14.569214417883328,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9245756,
        "lng": 121.5964192,
        "ele": 15,
        "distanceKm": 0.7274367345016499,
        "gradePct": 0.5933887126208922,
        "smoothedEle": 14.868161691544755,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9248073,
        "lng": 121.5960051,
        "ele": 15.375,
        "distanceKm": 0.7767856138488917,
        "gradePct": 0.621934564014773,
        "smoothedEle": 15.109109372672327,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.925039,
        "lng": 121.595591,
        "ele": 15.75,
        "distanceKm": 0.8261344287907199,
        "gradePct": 0.5371050825768487,
        "smoothedEle": 15.290440167010175,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.925311500000003,
        "lng": 121.595131,
        "ele": 15.875,
        "distanceKm": 0.8818491988806455,
        "gradePct": 0.4181832144045917,
        "smoothedEle": 15.428366799550338,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.925584,
        "lng": 121.594671,
        "ele": 16,
        "distanceKm": 0.9375638861783672,
        "gradePct": 0.3721937161893897,
        "smoothedEle": 15.661995306799591,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.925842666666668,
        "lng": 121.59419,
        "ele": 15.75,
        "distanceKm": 0.9942861269614086,
        "gradePct": 0.4132693695515507,
        "smoothedEle": 15.999953241447809,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.92610133333333,
        "lng": 121.593709,
        "ele": 15.5,
        "distanceKm": 1.0510082833406311,
        "gradePct": 0.5503266144692758,
        "smoothedEle": 16.452670729765696,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.92636,
        "lng": 121.593228,
        "ele": 15.25,
        "distanceKm": 1.10773035531811,
        "gradePct": 0.704011814683364,
        "smoothedEle": 16.944917932841808,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.926554794186437,
        "lng": 121.59284459984023,
        "ele": 16.32621097479269,
        "distanceKm": 1.1523142198736975,
        "gradePct": 0.8032134076495485,
        "smoothedEle": 17.356306384818723,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.926749588372875,
        "lng": 121.59246119968046,
        "ele": 17.40242194958538,
        "distanceKm": 1.1968980330510353,
        "gradePct": 0.8604210135728023,
        "smoothedEle": 17.74164171802514,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.926944382559313,
        "lng": 121.5920777995207,
        "ele": 18.478632924378065,
        "distanceKm": 1.2414817948472228,
        "gradePct": 0.8722576948783518,
        "smoothedEle": 18.12115219876679,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.927127,
        "lng": 121.591688,
        "ele": 19.75,
        "distanceKm": 1.2860014599653304,
        "gradePct": 0.8716181160006615,
        "smoothedEle": 18.49958580705137,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9267695,
        "lng": 121.5914665,
        "ele": 20.125,
        "distanceKm": 1.3316860415446554,
        "gradePct": 0.8615495024757431,
        "smoothedEle": 18.889063111583273,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.926412,
        "lng": 121.591245,
        "ele": 20.5,
        "distanceKm": 1.377370653837774,
        "gradePct": 0.8430570748996564,
        "smoothedEle": 19.258981852334568,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.926056,
        "lng": 121.59104525000001,
        "ele": 20.3125,
        "distanceKm": 1.4218588783775226,
        "gradePct": 0.75058297507319,
        "smoothedEle": 19.455281941941376,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9257,
        "lng": 121.5908455,
        "ele": 20.125,
        "distanceKm": 1.4663471284601362,
        "gradePct": 0.624510763341201,
        "smoothedEle": 19.581538251560765,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.925344,
        "lng": 121.59064575,
        "ele": 19.9375,
        "distanceKm": 1.5108354040846537,
        "gradePct": 0.4804457026969279,
        "smoothedEle": 19.672195417627766,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.924988,
        "lng": 121.590446,
        "ele": 19.75,
        "distanceKm": 1.5553237052501139,
        "gradePct": 0.3260042382819749,
        "smoothedEle": 19.732471150348232,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.924535,
        "lng": 121.590097,
        "ele": 19.25,
        "distanceKm": 1.616932062651884,
        "gradePct": 0.2232328861714433,
        "smoothedEle": 19.880008605150902,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.924263,
        "lng": 121.589835,
        "ele": 18.25,
        "distanceKm": 1.6572299836861577,
        "gradePct": 0.2243920303891827,
        "smoothedEle": 20.004448130925148,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.923826,
        "lng": 121.589295,
        "ele": 19.25,
        "distanceKm": 1.7305357292362606,
        "gradePct": 0.30375984398385125,
        "smoothedEle": 20.306406426734664,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9235855,
        "lng": 121.588971,
        "ele": 20.125,
        "distanceKm": 1.772958267451172,
        "gradePct": 0.3691706416470152,
        "smoothedEle": 20.51304304217377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.923345,
        "lng": 121.588647,
        "ele": 21,
        "distanceKm": 1.8153808532715252,
        "gradePct": 0.4350970999111345,
        "smoothedEle": 20.74648802513654,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.923001,
        "lng": 121.588235,
        "ele": 22,
        "distanceKm": 1.87209769059083,
        "gradePct": 0.5336755835390063,
        "smoothedEle": 21.133041802336763,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.922573,
        "lng": 121.587764,
        "ele": 22.25,
        "distanceKm": 1.9396020524635538,
        "gradePct": 0.7056956656503746,
        "smoothedEle": 21.76195905589727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9222645,
        "lng": 121.587434,
        "ele": 22.375,
        "distanceKm": 1.987579329038306,
        "gradePct": 0.7857629530201307,
        "smoothedEle": 22.16502640753912,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.921956,
        "lng": 121.587104,
        "ele": 22.5,
        "distanceKm": 2.0355566616242995,
        "gradePct": 0.8176780881651509,
        "smoothedEle": 22.519352484640773,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9216645,
        "lng": 121.5868115,
        "ele": 22.75,
        "distanceKm": 2.0795400702911446,
        "gradePct": 0.7869264824411764,
        "smoothedEle": 22.776233116197236,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.921373,
        "lng": 121.586519,
        "ele": 23,
        "distanceKm": 2.123523524312258,
        "gradePct": 0.6814535099815997,
        "smoothedEle": 22.975067403809117,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.920957,
        "lng": 121.586116,
        "ele": 23.25,
        "distanceKm": 2.1853106569108,
        "gradePct": 0.5424003319457641,
        "smoothedEle": 23.23076747214821,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.920541,
        "lng": 121.585713,
        "ele": 23.5,
        "distanceKm": 2.2470978769717327,
        "gradePct": 0.453671426295125,
        "smoothedEle": 23.49410063339245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9202010625,
        "lng": 121.58537725,
        "ele": 23.71875,
        "distanceKm": 2.298023853766102,
        "gradePct": 0.4301464042897539,
        "smoothedEle": 23.72008484486181,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.919861125,
        "lng": 121.5850415,
        "ele": 23.9375,
        "distanceKm": 2.3489498907446125,
        "gradePct": 0.4318695393006791,
        "smoothedEle": 23.94403103906066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9195211875,
        "lng": 121.58470575,
        "ele": 24.15625,
        "distanceKm": 2.3998759879090685,
        "gradePct": 0.43423960115331506,
        "smoothedEle": 24.161323179152095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.91918125,
        "lng": 121.58437,
        "ele": 24.375,
        "distanceKm": 2.45080214525623,
        "gradePct": 0.432936910402876,
        "smoothedEle": 24.376412158490517,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9188413125,
        "lng": 121.58403425,
        "ele": 24.59375,
        "distanceKm": 2.5017283627879014,
        "gradePct": 0.4286867671620765,
        "smoothedEle": 24.593748880980897,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.918501375,
        "lng": 121.5836985,
        "ele": 24.8125,
        "distanceKm": 2.5526546405018107,
        "gradePct": 0.42633018351176016,
        "smoothedEle": 24.812498880995232,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9181614375,
        "lng": 121.58336275,
        "ele": 25.03125,
        "distanceKm": 2.603580978396858,
        "gradePct": 0.4271387516431183,
        "smoothedEle": 25.0312488810064,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.917821500000002,
        "lng": 121.583027,
        "ele": 25.25,
        "distanceKm": 2.654507376473676,
        "gradePct": 0.4288869935049405,
        "smoothedEle": 25.249998881020524,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9174815625,
        "lng": 121.58269125,
        "ele": 25.46875,
        "distanceKm": 2.705433834731165,
        "gradePct": 0.42954171185067974,
        "smoothedEle": 25.468748881035932,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.917141625,
        "lng": 121.5823555,
        "ele": 25.6875,
        "distanceKm": 2.7563603531673455,
        "gradePct": 0.4295412042521494,
        "smoothedEle": 25.687498881047105,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9168016875,
        "lng": 121.58201975,
        "ele": 25.90625,
        "distanceKm": 2.8072869317831426,
        "gradePct": 0.42954069666112954,
        "smoothedEle": 25.906248881061444,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.91646175,
        "lng": 121.581684,
        "ele": 26.125,
        "distanceKm": 2.8582135705774574,
        "gradePct": 0.4298325280475318,
        "smoothedEle": 26.125583559017432,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.916121812500002,
        "lng": 121.58134825,
        "ele": 26.34375,
        "distanceKm": 2.909140269548017,
        "gradePct": 0.4307090381127644,
        "smoothedEle": 26.34608759431117,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.915781875,
        "lng": 121.5810125,
        "ele": 26.5625,
        "distanceKm": 2.9600670286966264,
        "gradePct": 0.43217022831928775,
        "smoothedEle": 26.56776098987835,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.915441937500002,
        "lng": 121.58067675000001,
        "ele": 26.78125,
        "distanceKm": 3.0109938480200453,
        "gradePct": 0.43419482096929723,
        "smoothedEle": 26.790603748632044,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.915102,
        "lng": 121.580341,
        "ele": 27,
        "distanceKm": 3.061920727520078,
        "gradePct": 0.4364904744317691,
        "smoothedEle": 27.014615873507232,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.91477775,
        "lng": 121.5800255,
        "ele": 27.21875,
        "distanceKm": 3.1101748537518024,
        "gradePct": 0.4387564441996488,
        "smoothedEle": 27.228103808610005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9144535,
        "lng": 121.57971,
        "ele": 27.4375,
        "distanceKm": 3.158429033472817,
        "gradePct": 0.4410649714063123,
        "smoothedEle": 27.442761086432252,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.914129250000002,
        "lng": 121.5793945,
        "ele": 27.65625,
        "distanceKm": 3.2066832666828087,
        "gradePct": 0.44342298231220806,
        "smoothedEle": 27.65858770989981,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.913805,
        "lng": 121.57907900000001,
        "ele": 27.875,
        "distanceKm": 3.2549375533814655,
        "gradePct": 0.43865531209495284,
        "smoothedEle": 27.861209601383806,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.913480749999998,
        "lng": 121.5787635,
        "ele": 28.09375,
        "distanceKm": 3.3031918935688447,
        "gradePct": 0.42334008670349343,
        "smoothedEle": 28.043889675834645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9131565,
        "lng": 121.578448,
        "ele": 28.3125,
        "distanceKm": 3.351446287242123,
        "gradePct": 0.39717233156274606,
        "smoothedEle": 28.206043211425914,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.91283225,
        "lng": 121.5781325,
        "ele": 28.53125,
        "distanceKm": 3.3997007344019483,
        "gradePct": 0.35986426737800736,
        "smoothedEle": 28.347085484882413,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.912508,
        "lng": 121.577817,
        "ele": 28.75,
        "distanceKm": 3.4479552350480076,
        "gradePct": 0.31756295629680203,
        "smoothedEle": 28.467016449403857,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9121934,
        "lng": 121.5775096,
        "ele": 28.75,
        "distanceKm": 3.494860910960772,
        "gradePct": 0.2659719550375408,
        "smoothedEle": 28.544294360273614,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9118788,
        "lng": 121.5772022,
        "ele": 28.75,
        "distanceKm": 3.541766637552828,
        "gradePct": 0.2026170323831485,
        "smoothedEle": 28.57874988747334,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.911564199999997,
        "lng": 121.57689479999999,
        "ele": 28.75,
        "distanceKm": 3.5886724148248734,
        "gradePct": 0.12776599004807732,
        "smoothedEle": 28.570382938274665,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.911249599999998,
        "lng": 121.5765874,
        "ele": 28.75,
        "distanceKm": 3.635578242773836,
        "gradePct": 0.04146927464527291,
        "smoothedEle": 28.51919341995165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.910935,
        "lng": 121.57628,
        "ele": 28.75,
        "distanceKm": 3.682484121400413,
        "gradePct": -0.0493610730067839,
        "smoothedEle": 28.425181239780155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9106116,
        "lng": 121.5759668,
        "ele": 28.5,
        "distanceKm": 3.7305130563885815,
        "gradePct": -0.11322726636416815,
        "smoothedEle": 28.3440288146001,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9102882,
        "lng": 121.5756536,
        "ele": 28.25,
        "distanceKm": 3.778542044191618,
        "gradePct": -0.12723416203801274,
        "smoothedEle": 28.317721647391174,
        "gradeBand": "descent"
      },
      {
        "lat": 23.909964799999997,
        "lng": 121.5753404,
        "ele": 28,
        "distanceKm": 3.826571084807305,
        "gradePct": -0.09138164996098999,
        "smoothedEle": 28.34625985970014,
        "gradeBand": "descent"
      },
      {
        "lat": 23.909641399999998,
        "lng": 121.5750272,
        "ele": 27.75,
        "distanceKm": 3.874600178236368,
        "gradePct": -0.005713980192295404,
        "smoothedEle": 28.42955485282095,
        "gradeBand": "descent"
      },
      {
        "lat": 23.909318,
        "lng": 121.574714,
        "ele": 27.5,
        "distanceKm": 3.922629324476589,
        "gradePct": 0.10451764206257853,
        "smoothedEle": 28.566384901368192,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.908984666666665,
        "lng": 121.574398,
        "ele": 28.083333333333332,
        "distanceKm": 3.9716769386599453,
        "gradePct": 0.20979563296819828,
        "smoothedEle": 28.74107317327453,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.908651333333335,
        "lng": 121.574082,
        "ele": 28.666666666666668,
        "distanceKm": 4.020724607103084,
        "gradePct": 0.293664672530239,
        "smoothedEle": 28.93011530605592,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.908318,
        "lng": 121.573766,
        "ele": 29.25,
        "distanceKm": 4.069772329805969,
        "gradePct": 0.3561646143545488,
        "smoothedEle": 29.133511331326208,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.907964,
        "lng": 121.5734135,
        "ele": 29.875000000000007,
        "distanceKm": 4.123002587159959,
        "gradePct": 0.4014828118584891,
        "smoothedEle": 29.37067993965937,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.90761,
        "lng": 121.573061,
        "ele": 30.5,
        "distanceKm": 4.176232910582427,
        "gradePct": 0.4329797540471297,
        "smoothedEle": 29.62459255070522,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.907286714285714,
        "lng": 121.57274428571428,
        "ele": 30.392857142857142,
        "distanceKm": 4.224490475634844,
        "gradePct": 0.43888532338228853,
        "smoothedEle": 29.82350263487708,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.906963428571427,
        "lng": 121.57242757142856,
        "ele": 30.28571428571429,
        "distanceKm": 4.272748094412812,
        "gradePct": 0.40496166880991746,
        "smoothedEle": 29.956693255051285,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.906640142857142,
        "lng": 121.57211085714285,
        "ele": 30.17857142857143,
        "distanceKm": 4.321005766915132,
        "gradePct": 0.34665653504693567,
        "smoothedEle": 30.055096132261035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.906316857142855,
        "lng": 121.57179414285714,
        "ele": 30.07142857142857,
        "distanceKm": 4.369263493140821,
        "gradePct": 0.27028838448926756,
        "smoothedEle": 30.131924678917215,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.90599357142857,
        "lng": 121.57147742857143,
        "ele": 29.96428571428571,
        "distanceKm": 4.417521273090608,
        "gradePct": 0.19657059103027644,
        "smoothedEle": 30.18791786146974,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.905670285714283,
        "lng": 121.57116071428571,
        "ele": 29.857142857142858,
        "distanceKm": 4.465779106763508,
        "gradePct": 0.15200811136819134,
        "smoothedEle": 30.24147513074564,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.905347,
        "lng": 121.570844,
        "ele": 29.75,
        "distanceKm": 4.514036994158324,
        "gradePct": 0.14331035984810991,
        "smoothedEle": 30.327506732522714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.904964333333332,
        "lng": 121.570477,
        "ele": 30.166666666666668,
        "distanceKm": 4.570627095690897,
        "gradePct": 0.1673333737438368,
        "smoothedEle": 30.468173605415092,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.904581666666665,
        "lng": 121.57011,
        "ele": 30.583333333333332,
        "distanceKm": 4.627217270035381,
        "gradePct": 0.22634196415675925,
        "smoothedEle": 30.651362552953636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.904199,
        "lng": 121.569743,
        "ele": 31,
        "distanceKm": 4.6838075171907985,
        "gradePct": 0.30172922921304646,
        "smoothedEle": 30.877073682952982,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.90382825,
        "lng": 121.56937075,
        "ele": 31.25,
        "distanceKm": 4.7397678799141065,
        "gradePct": 0.3549821394647467,
        "smoothedEle": 31.101430664076858,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.903457500000002,
        "lng": 121.56899849999999,
        "ele": 31.5,
        "distanceKm": 4.79572831602969,
        "gradePct": 0.39650091279452543,
        "smoothedEle": 31.34243098798132,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.90308675,
        "lng": 121.56862625,
        "ele": 31.75,
        "distanceKm": 4.851688825534928,
        "gradePct": 0.39817311669200667,
        "smoothedEle": 31.54531398727404,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.902716,
        "lng": 121.568254,
        "ele": 32,
        "distanceKm": 4.907649408429258,
        "gradePct": 0.36471361854790063,
        "smoothedEle": 31.702088126461163,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.902504,
        "lng": 121.567981,
        "ele": 32,
        "distanceKm": 4.944062582888234,
        "gradePct": 0.34294019653169955,
        "smoothedEle": 31.805806710135176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.902282,
        "lng": 121.56772,
        "ele": 31.75,
        "distanceKm": 4.980302888524141,
        "gradePct": 0.3267146747544342,
        "smoothedEle": 31.92942888549929,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.902011,
        "lng": 121.567318,
        "ele": 32,
        "distanceKm": 5.031078375900134,
        "gradePct": 0.33455732798878096,
        "smoothedEle": 32.13970613132938,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9018475,
        "lng": 121.56699449999999,
        "ele": 32,
        "distanceKm": 5.068655782204858,
        "gradePct": 0.35481426837212,
        "smoothedEle": 32.3024756248006,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.901684,
        "lng": 121.566671,
        "ele": 32,
        "distanceKm": 5.106233224906912,
        "gradePct": 0.3551096562627973,
        "smoothedEle": 32.40833998651998,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.90153,
        "lng": 121.56634,
        "ele": 32,
        "distanceKm": 5.143989057691001,
        "gradePct": 0.33450380614066305,
        "smoothedEle": 32.474604894663095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.901333333333334,
        "lng": 121.56592866666666,
        "ele": 32.58333333333333,
        "distanceKm": 5.191177991360792,
        "gradePct": 0.2781935874435566,
        "smoothedEle": 32.530853277964965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.901136666666666,
        "lng": 121.56551733333333,
        "ele": 33.16666666666667,
        "distanceKm": 5.23836698139677,
        "gradePct": 0.22537463923368134,
        "smoothedEle": 32.622026578258414,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.90094,
        "lng": 121.565106,
        "ele": 33.75,
        "distanceKm": 5.285556027798517,
        "gradePct": 0.19025744781543336,
        "smoothedEle": 32.73060242757638,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.900686,
        "lng": 121.56462950000001,
        "ele": 33.12500000000001,
        "distanceKm": 5.341629400771134,
        "gradePct": 0.20426933897742197,
        "smoothedEle": 32.87900216088062,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.900432,
        "lng": 121.564153,
        "ele": 32.5,
        "distanceKm": 5.397702855956995,
        "gradePct": 0.24246035549149503,
        "smoothedEle": 33.028380604150996,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.900225,
        "lng": 121.5637085,
        "ele": 32.75,
        "distanceKm": 5.448415328236262,
        "gradePct": 0.21832026026313736,
        "smoothedEle": 33.081787036048325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.900018,
        "lng": 121.563264,
        "ele": 33,
        "distanceKm": 5.4991278649805455,
        "gradePct": 0.1307393955547943,
        "smoothedEle": 33.027999461364985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.899811,
        "lng": 121.5628195,
        "ele": 33.25,
        "distanceKm": 5.54984046618934,
        "gradePct": -0.016929324276631505,
        "smoothedEle": 32.867017608826266,
        "gradeBand": "descent"
      },
      {
        "lat": 23.899604,
        "lng": 121.562375,
        "ele": 33.5,
        "distanceKm": 5.600553131862142,
        "gradePct": -0.15183757873640133,
        "smoothedEle": 32.72770713559564,
        "gradeBand": "descent"
      },
      {
        "lat": 23.899393,
        "lng": 121.561927,
        "ele": 33.0625,
        "distanceKm": 5.65178532910968,
        "gradePct": -0.1946839514027941,
        "smoothedEle": 32.68884478683258,
        "gradeBand": "descent"
      },
      {
        "lat": 23.899182,
        "lng": 121.56147899999999,
        "ele": 32.625,
        "distanceKm": 5.703017592427942,
        "gradePct": -0.1561099769142905,
        "smoothedEle": 32.70343197427195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.898971,
        "lng": 121.561031,
        "ele": 32.1875,
        "distanceKm": 5.754249921815116,
        "gradePct": -0.05911192626469126,
        "smoothedEle": 32.73668073991791,
        "gradeBand": "descent"
      },
      {
        "lat": 23.89876,
        "lng": 121.560583,
        "ele": 31.75,
        "distanceKm": 5.8054823172732455,
        "gradePct": 0.03231152271139234,
        "smoothedEle": 32.7885911314977,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8985684,
        "lng": 121.5601732,
        "ele": 32.15,
        "distanceKm": 5.852274777728713,
        "gradePct": 0.07408015467996869,
        "smoothedEle": 32.83714445522695,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.898376799999998,
        "lng": 121.5597634,
        "ele": 32.550000000000004,
        "distanceKm": 5.899067293146592,
        "gradePct": 0.10562681879699544,
        "smoothedEle": 32.913560856636984,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8981852,
        "lng": 121.5593536,
        "ele": 32.949999999999996,
        "distanceKm": 5.945859863526305,
        "gradePct": 0.15594488664039105,
        "smoothedEle": 33.0431255317751,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8979936,
        "lng": 121.5589438,
        "ele": 33.35,
        "distanceKm": 5.992652488867813,
        "gradePct": 0.224155034069266,
        "smoothedEle": 33.22390158463732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.897802,
        "lng": 121.558534,
        "ele": 33.75,
        "distanceKm": 6.03944516917054,
        "gradePct": 0.3156919024033546,
        "smoothedEle": 33.455215856035636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.897597042653736,
        "lng": 121.55809992530595,
        "ele": 33.95133334603418,
        "distanceKm": 6.08911174559107,
        "gradePct": 0.42227663564646495,
        "smoothedEle": 33.74185582013292,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.897392085307477,
        "lng": 121.5576658506119,
        "ele": 34.152666692068365,
        "distanceKm": 6.138778384159259,
        "gradePct": 0.4890946070104821,
        "smoothedEle": 34.001706727552076,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.89718717679972,
        "lng": 121.55723174993739,
        "ele": 34.32926831481827,
        "distanceKm": 6.1884449400885835,
        "gradePct": 0.5135607586876882,
        "smoothedEle": 34.234767889679915,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.896982313999764,
        "lng": 121.55679762494782,
        "ele": 34.48272359568189,
        "distanceKm": 6.238111423326984,
        "gradePct": 0.49620842784712194,
        "smoothedEle": 34.44103949146473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.896777451199814,
        "lng": 121.55636349995825,
        "ele": 34.636178876545515,
        "distanceKm": 6.287777968696397,
        "gradePct": 0.44554304515001025,
        "smoothedEle": 34.62524430393867,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.89657258839986,
        "lng": 121.55592937496868,
        "ele": 34.78963415740913,
        "distanceKm": 6.337444576196703,
        "gradePct": 0.40354333701147344,
        "smoothedEle": 34.80181505112923,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.896367725599905,
        "lng": 121.55549524997913,
        "ele": 34.94308943827276,
        "distanceKm": 6.387111245825958,
        "gradePct": 0.35160908774981403,
        "smoothedEle": 34.93172768206932,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.896162862799954,
        "lng": 121.55506112498956,
        "ele": 35.09654471913638,
        "distanceKm": 6.4367779775860665,
        "gradePct": 0.2664331558288813,
        "smoothedEle": 34.968367823162204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.895958,
        "lng": 121.554627,
        "ele": 35.25,
        "distanceKm": 6.486444771475627,
        "gradePct": 0.17895872093837523,
        "smoothedEle": 34.97821714291993,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.895745,
        "lng": 121.55418,
        "ele": 35.5,
        "distanceKm": 6.537690158669387,
        "gradePct": 0.0748731238236821,
        "smoothedEle": 34.95220366649276,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.895532,
        "lng": 121.553733,
        "ele": 35.75,
        "distanceKm": 6.588935612239419,
        "gradePct": -0.03128224174774982,
        "smoothedEle": 34.87050907015477,
        "gradeBand": "descent"
      },
      {
        "lat": 23.895369731130142,
        "lng": 121.55340273266819,
        "ele": 35.07295921011064,
        "distanceKm": 6.6270530401095575,
        "gradePct": -0.0927408557000077,
        "smoothedEle": 34.77571183093816,
        "gradeBand": "descent"
      },
      {
        "lat": 23.895203,
        "lng": 121.553075,
        "ele": 34.5,
        "distanceKm": 6.665182493737131,
        "gradePct": -0.16147432962286942,
        "smoothedEle": 34.65105200510121,
        "gradeBand": "descent"
      },
      {
        "lat": 23.89472,
        "lng": 121.552623,
        "ele": 34.5,
        "distanceKm": 6.735865482149516,
        "gradePct": -0.31242058364724173,
        "smoothedEle": 34.32828875192532,
        "gradeBand": "descent"
      },
      {
        "lat": 23.894368571428572,
        "lng": 121.55228171428571,
        "ele": 34.107142857142854,
        "distanceKm": 6.788123368833153,
        "gradePct": -0.4259439024497272,
        "smoothedEle": 34.019916129337496,
        "gradeBand": "descent"
      },
      {
        "lat": 23.89401714285714,
        "lng": 121.55194042857143,
        "ele": 33.714285714285715,
        "distanceKm": 6.840381318115876,
        "gradePct": -0.5441441200680077,
        "smoothedEle": 33.643848331864454,
        "gradeBand": "descent"
      },
      {
        "lat": 23.893665714285714,
        "lng": 121.55159914285714,
        "ele": 33.32142857142857,
        "distanceKm": 6.892639329996322,
        "gradePct": -0.6331670836651635,
        "smoothedEle": 33.259340317776534,
        "gradeBand": "descent"
      },
      {
        "lat": 23.893314285714286,
        "lng": 121.55125785714286,
        "ele": 32.92857142857143,
        "distanceKm": 6.944897404474016,
        "gradePct": -0.6835186895179278,
        "smoothedEle": 32.90795420090322,
        "gradeBand": "descent"
      },
      {
        "lat": 23.89296285714286,
        "lng": 121.55091657142857,
        "ele": 32.535714285714285,
        "distanceKm": 6.997155541548186,
        "gradePct": -0.7210421927323651,
        "smoothedEle": 32.51283284234753,
        "gradeBand": "descent"
      },
      {
        "lat": 23.892611428571428,
        "lng": 121.55057528571429,
        "ele": 32.142857142857146,
        "distanceKm": 7.049413741218356,
        "gradePct": -0.7431001247400382,
        "smoothedEle": 32.091188625842435,
        "gradeBand": "descent"
      },
      {
        "lat": 23.89226,
        "lng": 121.550234,
        "ele": 31.75,
        "distanceKm": 7.101672003483164,
        "gradePct": -0.7654755516031717,
        "smoothedEle": 31.667653029908802,
        "gradeBand": "descent"
      },
      {
        "lat": 23.891914684957204,
        "lng": 121.54989432851255,
        "ele": 31.309097238513072,
        "distanceKm": 7.153314080192141,
        "gradePct": -0.7738855352501084,
        "smoothedEle": 31.296545034396097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.891569369914407,
        "lng": 121.5495546570251,
        "ele": 30.868194477026144,
        "distanceKm": 7.204956218552206,
        "gradePct": -0.7386993208631492,
        "smoothedEle": 30.972494597567003,
        "gradeBand": "descent"
      },
      {
        "lat": 23.891224091702206,
        "lng": 121.54921494107978,
        "ele": 30.39382780262256,
        "distanceKm": 7.256598396390844,
        "gradePct": -0.6687287368649381,
        "smoothedEle": 30.69550194436283,
        "gradeBand": "descent"
      },
      {
        "lat": 23.890879,
        "lng": 121.548875,
        "ele": 29.75,
        "distanceKm": 7.308240534754625,
        "gradePct": -0.5901264436743284,
        "smoothedEle": 30.440197655190175,
        "gradeBand": "descent"
      },
      {
        "lat": 23.890569,
        "lng": 121.54855275,
        "ele": 29.8125,
        "distanceKm": 7.355796737193925,
        "gradePct": -0.5335646893102886,
        "smoothedEle": 30.21383717449119,
        "gradeBand": "descent"
      },
      {
        "lat": 23.890259,
        "lng": 121.54823049999999,
        "ele": 29.875,
        "distanceKm": 7.403352993725884,
        "gradePct": -0.4920644912122145,
        "smoothedEle": 29.998425727326207,
        "gradeBand": "descent"
      },
      {
        "lat": 23.889949,
        "lng": 121.54790824999999,
        "ele": 29.9375,
        "distanceKm": 7.450909304348204,
        "gradePct": -0.464007233162373,
        "smoothedEle": 29.798002006378418,
        "gradeBand": "descent"
      },
      {
        "lat": 23.889639,
        "lng": 121.547586,
        "ele": 30,
        "distanceKm": 7.4984656690615745,
        "gradePct": -0.41449190712534506,
        "smoothedEle": 29.65953804316254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.889254333333334,
        "lng": 121.54721633333332,
        "ele": 29.666666666666668,
        "distanceKm": 7.555404746517609,
        "gradePct": -0.3169578815020128,
        "smoothedEle": 29.58178722905394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.888869666666665,
        "lng": 121.54684666666667,
        "ele": 29.333333333333332,
        "distanceKm": 7.6123438977411295,
        "gradePct": -0.18264906359705063,
        "smoothedEle": 29.59523587947844,
        "gradeBand": "descent"
      },
      {
        "lat": 23.888485,
        "lng": 121.546477,
        "ele": 29,
        "distanceKm": 7.669283122732455,
        "gradePct": -0.04283841172981614,
        "smoothedEle": 29.658828416960624,
        "gradeBand": "descent"
      },
      {
        "lat": 23.887968,
        "lng": 121.546109,
        "ele": 29.25,
        "distanceKm": 7.737873919119507,
        "gradePct": 0.09954872000328044,
        "smoothedEle": 29.804823168999356,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.88754660502995,
        "lng": 121.5459065517516,
        "ele": 29.5231068526432,
        "distanceKm": 7.7890524361523665,
        "gradePct": 0.18840855165382725,
        "smoothedEle": 29.966551693812658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.887115653066733,
        "lng": 121.54572707061361,
        "ele": 29.975096897972232,
        "distanceKm": 7.840329024492676,
        "gradePct": 0.2749116131267557,
        "smoothedEle": 30.176314276875615,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.886684701103512,
        "lng": 121.5455475894756,
        "ele": 30.427086943301266,
        "distanceKm": 7.89160563446565,
        "gradePct": 0.3262711163061948,
        "smoothedEle": 30.35888386908689,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.886253749140295,
        "lng": 121.5453681083376,
        "ele": 30.8790769886303,
        "distanceKm": 7.942882266069732,
        "gradePct": 0.3261805040021703,
        "smoothedEle": 30.473010985027322,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.885822797177074,
        "lng": 121.54518862719961,
        "ele": 31.331067033959336,
        "distanceKm": 7.99415891930484,
        "gradePct": 0.23865384449918794,
        "smoothedEle": 30.46474901550893,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.885391845213856,
        "lng": 121.5450091460616,
        "ele": 31.783057079288376,
        "distanceKm": 8.04543559417096,
        "gradePct": 0.06854001121519454,
        "smoothedEle": 30.331576163205632,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.884960883425663,
        "lng": 121.54482969479373,
        "ele": 31.48227690732852,
        "distanceKm": 8.096712230948262,
        "gradePct": -0.13754827930196523,
        "smoothedEle": 30.095153133677663,
        "gradeBand": "descent"
      },
      {
        "lat": 23.884529912569246,
        "lng": 121.5446502710953,
        "ele": 30.48670768049639,
        "distanceKm": 8.147988834402994,
        "gradePct": -0.32990549044043654,
        "smoothedEle": 29.812377206454883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.884098941712832,
        "lng": 121.54447084739687,
        "ele": 29.49113845366426,
        "distanceKm": 8.199265459474981,
        "gradePct": -0.4841192403847656,
        "smoothedEle": 29.483248120169133,
        "gradeBand": "descent"
      },
      {
        "lat": 23.883667970856415,
        "lng": 121.54429142369844,
        "ele": 28.495569226832146,
        "distanceKm": 8.250542106163627,
        "gradePct": -0.6001327746659871,
        "smoothedEle": 29.10776583575433,
        "gradeBand": "descent"
      },
      {
        "lat": 23.883237,
        "lng": 121.544112,
        "ele": 27.5,
        "distanceKm": 8.301818774468915,
        "gradePct": -0.6905308400572607,
        "smoothedEle": 28.685930314141515,
        "gradeBand": "descent"
      },
      {
        "lat": 23.88282448852077,
        "lng": 121.54393293913935,
        "ele": 27.5,
        "distanceKm": 8.35116894598931,
        "gradePct": -0.7553349730022711,
        "smoothedEle": 28.281295089812723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.882413,
        "lng": 121.543751,
        "ele": 27.5,
        "distanceKm": 8.400522373738433,
        "gradePct": -0.76353805930252,
        "smoothedEle": 27.94696802530137,
        "gradeBand": "descent"
      },
      {
        "lat": 23.881956,
        "lng": 121.543517,
        "ele": 27.5,
        "distanceKm": 8.456632382522162,
        "gradePct": -0.686143519310314,
        "smoothedEle": 27.685376187323456,
        "gradeBand": "descent"
      },
      {
        "lat": 23.88160733333333,
        "lng": 121.543279,
        "ele": 27.5,
        "distanceKm": 8.502334541739849,
        "gradePct": -0.5566236055992315,
        "smoothedEle": 27.568454189467246,
        "gradeBand": "descent"
      },
      {
        "lat": 23.881258666666668,
        "lng": 121.543041,
        "ele": 27.5,
        "distanceKm": 8.548036735479258,
        "gradePct": -0.3860390053734739,
        "smoothedEle": 27.53489890880077,
        "gradeBand": "descent"
      },
      {
        "lat": 23.88091,
        "lng": 121.542803,
        "ele": 27.5,
        "distanceKm": 8.59373896374065,
        "gradePct": -0.22031434603854094,
        "smoothedEle": 27.552291107100334,
        "gradeBand": "descent"
      },
      {
        "lat": 23.880538666666666,
        "lng": 121.54252916666667,
        "ele": 27.541666666666668,
        "distanceKm": 8.643539447328317,
        "gradePct": -0.08560883259296079,
        "smoothedEle": 27.57519941405906,
        "gradeBand": "descent"
      },
      {
        "lat": 23.880167333333333,
        "lng": 121.54225533333334,
        "ele": 27.583333333333332,
        "distanceKm": 8.693339975579145,
        "gradePct": 0.007169268692861079,
        "smoothedEle": 27.605803951341294,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.879796,
        "lng": 121.5419815,
        "ele": 27.625,
        "distanceKm": 8.74314054849418,
        "gradePct": 0.05441242498535478,
        "smoothedEle": 27.64731861746506,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.87942466666667,
        "lng": 121.54170766666667,
        "ele": 27.666666666666668,
        "distanceKm": 8.792941166071724,
        "gradePct": 0.07469239585935154,
        "smoothedEle": 27.701372293157153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.879053333333335,
        "lng": 121.54143383333334,
        "ele": 27.708333333333332,
        "distanceKm": 8.842741828311057,
        "gradePct": 0.10223825083601348,
        "smoothedEle": 27.779309009629635,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.878682,
        "lng": 121.54116,
        "ele": 27.75,
        "distanceKm": 8.892542535212902,
        "gradePct": 0.15024346626033547,
        "smoothedEle": 27.905800822927347,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.878249,
        "lng": 121.5408795,
        "ele": 27.875000000000004,
        "distanceKm": 8.948503230690848,
        "gradePct": 0.22612173450810047,
        "smoothedEle": 28.105382750930794,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.877816,
        "lng": 121.540599,
        "ele": 28,
        "distanceKm": 9.004463974797567,
        "gradePct": 0.3127277412937357,
        "smoothedEle": 28.3448606659965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.877556592045334,
        "lng": 121.54101987591771,
        "ele": 28.167794613048585,
        "distanceKm": 9.056071547711927,
        "gradePct": 0.373928830169612,
        "smoothedEle": 28.561023626680115,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.87730739469689,
        "lng": 121.54144891727847,
        "ele": 28.69519640869906,
        "distanceKm": 9.107752174061025,
        "gradePct": 0.4077304813667017,
        "smoothedEle": 28.77550644826936,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.877058197348447,
        "lng": 121.54187795863923,
        "ele": 29.22259820434952,
        "distanceKm": 9.15943287130623,
        "gradePct": 0.4201858358454459,
        "smoothedEle": 28.992526630332105,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.876809,
        "lng": 121.542307,
        "ele": 29.75,
        "distanceKm": 9.211113639447305,
        "gradePct": 0.41643116589294815,
        "smoothedEle": 29.2055757162318,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8765535,
        "lng": 121.5427305,
        "ele": 29.75,
        "distanceKm": 9.262702372428713,
        "gradePct": 0.4124321567637971,
        "smoothedEle": 29.413406917727702,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.876298,
        "lng": 121.543154,
        "ele": 29.75,
        "distanceKm": 9.314291176357248,
        "gradePct": 0.40499505908054056,
        "smoothedEle": 29.61295547361395,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.876065,
        "lng": 121.543543875,
        "ele": 29.8125,
        "distanceKm": 9.36164888045052,
        "gradePct": 0.3819979160349561,
        "smoothedEle": 29.765657750818157,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.875832,
        "lng": 121.54393375,
        "ele": 29.875,
        "distanceKm": 9.409006644276232,
        "gradePct": 0.3409983912867739,
        "smoothedEle": 29.878886610198453,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.875599,
        "lng": 121.544323625,
        "ele": 29.9375,
        "distanceKm": 9.456364467834645,
        "gradePct": 0.2823840096815885,
        "smoothedEle": 29.952641952452037,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.875366,
        "lng": 121.5447135,
        "ele": 30,
        "distanceKm": 9.503722351123253,
        "gradePct": 0.22559779674260738,
        "smoothedEle": 30.023270223732855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.875132999999998,
        "lng": 121.545103375,
        "ele": 30.0625,
        "distanceKm": 9.551080294142535,
        "gradePct": 0.19562306945952093,
        "smoothedEle": 30.122826072263617,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8749,
        "lng": 121.54549325,
        "ele": 30.125,
        "distanceKm": 9.598438296892967,
        "gradePct": 0.19819127652378013,
        "smoothedEle": 30.25000103774613,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.874667,
        "lng": 121.545883125,
        "ele": 30.1875,
        "distanceKm": 9.645796359372047,
        "gradePct": 0.23200040377947045,
        "smoothedEle": 30.400183928120814,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.874434,
        "lng": 121.546273,
        "ele": 30.25,
        "distanceKm": 9.693154481580034,
        "gradePct": 0.28293260695696454,
        "smoothedEle": 30.573374801716117,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.87419566666667,
        "lng": 121.54670526666666,
        "ele": 30.583333333333336,
        "distanceKm": 9.744479056689856,
        "gradePct": 0.339236766279677,
        "smoothedEle": 30.787422486138002,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.873957333333333,
        "lng": 121.54713753333333,
        "ele": 30.91666666666667,
        "distanceKm": 9.79580370109933,
        "gradePct": 0.3929245692288209,
        "smoothedEle": 31.02877524462607,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.873719,
        "lng": 121.5475698,
        "ele": 31.249999999999996,
        "distanceKm": 9.84712841480867,
        "gradePct": 0.4461889168738756,
        "smoothedEle": 31.297433151062016,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.873480666666666,
        "lng": 121.54800206666667,
        "ele": 31.583333333333332,
        "distanceKm": 9.898453197815192,
        "gradePct": 0.49896166593011765,
        "smoothedEle": 31.59339627931097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.873242333333334,
        "lng": 121.54843433333333,
        "ele": 31.916666666666668,
        "distanceKm": 9.949778050119107,
        "gradePct": 0.5521619215907505,
        "smoothedEle": 31.916664703252234,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.873004,
        "lng": 121.5488666,
        "ele": 32.25,
        "distanceKm": 10.001102971720002,
        "gradePct": 0.5967419474537937,
        "smoothedEle": 32.24999803660086,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.872765666666666,
        "lng": 121.54929886666666,
        "ele": 32.583333333333336,
        "distanceKm": 10.052427962617463,
        "gradePct": 0.6276692518793472,
        "smoothedEle": 32.58333136995084,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.872527333333334,
        "lng": 121.54973113333334,
        "ele": 32.916666666666664,
        "distanceKm": 10.103753022811704,
        "gradePct": 0.6449437979311132,
        "smoothedEle": 32.916664703307724,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.872289,
        "lng": 121.5501634,
        "ele": 33.25,
        "distanceKm": 10.155078152300039,
        "gradePct": 0.6494557224679275,
        "smoothedEle": 33.249998036657715,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.872050666666667,
        "lng": 121.55059566666667,
        "ele": 33.583333333333336,
        "distanceKm": 10.206403351082681,
        "gradePct": 0.6494548456182466,
        "smoothedEle": 33.58333137000635,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.871812333333335,
        "lng": 121.55102793333333,
        "ele": 33.91666666666667,
        "distanceKm": 10.257728619159217,
        "gradePct": 0.6925806516133715,
        "smoothedEle": 34.00291806902429,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.871574,
        "lng": 121.5514602,
        "ele": 34.25000000000001,
        "distanceKm": 10.309053956529233,
        "gradePct": 0.8456831846306652,
        "smoothedEle": 34.64245822206768,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.871335666666667,
        "lng": 121.55189246666667,
        "ele": 34.58333333333333,
        "distanceKm": 10.360379363192942,
        "gradePct": 1.0726343243782035,
        "smoothedEle": 35.429695588557756,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.87109733333333,
        "lng": 121.55232473333334,
        "ele": 34.916666666666664,
        "distanceKm": 10.411704839147658,
        "gradePct": 1.3808715329304646,
        "smoothedEle": 36.388414372713775,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.870859,
        "lng": 121.552757,
        "ele": 35.25,
        "distanceKm": 10.463030384393596,
        "gradePct": 1.579953958258829,
        "smoothedEle": 37.22888871251344,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.870521121813617,
        "lng": 121.55313881775368,
        "ele": 38.047406640619435,
        "distanceKm": 10.51705707634914,
        "gradePct": 1.6134974274682092,
        "smoothedEle": 37.9922062197509,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.870175,
        "lng": 121.553512,
        "ele": 40.25,
        "distanceKm": 10.571105177909347,
        "gradePct": 1.5411858423881117,
        "smoothedEle": 38.7124169019096,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.869794,
        "lng": 121.554046,
        "ele": 42.5,
        "distanceKm": 10.639976343454858,
        "gradePct": 1.4326557368308082,
        "smoothedEle": 39.71668193975694,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.869522,
        "lng": 121.553807,
        "ele": 41.75,
        "distanceKm": 10.678775551842884,
        "gradePct": 1.4370392806582204,
        "smoothedEle": 40.325423277212735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.869209,
        "lng": 121.553395,
        "ele": 41,
        "distanceKm": 10.733240540171257,
        "gradePct": 1.555010373102894,
        "smoothedEle": 41.31787752874351,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.868944,
        "lng": 121.553157,
        "ele": 40.5,
        "distanceKm": 10.771371553958405,
        "gradePct": 1.642125436660925,
        "smoothedEle": 42.00055201547727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.869303,
        "lng": 121.553522,
        "ele": 41.25,
        "distanceKm": 10.825878884092214,
        "gradePct": 1.6998901562147697,
        "smoothedEle": 42.9108960264919,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.869085,
        "lng": 121.5538045,
        "ele": 42.00000000000002,
        "distanceKm": 10.86346588839369,
        "gradePct": 1.7270056587622689,
        "smoothedEle": 43.53923317333569,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.868867,
        "lng": 121.554087,
        "ele": 42.75,
        "distanceKm": 10.901052929656638,
        "gradePct": 1.634000729688213,
        "smoothedEle": 43.99936034775498,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.868534,
        "lng": 121.554485,
        "ele": 44.25,
        "distanceKm": 10.955906792222427,
        "gradePct": 1.4377867504222814,
        "smoothedEle": 44.599253824960535,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.868237,
        "lng": 121.554878,
        "ele": 46.5,
        "distanceKm": 11.007749211823098,
        "gradePct": 1.2406525719867512,
        "smoothedEle": 45.089411829447755,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.867926,
        "lng": 121.555237,
        "ele": 48,
        "distanceKm": 11.058033573547263,
        "gradePct": 1.0435135388067922,
        "smoothedEle": 45.53544893797567,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.867671,
        "lng": 121.55559,
        "ele": 49.25,
        "distanceKm": 11.10377687934168,
        "gradePct": 0.9366901150429566,
        "smoothedEle": 45.90253026942976,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86732735088383,
        "lng": 121.55519615494552,
        "ele": 48.04336686737914,
        "distanceKm": 11.15913075032597,
        "gradePct": 0.858524436511686,
        "smoothedEle": 46.346784471071565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.866984,
        "lng": 121.554802,
        "ele": 46,
        "distanceKm": 11.21448462336644,
        "gradePct": 0.7884952209854382,
        "smoothedEle": 46.726147356899034,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.866650893253915,
        "lng": 121.55442959229019,
        "ele": 45,
        "distanceKm": 11.267456324678962,
        "gradePct": 0.6332046163654953,
        "smoothedEle": 46.87747395691438,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.866321505579204,
        "lng": 121.55405321763975,
        "ele": 45.269350123930195,
        "distanceKm": 11.320430457459317,
        "gradePct": 0.43335185783963026,
        "smoothedEle": 46.90289079934031,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.865992039600087,
        "lng": 121.55367692615016,
        "ele": 46.2185158768323,
        "distanceKm": 11.373404572503754,
        "gradePct": 0.21988237951018952,
        "smoothedEle": 46.88437361121869,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.865662573620966,
        "lng": 121.55330063466057,
        "ele": 47.167681629734446,
        "distanceKm": 11.426378757863713,
        "gradePct": 0.23552371914429046,
        "smoothedEle": 47.23117329482044,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86533284447248,
        "lng": 121.55292462060471,
        "ele": 47.09476519200047,
        "distanceKm": 11.479352888740154,
        "gradePct": 0.38076005970435883,
        "smoothedEle": 47.644702014863725,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86500298720565,
        "lng": 121.55254874173417,
        "ele": 47.53681174392856,
        "distanceKm": 11.532327031364199,
        "gradePct": 0.5650142051198002,
        "smoothedEle": 48.02876074281148,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.864673,
        "lng": 121.552173,
        "ele": 48.75,
        "distanceKm": 11.585301190173924,
        "gradePct": 0.7084561156034883,
        "smoothedEle": 48.379167988529694,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.864214,
        "lng": 121.551657,
        "ele": 51.5,
        "distanceKm": 11.658500680484517,
        "gradePct": 0.33713366951853396,
        "smoothedEle": 48.15619203509698,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.863872,
        "lng": 121.551343,
        "ele": 50.125,
        "distanceKm": 11.708156759754033,
        "gradePct": -0.09730531189213955,
        "smoothedEle": 47.65891738643479,
        "gradeBand": "descent"
      },
      {
        "lat": 23.86353,
        "lng": 121.551029,
        "ele": 48.75,
        "distanceKm": 11.757812893240823,
        "gradePct": -0.49899564794443124,
        "smoothedEle": 47.19935033363419,
        "gradeBand": "descent"
      },
      {
        "lat": 23.863131,
        "lng": 121.550685,
        "ele": 48.5,
        "distanceKm": 11.814311532202993,
        "gradePct": -0.8178070877969639,
        "smoothedEle": 46.65518422667371,
        "gradeBand": "descent"
      },
      {
        "lat": 23.862780663797622,
        "lng": 121.55040775117777,
        "ele": 45.63086730810548,
        "distanceKm": 11.862399033143358,
        "gradePct": -0.9452877561405229,
        "smoothedEle": 46.226576953496235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.86243,
        "lng": 121.550131,
        "ele": 42,
        "distanceKm": 11.910486459062888,
        "gradePct": -0.9197195572181297,
        "smoothedEle": 45.79791692659964,
        "gradeBand": "descent"
      },
      {
        "lat": 23.862120666666666,
        "lng": 121.54977633333333,
        "ele": 42.333333333333336,
        "distanceKm": 11.960324931987648,
        "gradePct": -0.8206677055051083,
        "smoothedEle": 45.53382024518566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.861811333333335,
        "lng": 121.54942166666666,
        "ele": 42.666666666666664,
        "distanceKm": 12.010163467243018,
        "gradePct": -0.578581597069244,
        "smoothedEle": 45.5379730809766,
        "gradeBand": "descent"
      },
      {
        "lat": 23.861502,
        "lng": 121.549067,
        "ele": 43,
        "distanceKm": 12.060002064828852,
        "gradePct": -0.27312697629943117,
        "smoothedEle": 45.701687347829164,
        "gradeBand": "descent"
      },
      {
        "lat": 23.861185,
        "lng": 121.5487725,
        "ele": 45.125,
        "distanceKm": 12.106255301393523,
        "gradePct": 0.06545556234342009,
        "smoothedEle": 45.96654535733211,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.860868,
        "lng": 121.548478,
        "ele": 47.25,
        "distanceKm": 12.152508585412175,
        "gradePct": 0.39062461513252483,
        "smoothedEle": 46.35648870582079,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.860535,
        "lng": 121.548187,
        "ele": 48.50000000000002,
        "distanceKm": 12.199908673916362,
        "gradePct": 0.657564906483414,
        "smoothedEle": 46.85224840509183,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.860202,
        "lng": 121.547896,
        "ele": 49.75,
        "distanceKm": 12.247308809913259,
        "gradePct": 0.7858604062689977,
        "smoothedEle": 47.231712225426364,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.859692,
        "lng": 121.547439,
        "ele": 50.75,
        "distanceKm": 12.320628174117028,
        "gradePct": 0.8105971883893403,
        "smoothedEle": 47.708911802994486,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8593965421742,
        "lng": 121.5471229047923,
        "ele": 48.931309049728696,
        "distanceKm": 12.366591373681619,
        "gradePct": 0.6578092307310707,
        "smoothedEle": 47.819399695581495,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8590913538839,
        "lng": 121.54681735388391,
        "ele": 47.690721384365126,
        "distanceKm": 12.412603316088491,
        "gradePct": 0.3824941841670558,
        "smoothedEle": 47.71886427543842,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.858786,
        "lng": 121.546512,
        "ele": 46.5,
        "distanceKm": 12.458615365877876,
        "gradePct": 0.08575211964289084,
        "smoothedEle": 47.47680526064156,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.858426059308613,
        "lng": 121.5462077144738,
        "ele": 46.22032580311887,
        "distanceKm": 12.509205933356435,
        "gradePct": -0.2622445489595409,
        "smoothedEle": 47.11008097386935,
        "gradeBand": "descent"
      },
      {
        "lat": 23.858066118617227,
        "lng": 121.54590342894758,
        "ele": 45.940651606237736,
        "distanceKm": 12.559796553421418,
        "gradePct": -0.5451674985430499,
        "smoothedEle": 46.712731079901204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.85770617792584,
        "lng": 121.54559914342138,
        "ele": 45.66097740935661,
        "distanceKm": 12.610387226071284,
        "gradePct": -0.6691551727610789,
        "smoothedEle": 46.38539605414099,
        "gradeBand": "descent"
      },
      {
        "lat": 23.85734584411842,
        "lng": 121.54529541985191,
        "ele": 45.5,
        "distanceKm": 12.660977630137642,
        "gradePct": -0.5785365656184943,
        "smoothedEle": 46.302608390355836,
        "gradeBand": "descent"
      },
      {
        "lat": 23.856986,
        "lng": 121.544991,
        "ele": 45.5,
        "distanceKm": 12.711568270830602,
        "gradePct": -0.3291008770060178,
        "smoothedEle": 46.433324900031394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.856596333333332,
        "lng": 121.544726,
        "ele": 46.08333333333334,
        "distanceKm": 12.762594287248175,
        "gradePct": -0.051830513502633305,
        "smoothedEle": 46.59096797545193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.856206666666665,
        "lng": 121.544461,
        "ele": 46.66666666666666,
        "distanceKm": 12.813620346473046,
        "gradePct": 0.16453233630798594,
        "smoothedEle": 46.709169950971756,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.855817,
        "lng": 121.544196,
        "ele": 47.25,
        "distanceKm": 12.864646448504649,
        "gradePct": 0.23792142889125228,
        "smoothedEle": 46.78793077093148,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8555255,
        "lng": 121.5440045,
        "ele": 47.875000000000014,
        "distanceKm": 12.902460318563236,
        "gradePct": 0.48770557730852276,
        "smoothedEle": 47.38520285336112,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.855234,
        "lng": 121.543813,
        "ele": 48.5,
        "distanceKm": 12.940274211186791,
        "gradePct": 0.829286500803302,
        "smoothedEle": 48.18058389043938,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.854877,
        "lng": 121.5435,
        "ele": 47.833333333333336,
        "distanceKm": 12.991156657980678,
        "gradePct": 1.1630893005077148,
        "smoothedEle": 48.98331136946524,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85452,
        "lng": 121.543187,
        "ele": 47.166666666666664,
        "distanceKm": 13.042039159637623,
        "gradePct": 1.509198088113946,
        "smoothedEle": 49.77143169674164,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.854163,
        "lng": 121.542874,
        "ele": 46.5,
        "distanceKm": 13.09292171615937,
        "gradePct": 1.4161162766807833,
        "smoothedEle": 50.066772676026304,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.853722,
        "lng": 121.542478,
        "ele": 56,
        "distanceKm": 13.156376081250153,
        "gradePct": 1.0087718992096342,
        "smoothedEle": 50.45215268918779,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.853626,
        "lng": 121.542307,
        "ele": 56.25,
        "distanceKm": 13.176781179105427,
        "gradePct": 1.0645428829286916,
        "smoothedEle": 50.88560788589711,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.853609,
        "lng": 121.542077,
        "ele": 53.25,
        "distanceKm": 13.200247743761189,
        "gradePct": 1.1516620717344253,
        "smoothedEle": 51.42744756555172,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.853335,
        "lng": 121.541762,
        "ele": 53.75,
        "distanceKm": 13.244457247229253,
        "gradePct": 1.4138638798806242,
        "smoothedEle": 52.61319492182001,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.853141,
        "lng": 121.541699,
        "ele": 54.5,
        "distanceKm": 13.266960430382426,
        "gradePct": 1.6057085467295011,
        "smoothedEle": 53.12750096591516,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.853071,
        "lng": 121.541629,
        "ele": 54,
        "distanceKm": 13.277508550763194,
        "gradePct": 1.7025524258642715,
        "smoothedEle": 53.382413875117074,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85303,
        "lng": 121.541496,
        "ele": 52.5,
        "distanceKm": 13.291781972685534,
        "gradePct": 1.8692516764514369,
        "smoothedEle": 53.79866054070085,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.853009,
        "lng": 121.54126,
        "ele": 49.5,
        "distanceKm": 13.315895897202125,
        "gradePct": 2.1960681598352574,
        "smoothedEle": 54.59843903716778,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852944,
        "lng": 121.54111,
        "ele": 48,
        "distanceKm": 13.332776147694185,
        "gradePct": 2.443554587843335,
        "smoothedEle": 55.195931414851074,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852863,
        "lng": 121.541017,
        "ele": 47.5,
        "distanceKm": 13.345836538104795,
        "gradePct": 2.6455117065119063,
        "smoothedEle": 55.679165860043646,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852785,
        "lng": 121.541016,
        "ele": 48,
        "distanceKm": 13.354510350568797,
        "gradePct": 2.7775281545195787,
        "smoothedEle": 55.99587777911366,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852669,
        "lng": 121.541087,
        "ele": 50,
        "distanceKm": 13.36929246016558,
        "gradePct": 2.8888489299061564,
        "smoothedEle": 56.50422666830458,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8526,
        "lng": 121.541213,
        "ele": 52.5,
        "distanceKm": 13.384227757408274,
        "gradePct": 2.8787724148301304,
        "smoothedEle": 56.81509316194676,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85246,
        "lng": 121.541643,
        "ele": 59,
        "distanceKm": 13.430646072443187,
        "gradePct": 2.3295437633704075,
        "smoothedEle": 56.90185159761569,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852405,
        "lng": 121.541712,
        "ele": 60.25,
        "distanceKm": 13.439954274166457,
        "gradePct": 2.1846561778663345,
        "smoothedEle": 56.86173260274968,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852329,
        "lng": 121.541785,
        "ele": 61.5,
        "distanceKm": 13.451202896761762,
        "gradePct": 2.043017480797318,
        "smoothedEle": 56.85340044241079,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.852242,
        "lng": 121.541836,
        "ele": 62,
        "distanceKm": 13.462179533078864,
        "gradePct": 1.9066084413790738,
        "smoothedEle": 56.831451334568015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851798,
        "lng": 121.541919,
        "ele": 59.25,
        "distanceKm": 13.512266531172008,
        "gradePct": 1.125942863032137,
        "smoothedEle": 56.729950789899846,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851439,
        "lng": 121.542081,
        "ele": 63.75,
        "distanceKm": 13.555451717355975,
        "gradePct": 0.35420288432370256,
        "smoothedEle": 56.73665665103504,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851077,
        "lng": 121.542012,
        "ele": 65,
        "distanceKm": 13.596311412723812,
        "gradePct": 0.2602146002663988,
        "smoothedEle": 57.35810739236593,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85104,
        "lng": 121.541945,
        "ele": 64.5,
        "distanceKm": 13.604271004217681,
        "gradePct": 0.36017174178038885,
        "smoothedEle": 57.572898598566425,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851031,
        "lng": 121.541806,
        "ele": 63,
        "distanceKm": 13.618442545251288,
        "gradePct": 0.5216186779775445,
        "smoothedEle": 57.9222798764206,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851181,
        "lng": 121.54127,
        "ele": 54.75,
        "distanceKm": 13.67544787191543,
        "gradePct": 0.7995642256943534,
        "smoothedEle": 58.40369169782956,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85119,
        "lng": 121.541149,
        "ele": 53.5,
        "distanceKm": 13.687794063541412,
        "gradePct": 0.7633209096171348,
        "smoothedEle": 58.306185694933745,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851171,
        "lng": 121.541071,
        "ele": 52.75,
        "distanceKm": 13.696003101133382,
        "gradePct": 0.7013311908070488,
        "smoothedEle": 58.16557076669709,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85113,
        "lng": 121.540979,
        "ele": 52.25,
        "distanceKm": 13.706411021972977,
        "gradePct": 0.6103997097639628,
        "smoothedEle": 57.96261631032497,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.851056,
        "lng": 121.540884,
        "ele": 52,
        "distanceKm": 13.719101562895187,
        "gradePct": 0.4858641351931414,
        "smoothedEle": 57.702740414367014,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85093,
        "lng": 121.540849,
        "ele": 53,
        "distanceKm": 13.73355722460189,
        "gradePct": 0.3213321588084821,
        "smoothedEle": 57.3759211586475,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.850464,
        "lng": 121.540911,
        "ele": 53.25,
        "distanceKm": 13.785756356677329,
        "gradePct": -0.465690842657727,
        "smoothedEle": 56.266189820871574,
        "gradeBand": "descent"
      },
      {
        "lat": 23.850194,
        "lng": 121.5411,
        "ele": 55.75,
        "distanceKm": 13.821404862656928,
        "gradePct": -1.3924741045405662,
        "smoothedEle": 55.162348533328924,
        "gradeBand": "descent"
      },
      {
        "lat": 23.849942,
        "lng": 121.54142,
        "ele": 61.25,
        "distanceKm": 13.86435008850313,
        "gradePct": -2.2545556442603543,
        "smoothedEle": 53.8008592706231,
        "gradeBand": "descent"
      },
      {
        "lat": 23.849848,
        "lng": 121.541448,
        "ele": 61,
        "distanceKm": 13.875183378387755,
        "gradePct": -2.436990722284212,
        "smoothedEle": 53.52747659689322,
        "gradeBand": "descent"
      },
      {
        "lat": 23.849751,
        "lng": 121.541432,
        "ele": 60,
        "distanceKm": 13.886091352936363,
        "gradePct": -2.51986394444266,
        "smoothedEle": 53.279905232608485,
        "gradeBand": "descent"
      },
      {
        "lat": 23.84953,
        "lng": 121.541318,
        "ele": 56,
        "distanceKm": 13.91326309332352,
        "gradePct": -2.4449247608822997,
        "smoothedEle": 52.93245061194462,
        "gradeBand": "descent"
      },
      {
        "lat": 23.849135,
        "lng": 121.541221,
        "ele": 51.75,
        "distanceKm": 13.958279356689085,
        "gradePct": -1.9211310408237912,
        "smoothedEle": 53.00807706781735,
        "gradeBand": "descent"
      },
      {
        "lat": 23.84879,
        "lng": 121.541217,
        "ele": 49.25,
        "distanceKm": 13.996643816221857,
        "gradePct": -1.4316504444758793,
        "smoothedEle": 53.065763236706154,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8484,
        "lng": 121.541456,
        "ele": 48.25,
        "distanceKm": 14.046357233965187,
        "gradePct": -0.7007521853602501,
        "smoothedEle": 52.96978101307678,
        "gradeBand": "descent"
      },
      {
        "lat": 23.848095,
        "lng": 121.541784,
        "ele": 48.75,
        "distanceKm": 14.093927695698783,
        "gradePct": -0.2631942768627278,
        "smoothedEle": 52.653310602160914,
        "gradeBand": "descent"
      },
      {
        "lat": 23.84776170215499,
        "lng": 121.54211873981465,
        "ele": 51.65181784292307,
        "distanceKm": 14.144251498005469,
        "gradePct": -0.6057025627933349,
        "smoothedEle": 51.773105409684206,
        "gradeBand": "descent"
      },
      {
        "lat": 23.847428,
        "lng": 121.542453,
        "ele": 55,
        "distanceKm": 14.194575513540533,
        "gradePct": -0.8274626142913343,
        "smoothedEle": 51.40772803448536,
        "gradeBand": "descent"
      },
      {
        "lat": 23.847337,
        "lng": 121.542506,
        "ele": 54.75,
        "distanceKm": 14.206040390113126,
        "gradePct": -0.8169535350923127,
        "smoothedEle": 51.413714101511275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.847005,
        "lng": 121.542478,
        "ele": 52.25,
        "distanceKm": 14.243066824041664,
        "gradePct": -0.7313818397232721,
        "smoothedEle": 51.51337016301611,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8466102,
        "lng": 121.5423664,
        "ele": 52.2,
        "distanceKm": 14.28841013685693,
        "gradePct": -0.4240480802314736,
        "smoothedEle": 51.84192091984217,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8462154,
        "lng": 121.54225480000001,
        "ele": 52.15,
        "distanceKm": 14.333753458325827,
        "gradePct": 0.15608686327649635,
        "smoothedEle": 52.268898588927456,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8458206,
        "lng": 121.5421432,
        "ele": 52.1,
        "distanceKm": 14.379096788447841,
        "gradePct": 0.5627811483154359,
        "smoothedEle": 52.64567357171537,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.845425799999997,
        "lng": 121.5420316,
        "ele": 52.05,
        "distanceKm": 14.424440127222903,
        "gradePct": 0.6695269744541067,
        "smoothedEle": 52.80229065193774,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.845031,
        "lng": 121.54192,
        "ele": 52,
        "distanceKm": 14.469783474650502,
        "gradePct": 0.5006606402119846,
        "smoothedEle": 52.70827623538399,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.844688,
        "lng": 121.541791,
        "ele": 52.5,
        "distanceKm": 14.510116860213627,
        "gradePct": 0.3896345248629323,
        "smoothedEle": 52.82559242272046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.844195,
        "lng": 121.5415765,
        "ele": 53.125,
        "distanceKm": 14.569117368288394,
        "gradePct": 0.23774243716065596,
        "smoothedEle": 53.03823564683576,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.843702,
        "lng": 121.541362,
        "ele": 53.75,
        "distanceKm": 14.62811790703883,
        "gradePct": 0.21622714913966667,
        "smoothedEle": 53.22711948047954,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84331,
        "lng": 121.541135,
        "ele": 53.75,
        "distanceKm": 14.67744300312968,
        "gradePct": 0.33871174135587745,
        "smoothedEle": 53.40797869779027,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.842966996479902,
        "lng": 121.54087767218064,
        "ele": 54,
        "distanceKm": 14.723699183757688,
        "gradePct": 0.37554247974347765,
        "smoothedEle": 53.62562931776916,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84262399823995,
        "lng": 121.54062033609033,
        "ele": 54,
        "distanceKm": 14.769955395412545,
        "gradePct": 0.39299332408378046,
        "smoothedEle": 53.82690514806296,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.842281,
        "lng": 121.540363,
        "ele": 54,
        "distanceKm": 14.816211646247364,
        "gradePct": 0.4002639618136442,
        "smoothedEle": 53.989530799915,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84190458635465,
        "lng": 121.54010697089888,
        "ele": 53.5761107597395,
        "distanceKm": 14.865506027009769,
        "gradePct": 0.41375702241155005,
        "smoothedEle": 54.191723701512515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84152903122847,
        "lng": 121.53984944120926,
        "ele": 54.01420825327697,
        "distanceKm": 14.914800340850624,
        "gradePct": 0.42327568579268665,
        "smoothedEle": 54.430308691936645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.841154,
        "lng": 121.539591,
        "ele": 54.5,
        "distanceKm": 14.964094725791334,
        "gradePct": 0.4688143314874028,
        "smoothedEle": 54.73903213024971,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84059,
        "lng": 121.539259,
        "ele": 54.5,
        "distanceKm": 15.03532140704632,
        "gradePct": 0.6183227945400938,
        "smoothedEle": 55.304559724479184,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.840218,
        "lng": 121.539033,
        "ele": 55.25,
        "distanceKm": 15.082643467437466,
        "gradePct": 0.7573931258358106,
        "smoothedEle": 55.78945534265718,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839846,
        "lng": 121.53880699999999,
        "ele": 56,
        "distanceKm": 15.1299655598621,
        "gradePct": 0.9432571753882362,
        "smoothedEle": 56.411800565236724,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839474,
        "lng": 121.538581,
        "ele": 56.75,
        "distanceKm": 15.177287684318765,
        "gradePct": 1.138829084327654,
        "smoothedEle": 57.12144011969307,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839102,
        "lng": 121.538355,
        "ele": 57.5,
        "distanceKm": 15.22460984080707,
        "gradePct": 1.333330161597318,
        "smoothedEle": 57.88617205471698,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.838673308111627,
        "lng": 121.53809977878274,
        "ele": 58.496957879938016,
        "distanceKm": 15.278887884419092,
        "gradePct": 1.5588598566698677,
        "smoothedEle": 58.8686926709473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.83824577391096,
        "lng": 121.53784224796023,
        "ele": 59.61064390670747,
        "distanceKm": 15.333165920102008,
        "gradePct": 1.709826054541934,
        "smoothedEle": 59.879445071974416,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.837818192524594,
        "lng": 121.5375848114162,
        "ele": 61.090164274759644,
        "distanceKm": 15.387443966603136,
        "gradePct": 1.800245713927157,
        "smoothedEle": 60.88605833255339,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.83739059711172,
        "lng": 121.53732740394736,
        "ele": 62.31076205022584,
        "distanceKm": 15.441721994493193,
        "gradePct": 1.9255750817288833,
        "smoothedEle": 62.04707995198139,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.836963,
        "lng": 121.53707,
        "ele": 63.5,
        "distanceKm": 15.496000056738593,
        "gradePct": 2.0600429739120725,
        "smoothedEle": 63.307437336632326,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.83652,
        "lng": 121.536789,
        "ele": 64.125,
        "distanceKm": 15.55295038215733,
        "gradePct": 1.5887824399460178,
        "smoothedEle": 63.42392260149351,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.836077,
        "lng": 121.536508,
        "ele": 64.75,
        "distanceKm": 15.609900756572856,
        "gradePct": 0.6196394984111877,
        "smoothedEle": 62.60569410856108,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.835851,
        "lng": 121.536297,
        "ele": 65.75,
        "distanceKm": 15.642947620145849,
        "gradePct": -0.10776066919824638,
        "smoothedEle": 61.8600181104468,
        "gradeBand": "descent"
      },
      {
        "lat": 23.835523,
        "lng": 121.535743,
        "ele": 71,
        "distanceKm": 15.710069105187957,
        "gradePct": -1.719427086333389,
        "smoothedEle": 59.897359765730684,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8357045,
        "lng": 121.535358,
        "ele": 63.12500000000016,
        "distanceKm": 15.754122697421996,
        "gradePct": -2.498821941555276,
        "smoothedEle": 58.409435602563384,
        "gradeBand": "descent"
      },
      {
        "lat": 23.835886,
        "lng": 121.534973,
        "ele": 55.25,
        "distanceKm": 15.798176240943366,
        "gradePct": -2.9963695957247403,
        "smoothedEle": 56.78140565781938,
        "gradeBand": "descent"
      },
      {
        "lat": 23.836078,
        "lng": 121.534482,
        "ele": 50.5,
        "distanceKm": 15.852488337155407,
        "gradePct": -3.4381241329951613,
        "smoothedEle": 54.70479556607696,
        "gradeBand": "descent"
      },
      {
        "lat": 23.836368,
        "lng": 121.533924,
        "ele": 47.5,
        "distanceKm": 15.917764044718519,
        "gradePct": -3.7805487321747004,
        "smoothedEle": 52.076363258397286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8366575,
        "lng": 121.5334215,
        "ele": 46.374999999999986,
        "distanceKm": 15.978166340377257,
        "gradePct": -4.228870095497332,
        "smoothedEle": 49.063145533783995,
        "gradeBand": "descent"
      },
      {
        "lat": 23.836947,
        "lng": 121.532919,
        "ele": 45.25,
        "distanceKm": 16.038568539493596,
        "gradePct": -4.092012090779189,
        "smoothedEle": 47.052991540166346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.837151,
        "lng": 121.53258500000001,
        "ele": 45.25,
        "distanceKm": 16.07941694758987,
        "gradePct": -3.6653998125835927,
        "smoothedEle": 46.28967173655812,
        "gradeBand": "descent"
      },
      {
        "lat": 23.837355,
        "lng": 121.532251,
        "ele": 45.25,
        "distanceKm": 16.120265311244225,
        "gradePct": -3.0358859632162236,
        "smoothedEle": 45.8798136137168,
        "gradeBand": "descent"
      },
      {
        "lat": 23.837514,
        "lng": 121.531952,
        "ele": 45.25,
        "distanceKm": 16.155442344472863,
        "gradePct": -2.273450919580381,
        "smoothedEle": 45.649848742020986,
        "gradeBand": "descent"
      },
      {
        "lat": 23.837753238317823,
        "lng": 121.53155513487629,
        "ele": 45.30829393709197,
        "distanceKm": 16.203784903761957,
        "gradePct": -1.3705000596066426,
        "smoothedEle": 45.469572855096274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.837992476635648,
        "lng": 121.53115826975255,
        "ele": 45.366587874183935,
        "distanceKm": 16.252127400872087,
        "gradePct": -0.7067264357861153,
        "smoothedEle": 45.38616900532135,
        "gradeBand": "descent"
      },
      {
        "lat": 23.838231714953476,
        "lng": 121.53076140462883,
        "ele": 45.42488181127591,
        "distanceKm": 16.300469835800502,
        "gradePct": -0.3379437938462762,
        "smoothedEle": 45.40254686858156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8384709532713,
        "lng": 121.5303645395051,
        "ele": 45.48317574836787,
        "distanceKm": 16.34881220854863,
        "gradePct": -0.12678793496199292,
        "smoothedEle": 45.43961644650341,
        "gradeBand": "descent"
      },
      {
        "lat": 23.83870971743671,
        "lng": 121.52996733167916,
        "ele": 45.5,
        "distanceKm": 16.397154651273723,
        "gradePct": -0.0054800981218576985,
        "smoothedEle": 45.48333775958012,
        "gradeBand": "descent"
      },
      {
        "lat": 23.838948289238488,
        "lng": 121.52956998481892,
        "ele": 45.5,
        "distanceKm": 16.445497108969708,
        "gradePct": 0.0671254580418117,
        "smoothedEle": 45.53185896371448,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839186902893797,
        "lng": 121.52917266705799,
        "ele": 45.51841581953748,
        "distanceKm": 16.493839584440025,
        "gradePct": 0.09054757157334979,
        "smoothedEle": 45.58139575850739,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839425631051824,
        "lng": 121.52877542890685,
        "ele": 45.587213559603555,
        "distanceKm": 16.542182219670792,
        "gradePct": 0.09870790389890552,
        "smoothedEle": 45.63194829016465,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839664359209856,
        "lng": 121.5283781907557,
        "ele": 45.65601129966962,
        "distanceKm": 16.590524792735504,
        "gradePct": 0.10308734054253713,
        "smoothedEle": 45.683516340665605,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.839903087367883,
        "lng": 121.52798095260457,
        "ele": 45.7248090397357,
        "distanceKm": 16.63886730363076,
        "gradePct": 0.10387319573855118,
        "smoothedEle": 45.73295103611982,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.840141815525914,
        "lng": 121.52758371445343,
        "ele": 45.79360677980178,
        "distanceKm": 16.68720975235765,
        "gradePct": 0.10334567547789,
        "smoothedEle": 45.78129348484671,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.840380543683942,
        "lng": 121.52718647630229,
        "ele": 45.862404519867844,
        "distanceKm": 16.735552138915185,
        "gradePct": 0.10201785904182295,
        "smoothedEle": 45.82905084530242,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.840619271841973,
        "lng": 121.52678923815114,
        "ele": 45.931202259933926,
        "distanceKm": 16.78389446330446,
        "gradePct": 0.10690058675113118,
        "smoothedEle": 45.89024480079615,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.840858,
        "lng": 121.526392,
        "ele": 46,
        "distanceKm": 16.83223672552207,
        "gradePct": 0.11525761426201028,
        "smoothedEle": 45.956685884323946,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.841104,
        "lng": 121.52599333333333,
        "ele": 46,
        "distanceKm": 16.881147991649325,
        "gradePct": 0.12337695518309076,
        "smoothedEle": 46.02198563450457,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84135,
        "lng": 121.52559466666666,
        "ele": 46,
        "distanceKm": 16.93005919400036,
        "gradePct": 0.13087496080601868,
        "smoothedEle": 46.085374296089554,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.841596,
        "lng": 121.525196,
        "ele": 46,
        "distanceKm": 16.978970332575038,
        "gradePct": 0.13142013313937587,
        "smoothedEle": 46.146851874101486,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.841817494107733,
        "lng": 121.52481359061001,
        "ele": 46.263548106710076,
        "distanceKm": 17.02500609090259,
        "gradePct": 0.12819962420646336,
        "smoothedEle": 46.203147426542046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.842049595286184,
        "lng": 121.524438672488,
        "ele": 46.310838485368066,
        "distanceKm": 17.071050511688593,
        "gradePct": 0.09257780670339277,
        "smoothedEle": 46.193660449496235,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84228169646464,
        "lng": 121.524063754366,
        "ele": 46.35812886402605,
        "distanceKm": 17.117094875942417,
        "gradePct": 0.0251134991868903,
        "smoothedEle": 46.11879960629061,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.842513797643093,
        "lng": 121.523688836244,
        "ele": 46.40541924268403,
        "distanceKm": 17.163139183662153,
        "gradePct": -0.07191972069441757,
        "smoothedEle": 45.983113883615815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.842745898821544,
        "lng": 121.523313918122,
        "ele": 46.45270962134202,
        "distanceKm": 17.20918343484949,
        "gradePct": -0.19859750618987063,
        "smoothedEle": 45.786603429895585,
        "gradeBand": "descent"
      },
      {
        "lat": 23.842978,
        "lng": 121.522939,
        "ele": 46.5,
        "distanceKm": 17.255227629503185,
        "gradePct": -0.33467984105944504,
        "smoothedEle": 45.527560908726265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.84323183333333,
        "lng": 121.522515,
        "ele": 45.75000000000001,
        "distanceKm": 17.30676641242028,
        "gradePct": -0.49907006334072257,
        "smoothedEle": 45.13745192534744,
        "gradeBand": "descent"
      },
      {
        "lat": 23.843485666666666,
        "lng": 121.52209099999999,
        "ele": 45.000000000000014,
        "distanceKm": 17.35830512469293,
        "gradePct": -0.6512761573394942,
        "smoothedEle": 44.694806821329024,
        "gradeBand": "descent"
      },
      {
        "lat": 23.843739499999998,
        "lng": 121.521667,
        "ele": 44.25000000000003,
        "distanceKm": 17.40984376631761,
        "gradePct": -0.7637268918007996,
        "smoothedEle": 44.25543465182843,
        "gradeBand": "descent"
      },
      {
        "lat": 23.843993333333334,
        "lng": 121.521243,
        "ele": 43.499999999999986,
        "distanceKm": 17.4613823372953,
        "gradePct": -0.8308195461613644,
        "smoothedEle": 43.8193354078025,
        "gradeBand": "descent"
      },
      {
        "lat": 23.84424716666667,
        "lng": 121.52081899999999,
        "ele": 42.74999999999999,
        "distanceKm": 17.51292083762633,
        "gradePct": -0.8490424911346639,
        "smoothedEle": 43.386509080213926,
        "gradeBand": "descent"
      },
      {
        "lat": 23.844501,
        "lng": 121.520395,
        "ele": 42,
        "distanceKm": 17.56445926730739,
        "gradePct": -0.8158841853404646,
        "smoothedEle": 43.010573758007894,
        "gradeBand": "descent"
      },
      {
        "lat": 23.844757,
        "lng": 121.519978,
        "ele": 42.083333333333336,
        "distanceKm": 17.61553731677958,
        "gradePct": -0.7421720140729056,
        "smoothedEle": 42.72291402496856,
        "gradeBand": "descent"
      },
      {
        "lat": 23.845013,
        "lng": 121.519561,
        "ele": 42.166666666666664,
        "distanceKm": 17.66661529671101,
        "gradePct": -0.6219413314543183,
        "smoothedEle": 42.53150574232735,
        "gradeBand": "descent"
      },
      {
        "lat": 23.845269000000002,
        "lng": 121.519144,
        "ele": 42.25,
        "distanceKm": 17.71769320710103,
        "gradePct": -0.44646684530855807,
        "smoothedEle": 42.458764428780576,
        "gradeBand": "descent"
      },
      {
        "lat": 23.845525,
        "lng": 121.518727,
        "ele": 42.333333333333336,
        "distanceKm": 17.768771047948746,
        "gradePct": -0.2378978402082454,
        "smoothedEle": 42.510495128633224,
        "gradeBand": "descent"
      },
      {
        "lat": 23.845781,
        "lng": 121.51831,
        "ele": 42.416666666666664,
        "distanceKm": 17.81984881925395,
        "gradePct": -0.035975754437665,
        "smoothedEle": 42.6348057047759,
        "gradeBand": "descent"
      },
      {
        "lat": 23.846037,
        "lng": 121.517893,
        "ele": 42.5,
        "distanceKm": 17.870926521015754,
        "gradePct": 0.10718614283715094,
        "smoothedEle": 42.73973830700431,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.846276059944238,
        "lng": 121.51749827580609,
        "ele": 42.850923087589706,
        "distanceKm": 17.91907425725922,
        "gradePct": 0.18158985033098737,
        "smoothedEle": 42.82334283169834,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84651952997212,
        "lng": 121.51710663790305,
        "ele": 43.30046154379483,
        "distanceKm": 17.967234478429447,
        "gradePct": 0.1952454550028129,
        "smoothedEle": 42.89942982922815,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.846763,
        "lng": 121.516715,
        "ele": 43.75,
        "distanceKm": 18.015394637726047,
        "gradePct": 0.17200549018531025,
        "smoothedEle": 42.96797631647286,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.846992,
        "lng": 121.51637000000001,
        "ele": 43.375000000000014,
        "distanceKm": 18.058748023052893,
        "gradePct": 0.15432767033341277,
        "smoothedEle": 43.02337448200006,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.847221,
        "lng": 121.516025,
        "ele": 43,
        "distanceKm": 18.102101358211023,
        "gradePct": 0.1394818078173619,
        "smoothedEle": 43.07283442500518,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.84745829318099,
        "lng": 121.51562215236684,
        "ele": 43,
        "distanceKm": 18.15083310944476,
        "gradePct": 0.12197737124007135,
        "smoothedEle": 43.11747250380037,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.847693146590494,
        "lng": 121.51521757618342,
        "ele": 43,
        "distanceKm": 18.199566777296546,
        "gradePct": 0.09039445240251032,
        "smoothedEle": 43.12623738397651,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.847928,
        "lng": 121.514813,
        "ele": 43,
        "distanceKm": 18.248300382200764,
        "gradePct": 0.02142172733007549,
        "smoothedEle": 43.05286764964268,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.848028,
        "lng": 121.514678,
        "ele": 43,
        "distanceKm": 18.265968088062102,
        "gradePct": -0.014975951866731004,
        "smoothedEle": 43.00165963782721,
        "gradeBand": "descent"
      },
      {
        "lat": 23.848207,
        "lng": 121.514623,
        "ele": 43,
        "distanceKm": 18.286643049832467,
        "gradePct": -0.06442750230668916,
        "smoothedEle": 42.92634370566374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.848663666666667,
        "lng": 121.514594,
        "ele": 43,
        "distanceKm": 18.3375077152608,
        "gradePct": -0.17627280288634914,
        "smoothedEle": 42.75272089310272,
        "gradeBand": "descent"
      },
      {
        "lat": 23.84912033333333,
        "lng": 121.514565,
        "ele": 43,
        "distanceKm": 18.388372380086185,
        "gradePct": -0.2850037605515193,
        "smoothedEle": 42.55421652067047,
        "gradeBand": "descent"
      },
      {
        "lat": 23.849577,
        "lng": 121.514536,
        "ele": 43,
        "distanceKm": 18.439237044309404,
        "gradePct": -0.3844197982681244,
        "smoothedEle": 42.29767314861237,
        "gradeBand": "descent"
      },
      {
        "lat": 23.850003857142855,
        "lng": 121.51450642857144,
        "ele": 42.46428571428571,
        "distanceKm": 18.486796640157262,
        "gradePct": -0.46074089694129033,
        "smoothedEle": 42.00433764244903,
        "gradeBand": "descent"
      },
      {
        "lat": 23.850430714285714,
        "lng": 121.51447685714287,
        "ele": 41.928571428571416,
        "distanceKm": 18.534356235379157,
        "gradePct": -0.5517164057817985,
        "smoothedEle": 41.66004542745249,
        "gradeBand": "descent"
      },
      {
        "lat": 23.85085757142857,
        "lng": 121.5144472857143,
        "ele": 41.392857142857125,
        "distanceKm": 18.581915829974292,
        "gradePct": -0.6301070351256883,
        "smoothedEle": 41.31919977418872,
        "gradeBand": "descent"
      },
      {
        "lat": 23.85128442857143,
        "lng": 121.51441771428571,
        "ele": 40.857142857142875,
        "distanceKm": 18.629475423943536,
        "gradePct": -0.6745263020418572,
        "smoothedEle": 40.99785470430648,
        "gradeBand": "descent"
      },
      {
        "lat": 23.851711285714284,
        "lng": 121.51438814285714,
        "ele": 40.321428571428584,
        "distanceKm": 18.67703501728591,
        "gradePct": -0.6842673177050382,
        "smoothedEle": 40.696010217274804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.852138142857143,
        "lng": 121.51435857142857,
        "ele": 39.78571428571429,
        "distanceKm": 18.72459461000229,
        "gradePct": -0.6523202372332394,
        "smoothedEle": 40.426071063731655,
        "gradeBand": "descent"
      },
      {
        "lat": 23.852565,
        "lng": 121.514329,
        "ele": 39.25,
        "distanceKm": 18.772154202091873,
        "gradePct": -0.5806518675703763,
        "smoothedEle": 40.22785476053886,
        "gradeBand": "descent"
      },
      {
        "lat": 23.85306875,
        "lng": 121.5142955,
        "ele": 39.49999999999999,
        "distanceKm": 18.828272233057714,
        "gradePct": -0.47887075131590773,
        "smoothedEle": 40.04824278031522,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8535725,
        "lng": 121.514262,
        "ele": 39.75000000000001,
        "distanceKm": 18.88439026321951,
        "gradePct": -0.3645763791919427,
        "smoothedEle": 39.92511048949909,
        "gradeBand": "descent"
      },
      {
        "lat": 23.85407625,
        "lng": 121.5142285,
        "ele": 40.00000000000001,
        "distanceKm": 18.940508292577256,
        "gradePct": -0.2604436750155133,
        "smoothedEle": 39.838859525632486,
        "gradeBand": "descent"
      },
      {
        "lat": 23.85458,
        "lng": 121.514195,
        "ele": 40.25,
        "distanceKm": 18.996626321130933,
        "gradePct": -0.1864006237617779,
        "smoothedEle": 39.77672778267117,
        "gradeBand": "descent"
      },
      {
        "lat": 23.855127,
        "lng": 121.51415349999999,
        "ele": 40.125,
        "distanceKm": 19.057596274440936,
        "gradePct": -0.12436853082678967,
        "smoothedEle": 39.73516389516761,
        "gradeBand": "descent"
      },
      {
        "lat": 23.855674,
        "lng": 121.514112,
        "ele": 40,
        "distanceKm": 19.11856622651753,
        "gradePct": -0.09968291989215351,
        "smoothedEle": 39.67321768450842,
        "gradeBand": "descent"
      },
      {
        "lat": 23.85610425,
        "lng": 121.51407325,
        "ele": 39.6875,
        "distanceKm": 19.166569931440506,
        "gradePct": -0.012023033831038575,
        "smoothedEle": 39.785959004442105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.856534500000002,
        "lng": 121.51403450000001,
        "ele": 39.375,
        "distanceKm": 19.21457363528911,
        "gradePct": 0.1406458429187905,
        "smoothedEle": 40.04578458712597,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.85696475,
        "lng": 121.51399575,
        "ele": 39.0625,
        "distanceKm": 19.262577338063167,
        "gradePct": 0.24284565424644544,
        "smoothedEle": 40.215794382617666,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.857395,
        "lng": 121.513957,
        "ele": 38.75,
        "distanceKm": 19.310581039763335,
        "gradePct": 0.3199694597988601,
        "smoothedEle": 40.32126965068041,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.857771,
        "lng": 121.513801,
        "ele": 39.25,
        "distanceKm": 19.355298999981393,
        "gradePct": 0.2909043021424946,
        "smoothedEle": 40.34129674170503,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8580535,
        "lng": 121.5135905,
        "ele": 40.999999999999915,
        "distanceKm": 19.393312030636572,
        "gradePct": 0.1914925945886885,
        "smoothedEle": 40.31368888931466,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.858336,
        "lng": 121.51338,
        "ele": 42.75,
        "distanceKm": 19.431325035005926,
        "gradePct": 0.08937154525164491,
        "smoothedEle": 40.28385439360074,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.858742,
        "lng": 121.512978,
        "ele": 42,
        "distanceKm": 19.492229184261017,
        "gradePct": 0.012075661757531763,
        "smoothedEle": 40.3050976905736,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.859013,
        "lng": 121.512688,
        "ele": 41.25,
        "distanceKm": 19.534392730756053,
        "gradePct": 0.01891319468649406,
        "smoothedEle": 40.36976018709042,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.859359,
        "lng": 121.5122755,
        "ele": 40.25,
        "distanceKm": 19.591312512365185,
        "gradePct": 0.10005507075349165,
        "smoothedEle": 40.51525122772194,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.859705,
        "lng": 121.511863,
        "ele": 39.25,
        "distanceKm": 19.648232211404025,
        "gradePct": 0.12560944422921283,
        "smoothedEle": 40.54097048567485,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.860029212125387,
        "lng": 121.51148295819783,
        "ele": 39.506998298897045,
        "distanceKm": 19.701083594824873,
        "gradePct": -0.0013642135619242929,
        "smoothedEle": 40.31594848862976,
        "gradeBand": "descent"
      },
      {
        "lat": 23.860353392898645,
        "lng": 121.5111028841878,
        "ele": 39.801173229258154,
        "distanceKm": 19.75393492475733,
        "gradePct": -0.16037809645926573,
        "smoothedEle": 40.09895524242146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8606775736719,
        "lng": 121.51072281017778,
        "ele": 40.09534815961926,
        "distanceKm": 19.806786183952884,
        "gradePct": -0.28246688561057554,
        "smoothedEle": 39.95730926000226,
        "gradeBand": "descent"
      },
      {
        "lat": 23.861002021832764,
        "lng": 121.51034300752097,
        "ele": 40.22349934054301,
        "distanceKm": 19.859637487110113,
        "gradePct": -0.2774410237322914,
        "smoothedEle": 39.93752891620499,
        "gradeBand": "descent"
      },
      {
        "lat": 23.861326766374575,
        "lng": 121.50996350564073,
        "ele": 40.167624505407254,
        "distanceKm": 19.91248888319941,
        "gradePct": -0.09386875987847565,
        "smoothedEle": 40.081383943867095,
        "gradeBand": "descent"
      },
      {
        "lat": 23.86165151091638,
        "lng": 121.5095840037605,
        "ele": 40.1117496702715,
        "distanceKm": 19.965340208638803,
        "gradePct": 0.0991617808931128,
        "smoothedEle": 40.26671164904902,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.861976255458192,
        "lng": 121.50920450188025,
        "ele": 40.055874835135754,
        "distanceKm": 20.018191463430124,
        "gradePct": 0.25090135729430774,
        "smoothedEle": 40.454843388280096,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.862301,
        "lng": 121.508825,
        "ele": 40,
        "distanceKm": 20.071042647570955,
        "gradePct": 0.3374500816609694,
        "smoothedEle": 40.64347252955828,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.862509,
        "lng": 121.50850849999999,
        "ele": 40.50000000000002,
        "distanceKm": 20.11067596065565,
        "gradePct": 0.3547843195448563,
        "smoothedEle": 40.78601802981386,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.862717,
        "lng": 121.508192,
        "ele": 41,
        "distanceKm": 20.150309231767455,
        "gradePct": 0.3512580157961351,
        "smoothedEle": 40.91652027118561,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86294625,
        "lng": 121.50782699999999,
        "ele": 41.24999999999999,
        "distanceKm": 20.19533665441425,
        "gradePct": 0.3366271620569468,
        "smoothedEle": 41.04674269089208,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8631755,
        "lng": 121.507462,
        "ele": 41.49999999999999,
        "distanceKm": 20.240364022905865,
        "gradePct": 0.3124395989395705,
        "smoothedEle": 41.15885782072094,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86340475,
        "lng": 121.507097,
        "ele": 41.75000000000001,
        "distanceKm": 20.285391337244228,
        "gradePct": 0.27917379941201503,
        "smoothedEle": 41.25342674383527,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.863634,
        "lng": 121.506732,
        "ele": 42,
        "distanceKm": 20.330418597427688,
        "gradePct": 0.23935318448707663,
        "smoothedEle": 41.32973186037429,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86406131145757,
        "lng": 121.50692104567719,
        "ele": 41.84978764256664,
        "distanceKm": 20.381675064129908,
        "gradePct": 0.17206867771003037,
        "smoothedEle": 41.35136978258196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.864485217362322,
        "lng": 121.50711931802992,
        "ele": 41.56076088932658,
        "distanceKm": 20.432942344580887,
        "gradePct": 0.07386202960279346,
        "smoothedEle": 41.28810239829509,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.864909123267072,
        "lng": 121.50731759038264,
        "ele": 41.27173413608652,
        "distanceKm": 20.484209599077968,
        "gradePct": -0.04251033147271969,
        "smoothedEle": 41.1659241272706,
        "gradeBand": "descent"
      },
      {
        "lat": 23.865333029171826,
        "lng": 121.50751586273536,
        "ele": 40.98270738284644,
        "distanceKm": 20.535476827622084,
        "gradePct": -0.16552216242937648,
        "smoothedEle": 41.000822867864734,
        "gradeBand": "descent"
      },
      {
        "lat": 23.865756935076575,
        "lng": 121.5077141350881,
        "ele": 40.69368062960639,
        "distanceKm": 20.586744030212714,
        "gradePct": -0.26907309953340885,
        "smoothedEle": 40.806968127359156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.866181,
        "lng": 121.507912,
        "ele": 40.5,
        "distanceKm": 20.63801119023753,
        "gradePct": -0.3072631636021914,
        "smoothedEle": 40.66149618102259,
        "gradeBand": "descent"
      },
      {
        "lat": 23.86654172670658,
        "lng": 121.5080755623198,
        "ele": 40.35055018562378,
        "distanceKm": 20.681433808651985,
        "gradePct": -0.2546806596917977,
        "smoothedEle": 40.66317797147046,
        "gradeBand": "descent"
      },
      {
        "lat": 23.866907,
        "lng": 121.508227,
        "ele": 40,
        "distanceKm": 20.724871613426984,
        "gradePct": -0.13170490207354438,
        "smoothedEle": 40.77156615272992,
        "gradeBand": "descent"
      },
      {
        "lat": 23.86729576316172,
        "lng": 121.50839189455462,
        "ele": 40,
        "distanceKm": 20.771238172058936,
        "gradePct": 0.0248187030054404,
        "smoothedEle": 40.915237250273314,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.86768452632344,
        "lng": 121.50855678910925,
        "ele": 40,
        "distanceKm": 20.817604712487483,
        "gradePct": 0.1455239519654837,
        "smoothedEle": 41.010448014774056,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.868073260889368,
        "lng": 121.50872176473727,
        "ele": 40.507547691869334,
        "distanceKm": 20.86397125230325,
        "gradePct": 0.21412420413436883,
        "smoothedEle": 41.09075004188729,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.868461956384003,
        "lng": 121.50888685113837,
        "ele": 41.70857309663674,
        "distanceKm": 20.910337800633243,
        "gradePct": 0.21429020418336087,
        "smoothedEle": 41.1638810650929,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.868850611132437,
        "lng": 121.5090520520293,
        "ele": 42.75,
        "distanceKm": 20.95670432390956,
        "gradePct": 0.17819689651871393,
        "smoothedEle": 41.22659656206479,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.869239,
        "lng": 121.509218,
        "ele": 42.75,
        "distanceKm": 21.00307086696037,
        "gradePct": 0.17509720875393658,
        "smoothedEle": 41.330798097747106,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.869688,
        "lng": 121.509481,
        "ele": 41.75,
        "distanceKm": 21.05970878996093,
        "gradePct": 0.19327572606755863,
        "smoothedEle": 41.46991935233268,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.870141,
        "lng": 121.50979799999999,
        "ele": 41.375,
        "distanceKm": 21.11951095096575,
        "gradePct": 0.12826020504086744,
        "smoothedEle": 41.43280910553486,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.870594,
        "lng": 121.510115,
        "ele": 41,
        "distanceKm": 21.17931305118426,
        "gradePct": -0.08223052948944727,
        "smoothedEle": 41.11294507280656,
        "gradeBand": "descent"
      },
      {
        "lat": 23.871022500000002,
        "lng": 121.5104,
        "ele": 41.125,
        "distanceKm": 21.235081086090908,
        "gradePct": -0.36561556848120835,
        "smoothedEle": 40.67819452353899,
        "gradeBand": "descent"
      },
      {
        "lat": 23.871451,
        "lng": 121.510685,
        "ele": 41.25,
        "distanceKm": 21.290849071156373,
        "gradePct": -0.5852503992038811,
        "smoothedEle": 40.28009444420883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.871786,
        "lng": 121.510894,
        "ele": 40.25,
        "distanceKm": 21.333735247103938,
        "gradePct": -0.6535118532227587,
        "smoothedEle": 40.04970377806169,
        "gradeBand": "descent"
      },
      {
        "lat": 23.872138,
        "lng": 121.511066,
        "ele": 38.75,
        "distanceKm": 21.376605646270477,
        "gradePct": -0.6375225897956569,
        "smoothedEle": 39.85238101429271,
        "gradeBand": "descent"
      },
      {
        "lat": 23.87249965225813,
        "lng": 121.51121004309638,
        "ele": 38.6160574618536,
        "distanceKm": 21.419403844485927,
        "gradePct": -0.5606374799672997,
        "smoothedEle": 39.6791345458998,
        "gradeBand": "descent"
      },
      {
        "lat": 23.872861326129065,
        "lng": 121.5113540215482,
        "ele": 38.8080287309268,
        "distanceKm": 21.462202037889295,
        "gradePct": -0.47931492378577006,
        "smoothedEle": 39.525961606934686,
        "gradeBand": "descent"
      },
      {
        "lat": 23.873223,
        "lng": 121.511498,
        "ele": 39,
        "distanceKm": 21.505000217301593,
        "gradePct": -0.38771619554009856,
        "smoothedEle": 39.42864007366539,
        "gradeBand": "descent"
      },
      {
        "lat": 23.87366225,
        "lng": 121.51166875,
        "ele": 39.0625,
        "distanceKm": 21.556836752701166,
        "gradePct": -0.23314738184465694,
        "smoothedEle": 39.477078002291954,
        "gradeBand": "descent"
      },
      {
        "lat": 23.874101500000002,
        "lng": 121.51183950000001,
        "ele": 39.125,
        "distanceKm": 21.608673268370232,
        "gradePct": 0.018314551896274685,
        "smoothedEle": 39.75920086185037,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.87454075,
        "lng": 121.51201025,
        "ele": 39.1875,
        "distanceKm": 21.660509764306795,
        "gradePct": 0.3615554253640218,
        "smoothedEle": 40.25512903382989,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.87498,
        "lng": 121.512181,
        "ele": 39.25,
        "distanceKm": 21.712346240511426,
        "gradePct": 0.671802081241888,
        "smoothedEle": 40.779108625236596,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.875401500000002,
        "lng": 121.51232850000001,
        "ele": 41.000000000000064,
        "distanceKm": 21.76155611436215,
        "gradePct": 0.8759998575863466,
        "smoothedEle": 41.25476308211353,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.875823,
        "lng": 121.512476,
        "ele": 42.75,
        "distanceKm": 21.81076597332828,
        "gradePct": 0.9696518481641867,
        "smoothedEle": 41.718525806250895,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.876243000000002,
        "lng": 121.51262600000001,
        "ele": 43.25000000000002,
        "distanceKm": 21.859895305368205,
        "gradePct": 0.9632351759302897,
        "smoothedEle": 42.17572075727114,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.876663,
        "lng": 121.512776,
        "ele": 43.75,
        "distanceKm": 21.90902462204394,
        "gradePct": 0.9693093553523866,
        "smoothedEle": 42.68415135981731,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.877060750000002,
        "lng": 121.512934,
        "ele": 43.75,
        "distanceKm": 21.95607984499911,
        "gradePct": 1.0311461121447323,
        "smoothedEle": 43.26412259746148,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8774585,
        "lng": 121.513092,
        "ele": 43.75,
        "distanceKm": 22.003135051099125,
        "gradePct": 1.116924838386915,
        "smoothedEle": 43.88046027426322,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.877856249999997,
        "lng": 121.51325,
        "ele": 43.75,
        "distanceKm": 22.050190240344136,
        "gradePct": 1.1734911438735522,
        "smoothedEle": 44.43238822606809,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.878254,
        "lng": 121.513408,
        "ele": 43.75,
        "distanceKm": 22.097245412734296,
        "gradePct": 1.1782712543464668,
        "smoothedEle": 44.91879291624688,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.878658,
        "lng": 121.51356,
        "ele": 44.5,
        "distanceKm": 22.14475241600851,
        "gradePct": 1.124710909113141,
        "smoothedEle": 45.3739300945047,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.879142384179524,
        "lng": 121.51358536760742,
        "ele": 45.69981926987034,
        "distanceKm": 22.198675277313104,
        "gradePct": 1.0156146902533578,
        "smoothedEle": 45.853274723837636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.879626768359046,
        "lng": 121.51361073521484,
        "ele": 46.899638539740764,
        "distanceKm": 22.252598138155943,
        "gradePct": 0.9408398941573493,
        "smoothedEle": 46.33895821730082,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.880111155686645,
        "lng": 121.51363602967295,
        "ele": 48.0099493772656,
        "distanceKm": 22.306520992941348,
        "gradePct": 0.9631218079985224,
        "smoothedEle": 46.933900512524346,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.880595577843323,
        "lng": 121.51366051483647,
        "ele": 48.1299746886328,
        "distanceKm": 22.360443854000557,
        "gradePct": 1.0888533335230834,
        "smoothedEle": 47.69112502953262,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.88108,
        "lng": 121.513685,
        "ele": 48.25,
        "distanceKm": 22.414366714629526,
        "gradePct": 1.2741907836996813,
        "smoothedEle": 48.54298915032826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.881482,
        "lng": 121.51371,
        "ele": 48,
        "distanceKm": 22.459139350363078,
        "gradePct": 1.4015937388049102,
        "smoothedEle": 49.21431627674546,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.882016,
        "lng": 121.513758,
        "ele": 49,
        "distanceKm": 22.518717749649745,
        "gradePct": 1.4716824494778802,
        "smoothedEle": 50.0485412493375,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8825365,
        "lng": 121.513778,
        "ele": 50.625,
        "distanceKm": 22.576630500862624,
        "gradePct": 1.476196796961174,
        "smoothedEle": 50.899232499479865,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.883057,
        "lng": 121.513798,
        "ele": 52.25,
        "distanceKm": 22.634543251788248,
        "gradePct": 1.5573749703485602,
        "smoothedEle": 51.96026889499812,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.8835895,
        "lng": 121.513837,
        "ele": 52.99999999999998,
        "distanceKm": 22.693887256817014,
        "gradePct": 1.9437195192666117,
        "smoothedEle": 53.588300298967965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.884122,
        "lng": 121.513876,
        "ele": 53.75,
        "distanceKm": 22.75323126075582,
        "gradePct": 2.4899677771591353,
        "smoothedEle": 55.53545223298225,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.884599,
        "lng": 121.513993,
        "ele": 55.5,
        "distanceKm": 22.807588923007785,
        "gradePct": 2.9869577100924296,
        "smoothedEle": 57.44034619843445,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.884798,
        "lng": 121.514122,
        "ele": 55.5,
        "distanceKm": 22.833311746705604,
        "gradePct": 3.283540783835133,
        "smoothedEle": 58.504787698975306,
        "gradeBand": "hard"
      },
      {
        "lat": 23.8852905,
        "lng": 121.514268,
        "ele": 60,
        "distanceKm": 22.890051488674512,
        "gradePct": 3.770484021922207,
        "smoothedEle": 61.024038657163196,
        "gradeBand": "hard"
      },
      {
        "lat": 23.885783,
        "lng": 121.514414,
        "ele": 64.5,
        "distanceKm": 22.946791215861037,
        "gradePct": 3.9791153936680526,
        "smoothedEle": 63.282376990395875,
        "gradeBand": "hard"
      },
      {
        "lat": 23.886172,
        "lng": 121.514408,
        "ele": 64.75,
        "distanceKm": 22.990050403520414,
        "gradePct": 3.9454687829979274,
        "smoothedEle": 64.71666903395133,
        "gradeBand": "hard"
      },
      {
        "lat": 23.886541,
        "lng": 121.514223,
        "ele": 67.25,
        "distanceKm": 23.03518716361198,
        "gradePct": 3.8177308767195433,
        "smoothedEle": 66.2235181750846,
        "gradeBand": "hard"
      },
      {
        "lat": 23.887012,
        "lng": 121.51384,
        "ele": 74,
        "distanceKm": 23.10045001682317,
        "gradePct": 3.8034867100219354,
        "smoothedEle": 69.04489130947965,
        "gradeBand": "hard"
      },
      {
        "lat": 23.887507748502266,
        "lng": 121.5135994623975,
        "ele": 72.87166736032816,
        "distanceKm": 23.160756060822354,
        "gradePct": 4.126093001000769,
        "smoothedEle": 71.99757829853809,
        "gradeBand": "hard"
      },
      {
        "lat": 23.888026,
        "lng": 121.513415,
        "ele": 70,
        "distanceKm": 23.22135802146718,
        "gradePct": 4.310452699320303,
        "smoothedEle": 74.38275040708166,
        "gradeBand": "hard"
      },
      {
        "lat": 23.888258,
        "lng": 121.513309,
        "ele": 68.75,
        "distanceKm": 23.249315889763754,
        "gradePct": 4.2884109858998665,
        "smoothedEle": 75.41113796565031,
        "gradeBand": "hard"
      },
      {
        "lat": 23.888481,
        "lng": 121.513079,
        "ele": 73.25,
        "distanceKm": 23.28339930647311,
        "gradePct": 4.140724016099079,
        "smoothedEle": 76.58922146011145,
        "gradeBand": "hard"
      },
      {
        "lat": 23.88864,
        "lng": 121.512783,
        "ele": 77.25,
        "distanceKm": 23.318302641968646,
        "gradePct": 3.9164810751660397,
        "smoothedEle": 77.75194850057244,
        "gradeBand": "hard"
      },
      {
        "lat": 23.88873,
        "lng": 121.512338,
        "ele": 83.25,
        "distanceKm": 23.364639140914456,
        "gradePct": 3.038007089786017,
        "smoothedEle": 78.2264227534407,
        "gradeBand": "hard"
      },
      {
        "lat": 23.888954,
        "lng": 121.511971,
        "ele": 84.25,
        "distanceKm": 23.409501445435854,
        "gradePct": 2.3140928682814006,
        "smoothedEle": 78.5442849965226,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.889379,
        "lng": 121.511564,
        "ele": 83,
        "distanceKm": 23.47231511426047,
        "gradePct": 1.3325987103152435,
        "smoothedEle": 78.87129696528092,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.889573,
        "lng": 121.5112545,
        "ele": 83.5,
        "distanceKm": 23.51046593377971,
        "gradePct": 1.2200237229385535,
        "smoothedEle": 79.93093343221952,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.889767,
        "lng": 121.510945,
        "ele": 84,
        "distanceKm": 23.548616714376898,
        "gradePct": 1.4639445914872535,
        "smoothedEle": 80.99024626392158,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.890101,
        "lng": 121.510524,
        "ele": 78,
        "distanceKm": 23.605285613110695,
        "gradePct": 1.6697335514988496,
        "smoothedEle": 81.8538817231848,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.890463901582386,
        "lng": 121.51028544179908,
        "ele": 76.26815495745903,
        "distanceKm": 23.652366393985908,
        "gradePct": 1.565861842811563,
        "smoothedEle": 81.89916633999906,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.890846,
        "lng": 121.510079,
        "ele": 73.25,
        "distanceKm": 23.69975523044097,
        "gradePct": 1.0431062294693556,
        "smoothedEle": 81.7196568204827,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.891236,
        "lng": 121.509604,
        "ele": 86.5,
        "distanceKm": 23.764660886578604,
        "gradePct": 0.5228542533580854,
        "smoothedEle": 82.28046836341125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.891451999999997,
        "lng": 121.50918300000001,
        "ele": 86.25000000000001,
        "distanceKm": 23.81374120948739,
        "gradePct": 0.4489382116358642,
        "smoothedEle": 82.75989115603574,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.891668,
        "lng": 121.508762,
        "ele": 86,
        "distanceKm": 23.862821470065,
        "gradePct": 0.7977519790530777,
        "smoothedEle": 83.4550663359939,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.891861,
        "lng": 121.508552,
        "ele": 82.25,
        "distanceKm": 23.893093324206035,
        "gradePct": 1.1026482879619306,
        "smoothedEle": 83.95018878255979,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.892035,
        "lng": 121.508517,
        "ele": 81.75,
        "distanceKm": 23.91276575981384,
        "gradePct": 1.216080153347893,
        "smoothedEle": 84.26423344782154,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.89216,
        "lng": 121.508519,
        "ele": 81.75,
        "distanceKm": 23.92666663204215,
        "gradePct": 1.2688085951432317,
        "smoothedEle": 84.48979958022528,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.892257,
        "lng": 121.508556,
        "ele": 82.75,
        "distanceKm": 23.93808969058689,
        "gradePct": 1.3451122789881726,
        "smoothedEle": 84.74110686820954,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.892575,
        "lng": 121.508761,
        "ele": 88.25,
        "distanceKm": 23.979134858287434,
        "gradePct": 1.5825072356895957,
        "smoothedEle": 85.58686641838892,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.893167,
        "lng": 121.509104,
        "ele": 88.75,
        "distanceKm": 24.053628339887073,
        "gradePct": 0.8789934435269405,
        "smoothedEle": 85.0828412834491,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.893674,
        "lng": 121.509101,
        "ele": 85.5,
        "distanceKm": 24.110005070586432,
        "gradePct": 0.23881369349005951,
        "smoothedEle": 84.6977900475541,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.894204,
        "lng": 121.509022,
        "ele": 84.25,
        "distanceKm": 24.169483223703647,
        "gradePct": -0.26175319078095166,
        "smoothedEle": 84.86448249334532,
        "gradeBand": "descent"
      },
      {
        "lat": 23.8948,
        "lng": 121.508709,
        "ele": 83,
        "distanceKm": 24.24299918148512,
        "gradePct": -0.16018857512613552,
        "smoothedEle": 84.83438133833745,
        "gradeBand": "descent"
      },
      {
        "lat": 23.895255,
        "lng": 121.508319,
        "ele": 81.75,
        "distanceKm": 24.30727812583964,
        "gradePct": -0.23109743065077107,
        "smoothedEle": 84.25422013012466,
        "gradeBand": "descent"
      },
      {
        "lat": 23.895791,
        "lng": 121.507991,
        "ele": 84.75,
        "distanceKm": 24.37557285700186,
        "gradePct": -0.5675164248928175,
        "smoothedEle": 83.72695623938756,
        "gradeBand": "descent"
      },
      {
        "lat": 23.895937,
        "lng": 121.50795,
        "ele": 84.75,
        "distanceKm": 24.39233389567249,
        "gradePct": -0.6000864077345817,
        "smoothedEle": 83.65495345591123,
        "gradeBand": "descent"
      },
      {
        "lat": 23.896198,
        "lng": 121.507932,
        "ele": 84.25,
        "distanceKm": 24.421413446993995,
        "gradePct": -0.6237599577511141,
        "smoothedEle": 83.5956997153568,
        "gradeBand": "descent"
      },
      {
        "lat": 23.896315,
        "lng": 121.507952,
        "ele": 84.5,
        "distanceKm": 24.43458119988808,
        "gradePct": -0.6252674048710483,
        "smoothedEle": 83.58729327643832,
        "gradeBand": "descent"
      },
      {
        "lat": 23.896463,
        "lng": 121.508059,
        "ele": 85.5,
        "distanceKm": 24.454308316226065,
        "gradePct": -0.5725077130617058,
        "smoothedEle": 83.58729327643832,
        "gradeBand": "descent"
      },
      {
        "lat": 23.896738,
        "lng": 121.507675,
        "ele": 84.5,
        "distanceKm": 24.50389734481957,
        "gradePct": -0.24543571040430923,
        "smoothedEle": 83.79386255830661,
        "gradeBand": "descent"
      },
      {
        "lat": 23.897013,
        "lng": 121.507291,
        "ele": 83.5,
        "distanceKm": 24.5534863080582,
        "gradePct": 0.16407370937847846,
        "smoothedEle": 84.225621054301,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.897288,
        "lng": 121.506907,
        "ele": 82.5,
        "distanceKm": 24.603075205938538,
        "gradePct": 0.5660005512976858,
        "smoothedEle": 84.76506760417631,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.897718766261566,
        "lng": 121.50684536893935,
        "ele": 83.23117856256938,
        "distanceKm": 24.651382349002382,
        "gradePct": 0.7971276582318467,
        "smoothedEle": 85.181548592902,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.898149,
        "lng": 121.506779,
        "ele": 84.25,
        "distanceKm": 24.699695685577698,
        "gradePct": 0.9768230509948914,
        "smoothedEle": 85.73000612481897,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.898551,
        "lng": 121.50674699999999,
        "ele": 85.62500000000006,
        "distanceKm": 24.74451433038484,
        "gradePct": 1.0565697638614149,
        "smoothedEle": 86.26064385335368,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.898953,
        "lng": 121.506715,
        "ele": 87,
        "distanceKm": 24.789332974457356,
        "gradePct": 1.1609312974531005,
        "smoothedEle": 86.93743707306062,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.899362999999997,
        "lng": 121.50669333333333,
        "ele": 88.0833333333333,
        "distanceKm": 24.83497613658419,
        "gradePct": 1.3835145907436561,
        "smoothedEle": 87.80713128975364,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.899773,
        "lng": 121.50667166666666,
        "ele": 89.1666666666667,
        "distanceKm": 24.880619298374356,
        "gradePct": 1.6701162766651325,
        "smoothedEle": 88.85368173993969,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.900183,
        "lng": 121.50665,
        "ele": 90.25,
        "distanceKm": 24.926262459827065,
        "gradePct": 1.9393373658611421,
        "smoothedEle": 89.92322255682784,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.900649499999997,
        "lng": 121.506637,
        "ele": 91.12499999999997,
        "distanceKm": 24.978151797350794,
        "gradePct": 2.1786999630318538,
        "smoothedEle": 91.12599331786927,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.901116,
        "lng": 121.506624,
        "ele": 92,
        "distanceKm": 25.03004113475347,
        "gradePct": 2.262770681176101,
        "smoothedEle": 92.23864011028462,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.901525,
        "lng": 121.506653,
        "ele": 93.25,
        "distanceKm": 25.075615377322727,
        "gradePct": 2.218490702826501,
        "smoothedEle": 93.17592841592271,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.902065903426355,
        "lng": 121.50666733756118,
        "ele": 94.65799460901115,
        "distanceKm": 25.13577883532817,
        "gradePct": 2.140103426346521,
        "smoothedEle": 94.42401457691847,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.902607,
        "lng": 121.506677,
        "ele": 96,
        "distanceKm": 25.195954129830003,
        "gradePct": 2.1090557668530825,
        "smoothedEle": 95.72583468514009,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.903255,
        "lng": 121.50664,
        "ele": 96.75,
        "distanceKm": 25.26810664937852,
        "gradePct": 2.182124705713485,
        "smoothedEle": 97.38575193905044,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.90369866600813,
        "lng": 121.50664170584795,
        "ele": 97.93379020263714,
        "distanceKm": 25.317440431530965,
        "gradePct": 2.264004306798612,
        "smoothedEle": 98.57159445930856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.904142332806504,
        "lng": 121.50664316467837,
        "ele": 99.34703216210971,
        "distanceKm": 25.366774219675616,
        "gradePct": 2.3293968493239574,
        "smoothedEle": 99.75335612979138,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.904585999604876,
        "lng": 121.50664462350878,
        "ele": 100.76027412158228,
        "distanceKm": 25.41610800781834,
        "gradePct": 2.3749457361998068,
        "smoothedEle": 100.93937967948706,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.90502966640325,
        "lng": 121.50664608233917,
        "ele": 102.17351608105486,
        "distanceKm": 25.465441795959926,
        "gradePct": 2.401954429393322,
        "smoothedEle": 102.12835405212195,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.905473333201623,
        "lng": 121.50664754116958,
        "ele": 103.58675804052743,
        "distanceKm": 25.514775584099592,
        "gradePct": 2.4476932339034803,
        "smoothedEle": 103.4029256437732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.905917,
        "lng": 121.506649,
        "ele": 105,
        "distanceKm": 25.56410937223812,
        "gradePct": 2.5236468976678896,
        "smoothedEle": 104.73681508337364,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.906474,
        "lng": 121.506571,
        "ele": 106.25,
        "distanceKm": 25.626550522437586,
        "gradePct": 2.6203394176841024,
        "smoothedEle": 106.43172948389812,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9068615,
        "lng": 121.506451,
        "ele": 107.50000000000006,
        "distanceKm": 25.67133210933893,
        "gradePct": 2.6765119684953786,
        "smoothedEle": 107.63355819626705,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.907249,
        "lng": 121.50633099999999,
        "ele": 108.75,
        "distanceKm": 25.71611368627818,
        "gradePct": 2.6859809066999274,
        "smoothedEle": 108.81106713103297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9076365,
        "lng": 121.506211,
        "ele": 109.99999999999994,
        "distanceKm": 25.760895253254805,
        "gradePct": 2.5808098173898153,
        "smoothedEle": 109.81153120777564,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.908024,
        "lng": 121.506091,
        "ele": 111.25,
        "distanceKm": 25.805676810269453,
        "gradePct": 2.4165790082881897,
        "smoothedEle": 110.6982875061894,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.908397365953896,
        "lng": 121.50592084416287,
        "ele": 112.50718407054028,
        "distanceKm": 25.850652399991553,
        "gradePct": 2.2516427632824056,
        "smoothedEle": 111.58185069608014,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.90876668297695,
        "lng": 121.50574042208143,
        "ele": 113.62859203527015,
        "distanceKm": 25.895628092782232,
        "gradePct": 2.080549723547407,
        "smoothedEle": 112.43350824976687,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.909136,
        "lng": 121.50556,
        "ele": 114.75,
        "distanceKm": 25.940603764200038,
        "gradePct": 1.9459893207120726,
        "smoothedEle": 113.25017810505808,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.909534,
        "lng": 121.50568,
        "ele": 114,
        "distanceKm": 25.98650978142354,
        "gradePct": 1.8432312200913965,
        "smoothedEle": 114.00520790531648,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.909942,
        "lng": 121.505624,
        "ele": 114,
        "distanceKm": 26.032233120397525,
        "gradePct": 1.7080112141356014,
        "smoothedEle": 114.63601911567356,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.910544,
        "lng": 121.505598,
        "ele": 115.25,
        "distanceKm": 26.099224714363828,
        "gradePct": 1.497951072498898,
        "smoothedEle": 115.49471797848685,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.910999,
        "lng": 121.505564,
        "ele": 116.25,
        "distanceKm": 26.149936387746106,
        "gradePct": 1.4091669688828623,
        "smoothedEle": 116.22200845392756,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.911345,
        "lng": 121.505522,
        "ele": 116.75,
        "distanceKm": 26.188646045224885,
        "gradePct": 1.402198565713872,
        "smoothedEle": 116.83907749401459,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.911725,
        "lng": 121.505376,
        "ele": 117,
        "distanceKm": 26.233430754977867,
        "gradePct": 1.4913836439008659,
        "smoothedEle": 117.63413769445552,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.911929,
        "lng": 121.505055,
        "ele": 116.75,
        "distanceKm": 26.273170843863095,
        "gradePct": 1.6440251439785871,
        "smoothedEle": 118.44880951660271,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.91201,
        "lng": 121.504904,
        "ele": 117.25,
        "distanceKm": 26.290967588227158,
        "gradePct": 1.7123823578760227,
        "smoothedEle": 118.813642776066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.912118,
        "lng": 121.504852,
        "ele": 117.75,
        "distanceKm": 26.30408848725617,
        "gradePct": 1.7590742822150878,
        "smoothedEle": 119.08262120616075,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.912652,
        "lng": 121.504787,
        "ele": 119.5,
        "distanceKm": 26.363833142678384,
        "gradePct": 1.9467523234049506,
        "smoothedEle": 120.3370406932016,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.912993,
        "lng": 121.504635,
        "ele": 122,
        "distanceKm": 26.404777835511872,
        "gradePct": 2.073467892625367,
        "smoothedEle": 121.27239996100973,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.91326,
        "lng": 121.505099,
        "ele": 123.25,
        "distanceKm": 26.460509740480664,
        "gradePct": 2.2003216295468286,
        "smoothedEle": 122.5899001563565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.913637,
        "lng": 121.505089,
        "ele": 124.25,
        "distanceKm": 26.502442608083953,
        "gradePct": 2.3353327775991217,
        "smoothedEle": 123.71954623832855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.913593,
        "lng": 121.505671,
        "ele": 124.25,
        "distanceKm": 26.56180477650657,
        "gradePct": 2.6247954166485976,
        "smoothedEle": 125.54404324751722,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.913506,
        "lng": 121.506149,
        "ele": 127,
        "distanceKm": 26.61134710371211,
        "gradePct": 2.8193765195338,
        "smoothedEle": 127.06645026009282,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.913851218106853,
        "lng": 121.5060374587825,
        "ele": 127.71641350082523,
        "distanceKm": 26.651373108325554,
        "gradePct": 2.9792802348450316,
        "smoothedEle": 128.33247097602637,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.914205,
        "lng": 121.505953,
        "ele": 128.75,
        "distanceKm": 26.691637822519645,
        "gradePct": 3.1139087080040366,
        "smoothedEle": 129.65628926861274,
        "gradeBand": "hard"
      },
      {
        "lat": 23.9145605,
        "lng": 121.505879,
        "ele": 130.50000000000009,
        "distanceKm": 26.731876985696314,
        "gradePct": 3.2270231737269244,
        "smoothedEle": 131.07825855988824,
        "gradeBand": "hard"
      },
      {
        "lat": 23.914916,
        "lng": 121.505805,
        "ele": 132.25,
        "distanceKm": 26.772116145003913,
        "gradePct": 3.3127285676579397,
        "smoothedEle": 132.4863627628436,
        "gradeBand": "hard"
      },
      {
        "lat": 23.91528,
        "lng": 121.505735,
        "ele": 133,
        "distanceKm": 26.813211830699647,
        "gradePct": 3.4304619001764305,
        "smoothedEle": 133.9863552907379,
        "gradeBand": "hard"
      },
      {
        "lat": 23.915696634811194,
        "lng": 121.5057349453786,
        "ele": 135.14681663615318,
        "distanceKm": 26.859539572291276,
        "gradePct": 3.485634751132506,
        "smoothedEle": 135.57223647037657,
        "gradeBand": "hard"
      },
      {
        "lat": 23.916113317655167,
        "lng": 121.50574045033488,
        "ele": 137.7934302284573,
        "distanceKm": 26.905876033406955,
        "gradePct": 3.426254840665747,
        "smoothedEle": 137.0119480476421,
        "gradeBand": "hard"
      },
      {
        "lat": 23.91653,
        "lng": 121.505746,
        "ele": 140.75,
        "distanceKm": 26.952212494106725,
        "gradePct": 3.308974324809197,
        "smoothedEle": 138.4078153880733,
        "gradeBand": "hard"
      },
      {
        "lat": 23.9169155,
        "lng": 121.505753,
        "ele": 141.625,
        "distanceKm": 26.995084102520046,
        "gradePct": 3.147286461398207,
        "smoothedEle": 139.6192661349789,
        "gradeBand": "hard"
      },
      {
        "lat": 23.917301,
        "lng": 121.50576,
        "ele": 142.5,
        "distanceKm": 27.037955710897734,
        "gradePct": 2.957437713752437,
        "smoothedEle": 140.74825784646504,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.917824999999997,
        "lng": 121.5057775,
        "ele": 142.75,
        "distanceKm": 27.096249079505327,
        "gradePct": 2.7375693036231423,
        "smoothedEle": 142.18796935822274,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.918349,
        "lng": 121.505795,
        "ele": 143,
        "distanceKm": 27.15454244789319,
        "gradePct": 2.454115476110994,
        "smoothedEle": 143.38188535029124,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.918862320755732,
        "lng": 121.50580342430125,
        "ele": 144.12324016571162,
        "distanceKm": 27.211627613228835,
        "gradePct": 2.093728802127878,
        "smoothedEle": 144.2423847087173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.919375648301457,
        "lng": 121.50581125964554,
        "ele": 145.13496202251054,
        "distanceKm": 27.268712666849087,
        "gradePct": 1.6797159030192066,
        "smoothedEle": 144.86731539737798,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.919889,
        "lng": 121.505817,
        "ele": 145.75,
        "distanceKm": 27.32579783216189,
        "gradePct": 1.2569493996293248,
        "smoothedEle": 145.30706098332078,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.920267333333335,
        "lng": 121.50583133333333,
        "ele": 146.24999999999997,
        "distanceKm": 27.367891857451962,
        "gradePct": 0.9904963168339584,
        "smoothedEle": 145.56410641683047,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.920645666666665,
        "lng": 121.50584566666666,
        "ele": 146.75000000000003,
        "distanceKm": 27.4099858825939,
        "gradePct": 0.7751480956737594,
        "smoothedEle": 145.76793352218192,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.921024,
        "lng": 121.50586,
        "ele": 147.25,
        "distanceKm": 27.452079907588594,
        "gradePct": 0.6020916051603414,
        "smoothedEle": 145.8894137879465,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.921468611562982,
        "lng": 121.50583777880705,
        "ele": 146.83848228889775,
        "distanceKm": 27.501570093263133,
        "gradePct": 0.3907300387474506,
        "smoothedEle": 145.90188691200098,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.921912889250386,
        "lng": 121.50580822304563,
        "ele": 146.3207858311182,
        "distanceKm": 27.55106284465231,
        "gradePct": 0.16472855659009214,
        "smoothedEle": 145.7907978557655,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.92235716693779,
        "lng": 121.50577866728423,
        "ele": 145.80308937333865,
        "distanceKm": 27.60055559541418,
        "gradePct": -0.07236783693926466,
        "smoothedEle": 145.57753464237348,
        "gradeBand": "descent"
      },
      {
        "lat": 23.922801444625193,
        "lng": 121.50574911152282,
        "ele": 145.28539291555907,
        "distanceKm": 27.650048345548903,
        "gradePct": -0.31202323659783926,
        "smoothedEle": 145.2595043758532,
        "gradeBand": "descent"
      },
      {
        "lat": 23.923245722312597,
        "lng": 121.50571955576142,
        "ele": 144.76769645777955,
        "distanceKm": 27.699541095056304,
        "gradePct": -0.5266268964933706,
        "smoothedEle": 144.84812174598147,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92369,
        "lng": 121.50569,
        "ele": 144.25,
        "distanceKm": 27.749033843936544,
        "gradePct": -0.6619924525118416,
        "smoothedEle": 144.47136714844328,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92418552986087,
        "lng": 121.50565095726928,
        "ele": 143.86472721976133,
        "distanceKm": 27.80427704394483,
        "gradePct": -0.6950194970239802,
        "smoothedEle": 144.16358238295186,
        "gradeBand": "descent"
      },
      {
        "lat": 23.924681,
        "lng": 121.505611,
        "ele": 143.25,
        "distanceKm": 27.859520375203342,
        "gradePct": -0.604926749847325,
        "smoothedEle": 143.97091957696324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92523,
        "lng": 121.50558,
        "ele": 142.75,
        "distanceKm": 27.92064773552254,
        "gradePct": -0.3712091244226783,
        "smoothedEle": 143.94503301480987,
        "gradeBand": "descent"
      },
      {
        "lat": 23.925693666666668,
        "lng": 121.50554933333333,
        "ele": 143.25,
        "distanceKm": 27.972299322284965,
        "gradePct": -0.21414910433381426,
        "smoothedEle": 143.91344647408863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.926157333333332,
        "lng": 121.50551866666666,
        "ele": 143.75,
        "distanceKm": 28.023950908371727,
        "gradePct": -0.0974003435574108,
        "smoothedEle": 143.90016849241908,
        "gradeBand": "descent"
      },
      {
        "lat": 23.926621,
        "lng": 121.505488,
        "ele": 144.25,
        "distanceKm": 28.075602493783435,
        "gradePct": -0.037425225244987946,
        "smoothedEle": 143.88925857944477,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92722,
        "lng": 121.505494,
        "ele": 145.25,
        "distanceKm": 28.142211138582518,
        "gradePct": 0.10537514075814194,
        "smoothedEle": 144.14259660930384,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.927656361028443,
        "lng": 121.50558998713001,
        "ele": 144.5428426290387,
        "distanceKm": 28.1917034305358,
        "gradePct": 0.40255867587974736,
        "smoothedEle": 144.71357564613888,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.92809157401896,
        "lng": 121.50569232475334,
        "ele": 144.19522841935913,
        "distanceKm": 28.241202170833624,
        "gradePct": 0.6235885857180414,
        "smoothedEle": 145.1437018304538,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.92852678700948,
        "lng": 121.50579466237667,
        "ele": 143.84761420967956,
        "distanceKm": 28.290700903764908,
        "gradePct": 0.6294464339817005,
        "smoothedEle": 145.20557644757517,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.928962,
        "lng": 121.505897,
        "ele": 143.5,
        "distanceKm": 28.340199629328776,
        "gradePct": 0.6006353798559466,
        "smoothedEle": 145.3362168336697,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.929418,
        "lng": 121.505944,
        "ele": 147.75,
        "distanceKm": 28.391129110260746,
        "gradePct": 0.3651711977313154,
        "smoothedEle": 145.43729226565657,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.929826,
        "lng": 121.506161,
        "ele": 149.25,
        "distanceKm": 28.44157367260935,
        "gradePct": 0.21557712319803177,
        "smoothedEle": 145.57532046308305,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.930083,
        "lng": 121.5064065,
        "ele": 146.5,
        "distanceKm": 28.479511106284473,
        "gradePct": 0.30870993299819927,
        "smoothedEle": 145.80900879522986,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.93034,
        "lng": 121.506652,
        "ele": 143.75,
        "distanceKm": 28.517448507293967,
        "gradePct": 0.44741562127396306,
        "smoothedEle": 146.17100177537142,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.930612,
        "lng": 121.506854,
        "ele": 145.25,
        "distanceKm": 28.554003516988622,
        "gradePct": 0.6011381042604874,
        "smoothedEle": 146.5658884501702,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.930974,
        "lng": 121.506982,
        "ele": 146,
        "distanceKm": 28.59630622479677,
        "gradePct": 0.7985806948127305,
        "smoothedEle": 147.04861945936491,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.931321,
        "lng": 121.507013,
        "ele": 145.75,
        "distanceKm": 28.635019343246796,
        "gradePct": 0.8813633888663932,
        "smoothedEle": 147.32011305276598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.931700319274274,
        "lng": 121.50694786963805,
        "ele": 146.49940157043957,
        "distanceKm": 28.677714065509736,
        "gradePct": 0.7765807312764563,
        "smoothedEle": 147.3511007831039,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.932078,
        "lng": 121.506872,
        "ele": 147.75,
        "distanceKm": 28.720412359056137,
        "gradePct": 0.4624139139943838,
        "smoothedEle": 147.12784670790307,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.932441,
        "lng": 121.50676,
        "ele": 149.5,
        "distanceKm": 28.76235056744354,
        "gradePct": 0.20330832870128365,
        "smoothedEle": 147.06775622265923,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.932793131404374,
        "lng": 121.50664598408653,
        "ele": 149.0677289980003,
        "distanceKm": 28.803184591616173,
        "gradePct": -0.041069884684233816,
        "smoothedEle": 147.0147174088705,
        "gradeBand": "descent"
      },
      {
        "lat": 23.933145,
        "lng": 121.506531,
        "ele": 149.5,
        "distanceKm": 28.844018638318083,
        "gradePct": -0.29261362136166824,
        "smoothedEle": 146.74141747752097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.933529,
        "lng": 121.506429,
        "ele": 148.75,
        "distanceKm": 28.887957976632944,
        "gradePct": -0.38766078353913397,
        "smoothedEle": 146.5222174758646,
        "gradeBand": "descent"
      },
      {
        "lat": 23.934167,
        "lng": 121.506301,
        "ele": 146,
        "distanceKm": 28.96008335730875,
        "gradePct": -0.37179533379003393,
        "smoothedEle": 146.3274140905409,
        "gradeBand": "descent"
      },
      {
        "lat": 23.934518933852903,
        "lng": 121.50673855441111,
        "ele": 143.91508380980875,
        "distanceKm": 29.019320292288754,
        "gradePct": -0.3755565198103752,
        "smoothedEle": 146.15560905058135,
        "gradeBand": "descent"
      },
      {
        "lat": 23.934873,
        "lng": 121.507174,
        "ele": 142.25,
        "distanceKm": 29.0785537342186,
        "gradePct": -0.2290107465858861,
        "smoothedEle": 146.11111088928587,
        "gradeBand": "descent"
      },
      {
        "lat": 23.934518933852903,
        "lng": 121.50673855441111,
        "ele": 143.91508380980875,
        "distanceKm": 29.137787176148443,
        "gradePct": -0.05922942617993975,
        "smoothedEle": 146.26917497676848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.934167,
        "lng": 121.506301,
        "ele": 146,
        "distanceKm": 29.197024111128446,
        "gradePct": 0.29082094467912717,
        "smoothedEle": 146.80191661341655,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.934626428571427,
        "lng": 121.50625771428571,
        "ele": 147.42857142857142,
        "distanceKm": 29.248299379574398,
        "gradePct": 0.7457320697947294,
        "smoothedEle": 147.62530312146941,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.935085857142855,
        "lng": 121.50621442857143,
        "ele": 148.85714285714286,
        "distanceKm": 29.299574646676977,
        "gradePct": 1.3040338272808232,
        "smoothedEle": 148.77527272371503,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.935545285714284,
        "lng": 121.50617114285714,
        "ele": 150.28571428571428,
        "distanceKm": 29.35084991243616,
        "gradePct": 1.922926851432585,
        "smoothedEle": 150.23250713309127,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.936004714285716,
        "lng": 121.50612785714286,
        "ele": 151.71428571428572,
        "distanceKm": 29.402125176852326,
        "gradePct": 2.3944667515083125,
        "smoothedEle": 151.6727638503059,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.936464142857144,
        "lng": 121.50608457142857,
        "ele": 153.14285714285714,
        "distanceKm": 29.453400439924668,
        "gradePct": 2.638336121770673,
        "smoothedEle": 153.0163787542763,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.936923571428572,
        "lng": 121.50604128571429,
        "ele": 154.57142857142858,
        "distanceKm": 29.504675701653557,
        "gradePct": 2.5702053054870455,
        "smoothedEle": 154.0606544572359,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.937383,
        "lng": 121.505998,
        "ele": 156,
        "distanceKm": 29.555950962038974,
        "gradePct": 2.22107688172185,
        "smoothedEle": 154.81794286765594,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9378765,
        "lng": 121.5059165,
        "ele": 157.37500000000006,
        "distanceKm": 29.611447334834306,
        "gradePct": 1.6655975463629804,
        "smoothedEle": 155.24823639089368,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.93837,
        "lng": 121.505835,
        "ele": 158.75,
        "distanceKm": 29.666943702902095,
        "gradePct": 0.9947397277929929,
        "smoothedEle": 155.28168128690282,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.938854,
        "lng": 121.5057505,
        "ele": 157.24999999999994,
        "distanceKm": 29.721442983902936,
        "gradePct": 0.31093015229751697,
        "smoothedEle": 154.93015209075435,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.939338,
        "lng": 121.505666,
        "ele": 155.75,
        "distanceKm": 29.775942259828923,
        "gradePct": -0.4138858754042204,
        "smoothedEle": 154.1451745076431,
        "gradeBand": "descent"
      },
      {
        "lat": 23.939853666666668,
        "lng": 121.505594,
        "ele": 153.66666666666666,
        "distanceKm": 29.833746865367086,
        "gradePct": -1.2146502968184947,
        "smoothedEle": 152.83237461326735,
        "gradeBand": "descent"
      },
      {
        "lat": 23.940369333333333,
        "lng": 121.505522,
        "ele": 151.58333333333334,
        "distanceKm": 29.891551467203673,
        "gradePct": -2.0558448080321696,
        "smoothedEle": 151.01126760246387,
        "gradeBand": "descent"
      },
      {
        "lat": 23.940885,
        "lng": 121.50545,
        "ele": 149.5,
        "distanceKm": 29.949356065339405,
        "gradePct": -2.90291878383935,
        "smoothedEle": 148.7222698567769,
        "gradeBand": "descent"
      },
      {
        "lat": 23.941373812447203,
        "lng": 121.50543590819899,
        "ele": 146.93016703055287,
        "distanceKm": 30.00372846837785,
        "gradePct": -3.5336195305897733,
        "smoothedEle": 146.44688310541693,
        "gradeBand": "descent"
      },
      {
        "lat": 23.94186261486486,
        "lng": 121.50542139167149,
        "ele": 144.31243256403982,
        "distanceKm": 30.058100910468845,
        "gradePct": -3.8920635563416255,
        "smoothedEle": 144.2809846725896,
        "gradeBand": "descent"
      },
      {
        "lat": 23.942351417282516,
        "lng": 121.505406875144,
        "ele": 141.69469809752678,
        "distanceKm": 30.112473352408173,
        "gradePct": -3.9604092216597877,
        "smoothedEle": 142.26196579254133,
        "gradeBand": "descent"
      },
      {
        "lat": 23.942840219700173,
        "lng": 121.5053923586165,
        "ele": 139.07696363101374,
        "distanceKm": 30.16684579419591,
        "gradePct": -3.7890780818594427,
        "smoothedEle": 140.41220016521865,
        "gradeBand": "descent"
      },
      {
        "lat": 23.943329,
        "lng": 121.505377,
        "ele": 136.25,
        "distanceKm": 30.22121816671885,
        "gradePct": -3.5160340435226636,
        "smoothedEle": 138.7181218265522,
        "gradeBand": "descent"
      },
      {
        "lat": 23.943667,
        "lng": 121.50539,
        "ele": 136,
        "distanceKm": 30.25882531691272,
        "gradePct": -3.284581603431289,
        "smoothedEle": 137.6849219880717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.944094232944025,
        "lng": 121.50546858280823,
        "ele": 135.36966876706578,
        "distanceKm": 30.30699809232266,
        "gradePct": -2.986551097016612,
        "smoothedEle": 136.49217713550462,
        "gradeBand": "descent"
      },
      {
        "lat": 23.944514674708017,
        "lng": 121.50558543710618,
        "ele": 134.90225157529932,
        "distanceKm": 30.355233828689205,
        "gradePct": -2.663541318881793,
        "smoothedEle": 135.48015983112452,
        "gradeBand": "descent"
      },
      {
        "lat": 23.94493511647201,
        "lng": 121.50570229140412,
        "ele": 134.4348343835329,
        "distanceKm": 30.403469555528673,
        "gradePct": -2.303998286146148,
        "smoothedEle": 134.6631181873162,
        "gradeBand": "descent"
      },
      {
        "lat": 23.945355558236006,
        "lng": 121.50581914570206,
        "ele": 133.96741719176643,
        "distanceKm": 30.451705272841323,
        "gradePct": -1.9144155236595777,
        "smoothedEle": 134.05170343323383,
        "gradeBand": "descent"
      },
      {
        "lat": 23.945776,
        "lng": 121.505936,
        "ele": 133.5,
        "distanceKm": 30.499940980626263,
        "gradePct": -1.4715465772256715,
        "smoothedEle": 133.7238161524559,
        "gradeBand": "descent"
      },
      {
        "lat": 23.946317930585746,
        "lng": 121.50606424683455,
        "ele": 132.82584388481274,
        "distanceKm": 30.561594272262052,
        "gradePct": -0.9534603542084772,
        "smoothedEle": 133.465502645772,
        "gradeBand": "descent"
      },
      {
        "lat": 23.946866,
        "lng": 121.506162,
        "ele": 132.5,
        "distanceKm": 30.623341245413542,
        "gradePct": -0.5054700434552634,
        "smoothedEle": 133.4002932926105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.947323,
        "lng": 121.506203,
        "ele": 132.25,
        "distanceKm": 30.67432792518736,
        "gradePct": -0.16144530537367585,
        "smoothedEle": 133.57503297136876,
        "gradeBand": "descent"
      },
      {
        "lat": 23.947743,
        "lng": 121.506266,
        "ele": 132.75,
        "distanceKm": 30.721466651420947,
        "gradePct": 0.15560248389786635,
        "smoothedEle": 133.94483337262017,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.948191065595218,
        "lng": 121.50630000252987,
        "ele": 133.43553487640457,
        "distanceKm": 30.771409022512408,
        "gradePct": 0.4906295626256582,
        "smoothedEle": 134.4363966716087,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9486391016533,
        "lng": 121.5063344542146,
        "ele": 134.15009801385244,
        "distanceKm": 30.821351295264023,
        "gradePct": 0.7877444287034222,
        "smoothedEle": 134.97788368399466,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.949087,
        "lng": 121.506371,
        "ele": 135,
        "distanceKm": 30.871293665929073,
        "gradePct": 0.8911574243923215,
        "smoothedEle": 135.3469489181183,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.949637,
        "lng": 121.506429,
        "ele": 137.75,
        "distanceKm": 30.932734324671994,
        "gradePct": 0.7828536290609974,
        "smoothedEle": 135.6214439481891,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9500395,
        "lng": 121.5064745,
        "ele": 138.25000000000003,
        "distanceKm": 30.977728552704402,
        "gradePct": 0.7051952547215474,
        "smoothedEle": 135.9153051586049,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.950442,
        "lng": 121.50652,
        "ele": 138.75,
        "distanceKm": 31.022722779254153,
        "gradePct": 0.6308982910872083,
        "smoothedEle": 136.2498152888597,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.950865,
        "lng": 121.506542,
        "ele": 138,
        "distanceKm": 31.069811399901475,
        "gradePct": 0.623668179239234,
        "smoothedEle": 136.58333159435813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.951223224738932,
        "lng": 121.50651559861065,
        "ele": 135.35825404188654,
        "distanceKm": 31.109734479529486,
        "gradePct": 0.666771167402049,
        "smoothedEle": 136.8522311479867,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.951569,
        "lng": 121.506403,
        "ele": 134.25,
        "distanceKm": 31.149849483614155,
        "gradePct": 0.6872894543358281,
        "smoothedEle": 137.10780344613053,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.951976,
        "lng": 121.506194,
        "ele": 135.75,
        "distanceKm": 31.199841652753694,
        "gradePct": 0.5626537575455066,
        "smoothedEle": 137.20501278777826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95236116016671,
        "lng": 121.5059832803458,
        "ele": 136.85667953070956,
        "distanceKm": 31.247724389030218,
        "gradePct": 0.5326507591197062,
        "smoothedEle": 137.49219662828307,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.952748870125035,
        "lng": 121.50577796025935,
        "ele": 137.3300096480322,
        "distanceKm": 31.295619293431862,
        "gradePct": 0.5310284121437993,
        "smoothedEle": 137.81921596689796,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.953136580083356,
        "lng": 121.5055726401729,
        "ele": 137.80333976535476,
        "distanceKm": 31.343514170510264,
        "gradePct": 0.32039641609850494,
        "smoothedEle": 137.70823406058966,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.953524290041678,
        "lng": 121.50536732008645,
        "ele": 138.27666988267737,
        "distanceKm": 31.391409020265428,
        "gradePct": 0.32546156467114545,
        "smoothedEle": 137.83953873598898,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.953912,
        "lng": 121.505162,
        "ele": 138.75,
        "distanceKm": 31.439303842697008,
        "gradePct": 0.2742328206874457,
        "smoothedEle": 137.99015878921452,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954318,
        "lng": 121.504798,
        "ele": 142.75,
        "distanceKm": 31.497667105789976,
        "gradePct": 0.08004627924493973,
        "smoothedEle": 137.97456333898944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954412,
        "lng": 121.504717,
        "ele": 145,
        "distanceKm": 31.510971290979395,
        "gradePct": 0.08370959653356665,
        "smoothedEle": 137.95106154421748,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954465,
        "lng": 121.504706,
        "ele": 144.5,
        "distanceKm": 31.516969700131526,
        "gradePct": 0.08536126295568666,
        "smoothedEle": 137.94046537625644,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954538,
        "lng": 121.504706,
        "ele": 143,
        "distanceKm": 31.525086940988622,
        "gradePct": 0.08465680194044042,
        "smoothedEle": 137.92024720114426,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954598,
        "lng": 121.504724,
        "ele": 141,
        "distanceKm": 31.532004838992318,
        "gradePct": 0.08194414514692057,
        "smoothedEle": 137.89879174915976,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95467,
        "lng": 121.504792,
        "ele": 136.75,
        "distanceKm": 31.542580507635577,
        "gradePct": 0.07779719771059518,
        "smoothedEle": 137.86599193761896,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954965225515725,
        "lng": 121.5051651412371,
        "ele": 136.55585783709378,
        "distanceKm": 31.592734275113695,
        "gradePct": -0.08231698103016101,
        "smoothedEle": 137.67907244687638,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955260451031453,
        "lng": 121.5055382824742,
        "ele": 136.36171567418756,
        "distanceKm": 31.642887976966456,
        "gradePct": -0.2830693896252977,
        "smoothedEle": 137.42306228099818,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955555676547178,
        "lng": 121.50591142371131,
        "ele": 136.16757351128135,
        "distanceKm": 31.693041613192648,
        "gradePct": -0.3525393906979003,
        "smoothedEle": 137.2707205515348,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955850902062906,
        "lng": 121.50628456494843,
        "ele": 135.97343134837513,
        "distanceKm": 31.74319518379318,
        "gradePct": -0.26321771150362944,
        "smoothedEle": 137.33726566070126,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95614612757863,
        "lng": 121.50665770618554,
        "ele": 135.7792891854689,
        "distanceKm": 31.793348688764656,
        "gradePct": -0.18704538542351723,
        "smoothedEle": 137.3018453942617,
        "gradeBand": "descent"
      },
      {
        "lat": 23.956441353094355,
        "lng": 121.50703084742264,
        "ele": 135.5851470225627,
        "distanceKm": 31.84350212810773,
        "gradePct": 0.21700631523886293,
        "smoothedEle": 137.8552094266566,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.956736578610084,
        "lng": 121.50740398865975,
        "ele": 135.39100485965648,
        "distanceKm": 31.893655501821964,
        "gradePct": 0.5821159457967318,
        "smoothedEle": 138.43576696710662,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.957034,
        "lng": 121.507775,
        "ele": 138.75,
        "distanceKm": 31.943806064811383,
        "gradePct": 0.8443577680484994,
        "smoothedEle": 139.02554976995302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.956973,
        "lng": 121.507936,
        "ele": 142,
        "distanceKm": 31.961516552101468,
        "gradePct": 0.9549557771025582,
        "smoothedEle": 139.23423798468934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.956592,
        "lng": 121.50827066666666,
        "ele": 142.08333333333334,
        "distanceKm": 32.0158426649841,
        "gradePct": 1.1744484020267734,
        "smoothedEle": 139.8989277175623,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.956211,
        "lng": 121.50860533333334,
        "ele": 142.16666666666666,
        "distanceKm": 32.07016884076603,
        "gradePct": 1.3683097812484468,
        "smoothedEle": 140.90051333013125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95583,
        "lng": 121.50894,
        "ele": 142.25,
        "distanceKm": 32.12449507944462,
        "gradePct": 1.441018349321572,
        "smoothedEle": 141.6804845898448,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.955463,
        "lng": 121.509254,
        "ele": 142.125,
        "distanceKm": 32.1762970092815,
        "gradePct": 1.7170517239536085,
        "smoothedEle": 142.84918297662455,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.955096,
        "lng": 121.509568,
        "ele": 142,
        "distanceKm": 32.228098995050935,
        "gradePct": 1.775040106136419,
        "smoothedEle": 143.67497200113502,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954642,
        "lng": 121.510064,
        "ele": 145,
        "distanceKm": 32.29943532537661,
        "gradePct": 1.2044630061601225,
        "smoothedEle": 143.72962335342555,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954332,
        "lng": 121.510357,
        "ele": 142,
        "distanceKm": 32.34498423419783,
        "gradePct": 0.9639422697660512,
        "smoothedEle": 144.07062299099866,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.954158,
        "lng": 121.510734,
        "ele": 146.25,
        "distanceKm": 32.38790268588179,
        "gradePct": 0.7314192079389878,
        "smoothedEle": 144.4970305232566,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.953902,
        "lng": 121.511136,
        "ele": 149.75,
        "distanceKm": 32.437692929665545,
        "gradePct": 0.4567390165205373,
        "smoothedEle": 144.5958000267827,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.953636,
        "lng": 121.511481,
        "ele": 145.5,
        "distanceKm": 32.48356160171801,
        "gradePct": 0.24634608639709307,
        "smoothedEle": 144.21015453532115,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.953357,
        "lng": 121.511903,
        "ele": 140,
        "distanceKm": 32.536489883259456,
        "gradePct": -0.53419027083283,
        "smoothedEle": 142.938649914048,
        "gradeBand": "descent"
      },
      {
        "lat": 23.953155,
        "lng": 121.512402,
        "ele": 148.75,
        "distanceKm": 32.591949643140204,
        "gradePct": -1.620521613747064,
        "smoothedEle": 141.26401529339466,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952864703538122,
        "lng": 121.51272967161269,
        "ele": 145.85251915676648,
        "distanceKm": 32.63832527150481,
        "gradePct": -2.116164307033385,
        "smoothedEle": 140.3581549348572,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95254735176906,
        "lng": 121.51303083580635,
        "ele": 140.67625957838302,
        "distanceKm": 32.68503550526933,
        "gradePct": -2.580723498646512,
        "smoothedEle": 139.01329971592924,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95223,
        "lng": 121.513332,
        "ele": 135.5,
        "distanceKm": 32.73174578837121,
        "gradePct": -2.7518818172712294,
        "smoothedEle": 137.5488544341195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951937,
        "lng": 121.513575,
        "ele": 129.25,
        "distanceKm": 32.77262656812035,
        "gradePct": -2.6605541210380372,
        "smoothedEle": 136.52637676837662,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951849,
        "lng": 121.513715,
        "ele": 127.5,
        "distanceKm": 32.78989359251897,
        "gradePct": -2.555264210004686,
        "smoothedEle": 136.21557032920146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951806,
        "lng": 121.513861,
        "ele": 127.5,
        "distanceKm": 32.805481501890206,
        "gradePct": -2.532354007892685,
        "smoothedEle": 135.9349879605192,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951797,
        "lng": 121.514093,
        "ele": 130.5,
        "distanceKm": 32.82907851937189,
        "gradePct": -2.6076257943740786,
        "smoothedEle": 135.3235211942723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951725,
        "lng": 121.514335,
        "ele": 134,
        "distanceKm": 32.85494090227536,
        "gradePct": -2.6854553748243335,
        "smoothedEle": 134.50885613281298,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95158,
        "lng": 121.514477,
        "ele": 134.5,
        "distanceKm": 32.87657850766878,
        "gradePct": -2.651632754326348,
        "smoothedEle": 133.95352340531608,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951169,
        "lng": 121.514794,
        "ele": 133,
        "distanceKm": 32.93249194087517,
        "gradePct": -2.2508979473044626,
        "smoothedEle": 133.02839636439506,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950978,
        "lng": 121.51507,
        "ele": 131.75,
        "distanceKm": 32.96767304332956,
        "gradePct": -1.8999982553750825,
        "smoothedEle": 132.85027389410712,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950857,
        "lng": 121.515653,
        "ele": 131,
        "distanceKm": 33.028426353458855,
        "gradePct": -0.7838221560900709,
        "smoothedEle": 133.7727763814552,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950695,
        "lng": 121.516264,
        "ele": 133,
        "distanceKm": 33.09307679456772,
        "gradePct": 0.48178620544717204,
        "smoothedEle": 134.64412006666666,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95064603452432,
        "lng": 121.51666421711582,
        "ele": 135.30846319417682,
        "distanceKm": 33.134109958762835,
        "gradePct": 0.613702131804365,
        "smoothedEle": 134.24760857820962,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.950608,
        "lng": 121.517066,
        "ele": 136,
        "distanceKm": 33.17515787068675,
        "gradePct": 0.29638246097659793,
        "smoothedEle": 133.55669141934536,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.950593,
        "lng": 121.517789,
        "ele": 140.75,
        "distanceKm": 33.24864857877451,
        "gradePct": -1.1471430629034793,
        "smoothedEle": 131.75104072904782,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950446195576284,
        "lng": 121.51816307924345,
        "ele": 138.3628505207409,
        "distanceKm": 33.290019485937044,
        "gradePct": -2.170613148602127,
        "smoothedEle": 130.2616880711965,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950258,
        "lng": 121.518519,
        "ele": 132.75,
        "distanceKm": 33.33180598055485,
        "gradePct": -2.941812889460068,
        "smoothedEle": 128.38624659118904,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950047333333334,
        "lng": 121.51892666666666,
        "ele": 127.91666666666642,
        "distanceKm": 33.37939773196839,
        "gradePct": -3.7662314676771476,
        "smoothedEle": 125.92005601580894,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949836666666666,
        "lng": 121.51933433333333,
        "ele": 123.08333333333358,
        "distanceKm": 33.42698954227884,
        "gradePct": -4.450343294225655,
        "smoothedEle": 123.38251194962018,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949626,
        "lng": 121.519742,
        "ele": 118.25,
        "distanceKm": 33.474581411483214,
        "gradePct": -5.041104690742728,
        "smoothedEle": 120.73524937004888,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949375,
        "lng": 121.52011,
        "ele": 113,
        "distanceKm": 33.52124491454119,
        "gradePct": -5.516169878353573,
        "smoothedEle": 117.82790355175297,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949213,
        "lng": 121.520765,
        "ele": 107.5,
        "distanceKm": 33.59020158336844,
        "gradePct": -5.658709877751474,
        "smoothedEle": 114.02658654012617,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949227,
        "lng": 121.521202,
        "ele": 108.5,
        "distanceKm": 33.63463758880795,
        "gradePct": -5.461052487116177,
        "smoothedEle": 112.03499003501962,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949124,
        "lng": 121.521667,
        "ele": 109.75,
        "distanceKm": 33.68325989378418,
        "gradePct": -4.953904819008629,
        "smoothedEle": 110.28673130738713,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949108,
        "lng": 121.521796,
        "ele": 109.25,
        "distanceKm": 33.69648929320026,
        "gradePct": -4.794240357738406,
        "smoothedEle": 109.78180922967356,
        "gradeBand": "descent"
      },
      {
        "lat": 23.94913,
        "lng": 121.521877,
        "ele": 109.25,
        "distanceKm": 33.705076483559615,
        "gradePct": -4.6698624448163075,
        "smoothedEle": 109.49554452885116,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949234,
        "lng": 121.521939,
        "ele": 109.5,
        "distanceKm": 33.71824575621119,
        "gradePct": -4.447272163710857,
        "smoothedEle": 109.1202202582813,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949722,
        "lng": 121.522181,
        "ele": 109.5,
        "distanceKm": 33.77782160929994,
        "gradePct": -3.403328784546902,
        "smoothedEle": 107.90238951952527,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949758,
        "lng": 121.522281,
        "ele": 109,
        "distanceKm": 33.7887437551914,
        "gradePct": -3.1787357731111334,
        "smoothedEle": 107.74947947704489,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949668,
        "lng": 121.522763,
        "ele": 107.25,
        "distanceKm": 33.83873716223705,
        "gradePct": -2.2762702170922355,
        "smoothedEle": 107.33504574923857,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949576,
        "lng": 121.523421,
        "ele": 107,
        "distanceKm": 33.90638211282056,
        "gradePct": -1.3321251197482575,
        "smoothedEle": 106.7940838554178,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949996,
        "lng": 121.523649,
        "ele": 104,
        "distanceKm": 33.9585156356882,
        "gradePct": -1.0981630331560681,
        "smoothedEle": 106.10071005728217,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950328,
        "lng": 121.524058,
        "ele": 106,
        "distanceKm": 34.01410638878562,
        "gradePct": -1.1370002776365078,
        "smoothedEle": 105.26522858260533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95052359551253,
        "lng": 121.52453721485296,
        "ele": 105.19022931685708,
        "distanceKm": 34.06744068506215,
        "gradePct": -1.3031429877434517,
        "smoothedEle": 104.49921548503752,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950706,
        "lng": 121.525023,
        "ele": 104.25,
        "distanceKm": 34.12081075317785,
        "gradePct": -1.3431968044269333,
        "smoothedEle": 103.9157898988382,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9508835,
        "lng": 121.52547799999999,
        "ele": 103.12500000000009,
        "distanceKm": 34.171084477017004,
        "gradePct": -1.3121786343822945,
        "smoothedEle": 103.28745385293445,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951061,
        "lng": 121.525933,
        "ele": 102,
        "distanceKm": 34.22135814233797,
        "gradePct": -1.1362415084369866,
        "smoothedEle": 102.88859235495998,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951224,
        "lng": 121.52636166666666,
        "ele": 101.91666666666667,
        "distanceKm": 34.26853959146352,
        "gradePct": -1.0634073655445624,
        "smoothedEle": 102.36038783858154,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951387,
        "lng": 121.52679033333334,
        "ele": 101.83333333333333,
        "distanceKm": 34.31572098976498,
        "gradePct": -1.1323356867402747,
        "smoothedEle": 101.70675829325769,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95155,
        "lng": 121.527219,
        "ele": 101.75,
        "distanceKm": 34.36290233723937,
        "gradePct": -1.1754387674920441,
        "smoothedEle": 101.03883914955121,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951256,
        "lng": 121.527383,
        "ele": 100.5,
        "distanceKm": 34.39959661406092,
        "gradePct": -1.2473314072713144,
        "smoothedEle": 100.5665812798794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951467,
        "lng": 121.527911,
        "ele": 100.75,
        "distanceKm": 34.45815749982885,
        "gradePct": -1.2622324274710086,
        "smoothedEle": 99.95215230241894,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951659,
        "lng": 121.5284525,
        "ele": 99.25,
        "distanceKm": 34.51718116299425,
        "gradePct": -1.1250819079937155,
        "smoothedEle": 99.43592364641951,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951851,
        "lng": 121.528994,
        "ele": 97.75,
        "distanceKm": 34.57620474979322,
        "gradePct": -0.971260828758155,
        "smoothedEle": 98.92511452638638,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95199265648047,
        "lng": 121.5294441079619,
        "ele": 97.70412678741316,
        "distanceKm": 34.624580792149985,
        "gradePct": -0.8960235213875635,
        "smoothedEle": 98.51239675754516,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952134312960936,
        "lng": 121.5298942159238,
        "ele": 97.65825357482632,
        "distanceKm": 34.67295678700999,
        "gradePct": -0.8180526837653045,
        "smoothedEle": 98.18661043905684,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952275969441406,
        "lng": 121.5303443238857,
        "ele": 97.61238036223948,
        "distanceKm": 34.7213327343705,
        "gradePct": -0.7990612488418974,
        "smoothedEle": 97.801872113642,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95241762592187,
        "lng": 121.53079443184761,
        "ele": 97.56650714965264,
        "distanceKm": 34.76970863423373,
        "gradePct": -0.8182056112647398,
        "smoothedEle": 97.34492277902838,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95255928240234,
        "lng": 121.5312445398095,
        "ele": 97.5206339370658,
        "distanceKm": 34.81808448659695,
        "gradePct": -0.8643365191763853,
        "smoothedEle": 96.83914662282278,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9527,
        "lng": 121.531695,
        "ele": 97.5,
        "distanceKm": 34.86646026702864,
        "gradePct": -0.9724254916974718,
        "smoothedEle": 96.2855100252126,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952794,
        "lng": 121.53205,
        "ele": 97.25,
        "distanceKm": 34.90401874467966,
        "gradePct": -1.0630312456700812,
        "smoothedEle": 95.8135093628415,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952859,
        "lng": 121.532483,
        "ele": 96.75,
        "distanceKm": 34.94860942003127,
        "gradePct": -1.1804244681682805,
        "smoothedEle": 95.18337291346762,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95286,
        "lng": 121.53290366666667,
        "ele": 95.25000000000009,
        "distanceKm": 34.9913572641473,
        "gradePct": -1.3134808388688937,
        "smoothedEle": 94.49162171314731,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952861,
        "lng": 121.53332433333333,
        "ele": 93.74999999999991,
        "distanceKm": 35.034105107930436,
        "gradePct": -1.365018286204107,
        "smoothedEle": 93.92576205669701,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952862,
        "lng": 121.533745,
        "ele": 92.25,
        "distanceKm": 35.07685295138358,
        "gradePct": -1.3853531113813151,
        "smoothedEle": 93.38419803229809,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952856,
        "lng": 121.534223,
        "ele": 91.49999999999994,
        "distanceKm": 35.12543138509201,
        "gradePct": -1.3845817082704615,
        "smoothedEle": 92.74175162372616,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95285,
        "lng": 121.534701,
        "ele": 90.75,
        "distanceKm": 35.174009821059926,
        "gradePct": -1.351453058498381,
        "smoothedEle": 92.06943418737602,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952493,
        "lng": 121.534682,
        "ele": 89.25,
        "distanceKm": 35.213753391116484,
        "gradePct": -1.3328156080042344,
        "smoothedEle": 91.52952958610689,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95285,
        "lng": 121.534701,
        "ele": 90.75,
        "distanceKm": 35.25349696117304,
        "gradePct": -1.2982398734637102,
        "smoothedEle": 91.08361073351499,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952904,
        "lng": 121.534721,
        "ele": 91,
        "distanceKm": 35.259836124743565,
        "gradePct": -1.2934234084739942,
        "smoothedEle": 91.0129340465113,
        "gradeBand": "descent"
      },
      {
        "lat": 23.953032,
        "lng": 121.535027,
        "ele": 91.25,
        "distanceKm": 35.29403406895999,
        "gradePct": -1.2217063050065031,
        "smoothedEle": 90.71356633678582,
        "gradeBand": "descent"
      },
      {
        "lat": 23.953184381146357,
        "lng": 121.53546185187327,
        "ele": 91.00132885038802,
        "distanceKm": 35.34136034951971,
        "gradePct": -1.0511802530784486,
        "smoothedEle": 90.41893691161627,
        "gradeBand": "descent"
      },
      {
        "lat": 23.953342190573178,
        "lng": 121.53589442593663,
        "ele": 90.50066442519397,
        "distanceKm": 35.38869097517066,
        "gradePct": -0.8275266929864766,
        "smoothedEle": 90.21494168093535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9535,
        "lng": 121.536327,
        "ele": 90,
        "distanceKm": 35.436021550868105,
        "gradePct": -0.6371428475552088,
        "smoothedEle": 90.00539738169586,
        "gradeBand": "descent"
      },
      {
        "lat": 23.953650920408368,
        "lng": 121.53675854487066,
        "ele": 89.87518089007165,
        "distanceKm": 35.482975763458406,
        "gradePct": -0.4942706764724748,
        "smoothedEle": 89.82182903646178,
        "gradeBand": "descent"
      },
      {
        "lat": 23.953816,
        "lng": 121.537184,
        "ele": 89.5,
        "distanceKm": 35.52994515068331,
        "gradePct": -0.5745315399037512,
        "smoothedEle": 89.34093907149352,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9540015,
        "lng": 121.5376385,
        "ele": 89.5,
        "distanceKm": 35.58052730445316,
        "gradePct": -0.7098695400060293,
        "smoothedEle": 88.83038806209805,
        "gradeBand": "descent"
      },
      {
        "lat": 23.954187,
        "lng": 121.538093,
        "ele": 89.5,
        "distanceKm": 35.63110939756646,
        "gradePct": -0.8391856800682853,
        "smoothedEle": 88.34877335309248,
        "gradeBand": "descent"
      },
      {
        "lat": 23.954407059316303,
        "lng": 121.53865883543992,
        "ele": 87.9224551965242,
        "distanceKm": 35.69359849189978,
        "gradePct": -0.9983610647747412,
        "smoothedEle": 87.7163474827457,
        "gradeBand": "descent"
      },
      {
        "lat": 23.954635,
        "lng": 121.539221,
        "ele": 85.75,
        "distanceKm": 35.75609468465877,
        "gradePct": -1.160386465124167,
        "smoothedEle": 86.75622579921988,
        "gradeBand": "descent"
      },
      {
        "lat": 23.954875,
        "lng": 121.539857,
        "ele": 86.25,
        "distanceKm": 35.82601645820703,
        "gradePct": -1.5222591214154515,
        "smoothedEle": 85.35274726146777,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955028,
        "lng": 121.5402345,
        "ele": 86.00000000000003,
        "distanceKm": 35.867980335085186,
        "gradePct": -1.7497031554767908,
        "smoothedEle": 84.47621177401479,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955181,
        "lng": 121.540612,
        "ele": 85.75,
        "distanceKm": 35.90994417036027,
        "gradePct": -1.9246387948645218,
        "smoothedEle": 83.61595315087557,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955223,
        "lng": 121.540948,
        "ele": 83.5,
        "distanceKm": 35.94440543200393,
        "gradePct": -1.9910240945790962,
        "smoothedEle": 82.95375822837872,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955406,
        "lng": 121.54126,
        "ele": 81.75,
        "distanceKm": 35.98207830293319,
        "gradePct": -2.005743124732959,
        "smoothedEle": 82.22319313108193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955677,
        "lng": 121.541567,
        "ele": 79.75,
        "distanceKm": 36.02545183295956,
        "gradePct": -1.949962067030271,
        "smoothedEle": 81.46415635562042,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955937,
        "lng": 121.541946,
        "ele": 79,
        "distanceKm": 36.07360842755744,
        "gradePct": -1.8298302488626654,
        "smoothedEle": 80.70117538060828,
        "gradeBand": "descent"
      },
      {
        "lat": 23.956196,
        "lng": 121.542573,
        "ele": 79.25,
        "distanceKm": 36.14352853465971,
        "gradePct": -1.7595412222235003,
        "smoothedEle": 79.45152592061275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.956419,
        "lng": 121.54307,
        "ele": 78,
        "distanceKm": 36.19979083080637,
        "gradePct": -1.7649646189265586,
        "smoothedEle": 78.38329465544813,
        "gradeBand": "descent"
      },
      {
        "lat": 23.956733,
        "lng": 121.543425,
        "ele": 77,
        "distanceKm": 36.249994273443846,
        "gradePct": -1.7756544425157121,
        "smoothedEle": 77.524003215171,
        "gradeBand": "descent"
      },
      {
        "lat": 23.957278,
        "lng": 121.543814,
        "ele": 78.5,
        "distanceKm": 36.3223477239542,
        "gradePct": -1.704206362883167,
        "smoothedEle": 76.42166794479394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.957051,
        "lng": 121.54432,
        "ele": 76.25,
        "distanceKm": 36.37962667430494,
        "gradePct": -1.466092760209293,
        "smoothedEle": 75.83395846550043,
        "gradeBand": "descent"
      },
      {
        "lat": 23.957320488894105,
        "lng": 121.54459131209953,
        "ele": 75.45580135351369,
        "distanceKm": 36.42034558976975,
        "gradePct": -1.3576991214384455,
        "smoothedEle": 75.3160773438724,
        "gradeBand": "descent"
      },
      {
        "lat": 23.957593,
        "lng": 121.544859,
        "ele": 74.25,
        "distanceKm": 36.46106548103934,
        "gradePct": -1.275412524717314,
        "smoothedEle": 74.80450365841024,
        "gradeBand": "descent"
      },
      {
        "lat": 23.958018,
        "lng": 121.545062,
        "ele": 72,
        "distanceKm": 36.512629211449536,
        "gradePct": -1.3422444786250787,
        "smoothedEle": 73.88524461584386,
        "gradeBand": "descent"
      },
      {
        "lat": 23.958287,
        "lng": 121.545252,
        "ele": 72,
        "distanceKm": 36.548230463856285,
        "gradePct": -1.5362296682407925,
        "smoothedEle": 73.08363929362696,
        "gradeBand": "descent"
      },
      {
        "lat": 23.958657,
        "lng": 121.545539,
        "ele": 74,
        "distanceKm": 36.5986604236461,
        "gradePct": -1.8823276769627826,
        "smoothedEle": 71.82722349464333,
        "gradeBand": "descent"
      },
      {
        "lat": 23.959165,
        "lng": 121.545964,
        "ele": 72.75,
        "distanceKm": 36.66976474849542,
        "gradePct": -2.0822547028844047,
        "smoothedEle": 70.48490694206312,
        "gradeBand": "descent"
      },
      {
        "lat": 23.959296,
        "lng": 121.546157,
        "ele": 71.75,
        "distanceKm": 36.694194134878515,
        "gradePct": -2.063296855938332,
        "smoothedEle": 70.08730460499895,
        "gradeBand": "descent"
      },
      {
        "lat": 23.959308,
        "lng": 121.546408,
        "ele": 69,
        "distanceKm": 36.719734094102535,
        "gradePct": -1.987817464928739,
        "smoothedEle": 69.74963464681359,
        "gradeBand": "descent"
      },
      {
        "lat": 23.959064,
        "lng": 121.546952,
        "ele": 66.25,
        "distanceKm": 36.78131152376681,
        "gradePct": -1.5588803025569566,
        "smoothedEle": 69.141694681785,
        "gradeBand": "descent"
      },
      {
        "lat": 23.958823,
        "lng": 121.547381,
        "ele": 66,
        "distanceKm": 36.83248218699299,
        "gradePct": -1.2667852406565066,
        "smoothedEle": 68.655161432485,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95860954995933,
        "lng": 121.54776992430723,
        "ele": 66.57291038522567,
        "distanceKm": 36.87858189938376,
        "gradePct": -1.1424675747832163,
        "smoothedEle": 68.05646758226085,
        "gradeBand": "descent"
      },
      {
        "lat": 23.958396099918666,
        "lng": 121.54815884861445,
        "ele": 67.14582077045144,
        "distanceKm": 36.92468166785904,
        "gradePct": -1.0741486687398794,
        "smoothedEle": 67.55249103833964,
        "gradeBand": "descent"
      },
      {
        "lat": 23.958182649877998,
        "lng": 121.54854777292168,
        "ele": 67.71873115567712,
        "distanceKm": 36.970781492421274,
        "gradePct": -1.0175916741605417,
        "smoothedEle": 67.21047193920626,
        "gradeBand": "descent"
      },
      {
        "lat": 23.957969424601607,
        "lng": 121.54893684300409,
        "ele": 67.66975501656269,
        "distanceKm": 37.01688121348245,
        "gradePct": -0.8293205998931322,
        "smoothedEle": 67.14485507645045,
        "gradeBand": "descent"
      },
      {
        "lat": 23.957756212300804,
        "lng": 121.54932592150205,
        "ele": 67.58487750828134,
        "distanceKm": 37.06298098195901,
        "gradePct": -0.5075715091449878,
        "smoothedEle": 67.24393262453495,
        "gradeBand": "descent"
      },
      {
        "lat": 23.957543,
        "lng": 121.549715,
        "ele": 67.5,
        "distanceKm": 37.10908080650191,
        "gradePct": -0.1786580700717383,
        "smoothedEle": 67.36572821004586,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95729190214878,
        "lng": 121.55018066679744,
        "ele": 67.42325860292691,
        "distanceKm": 37.164023059927246,
        "gradePct": 0.08936844218317803,
        "smoothedEle": 67.43935029406872,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.957040804297552,
        "lng": 121.55064633359488,
        "ele": 67.34651720585381,
        "distanceKm": 37.218965392711546,
        "gradePct": 0.08070565713413798,
        "smoothedEle": 67.31074570535763,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.95678970644633,
        "lng": 121.55111200039232,
        "ele": 67.26977580878072,
        "distanceKm": 37.27390780485367,
        "gradePct": -0.11681620315717656,
        "smoothedEle": 67.03916884853372,
        "gradeBand": "descent"
      },
      {
        "lat": 23.956538390993718,
        "lng": 121.5515775248952,
        "ele": 67.3565119898872,
        "distanceKm": 37.32885014657854,
        "gradePct": -0.3509856841106206,
        "smoothedEle": 66.69024756481936,
        "gradeBand": "descent"
      },
      {
        "lat": 23.956287,
        "lng": 121.552043,
        "ele": 67.5,
        "distanceKm": 37.38379251905058,
        "gradePct": -0.5636543667688079,
        "smoothedEle": 66.26576680242101,
        "gradeBand": "descent"
      },
      {
        "lat": 23.956063905843685,
        "lng": 121.55243727184975,
        "ele": 66.44646189963784,
        "distanceKm": 37.430915194404996,
        "gradePct": -0.7072322518283128,
        "smoothedEle": 65.83721409021013,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95584,
        "lng": 121.552831,
        "ele": 65.5,
        "distanceKm": 37.47803858770754,
        "gradePct": -0.8169989221158812,
        "smoothedEle": 65.37893772026514,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955622499999997,
        "lng": 121.55322825,
        "ele": 64.81249999999997,
        "distanceKm": 37.52509625016974,
        "gradePct": -0.9072399274860258,
        "smoothedEle": 64.89960750831182,
        "gradeBand": "descent"
      },
      {
        "lat": 23.955405,
        "lng": 121.5536255,
        "ele": 64.12499999999994,
        "distanceKm": 37.57215397103439,
        "gradePct": -0.9819346777415706,
        "smoothedEle": 64.39181602003255,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9551875,
        "lng": 121.55402274999999,
        "ele": 63.43750000000003,
        "distanceKm": 37.61921175030245,
        "gradePct": -1.0477826180715717,
        "smoothedEle": 63.84808471906473,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95497,
        "lng": 121.55442,
        "ele": 62.75,
        "distanceKm": 37.66626958797489,
        "gradePct": -1.103869292892265,
        "smoothedEle": 63.28565299905558,
        "gradeBand": "descent"
      },
      {
        "lat": 23.954731962258663,
        "lng": 121.55485727309222,
        "ele": 62.42353758045474,
        "distanceKm": 37.71799015015795,
        "gradePct": -1.1151529449689035,
        "smoothedEle": 62.74168448328038,
        "gradeBand": "descent"
      },
      {
        "lat": 23.954493924517326,
        "lng": 121.55529454618447,
        "ele": 62.09707516090948,
        "distanceKm": 37.76971078280522,
        "gradePct": -1.091062971089619,
        "smoothedEle": 62.23605408707944,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95425588677599,
        "lng": 121.5557318192767,
        "ele": 61.77061274136423,
        "distanceKm": 37.82143148591358,
        "gradePct": -1.0402456970757676,
        "smoothedEle": 61.741063212619814,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95401784903465,
        "lng": 121.55616909236895,
        "ele": 61.444150321818974,
        "distanceKm": 37.87315225948509,
        "gradePct": -0.97827647284473,
        "smoothedEle": 61.25671188804185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.953779811293312,
        "lng": 121.55660636546118,
        "ele": 61.117687902273715,
        "distanceKm": 37.92487310351625,
        "gradePct": -0.9456976632983619,
        "smoothedEle": 60.78300014153717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.953541412056854,
        "lng": 121.55704339996454,
        "ele": 60.58648253890631,
        "distanceKm": 37.97659378067372,
        "gradePct": -0.9467553770579195,
        "smoothedEle": 60.27666988327957,
        "gradeBand": "descent"
      },
      {
        "lat": 23.953302809042643,
        "lng": 121.5574802999734,
        "ele": 59.93986190417973,
        "distanceKm": 38.028314413267694,
        "gradePct": -0.9744561987844701,
        "smoothedEle": 59.72769402620702,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95306420602843,
        "lng": 121.55791719998227,
        "ele": 59.293241269453155,
        "distanceKm": 38.080035116368414,
        "gradePct": -1.0101657099422778,
        "smoothedEle": 59.17334031063052,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952825603014215,
        "lng": 121.55835409999113,
        "ele": 58.646620634726574,
        "distanceKm": 38.131755889975054,
        "gradePct": -1.0225683611810363,
        "smoothedEle": 58.67048295865621,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952587,
        "lng": 121.558791,
        "ele": 58,
        "distanceKm": 38.18347673408699,
        "gradePct": -1.0107520549147182,
        "smoothedEle": 58.18210836754206,
        "gradeBand": "descent"
      },
      {
        "lat": 23.952412,
        "lng": 121.559092,
        "ele": 57.25,
        "distanceKm": 38.219729268324095,
        "gradePct": -0.9847306152515359,
        "smoothedEle": 57.8493576924256,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9521,
        "lng": 121.559676,
        "ele": 56.5,
        "distanceKm": 38.28847162332778,
        "gradePct": -0.9336792988752204,
        "smoothedEle": 57.223957426434474,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95190254709135,
        "lng": 121.55997560794422,
        "ele": 56.54635260971365,
        "distanceKm": 38.32600851667111,
        "gradePct": -0.9149434668243519,
        "smoothedEle": 56.8964750987122,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951738,
        "lng": 121.560299,
        "ele": 56.75,
        "distanceKm": 38.3636217068645,
        "gradePct": -0.9024471568393345,
        "smoothedEle": 56.56469534825908,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9515275,
        "lng": 121.560672,
        "ele": 56.50000000000002,
        "distanceKm": 38.40817052789063,
        "gradePct": -0.9005904003728148,
        "smoothedEle": 56.15427095554802,
        "gradeBand": "descent"
      },
      {
        "lat": 23.951317,
        "lng": 121.561045,
        "ele": 56.25,
        "distanceKm": 38.4527194015505,
        "gradePct": -0.9065874658598267,
        "smoothedEle": 55.73604701333778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95109933333333,
        "lng": 121.56145133333332,
        "ele": 55.74999999999997,
        "distanceKm": 38.500581821705616,
        "gradePct": -0.9179695991639474,
        "smoothedEle": 55.28236547955122,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950881666666668,
        "lng": 121.56185766666667,
        "ele": 55.25000000000003,
        "distanceKm": 38.548444301977106,
        "gradePct": -0.9384050508818662,
        "smoothedEle": 54.821762633129524,
        "gradeBand": "descent"
      },
      {
        "lat": 23.950664,
        "lng": 121.562264,
        "ele": 54.75,
        "distanceKm": 38.59630684236239,
        "gradePct": -0.981145429572987,
        "smoothedEle": 54.30127919379878,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95042363055659,
        "lng": 121.56270016525852,
        "ele": 53.861262012423786,
        "distanceKm": 38.6480654015748,
        "gradePct": -1.0565456436214609,
        "smoothedEle": 53.666647385546156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.95018326111318,
        "lng": 121.56313633051703,
        "ele": 52.97252402484758,
        "distanceKm": 38.69982403151729,
        "gradePct": -1.1430856215858378,
        "smoothedEle": 53.00337722908686,
        "gradeBand": "descent"
      },
      {
        "lat": 23.94994289166977,
        "lng": 121.56357249577555,
        "ele": 52.083786037271494,
        "distanceKm": 38.75158273219211,
        "gradePct": -1.23226364726456,
        "smoothedEle": 52.32310633209016,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949702671534407,
        "lng": 121.56400875817609,
        "ele": 51.307343684266804,
        "distanceKm": 38.803341387491535,
        "gradePct": -1.287328304361313,
        "smoothedEle": 51.64036929357272,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949462737227527,
        "lng": 121.56444520654087,
        "ele": 50.745874947413434,
        "distanceKm": 38.85509991140903,
        "gradePct": -1.307288203845821,
        "smoothedEle": 50.961926002155806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.949222802920644,
        "lng": 121.56488165490566,
        "ele": 50.184406210560056,
        "distanceKm": 38.90685850602103,
        "gradePct": -1.2924747192682375,
        "smoothedEle": 50.325972836732554,
        "gradeBand": "descent"
      },
      {
        "lat": 23.94898286861376,
        "lng": 121.56531810327044,
        "ele": 49.622937473706756,
        "distanceKm": 38.958617171324235,
        "gradePct": -1.2432352520940704,
        "smoothedEle": 49.74384608842921,
        "gradeBand": "descent"
      },
      {
        "lat": 23.948742934306882,
        "lng": 121.56575455163522,
        "ele": 49.06146873685338,
        "distanceKm": 39.01037590731904,
        "gradePct": -1.1663079573822206,
        "smoothedEle": 49.21554590409521,
        "gradeBand": "descent"
      },
      {
        "lat": 23.948503,
        "lng": 121.566191,
        "ele": 48.5,
        "distanceKm": 39.06213471400522,
        "gradePct": -1.0711023306318515,
        "smoothedEle": 48.73328535837149,
        "gradeBand": "descent"
      },
      {
        "lat": 23.948258979537897,
        "lng": 121.56664023239455,
        "ele": 48.12138019844609,
        "distanceKm": 39.11524179180976,
        "gradePct": -0.9826897363804543,
        "smoothedEle": 48.2663070281919,
        "gradeBand": "descent"
      },
      {
        "lat": 23.948014959075795,
        "lng": 121.56708946478909,
        "ele": 47.74276039689217,
        "distanceKm": 39.16834894384783,
        "gradePct": -0.9116859956115574,
        "smoothedEle": 47.8211421270701,
        "gradeBand": "descent"
      },
      {
        "lat": 23.947770938613694,
        "lng": 121.56753869718364,
        "ele": 47.36414059533826,
        "distanceKm": 39.221456170118756,
        "gradePct": -0.8571310275995201,
        "smoothedEle": 47.398043957432805,
        "gradeBand": "descent"
      },
      {
        "lat": 23.947526918151592,
        "lng": 121.56798792957817,
        "ele": 46.9855207937844,
        "distanceKm": 39.27456347062061,
        "gradePct": -0.8187454047224126,
        "smoothedEle": 46.98650666771755,
        "gradeBand": "descent"
      },
      {
        "lat": 23.94728289768949,
        "lng": 121.56843716197271,
        "ele": 46.60690099223049,
        "distanceKm": 39.327670845355215,
        "gradePct": -0.7997408754320282,
        "smoothedEle": 46.56264009359527,
        "gradeBand": "descent"
      },
      {
        "lat": 23.947038128239953,
        "lng": 121.56888590341666,
        "ele": 46.23592828821779,
        "distanceKm": 39.380778046307604,
        "gradePct": -0.8059119846251752,
        "smoothedEle": 46.11029716067452,
        "gradeBand": "descent"
      },
      {
        "lat": 23.946793064119976,
        "lng": 121.56933445170833,
        "ele": 45.867964144108896,
        "distanceKm": 39.43388527256467,
        "gradePct": -0.8421919129055966,
        "smoothedEle": 45.617344952995516,
        "gradeBand": "descent"
      },
      {
        "lat": 23.946548,
        "lng": 121.569783,
        "ele": 45.5,
        "distanceKm": 39.48699257314223,
        "gradePct": -0.9017444523436295,
        "smoothedEle": 45.08381720695723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.946350333333335,
        "lng": 121.57014933333333,
        "ele": 44.916666666666664,
        "distanceKm": 39.5302250145088,
        "gradePct": -0.9624743929150985,
        "smoothedEle": 44.6159360590344,
        "gradeBand": "descent"
      },
      {
        "lat": 23.946152666666666,
        "lng": 121.57051566666667,
        "ele": 44.333333333333336,
        "distanceKm": 39.57345750499288,
        "gradePct": -1.0259560227942044,
        "smoothedEle": 44.12073814950489,
        "gradeBand": "descent"
      },
      {
        "lat": 23.945955,
        "lng": 121.570882,
        "ele": 43.75,
        "distanceKm": 39.61669004459371,
        "gradePct": -1.089460870087612,
        "smoothedEle": 43.59803285895016,
        "gradeBand": "descent"
      },
      {
        "lat": 23.94572342857143,
        "lng": 121.57129985714286,
        "ele": 43.035714285714285,
        "distanceKm": 39.6663516662379,
        "gradePct": -1.1630170744865869,
        "smoothedEle": 42.96514619670677,
        "gradeBand": "descent"
      },
      {
        "lat": 23.94549185714286,
        "lng": 121.57171771428571,
        "ele": 42.32142857142857,
        "distanceKm": 39.71601335305407,
        "gradePct": -1.2372077423164642,
        "smoothedEle": 42.29532563988339,
        "gradeBand": "descent"
      },
      {
        "lat": 23.945260285714287,
        "lng": 121.57213557142857,
        "ele": 41.607142857142854,
        "distanceKm": 39.76567510504413,
        "gradePct": -1.3114727554109349,
        "smoothedEle": 41.58693458129588,
        "gradeBand": "descent"
      },
      {
        "lat": 23.945028714285716,
        "lng": 121.57255342857142,
        "ele": 40.892857142857146,
        "distanceKm": 39.81533692220505,
        "gradePct": -1.3162346847010538,
        "smoothedEle": 40.98192348685221,
        "gradeBand": "descent"
      },
      {
        "lat": 23.944797142857144,
        "lng": 121.57297128571429,
        "ele": 40.17857142857143,
        "distanceKm": 39.86499880453873,
        "gradePct": -1.2410567432991257,
        "smoothedEle": 40.50027355116281,
        "gradeBand": "descent"
      },
      {
        "lat": 23.944565571428573,
        "lng": 121.57338914285714,
        "ele": 39.464285714285715,
        "distanceKm": 39.914660752042145,
        "gradePct": -1.1135980301250419,
        "smoothedEle": 40.08637301881255,
        "gradeBand": "descent"
      },
      {
        "lat": 23.944334,
        "lng": 121.573807,
        "ele": 38.75,
        "distanceKm": 39.9643227647172,
        "gradePct": -0.9314033251813757,
        "smoothedEle": 39.74341814437457,
        "gradeBand": "descent"
      },
      {
        "lat": 23.944162,
        "lng": 121.574165,
        "ele": 38,
        "distanceKm": 40.0054255300687,
        "gradePct": -0.7954550308604589,
        "smoothedEle": 39.51176015867195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.943859,
        "lng": 121.574733,
        "ele": 39.25,
        "distanceKm": 40.07226236493944,
        "gradePct": -0.5988489936449483,
        "smoothedEle": 39.242038439016795,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9436368,
        "lng": 121.5751288,
        "ele": 39.25,
        "distanceKm": 40.11946831978121,
        "gradePct": -0.5067905040222697,
        "smoothedEle": 39.03959201138233,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9434146,
        "lng": 121.5755246,
        "ele": 39.25,
        "distanceKm": 40.166674333644536,
        "gradePct": -0.46882016766664636,
        "smoothedEle": 38.79252420636301,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9431924,
        "lng": 121.5759204,
        "ele": 39.25,
        "distanceKm": 40.21388040653139,
        "gradePct": -0.48840269016498905,
        "smoothedEle": 38.50083491280078,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9429702,
        "lng": 121.5763162,
        "ele": 39.25,
        "distanceKm": 40.26108653843881,
        "gradePct": -0.5281559465512796,
        "smoothedEle": 38.23082687342296,
        "gradeBand": "descent"
      },
      {
        "lat": 23.942748,
        "lng": 121.576712,
        "ele": 39.25,
        "distanceKm": 40.30829272936879,
        "gradePct": -0.5755895014606647,
        "smoothedEle": 37.93634040158936,
        "gradeBand": "descent"
      },
      {
        "lat": 23.942510666666667,
        "lng": 121.57714133333333,
        "ele": 37.99999999999994,
        "distanceKm": 40.35928475634522,
        "gradePct": -0.6598091590466536,
        "smoothedEle": 37.51158160972861,
        "gradeBand": "descent"
      },
      {
        "lat": 23.942273333333336,
        "lng": 121.57757066666667,
        "ele": 36.75000000000006,
        "distanceKm": 40.41027685199015,
        "gradePct": -0.7606983143954655,
        "smoothedEle": 37.001704874178586,
        "gradeBand": "descent"
      },
      {
        "lat": 23.942036,
        "lng": 121.578,
        "ele": 35.5,
        "distanceKm": 40.46126901630091,
        "gradePct": -0.9262790758397241,
        "smoothedEle": 36.377130369744776,
        "gradeBand": "descent"
      },
      {
        "lat": 23.941793265155187,
        "lng": 121.57845139477251,
        "ele": 35.44641694298068,
        "distanceKm": 40.514494454878914,
        "gradePct": -1.1334570256200553,
        "smoothedEle": 35.61776655976372,
        "gradeBand": "descent"
      },
      {
        "lat": 23.941547657722523,
        "lng": 121.5789009341685,
        "ele": 35.30749871183598,
        "distanceKm": 40.567720724003706,
        "gradePct": -1.3039283630073328,
        "smoothedEle": 34.81937252289185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.941301934850184,
        "lng": 121.57935039699072,
        "ele": 34.54879794337861,
        "distanceKm": 40.6209469766383,
        "gradePct": -1.3647387888958191,
        "smoothedEle": 34.14153490659636,
        "gradeBand": "descent"
      },
      {
        "lat": 23.941056130453994,
        "lng": 121.57979980573633,
        "ele": 33.352404864569735,
        "distanceKm": 40.67417324209852,
        "gradePct": -1.2740334691096356,
        "smoothedEle": 33.64495969601252,
        "gradeBand": "descent"
      },
      {
        "lat": 23.94081,
        "lng": 121.580249,
        "ele": 32.25,
        "distanceKm": 40.72739951285607,
        "gradePct": -1.047271921760678,
        "smoothedEle": 33.329646846585085,
        "gradeBand": "descent"
      },
      {
        "lat": 23.940628,
        "lng": 121.580653,
        "ele": 31.75,
        "distanceKm": 40.77317405712375,
        "gradePct": -0.8285189176243636,
        "smoothedEle": 33.09288635829464,
        "gradeBand": "descent"
      },
      {
        "lat": 23.940516,
        "lng": 121.580995,
        "ele": 31.75,
        "distanceKm": 40.810094870732385,
        "gradePct": -0.7004921406564619,
        "smoothedEle": 32.87875245680355,
        "gradeBand": "descent"
      },
      {
        "lat": 23.940401333333334,
        "lng": 121.58152466666667,
        "ele": 32.166666666666686,
        "distanceKm": 40.86541366949577,
        "gradePct": -0.6028589728956305,
        "smoothedEle": 32.520964309041105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.940286666666665,
        "lng": 121.58205433333333,
        "ele": 32.583333333333314,
        "distanceKm": 40.92073251480139,
        "gradePct": -0.5927467996290248,
        "smoothedEle": 32.18364859659402,
        "gradeBand": "descent"
      },
      {
        "lat": 23.940172,
        "lng": 121.582584,
        "ele": 33,
        "distanceKm": 40.976051406648835,
        "gradePct": -0.5811688184832923,
        "smoothedEle": 31.91386062538597,
        "gradeBand": "descent"
      },
      {
        "lat": 23.939765652036943,
        "lng": 121.58262610631981,
        "ele": 32.7611524038766,
        "distanceKm": 41.021437484832205,
        "gradePct": -0.541478860316919,
        "smoothedEle": 31.722433546478715,
        "gradeBand": "descent"
      },
      {
        "lat": 23.939353768024628,
        "lng": 121.58263173754654,
        "ele": 32.090768269251065,
        "distanceKm": 41.06724053613369,
        "gradePct": -0.4967524375594153,
        "smoothedEle": 31.51631981562204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.938941884012316,
        "lng": 121.58263736877328,
        "ele": 31.420384134625532,
        "distanceKm": 41.11304358745762,
        "gradePct": -0.4548405739372867,
        "smoothedEle": 31.32085194152816,
        "gradeBand": "descent"
      },
      {
        "lat": 23.93853,
        "lng": 121.582643,
        "ele": 30.75,
        "distanceKm": 41.15884663880475,
        "gradePct": -0.4378929941555372,
        "smoothedEle": 31.12198158561903,
        "gradeBand": "descent"
      },
      {
        "lat": 23.938128333333335,
        "lng": 121.582645,
        "ele": 30.33333333333331,
        "distanceKm": 41.20351045854423,
        "gradePct": -0.4364625520137162,
        "smoothedEle": 30.92512013689943,
        "gradeBand": "descent"
      },
      {
        "lat": 23.937726666666666,
        "lng": 121.58264700000001,
        "ele": 29.91666666666669,
        "distanceKm": 41.248174278286996,
        "gradePct": -0.4408428256568237,
        "smoothedEle": 30.72043232461851,
        "gradeBand": "descent"
      },
      {
        "lat": 23.937325,
        "lng": 121.582649,
        "ele": 29.5,
        "distanceKm": 41.292838098032234,
        "gradePct": -0.4257482536530005,
        "smoothedEle": 30.555583839292254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.936823,
        "lng": 121.58265525,
        "ele": 29.874999999999975,
        "distanceKm": 41.34866164226053,
        "gradePct": -0.41605650021090784,
        "smoothedEle": 30.33409039636719,
        "gradeBand": "descent"
      },
      {
        "lat": 23.936321,
        "lng": 121.5826615,
        "ele": 30.25,
        "distanceKm": 41.404485186516936,
        "gradePct": -0.3817604610548634,
        "smoothedEle": 30.157132177768435,
        "gradeBand": "descent"
      },
      {
        "lat": 23.935819000000002,
        "lng": 121.58266775,
        "ele": 30.625000000000025,
        "distanceKm": 41.46030873080106,
        "gradePct": -0.2955432726640457,
        "smoothedEle": 30.084559056421288,
        "gradeBand": "descent"
      },
      {
        "lat": 23.935317,
        "lng": 121.582674,
        "ele": 31,
        "distanceKm": 41.516132275113684,
        "gradePct": -0.15356008277071845,
        "smoothedEle": 30.156038379850173,
        "gradeBand": "descent"
      },
      {
        "lat": 23.934948000000002,
        "lng": 121.582525,
        "ele": 30.250000000000064,
        "distanceKm": 41.559868544879244,
        "gradePct": 0.025501182077449863,
        "smoothedEle": 30.34956736438623,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.934579,
        "lng": 121.582376,
        "ele": 29.5,
        "distanceKm": 41.60360482963421,
        "gradePct": 0.19704107665539794,
        "smoothedEle": 30.554005024285384,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.9341795,
        "lng": 121.5821215,
        "ele": 29.75,
        "distanceKm": 41.65500899638696,
        "gradePct": 0.3191322214633566,
        "smoothedEle": 30.729713392737523,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.93378,
        "lng": 121.581867,
        "ele": 30,
        "distanceKm": 41.70641320341933,
        "gradePct": 0.34546281467683615,
        "smoothedEle": 30.83451921234218,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.93336,
        "lng": 121.5816275,
        "ele": 31.125,
        "distanceKm": 41.759077926906784,
        "gradePct": 0.2610716617272251,
        "smoothedEle": 30.868212275786185,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.93294,
        "lng": 121.581388,
        "ele": 32.25,
        "distanceKm": 41.81174268699725,
        "gradePct": 0.1472484762541019,
        "smoothedEle": 30.87631858642435,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.932699999999997,
        "lng": 121.58179600000001,
        "ele": 31.91666666666665,
        "distanceKm": 41.86105491235933,
        "gradePct": 0.09620057034125515,
        "smoothedEle": 30.934441290612217,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.93246,
        "lng": 121.582204,
        "ele": 31.58333333333335,
        "distanceKm": 41.91036720254577,
        "gradePct": 0.06438054057839346,
        "smoothedEle": 30.965809924998055,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.93222,
        "lng": 121.58261200000001,
        "ele": 31.25,
        "distanceKm": 41.95967955755865,
        "gradePct": 0.025618015312689115,
        "smoothedEle": 30.919540911123807,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.93198,
        "lng": 121.58302,
        "ele": 30.91666666666665,
        "distanceKm": 42.00899197739517,
        "gradePct": -0.07415565156916665,
        "smoothedEle": 30.72758388618952,
        "gradeBand": "descent"
      },
      {
        "lat": 23.93174,
        "lng": 121.583428,
        "ele": 30.58333333333335,
        "distanceKm": 42.05830446205554,
        "gradePct": -0.2917350549284479,
        "smoothedEle": 30.34772931510806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9315,
        "lng": 121.583836,
        "ele": 30.25,
        "distanceKm": 42.107617011540825,
        "gradePct": -0.5599837239058224,
        "smoothedEle": 29.84409302008758,
        "gradeBand": "descent"
      },
      {
        "lat": 23.931297745866438,
        "lng": 121.58422909620597,
        "ele": 29.79621319385193,
        "distanceKm": 42.153464587961224,
        "gradePct": -0.7601390572863431,
        "smoothedEle": 29.405094205626096,
        "gradeBand": "descent"
      },
      {
        "lat": 23.931088,
        "lng": 121.584618,
        "ele": 29.25,
        "distanceKm": 42.19935906390002,
        "gradePct": -0.8862190907463904,
        "smoothedEle": 28.992643467372105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.930801215794602,
        "lng": 121.58512761045885,
        "ele": 28.241570837087373,
        "distanceKm": 42.26018353494319,
        "gradePct": -0.999618888822173,
        "smoothedEle": 28.3293002906698,
        "gradeBand": "descent"
      },
      {
        "lat": 23.93052,
        "lng": 121.585641,
        "ele": 27,
        "distanceKm": 42.32101491716382,
        "gradePct": -1.0616113032415297,
        "smoothedEle": 27.59258305047695,
        "gradeBand": "descent"
      },
      {
        "lat": 23.930263,
        "lng": 121.58608849999999,
        "ele": 27,
        "distanceKm": 42.37472991253917,
        "gradePct": -1.1502535175950857,
        "smoothedEle": 26.913477050057097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.930006,
        "lng": 121.586536,
        "ele": 27,
        "distanceKm": 42.42844498457439,
        "gradePct": -1.2263746077868911,
        "smoothedEle": 26.222687267725156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.929819499999997,
        "lng": 121.5868785,
        "ele": 25.99999999999991,
        "distanceKm": 42.468964645178744,
        "gradePct": -1.273316104026765,
        "smoothedEle": 25.67632173534597,
        "gradeBand": "descent"
      },
      {
        "lat": 23.929633,
        "lng": 121.587221,
        "ele": 25,
        "distanceKm": 42.50948434898109,
        "gradePct": -1.3019044673035112,
        "smoothedEle": 25.12841862269089,
        "gradeBand": "descent"
      },
      {
        "lat": 23.929390333333334,
        "lng": 121.58765166666667,
        "ele": 24.41666666666664,
        "distanceKm": 42.56090488727629,
        "gradePct": -1.33561213296248,
        "smoothedEle": 24.417039313412754,
        "gradeBand": "descent"
      },
      {
        "lat": 23.929147666666665,
        "lng": 121.58808233333333,
        "ele": 23.83333333333336,
        "distanceKm": 42.61232549560004,
        "gradePct": -1.3560537245731852,
        "smoothedEle": 23.71788063486725,
        "gradeBand": "descent"
      },
      {
        "lat": 23.928905,
        "lng": 121.588513,
        "ele": 23.25,
        "distanceKm": 42.663746173953754,
        "gradePct": -1.369716371580683,
        "smoothedEle": 23.007254655828405,
        "gradeBand": "descent"
      },
      {
        "lat": 23.928663666666665,
        "lng": 121.58893166666667,
        "ele": 22.24999999999995,
        "distanceKm": 42.71405351127679,
        "gradePct": -1.3668242732979297,
        "smoothedEle": 22.331557833950985,
        "gradeBand": "descent"
      },
      {
        "lat": 23.928422333333334,
        "lng": 121.58935033333334,
        "ele": 21.25000000000005,
        "distanceKm": 42.76436091587344,
        "gradePct": -1.3025094391127479,
        "smoothedEle": 21.765029307198517,
        "gradeBand": "descent"
      },
      {
        "lat": 23.928181,
        "lng": 121.589769,
        "ele": 20.25,
        "distanceKm": 42.81466838774109,
        "gradePct": -1.2066475616300962,
        "smoothedEle": 21.272207097420043,
        "gradeBand": "descent"
      },
      {
        "lat": 23.927970199999997,
        "lng": 121.5901528,
        "ele": 20.149999999999995,
        "distanceKm": 42.86017794171056,
        "gradePct": -1.1730053030739171,
        "smoothedEle": 20.710556478307346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9277594,
        "lng": 121.59053660000001,
        "ele": 20.050000000000004,
        "distanceKm": 42.90568755026741,
        "gradePct": -1.196351027592807,
        "smoothedEle": 20.051222156450795,
        "gradeBand": "descent"
      },
      {
        "lat": 23.927548599999998,
        "lng": 121.5909204,
        "ele": 19.949999999999996,
        "distanceKm": 42.95119721340914,
        "gradePct": -1.263302409966666,
        "smoothedEle": 19.386665348098713,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9273378,
        "lng": 121.59130420000001,
        "ele": 19.850000000000005,
        "distanceKm": 42.99670693113739,
        "gradePct": -1.3278294545410005,
        "smoothedEle": 18.79250226445544,
        "gradeBand": "descent"
      },
      {
        "lat": 23.927127,
        "lng": 121.591688,
        "ele": 19.75,
        "distanceKm": 43.04221670344966,
        "gradePct": -1.3232863709697529,
        "smoothedEle": 18.285650171420826,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92686869009702,
        "lng": 121.59214532099726,
        "ele": 17.727606746614523,
        "distanceKm": 43.09685693819831,
        "gradePct": -1.1844135680165566,
        "smoothedEle": 17.810331203671964,
        "gradeBand": "descent"
      },
      {
        "lat": 23.926589,
        "lng": 121.59259,
        "ele": 15.75,
        "distanceKm": 43.1517202697282,
        "gradePct": -1.0075305882116259,
        "smoothedEle": 17.364775283891333,
        "gradeBand": "descent"
      },
      {
        "lat": 23.9263795,
        "lng": 121.5929905,
        "ele": 15.625000000000009,
        "distanceKm": 43.19862133457902,
        "gradePct": -0.9045909695682357,
        "smoothedEle": 16.961999203678396,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92617,
        "lng": 121.593391,
        "ele": 15.5,
        "distanceKm": 43.245522456747786,
        "gradePct": -0.8771640103973706,
        "smoothedEle": 16.502565186961395,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92592587594723,
        "lng": 121.59382898727115,
        "ele": 15.769254469969383,
        "distanceKm": 43.29766303596469,
        "gradePct": -0.9267417459443924,
        "smoothedEle": 15.950301233074759,
        "gradeBand": "descent"
      },
      {
        "lat": 23.925681751894455,
        "lng": 121.5942669745423,
        "ele": 16.038508939938804,
        "distanceKm": 43.349803687032036,
        "gradePct": -0.9275464102489944,
        "smoothedEle": 15.525247408908186,
        "gradeBand": "descent"
      },
      {
        "lat": 23.925437557067227,
        "lng": 121.59470491411953,
        "ele": 16.073848114487276,
        "distanceKm": 43.40194436906747,
        "gradePct": -0.8156973960739488,
        "smoothedEle": 15.298052629992663,
        "gradeBand": "descent"
      },
      {
        "lat": 23.925193103111173,
        "lng": 121.59514267907348,
        "ele": 15.25274557495188,
        "distanceKm": 43.454084987193085,
        "gradePct": -0.6184713607869369,
        "smoothedEle": 15.174929630938498,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92494864294196,
        "lng": 121.59558043962522,
        "ele": 14.5,
        "distanceKm": 43.506225655537094,
        "gradePct": -0.4071733298286655,
        "smoothedEle": 15.066151567132898,
        "gradeBand": "descent"
      },
      {
        "lat": 23.924704114353567,
        "lng": 121.59601815170018,
        "ele": 14.5,
        "distanceKm": 43.558366158136835,
        "gradePct": -0.2529616573419222,
        "smoothedEle": 14.982014480048162,
        "gradeBand": "descent"
      },
      {
        "lat": 23.924459585765174,
        "lng": 121.59645586377513,
        "ele": 14.5,
        "distanceKm": 43.61050673261403,
        "gradePct": -0.21058897867223045,
        "smoothedEle": 14.856655812252184,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92421505717678,
        "lng": 121.59689357585009,
        "ele": 14.5,
        "distanceKm": 43.66264737896801,
        "gradePct": -0.23900773922427127,
        "smoothedEle": 14.679050929244017,
        "gradeBand": "descent"
      },
      {
        "lat": 23.92397052858839,
        "lng": 121.59733128792504,
        "ele": 14.5,
        "distanceKm": 43.71478809719793,
        "gradePct": -0.2570245972093098,
        "smoothedEle": 14.538285495934122,
        "gradeBand": "descent"
      },
      {
        "lat": 23.923726,
        "lng": 121.597769,
        "ele": 14.5,
        "distanceKm": 43.76692888730354,
        "gradePct": -0.23071379454712498,
        "smoothedEle": 14.5,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 43.76692888730354,
      "elevationGainM": 198.2504490368562,
      "elevationLossM": 195.26972852226675,
      "minimumElevationM": 11.5,
      "maximumElevationM": 158.75,
      "maximumSustainedGradePct": 4.310452699320303
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 331,
        "startDistanceKm": 0,
        "endDistanceKm": 15.55295038215733,
        "distanceKm": 15.55295038215733,
        "gainM": 72.66900334454007,
        "averageGradePct": 0.46723612921640556,
        "maximumGradePct": 2.8888489299061564
      },
      {
        "startIndex": 338,
        "endIndex": 622,
        "startDistanceKm": 15.917764044718519,
        "endDistanceKm": 29.666943702902095,
        "distanceKm": 13.749179658183577,
        "gainM": 126.08334511024427,
        "averageGradePct": 0.9170244934227684,
        "maximumGradePct": 4.310452699320303
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
