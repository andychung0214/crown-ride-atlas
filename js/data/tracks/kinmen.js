"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("kinmen", {
  "kinmen-big-loop": {
    "routeId": "kinmen-big-loop",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:00:15.953Z",
      "reviewStatus": "approved",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "SRTM 100/100 公尺視窗易把海風地形短波放大為爬升 449 公尺、最大坡度 9.53%；500/200、750/300、1000/500 依序為 320/4.62%、265/4.27%、234/3.81%。採 500/200 保留島上起伏並降低單一像元雜訊；僅供行程規劃，並非道路測量。",
        "referenceUrl": "https://kinmen.travel/zh-tw/discover/cycling-tours",
        "referenceLabel": "金門縣政府觀光處鐵馬之旅"
      },
      "reviewedAt": "2026-08-01T05:02:17.708Z",
      "reviewerNote": "初版景點控制點導入翟山、古寧頭、馬山、八二三與中山林的 service、track、footway，均已改為外圍公共幹道或移除。核准版 raw 的 service、track、footway、path、steps、pedestrian、私人／權限禁制、route=ferry 與非法逆向單行均為 0；live OSM 五窗 5/5 於 0.05 公尺內命中西海路一段、民生路、瓊林圓環、陽沙路、伯玉路二段等完整公共道路 way。路線不進軍事設施、機場與港區；圃畦農路、戰地據點與海風仍需現場判斷。"
    },
    "waypoints": [
      {
        "name": "莒光樓外公共道路",
        "lat": 24.42539,
        "lng": 118.31816,
        "role": "start"
      },
      {
        "name": "水頭聚落外西海路",
        "lat": 24.4115,
        "lng": 118.29685,
        "role": "via"
      },
      {
        "name": "珠水路外圍公共道路",
        "lat": 24.4000149,
        "lng": 118.3240815,
        "role": "via"
      },
      {
        "name": "古寧頭外環島西路二段",
        "lat": 24.4733159,
        "lng": 118.3153734,
        "role": "via"
      },
      {
        "name": "成功路公共主線",
        "lat": 24.4904782,
        "lng": 118.4104121,
        "role": "via"
      },
      {
        "name": "山后民俗村外環島東路",
        "lat": 24.50328,
        "lng": 118.44053,
        "role": "via"
      },
      {
        "name": "莒光樓外公共道路",
        "lat": 24.42539,
        "lng": 118.31816,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.42539,
        "lng": 118.318155,
        "ele": 17,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 20.148577977040308,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.425027,
        "lng": 118.318029,
        "ele": 20,
        "distanceKm": 0.04233166463906308,
        "gradePct": 1.2319643947590533,
        "smoothedEle": 20.670089013102373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.424658,
        "lng": 118.317968,
        "ele": 19.5,
        "distanceKm": 0.08382483217256555,
        "gradePct": 1.0788358671586185,
        "smoothedEle": 21.052910332103462,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.424086,
        "lng": 118.318259,
        "ele": 19.75,
        "distanceKm": 0.15392066454637493,
        "gradePct": 0.8512512026259869,
        "smoothedEle": 21.458829485081235,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.423977,
        "lng": 118.31863,
        "ele": 21,
        "distanceKm": 0.19338933982092005,
        "gradePct": 0.748459092902307,
        "smoothedEle": 21.596018075633726,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.423761,
        "lng": 118.318795,
        "ele": 22.25,
        "distanceKm": 0.22264577201673985,
        "gradePct": 0.6331618301950321,
        "smoothedEle": 21.693889485594916,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.423566,
        "lng": 118.319089,
        "ele": 23.75,
        "distanceKm": 0.2594718923382885,
        "gradePct": 0.5404385148888942,
        "smoothedEle": 21.909103995845513,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.423145,
        "lng": 118.318797,
        "ele": 23.75,
        "distanceKm": 0.31483856677830896,
        "gradePct": 0.55101882224284,
        "smoothedEle": 22.33454594205313,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4227355,
        "lng": 118.3184815,
        "ele": 23.375,
        "distanceKm": 0.37045983468189164,
        "gradePct": 0.5123426419111059,
        "smoothedEle": 22.541003028238634,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.422326,
        "lng": 118.318166,
        "ele": 23,
        "distanceKm": 0.42608116212274405,
        "gradePct": 0.40132560878401335,
        "smoothedEle": 22.516617371373652,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.421994,
        "lng": 118.317809,
        "ele": 23.25,
        "distanceKm": 0.47774633274997697,
        "gradePct": 0.059985195370764195,
        "smoothedEle": 22.169496645522358,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.421727,
        "lng": 118.317543,
        "ele": 23.75,
        "distanceKm": 0.517830546995366,
        "gradePct": -0.3249961903713938,
        "smoothedEle": 21.695659304505714,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42134034542376,
        "lng": 118.3174411593745,
        "ele": 22.51047064178447,
        "distanceKm": 0.5620437562020294,
        "gradePct": -0.7137310742911076,
        "smoothedEle": 21.082301767252996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.420946,
        "lng": 118.317377,
        "ele": 20.75,
        "distanceKm": 0.60637157495306,
        "gradePct": -1.001101975545165,
        "smoothedEle": 20.523054552233678,
        "gradeBand": "descent"
      },
      {
        "lat": 24.420472,
        "lng": 118.317318,
        "ele": 19.25,
        "distanceKm": 0.659415474693133,
        "gradePct": -1.1513715885059774,
        "smoothedEle": 19.989912275051047,
        "gradeBand": "descent"
      },
      {
        "lat": 24.419953,
        "lng": 118.317213,
        "ele": 17.75,
        "distanceKm": 0.7180967330880792,
        "gradePct": -1.0186922346441336,
        "smoothedEle": 19.654582109690235,
        "gradeBand": "descent"
      },
      {
        "lat": 24.419405,
        "lng": 118.316945,
        "ele": 16.75,
        "distanceKm": 0.7848000925480698,
        "gradePct": -0.7698820719242436,
        "smoothedEle": 19.255439857619,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4190885,
        "lng": 118.316697,
        "ele": 17.25,
        "distanceKm": 0.8280326365748537,
        "gradePct": -0.6257793908542552,
        "smoothedEle": 19.053781240186595,
        "gradeBand": "descent"
      },
      {
        "lat": 24.418772,
        "lng": 118.316449,
        "ele": 17.75,
        "distanceKm": 0.8712652171775501,
        "gradePct": -0.5080184514406325,
        "smoothedEle": 18.9061608034051,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4185,
        "lng": 118.31619850000001,
        "ele": 19.25,
        "distanceKm": 0.9107371570919999,
        "gradePct": -0.46101797445952275,
        "smoothedEle": 18.774601970466698,
        "gradeBand": "descent"
      },
      {
        "lat": 24.418228,
        "lng": 118.315948,
        "ele": 20.75,
        "distanceKm": 0.9502091321327283,
        "gradePct": -0.3662047681402586,
        "smoothedEle": 18.73001710511161,
        "gradeBand": "descent"
      },
      {
        "lat": 24.417951666666667,
        "lng": 118.31567,
        "ele": 20.583333333333332,
        "distanceKm": 0.9918793789968197,
        "gradePct": -0.19095142646041557,
        "smoothedEle": 18.840515604967944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.41767533333333,
        "lng": 118.315392,
        "ele": 20.416666666666668,
        "distanceKm": 1.03354966749063,
        "gradePct": 0.0009227895099748199,
        "smoothedEle": 19.03678856106488,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.417399,
        "lng": 118.315114,
        "ele": 20.25,
        "distanceKm": 1.0752199976151278,
        "gradePct": 0.10660013038306818,
        "smoothedEle": 19.10617989547208,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.417077,
        "lng": 118.314697,
        "ele": 18,
        "distanceKm": 1.13057890712398,
        "gradePct": 0.07380564952324599,
        "smoothedEle": 18.89980137467711,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416723,
        "lng": 118.314357,
        "ele": 18.25,
        "distanceKm": 1.1828716479225854,
        "gradePct": -0.24598734234603908,
        "smoothedEle": 18.324654794185506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416266,
        "lng": 118.31399,
        "ele": 19.5,
        "distanceKm": 1.245824507677259,
        "gradePct": -0.7907946854813164,
        "smoothedEle": 17.47563981386598,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416191,
        "lng": 118.313877,
        "ele": 19.5,
        "distanceKm": 1.2599826506420537,
        "gradePct": -0.8851722455019007,
        "smoothedEle": 17.310461479276707,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416134,
        "lng": 118.313694,
        "ele": 19,
        "distanceKm": 1.279565558386192,
        "gradePct": -1.0011841856051105,
        "smoothedEle": 17.087611233975913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416183,
        "lng": 118.313357,
        "ele": 17.25,
        "distanceKm": 1.3141192836444224,
        "gradePct": -1.0882153564766601,
        "smoothedEle": 16.784732288545758,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416208,
        "lng": 118.313008,
        "ele": 15.75,
        "distanceKm": 1.349564903332089,
        "gradePct": -1.0722853819558777,
        "smoothedEle": 16.54641136301593,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416176,
        "lng": 118.312525,
        "ele": 13.5,
        "distanceKm": 1.3985981999647505,
        "gradePct": -0.7937661664918052,
        "smoothedEle": 16.525026008004918,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416009,
        "lng": 118.311962,
        "ele": 13.75,
        "distanceKm": 1.4585506615178914,
        "gradePct": -0.35169432543893653,
        "smoothedEle": 16.623779368180728,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416147,
        "lng": 118.311487,
        "ele": 14.75,
        "distanceKm": 1.5090333816282169,
        "gradePct": -0.03930640362597161,
        "smoothedEle": 16.750699700292415,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416316968920466,
        "lng": 118.31112094111207,
        "ele": 15.996728463101094,
        "distanceKm": 1.5506376295894064,
        "gradePct": 0.21813081672369533,
        "smoothedEle": 16.98220513822376,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41643098446023,
        "lng": 118.31072797055603,
        "ele": 17.12336423155055,
        "distanceKm": 1.5923970601873114,
        "gradePct": 0.46855304853013113,
        "smoothedEle": 17.46483666675531,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416545,
        "lng": 118.310335,
        "ele": 18.25,
        "distanceKm": 1.6341564565382583,
        "gradePct": 0.7704475039728804,
        "smoothedEle": 18.124492377787337,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416666,
        "lng": 118.309815,
        "ele": 19.25,
        "distanceKm": 1.6884985326493758,
        "gradePct": 1.2587034232269887,
        "smoothedEle": 19.21647918105449,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41675,
        "lng": 118.309432,
        "ele": 20.375,
        "distanceKm": 1.7283863570100595,
        "gradePct": 1.6078393620848428,
        "smoothedEle": 20.074067404809192,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416834,
        "lng": 118.309049,
        "ele": 21.5,
        "distanceKm": 1.768274156278777,
        "gradePct": 1.875010150392502,
        "smoothedEle": 20.936058290946775,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416924,
        "lng": 118.308628,
        "ele": 22.5,
        "distanceKm": 1.812059411898081,
        "gradePct": 2.054614133069532,
        "smoothedEle": 21.884662875674152,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416941,
        "lng": 118.308276,
        "ele": 23,
        "distanceKm": 1.8477494941637842,
        "gradePct": 2.0301289381649306,
        "smoothedEle": 22.457898038773727,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416739,
        "lng": 118.307778,
        "ele": 23.5,
        "distanceKm": 1.90294863503468,
        "gradePct": 1.7845501829174322,
        "smoothedEle": 23.096256748173396,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41645,
        "lng": 118.307266,
        "ele": 24.5,
        "distanceKm": 1.9639410982652432,
        "gradePct": 1.2932551465103654,
        "smoothedEle": 23.4289295117387,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.416116,
        "lng": 118.306657,
        "ele": 26.5,
        "distanceKm": 2.0359234786565086,
        "gradePct": 0.49489203911244867,
        "smoothedEle": 23.257738931167257,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.415819749999997,
        "lng": 118.30623325,
        "ele": 24.812499999999993,
        "distanceKm": 2.090015846258731,
        "gradePct": -0.1220629538126659,
        "smoothedEle": 22.70256767304764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4155235,
        "lng": 118.30580950000001,
        "ele": 23.125,
        "distanceKm": 2.144108293738718,
        "gradePct": -0.7057566284904093,
        "smoothedEle": 21.909241678070455,
        "gradeBand": "descent"
      },
      {
        "lat": 24.41522725,
        "lng": 118.30538575,
        "ele": 21.437500000000007,
        "distanceKm": 2.1982008210970116,
        "gradePct": -1.1786068066460769,
        "smoothedEle": 20.99023843396277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.414931,
        "lng": 118.304962,
        "ele": 19.75,
        "distanceKm": 2.2522934283307294,
        "gradePct": -1.5383037011282163,
        "smoothedEle": 20.013120292596984,
        "gradeBand": "descent"
      },
      {
        "lat": 24.41469726176777,
        "lng": 118.30456867010469,
        "ele": 17.984605496768342,
        "distanceKm": 2.299849324196556,
        "gradePct": -1.7598561820734118,
        "smoothedEle": 19.03863640159407,
        "gradeBand": "descent"
      },
      {
        "lat": 24.414464,
        "lng": 118.304175,
        "ele": 16,
        "distanceKm": 2.34740521579066,
        "gradePct": -1.7888340847066273,
        "smoothedEle": 18.275560558083896,
        "gradeBand": "descent"
      },
      {
        "lat": 24.414118,
        "lng": 118.303593,
        "ele": 15.25,
        "distanceKm": 2.4177813701962756,
        "gradePct": -1.5332146181303288,
        "smoothedEle": 17.570110037664797,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4139330884192,
        "lng": 118.30325262947052,
        "ele": 15.396578950730119,
        "distanceKm": 2.4579122086425556,
        "gradePct": -1.2251018350411804,
        "smoothedEle": 17.447780301323093,
        "gradeBand": "descent"
      },
      {
        "lat": 24.413738,
        "lng": 118.302919,
        "ele": 15.75,
        "distanceKm": 2.4980584811217956,
        "gradePct": -0.7771770582344175,
        "smoothedEle": 17.52097905417763,
        "gradeBand": "descent"
      },
      {
        "lat": 24.413435597699024,
        "lng": 118.30255678647907,
        "ele": 16.641184930061566,
        "distanceKm": 2.547815345402926,
        "gradePct": -0.1680879953164139,
        "smoothedEle": 17.935273428516926,
        "gradeBand": "descent"
      },
      {
        "lat": 24.413113946849336,
        "lng": 118.30221454552309,
        "ele": 17.823724818618203,
        "distanceKm": 2.59761523355734,
        "gradePct": 0.49051899466731497,
        "smoothedEle": 18.753293365955955,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412792295999648,
        "lng": 118.3018723045671,
        "ele": 19.00626470717483,
        "distanceKm": 2.6474151831543975,
        "gradePct": 1.1173132904169494,
        "smoothedEle": 19.714404677619388,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412470645149963,
        "lng": 118.30153006361111,
        "ele": 20.188804595731458,
        "distanceKm": 2.6972151941931366,
        "gradePct": 1.5238781379165425,
        "smoothedEle": 20.567197763814296,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41214907706152,
        "lng": 118.30118773091664,
        "ele": 22.04807601846585,
        "distanceKm": 2.7470151227307564,
        "gradePct": 1.6313373510777436,
        "smoothedEle": 21.19128517559901,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411827538530762,
        "lng": 118.30084536545833,
        "ele": 24.149038009232935,
        "distanceKm": 2.796815062160829,
        "gradePct": 1.3968711352679282,
        "smoothedEle": 21.533891909066462,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411506,
        "lng": 118.300503,
        "ele": 26.25,
        "distanceKm": 2.8466150630555944,
        "gradePct": 0.9084436832490406,
        "smoothedEle": 21.515850171507733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411203,
        "lng": 118.3001805,
        "ele": 24.749999999999993,
        "distanceKm": 2.893534976374774,
        "gradePct": 0.3233828569504646,
        "smoothedEle": 21.15094211997397,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4109,
        "lng": 118.299858,
        "ele": 23.25,
        "distanceKm": 2.9404549442397356,
        "gradePct": -0.29981111576363134,
        "smoothedEle": 20.509451484426492,
        "gradeBand": "descent"
      },
      {
        "lat": 24.41089,
        "lng": 118.299669,
        "ele": 22.25,
        "distanceKm": 2.959624379934671,
        "gradePct": -0.5535090892137293,
        "smoothedEle": 20.171014420391817,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411094,
        "lng": 118.299332,
        "ele": 20.75,
        "distanceKm": 3.0005990436082417,
        "gradePct": -1.1204644240482162,
        "smoothedEle": 19.291592185488607,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411324666666665,
        "lng": 118.299,
        "ele": 18.500000000000007,
        "distanceKm": 3.042883094970699,
        "gradePct": -1.6356367914996623,
        "smoothedEle": 18.24592862038703,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411555333333332,
        "lng": 118.298668,
        "ele": 16.249999999999993,
        "distanceKm": 3.0851670975004484,
        "gradePct": -2.1644414828079057,
        "smoothedEle": 16.887138268096685,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411786,
        "lng": 118.298336,
        "ele": 14,
        "distanceKm": 3.1274510511970894,
        "gradePct": -2.562474313333088,
        "smoothedEle": 15.562292314831703,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411967,
        "lng": 118.297993,
        "ele": 12.5,
        "distanceKm": 3.167591431863476,
        "gradePct": -2.7799349069598236,
        "smoothedEle": 14.440151070841546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411996,
        "lng": 118.29741,
        "ele": 10.75,
        "distanceKm": 3.2267104860075344,
        "gradePct": -2.7499126666128313,
        "smoothedEle": 13.146043865240207,
        "gradeBand": "descent"
      },
      {
        "lat": 24.412025,
        "lng": 118.297019,
        "ele": 10.75,
        "distanceKm": 3.266431873645052,
        "gradePct": -2.4632994902916128,
        "smoothedEle": 12.562593017048684,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411565,
        "lng": 118.297103,
        "ele": 8.75,
        "distanceKm": 3.3182839367344537,
        "gradePct": -1.7936032419868317,
        "smoothedEle": 12.262310970353564,
        "gradeBand": "descent"
      },
      {
        "lat": 24.412025,
        "lng": 118.297019,
        "ele": 10.75,
        "distanceKm": 3.370135999823855,
        "gradePct": -0.9109289218808403,
        "smoothedEle": 12.562593017048682,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411996,
        "lng": 118.29741,
        "ele": 10.75,
        "distanceKm": 3.409857387461373,
        "gradePct": -0.18445589650463817,
        "smoothedEle": 13.14604386524021,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411967,
        "lng": 118.297993,
        "ele": 12.5,
        "distanceKm": 3.4689764416054314,
        "gradePct": 0.9461469890330587,
        "smoothedEle": 14.440151070841548,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411786,
        "lng": 118.298336,
        "ele": 14,
        "distanceKm": 3.509116822271818,
        "gradePct": 1.6376370239091993,
        "smoothedEle": 15.590672971266187,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411555333333332,
        "lng": 118.298668,
        "ele": 16.249999999999993,
        "distanceKm": 3.551400775968459,
        "gradePct": 2.237509629419537,
        "smoothedEle": 16.929114155863303,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411324666666665,
        "lng": 118.299,
        "ele": 18.500000000000007,
        "distanceKm": 3.593684778498208,
        "gradePct": 2.7903749331082217,
        "smoothedEle": 18.48924104313829,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411094,
        "lng": 118.299332,
        "ele": 20.75,
        "distanceKm": 3.6359688298606656,
        "gradePct": 3.137403106296573,
        "smoothedEle": 19.992425625629313,
        "gradeBand": "hard"
      },
      {
        "lat": 24.41089,
        "lng": 118.299669,
        "ele": 22.25,
        "distanceKm": 3.676943493534236,
        "gradePct": 3.426964097355737,
        "smoothedEle": 21.52243454205358,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4109,
        "lng": 118.299858,
        "ele": 23.25,
        "distanceKm": 3.6961129292291717,
        "gradePct": 3.50921561587594,
        "smoothedEle": 22.236380688991392,
        "gradeBand": "hard"
      },
      {
        "lat": 24.41058006281234,
        "lng": 118.30030272218475,
        "ele": 25.392408483303566,
        "distanceKm": 3.7535005689181586,
        "gradePct": 3.674359455371843,
        "smoothedEle": 24.355307838211974,
        "gradeBand": "hard"
      },
      {
        "lat": 24.410260055569523,
        "lng": 118.30074738226287,
        "ele": 27.058308245383444,
        "distanceKm": 3.810888193541094,
        "gradePct": 3.6924042738194918,
        "smoothedEle": 26.485625526039247,
        "gradeBand": "hard"
      },
      {
        "lat": 24.40994,
        "lng": 118.301192,
        "ele": 28.5,
        "distanceKm": 3.8682758764566896,
        "gradePct": 3.6767277411650388,
        "smoothedEle": 28.552238034987305,
        "gradeBand": "hard"
      },
      {
        "lat": 24.40962674584771,
        "lng": 118.3015106995986,
        "ele": 29.57954398312452,
        "distanceKm": 3.9157590645707687,
        "gradePct": 3.6244280231457706,
        "smoothedEle": 30.21063213014809,
        "gradeBand": "hard"
      },
      {
        "lat": 24.409314,
        "lng": 118.30183,
        "ele": 30.75,
        "distanceKm": 3.9632422616959273,
        "gradePct": 3.5898049113101056,
        "smoothedEle": 31.89654441521027,
        "gradeBand": "hard"
      },
      {
        "lat": 24.408982833333333,
        "lng": 118.30213483333333,
        "ele": 32.83333333333333,
        "distanceKm": 4.011291622615034,
        "gradePct": 3.5512835165945735,
        "smoothedEle": 33.60272061696343,
        "gradeBand": "hard"
      },
      {
        "lat": 24.408651666666664,
        "lng": 118.30243966666666,
        "ele": 34.91666666666666,
        "distanceKm": 4.059341035543475,
        "gradePct": 3.5793783039259357,
        "smoothedEle": 35.38923824741425,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4083205,
        "lng": 118.3027445,
        "ele": 37.00000000000001,
        "distanceKm": 4.107390500480985,
        "gradePct": 3.6800440557319978,
        "smoothedEle": 37.27844043011062,
        "gradeBand": "hard"
      },
      {
        "lat": 24.407989333333333,
        "lng": 118.30304933333333,
        "ele": 39.08333333333334,
        "distanceKm": 4.155440017425438,
        "gradePct": 3.8219391238569376,
        "smoothedEle": 39.26340046848338,
        "gradeBand": "hard"
      },
      {
        "lat": 24.407658166666664,
        "lng": 118.30335416666667,
        "ele": 41.16666666666667,
        "distanceKm": 4.2034895863774775,
        "gradePct": 4.00181429936686,
        "smoothedEle": 41.3293081000797,
        "gradeBand": "hard"
      },
      {
        "lat": 24.407327,
        "lng": 118.303659,
        "ele": 43.25,
        "distanceKm": 4.251539207335916,
        "gradePct": 4.173657142171589,
        "smoothedEle": 43.446473989834125,
        "gradeBand": "hard"
      },
      {
        "lat": 24.40696847476695,
        "lng": 118.30398271695799,
        "ele": 45.76393097608489,
        "distanceKm": 4.303150946502599,
        "gradePct": 4.312200748513394,
        "smoothedEle": 45.73615173318745,
        "gradeBand": "hard"
      },
      {
        "lat": 24.406609949533898,
        "lng": 118.304306433916,
        "ele": 48.27786195216979,
        "distanceKm": 4.354762744781462,
        "gradePct": 4.403984982929714,
        "smoothedEle": 48.0433918152252,
        "gradeBand": "hard"
      },
      {
        "lat": 24.406251453873015,
        "lng": 118.30463018959794,
        "ele": 50.55572356847048,
        "distanceKm": 4.406374552809276,
        "gradePct": 4.400945345030994,
        "smoothedEle": 50.25831639066915,
        "gradeBand": "hard"
      },
      {
        "lat": 24.405893,
        "lng": 118.304954,
        "ele": 52.5,
        "distanceKm": 4.45798635109199,
        "gradePct": 4.217063622100714,
        "smoothedEle": 52.16661914013262,
        "gradeBand": "hard"
      },
      {
        "lat": 24.40554021209178,
        "lng": 118.3052551967771,
        "ele": 54.811163388600974,
        "distanceKm": 4.507675777879743,
        "gradePct": 3.851299013750268,
        "smoothedEle": 53.64102661725864,
        "gradeBand": "hard"
      },
      {
        "lat": 24.40518742418356,
        "lng": 118.30555639355418,
        "ele": 57.12232677720195,
        "distanceKm": 4.557365256966353,
        "gradePct": 3.302732076166379,
        "smoothedEle": 54.76054297129749,
        "gradeBand": "hard"
      },
      {
        "lat": 24.404834636275336,
        "lng": 118.30585759033129,
        "ele": 59.43349016580292,
        "distanceKm": 4.607054788353281,
        "gradePct": 2.7028359192790687,
        "smoothedEle": 55.68913936524849,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.404482,
        "lng": 118.306159,
        "ele": 59.5,
        "distanceKm": 4.65674430025924,
        "gradePct": 2.1575773710072585,
        "smoothedEle": 56.435850099253024,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40400320896681,
        "lng": 118.30645488543584,
        "ele": 57.55912002210856,
        "distanceKm": 4.717835205864904,
        "gradePct": 1.5696610071652253,
        "smoothedEle": 57.00924307737797,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.403523,
        "lng": 118.306748,
        "ele": 56,
        "distanceKm": 4.778926810098166,
        "gradePct": 1.0603301202436262,
        "smoothedEle": 57.28414483605313,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.403132,
        "lng": 118.3069945,
        "ele": 56.49999999999999,
        "distanceKm": 4.829059787061796,
        "gradePct": 0.5581660648443783,
        "smoothedEle": 57.13615231886044,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.402741,
        "lng": 118.307241,
        "ele": 57,
        "distanceKm": 4.879192802502712,
        "gradePct": 0.0029536161401644253,
        "smoothedEle": 56.65245667259264,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.403077255522124,
        "lng": 118.3076237589454,
        "ele": 56.329277548960604,
        "distanceKm": 4.933046686348368,
        "gradePct": -0.5159634933502875,
        "smoothedEle": 56.045765148276054,
        "gradeBand": "descent"
      },
      {
        "lat": 24.403414,
        "lng": 118.308006,
        "ele": 56.75,
        "distanceKm": 4.986900554295716,
        "gradePct": -0.7992881616035483,
        "smoothedEle": 55.66203002487429,
        "gradeBand": "descent"
      },
      {
        "lat": 24.403685348480135,
        "lng": 118.30840925752703,
        "ele": 55.80928606009615,
        "distanceKm": 5.03767272772263,
        "gradePct": -0.8265933526195177,
        "smoothedEle": 55.39986584668003,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40395717424007,
        "lng": 118.3088121287635,
        "ele": 54.77964303004807,
        "distanceKm": 5.088444952752019,
        "gradePct": -0.7596418309901865,
        "smoothedEle": 55.02894280961051,
        "gradeBand": "descent"
      },
      {
        "lat": 24.404229,
        "lng": 118.309215,
        "ele": 53.75,
        "distanceKm": 5.139217107227675,
        "gradePct": -0.752647236015185,
        "smoothedEle": 54.496503412466666,
        "gradeBand": "descent"
      },
      {
        "lat": 24.403872454219254,
        "lng": 118.3095229363153,
        "ele": 54.07961079385579,
        "distanceKm": 5.189656337481255,
        "gradePct": -0.8800205514617218,
        "smoothedEle": 53.887759323622575,
        "gradeBand": "descent"
      },
      {
        "lat": 24.403516,
        "lng": 118.309831,
        "ele": 54.25,
        "distanceKm": 5.240095595538215,
        "gradePct": -1.0961830867831768,
        "smoothedEle": 53.18979909985626,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40325225,
        "lng": 118.31018725,
        "ele": 53.25000000000001,
        "distanceKm": 5.286587099115895,
        "gradePct": -1.2640130995320493,
        "smoothedEle": 52.514489399856764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4029885,
        "lng": 118.3105435,
        "ele": 52.25,
        "distanceKm": 5.33307866115229,
        "gradePct": -1.3714377746677247,
        "smoothedEle": 51.81800075731961,
        "gradeBand": "descent"
      },
      {
        "lat": 24.402724749999997,
        "lng": 118.31089975,
        "ele": 51.24999999999999,
        "distanceKm": 5.379570281647723,
        "gradePct": -1.5299805325725786,
        "smoothedEle": 50.949525470362815,
        "gradeBand": "descent"
      },
      {
        "lat": 24.402461,
        "lng": 118.311256,
        "ele": 50.25,
        "distanceKm": 5.426061960599167,
        "gradePct": -1.7260201876914132,
        "smoothedEle": 49.93195109287131,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4020075,
        "lng": 118.3115815,
        "ele": 49.375,
        "distanceKm": 5.486305524081507,
        "gradePct": -1.9933282484906896,
        "smoothedEle": 48.53192290507723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401554,
        "lng": 118.311907,
        "ele": 48.5,
        "distanceKm": 5.5465491523184935,
        "gradePct": -2.280477676632474,
        "smoothedEle": 47.005413205470255,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401145,
        "lng": 118.312189,
        "ele": 45.5,
        "distanceKm": 5.6002498606315765,
        "gradePct": -2.4566213514594692,
        "smoothedEle": 45.583663929280206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400879,
        "lng": 118.312503,
        "ele": 43,
        "distanceKm": 5.643676452935856,
        "gradePct": -2.5145394603541518,
        "smoothedEle": 44.493520793201554,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40085,
        "lng": 118.312732,
        "ele": 42.75,
        "distanceKm": 5.667088780173488,
        "gradePct": -2.5208759115323267,
        "smoothedEle": 43.936757930360834,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400925,
        "lng": 118.31307,
        "ele": 42.75,
        "distanceKm": 5.702316976446095,
        "gradePct": -2.5262237027369365,
        "smoothedEle": 43.0737622639531,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400847,
        "lng": 118.313365,
        "ele": 42,
        "distanceKm": 5.7334231343715585,
        "gradePct": -2.5147871832930107,
        "smoothedEle": 42.30843822407382,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40061,
        "lng": 118.3137645,
        "ele": 40.5,
        "distanceKm": 5.781704225076315,
        "gradePct": -2.473108885310628,
        "smoothedEle": 41.12844981122629,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400373,
        "lng": 118.314164,
        "ele": 39,
        "distanceKm": 5.829985379385893,
        "gradePct": -2.4123459526748317,
        "smoothedEle": 40.01251760630953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400094,
        "lng": 118.314797,
        "ele": 38.75,
        "distanceKm": 5.90119791413804,
        "gradePct": -2.072720767013797,
        "smoothedEle": 38.95573473417423,
        "gradeBand": "descent"
      },
      {
        "lat": 24.39986256447006,
        "lng": 118.31507509804081,
        "ele": 37.9269767635563,
        "distanceKm": 5.939346533376765,
        "gradePct": -1.8337242427899894,
        "smoothedEle": 38.496222043961865,
        "gradeBand": "descent"
      },
      {
        "lat": 24.399626,
        "lng": 118.315348,
        "ele": 37,
        "distanceKm": 5.977499385916212,
        "gradePct": -1.6082684989159923,
        "smoothedEle": 38.014678956710135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.399293,
        "lng": 118.315831,
        "ele": 36.75,
        "distanceKm": 6.038845184483023,
        "gradePct": -1.2781330971075693,
        "smoothedEle": 37.32477329086628,
        "gradeBand": "descent"
      },
      {
        "lat": 24.399146,
        "lng": 118.316198,
        "ele": 36.25,
        "distanceKm": 6.079444942075101,
        "gradePct": -1.1997281904889394,
        "smoothedEle": 36.8790890546292,
        "gradeBand": "descent"
      },
      {
        "lat": 24.399296,
        "lng": 118.316552,
        "ele": 37.25,
        "distanceKm": 6.118982798982319,
        "gradePct": -1.1751418938386093,
        "smoothedEle": 36.39122614772327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.399426,
        "lng": 118.316721,
        "ele": 37.5,
        "distanceKm": 6.141384442137226,
        "gradePct": -1.193719765362263,
        "smoothedEle": 36.08306121559557,
        "gradeBand": "descent"
      },
      {
        "lat": 24.399434,
        "lng": 118.316922,
        "ele": 36.75,
        "distanceKm": 6.1617579356291285,
        "gradePct": -1.2165306292807674,
        "smoothedEle": 35.78029711697383,
        "gradeBand": "descent"
      },
      {
        "lat": 24.39974,
        "lng": 118.317346,
        "ele": 36.25,
        "distanceKm": 6.216541490610294,
        "gradePct": -1.3193120664491385,
        "smoothedEle": 34.936980431364574,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40005141820316,
        "lng": 118.31764517684557,
        "ele": 35.54914194072305,
        "distanceKm": 6.26255172531578,
        "gradePct": -1.4491242373636397,
        "smoothedEle": 34.16628603217808,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400378134562526,
        "lng": 118.31792514147647,
        "ele": 34.13931355257843,
        "distanceKm": 6.308633676556343,
        "gradePct": -1.6687334458767948,
        "smoothedEle": 33.18145846239128,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400704850921894,
        "lng": 118.31820510610734,
        "ele": 32.72948516443381,
        "distanceKm": 6.354715582680341,
        "gradePct": -1.8878249512247098,
        "smoothedEle": 32.10930141354841,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401031567281265,
        "lng": 118.31848507073823,
        "ele": 31.319656776289214,
        "distanceKm": 6.400797443689362,
        "gradePct": -2.166452478474241,
        "smoothedEle": 30.846433194209947,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401358283640633,
        "lng": 118.31876503536911,
        "ele": 29.90982838814462,
        "distanceKm": 6.446879259580519,
        "gradePct": -2.4388383765980173,
        "smoothedEle": 29.55113090359284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401685,
        "lng": 118.319045,
        "ele": 28.5,
        "distanceKm": 6.4929610303553975,
        "gradePct": -2.660105394451852,
        "smoothedEle": 28.196191261045975,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401833,
        "lng": 118.319395,
        "ele": 26.25,
        "distanceKm": 6.5320371869847635,
        "gradePct": -2.8136388447936715,
        "smoothedEle": 27.00966686736825,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401588500000003,
        "lng": 118.319657,
        "ele": 25.125,
        "distanceKm": 6.5700243050301586,
        "gradePct": -2.8916715827931805,
        "smoothedEle": 25.906424433334287,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401344,
        "lng": 118.319919,
        "ele": 24,
        "distanceKm": 6.6080114589456995,
        "gradePct": -2.8737087057029274,
        "smoothedEle": 24.89623882392402,
        "gradeBand": "descent"
      },
      {
        "lat": 24.401017,
        "lng": 118.320396,
        "ele": 22.75,
        "distanceKm": 6.668469835605348,
        "gradePct": -2.724413674928353,
        "smoothedEle": 23.467477094823014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400678,
        "lng": 118.320643,
        "ele": 21.75,
        "distanceKm": 6.713708309220875,
        "gradePct": -2.5559847399823172,
        "smoothedEle": 22.45424292441396,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40046,
        "lng": 118.320955,
        "ele": 20.5,
        "distanceKm": 6.753530278707276,
        "gradePct": -2.4076044344704015,
        "smoothedEle": 21.570244000447286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400559,
        "lng": 118.321367,
        "ele": 19.75,
        "distanceKm": 6.796678577327301,
        "gradePct": -2.2576608996497747,
        "smoothedEle": 20.6822903243855,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400735,
        "lng": 118.32184799999999,
        "ele": 19.875,
        "distanceKm": 6.849170671504669,
        "gradePct": -2.1478701405470204,
        "smoothedEle": 19.62781765139218,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400911,
        "lng": 118.322329,
        "ele": 20,
        "distanceKm": 6.901662702704504,
        "gradePct": -2.026366735633081,
        "smoothedEle": 18.67130237828972,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40071234235929,
        "lng": 118.32278180155073,
        "ele": 18.613499092197344,
        "distanceKm": 6.952558307214019,
        "gradePct": -1.788316024148312,
        "smoothedEle": 18.015188528227817,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400471326474808,
        "lng": 118.32321127630748,
        "ele": 17.05855790197003,
        "distanceKm": 7.003642574766723,
        "gradePct": -1.4503895000491522,
        "smoothedEle": 17.641617020016277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40023031059032,
        "lng": 118.32364075106422,
        "ele": 15.503616711742714,
        "distanceKm": 7.0547269129702,
        "gradePct": -0.9762703835940902,
        "smoothedEle": 17.57403047210397,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400015,
        "lng": 118.324082,
        "ele": 14,
        "distanceKm": 7.105419221074253,
        "gradePct": -0.5182888699182118,
        "smoothedEle": 17.586297986404336,
        "gradeBand": "descent"
      },
      {
        "lat": 24.400263196470558,
        "lng": 118.32358215054731,
        "ele": 15.715783681010256,
        "distanceKm": 7.163070666907171,
        "gradePct": -0.1838367897836582,
        "smoothedEle": 17.570639655080516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.40053709823528,
        "lng": 118.32309407527364,
        "ele": 17.482891840505143,
        "distanceKm": 7.221125290373198,
        "gradePct": 0.048999684229430636,
        "smoothedEle": 17.71648608205387,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.400811,
        "lng": 118.322606,
        "ele": 19.25,
        "distanceKm": 7.279179822591754,
        "gradePct": 0.3311962834990127,
        "smoothedEle": 18.2423406315275,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.400911,
        "lng": 118.322329,
        "ele": 20,
        "distanceKm": 7.309353243125953,
        "gradePct": 0.5471960875461739,
        "smoothedEle": 18.679621667552937,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.400735,
        "lng": 118.32184799999999,
        "ele": 19.875,
        "distanceKm": 7.3618452743257885,
        "gradePct": 1.031312665049966,
        "smoothedEle": 19.63359780602759,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.400559,
        "lng": 118.321367,
        "ele": 19.75,
        "distanceKm": 7.414337368503157,
        "gradePct": 1.4928990226790106,
        "smoothedEle": 20.685231322790756,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40046,
        "lng": 118.320955,
        "ele": 20.5,
        "distanceKm": 7.457485667123181,
        "gradePct": 1.754469974210871,
        "smoothedEle": 21.554776191503045,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.400678,
        "lng": 118.320643,
        "ele": 21.75,
        "distanceKm": 7.497307636609582,
        "gradePct": 1.9138067719378624,
        "smoothedEle": 22.332667157698616,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.401017,
        "lng": 118.320396,
        "ele": 22.75,
        "distanceKm": 7.54254611022511,
        "gradePct": 1.85809132641937,
        "smoothedEle": 22.999042611163993,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.401344,
        "lng": 118.319919,
        "ele": 24,
        "distanceKm": 7.603004486884758,
        "gradePct": 1.70591576697829,
        "smoothedEle": 23.870018416280796,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.401588500000003,
        "lng": 118.319657,
        "ele": 25.125,
        "distanceKm": 7.640991640800299,
        "gradePct": 1.6043366121419305,
        "smoothedEle": 24.431054016381477,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.401833,
        "lng": 118.319395,
        "ele": 26.25,
        "distanceKm": 7.678978758845694,
        "gradePct": 1.5014497665972495,
        "smoothedEle": 24.977526427768996,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.402086,
        "lng": 118.319085,
        "ele": 27.25,
        "distanceKm": 7.721131309859646,
        "gradePct": 1.410383717098036,
        "smoothedEle": 25.5043640065373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.402561,
        "lng": 118.319099,
        "ele": 26.5,
        "distanceKm": 7.773967995091822,
        "gradePct": 1.2788663881999944,
        "smoothedEle": 26.009445521665324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40300019228191,
        "lng": 118.31893796282996,
        "ele": 27.231987136523248,
        "distanceKm": 7.825454593622377,
        "gradePct": 1.1111133610760104,
        "smoothedEle": 26.42381272925229,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40344,
        "lng": 118.318779,
        "ele": 27.25,
        "distanceKm": 7.87694003187241,
        "gradePct": 0.9095281447171706,
        "smoothedEle": 26.76725414208164,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.403845709798542,
        "lng": 118.31854427732132,
        "ele": 26.810444421948628,
        "distanceKm": 7.9279312312960535,
        "gradePct": 0.7276034631277047,
        "smoothedEle": 27.02457339475186,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.404251419597085,
        "lng": 118.31830955464265,
        "ele": 26.370888843897255,
        "distanceKm": 7.978922395126611,
        "gradePct": 0.5807610621600018,
        "smoothedEle": 27.210840952171324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.404657348421665,
        "lng": 118.31807529241041,
        "ele": 26.606066609216473,
        "distanceKm": 8.029913364761406,
        "gradePct": 0.48398481509003016,
        "smoothedEle": 27.421525267553946,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.405063011316248,
        "lng": 118.31784046930781,
        "ele": 27.204549956912356,
        "distanceKm": 8.080904584328861,
        "gradePct": 0.39356588818672084,
        "smoothedEle": 27.57439242324016,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.405468674210834,
        "lng": 118.31760564620521,
        "ele": 27.80303330460824,
        "distanceKm": 8.131895768276596,
        "gradePct": 0.3090106061566204,
        "smoothedEle": 27.657076814651475,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.405874337105416,
        "lng": 118.3173708231026,
        "ele": 28.401516652304117,
        "distanceKm": 8.182886916603444,
        "gradePct": 0.24924278458629145,
        "smoothedEle": 27.725707117734768,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40628,
        "lng": 118.317136,
        "ele": 29,
        "distanceKm": 8.23387802930929,
        "gradePct": 0.19469427676653941,
        "smoothedEle": 27.8227995339181,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4067105,
        "lng": 118.3170575,
        "ele": 28.625,
        "distanceKm": 8.282402975499753,
        "gradePct": 0.16839247571947052,
        "smoothedEle": 27.913607080217773,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.407141,
        "lng": 118.316979,
        "ele": 28.25,
        "distanceKm": 8.33092791725094,
        "gradePct": 0.1450240067734208,
        "smoothedEle": 27.94555541625614,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4075715,
        "lng": 118.3169005,
        "ele": 27.875,
        "distanceKm": 8.379452854562787,
        "gradePct": 0.10064396207651108,
        "smoothedEle": 27.922373049122566,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.408002,
        "lng": 118.316822,
        "ele": 27.5,
        "distanceKm": 8.427977787435239,
        "gradePct": 0.016247548175590213,
        "smoothedEle": 27.844059952122084,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.40854655413108,
        "lng": 118.31668425640414,
        "ele": 27.5,
        "distanceKm": 8.49011510108412,
        "gradePct": -0.14228279774876693,
        "smoothedEle": 27.634119071026326,
        "gradeBand": "descent"
      },
      {
        "lat": 24.409091,
        "lng": 118.316546,
        "ele": 27.25,
        "distanceKm": 8.552252348250924,
        "gradePct": -0.29681164738724347,
        "smoothedEle": 27.341744559874325,
        "gradeBand": "descent"
      },
      {
        "lat": 24.409496181959163,
        "lng": 118.31649741782383,
        "ele": 27.25,
        "distanceKm": 8.597574346414627,
        "gradePct": -0.3588190022979449,
        "smoothedEle": 27.175489251381187,
        "gradeBand": "descent"
      },
      {
        "lat": 24.409901363918326,
        "lng": 118.31644883564765,
        "ele": 27.25,
        "distanceKm": 8.642896342864779,
        "gradePct": -0.35683497634920286,
        "smoothedEle": 27.07998526694278,
        "gradeBand": "descent"
      },
      {
        "lat": 24.410306545877493,
        "lng": 118.31640025347146,
        "ele": 27.25,
        "distanceKm": 8.688218337601908,
        "gradePct": -0.2783310194134653,
        "smoothedEle": 27.083865551868204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.410711772349302,
        "lng": 118.31635212078352,
        "ele": 26.756534563373492,
        "distanceKm": 8.733540334169845,
        "gradePct": -0.1306763458282494,
        "smoothedEle": 27.168437544830088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.411117,
        "lng": 118.316304,
        "ele": 26.25,
        "distanceKm": 8.77886232977886,
        "gradePct": 0.03311392031440986,
        "smoothedEle": 27.310358639698862,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.411634,
        "lng": 118.316583,
        "ele": 26.5,
        "distanceKm": 8.84291633203044,
        "gradePct": 0.2652555930922765,
        "smoothedEle": 27.61049816451843,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412017599940814,
        "lng": 118.31686615606604,
        "ele": 27.217456248409093,
        "distanceKm": 8.894310973585766,
        "gradePct": 0.44844183903230556,
        "smoothedEle": 27.99211824291912,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412402,
        "lng": 118.317148,
        "ele": 28.25,
        "distanceKm": 8.945705538972755,
        "gradePct": 0.6219905810287139,
        "smoothedEle": 28.4505127749384,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.412882,
        "lng": 118.317191,
        "ele": 29,
        "distanceKm": 8.999256465220293,
        "gradePct": 0.8117471017456481,
        "smoothedEle": 29.02941418058257,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.413326,
        "lng": 118.317075,
        "ele": 29.25,
        "distanceKm": 9.050004972393197,
        "gradePct": 1.0175329350510707,
        "smoothedEle": 29.698199239558765,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.413571,
        "lng": 118.317066,
        "ele": 30,
        "distanceKm": 9.07726300391668,
        "gradePct": 1.0733870929746259,
        "smoothedEle": 30.012306323297707,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.41407595197691,
        "lng": 118.31725915122216,
        "ele": 31.32570357397655,
        "distanceKm": 9.13671967110626,
        "gradePct": 1.104789247183929,
        "smoothedEle": 30.579945194241056,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.414581,
        "lng": 118.317452,
        "ele": 32,
        "distanceKm": 9.19617633418712,
        "gradePct": 0.939896317086651,
        "smoothedEle": 30.87590968416228,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4149325,
        "lng": 118.317592,
        "ele": 32.5,
        "distanceKm": 9.237752531202275,
        "gradePct": 0.6425443996013507,
        "smoothedEle": 30.821820242742284,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.415284,
        "lng": 118.317732,
        "ele": 33,
        "distanceKm": 9.279328714758496,
        "gradePct": 0.24911590049717258,
        "smoothedEle": 30.530259676564814,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.415672999999998,
        "lng": 118.31788733333333,
        "ele": 32.083333333333336,
        "distanceKm": 9.32535419635987,
        "gradePct": -0.2113731811716012,
        "smoothedEle": 30.048691484316382,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416062,
        "lng": 118.31804266666667,
        "ele": 31.166666666666668,
        "distanceKm": 9.371379661398135,
        "gradePct": -0.6985811142401832,
        "smoothedEle": 29.355314113925854,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416451,
        "lng": 118.318198,
        "ele": 30.25,
        "distanceKm": 9.417405109871366,
        "gradePct": -1.1892366899022135,
        "smoothedEle": 28.46981827526365,
        "gradeBand": "descent"
      },
      {
        "lat": 24.416852,
        "lng": 118.3183495,
        "ele": 27.874999999999954,
        "distanceKm": 9.464559075579164,
        "gradePct": -1.6294116038056754,
        "smoothedEle": 27.37501125607985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.417253,
        "lng": 118.318501,
        "ele": 25.5,
        "distanceKm": 9.511713025432522,
        "gradePct": -2.035561149130926,
        "smoothedEle": 26.120297818000857,
        "gradeBand": "descent"
      },
      {
        "lat": 24.417922,
        "lng": 118.318464,
        "ele": 23.25,
        "distanceKm": 9.586196803762446,
        "gradePct": -2.6063810222812287,
        "smoothedEle": 23.857481128401385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.418235,
        "lng": 118.318356,
        "ele": 22.25,
        "distanceKm": 9.622678231460059,
        "gradePct": -2.760223051925709,
        "smoothedEle": 22.82694237273772,
        "gradeBand": "descent"
      },
      {
        "lat": 24.418428,
        "lng": 118.318241,
        "ele": 21.5,
        "distanceKm": 9.647094073221842,
        "gradePct": -2.8018857697808772,
        "smoothedEle": 22.176737046039538,
        "gradeBand": "descent"
      },
      {
        "lat": 24.418816,
        "lng": 118.317758,
        "ele": 20,
        "distanceKm": 9.712308251723128,
        "gradePct": -2.6541192080028186,
        "smoothedEle": 20.793976431250837,
        "gradeBand": "descent"
      },
      {
        "lat": 24.419110500000002,
        "lng": 118.3173515,
        "ele": 18.37499999999997,
        "distanceKm": 9.76490386289057,
        "gradePct": -2.177008797017113,
        "smoothedEle": 20.15034293624329,
        "gradeBand": "descent"
      },
      {
        "lat": 24.419405,
        "lng": 118.316945,
        "ele": 16.75,
        "distanceKm": 9.817499398897802,
        "gradePct": -1.5178144027013047,
        "smoothedEle": 19.937606845896898,
        "gradeBand": "descent"
      },
      {
        "lat": 24.419953,
        "lng": 118.317213,
        "ele": 17.75,
        "distanceKm": 9.884202758357793,
        "gradePct": -0.6778220644266131,
        "smoothedEle": 20.034263588782267,
        "gradeBand": "descent"
      },
      {
        "lat": 24.420472,
        "lng": 118.317318,
        "ele": 19.25,
        "distanceKm": 9.942884016752739,
        "gradePct": -0.08141447641175532,
        "smoothedEle": 20.25697963301743,
        "gradeBand": "descent"
      },
      {
        "lat": 24.420946,
        "lng": 118.317377,
        "ele": 20.75,
        "distanceKm": 9.995927916492812,
        "gradePct": 0.30275954453631043,
        "smoothedEle": 20.63037730986153,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42145,
        "lng": 118.317459,
        "ele": 23,
        "distanceKm": 10.052581852600374,
        "gradePct": 0.6387859523848954,
        "smoothedEle": 21.266015106358054,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.421608,
        "lng": 118.317498,
        "ele": 23.75,
        "distanceKm": 10.07058893480797,
        "gradePct": 0.7517889142256058,
        "smoothedEle": 21.5181142572644,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.421727,
        "lng": 118.317543,
        "ele": 23.75,
        "distanceKm": 10.084583553167388,
        "gradePct": 0.8391650375442884,
        "smoothedEle": 21.71403891429624,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.421994,
        "lng": 118.317809,
        "ele": 23.25,
        "distanceKm": 10.124667767412777,
        "gradePct": 1.018998033323248,
        "smoothedEle": 22.225838617318274,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.422326,
        "lng": 118.318166,
        "ele": 23,
        "distanceKm": 10.17633293804001,
        "gradePct": 1.1504766070945842,
        "smoothedEle": 22.793393466859577,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4227355,
        "lng": 118.3184815,
        "ele": 23.375000000000007,
        "distanceKm": 10.231954265480862,
        "gradePct": 1.0785701485100179,
        "smoothedEle": 23.191720927249314,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.423145,
        "lng": 118.318797,
        "ele": 23.75,
        "distanceKm": 10.287575533384445,
        "gradePct": 0.7155025108418592,
        "smoothedEle": 23.183245871963116,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.423550379629905,
        "lng": 118.31907816591908,
        "ele": 23.75,
        "distanceKm": 10.340887938110237,
        "gradePct": 0.17002208812529024,
        "smoothedEle": 22.74406543436863,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42395618135677,
        "lng": 118.31935859767114,
        "ele": 23.627455604029798,
        "distanceKm": 10.394200361420387,
        "gradePct": -0.40742253093526026,
        "smoothedEle": 22.106504455415617,
        "gradeBand": "descent"
      },
      {
        "lat": 24.424362,
        "lng": 118.319639,
        "ele": 23.5,
        "distanceKm": 10.447512741829726,
        "gradePct": -0.9425513119968778,
        "smoothedEle": 21.304247646271367,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4247154,
        "lng": 118.31989779999999,
        "ele": 21.799999999999986,
        "distanceKm": 10.49474347955362,
        "gradePct": -1.3537800507855287,
        "smoothedEle": 20.416637191521467,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4250688,
        "lng": 118.32015659999999,
        "ele": 20.099999999999973,
        "distanceKm": 10.541974176560334,
        "gradePct": -1.683001092959993,
        "smoothedEle": 19.36507296951138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4254222,
        "lng": 118.3204154,
        "ele": 18.400000000000027,
        "distanceKm": 10.58920483285085,
        "gradePct": -2.0189872207885475,
        "smoothedEle": 18.12827132528957,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425775599999998,
        "lng": 118.3206742,
        "ele": 16.700000000000014,
        "distanceKm": 10.636435448422441,
        "gradePct": -2.3615936927460672,
        "smoothedEle": 16.747753887937677,
        "gradeBand": "descent"
      },
      {
        "lat": 24.426129,
        "lng": 118.320933,
        "ele": 15,
        "distanceKm": 10.683666023276087,
        "gradePct": -2.6926164508673223,
        "smoothedEle": 15.239583676301013,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42652062026219,
        "lng": 118.32108519337265,
        "ele": 13.664234199049222,
        "distanceKm": 10.729857961819922,
        "gradePct": -2.9745725475414844,
        "smoothedEle": 13.685688405919134,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42692,
        "lng": 118.321217,
        "ele": 12.25,
        "distanceKm": 10.776228613002203,
        "gradePct": -3.141249126279567,
        "smoothedEle": 12.18557377221411,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427264,
        "lng": 118.321331,
        "ele": 10.5,
        "distanceKm": 10.816183024390961,
        "gradePct": -3.199351896379253,
        "smoothedEle": 10.94101410381513,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427713,
        "lng": 118.321455,
        "ele": 9,
        "distanceKm": 10.867663758940056,
        "gradePct": -3.0498038882101497,
        "smoothedEle": 9.650961388944161,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428129,
        "lng": 118.321388,
        "ele": 7.5,
        "distanceKm": 10.914415608682667,
        "gradePct": -2.729001997611072,
        "smoothedEle": 8.747164654652899,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428458,
        "lng": 118.321363,
        "ele": 6.5,
        "distanceKm": 10.951086240382892,
        "gradePct": -2.3874809911122425,
        "smoothedEle": 8.22398059397797,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428849944820133,
        "lng": 118.32140864900059,
        "ele": 5.548546592629834,
        "distanceKm": 10.994912927789532,
        "gradePct": -1.9130441882616818,
        "smoothedEle": 7.777478458090785,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429243,
        "lng": 118.321444,
        "ele": 4.5,
        "distanceKm": 11.038765019982804,
        "gradePct": -1.4050979846238802,
        "smoothedEle": 7.56493722832893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429765,
        "lng": 118.321423,
        "ele": 5.75,
        "distanceKm": 11.09684777520748,
        "gradePct": -0.7327408180275192,
        "smoothedEle": 7.621300608294511,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430223,
        "lng": 118.321407,
        "ele": 7,
        "distanceKm": 11.147800876207175,
        "gradePct": -0.11661147573305228,
        "smoothedEle": 8.037630305745456,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430608499999998,
        "lng": 118.3213705,
        "ele": 8,
        "distanceKm": 11.190825558029932,
        "gradePct": 0.44001480321102027,
        "smoothedEle": 8.69914980008112,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.430994,
        "lng": 118.321334,
        "ele": 9,
        "distanceKm": 11.233850238883202,
        "gradePct": 1.0267338119353087,
        "smoothedEle": 9.642225690993635,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431383,
        "lng": 118.321378,
        "ele": 10.5,
        "distanceKm": 11.277333887615297,
        "gradePct": 1.583540532472199,
        "smoothedEle": 10.769445438951985,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431397,
        "lng": 118.321443,
        "ele": 10.25,
        "distanceKm": 11.28409601054404,
        "gradePct": 1.675700699364893,
        "smoothedEle": 10.960327722192636,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431417,
        "lng": 118.321487,
        "ele": 10.25,
        "distanceKm": 11.289074785043901,
        "gradePct": 1.7435558232163002,
        "smoothedEle": 11.100869361894901,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431447,
        "lng": 118.321523,
        "ele": 10.25,
        "distanceKm": 11.294015521143692,
        "gradePct": 1.8108925262498978,
        "smoothedEle": 11.240337247580444,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43153,
        "lng": 118.321559,
        "ele": 10.5,
        "distanceKm": 11.303938269186055,
        "gradePct": 1.925448495416366,
        "smoothedEle": 11.530132899530157,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431575,
        "lng": 118.321555,
        "ele": 10.75,
        "distanceKm": 11.308958407356785,
        "gradePct": 1.981496226596101,
        "smoothedEle": 11.68324711373742,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431618,
        "lng": 118.321536,
        "ele": 11,
        "distanceKm": 11.314112204666577,
        "gradePct": 2.0390362058457243,
        "smoothedEle": 11.840437931686061,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431654,
        "lng": 118.321504,
        "ele": 11.25,
        "distanceKm": 11.319261897675544,
        "gradePct": 2.0947109872024283,
        "smoothedEle": 11.993864818258547,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431679,
        "lng": 118.321461,
        "ele": 11.5,
        "distanceKm": 11.324427012842762,
        "gradePct": 2.1459209316108443,
        "smoothedEle": 12.138488042940649,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431691,
        "lng": 118.321411,
        "ele": 11.5,
        "distanceKm": 11.329661834765435,
        "gradePct": 2.197821989180576,
        "smoothedEle": 12.28506305677551,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431689,
        "lng": 118.32136,
        "ele": 11.75,
        "distanceKm": 11.33482976616707,
        "gradePct": 2.2490598553687144,
        "smoothedEle": 12.429765136021292,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431673,
        "lng": 118.321312,
        "ele": 11.75,
        "distanceKm": 11.340004641415645,
        "gradePct": 2.3003665668786373,
        "smoothedEle": 12.574661642981372,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431644,
        "lng": 118.321272,
        "ele": 11.75,
        "distanceKm": 11.345181230487688,
        "gradePct": 2.351690270227412,
        "smoothedEle": 12.719606136998582,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.432131,
        "lng": 118.32084,
        "ele": 15,
        "distanceKm": 11.414788501998911,
        "gradePct": 2.7417533938429877,
        "smoothedEle": 14.707910332460813,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.432545,
        "lng": 118.320576,
        "ele": 17.25,
        "distanceKm": 11.468019295123339,
        "gradePct": 2.8866059545544718,
        "smoothedEle": 16.301196640248474,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.432992901750296,
        "lng": 118.32035900544345,
        "ele": 18.61407965014148,
        "distanceKm": 11.522453433545362,
        "gradePct": 2.966095273481945,
        "smoothedEle": 18.015418369577347,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43344,
        "lng": 118.32014,
        "ele": 19.75,
        "distanceKm": 11.576888404735751,
        "gradePct": 3.0323274839859646,
        "smoothedEle": 19.689964003747555,
        "gradeBand": "hard"
      },
      {
        "lat": 24.433890035166804,
        "lng": 118.31992859060608,
        "ele": 20.741228423232386,
        "distanceKm": 11.631314796937051,
        "gradePct": 3.0527051408004917,
        "smoothedEle": 21.307980150354055,
        "gradeBand": "hard"
      },
      {
        "lat": 24.43434,
        "lng": 118.319717,
        "ele": 22.75,
        "distanceKm": 11.685741186021113,
        "gradePct": 2.836642693960344,
        "smoothedEle": 22.532573904745455,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43477,
        "lng": 118.319484,
        "ele": 25,
        "distanceKm": 11.739056838131651,
        "gradePct": 2.443099212580366,
        "smoothedEle": 23.41237592722828,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435068,
        "lng": 118.319339,
        "ele": 25.75,
        "distanceKm": 11.775298814675761,
        "gradePct": 2.112736951914329,
        "smoothedEle": 23.866538440250945,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435395188060042,
        "lng": 118.3191852538868,
        "ele": 26.23212963671924,
        "distanceKm": 11.81487005286488,
        "gradePct": 1.7484425191346888,
        "smoothedEle": 24.315987268198842,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435723,
        "lng": 118.319033,
        "ele": 26.75,
        "distanceKm": 11.854445986465413,
        "gradePct": 1.4679365369588577,
        "smoothedEle": 24.76430498865991,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436166,
        "lng": 118.318862,
        "ele": 26.25,
        "distanceKm": 11.906658685056083,
        "gradePct": 1.2225419509714976,
        "smoothedEle": 25.32283332696708,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43665558744692,
        "lng": 118.31862021435926,
        "ele": 25.247575182911408,
        "distanceKm": 11.966347934657167,
        "gradePct": 1.0215959690177583,
        "smoothedEle": 25.79756336780177,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437145,
        "lng": 118.318378,
        "ele": 24.5,
        "distanceKm": 12.026037224749462,
        "gradePct": 0.7461393076433334,
        "smoothedEle": 25.934768042444702,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437537708270572,
        "lng": 118.31875494594928,
        "ele": 25.42264508073512,
        "distanceKm": 12.0840284398876,
        "gradePct": 0.49452498749723617,
        "smoothedEle": 26.069803624591746,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437930371083183,
        "lng": 118.31913195159575,
        "ele": 26.22097437139652,
        "distanceKm": 12.142019747831949,
        "gradePct": 0.3578318462325529,
        "smoothedEle": 26.319736252421976,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438323,
        "lng": 118.319509,
        "ele": 27,
        "distanceKm": 12.20001098877455,
        "gradePct": 0.4418939457483082,
        "smoothedEle": 26.758730775464873,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43865167961803,
        "lng": 118.31982377488906,
        "ele": 26.25,
        "distanceKm": 12.248499482351887,
        "gradePct": 0.6061348971478914,
        "smoothedEle": 27.199342380186504,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438980087140838,
        "lng": 118.32013889276067,
        "ele": 26.91943801779462,
        "distanceKm": 12.296987956169863,
        "gradePct": 0.7784607952737278,
        "smoothedEle": 27.682578515825966,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439309645873095,
        "lng": 118.32045255767731,
        "ele": 28.36335372601851,
        "distanceKm": 12.345476406245277,
        "gradePct": 0.854412990915962,
        "smoothedEle": 28.054729187863035,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439637,
        "lng": 118.320769,
        "ele": 29.5,
        "distanceKm": 12.393965090898082,
        "gradePct": 0.815294418778785,
        "smoothedEle": 28.34355207965869,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439897,
        "lng": 118.321072,
        "ele": 30,
        "distanceKm": 12.436115703093389,
        "gradePct": 0.7483483356504719,
        "smoothedEle": 28.583508501473506,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440428781682957,
        "lng": 118.32089669383792,
        "ele": 29.62377854231537,
        "distanceKm": 12.497852826813808,
        "gradePct": 0.6447740437982491,
        "smoothedEle": 28.97876451803654,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440958,
        "lng": 118.320712,
        "ele": 29.25,
        "distanceKm": 12.55959806813916,
        "gradePct": 0.658512123785299,
        "smoothedEle": 29.4558691266378,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441343,
        "lng": 118.32061,
        "ele": 28.75,
        "distanceKm": 12.603635795116096,
        "gradePct": 0.6851923535226525,
        "smoothedEle": 29.768990496714938,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441768749999998,
        "lng": 118.320465,
        "ele": 29.249999999999996,
        "distanceKm": 12.653200439849739,
        "gradePct": 0.7228446857159313,
        "smoothedEle": 30.138578494926627,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4421945,
        "lng": 118.32032,
        "ele": 29.75000000000001,
        "distanceKm": 12.702765069903013,
        "gradePct": 0.7810124430551603,
        "smoothedEle": 30.578746237193794,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44262025,
        "lng": 118.320175,
        "ele": 30.250000000000004,
        "distanceKm": 12.752329685274919,
        "gradePct": 0.8701726709452919,
        "smoothedEle": 31.140051776680846,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.443046,
        "lng": 118.32003,
        "ele": 30.75,
        "distanceKm": 12.801894285965737,
        "gradePct": 1.0178975738871454,
        "smoothedEle": 31.792402995142954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44351453349439,
        "lng": 118.3198663869243,
        "ele": 32.170032206223,
        "distanceKm": 12.8565621727901,
        "gradePct": 1.2052794205549702,
        "smoothedEle": 32.57899181889811,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.443981566105656,
        "lng": 118.31969728127739,
        "ele": 33.940771964567524,
        "distanceKm": 12.911242522683512,
        "gradePct": 1.355579100238603,
        "smoothedEle": 33.3859092421213,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.444452233275634,
        "lng": 118.31955471048664,
        "ele": 35.251186530153724,
        "distanceKm": 12.965531850043476,
        "gradePct": 1.3964020256599077,
        "smoothedEle": 34.10661791128324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.444915,
        "lng": 118.319372,
        "ele": 36,
        "distanceKm": 13.020212199509242,
        "gradePct": 1.3561488440292682,
        "smoothedEle": 34.76826796016842,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44529247491226,
        "lng": 118.3192696070909,
        "ele": 36.147116248710724,
        "distanceKm": 13.063446385421983,
        "gradePct": 1.3027362158895432,
        "smoothedEle": 35.28605451351691,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44566723745613,
        "lng": 118.31914680354545,
        "ele": 36.32355812435536,
        "distanceKm": 13.106932769612387,
        "gradePct": 1.2177351748978014,
        "smoothedEle": 35.757780605267044,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.446042,
        "lng": 118.319024,
        "ele": 36.5,
        "distanceKm": 13.15041914323653,
        "gradePct": 1.1313776693505635,
        "smoothedEle": 36.168747098585385,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.446338,
        "lng": 118.318894,
        "ele": 36.25,
        "distanceKm": 13.185866081698363,
        "gradePct": 1.0785115888924894,
        "smoothedEle": 36.50969191902719,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.446667,
        "lng": 118.31878,
        "ele": 36,
        "distanceKm": 13.224226163978885,
        "gradePct": 0.9950078308225406,
        "smoothedEle": 36.80635615478995,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.447101333333336,
        "lng": 118.31863933333334,
        "ele": 36.50000000000001,
        "distanceKm": 13.274577230072836,
        "gradePct": 0.8605271853578736,
        "smoothedEle": 37.127852651339964,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.447535666666667,
        "lng": 118.31849866666667,
        "ele": 36.99999999999999,
        "distanceKm": 13.324928282289365,
        "gradePct": 0.726400351368233,
        "smoothedEle": 37.38064728784915,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44797,
        "lng": 118.318358,
        "ele": 37.5,
        "distanceKm": 13.375279320629044,
        "gradePct": 0.5876583317188085,
        "smoothedEle": 37.583180286186824,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.448362,
        "lng": 118.318227,
        "ele": 38.75,
        "distanceKm": 13.420840210250185,
        "gradePct": 0.43806174007934623,
        "smoothedEle": 37.65629378456629,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44875222927106,
        "lng": 118.31806263231358,
        "ele": 39.10866277083591,
        "distanceKm": 13.467312282326734,
        "gradePct": 0.2875068081152793,
        "smoothedEle": 37.65647886350578,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.449139486180705,
        "lng": 118.31788975487572,
        "ele": 38.82244184722394,
        "distanceKm": 13.513793287735814,
        "gradePct": 0.11447775177233095,
        "smoothedEle": 37.55369796365373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.449526743090352,
        "lng": 118.31771687743786,
        "ele": 38.536220923611964,
        "distanceKm": 13.560274272899814,
        "gradePct": -0.10602608426230414,
        "smoothedEle": 37.310771521115015,
        "gradeBand": "descent"
      },
      {
        "lat": 24.449914,
        "lng": 118.317544,
        "ele": 38.25,
        "distanceKm": 13.606755237818122,
        "gradePct": -0.36472296517006114,
        "smoothedEle": 36.90424509959057,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45028375,
        "lng": 118.31737575,
        "ele": 37.187499999999986,
        "distanceKm": 13.651257388077875,
        "gradePct": -0.643101993330698,
        "smoothedEle": 36.3702109368764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.450653499999998,
        "lng": 118.31720750000001,
        "ele": 36.12500000000002,
        "distanceKm": 13.695759519212679,
        "gradePct": -0.9777013145679518,
        "smoothedEle": 35.63817241850555,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45102325,
        "lng": 118.31703925000001,
        "ele": 35.062500000000014,
        "distanceKm": 13.740261631224142,
        "gradePct": -1.3167407298338472,
        "smoothedEle": 34.781883366234645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.451393,
        "lng": 118.316871,
        "ele": 34,
        "distanceKm": 13.784763724111125,
        "gradePct": -1.619608798701217,
        "smoothedEle": 33.85736712738577,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4518538,
        "lng": 118.3166916,
        "ele": 32.65,
        "distanceKm": 13.839125125113506,
        "gradePct": -1.932754978392335,
        "smoothedEle": 32.650290414673826,
        "gradeBand": "descent"
      },
      {
        "lat": 24.452314599999998,
        "lng": 118.3165122,
        "ele": 31.3,
        "distanceKm": 13.89348650393193,
        "gradePct": -2.029943056647541,
        "smoothedEle": 31.61567630645138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4527754,
        "lng": 118.3163328,
        "ele": 29.95,
        "distanceKm": 13.947847860567409,
        "gradePct": -1.8661607163286515,
        "smoothedEle": 30.891960531834417,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4532362,
        "lng": 118.3161534,
        "ele": 28.6,
        "distanceKm": 14.002209195017917,
        "gradePct": -1.510904261668756,
        "smoothedEle": 30.44818776213489,
        "gradeBand": "descent"
      },
      {
        "lat": 24.453697,
        "lng": 118.315974,
        "ele": 27.25,
        "distanceKm": 14.056570507284468,
        "gradePct": -1.054571353000272,
        "smoothedEle": 30.20912451666234,
        "gradeBand": "descent"
      },
      {
        "lat": 24.454076,
        "lng": 118.3158345,
        "ele": 28.125,
        "distanceKm": 14.1010160687822,
        "gradePct": -0.6649564801171911,
        "smoothedEle": 30.185521829165047,
        "gradeBand": "descent"
      },
      {
        "lat": 24.454455,
        "lng": 118.315695,
        "ele": 29,
        "distanceKm": 14.145461616784766,
        "gradePct": -0.3141871748033911,
        "smoothedEle": 30.295354378874375,
        "gradeBand": "descent"
      },
      {
        "lat": 24.454857,
        "lng": 118.315539,
        "ele": 31,
        "distanceKm": 14.192869004060316,
        "gradePct": -0.014313127833697032,
        "smoothedEle": 30.4958091271831,
        "gradeBand": "descent"
      },
      {
        "lat": 24.455348666666666,
        "lng": 118.31536166666666,
        "ele": 31.666666666666675,
        "distanceKm": 14.250411123959166,
        "gradePct": 0.34802871902884946,
        "smoothedEle": 30.932268905098198,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455840333333335,
        "lng": 118.31518433333333,
        "ele": 32.33333333333333,
        "distanceKm": 14.307953222006768,
        "gradePct": 0.7496630411947374,
        "smoothedEle": 31.70199080348904,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456332,
        "lng": 118.315007,
        "ele": 33,
        "distanceKm": 14.365495298202935,
        "gradePct": 1.1281474930206863,
        "smoothedEle": 32.636358664397584,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456941,
        "lng": 118.314764,
        "ele": 32.75,
        "distanceKm": 14.437541560650143,
        "gradePct": 1.4163464915321595,
        "smoothedEle": 33.667345624569954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457335306103573,
        "lng": 118.31467483138668,
        "ele": 33.31425982142678,
        "distanceKm": 14.482305762070707,
        "gradePct": 1.4156910115062507,
        "smoothedEle": 34.190295110868774,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457720153051785,
        "lng": 118.31454241569334,
        "ele": 34.532129910713365,
        "distanceKm": 14.527148626803205,
        "gradePct": 1.3384709672292394,
        "smoothedEle": 34.690627596815254,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.458105,
        "lng": 118.31441,
        "ele": 35.75,
        "distanceKm": 14.57199147929798,
        "gradePct": 1.2449628331390032,
        "smoothedEle": 35.219245127980194,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4585,
        "lng": 118.314267,
        "ele": 36.25000000000001,
        "distanceKm": 14.618236950366887,
        "gradePct": 1.2201104712078363,
        "smoothedEle": 35.83131626895205,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.458895,
        "lng": 118.314124,
        "ele": 36.75,
        "distanceKm": 14.664482407230109,
        "gradePct": 1.179082589450666,
        "smoothedEle": 36.34024225030497,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459285,
        "lng": 118.3139795,
        "ele": 37,
        "distanceKm": 14.710248431147514,
        "gradePct": 1.1280141756922473,
        "smoothedEle": 36.75809268499534,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459675,
        "lng": 118.313835,
        "ele": 37.25,
        "distanceKm": 14.756014440592889,
        "gradePct": 0.9948722487833024,
        "smoothedEle": 37.020648735399455,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460073533308414,
        "lng": 118.31370083241211,
        "ele": 38.24236381576507,
        "distanceKm": 14.802363401502037,
        "gradePct": 0.7230773400726339,
        "smoothedEle": 37.06738029718235,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460483,
        "lng": 118.313622,
        "ele": 39.5,
        "distanceKm": 14.848587940141654,
        "gradePct": 0.36805325040194736,
        "smoothedEle": 36.90143195257883,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4608252,
        "lng": 118.3139348,
        "ele": 38.30000000000002,
        "distanceKm": 14.8980877520096,
        "gradePct": -0.06416089086919664,
        "smoothedEle": 36.51874213936263,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4611674,
        "lng": 118.3142476,
        "ele": 37.099999999999994,
        "distanceKm": 14.94758750886152,
        "gradePct": -0.5357737487055003,
        "smoothedEle": 35.90075658353363,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4615096,
        "lng": 118.31456039999999,
        "ele": 35.900000000000006,
        "distanceKm": 14.997087210695256,
        "gradePct": -1.0209630792646394,
        "smoothedEle": 35.020134394006625,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4618518,
        "lng": 118.3148732,
        "ele": 34.69999999999998,
        "distanceKm": 15.046586857512619,
        "gradePct": -1.5831676367516982,
        "smoothedEle": 33.74228066315568,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462194,
        "lng": 118.315186,
        "ele": 33.5,
        "distanceKm": 15.096086449311448,
        "gradePct": -2.222782971903375,
        "smoothedEle": 32.08864854033546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462533,
        "lng": 118.315542,
        "ele": 31.5,
        "distanceKm": 15.148232667342054,
        "gradePct": -2.9245739744540358,
        "smoothedEle": 30.0401309720807,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462872,
        "lng": 118.315898,
        "ele": 29.5,
        "distanceKm": 15.200378818357246,
        "gradePct": -3.5539580391110768,
        "smoothedEle": 27.82724411087972,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463448,
        "lng": 118.315951,
        "ele": 25,
        "distanceKm": 15.264651430898054,
        "gradePct": -4.077957920222886,
        "smoothedEle": 24.982881889828334,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463925333333332,
        "lng": 118.31595066666667,
        "ele": 22.1666666666667,
        "distanceKm": 15.317728559918402,
        "gradePct": -4.320640709965598,
        "smoothedEle": 22.59717614842549,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46440266666667,
        "lng": 118.31595033333333,
        "ele": 19.3333333333333,
        "distanceKm": 15.370805688939063,
        "gradePct": -4.461227618076075,
        "smoothedEle": 20.159761451994633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46488,
        "lng": 118.31595,
        "ele": 16.5,
        "distanceKm": 15.423882817959248,
        "gradePct": -4.532839184202674,
        "smoothedEle": 17.721404375623223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465331499411764,
        "lng": 118.3159468915703,
        "ele": 14.557231446808542,
        "distanceKm": 15.474088317016903,
        "gradePct": -4.575665097881357,
        "smoothedEle": 15.407383435340227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465783,
        "lng": 118.315944,
        "ele": 13,
        "distanceKm": 15.524293814142482,
        "gradePct": -4.440940424739888,
        "smoothedEle": 13.413804856134705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466175,
        "lng": 118.315951,
        "ele": 11.500000000000032,
        "distanceKm": 15.567888042877247,
        "gradePct": -4.202449018392508,
        "smoothedEle": 11.88884793022147,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466567,
        "lng": 118.315958,
        "ele": 10,
        "distanceKm": 15.61148227157617,
        "gradePct": -3.8680137161489734,
        "smoothedEle": 10.555056588442294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467010000000002,
        "lng": 118.315911,
        "ele": 7.999999999999963,
        "distanceKm": 15.66097083886597,
        "gradePct": -3.363252659343499,
        "smoothedEle": 9.285475614829814,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467453,
        "lng": 118.315864,
        "ele": 6,
        "distanceKm": 15.71045940454674,
        "gradePct": -2.854056624338902,
        "smoothedEle": 8.255033496394704,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467884,
        "lng": 118.3158095,
        "ele": 5.874999999999997,
        "distanceKm": 15.758700864243519,
        "gradePct": -2.398114404094092,
        "smoothedEle": 7.413993122531029,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468315,
        "lng": 118.315755,
        "ele": 5.75,
        "distanceKm": 15.806942321781046,
        "gradePct": -1.9760113832387702,
        "smoothedEle": 6.741936284734976,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468886,
        "lng": 118.31567,
        "ele": 5.75,
        "distanceKm": 15.871014862579056,
        "gradePct": -1.4826607740181212,
        "smoothedEle": 6.111019190279111,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46926833582817,
        "lng": 118.31563570029668,
        "ele": 5.686685588826117,
        "distanceKm": 15.9136702165711,
        "gradePct": -1.1627244233004947,
        "smoothedEle": 5.873607435125084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469650667914085,
        "lng": 118.31560135014834,
        "ele": 5.5933427944130605,
        "distanceKm": 15.956325570765479,
        "gradePct": -0.8349880568298914,
        "smoothedEle": 5.785427814584066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.470033,
        "lng": 118.315567,
        "ele": 5.5,
        "distanceKm": 15.998980924099413,
        "gradePct": -0.5497496127553119,
        "smoothedEle": 5.753348130810283,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47044368081203,
        "lng": 118.31550935202593,
        "ele": 5.772026876768555,
        "distanceKm": 16.045017810838,
        "gradePct": -0.3130983553085691,
        "smoothedEle": 5.740813332289348,
        "gradeBand": "descent"
      },
      {
        "lat": 24.470853120541353,
        "lng": 118.31544156801728,
        "ele": 5.848017917845702,
        "distanceKm": 16.091059448224613,
        "gradePct": -0.11655300567021551,
        "smoothedEle": 5.766348748824362,
        "gradeBand": "descent"
      },
      {
        "lat": 24.471262560270677,
        "lng": 118.31537378400864,
        "ele": 5.924008958922853,
        "distanceKm": 16.137101082286655,
        "gradePct": 0.008432864173558959,
        "smoothedEle": 5.842035519786722,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.471672,
        "lng": 118.315306,
        "ele": 6,
        "distanceKm": 16.1831427130243,
        "gradePct": 0.10163343743882916,
        "smoothedEle": 5.9685264016352315,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.472214,
        "lng": 118.31533,
        "ele": 5.5,
        "distanceKm": 16.24345937277482,
        "gradePct": 0.21521570555781933,
        "smoothedEle": 6.171669070689327,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.472687,
        "lng": 118.315337,
        "ele": 5.875,
        "distanceKm": 16.296059416696977,
        "gradePct": 0.3229412939930099,
        "smoothedEle": 6.420450668645496,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47316,
        "lng": 118.315344,
        "ele": 6.25,
        "distanceKm": 16.348659460583285,
        "gradePct": 0.43912998203220943,
        "smoothedEle": 6.752049994715674,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.473316,
        "lng": 118.315373,
        "ele": 6.75,
        "distanceKm": 16.36625243018939,
        "gradePct": 0.46585268123073964,
        "smoothedEle": 6.853828829703869,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.473700855121223,
        "lng": 118.31564880056595,
        "ele": 7.103630998933854,
        "distanceKm": 16.41734470624116,
        "gradePct": 0.5181578847131699,
        "smoothedEle": 7.120032306221256,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474082,
        "lng": 118.315931,
        "ele": 7.25,
        "distanceKm": 16.468450935856787,
        "gradePct": 0.5327319388073853,
        "smoothedEle": 7.355335149963005,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474387,
        "lng": 118.316191,
        "ele": 7.75,
        "distanceKm": 16.511376086539137,
        "gradePct": 0.5264757147059775,
        "smoothedEle": 7.569960903374756,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474633,
        "lng": 118.316534,
        "ele": 8.75,
        "distanceKm": 16.555571386455437,
        "gradePct": 0.4750638463988039,
        "smoothedEle": 7.742164556049009,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474656,
        "lng": 118.316646,
        "ele": 9.25,
        "distanceKm": 16.567191134089626,
        "gradePct": 0.46416821251776047,
        "smoothedEle": 7.787056135729107,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474496,
        "lng": 118.316936,
        "ele": 8.75,
        "distanceKm": 16.601511606020065,
        "gradePct": 0.4306521620958448,
        "smoothedEle": 7.898842236962299,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4741575,
        "lng": 118.3171935,
        "ele": 8.50000000000001,
        "distanceKm": 16.6472921473589,
        "gradePct": 0.37363022578684246,
        "smoothedEle": 8.005176497424959,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.473819,
        "lng": 118.317451,
        "ele": 8.25,
        "distanceKm": 16.693072728590405,
        "gradePct": 0.3025129916230675,
        "smoothedEle": 8.083470096877232,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.473480499999997,
        "lng": 118.3177085,
        "ele": 7.99999999999999,
        "distanceKm": 16.738853349712986,
        "gradePct": 0.23737315404364695,
        "smoothedEle": 8.151770294934497,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.473142,
        "lng": 118.317966,
        "ele": 7.75,
        "distanceKm": 16.784634010727515,
        "gradePct": 0.1647652279194031,
        "smoothedEle": 8.173400238466279,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47279740065057,
        "lng": 118.31823216334688,
        "ele": 7.822091914106342,
        "distanceKm": 16.831472614916496,
        "gradePct": 0.057309219001860014,
        "smoothedEle": 8.083050977538843,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47245280130114,
        "lng": 118.31849832669376,
        "ele": 7.894183828212684,
        "distanceKm": 16.878311261513335,
        "gradePct": -0.023178102001214364,
        "smoothedEle": 8.011868944917161,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472108201951716,
        "lng": 118.31876449004064,
        "ele": 7.966275742319026,
        "distanceKm": 16.92514995051723,
        "gradePct": -0.0789143406958675,
        "smoothedEle": 7.973497485521394,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47176378272265,
        "lng": 118.3190309331211,
        "ele": 8,
        "distanceKm": 16.9719885915259,
        "gradePct": -0.10082660889884335,
        "smoothedEle": 7.965772451992535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4714195218151,
        "lng": 118.31929762208074,
        "ele": 8,
        "distanceKm": 17.018827216828377,
        "gradePct": -0.059374774420337444,
        "smoothedEle": 7.988693751893476,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47107526090755,
        "lng": 118.31956431104037,
        "ele": 8,
        "distanceKm": 17.06566588466193,
        "gradePct": 0.009100781654527023,
        "smoothedEle": 8.04928804957189,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.470731,
        "lng": 118.319831,
        "ele": 8,
        "distanceKm": 17.1125045950269,
        "gradePct": 0.07586151097420873,
        "smoothedEle": 8.135579908107646,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.470331666666667,
        "lng": 118.32012566666667,
        "ele": 8.083333333333336,
        "distanceKm": 17.165993625965474,
        "gradePct": 0.14488238269091142,
        "smoothedEle": 8.256525958912569,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.469932333333333,
        "lng": 118.32042033333333,
        "ele": 8.166666666666664,
        "distanceKm": 17.219482709643188,
        "gradePct": 0.20649844292076822,
        "smoothedEle": 8.402538636377669,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.469533,
        "lng": 118.320715,
        "ele": 8.25,
        "distanceKm": 17.27297184606095,
        "gradePct": 0.2578695970935101,
        "smoothedEle": 8.578487157206562,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.469170927978354,
        "lng": 118.32099912475012,
        "ele": 8.663592156278412,
        "distanceKm": 17.322447154198475,
        "gradePct": 0.3059820072274777,
        "smoothedEle": 8.770025415414421,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468805267358096,
        "lng": 118.32127776133629,
        "ele": 8.943027128091304,
        "distanceKm": 17.37192911882299,
        "gradePct": 0.34895847670304775,
        "smoothedEle": 8.970645418411735,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46843960673784,
        "lng": 118.32155639792248,
        "ele": 9.222462099904176,
        "distanceKm": 17.421411130124383,
        "gradePct": 0.37716554771748934,
        "smoothedEle": 9.163213127012607,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46807394611758,
        "lng": 118.32183503450865,
        "ele": 9.501897071717067,
        "distanceKm": 17.47089318810045,
        "gradePct": 0.38827613941829275,
        "smoothedEle": 9.348201845871515,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.467708285497324,
        "lng": 118.32211367109484,
        "ele": 9.78133204352994,
        "distanceKm": 17.52037529275227,
        "gradePct": 0.38400824615375795,
        "smoothedEle": 9.530020922151701,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.467342624877066,
        "lng": 118.32239230768101,
        "ele": 10.060767015342833,
        "distanceKm": 17.56985744407764,
        "gradePct": 0.3681111880500851,
        "smoothedEle": 9.698468382791388,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466977,
        "lng": 118.322671,
        "ele": 10,
        "distanceKm": 17.61933959144952,
        "gradePct": 0.34297261873316687,
        "smoothedEle": 9.841096617484329,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466546,
        "lng": 118.32284949999999,
        "ele": 10,
        "distanceKm": 17.67055670523046,
        "gradePct": 0.3111918711842583,
        "smoothedEle": 9.969327646723782,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466115,
        "lng": 118.323028,
        "ele": 10,
        "distanceKm": 17.72177384082428,
        "gradePct": 0.27152421769326646,
        "smoothedEle": 10.077830303960381,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465664399999998,
        "lng": 118.323202,
        "ele": 10.100000000000003,
        "distanceKm": 17.77488312761141,
        "gradePct": 0.23572048799323214,
        "smoothedEle": 10.184395479704655,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465213799999997,
        "lng": 118.323376,
        "ele": 10.2,
        "distanceKm": 17.827992435294604,
        "gradePct": 0.2694626711789923,
        "smoothedEle": 10.401685872355014,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4647632,
        "lng": 118.32355,
        "ele": 10.3,
        "distanceKm": 17.881101763873193,
        "gradePct": 0.30274115933515516,
        "smoothedEle": 10.59714949825134,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4643126,
        "lng": 118.323724,
        "ele": 10.399999999999997,
        "distanceKm": 17.93421111334763,
        "gradePct": 0.3504149924097705,
        "smoothedEle": 10.803616002034788,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463862,
        "lng": 118.323898,
        "ele": 10.5,
        "distanceKm": 17.987320483717248,
        "gradePct": 0.4444098688466223,
        "smoothedEle": 11.124101175239616,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463311,
        "lng": 118.324076,
        "ele": 12,
        "distanceKm": 18.051182817936244,
        "gradePct": 0.6050135715410713,
        "smoothedEle": 11.697062922852206,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463064,
        "lng": 118.324113,
        "ele": 12,
        "distanceKm": 18.078902133612864,
        "gradePct": 0.7286616581173363,
        "smoothedEle": 12.046377293080972,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.462745466094376,
        "lng": 118.32435344609998,
        "ele": 11.756524392680085,
        "distanceKm": 18.121876414250323,
        "gradePct": 0.9061127698998201,
        "smoothedEle": 12.56788949152608,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.462427,
        "lng": 118.324594,
        "ele": 12,
        "distanceKm": 18.1648506958788,
        "gradePct": 1.036096534147328,
        "smoothedEle": 13.060701714435114,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.462048,
        "lng": 118.32483900000001,
        "ele": 13.125000000000043,
        "distanceKm": 18.21374787891005,
        "gradePct": 1.111419875613897,
        "smoothedEle": 13.584042916547995,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461669,
        "lng": 118.325084,
        "ele": 14.25,
        "distanceKm": 18.26264509978317,
        "gradePct": 1.1118256035971215,
        "smoothedEle": 14.065159967434893,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461204,
        "lng": 118.325346,
        "ele": 16.5,
        "distanceKm": 18.320754408906705,
        "gradePct": 0.9396810113003269,
        "smoothedEle": 14.43363547530682,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461475999999998,
        "lng": 118.325773,
        "ele": 16.166666666666668,
        "distanceKm": 18.373504795633163,
        "gradePct": 0.8040341647127401,
        "smoothedEle": 14.761393927035185,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461748,
        "lng": 118.3262,
        "ele": 15.833333333333334,
        "distanceKm": 18.426255105890156,
        "gradePct": 0.6840463821216349,
        "smoothedEle": 15.075198710795704,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46202,
        "lng": 118.326627,
        "ele": 15.5,
        "distanceKm": 18.47900533967649,
        "gradePct": 0.5365465123203014,
        "smoothedEle": 15.241994506034676,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46228065998877,
        "lng": 118.32704841846665,
        "ele": 15,
        "distanceKm": 18.530574544201194,
        "gradePct": 0.35653285051489764,
        "smoothedEle": 15.207717455829984,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.462540829994385,
        "lng": 118.32747020923333,
        "ele": 15,
        "distanceKm": 18.582144262966644,
        "gradePct": 0.05276965844586119,
        "smoothedEle": 14.91832831942847,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.462801,
        "lng": 118.327892,
        "ele": 15,
        "distanceKm": 18.633713908725685,
        "gradePct": -0.2653402910977843,
        "smoothedEle": 14.568102800386088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462985,
        "lng": 118.32818,
        "ele": 14.75,
        "distanceKm": 18.669327003823433,
        "gradePct": -0.4361840164994317,
        "smoothedEle": 14.339023656530031,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462946329660465,
        "lng": 118.32868682944137,
        "ele": 14.249228733183202,
        "distanceKm": 18.72080463532964,
        "gradePct": -0.5897986844410225,
        "smoothedEle": 14.034613955914356,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462863891360183,
        "lng": 118.3291901836341,
        "ele": 13.439534400776873,
        "distanceKm": 18.77256876596014,
        "gradePct": -0.6140316511437303,
        "smoothedEle": 13.743998969461563,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462781488981882,
        "lng": 118.3296935444478,
        "ele": 13.086381350927992,
        "distanceKm": 18.82433288175699,
        "gradePct": -0.6004097387359936,
        "smoothedEle": 13.430992797565386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462699121049305,
        "lng": 118.33019691201252,
        "ele": 12.75,
        "distanceKm": 18.876097025021945,
        "gradePct": -0.6186898408001036,
        "smoothedEle": 13.0616098850562,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462617343136483,
        "lng": 118.33070039505816,
        "ele": 12.787823088171681,
        "distanceKm": 18.927861139403053,
        "gradePct": -0.672988098498928,
        "smoothedEle": 12.649021024109583,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4625347162091,
        "lng": 118.33120371008766,
        "ele": 12.700648016886186,
        "distanceKm": 18.97962521853502,
        "gradePct": -0.7456477101593935,
        "smoothedEle": 12.210034739415633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4624523402935,
        "lng": 118.33170707445655,
        "ele": 12.156095690210247,
        "distanceKm": 19.031389298764797,
        "gradePct": -0.8211609677651607,
        "smoothedEle": 11.738317090064356,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462369964377903,
        "lng": 118.33221043882541,
        "ele": 11.611543363534306,
        "distanceKm": 19.083153411790494,
        "gradePct": -0.853612454412008,
        "smoothedEle": 11.298141638274158,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462287588462303,
        "lng": 118.3327138031943,
        "ele": 11.066991036858404,
        "distanceKm": 19.134917557614976,
        "gradePct": -0.7760900604435604,
        "smoothedEle": 11.03699881067404,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462205212546706,
        "lng": 118.33321716756316,
        "ele": 10.522438710182465,
        "distanceKm": 19.186681736235172,
        "gradePct": -0.5874721650071052,
        "smoothedEle": 10.970785510573007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462123218487168,
        "lng": 118.33372060567763,
        "ele": 9.46955763169262,
        "distanceKm": 19.23844579831628,
        "gradePct": -0.2727635137690943,
        "smoothedEle": 11.132785211741027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.462041,
        "lng": 118.334224,
        "ele": 8.5,
        "distanceKm": 19.290209931664496,
        "gradePct": 0.1482326496685161,
        "smoothedEle": 11.559007788362951,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46196162229966,
        "lng": 118.33469254892562,
        "ele": 9.74027656777732,
        "distanceKm": 19.33844792399788,
        "gradePct": 0.5895004813048231,
        "smoothedEle": 12.211483963026305,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461882335399725,
        "lng": 118.33516111613974,
        "ele": 11.125630129975477,
        "distanceKm": 19.38668591916154,
        "gradePct": 1.0684045298354692,
        "smoothedEle": 13.107607661040802,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46180344616644,
        "lng": 118.33562976344979,
        "ele": 13.146358441646255,
        "distanceKm": 19.4349238531329,
        "gradePct": 1.5628070675126893,
        "smoothedEle": 14.247377142474473,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461724556933152,
        "lng": 118.33609841075983,
        "ele": 15.167086753317035,
        "distanceKm": 19.483161816319907,
        "gradePct": 2.025180807961984,
        "smoothedEle": 15.551335671503422,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461645667699862,
        "lng": 118.33656705806987,
        "ele": 17.18781506498766,
        "distanceKm": 19.531399808722544,
        "gradePct": 2.4382161766552293,
        "smoothedEle": 16.992582180918046,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461566778466576,
        "lng": 118.33703570537992,
        "ele": 19.20854337665844,
        "distanceKm": 19.57963783034058,
        "gradePct": 2.7627974371458404,
        "smoothedEle": 18.502269245158534,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461487889233286,
        "lng": 118.33750435268996,
        "ele": 21.22927168832922,
        "distanceKm": 19.627875881174074,
        "gradePct": 2.926495310471101,
        "smoothedEle": 19.933837759261838,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461409,
        "lng": 118.337973,
        "ele": 23.25,
        "distanceKm": 19.67611396122279,
        "gradePct": 2.948729706461534,
        "smoothedEle": 21.258278939919748,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4613196,
        "lng": 118.3385042,
        "ele": 23.800000000000015,
        "distanceKm": 19.730790269731685,
        "gradePct": 2.7977703253844814,
        "smoothedEle": 22.569911129682612,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4612302,
        "lng": 118.3390354,
        "ele": 24.349999999999994,
        "distanceKm": 19.785466615767444,
        "gradePct": 2.448184754556552,
        "smoothedEle": 23.57162057149648,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4611408,
        "lng": 118.33956660000001,
        "ele": 24.900000000000006,
        "distanceKm": 19.840142999331352,
        "gradePct": 2.005743895943956,
        "smoothedEle": 24.28213573180139,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4610514,
        "lng": 118.34009780000001,
        "ele": 25.449999999999985,
        "distanceKm": 19.894819420420454,
        "gradePct": 1.5380125350975933,
        "smoothedEle": 24.783030031988954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460962,
        "lng": 118.340629,
        "ele": 26,
        "distanceKm": 19.949495879036036,
        "gradePct": 1.0950943507835924,
        "smoothedEle": 25.10279986176748,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460874192484194,
        "lng": 118.3411280248918,
        "ele": 25.45663665962931,
        "distanceKm": 20.000939562554453,
        "gradePct": 0.8056050600342985,
        "smoothedEle": 25.38390037741787,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460786384968394,
        "lng": 118.34162704978358,
        "ele": 24.913273319258657,
        "distanceKm": 20.0523832806435,
        "gradePct": 0.6381065415284534,
        "smoothedEle": 25.670482839357746,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460698500784265,
        "lng": 118.3421260571925,
        "ele": 25.147825976976893,
        "distanceKm": 20.103826914724113,
        "gradePct": 0.5634185268702654,
        "smoothedEle": 25.962546520227303,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46061058366612,
        "lng": 118.34262505709138,
        "ele": 25.716544016729557,
        "distanceKm": 20.155270532916155,
        "gradePct": 0.5628689464699443,
        "smoothedEle": 26.26009183622688,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460522666547973,
        "lng": 118.34312405699026,
        "ele": 26.28526205648226,
        "distanceKm": 20.206714185719843,
        "gradePct": 0.5768097083957787,
        "smoothedEle": 26.569689042175675,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46043474942983,
        "lng": 118.34362305688914,
        "ele": 26.85398009623492,
        "distanceKm": 20.25815787313491,
        "gradePct": 0.649187633598825,
        "smoothedEle": 27.001642507749132,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460346832311686,
        "lng": 118.34412205678802,
        "ele": 27.422698135987623,
        "distanceKm": 20.30960159516131,
        "gradePct": 0.8277055446353281,
        "smoothedEle": 27.651357847970072,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46025891519354,
        "lng": 118.3446210566869,
        "ele": 27.991416175740326,
        "distanceKm": 20.36104535179901,
        "gradePct": 1.0717295399388151,
        "smoothedEle": 28.438304820494128,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460170998075395,
        "lng": 118.34512005658578,
        "ele": 28.560134215492987,
        "distanceKm": 20.41248914304774,
        "gradePct": 1.3039792913140726,
        "smoothedEle": 29.22613778864447,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460083084813718,
        "lng": 118.3456190569806,
        "ele": 29.30638748129458,
        "distanceKm": 20.4639329367002,
        "gradePct": 1.4571363819184864,
        "smoothedEle": 29.988852206188053,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459995091490782,
        "lng": 118.34611803903694,
        "ele": 30.818864679713744,
        "distanceKm": 20.515376635132643,
        "gradePct": 1.4933733765908652,
        "smoothedEle": 30.726446715310605,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459907,
        "lng": 118.346617,
        "ele": 32.5,
        "distanceKm": 20.566820349575853,
        "gradePct": 1.4560886567803466,
        "smoothedEle": 31.438923003772093,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45983206247839,
        "lng": 118.34706877445792,
        "ele": 33.01988962597895,
        "distanceKm": 20.613299947902505,
        "gradePct": 1.4117516047876764,
        "smoothedEle": 32.061662128634914,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459756449982713,
        "lng": 118.34752041956634,
        "ele": 33.31591170078317,
        "distanceKm": 20.65978021082508,
        "gradePct": 1.2637256329335385,
        "smoothedEle": 32.45473445328373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459680837487035,
        "lng": 118.34797206467475,
        "ele": 33.611933775587374,
        "distanceKm": 20.706260500736654,
        "gradePct": 0.9930337087785546,
        "smoothedEle": 32.581807926280824,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459605224991357,
        "lng": 118.34842370978316,
        "ele": 33.90795585039157,
        "distanceKm": 20.75274081763715,
        "gradePct": 0.5945311393862663,
        "smoothedEle": 32.43298900812056,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45952961249568,
        "lng": 118.34887535489159,
        "ele": 34.2039779251958,
        "distanceKm": 20.799221161527907,
        "gradePct": 0.043902321977034635,
        "smoothedEle": 31.960837536930985,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459454,
        "lng": 118.349327,
        "ele": 34.5,
        "distanceKm": 20.845701532406014,
        "gradePct": -0.5806795883302238,
        "smoothedEle": 31.174315303503445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459391,
        "lng": 118.349772,
        "ele": 32.25,
        "distanceKm": 20.891284100225405,
        "gradePct": -1.1455078209438327,
        "smoothedEle": 30.249847978116673,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459350381902237,
        "lng": 118.3503184997737,
        "ele": 29.71153322877891,
        "distanceKm": 20.946782646532608,
        "gradePct": -1.7493217053880918,
        "smoothedEle": 28.953422243914805,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459320190951118,
        "lng": 118.35086624988685,
        "ele": 27.10576661438954,
        "distanceKm": 21.00232522386719,
        "gradePct": -2.2152878284203497,
        "smoothedEle": 27.477736179505996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45929,
        "lng": 118.351414,
        "ele": 24.5,
        "distanceKm": 21.057867814467286,
        "gradePct": -2.5280050607470415,
        "smoothedEle": 25.871558875797533,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459265803349144,
        "lng": 118.35187055265293,
        "ele": 23.241590588469446,
        "distanceKm": 21.104156492247455,
        "gradePct": -2.7499349147880503,
        "smoothedEle": 24.449283781056682,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459240535566096,
        "lng": 118.35232703510195,
        "ele": 22.16106039231299,
        "distanceKm": 21.150445162125894,
        "gradePct": -2.8700861800275095,
        "smoothedEle": 23.115942134002665,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459215267783048,
        "lng": 118.35278351755098,
        "ele": 21.080530196156538,
        "distanceKm": 21.196733841255597,
        "gradePct": -2.8423781738149834,
        "smoothedEle": 21.941534792712655,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45919,
        "lng": 118.35324,
        "ele": 20,
        "distanceKm": 21.243022529636555,
        "gradePct": -2.694659117282687,
        "smoothedEle": 20.91153569759502,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459169157819026,
        "lng": 118.35371339784152,
        "ele": 19.481992578156323,
        "distanceKm": 21.290994000235457,
        "gradePct": -2.4254950868533114,
        "smoothedEle": 20.002726947664865,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459148315638053,
        "lng": 118.35418679568303,
        "ele": 18.963985156312688,
        "distanceKm": 21.33896547875339,
        "gradePct": -2.0945825911756786,
        "smoothedEle": 19.257448365968227,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45912747345708,
        "lng": 118.35466019352455,
        "ele": 18.44597773446901,
        "distanceKm": 21.38693696519035,
        "gradePct": -1.80304086161651,
        "smoothedEle": 18.58401326581822,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459106631276107,
        "lng": 118.35513359136606,
        "ele": 17.927970312625373,
        "distanceKm": 21.434908459544896,
        "gradePct": -1.5441078907910148,
        "smoothedEle": 18.003871258996544,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459085789095134,
        "lng": 118.35560698920757,
        "ele": 17.409962890781696,
        "distanceKm": 21.482879961819894,
        "gradePct": -1.307886534442342,
        "smoothedEle": 17.540672516488616,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459064946914165,
        "lng": 118.35608038704909,
        "ele": 16.891955468938022,
        "distanceKm": 21.53085147201388,
        "gradePct": -1.102979961843632,
        "smoothedEle": 17.17754658394194,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45904410473319,
        "lng": 118.35655378489061,
        "ele": 16.373948047094384,
        "distanceKm": 21.578822990126884,
        "gradePct": -0.9126237731676718,
        "smoothedEle": 16.87267162516418,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45902326255222,
        "lng": 118.35702718273212,
        "ele": 15.855940625250707,
        "distanceKm": 21.626794516158885,
        "gradePct": -0.7379746805828171,
        "smoothedEle": 16.62604765902584,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45900260725287,
        "lng": 118.35750059013674,
        "ele": 15.860761804924984,
        "distanceKm": 21.674766017478824,
        "gradePct": -0.5906717884200215,
        "smoothedEle": 16.43767480411656,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458982,
        "lng": 118.357974,
        "ele": 16,
        "distanceKm": 21.722737519717345,
        "gradePct": -0.4657065895158484,
        "smoothedEle": 16.307552911663386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4589548,
        "lng": 118.3584986,
        "ele": 16.1,
        "distanceKm": 21.775921614427507,
        "gradePct": -0.33573513799940835,
        "smoothedEle": 16.21964055708584,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4589276,
        "lng": 118.3590232,
        "ele": 16.2,
        "distanceKm": 21.829105720583485,
        "gradePct": -0.23935424798124222,
        "smoothedEle": 16.138263604372014,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4589004,
        "lng": 118.3595478,
        "ele": 16.3,
        "distanceKm": 21.882289838188093,
        "gradePct": -0.17945855697710186,
        "smoothedEle": 16.05834945311569,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4588732,
        "lng": 118.36007239999999,
        "ele": 16.4,
        "distanceKm": 21.935473967238494,
        "gradePct": -0.18992961625178476,
        "smoothedEle": 15.906640559864668,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458846,
        "lng": 118.360597,
        "ele": 16.5,
        "distanceKm": 21.9886581077375,
        "gradePct": -0.2953777357575548,
        "smoothedEle": 15.60939698867976,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458822106237523,
        "lng": 118.36112063787941,
        "ele": 15.993776218670334,
        "distanceKm": 22.041725358603646,
        "gradePct": -0.46594208741768195,
        "smoothedEle": 15.187417233547226,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458798212475042,
        "lng": 118.36164427575882,
        "ele": 15.487552437340634,
        "distanceKm": 22.094792619510763,
        "gradePct": -0.6966182766772053,
        "smoothedEle": 14.629448442132876,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458776,
        "lng": 118.362168,
        "ele": 14.75,
        "distanceKm": 22.14785959049736,
        "gradePct": -0.9301430870005241,
        "smoothedEle": 13.977131740648822,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458694,
        "lng": 118.362636,
        "ele": 13.5,
        "distanceKm": 22.196098434976733,
        "gradePct": -1.0967560736145254,
        "smoothedEle": 13.356720904836832,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458558,
        "lng": 118.362985,
        "ele": 12.75,
        "distanceKm": 22.234523883322765,
        "gradePct": -1.199042175882396,
        "smoothedEle": 12.846597517240642,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458433,
        "lng": 118.363293,
        "ele": 12,
        "distanceKm": 22.268656792470416,
        "gradePct": -1.2538493783820872,
        "smoothedEle": 12.396551428986882,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458403,
        "lng": 118.363414,
        "ele": 11.75,
        "distanceKm": 22.281350184193844,
        "gradePct": -1.2600258742778738,
        "smoothedEle": 12.250735425956302,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458308,
        "lng": 118.364081,
        "ele": 10.25,
        "distanceKm": 22.34968316741343,
        "gradePct": -1.1983367963361002,
        "smoothedEle": 11.557004707271796,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458359,
        "lng": 118.36454,
        "ele": 10,
        "distanceKm": 22.396486475496445,
        "gradePct": -1.0663104875652911,
        "smoothedEle": 11.218948433680552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458372146699304,
        "lng": 118.36498086157012,
        "ele": 9.905490436051982,
        "distanceKm": 22.441132966483057,
        "gradePct": -0.8678618212447398,
        "smoothedEle": 11.023732400510966,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458336,
        "lng": 118.365422,
        "ele": 9.75,
        "distanceKm": 22.485964085827494,
        "gradePct": -0.6289858289187973,
        "smoothedEle": 10.945922475006041,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458255,
        "lng": 118.365917,
        "ele": 10.25,
        "distanceKm": 22.536869510319473,
        "gradePct": -0.3611682750125457,
        "smoothedEle": 10.964755080514824,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458048878812974,
        "lng": 118.36636037639273,
        "ele": 11.039948598429891,
        "distanceKm": 22.587260693215782,
        "gradePct": -0.09349012396537171,
        "smoothedEle": 11.098605218611524,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457827439406486,
        "lng": 118.36679518819638,
        "ele": 11.644974299214923,
        "distanceKm": 22.637690871907505,
        "gradePct": 0.15009067897399184,
        "smoothedEle": 11.338964259270648,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457606,
        "lng": 118.36723,
        "ele": 12.25,
        "distanceKm": 22.68812111811426,
        "gradePct": 0.35767196595622636,
        "smoothedEle": 11.66206440710279,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457351,
        "lng": 118.36770966666667,
        "ele": 12.333333333333336,
        "distanceKm": 22.74434525946612,
        "gradePct": 0.5996878092488481,
        "smoothedEle": 12.183987943834769,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.457096,
        "lng": 118.36818933333333,
        "ele": 12.416666666666664,
        "distanceKm": 22.80056948568356,
        "gradePct": 0.8270701561805878,
        "smoothedEle": 12.816177560619888,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456841,
        "lng": 118.368669,
        "ele": 12.5,
        "distanceKm": 22.8567937967658,
        "gradePct": 1.0006711243760646,
        "smoothedEle": 13.462696508270572,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456676,
        "lng": 118.36899,
        "ele": 12.75,
        "distanceKm": 22.894107101768867,
        "gradePct": 1.0386110218702405,
        "smoothedEle": 13.794853786950377,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45641887206034,
        "lng": 118.36947713267894,
        "ele": 14.106160019304482,
        "distanceKm": 22.951103715119007,
        "gradePct": 0.9823675839933275,
        "smoothedEle": 14.224715718153345,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456161744120678,
        "lng": 118.36996426535786,
        "ele": 15.46232003860888,
        "distanceKm": 23.00810041552769,
        "gradePct": 0.869351244118222,
        "smoothedEle": 14.641477621044203,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455901,
        "lng": 118.370449,
        "ele": 16.5,
        "distanceKm": 23.065090867419215,
        "gradePct": 0.7141272632030703,
        "smoothedEle": 14.964810276280373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455876,
        "lng": 118.370429,
        "ele": 16.75,
        "distanceKm": 23.06852973427544,
        "gradePct": 0.7068451550301916,
        "smoothedEle": 14.980858321609425,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455847,
        "lng": 118.37042,
        "ele": 16.75,
        "distanceKm": 23.07188059659335,
        "gradePct": 0.6997494043391556,
        "smoothedEle": 14.996495679092998,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455815,
        "lng": 118.370419,
        "ele": 17,
        "distanceKm": 23.07544027851719,
        "gradePct": 0.6922114594537578,
        "smoothedEle": 15.013107528070915,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455767,
        "lng": 118.370456,
        "ele": 16.75,
        "distanceKm": 23.081960492049305,
        "gradePct": 0.6781310865011283,
        "smoothedEle": 15.042988716083356,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455752,
        "lng": 118.370485,
        "ele": 16.75,
        "distanceKm": 23.08533661819868,
        "gradePct": 0.6707004935413419,
        "smoothedEle": 15.05818128375555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455747,
        "lng": 118.370516,
        "ele": 16.75,
        "distanceKm": 23.088523276229772,
        "gradePct": 0.6636869052797062,
        "smoothedEle": 15.072521244895457,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455752,
        "lng": 118.370547,
        "ele": 16.75,
        "distanceKm": 23.09170993426228,
        "gradePct": 0.6566733170149514,
        "smoothedEle": 15.086861206041743,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455765,
        "lng": 118.370576,
        "ele": 16.5,
        "distanceKm": 23.094981909895434,
        "gradePct": 0.650066803362147,
        "smoothedEle": 15.101585096390938,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455785,
        "lng": 118.370598,
        "ele": 16.5,
        "distanceKm": 23.09812904114169,
        "gradePct": 0.6452801969256368,
        "smoothedEle": 15.115747186999085,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455811,
        "lng": 118.370611,
        "ele": 16.5,
        "distanceKm": 23.10130547671242,
        "gradePct": 0.6401717698186135,
        "smoothedEle": 15.129486646125756,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455859,
        "lng": 118.370615,
        "ele": 16.25,
        "distanceKm": 23.10665817477815,
        "gradePct": 0.6268049578446164,
        "smoothedEle": 15.143122458051904,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455933,
        "lng": 118.370983,
        "ele": 15.75,
        "distanceKm": 23.14480468228583,
        "gradePct": 0.5267065536098451,
        "smoothedEle": 15.23062224104764,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45606,
        "lng": 118.371431,
        "ele": 15.875,
        "distanceKm": 23.192298662860036,
        "gradePct": 0.33195110324468075,
        "smoothedEle": 15.189836849368842,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456187,
        "lng": 118.371879,
        "ele": 16,
        "distanceKm": 23.23979259978871,
        "gradePct": 0.04766085850528618,
        "smoothedEle": 14.916603458696848,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45631357050792,
        "lng": 118.37226697215795,
        "ele": 15.33262438746526,
        "distanceKm": 23.281508359215735,
        "gradePct": -0.2630909606791479,
        "smoothedEle": 14.514734735866877,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45644,
        "lng": 118.372655,
        "ele": 14.75,
        "distanceKm": 23.323224100444452,
        "gradePct": -0.5860827421086577,
        "smoothedEle": 14.008955600593103,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45661126519732,
        "lng": 118.37317102706032,
        "ele": 13.773732588565565,
        "distanceKm": 23.378818872389083,
        "gradePct": -0.9697453970061556,
        "smoothedEle": 13.261921807219386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.456782424297252,
        "lng": 118.37368709671263,
        "ele": 12.588089566819466,
        "distanceKm": 23.434413588107898,
        "gradePct": -1.218964802684418,
        "smoothedEle": 12.509619394907777,
        "gradeBand": "descent"
      },
      {
        "lat": 24.456954,
        "lng": 118.374203,
        "ele": 10.75,
        "distanceKm": 23.490008295698306,
        "gradePct": -1.37557927735944,
        "smoothedEle": 11.660519387779136,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45709981968102,
        "lng": 118.37463297240801,
        "ele": 10.511667385086616,
        "distanceKm": 23.53645150967438,
        "gradePct": -1.456468144505,
        "smoothedEle": 10.91828098569556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45724754599414,
        "lng": 118.37506217581624,
        "ele": 10.012976740817951,
        "distanceKm": 23.582896303762592,
        "gradePct": -1.508378755771731,
        "smoothedEle": 10.189988881634049,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45739477299707,
        "lng": 118.37549158790813,
        "ele": 9.381488370409,
        "distanceKm": 23.629341209075477,
        "gradePct": -1.521517083486132,
        "smoothedEle": 9.535224179190324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457542,
        "lng": 118.375921,
        "ele": 8.75,
        "distanceKm": 23.675786066849746,
        "gradePct": -1.4039893318686232,
        "smoothedEle": 9.069757346632441,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45770942350042,
        "lng": 118.37643438575441,
        "ele": 8.055296678750924,
        "distanceKm": 23.73098377832382,
        "gradePct": -1.0979293491024564,
        "smoothedEle": 8.809805563392924,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457876847000843,
        "lng": 118.37694777150881,
        "ele": 7.3605933575018465,
        "distanceKm": 23.786181424781415,
        "gradePct": -0.6484054011366448,
        "smoothedEle": 8.846865544715877,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458047,
        "lng": 118.37746,
        "ele": 6.75,
        "distanceKm": 23.84137205727665,
        "gradePct": -0.1871853880483989,
        "smoothedEle": 9.040281157347781,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45819660045834,
        "lng": 118.37792021762621,
        "ele": 7.998652474203653,
        "distanceKm": 23.890834989559792,
        "gradePct": 0.15881704244321396,
        "smoothedEle": 9.316519031380544,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.458346200916676,
        "lng": 118.37838043525241,
        "ele": 9.247304948407214,
        "distanceKm": 23.940297869742796,
        "gradePct": 0.4347603384172795,
        "smoothedEle": 9.685579768705233,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.458495801375015,
        "lng": 118.37884065287862,
        "ele": 10.495957422610868,
        "distanceKm": 23.989760697828345,
        "gradePct": 0.6534303486645415,
        "smoothedEle": 10.16626980710029,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45864540183335,
        "lng": 118.37930087050484,
        "ele": 11.74460989681452,
        "distanceKm": 24.039223473814527,
        "gradePct": 0.8751402130174335,
        "smoothedEle": 10.783031871041455,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45879465991136,
        "lng": 118.3797612237552,
        "ele": 12.213417106760245,
        "distanceKm": 24.088686338421045,
        "gradePct": 1.1088885599702878,
        "smoothedEle": 11.52229648217073,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45894382995568,
        "lng": 118.3802216118776,
        "ele": 12.481708553380113,
        "distanceKm": 24.138149192544724,
        "gradePct": 1.3240212315709956,
        "smoothedEle": 12.317590161169989,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459093,
        "lng": 118.380682,
        "ele": 12.75,
        "distanceKm": 24.187611994678527,
        "gradePct": 1.484043053437496,
        "smoothedEle": 13.113474370408879,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459432,
        "lng": 118.381263,
        "ele": 13.75,
        "distanceKm": 24.257462731014133,
        "gradePct": 1.5721297214418597,
        "smoothedEle": 14.199892536847003,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4596605,
        "lng": 118.381644,
        "ele": 14.375,
        "distanceKm": 24.303643795630748,
        "gradePct": 1.5357199929503988,
        "smoothedEle": 14.834231509927275,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.459889,
        "lng": 118.382025,
        "ele": 15,
        "distanceKm": 24.34982480183188,
        "gradePct": 1.4833049893186079,
        "smoothedEle": 15.472067237181768,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4601215,
        "lng": 118.3824395,
        "ele": 16.25,
        "distanceKm": 24.399104507610268,
        "gradePct": 1.4293726265476747,
        "smoothedEle": 16.15096755777195,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460354,
        "lng": 118.382854,
        "ele": 17.5,
        "distanceKm": 24.448384147458455,
        "gradePct": 1.3814153849050803,
        "smoothedEle": 16.821520241122876,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.460759498640382,
        "lng": 118.38326502028141,
        "ele": 18.194864335328933,
        "distanceKm": 24.509733431420408,
        "gradePct": 1.311708029313744,
        "smoothedEle": 17.541755464681923,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461183,
        "lng": 118.383659,
        "ele": 19,
        "distanceKm": 24.571440180022318,
        "gradePct": 1.1623973992993706,
        "smoothedEle": 18.094645615275873,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461542122167746,
        "lng": 118.38399150691406,
        "ele": 19.295939261725223,
        "distanceKm": 24.623663125814918,
        "gradePct": 0.9691464997181213,
        "smoothedEle": 18.42343197946799,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461901263168677,
        "lng": 118.38432399002626,
        "ele": 19.481063489008097,
        "distanceKm": 24.675886058674905,
        "gradePct": 0.6915301198915962,
        "smoothedEle": 18.527450511232185,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46226,
        "lng": 118.384657,
        "ele": 19.25,
        "distanceKm": 24.728108971946288,
        "gradePct": 0.3694298983627653,
        "smoothedEle": 18.445259414580107,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.462640806175543,
        "lng": 118.3849927645849,
        "ele": 18.738163742551063,
        "distanceKm": 24.782403531961478,
        "gradePct": 0.049169609856411785,
        "smoothedEle": 18.262008145886373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463021712409432,
        "lng": 118.38532839256273,
        "ele": 18.25,
        "distanceKm": 24.836698053436617,
        "gradePct": -0.23501387483563624,
        "smoothedEle": 17.97936742180083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46340306313333,
        "lng": 118.38566341232104,
        "ele": 17.369943300655933,
        "distanceKm": 24.890992608964815,
        "gradePct": -0.43482780250801034,
        "smoothedEle": 17.63401944335554,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463784,
        "lng": 118.385999,
        "ele": 16.75,
        "distanceKm": 24.9452871073316,
        "gradePct": -0.5167422201286894,
        "smoothedEle": 17.353796511981933,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46409125,
        "lng": 118.3862895,
        "ele": 16.562500000000004,
        "distanceKm": 24.990361627254277,
        "gradePct": -0.4901331443877161,
        "smoothedEle": 17.24031443948597,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464398499999998,
        "lng": 118.38658,
        "ele": 16.375000000000007,
        "distanceKm": 25.035436100383343,
        "gradePct": -0.36806116635196373,
        "smoothedEle": 17.24981443191545,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46470575,
        "lng": 118.3868705,
        "ele": 16.187499999999996,
        "distanceKm": 25.080510526720488,
        "gradePct": -0.15862359849626154,
        "smoothedEle": 17.383444970317733,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465013,
        "lng": 118.387161,
        "ele": 16,
        "distanceKm": 25.12558490626369,
        "gradePct": 0.09471687781510274,
        "smoothedEle": 17.64491660239443,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465324684885736,
        "lng": 118.38746534218738,
        "ele": 17.012785981277663,
        "distanceKm": 25.1719527861677,
        "gradePct": 0.38484063551386205,
        "smoothedEle": 18.0563428139845,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465636369771477,
        "lng": 118.38776968437475,
        "ele": 18.025571962555325,
        "distanceKm": 25.21832061542286,
        "gradePct": 0.6498121889861258,
        "smoothedEle": 18.54583151364519,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.465948054657215,
        "lng": 118.38807402656212,
        "ele": 19.03835794383307,
        "distanceKm": 25.26468839402996,
        "gradePct": 0.8234526254675559,
        "smoothedEle": 18.98344291079052,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466259767211106,
        "lng": 118.38837833457421,
        "ele": 20.048070765567957,
        "distanceKm": 25.311056124025715,
        "gradePct": 0.9042702215266459,
        "smoothedEle": 19.369177140935463,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466572,
        "lng": 118.388682,
        "ele": 21,
        "distanceKm": 25.357423927959825,
        "gradePct": 0.8750311654020311,
        "smoothedEle": 19.677489328418048,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.467047,
        "lng": 118.38918,
        "ele": 22.25,
        "distanceKm": 25.430431606721932,
        "gradePct": 0.5684716735076913,
        "smoothedEle": 19.797076386039013,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.467406333333333,
        "lng": 118.38949133333332,
        "ele": 21.416666666666686,
        "distanceKm": 25.481317405890028,
        "gradePct": 0.21993304474250486,
        "smoothedEle": 19.561646138809202,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46776566666667,
        "lng": 118.38980266666667,
        "ele": 20.583333333333314,
        "distanceKm": 25.532203149376564,
        "gradePct": -0.1916509478250024,
        "smoothedEle": 19.12648759030691,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468125,
        "lng": 118.390114,
        "ele": 19.75,
        "distanceKm": 25.58308883717847,
        "gradePct": -0.5731137382177727,
        "smoothedEle": 18.57330114195319,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468373,
        "lng": 118.390329,
        "ele": 18,
        "distanceKm": 25.618216450256405,
        "gradePct": -0.8291170034783619,
        "smoothedEle": 18.11883387251339,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4686825,
        "lng": 118.3906255,
        "ele": 16.625000000000053,
        "distanceKm": 25.663876975922786,
        "gradePct": -1.0738539863305692,
        "smoothedEle": 17.49462874792351,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468992,
        "lng": 118.390922,
        "ele": 15.25,
        "distanceKm": 25.709537453110062,
        "gradePct": -1.2393628812669766,
        "smoothedEle": 16.841591588572943,
        "gradeBand": "descent"
      },
      {
        "lat": 24.469337,
        "lng": 118.391264,
        "ele": 14.5,
        "distanceKm": 25.761206940103172,
        "gradePct": -1.2993447374431044,
        "smoothedEle": 16.212493268932093,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4697085,
        "lng": 118.391598,
        "ele": 14.5,
        "distanceKm": 25.81458389978328,
        "gradePct": -1.2423928958884973,
        "smoothedEle": 15.681044592880866,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47008,
        "lng": 118.391932,
        "ele": 14.5,
        "distanceKm": 25.867960796295414,
        "gradePct": -1.0613636812321874,
        "smoothedEle": 15.31349449574354,
        "gradeBand": "descent"
      },
      {
        "lat": 24.470409131194764,
        "lng": 118.39223277855335,
        "ele": 14.935338423877806,
        "distanceKm": 25.91556381701317,
        "gradePct": -0.7899755393126668,
        "smoothedEle": 15.188266926705062,
        "gradeBand": "descent"
      },
      {
        "lat": 24.470737942662304,
        "lng": 118.3925339821278,
        "ele": 15.154448686564827,
        "distanceKm": 25.96316699368518,
        "gradePct": -0.4864137010085425,
        "smoothedEle": 15.220150557549477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.471066754129843,
        "lng": 118.39283518570224,
        "ele": 15.373558949251866,
        "distanceKm": 26.010770119371106,
        "gradePct": -0.1974456398154006,
        "smoothedEle": 15.324125287730189,
        "gradeBand": "descent"
      },
      {
        "lat": 24.471395565597383,
        "lng": 118.39313638927668,
        "ele": 15.592669211938903,
        "distanceKm": 26.058373194071297,
        "gradePct": 0.02120627937171545,
        "smoothedEle": 15.421926706416093,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47172437706492,
        "lng": 118.39343759285111,
        "ele": 15.81177947462594,
        "distanceKm": 26.10597621778489,
        "gradePct": 0.13337920612764312,
        "smoothedEle": 15.480247094348336,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47205318853246,
        "lng": 118.39373879642557,
        "ele": 16.03088973731296,
        "distanceKm": 26.153579190512843,
        "gradePct": 0.13753450286169813,
        "smoothedEle": 15.488797849464529,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.472382,
        "lng": 118.39404,
        "ele": 16.25,
        "distanceKm": 26.20118211225245,
        "gradePct": 0.059174089959699076,
        "smoothedEle": 15.421531345913499,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4727014,
        "lng": 118.3943266,
        "ele": 15.850000000000012,
        "distanceKm": 26.247037113145094,
        "gradePct": -0.007863378633721246,
        "smoothedEle": 15.382909756153692,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4730208,
        "lng": 118.3946132,
        "ele": 15.449999999999994,
        "distanceKm": 26.292892067485965,
        "gradePct": -0.04420724910248735,
        "smoothedEle": 15.375802674897432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4733402,
        "lng": 118.3948998,
        "ele": 15.050000000000006,
        "distanceKm": 26.338746975274862,
        "gradePct": -0.04296177630037705,
        "smoothedEle": 15.400210038035752,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4736596,
        "lng": 118.3951864,
        "ele": 14.649999999999988,
        "distanceKm": 26.384601836510075,
        "gradePct": 0.0055856303442478805,
        "smoothedEle": 15.456131781458156,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.473979,
        "lng": 118.395473,
        "ele": 14.25,
        "distanceKm": 26.430456651191406,
        "gradePct": 0.09900011754031048,
        "smoothedEle": 15.594874963148774,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47430225,
        "lng": 118.39576475,
        "ele": 14.812500000000021,
        "distanceKm": 26.47697286564066,
        "gradePct": 0.2264567442931122,
        "smoothedEle": 15.831183488174643,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.474625500000002,
        "lng": 118.3960565,
        "ele": 15.375,
        "distanceKm": 26.523489031959954,
        "gradePct": 0.43003657953497204,
        "smoothedEle": 16.252161794595295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47494875,
        "lng": 118.39634825,
        "ele": 15.937499999999979,
        "distanceKm": 26.570005150148454,
        "gradePct": 0.7097394683461723,
        "smoothedEle": 16.85780950520287,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.475272,
        "lng": 118.39664,
        "ele": 16.5,
        "distanceKm": 26.61652122020625,
        "gradePct": 1.0365321276511317,
        "smoothedEle": 17.625774703196804,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.475549,
        "lng": 118.39688699999999,
        "ele": 17.499999999999954,
        "distanceKm": 26.65618935495236,
        "gradePct": 1.2945537298516738,
        "smoothedEle": 18.314707963240025,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.475826,
        "lng": 118.397134,
        "ele": 18.5,
        "distanceKm": 26.69585745503304,
        "gradePct": 1.519396344535796,
        "smoothedEle": 19.040884553600435,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476144333333334,
        "lng": 118.39743399999999,
        "ele": 20.083333333333293,
        "distanceKm": 26.74249146088994,
        "gradePct": 1.679624511259679,
        "smoothedEle": 19.858825649341018,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476462666666666,
        "lng": 118.397734,
        "ele": 21.666666666666707,
        "distanceKm": 26.789125416755162,
        "gradePct": 1.7292151752222624,
        "smoothedEle": 20.631909242852153,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476781,
        "lng": 118.398034,
        "ele": 23.25,
        "distanceKm": 26.83575932262629,
        "gradePct": 1.7001222367296822,
        "smoothedEle": 21.3601354314817,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.477112833333333,
        "lng": 118.398319,
        "ele": 23.333333333333336,
        "distanceKm": 26.88259274664527,
        "gradePct": 1.6241706893328218,
        "smoothedEle": 22.046398050679493,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.477444666666667,
        "lng": 118.39860399999999,
        "ele": 23.416666666666668,
        "distanceKm": 26.929426123830517,
        "gradePct": 1.4795152014589057,
        "smoothedEle": 22.588695466239315,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.477776499999997,
        "lng": 118.398889,
        "ele": 23.499999999999996,
        "distanceKm": 26.976259454182973,
        "gradePct": 1.2729353720799201,
        "smoothedEle": 22.9644919569758,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47810833333333,
        "lng": 118.399174,
        "ele": 23.583333333333332,
        "distanceKm": 27.02309273770185,
        "gradePct": 0.9896684304521113,
        "smoothedEle": 23.14167331565068,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478440166666665,
        "lng": 118.399459,
        "ele": 23.666666666666664,
        "distanceKm": 27.06992597438544,
        "gradePct": 0.6297257285205391,
        "smoothedEle": 23.12023992460983,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.478772,
        "lng": 118.399744,
        "ele": 23.75,
        "distanceKm": 27.116759164234992,
        "gradePct": 0.24061825667570685,
        "smoothedEle": 22.923257537888983,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4791354,
        "lng": 118.4000716,
        "ele": 23.150000000000006,
        "distanceKm": 27.169027344345682,
        "gradePct": -0.1365888601954777,
        "smoothedEle": 22.63328288419071,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4794988,
        "lng": 118.4003992,
        "ele": 22.550000000000008,
        "distanceKm": 27.221295463731373,
        "gradePct": -0.43195223935989246,
        "smoothedEle": 22.27096932555622,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4798622,
        "lng": 118.4007268,
        "ele": 21.950000000000014,
        "distanceKm": 27.273563522393758,
        "gradePct": -0.6343116064214098,
        "smoothedEle": 21.836317030263537,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4802256,
        "lng": 118.40105439999999,
        "ele": 21.350000000000016,
        "distanceKm": 27.32583152032997,
        "gradePct": -0.7717997690889017,
        "smoothedEle": 21.329326166628462,
        "gradeBand": "descent"
      },
      {
        "lat": 24.480589000000002,
        "lng": 118.401382,
        "ele": 20.74999999999998,
        "distanceKm": 27.37809945754109,
        "gradePct": -0.9101998312530718,
        "smoothedEle": 20.74999690293435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4809524,
        "lng": 118.4017096,
        "ele": 20.149999999999984,
        "distanceKm": 27.43036733402516,
        "gradePct": -1.0299937162561117,
        "smoothedEle": 20.135541761026435,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4813158,
        "lng": 118.4020372,
        "ele": 19.549999999999986,
        "distanceKm": 27.482635149781135,
        "gradePct": -1.135254900959114,
        "smoothedEle": 19.477813955495737,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481679200000002,
        "lng": 118.4023648,
        "ele": 18.949999999999992,
        "distanceKm": 27.534902904809798,
        "gradePct": -1.2259834201380917,
        "smoothedEle": 18.776813585085367,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4820426,
        "lng": 118.40269239999999,
        "ele": 18.349999999999994,
        "distanceKm": 27.587170599108273,
        "gradePct": -1.3054084289120942,
        "smoothedEle": 18.032540748588737,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482406,
        "lng": 118.40302,
        "ele": 17.75,
        "distanceKm": 27.639438232678256,
        "gradePct": -1.3881999152143094,
        "smoothedEle": 17.244995544738753,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482729833333334,
        "lng": 118.40331416666666,
        "ele": 16.833333333333346,
        "distanceKm": 27.686158777429306,
        "gradePct": -1.46436747020355,
        "smoothedEle": 16.501821116118208,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483053666666667,
        "lng": 118.40360833333334,
        "ele": 15.916666666666691,
        "distanceKm": 27.732879273364233,
        "gradePct": -1.571577873353463,
        "smoothedEle": 15.660798211867546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4833775,
        "lng": 118.4039025,
        "ele": 15.000000000000036,
        "distanceKm": 27.77959972048067,
        "gradePct": -1.7167807951290157,
        "smoothedEle": 14.706785698997276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483701333333336,
        "lng": 118.40419666666666,
        "ele": 14.08333333333331,
        "distanceKm": 27.82632011877931,
        "gradePct": -1.8664459264831834,
        "smoothedEle": 13.709761534284794,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48402516666667,
        "lng": 118.40449083333334,
        "ele": 13.166666666666654,
        "distanceKm": 27.873040468259926,
        "gradePct": -2.016873831218189,
        "smoothedEle": 12.676743792894902,
        "gradeBand": "descent"
      },
      {
        "lat": 24.484349,
        "lng": 118.404785,
        "ele": 12.25,
        "distanceKm": 27.91976076892046,
        "gradePct": -2.1407381232611384,
        "smoothedEle": 11.615470201487556,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4846455,
        "lng": 118.405065,
        "ele": 10.625000000000068,
        "distanceKm": 27.963233035511315,
        "gradePct": -2.208623728688976,
        "smoothedEle": 10.623739286743268,
        "gradeBand": "descent"
      },
      {
        "lat": 24.484942,
        "lng": 118.405345,
        "ele": 9,
        "distanceKm": 28.006705258579824,
        "gradePct": -2.2155807274020667,
        "smoothedEle": 9.697185757653587,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485274750000002,
        "lng": 118.4056455,
        "ele": 8.062499999999982,
        "distanceKm": 28.054598148307978,
        "gradePct": -2.159118911727004,
        "smoothedEle": 8.766277827197568,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4856075,
        "lng": 118.405946,
        "ele": 7.1250000000000355,
        "distanceKm": 28.1024909869679,
        "gradePct": -2.0448668596903663,
        "smoothedEle": 7.918027697199489,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48594025,
        "lng": 118.4062465,
        "ele": 6.187500000000018,
        "distanceKm": 28.150383774560243,
        "gradePct": -1.8869208158329775,
        "smoothedEle": 7.14302728267938,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486273,
        "lng": 118.406547,
        "ele": 5.25,
        "distanceKm": 28.198276511085652,
        "gradePct": -1.7126868244183246,
        "smoothedEle": 6.451459828332539,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486599057957854,
        "lng": 118.40685175303447,
        "ele": 5.25,
        "distanceKm": 28.24587438784712,
        "gradePct": -1.4871284695822087,
        "smoothedEle": 5.9615871397775475,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486925115915703,
        "lng": 118.40715650606894,
        "ele": 5.25,
        "distanceKm": 28.293472212820753,
        "gradePct": -1.1910905579885729,
        "smoothedEle": 5.69558186851788,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48724987319897,
        "lng": 118.40746292940196,
        "ele": 5.146418781115476,
        "distanceKm": 28.341069851835464,
        "gradePct": -0.8490673626228528,
        "smoothedEle": 5.595610323832103,
        "gradeBand": "descent"
      },
      {
        "lat": 24.487574936599486,
        "lng": 118.40776896470098,
        "ele": 4.948209390557738,
        "distanceKm": 28.388667711011532,
        "gradePct": -0.4721776341271084,
        "smoothedEle": 5.64585489861997,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4879,
        "lng": 118.408075,
        "ele": 4.75,
        "distanceKm": 28.436265518120788,
        "gradePct": -0.11666877997682065,
        "smoothedEle": 5.82714312649201,
        "gradeBand": "descent"
      },
      {
        "lat": 24.488192540184173,
        "lng": 118.4083306994976,
        "ele": 5.187336031168237,
        "distanceKm": 28.477830541202234,
        "gradePct": 0.1420293701870699,
        "smoothedEle": 6.067055676789415,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488489,
        "lng": 118.408581,
        "ele": 6,
        "distanceKm": 28.519402391130424,
        "gradePct": 0.3473390020083812,
        "smoothedEle": 6.33579750773553,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48891,
        "lng": 118.4089525,
        "ele": 6.874999999999973,
        "distanceKm": 28.5794415315353,
        "gradePct": 0.5913792457382473,
        "smoothedEle": 6.8188741818059135,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489331,
        "lng": 118.409324,
        "ele": 7.75,
        "distanceKm": 28.639480593159856,
        "gradePct": 0.8123829427821601,
        "smoothedEle": 7.47046636616892,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.489655985986047,
        "lng": 118.40963112782859,
        "ele": 7.971453936494911,
        "distanceKm": 28.687143596118098,
        "gradePct": 0.9882910282662909,
        "smoothedEle": 8.103842112826737,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48998025755045,
        "lng": 118.40993916958496,
        "ele": 8.377199137199353,
        "distanceKm": 28.734806775962138,
        "gradePct": 1.1316368018289178,
        "smoothedEle": 8.723015240846633,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49030452911485,
        "lng": 118.41024721134133,
        "ele": 8.782944337903796,
        "distanceKm": 28.782469903251478,
        "gradePct": 1.162073776771387,
        "smoothedEle": 9.175888060841045,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490629,
        "lng": 118.410555,
        "ele": 10,
        "distanceKm": 28.830133007441606,
        "gradePct": 1.0475609063977604,
        "smoothedEle": 9.464140660767663,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4909105,
        "lng": 118.41080099999999,
        "ele": 10.75,
        "distanceKm": 28.870125944007935,
        "gradePct": 0.8754283657828803,
        "smoothedEle": 9.628557656413204,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491192,
        "lng": 118.411047,
        "ele": 11.5,
        "distanceKm": 28.910118845898264,
        "gradePct": 0.6732259369405733,
        "smoothedEle": 9.748756181634288,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491605,
        "lng": 118.411264,
        "ele": 11.5,
        "distanceKm": 28.96102208046459,
        "gradePct": 0.4627599090517077,
        "smoothedEle": 9.897620663530041,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492048032550464,
        "lng": 118.41131605622343,
        "ele": 10.494482460865067,
        "distanceKm": 29.010565942668748,
        "gradePct": 0.3539524214393563,
        "smoothedEle": 10.053709583450958,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492490919803124,
        "lng": 118.41136960795005,
        "ele": 9.529586485563723,
        "distanceKm": 29.060110061247826,
        "gradePct": 0.3281400927724996,
        "smoothedEle": 10.243661036913547,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49293392727295,
        "lng": 118.41142192743956,
        "ele": 9.114637197792732,
        "distanceKm": 29.1096539860492,
        "gradePct": 0.31592592205027104,
        "smoothedEle": 10.379210891102158,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493377006244728,
        "lng": 118.41147352227823,
        "ele": 9.329617786433788,
        "distanceKm": 29.159198033410686,
        "gradePct": 0.2713502372695836,
        "smoothedEle": 10.434986785116072,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49382,
        "lng": 118.411526,
        "ele": 9.5,
        "distanceKm": 29.208742151495514,
        "gradePct": 0.20589757547477902,
        "smoothedEle": 10.459758844158486,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494107400065324,
        "lng": 118.41201157120852,
        "ele": 10.530250701963693,
        "distanceKm": 29.267354706196418,
        "gradePct": 0.1445263699259179,
        "smoothedEle": 10.55253478550393,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494395,
        "lng": 118.412497,
        "ele": 11.5,
        "distanceKm": 29.32596720984609,
        "gradePct": 0.19027134984329108,
        "smoothedEle": 10.778118756534726,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494649330264856,
        "lng": 118.41289280466353,
        "ele": 11.565677776366348,
        "distanceKm": 29.37499596835408,
        "gradePct": 0.3037329270092528,
        "smoothedEle": 11.050351606606274,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494886,
        "lng": 118.413302,
        "ele": 11.75,
        "distanceKm": 29.42405682633225,
        "gradePct": 0.47815060216927646,
        "smoothedEle": 11.440301158300697,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.495261,
        "lng": 118.413888,
        "ele": 11.75,
        "distanceKm": 29.496546237710266,
        "gradePct": 0.7509035379861615,
        "smoothedEle": 12.166692318960951,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.495659,
        "lng": 118.414394,
        "ele": 11.75,
        "distanceKm": 29.564222369403193,
        "gradePct": 0.8148116618048598,
        "smoothedEle": 12.620154375154412,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.495889,
        "lng": 118.414654,
        "ele": 12,
        "distanceKm": 29.600913133198272,
        "gradePct": 0.766046549790091,
        "smoothedEle": 12.788441650159179,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4963,
        "lng": 118.414901,
        "ele": 13.25,
        "distanceKm": 29.653001992431363,
        "gradePct": 0.6367128421859936,
        "smoothedEle": 13.003776277459723,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.496617,
        "lng": 118.415042,
        "ele": 14.75,
        "distanceKm": 29.691028756130038,
        "gradePct": 0.5672738284766903,
        "smoothedEle": 13.245951213420685,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49698375,
        "lng": 118.4152315,
        "ele": 14.437500000000007,
        "distanceKm": 29.736092518764455,
        "gradePct": 0.6014781318333936,
        "smoothedEle": 13.634627349484637,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4973505,
        "lng": 118.415421,
        "ele": 14.125000000000012,
        "distanceKm": 29.781156257601747,
        "gradePct": 0.7118487610477284,
        "smoothedEle": 14.121521523210399,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49771725,
        "lng": 118.4156105,
        "ele": 13.812499999999993,
        "distanceKm": 29.8262199726425,
        "gradePct": 0.8938610285221329,
        "smoothedEle": 14.680781833230972,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.498084,
        "lng": 118.4158,
        "ele": 13.5,
        "distanceKm": 29.871283663885475,
        "gradePct": 1.076320100396033,
        "smoothedEle": 15.272844019883815,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49848308551875,
        "lng": 118.41608470251742,
        "ele": 14.9342696091622,
        "distanceKm": 29.924190494508302,
        "gradePct": 1.1894406964238546,
        "smoothedEle": 15.910853470584403,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.498882171037497,
        "lng": 118.41636940503484,
        "ele": 16.3685392183245,
        "distanceKm": 29.97709727534386,
        "gradePct": 1.1717611818555562,
        "smoothedEle": 16.421188342228294,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49928142006341,
        "lng": 118.41665383041878,
        "ele": 17.647932354113102,
        "distanceKm": 30.030003998325586,
        "gradePct": 1.097117431646357,
        "smoothedEle": 16.92473252002776,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.499681280042275,
        "lng": 118.41693722027918,
        "ele": 18.348621569408717,
        "distanceKm": 30.082910828625618,
        "gradePct": 1.0346371941659696,
        "smoothedEle": 17.482331702070923,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500081140021138,
        "lng": 118.4172206101396,
        "ele": 19.04931078470438,
        "distanceKm": 30.135817609500005,
        "gradePct": 1.0354883007382905,
        "smoothedEle": 18.0939843582067,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500481,
        "lng": 118.417504,
        "ele": 19.75,
        "distanceKm": 30.188724340946543,
        "gradePct": 1.041099439208731,
        "smoothedEle": 18.614048793677714,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500757,
        "lng": 118.417765,
        "ele": 19,
        "distanceKm": 30.229212429211763,
        "gradePct": 0.9986243641253729,
        "smoothedEle": 18.914447422780956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501041400000002,
        "lng": 118.4181754,
        "ele": 19.149999999999995,
        "distanceKm": 30.281408405758427,
        "gradePct": 0.8709939901344401,
        "smoothedEle": 19.208485247408095,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5013258,
        "lng": 118.4185858,
        "ele": 19.3,
        "distanceKm": 30.333604307571743,
        "gradePct": 0.6871953743297368,
        "smoothedEle": 19.442787233612915,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501610200000002,
        "lng": 118.4189962,
        "ele": 19.45,
        "distanceKm": 30.385800134649152,
        "gradePct": 0.5228679846886699,
        "smoothedEle": 19.631040297924187,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5018946,
        "lng": 118.4194066,
        "ele": 19.600000000000005,
        "distanceKm": 30.43799588699171,
        "gradePct": 0.404658480015765,
        "smoothedEle": 19.77324461077625,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.502179,
        "lng": 118.419817,
        "ele": 19.75,
        "distanceKm": 30.49019156459686,
        "gradePct": 0.3554679700828908,
        "smoothedEle": 19.958847876059068,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.502462703927716,
        "lng": 118.42026517716602,
        "ele": 20.20315561386245,
        "distanceKm": 30.54543236742932,
        "gradePct": 0.4104699716464012,
        "smoothedEle": 20.306387072106606,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.502740802618476,
        "lng": 118.42071778477734,
        "ele": 20.46877040924163,
        "distanceKm": 30.600690474661715,
        "gradePct": 0.5476685600533796,
        "smoothedEle": 20.766945289449353,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.50301890130924,
        "lng": 118.42117039238867,
        "ele": 20.73438520462082,
        "distanceKm": 30.655948497933775,
        "gradePct": 0.7328169347328108,
        "smoothedEle": 21.302716394875443,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503297,
        "lng": 118.421623,
        "ele": 21,
        "distanceKm": 30.711206437241838,
        "gradePct": 0.8694725147208753,
        "smoothedEle": 21.83000481353966,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503498,
        "lng": 118.42206866666666,
        "ele": 22.083333333333307,
        "distanceKm": 30.761534259342604,
        "gradePct": 0.9306920924754871,
        "smoothedEle": 22.301975250043423,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503699,
        "lng": 118.42251433333334,
        "ele": 23.166666666666693,
        "distanceKm": 30.811862016841612,
        "gradePct": 0.9317139805764075,
        "smoothedEle": 22.738690362735717,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5039,
        "lng": 118.42296,
        "ele": 24.25,
        "distanceKm": 30.862189709735812,
        "gradePct": 0.8671838194103443,
        "smoothedEle": 23.096639615081422,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504032666666667,
        "lng": 118.42349833333334,
        "ele": 24.333333333333336,
        "distanceKm": 30.91862058917543,
        "gradePct": 0.7606626541329371,
        "smoothedEle": 23.42085946717232,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504165333333333,
        "lng": 118.42403666666667,
        "ele": 24.416666666666664,
        "distanceKm": 30.975051413125634,
        "gradePct": 0.6617224635515312,
        "smoothedEle": 23.742714203961636,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504298,
        "lng": 118.424575,
        "ele": 24.5,
        "distanceKm": 31.031482181588924,
        "gradePct": 0.5570271900031438,
        "smoothedEle": 23.992290644775778,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504362,
        "lng": 118.425142,
        "ele": 24,
        "distanceKm": 31.0892907962932,
        "gradePct": 0.4596388428335735,
        "smoothedEle": 24.171624785062022,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504427,
        "lng": 118.42552,
        "ele": 23.5,
        "distanceKm": 31.12821366451548,
        "gradePct": 0.39955822134379704,
        "smoothedEle": 24.274690275563614,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504349,
        "lng": 118.426174,
        "ele": 23.75,
        "distanceKm": 31.194951164635555,
        "gradePct": 0.4361371100710955,
        "smoothedEle": 24.702999083716993,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504279,
        "lng": 118.42662250000001,
        "ele": 24.00000000000001,
        "distanceKm": 31.24099298695508,
        "gradePct": 0.5837038661884385,
        "smoothedEle": 25.189202839636227,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504209,
        "lng": 118.427071,
        "ele": 24.25,
        "distanceKm": 31.2870348341804,
        "gradePct": 0.811897956655206,
        "smoothedEle": 25.78842224272552,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5042075,
        "lng": 118.4274755,
        "ele": 25,
        "distanceKm": 31.327962415055136,
        "gradePct": 1.0576889849308595,
        "smoothedEle": 26.389402951472146,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504206,
        "lng": 118.42788,
        "ele": 25.75,
        "distanceKm": 31.36888999641826,
        "gradePct": 1.2518020266976544,
        "smoothedEle": 27.039347428130828,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504308,
        "lng": 118.4282815,
        "ele": 27.5,
        "distanceKm": 31.41106727109808,
        "gradePct": 1.4397131365166034,
        "smoothedEle": 27.752612180340602,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.50441,
        "lng": 118.428683,
        "ele": 29.25,
        "distanceKm": 31.45324451402886,
        "gradePct": 1.5333024415413394,
        "smoothedEle": 28.41525729267545,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504512,
        "lng": 118.429054,
        "ele": 30.374999999999947,
        "distanceKm": 31.492458199960137,
        "gradePct": 1.6469271759021482,
        "smoothedEle": 29.161913312372338,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504614,
        "lng": 118.429425,
        "ele": 31.5,
        "distanceKm": 31.531671856734192,
        "gradePct": 1.8259372477144011,
        "smoothedEle": 30.10018469356669,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5048055,
        "lng": 118.429882,
        "ele": 31.75000000000001,
        "distanceKm": 31.58257837183114,
        "gradePct": 2.1615631974440204,
        "smoothedEle": 31.59395951694145,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.504997,
        "lng": 118.430339,
        "ele": 32,
        "distanceKm": 31.63348482294007,
        "gradePct": 2.6483116199589607,
        "smoothedEle": 33.40143675269237,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.50506,
        "lng": 118.430805,
        "ele": 31.5,
        "distanceKm": 31.681151884561796,
        "gradePct": 3.172318997126965,
        "smoothedEle": 35.291271149908596,
        "gradeBand": "hard"
      },
      {
        "lat": 24.504954,
        "lng": 118.431175,
        "ele": 33.25,
        "distanceKm": 31.72039984339933,
        "gradePct": 3.5577807109324677,
        "smoothedEle": 36.94603886569768,
        "gradeBand": "hard"
      },
      {
        "lat": 24.5048135,
        "lng": 118.4315265,
        "ele": 35.87500000000012,
        "distanceKm": 31.759244537821875,
        "gradePct": 3.913880007623685,
        "smoothedEle": 38.73702340420861,
        "gradeBand": "hard"
      },
      {
        "lat": 24.504673,
        "lng": 118.431878,
        "ele": 38.5,
        "distanceKm": 31.79808926863937,
        "gradePct": 4.286538843220812,
        "smoothedEle": 40.717764906380204,
        "gradeBand": "hard"
      },
      {
        "lat": 24.504511,
        "lng": 118.43231014285715,
        "ele": 42.214285714285836,
        "distanceKm": 31.84537857704127,
        "gradePct": 4.760244740534314,
        "smoothedEle": 43.39347251431116,
        "gradeBand": "hard"
      },
      {
        "lat": 24.504349,
        "lng": 118.43274228571428,
        "ele": 45.92857142857139,
        "distanceKm": 31.89266793754503,
        "gradePct": 5.3109138645297715,
        "smoothedEle": 46.39863731853023,
        "gradeBand": "hard"
      },
      {
        "lat": 24.504187,
        "lng": 118.43317442857143,
        "ele": 49.642857142857224,
        "distanceKm": 31.939957350152998,
        "gradePct": 5.636503465361672,
        "smoothedEle": 49.12076977001242,
        "gradeBand": "hard"
      },
      {
        "lat": 24.504025,
        "lng": 118.43360657142857,
        "ele": 53.357142857142776,
        "distanceKm": 31.98724681486235,
        "gradePct": 5.557428548043914,
        "smoothedEle": 51.2797516972927,
        "gradeBand": "hard"
      },
      {
        "lat": 24.503863,
        "lng": 118.43403871428572,
        "ele": 57.07142857142861,
        "distanceKm": 32.03453633167513,
        "gradePct": 4.894323032224978,
        "smoothedEle": 52.56864632903637,
        "gradeBand": "hard"
      },
      {
        "lat": 24.503701,
        "lng": 118.43447085714286,
        "ele": 60.785714285714164,
        "distanceKm": 32.08182590058851,
        "gradePct": 3.574550901007323,
        "smoothedEle": 52.858744650738494,
        "gradeBand": "hard"
      },
      {
        "lat": 24.503539,
        "lng": 118.434903,
        "ele": 64.5,
        "distanceKm": 32.129115521604845,
        "gradePct": 2.07389192459511,
        "smoothedEle": 52.64446269278332,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.50349,
        "lng": 118.4354565,
        "ele": 58.62499999999981,
        "distanceKm": 32.18538328688195,
        "gradePct": 0.2966536889500954,
        "smoothedEle": 51.787980437585404,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.503441,
        "lng": 118.43601,
        "ele": 52.75,
        "distanceKm": 32.241651073886864,
        "gradePct": -1.2670127667534776,
        "smoothedEle": 50.0782662510155,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503395,
        "lng": 118.436537,
        "ele": 43.75,
        "distanceKm": 32.295217946793144,
        "gradePct": -2.675895957634972,
        "smoothedEle": 47.44626978178688,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50342,
        "lng": 118.436739,
        "ele": 41.25,
        "distanceKm": 32.315844584651714,
        "gradePct": -3.266381801846432,
        "smoothedEle": 46.17183326426667,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503517,
        "lng": 118.436866,
        "ele": 41.25,
        "distanceKm": 32.3326212475803,
        "gradePct": -3.7675311418814488,
        "smoothedEle": 45.056037847440464,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5038275,
        "lng": 118.4372265,
        "ele": 40.125,
        "distanceKm": 32.38284584924749,
        "gradePct": -5.26576961985609,
        "smoothedEle": 41.2950649160337,
        "gradeBand": "descent"
      },
      {
        "lat": 24.504138,
        "lng": 118.437587,
        "ele": 39,
        "distanceKm": 32.433070385480484,
        "gradePct": -6.462263573480848,
        "smoothedEle": 37.414465986695156,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503798,
        "lng": 118.437841,
        "ele": 34.75,
        "distanceKm": 32.47878465336755,
        "gradePct": -7.018128393924833,
        "smoothedEle": 34.21745923687244,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503449,
        "lng": 118.438114,
        "ele": 30.25,
        "distanceKm": 32.52641843167128,
        "gradePct": -7.132175068164972,
        "smoothedEle": 31.204229441975585,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50330263007482,
        "lng": 118.43845348763999,
        "ele": 27.53132330295653,
        "distanceKm": 32.564428769785934,
        "gradePct": -6.748519520084129,
        "smoothedEle": 29.177153535044543,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503162,
        "lng": 118.438796,
        "ele": 25.5,
        "distanceKm": 32.602449011850325,
        "gradePct": -6.246518216813621,
        "smoothedEle": 27.28739007031017,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503005,
        "lng": 118.439303,
        "ele": 23,
        "distanceKm": 32.65663681915384,
        "gradePct": -5.602107855689175,
        "smoothedEle": 24.562142343038552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503108,
        "lng": 118.439656,
        "ele": 22,
        "distanceKm": 32.694145000271504,
        "gradePct": -5.299769139055246,
        "smoothedEle": 22.646252185064768,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503343,
        "lng": 118.440116,
        "ele": 20.25,
        "distanceKm": 32.74752177237949,
        "gradePct": -4.91276665144085,
        "smoothedEle": 20.253263542931812,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503351,
        "lng": 118.440527,
        "ele": 16.5,
        "distanceKm": 32.78911648053182,
        "gradePct": -4.589969977443287,
        "smoothedEle": 18.77013212926962,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50336,
        "lng": 118.440951,
        "ele": 16.5,
        "distanceKm": 32.83202869014448,
        "gradePct": -4.153565943446458,
        "smoothedEle": 17.4926181578104,
        "gradeBand": "descent"
      },
      {
        "lat": 24.503268,
        "lng": 118.441278,
        "ele": 15.25,
        "distanceKm": 32.86666014751855,
        "gradePct": -3.6582516642326963,
        "smoothedEle": 16.733654812943964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.502873,
        "lng": 118.441816,
        "ele": 13.5,
        "distanceKm": 32.93660542984409,
        "gradePct": -2.440800189171952,
        "smoothedEle": 15.861064877527722,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5025615,
        "lng": 118.442263,
        "ele": 13.125,
        "distanceKm": 32.99357300892261,
        "gradePct": -1.3253507058526102,
        "smoothedEle": 15.986758050861164,
        "gradeBand": "descent"
      },
      {
        "lat": 24.50225,
        "lng": 118.44271,
        "ele": 12.75,
        "distanceKm": 33.050540676978905,
        "gradePct": -0.05707221175567863,
        "smoothedEle": 16.97277554793007,
        "gradeBand": "descent"
      },
      {
        "lat": 24.5018505,
        "lng": 118.4429245,
        "ele": 14.625,
        "distanceKm": 33.0999814724792,
        "gradePct": 0.8819878238727642,
        "smoothedEle": 18.08193619470503,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.501451,
        "lng": 118.443139,
        "ele": 16.5,
        "distanceKm": 33.1494222982562,
        "gradePct": 1.5817902764535228,
        "smoothedEle": 19.05292454794293,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.5010465,
        "lng": 118.442935,
        "ele": 20.875,
        "distanceKm": 33.19891083539657,
        "gradePct": 1.9082117395838032,
        "smoothedEle": 19.89557060753918,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500642,
        "lng": 118.442731,
        "ele": 25.25,
        "distanceKm": 33.24839940023831,
        "gradePct": 1.7446231828428032,
        "smoothedEle": 20.424959902753585,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500404,
        "lng": 118.442773,
        "ele": 27.25,
        "distanceKm": 33.2752028657884,
        "gradePct": 1.5071814684605085,
        "smoothedEle": 20.540412941987658,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500223,
        "lng": 118.442909,
        "ele": 28,
        "distanceKm": 33.29958380587692,
        "gradePct": 1.270270433540375,
        "smoothedEle": 20.613555762253217,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.500004,
        "lng": 118.443243,
        "ele": 27.5,
        "distanceKm": 33.34123857137941,
        "gradePct": 0.8620312240647225,
        "smoothedEle": 20.61626347743036,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.499572,
        "lng": 118.443533,
        "ele": 23.5,
        "distanceKm": 33.397528055558354,
        "gradePct": 0.2659940584785738,
        "smoothedEle": 20.404013999812772,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.499211,
        "lng": 118.443606,
        "ele": 21.25,
        "distanceKm": 33.43834340780225,
        "gradePct": -0.14566736270270622,
        "smoothedEle": 20.02605417048156,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4988645,
        "lng": 118.443837,
        "ele": 17.749999999999716,
        "distanceKm": 33.48340793682471,
        "gradePct": -0.6621560825890476,
        "smoothedEle": 19.240715989918467,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498518,
        "lng": 118.444068,
        "ele": 14.25,
        "distanceKm": 33.528472499257106,
        "gradePct": -1.2485937780252367,
        "smoothedEle": 18.118246079059983,
        "gradeBand": "descent"
      },
      {
        "lat": 24.498138,
        "lng": 118.444104,
        "ele": 13.5,
        "distanceKm": 33.57088335164637,
        "gradePct": -1.7546041016035383,
        "smoothedEle": 16.995274375578855,
        "gradeBand": "descent"
      },
      {
        "lat": 24.497751638402562,
        "lng": 118.44404488667558,
        "ele": 13.5,
        "distanceKm": 33.6142592444493,
        "gradePct": -2.1540860580431533,
        "smoothedEle": 15.940907111635223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49736527680512,
        "lng": 118.44398577335119,
        "ele": 13.5,
        "distanceKm": 33.65763513978688,
        "gradePct": -2.2636667017614407,
        "smoothedEle": 15.162524338739676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.496979,
        "lng": 118.443926,
        "ele": 13,
        "distanceKm": 33.70101096115957,
        "gradePct": -2.146443486734222,
        "smoothedEle": 14.509372187192493,
        "gradeBand": "descent"
      },
      {
        "lat": 24.496630500000002,
        "lng": 118.4439295,
        "ele": 13.374999999999964,
        "distanceKm": 33.73976406487847,
        "gradePct": -1.7757310350439037,
        "smoothedEle": 14.267801367349954,
        "gradeBand": "descent"
      },
      {
        "lat": 24.496282,
        "lng": 118.443933,
        "ele": 13.75,
        "distanceKm": 33.778517168606754,
        "gradePct": -1.2385565140101618,
        "smoothedEle": 14.332600977918851,
        "gradeBand": "descent"
      },
      {
        "lat": 24.49592,
        "lng": 118.4441,
        "ele": 15.5,
        "distanceKm": 33.82217286512517,
        "gradePct": -0.541653901872435,
        "smoothedEle": 14.715588959576305,
        "gradeBand": "descent"
      },
      {
        "lat": 24.495567,
        "lng": 118.444515,
        "ele": 15,
        "distanceKm": 33.87965395042669,
        "gradePct": 0.2891565508594599,
        "smoothedEle": 15.409278680560249,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.495226,
        "lng": 118.44493,
        "ele": 14.25,
        "distanceKm": 33.93623234406812,
        "gradePct": 0.9972585729766035,
        "smoothedEle": 16.284333800073547,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4947265,
        "lng": 118.44508400000001,
        "ele": 16.250000000000128,
        "distanceKm": 33.993918843555264,
        "gradePct": 1.4429759648099658,
        "smoothedEle": 17.35367058685897,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.494227,
        "lng": 118.445238,
        "ele": 18.25,
        "distanceKm": 34.051605359761844,
        "gradePct": 1.7175206746254037,
        "smoothedEle": 18.505825741990517,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.49371,
        "lng": 118.445285,
        "ele": 19.75,
        "distanceKm": 34.10928960067857,
        "gradePct": 1.8728354416111328,
        "smoothedEle": 19.613301697944667,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.493168,
        "lng": 118.445144,
        "ele": 21.5,
        "distanceKm": 34.17122314151445,
        "gradePct": 2.0576919775231106,
        "smoothedEle": 21.04834346895186,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492717462734035,
        "lng": 118.4450036438187,
        "ele": 22.639254718392408,
        "distanceKm": 34.22329494666027,
        "gradePct": 2.257607978467739,
        "smoothedEle": 22.455606471704495,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.492266925468066,
        "lng": 118.44486328763739,
        "ele": 23.778509436784656,
        "distanceKm": 34.275366765683394,
        "gradePct": 2.439445472894909,
        "smoothedEle": 23.840910360776263,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4918163882021,
        "lng": 118.44472293145608,
        "ele": 24.917764155176904,
        "distanceKm": 34.32743859858288,
        "gradePct": 2.575406971546404,
        "smoothedEle": 25.184640121683923,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491366,
        "lng": 118.444582,
        "ele": 26,
        "distanceKm": 34.37951041120058,
        "gradePct": 2.6311059663294483,
        "smoothedEle": 26.53452244078788,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.491063333333333,
        "lng": 118.44426766666666,
        "ele": 27.416666666666668,
        "distanceKm": 34.42581783802791,
        "gradePct": 2.699924134701889,
        "smoothedEle": 27.92257302675428,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490760666666667,
        "lng": 118.44395333333334,
        "ele": 28.833333333333332,
        "distanceKm": 34.472125317428755,
        "gradePct": 2.865360398123542,
        "smoothedEle": 29.48539658796823,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.490458,
        "lng": 118.443639,
        "ele": 30.25,
        "distanceKm": 34.51843284940454,
        "gradePct": 3.1363202128056975,
        "smoothedEle": 31.22488440303892,
        "gradeBand": "hard"
      },
      {
        "lat": 24.490102,
        "lng": 118.443478,
        "ele": 31.499999999999893,
        "distanceKm": 34.561239730705225,
        "gradePct": 3.4119461562961937,
        "smoothedEle": 32.8847752290613,
        "gradeBand": "hard"
      },
      {
        "lat": 24.489746,
        "lng": 118.443317,
        "ele": 32.75,
        "distanceKm": 34.60404662955506,
        "gradePct": 3.6129241128954015,
        "smoothedEle": 34.495836111275636,
        "gradeBand": "hard"
      },
      {
        "lat": 24.489429333333334,
        "lng": 118.44292233333333,
        "ele": 36.166666666666664,
        "distanceKm": 34.65728974229132,
        "gradePct": 3.6689830693962344,
        "smoothedEle": 36.32267932380004,
        "gradeBand": "hard"
      },
      {
        "lat": 24.489112666666667,
        "lng": 118.44252766666666,
        "ele": 39.583333333333336,
        "distanceKm": 34.71053293044272,
        "gradePct": 3.424629529172317,
        "smoothedEle": 37.777392324196555,
        "gradeBand": "hard"
      },
      {
        "lat": 24.488796,
        "lng": 118.442133,
        "ele": 43,
        "distanceKm": 34.76377619400842,
        "gradePct": 2.8572461131465503,
        "smoothedEle": 38.69472862906116,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.48868453105527,
        "lng": 118.44169503054452,
        "ele": 43.75,
        "distanceKm": 34.80979592860148,
        "gradePct": 2.2250472323719603,
        "smoothedEle": 39.14319680257843,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488619,
        "lng": 118.441243,
        "ele": 43.75,
        "distanceKm": 34.85611471463761,
        "gradePct": 1.508120472504835,
        "smoothedEle": 39.29860348071475,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.488376,
        "lng": 118.440802,
        "ele": 42.75,
        "distanceKm": 34.90828339708385,
        "gradePct": 0.7010528522939773,
        "smoothedEle": 39.1180361679232,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.487828,
        "lng": 118.4405,
        "ele": 38.75,
        "distanceKm": 34.97645222957935,
        "gradePct": -0.31111247493922445,
        "smoothedEle": 38.19603325992024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.487554,
        "lng": 118.44042,
        "ele": 36.75,
        "distanceKm": 35.00797685384823,
        "gradePct": -0.7878478583102289,
        "smoothedEle": 37.549773970856165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.487096,
        "lng": 118.439985,
        "ele": 34,
        "distanceKm": 35.075291628872556,
        "gradePct": -1.543719418838641,
        "smoothedEle": 36.14478911448913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486835,
        "lng": 118.439738,
        "ele": 33.25,
        "distanceKm": 35.11359324603511,
        "gradePct": -1.7982178726808506,
        "smoothedEle": 35.44978320060099,
        "gradeBand": "descent"
      },
      {
        "lat": 24.486363061362983,
        "lng": 118.4396037339692,
        "ele": 31.998117706519576,
        "distanceKm": 35.16780087052873,
        "gradePct": -1.8259596037827908,
        "smoothedEle": 34.661126151738586,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485891,
        "lng": 118.43947,
        "ele": 31,
        "distanceKm": 35.22200825193084,
        "gradePct": -1.4744439365905966,
        "smoothedEle": 34.30802465956425,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485556,
        "lng": 118.4392745,
        "ele": 32.25000000000011,
        "distanceKm": 35.26418618618712,
        "gradePct": -1.0103200193018365,
        "smoothedEle": 34.35594036970848,
        "gradeBand": "descent"
      },
      {
        "lat": 24.485221,
        "lng": 118.439079,
        "ele": 33.5,
        "distanceKm": 35.306364145152045,
        "gradePct": -0.4981909467689434,
        "smoothedEle": 34.58457769693983,
        "gradeBand": "descent"
      },
      {
        "lat": 24.484764333333334,
        "lng": 118.43881233333333,
        "ele": 35.083333333333265,
        "distanceKm": 35.36386830190077,
        "gradePct": 0.1332996432699981,
        "smoothedEle": 34.9849396770051,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.484307666666666,
        "lng": 118.43854566666667,
        "ele": 36.666666666666735,
        "distanceKm": 35.42137250461498,
        "gradePct": 0.4795564624568203,
        "smoothedEle": 35.271278779275924,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.483851,
        "lng": 118.438279,
        "ele": 38.25,
        "distanceKm": 35.47887675329464,
        "gradePct": 0.48314975657776693,
        "smoothedEle": 35.40187417720647,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.483517,
        "lng": 118.437791,
        "ele": 38.5,
        "distanceKm": 35.540667353050786,
        "gradePct": 0.3002687404435626,
        "smoothedEle": 35.4239448731643,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.483303,
        "lng": 118.437382,
        "ele": 37.25,
        "distanceKm": 35.588409573089045,
        "gradePct": 0.09350937914508828,
        "smoothedEle": 35.294160382786984,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.483273,
        "lng": 118.437108,
        "ele": 36.25,
        "distanceKm": 35.61633740044597,
        "gradePct": -0.055152026448428086,
        "smoothedEle": 35.135902694431074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.483044500000002,
        "lng": 118.4367735,
        "ele": 34.25000000000017,
        "distanceKm": 35.658662503667806,
        "gradePct": -0.2758990417031445,
        "smoothedEle": 34.80416839072609,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482816,
        "lng": 118.436439,
        "ele": 32.25,
        "distanceKm": 35.70098765605591,
        "gradePct": -0.5293857803977882,
        "smoothedEle": 34.35100030657934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482558333333333,
        "lng": 118.436053,
        "ele": 32.25,
        "distanceKm": 35.74943084476754,
        "gradePct": -0.8819433719790535,
        "smoothedEle": 33.63623507896945,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482300666666667,
        "lng": 118.435667,
        "ele": 32.25,
        "distanceKm": 35.79787409798159,
        "gradePct": -1.2025679872684385,
        "smoothedEle": 32.83539210052567,
        "gradeBand": "descent"
      },
      {
        "lat": 24.482043,
        "lng": 118.435281,
        "ele": 32.25,
        "distanceKm": 35.84631741569516,
        "gradePct": -1.448632336007848,
        "smoothedEle": 32.003661643701555,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48189466666667,
        "lng": 118.43477033333333,
        "ele": 31.666666666666668,
        "distanceKm": 35.90056404738361,
        "gradePct": -1.579783016968581,
        "smoothedEle": 31.195969777409932,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481746333333334,
        "lng": 118.43425966666668,
        "ele": 31.083333333333332,
        "distanceKm": 35.9548107371072,
        "gradePct": -1.3761462619747427,
        "smoothedEle": 30.79500449411052,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481598,
        "lng": 118.433749,
        "ele": 30.5,
        "distanceKm": 36.009057484868116,
        "gradePct": -0.9343827789860244,
        "smoothedEle": 30.77461732594781,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481577,
        "lng": 118.433254,
        "ele": 29.375,
        "distanceKm": 36.05920490556484,
        "gradePct": -0.47321890479652357,
        "smoothedEle": 30.8653387267633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481556,
        "lng": 118.432759,
        "ele": 28.25,
        "distanceKm": 36.10935233461253,
        "gradePct": -0.13810290813468187,
        "smoothedEle": 30.854805194137185,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481373,
        "lng": 118.432177,
        "ele": 29.25,
        "distanceKm": 36.17166575859332,
        "gradePct": -0.026767876713547144,
        "smoothedEle": 30.73513423821817,
        "gradeBand": "descent"
      },
      {
        "lat": 24.481056483031182,
        "lng": 118.43186552075369,
        "ele": 31.432384378171395,
        "distanceKm": 36.218912789282896,
        "gradePct": -0.13734043639173327,
        "smoothedEle": 30.517765625822665,
        "gradeBand": "descent"
      },
      {
        "lat": 24.48074,
        "lng": 118.431554,
        "ele": 33.5,
        "distanceKm": 36.26615986450183,
        "gradePct": -0.3745645373215236,
        "smoothedEle": 30.114748753959216,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4804275,
        "lng": 118.431129,
        "ele": 32.375,
        "distanceKm": 36.3214524791378,
        "gradePct": -0.6713343108030092,
        "smoothedEle": 29.488898628447977,
        "gradeBand": "descent"
      },
      {
        "lat": 24.480115,
        "lng": 118.430704,
        "ele": 31.25,
        "distanceKm": 36.376745176853454,
        "gradePct": -0.9021837004042879,
        "smoothedEle": 28.907398044008872,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479876,
        "lng": 118.430221,
        "ele": 29.75,
        "distanceKm": 36.43238191398628,
        "gradePct": -1.1097095790788691,
        "smoothedEle": 28.183455027728286,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479685,
        "lng": 118.429894,
        "ele": 27.25,
        "distanceKm": 36.47170314806117,
        "gradePct": -1.2916048652238898,
        "smoothedEle": 27.46879529662863,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479324,
        "lng": 118.429427,
        "ele": 24.25,
        "distanceKm": 36.533710133958664,
        "gradePct": -1.705130784280496,
        "smoothedEle": 25.94972612342223,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479014,
        "lng": 118.429061,
        "ele": 23.5,
        "distanceKm": 36.58430771580409,
        "gradePct": -2.0199755314218737,
        "smoothedEle": 24.769043524370186,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478636,
        "lng": 118.428824,
        "ele": 22.75,
        "distanceKm": 36.63270111923499,
        "gradePct": -2.2094630608307626,
        "smoothedEle": 23.758727380693212,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478265,
        "lng": 118.428705,
        "ele": 22.25,
        "distanceKm": 36.67567636263207,
        "gradePct": -2.218741380392203,
        "smoothedEle": 22.933975313500163,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47788135910789,
        "lng": 118.42862627182157,
        "ele": 21.24558009228782,
        "distanceKm": 36.719072991140024,
        "gradePct": -2.0419553409630455,
        "smoothedEle": 22.22440136722348,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477498,
        "lng": 118.428546,
        "ele": 20.25,
        "distanceKm": 36.762467796987444,
        "gradePct": -1.8016159202884705,
        "smoothedEle": 21.67544102122477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47764,
        "lng": 118.427825,
        "ele": 21.25,
        "distanceKm": 36.837122788733694,
        "gradePct": -1.4911156401964336,
        "smoothedEle": 20.691638382897626,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477843,
        "lng": 118.427335,
        "ele": 21,
        "distanceKm": 36.89160715922425,
        "gradePct": -1.483701495259526,
        "smoothedEle": 19.706089456134126,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4781585,
        "lng": 118.42699400000001,
        "ele": 20.625,
        "distanceKm": 36.94081748820123,
        "gradePct": -1.5125650674411764,
        "smoothedEle": 18.924195301081962,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478474,
        "lng": 118.426653,
        "ele": 20.25,
        "distanceKm": 36.990027756510834,
        "gradePct": -1.5153316891256592,
        "smoothedEle": 18.281592807544648,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478851,
        "lng": 118.426303,
        "ele": 17.5,
        "distanceKm": 37.04490870024629,
        "gradePct": -1.4085521749528964,
        "smoothedEle": 17.73369737348702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479355,
        "lng": 118.425866,
        "ele": 14,
        "distanceKm": 37.116298757740424,
        "gradePct": -1.1932018304837877,
        "smoothedEle": 16.927365382764506,
        "gradeBand": "descent"
      },
      {
        "lat": 24.479182750000003,
        "lng": 118.42539325,
        "ele": 14.437499999999984,
        "distanceKm": 37.16783255059958,
        "gradePct": -1.1545943046903004,
        "smoothedEle": 16.26223587665472,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4790105,
        "lng": 118.4249205,
        "ele": 14.87499999999997,
        "distanceKm": 37.21936640425191,
        "gradePct": -1.2280467301271458,
        "smoothedEle": 15.53260148430454,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47883825,
        "lng": 118.42444775,
        "ele": 15.312500000000016,
        "distanceKm": 37.27090031869688,
        "gradePct": -1.2807973714955732,
        "smoothedEle": 14.87853411153105,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478666,
        "lng": 118.423975,
        "ele": 15.75,
        "distanceKm": 37.32243429393396,
        "gradePct": -1.1849378993926765,
        "smoothedEle": 14.478300261173466,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4784645,
        "lng": 118.423416,
        "ele": 14.625000000000068,
        "distanceKm": 37.3832808614706,
        "gradePct": -0.8595401805559421,
        "smoothedEle": 14.324432906687315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478263,
        "lng": 118.422857,
        "ele": 13.5,
        "distanceKm": 37.44412751322125,
        "gradePct": -0.5438711687140628,
        "smoothedEle": 14.130591665646637,
        "gradeBand": "descent"
      },
      {
        "lat": 24.478120787047914,
        "lng": 118.42247159448488,
        "ele": 13.710374189474162,
        "distanceKm": 37.486214599741324,
        "gradePct": -0.41729136164272196,
        "smoothedEle": 13.925014441509449,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477979,
        "lng": 118.422086,
        "ele": 13.75,
        "distanceKm": 37.52830168674658,
        "gradePct": -0.38799701584542917,
        "smoothedEle": 13.687468905926671,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477800000000002,
        "lng": 118.421615,
        "ele": 13.375,
        "distanceKm": 37.57995613824267,
        "gradePct": -0.45721364465937125,
        "smoothedEle": 13.418413098483624,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477621,
        "lng": 118.421144,
        "ele": 13,
        "distanceKm": 37.63161065229962,
        "gradePct": -0.44949565164113436,
        "smoothedEle": 13.27147575049459,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477424499999998,
        "lng": 118.4206415,
        "ele": 12.625,
        "distanceKm": 37.68695962868027,
        "gradePct": -0.29600740762717886,
        "smoothedEle": 13.32879457641868,
        "gradeBand": "descent"
      },
      {
        "lat": 24.477228,
        "lng": 118.420139,
        "ele": 12.25,
        "distanceKm": 37.74230867801079,
        "gradePct": -0.05099925384657861,
        "smoothedEle": 13.51251129722122,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4770565,
        "lng": 118.41966,
        "ele": 12.875000000000044,
        "distanceKm": 37.794400366189606,
        "gradePct": 0.17696313795225663,
        "smoothedEle": 13.731251067063612,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476885,
        "lng": 118.419181,
        "ele": 13.5,
        "distanceKm": 37.84649211583695,
        "gradePct": 0.37614208148123307,
        "smoothedEle": 14.039171002762957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476714055848834,
        "lng": 118.41872666702467,
        "ele": 14.51610907333973,
        "distanceKm": 37.89624561276703,
        "gradePct": 0.5328936086567011,
        "smoothedEle": 14.42540419387228,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476546287274566,
        "lng": 118.418270892971,
        "ele": 15.054359681796296,
        "distanceKm": 37.9460005070075,
        "gradePct": 0.6693488816216828,
        "smoothedEle": 14.866711530307109,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4763785187003,
        "lng": 118.4178151189173,
        "ele": 15.592610290252859,
        "distanceKm": 37.995755458247565,
        "gradePct": 0.7766062761751616,
        "smoothedEle": 15.292473714336422,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476210750126032,
        "lng": 118.41735934486363,
        "ele": 16.13086089870942,
        "distanceKm": 38.045510466484515,
        "gradePct": 0.7903007128267421,
        "smoothedEle": 15.613969793497713,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.476042981551767,
        "lng": 118.41690357080994,
        "ele": 16.669111507165987,
        "distanceKm": 38.09526553172035,
        "gradePct": 0.6870501841038275,
        "smoothedEle": 15.791896256060006,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4758752129775,
        "lng": 118.41644779675624,
        "ele": 17.20736211562255,
        "distanceKm": 38.14502065395369,
        "gradePct": 0.4751712180609053,
        "smoothedEle": 15.808363035659669,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47570730752234,
        "lng": 118.41599208504377,
        "ele": 17.113445173084312,
        "distanceKm": 38.19477569379868,
        "gradePct": 0.22497312545180695,
        "smoothedEle": 15.73403594231981,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47553923897899,
        "lng": 118.41553644760836,
        "ele": 16.26632549893338,
        "distanceKm": 38.24453063170687,
        "gradePct": 0.023949630486897015,
        "smoothedEle": 15.6555377714429,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.475371170435636,
        "lng": 118.41508081017295,
        "ele": 15.419205824782575,
        "distanceKm": 38.29428562667937,
        "gradePct": -0.10776189740377552,
        "smoothedEle": 15.57286827455783,
        "gradeBand": "descent"
      },
      {
        "lat": 24.475203101892287,
        "lng": 118.41462517273754,
        "ele": 14.572086150631769,
        "distanceKm": 38.34404067871567,
        "gradePct": -0.16100563218035316,
        "smoothedEle": 15.486027442153873,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47503504978237,
        "lng": 118.41416952807438,
        "ele": 13.76466731149897,
        "distanceKm": 38.39379577941053,
        "gradePct": -0.19598109139949915,
        "smoothedEle": 15.343537615010025,
        "gradeBand": "descent"
      },
      {
        "lat": 24.474867537336777,
        "lng": 118.41371364605578,
        "ele": 14.261000483624228,
        "distanceKm": 38.4435507044904,
        "gradePct": -0.2641876789337088,
        "smoothedEle": 15.128708440911051,
        "gradeBand": "descent"
      },
      {
        "lat": 24.474700024891185,
        "lng": 118.4132577640372,
        "ele": 14.757333655749484,
        "distanceKm": 38.49330568650436,
        "gradePct": -0.3321624256663733,
        "smoothedEle": 14.910171624801432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47453251244559,
        "lng": 118.4128018820186,
        "ele": 15.253666827874742,
        "distanceKm": 38.543060725454716,
        "gradePct": -0.380244824522081,
        "smoothedEle": 14.727248171320873,
        "gradeBand": "descent"
      },
      {
        "lat": 24.474365,
        "lng": 118.412346,
        "ele": 15.75,
        "distanceKm": 38.59281582133979,
        "gradePct": -0.3832029405828744,
        "smoothedEle": 14.579938160806694,
        "gradeBand": "descent"
      },
      {
        "lat": 24.474197999999998,
        "lng": 118.4118785,
        "ele": 15.25,
        "distanceKm": 38.64364231730827,
        "gradePct": -0.33205827704776664,
        "smoothedEle": 14.46418949950229,
        "gradeBand": "descent"
      },
      {
        "lat": 24.474031,
        "lng": 118.411411,
        "ele": 14.75,
        "distanceKm": 38.694468871708146,
        "gradePct": -0.29848778525424824,
        "smoothedEle": 14.308919626035552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473864,
        "lng": 118.4109435,
        "ele": 14.25,
        "distanceKm": 38.74529548453934,
        "gradePct": -0.34051980978388713,
        "smoothedEle": 14.039592096123846,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473696999999998,
        "lng": 118.410476,
        "ele": 13.75,
        "distanceKm": 38.79612215580135,
        "gradePct": -0.44933883073404585,
        "smoothedEle": 13.67373088746082,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47353,
        "lng": 118.4100085,
        "ele": 13.25,
        "distanceKm": 38.84694888549366,
        "gradePct": -0.6246308220022359,
        "smoothedEle": 13.204826631249645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473363,
        "lng": 118.409541,
        "ele": 12.75,
        "distanceKm": 38.8977756736162,
        "gradePct": -0.7880420902336128,
        "smoothedEle": 12.715312877366461,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473203474381044,
        "lng": 118.40910839594399,
        "ele": 12.175339989358429,
        "distanceKm": 38.94501420345286,
        "gradePct": -0.8731717492171082,
        "smoothedEle": 12.294739091271893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.473043948762093,
        "lng": 118.40867579188799,
        "ele": 11.600679978716945,
        "distanceKm": 38.992252784711326,
        "gradePct": -0.8769134915770529,
        "smoothedEle": 11.947756461804802,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47288272859945,
        "lng": 118.40824394857992,
        "ele": 11.315677032495987,
        "distanceKm": 39.03949125400381,
        "gradePct": -0.7989200532635216,
        "smoothedEle": 11.67578723584474,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472721434052268,
        "lng": 118.40781213857112,
        "ele": 10.727644512937035,
        "distanceKm": 39.08672979688438,
        "gradePct": -0.6721779147460245,
        "smoothedEle": 11.47734009476084,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472560717026134,
        "lng": 118.40738006928555,
        "ele": 10.613822256468525,
        "distanceKm": 39.133968336173346,
        "gradePct": -0.5201218150518191,
        "smoothedEle": 11.352838958277633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4724,
        "lng": 118.406948,
        "ele": 10.5,
        "distanceKm": 39.18120692713931,
        "gradePct": -0.3616744263963769,
        "smoothedEle": 11.305542998834355,
        "gradeBand": "descent"
      },
      {
        "lat": 24.472239632049515,
        "lng": 118.40649861252606,
        "ele": 10.93930314594018,
        "distanceKm": 39.23005831851226,
        "gradePct": -0.1833322993603464,
        "smoothedEle": 11.363431512974447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.47207886432599,
        "lng": 118.40604939863901,
        "ele": 11.253992726918701,
        "distanceKm": 39.278909658056364,
        "gradePct": 0.007855826855973967,
        "smoothedEle": 11.52590382431312,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.471917909550662,
        "lng": 118.40560026575935,
        "ele": 11.585995151279134,
        "distanceKm": 39.32776103824805,
        "gradePct": 0.203819980382552,
        "smoothedEle": 11.776838773894779,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47175695477533,
        "lng": 118.40515113287967,
        "ele": 11.917997575639568,
        "distanceKm": 39.3766124725172,
        "gradePct": 0.40661785260072447,
        "smoothedEle": 12.123378738351567,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.471596,
        "lng": 118.404702,
        "ele": 12.25,
        "distanceKm": 39.425463960860526,
        "gradePct": 0.5895682414292805,
        "smoothedEle": 12.537123718189898,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47143609538426,
        "lng": 118.40430255436603,
        "ele": 12.826136576078985,
        "distanceKm": 39.469627740343576,
        "gradePct": 0.728661691375763,
        "smoothedEle": 12.952356925133277,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.471279063589506,
        "lng": 118.40390170291069,
        "ele": 13.300757717386016,
        "distanceKm": 39.5137945784272,
        "gradePct": 0.8492861839294384,
        "smoothedEle": 13.403669609022622,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.471122031794753,
        "lng": 118.40350085145533,
        "ele": 13.775378858693047,
        "distanceKm": 39.55796146299337,
        "gradePct": 0.9518293482302508,
        "smoothedEle": 13.894731796826875,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.470965,
        "lng": 118.4031,
        "ele": 14.25,
        "distanceKm": 39.60212839403916,
        "gradePct": 1.0424067333802527,
        "smoothedEle": 14.424297891830685,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47080325822767,
        "lng": 118.4026672744714,
        "ele": 14.78030089288203,
        "distanceKm": 39.64947215351225,
        "gradePct": 1.1341512389576882,
        "smoothedEle": 15.031154132988846,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.470641556748124,
        "lng": 118.40223453097651,
        "ele": 15.34027194065441,
        "distanceKm": 39.696815945284115,
        "gradePct": 1.2064560071025032,
        "smoothedEle": 15.643087825051033,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.470480167561092,
        "lng": 118.4018016482324,
        "ele": 16.130203955490746,
        "distanceKm": 39.74415965281928,
        "gradePct": 1.240788783749844,
        "smoothedEle": 16.22285622480085,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47031877837406,
        "lng": 118.40136876548826,
        "ele": 16.920135970327205,
        "distanceKm": 39.79150341232681,
        "gradePct": 1.3046972588484478,
        "smoothedEle": 16.906297774182356,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.47015738918703,
        "lng": 118.40093588274414,
        "ele": 17.710067985163665,
        "distanceKm": 39.83884722380375,
        "gradePct": 1.4110480419478286,
        "smoothedEle": 17.717058985405792,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.469996,
        "lng": 118.400503,
        "ele": 18.5,
        "distanceKm": 39.88619108725243,
        "gradePct": 1.5756302387558418,
        "smoothedEle": 18.657018605053565,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4698415,
        "lng": 118.4000935,
        "ele": 18.75,
        "distanceKm": 39.93105511783102,
        "gradePct": 1.80394291888918,
        "smoothedEle": 19.6702646586082,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.469687,
        "lng": 118.399684,
        "ele": 19,
        "distanceKm": 39.9759191953925,
        "gradePct": 2.056698619717136,
        "smoothedEle": 20.794725524960203,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.469532812780667,
        "lng": 118.39923548345493,
        "ele": 20.804511294041703,
        "distanceKm": 40.02444237375837,
        "gradePct": 2.321204163767397,
        "smoothedEle": 22.112784730656916,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46937713702212,
        "lng": 118.39878758096536,
        "ele": 22.7169899002387,
        "distanceKm": 40.072966270982775,
        "gradePct": 2.4978239429207267,
        "smoothedEle": 23.390102509731793,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.469221407551302,
        "lng": 118.3983397011832,
        "ele": 24.632405608746755,
        "distanceKm": 40.12149020467916,
        "gradePct": 2.5452073537594653,
        "smoothedEle": 24.544657524604524,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.469064938367534,
        "lng": 118.39789213412213,
        "ele": 26.588270405831267,
        "distanceKm": 40.170014057682984,
        "gradePct": 2.4700341261169645,
        "smoothedEle": 25.586789034297745,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468908469183766,
        "lng": 118.39744456706107,
        "ele": 28.544135202915783,
        "distanceKm": 40.21853796323632,
        "gradePct": 2.2503202261931072,
        "smoothedEle": 26.453040746060935,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468752,
        "lng": 118.396997,
        "ele": 30.5,
        "distanceKm": 40.26706192134155,
        "gradePct": 1.921703981829441,
        "smoothedEle": 27.07808745088007,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468627666666666,
        "lng": 118.39658466666667,
        "ele": 30.08333333333331,
        "distanceKm": 40.311023994267835,
        "gradePct": 1.5326498464927218,
        "smoothedEle": 27.36092926794515,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46850333333333,
        "lng": 118.39617233333333,
        "ele": 29.66666666666669,
        "distanceKm": 40.35498610631487,
        "gradePct": 1.0425441436756337,
        "smoothedEle": 27.349126742761168,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468379,
        "lng": 118.39576,
        "ele": 29.25,
        "distanceKm": 40.39894825747949,
        "gradePct": 0.46993827037799857,
        "smoothedEle": 27.043200668764776,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.468265772569204,
        "lng": 118.39532233243095,
        "ele": 27.707639163821447,
        "distanceKm": 40.44499856875186,
        "gradePct": -0.20659600677430195,
        "smoothedEle": 26.38069302738909,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468152545138405,
        "lng": 118.39488466486192,
        "ele": 26.1652783276429,
        "distanceKm": 40.491048918339594,
        "gradePct": -0.9261958018408329,
        "smoothedEle": 25.380022642211813,
        "gradeBand": "descent"
      },
      {
        "lat": 24.468039550500496,
        "lng": 118.3944469251666,
        "ele": 24.59152530498036,
        "distanceKm": 40.53709925858802,
        "gradePct": -1.574552923241131,
        "smoothedEle": 24.2048229851897,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46792727525025,
        "lng": 118.3940089625833,
        "ele": 22.92076265249018,
        "distanceKm": 40.58314958912046,
        "gradePct": -1.9579008422679451,
        "smoothedEle": 23.23733956851351,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467815,
        "lng": 118.393571,
        "ele": 21.25,
        "distanceKm": 40.62919995769825,
        "gradePct": -2.0631925618877966,
        "smoothedEle": 22.481596281410432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467683905036623,
        "lng": 118.39303199385472,
        "ele": 19.013592772846714,
        "distanceKm": 40.68566633646389,
        "gradePct": -1.829712582696719,
        "smoothedEle": 21.837560547175723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467546,
        "lng": 118.392495,
        "ele": 16.75,
        "distanceKm": 40.74213694453338,
        "gradePct": -1.268119493154069,
        "smoothedEle": 21.562745939649375,
        "gradeBand": "descent"
      },
      {
        "lat": 24.467434089673944,
        "lng": 118.39202437374665,
        "ele": 18.82241344547316,
        "distanceKm": 40.7913673917633,
        "gradePct": -0.8106220426989639,
        "smoothedEle": 21.481231216577214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46732217934789,
        "lng": 118.3915537474933,
        "ele": 20.89482689094632,
        "distanceKm": 40.840597879952966,
        "gradePct": -0.45690195005839895,
        "smoothedEle": 21.437791673110567,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46721020287942,
        "lng": 118.39108314060411,
        "ele": 22.69255270621246,
        "distanceKm": 40.889828372539306,
        "gradePct": -0.19031112626355637,
        "smoothedEle": 21.436683717096194,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46709810143971,
        "lng": 118.39061257030205,
        "ele": 23.97127635310623,
        "distanceKm": 40.939058840229464,
        "gradePct": -0.0338182440225245,
        "smoothedEle": 21.510089067640425,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466986,
        "lng": 118.390142,
        "ele": 25.25,
        "distanceKm": 40.98828934893912,
        "gradePct": 0.0920858872135342,
        "smoothedEle": 21.67049954857253,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466848,
        "lng": 118.38965533333334,
        "ele": 23.833333333333332,
        "distanceKm": 41.039879714080584,
        "gradePct": 0.15486970344446463,
        "smoothedEle": 21.74816476856886,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46671,
        "lng": 118.38916866666666,
        "ele": 22.416666666666668,
        "distanceKm": 41.09147013076224,
        "gradePct": 0.024002374582810064,
        "smoothedEle": 21.487136418587223,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.466572,
        "lng": 118.388682,
        "ele": 21,
        "distanceKm": 41.14306059898107,
        "gradePct": -0.3102078825251012,
        "smoothedEle": 20.90271245377399,
        "gradeBand": "descent"
      },
      {
        "lat": 24.466259767211106,
        "lng": 118.38837833457421,
        "ele": 20.048070765568028,
        "distanceKm": 41.18942840291518,
        "gradePct": -0.7191451235468826,
        "smoothedEle": 20.233924057274635,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465948054657215,
        "lng": 118.38807402656212,
        "ele": 19.03835794383315,
        "distanceKm": 41.235796132910934,
        "gradePct": -1.1351346925904389,
        "smoothedEle": 19.471747874467546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465636369771477,
        "lng": 118.38776968437475,
        "ele": 18.02557196255533,
        "distanceKm": 41.28216391151803,
        "gradePct": -1.4087804373381494,
        "smoothedEle": 18.716661557363203,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465324684885736,
        "lng": 118.38746534218738,
        "ele": 17.012785981277663,
        "distanceKm": 41.328531740773194,
        "gradePct": -1.485635917675092,
        "smoothedEle": 18.096025535196432,
        "gradeBand": "descent"
      },
      {
        "lat": 24.465013,
        "lng": 118.387161,
        "ele": 16,
        "distanceKm": 41.374899620677205,
        "gradePct": -1.3992820450614576,
        "smoothedEle": 17.64491660239443,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46470575,
        "lng": 118.3868705,
        "ele": 16.187500000000007,
        "distanceKm": 41.41997400022041,
        "gradePct": -1.1741907347725935,
        "smoothedEle": 17.38344497031772,
        "gradeBand": "descent"
      },
      {
        "lat": 24.464398499999998,
        "lng": 118.38658,
        "ele": 16.375000000000014,
        "distanceKm": 41.46504842655755,
        "gradePct": -0.872784007546743,
        "smoothedEle": 17.24981443191543,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46409125,
        "lng": 118.3862895,
        "ele": 16.562499999999993,
        "distanceKm": 41.51012289968662,
        "gradePct": -0.5510572384260854,
        "smoothedEle": 17.240314439485942,
        "gradeBand": "descent"
      },
      {
        "lat": 24.463784,
        "lng": 118.385999,
        "ele": 16.75,
        "distanceKm": 41.5551974196093,
        "gradePct": -0.2414005161960199,
        "smoothedEle": 17.35379651198191,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46340306313333,
        "lng": 118.38566341232104,
        "ele": 17.36994330065587,
        "distanceKm": 41.60949191797609,
        "gradePct": 0.09488452016694858,
        "smoothedEle": 17.634019443355548,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.463021712409432,
        "lng": 118.38532839256273,
        "ele": 18.25,
        "distanceKm": 41.66378647350428,
        "gradePct": 0.3629058614188578,
        "smoothedEle": 17.979367421800813,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.462640806175543,
        "lng": 118.3849927645849,
        "ele": 18.738163742551095,
        "distanceKm": 41.718080994979424,
        "gradePct": 0.4996955462178789,
        "smoothedEle": 18.259741267155203,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.46226,
        "lng": 118.384657,
        "ele": 19.25,
        "distanceKm": 41.77237555499461,
        "gradePct": 0.4985897922820471,
        "smoothedEle": 18.439635308768317,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461901263168677,
        "lng": 118.38432399002626,
        "ele": 19.481063489008083,
        "distanceKm": 41.824598468266,
        "gradePct": 0.3914722839865623,
        "smoothedEle": 18.513051299513446,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461542122167746,
        "lng": 118.38399150691406,
        "ele": 19.295939261725223,
        "distanceKm": 41.87682140112598,
        "gradePct": 0.181629068820338,
        "smoothedEle": 18.409937190190174,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.461183,
        "lng": 118.383659,
        "ele": 19,
        "distanceKm": 41.92904434691858,
        "gradePct": -0.10723419145841744,
        "smoothedEle": 18.081597733162635,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4607885,
        "lng": 118.383292,
        "ele": 18.25,
        "distanceKm": 41.98652541657777,
        "gradePct": -0.44410810682056734,
        "smoothedEle": 17.571311246712728,
        "gradeBand": "descent"
      },
      {
        "lat": 24.460394,
        "lng": 118.382925,
        "ele": 17.5,
        "distanceKm": 42.044006561422606,
        "gradePct": -0.7791031295034894,
        "smoothedEle": 16.916523787181355,
        "gradeBand": "descent"
      },
      {
        "lat": 24.46014143662398,
        "lng": 118.38247504292748,
        "ele": 16.357186150442978,
        "distanceKm": 42.097511866566315,
        "gradePct": -1.043338120385058,
        "smoothedEle": 16.19317452696302,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459889,
        "lng": 118.382025,
        "ele": 15,
        "distanceKm": 42.151017250840674,
        "gradePct": -1.215516650902757,
        "smoothedEle": 15.455500630248565,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4596605,
        "lng": 118.381644,
        "ele": 14.37499999999995,
        "distanceKm": 42.197198257041805,
        "gradePct": -1.3159283706077467,
        "smoothedEle": 14.817876514796216,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459432,
        "lng": 118.381263,
        "ele": 13.75,
        "distanceKm": 42.243379321658416,
        "gradePct": -1.370039218477718,
        "smoothedEle": 14.18359045376933,
        "gradeBand": "descent"
      },
      {
        "lat": 24.459093,
        "lng": 118.380682,
        "ele": 12.75,
        "distanceKm": 42.313230057994026,
        "gradePct": -1.436326592104864,
        "smoothedEle": 13.103816058284558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45894382995568,
        "lng": 118.3802216118776,
        "ele": 12.481708553380132,
        "distanceKm": 42.36269286012783,
        "gradePct": -1.4897530145251399,
        "smoothedEle": 12.314788714698837,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45879465991136,
        "lng": 118.3797612237552,
        "ele": 12.213417106760225,
        "distanceKm": 42.412155714251504,
        "gradePct": -1.545071437872821,
        "smoothedEle": 11.52229648217078,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45864540183335,
        "lng": 118.37930087050484,
        "ele": 11.744609896814525,
        "distanceKm": 42.46161857885802,
        "gradePct": -1.5593052376175747,
        "smoothedEle": 10.783031871041493,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458495801375015,
        "lng": 118.37884065287862,
        "ele": 10.495957422610802,
        "distanceKm": 42.51108135484421,
        "gradePct": -1.4853807862009225,
        "smoothedEle": 10.166269807100287,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458346200916676,
        "lng": 118.37838043525241,
        "ele": 9.247304948407262,
        "distanceKm": 42.56054418292976,
        "gradePct": -1.3317422511723183,
        "smoothedEle": 9.68557976870521,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45819660045834,
        "lng": 118.37792021762621,
        "ele": 7.998652474203539,
        "distanceKm": 42.61000706311276,
        "gradePct": -1.1226660729088707,
        "smoothedEle": 9.311389954688973,
        "gradeBand": "descent"
      },
      {
        "lat": 24.458047,
        "lng": 118.37746,
        "ele": 6.75,
        "distanceKm": 42.6594699953959,
        "gradePct": -0.8918603984995286,
        "smoothedEle": 9.031423482618843,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457876847000843,
        "lng": 118.37694777150881,
        "ele": 7.3605933575018145,
        "distanceKm": 42.714660627891135,
        "gradePct": -0.6432922828509156,
        "smoothedEle": 8.844901122395447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.45770942350042,
        "lng": 118.37643438575441,
        "ele": 8.055296678750953,
        "distanceKm": 42.76985827434873,
        "gradePct": -0.39999664859667977,
        "smoothedEle": 8.815124781393955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457542,
        "lng": 118.375921,
        "ele": 8.75,
        "distanceKm": 42.8250559858228,
        "gradePct": -0.07278207486473394,
        "smoothedEle": 9.080646993168335,
        "gradeBand": "descent"
      },
      {
        "lat": 24.457359666620683,
        "lng": 118.37538919431032,
        "ele": 9.532067190706547,
        "distanceKm": 42.88257565772414,
        "gradePct": 0.3660688115668008,
        "smoothedEle": 9.685473168051082,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45717733324136,
        "lng": 118.37485738862064,
        "ele": 10.314134381412996,
        "distanceKm": 42.940095402534936,
        "gradePct": 0.8649390522370394,
        "smoothedEle": 10.561058451226122,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456994,
        "lng": 118.374326,
        "ele": 10.75,
        "distanceKm": 42.99761502660015,
        "gradePct": 1.2617176220445019,
        "smoothedEle": 11.472080674304323,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45685572105922,
        "lng": 118.37390816317766,
        "ele": 11.76527831383402,
        "distanceKm": 43.04261590423736,
        "gradePct": 1.4520099107531725,
        "smoothedEle": 12.169311440328112,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456717261255598,
        "lng": 118.3734903962913,
        "ele": 13.169520529978401,
        "distanceKm": 43.08761704938946,
        "gradePct": 1.5270797128023745,
        "smoothedEle": 12.816374386641769,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4565786306278,
        "lng": 118.37307269814565,
        "ele": 13.959760264989264,
        "distanceKm": 43.13261820346381,
        "gradePct": 1.4808082583751754,
        "smoothedEle": 13.408854479245402,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45644,
        "lng": 118.372655,
        "ele": 14.75,
        "distanceKm": 43.17761940124865,
        "gradePct": 1.4247951369193468,
        "smoothedEle": 14.00497105040183,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.456223,
        "lng": 118.371989,
        "ele": 15.75,
        "distanceKm": 43.249219141009824,
        "gradePct": 1.3077228583956568,
        "smoothedEle": 14.879703848514879,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45607581921931,
        "lng": 118.37148680323033,
        "ele": 15.89057009774498,
        "distanceKm": 43.30262035380209,
        "gradePct": 1.21817735244391,
        "smoothedEle": 15.45026089644888,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455933,
        "lng": 118.370983,
        "ele": 15.75,
        "distanceKm": 43.356030218678775,
        "gradePct": 1.0744179527270095,
        "smoothedEle": 15.867821912765322,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455859,
        "lng": 118.370615,
        "ele": 16.25,
        "distanceKm": 43.39417672618645,
        "gradePct": 0.9442447766025807,
        "smoothedEle": 16.09574115965957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455893,
        "lng": 118.370594,
        "ele": 16.25,
        "distanceKm": 43.39851392896509,
        "gradePct": 0.9303703671504451,
        "smoothedEle": 16.120979873045147,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455912,
        "lng": 118.37057,
        "ele": 16.25,
        "distanceKm": 43.401733366157416,
        "gradePct": 0.9200716119177363,
        "smoothedEle": 16.139714171787247,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455923,
        "lng": 118.370542,
        "ele": 16.25,
        "distanceKm": 43.40482016656687,
        "gradePct": 0.910353214610096,
        "smoothedEle": 16.157988765067874,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455918,
        "lng": 118.370476,
        "ele": 16.5,
        "distanceKm": 43.41152369371082,
        "gradePct": 0.8847237062228172,
        "smoothedEle": 16.18862662494973,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455901,
        "lng": 118.370449,
        "ele": 16.5,
        "distanceKm": 43.41484665336057,
        "gradePct": 0.8719020947836446,
        "smoothedEle": 16.203579943373608,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455876,
        "lng": 118.370429,
        "ele": 16.75,
        "distanceKm": 43.41828552021679,
        "gradePct": 0.8586332563778474,
        "smoothedEle": 16.219054844226605,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455847,
        "lng": 118.37042,
        "ele": 16.75,
        "distanceKm": 43.4216363825347,
        "gradePct": 0.8457039827318016,
        "smoothedEle": 16.234133724657195,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455815,
        "lng": 118.370419,
        "ele": 17,
        "distanceKm": 43.42519606445854,
        "gradePct": 0.8319689804190468,
        "smoothedEle": 16.25015229331447,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455789,
        "lng": 118.370434,
        "ele": 16.75,
        "distanceKm": 43.42846156229013,
        "gradePct": 0.8193690849146654,
        "smoothedEle": 16.264847033556634,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455767,
        "lng": 118.370456,
        "ele": 16.75,
        "distanceKm": 43.43176958887664,
        "gradePct": 0.8066050925725189,
        "smoothedEle": 16.279733153195927,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455747,
        "lng": 118.370516,
        "ele": 16.75,
        "distanceKm": 43.438237093584306,
        "gradePct": 0.781650280873579,
        "smoothedEle": 16.30883692438042,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455752,
        "lng": 118.370547,
        "ele": 16.75,
        "distanceKm": 43.44142375161682,
        "gradePct": 0.7693545880608635,
        "smoothedEle": 16.32317688552672,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455765,
        "lng": 118.370576,
        "ele": 16.5,
        "distanceKm": 43.44469572724997,
        "gradePct": 0.7567296980144559,
        "smoothedEle": 16.337900775875916,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4555035,
        "lng": 118.3709495,
        "ele": 16.625,
        "distanceKm": 43.49238995311528,
        "gradePct": 0.5978312639960977,
        "smoothedEle": 16.536618281171076,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.455242,
        "lng": 118.371323,
        "ele": 16.75,
        "distanceKm": 43.540084241182804,
        "gradePct": 0.499049034705628,
        "smoothedEle": 16.74125352618103,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.454884104428384,
        "lng": 118.37110679059299,
        "ele": 16.75,
        "distanceKm": 43.585500915723586,
        "gradePct": 0.4648770515572368,
        "smoothedEle": 16.97365869067119,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45452605933026,
        "lng": 118.37089088102687,
        "ele": 16.869321412313717,
        "distanceKm": 43.63091757797664,
        "gradePct": 0.48908716696149684,
        "smoothedEle": 17.254073438068914,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.454168,
        "lng": 118.370675,
        "ele": 17,
        "distanceKm": 43.676334267460994,
        "gradePct": 0.526265271290629,
        "smoothedEle": 17.5222529733399,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.453873444444444,
        "lng": 118.37032777777779,
        "ele": 17.500000000000018,
        "distanceKm": 43.72437593302284,
        "gradePct": 0.5801951819665294,
        "smoothedEle": 17.834246438149727,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.453578888888888,
        "lng": 118.36998055555556,
        "ele": 18.000000000000036,
        "distanceKm": 43.77241765869667,
        "gradePct": 0.6420425405213679,
        "smoothedEle": 18.190794429161834,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.453284333333333,
        "lng": 118.36963333333334,
        "ele": 18.499999999999975,
        "distanceKm": 43.82045944447976,
        "gradePct": 0.6977084698903838,
        "smoothedEle": 18.584919035146445,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.452989777777777,
        "lng": 118.36928611111111,
        "ele": 18.999999999999993,
        "distanceKm": 43.8685012903736,
        "gradePct": 0.7743146318980735,
        "smoothedEle": 19.024629545032433,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45269522222222,
        "lng": 118.36893888888889,
        "ele": 19.500000000000007,
        "distanceKm": 43.91654319637548,
        "gradePct": 0.876752810174942,
        "smoothedEle": 19.536884491420626,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.452400666666666,
        "lng": 118.36859166666666,
        "ele": 20.000000000000025,
        "distanceKm": 43.96458516248688,
        "gradePct": 0.9966717451849547,
        "smoothedEle": 20.126008017888097,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.45210611111111,
        "lng": 118.36824444444444,
        "ele": 20.499999999999968,
        "distanceKm": 44.01262718870508,
        "gradePct": 1.1233516430349848,
        "smoothedEle": 20.767368158494357,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.451811555555555,
        "lng": 118.36789722222221,
        "ele": 20.999999999999982,
        "distanceKm": 44.060669275031586,
        "gradePct": 1.2540096237941754,
        "smoothedEle": 21.460965047015303,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.451517,
        "lng": 118.36755,
        "ele": 21.5,
        "distanceKm": 44.10871142146367,
        "gradePct": 1.3767109750299653,
        "smoothedEle": 22.206798817169876,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.451211999999998,
        "lng": 118.3672098,
        "ele": 22.550000000000033,
        "distanceKm": 44.1570438115963,
        "gradePct": 1.4809954695329837,
        "smoothedEle": 22.995521741915,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.450907,
        "lng": 118.3668696,
        "ele": 23.600000000000062,
        "distanceKm": 44.20537626111469,
        "gradePct": 1.5803806843085446,
        "smoothedEle": 23.83132978103539,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.450602,
        "lng": 118.36652939999999,
        "ele": 24.649999999999938,
        "distanceKm": 44.25370877001977,
        "gradePct": 1.6803037238923537,
        "smoothedEle": 24.721081758700024,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.450297000000003,
        "lng": 118.3661892,
        "ele": 25.699999999999967,
        "distanceKm": 44.30204133830833,
        "gradePct": 1.7807645861361896,
        "smoothedEle": 25.664777802024552,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.449992,
        "lng": 118.365849,
        "ele": 26.75,
        "distanceKm": 44.35037396598131,
        "gradePct": 1.8878698323015666,
        "smoothedEle": 26.662418038196865,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.449715681906607,
        "lng": 118.36549032287633,
        "ele": 27.57236055438079,
        "distanceKm": 44.39793661376864,
        "gradePct": 2.029312918459883,
        "smoothedEle": 27.761302567633784,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.449439261429955,
        "lng": 118.36513174215725,
        "ele": 28.61677041578563,
        "distanceKm": 44.445499229995306,
        "gradePct": 2.1989040666339688,
        "smoothedEle": 28.96776066987796,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.449162840953303,
        "lng": 118.36477316143817,
        "ele": 29.661180277190315,
        "distanceKm": 44.493061906980735,
        "gradePct": 2.3961702952960273,
        "smoothedEle": 30.281794504083262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44888642047665,
        "lng": 118.36441458071909,
        "ele": 30.705590138595156,
        "distanceKm": 44.540624644724346,
        "gradePct": 2.6211116717309437,
        "smoothedEle": 31.7034043368383,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44861,
        "lng": 118.364056,
        "ele": 31.75,
        "distanceKm": 44.58818744322554,
        "gradePct": 2.8482660559788475,
        "smoothedEle": 33.232590434726134,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44833775,
        "lng": 118.36369575,
        "ele": 33.90624999999996,
        "distanceKm": 44.635581833472166,
        "gradePct": 3.075928791448754,
        "smoothedEle": 34.8680567463291,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4480655,
        "lng": 118.3633355,
        "ele": 36.062499999999915,
        "distanceKm": 44.68297628433193,
        "gradePct": 3.311041840300926,
        "smoothedEle": 36.62523849828525,
        "gradeBand": "hard"
      },
      {
        "lat": 24.44779325,
        "lng": 118.36297525,
        "ele": 38.21874999999987,
        "distanceKm": 44.73037079580374,
        "gradePct": 3.5456185456259095,
        "smoothedEle": 38.48816259317338,
        "gradeBand": "hard"
      },
      {
        "lat": 24.447521,
        "lng": 118.362615,
        "ele": 40.37500000000016,
        "distanceKm": 44.77776536788754,
        "gradePct": 3.7135511057253234,
        "smoothedEle": 40.32461369329278,
        "gradeBand": "hard"
      },
      {
        "lat": 24.44724875,
        "lng": 118.36225475,
        "ele": 42.53125000000013,
        "distanceKm": 44.82516000058223,
        "gradePct": 3.795093176288464,
        "smoothedEle": 42.098610735076626,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4469765,
        "lng": 118.3618945,
        "ele": 44.687500000000085,
        "distanceKm": 44.87255469388749,
        "gradePct": 3.775297190696911,
        "smoothedEle": 43.7894452705153,
        "gradeBand": "hard"
      },
      {
        "lat": 24.44670425,
        "lng": 118.36153425,
        "ele": 46.84375000000004,
        "distanceKm": 44.919949447802985,
        "gradePct": 3.654797208280248,
        "smoothedEle": 45.38812771535084,
        "gradeBand": "hard"
      },
      {
        "lat": 24.446432,
        "lng": 118.361174,
        "ele": 49,
        "distanceKm": 44.967344262327636,
        "gradePct": 3.5193214720384844,
        "smoothedEle": 46.95945827125919,
        "gradeBand": "hard"
      },
      {
        "lat": 24.446193666666666,
        "lng": 118.36084733333334,
        "ele": 49.333333333333336,
        "distanceKm": 45.009720841527496,
        "gradePct": 3.414961347752745,
        "smoothedEle": 48.35064051458118,
        "gradeBand": "hard"
      },
      {
        "lat": 24.445955333333334,
        "lng": 118.36052066666667,
        "ele": 49.666666666666664,
        "distanceKm": 45.052097469519964,
        "gradePct": 3.283812440802513,
        "smoothedEle": 49.62724621936394,
        "gradeBand": "hard"
      },
      {
        "lat": 24.445717,
        "lng": 118.360194,
        "ele": 50,
        "distanceKm": 45.094474146305124,
        "gradePct": 3.118784192408027,
        "smoothedEle": 50.76638332993633,
        "gradeBand": "hard"
      },
      {
        "lat": 24.445677,
        "lng": 118.359696,
        "ele": 51.25,
        "distanceKm": 45.14508096602415,
        "gradePct": 2.8807140205312702,
        "smoothedEle": 51.9827676360959,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445646,
        "lng": 118.35920949999999,
        "ele": 53.125,
        "distanceKm": 45.19444834530075,
        "gradePct": 2.5430540002848145,
        "smoothedEle": 52.93536718699671,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445615,
        "lng": 118.358723,
        "ele": 55,
        "distanceKm": 45.24381573665872,
        "gradePct": 2.1254114002873745,
        "smoothedEle": 53.62857990490022,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445561,
        "lng": 118.35824966666667,
        "ele": 55.58333333333331,
        "distanceKm": 45.292104606589774,
        "gradePct": 1.7633362143476672,
        "smoothedEle": 54.229359621286676,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445507,
        "lng": 118.35777633333333,
        "ele": 56.16666666666669,
        "distanceKm": 45.34039349688944,
        "gradePct": 1.4440970549320449,
        "smoothedEle": 54.75829385015603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445453,
        "lng": 118.357303,
        "ele": 56.75,
        "distanceKm": 45.38868240755758,
        "gradePct": 1.1796800758236092,
        "smoothedEle": 55.18346703305042,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445342500000002,
        "lng": 118.3567495,
        "ele": 56.25000000000003,
        "distanceKm": 45.44604305520923,
        "gradePct": 0.8913490008886009,
        "smoothedEle": 55.43898880173439,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445232,
        "lng": 118.356196,
        "ele": 55.75,
        "distanceKm": 45.503403750842345,
        "gradePct": 0.5088516250108553,
        "smoothedEle": 55.3708284852007,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44513866666667,
        "lng": 118.35578366666667,
        "ele": 55.416666666666664,
        "distanceKm": 45.546414021283006,
        "gradePct": 0.17817916598255326,
        "smoothedEle": 55.167661568410594,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445045333333333,
        "lng": 118.35537133333332,
        "ele": 55.083333333333336,
        "distanceKm": 45.58942432171922,
        "gradePct": -0.15371701911582172,
        "smoothedEle": 54.8793379648035,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444952,
        "lng": 118.354959,
        "ele": 54.75,
        "distanceKm": 45.63243465214791,
        "gradePct": -0.43148686008410403,
        "smoothedEle": 54.51539437099972,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444810789856017,
        "lng": 118.35444333275616,
        "ele": 54.09725665338618,
        "distanceKm": 45.68694483196279,
        "gradePct": -0.6388267668018679,
        "smoothedEle": 54.11273268373828,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444669579712034,
        "lng": 118.35392766551234,
        "ele": 53.44451330677236,
        "distanceKm": 45.74145506777743,
        "gradePct": -0.6661232487752903,
        "smoothedEle": 53.85883959909271,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444528369568047,
        "lng": 118.35341199826851,
        "ele": 52.791769960158625,
        "distanceKm": 45.7959653595944,
        "gradePct": -0.6180485713682257,
        "smoothedEle": 53.58789205334635,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444387159424064,
        "lng": 118.3528963310247,
        "ele": 52.13902661354481,
        "distanceKm": 45.85047570741041,
        "gradePct": -0.560029775561719,
        "smoothedEle": 53.26206720313669,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444248,
        "lng": 118.35238,
        "ele": 52.5,
        "distanceKm": 45.90498528969726,
        "gradePct": -0.5829581458206039,
        "smoothedEle": 52.86278910081553,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444158,
        "lng": 118.352033,
        "ele": 54,
        "distanceKm": 45.94150921383787,
        "gradePct": -0.6323474096843656,
        "smoothedEle": 52.59387564261796,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444047235424843,
        "lng": 118.35160532566815,
        "ele": 53.53848093684522,
        "distanceKm": 45.9865197905711,
        "gradePct": -0.7439747466134393,
        "smoothedEle": 52.146892478377715,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443936340079283,
        "lng": 118.35117769262507,
        "ele": 52.944493914733656,
        "distanceKm": 46.03153036532055,
        "gradePct": -0.8753400661786852,
        "smoothedEle": 51.62462911556381,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44382522671952,
        "lng": 118.35075012841672,
        "ele": 52.129662609822354,
        "distanceKm": 46.076540923680085,
        "gradePct": -1.0220278890104306,
        "smoothedEle": 51.02708590978202,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44371411335976,
        "lng": 118.35032256420835,
        "ele": 51.31483130491117,
        "distanceKm": 46.121551518727905,
        "gradePct": -1.17903257234292,
        "smoothedEle": 50.38275234320074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443603,
        "lng": 118.349895,
        "ele": 50.5,
        "distanceKm": 46.16656215046109,
        "gradePct": -1.3207804221785393,
        "smoothedEle": 49.70352347635164,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443467,
        "lng": 118.34935366666667,
        "ele": 48.666666666666664,
        "distanceKm": 46.223408943762415,
        "gradePct": -1.5155819065819995,
        "smoothedEle": 48.687699178714226,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443331,
        "lng": 118.34881233333333,
        "ele": 46.833333333333336,
        "distanceKm": 46.280255794057055,
        "gradePct": -1.6375302157260467,
        "smoothedEle": 47.69884653953035,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443195,
        "lng": 118.348271,
        "ele": 45,
        "distanceKm": 46.337102701342154,
        "gradePct": -1.6943813451163345,
        "smoothedEle": 46.75931593836983,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443078333333332,
        "lng": 118.34780566666666,
        "ele": 44.91666666666667,
        "distanceKm": 46.385961599647274,
        "gradePct": -1.673587638902345,
        "smoothedEle": 46.00968956224268,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442961666666665,
        "lng": 118.34734033333334,
        "ele": 44.83333333333333,
        "distanceKm": 46.43482053998281,
        "gradePct": -1.5910107013207824,
        "smoothedEle": 45.307172722910536,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442845,
        "lng": 118.346875,
        "ele": 44.75,
        "distanceKm": 46.483679522351345,
        "gradePct": -1.4802783846665373,
        "smoothedEle": 44.68170450186576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442695,
        "lng": 118.346332,
        "ele": 44.333333333333314,
        "distanceKm": 46.54112184513232,
        "gradePct": -1.3432846403737693,
        "smoothedEle": 44.01108222598206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442545,
        "lng": 118.345789,
        "ele": 43.916666666666686,
        "distanceKm": 46.598564230504124,
        "gradePct": -1.1993079016426946,
        "smoothedEle": 43.42986720113957,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442395,
        "lng": 118.345246,
        "ele": 43.5,
        "distanceKm": 46.65600667846342,
        "gradePct": -1.1080149050032218,
        "smoothedEle": 42.81992857924639,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442268769684986,
        "lng": 118.34475848317396,
        "ele": 42.661438675002834,
        "distanceKm": 46.70731503908293,
        "gradePct": -1.0795002241844631,
        "smoothedEle": 42.24676632579282,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442143513123327,
        "lng": 118.34427065544931,
        "ele": 41.6909591166686,
        "distanceKm": 46.758624221865105,
        "gradePct": -1.0940132253559,
        "smoothedEle": 41.645962775707204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442018256561663,
        "lng": 118.34378282772465,
        "ele": 40.72047955833437,
        "distanceKm": 46.80993345187245,
        "gradePct": -1.1313592020088965,
        "smoothedEle": 41.04642749328195,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441893,
        "lng": 118.343295,
        "ele": 39.75,
        "distanceKm": 46.86124272910464,
        "gradePct": -1.1878599930614735,
        "smoothedEle": 40.38571702277346,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441783,
        "lng": 118.34287675,
        "ele": 39.43750000000003,
        "distanceKm": 46.905313540946395,
        "gradePct": -1.264879137796157,
        "smoothedEle": 39.73936665157399,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441673,
        "lng": 118.34245849999999,
        "ele": 39.125,
        "distanceKm": 46.94938438828255,
        "gradePct": -1.360100351703226,
        "smoothedEle": 39.033955664901214,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441563,
        "lng": 118.34204025,
        "ele": 38.81249999999997,
        "distanceKm": 46.993455271110314,
        "gradePct": -1.4733326231120718,
        "smoothedEle": 38.292305591708825,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441453,
        "lng": 118.341622,
        "ele": 38.5,
        "distanceKm": 47.037526189430686,
        "gradePct": -1.5844441363940995,
        "smoothedEle": 37.522227050879295,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441349429097553,
        "lng": 118.34122451167168,
        "ele": 37.800196605083194,
        "distanceKm": 47.079379718110594,
        "gradePct": -1.6770095632344681,
        "smoothedEle": 36.76569758710819,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441246682693343,
        "lng": 118.34082676578683,
        "ele": 36.666848787979205,
        "distanceKm": 47.12123322602848,
        "gradePct": -1.7166699810974753,
        "smoothedEle": 36.05121151245232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441144,
        "lng": 118.340429,
        "ele": 35.5,
        "distanceKm": 47.163086770492754,
        "gradePct": -1.7232492315457013,
        "smoothedEle": 35.35686566115875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44102176746523,
        "lng": 118.33995533630862,
        "ele": 34.18162995882448,
        "distanceKm": 47.21292514636284,
        "gradePct": -1.702310480241089,
        "smoothedEle": 34.54747540264633,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44089989848826,
        "lng": 118.33948155885166,
        "ele": 32.882638925270356,
        "distanceKm": 47.262763639942655,
        "gradePct": -1.6613215865778925,
        "smoothedEle": 33.74340071933823,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440778180781255,
        "lng": 118.3390077349723,
        "ele": 31.678148311508608,
        "distanceKm": 47.312602129964766,
        "gradePct": -1.6358228321054733,
        "smoothedEle": 32.92690828746151,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440656099114253,
        "lng": 118.33853402465638,
        "ele": 31.281177287232435,
        "distanceKm": 47.36244060867261,
        "gradePct": -1.6423104204960892,
        "smoothedEle": 32.08296457603973,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440533637779083,
        "lng": 118.3380604331869,
        "ele": 31.201965490684515,
        "distanceKm": 47.41227907442224,
        "gradePct": -1.681986901308922,
        "smoothedEle": 31.19399400323975,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44041184533621,
        "lng": 118.33758663405231,
        "ele": 30.993349803116594,
        "distanceKm": 47.462117545295435,
        "gradePct": -1.7395005739957412,
        "smoothedEle": 30.27482340865673,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440289835098593,
        "lng": 118.33711290294454,
        "ele": 30.616774995655543,
        "distanceKm": 47.511956020568725,
        "gradePct": -1.7928201094076723,
        "smoothedEle": 29.35185312914454,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440168383371923,
        "lng": 118.33663899925806,
        "ele": 29.940067222688963,
        "distanceKm": 47.56179448702612,
        "gradePct": -1.826813016821945,
        "smoothedEle": 28.44027969297876,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44004628481053,
        "lng": 118.33616529688832,
        "ele": 28.230294224803604,
        "distanceKm": 47.61163292664867,
        "gradePct": -1.8451996149277865,
        "smoothedEle": 27.515120135325883,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43992408342514,
        "lng": 118.33569162659019,
        "ele": 26.384123374422337,
        "distanceKm": 47.661471403192095,
        "gradePct": -1.8813874931618064,
        "smoothedEle": 26.523965216947914,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439802386334044,
        "lng": 118.33521780004615,
        "ele": 24.943921112932554,
        "distanceKm": 47.711309887656554,
        "gradePct": -1.942940434119255,
        "smoothedEle": 25.477938146123783,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439680507124294,
        "lng": 118.3347440305457,
        "ele": 23.684048800225828,
        "distanceKm": 47.76114836193535,
        "gradePct": -2.034084888073385,
        "smoothedEle": 24.383927906249685,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439558803511673,
        "lng": 118.33427020693027,
        "ele": 22.658456559029947,
        "distanceKm": 47.810986847161054,
        "gradePct": -2.1490384018228332,
        "smoothedEle": 23.229036616732788,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439437013125357,
        "lng": 118.33379641073691,
        "ele": 21.779063455466247,
        "distanceKm": 47.860825326263125,
        "gradePct": -2.232827304572917,
        "smoothedEle": 22.071159361821298,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439315045339065,
        "lng": 118.33332267000598,
        "ele": 20.84943093797243,
        "distanceKm": 47.91066381098426,
        "gradePct": -2.2607347978347185,
        "smoothedEle": 20.9700286274974,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439193083062293,
        "lng": 118.3328489280855,
        "ele": 20.379534225482743,
        "distanceKm": 47.960502289517976,
        "gradePct": -2.242512092282359,
        "smoothedEle": 19.9130857336854,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439070970027718,
        "lng": 118.33237523470247,
        "ele": 19.32582910351031,
        "distanceKm": 48.01034064917746,
        "gradePct": -2.1628281266182365,
        "smoothedEle": 18.918354502842224,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438949227520787,
        "lng": 118.33190142602685,
        "ele": 18.119371827632687,
        "distanceKm": 48.06017907657585,
        "gradePct": -2.059012272263474,
        "smoothedEle": 17.968148875254627,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43882748501386,
        "lng": 118.33142761735122,
        "ele": 16.912914551755243,
        "distanceKm": 48.110017548547546,
        "gradePct": -1.943319159682141,
        "smoothedEle": 17.097668820722085,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43870574250693,
        "lng": 118.33095380867562,
        "ele": 15.706457275877622,
        "distanceKm": 48.15985606509117,
        "gradePct": -1.804762225530401,
        "smoothedEle": 16.317266001063366,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438584,
        "lng": 118.33048,
        "ele": 14.5,
        "distanceKm": 48.20969462620917,
        "gradePct": -1.6370971832195786,
        "smoothedEle": 15.65705420488342,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438635,
        "lng": 118.330474,
        "ele": 14.5,
        "distanceKm": 48.21539801053529,
        "gradePct": -1.6197069116156124,
        "smoothedEle": 15.5825184312816,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438682,
        "lng": 118.330451,
        "ele": 14.5,
        "distanceKm": 48.221119377935416,
        "gradePct": -1.603095910969753,
        "smoothedEle": 15.506658429290187,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438719,
        "lng": 118.330412,
        "ele": 14.5,
        "distanceKm": 48.22682148493357,
        "gradePct": -1.586540829569627,
        "smoothedEle": 15.43105380228689,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438743,
        "lng": 118.330363,
        "ele": 14.5,
        "distanceKm": 48.23245418779213,
        "gradePct": -1.5701872510842978,
        "smoothedEle": 15.35636940952135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438751,
        "lng": 118.330309,
        "ele": 14.5,
        "distanceKm": 48.23799264564031,
        "gradePct": -1.5513980350564254,
        "smoothedEle": 15.288353141057527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438743,
        "lng": 118.330256,
        "ele": 14.25,
        "distanceKm": 48.24343120962835,
        "gradePct": -1.52987746247191,
        "smoothedEle": 15.227704134325933,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438721,
        "lng": 118.330208,
        "ele": 14.25,
        "distanceKm": 48.248871408530086,
        "gradePct": -1.5083504204813059,
        "smoothedEle": 15.167036895595542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438686,
        "lng": 118.33017,
        "ele": 14,
        "distanceKm": 48.25434356170407,
        "gradePct": -1.486696934407899,
        "smoothedEle": 15.106013313742821,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438593,
        "lng": 118.330138,
        "ele": 13.75,
        "distanceKm": 48.26518022205462,
        "gradePct": -1.4512728751528774,
        "smoothedEle": 14.978252987256953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438545,
        "lng": 118.330148,
        "ele": 13.75,
        "distanceKm": 48.27061274051038,
        "gradePct": -1.4359322544557385,
        "smoothedEle": 14.914049719264447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43845,
        "lng": 118.329754,
        "ele": 13.5,
        "distanceKm": 48.31187355242506,
        "gradePct": -1.291628626230538,
        "smoothedEle": 14.485349092895333,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438098,
        "lng": 118.329246,
        "ele": 13.5,
        "distanceKm": 48.37650059172684,
        "gradePct": -1.0890321444123976,
        "smoothedEle": 13.918711541972991,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437648,
        "lng": 118.328806,
        "ele": 14,
        "distanceKm": 48.44349180221527,
        "gradePct": -0.8663970912721207,
        "smoothedEle": 13.494234243962461,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437371,
        "lng": 118.328608,
        "ele": 13.75,
        "distanceKm": 48.480240608524454,
        "gradePct": -0.7425756852764228,
        "smoothedEle": 13.328864615571133,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436989333333333,
        "lng": 118.32836333333333,
        "ele": 13.416666666666684,
        "distanceKm": 48.529379053131855,
        "gradePct": -0.5292016264238026,
        "smoothedEle": 13.273460949584967,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436607666666667,
        "lng": 118.32811866666667,
        "ele": 13.083333333333316,
        "distanceKm": 48.57851753552867,
        "gradePct": -0.35468536751202195,
        "smoothedEle": 13.19656081911178,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436226,
        "lng": 118.327874,
        "ele": 12.75,
        "distanceKm": 48.62765605571587,
        "gradePct": -0.2881604111671003,
        "smoothedEle": 13.018253672790129,
        "gradeBand": "descent"
      },
      {
        "lat": 24.435671,
        "lng": 118.327478,
        "ele": 12.25,
        "distanceKm": 48.701247161912676,
        "gradePct": -0.4041276229963038,
        "smoothedEle": 12.496924450840444,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43523,
        "lng": 118.32717,
        "ele": 13.5,
        "distanceKm": 48.75935781845924,
        "gradePct": -0.6525156722102233,
        "smoothedEle": 11.921513810197856,
        "gradeBand": "descent"
      },
      {
        "lat": 24.434726,
        "lng": 118.326801,
        "ele": 12.5,
        "distanceKm": 48.826709168792846,
        "gradePct": -0.8293083289969025,
        "smoothedEle": 11.363072948652075,
        "gradeBand": "descent"
      },
      {
        "lat": 24.434341,
        "lng": 118.326575,
        "ele": 11,
        "distanceKm": 48.87524953867406,
        "gradePct": -0.8106177114862154,
        "smoothedEle": 11.059859662010691,
        "gradeBand": "descent"
      },
      {
        "lat": 24.434051,
        "lng": 118.326397,
        "ele": 10.25,
        "distanceKm": 48.91218952886866,
        "gradePct": -0.7548123599813453,
        "smoothedEle": 10.878948616736709,
        "gradeBand": "descent"
      },
      {
        "lat": 24.433642,
        "lng": 118.325997,
        "ele": 8.75,
        "distanceKm": 48.973083939081995,
        "gradePct": -0.55562673251751,
        "smoothedEle": 10.696450798831792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.433376,
        "lng": 118.3257215,
        "ele": 9,
        "distanceKm": 49.013737878646026,
        "gradePct": -0.5043534522111788,
        "smoothedEle": 10.461916945719762,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43311,
        "lng": 118.325446,
        "ele": 9.25,
        "distanceKm": 49.054391858569055,
        "gradePct": -0.5095941961864455,
        "smoothedEle": 10.170961289096455,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4327835,
        "lng": 118.32503700000001,
        "ele": 9.875,
        "distanceKm": 49.10946019945094,
        "gradePct": -0.5391984483757065,
        "smoothedEle": 9.813918421905216,
        "gradeBand": "descent"
      },
      {
        "lat": 24.432457,
        "lng": 118.324628,
        "ele": 10.5,
        "distanceKm": 49.16452862093446,
        "gradePct": -0.5536839171611164,
        "smoothedEle": 9.614722869517864,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43222,
        "lng": 118.324193,
        "ele": 11,
        "distanceKm": 49.21584986165477,
        "gradePct": -0.40769962595547365,
        "smoothedEle": 9.631402484812089,
        "gradeBand": "descent"
      },
      {
        "lat": 24.432034,
        "lng": 118.323782,
        "ele": 10,
        "distanceKm": 49.26231536258548,
        "gradePct": -0.15237633433747316,
        "smoothedEle": 9.814835534780638,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431878,
        "lng": 118.323368,
        "ele": 9.25,
        "distanceKm": 49.307675651821775,
        "gradePct": 0.1017986054374006,
        "smoothedEle": 10.029085983220124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431745,
        "lng": 118.32285,
        "ele": 8.75,
        "distanceKm": 49.36216236985723,
        "gradePct": 0.22023739340787116,
        "smoothedEle": 10.063756948169459,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431703,
        "lng": 118.322506,
        "ele": 9,
        "distanceKm": 49.39730001783637,
        "gradePct": 0.1679242130058463,
        "smoothedEle": 9.961222134934578,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.431638252461,
        "lng": 118.32203061675314,
        "ele": 9.851941302612135,
        "distanceKm": 49.445962469450386,
        "gradePct": -0.038789805311420074,
        "smoothedEle": 9.67269918843996,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431575,
        "lng": 118.321555,
        "ele": 10.75,
        "distanceKm": 49.494624018538644,
        "gradePct": -0.3704789457526552,
        "smoothedEle": 9.2264812563251,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431618,
        "lng": 118.321536,
        "ele": 11,
        "distanceKm": 49.49977781584844,
        "gradePct": -0.4058425101009253,
        "smoothedEle": 9.180097080536944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431679,
        "lng": 118.321461,
        "ele": 11.5,
        "distanceKm": 49.50995913587748,
        "gradePct": -0.47103690426760675,
        "smoothedEle": 9.088465200275577,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431691,
        "lng": 118.321411,
        "ele": 11.5,
        "distanceKm": 49.51519395780016,
        "gradePct": -0.4962591127350838,
        "smoothedEle": 9.04135180297148,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431689,
        "lng": 118.32136,
        "ele": 11.75,
        "distanceKm": 49.520361889201794,
        "gradePct": -0.521159031984111,
        "smoothedEle": 8.994840420356748,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431673,
        "lng": 118.321312,
        "ele": 11.75,
        "distanceKm": 49.52553676445037,
        "gradePct": -0.5492641260495132,
        "smoothedEle": 8.941923106614961,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431644,
        "lng": 118.321272,
        "ele": 11.75,
        "distanceKm": 49.530713353522415,
        "gradePct": -0.5780882011419537,
        "smoothedEle": 8.887568921358508,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431603,
        "lng": 118.321242,
        "ele": 11.75,
        "distanceKm": 49.536191374744405,
        "gradePct": -0.6076937979539373,
        "smoothedEle": 8.831843499838776,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431554,
        "lng": 118.321228,
        "ele": 11.5,
        "distanceKm": 49.541821262200614,
        "gradePct": -0.634819495287364,
        "smoothedEle": 8.781174512732896,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431505,
        "lng": 118.321232,
        "ele": 11.25,
        "distanceKm": 49.5472848490587,
        "gradePct": -0.6611439297667502,
        "smoothedEle": 8.732002231010135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431459,
        "lng": 118.321254,
        "ele": 11,
        "distanceKm": 49.552863698783504,
        "gradePct": -0.6880237191552334,
        "smoothedEle": 8.681792583486882,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431422,
        "lng": 118.321292,
        "ele": 10.75,
        "distanceKm": 49.55849633856313,
        "gradePct": -0.7151626776226672,
        "smoothedEle": 8.63109882547024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431383,
        "lng": 118.321378,
        "ele": 10.5,
        "distanceKm": 49.568223068819506,
        "gradePct": -0.7508112432150122,
        "smoothedEle": 8.544448797732011,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430994,
        "lng": 118.321334,
        "ele": 9,
        "distanceKm": 49.6117067175516,
        "gradePct": -0.823545707833526,
        "smoothedEle": 8.228712428301199,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4306085,
        "lng": 118.32137049999999,
        "ele": 8.000000000000085,
        "distanceKm": 49.65473139840435,
        "gradePct": -0.7956003575164827,
        "smoothedEle": 8.001088921758658,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430223,
        "lng": 118.321407,
        "ele": 7,
        "distanceKm": 49.69775608022763,
        "gradePct": -0.6862769083904272,
        "smoothedEle": 7.825738884343405,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429788,
        "lng": 118.321423,
        "ele": 5.5,
        "distanceKm": 49.74615305535245,
        "gradePct": -0.5324602118226394,
        "smoothedEle": 7.677267950721092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429336,
        "lng": 118.321445,
        "ele": 4.75,
        "distanceKm": 49.796462558208844,
        "gradePct": -0.3924454210868207,
        "smoothedEle": 7.554509986624044,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428961347097264,
        "lng": 118.32141866841272,
        "ele": 5.251360639918458,
        "distanceKm": 49.83820732398001,
        "gradePct": -0.20607395829508654,
        "smoothedEle": 7.676362171073512,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428587,
        "lng": 118.321385,
        "ele": 6.25,
        "distanceKm": 49.87997220712719,
        "gradePct": 0.06639895333491935,
        "smoothedEle": 8.03101618380363,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428129,
        "lng": 118.321388,
        "ele": 7.5,
        "distanceKm": 49.93090045954167,
        "gradePct": 0.5014723253375788,
        "smoothedEle": 8.727004103021116,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427713,
        "lng": 118.321455,
        "ele": 9,
        "distanceKm": 49.97765230928428,
        "gradePct": 0.998455276482371,
        "smoothedEle": 9.597318585306533,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427264,
        "lng": 118.321331,
        "ele": 10.5,
        "distanceKm": 50.029133043833376,
        "gradePct": 1.5880340621829552,
        "smoothedEle": 10.825942642730258,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426739059053862,
        "lng": 118.32115728436197,
        "ele": 12.890725729947071,
        "distanceKm": 50.090095895382845,
        "gradePct": 2.086369129583854,
        "smoothedEle": 12.342105248070995,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426214,
        "lng": 118.320984,
        "ele": 14.75,
        "distanceKm": 50.15105876312032,
        "gradePct": 2.301720905786276,
        "smoothedEle": 13.705705153305985,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42621,
        "lng": 118.320435,
        "ele": 16.125,
        "distanceKm": 50.206642684783205,
        "gradePct": 2.2191297731693864,
        "smoothedEle": 14.727453900002057,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426206,
        "lng": 118.319886,
        "ele": 17.5,
        "distanceKm": 50.26222660820983,
        "gradePct": 1.895247355340296,
        "smoothedEle": 15.439483249554643,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426055129498977,
        "lng": 118.31945771330393,
        "ele": 17.385700514410335,
        "distanceKm": 50.30871961336728,
        "gradePct": 1.625452715620362,
        "smoothedEle": 16.00958065085668,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42586806474949,
        "lng": 118.31904385665196,
        "ele": 17.192850257205183,
        "distanceKm": 50.35549862548421,
        "gradePct": 1.3190180967388159,
        "smoothedEle": 16.425355304023288,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.425681,
        "lng": 118.31863,
        "ele": 17,
        "distanceKm": 50.40227769324929,
        "gradePct": 1.0610986683154238,
        "smoothedEle": 16.76941356185767,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.425519,
        "lng": 118.318265,
        "ele": 16.25,
        "distanceKm": 50.443388101892374,
        "gradePct": 0.9031488722971744,
        "smoothedEle": 17.004459968700555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42539,
        "lng": 118.318155,
        "ele": 17.75,
        "distanceKm": 50.46154800667725,
        "gradePct": 0.8187766166453078,
        "smoothedEle": 17.06834360587539,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 50.46154800667725,
      "elevationGainM": 318.0537450431313,
      "elevationLossM": 321.1339794142963,
      "minimumElevationM": 4.5,
      "maximumElevationM": 64.5,
      "maximumSustainedGradePct": 5.636503465361672
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 101,
        "startDistanceKm": 0,
        "endDistanceKm": 4.778926810098166,
        "distanceKm": 4.778926810098166,
        "gainM": 58.78043681873552,
        "averageGradePct": 1.2299924052933568,
        "maximumGradePct": 4.403984982929714
      },
      {
        "startIndex": 226,
        "endIndex": 318,
        "startDistanceKm": 10.776228613002203,
        "endDistanceKm": 14.802363401502037,
        "distanceKm": 4.026134788499833,
        "gainM": 36.97340010319416,
        "averageGradePct": 0.9183348806106593,
        "maximumGradePct": 3.0527051408004917
      },
      {
        "startIndex": 332,
        "endIndex": 438,
        "startDistanceKm": 15.524293814142482,
        "endDistanceKm": 20.706260500736654,
        "distanceKm": 5.181966686594173,
        "gainM": 31.31983137592689,
        "averageGradePct": 0.6044004770804833,
        "maximumGradePct": 2.948729706461534
      },
      {
        "startIndex": 594,
        "endIndex": 680,
        "startDistanceKm": 27.873040468259926,
        "endDistanceKm": 32.08182590058851,
        "distanceKm": 4.208785432328586,
        "gainM": 47.26313432690639,
        "averageGradePct": 1.1229637406523052,
        "maximumGradePct": 5.636503465361672
      },
      {
        "startIndex": 695,
        "endIndex": 763,
        "startDistanceKm": 32.74752177237949,
        "endDistanceKm": 36.05920490556484,
        "distanceKm": 3.3116831331853476,
        "gainM": 30.992642327682976,
        "averageGradePct": 0.9358577219274192,
        "maximumGradePct": 3.6689830693962344
      },
      {
        "startIndex": 778,
        "endIndex": 964,
        "startDistanceKm": 36.837122788733694,
        "endDistanceKm": 45.44604305520923,
        "distanceKm": 8.608920266475536,
        "gainM": 66.80035548611644,
        "averageGradePct": 0.7759434797676933,
        "maximumGradePct": 3.795093176288464
      }
    ]
  },
  "kinmen-lieyu": {
    "routeId": "kinmen-lieyu",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:00:16.596Z",
      "reviewStatus": "approved",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "SRTM 100/100 公尺視窗為爬升 90 公尺、最大坡度 8.39%；500/200、750/300、1000/500 依序為 56/3.65%、45/2.03%、37/1.71%。採 500/200 呈現烈嶼短坡，同時減少海岸像元短波；僅供行程規劃，並非道路測量。",
        "referenceUrl": "https://kinmen.travel/zh-tw/discover/tour/581",
        "referenceLabel": "金門縣政府觀光處金寧烈嶼自行車路線"
      },
      "reviewedAt": "2026-08-01T05:02:17.708Z",
      "reviewerNote": "初版在烈女廟附近命中 20 公尺非法逆向 oneway，並有 footway 與 track；已改向、移除高風險景點支線，改用南環道、九井路、北環道外圍公共道路。核准版 raw 的 service、track、權限禁制、ferry 與非法逆向單行均為 0；live OSM 五窗 5/5 於 0.06 公尺內命中合法公共道路 way。全線 bounds 僅在烈嶼單島，沒有直接連向大金門；不進港區與軍事設施，強風、大霧或道路管制時應停騎。"
    },
    "waypoints": [
      {
        "name": "羅厝聚落外南環道",
        "lat": 24.4249,
        "lng": 118.25938,
        "role": "start"
      },
      {
        "name": "陵水湖外南環道公共路口",
        "lat": 24.4277616,
        "lng": 118.2325811,
        "role": "via"
      },
      {
        "name": "湖井頭外北環道",
        "lat": 24.4461208,
        "lng": 118.2312253,
        "role": "via"
      },
      {
        "name": "南環道東段外圍公共道路",
        "lat": 24.4298385,
        "lng": 118.2588677,
        "role": "via"
      },
      {
        "name": "羅厝聚落外南環道",
        "lat": 24.4249,
        "lng": 118.25938,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.425227,
        "lng": 118.259549,
        "ele": 9,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 6.857687707198308,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.425384,
        "lng": 118.259188,
        "ele": 8.125,
        "distanceKm": 0.04050412790671267,
        "gradePct": -0.5240571715316963,
        "smoothedEle": 6.645422920136809,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425541,
        "lng": 118.258827,
        "ele": 7.25,
        "distanceKm": 0.08100821477005485,
        "gradePct": -0.5017623464019287,
        "smoothedEle": 6.451218987989767,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425622434437216,
        "lng": 118.25842560175955,
        "ele": 6.4436846278340365,
        "distanceKm": 0.12264359318072822,
        "gradePct": -0.4774768095013795,
        "smoothedEle": 6.272092991421116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42578171721861,
        "lng": 118.25804980087977,
        "ele": 6.221842313917018,
        "distanceKm": 0.16461124559970233,
        "gradePct": -0.4547350954280793,
        "smoothedEle": 6.109142602435152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425941,
        "lng": 118.257674,
        "ele": 6,
        "distanceKm": 0.20657885446872035,
        "gradePct": -0.4321235574282061,
        "smoothedEle": 5.958963633693934,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425932155716186,
        "lng": 118.2573124152712,
        "ele": 5.538062320126713,
        "distanceKm": 0.2431998899085709,
        "gradePct": -0.39813097253275487,
        "smoothedEle": 5.836235672430611,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425878,
        "lng": 118.256946,
        "ele": 5.25,
        "distanceKm": 0.28078236278095614,
        "gradePct": -0.4596661393081915,
        "smoothedEle": 5.532969596256236,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425813,
        "lng": 118.256574,
        "ele": 5,
        "distanceKm": 0.3191319410551758,
        "gradePct": -0.5295768192389465,
        "smoothedEle": 5.228047374308792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425740166666667,
        "lng": 118.256124,
        "ele": 4.791666666666667,
        "distanceKm": 0.3654054538978397,
        "gradePct": -0.5891960244508652,
        "smoothedEle": 4.927908519250453,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425667333333333,
        "lng": 118.255674,
        "ele": 4.583333333333333,
        "distanceKm": 0.41167899263692953,
        "gradePct": -0.6276232358926737,
        "smoothedEle": 4.6866250848543025,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425594500000003,
        "lng": 118.255224,
        "ele": 4.375,
        "distanceKm": 0.4579525572723041,
        "gradePct": -0.6247041996031304,
        "smoothedEle": 4.467782856969546,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42552166666667,
        "lng": 118.254774,
        "ele": 4.166666666666667,
        "distanceKm": 0.5042261478040296,
        "gradePct": -0.529954974651901,
        "smoothedEle": 4.286655223702248,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425448833333334,
        "lng": 118.254324,
        "ele": 3.9583333333333335,
        "distanceKm": 0.550499764231965,
        "gradePct": -0.44047879416796215,
        "smoothedEle": 4.143632085107035,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425376,
        "lng": 118.253874,
        "ele": 3.75,
        "distanceKm": 0.5967734065560382,
        "gradePct": -0.36726106116808044,
        "smoothedEle": 4.029824941413324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4252995,
        "lng": 118.25342225,
        "ele": 3.75,
        "distanceKm": 0.6432943484705583,
        "gradePct": -0.30110988395341565,
        "smoothedEle": 3.934886364592729,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425223000000003,
        "lng": 118.2529705,
        "ele": 3.75,
        "distanceKm": 0.6898153176510201,
        "gradePct": -0.24181432020534377,
        "smoothedEle": 3.859434558748794,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4251465,
        "lng": 118.25251875,
        "ele": 3.75,
        "distanceKm": 0.7363363140988306,
        "gradePct": -0.19196956350467326,
        "smoothedEle": 3.8034695471726407,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42507,
        "lng": 118.252067,
        "ele": 3.75,
        "distanceKm": 0.7828573378109367,
        "gradePct": -0.14852964666863083,
        "smoothedEle": 3.7669913531596104,
        "gradeBand": "descent"
      },
      {
        "lat": 24.424966102298374,
        "lng": 118.25150619544678,
        "ele": 3.75,
        "distanceKm": 0.8407985892338065,
        "gradePct": -0.031325255928144266,
        "smoothedEle": 3.8773291251482385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.424864,
        "lng": 118.250945,
        "ele": 3.75,
        "distanceKm": 0.8987392181010684,
        "gradePct": 0.13019629130639937,
        "smoothedEle": 4.109091640617286,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.424711499999997,
        "lng": 118.2505285,
        "ele": 3.75,
        "distanceKm": 0.9441890502321515,
        "gradePct": 0.24678946559205223,
        "smoothedEle": 4.290890969141619,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.424559,
        "lng": 118.250112,
        "ele": 3.75,
        "distanceKm": 0.9896389296532626,
        "gradePct": 0.3673622904793393,
        "smoothedEle": 4.514630148361911,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.424451,
        "lng": 118.249759,
        "ele": 3.75,
        "distanceKm": 1.0273417205733255,
        "gradePct": 0.411613161291274,
        "smoothedEle": 4.67492947539711,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.424249,
        "lng": 118.249175,
        "ele": 5.75,
        "distanceKm": 1.0905908953201682,
        "gradePct": 0.39637903386611806,
        "smoothedEle": 4.869256417225921,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4240845,
        "lng": 118.248735,
        "ele": 5.75,
        "distanceKm": 1.1387474711601264,
        "gradePct": 0.3602616019861494,
        "smoothedEle": 4.989647856825817,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42392,
        "lng": 118.248295,
        "ele": 5.75,
        "distanceKm": 1.1869041007293233,
        "gradePct": 0.315664883315634,
        "smoothedEle": 5.132496988654459,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.424324314519637,
        "lng": 118.24825768486936,
        "ele": 6.444901209021819,
        "distanceKm": 1.2320203428810579,
        "gradePct": 0.31897715717794345,
        "smoothedEle": 5.32725840204909,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.424731,
        "lng": 118.248266,
        "ele": 5.5,
        "distanceKm": 1.2772496029466782,
        "gradePct": 0.3828790737555382,
        "smoothedEle": 5.594024740642672,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.425374,
        "lng": 118.24839,
        "ele": 5,
        "distanceKm": 1.349841848123383,
        "gradePct": 0.48837955870985156,
        "smoothedEle": 5.999316713393764,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.425612,
        "lng": 118.248436,
        "ele": 5,
        "distanceKm": 1.3767129358338637,
        "gradePct": 0.5137428270869023,
        "smoothedEle": 6.129752141427681,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.425819,
        "lng": 118.248328,
        "ele": 5,
        "distanceKm": 1.4021954268682129,
        "gradePct": 0.5288008182042672,
        "smoothedEle": 6.256109448426169,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426032,
        "lng": 118.248266,
        "ele": 5.5,
        "distanceKm": 1.4266976587791338,
        "gradePct": 0.5418359812468674,
        "smoothedEle": 6.38795297482013,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426071,
        "lng": 118.248193,
        "ele": 5.5,
        "distanceKm": 1.4352667200650953,
        "gradePct": 0.5439836718868475,
        "smoothedEle": 6.434373177238265,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426084,
        "lng": 118.247755,
        "ele": 6.25,
        "distanceKm": 1.4796345445456094,
        "gradePct": 0.5307339741590168,
        "smoothedEle": 6.66880812896637,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42637082136167,
        "lng": 118.24736174782952,
        "ele": 7.168646919148066,
        "distanceKm": 1.5306474137645827,
        "gradePct": 0.5496565552497056,
        "smoothedEle": 6.99146479341116,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426669,
        "lng": 118.246976,
        "ele": 8,
        "distanceKm": 1.5818776197289055,
        "gradePct": 0.628659482099639,
        "smoothedEle": 7.412680672116996,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426955620755802,
        "lng": 118.24661921448319,
        "ele": 8.229296604640501,
        "distanceKm": 1.6300494545550908,
        "gradePct": 0.7478608976398113,
        "smoothedEle": 7.9018320726550595,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4272422415116,
        "lng": 118.24626242896636,
        "ele": 8.458593209281004,
        "distanceKm": 1.6782212278413886,
        "gradePct": 0.9379692740108114,
        "smoothedEle": 8.537278859099468,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427528721885423,
        "lng": 118.24590550600966,
        "ele": 8.863346571864337,
        "distanceKm": 1.726393050448209,
        "gradePct": 1.1435069527004558,
        "smoothedEle": 9.25156982859924,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42781517132214,
        "lng": 118.2455485527642,
        "ele": 9.306766752540367,
        "distanceKm": 1.7745648371400045,
        "gradePct": 1.27035172497536,
        "smoothedEle": 9.893258262997115,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428101,
        "lng": 118.245191,
        "ele": 9.5,
        "distanceKm": 1.8227365435785876,
        "gradePct": 1.3002416523954194,
        "smoothedEle": 10.428057864542897,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428402,
        "lng": 118.244966,
        "ele": 10.25,
        "distanceKm": 1.863222516061732,
        "gradePct": 1.2754454009840228,
        "smoothedEle": 10.890317629660155,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428710417250713,
        "lng": 118.24461041373563,
        "ele": 12.036531676811817,
        "distanceKm": 1.9129426885554872,
        "gradePct": 1.2170381316439205,
        "smoothedEle": 11.486204353614244,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.429019,
        "lng": 118.244255,
        "ele": 13.5,
        "distanceKm": 1.962662850161415,
        "gradePct": 1.1922779093560547,
        "smoothedEle": 12.11926967397573,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428801,
        "lng": 118.243931,
        "ele": 13.25,
        "distanceKm": 2.0034496877002903,
        "gradePct": 1.2016441031297416,
        "smoothedEle": 12.617224471187988,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428583,
        "lng": 118.243607,
        "ele": 13,
        "distanceKm": 2.044236570831834,
        "gradePct": 1.2040512947984088,
        "smoothedEle": 13.0816429493975,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428289499999998,
        "lng": 118.2431515,
        "ele": 13.750000000000002,
        "distanceKm": 2.100731703037196,
        "gradePct": 1.2224043391338681,
        "smoothedEle": 13.784666714244825,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427996,
        "lng": 118.242696,
        "ele": 14.5,
        "distanceKm": 2.15722692282627,
        "gradePct": 1.2235637021415926,
        "smoothedEle": 14.49718376581717,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427838,
        "lng": 118.242462,
        "ele": 15,
        "distanceKm": 2.186720989196709,
        "gradePct": 1.232923292662631,
        "smoothedEle": 14.878835176174746,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4278645,
        "lng": 118.2419625,
        "ele": 15,
        "distanceKm": 2.2373767467410826,
        "gradePct": 1.2433218383670814,
        "smoothedEle": 15.490177468961281,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427891,
        "lng": 118.241463,
        "ele": 15,
        "distanceKm": 2.288032493679923,
        "gradePct": 1.3245425656470944,
        "smoothedEle": 16.275723257509846,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427912299603285,
        "lng": 118.24096556551491,
        "ele": 16.22028977162315,
        "distanceKm": 2.3384489997047826,
        "gradePct": 1.4687211361738954,
        "smoothedEle": 17.19779909126348,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427933599206572,
        "lng": 118.24046813102983,
        "ele": 17.44057954324631,
        "distanceKm": 2.3888654972355576,
        "gradePct": 1.6471881602190996,
        "smoothedEle": 18.19909263085954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427954711114094,
        "lng": 118.23997068662746,
        "ele": 18.828756073376905,
        "distanceKm": 2.4392820131204536,
        "gradePct": 1.874142109855526,
        "smoothedEle": 19.268007674484863,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427975759261745,
        "lng": 118.23947323885622,
        "ele": 20.27396339448076,
        "distanceKm": 2.4896985316750184,
        "gradePct": 2.0716726803820986,
        "smoothedEle": 20.449539063263533,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427996807409396,
        "lng": 118.23897579108497,
        "ele": 21.719170715584603,
        "distanceKm": 2.540115041836752,
        "gradePct": 2.2450211461535687,
        "smoothedEle": 21.7209297039645,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428017855557044,
        "lng": 118.23847834331373,
        "ele": 23.164378036688458,
        "distanceKm": 2.5905315436027543,
        "gradePct": 2.3653688847878818,
        "smoothedEle": 22.965153389222145,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428038903704696,
        "lng": 118.23798089554249,
        "ele": 24.6095853577923,
        "distanceKm": 2.6409480369744927,
        "gradePct": 2.3195861246110083,
        "smoothedEle": 23.946223862765677,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428059951852347,
        "lng": 118.23748344777124,
        "ele": 26.054792678896142,
        "distanceKm": 2.6913645219533793,
        "gradePct": 2.0837740169361467,
        "smoothedEle": 24.65909961328603,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428081,
        "lng": 118.236986,
        "ele": 27.5,
        "distanceKm": 2.741780998536533,
        "gradePct": 1.6840455585257887,
        "smoothedEle": 25.13013479584324,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42813,
        "lng": 118.23625,
        "ele": 28,
        "distanceKm": 2.8164933118217155,
        "gradePct": 0.9586924134090014,
        "smoothedEle": 25.387736466398458,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428064499999998,
        "lng": 118.23570649999999,
        "ele": 26.499999999999993,
        "distanceKm": 2.8719977277181514,
        "gradePct": 0.4186872134841991,
        "smoothedEle": 25.2226326968646,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427999,
        "lng": 118.235163,
        "ele": 25,
        "distanceKm": 2.927502171937511,
        "gradePct": -0.05428235777987562,
        "smoothedEle": 24.888164690823558,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42794025,
        "lng": 118.2347145,
        "ele": 24.125000000000004,
        "distanceKm": 2.9733763361689522,
        "gradePct": -0.3733395772892202,
        "smoothedEle": 24.492393664971818,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427881499999998,
        "lng": 118.23426599999999,
        "ele": 23.249999999999996,
        "distanceKm": 3.0192505213323995,
        "gradePct": -0.7449838382494367,
        "smoothedEle": 23.889567177897074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42782275,
        "lng": 118.2338175,
        "ele": 22.374999999999996,
        "distanceKm": 3.0651247274263254,
        "gradePct": -1.0521312030178853,
        "smoothedEle": 23.138814758856473,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427764,
        "lng": 118.233369,
        "ele": 21.5,
        "distanceKm": 3.1109989544536436,
        "gradePct": -1.335557571104096,
        "smoothedEle": 22.316497409461896,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427681,
        "lng": 118.232634,
        "ele": 22.25,
        "distanceKm": 3.185981467064936,
        "gradePct": -1.6724453655553337,
        "smoothedEle": 20.981860606916936,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428062007154313,
        "lng": 118.23243079453377,
        "ele": 21.274202840396583,
        "distanceKm": 3.2330784602396694,
        "gradePct": -1.7753818892711877,
        "smoothedEle": 20.112502838125952,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42844780572345,
        "lng": 118.23223763562702,
        "ele": 20.01936227231726,
        "distanceKm": 3.2802243664129382,
        "gradePct": -1.8690609083168985,
        "smoothedEle": 19.130024728000944,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42883360429259,
        "lng": 118.23204447672026,
        "ele": 18.76452170423795,
        "distanceKm": 3.3273702477777767,
        "gradePct": -1.9895202469785414,
        "smoothedEle": 18.046059230701754,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429219402861726,
        "lng": 118.23185131781351,
        "ele": 17.509681136158637,
        "distanceKm": 3.3745161043338796,
        "gradePct": -2.1626649190587823,
        "smoothedEle": 16.860606286176615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429605201430864,
        "lng": 118.23165815890675,
        "ele": 16.254840568079313,
        "distanceKm": 3.4216619360809424,
        "gradePct": -2.3806626360809746,
        "smoothedEle": 15.561913821103618,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429991,
        "lng": 118.231465,
        "ele": 15,
        "distanceKm": 3.46880774301866,
        "gradePct": -2.574425057369813,
        "smoothedEle": 14.219086735157898,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430188,
        "lng": 118.231508,
        "ele": 13.75,
        "distanceKm": 3.4911415530657233,
        "gradePct": -2.621816324892366,
        "smoothedEle": 13.635387042004925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430477,
        "lng": 118.23179766666667,
        "ele": 11.91666666666666,
        "distanceKm": 3.5346464354299862,
        "gradePct": -2.6110312365710935,
        "smoothedEle": 12.64104159018521,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430766000000002,
        "lng": 118.23208733333334,
        "ele": 10.08333333333334,
        "distanceKm": 3.578151272501888,
        "gradePct": -2.4569927277262997,
        "smoothedEle": 11.846485456415778,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431055,
        "lng": 118.232377,
        "ele": 8.25,
        "distanceKm": 3.6216560642784588,
        "gradePct": -2.1904895781191023,
        "smoothedEle": 11.181096411203516,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431327,
        "lng": 118.23266100000001,
        "ele": 8,
        "distanceKm": 3.663386464710013,
        "gradePct": -1.8649995866965279,
        "smoothedEle": 10.643498734807611,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431599,
        "lng": 118.232945,
        "ele": 7.75,
        "distanceKm": 3.7051168224192765,
        "gradePct": -1.5639863615345715,
        "smoothedEle": 10.187996249871514,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43206896350569,
        "lng": 118.23314991096181,
        "ele": 9.038748187447212,
        "distanceKm": 3.7613414223494788,
        "gradePct": -1.2404292485359132,
        "smoothedEle": 9.672635798941885,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43253892701138,
        "lng": 118.23335482192361,
        "ele": 10.327496374894412,
        "distanceKm": 3.8175659937578525,
        "gradePct": -0.94065834658681,
        "smoothedEle": 9.362335772372917,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4330085472247,
        "lng": 118.23356067999048,
        "ele": 10.649507253281188,
        "distanceKm": 3.8737905289594536,
        "gradePct": -0.6650091572083644,
        "smoothedEle": 9.19991616215777,
        "gradeBand": "descent"
      },
      {
        "lat": 24.433478,
        "lng": 118.233767,
        "ele": 10.5,
        "distanceKm": 3.9300151002458747,
        "gradePct": -0.42919157990770046,
        "smoothedEle": 9.101392921232927,
        "gradeBand": "descent"
      },
      {
        "lat": 24.433851934925535,
        "lng": 118.23415860827329,
        "ele": 9.6658315307945,
        "distanceKm": 3.9874659889736295,
        "gradePct": -0.27005194898769935,
        "smoothedEle": 8.988351989683617,
        "gradeBand": "descent"
      },
      {
        "lat": 24.434230767853816,
        "lng": 118.23454463992704,
        "ele": 8.765990846041035,
        "distanceKm": 4.0449267447003825,
        "gradePct": -0.2398276660959986,
        "smoothedEle": 8.803641591974436,
        "gradeBand": "descent"
      },
      {
        "lat": 24.434611,
        "lng": 118.234929,
        "ele": 7.75,
        "distanceKm": 4.1023868472919,
        "gradePct": -0.2963997817682357,
        "smoothedEle": 8.557006799717211,
        "gradeBand": "descent"
      },
      {
        "lat": 24.434932500000002,
        "lng": 118.235232,
        "ele": 7.25,
        "distanceKm": 4.149492319220167,
        "gradePct": -0.37783756685781233,
        "smoothedEle": 8.307394220630854,
        "gradeBand": "descent"
      },
      {
        "lat": 24.435254,
        "lng": 118.235535,
        "ele": 6.75,
        "distanceKm": 4.196597740222781,
        "gradePct": -0.45505200741277685,
        "smoothedEle": 8.048893515737594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43565398157876,
        "lng": 118.23593452214419,
        "ele": 7.439151848838371,
        "distanceKm": 4.256714001392813,
        "gradePct": -0.411284390909096,
        "smoothedEle": 7.930478615671648,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436054,
        "lng": 118.236334,
        "ele": 8.25,
        "distanceKm": 4.3168301909627855,
        "gradePct": -0.19052256090552683,
        "smoothedEle": 8.099426190270869,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436479,
        "lng": 118.23602199999999,
        "ele": 8,
        "distanceKm": 4.373671474464399,
        "gradePct": 0.12662761128763822,
        "smoothedEle": 8.42796134613954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436904,
        "lng": 118.23571,
        "ele": 7.75,
        "distanceKm": 4.430512698809884,
        "gradePct": 0.4301993452226838,
        "smoothedEle": 8.8424877117971,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437319,
        "lng": 118.23539199999999,
        "ele": 9.125,
        "distanceKm": 4.486778106626809,
        "gradePct": 0.6433769846839649,
        "smoothedEle": 9.301723263808686,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437734,
        "lng": 118.235074,
        "ele": 10.5,
        "distanceKm": 4.54304345382072,
        "gradePct": 0.7206611666770988,
        "smoothedEle": 9.692257741368422,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43808520867584,
        "lng": 118.23481049174912,
        "ele": 10.75,
        "distanceKm": 4.590337300976145,
        "gradePct": 0.7014367867140064,
        "smoothedEle": 9.952373900723265,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438415419824327,
        "lng": 118.23451504146487,
        "ele": 10.820375769151967,
        "distanceKm": 4.637695147730472,
        "gradePct": 0.6890842343314312,
        "smoothedEle": 10.27927898304541,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438745209912163,
        "lng": 118.23421902073244,
        "ele": 10.910187884575985,
        "distanceKm": 4.68505317379044,
        "gradePct": 0.669810632033727,
        "smoothedEle": 10.627265709041833,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439075,
        "lng": 118.233923,
        "ele": 11,
        "distanceKm": 4.732411150250838,
        "gradePct": 0.6493175907033203,
        "smoothedEle": 10.91709472678047,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439309,
        "lng": 118.233553,
        "ele": 11,
        "distanceKm": 4.778017781233089,
        "gradePct": 0.6034933756360386,
        "smoothedEle": 11.091603293408532,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439521,
        "lng": 118.233265,
        "ele": 11,
        "distanceKm": 4.815510515142035,
        "gradePct": 0.5126781683845398,
        "smoothedEle": 11.151497674426361,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439833,
        "lng": 118.232857,
        "ele": 11.5,
        "distanceKm": 4.86945024498909,
        "gradePct": 0.32731532320222606,
        "smoothedEle": 11.167246050920042,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440169,
        "lng": 118.232356,
        "ele": 11.5,
        "distanceKm": 4.9324430603236875,
        "gradePct": 0.0853080063675317,
        "smoothedEle": 11.087832839766175,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440466,
        "lng": 118.232157,
        "ele": 11.5,
        "distanceKm": 4.971127267936089,
        "gradePct": -0.04194981420116047,
        "smoothedEle": 10.981337902552523,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440835806103777,
        "lng": 118.23196474088219,
        "ele": 11.410983519127472,
        "distanceKm": 5.016621189688348,
        "gradePct": -0.1729922317499389,
        "smoothedEle": 10.805837486204963,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441208,
        "lng": 118.231778,
        "ele": 11.25,
        "distanceKm": 5.06212030052883,
        "gradePct": -0.2602593998033569,
        "smoothedEle": 10.644587182659569,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441588,
        "lng": 118.231573,
        "ele": 10.6875,
        "distanceKm": 5.109195411284178,
        "gradePct": -0.31550710108078633,
        "smoothedEle": 10.486126272962688,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441968,
        "lng": 118.231368,
        "ele": 10.125,
        "distanceKm": 5.156270494463154,
        "gradePct": -0.2914153323446375,
        "smoothedEle": 10.439406903536907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442348,
        "lng": 118.23116300000001,
        "ele": 9.5625,
        "distanceKm": 5.203345550066058,
        "gradePct": -0.1656761587121832,
        "smoothedEle": 10.525698170237796,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442728,
        "lng": 118.230958,
        "ele": 9,
        "distanceKm": 5.2504205780931885,
        "gradePct": 0.030056956706129487,
        "smoothedEle": 10.746165286454765,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.443056,
        "lng": 118.23113,
        "ele": 9.25,
        "distanceKm": 5.2908354636983335,
        "gradePct": 0.2603444601022351,
        "smoothedEle": 11.068617150714534,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.443438,
        "lng": 118.231266,
        "ele": 9.5,
        "distanceKm": 5.3354873222082215,
        "gradePct": 0.5789646434470712,
        "smoothedEle": 11.617962318668068,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.443903333333335,
        "lng": 118.23133,
        "ele": 11.083333333333323,
        "distanceKm": 5.387634110955903,
        "gradePct": 1.0230256217738303,
        "smoothedEle": 12.542949448174253,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.444368666666666,
        "lng": 118.23139400000001,
        "ele": 12.666666666666675,
        "distanceKm": 5.439780896732019,
        "gradePct": 1.4793334485694805,
        "smoothedEle": 13.655003219799747,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.444834,
        "lng": 118.231458,
        "ele": 14.25,
        "distanceKm": 5.491927679536953,
        "gradePct": 1.7971528183783347,
        "smoothedEle": 14.676360156336271,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445156,
        "lng": 118.231507,
        "ele": 15.75,
        "distanceKm": 5.528074434164791,
        "gradePct": 1.8547548352627878,
        "smoothedEle": 15.236272331147227,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445746,
        "lng": 118.231479,
        "ele": 18.75,
        "distanceKm": 5.593740729796805,
        "gradePct": 1.6414284392921838,
        "smoothedEle": 15.956032733100503,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445822,
        "lng": 118.231325,
        "ele": 19.75,
        "distanceKm": 5.611472935929449,
        "gradePct": 1.5163434992956302,
        "smoothedEle": 16.084010162007864,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445946,
        "lng": 118.231429,
        "ele": 20,
        "distanceKm": 5.628820676653113,
        "gradePct": 1.3589755363170333,
        "smoothedEle": 16.139222646366083,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.446121,
        "lng": 118.231225,
        "ele": 21.25,
        "distanceKm": 5.6571947841616606,
        "gradePct": 1.1064330568554972,
        "smoothedEle": 16.208941088308382,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445946,
        "lng": 118.231429,
        "ele": 20,
        "distanceKm": 5.685568891670208,
        "gradePct": 0.7939488241659635,
        "smoothedEle": 16.139713360191934,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445822,
        "lng": 118.231325,
        "ele": 19.75,
        "distanceKm": 5.7029166323938725,
        "gradePct": 0.619100066175028,
        "smoothedEle": 16.084778847900328,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445746,
        "lng": 118.231479,
        "ele": 18.75,
        "distanceKm": 5.720648838526516,
        "gradePct": 0.41812740163427764,
        "smoothedEle": 15.957504874578065,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44535,
        "lng": 118.231521,
        "ele": 16.75,
        "distanceKm": 5.7648868629043815,
        "gradePct": -0.061967295780472165,
        "smoothedEle": 15.51583436219105,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444834,
        "lng": 118.231458,
        "ele": 14.25,
        "distanceKm": 5.822616851047164,
        "gradePct": -0.7193695300814035,
        "smoothedEle": 14.680738731257273,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444368666666666,
        "lng": 118.23139400000001,
        "ele": 12.666666666666677,
        "distanceKm": 5.8747636338520985,
        "gradePct": -1.253540930127463,
        "smoothedEle": 13.658994389068756,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443903333333335,
        "lng": 118.23133,
        "ele": 11.083333333333325,
        "distanceKm": 5.926910419628214,
        "gradePct": -1.6740244518013987,
        "smoothedEle": 12.54694061744326,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443438,
        "lng": 118.231266,
        "ele": 9.5,
        "distanceKm": 5.979057208375896,
        "gradePct": -1.844255862807857,
        "smoothedEle": 11.622340893589069,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443056,
        "lng": 118.23113,
        "ele": 9.25,
        "distanceKm": 6.023709066885784,
        "gradePct": -1.791505193265569,
        "smoothedEle": 11.076327880622088,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442728,
        "lng": 118.230958,
        "ele": 9,
        "distanceKm": 6.064123952490929,
        "gradePct": -1.5603271566901369,
        "smoothedEle": 10.746809968723472,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442348,
        "lng": 118.23116300000001,
        "ele": 9.5625,
        "distanceKm": 6.1111989805180595,
        "gradePct": -1.1772429189769997,
        "smoothedEle": 10.527508318457611,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441968,
        "lng": 118.231368,
        "ele": 10.125,
        "distanceKm": 6.158274036120964,
        "gradePct": -0.7748121479119725,
        "smoothedEle": 10.441217051756725,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441588,
        "lng": 118.231573,
        "ele": 10.6875,
        "distanceKm": 6.20534911929994,
        "gradePct": -0.4064505230677865,
        "smoothedEle": 10.487936421182507,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441208,
        "lng": 118.231778,
        "ele": 11.25,
        "distanceKm": 6.252424230055287,
        "gradePct": -0.09801236112653282,
        "smoothedEle": 10.646177527038816,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44063,
        "lng": 118.232068,
        "ele": 11.5,
        "distanceKm": 6.323082266197791,
        "gradePct": 0.20116897748719145,
        "smoothedEle": 10.908063531792296,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44026,
        "lng": 118.232279,
        "ele": 11.5,
        "distanceKm": 6.369438693083754,
        "gradePct": 0.30142506865701235,
        "smoothedEle": 11.055147482464468,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4400350650779,
        "lng": 118.23255570653563,
        "ele": 11.5,
        "distanceKm": 6.406991587348947,
        "gradePct": 0.31841559551020077,
        "smoothedEle": 11.130288702992463,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439833,
        "lng": 118.232857,
        "ele": 11.5,
        "distanceKm": 6.444874481754454,
        "gradePct": 0.2739716312759153,
        "smoothedEle": 11.168742612016736,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439521,
        "lng": 118.233265,
        "ele": 11,
        "distanceKm": 6.498814211601508,
        "gradePct": 0.16589566591769586,
        "smoothedEle": 11.149908069061501,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439309,
        "lng": 118.233553,
        "ele": 11,
        "distanceKm": 6.5363069455104545,
        "gradePct": 0.07182247651532585,
        "smoothedEle": 11.093668968198081,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439075,
        "lng": 118.233923,
        "ele": 11,
        "distanceKm": 6.581913576492705,
        "gradePct": -0.08318755210239807,
        "smoothedEle": 10.913733915409736,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438769,
        "lng": 118.23419766666667,
        "ele": 10.916666666666668,
        "distanceKm": 6.625855286034655,
        "gradePct": -0.24999039860961306,
        "smoothedEle": 10.649455939853127,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438463,
        "lng": 118.23447233333333,
        "ele": 10.833333333333332,
        "distanceKm": 6.669797038277773,
        "gradePct": -0.4181761578996369,
        "smoothedEle": 10.323687898880216,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438157,
        "lng": 118.234747,
        "ele": 10.75,
        "distanceKm": 6.713738833222829,
        "gradePct": -0.5557129011823467,
        "smoothedEle": 10.016095334264826,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437734,
        "lng": 118.235074,
        "ele": 10.5,
        "distanceKm": 6.771255469393246,
        "gradePct": -0.6333105447617239,
        "smoothedEle": 9.689163006359196,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437319,
        "lng": 118.23539199999999,
        "ele": 9.125,
        "distanceKm": 6.827520816587157,
        "gradePct": -0.5943982739596305,
        "smoothedEle": 9.448311759043238,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436904,
        "lng": 118.23571,
        "ele": 7.75,
        "distanceKm": 6.883786224404082,
        "gradePct": -0.4675343526689138,
        "smoothedEle": 9.290694890658228,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436479,
        "lng": 118.23602199999999,
        "ele": 8,
        "distanceKm": 6.9406274487495665,
        "gradePct": -0.3180564901966291,
        "smoothedEle": 9.227143831773901,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436054,
        "lng": 118.236334,
        "ele": 8.25,
        "distanceKm": 6.99746873225118,
        "gradePct": -0.1797541833223198,
        "smoothedEle": 9.217445307142665,
        "gradeBand": "descent"
      },
      {
        "lat": 24.435705,
        "lng": 118.2366,
        "ele": 8.75,
        "distanceKm": 7.044703580284134,
        "gradePct": -0.07955738718337095,
        "smoothedEle": 9.241062731159143,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43537795461294,
        "lng": 118.23683202544352,
        "ele": 9.302441532199639,
        "distanceKm": 7.087995751782776,
        "gradePct": 0.0960654862346643,
        "smoothedEle": 9.478119421185129,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435051353614096,
        "lng": 118.2370648032944,
        "ele": 9.891131316983522,
        "distanceKm": 7.131287871352821,
        "gradePct": 0.3327959592545679,
        "smoothedEle": 9.903177820099966,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.434725,
        "lng": 118.237298,
        "ele": 10.5,
        "distanceKm": 7.174580059462727,
        "gradePct": 0.632496995939951,
        "smoothedEle": 10.486344671018765,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4344255,
        "lng": 118.2375175,
        "ele": 10.625000000000002,
        "distanceKm": 7.2146159092986055,
        "gradePct": 0.9500121695526281,
        "smoothedEle": 11.126043234771636,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.434126,
        "lng": 118.237737,
        "ele": 10.75,
        "distanceKm": 7.254651788426475,
        "gradePct": 1.2350035883393795,
        "smoothedEle": 11.765543712506883,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.434108,
        "lng": 118.237901,
        "ele": 10.75,
        "distanceKm": 7.27137472978009,
        "gradePct": 1.3174303594009185,
        "smoothedEle": 12.02196773925929,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.434286863341736,
        "lng": 118.2383949958232,
        "ele": 12.125431214481694,
        "distanceKm": 7.325194641332075,
        "gradePct": 1.4530776862725163,
        "smoothedEle": 12.749507556419273,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.434457,
        "lng": 118.238893,
        "ele": 13.75,
        "distanceKm": 7.379043232823904,
        "gradePct": 1.4182332056071307,
        "smoothedEle": 13.394124307770372,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4345805,
        "lng": 118.239267,
        "ele": 15.124999999999984,
        "distanceKm": 7.419318918797633,
        "gradePct": 1.3124042663998414,
        "smoothedEle": 13.825973805276941,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.434704,
        "lng": 118.239641,
        "ele": 16.5,
        "distanceKm": 7.459594569914778,
        "gradePct": 1.2130265047028723,
        "smoothedEle": 14.267387691084075,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43446094999896,
        "lng": 118.24005120032767,
        "ele": 15.925461954823605,
        "distanceKm": 7.509141426303316,
        "gradePct": 1.1843983850914392,
        "smoothedEle": 14.901296293886,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4342,
        "lng": 118.24045,
        "ele": 15.5,
        "distanceKm": 7.558859820164859,
        "gradePct": 1.2083645790222775,
        "smoothedEle": 15.569239608534614,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.433937,
        "lng": 118.2408985,
        "ele": 15.5,
        "distanceKm": 7.6128671593520885,
        "gradePct": 1.1693709920871624,
        "smoothedEle": 16.09553784729507,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.433674,
        "lng": 118.241347,
        "ele": 15.5,
        "distanceKm": 7.666874578146693,
        "gradePct": 0.9771853050007585,
        "smoothedEle": 16.31489962594566,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.433462760106927,
        "lng": 118.24174334701587,
        "ele": 16.588865428205704,
        "distanceKm": 7.713368958378054,
        "gradePct": 0.6519780492027601,
        "smoothedEle": 16.262047303942282,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.433251520213854,
        "lng": 118.24213969403174,
        "ele": 17.677730856411387,
        "distanceKm": 7.759863396611803,
        "gradePct": 0.26369638216136226,
        "smoothedEle": 16.10641216435303,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.433040302078883,
        "lng": 118.24253605424843,
        "ele": 17.836235769694177,
        "distanceKm": 7.806357823988097,
        "gradePct": -0.01583568316159044,
        "smoothedEle": 16.000433403373055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43283,
        "lng": 118.242933,
        "ele": 17,
        "distanceKm": 7.852852163021999,
        "gradePct": -0.1626168512475957,
        "smoothedEle": 15.932711119992296,
        "gradeBand": "descent"
      },
      {
        "lat": 24.432395999999997,
        "lng": 118.2433115,
        "ele": 15.749999999999991,
        "distanceKm": 7.914473543598949,
        "gradePct": -0.18295635706217334,
        "smoothedEle": 15.892437109397205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431962,
        "lng": 118.24369,
        "ele": 14.5,
        "distanceKm": 7.976095006171162,
        "gradePct": -0.16542255718931806,
        "smoothedEle": 15.738568941450776,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43164884016042,
        "lng": 118.24401622921968,
        "ele": 14.553544475040287,
        "distanceKm": 8.024088024387417,
        "gradePct": -0.2831827825913391,
        "smoothedEle": 15.408242551052412,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431335094672086,
        "lng": 118.24434177899371,
        "ele": 14.70886402372053,
        "distanceKm": 8.072081106246928,
        "gradePct": -0.4778253811907178,
        "smoothedEle": 14.964492858214994,
        "gradeBand": "descent"
      },
      {
        "lat": 24.431021648946263,
        "lng": 118.2446676756451,
        "ele": 15.140215220421391,
        "distanceKm": 8.12007415520643,
        "gradePct": -0.6636174150793778,
        "smoothedEle": 14.551217608777039,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430708280683692,
        "lng": 118.24499366161164,
        "ele": 15.239879192857671,
        "distanceKm": 8.168067222948313,
        "gradePct": -0.7636079612717019,
        "smoothedEle": 14.23139831231019,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430394689207898,
        "lng": 118.2453193879918,
        "ele": 14.601200016089765,
        "distanceKm": 8.216060309567652,
        "gradePct": -0.7136105298479042,
        "smoothedEle": 14.03627465438152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430081,
        "lng": 118.245645,
        "ele": 13.75,
        "distanceKm": 8.264053394968741,
        "gradePct": -0.5409749060873736,
        "smoothedEle": 13.956768210915277,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430049,
        "lng": 118.245621,
        "ele": 13.75,
        "distanceKm": 8.268362078848185,
        "gradePct": -0.5234406546908029,
        "smoothedEle": 13.951998114602956,
        "gradeBand": "descent"
      },
      {
        "lat": 24.430011,
        "lng": 118.245608,
        "ele": 13.75,
        "distanceKm": 8.272787716494301,
        "gradePct": -0.5056547963505205,
        "smoothedEle": 13.947098540067879,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429934,
        "lng": 118.24562,
        "ele": 13.25,
        "distanceKm": 8.281435498028873,
        "gradePct": -0.4732080645383484,
        "smoothedEle": 13.937524676688243,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429902,
        "lng": 118.245644,
        "ele": 13.25,
        "distanceKm": 8.285744183505184,
        "gradePct": -0.4570417493332365,
        "smoothedEle": 13.932754578608046,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429875,
        "lng": 118.245681,
        "ele": 13,
        "distanceKm": 8.290544715248599,
        "gradePct": -0.43903001240259054,
        "smoothedEle": 13.9274399629604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429859,
        "lng": 118.245771,
        "ele": 13,
        "distanceKm": 8.299828348417996,
        "gradePct": -0.40878643195577224,
        "smoothedEle": 13.90798438429167,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429872,
        "lng": 118.245816,
        "ele": 13,
        "distanceKm": 8.304607963257672,
        "gradePct": -0.39518025461545886,
        "smoothedEle": 13.894038768017982,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429897,
        "lng": 118.245854,
        "ele": 13.25,
        "distanceKm": 8.30935432214808,
        "gradePct": -0.3816687473183449,
        "smoothedEle": 13.880190183560217,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42959884126343,
        "lng": 118.24617682393618,
        "ele": 12.705914714288644,
        "distanceKm": 8.355908862702792,
        "gradePct": -0.3201360099577617,
        "smoothedEle": 13.672147956623881,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42930086505907,
        "lng": 118.24649985032929,
        "ele": 12.787476616353574,
        "distanceKm": 8.402463401450682,
        "gradePct": -0.4051110449520637,
        "smoothedEle": 13.281332994122321,
        "gradeBand": "descent"
      },
      {
        "lat": 24.429003,
        "lng": 118.246823,
        "ele": 13.25,
        "distanceKm": 8.44901796914087,
        "gradePct": -0.6011455559073808,
        "smoothedEle": 12.779385129571661,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428533,
        "lng": 118.247342,
        "ele": 14,
        "distanceKm": 8.523126910031849,
        "gradePct": -0.9115670353481318,
        "smoothedEle": 11.995509380367514,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428246,
        "lng": 118.24761,
        "ele": 13.25,
        "distanceKm": 8.565015008455001,
        "gradePct": -0.9932803580246795,
        "smoothedEle": 11.609143179342265,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42801,
        "lng": 118.247899,
        "ele": 11.75,
        "distanceKm": 8.604317843038425,
        "gradePct": -1.0040410352119578,
        "smoothedEle": 11.253256473291387,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427709498358965,
        "lng": 118.24831954739969,
        "ele": 10.007400277502054,
        "distanceKm": 8.658440785635658,
        "gradePct": -0.9593480951197851,
        "smoothedEle": 10.761020569353207,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4274095655061,
        "lng": 118.24874058304442,
        "ele": 9.13288969948018,
        "distanceKm": 8.712563706046598,
        "gradePct": -0.9596897573008859,
        "smoothedEle": 10.187860506338723,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42710972488817,
        "lng": 118.24916169709238,
        "ele": 8.690034388279146,
        "distanceKm": 8.766686639517948,
        "gradePct": -1.0131710035178472,
        "smoothedEle": 9.567664572643212,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42680948325878,
        "lng": 118.24958246472825,
        "ele": 8.460022925519432,
        "distanceKm": 8.820809524334399,
        "gradePct": -1.0774608574107225,
        "smoothedEle": 8.948346652490669,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42650924162939,
        "lng": 118.25000323236412,
        "ele": 8.230011462759716,
        "distanceKm": 8.874932488951362,
        "gradePct": -1.0517312838346344,
        "smoothedEle": 8.48291137064711,
        "gradeBand": "descent"
      },
      {
        "lat": 24.426209,
        "lng": 118.250424,
        "ele": 8,
        "distanceKm": 8.92905553336799,
        "gradePct": -0.8908320902795875,
        "smoothedEle": 8.217216098952967,
        "gradeBand": "descent"
      },
      {
        "lat": 24.426082,
        "lng": 118.250631,
        "ele": 7.5,
        "distanceKm": 8.954326648815815,
        "gradePct": -0.7327742015167598,
        "smoothedEle": 8.243749586025206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.426104,
        "lng": 118.250872,
        "ele": 8,
        "distanceKm": 8.978848444550222,
        "gradePct": -0.5704250806753398,
        "smoothedEle": 8.28764917973785,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42622375,
        "lng": 118.2512895,
        "ele": 7.937500000000001,
        "distanceKm": 9.02316496708511,
        "gradePct": -0.1586095260996464,
        "smoothedEle": 8.61087175938719,
        "gradeBand": "descent"
      },
      {
        "lat": 24.426343499999998,
        "lng": 118.251707,
        "ele": 7.875000000000001,
        "distanceKm": 9.067481451351044,
        "gradePct": 0.34705456406590274,
        "smoothedEle": 9.24109636398833,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42646325,
        "lng": 118.25212450000001,
        "ele": 7.812499999999999,
        "distanceKm": 9.11179789734934,
        "gradePct": 0.9503389143529047,
        "smoothedEle": 10.202613335818388,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426583,
        "lng": 118.252542,
        "ele": 7.75,
        "distanceKm": 9.156114305076844,
        "gradePct": 1.579994414162001,
        "smoothedEle": 11.406938725794863,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4267135681939,
        "lng": 118.25300575452842,
        "ele": 10.028003462520115,
        "distanceKm": 9.20525932163195,
        "gradePct": 2.0834478527895226,
        "smoothedEle": 12.64717263074608,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426852,
        "lng": 118.253467,
        "ele": 12.5,
        "distanceKm": 9.254428351591422,
        "gradePct": 2.112418381246196,
        "smoothedEle": 13.280305029597791,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426944499999998,
        "lng": 118.253863,
        "ele": 15.75,
        "distanceKm": 9.295818523977593,
        "gradePct": 1.8344057884362521,
        "smoothedEle": 13.524726562901385,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427037,
        "lng": 118.254259,
        "ele": 19,
        "distanceKm": 9.337208667889964,
        "gradePct": 1.4502074939034981,
        "smoothedEle": 13.79358150043323,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427064,
        "lng": 118.254661,
        "ele": 21.5,
        "distanceKm": 9.378018473554764,
        "gradePct": 1.0635644980049153,
        "smoothedEle": 14.08684589363865,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426999,
        "lng": 118.255001,
        "ele": 22.75,
        "distanceKm": 9.413191324436186,
        "gradePct": 0.8350869227467161,
        "smoothedEle": 14.419484101636725,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426842,
        "lng": 118.255405,
        "ele": 17.125000000000114,
        "distanceKm": 9.457662907456259,
        "gradePct": 0.8432421514862941,
        "smoothedEle": 14.985890366909237,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426685,
        "lng": 118.255809,
        "ele": 11.5,
        "distanceKm": 9.502134537294326,
        "gradePct": 1.0100748311703835,
        "smoothedEle": 15.585902692057918,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42664,
        "lng": 118.256,
        "ele": 10.75,
        "distanceKm": 9.522108698270443,
        "gradePct": 1.094097220499169,
        "smoothedEle": 15.883692170633767,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426716100292435,
        "lng": 118.25648848160685,
        "ele": 11.135643373829183,
        "distanceKm": 9.572282343451132,
        "gradePct": 1.2211162937036864,
        "smoothedEle": 16.487857929103033,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.426792,
        "lng": 118.256977,
        "ele": 11.5,
        "distanceKm": 9.62245587366631,
        "gradePct": 1.1682959095673593,
        "smoothedEle": 16.874072591285717,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.427361,
        "lng": 118.257077,
        "ele": 15.5,
        "distanceKm": 9.686530767744888,
        "gradePct": 0.7683388030876915,
        "smoothedEle": 16.91205385513837,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42771043355165,
        "lng": 118.25737548172405,
        "ele": 18.226370401582084,
        "distanceKm": 9.735753780511624,
        "gradePct": 0.8476645422283968,
        "smoothedEle": 17.74332846123295,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428025216775826,
        "lng": 118.25772524086203,
        "ele": 21.238185200791097,
        "distanceKm": 9.78554368410854,
        "gradePct": 1.4474979055869264,
        "smoothedEle": 19.48493394432321,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.42834,
        "lng": 118.258075,
        "ele": 24.25,
        "distanceKm": 9.835333524862282,
        "gradePct": 2.36676381481665,
        "smoothedEle": 21.615233623594264,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428229,
        "lng": 118.258258,
        "ele": 23,
        "distanceKm": 9.857595457885058,
        "gradePct": 2.827171500401254,
        "smoothedEle": 22.549245057966807,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.428306,
        "lng": 118.25848,
        "ele": 22.75,
        "distanceKm": 9.881646550946135,
        "gradePct": 3.2710011892365354,
        "smoothedEle": 23.451161047757196,
        "gradeBand": "hard"
      },
      {
        "lat": 24.428498,
        "lng": 118.258873,
        "ele": 22.25,
        "distanceKm": 9.926800220133158,
        "gradePct": 3.5661982102775416,
        "smoothedEle": 24.724517815044166,
        "gradeBand": "hard"
      },
      {
        "lat": 24.4289715,
        "lng": 118.258893,
        "ele": 26.249999999999932,
        "distanceKm": 9.97949001058964,
        "gradePct": 3.1213351338975657,
        "smoothedEle": 25.515852225637147,
        "gradeBand": "hard"
      },
      {
        "lat": 24.429445,
        "lng": 118.258913,
        "ele": 30.25,
        "distanceKm": 10.03217980075443,
        "gradePct": 2.0733056156824965,
        "smoothedEle": 25.626910150333547,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.429839,
        "lng": 118.258868,
        "ele": 33.75,
        "distanceKm": 10.076226898414825,
        "gradePct": 0.9823412349130488,
        "smoothedEle": 25.212606547659206,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.429445,
        "lng": 118.258913,
        "ele": 30.25,
        "distanceKm": 10.120273996075221,
        "gradePct": -0.03881138967105727,
        "smoothedEle": 24.462852150181867,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428971500000003,
        "lng": 118.258893,
        "ele": 26.25,
        "distanceKm": 10.172963786239615,
        "gradePct": -0.9959125781724757,
        "smoothedEle": 23.426011384380924,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428498,
        "lng": 118.258873,
        "ele": 22.25,
        "distanceKm": 10.225653576696493,
        "gradePct": -1.7938921452201335,
        "smoothedEle": 22.02537008486152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.428063,
        "lng": 118.25886666666666,
        "ele": 19.416666666666668,
        "distanceKm": 10.274027686240736,
        "gradePct": -2.50818598200563,
        "smoothedEle": 20.216920203703914,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427628,
        "lng": 118.25886033333333,
        "ele": 16.583333333333336,
        "distanceKm": 10.322401795814681,
        "gradePct": -3.2585395913661275,
        "smoothedEle": 17.90390167693112,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427193,
        "lng": 118.258854,
        "ele": 13.75,
        "distanceKm": 10.37077590541754,
        "gradePct": -3.943478722468837,
        "smoothedEle": 15.582107518134002,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427109,
        "lng": 118.258791,
        "ele": 13.25,
        "distanceKm": 10.382086283691335,
        "gradePct": -4.038780993651847,
        "smoothedEle": 15.105948021102018,
        "gradeBand": "descent"
      },
      {
        "lat": 24.427087,
        "lng": 118.258769,
        "ele": 13.25,
        "distanceKm": 10.385394651359631,
        "gradePct": -4.0634568118123555,
        "smoothedEle": 14.96865076286772,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42703,
        "lng": 118.258752,
        "ele": 12.75,
        "distanceKm": 10.391962298096066,
        "gradePct": -4.112442315498589,
        "smoothedEle": 14.696093423305646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.426956,
        "lng": 118.258795,
        "ele": 12.25,
        "distanceKm": 10.401271393693392,
        "gradePct": -4.12770420797066,
        "smoothedEle": 14.418107964254833,
        "gradeBand": "descent"
      },
      {
        "lat": 24.426938,
        "lng": 118.258855,
        "ele": 12.25,
        "distanceKm": 10.407667157016881,
        "gradePct": -4.120489697629873,
        "smoothedEle": 14.262519792323692,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42647233075316,
        "lng": 118.2588458681271,
        "ele": 10.268900334393368,
        "distanceKm": 10.45945553933112,
        "gradePct": -3.9171491685765614,
        "smoothedEle": 12.92739669745083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.42600666537658,
        "lng": 118.25883643406354,
        "ele": 8.75945016719671,
        "distanceKm": 10.51124404663782,
        "gradePct": -3.343432208375272,
        "smoothedEle": 11.750547453762774,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425541,
        "lng": 118.258827,
        "ele": 7.25,
        "distanceKm": 10.563032554009515,
        "gradePct": -2.637897830219559,
        "smoothedEle": 10.677966617157413,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425384,
        "lng": 118.259188,
        "ele": 8.375,
        "distanceKm": 10.603536640872857,
        "gradePct": -2.220319615556307,
        "smoothedEle": 9.922362618391107,
        "gradeBand": "descent"
      },
      {
        "lat": 24.425227,
        "lng": 118.259549,
        "ele": 9.5,
        "distanceKm": 10.64404076877957,
        "gradePct": -1.9883144597936138,
        "smoothedEle": 9.348166098604004,
        "gradeBand": "descent"
      }
    ],
    "summary": {
      "distanceKm": 10.64404076877957,
      "elevationGainM": 54.40635595605916,
      "elevationLossM": 51.91587756465347,
      "minimumElevationM": 3.75,
      "maximumElevationM": 33.75,
      "maximumSustainedGradePct": 3.5661982102775416
    },
    "climbs": [
      {
        "startIndex": 74,
        "endIndex": 222,
        "startDistanceKm": 3.46880774301866,
        "endDistanceKm": 10.03217980075443,
        "distanceKm": 6.563372057735769,
        "gainM": 34.240975550463446,
        "averageGradePct": 0.5216979206611653,
        "maximumGradePct": 3.5661982102775416
      }
    ]
  },
  "kinmen-taiwu": {
    "routeId": "kinmen-taiwu",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-01T05:00:18.102Z",
      "reviewStatus": "approved",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "SRTM 100/100 公尺視窗為爬升 139 公尺、最大坡度 7.84%；500/200、750/300、1000/500 依序為 86/5.11%、63/3.65%、50/2.49%。採 500/200 保留外圍公路起伏並壓低 SRTM 短波；僅供行程規劃，並非道路測量。",
        "referenceUrl": "https://kinmen.travel/zh-tw/discover/tour/580",
        "referenceLabel": "金門縣政府觀光處金湖自行車路線"
      },
      "reviewedAt": "2026-08-01T05:02:17.708Z",
      "reviewerNote": "初版為進入太武山而導入大量 service、footway、path、track，含 access=no、bicycle=no 登山路徑；已完全放棄登頂造型，改為太湖、環島南路、環島東路與伯玉路周邊公共道路的「太武山外圍環線」。核准版 raw 特殊道路、權限禁制、ferry 與非法逆向單行均為 0；live OSM 五窗 5/5 於 0.02 公尺內命中市港路、環島南路三、四段與一般公共道路 way。本線不進玉章路、軍事區或登山禁行路徑，絕不代表太武山登頂路線。"
    },
    "waypoints": [
      {
        "name": "山外車站外黃海路",
        "lat": 24.44231,
        "lng": 118.41426,
        "role": "start"
      },
      {
        "name": "伯玉路東側外圍公共道路",
        "lat": 24.4354282,
        "lng": 118.3751262,
        "role": "via"
      },
      {
        "name": "環島東路周邊公共道路",
        "lat": 24.4445079,
        "lng": 118.4295978,
        "role": "via"
      },
      {
        "name": "太湖西側公共道路",
        "lat": 24.4423375,
        "lng": 118.4262519,
        "role": "via"
      },
      {
        "name": "山外車站外黃海路",
        "lat": 24.44231,
        "lng": 118.41426,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.44227,
        "lng": 118.414333,
        "ele": 28.25,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 26.587803099086624,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441934,
        "lng": 118.414121,
        "ele": 28,
        "distanceKm": 0.04308650878854942,
        "gradePct": 0.20957021522688768,
        "smoothedEle": 26.67809958828854,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441667,
        "lng": 118.413903,
        "ele": 27,
        "distanceKm": 0.08007900382627725,
        "gradePct": 0.28070419031274985,
        "smoothedEle": 26.812588218387692,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441246,
        "lng": 118.413538,
        "ele": 25.75,
        "distanceKm": 0.13971709129410886,
        "gradePct": 0.3236868359049505,
        "smoothedEle": 27.040048931114956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440822,
        "lng": 118.413279,
        "ele": 25.75,
        "distanceKm": 0.19366368027009193,
        "gradePct": 0.35041025934309217,
        "smoothedEle": 27.26642050337443,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440836,
        "lng": 118.413227,
        "ele": 25.5,
        "distanceKm": 0.19915304413563364,
        "gradePct": 0.3546143373154576,
        "smoothedEle": 27.294028346791762,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44082,
        "lng": 118.413122,
        "ele": 25.5,
        "distanceKm": 0.20993014268515517,
        "gradePct": 0.3688496452169421,
        "smoothedEle": 27.346313010918124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440791,
        "lng": 118.413079,
        "ele": 25.5,
        "distanceKm": 0.21534737137070506,
        "gradePct": 0.37585662654708507,
        "smoothedEle": 27.37167987139405,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44075,
        "lng": 118.413046,
        "ele": 25.5,
        "distanceKm": 0.22099929052053474,
        "gradePct": 0.38285617900331737,
        "smoothedEle": 27.397523715433262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440701,
        "lng": 118.413029,
        "ele": 25.75,
        "distanceKm": 0.22671316629532962,
        "gradePct": 0.39921369724384453,
        "smoothedEle": 27.44221333367335,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44065,
        "lng": 118.41303,
        "ele": 26,
        "distanceKm": 0.23238501884089943,
        "gradePct": 0.4172093925548097,
        "smoothedEle": 27.490091237882385,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440602,
        "lng": 118.413048,
        "ele": 26.25,
        "distanceKm": 0.23802485121045203,
        "gradePct": 0.43455175745817165,
        "smoothedEle": 27.536595376524417,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440562,
        "lng": 118.413082,
        "ele": 26.5,
        "distanceKm": 0.24364884517509447,
        "gradePct": 0.4508833952326299,
        "smoothedEle": 27.5819107893891,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440533,
        "lng": 118.413129,
        "ele": 26.75,
        "distanceKm": 0.24939650751817577,
        "gradePct": 0.4630640516337969,
        "smoothedEle": 27.62716810377243,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440187919797637,
        "lng": 118.4129006459292,
        "ele": 27.664728850160103,
        "distanceKm": 0.29419299566345064,
        "gradePct": 0.5699582240914332,
        "smoothedEle": 28.006335679250867,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439843,
        "lng": 118.412672,
        "ele": 28.25,
        "distanceKm": 0.3389894982382974,
        "gradePct": 0.7776278676915833,
        "smoothedEle": 28.592529613808185,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43943755550793,
        "lng": 118.41239206753717,
        "ele": 28.371183514025834,
        "distanceKm": 0.3922394839619359,
        "gradePct": 1.1718134529344404,
        "smoothedEle": 29.60407117305112,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43903194452596,
        "lng": 118.41211242679513,
        "ele": 29.52536110499035,
        "distanceKm": 0.4454894874477928,
        "gradePct": 1.6343501229646868,
        "smoothedEle": 30.86510432337723,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438626274215927,
        "lng": 118.41183289087446,
        "ele": 31.51417809974927,
        "distanceKm": 0.49873948719291855,
        "gradePct": 2.154600656424348,
        "smoothedEle": 32.37503105089662,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43822078393405,
        "lng": 118.41155304149518,
        "ele": 33.49637067569552,
        "distanceKm": 0.5519894540990619,
        "gradePct": 2.5210266794036045,
        "smoothedEle": 33.88153131340433,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437815391967025,
        "lng": 118.4112730207476,
        "ele": 35.37318533784776,
        "distanceKm": 0.6052394463618307,
        "gradePct": 2.7333106411459163,
        "smoothedEle": 35.378549403063424,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43741,
        "lng": 118.410993,
        "ele": 37.25,
        "distanceKm": 0.6584894871444854,
        "gradePct": 2.8036148410536743,
        "smoothedEle": 36.84095460818377,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436963,
        "lng": 118.410647,
        "ele": 40,
        "distanceKm": 0.7192956440596807,
        "gradePct": 2.6168422337288613,
        "smoothedEle": 38.19027185566643,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436464,
        "lng": 118.410313,
        "ele": 41.5,
        "distanceKm": 0.7842725504667688,
        "gradePct": 2.075071949130329,
        "smoothedEle": 38.93925054076893,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43592,
        "lng": 118.409907,
        "ele": 42.5,
        "distanceKm": 0.8574050637453838,
        "gradePct": 1.157174367192216,
        "smoothedEle": 39.125521836299065,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436159,
        "lng": 118.409243,
        "ele": 41,
        "distanceKm": 0.9296875959993826,
        "gradePct": 0.27917605699094483,
        "smoothedEle": 38.868410381926594,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436392,
        "lng": 118.408807,
        "ele": 38.5,
        "distanceKm": 0.9808679638811718,
        "gradePct": -0.3927163852871479,
        "smoothedEle": 38.11457363061953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436738319791658,
        "lng": 118.40847503489296,
        "ele": 36.080664422246215,
        "distanceKm": 1.0319788804292065,
        "gradePct": -1.1084400382935482,
        "smoothedEle": 36.84388030281184,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437083,
        "lng": 118.408141,
        "ele": 35.25,
        "distanceKm": 1.083090899094017,
        "gradePct": -1.8357364246299857,
        "smoothedEle": 35.362683586888856,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437321719176413,
        "lng": 118.40780068493389,
        "ele": 35.094178083281506,
        "distanceKm": 1.1265822856344219,
        "gradePct": -2.4158572435952945,
        "smoothedEle": 34.047741590553734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43756,
        "lng": 118.40746,
        "ele": 34.5,
        "distanceKm": 1.1700735746557993,
        "gradePct": -2.6819985959544512,
        "smoothedEle": 32.90956723230541,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437779,
        "lng": 118.407133,
        "ele": 31.5,
        "distanceKm": 1.2111690072991341,
        "gradePct": -2.6348875951013655,
        "smoothedEle": 32.091469478674746,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438151,
        "lng": 118.406595,
        "ele": 27.25,
        "distanceKm": 1.2795597189726522,
        "gradePct": -2.187655436081729,
        "smoothedEle": 31.089704270702445,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438467,
        "lng": 118.405961,
        "ele": 27.25,
        "distanceKm": 1.3527302858219707,
        "gradePct": -1.5739087504434974,
        "smoothedEle": 30.215626521059107,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438442,
        "lng": 118.405582,
        "ele": 28.5,
        "distanceKm": 1.3911980509290909,
        "gradePct": -1.366684346488205,
        "smoothedEle": 29.755667948112386,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438318,
        "lng": 118.405005,
        "ele": 30.75,
        "distanceKm": 1.451214663376547,
        "gradePct": -1.1921646249225477,
        "smoothedEle": 29.12056430342792,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43819625,
        "lng": 118.404514,
        "ele": 30.25,
        "distanceKm": 1.5027306528508573,
        "gradePct": -0.9504323558756076,
        "smoothedEle": 28.912045232851447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4380745,
        "lng": 118.40402300000001,
        "ele": 29.75,
        "distanceKm": 1.5542466886349595,
        "gradePct": -0.5026678139795743,
        "smoothedEle": 29.19215928415589,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437952749999997,
        "lng": 118.403532,
        "ele": 29.25,
        "distanceKm": 1.6057627707299247,
        "gradePct": 0.022741403599479078,
        "smoothedEle": 29.647024984927086,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437831,
        "lng": 118.403041,
        "ele": 28.75,
        "distanceKm": 1.6572788991326592,
        "gradePct": 0.5271636079902626,
        "smoothedEle": 30.150345571314954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437699,
        "lng": 118.402321,
        "ele": 28.75,
        "distanceKm": 1.7316300087848548,
        "gradePct": 0.7352335824799623,
        "smoothedEle": 30.539650181174338,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437706,
        "lng": 118.402065,
        "ele": 29.5,
        "distanceKm": 1.7575574183101377,
        "gradePct": 0.7271887115621125,
        "smoothedEle": 30.67576908118207,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437882,
        "lng": 118.401409,
        "ele": 31.5,
        "distanceKm": 1.8267900138217912,
        "gradePct": 0.6125454578687928,
        "smoothedEle": 31.077555335871853,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43805,
        "lng": 118.400987,
        "ele": 33,
        "distanceKm": 1.8734161923287267,
        "gradePct": 0.5729498935937302,
        "smoothedEle": 31.380740703108156,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4382555,
        "lng": 118.4004985,
        "ele": 32.9375,
        "distanceKm": 1.9278925923244359,
        "gradePct": 0.5694452583657058,
        "smoothedEle": 31.65897147474537,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438461,
        "lng": 118.40001000000001,
        "ele": 32.875,
        "distanceKm": 1.9823689191517493,
        "gradePct": 0.49802662230804107,
        "smoothedEle": 31.815814038411407,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4386665,
        "lng": 118.3995215,
        "ele": 32.8125,
        "distanceKm": 2.0368451728127224,
        "gradePct": 0.3912338491012567,
        "smoothedEle": 31.92540641244477,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438872,
        "lng": 118.399033,
        "ele": 32.75,
        "distanceKm": 2.0913213533054926,
        "gradePct": 0.3738991411652589,
        "smoothedEle": 32.21998714932701,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439009666666667,
        "lng": 118.39862333333333,
        "ele": 31.750000000000004,
        "distanceKm": 2.135527864900368,
        "gradePct": 0.27322862661066166,
        "smoothedEle": 32.22741140915763,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439147333333334,
        "lng": 118.39821366666666,
        "ele": 30.749999999999996,
        "distanceKm": 2.1797343340140283,
        "gradePct": 0.12114605572321228,
        "smoothedEle": 32.050520926858006,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439285,
        "lng": 118.397804,
        "ele": 29.75,
        "distanceKm": 2.223940760646255,
        "gradePct": -0.09755336089790304,
        "smoothedEle": 31.70433929378266,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439305,
        "lng": 118.397405,
        "ele": 30.5,
        "distanceKm": 2.264393510833516,
        "gradePct": -0.37373139930022037,
        "smoothedEle": 31.32691165162964,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439224,
        "lng": 118.396836,
        "ele": 34.5,
        "distanceKm": 2.3226944645637677,
        "gradePct": -0.7382449130818334,
        "smoothedEle": 30.748766278375438,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438864,
        "lng": 118.396262,
        "ele": 31.75,
        "distanceKm": 2.393255620050313,
        "gradePct": -1.0257747390764296,
        "smoothedEle": 29.893085919429918,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438794,
        "lng": 118.396014,
        "ele": 30.25,
        "distanceKm": 2.419540179826805,
        "gradePct": -1.0794228152377885,
        "smoothedEle": 29.579954721814055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438821,
        "lng": 118.395671,
        "ele": 28.75,
        "distanceKm": 2.4543924477719434,
        "gradePct": -1.1411989239565041,
        "smoothedEle": 29.137824583153865,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439048,
        "lng": 118.395123,
        "ele": 28,
        "distanceKm": 2.515340225609051,
        "gradePct": -1.255122532476476,
        "smoothedEle": 28.311450024246877,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439218,
        "lng": 118.394748,
        "ele": 27.75,
        "distanceKm": 2.55774832836403,
        "gradePct": -1.4228134802764074,
        "smoothedEle": 27.478048450868847,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439379,
        "lng": 118.394205,
        "ele": 26,
        "distanceKm": 2.6155590996692792,
        "gradePct": -1.8279401025333029,
        "smoothedEle": 25.9715016149424,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439431450943523,
        "lng": 118.39383635950972,
        "ele": 25.340355683711465,
        "distanceKm": 2.65333028791175,
        "gradePct": -1.9676105591717583,
        "smoothedEle": 25.216077850092987,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439496,
        "lng": 118.39347,
        "ele": 24.25,
        "distanceKm": 2.691105703697779,
        "gradePct": -2.016680016998343,
        "smoothedEle": 24.606679367344032,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439694930474793,
        "lng": 118.39308883251682,
        "ele": 23.20665834898135,
        "distanceKm": 2.7355826402907035,
        "gradePct": -1.9268221126410305,
        "smoothedEle": 24.06000304079547,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43989386094959,
        "lng": 118.39270766503365,
        "ele": 22.163316697962692,
        "distanceKm": 2.780059524063387,
        "gradePct": -1.5809216451181922,
        "smoothedEle": 23.734776120201204,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440092,
        "lng": 118.392326,
        "ele": 21,
        "distanceKm": 2.824536400422021,
        "gradePct": -1.0268071444929499,
        "smoothedEle": 23.738341310901667,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440491,
        "lng": 118.391854,
        "ele": 21.75,
        "distanceKm": 2.8897395671525805,
        "gradePct": -0.22085143258583156,
        "smoothedEle": 24.187015214931684,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4402435,
        "lng": 118.39152,
        "ele": 22.25,
        "distanceKm": 2.933335336245464,
        "gradePct": 0.30288180151192606,
        "smoothedEle": 24.693388778215258,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439996,
        "lng": 118.391186,
        "ele": 22.75,
        "distanceKm": 2.976931156817664,
        "gradePct": 0.8410624327279657,
        "smoothedEle": 25.43977644723431,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439889,
        "lng": 118.390857,
        "ele": 24.75,
        "distanceKm": 3.0122977117996546,
        "gradePct": 1.2464436882170797,
        "smoothedEle": 26.23024765488853,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439804,
        "lng": 118.390463,
        "ele": 27.75,
        "distanceKm": 3.053287524365334,
        "gradePct": 1.6386054094146982,
        "smoothedEle": 27.21339342597061,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439775,
        "lng": 118.390342,
        "ele": 28.5,
        "distanceKm": 3.0659538990704824,
        "gradePct": 1.7606249260030575,
        "smoothedEle": 27.54459190360116,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439702,
        "lng": 118.390202,
        "ele": 29.5,
        "distanceKm": 3.082286303553044,
        "gradePct": 1.9167531797887865,
        "smoothedEle": 27.969234420147757,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439675,
        "lng": 118.390173,
        "ele": 29.75,
        "distanceKm": 3.0864853577128657,
        "gradePct": 1.9568936866091138,
        "smoothedEle": 28.078409828303116,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439438,
        "lng": 118.390096,
        "ele": 29.75,
        "distanceKm": 3.1139672174427813,
        "gradePct": 2.1571350599655688,
        "smoothedEle": 28.782694330797703,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438915,
        "lng": 118.389927,
        "ele": 31,
        "distanceKm": 3.1745865095923818,
        "gradePct": 2.28615233493119,
        "smoothedEle": 29.971939292624036,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438512,
        "lng": 118.389464,
        "ele": 34.25,
        "distanceKm": 3.239432001908091,
        "gradePct": 1.9179000381241293,
        "smoothedEle": 30.716867066518674,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438139,
        "lng": 118.389234,
        "ele": 34.125,
        "distanceKm": 3.286996299764663,
        "gradePct": 1.293820984034906,
        "smoothedEle": 30.679145836306546,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437766,
        "lng": 118.389004,
        "ele": 34,
        "distanceKm": 3.3345606313394556,
        "gradePct": 0.35574287145128347,
        "smoothedEle": 29.898186997156,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437249,
        "lng": 118.388666,
        "ele": 31.5,
        "distanceKm": 3.4014609326670997,
        "gradePct": -1.0267258599630216,
        "smoothedEle": 28.227213799315017,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436764,
        "lng": 118.388407,
        "ele": 27.875,
        "distanceKm": 3.4614264977506126,
        "gradePct": -2.3422517618364562,
        "smoothedEle": 26.014920639692278,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436279,
        "lng": 118.388148,
        "ele": 24.25,
        "distanceKm": 3.521392106930447,
        "gradePct": -3.5199714682876295,
        "smoothedEle": 23.07445808473062,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436057,
        "lng": 118.387845,
        "ele": 20,
        "distanceKm": 3.5607654794317525,
        "gradePct": -4.114510934263292,
        "smoothedEle": 21.01464492548006,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436037,
        "lng": 118.387735,
        "ele": 19.5,
        "distanceKm": 3.5721211815306404,
        "gradePct": -4.287817234093012,
        "smoothedEle": 20.3844002124617,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436037,
        "lng": 118.387565,
        "ele": 19.25,
        "distanceKm": 3.5893310688212163,
        "gradePct": -4.551200744336689,
        "smoothedEle": 19.42778071254263,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436129998614234,
        "lng": 118.3870869997695,
        "ele": 15.932043883519185,
        "distanceKm": 3.6388138288929857,
        "gradePct": -5.047544418601917,
        "smoothedEle": 16.754074797862074,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436223,
        "lng": 118.386609,
        "ele": 12,
        "distanceKm": 3.6882965728285737,
        "gradePct": -5.219655458018369,
        "smoothedEle": 14.25801367658122,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436312333333333,
        "lng": 118.38615166666668,
        "ele": 10.08333333333334,
        "distanceKm": 3.735648101623872,
        "gradePct": -5.088852083931207,
        "smoothedEle": 12.150953300811015,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436401666666665,
        "lng": 118.38569433333333,
        "ele": 8.16666666666666,
        "distanceKm": 3.7829995983502247,
        "gradePct": -4.723663126764436,
        "smoothedEle": 10.332392157003744,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436491,
        "lng": 118.385237,
        "ele": 6.25,
        "distanceKm": 3.830351063004876,
        "gradePct": -4.1569638989142526,
        "smoothedEle": 8.897416303055032,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436385,
        "lng": 118.385211,
        "ele": 6,
        "distanceKm": 3.842428053469136,
        "gradePct": -4.004834978412748,
        "smoothedEle": 8.56209228658628,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436346,
        "lng": 118.38469266666667,
        "ele": 5.833333333333334,
        "distanceKm": 3.8950800936567505,
        "gradePct": -3.326327793645327,
        "smoothedEle": 7.303503253577588,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436307,
        "lng": 118.38417433333333,
        "ele": 5.666666666666666,
        "distanceKm": 3.947732150018656,
        "gradePct": -2.6183878138244725,
        "smoothedEle": 6.450082926640347,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436268,
        "lng": 118.383656,
        "ele": 5.5,
        "distanceKm": 4.000384222554829,
        "gradePct": -1.954123716826945,
        "smoothedEle": 5.897307461915127,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436228999999997,
        "lng": 118.38318925,
        "ele": 5.4375,
        "distanceKm": 4.047833992173241,
        "gradePct": -1.4113877797825372,
        "smoothedEle": 5.610093716063615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43619,
        "lng": 118.3827225,
        "ele": 5.375,
        "distanceKm": 4.095283776344706,
        "gradePct": -0.8887720082662228,
        "smoothedEle": 5.522657809557645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436151000000002,
        "lng": 118.38225575,
        "ele": 5.3125,
        "distanceKm": 4.142733575069238,
        "gradePct": -0.5105385471441588,
        "smoothedEle": 5.5100261335959315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436112,
        "lng": 118.381789,
        "ele": 5.25,
        "distanceKm": 4.190183388346852,
        "gradePct": -0.24017014764632694,
        "smoothedEle": 5.52406211271459,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43606,
        "lng": 118.38124166666667,
        "ele": 5.416666666666666,
        "distanceKm": 4.245893332242029,
        "gradePct": -0.023184135520981176,
        "smoothedEle": 5.575472271460428,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436008,
        "lng": 118.38069433333332,
        "ele": 5.583333333333334,
        "distanceKm": 4.301603298864909,
        "gradePct": 0.0688023964097692,
        "smoothedEle": 5.658580273624402,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435956,
        "lng": 118.380147,
        "ele": 5.75,
        "distanceKm": 4.357313288212585,
        "gradePct": 0.12615756099903386,
        "smoothedEle": 5.766654034403871,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435906637504843,
        "lng": 118.37968115250986,
        "ele": 5.882694879455428,
        "distanceKm": 4.404791572103488,
        "gradePct": 0.1645509173185332,
        "smoothedEle": 5.866644647445883,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435857275009685,
        "lng": 118.37921530501971,
        "ele": 6.0153897589108585,
        "distanceKm": 4.452269874333371,
        "gradePct": 0.17983832143148054,
        "smoothedEle": 5.9446614253883,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435807912514527,
        "lng": 118.37874945752958,
        "ele": 6.148084638366287,
        "distanceKm": 4.499748194899343,
        "gradePct": 0.18732256689566934,
        "smoothedEle": 6.030457967517091,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43575855001937,
        "lng": 118.37828361003943,
        "ele": 6.280779517821715,
        "distanceKm": 4.547226533804228,
        "gradePct": 0.19478643386598044,
        "smoothedEle": 6.1366592537529385,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43570918752421,
        "lng": 118.3778177625493,
        "ele": 6.4134743972771435,
        "distanceKm": 4.594704891045131,
        "gradePct": 0.20893174367702444,
        "smoothedEle": 6.26326529828752,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43565996376239,
        "lng": 118.37735189761791,
        "ele": 6.370937593879776,
        "distanceKm": 4.642183239543077,
        "gradePct": 0.22546009566483854,
        "smoothedEle": 6.379007166713206,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435611,
        "lng": 118.376886,
        "ele": 6,
        "distanceKm": 4.689661569252246,
        "gradePct": 0.233932895979496,
        "smoothedEle": 6.480096543518306,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435560666666667,
        "lng": 118.37644766666666,
        "ele": 6.333333333333336,
        "distanceKm": 4.734387802102038,
        "gradePct": 0.21306898302348937,
        "smoothedEle": 6.534079074812978,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435510333333333,
        "lng": 118.37600933333333,
        "ele": 6.666666666666664,
        "distanceKm": 4.779114052524977,
        "gradePct": 0.16270696192398257,
        "smoothedEle": 6.547104607706459,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43546,
        "lng": 118.375571,
        "ele": 7,
        "distanceKm": 4.823840320521029,
        "gradePct": 0.09409849493831182,
        "smoothedEle": 6.522488116812566,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435428,
        "lng": 118.375126,
        "ele": 7,
        "distanceKm": 4.869030248552055,
        "gradePct": 0.04126226777050187,
        "smoothedEle": 6.518693515368168,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43546,
        "lng": 118.375571,
        "ele": 7,
        "distanceKm": 4.914220176583081,
        "gradePct": 0.00637522492843256,
        "smoothedEle": 6.522488116812566,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435510333333333,
        "lng": 118.37600933333333,
        "ele": 6.666666666666664,
        "distanceKm": 4.958946444579133,
        "gradePct": 0.002936685259745439,
        "smoothedEle": 6.54710460770646,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435560666666667,
        "lng": 118.37644766666666,
        "ele": 6.333333333333336,
        "distanceKm": 5.003672695002072,
        "gradePct": 0.00024553942126948037,
        "smoothedEle": 6.534079074812979,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.435611,
        "lng": 118.376886,
        "ele": 6,
        "distanceKm": 5.0483989278518635,
        "gradePct": -0.020164692652179888,
        "smoothedEle": 6.480096543518307,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43565996376239,
        "lng": 118.37735189761791,
        "ele": 6.370937593879776,
        "distanceKm": 5.095877257561033,
        "gradePct": -0.07097034694759811,
        "smoothedEle": 6.379007166713206,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43570918752421,
        "lng": 118.3778177625493,
        "ele": 6.4134743972771435,
        "distanceKm": 5.143355606058979,
        "gradePct": -0.13762920357577124,
        "smoothedEle": 6.26326529828752,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43575855001937,
        "lng": 118.37828361003943,
        "ele": 6.280779517821715,
        "distanceKm": 5.190833963299882,
        "gradePct": -0.20057940909647812,
        "smoothedEle": 6.1366592537529385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.435807912514527,
        "lng": 118.37874945752958,
        "ele": 6.148084638366287,
        "distanceKm": 5.238312302204767,
        "gradePct": -0.2309063374787155,
        "smoothedEle": 6.030457967517091,
        "gradeBand": "descent"
      },
      {
        "lat": 24.435857275009685,
        "lng": 118.37921530501971,
        "ele": 6.0153897589108585,
        "distanceKm": 5.2857906227707385,
        "gradePct": -0.22791094455066022,
        "smoothedEle": 5.944661425388301,
        "gradeBand": "descent"
      },
      {
        "lat": 24.435906637504843,
        "lng": 118.37968115250986,
        "ele": 5.882694879455428,
        "distanceKm": 5.333268925000622,
        "gradePct": -0.21060489072102745,
        "smoothedEle": 5.866644647445883,
        "gradeBand": "descent"
      },
      {
        "lat": 24.435956,
        "lng": 118.380147,
        "ele": 5.75,
        "distanceKm": 5.380747208891525,
        "gradePct": -0.1984513066392813,
        "smoothedEle": 5.766654034403871,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436008,
        "lng": 118.38069433333332,
        "ele": 5.583333333333334,
        "distanceKm": 5.436457198239201,
        "gradePct": -0.18801362917112946,
        "smoothedEle": 5.658580273624401,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43606,
        "lng": 118.38124166666667,
        "ele": 5.416666666666666,
        "distanceKm": 5.492167164862081,
        "gradePct": -0.17935558099087096,
        "smoothedEle": 5.575472271460427,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436112,
        "lng": 118.381789,
        "ele": 5.25,
        "distanceKm": 5.547877108757258,
        "gradePct": -0.1559086426206918,
        "smoothedEle": 5.5240621127145895,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436151000000002,
        "lng": 118.38225575,
        "ele": 5.3125,
        "distanceKm": 5.595326922034872,
        "gradePct": -0.11417210215612919,
        "smoothedEle": 5.510026133595931,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43619,
        "lng": 118.3827225,
        "ele": 5.375,
        "distanceKm": 5.642776720759404,
        "gradePct": -0.0632475073345326,
        "smoothedEle": 5.522657809557645,
        "gradeBand": "descent"
      },
      {
        "lat": 24.436228999999997,
        "lng": 118.38318925,
        "ele": 5.4375,
        "distanceKm": 5.690226504930869,
        "gradePct": 0.01586318625427817,
        "smoothedEle": 5.610093716063615,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436268,
        "lng": 118.383656,
        "ele": 5.5,
        "distanceKm": 5.737676274549281,
        "gradePct": 0.18191591608190844,
        "smoothedEle": 5.897307461915129,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436307,
        "lng": 118.38417433333333,
        "ele": 5.666666666666668,
        "distanceKm": 5.790328347085453,
        "gradePct": 0.4692890902028864,
        "smoothedEle": 6.450082926640338,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436346,
        "lng": 118.38469266666667,
        "ele": 5.833333333333332,
        "distanceKm": 5.842980403447359,
        "gradePct": 0.8902350585593083,
        "smoothedEle": 7.303503253577573,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436385,
        "lng": 118.385211,
        "ele": 6,
        "distanceKm": 5.895632443634973,
        "gradePct": 1.4596381952335349,
        "smoothedEle": 8.562092286586267,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436491,
        "lng": 118.385237,
        "ele": 6.25,
        "distanceKm": 5.9077094340992335,
        "gradePct": 1.5906553893347306,
        "smoothedEle": 8.897228771969491,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436401666666665,
        "lng": 118.38569433333333,
        "ele": 8.166666666666679,
        "distanceKm": 5.955060898753885,
        "gradePct": 2.1354483226236076,
        "smoothedEle": 10.350719120548975,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436312333333333,
        "lng": 118.38615166666668,
        "ele": 10.083333333333321,
        "distanceKm": 6.002412395480238,
        "gradePct": 2.752496076896827,
        "smoothedEle": 12.150941552598303,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436223,
        "lng": 118.386609,
        "ele": 12,
        "distanceKm": 6.0497639242755366,
        "gradePct": 3.3961730401702437,
        "smoothedEle": 14.2580019283685,
        "gradeBand": "hard"
      },
      {
        "lat": 24.436129998614234,
        "lng": 118.3870869997695,
        "ele": 15.93204388351921,
        "distanceKm": 6.099246668211125,
        "gradePct": 4.0451539084440995,
        "smoothedEle": 16.75269483546267,
        "gradeBand": "hard"
      },
      {
        "lat": 24.436037,
        "lng": 118.387565,
        "ele": 19.25,
        "distanceKm": 6.148729428282894,
        "gradePct": 4.634543742958762,
        "smoothedEle": 19.425457154152408,
        "gradeBand": "hard"
      },
      {
        "lat": 24.436057,
        "lng": 118.387845,
        "ele": 20,
        "distanceKm": 6.177162228585004,
        "gradePct": 4.906987336632814,
        "smoothedEle": 21.00494832621164,
        "gradeBand": "hard"
      },
      {
        "lat": 24.436108,
        "lng": 118.387942,
        "ele": 21.25,
        "distanceKm": 6.188501861079395,
        "gradePct": 4.993844037552868,
        "smoothedEle": 21.609775044396745,
        "gradeBand": "hard"
      },
      {
        "lat": 24.436196,
        "lng": 118.388068,
        "ele": 22.75,
        "distanceKm": 6.204578353183457,
        "gradePct": 5.098545018290806,
        "smoothedEle": 22.44441292613265,
        "gradeBand": "hard"
      },
      {
        "lat": 24.436279,
        "lng": 118.388148,
        "ele": 24.25,
        "distanceKm": 6.216857109371827,
        "gradePct": 5.144089455897775,
        "smoothedEle": 23.08188501824552,
        "gradeBand": "hard"
      },
      {
        "lat": 24.436764,
        "lng": 118.388407,
        "ele": 27.87499999999997,
        "distanceKm": 6.276822718551662,
        "gradePct": 5.199359272185071,
        "smoothedEle": 26.020900726021274,
        "gradeBand": "hard"
      },
      {
        "lat": 24.437249,
        "lng": 118.388666,
        "ele": 31.5,
        "distanceKm": 6.336788283635174,
        "gradePct": 4.725620869359186,
        "smoothedEle": 28.231709781306304,
        "gradeBand": "hard"
      },
      {
        "lat": 24.437766,
        "lng": 118.389004,
        "ele": 34,
        "distanceKm": 6.4036885849628185,
        "gradePct": 3.7516057645502205,
        "smoothedEle": 29.90143065511159,
        "gradeBand": "hard"
      },
      {
        "lat": 24.438139,
        "lng": 118.389234,
        "ele": 34.125,
        "distanceKm": 6.451252916537611,
        "gradePct": 2.949897388469899,
        "smoothedEle": 30.667476352987318,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438512,
        "lng": 118.389464,
        "ele": 34.25,
        "distanceKm": 6.498817214394183,
        "gradePct": 1.9380279336326238,
        "smoothedEle": 30.707849153164098,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438915,
        "lng": 118.389927,
        "ele": 31,
        "distanceKm": 6.563662706709892,
        "gradePct": 0.5301701249786173,
        "smoothedEle": 29.962791183228852,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439438,
        "lng": 118.390096,
        "ele": 29.75,
        "distanceKm": 6.624281998859493,
        "gradePct": -0.7298405726734398,
        "smoothedEle": 28.773416025361907,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439675,
        "lng": 118.390173,
        "ele": 29.75,
        "distanceKm": 6.651763858589408,
        "gradePct": -1.2994869071011947,
        "smoothedEle": 28.068936228806407,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439775,
        "lng": 118.390342,
        "ele": 28.5,
        "distanceKm": 6.672168081969894,
        "gradePct": -1.5734014115296469,
        "smoothedEle": 27.53842642091378,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439889,
        "lng": 118.390857,
        "ele": 24.75,
        "distanceKm": 6.72582130846201,
        "gradePct": -2.0866774158381176,
        "smoothedEle": 26.224224250467955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439996,
        "lng": 118.391186,
        "ele": 22.75,
        "distanceKm": 6.761187863444,
        "gradePct": -2.2787367253887005,
        "smoothedEle": 25.43375304281375,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4402435,
        "lng": 118.39152,
        "ele": 22.250000000000004,
        "distanceKm": 6.804783684016201,
        "gradePct": -2.234730895228125,
        "smoothedEle": 24.686519099530734,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440491,
        "lng": 118.391854,
        "ele": 21.75,
        "distanceKm": 6.848379453109084,
        "gradePct": -1.9862084267945532,
        "smoothedEle": 24.183276432697106,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440092,
        "lng": 118.392326,
        "ele": 21,
        "distanceKm": 6.9135826198396435,
        "gradePct": -1.3860713010051107,
        "smoothedEle": 23.751860659013392,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43989386094959,
        "lng": 118.39270766503365,
        "ele": 22.163316697962703,
        "distanceKm": 6.958059496198278,
        "gradePct": -0.8795640681270022,
        "smoothedEle": 23.74454645351199,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439694930474793,
        "lng": 118.39308883251682,
        "ele": 23.206658348981342,
        "distanceKm": 7.002536379970961,
        "gradePct": -0.3276322990692166,
        "smoothedEle": 24.069773374106248,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439496,
        "lng": 118.39347,
        "ele": 24.25,
        "distanceKm": 7.047013316563885,
        "gradePct": 0.20854539329947902,
        "smoothedEle": 24.616137056887418,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439422,
        "lng": 118.39389,
        "ele": 25.5,
        "distanceKm": 7.090319617566828,
        "gradePct": 0.7145613523172537,
        "smoothedEle": 25.334902668905034,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43936611408217,
        "lng": 118.39425769192142,
        "ele": 26.191375017295453,
        "distanceKm": 7.128056950986095,
        "gradePct": 1.1700844882807881,
        "smoothedEle": 26.08964933729038,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439278,
        "lng": 118.394618,
        "ele": 27.5,
        "distanceKm": 7.165824688868818,
        "gradePct": 1.6455197475209078,
        "smoothedEle": 27.092367123084113,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439048,
        "lng": 118.395123,
        "ele": 28,
        "distanceKm": 7.22298722383088,
        "gradePct": 2.001328876161722,
        "smoothedEle": 28.323653427766555,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438821,
        "lng": 118.395671,
        "ele": 28.75,
        "distanceKm": 7.283935001667988,
        "gradePct": 1.9601112742506273,
        "smoothedEle": 29.14915813530165,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438794,
        "lng": 118.396014,
        "ele": 30.25,
        "distanceKm": 7.318787269613127,
        "gradePct": 1.846285050752208,
        "smoothedEle": 29.596825811335428,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438864,
        "lng": 118.396262,
        "ele": 31.75,
        "distanceKm": 7.345071829389619,
        "gradePct": 1.6800886708425031,
        "smoothedEle": 29.90156464780237,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439224,
        "lng": 118.396836,
        "ele": 34.5,
        "distanceKm": 7.415632984876164,
        "gradePct": 1.2864129810425247,
        "smoothedEle": 30.738068400690373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439305,
        "lng": 118.397405,
        "ele": 30.5,
        "distanceKm": 7.473933938606415,
        "gradePct": 1.1566062548796008,
        "smoothedEle": 31.326911651629644,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439285,
        "lng": 118.397804,
        "ele": 29.75,
        "distanceKm": 7.514386688793676,
        "gradePct": 1.082018858795796,
        "smoothedEle": 31.704339293782745,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439147333333334,
        "lng": 118.39821366666666,
        "ele": 30.75,
        "distanceKm": 7.558593115425903,
        "gradePct": 0.9943305963418991,
        "smoothedEle": 32.05052092685816,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.439009666666667,
        "lng": 118.39862333333333,
        "ele": 31.75,
        "distanceKm": 7.6027995845395635,
        "gradePct": 0.8207415988194484,
        "smoothedEle": 32.227411409157796,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438872,
        "lng": 118.399033,
        "ele": 32.75,
        "distanceKm": 7.647006096134438,
        "gradePct": 0.582524188927811,
        "smoothedEle": 32.21998714932718,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4386665,
        "lng": 118.3995215,
        "ele": 32.8125,
        "distanceKm": 7.701482276627209,
        "gradePct": 0.17073319761052005,
        "smoothedEle": 31.925406412444943,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438461,
        "lng": 118.40001,
        "ele": 32.875,
        "distanceKm": 7.755958530286875,
        "gradePct": -0.10703769314926949,
        "smoothedEle": 31.81581403841419,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4382555,
        "lng": 118.4004985,
        "ele": 32.9375,
        "distanceKm": 7.810434857115495,
        "gradePct": -0.28357881451803,
        "smoothedEle": 31.658971474745535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43805,
        "lng": 118.400987,
        "ele": 33,
        "distanceKm": 7.8649112571112045,
        "gradePct": -0.3712120141478292,
        "smoothedEle": 31.380740703108323,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437882,
        "lng": 118.401409,
        "ele": 31.5,
        "distanceKm": 7.91153743561814,
        "gradePct": -0.4138113263952118,
        "smoothedEle": 31.077555335872713,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437706,
        "lng": 118.402065,
        "ele": 29.5,
        "distanceKm": 7.9807700311297936,
        "gradePct": -0.5343051347045189,
        "smoothedEle": 30.675769081183542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437699,
        "lng": 118.402321,
        "ele": 28.75,
        "distanceKm": 8.006697440655076,
        "gradePct": -0.565040836798349,
        "smoothedEle": 30.53965018117581,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437831,
        "lng": 118.403041,
        "ele": 28.75,
        "distanceKm": 8.08104855030727,
        "gradePct": -0.564925411974293,
        "smoothedEle": 30.14595760033036,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437952749999997,
        "lng": 118.403532,
        "ele": 29.249999999999996,
        "distanceKm": 8.132564678710006,
        "gradePct": -0.6477834807652355,
        "smoothedEle": 29.659958322083153,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4380745,
        "lng": 118.404023,
        "ele": 29.75,
        "distanceKm": 8.184080760803583,
        "gradePct": -0.7266475645361966,
        "smoothedEle": 29.20509262132375,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43819625,
        "lng": 118.404514,
        "ele": 30.250000000000004,
        "distanceKm": 8.235596796589073,
        "gradePct": -0.7308240892449538,
        "smoothedEle": 28.924978570007507,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438318,
        "lng": 118.405005,
        "ele": 30.75,
        "distanceKm": 8.287112786063384,
        "gradePct": -0.4784072235266254,
        "smoothedEle": 29.131933609548362,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438436,
        "lng": 118.405477,
        "ele": 29,
        "distanceKm": 8.336663439078752,
        "gradePct": 0.006666949940699519,
        "smoothedEle": 29.637101862923114,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438467,
        "lng": 118.405961,
        "ele": 27.25,
        "distanceKm": 8.38578116726921,
        "gradePct": 0.5159885187166414,
        "smoothedEle": 30.22782384361018,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.438151,
        "lng": 118.406595,
        "ele": 27.25,
        "distanceKm": 8.458951734118529,
        "gradePct": 1.041457647390777,
        "smoothedEle": 31.10171758960158,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437779,
        "lng": 118.407133,
        "ele": 31.5,
        "distanceKm": 8.527342445792046,
        "gradePct": 1.280520165429672,
        "smoothedEle": 32.10311479027069,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43756,
        "lng": 118.40746,
        "ele": 34.5,
        "distanceKm": 8.56843787843538,
        "gradePct": 1.4598985571266494,
        "smoothedEle": 32.939039203189864,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437321719176413,
        "lng": 118.40780068493389,
        "ele": 35.094178083281506,
        "distanceKm": 8.611929167456758,
        "gradePct": 1.7480402872258862,
        "smoothedEle": 34.036196297406505,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.437083,
        "lng": 118.408141,
        "ele": 35.25,
        "distanceKm": 8.655420553997162,
        "gradePct": 2.1515698670178147,
        "smoothedEle": 35.36268358688885,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436738319791658,
        "lng": 118.40847503489296,
        "ele": 36.08066442224626,
        "distanceKm": 8.706532572661972,
        "gradePct": 2.5227349411565467,
        "smoothedEle": 36.84388030281181,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436392,
        "lng": 118.408807,
        "ele": 38.5,
        "distanceKm": 8.757643489210007,
        "gradePct": 2.697551840565633,
        "smoothedEle": 38.11457363061953,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436159,
        "lng": 118.409243,
        "ele": 41,
        "distanceKm": 8.808823857091797,
        "gradePct": 2.4552759583042043,
        "smoothedEle": 38.868410381926594,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.43592,
        "lng": 118.409907,
        "ele": 42.5,
        "distanceKm": 8.881106389345796,
        "gradePct": 1.50923880432258,
        "smoothedEle": 39.12552183629908,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436464,
        "lng": 118.410313,
        "ele": 41.5,
        "distanceKm": 8.954238902624411,
        "gradePct": 0.45465999566177634,
        "smoothedEle": 38.93925054076894,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.436963,
        "lng": 118.410647,
        "ele": 40,
        "distanceKm": 9.019215809031499,
        "gradePct": -0.35755152844140653,
        "smoothedEle": 38.19027185566644,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43741,
        "lng": 118.410993,
        "ele": 37.25,
        "distanceKm": 9.080021965946694,
        "gradePct": -1.1403549483855717,
        "smoothedEle": 36.840954608183786,
        "gradeBand": "descent"
      },
      {
        "lat": 24.437815391967025,
        "lng": 118.4112730207476,
        "ele": 35.37318533784779,
        "distanceKm": 9.133272006729348,
        "gradePct": -1.8070523098878184,
        "smoothedEle": 35.37854940306345,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43822078393405,
        "lng": 118.41155304149518,
        "ele": 33.49637067569557,
        "distanceKm": 9.186521998992117,
        "gradePct": -2.3404757254456827,
        "smoothedEle": 33.88617686360483,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438626274215927,
        "lng": 118.41183289087446,
        "ele": 31.514178099749348,
        "distanceKm": 9.23977196589826,
        "gradePct": -2.677468053287568,
        "smoothedEle": 32.37918495105676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43903194452596,
        "lng": 118.41211242679513,
        "ele": 29.525361104990353,
        "distanceKm": 9.293021965643385,
        "gradePct": -2.743092509227634,
        "smoothedEle": 30.997750760379613,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43943755550793,
        "lng": 118.41239206753717,
        "ele": 28.371183514025837,
        "distanceKm": 9.346271969129242,
        "gradePct": -2.539268726349368,
        "smoothedEle": 29.935677871143405,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439843,
        "lng": 118.412672,
        "ele": 28.25,
        "distanceKm": 9.399521954852881,
        "gradePct": -2.223984614214852,
        "smoothedEle": 29.070304526799784,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440285,
        "lng": 118.412965,
        "ele": 27.5,
        "distanceKm": 9.456926755153031,
        "gradePct": -1.8566764003266105,
        "smoothedEle": 28.220795295495925,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440533,
        "lng": 118.413129,
        "ele": 26.75,
        "distanceKm": 9.48911495079421,
        "gradePct": -1.6365284440854448,
        "smoothedEle": 27.8260513167527,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440519,
        "lng": 118.413184,
        "ele": 27,
        "distanceKm": 9.494896193500686,
        "gradePct": -1.602410150382312,
        "smoothedEle": 27.755548929752372,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440619,
        "lng": 118.413366,
        "ele": 27,
        "distanceKm": 9.51641569003488,
        "gradePct": -1.5189847910346188,
        "smoothedEle": 27.49319265571866,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440488,
        "lng": 118.413785,
        "ele": 27.50000000000001,
        "distanceKm": 9.561263029610497,
        "gradePct": -1.299750738894468,
        "smoothedEle": 27.09255446618159,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440357,
        "lng": 118.414204,
        "ele": 28,
        "distanceKm": 9.606110410869158,
        "gradePct": -1.117098875750147,
        "smoothedEle": 26.738607016105092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440224,
        "lng": 118.4146305,
        "ele": 27.00000000000002,
        "distanceKm": 9.651748151284295,
        "gradePct": -0.9583546931450132,
        "smoothedEle": 26.380721865933467,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440091,
        "lng": 118.415057,
        "ele": 26,
        "distanceKm": 9.697385934789347,
        "gradePct": -0.7605504424393219,
        "smoothedEle": 26.204094209840317,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439925,
        "lng": 118.41559566666668,
        "ele": 25.41666666666666,
        "distanceKm": 9.75495531238526,
        "gradePct": -0.5573752885580527,
        "smoothedEle": 26.034153104718953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439759,
        "lng": 118.41613433333333,
        "ele": 24.83333333333334,
        "distanceKm": 9.812524757988049,
        "gradePct": -0.4833948350980339,
        "smoothedEle": 25.721516880526302,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439593,
        "lng": 118.416673,
        "ele": 24.25,
        "distanceKm": 9.870094271600015,
        "gradePct": -0.5158725317601593,
        "smoothedEle": 25.27797352440755,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439429,
        "lng": 118.417205,
        "ele": 26,
        "distanceKm": 9.926953299736505,
        "gradePct": -0.6601282526757052,
        "smoothedEle": 24.79655674220518,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43925160935851,
        "lng": 118.41768777199898,
        "ele": 25.625758140319082,
        "distanceKm": 9.979655702481308,
        "gradePct": -0.8064921188520533,
        "smoothedEle": 24.287031103226138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439073,
        "lng": 118.41817,
        "ele": 24.5,
        "distanceKm": 10.032358024013185,
        "gradePct": -0.9440548955340836,
        "smoothedEle": 23.680602022615325,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438905641461453,
        "lng": 118.41864213532664,
        "ele": 24.116150140946257,
        "distanceKm": 10.083648419998303,
        "gradePct": -1.0239891503682053,
        "smoothedEle": 23.115234301417363,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438739346836403,
        "lng": 118.4191147227212,
        "ele": 23.304968968777647,
        "distanceKm": 10.134938754338059,
        "gradePct": -1.0893209023040298,
        "smoothedEle": 22.540711742932604,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43857330477183,
        "lng": 118.41958741727339,
        "ele": 21.82880964784158,
        "distanceKm": 10.186229150046998,
        "gradePct": -1.2070869851278987,
        "smoothedEle": 21.79721853398958,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438407,
        "lng": 118.42006,
        "ele": 19.75,
        "distanceKm": 10.23751956801797,
        "gradePct": -1.2901103810763825,
        "smoothedEle": 21.043486196273648,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43827934214996,
        "lng": 118.420421939018,
        "ele": 19.56866782665045,
        "distanceKm": 10.27681323537629,
        "gradePct": -1.2849212638424305,
        "smoothedEle": 20.620735172423288,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438152,
        "lng": 118.420784,
        "ele": 19.25,
        "distanceKm": 10.316105786363197,
        "gradePct": -1.2117215235635124,
        "smoothedEle": 20.32822393881698,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438439,
        "lng": 118.420977,
        "ele": 18.75,
        "distanceKm": 10.35352462738825,
        "gradePct": -1.0615995404144292,
        "smoothedEle": 20.148096327835024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.438731351008933,
        "lng": 118.42123854075058,
        "ele": 18.627635300610656,
        "distanceKm": 10.395450417511288,
        "gradePct": -0.8096393085735667,
        "smoothedEle": 20.042429859457123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439031,
        "lng": 118.42149,
        "ele": 17.75,
        "distanceKm": 10.437381157119473,
        "gradePct": -0.5720379481055231,
        "smoothedEle": 19.901444301231155,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43934225,
        "lng": 118.42175675,
        "ele": 18.93749999999999,
        "distanceKm": 10.481278915112854,
        "gradePct": -0.4268632050051175,
        "smoothedEle": 19.733764255354487,
        "gradeBand": "descent"
      },
      {
        "lat": 24.439653500000002,
        "lng": 118.42202350000001,
        "ele": 20.125000000000025,
        "distanceKm": 10.525176632098978,
        "gradePct": -0.3767493194333045,
        "smoothedEle": 19.531059870257394,
        "gradeBand": "descent"
      },
      {
        "lat": 24.43996475,
        "lng": 118.42229025,
        "ele": 21.31250000000001,
        "distanceKm": 10.569074308075024,
        "gradePct": -0.3545244989498263,
        "smoothedEle": 19.399857136077284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440276,
        "lng": 118.422557,
        "ele": 22.5,
        "distanceKm": 10.612971943041762,
        "gradePct": -0.30851622729095607,
        "smoothedEle": 19.366484013864998,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440622666666666,
        "lng": 118.42284766666667,
        "ele": 20.75,
        "distanceKm": 10.661466489018597,
        "gradePct": -0.19607529384739025,
        "smoothedEle": 19.417292897494498,
        "gradeBand": "descent"
      },
      {
        "lat": 24.440969333333335,
        "lng": 118.42313833333333,
        "ele": 19,
        "distanceKm": 10.70996098590136,
        "gradePct": 0.06697972857373659,
        "smoothedEle": 19.735279888046733,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441316,
        "lng": 118.423429,
        "ele": 17.25,
        "distanceKm": 10.758455433690598,
        "gradePct": 0.3426557938953477,
        "smoothedEle": 20.116906744666892,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44162711279501,
        "lng": 118.42369697417828,
        "ele": 17.99993966888591,
        "distanceKm": 10.802417223373755,
        "gradePct": 0.60206737028922,
        "smoothedEle": 20.57864296690189,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441938556397506,
        "lng": 118.42396448708915,
        "ele": 18.624969834442954,
        "distanceKm": 10.846379144906376,
        "gradePct": 0.9130710446241445,
        "smoothedEle": 21.2276276192165,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44225,
        "lng": 118.424232,
        "ele": 19.25,
        "distanceKm": 10.89034102522607,
        "gradePct": 1.2620012376123357,
        "smoothedEle": 22.130630812045467,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.442685064167616,
        "lng": 118.42461016896165,
        "ele": 21.605808238644393,
        "distanceKm": 10.952032460055552,
        "gradePct": 1.9145164931291985,
        "smoothedEle": 23.89539416642788,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.443124,
        "lng": 118.424983,
        "ele": 24.25,
        "distanceKm": 11.013729968634925,
        "gradePct": 2.312408025520752,
        "smoothedEle": 25.37046259272108,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4434305,
        "lng": 118.4252425,
        "ele": 27.500000000000068,
        "distanceKm": 11.056760056141819,
        "gradePct": 2.3273942607260607,
        "smoothedEle": 26.09564623733216,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.443737,
        "lng": 118.425502,
        "ele": 30.75,
        "distanceKm": 11.099790104655584,
        "gradePct": 2.1578767839843356,
        "smoothedEle": 26.71668752916196,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.443993,
        "lng": 118.42573,
        "ele": 34.5,
        "distanceKm": 11.13643705636498,
        "gradePct": 1.8694778928549645,
        "smoothedEle": 27.18822324093398,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.444300299578806,
        "lng": 118.42604912371591,
        "ele": 34.63227596636481,
        "distanceKm": 11.183460136281312,
        "gradePct": 1.5601096194763449,
        "smoothedEle": 27.76698852537825,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4445976497894,
        "lng": 118.42637956185796,
        "ele": 30.441137983182404,
        "distanceKm": 11.230493025722566,
        "gradePct": 1.298955739558605,
        "smoothedEle": 28.250880930131153,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.444895,
        "lng": 118.42671,
        "ele": 26.25,
        "distanceKm": 11.277525859044566,
        "gradePct": 1.012723051133154,
        "smoothedEle": 28.420799672172812,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445137,
        "lng": 118.426985,
        "ele": 25.75,
        "distanceKm": 11.316243222482722,
        "gradePct": 0.6777424862477719,
        "smoothedEle": 28.28387449223533,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.445379,
        "lng": 118.42726,
        "ele": 25.25,
        "distanceKm": 11.354960547492754,
        "gradePct": 0.22797932653817635,
        "smoothedEle": 27.872171077843948,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.4457095,
        "lng": 118.427617,
        "ele": 26,
        "distanceKm": 11.406501971372702,
        "gradePct": -0.5753244999179989,
        "smoothedEle": 26.85340276202955,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44604,
        "lng": 118.427974,
        "ele": 26.75,
        "distanceKm": 11.458043328813092,
        "gradePct": -1.3564786790294678,
        "smoothedEle": 25.637456441205565,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4457336,
        "lng": 118.42829880000001,
        "ele": 25.900000000000006,
        "distanceKm": 11.505390645829452,
        "gradePct": -1.6638517234002073,
        "smoothedEle": 24.99455152589837,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4454272,
        "lng": 118.42862360000001,
        "ele": 25.05000000000001,
        "distanceKm": 11.552738018347611,
        "gradePct": -1.515806711742661,
        "smoothedEle": 24.864191075247145,
        "gradeBand": "descent"
      },
      {
        "lat": 24.445120799999998,
        "lng": 118.4289484,
        "ele": 24.19999999999999,
        "distanceKm": 11.60008544636627,
        "gradePct": -1.0345165506092668,
        "smoothedEle": 24.911198760243913,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4448144,
        "lng": 118.4292732,
        "ele": 23.349999999999994,
        "distanceKm": 11.647432929886275,
        "gradePct": -0.3953210476513306,
        "smoothedEle": 25.097131298700646,
        "gradeBand": "descent"
      },
      {
        "lat": 24.444508,
        "lng": 118.429598,
        "ele": 22.5,
        "distanceKm": 11.694780468906329,
        "gradePct": 0.08210596890642592,
        "smoothedEle": 25.30283361015263,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44417499178513,
        "lng": 118.42994374088191,
        "ele": 23.887534228621192,
        "distanceKm": 11.74573184534409,
        "gradePct": 0.2235139846463249,
        "smoothedEle": 25.33050898232312,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44384198357026,
        "lng": 118.43028948176381,
        "ele": 25.27506845724238,
        "distanceKm": 11.7966832852937,
        "gradePct": 0.16486337272533783,
        "smoothedEle": 25.237547756940323,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.443508975355392,
        "lng": 118.43063522264572,
        "ele": 26.662602685863572,
        "distanceKm": 11.847634788756118,
        "gradePct": -0.04720632572203182,
        "smoothedEle": 25.003595627073764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443176,
        "lng": 118.430981,
        "ele": 28.25,
        "distanceKm": 11.898586236688622,
        "gradePct": -0.3424890408434974,
        "smoothedEle": 24.61992271579468,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443091,
        "lng": 118.43106,
        "ele": 28.5,
        "distanceKm": 11.910967100097967,
        "gradePct": -0.4058986989007295,
        "smoothedEle": 24.49982834072404,
        "gradeBand": "descent"
      },
      {
        "lat": 24.443037,
        "lng": 118.431076,
        "ele": 28.5,
        "distanceKm": 11.917186243402774,
        "gradePct": -0.43775057686177177,
        "smoothedEle": 24.439502650667407,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442999,
        "lng": 118.431076,
        "ele": 28.5,
        "distanceKm": 11.921411656451646,
        "gradePct": -0.45913218014147167,
        "smoothedEle": 24.39903457108744,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442901,
        "lng": 118.431019,
        "ele": 28.25,
        "distanceKm": 11.933742136662454,
        "gradePct": -0.5149256995850777,
        "smoothedEle": 24.294145106490333,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442618,
        "lng": 118.43068433333333,
        "ele": 26.333333333333307,
        "distanceKm": 11.979980328400558,
        "gradePct": -0.7399799830135025,
        "smoothedEle": 23.788062441714914,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442335,
        "lng": 118.43034966666667,
        "ele": 24.416666666666693,
        "distanceKm": 12.026218575862714,
        "gradePct": -1.0003440900448144,
        "smoothedEle": 23.1012434779078,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442052,
        "lng": 118.430015,
        "ele": 22.5,
        "distanceKm": 12.072456879050483,
        "gradePct": -1.2322941591710128,
        "smoothedEle": 22.35209282379135,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441837,
        "lng": 118.429696,
        "ele": 20.5,
        "distanceKm": 12.112635688606115,
        "gradePct": -1.4205246360325174,
        "smoothedEle": 21.642593760129966,
        "gradeBand": "descent"
      },
      {
        "lat": 24.441893,
        "lng": 118.429231,
        "ele": 18.5,
        "distanceKm": 12.160117695203853,
        "gradePct": -1.6367473146120415,
        "smoothedEle": 20.731966762574803,
        "gradeBand": "descent"
      },
      {
        "lat": 24.4419565,
        "lng": 118.428832,
        "ele": 17.5,
        "distanceKm": 12.201120955210419,
        "gradePct": -1.736426137645412,
        "smoothedEle": 20.001189108172145,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44202,
        "lng": 118.428433,
        "ele": 16.5,
        "distanceKm": 12.242124195175348,
        "gradePct": -1.6634946807873419,
        "smoothedEle": 19.51655207515313,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442097,
        "lng": 118.42791833333334,
        "ele": 17.166666666666657,
        "distanceKm": 12.29492264891774,
        "gradePct": -1.4076450536329312,
        "smoothedEle": 19.140090049785535,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442173999999998,
        "lng": 118.42740366666666,
        "ele": 17.833333333333343,
        "distanceKm": 12.347721071259619,
        "gradePct": -1.01196461319587,
        "smoothedEle": 18.94578444814058,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442251,
        "lng": 118.426889,
        "ele": 18.5,
        "distanceKm": 12.400519462198181,
        "gradePct": -0.4724053268258731,
        "smoothedEle": 19.067098520499343,
        "gradeBand": "descent"
      },
      {
        "lat": 24.442310814030087,
        "lng": 118.42645105129697,
        "ele": 19.875035174387936,
        "distanceKm": 12.445348969314033,
        "gradePct": -0.13239559482881139,
        "smoothedEle": 19.228767693128063,
        "gradeBand": "descent"
      },
      {
        "lat": 24.44237,
        "lng": 118.426013,
        "ele": 21.25,
        "distanceKm": 12.490178420700342,
        "gradePct": 0.11047569740026515,
        "smoothedEle": 19.394868604984392,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.442428,
        "lng": 118.425598,
        "ele": 21.25,
        "distanceKm": 12.53268083159757,
        "gradePct": 0.26712072979653373,
        "smoothedEle": 19.535376099780965,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.442495,
        "lng": 118.42519,
        "ele": 20.5,
        "distanceKm": 12.574649007210663,
        "gradePct": 0.27833537265967856,
        "smoothedEle": 19.56432710872793,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.442626,
        "lng": 118.42456,
        "ele": 21.25,
        "distanceKm": 12.640065928937728,
        "gradePct": 0.2064645584708547,
        "smoothedEle": 19.62264452014845,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44225,
        "lng": 118.424232,
        "ele": 19.25,
        "distanceKm": 12.693455807329212,
        "gradePct": 0.1880170970422277,
        "smoothedEle": 19.781737417034773,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441814,
        "lng": 118.4238575,
        "ele": 18.375,
        "distanceKm": 12.754999480916418,
        "gradePct": 0.22905764494136252,
        "smoothedEle": 20.008887517960307,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441378,
        "lng": 118.423483,
        "ele": 17.5,
        "distanceKm": 12.816543235270203,
        "gradePct": 0.3789209838630075,
        "smoothedEle": 20.359516644474443,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441011263668354,
        "lng": 118.42317349030654,
        "ele": 18.78833244340691,
        "distanceKm": 12.867969222389547,
        "gradePct": 0.55032061757648,
        "smoothedEle": 20.806432897075517,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440643631834178,
        "lng": 118.42286524515328,
        "ele": 20.64416622170349,
        "distanceKm": 12.919396489310294,
        "gradePct": 0.6625993060707251,
        "smoothedEle": 21.202679883688425,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440276,
        "lng": 118.422557,
        "ele": 22.5,
        "distanceKm": 12.970823811443024,
        "gradePct": 0.8452255190006916,
        "smoothedEle": 21.789493458737354,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44060114531144,
        "lng": 118.42210179363738,
        "ele": 23.7869576291557,
        "distanceKm": 13.029395257870597,
        "gradePct": 1.0329053288418744,
        "smoothedEle": 22.537017482564117,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440914,
        "lng": 118.421636,
        "ele": 25,
        "distanceKm": 13.087991960192491,
        "gradePct": 1.2013347044585323,
        "smoothedEle": 23.363377459879015,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441027,
        "lng": 118.421443,
        "ele": 25,
        "distanceKm": 13.111221144271667,
        "gradePct": 1.2500154692139214,
        "smoothedEle": 23.639719805287214,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441036,
        "lng": 118.421393,
        "ele": 25,
        "distanceKm": 13.116380660584381,
        "gradePct": 1.2596078798179466,
        "smoothedEle": 23.698658689149298,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441004,
        "lng": 118.421119,
        "ele": 25,
        "distanceKm": 13.14434515500002,
        "gradePct": 1.2566023693712447,
        "smoothedEle": 24.000562398736335,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440964,
        "lng": 118.420806,
        "ele": 25,
        "distanceKm": 13.17634100814477,
        "gradePct": 1.1697013803034604,
        "smoothedEle": 24.199310001661093,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440802725019985,
        "lng": 118.4203984434809,
        "ele": 24.89539143096593,
        "distanceKm": 13.221327144226162,
        "gradePct": 0.9432278459034665,
        "smoothedEle": 24.320503055925414,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44063,
        "lng": 118.419996,
        "ele": 24.75,
        "distanceKm": 13.266367133681907,
        "gradePct": 0.7017650314401862,
        "smoothedEle": 24.461943413233932,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440478,
        "lng": 118.41955899999999,
        "ele": 24.624999999999996,
        "distanceKm": 13.313723885811232,
        "gradePct": 0.45563978840251257,
        "smoothedEle": 24.579589037400382,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440326,
        "lng": 118.419122,
        "ele": 24.5,
        "distanceKm": 13.361080687762993,
        "gradePct": 0.2735219626136224,
        "smoothedEle": 24.651561889869644,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440246000000002,
        "lng": 118.418672,
        "ele": 23.750000000000014,
        "distanceKm": 13.40749515940312,
        "gradePct": 0.277097373699669,
        "smoothedEle": 24.837434312096942,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440166,
        "lng": 118.418222,
        "ele": 23,
        "distanceKm": 13.453909659414071,
        "gradePct": 0.35629659644856154,
        "smoothedEle": 25.135416046093276,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440283,
        "lng": 118.417787,
        "ele": 24.75,
        "distanceKm": 13.499826865065756,
        "gradePct": 0.49545506813444007,
        "smoothedEle": 25.535975613540163,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440534,
        "lng": 118.417371,
        "ele": 25.25,
        "distanceKm": 13.550348138124887,
        "gradePct": 0.6736139916722308,
        "smoothedEle": 25.982478547704638,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.440685,
        "lng": 118.417059,
        "ele": 25.75,
        "distanceKm": 13.586117849654094,
        "gradePct": 0.7742258380380768,
        "smoothedEle": 26.300277939576468,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44090985011382,
        "lng": 118.41668646726704,
        "ele": 26.914164790475336,
        "distanceKm": 13.63136484321078,
        "gradePct": 0.85825087950403,
        "smoothedEle": 26.70717977230339,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441134517570667,
        "lng": 118.4163138011773,
        "ele": 28.080820680548555,
        "distanceKm": 13.676611815841262,
        "gradePct": 0.8919754489516919,
        "smoothedEle": 27.117409612959758,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441359,
        "lng": 118.415941,
        "ele": 29.25,
        "distanceKm": 13.721858781370562,
        "gradePct": 0.8967800408350964,
        "smoothedEle": 27.524251993508067,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441575999999998,
        "lng": 118.41559000000001,
        "ele": 29.166666666666664,
        "distanceKm": 13.764809162929307,
        "gradePct": 0.8636341506639087,
        "smoothedEle": 27.838227194336206,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.441793,
        "lng": 118.415239,
        "ele": 29.083333333333336,
        "distanceKm": 13.80775949389138,
        "gradePct": 0.8312141356085524,
        "smoothedEle": 28.15732742230773,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44201,
        "lng": 118.414888,
        "ele": 29,
        "distanceKm": 13.850709774253565,
        "gradePct": 0.8063110611923047,
        "smoothedEle": 28.495191926723944,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.442334,
        "lng": 118.414374,
        "ele": 28.5,
        "distanceKm": 13.913997179947472,
        "gradePct": 0.7100429949695914,
        "smoothedEle": 28.873649648871073,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.44227,
        "lng": 118.414333,
        "ele": 28,
        "distanceKm": 13.922235522862321,
        "gradePct": 0.6863849966582058,
        "smoothedEle": 28.89977603652654,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 13.922235522862321,
      "elevationGainM": 85.72471434803542,
      "elevationLossM": 83.4127414105955,
      "minimumElevationM": 5.25,
      "maximumElevationM": 42.5,
      "maximumSustainedGradePct": 5.199359272185071
    },
    "climbs": [
      {
        "startIndex": 86,
        "endIndex": 193,
        "startDistanceKm": 3.7829995983502247,
        "endDistanceKm": 8.881106389345796,
        "distanceKm": 5.098106790995571,
        "gainM": 44.94672080795435,
        "averageGradePct": 0.8816355296311289,
        "maximumGradePct": 5.199359272185071
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
