"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("chiayi-city", {
  "chiayi-city-lantan": {
    "routeId": "chiayi-city-lantan",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T14:02:07.388Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "ff5feb6e96eae261cc743f9a23db00d6037b50a0a96ce6f310962c34fa887e4a",
      "roadPolicyAuditSha256": "55c5fd8586f17f0e89f9d1e4017dd2eb137a060a969eba1e372c1fb09c1a4332",
      "reviewedAt": "2026-07-29T14:18:29.613Z",
      "reviewerNote": "將嘉義公園起終點、月影潭心與音樂噴泉人行區、彌陀路停車支線等研究點逐一移到一般道路側後重產；最終 raw messages 無 motorway、trunk、motorroad、footway、path、steps、track、service、private、access 禁制或 bicycle=no。單行道標記共 1405 公尺，精確分組為 1379 公尺 `highway=tertiary surface=asphalt oneway=yes` 與 26 公尺同標記且 estimated_traffic_class=4，皆為順向，無 `reversedirection=yes` 與 `oneway=yes` 同段。Leaflet 疊圖確認公園街、大雅路、小雅路、環潭公路、彌陀路與啟明路連續；9.0 公里、爬升 99 公尺、最大持續坡度 5.1%。嘉義市官方將小雅路與環潭公路列入自行車活動路線，大型活動仍可能實施交通管制：https://website.ncyu.edu.tw/admission/Subject/Detail/242408?nodeId=34504"
    },
    "waypoints": [
      {
        "name": "嘉義公園東側公園街",
        "lat": 23.48382,
        "lng": 120.4664,
        "role": "start"
      },
      {
        "name": "大雅路二段與小雅路口",
        "lat": 23.4772,
        "lng": 120.4765,
        "role": "via"
      },
      {
        "name": "蘭潭國小小雅路",
        "lat": 23.4684,
        "lng": 120.4787,
        "role": "via"
      },
      {
        "name": "蘭潭南岸環潭公路",
        "lat": 23.46505,
        "lng": 120.47975,
        "role": "via"
      },
      {
        "name": "彌陀路與啟明路口",
        "lat": 23.47242,
        "lng": 120.46363,
        "role": "via"
      },
      {
        "name": "嘉義公園東側公園街",
        "lat": 23.48382,
        "lng": 120.4664,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.483699,
        "lng": 120.466387,
        "ele": 48,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 48.07324563328813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.483734,
        "lng": 120.466277,
        "ele": 48.25,
        "distanceKm": 0.011874262464147241,
        "gradePct": -0.5758639476759397,
        "smoothedEle": 48.00486603670469,
        "gradeBand": "descent"
      },
      {
        "lat": 23.48378,
        "lng": 120.46625,
        "ele": 48.25,
        "distanceKm": 0.017683329622356192,
        "gradePct": -0.6317294937831404,
        "smoothedEle": 47.961534824580816,
        "gradeBand": "descent"
      },
      {
        "lat": 23.484077,
        "lng": 120.46613,
        "ele": 47.75,
        "distanceKm": 0.05290292826734365,
        "gradePct": -0.48219137370987386,
        "smoothedEle": 47.81815227674308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.48421,
        "lng": 120.466136,
        "ele": 47.5,
        "distanceKm": 0.06770452773180237,
        "gradePct": -0.49798294820029887,
        "smoothedEle": 47.73608863002421,
        "gradeBand": "descent"
      },
      {
        "lat": 23.484193105205037,
        "lng": 120.46655023585546,
        "ele": 47.64432792823535,
        "distanceKm": 0.10999203397018406,
        "gradePct": -0.0010639334179245452,
        "smoothedEle": 48.014641178596385,
        "gradeBand": "descent"
      },
      {
        "lat": 23.48415655260252,
        "lng": 120.46696411792773,
        "ele": 49.07216396411768,
        "distanceKm": 0.15239695606993675,
        "gradePct": 1.2519517402468168,
        "smoothedEle": 49.07216388097445,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48412,
        "lng": 120.467378,
        "ele": 50.5,
        "distanceKm": 0.1948018898157354,
        "gradePct": 2.7312186829913188,
        "smoothedEle": 50.6458006775926,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484103,
        "lng": 120.467812,
        "ele": 52.5,
        "distanceKm": 0.23910366651308604,
        "gradePct": 3.618776195111934,
        "smoothedEle": 52.35942300685123,
        "gradeBand": "hard"
      },
      {
        "lat": 23.484113,
        "lng": 120.468248,
        "ele": 54,
        "distanceKm": 0.28358296786272286,
        "gradePct": 3.9963218164005667,
        "smoothedEle": 54.22579102394584,
        "gradeBand": "hard"
      },
      {
        "lat": 23.48413516666667,
        "lng": 120.46872416666666,
        "ele": 56.5,
        "distanceKm": 0.33220726675683804,
        "gradePct": 4.407334446429438,
        "smoothedEle": 56.50000010188742,
        "gradeBand": "hard"
      },
      {
        "lat": 23.484157333333332,
        "lng": 120.46920033333333,
        "ele": 59,
        "distanceKm": 0.38083155749995895,
        "gradePct": 4.889659279467713,
        "smoothedEle": 59.000000101923206,
        "gradeBand": "hard"
      },
      {
        "lat": 23.4841795,
        "lng": 120.46967649999999,
        "ele": 61.5,
        "distanceKm": 0.42945584008922355,
        "gradePct": 5.128687089522922,
        "smoothedEle": 61.50000010188736,
        "gradeBand": "hard"
      },
      {
        "lat": 23.484201666666667,
        "lng": 120.47015266666666,
        "ele": 64,
        "distanceKm": 0.4780801145274994,
        "gradePct": 5.14146442704409,
        "smoothedEle": 64.0000001019058,
        "gradeBand": "hard"
      },
      {
        "lat": 23.48422383333333,
        "lng": 120.47062883333334,
        "ele": 66.5,
        "distanceKm": 0.5267043808133117,
        "gradePct": 5.141465289052016,
        "smoothedEle": 66.50000010192348,
        "gradeBand": "hard"
      },
      {
        "lat": 23.484246,
        "lng": 120.471105,
        "ele": 69,
        "distanceKm": 0.575328638945246,
        "gradePct": 4.451855535959589,
        "smoothedEle": 68.31038948674747,
        "gradeBand": "hard"
      },
      {
        "lat": 23.484271,
        "lng": 120.471713,
        "ele": 68.75,
        "distanceKm": 0.6373976470238721,
        "gradePct": 2.449055988202048,
        "smoothedEle": 69.34719019808801,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484255,
        "lng": 120.472262,
        "ele": 71.25,
        "distanceKm": 0.6934155303689683,
        "gradePct": 2.5021565087330804,
        "smoothedEle": 71.11466942993756,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48421,
        "lng": 120.47271975,
        "ele": 72.8125,
        "distanceKm": 0.740366456689115,
        "gradePct": 3.3716376378455815,
        "smoothedEle": 72.81249987624089,
        "gradeBand": "hard"
      },
      {
        "lat": 23.484165,
        "lng": 120.4731775,
        "ele": 74.375,
        "distanceKm": 0.7873173988504273,
        "gradePct": 3.452739016027082,
        "smoothedEle": 74.37499987626363,
        "gradeBand": "hard"
      },
      {
        "lat": 23.48412,
        "lng": 120.47363525,
        "ele": 75.9375,
        "distanceKm": 0.8342683568499942,
        "gradePct": 3.3455183237793458,
        "smoothedEle": 75.9374998762526,
        "gradeBand": "hard"
      },
      {
        "lat": 23.484075,
        "lng": 120.474093,
        "ele": 77.5,
        "distanceKm": 0.8812193306892284,
        "gradePct": 3.145159943436711,
        "smoothedEle": 77.31721966422326,
        "gradeBand": "hard"
      },
      {
        "lat": 23.484043,
        "lng": 120.47457666666666,
        "ele": 78.41666666666667,
        "distanceKm": 0.9306742002664854,
        "gradePct": 2.5987781323734827,
        "smoothedEle": 78.4166666119482,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484011000000002,
        "lng": 120.47506033333333,
        "ele": 79.33333333333333,
        "distanceKm": 0.9801290817823154,
        "gradePct": 2.0481520976789516,
        "smoothedEle": 79.33333327861469,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.483979,
        "lng": 120.475544,
        "ele": 80.25,
        "distanceKm": 1.02958397523676,
        "gradePct": 2.0677929015632803,
        "smoothedEle": 80.4602223738423,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.483965,
        "lng": 120.475991,
        "ele": 81.875,
        "distanceKm": 1.0751978280971375,
        "gradePct": 2.633069507023166,
        "smoothedEle": 81.87499996068857,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.483951,
        "lng": 120.476438,
        "ele": 83.5,
        "distanceKm": 1.1208116857958454,
        "gradePct": 3.247598951195781,
        "smoothedEle": 83.50793418302547,
        "gradeBand": "hard"
      },
      {
        "lat": 23.48379,
        "lng": 120.476789,
        "ele": 85,
        "distanceKm": 1.1608354738993814,
        "gradePct": 3.5459843381985907,
        "smoothedEle": 84.97551575064743,
        "gradeBand": "hard"
      },
      {
        "lat": 23.483578,
        "lng": 120.477145,
        "ele": 86.5,
        "distanceKm": 1.204123828583259,
        "gradePct": 3.5034894676819985,
        "smoothedEle": 86.41401368551884,
        "gradeBand": "hard"
      },
      {
        "lat": 23.483562,
        "lng": 120.477745,
        "ele": 88.25,
        "distanceKm": 1.265340854253002,
        "gradePct": 3.280940159089792,
        "smoothedEle": 88.4061723954254,
        "gradeBand": "hard"
      },
      {
        "lat": 23.483341,
        "lng": 120.478177,
        "ele": 90.25,
        "distanceKm": 1.3157885121714874,
        "gradePct": 3.5185492902862707,
        "smoothedEle": 90.3121616373598,
        "gradeBand": "hard"
      },
      {
        "lat": 23.483255,
        "lng": 120.47852,
        "ele": 92,
        "distanceKm": 1.3520530769514956,
        "gradePct": 4.054982152521969,
        "smoothedEle": 92.02873626239877,
        "gradeBand": "hard"
      },
      {
        "lat": 23.483191,
        "lng": 120.479078,
        "ele": 94.75,
        "distanceKm": 1.4094042536370446,
        "gradePct": 4.592440192220091,
        "smoothedEle": 94.66339483233855,
        "gradeBand": "hard"
      },
      {
        "lat": 23.483079,
        "lng": 120.479553,
        "ele": 96.75,
        "distanceKm": 1.4594226383458198,
        "gradePct": 4.008754061341701,
        "smoothedEle": 96.37604097267852,
        "gradeBand": "hard"
      },
      {
        "lat": 23.482849999624904,
        "lng": 120.47992811009671,
        "ele": 97.21575419540432,
        "distanceKm": 1.5053781973799056,
        "gradePct": 2.7554766086921183,
        "smoothedEle": 97.23391824156818,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48259,
        "lng": 120.48028,
        "ele": 97.75,
        "distanceKm": 1.5514625014527708,
        "gradePct": 2.122466484528827,
        "smoothedEle": 98.22594972057044,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482418,
        "lng": 120.480602,
        "ele": 99.75,
        "distanceKm": 1.5894654122202618,
        "gradePct": 2.9140335119747194,
        "smoothedEle": 99.85089918884539,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482228666533757,
        "lng": 120.48101509119908,
        "ele": 102.47525443834246,
        "distanceKm": 1.6365624560024248,
        "gradePct": 4.5170124005583965,
        "smoothedEle": 102.42221703399599,
        "gradeBand": "hard"
      },
      {
        "lat": 23.482039,
        "lng": 120.481428,
        "ele": 105,
        "distanceKm": 1.683659487325805,
        "gradePct": 4.719208552792561,
        "smoothedEle": 104.32185479523042,
        "gradeBand": "hard"
      },
      {
        "lat": 23.48163005363744,
        "lng": 120.48122280118446,
        "ele": 104.95870251118136,
        "distanceKm": 1.733716848000428,
        "gradePct": 2.6891289701481873,
        "smoothedEle": 104.95598672788725,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48122204022808,
        "lng": 120.48101535088834,
        "ele": 104.90652688338602,
        "distanceKm": 1.783776629587367,
        "gradePct": 0.5831881248287938,
        "smoothedEle": 104.90652689060259,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48081402681872,
        "lng": 120.48080790059223,
        "ele": 104.85435125559069,
        "distanceKm": 1.8338364388369592,
        "gradePct": -0.10151730748681577,
        "smoothedEle": 104.85435126280709,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480406013409358,
        "lng": 120.48060045029612,
        "ele": 104.80217562779534,
        "distanceKm": 1.883896275748567,
        "gradePct": -0.10422655248730442,
        "smoothedEle": 104.80217563501179,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479998,
        "lng": 120.480393,
        "ele": 104.75,
        "distanceKm": 1.9339561403223164,
        "gradePct": -1.065159502857667,
        "smoothedEle": 103.78906699925238,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479848,
        "lng": 120.480394,
        "ele": 102.5,
        "distanceKm": 1.9506357141657216,
        "gradePct": -1.4734669813200854,
        "smoothedEle": 103.36337498080087,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47982,
        "lng": 120.480029,
        "ele": 102.25,
        "distanceKm": 1.9879913696179807,
        "gradePct": -2.5376894437290622,
        "smoothedEle": 102.18160991906996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479614,
        "lng": 120.479358,
        "ele": 100.5,
        "distanceKm": 2.0601573058236284,
        "gradePct": -2.4278626479005516,
        "smoothedEle": 100.63429196299506,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479368,
        "lng": 120.479049,
        "ele": 100.125,
        "distanceKm": 2.101887388380686,
        "gradePct": -1.7586637344007399,
        "smoothedEle": 100.1250000832258,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479122,
        "lng": 120.47874,
        "ele": 99.75,
        "distanceKm": 2.1436175153248356,
        "gradePct": -1.1898660742399858,
        "smoothedEle": 99.79905739738777,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4788355,
        "lng": 120.47833899999999,
        "ele": 99.5,
        "distanceKm": 2.1954586236512843,
        "gradePct": -0.7034594060355625,
        "smoothedEle": 99.5000000875965,
        "gradeBand": "descent"
      },
      {
        "lat": 23.478549,
        "lng": 120.477938,
        "ele": 99.25,
        "distanceKm": 2.247299802054938,
        "gradePct": -0.5375348248108902,
        "smoothedEle": 99.24028045798994,
        "gradeBand": "descent"
      },
      {
        "lat": 23.478169,
        "lng": 120.477366,
        "ele": 98.75,
        "distanceKm": 2.319332574452738,
        "gradePct": -0.804583868050471,
        "smoothedEle": 98.575809878596,
        "gradeBand": "descent"
      },
      {
        "lat": 23.477823401350733,
        "lng": 120.47689890778678,
        "ele": 97.49150664779135,
        "distanceKm": 2.3805388549656885,
        "gradePct": -1.2448790554595766,
        "smoothedEle": 97.68878578840211,
        "gradeBand": "descent"
      },
      {
        "lat": 23.477482,
        "lng": 120.476428,
        "ele": 97.25,
        "distanceKm": 2.4417581007073763,
        "gradePct": 0.2780447865017235,
        "smoothedEle": 98.52885563139675,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477433,
        "lng": 120.47636,
        "ele": 97.75,
        "distanceKm": 2.4505777074460555,
        "gradePct": 0.5049625908324482,
        "smoothedEle": 98.62795642777208,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477238,
        "lng": 120.476546,
        "ele": 101.5,
        "distanceKm": 2.4793877953849783,
        "gradePct": 1.1183788038700146,
        "smoothedEle": 98.8238461741095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477433,
        "lng": 120.47636,
        "ele": 97.75,
        "distanceKm": 2.508197883323901,
        "gradePct": 1.2015626794814824,
        "smoothedEle": 99.26989439872223,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477277,
        "lng": 120.47612,
        "ele": 99,
        "distanceKm": 2.538198760268684,
        "gradePct": 0.36929398419928783,
        "smoothedEle": 98.8493072209002,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477135,
        "lng": 120.475777,
        "ele": 99.25,
        "distanceKm": 2.5765797408451117,
        "gradePct": 0.1559988229392387,
        "smoothedEle": 98.96075206360536,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.476901644901815,
        "lng": 120.47526590975058,
        "ele": 98.23390450923858,
        "distanceKm": 2.634807257049093,
        "gradePct": -0.5012592851073943,
        "smoothedEle": 98.39559397154127,
        "gradeBand": "descent"
      },
      {
        "lat": 23.476670822450906,
        "lng": 120.47475345487528,
        "ele": 97.99195225461929,
        "distanceKm": 2.6930348008328737,
        "gradePct": -0.8090863831694569,
        "smoothedEle": 97.99195235392365,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47644,
        "lng": 120.474241,
        "ele": 97.75,
        "distanceKm": 2.751262426702569,
        "gradePct": -0.615319262941099,
        "smoothedEle": 97.66620513146387,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47621217332829,
        "lng": 120.47373030466966,
        "ele": 97.11154880881008,
        "distanceKm": 2.8091826339485078,
        "gradePct": -0.7842630887603541,
        "smoothedEle": 97.1173522179697,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47597,
        "lng": 120.473227,
        "ele": 96.5,
        "distanceKm": 2.86714966518687,
        "gradePct": -1.8482761783639303,
        "smoothedEle": 95.66738119879962,
        "gradeBand": "descent"
      },
      {
        "lat": 23.475724085575983,
        "lng": 120.47275248409274,
        "ele": 92.17176480717146,
        "distanceKm": 2.9227368817652315,
        "gradePct": -4.606543567557349,
        "smoothedEle": 92.17176650695525,
        "gradeBand": "descent"
      },
      {
        "lat": 23.475478171151966,
        "lng": 120.47227796818548,
        "ele": 87.84352961434288,
        "distanceKm": 2.9783241768875595,
        "gradePct": -7.013510911022829,
        "smoothedEle": 87.95115859110366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.475233,
        "lng": 120.471803,
        "ele": 84,
        "distanceKm": 3.033911136261807,
        "gradePct": -6.975503399186588,
        "smoothedEle": 84.34782918274678,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474980630708927,
        "lng": 120.47206532526057,
        "ele": 82.34817223254048,
        "distanceKm": 3.0726838083580734,
        "gradePct": -5.937590100776456,
        "smoothedEle": 82.44182793363132,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474782,
        "lng": 120.472379,
        "ele": 81,
        "distanceKm": 3.111559674399842,
        "gradePct": -4.458645159762934,
        "smoothedEle": 81.33807924505815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474669,
        "lng": 120.47276,
        "ele": 80.75,
        "distanceKm": 3.1523996298840733,
        "gradePct": -2.587287472286105,
        "smoothedEle": 80.85167755348925,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474552499999998,
        "lng": 120.4732905,
        "ele": 80.875,
        "distanceKm": 3.2080356333328055,
        "gradePct": -0.5631324974020511,
        "smoothedEle": 80.87499997096026,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474436,
        "lng": 120.473821,
        "ele": 81,
        "distanceKm": 3.2636716832450974,
        "gradePct": -0.735318528101643,
        "smoothedEle": 80.12108423061346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47390604844119,
        "lng": 120.47388402821937,
        "ele": 76.81955687830954,
        "distanceKm": 3.3229492872787323,
        "gradePct": -3.7798863411373103,
        "smoothedEle": 76.89302094938203,
        "gradeBand": "descent"
      },
      {
        "lat": 23.473376,
        "lng": 120.473946,
        "ele": 73,
        "distanceKm": 3.38222601731379,
        "gradePct": -5.619713916423261,
        "smoothedEle": 73.49096232804987,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47301,
        "lng": 120.474071,
        "ele": 72,
        "distanceKm": 3.4248736370219146,
        "gradePct": -4.19037247083919,
        "smoothedEle": 72.59220462257476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.472633,
        "lng": 120.474358,
        "ele": 73.25,
        "distanceKm": 3.476002801643455,
        "gradePct": -0.5597645871319935,
        "smoothedEle": 73.28836562975305,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4722975,
        "lng": 120.4747155,
        "ele": 74.6875,
        "distanceKm": 3.5281685963052403,
        "gradePct": 2.0504316288100153,
        "smoothedEle": 74.68749953421504,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.471961999999998,
        "lng": 120.475073,
        "ele": 76.125,
        "distanceKm": 3.5803344557718897,
        "gradePct": 2.7204550138180372,
        "smoothedEle": 76.12499953421751,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4716265,
        "lng": 120.47543049999999,
        "ele": 77.5625,
        "distanceKm": 3.6325003800430613,
        "gradePct": 2.7556319077869182,
        "smoothedEle": 77.56249953421386,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.471291,
        "lng": 120.475788,
        "ele": 79,
        "distanceKm": 3.6846663691192614,
        "gradePct": 2.682279803645526,
        "smoothedEle": 78.92665085334622,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.470865,
        "lng": 120.476094,
        "ele": 80.25,
        "distanceKm": 3.7413931200214994,
        "gradePct": 2.575255377590293,
        "smoothedEle": 80.3703018870866,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.470529,
        "lng": 120.476123,
        "ele": 81.5,
        "distanceKm": 3.778871568989884,
        "gradePct": 2.735769940052277,
        "smoothedEle": 81.51088558088577,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.469991,
        "lng": 120.476135,
        "ele": 83.5,
        "distanceKm": 3.8387070415065474,
        "gradePct": 3.4924055813483763,
        "smoothedEle": 83.79434889045999,
        "gradeBand": "hard"
      },
      {
        "lat": 23.469553,
        "lng": 120.476055,
        "ele": 86.25,
        "distanceKm": 3.8880892840306656,
        "gradePct": 3.845375160221419,
        "smoothedEle": 85.70803057275468,
        "gradeBand": "hard"
      },
      {
        "lat": 23.469209,
        "lng": 120.476087,
        "ele": 86.75,
        "distanceKm": 3.9264793888114466,
        "gradePct": 2.2162698259497784,
        "smoothedEle": 85.54398253694777,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.468712,
        "lng": 120.476257,
        "ele": 81.75,
        "distanceKm": 3.984399679811279,
        "gradePct": -3.638531614711039,
        "smoothedEle": 81.92651784482042,
        "gradeBand": "descent"
      },
      {
        "lat": 23.468321,
        "lng": 120.476408,
        "ele": 78.5,
        "distanceKm": 4.030524302569202,
        "gradePct": -6.9993592283986255,
        "smoothedEle": 78.29199452425274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.468283,
        "lng": 120.47656,
        "ele": 76.25,
        "distanceKm": 4.0465933530108895,
        "gradePct": -7.017746463703441,
        "smoothedEle": 77.27000006244099,
        "gradeBand": "descent"
      },
      {
        "lat": 23.468361,
        "lng": 120.476849,
        "ele": 75.5,
        "distanceKm": 4.077320005887518,
        "gradePct": -6.834615405769733,
        "smoothedEle": 75.53406994216378,
        "gradeBand": "descent"
      },
      {
        "lat": 23.468285,
        "lng": 120.477194,
        "ele": 74,
        "distanceKm": 4.113509525573419,
        "gradePct": -5.794282997778062,
        "smoothedEle": 73.83844018912394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.467967,
        "lng": 120.47761299999999,
        "ele": 71.125,
        "distanceKm": 4.168978157696424,
        "gradePct": -4.88034908039555,
        "smoothedEle": 71.1250011405491,
        "gradeBand": "descent"
      },
      {
        "lat": 23.467649,
        "lng": 120.478032,
        "ele": 68.25,
        "distanceKm": 4.2244468691619765,
        "gradePct": -4.41326511137949,
        "smoothedEle": 68.89013727268268,
        "gradeBand": "descent"
      },
      {
        "lat": 23.467402,
        "lng": 120.478359,
        "ele": 68.25,
        "distanceKm": 4.267653062578253,
        "gradePct": -2.923401239927468,
        "smoothedEle": 68.2664214889519,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46714718740679,
        "lng": 120.47862787176466,
        "ele": 68.30422522306903,
        "distanceKm": 4.307085348800457,
        "gradePct": -1.1669525173167483,
        "smoothedEle": 68.42268963878625,
        "gradeBand": "descent"
      },
      {
        "lat": 23.466861,
        "lng": 120.478857,
        "ele": 68.75,
        "distanceKm": 4.346567835630335,
        "gradePct": 0.104823280279604,
        "smoothedEle": 68.675626799008,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.466450000000002,
        "lng": 120.47909166666668,
        "ele": 69,
        "distanceKm": 4.398157672688621,
        "gradePct": 0.6126902455021388,
        "smoothedEle": 68.99999995677277,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.466039,
        "lng": 120.47932633333333,
        "ele": 69.25,
        "distanceKm": 4.449747544328692,
        "gradePct": 0.5543806125256073,
        "smoothedEle": 69.24999995677257,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465628,
        "lng": 120.479561,
        "ele": 69.5,
        "distanceKm": 4.501337450550707,
        "gradePct": 0.4986134895717118,
        "smoothedEle": 69.51402237139604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465388,
        "lng": 120.479858,
        "ele": 69.75,
        "distanceKm": 4.5417094596558965,
        "gradePct": 1.3455683006736667,
        "smoothedEle": 70.55661640305479,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465205,
        "lng": 120.48026,
        "ele": 73,
        "distanceKm": 4.587484758629847,
        "gradePct": 3.180061414813889,
        "smoothedEle": 72.62318966296338,
        "gradeBand": "hard"
      },
      {
        "lat": 23.465005,
        "lng": 120.48096,
        "ele": 77,
        "distanceKm": 4.662267705898012,
        "gradePct": 4.607449416725447,
        "smoothedEle": 76.09218912878909,
        "gradeBand": "hard"
      },
      {
        "lat": 23.464634,
        "lng": 120.480756,
        "ele": 75.5,
        "distanceKm": 4.708471730354781,
        "gradePct": 1.687028465810889,
        "smoothedEle": 75.28375282301452,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464388,
        "lng": 120.480497,
        "ele": 73.5,
        "distanceKm": 4.746500030998811,
        "gradePct": -1.8106482344766652,
        "smoothedEle": 73.55011671539502,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464158,
        "lng": 120.480083,
        "ele": 71.25,
        "distanceKm": 4.7958688951619495,
        "gradePct": -5.141184776995505,
        "smoothedEle": 70.36308107806262,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464067,
        "lng": 120.479686,
        "ele": 66.25,
        "distanceKm": 4.837608127157866,
        "gradePct": -7.708343296121951,
        "smoothedEle": 66.24713798469084,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464145005143497,
        "lng": 120.47921947808969,
        "ele": 60.596830717492466,
        "distanceKm": 4.885977576488632,
        "gradePct": -10.388255364506195,
        "smoothedEle": 60.61336552293715,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46424,
        "lng": 120.478756,
        "ele": 55,
        "distanceKm": 4.934418167859133,
        "gradePct": -11.46146870614695,
        "smoothedEle": 55.100234025327985,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464236,
        "lng": 120.478621,
        "ele": 53.5,
        "distanceKm": 4.948195379493356,
        "gradePct": -11.362500752634002,
        "smoothedEle": 53.6514999630042,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464174,
        "lng": 120.478446,
        "ele": 51.25,
        "distanceKm": 4.967330493839107,
        "gradePct": -10.714438837403337,
        "smoothedEle": 52.07082283437253,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464092,
        "lng": 120.478285,
        "ele": 50,
        "distanceKm": 4.986114038670352,
        "gradePct": -9.419230003481102,
        "smoothedEle": 51.17860445488839,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464003,
        "lng": 120.478172,
        "ele": 50.25,
        "distanceKm": 5.0013057345999465,
        "gradePct": -8.261850426803017,
        "smoothedEle": 50.60698331208818,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463908,
        "lng": 120.478102,
        "ele": 50.25,
        "distanceKm": 5.01405596060031,
        "gradePct": -7.083508139412342,
        "smoothedEle": 50.33419400559313,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463987,
        "lng": 120.477755,
        "ele": 50.25,
        "distanceKm": 5.0505239208138,
        "gradePct": -3.1048837181304916,
        "smoothedEle": 50.354264532634375,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464156,
        "lng": 120.477214,
        "ele": 50.75,
        "distanceKm": 5.108818107760048,
        "gradePct": 0.29495391312552605,
        "smoothedEle": 50.74121104950374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464307,
        "lng": 120.476502,
        "ele": 51.5,
        "distanceKm": 5.183357952523218,
        "gradePct": 0.6830573475251878,
        "smoothedEle": 51.25526838340957,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4643,
        "lng": 120.476107,
        "ele": 51,
        "distanceKm": 5.2236555387422925,
        "gradePct": 0.15135962685146664,
        "smoothedEle": 50.994895684369084,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464189,
        "lng": 120.475752,
        "ele": 50.5,
        "distanceKm": 5.261911398709005,
        "gradePct": -0.9544566517260724,
        "smoothedEle": 50.15290750260669,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464076,
        "lng": 120.475352,
        "ele": 48.75,
        "distanceKm": 5.3046025018545455,
        "gradePct": -2.252097686245656,
        "smoothedEle": 48.86590439492872,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464007,
        "lng": 120.474984,
        "ele": 47.5,
        "distanceKm": 5.342914749446898,
        "gradePct": -2.231530888300477,
        "smoothedEle": 48.339481296456796,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463956,
        "lng": 120.474601,
        "ele": 49,
        "distanceKm": 5.3823903702590306,
        "gradePct": -0.5263264259572101,
        "smoothedEle": 49.00920419751195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464006,
        "lng": 120.47423,
        "ele": 50.5,
        "distanceKm": 5.420638764736237,
        "gradePct": 1.7276060870703904,
        "smoothedEle": 50.373166865411704,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464168,
        "lng": 120.473813,
        "ele": 51.75,
        "distanceKm": 5.4668301396430135,
        "gradePct": 2.9471730897180315,
        "smoothedEle": 51.69239048791298,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464167,
        "lng": 120.473486,
        "ele": 52.5,
        "distanceKm": 5.500184415886293,
        "gradePct": 2.735337511743327,
        "smoothedEle": 52.37908897008095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464178,
        "lng": 120.473386,
        "ele": 52.75,
        "distanceKm": 5.510457518873389,
        "gradePct": 2.4974057530947693,
        "smoothedEle": 52.50750275741965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464433,
        "lng": 120.472802,
        "ele": 53,
        "distanceKm": 5.576429862577176,
        "gradePct": 1.1731507596162811,
        "smoothedEle": 53.06318052832315,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464744,
        "lng": 120.472185,
        "ele": 53.75,
        "distanceKm": 5.648239169592264,
        "gradePct": 1.574296001841637,
        "smoothedEle": 54.40002943402378,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465074,
        "lng": 120.471929,
        "ele": 56.5,
        "distanceKm": 5.693275930849194,
        "gradePct": 2.936110301766224,
        "smoothedEle": 56.31290822692727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465387335346136,
        "lng": 120.47177199769601,
        "ele": 58.344641297192084,
        "distanceKm": 5.73162136846787,
        "gradePct": 4.039475073193167,
        "smoothedEle": 58.13013668051407,
        "gradeBand": "hard"
      },
      {
        "lat": 23.465729,
        "lng": 120.4717,
        "ele": 59.5,
        "distanceKm": 5.770316054004795,
        "gradePct": 3.965937524469147,
        "smoothedEle": 59.30365436823342,
        "gradeBand": "hard"
      },
      {
        "lat": 23.466249,
        "lng": 120.471667,
        "ele": 60.25,
        "distanceKm": 5.828235384351496,
        "gradePct": 1.9402259456910753,
        "smoothedEle": 59.90989746889342,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.466331,
        "lng": 120.471644,
        "ele": 60.25,
        "distanceKm": 5.837650342163693,
        "gradePct": 1.569178497033795,
        "smoothedEle": 59.88215959591358,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46638,
        "lng": 120.471614,
        "ele": 60.25,
        "distanceKm": 5.843899352887256,
        "gradePct": 1.270303191820294,
        "smoothedEle": 59.772801908251225,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.466419,
        "lng": 120.471563,
        "ele": 60,
        "distanceKm": 5.85067181228854,
        "gradePct": 0.9359218842542167,
        "smoothedEle": 59.6438131704008,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46646,
        "lng": 120.471442,
        "ele": 59.5,
        "distanceKm": 5.863828750215365,
        "gradePct": 0.2079798329055798,
        "smoothedEle": 59.314889722230156,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.466363,
        "lng": 120.471019,
        "ele": 57.75,
        "distanceKm": 5.9083018914857535,
        "gradePct": -1.761593564855125,
        "smoothedEle": 57.939659528325144,
        "gradeBand": "descent"
      },
      {
        "lat": 23.466151,
        "lng": 120.470693,
        "ele": 56.75,
        "distanceKm": 5.949061794373964,
        "gradePct": -2.8035639232265366,
        "smoothedEle": 56.87091376155707,
        "gradeBand": "descent"
      },
      {
        "lat": 23.465759,
        "lng": 120.470393,
        "ele": 56,
        "distanceKm": 6.002318667973465,
        "gradePct": -2.3616674070409345,
        "smoothedEle": 55.76300962614079,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46547509318006,
        "lng": 120.46995134153458,
        "ele": 54.167287867076155,
        "distanceKm": 6.057327739997957,
        "gradePct": -2.491500793562901,
        "smoothedEle": 54.207456284828424,
        "gradeBand": "descent"
      },
      {
        "lat": 23.465225,
        "lng": 120.469482,
        "ele": 52.5,
        "distanceKm": 6.112691335276635,
        "gradePct": -2.8100083029689986,
        "smoothedEle": 52.65968175445441,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46494185739404,
        "lng": 120.46921272262475,
        "ele": 51.770251015576555,
        "distanceKm": 6.154472158494299,
        "gradePct": -2.238537088937357,
        "smoothedEle": 52.04966968278217,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464648,
        "lng": 120.468959,
        "ele": 52,
        "distanceKm": 6.196154824279018,
        "gradePct": -0.952025529201183,
        "smoothedEle": 52.169959845791716,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464751,
        "lng": 120.468616,
        "ele": 52.75,
        "distanceKm": 6.232967734320902,
        "gradePct": 0.4437491946248942,
        "smoothedEle": 52.80738967381267,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465055,
        "lng": 120.468217,
        "ele": 54,
        "distanceKm": 6.285873132536005,
        "gradePct": 1.5471663470700732,
        "smoothedEle": 53.68745471306323,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465486414753236,
        "lng": 120.46795143262432,
        "ele": 53.91892989624556,
        "distanceKm": 6.340963788799871,
        "gradePct": 0.900171506506648,
        "smoothedEle": 53.84057308905257,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465914467249473,
        "lng": 120.46767911380009,
        "ele": 53.488726382439125,
        "distanceKm": 6.396073019721872,
        "gradePct": -0.015756264978257717,
        "smoothedEle": 53.70004790454623,
        "gradeBand": "descent"
      },
      {
        "lat": 23.466341,
        "lng": 120.467404,
        "ele": 54,
        "distanceKm": 6.4511809364258665,
        "gradePct": -0.1365296040087434,
        "smoothedEle": 53.67799038048674,
        "gradeBand": "descent"
      },
      {
        "lat": 23.466692666666667,
        "lng": 120.467191,
        "ele": 53.24999999999999,
        "distanceKm": 6.495914554991122,
        "gradePct": -0.4504520853939001,
        "smoothedEle": 53.249999894570436,
        "gradeBand": "descent"
      },
      {
        "lat": 23.467044333333334,
        "lng": 120.466978,
        "ele": 52.50000000000001,
        "distanceKm": 6.54064814544183,
        "gradePct": -1.182206346440691,
        "smoothedEle": 52.49999989456918,
        "gradeBand": "descent"
      },
      {
        "lat": 23.467396,
        "lng": 120.466765,
        "ele": 51.75,
        "distanceKm": 6.585381707777651,
        "gradePct": -1.667858270083633,
        "smoothedEle": 51.68291501464749,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46778584674474,
        "lng": 120.46651595952076,
        "ele": 50.6473003303752,
        "distanceKm": 6.635624891094007,
        "gradePct": -1.9369192764813188,
        "smoothedEle": 50.64730012121549,
        "gradeBand": "descent"
      },
      {
        "lat": 23.468175693489474,
        "lng": 120.46626691904153,
        "ele": 49.54460066075039,
        "distanceKm": 6.68586803647443,
        "gradePct": -2.113837203274969,
        "smoothedEle": 49.55905358105422,
        "gradeBand": "descent"
      },
      {
        "lat": 23.468565688713532,
        "lng": 120.46601815872953,
        "ele": 48.5,
        "distanceKm": 6.736110952219404,
        "gradePct": -2.001285127833114,
        "smoothedEle": 48.63548710278129,
        "gradeBand": "descent"
      },
      {
        "lat": 23.468956,
        "lng": 120.46577,
        "ele": 48,
        "distanceKm": 6.7863532271522935,
        "gradePct": -1.5818231278648427,
        "smoothedEle": 47.968311666550484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.469501,
        "lng": 120.465451,
        "ele": 47,
        "distanceKm": 6.8551366979288355,
        "gradePct": -1.64909104467491,
        "smoothedEle": 46.733750050132784,
        "gradeBand": "descent"
      },
      {
        "lat": 23.469921496463105,
        "lng": 120.46518089943181,
        "ele": 45.152946889530455,
        "distanceKm": 6.909406275388128,
        "gradePct": -2.414207603840006,
        "smoothedEle": 45.14033592667316,
        "gradeBand": "descent"
      },
      {
        "lat": 23.470346,
        "lng": 120.464918,
        "ele": 43.25,
        "distanceKm": 6.963693642919534,
        "gradePct": -2.6664745601206428,
        "smoothedEle": 43.816034230356614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.470716,
        "lng": 120.464684,
        "ele": 43.75,
        "distanceKm": 7.0112573743136135,
        "gradePct": -1.39600010839551,
        "smoothedEle": 43.69917957735932,
        "gradeBand": "descent"
      },
      {
        "lat": 23.471,
        "lng": 120.464519,
        "ele": 44,
        "distanceKm": 7.04704117521432,
        "gradePct": -0.459451939722692,
        "smoothedEle": 43.76280738926508,
        "gradeBand": "descent"
      },
      {
        "lat": 23.471533,
        "lng": 120.46418,
        "ele": 43,
        "distanceKm": 7.115656702842158,
        "gradePct": -0.4801201823076883,
        "smoothedEle": 43.22688191924079,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47188,
        "lng": 120.463972,
        "ele": 43.25,
        "distanceKm": 7.159689056938165,
        "gradePct": -0.5220490428358833,
        "smoothedEle": 43.14197134890834,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47242,
        "lng": 120.463628,
        "ele": 43,
        "distanceKm": 7.229233781968824,
        "gradePct": -0.2561004432897045,
        "smoothedEle": 42.94459987481342,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47276237973972,
        "lng": 120.46341726620325,
        "ele": 42.66784685678142,
        "distanceKm": 7.272952984507427,
        "gradePct": -0.46183084359232557,
        "smoothedEle": 42.64249680285721,
        "gradeBand": "descent"
      },
      {
        "lat": 23.473105600540308,
        "lng": 120.46320147886821,
        "ele": 42.24306863823189,
        "distanceKm": 7.3170088387702945,
        "gradePct": -0.6854023129274107,
        "smoothedEle": 42.29389257374718,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47345,
        "lng": 120.462988,
        "ele": 42,
        "distanceKm": 7.361061401205505,
        "gradePct": -0.3180200272304401,
        "smoothedEle": 42.406648536256704,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4738135,
        "lng": 120.4627765,
        "ele": 43.249999999999986,
        "distanceKm": 7.406876889373581,
        "gradePct": 0.8759357268676983,
        "smoothedEle": 43.250000174884946,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.474177,
        "lng": 120.462565,
        "ele": 44.5,
        "distanceKm": 7.452692349560064,
        "gradePct": 1.297846126783374,
        "smoothedEle": 43.68307342392461,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4744945,
        "lng": 120.462358,
        "ele": 42.875,
        "distanceKm": 7.493827955438105,
        "gradePct": -0.14980277782551407,
        "smoothedEle": 42.859998279755196,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474812,
        "lng": 120.462151,
        "ele": 41.25,
        "distanceKm": 7.534963535239093,
        "gradePct": -2.1511596888109428,
        "smoothedEle": 41.36433110714591,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474885,
        "lng": 120.462068,
        "ele": 40.75,
        "distanceKm": 7.546691772289612,
        "gradePct": -2.5992083332801763,
        "smoothedEle": 41.02714429194351,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474919,
        "lng": 120.462021,
        "ele": 40.75,
        "distanceKm": 7.552796852663832,
        "gradePct": -2.829359208412281,
        "smoothedEle": 40.851623231184675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474952,
        "lng": 120.461927,
        "ele": 40.5,
        "distanceKm": 7.563062329570674,
        "gradePct": -2.919091537293955,
        "smoothedEle": 40.55649077011296,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474984,
        "lng": 120.461799,
        "ele": 40,
        "distanceKm": 7.576593525190411,
        "gradePct": -2.8391561619659202,
        "smoothedEle": 40.36568281863747,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474968,
        "lng": 120.461729,
        "ele": 40,
        "distanceKm": 7.583951296591399,
        "gradePct": -2.7839104386760125,
        "smoothedEle": 40.27370818070093,
        "gradeBand": "descent"
      },
      {
        "lat": 23.474934,
        "lng": 120.461548,
        "ele": 40,
        "distanceKm": 7.60279499008972,
        "gradePct": -2.4569519282768524,
        "smoothedEle": 40.077009878212245,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47549290303149,
        "lng": 120.46159187048029,
        "ele": 39.888616234453295,
        "distanceKm": 7.665103122324856,
        "gradePct": -0.6912813766307788,
        "smoothedEle": 39.83643148680233,
        "gradeBand": "descent"
      },
      {
        "lat": 23.476051,
        "lng": 120.46165,
        "ele": 39.5,
        "distanceKm": 7.727443317111315,
        "gradePct": -0.5794479935470583,
        "smoothedEle": 39.402392046426044,
        "gradeBand": "descent"
      },
      {
        "lat": 23.476456499999998,
        "lng": 120.4616975,
        "ele": 38.875,
        "distanceKm": 7.772792433259919,
        "gradePct": -0.9078951782179662,
        "smoothedEle": 38.8749999950299,
        "gradeBand": "descent"
      },
      {
        "lat": 23.476862,
        "lng": 120.461745,
        "ele": 38.25,
        "distanceKm": 7.818141547818092,
        "gradePct": -0.8600474045326182,
        "smoothedEle": 38.60710758901558,
        "gradeBand": "descent"
      },
      {
        "lat": 23.477284,
        "lng": 120.461923,
        "ele": 39,
        "distanceKm": 7.868455261948793,
        "gradePct": 0.03170809992759882,
        "smoothedEle": 38.957147659590596,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477638,
        "lng": 120.462083,
        "ele": 39.5,
        "distanceKm": 7.911066769308605,
        "gradePct": 0.5885095884890553,
        "smoothedEle": 39.237410263331995,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.47805252746153,
        "lng": 120.4622591458822,
        "ele": 39.028517445939386,
        "distanceKm": 7.960537431990975,
        "gradePct": 0.12645527096130893,
        "smoothedEle": 39.02851739760882,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.47846705492306,
        "lng": 120.4624352917644,
        "ele": 38.557034891878764,
        "distanceKm": 8.010008074171822,
        "gradePct": -0.5687039213159741,
        "smoothedEle": 38.661743137145145,
        "gradeBand": "descent"
      },
      {
        "lat": 23.478881,
        "lng": 120.462613,
        "ele": 38.5,
        "distanceKm": 8.059476521793906,
        "gradePct": -0.41155617086497787,
        "smoothedEle": 38.62144098422685,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47925629166527,
        "lng": 120.46278629183988,
        "ele": 38.891472529834495,
        "distanceKm": 8.104795455850198,
        "gradePct": 0.18207640522589294,
        "smoothedEle": 38.88246578074013,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479631761517396,
        "lng": 120.46295911622995,
        "ele": 39.25,
        "distanceKm": 8.150114051964724,
        "gradePct": 0.6500712885774386,
        "smoothedEle": 39.27913991646174,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.480007505655067,
        "lng": 120.46313122980995,
        "ele": 39.715107770753306,
        "distanceKm": 8.195432598994561,
        "gradePct": 0.9056481013743355,
        "smoothedEle": 39.734186360286834,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.480383,
        "lng": 120.463304,
        "ele": 40.25,
        "distanceKm": 8.24075151559127,
        "gradePct": 1.227027567116008,
        "smoothedEle": 40.42421710685565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.480911,
        "lng": 120.463538,
        "ele": 42,
        "distanceKm": 8.304127568179648,
        "gradePct": 1.7878612991564173,
        "smoothedEle": 41.654438204688866,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481092,
        "lng": 120.463582,
        "ele": 42,
        "distanceKm": 8.324748078593997,
        "gradePct": 1.66304447835106,
        "smoothedEle": 41.84359151521881,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481545663636616,
        "lng": 120.46351730814466,
        "ele": 41.36322512545379,
        "distanceKm": 8.375622872486376,
        "gradePct": 0.3739041164268939,
        "smoothedEle": 41.47502483608815,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481999331818308,
        "lng": 120.46345265407233,
        "ele": 41.1816125627269,
        "distanceKm": 8.426497664981975,
        "gradePct": -0.6493039309395622,
        "smoothedEle": 41.18161256005737,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482453,
        "lng": 120.463388,
        "ele": 41,
        "distanceKm": 8.477372454537766,
        "gradePct": -0.2975751197113194,
        "smoothedEle": 41.16735928009947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482909222100147,
        "lng": 120.46334722632943,
        "ele": 41.5,
        "distanceKm": 8.528272253224523,
        "gradePct": 0.31871981569808244,
        "smoothedEle": 41.499835200174935,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.483364,
        "lng": 120.463285,
        "ele": 42,
        "distanceKm": 8.579237971841309,
        "gradePct": 0.6978695147722672,
        "smoothedEle": 41.877414296541964,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.483759006648114,
        "lng": 120.46322605285405,
        "ele": 42,
        "distanceKm": 8.623570274265283,
        "gradePct": 0.5308779818215134,
        "smoothedEle": 42,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484154,
        "lng": 120.463167,
        "ele": 42,
        "distanceKm": 8.667902572683639,
        "gradePct": 0.5031319744667417,
        "smoothedEle": 42.29656806198758,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48419720749559,
        "lng": 120.4635494733235,
        "ele": 42.977179976262576,
        "distanceKm": 8.707203813152796,
        "gradePct": 1.3397455819834765,
        "smoothedEle": 43.294489774391856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484232,
        "lng": 120.463933,
        "ele": 45,
        "distanceKm": 8.74650856069206,
        "gradePct": 2.6900408762169143,
        "smoothedEle": 44.84349024368955,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484224,
        "lng": 120.464465,
        "ele": 47,
        "distanceKm": 8.800771750311414,
        "gradePct": 3.626294576468139,
        "smoothedEle": 46.75746392920558,
        "gradeBand": "hard"
      },
      {
        "lat": 23.4842175,
        "lng": 120.46496400000001,
        "ele": 47.875,
        "distanceKm": 8.851667285622945,
        "gradePct": 2.8495509655926443,
        "smoothedEle": 47.874999989033086,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484211,
        "lng": 120.465463,
        "ele": 48.75,
        "distanceKm": 8.9025628234412,
        "gradePct": 1.5423507127447762,
        "smoothedEle": 48.3391420367026,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48421,
        "lng": 120.466136,
        "ele": 47.5,
        "distanceKm": 8.97119867284084,
        "gradePct": -0.1626495998987784,
        "smoothedEle": 47.890466947986916,
        "gradeBand": "descent"
      },
      {
        "lat": 23.484077,
        "lng": 120.46613,
        "ele": 47.75,
        "distanceKm": 8.986000272305299,
        "gradePct": -0.37922634636130104,
        "smoothedEle": 47.808873443252786,
        "gradeBand": "descent"
      },
      {
        "lat": 23.48378,
        "lng": 120.46625,
        "ele": 48.25,
        "distanceKm": 9.021219870950286,
        "gradePct": -0.25564540179186773,
        "smoothedEle": 47.9615348245808,
        "gradeBand": "descent"
      },
      {
        "lat": 23.483734,
        "lng": 120.466277,
        "ele": 48.25,
        "distanceKm": 9.027028938108495,
        "gradePct": -0.17434010257847693,
        "smoothedEle": 48.004866036704676,
        "gradeBand": "descent"
      },
      {
        "lat": 23.483699,
        "lng": 120.466387,
        "ele": 48,
        "distanceKm": 9.038903200572642,
        "gradePct": -0.02833801263135182,
        "smoothedEle": 48.07324563328812,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 9.038903200572642,
      "elevationGainM": 99.12678530473985,
      "elevationLossM": 98.86088890132541,
      "minimumElevationM": 38.25,
      "maximumElevationM": 105,
      "maximumSustainedGradePct": 5.141465289052016
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 58,
        "startDistanceKm": 0,
        "endDistanceKm": 2.5765797408451117,
        "distanceKm": 2.5765797408451117,
        "gainM": 58.912451550888306,
        "averageGradePct": 2.2864594724929868,
        "maximumGradePct": 5.141465289052016
      }
    ]
  },
  "chiayi-city-coffee": {
    "routeId": "chiayi-city-coffee",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T14:07:39.214Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "8b64b24b826c8c3838cdcb77020d5e80547d6ca968e30b856817698b99217b1c",
      "roadPolicyAuditSha256": "b17d8d748d5319fb26d8ef7499161859943d5b9c7ca6652e17591c97b904a7a0",
      "reviewedAt": "2026-07-29T14:18:29.613Z",
      "reviewerNote": "將嘉義火車站前廣場、東市場內部、昭和十八停車區、檜意森活村、北門驛與博物館人行區等研究點移到一般道路側，並排除站前 11 公尺逆向單行道後重產；最終 raw messages 無 motorway、trunk、motorroad、pedestrian、footway、path、steps、track、service、private、access 禁制或 bicycle=no。單行道共 815 公尺，精確分組為 403 公尺 residential、248 公尺 secondary 且 route_bicycle_ncn=yes、127 公尺 tertiary 圓環及 37 公尺 tertiary，皆為順向，無 `reversedirection=yes` 與 `oneway=yes` 同段。Leaflet 疊圖確認中山路、民族路、公明路、林森東／西路及共和路外圍道路連續；6.4 公里、爬升 17 公尺、最大持續坡度 3.0%。文化路徒步區於管制時段禁止自行車，本軌跡未進入該徒步區：https://economic.chiayi.gov.tw/News_Content.aspx?n=4&s=917359"
    },
    "waypoints": [
      {
        "name": "嘉義火車站東側中山路",
        "lat": 23.4793,
        "lng": 120.44307,
        "role": "start"
      },
      {
        "name": "中央噴水圓環中山路側",
        "lat": 23.47989,
        "lng": 120.44985,
        "role": "via"
      },
      {
        "name": "東市場民族路口",
        "lat": 23.47805,
        "lng": 120.45575,
        "role": "via"
      },
      {
        "name": "昭和十八中山路外側",
        "lat": 23.482656,
        "lng": 120.46354,
        "role": "via"
      },
      {
        "name": "檜意森活村林森東路外側",
        "lat": 23.48608,
        "lng": 120.45453,
        "role": "via"
      },
      {
        "name": "北門驛共和路外側",
        "lat": 23.48748,
        "lng": 120.45452,
        "role": "via"
      },
      {
        "name": "嘉義市立博物館南側林森西路",
        "lat": 23.48565,
        "lng": 120.4532,
        "role": "via"
      },
      {
        "name": "嘉義火車站東側中山路",
        "lat": 23.4793,
        "lng": 120.44307,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.479301,
        "lng": 120.443068,
        "ele": 39.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 39.807770174571466,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4793415,
        "lng": 120.44359349999999,
        "ele": 39.875,
        "distanceKm": 0.053783860342829934,
        "gradePct": 0.12500001905425065,
        "smoothedEle": 39.875000010248115,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479382,
        "lng": 120.444119,
        "ele": 40,
        "distanceKm": 0.10756770428867352,
        "gradePct": 0.21583713638435145,
        "smoothedEle": 40.03306694275863,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479428,
        "lng": 120.44461100000001,
        "ele": 40.25,
        "distanceKm": 0.15800607205469414,
        "gradePct": 0.3625912284172301,
        "smoothedEle": 40.25000002176341,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479474,
        "lng": 120.445103,
        "ele": 40.5,
        "distanceKm": 0.20844442240998365,
        "gradePct": 0.40121027123268505,
        "smoothedEle": 40.438047937944106,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479551999999998,
        "lng": 120.4456505,
        "ele": 40.5,
        "distanceKm": 0.2649526553262511,
        "gradePct": 0.22410122263513443,
        "smoothedEle": 40.5,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.47963,
        "lng": 120.446198,
        "ele": 40.5,
        "distanceKm": 0.3214608556132643,
        "gradePct": 0.09386777707867111,
        "smoothedEle": 40.546186111316196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479678,
        "lng": 120.446814,
        "ele": 40.75,
        "distanceKm": 0.38451196656030895,
        "gradePct": 0.0195199445318437,
        "smoothedEle": 40.53550644775325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479725,
        "lng": 120.447352,
        "ele": 40,
        "distanceKm": 0.43962998231215905,
        "gradePct": -0.34814903248247464,
        "smoothedEle": 40.194959573021976,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479751417897635,
        "lng": 120.44785847437319,
        "ele": 40.11044744088841,
        "distanceKm": 0.49136787342664257,
        "gradePct": -0.2550211657583575,
        "smoothedEle": 40.23812603475185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479777,
        "lng": 120.448365,
        "ele": 40.75,
        "distanceKm": 0.5431057802628709,
        "gradePct": 0.39780973938985664,
        "smoothedEle": 40.595669274045136,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479833566485457,
        "lng": 120.44887279137251,
        "ele": 40.75,
        "distanceKm": 0.5952750706824077,
        "gradePct": 0.365167709923199,
        "smoothedEle": 40.6302950682463,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479873,
        "lng": 120.449382,
        "ele": 40.25,
        "distanceKm": 0.6473930979809273,
        "gradePct": 0.0438689148743663,
        "smoothedEle": 40.64238376684066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479796,
        "lng": 120.449417,
        "ele": 40.75,
        "distanceKm": 0.6566694199829707,
        "gradePct": -0.002205149681152819,
        "smoothedEle": 40.602466581437675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47975,
        "lng": 120.449459,
        "ele": 41,
        "distanceKm": 0.6633411042704707,
        "gradePct": -0.07505951560247584,
        "smoothedEle": 40.534040344886265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479719,
        "lng": 120.449512,
        "ele": 41,
        "distanceKm": 0.669752050895621,
        "gradePct": -0.1594514210216716,
        "smoothedEle": 40.45390351207189,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479705,
        "lng": 120.449567,
        "ele": 41,
        "distanceKm": 0.6755734140381416,
        "gradePct": -0.21488556610832185,
        "smoothedEle": 40.40233312132274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479697,
        "lng": 120.449637,
        "ele": 41,
        "distanceKm": 0.6827678003381888,
        "gradePct": -0.2736185204358464,
        "smoothedEle": 40.3483752240724,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479731,
        "lng": 120.44973,
        "ele": 40.5,
        "distanceKm": 0.6929784158062845,
        "gradePct": -0.343357731041131,
        "smoothedEle": 40.28541300174934,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479758,
        "lng": 120.449778,
        "ele": 40.5,
        "distanceKm": 0.6987211412655743,
        "gradePct": -0.3712453914634609,
        "smoothedEle": 40.25984898770795,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479782,
        "lng": 120.449806,
        "ele": 40.25,
        "distanceKm": 0.702629685094853,
        "gradePct": -0.3925431706813499,
        "smoothedEle": 40.2394577893939,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479842,
        "lng": 120.449837,
        "ele": 39.75,
        "distanceKm": 0.7100126095146954,
        "gradePct": -0.4640540568472177,
        "smoothedEle": 40.16965936152093,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479889,
        "lng": 120.449845,
        "ele": 39.5,
        "distanceKm": 0.7153020840851233,
        "gradePct": -0.5284983481208914,
        "smoothedEle": 40.106441955974105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479866180347784,
        "lng": 120.45029945764794,
        "ele": 39.80484526950454,
        "distanceKm": 0.7617207767233081,
        "gradePct": -0.6800056775151762,
        "smoothedEle": 39.8706530970292,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47984416302826,
        "lng": 120.45075405414893,
        "ele": 40.34668272303132,
        "distanceKm": 0.8081488274960761,
        "gradePct": 0.2658359404532505,
        "smoothedEle": 40.453115562916835,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479825350139713,
        "lng": 120.45120882213588,
        "ele": 41.28586652796921,
        "distanceKm": 0.8545769321308456,
        "gradePct": 1.25648206280534,
        "smoothedEle": 41.163423104823984,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479803175069858,
        "lng": 120.45166341106794,
        "ele": 41.76793326398461,
        "distanceKm": 0.9010051546809701,
        "gradePct": 1.4044385303526927,
        "smoothedEle": 41.76793324522347,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479781,
        "lng": 120.452118,
        "ele": 42.25,
        "distanceKm": 0.9474333850147222,
        "gradePct": 0.6878276450016828,
        "smoothedEle": 41.74196101180023,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.47932651690982,
        "lng": 120.45217769625827,
        "ele": 40.706511963188866,
        "distanceKm": 0.9983350909644835,
        "gradePct": -0.7392435296550846,
        "smoothedEle": 40.99392464157947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47887175580464,
        "lng": 120.45223482310058,
        "ele": 40.33378808309953,
        "distanceKm": 1.0492368313845701,
        "gradePct": -1.2493659687318657,
        "smoothedEle": 40.46609213022453,
        "gradeBand": "descent"
      },
      {
        "lat": 23.478417,
        "lng": 120.452292,
        "ele": 40.5,
        "distanceKm": 1.1001385732035502,
        "gradePct": -0.3315394931036619,
        "smoothedEle": 40.643683694427786,
        "gradeBand": "descent"
      },
      {
        "lat": 23.478217,
        "lng": 120.45267166666666,
        "ele": 41.166666666666664,
        "distanceKm": 1.1447923914621005,
        "gradePct": 0.6544871432619382,
        "smoothedEle": 41.16666649695826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.478017,
        "lng": 120.45305133333333,
        "ele": 41.833333333333336,
        "distanceKm": 1.1894462606331733,
        "gradePct": 1.226953978767148,
        "smoothedEle": 41.833333163634606,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477817,
        "lng": 120.453431,
        "ele": 42.5,
        "distanceKm": 1.2341001807138647,
        "gradePct": 1.124602648862214,
        "smoothedEle": 42.16604262409323,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.477868500000003,
        "lng": 120.454018,
        "ele": 41.75,
        "distanceKm": 1.2942413959558863,
        "gradePct": -0.11906106343724321,
        "smoothedEle": 41.74999991274244,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47792,
        "lng": 120.454605,
        "ele": 41,
        "distanceKm": 1.354382587929224,
        "gradePct": -0.7940250314387562,
        "smoothedEle": 41.231708693729814,
        "gradeBand": "descent"
      },
      {
        "lat": 23.477994000000002,
        "lng": 120.4551495,
        "ele": 41.375,
        "distanceKm": 1.4105222339933146,
        "gradePct": -0.2346931015311922,
        "smoothedEle": 41.375000057784966,
        "gradeBand": "descent"
      },
      {
        "lat": 23.478068,
        "lng": 120.455694,
        "ele": 41.75,
        "distanceKm": 1.4666618492387555,
        "gradePct": 0.729588613178961,
        "smoothedEle": 41.9926390097158,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.478135523189753,
        "lng": 120.45624487591674,
        "ele": 43.25,
        "distanceKm": 1.5233448850880082,
        "gradePct": 1.2494371842521435,
        "smoothedEle": 42.76550997202424,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.478202007226628,
        "lng": 120.45679590245393,
        "ele": 42.51304695968223,
        "distanceKm": 1.5800279332300355,
        "gradePct": 0.27836446279334104,
        "smoothedEle": 42.453249501534636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.478268,
        "lng": 120.457347,
        "ele": 41.5,
        "distanceKm": 1.6367110360426473,
        "gradePct": -1.0232801855076792,
        "smoothedEle": 41.66859717989892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47832973499483,
        "lng": 120.45773284454695,
        "ele": 41.3307745750464,
        "distanceKm": 1.6766573235372593,
        "gradePct": -0.814216533920898,
        "smoothedEle": 41.657601273359504,
        "gradeBand": "descent"
      },
      {
        "lat": 23.478395,
        "lng": 120.458118,
        "ele": 42.25,
        "distanceKm": 1.7166038011418778,
        "gradePct": -0.34300642109491236,
        "smoothedEle": 41.60393100066975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.478857328401915,
        "lng": 120.45805312378407,
        "ele": 40.71345804385186,
        "distanceKm": 1.7684365025360345,
        "gradePct": -0.8066470292358395,
        "smoothedEle": 40.85321716729065,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479319632258445,
        "lng": 120.45798804015175,
        "ele": 39.75722327603448,
        "distanceKm": 1.820269198768606,
        "gradePct": -1.5650636745003994,
        "smoothedEle": 39.98577990010034,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479782073622097,
        "lng": 120.45792412795275,
        "ele": 39.75,
        "distanceKm": 1.8721018963419478,
        "gradePct": -1.0930475874611991,
        "smoothedEle": 39.698828005547625,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480244368645295,
        "lng": 120.45785896899095,
        "ele": 39.53030064509899,
        "distanceKm": 1.9239345969135688,
        "gradePct": -0.40580824701190427,
        "smoothedEle": 39.55967957894935,
        "gradeBand": "descent"
      },
      {
        "lat": 23.48070668627382,
        "lng": 120.45779400145598,
        "ele": 39.43258835947125,
        "distanceKm": 1.9757672880492787,
        "gradePct": -0.27684090365168834,
        "smoothedEle": 39.412147107388286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.481169,
        "lng": 120.457729,
        "ele": 39.25,
        "distanceKm": 2.0275999882075535,
        "gradePct": -0.3334277665667426,
        "smoothedEle": 39.21581893257276,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4815714983629,
        "lng": 120.45767548536618,
        "ele": 38.96534769243428,
        "distanceKm": 2.0726873761251796,
        "gradePct": -0.5051781147510748,
        "smoothedEle": 38.91573541028593,
        "gradeBand": "descent"
      },
      {
        "lat": 23.481974,
        "lng": 120.457622,
        "ele": 38.5,
        "distanceKm": 2.117774762204813,
        "gradePct": -0.575663010468261,
        "smoothedEle": 38.67737120671012,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482057503756245,
        "lng": 120.45817649930429,
        "ele": 38.73238383411662,
        "distanceKm": 2.175083396833551,
        "gradePct": -0.1631638725122498,
        "smoothedEle": 38.73990445685457,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482141,
        "lng": 120.458731,
        "ele": 39,
        "distanceKm": 2.2323920008241758,
        "gradePct": 0.5000982164000187,
        "smoothedEle": 39.19341926112194,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482189687516833,
        "lng": 120.45915710529313,
        "ele": 39.89150160091952,
        "distanceKm": 2.2761848556110404,
        "gradePct": 1.2313263710061608,
        "smoothedEle": 39.97994728275751,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482236621277405,
        "lng": 120.45958345683773,
        "ele": 41.09774311090052,
        "distanceKm": 2.3199789501209436,
        "gradePct": 2.0576796054886426,
        "smoothedEle": 41.152867503987295,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482289,
        "lng": 120.460009,
        "ele": 42.5,
        "distanceKm": 2.36376758433033,
        "gradePct": 2.252004242059888,
        "smoothedEle": 42.008934965105496,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48233643706897,
        "lng": 120.46041982291806,
        "ele": 42.16436036106839,
        "distanceKm": 2.4059966007985745,
        "gradePct": 1.3859766623749425,
        "smoothedEle": 42.1643603359728,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482383874137938,
        "lng": 120.4608306458361,
        "ele": 41.82872072213679,
        "distanceKm": 2.448225602312929,
        "gradePct": 0.05340641324961832,
        "smoothedEle": 41.75849574976665,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482427,
        "lng": 120.461242,
        "ele": 41.25,
        "distanceKm": 2.490451221221105,
        "gradePct": -0.7659418923818244,
        "smoothedEle": 41.341203130799634,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482475,
        "lng": 120.461623,
        "ele": 41,
        "distanceKm": 2.52967279967495,
        "gradePct": -0.8608344350601691,
        "smoothedEle": 41.075973026932694,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482529,
        "lng": 120.462212,
        "ele": 41,
        "distanceKm": 2.5900419738800515,
        "gradePct": -0.3452474976832815,
        "smoothedEle": 41,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482575255558164,
        "lng": 120.46265430496408,
        "ele": 41,
        "distanceKm": 2.6354431988564126,
        "gradePct": -0.06871113047314731,
        "smoothedEle": 41,
        "gradeBand": "descent"
      },
      {
        "lat": 23.48262000351576,
        "lng": 120.46309681254472,
        "ele": 41,
        "distanceKm": 2.6808462622856437,
        "gradePct": 0.3298287003370814,
        "smoothedEle": 41.34140126288786,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482656,
        "lng": 120.46354,
        "ele": 42.25,
        "distanceKm": 2.726222060223587,
        "gradePct": 0.5534769557949768,
        "smoothedEle": 41.55347695579498,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482622167648902,
        "lng": 120.46311821341692,
        "ele": 41,
        "distanceKm": 2.7694025752128395,
        "gradePct": 0.09976954075659697,
        "smoothedEle": 41.35512178131717,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48257958382445,
        "lng": 120.46269710670846,
        "ele": 41,
        "distanceKm": 2.8126098217459274,
        "gradePct": -0.4898565890277733,
        "smoothedEle": 41,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482537,
        "lng": 120.462276,
        "ele": 41,
        "distanceKm": 2.855817082062865,
        "gradePct": -0.41752846787014836,
        "smoothedEle": 41,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482475,
        "lng": 120.461623,
        "ele": 41,
        "distanceKm": 2.9227698929621293,
        "gradePct": 0.07597302693269363,
        "smoothedEle": 41.075973026932694,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482427,
        "lng": 120.461242,
        "ele": 41.25,
        "distanceKm": 2.961991471415974,
        "gradePct": 0.3341968969714199,
        "smoothedEle": 41.341203130799634,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482383874137938,
        "lng": 120.4608306458361,
        "ele": 41.82872072213679,
        "distanceKm": 3.00421709032415,
        "gradePct": 0.7035750514152491,
        "smoothedEle": 41.75849574976665,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48233643706897,
        "lng": 120.46041982291806,
        "ele": 42.16436036106839,
        "distanceKm": 3.046446091838505,
        "gradePct": 0.9282805276532989,
        "smoothedEle": 42.1643603359728,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482289,
        "lng": 120.460009,
        "ele": 42.5,
        "distanceKm": 3.088675108306749,
        "gradePct": 0.4282766332314122,
        "smoothedEle": 42.03317950389585,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482219277518986,
        "lng": 120.45942590419118,
        "ele": 40.65199231044075,
        "distanceKm": 3.1486461259678555,
        "gradePct": -1.4662476099804054,
        "smoothedEle": 40.69127850791623,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482155,
        "lng": 120.458842,
        "ele": 39,
        "distanceKm": 3.208623767961377,
        "gradePct": -2.30173380461081,
        "smoothedEle": 39.28507798196074,
        "gradeBand": "descent"
      },
      {
        "lat": 23.48207132434572,
        "lng": 120.45826828219339,
        "ele": 38.776680595263414,
        "distanceKm": 3.2678703399688724,
        "gradePct": -1.4747471765439133,
        "smoothedEle": 38.76581171418179,
        "gradeBand": "descent"
      },
      {
        "lat": 23.481985,
        "lng": 120.457695,
        "ele": 38.5,
        "distanceKm": 3.3271200752607433,
        "gradePct": -0.5153083175048461,
        "smoothedEle": 38.60765887671581,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4819467531158,
        "lng": 120.45724941145153,
        "ele": 38.688694943150054,
        "distanceKm": 3.3727626681392526,
        "gradePct": -0.030768404121715748,
        "smoothedEle": 38.72198442333005,
        "gradeBand": "descent"
      },
      {
        "lat": 23.481915,
        "lng": 120.456803,
        "ele": 39,
        "distanceKm": 3.4184273352868657,
        "gradePct": 0.4191385664433437,
        "smoothedEle": 39.050000609982604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481853,
        "lng": 120.456178,
        "ele": 39.75,
        "distanceKm": 3.4825406874480747,
        "gradePct": 0.9036898294346037,
        "smoothedEle": 39.695911239192846,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481773498330387,
        "lng": 120.45566535130286,
        "ele": 40.092679610392786,
        "distanceKm": 3.535566098854338,
        "gradePct": 0.943920257124332,
        "smoothedEle": 40.16658551786356,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481698,
        "lng": 120.455152,
        "ele": 40.75,
        "distanceKm": 3.588589897142005,
        "gradePct": 0.7297127063635209,
        "smoothedEle": 40.47931909536679,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482038000000003,
        "lng": 120.4551165,
        "ele": 40.375,
        "distanceKm": 3.626569188569143,
        "gradePct": 0.28827457294841685,
        "smoothedEle": 40.374999998330935,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482378,
        "lng": 120.455081,
        "ele": 40,
        "distanceKm": 3.6645484791061116,
        "gradePct": -0.11765825048291835,
        "smoothedEle": 40.21986491714166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.482777,
        "lng": 120.45502300000001,
        "ele": 40.375,
        "distanceKm": 3.7093078994269235,
        "gradePct": -0.047412202744141,
        "smoothedEle": 40.37500000443344,
        "gradeBand": "descent"
      },
      {
        "lat": 23.483176,
        "lng": 120.454965,
        "ele": 40.75,
        "distanceKm": 3.7540673173832335,
        "gradePct": 0.47072203788884037,
        "smoothedEle": 40.73339965247291,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.483669994833644,
        "lng": 120.45488746113752,
        "ele": 41.14086789051926,
        "distanceKm": 3.809563409073301,
        "gradePct": 0.7567601188651871,
        "smoothedEle": 41.133806051764935,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484164,
        "lng": 120.45481,
        "ele": 41.5,
        "distanceKm": 3.865059504832573,
        "gradePct": 0.08943983953162864,
        "smoothedEle": 40.902148539955405,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484530999509232,
        "lng": 120.45475299628833,
        "ele": 39.73769171764265,
        "distanceKm": 3.906280055155214,
        "gradePct": -1.3651900795040237,
        "smoothedEle": 39.74492644963138,
        "gradeBand": "descent"
      },
      {
        "lat": 23.484898,
        "lng": 120.454696,
        "ele": 38,
        "distanceKm": 3.9475006044827814,
        "gradePct": -2.73938594409528,
        "smoothedEle": 38.23605876398677,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4854062458026,
        "lng": 120.45462192354894,
        "ele": 36.72207662114629,
        "distanceKm": 4.004517736563901,
        "gradePct": -2.931494386957657,
        "smoothedEle": 36.86290723920807,
        "gradeBand": "descent"
      },
      {
        "lat": 23.48591458629675,
        "lng": 120.45454851524819,
        "ele": 36.0994195081662,
        "distanceKm": 4.061536314472257,
        "gradePct": -1.5787066138500294,
        "smoothedEle": 36.31932819365327,
        "gradeBand": "descent"
      },
      {
        "lat": 23.486423,
        "lng": 120.454476,
        "ele": 36.5,
        "distanceKm": 4.118551073660291,
        "gradePct": -0.4989008323879194,
        "smoothedEle": 36.230221449975645,
        "gradeBand": "descent"
      },
      {
        "lat": 23.486877462721843,
        "lng": 120.45453391480932,
        "ele": 35.75213413734398,
        "distanceKm": 4.169429081424477,
        "gradePct": -0.6136917546417088,
        "smoothedEle": 35.69330105828323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.487331,
        "lng": 120.454641,
        "ele": 34.75,
        "distanceKm": 4.221029096728297,
        "gradePct": -0.9043458720994796,
        "smoothedEle": 35.29972476783534,
        "gradeBand": "descent"
      },
      {
        "lat": 23.487478,
        "lng": 120.45452,
        "ele": 36.25,
        "distanceKm": 4.241509655613664,
        "gradePct": -0.832270819556544,
        "smoothedEle": 35.155666560016,
        "gradeBand": "descent"
      },
      {
        "lat": 23.487331,
        "lng": 120.454641,
        "ele": 34.75,
        "distanceKm": 4.261990214499032,
        "gradePct": -0.4742063813930261,
        "smoothedEle": 35.297597737817235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.486935000000003,
        "lng": 120.4545475,
        "ele": 35.62499999999999,
        "distanceKm": 4.30704407631921,
        "gradePct": 0.21860522847423958,
        "smoothedEle": 35.624999973479895,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.486539,
        "lng": 120.454454,
        "ele": 36.5,
        "distanceKm": 4.352097944201127,
        "gradePct": 0.9930312363483687,
        "smoothedEle": 36.22207510401155,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.486327,
        "lng": 120.453808,
        "ele": 36.25,
        "distanceKm": 4.42206948982366,
        "gradePct": 0.6058362848407932,
        "smoothedEle": 36.4299601327231,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.486141,
        "lng": 120.453438,
        "ele": 36.75,
        "distanceKm": 4.4650996639231515,
        "gradePct": 0.1908232083956001,
        "smoothedEle": 36.45152634118178,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.486055,
        "lng": 120.453315,
        "ele": 36.75,
        "distanceKm": 4.480872975372968,
        "gradePct": 0.1045275191375911,
        "smoothedEle": 36.41209306255724,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.486064,
        "lng": 120.453052,
        "ele": 36,
        "distanceKm": 4.5077132607221495,
        "gradePct": -0.2638791321190946,
        "smoothedEle": 36.12342873285139,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4858735,
        "lng": 120.4525895,
        "ele": 35.37500000000001,
        "distanceKm": 4.559418797653613,
        "gradePct": -1.0736789647143647,
        "smoothedEle": 35.3750001942573,
        "gradeBand": "descent"
      },
      {
        "lat": 23.485683,
        "lng": 120.452127,
        "ele": 34.75,
        "distanceKm": 4.611124396747412,
        "gradePct": -0.8421121719283096,
        "smoothedEle": 35.23194096786586,
        "gradeBand": "descent"
      },
      {
        "lat": 23.485531,
        "lng": 120.452136,
        "ele": 35.5,
        "distanceKm": 4.628050952855313,
        "gradePct": -0.4913122783877615,
        "smoothedEle": 35.337731943540234,
        "gradeBand": "descent"
      },
      {
        "lat": 23.485732,
        "lng": 120.4526645,
        "ele": 35.99999999999999,
        "distanceKm": 4.686399620464068,
        "gradePct": 0.6996506272490943,
        "smoothedEle": 36.000000189731175,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.485933,
        "lng": 120.453193,
        "ele": 36.5,
        "distanceKm": 4.744748212180353,
        "gradePct": 0.8686225321483181,
        "smoothedEle": 36.39587147929071,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.485762,
        "lng": 120.4535,
        "ele": 36.5,
        "distanceKm": 4.781378739797012,
        "gradePct": 0.48531565128335247,
        "smoothedEle": 36.42832791018462,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48538,
        "lng": 120.453539,
        "ele": 36.25,
        "distanceKm": 4.824041067944705,
        "gradePct": 0.14699480371778914,
        "smoothedEle": 36.40237679302184,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484777,
        "lng": 120.453632,
        "ele": 36.75,
        "distanceKm": 4.891759186662123,
        "gradePct": 0.5372708513954284,
        "smoothedEle": 36.95928442749434,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484404,
        "lng": 120.453697,
        "ele": 37.750000000000014,
        "distanceKm": 4.933761360521965,
        "gradePct": 1.2676843922263048,
        "smoothedEle": 37.74999998520464,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.484031,
        "lng": 120.453762,
        "ele": 38.75,
        "distanceKm": 4.97576353734088,
        "gradePct": 1.9279387292159593,
        "smoothedEle": 38.75567639501543,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4836655,
        "lng": 120.45380399999999,
        "ele": 39.749999999999986,
        "distanceKm": 5.01663043515671,
        "gradePct": 2.3224997260753293,
        "smoothedEle": 39.74999999377768,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4833,
        "lng": 120.453846,
        "ele": 40.75,
        "distanceKm": 5.057497334217004,
        "gradePct": 1.922693029904195,
        "smoothedEle": 40.24101376933795,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482781444316622,
        "lng": 120.45392296460467,
        "ele": 39.72950624207575,
        "distanceKm": 5.115689978844753,
        "gradePct": 0.011068888558483574,
        "smoothedEle": 39.73818684443847,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.482261,
        "lng": 120.453985,
        "ele": 38.75,
        "distanceKm": 5.173905635915581,
        "gradePct": -1.0813979738835653,
        "smoothedEle": 39.01783609221704,
        "gradeBand": "descent"
      },
      {
        "lat": 23.481592,
        "lng": 120.454054,
        "ele": 39.25,
        "distanceKm": 5.248627248469082,
        "gradePct": -0.02127314953900602,
        "smoothedEle": 39.30935345863624,
        "gradeBand": "descent"
      },
      {
        "lat": 23.481527339525716,
        "lng": 120.4536130282019,
        "ele": 39.700089523820054,
        "distanceKm": 5.294171669848915,
        "gradePct": 0.6303667543888403,
        "smoothedEle": 39.7272683356674,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481463,
        "lng": 120.453172,
        "ele": 40.25,
        "distanceKm": 5.339716173696183,
        "gradePct": 1.3533245124096542,
        "smoothedEle": 40.627912486723666,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481322338721778,
        "lng": 120.45279934460008,
        "ele": 42.041605434317816,
        "distanceKm": 5.380814730809637,
        "gradePct": 2.4118423914100773,
        "smoothedEle": 42.01654766958335,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.481152,
        "lng": 120.452441,
        "ele": 43.75,
        "distanceKm": 5.421977858908405,
        "gradePct": 2.970280345393508,
        "smoothedEle": 43.24741703891099,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.480975,
        "lng": 120.452069,
        "ele": 43.75,
        "distanceKm": 5.46471834191021,
        "gradePct": 2.0279656508060597,
        "smoothedEle": 43.500649654299316,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.48076261185525,
        "lng": 120.45156326068971,
        "ele": 42.59750478375477,
        "distanceKm": 5.52144695263485,
        "gradePct": -0.6761364476534505,
        "smoothedEle": 42.55540530917174,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480553,
        "lng": 120.451056,
        "ele": 41.25,
        "distanceKm": 5.578189247905728,
        "gradePct": -1.9571945875343315,
        "smoothedEle": 41.31899517689009,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480365618547804,
        "lng": 120.45063917953519,
        "ele": 40.40509365241649,
        "distanceKm": 5.625531425170733,
        "gradePct": -2.0613110937022014,
        "smoothedEle": 40.40509388151612,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480178237095604,
        "lng": 120.45022235907038,
        "ele": 39.560187304833,
        "distanceKm": 5.672873656666512,
        "gradePct": -1.7338489487961715,
        "smoothedEle": 39.70097254135564,
        "gradeBand": "descent"
      },
      {
        "lat": 23.47999,
        "lng": 120.449806,
        "ele": 39.25,
        "distanceKm": 5.720215680986096,
        "gradePct": -1.0844343922682749,
        "smoothedEle": 39.42327550263952,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480048,
        "lng": 120.449732,
        "ele": 39.25,
        "distanceKm": 5.730143046537823,
        "gradePct": -0.8449524923115024,
        "smoothedEle": 39.49155271235701,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480074,
        "lng": 120.449671,
        "ele": 39.5,
        "distanceKm": 5.737003255539832,
        "gradePct": -0.695597963231722,
        "smoothedEle": 39.53887530496786,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480072,
        "lng": 120.44955,
        "ele": 39.5,
        "distanceKm": 5.749345805188585,
        "gradePct": -0.4181978922075957,
        "smoothedEle": 39.632704548739106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480055,
        "lng": 120.449493,
        "ele": 39.5,
        "distanceKm": 5.755458736771463,
        "gradePct": -0.24455858675649098,
        "smoothedEle": 39.71542618000264,
        "gradeBand": "descent"
      },
      {
        "lat": 23.480033,
        "lng": 120.449447,
        "ele": 39.5,
        "distanceKm": 5.760749675262785,
        "gradePct": -0.08650234419905475,
        "smoothedEle": 39.79479025737246,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479873,
        "lng": 120.449382,
        "ele": 40.25,
        "distanceKm": 5.779735824883795,
        "gradePct": 0.4188618046605456,
        "smoothedEle": 40.07958250168761,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479845121552348,
        "lng": 120.448963358113,
        "ele": 40.75,
        "distanceKm": 5.822544722485231,
        "gradePct": 1.1677283471537803,
        "smoothedEle": 40.60702224400359,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479792,
        "lng": 120.448547,
        "ele": 40.75,
        "distanceKm": 5.865417193639079,
        "gradePct": 0.7830712765649778,
        "smoothedEle": 40.64787430958185,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.47975602902969,
        "lng": 120.44794977478789,
        "ele": 40.2257257422816,
        "distanceKm": 5.926458313276502,
        "gradePct": -0.3268447634961629,
        "smoothedEle": 40.28390663964728,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479725,
        "lng": 120.447352,
        "ele": 40,
        "distanceKm": 5.987521865347894,
        "gradePct": -0.3038193513972527,
        "smoothedEle": 40.21225223398303,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479678,
        "lng": 120.446814,
        "ele": 40.75,
        "distanceKm": 6.042639881099744,
        "gradePct": 0.270587904699732,
        "smoothedEle": 40.53550644775324,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.47963,
        "lng": 120.446198,
        "ele": 40.5,
        "distanceKm": 6.105690992046788,
        "gradePct": 0.22737621763103355,
        "smoothedEle": 40.546186111316196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.479552,
        "lng": 120.4456505,
        "ele": 40.5,
        "distanceKm": 6.16219919233374,
        "gradePct": -0.03881942448536804,
        "smoothedEle": 40.5,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479474,
        "lng": 120.445103,
        "ele": 40.5,
        "distanceKm": 6.218707425250068,
        "gradePct": -0.0974993912145269,
        "smoothedEle": 40.43804793794592,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479428,
        "lng": 120.444611,
        "ele": 40.25,
        "distanceKm": 6.2691457756068,
        "gradePct": -0.24238418252713329,
        "smoothedEle": 40.25000002175981,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479382,
        "lng": 120.444119,
        "ele": 40,
        "distanceKm": 6.319584143371379,
        "gradePct": -0.4017123510956409,
        "smoothedEle": 40.033066942760435,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4793415,
        "lng": 120.44359349999999,
        "ele": 39.875,
        "distanceKm": 6.373367987317223,
        "gradePct": -0.3568404748905975,
        "smoothedEle": 39.875000010248115,
        "gradeBand": "descent"
      },
      {
        "lat": 23.479301,
        "lng": 120.443068,
        "ele": 39.75,
        "distanceKm": 6.427151847660053,
        "gradePct": -0.20305581783451815,
        "smoothedEle": 39.807770174571466,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 6.427151847660053,
      "elevationGainM": 17.315859196047896,
      "elevationLossM": 17.700353867979842,
      "minimumElevationM": 34.75,
      "maximumElevationM": 43.75,
      "maximumSustainedGradePct": 2.970280345393508
    },
    "climbs": []
  },
  "chiayi-city-two-lakes": {
    "routeId": "chiayi-city-two-lakes",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-07-29T14:17:32.469Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "ba296a3216996f142f0447477f379ae39a33812f118bbc518367680c39ea6257",
      "roadPolicyAuditSha256": "5d3e022c1fde29a124be1c63adf76a37575aa6410bf8eb7cdf7225e2b05f4d5c",
      "reviewedAt": "2026-07-29T14:18:29.613Z",
      "reviewerNote": "研究座標曾導入 2203、1341、6 公尺 track、仁義潭壩體 footway 與番路／吳鳳廟服務道路，均未獲准；改為蘭潭南岸環潭公路、仁義潭南側嘉127潭情路公共道路、潭情路西端折返與台18觸口道路側的清楚雙潭公路串聯。最終 raw messages 無 motorway、trunk、motorroad、footway、path、steps、track、service、private、access 禁制或 bicycle=no；單行道精確為 3842 公尺 `highway=primary surface=asphalt oneway=yes` 與 92 公尺 tertiary 圓環，皆為順向，無 `reversedirection=yes` 與 `oneway=yes` 同段。Leaflet 疊圖確認環潭公路、嘉127潭情路外圍道路及台18連續，未進水庫壩體管理道路、遊客中心人行區或大學校內；29.1 公里、爬升 286 公尺、最大持續坡度 11.4%。仁義潭官方景點資料：https://www.taiwan.net.tw/m1.aspx?id=r37&sno=0001116；蘭潭—仁義潭自行車活動與交管：https://website.ncyu.edu.tw/admission/Subject/Detail/242408?nodeId=34504"
    },
    "waypoints": [
      {
        "name": "蘭潭南岸環潭公路",
        "lat": 23.46505,
        "lng": 120.47975,
        "role": "start"
      },
      {
        "name": "仁義潭南側嘉127潭情路",
        "lat": 23.4585727,
        "lng": 120.5129376,
        "role": "via"
      },
      {
        "name": "潭情路西端公共道路",
        "lat": 23.4584713,
        "lng": 120.5066943,
        "role": "via"
      },
      {
        "name": "觸口台18公共道路",
        "lat": 23.4459675,
        "lng": 120.583833,
        "role": "via"
      },
      {
        "name": "蘭潭南岸環潭公路",
        "lat": 23.46505,
        "lng": 120.47975,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.465361,
        "lng": 120.479916,
        "ele": 70,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 71.82575678455986,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465205,
        "lng": 120.48026,
        "ele": 73,
        "distanceKm": 0.039141440514671465,
        "gradePct": 2.7627469135527027,
        "smoothedEle": 72.90713572429901,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.465005,
        "lng": 120.48096,
        "ele": 77,
        "distanceKm": 0.11392438778283676,
        "gradePct": 3.8817367505277782,
        "smoothedEle": 76.09218912878907,
        "gradeBand": "hard"
      },
      {
        "lat": 23.464634,
        "lng": 120.480756,
        "ele": 75.5,
        "distanceKm": 0.1601284122396061,
        "gradePct": 1.4827685920133007,
        "smoothedEle": 75.28375282301452,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464388,
        "lng": 120.480497,
        "ele": 73.5,
        "distanceKm": 0.19815671288363523,
        "gradePct": -1.8705170862349547,
        "smoothedEle": 73.55011671539502,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464158,
        "lng": 120.480083,
        "ele": 71.25,
        "distanceKm": 0.24752557704677408,
        "gradePct": -5.141184776995516,
        "smoothedEle": 70.3630810780626,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464067,
        "lng": 120.479686,
        "ele": 66.25,
        "distanceKm": 0.2892648090426908,
        "gradePct": -7.708343296121967,
        "smoothedEle": 66.2471379846908,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464145005143497,
        "lng": 120.47921947808969,
        "ele": 60.59683071749249,
        "distanceKm": 0.3376342583734571,
        "gradePct": -10.388255364506186,
        "smoothedEle": 60.61336552293712,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46424,
        "lng": 120.478756,
        "ele": 55,
        "distanceKm": 0.3860748497439574,
        "gradePct": -11.37133345310357,
        "smoothedEle": 55.190369278371335,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464236,
        "lng": 120.478621,
        "ele": 53.5,
        "distanceKm": 0.3998520613781803,
        "gradePct": -11.272139047926775,
        "smoothedEle": 53.74186166771145,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464092,
        "lng": 120.478285,
        "ele": 50,
        "distanceKm": 0.4376801398896204,
        "gradePct": -9.299691203175147,
        "smoothedEle": 51.308537815792704,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464003,
        "lng": 120.478172,
        "ele": 50.25,
        "distanceKm": 0.4528718358192147,
        "gradePct": -8.133958863792042,
        "smoothedEle": 50.773537202833154,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463908,
        "lng": 120.478102,
        "ele": 50.25,
        "distanceKm": 0.4656220618195785,
        "gradePct": -6.996054552531196,
        "smoothedEle": 50.484034751272226,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463765,
        "lng": 120.478102,
        "ele": 50.5,
        "distanceKm": 0.4815229582931223,
        "gradePct": -5.12720569715537,
        "smoothedEle": 50.57275459869026,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463385,
        "lng": 120.478199,
        "ele": 51.25,
        "distanceKm": 0.5249200110927038,
        "gradePct": -0.8393469650214131,
        "smoothedEle": 51.28999716652699,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463053,
        "lng": 120.478523,
        "ele": 52.25,
        "distanceKm": 0.5744683673869948,
        "gradePct": 1.7535475524945103,
        "smoothedEle": 52.286940708273065,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46287,
        "lng": 120.478885,
        "ele": 53.25,
        "distanceKm": 0.6166285820266738,
        "gradePct": 1.9565471523676485,
        "smoothedEle": 53.109508149599456,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.462784,
        "lng": 120.479271,
        "ele": 53.75,
        "distanceKm": 0.6571457514662482,
        "gradePct": 1.662893950308224,
        "smoothedEle": 53.60129292359893,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46272,
        "lng": 120.479894,
        "ele": 53.75,
        "distanceKm": 0.7210898449422107,
        "gradePct": 0.4000622770530812,
        "smoothedEle": 53.56371984540553,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.462695333333333,
        "lng": 120.48032566666667,
        "ele": 53.083333333333336,
        "distanceKm": 0.7652057985638696,
        "gradePct": -0.513223538609367,
        "smoothedEle": 53.08333336070055,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462670666666668,
        "lng": 120.48075733333333,
        "ele": 52.416666666666664,
        "distanceKm": 0.8093217603956935,
        "gradePct": -1.1539679911354386,
        "smoothedEle": 52.41666669404367,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462646,
        "lng": 120.481189,
        "ele": 51.75,
        "distanceKm": 0.8534377304406169,
        "gradePct": -1.0751729616276013,
        "smoothedEle": 52.13630499107204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462811,
        "lng": 120.481749,
        "ele": 52.75,
        "distanceKm": 0.9134327521962609,
        "gradePct": 0.4535702170663144,
        "smoothedEle": 52.84411111900033,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.463012,
        "lng": 120.482088,
        "ele": 53.75,
        "distanceKm": 0.9546055501518383,
        "gradePct": 1.2287239426256706,
        "smoothedEle": 53.37880657597084,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.463165,
        "lng": 120.482425,
        "ele": 53.5,
        "distanceKm": 0.9929596191061995,
        "gradePct": 0.7215723052441378,
        "smoothedEle": 53.32414656610217,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46321532721091,
        "lng": 120.48284804170157,
        "ele": 52.60454931795499,
        "distanceKm": 1.0364716733653385,
        "gradePct": -0.5264955281430519,
        "smoothedEle": 52.616813291628034,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463229,
        "lng": 120.483276,
        "ele": 51.75,
        "distanceKm": 1.080150319178847,
        "gradePct": -0.4259388790310156,
        "smoothedEle": 52.91646276350836,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463177,
        "lng": 120.483694,
        "ele": 55,
        "distanceKm": 1.1231770336726,
        "gradePct": 1.9293818824025077,
        "smoothedEle": 54.76231324032119,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.463137,
        "lng": 120.483835,
        "ele": 56,
        "distanceKm": 1.1382312414441949,
        "gradePct": 2.79555608645556,
        "smoothedEle": 55.42444057753923,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.463078,
        "lng": 120.483991,
        "ele": 57,
        "distanceKm": 1.1554427921698691,
        "gradePct": 3.2861489910718023,
        "smoothedEle": 56.03311022169566,
        "gradeBand": "hard"
      },
      {
        "lat": 23.462827,
        "lng": 120.484271,
        "ele": 56,
        "distanceKm": 1.195375976560382,
        "gradePct": 2.1533067033243807,
        "smoothedEle": 55.722951734365054,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46260231566548,
        "lng": 120.4845890150817,
        "ele": 54.09410687763047,
        "distanceKm": 1.2363199954446922,
        "gradePct": -1.0061541734077144,
        "smoothedEle": 54.33422431042193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462401,
        "lng": 120.484926,
        "ele": 53,
        "distanceKm": 1.2773395585200644,
        "gradePct": -2.3520487602173126,
        "smoothedEle": 53.51099067868793,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462228333333332,
        "lng": 120.48530866666667,
        "ele": 53.666666666666664,
        "distanceKm": 1.3208387074410126,
        "gradePct": -1.1926476580460548,
        "smoothedEle": 53.66666651396028,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462055666666668,
        "lng": 120.48569133333334,
        "ele": 54.333333333333336,
        "distanceKm": 1.3643379021738749,
        "gradePct": 0.561408450721323,
        "smoothedEle": 54.333333180626816,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461883,
        "lng": 120.486074,
        "ele": 55,
        "distanceKm": 1.4078371427186938,
        "gradePct": 1.1915279441541236,
        "smoothedEle": 54.8116641351494,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461722,
        "lng": 120.486417,
        "ele": 55,
        "distanceKm": 1.447138121544582,
        "gradePct": 0.9302698697272185,
        "smoothedEle": 55.00000000000001,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461561,
        "lng": 120.48676,
        "ele": 55,
        "distanceKm": 1.4864391383558724,
        "gradePct": 0.5855413000702393,
        "smoothedEle": 55.161906434052,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461261,
        "lng": 120.487211,
        "ele": 55.75,
        "distanceKm": 1.5432640892753404,
        "gradePct": 0.5348004236357293,
        "smoothedEle": 55.51623551152199,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460874666165928,
        "lng": 120.48759733383407,
        "ele": 55.40539573446933,
        "distanceKm": 1.6015594085074716,
        "gradePct": 0.4743891308341968,
        "smoothedEle": 55.7305772367086,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460488332979633,
        "lng": 120.48798366702037,
        "ele": 56.62023935844928,
        "distanceKm": 1.6598547079496606,
        "gradePct": 1.0773917861100335,
        "smoothedEle": 56.65462810996838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460102,
        "lng": 120.48837,
        "ele": 58,
        "distanceKm": 1.7181500541614534,
        "gradePct": 2.0566355544707644,
        "smoothedEle": 58.05019455388064,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459685,
        "lng": 120.488659,
        "ele": 59.5,
        "distanceKm": 1.773095820399724,
        "gradePct": 2.019597400110788,
        "smoothedEle": 58.99121225801341,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459254,
        "lng": 120.488912,
        "ele": 58.75,
        "distanceKm": 1.8275275567267608,
        "gradePct": 1.5982186547956219,
        "smoothedEle": 59.80901513560614,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45951,
        "lng": 120.489306,
        "ele": 62.25,
        "distanceKm": 1.8767770340506171,
        "gradePct": 3.3490022312834897,
        "smoothedEle": 62.39552242764093,
        "gradeBand": "hard"
      },
      {
        "lat": 23.459706,
        "lng": 120.489791,
        "ele": 66.75,
        "distanceKm": 1.930836741851798,
        "gradePct": 5.974268341498311,
        "smoothedEle": 65.95707682318034,
        "gradeBand": "hard"
      },
      {
        "lat": 23.460038,
        "lng": 120.490273,
        "ele": 68,
        "distanceKm": 1.9923193982271945,
        "gradePct": 4.277061644302346,
        "smoothedEle": 67.6965440173752,
        "gradeBand": "hard"
      },
      {
        "lat": 23.46037,
        "lng": 120.490601,
        "ele": 67.75,
        "distanceKm": 2.0421413302503826,
        "gradePct": 1.760715585257499,
        "smoothedEle": 68.03762180135071,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460869,
        "lng": 120.490914,
        "ele": 69,
        "distanceKm": 2.1061574556296323,
        "gradePct": 1.6003744222872016,
        "smoothedEle": 69.391652902211,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461241,
        "lng": 120.491201,
        "ele": 71.5,
        "distanceKm": 2.1568332861423762,
        "gradePct": 2.544560173288841,
        "smoothedEle": 70.89293750838004,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461482680756774,
        "lng": 120.49159277311833,
        "ele": 71.53660943724876,
        "distanceKm": 2.204990768562806,
        "gradePct": 1.9563816882760803,
        "smoothedEle": 71.32335751788865,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461713,
        "lng": 120.491993,
        "ele": 70.75,
        "distanceKm": 2.2531830269465734,
        "gradePct": 0.21208691160045115,
        "smoothedEle": 70.99688454573003,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46198720667834,
        "lng": 120.4923402671918,
        "ele": 70.91192313816413,
        "distanceKm": 2.299920406385256,
        "gradePct": 0.012596142856651215,
        "smoothedEle": 71.29063598160211,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46229,
        "lng": 120.49266,
        "ele": 72.5,
        "distanceKm": 2.3467951317948326,
        "gradePct": 1.1663886017323355,
        "smoothedEle": 72.2065472164927,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4625935,
        "lng": 120.4930035,
        "ele": 73,
        "distanceKm": 2.3954422064863,
        "gradePct": 1.7375103211091258,
        "smoothedEle": 73.00000014504815,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.462897,
        "lng": 120.493347,
        "ele": 73.5,
        "distanceKm": 2.444089223158507,
        "gradePct": 1.9579187840119643,
        "smoothedEle": 74.11159375221003,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46305441297906,
        "lng": 120.49377975418594,
        "ele": 76.3181609791192,
        "distanceKm": 2.4915743940900286,
        "gradePct": 3.345189468541801,
        "smoothedEle": 76.28210407160437,
        "gradeBand": "hard"
      },
      {
        "lat": 23.463204,
        "lng": 120.494216,
        "ele": 79,
        "distanceKm": 2.539079125169415,
        "gradePct": 4.575871850361391,
        "smoothedEle": 78.57298390817573,
        "gradeBand": "hard"
      },
      {
        "lat": 23.463222,
        "lng": 120.494653,
        "ele": 80,
        "distanceKm": 2.5836984829313345,
        "gradePct": 4.135843632222755,
        "smoothedEle": 80.05794591570613,
        "gradeBand": "hard"
      },
      {
        "lat": 23.46308,
        "lng": 120.495081,
        "ele": 81.25,
        "distanceKm": 2.630122622627888,
        "gradePct": 3.510721955958101,
        "smoothedEle": 81.65178528249122,
        "gradeBand": "hard"
      },
      {
        "lat": 23.462945666666666,
        "lng": 120.495476,
        "ele": 83.83333333333333,
        "distanceKm": 2.673092861901093,
        "gradePct": 4.128349067653499,
        "smoothedEle": 83.83333283674588,
        "gradeBand": "hard"
      },
      {
        "lat": 23.462811333333335,
        "lng": 120.49587100000001,
        "ele": 86.41666666666667,
        "distanceKm": 2.716063139619779,
        "gradePct": 5.247572815602775,
        "smoothedEle": 86.41666617011339,
        "gradeBand": "hard"
      },
      {
        "lat": 23.462677,
        "lng": 120.496266,
        "ele": 89,
        "distanceKm": 2.759033455781299,
        "gradePct": 6.469965461945145,
        "smoothedEle": 89.58951909816338,
        "gradeBand": "steep"
      },
      {
        "lat": 23.462455,
        "lng": 120.496625,
        "ele": 93.75,
        "distanceKm": 2.8031954551745444,
        "gradePct": 7.3207878224226395,
        "smoothedEle": 92.96386071096005,
        "gradeBand": "steep"
      },
      {
        "lat": 23.462148271661086,
        "lng": 120.49681229147221,
        "ele": 95.52322668859006,
        "distanceKm": 2.8422880451016845,
        "gradePct": 7.460195101605671,
        "smoothedEle": 95.81326238716188,
        "gradeBand": "steep"
      },
      {
        "lat": 23.461837,
        "lng": 120.496991,
        "ele": 98.25,
        "distanceKm": 2.8814066421285056,
        "gradePct": 7.193301696288423,
        "smoothedEle": 98.49231707495265,
        "gradeBand": "steep"
      },
      {
        "lat": 23.4615275,
        "lng": 120.497165,
        "ele": 101.75000000000001,
        "distanceKm": 2.9201285850487952,
        "gradePct": 7.551907896729709,
        "smoothedEle": 101.7499996662346,
        "gradeBand": "steep"
      },
      {
        "lat": 23.461218,
        "lng": 120.497339,
        "ele": 105.25,
        "distanceKm": 2.9588505470413944,
        "gradePct": 7.527626209037273,
        "smoothedEle": 104.47517898071118,
        "gradeBand": "steep"
      },
      {
        "lat": 23.4607995,
        "lng": 120.497575,
        "ele": 106.5,
        "distanceKm": 3.0112434037068843,
        "gradePct": 5.4975116906219,
        "smoothedEle": 106.4999997808617,
        "gradeBand": "hard"
      },
      {
        "lat": 23.460381,
        "lng": 120.497811,
        "ele": 107.75,
        "distanceKm": 3.063636295434504,
        "gradePct": 3.010310871969776,
        "smoothedEle": 107.67044412903441,
        "gradeBand": "hard"
      },
      {
        "lat": 23.460124,
        "lng": 120.498111,
        "ele": 108.5,
        "distanceKm": 3.1055060139046966,
        "gradePct": 2.1729784942651786,
        "smoothedEle": 108.45124602097222,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460028764348028,
        "lng": 120.49852668869454,
        "ele": 109.10123188366549,
        "distanceKm": 3.149210071754314,
        "gradePct": 1.6256243596299371,
        "smoothedEle": 108.97379019068957,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459952,
        "lng": 120.498948,
        "ele": 109.25,
        "distanceKm": 3.1930248020032543,
        "gradePct": 1.1296654352727407,
        "smoothedEle": 109.34815723141632,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459995,
        "lng": 120.499377,
        "ele": 109.75,
        "distanceKm": 3.2370447559434994,
        "gradePct": 0.26866279014684813,
        "smoothedEle": 109.09699932818967,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46013161413745,
        "lng": 120.49981181041319,
        "ele": 107.81827910892152,
        "distanceKm": 3.2839262584389757,
        "gradePct": -1.7532830968280833,
        "smoothedEle": 107.51713327415774,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460295,
        "lng": 120.500236,
        "ele": 104.75,
        "distanceKm": 3.3308543987729298,
        "gradePct": -3.7611762068647003,
        "smoothedEle": 105.37114249329193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460617,
        "lng": 120.500557,
        "ele": 104,
        "distanceKm": 3.379373359270853,
        "gradePct": -2.7521341144055333,
        "smoothedEle": 104.9184279207831,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460971367888295,
        "lng": 120.50069428822162,
        "ele": 106.49348265770975,
        "distanceKm": 3.421191761704293,
        "gradePct": 0.5872888801552842,
        "smoothedEle": 106.4002969560291,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461313,
        "lng": 120.500859,
        "ele": 108.75,
        "distanceKm": 3.462729075021808,
        "gradePct": 2.2103095549216625,
        "smoothedEle": 107.28403985545886,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46128,
        "lng": 120.500905,
        "ele": 108.25,
        "distanceKm": 3.468685644022827,
        "gradePct": 2.2364937196431622,
        "smoothedEle": 107.25464522044429,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461271,
        "lng": 120.500992,
        "ele": 107.5,
        "distanceKm": 3.477616112527814,
        "gradePct": 2.2757506909524614,
        "smoothedEle": 107.21057490711995,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461286,
        "lng": 120.501034,
        "ele": 107.25,
        "distanceKm": 3.4822134527570983,
        "gradePct": 2.1688188915311866,
        "smoothedEle": 107.18788783037253,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461365,
        "lng": 120.501097,
        "ele": 107,
        "distanceKm": 3.4930974484253343,
        "gradePct": 1.3849540215115455,
        "smoothedEle": 106.78970618166154,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461341,
        "lng": 120.501225,
        "ele": 106,
        "distanceKm": 3.506423708110151,
        "gradePct": 0.013204663604980725,
        "smoothedEle": 105.89018365293641,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461261,
        "lng": 120.501781,
        "ele": 102,
        "distanceKm": 3.5638305018865246,
        "gradePct": -4.604769563627908,
        "smoothedEle": 102.67383494126621,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461154,
        "lng": 120.502038,
        "ele": 101.5,
        "distanceKm": 3.5926188286039977,
        "gradePct": -4.893648589565951,
        "smoothedEle": 101.91356748785215,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460848,
        "lng": 120.502435,
        "ele": 102.5,
        "distanceKm": 3.645511167674834,
        "gradePct": -1.200218470826896,
        "smoothedEle": 102.49999964069532,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460542,
        "lng": 120.502832,
        "ele": 103.5,
        "distanceKm": 3.6984035786066065,
        "gradePct": 1.5222950120506042,
        "smoothedEle": 103.49999964069258,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460236000000002,
        "lng": 120.50322899999999,
        "ele": 104.5,
        "distanceKm": 3.751296061399864,
        "gradePct": 1.8906290406620754,
        "smoothedEle": 104.49999964068985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45993,
        "lng": 120.503626,
        "ele": 105.5,
        "distanceKm": 3.8041886160551543,
        "gradePct": 1.1504255836471335,
        "smoothedEle": 104.75979875235397,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45978,
        "lng": 120.503733,
        "ele": 104.5,
        "distanceKm": 3.824121543838655,
        "gradePct": 0.7944941852892946,
        "smoothedEle": 104.78072483412916,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459615,
        "lng": 120.503747,
        "ele": 104,
        "distanceKm": 3.8425242243356563,
        "gradePct": 0.5287826363632173,
        "smoothedEle": 104.86293948426018,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459255,
        "lng": 120.503463,
        "ele": 105.75,
        "distanceKm": 3.89193706669106,
        "gradePct": 0.23545295155322754,
        "smoothedEle": 104.93507420516386,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.459066,
        "lng": 120.503423,
        "ele": 105.5,
        "distanceKm": 3.913345349019746,
        "gradePct": -0.15546174740538263,
        "smoothedEle": 104.61394997023356,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458921,
        "lng": 120.503477,
        "ele": 104.25,
        "distanceKm": 3.930383570153984,
        "gradePct": -0.7446101314080373,
        "smoothedEle": 104.0640905349761,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45881,
        "lng": 120.503637,
        "ele": 102.5,
        "distanceKm": 3.9508458855647817,
        "gradePct": -2.3968266668552456,
        "smoothedEle": 102.47826109063925,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4587155,
        "lng": 120.5041785,
        "ele": 98,
        "distanceKm": 4.007071924208388,
        "gradePct": -6.708050468525423,
        "smoothedEle": 98.0000008738785,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458621,
        "lng": 120.50472,
        "ele": 93.5,
        "distanceKm": 4.063298001691038,
        "gradePct": -7.743159630842535,
        "smoothedEle": 93.74332224845723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4585785,
        "lng": 120.5052135,
        "ele": 90.50000000000003,
        "distanceKm": 4.113858601145496,
        "gradePct": -6.986205184106719,
        "smoothedEle": 90.50000024201464,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458536,
        "lng": 120.505707,
        "ele": 87.5,
        "distanceKm": 4.164419216734262,
        "gradePct": -5.39885167815513,
        "smoothedEle": 88.27254773981986,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4585035,
        "lng": 120.5062005,
        "ele": 87.625,
        "distanceKm": 4.214888058892113,
        "gradePct": -2.82964739540878,
        "smoothedEle": 87.62499999227637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458471,
        "lng": 120.506694,
        "ele": 87.75,
        "distanceKm": 4.265356913407786,
        "gradePct": -0.373039044180119,
        "smoothedEle": 87.88747744342831,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458446333333335,
        "lng": 120.50710733333334,
        "ele": 88.33333333333333,
        "distanceKm": 4.30760797305715,
        "gradePct": 0.6149251283933687,
        "smoothedEle": 88.333333310412,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458421666666666,
        "lng": 120.50752066666666,
        "ele": 88.91666666666667,
        "distanceKm": 4.349859040565254,
        "gradePct": 1.1097902403169582,
        "smoothedEle": 88.91666664373709,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458397,
        "lng": 120.507934,
        "ele": 89.5,
        "distanceKm": 4.39211011593493,
        "gradePct": 1.294008348283801,
        "smoothedEle": 89.46379994918696,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458422,
        "lng": 120.508395,
        "ele": 90,
        "distanceKm": 4.439216390858101,
        "gradePct": 1.4918390634594854,
        "smoothedEle": 90.26156948297232,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45848514463366,
        "lng": 120.50891555050973,
        "ele": 91.69599772178408,
        "distanceKm": 4.492777201629695,
        "gradePct": 2.1879281713583305,
        "smoothedEle": 91.66302556753247,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458549,
        "lng": 120.509436,
        "ele": 93.25,
        "distanceKm": 4.546338191021936,
        "gradePct": 2.306721194331481,
        "smoothedEle": 92.75463756094585,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458586,
        "lng": 120.509887,
        "ele": 92.75,
        "distanceKm": 4.592525871965377,
        "gradePct": 1.447655015047166,
        "smoothedEle": 93.10410436608451,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458603500000002,
        "lng": 120.5104365,
        "ele": 93.75,
        "distanceKm": 4.648611158276755,
        "gradePct": 0.9781646738890152,
        "smoothedEle": 93.7500000371168,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458621,
        "lng": 120.510986,
        "ele": 94.75,
        "distanceKm": 4.704696437164773,
        "gradePct": 1.5371887432072155,
        "smoothedEle": 94.78145313865599,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4586095,
        "lng": 120.511474,
        "ele": 95.75,
        "distanceKm": 4.754491088321591,
        "gradePct": 1.891863328513899,
        "smoothedEle": 95.74999997833595,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458598000000002,
        "lng": 120.511962,
        "ele": 96.74999999999999,
        "distanceKm": 4.804285743811218,
        "gradePct": 1.9760998186592715,
        "smoothedEle": 96.74999997832141,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4585865,
        "lng": 120.51245,
        "ele": 97.75,
        "distanceKm": 4.85408040363656,
        "gradePct": 2.0079881542332814,
        "smoothedEle": 97.74999997832876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458575,
        "lng": 120.512938,
        "ele": 98.75,
        "distanceKm": 4.903875067796147,
        "gradePct": 1.5061940547068726,
        "smoothedEle": 98.24794664159586,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4585865,
        "lng": 120.51245,
        "ele": 97.75,
        "distanceKm": 4.953669731955733,
        "gradePct": 0.00824730367213536,
        "smoothedEle": 97.74999997832876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458598000000002,
        "lng": 120.511962,
        "ele": 96.74999999999999,
        "distanceKm": 5.003464391781075,
        "gradePct": -1.4938399029450178,
        "smoothedEle": 96.74999997832141,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4586095,
        "lng": 120.511474,
        "ele": 95.75,
        "distanceKm": 5.053259047270703,
        "gradePct": -2.004106847021852,
        "smoothedEle": 95.74999997833595,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458621,
        "lng": 120.510986,
        "ele": 94.75,
        "distanceKm": 5.10305369842752,
        "gradePct": -1.9767945785795362,
        "smoothedEle": 94.78145313865602,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458603500000002,
        "lng": 120.5104365,
        "ele": 93.75,
        "distanceKm": 5.159138977315538,
        "gradePct": -1.8856304752190804,
        "smoothedEle": 93.7500000371168,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458586,
        "lng": 120.509887,
        "ele": 92.75,
        "distanceKm": 5.215224263626916,
        "gradePct": -1.4535223519617995,
        "smoothedEle": 93.10410436608451,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458549,
        "lng": 120.509436,
        "ele": 93.25,
        "distanceKm": 5.261411944570358,
        "gradePct": -0.9700386934610669,
        "smoothedEle": 92.75378514296497,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458492500000002,
        "lng": 120.5089755,
        "ele": 91.87500000000001,
        "distanceKm": 5.3088033541131034,
        "gradePct": -1.3030494281319893,
        "smoothedEle": 91.87500013698453,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458436,
        "lng": 120.508515,
        "ele": 90.5,
        "distanceKm": 5.356194783580871,
        "gradePct": -2.134555798436218,
        "smoothedEle": 90.65879989120688,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458397,
        "lng": 120.507934,
        "ele": 89.5,
        "distanceKm": 5.41561797734043,
        "gradePct": -2.1656676574154337,
        "smoothedEle": 89.53444966769709,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458421666666666,
        "lng": 120.50752066666666,
        "ele": 88.91666666666667,
        "distanceKm": 5.457869052710106,
        "gradePct": -1.7104542892958454,
        "smoothedEle": 88.91666664373709,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458446333333335,
        "lng": 120.50710733333334,
        "ele": 88.33333333333333,
        "distanceKm": 5.5001201202182095,
        "gradePct": -1.4943523484335426,
        "smoothedEle": 88.333333310412,
        "gradeBand": "descent"
      },
      {
        "lat": 23.458471,
        "lng": 120.506694,
        "ele": 87.75,
        "distanceKm": 5.542371179867573,
        "gradePct": -1.5376968637272823,
        "smoothedEle": 87.60557520166681,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45801711111111,
        "lng": 120.50681966666666,
        "ele": 86.44444444444443,
        "distanceKm": 5.594443811881142,
        "gradePct": -1.9672579360672484,
        "smoothedEle": 86.44444451525717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.457563222222223,
        "lng": 120.50694533333333,
        "ele": 85.13888888888889,
        "distanceKm": 5.64651645474262,
        "gradePct": -2.3742536977527577,
        "smoothedEle": 85.1388889596984,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45710933333333,
        "lng": 120.507071,
        "ele": 83.83333333333333,
        "distanceKm": 5.698589108451514,
        "gradePct": -2.5071810113671322,
        "smoothedEle": 83.83333340413913,
        "gradeBand": "descent"
      },
      {
        "lat": 23.456655444444444,
        "lng": 120.50719666666666,
        "ele": 82.52777777777779,
        "distanceKm": 5.750661773007251,
        "gradePct": -2.507180489095811,
        "smoothedEle": 82.52777784858733,
        "gradeBand": "descent"
      },
      {
        "lat": 23.456201555555555,
        "lng": 120.50732233333333,
        "ele": 81.22222222222221,
        "distanceKm": 5.802734448410409,
        "gradePct": -2.5071799668330446,
        "smoothedEle": 81.22222229302606,
        "gradeBand": "descent"
      },
      {
        "lat": 23.455747666666667,
        "lng": 120.507448,
        "ele": 79.91666666666667,
        "distanceKm": 5.854807134660112,
        "gradePct": -2.5071794445758204,
        "smoothedEle": 79.91666673747427,
        "gradeBand": "descent"
      },
      {
        "lat": 23.455293777777776,
        "lng": 120.50757366666666,
        "ele": 78.61111111111111,
        "distanceKm": 5.906879831756935,
        "gradePct": -2.50717892232411,
        "smoothedEle": 78.61111118191498,
        "gradeBand": "descent"
      },
      {
        "lat": 23.454839888888888,
        "lng": 120.50769933333333,
        "ele": 77.30555555555557,
        "distanceKm": 5.958952539700308,
        "gradePct": -2.507178400081253,
        "smoothedEle": 77.30555562635621,
        "gradeBand": "descent"
      },
      {
        "lat": 23.454386,
        "lng": 120.507825,
        "ele": 76,
        "distanceKm": 6.011025258489735,
        "gradePct": -2.0435637085905327,
        "smoothedEle": 76.46361424006426,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4540515,
        "lng": 120.50796100000001,
        "ele": 76.5,
        "distanceKm": 6.050723018958307,
        "gradePct": -1.0118844029299972,
        "smoothedEle": 76.49999996930184,
        "gradeBand": "descent"
      },
      {
        "lat": 23.453717,
        "lng": 120.508097,
        "ele": 77,
        "distanceKm": 6.0904207917061415,
        "gradePct": 0.44809841783424686,
        "smoothedEle": 77.24485741643772,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.453152,
        "lng": 120.508254,
        "ele": 79.25,
        "distanceKm": 6.155255193077862,
        "gradePct": 2.1908990191641142,
        "smoothedEle": 78.77593710045551,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45282,
        "lng": 120.508302,
        "ele": 79,
        "distanceKm": 6.192495261096791,
        "gradePct": 1.7576281679507053,
        "smoothedEle": 79.05147466845402,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452390283385746,
        "lng": 120.50836882221918,
        "ele": 78.89571532812388,
        "distanceKm": 6.2407613944853,
        "gradePct": 0.4549605199723049,
        "smoothedEle": 78.88862314731152,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.451961855590497,
        "lng": 120.50844954814612,
        "ele": 78.76381021874926,
        "distanceKm": 6.289106947593618,
        "gradePct": -0.2625944693394056,
        "smoothedEle": 78.76381022175028,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451533427795248,
        "lng": 120.50853027407307,
        "ele": 78.63190510937463,
        "distanceKm": 6.337452505252198,
        "gradePct": -0.2678823360118097,
        "smoothedEle": 78.63190511237528,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451105,
        "lng": 120.508611,
        "ele": 78.5,
        "distanceKm": 6.385798067460484,
        "gradePct": 0.6492333275040801,
        "smoothedEle": 79.42158603110005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.450522,
        "lng": 120.508742,
        "ele": 83.75,
        "distanceKm": 6.451987834707452,
        "gradePct": 4.245803080079598,
        "smoothedEle": 83.11512961841204,
        "gradeBand": "hard"
      },
      {
        "lat": 23.450016,
        "lng": 120.508934,
        "ele": 85,
        "distanceKm": 6.511564118198791,
        "gradePct": 4.130865501534814,
        "smoothedEle": 84.99025733605669,
        "gradeBand": "hard"
      },
      {
        "lat": 23.449654000000002,
        "lng": 120.5091195,
        "ele": 85.875,
        "distanceKm": 6.556042846373461,
        "gradePct": 2.6322412299255213,
        "smoothedEle": 85.87499990347006,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.449292,
        "lng": 120.509305,
        "ele": 86.75,
        "distanceKm": 6.600521596612116,
        "gradePct": 2.082601096983162,
        "smoothedEle": 86.72530170263597,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4489235,
        "lng": 120.50958800000001,
        "ele": 87.625,
        "distanceKm": 6.650645671962547,
        "gradePct": 1.8573570537714725,
        "smoothedEle": 87.62499979706514,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.448555,
        "lng": 120.509871,
        "ele": 88.5,
        "distanceKm": 6.70076979369809,
        "gradePct": 1.7988585343164862,
        "smoothedEle": 88.52861523075998,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.448181499999997,
        "lng": 120.51024100000001,
        "ele": 89.62500000000001,
        "distanceKm": 6.756890291801734,
        "gradePct": 1.8874245625872346,
        "smoothedEle": 89.62499959626237,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447808,
        "lng": 120.510611,
        "ele": 90.75,
        "distanceKm": 6.813010861680957,
        "gradePct": 1.794419011961174,
        "smoothedEle": 90.56217886914057,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44752437502775,
        "lng": 120.51087922818805,
        "ele": 90.95258926589158,
        "distanceKm": 6.8547642775785995,
        "gradePct": 1.450250792139064,
        "smoothedEle": 91.03371603225985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447239828319947,
        "lng": 120.51114629197079,
        "ele": 91.43374091461477,
        "distanceKm": 6.896517597842571,
        "gradePct": 1.1717752906431584,
        "smoothedEle": 91.45852671767628,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446955,
        "lng": 120.511413,
        "ele": 92,
        "distanceKm": 6.938271032884578,
        "gradePct": 1.2793169659351848,
        "smoothedEle": 92.1267685298527,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446491,
        "lng": 120.511734,
        "ele": 93.5,
        "distanceKm": 6.999380131170925,
        "gradePct": 1.777138536296014,
        "smoothedEle": 93.28147859739734,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446415,
        "lng": 120.512132,
        "ele": 93.75,
        "distanceKm": 7.040851842971143,
        "gradePct": 1.6585804420802277,
        "smoothedEle": 93.83411564453891,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446384,
        "lng": 120.512494,
        "ele": 94.25,
        "distanceKm": 7.077941441055685,
        "gradePct": 1.2163482712852882,
        "smoothedEle": 94.09272399521136,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446443,
        "lng": 120.513021,
        "ele": 94.25,
        "distanceKm": 7.132101625901954,
        "gradePct": 0.5130620881610373,
        "smoothedEle": 94.23057550161145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446559494382594,
        "lng": 120.51339030973938,
        "ele": 94.18542446861949,
        "distanceKm": 7.1719410729082975,
        "gradePct": 0.09821159126384806,
        "smoothedEle": 94.14909783707479,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446693,
        "lng": 120.513753,
        "ele": 94,
        "distanceKm": 7.211807552938325,
        "gradePct": -0.12317077158486756,
        "smoothedEle": 94.05575112993326,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446781,
        "lng": 120.514155,
        "ele": 94,
        "distanceKm": 7.253968323763322,
        "gradePct": 0.18232559171345095,
        "smoothedEle": 94.36818040549534,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446866,
        "lng": 120.514547,
        "ele": 95.25,
        "distanceKm": 7.295059458884068,
        "gradePct": 0.9983994392815171,
        "smoothedEle": 95.09336595591769,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4469415,
        "lng": 120.5151065,
        "ele": 96.25,
        "distanceKm": 7.3527501866014635,
        "gradePct": 1.8908466712658123,
        "smoothedEle": 96.25000016137113,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447017,
        "lng": 120.515666,
        "ele": 97.25,
        "distanceKm": 7.410440882044634,
        "gradePct": 1.8139062857231416,
        "smoothedEle": 97.21565247638522,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447076499999998,
        "lng": 120.5161365,
        "ele": 97.9375,
        "distanceKm": 7.458892082286271,
        "gradePct": 1.58469415230754,
        "smoothedEle": 97.93750007362053,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447136,
        "lng": 120.516607,
        "ele": 98.625,
        "distanceKm": 7.507343261111026,
        "gradePct": 1.4611969431663903,
        "smoothedEle": 98.6250000736112,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4471955,
        "lng": 120.5170775,
        "ele": 99.3125,
        "distanceKm": 7.555794418521613,
        "gradePct": 1.4211503767542746,
        "smoothedEle": 99.31250007361614,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447255,
        "lng": 120.517548,
        "ele": 100,
        "distanceKm": 7.604245554516598,
        "gradePct": 1.3898197060689959,
        "smoothedEle": 99.9708647442136,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447308,
        "lng": 120.5179435,
        "ele": 100.5,
        "distanceKm": 7.645019968824263,
        "gradePct": 1.3403845323038486,
        "smoothedEle": 100.50000004004247,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447361,
        "lng": 120.518339,
        "ele": 101,
        "distanceKm": 7.685794367114938,
        "gradePct": 1.2466567980643406,
        "smoothedEle": 100.96680275795299,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447439,
        "lng": 120.518862,
        "ele": 101.5,
        "distanceKm": 7.739847662224414,
        "gradePct": 1.379745814285703,
        "smoothedEle": 101.8126241058175,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447509,
        "lng": 120.519418,
        "ele": 103.5,
        "distanceKm": 7.797098575420032,
        "gradePct": 2.3801404307410023,
        "smoothedEle": 103.52383047532084,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447455382691572,
        "lng": 120.51989796052952,
        "ele": 105.28120152371433,
        "distanceKm": 7.846422519133763,
        "gradePct": 2.9679358115740477,
        "smoothedEle": 104.97707970011376,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447362615278845,
        "lng": 120.52037401066991,
        "ele": 105.86587009131796,
        "distanceKm": 7.896069369359549,
        "gradePct": 2.372802066499824,
        "smoothedEle": 105.8658699938031,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447269847866117,
        "lng": 120.52085006081029,
        "ele": 106.45053865892159,
        "distanceKm": 7.945716252942645,
        "gradePct": 1.4942678379741974,
        "smoothedEle": 106.45053856140319,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447177080453393,
        "lng": 120.52132611095067,
        "ele": 107.0352072265252,
        "distanceKm": 7.995363169884262,
        "gradePct": 1.162025579008305,
        "smoothedEle": 107.01525301369259,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447085651573122,
        "lng": 120.52180246673048,
        "ele": 107.54061702810034,
        "distanceKm": 8.045009927227849,
        "gradePct": 1.0868082305855362,
        "smoothedEle": 107.5290287181415,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446995,
        "lng": 120.522279,
        "ele": 108,
        "distanceKm": 8.094656819248637,
        "gradePct": 0.9868243730666854,
        "smoothedEle": 107.99404292184396,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4468875,
        "lng": 120.5228165,
        "ele": 108.5,
        "distanceKm": 8.150776929735306,
        "gradePct": 0.9169549400423055,
        "smoothedEle": 108.4999998910153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44678,
        "lng": 120.523354,
        "ele": 109,
        "distanceKm": 8.206897083815855,
        "gradePct": 0.9895743688048562,
        "smoothedEle": 109.09397072916808,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44675642259751,
        "lng": 120.52387557863939,
        "ele": 109.87174074378764,
        "distanceKm": 8.260169809584806,
        "gradePct": 1.2263423475400446,
        "smoothedEle": 109.82575566334509,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446751738078007,
        "lng": 120.52439826291152,
        "ele": 110.54739259503012,
        "distanceKm": 8.313493325761304,
        "gradePct": 1.3628120697948467,
        "smoothedEle": 110.54739258864781,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446747053558504,
        "lng": 120.52492094718363,
        "ele": 111.22304444627258,
        "distanceKm": 8.366816843827028,
        "gradePct": 1.3073332429006446,
        "smoothedEle": 111.22304443988051,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446742369039004,
        "lng": 120.52544363145576,
        "ele": 111.89869629751504,
        "distanceKm": 8.420140363784872,
        "gradePct": 1.2670803858556399,
        "smoothedEle": 111.89869629113277,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4467376845195,
        "lng": 120.52596631572787,
        "ele": 112.57434814875754,
        "distanceKm": 8.473463885631945,
        "gradePct": 1.2670803409290035,
        "smoothedEle": 112.57434814236542,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446733,
        "lng": 120.526489,
        "ele": 113.25,
        "distanceKm": 8.526787409371142,
        "gradePct": 1.4015372909749195,
        "smoothedEle": 113.38445698858993,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446736599999998,
        "lng": 120.52697119999999,
        "ele": 114.40000000000002,
        "distanceKm": 8.575980065620643,
        "gradePct": 1.7874252155439543,
        "smoothedEle": 114.40000000769919,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446740199999997,
        "lng": 120.5274534,
        "ele": 115.55,
        "distanceKm": 8.62517272053115,
        "gradePct": 2.1900739132126654,
        "smoothedEle": 115.55000000771587,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4467438,
        "lng": 120.52793559999999,
        "ele": 116.7,
        "distanceKm": 8.67436537409977,
        "gradePct": 2.3333340142016765,
        "smoothedEle": 116.70000000769922,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4467474,
        "lng": 120.5284178,
        "ele": 117.84999999999998,
        "distanceKm": 8.723558026329393,
        "gradePct": 2.337747471353731,
        "smoothedEle": 117.85000000771586,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446751,
        "lng": 120.5289,
        "ele": 119,
        "distanceKm": 8.772750677217122,
        "gradePct": 2.2013414049529634,
        "smoothedEle": 118.86359387759742,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446749958827578,
        "lng": 120.52939573054316,
        "ele": 119.63014655290401,
        "distanceKm": 8.823322132611018,
        "gradePct": 1.7427653143573485,
        "smoothedEle": 119.58725072255807,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446746305885053,
        "lng": 120.52989148702876,
        "ele": 120.08676436860267,
        "distanceKm": 8.873897734014395,
        "gradePct": 1.2067565741411854,
        "smoothedEle": 120.08676436540671,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446742652942525,
        "lng": 120.53038724351438,
        "ele": 120.54338218430135,
        "distanceKm": 8.924473336817622,
        "gradePct": 0.944761505629703,
        "smoothedEle": 120.54338218110868,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446739,
        "lng": 120.530883,
        "ele": 121,
        "distanceKm": 8.97504894101924,
        "gradePct": 1.0005384807143578,
        "smoothedEle": 121.09769642719252,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446736924800692,
        "lng": 120.53138588996553,
        "ele": 121.8646663781406,
        "distanceKm": 9.026351147101622,
        "gradePct": 1.300703184028028,
        "smoothedEle": 121.86466637466285,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446734849601384,
        "lng": 120.53188877993105,
        "ele": 122.72933275628117,
        "distanceKm": 9.077653353988417,
        "gradePct": 1.6007696095349844,
        "smoothedEle": 122.73740211045019,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446732809290516,
        "lng": 120.53239167005192,
        "ele": 123.62713965562685,
        "distanceKm": 9.128955560219733,
        "gradePct": 1.7843257833258328,
        "smoothedEle": 123.6932975502293,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44673105501821,
        "lng": 120.53289456144637,
        "ele": 124.79665452643033,
        "distanceKm": 9.180257766313272,
        "gradePct": 2.0107253398193947,
        "smoothedEle": 124.79665452244672,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446729300745904,
        "lng": 120.53339745284082,
        "ele": 125.96616939723376,
        "distanceKm": 9.23155997308805,
        "gradePct": 2.216858713847622,
        "smoothedEle": 125.96616939325017,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446727546473596,
        "lng": 120.53390034423526,
        "ele": 127.13568426803722,
        "distanceKm": 9.28286218054407,
        "gradePct": 2.1771329379383606,
        "smoothedEle": 127.03315919825246,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446724951296375,
        "lng": 120.53440323091293,
        "ele": 127.88413193001685,
        "distanceKm": 9.334164348417605,
        "gradePct": 1.8174082976396655,
        "smoothedEle": 127.83774381868106,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446721975648188,
        "lng": 120.53490611545647,
        "ele": 128.44206596500842,
        "distanceKm": 9.38546655508119,
        "gradePct": 1.368061711846385,
        "smoothedEle": 128.44206596178495,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446719,
        "lng": 120.535409,
        "ele": 129,
        "distanceKm": 9.436768762900286,
        "gradePct": 1.1954201308647654,
        "smoothedEle": 129.06384304590566,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446727,
        "lng": 120.536076,
        "ele": 130.25,
        "distanceKm": 9.504817751006046,
        "gradePct": 1.5021870618781232,
        "smoothedEle": 130.17878737779523,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446706,
        "lng": 120.53672,
        "ele": 131,
        "distanceKm": 9.570556097103585,
        "gradePct": 1.6798103652845442,
        "smoothedEle": 131.29723984661345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446663,
        "lng": 120.536838,
        "ele": 131.5,
        "distanceKm": 9.58350855343961,
        "gradePct": 1.8237842147635839,
        "smoothedEle": 131.65343239585414,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44659,
        "lng": 120.536916,
        "ele": 132,
        "distanceKm": 9.594875377914809,
        "gradePct": 1.8962194688280716,
        "smoothedEle": 131.91210666497213,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446266,
        "lng": 120.53711,
        "ele": 133,
        "distanceKm": 9.635980509801191,
        "gradePct": 2.1442487486938906,
        "smoothedEle": 132.8532299414948,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446,
        "lng": 120.537284,
        "ele": 133.5,
        "distanceKm": 9.670475885224016,
        "gradePct": 2.1478270282474985,
        "smoothedEle": 133.44370217404236,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445572,
        "lng": 120.537805,
        "ele": 134.25,
        "distanceKm": 9.74181888909461,
        "gradePct": 1.2148485825861188,
        "smoothedEle": 134.1680165828377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445497,
        "lng": 120.537941,
        "ele": 134.25,
        "distanceKm": 9.758006451927898,
        "gradePct": 1.0856917240688557,
        "smoothedEle": 134.31594922540617,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445418,
        "lng": 120.538396,
        "ele": 134.5,
        "distanceKm": 9.805247071602949,
        "gradePct": 0.8690142871773533,
        "smoothedEle": 134.66573315436108,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4453295,
        "lng": 120.538758,
        "ele": 135.25,
        "distanceKm": 9.843465103665011,
        "gradePct": 1.0840828182681188,
        "smoothedEle": 135.2671435973287,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445241,
        "lng": 120.53912,
        "ele": 136,
        "distanceKm": 9.88168315963069,
        "gradePct": 1.4759607488992739,
        "smoothedEle": 135.96721952574583,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445199,
        "lng": 120.539205,
        "ele": 136.25,
        "distanceKm": 9.891532098125506,
        "gradePct": 1.5507702875146716,
        "smoothedEle": 136.11495360316806,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445114,
        "lng": 120.539277,
        "ele": 136.5,
        "distanceKm": 9.903502167465913,
        "gradePct": 1.6416912903233993,
        "smoothedEle": 136.29450464327417,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.444651,
        "lng": 120.539486,
        "ele": 136.75,
        "distanceKm": 9.959225814270994,
        "gradePct": 1.2070986869110572,
        "smoothedEle": 136.76294598282416,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44454,
        "lng": 120.539556,
        "ele": 136.75,
        "distanceKm": 9.973485410922839,
        "gradePct": 1.0884882651752188,
        "smoothedEle": 136.9055419493426,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.444469,
        "lng": 120.539639,
        "ele": 136.75,
        "distanceKm": 9.985062265463664,
        "gradePct": 0.9941586950223815,
        "smoothedEle": 137.01206480826283,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.444451,
        "lng": 120.539699,
        "ele": 137,
        "distanceKm": 9.991502128253353,
        "gradePct": 0.9458597240997368,
        "smoothedEle": 137.0603637791855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.444451,
        "lng": 120.539984,
        "ele": 137.5,
        "distanceKm": 10.020576547973997,
        "gradePct": 1.1782848761041904,
        "smoothedEle": 137.61632545314757,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.444664,
        "lng": 120.54047,
        "ele": 139,
        "distanceKm": 10.075522744499697,
        "gradePct": 1.737808275658728,
        "smoothedEle": 138.66209647394274,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.444885,
        "lng": 120.540761,
        "ele": 139,
        "distanceKm": 10.114060670509287,
        "gradePct": 1.6597946713937748,
        "smoothedEle": 139.15152337669844,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445123,
        "lng": 120.541047,
        "ele": 139.5,
        "distanceKm": 10.153451319829916,
        "gradePct": 1.396856158836504,
        "smoothedEle": 139.63887521583695,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445399,
        "lng": 120.541477,
        "ele": 140.75,
        "distanceKm": 10.206987545024257,
        "gradePct": 1.5348389119505212,
        "smoothedEle": 140.59653446817725,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445065,
        "lng": 120.54173,
        "ele": 141.25,
        "distanceKm": 10.252214320739206,
        "gradePct": 2.274381663568826,
        "smoothedEle": 141.89795238983103,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.444632489870468,
        "lng": 120.54200947239494,
        "ele": 144.81027251176076,
        "distanceKm": 10.308123007619162,
        "gradePct": 4.138656793515665,
        "smoothedEle": 144.76786463597216,
        "gradeBand": "hard"
      },
      {
        "lat": 23.444194118877206,
        "lng": 120.54227806445843,
        "ele": 148.17890207063152,
        "distanceKm": 10.364041130299059,
        "gradePct": 5.608329139381359,
        "smoothedEle": 148.1133769106775,
        "gradeBand": "hard"
      },
      {
        "lat": 23.443757,
        "lng": 120.542549,
        "ele": 151.25,
        "distanceKm": 10.419955762110213,
        "gradePct": 4.917746728338091,
        "smoothedEle": 150.39355046341052,
        "gradeBand": "hard"
      },
      {
        "lat": 23.443975579343086,
        "lng": 120.54296480646242,
        "ele": 150.54762421887418,
        "distanceKm": 10.468844340955934,
        "gradePct": 2.289457047378627,
        "smoothedEle": 150.5987067296949,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.444194567077655,
        "lng": 120.54338035665909,
        "ele": 150.04513668927007,
        "distanceKm": 10.517732779612757,
        "gradePct": -0.07699263014035324,
        "smoothedEle": 150.22590560621077,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444415,
        "lng": 120.543795,
        "ele": 150.25,
        "distanceKm": 10.566621327995128,
        "gradePct": -0.2317647553423691,
        "smoothedEle": 150.35761331212285,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444563,
        "lng": 120.544109,
        "ele": 150.75,
        "distanceKm": 10.60263428075678,
        "gradePct": 0.5909320931058936,
        "smoothedEle": 150.93197202332206,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44479334601707,
        "lng": 120.54438547480653,
        "ele": 151.85479824345038,
        "distanceKm": 10.640733450728298,
        "gradePct": 1.5791380192602331,
        "smoothedEle": 151.86700835396678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445043,
        "lng": 120.544642,
        "ele": 153,
        "distanceKm": 10.678884130307871,
        "gradePct": 1.860579938380574,
        "smoothedEle": 152.4137686419092,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4454905,
        "lng": 120.54494799999999,
        "ele": 151.87500000000003,
        "distanceKm": 10.737625178102281,
        "gradePct": 0.08427508714410721,
        "smoothedEle": 151.8749996839307,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445938,
        "lng": 120.545254,
        "ele": 150.75,
        "distanceKm": 10.796366169706591,
        "gradePct": -1.7182549633949182,
        "smoothedEle": 150.53516958347615,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446196,
        "lng": 120.545533,
        "ele": 149.25,
        "distanceKm": 10.836777857873313,
        "gradePct": -2.154167186986748,
        "smoothedEle": 149.72860406136058,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446475,
        "lng": 120.5459085,
        "ele": 149.375,
        "distanceKm": 10.886071101695718,
        "gradePct": -1.3949909462494696,
        "smoothedEle": 149.37500003929136,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446754,
        "lng": 120.546284,
        "ele": 149.5,
        "distanceKm": 10.93536428265194,
        "gradePct": -0.2568171724759347,
        "smoothedEle": 149.50000003929233,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447033,
        "lng": 120.5466595,
        "ele": 149.625,
        "distanceKm": 10.984657400740453,
        "gradePct": 0.23985884667141105,
        "smoothedEle": 149.62500003929375,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447312,
        "lng": 120.547035,
        "ele": 149.75,
        "distanceKm": 11.033950455958975,
        "gradePct": 0.06717303177126178,
        "smoothedEle": 149.5635878218832,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447543,
        "lng": 120.547311,
        "ele": 149.25,
        "distanceKm": 11.072062320907634,
        "gradePct": -0.16255815896906314,
        "smoothedEle": 149.4305026352501,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447853684914012,
        "lng": 120.54763649064353,
        "ele": 149.3490037648062,
        "distanceKm": 11.119978851814905,
        "gradePct": -0.3975262397401892,
        "smoothedEle": 149.18346823684246,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44817970003815,
        "lng": 120.54794403587262,
        "ele": 148.81208821121828,
        "distanceKm": 11.167921045179162,
        "gradePct": -0.632875737804286,
        "smoothedEle": 148.81208807519099,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448505715162288,
        "lng": 120.54825158110171,
        "ele": 148.27517265763035,
        "distanceKm": 11.215863187873508,
        "gradePct": -0.7311484386548298,
        "smoothedEle": 148.47353816576475,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448826,
        "lng": 120.548565,
        "ele": 148.5,
        "distanceKm": 11.263723496012801,
        "gradePct": -0.2824266761866464,
        "smoothedEle": 148.56217735996796,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44915962464424,
        "lng": 120.54887111258189,
        "ele": 148.96900129886848,
        "distanceKm": 11.312214256262534,
        "gradePct": 0.523262465658947,
        "smoothedEle": 149.02256805434163,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.449495416429492,
        "lng": 120.54917440838793,
        "ele": 149.64600086591233,
        "distanceKm": 11.360705727839836,
        "gradePct": 1.0894127024991784,
        "smoothedEle": 149.6460010357863,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.449831208214746,
        "lng": 120.54947770419396,
        "ele": 150.32300043295618,
        "distanceKm": 11.409197149232766,
        "gradePct": 1.3290781707344812,
        "smoothedEle": 150.3230006028322,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.450167,
        "lng": 120.549781,
        "ele": 151,
        "distanceKm": 11.457688520440723,
        "gradePct": 1.3950118836911591,
        "smoothedEle": 151.00222204464356,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.450496,
        "lng": 120.55007066666666,
        "ele": 151.66666666666666,
        "distanceKm": 11.504714927960807,
        "gradePct": 1.4062435104982336,
        "smoothedEle": 151.6666668208248,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.450825000000002,
        "lng": 120.55036033333333,
        "ele": 152.33333333333334,
        "distanceKm": 11.551741289233446,
        "gradePct": 1.4144146544327094,
        "smoothedEle": 152.33333348749935,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.451154000000002,
        "lng": 120.55064999999999,
        "ele": 153,
        "distanceKm": 11.598767604256276,
        "gradePct": 1.4173641657176055,
        "smoothedEle": 153.0000001541628,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.451483,
        "lng": 120.55093966666666,
        "ele": 153.66666666666666,
        "distanceKm": 11.645793873030268,
        "gradePct": 1.4176465574097443,
        "smoothedEle": 153.66666682083223,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.451812,
        "lng": 120.55122933333334,
        "ele": 154.33333333333334,
        "distanceKm": 11.692820095554586,
        "gradePct": 1.4176479516399405,
        "smoothedEle": 154.3333334875048,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452141,
        "lng": 120.551519,
        "ele": 155,
        "distanceKm": 11.739846271827467,
        "gradePct": 1.4162095514612127,
        "smoothedEle": 154.99856035973446,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452463,
        "lng": 120.551906,
        "ele": 155.75,
        "distanceKm": 11.793142332585287,
        "gradePct": 1.4031542926787546,
        "smoothedEle": 155.74104610809877,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452678,
        "lng": 120.552399,
        "ele": 156.5,
        "distanceKm": 11.848826097850106,
        "gradePct": 1.3933119483691079,
        "smoothedEle": 156.5169733521544,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45276953265839,
        "lng": 120.55293219686932,
        "ele": 157.320147190577,
        "distanceKm": 11.904161131728,
        "gradePct": 1.3938465191546976,
        "smoothedEle": 157.28843444345333,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452828,
        "lng": 120.553472,
        "ele": 158,
        "distanceKm": 11.959608404082097,
        "gradePct": 1.3901290135115167,
        "smoothedEle": 158.05742539159567,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4528706407415,
        "lng": 120.55395837095777,
        "ele": 158.83282698249403,
        "distanceKm": 12.009448675525322,
        "gradePct": 1.366814879347293,
        "smoothedEle": 158.72858157424267,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452913640304384,
        "lng": 120.55444470433689,
        "ele": 159.25,
        "distanceKm": 12.05928892681606,
        "gradePct": 1.0923789280743148,
        "smoothedEle": 159.14537353136808,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452957,
        "lng": 120.554931,
        "ele": 159.25,
        "distanceKm": 12.109129190221148,
        "gradePct": 0.7880606305034831,
        "smoothedEle": 159.51233997020867,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.453000666666668,
        "lng": 120.55546833333334,
        "ele": 160.41666666666666,
        "distanceKm": 12.16415662389966,
        "gradePct": 1.2354531117281666,
        "smoothedEle": 160.41666677198168,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.453044333333334,
        "lng": 120.55600566666666,
        "ele": 161.58333333333334,
        "distanceKm": 12.219184039524164,
        "gradePct": 1.9057509865433881,
        "smoothedEle": 161.5833334386317,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.453088,
        "lng": 120.556543,
        "ele": 162.75,
        "distanceKm": 12.274211437097517,
        "gradePct": 1.7302373579133592,
        "smoothedEle": 162.36008178441875,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.453094,
        "lng": 120.557023,
        "ele": 162.25,
        "distanceKm": 12.323180223193866,
        "gradePct": 0.5679689483677086,
        "smoothedEle": 162.2077111795607,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.453079,
        "lng": 120.557559,
        "ele": 161.5,
        "distanceKm": 12.377882395140952,
        "gradePct": -0.39171482084788206,
        "smoothedEle": 161.9569444607466,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45301105001342,
        "lng": 120.55805000846468,
        "ele": 162.6635271674866,
        "distanceKm": 12.428536301028116,
        "gradePct": 0.48036927176448957,
        "smoothedEle": 162.66352701923282,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45294310002684,
        "lng": 120.55854101692937,
        "ele": 163.82705433497324,
        "distanceKm": 12.479190232398794,
        "gradePct": 1.8343813955445463,
        "smoothedEle": 163.80956916802683,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452875058044217,
        "lng": 120.55903200982388,
        "ele": 164.91971358388753,
        "distanceKm": 12.529844145662999,
        "gradePct": 2.223543806212782,
        "smoothedEle": 164.91666073160079,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452807,
        "lng": 120.559523,
        "ele": 166,
        "distanceKm": 12.580498077049008,
        "gradePct": 2.1553637212891283,
        "smoothedEle": 165.993517132574,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45276925,
        "lng": 120.5599575,
        "ele": 166.93750000000003,
        "distanceKm": 12.62501934198016,
        "gradePct": 2.126290083822291,
        "smoothedEle": 166.93749994087148,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4527315,
        "lng": 120.56039200000001,
        "ele": 167.875,
        "distanceKm": 12.6695406195254,
        "gradePct": 2.1144283655429565,
        "smoothedEle": 167.87499994088526,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45269375,
        "lng": 120.5608265,
        "ele": 168.81249999999997,
        "distanceKm": 12.714061909681783,
        "gradePct": 2.107330050124269,
        "smoothedEle": 168.8124999408782,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452656,
        "lng": 120.561261,
        "ele": 169.75,
        "distanceKm": 12.75858321245081,
        "gradePct": 2.303008176200913,
        "smoothedEle": 169.9472741916695,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452630244176916,
        "lng": 120.56173319008985,
        "ele": 171.51755648609807,
        "distanceKm": 12.806836002272622,
        "gradePct": 2.8511084035956844,
        "smoothedEle": 171.51144994627288,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452604493479004,
        "lng": 120.56220538050567,
        "ele": 173.26151184075852,
        "distanceKm": 12.855088800842413,
        "gradePct": 3.102016900408398,
        "smoothedEle": 172.96022432924195,
        "gradeBand": "hard"
      },
      {
        "lat": 23.45257899565267,
        "lng": 120.56267758700378,
        "ele": 173.841007893839,
        "distanceKm": 12.903341586068139,
        "gradePct": 2.4428338809488337,
        "smoothedEle": 173.84100786693568,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452553497826337,
        "lng": 120.56314979350189,
        "ele": 174.4205039469195,
        "distanceKm": 12.951594380578946,
        "gradePct": 1.5651984081587558,
        "smoothedEle": 174.42050392002443,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452528,
        "lng": 120.563622,
        "ele": 175,
        "distanceKm": 12.999847184371978,
        "gradePct": 1.0728408104047313,
        "smoothedEle": 174.85006352020037,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452488,
        "lng": 120.564021,
        "ele": 175,
        "distanceKm": 13.040791191780006,
        "gradePct": 0.9258478125923977,
        "smoothedEle": 175.2166099148998,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452409,
        "lng": 120.564426,
        "ele": 175.75,
        "distanceKm": 13.083028547806729,
        "gradePct": 1.0435268155641817,
        "smoothedEle": 175.74386625279806,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452283132266913,
        "lng": 120.56488984093689,
        "ele": 176.58098052933315,
        "distanceKm": 13.132371243509413,
        "gradePct": 1.4721828440272926,
        "smoothedEle": 176.61341416563542,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452138566133456,
        "lng": 120.56534742046844,
        "ele": 177.54049026466657,
        "distanceKm": 13.181739176933089,
        "gradePct": 1.8127192233108425,
        "smoothedEle": 177.5404900329046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.451994,
        "lng": 120.565805,
        "ele": 178.5,
        "distanceKm": 13.231107158665186,
        "gradePct": 1.5550649499578297,
        "smoothedEle": 178.1462026201101,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45183625,
        "lng": 120.56625675,
        "ele": 178.0625,
        "distanceKm": 13.280415589452973,
        "gradePct": 0.546865606805314,
        "smoothedEle": 178.06250011252985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4516785,
        "lng": 120.5667085,
        "ele": 177.625,
        "distanceKm": 13.329724071682978,
        "gradePct": -0.5042329421939105,
        "smoothedEle": 177.6250001125232,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45152075,
        "lng": 120.56716025,
        "ele": 177.1875,
        "distanceKm": 13.379032605352172,
        "gradePct": -0.8773476560812444,
        "smoothedEle": 177.1875001125255,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451363,
        "lng": 120.567612,
        "ele": 176.75,
        "distanceKm": 13.428341190461591,
        "gradePct": -0.6965395032646906,
        "smoothedEle": 176.94073051713244,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451205352559963,
        "lng": 120.56807910352603,
        "ele": 177.07437744863458,
        "distanceKm": 13.479112708398247,
        "gradePct": 0.02297623559172743,
        "smoothedEle": 177.21007546465594,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.451047034606027,
        "lng": 120.56854593581521,
        "ele": 177.95005175136467,
        "distanceKm": 13.529884116806908,
        "gradePct": 1.161342950285477,
        "smoothedEle": 178.1102587538226,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.450887925032028,
        "lng": 120.56901244787758,
        "ele": 179.4765964580505,
        "distanceKm": 13.580655546704389,
        "gradePct": 2.239165871142043,
        "smoothedEle": 179.4765960479205,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.450728815458028,
        "lng": 120.56947895993994,
        "ele": 181.00314116473638,
        "distanceKm": 13.631427030334978,
        "gradePct": 2.8513598238503834,
        "smoothedEle": 181.00314075459858,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45056970588403,
        "lng": 120.5699454720023,
        "ele": 182.52968587142226,
        "distanceKm": 13.682198567699697,
        "gradePct": 3.0066954464338203,
        "smoothedEle": 182.52968546128702,
        "gradeBand": "hard"
      },
      {
        "lat": 23.45041059631003,
        "lng": 120.57041198406466,
        "ele": 184.05623057810814,
        "distanceKm": 13.732970158798212,
        "gradePct": 3.0066922643031084,
        "smoothedEle": 184.0562301679651,
        "gradeBand": "hard"
      },
      {
        "lat": 23.45025148673603,
        "lng": 120.57087849612704,
        "ele": 185.58277528479402,
        "distanceKm": 13.783741803631544,
        "gradePct": 2.836632353171534,
        "smoothedEle": 185.41271814566633,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45009691736155,
        "lng": 120.57134673424243,
        "ele": 186.41829296485162,
        "distanceKm": 13.834505434186736,
        "gradePct": 2.3272786522414974,
        "smoothedEle": 186.42452743628317,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44993825758142,
        "lng": 120.57181342305556,
        "ele": 187.27926855111397,
        "distanceKm": 13.885276684689558,
        "gradePct": 1.8359572698597681,
        "smoothedEle": 187.27926832027907,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44977959780129,
        "lng": 120.5722801118687,
        "ele": 188.14024413737636,
        "distanceKm": 13.936047988814078,
        "gradePct": 1.689747354023132,
        "smoothedEle": 188.1402439065429,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44962093802116,
        "lng": 120.57274680068183,
        "ele": 189.0012197236387,
        "distanceKm": 13.986819346559964,
        "gradePct": 1.6957908398130772,
        "smoothedEle": 189.0012194928073,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.449462278241032,
        "lng": 120.57321348949496,
        "ele": 189.8621953099011,
        "distanceKm": 14.037590757926742,
        "gradePct": 1.695789048843102,
        "smoothedEle": 189.8621950790758,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.449303618460902,
        "lng": 120.57368017830808,
        "ele": 190.72317089616342,
        "distanceKm": 14.088362222912993,
        "gradePct": 1.6957872578922835,
        "smoothedEle": 190.7231706653285,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.449144958680773,
        "lng": 120.57414686712121,
        "ele": 191.5841464824258,
        "distanceKm": 14.139133741520965,
        "gradePct": 1.6957854669445345,
        "smoothedEle": 191.58414625159875,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.448986298900646,
        "lng": 120.57461355593435,
        "ele": 192.4451220686882,
        "distanceKm": 14.189905313748826,
        "gradePct": 1.6957836760018725,
        "smoothedEle": 192.4451218378614,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.448827639120516,
        "lng": 120.57508024474748,
        "ele": 193.30609765495055,
        "distanceKm": 14.240676939596517,
        "gradePct": 1.695781885079021,
        "smoothedEle": 193.30609742412577,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.448668979340386,
        "lng": 120.57554693356062,
        "ele": 194.16707324121293,
        "distanceKm": 14.291448619063566,
        "gradePct": 1.6957800941815495,
        "smoothedEle": 194.16707301039543,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.448510319560256,
        "lng": 120.57601362237374,
        "ele": 195.02804882747526,
        "distanceKm": 14.342220352148278,
        "gradePct": 1.6957783033055083,
        "smoothedEle": 195.0280485966481,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44835165978013,
        "lng": 120.57648031118687,
        "ele": 195.88902441373762,
        "distanceKm": 14.3929921388529,
        "gradePct": 1.6957765124342419,
        "smoothedEle": 195.88902418291656,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.448193,
        "lng": 120.576947,
        "ele": 196.75,
        "distanceKm": 14.443763979176014,
        "gradePct": 1.5646520165352684,
        "smoothedEle": 196.61887706415044,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.448050947531936,
        "lng": 120.57737654536766,
        "ele": 197.05249673778746,
        "distanceKm": 14.49034305111341,
        "gradePct": 1.2083950721475434,
        "smoothedEle": 197.0524966707388,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447908895063872,
        "lng": 120.57780609073532,
        "ele": 197.35499347557493,
        "distanceKm": 14.53692216738098,
        "gradePct": 0.8344684234004122,
        "smoothedEle": 197.35499340853056,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447766842595804,
        "lng": 120.57823563610297,
        "ele": 197.65749021336242,
        "distanceKm": 14.583501327975885,
        "gradePct": 0.6686852833337605,
        "smoothedEle": 197.65749014631677,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44762479012774,
        "lng": 120.57866518147063,
        "ele": 197.9599869511499,
        "distanceKm": 14.630080532898969,
        "gradePct": 0.8585253619441775,
        "smoothedEle": 198.16908743991698,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447482419327194,
        "lng": 120.5790946003744,
        "ele": 199.04532523990727,
        "distanceKm": 14.676659664405904,
        "gradePct": 1.4641416850499576,
        "smoothedEle": 199.07720035418856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44734,
        "lng": 120.579524,
        "ele": 200.25,
        "distanceKm": 14.723238825037194,
        "gradePct": 2.0467526698948366,
        "smoothedEle": 200.14069500522132,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447115999999998,
        "lng": 120.580083,
        "ele": 201.37500000000003,
        "distanceKm": 14.785466613575228,
        "gradePct": 2.096719024712123,
        "smoothedEle": 201.37499950156828,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446892,
        "lng": 120.580642,
        "ele": 202.5,
        "distanceKm": 14.847694490723349,
        "gradePct": 1.8225080989801437,
        "smoothedEle": 202.44828764322745,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446753666666666,
        "lng": 120.58105533333332,
        "ele": 203.08333333333331,
        "distanceKm": 14.89257820468818,
        "gradePct": 1.5856750767454513,
        "smoothedEle": 203.08333321234832,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446615333333334,
        "lng": 120.58146866666667,
        "ele": 203.66666666666669,
        "distanceKm": 14.93746196013359,
        "gradePct": 1.394866583619153,
        "smoothedEle": 203.66666654569025,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446477,
        "lng": 120.581882,
        "ele": 204.25,
        "distanceKm": 14.982345757056631,
        "gradePct": 1.3777579232879922,
        "smoothedEle": 204.31631544851808,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446262,
        "lng": 120.582569,
        "ele": 206,
        "distanceKm": 15.056394780962245,
        "gradePct": 1.7805323109784645,
        "smoothedEle": 205.7212328538339,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446139,
        "lng": 120.583128,
        "ele": 205.75,
        "distanceKm": 15.11503789669008,
        "gradePct": 1.0891967618362097,
        "smoothedEle": 206.02577367452417,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445968,
        "lng": 120.583833,
        "ele": 207.5,
        "distanceKm": 15.189429031640483,
        "gradePct": 1.1590611328560712,
        "smoothedEle": 207.05184486163202,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446139,
        "lng": 120.583128,
        "ele": 205.75,
        "distanceKm": 15.263820166590886,
        "gradePct": -0.6728500865097284,
        "smoothedEle": 206.02577367452417,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446262,
        "lng": 120.582569,
        "ele": 206,
        "distanceKm": 15.32246328231872,
        "gradePct": -0.8749731358917674,
        "smoothedEle": 205.72123285383387,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446477,
        "lng": 120.581882,
        "ele": 204.25,
        "distanceKm": 15.396512306224334,
        "gradePct": -1.539683975260294,
        "smoothedEle": 204.31631544851808,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446615333333334,
        "lng": 120.58146866666667,
        "ele": 203.66666666666669,
        "distanceKm": 15.441396103147376,
        "gradePct": -1.69535766350561,
        "smoothedEle": 203.66666654569025,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446753666666666,
        "lng": 120.58105533333332,
        "ele": 203.08333333333331,
        "distanceKm": 15.486279858592786,
        "gradePct": -1.4271204302784264,
        "smoothedEle": 203.08333321234832,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446892,
        "lng": 120.580642,
        "ele": 202.5,
        "distanceKm": 15.531163572557617,
        "gradePct": -1.3664847385663612,
        "smoothedEle": 202.44828764322745,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447115999999998,
        "lng": 120.580083,
        "ele": 201.37500000000003,
        "distanceKm": 15.593391449705738,
        "gradePct": -1.607714042157744,
        "smoothedEle": 201.37499950156828,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44734,
        "lng": 120.579524,
        "ele": 200.25,
        "distanceKm": 15.655619238243771,
        "gradePct": -1.885788501656584,
        "smoothedEle": 200.1406950052213,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447482419327194,
        "lng": 120.5790946003744,
        "ele": 199.04532523990724,
        "distanceKm": 15.702198398875062,
        "gradePct": -2.123111002192737,
        "smoothedEle": 199.07720035418856,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44762479012774,
        "lng": 120.57866518147063,
        "ele": 197.95998695114986,
        "distanceKm": 15.748777530381997,
        "gradePct": -2.1073146340413373,
        "smoothedEle": 198.16908743991692,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447766842595804,
        "lng": 120.57823563610297,
        "ele": 197.6574902133624,
        "distanceKm": 15.79535673530508,
        "gradePct": -1.5759189611474993,
        "smoothedEle": 197.65749014631672,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447908895063872,
        "lng": 120.57780609073532,
        "ele": 197.35499347557493,
        "distanceKm": 15.841935895899985,
        "gradePct": -0.9474794429824589,
        "smoothedEle": 197.35499340853056,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448050947531936,
        "lng": 120.57737654536766,
        "ele": 197.05249673778746,
        "distanceKm": 15.888515012167556,
        "gradePct": -0.6801387479478389,
        "smoothedEle": 197.0524966707388,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448193,
        "lng": 120.576947,
        "ele": 196.75,
        "distanceKm": 15.935094084104952,
        "gradePct": -0.7805487841688744,
        "smoothedEle": 196.61887706415044,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44835165978013,
        "lng": 120.57648031118687,
        "ele": 195.88902441373764,
        "distanceKm": 15.985865924428065,
        "gradePct": -1.1806763436171124,
        "smoothedEle": 195.88902418291656,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448510319560256,
        "lng": 120.57601362237374,
        "ele": 195.02804882747526,
        "distanceKm": 16.036637711132688,
        "gradePct": -1.5686385955857018,
        "smoothedEle": 195.02804859664806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448668979340386,
        "lng": 120.57554693356062,
        "ele": 194.1670732412129,
        "distanceKm": 16.0874094442174,
        "gradePct": -1.6957765400767704,
        "smoothedEle": 194.16707301039537,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448827639120516,
        "lng": 120.57508024474748,
        "ele": 193.30609765495052,
        "distanceKm": 16.138181123684447,
        "gradePct": -1.6957783309460455,
        "smoothedEle": 193.3060974241257,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448986298900646,
        "lng": 120.57461355593435,
        "ele": 192.44512206868816,
        "distanceKm": 16.188952749532138,
        "gradePct": -1.695780121820353,
        "smoothedEle": 192.44512183786136,
        "gradeBand": "descent"
      },
      {
        "lat": 23.449144958680773,
        "lng": 120.57414686712121,
        "ele": 191.5841464824258,
        "distanceKm": 16.23972432176,
        "gradePct": -1.6957819127162326,
        "smoothedEle": 191.58414625159875,
        "gradeBand": "descent"
      },
      {
        "lat": 23.449303618460902,
        "lng": 120.57368017830808,
        "ele": 190.72317089616345,
        "distanceKm": 16.290495840367974,
        "gradePct": -1.6957837036375212,
        "smoothedEle": 190.7231706653285,
        "gradeBand": "descent"
      },
      {
        "lat": 23.449462278241032,
        "lng": 120.57321348949496,
        "ele": 189.8621953099011,
        "distanceKm": 16.341267305354226,
        "gradePct": -1.6957854945785913,
        "smoothedEle": 189.86219507907578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44962093802116,
        "lng": 120.57274680068183,
        "ele": 189.00121972363868,
        "distanceKm": 16.392038716721004,
        "gradePct": -1.6957872855243226,
        "smoothedEle": 189.0012194928073,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44977959780129,
        "lng": 120.5722801118687,
        "ele": 188.14024413737638,
        "distanceKm": 16.442810074466887,
        "gradePct": -1.6957890764734358,
        "smoothedEle": 188.1402439065429,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44993825758142,
        "lng": 120.57181342305556,
        "ele": 187.279268551114,
        "distanceKm": 16.493581378591408,
        "gradePct": -1.6957908674418476,
        "smoothedEle": 187.27926832027913,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45009691736155,
        "lng": 120.57134673424243,
        "ele": 186.41829296485164,
        "distanceKm": 16.544352629094227,
        "gradePct": -1.6895579561636156,
        "smoothedEle": 186.4245274362832,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45025148673603,
        "lng": 120.57087849612704,
        "ele": 185.582775284794,
        "distanceKm": 16.59511625964942,
        "gradePct": -1.840710243956013,
        "smoothedEle": 185.41271814566628,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45041059631003,
        "lng": 120.57041198406466,
        "ele": 184.0562305781081,
        "distanceKm": 16.645887904482752,
        "gradePct": -2.3376965038578654,
        "smoothedEle": 184.0562301679651,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45056970588403,
        "lng": 120.5699454720023,
        "ele": 182.52968587142223,
        "distanceKm": 16.696659495581265,
        "gradePct": -2.8418013830262674,
        "smoothedEle": 182.5296854612871,
        "gradeBand": "descent"
      },
      {
        "lat": 23.450728815458028,
        "lng": 120.56947895993994,
        "ele": 181.00314116473638,
        "distanceKm": 16.747431032945986,
        "gradePct": -3.00669231340747,
        "smoothedEle": 181.00314075459866,
        "gradeBand": "descent"
      },
      {
        "lat": 23.450887925032028,
        "lng": 120.56901244787758,
        "ele": 179.4765964580505,
        "distanceKm": 16.798202516576573,
        "gradePct": -3.006695495534629,
        "smoothedEle": 179.4765960479206,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451047034606027,
        "lng": 120.56854593581521,
        "ele": 177.9500517513646,
        "distanceKm": 16.848973946474054,
        "gradePct": -2.8464912650577383,
        "smoothedEle": 178.1102587538226,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451205352559963,
        "lng": 120.56807910352603,
        "ele": 177.07437744863458,
        "distanceKm": 16.899745354882715,
        "gradePct": -2.2250004306768543,
        "smoothedEle": 177.21007546465594,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451363,
        "lng": 120.567612,
        "ele": 176.75,
        "distanceKm": 16.95051687281937,
        "gradePct": -1.14217196362223,
        "smoothedEle": 176.94073051713247,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45152075,
        "lng": 120.56716025,
        "ele": 177.1875,
        "distanceKm": 16.99982545792879,
        "gradePct": -0.0221504022477458,
        "smoothedEle": 177.18750011252254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4516785,
        "lng": 120.56670849999999,
        "ele": 177.62500000000003,
        "distanceKm": 17.049133991599337,
        "gradePct": 0.6769333548276012,
        "smoothedEle": 177.62500011252916,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45183625,
        "lng": 120.56625675,
        "ele": 178.0625,
        "distanceKm": 17.098442473827987,
        "gradePct": 0.8819212780379517,
        "smoothedEle": 178.0625001125269,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.451994,
        "lng": 120.565805,
        "ele": 178.5,
        "distanceKm": 17.147750904615776,
        "gradePct": 0.5394737571089573,
        "smoothedEle": 178.15220214889786,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452163499999997,
        "lng": 120.5652685,
        "ele": 177.375,
        "distanceKm": 17.205633563557925,
        "gradePct": -0.7005825367992501,
        "smoothedEle": 177.37499962644787,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452333,
        "lng": 120.564732,
        "ele": 176.25,
        "distanceKm": 17.263516156090805,
        "gradePct": -1.6762510739966718,
        "smoothedEle": 176.26426775838843,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452456,
        "lng": 120.564205,
        "ele": 175.25,
        "distanceKm": 17.31898762436799,
        "gradePct": -1.6960907744271239,
        "smoothedEle": 175.42265251897354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452528,
        "lng": 120.563622,
        "ele": 175,
        "distanceKm": 17.37899551265557,
        "gradePct": -1.1293607084020445,
        "smoothedEle": 174.90005365984092,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452553497826337,
        "lng": 120.56314979350189,
        "ele": 174.4205039469195,
        "distanceKm": 17.427248316448605,
        "gradePct": -0.930207586189469,
        "smoothedEle": 174.42050392002443,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45257899565267,
        "lng": 120.56267758700378,
        "ele": 173.841007893839,
        "distanceKm": 17.475501110959414,
        "gradePct": -1.0894779642726307,
        "smoothedEle": 173.84100786693568,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452604493479004,
        "lng": 120.56220538050567,
        "ele": 173.26151184075852,
        "distanceKm": 17.523753896185138,
        "gradePct": -1.4950081080172384,
        "smoothedEle": 172.960224329242,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452630244176916,
        "lng": 120.56173319008985,
        "ele": 171.5175564860981,
        "distanceKm": 17.57200669475493,
        "gradePct": -2.371524410249032,
        "smoothedEle": 171.51144994627293,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452656,
        "lng": 120.561261,
        "ele": 169.75,
        "distanceKm": 17.62025948457674,
        "gradePct": -3.076735475645832,
        "smoothedEle": 169.94727419166952,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45269375,
        "lng": 120.5608265,
        "ele": 168.81249999999997,
        "distanceKm": 17.664780787345766,
        "gradePct": -2.915905495198232,
        "smoothedEle": 168.81249994087827,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4527315,
        "lng": 120.56039200000001,
        "ele": 167.87500000000003,
        "distanceKm": 17.70930207750215,
        "gradePct": -2.42747258320565,
        "smoothedEle": 167.87499994088532,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45276925,
        "lng": 120.5599575,
        "ele": 166.93750000000003,
        "distanceKm": 17.75382335504739,
        "gradePct": -2.154286796520578,
        "smoothedEle": 166.93749994087153,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452807,
        "lng": 120.559523,
        "ele": 166,
        "distanceKm": 17.798344619978543,
        "gradePct": -2.1122177306871475,
        "smoothedEle": 165.993517132574,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452875058044217,
        "lng": 120.55903200982388,
        "ele": 164.91971358388753,
        "distanceKm": 17.848998551364552,
        "gradePct": -2.1224367756957445,
        "smoothedEle": 164.91666073160079,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45294310002684,
        "lng": 120.55854101692937,
        "ele": 163.82705433497318,
        "distanceKm": 17.89965246462876,
        "gradePct": -2.156144379622473,
        "smoothedEle": 163.8095691680268,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45301105001342,
        "lng": 120.55805000846468,
        "ele": 162.66352716748665,
        "distanceKm": 17.950306395999437,
        "gradePct": -2.2245494694449204,
        "smoothedEle": 162.66352701923282,
        "gradeBand": "descent"
      },
      {
        "lat": 23.453079,
        "lng": 120.557559,
        "ele": 161.5,
        "distanceKm": 18.0009603018866,
        "gradePct": -1.8415940255291072,
        "smoothedEle": 161.93838540324762,
        "gradeBand": "descent"
      },
      {
        "lat": 23.453115,
        "lng": 120.557174,
        "ele": 162,
        "distanceKm": 18.04043718280684,
        "gradePct": -0.9049960682574621,
        "smoothedEle": 161.9818213055064,
        "gradeBand": "descent"
      },
      {
        "lat": 23.453152,
        "lng": 120.556543,
        "ele": 162.75,
        "distanceKm": 18.10493608861863,
        "gradePct": 0.4264732532098147,
        "smoothedEle": 162.36923316325405,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.453108333333333,
        "lng": 120.55601300000001,
        "ele": 161.66666666666663,
        "distanceKm": 18.159218353195833,
        "gradePct": -0.4279634035576631,
        "smoothedEle": 161.66666676311462,
        "gradeBand": "descent"
      },
      {
        "lat": 23.453064666666666,
        "lng": 120.555483,
        "ele": 160.58333333333337,
        "distanceKm": 18.213500635578818,
        "gradePct": -1.6750502143405628,
        "smoothedEle": 160.58333342976553,
        "gradeBand": "descent"
      },
      {
        "lat": 23.453021,
        "lng": 120.554953,
        "ele": 159.5,
        "distanceKm": 18.26778293576466,
        "gradePct": -2.008573158985314,
        "smoothedEle": 159.48716678646954,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452949,
        "lng": 120.554269,
        "ele": 157.75,
        "distanceKm": 18.338014849571465,
        "gradePct": -2.2407833968348108,
        "smoothedEle": 157.8475145688225,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45291778546244,
        "lng": 120.55387077517491,
        "ele": 157.19974643787694,
        "distanceKm": 18.37878536099198,
        "gradePct": -2.0007696165752407,
        "smoothedEle": 157.2295317372778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452892,
        "lng": 120.553472,
        "ele": 156.75,
        "distanceKm": 18.419564931544784,
        "gradePct": -1.5431492450852669,
        "smoothedEle": 156.73510182753054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4528495,
        "lng": 120.553075,
        "ele": 156.25,
        "distanceKm": 18.46033730817015,
        "gradePct": -1.2591597871251672,
        "smoothedEle": 156.25000003236462,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452807,
        "lng": 120.552678,
        "ele": 155.75,
        "distanceKm": 18.501109697741363,
        "gradePct": -1.167800223564041,
        "smoothedEle": 155.7910611840723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452656,
        "lng": 120.552142,
        "ele": 155.25,
        "distanceKm": 18.558306560941507,
        "gradePct": -1.0284312836134144,
        "smoothedEle": 155.24573018371476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452377,
        "lng": 120.551691,
        "ele": 154.75,
        "distanceKm": 18.61379549762755,
        "gradePct": -0.9842203712486681,
        "smoothedEle": 154.685890824394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452075211675208,
        "lng": 120.55133111403549,
        "ele": 154.05211179825395,
        "distanceKm": 18.66353334003495,
        "gradePct": -1.103864125361254,
        "smoothedEle": 154.08913200299503,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451741,
        "lng": 120.551005,
        "ele": 153.5,
        "distanceKm": 18.713410654887706,
        "gradePct": -1.1602772800985242,
        "smoothedEle": 153.529496302297,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451449999999998,
        "lng": 120.5507435,
        "ele": 153.12499999999997,
        "distanceKm": 18.755346480566214,
        "gradePct": -1.0623585621821823,
        "smoothedEle": 153.12500007009652,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451159,
        "lng": 120.550482,
        "ele": 152.75,
        "distanceKm": 18.797282343629533,
        "gradePct": -0.9921374608176877,
        "smoothedEle": 152.71832244785406,
        "gradeBand": "descent"
      },
      {
        "lat": 23.450848333333333,
        "lng": 120.55021833333333,
        "ele": 152.25,
        "distanceKm": 18.841063220068644,
        "gradePct": -1.012770601298868,
        "smoothedEle": 152.25000009716436,
        "gradeBand": "descent"
      },
      {
        "lat": 23.45053766666667,
        "lng": 120.54995466666666,
        "ele": 151.75,
        "distanceKm": 18.884844135373495,
        "gradePct": -1.088943236704735,
        "smoothedEle": 151.75000009716481,
        "gradeBand": "descent"
      },
      {
        "lat": 23.450227,
        "lng": 120.549691,
        "ele": 151.25,
        "distanceKm": 18.928625089544276,
        "gradePct": -1.1244411754270924,
        "smoothedEle": 151.25860912536803,
        "gradeBand": "descent"
      },
      {
        "lat": 23.449828500000002,
        "lng": 120.5493275,
        "ele": 150.625,
        "distanceKm": 18.986404772998675,
        "gradePct": -1.1074835062934894,
        "smoothedEle": 150.6250002243648,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44943,
        "lng": 120.548964,
        "ele": 150,
        "distanceKm": 19.044184528249804,
        "gradePct": -1.1067190894920726,
        "smoothedEle": 149.9812660679164,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4491515,
        "lng": 120.54871999999999,
        "ele": 149.49999999999997,
        "distanceKm": 19.08391564948027,
        "gradePct": -1.1522957367951512,
        "smoothedEle": 149.50000008219163,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448873,
        "lng": 120.548476,
        "ele": 149,
        "distanceKm": 19.123646803587402,
        "gradePct": -1.0365326023901242,
        "smoothedEle": 149.17354777606567,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448561666666667,
        "lng": 120.54819266666667,
        "ele": 149.08333333333334,
        "distanceKm": 19.16874521638697,
        "gradePct": -0.6004273358537574,
        "smoothedEle": 149.08333331514157,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448250333333334,
        "lng": 120.54790933333332,
        "ele": 149.16666666666666,
        "distanceKm": 19.21384367284679,
        "gradePct": -0.08742886674931913,
        "smoothedEle": 149.16666664847588,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447939,
        "lng": 120.547626,
        "ele": 149.25,
        "distanceKm": 19.258942172964517,
        "gradePct": 0.12418113967140522,
        "smoothedEle": 149.22712437504904,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.447586,
        "lng": 120.547279,
        "ele": 149.25,
        "distanceKm": 19.311798224122366,
        "gradePct": 0.08711295006807394,
        "smoothedEle": 149.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4472927719914,
        "lng": 120.54691570992988,
        "ele": 149.25,
        "distanceKm": 19.361160065376225,
        "gradePct": 0.0219157410043064,
        "smoothedEle": 149.25000000000003,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.44701182899355,
        "lng": 120.54653978244741,
        "ele": 149.25,
        "distanceKm": 19.410623189304932,
        "gradePct": 0.0005085445317831655,
        "smoothedEle": 149.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4467308859957,
        "lng": 120.54616385496495,
        "ele": 149.25,
        "distanceKm": 19.460086376466094,
        "gradePct": -2.8421709430403604e-14,
        "smoothedEle": 149.25,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44644994299785,
        "lng": 120.54578792748246,
        "ele": 149.25,
        "distanceKm": 19.50954962685993,
        "gradePct": 0,
        "smoothedEle": 149.25,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446169,
        "lng": 120.545412,
        "ele": 149.25,
        "distanceKm": 19.559012940484024,
        "gradePct": 0.41145016006913104,
        "smoothedEle": 149.66145016006914,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445831921310294,
        "lng": 120.54511970920012,
        "ele": 150.82932271933058,
        "distanceKm": 19.60690830663901,
        "gradePct": 1.38473358557969,
        "smoothedEle": 150.6347335855797,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445466460655148,
        "lng": 120.54486785460007,
        "ele": 151.6646613596653,
        "distanceKm": 19.65498660306945,
        "gradePct": 2.036703281011597,
        "smoothedEle": 151.66466120102766,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.445101,
        "lng": 120.544616,
        "ele": 152.5,
        "distanceKm": 19.70306493748152,
        "gradePct": 1.423980906871159,
        "smoothedEle": 151.98061325219732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.444755,
        "lng": 120.544279,
        "ele": 151.25,
        "distanceKm": 19.754660796662,
        "gradePct": -0.28857956412732777,
        "smoothedEle": 151.36910225033225,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4446,
        "lng": 120.54408,
        "ele": 150.75,
        "distanceKm": 19.78129134474611,
        "gradePct": -1.0975509734663107,
        "smoothedEle": 150.73997472442588,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44441,
        "lng": 120.543653,
        "ele": 150,
        "distanceKm": 19.829704969982412,
        "gradePct": -1.3792268145157696,
        "smoothedEle": 150.28565038399256,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44421566666667,
        "lng": 120.54326966666667,
        "ele": 150.33333333333334,
        "distanceKm": 19.874384082805214,
        "gradePct": -0.5698205654941749,
        "smoothedEle": 150.3333332494235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444021333333332,
        "lng": 120.54288633333333,
        "ele": 150.66666666666666,
        "distanceKm": 19.91906324597392,
        "gradePct": 0.281151868890841,
        "smoothedEle": 150.66666658276233,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.443827,
        "lng": 120.542503,
        "ele": 151,
        "distanceKm": 19.96374245948523,
        "gradePct": -0.12201282464397249,
        "smoothedEle": 150.19996337087503,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444315,
        "lng": 120.542204,
        "ele": 147.2499999999999,
        "distanceKm": 20.025991242508667,
        "gradePct": -3.3443002241733475,
        "smoothedEle": 147.24999896488154,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444803,
        "lng": 120.541905,
        "ele": 143.5,
        "distanceKm": 20.088239970325787,
        "gradePct": -5.528118579362491,
        "smoothedEle": 143.5109098863614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445105834399406,
        "lng": 120.54169906855374,
        "ele": 141.1888706595705,
        "distanceKm": 20.12792950177035,
        "gradePct": -5.380101774917543,
        "smoothedEle": 141.75347193452762,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445399,
        "lng": 120.541477,
        "ele": 140.75,
        "distanceKm": 20.16762690954875,
        "gradePct": -4.157146268248707,
        "smoothedEle": 140.59192659957512,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445123,
        "lng": 120.541047,
        "ele": 139.5,
        "distanceKm": 20.22116313474309,
        "gradePct": -2.4142089785721845,
        "smoothedEle": 139.63887521583695,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444885,
        "lng": 120.540761,
        "ele": 139,
        "distanceKm": 20.26055378406372,
        "gradePct": -1.6473627290624273,
        "smoothedEle": 139.15152337669844,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444664,
        "lng": 120.54047,
        "ele": 139,
        "distanceKm": 20.29909171007331,
        "gradePct": -1.3334422770960923,
        "smoothedEle": 138.698348235743,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444486,
        "lng": 120.540133,
        "ele": 138,
        "distanceKm": 20.33876135722191,
        "gradePct": -1.4324809918441384,
        "smoothedEle": 137.98866422363636,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444446,
        "lng": 120.539758,
        "ele": 137,
        "distanceKm": 20.377274861795662,
        "gradePct": -1.7493032439633431,
        "smoothedEle": 137.20559365220745,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444451,
        "lng": 120.539699,
        "ele": 137,
        "distanceKm": 20.38331940043131,
        "gradePct": -1.7537810442352146,
        "smoothedEle": 137.13003691926184,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444469,
        "lng": 120.539639,
        "ele": 136.75,
        "distanceKm": 20.389759263221002,
        "gradePct": -1.7585517010361436,
        "smoothedEle": 137.0495386343907,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44454,
        "lng": 120.539556,
        "ele": 136.75,
        "distanceKm": 20.401336117761826,
        "gradePct": -1.773064617500953,
        "smoothedEle": 136.88513150276637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.444651,
        "lng": 120.539486,
        "ele": 136.75,
        "distanceKm": 20.41559571441367,
        "gradePct": -1.656080482030807,
        "smoothedEle": 136.74701360203755,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445114,
        "lng": 120.539277,
        "ele": 136.5,
        "distanceKm": 20.47131936121875,
        "gradePct": -1.032178410989061,
        "smoothedEle": 136.29450464327417,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445199,
        "lng": 120.539205,
        "ele": 136.25,
        "distanceKm": 20.483289430559157,
        "gradePct": -1.0154579394957037,
        "smoothedEle": 136.11495360316806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445241,
        "lng": 120.53912,
        "ele": 136,
        "distanceKm": 20.493138369053973,
        "gradePct": -1.0343311948730753,
        "smoothedEle": 135.96721952574583,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4453295,
        "lng": 120.538758,
        "ele": 135.25,
        "distanceKm": 20.531356425019652,
        "gradePct": -1.3518837160398314,
        "smoothedEle": 135.26714359732873,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445418,
        "lng": 120.538396,
        "ele": 134.5,
        "distanceKm": 20.569574457081714,
        "gradePct": -1.6429411421835078,
        "smoothedEle": 134.66573315436108,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445497,
        "lng": 120.537941,
        "ele": 134.25,
        "distanceKm": 20.616815076756765,
        "gradePct": -1.2853497432071594,
        "smoothedEle": 134.24816135054053,
        "gradeBand": "descent"
      },
      {
        "lat": 23.445737731883884,
        "lng": 120.53760420021025,
        "ele": 134.0098088639333,
        "distanceKm": 20.66037013380363,
        "gradePct": -0.8762626209449013,
        "smoothedEle": 133.93431253184508,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446,
        "lng": 120.537284,
        "ele": 133.5,
        "distanceKm": 20.704159182174276,
        "gradePct": -0.8972560376047498,
        "smoothedEle": 133.46277397101275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446292049802008,
        "lng": 120.53709440227904,
        "ele": 132.9195993765228,
        "distanceKm": 20.741957237986263,
        "gradePct": -1.2854583933329127,
        "smoothedEle": 132.7815336938351,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44659,
        "lng": 120.536916,
        "ele": 132,
        "distanceKm": 20.7797574907767,
        "gradePct": -1.8753301272027174,
        "smoothedEle": 131.85021133640532,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446663,
        "lng": 120.536838,
        "ele": 131.5,
        "distanceKm": 20.791124315251896,
        "gradePct": -2.0279590800828085,
        "smoothedEle": 131.57517972227302,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446706,
        "lng": 120.53672,
        "ele": 131,
        "distanceKm": 20.804076771587923,
        "gradePct": -2.207124782030402,
        "smoothedEle": 131.2565366202176,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446702,
        "lng": 120.536426,
        "ele": 130.5,
        "distanceKm": 20.834072117258405,
        "gradePct": -2.25438467719729,
        "smoothedEle": 130.66926378193008,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446727,
        "lng": 120.536076,
        "ele": 130.25,
        "distanceKm": 20.869884986473814,
        "gradePct": -1.9629099375462435,
        "smoothedEle": 130.13054008914173,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446719,
        "lng": 120.535409,
        "ele": 129,
        "distanceKm": 20.937933974579572,
        "gradePct": -1.5473278190741901,
        "smoothedEle": 129.06384304590566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446721975648188,
        "lng": 120.53490611545647,
        "ele": 128.4420659650084,
        "distanceKm": 20.989236182398667,
        "gradePct": -1.3851358404738308,
        "smoothedEle": 128.4420659617849,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446724951296375,
        "lng": 120.53440323091293,
        "ele": 127.88413193001685,
        "distanceKm": 21.040538389062252,
        "gradePct": -1.1945340117743486,
        "smoothedEle": 127.83774381868106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446727546473596,
        "lng": 120.53390034423526,
        "ele": 127.13568426803721,
        "distanceKm": 21.091840556935786,
        "gradePct": -1.3782281377174517,
        "smoothedEle": 127.03315919825242,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446729300745904,
        "lng": 120.53339745284082,
        "ele": 125.96616939723374,
        "distanceKm": 21.143142764391808,
        "gradePct": -1.8307293613168862,
        "smoothedEle": 125.96616939325013,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44673105501821,
        "lng": 120.53289456144637,
        "ele": 124.79665452643033,
        "distanceKm": 21.194444971166586,
        "gradePct": -2.1823377389414533,
        "smoothedEle": 124.79665452244672,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446732809290516,
        "lng": 120.53239167005192,
        "ele": 123.62713965562686,
        "distanceKm": 21.245747177260125,
        "gradePct": -2.2135001362133235,
        "smoothedEle": 123.69329755022933,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446734849601384,
        "lng": 120.53188877993105,
        "ele": 122.72933275628117,
        "distanceKm": 21.29704938349144,
        "gradePct": -2.003239294511488,
        "smoothedEle": 122.73740211045022,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446736924800692,
        "lng": 120.53138588996553,
        "ele": 121.86466637814061,
        "distanceKm": 21.348351590378236,
        "gradePct": -1.7801040886088688,
        "smoothedEle": 121.86466637466286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446739,
        "lng": 120.530883,
        "ele": 121,
        "distanceKm": 21.39965379646062,
        "gradePct": -1.595307925129879,
        "smoothedEle": 121.09778879561331,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446742500000003,
        "lng": 120.530408,
        "ele": 120.56249999999999,
        "distanceKm": 21.448111885677704,
        "gradePct": -1.3062441525035622,
        "smoothedEle": 120.5624999971886,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446746,
        "lng": 120.529933,
        "ele": 120.125,
        "distanceKm": 21.496569973609585,
        "gradePct": -1.018886515904114,
        "smoothedEle": 120.12499999719178,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4467495,
        "lng": 120.529458,
        "ele": 119.68750000000001,
        "distanceKm": 21.545028060257717,
        "gradePct": -0.9090652557700465,
        "smoothedEle": 119.68749999719498,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446753,
        "lng": 120.528983,
        "ele": 119.25,
        "distanceKm": 21.59348614562355,
        "gradePct": -1.0949952579265259,
        "smoothedEle": 119.05784683542424,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446747895882417,
        "lng": 120.52848422069498,
        "ele": 118.00840688349875,
        "distanceKm": 21.64437164929046,
        "gradePct": -1.6722449106779793,
        "smoothedEle": 118.021181440982,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446744171911813,
        "lng": 120.52798541552123,
        "ele": 116.81880516262402,
        "distanceKm": 21.695258313250584,
        "gradePct": -2.202938162883993,
        "smoothedEle": 116.81880517115562,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446740447941206,
        "lng": 120.52748661034748,
        "ele": 115.62920344174937,
        "distanceKm": 21.746144978645066,
        "gradePct": -2.350076852599438,
        "smoothedEle": 115.62920345027226,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446736723970602,
        "lng": 120.52698780517375,
        "ele": 114.43960172087465,
        "distanceKm": 21.797031645472448,
        "gradePct": -2.337747413005682,
        "smoothedEle": 114.43960172941483,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446733,
        "lng": 120.526489,
        "ele": 113.25,
        "distanceKm": 21.84791831373563,
        "gradePct": -2.2039770897369064,
        "smoothedEle": 113.38377026590557,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44673733333333,
        "lng": 120.5260055,
        "ele": 112.62500000000001,
        "distanceKm": 21.897244312502195,
        "gradePct": -1.8101891732059867,
        "smoothedEle": 112.62499999494432,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446741666666664,
        "lng": 120.525522,
        "ele": 111.99999999999999,
        "distanceKm": 21.946570309650937,
        "gradePct": -1.4117395834380713,
        "smoothedEle": 111.99999999494432,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446745999999997,
        "lng": 120.5250385,
        "ele": 111.375,
        "distanceKm": 21.99589630518186,
        "gradePct": -1.270736080475,
        "smoothedEle": 111.37499999493978,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446750333333334,
        "lng": 120.524555,
        "ele": 110.75000000000001,
        "distanceKm": 22.04522229909351,
        "gradePct": -1.2670803764114387,
        "smoothedEle": 110.74999999494882,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446754666666667,
        "lng": 120.5240715,
        "ele": 110.12499999999999,
        "distanceKm": 22.094548291388783,
        "gradePct": -1.2670804179700175,
        "smoothedEle": 110.1249999949443,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446759,
        "lng": 120.523588,
        "ele": 109.5,
        "distanceKm": 22.143874282066236,
        "gradePct": -1.2975705137970082,
        "smoothedEle": 109.4695099406666,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446821037094754,
        "lng": 120.52314881452622,
        "ele": 108.80912979184227,
        "distanceKm": 22.1892051600701,
        "gradePct": -1.3051547025242443,
        "smoothedEle": 108.88754706422044,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44690801854738,
        "lng": 120.52271390726311,
        "ele": 108.40456489592115,
        "distanceKm": 22.23461363856067,
        "gradePct": -1.1880092240667155,
        "smoothedEle": 108.40456483818647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446995,
        "lng": 120.522279,
        "ele": 108,
        "distanceKm": 22.280022088509632,
        "gradePct": -1.0097689331544755,
        "smoothedEle": 107.99567142974605,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44709437150845,
        "lng": 120.52175662815152,
        "ele": 107.49642816664124,
        "distanceKm": 22.33444460125766,
        "gradePct": -0.9259167238728463,
        "smoothedEle": 107.4804460607678,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447194927376763,
        "lng": 120.52123452673885,
        "ele": 106.92272661703944,
        "distanceKm": 22.388866965972902,
        "gradePct": -1.004524363430491,
        "smoothedEle": 106.9074114020753,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447296618251176,
        "lng": 120.52071268449257,
        "ele": 106.28181774469299,
        "distanceKm": 22.443289498967435,
        "gradePct": -1.1054970091931564,
        "smoothedEle": 106.28181761623898,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44739830912559,
        "lng": 120.52019084224628,
        "ele": 105.6409088723465,
        "distanceKm": 22.49771199187701,
        "gradePct": -1.164827985273019,
        "smoothedEle": 105.64090874389193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4475,
        "lng": 120.519669,
        "ele": 105,
        "distanceKm": 22.55213444470147,
        "gradePct": -1.6341057553809772,
        "smoothedEle": 104.5435489698675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4474897535846,
        "lng": 120.51926512847196,
        "ele": 102.95010241712309,
        "distanceKm": 22.593350405246202,
        "gradePct": -2.56374800375412,
        "smoothedEle": 103.12852515620452,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447439,
        "lng": 120.518862,
        "ele": 101.5,
        "distanceKm": 22.63486025201752,
        "gradePct": -3.082644367518752,
        "smoothedEle": 101.80921680064775,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447361,
        "lng": 120.518339,
        "ele": 101,
        "distanceKm": 22.688913547126997,
        "gradePct": -2.3140483373669083,
        "smoothedEle": 100.96680275795299,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447308,
        "lng": 120.5179435,
        "ele": 100.5,
        "distanceKm": 22.729687945417673,
        "gradePct": -1.4736082928669065,
        "smoothedEle": 100.50000004004245,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447255,
        "lng": 120.517548,
        "ele": 100,
        "distanceKm": 22.77046235972534,
        "gradePct": -1.2834975295851723,
        "smoothedEle": 99.97086474421359,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4471955,
        "lng": 120.5170775,
        "ele": 99.3125,
        "distanceKm": 22.818913495720324,
        "gradePct": -1.3108504660917744,
        "smoothedEle": 99.31250007361614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447136,
        "lng": 120.516607,
        "ele": 98.625,
        "distanceKm": 22.86736465313091,
        "gradePct": -1.3860640437403138,
        "smoothedEle": 98.6250000736112,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447076499999998,
        "lng": 120.5161365,
        "ele": 97.9375,
        "distanceKm": 22.915815831955666,
        "gradePct": -1.4170917351460957,
        "smoothedEle": 97.93750007362053,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447017,
        "lng": 120.515666,
        "ele": 97.25,
        "distanceKm": 22.964267032197302,
        "gradePct": -1.4533014366321957,
        "smoothedEle": 97.21565247638523,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4469415,
        "lng": 120.5151065,
        "ele": 96.25,
        "distanceKm": 23.021957727640473,
        "gradePct": -1.5959952101896762,
        "smoothedEle": 96.2500001613711,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446866,
        "lng": 120.514547,
        "ele": 95.25,
        "distanceKm": 23.07964845535787,
        "gradePct": -1.8648254729084517,
        "smoothedEle": 95.09336595591765,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446781,
        "lng": 120.514155,
        "ele": 94,
        "distanceKm": 23.120739590478614,
        "gradePct": -1.902209473165813,
        "smoothedEle": 94.36818040549535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446693,
        "lng": 120.513753,
        "ele": 94,
        "distanceKm": 23.162900361303613,
        "gradePct": -1.3713342847085332,
        "smoothedEle": 94.05781212026494,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446513,
        "lng": 120.513264,
        "ele": 94.25,
        "distanceKm": 23.216650665091663,
        "gradePct": -0.24815479625145187,
        "smoothedEle": 94.19218787973507,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446385,
        "lng": 120.512734,
        "ele": 94.25,
        "distanceKm": 23.272560068080434,
        "gradePct": 0.07179601981333304,
        "smoothedEle": 94.15375740702032,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.446415,
        "lng": 120.512132,
        "ele": 93.75,
        "distanceKm": 23.33406303088856,
        "gradePct": -0.4071369009107939,
        "smoothedEle": 93.77308223272996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446491,
        "lng": 120.511734,
        "ele": 93.5,
        "distanceKm": 23.375534742688778,
        "gradePct": -0.853866936059719,
        "smoothedEle": 93.28147859739735,
        "gradeBand": "descent"
      },
      {
        "lat": 23.446955,
        "lng": 120.511413,
        "ele": 92,
        "distanceKm": 23.436643840975126,
        "gradePct": -1.615720906834275,
        "smoothedEle": 92.12676852985268,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447239828319947,
        "lng": 120.51114629197079,
        "ele": 91.43374091461477,
        "distanceKm": 23.478397276017134,
        "gradePct": -1.7688617991009075,
        "smoothedEle": 91.45852671767628,
        "gradeBand": "descent"
      },
      {
        "lat": 23.44752437502775,
        "lng": 120.51087922818805,
        "ele": 90.95258926589158,
        "distanceKm": 23.520150596281105,
        "gradePct": -1.4047068375967,
        "smoothedEle": 91.03371603225986,
        "gradeBand": "descent"
      },
      {
        "lat": 23.447808,
        "lng": 120.510611,
        "ele": 90.75,
        "distanceKm": 23.561904012178747,
        "gradePct": -1.1603138792342356,
        "smoothedEle": 90.56217886914057,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448181499999997,
        "lng": 120.51024100000001,
        "ele": 89.62500000000004,
        "distanceKm": 23.61802458205797,
        "gradePct": -1.4303471363495757,
        "smoothedEle": 89.62499959626238,
        "gradeBand": "descent"
      },
      {
        "lat": 23.448555,
        "lng": 120.509871,
        "ele": 88.5,
        "distanceKm": 23.674145080161615,
        "gradePct": -1.8291452724172523,
        "smoothedEle": 88.52861523076363,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4489235,
        "lng": 120.509588,
        "ele": 87.62499999999997,
        "distanceKm": 23.724269201897993,
        "gradePct": -1.8780033132069056,
        "smoothedEle": 87.6249997970578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.449292,
        "lng": 120.509305,
        "ele": 86.75,
        "distanceKm": 23.77439327724759,
        "gradePct": -1.798839141147883,
        "smoothedEle": 86.72530170263961,
        "gradeBand": "descent"
      },
      {
        "lat": 23.449654000000002,
        "lng": 120.5091195,
        "ele": 85.875,
        "distanceKm": 23.818872027486247,
        "gradePct": -1.8472977599225566,
        "smoothedEle": 85.87499990347006,
        "gradeBand": "descent"
      },
      {
        "lat": 23.450016,
        "lng": 120.508934,
        "ele": 85,
        "distanceKm": 23.863350755660917,
        "gradePct": -1.9332512274538243,
        "smoothedEle": 84.9902573360567,
        "gradeBand": "descent"
      },
      {
        "lat": 23.450522,
        "lng": 120.508742,
        "ele": 83.75,
        "distanceKm": 23.922927039152256,
        "gradePct": -2.6792105724379427,
        "smoothedEle": 83.11512961841201,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451105,
        "lng": 120.508611,
        "ele": 78.5,
        "distanceKm": 23.989116806399224,
        "gradePct": -4.7579019629406964,
        "smoothedEle": 79.42138441148052,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451511,
        "lng": 120.5085345,
        "ele": 78.625,
        "distanceKm": 24.03493152365778,
        "gradePct": -3.8202147793468013,
        "smoothedEle": 78.62500000255417,
        "gradeBand": "descent"
      },
      {
        "lat": 23.451916999999998,
        "lng": 120.508458,
        "ele": 78.75,
        "distanceKm": 24.08074623682965,
        "gradePct": -1.138507236410957,
        "smoothedEle": 78.75000000255342,
        "gradeBand": "descent"
      },
      {
        "lat": 23.452323,
        "lng": 120.5083815,
        "ele": 78.875,
        "distanceKm": 24.126560945916058,
        "gradePct": 0.10449658960879867,
        "smoothedEle": 78.87500000255385,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.452729,
        "lng": 120.508305,
        "ele": 79,
        "distanceKm": 24.17237565091631,
        "gradePct": 0.3048193890420051,
        "smoothedEle": 79.03198124274059,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.453152,
        "lng": 120.508254,
        "ele": 79.25,
        "distanceKm": 24.21969800922397,
        "gradePct": -0.06773533043495564,
        "smoothedEle": 78.7885399633164,
        "gradeBand": "descent"
      },
      {
        "lat": 23.453717,
        "lng": 120.508097,
        "ele": 77,
        "distanceKm": 24.284532410595688,
        "gradePct": -1.7245855835800123,
        "smoothedEle": 77.24485741643902,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4540515,
        "lng": 120.507961,
        "ele": 76.5,
        "distanceKm": 24.324230183344028,
        "gradePct": -2.1806306443427816,
        "smoothedEle": 76.49999996929931,
        "gradeBand": "descent"
      },
      {
        "lat": 23.454386,
        "lng": 120.507825,
        "ele": 76,
        "distanceKm": 24.363927943812094,
        "gradePct": -1.2718277285342017,
        "smoothedEle": 76.46361424006548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.454839888888888,
        "lng": 120.50769933333333,
        "ele": 77.30555555555553,
        "distanceKm": 24.416000662601522,
        "gradePct": 0.6511434725167553,
        "smoothedEle": 77.30555562635615,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.455293777777776,
        "lng": 120.50757366666666,
        "ele": 78.61111111111114,
        "distanceKm": 24.468073370544893,
        "gradePct": 2.0804713205391594,
        "smoothedEle": 78.61111118191498,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.455747666666667,
        "lng": 120.507448,
        "ele": 79.91666666666667,
        "distanceKm": 24.520146067641715,
        "gradePct": 2.5071784217302375,
        "smoothedEle": 79.91666673747429,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.456201555555555,
        "lng": 120.50732233333333,
        "ele": 81.22222222222219,
        "distanceKm": 24.572218753891416,
        "gradePct": 2.507178943973365,
        "smoothedEle": 81.22222229302602,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.456655444444444,
        "lng": 120.50719666666666,
        "ele": 82.52777777777781,
        "distanceKm": 24.624291429294576,
        "gradePct": 2.5071794662251463,
        "smoothedEle": 82.52777784858736,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45710933333333,
        "lng": 120.507071,
        "ele": 83.83333333333333,
        "distanceKm": 24.676364093850314,
        "gradePct": 2.50717998848247,
        "smoothedEle": 83.83333340413908,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.457563222222223,
        "lng": 120.50694533333333,
        "ele": 85.13888888888886,
        "distanceKm": 24.728436747559208,
        "gradePct": 2.5071805107453073,
        "smoothedEle": 85.13888895969838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45801711111111,
        "lng": 120.50681966666666,
        "ele": 86.44444444444447,
        "distanceKm": 24.780509390420686,
        "gradePct": 2.5071810330171544,
        "smoothedEle": 86.44444451525722,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458471,
        "lng": 120.506694,
        "ele": 87.75,
        "distanceKm": 24.832582022434256,
        "gradePct": 2.1633653108748923,
        "smoothedEle": 87.4061838263831,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4585035,
        "lng": 120.5062005,
        "ele": 87.625,
        "distanceKm": 24.88305087694993,
        "gradePct": 1.1336162805668957,
        "smoothedEle": 87.62499999227636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458536,
        "lng": 120.505707,
        "ele": 87.5,
        "distanceKm": 24.93351971910778,
        "gradePct": 0.8622983725632898,
        "smoothedEle": 88.27254773981988,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.4585785,
        "lng": 120.5052135,
        "ele": 90.5,
        "distanceKm": 24.984080334696547,
        "gradePct": 2.861791643863599,
        "smoothedEle": 90.50000024201462,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.458621,
        "lng": 120.50472,
        "ele": 93.5,
        "distanceKm": 25.034640934151003,
        "gradePct": 5.421379278289799,
        "smoothedEle": 93.74332224845728,
        "gradeBand": "hard"
      },
      {
        "lat": 23.4587155,
        "lng": 120.5041785,
        "ele": 98,
        "distanceKm": 25.09086701163365,
        "gradePct": 7.064654158557886,
        "smoothedEle": 98.0000008738784,
        "gradeBand": "steep"
      },
      {
        "lat": 23.45881,
        "lng": 120.503637,
        "ele": 102.5,
        "distanceKm": 25.14709305027726,
        "gradePct": 7.792232914096377,
        "smoothedEle": 102.47826109063934,
        "gradeBand": "steep"
      },
      {
        "lat": 23.458921,
        "lng": 120.503477,
        "ele": 104.25,
        "distanceKm": 25.167555365688056,
        "gradePct": 7.828932407786186,
        "smoothedEle": 104.06409053497602,
        "gradeBand": "steep"
      },
      {
        "lat": 23.459066,
        "lng": 120.503423,
        "ele": 105.5,
        "distanceKm": 25.184593586822295,
        "gradePct": 6.982960633184675,
        "smoothedEle": 104.50802257306171,
        "gradeBand": "steep"
      },
      {
        "lat": 23.459255,
        "lng": 120.503463,
        "ele": 105.75,
        "distanceKm": 25.20600186915098,
        "gradePct": 5.678063785860435,
        "smoothedEle": 104.88351736352638,
        "gradeBand": "hard"
      },
      {
        "lat": 23.459458,
        "lng": 120.503647,
        "ele": 104.5,
        "distanceKm": 25.23535809076399,
        "gradePct": 3.290634627735709,
        "smoothedEle": 104.83423619760252,
        "gradeBand": "hard"
      },
      {
        "lat": 23.459615,
        "lng": 120.503747,
        "ele": 104,
        "distanceKm": 25.255577305094356,
        "gradePct": 1.6727464158690328,
        "smoothedEle": 104.80853725483321,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45978,
        "lng": 120.503733,
        "ele": 104.5,
        "distanceKm": 25.273979985591357,
        "gradePct": 0.5360882211939421,
        "smoothedEle": 104.76757267512,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.45993,
        "lng": 120.503626,
        "ele": 105.5,
        "distanceKm": 25.293912913374857,
        "gradePct": 0.09609193584955597,
        "smoothedEle": 104.76757267512,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460236000000002,
        "lng": 120.503229,
        "ele": 104.5,
        "distanceKm": 25.34680546802904,
        "gradePct": -0.31968675845807126,
        "smoothedEle": 104.49999964070092,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460542,
        "lng": 120.502832,
        "ele": 103.5,
        "distanceKm": 25.399697950823406,
        "gradePct": -1.2383076674120554,
        "smoothedEle": 103.49999964069254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460848,
        "lng": 120.50243499999999,
        "ele": 102.5,
        "distanceKm": 25.452590361756286,
        "gradePct": -1.8906291892384262,
        "smoothedEle": 102.49999964068422,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461154,
        "lng": 120.502038,
        "ele": 101.5,
        "distanceKm": 25.50548270082601,
        "gradePct": -1.477063910763285,
        "smoothedEle": 101.91356748785773,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461261,
        "lng": 120.501781,
        "ele": 102,
        "distanceKm": 25.534271027543483,
        "gradePct": -0.29241953637817214,
        "smoothedEle": 102.55393100587875,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461365,
        "lng": 120.501097,
        "ele": 107,
        "distanceKm": 25.60499261998008,
        "gradePct": 5.050880358298413,
        "smoothedEle": 106.96988150952966,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461394,
        "lng": 120.501103,
        "ele": 107.25,
        "distanceKm": 25.60827484129135,
        "gradePct": 5.2239615309878475,
        "smoothedEle": 107.19963700131856,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461438,
        "lng": 120.501096,
        "ele": 107.5,
        "distanceKm": 25.613219251633776,
        "gradePct": 5.454966434082429,
        "smoothedEle": 107.54062467737832,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461476,
        "lng": 120.501073,
        "ele": 107.75,
        "distanceKm": 25.618052272164807,
        "gradePct": 5.673690286366271,
        "smoothedEle": 107.86685356322288,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461505,
        "lng": 120.501038,
        "ele": 108,
        "distanceKm": 25.622863083039995,
        "gradePct": 5.7298460514521885,
        "smoothedEle": 108.03002033338745,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461522,
        "lng": 120.500994,
        "ele": 108.5,
        "distanceKm": 25.627733027564325,
        "gradePct": 5.706743714918265,
        "smoothedEle": 108.11524436256323,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461523,
        "lng": 120.50096,
        "ele": 108.75,
        "distanceKm": 25.63120288863937,
        "gradePct": 5.690283178688095,
        "smoothedEle": 108.17596693137648,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461524,
        "lng": 120.500946,
        "ele": 108.75,
        "distanceKm": 25.632635243746076,
        "gradePct": 5.683488286149616,
        "smoothedEle": 108.20103314574388,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461502,
        "lng": 120.500887,
        "ele": 109,
        "distanceKm": 25.639131575123585,
        "gradePct": 5.331202412024164,
        "smoothedEle": 108.18863248791628,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461454,
        "lng": 120.500838,
        "ele": 109.25,
        "distanceKm": 25.646443798516597,
        "gradePct": 4.837579756575354,
        "smoothedEle": 108.15159480832368,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461336,
        "lng": 120.50084,
        "ele": 109,
        "distanceKm": 25.65956640381601,
        "gradePct": 3.9443868346894395,
        "smoothedEle": 108.0777948537711,
        "gradeBand": "hard"
      },
      {
        "lat": 23.461313,
        "lng": 120.500859,
        "ele": 108.75,
        "distanceKm": 25.66277526112354,
        "gradePct": 3.7146754083262192,
        "smoothedEle": 108.04844875509788,
        "gradeBand": "hard"
      },
      {
        "lat": 23.460971367888295,
        "lng": 120.50069428822162,
        "ele": 106.49348265770978,
        "distanceKm": 25.704312574441055,
        "gradePct": -0.4825539475611225,
        "smoothedEle": 106.44486461201068,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460617,
        "lng": 120.500557,
        "ele": 104,
        "distanceKm": 25.746130976874493,
        "gradePct": -3.2347513834082346,
        "smoothedEle": 104.9184279207831,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460295,
        "lng": 120.500236,
        "ele": 104.75,
        "distanceKm": 25.794649937372416,
        "gradePct": -1.4845222303042436,
        "smoothedEle": 105.3333768980516,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460082,
        "lng": 120.499683,
        "ele": 108.75,
        "distanceKm": 25.8558283975632,
        "gradePct": 3.1338327676079114,
        "smoothedEle": 108.13519599359186,
        "gradeBand": "hard"
      },
      {
        "lat": 23.459961,
        "lng": 120.499141,
        "ele": 109.5,
        "distanceKm": 25.912727920289566,
        "gradePct": 3.0853895209677082,
        "smoothedEle": 109.24669241761691,
        "gradeBand": "hard"
      },
      {
        "lat": 23.459999187446556,
        "lng": 120.49868901773517,
        "ele": 109.15855146016209,
        "distanceKm": 25.95902683101241,
        "gradePct": 1.0102997948130932,
        "smoothedEle": 109.20797517612095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.460081,
        "lng": 120.49824,
        "ele": 109,
        "distanceKm": 26.00572290482352,
        "gradePct": -0.4360679246313249,
        "smoothedEle": 108.673785917411,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460274,
        "lng": 120.497897,
        "ele": 107.75,
        "distanceKm": 26.046767519345583,
        "gradePct": -1.3163921832804801,
        "smoothedEle": 107.90183478328149,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460740462064372,
        "lng": 120.4976082925993,
        "ele": 106.67633792003551,
        "distanceKm": 26.106412852826516,
        "gradePct": -2.054643823456643,
        "smoothedEle": 106.60616582046259,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461218,
        "lng": 120.497339,
        "ele": 105.25,
        "distanceKm": 26.166196790209113,
        "gradePct": -3.015332077180218,
        "smoothedEle": 104.46444281039918,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4615275,
        "lng": 120.497165,
        "ele": 101.75000000000017,
        "distanceKm": 26.204918752201714,
        "gradePct": -4.888622336361651,
        "smoothedEle": 101.74999966623464,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461837,
        "lng": 120.496991,
        "ele": 98.25,
        "distanceKm": 26.243640695122004,
        "gradePct": -6.817481093413565,
        "smoothedEle": 98.45502003465843,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462208,
        "lng": 120.496778,
        "ele": 95,
        "distanceKm": 26.290265558861293,
        "gradePct": -7.4868606761776775,
        "smoothedEle": 95.2903405613674,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462455,
        "lng": 120.496625,
        "ele": 93.75,
        "distanceKm": 26.321854982969764,
        "gradePct": -7.307368633417208,
        "smoothedEle": 93.00147051224965,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462613,
        "lng": 120.496416,
        "ele": 90.5,
        "distanceKm": 26.349479869919158,
        "gradePct": -7.176627557756345,
        "smoothedEle": 90.88205637767312,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462776165193088,
        "lng": 120.49597441004018,
        "ele": 87.09297705599181,
        "distanceKm": 26.398039404958688,
        "gradePct": -7.508695866198643,
        "smoothedEle": 87.21837632289076,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462928082596544,
        "lng": 120.4955277050201,
        "ele": 84.1714885279959,
        "distanceKm": 26.446634448358015,
        "gradePct": -6.928872689314973,
        "smoothedEle": 84.17148780980351,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46308,
        "lng": 120.495081,
        "ele": 81.25,
        "distanceKm": 26.495229442591143,
        "gradePct": -5.764333517455885,
        "smoothedEle": 81.66604654625087,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463222,
        "lng": 120.494653,
        "ele": 80,
        "distanceKm": 26.541653582287697,
        "gradePct": -4.425840074184757,
        "smoothedEle": 80.05794591570616,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463204,
        "lng": 120.494216,
        "ele": 79,
        "distanceKm": 26.586272940049618,
        "gradePct": -3.5275464060432067,
        "smoothedEle": 78.60027591359285,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4630785,
        "lng": 120.49385,
        "ele": 76.75,
        "distanceKm": 26.626128291374282,
        "gradePct": -3.870683424545364,
        "smoothedEle": 76.72504801116052,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462953,
        "lng": 120.493484,
        "ele": 74.5,
        "distanceKm": 26.665983675945316,
        "gradePct": -4.561873926987594,
        "smoothedEle": 74.70123204811354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462897,
        "lng": 120.493347,
        "ele": 73.5,
        "distanceKm": 26.68128243423103,
        "gradePct": -4.635782158529286,
        "smoothedEle": 74.12752861239932,
        "gradeBand": "descent"
      },
      {
        "lat": 23.4625935,
        "lng": 120.4930035,
        "ele": 73.00000000000001,
        "distanceKm": 26.729929450903235,
        "gradePct": -3.5320288445778862,
        "smoothedEle": 73.00000014504816,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46229,
        "lng": 120.49266,
        "ele": 72.5,
        "distanceKm": 26.7785765255947,
        "gradePct": -1.9784772339027232,
        "smoothedEle": 72.25052295235892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461861,
        "lng": 120.492207,
        "ele": 70.25,
        "distanceKm": 26.844989026846935,
        "gradePct": -1.9232741929400288,
        "smoothedEle": 70.84471182231802,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46159532406264,
        "lng": 120.49178851394491,
        "ele": 71.15189869317703,
        "distanceKm": 26.896901040236862,
        "gradePct": -0.723870345972703,
        "smoothedEle": 71.138761679967,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461347,
        "lng": 120.491357,
        "ele": 72,
        "distanceKm": 26.948860683134047,
        "gradePct": 0.5061929041990182,
        "smoothedEle": 71.37283529529579,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.461074,
        "lng": 120.491051,
        "ele": 70.5,
        "distanceKm": 26.992400782266248,
        "gradePct": -0.6989372157481072,
        "smoothedEle": 70.4143332507361,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460723708283858,
        "lng": 120.49082286511593,
        "ele": 68.63604279523561,
        "distanceKm": 27.037773347208077,
        "gradePct": -2.4197213643889706,
        "smoothedEle": 68.90316645898723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46037,
        "lng": 120.490601,
        "ele": 67.75,
        "distanceKm": 27.083150174755907,
        "gradePct": -2.563263386314282,
        "smoothedEle": 68.0547149269918,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460038,
        "lng": 120.490273,
        "ele": 68,
        "distanceKm": 27.132972106779096,
        "gradePct": -1.056322164685354,
        "smoothedEle": 68.00675315342812,
        "gradeBand": "descent"
      },
      {
        "lat": 23.459785,
        "lng": 120.489936,
        "ele": 68.25,
        "distanceKm": 27.17739151605978,
        "gradePct": -1.0203177846496059,
        "smoothedEle": 67.14207198558277,
        "gradeBand": "descent"
      },
      {
        "lat": 23.459611,
        "lng": 120.489472,
        "ele": 64,
        "distanceKm": 27.228523173658928,
        "gradePct": -3.771600465721011,
        "smoothedEle": 64.23943551485254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.459254,
        "lng": 120.488912,
        "ele": 58.75,
        "distanceKm": 27.298084439900233,
        "gradePct": -6.213074143968473,
        "smoothedEle": 59.75430415387553,
        "gradeBand": "descent"
      },
      {
        "lat": 23.459609,
        "lng": 120.488695,
        "ele": 59.5,
        "distanceKm": 27.34334113517766,
        "gradePct": -4.12103920788052,
        "smoothedEle": 59.16297229725283,
        "gradeBand": "descent"
      },
      {
        "lat": 23.459982,
        "lng": 120.488472,
        "ele": 59,
        "distanceKm": 27.390645011162647,
        "gradePct": -1.5539231655103614,
        "smoothedEle": 58.680056200471824,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460307649374048,
        "lng": 120.48816435062595,
        "ele": 57.26553794982458,
        "distanceKm": 27.438561529771974,
        "gradePct": -1.8035606516766223,
        "smoothedEle": 57.421862801612725,
        "gradeBand": "descent"
      },
      {
        "lat": 23.460625432562335,
        "lng": 120.48784656743767,
        "ele": 56.13059799166568,
        "distanceKm": 27.48651309220411,
        "gradePct": -2.5237459628446497,
        "smoothedEle": 56.1984921970147,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46094321606044,
        "lng": 120.48752878393957,
        "ele": 55.25654667769939,
        "distanceKm": 27.534464648641617,
        "gradePct": -1.9170097476893855,
        "smoothedEle": 55.61242908289476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461261,
        "lng": 120.487211,
        "ele": 55.75,
        "distanceKm": 27.582416218946918,
        "gradePct": -0.760061220766392,
        "smoothedEle": 55.5429529992941,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461475,
        "lng": 120.486932,
        "ele": 55.5,
        "distanceKm": 27.619512500595714,
        "gradePct": -0.34332526830788845,
        "smoothedEle": 55.45184871584956,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461681072405607,
        "lng": 120.48650419357067,
        "ele": 55,
        "distanceKm": 27.668800127759933,
        "gradePct": -0.4359001529294284,
        "smoothedEle": 55.12678093208945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.461883,
        "lng": 120.486074,
        "ele": 55,
        "distanceKm": 27.718091761837872,
        "gradePct": -0.6436737548368093,
        "smoothedEle": 54.8116641351494,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462055666666668,
        "lng": 120.48569133333334,
        "ele": 54.33333333333335,
        "distanceKm": 27.76159100238269,
        "gradePct": -0.8409942564185422,
        "smoothedEle": 54.33333318062683,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462228333333332,
        "lng": 120.48530866666667,
        "ele": 53.66666666666665,
        "distanceKm": 27.805090197115554,
        "gradePct": -1.2281154059236994,
        "smoothedEle": 53.66666651396027,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462401,
        "lng": 120.484926,
        "ele": 53,
        "distanceKm": 27.8485893460365,
        "gradePct": -0.9597450015056245,
        "smoothedEle": 53.51655836923383,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462677,
        "lng": 120.484464,
        "ele": 54.5,
        "distanceKm": 27.90482638617379,
        "gradePct": 0.92987103789475,
        "smoothedEle": 54.60058070626872,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.463078,
        "lng": 120.483991,
        "ele": 57,
        "distanceKm": 27.97052215375467,
        "gradePct": 1.7815092161692012,
        "smoothedEle": 55.720843275985985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.463209,
        "lng": 120.483546,
        "ele": 53.75,
        "distanceKm": 28.018192687983905,
        "gradePct": -0.6749474904817181,
        "smoothedEle": 54.15355912585387,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463223324516317,
        "lng": 120.48309835736075,
        "ele": 52.104717730146376,
        "distanceKm": 28.063880464348173,
        "gradePct": -2.813277199330332,
        "smoothedEle": 52.79431013467083,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463209,
        "lng": 120.48265,
        "ele": 53,
        "distanceKm": 28.10964109878067,
        "gradePct": -1.446820554162458,
        "smoothedEle": 52.98789275704669,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463118,
        "lng": 120.482286,
        "ele": 53.75,
        "distanceKm": 28.148123640473962,
        "gradePct": 0.07892778870394211,
        "smoothedEle": 53.34201641643409,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.462811,
        "lng": 120.481749,
        "ele": 52.75,
        "distanceKm": 28.212665017490817,
        "gradePct": -0.3163942789156548,
        "smoothedEle": 52.69932515257112,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462678,
        "lng": 120.481393,
        "ele": 52,
        "distanceKm": 28.251873560865597,
        "gradePct": -1.0265466436017545,
        "smoothedEle": 52.278128749332694,
        "gradeBand": "descent"
      },
      {
        "lat": 23.46266279768465,
        "lng": 120.48089504051862,
        "ele": 52.203991477039274,
        "distanceKm": 28.302694264047744,
        "gradePct": -0.4559857143470871,
        "smoothedEle": 52.342626382943564,
        "gradeBand": "descent"
      },
      {
        "lat": 23.462691398842324,
        "lng": 120.48039452025931,
        "ele": 52.97699573851966,
        "distanceKm": 28.353847006069927,
        "gradePct": 0.6963624906414808,
        "smoothedEle": 52.97699578119007,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46272,
        "lng": 120.479894,
        "ele": 53.75,
        "distanceKm": 28.40499973705196,
        "gradePct": 1.1899866180629362,
        "smoothedEle": 53.561204264437166,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.462784,
        "lng": 120.479271,
        "ele": 53.75,
        "distanceKm": 28.468943830527923,
        "gradePct": 0.45187833408460487,
        "smoothedEle": 53.60129292359893,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46287,
        "lng": 120.478885,
        "ele": 53.25,
        "distanceKm": 28.509460999967498,
        "gradePct": -0.454493027558329,
        "smoothedEle": 53.109508149599456,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463053,
        "lng": 120.478523,
        "ele": 52.25,
        "distanceKm": 28.551621214607177,
        "gradePct": -1.3034920966239296,
        "smoothedEle": 52.28694070827304,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463385,
        "lng": 120.478199,
        "ele": 51.25,
        "distanceKm": 28.60116957090147,
        "gradePct": -1.9129353391750796,
        "smoothedEle": 51.29721159210064,
        "gradeBand": "descent"
      },
      {
        "lat": 23.463908,
        "lng": 120.478102,
        "ele": 50.25,
        "distanceKm": 28.660160245615895,
        "gradePct": -1.3907842460141724,
        "smoothedEle": 50.72558919736253,
        "gradeBand": "descent"
      },
      {
        "lat": 23.464174,
        "lng": 120.478446,
        "ele": 51.25,
        "distanceKm": 28.706051731428957,
        "gradePct": 0.9989283617967573,
        "smoothedEle": 52.24883159023268,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.464236,
        "lng": 120.478621,
        "ele": 53.5,
        "distanceKm": 28.725186845774708,
        "gradePct": 2.8428907545240016,
        "smoothedEle": 53.90737383072645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.46424,
        "lng": 120.478756,
        "ele": 55,
        "distanceKm": 28.738964057408932,
        "gradePct": 4.2094254809404426,
        "smoothedEle": 55.1404067325699,
        "gradeBand": "hard"
      },
      {
        "lat": 23.4641615,
        "lng": 120.479139,
        "ele": 59.625,
        "distanceKm": 28.7789934478023,
        "gradePct": 8.228063569524043,
        "smoothedEle": 59.57876941882258,
        "gradeBand": "steep"
      },
      {
        "lat": 23.464083,
        "lng": 120.479522,
        "ele": 64.25,
        "distanceKm": 28.819022860869598,
        "gradePct": 10.955853111537849,
        "smoothedEle": 64.32896155193701,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.464074,
        "lng": 120.479864,
        "ele": 68.5,
        "distanceKm": 28.8539213313425,
        "gradePct": 11.384666016356968,
        "smoothedEle": 68.18349936653067,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.464158,
        "lng": 120.480083,
        "ele": 71.25,
        "distanceKm": 28.87813356331997,
        "gradePct": 10.939703332227218,
        "smoothedEle": 70.42313082444649,
        "gradeBand": "extreme"
      },
      {
        "lat": 23.464388,
        "lng": 120.480497,
        "ele": 73.5,
        "distanceKm": 28.92750242748311,
        "gradePct": 8.207975556738829,
        "smoothedEle": 73.47350566655919,
        "gradeBand": "steep"
      },
      {
        "lat": 23.464556,
        "lng": 120.480696,
        "ele": 75,
        "distanceKm": 28.955088301519915,
        "gradePct": 6.598195252128951,
        "smoothedEle": 74.8896393600703,
        "gradeBand": "steep"
      },
      {
        "lat": 23.465005,
        "lng": 120.48096,
        "ele": 77,
        "distanceKm": 29.011813771040487,
        "gradePct": 3.438474136503296,
        "smoothedEle": 75.94261816733625,
        "gradeBand": "hard"
      },
      {
        "lat": 23.465138,
        "lng": 120.480445,
        "ele": 74.25,
        "distanceKm": 29.066385659922712,
        "gradePct": -1.1386026153317752,
        "smoothedEle": 73.96074640561524,
        "gradeBand": "descent"
      },
      {
        "lat": 23.465361,
        "lng": 120.479916,
        "ele": 69.75,
        "distanceKm": 29.12576832115586,
        "gradePct": -3.85805449664163,
        "smoothedEle": 71.57778024450856,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 29.12576832115586,
      "elevationGainM": 285.5454278583627,
      "elevationLossM": 285.793404398414,
      "minimumElevationM": 50,
      "maximumElevationM": 207.5,
      "maximumSustainedGradePct": 11.384666016356968
    },
    "climbs": [
      {
        "startIndex": 12,
        "endIndex": 92,
        "startDistanceKm": 0.4656220618195785,
        "endDistanceKm": 3.89193706669106,
        "distanceKm": 3.4263150048714817,
        "gainM": 69.32681486416762,
        "averageGradePct": 2.023363723580576,
        "maximumGradePct": 7.551907896729709
      },
      {
        "startIndex": 135,
        "endIndex": 327,
        "startDistanceKm": 5.958952539700308,
        "endDistanceKm": 15.189429031640483,
        "distanceKm": 9.230476491940175,
        "gainM": 137.3542655756055,
        "averageGradePct": 1.4880517348756572,
        "maximumGradePct": 5.608329139381359
      },
      {
        "startIndex": 511,
        "endIndex": 564,
        "startDistanceKm": 23.922927039152256,
        "endDistanceKm": 25.912727920289566,
        "distanceKm": 1.9898008811373096,
        "gainM": 39.442614518367265,
        "averageGradePct": 1.9822392728976517,
        "maximumGradePct": 7.828932407786186
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
