"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("penghu", {
  "penghu-cross-sea-bridge": {
    "routeId": "penghu-cross-sea-bridge",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T04:38:08.998Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "a6b8ba46b7e22d836eda5f6d4c9bd4906d111ba8635f9a8fb21be38da525bee0",
      "roadPolicyAuditSha256": "e27fa1213bd7f0782a40f8da37c1b6d54cba514c045f42f7a04956531e8fcd32",
      "elevationAnalysis": {
        "smoothingWindowM": 1000,
        "gradeWindowM": 500,
        "reason": "本線為低海拔跨海與濱海道路，SRTM 100/100 公尺視窗把海岸短波累積為爬升 284 公尺、最大坡度 6.76%；500/200、750/300、1000/500 依序為 204/3.59%、156/2.35%、134/1.85%。採 1000/500 保留 4 至 32.5 公尺緩坡，同時抑制海面與橋梁像元短波；僅供行程規劃，並非道路測量。",
        "referenceUrl": "https://www.penghu-nsa.gov.tw/TravelInformationSceneryDetailC001200.aspx?Cond=bcd530cb-32e6-4b7a-ae23-9c30a6877edd&Language=1028",
        "referenceLabel": "澎湖國家風景區跨海大橋官方交通說明"
      },
      "reviewedAt": "2026-08-01T04:50:06.715Z",
      "reviewerNote": "初版景點近似座標導入 footway 510 公尺、service 3899 公尺與 track 46 公尺，已全部棄用；核准版把觀音亭、東衛、小門及橋端吸附至一般道路、縣道 203、澎 2 實際節點。raw 的 service、track、footway、path、steps、pedestrian、港區／私人／權限禁制、route=ferry 與非法逆向單行均為 0。live OSM 五窗 5/5 命中合法道路；跨海大橋全段 raw 16 點另取 21 樣本，21/21 於 0.13 公尺內貼合 way 1093500111／60878925，兩者均為 name=澎湖跨海大橋、ref=203、highway=secondary、surface=asphalt，橋面 way 另有 bridge=yes。軌跡只沿實體橋面，沒有跨海直線；強側風時應中止騎乘。"
    },
    "waypoints": [
      {
        "name": "馬公觀音亭外一般道路",
        "lat": 23.5673086,
        "lng": 119.5621406,
        "role": "start"
      },
      {
        "name": "東衛縣道203主線",
        "lat": 23.5781077,
        "lng": 119.6038277,
        "role": "via"
      },
      {
        "name": "跨海大橋白沙端縣道203",
        "lat": 23.6510816,
        "lng": 119.5485775,
        "role": "via"
      },
      {
        "name": "跨海大橋西嶼端縣道203",
        "lat": 23.6457493,
        "lng": 119.5443402,
        "role": "via"
      },
      {
        "name": "小門澎2主線折返點",
        "lat": 23.652618,
        "lng": 119.5173404,
        "role": "via"
      },
      {
        "name": "回程跨海大橋西嶼端",
        "lat": 23.6457493,
        "lng": 119.5443402,
        "role": "via"
      },
      {
        "name": "回程跨海大橋白沙端",
        "lat": 23.6510816,
        "lng": 119.5485775,
        "role": "via"
      },
      {
        "name": "回程東衛縣道203主線",
        "lat": 23.5781077,
        "lng": 119.6038277,
        "role": "via"
      },
      {
        "name": "馬公觀音亭外一般道路",
        "lat": 23.5673086,
        "lng": 119.5621406,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.567309,
        "lng": 119.562141,
        "ele": 11.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 14.638892666576368,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567572,
        "lng": 119.562523,
        "ele": 12.5,
        "distanceKm": 0.048693442707467366,
        "gradePct": 1.023420449613957,
        "smoothedEle": 15.137231316865645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567846352834692,
        "lng": 119.56297119375239,
        "ele": 11.893686158961916,
        "distanceKm": 0.10362354260589127,
        "gradePct": 0.9924751576773364,
        "smoothedEle": 15.667330584445029,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568127292785302,
        "lng": 119.5634146322399,
        "ele": 11.570239579243676,
        "distanceKm": 0.15856432836448248,
        "gradePct": 0.9514438540977546,
        "smoothedEle": 16.14754322359162,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568407,
        "lng": 119.563859,
        "ele": 11.75,
        "distanceKm": 0.21350525830363845,
        "gradePct": 0.8759294138201072,
        "smoothedEle": 16.509048024110534,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56862224542723,
        "lng": 119.56420294887856,
        "ele": 13.044431263384467,
        "distanceKm": 0.2559517747607214,
        "gradePct": 0.8142808765288435,
        "smoothedEle": 16.7230590215891,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568836,
        "lng": 119.564548,
        "ele": 14.5,
        "distanceKm": 0.2983980180891475,
        "gradePct": 0.7571109570251411,
        "smoothedEle": 16.898096757075166,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569043,
        "lng": 119.56483,
        "ele": 16.5,
        "distanceKm": 0.33521997312899765,
        "gradePct": 0.7246051412424772,
        "smoothedEle": 17.067913826340735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568997500000002,
        "lng": 119.5652855,
        "ele": 18,
        "distanceKm": 0.38191899085266984,
        "gradePct": 0.6910534771982361,
        "smoothedEle": 17.278157132944155,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568952,
        "lng": 119.565741,
        "ele": 19.5,
        "distanceKm": 0.42861802456457715,
        "gradePct": 0.6649223075424313,
        "smoothedEle": 17.48886952605394,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568906,
        "lng": 119.566385,
        "ele": 20,
        "distanceKm": 0.49445296123971766,
        "gradePct": 0.631682171266627,
        "smoothedEle": 17.76226386802755,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56887,
        "lng": 119.566962,
        "ele": 20.5,
        "distanceKm": 0.5533964166841406,
        "gradePct": 0.6069945047091917,
        "smoothedEle": 18.217589577286095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56883562567998,
        "lng": 119.56740955052848,
        "ele": 21.429144000670117,
        "distanceKm": 0.5991702781596752,
        "gradePct": 0.5883603388147908,
        "smoothedEle": 18.566156346823213,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568816121468164,
        "lng": 119.56785829125997,
        "ele": 21.420715605438083,
        "distanceKm": 0.6449569823078042,
        "gradePct": 0.5788882346754043,
        "smoothedEle": 18.92304871974024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568796,
        "lng": 119.568307,
        "ele": 20.75,
        "distanceKm": 0.6907437390878424,
        "gradePct": 0.585200064232496,
        "smoothedEle": 19.285280249379365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568768499999997,
        "lng": 119.568692,
        "ele": 20.375,
        "distanceKm": 0.7301016253756122,
        "gradePct": 0.5913958277038702,
        "smoothedEle": 19.549704349076617,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568741,
        "lng": 119.569077,
        "ele": 20,
        "distanceKm": 0.7694595198543743,
        "gradePct": 0.5900484915278553,
        "smoothedEle": 19.729004055647728,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569086,
        "lng": 119.569479,
        "ele": 20.75,
        "distanceKm": 0.8255873244296092,
        "gradePct": 0.554970799894501,
        "smoothedEle": 19.798343563993775,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569429,
        "lng": 119.569918,
        "ele": 21.25,
        "distanceKm": 0.8843796280380666,
        "gradePct": 0.49491223469150397,
        "smoothedEle": 19.7638210361307,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569652,
        "lng": 119.570318,
        "ele": 21.75,
        "distanceKm": 0.9320960119157253,
        "gradePct": 0.4332002169066527,
        "smoothedEle": 19.669313733209947,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569884,
        "lng": 119.5708,
        "ele": 21.5,
        "distanceKm": 0.9875823749244527,
        "gradePct": 0.3584701686786204,
        "smoothedEle": 19.52608306060577,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570077,
        "lng": 119.571199,
        "ele": 20,
        "distanceKm": 1.0335631929587847,
        "gradePct": 0.2660868868774095,
        "smoothedEle": 19.394816559012924,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570399,
        "lng": 119.571692,
        "ele": 19.75,
        "distanceKm": 1.0952609186657296,
        "gradePct": 0.1396558401746077,
        "smoothedEle": 19.234665876407057,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570636940585853,
        "lng": 119.57199856376367,
        "ele": 19.5,
        "distanceKm": 1.1362026483764112,
        "gradePct": 0.056367807363308486,
        "smoothedEle": 19.136650588841565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570875,
        "lng": 119.572305,
        "ele": 19.5,
        "distanceKm": 1.1771429590157254,
        "gradePct": -0.02265914779959175,
        "smoothedEle": 19.06438502711868,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571159,
        "lng": 119.5728,
        "ele": 17.75,
        "distanceKm": 1.2366608414121116,
        "gradePct": -0.11297584126169155,
        "smoothedEle": 19.014706454414938,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571381,
        "lng": 119.573268,
        "ele": 15.75,
        "distanceKm": 1.2903674345041345,
        "gradePct": -0.15169469907593083,
        "smoothedEle": 18.99635990694085,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571604,
        "lng": 119.573758,
        "ele": 16.5,
        "distanceKm": 1.3461241494463994,
        "gradePct": -0.17013377372124908,
        "smoothedEle": 18.935615581007816,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571678666666667,
        "lng": 119.57417166666667,
        "ele": 16.75,
        "distanceKm": 1.3890935769676052,
        "gradePct": -0.17585285502586245,
        "smoothedEle": 18.875220290731992,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571753333333334,
        "lng": 119.57458533333333,
        "ele": 17,
        "distanceKm": 1.4320629809680512,
        "gradePct": -0.169808169646047,
        "smoothedEle": 18.820338306235975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571828,
        "lng": 119.574999,
        "ele": 17.25,
        "distanceKm": 1.4750323614505094,
        "gradePct": -0.15593617491108916,
        "smoothedEle": 18.778798378080097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571919,
        "lng": 119.575394,
        "ele": 17.25,
        "distanceKm": 1.5165417377224912,
        "gradePct": -0.13352302003743047,
        "smoothedEle": 18.775794480359647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572136476331032,
        "lng": 119.57579342675827,
        "ele": 18.190737974261644,
        "distanceKm": 1.5638909437938717,
        "gradePct": -0.0913123810259556,
        "smoothedEle": 18.859531979060254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572343,
        "lng": 119.5762,
        "ele": 19,
        "distanceKm": 1.6112655421492497,
        "gradePct": -0.041333730749617104,
        "smoothedEle": 18.98968184653295,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572401,
        "lng": 119.576633,
        "ele": 19.5,
        "distanceKm": 1.655864153382886,
        "gradePct": 0.002055869316174608,
        "smoothedEle": 19.112224539165727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572307988483804,
        "lng": 119.57702700467925,
        "ele": 19.75,
        "distanceKm": 1.6973302357954239,
        "gradePct": 0.025409886137941838,
        "smoothedEle": 19.174584478326395,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572170494241902,
        "lng": 119.57740750233963,
        "ele": 19.75,
        "distanceKm": 1.7390142420505748,
        "gradePct": 0.04603418677745879,
        "smoothedEle": 19.24407345019979,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572033,
        "lng": 119.577788,
        "ele": 19.75,
        "distanceKm": 1.7806982860788145,
        "gradePct": 0.06395438169834548,
        "smoothedEle": 19.319434864097666,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571865,
        "lng": 119.578222,
        "ele": 19.5,
        "distanceKm": 1.8287131990607048,
        "gradePct": 0.08116249500745595,
        "smoothedEle": 19.360396469914665,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571734,
        "lng": 119.578578,
        "ele": 19.75,
        "distanceKm": 1.8678105000336742,
        "gradePct": 0.08293606275738198,
        "smoothedEle": 19.319814840838507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571604,
        "lng": 119.578964,
        "ele": 20.25,
        "distanceKm": 1.9097222033516812,
        "gradePct": 0.08226233497239051,
        "smoothedEle": 19.26018438224433,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571397,
        "lng": 119.579445,
        "ele": 20.75,
        "distanceKm": 1.9638791173085208,
        "gradePct": 0.0735852596885472,
        "smoothedEle": 19.157506888301576,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571126,
        "lng": 119.579971,
        "ele": 21.625,
        "distanceKm": 2.0253764637085157,
        "gradePct": 0.044697119363959814,
        "smoothedEle": 19.01490436990063,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570855,
        "lng": 119.580497,
        "ele": 22.5,
        "distanceKm": 2.0868739065429494,
        "gradePct": -0.02433246366277757,
        "smoothedEle": 18.801009606197383,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570572,
        "lng": 119.580962,
        "ele": 22.25,
        "distanceKm": 2.143761754421383,
        "gradePct": -0.12113903297513104,
        "smoothedEle": 18.473275859998125,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570369682599576,
        "lng": 119.58130634484665,
        "ele": 20.671043989149116,
        "distanceKm": 2.185448144615564,
        "gradePct": -0.1966428500361829,
        "smoothedEle": 18.17350100973932,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57016734129979,
        "lng": 119.58165067242332,
        "ele": 19.585521994574556,
        "distanceKm": 2.227134532791586,
        "gradePct": -0.27893623471109164,
        "smoothedEle": 17.82958830728714,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569965,
        "lng": 119.581995,
        "ele": 18.5,
        "distanceKm": 2.2688209664855683,
        "gradePct": -0.36641866880436286,
        "smoothedEle": 17.465868277286415,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569798,
        "lng": 119.582599,
        "ele": 15.5,
        "distanceKm": 2.3331195319230944,
        "gradePct": -0.4863810541122945,
        "smoothedEle": 16.923917580168297,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569714674938293,
        "lng": 119.58310884464933,
        "ele": 15.327236096998233,
        "distanceKm": 2.3859017170202512,
        "gradePct": -0.5629982166746963,
        "smoothedEle": 16.479084226975154,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56963254737718,
        "lng": 119.58361893968485,
        "ele": 15.138870131143653,
        "distanceKm": 2.4386858570910905,
        "gradePct": -0.6499270101314568,
        "smoothedEle": 15.955636391315776,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569550419816064,
        "lng": 119.58412903472039,
        "ele": 14.950504165289075,
        "distanceKm": 2.4914700291829264,
        "gradePct": -0.7352189843029225,
        "smoothedEle": 15.417433051458202,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569468292254953,
        "lng": 119.58463912975593,
        "ele": 14.762138199434498,
        "distanceKm": 2.5442542332941596,
        "gradePct": -0.8202625115081457,
        "smoothedEle": 14.84793288609143,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56938714961063,
        "lng": 119.58514941127426,
        "ele": 13.714227876275713,
        "distanceKm": 2.597038358105602,
        "gradePct": -0.8956811700432212,
        "smoothedEle": 14.264045840487483,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569306074805315,
        "lng": 119.58565970563713,
        "ele": 12.607113938137852,
        "distanceKm": 2.6498225155254973,
        "gradePct": -0.9344012521309758,
        "smoothedEle": 13.757685500456848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569225,
        "lng": 119.58617,
        "ele": 11.5,
        "distanceKm": 2.7026067045788817,
        "gradePct": -0.9325919528161303,
        "smoothedEle": 13.368983125961295,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569159,
        "lng": 119.586687,
        "ele": 11,
        "distanceKm": 2.7558074202907714,
        "gradePct": -0.8979236078913087,
        "smoothedEle": 13.089795268981591,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569080500000002,
        "lng": 119.587172,
        "ele": 11.249999999999998,
        "distanceKm": 2.80600291840569,
        "gradePct": -0.8496725981761039,
        "smoothedEle": 12.904111284125996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569002,
        "lng": 119.587657,
        "ele": 11.5,
        "distanceKm": 2.856198445615012,
        "gradePct": -0.7754639985059836,
        "smoothedEle": 12.852095019267372,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569013,
        "lng": 119.588033,
        "ele": 10.25,
        "distanceKm": 2.8945395395493017,
        "gradePct": -0.7225837873246846,
        "smoothedEle": 12.780506046844625,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569041666666667,
        "lng": 119.58859199999999,
        "ele": 10.5,
        "distanceKm": 2.951601405886508,
        "gradePct": -0.6397279905405803,
        "smoothedEle": 12.62530560739754,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569070333333336,
        "lng": 119.589151,
        "ele": 10.75,
        "distanceKm": 3.0086632598093876,
        "gradePct": -0.5526520529730679,
        "smoothedEle": 12.468671312244119,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569099,
        "lng": 119.58971,
        "ele": 11,
        "distanceKm": 3.0657251013149898,
        "gradePct": -0.4573670538320567,
        "smoothedEle": 12.323591326166293,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56911055291724,
        "lng": 119.5901303641647,
        "ele": 12.289537164565044,
        "distanceKm": 3.1085874588483113,
        "gradePct": -0.3795161600807095,
        "smoothedEle": 12.255674097024908,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569116,
        "lng": 119.590551,
        "ele": 13.5,
        "distanceKm": 3.151462525345241,
        "gradePct": -0.3174031280842325,
        "smoothedEle": 12.158592839955189,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569095,
        "lng": 119.59121,
        "ele": 14.25,
        "distanceKm": 3.2186677367563914,
        "gradePct": -0.2820138542289531,
        "smoothedEle": 11.874628425672972,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569049,
        "lng": 119.591924,
        "ele": 14.5,
        "distanceKm": 3.2916174757509657,
        "gradePct": -0.29744919063844827,
        "smoothedEle": 11.470080189165174,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568978081558324,
        "lng": 119.59236742909172,
        "ele": 14.456277054251569,
        "distanceKm": 3.3374941922109245,
        "gradePct": -0.33964270480981573,
        "smoothedEle": 11.173264206251343,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56891454077916,
        "lng": 119.59281221454586,
        "ele": 13.35313852712579,
        "distanceKm": 3.3833736440020044,
        "gradePct": -0.3874632043915064,
        "smoothedEle": 10.864038542923138,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568851,
        "lng": 119.593257,
        "ele": 12.25,
        "distanceKm": 3.4292531174628,
        "gradePct": -0.40168173179191347,
        "smoothedEle": 10.677681223592115,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568836,
        "lng": 119.59394,
        "ele": 12.25,
        "distanceKm": 3.4988839240126746,
        "gradePct": -0.3955588786938179,
        "smoothedEle": 10.517721110897792,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568895,
        "lng": 119.594454,
        "ele": 12.25,
        "distanceKm": 3.551679591851252,
        "gradePct": -0.3727679574050867,
        "smoothedEle": 10.495462309485609,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568928,
        "lng": 119.594966,
        "ele": 12.25,
        "distanceKm": 3.603991062112319,
        "gradePct": -0.34331289222747613,
        "smoothedEle": 10.546392822074857,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568916630213383,
        "lng": 119.59539784705892,
        "ele": 9.683295697718025,
        "distanceKm": 3.6480227048934872,
        "gradePct": -0.31576246003407604,
        "smoothedEle": 10.587569264580706,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568877,
        "lng": 119.595828,
        "ele": 7,
        "distanceKm": 3.692084452740677,
        "gradePct": -0.2676901310742892,
        "smoothedEle": 10.648501004120975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568846999999998,
        "lng": 119.5962695,
        "ele": 6,
        "distanceKm": 3.737205263268019,
        "gradePct": -0.2100389023677888,
        "smoothedEle": 10.721632673379238,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568817,
        "lng": 119.596711,
        "ele": 5,
        "distanceKm": 3.782326084043858,
        "gradePct": -0.14077018284403345,
        "smoothedEle": 10.817755382942366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568832,
        "lng": 119.597127,
        "ele": 4.75,
        "distanceKm": 3.8247572804664336,
        "gradePct": -0.06504867387915496,
        "smoothedEle": 10.930426886600376,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568877,
        "lng": 119.597525,
        "ele": 4.5,
        "distanceKm": 3.865628583431784,
        "gradePct": 0.017194923749620016,
        "smoothedEle": 11.069614157572685,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568932500000003,
        "lng": 119.5980405,
        "ele": 6.625,
        "distanceKm": 3.9185291204304993,
        "gradePct": 0.1214947275027825,
        "smoothedEle": 11.32871454452657,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568988,
        "lng": 119.598556,
        "ele": 8.75,
        "distanceKm": 3.971429635380615,
        "gradePct": 0.19901795152509685,
        "smoothedEle": 11.575880525778807,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5694994984406,
        "lng": 119.59871000527879,
        "ele": 10.463415447958345,
        "distanceKm": 4.03043182085498,
        "gradePct": 0.25602316218789734,
        "smoothedEle": 11.784536240180367,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570013,
        "lng": 119.598857,
        "ele": 12.75,
        "distanceKm": 4.089463364776549,
        "gradePct": 0.27528248024219054,
        "smoothedEle": 11.908661039068473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57040141962644,
        "lng": 119.59896326153296,
        "ele": 13.926094611094028,
        "distanceKm": 4.1339908274628545,
        "gradePct": 0.2771625629708357,
        "smoothedEle": 11.96026008902578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570788,
        "lng": 119.599078,
        "ele": 15.25,
        "distanceKm": 4.178538884021744,
        "gradePct": 0.2899080921317392,
        "smoothedEle": 12.079309682555117,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571294,
        "lng": 119.599317,
        "ele": 16.25,
        "distanceKm": 4.23984992505245,
        "gradePct": 0.32067968622632853,
        "smoothedEle": 12.330665134482555,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571663,
        "lng": 119.59954033333334,
        "ele": 16.91666666666666,
        "distanceKm": 4.286771430658284,
        "gradePct": 0.3405040722853755,
        "smoothedEle": 12.532079886829434,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572032,
        "lng": 119.59976366666666,
        "ele": 17.58333333333334,
        "distanceKm": 4.3336929052379585,
        "gradePct": 0.35083776769798974,
        "smoothedEle": 12.715046005902158,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572401,
        "lng": 119.599987,
        "ele": 18.25,
        "distanceKm": 4.380614348792487,
        "gradePct": 0.35116261705622165,
        "smoothedEle": 12.898825696329844,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572778,
        "lng": 119.60023566666666,
        "ele": 17.25,
        "distanceKm": 4.429600156732931,
        "gradePct": 0.32430128799947583,
        "smoothedEle": 13.00194795833035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573155,
        "lng": 119.60048433333334,
        "ele": 16.25,
        "distanceKm": 4.478585927031614,
        "gradePct": 0.2793726775907839,
        "smoothedEle": 12.998051470307116,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573532,
        "lng": 119.600733,
        "ele": 15.25,
        "distanceKm": 4.527571659686547,
        "gradePct": 0.2295679976404969,
        "smoothedEle": 12.922261535730286,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573966,
        "lng": 119.60105899999999,
        "ele": 13.625,
        "distanceKm": 4.586161429403042,
        "gradePct": 0.17112686666363253,
        "smoothedEle": 12.757352439219876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5744,
        "lng": 119.601385,
        "ele": 12,
        "distanceKm": 4.644751136848759,
        "gradePct": 0.11965382384146181,
        "smoothedEle": 12.587284906182527,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.574820666666668,
        "lng": 119.601665,
        "ele": 10.916666666666666,
        "distanceKm": 4.699544482809922,
        "gradePct": 0.056350300383602205,
        "smoothedEle": 12.447177350299844,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.575241333333334,
        "lng": 119.601945,
        "ele": 9.833333333333334,
        "distanceKm": 4.754337781157876,
        "gradePct": -0.013051429827379125,
        "smoothedEle": 12.327598401271885,
        "gradeBand": "descent"
      },
      {
        "lat": 23.575662,
        "lng": 119.602225,
        "ele": 8.75,
        "distanceKm": 4.809131031891929,
        "gradePct": -0.07783225535454683,
        "smoothedEle": 12.230107887426637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5760095,
        "lng": 119.6024495,
        "ele": 8.5,
        "distanceKm": 4.854037047809923,
        "gradePct": -0.12546790016068846,
        "smoothedEle": 12.167389480315524,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576357,
        "lng": 119.602674,
        "ele": 8.25,
        "distanceKm": 4.898943032873939,
        "gradePct": -0.1681112486151026,
        "smoothedEle": 12.09685400338097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576772,
        "lng": 119.60296,
        "ele": 8,
        "distanceKm": 4.953523320013075,
        "gradePct": -0.18591164311535843,
        "smoothedEle": 12.070486816278573,
        "gradeBand": "descent"
      },
      {
        "lat": 23.577136390135312,
        "lng": 119.60320504681663,
        "ele": 8.128116591494502,
        "distanceKm": 5.0011196701917395,
        "gradePct": -0.17067285036391944,
        "smoothedEle": 12.109823374929082,
        "gradeBand": "descent"
      },
      {
        "lat": 23.577511,
        "lng": 119.603432,
        "ele": 8.25,
        "distanceKm": 5.04876512356927,
        "gradePct": -0.13189088214114514,
        "smoothedEle": 12.203155158516799,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5778095,
        "lng": 119.60363,
        "ele": 9.625000000000016,
        "distanceKm": 5.087609286273016,
        "gradePct": -0.08468351635799572,
        "smoothedEle": 12.329732183328892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578108,
        "lng": 119.603828,
        "ele": 11,
        "distanceKm": 5.12645342514303,
        "gradePct": -0.03622359647773834,
        "smoothedEle": 12.45927943835802,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578436,
        "lng": 119.604034,
        "ele": 12.250000000000014,
        "distanceKm": 5.168536053366623,
        "gradePct": 0.01786345139764087,
        "smoothedEle": 12.615783710460187,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578764,
        "lng": 119.60424,
        "ele": 13.5,
        "distanceKm": 5.210618655423011,
        "gradePct": 0.0700390278593737,
        "smoothedEle": 12.773204608444201,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.579057,
        "lng": 119.60443950000001,
        "ele": 14.375,
        "distanceKm": 5.249022164717332,
        "gradePct": 0.11951046427831855,
        "smoothedEle": 12.936751335266855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57935,
        "lng": 119.604639,
        "ele": 15.25,
        "distanceKm": 5.287425649987343,
        "gradePct": 0.16996150318837308,
        "smoothedEle": 13.11853455457302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.579739,
        "lng": 119.604896,
        "ele": 16.25,
        "distanceKm": 5.33799203364568,
        "gradePct": 0.23870153784357803,
        "smoothedEle": 13.383306588625375,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.580094796604197,
        "lng": 119.60512085622955,
        "ele": 16.70151853324542,
        "distanceKm": 5.3837121150514875,
        "gradePct": 0.29626175573333813,
        "smoothedEle": 13.602086543016853,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.580451152855996,
        "lng": 119.605344655575,
        "ele": 16.904293334625173,
        "distanceKm": 5.429432200285703,
        "gradePct": 0.34482482974518724,
        "smoothedEle": 13.806249142351188,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.580807576428,
        "lng": 119.6055683277875,
        "ele": 17.077146667312586,
        "distanceKm": 5.475152281677611,
        "gradePct": 0.3811678932827529,
        "smoothedEle": 13.994201790286363,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.581164,
        "lng": 119.605792,
        "ele": 17.25,
        "distanceKm": 5.520872332211106,
        "gradePct": 0.40488696390426854,
        "smoothedEle": 14.172951313020732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.581468,
        "lng": 119.605989,
        "ele": 17.25,
        "distanceKm": 5.560187931602462,
        "gradePct": 0.42072123920465715,
        "smoothedEle": 14.343983551009302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.581873,
        "lng": 119.606244,
        "ele": 16.5,
        "distanceKm": 5.612181958533545,
        "gradePct": 0.4195714619665754,
        "smoothedEle": 14.509540653174207,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.582171,
        "lng": 119.606418,
        "ele": 15.62500000000001,
        "distanceKm": 5.649764308419128,
        "gradePct": 0.406094802172635,
        "smoothedEle": 14.576446057862473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.582469,
        "lng": 119.606592,
        "ele": 14.75,
        "distanceKm": 5.687346639310237,
        "gradePct": 0.38358536965472395,
        "smoothedEle": 14.60407643883983,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.582942,
        "lng": 119.606926,
        "ele": 14.5,
        "distanceKm": 5.7499949359900535,
        "gradePct": 0.3233064035877341,
        "smoothedEle": 14.557887974175745,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.583293625908336,
        "lng": 119.60716515364011,
        "ele": 14.25,
        "distanceKm": 5.796067891679084,
        "gradePct": 0.26701289372368325,
        "smoothedEle": 14.498850902917606,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.583644024117522,
        "lng": 119.60740644989681,
        "ele": 13.458731807317792,
        "distanceKm": 5.842141184388304,
        "gradePct": 0.20656632473976302,
        "smoothedEle": 14.435992748500048,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.583993929481874,
        "lng": 119.60764859444322,
        "ele": 12.933264918187016,
        "distanceKm": 5.8882143497130786,
        "gradePct": 0.1528069964753822,
        "smoothedEle": 14.386226210820633,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58434496474094,
        "lng": 119.6078887972216,
        "ele": 12.341632459093507,
        "distanceKm": 5.934288192428118,
        "gradePct": 0.10777702267672708,
        "smoothedEle": 14.365096962574643,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.584696,
        "lng": 119.608129,
        "ele": 11.75,
        "distanceKm": 5.980362000358966,
        "gradePct": 0.07270603137812089,
        "smoothedEle": 14.378100138309877,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58506929756168,
        "lng": 119.60839362621486,
        "ele": 12.567163816736121,
        "distanceKm": 6.029861645199971,
        "gradePct": 0.044058854272999784,
        "smoothedEle": 14.432351240722317,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58544586504112,
        "lng": 119.60865275080991,
        "ele": 12.711442544490748,
        "distanceKm": 6.079365221604889,
        "gradePct": 0.025672025627896743,
        "smoothedEle": 14.533407165621687,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.585822432520562,
        "lng": 119.60891187540496,
        "ele": 12.855721272245374,
        "distanceKm": 6.12886875759222,
        "gradePct": 0.035416212431497125,
        "smoothedEle": 14.71632813463148,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.586199,
        "lng": 119.609171,
        "ele": 13,
        "distanceKm": 6.178372253160768,
        "gradePct": 0.08196347037175684,
        "smoothedEle": 15.007295857508515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58668,
        "lng": 119.609511,
        "ele": 13,
        "distanceKm": 6.2420990430022005,
        "gradePct": 0.19004788927906838,
        "smoothedEle": 15.513948794711947,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5870635,
        "lng": 119.60977799999999,
        "ele": 13.999999999999991,
        "distanceKm": 6.292683282155611,
        "gradePct": 0.28900139974202016,
        "smoothedEle": 15.948194880461166,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.587447,
        "lng": 119.610045,
        "ele": 15,
        "distanceKm": 6.343267478539481,
        "gradePct": 0.39051086365794846,
        "smoothedEle": 16.387330485295607,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.587825333333335,
        "lng": 119.6103305,
        "ele": 16.04166666666667,
        "distanceKm": 6.394416593529133,
        "gradePct": 0.4919415080655092,
        "smoothedEle": 16.843089431214153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58820366666667,
        "lng": 119.610616,
        "ele": 17.08333333333334,
        "distanceKm": 6.44556566080541,
        "gradePct": 0.5864661563605935,
        "smoothedEle": 17.300610526738005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.588582,
        "lng": 119.6109015,
        "ele": 18.12499999999999,
        "distanceKm": 6.4967146803690055,
        "gradePct": 0.6720790715426226,
        "smoothedEle": 17.756417865381238,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.588960333333333,
        "lng": 119.611187,
        "ele": 19.16666666666666,
        "distanceKm": 6.547863652219117,
        "gradePct": 0.7360338289053431,
        "smoothedEle": 18.149269436559678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.589338666666666,
        "lng": 119.61147249999999,
        "ele": 20.20833333333333,
        "distanceKm": 6.599012576353968,
        "gradePct": 0.7775738769666998,
        "smoothedEle": 18.493875670851363,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.589717,
        "lng": 119.611758,
        "ele": 21.25,
        "distanceKm": 6.650161452774578,
        "gradePct": 0.7908813261573042,
        "smoothedEle": 18.795887281618526,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.59003443325152,
        "lng": 119.61201035581954,
        "ele": 22.153853221869486,
        "distanceKm": 6.693832737059596,
        "gradePct": 0.7778725115836408,
        "smoothedEle": 19.019575317367302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.590353,
        "lng": 119.612261,
        "ele": 23.25,
        "distanceKm": 6.7375036781237805,
        "gradePct": 0.7475820415299569,
        "smoothedEle": 19.215324051849297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.590778,
        "lng": 119.612578,
        "ele": 22.750000000000004,
        "distanceKm": 6.794746990493906,
        "gradePct": 0.6867586988394155,
        "smoothedEle": 19.399904005905242,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.591203,
        "lng": 119.612895,
        "ele": 22.25,
        "distanceKm": 6.851990243815632,
        "gradePct": 0.6019339303361022,
        "smoothedEle": 19.474723442815485,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.591613,
        "lng": 119.613035,
        "ele": 21.75,
        "distanceKm": 6.8997602353814855,
        "gradePct": 0.5117431626202319,
        "smoothedEle": 19.449603356862895,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5920834,
        "lng": 119.6130506,
        "ele": 21.05,
        "distanceKm": 6.952090551617885,
        "gradePct": 0.3946476985641056,
        "smoothedEle": 19.33199467203725,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5925538,
        "lng": 119.61306619999999,
        "ele": 20.35,
        "distanceKm": 7.00442086768114,
        "gradePct": 0.26076975721756174,
        "smoothedEle": 19.119454308304825,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5930242,
        "lng": 119.6130818,
        "ele": 19.65,
        "distanceKm": 7.056751183570898,
        "gradePct": 0.12849442495428817,
        "smoothedEle": 18.85161962842813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5934946,
        "lng": 119.6130974,
        "ele": 18.95,
        "distanceKm": 7.109081499287858,
        "gradePct": -0.0072136322287491336,
        "smoothedEle": 18.51726006950479,
        "gradeBand": "descent"
      },
      {
        "lat": 23.593965,
        "lng": 119.613113,
        "ele": 18.25,
        "distanceKm": 7.161411814831666,
        "gradePct": -0.14885821361528853,
        "smoothedEle": 18.109221525717206,
        "gradeBand": "descent"
      },
      {
        "lat": 23.594386714285715,
        "lng": 119.61312414285715,
        "ele": 17.571428571428577,
        "distanceKm": 7.208318113521847,
        "gradePct": -0.28077273259865837,
        "smoothedEle": 17.680640278348786,
        "gradeBand": "descent"
      },
      {
        "lat": 23.59480842857143,
        "lng": 119.61313528571428,
        "ele": 16.89285714285714,
        "distanceKm": 7.255224412123633,
        "gradePct": -0.4174945835343592,
        "smoothedEle": 17.18499129836614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.595230142857144,
        "lng": 119.61314642857143,
        "ele": 16.21428571428571,
        "distanceKm": 7.302130710637093,
        "gradePct": -0.5448814826822279,
        "smoothedEle": 16.685147437814006,
        "gradeBand": "descent"
      },
      {
        "lat": 23.595651857142858,
        "lng": 119.61315757142857,
        "ele": 15.535714285714288,
        "distanceKm": 7.34903700906219,
        "gradePct": -0.6585026857930473,
        "smoothedEle": 16.17835000680148,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596073571428573,
        "lng": 119.61316871428572,
        "ele": 14.857142857142863,
        "distanceKm": 7.395943307398924,
        "gradePct": -0.7615419724265393,
        "smoothedEle": 15.643900645157775,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596495285714287,
        "lng": 119.61317985714285,
        "ele": 14.178571428571423,
        "distanceKm": 7.4428496056472575,
        "gradePct": -0.8523845919876927,
        "smoothedEle": 15.090840084627644,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596917,
        "lng": 119.613191,
        "ele": 13.5,
        "distanceKm": 7.48975590380726,
        "gradePct": -0.9270172970286051,
        "smoothedEle": 14.543929793934337,
        "gradeBand": "descent"
      },
      {
        "lat": 23.597396,
        "lng": 119.613193,
        "ele": 13.75,
        "distanceKm": 7.543018737120014,
        "gradePct": -0.9952826163921695,
        "smoothedEle": 13.945491339069045,
        "gradeBand": "descent"
      },
      {
        "lat": 23.597876199999998,
        "lng": 119.6132052,
        "ele": 13.400000000000002,
        "distanceKm": 7.596429083855112,
        "gradePct": -1.0444742436318095,
        "smoothedEle": 13.37573025246186,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5983564,
        "lng": 119.6132174,
        "ele": 13.049999999999999,
        "distanceKm": 7.649839430484669,
        "gradePct": -1.0726269624304408,
        "smoothedEle": 12.836320812251945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5988366,
        "lng": 119.6132296,
        "ele": 12.700000000000001,
        "distanceKm": 7.703249777007895,
        "gradePct": -1.0797003277098416,
        "smoothedEle": 12.328447857237093,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5993168,
        "lng": 119.6132418,
        "ele": 12.349999999999998,
        "distanceKm": 7.7566601234255765,
        "gradePct": -1.0638325112877087,
        "smoothedEle": 11.85052948569667,
        "gradeBand": "descent"
      },
      {
        "lat": 23.599797,
        "lng": 119.613254,
        "ele": 12,
        "distanceKm": 7.810070469736924,
        "gradePct": -1.039214955007824,
        "smoothedEle": 11.403287818313581,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60022292819265,
        "lng": 119.61322398879943,
        "ele": 10.990007673255583,
        "distanceKm": 7.857530210147265,
        "gradePct": -1.0098043935510226,
        "smoothedEle": 11.03255668724104,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60064889026838,
        "lng": 119.6131945723738,
        "ele": 9.878618690061712,
        "distanceKm": 7.904989843630004,
        "gradePct": -0.9701648867401368,
        "smoothedEle": 10.686410740386906,
        "gradeBand": "descent"
      },
      {
        "lat": 23.601074940671484,
        "lng": 119.6131667061702,
        "ele": 9.30784633563381,
        "distanceKm": 7.952449566266605,
        "gradePct": -0.9228119098667825,
        "smoothedEle": 10.364848503585279,
        "gradeBand": "descent"
      },
      {
        "lat": 23.601501,
        "lng": 119.613139,
        "ele": 9,
        "distanceKm": 7.999909306272036,
        "gradePct": -0.8722230918710765,
        "smoothedEle": 10.068735039417032,
        "gradeBand": "descent"
      },
      {
        "lat": 23.601896999999997,
        "lng": 119.61307675,
        "ele": 8.875000000000002,
        "distanceKm": 8.044397050986763,
        "gradePct": -0.8285742184833361,
        "smoothedEle": 9.787916923150277,
        "gradeBand": "descent"
      },
      {
        "lat": 23.602293,
        "lng": 119.61301449999999,
        "ele": 8.75,
        "distanceKm": 8.088884792971132,
        "gradePct": -0.7901513887828617,
        "smoothedEle": 9.505452909121125,
        "gradeBand": "descent"
      },
      {
        "lat": 23.602689,
        "lng": 119.61295224999999,
        "ele": 8.624999999999998,
        "distanceKm": 8.133372532224302,
        "gradePct": -0.7553966920107829,
        "smoothedEle": 9.225642215078343,
        "gradeBand": "descent"
      },
      {
        "lat": 23.603085,
        "lng": 119.61289,
        "ele": 8.5,
        "distanceKm": 8.177860268746054,
        "gradePct": -0.7225843865859503,
        "smoothedEle": 8.95695189187166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.603503166666666,
        "lng": 119.61282666666666,
        "ele": 8.333333333333332,
        "distanceKm": 8.224804008826068,
        "gradePct": -0.6900175292251376,
        "smoothedEle": 8.685491898859912,
        "gradeBand": "descent"
      },
      {
        "lat": 23.603921333333332,
        "lng": 119.61276333333333,
        "ele": 8.166666666666666,
        "distanceKm": 8.271747746077033,
        "gradePct": -0.660605148466735,
        "smoothedEle": 8.421164672798863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6043395,
        "lng": 119.6127,
        "ele": 8.000000000000002,
        "distanceKm": 8.318691480498911,
        "gradePct": -0.6344870372483697,
        "smoothedEle": 8.163509721150884,
        "gradeBand": "descent"
      },
      {
        "lat": 23.604757666666668,
        "lng": 119.61263666666666,
        "ele": 7.83333333333333,
        "distanceKm": 8.365635212092256,
        "gradePct": -0.6077727692114364,
        "smoothedEle": 7.934579161481213,
        "gradeBand": "descent"
      },
      {
        "lat": 23.605175833333334,
        "lng": 119.61257333333333,
        "ele": 7.666666666666665,
        "distanceKm": 8.412578940855846,
        "gradePct": -0.5773539594781958,
        "smoothedEle": 7.748221192865213,
        "gradeBand": "descent"
      },
      {
        "lat": 23.605594,
        "lng": 119.61251,
        "ele": 7.5,
        "distanceKm": 8.459522666790235,
        "gradePct": -0.5463924150327601,
        "smoothedEle": 7.588755544050371,
        "gradeBand": "descent"
      },
      {
        "lat": 23.606033,
        "lng": 119.61242949999999,
        "ele": 7.375,
        "distanceKm": 8.509021605727536,
        "gradePct": -0.515812166595162,
        "smoothedEle": 7.432155022576972,
        "gradeBand": "descent"
      },
      {
        "lat": 23.606472,
        "lng": 119.612349,
        "ele": 7.25,
        "distanceKm": 8.55852054011367,
        "gradePct": -0.48428449412171604,
        "smoothedEle": 7.276820819919815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607088,
        "lng": 119.612153,
        "ele": 7,
        "distanceKm": 8.629868573096227,
        "gradePct": -0.4314338509281256,
        "smoothedEle": 7.090511509754522,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607463,
        "lng": 119.611935,
        "ele": 7,
        "distanceKm": 8.677113719978195,
        "gradePct": -0.38603724121070865,
        "smoothedEle": 7.031274578502003,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60785257142857,
        "lng": 119.61165414285715,
        "ele": 6.8214285714285685,
        "distanceKm": 8.729030742650448,
        "gradePct": -0.3276973047927592,
        "smoothedEle": 7.023205803483131,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608242142857144,
        "lng": 119.6113732857143,
        "ele": 6.642857142857144,
        "distanceKm": 8.78094771845104,
        "gradePct": -0.26108662923069215,
        "smoothedEle": 7.065236642367876,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608631714285714,
        "lng": 119.61109242857144,
        "ele": 6.464285714285713,
        "distanceKm": 8.832864647378683,
        "gradePct": -0.18756007475821795,
        "smoothedEle": 7.156591045172291,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609021285714284,
        "lng": 119.61081157142857,
        "ele": 6.285714285714287,
        "distanceKm": 8.884781529433871,
        "gradePct": -0.11300665276166823,
        "smoothedEle": 7.293538539496669,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609410857142855,
        "lng": 119.61053071428572,
        "ele": 6.107142857142856,
        "distanceKm": 8.936698364614376,
        "gradePct": -0.03803839437447074,
        "smoothedEle": 7.476096662761974,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60980042857143,
        "lng": 119.61024985714286,
        "ele": 5.9285714285714315,
        "distanceKm": 8.988615152920692,
        "gradePct": 0.040730878405754824,
        "smoothedEle": 7.700369609623703,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61019,
        "lng": 119.609969,
        "ele": 5.75,
        "distanceKm": 9.04053189435153,
        "gradePct": 0.1269600805311125,
        "smoothedEle": 7.968071972091452,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.610495,
        "lng": 119.609723,
        "ele": 5.75,
        "distanceKm": 9.08270306187938,
        "gradePct": 0.19960741941454607,
        "smoothedEle": 8.211710710827408,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61083722358935,
        "lng": 119.60951243526219,
        "ele": 6.7928106022971,
        "distanceKm": 9.12638759559297,
        "gradePct": 0.27512285765195216,
        "smoothedEle": 8.47521558634091,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.611190611794676,
        "lng": 119.6093242176311,
        "ele": 7.646405301148568,
        "distanceKm": 9.170112304457039,
        "gradePct": 0.3409729795615338,
        "smoothedEle": 8.744917994258472,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.611544,
        "lng": 119.609136,
        "ele": 8.5,
        "distanceKm": 9.213836990645214,
        "gradePct": 0.3988115760623744,
        "smoothedEle": 9.019625047376977,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.611901999999997,
        "lng": 119.6089335,
        "ele": 9.124999999999988,
        "distanceKm": 9.258673797452388,
        "gradePct": 0.45258472432419106,
        "smoothedEle": 9.310127788668588,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61226,
        "lng": 119.608731,
        "ele": 9.75,
        "distanceKm": 9.303510578328854,
        "gradePct": 0.5030350337200705,
        "smoothedEle": 9.620114016631629,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.612659333333333,
        "lng": 119.60850966666668,
        "ele": 10.416666666666675,
        "distanceKm": 9.353312557267715,
        "gradePct": 0.5558791489144056,
        "smoothedEle": 9.989924736566644,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613058666666667,
        "lng": 119.60828833333333,
        "ele": 11.083333333333325,
        "distanceKm": 9.403114505096152,
        "gradePct": 0.6097498072156345,
        "smoothedEle": 10.406752861625854,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613458,
        "lng": 119.608067,
        "ele": 11.75,
        "distanceKm": 9.45291642181243,
        "gradePct": 0.6671236536813527,
        "smoothedEle": 10.881774570812071,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613983,
        "lng": 119.60783,
        "ele": 12.5,
        "distanceKm": 9.516090632089869,
        "gradePct": 0.7431285207466756,
        "smoothedEle": 11.55768617980431,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614384384033695,
        "lng": 119.60772443858039,
        "ele": 13.027377127988036,
        "distanceKm": 9.562000104069813,
        "gradePct": 0.7904444040868484,
        "smoothedEle": 12.044323936330958,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614786589355795,
        "lng": 119.60762262572025,
        "ele": 13.101584751992023,
        "distanceKm": 9.607910559810557,
        "gradePct": 0.823773124880936,
        "smoothedEle": 12.482627828969227,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6151887946779,
        "lng": 119.60752081286013,
        "ele": 13.175792375996012,
        "distanceKm": 9.653821008358465,
        "gradePct": 0.8331115439963177,
        "smoothedEle": 12.809987868808253,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615591,
        "lng": 119.607419,
        "ele": 13.25,
        "distanceKm": 9.699731449713326,
        "gradePct": 0.8206933300092015,
        "smoothedEle": 13.034471471188189,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615977286946176,
        "lng": 119.60723153697776,
        "ele": 13.295379358997659,
        "distanceKm": 9.746739528030545,
        "gradePct": 0.7910884857748858,
        "smoothedEle": 13.188246736473813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61633664347309,
        "lng": 119.60698726848888,
        "ele": 13.647689679498836,
        "distanceKm": 9.793814389941273,
        "gradePct": 0.7495164405985044,
        "smoothedEle": 13.300660076414704,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.616696,
        "lng": 119.606743,
        "ele": 14,
        "distanceKm": 9.840889215772586,
        "gradePct": 0.6944816996806665,
        "smoothedEle": 13.370082184706444,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617046035770663,
        "lng": 119.60647405584953,
        "ele": 14.875089426659178,
        "distanceKm": 9.888488920038403,
        "gradePct": 0.6228874938741605,
        "smoothedEle": 13.398778347864656,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617396099218023,
        "lng": 119.60620515444768,
        "ele": 15.852818507746646,
        "distanceKm": 9.936088591848197,
        "gradePct": 0.5334165894833213,
        "smoothedEle": 13.388349949874538,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617746,
        "lng": 119.605936,
        "ele": 16.75,
        "distanceKm": 9.983688278653108,
        "gradePct": 0.42634060385250866,
        "smoothedEle": 13.342710914520138,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617962,
        "lng": 119.6058,
        "ele": 16.75,
        "distanceKm": 10.011416515605056,
        "gradePct": 0.35616434490179677,
        "smoothedEle": 13.28849873791466,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61842,
        "lng": 119.605688,
        "ele": 16,
        "distanceKm": 10.063606531860588,
        "gradePct": 0.22031175829342298,
        "smoothedEle": 13.161219180956252,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.618826666666667,
        "lng": 119.60564266666667,
        "ele": 14.666666666666666,
        "distanceKm": 10.109061117669308,
        "gradePct": 0.10688138541117276,
        "smoothedEle": 13.025238698229762,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.619233333333334,
        "lng": 119.60559733333334,
        "ele": 13.333333333333334,
        "distanceKm": 10.154515702021511,
        "gradePct": 0.012513902476683823,
        "smoothedEle": 12.875954153939418,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61964,
        "lng": 119.605552,
        "ele": 12,
        "distanceKm": 10.19997028491718,
        "gradePct": -0.06437744295388441,
        "smoothedEle": 12.71336554653202,
        "gradeBand": "descent"
      },
      {
        "lat": 23.620067934578184,
        "lng": 119.6055567812077,
        "ele": 11.817181154028654,
        "distanceKm": 10.247556997805289,
        "gradePct": -0.1321341655043078,
        "smoothedEle": 12.529528001936718,
        "gradeBand": "descent"
      },
      {
        "lat": 23.62049596728909,
        "lng": 119.60555489060384,
        "ele": 11.533590577014333,
        "distanceKm": 10.29515251918022,
        "gradePct": -0.19534072547185205,
        "smoothedEle": 12.325929812765114,
        "gradeBand": "descent"
      },
      {
        "lat": 23.620924,
        "lng": 119.605553,
        "ele": 11.25,
        "distanceKm": 10.3427480405526,
        "gradePct": -0.25536839061731664,
        "smoothedEle": 12.094360850749592,
        "gradeBand": "descent"
      },
      {
        "lat": 23.621299999999998,
        "lng": 119.60550966666666,
        "ele": 11.083333333333334,
        "distanceKm": 10.384789825616348,
        "gradePct": -0.3080993554422907,
        "smoothedEle": 11.856051518624305,
        "gradeBand": "descent"
      },
      {
        "lat": 23.621676,
        "lng": 119.60546633333334,
        "ele": 10.916666666666666,
        "distanceKm": 10.42683160934987,
        "gradePct": -0.36121103152578227,
        "smoothedEle": 11.584322862902622,
        "gradeBand": "descent"
      },
      {
        "lat": 23.622052,
        "lng": 119.605423,
        "ele": 10.75,
        "distanceKm": 10.468873391752666,
        "gradePct": -0.41585379876480705,
        "smoothedEle": 11.277646576071081,
        "gradeBand": "descent"
      },
      {
        "lat": 23.622474143236108,
        "lng": 119.60532734802833,
        "ele": 10.410833387468232,
        "distanceKm": 10.516814484655324,
        "gradePct": -0.47624329772038826,
        "smoothedEle": 10.894117832849819,
        "gradeBand": "descent"
      },
      {
        "lat": 23.622891114588885,
        "lng": 119.60520587842265,
        "ele": 10.178666709974587,
        "distanceKm": 10.564802703445238,
        "gradePct": -0.5322108717954535,
        "smoothedEle": 10.496586393386785,
        "gradeBand": "descent"
      },
      {
        "lat": 23.623308085941666,
        "lng": 119.60508440881699,
        "ele": 9.946500032480943,
        "distanceKm": 10.61279091207776,
        "gradePct": -0.5803613831495064,
        "smoothedEle": 10.111182178476437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.623725057294443,
        "lng": 119.60496293921133,
        "ele": 9.71433335498729,
        "distanceKm": 10.660779110552356,
        "gradePct": -0.6137896933153705,
        "smoothedEle": 9.784601810662362,
        "gradeBand": "descent"
      },
      {
        "lat": 23.624142028647224,
        "lng": 119.60484146960566,
        "ele": 9.482166677493645,
        "distanceKm": 10.708767298870027,
        "gradePct": -0.6325071137802084,
        "smoothedEle": 9.51684525066182,
        "gradeBand": "descent"
      },
      {
        "lat": 23.624559,
        "lng": 119.60472,
        "ele": 9.25,
        "distanceKm": 10.756755477029124,
        "gradePct": -0.6429442983267197,
        "smoothedEle": 9.275458402350848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.625056,
        "lng": 119.604533,
        "ele": 9,
        "distanceKm": 10.815210898643175,
        "gradePct": -0.6410092536740073,
        "smoothedEle": 9.023292469058202,
        "gradeBand": "descent"
      },
      {
        "lat": 23.625421,
        "lng": 119.604372,
        "ele": 8.75,
        "distanceKm": 10.85898604725671,
        "gradePct": -0.6273482632799098,
        "smoothedEle": 8.865576141643599,
        "gradeBand": "descent"
      },
      {
        "lat": 23.625777,
        "lng": 119.604191,
        "ele": 8.75,
        "distanceKm": 10.902655477520709,
        "gradePct": -0.6011461801992738,
        "smoothedEle": 8.734849551834586,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626116999999997,
        "lng": 119.6039025,
        "ele": 8.75,
        "distanceKm": 10.950542251917078,
        "gradePct": -0.5556106650773395,
        "smoothedEle": 8.633310842491198,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626457,
        "lng": 119.603614,
        "ele": 8.75,
        "distanceKm": 10.99842897948982,
        "gradePct": -0.4975401358388737,
        "smoothedEle": 8.553501194979486,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626769999999997,
        "lng": 119.6033555,
        "ele": 8.000000000000016,
        "distanceKm": 11.042073330319347,
        "gradePct": -0.4366610086743378,
        "smoothedEle": 8.501570072636468,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627083,
        "lng": 119.603097,
        "ele": 7.25,
        "distanceKm": 11.08571764317769,
        "gradePct": -0.37604582325990066,
        "smoothedEle": 8.44838464053381,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627421,
        "lng": 119.60285866666668,
        "ele": 7.083333333333333,
        "distanceKm": 11.130462111463377,
        "gradePct": -0.3193578098221234,
        "smoothedEle": 8.394133003365763,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627759,
        "lng": 119.60262033333333,
        "ele": 6.916666666666667,
        "distanceKm": 11.175206545749598,
        "gradePct": -0.27091710130790575,
        "smoothedEle": 8.349516486282834,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628097,
        "lng": 119.602382,
        "ele": 6.75,
        "distanceKm": 11.219950946033721,
        "gradePct": -0.2264344067640085,
        "smoothedEle": 8.328418000556715,
        "gradeBand": "descent"
      },
      {
        "lat": 23.62851,
        "lng": 119.60214433333334,
        "ele": 7.166666666666667,
        "distanceKm": 11.271866131059712,
        "gradePct": -0.17480497830308686,
        "smoothedEle": 8.336248929643896,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628923,
        "lng": 119.60190666666666,
        "ele": 7.583333333333333,
        "distanceKm": 11.323781280478784,
        "gradePct": -0.12229741314907301,
        "smoothedEle": 8.380927400828224,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629336,
        "lng": 119.601669,
        "ele": 8,
        "distanceKm": 11.375696394288388,
        "gradePct": -0.0702701869187333,
        "smoothedEle": 8.464201960381258,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629661,
        "lng": 119.601472,
        "ele": 8.75,
        "distanceKm": 11.41703331326073,
        "gradePct": -0.0313420335775703,
        "smoothedEle": 8.547652743269937,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63005,
        "lng": 119.601253,
        "ele": 9.000000000000005,
        "distanceKm": 11.465702790988004,
        "gradePct": 0.010577321058268297,
        "smoothedEle": 8.660930378164968,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.630439,
        "lng": 119.601034,
        "ele": 9.25,
        "distanceKm": 11.514372238337053,
        "gradePct": 0.04790625942139073,
        "smoothedEle": 8.774062079879462,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6307565,
        "lng": 119.6007945,
        "ele": 9,
        "distanceKm": 11.55728696355589,
        "gradePct": 0.0750464049126947,
        "smoothedEle": 8.858262599048988,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631074,
        "lng": 119.600555,
        "ele": 8.75,
        "distanceKm": 11.600201655144952,
        "gradePct": 0.10364650481853382,
        "smoothedEle": 8.949055633735812,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63158,
        "lng": 119.600139,
        "ele": 8.75,
        "distanceKm": 11.670640490003823,
        "gradePct": 0.14448965465108224,
        "smoothedEle": 9.076517761658684,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631868,
        "lng": 119.599856,
        "ele": 9.25,
        "distanceKm": 11.713729671694887,
        "gradePct": 0.16487589029540822,
        "smoothedEle": 9.1557309915829,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632225,
        "lng": 119.599254,
        "ele": 9.75,
        "distanceKm": 11.786782243128497,
        "gradePct": 0.185255672180978,
        "smoothedEle": 9.275364180949849,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632379,
        "lng": 119.598933,
        "ele": 10.25,
        "distanceKm": 11.823694824572534,
        "gradePct": 0.18692523431971644,
        "smoothedEle": 9.315479167984956,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63262,
        "lng": 119.598308,
        "ele": 10.75,
        "distanceKm": 11.892773216178568,
        "gradePct": 0.17207118541179794,
        "smoothedEle": 9.359032497338958,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632758,
        "lng": 119.597921,
        "ele": 11,
        "distanceKm": 11.935077850790925,
        "gradePct": 0.15150118965869874,
        "smoothedEle": 9.347157139659572,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632869,
        "lng": 119.597641,
        "ele": 11.25,
        "distanceKm": 11.966157251115796,
        "gradePct": 0.13325175460987565,
        "smoothedEle": 9.328245539778813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633042,
        "lng": 119.59744,
        "ele": 11,
        "distanceKm": 11.994251892293297,
        "gradePct": 0.11613698475996444,
        "smoothedEle": 9.307977436507302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633417,
        "lng": 119.597254,
        "ele": 10,
        "distanceKm": 12.04005309669581,
        "gradePct": 0.08789753752125443,
        "smoothedEle": 9.263936705663712,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6337565,
        "lng": 119.59722300000001,
        "ele": 9.5,
        "distanceKm": 12.077935680526942,
        "gradePct": 0.06637090040630368,
        "smoothedEle": 9.233802832161675,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634096,
        "lng": 119.597192,
        "ele": 9,
        "distanceKm": 12.115818263675616,
        "gradePct": 0.04672095969299477,
        "smoothedEle": 9.210919362920537,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63442,
        "lng": 119.597206,
        "ele": 8.75,
        "distanceKm": 12.151873686249967,
        "gradePct": 0.029048735642256674,
        "smoothedEle": 9.18780209421114,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634879545454545,
        "lng": 119.59720781818181,
        "ele": 8.681818181818182,
        "distanceKm": 12.202973215603764,
        "gradePct": 0.0021236571804781335,
        "smoothedEle": 9.146575088325125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63533909090909,
        "lng": 119.59720963636364,
        "ele": 8.613636363636365,
        "distanceKm": 12.254072744954815,
        "gradePct": -0.02865103508872018,
        "smoothedEle": 9.07854290218754,
        "gradeBand": "descent"
      },
      {
        "lat": 23.635798636363635,
        "lng": 119.59721145454546,
        "ele": 8.545454545454545,
        "distanceKm": 12.3051722743039,
        "gradePct": -0.06314558120782117,
        "smoothedEle": 8.979621760436725,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63625818181818,
        "lng": 119.59721327272727,
        "ele": 8.477272727272727,
        "distanceKm": 12.356271803650628,
        "gradePct": -0.09746841990796788,
        "smoothedEle": 8.848676572422548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63671772727273,
        "lng": 119.59721509090909,
        "ele": 8.40909090909091,
        "distanceKm": 12.407371332995,
        "gradePct": -0.13351445831801811,
        "smoothedEle": 8.687362360200051,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63717727272727,
        "lng": 119.59721690909092,
        "ele": 8.34090909090909,
        "distanceKm": 12.458470862336625,
        "gradePct": -0.1636598171733276,
        "smoothedEle": 8.514623568258017,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637636818181818,
        "lng": 119.59721872727273,
        "ele": 8.272727272727273,
        "distanceKm": 12.509570391676284,
        "gradePct": -0.18327582203839368,
        "smoothedEle": 8.37686862832912,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638096363636365,
        "lng": 119.59722054545455,
        "ele": 8.204545454545455,
        "distanceKm": 12.560669921013586,
        "gradePct": -0.18123871622805368,
        "smoothedEle": 8.34134337790703,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63855590909091,
        "lng": 119.59722236363636,
        "ele": 8.136363636363637,
        "distanceKm": 12.611769450348532,
        "gradePct": -0.16307311226197535,
        "smoothedEle": 8.397999540193739,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639015454545454,
        "lng": 119.59722418181819,
        "ele": 8.068181818181818,
        "distanceKm": 12.662868979680733,
        "gradePct": -0.12194121445495618,
        "smoothedEle": 8.569225039508124,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639475,
        "lng": 119.597226,
        "ele": 8,
        "distanceKm": 12.713968509010964,
        "gradePct": -0.06741393119656501,
        "smoothedEle": 8.794866670357292,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639872500000003,
        "lng": 119.59721350000001,
        "ele": 7.875,
        "distanceKm": 12.758186890063318,
        "gradePct": -0.007307352187647354,
        "smoothedEle": 9.034041763951787,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64027,
        "lng": 119.597201,
        "ele": 7.75,
        "distanceKm": 12.802405271003973,
        "gradePct": 0.06740257315914952,
        "smoothedEle": 9.321991135952691,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.640772000000002,
        "lng": 119.597252,
        "ele": 7.624999999999998,
        "distanceKm": 12.85846642556664,
        "gradePct": 0.18163532237237698,
        "smoothedEle": 9.749925063613853,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641274,
        "lng": 119.597303,
        "ele": 7.5,
        "distanceKm": 12.914527578282588,
        "gradePct": 0.315904464988791,
        "smoothedEle": 10.242693441472182,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641596,
        "lng": 119.597368,
        "ele": 7.75,
        "distanceKm": 12.950939438574359,
        "gradePct": 0.40436062688297586,
        "smoothedEle": 10.561886213925922,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642039666666665,
        "lng": 119.59743166666667,
        "ele": 8.750000000000012,
        "distanceKm": 13.000697429244266,
        "gradePct": 0.5189801535516217,
        "smoothedEle": 10.995689272113669,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642483333333335,
        "lng": 119.59749533333334,
        "ele": 9.749999999999988,
        "distanceKm": 13.050455417049504,
        "gradePct": 0.615800120175032,
        "smoothedEle": 11.427445273372717,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642927,
        "lng": 119.597559,
        "ele": 10.75,
        "distanceKm": 13.100213401988873,
        "gradePct": 0.6943934682290476,
        "smoothedEle": 11.857154212420514,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643286,
        "lng": 119.597598,
        "ele": 12.5,
        "distanceKm": 13.140329618168535,
        "gradePct": 0.7417916556414067,
        "smoothedEle": 12.202657897430678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643847,
        "lng": 119.597698,
        "ele": 13.25,
        "distanceKm": 13.203536233573223,
        "gradePct": 0.799739971827378,
        "smoothedEle": 12.74750043702536,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643989,
        "lng": 119.597348,
        "ele": 14.25,
        "distanceKm": 13.242527646676926,
        "gradePct": 0.8263867170828871,
        "smoothedEle": 13.081275256024387,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644160666666668,
        "lng": 119.59694333333333,
        "ele": 15.250000000000014,
        "distanceKm": 13.287952640302233,
        "gradePct": 0.8513626288234984,
        "smoothedEle": 13.484688985801219,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644332333333335,
        "lng": 119.59653866666667,
        "ele": 16.249999999999986,
        "distanceKm": 13.333377584862573,
        "gradePct": 0.8706830914670718,
        "smoothedEle": 13.911828836491214,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644504,
        "lng": 119.596134,
        "ele": 17.25,
        "distanceKm": 13.37880248036025,
        "gradePct": 0.8827391011530288,
        "smoothedEle": 14.342371170235525,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6447226,
        "lng": 119.59575020000001,
        "ele": 17.15,
        "distanceKm": 13.424837061446429,
        "gradePct": 0.8882973794356314,
        "smoothedEle": 14.774555081584722,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6449412,
        "lng": 119.5953664,
        "ele": 17.049999999999997,
        "distanceKm": 13.470871587076665,
        "gradePct": 0.8906973531558035,
        "smoothedEle": 15.18914661606245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6451598,
        "lng": 119.59498260000001,
        "ele": 16.950000000000003,
        "distanceKm": 13.516906057247834,
        "gradePct": 0.8830646612404585,
        "smoothedEle": 15.551656778803089,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6453784,
        "lng": 119.5945988,
        "ele": 16.85,
        "distanceKm": 13.562940471962355,
        "gradePct": 0.8670065587294649,
        "smoothedEle": 15.870298745592374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645597,
        "lng": 119.594215,
        "ele": 16.75,
        "distanceKm": 13.608974831217102,
        "gradePct": 0.8412334192817252,
        "smoothedEle": 16.13877972371932,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645778017305027,
        "lng": 119.59383841524284,
        "ele": 16.72441348783611,
        "distanceKm": 13.652293860181555,
        "gradePct": 0.8020144045381397,
        "smoothedEle": 16.315861973007976,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64595350865251,
        "lng": 119.59345870762142,
        "ele": 16.61220674391806,
        "distanceKm": 13.69561452842558,
        "gradePct": 0.7537606877182267,
        "smoothedEle": 16.44801858739266,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646129,
        "lng": 119.593079,
        "ele": 16.5,
        "distanceKm": 13.738935150361552,
        "gradePct": 0.6983236745647823,
        "smoothedEle": 16.542141093559838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646336499999997,
        "lng": 119.59274450000001,
        "ele": 16.875,
        "distanceKm": 13.780084318042999,
        "gradePct": 0.6348418556031831,
        "smoothedEle": 16.58902067052859,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646544,
        "lng": 119.59241,
        "ele": 17.25,
        "distanceKm": 13.821233440990223,
        "gradePct": 0.5565340150269186,
        "smoothedEle": 16.58030509475713,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646805,
        "lng": 119.59208575,
        "ele": 17.062499999999996,
        "distanceKm": 13.865200475241451,
        "gradePct": 0.4584392192449627,
        "smoothedEle": 16.505645912579645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647066,
        "lng": 119.5917615,
        "ele": 16.875,
        "distanceKm": 13.909167460005117,
        "gradePct": 0.3547284122784749,
        "smoothedEle": 16.40108709048175,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647326999999997,
        "lng": 119.59143725000001,
        "ele": 16.687500000000004,
        "distanceKm": 13.953134395282095,
        "gradePct": 0.25783464546638835,
        "smoothedEle": 16.318576922993657,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647588,
        "lng": 119.591113,
        "ele": 16.5,
        "distanceKm": 13.997101281073263,
        "gradePct": 0.17230259433648065,
        "smoothedEle": 16.25721199519059,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647857201764072,
        "lng": 119.59076741712303,
        "ele": 16.48219988853695,
        "distanceKm": 14.043308464048886,
        "gradePct": 0.09617547257124208,
        "smoothedEle": 16.21528686879247,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.648126651323057,
        "lng": 119.59042206284228,
        "ele": 16.299149916402715,
        "distanceKm": 14.089515717862366,
        "gradePct": 0.034301368471077606,
        "smoothedEle": 16.196797383830383,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64839610088204,
        "lng": 119.59007670856153,
        "ele": 16.116099944268473,
        "distanceKm": 14.13572291652801,
        "gradePct": -0.0015349509774104319,
        "smoothedEle": 16.240447473136953,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64866555044102,
        "lng": 119.58973135428076,
        "ele": 15.93304997213424,
        "distanceKm": 14.181930060046634,
        "gradePct": -0.014126221341933842,
        "smoothedEle": 16.335640825242947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.648935,
        "lng": 119.589386,
        "ele": 15.75,
        "distanceKm": 14.228137148415488,
        "gradePct": -0.01429754065892581,
        "smoothedEle": 16.447192623560063,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649169,
        "lng": 119.589142,
        "ele": 15.75,
        "distanceKm": 14.26411905528958,
        "gradePct": -0.003252936112133398,
        "smoothedEle": 16.554567413959067,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64947,
        "lng": 119.588939,
        "ele": 15.25,
        "distanceKm": 14.303460591341869,
        "gradePct": 0.015346773572983351,
        "smoothedEle": 16.66080333490244,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649762,
        "lng": 119.588781,
        "ele": 14.75,
        "distanceKm": 14.339699085383343,
        "gradePct": 0.03565829394643387,
        "smoothedEle": 16.727240573978477,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650165166886605,
        "lng": 119.58865414214058,
        "ele": 14.855166886606984,
        "distanceKm": 14.386354239138974,
        "gradePct": 0.0679456546005312,
        "smoothedEle": 16.795067969498778,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650576375164956,
        "lng": 119.58856085660544,
        "ele": 15.266375164955246,
        "distanceKm": 14.433055383853965,
        "gradePct": 0.09787342336544072,
        "smoothedEle": 16.845625142346965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650987583443303,
        "lng": 119.58846757107028,
        "ele": 15.677583443303492,
        "distanceKm": 14.479756522492742,
        "gradePct": 0.11750143971852936,
        "smoothedEle": 16.868927409555234,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.651398791721654,
        "lng": 119.58837428553514,
        "ele": 16.088791721651752,
        "distanceKm": 14.52645765505541,
        "gradePct": 0.12515440181346663,
        "smoothedEle": 16.856348108915824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65181,
        "lng": 119.588281,
        "ele": 16.5,
        "distanceKm": 14.573158781541407,
        "gradePct": 0.12634426472391452,
        "smoothedEle": 16.83506381245345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652151500000002,
        "lng": 119.588252,
        "ele": 17.62500000000003,
        "distanceKm": 14.611246609924903,
        "gradePct": 0.12126883097083335,
        "smoothedEle": 16.823669841776564,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652493,
        "lng": 119.588223,
        "ele": 18.75,
        "distanceKm": 14.649334437710026,
        "gradePct": 0.10841270232406046,
        "smoothedEle": 16.810552673334165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653017,
        "lng": 119.588101,
        "ele": 19,
        "distanceKm": 14.708910966350519,
        "gradePct": 0.07159881959168217,
        "smoothedEle": 16.758771436335408,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653509,
        "lng": 119.587875,
        "ele": 19.75,
        "distanceKm": 14.768264427904612,
        "gradePct": 0.015273526477378141,
        "smoothedEle": 16.642129003715237,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653881666666667,
        "lng": 119.58755166666667,
        "ele": 19.083333333333325,
        "distanceKm": 14.821195694961677,
        "gradePct": -0.04740004646154503,
        "smoothedEle": 16.45631745923103,
        "gradeBand": "descent"
      },
      {
        "lat": 23.654254333333334,
        "lng": 119.58722833333333,
        "ele": 18.416666666666675,
        "distanceKm": 14.874126903645685,
        "gradePct": -0.10839895442858562,
        "smoothedEle": 16.235297062161727,
        "gradeBand": "descent"
      },
      {
        "lat": 23.654627,
        "lng": 119.586905,
        "ele": 17.75,
        "distanceKm": 14.92705805395407,
        "gradePct": -0.17650661316357058,
        "smoothedEle": 15.956599558064585,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6549335,
        "lng": 119.58664350000001,
        "ele": 16.875,
        "distanceKm": 14.9703122575354,
        "gradePct": -0.2378233417007028,
        "smoothedEle": 15.675098336599026,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65524,
        "lng": 119.586382,
        "ele": 16,
        "distanceKm": 15.013566422687957,
        "gradePct": -0.30387510974563414,
        "smoothedEle": 15.340444910399825,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655537,
        "lng": 119.586138,
        "ele": 16,
        "distanceKm": 15.054897552008354,
        "gradePct": -0.37406197188991896,
        "smoothedEle": 14.973076609273516,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65576,
        "lng": 119.585888,
        "ele": 16,
        "distanceKm": 15.090439465896125,
        "gradePct": -0.43533898257795517,
        "smoothedEle": 14.653199384283578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655966,
        "lng": 119.585449,
        "ele": 15.75,
        "distanceKm": 15.140678211670606,
        "gradePct": -0.531447081134224,
        "smoothedEle": 14.156298408401106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656043,
        "lng": 119.584898,
        "ele": 14.75,
        "distanceKm": 15.197447747979414,
        "gradePct": -0.6370188240510043,
        "smoothedEle": 13.583640629499074,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655927,
        "lng": 119.584424,
        "ele": 13.5,
        "distanceKm": 15.24741875412408,
        "gradePct": -0.715965024450103,
        "smoothedEle": 13.103270154293675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655845,
        "lng": 119.583942,
        "ele": 11.75,
        "distanceKm": 15.297350773594944,
        "gradePct": -0.7841189108166375,
        "smoothedEle": 12.619428848980252,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656005,
        "lng": 119.583253,
        "ele": 10.25,
        "distanceKm": 15.369746605043336,
        "gradePct": -0.8511408332286979,
        "smoothedEle": 11.997883340548855,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656195,
        "lng": 119.582712,
        "ele": 9.25,
        "distanceKm": 15.42875964992041,
        "gradePct": -0.8835297924117188,
        "smoothedEle": 11.527876496766945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656437,
        "lng": 119.5824,
        "ele": 8.5,
        "distanceKm": 15.47040001772633,
        "gradePct": -0.8872894669579421,
        "smoothedEle": 11.23797200942847,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656903,
        "lng": 119.582234,
        "ele": 7.25,
        "distanceKm": 15.524905496681736,
        "gradePct": -0.8557603483446631,
        "smoothedEle": 10.960856753740963,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657438,
        "lng": 119.582277,
        "ele": 7.5,
        "distanceKm": 15.584555857653832,
        "gradePct": -0.7958962702577341,
        "smoothedEle": 10.726670507175543,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657780466758748,
        "lng": 119.58258263454496,
        "ele": 8.180903017577341,
        "distanceKm": 15.633740659069085,
        "gradePct": -0.7457205676601462,
        "smoothedEle": 10.496313458640156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.658095,
        "lng": 119.582926,
        "ele": 9,
        "distanceKm": 15.683200166892588,
        "gradePct": -0.7049390501409508,
        "smoothedEle": 10.202666618572042,
        "gradeBand": "descent"
      },
      {
        "lat": 23.658558,
        "lng": 119.583213,
        "ele": 9.75,
        "distanceKm": 15.742402997385838,
        "gradePct": -0.6516772066020252,
        "smoothedEle": 9.893100509820709,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659217,
        "lng": 119.583213,
        "ele": 10.5,
        "distanceKm": 15.815680555260004,
        "gradePct": -0.5609244477379924,
        "smoothedEle": 9.657438523806368,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659593649739982,
        "lng": 119.58310234001223,
        "ele": 10.040723462832878,
        "distanceKm": 15.859052140747124,
        "gradePct": -0.5004869222884103,
        "smoothedEle": 9.587264737230537,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65996532486999,
        "lng": 119.58297217000612,
        "ele": 10.145361731416436,
        "distanceKm": 15.90245496337624,
        "gradePct": -0.4381233651242265,
        "smoothedEle": 9.546762209526118,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660337,
        "lng": 119.582842,
        "ele": 10.25,
        "distanceKm": 15.945857774495703,
        "gradePct": -0.3732227752030788,
        "smoothedEle": 9.54272373371403,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660693,
        "lng": 119.582784,
        "ele": 11,
        "distanceKm": 15.98588154903154,
        "gradePct": -0.3192483735204061,
        "smoothedEle": 9.56301936653746,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661049,
        "lng": 119.582726,
        "ele": 11.75,
        "distanceKm": 16.02590532119407,
        "gradePct": -0.26771690060884445,
        "smoothedEle": 9.618346957606274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661385,
        "lng": 119.582586,
        "ele": 12.25,
        "distanceKm": 16.065895243849642,
        "gradePct": -0.23042009220645204,
        "smoothedEle": 9.64783128101585,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661758,
        "lng": 119.582232,
        "ele": 11,
        "distanceKm": 16.12085087700914,
        "gradePct": -0.1880396895682516,
        "smoothedEle": 9.616484313228826,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662007,
        "lng": 119.58171,
        "ele": 8.75,
        "distanceKm": 16.180792687910213,
        "gradePct": -0.14550525291789107,
        "smoothedEle": 9.489433836202986,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662157,
        "lng": 119.581348,
        "ele": 9.25,
        "distanceKm": 16.22125854169925,
        "gradePct": -0.12376851809113633,
        "smoothedEle": 9.384820316703589,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662229915979946,
        "lng": 119.58090659539769,
        "ele": 9.25,
        "distanceKm": 16.26693941290403,
        "gradePct": -0.1132826478152225,
        "smoothedEle": 9.247777703089248,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662266,
        "lng": 119.580459,
        "ele": 9.25,
        "distanceKm": 16.312701721729063,
        "gradePct": -0.11635453803275446,
        "smoothedEle": 9.085245817559542,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66232,
        "lng": 119.579822,
        "ele": 9.25,
        "distanceKm": 16.377855263453313,
        "gradePct": -0.1379315852744558,
        "smoothedEle": 8.880060164068837,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662401333333335,
        "lng": 119.57941966666667,
        "ele": 9.16666666666667,
        "distanceKm": 16.41981768002709,
        "gradePct": -0.1553779611829043,
        "smoothedEle": 8.76825686513798,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662482666666666,
        "lng": 119.57901733333333,
        "ele": 9.08333333333333,
        "distanceKm": 16.461780071713108,
        "gradePct": -0.1773985766878937,
        "smoothedEle": 8.663804878818286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662564,
        "lng": 119.578615,
        "ele": 9,
        "distanceKm": 16.503742438508624,
        "gradePct": -0.20525888551400515,
        "smoothedEle": 8.561415265134105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662667,
        "lng": 119.577997,
        "ele": 7.75,
        "distanceKm": 16.567717009883125,
        "gradePct": -0.25314394067689217,
        "smoothedEle": 8.381072433181878,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662724,
        "lng": 119.577443,
        "ele": 6.25,
        "distanceKm": 16.62449470716697,
        "gradePct": -0.2643397646067907,
        "smoothedEle": 8.287062160639188,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662685,
        "lng": 119.576887,
        "ele": 6.5,
        "distanceKm": 16.681287032193037,
        "gradePct": -0.24544663970702277,
        "smoothedEle": 8.260922644238146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662646,
        "lng": 119.576331,
        "ele": 6.75,
        "distanceKm": 16.73807937405969,
        "gradePct": -0.22719955168382422,
        "smoothedEle": 8.198360061203145,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662669,
        "lng": 119.575691,
        "ele": 6.75,
        "distanceKm": 16.803311149452963,
        "gradePct": -0.2060161619483285,
        "smoothedEle": 8.088517071064382,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662696,
        "lng": 119.57526266666667,
        "ele": 7.083333333333343,
        "distanceKm": 16.847038487058935,
        "gradePct": -0.18427774741713634,
        "smoothedEle": 8.055721567859901,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662723,
        "lng": 119.57483433333333,
        "ele": 7.416666666666657,
        "distanceKm": 16.890765815679504,
        "gradePct": -0.15823015444657038,
        "smoothedEle": 8.054510936080476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66275,
        "lng": 119.574406,
        "ele": 7.75,
        "distanceKm": 16.934493135311772,
        "gradePct": -0.1298442783556407,
        "smoothedEle": 8.08250560952121,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662812666666667,
        "lng": 119.57386,
        "ele": 8.5,
        "distanceKm": 16.990536046069842,
        "gradePct": -0.08792683521102056,
        "smoothedEle": 8.154005139418153,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662875333333332,
        "lng": 119.573314,
        "ele": 9.25,
        "distanceKm": 17.046578930383333,
        "gradePct": -0.0336364479519105,
        "smoothedEle": 8.272477948949566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662938,
        "lng": 119.572768,
        "ele": 10,
        "distanceKm": 17.10262178825228,
        "gradePct": 0.03345411416158157,
        "smoothedEle": 8.49054904818489,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662934,
        "lng": 119.572202,
        "ele": 9.25,
        "distanceKm": 17.16026837789757,
        "gradePct": 0.11163560240785876,
        "smoothedEle": 8.828774806057925,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662872,
        "lng": 119.571803,
        "ele": 8,
        "distanceKm": 17.201485620190184,
        "gradePct": 0.16888345136071797,
        "smoothedEle": 9.0830890869843,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662717,
        "lng": 119.571163,
        "ele": 7.5,
        "distanceKm": 17.268907339899076,
        "gradePct": 0.26979667367988824,
        "smoothedEle": 9.495432594319034,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662561500000002,
        "lng": 119.57059699999999,
        "ele": 8.5,
        "distanceKm": 17.329089725407922,
        "gradePct": 0.3534210412496961,
        "smoothedEle": 9.836288345346642,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662406,
        "lng": 119.570031,
        "ele": 9.5,
        "distanceKm": 17.389272176579087,
        "gradePct": 0.4200779797234347,
        "smoothedEle": 10.154942187485917,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662534,
        "lng": 119.569727,
        "ele": 10,
        "distanceKm": 17.423348274437643,
        "gradePct": 0.452810257039555,
        "smoothedEle": 10.339421841774111,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662326,
        "lng": 119.569244,
        "ele": 10.5,
        "distanceKm": 17.477706054360738,
        "gradePct": 0.49800403923463643,
        "smoothedEle": 10.627656835751228,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662118,
        "lng": 119.568761,
        "ele": 11,
        "distanceKm": 17.532063905098518,
        "gradePct": 0.5317310943828015,
        "smoothedEle": 10.900449136016771,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6619355,
        "lng": 119.56837325,
        "ele": 11.5,
        "distanceKm": 17.576463859425946,
        "gradePct": 0.5514122646408474,
        "smoothedEle": 11.145825977984046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661752999999997,
        "lng": 119.56798549999999,
        "ele": 12,
        "distanceKm": 17.620863862777064,
        "gradePct": 0.55964512624486,
        "smoothedEle": 11.395805112940238,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6615705,
        "lng": 119.56759775,
        "ele": 12.5,
        "distanceKm": 17.665263915150064,
        "gradePct": 0.5667014031188163,
        "smoothedEle": 11.693104758693494,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661388,
        "lng": 119.56721,
        "ele": 13,
        "distanceKm": 17.70966401654754,
        "gradePct": 0.580502477200407,
        "smoothedEle": 12.035619607393556,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661122,
        "lng": 119.566705,
        "ele": 12.62499999999999,
        "distanceKm": 17.768995268157866,
        "gradePct": 0.6062476839206589,
        "smoothedEle": 12.527169014332795,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660856,
        "lng": 119.5662,
        "ele": 12.25,
        "distanceKm": 17.828326610464888,
        "gradePct": 0.6353887675477389,
        "smoothedEle": 13.008910119165321,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66065125,
        "lng": 119.56582399999999,
        "ele": 12.624999999999993,
        "distanceKm": 17.87287808318283,
        "gradePct": 0.6571386180509211,
        "smoothedEle": 13.353831886594989,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6604465,
        "lng": 119.56544799999999,
        "ele": 13.000000000000016,
        "distanceKm": 17.91742960744064,
        "gradePct": 0.6748289458909539,
        "smoothedEle": 13.681524356595428,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660241749999997,
        "lng": 119.565072,
        "ele": 13.375000000000007,
        "distanceKm": 17.961981183236475,
        "gradePct": 0.6901387193660671,
        "smoothedEle": 13.994968474374193,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660037,
        "lng": 119.564696,
        "ele": 13.75,
        "distanceKm": 18.00653281057222,
        "gradePct": 0.70221383403659,
        "smoothedEle": 14.283391717131236,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65982,
        "lng": 119.564196,
        "ele": 14.874999999999964,
        "distanceKm": 18.06288437925753,
        "gradePct": 0.7061543979476369,
        "smoothedEle": 14.601550819369084,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659603,
        "lng": 119.563696,
        "ele": 16,
        "distanceKm": 18.119236024306392,
        "gradePct": 0.6965244120465585,
        "smoothedEle": 14.86926218168578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659632,
        "lng": 119.563228,
        "ele": 16.25,
        "distanceKm": 18.16701014632253,
        "gradePct": 0.6698468507790277,
        "smoothedEle": 15.05580993015429,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659788205393355,
        "lng": 119.56275561902875,
        "ele": 16,
        "distanceKm": 18.218160823077824,
        "gradePct": 0.625221261016334,
        "smoothedEle": 15.232120520670415,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659954042616917,
        "lng": 119.56228703846249,
        "ele": 16,
        "distanceKm": 18.269323738407408,
        "gradePct": 0.5821595350847012,
        "smoothedEle": 15.440633705447606,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66011992077463,
        "lng": 119.56181847483627,
        "ele": 16.202049213830264,
        "distanceKm": 18.32048662868279,
        "gradePct": 0.5442218000843884,
        "smoothedEle": 15.666362351701737,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66028584781356,
        "lng": 119.56134993119491,
        "ele": 16.779492711866126,
        "distanceKm": 18.371649523778657,
        "gradePct": 0.506879767273843,
        "smoothedEle": 15.878719098426847,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660451345910307,
        "lng": 119.56088120605162,
        "ele": 17.22208037808824,
        "distanceKm": 18.422812429671286,
        "gradePct": 0.46509783392500137,
        "smoothedEle": 16.04488455401476,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66061717653658,
        "lng": 119.56041262042875,
        "ele": 17.03190764153806,
        "distanceKm": 18.47397533525274,
        "gradePct": 0.42066704043669956,
        "smoothedEle": 16.175952741822613,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660783104595527,
        "lng": 119.5599440748973,
        "ele": 16.779620326286835,
        "distanceKm": 18.525138281549136,
        "gradePct": 0.37681077657011,
        "smoothedEle": 16.272491476801733,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660949052297763,
        "lng": 119.55947553744865,
        "ele": 16.514810163143416,
        "distanceKm": 18.57630119127673,
        "gradePct": 0.32745232161058374,
        "smoothedEle": 16.302552057746777,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661115,
        "lng": 119.559007,
        "ele": 16.25,
        "distanceKm": 18.627464044521897,
        "gradePct": 0.26736062230011054,
        "smoothedEle": 16.2381939557505,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661188,
        "lng": 119.558593,
        "ele": 16,
        "distanceKm": 18.670403116758454,
        "gradePct": 0.20698761135135085,
        "smoothedEle": 16.102443171786575,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661081,
        "lng": 119.558167,
        "ele": 16.5,
        "distanceKm": 18.715391927448778,
        "gradePct": 0.13212485560752327,
        "smoothedEle": 15.883200729022109,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660891,
        "lng": 119.557892,
        "ele": 17,
        "distanceKm": 18.750474768953517,
        "gradePct": 0.05891115738817164,
        "smoothedEle": 15.658370987710208,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660580272047074,
        "lng": 119.55755141562454,
        "ele": 16.861775821651797,
        "distanceKm": 18.799434359253823,
        "gradePct": -0.05367151390363496,
        "smoothedEle": 15.305123002964288,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660269929783514,
        "lng": 119.55721041468611,
        "ele": 16.532830086450975,
        "distanceKm": 18.84839383821887,
        "gradePct": -0.17219152576567823,
        "smoothedEle": 14.92123640550493,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65995989098388,
        "lng": 119.556869086841,
        "ele": 16.069014739037517,
        "distanceKm": 18.897353233076466,
        "gradePct": -0.29287566546326643,
        "smoothedEle": 14.49782055966539,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65964941190113,
        "lng": 119.5565282348045,
        "ele": 15.82795955056657,
        "distanceKm": 18.946312798868824,
        "gradePct": -0.4131344633045757,
        "smoothedEle": 14.039415049832812,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65933893281838,
        "lng": 119.556187382768,
        "ele": 15.586904362095641,
        "distanceKm": 18.99527242310177,
        "gradePct": -0.5287594574388595,
        "smoothedEle": 13.572340668118054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65902845373563,
        "lng": 119.5558465307315,
        "ele": 15.345849173624696,
        "distanceKm": 19.044232105774928,
        "gradePct": -0.6356601262951369,
        "smoothedEle": 13.105409352087017,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65871811553175,
        "lng": 119.55550552708493,
        "ele": 14.713898935804606,
        "distanceKm": 19.093191754578964,
        "gradePct": -0.7290562430299709,
        "smoothedEle": 12.636024087835793,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65840762726875,
        "lng": 119.55516468797218,
        "ele": 13.165633061552471,
        "distanceKm": 19.14215134061989,
        "gradePct": -0.8055692940137295,
        "smoothedEle": 12.163913972898238,
        "gradeBand": "descent"
      },
      {
        "lat": 23.658097,
        "lng": 119.554824,
        "ele": 11.25,
        "distanceKm": 19.191110974875304,
        "gradePct": -0.8623972178371322,
        "smoothedEle": 11.689542181133321,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657649,
        "lng": 119.554384,
        "ele": 9,
        "distanceKm": 19.25811745710783,
        "gradePct": -0.925717691516898,
        "smoothedEle": 10.974639826275608,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657352,
        "lng": 119.554096,
        "ele": 8.5,
        "distanceKm": 19.302288316389703,
        "gradePct": -0.9614264589271936,
        "smoothedEle": 10.475613103064791,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657017,
        "lng": 119.55379,
        "ele": 8.25,
        "distanceKm": 19.35085708125559,
        "gradePct": -0.9950824969978708,
        "smoothedEle": 9.924521040099354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656582500000003,
        "lng": 119.55340450000001,
        "ele": 7.875000000000011,
        "distanceKm": 19.413113731185337,
        "gradePct": -1.0249984601051996,
        "smoothedEle": 9.225263650387484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656148,
        "lng": 119.553019,
        "ele": 7.5,
        "distanceKm": 19.475370463378436,
        "gradePct": -1.0476882441769912,
        "smoothedEle": 8.523763966790279,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655789889912768,
        "lng": 119.5527029944489,
        "ele": 7.23363697984177,
        "distanceKm": 19.52657157660886,
        "gradePct": -1.0659062354762807,
        "smoothedEle": 7.944307659438325,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65543200092149,
        "lng": 119.552386695004,
        "ele": 6.910273281857609,
        "distanceKm": 19.577772456489384,
        "gradePct": -1.082947153513316,
        "smoothedEle": 7.369116000514928,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655074111930215,
        "lng": 119.55207039555911,
        "ele": 6.5869095838734255,
        "distanceKm": 19.628973391832034,
        "gradePct": -1.0902108750409734,
        "smoothedEle": 6.8399326271032885,
        "gradeBand": "descent"
      },
      {
        "lat": 23.654716222938937,
        "lng": 119.55175409611422,
        "ele": 6.263545885889242,
        "distanceKm": 19.68017438263672,
        "gradePct": -1.078223169155614,
        "smoothedEle": 6.404391400963254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65435833394766,
        "lng": 119.55143779666933,
        "ele": 5.940182187905058,
        "distanceKm": 19.731375428902442,
        "gradePct": -1.0389634623549537,
        "smoothedEle": 6.065137282575959,
        "gradeBand": "descent"
      },
      {
        "lat": 23.654000444956385,
        "lng": 119.55112149722444,
        "ele": 5.616818489920897,
        "distanceKm": 19.782576530628187,
        "gradePct": -0.9715828198769937,
        "smoothedEle": 5.840395777460708,
        "gradeBand": "descent"
      },
      {
        "lat": 23.653642555965106,
        "lng": 119.55080519777955,
        "ele": 5.293454791936712,
        "distanceKm": 19.833777687813875,
        "gradePct": -0.8929046095242619,
        "smoothedEle": 5.6537916413794225,
        "gradeBand": "descent"
      },
      {
        "lat": 23.653284666973832,
        "lng": 119.55048889833466,
        "ele": 4.970091093952529,
        "distanceKm": 19.88497890045819,
        "gradePct": -0.8102670421642924,
        "smoothedEle": 5.489934654427417,
        "gradeBand": "descent"
      },
      {
        "lat": 23.652926777982554,
        "lng": 119.55017259888977,
        "ele": 4.646727395968345,
        "distanceKm": 19.936180168561048,
        "gradePct": -0.7221146560535701,
        "smoothedEle": 5.354781153063593,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65256888899128,
        "lng": 119.54985629944488,
        "ele": 4.323363697984184,
        "distanceKm": 19.987381492121138,
        "gradePct": -0.6282802985661885,
        "smoothedEle": 5.2464305396003645,
        "gradeBand": "descent"
      },
      {
        "lat": 23.652211,
        "lng": 119.54954,
        "ele": 4,
        "distanceKm": 20.03858287113837,
        "gradePct": -0.5295692184497872,
        "smoothedEle": 5.1615264558716065,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651868,
        "lng": 119.549242,
        "ele": 4,
        "distanceKm": 20.087326452142335,
        "gradePct": -0.43308217979725094,
        "smoothedEle": 5.104960506037324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65151187810242,
        "lng": 119.54894070093907,
        "ele": 4.113270323658502,
        "distanceKm": 20.13742516678674,
        "gradePct": -0.3392547007075533,
        "smoothedEle": 5.07176410026656,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651155756204833,
        "lng": 119.54863940187813,
        "ele": 4.226540647316995,
        "distanceKm": 20.187523932604822,
        "gradePct": -0.2583338260765743,
        "smoothedEle": 5.064024728697518,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650799,
        "lng": 119.548339,
        "ele": 4.5,
        "distanceKm": 20.237622654035683,
        "gradePct": -0.19119467880618082,
        "smoothedEle": 5.081742393071018,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650408,
        "lng": 119.548023,
        "ele": 4.75,
        "distanceKm": 20.291717361533557,
        "gradePct": -0.13559993979517718,
        "smoothedEle": 5.129082049116782,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6500755,
        "lng": 119.54775875,
        "ele": 4.9375,
        "distanceKm": 20.337449148843685,
        "gradePct": -0.08981432494173393,
        "smoothedEle": 5.1929704015544935,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649743,
        "lng": 119.5474945,
        "ele": 5.125,
        "distanceKm": 20.38318097641251,
        "gradePct": -0.04357683586409973,
        "smoothedEle": 5.277804292285821,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6494105,
        "lng": 119.54723025,
        "ele": 5.3125,
        "distanceKm": 20.428912844239886,
        "gradePct": 0.0019238800331581984,
        "smoothedEle": 5.3835837563793225,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649078,
        "lng": 119.546966,
        "ele": 5.5,
        "distanceKm": 20.474644752324707,
        "gradePct": 0.047373667261769906,
        "smoothedEle": 5.51025195982403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64871028430828,
        "lng": 119.54667611065553,
        "ele": 5.6931859683309805,
        "distanceKm": 20.52507987861581,
        "gradePct": 0.09817127718855954,
        "smoothedEle": 5.6747740201328325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64834256861656,
        "lng": 119.54638622131104,
        "ele": 5.88637193666196,
        "distanceKm": 20.575515053490353,
        "gradePct": 0.14852460382729335,
        "smoothedEle": 5.861290416827204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64797485292484,
        "lng": 119.54609633196657,
        "ele": 6.0795579049929405,
        "distanceKm": 20.62595027694602,
        "gradePct": 0.19529981208231925,
        "smoothedEle": 6.055866651147545,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64760713723312,
        "lng": 119.5458064426221,
        "ele": 6.272743873323921,
        "distanceKm": 20.67638554898304,
        "gradePct": 0.23767309949629017,
        "smoothedEle": 6.254110909076439,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6472394215414,
        "lng": 119.54551655327761,
        "ele": 6.4659298416549005,
        "distanceKm": 20.726820869601628,
        "gradePct": 0.2750868864692903,
        "smoothedEle": 6.453356720117944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646871705849676,
        "lng": 119.54522666393314,
        "ele": 6.659115809985881,
        "distanceKm": 20.777256238799794,
        "gradePct": 0.3064336301059948,
        "smoothedEle": 6.648594902891914,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646503990157957,
        "lng": 119.54493677458865,
        "ele": 6.852301778316875,
        "distanceKm": 20.82769165657797,
        "gradePct": 0.33283780517131306,
        "smoothedEle": 6.843527987630391,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646136274466237,
        "lng": 119.54464688524418,
        "ele": 7.045487746647855,
        "distanceKm": 20.878127122934156,
        "gradePct": 0.3545455801058951,
        "smoothedEle": 7.041157145358257,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645768558774517,
        "lng": 119.5443569958997,
        "ele": 7.238673714978836,
        "distanceKm": 20.92856263786858,
        "gradePct": 0.3711440352807182,
        "smoothedEle": 7.238493892781516,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645400915689414,
        "lng": 119.54406700181713,
        "ele": 7.429132665934857,
        "distanceKm": 20.978997903980403,
        "gradePct": 0.3819648954507638,
        "smoothedEle": 7.434276648951972,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645033277126277,
        "lng": 119.54377700121141,
        "ele": 7.619421777289904,
        "distanceKm": 21.029433200293116,
        "gradePct": 0.3875812119730819,
        "smoothedEle": 7.62877927812579,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644665638563136,
        "lng": 119.54348700060571,
        "ele": 7.809710888644952,
        "distanceKm": 21.079868545209077,
        "gradePct": 0.38843502188519796,
        "smoothedEle": 7.820261050625536,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644298,
        "lng": 119.543197,
        "ele": 8,
        "distanceKm": 21.130303938727867,
        "gradePct": 0.3870225717850692,
        "smoothedEle": 8.008092304638208,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643953333333332,
        "lng": 119.54293566666666,
        "ele": 8.166666666666663,
        "distanceKm": 21.17696684611888,
        "gradePct": 0.38444284161104836,
        "smoothedEle": 8.178621543879173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643608666666665,
        "lng": 119.54267433333334,
        "ele": 8.333333333333337,
        "distanceKm": 21.22362979350241,
        "gradePct": 0.3810281352754496,
        "smoothedEle": 8.34589098222667,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643264,
        "lng": 119.542413,
        "ele": 8.5,
        "distanceKm": 21.270292780879632,
        "gradePct": 0.3868431423717157,
        "smoothedEle": 8.55585467308159,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642898499999998,
        "lng": 119.542149,
        "ele": 8.750000000000009,
        "distanceKm": 21.319025785629734,
        "gradePct": 0.40643709171981207,
        "smoothedEle": 8.842219821504962,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642533,
        "lng": 119.541885,
        "ele": 9,
        "distanceKm": 21.36775883182028,
        "gradePct": 0.43986680687472,
        "smoothedEle": 9.199863486801611,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642167333333333,
        "lng": 119.54163166666666,
        "ele": 9.166666666666666,
        "distanceKm": 21.41591653231814,
        "gradePct": 0.48271053361206917,
        "smoothedEle": 9.602566718311454,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641801666666666,
        "lng": 119.54137833333333,
        "ele": 9.333333333333334,
        "distanceKm": 21.464074271448244,
        "gradePct": 0.5322670535334482,
        "smoothedEle": 10.037680430687459,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641436,
        "lng": 119.541125,
        "ele": 9.5,
        "distanceKm": 21.512232049210105,
        "gradePct": 0.5859624809244549,
        "smoothedEle": 10.492255815705317,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641035499999997,
        "lng": 119.540859,
        "ele": 9.625000000000004,
        "distanceKm": 21.56436085972096,
        "gradePct": 0.6490872690923971,
        "smoothedEle": 11.006821242676036,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.640635,
        "lng": 119.540593,
        "ele": 9.75,
        "distanceKm": 21.61648971332557,
        "gradePct": 0.7109595702161776,
        "smoothedEle": 11.511443282809097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6402225,
        "lng": 119.54033,
        "ele": 9.875,
        "distanceKm": 21.669608273937754,
        "gradePct": 0.7571522033114518,
        "smoothedEle": 11.93749071451196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63981,
        "lng": 119.540067,
        "ele": 10,
        "distanceKm": 21.72272687713012,
        "gradePct": 0.7865790274058466,
        "smoothedEle": 12.275549497419174,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.639407,
        "lng": 119.539809,
        "ele": 12.25,
        "distanceKm": 21.774676568964306,
        "gradePct": 0.787807351363071,
        "smoothedEle": 12.520651469360173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.638863,
        "lng": 119.539433,
        "ele": 14.25,
        "distanceKm": 21.84627285682075,
        "gradePct": 0.7379419400757691,
        "smoothedEle": 12.731891214638498,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.638534,
        "lng": 119.539156,
        "ele": 15.5,
        "distanceKm": 21.89247355992943,
        "gradePct": 0.6814485259600925,
        "smoothedEle": 12.81377505578627,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63814,
        "lng": 119.538688,
        "ele": 16.5,
        "distanceKm": 21.95721998133871,
        "gradePct": 0.5810591089852085,
        "smoothedEle": 12.881046249070403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637801,
        "lng": 119.538247,
        "ele": 17.250000000000025,
        "distanceKm": 22.015862719905815,
        "gradePct": 0.48041790633554765,
        "smoothedEle": 12.930183832827472,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637462,
        "lng": 119.537806,
        "ele": 18,
        "distanceKm": 22.07450554758713,
        "gradePct": 0.3829956376374845,
        "smoothedEle": 13.020002877391715,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6371915,
        "lng": 119.5374545,
        "ele": 16.6875,
        "distanceKm": 22.121268404457503,
        "gradePct": 0.31458934514222037,
        "smoothedEle": 13.122718401838783,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636921,
        "lng": 119.537103,
        "ele": 15.375,
        "distanceKm": 22.168031317975835,
        "gradePct": 0.26636291266476314,
        "smoothedEle": 13.25665700518416,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6366505,
        "lng": 119.53675150000001,
        "ele": 14.0625,
        "distanceKm": 22.214794288142926,
        "gradePct": 0.23270560064900786,
        "smoothedEle": 13.388592713468231,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63638,
        "lng": 119.5364,
        "ele": 12.75,
        "distanceKm": 22.261557314958814,
        "gradePct": 0.2001270458106401,
        "smoothedEle": 13.459389218108688,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636151,
        "lng": 119.536066,
        "ele": 11.75,
        "distanceKm": 22.30405435783197,
        "gradePct": 0.16403757880760744,
        "smoothedEle": 13.427516435953823,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63604,
        "lng": 119.535673,
        "ele": 11,
        "distanceKm": 22.345947549754197,
        "gradePct": 0.11558029092116193,
        "smoothedEle": 13.308832873926235,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636126,
        "lng": 119.535039,
        "ele": 10.25,
        "distanceKm": 22.41123534230141,
        "gradePct": 0.05507862527772502,
        "smoothedEle": 13.108661575953711,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636259000000003,
        "lng": 119.534677,
        "ele": 10.25,
        "distanceKm": 22.450966167794167,
        "gradePct": 0.029612434561298428,
        "smoothedEle": 13.022610742305408,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636392,
        "lng": 119.534315,
        "ele": 10.25,
        "distanceKm": 22.490696958516796,
        "gradePct": 0.011546544552515314,
        "smoothedEle": 12.966829806603245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636561035223178,
        "lng": 119.53382476477348,
        "ele": 11.07698250086887,
        "distanceKm": 22.544055667790737,
        "gradePct": -0.01003500309099188,
        "smoothedEle": 12.923189948682113,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636730070446355,
        "lng": 119.53333452954698,
        "ele": 11.903965001737681,
        "distanceKm": 22.597414316717323,
        "gradePct": -0.009027297752268026,
        "smoothedEle": 13.025185945499354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63689910566953,
        "lng": 119.53284429432045,
        "ele": 12.730947502606494,
        "distanceKm": 22.65077290529887,
        "gradePct": 0.04549851792131676,
        "smoothedEle": 13.43471795086623,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637068,
        "lng": 119.532354,
        "ele": 12.75,
        "distanceKm": 22.704131551384403,
        "gradePct": 0.14853422185822787,
        "smoothedEle": 14.101180281841085,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637132,
        "lng": 119.53198,
        "ele": 12,
        "distanceKm": 22.74288846390937,
        "gradePct": 0.2568478107463964,
        "smoothedEle": 14.715364716422036,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637141,
        "lng": 119.531627,
        "ele": 11.5,
        "distanceKm": 22.778861138735515,
        "gradePct": 0.3743202068991248,
        "smoothedEle": 15.318012384771787,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637089,
        "lng": 119.530953,
        "ele": 11,
        "distanceKm": 22.847761983322556,
        "gradePct": 0.6398779288852868,
        "smoothedEle": 16.502659494879317,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637042382746056,
        "lng": 119.53051854641684,
        "ele": 12.561918302272277,
        "distanceKm": 22.892320659447073,
        "gradePct": 0.8256614976976887,
        "smoothedEle": 17.294961170929035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63699576549211,
        "lng": 119.53008409283369,
        "ele": 14.123836604544683,
        "distanceKm": 22.936879351223826,
        "gradePct": 1.0118435399212766,
        "smoothedEle": 18.11233831162365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636949851832743,
        "lng": 119.52964955032395,
        "ele": 15.447391115268678,
        "distanceKm": 22.981438023864374,
        "gradePct": 1.190345648416244,
        "smoothedEle": 18.931557337878655,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636904,
        "lng": 119.529215,
        "ele": 16.75,
        "distanceKm": 23.02599671552651,
        "gradePct": 1.3615060837944888,
        "smoothedEle": 19.74549002984727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636866505076334,
        "lng": 119.52875624910938,
        "ele": 20.170779262405773,
        "distanceKm": 23.07291360978107,
        "gradePct": 1.5186134178460662,
        "smoothedEle": 20.57141950207918,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63682931418734,
        "lng": 119.52829747013332,
        "ele": 23.807151054882894,
        "distanceKm": 23.119830374964202,
        "gradePct": 1.6354847124449081,
        "smoothedEle": 21.37465478722441,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63679175309897,
        "lng": 119.52783872601077,
        "ele": 26.77629699895193,
        "distanceKm": 23.166747263449526,
        "gradePct": 1.7133075626202916,
        "smoothedEle": 22.200779341680814,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636754,
        "lng": 119.52738,
        "ele": 29.75,
        "distanceKm": 23.21366423322377,
        "gradePct": 1.765686178914901,
        "smoothedEle": 23.080676481263602,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636761,
        "lng": 119.526798,
        "ele": 29.5,
        "distanceKm": 23.272955614689636,
        "gradePct": 1.8051139286449314,
        "smoothedEle": 24.244647202776115,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636809,
        "lng": 119.526345,
        "ele": 28.5,
        "distanceKm": 23.31940874991391,
        "gradePct": 1.8303537120007534,
        "smoothedEle": 25.166936555742996,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6368558,
        "lng": 119.52583440000001,
        "ele": 28.549999999999997,
        "distanceKm": 23.371681407887344,
        "gradePct": 1.8619269865347332,
        "smoothedEle": 26.237607785604013,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6369026,
        "lng": 119.52532380000001,
        "ele": 28.6,
        "distanceKm": 23.423954047359384,
        "gradePct": 1.8704531991544093,
        "smoothedEle": 27.227504709223954,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6369494,
        "lng": 119.5248132,
        "ele": 28.65,
        "distanceKm": 23.47622666833144,
        "gradePct": 1.861221499539071,
        "smoothedEle": 28.141853148372284,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6369962,
        "lng": 119.5243026,
        "ele": 28.700000000000003,
        "distanceKm": 23.528499270800594,
        "gradePct": 1.8406936303896928,
        "smoothedEle": 28.993013403045907,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637043,
        "lng": 119.523792,
        "ele": 28.75,
        "distanceKm": 23.580771854768255,
        "gradePct": 1.7991694647601506,
        "smoothedEle": 29.701803374347914,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637109,
        "lng": 119.523198,
        "ele": 30.25,
        "distanceKm": 23.64172380600687,
        "gradePct": 1.7004874905769327,
        "smoothedEle": 30.262597365226288,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637172,
        "lng": 119.522722,
        "ele": 31.5,
        "distanceKm": 23.690715520152533,
        "gradePct": 1.5722732560834052,
        "smoothedEle": 30.511654629504783,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63720369919738,
        "lng": 119.52225651619219,
        "ele": 31.749480892901598,
        "distanceKm": 23.73826337508987,
        "gradePct": 1.4089371441696579,
        "smoothedEle": 30.60827692257518,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637235,
        "lng": 119.521791,
        "ele": 31.25,
        "distanceKm": 23.785811245200332,
        "gradePct": 1.2446642690694454,
        "smoothedEle": 30.723206673353157,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637171666666667,
        "lng": 119.52127666666667,
        "ele": 31.500000000000007,
        "distanceKm": 23.838675551867528,
        "gradePct": 1.0690891431749372,
        "smoothedEle": 30.907013257355032,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637108333333334,
        "lng": 119.52076233333332,
        "ele": 31.749999999999993,
        "distanceKm": 23.89153988365704,
        "gradePct": 0.8901282090138083,
        "smoothedEle": 31.064312566324222,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637045,
        "lng": 119.520248,
        "ele": 32,
        "distanceKm": 23.944404240565937,
        "gradePct": 0.7156042082136672,
        "smoothedEle": 31.16323886838312,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63700480753593,
        "lng": 119.51986646174893,
        "ele": 32.2042932178804,
        "distanceKm": 23.98352622128788,
        "gradePct": 0.5885262222975889,
        "smoothedEle": 31.20334364431647,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636964,
        "lng": 119.519485,
        "ele": 32.5,
        "distanceKm": 24.02264834559433,
        "gradePct": 0.4653541929950762,
        "smoothedEle": 31.224513140774114,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636896,
        "lng": 119.518928,
        "ele": 32.25,
        "distanceKm": 24.079889482051456,
        "gradePct": 0.3062761130461752,
        "smoothedEle": 31.221219408936793,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636778,
        "lng": 119.518564,
        "ele": 32,
        "distanceKm": 24.1192219165004,
        "gradePct": 0.22620944099884713,
        "smoothedEle": 31.186613881912674,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63644,
        "lng": 119.518067,
        "ele": 31.75,
        "distanceKm": 24.18227518342755,
        "gradePct": 0.10803289898075406,
        "smoothedEle": 31.00891131415999,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63613753190697,
        "lng": 119.5177224736099,
        "ele": 31.79818243126307,
        "distanceKm": 24.230884768701298,
        "gradePct": 0.04268855604096444,
        "smoothedEle": 30.806725590640408,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635835265953485,
        "lng": 119.51737773680495,
        "ele": 32.024091215631536,
        "distanceKm": 24.27949434612918,
        "gradePct": -0.025515467920190816,
        "smoothedEle": 30.580360518676986,
        "gradeBand": "descent"
      },
      {
        "lat": 23.635533,
        "lng": 119.517033,
        "ele": 32.25,
        "distanceKm": 24.328103982130347,
        "gradePct": -0.10572997260252989,
        "smoothedEle": 30.341606568358422,
        "gradeBand": "descent"
      },
      {
        "lat": 23.635955227136296,
        "lng": 119.51683332004869,
        "ele": 31.22914135324367,
        "distanceKm": 24.379270504875947,
        "gradePct": -0.19296838914962963,
        "smoothedEle": 30.06296273825891,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636377454272598,
        "lng": 119.51663364009738,
        "ele": 30.20828270648734,
        "distanceKm": 24.43043700154308,
        "gradePct": -0.2699564113808563,
        "smoothedEle": 29.787319591860616,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63679962510434,
        "lng": 119.51643381732883,
        "ele": 29.439626278397196,
        "distanceKm": 24.481603513309146,
        "gradePct": -0.3426492914400917,
        "smoothedEle": 29.488126178203643,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63722175006956,
        "lng": 119.51623387821921,
        "ele": 28.87641751893146,
        "distanceKm": 24.532770036100644,
        "gradePct": -0.41217928539994164,
        "smoothedEle": 29.163034298114418,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63764387503478,
        "lng": 119.5160339391096,
        "ele": 28.31320875946573,
        "distanceKm": 24.583936532750258,
        "gradePct": -0.4776347089385553,
        "smoothedEle": 28.829485181456707,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638066,
        "lng": 119.515834,
        "ele": 27.75,
        "distanceKm": 24.635103003258195,
        "gradePct": -0.5285359914586578,
        "smoothedEle": 28.499176372265694,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638432,
        "lng": 119.515744,
        "ele": 27.75,
        "distanceKm": 24.67682024503369,
        "gradePct": -0.5580785209851968,
        "smoothedEle": 28.233892322795406,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63894522593209,
        "lng": 119.51573450346224,
        "ele": 27.130660580746284,
        "distanceKm": 24.733896642048016,
        "gradePct": -0.5841656062448799,
        "smoothedEle": 27.871871868123257,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639458451864176,
        "lng": 119.51572500692447,
        "ele": 26.511321161492567,
        "distanceKm": 24.79097303899769,
        "gradePct": -0.6053968537641324,
        "smoothedEle": 27.49699682609794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63997,
        "lng": 119.515723,
        "ele": 26,
        "distanceKm": 24.84785504237214,
        "gradePct": -0.6257433280701178,
        "smoothedEle": 27.105329148439864,
        "gradeBand": "descent"
      },
      {
        "lat": 23.640303,
        "lng": 119.515786,
        "ele": 26.5,
        "distanceKm": 24.885435000260955,
        "gradePct": -0.6309565426536835,
        "smoothedEle": 26.874970776467272,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6407456,
        "lng": 119.51591640000001,
        "ele": 26.299999999999997,
        "distanceKm": 24.936410962445677,
        "gradePct": -0.6245743739487138,
        "smoothedEle": 26.62951530843848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6411882,
        "lng": 119.5160468,
        "ele": 26.099999999999994,
        "distanceKm": 24.98738691292622,
        "gradePct": -0.6164273061040128,
        "smoothedEle": 26.369244210388906,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6416308,
        "lng": 119.5161772,
        "ele": 25.900000000000006,
        "distanceKm": 25.038362851703543,
        "gradePct": -0.6232402954981204,
        "smoothedEle": 26.010373832298875,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6420734,
        "lng": 119.51630759999999,
        "ele": 25.700000000000003,
        "distanceKm": 25.089338778775964,
        "gradePct": -0.6511806568501648,
        "smoothedEle": 25.538707311681538,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642516,
        "lng": 119.516438,
        "ele": 25.5,
        "distanceKm": 25.140314694144447,
        "gradePct": -0.7023580215503301,
        "smoothedEle": 24.954244608832852,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642928,
        "lng": 119.51655799999999,
        "ele": 25.450000000000003,
        "distanceKm": 25.1877297280427,
        "gradePct": -0.7748993168096732,
        "smoothedEle": 24.290199780246553,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643340000000002,
        "lng": 119.516678,
        "ele": 25.4,
        "distanceKm": 25.235144752021593,
        "gradePct": -0.8682968776805154,
        "smoothedEle": 23.522189953180778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643752,
        "lng": 119.516798,
        "ele": 25.35,
        "distanceKm": 25.28255976607986,
        "gradePct": -0.9794210488052372,
        "smoothedEle": 22.655149555721064,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644164,
        "lng": 119.516918,
        "ele": 25.299999999999997,
        "distanceKm": 25.32997477021888,
        "gradePct": -1.098710314686015,
        "smoothedEle": 21.734894277212785,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644576,
        "lng": 119.517038,
        "ele": 25.25,
        "distanceKm": 25.377389764437385,
        "gradePct": -1.2231743032149538,
        "smoothedEle": 20.808415106672484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644955,
        "lng": 119.517212,
        "ele": 26,
        "distanceKm": 25.423107985587198,
        "gradePct": -1.3539825534712677,
        "smoothedEle": 19.92365799528116,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64530489600792,
        "lng": 119.51750302433189,
        "ele": 24.24571023186926,
        "distanceKm": 25.472020994992217,
        "gradePct": -1.4836862400961204,
        "smoothedEle": 19.029267737981478,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6456545800066,
        "lng": 119.5177943536099,
        "ele": 21.57975852655762,
        "distanceKm": 25.520934045115453,
        "gradePct": -1.5909703154616488,
        "smoothedEle": 18.178220974424672,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64600426400528,
        "lng": 119.51808568288793,
        "ele": 18.913806821246173,
        "distanceKm": 25.569847047132235,
        "gradePct": -1.6749571557074658,
        "smoothedEle": 17.34427327509768,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64635394800396,
        "lng": 119.51837701216594,
        "ele": 16.24785511593453,
        "distanceKm": 25.618760001039593,
        "gradePct": -1.743279869743504,
        "smoothedEle": 16.484979894188537,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64670363200264,
        "lng": 119.51866834144396,
        "ele": 13.581903410623086,
        "distanceKm": 25.667672906838444,
        "gradePct": -1.790485904942008,
        "smoothedEle": 15.61866488543695,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64705331600132,
        "lng": 119.51895967072198,
        "ele": 10.915951705311443,
        "distanceKm": 25.716585764528446,
        "gradePct": -1.8098450259989578,
        "smoothedEle": 14.773575970856676,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647403,
        "lng": 119.519251,
        "ele": 8.25,
        "distanceKm": 25.765498574107884,
        "gradePct": -1.7955305541323865,
        "smoothedEle": 13.989481141962209,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647719977091427,
        "lng": 119.51950753356623,
        "ele": 6.844336623378359,
        "distanceKm": 25.80937428931296,
        "gradePct": -1.7664896009869986,
        "smoothedEle": 13.302271214566066,
        "gradeBand": "descent"
      },
      {
        "lat": 23.648037,
        "lng": 119.519764,
        "ele": 6.5,
        "distanceKm": 25.853249987967274,
        "gradePct": -1.7407610974083765,
        "smoothedEle": 12.576295854115635,
        "gradeBand": "descent"
      },
      {
        "lat": 23.648358,
        "lng": 119.519822,
        "ele": 7,
        "distanceKm": 25.88942920748905,
        "gradePct": -1.7318839111074311,
        "smoothedEle": 11.916003483875155,
        "gradeBand": "descent"
      },
      {
        "lat": 23.648878427721538,
        "lng": 119.51973797208431,
        "ele": 7.973287338788332,
        "distanceKm": 25.9479277145404,
        "gradePct": -1.733755273716865,
        "smoothedEle": 10.801044824697005,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649401,
        "lng": 119.519669,
        "ele": 8.75,
        "distanceKm": 26.006458323325283,
        "gradePct": -1.7252936022244239,
        "smoothedEle": 9.80361859320365,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649779,
        "lng": 119.519549,
        "ele": 9,
        "distanceKm": 26.050231185085718,
        "gradePct": -1.7021454944542052,
        "smoothedEle": 9.167988637032504,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649861,
        "lng": 119.519464,
        "ele": 8.5,
        "distanceKm": 26.062804771781302,
        "gradePct": -1.6892303964712074,
        "smoothedEle": 9.018189354091122,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64995,
        "lng": 119.519116,
        "ele": 8,
        "distanceKm": 26.099606323824045,
        "gradePct": -1.6435322526282647,
        "smoothedEle": 8.60380675406191,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650038,
        "lng": 119.518615,
        "ele": 7.75,
        "distanceKm": 26.151565953381297,
        "gradePct": -1.529889959233356,
        "smoothedEle": 8.25449144521951,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65011,
        "lng": 119.518487,
        "ele": 7.75,
        "distanceKm": 26.16686547049456,
        "gradePct": -1.4866551287575553,
        "smoothedEle": 8.19969005269063,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650241,
        "lng": 119.518372,
        "ele": 8,
        "distanceKm": 26.185557426668126,
        "gradePct": -1.4356128020802912,
        "smoothedEle": 8.13160217480734,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65056,
        "lng": 119.518162,
        "ele": 9,
        "distanceKm": 26.226978779746418,
        "gradePct": -1.3185922727577322,
        "smoothedEle": 8.014009794154985,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650912,
        "lng": 119.518025,
        "ele": 10,
        "distanceKm": 26.268532503558443,
        "gradePct": -1.1952223004216211,
        "smoothedEle": 7.965850267743611,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651363136703246,
        "lng": 119.51788758095013,
        "ele": 9.062735533630027,
        "distanceKm": 26.320612797541887,
        "gradePct": -1.0259743744292338,
        "smoothedEle": 7.986444923170581,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651808,
        "lng": 119.517726,
        "ele": 7,
        "distanceKm": 26.372745369825743,
        "gradePct": -0.8291322484792304,
        "smoothedEle": 8.074832245990628,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65227,
        "lng": 119.517622,
        "ele": 6.75,
        "distanceKm": 26.42519824780293,
        "gradePct": -0.6140273957040542,
        "smoothedEle": 8.164122590190624,
        "gradeBand": "descent"
      },
      {
        "lat": 23.652618,
        "lng": 119.51734,
        "ele": 6.75,
        "distanceKm": 26.47338928883547,
        "gradePct": -0.434299541070624,
        "smoothedEle": 8.195653766374353,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65227,
        "lng": 119.517622,
        "ele": 6.75,
        "distanceKm": 26.521580329868012,
        "gradePct": -0.28442485103313225,
        "smoothedEle": 8.161906219523363,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651808,
        "lng": 119.517726,
        "ele": 7,
        "distanceKm": 26.574033207845197,
        "gradePct": -0.16249411124393803,
        "smoothedEle": 8.079287485273131,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6514845,
        "lng": 119.5178435,
        "ele": 8.5,
        "distanceKm": 26.611943474835858,
        "gradePct": -0.1000400129419294,
        "smoothedEle": 8.020666226676749,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651161,
        "lng": 119.517961,
        "ele": 10,
        "distanceKm": 26.649853751169154,
        "gradePct": -0.06094519171221826,
        "smoothedEle": 7.961276316308899,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65056,
        "lng": 119.518162,
        "ele": 8.5,
        "distanceKm": 26.71974764041513,
        "gradePct": -0.004546766460939366,
        "smoothedEle": 8.011804670489717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650241,
        "lng": 119.518372,
        "ele": 7.75,
        "distanceKm": 26.76116899349342,
        "gradePct": 0.02491873177661699,
        "smoothedEle": 8.09897801514933,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65011,
        "lng": 119.518487,
        "ele": 7.75,
        "distanceKm": 26.779860949666986,
        "gradePct": 0.03841343169583595,
        "smoothedEle": 8.162397152166784,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650038,
        "lng": 119.518615,
        "ele": 7.75,
        "distanceKm": 26.79516046678025,
        "gradePct": 0.04769542511485714,
        "smoothedEle": 8.214857167351996,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64995,
        "lng": 119.519116,
        "ele": 8.25,
        "distanceKm": 26.847120096337502,
        "gradePct": 0.10754760625484394,
        "smoothedEle": 8.569124323594563,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649861,
        "lng": 119.519464,
        "ele": 8.5,
        "distanceKm": 26.883921648380245,
        "gradePct": 0.17995978574724278,
        "smoothedEle": 8.993656513230489,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649779,
        "lng": 119.519549,
        "ele": 9,
        "distanceKm": 26.89649523507583,
        "gradePct": 0.20652256809632197,
        "smoothedEle": 9.147874396067149,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649704,
        "lng": 119.519587,
        "ele": 9,
        "distanceKm": 26.905689283854176,
        "gradePct": 0.22966859457161315,
        "smoothedEle": 9.279255524378799,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649401,
        "lng": 119.519669,
        "ele": 8.75,
        "distanceKm": 26.94040121278633,
        "gradePct": 0.3208613292265639,
        "smoothedEle": 9.778376466288512,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6489805,
        "lng": 119.5197245,
        "ele": 8.125,
        "distanceKm": 26.98749923514631,
        "gradePct": 0.47809100063110177,
        "smoothedEle": 10.576227761276305,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64856,
        "lng": 119.51978,
        "ele": 7.5,
        "distanceKm": 27.03459725968696,
        "gradePct": 0.6706472075224295,
        "smoothedEle": 11.494639239819024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.648197,
        "lng": 119.519813,
        "ele": 6.75,
        "distanceKm": 27.07510078780432,
        "gradePct": 0.8329102001005306,
        "smoothedEle": 12.242187669629555,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647854,
        "lng": 119.519616,
        "ele": 6.25,
        "distanceKm": 27.11819714235012,
        "gradePct": 0.9962632999398782,
        "smoothedEle": 12.992185785043477,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647403,
        "lng": 119.519251,
        "ele": 8.25,
        "distanceKm": 27.180624189914386,
        "gradePct": 1.1969808187070599,
        "smoothedEle": 13.96842526764209,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647065714285716,
        "lng": 119.51897,
        "ele": 10.821428571428628,
        "distanceKm": 27.227802761685986,
        "gradePct": 1.3460807974457283,
        "smoothedEle": 14.759161070197306,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64672842857143,
        "lng": 119.518689,
        "ele": 13.392857142857057,
        "distanceKm": 27.274981378216854,
        "gradePct": 1.4877120658187601,
        "smoothedEle": 15.58440179241192,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646391142857144,
        "lng": 119.518408,
        "ele": 15.964285714285687,
        "distanceKm": 27.32216003950583,
        "gradePct": 1.6044057251934731,
        "smoothedEle": 16.420972206766884,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646053857142856,
        "lng": 119.518127,
        "ele": 18.535714285714313,
        "distanceKm": 27.36933874555214,
        "gradePct": 1.6832173410709936,
        "smoothedEle": 17.24151901810413,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645716571428572,
        "lng": 119.517846,
        "ele": 21.10714285714294,
        "distanceKm": 27.416517496356384,
        "gradePct": 1.722358873339379,
        "smoothedEle": 18.046748170876395,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645379285714284,
        "lng": 119.517565,
        "ele": 23.678571428571374,
        "distanceKm": 27.463696291917778,
        "gradePct": 1.7374763737744936,
        "smoothedEle": 18.860382315544104,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645042,
        "lng": 119.517284,
        "ele": 26.25,
        "distanceKm": 27.510875132235167,
        "gradePct": 1.7363191652256547,
        "smoothedEle": 19.71365358063731,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644576,
        "lng": 119.517038,
        "ele": 25.25,
        "distanceKm": 27.56843271589139,
        "gradePct": 1.7386806311505898,
        "smoothedEle": 20.812522368878383,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644164,
        "lng": 119.516918,
        "ele": 25.299999999999997,
        "distanceKm": 27.615847710109897,
        "gradePct": 1.7577867427584968,
        "smoothedEle": 21.740232751661388,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643752,
        "lng": 119.516798,
        "ele": 25.35,
        "distanceKm": 27.663262714248916,
        "gradePct": 1.794178864803097,
        "smoothedEle": 22.66781935767071,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643340000000002,
        "lng": 119.516678,
        "ele": 25.4,
        "distanceKm": 27.710677728307182,
        "gradePct": 1.8123644874371392,
        "smoothedEle": 23.53395962123974,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642928,
        "lng": 119.51655799999999,
        "ele": 25.450000000000003,
        "distanceKm": 27.758092752286075,
        "gradePct": 1.8023922797163492,
        "smoothedEle": 24.30095008045428,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642516,
        "lng": 119.516438,
        "ele": 25.5,
        "distanceKm": 27.80550778618433,
        "gradePct": 1.76861332818438,
        "smoothedEle": 24.96876165922036,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6420734,
        "lng": 119.51630759999999,
        "ele": 25.700000000000003,
        "distanceKm": 27.85648370155281,
        "gradePct": 1.7086602393893338,
        "smoothedEle": 25.56124126922518,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6416308,
        "lng": 119.5161772,
        "ele": 25.900000000000006,
        "distanceKm": 27.907459628625233,
        "gradePct": 1.6282628583440726,
        "smoothedEle": 26.033466187054373,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6411882,
        "lng": 119.5160468,
        "ele": 26.099999999999994,
        "distanceKm": 27.958435567402557,
        "gradePct": 1.524753165027569,
        "smoothedEle": 26.393422952801636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6407456,
        "lng": 119.51591640000001,
        "ele": 26.299999999999997,
        "distanceKm": 28.0094115178831,
        "gradePct": 1.3916125753154773,
        "smoothedEle": 26.645245690629572,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.640303,
        "lng": 119.515786,
        "ele": 26.5,
        "distanceKm": 28.06038748006782,
        "gradePct": 1.245672324478231,
        "smoothedEle": 26.887287228185066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63997,
        "lng": 119.515723,
        "ele": 26,
        "distanceKm": 28.097967437956637,
        "gradePct": 1.145382782530195,
        "smoothedEle": 27.1173055560941,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.639458451864176,
        "lng": 119.51572500692447,
        "ele": 26.511321161492567,
        "distanceKm": 28.154849441331084,
        "gradePct": 1.0011570552891556,
        "smoothedEle": 27.509014555237652,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63894522593209,
        "lng": 119.51573450346224,
        "ele": 27.130660580746284,
        "distanceKm": 28.21192583828076,
        "gradePct": 0.8659563476271834,
        "smoothedEle": 27.88393091874845,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.638432,
        "lng": 119.515744,
        "ele": 27.75,
        "distanceKm": 28.269002235295087,
        "gradePct": 0.7582713500734279,
        "smoothedEle": 28.24596018657782,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.638133,
        "lng": 119.515802,
        "ele": 28,
        "distanceKm": 28.302770438328714,
        "gradePct": 0.7063594292110906,
        "smoothedEle": 28.462004944974616,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637699782590694,
        "lng": 119.5160074585461,
        "ele": 28.23861562281969,
        "distanceKm": 28.355292210276666,
        "gradePct": 0.6516353841788209,
        "smoothedEle": 28.805569801492776,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63726647611429,
        "lng": 119.51621269376841,
        "ele": 28.81674300961464,
        "distanceKm": 28.40781403402486,
        "gradePct": 0.6224981565571234,
        "smoothedEle": 29.14845953525561,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63683316963789,
        "lng": 119.51641792899072,
        "ele": 29.39487039640959,
        "distanceKm": 28.460335885317637,
        "gradePct": 0.6169796066998032,
        "smoothedEle": 29.48770861430185,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636399822707705,
        "lng": 119.51662306160148,
        "ele": 30.154200416569807,
        "distanceKm": 28.51285773117489,
        "gradePct": 0.6260383674694132,
        "smoothedEle": 29.791800667153232,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635966411353852,
        "lng": 119.51682803080074,
        "ele": 31.202100208284868,
        "distanceKm": 28.565379557075477,
        "gradePct": 0.6314405835486162,
        "smoothedEle": 30.07504550763163,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635533,
        "lng": 119.517033,
        "ele": 32.25,
        "distanceKm": 28.617901410454785,
        "gradePct": 0.6212013045100172,
        "smoothedEle": 30.360584255307923,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635835265953485,
        "lng": 119.51737773680495,
        "ele": 32.024091215631536,
        "distanceKm": 28.666511046455952,
        "gradePct": 0.6026813414008956,
        "smoothedEle": 30.599022568907813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63613753190697,
        "lng": 119.5177224736099,
        "ele": 31.798182431263065,
        "distanceKm": 28.715120623883834,
        "gradePct": 0.584209221852138,
        "smoothedEle": 30.82524119942246,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63644,
        "lng": 119.518067,
        "ele": 31.75,
        "distanceKm": 28.763730209157583,
        "gradePct": 0.5629619781745688,
        "smoothedEle": 31.027330199280726,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636687,
        "lng": 119.518395,
        "ele": 32,
        "distanceKm": 28.80698196558284,
        "gradePct": 0.532156783454694,
        "smoothedEle": 31.150338061430084,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63685,
        "lng": 119.518749,
        "ele": 32.25,
        "distanceKm": 28.84734139786576,
        "gradePct": 0.49288820326784094,
        "smoothedEle": 31.218001534370195,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636918751288217,
        "lng": 119.51911435981671,
        "ele": 32.3336444419729,
        "distanceKm": 28.885336304299415,
        "gradePct": 0.4467062258252845,
        "smoothedEle": 31.235244374723425,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636964,
        "lng": 119.519485,
        "ele": 32.5,
        "distanceKm": 28.923425825837835,
        "gradePct": 0.3963606964946315,
        "smoothedEle": 31.23110268473308,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637033,
        "lng": 119.52013,
        "ele": 32,
        "distanceKm": 28.989576016696084,
        "gradePct": 0.3059468291667365,
        "smoothedEle": 31.18673786832123,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63709867393491,
        "lng": 119.52068388885034,
        "ele": 31.788129204304024,
        "distanceKm": 29.046469189367702,
        "gradePct": 0.2235736568049994,
        "smoothedEle": 31.09093211084235,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637166836967456,
        "lng": 119.52123744442517,
        "ele": 31.519064602152003,
        "distanceKm": 29.103364874063065,
        "gradePct": 0.12922900960246722,
        "smoothedEle": 30.927700401448377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637235,
        "lng": 119.521791,
        "ele": 31.25,
        "distanceKm": 29.160260529660107,
        "gradePct": 0.03208570125294585,
        "smoothedEle": 30.728791255298695,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63720369919738,
        "lng": 119.52225651619219,
        "ele": 31.74948089290156,
        "distanceKm": 29.20780839977057,
        "gradePct": -0.03493088356423115,
        "smoothedEle": 30.616557246426414,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637172,
        "lng": 119.522722,
        "ele": 31.5,
        "distanceKm": 29.255356254707905,
        "gradePct": -0.10163368392392513,
        "smoothedEle": 30.48434798583703,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637109,
        "lng": 119.523198,
        "ele": 30.25,
        "distanceKm": 29.30434796885357,
        "gradePct": -0.18126355464241542,
        "smoothedEle": 30.23652920962711,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637043,
        "lng": 119.523792,
        "ele": 28.75,
        "distanceKm": 29.365299920092184,
        "gradePct": -0.30979482209207276,
        "smoothedEle": 29.677177356645444,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6369962,
        "lng": 119.5243026,
        "ele": 28.700000000000003,
        "distanceKm": 29.417572504059844,
        "gradePct": -0.45217314390358254,
        "smoothedEle": 28.970873430133576,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6369494,
        "lng": 119.5248132,
        "ele": 28.65,
        "distanceKm": 29.469845106529,
        "gradePct": -0.6162859118295685,
        "smoothedEle": 28.118541199295763,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6369026,
        "lng": 119.52532380000001,
        "ele": 28.6,
        "distanceKm": 29.522117727501055,
        "gradePct": -0.7848546513916276,
        "smoothedEle": 27.207665711830387,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6368558,
        "lng": 119.52583440000001,
        "ele": 28.549999999999997,
        "distanceKm": 29.574390366973095,
        "gradePct": -0.9586875207094607,
        "smoothedEle": 26.2173896351378,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636809,
        "lng": 119.526345,
        "ele": 28.5,
        "distanceKm": 29.626663024946527,
        "gradePct": -1.1397814491253706,
        "smoothedEle": 25.147342028306316,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636761,
        "lng": 119.526798,
        "ele": 29.5,
        "distanceKm": 29.673116160170803,
        "gradePct": -1.2946051570656563,
        "smoothedEle": 24.225420494571004,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636743,
        "lng": 119.527169,
        "ele": 29.75,
        "distanceKm": 29.71096157710402,
        "gradePct": -1.4260842726880683,
        "smoothedEle": 23.477368310940776,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636778760390662,
        "lng": 119.52768085570573,
        "ele": 27.79969525601021,
        "distanceKm": 29.76325390169328,
        "gradePct": -1.592282592046582,
        "smoothedEle": 22.482985714889374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636820844392403,
        "lng": 119.52819220515151,
        "ele": 24.484859502609382,
        "distanceKm": 29.815553010602912,
        "gradePct": -1.7175181045074077,
        "smoothedEle": 21.546110791709083,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636862325000195,
        "lng": 119.52870361111354,
        "ele": 20.596527758110327,
        "distanceKm": 29.86785187695365,
        "gradePct": -1.8002286805559413,
        "smoothedEle": 20.64155207034802,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636904,
        "lng": 119.529215,
        "ele": 16.75,
        "distanceKm": 29.92015090502006,
        "gradePct": -1.840774494551193,
        "smoothedEle": 19.724958775840726,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636949851832743,
        "lng": 119.52964955032395,
        "ele": 15.447391115268678,
        "distanceKm": 29.964709596682194,
        "gradePct": -1.8582497015545092,
        "smoothedEle": 18.911029876156416,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63699576549211,
        "lng": 119.53008409283369,
        "ele": 14.123836604544556,
        "distanceKm": 30.009268269322742,
        "gradePct": -1.8679518080567405,
        "smoothedEle": 18.091814642185717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637042382746056,
        "lng": 119.53051854641684,
        "ele": 12.561918302272279,
        "distanceKm": 30.053826961099496,
        "gradePct": -1.8665021253345977,
        "smoothedEle": 17.274441293775407,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637089,
        "lng": 119.530953,
        "ele": 11,
        "distanceKm": 30.098385637224013,
        "gradePct": -1.8488109526948415,
        "smoothedEle": 16.48213961772569,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637141,
        "lng": 119.531627,
        "ele": 11.5,
        "distanceKm": 30.167286481811054,
        "gradePct": -1.8087394839691924,
        "smoothedEle": 15.297420454216336,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637132,
        "lng": 119.53198,
        "ele": 12,
        "distanceKm": 30.2032591566372,
        "gradePct": -1.7875082416722774,
        "smoothedEle": 14.692073078878469,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637068,
        "lng": 119.532354,
        "ele": 12.75,
        "distanceKm": 30.242016069162165,
        "gradePct": -1.7598759210455668,
        "smoothedEle": 14.087461383120374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63689910566953,
        "lng": 119.53284429432045,
        "ele": 12.73094750260655,
        "distanceKm": 30.2953747152477,
        "gradePct": -1.6959967114665988,
        "smoothedEle": 13.427596852213904,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636730070446355,
        "lng": 119.53333452954698,
        "ele": 11.903965001737681,
        "distanceKm": 30.348733303829246,
        "gradePct": -1.588152613397093,
        "smoothedEle": 13.031462940798978,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636561035223178,
        "lng": 119.53382476477348,
        "ele": 11.076982500868812,
        "distanceKm": 30.402091952755832,
        "gradePct": -1.4236540414146706,
        "smoothedEle": 12.923189948682106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636392,
        "lng": 119.534315,
        "ele": 10.25,
        "distanceKm": 30.455450662029772,
        "gradePct": -1.2226655784089697,
        "smoothedEle": 12.966829806603238,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636259000000003,
        "lng": 119.534677,
        "ele": 10.25,
        "distanceKm": 30.4951814527524,
        "gradePct": -1.0656382597873126,
        "smoothedEle": 13.0226107423054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636126,
        "lng": 119.535039,
        "ele": 10.25,
        "distanceKm": 30.53491227824516,
        "gradePct": -0.9024157406256064,
        "smoothedEle": 13.10932873894068,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63604,
        "lng": 119.535673,
        "ele": 11,
        "distanceKm": 30.600200070792372,
        "gradePct": -0.6278592567979239,
        "smoothedEle": 13.311644961172806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636151,
        "lng": 119.536066,
        "ele": 11.75,
        "distanceKm": 30.6420932627146,
        "gradePct": -0.4614356849026699,
        "smoothedEle": 13.423428148580737,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63638,
        "lng": 119.5364,
        "ele": 12.75,
        "distanceKm": 30.684590305587754,
        "gradePct": -0.30850213270672955,
        "smoothedEle": 13.463721427371947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6366505,
        "lng": 119.53675150000001,
        "ele": 14.0625,
        "distanceKm": 30.731353332403643,
        "gradePct": -0.17218499220407502,
        "smoothedEle": 13.392876177591088,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636921,
        "lng": 119.537103,
        "ele": 15.375,
        "distanceKm": 30.778116302570734,
        "gradePct": -0.07672131102887896,
        "smoothedEle": 13.25741802098554,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6371915,
        "lng": 119.5374545,
        "ele": 16.6875,
        "distanceKm": 30.824879216089066,
        "gradePct": -0.018729902529237917,
        "smoothedEle": 13.11490606367689,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637462,
        "lng": 119.537806,
        "ele": 18,
        "distanceKm": 30.87164207295944,
        "gradePct": 0.002705390791216189,
        "smoothedEle": 12.99850444151854,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637801,
        "lng": 119.538247,
        "ele": 17.249999999999975,
        "distanceKm": 30.930284900640753,
        "gradePct": -0.012472615732959724,
        "smoothedEle": 12.883884703627176,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63814,
        "lng": 119.538688,
        "ele": 16.5,
        "distanceKm": 30.98892763920786,
        "gradePct": -0.04168168410571233,
        "smoothedEle": 12.805422139835411,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638379,
        "lng": 119.538984,
        "ele": 16,
        "distanceKm": 31.02911985589972,
        "gradePct": -0.07040687275875576,
        "smoothedEle": 12.744651615898077,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638689,
        "lng": 119.539297,
        "ele": 14.75,
        "distanceKm": 31.07607502731542,
        "gradePct": -0.11531994459698786,
        "smoothedEle": 12.660285662668242,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639044421306814,
        "lng": 119.53955881685434,
        "ele": 13.778775826453522,
        "distanceKm": 31.123753137548224,
        "gradePct": -0.1681221427094048,
        "smoothedEle": 12.53388066143184,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639407,
        "lng": 119.539809,
        "ele": 12.25,
        "distanceKm": 31.171449387075416,
        "gradePct": -0.21948428986263624,
        "smoothedEle": 12.353840506589878,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63981,
        "lng": 119.540067,
        "ele": 10,
        "distanceKm": 31.2233990789096,
        "gradePct": -0.2644269246144866,
        "smoothedEle": 12.082792123397018,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6402225,
        "lng": 119.54033,
        "ele": 9.75,
        "distanceKm": 31.276517682101968,
        "gradePct": -0.308769253316822,
        "smoothedEle": 11.718202473558856,
        "gradeBand": "descent"
      },
      {
        "lat": 23.640635,
        "lng": 119.540593,
        "ele": 9.5,
        "distanceKm": 31.32963624271415,
        "gradePct": -0.3674881451467414,
        "smoothedEle": 11.265624196215137,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6410355,
        "lng": 119.540859,
        "ele": 9.249999999999991,
        "distanceKm": 31.3817650963191,
        "gradePct": -0.44875048520141153,
        "smoothedEle": 10.734966163941397,
        "gradeBand": "descent"
      },
      {
        "lat": 23.641436,
        "lng": 119.541125,
        "ele": 9,
        "distanceKm": 31.433893906829617,
        "gradePct": -0.5369471714846081,
        "smoothedEle": 10.194320083338729,
        "gradeBand": "descent"
      },
      {
        "lat": 23.641801666666666,
        "lng": 119.54137833333333,
        "ele": 8.833333333333334,
        "distanceKm": 31.48205168459148,
        "gradePct": -0.6197944879013726,
        "smoothedEle": 9.715649561059807,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642167333333333,
        "lng": 119.54163166666666,
        "ele": 8.666666666666666,
        "distanceKm": 31.530209423721583,
        "gradePct": -0.6969148746908441,
        "smoothedEle": 9.258119578886708,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642533,
        "lng": 119.541885,
        "ele": 8.5,
        "distanceKm": 31.578367124219444,
        "gradePct": -0.7633512075336345,
        "smoothedEle": 8.83745277945035,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6428985,
        "lng": 119.542149,
        "ele": 8.249999999999991,
        "distanceKm": 31.62710017041032,
        "gradePct": -0.8127533367960633,
        "smoothedEle": 8.45747985378926,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643264,
        "lng": 119.542413,
        "ele": 8,
        "distanceKm": 31.67583317516009,
        "gradePct": -0.8396918488848286,
        "smoothedEle": 8.132508774752267,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643608666666665,
        "lng": 119.54267433333334,
        "ele": 7.8333333333333375,
        "distanceKm": 31.72249616253731,
        "gradePct": -0.837657902882624,
        "smoothedEle": 7.899213590208748,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643953333333332,
        "lng": 119.54293566666666,
        "ele": 7.6666666666666625,
        "distanceKm": 31.769159109920842,
        "gradePct": -0.8115393331743317,
        "smoothedEle": 7.711012769346366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644298,
        "lng": 119.543197,
        "ele": 7.5,
        "distanceKm": 31.815822017311856,
        "gradePct": -0.7717490884216485,
        "smoothedEle": 7.524578071696741,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644665638563136,
        "lng": 119.54348700060571,
        "ele": 7.309710888644952,
        "distanceKm": 31.866257410830645,
        "gradePct": -0.713474553086362,
        "smoothedEle": 7.325457561968618,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645033277126277,
        "lng": 119.54377700121141,
        "ele": 7.119421777289904,
        "distanceKm": 31.916692755746606,
        "gradePct": -0.648787988852983,
        "smoothedEle": 7.128779278125875,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645400915689414,
        "lng": 119.54406700181713,
        "ele": 6.929132665934857,
        "distanceKm": 31.96712805205932,
        "gradePct": -0.5859416613876594,
        "smoothedEle": 6.934276648952059,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645768558774517,
        "lng": 119.5443569958997,
        "ele": 6.738673714978836,
        "distanceKm": 32.01756331817114,
        "gradePct": -0.5279543900537618,
        "smoothedEle": 6.7384938927816105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646136274466237,
        "lng": 119.54464688524418,
        "ele": 6.545487746647855,
        "distanceKm": 32.06799883310557,
        "gradePct": -0.47737293122935703,
        "smoothedEle": 6.541157145358338,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646503990157957,
        "lng": 119.54493677458865,
        "ele": 6.352301778316875,
        "distanceKm": 32.11843429946176,
        "gradePct": -0.4363039809173135,
        "smoothedEle": 6.343527987630418,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646871705849676,
        "lng": 119.54522666393314,
        "ele": 6.159115809985881,
        "distanceKm": 32.168869717239936,
        "gradePct": -0.4060697963636805,
        "smoothedEle": 6.148594902891903,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6472394215414,
        "lng": 119.54551655327761,
        "ele": 5.9659298416549005,
        "distanceKm": 32.219305086438105,
        "gradePct": -0.3923621799622369,
        "smoothedEle": 5.9533567201179185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64760713723312,
        "lng": 119.5458064426221,
        "ele": 5.772743873323921,
        "distanceKm": 32.269740407056695,
        "gradePct": -0.38893669939726133,
        "smoothedEle": 5.764006786217927,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64797485292484,
        "lng": 119.54609633196657,
        "ele": 5.5795579049929405,
        "distanceKm": 32.32017567909371,
        "gradePct": -0.384739607520153,
        "smoothedEle": 5.583691641328437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64834256861656,
        "lng": 119.54638622131104,
        "ele": 5.38637193666196,
        "distanceKm": 32.37061090254937,
        "gradePct": -0.3791370396709752,
        "smoothedEle": 5.412795434410825,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64871028430828,
        "lng": 119.54667611065553,
        "ele": 5.1931859683309805,
        "distanceKm": 32.42104607742392,
        "gradePct": -0.3702050932683912,
        "smoothedEle": 5.260965320909863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649078,
        "lng": 119.546966,
        "ele": 5,
        "distanceKm": 32.47148120371502,
        "gradePct": -0.3566217417003246,
        "smoothedEle": 5.134269605319381,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6494105,
        "lng": 119.54723025,
        "ele": 4.8125,
        "distanceKm": 32.51721311179984,
        "gradePct": -0.3395906025479629,
        "smoothedEle": 5.041900332938304,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649743,
        "lng": 119.5474945,
        "ele": 4.625,
        "distanceKm": 32.56294497962722,
        "gradePct": -0.3181022716987099,
        "smoothedEle": 4.97041976971533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6500755,
        "lng": 119.54775875,
        "ele": 4.4375,
        "distanceKm": 32.60867680719604,
        "gradePct": -0.29237550849296184,
        "smoothedEle": 4.919884749660629,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650408,
        "lng": 119.548023,
        "ele": 4.25,
        "distanceKm": 32.654408594506165,
        "gradePct": -0.26283839209426124,
        "smoothedEle": 4.890295237705518,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650799,
        "lng": 119.548339,
        "ele": 4,
        "distanceKm": 32.70850330200404,
        "gradePct": -0.22232888595022562,
        "smoothedEle": 4.88352661228316,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651155756204833,
        "lng": 119.54863940187813,
        "ele": 4,
        "distanceKm": 32.7586020234349,
        "gradePct": -0.18048815310318728,
        "smoothedEle": 4.903382988982805,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65151187810242,
        "lng": 119.54894070093907,
        "ele": 4,
        "distanceKm": 32.80870078925298,
        "gradePct": -0.13520399920452686,
        "smoothedEle": 4.948696434915408,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651868,
        "lng": 119.549242,
        "ele": 4,
        "distanceKm": 32.85879950389739,
        "gradePct": -0.08667013024501813,
        "smoothedEle": 5.019466876669479,
        "gradeBand": "descent"
      },
      {
        "lat": 23.652211,
        "lng": 119.54954,
        "ele": 4.25,
        "distanceKm": 32.90754308490135,
        "gradePct": -0.03780484684514818,
        "smoothedEle": 5.112590512256729,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65256888899128,
        "lng": 119.54985629944488,
        "ele": 4.573363697984184,
        "distanceKm": 32.958744463918585,
        "gradePct": 0.01392613163567713,
        "smoothedEle": 5.23589563024842,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652926777982554,
        "lng": 119.55017259888977,
        "ele": 4.896727395968368,
        "distanceKm": 33.00994578747867,
        "gradePct": 0.0652136734863987,
        "smoothedEle": 5.382647236381931,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653284666973832,
        "lng": 119.55048889833466,
        "ele": 5.2200910939525516,
        "distanceKm": 33.06114705558153,
        "gradePct": 0.11659433976110858,
        "smoothedEle": 5.556201688822898,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653642555965106,
        "lng": 119.55080519777955,
        "ele": 5.543454791936735,
        "distanceKm": 33.112348268225844,
        "gradePct": 0.16819007096492003,
        "smoothedEle": 5.758459585258365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654000444956385,
        "lng": 119.55112149722444,
        "ele": 5.86681848992092,
        "distanceKm": 33.16354942541153,
        "gradePct": 0.21886262044793553,
        "smoothedEle": 5.983464589228918,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65435833394766,
        "lng": 119.55143779666933,
        "ele": 6.190182187905058,
        "distanceKm": 33.21475052713728,
        "gradePct": 0.2721208504080612,
        "smoothedEle": 6.246606920638481,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654716222938937,
        "lng": 119.55175409611422,
        "ele": 6.513545885889242,
        "distanceKm": 33.265951573402994,
        "gradePct": 0.32948615052901803,
        "smoothedEle": 6.557461279340054,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655074111930215,
        "lng": 119.55207039555911,
        "ele": 6.8369095838734255,
        "distanceKm": 33.31715256420768,
        "gradePct": 0.4081407962597371,
        "smoothedEle": 7.001339561786901,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65543200092149,
        "lng": 119.552386695004,
        "ele": 7.160273281857609,
        "distanceKm": 33.36835349955033,
        "gradePct": 0.49956207240650163,
        "smoothedEle": 7.535529956111374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655789889912768,
        "lng": 119.5527029944489,
        "ele": 7.483636979841793,
        "distanceKm": 33.419554379430856,
        "gradePct": 0.5926820314840558,
        "smoothedEle": 8.104926728264127,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656148,
        "lng": 119.553019,
        "ele": 7.75,
        "distanceKm": 33.47075549266128,
        "gradePct": 0.680277152318319,
        "smoothedEle": 8.671707020647016,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6565825,
        "lng": 119.5534045,
        "ele": 8.124999999999979,
        "distanceKm": 33.53301222485316,
        "gradePct": 0.7793947146897047,
        "smoothedEle": 9.357807992621535,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657017,
        "lng": 119.55379,
        "ele": 8.5,
        "distanceKm": 33.595268874784125,
        "gradePct": 0.8696259105467263,
        "smoothedEle": 10.039121161912735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657352,
        "lng": 119.554096,
        "ele": 8.75,
        "distanceKm": 33.64383763965001,
        "gradePct": 0.9358473234394399,
        "smoothedEle": 10.576077179210227,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657649,
        "lng": 119.554384,
        "ele": 9.25,
        "distanceKm": 33.68800849893188,
        "gradePct": 0.9909758677916926,
        "smoothedEle": 11.064048598855157,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657902,
        "lng": 119.554623,
        "ele": 9.25,
        "distanceKm": 33.72521025534867,
        "gradePct": 1.0304253281462754,
        "smoothedEle": 11.462237187613582,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658239452406693,
        "lng": 119.55498023812346,
        "ele": 12.128501559293262,
        "distanceKm": 33.77747708945728,
        "gradePct": 1.061116062757735,
        "smoothedEle": 11.96296009451095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658571101533198,
        "lng": 119.55534398232673,
        "ele": 14.173776058627897,
        "distanceKm": 33.829750061050866,
        "gradePct": 1.0638233048360044,
        "smoothedEle": 12.451888485807414,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65890238340791,
        "lng": 119.5557081260382,
        "ele": 15.239276261914677,
        "distanceKm": 33.88202302604284,
        "gradePct": 1.0507912555043475,
        "smoothedEle": 12.94150284506346,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659233873672406,
        "lng": 119.55607204609689,
        "ele": 15.505336702178145,
        "distanceKm": 33.93429610218241,
        "gradePct": 1.031975517793967,
        "smoothedEle": 13.427990572457546,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659565364584353,
        "lng": 119.5564359654676,
        "ele": 15.762705422632575,
        "distanceKm": 33.98656911278639,
        "gradePct": 1.0133775380139838,
        "smoothedEle": 13.912868877642905,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659896855496296,
        "lng": 119.55679988483833,
        "ele": 16.020074143087005,
        "distanceKm": 34.03884205677277,
        "gradePct": 0.9934098106819031,
        "smoothedEle": 14.388656515902793,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660228145265506,
        "lng": 119.55716402158156,
        "ele": 16.379210534952016,
        "distanceKm": 34.09111487009558,
        "gradePct": 0.96844107532118,
        "smoothedEle": 14.83586668639455,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660559243375463,
        "lng": 119.55752836640443,
        "ele": 16.852421430366228,
        "distanceKm": 34.14338764239221,
        "gradePct": 0.9332362477795574,
        "smoothedEle": 15.237283436018018,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660891,
        "lng": 119.557892,
        "ele": 17,
        "distanceKm": 34.195660599875204,
        "gradePct": 0.8911688265267134,
        "smoothedEle": 15.601796909386204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661133,
        "lng": 119.558311,
        "ele": 16,
        "distanceKm": 34.24611044535879,
        "gradePct": 0.8559739409731904,
        "smoothedEle": 15.942333366400398,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661183,
        "lng": 119.558736,
        "ele": 16,
        "distanceKm": 34.28975121229385,
        "gradePct": 0.8111817321672607,
        "smoothedEle": 16.13367315521414,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661044827720765,
        "lng": 119.5592051247118,
        "ele": 16.361977041331155,
        "distanceKm": 34.33993989830859,
        "gradePct": 0.7419149535228368,
        "smoothedEle": 16.25690629248838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66088174694831,
        "lng": 119.55966556765871,
        "ele": 16.62221231652747,
        "distanceKm": 34.39021887976703,
        "gradePct": 0.6508848404378238,
        "smoothedEle": 16.272203068233104,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660718666175853,
        "lng": 119.56012601060561,
        "ele": 16.882447591723786,
        "distanceKm": 34.44049791577167,
        "gradePct": 0.5453309271318233,
        "smoothedEle": 16.212172502364545,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660555648485317,
        "lng": 119.56058647950937,
        "ele": 17.102467333348997,
        "distanceKm": 34.49077694276393,
        "gradePct": 0.4307930744474607,
        "smoothedEle": 16.105133862156375,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66039276342152,
        "lng": 119.56104700363903,
        "ele": 17.135878071734002,
        "distanceKm": 34.541055956343754,
        "gradePct": 0.31141373186424276,
        "smoothedEle": 15.964665774393149,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660230035362336,
        "lng": 119.56150759318633,
        "ele": 16.58616986860803,
        "distanceKm": 34.59133495428352,
        "gradePct": 0.19010584337427686,
        "smoothedEle": 15.788085989241553,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66006694790166,
        "lng": 119.56196803080788,
        "ele": 16.017260122071654,
        "distanceKm": 34.64161397062714,
        "gradePct": 0.06934412315145941,
        "smoothedEle": 15.570383546805846,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659903972202425,
        "lng": 119.56242851468038,
        "ele": 16,
        "distanceKm": 34.69189295451991,
        "gradePct": -0.044610893370399654,
        "smoothedEle": 15.352469632251271,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659741,
        "lng": 119.562889,
        "ele": 16,
        "distanceKm": 34.742171990269156,
        "gradePct": -0.1497131510304804,
        "smoothedEle": 15.167183039392983,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659632,
        "lng": 119.563228,
        "ele": 16.25,
        "distanceKm": 34.778764230585956,
        "gradePct": -0.20766442384782274,
        "smoothedEle": 15.04717940867945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659603,
        "lng": 119.563696,
        "ele": 16,
        "distanceKm": 34.82653835260209,
        "gradePct": -0.2720353310787399,
        "smoothedEle": 14.863823525122532,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65982,
        "lng": 119.564196,
        "ele": 14.875,
        "distanceKm": 34.882889997650956,
        "gradePct": -0.33489581806433893,
        "smoothedEle": 14.595494253622308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660037,
        "lng": 119.564696,
        "ele": 13.75,
        "distanceKm": 34.939241566336264,
        "gradePct": -0.38753754547177516,
        "smoothedEle": 14.275984791185957,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660241749999997,
        "lng": 119.565072,
        "ele": 13.375000000000016,
        "distanceKm": 34.983793193672014,
        "gradePct": -0.42869953632088986,
        "smoothedEle": 13.976503831162363,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6604465,
        "lng": 119.56544799999999,
        "ele": 13.00000000000003,
        "distanceKm": 35.02834476946785,
        "gradePct": -0.4693881697708793,
        "smoothedEle": 13.653237080343152,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66065125,
        "lng": 119.56582399999999,
        "ele": 12.624999999999984,
        "distanceKm": 35.07289629372566,
        "gradePct": -0.5072223931365002,
        "smoothedEle": 13.316730579043512,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660856,
        "lng": 119.5662,
        "ele": 12.25,
        "distanceKm": 35.117447766443604,
        "gradePct": -0.5427239955472934,
        "smoothedEle": 12.961400494326634,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661122,
        "lng": 119.566705,
        "ele": 12.625,
        "distanceKm": 35.17677910875063,
        "gradePct": -0.588348700949001,
        "smoothedEle": 12.47623097745673,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661388,
        "lng": 119.56721,
        "ele": 13,
        "distanceKm": 35.236110360360954,
        "gradePct": -0.6400348999850362,
        "smoothedEle": 11.989346651886269,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6615705,
        "lng": 119.56759775,
        "ele": 12.5,
        "distanceKm": 35.280510461758425,
        "gradePct": -0.676032621203932,
        "smoothedEle": 11.660314311162919,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661752999999997,
        "lng": 119.56798549999999,
        "ele": 12,
        "distanceKm": 35.324910514131425,
        "gradePct": -0.7000117681865677,
        "smoothedEle": 11.370012287462789,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6619355,
        "lng": 119.56837325,
        "ele": 11.5,
        "distanceKm": 35.369310517482546,
        "gradePct": -0.7091444845684005,
        "smoothedEle": 11.114433155534561,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662118,
        "lng": 119.568761,
        "ele": 11,
        "distanceKm": 35.41371047180998,
        "gradePct": -0.710617125439217,
        "smoothedEle": 10.867658688486166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662192,
        "lng": 119.569235,
        "ele": 10.25,
        "distanceKm": 35.46268203560587,
        "gradePct": -0.7008576905129754,
        "smoothedEle": 10.614126915009185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662299,
        "lng": 119.56963300000001,
        "ele": 9.874999999999968,
        "distanceKm": 35.50492705251332,
        "gradePct": -0.6876443840849141,
        "smoothedEle": 10.384934385810551,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662406,
        "lng": 119.570031,
        "ele": 9.5,
        "distanceKm": 35.54717203759191,
        "gradePct": -0.6712193529225476,
        "smoothedEle": 10.154934224446167,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6625615,
        "lng": 119.57059699999999,
        "ele": 8.50000000000006,
        "distanceKm": 35.607354488762965,
        "gradePct": -0.6420826535689581,
        "smoothedEle": 9.831488386029102,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662717,
        "lng": 119.571163,
        "ele": 7.5,
        "distanceKm": 35.667536874271924,
        "gradePct": -0.6115351902571067,
        "smoothedEle": 9.494131446027467,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662872,
        "lng": 119.571803,
        "ele": 8,
        "distanceKm": 35.734958593980814,
        "gradePct": -0.5827023062970437,
        "smoothedEle": 9.08528674971931,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662934,
        "lng": 119.572202,
        "ele": 9.25,
        "distanceKm": 35.776175836273424,
        "gradePct": -0.5732258384070757,
        "smoothedEle": 8.82630738742421,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662938,
        "lng": 119.572768,
        "ele": 10,
        "distanceKm": 35.83382242591871,
        "gradePct": -0.5670592446736137,
        "smoothedEle": 8.48341654818245,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662875333333332,
        "lng": 119.573314,
        "ele": 9.249999999999968,
        "distanceKm": 35.88986528378766,
        "gradePct": -0.5486704189141413,
        "smoothedEle": 8.256837891638924,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662812666666667,
        "lng": 119.57386,
        "ele": 8.500000000000032,
        "distanceKm": 35.94590816810115,
        "gradePct": -0.5129630664724868,
        "smoothedEle": 8.13615194564323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66275,
        "lng": 119.574406,
        "ele": 7.75,
        "distanceKm": 36.00195107885922,
        "gradePct": -0.4647257802493616,
        "smoothedEle": 8.07745107944195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662723,
        "lng": 119.57483433333333,
        "ele": 7.416666666666686,
        "distanceKm": 36.04567839849149,
        "gradePct": -0.42171106248062845,
        "smoothedEle": 8.0545109360804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662696,
        "lng": 119.57526266666667,
        "ele": 7.083333333333314,
        "distanceKm": 36.08940572711206,
        "gradePct": -0.3748487774198217,
        "smoothedEle": 8.053708703158318,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662669,
        "lng": 119.575691,
        "ele": 6.75,
        "distanceKm": 36.13313306471803,
        "gradePct": -0.32182275159341495,
        "smoothedEle": 8.07787085958801,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662646,
        "lng": 119.576331,
        "ele": 6.75,
        "distanceKm": 36.1983648401113,
        "gradePct": -0.22389541825701256,
        "smoothedEle": 8.18771384972682,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662685,
        "lng": 119.576887,
        "ele": 6.500000000000016,
        "distanceKm": 36.25515718197796,
        "gradePct": -0.14321706406996135,
        "smoothedEle": 8.242288100194655,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662724,
        "lng": 119.577443,
        "ele": 6.25,
        "distanceKm": 36.31194950700402,
        "gradePct": -0.06892459956381032,
        "smoothedEle": 8.268897058124637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662667,
        "lng": 119.577997,
        "ele": 7.75,
        "distanceKm": 36.368727204287865,
        "gradePct": 0.00781812335737797,
        "smoothedEle": 8.381388776461629,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662564,
        "lng": 119.578615,
        "ele": 9,
        "distanceKm": 36.432701775662366,
        "gradePct": 0.07941916928223024,
        "smoothedEle": 8.561687191349915,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662482666666666,
        "lng": 119.57901733333333,
        "ele": 9.083333333333329,
        "distanceKm": 36.47466414245788,
        "gradePct": 0.11166984651125027,
        "smoothedEle": 8.664381389980612,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662401333333335,
        "lng": 119.57941966666667,
        "ele": 9.166666666666671,
        "distanceKm": 36.516626534143896,
        "gradePct": 0.13990705984556193,
        "smoothedEle": 8.769287369195645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66232,
        "lng": 119.579822,
        "ele": 9.25,
        "distanceKm": 36.55858895071768,
        "gradePct": 0.165260345790416,
        "smoothedEle": 8.880575804689878,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662265,
        "lng": 119.580265,
        "ele": 9,
        "distanceKm": 36.604119585894,
        "gradePct": 0.18996442748319922,
        "smoothedEle": 9.011661190534724,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662250289903355,
        "lng": 119.58065387204987,
        "ele": 9.25,
        "distanceKm": 36.64375864252837,
        "gradePct": 0.20846834285186697,
        "smoothedEle": 9.138104854589415,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662219,
        "lng": 119.581042,
        "ele": 9.25,
        "distanceKm": 36.683440982882594,
        "gradePct": 0.22070360157425134,
        "smoothedEle": 9.266101756623158,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662007,
        "lng": 119.58171,
        "ele": 8.75,
        "distanceKm": 36.75544288558125,
        "gradePct": 0.24512881071686435,
        "smoothedEle": 9.468066014739186,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661758,
        "lng": 119.582232,
        "ele": 11,
        "distanceKm": 36.815384696482326,
        "gradePct": 0.26302002309665085,
        "smoothedEle": 9.590803197552392,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661516,
        "lng": 119.582513,
        "ele": 12.5,
        "distanceKm": 36.85466770012388,
        "gradePct": 0.2548463015825657,
        "smoothedEle": 9.627764667503175,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661049,
        "lng": 119.582726,
        "ele": 11.75,
        "distanceKm": 36.910945006238954,
        "gradePct": 0.22057545772027892,
        "smoothedEle": 9.603247757449678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660693,
        "lng": 119.582784,
        "ele": 10.999999999999932,
        "distanceKm": 36.95096877840148,
        "gradePct": 0.19336760649574494,
        "smoothedEle": 9.573229928327782,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660337,
        "lng": 119.582842,
        "ele": 10.25,
        "distanceKm": 36.990992552937314,
        "gradePct": 0.17120288561900665,
        "smoothedEle": 9.561216844274224,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659892999999997,
        "lng": 119.5829975,
        "ele": 10.125,
        "distanceKm": 37.04284118922883,
        "gradePct": 0.14928016126268134,
        "smoothedEle": 9.58521200634691,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659449,
        "lng": 119.583153,
        "ele": 10,
        "distanceKm": 37.09468984194433,
        "gradePct": 0.13606915472353798,
        "smoothedEle": 9.664858174787334,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658817,
        "lng": 119.583203,
        "ele": 10,
        "distanceKm": 37.16514940159124,
        "gradePct": 0.13011946841164956,
        "smoothedEle": 9.857698905706599,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658558,
        "lng": 119.583213,
        "ele": 9.75,
        "distanceKm": 37.19396693123401,
        "gradePct": 0.1351023747466787,
        "smoothedEle": 9.971138757750174,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65825,
        "lng": 119.583049,
        "ele": 9.25,
        "distanceKm": 37.23207116547208,
        "gradePct": 0.15193541623931317,
        "smoothedEle": 10.16218577125643,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65792275023987,
        "lng": 119.58273796067853,
        "ele": 8.551432916331391,
        "distanceKm": 37.28031747091733,
        "gradePct": 0.18917235089016735,
        "smoothedEle": 10.46486110740424,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657615,
        "lng": 119.582402,
        "ele": 7.75,
        "distanceKm": 37.32871040122026,
        "gradePct": 0.22097488709915647,
        "smoothedEle": 10.708215819785076,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657216,
        "lng": 119.582218,
        "ele": 7.5,
        "distanceKm": 37.3768728486704,
        "gradePct": 0.2536333938449587,
        "smoothedEle": 10.886258081484824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656663,
        "lng": 119.582288,
        "ele": 8.25,
        "distanceKm": 37.438775665660664,
        "gradePct": 0.3136768484864223,
        "smoothedEle": 11.150759005315507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656298,
        "lng": 119.582542,
        "ele": 9,
        "distanceKm": 37.48690576109019,
        "gradePct": 0.375647839834437,
        "smoothedEle": 11.440682688722578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65613341954231,
        "lng": 119.58288734225059,
        "ele": 9.905134590074134,
        "distanceKm": 37.52655533609966,
        "gradePct": 0.4322132495556843,
        "smoothedEle": 11.73874128279345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656005,
        "lng": 119.583253,
        "ele": 10.75,
        "distanceKm": 37.566441808566495,
        "gradePct": 0.4883955232651637,
        "smoothedEle": 12.063443195419934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655863,
        "lng": 119.583741,
        "ele": 11.5,
        "distanceKm": 37.61859309550036,
        "gradePct": 0.558372277099953,
        "smoothedEle": 12.522140362094436,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655872,
        "lng": 119.584125,
        "ele": 12.5,
        "distanceKm": 37.65771690038814,
        "gradePct": 0.6102001404738274,
        "smoothedEle": 12.888357599528597,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65594894760695,
        "lng": 119.5845136824629,
        "ele": 13.736504385274056,
        "distanceKm": 37.69821888598701,
        "gradePct": 0.6589984406401367,
        "smoothedEle": 13.2874494121248,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656043,
        "lng": 119.584898,
        "ele": 14.75,
        "distanceKm": 37.738735199286644,
        "gradePct": 0.6942181005559707,
        "smoothedEle": 13.67508338561321,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655966,
        "lng": 119.585449,
        "ele": 15.75,
        "distanceKm": 37.79550473559545,
        "gradePct": 0.7410405057760663,
        "smoothedEle": 14.246436205675586,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65576,
        "lng": 119.585888,
        "ele": 16,
        "distanceKm": 37.84574348136993,
        "gradePct": 0.7947688016378,
        "smoothedEle": 14.745026065657473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655537,
        "lng": 119.586138,
        "ele": 16,
        "distanceKm": 37.8812853952577,
        "gradePct": 0.8316058122403821,
        "smoothedEle": 15.063141254753548,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65524,
        "lng": 119.586382,
        "ele": 16,
        "distanceKm": 37.922616524578096,
        "gradePct": 0.8654222110025382,
        "smoothedEle": 15.408824612116659,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6549335,
        "lng": 119.58664350000001,
        "ele": 16.875,
        "distanceKm": 37.96587068973065,
        "gradePct": 0.8836228854107354,
        "smoothedEle": 15.732087095468515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654627,
        "lng": 119.586905,
        "ele": 17.75,
        "distanceKm": 38.00912489331198,
        "gradePct": 0.8798388277197191,
        "smoothedEle": 16.006905182856343,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654254333333334,
        "lng": 119.58722833333333,
        "ele": 18.416666666666636,
        "distanceKm": 38.06205604362036,
        "gradePct": 0.8469259216526556,
        "smoothedEle": 16.262369815219525,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653881666666667,
        "lng": 119.58755166666667,
        "ele": 19.083333333333364,
        "distanceKm": 38.11498725230437,
        "gradePct": 0.7951455642016421,
        "smoothedEle": 16.466152953149233,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653509,
        "lng": 119.587875,
        "ele": 19.75,
        "distanceKm": 38.16791851936143,
        "gradePct": 0.7308530454306069,
        "smoothedEle": 16.643145863941804,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653017,
        "lng": 119.588101,
        "ele": 19,
        "distanceKm": 38.22727198091552,
        "gradePct": 0.6401511123630925,
        "smoothedEle": 16.76616626192781,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652493,
        "lng": 119.588223,
        "ele": 18.75,
        "distanceKm": 38.28684850955601,
        "gradePct": 0.5317406151824298,
        "smoothedEle": 16.818019331693673,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652151500000002,
        "lng": 119.588252,
        "ele": 17.625,
        "distanceKm": 38.324936337341136,
        "gradePct": 0.45852899160460475,
        "smoothedEle": 16.83117241651962,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65181,
        "lng": 119.588281,
        "ele": 16.5,
        "distanceKm": 38.36302416572463,
        "gradePct": 0.38857417488044277,
        "smoothedEle": 16.842566387196506,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6513725,
        "lng": 119.58838025,
        "ele": 16.062500000000018,
        "distanceKm": 38.41271125618109,
        "gradePct": 0.30786940756289527,
        "smoothedEle": 16.86532643153615,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650935,
        "lng": 119.58847949999999,
        "ele": 15.625000000000032,
        "distanceKm": 38.462398353515376,
        "gradePct": 0.23367606023327347,
        "smoothedEle": 16.874516692835066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6504975,
        "lng": 119.58857875,
        "ele": 15.187499999999984,
        "distanceKm": 38.512085457727984,
        "gradePct": 0.1647703076264122,
        "smoothedEle": 16.845045462036282,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65006,
        "lng": 119.588678,
        "ele": 14.75,
        "distanceKm": 38.561772568818526,
        "gradePct": 0.10510893583208301,
        "smoothedEle": 16.7865463437614,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64947,
        "lng": 119.588939,
        "ele": 15.25,
        "distanceKm": 38.63255932220266,
        "gradePct": 0.028776097307715534,
        "smoothedEle": 16.668791371867982,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64918180995111,
        "lng": 119.58913325670004,
        "ele": 15.75,
        "distanceKm": 38.670220993537136,
        "gradePct": -0.016087366680962133,
        "smoothedEle": 16.567481309727313,
        "gradeBand": "descent"
      },
      {
        "lat": 23.648935,
        "lng": 119.589386,
        "ele": 15.75,
        "distanceKm": 38.70784958803924,
        "gradePct": -0.05413696637981716,
        "smoothedEle": 16.455225134289293,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64866555044102,
        "lng": 119.58973135428076,
        "ele": 15.933049972134251,
        "distanceKm": 38.75405667640809,
        "gradePct": -0.08913235961135371,
        "smoothedEle": 16.343816810456637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64839610088204,
        "lng": 119.59007670856153,
        "ele": 16.116099944268473,
        "distanceKm": 38.80026381992671,
        "gradePct": -0.11478471406630676,
        "smoothedEle": 16.248728546310332,
        "gradeBand": "descent"
      },
      {
        "lat": 23.648126651323057,
        "lng": 119.59042206284228,
        "ele": 16.299149916402726,
        "distanceKm": 38.84647101859236,
        "gradePct": -0.1263470457942347,
        "smoothedEle": 16.20587928564451,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647857201764072,
        "lng": 119.59076741712303,
        "ele": 16.48219988853695,
        "distanceKm": 38.89267827240584,
        "gradePct": -0.1264764990893866,
        "smoothedEle": 16.223767476071306,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647588,
        "lng": 119.591113,
        "ele": 16.5,
        "distanceKm": 38.93888545538146,
        "gradePct": -0.1210546036711861,
        "smoothedEle": 16.264894664588464,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647326999999997,
        "lng": 119.59143725000001,
        "ele": 16.687500000000014,
        "distanceKm": 38.982852341172624,
        "gradePct": -0.1071134852867722,
        "smoothedEle": 16.32681726151674,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647066,
        "lng": 119.5917615,
        "ele": 16.875,
        "distanceKm": 39.0268192764496,
        "gradePct": -0.08343109374383814,
        "smoothedEle": 16.410543132428643,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646805,
        "lng": 119.59208575,
        "ele": 17.062499999999986,
        "distanceKm": 39.070786261213264,
        "gradePct": -0.05119395208488058,
        "smoothedEle": 16.515582152262606,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646544,
        "lng": 119.59241,
        "ele": 17.25,
        "distanceKm": 39.114753295464496,
        "gradePct": -0.023317886002200083,
        "smoothedEle": 16.581822571110983,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646336499999997,
        "lng": 119.59274450000001,
        "ele": 16.875,
        "distanceKm": 39.15590241841172,
        "gradePct": -0.003178094191044067,
        "smoothedEle": 16.59010786906633,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646129,
        "lng": 119.593079,
        "ele": 16.5,
        "distanceKm": 39.19705158609317,
        "gradePct": 0.011152585160164818,
        "smoothedEle": 16.54320139191601,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645933499999998,
        "lng": 119.593502,
        "ele": 16.625,
        "distanceKm": 39.24531141329133,
        "gradePct": 0.014179527403104686,
        "smoothedEle": 16.435799851026182,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645738,
        "lng": 119.593925,
        "ele": 16.75,
        "distanceKm": 39.29357129795916,
        "gradePct": 0.0037305907666258524,
        "smoothedEle": 16.281153835938227,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645505443469318,
        "lng": 119.59437574746786,
        "ele": 16.791883133888923,
        "distanceKm": 39.346265630627606,
        "gradePct": -0.034633136998714065,
        "smoothedEle": 16.03290406280172,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645255082601988,
        "lng": 119.59481531060091,
        "ele": 16.906412350416684,
        "distanceKm": 39.39898845283382,
        "gradePct": -0.10655878455314004,
        "smoothedEle": 15.696589995670761,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645004721734658,
        "lng": 119.59525487373394,
        "ele": 17.02094156694446,
        "distanceKm": 39.45171134778312,
        "gradePct": -0.196655420053904,
        "smoothedEle": 15.299681444694864,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64475436086733,
        "lng": 119.59569443686698,
        "ele": 17.135470783472222,
        "distanceKm": 39.504434315477056,
        "gradePct": -0.30585972406227774,
        "smoothedEle": 14.83861701622862,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644504,
        "lng": 119.596134,
        "ele": 17.25,
        "distanceKm": 39.557157355912906,
        "gradePct": -0.4253988086921663,
        "smoothedEle": 14.356028067173844,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644332333333335,
        "lng": 119.59653866666667,
        "ele": 16.250000000000053,
        "distanceKm": 39.60258225141058,
        "gradePct": -0.5264633748349812,
        "smoothedEle": 13.931168889150802,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644160666666668,
        "lng": 119.59694333333333,
        "ele": 15.249999999999947,
        "distanceKm": 39.64800719597092,
        "gradePct": -0.6168263026038293,
        "smoothedEle": 13.504386667964896,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643989,
        "lng": 119.597348,
        "ele": 14.25,
        "distanceKm": 39.69343218959623,
        "gradePct": -0.6892728677880549,
        "smoothedEle": 13.10096285061995,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643847,
        "lng": 119.597698,
        "ele": 13.25,
        "distanceKm": 39.73242360269993,
        "gradePct": -0.7394314304759249,
        "smoothedEle": 12.767324332970052,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643286,
        "lng": 119.597598,
        "ele": 12.5,
        "distanceKm": 39.79563021810462,
        "gradePct": -0.809637718499152,
        "smoothedEle": 12.223265406038086,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642927,
        "lng": 119.597559,
        "ele": 10.75,
        "distanceKm": 39.83574643428428,
        "gradePct": -0.8407711149362759,
        "smoothedEle": 11.878605773952946,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642483333333335,
        "lng": 119.59749533333334,
        "ele": 9.74999999999995,
        "distanceKm": 39.88550441922365,
        "gradePct": -0.8661281322998722,
        "smoothedEle": 11.45196275293395,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642039666666665,
        "lng": 119.59743166666667,
        "ele": 8.75000000000005,
        "distanceKm": 39.93526240702889,
        "gradePct": -0.8798300707523213,
        "smoothedEle": 11.024362023322848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.641596,
        "lng": 119.597368,
        "ele": 7.75,
        "distanceKm": 39.98502039769879,
        "gradePct": -0.88251777967407,
        "smoothedEle": 10.595803593258072,
        "gradeBand": "descent"
      },
      {
        "lat": 23.641274,
        "lng": 119.597303,
        "ele": 7.75,
        "distanceKm": 40.02143225799056,
        "gradePct": -0.8803285868405459,
        "smoothedEle": 10.28138709110364,
        "gradeBand": "descent"
      },
      {
        "lat": 23.640772,
        "lng": 119.597252,
        "ele": 7.75,
        "distanceKm": 40.0774934107069,
        "gradePct": -0.8738458102456147,
        "smoothedEle": 9.79659583706449,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64027,
        "lng": 119.597201,
        "ele": 7.75,
        "distanceKm": 40.13355456526917,
        "gradePct": -0.8523899142443763,
        "smoothedEle": 9.37822429235925,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639872500000003,
        "lng": 119.59721350000001,
        "ele": 7.875,
        "distanceKm": 40.17777294620983,
        "gradePct": -0.8282464651313954,
        "smoothedEle": 9.098801799155863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639475,
        "lng": 119.597226,
        "ele": 8,
        "distanceKm": 40.22199132726218,
        "gradePct": -0.797517642362122,
        "smoothedEle": 8.869002157850892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639015454545454,
        "lng": 119.59722418181819,
        "ele": 8.090909090909095,
        "distanceKm": 40.27309085659241,
        "gradePct": -0.7523941935599524,
        "smoothedEle": 8.65530483983237,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63855590909091,
        "lng": 119.59722236363636,
        "ele": 8.181818181818178,
        "distanceKm": 40.32419038592461,
        "gradePct": -0.6973109612232307,
        "smoothedEle": 8.491335091697458,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638096363636365,
        "lng": 119.59722054545455,
        "ele": 8.272727272727273,
        "distanceKm": 40.37528991525956,
        "gradePct": -0.6209733375110432,
        "smoothedEle": 8.434678929410737,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637636818181818,
        "lng": 119.59721872727273,
        "ele": 8.36363636363637,
        "distanceKm": 40.42638944459686,
        "gradePct": -0.526081724008138,
        "smoothedEle": 8.47020417983282,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63717727272727,
        "lng": 119.59721690909092,
        "ele": 8.454545454545451,
        "distanceKm": 40.47748897393652,
        "gradePct": -0.4105423090203004,
        "smoothedEle": 8.60795911976171,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63671772727273,
        "lng": 119.59721509090909,
        "ele": 8.545454545454549,
        "distanceKm": 40.528588503278144,
        "gradePct": -0.28902915623728376,
        "smoothedEle": 8.774357367845376,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63625818181818,
        "lng": 119.59721327272727,
        "ele": 8.63636363636363,
        "distanceKm": 40.579688032622514,
        "gradePct": -0.1707086058600879,
        "smoothedEle": 8.926674847516027,
        "gradeBand": "descent"
      },
      {
        "lat": 23.635798636363635,
        "lng": 119.59721145454546,
        "ele": 8.727272727272727,
        "distanceKm": 40.63078756196924,
        "gradePct": -0.06889665251055277,
        "smoothedEle": 9.054390541109543,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63533909090909,
        "lng": 119.59720963636364,
        "ele": 8.818181818181822,
        "distanceKm": 40.68188709131833,
        "gradePct": 0.014691682148969319,
        "smoothedEle": 9.150879303415438,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634879545454545,
        "lng": 119.59720781818181,
        "ele": 8.909090909090905,
        "distanceKm": 40.73298662066938,
        "gradePct": 0.0801806625562275,
        "smoothedEle": 9.223923350194864,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63442,
        "lng": 119.597206,
        "ele": 9,
        "distanceKm": 40.78408615002318,
        "gradePct": 0.13021483328385414,
        "smoothedEle": 9.271096969057291,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634096,
        "lng": 119.597192,
        "ele": 9,
        "distanceKm": 40.82014157259753,
        "gradePct": 0.1559130467501511,
        "smoothedEle": 9.283892282715978,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6337565,
        "lng": 119.59722300000001,
        "ele": 9.500000000000048,
        "distanceKm": 40.8580241557462,
        "gradePct": 0.16951981415257045,
        "smoothedEle": 9.301421262072935,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633417,
        "lng": 119.597254,
        "ele": 10,
        "distanceKm": 40.89590673957733,
        "gradePct": 0.17561212929869896,
        "smoothedEle": 9.327072738191545,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633042,
        "lng": 119.59744,
        "ele": 11,
        "distanceKm": 40.94170794397984,
        "gradePct": 0.17132353409852924,
        "smoothedEle": 9.368117709398401,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632869,
        "lng": 119.597641,
        "ele": 11.25,
        "distanceKm": 40.969802585157346,
        "gradePct": 0.15963983268065612,
        "smoothedEle": 9.385437191635818,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632758,
        "lng": 119.597921,
        "ele": 11,
        "distanceKm": 41.000881985482216,
        "gradePct": 0.14333867525332736,
        "smoothedEle": 9.400828464550123,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63262,
        "lng": 119.598308,
        "ele": 10.75,
        "distanceKm": 41.04318662009457,
        "gradePct": 0.11782937191035359,
        "smoothedEle": 9.407018294746598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632379,
        "lng": 119.598933,
        "ele": 10.25,
        "distanceKm": 41.11226501170061,
        "gradePct": 0.06889745541600013,
        "smoothedEle": 9.352583451393562,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632225,
        "lng": 119.599254,
        "ele": 9.75,
        "distanceKm": 41.14917759314464,
        "gradePct": 0.04333211590650023,
        "smoothedEle": 9.30577612436486,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632022,
        "lng": 119.599647,
        "ele": 9.5,
        "distanceKm": 41.195137553932604,
        "gradePct": 0.011720614190390322,
        "smoothedEle": 9.22842320265559,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631703,
        "lng": 119.600024,
        "ele": 9,
        "distanceKm": 41.24741717570872,
        "gradePct": -0.023816392133869966,
        "smoothedEle": 9.118163263758168,
        "gradeBand": "descent"
      },
      {
        "lat": 23.631195,
        "lng": 119.600445,
        "ele": 8.5,
        "distanceKm": 41.318340594407026,
        "gradePct": -0.06119492177126737,
        "smoothedEle": 8.977278544452895,
        "gradeBand": "descent"
      },
      {
        "lat": 23.630821272535798,
        "lng": 119.60074564008717,
        "ele": 8.948998003309471,
        "distanceKm": 41.369963622434504,
        "gradePct": -0.08792076459209959,
        "smoothedEle": 8.869902023468912,
        "gradeBand": "descent"
      },
      {
        "lat": 23.630439,
        "lng": 119.601034,
        "ele": 9.25,
        "distanceKm": 41.42163329021794,
        "gradePct": -0.11601813724121576,
        "smoothedEle": 8.770037024972982,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63005,
        "lng": 119.601253,
        "ele": 9.00000000000002,
        "distanceKm": 41.47030273756699,
        "gradePct": -0.14553862519269636,
        "smoothedEle": 8.657991753277473,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629661,
        "lng": 119.601472,
        "ele": 8.75,
        "distanceKm": 41.51897221529426,
        "gradePct": -0.17029408564380547,
        "smoothedEle": 8.552004920101108,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629336,
        "lng": 119.601669,
        "ele": 8,
        "distanceKm": 41.5603091342666,
        "gradePct": -0.18266892122320433,
        "smoothedEle": 8.480180882051055,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628923,
        "lng": 119.60190666666666,
        "ele": 7.583333333333333,
        "distanceKm": 41.61222424807621,
        "gradePct": -0.18594576964354276,
        "smoothedEle": 8.42288672554374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.62851,
        "lng": 119.60214433333334,
        "ele": 7.166666666666667,
        "distanceKm": 41.66413939749528,
        "gradePct": -0.17528119623664934,
        "smoothedEle": 8.404188675209872,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628097,
        "lng": 119.602382,
        "ele": 6.75,
        "distanceKm": 41.716054582521274,
        "gradePct": -0.15328070532597912,
        "smoothedEle": 8.417904775883933,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627759,
        "lng": 119.60262033333333,
        "ele": 6.916666666666676,
        "distanceKm": 41.7607989828054,
        "gradePct": -0.12610680365646978,
        "smoothedEle": 8.461047163404558,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627421,
        "lng": 119.60285866666668,
        "ele": 7.083333333333324,
        "distanceKm": 41.80554341709162,
        "gradePct": -0.0948778651061815,
        "smoothedEle": 8.528309972279212,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627083,
        "lng": 119.603097,
        "ele": 7.25,
        "distanceKm": 41.850287885377305,
        "gradePct": -0.059301384546421324,
        "smoothedEle": 8.614320871148278,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626769999999997,
        "lng": 119.6033555,
        "ele": 8.000000000000062,
        "distanceKm": 41.893932198235646,
        "gradePct": -0.02662154600212183,
        "smoothedEle": 8.690468820719383,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626457,
        "lng": 119.603614,
        "ele": 8.75,
        "distanceKm": 41.93757654906518,
        "gradePct": 0.005922436133258202,
        "smoothedEle": 8.762945136319583,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.626117,
        "lng": 119.6039025,
        "ele": 8.875,
        "distanceKm": 41.98546327663761,
        "gradePct": 0.04781214637661222,
        "smoothedEle": 8.864037593684902,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.625777,
        "lng": 119.604191,
        "ele": 9,
        "distanceKm": 42.03335005103429,
        "gradePct": 0.09247270771980709,
        "smoothedEle": 8.989386572121704,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.625421,
        "lng": 119.604372,
        "ele": 9.25,
        "distanceKm": 42.07701948129829,
        "gradePct": 0.13593981915902056,
        "smoothedEle": 9.141438233855459,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.625056,
        "lng": 119.604533,
        "ele": 9.5,
        "distanceKm": 42.12079462991182,
        "gradePct": 0.18014530118913258,
        "smoothedEle": 9.32052647487335,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.624559,
        "lng": 119.60472,
        "ele": 9.75,
        "distanceKm": 42.17925005152587,
        "gradePct": 0.2359624837187731,
        "smoothedEle": 9.587993360263553,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.62411,
        "lng": 119.6048508,
        "ele": 10,
        "distanceKm": 42.23092432608949,
        "gradePct": 0.28418894020736335,
        "smoothedEle": 9.85318682942249,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.623661000000002,
        "lng": 119.6049816,
        "ele": 10.25,
        "distanceKm": 42.28259861243173,
        "gradePct": 0.33226998148368275,
        "smoothedEle": 10.155167723631193,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.623212,
        "lng": 119.6051124,
        "ele": 10.5,
        "distanceKm": 42.33427291055203,
        "gradePct": 0.38687537504372216,
        "smoothedEle": 10.517912658670852,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.622763,
        "lng": 119.6052432,
        "ele": 10.75,
        "distanceKm": 42.38594722045021,
        "gradePct": 0.4528822508462433,
        "smoothedEle": 10.940948370086666,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.622314,
        "lng": 119.605374,
        "ele": 11,
        "distanceKm": 42.43762154212574,
        "gradePct": 0.5208613368636762,
        "smoothedEle": 11.367346804348216,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6218522326065,
        "lng": 119.60544602283791,
        "ele": 11.338549376550844,
        "distanceKm": 42.48948943244223,
        "gradePct": 0.576828016446768,
        "smoothedEle": 11.758716588248804,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.62138811630325,
        "lng": 119.60549951141896,
        "ele": 11.544274688275408,
        "distanceKm": 42.541383786248645,
        "gradePct": 0.6161871760902154,
        "smoothedEle": 12.098294944585774,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.620924,
        "lng": 119.605553,
        "ele": 11.75,
        "distanceKm": 42.593278142082596,
        "gradePct": 0.633319477340741,
        "smoothedEle": 12.374551327607348,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.620546666666666,
        "lng": 119.60555466666666,
        "ele": 11.833333333333337,
        "distanceKm": 42.635236095933905,
        "gradePct": 0.6344927609244635,
        "smoothedEle": 12.5590682211261,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.620169333333333,
        "lng": 119.60555633333334,
        "ele": 11.916666666666663,
        "distanceKm": 42.6771940497872,
        "gradePct": 0.6288240966687845,
        "smoothedEle": 12.722706463312958,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.619792,
        "lng": 119.605558,
        "ele": 12,
        "distanceKm": 42.71915200364246,
        "gradePct": 0.6146544152545764,
        "smoothedEle": 12.866043098097697,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.619334208121856,
        "lng": 119.60558608827495,
        "ele": 13.002596321790264,
        "distanceKm": 42.770136579401736,
        "gradePct": 0.5890758403135902,
        "smoothedEle": 13.027719680849199,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.618877104060928,
        "lng": 119.60563704413747,
        "ele": 14.501298160895239,
        "distanceKm": 42.821228730970454,
        "gradePct": 0.5493109367008447,
        "smoothedEle": 13.172899381949495,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61842,
        "lng": 119.605688,
        "ele": 16,
        "distanceKm": 42.87232088437953,
        "gradePct": 0.4943674531591771,
        "smoothedEle": 13.301232587859097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617962,
        "lng": 119.6058,
        "ele": 16.75,
        "distanceKm": 42.92451090063506,
        "gradePct": 0.42976411349705934,
        "smoothedEle": 13.407982942458862,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617531984303984,
        "lng": 119.60610062745847,
        "ele": 16.20124180508069,
        "distanceKm": 42.98129493879541,
        "gradePct": 0.3534032922677145,
        "smoothedEle": 13.46390140021507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617114004525288,
        "lng": 119.60642183318973,
        "ele": 15.045011313218025,
        "distanceKm": 43.03813735942334,
        "gradePct": 0.2770684398253046,
        "smoothedEle": 13.462393671071359,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.616696,
        "lng": 119.606743,
        "ele": 14,
        "distanceKm": 43.0949798073762,
        "gradePct": 0.20471015124969866,
        "smoothedEle": 13.405585432421809,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6163135,
        "lng": 119.607003,
        "ele": 13.624999999999973,
        "distanceKm": 43.14508637279693,
        "gradePct": 0.14272010933175175,
        "smoothedEle": 13.311085369236771,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615931,
        "lng": 119.607263,
        "ele": 13.25,
        "distanceKm": 43.19519297909276,
        "gradePct": 0.07879200254316884,
        "smoothedEle": 13.178154363767254,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615591,
        "lng": 119.607419,
        "ele": 13.25,
        "distanceKm": 43.23620430076273,
        "gradePct": 0.023494910574805062,
        "smoothedEle": 13.037591987874809,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61513933333333,
        "lng": 119.60753333333332,
        "ele": 13.166666666666663,
        "distanceKm": 43.28776059570025,
        "gradePct": -0.060810589047014224,
        "smoothedEle": 12.773745844437006,
        "gradeBand": "descent"
      },
      {
        "lat": 23.614687666666665,
        "lng": 119.60764766666667,
        "ele": 13.083333333333337,
        "distanceKm": 43.33931689970897,
        "gradePct": -0.16683572002102132,
        "smoothedEle": 12.384154621061565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.614236,
        "lng": 119.607762,
        "ele": 13,
        "distanceKm": 43.3908732127881,
        "gradePct": -0.2933262589516712,
        "smoothedEle": 11.87254854390383,
        "gradeBand": "descent"
      },
      {
        "lat": 23.613840887463944,
        "lng": 119.60789415365915,
        "ele": 12.296982091344994,
        "distanceKm": 43.43682465904545,
        "gradePct": -0.4088001959930779,
        "smoothedEle": 11.376108017663183,
        "gradeBand": "descent"
      },
      {
        "lat": 23.613458,
        "lng": 119.608067,
        "ele": 11.75,
        "distanceKm": 43.48289821157029,
        "gradePct": -0.5135418831100004,
        "smoothedEle": 10.896149458307793,
        "gradeBand": "descent"
      },
      {
        "lat": 23.613058666666667,
        "lng": 119.60828833333333,
        "ele": 11.083333333333366,
        "distanceKm": 43.532700128286564,
        "gradePct": -0.6082195489921247,
        "smoothedEle": 10.421440147130099,
        "gradeBand": "descent"
      },
      {
        "lat": 23.612659333333333,
        "lng": 119.60850966666668,
        "ele": 10.416666666666634,
        "distanceKm": 43.582502076115,
        "gradePct": -0.6830259350004877,
        "smoothedEle": 10.002925979248646,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61226,
        "lng": 119.608731,
        "ele": 9.75,
        "distanceKm": 43.63230405505386,
        "gradePct": -0.7404540713920476,
        "smoothedEle": 9.632922229050005,
        "gradeBand": "descent"
      },
      {
        "lat": 23.611902,
        "lng": 119.6089335,
        "ele": 9.125000000000052,
        "distanceKm": 43.677140835929976,
        "gradePct": -0.7806688744710183,
        "smoothedEle": 9.322701671150776,
        "gradeBand": "descent"
      },
      {
        "lat": 23.611544,
        "lng": 119.609136,
        "ele": 8.5,
        "distanceKm": 43.7219776427375,
        "gradePct": -0.8105638478380485,
        "smoothedEle": 9.033533256066603,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61113,
        "lng": 119.6093565,
        "ele": 7.5,
        "distanceKm": 43.77320182230643,
        "gradePct": -0.8272019252838168,
        "smoothedEle": 8.712242662241627,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610716,
        "lng": 119.609577,
        "ele": 6.5,
        "distanceKm": 43.82442603299635,
        "gradePct": -0.8177775098905918,
        "smoothedEle": 8.407791642390654,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610375,
        "lng": 119.609813,
        "ele": 5.75,
        "distanceKm": 43.869324970471766,
        "gradePct": -0.7879402809258763,
        "smoothedEle": 8.14667569028398,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610019810236018,
        "lng": 119.6100916963975,
        "ele": 5.828011442969357,
        "distanceKm": 43.917968483080024,
        "gradePct": -0.7391146148820725,
        "smoothedEle": 7.884249313127847,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60965455163087,
        "lng": 119.61035502548359,
        "ele": 5.99543837968801,
        "distanceKm": 43.96664516240983,
        "gradePct": -0.6805738136024617,
        "smoothedEle": 7.6625920589795635,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609289293025725,
        "lng": 119.61061835456965,
        "ele": 6.162865316406663,
        "distanceKm": 44.015321882945486,
        "gradePct": -0.6223247498295233,
        "smoothedEle": 7.475464939630758,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608924034420582,
        "lng": 119.61088168365572,
        "ele": 6.330292253125339,
        "distanceKm": 44.063998644686926,
        "gradePct": -0.5659961032865224,
        "smoothedEle": 7.3284403489548025,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608558775815435,
        "lng": 119.61114501274179,
        "ele": 6.497719189844017,
        "distanceKm": 44.11267544763429,
        "gradePct": -0.5114469156992266,
        "smoothedEle": 7.221518368753521,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60819351721029,
        "lng": 119.61140834182787,
        "ele": 6.66514612656267,
        "distanceKm": 44.16135229178753,
        "gradePct": -0.4551725776718165,
        "smoothedEle": 7.156077913625346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607828258605146,
        "lng": 119.61167167091394,
        "ele": 6.832573063281322,
        "distanceKm": 44.21002917714419,
        "gradePct": -0.39574619085137386,
        "smoothedEle": 7.131862179716212,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607463,
        "lng": 119.611935,
        "ele": 7,
        "distanceKm": 44.25870610370522,
        "gradePct": -0.3304239032626553,
        "smoothedEle": 7.151043841515778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607088,
        "lng": 119.612153,
        "ele": 7.25,
        "distanceKm": 44.30595125058719,
        "gradePct": -0.25911242636980014,
        "smoothedEle": 7.222034352241244,
        "gradeBand": "descent"
      },
      {
        "lat": 23.606749,
        "lng": 119.612286,
        "ele": 7.25,
        "distanceKm": 44.34600822704012,
        "gradePct": -0.19172764059075417,
        "smoothedEle": 7.323639218763476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60636535985551,
        "lng": 119.61236855474175,
        "ele": 7.530364505834325,
        "distanceKm": 44.38948850699752,
        "gradePct": -0.11287676858649255,
        "smoothedEle": 7.473511795143455,
        "gradeBand": "descent"
      },
      {
        "lat": 23.605979679927756,
        "lng": 119.61243927737088,
        "ele": 7.640182252917153,
        "distanceKm": 44.432975399384254,
        "gradePct": -0.03739153283819263,
        "smoothedEle": 7.628955190759635,
        "gradeBand": "descent"
      },
      {
        "lat": 23.605594,
        "lng": 119.61251,
        "ele": 7.75,
        "distanceKm": 44.476462295283696,
        "gradePct": 0.03161356257002641,
        "smoothedEle": 7.782920028743822,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.605175833333334,
        "lng": 119.61257333333333,
        "ele": 7.916666666666671,
        "distanceKm": 44.523406021218086,
        "gradePct": 0.09941452234839511,
        "smoothedEle": 7.948120004313823,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.604757666666668,
        "lng": 119.61263666666666,
        "ele": 8.083333333333343,
        "distanceKm": 44.57034974998168,
        "gradePct": 0.16405772367408478,
        "smoothedEle": 8.134778323210075,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6043395,
        "lng": 119.6127,
        "ele": 8.250000000000012,
        "distanceKm": 44.617293481575025,
        "gradePct": 0.22972490964783104,
        "smoothedEle": 8.363934498017777,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603921333333332,
        "lng": 119.61276333333333,
        "ele": 8.416666666666657,
        "distanceKm": 44.664237215996906,
        "gradePct": 0.2934195208411442,
        "smoothedEle": 8.621740328284933,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603503166666666,
        "lng": 119.61282666666666,
        "ele": 8.583333333333329,
        "distanceKm": 44.71118095324787,
        "gradePct": 0.3507655291403717,
        "smoothedEle": 8.886143695069471,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603085,
        "lng": 119.61289,
        "ele": 8.75,
        "distanceKm": 44.75812469332788,
        "gradePct": 0.40135807179467126,
        "smoothedEle": 9.157605089532202,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.602689,
        "lng": 119.61295224999999,
        "ele": 8.937499999999993,
        "distanceKm": 44.80261242984963,
        "gradePct": 0.44084140620840057,
        "smoothedEle": 9.421224474563028,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.602293,
        "lng": 119.6130145,
        "ele": 9.125000000000016,
        "distanceKm": 44.84710016910301,
        "gradePct": 0.4727675261624027,
        "smoothedEle": 9.69124067470225,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.601896999999997,
        "lng": 119.61307675,
        "ele": 9.312500000000007,
        "distanceKm": 44.89158791108717,
        "gradePct": 0.49720096717469014,
        "smoothedEle": 9.967020926738092,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.601501,
        "lng": 119.613139,
        "ele": 9.5,
        "distanceKm": 44.9360756558019,
        "gradePct": 0.5193878176142324,
        "smoothedEle": 10.236870699823367,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.601074940671484,
        "lng": 119.6131667061702,
        "ele": 9.5,
        "distanceKm": 44.98353539580733,
        "gradePct": 0.5426801825162709,
        "smoothedEle": 10.521211936031085,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60064889026838,
        "lng": 119.6131945723738,
        "ele": 9.878618690061712,
        "distanceKm": 45.03099511844393,
        "gradePct": 0.5705226724061655,
        "smoothedEle": 10.83090924217357,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60022292819265,
        "lng": 119.61322398879943,
        "ele": 10.990007673255475,
        "distanceKm": 45.07845475192667,
        "gradePct": 0.5981694660380733,
        "smoothedEle": 11.165190280657008,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.599797,
        "lng": 119.613254,
        "ele": 12,
        "distanceKm": 45.12591449233701,
        "gradePct": 0.6225554139094314,
        "smoothedEle": 11.524056476626955,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5993168,
        "lng": 119.6132418,
        "ele": 12.34999999999998,
        "distanceKm": 45.179324838648355,
        "gradePct": 0.6502453038650138,
        "smoothedEle": 11.957945557432176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5988366,
        "lng": 119.6132296,
        "ele": 12.70000000000001,
        "distanceKm": 45.23273518506604,
        "gradePct": 0.6823452139230582,
        "smoothedEle": 12.422511342368203,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5983564,
        "lng": 119.6132174,
        "ele": 13.04999999999999,
        "distanceKm": 45.28614553158927,
        "gradePct": 0.7186046968205382,
        "smoothedEle": 12.916670650127237,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.597876199999998,
        "lng": 119.6132052,
        "ele": 13.40000000000002,
        "distanceKm": 45.339555878218825,
        "gradePct": 0.7586039340804668,
        "smoothedEle": 13.438470633343998,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.597396,
        "lng": 119.613193,
        "ele": 13.75,
        "distanceKm": 45.39296622495392,
        "gradePct": 0.8022690147923012,
        "smoothedEle": 13.986726453371864,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.596917,
        "lng": 119.613191,
        "ele": 13.5,
        "distanceKm": 45.44622905826668,
        "gradePct": 0.8524271459560034,
        "smoothedEle": 14.559837588986472,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.596495285714287,
        "lng": 119.61317985714285,
        "ele": 14.178571428571459,
        "distanceKm": 45.493135356426684,
        "gradePct": 0.9019397886182347,
        "smoothedEle": 15.093555196824086,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.596073571428573,
        "lng": 119.61316871428572,
        "ele": 14.857142857142811,
        "distanceKm": 45.540041654675015,
        "gradePct": 0.9498544589358282,
        "smoothedEle": 15.643900645157753,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.595651857142858,
        "lng": 119.61315757142857,
        "ele": 15.53571428571427,
        "distanceKm": 45.58694795301175,
        "gradePct": 0.9897876998172788,
        "smoothedEle": 16.178350006801498,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.595230142857144,
        "lng": 119.61314642857143,
        "ele": 16.21428571428573,
        "distanceKm": 45.63385425143685,
        "gradePct": 1.0193181643755398,
        "smoothedEle": 16.685147437814052,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.59480842857143,
        "lng": 119.61313528571428,
        "ele": 16.89285714285719,
        "distanceKm": 45.680760549950314,
        "gradePct": 1.0429115708720311,
        "smoothedEle": 17.184991298366214,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.594386714285715,
        "lng": 119.61312414285715,
        "ele": 17.57142857142854,
        "distanceKm": 45.7276668485521,
        "gradePct": 1.0604427145850832,
        "smoothedEle": 17.68064027834881,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.593965,
        "lng": 119.613113,
        "ele": 18.25,
        "distanceKm": 45.77457314724228,
        "gradePct": 1.0599240089920898,
        "smoothedEle": 18.109221525717228,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5934946,
        "lng": 119.6130974,
        "ele": 18.94999999999996,
        "distanceKm": 45.826903462786085,
        "gradePct": 1.040479801906277,
        "smoothedEle": 18.517260069504783,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5930242,
        "lng": 119.6130818,
        "ele": 19.65000000000002,
        "distanceKm": 45.87923377850304,
        "gradePct": 1.0011712761384728,
        "smoothedEle": 18.851619628428104,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5925538,
        "lng": 119.61306619999999,
        "ele": 20.34999999999998,
        "distanceKm": 45.9315640943928,
        "gradePct": 0.9434825140270189,
        "smoothedEle": 19.119454308304604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5920834,
        "lng": 119.6130506,
        "ele": 21.05000000000004,
        "distanceKm": 45.98389441045605,
        "gradePct": 0.8687172909704906,
        "smoothedEle": 19.331994672036867,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.591613,
        "lng": 119.613035,
        "ele": 21.75,
        "distanceKm": 46.03622472669245,
        "gradePct": 0.7700972454715167,
        "smoothedEle": 19.449603356862504,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.591203,
        "lng": 119.612895,
        "ele": 22.25,
        "distanceKm": 46.0839947182583,
        "gradePct": 0.6660045059466072,
        "smoothedEle": 19.474723442815097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.590778,
        "lng": 119.612578,
        "ele": 22.75,
        "distanceKm": 46.141237971580026,
        "gradePct": 0.5272148036031602,
        "smoothedEle": 19.39990400590448,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.590353,
        "lng": 119.612261,
        "ele": 23.25,
        "distanceKm": 46.19848128395015,
        "gradePct": 0.3686162977735194,
        "smoothedEle": 19.215324051848164,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.59003443325152,
        "lng": 119.61201035581954,
        "ele": 22.1538532218696,
        "distanceKm": 46.24215222501434,
        "gradePct": 0.2413165299096917,
        "smoothedEle": 19.019575317366176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.589717,
        "lng": 119.611758,
        "ele": 21.25,
        "distanceKm": 46.285823509299355,
        "gradePct": 0.1198883300175865,
        "smoothedEle": 18.79638634932605,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.589338666666666,
        "lng": 119.61147249999999,
        "ele": 20.208333333333357,
        "distanceKm": 46.33697238571997,
        "gradePct": -0.017512958795062872,
        "smoothedEle": 18.494029697840528,
        "gradeBand": "descent"
      },
      {
        "lat": 23.588960333333333,
        "lng": 119.611187,
        "ele": 19.166666666666718,
        "distanceKm": 46.38812130985482,
        "gradePct": -0.14958613386482683,
        "smoothedEle": 18.149176724159883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.588582000000002,
        "lng": 119.6109015,
        "ele": 18.125000000000075,
        "distanceKm": 46.4392702817046,
        "gradePct": -0.27778515806904525,
        "smoothedEle": 17.761827313331835,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58820366666667,
        "lng": 119.610616,
        "ele": 17.083333333333282,
        "distanceKm": 46.490419301268524,
        "gradePct": -0.40490723199367695,
        "smoothedEle": 17.322122742714807,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587825333333335,
        "lng": 119.6103305,
        "ele": 16.041666666666643,
        "distanceKm": 46.5415683685448,
        "gradePct": -0.5176706799689278,
        "smoothedEle": 16.864059937472767,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587447,
        "lng": 119.610045,
        "ele": 15,
        "distanceKm": 46.59271748353446,
        "gradePct": -0.6109917850378906,
        "smoothedEle": 16.408363481723697,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5870635,
        "lng": 119.609778,
        "ele": 14,
        "distanceKm": 46.64330167991755,
        "gradePct": -0.6841980044107426,
        "smoothedEle": 15.972259596213961,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58668,
        "lng": 119.609511,
        "ele": 13,
        "distanceKm": 46.69388591907174,
        "gradePct": -0.7384492539276973,
        "smoothedEle": 15.537895447418235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.586199,
        "lng": 119.609171,
        "ele": 13,
        "distanceKm": 46.75761270891317,
        "gradePct": -0.7818638726376494,
        "smoothedEle": 15.031242719204995,
        "gradeBand": "descent"
      },
      {
        "lat": 23.585764,
        "lng": 119.60887166666667,
        "ele": 12.833333333333327,
        "distanceKm": 46.814797737127655,
        "gradePct": -0.7835560401353519,
        "smoothedEle": 14.7073306267101,
        "gradeBand": "descent"
      },
      {
        "lat": 23.585328999999998,
        "lng": 119.60857233333333,
        "ele": 12.666666666666673,
        "distanceKm": 46.871982819278365,
        "gradePct": -0.747249693447333,
        "smoothedEle": 14.521736146045848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.584894,
        "lng": 119.608273,
        "ele": 12.5,
        "distanceKm": 46.929167955362274,
        "gradePct": -0.6820167499418592,
        "smoothedEle": 14.428248134783525,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58450623665106,
        "lng": 119.60799915069718,
        "ele": 12.06982586900002,
        "distanceKm": 46.98052860609576,
        "gradePct": -0.6029719410617567,
        "smoothedEle": 14.392288789827518,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58411488341447,
        "lng": 119.6077313595499,
        "ele": 12.729409975616935,
        "distanceKm": 47.03189422117523,
        "gradePct": -0.5101995244618496,
        "smoothedEle": 14.399698637552271,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58372410147717,
        "lng": 119.60746258660255,
        "ele": 13.355539333543817,
        "distanceKm": 47.083259354568966,
        "gradePct": -0.40918345597160055,
        "smoothedEle": 14.44671033524246,
        "gradeBand": "descent"
      },
      {
        "lat": 23.583334096114694,
        "lng": 119.60719247164661,
        "ele": 14.204148358039104,
        "distanceKm": 47.13462466285634,
        "gradePct": -0.30617689877914533,
        "smoothedEle": 14.516182673172374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582942,
        "lng": 119.606926,
        "ele": 14.5,
        "distanceKm": 47.18598919012315,
        "gradePct": -0.2047741724915131,
        "smoothedEle": 14.581833372942402,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582469,
        "lng": 119.606592,
        "ele": 14.75,
        "distanceKm": 47.24863748680297,
        "gradePct": -0.09491547659943933,
        "smoothedEle": 14.628021837606477,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582171000000002,
        "lng": 119.606418,
        "ele": 15.625,
        "distanceKm": 47.286219817693734,
        "gradePct": -0.05387329654735141,
        "smoothedEle": 14.599837521883952,
        "gradeBand": "descent"
      },
      {
        "lat": 23.581873,
        "lng": 119.606244,
        "ele": 16.5,
        "distanceKm": 47.323802167579665,
        "gradePct": -0.02886663848700586,
        "smoothedEle": 14.533773508548887,
        "gradeBand": "descent"
      },
      {
        "lat": 23.581468,
        "lng": 119.605989,
        "ele": 17.25,
        "distanceKm": 47.37579619451075,
        "gradePct": -0.029411704105999806,
        "smoothedEle": 14.368443402934838,
        "gradeBand": "descent"
      },
      {
        "lat": 23.581164,
        "lng": 119.605792,
        "ele": 17.25,
        "distanceKm": 47.415111793902106,
        "gradePct": -0.05109668389112869,
        "smoothedEle": 14.195744158429408,
        "gradeBand": "descent"
      },
      {
        "lat": 23.580807576428,
        "lng": 119.6055683277875,
        "ele": 17.077146667312583,
        "distanceKm": 47.4608318444356,
        "gradePct": -0.08136399391185342,
        "smoothedEle": 13.99925919552516,
        "gradeBand": "descent"
      },
      {
        "lat": 23.580451152855996,
        "lng": 119.605344655575,
        "ele": 16.904293334625166,
        "distanceKm": 47.50655192582751,
        "gradePct": -0.11433019709671406,
        "smoothedEle": 13.82439184946161,
        "gradeBand": "descent"
      },
      {
        "lat": 23.580094796604197,
        "lng": 119.60512085622955,
        "ele": 16.701518533245412,
        "distanceKm": 47.552272011061724,
        "gradePct": -0.15975129413948538,
        "smoothedEle": 13.619592843577411,
        "gradeBand": "descent"
      },
      {
        "lat": 23.579739,
        "lng": 119.604896,
        "ele": 16.25,
        "distanceKm": 47.59799209246753,
        "gradePct": -0.2135065396730926,
        "smoothedEle": 13.399103882431595,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57935,
        "lng": 119.604639,
        "ele": 15.25,
        "distanceKm": 47.648558476125864,
        "gradePct": -0.2806007364868378,
        "smoothedEle": 13.130988257955956,
        "gradeBand": "descent"
      },
      {
        "lat": 23.579057,
        "lng": 119.60443950000001,
        "ele": 14.375,
        "distanceKm": 47.68696196139587,
        "gradePct": -0.3267016872398923,
        "smoothedEle": 12.949042128014492,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578764,
        "lng": 119.60424,
        "ele": 13.5,
        "distanceKm": 47.72536547069019,
        "gradePct": -0.3650817836088137,
        "smoothedEle": 12.785455251264093,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578436,
        "lng": 119.604034,
        "ele": 12.249999999999892,
        "distanceKm": 47.76744807274658,
        "gradePct": -0.3971841824552651,
        "smoothedEle": 12.627994203352172,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578108,
        "lng": 119.603828,
        "ele": 11,
        "distanceKm": 47.80953070097018,
        "gradePct": -0.41747412583069765,
        "smoothedEle": 12.471489931249838,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5778095,
        "lng": 119.60363,
        "ele": 9.624999999999872,
        "distanceKm": 47.84837483984019,
        "gradePct": -0.4227510221691727,
        "smoothedEle": 12.341882451329088,
        "gradeBand": "descent"
      },
      {
        "lat": 23.577511,
        "lng": 119.603432,
        "ele": 8.25,
        "distanceKm": 47.88721900254394,
        "gradePct": -0.4206043853096563,
        "smoothedEle": 12.215245201625352,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57721329733021,
        "lng": 119.6032523874677,
        "ele": 8.085390372104637,
        "distanceKm": 47.92504595619586,
        "gradePct": -0.40269202797311043,
        "smoothedEle": 12.139591294321507,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576917,
        "lng": 119.60307,
        "ele": 8.25,
        "distanceKm": 47.962874408101484,
        "gradePct": -0.37865520483615467,
        "smoothedEle": 12.098170899875385,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576357,
        "lng": 119.602674,
        "ele": 8.25,
        "distanceKm": 48.03707815471104,
        "gradePct": -0.3157524208412827,
        "smoothedEle": 12.108890251076344,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5760095,
        "lng": 119.6024495,
        "ele": 8.5,
        "distanceKm": 48.08198413977506,
        "gradePct": -0.25937222536764465,
        "smoothedEle": 12.179442461952288,
        "gradeBand": "descent"
      },
      {
        "lat": 23.575662,
        "lng": 119.602225,
        "ele": 8.75,
        "distanceKm": 48.126890155693054,
        "gradePct": -0.20073623732034881,
        "smoothedEle": 12.242197930535186,
        "gradeBand": "descent"
      },
      {
        "lat": 23.575241333333334,
        "lng": 119.601945,
        "ele": 9.833333333333286,
        "distanceKm": 48.181683406427105,
        "gradePct": -0.1268659462138256,
        "smoothedEle": 12.339720873168242,
        "gradeBand": "descent"
      },
      {
        "lat": 23.574820666666668,
        "lng": 119.601665,
        "ele": 10.916666666666714,
        "distanceKm": 48.23647670477506,
        "gradePct": -0.05690958873493379,
        "smoothedEle": 12.45933225098401,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5744,
        "lng": 119.601385,
        "ele": 12,
        "distanceKm": 48.29127005073622,
        "gradePct": 0.011731392784169615,
        "smoothedEle": 12.598057809807383,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573966,
        "lng": 119.60105899999999,
        "ele": 13.625000000000101,
        "distanceKm": 48.34985975818194,
        "gradePct": 0.08656243525916914,
        "smoothedEle": 12.769853592016357,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573532,
        "lng": 119.600733,
        "ele": 15.25,
        "distanceKm": 48.40844952789844,
        "gradePct": 0.1517304745204836,
        "smoothedEle": 12.931436523518762,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573155,
        "lng": 119.60048433333334,
        "ele": 16.24999999999995,
        "distanceKm": 48.457435260553375,
        "gradePct": 0.17923048553508777,
        "smoothedEle": 13.000278940999014,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572778,
        "lng": 119.60023566666666,
        "ele": 17.25000000000005,
        "distanceKm": 48.50642103085206,
        "gradePct": 0.17752884661662235,
        "smoothedEle": 12.992105806464988,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572401,
        "lng": 119.599987,
        "ele": 18.25,
        "distanceKm": 48.55540683879251,
        "gradePct": 0.15009400151193297,
        "smoothedEle": 12.888156624700592,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572032,
        "lng": 119.59976366666666,
        "ele": 17.5833333333333,
        "distanceKm": 48.60232828234704,
        "gradePct": 0.09930042018255492,
        "smoothedEle": 12.704375190118954,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571663,
        "lng": 119.59954033333334,
        "ele": 16.9166666666667,
        "distanceKm": 48.649249756926714,
        "gradePct": 0.04788259932655165,
        "smoothedEle": 12.521407326892284,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571294,
        "lng": 119.599317,
        "ele": 16.25,
        "distanceKm": 48.696171262532545,
        "gradePct": -0.010272326504687613,
        "smoothedEle": 12.319985597929662,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570788,
        "lng": 119.599078,
        "ele": 15.25,
        "distanceKm": 48.75748230356325,
        "gradePct": -0.088778193343747,
        "smoothedEle": 12.068623169386452,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5704595,
        "lng": 119.59898050000001,
        "ele": 14.125,
        "distanceKm": 48.79533739750337,
        "gradePct": -0.12868105941247948,
        "smoothedEle": 11.966578720432983,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570131,
        "lng": 119.598883,
        "ele": 13,
        "distanceKm": 48.83319249796817,
        "gradePct": -0.162583691912317,
        "smoothedEle": 11.908063664571811,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569748292970715,
        "lng": 119.59878122508704,
        "ele": 11.571279131684578,
        "distanceKm": 48.876993564546844,
        "gradePct": -0.19936957751017273,
        "smoothedEle": 11.84783719802613,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56936714492596,
        "lng": 119.59867211782232,
        "ele": 9.874055013800495,
        "distanceKm": 48.92080990613987,
        "gradePct": -0.24578146710898885,
        "smoothedEle": 11.719899925798739,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568988,
        "lng": 119.598556,
        "ele": 8.75,
        "distanceKm": 48.964598528820126,
        "gradePct": -0.2884411694357496,
        "smoothedEle": 11.556877923163757,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568932500000003,
        "lng": 119.5980405,
        "ele": 6.625,
        "distanceKm": 49.01749904377024,
        "gradePct": -0.33177860087449634,
        "smoothedEle": 11.309704965295763,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568877,
        "lng": 119.597525,
        "ele": 4.5,
        "distanceKm": 49.07039958076896,
        "gradePct": -0.35412274526905346,
        "smoothedEle": 11.05881947852827,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568832,
        "lng": 119.597127,
        "ele": 4.75,
        "distanceKm": 49.111270883734306,
        "gradePct": -0.3492152576973293,
        "smoothedEle": 10.92342769005651,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568817,
        "lng": 119.596711,
        "ele": 5,
        "distanceKm": 49.15370208015688,
        "gradePct": -0.33712855062417296,
        "smoothedEle": 10.816651916763892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568846999999998,
        "lng": 119.5962695,
        "ele": 6,
        "distanceKm": 49.198822900932726,
        "gradePct": -0.3177234484494054,
        "smoothedEle": 10.720497193544741,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568877,
        "lng": 119.595828,
        "ele": 7,
        "distanceKm": 49.24394371146007,
        "gradePct": -0.295351212174398,
        "smoothedEle": 10.647372500902225,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568925,
        "lng": 119.595307,
        "ele": 10.25,
        "distanceKm": 49.29731117152286,
        "gradePct": -0.27615476320659554,
        "smoothedEle": 10.582753915349926,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568922462692104,
        "lng": 119.59488008782903,
        "ele": 12.25,
        "distanceKm": 49.34082261500898,
        "gradePct": -0.27076389447314353,
        "smoothedEle": 10.543752781274977,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568895,
        "lng": 119.594454,
        "ele": 12.25,
        "distanceKm": 49.38435636747825,
        "gradePct": -0.2619427538369301,
        "smoothedEle": 10.516625127323275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568836,
        "lng": 119.59394,
        "ele": 12.25,
        "distanceKm": 49.43715203531683,
        "gradePct": -0.22348561163071107,
        "smoothedEle": 10.541631255114382,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568833,
        "lng": 119.593456,
        "ele": 12.25,
        "distanceKm": 49.48648206894675,
        "gradePct": -0.16562904689168256,
        "smoothedEle": 10.626483790999512,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568908887046778,
        "lng": 119.59285179067255,
        "ele": 13.254983450982834,
        "distanceKm": 49.548638050571476,
        "gradePct": -0.06069909279527223,
        "smoothedEle": 10.858530000845263,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568995,
        "lng": 119.592249,
        "ele": 14.75,
        "distanceKm": 49.61081567842955,
        "gradePct": 0.06946790616384496,
        "smoothedEle": 11.272275150788921,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56906138637115,
        "lng": 119.59173174197822,
        "ele": 14.432682765483861,
        "distanceKm": 49.66404844593863,
        "gradePct": 0.1627128324432597,
        "smoothedEle": 11.60816745661557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569095,
        "lng": 119.59121,
        "ele": 14.25,
        "distanceKm": 49.71735508368028,
        "gradePct": 0.24034323688401107,
        "smoothedEle": 11.892179339312305,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569116,
        "lng": 119.590551,
        "ele": 13.5,
        "distanceKm": 49.78456029509143,
        "gradePct": 0.3165132123553388,
        "smoothedEle": 12.180759040529328,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569107,
        "lng": 119.589856,
        "ele": 11.5,
        "distanceKm": 49.855401077348034,
        "gradePct": 0.35746427532081065,
        "smoothedEle": 12.321989724329201,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569083117606926,
        "lng": 119.58940029333506,
        "ele": 10.861490758077132,
        "distanceKm": 49.90192211414015,
        "gradePct": 0.3809217899421192,
        "smoothedEle": 12.429553913182486,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569059745071286,
        "lng": 119.58894452889004,
        "ele": 10.657660505384744,
        "distanceKm": 49.948445837107094,
        "gradePct": 0.3982202719367404,
        "smoothedEle": 12.552159070674385,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569036372535642,
        "lng": 119.58848876444502,
        "ele": 10.453830252692356,
        "distanceKm": 49.99496956832745,
        "gradePct": 0.40484098397022594,
        "smoothedEle": 12.682374994469335,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569013,
        "lng": 119.588033,
        "ele": 10.25,
        "distanceKm": 50.041493307801154,
        "gradePct": 0.3928585123561099,
        "smoothedEle": 12.796149176785239,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569002,
        "lng": 119.587657,
        "ele": 11.5,
        "distanceKm": 50.07983440173545,
        "gradePct": 0.3620363899822685,
        "smoothedEle": 12.87630010480284,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5690805,
        "lng": 119.587172,
        "ele": 11.25,
        "distanceKm": 50.1300299289447,
        "gradePct": 0.30408640187328473,
        "smoothedEle": 12.913946750209782,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569159,
        "lng": 119.586687,
        "ele": 11,
        "distanceKm": 50.18022542705969,
        "gradePct": 0.2825760722319547,
        "smoothedEle": 13.107236987814687,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569225,
        "lng": 119.58617,
        "ele": 11.5,
        "distanceKm": 50.23342614277158,
        "gradePct": 0.2847037743075603,
        "smoothedEle": 13.384707463755124,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569305115476563,
        "lng": 119.58566574376515,
        "ele": 12.594013860644957,
        "distanceKm": 50.285585755855095,
        "gradePct": 0.3170341784382696,
        "smoothedEle": 13.767974327492286,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569385230953127,
        "lng": 119.5851614875303,
        "ele": 13.688027721289911,
        "distanceKm": 50.33774533804932,
        "gradePct": 0.3954740842081105,
        "smoothedEle": 14.264161040352562,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569465376898066,
        "lng": 119.5846572370643,
        "ele": 14.755451601069012,
        "distanceKm": 50.389904888778645,
        "gradePct": 0.48691342755949774,
        "smoothedEle": 14.836335275180232,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56954653267355,
        "lng": 119.58415317779823,
        "ele": 14.94158870080176,
        "distanceKm": 50.44206451786662,
        "gradePct": 0.5730530496876894,
        "smoothedEle": 15.40060746524582,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56962768844903,
        "lng": 119.58364911853215,
        "ele": 15.127725800534506,
        "distanceKm": 50.4942241156884,
        "gradePct": 0.6502641647776591,
        "smoothedEle": 15.931609360511423,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569708844224518,
        "lng": 119.58314505926607,
        "ele": 15.313862900267253,
        "distanceKm": 50.54638368224395,
        "gradePct": 0.7288872626319943,
        "smoothedEle": 16.45080867373374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56979,
        "lng": 119.582641,
        "ele": 15.5,
        "distanceKm": 50.59854321753304,
        "gradePct": 0.8012762473056739,
        "smoothedEle": 16.896712953179406,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569965,
        "lng": 119.581995,
        "ele": 18.5,
        "distanceKm": 50.6671979420392,
        "gradePct": 0.8832869067278917,
        "smoothedEle": 17.473505953433765,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57016734129979,
        "lng": 119.58165067242332,
        "ele": 19.58552199457464,
        "distanceKm": 50.708884375733184,
        "gradePct": 0.9161048127449867,
        "smoothedEle": 17.837232952847337,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570369682599576,
        "lng": 119.58130634484665,
        "ele": 20.671043989149094,
        "distanceKm": 50.75057076390921,
        "gradePct": 0.9340920328013791,
        "smoothedEle": 18.181145655299545,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570572,
        "lng": 119.580962,
        "ele": 22.25,
        "distanceKm": 50.79225715410339,
        "gradePct": 0.9301466947610433,
        "smoothedEle": 18.482171867299346,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570855,
        "lng": 119.580497,
        "ele": 22.5,
        "distanceKm": 50.849145001981825,
        "gradePct": 0.8842874117896348,
        "smoothedEle": 18.810648907765767,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571126,
        "lng": 119.579971,
        "ele": 21.625000000000053,
        "distanceKm": 50.91064244481626,
        "gradePct": 0.7929085860823495,
        "smoothedEle": 19.02522079327061,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571397,
        "lng": 119.579445,
        "ele": 20.75,
        "distanceKm": 50.97213979121626,
        "gradePct": 0.6939350597177321,
        "smoothedEle": 19.176458957981076,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571604,
        "lng": 119.578964,
        "ele": 20.25,
        "distanceKm": 51.026296705173095,
        "gradePct": 0.6055369136614722,
        "smoothedEle": 19.27854632168485,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571734,
        "lng": 119.578578,
        "ele": 19.75,
        "distanceKm": 51.0682084084911,
        "gradePct": 0.5402242610727093,
        "smoothedEle": 19.33850638890228,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571865,
        "lng": 119.578222,
        "ele": 19.5,
        "distanceKm": 51.10730570946407,
        "gradePct": 0.48161318314027424,
        "smoothedEle": 19.378395710940204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572033,
        "lng": 119.577788,
        "ele": 19.75,
        "distanceKm": 51.15532062244596,
        "gradePct": 0.391267131804139,
        "smoothedEle": 19.330055984408578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5721985,
        "lng": 119.57733,
        "ele": 19.75,
        "distanceKm": 51.205495150152984,
        "gradePct": 0.2867399079215424,
        "smoothedEle": 19.241360453271476,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572364,
        "lng": 119.576872,
        "ele": 19.75,
        "distanceKm": 51.25566962313345,
        "gradePct": 0.19240095808526192,
        "smoothedEle": 19.179970383135732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57237,
        "lng": 119.576431,
        "ele": 19.25,
        "distanceKm": 51.30061974463717,
        "gradePct": 0.10995885481103967,
        "smoothedEle": 19.080252710307512,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572343,
        "lng": 119.5762,
        "ele": 19,
        "distanceKm": 51.32435311357956,
        "gradePct": 0.07006338852572612,
        "smoothedEle": 19.017814607490095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572024,
        "lng": 119.575572,
        "ele": 17.75,
        "distanceKm": 51.39752875442589,
        "gradePct": -0.027797000126279413,
        "smoothedEle": 18.840480568628294,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571828,
        "lng": 119.574999,
        "ele": 17.25,
        "distanceKm": 51.45986137092539,
        "gradePct": -0.06627323786029535,
        "smoothedEle": 18.814896900743175,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571753333333334,
        "lng": 119.57458533333333,
        "ele": 17.000000000000014,
        "distanceKm": 51.50283075140785,
        "gradePct": -0.07568970042687581,
        "smoothedEle": 18.85586381170804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571678666666667,
        "lng": 119.57417166666667,
        "ele": 16.749999999999986,
        "distanceKm": 51.545800155408294,
        "gradePct": -0.07913637086673903,
        "smoothedEle": 18.91076665443721,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571604,
        "lng": 119.573758,
        "ele": 16.5,
        "distanceKm": 51.5887695829295,
        "gradePct": -0.07782903288731546,
        "smoothedEle": 18.97033892083452,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571381,
        "lng": 119.573268,
        "ele": 15.75,
        "distanceKm": 51.644526297871764,
        "gradePct": -0.061905500556937915,
        "smoothedEle": 19.03139582815448,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571159,
        "lng": 119.5728,
        "ele": 17.75,
        "distanceKm": 51.69823289096379,
        "gradePct": -0.04089430180909517,
        "smoothedEle": 19.049726731953715,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570992,
        "lng": 119.572493,
        "ele": 19.25,
        "distanceKm": 51.73461709124848,
        "gradePct": -0.025894569878005314,
        "smoothedEle": 19.076255978870908,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57072061050578,
        "lng": 119.5721040450867,
        "ele": 19.5,
        "distanceKm": 51.78443777466866,
        "gradePct": 0.00477456008412318,
        "smoothedEle": 19.14002370928811,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57043,
        "lng": 119.571731,
        "ele": 19.75,
        "distanceKm": 51.834335087223224,
        "gradePct": 0.052363420089862694,
        "smoothedEle": 19.255441366979362,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570112,
        "lng": 119.571272,
        "ele": 20,
        "distanceKm": 51.89297585109161,
        "gradePct": 0.11151982412054835,
        "smoothedEle": 19.409113207044847,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569884,
        "lng": 119.5708,
        "ele": 21.5,
        "distanceKm": 51.94735307391774,
        "gradePct": 0.14606484045881699,
        "smoothedEle": 19.550354982126944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569652,
        "lng": 119.570318,
        "ele": 21.75,
        "distanceKm": 52.002839436926465,
        "gradePct": 0.1675450869622445,
        "smoothedEle": 19.693600344175227,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569429,
        "lng": 119.569918,
        "ele": 21.25,
        "distanceKm": 52.05055582080412,
        "gradePct": 0.17415420177885535,
        "smoothedEle": 19.78813085719512,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569086,
        "lng": 119.569479,
        "ele": 20.75,
        "distanceKm": 52.10934812441258,
        "gradePct": 0.1659605903596315,
        "smoothedEle": 19.82267659515737,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568741,
        "lng": 119.569077,
        "ele": 20,
        "distanceKm": 52.16547592898781,
        "gradePct": 0.1429703103114363,
        "smoothedEle": 19.753397817870336,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568768499999997,
        "lng": 119.568692,
        "ele": 20.375,
        "distanceKm": 52.20483382346657,
        "gradePct": 0.10389719179741307,
        "smoothedEle": 19.57402570776896,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568796,
        "lng": 119.568307,
        "ele": 20.75,
        "distanceKm": 52.24419170975434,
        "gradePct": 0.04154346978545007,
        "smoothedEle": 19.29622831207005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568818980944993,
        "lng": 119.56779452492664,
        "ele": 21.516031499792195,
        "distanceKm": 52.29648525608277,
        "gradePct": -0.056098542224869874,
        "smoothedEle": 18.887398071853845,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568841,
        "lng": 119.567282,
        "ele": 21.25,
        "distanceKm": 52.34877875147364,
        "gradePct": -0.16356468768723928,
        "smoothedEle": 18.475468466568742,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56887799181247,
        "lng": 119.56683390900568,
        "ele": 20.389002604579375,
        "distanceKm": 52.39463269426538,
        "gradePct": -0.2579194349123504,
        "smoothedEle": 18.123819589353666,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568906,
        "lng": 119.566385,
        "ele": 20,
        "distanceKm": 52.440491008257546,
        "gradePct": -0.3564410255159601,
        "smoothedEle": 17.750326025300204,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568952,
        "lng": 119.565741,
        "ele": 19.5,
        "distanceKm": 52.506325944932684,
        "gradePct": -0.44488713303259575,
        "smoothedEle": 17.476071769694578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5689975,
        "lng": 119.5652855,
        "ele": 18.000000000000117,
        "distanceKm": 52.55302497864455,
        "gradePct": -0.5049808634249459,
        "smoothedEle": 17.26467739119388,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569043,
        "lng": 119.56483,
        "ele": 16.5,
        "distanceKm": 52.59972399636827,
        "gradePct": -0.5526691408406187,
        "smoothedEle": 17.05367585474838,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568836,
        "lng": 119.564548,
        "ele": 14.5,
        "distanceKm": 52.63654595140812,
        "gradePct": -0.5811824457102148,
        "smoothedEle": 16.883193978215463,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56862224542723,
        "lng": 119.56420294887856,
        "ele": 13.04443126338435,
        "distanceKm": 52.678992194736544,
        "gradePct": -0.5968957841840699,
        "smoothedEle": 16.70731902886381,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568407,
        "lng": 119.563859,
        "ele": 11.75,
        "distanceKm": 52.72143871119363,
        "gradePct": -0.5928937513926434,
        "smoothedEle": 16.492355672954535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568169116149726,
        "lng": 119.56348107655663,
        "ele": 11.59711834815234,
        "distanceKm": 52.76816456541231,
        "gradePct": -0.5826207902751307,
        "smoothedEle": 16.19570489834308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567930604643323,
        "lng": 119.56310362625892,
        "ele": 11.700448065771045,
        "distanceKm": 52.814890311648426,
        "gradePct": -0.5889954981376988,
        "smoothedEle": 15.797439121851088,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567691,
        "lng": 119.562727,
        "ele": 12.25,
        "distanceKm": 52.86161619462322,
        "gradePct": -0.6055166100856667,
        "smoothedEle": 15.349436467260173,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567309,
        "lng": 119.562141,
        "ele": 11.75,
        "distanceKm": 52.9349057786058,
        "gradePct": -0.637790877109083,
        "smoothedEle": 14.606860606685476,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 52.9349057786058,
      "elevationGainM": 133.6554014778496,
      "elevationLossM": 133.68743353774053,
      "minimumElevationM": 4,
      "maximumElevationM": 32.5,
      "maximumSustainedGradePct": 1.8704531991544093
    },
    "climbs": [
      {
        "startIndex": 614,
        "endIndex": 1084,
        "startDistanceKm": 29.86785187695365,
        "endDistanceKm": 52.9349057786058,
        "distanceKm": 23.06705390165215,
        "gainM": 50.58309705134096,
        "averageGradePct": 0.21928720185510125,
        "maximumGradePct": 1.0638233048360044
      }
    ]
  },
  "penghu-south-loop": {
    "routeId": "penghu-south-loop",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T04:45:24.862Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "e06ad0e51972e0646fff6fe0569d33abceb2e17926ba0ad92eeba22e865fbbaf",
      "roadPolicyAuditSha256": "625468b314dbf0f94705696b4c395a0773949647ecb453b08b9866d4db0dccf0",
      "elevationAnalysis": {
        "smoothingWindowM": 1000,
        "gradeWindowM": 500,
        "reason": "本線是澎南低海拔道路，SRTM 100/100 公尺視窗回報爬升 200 公尺、最大坡度 5.14%；500/200、750/300、1000/500 依序為 132/2.84%、107/1.99%、90/1.82%。採 1000/500 抑制海岸像元與聚落短波，仍保留 3.5 至 34.25 公尺地形；僅供行程規劃，並非道路測量。",
        "referenceUrl": "https://www.penghu-nsa.gov.tw/ChiHoOneLer/tour/ThematicTours/BikeRoutes/SouthPenghuCoast.htm",
        "referenceLabel": "澎湖國家風景區澎南自行車官方路線"
      },
      "reviewedAt": "2026-08-01T04:50:06.715Z",
      "reviewerNote": "研究景點版曾導入多段 service、pedestrian 與 footway；核准版移除休憩園區、沙灘、公園及鎖港景點錨點，固定縣道 201、204 與澎 20 主線。raw 的 service、track、footway、path、steps、pedestrian、機場／私人／權限禁制、route=ferry 與非法逆向單行均為 0。live OSM 五窗 5/5 在 0.06 公尺內命中縣道 201、204 等合法公共道路；其中共點的 track/service 候選未被軌跡採用。路線不進沙灘、木棧、海堤或澎湖機場服務道路，海風與縣道車流須於出發前評估。"
    },
    "waypoints": [
      {
        "name": "澎湖遊客中心外縣道204主線",
        "lat": 23.5555178,
        "lng": 119.6063112,
        "role": "start"
      },
      {
        "name": "風櫃外縣道201主線",
        "lat": 23.5401844,
        "lng": 119.5447071,
        "role": "via"
      },
      {
        "name": "嵵裡外縣道201主線",
        "lat": 23.5271149,
        "lng": 119.5687699,
        "role": "via"
      },
      {
        "name": "縣道201與204主線路口",
        "lat": 23.5525327,
        "lng": 119.6107026,
        "role": "via"
      },
      {
        "name": "隘門外澎20主線",
        "lat": 23.5567613,
        "lng": 119.639182,
        "role": "via"
      },
      {
        "name": "澎湖遊客中心外縣道204主線",
        "lat": 23.5555178,
        "lng": 119.6063112,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.555518,
        "lng": 119.606311,
        "ele": 24,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 21.032328162437857,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.555199,
        "lng": 119.606707,
        "ele": 23.75,
        "distanceKm": 0.05373521292870027,
        "gradePct": -0.6811108784699668,
        "smoothedEle": 20.66633178161148,
        "gradeBand": "descent"
      },
      {
        "lat": 23.554904937243343,
        "lng": 119.60707462697165,
        "ele": 23.348584353522774,
        "distanceKm": 0.10346795600730753,
        "gradePct": -0.5860131886754832,
        "smoothedEle": 20.425992294182088,
        "gradeBand": "descent"
      },
      {
        "lat": 23.554594,
        "lng": 119.607426,
        "ele": 23,
        "distanceKm": 0.15324907522231002,
        "gradePct": -0.561820920864614,
        "smoothedEle": 20.17134279680737,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5543619810192,
        "lng": 119.6077468498898,
        "ele": 21.967962038399058,
        "distanceKm": 0.19490458750541095,
        "gradePct": -0.5664769450354848,
        "smoothedEle": 19.92823860940319,
        "gradeBand": "descent"
      },
      {
        "lat": 23.554128,
        "lng": 119.608066,
        "ele": 21.5,
        "distanceKm": 0.23656017132706442,
        "gradePct": -0.5787598582280312,
        "smoothedEle": 19.66321285024135,
        "gradeBand": "descent"
      },
      {
        "lat": 23.553840934636636,
        "lng": 119.60851920137726,
        "ele": 20.75084107780164,
        "distanceKm": 0.2927108176517738,
        "gradePct": -0.5700696120343997,
        "smoothedEle": 19.36367273986767,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55356346731832,
        "lng": 119.60897960068864,
        "ele": 19.62542053890082,
        "distanceKm": 0.34887338229990117,
        "gradePct": -0.5379206503443351,
        "smoothedEle": 19.15566619549195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.553286,
        "lng": 119.60944,
        "ele": 18.5,
        "distanceKm": 0.40503602972899216,
        "gradePct": -0.48480418083891696,
        "smoothedEle": 19.068696556407744,
        "gradeBand": "descent"
      },
      {
        "lat": 23.553053,
        "lng": 119.60984450000001,
        "ele": 17.625,
        "distanceKm": 0.45373164916337194,
        "gradePct": -0.4365982608115242,
        "smoothedEle": 19.051343673439128,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55282,
        "lng": 119.610249,
        "ele": 16.75,
        "distanceKm": 0.5024273304830237,
        "gradePct": -0.39304254124189264,
        "smoothedEle": 19.050582644252103,
        "gradeBand": "descent"
      },
      {
        "lat": 23.552472,
        "lng": 119.610523,
        "ele": 17.75,
        "distanceKm": 0.5501496318320933,
        "gradePct": -0.37028554688567966,
        "smoothedEle": 18.839325830088434,
        "gradeBand": "descent"
      },
      {
        "lat": 23.552114,
        "lng": 119.610601,
        "ele": 17.75,
        "distanceKm": 0.5907436912920179,
        "gradePct": -0.36237828885390333,
        "smoothedEle": 18.67559239592995,
        "gradeBand": "descent"
      },
      {
        "lat": 23.551596,
        "lng": 119.610488,
        "ele": 16.75,
        "distanceKm": 0.6494831446510958,
        "gradePct": -0.3433173029675167,
        "smoothedEle": 18.474020459678727,
        "gradeBand": "descent"
      },
      {
        "lat": 23.551255,
        "lng": 119.610462,
        "ele": 15.75,
        "distanceKm": 0.6874931740160638,
        "gradePct": -0.31998518983150886,
        "smoothedEle": 18.37156613511829,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55088,
        "lng": 119.61047,
        "ele": 15,
        "distanceKm": 0.7291993020954876,
        "gradePct": -0.2821554816877104,
        "smoothedEle": 18.2992675775506,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550467425192945,
        "lng": 119.6105182543634,
        "ele": 15.603179542478777,
        "distanceKm": 0.7753385234665282,
        "gradePct": -0.24135356960644144,
        "smoothedEle": 18.249578783558817,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550055,
        "lng": 119.610568,
        "ele": 16.25,
        "distanceKm": 0.8214776636985562,
        "gradePct": -0.20597768490262777,
        "smoothedEle": 18.22724195433044,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549591,
        "lng": 119.610582,
        "ele": 17.5,
        "distanceKm": 0.8730919132126672,
        "gradePct": -0.17173677570416573,
        "smoothedEle": 18.259479154477006,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549287,
        "lng": 119.610481,
        "ele": 18.5,
        "distanceKm": 0.9084282663774211,
        "gradePct": -0.14451863876787172,
        "smoothedEle": 18.344894525177143,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54885,
        "lng": 119.610121,
        "ele": 19.25,
        "distanceKm": 0.9693202655677932,
        "gradePct": -0.08485435612918764,
        "smoothedEle": 18.626828269709016,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548552833333336,
        "lng": 119.60978916666667,
        "ele": 19.416666666666668,
        "distanceKm": 1.016606915469009,
        "gradePct": -0.0075284079405001595,
        "smoothedEle": 18.95017049779404,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548255666666666,
        "lng": 119.60945733333334,
        "ele": 19.583333333333332,
        "distanceKm": 1.0638936200635967,
        "gradePct": 0.09375963656658044,
        "smoothedEle": 19.252688552114577,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5479585,
        "lng": 119.6091255,
        "ele": 19.75,
        "distanceKm": 1.1111803793504134,
        "gradePct": 0.18274696233775456,
        "smoothedEle": 19.519196102425923,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.547661333333334,
        "lng": 119.60879366666667,
        "ele": 19.916666666666668,
        "distanceKm": 1.1584671933291448,
        "gradePct": 0.2640256384253895,
        "smoothedEle": 19.76993255267327,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.547364166666664,
        "lng": 119.60846183333334,
        "ele": 20.083333333333332,
        "distanceKm": 1.2057540619994767,
        "gradePct": 0.33456649241669684,
        "smoothedEle": 20.012742916804118,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.547067,
        "lng": 119.60813,
        "ele": 20.25,
        "distanceKm": 1.253040985360266,
        "gradePct": 0.3938837465842603,
        "smoothedEle": 20.243010443975713,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.546808,
        "lng": 119.607871,
        "ele": 20.25,
        "distanceKm": 1.292110804449248,
        "gradePct": 0.4288064107896908,
        "smoothedEle": 20.385491059501064,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.546548,
        "lng": 119.607633,
        "ele": 20.25,
        "distanceKm": 1.3298522857096342,
        "gradePct": 0.44889337624984904,
        "smoothedEle": 20.476939452482277,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.546288,
        "lng": 119.607395,
        "ele": 20.25,
        "distanceKm": 1.367593797811021,
        "gradePct": 0.4497018651109165,
        "smoothedEle": 20.504554470076968,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.545867,
        "lng": 119.607136,
        "ele": 22.25,
        "distanceKm": 1.4213387159253652,
        "gradePct": 0.4001714855278586,
        "smoothedEle": 20.405528137422593,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.545274,
        "lng": 119.606875,
        "ele": 23.75,
        "distanceKm": 1.49244264892813,
        "gradePct": 0.2577503421917903,
        "smoothedEle": 20.0736889389043,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.544667,
        "lng": 119.606694,
        "ele": 24,
        "distanceKm": 1.5624145026833753,
        "gradePct": 0.07778936557227781,
        "smoothedEle": 19.632172683943065,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.544193,
        "lng": 119.60657966666668,
        "ele": 22.666666666666668,
        "distanceKm": 1.616394213170561,
        "gradePct": -0.06759163963066825,
        "smoothedEle": 19.20888405071906,
        "gradeBand": "descent"
      },
      {
        "lat": 23.543719,
        "lng": 119.60646533333333,
        "ele": 21.333333333333332,
        "distanceKm": 1.6703739327292284,
        "gradePct": -0.22262956619760174,
        "smoothedEle": 18.71792388802552,
        "gradeBand": "descent"
      },
      {
        "lat": 23.543245,
        "lng": 119.606351,
        "ele": 20,
        "distanceKm": 1.7243536613586106,
        "gradePct": -0.38865681910971756,
        "smoothedEle": 18.16003108619509,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5428215,
        "lng": 119.606302,
        "ele": 19.25,
        "distanceKm": 1.7717089514818896,
        "gradePct": -0.5305306101294512,
        "smoothedEle": 17.658436114081105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.542398,
        "lng": 119.606253,
        "ele": 18.5,
        "distanceKm": 1.8190642433019562,
        "gradePct": -0.6526310252222416,
        "smoothedEle": 17.18764467555056,
        "gradeBand": "descent"
      },
      {
        "lat": 23.541816,
        "lng": 119.60618,
        "ele": 16.5,
        "distanceKm": 1.884206229380921,
        "gradePct": -0.7771056968496047,
        "smoothedEle": 16.58841717233445,
        "gradeBand": "descent"
      },
      {
        "lat": 23.541341,
        "lng": 119.605958,
        "ele": 14.75,
        "distanceKm": 1.9416680157158521,
        "gradePct": -0.8581421521129031,
        "smoothedEle": 16.019941351524135,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54099225,
        "lng": 119.60567775,
        "ele": 13.812500000000002,
        "distanceKm": 1.9898345353856624,
        "gradePct": -0.9149072950957259,
        "smoothedEle": 15.511324424539884,
        "gradeBand": "descent"
      },
      {
        "lat": 23.540643499999998,
        "lng": 119.6053975,
        "ele": 12.874999999999998,
        "distanceKm": 2.038001099990461,
        "gradePct": -0.9552526831648261,
        "smoothedEle": 15.009955696066084,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54029475,
        "lng": 119.60511725,
        "ele": 11.937499999999998,
        "distanceKm": 2.0861677095285205,
        "gradePct": -0.9827990192095055,
        "smoothedEle": 14.531913853440065,
        "gradeBand": "descent"
      },
      {
        "lat": 23.539946,
        "lng": 119.604837,
        "ele": 11,
        "distanceKm": 2.1343343640016443,
        "gradePct": -0.979841872623808,
        "smoothedEle": 14.146504159061012,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5395865,
        "lng": 119.604681,
        "ele": 10.124999999999995,
        "distanceKm": 2.1773561479551944,
        "gradePct": -0.9559337659725479,
        "smoothedEle": 13.866092271977951,
        "gradeBand": "descent"
      },
      {
        "lat": 23.539227,
        "lng": 119.604525,
        "ele": 9.25,
        "distanceKm": 2.220377947976474,
        "gradePct": -0.9200003772013879,
        "smoothedEle": 13.601119104386516,
        "gradeBand": "descent"
      },
      {
        "lat": 23.538830666666666,
        "lng": 119.60435799999999,
        "ele": 9.916666666666668,
        "distanceKm": 2.2676222284216814,
        "gradePct": -0.8722198045328721,
        "smoothedEle": 13.340624329950947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.538434333333335,
        "lng": 119.604191,
        "ele": 10.583333333333332,
        "distanceKm": 2.3148665273518048,
        "gradePct": -0.8184871391171488,
        "smoothedEle": 13.136941353576267,
        "gradeBand": "descent"
      },
      {
        "lat": 23.538038,
        "lng": 119.604024,
        "ele": 11.25,
        "distanceKm": 2.3621108447683796,
        "gradePct": -0.7609946865867137,
        "smoothedEle": 12.98669456042932,
        "gradeBand": "descent"
      },
      {
        "lat": 23.537641666666666,
        "lng": 119.60385699999999,
        "ele": 11.916666666666668,
        "distanceKm": 2.40935518067027,
        "gradePct": -0.6872657493938259,
        "smoothedEle": 12.903287062953785,
        "gradeBand": "descent"
      },
      {
        "lat": 23.537245333333335,
        "lng": 119.60369,
        "ele": 12.583333333333332,
        "distanceKm": 2.4565995350563408,
        "gradePct": -0.5978108262494313,
        "smoothedEle": 12.873217047421926,
        "gradeBand": "descent"
      },
      {
        "lat": 23.536849,
        "lng": 119.603523,
        "ele": 13.25,
        "distanceKm": 2.5038439079281276,
        "gradePct": -0.5031253162723974,
        "smoothedEle": 12.849873424185978,
        "gradeBand": "descent"
      },
      {
        "lat": 23.536452666666666,
        "lng": 119.60335599999999,
        "ele": 13.916666666666668,
        "distanceKm": 2.551088299284495,
        "gradePct": -0.4146208953922244,
        "smoothedEle": 12.806963960580145,
        "gradeBand": "descent"
      },
      {
        "lat": 23.536056333333335,
        "lng": 119.603189,
        "ele": 14.583333333333332,
        "distanceKm": 2.5983327091243074,
        "gradePct": -0.33979162392369416,
        "smoothedEle": 12.735616426626205,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53566,
        "lng": 119.603022,
        "ele": 15.25,
        "distanceKm": 2.645577137449101,
        "gradePct": -0.2843238715020398,
        "smoothedEle": 12.65160547585264,
        "gradeBand": "descent"
      },
      {
        "lat": 23.535296000000002,
        "lng": 119.6029,
        "ele": 14.625000000000004,
        "distanceKm": 2.6879199389371338,
        "gradePct": -0.24313171744013146,
        "smoothedEle": 12.585370829274414,
        "gradeBand": "descent"
      },
      {
        "lat": 23.534932,
        "lng": 119.602778,
        "ele": 14,
        "distanceKm": 2.730262750534447,
        "gradePct": -0.19628200574078464,
        "smoothedEle": 12.565206405974973,
        "gradeBand": "descent"
      },
      {
        "lat": 23.534550725583877,
        "lng": 119.60266374923825,
        "ele": 14.538348130983616,
        "distanceKm": 2.7742294244370322,
        "gradePct": -0.15561541412744617,
        "smoothedEle": 12.534061846674023,
        "gradeBand": "descent"
      },
      {
        "lat": 23.534169862791938,
        "lng": 119.60254787461912,
        "ele": 14.769174065491807,
        "distanceKm": 2.818196162896691,
        "gradePct": -0.1296073292846252,
        "smoothedEle": 12.478315770952493,
        "gradeBand": "descent"
      },
      {
        "lat": 23.533789,
        "lng": 119.602432,
        "ele": 15,
        "distanceKm": 2.86216291054495,
        "gradePct": -0.11769961434594407,
        "smoothedEle": 12.398104569191261,
        "gradeBand": "descent"
      },
      {
        "lat": 23.533258,
        "lng": 119.602284,
        "ele": 14.25,
        "distanceKm": 2.923104801135058,
        "gradePct": -0.12937171242388565,
        "smoothedEle": 12.247677163107214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.532692,
        "lng": 119.602073,
        "ele": 13.5,
        "distanceKm": 2.9896157621719808,
        "gradePct": -0.16699256997416645,
        "smoothedEle": 12.021940754920548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.532224,
        "lng": 119.601781,
        "ele": 11.5,
        "distanceKm": 3.049567918593384,
        "gradePct": -0.21121415314484865,
        "smoothedEle": 11.752274072417434,
        "gradeBand": "descent"
      },
      {
        "lat": 23.531856,
        "lng": 119.601476,
        "ele": 9.75,
        "distanceKm": 3.1009612073509856,
        "gradePct": -0.2516094873242853,
        "smoothedEle": 11.472894943922311,
        "gradeBand": "descent"
      },
      {
        "lat": 23.531411,
        "lng": 119.601115,
        "ele": 8.75,
        "distanceKm": 3.162629101138524,
        "gradePct": -0.30918140896221796,
        "smoothedEle": 11.079024929318882,
        "gradeBand": "descent"
      },
      {
        "lat": 23.531097,
        "lng": 119.600872,
        "ele": 9,
        "distanceKm": 3.205440303287985,
        "gradePct": -0.35300646036543276,
        "smoothedEle": 10.811995008682109,
        "gradeBand": "descent"
      },
      {
        "lat": 23.530753,
        "lng": 119.600561,
        "ele": 9,
        "distanceKm": 3.2551234898763575,
        "gradePct": -0.40760295044008676,
        "smoothedEle": 10.509581116020076,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53042775,
        "lng": 119.6002925,
        "ele": 9.0625,
        "distanceKm": 3.300480850643795,
        "gradePct": -0.4617602785984811,
        "smoothedEle": 10.191975883472638,
        "gradeBand": "descent"
      },
      {
        "lat": 23.530102499999998,
        "lng": 119.60002399999999,
        "ele": 9.125,
        "distanceKm": 3.345838252246643,
        "gradePct": -0.516722118833362,
        "smoothedEle": 9.844276038299276,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52977725,
        "lng": 119.5997555,
        "ele": 9.1875,
        "distanceKm": 3.3911956946829305,
        "gradePct": -0.5731669639170359,
        "smoothedEle": 9.460605966828995,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529452,
        "lng": 119.599487,
        "ele": 9.25,
        "distanceKm": 3.436553177954252,
        "gradePct": -0.62883668366825,
        "smoothedEle": 9.057850316498248,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529171599999998,
        "lng": 119.59912779999999,
        "ele": 9.1,
        "distanceKm": 3.4846488073329396,
        "gradePct": -0.690452703399188,
        "smoothedEle": 8.586534948706566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5288912,
        "lng": 119.5987686,
        "ele": 8.95,
        "distanceKm": 3.532744496126175,
        "gradePct": -0.7271886743592127,
        "smoothedEle": 8.192002983252742,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5286108,
        "lng": 119.5984094,
        "ele": 8.8,
        "distanceKm": 3.5808402443360623,
        "gradePct": -0.726578046038795,
        "smoothedEle": 7.949384308758835,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5283304,
        "lng": 119.5980502,
        "ele": 8.65,
        "distanceKm": 3.628936051959269,
        "gradePct": -0.7002295916102609,
        "smoothedEle": 7.793072933983415,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52805,
        "lng": 119.597691,
        "ele": 8.5,
        "distanceKm": 3.677031918997898,
        "gradePct": -0.6621275402031056,
        "smoothedEle": 7.678551318148166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52770525,
        "lng": 119.59743125,
        "ele": 8.062499999999998,
        "distanceKm": 3.723623959293703,
        "gradePct": -0.6291598724144528,
        "smoothedEle": 7.555514537503942,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5273605,
        "lng": 119.5971715,
        "ele": 7.625,
        "distanceKm": 3.7702160390207755,
        "gradePct": -0.5920795371181006,
        "smoothedEle": 7.44350107811361,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52701575,
        "lng": 119.59691175,
        "ele": 7.187500000000002,
        "distanceKm": 3.8168081581786404,
        "gradePct": -0.5375316872490803,
        "smoothedEle": 7.379155905751123,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526671,
        "lng": 119.596652,
        "ele": 6.75,
        "distanceKm": 3.8634003167668225,
        "gradePct": -0.4686587574658001,
        "smoothedEle": 7.352428051533487,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526424,
        "lng": 119.596414,
        "ele": 5.75,
        "distanceKm": 3.900048729857218,
        "gradePct": -0.4042724045204807,
        "smoothedEle": 7.360632661548223,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526142,
        "lng": 119.595976,
        "ele": 4,
        "distanceKm": 3.954613715586479,
        "gradePct": -0.29792357470955294,
        "smoothedEle": 7.391247360384529,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526037,
        "lng": 119.59541,
        "ele": 4.75,
        "distanceKm": 4.013488061531938,
        "gradePct": -0.1776560572606547,
        "smoothedEle": 7.461684443183274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526006,
        "lng": 119.5949,
        "ele": 6.5,
        "distanceKm": 4.065597931670418,
        "gradePct": -0.08546167435626444,
        "smoothedEle": 7.598965679476626,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526088,
        "lng": 119.594351,
        "ele": 6.5,
        "distanceKm": 4.122307612522413,
        "gradePct": 0.005801013475786654,
        "smoothedEle": 7.843620429532128,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526275,
        "lng": 119.59385900000001,
        "ele": 6.375,
        "distanceKm": 4.176607222067845,
        "gradePct": 0.07947524597719831,
        "smoothedEle": 8.076938798722932,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526462,
        "lng": 119.593367,
        "ele": 6.25,
        "distanceKm": 4.2309067657743675,
        "gradePct": 0.15267063367354847,
        "smoothedEle": 8.301358885644122,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52659273389492,
        "lng": 119.59285192090901,
        "ele": 7.5856488680188905,
        "distanceKm": 4.285395078273845,
        "gradePct": 0.2223472369212393,
        "smoothedEle": 8.534274535230928,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52672386694746,
        "lng": 119.5923369604545,
        "ele": 8.542824434009445,
        "distanceKm": 4.3398835443592585,
        "gradePct": 0.2864308239990921,
        "smoothedEle": 8.798072700485426,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526855,
        "lng": 119.591822,
        "ele": 9.5,
        "distanceKm": 4.394371960039051,
        "gradePct": 0.35266569200263936,
        "smoothedEle": 9.122690243000141,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52699566883414,
        "lng": 119.59134972168472,
        "ele": 9.961209292265428,
        "distanceKm": 4.444998484207091,
        "gradePct": 0.4253435556651558,
        "smoothedEle": 9.51257033453347,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52713633766828,
        "lng": 119.59087744336945,
        "ele": 10.422418584530858,
        "distanceKm": 4.495624959426318,
        "gradePct": 0.5058195111650056,
        "smoothedEle": 9.969410639686169,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527277153927216,
        "lng": 119.59040521648434,
        "ele": 11.748733720323251,
        "distanceKm": 4.546251466550661,
        "gradePct": 0.5718174561284641,
        "smoothedEle": 10.407085520697423,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527418,
        "lng": 119.589933,
        "ele": 13.25,
        "distanceKm": 4.596877941749743,
        "gradePct": 0.6144351281995184,
        "smoothedEle": 10.806088351258321,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527405,
        "lng": 119.589541,
        "ele": 13,
        "distanceKm": 4.6368690027375825,
        "gradePct": 0.6478229597660166,
        "smoothedEle": 11.145303630724507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527195,
        "lng": 119.589066,
        "ele": 12.5,
        "distanceKm": 4.690631770117252,
        "gradePct": 0.7028334278925229,
        "smoothedEle": 11.649069414072,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526898076722674,
        "lng": 119.58865085726966,
        "ele": 12.041785065852132,
        "distanceKm": 4.744310858298016,
        "gradePct": 0.7685743486473928,
        "smoothedEle": 12.201527740390958,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526601789562278,
        "lng": 119.58823517663534,
        "ele": 11.989714895203745,
        "distanceKm": 4.797989830666732,
        "gradePct": 0.8306878747777774,
        "smoothedEle": 12.748689613003096,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52630534217171,
        "lng": 119.5878196324765,
        "ele": 12.367286171402812,
        "distanceKm": 4.851668833215516,
        "gradePct": 0.8859014489432546,
        "smoothedEle": 13.297791410494186,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52600889478114,
        "lng": 119.58740408831767,
        "ele": 12.744857447601873,
        "distanceKm": 4.905347911080703,
        "gradePct": 0.9315737205770563,
        "smoothedEle": 13.865085778498466,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52571244739057,
        "lng": 119.58698854415883,
        "ele": 13.122428723800933,
        "distanceKm": 4.959027064263263,
        "gradePct": 0.9623341583940104,
        "smoothedEle": 14.45083142863237,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.525416,
        "lng": 119.586573,
        "ele": 13.5,
        "distanceKm": 5.012706292760563,
        "gradePct": 0.9872703632683099,
        "smoothedEle": 15.053433527156866,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.525142075105762,
        "lng": 119.58618741019578,
        "ele": 14.241138783106253,
        "distanceKm": 5.062437499970613,
        "gradePct": 1.0106345004043722,
        "smoothedEle": 15.587825133104078,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.524868150211528,
        "lng": 119.58580182039155,
        "ele": 14.982277566212506,
        "distanceKm": 5.112168771858096,
        "gradePct": 1.0300157110924342,
        "smoothedEle": 16.08586797191734,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52459422531729,
        "lng": 119.58541623058733,
        "ele": 15.723416349318759,
        "distanceKm": 5.161900108422835,
        "gradePct": 1.0478909090389563,
        "smoothedEle": 16.6193036648919,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.524320300423057,
        "lng": 119.5850306407831,
        "ele": 16.464555132425026,
        "distanceKm": 5.211631509663688,
        "gradePct": 1.0625321471696507,
        "smoothedEle": 17.177856789849194,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52404637552882,
        "lng": 119.58464505097888,
        "ele": 17.205693915531278,
        "distanceKm": 5.261362975580477,
        "gradePct": 1.075994576134265,
        "smoothedEle": 17.75531669861653,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.523773,
        "lng": 119.584259,
        "ele": 18.25,
        "distanceKm": 5.311094319936063,
        "gradePct": 1.0704660515782656,
        "smoothedEle": 18.235070398499754,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.523382,
        "lng": 119.583819,
        "ele": 19.75,
        "distanceKm": 5.373565785681197,
        "gradePct": 1.0236102912358447,
        "smoothedEle": 18.647255519503165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.522937,
        "lng": 119.583504,
        "ele": 20.75,
        "distanceKm": 5.432556195763517,
        "gradePct": 0.9464023896382042,
        "smoothedEle": 18.893993885732122,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.522426,
        "lng": 119.58326149999999,
        "ele": 21.625000000000007,
        "distanceKm": 5.494522888099598,
        "gradePct": 0.8302885116746551,
        "smoothedEle": 19.00074949664728,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.521915,
        "lng": 119.583019,
        "ele": 22.5,
        "distanceKm": 5.556489618730685,
        "gradePct": 0.6847051860350554,
        "smoothedEle": 18.94743751711581,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52136,
        "lng": 119.582647,
        "ele": 23.75,
        "distanceKm": 5.628925988999093,
        "gradePct": 0.475483320176938,
        "smoothedEle": 18.643028339115176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.521138,
        "lng": 119.5823585,
        "ele": 23.75,
        "distanceKm": 5.667326090797774,
        "gradePct": 0.34098803550779877,
        "smoothedEle": 18.38518520615413,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.520916,
        "lng": 119.58207,
        "ele": 23.75,
        "distanceKm": 5.705726230594093,
        "gradePct": 0.18876406209030067,
        "smoothedEle": 18.055352564981597,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52076053307908,
        "lng": 119.58173691236848,
        "ele": 23.691751955362093,
        "distanceKm": 5.743833401065816,
        "gradePct": 0.029659959411746685,
        "smoothedEle": 17.70007078646766,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.520682,
        "lng": 119.581371,
        "ele": 21.75,
        "distanceKm": 5.782148935304476,
        "gradePct": -0.1261057956941343,
        "smoothedEle": 17.325307959693575,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52056084463711,
        "lng": 119.58088699437445,
        "ele": 19.28899121304094,
        "distanceKm": 5.833302373176616,
        "gradePct": -0.31519227577584275,
        "smoothedEle": 16.805637182567004,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52044016837276,
        "lng": 119.58040284754568,
        "ele": 17.558865559290034,
        "distanceKm": 5.88445574272666,
        "gradePct": -0.48485340456665615,
        "smoothedEle": 16.268537768254053,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520319492108413,
        "lng": 119.5799187007169,
        "ele": 15.828739905539155,
        "distanceKm": 5.935609155943391,
        "gradePct": -0.6445093281944531,
        "smoothedEle": 15.676706854669877,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520198815844065,
        "lng": 119.57943455388813,
        "ele": 14.098614251788277,
        "distanceKm": 5.986762612823805,
        "gradePct": -0.7951921267062267,
        "smoothedEle": 15.011419536842542,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520078139579713,
        "lng": 119.57895040705935,
        "ele": 12.36848859803737,
        "distanceKm": 6.037916113370592,
        "gradePct": -0.9441663681964992,
        "smoothedEle": 14.242585062612163,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519957463315365,
        "lng": 119.57846626023057,
        "ele": 10.638362944286493,
        "distanceKm": 6.089069657581939,
        "gradePct": -1.0854532712117582,
        "smoothedEle": 13.383255647355963,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519836787051016,
        "lng": 119.5779821134018,
        "ele": 8.908237290535585,
        "distanceKm": 6.140223245456343,
        "gradePct": -1.2227067289543874,
        "smoothedEle": 12.453637603805479,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519716,
        "lng": 119.577498,
        "ele": 7.5,
        "distanceKm": 6.191376821337575,
        "gradePct": -1.3327051661005542,
        "smoothedEle": 11.515078982503105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519567,
        "lng": 119.577151,
        "ele": 7.25,
        "distanceKm": 6.230443290091715,
        "gradePct": -1.405826916122064,
        "smoothedEle": 10.79577524225096,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519339,
        "lng": 119.57673,
        "ele": 7.5,
        "distanceKm": 6.28029534598867,
        "gradePct": -1.4864636516383014,
        "smoothedEle": 9.911119590213591,
        "gradeBand": "descent"
      },
      {
        "lat": 23.51932,
        "lng": 119.57637,
        "ele": 8.25,
        "distanceKm": 6.317060836469758,
        "gradePct": -1.527043647878824,
        "smoothedEle": 9.335417667662902,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519317,
        "lng": 119.575786,
        "ele": 9.25,
        "distanceKm": 6.376605016854486,
        "gradePct": -1.558278063187423,
        "smoothedEle": 8.559578390981706,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519323,
        "lng": 119.5753245,
        "ele": 8.625,
        "distanceKm": 6.423663184352411,
        "gradePct": -1.5533918158268385,
        "smoothedEle": 8.047959379332005,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519329,
        "lng": 119.574863,
        "ele": 8,
        "distanceKm": 6.47072134970607,
        "gradePct": -1.5189168194216478,
        "smoothedEle": 7.625463547490728,
        "gradeBand": "descent"
      },
      {
        "lat": 23.51944784280871,
        "lng": 119.57449487808444,
        "ele": 6.889092546471864,
        "distanceKm": 6.510512569883308,
        "gradePct": -1.463057477767276,
        "smoothedEle": 7.339171518652243,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519602,
        "lng": 119.574141,
        "ele": 5.75,
        "distanceKm": 6.550457967888781,
        "gradePct": -1.3815235305326647,
        "smoothedEle": 7.124276544330321,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519993,
        "lng": 119.573777,
        "ele": 5.5,
        "distanceKm": 6.607620949546045,
        "gradePct": -1.2246906737198828,
        "smoothedEle": 6.922668238748473,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520434216164574,
        "lng": 119.57364586454551,
        "ele": 5.4146253551521575,
        "distanceKm": 6.6584712164403586,
        "gradePct": -1.0508994535554654,
        "smoothedEle": 6.86432912892724,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520875432329145,
        "lng": 119.57351472909103,
        "ele": 5.329250710304314,
        "distanceKm": 6.709321471551528,
        "gradePct": -0.8524135418006819,
        "smoothedEle": 6.922608899595738,
        "gradeBand": "descent"
      },
      {
        "lat": 23.521316657552042,
        "lng": 119.57338362990002,
        "ele": 5.266732321376639,
        "distanceKm": 6.760171714696289,
        "gradePct": -0.6408808057160045,
        "smoothedEle": 7.063821880360299,
        "gradeBand": "descent"
      },
      {
        "lat": 23.521758,
        "lng": 119.573253,
        "ele": 5.5,
        "distanceKm": 6.811021969811067,
        "gradePct": -0.44077120632817757,
        "smoothedEle": 7.226122788340217,
        "gradeBand": "descent"
      },
      {
        "lat": 23.522136666666665,
        "lng": 119.57313166666667,
        "ele": 5.833333333333333,
        "distanceKm": 6.854907460719527,
        "gradePct": -0.296765140977989,
        "smoothedEle": 7.358464046777712,
        "gradeBand": "descent"
      },
      {
        "lat": 23.522515333333335,
        "lng": 119.57301033333333,
        "ele": 6.166666666666667,
        "distanceKm": 6.898792941597524,
        "gradePct": -0.1653244889420883,
        "smoothedEle": 7.491727595675348,
        "gradeBand": "descent"
      },
      {
        "lat": 23.522894,
        "lng": 119.572889,
        "ele": 6.5,
        "distanceKm": 6.942678412443356,
        "gradePct": -0.04279513286309627,
        "smoothedEle": 7.66326191680025,
        "gradeBand": "descent"
      },
      {
        "lat": 23.523447,
        "lng": 119.572533,
        "ele": 7,
        "distanceKm": 7.014082311737973,
        "gradePct": 0.14569484471896546,
        "smoothedEle": 8.048441537945761,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5238,
        "lng": 119.57206350000001,
        "ele": 7.5,
        "distanceKm": 7.075985539167678,
        "gradePct": 0.30161564807648844,
        "smoothedEle": 8.542321510696096,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.524153,
        "lng": 119.571594,
        "ele": 8,
        "distanceKm": 7.137888667328919,
        "gradePct": 0.4412984833875015,
        "smoothedEle": 9.09443533722417,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.524578,
        "lng": 119.57129,
        "ele": 9,
        "distanceKm": 7.194403562880722,
        "gradePct": 0.5512481425529048,
        "smoothedEle": 9.661752111191635,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.525125032702736,
        "lng": 119.57117067831462,
        "ele": 10.548759875302714,
        "distanceKm": 7.256435482618243,
        "gradePct": 0.6681330733857208,
        "smoothedEle": 10.394111594471136,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.525672,
        "lng": 119.571051,
        "ele": 11.25,
        "distanceKm": 7.318467402488221,
        "gradePct": 0.8017097670110532,
        "smoothedEle": 11.257124099366674,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526143,
        "lng": 119.570875,
        "ele": 12.25,
        "distanceKm": 7.373828879411795,
        "gradePct": 0.91039921506327,
        "smoothedEle": 11.967917289126587,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526377,
        "lng": 119.570616,
        "ele": 12.5,
        "distanceKm": 7.410900153674076,
        "gradePct": 0.9704891242798441,
        "smoothedEle": 12.391496451034216,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526532,
        "lng": 119.570208,
        "ele": 12.75,
        "distanceKm": 7.45592590340458,
        "gradePct": 1.0232268427142441,
        "smoothedEle": 12.850858103736805,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526677,
        "lng": 119.569686,
        "ele": 13.5,
        "distanceKm": 7.5115335887679,
        "gradePct": 1.0575649965152212,
        "smoothedEle": 13.32251774548695,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526813,
        "lng": 119.569308,
        "ele": 14.25,
        "distanceKm": 7.55293229917388,
        "gradePct": 1.0532845006236742,
        "smoothedEle": 13.624819297564848,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526998,
        "lng": 119.56897,
        "ele": 14.25,
        "distanceKm": 7.593065075733563,
        "gradePct": 1.037201154132682,
        "smoothedEle": 13.880659620109087,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527222,
        "lng": 119.568586,
        "ele": 14.75,
        "distanceKm": 7.639466254576913,
        "gradePct": 1.0092803667338928,
        "smoothedEle": 14.156673557025924,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5274698024334,
        "lng": 119.5681461792945,
        "ele": 16.10670048788092,
        "distanceKm": 7.692096105308516,
        "gradePct": 0.9602332847789431,
        "smoothedEle": 14.439755449086647,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527732,
        "lng": 119.567716,
        "ele": 17.75,
        "distanceKm": 7.744759953561509,
        "gradePct": 0.8828487730742339,
        "smoothedEle": 14.67051216137298,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.528016,
        "lng": 119.567322,
        "ele": 19.75,
        "distanceKm": 7.795855767594279,
        "gradePct": 0.779608246010838,
        "smoothedEle": 14.840583357582714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.528368,
        "lng": 119.56684849999999,
        "ele": 18.37499999999999,
        "distanceKm": 7.858003491807936,
        "gradePct": 0.6662233806475175,
        "smoothedEle": 15.095849986320273,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52872,
        "lng": 119.566375,
        "ele": 17,
        "distanceKm": 7.9201511157196745,
        "gradePct": 0.5789538391843102,
        "smoothedEle": 15.380645801418272,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52884,
        "lng": 119.565955,
        "ele": 15.75,
        "distanceKm": 7.965001127489763,
        "gradePct": 0.5092270533269438,
        "smoothedEle": 15.473968646591938,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52883,
        "lng": 119.565555,
        "ele": 14.75,
        "distanceKm": 8.005796381002144,
        "gradePct": 0.44040185941206467,
        "smoothedEle": 15.47586453588542,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.528722,
        "lng": 119.565223,
        "ele": 14.25,
        "distanceKm": 8.041711150513956,
        "gradePct": 0.3771393043291706,
        "smoothedEle": 15.428576777566018,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.528536,
        "lng": 119.564859,
        "ele": 13.75,
        "distanceKm": 8.084195324018689,
        "gradePct": 0.29679878772546187,
        "smoothedEle": 15.308110245909633,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52824991229517,
        "lng": 119.56446757584035,
        "ele": 13.826330764361611,
        "distanceKm": 8.135229204854872,
        "gradePct": 0.19359146233272143,
        "smoothedEle": 15.09942709577158,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527963824590344,
        "lng": 119.56407615168071,
        "ele": 13.902661528723222,
        "distanceKm": 8.186263153529977,
        "gradePct": 0.0810873731675482,
        "smoothedEle": 14.813818427238699,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527677736885515,
        "lng": 119.56368472752105,
        "ele": 13.978992293084833,
        "distanceKm": 8.237297170044908,
        "gradePct": -0.04265593333634428,
        "smoothedEle": 14.424532882985657,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527392,
        "lng": 119.563293,
        "ele": 14,
        "distanceKm": 8.288331146814174,
        "gradePct": -0.18008243453223258,
        "smoothedEle": 13.915125664435738,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5271555,
        "lng": 119.56296950000001,
        "ele": 15.749999999999963,
        "distanceKm": 8.330513269362589,
        "gradePct": -0.31656677762141644,
        "smoothedEle": 13.40010228687644,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526919,
        "lng": 119.562646,
        "ele": 17.5,
        "distanceKm": 8.372695438254754,
        "gradePct": -0.4433540994499399,
        "smoothedEle": 12.946406356943108,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52677445813115,
        "lng": 119.56226601879838,
        "ele": 16.196142935633155,
        "distanceKm": 8.414636936920152,
        "gradePct": -0.567281204487918,
        "smoothedEle": 12.5189706705726,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52663,
        "lng": 119.561886,
        "ele": 14,
        "distanceKm": 8.456578448399462,
        "gradePct": -0.6692524896097641,
        "smoothedEle": 12.110180486828236,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526522561337558,
        "lng": 119.56138325575782,
        "ele": 12.578874885940017,
        "distanceKm": 8.509208070244476,
        "gradePct": -0.7643895345589232,
        "smoothedEle": 11.649424807634363,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52643478066878,
        "lng": 119.56087412787892,
        "ele": 11.414437442969987,
        "distanceKm": 8.562024469466598,
        "gradePct": -0.8303447209704937,
        "smoothedEle": 11.21925348608243,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526347,
        "lng": 119.560365,
        "ele": 10.25,
        "distanceKm": 8.614840902715528,
        "gradePct": -0.8752799699524981,
        "smoothedEle": 10.806397255240055,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526343441067784,
        "lng": 119.55986100044548,
        "ele": 9.634030962691217,
        "distanceKm": 8.666226274972036,
        "gradePct": -0.9077909744570165,
        "smoothedEle": 10.386998836566265,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52633988213557,
        "lng": 119.55935700089096,
        "ele": 9.018061925382412,
        "distanceKm": 8.71761164861804,
        "gradePct": -0.9250380382659287,
        "smoothedEle": 9.949503103198788,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526336323203353,
        "lng": 119.55885300133643,
        "ele": 8.402092888073605,
        "distanceKm": 8.768997023653549,
        "gradePct": -0.9228851182083883,
        "smoothedEle": 9.493688010565233,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526333,
        "lng": 119.558349,
        "ele": 7.25,
        "distanceKm": 8.820382386514936,
        "gradePct": -0.9042657515058425,
        "smoothedEle": 9.002466724156644,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52644070697929,
        "lng": 119.55797057007275,
        "ele": 7.735166573380853,
        "distanceKm": 8.860780244081326,
        "gradePct": -0.907045157987902,
        "smoothedEle": 8.539336023273975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526548,
        "lng": 119.557592,
        "ele": 7.25,
        "distanceKm": 8.901178099820125,
        "gradePct": -0.9272016293463778,
        "smoothedEle": 8.020124701079379,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52665,
        "lng": 119.557202,
        "ele": 6.75,
        "distanceKm": 8.942525375720706,
        "gradePct": -0.9423367262063687,
        "smoothedEle": 7.535467555227563,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526932333333335,
        "lng": 119.55686983333334,
        "ele": 6.500000000000002,
        "distanceKm": 8.988703576070094,
        "gradePct": -0.9514784054684082,
        "smoothedEle": 7.07154313603202,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527214666666666,
        "lng": 119.55653766666667,
        "ele": 6.2500000000000036,
        "distanceKm": 9.034881723139257,
        "gradePct": -0.9551212956539944,
        "smoothedEle": 6.664715297778174,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527497,
        "lng": 119.5562055,
        "ele": 5.999999999999995,
        "distanceKm": 9.081059816928184,
        "gradePct": -0.9362426971472018,
        "smoothedEle": 6.389244231258316,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527779333333335,
        "lng": 119.55587333333334,
        "ele": 5.7499999999999964,
        "distanceKm": 9.127237857436054,
        "gradePct": -0.8933877569672446,
        "smoothedEle": 6.238276694777005,
        "gradeBand": "descent"
      },
      {
        "lat": 23.528061666666666,
        "lng": 119.55554116666667,
        "ele": 5.499999999999998,
        "distanceKm": 9.173415844662049,
        "gradePct": -0.8248633325630021,
        "smoothedEle": 6.201470084766605,
        "gradeBand": "descent"
      },
      {
        "lat": 23.528344,
        "lng": 119.555209,
        "ele": 5.25,
        "distanceKm": 9.219593778606157,
        "gradePct": -0.7394474843520723,
        "smoothedEle": 6.234683154045747,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5286565,
        "lng": 119.5549835,
        "ele": 4.999999999999995,
        "distanceKm": 9.261258971494492,
        "gradePct": -0.6490012822405408,
        "smoothedEle": 6.317322160207841,
        "gradeBand": "descent"
      },
      {
        "lat": 23.528969,
        "lng": 119.554758,
        "ele": 4.75,
        "distanceKm": 9.302924134258276,
        "gradePct": -0.5519751848270695,
        "smoothedEle": 6.409483951191514,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529199,
        "lng": 119.554602,
        "ele": 4.75,
        "distanceKm": 9.3330408690501,
        "gradePct": -0.47234925406107314,
        "smoothedEle": 6.495600582605954,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529503,
        "lng": 119.554576,
        "ele": 4.5,
        "distanceKm": 9.366947941710654,
        "gradePct": -0.3771137392548109,
        "smoothedEle": 6.574497316687362,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529909666666665,
        "lng": 119.55453033333333,
        "ele": 4.166666666666671,
        "distanceKm": 9.412406313399543,
        "gradePct": -0.24236419574296075,
        "smoothedEle": 6.676690845146248,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53031633333333,
        "lng": 119.55448466666667,
        "ele": 3.833333333333329,
        "distanceKm": 9.457864683614792,
        "gradePct": -0.11873649366372464,
        "smoothedEle": 6.787680348054173,
        "gradeBand": "descent"
      },
      {
        "lat": 23.530723,
        "lng": 119.554439,
        "ele": 3.5,
        "distanceKm": 9.50332305235638,
        "gradePct": -0.009031049084449804,
        "smoothedEle": 6.897590822917875,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53115933333333,
        "lng": 119.55433933333333,
        "ele": 5.333333333333333,
        "distanceKm": 9.552893723247633,
        "gradePct": 0.0912472073017824,
        "smoothedEle": 7.013502445151692,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.531595666666668,
        "lng": 119.55423966666667,
        "ele": 7.166666666666666,
        "distanceKm": 9.602464387232134,
        "gradePct": 0.16113603384792582,
        "smoothedEle": 7.124947519437397,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.532032,
        "lng": 119.55414,
        "ele": 9,
        "distanceKm": 9.652035044309605,
        "gradePct": 0.2027682473379457,
        "smoothedEle": 7.232353094551191,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5323755,
        "lng": 119.5539885,
        "ele": 9.875,
        "distanceKm": 9.693235129947821,
        "gradePct": 0.22043244143688767,
        "smoothedEle": 7.317887137047754,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.532719,
        "lng": 119.553837,
        "ele": 10.75,
        "distanceKm": 9.734435200469333,
        "gradePct": 0.22743286866425885,
        "smoothedEle": 7.401284067025852,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.533102818181817,
        "lng": 119.55357318181818,
        "ele": 10.386363636363637,
        "distanceKm": 9.784881592674205,
        "gradePct": 0.2259970009498252,
        "smoothedEle": 7.499559524751984,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.533486636363637,
        "lng": 119.55330936363636,
        "ele": 10.022727272727273,
        "distanceKm": 9.835327943046464,
        "gradePct": 0.2210286649861521,
        "smoothedEle": 7.606065589851258,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.533870454545454,
        "lng": 119.55304554545455,
        "ele": 9.65909090909091,
        "distanceKm": 9.885774251584113,
        "gradePct": 0.22377950099106628,
        "smoothedEle": 7.73571765377131,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.53425427272727,
        "lng": 119.55278172727273,
        "ele": 9.295454545454545,
        "distanceKm": 9.936220518288476,
        "gradePct": 0.2328557451430887,
        "smoothedEle": 7.899113467139862,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.53463809090909,
        "lng": 119.55251790909091,
        "ele": 8.931818181818182,
        "distanceKm": 9.986666743158557,
        "gradePct": 0.24828001175032915,
        "smoothedEle": 8.098718806272002,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.535021909090908,
        "lng": 119.55225409090909,
        "ele": 8.568181818181818,
        "distanceKm": 10.037112926193132,
        "gradePct": 0.2663463169711999,
        "smoothedEle": 8.308333625921115,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.535405727272728,
        "lng": 119.55199027272727,
        "ele": 8.204545454545455,
        "distanceKm": 10.087559067392313,
        "gradePct": 0.2666612053198058,
        "smoothedEle": 8.424743313506145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.535789545454545,
        "lng": 119.55172645454545,
        "ele": 7.840909090909091,
        "distanceKm": 10.138005166754876,
        "gradePct": 0.24753348836769806,
        "smoothedEle": 8.439621765092648,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.53617336363636,
        "lng": 119.55146263636364,
        "ele": 7.477272727272727,
        "distanceKm": 10.188451224279827,
        "gradePct": 0.20939255736978293,
        "smoothedEle": 8.354918226319658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.536557181818182,
        "lng": 119.55119881818182,
        "ele": 7.113636363636363,
        "distanceKm": 10.23889723996849,
        "gradePct": 0.15911679887881042,
        "smoothedEle": 8.205560634961948,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.536941,
        "lng": 119.550935,
        "ele": 6.75,
        "distanceKm": 10.289343213818865,
        "gradePct": 0.10501220510008676,
        "smoothedEle": 8.034040254722115,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.53741833333333,
        "lng": 119.55069866666666,
        "ele": 7.083333333333337,
        "distanceKm": 10.347632486145521,
        "gradePct": 0.048115639268913844,
        "smoothedEle": 7.8782676939629415,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.537895666666667,
        "lng": 119.55046233333333,
        "ele": 7.416666666666663,
        "distanceKm": 10.405921722335087,
        "gradePct": -0.0015305058534842428,
        "smoothedEle": 7.793322924252821,
        "gradeBand": "descent"
      },
      {
        "lat": 23.538373,
        "lng": 119.550226,
        "ele": 7.75,
        "distanceKm": 10.464210922386263,
        "gradePct": -0.04505295467937848,
        "smoothedEle": 7.784600967412075,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53878,
        "lng": 119.549975,
        "ele": 8,
        "distanceKm": 10.516200032912824,
        "gradePct": -0.0687990227851353,
        "smoothedEle": 7.877440909647837,
        "gradeBand": "descent"
      },
      {
        "lat": 23.539155,
        "lng": 119.549525,
        "ele": 8,
        "distanceKm": 10.57819331418334,
        "gradePct": -0.057635687806827825,
        "smoothedEle": 8.114952430405168,
        "gradeBand": "descent"
      },
      {
        "lat": 23.539447,
        "lng": 119.549029,
        "ele": 7.75,
        "distanceKm": 10.638283917366799,
        "gradePct": -0.009227871357715146,
        "smoothedEle": 8.393014360563111,
        "gradeBand": "descent"
      },
      {
        "lat": 23.539627982217613,
        "lng": 119.54855791740995,
        "ele": 7.4265032764468755,
        "distanceKm": 10.690353146778255,
        "gradePct": 0.04744573330421104,
        "smoothedEle": 8.586515792754088,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539724,
        "lng": 119.548051,
        "ele": 7.25,
        "distanceKm": 10.74312066227344,
        "gradePct": 0.10610934506099384,
        "smoothedEle": 8.721747383754078,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539739,
        "lng": 119.547596,
        "ele": 7,
        "distanceKm": 10.78953415926462,
        "gradePct": 0.15536409348760075,
        "smoothedEle": 8.810350438537363,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539821070665322,
        "lng": 119.54709157120296,
        "ele": 7.874451164884685,
        "distanceKm": 10.841760017290097,
        "gradePct": 0.19632440923145286,
        "smoothedEle": 8.875583357059897,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539883,
        "lng": 119.546583,
        "ele": 8.5,
        "distanceKm": 10.894059963479531,
        "gradePct": 0.2158937875083268,
        "smoothedEle": 8.89007797566744,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539894,
        "lng": 119.546173,
        "ele": 9.25,
        "distanceKm": 10.935873944129936,
        "gradePct": 0.21705292122647518,
        "smoothedEle": 8.874105705526565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539958,
        "lng": 119.545646,
        "ele": 10.5,
        "distanceKm": 10.990066487092658,
        "gradePct": 0.2042899754461777,
        "smoothedEle": 8.852222612336284,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.540039,
        "lng": 119.545271,
        "ele": 12,
        "distanceKm": 11.02934128599817,
        "gradePct": 0.18096633509319826,
        "smoothedEle": 8.832619960522749,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.540184,
        "lng": 119.544707,
        "ele": 13,
        "distanceKm": 11.089054234949199,
        "gradePct": 0.1314759448950671,
        "smoothedEle": 8.82258973978487,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.540039,
        "lng": 119.545271,
        "ele": 12,
        "distanceKm": 11.148767183900228,
        "gradePct": 0.08014985028842574,
        "smoothedEle": 8.83272188181616,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539958,
        "lng": 119.545646,
        "ele": 10.5,
        "distanceKm": 11.18804198280574,
        "gradePct": 0.05405711446944111,
        "smoothedEle": 8.848212539344413,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539894,
        "lng": 119.546173,
        "ele": 9.25,
        "distanceKm": 11.242234525768461,
        "gradePct": 0.03040211135449411,
        "smoothedEle": 8.87148696664637,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539883,
        "lng": 119.546583,
        "ele": 8.5,
        "distanceKm": 11.284048506418866,
        "gradePct": 0.01667654365420681,
        "smoothedEle": 8.883261082280015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5398335,
        "lng": 119.5469895,
        "ele": 8.00000000000001,
        "distanceKm": 11.32585175248367,
        "gradePct": 0.005594944323735263,
        "smoothedEle": 8.883687796385722,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539784,
        "lng": 119.547396,
        "ele": 7.5,
        "distanceKm": 11.367655014010445,
        "gradePct": -0.006943200816044026,
        "smoothedEle": 8.848043997099836,
        "gradeBand": "descent"
      },
      {
        "lat": 23.539725,
        "lng": 119.54775,
        "ele": 7,
        "distanceKm": 11.40433389080145,
        "gradePct": -0.02042760745570611,
        "smoothedEle": 8.784015462889545,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53968391750631,
        "lng": 119.54826261198875,
        "ele": 7.323681054577694,
        "distanceKm": 11.456789779396265,
        "gradePct": -0.03787206858925032,
        "smoothedEle": 8.676299492590406,
        "gradeBand": "descent"
      },
      {
        "lat": 23.539588,
        "lng": 119.548769,
        "ele": 7.5,
        "distanceKm": 11.509502202575577,
        "gradePct": -0.06414544708747201,
        "smoothedEle": 8.521794714540977,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53937582127148,
        "lng": 119.54914990633338,
        "ele": 7.810940692226288,
        "distanceKm": 11.554938274307718,
        "gradePct": -0.09945334978214221,
        "smoothedEle": 8.331053584019031,
        "gradeBand": "descent"
      },
      {
        "lat": 23.539155,
        "lng": 119.549525,
        "ele": 8,
        "distanceKm": 11.600381034380252,
        "gradePct": -0.1422020049510362,
        "smoothedEle": 8.113501655624006,
        "gradeBand": "descent"
      },
      {
        "lat": 23.538951,
        "lng": 119.549797,
        "ele": 8,
        "distanceKm": 11.63620580095948,
        "gradePct": -0.1728549377467173,
        "smoothedEle": 7.966315767348276,
        "gradeBand": "descent"
      },
      {
        "lat": 23.538679380418984,
        "lng": 119.55003705286201,
        "ele": 7.938194360555679,
        "distanceKm": 11.675078227309807,
        "gradePct": -0.199413969653952,
        "smoothedEle": 7.8460295624969465,
        "gradeBand": "descent"
      },
      {
        "lat": 23.538373,
        "lng": 119.550226,
        "ele": 7.75,
        "distanceKm": 11.71421446058123,
        "gradePct": -0.21495923443950246,
        "smoothedEle": 7.7846568330485795,
        "gradeBand": "descent"
      },
      {
        "lat": 23.537895666666667,
        "lng": 119.55046233333333,
        "ele": 7.416666666666663,
        "distanceKm": 11.772503660632406,
        "gradePct": -0.21719952626257813,
        "smoothedEle": 7.794012616027517,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53741833333333,
        "lng": 119.55069866666666,
        "ele": 7.083333333333337,
        "distanceKm": 11.830792896821972,
        "gradePct": -0.20005610000884635,
        "smoothedEle": 7.8791942002670545,
        "gradeBand": "descent"
      },
      {
        "lat": 23.536941,
        "lng": 119.550935,
        "ele": 6.75,
        "distanceKm": 11.889082169148628,
        "gradePct": -0.156656848871879,
        "smoothedEle": 8.027355408446812,
        "gradeBand": "descent"
      },
      {
        "lat": 23.536557181818182,
        "lng": 119.55119881818182,
        "ele": 7.113636363636363,
        "distanceKm": 11.939528142999004,
        "gradePct": -0.10178288651985845,
        "smoothedEle": 8.20283110738999,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53617336363636,
        "lng": 119.55146263636364,
        "ele": 7.4772727272727275,
        "distanceKm": 11.989974158687666,
        "gradePct": -0.04535455532584614,
        "smoothedEle": 8.35226036302413,
        "gradeBand": "descent"
      },
      {
        "lat": 23.535789545454545,
        "lng": 119.55172645454545,
        "ele": 7.840909090909091,
        "distanceKm": 12.040420216212617,
        "gradePct": 0.009443662088864713,
        "smoothedEle": 8.439218862554435,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.535405727272728,
        "lng": 119.55199027272727,
        "ele": 8.204545454545455,
        "distanceKm": 12.09086631557518,
        "gradePct": 0.05297739407452831,
        "smoothedEle": 8.423939235617977,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.535021909090908,
        "lng": 119.55225409090909,
        "ele": 8.568181818181818,
        "distanceKm": 12.141312456774362,
        "gradePct": 0.07140314670230924,
        "smoothedEle": 8.307529548032948,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.53463809090909,
        "lng": 119.55251790909091,
        "ele": 8.931818181818182,
        "distanceKm": 12.191758639808937,
        "gradePct": 0.05587812260188372,
        "smoothedEle": 8.099262255905458,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.53425427272727,
        "lng": 119.55278172727273,
        "ele": 9.295454545454545,
        "distanceKm": 12.242204864679017,
        "gradePct": 0.021992799660560714,
        "smoothedEle": 7.899113467139861,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.533870454545454,
        "lng": 119.55304554545455,
        "ele": 9.65909090909091,
        "distanceKm": 12.29265113138338,
        "gradePct": -0.01754753582280468,
        "smoothedEle": 7.735717653771309,
        "gradeBand": "descent"
      },
      {
        "lat": 23.533486636363637,
        "lng": 119.55330936363636,
        "ele": 10.022727272727273,
        "distanceKm": 12.34309743992103,
        "gradePct": -0.060880924451923946,
        "smoothedEle": 7.606065589851257,
        "gradeBand": "descent"
      },
      {
        "lat": 23.533102818181817,
        "lng": 119.55357318181818,
        "ele": 10.386363636363637,
        "distanceKm": 12.393543790293288,
        "gradePct": -0.10866311558292985,
        "smoothedEle": 7.499559524751984,
        "gradeBand": "descent"
      },
      {
        "lat": 23.532719,
        "lng": 119.553837,
        "ele": 10.75,
        "distanceKm": 12.44399018249816,
        "gradePct": -0.16295286457525612,
        "smoothedEle": 7.401284067025852,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5323755,
        "lng": 119.5539885,
        "ele": 9.875,
        "distanceKm": 12.485190253019672,
        "gradePct": -0.20398601007044823,
        "smoothedEle": 7.318159610521611,
        "gradeBand": "descent"
      },
      {
        "lat": 23.532032,
        "lng": 119.55414,
        "ele": 9,
        "distanceKm": 12.526390338657889,
        "gradePct": -0.23579507327816493,
        "smoothedEle": 7.236058908494899,
        "gradeBand": "descent"
      },
      {
        "lat": 23.531595666666668,
        "lng": 119.55423966666667,
        "ele": 7.166666666666667,
        "distanceKm": 12.57596099573536,
        "gradePct": -0.2583081558654325,
        "smoothedEle": 7.13691313095147,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53115933333333,
        "lng": 119.55433933333333,
        "ele": 5.333333333333334,
        "distanceKm": 12.62553165971986,
        "gradePct": -0.26113231185516117,
        "smoothedEle": 7.038283809894064,
        "gradeBand": "descent"
      },
      {
        "lat": 23.530723,
        "lng": 119.554439,
        "ele": 3.5,
        "distanceKm": 12.675102330611113,
        "gradePct": -0.2456852716958741,
        "smoothedEle": 6.939601544394688,
        "gradeBand": "descent"
      },
      {
        "lat": 23.53031633333333,
        "lng": 119.55448466666667,
        "ele": 3.833333333333329,
        "distanceKm": 12.720560699352701,
        "gradePct": -0.22714205514389824,
        "smoothedEle": 6.849277872530033,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529909666666665,
        "lng": 119.55453033333333,
        "ele": 4.166666666666671,
        "distanceKm": 12.76601906956795,
        "gradePct": -0.213136849426596,
        "smoothedEle": 6.756294842544298,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529503,
        "lng": 119.554576,
        "ele": 4.5,
        "distanceKm": 12.811477441256839,
        "gradePct": -0.20664616766225752,
        "smoothedEle": 6.654101314085412,
        "gradeBand": "descent"
      },
      {
        "lat": 23.529199,
        "lng": 119.554602,
        "ele": 4.75,
        "distanceKm": 12.845384513917393,
        "gradePct": -0.2052064740222514,
        "smoothedEle": 6.5752045800040015,
        "gradeBand": "descent"
      },
      {
        "lat": 23.528969,
        "lng": 119.554758,
        "ele": 4.75,
        "distanceKm": 12.875501248709217,
        "gradePct": -0.20971286481765394,
        "smoothedEle": 6.489087948589562,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5286565,
        "lng": 119.5549835,
        "ele": 4.999999999999995,
        "distanceKm": 12.917166411473001,
        "gradePct": -0.21132274899514164,
        "smoothedEle": 6.396926157605889,
        "gradeBand": "descent"
      },
      {
        "lat": 23.528344,
        "lng": 119.555209,
        "ele": 5.25,
        "distanceKm": 12.958831604361336,
        "gradePct": -0.21141063061909443,
        "smoothedEle": 6.3142871514437955,
        "gradeBand": "descent"
      },
      {
        "lat": 23.528061666666666,
        "lng": 119.55554116666667,
        "ele": 5.583333333333331,
        "distanceKm": 13.005009538305444,
        "gradePct": -0.1995182034704694,
        "smoothedEle": 6.2810740821646505,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527779333333335,
        "lng": 119.55587333333334,
        "ele": 5.9166666666666625,
        "distanceKm": 13.05118752553144,
        "gradePct": -0.17371632196215359,
        "smoothedEle": 6.31788069217505,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527497,
        "lng": 119.5562055,
        "ele": 6.249999999999994,
        "distanceKm": 13.09736556603931,
        "gradePct": -0.12481643616933535,
        "smoothedEle": 6.47024289364333,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527214666666666,
        "lng": 119.55653766666667,
        "ele": 6.5833333333333375,
        "distanceKm": 13.143543659828236,
        "gradePct": -0.050907912994562744,
        "smoothedEle": 6.747887054673232,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526932333333335,
        "lng": 119.55686983333334,
        "ele": 6.916666666666669,
        "distanceKm": 13.1897218068974,
        "gradePct": 0.04804771957117388,
        "smoothedEle": 7.150791920427595,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52665,
        "lng": 119.557202,
        "ele": 7.25,
        "distanceKm": 13.235900007246787,
        "gradePct": 0.1589116347045369,
        "smoothedEle": 7.612460188996632,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526548,
        "lng": 119.557592,
        "ele": 7.25,
        "distanceKm": 13.277247283147368,
        "gradePct": 0.27256194201273465,
        "smoothedEle": 8.09386276058287,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52644070697929,
        "lng": 119.55797057007275,
        "ele": 7.735166573380853,
        "distanceKm": 13.317645138886167,
        "gradePct": 0.396440636214164,
        "smoothedEle": 8.621953176638495,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526333,
        "lng": 119.558349,
        "ele": 7.25,
        "distanceKm": 13.358042996452557,
        "gradePct": 0.5092804272321937,
        "smoothedEle": 9.08541069816096,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526336323203353,
        "lng": 119.55885300133643,
        "ele": 8.402092888073605,
        "distanceKm": 13.409428359313944,
        "gradePct": 0.632583272783416,
        "smoothedEle": 9.57695880520934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52633988213557,
        "lng": 119.55935700089096,
        "ele": 9.018061925382412,
        "distanceKm": 13.460813734349452,
        "gradePct": 0.7439832598187472,
        "smoothedEle": 10.032777821129875,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526343441067784,
        "lng": 119.55986100044548,
        "ele": 9.634030962691217,
        "distanceKm": 13.512199107995457,
        "gradePct": 0.8361920000438823,
        "smoothedEle": 10.467764598234131,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526347,
        "lng": 119.560365,
        "ele": 10.25,
        "distanceKm": 13.563584480251965,
        "gradePct": 0.9042308306495885,
        "smoothedEle": 10.879937995317366,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526428666666668,
        "lng": 119.56083866666667,
        "ele": 11.33333333333332,
        "distanceKm": 13.61272220277617,
        "gradePct": 0.9379733066858023,
        "smoothedEle": 11.252440664098613,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526510333333334,
        "lng": 119.56131233333333,
        "ele": 12.41666666666668,
        "distanceKm": 13.66185989584973,
        "gradePct": 0.9452152871436383,
        "smoothedEle": 11.633772860921438,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526592,
        "lng": 119.561786,
        "ele": 13.5,
        "distanceKm": 13.710997559472547,
        "gradePct": 0.9349125272647254,
        "smoothedEle": 12.038059681237565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526725,
        "lng": 119.562136,
        "ele": 15.75,
        "distanceKm": 13.749623999468334,
        "gradePct": 0.9223452935758433,
        "smoothedEle": 12.383973849719409,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.526919,
        "lng": 119.562646,
        "ele": 17.5,
        "distanceKm": 13.80591669936405,
        "gradePct": 0.8965213852355212,
        "smoothedEle": 12.95124314097127,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5271555,
        "lng": 119.56296950000001,
        "ele": 15.749999999999963,
        "distanceKm": 13.848098868256214,
        "gradePct": 0.8867402584535533,
        "smoothedEle": 13.405029678018842,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527392,
        "lng": 119.563293,
        "ele": 14,
        "distanceKm": 13.890280990804628,
        "gradePct": 0.9052082452402839,
        "smoothedEle": 13.919837896872552,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527677736885515,
        "lng": 119.56368472752105,
        "ele": 13.978992293084833,
        "distanceKm": 13.941314967573895,
        "gradePct": 0.913863596981632,
        "smoothedEle": 14.429130080339686,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527963824590344,
        "lng": 119.56407615168071,
        "ele": 13.902661528723222,
        "distanceKm": 13.992348984088826,
        "gradePct": 0.9041860586768422,
        "smoothedEle": 14.82065988845287,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52824991229517,
        "lng": 119.56446757584035,
        "ele": 13.826330764361611,
        "distanceKm": 14.043382932763931,
        "gradePct": 0.8765997931406762,
        "smoothedEle": 15.10089589585309,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.528536,
        "lng": 119.564859,
        "ele": 13.75,
        "distanceKm": 14.094416813600114,
        "gradePct": 0.8384815740948888,
        "smoothedEle": 15.306079255679405,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.528722,
        "lng": 119.565223,
        "ele": 14.25,
        "distanceKm": 14.136900987104847,
        "gradePct": 0.797982347349828,
        "smoothedEle": 15.429991428401541,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52883,
        "lng": 119.565555,
        "ele": 14.75,
        "distanceKm": 14.172815756616659,
        "gradePct": 0.7505057595896428,
        "smoothedEle": 15.476442495586827,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52884,
        "lng": 119.565955,
        "ele": 15.75,
        "distanceKm": 14.21361101012904,
        "gradePct": 0.683138297760194,
        "smoothedEle": 15.477155594852402,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52872,
        "lng": 119.566375,
        "ele": 17,
        "distanceKm": 14.258461021899127,
        "gradePct": 0.5807685759185731,
        "smoothedEle": 15.376868621660295,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.528368,
        "lng": 119.56684849999999,
        "ele": 18.37499999999998,
        "distanceKm": 14.320608645810866,
        "gradePct": 0.39640794887418945,
        "smoothedEle": 15.091335628377625,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.528016,
        "lng": 119.567322,
        "ele": 19.75,
        "distanceKm": 14.382756370024522,
        "gradePct": 0.2016161901409696,
        "smoothedEle": 14.836085236859727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527732,
        "lng": 119.567716,
        "ele": 17.75,
        "distanceKm": 14.433852184057292,
        "gradePct": 0.062273998335649235,
        "smoothedEle": 14.666025426839935,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.527373,
        "lng": 119.568305,
        "ele": 15.5,
        "distanceKm": 14.505959361063297,
        "gradePct": -0.11108539169250768,
        "smoothedEle": 14.3399698022402,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52719025580474,
        "lng": 119.56864058814885,
        "ele": 14.601662638981892,
        "distanceKm": 14.545752448648027,
        "gradePct": -0.2010007974199251,
        "smoothedEle": 14.105418623600437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526998,
        "lng": 119.56897,
        "ele": 14.25,
        "distanceKm": 14.585563299104901,
        "gradePct": -0.2825265538622322,
        "smoothedEle": 13.857850646494143,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526813,
        "lng": 119.569308,
        "ele": 14.25,
        "distanceKm": 14.625696075664585,
        "gradePct": -0.3610682851001272,
        "smoothedEle": 13.591969011200144,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526677,
        "lng": 119.569686,
        "ele": 13.5,
        "distanceKm": 14.667094786070564,
        "gradePct": -0.4379467007818207,
        "smoothedEle": 13.279309662910926,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526532,
        "lng": 119.570208,
        "ele": 12.75,
        "distanceKm": 14.722702471433884,
        "gradePct": -0.533862220312777,
        "smoothedEle": 12.787515510080443,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526377,
        "lng": 119.570616,
        "ele": 12.5,
        "distanceKm": 14.767728221164388,
        "gradePct": -0.6040831546564476,
        "smoothedEle": 12.31387533730032,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526143,
        "lng": 119.570875,
        "ele": 12.25,
        "distanceKm": 14.80479949542667,
        "gradePct": -0.6566648336901139,
        "smoothedEle": 11.880645516489961,
        "gradeBand": "descent"
      },
      {
        "lat": 23.525672,
        "lng": 119.571051,
        "ele": 11.25,
        "distanceKm": 14.860160972350245,
        "gradePct": -0.7543704365221622,
        "smoothedEle": 11.15703587488051,
        "gradeBand": "descent"
      },
      {
        "lat": 23.525125032702736,
        "lng": 119.57117067831462,
        "ele": 10.548759875302704,
        "distanceKm": 14.922192892220224,
        "gradePct": -0.8838960471742282,
        "smoothedEle": 10.285350267124455,
        "gradeBand": "descent"
      },
      {
        "lat": 23.524578,
        "lng": 119.57129,
        "ele": 9,
        "distanceKm": 14.984224811957745,
        "gradePct": -0.9785808880677734,
        "smoothedEle": 9.54534506550718,
        "gradeBand": "descent"
      },
      {
        "lat": 23.524153,
        "lng": 119.571594,
        "ele": 7.75,
        "distanceKm": 15.040739707509548,
        "gradePct": -1.0294286347030441,
        "smoothedEle": 8.987821896807723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5238,
        "lng": 119.57206350000001,
        "ele": 7.25,
        "distanceKm": 15.102642835670789,
        "gradePct": -1.0615454932453072,
        "smoothedEle": 8.436970403373428,
        "gradeBand": "descent"
      },
      {
        "lat": 23.523447,
        "lng": 119.572533,
        "ele": 6.75,
        "distanceKm": 15.164546063100493,
        "gradePct": -1.070850253240725,
        "smoothedEle": 7.94430735530957,
        "gradeBand": "descent"
      },
      {
        "lat": 23.523103,
        "lng": 119.572793,
        "ele": 6.25,
        "distanceKm": 15.211084552315713,
        "gradePct": -1.0449366202274297,
        "smoothedEle": 7.6655812403870645,
        "gradeBand": "descent"
      },
      {
        "lat": 23.522660388874414,
        "lng": 119.57296385426912,
        "ele": 6.044356403533735,
        "distanceKm": 15.263292488462323,
        "gradePct": -0.9831303314094458,
        "smoothedEle": 7.444884562436897,
        "gradeBand": "descent"
      },
      {
        "lat": 23.522209194437206,
        "lng": 119.57310842713456,
        "ele": 5.64717820176686,
        "distanceKm": 15.315583554163949,
        "gradePct": -0.8928577888762416,
        "smoothedEle": 7.275402079714157,
        "gradeBand": "descent"
      },
      {
        "lat": 23.521758,
        "lng": 119.573253,
        "ele": 5.25,
        "distanceKm": 15.367874634107524,
        "gradePct": -0.7861320940828589,
        "smoothedEle": 7.11798140423195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.521316657552042,
        "lng": 119.57338362990002,
        "ele": 5.25,
        "distanceKm": 15.418724889222302,
        "gradePct": -0.6756625891914191,
        "smoothedEle": 6.955770429981008,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520875432329145,
        "lng": 119.57351472909103,
        "ele": 5.329250710304311,
        "distanceKm": 15.469575132367064,
        "gradePct": -0.5810268927493473,
        "smoothedEle": 6.814972871653134,
        "gradeBand": "descent"
      },
      {
        "lat": 23.520434216164574,
        "lng": 119.57364586454551,
        "ele": 5.4146253551521575,
        "distanceKm": 15.520425387478232,
        "gradePct": -0.48581851636470413,
        "smoothedEle": 6.75913142071671,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519993,
        "lng": 119.573777,
        "ele": 5.5,
        "distanceKm": 15.571275654372545,
        "gradePct": -0.37713700583643345,
        "smoothedEle": 6.830409534410685,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519723,
        "lng": 119.573972,
        "ele": 5.5,
        "distanceKm": 15.607284555238603,
        "gradePct": -0.28956317223846784,
        "smoothedEle": 6.952212951160911,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519399,
        "lng": 119.574607,
        "ele": 7.25,
        "distanceKm": 15.681376464937967,
        "gradePct": -0.0952240268864097,
        "smoothedEle": 7.367387375505454,
        "gradeBand": "descent"
      },
      {
        "lat": 23.519324739710438,
        "lng": 119.57519068727224,
        "ele": 8.443780162844146,
        "distanceKm": 15.741457943426632,
        "gradePct": 0.06814589461896396,
        "smoothedEle": 7.8779144003727675,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.519317,
        "lng": 119.575786,
        "ele": 9.25,
        "distanceKm": 15.802160708044612,
        "gradePct": 0.2431666009725017,
        "smoothedEle": 8.534740361338308,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.51932,
        "lng": 119.57637,
        "ele": 8.25,
        "distanceKm": 15.86170488842934,
        "gradePct": 0.43754830350080454,
        "smoothedEle": 9.32429674987762,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.519339,
        "lng": 119.57673,
        "ele": 7.5,
        "distanceKm": 15.898470378910428,
        "gradePct": 0.577514318603411,
        "smoothedEle": 9.907953377321633,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.519567,
        "lng": 119.577151,
        "ele": 7.25,
        "distanceKm": 15.948322434807382,
        "gradePct": 0.7845505587974055,
        "smoothedEle": 10.796571557797753,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.519716,
        "lng": 119.577498,
        "ele": 7.5,
        "distanceKm": 15.987388903561522,
        "gradePct": 0.9451509835214684,
        "smoothedEle": 11.52116551119573,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.519836787051016,
        "lng": 119.5779821134018,
        "ele": 8.908237290535613,
        "distanceKm": 16.038542479442754,
        "gradePct": 1.135041739296915,
        "smoothedEle": 12.45973530624789,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.519957463315365,
        "lng": 119.57846626023057,
        "ele": 10.638362944286516,
        "distanceKm": 16.089696067317156,
        "gradePct": 1.2993266403395316,
        "smoothedEle": 13.389351475909912,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.520078139579713,
        "lng": 119.57895040705935,
        "ele": 12.36848859803742,
        "distanceKm": 16.140849611528502,
        "gradePct": 1.4237333596867388,
        "smoothedEle": 14.258961727502786,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.520198815844065,
        "lng": 119.57943455388813,
        "ele": 14.098614251788263,
        "distanceKm": 16.192003112075287,
        "gradePct": 1.5107099535695496,
        "smoothedEle": 15.011234364456946,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.520319492108413,
        "lng": 119.5799187007169,
        "ele": 15.828739905539164,
        "distanceKm": 16.2431565689557,
        "gradePct": 1.5575866232850688,
        "smoothedEle": 15.684227261978965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52044016837276,
        "lng": 119.58040284754568,
        "ele": 17.55886555929007,
        "distanceKm": 16.294309982172432,
        "gradePct": 1.5654367185648652,
        "smoothedEle": 16.27697624877025,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52056084463711,
        "lng": 119.58088699437445,
        "ele": 19.288991213040973,
        "distanceKm": 16.345463351722476,
        "gradePct": 1.5410252369207411,
        "smoothedEle": 16.814060005917284,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.520682,
        "lng": 119.581371,
        "ele": 21.75,
        "distanceKm": 16.396616789594617,
        "gradePct": 1.491038492138302,
        "smoothedEle": 17.333719882461455,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.520773,
        "lng": 119.581795,
        "ele": 24,
        "distanceKm": 16.44101481269295,
        "gradePct": 1.4205451375073959,
        "smoothedEle": 17.76903810656706,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52104482665625,
        "lng": 119.5822374166231,
        "ele": 23.75,
        "distanceKm": 16.495312671675393,
        "gradePct": 1.3188823008936967,
        "smoothedEle": 18.260962930266626,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52136,
        "lng": 119.582647,
        "ele": 23.75,
        "distanceKm": 16.5498292977894,
        "gradePct": 1.197300510192122,
        "smoothedEle": 18.65135365211312,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.521915,
        "lng": 119.583019,
        "ele": 22.5,
        "distanceKm": 16.62226566805781,
        "gradePct": 1.002552852019714,
        "smoothedEle": 18.955798948599604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.522426,
        "lng": 119.5832615,
        "ele": 21.624999999999975,
        "distanceKm": 16.684232398689474,
        "gradePct": 0.8224344280670731,
        "smoothedEle": 19.00912898737365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.522937,
        "lng": 119.583504,
        "ele": 20.75,
        "distanceKm": 16.746199091024977,
        "gradePct": 0.6365816850345202,
        "smoothedEle": 18.90239143570176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.523382,
        "lng": 119.583819,
        "ele": 19.75,
        "distanceKm": 16.805189501107296,
        "gradePct": 0.45289311869020205,
        "smoothedEle": 18.655671128715724,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.523773,
        "lng": 119.584259,
        "ele": 18.25,
        "distanceKm": 16.86766096685243,
        "gradePct": 0.24078838331035896,
        "smoothedEle": 18.243504066955232,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52404637552882,
        "lng": 119.58464505097888,
        "ele": 17.205693915531278,
        "distanceKm": 16.917392311208015,
        "gradePct": 0.045903157001069415,
        "smoothedEle": 17.766937601527736,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.524320300423057,
        "lng": 119.5850306407831,
        "ele": 16.464555132425033,
        "distanceKm": 16.967123777124804,
        "gradePct": -0.165492383553412,
        "smoothedEle": 17.178116781114543,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52459422531729,
        "lng": 119.58541623058733,
        "ele": 15.723416349318788,
        "distanceKm": 17.016855178365656,
        "gradePct": -0.35918480688606136,
        "smoothedEle": 16.61930366489241,
        "gradeBand": "descent"
      },
      {
        "lat": 23.524868150211528,
        "lng": 119.58580182039155,
        "ele": 14.982277566212488,
        "distanceKm": 17.066586514930396,
        "gradePct": -0.5271830321762437,
        "smoothedEle": 16.085867971917843,
        "gradeBand": "descent"
      },
      {
        "lat": 23.525142075105762,
        "lng": 119.58618741019578,
        "ele": 14.241138783106244,
        "distanceKm": 17.116317786817877,
        "gradePct": -0.6685950524264538,
        "smoothedEle": 15.587825133104596,
        "gradeBand": "descent"
      },
      {
        "lat": 23.525416,
        "lng": 119.586573,
        "ele": 13.5,
        "distanceKm": 17.16604899402793,
        "gradePct": -0.7880092781391046,
        "smoothedEle": 15.05343352715712,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52571244739057,
        "lng": 119.58698854415883,
        "ele": 13.12242872380094,
        "distanceKm": 17.21972822252523,
        "gradePct": -0.899431209129516,
        "smoothedEle": 14.450831428632354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52600889478114,
        "lng": 119.58740408831767,
        "ele": 12.744857447601879,
        "distanceKm": 17.27340737570779,
        "gradePct": -0.9847020547021234,
        "smoothedEle": 13.865085778498441,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52630534217171,
        "lng": 119.5878196324765,
        "ele": 12.367286171402819,
        "distanceKm": 17.327086453572978,
        "gradePct": -1.0428330804029913,
        "smoothedEle": 13.297036528617447,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526601789562278,
        "lng": 119.58823517663534,
        "ele": 11.989714895203733,
        "distanceKm": 17.38076545612176,
        "gradePct": -1.0741034770818665,
        "smoothedEle": 12.747408734413323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526898076722674,
        "lng": 119.58865085726966,
        "ele": 12.041785065852132,
        "distanceKm": 17.434444428490476,
        "gradePct": -1.073809118541499,
        "smoothedEle": 12.195994849688825,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527195,
        "lng": 119.589066,
        "ele": 12.5,
        "distanceKm": 17.48812351667124,
        "gradePct": -1.0580223785610643,
        "smoothedEle": 11.65203868580943,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527405,
        "lng": 119.589541,
        "ele": 13,
        "distanceKm": 17.54188628405091,
        "gradePct": -1.0405384416849444,
        "smoothedEle": 11.1481190705904,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527418,
        "lng": 119.589933,
        "ele": 13.25,
        "distanceKm": 17.581877345038748,
        "gradePct": -1.0247662780758926,
        "smoothedEle": 10.80890379112423,
        "gradeBand": "descent"
      },
      {
        "lat": 23.527277153927216,
        "lng": 119.59040521648434,
        "ele": 11.748733720323282,
        "distanceKm": 17.63250382023783,
        "gradePct": -1.000799109896042,
        "smoothedEle": 10.409900960563338,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52713633766828,
        "lng": 119.59087744336945,
        "ele": 10.422418584530883,
        "distanceKm": 17.68313032736217,
        "gradePct": -0.9779200917734546,
        "smoothedEle": 9.97207831322042,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52699566883414,
        "lng": 119.59134972168472,
        "ele": 9.961209292265425,
        "distanceKm": 17.7337568025814,
        "gradePct": -0.9565154430329443,
        "smoothedEle": 9.515174679639843,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526855,
        "lng": 119.591822,
        "ele": 9.5,
        "distanceKm": 17.784383326749442,
        "gradePct": -0.9246984766791982,
        "smoothedEle": 9.12544235443817,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526734717819956,
        "lng": 119.592294348999,
        "ele": 8.622027882882719,
        "distanceKm": 17.83436298517491,
        "gradePct": -0.8792782589397277,
        "smoothedEle": 8.826139676365061,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52661443563991,
        "lng": 119.59276669799802,
        "ele": 7.744055765765438,
        "distanceKm": 17.88434268600931,
        "gradePct": -0.8267521907161257,
        "smoothedEle": 8.576900910656086,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526494,
        "lng": 119.593239,
        "ele": 6.5,
        "distanceKm": 17.93432238212185,
        "gradePct": -0.767823588229233,
        "smoothedEle": 8.358130622227398,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52629829127756,
        "lng": 119.59379772027509,
        "ele": 6.3594309641992135,
        "distanceKm": 17.99530049090723,
        "gradePct": -0.695491067382256,
        "smoothedEle": 8.107313409650118,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526088,
        "lng": 119.594351,
        "ele": 6.5,
        "distanceKm": 18.056363236362266,
        "gradePct": -0.635667365399972,
        "smoothedEle": 7.846984715772804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526006,
        "lng": 119.5949,
        "ele": 6.5,
        "distanceKm": 18.11307291721426,
        "gradePct": -0.5921635150874537,
        "smoothedEle": 7.602224311415538,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526037,
        "lng": 119.59541,
        "ele": 4.75,
        "distanceKm": 18.16518278735274,
        "gradePct": -0.5324918381955801,
        "smoothedEle": 7.464831083852323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526142,
        "lng": 119.595976,
        "ele": 4,
        "distanceKm": 18.2240571332982,
        "gradePct": -0.44167181578498055,
        "smoothedEle": 7.3943550575077195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526424,
        "lng": 119.596414,
        "ele": 5.75,
        "distanceKm": 18.27862211902746,
        "gradePct": -0.3612183558954104,
        "smoothedEle": 7.363701415125552,
        "gradeBand": "descent"
      },
      {
        "lat": 23.526671,
        "lng": 119.596652,
        "ele": 6.75,
        "distanceKm": 18.315270532117857,
        "gradePct": -0.3166735822454303,
        "smoothedEle": 7.357106726820021,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52701575,
        "lng": 119.59691175,
        "ele": 7.187499999999983,
        "distanceKm": 18.36186269070604,
        "gradePct": -0.26133124883107367,
        "smoothedEle": 7.382347904195056,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5273605,
        "lng": 119.5971715,
        "ele": 7.625,
        "distanceKm": 18.408454809863905,
        "gradePct": -0.20561096885085012,
        "smoothedEle": 7.443302881857055,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52770525,
        "lng": 119.59743125,
        "ele": 8.062500000000018,
        "distanceKm": 18.455046889590978,
        "gradePct": -0.14283894723571997,
        "smoothedEle": 7.5586911433208925,
        "gradeBand": "descent"
      },
      {
        "lat": 23.52805,
        "lng": 119.597691,
        "ele": 8.5,
        "distanceKm": 18.501638929886784,
        "gradePct": -0.08033868011071554,
        "smoothedEle": 7.678597353490865,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5283304,
        "lng": 119.5980502,
        "ele": 8.65,
        "distanceKm": 18.549734796925414,
        "gradePct": -0.01643415916557043,
        "smoothedEle": 7.793072933983409,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5286108,
        "lng": 119.5984094,
        "ele": 8.8,
        "distanceKm": 18.59783060454862,
        "gradePct": 0.056274758745970745,
        "smoothedEle": 7.949384308758828,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5288912,
        "lng": 119.5987686,
        "ele": 8.95,
        "distanceKm": 18.645926352758508,
        "gradePct": 0.13528005136907204,
        "smoothedEle": 8.192002983252745,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.529171599999998,
        "lng": 119.59912779999999,
        "ele": 9.1,
        "distanceKm": 18.694022041551744,
        "gradePct": 0.23124522687534163,
        "smoothedEle": 8.586534948706571,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.529452,
        "lng": 119.599487,
        "ele": 9.25,
        "distanceKm": 18.74211767093043,
        "gradePct": 0.33472826981918224,
        "smoothedEle": 9.057850316498246,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.52977725,
        "lng": 119.5997555,
        "ele": 9.187499999999998,
        "distanceKm": 18.78747515420175,
        "gradePct": 0.41969952172169306,
        "smoothedEle": 9.460605966828979,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.530102499999998,
        "lng": 119.60002399999999,
        "ele": 9.125000000000002,
        "distanceKm": 18.83283259663804,
        "gradePct": 0.49553102199371096,
        "smoothedEle": 9.84427603829926,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.53042775,
        "lng": 119.6002925,
        "ele": 9.062500000000002,
        "distanceKm": 18.878189998240888,
        "gradePct": 0.5576534971227014,
        "smoothedEle": 10.191975883472635,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.530753,
        "lng": 119.600561,
        "ele": 9,
        "distanceKm": 18.923547359008325,
        "gradePct": 0.6057801144372525,
        "smoothedEle": 10.509581116020064,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.531097,
        "lng": 119.600872,
        "ele": 9,
        "distanceKm": 18.973230545596696,
        "gradePct": 0.6413015208702,
        "smoothedEle": 10.811995008682088,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.531411,
        "lng": 119.601115,
        "ele": 8.75,
        "distanceKm": 19.016041747746158,
        "gradePct": 0.6732293296482218,
        "smoothedEle": 11.07902492931887,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.531856,
        "lng": 119.601476,
        "ele": 9.75,
        "distanceKm": 19.077709641533698,
        "gradePct": 0.717780752992395,
        "smoothedEle": 11.472894943922308,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.532224,
        "lng": 119.601781,
        "ele": 11.5,
        "distanceKm": 19.1291029302913,
        "gradePct": 0.7290273458592783,
        "smoothedEle": 11.752274072417435,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.532692,
        "lng": 119.602073,
        "ele": 13.5,
        "distanceKm": 19.189055086712703,
        "gradePct": 0.6952300099406127,
        "smoothedEle": 12.021940754920541,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.533258,
        "lng": 119.602284,
        "ele": 14.25,
        "distanceKm": 19.255566047749625,
        "gradePct": 0.6140821669875375,
        "smoothedEle": 12.247677163107205,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.533789,
        "lng": 119.602432,
        "ele": 15,
        "distanceKm": 19.316507938339733,
        "gradePct": 0.5383831487837067,
        "smoothedEle": 12.39810456919125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.534169862791938,
        "lng": 119.60254787461912,
        "ele": 14.769174065491804,
        "distanceKm": 19.36047468598799,
        "gradePct": 0.4844283134493548,
        "smoothedEle": 12.478315770952483,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.534550725583877,
        "lng": 119.60266374923825,
        "ele": 14.538348130983627,
        "distanceKm": 19.40444142444765,
        "gradePct": 0.4316531914548875,
        "smoothedEle": 12.534061846674012,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.534932,
        "lng": 119.602778,
        "ele": 14,
        "distanceKm": 19.448408098350235,
        "gradePct": 0.38086036091696834,
        "smoothedEle": 12.56520640597496,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.535296000000002,
        "lng": 119.6029,
        "ele": 14.625,
        "distanceKm": 19.490750909947547,
        "gradePct": 0.3328189149722604,
        "smoothedEle": 12.585370829274398,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.53566,
        "lng": 119.603022,
        "ele": 15.25,
        "distanceKm": 19.53309371143558,
        "gradePct": 0.2927340870099986,
        "smoothedEle": 12.651605475852627,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.536056333333335,
        "lng": 119.603189,
        "ele": 14.583333333333345,
        "distanceKm": 19.58033813976037,
        "gradePct": 0.24968653996760715,
        "smoothedEle": 12.735616426626189,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.536452666666666,
        "lng": 119.60335599999999,
        "ele": 13.91666666666669,
        "distanceKm": 19.627582549600184,
        "gradePct": 0.21259096635045616,
        "smoothedEle": 12.806963960580136,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.536849,
        "lng": 119.603523,
        "ele": 13.249999999999982,
        "distanceKm": 19.674826940956553,
        "gradePct": 0.1783862631481018,
        "smoothedEle": 12.84987342418598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.537245333333335,
        "lng": 119.60369,
        "ele": 12.583333333333329,
        "distanceKm": 19.72207131382834,
        "gradePct": 0.14784402160107887,
        "smoothedEle": 12.873217047421932,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.537641666666666,
        "lng": 119.60385699999999,
        "ele": 11.916666666666671,
        "distanceKm": 19.76931566821441,
        "gradePct": 0.12603703397222643,
        "smoothedEle": 12.911801544914834,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.538038,
        "lng": 119.604024,
        "ele": 11.250000000000018,
        "distanceKm": 19.8165600041163,
        "gradePct": 0.11760972357011602,
        "smoothedEle": 12.986248173792786,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.538434333333335,
        "lng": 119.604191,
        "ele": 10.58333333333331,
        "distanceKm": 19.863804321532875,
        "gradePct": 0.12616073557438057,
        "smoothedEle": 13.113341142807451,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.538830666666666,
        "lng": 119.60435799999999,
        "ele": 9.916666666666655,
        "distanceKm": 19.911048620463,
        "gradePct": 0.15639803702744323,
        "smoothedEle": 13.320732354197428,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539227,
        "lng": 119.604525,
        "ele": 9.25,
        "distanceKm": 19.95829290090821,
        "gradePct": 0.20273241899493752,
        "smoothedEle": 13.583575825179931,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5395865,
        "lng": 119.604681,
        "ele": 10.124999999999963,
        "distanceKm": 20.001314700929488,
        "gradePct": 0.24925589421983893,
        "smoothedEle": 13.848174690296467,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.539946,
        "lng": 119.604837,
        "ele": 11,
        "distanceKm": 20.044336484883036,
        "gradePct": 0.29132293663059344,
        "smoothedEle": 14.128212274904623,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.54029475,
        "lng": 119.60511725,
        "ele": 11.937500000000018,
        "distanceKm": 20.09250313935616,
        "gradePct": 0.3518519817067968,
        "smoothedEle": 14.51324766680879,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.540643499999998,
        "lng": 119.6053975,
        "ele": 12.874999999999964,
        "distanceKm": 20.14066974889422,
        "gradePct": 0.4344878341380465,
        "smoothedEle": 14.991289509434791,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.54099225,
        "lng": 119.60567775,
        "ele": 13.812499999999982,
        "distanceKm": 20.188836313499017,
        "gradePct": 0.5271865823006326,
        "smoothedEle": 15.492728419622628,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.541341,
        "lng": 119.605958,
        "ele": 14.75,
        "distanceKm": 20.237002833168827,
        "gradePct": 0.6230379539213796,
        "smoothedEle": 16.00060139938782,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.541622,
        "lng": 119.606114,
        "ele": 15.75,
        "distanceKm": 20.2720627427645,
        "gradePct": 0.6876129385472837,
        "smoothedEle": 16.354195019834904,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.542136,
        "lng": 119.606247,
        "ele": 17.5,
        "distanceKm": 20.330803113092287,
        "gradePct": 0.7745864198129432,
        "smoothedEle": 16.897495971056635,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.542691202085283,
        "lng": 119.60628692420822,
        "ele": 19.01924808492254,
        "distanceKm": 20.392672858737516,
        "gradePct": 0.8505495861577503,
        "smoothedEle": 17.49281507096537,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.543245,
        "lng": 119.606351,
        "ele": 20,
        "distanceKm": 20.45459791438224,
        "gradePct": 0.916429441359691,
        "smoothedEle": 18.145165980954076,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.543719,
        "lng": 119.60646533333333,
        "ele": 21.333333333333304,
        "distanceKm": 20.508577643011623,
        "gradePct": 0.9614754049962652,
        "smoothedEle": 18.702827689701035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.544193,
        "lng": 119.60657966666668,
        "ele": 22.666666666666696,
        "distanceKm": 20.562557362570292,
        "gradePct": 0.9839380267476244,
        "smoothedEle": 19.193556759311107,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.544667,
        "lng": 119.606694,
        "ele": 24,
        "distanceKm": 20.61653707305748,
        "gradePct": 0.9729636323394668,
        "smoothedEle": 19.616596754023135,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.545274,
        "lng": 119.606875,
        "ele": 23.75,
        "distanceKm": 20.686508926812724,
        "gradePct": 0.9178233228818694,
        "smoothedEle": 20.057615731960386,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.545598,
        "lng": 119.606997,
        "ele": 23,
        "distanceKm": 20.72462221343053,
        "gradePct": 0.8767653387299937,
        "smoothedEle": 20.253885502854125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.545947867517143,
        "lng": 119.60718574985022,
        "ele": 21.865831272483657,
        "distanceKm": 20.76802367893331,
        "gradePct": 0.8202694948905367,
        "smoothedEle": 20.414806872896726,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.546288,
        "lng": 119.607395,
        "ele": 20.25,
        "distanceKm": 20.811445035423862,
        "gradePct": 0.7550157450419079,
        "smoothedEle": 20.49352812314465,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.546548,
        "lng": 119.60763299999999,
        "ele": 20.25,
        "distanceKm": 20.84918654752432,
        "gradePct": 0.6791284020738565,
        "smoothedEle": 20.4700258856055,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.546808,
        "lng": 119.607871,
        "ele": 20.25,
        "distanceKm": 20.886928028785636,
        "gradePct": 0.5887798184590337,
        "smoothedEle": 20.381436628814342,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.547067,
        "lng": 119.60813,
        "ele": 20.25,
        "distanceKm": 20.92599784787462,
        "gradePct": 0.4806727764218543,
        "smoothedEle": 20.24724181063067,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.547364166666664,
        "lng": 119.60846183333334,
        "ele": 20.08333333333333,
        "distanceKm": 20.97328477123541,
        "gradePct": 0.3349001944870757,
        "smoothedEle": 20.01271987878292,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.547661333333334,
        "lng": 119.60879366666667,
        "ele": 19.916666666666668,
        "distanceKm": 21.02057163990574,
        "gradePct": 0.19071861764771683,
        "smoothedEle": 19.765458079075625,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5479585,
        "lng": 119.6091255,
        "ele": 19.750000000000007,
        "distanceKm": 21.067858453884472,
        "gradePct": 0.056404189985064336,
        "smoothedEle": 19.51712246042681,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.548255666666666,
        "lng": 119.60945733333334,
        "ele": 19.583333333333332,
        "distanceKm": 21.11514521317129,
        "gradePct": -0.07073743312085341,
        "smoothedEle": 19.252001556612477,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548552833333336,
        "lng": 119.60978916666667,
        "ele": 19.41666666666666,
        "distanceKm": 21.162431917765876,
        "gradePct": -0.18460655891798938,
        "smoothedEle": 18.982830234651296,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54885,
        "lng": 119.610121,
        "ele": 19.25,
        "distanceKm": 21.209718567667093,
        "gradePct": -0.2743985634559436,
        "smoothedEle": 18.805144249555127,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549287,
        "lng": 119.610481,
        "ele": 18.5,
        "distanceKm": 21.270610566857464,
        "gradePct": -0.3428315668073857,
        "smoothedEle": 18.705338967229146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549591,
        "lng": 119.610582,
        "ele": 17.5,
        "distanceKm": 21.30594692002222,
        "gradePct": -0.35550452908466496,
        "smoothedEle": 18.706037605839686,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549946,
        "lng": 119.61058,
        "ele": 16.5,
        "distanceKm": 21.34542169994812,
        "gradePct": -0.34705520641635984,
        "smoothedEle": 18.73709428375742,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55041296050176,
        "lng": 119.61052462450272,
        "ele": 15.682806283980359,
        "distanceKm": 21.397651323214564,
        "gradePct": -0.3149515342413721,
        "smoothedEle": 18.769847188744087,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55088,
        "lng": 119.61047,
        "ele": 15,
        "distanceKm": 21.449881460587438,
        "gradePct": -0.2655483990568563,
        "smoothedEle": 18.8010478080086,
        "gradeBand": "descent"
      },
      {
        "lat": 23.551255,
        "lng": 119.610462,
        "ele": 15.75,
        "distanceKm": 21.49158758866686,
        "gradePct": -0.214229372572521,
        "smoothedEle": 18.845868062196995,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55168733493909,
        "lng": 119.61050792441722,
        "ele": 16.92632227623214,
        "distanceKm": 21.539888487065888,
        "gradePct": -0.14851152650820296,
        "smoothedEle": 18.921454381844832,
        "gradeBand": "descent"
      },
      {
        "lat": 23.552114,
        "lng": 119.610601,
        "ele": 17.75,
        "distanceKm": 21.588270865657552,
        "gradePct": -0.07477302980884844,
        "smoothedEle": 19.02881180613057,
        "gradeBand": "descent"
      },
      {
        "lat": 23.552533,
        "lng": 119.610703,
        "ele": 18.25,
        "distanceKm": 21.636007601395466,
        "gradePct": 0.005975828366725722,
        "smoothedEle": 19.16312519061966,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55224483299507,
        "lng": 119.61121273689785,
        "ele": 20.085566986303668,
        "distanceKm": 21.697052036639025,
        "gradePct": 0.10720471485431846,
        "smoothedEle": 19.38876402800221,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551956,
        "lng": 119.611722,
        "ele": 21.25,
        "distanceKm": 21.75809439812977,
        "gradePct": 0.19533749952969048,
        "smoothedEle": 19.70254114283392,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551706666666668,
        "lng": 119.61214033333333,
        "ele": 21.083333333333332,
        "distanceKm": 21.808956688655567,
        "gradePct": 0.2685641974185195,
        "smoothedEle": 20.0512265203844,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55145733333333,
        "lng": 119.61255866666667,
        "ele": 20.916666666666668,
        "distanceKm": 21.859819046994502,
        "gradePct": 0.3466318824191553,
        "smoothedEle": 20.479282191759907,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551208,
        "lng": 119.612977,
        "ele": 20.75,
        "distanceKm": 21.91068147314308,
        "gradePct": 0.4380864242990512,
        "smoothedEle": 20.96806310647899,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.550968,
        "lng": 119.61340899999999,
        "ele": 21.124999999999986,
        "distanceKm": 21.962171979199777,
        "gradePct": 0.5424177922707102,
        "smoothedEle": 21.526345000230844,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.550728,
        "lng": 119.613841,
        "ele": 21.5,
        "distanceKm": 22.01366255401485,
        "gradePct": 0.6397444035797171,
        "smoothedEle": 22.079135304766634,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5504505,
        "lng": 119.6142945,
        "ele": 22,
        "distanceKm": 22.06924175707949,
        "gradePct": 0.7200661478728676,
        "smoothedEle": 22.5869181625096,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.550173,
        "lng": 119.614748,
        "ele": 22.5,
        "distanceKm": 22.124821041308017,
        "gradePct": 0.7688937517917701,
        "smoothedEle": 22.976119138347492,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.549940499999998,
        "lng": 119.6151485,
        "ele": 23.25,
        "distanceKm": 22.173142968663367,
        "gradePct": 0.7820713013221094,
        "smoothedEle": 23.210745332525896,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.549708,
        "lng": 119.615549,
        "ele": 24,
        "distanceKm": 22.221464957019123,
        "gradePct": 0.7545210397731977,
        "smoothedEle": 23.286859387052196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.549488541056817,
        "lng": 119.61593420352129,
        "ele": 24.781955513768516,
        "distanceKm": 22.26769552608028,
        "gradePct": 0.7251810638348395,
        "smoothedEle": 23.394266795495387,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.549267,
        "lng": 119.616318,
        "ele": 25.25,
        "distanceKm": 22.313927343925812,
        "gradePct": 0.705007567844823,
        "smoothedEle": 23.618097205122726,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.549056917779634,
        "lng": 119.61673174707393,
        "ele": 25.237957926550916,
        "distanceKm": 22.362139721920048,
        "gradePct": 0.6941649776857751,
        "smoothedEle": 23.97240844681177,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.548833458889817,
        "lng": 119.61713737353696,
        "ele": 25.74397896327544,
        "distanceKm": 22.410378779208553,
        "gradePct": 0.6789961822503997,
        "smoothedEle": 24.360135170682184,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.54861,
        "lng": 119.617543,
        "ele": 26.25,
        "distanceKm": 22.458617896737238,
        "gradePct": 0.6592082067777192,
        "smoothedEle": 24.783851165467112,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.548551,
        "lng": 119.618171,
        "ele": 26.5,
        "distanceKm": 22.522968332036573,
        "gradePct": 0.6479083373404336,
        "smoothedEle": 25.403696464524156,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.548576,
        "lng": 119.618725,
        "ele": 25.25000000000004,
        "distanceKm": 22.579508674066844,
        "gradePct": 0.6717043502240657,
        "smoothedEle": 26.017335299937805,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.548601,
        "lng": 119.619279,
        "ele": 24,
        "distanceKm": 22.636049005372687,
        "gradePct": 0.7319618504403941,
        "smoothedEle": 26.690445555344912,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.548639,
        "lng": 119.619656,
        "ele": 22.25,
        "distanceKm": 22.674710064583824,
        "gradePct": 0.7824406446532052,
        "smoothedEle": 27.12541695637717,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.548738,
        "lng": 119.619998,
        "ele": 21.25,
        "distanceKm": 22.711268544737713,
        "gradePct": 0.8492576449462157,
        "smoothedEle": 27.517086801647604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.549022674999957,
        "lng": 119.62048311203236,
        "ele": 24.954987530735426,
        "distanceKm": 22.76998211014183,
        "gradePct": 0.9349690199942423,
        "smoothedEle": 28.08018234588353,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.549353,
        "lng": 119.620937,
        "ele": 28.25,
        "distanceKm": 22.829056216816635,
        "gradePct": 0.947015915621224,
        "smoothedEle": 28.464358391817914,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.549620740433237,
        "lng": 119.6212761402133,
        "ele": 28.65535517918405,
        "distanceKm": 22.87467882253571,
        "gradePct": 0.9159317416710472,
        "smoothedEle": 28.65285155426741,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.549879870216618,
        "lng": 119.62162457010665,
        "ele": 29.452677589591993,
        "distanceKm": 22.920413838669585,
        "gradePct": 0.8562189564993239,
        "smoothedEle": 28.729374501008245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.550139,
        "lng": 119.621973,
        "ele": 30.25,
        "distanceKm": 22.966148800434947,
        "gradePct": 0.7766378997648061,
        "smoothedEle": 28.739580892386925,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.550395333333334,
        "lng": 119.622314,
        "ele": 31.583333333333368,
        "distanceKm": 23.011100273908323,
        "gradePct": 0.6890249628025145,
        "smoothedEle": 28.734504102506566,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.550651666666667,
        "lng": 119.622655,
        "ele": 32.91666666666663,
        "distanceKm": 23.05605169496899,
        "gradePct": 0.598622393810831,
        "smoothedEle": 28.755865976784293,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.550908,
        "lng": 119.622996,
        "ele": 34.25,
        "distanceKm": 23.101003063618695,
        "gradePct": 0.5157051520358173,
        "smoothedEle": 28.85175085960894,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55115,
        "lng": 119.623534,
        "ele": 34.25,
        "distanceKm": 23.162089300981393,
        "gradePct": 0.4204487147761214,
        "smoothedEle": 29.08566568225669,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551369,
        "lng": 119.624204,
        "ele": 34.25,
        "distanceKm": 23.23459596022344,
        "gradePct": 0.38020091030427566,
        "smoothedEle": 29.64181416114604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551463,
        "lng": 119.62471400000001,
        "ele": 32.125,
        "distanceKm": 23.287622029518445,
        "gradePct": 0.3469228455812569,
        "smoothedEle": 29.929514084695484,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551557,
        "lng": 119.625224,
        "ele": 30,
        "distanceKm": 23.340648062366,
        "gradePct": 0.297494974160714,
        "smoothedEle": 29.999725827979987,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551613,
        "lng": 119.625565,
        "ele": 28.25,
        "distanceKm": 23.375960439865214,
        "gradePct": 0.26440084220403154,
        "smoothedEle": 29.97700014268017,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551686,
        "lng": 119.625936,
        "ele": 26.5,
        "distanceKm": 23.414638773471285,
        "gradePct": 0.24646969766307764,
        "smoothedEle": 29.952060261638117,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551821,
        "lng": 119.626259,
        "ele": 26.25,
        "distanceKm": 23.450823611383644,
        "gradePct": 0.2377739804335796,
        "smoothedEle": 29.92503076595149,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55213,
        "lng": 119.626628,
        "ele": 26.25,
        "distanceKm": 23.50176769266113,
        "gradePct": 0.22490279297527352,
        "smoothedEle": 29.86007208297736,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.552594,
        "lng": 119.626826,
        "ele": 27.25,
        "distanceKm": 23.557169217984267,
        "gradePct": 0.19498702815028324,
        "smoothedEle": 29.73318488396135,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5529505,
        "lng": 119.62686199999999,
        "ele": 27.5,
        "distanceKm": 23.596979745051197,
        "gradePct": 0.1520243026488899,
        "smoothedEle": 29.603290310927378,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.553307,
        "lng": 119.626898,
        "ele": 27.75,
        "distanceKm": 23.636790271200464,
        "gradePct": 0.09267034686765498,
        "smoothedEle": 29.452140962587343,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55366,
        "lng": 119.626943,
        "ele": 28.75,
        "distanceKm": 23.676309234191802,
        "gradePct": 0.020187953874361144,
        "smoothedEle": 29.295676732908696,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.554168,
        "lng": 119.627107,
        "ele": 30.25,
        "distanceKm": 23.73521796858393,
        "gradePct": -0.11920061762439219,
        "smoothedEle": 29.04918586131481,
        "gradeBand": "descent"
      },
      {
        "lat": 23.554637,
        "lng": 119.627466,
        "ele": 29.5,
        "distanceKm": 23.798926077337164,
        "gradePct": -0.21934041799075102,
        "smoothedEle": 28.847779678743386,
        "gradeBand": "descent"
      },
      {
        "lat": 23.554903,
        "lng": 119.627774,
        "ele": 27.75,
        "distanceKm": 23.842059187367127,
        "gradePct": -0.23882806787213226,
        "smoothedEle": 28.804677342950146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.555220788458183,
        "lng": 119.62815461067026,
        "ele": 28.362899630052237,
        "distanceKm": 23.894535550203024,
        "gradePct": -0.2220119683863821,
        "smoothedEle": 28.85496302564416,
        "gradeBand": "descent"
      },
      {
        "lat": 23.555538576916362,
        "lng": 119.62853522134053,
        "ele": 28.975799260104477,
        "distanceKm": 23.94701184368622,
        "gradePct": -0.18642364289201224,
        "smoothedEle": 28.995759881049338,
        "gradeBand": "descent"
      },
      {
        "lat": 23.555856365374545,
        "lng": 119.62891583201078,
        "ele": 29.58869889015667,
        "distanceKm": 23.99948806781537,
        "gradePct": -0.15632189556179554,
        "smoothedEle": 29.081369349660427,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556174178315004,
        "lng": 119.6292964200475,
        "ele": 30.068177058432266,
        "distanceKm": 24.051964350298604,
        "gradePct": -0.13614976004886328,
        "smoothedEle": 29.064356894164593,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556492,
        "lng": 119.629677,
        "ele": 30.5,
        "distanceKm": 24.104440609105566,
        "gradePct": -0.13530528819998222,
        "smoothedEle": 28.898437071742404,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55676075,
        "lng": 119.63000525,
        "ele": 30.3125,
        "distanceKm": 24.149301263639,
        "gradePct": -0.15176814227332686,
        "smoothedEle": 28.643766492077283,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5570295,
        "lng": 119.6303335,
        "ele": 30.125,
        "distanceKm": 24.19416186714189,
        "gradePct": -0.19025527922053057,
        "smoothedEle": 28.26969985135985,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55729825,
        "lng": 119.63066175,
        "ele": 29.9375,
        "distanceKm": 24.239022419611572,
        "gradePct": -0.25362600115572964,
        "smoothedEle": 27.769028501824803,
        "gradeBand": "descent"
      },
      {
        "lat": 23.557567,
        "lng": 119.63099,
        "ele": 29.75,
        "distanceKm": 24.283882921048626,
        "gradePct": -0.326815187641752,
        "smoothedEle": 27.261261025489283,
        "gradeBand": "descent"
      },
      {
        "lat": 23.557858999999997,
        "lng": 119.631338,
        "ele": 29.75,
        "distanceKm": 24.331970527301674,
        "gradePct": -0.4153476253204026,
        "smoothedEle": 26.738020678444023,
        "gradeBand": "descent"
      },
      {
        "lat": 23.558151,
        "lng": 119.631686,
        "ele": 29.75,
        "distanceKm": 24.38005807541557,
        "gradePct": -0.519504690499356,
        "smoothedEle": 26.24356647554629,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55845,
        "lng": 119.632034,
        "ele": 29,
        "distanceKm": 24.428674512181537,
        "gradePct": -0.6511251177442773,
        "smoothedEle": 25.69093419756119,
        "gradeBand": "descent"
      },
      {
        "lat": 23.558718,
        "lng": 119.6323995,
        "ele": 27.75,
        "distanceKm": 24.476381387058677,
        "gradePct": -0.7794173030341568,
        "smoothedEle": 25.146586702693305,
        "gradeBand": "descent"
      },
      {
        "lat": 23.558986,
        "lng": 119.632765,
        "ele": 26.5,
        "distanceKm": 24.52408820260212,
        "gradePct": -0.8882437764449953,
        "smoothedEle": 24.632175270290247,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55926060049064,
        "lng": 119.63310734823776,
        "ele": 24.67381222676308,
        "distanceKm": 24.570455877163536,
        "gradePct": -0.9744966878662873,
        "smoothedEle": 24.133406808705985,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55953680024532,
        "lng": 119.63344817411887,
        "ele": 22.461906113381453,
        "distanceKm": 24.616824429456468,
        "gradePct": -1.0588348520954227,
        "smoothedEle": 23.533960789593216,
        "gradeBand": "descent"
      },
      {
        "lat": 23.559813,
        "lng": 119.633789,
        "ele": 20.25,
        "distanceKm": 24.663192927042463,
        "gradePct": -1.1278752858352745,
        "smoothedEle": 22.888555511923997,
        "gradeBand": "descent"
      },
      {
        "lat": 23.560293,
        "lng": 119.634267,
        "ele": 18.5,
        "distanceKm": 24.735459425086752,
        "gradePct": -1.2032833955113744,
        "smoothedEle": 21.79237673398828,
        "gradeBand": "descent"
      },
      {
        "lat": 23.560592,
        "lng": 119.634534,
        "ele": 18.75,
        "distanceKm": 24.778424481140107,
        "gradePct": -1.2487369527692778,
        "smoothedEle": 21.07935930392491,
        "gradeBand": "descent"
      },
      {
        "lat": 23.560422,
        "lng": 119.634843,
        "ele": 18,
        "distanceKm": 24.815156850832146,
        "gradePct": -1.3006441284367354,
        "smoothedEle": 20.417749336434028,
        "gradeBand": "descent"
      },
      {
        "lat": 23.560295741797457,
        "lng": 119.63530291585091,
        "ele": 17.54512339938992,
        "distanceKm": 24.864091319453888,
        "gradePct": -1.3888812996925473,
        "smoothedEle": 19.463336149534623,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56017,
        "lng": 119.635763,
        "ele": 17,
        "distanceKm": 24.913025826375375,
        "gradePct": -1.4885128763828177,
        "smoothedEle": 18.42625140178972,
        "gradeBand": "descent"
      },
      {
        "lat": 23.560046,
        "lng": 119.636103,
        "ele": 17.5,
        "distanceKm": 24.95032290471404,
        "gradePct": -1.5659161947027587,
        "smoothedEle": 17.61433959606753,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56009627988,
        "lng": 119.63647931722967,
        "ele": 18.480328681318415,
        "distanceKm": 24.989084747910766,
        "gradePct": -1.6440873983369824,
        "smoothedEle": 16.78917234251676,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56022,
        "lng": 119.636843,
        "ele": 19.5,
        "distanceKm": 25.028623925479,
        "gradePct": -1.7158329041226636,
        "smoothedEle": 16.00422082128667,
        "gradeBand": "descent"
      },
      {
        "lat": 23.559562,
        "lng": 119.636726,
        "ele": 17.5,
        "distanceKm": 25.102755773482023,
        "gradePct": -1.8060187862110646,
        "smoothedEle": 14.685744432909203,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55915062592859,
        "lng": 119.63670715625703,
        "ele": 16.183596388043938,
        "distanceKm": 25.14853885196596,
        "gradePct": -1.8191615100552554,
        "smoothedEle": 13.996718715200728,
        "gradeBand": "descent"
      },
      {
        "lat": 23.558738811315248,
        "lng": 119.6367032960942,
        "ele": 15.074023549453603,
        "distanceKm": 25.19433230123707,
        "gradePct": -1.8052521010274811,
        "smoothedEle": 13.389955512358537,
        "gradeBand": "descent"
      },
      {
        "lat": 23.558327,
        "lng": 119.636699,
        "ele": 14,
        "distanceKm": 25.240125787127727,
        "gradePct": -1.7720691947337128,
        "smoothedEle": 12.854591143667761,
        "gradeBand": "descent"
      },
      {
        "lat": 23.557973,
        "lng": 119.636799,
        "ele": 12.25,
        "distanceKm": 25.280787102306874,
        "gradePct": -1.7303525144333132,
        "smoothedEle": 12.385042066038613,
        "gradeBand": "descent"
      },
      {
        "lat": 23.557678,
        "lng": 119.637082,
        "ele": 10.75,
        "distanceKm": 25.324468602183824,
        "gradePct": -1.6688799922421054,
        "smoothedEle": 11.891733869150112,
        "gradeBand": "descent"
      },
      {
        "lat": 23.557283,
        "lng": 119.6374,
        "ele": 8.75,
        "distanceKm": 25.379055753637633,
        "gradePct": -1.5717100245685152,
        "smoothedEle": 11.287639958877461,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556995,
        "lng": 119.637562,
        "ele": 7.75,
        "distanceKm": 25.415086395460545,
        "gradePct": -1.489163451585511,
        "smoothedEle": 10.935578073594012,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556673,
        "lng": 119.637726,
        "ele": 6.5,
        "distanceKm": 25.454601188326606,
        "gradePct": -1.3875531947146449,
        "smoothedEle": 10.585496954117723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556258,
        "lng": 119.638159,
        "ele": 7,
        "distanceKm": 25.51845542544583,
        "gradePct": -1.2292044402808826,
        "smoothedEle": 10.060068766419604,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556115,
        "lng": 119.638468,
        "ele": 7.25,
        "distanceKm": 25.553737731587447,
        "gradePct": -1.1517655944410066,
        "smoothedEle": 9.79872975800469,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556114,
        "lng": 119.638562,
        "ele": 7,
        "distanceKm": 25.56331971171262,
        "gradePct": -1.1315752902261853,
        "smoothedEle": 9.72926040209719,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556127,
        "lng": 119.638667,
        "ele": 7,
        "distanceKm": 25.574119445352224,
        "gradePct": -1.1020179911661478,
        "smoothedEle": 9.684967592912699,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556187,
        "lng": 119.638742,
        "ele": 7,
        "distanceKm": 25.584266009891785,
        "gradePct": -1.0730281210163521,
        "smoothedEle": 9.649454617024237,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556615,
        "lng": 119.639127,
        "ele": 7,
        "distanceKm": 25.645950150817725,
        "gradePct": -0.906469114823494,
        "smoothedEle": 9.503332549791883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556761,
        "lng": 119.639182,
        "ele": 7,
        "distanceKm": 25.66312532132276,
        "gradePct": -0.8632090070338374,
        "smoothedEle": 9.48740296105394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556460585599037,
        "lng": 119.63898809919539,
        "ele": 7,
        "distanceKm": 25.70193879259946,
        "gradePct": -0.75350000134117,
        "smoothedEle": 9.533529223519416,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556187,
        "lng": 119.638742,
        "ele": 7,
        "distanceKm": 25.74136845769019,
        "gradePct": -0.6352036970218478,
        "smoothedEle": 9.664222536979077,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556127,
        "lng": 119.638667,
        "ele": 7,
        "distanceKm": 25.75151502222975,
        "gradePct": -0.6028844727167869,
        "smoothedEle": 9.708648075121513,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556132,
        "lng": 119.638408,
        "ele": 7.25,
        "distanceKm": 25.777920508548767,
        "gradePct": -0.5107152168043502,
        "smoothedEle": 9.864568857541823,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556373570207047,
        "lng": 119.63804538861001,
        "ele": 6.7551478664232585,
        "distanceKm": 25.823611017815338,
        "gradePct": -0.3348238053874649,
        "smoothedEle": 10.227299798079443,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556673,
        "lng": 119.637726,
        "ele": 6.5,
        "distanceKm": 25.870176948623364,
        "gradePct": -0.1563813589563729,
        "smoothedEle": 10.60399130537555,
        "gradeBand": "descent"
      },
      {
        "lat": 23.556995,
        "lng": 119.637562,
        "ele": 7.75,
        "distanceKm": 25.909691741489425,
        "gradePct": -0.006586160177156941,
        "smoothedEle": 10.955359407475601,
        "gradeBand": "descent"
      },
      {
        "lat": 23.557283,
        "lng": 119.6374,
        "ele": 8.75,
        "distanceKm": 25.945722383312336,
        "gradePct": 0.12866308858790135,
        "smoothedEle": 11.3074741278562,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.557678,
        "lng": 119.637082,
        "ele": 10.75,
        "distanceKm": 26.000309534766146,
        "gradePct": 0.34021201003650847,
        "smoothedEle": 11.91044330040363,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.557973,
        "lng": 119.636799,
        "ele": 12.25,
        "distanceKm": 26.043991034643096,
        "gradePct": 0.5060234376629754,
        "smoothedEle": 12.401041550168118,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.558327,
        "lng": 119.636699,
        "ele": 14,
        "distanceKm": 26.084652349822242,
        "gradePct": 0.6444819767513411,
        "smoothedEle": 12.870949309478195,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55879449714761,
        "lng": 119.63670387701943,
        "ele": 15.219254855912366,
        "distanceKm": 26.136638109416182,
        "gradePct": 0.7926278602434099,
        "smoothedEle": 13.488530920314615,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.559262,
        "lng": 119.636708,
        "ele": 16.5,
        "distanceKm": 26.18862382520351,
        "gradePct": 0.9336751868712018,
        "smoothedEle": 14.186081536317682,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.559741629171413,
        "lng": 119.63677782455312,
        "ele": 18.37838225630207,
        "distanceKm": 26.242428997818003,
        "gradePct": 1.0748670249833758,
        "smoothedEle": 15.043201111973671,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56022,
        "lng": 119.636843,
        "ele": 19.5,
        "distanceKm": 26.296034694425707,
        "gradePct": 1.2016855196414096,
        "smoothedEle": 16.016802593734354,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.560038,
        "lng": 119.636308,
        "ele": 18,
        "distanceKm": 26.354199297888506,
        "gradePct": 1.3454453223298408,
        "smoothedEle": 17.201967943193523,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56017,
        "lng": 119.635763,
        "ele": 17,
        "distanceKm": 26.41165538738764,
        "gradePct": 1.4941173543584063,
        "smoothedEle": 18.44513619619197,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.560295741797457,
        "lng": 119.63530291585091,
        "ele": 17.54512339938992,
        "distanceKm": 26.460589894309127,
        "gradePct": 1.6021234699270501,
        "smoothedEle": 19.48231786712382,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.560422,
        "lng": 119.634843,
        "ele": 18,
        "distanceKm": 26.50952436293087,
        "gradePct": 1.6845974951770804,
        "smoothedEle": 20.43692490039714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.560592,
        "lng": 119.634534,
        "ele": 18.75,
        "distanceKm": 26.546256732622908,
        "gradePct": 1.7342909740242374,
        "smoothedEle": 21.098680252668462,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.560293,
        "lng": 119.634267,
        "ele": 18.5,
        "distanceKm": 26.589221788676262,
        "gradePct": 1.777326773012126,
        "smoothedEle": 21.811867298309004,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.559813,
        "lng": 119.633789,
        "ele": 20.25,
        "distanceKm": 26.66148828672055,
        "gradePct": 1.8182527424573232,
        "smoothedEle": 22.91323731438255,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55953680024532,
        "lng": 119.63344817411887,
        "ele": 22.461906113381453,
        "distanceKm": 26.707856784306546,
        "gradePct": 1.8129171359754073,
        "smoothedEle": 23.5570493899518,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55926060049064,
        "lng": 119.63310734823776,
        "ele": 24.67381222676308,
        "distanceKm": 26.75422533659948,
        "gradePct": 1.7745446217926533,
        "smoothedEle": 24.130172587132883,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.558986,
        "lng": 119.632765,
        "ele": 26.5,
        "distanceKm": 26.800593011160895,
        "gradePct": 1.7053114879109592,
        "smoothedEle": 24.636240560702365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.558718,
        "lng": 119.6323995,
        "ele": 27.75,
        "distanceKm": 26.848299826704338,
        "gradePct": 1.6141109057943133,
        "smoothedEle": 25.152314503549245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55845,
        "lng": 119.632034,
        "ele": 29,
        "distanceKm": 26.896006701581477,
        "gradePct": 1.516877224515089,
        "smoothedEle": 25.690934197561184,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.558151,
        "lng": 119.631686,
        "ele": 29.75,
        "distanceKm": 26.944623138347445,
        "gradePct": 1.4199337658060296,
        "smoothedEle": 26.243566475546288,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.557858999999997,
        "lng": 119.631338,
        "ele": 29.75,
        "distanceKm": 26.99271068646134,
        "gradePct": 1.3258189435096477,
        "smoothedEle": 26.738020678444016,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.557567,
        "lng": 119.63099,
        "ele": 29.75,
        "distanceKm": 27.04079829271439,
        "gradePct": 1.2521835588443544,
        "smoothedEle": 27.261261025489272,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55729825,
        "lng": 119.63066175,
        "ele": 29.9375,
        "distanceKm": 27.085658794151442,
        "gradePct": 1.2032608371124567,
        "smoothedEle": 27.769028501824796,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5570295,
        "lng": 119.6303335,
        "ele": 30.125,
        "distanceKm": 27.130519346621124,
        "gradePct": 1.165688286845525,
        "smoothedEle": 28.269699851359842,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55676075,
        "lng": 119.63000525,
        "ele": 30.3125,
        "distanceKm": 27.175379950124015,
        "gradePct": 1.1075295558900045,
        "smoothedEle": 28.643766492077276,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.556492,
        "lng": 119.629677,
        "ele": 30.5,
        "distanceKm": 27.220240604657448,
        "gradePct": 1.0376643109635155,
        "smoothedEle": 28.898437071742393,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.556174178315004,
        "lng": 119.6292964200475,
        "ele": 30.068177058432266,
        "distanceKm": 27.27271686346441,
        "gradePct": 0.9464726653699558,
        "smoothedEle": 29.064356894164582,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.555856365374545,
        "lng": 119.62891583201078,
        "ele": 29.58869889015667,
        "distanceKm": 27.325193145947644,
        "gradePct": 0.8358028024996096,
        "smoothedEle": 29.08136934966042,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.555538576916362,
        "lng": 119.62853522134053,
        "ele": 28.975799260104477,
        "distanceKm": 27.377669370076795,
        "gradePct": 0.7023715290026538,
        "smoothedEle": 28.995759881049338,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.555220788458183,
        "lng": 119.62815461067026,
        "ele": 28.362899630052237,
        "distanceKm": 27.43014566355999,
        "gradePct": 0.5551929515921863,
        "smoothedEle": 28.85496302564416,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.554903,
        "lng": 119.627774,
        "ele": 27.75,
        "distanceKm": 27.482622026395887,
        "gradePct": 0.4340784101244395,
        "smoothedEle": 28.804677342950153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.554637,
        "lng": 119.627466,
        "ele": 29.5,
        "distanceKm": 27.52575513642585,
        "gradePct": 0.3500405912699648,
        "smoothedEle": 28.847779678743397,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.554168,
        "lng": 119.627107,
        "ele": 30.25,
        "distanceKm": 27.589463245179083,
        "gradePct": 0.24753946934615811,
        "smoothedEle": 29.049185861314818,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55366,
        "lng": 119.626943,
        "ele": 28.75,
        "distanceKm": 27.648371979571213,
        "gradePct": 0.1754228190361246,
        "smoothedEle": 29.295676732908703,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.553307,
        "lng": 119.626898,
        "ele": 27.75,
        "distanceKm": 27.68789094256255,
        "gradePct": 0.14747010048210357,
        "smoothedEle": 29.45214096258735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5529505,
        "lng": 119.62686199999999,
        "ele": 27.5,
        "distanceKm": 27.727701468711818,
        "gradePct": 0.13625268482987565,
        "smoothedEle": 29.60329031092738,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.552594,
        "lng": 119.626826,
        "ele": 27.25,
        "distanceKm": 27.767511995778747,
        "gradePct": 0.13705695577246785,
        "smoothedEle": 29.733184883961357,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55213,
        "lng": 119.626628,
        "ele": 26.25,
        "distanceKm": 27.822913521101885,
        "gradePct": 0.15588835445159577,
        "smoothedEle": 29.860072082977368,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551821,
        "lng": 119.626259,
        "ele": 26.25,
        "distanceKm": 27.87385760237937,
        "gradePct": 0.1846104769526143,
        "smoothedEle": 29.925030765951487,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551686,
        "lng": 119.625936,
        "ele": 26.5,
        "distanceKm": 27.91004244029173,
        "gradePct": 0.20863336382211414,
        "smoothedEle": 29.952067926730468,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551613,
        "lng": 119.625565,
        "ele": 28.25,
        "distanceKm": 27.9487207738978,
        "gradePct": 0.2290137729922364,
        "smoothedEle": 29.982232217495866,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551557,
        "lng": 119.625224,
        "ele": 30,
        "distanceKm": 27.984033151397014,
        "gradePct": 0.23782085033226394,
        "smoothedEle": 29.99519171281539,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551463,
        "lng": 119.62471400000001,
        "ele": 32.125,
        "distanceKm": 28.03705918424457,
        "gradePct": 0.20506236807821665,
        "smoothedEle": 29.908828023691406,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.551369,
        "lng": 119.624204,
        "ele": 34.25,
        "distanceKm": 28.090085253539574,
        "gradePct": 0.11439054140792138,
        "smoothedEle": 29.62374122795148,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.55115,
        "lng": 119.623534,
        "ele": 34.25,
        "distanceKm": 28.16259191278162,
        "gradePct": -0.05669776682407104,
        "smoothedEle": 29.06848772872913,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550908,
        "lng": 119.622996,
        "ele": 34.25,
        "distanceKm": 28.22367815014432,
        "gradePct": -0.15073299104281546,
        "smoothedEle": 28.83434994896883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550651666666667,
        "lng": 119.622655,
        "ele": 32.91666666666663,
        "distanceKm": 28.268629518794025,
        "gradePct": -0.19945586053528855,
        "smoothedEle": 28.738465066144176,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550395333333334,
        "lng": 119.622314,
        "ele": 31.58333333333337,
        "distanceKm": 28.313580939854692,
        "gradePct": -0.2243374392419099,
        "smoothedEle": 28.717010293069563,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550139,
        "lng": 119.621973,
        "ele": 30.25,
        "distanceKm": 28.358532413328067,
        "gradePct": -0.23667679785929963,
        "smoothedEle": 28.722105662709293,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549814,
        "lng": 119.62153599999999,
        "ele": 29.25,
        "distanceKm": 28.415893109677086,
        "gradePct": -0.25059776257149696,
        "smoothedEle": 28.703641908493598,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549489,
        "lng": 119.621099,
        "ele": 28.25,
        "distanceKm": 28.473253891547493,
        "gradePct": -0.28753715803250157,
        "smoothedEle": 28.553549979228485,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549215360627702,
        "lng": 119.62074787457821,
        "ele": 26.877038680338288,
        "distanceKm": 28.520231250358936,
        "gradePct": -0.32772741449931364,
        "smoothedEle": 28.297598667228883,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548952,
        "lng": 119.620386,
        "ele": 24.25,
        "distanceKm": 28.56732971815267,
        "gradePct": -0.35924454429707,
        "smoothedEle": 27.949860266944494,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548738,
        "lng": 119.619998,
        "ele": 21.25,
        "distanceKm": 28.61348698806282,
        "gradePct": -0.39238505761930687,
        "smoothedEle": 27.48260626287165,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548639,
        "lng": 119.619656,
        "ele": 22.25,
        "distanceKm": 28.65004546821671,
        "gradePct": -0.4147306478016269,
        "smoothedEle": 27.090914730078097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548601,
        "lng": 119.619279,
        "ele": 24,
        "distanceKm": 28.688706527427847,
        "gradePct": -0.46249424702652675,
        "smoothedEle": 26.655921641522717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548576,
        "lng": 119.618725,
        "ele": 25.25000000000004,
        "distanceKm": 28.74524685873369,
        "gradePct": -0.5611090463884544,
        "smoothedEle": 25.982796927766852,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548551,
        "lng": 119.618171,
        "ele": 26.5,
        "distanceKm": 28.80178720076396,
        "gradePct": -0.6706594969806773,
        "smoothedEle": 25.369341818104512,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54861,
        "lng": 119.617543,
        "ele": 26.25,
        "distanceKm": 28.866137636063296,
        "gradePct": -0.794014572175606,
        "smoothedEle": 24.749584767335925,
        "gradeBand": "descent"
      },
      {
        "lat": 23.548886,
        "lng": 119.617042,
        "ele": 25.625,
        "distanceKm": 28.92571904047388,
        "gradePct": -0.8895105071761962,
        "smoothedEle": 24.23037854960731,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549162,
        "lng": 119.616541,
        "ele": 25,
        "distanceKm": 28.985300352985625,
        "gradePct": -0.9431228987089085,
        "smoothedEle": 23.772301578456034,
        "gradeBand": "descent"
      },
      {
        "lat": 23.54942731294725,
        "lng": 119.61604027475336,
        "ele": 24.911310674828055,
        "distanceKm": 29.044254013119907,
        "gradePct": -0.9408577018939802,
        "smoothedEle": 23.415944789325003,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549708,
        "lng": 119.615549,
        "ele": 24,
        "distanceKm": 29.103261659083913,
        "gradePct": -0.8631498072456985,
        "smoothedEle": 23.270369109335903,
        "gradeBand": "descent"
      },
      {
        "lat": 23.549940499999998,
        "lng": 119.6151485,
        "ele": 23.25,
        "distanceKm": 29.15158364743967,
        "gradePct": -0.7758648014842813,
        "smoothedEle": 23.19428397150711,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550173,
        "lng": 119.614748,
        "ele": 22.5,
        "distanceKm": 29.199905574795018,
        "gradePct": -0.712577242085463,
        "smoothedEle": 22.95970838154933,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5504505,
        "lng": 119.6142945,
        "ele": 22,
        "distanceKm": 29.255484859023547,
        "gradePct": -0.6675424121500043,
        "smoothedEle": 22.53400394028359,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550728,
        "lng": 119.613841,
        "ele": 21.5,
        "distanceKm": 29.311064062088185,
        "gradePct": -0.6457578654443196,
        "smoothedEle": 22.05120732658144,
        "gradeBand": "descent"
      },
      {
        "lat": 23.550968,
        "lng": 119.61340899999999,
        "ele": 21.124999999999986,
        "distanceKm": 29.36255463690326,
        "gradePct": -0.6287420059960318,
        "smoothedEle": 21.640382491374865,
        "gradeBand": "descent"
      },
      {
        "lat": 23.551208,
        "lng": 119.612977,
        "ele": 20.75,
        "distanceKm": 29.414045142959957,
        "gradePct": -0.6063662146561675,
        "smoothedEle": 21.30027653481907,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55145733333333,
        "lng": 119.61255866666667,
        "ele": 20.916666666666668,
        "distanceKm": 29.464907569108533,
        "gradePct": -0.5769095549493586,
        "smoothedEle": 21.044538947875367,
        "gradeBand": "descent"
      },
      {
        "lat": 23.551706666666668,
        "lng": 119.61214033333333,
        "ele": 21.083333333333332,
        "distanceKm": 29.51576992744747,
        "gradePct": -0.5460236308486905,
        "smoothedEle": 20.85800419434493,
        "gradeBand": "descent"
      },
      {
        "lat": 23.551956,
        "lng": 119.611722,
        "ele": 21.25,
        "distanceKm": 29.566632217973265,
        "gradePct": -0.5319909083797363,
        "smoothedEle": 20.700781768334476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55224483299507,
        "lng": 119.61121273689785,
        "ele": 20.085566986303668,
        "distanceKm": 29.62767457946401,
        "gradePct": -0.5196990343375247,
        "smoothedEle": 20.63343469963001,
        "gradeBand": "descent"
      },
      {
        "lat": 23.552533,
        "lng": 119.610703,
        "ele": 18.25,
        "distanceKm": 29.68871901470757,
        "gradePct": -0.47113860533823626,
        "smoothedEle": 20.65831976852142,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55282,
        "lng": 119.610249,
        "ele": 16.75,
        "distanceKm": 29.744932903975233,
        "gradePct": -0.37386033392407825,
        "smoothedEle": 20.745524004704134,
        "gradeBand": "descent"
      },
      {
        "lat": 23.553053,
        "lng": 119.60984450000001,
        "ele": 17.625,
        "distanceKm": 29.793628585294886,
        "gradePct": -0.3014726411533289,
        "smoothedEle": 20.69529985767193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.553286,
        "lng": 119.60944,
        "ele": 18.5,
        "distanceKm": 29.842324204729266,
        "gradePct": -0.22950088876962554,
        "smoothedEle": 20.654289412497658,
        "gradeBand": "descent"
      },
      {
        "lat": 23.553512,
        "lng": 119.609065,
        "ele": 19.416666666666643,
        "distanceKm": 29.88806926808032,
        "gradePct": -0.1685242199310494,
        "smoothedEle": 20.629231720772374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.553738,
        "lng": 119.60869000000001,
        "ele": 20.333333333333357,
        "distanceKm": 29.933814276510258,
        "gradePct": -0.11570836440120544,
        "smoothedEle": 20.622335000826173,
        "gradeBand": "descent"
      },
      {
        "lat": 23.553964,
        "lng": 119.608315,
        "ele": 21.25,
        "distanceKm": 29.97955923002147,
        "gradePct": -0.07695521800528625,
        "smoothedEle": 20.606028739997114,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55427420709993,
        "lng": 119.6078665735157,
        "ele": 21.792414199860602,
        "distanceKm": 30.036822303387073,
        "gradePct": -0.044567195664299675,
        "smoothedEle": 20.570092389034674,
        "gradeBand": "descent"
      },
      {
        "lat": 23.554594,
        "lng": 119.607426,
        "ele": 23,
        "distanceKm": 30.094103925834837,
        "gradePct": -0.03177573971286165,
        "smoothedEle": 20.511593970456197,
        "gradeBand": "descent"
      },
      {
        "lat": 23.55504,
        "lng": 119.606922,
        "ele": 23.5,
        "distanceKm": 30.16550860230978,
        "gradePct": -0.013604448098353573,
        "smoothedEle": 20.580835687499675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.555274896099398,
        "lng": 119.60661272905548,
        "ele": 23.849863288680577,
        "distanceKm": 30.206447287520984,
        "gradePct": 0.014282244923779787,
        "smoothedEle": 20.757232745993093,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.555518,
        "lng": 119.606311,
        "ele": 24,
        "distanceKm": 30.24739365762808,
        "gradePct": 0.06225479762960618,
        "smoothedEle": 21.054260000777273,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 30.24739365762808,
      "elevationGainM": 89.82226419098545,
      "elevationLossM": 90.3429983829671,
      "minimumElevationM": 3.5,
      "maximumElevationM": 34.25,
      "maximumSustainedGradePct": 1.8182527424573232
    },
    "climbs": [
      {
        "startIndex": 128,
        "endIndex": 338,
        "startDistanceKm": 6.376605016854486,
        "endDistanceKm": 16.684232398689474,
        "distanceKm": 10.307627381834987,
        "gainM": 34.11690326099098,
        "averageGradePct": 0.3309869671959117,
        "maximumGradePct": 1.5654367185648652
      }
    ]
  },
  "penghu-north-loop": {
    "routeId": "penghu-north-loop",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T04:48:39.203Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "8801b9857133c4e8819b2534a7f6eac560f7a1db3751e6399dfd2aee437299b0",
      "roadPolicyAuditSha256": "6298ace620be9452b0cf282421adf9960a98fa336434a12ad51621ed06a3e4df",
      "elevationAnalysis": {
        "smoothingWindowM": 1000,
        "gradeWindowM": 500,
        "reason": "本線為長距離澎湖與西嶼低丘往返，SRTM 100/100 公尺視窗回報爬升 511 公尺、最大坡度 9.34%；500/200、750/300、1000/500 依序為 377/5.53%、300/4.91%、260/4.27%。採 1000/500 抑制海岸與橋梁短波，同時保留西嶼 4 至 61.25 公尺的實際起伏；僅供規劃，並非道路測量。",
        "referenceUrl": "https://www.penghu-nsa.gov.tw/ChiHoOneLer/tour/PopularDestination/Bike.htm",
        "referenceLabel": "澎湖國家風景區官方單車必騎資訊"
      },
      "reviewedAt": "2026-08-01T04:50:06.715Z",
      "reviewerNote": "初版觀音亭、中屯、小門、二崁與燈塔景點點位導入 footway、service 與景點支路；核准版改用觀音亭外一般道路、縣道 203 實體橋面、澎 3、縣道 203 與澎 6 主線，並為排除 428 公尺 service 犧牲大菓葉景點支線。raw 的 service、track、footway、path、steps、pedestrian、軍事／私人／權限禁制、route=ferry 與非法逆向單行均為 0。live OSM 五窗 5/5 在 0.05 公尺內命中縣道 203、澎 6 等合法道路；橋段沿同一實體跨海大橋去回，不以海上直線返回。西嶼強風、曝曬與燈塔入口開放狀態須於出發前確認。"
    },
    "waypoints": [
      {
        "name": "馬公觀音亭外一般道路",
        "lat": 23.5673086,
        "lng": 119.5621406,
        "role": "start"
      },
      {
        "name": "東衛縣道203主線",
        "lat": 23.5781077,
        "lng": 119.6038277,
        "role": "via"
      },
      {
        "name": "跨海大橋白沙端縣道203",
        "lat": 23.6510816,
        "lng": 119.5485775,
        "role": "via"
      },
      {
        "name": "跨海大橋西嶼端縣道203",
        "lat": 23.6457493,
        "lng": 119.5443402,
        "role": "via"
      },
      {
        "name": "二崁外澎3主線",
        "lat": 23.6053421,
        "lng": 119.5178962,
        "role": "via"
      },
      {
        "name": "縣道203與澎6路口",
        "lat": 23.5665882,
        "lng": 119.489387,
        "role": "via"
      },
      {
        "name": "西嶼燈塔外澎6主線",
        "lat": 23.5626347,
        "lng": 119.4704057,
        "role": "via"
      },
      {
        "name": "回程縣道203與澎6路口",
        "lat": 23.5665882,
        "lng": 119.489387,
        "role": "via"
      },
      {
        "name": "回程二崁外澎3主線",
        "lat": 23.6053421,
        "lng": 119.5178962,
        "role": "via"
      },
      {
        "name": "回程跨海大橋西嶼端",
        "lat": 23.6457493,
        "lng": 119.5443402,
        "role": "via"
      },
      {
        "name": "回程跨海大橋白沙端",
        "lat": 23.6510816,
        "lng": 119.5485775,
        "role": "via"
      },
      {
        "name": "回程東衛縣道203主線",
        "lat": 23.5781077,
        "lng": 119.6038277,
        "role": "via"
      },
      {
        "name": "馬公觀音亭外一般道路",
        "lat": 23.5673086,
        "lng": 119.5621406,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 23.567309,
        "lng": 119.562141,
        "ele": 11.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 14.638892666576368,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567572,
        "lng": 119.562523,
        "ele": 12.5,
        "distanceKm": 0.048693442707467366,
        "gradePct": 1.023420449613957,
        "smoothedEle": 15.137231316865645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567846352834692,
        "lng": 119.56297119375239,
        "ele": 11.893686158961916,
        "distanceKm": 0.10362354260589127,
        "gradePct": 0.9924751576773364,
        "smoothedEle": 15.667330584445029,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568127292785302,
        "lng": 119.5634146322399,
        "ele": 11.570239579243676,
        "distanceKm": 0.15856432836448248,
        "gradePct": 0.9514438540977546,
        "smoothedEle": 16.14754322359162,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568407,
        "lng": 119.563859,
        "ele": 11.75,
        "distanceKm": 0.21350525830363845,
        "gradePct": 0.8759294138201072,
        "smoothedEle": 16.509048024110534,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56862224542723,
        "lng": 119.56420294887856,
        "ele": 13.044431263384467,
        "distanceKm": 0.2559517747607214,
        "gradePct": 0.8142808765288435,
        "smoothedEle": 16.7230590215891,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568836,
        "lng": 119.564548,
        "ele": 14.5,
        "distanceKm": 0.2983980180891475,
        "gradePct": 0.7571109570251411,
        "smoothedEle": 16.898096757075166,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569043,
        "lng": 119.56483,
        "ele": 16.5,
        "distanceKm": 0.33521997312899765,
        "gradePct": 0.7246051412424772,
        "smoothedEle": 17.067913826340735,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568997500000002,
        "lng": 119.5652855,
        "ele": 18,
        "distanceKm": 0.38191899085266984,
        "gradePct": 0.6910534771982361,
        "smoothedEle": 17.278157132944155,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568952,
        "lng": 119.565741,
        "ele": 19.5,
        "distanceKm": 0.42861802456457715,
        "gradePct": 0.6649223075424313,
        "smoothedEle": 17.48886952605394,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568906,
        "lng": 119.566385,
        "ele": 20,
        "distanceKm": 0.49445296123971766,
        "gradePct": 0.631682171266627,
        "smoothedEle": 17.76226386802755,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56887,
        "lng": 119.566962,
        "ele": 20.5,
        "distanceKm": 0.5533964166841406,
        "gradePct": 0.6069945047091917,
        "smoothedEle": 18.217589577286095,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56883562567998,
        "lng": 119.56740955052848,
        "ele": 21.429144000670117,
        "distanceKm": 0.5991702781596752,
        "gradePct": 0.5883603388147908,
        "smoothedEle": 18.566156346823213,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568816121468164,
        "lng": 119.56785829125997,
        "ele": 21.420715605438083,
        "distanceKm": 0.6449569823078042,
        "gradePct": 0.5788882346754043,
        "smoothedEle": 18.92304871974024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568796,
        "lng": 119.568307,
        "ele": 20.75,
        "distanceKm": 0.6907437390878424,
        "gradePct": 0.585200064232496,
        "smoothedEle": 19.285280249379365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568768499999997,
        "lng": 119.568692,
        "ele": 20.375,
        "distanceKm": 0.7301016253756122,
        "gradePct": 0.5913958277038702,
        "smoothedEle": 19.549704349076617,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568741,
        "lng": 119.569077,
        "ele": 20,
        "distanceKm": 0.7694595198543743,
        "gradePct": 0.5900484915278553,
        "smoothedEle": 19.729004055647728,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569086,
        "lng": 119.569479,
        "ele": 20.75,
        "distanceKm": 0.8255873244296092,
        "gradePct": 0.554970799894501,
        "smoothedEle": 19.798343563993775,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569429,
        "lng": 119.569918,
        "ele": 21.25,
        "distanceKm": 0.8843796280380666,
        "gradePct": 0.49491223469150397,
        "smoothedEle": 19.7638210361307,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569652,
        "lng": 119.570318,
        "ele": 21.75,
        "distanceKm": 0.9320960119157253,
        "gradePct": 0.4332002169066527,
        "smoothedEle": 19.669313733209947,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569884,
        "lng": 119.5708,
        "ele": 21.5,
        "distanceKm": 0.9875823749244527,
        "gradePct": 0.3584701686786204,
        "smoothedEle": 19.52608306060577,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570077,
        "lng": 119.571199,
        "ele": 20,
        "distanceKm": 1.0335631929587847,
        "gradePct": 0.2660868868774095,
        "smoothedEle": 19.394816559012924,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570399,
        "lng": 119.571692,
        "ele": 19.75,
        "distanceKm": 1.0952609186657296,
        "gradePct": 0.1396558401746077,
        "smoothedEle": 19.234665876407057,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570636940585853,
        "lng": 119.57199856376367,
        "ele": 19.5,
        "distanceKm": 1.1362026483764112,
        "gradePct": 0.056367807363308486,
        "smoothedEle": 19.136650588841565,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570875,
        "lng": 119.572305,
        "ele": 19.5,
        "distanceKm": 1.1771429590157254,
        "gradePct": -0.02265914779959175,
        "smoothedEle": 19.06438502711868,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571159,
        "lng": 119.5728,
        "ele": 17.75,
        "distanceKm": 1.2366608414121116,
        "gradePct": -0.11297584126169155,
        "smoothedEle": 19.014706454414938,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571381,
        "lng": 119.573268,
        "ele": 15.75,
        "distanceKm": 1.2903674345041345,
        "gradePct": -0.15169469907593083,
        "smoothedEle": 18.99635990694085,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571604,
        "lng": 119.573758,
        "ele": 16.5,
        "distanceKm": 1.3461241494463994,
        "gradePct": -0.17013377372124908,
        "smoothedEle": 18.935615581007816,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571678666666667,
        "lng": 119.57417166666667,
        "ele": 16.75,
        "distanceKm": 1.3890935769676052,
        "gradePct": -0.17585285502586245,
        "smoothedEle": 18.875220290731992,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571753333333334,
        "lng": 119.57458533333333,
        "ele": 17,
        "distanceKm": 1.4320629809680512,
        "gradePct": -0.169808169646047,
        "smoothedEle": 18.820338306235975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571828,
        "lng": 119.574999,
        "ele": 17.25,
        "distanceKm": 1.4750323614505094,
        "gradePct": -0.15593617491108916,
        "smoothedEle": 18.778798378080097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571919,
        "lng": 119.575394,
        "ele": 17.25,
        "distanceKm": 1.5165417377224912,
        "gradePct": -0.13352302003743047,
        "smoothedEle": 18.775794480359647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572136476331032,
        "lng": 119.57579342675827,
        "ele": 18.190737974261644,
        "distanceKm": 1.5638909437938717,
        "gradePct": -0.0913123810259556,
        "smoothedEle": 18.859531979060254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572343,
        "lng": 119.5762,
        "ele": 19,
        "distanceKm": 1.6112655421492497,
        "gradePct": -0.041333730749617104,
        "smoothedEle": 18.98968184653295,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572401,
        "lng": 119.576633,
        "ele": 19.5,
        "distanceKm": 1.655864153382886,
        "gradePct": 0.002055869316174608,
        "smoothedEle": 19.112224539165727,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572307988483804,
        "lng": 119.57702700467925,
        "ele": 19.75,
        "distanceKm": 1.6973302357954239,
        "gradePct": 0.025409886137941838,
        "smoothedEle": 19.174584478326395,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572170494241902,
        "lng": 119.57740750233963,
        "ele": 19.75,
        "distanceKm": 1.7390142420505748,
        "gradePct": 0.04603418677745879,
        "smoothedEle": 19.24407345019979,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572033,
        "lng": 119.577788,
        "ele": 19.75,
        "distanceKm": 1.7806982860788145,
        "gradePct": 0.06395438169834548,
        "smoothedEle": 19.319434864097666,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571865,
        "lng": 119.578222,
        "ele": 19.5,
        "distanceKm": 1.8287131990607048,
        "gradePct": 0.08116249500745595,
        "smoothedEle": 19.360396469914665,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571734,
        "lng": 119.578578,
        "ele": 19.75,
        "distanceKm": 1.8678105000336742,
        "gradePct": 0.08293606275738198,
        "smoothedEle": 19.319814840838507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571604,
        "lng": 119.578964,
        "ele": 20.25,
        "distanceKm": 1.9097222033516812,
        "gradePct": 0.08226233497239051,
        "smoothedEle": 19.26018438224433,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571397,
        "lng": 119.579445,
        "ele": 20.75,
        "distanceKm": 1.9638791173085208,
        "gradePct": 0.0735852596885472,
        "smoothedEle": 19.157506888301576,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571126,
        "lng": 119.579971,
        "ele": 21.625,
        "distanceKm": 2.0253764637085157,
        "gradePct": 0.044697119363959814,
        "smoothedEle": 19.01490436990063,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570855,
        "lng": 119.580497,
        "ele": 22.5,
        "distanceKm": 2.0868739065429494,
        "gradePct": -0.02433246366277757,
        "smoothedEle": 18.801009606197383,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570572,
        "lng": 119.580962,
        "ele": 22.25,
        "distanceKm": 2.143761754421383,
        "gradePct": -0.12113903297513104,
        "smoothedEle": 18.473275859998125,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570369682599576,
        "lng": 119.58130634484665,
        "ele": 20.671043989149116,
        "distanceKm": 2.185448144615564,
        "gradePct": -0.1966428500361829,
        "smoothedEle": 18.17350100973932,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57016734129979,
        "lng": 119.58165067242332,
        "ele": 19.585521994574556,
        "distanceKm": 2.227134532791586,
        "gradePct": -0.27893623471109164,
        "smoothedEle": 17.82958830728714,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569965,
        "lng": 119.581995,
        "ele": 18.5,
        "distanceKm": 2.2688209664855683,
        "gradePct": -0.36641866880436286,
        "smoothedEle": 17.465868277286415,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569798,
        "lng": 119.582599,
        "ele": 15.5,
        "distanceKm": 2.3331195319230944,
        "gradePct": -0.4863810541122945,
        "smoothedEle": 16.923917580168297,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569714674938293,
        "lng": 119.58310884464933,
        "ele": 15.327236096998233,
        "distanceKm": 2.3859017170202512,
        "gradePct": -0.5629982166746963,
        "smoothedEle": 16.479084226975154,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56963254737718,
        "lng": 119.58361893968485,
        "ele": 15.138870131143653,
        "distanceKm": 2.4386858570910905,
        "gradePct": -0.6499270101314568,
        "smoothedEle": 15.955636391315776,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569550419816064,
        "lng": 119.58412903472039,
        "ele": 14.950504165289075,
        "distanceKm": 2.4914700291829264,
        "gradePct": -0.7352189843029225,
        "smoothedEle": 15.417433051458202,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569468292254953,
        "lng": 119.58463912975593,
        "ele": 14.762138199434498,
        "distanceKm": 2.5442542332941596,
        "gradePct": -0.8202625115081457,
        "smoothedEle": 14.84793288609143,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56938714961063,
        "lng": 119.58514941127426,
        "ele": 13.714227876275713,
        "distanceKm": 2.597038358105602,
        "gradePct": -0.8956811700432212,
        "smoothedEle": 14.264045840487483,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569306074805315,
        "lng": 119.58565970563713,
        "ele": 12.607113938137852,
        "distanceKm": 2.6498225155254973,
        "gradePct": -0.9344012521309758,
        "smoothedEle": 13.757685500456848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569225,
        "lng": 119.58617,
        "ele": 11.5,
        "distanceKm": 2.7026067045788817,
        "gradePct": -0.9325919528161303,
        "smoothedEle": 13.368983125961295,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569159,
        "lng": 119.586687,
        "ele": 11,
        "distanceKm": 2.7558074202907714,
        "gradePct": -0.8979236078913087,
        "smoothedEle": 13.089795268981591,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569080500000002,
        "lng": 119.587172,
        "ele": 11.249999999999998,
        "distanceKm": 2.80600291840569,
        "gradePct": -0.8496725981761039,
        "smoothedEle": 12.904111284125996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569002,
        "lng": 119.587657,
        "ele": 11.5,
        "distanceKm": 2.856198445615012,
        "gradePct": -0.7754639985059836,
        "smoothedEle": 12.852095019267372,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569013,
        "lng": 119.588033,
        "ele": 10.25,
        "distanceKm": 2.8945395395493017,
        "gradePct": -0.7225837873246846,
        "smoothedEle": 12.780506046844625,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569041666666667,
        "lng": 119.58859199999999,
        "ele": 10.5,
        "distanceKm": 2.951601405886508,
        "gradePct": -0.6397279905405803,
        "smoothedEle": 12.62530560739754,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569070333333336,
        "lng": 119.589151,
        "ele": 10.75,
        "distanceKm": 3.0086632598093876,
        "gradePct": -0.5526520529730679,
        "smoothedEle": 12.468671312244119,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569099,
        "lng": 119.58971,
        "ele": 11,
        "distanceKm": 3.0657251013149898,
        "gradePct": -0.4573670538320567,
        "smoothedEle": 12.323591326166293,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56911055291724,
        "lng": 119.5901303641647,
        "ele": 12.289537164565044,
        "distanceKm": 3.1085874588483113,
        "gradePct": -0.3795161600807095,
        "smoothedEle": 12.255674097024908,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569116,
        "lng": 119.590551,
        "ele": 13.5,
        "distanceKm": 3.151462525345241,
        "gradePct": -0.3174031280842325,
        "smoothedEle": 12.158592839955189,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569095,
        "lng": 119.59121,
        "ele": 14.25,
        "distanceKm": 3.2186677367563914,
        "gradePct": -0.2820138542289531,
        "smoothedEle": 11.874628425672972,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569049,
        "lng": 119.591924,
        "ele": 14.5,
        "distanceKm": 3.2916174757509657,
        "gradePct": -0.29744919063844827,
        "smoothedEle": 11.470080189165174,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568978081558324,
        "lng": 119.59236742909172,
        "ele": 14.456277054251569,
        "distanceKm": 3.3374941922109245,
        "gradePct": -0.33964270480981573,
        "smoothedEle": 11.173264206251343,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56891454077916,
        "lng": 119.59281221454586,
        "ele": 13.35313852712579,
        "distanceKm": 3.3833736440020044,
        "gradePct": -0.3874632043915064,
        "smoothedEle": 10.864038542923138,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568851,
        "lng": 119.593257,
        "ele": 12.25,
        "distanceKm": 3.4292531174628,
        "gradePct": -0.40168173179191347,
        "smoothedEle": 10.677681223592115,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568836,
        "lng": 119.59394,
        "ele": 12.25,
        "distanceKm": 3.4988839240126746,
        "gradePct": -0.3955588786938179,
        "smoothedEle": 10.517721110897792,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568895,
        "lng": 119.594454,
        "ele": 12.25,
        "distanceKm": 3.551679591851252,
        "gradePct": -0.3727679574050867,
        "smoothedEle": 10.495462309485609,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568928,
        "lng": 119.594966,
        "ele": 12.25,
        "distanceKm": 3.603991062112319,
        "gradePct": -0.34331289222747613,
        "smoothedEle": 10.546392822074857,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568916630213383,
        "lng": 119.59539784705892,
        "ele": 9.683295697718025,
        "distanceKm": 3.6480227048934872,
        "gradePct": -0.31576246003407604,
        "smoothedEle": 10.587569264580706,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568877,
        "lng": 119.595828,
        "ele": 7,
        "distanceKm": 3.692084452740677,
        "gradePct": -0.2676901310742892,
        "smoothedEle": 10.648501004120975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568846999999998,
        "lng": 119.5962695,
        "ele": 6,
        "distanceKm": 3.737205263268019,
        "gradePct": -0.2100389023677888,
        "smoothedEle": 10.721632673379238,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568817,
        "lng": 119.596711,
        "ele": 5,
        "distanceKm": 3.782326084043858,
        "gradePct": -0.14077018284403345,
        "smoothedEle": 10.817755382942366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568832,
        "lng": 119.597127,
        "ele": 4.75,
        "distanceKm": 3.8247572804664336,
        "gradePct": -0.06504867387915496,
        "smoothedEle": 10.930426886600376,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568877,
        "lng": 119.597525,
        "ele": 4.5,
        "distanceKm": 3.865628583431784,
        "gradePct": 0.017194923749620016,
        "smoothedEle": 11.069614157572685,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568932500000003,
        "lng": 119.5980405,
        "ele": 6.625,
        "distanceKm": 3.9185291204304993,
        "gradePct": 0.1214947275027825,
        "smoothedEle": 11.32871454452657,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568988,
        "lng": 119.598556,
        "ele": 8.75,
        "distanceKm": 3.971429635380615,
        "gradePct": 0.19901795152509685,
        "smoothedEle": 11.575880525778807,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5694994984406,
        "lng": 119.59871000527879,
        "ele": 10.463415447958345,
        "distanceKm": 4.03043182085498,
        "gradePct": 0.25602316218789734,
        "smoothedEle": 11.784536240180367,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570013,
        "lng": 119.598857,
        "ele": 12.75,
        "distanceKm": 4.089463364776549,
        "gradePct": 0.27528248024219054,
        "smoothedEle": 11.908661039068473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57040141962644,
        "lng": 119.59896326153296,
        "ele": 13.926094611094028,
        "distanceKm": 4.1339908274628545,
        "gradePct": 0.2771625629708357,
        "smoothedEle": 11.96026008902578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570788,
        "lng": 119.599078,
        "ele": 15.25,
        "distanceKm": 4.178538884021744,
        "gradePct": 0.2899080921317392,
        "smoothedEle": 12.079309682555117,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571294,
        "lng": 119.599317,
        "ele": 16.25,
        "distanceKm": 4.23984992505245,
        "gradePct": 0.32067968622632853,
        "smoothedEle": 12.330665134482555,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571663,
        "lng": 119.59954033333334,
        "ele": 16.91666666666666,
        "distanceKm": 4.286771430658284,
        "gradePct": 0.3405040722853755,
        "smoothedEle": 12.532079886829434,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572032,
        "lng": 119.59976366666666,
        "ele": 17.58333333333334,
        "distanceKm": 4.3336929052379585,
        "gradePct": 0.35083776769798974,
        "smoothedEle": 12.715046005902158,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572401,
        "lng": 119.599987,
        "ele": 18.25,
        "distanceKm": 4.380614348792487,
        "gradePct": 0.35116261705622165,
        "smoothedEle": 12.898825696329844,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572778,
        "lng": 119.60023566666666,
        "ele": 17.25,
        "distanceKm": 4.429600156732931,
        "gradePct": 0.32430128799947583,
        "smoothedEle": 13.00194795833035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573155,
        "lng": 119.60048433333334,
        "ele": 16.25,
        "distanceKm": 4.478585927031614,
        "gradePct": 0.2793726775907839,
        "smoothedEle": 12.998051470307116,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573532,
        "lng": 119.600733,
        "ele": 15.25,
        "distanceKm": 4.527571659686547,
        "gradePct": 0.2295679976404969,
        "smoothedEle": 12.922261535730286,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573966,
        "lng": 119.60105899999999,
        "ele": 13.625,
        "distanceKm": 4.586161429403042,
        "gradePct": 0.17112686666363253,
        "smoothedEle": 12.757352439219876,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5744,
        "lng": 119.601385,
        "ele": 12,
        "distanceKm": 4.644751136848759,
        "gradePct": 0.11965382384146181,
        "smoothedEle": 12.587284906182527,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.574820666666668,
        "lng": 119.601665,
        "ele": 10.916666666666666,
        "distanceKm": 4.699544482809922,
        "gradePct": 0.056350300383602205,
        "smoothedEle": 12.447177350299844,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.575241333333334,
        "lng": 119.601945,
        "ele": 9.833333333333334,
        "distanceKm": 4.754337781157876,
        "gradePct": -0.013051429827379125,
        "smoothedEle": 12.327598401271885,
        "gradeBand": "descent"
      },
      {
        "lat": 23.575662,
        "lng": 119.602225,
        "ele": 8.75,
        "distanceKm": 4.809131031891929,
        "gradePct": -0.07783225535454683,
        "smoothedEle": 12.230107887426637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5760095,
        "lng": 119.6024495,
        "ele": 8.5,
        "distanceKm": 4.854037047809923,
        "gradePct": -0.12546790016068846,
        "smoothedEle": 12.167389480315524,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576357,
        "lng": 119.602674,
        "ele": 8.25,
        "distanceKm": 4.898943032873939,
        "gradePct": -0.1681112486151026,
        "smoothedEle": 12.09685400338097,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576772,
        "lng": 119.60296,
        "ele": 8,
        "distanceKm": 4.953523320013075,
        "gradePct": -0.18591164311535843,
        "smoothedEle": 12.070486816278573,
        "gradeBand": "descent"
      },
      {
        "lat": 23.577136390135312,
        "lng": 119.60320504681663,
        "ele": 8.128116591494502,
        "distanceKm": 5.0011196701917395,
        "gradePct": -0.17067285036391944,
        "smoothedEle": 12.109823374929082,
        "gradeBand": "descent"
      },
      {
        "lat": 23.577511,
        "lng": 119.603432,
        "ele": 8.25,
        "distanceKm": 5.04876512356927,
        "gradePct": -0.13189088214114514,
        "smoothedEle": 12.203155158516799,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5778095,
        "lng": 119.60363,
        "ele": 9.625000000000016,
        "distanceKm": 5.087609286273016,
        "gradePct": -0.08468351635799572,
        "smoothedEle": 12.329732183328892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578108,
        "lng": 119.603828,
        "ele": 11,
        "distanceKm": 5.12645342514303,
        "gradePct": -0.03622359647773834,
        "smoothedEle": 12.45927943835802,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578436,
        "lng": 119.604034,
        "ele": 12.250000000000014,
        "distanceKm": 5.168536053366623,
        "gradePct": 0.01786345139764087,
        "smoothedEle": 12.615783710460187,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578764,
        "lng": 119.60424,
        "ele": 13.5,
        "distanceKm": 5.210618655423011,
        "gradePct": 0.0700390278593737,
        "smoothedEle": 12.773204608444201,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.579057,
        "lng": 119.60443950000001,
        "ele": 14.375,
        "distanceKm": 5.249022164717332,
        "gradePct": 0.11951046427831855,
        "smoothedEle": 12.936751335266855,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57935,
        "lng": 119.604639,
        "ele": 15.25,
        "distanceKm": 5.287425649987343,
        "gradePct": 0.16996150318837308,
        "smoothedEle": 13.11853455457302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.579739,
        "lng": 119.604896,
        "ele": 16.25,
        "distanceKm": 5.33799203364568,
        "gradePct": 0.23870153784357803,
        "smoothedEle": 13.383306588625375,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.580094796604197,
        "lng": 119.60512085622955,
        "ele": 16.70151853324542,
        "distanceKm": 5.3837121150514875,
        "gradePct": 0.29626175573333813,
        "smoothedEle": 13.602086543016853,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.580451152855996,
        "lng": 119.605344655575,
        "ele": 16.904293334625173,
        "distanceKm": 5.429432200285703,
        "gradePct": 0.34482482974518724,
        "smoothedEle": 13.806249142351188,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.580807576428,
        "lng": 119.6055683277875,
        "ele": 17.077146667312586,
        "distanceKm": 5.475152281677611,
        "gradePct": 0.3811678932827529,
        "smoothedEle": 13.994201790286363,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.581164,
        "lng": 119.605792,
        "ele": 17.25,
        "distanceKm": 5.520872332211106,
        "gradePct": 0.40488696390426854,
        "smoothedEle": 14.172951313020732,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.581468,
        "lng": 119.605989,
        "ele": 17.25,
        "distanceKm": 5.560187931602462,
        "gradePct": 0.42072123920465715,
        "smoothedEle": 14.343983551009302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.581873,
        "lng": 119.606244,
        "ele": 16.5,
        "distanceKm": 5.612181958533545,
        "gradePct": 0.4195714619665754,
        "smoothedEle": 14.509540653174207,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.582171,
        "lng": 119.606418,
        "ele": 15.62500000000001,
        "distanceKm": 5.649764308419128,
        "gradePct": 0.406094802172635,
        "smoothedEle": 14.576446057862473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.582469,
        "lng": 119.606592,
        "ele": 14.75,
        "distanceKm": 5.687346639310237,
        "gradePct": 0.38358536965472395,
        "smoothedEle": 14.60407643883983,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.582942,
        "lng": 119.606926,
        "ele": 14.5,
        "distanceKm": 5.7499949359900535,
        "gradePct": 0.3233064035877341,
        "smoothedEle": 14.557887974175745,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.583293625908336,
        "lng": 119.60716515364011,
        "ele": 14.25,
        "distanceKm": 5.796067891679084,
        "gradePct": 0.26701289372368325,
        "smoothedEle": 14.498850902917606,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.583644024117522,
        "lng": 119.60740644989681,
        "ele": 13.458731807317792,
        "distanceKm": 5.842141184388304,
        "gradePct": 0.20656632473976302,
        "smoothedEle": 14.435992748500048,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.583993929481874,
        "lng": 119.60764859444322,
        "ele": 12.933264918187016,
        "distanceKm": 5.8882143497130786,
        "gradePct": 0.1528069964753822,
        "smoothedEle": 14.386226210820633,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58434496474094,
        "lng": 119.6078887972216,
        "ele": 12.341632459093507,
        "distanceKm": 5.934288192428118,
        "gradePct": 0.10777702267672708,
        "smoothedEle": 14.365096962574643,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.584696,
        "lng": 119.608129,
        "ele": 11.75,
        "distanceKm": 5.980362000358966,
        "gradePct": 0.07270603137812089,
        "smoothedEle": 14.378100138309877,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58506929756168,
        "lng": 119.60839362621486,
        "ele": 12.567163816736121,
        "distanceKm": 6.029861645199971,
        "gradePct": 0.044058854272999784,
        "smoothedEle": 14.432351240722317,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58544586504112,
        "lng": 119.60865275080991,
        "ele": 12.711442544490748,
        "distanceKm": 6.079365221604889,
        "gradePct": 0.025672025627896743,
        "smoothedEle": 14.533407165621687,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.585822432520562,
        "lng": 119.60891187540496,
        "ele": 12.855721272245374,
        "distanceKm": 6.12886875759222,
        "gradePct": 0.035416212431497125,
        "smoothedEle": 14.71632813463148,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.586199,
        "lng": 119.609171,
        "ele": 13,
        "distanceKm": 6.178372253160768,
        "gradePct": 0.08196347037175684,
        "smoothedEle": 15.007295857508515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58668,
        "lng": 119.609511,
        "ele": 13,
        "distanceKm": 6.2420990430022005,
        "gradePct": 0.19004788927906838,
        "smoothedEle": 15.513948794711947,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5870635,
        "lng": 119.60977799999999,
        "ele": 13.999999999999991,
        "distanceKm": 6.292683282155611,
        "gradePct": 0.28900139974202016,
        "smoothedEle": 15.948194880461166,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.587447,
        "lng": 119.610045,
        "ele": 15,
        "distanceKm": 6.343267478539481,
        "gradePct": 0.39051086365794846,
        "smoothedEle": 16.387330485295607,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.587825333333335,
        "lng": 119.6103305,
        "ele": 16.04166666666667,
        "distanceKm": 6.394416593529133,
        "gradePct": 0.4919415080655092,
        "smoothedEle": 16.843089431214153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58820366666667,
        "lng": 119.610616,
        "ele": 17.08333333333334,
        "distanceKm": 6.44556566080541,
        "gradePct": 0.5864661563605935,
        "smoothedEle": 17.300610526738005,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.588582,
        "lng": 119.6109015,
        "ele": 18.12499999999999,
        "distanceKm": 6.4967146803690055,
        "gradePct": 0.6720790715426226,
        "smoothedEle": 17.756417865381238,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.588960333333333,
        "lng": 119.611187,
        "ele": 19.16666666666666,
        "distanceKm": 6.547863652219117,
        "gradePct": 0.7360338289053431,
        "smoothedEle": 18.149269436559678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.589338666666666,
        "lng": 119.61147249999999,
        "ele": 20.20833333333333,
        "distanceKm": 6.599012576353968,
        "gradePct": 0.7775738769666998,
        "smoothedEle": 18.493875670851363,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.589717,
        "lng": 119.611758,
        "ele": 21.25,
        "distanceKm": 6.650161452774578,
        "gradePct": 0.7908813261573042,
        "smoothedEle": 18.795887281618526,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.59003443325152,
        "lng": 119.61201035581954,
        "ele": 22.153853221869486,
        "distanceKm": 6.693832737059596,
        "gradePct": 0.7778725115836408,
        "smoothedEle": 19.019575317367302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.590353,
        "lng": 119.612261,
        "ele": 23.25,
        "distanceKm": 6.7375036781237805,
        "gradePct": 0.7475820415299569,
        "smoothedEle": 19.215324051849297,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.590778,
        "lng": 119.612578,
        "ele": 22.750000000000004,
        "distanceKm": 6.794746990493906,
        "gradePct": 0.6867586988394155,
        "smoothedEle": 19.399904005905242,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.591203,
        "lng": 119.612895,
        "ele": 22.25,
        "distanceKm": 6.851990243815632,
        "gradePct": 0.6019339303361022,
        "smoothedEle": 19.474723442815485,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.591613,
        "lng": 119.613035,
        "ele": 21.75,
        "distanceKm": 6.8997602353814855,
        "gradePct": 0.5117431626202319,
        "smoothedEle": 19.449603356862895,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5920834,
        "lng": 119.6130506,
        "ele": 21.05,
        "distanceKm": 6.952090551617885,
        "gradePct": 0.3946476985641056,
        "smoothedEle": 19.33199467203725,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5925538,
        "lng": 119.61306619999999,
        "ele": 20.35,
        "distanceKm": 7.00442086768114,
        "gradePct": 0.26076975721756174,
        "smoothedEle": 19.119454308304825,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5930242,
        "lng": 119.6130818,
        "ele": 19.65,
        "distanceKm": 7.056751183570898,
        "gradePct": 0.12849442495428817,
        "smoothedEle": 18.85161962842813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5934946,
        "lng": 119.6130974,
        "ele": 18.95,
        "distanceKm": 7.109081499287858,
        "gradePct": -0.0072136322287491336,
        "smoothedEle": 18.51726006950479,
        "gradeBand": "descent"
      },
      {
        "lat": 23.593965,
        "lng": 119.613113,
        "ele": 18.25,
        "distanceKm": 7.161411814831666,
        "gradePct": -0.14885821361528853,
        "smoothedEle": 18.109221525717206,
        "gradeBand": "descent"
      },
      {
        "lat": 23.594386714285715,
        "lng": 119.61312414285715,
        "ele": 17.571428571428577,
        "distanceKm": 7.208318113521847,
        "gradePct": -0.28077273259865837,
        "smoothedEle": 17.680640278348786,
        "gradeBand": "descent"
      },
      {
        "lat": 23.59480842857143,
        "lng": 119.61313528571428,
        "ele": 16.89285714285714,
        "distanceKm": 7.255224412123633,
        "gradePct": -0.4174945835343592,
        "smoothedEle": 17.18499129836614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.595230142857144,
        "lng": 119.61314642857143,
        "ele": 16.21428571428571,
        "distanceKm": 7.302130710637093,
        "gradePct": -0.5448814826822279,
        "smoothedEle": 16.685147437814006,
        "gradeBand": "descent"
      },
      {
        "lat": 23.595651857142858,
        "lng": 119.61315757142857,
        "ele": 15.535714285714288,
        "distanceKm": 7.34903700906219,
        "gradePct": -0.6585026857930473,
        "smoothedEle": 16.17835000680148,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596073571428573,
        "lng": 119.61316871428572,
        "ele": 14.857142857142863,
        "distanceKm": 7.395943307398924,
        "gradePct": -0.7615419724265393,
        "smoothedEle": 15.643900645157775,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596495285714287,
        "lng": 119.61317985714285,
        "ele": 14.178571428571423,
        "distanceKm": 7.4428496056472575,
        "gradePct": -0.8523845919876927,
        "smoothedEle": 15.090840084627644,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596917,
        "lng": 119.613191,
        "ele": 13.5,
        "distanceKm": 7.48975590380726,
        "gradePct": -0.9270172970286051,
        "smoothedEle": 14.543929793934337,
        "gradeBand": "descent"
      },
      {
        "lat": 23.597396,
        "lng": 119.613193,
        "ele": 13.75,
        "distanceKm": 7.543018737120014,
        "gradePct": -0.9952826163921695,
        "smoothedEle": 13.945491339069045,
        "gradeBand": "descent"
      },
      {
        "lat": 23.597876199999998,
        "lng": 119.6132052,
        "ele": 13.400000000000002,
        "distanceKm": 7.596429083855112,
        "gradePct": -1.0444742436318095,
        "smoothedEle": 13.37573025246186,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5983564,
        "lng": 119.6132174,
        "ele": 13.049999999999999,
        "distanceKm": 7.649839430484669,
        "gradePct": -1.0726269624304408,
        "smoothedEle": 12.836320812251945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5988366,
        "lng": 119.6132296,
        "ele": 12.700000000000001,
        "distanceKm": 7.703249777007895,
        "gradePct": -1.0797003277098416,
        "smoothedEle": 12.328447857237093,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5993168,
        "lng": 119.6132418,
        "ele": 12.349999999999998,
        "distanceKm": 7.7566601234255765,
        "gradePct": -1.0638325112877087,
        "smoothedEle": 11.85052948569667,
        "gradeBand": "descent"
      },
      {
        "lat": 23.599797,
        "lng": 119.613254,
        "ele": 12,
        "distanceKm": 7.810070469736924,
        "gradePct": -1.039214955007824,
        "smoothedEle": 11.403287818313581,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60022292819265,
        "lng": 119.61322398879943,
        "ele": 10.990007673255583,
        "distanceKm": 7.857530210147265,
        "gradePct": -1.0098043935510226,
        "smoothedEle": 11.03255668724104,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60064889026838,
        "lng": 119.6131945723738,
        "ele": 9.878618690061712,
        "distanceKm": 7.904989843630004,
        "gradePct": -0.9701648867401368,
        "smoothedEle": 10.686410740386906,
        "gradeBand": "descent"
      },
      {
        "lat": 23.601074940671484,
        "lng": 119.6131667061702,
        "ele": 9.30784633563381,
        "distanceKm": 7.952449566266605,
        "gradePct": -0.9228119098667825,
        "smoothedEle": 10.364848503585279,
        "gradeBand": "descent"
      },
      {
        "lat": 23.601501,
        "lng": 119.613139,
        "ele": 9,
        "distanceKm": 7.999909306272036,
        "gradePct": -0.8722230918710765,
        "smoothedEle": 10.068735039417032,
        "gradeBand": "descent"
      },
      {
        "lat": 23.601896999999997,
        "lng": 119.61307675,
        "ele": 8.875000000000002,
        "distanceKm": 8.044397050986763,
        "gradePct": -0.8285742184833361,
        "smoothedEle": 9.787916923150277,
        "gradeBand": "descent"
      },
      {
        "lat": 23.602293,
        "lng": 119.61301449999999,
        "ele": 8.75,
        "distanceKm": 8.088884792971132,
        "gradePct": -0.7901513887828617,
        "smoothedEle": 9.505452909121125,
        "gradeBand": "descent"
      },
      {
        "lat": 23.602689,
        "lng": 119.61295224999999,
        "ele": 8.624999999999998,
        "distanceKm": 8.133372532224302,
        "gradePct": -0.7553966920107829,
        "smoothedEle": 9.225642215078343,
        "gradeBand": "descent"
      },
      {
        "lat": 23.603085,
        "lng": 119.61289,
        "ele": 8.5,
        "distanceKm": 8.177860268746054,
        "gradePct": -0.7225843865859503,
        "smoothedEle": 8.95695189187166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.603503166666666,
        "lng": 119.61282666666666,
        "ele": 8.333333333333332,
        "distanceKm": 8.224804008826068,
        "gradePct": -0.6900175292251376,
        "smoothedEle": 8.685491898859912,
        "gradeBand": "descent"
      },
      {
        "lat": 23.603921333333332,
        "lng": 119.61276333333333,
        "ele": 8.166666666666666,
        "distanceKm": 8.271747746077033,
        "gradePct": -0.660605148466735,
        "smoothedEle": 8.421164672798863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6043395,
        "lng": 119.6127,
        "ele": 8.000000000000002,
        "distanceKm": 8.318691480498911,
        "gradePct": -0.6344870372483697,
        "smoothedEle": 8.163509721150884,
        "gradeBand": "descent"
      },
      {
        "lat": 23.604757666666668,
        "lng": 119.61263666666666,
        "ele": 7.83333333333333,
        "distanceKm": 8.365635212092256,
        "gradePct": -0.6077727692114364,
        "smoothedEle": 7.934579161481213,
        "gradeBand": "descent"
      },
      {
        "lat": 23.605175833333334,
        "lng": 119.61257333333333,
        "ele": 7.666666666666665,
        "distanceKm": 8.412578940855846,
        "gradePct": -0.5773539594781958,
        "smoothedEle": 7.748221192865213,
        "gradeBand": "descent"
      },
      {
        "lat": 23.605594,
        "lng": 119.61251,
        "ele": 7.5,
        "distanceKm": 8.459522666790235,
        "gradePct": -0.5463924150327601,
        "smoothedEle": 7.588755544050371,
        "gradeBand": "descent"
      },
      {
        "lat": 23.606033,
        "lng": 119.61242949999999,
        "ele": 7.375,
        "distanceKm": 8.509021605727536,
        "gradePct": -0.515812166595162,
        "smoothedEle": 7.432155022576972,
        "gradeBand": "descent"
      },
      {
        "lat": 23.606472,
        "lng": 119.612349,
        "ele": 7.25,
        "distanceKm": 8.55852054011367,
        "gradePct": -0.48428449412171604,
        "smoothedEle": 7.276820819919815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607088,
        "lng": 119.612153,
        "ele": 7,
        "distanceKm": 8.629868573096227,
        "gradePct": -0.4314338509281256,
        "smoothedEle": 7.090511509754522,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607463,
        "lng": 119.611935,
        "ele": 7,
        "distanceKm": 8.677113719978195,
        "gradePct": -0.38603724121070865,
        "smoothedEle": 7.031274578502003,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60785257142857,
        "lng": 119.61165414285715,
        "ele": 6.8214285714285685,
        "distanceKm": 8.729030742650448,
        "gradePct": -0.3276973047927592,
        "smoothedEle": 7.023205803483131,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608242142857144,
        "lng": 119.6113732857143,
        "ele": 6.642857142857144,
        "distanceKm": 8.78094771845104,
        "gradePct": -0.26108662923069215,
        "smoothedEle": 7.065236642367876,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608631714285714,
        "lng": 119.61109242857144,
        "ele": 6.464285714285713,
        "distanceKm": 8.832864647378683,
        "gradePct": -0.18756007475821795,
        "smoothedEle": 7.156591045172291,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609021285714284,
        "lng": 119.61081157142857,
        "ele": 6.285714285714287,
        "distanceKm": 8.884781529433871,
        "gradePct": -0.11300665276166823,
        "smoothedEle": 7.293538539496669,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609410857142855,
        "lng": 119.61053071428572,
        "ele": 6.107142857142856,
        "distanceKm": 8.936698364614376,
        "gradePct": -0.03803839437447074,
        "smoothedEle": 7.476096662761974,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60980042857143,
        "lng": 119.61024985714286,
        "ele": 5.9285714285714315,
        "distanceKm": 8.988615152920692,
        "gradePct": 0.040730878405754824,
        "smoothedEle": 7.700369609623703,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61019,
        "lng": 119.609969,
        "ele": 5.75,
        "distanceKm": 9.04053189435153,
        "gradePct": 0.1269600805311125,
        "smoothedEle": 7.968071972091452,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.610495,
        "lng": 119.609723,
        "ele": 5.75,
        "distanceKm": 9.08270306187938,
        "gradePct": 0.19960741941454607,
        "smoothedEle": 8.211710710827408,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61083722358935,
        "lng": 119.60951243526219,
        "ele": 6.7928106022971,
        "distanceKm": 9.12638759559297,
        "gradePct": 0.27512285765195216,
        "smoothedEle": 8.47521558634091,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.611190611794676,
        "lng": 119.6093242176311,
        "ele": 7.646405301148568,
        "distanceKm": 9.170112304457039,
        "gradePct": 0.3409729795615338,
        "smoothedEle": 8.744917994258472,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.611544,
        "lng": 119.609136,
        "ele": 8.5,
        "distanceKm": 9.213836990645214,
        "gradePct": 0.3988115760623744,
        "smoothedEle": 9.019625047376977,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.611901999999997,
        "lng": 119.6089335,
        "ele": 9.124999999999988,
        "distanceKm": 9.258673797452388,
        "gradePct": 0.45258472432419106,
        "smoothedEle": 9.310127788668588,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61226,
        "lng": 119.608731,
        "ele": 9.75,
        "distanceKm": 9.303510578328854,
        "gradePct": 0.5030350337200705,
        "smoothedEle": 9.620114016631629,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.612659333333333,
        "lng": 119.60850966666668,
        "ele": 10.416666666666675,
        "distanceKm": 9.353312557267715,
        "gradePct": 0.5558791489144056,
        "smoothedEle": 9.989924736566644,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613058666666667,
        "lng": 119.60828833333333,
        "ele": 11.083333333333325,
        "distanceKm": 9.403114505096152,
        "gradePct": 0.6097498072156345,
        "smoothedEle": 10.406752861625854,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613458,
        "lng": 119.608067,
        "ele": 11.75,
        "distanceKm": 9.45291642181243,
        "gradePct": 0.6671236536813527,
        "smoothedEle": 10.881774570812071,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613983,
        "lng": 119.60783,
        "ele": 12.5,
        "distanceKm": 9.516090632089869,
        "gradePct": 0.7431285207466756,
        "smoothedEle": 11.55768617980431,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614384384033695,
        "lng": 119.60772443858039,
        "ele": 13.027377127988036,
        "distanceKm": 9.562000104069813,
        "gradePct": 0.7904444040868484,
        "smoothedEle": 12.044323936330958,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614786589355795,
        "lng": 119.60762262572025,
        "ele": 13.101584751992023,
        "distanceKm": 9.607910559810557,
        "gradePct": 0.823773124880936,
        "smoothedEle": 12.482627828969227,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6151887946779,
        "lng": 119.60752081286013,
        "ele": 13.175792375996012,
        "distanceKm": 9.653821008358465,
        "gradePct": 0.8331115439963177,
        "smoothedEle": 12.809987868808253,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615591,
        "lng": 119.607419,
        "ele": 13.25,
        "distanceKm": 9.699731449713326,
        "gradePct": 0.8206933300092015,
        "smoothedEle": 13.034471471188189,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615977286946176,
        "lng": 119.60723153697776,
        "ele": 13.295379358997659,
        "distanceKm": 9.746739528030545,
        "gradePct": 0.7910884857748858,
        "smoothedEle": 13.188246736473813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61633664347309,
        "lng": 119.60698726848888,
        "ele": 13.647689679498836,
        "distanceKm": 9.793814389941273,
        "gradePct": 0.7495164405985044,
        "smoothedEle": 13.300660076414704,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.616696,
        "lng": 119.606743,
        "ele": 14,
        "distanceKm": 9.840889215772586,
        "gradePct": 0.6944816996806665,
        "smoothedEle": 13.370082184706444,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617046035770663,
        "lng": 119.60647405584953,
        "ele": 14.875089426659178,
        "distanceKm": 9.888488920038403,
        "gradePct": 0.6228874938741605,
        "smoothedEle": 13.398778347864656,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617396099218023,
        "lng": 119.60620515444768,
        "ele": 15.852818507746646,
        "distanceKm": 9.936088591848197,
        "gradePct": 0.5334165894833213,
        "smoothedEle": 13.388349949874538,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617746,
        "lng": 119.605936,
        "ele": 16.75,
        "distanceKm": 9.983688278653108,
        "gradePct": 0.42634060385250866,
        "smoothedEle": 13.342710914520138,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617962,
        "lng": 119.6058,
        "ele": 16.75,
        "distanceKm": 10.011416515605056,
        "gradePct": 0.35616434490179677,
        "smoothedEle": 13.28849873791466,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61842,
        "lng": 119.605688,
        "ele": 16,
        "distanceKm": 10.063606531860588,
        "gradePct": 0.22031175829342298,
        "smoothedEle": 13.161219180956252,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.618826666666667,
        "lng": 119.60564266666667,
        "ele": 14.666666666666666,
        "distanceKm": 10.109061117669308,
        "gradePct": 0.10688138541117276,
        "smoothedEle": 13.025238698229762,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.619233333333334,
        "lng": 119.60559733333334,
        "ele": 13.333333333333334,
        "distanceKm": 10.154515702021511,
        "gradePct": 0.012513902476683823,
        "smoothedEle": 12.875954153939418,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61964,
        "lng": 119.605552,
        "ele": 12,
        "distanceKm": 10.19997028491718,
        "gradePct": -0.06437744295388441,
        "smoothedEle": 12.71336554653202,
        "gradeBand": "descent"
      },
      {
        "lat": 23.620067934578184,
        "lng": 119.6055567812077,
        "ele": 11.817181154028654,
        "distanceKm": 10.247556997805289,
        "gradePct": -0.1321341655043078,
        "smoothedEle": 12.529528001936718,
        "gradeBand": "descent"
      },
      {
        "lat": 23.62049596728909,
        "lng": 119.60555489060384,
        "ele": 11.533590577014333,
        "distanceKm": 10.29515251918022,
        "gradePct": -0.19534072547185205,
        "smoothedEle": 12.325929812765114,
        "gradeBand": "descent"
      },
      {
        "lat": 23.620924,
        "lng": 119.605553,
        "ele": 11.25,
        "distanceKm": 10.3427480405526,
        "gradePct": -0.25536839061731664,
        "smoothedEle": 12.094360850749592,
        "gradeBand": "descent"
      },
      {
        "lat": 23.621299999999998,
        "lng": 119.60550966666666,
        "ele": 11.083333333333334,
        "distanceKm": 10.384789825616348,
        "gradePct": -0.3080993554422907,
        "smoothedEle": 11.856051518624305,
        "gradeBand": "descent"
      },
      {
        "lat": 23.621676,
        "lng": 119.60546633333334,
        "ele": 10.916666666666666,
        "distanceKm": 10.42683160934987,
        "gradePct": -0.36121103152578227,
        "smoothedEle": 11.584322862902622,
        "gradeBand": "descent"
      },
      {
        "lat": 23.622052,
        "lng": 119.605423,
        "ele": 10.75,
        "distanceKm": 10.468873391752666,
        "gradePct": -0.41585379876480705,
        "smoothedEle": 11.277646576071081,
        "gradeBand": "descent"
      },
      {
        "lat": 23.622474143236108,
        "lng": 119.60532734802833,
        "ele": 10.410833387468232,
        "distanceKm": 10.516814484655324,
        "gradePct": -0.47624329772038826,
        "smoothedEle": 10.894117832849819,
        "gradeBand": "descent"
      },
      {
        "lat": 23.622891114588885,
        "lng": 119.60520587842265,
        "ele": 10.178666709974587,
        "distanceKm": 10.564802703445238,
        "gradePct": -0.5322108717954535,
        "smoothedEle": 10.496586393386785,
        "gradeBand": "descent"
      },
      {
        "lat": 23.623308085941666,
        "lng": 119.60508440881699,
        "ele": 9.946500032480943,
        "distanceKm": 10.61279091207776,
        "gradePct": -0.5803613831495064,
        "smoothedEle": 10.111182178476437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.623725057294443,
        "lng": 119.60496293921133,
        "ele": 9.71433335498729,
        "distanceKm": 10.660779110552356,
        "gradePct": -0.6137896933153705,
        "smoothedEle": 9.784601810662362,
        "gradeBand": "descent"
      },
      {
        "lat": 23.624142028647224,
        "lng": 119.60484146960566,
        "ele": 9.482166677493645,
        "distanceKm": 10.708767298870027,
        "gradePct": -0.6325071137802084,
        "smoothedEle": 9.51684525066182,
        "gradeBand": "descent"
      },
      {
        "lat": 23.624559,
        "lng": 119.60472,
        "ele": 9.25,
        "distanceKm": 10.756755477029124,
        "gradePct": -0.6429442983267197,
        "smoothedEle": 9.275458402350848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.625056,
        "lng": 119.604533,
        "ele": 9,
        "distanceKm": 10.815210898643175,
        "gradePct": -0.6410092536740073,
        "smoothedEle": 9.023292469058202,
        "gradeBand": "descent"
      },
      {
        "lat": 23.625421,
        "lng": 119.604372,
        "ele": 8.75,
        "distanceKm": 10.85898604725671,
        "gradePct": -0.6273482632799098,
        "smoothedEle": 8.865576141643599,
        "gradeBand": "descent"
      },
      {
        "lat": 23.625777,
        "lng": 119.604191,
        "ele": 8.75,
        "distanceKm": 10.902655477520709,
        "gradePct": -0.6011461801992738,
        "smoothedEle": 8.734849551834586,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626116999999997,
        "lng": 119.6039025,
        "ele": 8.75,
        "distanceKm": 10.950542251917078,
        "gradePct": -0.5556106650773395,
        "smoothedEle": 8.633310842491198,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626457,
        "lng": 119.603614,
        "ele": 8.75,
        "distanceKm": 10.99842897948982,
        "gradePct": -0.4975401358388737,
        "smoothedEle": 8.553501194979486,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626769999999997,
        "lng": 119.6033555,
        "ele": 8.000000000000016,
        "distanceKm": 11.042073330319347,
        "gradePct": -0.4366610086743378,
        "smoothedEle": 8.501570072636468,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627083,
        "lng": 119.603097,
        "ele": 7.25,
        "distanceKm": 11.08571764317769,
        "gradePct": -0.37604582325990066,
        "smoothedEle": 8.44838464053381,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627421,
        "lng": 119.60285866666668,
        "ele": 7.083333333333333,
        "distanceKm": 11.130462111463377,
        "gradePct": -0.3193578098221234,
        "smoothedEle": 8.394133003365763,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627759,
        "lng": 119.60262033333333,
        "ele": 6.916666666666667,
        "distanceKm": 11.175206545749598,
        "gradePct": -0.27091710130790575,
        "smoothedEle": 8.349516486282834,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628097,
        "lng": 119.602382,
        "ele": 6.75,
        "distanceKm": 11.219950946033721,
        "gradePct": -0.2264344067640085,
        "smoothedEle": 8.328418000556715,
        "gradeBand": "descent"
      },
      {
        "lat": 23.62851,
        "lng": 119.60214433333334,
        "ele": 7.166666666666667,
        "distanceKm": 11.271866131059712,
        "gradePct": -0.17480497830308686,
        "smoothedEle": 8.336248929643896,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628923,
        "lng": 119.60190666666666,
        "ele": 7.583333333333333,
        "distanceKm": 11.323781280478784,
        "gradePct": -0.12229741314907301,
        "smoothedEle": 8.380927400828224,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629336,
        "lng": 119.601669,
        "ele": 8,
        "distanceKm": 11.375696394288388,
        "gradePct": -0.0702701869187333,
        "smoothedEle": 8.464201960381258,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629661,
        "lng": 119.601472,
        "ele": 8.75,
        "distanceKm": 11.41703331326073,
        "gradePct": -0.0313420335775703,
        "smoothedEle": 8.547652743269937,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63005,
        "lng": 119.601253,
        "ele": 9.000000000000005,
        "distanceKm": 11.465702790988004,
        "gradePct": 0.010577321058268297,
        "smoothedEle": 8.660930378164968,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.630439,
        "lng": 119.601034,
        "ele": 9.25,
        "distanceKm": 11.514372238337053,
        "gradePct": 0.04790625942139073,
        "smoothedEle": 8.774062079879462,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6307565,
        "lng": 119.6007945,
        "ele": 9,
        "distanceKm": 11.55728696355589,
        "gradePct": 0.0750464049126947,
        "smoothedEle": 8.858262599048988,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631074,
        "lng": 119.600555,
        "ele": 8.75,
        "distanceKm": 11.600201655144952,
        "gradePct": 0.10364650481853382,
        "smoothedEle": 8.949055633735812,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63158,
        "lng": 119.600139,
        "ele": 8.75,
        "distanceKm": 11.670640490003823,
        "gradePct": 0.14448965465108224,
        "smoothedEle": 9.076517761658684,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631868,
        "lng": 119.599856,
        "ele": 9.25,
        "distanceKm": 11.713729671694887,
        "gradePct": 0.16487589029540822,
        "smoothedEle": 9.1557309915829,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632225,
        "lng": 119.599254,
        "ele": 9.75,
        "distanceKm": 11.786782243128497,
        "gradePct": 0.185255672180978,
        "smoothedEle": 9.275364180949849,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632379,
        "lng": 119.598933,
        "ele": 10.25,
        "distanceKm": 11.823694824572534,
        "gradePct": 0.18692523431971644,
        "smoothedEle": 9.315479167984956,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63262,
        "lng": 119.598308,
        "ele": 10.75,
        "distanceKm": 11.892773216178568,
        "gradePct": 0.17207118541179794,
        "smoothedEle": 9.359032497338958,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632758,
        "lng": 119.597921,
        "ele": 11,
        "distanceKm": 11.935077850790925,
        "gradePct": 0.15150118965869874,
        "smoothedEle": 9.347157139659572,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632869,
        "lng": 119.597641,
        "ele": 11.25,
        "distanceKm": 11.966157251115796,
        "gradePct": 0.13325175460987565,
        "smoothedEle": 9.328245539778813,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633042,
        "lng": 119.59744,
        "ele": 11,
        "distanceKm": 11.994251892293297,
        "gradePct": 0.11613698475996444,
        "smoothedEle": 9.307977436507302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633417,
        "lng": 119.597254,
        "ele": 10,
        "distanceKm": 12.04005309669581,
        "gradePct": 0.08789753752125443,
        "smoothedEle": 9.263936705663712,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6337565,
        "lng": 119.59722300000001,
        "ele": 9.5,
        "distanceKm": 12.077935680526942,
        "gradePct": 0.06637090040630368,
        "smoothedEle": 9.233802832161675,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634096,
        "lng": 119.597192,
        "ele": 9,
        "distanceKm": 12.115818263675616,
        "gradePct": 0.04672095969299477,
        "smoothedEle": 9.210919362920537,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63442,
        "lng": 119.597206,
        "ele": 8.75,
        "distanceKm": 12.151873686249967,
        "gradePct": 0.029048735642256674,
        "smoothedEle": 9.18780209421114,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634879545454545,
        "lng": 119.59720781818181,
        "ele": 8.681818181818182,
        "distanceKm": 12.202973215603764,
        "gradePct": 0.0021236571804781335,
        "smoothedEle": 9.146575088325125,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63533909090909,
        "lng": 119.59720963636364,
        "ele": 8.613636363636365,
        "distanceKm": 12.254072744954815,
        "gradePct": -0.02865103508872018,
        "smoothedEle": 9.07854290218754,
        "gradeBand": "descent"
      },
      {
        "lat": 23.635798636363635,
        "lng": 119.59721145454546,
        "ele": 8.545454545454545,
        "distanceKm": 12.3051722743039,
        "gradePct": -0.06314558120782117,
        "smoothedEle": 8.979621760436725,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63625818181818,
        "lng": 119.59721327272727,
        "ele": 8.477272727272727,
        "distanceKm": 12.356271803650628,
        "gradePct": -0.09746841990796788,
        "smoothedEle": 8.848676572422548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63671772727273,
        "lng": 119.59721509090909,
        "ele": 8.40909090909091,
        "distanceKm": 12.407371332995,
        "gradePct": -0.13351445831801811,
        "smoothedEle": 8.687362360200051,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63717727272727,
        "lng": 119.59721690909092,
        "ele": 8.34090909090909,
        "distanceKm": 12.458470862336625,
        "gradePct": -0.1636598171733276,
        "smoothedEle": 8.514623568258017,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637636818181818,
        "lng": 119.59721872727273,
        "ele": 8.272727272727273,
        "distanceKm": 12.509570391676284,
        "gradePct": -0.18327582203839368,
        "smoothedEle": 8.37686862832912,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638096363636365,
        "lng": 119.59722054545455,
        "ele": 8.204545454545455,
        "distanceKm": 12.560669921013586,
        "gradePct": -0.18123871622805368,
        "smoothedEle": 8.34134337790703,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63855590909091,
        "lng": 119.59722236363636,
        "ele": 8.136363636363637,
        "distanceKm": 12.611769450348532,
        "gradePct": -0.16307311226197535,
        "smoothedEle": 8.397999540193739,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639015454545454,
        "lng": 119.59722418181819,
        "ele": 8.068181818181818,
        "distanceKm": 12.662868979680733,
        "gradePct": -0.12194121445495618,
        "smoothedEle": 8.569225039508124,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639475,
        "lng": 119.597226,
        "ele": 8,
        "distanceKm": 12.713968509010964,
        "gradePct": -0.06741393119656501,
        "smoothedEle": 8.794866670357292,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639872500000003,
        "lng": 119.59721350000001,
        "ele": 7.875,
        "distanceKm": 12.758186890063318,
        "gradePct": -0.007307352187647354,
        "smoothedEle": 9.034041763951787,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64027,
        "lng": 119.597201,
        "ele": 7.75,
        "distanceKm": 12.802405271003973,
        "gradePct": 0.06740257315914952,
        "smoothedEle": 9.321991135952691,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.640772000000002,
        "lng": 119.597252,
        "ele": 7.624999999999998,
        "distanceKm": 12.85846642556664,
        "gradePct": 0.18163532237237698,
        "smoothedEle": 9.749925063613853,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641274,
        "lng": 119.597303,
        "ele": 7.5,
        "distanceKm": 12.914527578282588,
        "gradePct": 0.315904464988791,
        "smoothedEle": 10.242693441472182,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641596,
        "lng": 119.597368,
        "ele": 7.75,
        "distanceKm": 12.950939438574359,
        "gradePct": 0.40436062688297586,
        "smoothedEle": 10.561886213925922,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642039666666665,
        "lng": 119.59743166666667,
        "ele": 8.750000000000012,
        "distanceKm": 13.000697429244266,
        "gradePct": 0.5189801535516217,
        "smoothedEle": 10.995689272113669,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642483333333335,
        "lng": 119.59749533333334,
        "ele": 9.749999999999988,
        "distanceKm": 13.050455417049504,
        "gradePct": 0.615800120175032,
        "smoothedEle": 11.427445273372717,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642927,
        "lng": 119.597559,
        "ele": 10.75,
        "distanceKm": 13.100213401988873,
        "gradePct": 0.6943934682290476,
        "smoothedEle": 11.857154212420514,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643286,
        "lng": 119.597598,
        "ele": 12.5,
        "distanceKm": 13.140329618168535,
        "gradePct": 0.7417916556414067,
        "smoothedEle": 12.202657897430678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643847,
        "lng": 119.597698,
        "ele": 13.25,
        "distanceKm": 13.203536233573223,
        "gradePct": 0.799739971827378,
        "smoothedEle": 12.74750043702536,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643989,
        "lng": 119.597348,
        "ele": 14.25,
        "distanceKm": 13.242527646676926,
        "gradePct": 0.8263867170828871,
        "smoothedEle": 13.081275256024387,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644160666666668,
        "lng": 119.59694333333333,
        "ele": 15.250000000000014,
        "distanceKm": 13.287952640302233,
        "gradePct": 0.8513626288234984,
        "smoothedEle": 13.484688985801219,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644332333333335,
        "lng": 119.59653866666667,
        "ele": 16.249999999999986,
        "distanceKm": 13.333377584862573,
        "gradePct": 0.8706830914670718,
        "smoothedEle": 13.911828836491214,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644504,
        "lng": 119.596134,
        "ele": 17.25,
        "distanceKm": 13.37880248036025,
        "gradePct": 0.8827391011530288,
        "smoothedEle": 14.342371170235525,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6447226,
        "lng": 119.59575020000001,
        "ele": 17.15,
        "distanceKm": 13.424837061446429,
        "gradePct": 0.8882973794356314,
        "smoothedEle": 14.774555081584722,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6449412,
        "lng": 119.5953664,
        "ele": 17.049999999999997,
        "distanceKm": 13.470871587076665,
        "gradePct": 0.8906973531558035,
        "smoothedEle": 15.18914661606245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6451598,
        "lng": 119.59498260000001,
        "ele": 16.950000000000003,
        "distanceKm": 13.516906057247834,
        "gradePct": 0.8830646612404585,
        "smoothedEle": 15.551656778803089,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6453784,
        "lng": 119.5945988,
        "ele": 16.85,
        "distanceKm": 13.562940471962355,
        "gradePct": 0.8670065587294649,
        "smoothedEle": 15.870298745592374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645597,
        "lng": 119.594215,
        "ele": 16.75,
        "distanceKm": 13.608974831217102,
        "gradePct": 0.8412334192817252,
        "smoothedEle": 16.13877972371932,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645778017305027,
        "lng": 119.59383841524284,
        "ele": 16.72441348783611,
        "distanceKm": 13.652293860181555,
        "gradePct": 0.8020144045381397,
        "smoothedEle": 16.315861973007976,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64595350865251,
        "lng": 119.59345870762142,
        "ele": 16.61220674391806,
        "distanceKm": 13.69561452842558,
        "gradePct": 0.7537606877182267,
        "smoothedEle": 16.44801858739266,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646129,
        "lng": 119.593079,
        "ele": 16.5,
        "distanceKm": 13.738935150361552,
        "gradePct": 0.6983236745647823,
        "smoothedEle": 16.542141093559838,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646336499999997,
        "lng": 119.59274450000001,
        "ele": 16.875,
        "distanceKm": 13.780084318042999,
        "gradePct": 0.6348418556031831,
        "smoothedEle": 16.58902067052859,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646544,
        "lng": 119.59241,
        "ele": 17.25,
        "distanceKm": 13.821233440990223,
        "gradePct": 0.5565340150269186,
        "smoothedEle": 16.58030509475713,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646805,
        "lng": 119.59208575,
        "ele": 17.062499999999996,
        "distanceKm": 13.865200475241451,
        "gradePct": 0.4584392192449627,
        "smoothedEle": 16.505645912579645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647066,
        "lng": 119.5917615,
        "ele": 16.875,
        "distanceKm": 13.909167460005117,
        "gradePct": 0.3547284122784749,
        "smoothedEle": 16.40108709048175,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647326999999997,
        "lng": 119.59143725000001,
        "ele": 16.687500000000004,
        "distanceKm": 13.953134395282095,
        "gradePct": 0.25783464546638835,
        "smoothedEle": 16.318576922993657,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647588,
        "lng": 119.591113,
        "ele": 16.5,
        "distanceKm": 13.997101281073263,
        "gradePct": 0.17230259433648065,
        "smoothedEle": 16.25721199519059,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.647857201764072,
        "lng": 119.59076741712303,
        "ele": 16.48219988853695,
        "distanceKm": 14.043308464048886,
        "gradePct": 0.09617547257124208,
        "smoothedEle": 16.21528686879247,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.648126651323057,
        "lng": 119.59042206284228,
        "ele": 16.299149916402715,
        "distanceKm": 14.089515717862366,
        "gradePct": 0.034301368471077606,
        "smoothedEle": 16.196797383830383,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64839610088204,
        "lng": 119.59007670856153,
        "ele": 16.116099944268473,
        "distanceKm": 14.13572291652801,
        "gradePct": -0.0015349509774104319,
        "smoothedEle": 16.240447473136953,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64866555044102,
        "lng": 119.58973135428076,
        "ele": 15.93304997213424,
        "distanceKm": 14.181930060046634,
        "gradePct": -0.014126221341933842,
        "smoothedEle": 16.335640825242947,
        "gradeBand": "descent"
      },
      {
        "lat": 23.648935,
        "lng": 119.589386,
        "ele": 15.75,
        "distanceKm": 14.228137148415488,
        "gradePct": -0.01429754065892581,
        "smoothedEle": 16.447192623560063,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649169,
        "lng": 119.589142,
        "ele": 15.75,
        "distanceKm": 14.26411905528958,
        "gradePct": -0.003252936112133398,
        "smoothedEle": 16.554567413959067,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64947,
        "lng": 119.588939,
        "ele": 15.25,
        "distanceKm": 14.303460591341869,
        "gradePct": 0.015346773572983351,
        "smoothedEle": 16.66080333490244,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649762,
        "lng": 119.588781,
        "ele": 14.75,
        "distanceKm": 14.339699085383343,
        "gradePct": 0.03565829394643387,
        "smoothedEle": 16.727240573978477,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650165166886605,
        "lng": 119.58865414214058,
        "ele": 14.855166886606984,
        "distanceKm": 14.386354239138974,
        "gradePct": 0.0679456546005312,
        "smoothedEle": 16.795067969498778,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650576375164956,
        "lng": 119.58856085660544,
        "ele": 15.266375164955246,
        "distanceKm": 14.433055383853965,
        "gradePct": 0.09787342336544072,
        "smoothedEle": 16.845625142346965,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650987583443303,
        "lng": 119.58846757107028,
        "ele": 15.677583443303492,
        "distanceKm": 14.479756522492742,
        "gradePct": 0.11750143971852936,
        "smoothedEle": 16.868927409555234,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.651398791721654,
        "lng": 119.58837428553514,
        "ele": 16.088791721651752,
        "distanceKm": 14.52645765505541,
        "gradePct": 0.12515440181346663,
        "smoothedEle": 16.856348108915824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65181,
        "lng": 119.588281,
        "ele": 16.5,
        "distanceKm": 14.573158781541407,
        "gradePct": 0.12634426472391452,
        "smoothedEle": 16.83506381245345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652151500000002,
        "lng": 119.588252,
        "ele": 17.62500000000003,
        "distanceKm": 14.611246609924903,
        "gradePct": 0.12126883097083335,
        "smoothedEle": 16.823669841776564,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652493,
        "lng": 119.588223,
        "ele": 18.75,
        "distanceKm": 14.649334437710026,
        "gradePct": 0.10841270232406046,
        "smoothedEle": 16.810552673334165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653017,
        "lng": 119.588101,
        "ele": 19,
        "distanceKm": 14.708910966350519,
        "gradePct": 0.07159881959168217,
        "smoothedEle": 16.758771436335408,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653509,
        "lng": 119.587875,
        "ele": 19.75,
        "distanceKm": 14.768264427904612,
        "gradePct": 0.015273526477378141,
        "smoothedEle": 16.642129003715237,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653881666666667,
        "lng": 119.58755166666667,
        "ele": 19.083333333333325,
        "distanceKm": 14.821195694961677,
        "gradePct": -0.04740004646154503,
        "smoothedEle": 16.45631745923103,
        "gradeBand": "descent"
      },
      {
        "lat": 23.654254333333334,
        "lng": 119.58722833333333,
        "ele": 18.416666666666675,
        "distanceKm": 14.874126903645685,
        "gradePct": -0.10839895442858562,
        "smoothedEle": 16.235297062161727,
        "gradeBand": "descent"
      },
      {
        "lat": 23.654627,
        "lng": 119.586905,
        "ele": 17.75,
        "distanceKm": 14.92705805395407,
        "gradePct": -0.17650661316357058,
        "smoothedEle": 15.956599558064585,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6549335,
        "lng": 119.58664350000001,
        "ele": 16.875,
        "distanceKm": 14.9703122575354,
        "gradePct": -0.2378233417007028,
        "smoothedEle": 15.675098336599026,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65524,
        "lng": 119.586382,
        "ele": 16,
        "distanceKm": 15.013566422687957,
        "gradePct": -0.30387510974563414,
        "smoothedEle": 15.340444910399825,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655537,
        "lng": 119.586138,
        "ele": 16,
        "distanceKm": 15.054897552008354,
        "gradePct": -0.37406197188991896,
        "smoothedEle": 14.973076609273516,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65576,
        "lng": 119.585888,
        "ele": 16,
        "distanceKm": 15.090439465896125,
        "gradePct": -0.43533898257795517,
        "smoothedEle": 14.653199384283578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655966,
        "lng": 119.585449,
        "ele": 15.75,
        "distanceKm": 15.140678211670606,
        "gradePct": -0.531447081134224,
        "smoothedEle": 14.156298408401106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656043,
        "lng": 119.584898,
        "ele": 14.75,
        "distanceKm": 15.197447747979414,
        "gradePct": -0.6370188240510043,
        "smoothedEle": 13.583640629499074,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655927,
        "lng": 119.584424,
        "ele": 13.5,
        "distanceKm": 15.24741875412408,
        "gradePct": -0.715965024450103,
        "smoothedEle": 13.103270154293675,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655845,
        "lng": 119.583942,
        "ele": 11.75,
        "distanceKm": 15.297350773594944,
        "gradePct": -0.7841189108166375,
        "smoothedEle": 12.619428848980252,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656005,
        "lng": 119.583253,
        "ele": 10.25,
        "distanceKm": 15.369746605043336,
        "gradePct": -0.8511408332286979,
        "smoothedEle": 11.997883340548855,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656195,
        "lng": 119.582712,
        "ele": 9.25,
        "distanceKm": 15.42875964992041,
        "gradePct": -0.8835297924117188,
        "smoothedEle": 11.527876496766945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656437,
        "lng": 119.5824,
        "ele": 8.5,
        "distanceKm": 15.47040001772633,
        "gradePct": -0.8872894669579421,
        "smoothedEle": 11.23797200942847,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656903,
        "lng": 119.582234,
        "ele": 7.25,
        "distanceKm": 15.524905496681736,
        "gradePct": -0.8557603483446631,
        "smoothedEle": 10.960856753740963,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657438,
        "lng": 119.582277,
        "ele": 7.5,
        "distanceKm": 15.584555857653832,
        "gradePct": -0.7958962702577341,
        "smoothedEle": 10.726670507175543,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657780466758748,
        "lng": 119.58258263454496,
        "ele": 8.180903017577341,
        "distanceKm": 15.633740659069085,
        "gradePct": -0.7457205676601462,
        "smoothedEle": 10.496313458640156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.658095,
        "lng": 119.582926,
        "ele": 9,
        "distanceKm": 15.683200166892588,
        "gradePct": -0.7049390501409508,
        "smoothedEle": 10.202666618572042,
        "gradeBand": "descent"
      },
      {
        "lat": 23.658558,
        "lng": 119.583213,
        "ele": 9.75,
        "distanceKm": 15.742402997385838,
        "gradePct": -0.6516772066020252,
        "smoothedEle": 9.893100509820709,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659217,
        "lng": 119.583213,
        "ele": 10.5,
        "distanceKm": 15.815680555260004,
        "gradePct": -0.5609244477379924,
        "smoothedEle": 9.657438523806368,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659593649739982,
        "lng": 119.58310234001223,
        "ele": 10.040723462832878,
        "distanceKm": 15.859052140747124,
        "gradePct": -0.5004869222884103,
        "smoothedEle": 9.587264737230537,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65996532486999,
        "lng": 119.58297217000612,
        "ele": 10.145361731416436,
        "distanceKm": 15.90245496337624,
        "gradePct": -0.4381233651242265,
        "smoothedEle": 9.546762209526118,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660337,
        "lng": 119.582842,
        "ele": 10.25,
        "distanceKm": 15.945857774495703,
        "gradePct": -0.3732227752030788,
        "smoothedEle": 9.54272373371403,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660693,
        "lng": 119.582784,
        "ele": 11,
        "distanceKm": 15.98588154903154,
        "gradePct": -0.3192483735204061,
        "smoothedEle": 9.56301936653746,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661049,
        "lng": 119.582726,
        "ele": 11.75,
        "distanceKm": 16.02590532119407,
        "gradePct": -0.26771690060884445,
        "smoothedEle": 9.618346957606274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661385,
        "lng": 119.582586,
        "ele": 12.25,
        "distanceKm": 16.065895243849642,
        "gradePct": -0.23042009220645204,
        "smoothedEle": 9.64783128101585,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661758,
        "lng": 119.582232,
        "ele": 11,
        "distanceKm": 16.12085087700914,
        "gradePct": -0.1880396895682516,
        "smoothedEle": 9.616484313228826,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662007,
        "lng": 119.58171,
        "ele": 8.75,
        "distanceKm": 16.180792687910213,
        "gradePct": -0.14550525291789107,
        "smoothedEle": 9.489433836202986,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662157,
        "lng": 119.581348,
        "ele": 9.25,
        "distanceKm": 16.22125854169925,
        "gradePct": -0.12376851809113633,
        "smoothedEle": 9.384820316703589,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662229915979946,
        "lng": 119.58090659539769,
        "ele": 9.25,
        "distanceKm": 16.26693941290403,
        "gradePct": -0.1132826478152225,
        "smoothedEle": 9.247777703089248,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662266,
        "lng": 119.580459,
        "ele": 9.25,
        "distanceKm": 16.312701721729063,
        "gradePct": -0.11635453803275446,
        "smoothedEle": 9.085245817559542,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66232,
        "lng": 119.579822,
        "ele": 9.25,
        "distanceKm": 16.377855263453313,
        "gradePct": -0.1379315852744558,
        "smoothedEle": 8.880060164068837,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662401333333335,
        "lng": 119.57941966666667,
        "ele": 9.16666666666667,
        "distanceKm": 16.41981768002709,
        "gradePct": -0.1553779611829043,
        "smoothedEle": 8.76825686513798,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662482666666666,
        "lng": 119.57901733333333,
        "ele": 9.08333333333333,
        "distanceKm": 16.461780071713108,
        "gradePct": -0.1773985766878937,
        "smoothedEle": 8.663804878818286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662564,
        "lng": 119.578615,
        "ele": 9,
        "distanceKm": 16.503742438508624,
        "gradePct": -0.20525888551400515,
        "smoothedEle": 8.561415265134105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662667,
        "lng": 119.577997,
        "ele": 7.75,
        "distanceKm": 16.567717009883125,
        "gradePct": -0.25314394067689217,
        "smoothedEle": 8.381072433181878,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662724,
        "lng": 119.577443,
        "ele": 6.25,
        "distanceKm": 16.62449470716697,
        "gradePct": -0.2643397646067907,
        "smoothedEle": 8.287062160639188,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662685,
        "lng": 119.576887,
        "ele": 6.5,
        "distanceKm": 16.681287032193037,
        "gradePct": -0.24544663970702277,
        "smoothedEle": 8.260922644238146,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662646,
        "lng": 119.576331,
        "ele": 6.75,
        "distanceKm": 16.73807937405969,
        "gradePct": -0.22719955168382422,
        "smoothedEle": 8.198360061203145,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662669,
        "lng": 119.575691,
        "ele": 6.75,
        "distanceKm": 16.803311149452963,
        "gradePct": -0.2060161619483285,
        "smoothedEle": 8.088517071064382,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662696,
        "lng": 119.57526266666667,
        "ele": 7.083333333333343,
        "distanceKm": 16.847038487058935,
        "gradePct": -0.18427774741713634,
        "smoothedEle": 8.055721567859901,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662723,
        "lng": 119.57483433333333,
        "ele": 7.416666666666657,
        "distanceKm": 16.890765815679504,
        "gradePct": -0.15823015444657038,
        "smoothedEle": 8.054510936080476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66275,
        "lng": 119.574406,
        "ele": 7.75,
        "distanceKm": 16.934493135311772,
        "gradePct": -0.1298442783556407,
        "smoothedEle": 8.08250560952121,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662812666666667,
        "lng": 119.57386,
        "ele": 8.5,
        "distanceKm": 16.990536046069842,
        "gradePct": -0.08792683521102056,
        "smoothedEle": 8.154005139418153,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662875333333332,
        "lng": 119.573314,
        "ele": 9.25,
        "distanceKm": 17.046578930383333,
        "gradePct": -0.0336364479519105,
        "smoothedEle": 8.272477948949566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662938,
        "lng": 119.572768,
        "ele": 10,
        "distanceKm": 17.10262178825228,
        "gradePct": 0.03345411416158157,
        "smoothedEle": 8.49054904818489,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662934,
        "lng": 119.572202,
        "ele": 9.25,
        "distanceKm": 17.16026837789757,
        "gradePct": 0.11163560240785876,
        "smoothedEle": 8.828774806057925,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662872,
        "lng": 119.571803,
        "ele": 8,
        "distanceKm": 17.201485620190184,
        "gradePct": 0.16888345136071797,
        "smoothedEle": 9.0830890869843,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662717,
        "lng": 119.571163,
        "ele": 7.5,
        "distanceKm": 17.268907339899076,
        "gradePct": 0.26979667367988824,
        "smoothedEle": 9.495432594319034,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662561500000002,
        "lng": 119.57059699999999,
        "ele": 8.5,
        "distanceKm": 17.329089725407922,
        "gradePct": 0.3534210412496961,
        "smoothedEle": 9.836288345346642,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662406,
        "lng": 119.570031,
        "ele": 9.5,
        "distanceKm": 17.389272176579087,
        "gradePct": 0.4200779797234347,
        "smoothedEle": 10.154942187485917,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662534,
        "lng": 119.569727,
        "ele": 10,
        "distanceKm": 17.423348274437643,
        "gradePct": 0.452810257039555,
        "smoothedEle": 10.339421841774111,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662326,
        "lng": 119.569244,
        "ele": 10.5,
        "distanceKm": 17.477706054360738,
        "gradePct": 0.49800403923463643,
        "smoothedEle": 10.627656835751228,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662118,
        "lng": 119.568761,
        "ele": 11,
        "distanceKm": 17.532063905098518,
        "gradePct": 0.5317310943828015,
        "smoothedEle": 10.900449136016771,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6619355,
        "lng": 119.56837325,
        "ele": 11.5,
        "distanceKm": 17.576463859425946,
        "gradePct": 0.5514122646408474,
        "smoothedEle": 11.145825977984046,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661752999999997,
        "lng": 119.56798549999999,
        "ele": 12,
        "distanceKm": 17.620863862777064,
        "gradePct": 0.55964512624486,
        "smoothedEle": 11.395805112940238,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6615705,
        "lng": 119.56759775,
        "ele": 12.5,
        "distanceKm": 17.665263915150064,
        "gradePct": 0.5667014031188163,
        "smoothedEle": 11.693104758693494,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661388,
        "lng": 119.56721,
        "ele": 13,
        "distanceKm": 17.70966401654754,
        "gradePct": 0.580502477200407,
        "smoothedEle": 12.035619607393556,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661122,
        "lng": 119.566705,
        "ele": 12.62499999999999,
        "distanceKm": 17.768995268157866,
        "gradePct": 0.6062476839206589,
        "smoothedEle": 12.527169014332795,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660856,
        "lng": 119.5662,
        "ele": 12.25,
        "distanceKm": 17.828326610464888,
        "gradePct": 0.6353887675477389,
        "smoothedEle": 13.008910119165321,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66065125,
        "lng": 119.56582399999999,
        "ele": 12.624999999999993,
        "distanceKm": 17.87287808318283,
        "gradePct": 0.6571386180509211,
        "smoothedEle": 13.353831886594989,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6604465,
        "lng": 119.56544799999999,
        "ele": 13.000000000000016,
        "distanceKm": 17.91742960744064,
        "gradePct": 0.6748289458909539,
        "smoothedEle": 13.681524356595428,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660241749999997,
        "lng": 119.565072,
        "ele": 13.375000000000007,
        "distanceKm": 17.961981183236475,
        "gradePct": 0.6901387193660671,
        "smoothedEle": 13.994968474374193,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660037,
        "lng": 119.564696,
        "ele": 13.75,
        "distanceKm": 18.00653281057222,
        "gradePct": 0.70221383403659,
        "smoothedEle": 14.283391717131236,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65982,
        "lng": 119.564196,
        "ele": 14.874999999999964,
        "distanceKm": 18.06288437925753,
        "gradePct": 0.7061543979476369,
        "smoothedEle": 14.601550819369084,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659603,
        "lng": 119.563696,
        "ele": 16,
        "distanceKm": 18.119236024306392,
        "gradePct": 0.6965244120465585,
        "smoothedEle": 14.86926218168578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659632,
        "lng": 119.563228,
        "ele": 16.25,
        "distanceKm": 18.16701014632253,
        "gradePct": 0.6698468507790277,
        "smoothedEle": 15.05580993015429,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659788205393355,
        "lng": 119.56275561902875,
        "ele": 16,
        "distanceKm": 18.218160823077824,
        "gradePct": 0.625221261016334,
        "smoothedEle": 15.232120520670415,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659954042616917,
        "lng": 119.56228703846249,
        "ele": 16,
        "distanceKm": 18.269323738407408,
        "gradePct": 0.5821595350847012,
        "smoothedEle": 15.440633705447606,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66011992077463,
        "lng": 119.56181847483627,
        "ele": 16.202049213830264,
        "distanceKm": 18.32048662868279,
        "gradePct": 0.5442218000843884,
        "smoothedEle": 15.666362351701737,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66028584781356,
        "lng": 119.56134993119491,
        "ele": 16.779492711866126,
        "distanceKm": 18.371649523778657,
        "gradePct": 0.506879767273843,
        "smoothedEle": 15.878719098426847,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660451345910307,
        "lng": 119.56088120605162,
        "ele": 17.22208037808824,
        "distanceKm": 18.422812429671286,
        "gradePct": 0.46509783392500137,
        "smoothedEle": 16.04488455401476,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66061717653658,
        "lng": 119.56041262042875,
        "ele": 17.03190764153806,
        "distanceKm": 18.47397533525274,
        "gradePct": 0.42066704043669956,
        "smoothedEle": 16.175952741822613,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660783104595527,
        "lng": 119.5599440748973,
        "ele": 16.779620326286835,
        "distanceKm": 18.525138281549136,
        "gradePct": 0.37681077657011,
        "smoothedEle": 16.272491476801733,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660949052297763,
        "lng": 119.55947553744865,
        "ele": 16.514810163143416,
        "distanceKm": 18.57630119127673,
        "gradePct": 0.32745232161058374,
        "smoothedEle": 16.302552057746777,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661115,
        "lng": 119.559007,
        "ele": 16.25,
        "distanceKm": 18.627464044521897,
        "gradePct": 0.26736062230011054,
        "smoothedEle": 16.2381939557505,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661188,
        "lng": 119.558593,
        "ele": 16,
        "distanceKm": 18.670403116758454,
        "gradePct": 0.20698761135135085,
        "smoothedEle": 16.102443171786575,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661081,
        "lng": 119.558167,
        "ele": 16.5,
        "distanceKm": 18.715391927448778,
        "gradePct": 0.13212485560752327,
        "smoothedEle": 15.883200729022109,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660891,
        "lng": 119.557892,
        "ele": 17,
        "distanceKm": 18.750474768953517,
        "gradePct": 0.05891115738817164,
        "smoothedEle": 15.658370987710208,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660580272047074,
        "lng": 119.55755141562454,
        "ele": 16.861775821651797,
        "distanceKm": 18.799434359253823,
        "gradePct": -0.05367151390363496,
        "smoothedEle": 15.305123002964288,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660269929783514,
        "lng": 119.55721041468611,
        "ele": 16.532830086450975,
        "distanceKm": 18.84839383821887,
        "gradePct": -0.17219152576567823,
        "smoothedEle": 14.92123640550493,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65995989098388,
        "lng": 119.556869086841,
        "ele": 16.069014739037517,
        "distanceKm": 18.897353233076466,
        "gradePct": -0.29287566546326643,
        "smoothedEle": 14.49782055966539,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65964941190113,
        "lng": 119.5565282348045,
        "ele": 15.82795955056657,
        "distanceKm": 18.946312798868824,
        "gradePct": -0.4131344633045757,
        "smoothedEle": 14.039415049832812,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65933893281838,
        "lng": 119.556187382768,
        "ele": 15.586904362095641,
        "distanceKm": 18.99527242310177,
        "gradePct": -0.5287594574388595,
        "smoothedEle": 13.572340668118054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65902845373563,
        "lng": 119.5558465307315,
        "ele": 15.345849173624696,
        "distanceKm": 19.044232105774928,
        "gradePct": -0.6356601262951369,
        "smoothedEle": 13.105409352087017,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65871811553175,
        "lng": 119.55550552708493,
        "ele": 14.713898935804606,
        "distanceKm": 19.093191754578964,
        "gradePct": -0.7290562430299709,
        "smoothedEle": 12.636024087835793,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65840762726875,
        "lng": 119.55516468797218,
        "ele": 13.165633061552471,
        "distanceKm": 19.14215134061989,
        "gradePct": -0.8055692940137295,
        "smoothedEle": 12.163913972898238,
        "gradeBand": "descent"
      },
      {
        "lat": 23.658097,
        "lng": 119.554824,
        "ele": 11.25,
        "distanceKm": 19.191110974875304,
        "gradePct": -0.8623972178371322,
        "smoothedEle": 11.689542181133321,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657649,
        "lng": 119.554384,
        "ele": 9,
        "distanceKm": 19.25811745710783,
        "gradePct": -0.925717691516898,
        "smoothedEle": 10.974639826275608,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657352,
        "lng": 119.554096,
        "ele": 8.5,
        "distanceKm": 19.302288316389703,
        "gradePct": -0.9614264589271936,
        "smoothedEle": 10.475613103064791,
        "gradeBand": "descent"
      },
      {
        "lat": 23.657017,
        "lng": 119.55379,
        "ele": 8.25,
        "distanceKm": 19.35085708125559,
        "gradePct": -0.9950824969978708,
        "smoothedEle": 9.924521040099354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656582500000003,
        "lng": 119.55340450000001,
        "ele": 7.875000000000011,
        "distanceKm": 19.413113731185337,
        "gradePct": -1.0249984601051996,
        "smoothedEle": 9.225263650387484,
        "gradeBand": "descent"
      },
      {
        "lat": 23.656148,
        "lng": 119.553019,
        "ele": 7.5,
        "distanceKm": 19.475370463378436,
        "gradePct": -1.0476882441769912,
        "smoothedEle": 8.523763966790279,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655789889912768,
        "lng": 119.5527029944489,
        "ele": 7.23363697984177,
        "distanceKm": 19.52657157660886,
        "gradePct": -1.0659062354762807,
        "smoothedEle": 7.944307659438325,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65543200092149,
        "lng": 119.552386695004,
        "ele": 6.910273281857609,
        "distanceKm": 19.577772456489384,
        "gradePct": -1.082947153513316,
        "smoothedEle": 7.369116000514928,
        "gradeBand": "descent"
      },
      {
        "lat": 23.655074111930215,
        "lng": 119.55207039555911,
        "ele": 6.5869095838734255,
        "distanceKm": 19.628973391832034,
        "gradePct": -1.0902108750409734,
        "smoothedEle": 6.8399326271032885,
        "gradeBand": "descent"
      },
      {
        "lat": 23.654716222938937,
        "lng": 119.55175409611422,
        "ele": 6.263545885889242,
        "distanceKm": 19.68017438263672,
        "gradePct": -1.078223169155614,
        "smoothedEle": 6.404391400963254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65435833394766,
        "lng": 119.55143779666933,
        "ele": 5.940182187905058,
        "distanceKm": 19.731375428902442,
        "gradePct": -1.0389634623549537,
        "smoothedEle": 6.065137282575959,
        "gradeBand": "descent"
      },
      {
        "lat": 23.654000444956385,
        "lng": 119.55112149722444,
        "ele": 5.616818489920897,
        "distanceKm": 19.782576530628187,
        "gradePct": -0.9715828198769937,
        "smoothedEle": 5.840395777460708,
        "gradeBand": "descent"
      },
      {
        "lat": 23.653642555965106,
        "lng": 119.55080519777955,
        "ele": 5.293454791936712,
        "distanceKm": 19.833777687813875,
        "gradePct": -0.8929046095242619,
        "smoothedEle": 5.6537916413794225,
        "gradeBand": "descent"
      },
      {
        "lat": 23.653284666973832,
        "lng": 119.55048889833466,
        "ele": 4.970091093952529,
        "distanceKm": 19.88497890045819,
        "gradePct": -0.8102670421642924,
        "smoothedEle": 5.489934654427417,
        "gradeBand": "descent"
      },
      {
        "lat": 23.652926777982554,
        "lng": 119.55017259888977,
        "ele": 4.646727395968345,
        "distanceKm": 19.936180168561048,
        "gradePct": -0.7221146560535701,
        "smoothedEle": 5.354781153063593,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65256888899128,
        "lng": 119.54985629944488,
        "ele": 4.323363697984184,
        "distanceKm": 19.987381492121138,
        "gradePct": -0.6282802985661885,
        "smoothedEle": 5.2464305396003645,
        "gradeBand": "descent"
      },
      {
        "lat": 23.652211,
        "lng": 119.54954,
        "ele": 4,
        "distanceKm": 20.03858287113837,
        "gradePct": -0.5295692184497872,
        "smoothedEle": 5.1615264558716065,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651868,
        "lng": 119.549242,
        "ele": 4,
        "distanceKm": 20.087326452142335,
        "gradePct": -0.43308217979725094,
        "smoothedEle": 5.104960506037324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65151187810242,
        "lng": 119.54894070093907,
        "ele": 4.113270323658502,
        "distanceKm": 20.13742516678674,
        "gradePct": -0.3392547007075533,
        "smoothedEle": 5.07176410026656,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651155756204833,
        "lng": 119.54863940187813,
        "ele": 4.226540647316995,
        "distanceKm": 20.187523932604822,
        "gradePct": -0.2583338260765743,
        "smoothedEle": 5.064024728697518,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650799,
        "lng": 119.548339,
        "ele": 4.5,
        "distanceKm": 20.237622654035683,
        "gradePct": -0.19119467880618082,
        "smoothedEle": 5.081742393071018,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650408,
        "lng": 119.548023,
        "ele": 4.75,
        "distanceKm": 20.291717361533557,
        "gradePct": -0.13559993979517718,
        "smoothedEle": 5.129082049116782,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6500755,
        "lng": 119.54775875,
        "ele": 4.9375,
        "distanceKm": 20.337449148843685,
        "gradePct": -0.08981432494173393,
        "smoothedEle": 5.1929704015544935,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649743,
        "lng": 119.5474945,
        "ele": 5.125,
        "distanceKm": 20.38318097641251,
        "gradePct": -0.04357683586409973,
        "smoothedEle": 5.277804292285821,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6494105,
        "lng": 119.54723025,
        "ele": 5.3125,
        "distanceKm": 20.428912844239886,
        "gradePct": 0.0019238800331581984,
        "smoothedEle": 5.3835837563793225,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.649078,
        "lng": 119.546966,
        "ele": 5.5,
        "distanceKm": 20.474644752324707,
        "gradePct": 0.047373667261769906,
        "smoothedEle": 5.51025195982403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64871028430828,
        "lng": 119.54667611065553,
        "ele": 5.6931859683309805,
        "distanceKm": 20.52507987861581,
        "gradePct": 0.09817127718855954,
        "smoothedEle": 5.6747740201328325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64834256861656,
        "lng": 119.54638622131104,
        "ele": 5.88637193666196,
        "distanceKm": 20.575515053490353,
        "gradePct": 0.14852460382729335,
        "smoothedEle": 5.861290416827204,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64797485292484,
        "lng": 119.54609633196657,
        "ele": 6.0795579049929405,
        "distanceKm": 20.62595027694602,
        "gradePct": 0.19529981208231925,
        "smoothedEle": 6.055866651147545,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64760713723312,
        "lng": 119.5458064426221,
        "ele": 6.272743873323921,
        "distanceKm": 20.67638554898304,
        "gradePct": 0.23767309949629017,
        "smoothedEle": 6.254110909076439,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6472394215414,
        "lng": 119.54551655327761,
        "ele": 6.4659298416549005,
        "distanceKm": 20.726820869601628,
        "gradePct": 0.2750868864692903,
        "smoothedEle": 6.453356720117944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646871705849676,
        "lng": 119.54522666393314,
        "ele": 6.659115809985881,
        "distanceKm": 20.777256238799794,
        "gradePct": 0.3064336301059948,
        "smoothedEle": 6.648594902891914,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646503990157957,
        "lng": 119.54493677458865,
        "ele": 6.852301778316875,
        "distanceKm": 20.82769165657797,
        "gradePct": 0.33283780517131306,
        "smoothedEle": 6.843527987630391,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.646136274466237,
        "lng": 119.54464688524418,
        "ele": 7.045487746647855,
        "distanceKm": 20.878127122934156,
        "gradePct": 0.3545455801058951,
        "smoothedEle": 7.041157145358257,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645768558774517,
        "lng": 119.5443569958997,
        "ele": 7.238673714978836,
        "distanceKm": 20.92856263786858,
        "gradePct": 0.3711440352807182,
        "smoothedEle": 7.238493892781516,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645400915689414,
        "lng": 119.54406700181713,
        "ele": 7.429132665934857,
        "distanceKm": 20.978997903980403,
        "gradePct": 0.3819648954507638,
        "smoothedEle": 7.434276648951972,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645033277126277,
        "lng": 119.54377700121141,
        "ele": 7.619421777289904,
        "distanceKm": 21.029433200293116,
        "gradePct": 0.3875812119730819,
        "smoothedEle": 7.62877927812579,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644665638563136,
        "lng": 119.54348700060571,
        "ele": 7.809710888644952,
        "distanceKm": 21.079868545209077,
        "gradePct": 0.38843502188519796,
        "smoothedEle": 7.820261050625536,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.644298,
        "lng": 119.543197,
        "ele": 8,
        "distanceKm": 21.130303938727867,
        "gradePct": 0.3870225717850692,
        "smoothedEle": 8.008092304638208,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643953333333332,
        "lng": 119.54293566666666,
        "ele": 8.166666666666663,
        "distanceKm": 21.17696684611888,
        "gradePct": 0.38444284161104836,
        "smoothedEle": 8.178621543879173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643608666666665,
        "lng": 119.54267433333334,
        "ele": 8.333333333333337,
        "distanceKm": 21.22362979350241,
        "gradePct": 0.3810281352754496,
        "smoothedEle": 8.34589098222667,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.643264,
        "lng": 119.542413,
        "ele": 8.5,
        "distanceKm": 21.270292780879632,
        "gradePct": 0.3868431423717157,
        "smoothedEle": 8.55585467308159,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642898499999998,
        "lng": 119.542149,
        "ele": 8.750000000000009,
        "distanceKm": 21.319025785629734,
        "gradePct": 0.40643709171981207,
        "smoothedEle": 8.842219821504962,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642533,
        "lng": 119.541885,
        "ele": 9,
        "distanceKm": 21.36775883182028,
        "gradePct": 0.43986680687472,
        "smoothedEle": 9.199863486801611,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.642167333333333,
        "lng": 119.54163166666666,
        "ele": 9.166666666666666,
        "distanceKm": 21.41591653231814,
        "gradePct": 0.48271053361206917,
        "smoothedEle": 9.602566718311454,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641801666666666,
        "lng": 119.54137833333333,
        "ele": 9.333333333333334,
        "distanceKm": 21.464074271448244,
        "gradePct": 0.5322670535334482,
        "smoothedEle": 10.037680430687459,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641436,
        "lng": 119.541125,
        "ele": 9.5,
        "distanceKm": 21.512232049210105,
        "gradePct": 0.5859624809244549,
        "smoothedEle": 10.492255815705317,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.641035499999997,
        "lng": 119.540859,
        "ele": 9.625000000000004,
        "distanceKm": 21.56436085972096,
        "gradePct": 0.6490872690923971,
        "smoothedEle": 11.006821242676036,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.640635,
        "lng": 119.540593,
        "ele": 9.75,
        "distanceKm": 21.61648971332557,
        "gradePct": 0.7109595702161776,
        "smoothedEle": 11.511443282809097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6402225,
        "lng": 119.54033,
        "ele": 9.875,
        "distanceKm": 21.669608273937754,
        "gradePct": 0.7571522033114518,
        "smoothedEle": 11.93749071451196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63981,
        "lng": 119.540067,
        "ele": 10,
        "distanceKm": 21.72272687713012,
        "gradePct": 0.7865790274058466,
        "smoothedEle": 12.275549497419174,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.639407,
        "lng": 119.539809,
        "ele": 12.25,
        "distanceKm": 21.774676568964306,
        "gradePct": 0.787807351363071,
        "smoothedEle": 12.520651469360173,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.638863,
        "lng": 119.539433,
        "ele": 14.25,
        "distanceKm": 21.84627285682075,
        "gradePct": 0.7379419400757691,
        "smoothedEle": 12.731891214638498,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.638534,
        "lng": 119.539156,
        "ele": 15.5,
        "distanceKm": 21.89247355992943,
        "gradePct": 0.6814485259600925,
        "smoothedEle": 12.81377505578627,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63814,
        "lng": 119.538688,
        "ele": 16.5,
        "distanceKm": 21.95721998133871,
        "gradePct": 0.5810591089852085,
        "smoothedEle": 12.881046249070403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637801,
        "lng": 119.538247,
        "ele": 17.250000000000025,
        "distanceKm": 22.015862719905815,
        "gradePct": 0.48041790633554765,
        "smoothedEle": 12.930183832827472,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637462,
        "lng": 119.537806,
        "ele": 18,
        "distanceKm": 22.07450554758713,
        "gradePct": 0.3829956376374845,
        "smoothedEle": 13.020002877391715,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6371915,
        "lng": 119.5374545,
        "ele": 16.6875,
        "distanceKm": 22.121268404457503,
        "gradePct": 0.31458934514222037,
        "smoothedEle": 13.122718401838783,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636921,
        "lng": 119.537103,
        "ele": 15.375,
        "distanceKm": 22.168031317975835,
        "gradePct": 0.26636291266476314,
        "smoothedEle": 13.25665700518416,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6366505,
        "lng": 119.53675150000001,
        "ele": 14.0625,
        "distanceKm": 22.214794288142926,
        "gradePct": 0.23270560064900786,
        "smoothedEle": 13.388592713468231,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63638,
        "lng": 119.5364,
        "ele": 12.75,
        "distanceKm": 22.261557314958814,
        "gradePct": 0.2001270458106401,
        "smoothedEle": 13.459389218108688,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636151,
        "lng": 119.536066,
        "ele": 11.75,
        "distanceKm": 22.30405435783197,
        "gradePct": 0.16403757880760744,
        "smoothedEle": 13.427516435953823,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63604,
        "lng": 119.535673,
        "ele": 11,
        "distanceKm": 22.345947549754197,
        "gradePct": 0.11558029092116193,
        "smoothedEle": 13.308832873926235,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636126,
        "lng": 119.535039,
        "ele": 10.25,
        "distanceKm": 22.41123534230141,
        "gradePct": 0.05507862527772502,
        "smoothedEle": 13.108661575953711,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636259000000003,
        "lng": 119.534677,
        "ele": 10.25,
        "distanceKm": 22.450966167794167,
        "gradePct": 0.029612434561298428,
        "smoothedEle": 13.022610742305408,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636392,
        "lng": 119.534315,
        "ele": 10.25,
        "distanceKm": 22.490696958516796,
        "gradePct": 0.011546544552515314,
        "smoothedEle": 12.966829806603245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636561035223178,
        "lng": 119.53382476477348,
        "ele": 11.07698250086887,
        "distanceKm": 22.544055667790737,
        "gradePct": -0.01003500309099188,
        "smoothedEle": 12.923189948682113,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636730070446355,
        "lng": 119.53333452954698,
        "ele": 11.903965001737681,
        "distanceKm": 22.597414316717323,
        "gradePct": -0.009027297752268026,
        "smoothedEle": 13.025185945499354,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63689910566953,
        "lng": 119.53284429432045,
        "ele": 12.730947502606494,
        "distanceKm": 22.65077290529887,
        "gradePct": 0.04549851792131676,
        "smoothedEle": 13.43471795086623,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637068,
        "lng": 119.532354,
        "ele": 12.75,
        "distanceKm": 22.704131551384403,
        "gradePct": 0.14853422185822787,
        "smoothedEle": 14.101180281841085,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637132,
        "lng": 119.53198,
        "ele": 12,
        "distanceKm": 22.74288846390937,
        "gradePct": 0.2568478107463964,
        "smoothedEle": 14.715364716422036,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637141,
        "lng": 119.531627,
        "ele": 11.5,
        "distanceKm": 22.778861138735515,
        "gradePct": 0.3743202068991248,
        "smoothedEle": 15.318012384771787,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637089,
        "lng": 119.530953,
        "ele": 11,
        "distanceKm": 22.847761983322556,
        "gradePct": 0.6546724084081521,
        "smoothedEle": 16.576631892493644,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637042382746056,
        "lng": 119.53051854641684,
        "ele": 12.561918302272277,
        "distanceKm": 22.892320659447073,
        "gradePct": 0.8517923005124824,
        "smoothedEle": 17.425615185003004,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63699576549211,
        "lng": 119.53008409283369,
        "ele": 14.123836604544683,
        "distanceKm": 22.936879351223826,
        "gradePct": 1.0494773446406822,
        "smoothedEle": 18.300507335220676,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636949851832743,
        "lng": 119.52964955032395,
        "ele": 15.447391115268678,
        "distanceKm": 22.981438023864374,
        "gradePct": 1.2396712925962596,
        "smoothedEle": 19.178185558778733,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636904,
        "lng": 119.529215,
        "ele": 16.75,
        "distanceKm": 23.02599671552651,
        "gradePct": 1.4226262372636769,
        "smoothedEle": 20.05109079719321,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636866505076334,
        "lng": 119.52875624910938,
        "ele": 20.170779262405773,
        "distanceKm": 23.07291360978107,
        "gradePct": 1.5779368787736743,
        "smoothedEle": 20.86803680671722,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63682931418734,
        "lng": 119.52829747013332,
        "ele": 23.807151054882894,
        "distanceKm": 23.119830374964202,
        "gradePct": 1.672651654193769,
        "smoothedEle": 21.560489495968714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63679175309897,
        "lng": 119.52783872601077,
        "ele": 26.77629699895193,
        "distanceKm": 23.166747263449526,
        "gradePct": 1.696617303380726,
        "smoothedEle": 22.117328045482985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636754,
        "lng": 119.52738,
        "ele": 29.75,
        "distanceKm": 23.21366423322377,
        "gradePct": 1.6590282540435577,
        "smoothedEle": 22.547386856906886,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636761,
        "lng": 119.526798,
        "ele": 29.5,
        "distanceKm": 23.272955614689636,
        "gradePct": 1.5539775145205597,
        "smoothedEle": 22.988965132154256,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636595,
        "lng": 119.526767,
        "ele": 30,
        "distanceKm": 23.29168217352244,
        "gradePct": 1.5098179393809357,
        "smoothedEle": 23.10130537176267,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636394,
        "lng": 119.526618,
        "ele": 29.75,
        "distanceKm": 23.318698975716472,
        "gradePct": 1.4400205279199136,
        "smoothedEle": 23.24583729062507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636192,
        "lng": 119.5262405,
        "ele": 29.8125,
        "distanceKm": 23.363233010699584,
        "gradePct": 1.31496454776496,
        "smoothedEle": 23.44622648953856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63599,
        "lng": 119.525863,
        "ele": 29.874999999999996,
        "distanceKm": 23.407767096916526,
        "gradePct": 1.157490617250108,
        "smoothedEle": 23.516352913418537,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635787999999998,
        "lng": 119.5254855,
        "ele": 29.9375,
        "distanceKm": 23.452301234366704,
        "gradePct": 0.967860280064216,
        "smoothedEle": 23.44357566122984,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635586,
        "lng": 119.525108,
        "ele": 30,
        "distanceKm": 23.496835423049525,
        "gradePct": 0.7461683045722161,
        "smoothedEle": 23.210662293656107,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635301,
        "lng": 119.524607,
        "ele": 28.5,
        "distanceKm": 23.55690976599396,
        "gradePct": 0.43264545697962126,
        "smoothedEle": 22.752595255439015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635066499999997,
        "lng": 119.524197,
        "ele": 26.24999999999992,
        "distanceKm": 23.606146905949565,
        "gradePct": 0.15809783018422294,
        "smoothedEle": 22.14902195016339,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634832,
        "lng": 119.523787,
        "ele": 24,
        "distanceKm": 23.65538410935967,
        "gradePct": -0.12902666970213517,
        "smoothedEle": 21.33732978061533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63451,
        "lng": 119.523427,
        "ele": 21,
        "distanceKm": 23.706636987186503,
        "gradePct": -0.4339313525856376,
        "smoothedEle": 20.313315680752254,
        "gradeBand": "descent"
      },
      {
        "lat": 23.634155,
        "lng": 119.523288,
        "ele": 19,
        "distanceKm": 23.748574008381098,
        "gradePct": -0.6809970930595576,
        "smoothedEle": 19.402395305094164,
        "gradeBand": "descent"
      },
      {
        "lat": 23.633622,
        "lng": 119.523137,
        "ele": 16.75,
        "distanceKm": 23.809804603874795,
        "gradePct": -1.0181139595324007,
        "smoothedEle": 18.10768522841078,
        "gradeBand": "descent"
      },
      {
        "lat": 23.633205333333333,
        "lng": 119.522805,
        "ele": 14.500000000000048,
        "distanceKm": 23.867166748867128,
        "gradePct": -1.3101956373751285,
        "smoothedEle": 16.901442636343106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.632788666666666,
        "lng": 119.522473,
        "ele": 12.249999999999952,
        "distanceKm": 23.924528957313548,
        "gradePct": -1.5596298061000404,
        "smoothedEle": 15.690811814471282,
        "gradeBand": "descent"
      },
      {
        "lat": 23.632372,
        "lng": 119.522141,
        "ele": 10,
        "distanceKm": 23.981891229213133,
        "gradePct": -1.7626970414378371,
        "smoothedEle": 14.475335072837769,
        "gradeBand": "descent"
      },
      {
        "lat": 23.632237,
        "lng": 119.522037,
        "ele": 9.75,
        "distanceKm": 24.000264661528433,
        "gradePct": -1.8199229408452453,
        "smoothedEle": 14.084899636137632,
        "gradeBand": "descent"
      },
      {
        "lat": 23.632182,
        "lng": 119.521995,
        "ele": 9.75,
        "distanceKm": 24.007728443783677,
        "gradePct": -1.8402617431853914,
        "smoothedEle": 13.926294263213713,
        "gradeBand": "descent"
      },
      {
        "lat": 23.632046,
        "lng": 119.521932,
        "ele": 9.5,
        "distanceKm": 24.024156446544236,
        "gradePct": -1.8850280412316216,
        "smoothedEle": 13.577199204551828,
        "gradeBand": "descent"
      },
      {
        "lat": 23.631856,
        "lng": 119.522006,
        "ele": 9,
        "distanceKm": 24.046588126530672,
        "gradePct": -1.9413018261465114,
        "smoothedEle": 13.124788655383595,
        "gradeBand": "descent"
      },
      {
        "lat": 23.631616983668778,
        "lng": 119.52154600919019,
        "ele": 8.447907368453667,
        "distanceKm": 24.100459883177926,
        "gradePct": -2.0298695243513225,
        "smoothedEle": 12.069388676854937,
        "gradeBand": "descent"
      },
      {
        "lat": 23.631377762361794,
        "lng": 119.52108614645041,
        "ele": 7.75,
        "distanceKm": 24.154331616803724,
        "gradePct": -2.0460122036779387,
        "smoothedEle": 11.124619462651358,
        "gradeBand": "descent"
      },
      {
        "lat": 23.631139,
        "lng": 119.520626,
        "ele": 7.75,
        "distanceKm": 24.20820339127158,
        "gradePct": -1.9940957848593093,
        "smoothedEle": 10.308812656580056,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6309193051292,
        "lng": 119.520221963456,
        "ele": 8.381307100000527,
        "distanceKm": 24.25606658715743,
        "gradePct": -1.909815513994075,
        "smoothedEle": 9.694888486414937,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63069957228976,
        "lng": 119.51981795208061,
        "ele": 8.75,
        "distanceKm": 24.303929792665976,
        "gradePct": -1.8145329415643754,
        "smoothedEle": 9.159242361146605,
        "gradeBand": "descent"
      },
      {
        "lat": 23.630479786144882,
        "lng": 119.51941397604031,
        "ele": 8.75,
        "distanceKm": 24.35179298854896,
        "gradePct": -1.7052288860149054,
        "smoothedEle": 8.6985860557465,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63026,
        "lng": 119.51901,
        "ele": 8.75,
        "distanceKm": 24.399656243820434,
        "gradePct": -1.5783004305090178,
        "smoothedEle": 8.324248892717433,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629928,
        "lng": 119.518685,
        "ele": 8.75,
        "distanceKm": 24.449244608104483,
        "gradePct": -1.4255968432003854,
        "smoothedEle": 8.039115798084158,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629492,
        "lng": 119.518231,
        "ele": 8.75,
        "distanceKm": 24.516248054942125,
        "gradePct": -1.1709547563472196,
        "smoothedEle": 7.890478744360594,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629178,
        "lng": 119.518051,
        "ele": 8.25,
        "distanceKm": 24.55568560823977,
        "gradePct": -1.0016928254177242,
        "smoothedEle": 7.938096035333137,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628729999999997,
        "lng": 119.5179145,
        "ele": 7.874999999999987,
        "distanceKm": 24.607405424059372,
        "gradePct": -0.7634254063112209,
        "smoothedEle": 8.130455036171249,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628282,
        "lng": 119.517778,
        "ele": 7.5,
        "distanceKm": 24.65912525266781,
        "gradePct": -0.5044695901973935,
        "smoothedEle": 8.529679123491208,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627883333333333,
        "lng": 119.51762033333334,
        "ele": 7.166666666666658,
        "distanceKm": 24.706275191792553,
        "gradePct": -0.2579187694038939,
        "smoothedEle": 9.048418483675515,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627484666666664,
        "lng": 119.51746266666666,
        "ele": 6.833333333333342,
        "distanceKm": 24.75342514757353,
        "gradePct": 0.0026915801765397874,
        "smoothedEle": 9.742227192257985,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.627086,
        "lng": 119.517305,
        "ele": 6.5,
        "distanceKm": 24.80057512000879,
        "gradePct": 0.2557898233199285,
        "smoothedEle": 10.475734249720514,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.626576,
        "lng": 119.517188,
        "ele": 6.5,
        "distanceKm": 24.858523679470903,
        "gradePct": 0.5613232208642757,
        "smoothedEle": 11.452561617115785,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.626161500000002,
        "lng": 119.517127,
        "ele": 6.5,
        "distanceKm": 24.905031092365,
        "gradePct": 0.8039771992493342,
        "smoothedEle": 12.313229509832851,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.625747,
        "lng": 119.517066,
        "ele": 6.5,
        "distanceKm": 24.95153850788724,
        "gradePct": 1.0406387680817761,
        "smoothedEle": 13.237220967367325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.625321,
        "lng": 119.51700366666667,
        "ele": 8.666666666666721,
        "distanceKm": 24.999331366324796,
        "gradePct": 1.264157567071379,
        "smoothedEle": 14.248793705164207,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.624895000000002,
        "lng": 119.51694133333334,
        "ele": 10.833333333333279,
        "distanceKm": 25.047124227506043,
        "gradePct": 1.4770405825352388,
        "smoothedEle": 15.31296185243832,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.624469,
        "lng": 119.516879,
        "ele": 13,
        "distanceKm": 25.094917091431725,
        "gradePct": 1.6713586915775944,
        "smoothedEle": 16.44080124461875,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.624127,
        "lng": 119.516823,
        "ele": 15.75,
        "distanceKm": 25.133371364316996,
        "gradePct": 1.8110921501680577,
        "smoothedEle": 17.386346242402944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.623785,
        "lng": 119.516767,
        "ele": 18.5,
        "distanceKm": 25.171825639412056,
        "gradePct": 1.9391364667855027,
        "smoothedEle": 18.36508996218674,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.623216,
        "lng": 119.516789,
        "ele": 22.75,
        "distanceKm": 25.235135325540906,
        "gradePct": 2.1075455885905106,
        "smoothedEle": 20.01082152533814,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.62271825,
        "lng": 119.516828,
        "ele": 24.4375,
        "distanceKm": 25.29062510549604,
        "gradePct": 2.2307057640494157,
        "smoothedEle": 21.474471762783313,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.622220499999997,
        "lng": 119.516867,
        "ele": 26.125,
        "distanceKm": 25.346114886532114,
        "gradePct": 2.341090377956544,
        "smoothedEle": 22.948840946761347,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.62172275,
        "lng": 119.516906,
        "ele": 27.8125,
        "distanceKm": 25.401604668648712,
        "gradePct": 2.4340308309924445,
        "smoothedEle": 24.419974141539747,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.621225,
        "lng": 119.516945,
        "ele": 29.5,
        "distanceKm": 25.457094451846608,
        "gradePct": 2.4987765013360503,
        "smoothedEle": 25.84869931630856,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.620942,
        "lng": 119.516955,
        "ele": 30.25,
        "distanceKm": 25.48857914688945,
        "gradePct": 2.5156503431435535,
        "smoothedEle": 26.599466397421452,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.620652,
        "lng": 119.51684,
        "ele": 31,
        "distanceKm": 25.522888151003254,
        "gradePct": 2.5194940318121235,
        "smoothedEle": 27.370785294568627,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6202625,
        "lng": 119.516609,
        "ele": 31.74999999999997,
        "distanceKm": 25.572179639485924,
        "gradePct": 2.490773331033379,
        "smoothedEle": 28.358098381328652,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.619873,
        "lng": 119.516378,
        "ele": 32.5,
        "distanceKm": 25.62147116137258,
        "gradePct": 2.422440996577334,
        "smoothedEle": 29.20593933791154,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61941770527172,
        "lng": 119.51624099134183,
        "ele": 33.22154446913732,
        "distanceKm": 25.6739867124682,
        "gradePct": 2.297354180282998,
        "smoothedEle": 29.908037830449,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61895777895379,
        "lng": 119.51612224350637,
        "ele": 33.16615835185299,
        "distanceKm": 25.72653973471673,
        "gradePct": 2.1243876999400153,
        "smoothedEle": 30.4093181476849,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61849785263586,
        "lng": 119.51600349567092,
        "ele": 33.11077223456866,
        "distanceKm": 25.779092766741297,
        "gradePct": 1.9169307896415995,
        "smoothedEle": 30.75493797821733,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.618037926317932,
        "lng": 119.51588474783546,
        "ele": 33.05538611728433,
        "distanceKm": 25.83164580854136,
        "gradePct": 1.699976012632556,
        "smoothedEle": 31.06427612094045,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617578,
        "lng": 119.515766,
        "ele": 33,
        "distanceKm": 25.884198860117547,
        "gradePct": 1.4723054863602676,
        "smoothedEle": 31.32004251303428,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617226,
        "lng": 119.515697,
        "ele": 32.25,
        "distanceKm": 25.923965810348093,
        "gradePct": 1.2953783010189817,
        "smoothedEle": 31.472609941193195,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.616711,
        "lng": 119.515457,
        "ele": 31.25,
        "distanceKm": 25.98623310831497,
        "gradePct": 1.01545081369784,
        "smoothedEle": 31.620778093582008,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6162972848685,
        "lng": 119.51534684341252,
        "ele": 30.98088781559231,
        "distanceKm": 26.033585401425288,
        "gradePct": 0.8217493540044011,
        "smoothedEle": 31.69379898285861,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615883569737008,
        "lng": 119.51523668682503,
        "ele": 30.711775631184626,
        "distanceKm": 26.080937702933007,
        "gradePct": 0.6438389346187946,
        "smoothedEle": 31.72793650397695,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61546983010868,
        "lng": 119.51512664024793,
        "ele": 30.41218138314889,
        "distanceKm": 26.128290004086427,
        "gradePct": 0.48509716172530093,
        "smoothedEle": 31.722588603654312,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615056,
        "lng": 119.515017,
        "ele": 30,
        "distanceKm": 26.175642305586095,
        "gradePct": 0.3494990413187928,
        "smoothedEle": 31.671325016416244,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614506,
        "lng": 119.515003,
        "ele": 29.75,
        "distanceKm": 26.236816231038237,
        "gradePct": 0.21789274872097267,
        "smoothedEle": 31.566366210981265,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613841,
        "lng": 119.514928,
        "ele": 30.75,
        "distanceKm": 26.311154729346384,
        "gradePct": 0.0923864079961227,
        "smoothedEle": 31.405593403650087,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613384584526546,
        "lng": 119.51493232896665,
        "ele": 31.38262537900867,
        "distanceKm": 26.361907800998686,
        "gradePct": 0.01308405282094398,
        "smoothedEle": 31.276976141334114,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61292805635103,
        "lng": 119.51490688597777,
        "ele": 31.67175025267244,
        "distanceKm": 26.41273763189357,
        "gradePct": -0.05818344765646515,
        "smoothedEle": 31.138615366082558,
        "gradeBand": "descent"
      },
      {
        "lat": 23.612471528175515,
        "lng": 119.51488144298888,
        "ele": 31.96087512633623,
        "distanceKm": 26.463567463248943,
        "gradePct": -0.10902681477876755,
        "smoothedEle": 31.021709982693014,
        "gradeBand": "descent"
      },
      {
        "lat": 23.612015,
        "lng": 119.514856,
        "ele": 32.25,
        "distanceKm": 26.5143972950648,
        "gradePct": -0.14730782742383183,
        "smoothedEle": 30.92767030534037,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61163446539832,
        "lng": 119.5151356399937,
        "ele": 32.25,
        "distanceKm": 26.565409019079258,
        "gradePct": -0.17889784812105844,
        "smoothedEle": 30.822252226253745,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61125418881187,
        "lng": 119.51541569558192,
        "ele": 32.104834120027895,
        "distanceKm": 26.61642066680702,
        "gradePct": -0.20363893174721284,
        "smoothedEle": 30.705734450682908,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61087430846649,
        "lng": 119.51569638941007,
        "ele": 31.736733010162627,
        "distanceKm": 26.667432272800486,
        "gradePct": -0.21462758081825226,
        "smoothedEle": 30.60707529132797,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610494428121108,
        "lng": 119.51597708323821,
        "ele": 31.368631900297384,
        "distanceKm": 26.7184439252616,
        "gradePct": -0.20417835138167176,
        "smoothedEle": 30.576996630443794,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610114547775726,
        "lng": 119.51625777706636,
        "ele": 31.00053079043214,
        "distanceKm": 26.769455624189746,
        "gradePct": -0.17674580062792913,
        "smoothedEle": 30.61204758085182,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609734667430345,
        "lng": 119.51653847089449,
        "ele": 30.632429680566897,
        "distanceKm": 26.8204673695835,
        "gradePct": -0.14724892194038333,
        "smoothedEle": 30.64574891608389,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609354787084964,
        "lng": 119.51681916472263,
        "ele": 30.264328570701657,
        "distanceKm": 26.871479161443876,
        "gradePct": -0.11683424317223655,
        "smoothedEle": 30.666751310339976,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608974906739583,
        "lng": 119.51709985855078,
        "ele": 29.896227460836414,
        "distanceKm": 26.922490999769444,
        "gradePct": -0.08426633480769609,
        "smoothedEle": 30.69485156546674,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6085950263942,
        "lng": 119.51738055237892,
        "ele": 29.52812635097117,
        "distanceKm": 26.973502884559597,
        "gradePct": -0.050178909803841515,
        "smoothedEle": 30.752434026908556,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608215024310468,
        "lng": 119.51766104596348,
        "ele": 29.026135432674923,
        "distanceKm": 27.024514592346236,
        "gradePct": -0.01954601492261503,
        "smoothedEle": 30.809032369533366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607835012155235,
        "lng": 119.51794152298173,
        "ele": 28.51306771633746,
        "distanceKm": 27.07552632857761,
        "gradePct": 0.014831587948884107,
        "smoothedEle": 30.873300808625494,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.607455,
        "lng": 119.518222,
        "ele": 28,
        "distanceKm": 27.12653811121711,
        "gradePct": 0.05331479210629695,
        "smoothedEle": 30.952740735567257,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.607152,
        "lng": 119.518203,
        "ele": 28.75,
        "distanceKm": 27.16028579157696,
        "gradePct": 0.07925395836922462,
        "smoothedEle": 31.017166757989607,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6068235,
        "lng": 119.51829599999999,
        "ele": 29.499999999999964,
        "distanceKm": 27.198022430134355,
        "gradePct": 0.1022545034114259,
        "smoothedEle": 31.100310537988097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.606495,
        "lng": 119.518389,
        "ele": 30.25,
        "distanceKm": 27.235759074654446,
        "gradePct": 0.12184599553661,
        "smoothedEle": 31.19812412292107,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.606062,
        "lng": 119.518351,
        "ele": 31.25,
        "distanceKm": 27.28406197183714,
        "gradePct": 0.14416318605365105,
        "smoothedEle": 31.342513316567455,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60572,
        "lng": 119.518144,
        "ele": 31.5,
        "distanceKm": 27.3275479150688,
        "gradePct": 0.16861361112666842,
        "smoothedEle": 31.491732148824465,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.605342,
        "lng": 119.517896,
        "ele": 31.75,
        "distanceKm": 27.376590595938854,
        "gradePct": 0.20234614372203552,
        "smoothedEle": 31.681297701117384,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60499,
        "lng": 119.517549,
        "ele": 32.75,
        "distanceKm": 27.429335751942695,
        "gradePct": 0.2416630992469024,
        "smoothedEle": 31.910893450947924,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60481,
        "lng": 119.517242,
        "ele": 33.25,
        "distanceKm": 27.466471732089083,
        "gradePct": 0.2688324838257415,
        "smoothedEle": 32.08865964723655,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.604643,
        "lng": 119.517088,
        "ele": 33.25,
        "distanceKm": 27.490783152291637,
        "gradePct": 0.28797457620167466,
        "smoothedEle": 32.21147965386453,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.604136,
        "lng": 119.516932,
        "ele": 33.5,
        "distanceKm": 27.549357009054,
        "gradePct": 0.33952632498433105,
        "smoothedEle": 32.53796234779556,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.604082095669018,
        "lng": 119.5164741927946,
        "ele": 33.6898039823331,
        "distanceKm": 27.59638734216666,
        "gradePct": 0.385987696422805,
        "smoothedEle": 32.83572585187691,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.604029621084983,
        "lng": 119.51601618930536,
        "ele": 33.813631142114964,
        "distanceKm": 27.643417541952505,
        "gradePct": 0.43828137841415044,
        "smoothedEle": 33.1763713115013,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603977810542492,
        "lng": 119.51555809465269,
        "ele": 33.906815571057486,
        "distanceKm": 27.690447875177302,
        "gradePct": 0.4848793074714749,
        "smoothedEle": 33.50801833053377,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603926,
        "lng": 119.5151,
        "ele": 34,
        "distanceKm": 27.73747822670817,
        "gradePct": 0.5295764961054701,
        "smoothedEle": 33.85114557012062,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60386366666667,
        "lng": 119.51458600000001,
        "ele": 34.125,
        "distanceKm": 27.79030737135385,
        "gradePct": 0.5632784937564189,
        "smoothedEle": 34.18033641680435,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603801333333333,
        "lng": 119.514072,
        "ele": 34.25,
        "distanceKm": 27.843136540683105,
        "gradePct": 0.5634251520027987,
        "smoothedEle": 34.36911290248151,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603739,
        "lng": 119.513558,
        "ele": 34.37499999999999,
        "distanceKm": 27.895965734692894,
        "gradePct": 0.5424253945830614,
        "smoothedEle": 34.4777632151867,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60367666666667,
        "lng": 119.51304400000001,
        "ele": 34.5,
        "distanceKm": 27.948794953384645,
        "gradePct": 0.5082653161359687,
        "smoothedEle": 34.545369268823436,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603614333333333,
        "lng": 119.51253,
        "ele": 34.625,
        "distanceKm": 28.00162419675979,
        "gradePct": 0.46341697940301435,
        "smoothedEle": 34.588991055102255,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603552,
        "lng": 119.512016,
        "ele": 34.75,
        "distanceKm": 28.054453464815285,
        "gradePct": 0.4125539206740086,
        "smoothedEle": 34.63299918010998,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603491,
        "lng": 119.511384,
        "ele": 35.25,
        "distanceKm": 28.1192056328047,
        "gradePct": 0.31798542485468884,
        "smoothedEle": 34.59092863174256,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603183,
        "lng": 119.511178,
        "ele": 35.75,
        "distanceKm": 28.159374087485965,
        "gradePct": 0.24652367020177338,
        "smoothedEle": 34.52151152653637,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.602852,
        "lng": 119.511016,
        "ele": 36.75,
        "distanceKm": 28.19971164346838,
        "gradePct": 0.1660707729196005,
        "smoothedEle": 34.405959426322326,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.602521,
        "lng": 119.510854,
        "ele": 37.75,
        "distanceKm": 28.24004921650117,
        "gradePct": 0.0819209326835221,
        "smoothedEle": 34.27677067665631,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.601917,
        "lng": 119.510552,
        "ele": 35,
        "distanceKm": 28.313924878896838,
        "gradePct": -0.051931700567877215,
        "smoothedEle": 34.00507125444382,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60142,
        "lng": 119.510332,
        "ele": 33.75,
        "distanceKm": 28.37356219603805,
        "gradePct": -0.14039419426950986,
        "smoothedEle": 33.72971636617007,
        "gradeBand": "descent"
      },
      {
        "lat": 23.600980333333332,
        "lng": 119.510165,
        "ele": 33.916666666666664,
        "distanceKm": 28.42532769415342,
        "gradePct": -0.21388597234060286,
        "smoothedEle": 33.44590813227703,
        "gradeBand": "descent"
      },
      {
        "lat": 23.600540666666667,
        "lng": 119.50999800000001,
        "ele": 34.083333333333336,
        "distanceKm": 28.477093211021533,
        "gradePct": -0.2902053122848017,
        "smoothedEle": 33.117708942988564,
        "gradeBand": "descent"
      },
      {
        "lat": 23.600101,
        "lng": 119.509831,
        "ele": 34.25,
        "distanceKm": 28.528858746643813,
        "gradePct": -0.37331186709422187,
        "smoothedEle": 32.745118792913445,
        "gradeBand": "descent"
      },
      {
        "lat": 23.599650999999998,
        "lng": 119.50967266666667,
        "ele": 33.16666666666664,
        "distanceKm": 28.58143313640298,
        "gradePct": -0.4588475888330535,
        "smoothedEle": 32.32123209964378,
        "gradeBand": "descent"
      },
      {
        "lat": 23.599201,
        "lng": 119.50951433333333,
        "ele": 32.08333333333336,
        "distanceKm": 28.63400754314984,
        "gradePct": -0.5461717565820529,
        "smoothedEle": 31.834489931062638,
        "gradeBand": "descent"
      },
      {
        "lat": 23.598751,
        "lng": 119.509356,
        "ele": 31,
        "distanceKm": 28.686581966884006,
        "gradePct": -0.6336946301318648,
        "smoothedEle": 31.275097917407408,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5982725,
        "lng": 119.509177,
        "ele": 30.62499999999999,
        "distanceKm": 28.742828253666264,
        "gradePct": -0.7398456512053542,
        "smoothedEle": 30.567321696136823,
        "gradeBand": "descent"
      },
      {
        "lat": 23.597794,
        "lng": 119.508998,
        "ele": 30.25,
        "distanceKm": 28.799074562026714,
        "gradePct": -0.8394200954349045,
        "smoothedEle": 29.86258717436737,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5975025,
        "lng": 119.5088065,
        "ele": 29.750000000000025,
        "distanceKm": 28.836908318390833,
        "gradePct": -0.8937834169223918,
        "smoothedEle": 29.430036008965736,
        "gradeBand": "descent"
      },
      {
        "lat": 23.597211,
        "lng": 119.508615,
        "ele": 29.25,
        "distanceKm": 28.874742097122386,
        "gradePct": -0.9424682818153322,
        "smoothedEle": 29.010906060722174,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596829333333336,
        "lng": 119.50830683333334,
        "ele": 28.499999999999975,
        "distanceKm": 28.927535591751308,
        "gradePct": -1.0096538736390677,
        "smoothedEle": 28.383640445403547,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596447666666666,
        "lng": 119.50799866666667,
        "ele": 27.75,
        "distanceKm": 28.980329140728745,
        "gradePct": -1.0765507169441741,
        "smoothedEle": 27.71166427239851,
        "gradeBand": "descent"
      },
      {
        "lat": 23.596066,
        "lng": 119.50769050000001,
        "ele": 27.000000000000025,
        "distanceKm": 29.03312274405247,
        "gradePct": -1.134695344200125,
        "smoothedEle": 27.03726313247205,
        "gradeBand": "descent"
      },
      {
        "lat": 23.595684333333335,
        "lng": 119.50738233333334,
        "ele": 26.25,
        "distanceKm": 29.085916401723797,
        "gradePct": -1.1761515640930447,
        "smoothedEle": 26.39896750012755,
        "gradeBand": "descent"
      },
      {
        "lat": 23.595302666666665,
        "lng": 119.50707416666667,
        "ele": 25.499999999999975,
        "distanceKm": 29.138710113741453,
        "gradePct": -1.1919613171012131,
        "smoothedEle": 25.82464798148106,
        "gradeBand": "descent"
      },
      {
        "lat": 23.594921,
        "lng": 119.506766,
        "ele": 24.75,
        "distanceKm": 29.191503880104083,
        "gradePct": -1.1788729584650661,
        "smoothedEle": 25.318798136310043,
        "gradeBand": "descent"
      },
      {
        "lat": 23.59442,
        "lng": 119.506474,
        "ele": 24.25,
        "distanceKm": 29.254660802420464,
        "gradePct": -1.1262937904844577,
        "smoothedEle": 24.787597581186073,
        "gradeBand": "descent"
      },
      {
        "lat": 23.594079,
        "lng": 119.506361,
        "ele": 24,
        "distanceKm": 29.294288135196275,
        "gradePct": -1.087195661515444,
        "smoothedEle": 24.486580095510035,
        "gradeBand": "descent"
      },
      {
        "lat": 23.593609,
        "lng": 119.506314,
        "ele": 23,
        "distanceKm": 29.346768810792746,
        "gradePct": -1.0380218579008342,
        "smoothedEle": 24.130690269690213,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5931855,
        "lng": 119.5063085,
        "ele": 22.125,
        "distanceKm": 29.393863262232372,
        "gradePct": -0.9844257676262685,
        "smoothedEle": 23.861589204774827,
        "gradeBand": "descent"
      },
      {
        "lat": 23.592762,
        "lng": 119.506303,
        "ele": 21.25,
        "distanceKm": 29.44095771369353,
        "gradePct": -0.9139893017819916,
        "smoothedEle": 23.642852113751292,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5922835,
        "lng": 119.50629175,
        "ele": 21.374999999999996,
        "distanceKm": 29.494176908040572,
        "gradePct": -0.8175829686706977,
        "smoothedEle": 23.44685394412677,
        "gradeBand": "descent"
      },
      {
        "lat": 23.591805,
        "lng": 119.5062805,
        "ele": 21.499999999999996,
        "distanceKm": 29.54739610247768,
        "gradePct": -0.7175682565880884,
        "smoothedEle": 23.276851454837253,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5913265,
        "lng": 119.50626925,
        "ele": 21.625000000000004,
        "distanceKm": 29.600615297004854,
        "gradePct": -0.6308107286437782,
        "smoothedEle": 23.085011055233554,
        "gradeBand": "descent"
      },
      {
        "lat": 23.590848,
        "lng": 119.506258,
        "ele": 21.75,
        "distanceKm": 29.653834491622092,
        "gradePct": -0.5710655449028912,
        "smoothedEle": 22.824404204630458,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5904384,
        "lng": 119.5063184,
        "ele": 22.150000000000013,
        "distanceKm": 29.69979399326076,
        "gradePct": -0.5415108837762389,
        "smoothedEle": 22.541517192618052,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5900288,
        "lng": 119.5063788,
        "ele": 22.549999999999994,
        "distanceKm": 29.745753497472656,
        "gradePct": -0.5270946825576842,
        "smoothedEle": 22.227041772983128,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5896192,
        "lng": 119.5064392,
        "ele": 22.950000000000006,
        "distanceKm": 29.791713004257556,
        "gradePct": -0.5099532856196539,
        "smoothedEle": 21.95637489917181,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5892096,
        "lng": 119.5064996,
        "ele": 23.349999999999987,
        "distanceKm": 29.837672513615814,
        "gradePct": -0.4848830345340161,
        "smoothedEle": 21.767960271250647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5888,
        "lng": 119.50656,
        "ele": 23.75,
        "distanceKm": 29.883632025547204,
        "gradePct": -0.41779400396947325,
        "smoothedEle": 21.831081203344,
        "gradeBand": "descent"
      },
      {
        "lat": 23.588144,
        "lng": 119.506582,
        "ele": 24.25,
        "distanceKm": 29.956610441558613,
        "gradePct": -0.23329740841218582,
        "smoothedEle": 22.418718464130286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587817,
        "lng": 119.506506,
        "ele": 24.25,
        "distanceKm": 29.993786885814927,
        "gradePct": -0.12998250705587538,
        "smoothedEle": 22.79837780117308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587394,
        "lng": 119.506332,
        "ele": 23.75,
        "distanceKm": 30.044053603840673,
        "gradePct": 0.015997682505177836,
        "smoothedEle": 23.367517088143128,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.587081,
        "lng": 119.506222,
        "ele": 22.5,
        "distanceKm": 30.080618292618194,
        "gradePct": 0.1260179477490105,
        "smoothedEle": 23.787184434974996,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.586748,
        "lng": 119.506216,
        "ele": 21.25,
        "distanceKm": 30.11765130217768,
        "gradePct": 0.24167174522766785,
        "smoothedEle": 24.20994687941181,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.586350602851518,
        "lng": 119.50630284256928,
        "ele": 19.370768167530724,
        "distanceKm": 30.16271737411044,
        "gradePct": 0.39193491128102664,
        "smoothedEle": 24.729403405655503,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.585954,
        "lng": 119.506394,
        "ele": 17.5,
        "distanceKm": 30.207785427736727,
        "gradePct": 0.5436055921436328,
        "smoothedEle": 25.204864195536313,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.585545,
        "lng": 119.506482,
        "ele": 18,
        "distanceKm": 30.254139936024014,
        "gradePct": 0.7024350165582,
        "smoothedEle": 25.68982705018438,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.585049,
        "lng": 119.50642,
        "ele": 19.25,
        "distanceKm": 30.309653416919875,
        "gradePct": 0.8771896532785022,
        "smoothedEle": 26.268775031049355,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.584607046500892,
        "lng": 119.50629363145472,
        "ele": 24.119886602905417,
        "distanceKm": 30.360455759069687,
        "gradePct": 0.9999768554091049,
        "smoothedEle": 26.79913512621412,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58418,
        "lng": 119.506106,
        "ele": 29.5,
        "distanceKm": 30.41164640259596,
        "gradePct": 1.0508922838245445,
        "smoothedEle": 27.311120165681572,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.583643,
        "lng": 119.50595,
        "ele": 31.5,
        "distanceKm": 30.473438205464866,
        "gradePct": 1.062362002770333,
        "smoothedEle": 27.902379708414664,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.583326,
        "lng": 119.505819,
        "ele": 32.75,
        "distanceKm": 30.511130397710502,
        "gradePct": 1.058534356974203,
        "smoothedEle": 28.287419557697074,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.582764,
        "lng": 119.505696,
        "ele": 33,
        "distanceKm": 30.57486675597176,
        "gradePct": 1.0603239554774035,
        "smoothedEle": 29.02279155902587,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.582109,
        "lng": 119.505601,
        "ele": 33.25,
        "distanceKm": 30.64834016280242,
        "gradePct": 1.0801930534556512,
        "smoothedEle": 29.96464896578292,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58177,
        "lng": 119.505618,
        "ele": 32.5,
        "distanceKm": 30.686075085462022,
        "gradePct": 1.1424412862013085,
        "smoothedEle": 30.68802997233335,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.581189,
        "lng": 119.505702,
        "ele": 33,
        "distanceKm": 30.751244106035724,
        "gradePct": 1.2580409281897353,
        "smoothedEle": 31.94973539354334,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5808495,
        "lng": 119.50575549999999,
        "ele": 33.375,
        "distanceKm": 30.789386520515727,
        "gradePct": 1.3329760492095375,
        "smoothedEle": 32.72229258532867,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.58051,
        "lng": 119.505809,
        "ele": 33.75,
        "distanceKm": 30.827528937011632,
        "gradePct": 1.3798939941401778,
        "smoothedEle": 33.354859676109676,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.579974,
        "lng": 119.505805,
        "ele": 33.75,
        "distanceKm": 30.887130894044287,
        "gradePct": 1.3729175732494816,
        "smoothedEle": 33.93051530238357,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.579404,
        "lng": 119.505627,
        "ele": 33.75,
        "distanceKm": 30.953056913374287,
        "gradePct": 1.2929899297675689,
        "smoothedEle": 34.17230942123686,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.579084,
        "lng": 119.505369,
        "ele": 34.5,
        "distanceKm": 30.99729982084974,
        "gradePct": 1.214117626149708,
        "smoothedEle": 34.21672317001665,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578964,
        "lng": 119.505014,
        "ele": 36,
        "distanceKm": 31.035860574708238,
        "gradePct": 1.1222771153735671,
        "smoothedEle": 34.18413489371894,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578887,
        "lng": 119.504577,
        "ele": 33,
        "distanceKm": 31.08121142164318,
        "gradePct": 0.9962210836812169,
        "smoothedEle": 34.085229402506435,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578719,
        "lng": 119.504318,
        "ele": 34,
        "distanceKm": 31.113548263242528,
        "gradePct": 0.8853936203651521,
        "smoothedEle": 33.94561885261972,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578342,
        "lng": 119.504039,
        "ele": 38.5,
        "distanceKm": 31.164201874539227,
        "gradePct": 0.6527861096507053,
        "smoothedEle": 33.53264959535844,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578008,
        "lng": 119.503773,
        "ele": 36.75,
        "distanceKm": 31.210182222492428,
        "gradePct": 0.37934605250975795,
        "smoothedEle": 33.051486682715066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.577572,
        "lng": 119.503355,
        "ele": 38.5,
        "distanceKm": 31.27471993026502,
        "gradePct": -0.06894930631025886,
        "smoothedEle": 32.080480964122614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.577211,
        "lng": 119.502854,
        "ele": 33.5,
        "distanceKm": 31.33966817305218,
        "gradePct": -0.529146323774988,
        "smoothedEle": 30.82637285712577,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576908,
        "lng": 119.502404,
        "ele": 32.75,
        "distanceKm": 31.396574845018304,
        "gradePct": -0.8687465913594294,
        "smoothedEle": 29.62141953174544,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576661,
        "lng": 119.502187,
        "ele": 34,
        "distanceKm": 31.431836942180617,
        "gradePct": -1.0443516267736586,
        "smoothedEle": 28.87272368168253,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576208,
        "lng": 119.502107,
        "ele": 32.5,
        "distanceKm": 31.48286387174382,
        "gradePct": -1.2903925669775802,
        "smoothedEle": 27.750268642480748,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57571407655241,
        "lng": 119.50226148930868,
        "ele": 31.560646731603214,
        "distanceKm": 31.539997943053546,
        "gradePct": -1.561631062329662,
        "smoothedEle": 26.366956411034668,
        "gradeBand": "descent"
      },
      {
        "lat": 23.575228,
        "lng": 119.502446,
        "ele": 28.75,
        "distanceKm": 31.597224933558127,
        "gradePct": -1.808027304481758,
        "smoothedEle": 24.975956406234086,
        "gradeBand": "descent"
      },
      {
        "lat": 23.574947,
        "lng": 119.502414,
        "ele": 26,
        "distanceKm": 31.62864048592647,
        "gradePct": -1.929228489821954,
        "smoothedEle": 24.17643238290295,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57476,
        "lng": 119.502271,
        "ele": 24,
        "distanceKm": 31.654032687791773,
        "gradePct": -2.0335062382228526,
        "smoothedEle": 23.448025849351076,
        "gradeBand": "descent"
      },
      {
        "lat": 23.574579,
        "lng": 119.502002,
        "ele": 21.75,
        "distanceKm": 31.688042296885158,
        "gradePct": -2.1730807813839794,
        "smoothedEle": 22.417766779181665,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57444,
        "lng": 119.501587,
        "ele": 18.75,
        "distanceKm": 31.733072609503104,
        "gradePct": -2.312285525497958,
        "smoothedEle": 21.145660447724687,
        "gradeBand": "descent"
      },
      {
        "lat": 23.574156,
        "lng": 119.501136,
        "ele": 14.75,
        "distanceKm": 31.788839235929263,
        "gradePct": -2.458737475246391,
        "smoothedEle": 19.514159026294898,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57367,
        "lng": 119.500661,
        "ele": 12.5,
        "distanceKm": 31.86139207152811,
        "gradePct": -2.5291616971863737,
        "smoothedEle": 17.72057817266206,
        "gradeBand": "descent"
      },
      {
        "lat": 23.573398,
        "lng": 119.500472,
        "ele": 12.75,
        "distanceKm": 31.897249987309927,
        "gradePct": -2.5314356777648968,
        "smoothedEle": 16.949906311115193,
        "gradeBand": "descent"
      },
      {
        "lat": 23.573055,
        "lng": 119.50027800000001,
        "ele": 12.125000000000027,
        "distanceKm": 31.94021010615745,
        "gradePct": -2.521771578904166,
        "smoothedEle": 16.079678727890975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572712,
        "lng": 119.500084,
        "ele": 11.5,
        "distanceKm": 31.98317024877449,
        "gradePct": -2.492352115639357,
        "smoothedEle": 15.281090159621437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57240433131913,
        "lng": 119.49981249761476,
        "ele": 10.520826707663392,
        "distanceKm": 32.02717101403478,
        "gradePct": -2.4177413206497538,
        "smoothedEle": 14.58881139383783,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572135,
        "lng": 119.499494,
        "ele": 9.5,
        "distanceKm": 32.071336216559146,
        "gradePct": -2.317305885219411,
        "smoothedEle": 14.018696580938087,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571705,
        "lng": 119.498932,
        "ele": 8,
        "distanceKm": 32.14594755637188,
        "gradePct": -2.035563140652058,
        "smoothedEle": 13.502142082600923,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571339,
        "lng": 119.49847299999999,
        "ele": 8.500000000000014,
        "distanceKm": 32.207952747268216,
        "gradePct": -1.6590435429993544,
        "smoothedEle": 13.560078840863499,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570973,
        "lng": 119.498014,
        "ele": 9,
        "distanceKm": 32.26995803652581,
        "gradePct": -1.186461478677586,
        "smoothedEle": 14.134237632189645,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57077,
        "lng": 119.497724,
        "ele": 9.5,
        "distanceKm": 32.30714790610676,
        "gradePct": -0.8769087175918545,
        "smoothedEle": 14.677006246499078,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57068,
        "lng": 119.49729,
        "ele": 10.75,
        "distanceKm": 32.352498189931595,
        "gradePct": -0.49170452570440876,
        "smoothedEle": 15.48192146136184,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57043,
        "lng": 119.49665,
        "ele": 13.25,
        "distanceKm": 32.42340229366146,
        "gradePct": 0.11064478171733966,
        "smoothedEle": 16.973372412634134,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570172,
        "lng": 119.496073,
        "ele": 15.25,
        "distanceKm": 32.48883357557194,
        "gradePct": 0.6861588456117648,
        "smoothedEle": 18.622781371803715,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569905,
        "lng": 119.495889,
        "ele": 17.75,
        "distanceKm": 32.52394932102334,
        "gradePct": 1.0040052426056034,
        "smoothedEle": 19.659525581234018,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569272,
        "lng": 119.495773,
        "ele": 20.5,
        "distanceKm": 32.59532179725713,
        "gradePct": 1.629708707412665,
        "smoothedEle": 22.00118145137153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569074,
        "lng": 119.495724,
        "ele": 20.25,
        "distanceKm": 32.61789771680507,
        "gradePct": 1.8303133511509793,
        "smoothedEle": 22.847905469085664,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568798,
        "lng": 119.495371,
        "ele": 22.25,
        "distanceKm": 32.665186658242476,
        "gradePct": 2.2413316695517818,
        "smoothedEle": 24.72677717034164,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568633,
        "lng": 119.494954,
        "ele": 26.5,
        "distanceKm": 32.711478121593146,
        "gradePct": 2.6171759182253904,
        "smoothedEle": 26.678602819035643,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568523,
        "lng": 119.494424,
        "ele": 28.62500000000007,
        "distanceKm": 32.76686292828757,
        "gradePct": 3.009725642620374,
        "smoothedEle": 29.154205651518275,
        "gradeBand": "hard"
      },
      {
        "lat": 23.568413,
        "lng": 119.493894,
        "ele": 30.75,
        "distanceKm": 32.82224777910368,
        "gradePct": 3.363221281711027,
        "smoothedEle": 31.76111797922499,
        "gradeBand": "hard"
      },
      {
        "lat": 23.568302,
        "lng": 119.493504,
        "ele": 32.62500000000016,
        "distanceKm": 32.86386863573666,
        "gradePct": 3.597297932368933,
        "smoothedEle": 33.707585745270144,
        "gradeBand": "hard"
      },
      {
        "lat": 23.568191,
        "lng": 119.493114,
        "ele": 34.5,
        "distanceKm": 32.905489524450815,
        "gradePct": 3.806748591197142,
        "smoothedEle": 35.63032453037833,
        "gradeBand": "hard"
      },
      {
        "lat": 23.568000666666666,
        "lng": 119.492613,
        "ele": 37.5,
        "distanceKm": 32.96076365804868,
        "gradePct": 4.032766662891223,
        "smoothedEle": 38.07902082451395,
        "gradeBand": "hard"
      },
      {
        "lat": 23.567810333333334,
        "lng": 119.492112,
        "ele": 40.5,
        "distanceKm": 33.01603786000198,
        "gradePct": 4.187044967303953,
        "smoothedEle": 40.36117538477097,
        "gradeBand": "hard"
      },
      {
        "lat": 23.56762,
        "lng": 119.491611,
        "ele": 43.5,
        "distanceKm": 33.07131213031022,
        "gradePct": 4.247239860761094,
        "smoothedEle": 42.449648837874406,
        "gradeBand": "hard"
      },
      {
        "lat": 23.567414,
        "lng": 119.49116566666667,
        "ele": 46.58333333333348,
        "distanceKm": 33.12215313622435,
        "gradePct": 4.241829823329908,
        "smoothedEle": 44.22612978346285,
        "gradeBand": "hard"
      },
      {
        "lat": 23.567208,
        "lng": 119.49072033333333,
        "ele": 49.66666666666652,
        "distanceKm": 33.17299420569024,
        "gradePct": 4.171027040415896,
        "smoothedEle": 45.91110851915982,
        "gradeBand": "hard"
      },
      {
        "lat": 23.567002,
        "lng": 119.490275,
        "ele": 52.75,
        "distanceKm": 33.22383533870516,
        "gradePct": 4.034537174338583,
        "smoothedEle": 47.403634424331656,
        "gradeBand": "hard"
      },
      {
        "lat": 23.566756,
        "lng": 119.489727,
        "ele": 56,
        "distanceKm": 33.28602657667028,
        "gradePct": 3.8076797368013615,
        "smoothedEle": 49.09461906476207,
        "gradeBand": "hard"
      },
      {
        "lat": 23.566588,
        "lng": 119.489387,
        "ele": 57.25,
        "distanceKm": 33.325394192347424,
        "gradePct": 3.639963772267,
        "smoothedEle": 50.108084027164495,
        "gradeBand": "hard"
      },
      {
        "lat": 23.566567,
        "lng": 119.488675,
        "ele": 58,
        "distanceKm": 33.397999488546844,
        "gradePct": 3.3150046802260946,
        "smoothedEle": 51.85933459591374,
        "gradeBand": "hard"
      },
      {
        "lat": 23.566660674969086,
        "lng": 119.48823638260495,
        "ele": 57.609935828268014,
        "distanceKm": 33.443901250027096,
        "gradePct": 3.089760823863557,
        "smoothedEle": 52.78080435128744,
        "gradeBand": "hard"
      },
      {
        "lat": 23.566775539975268,
        "lng": 119.48780290608397,
        "ele": 56.93794866261437,
        "distanceKm": 33.48989074923186,
        "gradePct": 2.8523642218726297,
        "smoothedEle": 53.543437749315274,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.566890404981454,
        "lng": 119.48736942956297,
        "ele": 56.26596149696073,
        "distanceKm": 33.53588021132324,
        "gradePct": 2.599035651900114,
        "smoothedEle": 54.106073608922514,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567005269987636,
        "lng": 119.48693595304198,
        "ele": 55.59397433130719,
        "distanceKm": 33.58186963629945,
        "gradePct": 2.3338157035105183,
        "smoothedEle": 54.48762659110471,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567120134993818,
        "lng": 119.486502476521,
        "ele": 54.92198716565365,
        "distanceKm": 33.62785902415905,
        "gradePct": 2.0527704910087805,
        "smoothedEle": 54.679087226644235,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567235,
        "lng": 119.486069,
        "ele": 54.25,
        "distanceKm": 33.673848374904644,
        "gradePct": 1.7468772968551292,
        "smoothedEle": 54.670570559472495,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56733925,
        "lng": 119.48562025,
        "ele": 54.87499999999998,
        "distanceKm": 33.7210313231757,
        "gradePct": 1.4286354343444927,
        "smoothedEle": 54.464495062805554,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5674435,
        "lng": 119.4851715,
        "ele": 55.49999999999995,
        "distanceKm": 33.76821423625726,
        "gradePct": 1.0864956752595134,
        "smoothedEle": 54.04277850749167,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56754775,
        "lng": 119.48472275,
        "ele": 56.12500000000002,
        "distanceKm": 33.81539711415198,
        "gradePct": 0.7108062817202836,
        "smoothedEle": 53.404754447471035,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567652,
        "lng": 119.484274,
        "ele": 56.75,
        "distanceKm": 33.86257995685831,
        "gradePct": 0.31639431778619526,
        "smoothedEle": 52.586981799967816,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567861,
        "lng": 119.483599,
        "ele": 55.25,
        "distanceKm": 33.93519526155607,
        "gradePct": -0.3261811659108858,
        "smoothedEle": 50.97512734067199,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568114666666666,
        "lng": 119.48312766666666,
        "ele": 53.416666666666586,
        "distanceKm": 33.99090233628534,
        "gradePct": -0.7835176438026408,
        "smoothedEle": 49.638225303479615,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568368333333336,
        "lng": 119.48265633333334,
        "ele": 51.583333333333414,
        "distanceKm": 34.04660933100872,
        "gradePct": -1.1874688369459618,
        "smoothedEle": 48.2577439664337,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568622,
        "lng": 119.482185,
        "ele": 49.75,
        "distanceKm": 34.10231624572753,
        "gradePct": -1.5547013892508927,
        "smoothedEle": 46.79924190931003,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568869499999998,
        "lng": 119.48174,
        "ele": 48.125,
        "distanceKm": 34.155367038610855,
        "gradePct": -1.8263553919609252,
        "smoothedEle": 45.54221611787157,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569117,
        "lng": 119.481295,
        "ele": 46.5,
        "distanceKm": 34.20841775842745,
        "gradePct": -1.9918468184518816,
        "smoothedEle": 44.560351775921504,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569327,
        "lng": 119.480766,
        "ele": 43.75,
        "distanceKm": 34.267172391757505,
        "gradePct": -2.065401556864725,
        "smoothedEle": 43.72508263387709,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569364,
        "lng": 119.480163,
        "ele": 41,
        "distanceKm": 34.32876700472359,
        "gradePct": -2.0101508918739825,
        "smoothedEle": 43.122273153038975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569266,
        "lng": 119.47982,
        "ele": 37.75,
        "distanceKm": 34.36538422209032,
        "gradePct": -1.9264405721502342,
        "smoothedEle": 42.892532179555246,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569151,
        "lng": 119.47968,
        "ele": 36.5,
        "distanceKm": 34.384544412027225,
        "gradePct": -1.8634143815652764,
        "smoothedEle": 42.782361087418046,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568613,
        "lng": 119.479419,
        "ele": 32.5,
        "distanceKm": 34.4500149707604,
        "gradePct": -1.5657835509760945,
        "smoothedEle": 42.79055459004535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568402,
        "lng": 119.479151,
        "ele": 34.5,
        "distanceKm": 34.48602261749724,
        "gradePct": -1.3727749879070728,
        "smoothedEle": 42.89145767967455,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568191,
        "lng": 119.478728,
        "ele": 30.25,
        "distanceKm": 34.53510538844398,
        "gradePct": -1.0787753932489323,
        "smoothedEle": 43.14894750205288,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568082,
        "lng": 119.478369,
        "ele": 29.5,
        "distanceKm": 34.573649779964256,
        "gradePct": -0.8210648762156908,
        "smoothedEle": 43.44445450370833,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567891,
        "lng": 119.478065,
        "ele": 29.25,
        "distanceKm": 34.61121372486095,
        "gradePct": -0.5555549217779301,
        "smoothedEle": 43.810643670053594,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567722,
        "lng": 119.477976,
        "ele": 32,
        "distanceKm": 34.63208042047133,
        "gradePct": -0.4138826597937879,
        "smoothedEle": 44.02457364089837,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567356,
        "lng": 119.477949,
        "ele": 35.75,
        "distanceKm": 34.6728707498763,
        "gradePct": -0.14076213462064685,
        "smoothedEle": 44.514446222296925,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567301,
        "lng": 119.477956,
        "ele": 35.5,
        "distanceKm": 34.67902795271803,
        "gradePct": -0.10303937809589313,
        "smoothedEle": 44.58910230675287,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566931,
        "lng": 119.477639,
        "ele": 40,
        "distanceKm": 34.73133988866728,
        "gradePct": 0.21923163363939435,
        "smoothedEle": 45.33064376175806,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.566677,
        "lng": 119.477558,
        "ele": 42.5,
        "distanceKm": 34.760765265835104,
        "gradePct": 0.40146055461958663,
        "smoothedEle": 45.823470556670564,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.566577,
        "lng": 119.477432,
        "ele": 44.5,
        "distanceKm": 34.777752361194985,
        "gradePct": 0.49984106661322303,
        "smoothedEle": 46.12074472546847,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.566312,
        "lng": 119.4771775,
        "ele": 47.7499999999997,
        "distanceKm": 34.81700937978865,
        "gradePct": 0.7230548007054537,
        "smoothedEle": 46.85261578743533,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.566047,
        "lng": 119.476923,
        "ele": 51,
        "distanceKm": 34.856266432959146,
        "gradePct": 0.937669023953049,
        "smoothedEle": 47.63808344172165,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.565693,
        "lng": 119.476451,
        "ele": 55.75,
        "distanceKm": 34.9184253425245,
        "gradePct": 1.2481756940386546,
        "smoothedEle": 49.027479684752684,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5654975,
        "lng": 119.4760655,
        "ele": 56.875,
        "distanceKm": 34.963328992462934,
        "gradePct": 1.4667097829386904,
        "smoothedEle": 50.16141296667044,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.565302,
        "lng": 119.47568,
        "ele": 58,
        "distanceKm": 35.008232693568864,
        "gradePct": 1.63042801388237,
        "smoothedEle": 51.16011253487339,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.565099,
        "lng": 119.475246,
        "ele": 59.25,
        "distanceKm": 35.057893381860936,
        "gradePct": 1.8209768705115592,
        "smoothedEle": 52.42853980414066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.564848,
        "lng": 119.474688,
        "ele": 59.75,
        "distanceKm": 35.121245246925994,
        "gradePct": 2.0375195736359673,
        "smoothedEle": 54.10108691744313,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.564595,
        "lng": 119.474402,
        "ele": 60.25,
        "distanceKm": 35.161756244563485,
        "gradePct": 2.133642310937699,
        "smoothedEle": 55.04917782014313,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.564014,
        "lng": 119.474213,
        "ele": 61,
        "distanceKm": 35.2291713724248,
        "gradePct": 2.2077918870250897,
        "smoothedEle": 56.338863659902714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.563684,
        "lng": 119.474076,
        "ele": 61.25,
        "distanceKm": 35.26843274775093,
        "gradePct": 2.1887256809684787,
        "smoothedEle": 56.901279895039885,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.563422,
        "lng": 119.473848,
        "ele": 61,
        "distanceKm": 35.30569891038975,
        "gradePct": 2.1316055591429746,
        "smoothedEle": 57.299781792141644,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56318,
        "lng": 119.473531,
        "ele": 60,
        "distanceKm": 35.34774681019217,
        "gradePct": 2.028434093049391,
        "smoothedEle": 57.60979057440216,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.563043313362126,
        "lng": 119.47309422777126,
        "ele": 58.885702133257446,
        "distanceKm": 35.39478729628053,
        "gradePct": 1.8713568632568167,
        "smoothedEle": 57.855898672983024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.562957,
        "lng": 119.472638,
        "ele": 57.75,
        "distanceKm": 35.44226788071915,
        "gradePct": 1.6648617121365092,
        "smoothedEle": 57.953873991724834,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.562855,
        "lng": 119.471966,
        "ele": 56,
        "distanceKm": 35.511693408313775,
        "gradePct": 1.3728038156975713,
        "smoothedEle": 58.112524769086015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5628085,
        "lng": 119.4715435,
        "ele": 55.875,
        "distanceKm": 35.55506555478797,
        "gradePct": 1.171765254739222,
        "smoothedEle": 58.21513806216726,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.562762,
        "lng": 119.471121,
        "ele": 55.75,
        "distanceKm": 35.59843771639525,
        "gradePct": 0.9594447621577175,
        "smoothedEle": 58.29617108622473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.562635,
        "lng": 119.470406,
        "ele": 56.5,
        "distanceKm": 35.67266901077052,
        "gradePct": 0.6212082979010617,
        "smoothedEle": 58.363986102745265,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.562762,
        "lng": 119.471121,
        "ele": 55.75,
        "distanceKm": 35.746900305145786,
        "gradePct": 0.3416443987560555,
        "smoothedEle": 58.30105127539419,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5628085,
        "lng": 119.4715435,
        "ele": 55.875,
        "distanceKm": 35.790272466753066,
        "gradePct": 0.21724265516549793,
        "smoothedEle": 58.22103397137509,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.562855,
        "lng": 119.471966,
        "ele": 56,
        "distanceKm": 35.833644613227264,
        "gradePct": 0.12339449818520763,
        "smoothedEle": 58.12279104939325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.562957,
        "lng": 119.472638,
        "ele": 57.75,
        "distanceKm": 35.90307014082189,
        "gradePct": 0.01962736274829382,
        "smoothedEle": 57.97112698514691,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56309,
        "lng": 119.473341,
        "ele": 59.5,
        "distanceKm": 35.97623281805277,
        "gradePct": -0.06113240041599682,
        "smoothedEle": 57.725828450011804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.563422,
        "lng": 119.473848,
        "ele": 61,
        "distanceKm": 36.03974012739423,
        "gradePct": -0.17399133884550366,
        "smoothedEle": 57.308923246066875,
        "gradeBand": "descent"
      },
      {
        "lat": 23.563684,
        "lng": 119.474076,
        "ele": 61.25,
        "distanceKm": 36.077006290033054,
        "gradePct": -0.26859111168085265,
        "smoothedEle": 56.91317479146707,
        "gradeBand": "descent"
      },
      {
        "lat": 23.564014,
        "lng": 119.474213,
        "ele": 61,
        "distanceKm": 36.11626766535918,
        "gradePct": -0.39207923479094686,
        "smoothedEle": 56.352063706554475,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56434,
        "lng": 119.474314,
        "ele": 60.75,
        "distanceKm": 36.15395060469661,
        "gradePct": -0.5354669198934218,
        "smoothedEle": 55.66955104682211,
        "gradeBand": "descent"
      },
      {
        "lat": 23.564739,
        "lng": 119.474502,
        "ele": 60,
        "distanceKm": 36.202278412979474,
        "gradePct": -0.7443574809876381,
        "smoothedEle": 54.617095233942244,
        "gradeBand": "descent"
      },
      {
        "lat": 23.564918403642388,
        "lng": 119.47484441852721,
        "ele": 59.596948603506036,
        "distanceKm": 36.242477559803525,
        "gradePct": -0.9400136328605584,
        "smoothedEle": 53.604732806107165,
        "gradeBand": "descent"
      },
      {
        "lat": 23.565078,
        "lng": 119.475199,
        "ele": 59.25,
        "distanceKm": 36.2827393524083,
        "gradePct": -1.1406659091478872,
        "smoothedEle": 52.5316022688235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.565302,
        "lng": 119.47568,
        "ele": 58,
        "distanceKm": 36.33772840430494,
        "gradePct": -1.3987340454453232,
        "smoothedEle": 51.12019954531311,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5654975,
        "lng": 119.4760655,
        "ele": 56.875,
        "distanceKm": 36.38263210541087,
        "gradePct": -1.5788841330885646,
        "smoothedEle": 50.12135438538023,
        "gradeBand": "descent"
      },
      {
        "lat": 23.565693,
        "lng": 119.476451,
        "ele": 55.75,
        "distanceKm": 36.427535755349304,
        "gradePct": -1.7803123758789552,
        "smoothedEle": 48.987537224434774,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566047,
        "lng": 119.476923,
        "ele": 51,
        "distanceKm": 36.48969466491466,
        "gradePct": -2.0067923696592502,
        "smoothedEle": 47.603493876282414,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566312,
        "lng": 119.4771775,
        "ele": 47.7499999999997,
        "distanceKm": 36.52895171808515,
        "gradePct": -2.112828194396337,
        "smoothedEle": 46.81560473578105,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566577,
        "lng": 119.477432,
        "ele": 44.5,
        "distanceKm": 36.56820873667882,
        "gradePct": -2.184578901839488,
        "smoothedEle": 46.08370600409511,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566677,
        "lng": 119.477558,
        "ele": 42.5,
        "distanceKm": 36.5851958320387,
        "gradePct": -2.2019401254756827,
        "smoothedEle": 45.78643183529721,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566931,
        "lng": 119.477639,
        "ele": 40,
        "distanceKm": 36.614621209206526,
        "gradePct": -2.216495281426724,
        "smoothedEle": 45.29311792692445,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567213,
        "lng": 119.477899,
        "ele": 36,
        "distanceKm": 36.65567578302042,
        "gradePct": -2.1858025630977695,
        "smoothedEle": 44.7029682686211,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567301,
        "lng": 119.477956,
        "ele": 35.5,
        "distanceKm": 36.667055562722794,
        "gradePct": -2.167772709407647,
        "smoothedEle": 44.54529509855028,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567722,
        "lng": 119.477976,
        "ele": 32,
        "distanceKm": 36.71391305007773,
        "gradePct": -2.068704807220581,
        "smoothedEle": 43.980568226624,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567809,
        "lng": 119.478012,
        "ele": 30.5,
        "distanceKm": 36.72425945961465,
        "gradePct": -2.0387662227249748,
        "smoothedEle": 43.86970048785169,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567891,
        "lng": 119.478065,
        "ele": 29.25,
        "distanceKm": 36.7348574248601,
        "gradePct": -2.006258594624093,
        "smoothedEle": 43.76534286877797,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567965,
        "lng": 119.478153,
        "ele": 28.75,
        "distanceKm": 36.74702908420227,
        "gradePct": -1.96758562665498,
        "smoothedEle": 43.64548916481628,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568033,
        "lng": 119.478249,
        "ele": 29,
        "distanceKm": 36.75939457725177,
        "gradePct": -1.92602057855928,
        "smoothedEle": 43.52372679030084,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568082,
        "lng": 119.478369,
        "ele": 29.5,
        "distanceKm": 36.77278371383575,
        "gradePct": -1.8799196588484408,
        "smoothedEle": 43.397359764256066,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568191,
        "lng": 119.478728,
        "ele": 30.25,
        "distanceKm": 36.811328105356026,
        "gradePct": -1.7389189723253324,
        "smoothedEle": 43.103220546349874,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568402,
        "lng": 119.479151,
        "ele": 34.5,
        "distanceKm": 36.860410876302765,
        "gradePct": -1.5533299132793899,
        "smoothedEle": 42.848997418384606,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568613,
        "lng": 119.479419,
        "ele": 32.5,
        "distanceKm": 36.89641852303961,
        "gradePct": -1.4048853416662936,
        "smoothedEle": 42.74882063192316,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569151,
        "lng": 119.47968,
        "ele": 36.5,
        "distanceKm": 36.96188908177278,
        "gradePct": -1.0957689350289628,
        "smoothedEle": 42.74377416098828,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569331,
        "lng": 119.479962,
        "ele": 39.5,
        "distanceKm": 36.996912752773675,
        "gradePct": -0.9026933136759212,
        "smoothedEle": 42.945160269243424,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5693517975594,
        "lng": 119.4803626319282,
        "ele": 41.976195247923386,
        "distanceKm": 37.03781012768314,
        "gradePct": -0.6793361992987229,
        "smoothedEle": 43.25376960935651,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569327,
        "lng": 119.480766,
        "ele": 43.75,
        "distanceKm": 37.07901329829183,
        "gradePct": -0.44152926129890774,
        "smoothedEle": 43.68697986937295,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569117,
        "lng": 119.481295,
        "ele": 46.5,
        "distanceKm": 37.13776793162188,
        "gradePct": -0.08542022125915735,
        "smoothedEle": 44.53328823388979,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568869499999998,
        "lng": 119.48174,
        "ele": 48.125,
        "distanceKm": 37.19081865143848,
        "gradePct": 0.2530639255478803,
        "smoothedEle": 45.524221760826904,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568622,
        "lng": 119.482185,
        "ele": 49.75,
        "distanceKm": 37.2438694443218,
        "gradePct": 0.6237855022184149,
        "smoothedEle": 46.795529487416886,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568368333333336,
        "lng": 119.48265633333334,
        "ele": 51.583333333333414,
        "distanceKm": 37.299576359040614,
        "gradePct": 1.0137291022147947,
        "smoothedEle": 48.26154575747642,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568114666666666,
        "lng": 119.48312766666666,
        "ele": 53.416666666666586,
        "distanceKm": 37.355283353763994,
        "gradePct": 1.3534902011883545,
        "smoothedEle": 49.64300631405786,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567861,
        "lng": 119.483599,
        "ele": 55.25,
        "distanceKm": 37.410990428493264,
        "gradePct": 1.6467105114127336,
        "smoothedEle": 50.98124998645487,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567652,
        "lng": 119.484274,
        "ele": 56.75,
        "distanceKm": 37.48360573319102,
        "gradePct": 1.9450261602792422,
        "smoothedEle": 52.59377570803937,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56754775,
        "lng": 119.48472275,
        "ele": 56.12500000000002,
        "distanceKm": 37.530788575897354,
        "gradePct": 2.04078605043304,
        "smoothedEle": 53.40471561820591,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5674435,
        "lng": 119.4851715,
        "ele": 55.49999999999995,
        "distanceKm": 37.577971453792074,
        "gradePct": 2.0735295924479926,
        "smoothedEle": 54.04367387540112,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56733925,
        "lng": 119.48562025,
        "ele": 54.87499999999998,
        "distanceKm": 37.62515436687363,
        "gradePct": 2.0226858815182482,
        "smoothedEle": 54.465030432357416,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.567235,
        "lng": 119.486069,
        "ele": 54.25,
        "distanceKm": 37.67233731514469,
        "gradePct": 1.898351041871912,
        "smoothedEle": 54.670764392121015,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5671068,
        "lng": 119.4865528,
        "ele": 55,
        "distanceKm": 37.723665698240985,
        "gradePct": 1.670133021779192,
        "smoothedEle": 54.66203258661218,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5669786,
        "lng": 119.4870366,
        "ele": 55.75,
        "distanceKm": 37.77499412757064,
        "gradePct": 1.359955398862546,
        "smoothedEle": 54.414402141102784,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5668504,
        "lng": 119.48752040000001,
        "ele": 56.5,
        "distanceKm": 37.82632260313459,
        "gradePct": 1.000582265752358,
        "smoothedEle": 53.92772893272722,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.566722199999997,
        "lng": 119.4880042,
        "ele": 57.25,
        "distanceKm": 37.87765112493004,
        "gradePct": 0.6052980573282312,
        "smoothedEle": 53.2068346026325,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.566594,
        "lng": 119.488488,
        "ele": 58,
        "distanceKm": 37.928979692957924,
        "gradePct": 0.1753977157162808,
        "smoothedEle": 52.25771566951707,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.566574709714775,
        "lng": 119.48893639604388,
        "ele": 57.72465304365751,
        "distanceKm": 37.97473096388765,
        "gradePct": -0.2308949527566341,
        "smoothedEle": 51.242224118174214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566588,
        "lng": 119.489387,
        "ele": 57.25,
        "distanceKm": 38.0206807289765,
        "gradePct": -0.6243994028191111,
        "smoothedEle": 50.108993241164534,
        "gradeBand": "descent"
      },
      {
        "lat": 23.566756,
        "lng": 119.489727,
        "ele": 56,
        "distanceKm": 38.060048344653644,
        "gradePct": -0.941099429756089,
        "smoothedEle": 49.09545904831025,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567002,
        "lng": 119.490275,
        "ele": 52.75,
        "distanceKm": 38.12223958261877,
        "gradePct": -1.4069190839199066,
        "smoothedEle": 47.404405177427954,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567208,
        "lng": 119.49072033333333,
        "ele": 49.66666666666652,
        "distanceKm": 38.17308071563369,
        "gradePct": -1.7517655771239846,
        "smoothedEle": 45.91181004180274,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567414,
        "lng": 119.49116566666667,
        "ele": 46.58333333333348,
        "distanceKm": 38.22392178509958,
        "gradePct": -2.086823921168592,
        "smoothedEle": 44.226677507490365,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56762,
        "lng": 119.491611,
        "ele": 43.5,
        "distanceKm": 38.27476279101371,
        "gradePct": -2.3972313176156193,
        "smoothedEle": 42.42936162019068,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567810333333334,
        "lng": 119.492112,
        "ele": 40.5,
        "distanceKm": 38.330037061321946,
        "gradePct": -2.7040002796158933,
        "smoothedEle": 40.355559037426886,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568000666666666,
        "lng": 119.492613,
        "ele": 37.5,
        "distanceKm": 38.38531126327525,
        "gradePct": -3.00141803703965,
        "smoothedEle": 38.05810044385269,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568191,
        "lng": 119.493114,
        "ele": 34.5,
        "distanceKm": 38.44058539687311,
        "gradePct": -3.2786639442016154,
        "smoothedEle": 35.60679667238482,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568302,
        "lng": 119.493504,
        "ele": 32.62500000000016,
        "distanceKm": 38.48220628558727,
        "gradePct": -3.4745760547387095,
        "smoothedEle": 33.684984569755215,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568413,
        "lng": 119.493894,
        "ele": 30.75,
        "distanceKm": 38.52382714222025,
        "gradePct": -3.6591122891215555,
        "smoothedEle": 31.732426193552786,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568523,
        "lng": 119.49442400000001,
        "ele": 28.625,
        "distanceKm": 38.57921199303777,
        "gradePct": -3.8897891603730335,
        "smoothedEle": 29.125430810389208,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568633,
        "lng": 119.494954,
        "ele": 26.5,
        "distanceKm": 38.63459679973078,
        "gradePct": -4.078375358946256,
        "smoothedEle": 26.649744922582975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568798,
        "lng": 119.495371,
        "ele": 22.25,
        "distanceKm": 38.68088826308145,
        "gradePct": -4.191038370251168,
        "smoothedEle": 24.697836218498935,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569074,
        "lng": 119.495724,
        "ele": 20.25,
        "distanceKm": 38.72817720451886,
        "gradePct": -4.251455337611267,
        "smoothedEle": 22.818964517242954,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569427435995056,
        "lng": 119.49579637611645,
        "ele": 19.816931662353177,
        "distanceKm": 38.76816382347099,
        "gradePct": -4.256424088388405,
        "smoothedEle": 21.380525885957397,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569784,
        "lng": 119.49585,
        "ele": 18.25,
        "distanceKm": 38.80818689238591,
        "gradePct": -4.2261942267046,
        "smoothedEle": 20.04437144008958,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570172,
        "lng": 119.496073,
        "ele": 15.25,
        "distanceKm": 38.85695092121247,
        "gradePct": -4.128649899159126,
        "smoothedEle": 18.593641582499394,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57043,
        "lng": 119.49665,
        "ele": 13.25,
        "distanceKm": 38.92238220312295,
        "gradePct": -3.89409123779918,
        "smoothedEle": 16.94361785868286,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570653,
        "lng": 119.497181,
        "ele": 11,
        "distanceKm": 38.98191092240854,
        "gradePct": -3.6030240340748096,
        "smoothedEle": 15.683502563992482,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57077,
        "lng": 119.497724,
        "ele": 9.5,
        "distanceKm": 39.03876090443637,
        "gradePct": -3.2765271100169224,
        "smoothedEle": 14.64685024413457,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570973,
        "lng": 119.498014,
        "ele": 9,
        "distanceKm": 39.07595077401733,
        "gradePct": -3.0350419077110713,
        "smoothedEle": 14.103728644414453,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571339000000002,
        "lng": 119.498473,
        "ele": 8.499999999999972,
        "distanceKm": 39.13795606327627,
        "gradePct": -2.595772922550089,
        "smoothedEle": 13.529234846951285,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571705,
        "lng": 119.498932,
        "ele": 8,
        "distanceKm": 39.19996125417126,
        "gradePct": -2.0923980107005575,
        "smoothedEle": 13.478043132666095,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572135,
        "lng": 119.499494,
        "ele": 9.5,
        "distanceKm": 39.27457259398399,
        "gradePct": -1.4259395839840707,
        "smoothedEle": 14.036873678031498,
        "gradeBand": "descent"
      },
      {
        "lat": 23.572474,
        "lng": 119.499895,
        "ele": 10.75,
        "distanceKm": 39.330170793051536,
        "gradePct": -0.9269000452957553,
        "smoothedEle": 14.75585016880848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57292433060455,
        "lng": 119.5002040936947,
        "ele": 11.886899789631192,
        "distanceKm": 39.38933002832847,
        "gradePct": -0.3985884397996589,
        "smoothedEle": 15.784174117031545,
        "gradeBand": "descent"
      },
      {
        "lat": 23.573398,
        "lng": 119.500472,
        "ele": 12.75,
        "distanceKm": 39.448656254764636,
        "gradePct": 0.11774930429796981,
        "smoothedEle": 16.97619023894289,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57367,
        "lng": 119.500661,
        "ele": 12.5,
        "distanceKm": 39.484514170546454,
        "gradePct": 0.42362337125946153,
        "smoothedEle": 17.75414951572561,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.574156,
        "lng": 119.501136,
        "ele": 14.75,
        "distanceKm": 39.557067006145296,
        "gradePct": 1.0349312577441558,
        "smoothedEle": 19.55416385709935,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57444,
        "lng": 119.501587,
        "ele": 18.75,
        "distanceKm": 39.61283363257145,
        "gradePct": 1.4821983813577966,
        "smoothedEle": 21.17299206762896,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.574579,
        "lng": 119.502002,
        "ele": 21.75,
        "distanceKm": 39.6578639451894,
        "gradePct": 1.7886858429624855,
        "smoothedEle": 22.456228041033672,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.574883,
        "lng": 119.502365,
        "ele": 25.5,
        "distanceKm": 39.70797676543891,
        "gradePct": 2.08638533912124,
        "smoothedEle": 23.97000510634566,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.575228,
        "lng": 119.502446,
        "ele": 28.75,
        "distanceKm": 39.747217208687594,
        "gradePct": 2.228669257140032,
        "smoothedEle": 24.975331203896566,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5755955,
        "lng": 119.5023065,
        "ele": 30.875,
        "distanceKm": 39.79048389154142,
        "gradePct": 2.358546382666735,
        "smoothedEle": 26.035364933815302,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.575963,
        "lng": 119.502167,
        "ele": 33,
        "distanceKm": 39.833750561319945,
        "gradePct": 2.4547066098040418,
        "smoothedEle": 27.091607846363218,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.576436,
        "lng": 119.502109,
        "ele": 32.5,
        "distanceKm": 39.88667694853866,
        "gradePct": 2.511929983075326,
        "smoothedEle": 28.297707386855826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.576661,
        "lng": 119.502187,
        "ele": 34,
        "distanceKm": 39.91292833536018,
        "gradePct": 2.5226638856721295,
        "smoothedEle": 28.87164408759589,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.576908,
        "lng": 119.502404,
        "ele": 32.75,
        "distanceKm": 39.94819043252249,
        "gradePct": 2.5301103977429773,
        "smoothedEle": 29.617382663499704,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.577211,
        "lng": 119.502854,
        "ele": 33.5,
        "distanceKm": 40.00509710448861,
        "gradePct": 2.5114489486330442,
        "smoothedEle": 30.822050747746587,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.577572,
        "lng": 119.503355,
        "ele": 38.5,
        "distanceKm": 40.07004534727577,
        "gradePct": 2.429172877535721,
        "smoothedEle": 32.07677157845824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.577919,
        "lng": 119.503702,
        "ele": 36.75,
        "distanceKm": 40.12238424990881,
        "gradePct": 2.287412660389762,
        "smoothedEle": 32.88222082930944,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578342,
        "lng": 119.504039,
        "ele": 38.5,
        "distanceKm": 40.18062404967259,
        "gradePct": 2.0815322840548163,
        "smoothedEle": 33.551412614050186,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578719,
        "lng": 119.504318,
        "ele": 34,
        "distanceKm": 40.23127766096929,
        "gradePct": 1.8754507502342193,
        "smoothedEle": 33.94421945310802,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.578936,
        "lng": 119.504759,
        "ele": 34,
        "distanceKm": 40.28228838732902,
        "gradePct": 1.6623507871561947,
        "smoothedEle": 34.14632901639242,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.579012,
        "lng": 119.505205,
        "ele": 35.25,
        "distanceKm": 40.32851979494802,
        "gradePct": 1.4478717914717585,
        "smoothedEle": 34.203271283456196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57919,
        "lng": 119.505504,
        "ele": 33.75,
        "distanceKm": 40.36485520726236,
        "gradePct": 1.276077619180711,
        "smoothedEle": 34.180816270835635,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.579716,
        "lng": 119.505739,
        "ele": 33.75,
        "distanceKm": 40.42805707638712,
        "gradePct": 0.9663225063433087,
        "smoothedEle": 34.02320598978573,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.580236,
        "lng": 119.505825,
        "ele": 33.75,
        "distanceKm": 40.48653897314871,
        "gradePct": 0.6510242380870871,
        "smoothedEle": 33.684311351610575,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5807137128134,
        "lng": 119.50577689798081,
        "ele": 33.52498584676021,
        "distanceKm": 40.539884001335345,
        "gradePct": 0.3088418497174366,
        "smoothedEle": 33.038300412460956,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.581189,
        "lng": 119.505702,
        "ele": 33,
        "distanceKm": 40.593281942602,
        "gradePct": -0.09280411330589401,
        "smoothedEle": 31.970341587127905,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58177,
        "lng": 119.505618,
        "ele": 32.5,
        "distanceKm": 40.6584509631757,
        "gradePct": -0.51862781217581,
        "smoothedEle": 30.70349851297104,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582109,
        "lng": 119.505601,
        "ele": 33.25,
        "distanceKm": 40.696185885835305,
        "gradePct": -0.7398899999274249,
        "smoothedEle": 29.9726409928451,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58248,
        "lng": 119.50564,
        "ele": 33.5,
        "distanceKm": 40.73763027172614,
        "gradePct": -0.9181202832853104,
        "smoothedEle": 29.37878771132457,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582903517984192,
        "lng": 119.50572653507483,
        "ele": 32.937936839772156,
        "distanceKm": 40.78554196455671,
        "gradePct": -1.0671982545894991,
        "smoothedEle": 28.814345107117227,
        "gradeBand": "descent"
      },
      {
        "lat": 23.583326,
        "lng": 119.505819,
        "ele": 32.75,
        "distanceKm": 40.833455602572734,
        "gradePct": -1.1816674927537902,
        "smoothedEle": 28.29188352754946,
        "gradeBand": "descent"
      },
      {
        "lat": 23.583643,
        "lng": 119.50595,
        "ele": 31.5,
        "distanceKm": 40.87114779481837,
        "gradePct": -1.2502328430958642,
        "smoothedEle": 27.913959853417218,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58418,
        "lng": 119.506106,
        "ele": 29.5,
        "distanceKm": 40.93293959768727,
        "gradePct": -1.3344069616044791,
        "smoothedEle": 27.322877634853533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.584497499999998,
        "lng": 119.5062455,
        "ele": 25.5,
        "distanceKm": 40.970998755722725,
        "gradePct": -1.3664157487240358,
        "smoothedEle": 26.94228605449902,
        "gradeBand": "descent"
      },
      {
        "lat": 23.584815,
        "lng": 119.506385,
        "ele": 21.5,
        "distanceKm": 41.00905790091194,
        "gradePct": -1.3719638449600728,
        "smoothedEle": 26.551786793858273,
        "gradeBand": "descent"
      },
      {
        "lat": 23.585314,
        "lng": 119.506469,
        "ele": 18.5,
        "distanceKm": 41.06520067221293,
        "gradePct": -1.3132695666316907,
        "smoothedEle": 25.965619161750773,
        "gradeBand": "descent"
      },
      {
        "lat": 23.585829,
        "lng": 119.506456,
        "ele": 17.25,
        "distanceKm": 41.122481460246114,
        "gradePct": -1.2064271966864055,
        "smoothedEle": 25.370586106417516,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58617832007105,
        "lng": 119.50634244101283,
        "ele": 18.558113542674626,
        "distanceKm": 41.1630113517852,
        "gradePct": -1.1331525525434323,
        "smoothedEle": 24.949409232666593,
        "gradeBand": "descent"
      },
      {
        "lat": 23.586537,
        "lng": 119.50626,
        "ele": 20.25,
        "distanceKm": 41.20377002292457,
        "gradePct": -1.0741015319782625,
        "smoothedEle": 24.493460840862184,
        "gradeBand": "descent"
      },
      {
        "lat": 23.586855,
        "lng": 119.506205,
        "ele": 21.5,
        "distanceKm": 41.23957150106567,
        "gradePct": -1.056514454944498,
        "smoothedEle": 24.0733460183237,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587394,
        "lng": 119.506332,
        "ele": 23.75,
        "distanceKm": 41.30088704478131,
        "gradePct": -1.0566898430023741,
        "smoothedEle": 23.36356952773996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587817,
        "lng": 119.506506,
        "ele": 24.25,
        "distanceKm": 41.35115376280706,
        "gradePct": -1.0642712047407656,
        "smoothedEle": 22.793075534547892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.588144,
        "lng": 119.506582,
        "ele": 24.25,
        "distanceKm": 41.38833020706337,
        "gradePct": -1.0671476883659445,
        "smoothedEle": 22.41385950792857,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5888,
        "lng": 119.50656,
        "ele": 23.75,
        "distanceKm": 41.46130862307478,
        "gradePct": -1.037582568686009,
        "smoothedEle": 21.851274537548445,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5892096,
        "lng": 119.5064996,
        "ele": 23.350000000000026,
        "distanceKm": 41.507268135006164,
        "gradePct": -0.9552933765121232,
        "smoothedEle": 21.793683494069974,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5896192,
        "lng": 119.5064392,
        "ele": 22.94999999999999,
        "distanceKm": 41.553227644364426,
        "gradePct": -0.8301784368279521,
        "smoothedEle": 21.9397333002503,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5900288,
        "lng": 119.5063788,
        "ele": 22.55000000000001,
        "distanceKm": 41.59918715114932,
        "gradePct": -0.6812388091981362,
        "smoothedEle": 22.206373436550905,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5904384,
        "lng": 119.5063184,
        "ele": 22.149999999999974,
        "distanceKm": 41.64514665536122,
        "gradePct": -0.5196921029869259,
        "smoothedEle": 22.536594341360235,
        "gradeBand": "descent"
      },
      {
        "lat": 23.590848,
        "lng": 119.506258,
        "ele": 21.75,
        "distanceKm": 41.691106156999886,
        "gradePct": -0.36371092217699824,
        "smoothedEle": 22.81657103751332,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5913265,
        "lng": 119.50626925,
        "ele": 21.625000000000004,
        "distanceKm": 41.74432535161713,
        "gradePct": -0.188377870163049,
        "smoothedEle": 23.07642704277215,
        "gradeBand": "descent"
      },
      {
        "lat": 23.591805,
        "lng": 119.5062805,
        "ele": 21.499999999999993,
        "distanceKm": 41.7975445461443,
        "gradePct": -0.02508203393907351,
        "smoothedEle": 23.276851454837548,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5922835,
        "lng": 119.50629175,
        "ele": 21.374999999999996,
        "distanceKm": 41.850763740581414,
        "gradePct": 0.1298703830713336,
        "smoothedEle": 23.446853944127394,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.592762,
        "lng": 119.506303,
        "ele": 21.25,
        "distanceKm": 41.90398293492846,
        "gradePct": 0.26993165510655287,
        "smoothedEle": 23.64285211375192,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5931855,
        "lng": 119.5063085,
        "ele": 22.125000000000068,
        "distanceKm": 41.95107738638961,
        "gradePct": 0.3862885708268024,
        "smoothedEle": 23.861589204775463,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.593609,
        "lng": 119.506314,
        "ele": 23,
        "distanceKm": 41.99817183782924,
        "gradePct": 0.4651216736210671,
        "smoothedEle": 24.130690269690852,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.594079,
        "lng": 119.506361,
        "ele": 24,
        "distanceKm": 42.05065251342571,
        "gradePct": 0.5110060056557486,
        "smoothedEle": 24.486580095510675,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.59442,
        "lng": 119.506474,
        "ele": 24.25,
        "distanceKm": 42.090279846201526,
        "gradePct": 0.526580209663377,
        "smoothedEle": 24.787597581186738,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.594921,
        "lng": 119.506766,
        "ele": 24.75,
        "distanceKm": 42.153436768517906,
        "gradePct": 0.5463403949322277,
        "smoothedEle": 25.31879813631071,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.595302666666665,
        "lng": 119.50707416666667,
        "ele": 25.499999999999964,
        "distanceKm": 42.20623053488053,
        "gradePct": 0.5868456785552703,
        "smoothedEle": 25.824647981481696,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.595684333333335,
        "lng": 119.50738233333334,
        "ele": 26.250000000000036,
        "distanceKm": 42.25902424689819,
        "gradePct": 0.6534368324230762,
        "smoothedEle": 26.398967500128226,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.596066,
        "lng": 119.5076905,
        "ele": 27,
        "distanceKm": 42.311817904568656,
        "gradePct": 0.7429634208613158,
        "smoothedEle": 27.037263132461725,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.596447666666666,
        "lng": 119.50799866666667,
        "ele": 27.749999999999964,
        "distanceKm": 42.364611507893244,
        "gradePct": 0.8427622229855445,
        "smoothedEle": 27.711664272399197,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.596829333333336,
        "lng": 119.50830683333334,
        "ele": 28.500000000000036,
        "distanceKm": 42.41740505687068,
        "gradePct": 0.9356894633132625,
        "smoothedEle": 28.383640445404186,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.597211,
        "lng": 119.508615,
        "ele": 29.25,
        "distanceKm": 42.4701985514996,
        "gradePct": 1.0080114300956586,
        "smoothedEle": 29.01090606072281,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5975025,
        "lng": 119.5088065,
        "ele": 29.75,
        "distanceKm": 42.50803233023115,
        "gradePct": 1.046495657961804,
        "smoothedEle": 29.430036008966365,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.597794,
        "lng": 119.508998,
        "ele": 30.25,
        "distanceKm": 42.545866086595275,
        "gradePct": 1.0816931028224575,
        "smoothedEle": 29.862587174368034,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5982725,
        "lng": 119.509177,
        "ele": 30.624999999999975,
        "distanceKm": 42.602112394955725,
        "gradePct": 1.133908110143158,
        "smoothedEle": 30.55665939158766,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.598751,
        "lng": 119.509356,
        "ele": 31,
        "distanceKm": 42.65835868173799,
        "gradePct": 1.1786693537261557,
        "smoothedEle": 31.259304810586812,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.599201,
        "lng": 119.50951433333333,
        "ele": 32.083333333333286,
        "distanceKm": 42.71093310547215,
        "gradePct": 1.1872637806482238,
        "smoothedEle": 31.812124077035342,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.599650999999998,
        "lng": 119.50967266666667,
        "ele": 33.166666666666714,
        "distanceKm": 42.763507512219014,
        "gradePct": 1.1691414397518272,
        "smoothedEle": 32.298879101445245,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.600101,
        "lng": 119.509831,
        "ele": 34.25,
        "distanceKm": 42.81608190197818,
        "gradePct": 1.1262066190497655,
        "smoothedEle": 32.72276579471459,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.600540666666667,
        "lng": 119.50999800000001,
        "ele": 34.083333333333336,
        "distanceKm": 42.86784743760046,
        "gradePct": 1.0685013508818344,
        "smoothedEle": 33.09535915874657,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.600980333333332,
        "lng": 119.510165,
        "ele": 33.916666666666664,
        "distanceKm": 42.91961295446857,
        "gradePct": 1.002737598690699,
        "smoothedEle": 33.423561561992194,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60142,
        "lng": 119.510332,
        "ele": 33.75,
        "distanceKm": 42.971378452583934,
        "gradePct": 0.9366791551532593,
        "smoothedEle": 33.707373009842385,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.601917,
        "lng": 119.510552,
        "ele": 35,
        "distanceKm": 43.03101576972515,
        "gradePct": 0.8579859944491296,
        "smoothedEle": 33.98273432603054,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.602306,
        "lng": 119.510733,
        "ele": 36.75,
        "distanceKm": 43.078038301283215,
        "gradePct": 0.7807680137620623,
        "smoothedEle": 34.16342823812765,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.602741637389276,
        "lng": 119.51096198567087,
        "ele": 37.08342178467046,
        "distanceKm": 43.131805293116024,
        "gradePct": 0.6834031811932064,
        "smoothedEle": 34.3446078526201,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603183,
        "lng": 119.511178,
        "ele": 35.75,
        "distanceKm": 43.1855922727935,
        "gradePct": 0.5907122972328736,
        "smoothedEle": 34.4992270927571,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603491,
        "lng": 119.511384,
        "ele": 35.25,
        "distanceKm": 43.225760727474764,
        "gradePct": 0.5238480053489979,
        "smoothedEle": 34.568644197963295,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603552,
        "lng": 119.512016,
        "ele": 34.75,
        "distanceKm": 43.29051289546418,
        "gradePct": 0.41880922368554824,
        "smoothedEle": 34.61065903773951,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603614333333333,
        "lng": 119.51253,
        "ele": 34.625,
        "distanceKm": 43.34334216351968,
        "gradePct": 0.3295355839064541,
        "smoothedEle": 34.56665519800802,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60367666666667,
        "lng": 119.51304400000001,
        "ele": 34.5,
        "distanceKm": 43.39617140689482,
        "gradePct": 0.2484604885461138,
        "smoothedEle": 34.51724050562582,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603739,
        "lng": 119.513558,
        "ele": 34.375,
        "distanceKm": 43.44900062558658,
        "gradePct": 0.17276997227794624,
        "smoothedEle": 34.44853336352745,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603801333333333,
        "lng": 119.514072,
        "ele": 34.25,
        "distanceKm": 43.50182981959637,
        "gradePct": 0.09834218371094607,
        "smoothedEle": 34.339685969237024,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60386366666667,
        "lng": 119.51458600000001,
        "ele": 34.125,
        "distanceKm": 43.55465898892562,
        "gradePct": 0.01538505647209547,
        "smoothedEle": 34.15051362305899,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603926,
        "lng": 119.5151,
        "ele": 34,
        "distanceKm": 43.607488133571294,
        "gradePct": -0.08533205709178447,
        "smoothedEle": 33.83600559046355,
        "gradeBand": "descent"
      },
      {
        "lat": 23.603977810542492,
        "lng": 119.51555809465269,
        "ele": 33.90681557105749,
        "distanceKm": 43.65451848510216,
        "gradePct": -0.18312003257308052,
        "smoothedEle": 33.494300377818625,
        "gradeBand": "descent"
      },
      {
        "lat": 23.604029621084983,
        "lng": 119.51601618930536,
        "ele": 33.813631142114964,
        "distanceKm": 43.701548818326955,
        "gradePct": -0.27282551335864014,
        "smoothedEle": 33.162674826253955,
        "gradeBand": "descent"
      },
      {
        "lat": 23.604082095669018,
        "lng": 119.5164741927946,
        "ele": 33.6898039823331,
        "distanceKm": 43.7485790181128,
        "gradePct": -0.3518599587596441,
        "smoothedEle": 32.82415019144436,
        "gradeBand": "descent"
      },
      {
        "lat": 23.604136,
        "lng": 119.516932,
        "ele": 33.5,
        "distanceKm": 43.79560935122546,
        "gradePct": -0.41594427149958196,
        "smoothedEle": 32.52669261626907,
        "gradeBand": "descent"
      },
      {
        "lat": 23.604643,
        "lng": 119.517088,
        "ele": 33.25,
        "distanceKm": 43.854183207987816,
        "gradePct": -0.47120112084612625,
        "smoothedEle": 32.20050924643812,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60499,
        "lng": 119.517549,
        "ele": 32.75,
        "distanceKm": 43.91497084028328,
        "gradePct": -0.5179221823332917,
        "smoothedEle": 31.903179954665507,
        "gradeBand": "descent"
      },
      {
        "lat": 23.605342,
        "lng": 119.517896,
        "ele": 31.75,
        "distanceKm": 43.967715996287126,
        "gradePct": -0.547298903425942,
        "smoothedEle": 31.673478361572695,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60572,
        "lng": 119.518144,
        "ele": 31.5,
        "distanceKm": 44.016758677157185,
        "gradePct": -0.5604842563838126,
        "smoothedEle": 31.483806966017507,
        "gradeBand": "descent"
      },
      {
        "lat": 23.606062,
        "lng": 119.518351,
        "ele": 31.25,
        "distanceKm": 44.06024462038884,
        "gradePct": -0.55655567251111,
        "smoothedEle": 31.334482290498247,
        "gradeBand": "descent"
      },
      {
        "lat": 23.606495,
        "lng": 119.518389,
        "ele": 30.25,
        "distanceKm": 44.10854751757154,
        "gradePct": -0.5276642485812104,
        "smoothedEle": 31.189987253589614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.606823499999997,
        "lng": 119.518296,
        "ele": 29.50000000000007,
        "distanceKm": 44.146284162090886,
        "gradePct": -0.49240314950312647,
        "smoothedEle": 31.092112188549233,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607152,
        "lng": 119.518203,
        "ele": 28.75,
        "distanceKm": 44.18402080064902,
        "gradePct": -0.45547735818234114,
        "smoothedEle": 31.008883556183996,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607293,
        "lng": 119.518222,
        "ele": 28.25,
        "distanceKm": 44.1998183721294,
        "gradePct": -0.4397606265502233,
        "smoothedEle": 30.976073609487024,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607455,
        "lng": 119.518222,
        "ele": 28,
        "distanceKm": 44.21783197512758,
        "gradePct": -0.4202285131071839,
        "smoothedEle": 30.944325662945122,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607835012155235,
        "lng": 119.51794152298173,
        "ele": 28.51306771633746,
        "distanceKm": 44.26884375776708,
        "gradePct": -0.36623356228446585,
        "smoothedEle": 30.86481190109556,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608215024310468,
        "lng": 119.51766104596348,
        "ele": 29.026135432674923,
        "distanceKm": 44.31985549399845,
        "gradePct": -0.3182483074027786,
        "smoothedEle": 30.800430286836054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6085950263942,
        "lng": 119.51738055237892,
        "ele": 29.528126350971146,
        "distanceKm": 44.37086720178509,
        "gradePct": -0.2750948920547458,
        "smoothedEle": 30.743428711501544,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608974906739583,
        "lng": 119.51709985855078,
        "ele": 29.896227460836386,
        "distanceKm": 44.42187908657524,
        "gradePct": -0.23625498023882086,
        "smoothedEle": 30.691820107308303,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609354787084964,
        "lng": 119.51681916472263,
        "ele": 30.26432857070163,
        "distanceKm": 44.47289092490081,
        "gradePct": -0.1978737098957609,
        "smoothedEle": 30.664095899423486,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609734667430345,
        "lng": 119.51653847089449,
        "ele": 30.632429680566872,
        "distanceKm": 44.523902716761185,
        "gradePct": -0.16200819868842373,
        "smoothedEle": 30.64923433507402,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610114547775726,
        "lng": 119.51625777706636,
        "ele": 31.00053079043217,
        "distanceKm": 44.574914462154936,
        "gradePct": -0.13706025398505162,
        "smoothedEle": 30.605297124345853,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610494428121108,
        "lng": 119.51597708323821,
        "ele": 31.36863190029741,
        "distanceKm": 44.62592616108308,
        "gradePct": -0.11300213041165391,
        "smoothedEle": 30.57990275128126,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61087430846649,
        "lng": 119.51569638941007,
        "ele": 31.736733010162652,
        "distanceKm": 44.67693781354419,
        "gradePct": -0.08423809105286964,
        "smoothedEle": 30.603314718327024,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61125418881187,
        "lng": 119.51541569558192,
        "ele": 32.104834120027895,
        "distanceKm": 44.72794941953766,
        "gradePct": -0.04486184961589714,
        "smoothedEle": 30.70424601783728,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61163446539832,
        "lng": 119.5151356399937,
        "ele": 32.25,
        "distanceKm": 44.77896106726542,
        "gradePct": -0.006176179716541696,
        "smoothedEle": 30.82116200530578,
        "gradeBand": "descent"
      },
      {
        "lat": 23.612015,
        "lng": 119.514856,
        "ele": 32.25,
        "distanceKm": 44.82997279127988,
        "gradePct": 0.027579455336673678,
        "smoothedEle": 30.927022278748698,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.612409749999998,
        "lng": 119.514878,
        "ele": 32,
        "distanceKm": 44.87392424312368,
        "gradePct": 0.05394604585566043,
        "smoothedEle": 31.010066139227916,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6128045,
        "lng": 119.5149,
        "ele": 31.75,
        "distanceKm": 44.91787569462359,
        "gradePct": 0.08216953361421915,
        "smoothedEle": 31.10671799762688,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61319925,
        "lng": 119.514922,
        "ele": 31.5,
        "distanceKm": 44.9618271457792,
        "gradePct": 0.1102222963491279,
        "smoothedEle": 31.221220387608952,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613594,
        "lng": 119.514944,
        "ele": 31.25,
        "distanceKm": 45.005778596590126,
        "gradePct": 0.13706675902618387,
        "smoothedEle": 31.339848336376424,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.613936254577304,
        "lng": 119.51494110842806,
        "ele": 30.586144649136386,
        "distanceKm": 45.04383676205367,
        "gradePct": 0.1600862085934132,
        "smoothedEle": 31.432495874392067,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614277,
        "lng": 119.514988,
        "ele": 30,
        "distanceKm": 45.08202598995629,
        "gradePct": 0.18262873274831862,
        "smoothedEle": 31.51490056508289,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.614839,
        "lng": 119.515007,
        "ele": 29.75,
        "distanceKm": 45.144547600151405,
        "gradePct": 0.2091053921865544,
        "smoothedEle": 31.633976083420976,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61531153249484,
        "lng": 119.51508470084028,
        "ele": 30.254514437092446,
        "distanceKm": 45.19768390480701,
        "gradePct": 0.21422304964068248,
        "smoothedEle": 31.715478075291852,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615778067315038,
        "lng": 119.51520859554702,
        "ele": 30.643148730509672,
        "distanceKm": 45.25107390834339,
        "gradePct": 0.19819955050585633,
        "smoothedEle": 31.74824387061534,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.616244533657518,
        "lng": 119.51533279777351,
        "ele": 30.946574365254815,
        "distanceKm": 45.30446391987575,
        "gradePct": 0.16889267408238098,
        "smoothedEle": 31.718549267294822,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.616711,
        "lng": 119.515457,
        "ele": 31.25,
        "distanceKm": 45.35785392073228,
        "gradePct": 0.13175710992729533,
        "smoothedEle": 31.638487695081658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617226,
        "lng": 119.515697,
        "ele": 32.25,
        "distanceKm": 45.42012121869916,
        "gradePct": 0.07534001441740017,
        "smoothedEle": 31.489268112582877,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617578,
        "lng": 119.515766,
        "ele": 33,
        "distanceKm": 45.4598881689297,
        "gradePct": 0.024305194234925408,
        "smoothedEle": 31.337694933232196,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6179932,
        "lng": 119.5158732,
        "ele": 33.05,
        "distanceKm": 45.50733060994931,
        "gradePct": -0.04759986886983114,
        "smoothedEle": 31.105627161966467,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6184084,
        "lng": 119.5159804,
        "ele": 33.1,
        "distanceKm": 45.55477304300205,
        "gradePct": -0.12462852373129892,
        "smoothedEle": 30.83295155552726,
        "gradeBand": "descent"
      },
      {
        "lat": 23.618823600000002,
        "lng": 119.51608759999999,
        "ele": 33.15,
        "distanceKm": 45.602215468087884,
        "gradePct": -0.20498544401587895,
        "smoothedEle": 30.528425210942203,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6192388,
        "lng": 119.5161948,
        "ele": 33.2,
        "distanceKm": 45.64965788520659,
        "gradePct": -0.2975427751724709,
        "smoothedEle": 30.154100509708623,
        "gradeBand": "descent"
      },
      {
        "lat": 23.619654,
        "lng": 119.516302,
        "ele": 33.25,
        "distanceKm": 45.69710029435811,
        "gradePct": -0.4246786347316863,
        "smoothedEle": 29.591189743146764,
        "gradeBand": "descent"
      },
      {
        "lat": 23.620161540295033,
        "lng": 119.51654912402607,
        "ele": 31.9444025127709,
        "distanceKm": 45.75889750974892,
        "gradePct": -0.6285447334086256,
        "smoothedEle": 28.60116885144459,
        "gradeBand": "descent"
      },
      {
        "lat": 23.620652,
        "lng": 119.51684,
        "ele": 31,
        "distanceKm": 45.820965522641885,
        "gradePct": -0.8611680790944846,
        "smoothedEle": 27.38796370905224,
        "gradeBand": "descent"
      },
      {
        "lat": 23.620942,
        "lng": 119.516955,
        "ele": 30.25,
        "distanceKm": 45.855274526755686,
        "gradePct": -1.0052221366325398,
        "smoothedEle": 26.61624497097141,
        "gradeBand": "descent"
      },
      {
        "lat": 23.621225,
        "lng": 119.516945,
        "ele": 29.5,
        "distanceKm": 45.88675922179853,
        "gradePct": -1.1407480213429124,
        "smoothedEle": 25.86547788985856,
        "gradeBand": "descent"
      },
      {
        "lat": 23.62172275,
        "lng": 119.516906,
        "ele": 27.81250000000011,
        "distanceKm": 45.94224900499643,
        "gradePct": -1.393553232408589,
        "smoothedEle": 24.437161087043357,
        "gradeBand": "descent"
      },
      {
        "lat": 23.622220499999997,
        "lng": 119.516867,
        "ele": 26.125,
        "distanceKm": 45.99773878711303,
        "gradePct": -1.6373141586386124,
        "smoothedEle": 22.965975391069723,
        "gradeBand": "descent"
      },
      {
        "lat": 23.62271825,
        "lng": 119.516828,
        "ele": 24.43749999999989,
        "distanceKm": 46.0532285681491,
        "gradePct": -1.8680968981895432,
        "smoothedEle": 21.501343941039266,
        "gradeBand": "descent"
      },
      {
        "lat": 23.623216,
        "lng": 119.516789,
        "ele": 22.75,
        "distanceKm": 46.10871834810423,
        "gradePct": -2.0850969929051275,
        "smoothedEle": 20.051631970677004,
        "gradeBand": "descent"
      },
      {
        "lat": 23.623785,
        "lng": 119.516767,
        "ele": 18.5,
        "distanceKm": 46.17202803423309,
        "gradePct": -2.293330859844937,
        "smoothedEle": 18.422021288735287,
        "gradeBand": "descent"
      },
      {
        "lat": 23.624127,
        "lng": 119.516823,
        "ele": 15.74999999999974,
        "distanceKm": 46.21048230932815,
        "gradePct": -2.387059729669603,
        "smoothedEle": 17.44150482658865,
        "gradeBand": "descent"
      },
      {
        "lat": 23.624469,
        "lng": 119.516879,
        "ele": 13,
        "distanceKm": 46.248936582213425,
        "gradePct": -2.4506632983375796,
        "smoothedEle": 16.50743117408524,
        "gradeBand": "descent"
      },
      {
        "lat": 23.624895000000002,
        "lng": 119.51694133333334,
        "ele": 10.833333333333224,
        "distanceKm": 46.29672944613911,
        "gradePct": -2.4926105787171204,
        "smoothedEle": 15.398638445434194,
        "gradeBand": "descent"
      },
      {
        "lat": 23.625321,
        "lng": 119.51700366666667,
        "ele": 8.666666666666776,
        "distanceKm": 46.34452230732036,
        "gradePct": -2.5036095247341996,
        "smoothedEle": 14.340048996117563,
        "gradeBand": "descent"
      },
      {
        "lat": 23.625747,
        "lng": 119.517066,
        "ele": 6.5,
        "distanceKm": 46.39231516575792,
        "gradePct": -2.4787981308929834,
        "smoothedEle": 13.328476258320629,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626161500000002,
        "lng": 119.517127,
        "ele": 6.5,
        "distanceKm": 46.43882258128016,
        "gradePct": -2.4241746073640664,
        "smoothedEle": 12.404484800786262,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626576,
        "lng": 119.517188,
        "ele": 6.5,
        "distanceKm": 46.48532999417426,
        "gradePct": -2.350229895762106,
        "smoothedEle": 11.543816908069156,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627086,
        "lng": 119.517305,
        "ele": 6.75,
        "distanceKm": 46.54327855363637,
        "gradePct": -2.2393962420820985,
        "smoothedEle": 10.566989540673914,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627484666666664,
        "lng": 119.51746266666666,
        "ele": 7.083333333333333,
        "distanceKm": 46.59042852607163,
        "gradePct": -2.1391631662271138,
        "smoothedEle": 9.833651408628732,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627883333333333,
        "lng": 119.51762033333334,
        "ele": 7.416666666666667,
        "distanceKm": 46.63757848185261,
        "gradePct": -2.0337262707519432,
        "smoothedEle": 9.140131948402717,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628282,
        "lng": 119.517778,
        "ele": 7.75,
        "distanceKm": 46.68472842097735,
        "gradePct": -1.8953582298715603,
        "smoothedEle": 8.621392588218486,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628729999999997,
        "lng": 119.5179145,
        "ele": 8.249999999999964,
        "distanceKm": 46.736448249585784,
        "gradePct": -1.7177860648435153,
        "smoothedEle": 8.221848738045894,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629178,
        "lng": 119.518051,
        "ele": 8.75,
        "distanceKm": 46.78816806540539,
        "gradePct": -1.5136050776999106,
        "smoothedEle": 8.02923678284332,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629434,
        "lng": 119.51817,
        "ele": 8.75,
        "distanceKm": 46.8191078776098,
        "gradePct": -1.3850737473650971,
        "smoothedEle": 7.977597952166065,
        "gradeBand": "descent"
      },
      {
        "lat": 23.62968086108147,
        "lng": 119.5184276580986,
        "ele": 8.75,
        "distanceKm": 46.857087528993404,
        "gradePct": -1.2121916371369554,
        "smoothedEle": 8.013138195243815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629928,
        "lng": 119.518685,
        "ele": 8.75,
        "distanceKm": 46.895067239314436,
        "gradePct": -1.024409377753903,
        "smoothedEle": 8.151752229826805,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63026,
        "lng": 119.51901,
        "ele": 8.75,
        "distanceKm": 46.944655603598484,
        "gradePct": -0.7719070225635576,
        "smoothedEle": 8.43700356251277,
        "gradeBand": "descent"
      },
      {
        "lat": 23.630479786144882,
        "lng": 119.51941397604031,
        "ele": 8.75,
        "distanceKm": 46.99251885886996,
        "gradePct": -0.5236524569855728,
        "smoothedEle": 8.804373357542243,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63069957228976,
        "lng": 119.51981795208061,
        "ele": 8.75,
        "distanceKm": 47.04038205475294,
        "gradePct": -0.2721671651613583,
        "smoothedEle": 9.2549794217566,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6309193051292,
        "lng": 119.520221963456,
        "ele": 8.381307100000527,
        "distanceKm": 47.08824526026148,
        "gradePct": -0.017819440135869512,
        "smoothedEle": 9.77851121764168,
        "gradeBand": "descent"
      },
      {
        "lat": 23.631139,
        "lng": 119.520626,
        "ele": 7.75,
        "distanceKm": 47.13610845614733,
        "gradePct": 0.2437132652204124,
        "smoothedEle": 10.38032059454206,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631377762361794,
        "lng": 119.52108614645041,
        "ele": 7.75,
        "distanceKm": 47.18998023061519,
        "gradePct": 0.520338159823908,
        "smoothedEle": 11.182512327852066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631616983668778,
        "lng": 119.52154600919019,
        "ele": 8.447907368453606,
        "distanceKm": 47.24385196424099,
        "gradePct": 0.7831705455945385,
        "smoothedEle": 12.110128978899242,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631856,
        "lng": 119.522006,
        "ele": 9,
        "distanceKm": 47.29772372088824,
        "gradePct": 1.0249195223599845,
        "smoothedEle": 13.137885917896542,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632046,
        "lng": 119.521932,
        "ele": 9.5,
        "distanceKm": 47.32015540087468,
        "gradePct": 1.1212759978625788,
        "smoothedEle": 13.58495818300586,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632182,
        "lng": 119.521995,
        "ele": 9.75,
        "distanceKm": 47.336583403635245,
        "gradePct": 1.1877844004512461,
        "smoothedEle": 13.93287303877746,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632543743049176,
        "lng": 119.52227784486159,
        "ele": 10.927412465556797,
        "distanceKm": 47.38606253230476,
        "gradePct": 1.3728793188747148,
        "smoothedEle": 14.983284466934407,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632903162032786,
        "lng": 119.52256422990773,
        "ele": 12.86827497703777,
        "distanceKm": 47.43554352821692,
        "gradePct": 1.529149286476479,
        "smoothedEle": 16.030333834700045,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633262581016393,
        "lng": 119.52285061495387,
        "ele": 14.809137488519028,
        "distanceKm": 47.48502447691381,
        "gradePct": 1.6654259026270923,
        "smoothedEle": 17.0739804654947,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633622,
        "lng": 119.523137,
        "ele": 16.75,
        "distanceKm": 47.53450537839515,
        "gradePct": 1.7829141336045784,
        "smoothedEle": 18.114224364963334,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634155,
        "lng": 119.523288,
        "ele": 19,
        "distanceKm": 47.59573597388885,
        "gradePct": 1.9077912235372894,
        "smoothedEle": 19.411652055282417,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63451,
        "lng": 119.523427,
        "ele": 21,
        "distanceKm": 47.63767299508344,
        "gradePct": 1.9833002930915147,
        "smoothedEle": 20.32011923580988,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634832,
        "lng": 119.523787,
        "ele": 24,
        "distanceKm": 47.688925872910275,
        "gradePct": 2.022364648705061,
        "smoothedEle": 21.27863538249014,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635083704594102,
        "lng": 119.52422708052701,
        "ele": 26.415076062829474,
        "distanceKm": 47.74177546657082,
        "gradePct": 1.9987154746735971,
        "smoothedEle": 22.067951167032476,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63533527524029,
        "lng": 119.5246672522645,
        "ele": 28.68039600152899,
        "distanceKm": 47.79462498372736,
        "gradePct": 1.907162863900929,
        "smoothedEle": 22.61458301499317,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635586,
        "lng": 119.525108,
        "ele": 30,
        "distanceKm": 47.84747454083844,
        "gradePct": 1.7608039267202387,
        "smoothedEle": 22.968104807504826,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.635788,
        "lng": 119.5254855,
        "ele": 29.937499999999996,
        "distanceKm": 47.892008729521464,
        "gradePct": 1.6088185967966617,
        "smoothedEle": 23.153202768730843,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63599,
        "lng": 119.525863,
        "ele": 29.875000000000004,
        "distanceKm": 47.93654286697144,
        "gradePct": 1.4311735387996884,
        "smoothedEle": 23.20727946983845,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636191999999998,
        "lng": 119.5262405,
        "ele": 29.812500000000004,
        "distanceKm": 47.981076953188186,
        "gradePct": 1.2248565545708998,
        "smoothedEle": 23.11500250983197,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636394,
        "lng": 119.526618,
        "ele": 29.75,
        "distanceKm": 48.0256109881715,
        "gradePct": 0.9987060656314192,
        "smoothedEle": 22.920766685775092,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636574,
        "lng": 119.52699899999999,
        "ele": 29.75,
        "distanceKm": 48.06927921286171,
        "gradePct": 0.7665737386735422,
        "smoothedEle": 22.683922993949192,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.636754,
        "lng": 119.52738,
        "ele": 29.75,
        "distanceKm": 48.112947390126315,
        "gradePct": 0.5202266147168203,
        "smoothedEle": 22.385630083914286,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63679175309897,
        "lng": 119.52783872601077,
        "ele": 26.7762969989517,
        "distanceKm": 48.15986435990056,
        "gradePct": 0.25414794905149307,
        "smoothedEle": 22.00587531568073,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63682931418734,
        "lng": 119.52829747013332,
        "ele": 23.807151054882443,
        "distanceKm": 48.20678124838588,
        "gradePct": -0.012272355610384977,
        "smoothedEle": 21.483946037008806,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636866505076334,
        "lng": 119.52875624910938,
        "ele": 20.170779262405773,
        "distanceKm": 48.25369801356901,
        "gradePct": -0.2734881431327224,
        "smoothedEle": 20.823827451195232,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636904,
        "lng": 119.529215,
        "ele": 16.75,
        "distanceKm": 48.30061490782357,
        "gradePct": -0.5244134173639247,
        "smoothedEle": 20.032583789083922,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636949851832743,
        "lng": 119.52964955032395,
        "ele": 15.447391115268678,
        "distanceKm": 48.345173599485705,
        "gradePct": -0.7532137721979246,
        "smoothedEle": 19.186644466322214,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63699576549211,
        "lng": 119.53008409283369,
        "ele": 14.123836604544433,
        "distanceKm": 48.38973227212625,
        "gradePct": -0.9671762012331229,
        "smoothedEle": 18.307860096480535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637042382746056,
        "lng": 119.53051854641684,
        "ele": 12.561918302272217,
        "distanceKm": 48.43429096390301,
        "gradePct": -1.1545366479373336,
        "smoothedEle": 17.43186179997916,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637089,
        "lng": 119.530953,
        "ele": 11,
        "distanceKm": 48.478849640027526,
        "gradePct": -1.3075690516429688,
        "smoothedEle": 16.581772361186182,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637141,
        "lng": 119.531627,
        "ele": 11.5,
        "distanceKm": 48.54775048461457,
        "gradePct": -1.4947576674549725,
        "smoothedEle": 15.326900188466437,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637132,
        "lng": 119.53198,
        "ele": 12,
        "distanceKm": 48.58372315944071,
        "gradePct": -1.5739786273493372,
        "smoothedEle": 14.715364716422044,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637068,
        "lng": 119.532354,
        "ele": 12.75,
        "distanceKm": 48.622480071965676,
        "gradePct": -1.6414580968479868,
        "smoothedEle": 14.101180281841817,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63689910566953,
        "lng": 119.53284429432045,
        "ele": 12.730947502606437,
        "distanceKm": 48.67583871805121,
        "gradePct": -1.678689963301649,
        "smoothedEle": 13.434717950867684,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636730070446355,
        "lng": 119.53333452954698,
        "ele": 11.903965001737662,
        "distanceKm": 48.729197306632756,
        "gradePct": -1.628673259092105,
        "smoothedEle": 13.025185945499361,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636561035223178,
        "lng": 119.53382476477348,
        "ele": 11.076982500868887,
        "distanceKm": 48.782555955559346,
        "gradePct": -1.4827908627552986,
        "smoothedEle": 12.923189948682104,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636392,
        "lng": 119.534315,
        "ele": 10.25,
        "distanceKm": 48.83591466483329,
        "gradePct": -1.2791187976893559,
        "smoothedEle": 12.96682980660324,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636259,
        "lng": 119.534677,
        "ele": 10.25,
        "distanceKm": 48.87564545555607,
        "gradePct": -1.1126137980756419,
        "smoothedEle": 13.022610742305762,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636126,
        "lng": 119.535039,
        "ele": 10.25,
        "distanceKm": 48.91537628104868,
        "gradePct": -0.9388769731791038,
        "smoothedEle": 13.109328738940711,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63604,
        "lng": 119.535673,
        "ele": 11,
        "distanceKm": 48.98066407359589,
        "gradePct": -0.6474163238803254,
        "smoothedEle": 13.311644961172812,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636151,
        "lng": 119.536066,
        "ele": 11.75,
        "distanceKm": 49.02255726551812,
        "gradePct": -0.4724618450088581,
        "smoothedEle": 13.423428148580744,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63638,
        "lng": 119.5364,
        "ele": 12.75,
        "distanceKm": 49.06505430839127,
        "gradePct": -0.31380275137811786,
        "smoothedEle": 13.463721427371944,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6366505,
        "lng": 119.5367515,
        "ele": 14.062499999999897,
        "distanceKm": 49.11181733520605,
        "gradePct": -0.17545549912052394,
        "smoothedEle": 13.392876177594117,
        "gradeBand": "descent"
      },
      {
        "lat": 23.636921,
        "lng": 119.537103,
        "ele": 15.375,
        "distanceKm": 49.158580305374244,
        "gradePct": -0.07857233153020146,
        "smoothedEle": 13.25741802098553,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6371915,
        "lng": 119.53745450000001,
        "ele": 16.687500000000103,
        "distanceKm": 49.20534321889369,
        "gradePct": -0.018672433612892905,
        "smoothedEle": 13.11490606367421,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637462,
        "lng": 119.537806,
        "ele": 18,
        "distanceKm": 49.25210607576295,
        "gradePct": 0.003421802305376431,
        "smoothedEle": 12.998504441518524,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.637801,
        "lng": 119.538247,
        "ele": 17.249999999999954,
        "distanceKm": 49.31074890344427,
        "gradePct": -0.012472615732965762,
        "smoothedEle": 12.883884703627148,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63814,
        "lng": 119.538688,
        "ele": 16.5,
        "distanceKm": 49.36939164201137,
        "gradePct": -0.041681684105742536,
        "smoothedEle": 12.805422139835384,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638379,
        "lng": 119.538984,
        "ele": 16,
        "distanceKm": 49.40958385870323,
        "gradePct": -0.0704068727587618,
        "smoothedEle": 12.744651615898055,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638689,
        "lng": 119.539297,
        "ele": 14.75,
        "distanceKm": 49.45653903011893,
        "gradePct": -0.11531994459699248,
        "smoothedEle": 12.660285662668219,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639044421306814,
        "lng": 119.53955881685434,
        "ele": 13.77877582645356,
        "distanceKm": 49.504217140351734,
        "gradePct": -0.16812214270941298,
        "smoothedEle": 12.533880661431787,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639407,
        "lng": 119.539809,
        "ele": 12.25,
        "distanceKm": 49.551913389878926,
        "gradePct": -0.21948428986265398,
        "smoothedEle": 12.353840506589783,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63981,
        "lng": 119.540067,
        "ele": 10,
        "distanceKm": 49.60386308171311,
        "gradePct": -0.26442692461487205,
        "smoothedEle": 12.08279212339622,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6402225,
        "lng": 119.54033,
        "ele": 9.75,
        "distanceKm": 49.656981684905475,
        "gradePct": -0.30876925331712535,
        "smoothedEle": 11.718202473557334,
        "gradeBand": "descent"
      },
      {
        "lat": 23.640635,
        "lng": 119.540593,
        "ele": 9.5,
        "distanceKm": 49.71010024551766,
        "gradePct": -0.3674881451469169,
        "smoothedEle": 11.265624196214347,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6410355,
        "lng": 119.540859,
        "ele": 9.25,
        "distanceKm": 49.76222909912261,
        "gradePct": -0.4487504852014222,
        "smoothedEle": 10.734966163941342,
        "gradeBand": "descent"
      },
      {
        "lat": 23.641436,
        "lng": 119.541125,
        "ele": 9,
        "distanceKm": 49.814357909633124,
        "gradePct": -0.5369471714846188,
        "smoothedEle": 10.194320083338662,
        "gradeBand": "descent"
      },
      {
        "lat": 23.641801666666666,
        "lng": 119.54137833333333,
        "ele": 8.833333333333341,
        "distanceKm": 49.86251568739498,
        "gradePct": -0.6197944879013779,
        "smoothedEle": 9.715649561059768,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642167333333333,
        "lng": 119.54163166666666,
        "ele": 8.666666666666659,
        "distanceKm": 49.910673426525086,
        "gradePct": -0.6969148746908495,
        "smoothedEle": 9.258119578886673,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642533,
        "lng": 119.541885,
        "ele": 8.5,
        "distanceKm": 49.95883112702295,
        "gradePct": -0.763351207533649,
        "smoothedEle": 8.837452779450281,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642898499999998,
        "lng": 119.542149,
        "ele": 8.250000000000018,
        "distanceKm": 50.007564173213495,
        "gradePct": -0.8127533367958335,
        "smoothedEle": 8.457479853791614,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643264,
        "lng": 119.542413,
        "ele": 8,
        "distanceKm": 50.05629717796359,
        "gradePct": -0.839691848884819,
        "smoothedEle": 8.132508774752196,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643608666666665,
        "lng": 119.54267433333334,
        "ele": 7.833333333333333,
        "distanceKm": 50.10296016534081,
        "gradePct": -0.8376579028824889,
        "smoothedEle": 7.899213590208676,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643953333333332,
        "lng": 119.54293566666666,
        "ele": 7.666666666666667,
        "distanceKm": 50.14962311272434,
        "gradePct": -0.8115393331740713,
        "smoothedEle": 7.711012769346293,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644298,
        "lng": 119.543197,
        "ele": 7.5,
        "distanceKm": 50.19628602011536,
        "gradePct": -0.7717490884214745,
        "smoothedEle": 7.52457807169666,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644665638563136,
        "lng": 119.54348700060571,
        "ele": 7.309710888644938,
        "distanceKm": 50.24672141363415,
        "gradePct": -0.7134745530863332,
        "smoothedEle": 7.325457561968524,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645033277126277,
        "lng": 119.54377700121141,
        "ele": 7.119421777289904,
        "distanceKm": 50.29715675855011,
        "gradePct": -0.6487879888529943,
        "smoothedEle": 7.128779278125792,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645400915689414,
        "lng": 119.54406700181713,
        "ele": 6.9291326659348424,
        "distanceKm": 50.34759205486282,
        "gradePct": -0.5859416613876686,
        "smoothedEle": 6.934276648951975,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645768558774517,
        "lng": 119.5443569958997,
        "ele": 6.738673714978836,
        "distanceKm": 50.39802732097464,
        "gradePct": -0.5279543900537765,
        "smoothedEle": 6.738493892781533,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646136274466237,
        "lng": 119.54464688524418,
        "ele": 6.545487746647841,
        "distanceKm": 50.44846283590907,
        "gradePct": -0.4773729312293657,
        "smoothedEle": 6.541157145358262,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646503990157957,
        "lng": 119.54493677458865,
        "ele": 6.352301778316875,
        "distanceKm": 50.49889830226526,
        "gradePct": -0.4363039809172918,
        "smoothedEle": 6.343527987630381,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646871705849676,
        "lng": 119.54522666393314,
        "ele": 6.159115809985881,
        "distanceKm": 50.549333720043435,
        "gradePct": -0.40606979636367746,
        "smoothedEle": 6.148594902891905,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6472394215414,
        "lng": 119.54551655327761,
        "ele": 5.965929841654915,
        "distanceKm": 50.599769089241605,
        "gradePct": -0.3923621799622221,
        "smoothedEle": 5.953356720117921,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64760713723312,
        "lng": 119.5458064426221,
        "ele": 5.772743873323921,
        "distanceKm": 50.650204409860194,
        "gradePct": -0.3889366993972459,
        "smoothedEle": 5.764006786217931,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64797485292484,
        "lng": 119.54609633196657,
        "ele": 5.579557904992955,
        "distanceKm": 50.70063968189721,
        "gradePct": -0.38473960752013897,
        "smoothedEle": 5.58369164132844,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64834256861656,
        "lng": 119.54638622131104,
        "ele": 5.38637193666196,
        "distanceKm": 50.75107490535287,
        "gradePct": -0.3791370396709583,
        "smoothedEle": 5.412795434410829,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64871028430828,
        "lng": 119.54667611065553,
        "ele": 5.193185968330994,
        "distanceKm": 50.801510080227416,
        "gradePct": -0.3702050932683772,
        "smoothedEle": 5.260965320909865,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649078,
        "lng": 119.546966,
        "ele": 5,
        "distanceKm": 50.85194520651852,
        "gradePct": -0.356657896893725,
        "smoothedEle": 5.134088829352309,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6494105,
        "lng": 119.54723025,
        "ele": 4.8125,
        "distanceKm": 50.89767711460334,
        "gradePct": -0.3396396567396462,
        "smoothedEle": 5.04165506197981,
        "gradeBand": "descent"
      },
      {
        "lat": 23.649743,
        "lng": 119.5474945,
        "ele": 4.625,
        "distanceKm": 50.94340898243072,
        "gradePct": -0.31814096879574744,
        "smoothedEle": 4.970226284230067,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6500755,
        "lng": 119.54775875,
        "ele": 4.4375,
        "distanceKm": 50.98914080999954,
        "gradePct": -0.2923805925046151,
        "smoothedEle": 4.9198593296023185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650408,
        "lng": 119.548023,
        "ele": 4.25,
        "distanceKm": 51.034872597309665,
        "gradePct": -0.26278660713200014,
        "smoothedEle": 4.890554162516815,
        "gradeBand": "descent"
      },
      {
        "lat": 23.650799,
        "lng": 119.548339,
        "ele": 4,
        "distanceKm": 51.08896730480754,
        "gradePct": -0.22232867106137547,
        "smoothedEle": 4.8835276867274136,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651155756204833,
        "lng": 119.54863940187813,
        "ele": 4,
        "distanceKm": 51.139066026238396,
        "gradePct": -0.1804867375260267,
        "smoothedEle": 4.903390066868611,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65151187810242,
        "lng": 119.54894070093907,
        "ele": 4,
        "distanceKm": 51.18916479205648,
        "gradePct": -0.13520105216788814,
        "smoothedEle": 4.948711170098604,
        "gradeBand": "descent"
      },
      {
        "lat": 23.651868,
        "lng": 119.549242,
        "ele": 4,
        "distanceKm": 51.23926350670089,
        "gradePct": -0.08666531948920078,
        "smoothedEle": 5.01949093044857,
        "gradeBand": "descent"
      },
      {
        "lat": 23.652211,
        "lng": 119.54954,
        "ele": 4.25,
        "distanceKm": 51.28800708770485,
        "gradePct": -0.03776227509743251,
        "smoothedEle": 5.112803370995309,
        "gradeBand": "descent"
      },
      {
        "lat": 23.652554365048605,
        "lng": 119.54984346329984,
        "ele": 4.560240869604238,
        "distanceKm": 51.33713060032986,
        "gradePct": 0.01177164345516495,
        "smoothedEle": 5.230215224488454,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652897730097212,
        "lng": 119.55014692659967,
        "ele": 4.870481739208522,
        "distanceKm": 51.386254061907245,
        "gradePct": 0.06122470548808039,
        "smoothedEle": 5.37086697212308,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653241095145816,
        "lng": 119.55045038989951,
        "ele": 5.180722608812759,
        "distanceKm": 51.4353774724376,
        "gradePct": 0.11056235857777655,
        "smoothedEle": 5.53558252302828,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65358446019442,
        "lng": 119.55075385319934,
        "ele": 5.4909634784169965,
        "distanceKm": 51.4845008319188,
        "gradePct": 0.1599420158694116,
        "smoothedEle": 5.724679669743451,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653927825243027,
        "lng": 119.55105731649918,
        "ele": 5.8012043480212805,
        "distanceKm": 51.533624140352345,
        "gradePct": 0.20906878626998412,
        "smoothedEle": 5.936698111576195,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65427119029163,
        "lng": 119.55136077979903,
        "ele": 6.111445217625517,
        "distanceKm": 51.58274739773609,
        "gradePct": 0.25936084288341643,
        "smoothedEle": 6.181139818008665,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654614555340235,
        "lng": 119.55166424309886,
        "ele": 6.421686087229801,
        "distanceKm": 51.63187060406883,
        "gradePct": 0.30769986321600007,
        "smoothedEle": 6.439036651255536,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654957920388842,
        "lng": 119.5519677063987,
        "ele": 6.731926956834039,
        "distanceKm": 51.68099375935206,
        "gradePct": 0.3797760047350593,
        "smoothedEle": 6.840199390589821,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655301285437446,
        "lng": 119.55227116969853,
        "ele": 7.042167826438277,
        "distanceKm": 51.73011686358274,
        "gradePct": 0.4657610344388324,
        "smoothedEle": 7.33537367114914,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65564465048605,
        "lng": 119.55257463299837,
        "ele": 7.352408696042561,
        "distanceKm": 51.779239916762364,
        "gradePct": 0.55575418689083,
        "smoothedEle": 7.874790841853152,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65598813267173,
        "lng": 119.55287794059271,
        "ele": 7.63245049391959,
        "distanceKm": 51.828363068404265,
        "gradePct": 0.6421923440472707,
        "smoothedEle": 8.42022135505022,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656331320733038,
        "lng": 119.55318164704853,
        "ele": 7.908216973277158,
        "distanceKm": 51.877486316021944,
        "gradePct": 0.723302429588436,
        "smoothedEle": 8.962275050808229,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65667416036652,
        "lng": 119.55348582352427,
        "ele": 8.204108486638601,
        "distanceKm": 51.926609598697425,
        "gradePct": 0.7989536514785153,
        "smoothedEle": 9.500951250995108,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657017,
        "lng": 119.55379,
        "ele": 8.5,
        "distanceKm": 51.975732830156815,
        "gradePct": 0.8698577582773868,
        "smoothedEle": 10.040216614084589,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657352,
        "lng": 119.554096,
        "ele": 8.75,
        "distanceKm": 52.0243015950227,
        "gradePct": 0.9361975430664382,
        "smoothedEle": 10.577449295662113,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657649,
        "lng": 119.554384,
        "ele": 9.25,
        "distanceKm": 52.06847245430457,
        "gradePct": 0.99100434948077,
        "smoothedEle": 11.065128174764789,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657902,
        "lng": 119.554623,
        "ele": 9.25,
        "distanceKm": 52.10567421072136,
        "gradePct": 1.0328741227422102,
        "smoothedEle": 11.465876199892376,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658265901640092,
        "lng": 119.5550092469601,
        "ele": 12.291613529979172,
        "distanceKm": 52.16210924643108,
        "gradePct": 1.063839002635205,
        "smoothedEle": 12.00517460883013,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658624,
        "lng": 119.555402,
        "ele": 14.5,
        "distanceKm": 52.218551012884944,
        "gradePct": 1.0627751181903533,
        "smoothedEle": 12.532662334462087,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658947702673068,
        "lng": 119.55575788010847,
        "ele": 15.283154249274238,
        "distanceKm": 52.269632918566074,
        "gradePct": 1.0482137123876019,
        "smoothedEle": 13.010365558222329,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659271640266244,
        "lng": 119.55611350724881,
        "ele": 15.534658591803591,
        "distanceKm": 52.3207148985199,
        "gradePct": 1.0300651774821064,
        "smoothedEle": 13.485627096142455,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65959557785942,
        "lng": 119.55646913438915,
        "ele": 15.786162934332946,
        "distanceKm": 52.37179681485738,
        "gradePct": 1.0118180265850456,
        "smoothedEle": 13.958584010198836,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6599195154526,
        "lng": 119.55682476152948,
        "ele": 16.037667276862265,
        "distanceKm": 52.42287866757805,
        "gradePct": 0.992585294186219,
        "smoothedEle": 14.422965069328809,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66024316593701,
        "lng": 119.55718069894478,
        "ele": 16.434433591956594,
        "distanceKm": 52.47396037148699,
        "gradePct": 0.967341032260158,
        "smoothedEle": 14.857464065870987,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660566802748733,
        "lng": 119.55753665212316,
        "ele": 16.855784140894713,
        "distanceKm": 52.525042080001576,
        "gradePct": 0.9325299267162577,
        "smoothedEle": 15.248274429796531,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660891,
        "lng": 119.557892,
        "ele": 17,
        "distanceKm": 52.576123950362366,
        "gradePct": 0.8913159947207582,
        "smoothedEle": 15.604132265662393,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661133,
        "lng": 119.558311,
        "ele": 16,
        "distanceKm": 52.62657379584595,
        "gradePct": 0.8558148317535698,
        "smoothedEle": 15.944668722676585,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661183,
        "lng": 119.558736,
        "ele": 16,
        "distanceKm": 52.67021456278101,
        "gradePct": 0.8110320400466666,
        "smoothedEle": 16.136084650990338,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661044827720765,
        "lng": 119.5592051247118,
        "ele": 16.361977041331155,
        "distanceKm": 52.720403248795755,
        "gradePct": 0.7418063471996863,
        "smoothedEle": 16.259015645565448,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66088174694831,
        "lng": 119.55966556765871,
        "ele": 16.62221231652747,
        "distanceKm": 52.770682230254195,
        "gradePct": 0.6507077598198496,
        "smoothedEle": 16.27366704637757,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660718666175853,
        "lng": 119.56012601060561,
        "ele": 16.882447591723786,
        "distanceKm": 52.820961266258834,
        "gradePct": 0.5451280994153397,
        "smoothedEle": 16.213548661234658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660555648485317,
        "lng": 119.56058647950937,
        "ele": 17.102467333348997,
        "distanceKm": 52.87124029325109,
        "gradePct": 0.4306260883643439,
        "smoothedEle": 16.106561733399378,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66039276342152,
        "lng": 119.56104700363903,
        "ele": 17.135878071734002,
        "distanceKm": 52.921519306830916,
        "gradePct": 0.31110434525111863,
        "smoothedEle": 15.966128955179821,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660230035362336,
        "lng": 119.56150759318633,
        "ele": 16.58616986860803,
        "distanceKm": 52.97179830477068,
        "gradePct": 0.18995613107819018,
        "smoothedEle": 15.788854265446913,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66006694790166,
        "lng": 119.56196803080788,
        "ele": 16.017260122071654,
        "distanceKm": 53.0220773211143,
        "gradePct": 0.06895990757258162,
        "smoothedEle": 15.570391513736507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659903972202425,
        "lng": 119.56242851468038,
        "ele": 16,
        "distanceKm": 53.07235630500707,
        "gradePct": -0.04508312562084562,
        "smoothedEle": 15.352469632251271,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659741,
        "lng": 119.562889,
        "ele": 16,
        "distanceKm": 53.12263534075632,
        "gradePct": -0.15018022228571795,
        "smoothedEle": 15.167183039392983,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659632,
        "lng": 119.563228,
        "ele": 16.25,
        "distanceKm": 53.15922758107312,
        "gradePct": -0.20814288923316052,
        "smoothedEle": 15.04717940867945,
        "gradeBand": "descent"
      },
      {
        "lat": 23.659603,
        "lng": 119.563696,
        "ele": 16,
        "distanceKm": 53.207001703089254,
        "gradePct": -0.2724733375188333,
        "smoothedEle": 14.863823525122532,
        "gradeBand": "descent"
      },
      {
        "lat": 23.65982,
        "lng": 119.564196,
        "ele": 14.875,
        "distanceKm": 53.26335334813812,
        "gradePct": -0.33520742822234373,
        "smoothedEle": 14.595494253622308,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660037,
        "lng": 119.564696,
        "ele": 13.75,
        "distanceKm": 53.319704916823426,
        "gradePct": -0.3878132161233278,
        "smoothedEle": 14.275984791185957,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660241749999997,
        "lng": 119.565072,
        "ele": 13.375000000000016,
        "distanceKm": 53.364256544159176,
        "gradePct": -0.4289836740013673,
        "smoothedEle": 13.976503831162363,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6604465,
        "lng": 119.56544799999999,
        "ele": 13.00000000000003,
        "distanceKm": 53.40880811995501,
        "gradePct": -0.4696790205860754,
        "smoothedEle": 13.653237080343152,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66065125,
        "lng": 119.56582399999999,
        "ele": 12.624999999999984,
        "distanceKm": 53.453359644212824,
        "gradePct": -0.5074270164167931,
        "smoothedEle": 13.316730579043512,
        "gradeBand": "descent"
      },
      {
        "lat": 23.660856,
        "lng": 119.5662,
        "ele": 12.25,
        "distanceKm": 53.497911116930766,
        "gradePct": -0.5427986762390699,
        "smoothedEle": 12.961400494326634,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661122,
        "lng": 119.566705,
        "ele": 12.625,
        "distanceKm": 53.55724245923779,
        "gradePct": -0.5883491799203402,
        "smoothedEle": 12.47623097745673,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661388,
        "lng": 119.56721,
        "ele": 13,
        "distanceKm": 53.616573710848115,
        "gradePct": -0.6400348999850362,
        "smoothedEle": 11.989346651886269,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6615705,
        "lng": 119.56759775,
        "ele": 12.5,
        "distanceKm": 53.66097381224559,
        "gradePct": -0.676032621203932,
        "smoothedEle": 11.660314311162919,
        "gradeBand": "descent"
      },
      {
        "lat": 23.661752999999997,
        "lng": 119.56798549999999,
        "ele": 12,
        "distanceKm": 53.705373864618586,
        "gradePct": -0.7000117681865677,
        "smoothedEle": 11.370012287462789,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6619355,
        "lng": 119.56837325,
        "ele": 11.5,
        "distanceKm": 53.74977386796971,
        "gradePct": -0.7091444845684005,
        "smoothedEle": 11.114433155534561,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662118,
        "lng": 119.568761,
        "ele": 11,
        "distanceKm": 53.79417382229714,
        "gradePct": -0.710617125439217,
        "smoothedEle": 10.867658688486166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662192,
        "lng": 119.569235,
        "ele": 10.25,
        "distanceKm": 53.843145386093035,
        "gradePct": -0.7008576905129754,
        "smoothedEle": 10.614126915009185,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662299,
        "lng": 119.56963300000001,
        "ele": 9.874999999999968,
        "distanceKm": 53.88539040300048,
        "gradePct": -0.6876443840849141,
        "smoothedEle": 10.384934385810551,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662406,
        "lng": 119.570031,
        "ele": 9.5,
        "distanceKm": 53.927635388079075,
        "gradePct": -0.6712193529225476,
        "smoothedEle": 10.154934224446167,
        "gradeBand": "descent"
      },
      {
        "lat": 23.6625615,
        "lng": 119.57059699999999,
        "ele": 8.50000000000006,
        "distanceKm": 53.98781783925013,
        "gradePct": -0.6420826535689581,
        "smoothedEle": 9.831488386029102,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662717,
        "lng": 119.571163,
        "ele": 7.5,
        "distanceKm": 54.048000224759086,
        "gradePct": -0.6115351902571067,
        "smoothedEle": 9.494131446027467,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662872,
        "lng": 119.571803,
        "ele": 8,
        "distanceKm": 54.115421944467975,
        "gradePct": -0.5827023062970437,
        "smoothedEle": 9.08528674971931,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662934,
        "lng": 119.572202,
        "ele": 9.25,
        "distanceKm": 54.156639186760586,
        "gradePct": -0.5732258384070757,
        "smoothedEle": 8.82630738742421,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662938,
        "lng": 119.572768,
        "ele": 10,
        "distanceKm": 54.21428577640587,
        "gradePct": -0.5670592446736137,
        "smoothedEle": 8.48341654818245,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662875333333332,
        "lng": 119.573314,
        "ele": 9.249999999999968,
        "distanceKm": 54.27032863427482,
        "gradePct": -0.5486704189141413,
        "smoothedEle": 8.256837891638924,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662812666666667,
        "lng": 119.57386,
        "ele": 8.500000000000032,
        "distanceKm": 54.32637151858831,
        "gradePct": -0.5129630664724868,
        "smoothedEle": 8.13615194564323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.66275,
        "lng": 119.574406,
        "ele": 7.75,
        "distanceKm": 54.38241442934638,
        "gradePct": -0.4647257802493616,
        "smoothedEle": 8.07745107944195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662723,
        "lng": 119.57483433333333,
        "ele": 7.416666666666686,
        "distanceKm": 54.42614174897865,
        "gradePct": -0.42171106248062845,
        "smoothedEle": 8.0545109360804,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662696,
        "lng": 119.57526266666667,
        "ele": 7.083333333333314,
        "distanceKm": 54.46986907759922,
        "gradePct": -0.3748487774198217,
        "smoothedEle": 8.053708703158318,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662669,
        "lng": 119.575691,
        "ele": 6.75,
        "distanceKm": 54.51359641520519,
        "gradePct": -0.32182275159341495,
        "smoothedEle": 8.07787085958801,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662646,
        "lng": 119.576331,
        "ele": 6.75,
        "distanceKm": 54.578828190598465,
        "gradePct": -0.22389541825701256,
        "smoothedEle": 8.18771384972682,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662685,
        "lng": 119.576887,
        "ele": 6.500000000000016,
        "distanceKm": 54.63562053246512,
        "gradePct": -0.14321706406996135,
        "smoothedEle": 8.242288100194655,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662724,
        "lng": 119.577443,
        "ele": 6.25,
        "distanceKm": 54.692412857491185,
        "gradePct": -0.06892459956381032,
        "smoothedEle": 8.268897058124637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.662667,
        "lng": 119.577997,
        "ele": 7.75,
        "distanceKm": 54.749190554775026,
        "gradePct": 0.00781812335737797,
        "smoothedEle": 8.381388776461629,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662564,
        "lng": 119.578615,
        "ele": 9,
        "distanceKm": 54.81316512614953,
        "gradePct": 0.07941916928223024,
        "smoothedEle": 8.561687191349915,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662482666666666,
        "lng": 119.57901733333333,
        "ele": 9.083333333333329,
        "distanceKm": 54.855127492945044,
        "gradePct": 0.11166984651125027,
        "smoothedEle": 8.664381389980612,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662401333333335,
        "lng": 119.57941966666667,
        "ele": 9.166666666666671,
        "distanceKm": 54.89708988463106,
        "gradePct": 0.13990705984556193,
        "smoothedEle": 8.769287369195645,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.66232,
        "lng": 119.579822,
        "ele": 9.25,
        "distanceKm": 54.93905230120484,
        "gradePct": 0.165260345790416,
        "smoothedEle": 8.880575804689878,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662265,
        "lng": 119.580265,
        "ele": 9,
        "distanceKm": 54.98458293638116,
        "gradePct": 0.18996442748319922,
        "smoothedEle": 9.011661190534724,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662250289903355,
        "lng": 119.58065387204987,
        "ele": 9.25,
        "distanceKm": 55.02422199301553,
        "gradePct": 0.20846834285186697,
        "smoothedEle": 9.138104854589415,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662219,
        "lng": 119.581042,
        "ele": 9.25,
        "distanceKm": 55.063904333369756,
        "gradePct": 0.22070360157425134,
        "smoothedEle": 9.266101756623158,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.662007,
        "lng": 119.58171,
        "ele": 8.75,
        "distanceKm": 55.135906236068415,
        "gradePct": 0.24512881071686435,
        "smoothedEle": 9.468066014739186,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661758,
        "lng": 119.582232,
        "ele": 11,
        "distanceKm": 55.19584804696949,
        "gradePct": 0.26302002309665085,
        "smoothedEle": 9.590803197552392,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661516,
        "lng": 119.582513,
        "ele": 12.5,
        "distanceKm": 55.235131050611045,
        "gradePct": 0.2548463015825657,
        "smoothedEle": 9.627764667503175,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.661049,
        "lng": 119.582726,
        "ele": 11.75,
        "distanceKm": 55.291408356726116,
        "gradePct": 0.22057545772027892,
        "smoothedEle": 9.603247757449678,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660693,
        "lng": 119.582784,
        "ele": 10.999999999999932,
        "distanceKm": 55.33143212888864,
        "gradePct": 0.19336760649574494,
        "smoothedEle": 9.573229928327782,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.660337,
        "lng": 119.582842,
        "ele": 10.25,
        "distanceKm": 55.371455903424476,
        "gradePct": 0.17120288561900665,
        "smoothedEle": 9.561216844274224,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659892999999997,
        "lng": 119.5829975,
        "ele": 10.125,
        "distanceKm": 55.42330453971599,
        "gradePct": 0.14928016126268134,
        "smoothedEle": 9.58521200634691,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.659449,
        "lng": 119.583153,
        "ele": 10,
        "distanceKm": 55.47515319243149,
        "gradePct": 0.13606915472353798,
        "smoothedEle": 9.664858174787334,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658817,
        "lng": 119.583203,
        "ele": 10,
        "distanceKm": 55.545612752078405,
        "gradePct": 0.13011946841164956,
        "smoothedEle": 9.857698905706599,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.658558,
        "lng": 119.583213,
        "ele": 9.75,
        "distanceKm": 55.57443028172117,
        "gradePct": 0.1351023747466787,
        "smoothedEle": 9.971138757750174,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65825,
        "lng": 119.583049,
        "ele": 9.25,
        "distanceKm": 55.61253451595924,
        "gradePct": 0.15193541623931317,
        "smoothedEle": 10.16218577125643,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65792275023987,
        "lng": 119.58273796067853,
        "ele": 8.551432916331391,
        "distanceKm": 55.660780821404494,
        "gradePct": 0.18917235089016735,
        "smoothedEle": 10.46486110740424,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657615,
        "lng": 119.582402,
        "ele": 7.75,
        "distanceKm": 55.709173751707425,
        "gradePct": 0.22097488709915647,
        "smoothedEle": 10.708215819785076,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.657216,
        "lng": 119.582218,
        "ele": 7.5,
        "distanceKm": 55.757336199157564,
        "gradePct": 0.2536333938449587,
        "smoothedEle": 10.886258081484824,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656663,
        "lng": 119.582288,
        "ele": 8.25,
        "distanceKm": 55.819239016147826,
        "gradePct": 0.3136768484864223,
        "smoothedEle": 11.150759005315507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656298,
        "lng": 119.582542,
        "ele": 9,
        "distanceKm": 55.867369111577354,
        "gradePct": 0.375647839834437,
        "smoothedEle": 11.440682688722578,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65613341954231,
        "lng": 119.58288734225059,
        "ele": 9.905134590074134,
        "distanceKm": 55.907018686586824,
        "gradePct": 0.4322132495556843,
        "smoothedEle": 11.73874128279345,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656005,
        "lng": 119.583253,
        "ele": 10.75,
        "distanceKm": 55.94690515905366,
        "gradePct": 0.4883955232651637,
        "smoothedEle": 12.063443195419934,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655863,
        "lng": 119.583741,
        "ele": 11.5,
        "distanceKm": 55.99905644598752,
        "gradePct": 0.558372277099953,
        "smoothedEle": 12.522140362094436,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655872,
        "lng": 119.584125,
        "ele": 12.5,
        "distanceKm": 56.0381802508753,
        "gradePct": 0.6102001404738274,
        "smoothedEle": 12.888357599528597,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65594894760695,
        "lng": 119.5845136824629,
        "ele": 13.736504385274056,
        "distanceKm": 56.07868223647417,
        "gradePct": 0.6589984406401367,
        "smoothedEle": 13.2874494121248,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.656043,
        "lng": 119.584898,
        "ele": 14.75,
        "distanceKm": 56.119198549773806,
        "gradePct": 0.6942181005559707,
        "smoothedEle": 13.67508338561321,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655966,
        "lng": 119.585449,
        "ele": 15.75,
        "distanceKm": 56.17596808608261,
        "gradePct": 0.7410405057760663,
        "smoothedEle": 14.246436205675586,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65576,
        "lng": 119.585888,
        "ele": 16,
        "distanceKm": 56.22620683185709,
        "gradePct": 0.7947688016378,
        "smoothedEle": 14.745026065657473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.655537,
        "lng": 119.586138,
        "ele": 16,
        "distanceKm": 56.26174874574486,
        "gradePct": 0.8316058122403821,
        "smoothedEle": 15.063141254753548,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65524,
        "lng": 119.586382,
        "ele": 16,
        "distanceKm": 56.30307987506526,
        "gradePct": 0.8654222110025382,
        "smoothedEle": 15.408824612116659,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6549335,
        "lng": 119.58664350000001,
        "ele": 16.875,
        "distanceKm": 56.34633404021781,
        "gradePct": 0.8836228854107354,
        "smoothedEle": 15.732087095468515,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654627,
        "lng": 119.586905,
        "ele": 17.75,
        "distanceKm": 56.38958824379914,
        "gradePct": 0.8798388277197191,
        "smoothedEle": 16.006905182856343,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.654254333333334,
        "lng": 119.58722833333333,
        "ele": 18.416666666666636,
        "distanceKm": 56.44251939410752,
        "gradePct": 0.8469259216526556,
        "smoothedEle": 16.262369815219525,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653881666666667,
        "lng": 119.58755166666667,
        "ele": 19.083333333333364,
        "distanceKm": 56.49545060279153,
        "gradePct": 0.7951455642016421,
        "smoothedEle": 16.466152953149233,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653509,
        "lng": 119.587875,
        "ele": 19.75,
        "distanceKm": 56.54838186984859,
        "gradePct": 0.7308530454306069,
        "smoothedEle": 16.643145863941804,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.653017,
        "lng": 119.588101,
        "ele": 19,
        "distanceKm": 56.60773533140268,
        "gradePct": 0.6401511123630925,
        "smoothedEle": 16.76616626192781,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652493,
        "lng": 119.588223,
        "ele": 18.75,
        "distanceKm": 56.66731186004317,
        "gradePct": 0.5317406151824298,
        "smoothedEle": 16.818019331693673,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.652151500000002,
        "lng": 119.588252,
        "ele": 17.625,
        "distanceKm": 56.7053996878283,
        "gradePct": 0.45852899160460475,
        "smoothedEle": 16.83117241651962,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65181,
        "lng": 119.588281,
        "ele": 16.5,
        "distanceKm": 56.74348751621179,
        "gradePct": 0.38857417488044277,
        "smoothedEle": 16.842566387196506,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6513725,
        "lng": 119.58838025,
        "ele": 16.062500000000018,
        "distanceKm": 56.79317460666825,
        "gradePct": 0.30786940756289527,
        "smoothedEle": 16.86532643153615,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.650935,
        "lng": 119.58847949999999,
        "ele": 15.625000000000032,
        "distanceKm": 56.84286170400254,
        "gradePct": 0.23367606023327347,
        "smoothedEle": 16.874516692835066,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6504975,
        "lng": 119.58857875,
        "ele": 15.187499999999984,
        "distanceKm": 56.892548808215146,
        "gradePct": 0.1647703076264122,
        "smoothedEle": 16.845045462036282,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.65006,
        "lng": 119.588678,
        "ele": 14.75,
        "distanceKm": 56.94223591930569,
        "gradePct": 0.10510893583208301,
        "smoothedEle": 16.7865463437614,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64947,
        "lng": 119.588939,
        "ele": 15.25,
        "distanceKm": 57.01302267268982,
        "gradePct": 0.028776097307715534,
        "smoothedEle": 16.668791371867982,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.64918180995111,
        "lng": 119.58913325670004,
        "ele": 15.75,
        "distanceKm": 57.0506843440243,
        "gradePct": -0.016087366680962133,
        "smoothedEle": 16.567481309727313,
        "gradeBand": "descent"
      },
      {
        "lat": 23.648935,
        "lng": 119.589386,
        "ele": 15.75,
        "distanceKm": 57.0883129385264,
        "gradePct": -0.05413696637981716,
        "smoothedEle": 16.455225134289293,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64866555044102,
        "lng": 119.58973135428076,
        "ele": 15.933049972134251,
        "distanceKm": 57.13452002689525,
        "gradePct": -0.08913235961135371,
        "smoothedEle": 16.343816810456637,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64839610088204,
        "lng": 119.59007670856153,
        "ele": 16.116099944268473,
        "distanceKm": 57.180727170413874,
        "gradePct": -0.11478471406630676,
        "smoothedEle": 16.248728546310332,
        "gradeBand": "descent"
      },
      {
        "lat": 23.648126651323057,
        "lng": 119.59042206284228,
        "ele": 16.299149916402726,
        "distanceKm": 57.22693436907952,
        "gradePct": -0.1263470457942347,
        "smoothedEle": 16.20587928564451,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647857201764072,
        "lng": 119.59076741712303,
        "ele": 16.48219988853695,
        "distanceKm": 57.273141622893,
        "gradePct": -0.1264764990893866,
        "smoothedEle": 16.223767476071306,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647588,
        "lng": 119.591113,
        "ele": 16.5,
        "distanceKm": 57.31934880586862,
        "gradePct": -0.1210546036711861,
        "smoothedEle": 16.264894664588464,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647326999999997,
        "lng": 119.59143725000001,
        "ele": 16.687500000000014,
        "distanceKm": 57.363315691659786,
        "gradePct": -0.1071134852867722,
        "smoothedEle": 16.32681726151674,
        "gradeBand": "descent"
      },
      {
        "lat": 23.647066,
        "lng": 119.5917615,
        "ele": 16.875,
        "distanceKm": 57.40728262693676,
        "gradePct": -0.08343109374383814,
        "smoothedEle": 16.410543132428643,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646805,
        "lng": 119.59208575,
        "ele": 17.062499999999986,
        "distanceKm": 57.451249611700426,
        "gradePct": -0.05119395208488058,
        "smoothedEle": 16.515582152262606,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646544,
        "lng": 119.59241,
        "ele": 17.25,
        "distanceKm": 57.49521664595166,
        "gradePct": -0.023317886002200083,
        "smoothedEle": 16.581822571110983,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646336499999997,
        "lng": 119.59274450000001,
        "ele": 16.875,
        "distanceKm": 57.53636576889888,
        "gradePct": -0.003178094191044067,
        "smoothedEle": 16.59010786906633,
        "gradeBand": "descent"
      },
      {
        "lat": 23.646129,
        "lng": 119.593079,
        "ele": 16.5,
        "distanceKm": 57.57751493658033,
        "gradePct": 0.011152585160164818,
        "smoothedEle": 16.54320139191601,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645933499999998,
        "lng": 119.593502,
        "ele": 16.625,
        "distanceKm": 57.625774763778495,
        "gradePct": 0.014179527403104686,
        "smoothedEle": 16.435799851026182,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645738,
        "lng": 119.593925,
        "ele": 16.75,
        "distanceKm": 57.67403464844632,
        "gradePct": 0.0037305907666258524,
        "smoothedEle": 16.281153835938227,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.645505443469318,
        "lng": 119.59437574746786,
        "ele": 16.791883133888923,
        "distanceKm": 57.72672898111477,
        "gradePct": -0.034633136998714065,
        "smoothedEle": 16.03290406280172,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645255082601988,
        "lng": 119.59481531060091,
        "ele": 16.906412350416684,
        "distanceKm": 57.77945180332098,
        "gradePct": -0.10655878455314004,
        "smoothedEle": 15.696589995670761,
        "gradeBand": "descent"
      },
      {
        "lat": 23.645004721734658,
        "lng": 119.59525487373394,
        "ele": 17.02094156694446,
        "distanceKm": 57.83217469827028,
        "gradePct": -0.196655420053904,
        "smoothedEle": 15.299681444694864,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64475436086733,
        "lng": 119.59569443686698,
        "ele": 17.135470783472222,
        "distanceKm": 57.88489766596422,
        "gradePct": -0.30585972406227774,
        "smoothedEle": 14.83861701622862,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644504,
        "lng": 119.596134,
        "ele": 17.25,
        "distanceKm": 57.93762070640007,
        "gradePct": -0.4253988086921663,
        "smoothedEle": 14.356028067173844,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644332333333335,
        "lng": 119.59653866666667,
        "ele": 16.250000000000053,
        "distanceKm": 57.98304560189774,
        "gradePct": -0.5264633748349812,
        "smoothedEle": 13.931168889150802,
        "gradeBand": "descent"
      },
      {
        "lat": 23.644160666666668,
        "lng": 119.59694333333333,
        "ele": 15.249999999999947,
        "distanceKm": 58.02847054645808,
        "gradePct": -0.6168263026038293,
        "smoothedEle": 13.504386667964896,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643989,
        "lng": 119.597348,
        "ele": 14.25,
        "distanceKm": 58.07389554008339,
        "gradePct": -0.6892728677880549,
        "smoothedEle": 13.10096285061995,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643847,
        "lng": 119.597698,
        "ele": 13.25,
        "distanceKm": 58.11288695318709,
        "gradePct": -0.7394314304759249,
        "smoothedEle": 12.767324332970052,
        "gradeBand": "descent"
      },
      {
        "lat": 23.643286,
        "lng": 119.597598,
        "ele": 12.5,
        "distanceKm": 58.17609356859178,
        "gradePct": -0.809637718499152,
        "smoothedEle": 12.223265406038086,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642927,
        "lng": 119.597559,
        "ele": 10.75,
        "distanceKm": 58.21620978477144,
        "gradePct": -0.8407711149362759,
        "smoothedEle": 11.878605773952946,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642483333333335,
        "lng": 119.59749533333334,
        "ele": 9.74999999999995,
        "distanceKm": 58.26596776971081,
        "gradePct": -0.8661281322998722,
        "smoothedEle": 11.45196275293395,
        "gradeBand": "descent"
      },
      {
        "lat": 23.642039666666665,
        "lng": 119.59743166666667,
        "ele": 8.75000000000005,
        "distanceKm": 58.31572575751605,
        "gradePct": -0.8798300707523213,
        "smoothedEle": 11.024362023322848,
        "gradeBand": "descent"
      },
      {
        "lat": 23.641596,
        "lng": 119.597368,
        "ele": 7.75,
        "distanceKm": 58.36548374818595,
        "gradePct": -0.88251777967407,
        "smoothedEle": 10.595803593258072,
        "gradeBand": "descent"
      },
      {
        "lat": 23.641274,
        "lng": 119.597303,
        "ele": 7.75,
        "distanceKm": 58.40189560847772,
        "gradePct": -0.8803285868405459,
        "smoothedEle": 10.28138709110364,
        "gradeBand": "descent"
      },
      {
        "lat": 23.640772,
        "lng": 119.597252,
        "ele": 7.75,
        "distanceKm": 58.45795676119406,
        "gradePct": -0.8738458102456147,
        "smoothedEle": 9.79659583706449,
        "gradeBand": "descent"
      },
      {
        "lat": 23.64027,
        "lng": 119.597201,
        "ele": 7.75,
        "distanceKm": 58.514017915756334,
        "gradePct": -0.8523899142443763,
        "smoothedEle": 9.37822429235925,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639872500000003,
        "lng": 119.59721350000001,
        "ele": 7.875,
        "distanceKm": 58.55823629669699,
        "gradePct": -0.8282464651313954,
        "smoothedEle": 9.098801799155863,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639475,
        "lng": 119.597226,
        "ele": 8,
        "distanceKm": 58.60245467774934,
        "gradePct": -0.797517642362122,
        "smoothedEle": 8.869002157850892,
        "gradeBand": "descent"
      },
      {
        "lat": 23.639015454545454,
        "lng": 119.59722418181819,
        "ele": 8.090909090909095,
        "distanceKm": 58.65355420707957,
        "gradePct": -0.7523941935599524,
        "smoothedEle": 8.65530483983237,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63855590909091,
        "lng": 119.59722236363636,
        "ele": 8.181818181818178,
        "distanceKm": 58.70465373641177,
        "gradePct": -0.6973109612232307,
        "smoothedEle": 8.491335091697458,
        "gradeBand": "descent"
      },
      {
        "lat": 23.638096363636365,
        "lng": 119.59722054545455,
        "ele": 8.272727272727273,
        "distanceKm": 58.75575326574672,
        "gradePct": -0.6209733375110432,
        "smoothedEle": 8.434678929410737,
        "gradeBand": "descent"
      },
      {
        "lat": 23.637636818181818,
        "lng": 119.59721872727273,
        "ele": 8.36363636363637,
        "distanceKm": 58.80685279508402,
        "gradePct": -0.526081724008138,
        "smoothedEle": 8.47020417983282,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63717727272727,
        "lng": 119.59721690909092,
        "ele": 8.454545454545451,
        "distanceKm": 58.85795232442368,
        "gradePct": -0.4105423090203004,
        "smoothedEle": 8.60795911976171,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63671772727273,
        "lng": 119.59721509090909,
        "ele": 8.545454545454549,
        "distanceKm": 58.909051853765305,
        "gradePct": -0.28902915623728376,
        "smoothedEle": 8.774357367845376,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63625818181818,
        "lng": 119.59721327272727,
        "ele": 8.63636363636363,
        "distanceKm": 58.960151383109675,
        "gradePct": -0.1707086058600879,
        "smoothedEle": 8.926674847516027,
        "gradeBand": "descent"
      },
      {
        "lat": 23.635798636363635,
        "lng": 119.59721145454546,
        "ele": 8.727272727272727,
        "distanceKm": 59.011250912456404,
        "gradePct": -0.06889665251055277,
        "smoothedEle": 9.054390541109543,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63533909090909,
        "lng": 119.59720963636364,
        "ele": 8.818181818181822,
        "distanceKm": 59.06235044180549,
        "gradePct": 0.014691682148969319,
        "smoothedEle": 9.150879303415438,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634879545454545,
        "lng": 119.59720781818181,
        "ele": 8.909090909090905,
        "distanceKm": 59.11344997115654,
        "gradePct": 0.0801806625562275,
        "smoothedEle": 9.223923350194864,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63442,
        "lng": 119.597206,
        "ele": 9,
        "distanceKm": 59.16454950051034,
        "gradePct": 0.13021483328385414,
        "smoothedEle": 9.271096969057291,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.634096,
        "lng": 119.597192,
        "ele": 9,
        "distanceKm": 59.20060492308469,
        "gradePct": 0.1559130467501511,
        "smoothedEle": 9.283892282715978,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6337565,
        "lng": 119.59722300000001,
        "ele": 9.500000000000048,
        "distanceKm": 59.23848750623336,
        "gradePct": 0.16951981415257045,
        "smoothedEle": 9.301421262072935,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633417,
        "lng": 119.597254,
        "ele": 10,
        "distanceKm": 59.27637009006449,
        "gradePct": 0.17561212929869896,
        "smoothedEle": 9.327072738191545,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.633042,
        "lng": 119.59744,
        "ele": 11,
        "distanceKm": 59.322171294467005,
        "gradePct": 0.17132353409852924,
        "smoothedEle": 9.368117709398401,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632869,
        "lng": 119.597641,
        "ele": 11.25,
        "distanceKm": 59.35026593564451,
        "gradePct": 0.15963983268065612,
        "smoothedEle": 9.385437191635818,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632758,
        "lng": 119.597921,
        "ele": 11,
        "distanceKm": 59.38134533596938,
        "gradePct": 0.14333867525332736,
        "smoothedEle": 9.400828464550123,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.63262,
        "lng": 119.598308,
        "ele": 10.75,
        "distanceKm": 59.423649970581735,
        "gradePct": 0.11782937191035359,
        "smoothedEle": 9.407018294746598,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632379,
        "lng": 119.598933,
        "ele": 10.25,
        "distanceKm": 59.49272836218777,
        "gradePct": 0.06889745541600013,
        "smoothedEle": 9.352583451393562,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632225,
        "lng": 119.599254,
        "ele": 9.75,
        "distanceKm": 59.529640943631804,
        "gradePct": 0.04333211590650023,
        "smoothedEle": 9.30577612436486,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.632022,
        "lng": 119.599647,
        "ele": 9.5,
        "distanceKm": 59.575600904419765,
        "gradePct": 0.011720614190390322,
        "smoothedEle": 9.22842320265559,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.631703,
        "lng": 119.600024,
        "ele": 9,
        "distanceKm": 59.62788052619588,
        "gradePct": -0.023816392133869966,
        "smoothedEle": 9.118163263758168,
        "gradeBand": "descent"
      },
      {
        "lat": 23.631195,
        "lng": 119.600445,
        "ele": 8.5,
        "distanceKm": 59.69880394489419,
        "gradePct": -0.06119492177126737,
        "smoothedEle": 8.977278544452895,
        "gradeBand": "descent"
      },
      {
        "lat": 23.630821272535798,
        "lng": 119.60074564008717,
        "ele": 8.948998003309471,
        "distanceKm": 59.750426972921666,
        "gradePct": -0.08792076459209959,
        "smoothedEle": 8.869902023468912,
        "gradeBand": "descent"
      },
      {
        "lat": 23.630439,
        "lng": 119.601034,
        "ele": 9.25,
        "distanceKm": 59.8020966407051,
        "gradePct": -0.11601813724121576,
        "smoothedEle": 8.770037024972982,
        "gradeBand": "descent"
      },
      {
        "lat": 23.63005,
        "lng": 119.601253,
        "ele": 9.00000000000002,
        "distanceKm": 59.85076608805415,
        "gradePct": -0.14553862519269636,
        "smoothedEle": 8.657991753277473,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629661,
        "lng": 119.601472,
        "ele": 8.75,
        "distanceKm": 59.899435565781424,
        "gradePct": -0.17029408564380547,
        "smoothedEle": 8.552004920101108,
        "gradeBand": "descent"
      },
      {
        "lat": 23.629336,
        "lng": 119.601669,
        "ele": 8,
        "distanceKm": 59.940772484753765,
        "gradePct": -0.18266892122320433,
        "smoothedEle": 8.480180882051055,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628923,
        "lng": 119.60190666666666,
        "ele": 7.583333333333333,
        "distanceKm": 59.99268759856337,
        "gradePct": -0.18594576964354276,
        "smoothedEle": 8.42288672554374,
        "gradeBand": "descent"
      },
      {
        "lat": 23.62851,
        "lng": 119.60214433333334,
        "ele": 7.166666666666667,
        "distanceKm": 60.044602747982445,
        "gradePct": -0.17528119623664934,
        "smoothedEle": 8.404188675209872,
        "gradeBand": "descent"
      },
      {
        "lat": 23.628097,
        "lng": 119.602382,
        "ele": 6.75,
        "distanceKm": 60.096517933008435,
        "gradePct": -0.15328070532597912,
        "smoothedEle": 8.417904775883933,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627759,
        "lng": 119.60262033333333,
        "ele": 6.916666666666676,
        "distanceKm": 60.14126233329256,
        "gradePct": -0.12610680365646978,
        "smoothedEle": 8.461047163404558,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627421,
        "lng": 119.60285866666668,
        "ele": 7.083333333333324,
        "distanceKm": 60.18600676757878,
        "gradePct": -0.0948778651061815,
        "smoothedEle": 8.528309972279212,
        "gradeBand": "descent"
      },
      {
        "lat": 23.627083,
        "lng": 119.603097,
        "ele": 7.25,
        "distanceKm": 60.23075123586447,
        "gradePct": -0.059301384546421324,
        "smoothedEle": 8.614320871148278,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626769999999997,
        "lng": 119.6033555,
        "ele": 8.000000000000062,
        "distanceKm": 60.27439554872281,
        "gradePct": -0.02662154600212183,
        "smoothedEle": 8.690468820719383,
        "gradeBand": "descent"
      },
      {
        "lat": 23.626457,
        "lng": 119.603614,
        "ele": 8.75,
        "distanceKm": 60.31803989955234,
        "gradePct": 0.005922436133258202,
        "smoothedEle": 8.762945136319583,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.626117,
        "lng": 119.6039025,
        "ele": 8.875,
        "distanceKm": 60.36592662712477,
        "gradePct": 0.04781214637661222,
        "smoothedEle": 8.864037593684902,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.625777,
        "lng": 119.604191,
        "ele": 9,
        "distanceKm": 60.41381340152145,
        "gradePct": 0.09247270771980709,
        "smoothedEle": 8.989386572121704,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.625421,
        "lng": 119.604372,
        "ele": 9.25,
        "distanceKm": 60.45748283178545,
        "gradePct": 0.13593981915902056,
        "smoothedEle": 9.141438233855459,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.625056,
        "lng": 119.604533,
        "ele": 9.5,
        "distanceKm": 60.50125798039898,
        "gradePct": 0.18014530118913258,
        "smoothedEle": 9.32052647487335,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.624559,
        "lng": 119.60472,
        "ele": 9.75,
        "distanceKm": 60.55971340201303,
        "gradePct": 0.2359624837187731,
        "smoothedEle": 9.587993360263553,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.62411,
        "lng": 119.6048508,
        "ele": 10,
        "distanceKm": 60.611387676576655,
        "gradePct": 0.28418894020736335,
        "smoothedEle": 9.85318682942249,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.623661000000002,
        "lng": 119.6049816,
        "ele": 10.25,
        "distanceKm": 60.66306196291889,
        "gradePct": 0.33226998148368275,
        "smoothedEle": 10.155167723631193,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.623212,
        "lng": 119.6051124,
        "ele": 10.5,
        "distanceKm": 60.71473626103919,
        "gradePct": 0.38687537504372216,
        "smoothedEle": 10.517912658670852,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.622763,
        "lng": 119.6052432,
        "ele": 10.75,
        "distanceKm": 60.766410570937374,
        "gradePct": 0.4528822508462433,
        "smoothedEle": 10.940948370086666,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.622314,
        "lng": 119.605374,
        "ele": 11,
        "distanceKm": 60.8180848926129,
        "gradePct": 0.5208613368636762,
        "smoothedEle": 11.367346804348216,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6218522326065,
        "lng": 119.60544602283791,
        "ele": 11.338549376550844,
        "distanceKm": 60.86995278292939,
        "gradePct": 0.576828016446768,
        "smoothedEle": 11.758716588248804,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.62138811630325,
        "lng": 119.60549951141896,
        "ele": 11.544274688275408,
        "distanceKm": 60.921847136735806,
        "gradePct": 0.6161871760902154,
        "smoothedEle": 12.098294944585774,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.620924,
        "lng": 119.605553,
        "ele": 11.75,
        "distanceKm": 60.97374149256976,
        "gradePct": 0.633319477340741,
        "smoothedEle": 12.374551327607348,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.620546666666666,
        "lng": 119.60555466666666,
        "ele": 11.833333333333337,
        "distanceKm": 61.01569944642107,
        "gradePct": 0.6344927609244635,
        "smoothedEle": 12.5590682211261,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.620169333333333,
        "lng": 119.60555633333334,
        "ele": 11.916666666666663,
        "distanceKm": 61.05765740027436,
        "gradePct": 0.6288240966687845,
        "smoothedEle": 12.722706463312958,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.619792,
        "lng": 119.605558,
        "ele": 12,
        "distanceKm": 61.099615354129625,
        "gradePct": 0.6146544152545764,
        "smoothedEle": 12.866043098097697,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.619334208121856,
        "lng": 119.60558608827495,
        "ele": 13.002596321790264,
        "distanceKm": 61.1505999298889,
        "gradePct": 0.5890758403135902,
        "smoothedEle": 13.027719680849199,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.618877104060928,
        "lng": 119.60563704413747,
        "ele": 14.501298160895239,
        "distanceKm": 61.201692081457615,
        "gradePct": 0.5493109367008447,
        "smoothedEle": 13.172899381949495,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61842,
        "lng": 119.605688,
        "ele": 16,
        "distanceKm": 61.252784234866695,
        "gradePct": 0.4943674531591771,
        "smoothedEle": 13.301232587859097,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617962,
        "lng": 119.6058,
        "ele": 16.75,
        "distanceKm": 61.304974251122225,
        "gradePct": 0.42976411349705934,
        "smoothedEle": 13.407982942458862,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617531984303984,
        "lng": 119.60610062745847,
        "ele": 16.20124180508069,
        "distanceKm": 61.36175828928257,
        "gradePct": 0.3534032922677145,
        "smoothedEle": 13.46390140021507,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.617114004525288,
        "lng": 119.60642183318973,
        "ele": 15.045011313218025,
        "distanceKm": 61.4186007099105,
        "gradePct": 0.2770684398253046,
        "smoothedEle": 13.462393671071359,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.616696,
        "lng": 119.606743,
        "ele": 14,
        "distanceKm": 61.47544315786336,
        "gradePct": 0.20471015124969866,
        "smoothedEle": 13.405585432421809,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6163135,
        "lng": 119.607003,
        "ele": 13.624999999999973,
        "distanceKm": 61.525549723284094,
        "gradePct": 0.14272010933175175,
        "smoothedEle": 13.311085369236771,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615931,
        "lng": 119.607263,
        "ele": 13.25,
        "distanceKm": 61.57565632957992,
        "gradePct": 0.07879200254316884,
        "smoothedEle": 13.178154363767254,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.615591,
        "lng": 119.607419,
        "ele": 13.25,
        "distanceKm": 61.61666765124989,
        "gradePct": 0.023494910574805062,
        "smoothedEle": 13.037591987874809,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.61513933333333,
        "lng": 119.60753333333332,
        "ele": 13.166666666666663,
        "distanceKm": 61.66822394618741,
        "gradePct": -0.060810589047014224,
        "smoothedEle": 12.773745844437006,
        "gradeBand": "descent"
      },
      {
        "lat": 23.614687666666665,
        "lng": 119.60764766666667,
        "ele": 13.083333333333337,
        "distanceKm": 61.71978025019613,
        "gradePct": -0.16683572002102132,
        "smoothedEle": 12.384154621061565,
        "gradeBand": "descent"
      },
      {
        "lat": 23.614236,
        "lng": 119.607762,
        "ele": 13,
        "distanceKm": 61.77133656327526,
        "gradePct": -0.2933262589516712,
        "smoothedEle": 11.87254854390383,
        "gradeBand": "descent"
      },
      {
        "lat": 23.613840887463944,
        "lng": 119.60789415365915,
        "ele": 12.296982091344994,
        "distanceKm": 61.81728800953261,
        "gradePct": -0.4088001959930779,
        "smoothedEle": 11.376108017663183,
        "gradeBand": "descent"
      },
      {
        "lat": 23.613458,
        "lng": 119.608067,
        "ele": 11.75,
        "distanceKm": 61.86336156205745,
        "gradePct": -0.5135418831100004,
        "smoothedEle": 10.896149458307793,
        "gradeBand": "descent"
      },
      {
        "lat": 23.613058666666667,
        "lng": 119.60828833333333,
        "ele": 11.083333333333366,
        "distanceKm": 61.913163478773726,
        "gradePct": -0.6082195489921247,
        "smoothedEle": 10.421440147130099,
        "gradeBand": "descent"
      },
      {
        "lat": 23.612659333333333,
        "lng": 119.60850966666668,
        "ele": 10.416666666666634,
        "distanceKm": 61.96296542660216,
        "gradePct": -0.6830259350004877,
        "smoothedEle": 10.002925979248646,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61226,
        "lng": 119.608731,
        "ele": 9.75,
        "distanceKm": 62.01276740554102,
        "gradePct": -0.7404540713920476,
        "smoothedEle": 9.632922229050005,
        "gradeBand": "descent"
      },
      {
        "lat": 23.611902,
        "lng": 119.6089335,
        "ele": 9.125000000000052,
        "distanceKm": 62.05760418641714,
        "gradePct": -0.7806688744710183,
        "smoothedEle": 9.322701671150776,
        "gradeBand": "descent"
      },
      {
        "lat": 23.611544,
        "lng": 119.609136,
        "ele": 8.5,
        "distanceKm": 62.10244099322466,
        "gradePct": -0.8105638478380485,
        "smoothedEle": 9.033533256066603,
        "gradeBand": "descent"
      },
      {
        "lat": 23.61113,
        "lng": 119.6093565,
        "ele": 7.5,
        "distanceKm": 62.153665172793595,
        "gradePct": -0.8272019252838168,
        "smoothedEle": 8.712242662241627,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610716,
        "lng": 119.609577,
        "ele": 6.5,
        "distanceKm": 62.20488938348351,
        "gradePct": -0.8177775098905918,
        "smoothedEle": 8.407791642390654,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610375,
        "lng": 119.609813,
        "ele": 5.75,
        "distanceKm": 62.24978832095893,
        "gradePct": -0.7879402809258763,
        "smoothedEle": 8.14667569028398,
        "gradeBand": "descent"
      },
      {
        "lat": 23.610019810236018,
        "lng": 119.6100916963975,
        "ele": 5.828011442969357,
        "distanceKm": 62.298431833567186,
        "gradePct": -0.7391146148820725,
        "smoothedEle": 7.884249313127847,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60965455163087,
        "lng": 119.61035502548359,
        "ele": 5.99543837968801,
        "distanceKm": 62.347108512896995,
        "gradePct": -0.6805738136024617,
        "smoothedEle": 7.6625920589795635,
        "gradeBand": "descent"
      },
      {
        "lat": 23.609289293025725,
        "lng": 119.61061835456965,
        "ele": 6.162865316406663,
        "distanceKm": 62.39578523343265,
        "gradePct": -0.6223247498295233,
        "smoothedEle": 7.475464939630758,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608924034420582,
        "lng": 119.61088168365572,
        "ele": 6.330292253125339,
        "distanceKm": 62.44446199517409,
        "gradePct": -0.5659961032865224,
        "smoothedEle": 7.3284403489548025,
        "gradeBand": "descent"
      },
      {
        "lat": 23.608558775815435,
        "lng": 119.61114501274179,
        "ele": 6.497719189844017,
        "distanceKm": 62.49313879812145,
        "gradePct": -0.5114469156992266,
        "smoothedEle": 7.221518368753521,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60819351721029,
        "lng": 119.61140834182787,
        "ele": 6.66514612656267,
        "distanceKm": 62.54181564227469,
        "gradePct": -0.4551725776718165,
        "smoothedEle": 7.156077913625346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607828258605146,
        "lng": 119.61167167091394,
        "ele": 6.832573063281322,
        "distanceKm": 62.590492527631355,
        "gradePct": -0.39574619085137386,
        "smoothedEle": 7.131862179716212,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607463,
        "lng": 119.611935,
        "ele": 7,
        "distanceKm": 62.639169454192384,
        "gradePct": -0.3304239032626553,
        "smoothedEle": 7.151043841515778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.607088,
        "lng": 119.612153,
        "ele": 7.25,
        "distanceKm": 62.686414601074354,
        "gradePct": -0.25911242636980014,
        "smoothedEle": 7.222034352241244,
        "gradeBand": "descent"
      },
      {
        "lat": 23.606749,
        "lng": 119.612286,
        "ele": 7.25,
        "distanceKm": 62.726471577527285,
        "gradePct": -0.19172764059075417,
        "smoothedEle": 7.323639218763476,
        "gradeBand": "descent"
      },
      {
        "lat": 23.60636535985551,
        "lng": 119.61236855474175,
        "ele": 7.530364505834325,
        "distanceKm": 62.769951857484685,
        "gradePct": -0.11287676858649255,
        "smoothedEle": 7.473511795143455,
        "gradeBand": "descent"
      },
      {
        "lat": 23.605979679927756,
        "lng": 119.61243927737088,
        "ele": 7.640182252917153,
        "distanceKm": 62.813438749871416,
        "gradePct": -0.03739153283819263,
        "smoothedEle": 7.628955190759635,
        "gradeBand": "descent"
      },
      {
        "lat": 23.605594,
        "lng": 119.61251,
        "ele": 7.75,
        "distanceKm": 62.85692564577086,
        "gradePct": 0.03161356257002641,
        "smoothedEle": 7.782920028743822,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.605175833333334,
        "lng": 119.61257333333333,
        "ele": 7.916666666666671,
        "distanceKm": 62.90386937170525,
        "gradePct": 0.09941452234839511,
        "smoothedEle": 7.948120004313823,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.604757666666668,
        "lng": 119.61263666666666,
        "ele": 8.083333333333343,
        "distanceKm": 62.95081310046884,
        "gradePct": 0.16405772367408478,
        "smoothedEle": 8.134778323210075,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.6043395,
        "lng": 119.6127,
        "ele": 8.250000000000012,
        "distanceKm": 62.99775683206219,
        "gradePct": 0.22972490964783104,
        "smoothedEle": 8.363934498017777,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603921333333332,
        "lng": 119.61276333333333,
        "ele": 8.416666666666657,
        "distanceKm": 63.04470056648407,
        "gradePct": 0.2934195208411442,
        "smoothedEle": 8.621740328284933,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603503166666666,
        "lng": 119.61282666666666,
        "ele": 8.583333333333329,
        "distanceKm": 63.09164430373503,
        "gradePct": 0.3507655291403717,
        "smoothedEle": 8.886143695069471,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.603085,
        "lng": 119.61289,
        "ele": 8.75,
        "distanceKm": 63.13858804381504,
        "gradePct": 0.40135807179467126,
        "smoothedEle": 9.157605089532202,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.602689,
        "lng": 119.61295224999999,
        "ele": 8.937499999999993,
        "distanceKm": 63.18307578033679,
        "gradePct": 0.44084140620840057,
        "smoothedEle": 9.421224474563028,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.602293,
        "lng": 119.6130145,
        "ele": 9.125000000000016,
        "distanceKm": 63.22756351959017,
        "gradePct": 0.4727675261624027,
        "smoothedEle": 9.69124067470225,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.601896999999997,
        "lng": 119.61307675,
        "ele": 9.312500000000007,
        "distanceKm": 63.27205126157433,
        "gradePct": 0.49720096717469014,
        "smoothedEle": 9.967020926738092,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.601501,
        "lng": 119.613139,
        "ele": 9.5,
        "distanceKm": 63.31653900628906,
        "gradePct": 0.5193878176142324,
        "smoothedEle": 10.236870699823367,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.601074940671484,
        "lng": 119.6131667061702,
        "ele": 9.5,
        "distanceKm": 63.36399874629449,
        "gradePct": 0.5426801825162709,
        "smoothedEle": 10.521211936031085,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60064889026838,
        "lng": 119.6131945723738,
        "ele": 9.878618690061712,
        "distanceKm": 63.411458468931095,
        "gradePct": 0.5705226724061655,
        "smoothedEle": 10.83090924217357,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.60022292819265,
        "lng": 119.61322398879943,
        "ele": 10.990007673255475,
        "distanceKm": 63.45891810241383,
        "gradePct": 0.5981694660380733,
        "smoothedEle": 11.165190280657008,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.599797,
        "lng": 119.613254,
        "ele": 12,
        "distanceKm": 63.50637784282417,
        "gradePct": 0.6225554139094378,
        "smoothedEle": 11.524056476626987,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5993168,
        "lng": 119.6132418,
        "ele": 12.34999999999998,
        "distanceKm": 63.55978818913552,
        "gradePct": 0.6502453038650138,
        "smoothedEle": 11.957945557432176,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5988366,
        "lng": 119.6132296,
        "ele": 12.70000000000001,
        "distanceKm": 63.6131985355532,
        "gradePct": 0.6823452139230668,
        "smoothedEle": 12.422511342368246,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5983564,
        "lng": 119.6132174,
        "ele": 13.04999999999999,
        "distanceKm": 63.66660888207643,
        "gradePct": 0.7186046968205411,
        "smoothedEle": 12.916670650127251,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.597876199999998,
        "lng": 119.6132052,
        "ele": 13.40000000000002,
        "distanceKm": 63.720019228705986,
        "gradePct": 0.7586039340804639,
        "smoothedEle": 13.438470633343984,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.597396,
        "lng": 119.613193,
        "ele": 13.75,
        "distanceKm": 63.773429575441085,
        "gradePct": 0.8022690147923062,
        "smoothedEle": 13.986726453371888,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.596917,
        "lng": 119.613191,
        "ele": 13.5,
        "distanceKm": 63.82669240875384,
        "gradePct": 0.8524271459560109,
        "smoothedEle": 14.55983758898651,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.596495285714287,
        "lng": 119.61317985714285,
        "ele": 14.178571428571459,
        "distanceKm": 63.873598706913846,
        "gradePct": 0.9019397886182332,
        "smoothedEle": 15.093555196824079,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.596073571428573,
        "lng": 119.61316871428572,
        "ele": 14.857142857142811,
        "distanceKm": 63.92050500516218,
        "gradePct": 0.9498544589358251,
        "smoothedEle": 15.643900645157737,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.595651857142858,
        "lng": 119.61315757142857,
        "ele": 15.53571428571427,
        "distanceKm": 63.96741130349891,
        "gradePct": 0.9897876998172919,
        "smoothedEle": 16.17835000680157,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.595230142857144,
        "lng": 119.61314642857143,
        "ele": 16.21428571428573,
        "distanceKm": 64.014317601924,
        "gradePct": 1.019318164375535,
        "smoothedEle": 16.685147437813995,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.59480842857143,
        "lng": 119.61313528571428,
        "ele": 16.89285714285719,
        "distanceKm": 64.06122390043747,
        "gradePct": 1.0429115708720311,
        "smoothedEle": 17.184991298366153,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.594386714285715,
        "lng": 119.61312414285715,
        "ele": 17.57142857142854,
        "distanceKm": 64.10813019903925,
        "gradePct": 1.0604427145850763,
        "smoothedEle": 17.680640278348754,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.593965,
        "lng": 119.613113,
        "ele": 18.25,
        "distanceKm": 64.15503649772943,
        "gradePct": 1.059924008992094,
        "smoothedEle": 18.10922152571714,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5934946,
        "lng": 119.6130974,
        "ele": 18.94999999999996,
        "distanceKm": 64.20736681327324,
        "gradePct": 1.0404798019062909,
        "smoothedEle": 18.517260069504776,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5930242,
        "lng": 119.6130818,
        "ele": 19.65000000000002,
        "distanceKm": 64.2596971289902,
        "gradePct": 1.0011712761384857,
        "smoothedEle": 18.85161962842811,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5925538,
        "lng": 119.61306619999999,
        "ele": 20.34999999999998,
        "distanceKm": 64.31202744487996,
        "gradePct": 0.9434825140270227,
        "smoothedEle": 19.119454308304658,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5920834,
        "lng": 119.6130506,
        "ele": 21.05000000000004,
        "distanceKm": 64.36435776094322,
        "gradePct": 0.8687172909704901,
        "smoothedEle": 19.33199467203695,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.591613,
        "lng": 119.613035,
        "ele": 21.75,
        "distanceKm": 64.41668807717961,
        "gradePct": 0.7700972454715327,
        "smoothedEle": 19.449603356862568,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.591203,
        "lng": 119.612895,
        "ele": 22.25,
        "distanceKm": 64.46445806874547,
        "gradePct": 0.6660045059465872,
        "smoothedEle": 19.474723442815147,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.590778,
        "lng": 119.612578,
        "ele": 22.75,
        "distanceKm": 64.5217013220672,
        "gradePct": 0.5272148036031303,
        "smoothedEle": 19.399904005904503,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.590353,
        "lng": 119.612261,
        "ele": 23.25,
        "distanceKm": 64.57894463443732,
        "gradePct": 0.368616297773503,
        "smoothedEle": 19.215324051848174,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.59003443325152,
        "lng": 119.61201035581954,
        "ele": 22.1538532218696,
        "distanceKm": 64.6226155755015,
        "gradePct": 0.24131652990969457,
        "smoothedEle": 19.019575317366208,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.589717,
        "lng": 119.611758,
        "ele": 21.25,
        "distanceKm": 64.66628685978652,
        "gradePct": 0.11988833001756731,
        "smoothedEle": 18.79638634932604,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.589338666666666,
        "lng": 119.61147249999999,
        "ele": 20.208333333333357,
        "distanceKm": 64.71743573620714,
        "gradePct": -0.01751295879508703,
        "smoothedEle": 18.494029697840496,
        "gradeBand": "descent"
      },
      {
        "lat": 23.588960333333333,
        "lng": 119.611187,
        "ele": 19.166666666666718,
        "distanceKm": 64.76858466034199,
        "gradePct": -0.14958613386485098,
        "smoothedEle": 18.149176724159844,
        "gradeBand": "descent"
      },
      {
        "lat": 23.588582000000002,
        "lng": 119.6109015,
        "ele": 18.125000000000075,
        "distanceKm": 64.81973363219177,
        "gradePct": -0.2777851580690722,
        "smoothedEle": 17.761827313331782,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58820366666667,
        "lng": 119.610616,
        "ele": 17.083333333333282,
        "distanceKm": 64.8708826517557,
        "gradePct": -0.4049072319937053,
        "smoothedEle": 17.322122742714747,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587825333333335,
        "lng": 119.6103305,
        "ele": 16.041666666666643,
        "distanceKm": 64.92203171903196,
        "gradePct": -0.5176706799689377,
        "smoothedEle": 16.864059937472778,
        "gradeBand": "descent"
      },
      {
        "lat": 23.587447,
        "lng": 119.610045,
        "ele": 15,
        "distanceKm": 64.97318083402162,
        "gradePct": -0.6109917850379005,
        "smoothedEle": 16.4083634817237,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5870635,
        "lng": 119.609778,
        "ele": 14,
        "distanceKm": 65.0237650304047,
        "gradePct": -0.6841980044107459,
        "smoothedEle": 15.972259596214034,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58668,
        "lng": 119.609511,
        "ele": 13,
        "distanceKm": 65.0743492695589,
        "gradePct": -0.7384492539276919,
        "smoothedEle": 15.537895447418318,
        "gradeBand": "descent"
      },
      {
        "lat": 23.586199,
        "lng": 119.609171,
        "ele": 13,
        "distanceKm": 65.13807605940032,
        "gradePct": -0.781863872637645,
        "smoothedEle": 15.031242719205121,
        "gradeBand": "descent"
      },
      {
        "lat": 23.585764,
        "lng": 119.60887166666667,
        "ele": 12.833333333333327,
        "distanceKm": 65.19526108761481,
        "gradePct": -0.7835560401353551,
        "smoothedEle": 14.707330626710148,
        "gradeBand": "descent"
      },
      {
        "lat": 23.585328999999998,
        "lng": 119.60857233333333,
        "ele": 12.666666666666673,
        "distanceKm": 65.25244616976552,
        "gradePct": -0.7472496934473387,
        "smoothedEle": 14.52173614604588,
        "gradeBand": "descent"
      },
      {
        "lat": 23.584894,
        "lng": 119.608273,
        "ele": 12.5,
        "distanceKm": 65.30963130584944,
        "gradePct": -0.6820167499418577,
        "smoothedEle": 14.428248134783535,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58450623665106,
        "lng": 119.60799915069718,
        "ele": 12.069825869000114,
        "distanceKm": 65.36099195658292,
        "gradePct": -0.6029719410617559,
        "smoothedEle": 14.392288789827521,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58411488341447,
        "lng": 119.6077313595499,
        "ele": 12.729409975616935,
        "distanceKm": 65.4123575716624,
        "gradePct": -0.5101995244618379,
        "smoothedEle": 14.399698637552273,
        "gradeBand": "descent"
      },
      {
        "lat": 23.58372410147717,
        "lng": 119.60746258660255,
        "ele": 13.355539333543888,
        "distanceKm": 65.46372270505613,
        "gradePct": -0.40918345597159983,
        "smoothedEle": 14.446710335242468,
        "gradeBand": "descent"
      },
      {
        "lat": 23.583334096114694,
        "lng": 119.60719247164661,
        "ele": 14.204148358039244,
        "distanceKm": 65.5150880133435,
        "gradePct": -0.30617689877914883,
        "smoothedEle": 14.516182673172366,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582942,
        "lng": 119.606926,
        "ele": 14.5,
        "distanceKm": 65.56645254061031,
        "gradePct": -0.20477417249151736,
        "smoothedEle": 14.5818333729424,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582469,
        "lng": 119.606592,
        "ele": 14.75,
        "distanceKm": 65.62910083729012,
        "gradePct": -0.09491547659945496,
        "smoothedEle": 14.628021837606472,
        "gradeBand": "descent"
      },
      {
        "lat": 23.582171000000002,
        "lng": 119.606418,
        "ele": 15.625,
        "distanceKm": 65.66668316818088,
        "gradePct": -0.05387329654737023,
        "smoothedEle": 14.599837521883964,
        "gradeBand": "descent"
      },
      {
        "lat": 23.581873,
        "lng": 119.606244,
        "ele": 16.5,
        "distanceKm": 65.70426551806682,
        "gradePct": -0.02886663848701332,
        "smoothedEle": 14.533773508548895,
        "gradeBand": "descent"
      },
      {
        "lat": 23.581468,
        "lng": 119.605989,
        "ele": 17.25,
        "distanceKm": 65.7562595449979,
        "gradePct": -0.029411704106002287,
        "smoothedEle": 14.368443402934856,
        "gradeBand": "descent"
      },
      {
        "lat": 23.581164,
        "lng": 119.605792,
        "ele": 17.25,
        "distanceKm": 65.79557514438926,
        "gradePct": -0.05109668389113189,
        "smoothedEle": 14.195744158429417,
        "gradeBand": "descent"
      },
      {
        "lat": 23.580807576428,
        "lng": 119.6055683277875,
        "ele": 17.0771466673126,
        "distanceKm": 65.84129519492275,
        "gradePct": -0.08136399391184952,
        "smoothedEle": 13.999259195525196,
        "gradeBand": "descent"
      },
      {
        "lat": 23.580451152855996,
        "lng": 119.605344655575,
        "ele": 16.904293334625205,
        "distanceKm": 65.88701527631466,
        "gradePct": -0.11433019709670553,
        "smoothedEle": 13.824391849461653,
        "gradeBand": "descent"
      },
      {
        "lat": 23.580094796604197,
        "lng": 119.60512085622955,
        "ele": 16.701518533245405,
        "distanceKm": 65.93273536154888,
        "gradePct": -0.15975129413948216,
        "smoothedEle": 13.61959284357742,
        "gradeBand": "descent"
      },
      {
        "lat": 23.579739,
        "lng": 119.604896,
        "ele": 16.25,
        "distanceKm": 65.97845544295468,
        "gradePct": -0.2135065396731058,
        "smoothedEle": 13.399103882431522,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57935,
        "lng": 119.604639,
        "ele": 15.25,
        "distanceKm": 66.02902182661302,
        "gradePct": -0.28060073648686695,
        "smoothedEle": 13.130988257955796,
        "gradeBand": "descent"
      },
      {
        "lat": 23.579057,
        "lng": 119.60443950000001,
        "ele": 14.375,
        "distanceKm": 66.06742531188303,
        "gradePct": -0.3267016872399239,
        "smoothedEle": 12.949042128014327,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578764,
        "lng": 119.60424,
        "ele": 13.5,
        "distanceKm": 66.10582882117735,
        "gradePct": -0.36508178360885635,
        "smoothedEle": 12.785455251263878,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578436,
        "lng": 119.604034,
        "ele": 12.250000000000217,
        "distanceKm": 66.14791142323374,
        "gradePct": -0.3971841824553095,
        "smoothedEle": 12.62799420335195,
        "gradeBand": "descent"
      },
      {
        "lat": 23.578108,
        "lng": 119.603828,
        "ele": 11,
        "distanceKm": 66.18999405145733,
        "gradePct": -0.41747412583074495,
        "smoothedEle": 12.471489931249607,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5778095,
        "lng": 119.60363,
        "ele": 9.625,
        "distanceKm": 66.22883819032735,
        "gradePct": -0.4227510221690381,
        "smoothedEle": 12.341882451329752,
        "gradeBand": "descent"
      },
      {
        "lat": 23.577511,
        "lng": 119.603432,
        "ele": 8.25,
        "distanceKm": 66.26768235303109,
        "gradePct": -0.4206043853093377,
        "smoothedEle": 12.215245201626962,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57721329733021,
        "lng": 119.6032523874677,
        "ele": 8.085390372104573,
        "distanceKm": 66.30550930668302,
        "gradePct": -0.4026920279727868,
        "smoothedEle": 12.139591294323102,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576917,
        "lng": 119.60307,
        "ele": 8.25,
        "distanceKm": 66.34333775858865,
        "gradePct": -0.37865520483582993,
        "smoothedEle": 12.098170899876989,
        "gradeBand": "descent"
      },
      {
        "lat": 23.576357,
        "lng": 119.602674,
        "ele": 8.25,
        "distanceKm": 66.4175415051982,
        "gradePct": -0.3157524208409569,
        "smoothedEle": 12.108890251077952,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5760095,
        "lng": 119.60244949999999,
        "ele": 8.50000000000004,
        "distanceKm": 66.46244749026296,
        "gradePct": -0.2593722253663994,
        "smoothedEle": 12.179442461954872,
        "gradeBand": "descent"
      },
      {
        "lat": 23.575662,
        "lng": 119.602225,
        "ele": 8.75,
        "distanceKm": 66.50735350618022,
        "gradePct": -0.20073623731998716,
        "smoothedEle": 12.242197930536795,
        "gradeBand": "descent"
      },
      {
        "lat": 23.575241333333334,
        "lng": 119.601945,
        "ele": 9.83333333333343,
        "distanceKm": 66.56214675691427,
        "gradePct": -0.12686594621345718,
        "smoothedEle": 12.339720873169853,
        "gradeBand": "descent"
      },
      {
        "lat": 23.574820666666668,
        "lng": 119.601665,
        "ele": 10.916666666666572,
        "distanceKm": 66.61694005526223,
        "gradePct": -0.056909588734554005,
        "smoothedEle": 12.459332250985632,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5744,
        "lng": 119.601385,
        "ele": 12,
        "distanceKm": 66.67173340122339,
        "gradePct": 0.011731392784545491,
        "smoothedEle": 12.598057809808981,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573966000000002,
        "lng": 119.601059,
        "ele": 13.624999999999797,
        "distanceKm": 66.73032310866796,
        "gradePct": 0.08656243525782549,
        "smoothedEle": 12.76985359201407,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573532,
        "lng": 119.600733,
        "ele": 15.25,
        "distanceKm": 66.7889128783856,
        "gradePct": 0.1517304745204889,
        "smoothedEle": 12.931436523520384,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.573155,
        "lng": 119.60048433333334,
        "ele": 16.2500000000001,
        "distanceKm": 66.83789861104053,
        "gradePct": 0.17923048553509205,
        "smoothedEle": 13.000278941000646,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572778,
        "lng": 119.60023566666666,
        "ele": 17.2499999999999,
        "distanceKm": 66.88688438133921,
        "gradePct": 0.17752884661663088,
        "smoothedEle": 12.992105806466636,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572401,
        "lng": 119.599987,
        "ele": 18.25,
        "distanceKm": 66.93587018927965,
        "gradePct": 0.1500940015119685,
        "smoothedEle": 12.888156624702281,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572032,
        "lng": 119.59976366666666,
        "ele": 17.583333333333265,
        "distanceKm": 66.98279163283418,
        "gradePct": 0.0993004201826075,
        "smoothedEle": 12.70437519012076,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571663,
        "lng": 119.59954033333334,
        "ele": 16.916666666666735,
        "distanceKm": 67.02971310741385,
        "gradePct": 0.04788259932661916,
        "smoothedEle": 12.521407326894181,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571294,
        "lng": 119.599317,
        "ele": 16.25,
        "distanceKm": 67.07663461301969,
        "gradePct": -0.010272326504630058,
        "smoothedEle": 12.319985597931513,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570788,
        "lng": 119.599078,
        "ele": 15.25,
        "distanceKm": 67.1379456540504,
        "gradePct": -0.08877819334368268,
        "smoothedEle": 12.068623169388323,
        "gradeBand": "descent"
      },
      {
        "lat": 23.5704595,
        "lng": 119.59898050000001,
        "ele": 14.125,
        "distanceKm": 67.17580074799052,
        "gradePct": -0.1286810594124102,
        "smoothedEle": 11.96657872043485,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570131,
        "lng": 119.598883,
        "ele": 13,
        "distanceKm": 67.21365584845533,
        "gradePct": -0.1625836919123717,
        "smoothedEle": 11.90806366457275,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569748292970715,
        "lng": 119.59878122508704,
        "ele": 11.571279131684673,
        "distanceKm": 67.25745691503401,
        "gradePct": -0.19936957751023207,
        "smoothedEle": 11.84783719802707,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56936714492596,
        "lng": 119.59867211782232,
        "ele": 9.874055013800444,
        "distanceKm": 67.30127325662704,
        "gradePct": -0.2457814671093189,
        "smoothedEle": 11.719899925798725,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568988,
        "lng": 119.598556,
        "ele": 8.75,
        "distanceKm": 67.3450618793073,
        "gradePct": -0.28844116943608106,
        "smoothedEle": 11.556877923163732,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568932500000003,
        "lng": 119.5980405,
        "ele": 6.625,
        "distanceKm": 67.3979623942574,
        "gradePct": -0.33177860087482536,
        "smoothedEle": 11.309704965295758,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568877,
        "lng": 119.597525,
        "ele": 4.5,
        "distanceKm": 67.45086293125613,
        "gradePct": -0.35412274526938814,
        "smoothedEle": 11.05881947852823,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568832,
        "lng": 119.597127,
        "ele": 4.75,
        "distanceKm": 67.49173423422148,
        "gradePct": -0.3492152576976739,
        "smoothedEle": 10.92342769005647,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568817,
        "lng": 119.596711,
        "ele": 5,
        "distanceKm": 67.53416543064405,
        "gradePct": -0.33712855062452823,
        "smoothedEle": 10.81665191676389,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568846999999998,
        "lng": 119.5962695,
        "ele": 6,
        "distanceKm": 67.57928625141989,
        "gradePct": -0.3177234484497593,
        "smoothedEle": 10.720497193544764,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568877,
        "lng": 119.595828,
        "ele": 7,
        "distanceKm": 67.62440706194722,
        "gradePct": -0.29535121217475646,
        "smoothedEle": 10.64737250090227,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568925,
        "lng": 119.595307,
        "ele": 10.25,
        "distanceKm": 67.67777452201001,
        "gradePct": -0.27615476320694543,
        "smoothedEle": 10.582753915349995,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568922462692104,
        "lng": 119.59488008782903,
        "ele": 12.25,
        "distanceKm": 67.72128596549614,
        "gradePct": -0.2707638944733187,
        "smoothedEle": 10.543752781275051,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568895,
        "lng": 119.594454,
        "ele": 12.25,
        "distanceKm": 67.7648197179654,
        "gradePct": -0.26194275383708426,
        "smoothedEle": 10.516625127323346,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568836,
        "lng": 119.59394,
        "ele": 12.25,
        "distanceKm": 67.81761538580398,
        "gradePct": -0.2234856116307192,
        "smoothedEle": 10.541631255114401,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568833,
        "lng": 119.593456,
        "ele": 12.25,
        "distanceKm": 67.8669454194339,
        "gradePct": -0.1656290468916893,
        "smoothedEle": 10.626483790999513,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568908887046778,
        "lng": 119.59285179067255,
        "ele": 13.25498345098259,
        "distanceKm": 67.92910140105863,
        "gradePct": -0.06069909279528397,
        "smoothedEle": 10.858530000845233,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568995,
        "lng": 119.592249,
        "ele": 14.75,
        "distanceKm": 67.99127902891671,
        "gradePct": 0.06946790616383325,
        "smoothedEle": 11.272275150788895,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56906138637115,
        "lng": 119.59173174197822,
        "ele": 14.432682765483861,
        "distanceKm": 68.0445117964258,
        "gradePct": 0.1627128324432608,
        "smoothedEle": 11.608167456615591,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569095,
        "lng": 119.59121,
        "ele": 14.25,
        "distanceKm": 68.09781843416745,
        "gradePct": 0.24034323688402423,
        "smoothedEle": 11.892179339312387,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569116,
        "lng": 119.590551,
        "ele": 13.5,
        "distanceKm": 68.1650236455786,
        "gradePct": 0.31651321235533664,
        "smoothedEle": 12.180759040529363,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569107,
        "lng": 119.589856,
        "ele": 11.5,
        "distanceKm": 68.2358644278352,
        "gradePct": 0.3574642753209542,
        "smoothedEle": 12.321989724329987,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569083117606926,
        "lng": 119.58940029333506,
        "ele": 10.861490758077062,
        "distanceKm": 68.28238546462731,
        "gradePct": 0.38092178994241765,
        "smoothedEle": 12.429553913184039,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569059745071286,
        "lng": 119.58894452889004,
        "ele": 10.65766050538473,
        "distanceKm": 68.32890918759425,
        "gradePct": 0.3982202719370431,
        "smoothedEle": 12.552159070675923,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569036372535642,
        "lng": 119.58848876444502,
        "ele": 10.453830252692397,
        "distanceKm": 68.3754329188146,
        "gradePct": 0.40484098397053425,
        "smoothedEle": 12.682374994470848,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569013,
        "lng": 119.588033,
        "ele": 10.25,
        "distanceKm": 68.42195665828831,
        "gradePct": 0.3928585123564233,
        "smoothedEle": 12.796149176786779,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569002,
        "lng": 119.587657,
        "ele": 11.5,
        "distanceKm": 68.4602977522226,
        "gradePct": 0.3620363899825854,
        "smoothedEle": 12.876300104804397,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5690805,
        "lng": 119.587172,
        "ele": 11.25,
        "distanceKm": 68.51049327943186,
        "gradePct": 0.30408640187360125,
        "smoothedEle": 12.913946750211338,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569159,
        "lng": 119.586687,
        "ele": 11,
        "distanceKm": 68.56068877754684,
        "gradePct": 0.28257607223225917,
        "smoothedEle": 13.1072369878162,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569225,
        "lng": 119.58617,
        "ele": 11.5,
        "distanceKm": 68.61388949325874,
        "gradePct": 0.2847037743078591,
        "smoothedEle": 13.384707463756659,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569305115476563,
        "lng": 119.58566574376515,
        "ele": 12.594013860644905,
        "distanceKm": 68.66604910634226,
        "gradePct": 0.3170341784385638,
        "smoothedEle": 13.76797432749379,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569385230953127,
        "lng": 119.58516148753031,
        "ele": 13.68802772128981,
        "distanceKm": 68.71820868853504,
        "gradePct": 0.3954740842057056,
        "smoothedEle": 14.264161040338271,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569465376898066,
        "lng": 119.5846572370643,
        "ele": 14.755451601068986,
        "distanceKm": 68.77036823926579,
        "gradePct": 0.4869134275595183,
        "smoothedEle": 14.836335275181657,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56954653267355,
        "lng": 119.58415317779823,
        "ele": 14.94158870080174,
        "distanceKm": 68.82252786835377,
        "gradePct": 0.5730530496877005,
        "smoothedEle": 15.400607465247411,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56962768844903,
        "lng": 119.58364911853215,
        "ele": 15.127725800534494,
        "distanceKm": 68.87468746617556,
        "gradePct": 0.6502641647776816,
        "smoothedEle": 15.93160936051309,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569708844224518,
        "lng": 119.58314505926607,
        "ele": 15.313862900267246,
        "distanceKm": 68.92684703273112,
        "gradePct": 0.7288872626320266,
        "smoothedEle": 16.450808673735473,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.56979,
        "lng": 119.582641,
        "ele": 15.5,
        "distanceKm": 68.97900656802021,
        "gradePct": 0.801276247305701,
        "smoothedEle": 16.896712953181108,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569965,
        "lng": 119.581995,
        "ele": 18.5,
        "distanceKm": 69.04766129252637,
        "gradePct": 0.8832869067279191,
        "smoothedEle": 17.47350595343548,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57016734129979,
        "lng": 119.58165067242332,
        "ele": 19.585521994574535,
        "distanceKm": 69.08934772622035,
        "gradePct": 0.916104812745012,
        "smoothedEle": 17.837232952849043,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570369682599576,
        "lng": 119.58130634484665,
        "ele": 20.67104398914907,
        "distanceKm": 69.13103411439637,
        "gradePct": 0.9340920328014032,
        "smoothedEle": 18.18114565530119,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570572,
        "lng": 119.580962,
        "ele": 22.25,
        "distanceKm": 69.17272050459056,
        "gradePct": 0.9301466947611214,
        "smoothedEle": 18.482171867301034,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570855,
        "lng": 119.580497,
        "ele": 22.5,
        "distanceKm": 69.22960835246899,
        "gradePct": 0.8842874117895104,
        "smoothedEle": 18.810648907766627,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571126000000003,
        "lng": 119.579971,
        "ele": 21.624999999999897,
        "distanceKm": 69.29110579530361,
        "gradePct": 0.7929085860817555,
        "smoothedEle": 19.025220793271252,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571397,
        "lng": 119.579445,
        "ele": 20.75,
        "distanceKm": 69.35260314170341,
        "gradePct": 0.6939350597174269,
        "smoothedEle": 19.176458957981144,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571604,
        "lng": 119.578964,
        "ele": 20.25,
        "distanceKm": 69.40676005566026,
        "gradePct": 0.6055369136611581,
        "smoothedEle": 19.278546321684942,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571734,
        "lng": 119.578578,
        "ele": 19.75,
        "distanceKm": 69.44867175897826,
        "gradePct": 0.540224261072396,
        "smoothedEle": 19.338506388902374,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.571865,
        "lng": 119.578222,
        "ele": 19.5,
        "distanceKm": 69.48776905995123,
        "gradePct": 0.4816131831399645,
        "smoothedEle": 19.3783957109403,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572033,
        "lng": 119.577788,
        "ele": 19.75,
        "distanceKm": 69.53578397293312,
        "gradePct": 0.3912671318038477,
        "smoothedEle": 19.330055984408716,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5721985,
        "lng": 119.57732999999999,
        "ele": 19.75,
        "distanceKm": 69.58595850064148,
        "gradePct": 0.28673990791841675,
        "smoothedEle": 19.241360453269145,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572364,
        "lng": 119.576872,
        "ele": 19.75,
        "distanceKm": 69.6361329736206,
        "gradePct": 0.19240095808497487,
        "smoothedEle": 19.17997038313589,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57237,
        "lng": 119.576431,
        "ele": 19.25,
        "distanceKm": 69.68108309512432,
        "gradePct": 0.10995885481078105,
        "smoothedEle": 19.080252710307708,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572343,
        "lng": 119.5762,
        "ele": 19,
        "distanceKm": 69.70481646406672,
        "gradePct": 0.07006338852552219,
        "smoothedEle": 19.017814607490276,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.572024,
        "lng": 119.575572,
        "ele": 17.75,
        "distanceKm": 69.77799210491305,
        "gradePct": -0.027797000126293627,
        "smoothedEle": 18.840480568628404,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571828,
        "lng": 119.574999,
        "ele": 17.25,
        "distanceKm": 69.84032472141256,
        "gradePct": -0.06627323786030885,
        "smoothedEle": 18.814896900743232,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571753333333334,
        "lng": 119.57458533333333,
        "ele": 17,
        "distanceKm": 69.88329410189502,
        "gradePct": -0.0756897004268808,
        "smoothedEle": 18.855863811708115,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571678666666667,
        "lng": 119.57417166666667,
        "ele": 16.75,
        "distanceKm": 69.92626350589546,
        "gradePct": -0.07913637086674755,
        "smoothedEle": 18.91076665443727,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571604,
        "lng": 119.573758,
        "ele": 16.5,
        "distanceKm": 69.96923293341666,
        "gradePct": -0.07782903288732328,
        "smoothedEle": 18.970338920834575,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571381,
        "lng": 119.573268,
        "ele": 15.75,
        "distanceKm": 70.02498964835893,
        "gradePct": -0.06190550055695141,
        "smoothedEle": 19.031395828154537,
        "gradeBand": "descent"
      },
      {
        "lat": 23.571159,
        "lng": 119.5728,
        "ele": 17.75,
        "distanceKm": 70.07869624145094,
        "gradePct": -0.04089430180909801,
        "smoothedEle": 19.049726731953758,
        "gradeBand": "descent"
      },
      {
        "lat": 23.570992,
        "lng": 119.572493,
        "ele": 19.25,
        "distanceKm": 70.11508044173563,
        "gradePct": -0.025894569877961966,
        "smoothedEle": 19.076255978870936,
        "gradeBand": "descent"
      },
      {
        "lat": 23.57072061050578,
        "lng": 119.5721040450867,
        "ele": 19.5,
        "distanceKm": 70.16490112515581,
        "gradePct": 0.004774560084084812,
        "smoothedEle": 19.140023709288112,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.57043,
        "lng": 119.571731,
        "ele": 19.75,
        "distanceKm": 70.21479843771037,
        "gradePct": 0.05236342008982433,
        "smoothedEle": 19.255441366979376,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.570112,
        "lng": 119.571272,
        "ele": 20,
        "distanceKm": 70.27343920157877,
        "gradePct": 0.111519824120532,
        "smoothedEle": 19.409113207044896,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569884,
        "lng": 119.5708,
        "ele": 21.5,
        "distanceKm": 70.32781642440489,
        "gradePct": 0.14606484045880705,
        "smoothedEle": 19.550354982126972,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569652,
        "lng": 119.570318,
        "ele": 21.75,
        "distanceKm": 70.38330278741361,
        "gradePct": 0.16754508696224377,
        "smoothedEle": 19.69360034417527,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569429,
        "lng": 119.569918,
        "ele": 21.25,
        "distanceKm": 70.43101917129127,
        "gradePct": 0.17415420177887242,
        "smoothedEle": 19.788130857195238,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.569086,
        "lng": 119.569479,
        "ele": 20.75,
        "distanceKm": 70.48981147489972,
        "gradePct": 0.16596059035966135,
        "smoothedEle": 19.822676595157557,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568741,
        "lng": 119.569077,
        "ele": 20,
        "distanceKm": 70.54593927947496,
        "gradePct": 0.14297031031148108,
        "smoothedEle": 19.75339781787061,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.5687685,
        "lng": 119.568692,
        "ele": 20.37500000000007,
        "distanceKm": 70.58529717395376,
        "gradePct": 0.10389719179742302,
        "smoothedEle": 19.574025707769078,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568796,
        "lng": 119.568307,
        "ele": 20.75,
        "distanceKm": 70.62465506024151,
        "gradePct": 0.04154346978548347,
        "smoothedEle": 19.296228312070266,
        "gradeBand": "moderate"
      },
      {
        "lat": 23.568818980944993,
        "lng": 119.56779452492664,
        "ele": 21.51603149979217,
        "distanceKm": 70.67694860656994,
        "gradePct": -0.05609854222483861,
        "smoothedEle": 18.887398071854054,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568841,
        "lng": 119.567282,
        "ele": 21.25,
        "distanceKm": 70.7292421019608,
        "gradePct": -0.16356468768721727,
        "smoothedEle": 18.475468466568927,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56887799181247,
        "lng": 119.56683390900568,
        "ele": 20.389002604579485,
        "distanceKm": 70.77509604475256,
        "gradePct": -0.25791943491234476,
        "smoothedEle": 18.123819589353797,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568906,
        "lng": 119.566385,
        "ele": 20,
        "distanceKm": 70.82095435874473,
        "gradePct": -0.3564410255159793,
        "smoothedEle": 17.75032602530023,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568952,
        "lng": 119.565741,
        "ele": 19.5,
        "distanceKm": 70.88678929541987,
        "gradePct": -0.44488713303262484,
        "smoothedEle": 17.476071769694567,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568997500000002,
        "lng": 119.5652855,
        "ele": 17.999999999999766,
        "distanceKm": 70.93348832913178,
        "gradePct": -0.5049808634250106,
        "smoothedEle": 17.264677391193725,
        "gradeBand": "descent"
      },
      {
        "lat": 23.569043,
        "lng": 119.56483,
        "ele": 16.5,
        "distanceKm": 70.98018734685544,
        "gradePct": -0.5526691408406393,
        "smoothedEle": 17.05367585474847,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568836,
        "lng": 119.564548,
        "ele": 14.5,
        "distanceKm": 71.0170093018953,
        "gradePct": -0.5811824457102418,
        "smoothedEle": 16.88319397821552,
        "gradeBand": "descent"
      },
      {
        "lat": 23.56862224542723,
        "lng": 119.56420294887856,
        "ele": 13.044431263384794,
        "distanceKm": 71.05945554522373,
        "gradePct": -0.5968957841840818,
        "smoothedEle": 16.707319028863896,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568407,
        "lng": 119.563859,
        "ele": 11.75,
        "distanceKm": 71.1019020616808,
        "gradePct": -0.5928937513926592,
        "smoothedEle": 16.492355672954655,
        "gradeBand": "descent"
      },
      {
        "lat": 23.568169116149726,
        "lng": 119.56348107655663,
        "ele": 11.59711834815234,
        "distanceKm": 71.1486279158995,
        "gradePct": -0.5826207902751336,
        "smoothedEle": 16.195704898343166,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567930604643323,
        "lng": 119.56310362625892,
        "ele": 11.700448065771107,
        "distanceKm": 71.19535366213562,
        "gradePct": -0.5889954981377027,
        "smoothedEle": 15.7974391218511,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567691,
        "lng": 119.562727,
        "ele": 12.25,
        "distanceKm": 71.2420795451104,
        "gradePct": -0.6055166100856643,
        "smoothedEle": 15.349436467260263,
        "gradeBand": "descent"
      },
      {
        "lat": 23.567309,
        "lng": 119.562141,
        "ele": 11.75,
        "distanceKm": 71.31536912909299,
        "gradePct": -0.6377908771090667,
        "smoothedEle": 14.606860606685586,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 71.31536912909299,
      "elevationGainM": 259.3234650329306,
      "elevationLossM": 259.35549709282134,
      "minimumElevationM": 4,
      "maximumElevationM": 61.25,
      "maximumSustainedGradePct": 4.247239860761094
    },
    "climbs": [
      {
        "startIndex": 656,
        "endIndex": 686,
        "startDistanceKm": 32.071336216559146,
        "endDistanceKm": 33.62785902415905,
        "distanceKm": 1.5565228075999045,
        "gainM": 41.176945144043316,
        "averageGradePct": 2.6454443804480134,
        "maximumGradePct": 4.247239860761094
      },
      {
        "startIndex": 1001,
        "endIndex": 1462,
        "startDistanceKm": 48.729197306632756,
        "endDistanceKm": 71.31536912909299,
        "distanceKm": 22.58617182246023,
        "gainM": 50.584559955041385,
        "averageGradePct": 0.22396252163785846,
        "maximumGradePct": 1.063839002635205
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
