"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("lienchiang", {
  "lienchiang-nangan": {
    "routeId": "lienchiang-nangan",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:07:14.669Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "3c0cc42d01d778510cc4586fbc3c15cdea9fd24aee0d830c24eddf33380c09cb",
      "roadPolicyAuditSha256": "467b7951a87d5500b98cbbac70aba11723aa0c226f02b6c37b4be1902886fd77",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "SRTM 100/100 公尺為 15.37 公里、爬升 489 公尺、最大坡度 25.52%；500/200、750/300、1000/500 依序為 340/12.82%、282/12.37%、241/11.70%。採 500/200 保留馬祖實際連續陡坡，同時降低山海交界 SRTM 短波；僅供行程規劃，並非道路測量。",
        "referenceUrl": "https://www.matsu-nsa.gov.tw/zh-TW/trips/3023",
        "referenceLabel": "馬祖國家風景區單車健行遊程"
      },
      "reviewedAt": "2026-08-01T05:09:19.375Z",
      "reviewerNote": "已移除福澳港、八八坑道、雲台山軍情館與遊客中心的港區、軍事或 service/footway 支線，介壽、津沙亦吸附至公共主線。raw 的 service、track、權限禁制、ferry 與非法逆向均為 0；live OSM 五窗 5/5 於 0.05 公尺內命中福澳路、濱海大道、勝天路、中央大道等完整公共道路 way。全線僅在南竿單島 bounds，南竿不跨島，不進港區、機場與軍事設施；連續陡坡、大霧與強側風需現場判斷。"
    },
    "waypoints": [
      {
        "name": "介壽村公共主線",
        "lat": 26.156191,
        "lng": 119.951923,
        "role": "start"
      },
      {
        "name": "馬港天后宮外主道路",
        "lat": 26.159,
        "lng": 119.9186,
        "role": "via"
      },
      {
        "name": "津沙聚落外公共主線",
        "lat": 26.146135,
        "lng": 119.913144,
        "role": "via"
      },
      {
        "name": "清水村主道路",
        "lat": 26.1487,
        "lng": 119.936,
        "role": "via"
      },
      {
        "name": "介壽村公共主線",
        "lat": 26.156191,
        "lng": 119.951923,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 26.156191,
        "lng": 119.951923,
        "ele": 10.5,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 16.343771311092148,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.156335,
        "lng": 119.951935,
        "ele": 10.75,
        "distanceKm": 0.016056822734025422,
        "gradePct": 2.7837018471470394,
        "smoothedEle": 16.79074538213234,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.156465,
        "lng": 119.952,
        "ele": 11.25,
        "distanceKm": 0.0319012349815959,
        "gradePct": 2.9567303601869552,
        "smoothedEle": 17.287004811067575,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.15663,
        "lng": 119.952247,
        "ele": 12.25,
        "distanceKm": 0.06263180346997836,
        "gradePct": 3.069622078865142,
        "smoothedEle": 18.266330978798027,
        "gradeBand": "hard"
      },
      {
        "lat": 26.157017,
        "lng": 119.95244,
        "ele": 15.25,
        "distanceKm": 0.10977896005199106,
        "gradePct": 3.236386240624674,
        "smoothedEle": 19.896642469315644,
        "gradeBand": "hard"
      },
      {
        "lat": 26.157448,
        "lng": 119.952446,
        "ele": 18.25,
        "distanceKm": 0.15770778089016863,
        "gradePct": 3.444429120803795,
        "smoothedEle": 21.77590404184656,
        "gradeBand": "hard"
      },
      {
        "lat": 26.157787,
        "lng": 119.952372,
        "ele": 20.25,
        "distanceKm": 0.19611965179448493,
        "gradePct": 3.5904893887742624,
        "smoothedEle": 23.38542659807416,
        "gradeBand": "hard"
      },
      {
        "lat": 26.15825,
        "lng": 119.952347,
        "ele": 23.75,
        "distanceKm": 0.2476634032624698,
        "gradePct": 3.893200912981253,
        "smoothedEle": 25.575717678346038,
        "gradeBand": "hard"
      },
      {
        "lat": 26.158713,
        "lng": 119.952322,
        "ele": 27.25,
        "distanceKm": 0.2992071542511219,
        "gradePct": 5.048641270359333,
        "smoothedEle": 29.62836030322751,
        "gradeBand": "hard"
      },
      {
        "lat": 26.1590675,
        "lng": 119.95229099999999,
        "ele": 31.125000000000004,
        "distanceKm": 0.3387470476429678,
        "gradePct": 5.806721581375928,
        "smoothedEle": 32.64590773007475,
        "gradeBand": "hard"
      },
      {
        "lat": 26.159422,
        "lng": 119.95226,
        "ele": 35,
        "distanceKm": 0.37828694029895654,
        "gradePct": 6.4362026198234075,
        "smoothedEle": 35.51061097305002,
        "gradeBand": "steep"
      },
      {
        "lat": 26.1597865,
        "lng": 119.952248,
        "ele": 39.625,
        "distanceKm": 0.41883523843029463,
        "gradePct": 7.092648026902883,
        "smoothedEle": 38.535994782342925,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160151,
        "lng": 119.952236,
        "ele": 44.25,
        "distanceKm": 0.45938353645109264,
        "gradePct": 7.6812469604349465,
        "smoothedEle": 41.859710528154146,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160782,
        "lng": 119.952071,
        "ele": 50.75,
        "distanceKm": 0.5314542463110344,
        "gradePct": 8.1440975885371,
        "smoothedEle": 48.37754162167462,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160796,
        "lng": 119.952098,
        "ele": 51,
        "distanceKm": 0.5345663043565765,
        "gradePct": 8.169279538860188,
        "smoothedEle": 48.665406990887256,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160816,
        "lng": 119.952119,
        "ele": 51.5,
        "distanceKm": 0.5376221990506747,
        "gradePct": 8.194007030202968,
        "smoothedEle": 48.94807725009133,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160869,
        "lng": 119.952139,
        "ele": 51.75,
        "distanceKm": 0.5438444014307791,
        "gradePct": 8.254207528414405,
        "smoothedEle": 49.52363097025098,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160896,
        "lng": 119.952136,
        "ele": 51.5,
        "distanceKm": 0.5468615616953066,
        "gradePct": 8.284453109473333,
        "smoothedEle": 49.802718294719796,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160927,
        "lng": 119.952122,
        "ele": 51.5,
        "distanceKm": 0.5505810331596366,
        "gradePct": 8.32173902265247,
        "smoothedEle": 50.14676940517031,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160951,
        "lng": 119.952098,
        "ele": 51.25,
        "distanceKm": 0.5541670232316956,
        "gradePct": 8.357686849049394,
        "smoothedEle": 50.478473486835775,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160968,
        "lng": 119.952064,
        "ele": 51,
        "distanceKm": 0.5580513582530628,
        "gradePct": 8.39662544012458,
        "smoothedEle": 50.837774476312234,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160974,
        "lng": 119.952026,
        "ele": 50.75,
        "distanceKm": 0.561902151155963,
        "gradePct": 8.443745532399358,
        "smoothedEle": 51.21100830945212,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160967,
        "lng": 119.951989,
        "ele": 50.5,
        "distanceKm": 0.5656760453923053,
        "gradePct": 8.498559531766034,
        "smoothedEle": 51.594058574440865,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160925,
        "lng": 119.951933,
        "ele": 50.25,
        "distanceKm": 0.5729594507209413,
        "gradePct": 8.588915887068591,
        "smoothedEle": 52.30246100454973,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160863,
        "lng": 119.951917,
        "ele": 50.25,
        "distanceKm": 0.5800360692926164,
        "gradePct": 8.662388630391455,
        "smoothedEle": 52.965893995644265,
        "gradeBand": "steep"
      },
      {
        "lat": 26.16083,
        "lng": 119.951437,
        "ele": 52.25,
        "distanceKm": 0.6280824327772723,
        "gradePct": 9.082572605634706,
        "smoothedEle": 57.459126073320576,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.16084074127183,
        "lng": 119.95104486039685,
        "ele": 57.80749448826758,
        "distanceKm": 0.6672378526749321,
        "gradePct": 9.272779793811445,
        "smoothedEle": 61.115587893991915,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.160859,
        "lng": 119.950653,
        "ele": 63.25,
        "distanceKm": 0.7063998446512216,
        "gradePct": 9.324549613118153,
        "smoothedEle": 64.7608055524736,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.160824,
        "lng": 119.95027,
        "ele": 69,
        "distanceKm": 0.7448224804624765,
        "gradePct": 9.408031995882721,
        "smoothedEle": 68.43016727244843,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.160705,
        "lng": 119.949894,
        "ele": 73.5,
        "distanceKm": 0.7846134817707231,
        "gradePct": 9.252138930678534,
        "smoothedEle": 71.89824539030741,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.160532,
        "lng": 119.949423,
        "ele": 78,
        "distanceKm": 0.8354051561808438,
        "gradePct": 9.021842510443177,
        "smoothedEle": 76.186631076689,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.160360561747037,
        "lng": 119.94907546372826,
        "ele": 81.06971194485357,
        "distanceKm": 0.8749841922362365,
        "gradePct": 8.547739225651545,
        "smoothedEle": 78.93209947799566,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160199,
        "lng": 119.948722,
        "ele": 86,
        "distanceKm": 0.9145724237450944,
        "gradePct": 7.802383941404299,
        "smoothedEle": 81.14605473874704,
        "gradeBand": "steep"
      },
      {
        "lat": 26.160037,
        "lng": 119.948203,
        "ele": 92,
        "distanceKm": 0.9694139935776491,
        "gradePct": 6.046752108923451,
        "smoothedEle": 82.6670025379133,
        "gradeBand": "steep"
      },
      {
        "lat": 26.159703,
        "lng": 119.947743,
        "ele": 94.5,
        "distanceKm": 1.0284654614816158,
        "gradePct": 3.018334469534488,
        "smoothedEle": 81.63737549640214,
        "gradeBand": "hard"
      },
      {
        "lat": 26.159437,
        "lng": 119.947552,
        "ele": 93,
        "distanceKm": 1.0636541345676696,
        "gradePct": 0.9960158426025887,
        "smoothedEle": 80.13820208522891,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.159409,
        "lng": 119.947435,
        "ele": 92.25,
        "distanceKm": 1.0757393135841855,
        "gradePct": 0.27980690569925326,
        "smoothedEle": 79.53394313440312,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.159227,
        "lng": 119.947292,
        "ele": 86,
        "distanceKm": 1.1005032409948317,
        "gradePct": -1.074273986630239,
        "smoothedEle": 78.2106936147792,
        "gradeBand": "descent"
      },
      {
        "lat": 26.158961,
        "lng": 119.94718,
        "ele": 84,
        "distanceKm": 1.1321229306241096,
        "gradePct": -2.702776980007976,
        "smoothedEle": 76.22723748034981,
        "gradeBand": "descent"
      },
      {
        "lat": 26.15889,
        "lng": 119.947108,
        "ele": 83,
        "distanceKm": 1.1427984917076168,
        "gradePct": -3.273245501504527,
        "smoothedEle": 75.38237093979494,
        "gradeBand": "descent"
      },
      {
        "lat": 26.158764,
        "lng": 119.946876,
        "ele": 79.5,
        "distanceKm": 1.1698622992658692,
        "gradePct": -4.860049627962149,
        "smoothedEle": 72.93908658113739,
        "gradeBand": "descent"
      },
      {
        "lat": 26.158567,
        "lng": 119.946486,
        "ele": 70.25,
        "distanceKm": 1.2145272229319484,
        "gradePct": -7.015394738424968,
        "smoothedEle": 67.84961447982876,
        "gradeBand": "descent"
      },
      {
        "lat": 26.158365,
        "lng": 119.946152,
        "ele": 58.5,
        "distanceKm": 1.254723700245658,
        "gradePct": -9.089418775497025,
        "smoothedEle": 62.33983553560077,
        "gradeBand": "descent"
      },
      {
        "lat": 26.158139,
        "lng": 119.945958,
        "ele": 52.5,
        "distanceKm": 1.2864479170899688,
        "gradePct": -10.658541097431051,
        "smoothedEle": 57.64465144264277,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157862,
        "lng": 119.945902,
        "ele": 53,
        "distanceKm": 1.3177519545093437,
        "gradePct": -12.071609330598672,
        "smoothedEle": 52.98548879139969,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157533,
        "lng": 119.945679,
        "ele": 49.25,
        "distanceKm": 1.3605736877225574,
        "gradePct": -13.567042446262487,
        "smoothedEle": 46.643565118705226,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157435,
        "lng": 119.945236,
        "ele": 40.5,
        "distanceKm": 1.4061112975782646,
        "gradePct": -14.245118032782301,
        "smoothedEle": 40.318355028989664,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157436,
        "lng": 119.944803,
        "ele": 30.25,
        "distanceKm": 1.4493279408272435,
        "gradePct": -14.028072111746582,
        "smoothedEle": 35.02329447184918,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157419,
        "lng": 119.944438,
        "ele": 23.5,
        "distanceKm": 1.4858065675189909,
        "gradePct": -13.219869748036798,
        "smoothedEle": 31.2998316830739,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157306,
        "lng": 119.944134,
        "ele": 20.5,
        "distanceKm": 1.5186467961638475,
        "gradePct": -11.99626388766407,
        "smoothedEle": 28.8604344449551,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157174,
        "lng": 119.943775,
        "ele": 19.25,
        "distanceKm": 1.5573673949562805,
        "gradePct": -10.288058522022345,
        "smoothedEle": 26.54230190401851,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157183,
        "lng": 119.943664,
        "ele": 17.5,
        "distanceKm": 1.568491122487265,
        "gradePct": -9.823350724727339,
        "smoothedEle": 25.8971257072214,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157215,
        "lng": 119.943576,
        "ele": 16,
        "distanceKm": 1.577967568025832,
        "gradePct": -9.440024748462145,
        "smoothedEle": 25.34749186598452,
        "gradeBand": "descent"
      },
      {
        "lat": 26.15744,
        "lng": 119.943411,
        "ele": 13,
        "distanceKm": 1.6079199720912094,
        "gradePct": -8.10481527191822,
        "smoothedEle": 23.887119095326337,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157460333333333,
        "lng": 119.94288133333333,
        "ele": 15.916666666666666,
        "distanceKm": 1.660832818727821,
        "gradePct": -5.857999329021792,
        "smoothedEle": 22.132964742787102,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157480666666668,
        "lng": 119.94235166666667,
        "ele": 18.833333333333332,
        "distanceKm": 1.713745656158727,
        "gradePct": -3.696282865858927,
        "smoothedEle": 21.831929131982136,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157501,
        "lng": 119.941822,
        "ele": 21.75,
        "distanceKm": 1.766658484383887,
        "gradePct": -1.4836573924754632,
        "smoothedEle": 23.036103932266396,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157432,
        "lng": 119.941422,
        "ele": 24,
        "distanceKm": 1.8073119081943383,
        "gradePct": 0.23425469796128168,
        "smoothedEle": 24.385275525786515,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.157149231871927,
        "lng": 119.94091299747065,
        "ele": 27.283937604429738,
        "distanceKm": 1.867057079708169,
        "gradePct": 2.5897331698018666,
        "smoothedEle": 27.277019558514887,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.156852,
        "lng": 119.940414,
        "ele": 30.5,
        "distanceKm": 1.9268296431582395,
        "gradePct": 4.278520228047738,
        "smoothedEle": 30.68673116991965,
        "gradeBand": "hard"
      },
      {
        "lat": 26.156552,
        "lng": 119.939807,
        "ele": 34.5,
        "distanceKm": 1.9959898241052865,
        "gradePct": 5.221979851350715,
        "smoothedEle": 34.45348743652785,
        "gradeBand": "hard"
      },
      {
        "lat": 26.156311,
        "lng": 119.939526,
        "ele": 36.5,
        "distanceKm": 2.034780476027393,
        "gradePct": 5.167286747000064,
        "smoothedEle": 36.049363440888314,
        "gradeBand": "hard"
      },
      {
        "lat": 26.15577,
        "lng": 119.939566,
        "ele": 40,
        "distanceKm": 2.0950693460186365,
        "gradePct": 4.466917530474732,
        "smoothedEle": 37.80880766326092,
        "gradeBand": "hard"
      },
      {
        "lat": 26.155169,
        "lng": 119.939734,
        "ele": 44.5,
        "distanceKm": 2.1639690998149765,
        "gradePct": 3.533788775042077,
        "smoothedEle": 39.77708077155902,
        "gradeBand": "hard"
      },
      {
        "lat": 26.154958,
        "lng": 119.939774,
        "ele": 46.5,
        "distanceKm": 2.1877685124370263,
        "gradePct": 3.0583763726325985,
        "smoothedEle": 40.1224727407294,
        "gradeBand": "hard"
      },
      {
        "lat": 26.154736,
        "lng": 119.939687,
        "ele": 46.25,
        "distanceKm": 2.213936548809661,
        "gradePct": 2.4940329084375086,
        "smoothedEle": 40.179894732429474,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.154446,
        "lng": 119.939482,
        "ele": 43.75,
        "distanceKm": 2.252126765393478,
        "gradePct": 1.4577925423559415,
        "smoothedEle": 39.47117510787308,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.154453,
        "lng": 119.939451,
        "ele": 43.5,
        "distanceKm": 2.255317269246249,
        "gradePct": 1.364576283472284,
        "smoothedEle": 39.37785287017953,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.154438,
        "lng": 119.939391,
        "ele": 42.5,
        "distanceKm": 2.261533787963101,
        "gradePct": 1.1829496048014885,
        "smoothedEle": 39.19601969771161,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.154393,
        "lng": 119.939354,
        "ele": 41.75,
        "distanceKm": 2.2677527716172183,
        "gradePct": 0.996515665491617,
        "smoothedEle": 39.00464393962516,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.15434,
        "lng": 119.939354,
        "ele": 41.5,
        "distanceKm": 2.273646110869333,
        "gradePct": 0.8125445726237351,
        "smoothedEle": 38.80869040949234,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.154172,
        "lng": 119.939311,
        "ele": 39.75,
        "distanceKm": 2.2928135587482386,
        "gradePct": 0.20085644821386575,
        "smoothedEle": 38.14468864277961,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.154082,
        "lng": 119.939297,
        "ele": 38.25,
        "distanceKm": 2.3029181992775754,
        "gradePct": -0.18415460673311643,
        "smoothedEle": 37.664718217636114,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153958,
        "lng": 119.939364,
        "ele": 38,
        "distanceKm": 2.3182424883435173,
        "gradePct": -0.7786040148289068,
        "smoothedEle": 36.91359144576035,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153744,
        "lng": 119.93957,
        "ele": 40.75,
        "distanceKm": 2.349690675326179,
        "gradePct": -2.111974323672408,
        "smoothedEle": 35.145237503382354,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153579,
        "lng": 119.93971,
        "ele": 43.25,
        "distanceKm": 2.3727531284382812,
        "gradePct": -3.09459734068943,
        "smoothedEle": 33.715365410432,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153457,
        "lng": 119.939749,
        "ele": 43.5,
        "distanceKm": 2.3868663610948486,
        "gradePct": -3.66757970689045,
        "smoothedEle": 32.77422074212244,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153273,
        "lng": 119.939718,
        "ele": 41.75,
        "distanceKm": 2.4075588943757515,
        "gradePct": -4.425788959072719,
        "smoothedEle": 31.31432196901727,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153074,
        "lng": 119.939498,
        "ele": 35.25,
        "distanceKm": 2.4387327743712643,
        "gradePct": -5.3245174597441745,
        "smoothedEle": 29.07070081824503,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153048,
        "lng": 119.939202,
        "ele": 27,
        "distanceKm": 2.4684179193187523,
        "gradePct": -6.0498724960352614,
        "smoothedEle": 26.88278278647863,
        "gradeBand": "descent"
      },
      {
        "lat": 26.1531585,
        "lng": 119.9387335,
        "ele": 19.875000000000032,
        "distanceKm": 2.5167666464437626,
        "gradePct": -6.708334143550762,
        "smoothedEle": 23.56926219880559,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153269,
        "lng": 119.938265,
        "ele": 12.75,
        "distanceKm": 2.5651153307384513,
        "gradePct": -6.738027210775248,
        "smoothedEle": 20.71285444627096,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153165,
        "lng": 119.93773,
        "ele": 9,
        "distanceKm": 2.619751952761118,
        "gradePct": -6.4817625600333075,
        "smoothedEle": 17.473247962192044,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153088500000003,
        "lng": 119.9373535,
        "ele": 9.25,
        "distanceKm": 2.658281476634609,
        "gradePct": -6.318273272685512,
        "smoothedEle": 14.993334015628696,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153012,
        "lng": 119.936977,
        "ele": 9.5,
        "distanceKm": 2.696811024538062,
        "gradePct": -6.002771917419249,
        "smoothedEle": 12.931352383646438,
        "gradeBand": "descent"
      },
      {
        "lat": 26.152942,
        "lng": 119.936484,
        "ele": 10,
        "distanceKm": 2.74662965018202,
        "gradePct": -5.242849959834849,
        "smoothedEle": 11.319276101832404,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153051,
        "lng": 119.936064,
        "ele": 10.25,
        "distanceKm": 2.7902672219518565,
        "gradePct": -4.312965782681383,
        "smoothedEle": 10.595574645140783,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153342,
        "lng": 119.935839,
        "ele": 10.5,
        "distanceKm": 2.829654544723651,
        "gradePct": -3.1635623518345515,
        "smoothedEle": 10.508752913754465,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153858,
        "lng": 119.935641,
        "ele": 10.75,
        "distanceKm": 2.8903392741719167,
        "gradePct": -1.2393398560442808,
        "smoothedEle": 10.799020633262625,
        "gradeBand": "descent"
      },
      {
        "lat": 26.154167,
        "lng": 119.935529,
        "ele": 11,
        "distanceKm": 2.9264713113336285,
        "gradePct": -0.4694997052677113,
        "smoothedEle": 11.032578506495774,
        "gradeBand": "descent"
      },
      {
        "lat": 26.154545527663448,
        "lng": 119.93549536551923,
        "ele": 11.340948317299612,
        "distanceKm": 2.9686953889629053,
        "gradePct": 0.17923253608627818,
        "smoothedEle": 11.311794888475355,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.154926763831725,
        "lng": 119.93550518275961,
        "ele": 11.545474158649805,
        "distanceKm": 3.011098298104407,
        "gradePct": 0.515332395288373,
        "smoothedEle": 11.580321359267312,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.155308,
        "lng": 119.935515,
        "ele": 11.75,
        "distanceKm": 3.053501207171922,
        "gradePct": 0.6156687994734811,
        "smoothedEle": 11.854154073496264,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.1557384,
        "lng": 119.9355238,
        "ele": 12.099999999999998,
        "distanceKm": 3.101367628656556,
        "gradePct": 0.644152447681725,
        "smoothedEle": 12.15861292953197,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.1561688,
        "lng": 119.9355326,
        "ele": 12.450000000000001,
        "distanceKm": 3.149234050081734,
        "gradePct": 0.6395369012785966,
        "smoothedEle": 12.46217613133738,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.156599200000002,
        "lng": 119.93554139999999,
        "ele": 12.799999999999999,
        "distanceKm": 3.1971004714478255,
        "gradePct": 0.6405382530692879,
        "smoothedEle": 12.772753310894167,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.1570296,
        "lng": 119.9355502,
        "ele": 13.150000000000002,
        "distanceKm": 3.244966892754091,
        "gradePct": 0.6462328464073183,
        "smoothedEle": 13.091506224987663,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.15746,
        "lng": 119.935559,
        "ele": 13.5,
        "distanceKm": 3.292833314000899,
        "gradePct": 0.6508764286617591,
        "smoothedEle": 13.40608247934013,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158008,
        "lng": 119.935571,
        "ele": 13.75,
        "distanceKm": 3.3537799871322647,
        "gradePct": 0.6517535670702598,
        "smoothedEle": 13.795179189077414,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.15837,
        "lng": 119.935428,
        "ele": 14,
        "distanceKm": 3.396487981596309,
        "gradePct": 0.6403146658721569,
        "smoothedEle": 14.049408554641882,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158472,
        "lng": 119.935193,
        "ele": 14.25,
        "distanceKm": 3.422540841200455,
        "gradePct": 0.6265691500590117,
        "smoothedEle": 14.195304568425101,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158496,
        "lng": 119.934584,
        "ele": 14.75,
        "distanceKm": 3.483381412295604,
        "gradePct": 0.5706267497664936,
        "smoothedEle": 14.485218449350107,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158532,
        "lng": 119.933879,
        "ele": 15,
        "distanceKm": 3.5538585848421036,
        "gradePct": 0.4805522883094758,
        "smoothedEle": 14.756751637020177,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158524,
        "lng": 119.933335,
        "ele": 15.25,
        "distanceKm": 3.6081604580783124,
        "gradePct": 0.40730343332497176,
        "smoothedEle": 14.929381289591044,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158337,
        "lng": 119.932803,
        "ele": 15.25,
        "distanceKm": 3.6651837477200018,
        "gradePct": 0.33954379562925724,
        "smoothedEle": 15.077591608677443,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158005,
        "lng": 119.932208,
        "ele": 15.25,
        "distanceKm": 3.735108080436096,
        "gradePct": 0.2709481274764866,
        "smoothedEle": 15.226406284544506,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.157828,
        "lng": 119.931733,
        "ele": 15.25,
        "distanceKm": 3.786439362658435,
        "gradePct": 0.23420075806457485,
        "smoothedEle": 15.328729844333738,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.15785,
        "lng": 119.931273,
        "ele": 15.25,
        "distanceKm": 3.832415624294396,
        "gradePct": 0.3270926061847132,
        "smoothedEle": 15.646608566824984,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.157895,
        "lng": 119.930922,
        "ele": 15.25,
        "distanceKm": 3.867803356158985,
        "gradePct": 0.5969799320180552,
        "smoothedEle": 16.277126587492678,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158004,
        "lng": 119.930221,
        "ele": 15.25,
        "distanceKm": 3.938809930213207,
        "gradePct": 1.661602335254073,
        "smoothedEle": 18.556990206662974,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158094,
        "lng": 119.929856,
        "ele": 16,
        "distanceKm": 3.97658894516173,
        "gradePct": 2.497873741602356,
        "smoothedEle": 20.30484154717148,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158359,
        "lng": 119.929435,
        "ele": 15.75,
        "distanceKm": 4.027909925267836,
        "gradePct": 3.6709243592624765,
        "smoothedEle": 22.957304995026,
        "gradeBand": "hard"
      },
      {
        "lat": 26.15865613649621,
        "lng": 119.92916997332595,
        "ele": 19.493097040015215,
        "distanceKm": 4.070233930825947,
        "gradePct": 4.602392890537424,
        "smoothedEle": 25.559952730755015,
        "gradeBand": "hard"
      },
      {
        "lat": 26.158971,
        "lng": 119.928931,
        "ele": 25.75,
        "distanceKm": 4.112597332979471,
        "gradePct": 5.284859126829256,
        "smoothedEle": 28.28508009572071,
        "gradeBand": "hard"
      },
      {
        "lat": 26.159221,
        "lng": 119.928594,
        "ele": 33,
        "distanceKm": 4.15623279447706,
        "gradePct": 5.800863453761823,
        "smoothedEle": 30.964788333898625,
        "gradeBand": "hard"
      },
      {
        "lat": 26.159363,
        "lng": 119.927944,
        "ele": 38.5,
        "distanceKm": 4.223000312239864,
        "gradePct": 6.0687911223575455,
        "smoothedEle": 34.84113976506541,
        "gradeBand": "steep"
      },
      {
        "lat": 26.15942,
        "lng": 119.92744,
        "ele": 43,
        "distanceKm": 4.273700010980123,
        "gradePct": 5.8252829710519265,
        "smoothedEle": 37.43348258503665,
        "gradeBand": "hard"
      },
      {
        "lat": 26.159627,
        "lng": 119.927084,
        "ele": 48,
        "distanceKm": 4.316034765221001,
        "gradePct": 5.352850281271544,
        "smoothedEle": 39.2018776692652,
        "gradeBand": "hard"
      },
      {
        "lat": 26.15995,
        "lng": 119.926839,
        "ele": 47,
        "distanceKm": 4.359484424647831,
        "gradePct": 4.628542532954512,
        "smoothedEle": 40.410654736727636,
        "gradeBand": "hard"
      },
      {
        "lat": 26.160256,
        "lng": 119.926432,
        "ele": 44.75,
        "distanceKm": 4.4124729123422775,
        "gradePct": 3.275800734649622,
        "smoothedEle": 40.78154730314127,
        "gradeBand": "hard"
      },
      {
        "lat": 26.160387,
        "lng": 119.926047,
        "ele": 44.25,
        "distanceKm": 4.453566102117364,
        "gradePct": 1.9973851794349733,
        "smoothedEle": 40.39877948794532,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.16049,
        "lng": 119.925601,
        "ele": 41.25,
        "distanceKm": 4.499528770930859,
        "gradePct": 0.43385147992441336,
        "smoothedEle": 39.38009701957397,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.160584,
        "lng": 119.924937,
        "ele": 37.25,
        "distanceKm": 4.56661818680542,
        "gradePct": -1.8053497721874534,
        "smoothedEle": 36.84988791302349,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160547,
        "lng": 119.924441,
        "ele": 34.25,
        "distanceKm": 4.616291882793524,
        "gradePct": -2.9923388259843557,
        "smoothedEle": 34.76129735844176,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160472,
        "lng": 119.924073,
        "ele": 32,
        "distanceKm": 4.653954866562678,
        "gradePct": -3.4829548399196857,
        "smoothedEle": 33.424253521563166,
        "gradeBand": "descent"
      },
      {
        "lat": 26.1604,
        "lng": 119.923622,
        "ele": 29.25,
        "distanceKm": 4.6996731924728286,
        "gradePct": -3.672985208572073,
        "smoothedEle": 32.02867989081504,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160311,
        "lng": 119.923119,
        "ele": 26,
        "distanceKm": 4.750841084332306,
        "gradePct": -3.4077741371470074,
        "smoothedEle": 30.629357017135217,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160001,
        "lng": 119.922529,
        "ele": 25.5,
        "distanceKm": 4.819073329744868,
        "gradePct": -2.8642653219596115,
        "smoothedEle": 28.934024763361847,
        "gradeBand": "descent"
      },
      {
        "lat": 26.15983149884983,
        "lng": 119.92194843830612,
        "ele": 28.175990504711688,
        "distanceKm": 4.880004640882566,
        "gradePct": -2.3245960638127143,
        "smoothedEle": 27.979879649986266,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159713,
        "lng": 119.921348,
        "ele": 29.5,
        "distanceKm": 4.941362983439916,
        "gradePct": -1.892277920056758,
        "smoothedEle": 27.104005199227473,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159686,
        "lng": 119.921075,
        "ele": 29.25,
        "distanceKm": 4.9687747167902305,
        "gradePct": -1.7214846734382339,
        "smoothedEle": 26.740799732335795,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159712,
        "lng": 119.920497,
        "ele": 27.25,
        "distanceKm": 5.026534535091485,
        "gradePct": -1.3488257641576407,
        "smoothedEle": 26.119535561797132,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159747,
        "lng": 119.920359,
        "ele": 26.5,
        "distanceKm": 5.040846945129716,
        "gradePct": -1.3161156883946628,
        "smoothedEle": 25.9608325844486,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159812,
        "lng": 119.920267,
        "ele": 25.75,
        "distanceKm": 5.0525323996732965,
        "gradePct": -1.3187098355545028,
        "smoothedEle": 25.772657593434786,
        "gradeBand": "descent"
      },
      {
        "lat": 26.15956,
        "lng": 119.920281,
        "ele": 28.5,
        "distanceKm": 5.080588375732441,
        "gradePct": -1.3379204928689556,
        "smoothedEle": 25.295706000429327,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159315,
        "lng": 119.919692,
        "ele": 25,
        "distanceKm": 5.145379533185711,
        "gradePct": -1.4492942871874832,
        "smoothedEle": 24.152197340720722,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159084999999997,
        "lng": 119.91913849999999,
        "ele": 22.624999999999982,
        "distanceKm": 5.206254812873956,
        "gradePct": -1.5594000522592766,
        "smoothedEle": 23.218863996681442,
        "gradeBand": "descent"
      },
      {
        "lat": 26.158855,
        "lng": 119.918585,
        "ele": 20.25,
        "distanceKm": 5.267130191403742,
        "gradePct": -1.2585574119183913,
        "smoothedEle": 23.007380310180437,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159302,
        "lng": 119.918487,
        "ele": 17,
        "distanceKm": 5.317787617694784,
        "gradePct": -0.7675018363173323,
        "smoothedEle": 23.10416743953904,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159683363588012,
        "lng": 119.91874280303169,
        "ele": 18.808923269035052,
        "distanceKm": 5.367285654872588,
        "gradePct": -0.4914054181535615,
        "smoothedEle": 22.833524165650623,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160064727176028,
        "lng": 119.91899860606338,
        "ele": 20.617846538070104,
        "distanceKm": 5.41678364899867,
        "gradePct": 0.05647554013136076,
        "smoothedEle": 23.295237446841547,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.160443,
        "lng": 119.91926,
        "ele": 24.25,
        "distanceKm": 5.466279311899911,
        "gradePct": 0.7507944071678339,
        "smoothedEle": 24.511925116554007,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.160486,
        "lng": 119.919602,
        "ele": 29,
        "distanceKm": 5.500745736813821,
        "gradePct": 1.462861420230713,
        "smoothedEle": 25.997329708923225,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.160172,
        "lng": 119.919891,
        "ele": 27.25,
        "distanceKm": 5.5460339873499835,
        "gradePct": 3.077207470097801,
        "smoothedEle": 29.104138074569885,
        "gradeBand": "hard"
      },
      {
        "lat": 26.159899,
        "lng": 119.920196,
        "ele": 25,
        "distanceKm": 5.589023831428198,
        "gradePct": 5.125800088979518,
        "smoothedEle": 33.28789629430796,
        "gradeBand": "hard"
      },
      {
        "lat": 26.159812,
        "lng": 119.920267,
        "ele": 25.75,
        "distanceKm": 5.601015470866031,
        "gradePct": 5.6631097084426205,
        "smoothedEle": 34.474372574907356,
        "gradeBand": "hard"
      },
      {
        "lat": 26.15956,
        "lng": 119.920281,
        "ele": 28.5,
        "distanceKm": 5.629071446925176,
        "gradePct": 6.781980525553867,
        "smoothedEle": 37.16125349325117,
        "gradeBand": "steep"
      },
      {
        "lat": 26.15949,
        "lng": 119.920722,
        "ele": 32.25,
        "distanceKm": 5.67376856512327,
        "gradePct": 8.041674096417552,
        "smoothedEle": 40.91803875892964,
        "gradeBand": "steep"
      },
      {
        "lat": 26.159251,
        "lng": 119.920728,
        "ele": 37.5,
        "distanceKm": 5.700350935245774,
        "gradePct": 8.563446412317255,
        "smoothedEle": 43.10720771221449,
        "gradeBand": "steep"
      },
      {
        "lat": 26.158962,
        "lng": 119.920583,
        "ele": 43.5,
        "distanceKm": 5.735594607302819,
        "gradePct": 8.594183564394758,
        "smoothedEle": 45.576355807462576,
        "gradeBand": "steep"
      },
      {
        "lat": 26.158565,
        "lng": 119.920605,
        "ele": 56.25,
        "distanceKm": 5.779793627984567,
        "gradePct": 7.622135321025859,
        "smoothedEle": 47.633886415572306,
        "gradeBand": "steep"
      },
      {
        "lat": 26.158236,
        "lng": 119.920557,
        "ele": 66,
        "distanceKm": 5.8166891562545855,
        "gradePct": 6.57671518339717,
        "smoothedEle": 49.12884949598491,
        "gradeBand": "steep"
      },
      {
        "lat": 26.158023,
        "lng": 119.920275,
        "ele": 67.75,
        "distanceKm": 5.85347399627033,
        "gradePct": 5.978982701961664,
        "smoothedEle": 51.17024906468041,
        "gradeBand": "hard"
      },
      {
        "lat": 26.157948,
        "lng": 119.919874,
        "ele": 62,
        "distanceKm": 5.894356126136261,
        "gradePct": 5.2081283463983175,
        "smoothedEle": 53.02976689335447,
        "gradeBand": "hard"
      },
      {
        "lat": 26.157715,
        "lng": 119.919466,
        "ele": 63,
        "distanceKm": 5.9426206339602885,
        "gradePct": 3.7758389240170667,
        "smoothedEle": 53.45510571904378,
        "gradeBand": "hard"
      },
      {
        "lat": 26.157617,
        "lng": 119.919061,
        "ele": 57.5,
        "distanceKm": 5.984485544066025,
        "gradePct": 3.1351005323886487,
        "smoothedEle": 54.094198359555364,
        "gradeBand": "hard"
      },
      {
        "lat": 26.157666,
        "lng": 119.918895,
        "ele": 52,
        "distanceKm": 6.001926417577749,
        "gradePct": 2.834081390212686,
        "smoothedEle": 54.1988436006257,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.157554,
        "lng": 119.918505,
        "ele": 46.5,
        "distanceKm": 6.042794905187787,
        "gradePct": 1.4337645077437302,
        "smoothedEle": 53.445134699888555,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.157423,
        "lng": 119.918432,
        "ele": 48.5,
        "distanceKm": 6.0590819908787745,
        "gradePct": 0.6558295066497232,
        "smoothedEle": 52.73698691050908,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.157326,
        "lng": 119.918501,
        "ele": 53.25,
        "distanceKm": 6.071878972339517,
        "gradePct": 0.04487053457825492,
        "smoothedEle": 52.097137837471934,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.157107,
        "lng": 119.918237,
        "ele": 52.5,
        "distanceKm": 6.107757706329159,
        "gradePct": -1.488939740402048,
        "smoothedEle": 50.16999101784168,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157006,
        "lng": 119.917618,
        "ele": 36.5,
        "distanceKm": 6.170551017860262,
        "gradePct": -3.372671961269231,
        "smoothedEle": 47.13613564400798,
        "gradeBand": "descent"
      },
      {
        "lat": 26.156633,
        "lng": 119.9177,
        "ele": 47.5,
        "distanceKm": 6.212826550999324,
        "gradePct": -4.467964710941316,
        "smoothedEle": 45.06189065035966,
        "gradeBand": "descent"
      },
      {
        "lat": 26.156319,
        "lng": 119.917444,
        "ele": 46.5,
        "distanceKm": 6.256092249030317,
        "gradePct": -4.691866962016262,
        "smoothedEle": 43.483244264288274,
        "gradeBand": "descent"
      },
      {
        "lat": 26.155965,
        "lng": 119.917066,
        "ele": 41,
        "distanceKm": 6.310615789704715,
        "gradePct": -3.908915718942009,
        "smoothedEle": 42.214071439734305,
        "gradeBand": "descent"
      },
      {
        "lat": 26.155856,
        "lng": 119.916799,
        "ele": 40.25,
        "distanceKm": 6.339891420073434,
        "gradePct": -3.6831113891154175,
        "smoothedEle": 41.25122963721504,
        "gradeBand": "descent"
      },
      {
        "lat": 26.155678,
        "lng": 119.916637,
        "ele": 39.75,
        "distanceKm": 6.36544896707571,
        "gradePct": -3.4993718844193085,
        "smoothedEle": 40.38389717665549,
        "gradeBand": "descent"
      },
      {
        "lat": 26.155360089685885,
        "lng": 119.91635895168726,
        "ele": 38.98970969969283,
        "distanceKm": 6.410390952315004,
        "gradePct": -2.6362855377025354,
        "smoothedEle": 39.90882199165668,
        "gradeBand": "descent"
      },
      {
        "lat": 26.155079,
        "lng": 119.916032,
        "ele": 38.25,
        "distanceKm": 6.455577455636253,
        "gradePct": -1.643600245068351,
        "smoothedEle": 40.21482716996159,
        "gradeBand": "descent"
      },
      {
        "lat": 26.154805,
        "lng": 119.915581,
        "ele": 37.25,
        "distanceKm": 6.50993299840566,
        "gradePct": -1.0766006986233903,
        "smoothedEle": 40.076763730807905,
        "gradeBand": "descent"
      },
      {
        "lat": 26.154516,
        "lng": 119.915276,
        "ele": 36.5,
        "distanceKm": 6.554198021650564,
        "gradePct": -0.036995845315669094,
        "smoothedEle": 40.69172265252859,
        "gradeBand": "descent"
      },
      {
        "lat": 26.154227,
        "lng": 119.915182,
        "ele": 35.75,
        "distanceKm": 6.58767497933909,
        "gradePct": 0.47319524588724304,
        "smoothedEle": 41.09533972762164,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.154133,
        "lng": 119.915214,
        "ele": 35.5,
        "distanceKm": 6.598604410879016,
        "gradePct": 0.5988840073052795,
        "smoothedEle": 41.23118382034518,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.153859,
        "lng": 119.915681,
        "ele": 41,
        "distanceKm": 6.654289961735024,
        "gradePct": 0.7017641926265086,
        "smoothedEle": 41.609636584463296,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.153615,
        "lng": 119.916077,
        "ele": 44.75,
        "distanceKm": 6.70223097221594,
        "gradePct": 0.9333569777333067,
        "smoothedEle": 41.963040883880986,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.153453,
        "lng": 119.916313,
        "ele": 45.75,
        "distanceKm": 6.731884656417308,
        "gradePct": 0.9008174230263952,
        "smoothedEle": 42.183365499980475,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.153243,
        "lng": 119.916361,
        "ele": 46.5,
        "distanceKm": 6.7557220322362745,
        "gradePct": 0.8430318789036264,
        "smoothedEle": 42.396160741143866,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.153082,
        "lng": 119.916395,
        "ele": 52.5,
        "distanceKm": 6.77394324270947,
        "gradePct": 0.8138112103305516,
        "smoothedEle": 42.55740458997765,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.153005,
        "lng": 119.915948,
        "ele": 46.75,
        "distanceKm": 6.819372850413372,
        "gradePct": 0.8022355973302588,
        "smoothedEle": 42.97680246218676,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.152753,
        "lng": 119.915453,
        "ele": 43,
        "distanceKm": 6.876172366732522,
        "gradePct": 0.8964165104932489,
        "smoothedEle": 43.563779013201916,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.152507,
        "lng": 119.915063,
        "ele": 42.5,
        "distanceKm": 6.923748674169711,
        "gradePct": 0.687289151119152,
        "smoothedEle": 43.49749407350644,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.152338,
        "lng": 119.914783,
        "ele": 42,
        "distanceKm": 6.957426328164815,
        "gradePct": 0.39322761138047435,
        "smoothedEle": 43.19769768613583,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.152032,
        "lng": 119.914561,
        "ele": 41.75,
        "distanceKm": 6.9980309230266995,
        "gradePct": -0.03667389431344855,
        "smoothedEle": 42.706429883181954,
        "gradeBand": "descent"
      },
      {
        "lat": 26.151794,
        "lng": 119.91418,
        "ele": 41.25,
        "distanceKm": 7.0443614715422935,
        "gradePct": -0.7773742526037524,
        "smoothedEle": 41.68029092087279,
        "gradeBand": "descent"
      },
      {
        "lat": 26.151513,
        "lng": 119.913671,
        "ele": 40.75,
        "distanceKm": 7.104005283552672,
        "gradePct": -1.4016156592356193,
        "smoothedEle": 40.72176992250847,
        "gradeBand": "descent"
      },
      {
        "lat": 26.151231,
        "lng": 119.913301,
        "ele": 40.25,
        "distanceKm": 7.152452462194003,
        "gradePct": -1.5001997576788166,
        "smoothedEle": 40.241575217199895,
        "gradeBand": "descent"
      },
      {
        "lat": 26.150935,
        "lng": 119.912939,
        "ele": 39.75,
        "distanceKm": 7.201328299219728,
        "gradePct": -1.433604698696288,
        "smoothedEle": 39.766189488025155,
        "gradeBand": "descent"
      },
      {
        "lat": 26.150537,
        "lng": 119.91254,
        "ele": 39.25,
        "distanceKm": 7.26086500910362,
        "gradePct": -1.1222291351142732,
        "smoothedEle": 39.17060836724209,
        "gradeBand": "descent"
      },
      {
        "lat": 26.15012,
        "lng": 119.911962,
        "ele": 38.5,
        "distanceKm": 7.334881200886254,
        "gradePct": -1.3336365095087916,
        "smoothedEle": 37.74846356076735,
        "gradeBand": "descent"
      },
      {
        "lat": 26.149824,
        "lng": 119.911568,
        "ele": 38,
        "distanceKm": 7.386163663755427,
        "gradePct": -1.3726670050415728,
        "smoothedEle": 37.16835272252263,
        "gradeBand": "descent"
      },
      {
        "lat": 26.149716,
        "lng": 119.911503,
        "ele": 37.75,
        "distanceKm": 7.399813223007315,
        "gradePct": -1.3301732267913156,
        "smoothedEle": 37.120579265141025,
        "gradeBand": "descent"
      },
      {
        "lat": 26.149492,
        "lng": 119.911552,
        "ele": 37.5,
        "distanceKm": 7.4251965662981885,
        "gradePct": -1.2680894005960457,
        "smoothedEle": 36.99124221465074,
        "gradeBand": "descent"
      },
      {
        "lat": 26.149109,
        "lng": 119.911581,
        "ele": 37.25,
        "distanceKm": 7.467882539343937,
        "gradePct": -1.2314685543397086,
        "smoothedEle": 36.57283665082097,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148741,
        "lng": 119.911316,
        "ele": 36,
        "distanceKm": 7.5166070239512806,
        "gradePct": -1.1318500743974687,
        "smoothedEle": 35.83588287914243,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148461,
        "lng": 119.910983,
        "ele": 28.75,
        "distanceKm": 7.562149853817339,
        "gradePct": -1.232568778173358,
        "smoothedEle": 34.97486107850606,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148077,
        "lng": 119.910973,
        "ele": 34,
        "distanceKm": 7.604860429647891,
        "gradePct": -1.4887864228829837,
        "smoothedEle": 34.117289128605805,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147723,
        "lng": 119.910949,
        "ele": 38.5,
        "distanceKm": 7.644296315728066,
        "gradePct": -1.7402320895192305,
        "smoothedEle": 33.32356334050271,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147307,
        "lng": 119.910777,
        "ele": 35.25,
        "distanceKm": 7.693636709492239,
        "gradePct": -1.9150111368548421,
        "smoothedEle": 32.35328469854838,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147008,
        "lng": 119.910653,
        "ele": 32.75,
        "distanceKm": 7.729113172391891,
        "gradePct": -1.9335832687164878,
        "smoothedEle": 31.732278103659056,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14696,
        "lng": 119.910505,
        "ele": 31.75,
        "distanceKm": 7.744820577142985,
        "gradePct": -1.9036157007609609,
        "smoothedEle": 31.49525281875554,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146779,
        "lng": 119.910396,
        "ele": 30.25,
        "distanceKm": 7.7676994316944805,
        "gradePct": -1.8079063812382243,
        "smoothedEle": 31.24762012222336,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146444,
        "lng": 119.910017,
        "ele": 28.5,
        "distanceKm": 7.820791140922535,
        "gradePct": -1.217728711245166,
        "smoothedEle": 31.36119439785765,
        "gradeBand": "descent"
      },
      {
        "lat": 26.145949,
        "lng": 119.909744,
        "ele": 28,
        "distanceKm": 7.882208851794795,
        "gradePct": -0.43312997403967624,
        "smoothedEle": 31.711753525438283,
        "gradeBand": "descent"
      },
      {
        "lat": 26.145702,
        "lng": 119.9098,
        "ele": 27.75,
        "distanceKm": 7.910237083298943,
        "gradePct": -0.17392311776177558,
        "smoothedEle": 31.714853078547495,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14553,
        "lng": 119.910008,
        "ele": 27.75,
        "distanceKm": 7.9384655640399355,
        "gradePct": 0.19579456433579684,
        "smoothedEle": 31.98273931654605,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.145111,
        "lng": 119.910194,
        "ele": 29.5,
        "distanceKm": 7.988619282533291,
        "gradePct": 0.7719664897807281,
        "smoothedEle": 32.836305040269025,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.144943,
        "lng": 119.910298,
        "ele": 30.75,
        "distanceKm": 8.009990699532928,
        "gradePct": 1.0238812261766386,
        "smoothedEle": 33.3858524460546,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.144885,
        "lng": 119.910379,
        "ele": 31.5,
        "distanceKm": 8.020333082544246,
        "gradePct": 1.1653691148760243,
        "smoothedEle": 33.690952744888484,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.144892,
        "lng": 119.910559,
        "ele": 32.5,
        "distanceKm": 8.038317155143494,
        "gradePct": 1.3773955503062758,
        "smoothedEle": 34.21602023060217,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.145025,
        "lng": 119.910992,
        "ele": 35.25,
        "distanceKm": 8.083998423074238,
        "gradePct": 1.9227646206318918,
        "smoothedEle": 35.55748066970649,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.14531,
        "lng": 119.911196,
        "ele": 37.5,
        "distanceKm": 8.12166721213514,
        "gradePct": 2.3846002324989115,
        "smoothedEle": 36.5925246384605,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.14576,
        "lng": 119.91086,
        "ele": 41,
        "distanceKm": 8.18190523557203,
        "gradePct": 2.6387994844553133,
        "smoothedEle": 37.999637699008495,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146129,
        "lng": 119.91104,
        "ele": 43,
        "distanceKm": 8.226697610713774,
        "gradePct": 2.4959534479950083,
        "smoothedEle": 38.86867999860259,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146337,
        "lng": 119.91134,
        "ele": 45,
        "distanceKm": 8.264534569376503,
        "gradePct": 2.296227135926452,
        "smoothedEle": 39.57836609264717,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146375,
        "lng": 119.911778,
        "ele": 43.5,
        "distanceKm": 8.308457970267733,
        "gradePct": 2.224801085942734,
        "smoothedEle": 40.679169930989765,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.14656,
        "lng": 119.912057,
        "ele": 43,
        "distanceKm": 8.343080596399826,
        "gradePct": 2.1910046488088963,
        "smoothedEle": 41.47473382562049,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146696,
        "lng": 119.912404,
        "ele": 39,
        "distanceKm": 8.380874295423302,
        "gradePct": 1.9601599492764767,
        "smoothedEle": 41.89587564292299,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146786,
        "lng": 119.912529,
        "ele": 39,
        "distanceKm": 8.396868909840808,
        "gradePct": 1.8349488309691033,
        "smoothedEle": 41.95985410059302,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146805,
        "lng": 119.912566,
        "ele": 38.75,
        "distanceKm": 8.401123703297378,
        "gradePct": 1.802183586193876,
        "smoothedEle": 41.97687327441929,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146913,
        "lng": 119.912631,
        "ele": 41,
        "distanceKm": 8.414773339470987,
        "gradePct": 1.555839840502893,
        "smoothedEle": 41.749010123595255,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146978,
        "lng": 119.912886,
        "ele": 37.5,
        "distanceKm": 8.441232749267353,
        "gradePct": 1.0098279816630402,
        "smoothedEle": 41.160963204473084,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.147229,
        "lng": 119.913216,
        "ele": 39,
        "distanceKm": 8.4844063786101,
        "gradePct": -0.4552235941122137,
        "smoothedEle": 39.16594418104752,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147454,
        "lng": 119.913704,
        "ele": 44.25,
        "distanceKm": 8.539166031512195,
        "gradePct": -2.679092835662156,
        "smoothedEle": 36.02659869535262,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147531,
        "lng": 119.91388,
        "ele": 46.25,
        "distanceKm": 8.558708991037868,
        "gradePct": -3.3414716139744463,
        "smoothedEle": 34.96594054037232,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147576,
        "lng": 119.914014,
        "ele": 47.25,
        "distanceKm": 8.572989615660571,
        "gradePct": -3.8030440751409844,
        "smoothedEle": 34.2019271230577,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147561,
        "lng": 119.914085,
        "ele": 46.75,
        "distanceKm": 8.580270153906975,
        "gradePct": -4.036112195295381,
        "smoothedEle": 33.8169191974483,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147529,
        "lng": 119.914141,
        "ele": 45.75,
        "distanceKm": 8.586896280505984,
        "gradePct": -4.195900921086495,
        "smoothedEle": 33.52816174108076,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147216,
        "lng": 119.913802,
        "ele": 39.5,
        "distanceKm": 8.635438036419542,
        "gradePct": -4.595858112683042,
        "smoothedEle": 32.09803152356882,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146906529888476,
        "lng": 119.9136236713472,
        "ele": 29.887754419924356,
        "distanceKm": 8.674180740701685,
        "gradePct": -3.894530360626326,
        "smoothedEle": 31.84940204265468,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146594,
        "lng": 119.913452,
        "ele": 19.25,
        "distanceKm": 8.712927551836747,
        "gradePct": -2.6130999307863996,
        "smoothedEle": 32.30463869570672,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146376,
        "lng": 119.913411,
        "ele": 16.75,
        "distanceKm": 8.737511114350953,
        "gradePct": -1.755084029895943,
        "smoothedEle": 32.61130626833057,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146135,
        "lng": 119.913144,
        "ele": 15.25,
        "distanceKm": 8.775305463648852,
        "gradePct": -0.6892935573034531,
        "smoothedEle": 32.700873811609455,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146376,
        "lng": 119.913411,
        "ele": 16.75,
        "distanceKm": 8.813099812946751,
        "gradePct": -0.30661300180096984,
        "smoothedEle": 32.14293104082487,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14670785508257,
        "lng": 119.91351454011578,
        "ele": 23.125349054590142,
        "distanceKm": 8.851420441627676,
        "gradePct": -0.29655817398818235,
        "smoothedEle": 31.40234884254251,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14702,
        "lng": 119.913686,
        "ele": 33.75,
        "distanceKm": 8.890119517475137,
        "gradePct": -0.19109463486206016,
        "smoothedEle": 31.654477613043408,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147349,
        "lng": 119.913915,
        "ele": 42.5,
        "distanceKm": 8.933256628624138,
        "gradePct": 0.6846230238273445,
        "smoothedEle": 33.92747974727797,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.147529,
        "lng": 119.914141,
        "ele": 45.75,
        "distanceKm": 8.963414280874629,
        "gradePct": 1.9913343802166708,
        "smoothedEle": 36.65536206232234,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.147474,
        "lng": 119.914181,
        "ele": 45.25,
        "distanceKm": 8.970717924551373,
        "gradePct": 2.3524829125648146,
        "smoothedEle": 37.39496778382216,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.147346,
        "lng": 119.91421,
        "ele": 45,
        "distanceKm": 8.98524226543066,
        "gradePct": 3.1825611197118784,
        "smoothedEle": 38.91930304475387,
        "gradeBand": "hard"
      },
      {
        "lat": 26.147234,
        "lng": 119.914198,
        "ele": 43.5,
        "distanceKm": 8.997753582531077,
        "gradePct": 3.977090545694729,
        "smoothedEle": 40.32366235673941,
        "gradeBand": "hard"
      },
      {
        "lat": 26.147062,
        "lng": 119.91412,
        "ele": 40,
        "distanceKm": 9.018403112160609,
        "gradePct": 5.352113851920427,
        "smoothedEle": 42.74466749843246,
        "gradeBand": "hard"
      },
      {
        "lat": 26.146663,
        "lng": 119.914132,
        "ele": 36,
        "distanceKm": 9.062786114966503,
        "gradePct": 8.521289686400472,
        "smoothedEle": 48.51897683748953,
        "gradeBand": "steep"
      },
      {
        "lat": 26.146376,
        "lng": 119.914205,
        "ele": 37.25,
        "distanceKm": 9.095520399851079,
        "gradePct": 10.556142118969467,
        "smoothedEle": 53.05134783368436,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146303,
        "lng": 119.914291,
        "ele": 40,
        "distanceKm": 9.107334740206973,
        "gradePct": 11.035786761424124,
        "smoothedEle": 54.633164221782465,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.14627,
        "lng": 119.914387,
        "ele": 43.5,
        "distanceKm": 9.117595696161816,
        "gradePct": 11.454212148730777,
        "smoothedEle": 56.0106903954526,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146298,
        "lng": 119.9145,
        "ele": 47.75,
        "distanceKm": 9.129296805549812,
        "gradePct": 11.84077014183768,
        "smoothedEle": 57.400367062328556,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146398,
        "lng": 119.914719,
        "ele": 56.5,
        "distanceKm": 9.153822226683644,
        "gradePct": 12.20611651047313,
        "smoothedEle": 60.19995476514309,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146446,
        "lng": 119.914908,
        "ele": 63.75,
        "distanceKm": 9.173428049010912,
        "gradePct": 12.36331246266378,
        "smoothedEle": 62.40602133207472,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146367,
        "lng": 119.915218,
        "ele": 69.25,
        "distanceKm": 9.205593932295246,
        "gradePct": 12.212199702111,
        "smoothedEle": 65.66728497971106,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146277,
        "lng": 119.915367,
        "ele": 70,
        "distanceKm": 9.223520111706955,
        "gradePct": 11.911459078526914,
        "smoothedEle": 67.23331659752375,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146347,
        "lng": 119.915683,
        "ele": 74.5,
        "distanceKm": 9.256008377623832,
        "gradePct": 11.310376883429466,
        "smoothedEle": 70.25793465632258,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146542,
        "lng": 119.915937,
        "ele": 80.75,
        "distanceKm": 9.289369275034122,
        "gradePct": 10.993099841274642,
        "smoothedEle": 74.18586617318148,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146616,
        "lng": 119.916301,
        "ele": 88,
        "distanceKm": 9.326622564747758,
        "gradePct": 11.105670552848988,
        "smoothedEle": 79.2941032366485,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146565,
        "lng": 119.916459,
        "ele": 89.75,
        "distanceKm": 9.343382159268657,
        "gradePct": 11.29542215017212,
        "smoothedEle": 81.59906073846494,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146498,
        "lng": 119.916563,
        "ele": 90.25,
        "distanceKm": 9.356159754395877,
        "gradePct": 11.513348646304136,
        "smoothedEle": 83.48967299353029,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146321,
        "lng": 119.91671,
        "ele": 90.25,
        "distanceKm": 9.380708902293106,
        "gradePct": 11.851683736618433,
        "smoothedEle": 86.84758653870192,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146097,
        "lng": 119.917031,
        "ele": 95.25,
        "distanceKm": 9.42129252813589,
        "gradePct": 12.431254344102145,
        "smoothedEle": 91.90122351233899,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145972,
        "lng": 119.917073,
        "ele": 93.75,
        "distanceKm": 9.435810391954332,
        "gradePct": 12.589530161664714,
        "smoothedEle": 93.55658706980431,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145642,
        "lng": 119.91695,
        "ele": 89.25,
        "distanceKm": 9.474504246400079,
        "gradePct": 12.925797847710118,
        "smoothedEle": 98.28724472808017,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145599,
        "lng": 119.916952,
        "ele": 89.5,
        "distanceKm": 9.479289800647416,
        "gradePct": 12.9347932942493,
        "smoothedEle": 98.86868956913172,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145567,
        "lng": 119.916976,
        "ele": 90.25,
        "distanceKm": 9.483579330007895,
        "gradePct": 12.94285635863979,
        "smoothedEle": 99.38986738642993,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145527,
        "lng": 119.917031,
        "ele": 91.75,
        "distanceKm": 9.490644918323726,
        "gradePct": 12.95909490076173,
        "smoothedEle": 100.27897444182038,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145451,
        "lng": 119.917342,
        "ele": 99.25,
        "distanceKm": 9.522817842018123,
        "gradePct": 12.698946297585936,
        "smoothedEle": 104.17028551272804,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145296,
        "lng": 119.917671,
        "ele": 105,
        "distanceKm": 9.559905787837826,
        "gradePct": 12.244620395456112,
        "smoothedEle": 108.49130861329948,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145486,
        "lng": 119.918267,
        "ele": 112.25,
        "distanceKm": 9.623037053101958,
        "gradePct": 11.631180898001288,
        "smoothedEle": 115.36250045798292,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145685594481815,
        "lng": 119.91864363518542,
        "ele": 120.76126481715906,
        "distanceKm": 9.666694036209323,
        "gradePct": 11.407056397872585,
        "smoothedEle": 120.14649192098275,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.145865,
        "lng": 119.919033,
        "ele": 130.75,
        "distanceKm": 9.710380109575658,
        "gradePct": 11.188245918207079,
        "smoothedEle": 125.04243517588858,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146149,
        "lng": 119.91944,
        "ele": 135,
        "distanceKm": 9.761835812261905,
        "gradePct": 11.384362501572246,
        "smoothedEle": 131.4700970141486,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.14641,
        "lng": 119.9198,
        "ele": 141.5,
        "distanceKm": 9.808025907357825,
        "gradePct": 11.467907337137175,
        "smoothedEle": 136.66450561196805,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.146905,
        "lng": 119.920275,
        "ele": 146.25,
        "distanceKm": 9.880672624842076,
        "gradePct": 11.506067063734639,
        "smoothedEle": 144.72522087961778,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.147189,
        "lng": 119.920563,
        "ele": 148,
        "distanceKm": 9.923376839049013,
        "gradePct": 11.412047247201007,
        "smoothedEle": 149.49003450448657,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.14746013892402,
        "lng": 119.92089226548767,
        "ele": 152.91628117991164,
        "distanceKm": 9.96797671126274,
        "gradePct": 11.05222904870693,
        "smoothedEle": 154.26514339682217,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.147692,
        "lng": 119.921259,
        "ele": 155,
        "distanceKm": 10.01275045417396,
        "gradePct": 10.9433733615253,
        "smoothedEle": 159.07547735126658,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.1479505,
        "lng": 119.921684,
        "ele": 161,
        "distanceKm": 10.063993017613745,
        "gradePct": 10.434983088602914,
        "smoothedEle": 163.7444556087998,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.148209,
        "lng": 119.922109,
        "ele": 167,
        "distanceKm": 10.115235503268678,
        "gradePct": 9.35126645916029,
        "smoothedEle": 167.28418054879072,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.148488,
        "lng": 119.922657,
        "ele": 177.75,
        "distanceKm": 10.17811942850999,
        "gradePct": 7.111227400081188,
        "smoothedEle": 169.5772961760328,
        "gradeBand": "steep"
      },
      {
        "lat": 26.148749,
        "lng": 119.923086,
        "ele": 187.75,
        "distanceKm": 10.229848215825449,
        "gradePct": 4.821143206862163,
        "smoothedEle": 170.27563035176104,
        "gradeBand": "hard"
      },
      {
        "lat": 26.14868363047871,
        "lng": 119.92346234973176,
        "ele": 185.30245279052218,
        "distanceKm": 10.268110202430918,
        "gradePct": 3.178752170622997,
        "smoothedEle": 170.38636656291075,
        "gradeBand": "hard"
      },
      {
        "lat": 26.148671,
        "lng": 119.923852,
        "ele": 183.25,
        "distanceKm": 10.307028357762052,
        "gradePct": 1.7907263673234217,
        "smoothedEle": 170.29870064415132,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.14855,
        "lng": 119.924249,
        "ele": 176,
        "distanceKm": 10.348876668210742,
        "gradePct": 0.44649355993642975,
        "smoothedEle": 169.40392125873046,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.148265,
        "lng": 119.924615,
        "ele": 164.25,
        "distanceKm": 10.397238833815074,
        "gradePct": -1.057205576735104,
        "smoothedEle": 167.72099534830284,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148001,
        "lng": 119.92503,
        "ele": 158.5,
        "distanceKm": 10.448009229212039,
        "gradePct": -2.934211856919997,
        "smoothedEle": 164.459767468957,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147772,
        "lng": 119.925399,
        "ele": 155.75,
        "distanceKm": 10.49278628004329,
        "gradePct": -4.975275436940397,
        "smoothedEle": 160.3802310654305,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147695,
        "lng": 119.925802,
        "ele": 156.75,
        "distanceKm": 10.533913029366785,
        "gradePct": -6.682816444073633,
        "smoothedEle": 156.35823331997068,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147704,
        "lng": 119.926358,
        "ele": 151,
        "distanceKm": 10.589419462989897,
        "gradePct": -8.529492372051807,
        "smoothedEle": 150.93411218609685,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147585,
        "lng": 119.926791,
        "ele": 149.25,
        "distanceKm": 10.634619804248462,
        "gradePct": -9.01743250639679,
        "smoothedEle": 147.28496993521708,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14716,
        "lng": 119.92734,
        "ele": 142.5,
        "distanceKm": 10.706981566513567,
        "gradePct": -7.9763919253995965,
        "smoothedEle": 143.03921665620507,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147087,
        "lng": 119.927458,
        "ele": 140.75,
        "distanceKm": 10.721286027823258,
        "gradePct": -7.682172655831421,
        "smoothedEle": 142.2287478641285,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147081,
        "lng": 119.927682,
        "ele": 138.5,
        "distanceKm": 10.743654766774535,
        "gradePct": -7.17597812278552,
        "smoothedEle": 141.05430880144567,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147147,
        "lng": 119.92795,
        "ele": 136,
        "distanceKm": 10.77139387701729,
        "gradePct": -6.577637289257534,
        "smoothedEle": 139.54030840371234,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147096,
        "lng": 119.928148,
        "ele": 133.75,
        "distanceKm": 10.791954960283357,
        "gradePct": -6.223133863963619,
        "smoothedEle": 138.2831471031733,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146876,
        "lng": 119.928483,
        "ele": 132.25,
        "distanceKm": 10.833386354889475,
        "gradePct": -5.820245122678279,
        "smoothedEle": 135.74405929578543,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146652,
        "lng": 119.92912,
        "ele": 133.25,
        "distanceKm": 10.901673895398291,
        "gradePct": -6.119979283519037,
        "smoothedEle": 131.1106803284298,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146546,
        "lng": 119.929741,
        "ele": 130,
        "distanceKm": 10.964770569605594,
        "gradePct": -6.672816066402279,
        "smoothedEle": 126.55617633229629,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146569,
        "lng": 119.930139,
        "ele": 128.75,
        "distanceKm": 11.004579758589836,
        "gradePct": -6.975346704454889,
        "smoothedEle": 123.55875365941176,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146773,
        "lng": 119.930523,
        "ele": 125.25,
        "distanceKm": 11.049118551222787,
        "gradePct": -7.056273951360777,
        "smoothedEle": 120.56406589630208,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146832,
        "lng": 119.930709,
        "ele": 122.25,
        "distanceKm": 11.068809414290156,
        "gradePct": -6.96976918104215,
        "smoothedEle": 119.40103038237115,
        "gradeBand": "descent"
      },
      {
        "lat": 26.146857,
        "lng": 119.930837,
        "ele": 120.25,
        "distanceKm": 11.08188481319755,
        "gradePct": -6.898828503143004,
        "smoothedEle": 118.65573264464965,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147316,
        "lng": 119.931349,
        "ele": 111.75,
        "distanceKm": 11.154111784388405,
        "gradePct": -6.75007589667157,
        "smoothedEle": 113.82540708526804,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147492,
        "lng": 119.93168949999999,
        "ele": 106.87500000000011,
        "distanceKm": 11.193330807829897,
        "gradePct": -6.8704530912279544,
        "smoothedEle": 110.66483433889243,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147668,
        "lng": 119.93203,
        "ele": 102,
        "distanceKm": 11.232549786856694,
        "gradePct": -7.331639916800212,
        "smoothedEle": 107.01483233481089,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147843,
        "lng": 119.932289,
        "ele": 101,
        "distanceKm": 11.264907077907962,
        "gradePct": -7.842827778796931,
        "smoothedEle": 103.94586527023256,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148201,
        "lng": 119.932537,
        "ele": 103.75,
        "distanceKm": 11.311783864119008,
        "gradePct": -8.382271258434608,
        "smoothedEle": 99.89163030288428,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148403,
        "lng": 119.932983,
        "ele": 101,
        "distanceKm": 11.3616468824721,
        "gradePct": -8.367123424861973,
        "smoothedEle": 96.48392365607855,
        "gradeBand": "descent"
      },
      {
        "lat": 26.1485135,
        "lng": 119.93350650000001,
        "ele": 92.37499999999986,
        "distanceKm": 11.415325135927533,
        "gradePct": -7.710869611125147,
        "smoothedEle": 93.19614377759916,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148624,
        "lng": 119.93403,
        "ele": 83.75,
        "distanceKm": 11.469003341220334,
        "gradePct": -6.5551676300713835,
        "smoothedEle": 90.48125627891463,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148598,
        "lng": 119.934225,
        "ele": 80.75,
        "distanceKm": 11.488680751125456,
        "gradePct": -6.0928759054922494,
        "smoothedEle": 89.70399858766234,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14856,
        "lng": 119.934278,
        "ele": 81.25,
        "distanceKm": 11.495451285107599,
        "gradePct": -5.93381219507414,
        "smoothedEle": 89.43656249536768,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148472,
        "lng": 119.934356,
        "ele": 82,
        "distanceKm": 11.50795585783566,
        "gradePct": -5.630808275689268,
        "smoothedEle": 88.96108672351596,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148259,
        "lng": 119.934472,
        "ele": 82.5,
        "distanceKm": 11.534319096956414,
        "gradePct": -5.16953537076478,
        "smoothedEle": 88.01247102953833,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148217,
        "lng": 119.934527,
        "ele": 82.25,
        "distanceKm": 11.541526655571856,
        "gradePct": -5.059831510413236,
        "smoothedEle": 87.73930436922106,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148192,
        "lng": 119.93471,
        "ele": 84,
        "distanceKm": 11.560003130994808,
        "gradePct": -4.810175713990904,
        "smoothedEle": 86.97590844479339,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148422,
        "lng": 119.93499,
        "ele": 88,
        "distanceKm": 11.597886838376189,
        "gradePct": -4.408999719652991,
        "smoothedEle": 85.44623579271888,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148722,
        "lng": 119.93541,
        "ele": 80.25,
        "distanceKm": 11.651461657750966,
        "gradePct": -4.084632729140374,
        "smoothedEle": 83.19919814988593,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148925,
        "lng": 119.935879,
        "ele": 82.25,
        "distanceKm": 11.70343261612633,
        "gradePct": -3.808884963089226,
        "smoothedEle": 81.51530922681006,
        "gradeBand": "descent"
      },
      {
        "lat": 26.149087,
        "lng": 119.936255,
        "ele": 82.25,
        "distanceKm": 11.745062005441753,
        "gradePct": -3.4831779880134714,
        "smoothedEle": 80.62687769408487,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14907290982293,
        "lng": 119.93664592116947,
        "ele": 83.26374845578701,
        "distanceKm": 11.784112973684087,
        "gradePct": -3.11093319690669,
        "smoothedEle": 79.78053207645902,
        "gradeBand": "descent"
      },
      {
        "lat": 26.149014,
        "lng": 119.937035,
        "ele": 82.75,
        "distanceKm": 11.82349718662231,
        "gradePct": -2.734087534909288,
        "smoothedEle": 78.90391026888703,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148836,
        "lng": 119.937626,
        "ele": 77.25,
        "distanceKm": 11.885719461032181,
        "gradePct": -2.3959885818863085,
        "smoothedEle": 77.29724846920286,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14879411215962,
        "lng": 119.93801286172281,
        "ele": 74.51879388639652,
        "distanceKm": 11.924613779378209,
        "gradePct": -1.9819326223109996,
        "smoothedEle": 77.0994072446278,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148762,
        "lng": 119.938401,
        "ele": 72.25,
        "distanceKm": 11.963519835614342,
        "gradePct": -1.6442293946641713,
        "smoothedEle": 76.93838519546381,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148663,
        "lng": 119.938816,
        "ele": 71,
        "distanceKm": 12.006380697862463,
        "gradePct": -1.1923418786480624,
        "smoothedEle": 76.90020879348843,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148431,
        "lng": 119.939118,
        "ele": 72,
        "distanceKm": 12.04605641855696,
        "gradePct": -0.763708040798906,
        "smoothedEle": 76.79398484439918,
        "gradeBand": "descent"
      },
      {
        "lat": 26.148084,
        "lng": 119.939119,
        "ele": 72.75,
        "distanceKm": 12.08464124050362,
        "gradePct": -0.3116065018751979,
        "smoothedEle": 76.70187655212605,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14799,
        "lng": 119.939123,
        "ele": 72.75,
        "distanceKm": 12.095101200793982,
        "gradePct": -0.28428517306884615,
        "smoothedEle": 76.68095663154534,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147902,
        "lng": 119.939171,
        "ele": 73.5,
        "distanceKm": 12.105996358100674,
        "gradePct": -0.2330455246887561,
        "smoothedEle": 76.72801623321492,
        "gradeBand": "descent"
      },
      {
        "lat": 26.147813,
        "lng": 119.939244,
        "ele": 74,
        "distanceKm": 12.118285840122189,
        "gradePct": -0.0973288690901132,
        "smoothedEle": 76.93693742758067,
        "gradeBand": "descent"
      },
      {
        "lat": 26.14751,
        "lng": 119.93954,
        "ele": 78.25,
        "distanceKm": 12.163097541045927,
        "gradePct": 0.6373154322309939,
        "smoothedEle": 78.21476382732591,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.147222,
        "lng": 119.939765,
        "ele": 80.5,
        "distanceKm": 12.202211921079057,
        "gradePct": 1.5421896415273135,
        "smoothedEle": 79.98830122858622,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146843,
        "lng": 119.939906,
        "ele": 82.25,
        "distanceKm": 12.246642836992702,
        "gradePct": 2.7682759175014793,
        "smoothedEle": 82.32913680250886,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.146473,
        "lng": 119.940003,
        "ele": 81.5,
        "distanceKm": 12.288908943130174,
        "gradePct": 4.024298277202256,
        "smoothedEle": 84.74193770127744,
        "gradeBand": "hard"
      },
      {
        "lat": 26.14613,
        "lng": 119.940184,
        "ele": 81.75,
        "distanceKm": 12.331111584067127,
        "gradePct": 4.966688265693481,
        "smoothedEle": 87.23604598590197,
        "gradeBand": "hard"
      },
      {
        "lat": 26.145892,
        "lng": 119.940434,
        "ele": 85.75,
        "distanceKm": 12.367485747315406,
        "gradePct": 5.57602083325799,
        "smoothedEle": 89.56577702136642,
        "gradeBand": "hard"
      },
      {
        "lat": 26.145805,
        "lng": 119.940669,
        "ele": 91.5,
        "distanceKm": 12.3928592991127,
        "gradePct": 5.819430000088167,
        "smoothedEle": 91.20309149167015,
        "gradeBand": "hard"
      },
      {
        "lat": 26.145835,
        "lng": 119.940805,
        "ele": 95,
        "distanceKm": 12.406838280805085,
        "gradePct": 5.898497685214053,
        "smoothedEle": 92.02903560825503,
        "gradeBand": "hard"
      },
      {
        "lat": 26.145913,
        "lng": 119.94088,
        "ele": 96.25,
        "distanceKm": 12.418295551372774,
        "gradePct": 5.951860855199918,
        "smoothedEle": 92.73938638345176,
        "gradeBand": "hard"
      },
      {
        "lat": 26.146193,
        "lng": 119.940908,
        "ele": 97.25,
        "distanceKm": 12.449555366337783,
        "gradePct": 6.0553193462685115,
        "smoothedEle": 94.60604000492631,
        "gradeBand": "steep"
      },
      {
        "lat": 26.146577,
        "lng": 119.940919,
        "ele": 99,
        "distanceKm": 12.492268391873562,
        "gradePct": 6.082951133390964,
        "smoothedEle": 97.10637799214115,
        "gradeBand": "steep"
      },
      {
        "lat": 26.14699,
        "lng": 119.941268,
        "ele": 101,
        "distanceKm": 12.549909631931245,
        "gradePct": 6.209184617950542,
        "smoothedEle": 100.85841255409228,
        "gradeBand": "steep"
      },
      {
        "lat": 26.147221,
        "lng": 119.941637,
        "ele": 105,
        "distanceKm": 12.594813725681382,
        "gradePct": 6.440819848824178,
        "smoothedEle": 104.20020792154565,
        "gradeBand": "steep"
      },
      {
        "lat": 26.147295,
        "lng": 119.941782,
        "ele": 105.5,
        "distanceKm": 12.611462557036397,
        "gradePct": 6.529453758973036,
        "smoothedEle": 105.37464825254247,
        "gradeBand": "steep"
      },
      {
        "lat": 26.147415,
        "lng": 119.941888,
        "ele": 106.75,
        "distanceKm": 12.628491737534874,
        "gradePct": 6.596452015938299,
        "smoothedEle": 106.54114711668817,
        "gradeBand": "steep"
      },
      {
        "lat": 26.147819,
        "lng": 119.94192,
        "ele": 109.25,
        "distanceKm": 12.67352796002771,
        "gradePct": 6.441971563980937,
        "smoothedEle": 108.89329244903071,
        "gradeBand": "steep"
      },
      {
        "lat": 26.148254,
        "lng": 119.941928,
        "ele": 110.5,
        "distanceKm": 12.721904410741626,
        "gradePct": 5.931398393160947,
        "smoothedEle": 110.89826872162486,
        "gradeBand": "hard"
      },
      {
        "lat": 26.148766,
        "lng": 119.942171,
        "ele": 115.25,
        "distanceKm": 12.783787719249842,
        "gradePct": 4.705580062750367,
        "smoothedEle": 112.79080461647237,
        "gradeBand": "hard"
      },
      {
        "lat": 26.149164,
        "lng": 119.942243,
        "ele": 119.5,
        "distanceKm": 12.828623080263394,
        "gradePct": 3.5771726292308856,
        "smoothedEle": 113.70235212423026,
        "gradeBand": "hard"
      },
      {
        "lat": 26.149489,
        "lng": 119.942234,
        "ele": 120,
        "distanceKm": 12.864772644900967,
        "gradePct": 2.872976100325022,
        "smoothedEle": 114.18197331410562,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.15002,
        "lng": 119.942022,
        "ele": 119.25,
        "distanceKm": 12.927494495513114,
        "gradePct": 1.8221697591079,
        "smoothedEle": 114.71356606902457,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.150366,
        "lng": 119.941857,
        "ele": 116.25,
        "distanceKm": 12.969344760720999,
        "gradePct": 1.0065581846447564,
        "smoothedEle": 114.36222163091888,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.150759,
        "lng": 119.941867,
        "ele": 114,
        "distanceKm": 13.01305582475815,
        "gradePct": 0.04275061347834723,
        "smoothedEle": 113.47135555485725,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.151317,
        "lng": 119.942154,
        "ele": 110.75,
        "distanceKm": 13.081396284403155,
        "gradePct": -1.7829148896606448,
        "smoothedEle": 110.75703552431433,
        "gradeBand": "descent"
      },
      {
        "lat": 26.151568,
        "lng": 119.942528,
        "ele": 114.5,
        "distanceKm": 13.128006152042683,
        "gradePct": -3.046152638937269,
        "smoothedEle": 108.61696529445506,
        "gradeBand": "descent"
      },
      {
        "lat": 26.151839,
        "lng": 119.942897,
        "ele": 108.25,
        "distanceKm": 13.17559340668404,
        "gradePct": -3.741761100437741,
        "smoothedEle": 106.75134708041719,
        "gradeBand": "descent"
      },
      {
        "lat": 26.152025378303403,
        "lng": 119.9432217167275,
        "ele": 103.8942814035825,
        "distanceKm": 13.214063454676394,
        "gradePct": -4.046074424401944,
        "smoothedEle": 105.33918604940763,
        "gradeBand": "descent"
      },
      {
        "lat": 26.152154,
        "lng": 119.943581,
        "ele": 100.25,
        "distanceKm": 13.25267095219691,
        "gradePct": -3.9098940469171453,
        "smoothedEle": 104.0781491012681,
        "gradeBand": "descent"
      },
      {
        "lat": 26.152270184043783,
        "lng": 119.94398411369886,
        "ele": 96.55907043238476,
        "distanceKm": 13.294929598574349,
        "gradePct": -3.6691210405940056,
        "smoothedEle": 102.79741766508091,
        "gradeBand": "descent"
      },
      {
        "lat": 26.152387,
        "lng": 119.944387,
        "ele": 95.75,
        "distanceKm": 13.337188142201024,
        "gradePct": -3.3151636354942844,
        "smoothedEle": 101.62666583743437,
        "gradeBand": "descent"
      },
      {
        "lat": 26.152586,
        "lng": 119.944912,
        "ele": 100,
        "distanceKm": 13.394069627183447,
        "gradePct": -3.162546252976935,
        "smoothedEle": 99.74802826721287,
        "gradeBand": "descent"
      },
      {
        "lat": 26.152777,
        "lng": 119.945225,
        "ele": 99.75,
        "distanceKm": 13.431846053788266,
        "gradePct": -2.8816218658890267,
        "smoothedEle": 98.99510916463622,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153151,
        "lng": 119.945555,
        "ele": 99.25,
        "distanceKm": 13.484896618236922,
        "gradePct": -2.5906533954294084,
        "smoothedEle": 97.92018008652063,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153541,
        "lng": 119.94584,
        "ele": 98.75,
        "distanceKm": 13.536759842806358,
        "gradePct": -2.518702276573217,
        "smoothedEle": 96.60112710492564,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153688,
        "lng": 119.945895,
        "ele": 97.25,
        "distanceKm": 13.55400271286551,
        "gradePct": -2.446140694256778,
        "smoothedEle": 96.17904584995125,
        "gradeBand": "descent"
      },
      {
        "lat": 26.153833,
        "lng": 119.945881,
        "ele": 97,
        "distanceKm": 13.570186437493499,
        "gradePct": -2.3666641930721695,
        "smoothedEle": 95.80349534697676,
        "gradeBand": "descent"
      },
      {
        "lat": 26.154087,
        "lng": 119.945751,
        "ele": 95.75,
        "distanceKm": 13.601267894941081,
        "gradePct": -2.20897680446003,
        "smoothedEle": 95.18660652783991,
        "gradeBand": "descent"
      },
      {
        "lat": 26.154404,
        "lng": 119.945661,
        "ele": 98.25,
        "distanceKm": 13.637643340843756,
        "gradePct": -2.2118952730724795,
        "smoothedEle": 94.45385196201187,
        "gradeBand": "descent"
      },
      {
        "lat": 26.154668,
        "lng": 119.945915,
        "ele": 100.25,
        "distanceKm": 13.676430600848443,
        "gradePct": -2.352996811572021,
        "smoothedEle": 93.38572786658854,
        "gradeBand": "descent"
      },
      {
        "lat": 26.154971,
        "lng": 119.946483,
        "ele": 88.75,
        "distanceKm": 13.742378393703833,
        "gradePct": -2.5179758321666785,
        "smoothedEle": 91.42764120146572,
        "gradeBand": "descent"
      },
      {
        "lat": 26.155253,
        "lng": 119.946723,
        "ele": 84.25,
        "distanceKm": 13.781838065764147,
        "gradePct": -2.636964608142494,
        "smoothedEle": 90.29831059137149,
        "gradeBand": "descent"
      },
      {
        "lat": 26.155604,
        "lng": 119.946785,
        "ele": 84.75,
        "distanceKm": 13.821355061857446,
        "gradePct": -2.7041665790501406,
        "smoothedEle": 89.37363329159741,
        "gradeBand": "descent"
      },
      {
        "lat": 26.155966,
        "lng": 119.946724,
        "ele": 88.25,
        "distanceKm": 13.862065515250434,
        "gradePct": -2.531008233349093,
        "smoothedEle": 88.71929732315995,
        "gradeBand": "descent"
      },
      {
        "lat": 26.156536,
        "lng": 119.946732,
        "ele": 85.75,
        "distanceKm": 13.925451740248665,
        "gradePct": -2.0073698681695262,
        "smoothedEle": 87.91547862473527,
        "gradeBand": "descent"
      },
      {
        "lat": 26.15685,
        "lng": 119.946849,
        "ele": 84.25,
        "distanceKm": 13.962268031916894,
        "gradePct": -1.7451007776627554,
        "smoothedEle": 87.36820082369441,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157457,
        "lng": 119.947107,
        "ele": 84.75,
        "distanceKm": 14.034508666666037,
        "gradePct": -0.6922920488273856,
        "smoothedEle": 87.77763232128369,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157773,
        "lng": 119.947311,
        "ele": 87.75,
        "distanceKm": 14.075119125237253,
        "gradePct": -0.02064527414675162,
        "smoothedEle": 88.51247024402491,
        "gradeBand": "descent"
      },
      {
        "lat": 26.158291,
        "lng": 119.947653,
        "ele": 92.5,
        "distanceKm": 14.142072632263623,
        "gradePct": 0.7672209996515519,
        "smoothedEle": 89.20284942753506,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158418,
        "lng": 119.947675,
        "ele": 92,
        "distanceKm": 14.156364091588047,
        "gradePct": 0.9214817971216751,
        "smoothedEle": 89.29892707230186,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158541,
        "lng": 119.947633,
        "ele": 91.5,
        "distanceKm": 14.170669052465541,
        "gradePct": 0.9451325248098604,
        "smoothedEle": 89.30607955274061,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.158701,
        "lng": 119.947523,
        "ele": 92,
        "distanceKm": 14.19157499853671,
        "gradePct": 0.8911156724633034,
        "smoothedEle": 89.31653252577621,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.159109,
        "lng": 119.94746,
        "ele": 88.5,
        "distanceKm": 14.237376249017094,
        "gradePct": 0.5763665274462417,
        "smoothedEle": 88.98225369096694,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.159502,
        "lng": 119.947609,
        "ele": 93.25,
        "distanceKm": 14.283536928619117,
        "gradePct": -0.14286195917223715,
        "smoothedEle": 88.31354500858487,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159903,
        "lng": 119.947945,
        "ele": 94.25,
        "distanceKm": 14.339329091969583,
        "gradePct": -1.2303394337936426,
        "smoothedEle": 86.71388103200147,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160073803549352,
        "lng": 119.94832090766738,
        "ele": 90.63690557953586,
        "distanceKm": 14.381379954914147,
        "gradePct": -2.30306932882769,
        "smoothedEle": 84.70529634630955,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160199,
        "lng": 119.948722,
        "ele": 86,
        "distanceKm": 14.423762479140105,
        "gradePct": -3.518982203847569,
        "smoothedEle": 82.04364890957265,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160412,
        "lng": 119.949188,
        "ele": 79.5,
        "distanceKm": 14.475954857532177,
        "gradePct": -5.090386551473021,
        "smoothedEle": 78.2426099065086,
        "gradeBand": "descent"
      },
      {
        "lat": 26.16057254518264,
        "lng": 119.94953338601746,
        "ele": 76.94535652099164,
        "distanceKm": 14.51477423831848,
        "gradePct": -6.107215865675145,
        "smoothedEle": 75.20348213388634,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160705,
        "lng": 119.949894,
        "ele": 73.5,
        "distanceKm": 14.553662105116311,
        "gradePct": -7.081733993772243,
        "smoothedEle": 71.86578807625379,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160824,
        "lng": 119.95027,
        "ele": 69,
        "distanceKm": 14.593453106424558,
        "gradePct": -7.922955285852523,
        "smoothedEle": 68.10118476232641,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160859,
        "lng": 119.950653,
        "ele": 63.25,
        "distanceKm": 14.631875742235813,
        "gradePct": -8.60353361755376,
        "smoothedEle": 64.24571322932084,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160833,
        "lng": 119.951211,
        "ele": 55.5,
        "distanceKm": 14.68764150070944,
        "gradePct": -9.352199552383782,
        "smoothedEle": 58.6232760158344,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160858,
        "lng": 119.951841,
        "ele": 49.75,
        "distanceKm": 14.750579594686954,
        "gradePct": -9.863464029330911,
        "smoothedEle": 52.403427801578275,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160863,
        "lng": 119.951917,
        "ele": 50.25,
        "distanceKm": 14.758185064810313,
        "gradePct": -9.89517940366208,
        "smoothedEle": 51.647514702998144,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160782,
        "lng": 119.952071,
        "ele": 50.75,
        "distanceKm": 14.7759995240209,
        "gradePct": -9.937767532559725,
        "smoothedEle": 49.876922899600544,
        "gradeBand": "descent"
      },
      {
        "lat": 26.160373,
        "lng": 119.95222,
        "ele": 46.75,
        "distanceKm": 14.823847855281771,
        "gradePct": -9.964794959409378,
        "smoothedEle": 45.12167162773722,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159897683478032,
        "lng": 119.95224433963858,
        "ele": 41.035764296050004,
        "distanceKm": 14.876756510183386,
        "gradePct": -9.755022160018765,
        "smoothedEle": 40.21068248777482,
        "gradeBand": "descent"
      },
      {
        "lat": 26.159422,
        "lng": 119.95226,
        "ele": 35,
        "distanceKm": 14.929673260458891,
        "gradePct": -9.364110067250515,
        "smoothedEle": 35.74127318316222,
        "gradeBand": "descent"
      },
      {
        "lat": 26.1590675,
        "lng": 119.952291,
        "ele": 31.12499999999991,
        "distanceKm": 14.96921315311499,
        "gradePct": -8.995966678133453,
        "smoothedEle": 32.55949178663933,
        "gradeBand": "descent"
      },
      {
        "lat": 26.158713,
        "lng": 119.952322,
        "ele": 27.25,
        "distanceKm": 15.008753046506726,
        "gradePct": -8.508470598862074,
        "smoothedEle": 29.604879060792314,
        "gradeBand": "descent"
      },
      {
        "lat": 26.15825,
        "lng": 119.952347,
        "ele": 23.74999999999994,
        "distanceKm": 15.060296797495377,
        "gradePct": -8.034238181564904,
        "smoothedEle": 25.669999080410417,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157787,
        "lng": 119.952372,
        "ele": 20.25,
        "distanceKm": 15.111840548963363,
        "gradePct": -6.932458858861329,
        "smoothedEle": 23.382526692312485,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157448,
        "lng": 119.952446,
        "ele": 18.25,
        "distanceKm": 15.150252419867678,
        "gradePct": -6.18285249687431,
        "smoothedEle": 21.719559986951825,
        "gradeBand": "descent"
      },
      {
        "lat": 26.157017,
        "lng": 119.95244,
        "ele": 15.25,
        "distanceKm": 15.198181240705855,
        "gradePct": -5.246954481782759,
        "smoothedEle": 19.900946732848293,
        "gradeBand": "descent"
      },
      {
        "lat": 26.15663,
        "lng": 119.952247,
        "ele": 12.25,
        "distanceKm": 15.245328397287867,
        "gradePct": -4.270565436655883,
        "smoothedEle": 18.27156459968061,
        "gradeBand": "descent"
      },
      {
        "lat": 26.156489,
        "lng": 119.952026,
        "ele": 11.5,
        "distanceKm": 15.272390381353388,
        "gradePct": -3.8562052255420762,
        "smoothedEle": 17.420884599051558,
        "gradeBand": "descent"
      },
      {
        "lat": 26.156465,
        "lng": 119.952,
        "ele": 11.25,
        "distanceKm": 15.276112736390454,
        "gradePct": -3.838501692368776,
        "smoothedEle": 17.2910963871446,
        "gradeBand": "descent"
      },
      {
        "lat": 26.156335,
        "lng": 119.951935,
        "ele": 10.75,
        "distanceKm": 15.291957148638025,
        "gradePct": -3.734574428968622,
        "smoothedEle": 16.795787979743846,
        "gradeBand": "descent"
      },
      {
        "lat": 26.156191,
        "lng": 119.951923,
        "ele": 10.5,
        "distanceKm": 15.30801397137205,
        "gradePct": -3.601604753483198,
        "smoothedEle": 16.349137781087517,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 15.30801397137205,
      "elevationGainM": 337.710147983219,
      "elevationLossM": 337.7047815132237,
      "minimumElevationM": 9,
      "maximumElevationM": 187.75,
      "maximumSustainedGradePct": 12.95909490076173
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 33,
        "startDistanceKm": 0,
        "endDistanceKm": 0.9694139935776491,
        "distanceKm": 0.9694139935776491,
        "gainM": 66.32323122682115,
        "averageGradePct": 6.84157972406128,
        "maximumGradePct": 9.408031995882721
      },
      {
        "startIndex": 82,
        "endIndex": 119,
        "startDistanceKm": 2.619751952761118,
        "endDistanceKm": 4.4124729123422775,
        "distanceKm": 1.7927209595811595,
        "gainM": 30.272794389386803,
        "averageGradePct": 1.6886506640977497,
        "maximumGradePct": 6.0687911223575455
      },
      {
        "startIndex": 126,
        "endIndex": 156,
        "startDistanceKm": 4.750841084332306,
        "endDistanceKm": 6.001926417577749,
        "distanceKm": 1.2510853332454435,
        "gainM": 31.46210656433368,
        "averageGradePct": 2.5147850213156726,
        "maximumGradePct": 8.594183564394758
      },
      {
        "startIndex": 228,
        "endIndex": 277,
        "startDistanceKm": 8.674180740701685,
        "endDistanceKm": 10.268110202430918,
        "distanceKm": 1.5939294617292337,
        "gainM": 139.835489489323,
        "averageGradePct": 8.773003626999735,
        "maximumGradePct": 12.95909490076173
      },
      {
        "startIndex": 317,
        "endIndex": 347,
        "startDistanceKm": 11.82349718662231,
        "endDistanceKm": 12.927494495513114,
        "distanceKm": 1.1039973088908042,
        "gainM": 38.03260943747922,
        "averageGradePct": 3.4449911364087407,
        "maximumGradePct": 6.596452015938299
      }
    ]
  },
  "lienchiang-beigan": {
    "routeId": "lienchiang-beigan",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:06:35.157Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "4902e796fdd0b0a3ce8340f14f4a25cd915d726e864b5bc2ea5932c6e195e89c",
      "roadPolicyAuditSha256": "d7ad80d59560272e5ab8bbc3e2e9ab4061169eaf91ed2659ff0e8b693565fb8c",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "SRTM 100/100 公尺為 8.11 公里、爬升 228 公尺、最大坡度 24.86%；500/200、750/300、1000/500 依序為 142/17.06%、119/13.44%、104/9.96%。採 500/200 保留北竿陡坡路感並減少崖岸像元雜訊；僅供行程規劃，並非道路測量。",
        "referenceUrl": "https://www.matsu-nsa.gov.tw/zh-TW/trips/3023",
        "referenceLabel": "馬祖國家風景區單車健行遊程"
      },
      "reviewedAt": "2026-08-01T05:09:19.375Z",
      "reviewerNote": "已移除白沙港、水庫、戰爭和平紀念館與遊客中心的港區、軍事或 service/footway 支線，坂里、橋仔、塘岐控制點均改為外圍公共主線。raw 的 service、track、權限禁制、ferry 與非法逆向均為 0；live OSM 五窗 5/5 於 0.05 公尺內命中環島北路、環島東路等完整公共道路 way。全線僅在北竿單島 bounds，北竿不跨島，不進港區、機場與軍事設施；最大持續坡度為高難度短坡，輪胎、煞車與天候應行前確認。"
    },
    "waypoints": [
      {
        "name": "坂里外環島公共主線",
        "lat": 26.216247,
        "lng": 119.97433,
        "role": "start"
      },
      {
        "name": "芹壁聚落上方主道路",
        "lat": 26.2245,
        "lng": 119.98245,
        "role": "via"
      },
      {
        "name": "橋仔聚落外公共道路",
        "lat": 26.234819,
        "lng": 119.993813,
        "role": "via"
      },
      {
        "name": "塘岐外環島公共主線",
        "lat": 26.23016,
        "lng": 119.996493,
        "role": "via"
      },
      {
        "name": "坂里外環島公共主線",
        "lat": 26.216247,
        "lng": 119.97433,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 26.216247,
        "lng": 119.97433,
        "ele": 14.75,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 22.566589290887215,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.216657,
        "lng": 119.974318,
        "ele": 16,
        "distanceKm": 0.04560569634941859,
        "gradePct": 6.8192714507508985,
        "smoothedEle": 25.67656552195926,
        "gradeBand": "steep"
      },
      {
        "lat": 26.217276,
        "lng": 119.974349,
        "ele": 19.5,
        "distanceKm": 0.11450488590200622,
        "gradePct": 5.8208513285221715,
        "smoothedEle": 29.23174846313694,
        "gradeBand": "hard"
      },
      {
        "lat": 26.217795,
        "lng": 119.974294,
        "ele": 23.75,
        "distanceKm": 0.1724753519892152,
        "gradePct": 4.800878448855554,
        "smoothedEle": 30.846921294125206,
        "gradeBand": "hard"
      },
      {
        "lat": 26.218147,
        "lng": 119.974021,
        "ele": 34,
        "distanceKm": 0.2201580440348706,
        "gradePct": 3.600846217391947,
        "smoothedEle": 31.142913467570835,
        "gradeBand": "hard"
      },
      {
        "lat": 26.218492670439275,
        "lng": 119.97389417936758,
        "ele": 41.53680903337212,
        "distanceKm": 0.2606233286384223,
        "gradePct": 2.63962301310856,
        "smoothedEle": 31.730718052555428,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.218857,
        "lng": 119.973847,
        "ele": 45.25,
        "distanceKm": 0.3014074435937645,
        "gradePct": 2.4177298025455727,
        "smoothedEle": 33.39138294213165,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.219516,
        "lng": 119.973902,
        "ele": 43.25,
        "distanceKm": 0.3748901082472922,
        "gradePct": 2.7680643832897402,
        "smoothedEle": 36.39803975450145,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.220001,
        "lng": 119.974313,
        "ele": 33.75,
        "distanceKm": 0.4426345188838751,
        "gradePct": 3.9447870156573166,
        "smoothedEle": 39.35898402794673,
        "gradeBand": "hard"
      },
      {
        "lat": 26.220277814009954,
        "lng": 119.97459948499619,
        "ele": 33.8629109328353,
        "distanceKm": 0.4846360051858982,
        "gradePct": 3.926381380714112,
        "smoothedEle": 40.56123916158561,
        "gradeBand": "hard"
      },
      {
        "lat": 26.220556907004976,
        "lng": 119.9748832424981,
        "ele": 35.806455466417646,
        "distanceKm": 0.5266396803279816,
        "gradePct": 3.436074425539104,
        "smoothedEle": 41.29594776269007,
        "gradeBand": "hard"
      },
      {
        "lat": 26.220836,
        "lng": 119.975167,
        "ele": 37.75,
        "distanceKm": 0.5686433097087077,
        "gradePct": 2.408835895205897,
        "smoothedEle": 40.960114126527635,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.220881,
        "lng": 119.975139,
        "ele": 37.5,
        "distanceKm": 0.5743738501006281,
        "gradePct": 2.2588112418282478,
        "smoothedEle": 40.8945387380654,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.221006,
        "lng": 119.975143,
        "ele": 37.75,
        "distanceKm": 0.5882789611759263,
        "gradePct": 1.8512033729334334,
        "smoothedEle": 40.68564086599221,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.221079,
        "lng": 119.975193,
        "ele": 38.75,
        "distanceKm": 0.5978060851842563,
        "gradePct": 1.5882186406757235,
        "smoothedEle": 40.57607893989642,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.221151,
        "lng": 119.975264,
        "ele": 40.25,
        "distanceKm": 0.6084952229604556,
        "gradePct": 1.301460058581835,
        "smoothedEle": 40.46975812429439,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.22148568995964,
        "lng": 119.97535690437728,
        "ele": 43.85245938763472,
        "distanceKm": 0.6468476272262053,
        "gradePct": 0.3617132115574613,
        "smoothedEle": 40.20300692464167,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.221838,
        "lng": 119.975386,
        "ele": 45.75,
        "distanceKm": 0.686130135875461,
        "gradePct": 0.028169963782257664,
        "smoothedEle": 40.64371372296687,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.222321,
        "lng": 119.97558,
        "ele": 49.25,
        "distanceKm": 0.7432174363780758,
        "gradePct": 0.3851545450120283,
        "smoothedEle": 41.93371192324497,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.22294,
        "lng": 119.975726,
        "ele": 40.5,
        "distanceKm": 0.8135710877686748,
        "gradePct": 1.566267659919323,
        "smoothedEle": 43.56698945073837,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.223086,
        "lng": 119.975793,
        "ele": 37.75,
        "distanceKm": 0.8311274288911299,
        "gradePct": 1.804255853000925,
        "smoothedEle": 43.9208568023942,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.223156,
        "lng": 119.97587,
        "ele": 37.5,
        "distanceKm": 0.8420627055994981,
        "gradePct": 1.9509673939559415,
        "smoothedEle": 44.13822211853082,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.22325,
        "lng": 119.976036,
        "ele": 38.75,
        "distanceKm": 0.861644325262003,
        "gradePct": 2.0463726716405053,
        "smoothedEle": 44.46175504222016,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.22338976027304,
        "lng": 119.97640017539894,
        "ele": 41.288266805194624,
        "distanceKm": 0.9011556590089852,
        "gradePct": 1.9411114216818102,
        "smoothedEle": 44.86546738368969,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.223503,
        "lng": 119.976776,
        "ele": 43.75,
        "distanceKm": 0.9407025460271483,
        "gradePct": 1.592282025746521,
        "smoothedEle": 45.0614471529505,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.223656,
        "lng": 119.977096,
        "ele": 46,
        "distanceKm": 0.9768734413838572,
        "gradePct": 1.1847588980282953,
        "smoothedEle": 45.084562252221005,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224032,
        "lng": 119.977622,
        "ele": 48,
        "distanceKm": 1.0439627889674075,
        "gradePct": 0.5492897292938431,
        "smoothedEle": 45.26819527885863,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224274260519724,
        "lng": 119.97791822210502,
        "ele": 47.68417146896625,
        "distanceKm": 1.0839472747830183,
        "gradePct": 0.601377046605812,
        "smoothedEle": 45.89239250759189,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.22451,
        "lng": 119.978221,
        "ele": 47.5,
        "distanceKm": 1.1239383747842129,
        "gradePct": 0.792266035741662,
        "smoothedEle": 46.56290218197204,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224762,
        "lng": 119.97857,
        "ele": 47.5,
        "distanceKm": 1.1686273355736934,
        "gradePct": 0.9440783154678736,
        "smoothedEle": 46.96744918904171,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224891,
        "lng": 119.978962,
        "ele": 47.25,
        "distanceKm": 1.2102771153368403,
        "gradePct": 0.9249138277594721,
        "smoothedEle": 47.02582048457129,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224797430165978,
        "lng": 119.97941600867735,
        "ele": 49.02791209930361,
        "distanceKm": 1.2567440426977745,
        "gradePct": 0.6628813010552508,
        "smoothedEle": 46.79348584776662,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224669,
        "lng": 119.979862,
        "ele": 47.75,
        "distanceKm": 1.303467395357706,
        "gradePct": 0.010674060992446503,
        "smoothedEle": 46.24102419241962,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224545,
        "lng": 119.980186,
        "ele": 47,
        "distanceKm": 1.338604612761367,
        "gradePct": -0.4607986227957356,
        "smoothedEle": 45.774071117867294,
        "gradeBand": "descent"
      },
      {
        "lat": 26.224659,
        "lng": 119.980613,
        "ele": 45.75,
        "distanceKm": 1.3830439919848494,
        "gradePct": -0.938095364229792,
        "smoothedEle": 45.111463103120684,
        "gradeBand": "descent"
      },
      {
        "lat": 26.224612,
        "lng": 119.981001,
        "ele": 44.75,
        "distanceKm": 1.4220980953690103,
        "gradePct": -1.2525625701538134,
        "smoothedEle": 44.46159044410281,
        "gradeBand": "descent"
      },
      {
        "lat": 26.224502,
        "lng": 119.981515,
        "ele": 43.5,
        "distanceKm": 1.4748082242302474,
        "gradePct": -1.5525130055658356,
        "smoothedEle": 43.47486712413089,
        "gradeBand": "descent"
      },
      {
        "lat": 26.224562,
        "lng": 119.982249,
        "ele": 41.75,
        "distanceKm": 1.548327840017142,
        "gradePct": -1.9519163102173003,
        "smoothedEle": 41.72526148781968,
        "gradeBand": "descent"
      },
      {
        "lat": 26.22466655053592,
        "lng": 119.98266821661437,
        "ele": 40.584269871585754,
        "distanceKm": 1.591730472275588,
        "gradePct": -2.171102915707135,
        "smoothedEle": 40.624711486375745,
        "gradeBand": "descent"
      },
      {
        "lat": 26.224801,
        "lng": 119.983079,
        "ele": 39.5,
        "distanceKm": 1.6353480490055363,
        "gradePct": -2.2940164587432688,
        "smoothedEle": 39.6255209817593,
        "gradeBand": "descent"
      },
      {
        "lat": 26.224935,
        "lng": 119.983261,
        "ele": 39,
        "distanceKm": 1.658834131989869,
        "gradePct": -2.312413366037238,
        "smoothedEle": 39.14907227965544,
        "gradeBand": "descent"
      },
      {
        "lat": 26.224963,
        "lng": 119.983283,
        "ele": 39,
        "distanceKm": 1.6626432542884122,
        "gradePct": -2.3100901733244616,
        "smoothedEle": 39.08241263943093,
        "gradeBand": "descent"
      },
      {
        "lat": 26.225383,
        "lng": 119.983527,
        "ele": 37.5,
        "distanceKm": 1.7153067833061992,
        "gradePct": -2.1500017025434137,
        "smoothedEle": 38.211086821363395,
        "gradeBand": "descent"
      },
      {
        "lat": 26.225488,
        "lng": 119.983632,
        "ele": 37.25,
        "distanceKm": 1.7309916154760936,
        "gradePct": -2.0574783901887423,
        "smoothedEle": 38.02286883532467,
        "gradeBand": "descent"
      },
      {
        "lat": 26.225615,
        "lng": 119.984003,
        "ele": 36.25,
        "distanceKm": 1.7706013174663868,
        "gradePct": -1.7906547106863901,
        "smoothedEle": 37.579168910140574,
        "gradeBand": "descent"
      },
      {
        "lat": 26.225731,
        "lng": 119.984542,
        "ele": 34.75,
        "distanceKm": 1.8258914784975473,
        "gradePct": -1.294493136596302,
        "smoothedEle": 37.25316562129071,
        "gradeBand": "descent"
      },
      {
        "lat": 26.225824,
        "lng": 119.984704,
        "ele": 34.5,
        "distanceKm": 1.8450764058599884,
        "gradePct": -1.108015662617902,
        "smoothedEle": 37.212136057798716,
        "gradeBand": "descent"
      },
      {
        "lat": 26.2261155,
        "lng": 119.9849495,
        "ele": 35.25,
        "distanceKm": 1.8857002960828229,
        "gradePct": -0.7475686404345796,
        "smoothedEle": 37.205793217534975,
        "gradeBand": "descent"
      },
      {
        "lat": 26.226407,
        "lng": 119.985195,
        "ele": 36,
        "distanceKm": 1.926324149308587,
        "gradePct": -0.36724779727290635,
        "smoothedEle": 37.34438283478894,
        "gradeBand": "descent"
      },
      {
        "lat": 26.226985,
        "lng": 119.985532,
        "ele": 37.5,
        "distanceKm": 1.9988548299856026,
        "gradePct": 0.310732029291831,
        "smoothedEle": 38.03404387165805,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.227379,
        "lng": 119.985819,
        "ele": 38.75,
        "distanceKm": 2.051189577605617,
        "gradePct": 0.7939122673395931,
        "smoothedEle": 38.799006108018766,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.227673559823497,
        "lng": 119.98613305384555,
        "ele": 39.51495220577263,
        "distanceKm": 2.0965119197085937,
        "gradePct": 1.1906200582724904,
        "smoothedEle": 39.62391754523202,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.227952,
        "lng": 119.986466,
        "ele": 40.5,
        "distanceKm": 2.141915896152304,
        "gradePct": 1.484780620390524,
        "smoothedEle": 40.462198858159475,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.228131,
        "lng": 119.986822,
        "ele": 41.5,
        "distanceKm": 2.182623550473322,
        "gradePct": 1.6465323704297465,
        "smoothedEle": 41.17277280657082,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.228179,
        "lng": 119.987061,
        "ele": 41.5,
        "distanceKm": 2.2070531636723176,
        "gradePct": 1.7201535163908395,
        "smoothedEle": 41.5941836342535,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.228208,
        "lng": 119.987157,
        "ele": 43.5,
        "distanceKm": 2.217157214462723,
        "gradePct": 1.7287743177380313,
        "smoothedEle": 41.75911329584615,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.228316,
        "lng": 119.987218,
        "ele": 43.25,
        "distanceKm": 2.230619729306832,
        "gradePct": 1.7313542889860918,
        "smoothedEle": 41.96105101850779,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.228637,
        "lng": 119.987381,
        "ele": 43.5,
        "distanceKm": 2.269841893760109,
        "gradePct": 1.705703801392739,
        "smoothedEle": 42.5499043066653,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.2290213237925,
        "lng": 119.98774858662166,
        "ele": 43.789663556956,
        "distanceKm": 2.3261501247183993,
        "gradePct": 1.5602041201929304,
        "smoothedEle": 43.291527932972414,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.229381,
        "lng": 119.98815,
        "ele": 44.25,
        "distanceKm": 2.382742347443244,
        "gradePct": 1.3736687771687124,
        "smoothedEle": 43.9221596086394,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.2296945,
        "lng": 119.98854250000001,
        "ele": 44.625,
        "distanceKm": 2.4351629873715255,
        "gradePct": 1.1798462568189967,
        "smoothedEle": 44.388952731909086,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.230008,
        "lng": 119.988935,
        "ele": 45,
        "distanceKm": 2.4875835484738045,
        "gradePct": 0.9624939892230585,
        "smoothedEle": 44.70856381201848,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.23048,
        "lng": 119.989274,
        "ele": 45.25,
        "distanceKm": 2.5500169536129906,
        "gradePct": 0.7029819602305517,
        "smoothedEle": 44.963450276233644,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.230739,
        "lng": 119.9896755,
        "ele": 45.3125,
        "distanceKm": 2.59934450637471,
        "gradePct": 0.5359790999313812,
        "smoothedEle": 45.141956019390875,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.230998,
        "lng": 119.990077,
        "ele": 45.375,
        "distanceKm": 2.648671986717938,
        "gradePct": 0.3754687949408645,
        "smoothedEle": 45.22225544306221,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.231257,
        "lng": 119.9904785,
        "ele": 45.4375,
        "distanceKm": 2.697999394643215,
        "gradePct": 0.16112606126570114,
        "smoothedEle": 45.073338974835956,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.231516,
        "lng": 119.99088,
        "ele": 45.5,
        "distanceKm": 2.747326730151083,
        "gradePct": -0.11992372082801585,
        "smoothedEle": 44.71261990733497,
        "gradeBand": "descent"
      },
      {
        "lat": 26.231892,
        "lng": 119.99127,
        "ele": 45.5,
        "distanceKm": 2.804433911202496,
        "gradePct": -0.544138048808001,
        "smoothedEle": 44.0619648832539,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232144,
        "lng": 119.991694,
        "ele": 45.75,
        "distanceKm": 2.8551658179943917,
        "gradePct": -0.9758710365901875,
        "smoothedEle": 43.250908885080776,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232366,
        "lng": 119.992185,
        "ele": 43.5,
        "distanceKm": 2.9100092480766353,
        "gradePct": -1.4086849494454676,
        "smoothedEle": 42.168143875440606,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232762,
        "lng": 119.992068,
        "ele": 42,
        "distanceKm": 2.9555626672688207,
        "gradePct": -1.758597922611083,
        "smoothedEle": 41.10158728423285,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232956,
        "lng": 119.9921,
        "ele": 41,
        "distanceKm": 2.9773693603285905,
        "gradePct": -1.8282165677987072,
        "smoothedEle": 40.713893772823695,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232995,
        "lng": 119.992044,
        "ele": 40.75,
        "distanceKm": 2.9844407703498232,
        "gradePct": -1.8445035231871556,
        "smoothedEle": 40.60075121248397,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233138,
        "lng": 119.992021,
        "ele": 40.25,
        "distanceKm": 3.000506301346998,
        "gradePct": -1.8986757326909416,
        "smoothedEle": 40.30936294040245,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233294,
        "lng": 119.99205,
        "ele": 39.75,
        "distanceKm": 3.0180922452087846,
        "gradePct": -2.0221185909004387,
        "smoothedEle": 39.79937056841063,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233564,
        "lng": 119.992452,
        "ele": 37.75,
        "distanceKm": 3.06818290915196,
        "gradePct": -2.5852222278906836,
        "smoothedEle": 37.823470094488925,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233704,
        "lng": 119.992788,
        "ele": 36.5,
        "distanceKm": 3.1051353186011266,
        "gradePct": -3.031583802198047,
        "smoothedEle": 36.201201475916285,
        "gradeBand": "descent"
      },
      {
        "lat": 26.23371,
        "lng": 119.993142,
        "ele": 35,
        "distanceKm": 3.140450224719254,
        "gradePct": -3.1229068238898643,
        "smoothedEle": 35.20960602700294,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233924,
        "lng": 119.993729,
        "ele": 33.25,
        "distanceKm": 3.203649526449026,
        "gradePct": -2.6544430696483317,
        "smoothedEle": 34.909323273146974,
        "gradeBand": "descent"
      },
      {
        "lat": 26.23393,
        "lng": 119.993777,
        "ele": 34.5,
        "distanceKm": 3.208483387520611,
        "gradePct": -2.5638081745561165,
        "smoothedEle": 34.95041109225544,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233916,
        "lng": 119.993902,
        "ele": 38.25,
        "distanceKm": 3.2210479032681434,
        "gradePct": -2.308203500453404,
        "smoothedEle": 35.06637325504834,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233986,
        "lng": 119.993927,
        "ele": 37.5,
        "distanceKm": 3.2292212157865547,
        "gradePct": -2.05030263298689,
        "smoothedEle": 35.2597665647914,
        "gradeBand": "descent"
      },
      {
        "lat": 26.234319,
        "lng": 119.993883,
        "ele": 31,
        "distanceKm": 3.266508344426407,
        "gradePct": -0.5819014047140381,
        "smoothedEle": 36.7257229723759,
        "gradeBand": "descent"
      },
      {
        "lat": 26.234373,
        "lng": 119.993824,
        "ele": 29,
        "distanceKm": 3.274915754097644,
        "gradePct": -0.21733585471208255,
        "smoothedEle": 37.09321595263574,
        "gradeBand": "descent"
      },
      {
        "lat": 26.234382,
        "lng": 119.99374,
        "ele": 26.75,
        "distanceKm": 3.2833535752504077,
        "gradePct": 0.19570209482164796,
        "smoothedEle": 37.548858294884994,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.234581,
        "lng": 119.993663,
        "ele": 23.25,
        "distanceKm": 3.306776297497867,
        "gradePct": 1.356557599866547,
        "smoothedEle": 38.868240177517755,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.234627,
        "lng": 119.993698,
        "ele": 23.5,
        "distanceKm": 3.312969002463771,
        "gradePct": 1.6205305340187321,
        "smoothedEle": 39.22230315228949,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.234787,
        "lng": 119.993768,
        "ele": 23.75,
        "distanceKm": 3.3320811379703774,
        "gradePct": 2.433548029376824,
        "smoothedEle": 40.31169487616606,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.23508,
        "lng": 119.994376,
        "ele": 34.75,
        "distanceKm": 3.4009212834947276,
        "gradePct": 5.411965601686467,
        "smoothedEle": 45.74621734612579,
        "gradeBand": "hard"
      },
      {
        "lat": 26.23515,
        "lng": 119.994568,
        "ele": 40.75,
        "distanceKm": 3.421592890657543,
        "gradePct": 6.449741206917745,
        "smoothedEle": 47.97875091970983,
        "gradeBand": "steep"
      },
      {
        "lat": 26.235154,
        "lng": 119.994645,
        "ele": 43,
        "distanceKm": 3.4292857838694757,
        "gradePct": 6.786301992104741,
        "smoothedEle": 48.83490906559726,
        "gradeBand": "steep"
      },
      {
        "lat": 26.235139,
        "lng": 119.994718,
        "ele": 44.75,
        "distanceKm": 3.4367554458112965,
        "gradePct": 7.055899469104994,
        "smoothedEle": 49.66777637211029,
        "gradeBand": "steep"
      },
      {
        "lat": 26.235088,
        "lng": 119.994804,
        "ele": 46.25,
        "distanceKm": 3.4470382699891613,
        "gradePct": 7.496573469575751,
        "smoothedEle": 50.9533971755302,
        "gradeBand": "steep"
      },
      {
        "lat": 26.234693,
        "lng": 119.995161,
        "ele": 60,
        "distanceKm": 3.5035806322530583,
        "gradePct": 9.755381972252971,
        "smoothedEle": 58.1989950358716,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.234349,
        "lng": 119.995218,
        "ele": 66.75,
        "distanceKm": 3.5422519294867114,
        "gradePct": 11.443928197881643,
        "smoothedEle": 64.0024751270691,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.23411,
        "lng": 119.995054,
        "ele": 66.25,
        "distanceKm": 3.5734582489394406,
        "gradePct": 12.835639889821293,
        "smoothedEle": 69.24945292354927,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.23393,
        "lng": 119.995044,
        "ele": 69.75,
        "distanceKm": 3.5934982001318043,
        "gradePct": 13.808137764802423,
        "smoothedEle": 72.77648433340528,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.233289,
        "lng": 119.995229,
        "ele": 89,
        "distanceKm": 3.6671240134649774,
        "gradePct": 16.08977793496522,
        "smoothedEle": 85.70683241881439,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.232885,
        "lng": 119.99518,
        "ele": 98.5,
        "distanceKm": 3.7123119046619766,
        "gradePct": 16.991690271773162,
        "smoothedEle": 93.49269535715435,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.2325305,
        "lng": 119.995018,
        "ele": 102.50000000000003,
        "distanceKm": 3.7549138004642746,
        "gradePct": 17.039521323811,
        "smoothedEle": 100.21046335514662,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.232176,
        "lng": 119.994856,
        "ele": 106.5,
        "distanceKm": 3.7975157149518295,
        "gradePct": 16.50947529851878,
        "smoothedEle": 106.50100085507499,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.23185,
        "lng": 119.994781,
        "ele": 111.75,
        "distanceKm": 3.8345291553740557,
        "gradePct": 15.961665725072635,
        "smoothedEle": 111.90577398680082,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.231381,
        "lng": 119.99483,
        "ele": 122,
        "distanceKm": 3.886908167599792,
        "gradePct": 14.654871261597998,
        "smoothedEle": 118.42538000824206,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.230821,
        "lng": 119.994886,
        "ele": 130.75,
        "distanceKm": 3.9494274329491326,
        "gradePct": 11.868534413074702,
        "smoothedEle": 123.08240297931206,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.230343,
        "lng": 119.99505,
        "ele": 136.75,
        "distanceKm": 4.005038965589261,
        "gradePct": 9.853907113033427,
        "smoothedEle": 127.30737448131075,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.230433,
        "lng": 119.995589,
        "ele": 139.5,
        "distanceKm": 4.05972483297079,
        "gradePct": 7.960571994700865,
        "smoothedEle": 130.96301933424326,
        "gradeBand": "steep"
      },
      {
        "lat": 26.230371,
        "lng": 119.996207,
        "ele": 134.25,
        "distanceKm": 4.121751349863502,
        "gradePct": 6.2923924128867075,
        "smoothedEle": 133.60561280162327,
        "gradeBand": "steep"
      },
      {
        "lat": 26.230338,
        "lng": 119.996344,
        "ele": 131.25,
        "distanceKm": 4.135900470910337,
        "gradePct": 5.889217407365637,
        "smoothedEle": 133.85322241994285,
        "gradeBand": "hard"
      },
      {
        "lat": 26.230311,
        "lng": 119.996413,
        "ele": 129.25,
        "distanceKm": 4.143409188513793,
        "gradePct": 5.675258727444198,
        "smoothedEle": 133.98462497800335,
        "gradeBand": "hard"
      },
      {
        "lat": 26.23016,
        "lng": 119.996493,
        "ele": 121.5,
        "distanceKm": 4.161999325825309,
        "gradePct": 5.083072666798269,
        "smoothedEle": 134.2036719465575,
        "gradeBand": "hard"
      },
      {
        "lat": 26.230311,
        "lng": 119.996413,
        "ele": 129.25,
        "distanceKm": 4.180589463136824,
        "gradePct": 4.26820944529798,
        "smoothedEle": 133.98629284646617,
        "gradeBand": "hard"
      },
      {
        "lat": 26.230338,
        "lng": 119.996344,
        "ele": 131.25,
        "distanceKm": 4.188098180740281,
        "gradePct": 3.9172784991009415,
        "smoothedEle": 133.8548902884057,
        "gradeBand": "hard"
      },
      {
        "lat": 26.230371,
        "lng": 119.996207,
        "ele": 134.25,
        "distanceKm": 4.202247301787115,
        "gradePct": 3.2559985443805077,
        "smoothedEle": 133.60728067008608,
        "gradeBand": "hard"
      },
      {
        "lat": 26.230424,
        "lng": 119.995827,
        "ele": 140.5,
        "distanceKm": 4.240605697801231,
        "gradePct": 1.266186774137579,
        "smoothedEle": 132.21731553965586,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.23041989470995,
        "lng": 119.9954330470484,
        "ele": 138.51710324615044,
        "distanceKm": 4.279903042842606,
        "gradePct": -0.8997397883515809,
        "smoothedEle": 130.02321733193807,
        "gradeBand": "descent"
      },
      {
        "lat": 26.230343,
        "lng": 119.99505,
        "ele": 136.75,
        "distanceKm": 4.319054992830661,
        "gradePct": -3.103660258053428,
        "smoothedEle": 127.28341600618192,
        "gradeBand": "descent"
      },
      {
        "lat": 26.230821,
        "lng": 119.994886,
        "ele": 130.75,
        "distanceKm": 4.374666525470789,
        "gradePct": -5.40231171926469,
        "smoothedEle": 123.25092779146375,
        "gradeBand": "descent"
      },
      {
        "lat": 26.231381,
        "lng": 119.99483,
        "ele": 122,
        "distanceKm": 4.43718579082013,
        "gradePct": -6.9564730357081235,
        "smoothedEle": 118.42829413524854,
        "gradeBand": "descent"
      },
      {
        "lat": 26.23185,
        "lng": 119.994781,
        "ele": 111.75,
        "distanceKm": 4.489564803045866,
        "gradePct": -8.692975276581436,
        "smoothedEle": 111.96114966526984,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232176,
        "lng": 119.994856,
        "ele": 106.5,
        "distanceKm": 4.526578243468093,
        "gradePct": -10.114048778921775,
        "smoothedEle": 106.50979455982889,
        "gradeBand": "descent"
      },
      {
        "lat": 26.2325305,
        "lng": 119.995018,
        "ele": 102.5,
        "distanceKm": 4.569180157955647,
        "gradePct": -11.655500161231142,
        "smoothedEle": 100.33775344674585,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232885,
        "lng": 119.99518,
        "ele": 98.5,
        "distanceKm": 4.611782053757945,
        "gradePct": -12.917676602131504,
        "smoothedEle": 94.55254356971083,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233289,
        "lng": 119.995229,
        "ele": 89,
        "distanceKm": 4.656969944954944,
        "gradePct": -13.877545398270295,
        "smoothedEle": 88.230488641173,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233697068102764,
        "lng": 119.99511122683461,
        "ele": 76.74522468303351,
        "distanceKm": 4.703841002445785,
        "gradePct": -13.674128269636734,
        "smoothedEle": 82.51028846138632,
        "gradeBand": "descent"
      },
      {
        "lat": 26.23411,
        "lng": 119.995054,
        "ele": 66.25,
        "distanceKm": 4.7501104172570505,
        "gradePct": -12.407464377031037,
        "smoothedEle": 78.28559310399437,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233851,
        "lng": 119.994817,
        "ele": 65,
        "distanceKm": 4.787369019372016,
        "gradePct": -11.37036460053052,
        "smoothedEle": 75.12703133254493,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233438,
        "lng": 119.994597,
        "ele": 66.75,
        "distanceKm": 4.838265764348958,
        "gradePct": -10.48419328878733,
        "smoothedEle": 69.87892825424355,
        "gradeBand": "descent"
      },
      {
        "lat": 26.233175,
        "lng": 119.994168,
        "ele": 60.25,
        "distanceKm": 4.890093952562789,
        "gradePct": -9.870337790519471,
        "smoothedEle": 64.44731936750345,
        "gradeBand": "descent"
      },
      {
        "lat": 26.23291,
        "lng": 119.993955,
        "ele": 61,
        "distanceKm": 4.92642082521922,
        "gradePct": -9.732198549086576,
        "smoothedEle": 60.984208222616374,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232412,
        "lng": 119.99377,
        "ele": 68.5,
        "distanceKm": 4.984789467332821,
        "gradePct": -9.204354517075569,
        "smoothedEle": 56.93700131467376,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232356,
        "lng": 119.993717,
        "ele": 68.75,
        "distanceKm": 4.9929577208181115,
        "gradePct": -9.002919919466603,
        "smoothedEle": 56.54492514737979,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232333,
        "lng": 119.993626,
        "ele": 67.5,
        "distanceKm": 5.00238775900253,
        "gradePct": -8.740043942952628,
        "smoothedEle": 56.0983199792094,
        "gradeBand": "descent"
      },
      {
        "lat": 26.23235,
        "lng": 119.99349,
        "ele": 64.5,
        "distanceKm": 5.016083881913874,
        "gradePct": -8.335236233433474,
        "smoothedEle": 55.49569057111024,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232615,
        "lng": 119.993141,
        "ele": 52.25,
        "distanceKm": 5.061691342453958,
        "gradePct": -6.9155131159095955,
        "smoothedEle": 53.59289476484502,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232709,
        "lng": 119.99278,
        "ele": 46.75,
        "distanceKm": 5.099184862372789,
        "gradePct": -5.844892271205547,
        "smoothedEle": 51.89088078146106,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232577,
        "lng": 119.992444,
        "ele": 43.25,
        "distanceKm": 5.135771675476656,
        "gradePct": -4.916213683652834,
        "smoothedEle": 50.5034048714498,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232366,
        "lng": 119.992185,
        "ele": 40.25,
        "distanceKm": 5.170669209353916,
        "gradePct": -4.285746315212641,
        "smoothedEle": 49.34458929268428,
        "gradeBand": "descent"
      },
      {
        "lat": 26.232144,
        "lng": 119.991694,
        "ele": 42.25,
        "distanceKm": 5.225512639436159,
        "gradePct": -3.9685389156609503,
        "smoothedEle": 47.16523411139645,
        "gradeBand": "descent"
      },
      {
        "lat": 26.231892,
        "lng": 119.99127,
        "ele": 44.25,
        "distanceKm": 5.276244546228055,
        "gradePct": -4.059821006870742,
        "smoothedEle": 44.81261175553491,
        "gradeBand": "descent"
      },
      {
        "lat": 26.231516,
        "lng": 119.99088,
        "ele": 44,
        "distanceKm": 5.333351727279468,
        "gradePct": -3.5242961695995487,
        "smoothedEle": 43.546583843885344,
        "gradeBand": "descent"
      },
      {
        "lat": 26.231257,
        "lng": 119.99047850000001,
        "ele": 43.9375,
        "distanceKm": 5.382679062786186,
        "gradePct": -2.7674914365769907,
        "smoothedEle": 43.332361720121924,
        "gradeBand": "descent"
      },
      {
        "lat": 26.230998,
        "lng": 119.990077,
        "ele": 43.875,
        "distanceKm": 5.432006470712613,
        "gradePct": -1.6671750147254072,
        "smoothedEle": 43.529741593869105,
        "gradeBand": "descent"
      },
      {
        "lat": 26.230739,
        "lng": 119.98967549999999,
        "ele": 43.8125,
        "distanceKm": 5.481333951056992,
        "gradePct": -0.49247444977221333,
        "smoothedEle": 43.71483416354781,
        "gradeBand": "descent"
      },
      {
        "lat": 26.23048,
        "lng": 119.989274,
        "ele": 43.75,
        "distanceKm": 5.53066150381756,
        "gradePct": 0.04854735106649595,
        "smoothedEle": 43.703318996284715,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.230221,
        "lng": 119.989068,
        "ele": 43.5,
        "distanceKm": 5.566039585205542,
        "gradePct": 0.11677938860081827,
        "smoothedEle": 43.638183557734635,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.230008,
        "lng": 119.988935,
        "ele": 43.5,
        "distanceKm": 5.59318634677503,
        "gradePct": 0.11152879848531318,
        "smoothedEle": 43.5974634153804,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.2296945,
        "lng": 119.9885425,
        "ele": 43.5,
        "distanceKm": 5.645606907878368,
        "gradePct": -0.08214717058065084,
        "smoothedEle": 43.416480466774054,
        "gradeBand": "descent"
      },
      {
        "lat": 26.229381,
        "lng": 119.98815,
        "ele": 43.5,
        "distanceKm": 5.698027547805591,
        "gradePct": -0.36163031877133955,
        "smoothedEle": 42.987676524268274,
        "gradeBand": "descent"
      },
      {
        "lat": 26.229088,
        "lng": 119.98782299999999,
        "ele": 43.375,
        "distanceKm": 5.744128787012962,
        "gradePct": -0.6025981379901774,
        "smoothedEle": 42.47332778053952,
        "gradeBand": "descent"
      },
      {
        "lat": 26.228795,
        "lng": 119.987496,
        "ele": 43.25,
        "distanceKm": 5.790230084361601,
        "gradePct": -0.8881980616913046,
        "smoothedEle": 41.82550168561794,
        "gradeBand": "descent"
      },
      {
        "lat": 26.228316,
        "lng": 119.987218,
        "ele": 43.25,
        "distanceKm": 5.850278485556316,
        "gradePct": -1.2639608603712122,
        "smoothedEle": 40.85034496365874,
        "gradeBand": "descent"
      },
      {
        "lat": 26.228208,
        "lng": 119.987157,
        "ele": 43.5,
        "distanceKm": 5.863741000400426,
        "gradePct": -1.320189605204656,
        "smoothedEle": 40.62776330440501,
        "gradeBand": "descent"
      },
      {
        "lat": 26.228179,
        "lng": 119.987061,
        "ele": 41.5,
        "distanceKm": 5.8738450511908304,
        "gradePct": -1.3623910883789871,
        "smoothedEle": 40.46070860354453,
        "gradeBand": "descent"
      },
      {
        "lat": 26.228131,
        "lng": 119.986822,
        "ele": 40.5,
        "distanceKm": 5.898274664389826,
        "gradePct": -1.4455625414548219,
        "smoothedEle": 40.09379437654126,
        "gradeBand": "descent"
      },
      {
        "lat": 26.227952,
        "lng": 119.986466,
        "ele": 39.25,
        "distanceKm": 5.938982318710844,
        "gradePct": -1.501351273122444,
        "smoothedEle": 39.52804407056338,
        "gradeBand": "descent"
      },
      {
        "lat": 26.227528,
        "lng": 119.985959,
        "ele": 37,
        "distanceKm": 6.008122098392146,
        "gradePct": -1.402378864508761,
        "smoothedEle": 38.730186382974125,
        "gradeBand": "descent"
      },
      {
        "lat": 26.227185,
        "lng": 119.985663,
        "ele": 35.5,
        "distanceKm": 6.056354761556444,
        "gradePct": -1.2138014620698623,
        "smoothedEle": 38.32228030485405,
        "gradeBand": "descent"
      },
      {
        "lat": 26.226798775789376,
        "lng": 119.98542342290834,
        "ele": 35.233280823414354,
        "distanceKm": 6.105502057205286,
        "gradePct": -0.9937361289711246,
        "smoothedEle": 38.00587664304976,
        "gradeBand": "descent"
      },
      {
        "lat": 26.226407,
        "lng": 119.985195,
        "ele": 36.25,
        "distanceKm": 6.154664288282603,
        "gradePct": -0.7005217483411024,
        "smoothedEle": 37.9460341311612,
        "gradeBand": "descent"
      },
      {
        "lat": 26.2261155,
        "lng": 119.9849495,
        "ele": 37.125,
        "distanceKm": 6.1952881415083665,
        "gradePct": -0.37045140692520884,
        "smoothedEle": 38.13738457854422,
        "gradeBand": "descent"
      },
      {
        "lat": 26.225824,
        "lng": 119.984704,
        "ele": 38,
        "distanceKm": 6.235912031731201,
        "gradePct": -0.009937557556327184,
        "smoothedEle": 38.4752903924655,
        "gradeBand": "descent"
      },
      {
        "lat": 26.225615,
        "lng": 119.984003,
        "ele": 39.5,
        "distanceKm": 6.309596678429125,
        "gradePct": 0.8127586182199692,
        "smoothedEle": 39.62640971961947,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.225488,
        "lng": 119.983632,
        "ele": 40.5,
        "distanceKm": 6.349206380419418,
        "gradePct": 1.2285910471893071,
        "smoothedEle": 40.409859840140534,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224963,
        "lng": 119.983283,
        "ele": 41.75,
        "distanceKm": 6.417175699540717,
        "gradePct": 1.768832838479762,
        "smoothedEle": 41.85710896704274,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224854,
        "lng": 119.983175,
        "ele": 42.25,
        "distanceKm": 6.433391643645917,
        "gradePct": 1.8742007030126602,
        "smoothedEle": 42.20272744026015,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224801,
        "lng": 119.983079,
        "ele": 42.5,
        "distanceKm": 6.444635761336859,
        "gradePct": 1.9178561995355656,
        "smoothedEle": 42.44728700003813,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224584,
        "lng": 119.982416,
        "ele": 44,
        "distanceKm": 6.51503408668275,
        "gradePct": 2.1211928747754865,
        "smoothedEle": 43.97634331572249,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.22453921131405,
        "lng": 119.98198351180865,
        "ele": 44.81971714880579,
        "distanceKm": 6.558461155803856,
        "gradePct": 2.1305633349961735,
        "smoothedEle": 44.86804550333687,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224502,
        "lng": 119.98155,
        "ele": 45.75,
        "distanceKm": 6.601901336872486,
        "gradePct": 2.0894977972523225,
        "smoothedEle": 45.71087240796152,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224612,
        "lng": 119.981001,
        "ele": 47,
        "distanceKm": 6.658013254319408,
        "gradePct": 1.8675436222025272,
        "smoothedEle": 46.47293428308738,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224659,
        "lng": 119.980613,
        "ele": 48,
        "distanceKm": 6.697067357703569,
        "gradePct": 1.6667372439519803,
        "smoothedEle": 46.919579253450344,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224544,
        "lng": 119.980297,
        "ele": 48.75,
        "distanceKm": 6.731083302465208,
        "gradePct": 1.509329369484663,
        "smoothedEle": 47.32454584183535,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224545,
        "lng": 119.980186,
        "ele": 48.75,
        "distanceKm": 6.742156074898323,
        "gradePct": 1.4474635032527832,
        "smoothedEle": 47.42817496059619,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224669,
        "lng": 119.979862,
        "ele": 49.5,
        "distanceKm": 6.777293292301984,
        "gradePct": 1.2906287573022783,
        "smoothedEle": 47.81468435203646,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.22487,
        "lng": 119.979164,
        "ele": 49.75,
        "distanceKm": 6.850417788849108,
        "gradePct": 0.8224116211192503,
        "smoothedEle": 48.0146027068468,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224834,
        "lng": 119.978726,
        "ele": 46.75,
        "distanceKm": 6.8942910325251034,
        "gradePct": 0.43944926738368967,
        "smoothedEle": 47.766726152164125,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.224628,
        "lng": 119.978397,
        "ele": 48,
        "distanceKm": 6.934312122691878,
        "gradePct": -0.03813110537883443,
        "smoothedEle": 47.2785018800978,
        "gradeBand": "descent"
      },
      {
        "lat": 26.22441459929835,
        "lng": 119.97809846972382,
        "ele": 48.62265899082621,
        "distanceKm": 6.97238859821212,
        "gradePct": -0.583117240408249,
        "smoothedEle": 46.59449823623146,
        "gradeBand": "descent"
      },
      {
        "lat": 26.22419,
        "lng": 119.97781,
        "ele": 49.5,
        "distanceKm": 7.010489882503662,
        "gradePct": -1.025467251808272,
        "smoothedEle": 45.854507501625164,
        "gradeBand": "descent"
      },
      {
        "lat": 26.22391823490783,
        "lng": 119.9774577474409,
        "ele": 46.82195910474161,
        "distanceKm": 7.056834344184132,
        "gradePct": -1.3239519797563293,
        "smoothedEle": 45.33044627324942,
        "gradeBand": "descent"
      },
      {
        "lat": 26.223656,
        "lng": 119.977096,
        "ele": 44.25,
        "distanceKm": 7.103227733037665,
        "gradePct": -1.1932773678032111,
        "smoothedEle": 45.27115104544242,
        "gradeBand": "descent"
      },
      {
        "lat": 26.223503,
        "lng": 119.976776,
        "ele": 42.5,
        "distanceKm": 7.139398628394374,
        "gradePct": -1.0515394958453177,
        "smoothedEle": 45.08404918883237,
        "gradeBand": "descent"
      },
      {
        "lat": 26.223365,
        "lng": 119.976318,
        "ele": 39.75,
        "distanceKm": 7.18759258891499,
        "gradePct": -0.7421867001887315,
        "smoothedEle": 44.814837880089584,
        "gradeBand": "descent"
      },
      {
        "lat": 26.223206,
        "lng": 119.97595,
        "ele": 38.25,
        "distanceKm": 7.228336677115423,
        "gradePct": -0.6885058600020842,
        "smoothedEle": 44.27568497688464,
        "gradeBand": "descent"
      },
      {
        "lat": 26.22294,
        "lng": 119.975726,
        "ele": 40.5,
        "distanceKm": 7.265405739504637,
        "gradePct": -0.9402824749966917,
        "smoothedEle": 43.43892625291708,
        "gradeBand": "descent"
      },
      {
        "lat": 26.222513,
        "lng": 119.975632,
        "ele": 49.5,
        "distanceKm": 7.31380305087777,
        "gradePct": -1.4413426038481192,
        "smoothedEle": 42.33376269637763,
        "gradeBand": "descent"
      },
      {
        "lat": 26.221933,
        "lng": 119.975407,
        "ele": 45.75,
        "distanceKm": 7.382089980110644,
        "gradePct": -1.9936421149903065,
        "smoothedEle": 40.85829120522407,
        "gradeBand": "descent"
      },
      {
        "lat": 26.221281,
        "lng": 119.97534,
        "ele": 42.75,
        "distanceKm": 7.4548965779075695,
        "gradePct": -1.653462594636329,
        "smoothedEle": 40.369224022121244,
        "gradeBand": "descent"
      },
      {
        "lat": 26.221079,
        "lng": 119.975193,
        "ele": 38.75,
        "distanceKm": 7.481720759407232,
        "gradePct": -1.2115245396535979,
        "smoothedEle": 40.64332000237468,
        "gradeBand": "descent"
      },
      {
        "lat": 26.221006,
        "lng": 119.975143,
        "ele": 37.75,
        "distanceKm": 7.4912478834155625,
        "gradePct": -1.026530531323984,
        "smoothedEle": 40.79575398650797,
        "gradeBand": "descent"
      },
      {
        "lat": 26.220941,
        "lng": 119.975128,
        "ele": 37.5,
        "distanceKm": 7.4986288215873245,
        "gradePct": -0.8871649591690974,
        "smoothedEle": 40.905939737508334,
        "gradeBand": "descent"
      },
      {
        "lat": 26.220836,
        "lng": 119.975167,
        "ele": 37.75,
        "distanceKm": 7.510935397530781,
        "gradePct": -0.6758904242950402,
        "smoothedEle": 41.04746536085808,
        "gradeBand": "descent"
      },
      {
        "lat": 26.220477,
        "lng": 119.974802,
        "ele": 35.25,
        "distanceKm": 7.564965077846713,
        "gradePct": -0.1428340066951782,
        "smoothedEle": 40.94263990459369,
        "gradeBand": "descent"
      },
      {
        "lat": 26.220118,
        "lng": 119.974437,
        "ele": 32.75,
        "distanceKm": 7.618994833878854,
        "gradePct": -0.3726232496686134,
        "smoothedEle": 39.86514199622332,
        "gradeBand": "descent"
      },
      {
        "lat": 26.219734,
        "lng": 119.974047,
        "ele": 37.5,
        "distanceKm": 7.676759112228539,
        "gradePct": -1.5687528522908587,
        "smoothedEle": 37.4551149857885,
        "gradeBand": "descent"
      },
      {
        "lat": 26.219516,
        "lng": 119.973902,
        "ele": 43.25,
        "distanceKm": 7.704987104989287,
        "gradePct": -2.379136113491382,
        "smoothedEle": 36.220787769648126,
        "gradeBand": "descent"
      },
      {
        "lat": 26.219083,
        "lng": 119.973848,
        "ele": 46.25,
        "distanceKm": 7.753434970298601,
        "gradePct": -3.36772734019807,
        "smoothedEle": 34.22955531370096,
        "gradeBand": "descent"
      },
      {
        "lat": 26.21844,
        "lng": 119.973901,
        "ele": 41,
        "distanceKm": 7.8251286154713116,
        "gradePct": -4.127335491743652,
        "smoothedEle": 31.354558886136903,
        "gradeBand": "descent"
      },
      {
        "lat": 26.217905,
        "lng": 119.974209,
        "ele": 25.75,
        "distanceKm": 7.892083711715324,
        "gradePct": -2.9698559426938838,
        "smoothedEle": 30.84530337410021,
        "gradeBand": "descent"
      },
      {
        "lat": 26.217795,
        "lng": 119.974294,
        "ele": 23.75,
        "distanceKm": 7.906966775739417,
        "gradePct": -2.731515463787415,
        "smoothedEle": 30.676391344861358,
        "gradeBand": "descent"
      },
      {
        "lat": 26.217627,
        "lng": 119.974351,
        "ele": 21.75,
        "distanceKm": 7.926493747837994,
        "gradePct": -2.4951726509957086,
        "smoothedEle": 30.34650826363355,
        "gradeBand": "descent"
      },
      {
        "lat": 26.217506,
        "lng": 119.974367,
        "ele": 20.75,
        "distanceKm": 7.940042692185599,
        "gradePct": -2.3408814084842766,
        "smoothedEle": 30.098222090841986,
        "gradeBand": "descent"
      },
      {
        "lat": 26.217276,
        "lng": 119.974349,
        "ele": 19.5,
        "distanceKm": 7.965680517605785,
        "gradePct": -2.2758304660127524,
        "smoothedEle": 29.186834055799874,
        "gradeBand": "descent"
      },
      {
        "lat": 26.216858,
        "lng": 119.974301,
        "ele": 17.5,
        "distanceKm": 8.012406053558099,
        "gradePct": -2.5287208764526308,
        "smoothedEle": 26.807306285447776,
        "gradeBand": "descent"
      },
      {
        "lat": 26.216247,
        "lng": 119.97433,
        "ele": 14.75,
        "distanceKm": 8.080407811343669,
        "gradePct": -4.275853065375058,
        "smoothedEle": 22.382403278376714,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 8.080407811343669,
      "elevationGainM": 141.83861066830747,
      "elevationLossM": 142.02279668081795,
      "minimumElevationM": 14.75,
      "maximumElevationM": 140.5,
      "maximumSustainedGradePct": 17.039521323811
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 64,
        "startDistanceKm": 0,
        "endDistanceKm": 2.648671986717938,
        "distanceKm": 2.648671986717938,
        "gainM": 33.56863425725971,
        "averageGradePct": 1.2673760445080926,
        "maximumGradePct": 6.8192714507508985
      },
      {
        "startIndex": 77,
        "endIndex": 109,
        "startDistanceKm": 3.140450224719254,
        "endDistanceKm": 4.161999325825309,
        "distanceKm": 1.021549101106055,
        "gainM": 99.29434867341054,
        "averageGradePct": 9.719978077010909,
        "maximumGradePct": 17.039521323811
      }
    ]
  },
  "lienchiang-dongyin": {
    "routeId": "lienchiang-dongyin",
    "direction": "out-and-back",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:06:36.663Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "d90979679556fd1b7a462d243c50e0ae12ca5bc0898e285c9e03e560c7e789ea",
      "roadPolicyAuditSha256": "7cb4bc65df031a605166f5374489f76c66fcd182b8fbea01d7c8a54a98b5ba7f",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "SRTM 100/100 公尺為 5.10 公里、爬升 182 公尺、最大坡度 20.25%；500/200、750/300、1000/500 依序為 134/11.52%、113/8.37%、89/5.50%。採 500/200 呈現短而連續的島上陡坡，同時降低崖岸 SRTM 短波；僅供行程規劃，並非道路測量。",
        "referenceUrl": "https://www.matsu-nsa.gov.tw/zh-TW/trips/3023",
        "referenceLabel": "馬祖國家風景區單車健行遊程"
      },
      "reviewedAt": "2026-08-01T05:09:19.375Z",
      "reviewerNote": "東引改為單島原路往返，已移除中柱港、東湧燈塔、烈女義坑等港區、階梯、步道或軍事疑慮支線，東側折返點改為實際公共道路節點。raw 的 service、track、權限禁制、ferry 與非法逆向均為 0；live OSM 五窗 5/5 於 0.05 公尺內命中一般住宅道路與燈塔路完整公共道路 way。全線僅在東引單島 bounds，東引不跨西引，不進港區與軍事設施；折返點不代表景點入口可騎，大霧、側風或管制時應停騎。"
    },
    "waypoints": [
      {
        "name": "東引遊客中心外公共道路",
        "lat": 26.3635,
        "lng": 120.4895,
        "role": "start"
      },
      {
        "name": "東引酒廠外中正路",
        "lat": 26.3649,
        "lng": 120.493,
        "role": "via"
      },
      {
        "name": "東引東側公共道路折返點",
        "lat": 26.368722,
        "lng": 120.506214,
        "role": "via"
      },
      {
        "name": "回程東引酒廠外中正路",
        "lat": 26.3649,
        "lng": 120.493,
        "role": "via"
      },
      {
        "name": "東引遊客中心外公共道路",
        "lat": 26.3635,
        "lng": 120.4895,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 26.363687,
        "lng": 120.489294,
        "ele": 60,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 57.047296434090825,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.36395733333333,
        "lng": 120.48959866666667,
        "ele": 59.583333333333336,
        "distanceKm": 0.04271941390356907,
        "gradePct": 0.43835704987155444,
        "smoothedEle": 57.23455999660093,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.364227666666668,
        "lng": 120.48990333333333,
        "ele": 59.166666666666664,
        "distanceKm": 0.08543877737267665,
        "gradePct": 1.1161943552153606,
        "smoothedEle": 58.00095924428966,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.364498,
        "lng": 120.490208,
        "ele": 58.75,
        "distanceKm": 0.12815809040634504,
        "gradePct": 1.6420233708828842,
        "smoothedEle": 59.151682230240226,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.364643,
        "lng": 120.490798,
        "ele": 52.25,
        "distanceKm": 0.18911052838867043,
        "gradePct": 2.078867060806115,
        "smoothedEle": 60.97865291727929,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.364392,
        "lng": 120.49123,
        "ele": 54.75,
        "distanceKm": 0.24040767248667705,
        "gradePct": 2.533379155481427,
        "smoothedEle": 62.29118462608803,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.364317,
        "lng": 120.491527,
        "ele": 58.25,
        "distanceKm": 0.27115039403450164,
        "gradePct": 2.9122725284566577,
        "smoothedEle": 63.569166065990636,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.364366,
        "lng": 120.491679,
        "ele": 60,
        "distanceKm": 0.28724442778390225,
        "gradePct": 3.2680070587703725,
        "smoothedEle": 64.58561186477522,
        "gradeBand": "hard"
      },
      {
        "lat": 26.364726,
        "lng": 120.4919965,
        "ele": 66.125,
        "distanceKm": 0.33826424860493476,
        "gradePct": 4.382689386474119,
        "smoothedEle": 68.21998005611883,
        "gradeBand": "hard"
      },
      {
        "lat": 26.365086,
        "lng": 120.492314,
        "ele": 72.25,
        "distanceKm": 0.3892840083506842,
        "gradePct": 5.675945734809712,
        "smoothedEle": 72.33498319055903,
        "gradeBand": "hard"
      },
      {
        "lat": 26.364469,
        "lng": 120.492276,
        "ele": 72.5,
        "distanceKm": 0.4579957508085297,
        "gradePct": 8.443095503980658,
        "smoothedEle": 79.90851577152594,
        "gradeBand": "steep"
      },
      {
        "lat": 26.364355,
        "lng": 120.492342,
        "ele": 74,
        "distanceKm": 0.4722759748084534,
        "gradePct": 8.99357246838278,
        "smoothedEle": 81.62739895166264,
        "gradeBand": "steep"
      },
      {
        "lat": 26.364216,
        "lng": 120.492627,
        "ele": 81.5,
        "distanceKm": 0.5046045156691396,
        "gradePct": 9.880876980490662,
        "smoothedEle": 85.58400190549413,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.364071,
        "lng": 120.493004,
        "ele": 94.25,
        "distanceKm": 0.545479235569233,
        "gradePct": 10.821235912072176,
        "smoothedEle": 90.44437727781478,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.364606,
        "lng": 120.493079,
        "ele": 97.25,
        "distanceKm": 0.6054360437696308,
        "gradePct": 11.525677803886431,
        "smoothedEle": 97.16664536775663,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.364598,
        "lng": 120.493179,
        "ele": 100.75,
        "distanceKm": 0.6154386048113671,
        "gradePct": 11.5131232351644,
        "smoothedEle": 98.2440366070011,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.364229,
        "lng": 120.493424,
        "ele": 107.25,
        "distanceKm": 0.6631811565457896,
        "gradePct": 11.199830097851027,
        "smoothedEle": 102.93233331265955,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.363999,
        "lng": 120.493838,
        "ele": 113.75,
        "distanceKm": 0.7117132428443101,
        "gradePct": 10.545815359982779,
        "smoothedEle": 107.52092483969861,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.363721,
        "lng": 120.493985,
        "ele": 116.5,
        "distanceKm": 0.7459193767592371,
        "gradePct": 9.959347279507009,
        "smoothedEle": 110.41241981190355,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.364085,
        "lng": 120.494341,
        "ele": 119.75,
        "distanceKm": 0.7997359352623911,
        "gradePct": 8.700181226721353,
        "smoothedEle": 113.927920139958,
        "gradeBand": "steep"
      },
      {
        "lat": 26.364286,
        "lng": 120.494758,
        "ele": 121,
        "distanceKm": 0.8469118296443535,
        "gradePct": 7.510447940228543,
        "smoothedEle": 116.35558874566883,
        "gradeBand": "steep"
      },
      {
        "lat": 26.364681,
        "lng": 120.495249,
        "ele": 121.5,
        "distanceKm": 0.912654660342664,
        "gradePct": 5.198095569486001,
        "smoothedEle": 117.99669538890171,
        "gradeBand": "hard"
      },
      {
        "lat": 26.364902,
        "lng": 120.495742,
        "ele": 117.5,
        "distanceKm": 0.9675762524127367,
        "gradePct": 3.1482784818996885,
        "smoothedEle": 118.12368547470028,
        "gradeBand": "hard"
      },
      {
        "lat": 26.365092,
        "lng": 120.49616,
        "ele": 119.25,
        "distanceKm": 1.014273681379815,
        "gradePct": 1.5104871325314808,
        "smoothedEle": 117.69700592064618,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.36531,
        "lng": 120.496493,
        "ele": 122,
        "distanceKm": 1.0553623047929486,
        "gradePct": 0.09856729054927629,
        "smoothedEle": 116.76366847101396,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.365582,
        "lng": 120.49664,
        "ele": 120.75,
        "distanceKm": 1.088966640384907,
        "gradePct": -0.7772669480162551,
        "smoothedEle": 115.8508488507942,
        "gradeBand": "descent"
      },
      {
        "lat": 26.365853,
        "lng": 120.496549,
        "ele": 116,
        "distanceKm": 1.1204348063530682,
        "gradePct": -1.4455081278600592,
        "smoothedEle": 115.12366844070434,
        "gradeBand": "descent"
      },
      {
        "lat": 26.365954,
        "lng": 120.496394,
        "ele": 113,
        "distanceKm": 1.139529183912847,
        "gradePct": -1.6829384091939805,
        "smoothedEle": 114.69295803015686,
        "gradeBand": "descent"
      },
      {
        "lat": 26.366129,
        "lng": 120.496364,
        "ele": 111.75,
        "distanceKm": 1.1592165215074577,
        "gradePct": -1.937025225141753,
        "smoothedEle": 114.23030559668351,
        "gradeBand": "descent"
      },
      {
        "lat": 26.36669,
        "lng": 120.496635,
        "ele": 112.25,
        "distanceKm": 1.227189098322304,
        "gradePct": -2.7004363647775174,
        "smoothedEle": 112.00275655033987,
        "gradeBand": "descent"
      },
      {
        "lat": 26.367174,
        "lng": 120.496631,
        "ele": 107.75,
        "distanceKm": 1.2810089925542896,
        "gradePct": -3.1113959722627635,
        "smoothedEle": 109.84421642683735,
        "gradeBand": "descent"
      },
      {
        "lat": 26.367563,
        "lng": 120.496785,
        "ele": 106.75,
        "distanceKm": 1.3269042942131246,
        "gradePct": -3.681691846774201,
        "smoothedEle": 107.61435300554702,
        "gradeBand": "descent"
      },
      {
        "lat": 26.367797,
        "lng": 120.497071,
        "ele": 110.25,
        "distanceKm": 1.3654903699208003,
        "gradePct": -4.183685227544147,
        "smoothedEle": 105.65733303402595,
        "gradeBand": "descent"
      },
      {
        "lat": 26.368015,
        "lng": 120.497195,
        "ele": 109.75,
        "distanceKm": 1.3926972897190701,
        "gradePct": -4.373107675533086,
        "smoothedEle": 104.3868822715283,
        "gradeBand": "descent"
      },
      {
        "lat": 26.368396,
        "lng": 120.497195,
        "ele": 104.25,
        "distanceKm": 1.435062615288141,
        "gradePct": -4.795253751796786,
        "smoothedEle": 102.09646800469184,
        "gradeBand": "descent"
      },
      {
        "lat": 26.368777,
        "lng": 120.497195,
        "ele": 98.75,
        "distanceKm": 1.4774279408572117,
        "gradePct": -5.339756377155242,
        "smoothedEle": 99.30832795649815,
        "gradeBand": "descent"
      },
      {
        "lat": 26.368982,
        "lng": 120.497664,
        "ele": 98.75,
        "distanceKm": 1.5294162177969741,
        "gradePct": -5.764301843341025,
        "smoothedEle": 95.9583488374641,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369165,
        "lng": 120.498103,
        "ele": 96,
        "distanceKm": 1.5776538429414502,
        "gradePct": -6.027085602887299,
        "smoothedEle": 93.03517788562633,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369293,
        "lng": 120.498523,
        "ele": 91.25,
        "distanceKm": 1.6218509250615547,
        "gradePct": -6.568792785937869,
        "smoothedEle": 89.6731515521378,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369485,
        "lng": 120.498974,
        "ele": 84.25,
        "distanceKm": 1.6715961610823236,
        "gradePct": -7.370578435889352,
        "smoothedEle": 84.9509712449732,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369703,
        "lng": 120.4994,
        "ele": 77.5,
        "distanceKm": 1.7204712745650657,
        "gradePct": -7.97662408906893,
        "smoothedEle": 80.58148777603255,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369938,
        "lng": 120.50006,
        "ele": 78.25,
        "distanceKm": 1.7912257249604313,
        "gradePct": -8.9365264199221,
        "smoothedEle": 74.12972601503122,
        "gradeBand": "descent"
      },
      {
        "lat": 26.3697470938335,
        "lng": 120.50058294193536,
        "ele": 70.74704426326012,
        "distanceKm": 1.8474824404402523,
        "gradePct": -9.14883057453353,
        "smoothedEle": 68.94236018104226,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369552,
        "lng": 120.501104,
        "ele": 60.75,
        "distanceKm": 1.9037433768958125,
        "gradePct": -8.627164943347312,
        "smoothedEle": 64.8226484801013,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369634,
        "lng": 120.501827,
        "ele": 56.25,
        "distanceKm": 1.9763470483769052,
        "gradePct": -6.199250333734247,
        "smoothedEle": 63.08794108910974,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369675,
        "lng": 120.502217,
        "ele": 51.5,
        "distanceKm": 2.015467320682984,
        "gradePct": -4.291055148859301,
        "smoothedEle": 63.31232657289665,
        "gradeBand": "descent"
      },
      {
        "lat": 26.3697235,
        "lng": 120.5026355,
        "ele": 50.75000000000001,
        "distanceKm": 2.0575076714970297,
        "gradePct": -2.213403010499697,
        "smoothedEle": 63.78145579106413,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369772,
        "lng": 120.503054,
        "ele": 50,
        "distanceKm": 2.099548004960981,
        "gradePct": -0.2128927832477459,
        "smoothedEle": 64.70406936871657,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369627,
        "lng": 120.503623,
        "ele": 59,
        "distanceKm": 2.158482932503934,
        "gradePct": 1.473090179313886,
        "smoothedEle": 66.46094578328703,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.369383,
        "lng": 120.504085,
        "ele": 77.5,
        "distanceKm": 2.211911269312833,
        "gradePct": 2.5784058069914564,
        "smoothedEle": 68.4487414396172,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.369036,
        "lng": 120.5043615,
        "ele": 81.49999999999999,
        "distanceKm": 2.2593199432613194,
        "gradePct": 3.4915712851454264,
        "smoothedEle": 70.8043703231441,
        "gradeBand": "hard"
      },
      {
        "lat": 26.368689,
        "lng": 120.504638,
        "ele": 85.5,
        "distanceKm": 2.306728665263694,
        "gradePct": 4.445109174335503,
        "smoothedEle": 73.80834639621915,
        "gradeBand": "hard"
      },
      {
        "lat": 26.368173,
        "lng": 120.50482,
        "ele": 80,
        "distanceKm": 2.3669021479209724,
        "gradePct": 5.35778007122835,
        "smoothedEle": 77.4897419505812,
        "gradeBand": "hard"
      },
      {
        "lat": 26.368053,
        "lng": 120.504941,
        "ele": 80.75,
        "distanceKm": 2.3848844777368026,
        "gradePct": 5.505417956669343,
        "smoothedEle": 78.45404841254489,
        "gradeBand": "hard"
      },
      {
        "lat": 26.367996,
        "lng": 120.505138,
        "ele": 79.25,
        "distanceKm": 2.4055088984765365,
        "gradePct": 5.491214689476196,
        "smoothedEle": 79.19297128441367,
        "gradeBand": "hard"
      },
      {
        "lat": 26.367984,
        "lng": 120.505257,
        "ele": 77.25,
        "distanceKm": 2.417439287565574,
        "gradePct": 5.44654201911555,
        "smoothedEle": 79.6165000970745,
        "gradeBand": "hard"
      },
      {
        "lat": 26.368009,
        "lng": 120.505348,
        "ele": 76.75,
        "distanceKm": 2.4269219042682733,
        "gradePct": 5.379273667112929,
        "smoothedEle": 79.95313299002034,
        "gradeBand": "hard"
      },
      {
        "lat": 26.368297,
        "lng": 120.505752,
        "ele": 79.75,
        "distanceKm": 2.4783566133988466,
        "gradePct": 4.258017143748578,
        "smoothedEle": 80.52663205548336,
        "gradeBand": "hard"
      },
      {
        "lat": 26.368722,
        "lng": 120.506214,
        "ele": 83,
        "distanceKm": 2.544324862919201,
        "gradePct": 2.334234911393869,
        "smoothedEle": 80.77694027362082,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.368297,
        "lng": 120.505752,
        "ele": 79.75,
        "distanceKm": 2.6102931124395554,
        "gradePct": 0.5789220621363066,
        "smoothedEle": 80.52065500437345,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.368009,
        "lng": 120.505348,
        "ele": 76.75,
        "distanceKm": 2.6617278215701288,
        "gradePct": -0.21564740236663466,
        "smoothedEle": 79.90992555629802,
        "gradeBand": "descent"
      },
      {
        "lat": 26.368053,
        "lng": 120.504941,
        "ele": 80.75,
        "distanceKm": 2.702569837879618,
        "gradePct": -1.0844624423180693,
        "smoothedEle": 78.44958120296435,
        "gradeBand": "descent"
      },
      {
        "lat": 26.368173,
        "lng": 120.50482,
        "ele": 80,
        "distanceKm": 2.7205521676954483,
        "gradePct": -1.6005232537936949,
        "smoothedEle": 77.48569126672433,
        "gradeBand": "descent"
      },
      {
        "lat": 26.368689,
        "lng": 120.504638,
        "ele": 85.5,
        "distanceKm": 2.7807256503527267,
        "gradePct": -3.411729048593469,
        "smoothedEle": 73.81206587880514,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369036,
        "lng": 120.5043615,
        "ele": 81.49999999999999,
        "distanceKm": 2.8281343723551013,
        "gradePct": -4.754245213014503,
        "smoothedEle": 70.80031963928722,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369383,
        "lng": 120.504085,
        "ele": 77.5,
        "distanceKm": 2.8755430463035876,
        "gradePct": -5.485629282974872,
        "smoothedEle": 68.4446907557603,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369627,
        "lng": 120.503623,
        "ele": 59,
        "distanceKm": 2.928971383112487,
        "gradePct": -5.296500805434223,
        "smoothedEle": 66.37869175949758,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369772,
        "lng": 120.503054,
        "ele": 50,
        "distanceKm": 2.9879063106554398,
        "gradePct": -4.383178575181783,
        "smoothedEle": 64.58954104978388,
        "gradeBand": "descent"
      },
      {
        "lat": 26.3697235,
        "lng": 120.5026355,
        "ele": 50.75000000000001,
        "distanceKm": 3.029946644119391,
        "gradePct": -3.468553536817784,
        "smoothedEle": 63.773164914932735,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369675,
        "lng": 120.502217,
        "ele": 51.5,
        "distanceKm": 3.071986994933437,
        "gradePct": -2.665605053498451,
        "smoothedEle": 63.29017273105903,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369634,
        "lng": 120.501827,
        "ele": 56.25,
        "distanceKm": 3.1111072672395155,
        "gradePct": -2.001481329254821,
        "smoothedEle": 63.06650945589004,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369563,
        "lng": 120.501428,
        "ele": 57.75,
        "distanceKm": 3.1516340452828735,
        "gradePct": -1.2464029673813097,
        "smoothedEle": 63.19789111944585,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369541,
        "lng": 120.501303,
        "ele": 58.25,
        "distanceKm": 3.164325170868178,
        "gradePct": -0.7448416354635861,
        "smoothedEle": 63.81573569277266,
        "gradeBand": "descent"
      },
      {
        "lat": 26.369552,
        "lng": 120.501104,
        "ele": 60.75,
        "distanceKm": 3.1841882427492565,
        "gradePct": 0.05820320191045165,
        "smoothedEle": 64.81882082276712,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.369712999999997,
        "lng": 120.500674,
        "ele": 68.99999999999996,
        "distanceKm": 3.230617244343022,
        "gradePct": 2.174453004957952,
        "smoothedEle": 68.11436654892775,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.369874,
        "lng": 120.500244,
        "ele": 77.25,
        "distanceKm": 3.277046190877078,
        "gradePct": 4.512761937301703,
        "smoothedEle": 72.28677154282998,
        "gradeBand": "hard"
      },
      {
        "lat": 26.369938,
        "lng": 120.50006,
        "ele": 78.25,
        "distanceKm": 3.296710063067929,
        "gradePct": 5.492615108877972,
        "smoothedEle": 74.1340531558503,
        "gradeBand": "hard"
      },
      {
        "lat": 26.369703,
        "lng": 120.4994,
        "ele": 77.5,
        "distanceKm": 3.3674645134632946,
        "gradePct": 8.303123113247118,
        "smoothedEle": 80.58051872032028,
        "gradeBand": "steep"
      },
      {
        "lat": 26.369485,
        "lng": 120.498974,
        "ele": 84.25,
        "distanceKm": 3.4163396269460367,
        "gradePct": 8.950920064159822,
        "smoothedEle": 85.00277672232221,
        "gradeBand": "steep"
      },
      {
        "lat": 26.369293,
        "lng": 120.498523,
        "ele": 91.25,
        "distanceKm": 3.4660848629668055,
        "gradePct": 9.197394533918889,
        "smoothedEle": 89.69650489162244,
        "gradeBand": "extreme"
      },
      {
        "lat": 26.369165,
        "lng": 120.498103,
        "ele": 96,
        "distanceKm": 3.51028194508691,
        "gradePct": 8.867969185332433,
        "smoothedEle": 93.1065309892843,
        "gradeBand": "steep"
      },
      {
        "lat": 26.368982,
        "lng": 120.497664,
        "ele": 98.75,
        "distanceKm": 3.558519570231386,
        "gradePct": 8.07186326584447,
        "smoothedEle": 95.90926798629063,
        "gradeBand": "steep"
      },
      {
        "lat": 26.368777,
        "lng": 120.497195,
        "ele": 98.75,
        "distanceKm": 3.6105078471711485,
        "gradePct": 7.3927475818563915,
        "smoothedEle": 99.26060794957132,
        "gradeBand": "steep"
      },
      {
        "lat": 26.368396,
        "lng": 120.497195,
        "ele": 104.25000000000003,
        "distanceKm": 3.6528731727402195,
        "gradePct": 6.799862615881418,
        "smoothedEle": 102.04963672990525,
        "gradeBand": "steep"
      },
      {
        "lat": 26.368015,
        "lng": 120.497195,
        "ele": 109.75,
        "distanceKm": 3.6952384983092905,
        "gradePct": 6.195987695195678,
        "smoothedEle": 104.33782916639113,
        "gradeBand": "steep"
      },
      {
        "lat": 26.367797,
        "lng": 120.497071,
        "ele": 110.25,
        "distanceKm": 3.72244541810756,
        "gradePct": 5.894842868835271,
        "smoothedEle": 105.60294753604751,
        "gradeBand": "hard"
      },
      {
        "lat": 26.367563,
        "lng": 120.496785,
        "ele": 106.75,
        "distanceKm": 3.761031493815236,
        "gradePct": 5.740164742855834,
        "smoothedEle": 107.5515245522365,
        "gradeBand": "hard"
      },
      {
        "lat": 26.367275,
        "lng": 120.49663,
        "ele": 106.75,
        "distanceKm": 3.7965843926131284,
        "gradePct": 5.478069440923294,
        "smoothedEle": 109.319193913069,
        "gradeBand": "hard"
      },
      {
        "lat": 26.36669,
        "lng": 120.496635,
        "ele": 112.25,
        "distanceKm": 3.861635421846273,
        "gradePct": 4.7280689926645065,
        "smoothedEle": 111.97903231119888,
        "gradeBand": "hard"
      },
      {
        "lat": 26.366129,
        "lng": 120.496364,
        "ele": 111.75,
        "distanceKm": 3.9296079986611194,
        "gradePct": 4.111187536579781,
        "smoothedEle": 114.18702925045775,
        "gradeBand": "hard"
      },
      {
        "lat": 26.365954,
        "lng": 120.496394,
        "ele": 113,
        "distanceKm": 3.94929533625573,
        "gradePct": 3.8454135320159004,
        "smoothedEle": 114.64968168393112,
        "gradeBand": "hard"
      },
      {
        "lat": 26.365853,
        "lng": 120.496549,
        "ele": 116,
        "distanceKm": 3.968389713815509,
        "gradePct": 3.5810662049106807,
        "smoothedEle": 115.07950336233841,
        "gradeBand": "hard"
      },
      {
        "lat": 26.365582,
        "lng": 120.49664,
        "ele": 120.75,
        "distanceKm": 3.9998578797836704,
        "gradePct": 3.179931517449039,
        "smoothedEle": 115.81290489740977,
        "gradeBand": "hard"
      },
      {
        "lat": 26.36531,
        "lng": 120.496493,
        "ele": 122,
        "distanceKm": 4.0334622153756285,
        "gradePct": 2.94932604736415,
        "smoothedEle": 116.72572451762952,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.365092,
        "lng": 120.49616,
        "ele": 119.25,
        "distanceKm": 4.074550838788762,
        "gradePct": 2.669927891536785,
        "smoothedEle": 117.73842789126951,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.364902,
        "lng": 120.495742,
        "ele": 117.5,
        "distanceKm": 4.12124826775584,
        "gradePct": 2.104105370515958,
        "smoothedEle": 118.1236854747003,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.364681,
        "lng": 120.495249,
        "ele": 121.5,
        "distanceKm": 4.176169859825913,
        "gradePct": 1.3679334206017575,
        "smoothedEle": 117.99669538890173,
        "gradeBand": "moderate"
      },
      {
        "lat": 26.364286,
        "lng": 120.494758,
        "ele": 121,
        "distanceKm": 4.241912690524224,
        "gradePct": -0.28920650125829866,
        "smoothedEle": 116.35558874566885,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364085,
        "lng": 120.494341,
        "ele": 119.75,
        "distanceKm": 4.289088584906186,
        "gradePct": -1.9652226690306005,
        "smoothedEle": 113.92792013995805,
        "gradeBand": "descent"
      },
      {
        "lat": 26.363721,
        "lng": 120.493985,
        "ele": 116.5,
        "distanceKm": 4.34290514340934,
        "gradePct": -3.8305952424127736,
        "smoothedEle": 110.4124198119036,
        "gradeBand": "descent"
      },
      {
        "lat": 26.363999,
        "lng": 120.493838,
        "ele": 113.75,
        "distanceKm": 4.377111277324268,
        "gradePct": -5.226135198629801,
        "smoothedEle": 107.52092483969864,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364229,
        "lng": 120.493424,
        "ele": 107.25,
        "distanceKm": 4.425643363622789,
        "gradePct": -6.9146894053251,
        "smoothedEle": 102.93233331265955,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364598,
        "lng": 120.493179,
        "ele": 100.75,
        "distanceKm": 4.473385915357211,
        "gradePct": -8.245970968142885,
        "smoothedEle": 98.2440366070011,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364606,
        "lng": 120.493079,
        "ele": 97.25,
        "distanceKm": 4.4833884763989476,
        "gradePct": -8.527301001634207,
        "smoothedEle": 97.16664536775659,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364071,
        "lng": 120.493004,
        "ele": 94.25,
        "distanceKm": 4.543345284599345,
        "gradePct": -9.965418374926811,
        "smoothedEle": 90.44437727781477,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364216,
        "lng": 120.492627,
        "ele": 81.5,
        "distanceKm": 4.584220004499439,
        "gradePct": -10.632404975697964,
        "smoothedEle": 85.58400190549409,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364355,
        "lng": 120.492342,
        "ele": 74,
        "distanceKm": 4.616548545360125,
        "gradePct": -11.082413729296317,
        "smoothedEle": 81.62739895166267,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364469,
        "lng": 120.492276,
        "ele": 72.5,
        "distanceKm": 4.630828769360049,
        "gradePct": -11.257306536790827,
        "smoothedEle": 79.90851577152594,
        "gradeBand": "descent"
      },
      {
        "lat": 26.365086,
        "lng": 120.492314,
        "ele": 72.25,
        "distanceKm": 4.699540511817895,
        "gradePct": -11.510360004135043,
        "smoothedEle": 72.33498319055902,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364726,
        "lng": 120.4919965,
        "ele": 66.12500000000006,
        "distanceKm": 4.750560271563644,
        "gradePct": -10.680145845920796,
        "smoothedEle": 68.22615811788037,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364366,
        "lng": 120.491679,
        "ele": 60,
        "distanceKm": 4.801580092384676,
        "gradePct": -9.420803065798628,
        "smoothedEle": 64.61774142276182,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364317,
        "lng": 120.491527,
        "ele": 58.25,
        "distanceKm": 4.817674126134077,
        "gradePct": -8.93991010072625,
        "smoothedEle": 63.61209475078262,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364392,
        "lng": 120.49123,
        "ele": 54.75,
        "distanceKm": 4.848416847681901,
        "gradePct": -7.806704434674708,
        "smoothedEle": 62.356517085612566,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364643,
        "lng": 120.490798,
        "ele": 52.25,
        "distanceKm": 4.899713991779907,
        "gradePct": -5.634697301966695,
        "smoothedEle": 61.05161755224449,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364498,
        "lng": 120.490208,
        "ele": 58.75,
        "distanceKm": 4.960666429762233,
        "gradePct": -4.137492350102789,
        "smoothedEle": 59.236407481996245,
        "gradeBand": "descent"
      },
      {
        "lat": 26.364227666666668,
        "lng": 120.48990333333333,
        "ele": 59.333333333333336,
        "distanceKm": 5.003385742795901,
        "gradePct": -3.204219784799947,
        "smoothedEle": 58.09647455609767,
        "gradeBand": "descent"
      },
      {
        "lat": 26.36395733333333,
        "lng": 120.48959866666667,
        "ele": 59.916666666666664,
        "distanceKm": 5.046105106265008,
        "gradePct": -2.5534586024230754,
        "smoothedEle": 57.34401477783999,
        "gradeBand": "descent"
      },
      {
        "lat": 26.363687,
        "lng": 120.489294,
        "ele": 60.5,
        "distanceKm": 5.088824520168577,
        "gradePct": -2.076584964938517,
        "smoothedEle": 57.17545459174378,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 5.088824520168577,
      "elevationGainM": 133.8225642439308,
      "elevationLossM": 133.69440608627784,
      "minimumElevationM": 50,
      "maximumElevationM": 122,
      "maximumSustainedGradePct": 11.525677803886431
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 22,
        "startDistanceKm": 0,
        "endDistanceKm": 0.9675762524127367,
        "distanceKm": 0.9675762524127367,
        "gainM": 61.076389040609456,
        "averageGradePct": 6.312307571450838,
        "maximumGradePct": 11.525677803886431
      },
      {
        "startIndex": 65,
        "endIndex": 95,
        "startDistanceKm": 2.8755430463035876,
        "endDistanceKm": 4.12124826775584,
        "distanceKm": 1.2457052214522526,
        "gainM": 55.05717601881025,
        "averageGradePct": 4.4197595924519115,
        "maximumGradePct": 9.197394533918889
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
