"use strict";

(function (root) {
  root.CrownRideAtlas.TrackRegistry.register("route-art", {
  "route-art-little-taiwan": {
    "routeId": "route-art-little-taiwan",
    "direction": "loop",
    "source": {
      "router": "BRouter",
      "profile": "fastbike",
      "elevation": "SRTM",
      "samplingNote": "一般路段約 30–80m；髮夾彎與局部高曲率道路會加密取樣以貼合真實道路幾何。",
      "generatedAt": "2026-08-08T17:58:51.624Z",
      "reviewStatus": "approved",
      "rawGeometrySha256": "46867c6f181fa2ca7b3438f7cd0c1f69a8034983e52efb972f4a1b359b4bda1b",
      "roadPolicyAuditSha256": "b107306edc26410a1b63f2bdc1171ee98f7af70d83dce10552d8f0e59571f460",
      "elevationAnalysis": {
        "smoothingWindowM": 500,
        "gradeWindowM": 200,
        "reason": "100/100、500/200、750/300、1000/500 公尺視窗依序為 26.92 公里、262/10.22%、174/7.83%、160/6.25%、147/4.92%。採 500/200 保留台中緩坡並壓低 SRTM 短波；僅供行程規劃。",
        "referenceUrl": "https://www.openstreetmap.org/copyright",
        "referenceLabel": "OpenStreetMap 即時道路資料"
      },
      "reviewedAt": "2026-08-09T00:00:00.000Z",
      "reviewerNote": "小台灣圖形以南窄北寬輪廓為辨識重點；為合法公共道路已刪除科博館步道與中科 service 尖角，不宣稱精準海岸線。raw 的 service、track、footway、path、pedestrian、權限禁制與非法逆向均為 0；live OSM 道路窗口複核通過，另以 64 點道路距離重採樣幾何閘門確認為道路近似，shapeScore 0.185、最大點誤差 0.454。"
    },
    "waypoints": [
      {
        "name": "向心南路公共主線",
        "lat": 24.1307859,
        "lng": 120.6439469,
        "role": "start"
      },
      {
        "name": "都會園路與中科路口",
        "lat": 24.211,
        "lng": 120.61,
        "role": "via"
      },
      {
        "name": "嶺東南路公共道路",
        "lat": 24.133762,
        "lng": 120.6102652,
        "role": "via"
      },
      {
        "name": "向心南路公共主線",
        "lat": 24.1307859,
        "lng": 120.6439469,
        "role": "finish"
      }
    ],
    "coordinates": [
      {
        "lat": 24.130786,
        "lng": 120.643947,
        "ele": 61,
        "distanceKm": 0,
        "gradePct": 0,
        "smoothedEle": 64.15139809222849,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.131251,
        "lng": 120.643952,
        "ele": 64.25,
        "distanceKm": 0.05170820177020047,
        "gradePct": -0.9752597846997682,
        "smoothedEle": 63.64710879497231,
        "gradeBand": "descent"
      },
      {
        "lat": 24.131653999999997,
        "lng": 120.64395549999999,
        "ele": 65.125,
        "distanceKm": 0.09652122660977219,
        "gradePct": -0.7164933773470792,
        "smoothedEle": 63.459829895835306,
        "gradeBand": "descent"
      },
      {
        "lat": 24.132057,
        "lng": 120.643959,
        "ele": 66,
        "distanceKm": 0.14133425144088052,
        "gradePct": -0.46195547657714275,
        "smoothedEle": 63.49849677741803,
        "gradeBand": "descent"
      },
      {
        "lat": 24.132496666666665,
        "lng": 120.64396333333333,
        "ele": 64.25,
        "distanceKm": 0.1902249992881855,
        "gradePct": -0.26258332155806213,
        "smoothedEle": 63.65189897066377,
        "gradeBand": "descent"
      },
      {
        "lat": 24.132936333333333,
        "lng": 120.64396766666667,
        "ele": 62.5,
        "distanceKm": 0.23911574712228884,
        "gradePct": 0.040671795054734616,
        "smoothedEle": 63.85126153116942,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.133376,
        "lng": 120.643972,
        "ele": 60.75,
        "distanceKm": 0.28800649494240027,
        "gradePct": 0.36769333825799677,
        "smoothedEle": 64.23080063700262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.133801002411488,
        "lng": 120.64397572264886,
        "ele": 62.611324429885265,
        "distanceKm": 0.33526618197978575,
        "gradePct": 0.4958328588339036,
        "smoothedEle": 64.48492666634694,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134226,
        "lng": 120.64398,
        "ele": 64.25,
        "distanceKm": 0.3825258161879144,
        "gradePct": 0.5626743367333198,
        "smoothedEle": 64.75309028050262,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13471,
        "lng": 120.643979,
        "ele": 65.25,
        "distanceKm": 0.43634433068702205,
        "gradePct": 0.6428044331668978,
        "smoothedEle": 65.12556934973367,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13514167656005,
        "lng": 120.64396143385508,
        "ele": 65.92394202858695,
        "distanceKm": 0.48437772663502004,
        "gradePct": 0.7019158730445625,
        "smoothedEle": 65.60646223761296,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.135573399771673,
        "lng": 120.6439451108929,
        "ele": 66.58460835815023,
        "distanceKm": 0.532411790665677,
        "gradePct": 0.8460312087695598,
        "smoothedEle": 66.16164037600579,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.136005128271062,
        "lng": 120.6439289562039,
        "ele": 67.50312829314687,
        "distanceKm": 0.5804458563542063,
        "gradePct": 0.9392712934768923,
        "smoothedEle": 66.61983062743377,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13643683763256,
        "lng": 120.64391219853921,
        "ele": 68.70010434165629,
        "distanceKm": 0.6284799222038912,
        "gradePct": 0.8844256891543268,
        "smoothedEle": 66.83999099174966,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13686855446547,
        "lng": 120.6438956741156,
        "ele": 68.84592644501495,
        "distanceKm": 0.6765139860846543,
        "gradePct": 0.6941757230446868,
        "smoothedEle": 66.91608477378114,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.137300277751496,
        "lng": 120.64387935320696,
        "ele": 68.40867922209307,
        "distanceKm": 0.724548050427421,
        "gradePct": 0.47429816655385065,
        "smoothedEle": 67.01934752964507,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.137732,
        "lng": 120.643863,
        "ele": 67.25,
        "distanceKm": 0.772582112389537,
        "gradePct": 0.3217085998481365,
        "smoothedEle": 67.18823667051255,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.138192,
        "lng": 120.643928,
        "ele": 65.75,
        "distanceKm": 0.8241553521953658,
        "gradePct": 0.32158532028988407,
        "smoothedEle": 67.46334030569916,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13881,
        "lng": 120.644206,
        "ele": 65.25,
        "distanceKm": 0.8984386103166639,
        "gradePct": 0.4743694568879563,
        "smoothedEle": 67.91195684504551,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.139145,
        "lng": 120.6443965,
        "ele": 66.25,
        "distanceKm": 0.9404058822883081,
        "gradePct": 0.5707022180314782,
        "smoothedEle": 68.216508557793,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13948,
        "lng": 120.644587,
        "ele": 67.25,
        "distanceKm": 0.9823731309304117,
        "gradePct": 0.6101034232072349,
        "smoothedEle": 68.4606710830624,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13986961988995,
        "lng": 120.64479401095298,
        "ele": 69.11683466735245,
        "distanceKm": 1.0305207197042519,
        "gradePct": 0.626183935516835,
        "smoothedEle": 68.75415034009139,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.14025598122157,
        "lng": 120.6450075164324,
        "ele": 70.30387324303987,
        "distanceKm": 1.0786356162303674,
        "gradePct": 0.6628698195288651,
        "smoothedEle": 69.11810088611286,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.14064656767025,
        "lng": 120.6452123364534,
        "ele": 71.81052365336731,
        "distanceKm": 1.1267835011110008,
        "gradePct": 0.6775674703517611,
        "smoothedEle": 69.47278742984257,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.141035,
        "lng": 120.645422,
        "ele": 72.5,
        "distanceKm": 1.174930545481438,
        "gradePct": 0.6612350083242335,
        "smoothedEle": 69.73984065670942,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.141197573385927,
        "lng": 120.64493943081123,
        "ele": 71.05817183094065,
        "distanceKm": 1.2271272114485712,
        "gradePct": 0.5083285826148585,
        "smoothedEle": 69.75012268377631,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.141359786692963,
        "lng": 120.64445671540562,
        "ele": 70.40408591547032,
        "distanceKm": 1.279323888142488,
        "gradePct": 0.20056945614209815,
        "smoothedEle": 69.52431002705323,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.141522,
        "lng": 120.643974,
        "ele": 69.75,
        "distanceKm": 1.3315205065149853,
        "gradePct": -0.15166138697603065,
        "smoothedEle": 69.19573901178008,
        "gradeBand": "descent"
      },
      {
        "lat": 24.141697,
        "lng": 120.643416,
        "ele": 68.25,
        "distanceKm": 1.3913911255934475,
        "gradePct": -0.5101362457105695,
        "smoothedEle": 68.72281067373422,
        "gradeBand": "descent"
      },
      {
        "lat": 24.141872,
        "lng": 120.642858,
        "ele": 66.75,
        "distanceKm": 1.4512616713708493,
        "gradePct": -0.7178240513112402,
        "smoothedEle": 68.21006436083302,
        "gradeBand": "descent"
      },
      {
        "lat": 24.142,
        "lng": 120.642476,
        "ele": 65.75,
        "distanceKm": 1.4925535223044961,
        "gradePct": -0.6821661264187286,
        "smoothedEle": 68.07669892466882,
        "gradeBand": "descent"
      },
      {
        "lat": 24.142138709444893,
        "lng": 120.64204383222796,
        "ele": 66.34848646928074,
        "distanceKm": 1.5390386917225731,
        "gradePct": -0.5788333330666618,
        "smoothedEle": 67.97868490502775,
        "gradeBand": "descent"
      },
      {
        "lat": 24.14227713962993,
        "lng": 120.64161155481864,
        "ele": 66.98232431285383,
        "distanceKm": 1.5855240193904991,
        "gradePct": -0.4175730780426152,
        "smoothedEle": 67.93400980066774,
        "gradeBand": "descent"
      },
      {
        "lat": 24.142415569814965,
        "lng": 120.64117927740932,
        "ele": 67.61616215642691,
        "distanceKm": 1.632009302239177,
        "gradePct": -0.2012594212747843,
        "smoothedEle": 67.97242761779829,
        "gradeBand": "descent"
      },
      {
        "lat": 24.142554,
        "lng": 120.640747,
        "ele": 68.25,
        "distanceKm": 1.6784945402683709,
        "gradePct": -0.005980916275774463,
        "smoothedEle": 68.11014513822994,
        "gradeBand": "descent"
      },
      {
        "lat": 24.142723,
        "lng": 120.640298,
        "ele": 69.5,
        "distanceKm": 1.727777473049161,
        "gradePct": 0.19375956718874227,
        "smoothedEle": 68.38994832864964,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.142869,
        "lng": 120.639848,
        "ele": 69.5,
        "distanceKm": 1.7762385778575576,
        "gradePct": 0.33765634397391164,
        "smoothedEle": 68.61824633814668,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.143240666666667,
        "lng": 120.639715,
        "ele": 69.5,
        "distanceKm": 1.8197136987746978,
        "gradePct": 0.3516039473346809,
        "smoothedEle": 68.66547379640483,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.143612333333333,
        "lng": 120.639582,
        "ele": 69.5,
        "distanceKm": 1.8631888075112146,
        "gradePct": 0.24414664463236596,
        "smoothedEle": 68.55309354698913,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.143984,
        "lng": 120.639449,
        "ele": 69.5,
        "distanceKm": 1.9066639040678592,
        "gradePct": 0.032193602636354526,
        "smoothedEle": 68.33446352897508,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.144375,
        "lng": 120.63932,
        "ele": 69.5,
        "distanceKm": 1.9520687933154572,
        "gradePct": -0.07745805734055725,
        "smoothedEle": 68.3494674932874,
        "gradeBand": "descent"
      },
      {
        "lat": 24.144805889968943,
        "lng": 120.6392165456447,
        "ele": 68.23623248384203,
        "distanceKm": 2.0011180809188938,
        "gradePct": -0.016161657883827733,
        "smoothedEle": 68.61294987515194,
        "gradeBand": "descent"
      },
      {
        "lat": 24.145235,
        "lng": 120.639066,
        "ele": 67,
        "distanceKm": 2.051218501361824,
        "gradePct": 0.3326813105497451,
        "smoothedEle": 69.24939860917148,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.145559000000002,
        "lng": 120.63895,
        "ele": 65.875,
        "distanceKm": 2.0891196306267186,
        "gradePct": 0.6944537661655448,
        "smoothedEle": 69.81159869326743,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.145883,
        "lng": 120.638834,
        "ele": 64.75,
        "distanceKm": 2.1270207506251033,
        "gradePct": 1.0448158993767012,
        "smoothedEle": 70.43082221120552,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.14631440412313,
        "lng": 120.63867990723648,
        "ele": 68.41522410428654,
        "distanceKm": 2.177474508573843,
        "gradePct": 1.4263781291088837,
        "smoothedEle": 71.33869787164679,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.146745702061565,
        "lng": 120.63852545361824,
        "ele": 72.20761205214328,
        "distanceKm": 2.227928385322028,
        "gradePct": 1.5458760753829126,
        "smoothedEle": 72.04528568060965,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.147177,
        "lng": 120.638371,
        "ele": 76,
        "distanceKm": 2.2783822456430016,
        "gradePct": 1.5909281032656808,
        "smoothedEle": 72.83418368920698,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.147563666666667,
        "lng": 120.63823933333333,
        "ele": 76.91666666666666,
        "distanceKm": 2.3234054088549865,
        "gradePct": 1.64006358300051,
        "smoothedEle": 73.65188239845932,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.147950333333334,
        "lng": 120.63810766666667,
        "ele": 77.83333333333334,
        "distanceKm": 2.368428560072979,
        "gradePct": 1.705492196568079,
        "smoothedEle": 74.58690754187957,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.148337,
        "lng": 120.637976,
        "ele": 78.75,
        "distanceKm": 2.413451699297687,
        "gradePct": 1.8431225095099801,
        "smoothedEle": 75.52879008744563,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.148735,
        "lng": 120.637883,
        "ele": 76,
        "distanceKm": 2.458702147989048,
        "gradePct": 1.8461837187346988,
        "smoothedEle": 76.21883255470912,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.149234666666665,
        "lng": 120.63778766666667,
        "ele": 76,
        "distanceKm": 2.5150983452878046,
        "gradePct": 1.5850572930672713,
        "smoothedEle": 76.67112630665905,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.149734333333335,
        "lng": 120.63769233333333,
        "ele": 76,
        "distanceKm": 2.571494536100031,
        "gradePct": 1.0676803259571832,
        "smoothedEle": 76.78640830829353,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.150234,
        "lng": 120.637597,
        "ele": 76,
        "distanceKm": 2.627890720424847,
        "gradePct": 0.5948305235507472,
        "smoothedEle": 76.93863763107036,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.150631,
        "lng": 120.63752533333333,
        "ele": 76.41666666666667,
        "distanceKm": 2.6726300405909993,
        "gradePct": 0.4073029111348344,
        "smoothedEle": 77.14513914943196,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.151028,
        "lng": 120.63745366666667,
        "ele": 76.83333333333333,
        "distanceKm": 2.71736935708517,
        "gradePct": 0.48582424783900496,
        "smoothedEle": 77.64741708015698,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.151425,
        "lng": 120.637382,
        "ele": 77.25,
        "distanceKm": 2.762108669907782,
        "gradePct": 0.8016443078933613,
        "smoothedEle": 78.37051085094069,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.151861079708507,
        "lng": 120.63729448167516,
        "ele": 77.42357913832717,
        "distanceKm": 2.8114049402809456,
        "gradePct": 1.1873677223210695,
        "smoothedEle": 79.26887327174883,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.15229722910097,
        "lng": 120.63720737773008,
        "ele": 79.26010810081424,
        "distanceKm": 2.8607012722073404,
        "gradePct": 1.569224271348537,
        "smoothedEle": 80.22852854562746,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.152733378493433,
        "lng": 120.637120273785,
        "ele": 81.0966370633013,
        "distanceKm": 2.909997598725494,
        "gradePct": 1.7782419156367395,
        "smoothedEle": 81.12113988992077,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.153169527885893,
        "lng": 120.63703316983992,
        "ele": 82.93316602578837,
        "distanceKm": 2.959293919834943,
        "gradePct": 1.7472821114587718,
        "smoothedEle": 81.81958201382727,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.15360567740602,
        "lng": 120.63694606665217,
        "ele": 84.7566667702721,
        "distanceKm": 3.008590235726789,
        "gradePct": 1.5531380677436801,
        "smoothedEle": 82.32385496288998,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.154041838703012,
        "lng": 120.63685903332608,
        "ele": 85.37833338513606,
        "distanceKm": 3.057886564337046,
        "gradePct": 1.3363151647908242,
        "smoothedEle": 82.84636475267298,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.154478,
        "lng": 120.636772,
        "ele": 86,
        "distanceKm": 3.107182887546739,
        "gradePct": 1.173677351598626,
        "smoothedEle": 83.41752846021275,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.154910333333333,
        "lng": 120.63668766666666,
        "ele": 84.5,
        "distanceKm": 3.1560117515341863,
        "gradePct": 0.957915029209885,
        "smoothedEle": 83.68890952302213,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.155342666666666,
        "lng": 120.63660333333334,
        "ele": 83,
        "distanceKm": 3.2048406104475533,
        "gradePct": 0.6906958187260196,
        "smoothedEle": 83.66689009107287,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.155775,
        "lng": 120.636519,
        "ele": 81.5,
        "distanceKm": 3.253669464287277,
        "gradePct": 0.27515904669665026,
        "smoothedEle": 83.35198426256893,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.156387,
        "lng": 120.636486,
        "ele": 84.25,
        "distanceKm": 3.3218031671502266,
        "gradePct": -0.47500905806614174,
        "smoothedEle": 82.54876693482123,
        "gradeBand": "descent"
      },
      {
        "lat": 24.156848,
        "lng": 120.636456,
        "ele": 83,
        "distanceKm": 3.3731543838483735,
        "gradePct": -0.9178181123018795,
        "smoothedEle": 81.84554280800607,
        "gradeBand": "descent"
      },
      {
        "lat": 24.157309,
        "lng": 120.636426,
        "ele": 81.75,
        "distanceKm": 3.4245055998953853,
        "gradePct": -1.1627293311932252,
        "smoothedEle": 81.21460846833357,
        "gradeBand": "descent"
      },
      {
        "lat": 24.15777,
        "lng": 120.636396,
        "ele": 80.5,
        "distanceKm": 3.4758568152909444,
        "gradePct": -1.2159232193334464,
        "smoothedEle": 80.65857469091317,
        "gradeBand": "descent"
      },
      {
        "lat": 24.158231,
        "lng": 120.636366,
        "ele": 79.25,
        "distanceKm": 3.527208030035915,
        "gradePct": -1.1264828956280075,
        "smoothedEle": 80.22178478664644,
        "gradeBand": "descent"
      },
      {
        "lat": 24.15872049676169,
        "lng": 120.63634515836573,
        "ele": 79.1091781468097,
        "distanceKm": 3.581678719199938,
        "gradePct": -1.0347296001309791,
        "smoothedEle": 79.67134809590614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.159209994831723,
        "lng": 120.63632435375366,
        "ele": 78.79798928975983,
        "distanceKm": 3.6361494077417644,
        "gradePct": -0.923192439669392,
        "smoothedEle": 79.24214379885724,
        "gradeBand": "descent"
      },
      {
        "lat": 24.15969949741586,
        "lng": 120.63630367687684,
        "ele": 77.8989946448799,
        "distanceKm": 3.6906200969039977,
        "gradePct": -0.7579965321925564,
        "smoothedEle": 79.01700616751596,
        "gradeBand": "descent"
      },
      {
        "lat": 24.160189,
        "lng": 120.636283,
        "ele": 77,
        "distanceKm": 3.745090785756616,
        "gradePct": -0.5236311175717385,
        "smoothedEle": 78.99381389825682,
        "gradeBand": "descent"
      },
      {
        "lat": 24.160507,
        "lng": 120.636337,
        "ele": 78.25,
        "distanceKm": 3.780872718581278,
        "gradePct": -0.30473521679035515,
        "smoothedEle": 79.07002245212117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.160905805251748,
        "lng": 120.63659413811116,
        "ele": 79.15318801688551,
        "distanceKm": 3.8323223979926286,
        "gradePct": -0.043442273322995065,
        "smoothedEle": 79.18541435164451,
        "gradeBand": "descent"
      },
      {
        "lat": 24.161304779285864,
        "lng": 120.63685096271395,
        "ele": 79.67579622025836,
        "distanceKm": 3.883772097825935,
        "gradePct": 0.13933087562909904,
        "smoothedEle": 79.32397199047904,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.161703753319983,
        "lng": 120.63710778731675,
        "ele": 80.19840442363122,
        "distanceKm": 3.935221756439499,
        "gradePct": 0.29758840111144,
        "smoothedEle": 79.59319268855934,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16210247207542,
        "lng": 120.63736508639417,
        "ele": 80.6899475178958,
        "distanceKm": 3.9866713059789163,
        "gradePct": 0.48721637566509163,
        "smoothedEle": 80.05746033821644,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16250145082283,
        "lng": 120.63762190475295,
        "ele": 80.3994290125006,
        "distanceKm": 4.038121013285771,
        "gradePct": 0.7122501253109867,
        "smoothedEle": 80.62553067866986,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16290042957024,
        "lng": 120.63787872311171,
        "ele": 80.1089105071054,
        "distanceKm": 4.089570679371072,
        "gradePct": 0.9109613485762927,
        "smoothedEle": 81.1762369331105,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16329939093372,
        "lng": 120.63813557575112,
        "ele": 80.655946695746,
        "distanceKm": 4.1410203988204906,
        "gradePct": 1.0569196876825933,
        "smoothedEle": 81.75935753797678,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.163698341872042,
        "lng": 120.63839244894865,
        "ele": 81.70526531310648,
        "distanceKm": 4.1924701339020585,
        "gradePct": 1.1262171953047533,
        "smoothedEle": 82.373921179606,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16409729281036,
        "lng": 120.63864932214618,
        "ele": 82.75458393046695,
        "distanceKm": 4.243919827746221,
        "gradePct": 1.160473131556052,
        "smoothedEle": 83.0085462152038,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.164496243748683,
        "lng": 120.63890619534371,
        "ele": 83.80390254782743,
        "distanceKm": 4.295369480353114,
        "gradePct": 1.2214293956984992,
        "smoothedEle": 83.68481814967002,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.164895194687002,
        "lng": 120.63916306854124,
        "ele": 84.85322116518792,
        "distanceKm": 4.346819091721512,
        "gradePct": 1.296405394378353,
        "smoothedEle": 84.42143332528579,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.165294100974272,
        "lng": 120.63942002731227,
        "ele": 85.69360035230312,
        "distanceKm": 4.398268779202792,
        "gradePct": 1.3588565024449923,
        "smoothedEle": 85.16315969233561,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.165693,
        "lng": 120.639677,
        "ele": 86.5,
        "distanceKm": 4.449718444686056,
        "gradePct": 1.3805784914258428,
        "smoothedEle": 85.84592221405337,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.166044628533438,
        "lng": 120.63990987128261,
        "ele": 86.93563220483612,
        "distanceKm": 4.495400995130816,
        "gradePct": 1.4481033854648888,
        "smoothedEle": 86.58147612446498,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16639672140008,
        "lng": 120.64014190346197,
        "ele": 87.20172415362708,
        "distanceKm": 4.541083787822734,
        "gradePct": 1.51849498330199,
        "smoothedEle": 87.37630970976069,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.166748814266718,
        "lng": 120.6403739356413,
        "ele": 87.46781610241807,
        "distanceKm": 4.586766547067027,
        "gradePct": 1.587727022553358,
        "smoothedEle": 88.17279137247405,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16710090713336,
        "lng": 120.64060596782066,
        "ele": 87.73390805120903,
        "distanceKm": 4.632449272865469,
        "gradePct": 1.6707700171536986,
        "smoothedEle": 88.95829179235389,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.167453,
        "lng": 120.640838,
        "ele": 88,
        "distanceKm": 4.678131965215506,
        "gradePct": 1.5836345399123444,
        "smoothedEle": 89.4706893085581,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.167889,
        "lng": 120.641103,
        "ele": 90.75,
        "distanceKm": 4.733568063117697,
        "gradePct": 1.2229674251189582,
        "smoothedEle": 89.69147868380345,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.168138813947472,
        "lng": 120.64076383582956,
        "ele": 92.29385428667763,
        "distanceKm": 4.7777892805808975,
        "gradePct": 0.8607734281777503,
        "smoothedEle": 89.73781904619312,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.168388906973735,
        "lng": 120.64042491791477,
        "ele": 93.02192714333881,
        "distanceKm": 4.82201051858371,
        "gradePct": 0.4872754350510387,
        "smoothedEle": 89.75335149313472,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.168639,
        "lng": 120.640086,
        "ele": 93.75,
        "distanceKm": 4.8662317042209065,
        "gradePct": 0.25486194149826935,
        "smoothedEle": 89.84693453996614,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16893,
        "lng": 120.6396915,
        "ele": 90.75,
        "distanceKm": 4.917697491654952,
        "gradePct": 0.1873179815627422,
        "smoothedEle": 90.00290576876748,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.169221,
        "lng": 120.639297,
        "ele": 87.75,
        "distanceKm": 4.9691632081552495,
        "gradePct": 0.17294858894545925,
        "smoothedEle": 90.0746767777473,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1694365,
        "lng": 120.639006,
        "ele": 87.5,
        "distanceKm": 5.0071856825663,
        "gradePct": 0.10095197612004361,
        "smoothedEle": 89.95004830986124,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.169652,
        "lng": 120.638715,
        "ele": 87.25,
        "distanceKm": 5.045208118287531,
        "gradePct": -0.042973030725455844,
        "smoothedEle": 89.71649733250415,
        "gradeBand": "descent"
      },
      {
        "lat": 24.169862000000002,
        "lng": 120.638419,
        "ele": 88.25,
        "distanceKm": 5.083247213640399,
        "gradePct": -0.21204723204415626,
        "smoothedEle": 89.47440695253817,
        "gradeBand": "descent"
      },
      {
        "lat": 24.170072,
        "lng": 120.638123,
        "ele": 89.25,
        "distanceKm": 5.121286270001559,
        "gradePct": -0.4506199025140201,
        "smoothedEle": 89.10667065930099,
        "gradeBand": "descent"
      },
      {
        "lat": 24.170338346625677,
        "lng": 120.63778471232698,
        "ele": 89.38729207509174,
        "distanceKm": 5.166617008576996,
        "gradePct": -0.6738512822097457,
        "smoothedEle": 88.72342343573794,
        "gradeBand": "descent"
      },
      {
        "lat": 24.170604990935324,
        "lng": 120.63744670759074,
        "ele": 89.4240649757502,
        "distanceKm": 5.211947610364201,
        "gradePct": -0.7173527863445053,
        "smoothedEle": 88.48609282537127,
        "gradeBand": "descent"
      },
      {
        "lat": 24.170873,
        "lng": 120.63711,
        "ele": 89,
        "distanceKm": 5.257278321852963,
        "gradePct": -0.6548717605715731,
        "smoothedEle": 88.3299359969436,
        "gradeBand": "descent"
      },
      {
        "lat": 24.171193,
        "lng": 120.636719,
        "ele": 89.75,
        "distanceKm": 5.310564916824112,
        "gradePct": -0.5444010572894196,
        "smoothedEle": 88.12151545537441,
        "gradeBand": "descent"
      },
      {
        "lat": 24.17147775,
        "lng": 120.636325,
        "ele": 88.62499999999999,
        "distanceKm": 5.3615562258803315,
        "gradePct": -0.48233173003918456,
        "smoothedEle": 87.80154619486764,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1717625,
        "lng": 120.635931,
        "ele": 87.5,
        "distanceKm": 5.412547465052121,
        "gradePct": -0.5693766714477202,
        "smoothedEle": 87.34527308196044,
        "gradeBand": "descent"
      },
      {
        "lat": 24.17204725,
        "lng": 120.635537,
        "ele": 86.37500000000001,
        "distanceKm": 5.463538634339012,
        "gradePct": -0.6570358140553901,
        "smoothedEle": 86.9913783284048,
        "gradeBand": "descent"
      },
      {
        "lat": 24.172332,
        "lng": 120.635143,
        "ele": 85.25,
        "distanceKm": 5.514529733740536,
        "gradePct": -0.7187393377985453,
        "smoothedEle": 86.65915764722956,
        "gradeBand": "descent"
      },
      {
        "lat": 24.172536,
        "lng": 120.634876,
        "ele": 85.5,
        "distanceKm": 5.5498595894981495,
        "gradePct": -0.7435003051703142,
        "smoothedEle": 86.38794170168684,
        "gradeBand": "descent"
      },
      {
        "lat": 24.172799,
        "lng": 120.6345005,
        "ele": 85.125,
        "distanceKm": 5.597883286639721,
        "gradePct": -0.7155970741797895,
        "smoothedEle": 86.04529500995294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.173062,
        "lng": 120.634125,
        "ele": 84.75,
        "distanceKm": 5.645906921528803,
        "gradePct": -0.6281490675852619,
        "smoothedEle": 85.85744982599611,
        "gradeBand": "descent"
      },
      {
        "lat": 24.173304,
        "lng": 120.633852,
        "ele": 86,
        "distanceKm": 5.684521476940153,
        "gradePct": -0.5188149580895636,
        "smoothedEle": 85.81703956805953,
        "gradeBand": "descent"
      },
      {
        "lat": 24.173647,
        "lng": 120.633784,
        "ele": 86,
        "distanceKm": 5.72328019618764,
        "gradePct": -0.3518718087649756,
        "smoothedEle": 85.88823954241018,
        "gradeBand": "descent"
      },
      {
        "lat": 24.174226,
        "lng": 120.633913,
        "ele": 85.5,
        "distanceKm": 5.788978645724494,
        "gradePct": 0.01594778042129262,
        "smoothedEle": 86.14072474105498,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.174656000000002,
        "lng": 120.63399650000001,
        "ele": 86.0625,
        "distanceKm": 5.837537039425926,
        "gradePct": 0.25092766270449096,
        "smoothedEle": 86.3920440735409,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.175086,
        "lng": 120.63408000000001,
        "ele": 86.625,
        "distanceKm": 5.886095428149156,
        "gradePct": 0.4733517117130926,
        "smoothedEle": 86.76663434826648,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.175516,
        "lng": 120.6341635,
        "ele": 87.1875,
        "distanceKm": 5.934653811894255,
        "gradePct": 0.6353578948611153,
        "smoothedEle": 87.20266518588448,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.175946,
        "lng": 120.634247,
        "ele": 87.75,
        "distanceKm": 5.983212190662047,
        "gradePct": 0.7650702671666558,
        "smoothedEle": 87.64870425694446,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.176276,
        "lng": 120.634307,
        "ele": 87.25,
        "distanceKm": 6.020407932147784,
        "gradePct": 0.8751652447814343,
        "smoothedEle": 88.05372097555532,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1766784,
        "lng": 120.6343806,
        "ele": 88.05,
        "distanceKm": 6.065771454812601,
        "gradePct": 1.0132690317026265,
        "smoothedEle": 88.63638873420977,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1770808,
        "lng": 120.63445420000001,
        "ele": 88.85000000000001,
        "distanceKm": 6.111134973603334,
        "gradePct": 1.1211640657137412,
        "smoothedEle": 89.23380550649799,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1774832,
        "lng": 120.6345278,
        "ele": 89.64999999999999,
        "distanceKm": 6.1564984885198495,
        "gradePct": 1.2153601800684148,
        "smoothedEle": 89.8340425596395,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1778856,
        "lng": 120.63460140000001,
        "ele": 90.45,
        "distanceKm": 6.201861999561794,
        "gradePct": 1.2014792322996035,
        "smoothedEle": 90.25473662467292,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.178288,
        "lng": 120.634675,
        "ele": 91.25,
        "distanceKm": 6.247225506729035,
        "gradePct": 1.0737567082760497,
        "smoothedEle": 90.54569035927871,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.178695555100536,
        "lng": 120.63475860104627,
        "ele": 91.95337418731404,
        "distanceKm": 6.293330294257121,
        "gradePct": 0.8980032564549341,
        "smoothedEle": 90.79533254448639,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.17910311020107,
        "lng": 120.63484220209253,
        "ele": 92.6567483746281,
        "distanceKm": 6.33943507680283,
        "gradePct": 0.6429594839943314,
        "smoothedEle": 90.89418334477762,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.179511,
        "lng": 120.634923,
        "ele": 93.25,
        "distanceKm": 6.385525022678712,
        "gradePct": 0.36723630516767936,
        "smoothedEle": 90.83770268144927,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.179611,
        "lng": 120.634508,
        "ele": 91.75,
        "distanceKm": 6.429066206918389,
        "gradePct": 0.10642837309165279,
        "smoothedEle": 90.6420764790121,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1797116,
        "lng": 120.6340526,
        "ele": 90.85,
        "distanceKm": 6.476596806914053,
        "gradePct": -0.18497401456247772,
        "smoothedEle": 90.33477821240594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1798122,
        "lng": 120.6335972,
        "ele": 89.95,
        "distanceKm": 6.524127371516233,
        "gradePct": -0.45612222673727804,
        "smoothedEle": 89.94911845848348,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1799128,
        "lng": 120.6331418,
        "ele": 89.05,
        "distanceKm": 6.57165790072199,
        "gradePct": -0.6800531189177826,
        "smoothedEle": 89.49458982973484,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1800134,
        "lng": 120.6326864,
        "ele": 88.15,
        "distanceKm": 6.619188394533991,
        "gradePct": -0.8607382746718948,
        "smoothedEle": 88.96497995650704,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180114,
        "lng": 120.632231,
        "ele": 87.25,
        "distanceKm": 6.666718852949295,
        "gradePct": -1.011644080983145,
        "smoothedEle": 88.37535371156032,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180213,
        "lng": 120.631618,
        "ele": 87.25,
        "distanceKm": 6.729867889043681,
        "gradePct": -1.0804757089833918,
        "smoothedEle": 87.73327117456151,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180332999999997,
        "lng": 120.631137,
        "ele": 87.25,
        "distanceKm": 6.7804516745148815,
        "gradePct": -1.047921451875836,
        "smoothedEle": 87.30076205248136,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180453,
        "lng": 120.630656,
        "ele": 87.25,
        "distanceKm": 6.831035415726138,
        "gradePct": -0.9363346062830677,
        "smoothedEle": 86.94534572714484,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180576000000002,
        "lng": 120.6300705,
        "ele": 86.75,
        "distanceKm": 6.891982253348017,
        "gradePct": -0.7613561741483246,
        "smoothedEle": 86.59576985382395,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180699,
        "lng": 120.629485,
        "ele": 86.25,
        "distanceKm": 6.952929035180729,
        "gradePct": -0.5778856049616858,
        "smoothedEle": 86.38031907006916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180778,
        "lng": 120.62907200000001,
        "ele": 86.08333333333333,
        "distanceKm": 6.995734228276195,
        "gradePct": -0.44424864647312706,
        "smoothedEle": 86.30488501716059,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180857,
        "lng": 120.628659,
        "ele": 85.91666666666667,
        "distanceKm": 7.0385393959882085,
        "gradePct": -0.27542635678084765,
        "smoothedEle": 86.35145205270884,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180936,
        "lng": 120.628246,
        "ele": 85.75,
        "distanceKm": 7.08134453831387,
        "gradePct": -0.06838259039003697,
        "smoothedEle": 86.52001995567875,
        "gradeBand": "descent"
      },
      {
        "lat": 24.181095,
        "lng": 120.627691,
        "ele": 85.25,
        "distanceKm": 7.1403536977570985,
        "gradePct": 0.2642083297365756,
        "smoothedEle": 86.95319035409229,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.181329,
        "lng": 120.627104,
        "ele": 85.75,
        "distanceKm": 7.205334752035237,
        "gradePct": 0.5624225888862138,
        "smoothedEle": 87.44017444629483,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.181756333333336,
        "lng": 120.62722233333334,
        "ele": 87.41666666666666,
        "distanceKm": 7.254344788690449,
        "gradePct": 0.713866114067023,
        "smoothedEle": 87.84142637977489,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.182183666666667,
        "lng": 120.62734066666667,
        "ele": 89.08333333333334,
        "distanceKm": 7.3033548154994286,
        "gradePct": 0.8300261797631372,
        "smoothedEle": 88.34164385134652,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.182611,
        "lng": 120.627459,
        "ele": 90.75,
        "distanceKm": 7.35236483246281,
        "gradePct": 1.02807153040765,
        "smoothedEle": 89.09934782904662,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.18310696216393,
        "lng": 120.62759682839636,
        "ele": 90.2921135511311,
        "distanceKm": 7.409257960459016,
        "gradePct": 1.4328046712200038,
        "smoothedEle": 90.33790363750298,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.183603064551363,
        "lng": 120.6277340520851,
        "ele": 90.11527033024181,
        "distanceKm": 7.466151150887808,
        "gradePct": 1.9468415238293897,
        "smoothedEle": 91.85561025208818,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.184099,
        "lng": 120.627872,
        "ele": 90.75,
        "distanceKm": 7.523044353219569,
        "gradePct": 2.452598334571183,
        "smoothedEle": 93.55124443572876,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1842145,
        "lng": 120.62741925,
        "ele": 93.125,
        "distanceKm": 7.570731430664028,
        "gradePct": 2.7586159923773983,
        "smoothedEle": 95.01641820702915,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.18433,
        "lng": 120.62696650000001,
        "ele": 95.5,
        "distanceKm": 7.618418468068986,
        "gradePct": 2.8488846546366817,
        "smoothedEle": 96.28004249061502,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1844455,
        "lng": 120.62651375,
        "ele": 97.875,
        "distanceKm": 7.6661054654356535,
        "gradePct": 2.8034905694642496,
        "smoothedEle": 97.46137266672996,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.184561,
        "lng": 120.626061,
        "ele": 100.25,
        "distanceKm": 7.713792422761077,
        "gradePct": 2.6360018336910946,
        "smoothedEle": 98.54750532704776,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.184833,
        "lng": 120.625427,
        "ele": 104.25,
        "distanceKm": 7.784859635625911,
        "gradePct": 2.4133312948328918,
        "smoothedEle": 100.21745387258362,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1851,
        "lng": 120.624798,
        "ele": 103.75,
        "distanceKm": 7.855231744169879,
        "gradePct": 2.2423128497373366,
        "smoothedEle": 101.67662818633877,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.185298500000002,
        "lng": 120.62436600000001,
        "ele": 102.5,
        "distanceKm": 7.904296700912334,
        "gradePct": 2.0679486700813126,
        "smoothedEle": 102.46712521501668,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.185497,
        "lng": 120.623934,
        "ele": 101.25,
        "distanceKm": 7.953361596763687,
        "gradePct": 1.8233728051803966,
        "smoothedEle": 103.12405361166554,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.185679,
        "lng": 120.62351699999999,
        "ele": 102.25000000000001,
        "distanceKm": 8.00025190863551,
        "gradePct": 1.5922011667893359,
        "smoothedEle": 103.72101687749391,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.185861,
        "lng": 120.6231,
        "ele": 103.25,
        "distanceKm": 8.047142166071984,
        "gradePct": 1.2945635950968881,
        "smoothedEle": 104.09801698111144,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.186101,
        "lng": 120.62256,
        "ele": 103.75,
        "distanceKm": 8.1080719751571,
        "gradePct": 1.175449094838796,
        "smoothedEle": 104.86857043660967,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.18628993225439,
        "lng": 120.62214232476619,
        "ele": 104.59344756423238,
        "distanceKm": 8.15536126342475,
        "gradePct": 1.3041517313710844,
        "smoothedEle": 105.75781494604267,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.18647825139396,
        "lng": 120.6217243170696,
        "ele": 105.85308240316583,
        "distanceKm": 8.202650482253647,
        "gradePct": 1.6655502482778732,
        "smoothedEle": 107.0714020304369,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.186666,
        "lng": 120.621306,
        "ele": 107.5,
        "distanceKm": 8.24993974246105,
        "gradePct": 2.285254022504909,
        "smoothedEle": 108.70390478827682,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.18691,
        "lng": 120.620753,
        "ele": 109.75,
        "distanceKm": 8.312249731780492,
        "gradePct": 2.8126978523587693,
        "smoothedEle": 110.57252615513141,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.187162,
        "lng": 120.620156,
        "ele": 112.25,
        "distanceKm": 8.378974510412615,
        "gradePct": 3.024220322111237,
        "smoothedEle": 112.46217795548966,
        "gradeBand": "hard"
      },
      {
        "lat": 24.18734008506331,
        "lng": 120.61974654457885,
        "ele": 115.40505033420825,
        "distanceKm": 8.424986157064138,
        "gradePct": 3.0830534609376024,
        "smoothedEle": 114.00857304945427,
        "gradeBand": "hard"
      },
      {
        "lat": 24.187518,
        "lng": 120.619337,
        "ele": 119,
        "distanceKm": 8.470997777869906,
        "gradePct": 3.2113213931690767,
        "smoothedEle": 115.75805939701695,
        "gradeBand": "hard"
      },
      {
        "lat": 24.187785,
        "lng": 120.618721,
        "ele": 117.75,
        "distanceKm": 8.540175376496519,
        "gradePct": 3.5867065548510895,
        "smoothedEle": 118.53679606339628,
        "gradeBand": "hard"
      },
      {
        "lat": 24.187991,
        "lng": 120.618235,
        "ele": 117.25,
        "distanceKm": 8.594533701777804,
        "gradePct": 3.7609487710049114,
        "smoothedEle": 120.50700086410096,
        "gradeBand": "hard"
      },
      {
        "lat": 24.18819343910111,
        "lng": 120.61778441707241,
        "ele": 121.02030781264165,
        "distanceKm": 8.645480276483129,
        "gradePct": 3.634544462450093,
        "smoothedEle": 122.05690385935993,
        "gradeBand": "hard"
      },
      {
        "lat": 24.18839496128717,
        "lng": 120.6173333385672,
        "ele": 124.75439004063668,
        "distanceKm": 8.696426959446615,
        "gradePct": 3.386753114065845,
        "smoothedEle": 123.55300899187512,
        "gradeBand": "hard"
      },
      {
        "lat": 24.188596,
        "lng": 120.616882,
        "ele": 127.75,
        "distanceKm": 8.747373657242369,
        "gradePct": 2.9400863760114753,
        "smoothedEle": 124.67786881940033,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.188752274117302,
        "lng": 120.61648168912706,
        "ele": 127.89155264248386,
        "distanceKm": 8.791540137184322,
        "gradePct": 2.6645788471076437,
        "smoothedEle": 125.72765750897784,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.188910098255118,
        "lng": 120.61608212365668,
        "ele": 127.8578423316476,
        "distanceKm": 8.835705273663345,
        "gradePct": 2.5256919732922776,
        "smoothedEle": 126.81091146147625,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.189073,
        "lng": 120.615685,
        "ele": 127.25,
        "distanceKm": 8.879871730600415,
        "gradePct": 2.3947740096210253,
        "smoothedEle": 127.85639458785373,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.189255,
        "lng": 120.615313,
        "ele": 130,
        "distanceKm": 8.922688904791631,
        "gradePct": 2.3025234645692203,
        "smoothedEle": 128.73789737471682,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.189418,
        "lng": 120.61490425,
        "ele": 129.9375,
        "distanceKm": 8.967937759265494,
        "gradePct": 2.1616562056350976,
        "smoothedEle": 129.4899673359605,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.189581,
        "lng": 120.6144955,
        "ele": 129.875,
        "distanceKm": 9.013186565191733,
        "gradePct": 1.9598264024541407,
        "smoothedEle": 130.1782399241147,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.189744,
        "lng": 120.61408675,
        "ele": 129.8125,
        "distanceKm": 9.058435322572691,
        "gradePct": 1.9018207825201257,
        "smoothedEle": 131.15260575350604,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.189907,
        "lng": 120.613678,
        "ele": 129.75,
        "distanceKm": 9.103684031406752,
        "gradePct": 2.036432368406345,
        "smoothedEle": 132.41949741064255,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.190057666666668,
        "lng": 120.61329933333333,
        "ele": 131.25000000000003,
        "distanceKm": 9.145587478715152,
        "gradePct": 2.3856699302167157,
        "smoothedEle": 133.8898287396964,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.190208333333334,
        "lng": 120.61292066666667,
        "ele": 132.74999999999997,
        "distanceKm": 9.187490884437201,
        "gradePct": 2.8306278243070677,
        "smoothedEle": 135.44864254721176,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.190359,
        "lng": 120.612542,
        "ele": 134.25,
        "distanceKm": 9.229394248572666,
        "gradePct": 3.399755268322563,
        "smoothedEle": 137.32675922418323,
        "gradeBand": "hard"
      },
      {
        "lat": 24.19053147797721,
        "lng": 120.6121128521957,
        "ele": 138.0614450933113,
        "distanceKm": 9.276960855504722,
        "gradePct": 4.094066993565889,
        "smoothedEle": 139.85942510692456,
        "gradeBand": "hard"
      },
      {
        "lat": 24.19070298531814,
        "lng": 120.61168323479713,
        "ele": 141.4576300622075,
        "distanceKm": 9.324527625965809,
        "gradePct": 4.844537261647037,
        "smoothedEle": 142.83994350498475,
        "gradeBand": "hard"
      },
      {
        "lat": 24.19087449265907,
        "lng": 120.61125361739856,
        "ele": 144.8538150311037,
        "distanceKm": 9.37209434274588,
        "gradePct": 5.696207338546791,
        "smoothedEle": 146.268303259255,
        "gradeBand": "hard"
      },
      {
        "lat": 24.191046,
        "lng": 120.610824,
        "ele": 148.25,
        "distanceKm": 9.419661005844592,
        "gradePct": 6.550907784377552,
        "smoothedEle": 149.99232901969896,
        "gradeBand": "steep"
      },
      {
        "lat": 24.19123669683961,
        "lng": 120.6103595996781,
        "ele": 153.32869590022716,
        "distanceKm": 9.4713180027579,
        "gradePct": 7.392753054720498,
        "smoothedEle": 154.34447966947212,
        "gradeBand": "steep"
      },
      {
        "lat": 24.191427393679216,
        "lng": 120.60989519935622,
        "ele": 158.4073918004545,
        "distanceKm": 9.522974935448946,
        "gradePct": 8.0305438219318,
        "smoothedEle": 158.8037400650278,
        "gradeBand": "steep"
      },
      {
        "lat": 24.191618090518826,
        "lng": 120.60943079903434,
        "ele": 163.48608770068162,
        "distanceKm": 9.574631803916278,
        "gradePct": 8.248491269676023,
        "smoothedEle": 162.9639453250295,
        "gradeBand": "steep"
      },
      {
        "lat": 24.191808787358433,
        "lng": 120.60896639871245,
        "ele": 168.56478360090878,
        "distanceKm": 9.626288608161738,
        "gradePct": 8.069488128896737,
        "smoothedEle": 166.68968701577688,
        "gradeBand": "steep"
      },
      {
        "lat": 24.19199972725902,
        "lng": 120.60850211768032,
        "ele": 173.5775397541744,
        "distanceKm": 9.677945417869514,
        "gradePct": 7.514276381832813,
        "smoothedEle": 169.9451409226,
        "gradeBand": "steep"
      },
      {
        "lat": 24.192191,
        "lng": 120.608038,
        "ele": 178.5,
        "distanceKm": 9.729602286311657,
        "gradePct": 6.771738164717359,
        "smoothedEle": 172.88095257973598,
        "gradeBand": "steep"
      },
      {
        "lat": 24.1923485,
        "lng": 120.607654,
        "ele": 179.375,
        "distanceKm": 9.772307433595387,
        "gradePct": 5.950401816532668,
        "smoothedEle": 174.6775549232633,
        "gradeBand": "hard"
      },
      {
        "lat": 24.192506,
        "lng": 120.60727,
        "ele": 180.25,
        "distanceKm": 9.815012537009599,
        "gradePct": 5.082280967051962,
        "smoothedEle": 176.04096347833422,
        "gradeBand": "hard"
      },
      {
        "lat": 24.1926475,
        "lng": 120.606926,
        "ele": 179.25,
        "distanceKm": 9.853287702341698,
        "gradePct": 4.257017135370803,
        "smoothedEle": 176.90522602763693,
        "gradeBand": "hard"
      },
      {
        "lat": 24.192789,
        "lng": 120.606582,
        "ele": 178.25,
        "distanceKm": 9.891562832383253,
        "gradePct": 3.3055119368507606,
        "smoothedEle": 177.33008248576158,
        "gradeBand": "hard"
      },
      {
        "lat": 24.193294957135812,
        "lng": 120.60678123436084,
        "ele": 180.02030130170886,
        "distanceKm": 9.951341998984782,
        "gradePct": 1.8305766412672348,
        "smoothedEle": 177.45669394404553,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.193804,
        "lng": 120.606971,
        "ele": 177.25,
        "distanceKm": 10.011128098707802,
        "gradePct": 0.5618123658544951,
        "smoothedEle": 177.0405731395036,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.194201333333332,
        "lng": 120.607123,
        "ele": 175.91666666666669,
        "distanceKm": 10.057922241456465,
        "gradePct": -0.13453453703319032,
        "smoothedEle": 176.68760064223216,
        "gradeBand": "descent"
      },
      {
        "lat": 24.194598666666668,
        "lng": 120.607275,
        "ele": 174.58333333333331,
        "distanceKm": 10.104716368379341,
        "gradePct": -0.5336433534995156,
        "smoothedEle": 176.29065478832615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.194996,
        "lng": 120.607427,
        "ele": 173.25,
        "distanceKm": 10.151510479475483,
        "gradePct": -0.7878096435930956,
        "smoothedEle": 175.87990200573032,
        "gradeBand": "descent"
      },
      {
        "lat": 24.195435840037764,
        "lng": 120.60760142583726,
        "ele": 174.5082586499318,
        "distanceKm": 10.203519963687377,
        "gradePct": -0.975638611678935,
        "smoothedEle": 175.14224975124168,
        "gradeBand": "descent"
      },
      {
        "lat": 24.19587592001888,
        "lng": 120.60777521291863,
        "ele": 175.3791293249659,
        "distanceKm": 10.255532525956914,
        "gradePct": -1.1760832755044148,
        "smoothedEle": 174.35345993373477,
        "gradeBand": "descent"
      },
      {
        "lat": 24.196316,
        "lng": 120.607949,
        "ele": 176.25,
        "distanceKm": 10.307545067610874,
        "gradePct": -1.2436500436622184,
        "smoothedEle": 173.77852473728916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1968505,
        "lng": 120.60813900000001,
        "ele": 174.24999999999997,
        "distanceKm": 10.37002500118263,
        "gradePct": -1.1547346780833194,
        "smoothedEle": 173.30784056881137,
        "gradeBand": "descent"
      },
      {
        "lat": 24.197385,
        "lng": 120.608329,
        "ele": 172.25,
        "distanceKm": 10.432504909838135,
        "gradePct": -0.819196331324423,
        "smoothedEle": 173.06428961898376,
        "gradeBand": "descent"
      },
      {
        "lat": 24.197844,
        "lng": 120.608502,
        "ele": 171,
        "distanceKm": 10.486475404614781,
        "gradePct": -0.621672701678849,
        "smoothedEle": 172.7680787548883,
        "gradeBand": "descent"
      },
      {
        "lat": 24.19829766092488,
        "lng": 120.60868576288136,
        "ele": 171.15657490899838,
        "distanceKm": 10.540253313650377,
        "gradePct": -0.5449075150189506,
        "smoothedEle": 172.4423065389158,
        "gradeBand": "descent"
      },
      {
        "lat": 24.198750773949918,
        "lng": 120.60887117525424,
        "ele": 171.3543832726656,
        "distanceKm": 10.594032328077066,
        "gradePct": -0.5670402680344202,
        "smoothedEle": 172.08017783337985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.19920388697496,
        "lng": 120.60905658762712,
        "ele": 171.5521916363328,
        "distanceKm": 10.647811319134707,
        "gradePct": -0.5425348185052333,
        "smoothedEle": 171.89521251191582,
        "gradeBand": "descent"
      },
      {
        "lat": 24.199657,
        "lng": 120.609242,
        "ele": 171.75,
        "distanceKm": 10.701590286821212,
        "gradePct": -0.3960611136755588,
        "smoothedEle": 171.8843946063161,
        "gradeBand": "descent"
      },
      {
        "lat": 24.20005934553677,
        "lng": 120.60941255952102,
        "ele": 172.3747601502644,
        "distanceKm": 10.749557046345707,
        "gradePct": -0.20804854408031379,
        "smoothedEle": 171.9635614324988,
        "gradeBand": "descent"
      },
      {
        "lat": 24.200461,
        "lng": 120.609585,
        "ele": 172.75,
        "distanceKm": 10.797521354231703,
        "gradePct": 0.0005265142056032364,
        "smoothedEle": 172.06923084409647,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.200791000000002,
        "lng": 120.6097345,
        "ele": 172.625,
        "distanceKm": 10.837225067759197,
        "gradePct": 0.11728166942519677,
        "smoothedEle": 172.1661857824191,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.201121,
        "lng": 120.609884,
        "ele": 172.5,
        "distanceKm": 10.876928766296565,
        "gradePct": 0.1905674030717257,
        "smoothedEle": 172.27049019940765,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.2015755,
        "lng": 120.6100645,
        "ele": 172.25,
        "distanceKm": 10.930680431584925,
        "gradePct": 0.21701140510430225,
        "smoothedEle": 172.36642929927368,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.20203,
        "lng": 120.610245,
        "ele": 172,
        "distanceKm": 10.984432074644744,
        "gradePct": 0.1556717179306878,
        "smoothedEle": 172.3517374941654,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.202411666666666,
        "lng": 120.61037466666667,
        "ele": 172.25,
        "distanceKm": 11.028862423321618,
        "gradePct": 0.08071603159233148,
        "smoothedEle": 172.30719659016884,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.202793333333336,
        "lng": 120.61050433333334,
        "ele": 172.5,
        "distanceKm": 11.073292760344291,
        "gradePct": 0.006591782233456935,
        "smoothedEle": 172.27412171973282,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.203175,
        "lng": 120.610634,
        "ele": 172.75,
        "distanceKm": 11.117723085711868,
        "gradePct": -0.024977348699295108,
        "smoothedEle": 172.29334757700906,
        "gradeBand": "descent"
      },
      {
        "lat": 24.2035905738687,
        "lng": 120.61074762131992,
        "ele": 172.36088589073194,
        "distanceKm": 11.165348024413577,
        "gradePct": 0.0077739334209354916,
        "smoothedEle": 172.37250155777284,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.204005702610807,
        "lng": 120.61086299897008,
        "ele": 171.59559580831635,
        "distanceKm": 11.212968387886571,
        "gradePct": 0.0977341645313036,
        "smoothedEle": 172.5185985035384,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.204420631998776,
        "lng": 120.6109793281356,
        "ele": 171.93648597987908,
        "distanceKm": 11.260591070612636,
        "gradePct": 0.21030341047385623,
        "smoothedEle": 172.70418394368542,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.204835925259914,
        "lng": 120.61109417771631,
        "ele": 172.42164165877938,
        "distanceKm": 11.308216021334093,
        "gradePct": 0.4569212432940349,
        "smoothedEle": 173.2030761737858,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.205251218521052,
        "lng": 120.61120902729702,
        "ele": 172.90679733767965,
        "distanceKm": 11.355840962773431,
        "gradePct": 0.8714334911704671,
        "smoothedEle": 174.09956753764115,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.20566651178219,
        "lng": 120.61132387687775,
        "ele": 173.39195301657995,
        "distanceKm": 11.40346589493088,
        "gradePct": 1.3943942845397195,
        "smoothedEle": 175.27823388904812,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.20608180504333,
        "lng": 120.61143872645846,
        "ele": 173.87710869548025,
        "distanceKm": 11.451090817805614,
        "gradePct": 1.9699021770748928,
        "smoothedEle": 176.6069658434548,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.206497,
        "lng": 120.611554,
        "ele": 174,
        "distanceKm": 11.498715669124271,
        "gradePct": 2.424121070302599,
        "smoothedEle": 177.95179796153187,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.20660864844218,
        "lng": 120.61108905338267,
        "ele": 178.7803957273486,
        "distanceKm": 11.547476557328517,
        "gradePct": 2.652495123909527,
        "smoothedEle": 179.24710631111662,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.206704,
        "lng": 120.610619,
        "ele": 183.25,
        "distanceKm": 11.596313244496537,
        "gradePct": 2.6750604813091976,
        "smoothedEle": 180.4513343708296,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.206831,
        "lng": 120.610356,
        "ele": 185,
        "distanceKm": 11.626493839725237,
        "gradePct": 2.6216374991819813,
        "smoothedEle": 181.16398690618084,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.207073,
        "lng": 120.610187,
        "ele": 186,
        "distanceKm": 11.6583979360481,
        "gradePct": 2.5312663022453936,
        "smoothedEle": 181.8758370932325,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.207284,
        "lng": 120.610153,
        "ele": 186.25,
        "distanceKm": 11.682112132317954,
        "gradePct": 2.46020144813634,
        "smoothedEle": 182.40334963932185,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.207469,
        "lng": 120.61022,
        "ele": 186,
        "distanceKm": 11.703776418547635,
        "gradePct": 2.394712495493104,
        "smoothedEle": 182.8756592030593,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.207840333333333,
        "lng": 120.61037466666667,
        "ele": 185.58333333333331,
        "distanceKm": 11.747945938904493,
        "gradePct": 2.342521602802415,
        "smoothedEle": 183.94372365283266,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.208211666666667,
        "lng": 120.61052933333333,
        "ele": 185.16666666666669,
        "distanceKm": 11.79211544302992,
        "gradePct": 2.375006029355356,
        "smoothedEle": 185.0978359211839,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.208583,
        "lng": 120.610684,
        "ele": 184.75,
        "distanceKm": 11.836284930924744,
        "gradePct": 2.4111282866607353,
        "smoothedEle": 186.20470414459297,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.209197,
        "lng": 120.610895,
        "ele": 184.5,
        "distanceKm": 11.907833643826988,
        "gradePct": 2.5431226311287336,
        "smoothedEle": 188.0600123471907,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.209434,
        "lng": 120.610957,
        "ele": 184.75,
        "distanceKm": 11.934926616347841,
        "gradePct": 2.6104061096522835,
        "smoothedEle": 188.8497152566869,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.209749,
        "lng": 120.610871,
        "ele": 185.5,
        "distanceKm": 11.971022614071666,
        "gradePct": 2.714389519859334,
        "smoothedEle": 189.9754769493499,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.209948,
        "lng": 120.61063,
        "ele": 187.75,
        "distanceKm": 12.003992430218778,
        "gradePct": 2.862212667663353,
        "smoothedEle": 191.11989340792897,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.210038,
        "lng": 120.610375,
        "ele": 190.25,
        "distanceKm": 12.031722155536428,
        "gradePct": 3.002596044707186,
        "smoothedEle": 192.0955550603015,
        "gradeBand": "hard"
      },
      {
        "lat": 24.210197,
        "lng": 120.609686,
        "ele": 196.25,
        "distanceKm": 12.103799271562577,
        "gradePct": 3.4934379373764113,
        "smoothedEle": 194.94227412546465,
        "gradeBand": "hard"
      },
      {
        "lat": 24.210337,
        "lng": 120.609402,
        "ele": 198.75,
        "distanceKm": 12.13653900208084,
        "gradePct": 3.6974444867984166,
        "smoothedEle": 196.29489130382285,
        "gradeBand": "hard"
      },
      {
        "lat": 24.210796,
        "lng": 120.609219,
        "ele": 201.25,
        "distanceKm": 12.190847070096112,
        "gradePct": 3.847517648291912,
        "smoothedEle": 198.3586396426872,
        "gradeBand": "hard"
      },
      {
        "lat": 24.21118745377416,
        "lng": 120.60916510090395,
        "ele": 203,
        "distanceKm": 12.23471667711647,
        "gradePct": 3.8380071218008562,
        "smoothedEle": 199.8898393200045,
        "gradeBand": "hard"
      },
      {
        "lat": 24.211579,
        "lng": 120.609112,
        "ele": 203,
        "distanceKm": 12.278586471901264,
        "gradePct": 3.571225536837018,
        "smoothedEle": 201.0889340043861,
        "gradeBand": "hard"
      },
      {
        "lat": 24.211863,
        "lng": 120.608972,
        "ele": 204.25,
        "distanceKm": 12.313210748371024,
        "gradePct": 3.2022914760800316,
        "smoothedEle": 201.7356851163199,
        "gradeBand": "hard"
      },
      {
        "lat": 24.212036,
        "lng": 120.608719,
        "ele": 206.25,
        "distanceKm": 12.345278943332419,
        "gradePct": 2.63299588154896,
        "smoothedEle": 201.89300755410832,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.211968,
        "lng": 120.608692,
        "ele": 206.25,
        "distanceKm": 12.353320728738801,
        "gradePct": 2.480198867399446,
        "smoothedEle": 201.89300755410832,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.211743,
        "lng": 120.608983,
        "ele": 204,
        "distanceKm": 12.392010123743075,
        "gradePct": 1.6545785126815589,
        "smoothedEle": 201.70839122747063,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.211249191730385,
        "lng": 120.60907412418737,
        "ele": 202.93950764815034,
        "distanceKm": 12.447691404574767,
        "gradePct": 0.14525404759909627,
        "smoothedEle": 200.5349861091575,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.21075,
        "lng": 120.609133,
        "ele": 202,
        "distanceKm": 12.503519283038488,
        "gradePct": -1.4201181090177266,
        "smoothedEle": 198.71442082725576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.210366,
        "lng": 120.609292,
        "ele": 199.75,
        "distanceKm": 12.549161494321307,
        "gradePct": -2.3928170281285843,
        "smoothedEle": 197.10737349785117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.210236,
        "lng": 120.60938,
        "ele": 198.75,
        "distanceKm": 12.566149861429139,
        "gradePct": -2.6764930785075145,
        "smoothedEle": 196.4788039148614,
        "gradeBand": "descent"
      },
      {
        "lat": 24.210111,
        "lng": 120.609699,
        "ele": 196.25,
        "distanceKm": 12.601360777571564,
        "gradePct": -3.2090083595176933,
        "smoothedEle": 195.09332255671941,
        "gradeBand": "descent"
      },
      {
        "lat": 24.209933,
        "lng": 120.610348,
        "ele": 190.25,
        "distanceKm": 12.670090904576108,
        "gradePct": -3.6341370205464316,
        "smoothedEle": 192.53625708470182,
        "gradeBand": "descent"
      },
      {
        "lat": 24.209769,
        "lng": 120.610657,
        "ele": 187.25,
        "distanceKm": 12.70634807065914,
        "gradePct": -3.6428264716689385,
        "smoothedEle": 191.32916719710954,
        "gradeBand": "descent"
      },
      {
        "lat": 24.209471,
        "lng": 120.610818,
        "ele": 185.25,
        "distanceKm": 12.743288619465375,
        "gradePct": -3.5831650135830118,
        "smoothedEle": 190.14782547330705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.208874,
        "lng": 120.610635,
        "ele": 185.75,
        "distanceKm": 12.812217605980367,
        "gradePct": -3.2782602826268574,
        "smoothedEle": 188.13287983578667,
        "gradeBand": "descent"
      },
      {
        "lat": 24.208402666666668,
        "lng": 120.610466,
        "ele": 186,
        "distanceKm": 12.867358885134276,
        "gradePct": -3.0173656135322453,
        "smoothedEle": 186.60316909457077,
        "gradeBand": "descent"
      },
      {
        "lat": 24.207931333333335,
        "lng": 120.610297,
        "ele": 186.25,
        "distanceKm": 12.92250018399156,
        "gradePct": -2.8437373004927156,
        "smoothedEle": 185.12515545675294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.20746,
        "lng": 120.610128,
        "ele": 186.5,
        "distanceKm": 12.97764150255192,
        "gradePct": -2.634379665392155,
        "smoothedEle": 183.87485593414505,
        "gradeBand": "descent"
      },
      {
        "lat": 24.2071,
        "lng": 120.610085,
        "ele": 186.5,
        "distanceKm": 13.017908574988867,
        "gradePct": -2.426223135911209,
        "smoothedEle": 183.12255662396922,
        "gradeBand": "descent"
      },
      {
        "lat": 24.206838,
        "lng": 120.610214,
        "ele": 185.75,
        "distanceKm": 13.049844449428356,
        "gradePct": -2.3050801304765485,
        "smoothedEle": 182.47888839311972,
        "gradeBand": "descent"
      },
      {
        "lat": 24.206733,
        "lng": 120.610356,
        "ele": 184.75,
        "distanceKm": 13.068384013571967,
        "gradePct": -2.251606190343133,
        "smoothedEle": 182.07247905480102,
        "gradeBand": "descent"
      },
      {
        "lat": 24.206574,
        "lng": 120.610732,
        "ele": 182,
        "distanceKm": 13.110416391941644,
        "gradePct": -2.162471855028891,
        "smoothedEle": 181.1241070813436,
        "gradeBand": "descent"
      },
      {
        "lat": 24.206477,
        "lng": 120.611223,
        "ele": 177.25,
        "distanceKm": 13.161367400168226,
        "gradePct": -2.1821005896159784,
        "smoothedEle": 179.879661209101,
        "gradeBand": "descent"
      },
      {
        "lat": 24.20600500304283,
        "lng": 120.61109898597094,
        "ele": 176.4298013950903,
        "distanceKm": 13.21533712501971,
        "gradePct": -2.3489046011915717,
        "smoothedEle": 178.4727891569513,
        "gradeBand": "descent"
      },
      {
        "lat": 24.205533006085656,
        "lng": 120.61097497194187,
        "ele": 175.60960279018062,
        "distanceKm": 13.269306860726525,
        "gradePct": -2.4790914859312863,
        "smoothedEle": 177.09347398314029,
        "gradeBand": "descent"
      },
      {
        "lat": 24.205061009128485,
        "lng": 120.61085095791282,
        "ele": 174.7894041852709,
        "distanceKm": 13.32327660728707,
        "gradePct": -2.489628791325595,
        "smoothedEle": 175.83074694292753,
        "gradeBand": "descent"
      },
      {
        "lat": 24.204589012171315,
        "lng": 120.61072694388376,
        "ele": 173.96920558036123,
        "distanceKm": 13.377246364701904,
        "gradePct": -2.305730801364129,
        "smoothedEle": 174.85426991744097,
        "gradeBand": "descent"
      },
      {
        "lat": 24.204117,
        "lng": 120.610603,
        "ele": 173.25,
        "distanceKm": 13.431216120700446,
        "gradePct": -1.848022568288648,
        "smoothedEle": 174.37092139774157,
        "gradeBand": "descent"
      },
      {
        "lat": 24.203592436881323,
        "lng": 120.61047248374557,
        "ele": 173.72140144150436,
        "distanceKm": 13.491028085404034,
        "gradePct": -1.2686024918338221,
        "smoothedEle": 174.04805876142643,
        "gradeBand": "descent"
      },
      {
        "lat": 24.203067,
        "lng": 120.610346,
        "ele": 174,
        "distanceKm": 13.55084577635827,
        "gradePct": -0.7206975496422129,
        "smoothedEle": 173.89054174148055,
        "gradeBand": "descent"
      },
      {
        "lat": 24.2025915,
        "lng": 120.610174,
        "ele": 173.75,
        "distanceKm": 13.606522425982764,
        "gradePct": -0.3564102933765851,
        "smoothedEle": 173.87925542929023,
        "gradeBand": "descent"
      },
      {
        "lat": 24.202116,
        "lng": 120.610002,
        "ele": 173.5,
        "distanceKm": 13.662199095995133,
        "gradePct": -0.2157684507544254,
        "smoothedEle": 173.77213961246903,
        "gradeBand": "descent"
      },
      {
        "lat": 24.201706813638033,
        "lng": 120.60982207408196,
        "ele": 173.8297762427205,
        "distanceKm": 13.71122163765546,
        "gradePct": -0.30125057449241516,
        "smoothedEle": 173.39238223702966,
        "gradeBand": "descent"
      },
      {
        "lat": 24.201297627276066,
        "lng": 120.60964214816394,
        "ele": 174.15955248544103,
        "distanceKm": 13.760244201119367,
        "gradePct": -0.6371082504637422,
        "smoothedEle": 172.614420069235,
        "gradeBand": "descent"
      },
      {
        "lat": 24.2008884409141,
        "lng": 120.60946222224591,
        "ele": 174.48932872816155,
        "distanceKm": 13.809266786387642,
        "gradePct": -1.125729596426798,
        "smoothedEle": 171.6225163875097,
        "gradeBand": "descent"
      },
      {
        "lat": 24.200479,
        "lng": 120.609283,
        "ele": 174.75,
        "distanceKm": 13.858289157608802,
        "gradePct": -1.6457174286589038,
        "smoothedEle": 170.48822704849024,
        "gradeBand": "descent"
      },
      {
        "lat": 24.200318,
        "lng": 120.609775,
        "ele": 171,
        "distanceKm": 13.911303452401276,
        "gradePct": -2.135493023139411,
        "smoothedEle": 169.12009783398378,
        "gradeBand": "descent"
      },
      {
        "lat": 24.200163,
        "lng": 120.610089,
        "ele": 168.5,
        "distanceKm": 13.947514984326855,
        "gradePct": -2.41048638527962,
        "smoothedEle": 167.99545324023615,
        "gradeBand": "descent"
      },
      {
        "lat": 24.19995,
        "lng": 120.610517,
        "ele": 165,
        "distanceKm": 13.996965074848642,
        "gradePct": -2.813628594387605,
        "smoothedEle": 166.2441671847226,
        "gradeBand": "descent"
      },
      {
        "lat": 24.199660333333334,
        "lng": 120.610863,
        "ele": 163.50000000000003,
        "distanceKm": 14.044598427865063,
        "gradePct": -3.271431432278303,
        "smoothedEle": 164.2621430015404,
        "gradeBand": "descent"
      },
      {
        "lat": 24.199370666666667,
        "lng": 120.611209,
        "ele": 161.99999999999997,
        "distanceKm": 14.092231839623041,
        "gradePct": -3.7904893315456283,
        "smoothedEle": 162.0312964357566,
        "gradeBand": "descent"
      },
      {
        "lat": 24.199081,
        "lng": 120.611555,
        "ele": 160.5,
        "distanceKm": 14.139865310119852,
        "gradePct": -4.297161691565919,
        "smoothedEle": 159.63871065756638,
        "gradeBand": "descent"
      },
      {
        "lat": 24.198724,
        "lng": 120.611985,
        "ele": 157.37499999999994,
        "distanceKm": 14.1988387221002,
        "gradePct": -4.523048565032655,
        "smoothedEle": 157.12010757819547,
        "gradeBand": "descent"
      },
      {
        "lat": 24.198367,
        "lng": 120.612415,
        "ele": 154.25,
        "distanceKm": 14.257812224388882,
        "gradePct": -4.333796105149532,
        "smoothedEle": 154.9757004610172,
        "gradeBand": "descent"
      },
      {
        "lat": 24.198159,
        "lng": 120.612719,
        "ele": 152,
        "distanceKm": 14.296355845719482,
        "gradePct": -4.0524107447321285,
        "smoothedEle": 153.71932988143348,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1979525,
        "lng": 120.613043,
        "ele": 150.37499999999997,
        "distanceKm": 14.336444883376256,
        "gradePct": -3.6699950833788355,
        "smoothedEle": 152.4705254064849,
        "gradeBand": "descent"
      },
      {
        "lat": 24.197746,
        "lng": 120.613367,
        "ele": 148.75,
        "distanceKm": 14.376533964659268,
        "gradePct": -3.474490084403809,
        "smoothedEle": 151.12370635791592,
        "gradeBand": "descent"
      },
      {
        "lat": 24.19737492693676,
        "lng": 120.6131627760463,
        "ele": 148.8678317007807,
        "distanceKm": 14.42270277037829,
        "gradePct": -3.363353664504115,
        "smoothedEle": 149.52565061611105,
        "gradeBand": "descent"
      },
      {
        "lat": 24.196998379946365,
        "lng": 120.61296385872978,
        "ele": 148.3443650783587,
        "distanceKm": 14.46918022393197,
        "gradePct": -3.2926512088962996,
        "smoothedEle": 148.01984593416998,
        "gradeBand": "descent"
      },
      {
        "lat": 24.19662183295597,
        "lng": 120.61276494141326,
        "ele": 147.82089845593669,
        "distanceKm": 14.5156577033496,
        "gradePct": -3.2657976593993374,
        "smoothedEle": 146.58646679488038,
        "gradeBand": "descent"
      },
      {
        "lat": 24.196231,
        "lng": 120.612617,
        "ele": 147.25,
        "distanceKm": 14.561633919684148,
        "gradePct": -3.2112725693615944,
        "smoothedEle": 145.2017380285079,
        "gradeBand": "descent"
      },
      {
        "lat": 24.195855726084147,
        "lng": 120.61292162542536,
        "ele": 144.73777090118992,
        "distanceKm": 14.613556032591497,
        "gradePct": -3.1052924126933554,
        "smoothedEle": 143.63166477160175,
        "gradeBand": "descent"
      },
      {
        "lat": 24.195444,
        "lng": 120.613176,
        "ele": 142.25,
        "distanceKm": 14.666107373316589,
        "gradePct": -2.9910273260456215,
        "smoothedEle": 142.13734735690116,
        "gradeBand": "descent"
      },
      {
        "lat": 24.194912,
        "lng": 120.613469,
        "ele": 139.75,
        "distanceKm": 14.732308389770445,
        "gradePct": -2.9880195294870866,
        "smoothedEle": 140.10893617559557,
        "gradeBand": "descent"
      },
      {
        "lat": 24.194492,
        "lng": 120.613738,
        "ele": 137.5,
        "distanceKm": 14.786396160051096,
        "gradePct": -3.0721339142870048,
        "smoothedEle": 138.30868458231848,
        "gradeBand": "descent"
      },
      {
        "lat": 24.194025,
        "lng": 120.614153,
        "ele": 134.75,
        "distanceKm": 14.853241584550279,
        "gradePct": -3.186986183974679,
        "smoothedEle": 136.1292185990688,
        "gradeBand": "descent"
      },
      {
        "lat": 24.193706,
        "lng": 120.614497,
        "ele": 134.5,
        "distanceKm": 14.902997085269549,
        "gradePct": -3.1891988543827208,
        "smoothedEle": 134.6286421663362,
        "gradeBand": "descent"
      },
      {
        "lat": 24.193314,
        "lng": 120.61497,
        "ele": 132.75,
        "distanceKm": 14.967816971678792,
        "gradePct": -3.0780234632665295,
        "smoothedEle": 132.7710253854974,
        "gradeBand": "descent"
      },
      {
        "lat": 24.193164,
        "lng": 120.61521,
        "ele": 131.75,
        "distanceKm": 14.997325840931497,
        "gradePct": -2.9733786638498962,
        "smoothedEle": 132.00556976470702,
        "gradeBand": "descent"
      },
      {
        "lat": 24.193087,
        "lng": 120.61526,
        "ele": 131.25,
        "distanceKm": 15.007277106115389,
        "gradePct": -2.940516775336558,
        "smoothedEle": 131.74683686992583,
        "gradeBand": "descent"
      },
      {
        "lat": 24.192875,
        "lng": 120.615313,
        "ele": 130.75,
        "distanceKm": 15.031455642568677,
        "gradePct": -2.811802202704352,
        "smoothedEle": 131.21593535352545,
        "gradeBand": "descent"
      },
      {
        "lat": 24.192811,
        "lng": 120.615289,
        "ele": 130.5,
        "distanceKm": 15.038976955838502,
        "gradePct": -2.7719220752460485,
        "smoothedEle": 131.05046646158928,
        "gradeBand": "descent"
      },
      {
        "lat": 24.192647,
        "lng": 120.615018,
        "ele": 130.5,
        "distanceKm": 15.07196334158845,
        "gradePct": -2.6140142322817845,
        "smoothedEle": 130.33656055617308,
        "gradeBand": "descent"
      },
      {
        "lat": 24.192594,
        "lng": 120.614988,
        "ele": 130.25,
        "distanceKm": 15.078595877365721,
        "gradePct": -2.568953508591472,
        "smoothedEle": 130.22665131885046,
        "gradeBand": "descent"
      },
      {
        "lat": 24.192191,
        "lng": 120.615144,
        "ele": 129,
        "distanceKm": 15.126119003897276,
        "gradePct": -2.2676510077093406,
        "smoothedEle": 129.43070918336414,
        "gradeBand": "descent"
      },
      {
        "lat": 24.191824,
        "lng": 120.615667,
        "ele": 127,
        "distanceKm": 15.193047318625203,
        "gradePct": -1.8724971715878593,
        "smoothedEle": 128.37155964529072,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1914635,
        "lng": 120.6160615,
        "ele": 126.75,
        "distanceKm": 15.249686543852059,
        "gradePct": -1.5358321034708722,
        "smoothedEle": 127.74702062857276,
        "gradeBand": "descent"
      },
      {
        "lat": 24.191103,
        "lng": 120.616456,
        "ele": 126.5,
        "distanceKm": 15.306325848983395,
        "gradePct": -1.1439693696253852,
        "smoothedEle": 127.47427653683027,
        "gradeBand": "descent"
      },
      {
        "lat": 24.19080178977344,
        "lng": 120.61625946996267,
        "ele": 126.41509287387456,
        "distanceKm": 15.345302214934394,
        "gradePct": -0.9099948586819583,
        "smoothedEle": 127.30714258390893,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1905,
        "lng": 120.616064,
        "ele": 126.25,
        "distanceKm": 15.38427919096497,
        "gradePct": -0.6765250266717782,
        "smoothedEle": 127.15726638567274,
        "gradeBand": "descent"
      },
      {
        "lat": 24.190178,
        "lng": 120.615892,
        "ele": 126.5,
        "distanceKm": 15.42410822662526,
        "gradePct": -0.5121733961308568,
        "smoothedEle": 127.00471613166629,
        "gradeBand": "descent"
      },
      {
        "lat": 24.189792,
        "lng": 120.615721,
        "ele": 126.75,
        "distanceKm": 15.470401618440944,
        "gradePct": -0.41338155526642034,
        "smoothedEle": 126.82050498415867,
        "gradeBand": "descent"
      },
      {
        "lat": 24.18947,
        "lng": 120.61559199999999,
        "ele": 127.875,
        "distanceKm": 15.508522391161451,
        "gradePct": -0.43672359675714895,
        "smoothedEle": 126.59141038472352,
        "gradeBand": "descent"
      },
      {
        "lat": 24.189148,
        "lng": 120.615463,
        "ele": 129,
        "distanceKm": 15.546643175219417,
        "gradePct": -0.4554608476078899,
        "smoothedEle": 126.39106456180552,
        "gradeBand": "descent"
      },
      {
        "lat": 24.188729666666667,
        "lng": 120.61530666666667,
        "ele": 127.75000000000001,
        "distanceKm": 15.595788328411752,
        "gradePct": -0.4382911050119149,
        "smoothedEle": 126.23660272070542,
        "gradeBand": "descent"
      },
      {
        "lat": 24.18831133333333,
        "lng": 120.61515033333333,
        "ele": 126.49999999999999,
        "distanceKm": 15.644933498384615,
        "gradePct": -0.40765082921341794,
        "smoothedEle": 126.10654633466747,
        "gradeBand": "descent"
      },
      {
        "lat": 24.187893,
        "lng": 120.614994,
        "ele": 125.25,
        "distanceKm": 15.694078685137038,
        "gradePct": -0.34760468866425626,
        "smoothedEle": 125.98300342009222,
        "gradeBand": "descent"
      },
      {
        "lat": 24.187569338068908,
        "lng": 120.61486298475772,
        "ele": 123.69659637470407,
        "distanceKm": 15.73244347515184,
        "gradePct": -0.3167653503383374,
        "smoothedEle": 125.83216114557561,
        "gradeBand": "descent"
      },
      {
        "lat": 24.187244,
        "lng": 120.614737,
        "ele": 124,
        "distanceKm": 15.770810212198647,
        "gradePct": -0.37493280859221434,
        "smoothedEle": 125.56524262373759,
        "gradeBand": "descent"
      },
      {
        "lat": 24.186789933618112,
        "lng": 120.6145659288982,
        "ele": 124.90995266911438,
        "distanceKm": 15.824198779483865,
        "gradePct": -0.5671180667604168,
        "smoothedEle": 125.02718197404383,
        "gradeBand": "descent"
      },
      {
        "lat": 24.186334,
        "lng": 120.614401,
        "ele": 125,
        "distanceKm": 15.877585263288166,
        "gradePct": -0.7293008606606389,
        "smoothedEle": 124.56586344795085,
        "gradeBand": "descent"
      },
      {
        "lat": 24.185838,
        "lng": 120.614309,
        "ele": 125.25,
        "distanceKm": 15.933521945078803,
        "gradePct": -0.8494831988245041,
        "smoothedEle": 124.12569180081904,
        "gradeBand": "descent"
      },
      {
        "lat": 24.185296,
        "lng": 120.614256,
        "ele": 124.25,
        "distanceKm": 15.994028982054624,
        "gradePct": -0.8921480859971527,
        "smoothedEle": 123.54694304934712,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1849285,
        "lng": 120.614189,
        "ele": 123.87500000000001,
        "distanceKm": 16.035454455783423,
        "gradePct": -0.9527449904213688,
        "smoothedEle": 123.02443044625738,
        "gradeBand": "descent"
      },
      {
        "lat": 24.184561,
        "lng": 120.614122,
        "ele": 123.5,
        "distanceKm": 16.076879932724342,
        "gradePct": -1.0782665261243916,
        "smoothedEle": 122.41542523531174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.183961,
        "lng": 120.614036,
        "ele": 122.75,
        "distanceKm": 16.144164875876783,
        "gradePct": -1.2664288626715081,
        "smoothedEle": 121.49103462835066,
        "gradeBand": "descent"
      },
      {
        "lat": 24.183592,
        "lng": 120.613969,
        "ele": 121.25,
        "distanceKm": 16.185754902949515,
        "gradePct": -1.2831099072365622,
        "smoothedEle": 121.05986465694653,
        "gradeBand": "descent"
      },
      {
        "lat": 24.183319,
        "lng": 120.614504,
        "ele": 117.75,
        "distanceKm": 16.24793666218676,
        "gradePct": -1.0931364609820133,
        "smoothedEle": 120.65465381341097,
        "gradeBand": "descent"
      },
      {
        "lat": 24.183154,
        "lng": 120.61483,
        "ele": 117.5,
        "distanceKm": 16.28575377337962,
        "gradePct": -0.8787088869933899,
        "smoothedEle": 120.53609467422748,
        "gradeBand": "descent"
      },
      {
        "lat": 24.182969,
        "lng": 120.61526,
        "ele": 117,
        "distanceKm": 16.333979099434323,
        "gradePct": -0.6596311218126397,
        "smoothedEle": 120.31170913174294,
        "gradeBand": "descent"
      },
      {
        "lat": 24.182376,
        "lng": 120.615167,
        "ele": 119.75,
        "distanceKm": 16.400589185231237,
        "gradePct": -0.5359977962552823,
        "smoothedEle": 119.89120065057384,
        "gradeBand": "descent"
      },
      {
        "lat": 24.181882,
        "lng": 120.61510150000001,
        "ele": 121.12499999999996,
        "distanceKm": 16.45591992085501,
        "gradePct": -0.5412413319730567,
        "smoothedEle": 119.54714310671565,
        "gradeBand": "descent"
      },
      {
        "lat": 24.181388,
        "lng": 120.615036,
        "ele": 122.5,
        "distanceKm": 16.511250659568237,
        "gradePct": -0.3851867927743711,
        "smoothedEle": 119.64708772510937,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1809665,
        "lng": 120.61497575,
        "ele": 121.37500000000003,
        "distanceKm": 16.558516184209754,
        "gradePct": -0.0965043322390219,
        "smoothedEle": 119.96379821593479,
        "gradeBand": "descent"
      },
      {
        "lat": 24.180545,
        "lng": 120.6149155,
        "ele": 120.24999999999996,
        "distanceKm": 16.605781711462104,
        "gradePct": 0.12055188446718335,
        "smoothedEle": 120.10001625631516,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.180123499999997,
        "lng": 120.61485525,
        "ele": 119.12499999999997,
        "distanceKm": 16.65304724132467,
        "gradePct": 0.12189107572655232,
        "smoothedEle": 119.8087881521346,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.179702,
        "lng": 120.614795,
        "ele": 118,
        "distanceKm": 16.700312773797403,
        "gradePct": -0.23947182441938336,
        "smoothedEle": 119.14838683382594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.179364500000002,
        "lng": 120.614733,
        "ele": 119.62499999999993,
        "distanceKm": 16.738364461799453,
        "gradePct": -0.7306316693358877,
        "smoothedEle": 118.36750491739375,
        "gradeBand": "descent"
      },
      {
        "lat": 24.179027,
        "lng": 120.614671,
        "ele": 121.25,
        "distanceKm": 16.776416152551104,
        "gradePct": -1.264722721387014,
        "smoothedEle": 117.48594002399818,
        "gradeBand": "descent"
      },
      {
        "lat": 24.178574,
        "lng": 120.61460075000001,
        "ele": 118.62500000000004,
        "distanceKm": 16.827289105438506,
        "gradePct": -1.7685813164078388,
        "smoothedEle": 116.43033511388319,
        "gradeBand": "descent"
      },
      {
        "lat": 24.178121,
        "lng": 120.6145305,
        "ele": 115.9999999999999,
        "distanceKm": 16.878162061869496,
        "gradePct": -1.9712388885054606,
        "smoothedEle": 115.51540222431726,
        "gradeBand": "descent"
      },
      {
        "lat": 24.177668,
        "lng": 120.61446025,
        "ele": 113.37499999999996,
        "distanceKm": 16.92903502184382,
        "gradePct": -1.964336644587476,
        "smoothedEle": 114.6302867602855,
        "gradeBand": "descent"
      },
      {
        "lat": 24.177215,
        "lng": 120.61439,
        "ele": 110.75,
        "distanceKm": 16.979907985361223,
        "gradePct": -1.8443715823090223,
        "smoothedEle": 113.72474193686324,
        "gradeBand": "descent"
      },
      {
        "lat": 24.176686500000002,
        "lng": 120.61431300000001,
        "ele": 111.125,
        "distanceKm": 17.039191415025734,
        "gradePct": -1.9180865809571297,
        "smoothedEle": 112.38010294562983,
        "gradeBand": "descent"
      },
      {
        "lat": 24.176158,
        "lng": 120.614236,
        "ele": 111.5,
        "distanceKm": 17.098474848952517,
        "gradePct": -1.9799610528724612,
        "smoothedEle": 111.20206718616501,
        "gradeBand": "descent"
      },
      {
        "lat": 24.175777333333333,
        "lng": 120.61416666666668,
        "ele": 110.66666666666664,
        "distanceKm": 17.141383466831176,
        "gradePct": -1.904999238915209,
        "smoothedEle": 110.60048448762034,
        "gradeBand": "descent"
      },
      {
        "lat": 24.175396666666668,
        "lng": 120.61409733333333,
        "ele": 109.83333333333336,
        "distanceKm": 17.18429208814812,
        "gradePct": -1.7647754119734165,
        "smoothedEle": 110.09575294643048,
        "gradeBand": "descent"
      },
      {
        "lat": 24.175016,
        "lng": 120.614028,
        "ele": 109,
        "distanceKm": 17.22720071290361,
        "gradePct": -1.4972227215178417,
        "smoothedEle": 109.65762499328952,
        "gradeBand": "descent"
      },
      {
        "lat": 24.17456982110525,
        "lng": 120.6139643387226,
        "ele": 109.25,
        "distanceKm": 17.277232158542176,
        "gradePct": -1.2512470820376338,
        "smoothedEle": 109.12169177049975,
        "gradeBand": "descent"
      },
      {
        "lat": 24.174123410552625,
        "lng": 120.6139021693613,
        "ele": 109.25,
        "distanceKm": 17.327269850377476,
        "gradePct": -1.151875277389561,
        "smoothedEle": 108.49460811038874,
        "gradeBand": "descent"
      },
      {
        "lat": 24.173677,
        "lng": 120.61384,
        "ele": 109.25,
        "distanceKm": 17.37730754499238,
        "gradePct": -1.1452834933116631,
        "smoothedEle": 107.88734472238923,
        "gradeBand": "descent"
      },
      {
        "lat": 24.173282,
        "lng": 120.613759,
        "ele": 108,
        "distanceKm": 17.421991614150823,
        "gradePct": -1.1140506298055937,
        "smoothedEle": 107.48271238251695,
        "gradeBand": "descent"
      },
      {
        "lat": 24.172745,
        "lng": 120.613583,
        "ele": 106,
        "distanceKm": 17.484315518731307,
        "gradePct": -0.9364363521938973,
        "smoothedEle": 107.16004879573447,
        "gradeBand": "descent"
      },
      {
        "lat": 24.172333817206024,
        "lng": 120.61345444791763,
        "ele": 104.76273903650464,
        "distanceKm": 17.531860476924045,
        "gradePct": -0.7153681780174591,
        "smoothedEle": 107.00815936689943,
        "gradeBand": "descent"
      },
      {
        "lat": 24.171923408603014,
        "lng": 120.61332272395882,
        "ele": 105.13136951825233,
        "distanceKm": 17.579412086672523,
        "gradePct": -0.4798093972653507,
        "smoothedEle": 106.90866845076584,
        "gradeBand": "descent"
      },
      {
        "lat": 24.171513,
        "lng": 120.613191,
        "ele": 105.5,
        "distanceKm": 17.626963708494102,
        "gradePct": -0.2932099009782558,
        "smoothedEle": 106.87055103234675,
        "gradeBand": "descent"
      },
      {
        "lat": 24.171523,
        "lng": 120.613034,
        "ele": 106,
        "distanceKm": 17.64292948573248,
        "gradePct": -0.24788941138354034,
        "smoothedEle": 106.87853392096594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.171327,
        "lng": 120.6125766,
        "ele": 106.69999999999997,
        "distanceKm": 17.694194271199443,
        "gradePct": -0.07232994584322253,
        "smoothedEle": 106.98382976240559,
        "gradeBand": "descent"
      },
      {
        "lat": 24.171131,
        "lng": 120.6121192,
        "ele": 107.4,
        "distanceKm": 17.745459121149615,
        "gradePct": 0.14491050001487388,
        "smoothedEle": 107.26952830023085,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.170935,
        "lng": 120.61166180000001,
        "ele": 108.1,
        "distanceKm": 17.796724035580887,
        "gradePct": 0.4037339983939404,
        "smoothedEle": 107.70225917534067,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.170738999999998,
        "lng": 120.6112044,
        "ele": 108.80000000000003,
        "distanceKm": 17.847989014495727,
        "gradePct": 0.6308395628211252,
        "smoothedEle": 108.15060511854531,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.170543,
        "lng": 120.610747,
        "ele": 109.5,
        "distanceKm": 17.899254057892023,
        "gradePct": 0.7691115156649131,
        "smoothedEle": 108.55025093849119,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.170305,
        "lng": 120.610737,
        "ele": 109,
        "distanceKm": 17.925737923780005,
        "gradePct": 0.7829846439038333,
        "smoothedEle": 108.72559153626742,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.169823333333333,
        "lng": 120.610584,
        "ele": 109.16666666666667,
        "distanceKm": 17.98150060397491,
        "gradePct": 0.7238809968207488,
        "smoothedEle": 109.02151907443834,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.169341666666664,
        "lng": 120.61043099999999,
        "ele": 109.33333333333333,
        "distanceKm": 18.03726330047039,
        "gradePct": 0.5881401453357377,
        "smoothedEle": 109.23308198877217,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16886,
        "lng": 120.610278,
        "ele": 109.5,
        "distanceKm": 18.093026013264627,
        "gradePct": 0.42929059951116394,
        "smoothedEle": 109.3602803010792,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1684686,
        "lng": 120.61015499999999,
        "ele": 109.5,
        "distanceKm": 18.138301246543882,
        "gradePct": 0.28892310389275727,
        "smoothedEle": 109.37011017019468,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1680772,
        "lng": 120.61003199999999,
        "ele": 109.5,
        "distanceKm": 18.183576490366132,
        "gradePct": 0.1491098512634542,
        "smoothedEle": 109.32761466178349,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1676858,
        "lng": 120.609909,
        "ele": 109.5,
        "distanceKm": 18.22885174473009,
        "gradePct": 0.034581130672798235,
        "smoothedEle": 109.27033092170397,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1672944,
        "lng": 120.609786,
        "ele": 109.5,
        "distanceKm": 18.274127009637176,
        "gradePct": -0.07314569744816195,
        "smoothedEle": 109.17087907086037,
        "gradeBand": "descent"
      },
      {
        "lat": 24.166903,
        "lng": 120.609663,
        "ele": 109.5,
        "distanceKm": 18.319402285086106,
        "gradePct": -0.16837392949613478,
        "smoothedEle": 109.02925908954914,
        "gradeBand": "descent"
      },
      {
        "lat": 24.16647175,
        "lng": 120.609531,
        "ele": 109.125,
        "distanceKm": 18.369189906707057,
        "gradePct": -0.2590145580056893,
        "smoothedEle": 108.8230888454847,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1660405,
        "lng": 120.609399,
        "ele": 108.75,
        "distanceKm": 18.41897754049286,
        "gradePct": -0.3516231089829217,
        "smoothedEle": 108.57957787151739,
        "gradeBand": "descent"
      },
      {
        "lat": 24.165609250000003,
        "lng": 120.609267,
        "ele": 108.375,
        "distanceKm": 18.46876518644296,
        "gradePct": -0.441965363219589,
        "smoothedEle": 108.29872614940268,
        "gradeBand": "descent"
      },
      {
        "lat": 24.165178,
        "lng": 120.60913500000001,
        "ele": 108,
        "distanceKm": 18.51855284455795,
        "gradePct": -0.5116439761879565,
        "smoothedEle": 108.00862816687719,
        "gradeBand": "descent"
      },
      {
        "lat": 24.16474675,
        "lng": 120.609003,
        "ele": 107.625,
        "distanceKm": 18.568340514837672,
        "gradePct": -0.5294038163689497,
        "smoothedEle": 107.76779853940985,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1643155,
        "lng": 120.60887100000001,
        "ele": 107.25,
        "distanceKm": 18.61812819728081,
        "gradePct": -0.44756056730315114,
        "smoothedEle": 107.68861086871193,
        "gradeBand": "descent"
      },
      {
        "lat": 24.163884250000002,
        "lng": 120.608739,
        "ele": 106.875,
        "distanceKm": 18.667915891888352,
        "gradePct": -0.2887320227960412,
        "smoothedEle": 107.72605296776273,
        "gradeBand": "descent"
      },
      {
        "lat": 24.163453,
        "lng": 120.608607,
        "ele": 106.5,
        "distanceKm": 18.71770359865974,
        "gradePct": -0.06672579295481308,
        "smoothedEle": 107.88012488605091,
        "gradeBand": "descent"
      },
      {
        "lat": 24.162922,
        "lng": 120.608291,
        "ele": 106.75,
        "distanceKm": 18.78489022579839,
        "gradePct": 0.26142786951187796,
        "smoothedEle": 108.26433184289546,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16254011740297,
        "lng": 120.60812357349458,
        "ele": 108.30923741070295,
        "distanceKm": 18.830624970601914,
        "gradePct": 0.47846315640281917,
        "smoothedEle": 108.65493519498641,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.162150893922377,
        "lng": 120.60797385879567,
        "ele": 109.04738992856238,
        "distanceKm": 18.876492632089892,
        "gradePct": 0.6739628864942471,
        "smoothedEle": 109.10052012819808,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.16176167044178,
        "lng": 120.60782414409675,
        "ele": 109.78554244642174,
        "distanceKm": 18.922360308907727,
        "gradePct": 0.7554128563904241,
        "smoothedEle": 109.41758001229516,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.161372446961188,
        "lng": 120.60767442939783,
        "ele": 110.52369496428116,
        "distanceKm": 18.968228001054005,
        "gradePct": 0.7087456251486185,
        "smoothedEle": 109.58654010406319,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.160983223480592,
        "lng": 120.60752471469893,
        "ele": 111.26184748214058,
        "distanceKm": 19.014095708528803,
        "gradePct": 0.5516021731666874,
        "smoothedEle": 109.61696929534851,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.160594,
        "lng": 120.607375,
        "ele": 112,
        "distanceKm": 19.059963431332143,
        "gradePct": 0.2662706792823722,
        "smoothedEle": 109.47248729185615,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.160115,
        "lng": 120.607209,
        "ele": 112.25,
        "distanceKm": 19.115825080172137,
        "gradePct": -0.18547593825632513,
        "smoothedEle": 109.00145342868576,
        "gradeBand": "descent"
      },
      {
        "lat": 24.159721,
        "lng": 120.607393,
        "ele": 109.75,
        "distanceKm": 19.163447304713863,
        "gradePct": -0.5331401976462421,
        "smoothedEle": 108.50264934176622,
        "gradeBand": "descent"
      },
      {
        "lat": 24.159235000000002,
        "lng": 120.6076255,
        "ele": 107.50000000000007,
        "distanceKm": 19.22241188410168,
        "gradePct": -1.0038209141250967,
        "smoothedEle": 107.58313175397528,
        "gradeBand": "descent"
      },
      {
        "lat": 24.158749,
        "lng": 120.607858,
        "ele": 105.25,
        "distanceKm": 19.281376499393975,
        "gradePct": -1.4663452106763426,
        "smoothedEle": 106.35923864529988,
        "gradeBand": "descent"
      },
      {
        "lat": 24.158264,
        "lng": 120.60808,
        "ele": 104.25,
        "distanceKm": 19.339820504779922,
        "gradePct": -1.9408325150388632,
        "smoothedEle": 104.86845583325831,
        "gradeBand": "descent"
      },
      {
        "lat": 24.157865230069675,
        "lng": 120.60827855764165,
        "ele": 104.04316912327539,
        "distanceKm": 19.388523350913847,
        "gradePct": -2.333912536006275,
        "smoothedEle": 103.44377822562794,
        "gradeBand": "descent"
      },
      {
        "lat": 24.157466,
        "lng": 120.608476,
        "ele": 102.75,
        "distanceKm": 19.43722616075,
        "gradePct": -2.5734622730190346,
        "smoothedEle": 102.12871616419828,
        "gradeBand": "descent"
      },
      {
        "lat": 24.157157,
        "lng": 120.608616,
        "ele": 101.25,
        "distanceKm": 19.474405643789453,
        "gradePct": -2.6137755948983092,
        "smoothedEle": 101.2763773189689,
        "gradeBand": "descent"
      },
      {
        "lat": 24.156778,
        "lng": 120.608703,
        "ele": 100.25,
        "distanceKm": 19.517463040473405,
        "gradePct": -2.531408055734383,
        "smoothedEle": 100.37593129042666,
        "gradeBand": "descent"
      },
      {
        "lat": 24.156121,
        "lng": 120.608629,
        "ele": 98.5,
        "distanceKm": 19.590902987681734,
        "gradePct": -2.1502025205664954,
        "smoothedEle": 99.07911878020165,
        "gradeBand": "descent"
      },
      {
        "lat": 24.155627,
        "lng": 120.60879,
        "ele": 96.25,
        "distanceKm": 19.648210674613765,
        "gradePct": -1.8769270887851015,
        "smoothedEle": 98.12304224367705,
        "gradeBand": "descent"
      },
      {
        "lat": 24.155246312548446,
        "lng": 120.60862587444386,
        "ele": 96.41833203865343,
        "distanceKm": 19.69369875228286,
        "gradePct": -1.712311811006706,
        "smoothedEle": 97.4482828822047,
        "gradeBand": "descent"
      },
      {
        "lat": 24.154858234411336,
        "lng": 120.60848240583289,
        "ele": 96.25124902899007,
        "distanceKm": 19.73924005526765,
        "gradePct": -1.540206360750565,
        "smoothedEle": 96.91097709941138,
        "gradeBand": "descent"
      },
      {
        "lat": 24.154470156274225,
        "lng": 120.60833893722193,
        "ele": 96.08416601932672,
        "distanceKm": 19.784781372384572,
        "gradePct": -1.3831020036773203,
        "smoothedEle": 96.42101108285149,
        "gradeBand": "descent"
      },
      {
        "lat": 24.15408207813711,
        "lng": 120.60819546861096,
        "ele": 95.91708300966336,
        "distanceKm": 19.830322703634746,
        "gradePct": -1.193577557223091,
        "smoothedEle": 96.03431601817479,
        "gradeBand": "descent"
      },
      {
        "lat": 24.153694,
        "lng": 120.608052,
        "ele": 95.75,
        "distanceKm": 19.87586404901632,
        "gradePct": -1.0164430195562169,
        "smoothedEle": 95.67995260374059,
        "gradeBand": "descent"
      },
      {
        "lat": 24.153288500000002,
        "lng": 120.607906,
        "ele": 95.75,
        "distanceKm": 19.923324592753886,
        "gradePct": -0.8803429341713628,
        "smoothedEle": 95.3380651743687,
        "gradeBand": "descent"
      },
      {
        "lat": 24.152883,
        "lng": 120.60776,
        "ele": 95.75,
        "distanceKm": 19.970785151165433,
        "gradePct": -0.900583587952045,
        "smoothedEle": 94.77042525135661,
        "gradeBand": "descent"
      },
      {
        "lat": 24.152538,
        "lng": 120.607688,
        "ele": 95,
        "distanceKm": 20.00983680856364,
        "gradePct": -1.0216181868475722,
        "smoothedEle": 94.16502700838001,
        "gradeBand": "descent"
      },
      {
        "lat": 24.152007,
        "lng": 120.607694,
        "ele": 95,
        "distanceKm": 20.068884534369477,
        "gradePct": -1.270844631798082,
        "smoothedEle": 93.19257189472548,
        "gradeBand": "descent"
      },
      {
        "lat": 24.151458,
        "lng": 120.607839,
        "ele": 93.75,
        "distanceKm": 20.13167838192577,
        "gradePct": -1.73438770791192,
        "smoothedEle": 91.76937639045364,
        "gradeBand": "descent"
      },
      {
        "lat": 24.151105,
        "lng": 120.60798,
        "ele": 91.25,
        "distanceKm": 20.17345606060027,
        "gradePct": -2.0229313690566855,
        "smoothedEle": 90.68315674491666,
        "gradeBand": "descent"
      },
      {
        "lat": 24.150547,
        "lng": 120.608205,
        "ele": 88.5,
        "distanceKm": 20.23956942357921,
        "gradePct": -2.361910542596257,
        "smoothedEle": 88.95154043447273,
        "gradeBand": "descent"
      },
      {
        "lat": 24.150101,
        "lng": 120.60832,
        "ele": 88,
        "distanceKm": 20.290516587343642,
        "gradePct": -2.5011923552264097,
        "smoothedEle": 87.69990602235782,
        "gradeBand": "descent"
      },
      {
        "lat": 24.150032942709217,
        "lng": 120.60877466626704,
        "ele": 85.3948923652823,
        "distanceKm": 20.33726496180914,
        "gradePct": -2.5075717240958486,
        "smoothedEle": 86.60898186529433,
        "gradeBand": "descent"
      },
      {
        "lat": 24.149963,
        "lng": 120.609229,
        "ele": 82.75,
        "distanceKm": 20.384014486268235,
        "gradePct": -2.3748104466185693,
        "smoothedEle": 85.65699354199421,
        "gradeBand": "descent"
      },
      {
        "lat": 24.149923,
        "lng": 120.60969,
        "ele": 82.75,
        "distanceKm": 20.43099994971845,
        "gradePct": -2.1229475019173383,
        "smoothedEle": 84.93009386345997,
        "gradeBand": "descent"
      },
      {
        "lat": 24.149677,
        "lng": 120.610287,
        "ele": 82.5,
        "distanceKm": 20.497463405473923,
        "gradePct": -1.7522395490109297,
        "smoothedEle": 84.03331536859315,
        "gradeBand": "descent"
      },
      {
        "lat": 24.149503,
        "lng": 120.61068675,
        "ele": 83.06250000000001,
        "distanceKm": 20.54240174001524,
        "gradePct": -1.6049602867289379,
        "smoothedEle": 83.29445802735044,
        "gradeBand": "descent"
      },
      {
        "lat": 24.149328999999998,
        "lng": 120.6110865,
        "ele": 83.62500000000003,
        "distanceKm": 20.587340124402633,
        "gradePct": -1.5389068095987979,
        "smoothedEle": 82.52772985476916,
        "gradeBand": "descent"
      },
      {
        "lat": 24.149155,
        "lng": 120.61148625,
        "ele": 84.18749999999999,
        "distanceKm": 20.63227855863561,
        "gradePct": -1.5437743864199671,
        "smoothedEle": 81.82529306893056,
        "gradeBand": "descent"
      },
      {
        "lat": 24.148981,
        "lng": 120.611886,
        "ele": 84.75,
        "distanceKm": 20.67721704271418,
        "gradePct": -1.5963642682427577,
        "smoothedEle": 81.11376707101984,
        "gradeBand": "descent"
      },
      {
        "lat": 24.148478653887242,
        "lng": 120.61176004396779,
        "ele": 81.64891560303077,
        "distanceKm": 20.734518798355246,
        "gradePct": -1.689910433558423,
        "smoothedEle": 80.04424519701385,
        "gradeBand": "descent"
      },
      {
        "lat": 24.147979826943622,
        "lng": 120.61161752198389,
        "ele": 79.07445780151531,
        "distanceKm": 20.791839975180405,
        "gradePct": -1.8446139659651375,
        "smoothedEle": 78.76816434274643,
        "gradeBand": "descent"
      },
      {
        "lat": 24.147481,
        "lng": 120.611475,
        "ele": 76.5,
        "distanceKm": 20.849161166245253,
        "gradePct": -2.0878105855250126,
        "smoothedEle": 77.38236394406117,
        "gradeBand": "descent"
      },
      {
        "lat": 24.146994666666664,
        "lng": 120.611341,
        "ele": 74.8333333333333,
        "distanceKm": 20.904922056099956,
        "gradePct": -2.298647827042126,
        "smoothedEle": 75.99936478548571,
        "gradeBand": "descent"
      },
      {
        "lat": 24.146508333333333,
        "lng": 120.61120700000001,
        "ele": 73.1666666666667,
        "distanceKm": 20.960682958569354,
        "gradePct": -2.4218168617399076,
        "smoothedEle": 74.61814639227713,
        "gradeBand": "descent"
      },
      {
        "lat": 24.146022,
        "lng": 120.611073,
        "ele": 71.5,
        "distanceKm": 21.01644387365472,
        "gradePct": -2.3355976735237234,
        "smoothedEle": 73.50214373681099,
        "gradeBand": "descent"
      },
      {
        "lat": 24.145711,
        "lng": 120.610999,
        "ele": 71.25,
        "distanceKm": 21.051831294454395,
        "gradePct": -2.220203096857504,
        "smoothedEle": 72.87573238923454,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1452618376892,
        "lng": 120.61086458080442,
        "ele": 71.41297175885026,
        "distanceKm": 21.103604751712947,
        "gradePct": -1.9897287315991503,
        "smoothedEle": 72.05257952073273,
        "gradeBand": "descent"
      },
      {
        "lat": 24.144811,
        "lng": 120.610737,
        "ele": 72,
        "distanceKm": 21.155380127654762,
        "gradePct": -1.7154321342709895,
        "smoothedEle": 71.31863522727087,
        "gradeBand": "descent"
      },
      {
        "lat": 24.144227,
        "lng": 120.610562,
        "ele": 72.25,
        "distanceKm": 21.22270202499996,
        "gradePct": -1.3905053667071292,
        "smoothedEle": 70.61035417496213,
        "gradeBand": "descent"
      },
      {
        "lat": 24.143884,
        "lng": 120.610476,
        "ele": 70.5,
        "distanceKm": 21.26182746330163,
        "gradePct": -1.2181456239198993,
        "smoothedEle": 70.28051076478232,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1433575,
        "lng": 120.61032750000001,
        "ele": 69.50000000000003,
        "distanceKm": 21.322279670733288,
        "gradePct": -1.0081687309513434,
        "smoothedEle": 69.77151485991517,
        "gradeBand": "descent"
      },
      {
        "lat": 24.142831,
        "lng": 120.610179,
        "ele": 68.5,
        "distanceKm": 21.382731893634865,
        "gradePct": -0.9561525679231372,
        "smoothedEle": 69.11856729276855,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1424,
        "lng": 120.610107,
        "ele": 68.75,
        "distanceKm": 21.431210624670353,
        "gradePct": -1.030276628752329,
        "smoothedEle": 68.47806995026681,
        "gradeBand": "descent"
      },
      {
        "lat": 24.141994948918068,
        "lng": 120.61006438731818,
        "ele": 68.1828818179902,
        "distanceKm": 21.47645738531216,
        "gradePct": -1.1041775098934647,
        "smoothedEle": 67.94897462873419,
        "gradeBand": "descent"
      },
      {
        "lat": 24.14159,
        "lng": 120.61002,
        "ele": 67.5,
        "distanceKm": 21.521710406511364,
        "gradePct": -1.0298089232583045,
        "smoothedEle": 67.71669010814327,
        "gradeBand": "descent"
      },
      {
        "lat": 24.141037,
        "lng": 120.6099795,
        "ele": 66.37499999999997,
        "distanceKm": 21.583338456063434,
        "gradePct": -0.6269864499240989,
        "smoothedEle": 67.8565805358069,
        "gradeBand": "descent"
      },
      {
        "lat": 24.140484,
        "lng": 120.609939,
        "ele": 65.25,
        "distanceKm": 21.644966506800806,
        "gradePct": -0.123172808169429,
        "smoothedEle": 68.07086921909676,
        "gradeBand": "descent"
      },
      {
        "lat": 24.140086,
        "lng": 120.609888,
        "ele": 65.75,
        "distanceKm": 21.689523689585204,
        "gradePct": 0.235640662013723,
        "smoothedEle": 68.35318639268522,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.139612500000002,
        "lng": 120.60984400000001,
        "ele": 68.37499999999991,
        "distanceKm": 21.742363522569644,
        "gradePct": 0.5688581792229377,
        "smoothedEle": 68.90128728236992,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.139139,
        "lng": 120.6098,
        "ele": 71,
        "distanceKm": 21.79520335695178,
        "gradePct": 0.7840449390342838,
        "smoothedEle": 69.46592620500155,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13861,
        "lng": 120.60975,
        "ele": 70.75,
        "distanceKm": 21.854243955253555,
        "gradePct": 0.8838457039489742,
        "smoothedEle": 69.89734313660638,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.138508,
        "lng": 120.609685,
        "ele": 70.25,
        "distanceKm": 21.867364234462386,
        "gradePct": 0.8770541231081697,
        "smoothedEle": 69.96689090716642,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.138353,
        "lng": 120.609706,
        "ele": 70.5,
        "distanceKm": 21.884730702516006,
        "gradePct": 0.8805457214956323,
        "smoothedEle": 70.08390916158481,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.137999,
        "lng": 120.609812,
        "ele": 72.25,
        "distanceKm": 21.925536872273177,
        "gradePct": 0.7866523747073189,
        "smoothedEle": 70.3000513211691,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.137439,
        "lng": 120.610039,
        "ele": 74.25,
        "distanceKm": 21.99192993343206,
        "gradePct": 0.4437659255828963,
        "smoothedEle": 70.31847872000735,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1369585,
        "lng": 120.610198,
        "ele": 71.5,
        "distanceKm": 22.04774208956374,
        "gradePct": -0.01544324448342854,
        "smoothedEle": 69.81894671335212,
        "gradeBand": "descent"
      },
      {
        "lat": 24.136478,
        "lng": 120.610357,
        "ele": 68.75,
        "distanceKm": 22.10355426322219,
        "gradePct": -0.5515316865592317,
        "smoothedEle": 69.08055044308873,
        "gradeBand": "descent"
      },
      {
        "lat": 24.135974,
        "lng": 120.610305,
        "ele": 68,
        "distanceKm": 22.159844445867236,
        "gradePct": -0.9442734154161732,
        "smoothedEle": 68.42102655982347,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13547578816848,
        "lng": 120.61031900651572,
        "ele": 66.67670979209981,
        "distanceKm": 22.21526137981551,
        "gradePct": -1.276872312285346,
        "smoothedEle": 67.55591212836205,
        "gradeBand": "descent"
      },
      {
        "lat": 24.134977390294925,
        "lng": 120.61032409023366,
        "ele": 65.23496105715937,
        "distanceKm": 22.270683172273298,
        "gradePct": -1.5215378387906198,
        "smoothedEle": 66.47236001302869,
        "gradeBand": "descent"
      },
      {
        "lat": 24.134479,
        "lng": 120.61033,
        "ele": 64.25,
        "distanceKm": 22.3261049657114,
        "gradePct": -1.504408880518353,
        "smoothedEle": 65.807517393041,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13412037931415,
        "lng": 120.6102995600293,
        "ele": 64.20761869875204,
        "distanceKm": 22.36610127812255,
        "gradePct": -1.3407565425820966,
        "smoothedEle": 65.64183799004374,
        "gradeBand": "descent"
      },
      {
        "lat": 24.133762,
        "lng": 120.610265,
        "ele": 65.5,
        "distanceKm": 22.40610531425408,
        "gradePct": -1.0816819052994442,
        "smoothedEle": 65.53548376886538,
        "gradeBand": "descent"
      },
      {
        "lat": 24.134279,
        "lng": 120.610317,
        "ele": 64,
        "distanceKm": 22.46383483517148,
        "gradePct": -0.6124617564164673,
        "smoothedEle": 65.38132841931481,
        "gradeBand": "descent"
      },
      {
        "lat": 24.134743436573647,
        "lng": 120.61032686438845,
        "ele": 64.77260192420451,
        "distanceKm": 22.515487597387736,
        "gradePct": -0.32515513889581743,
        "smoothedEle": 65.28457359936654,
        "gradeBand": "descent"
      },
      {
        "lat": 24.135208216421713,
        "lng": 120.61032172890269,
        "ele": 65.89888494683646,
        "distanceKm": 22.56717145716654,
        "gradePct": -0.23189478926497115,
        "smoothedEle": 65.1752032471316,
        "gradeBand": "descent"
      },
      {
        "lat": 24.135673,
        "lng": 120.610317,
        "ele": 67.25,
        "distanceKm": 22.618855332159537,
        "gradePct": -0.25334130113704223,
        "smoothedEle": 64.99475474743247,
        "gradeBand": "descent"
      },
      {
        "lat": 24.135681666666667,
        "lng": 120.61077966666666,
        "ele": 66.41666666666664,
        "distanceKm": 22.66581403353123,
        "gradePct": -0.34766039983989694,
        "smoothedEle": 64.68230022872845,
        "gradeBand": "descent"
      },
      {
        "lat": 24.135690333333333,
        "lng": 120.61124233333334,
        "ele": 65.58333333333336,
        "distanceKm": 22.712772731723042,
        "gradePct": -0.47031103768044774,
        "smoothedEle": 64.34903695075343,
        "gradeBand": "descent"
      },
      {
        "lat": 24.135699,
        "lng": 120.611705,
        "ele": 64.75,
        "distanceKm": 22.75973142673209,
        "gradePct": -0.6377593296477025,
        "smoothedEle": 63.91542874380167,
        "gradeBand": "descent"
      },
      {
        "lat": 24.136228,
        "lng": 120.611816,
        "ele": 63,
        "distanceKm": 22.819622329946355,
        "gradePct": -0.8562366776976584,
        "smoothedEle": 63.27717793054169,
        "gradeBand": "descent"
      },
      {
        "lat": 24.136618,
        "lng": 120.611945,
        "ele": 62,
        "distanceKm": 22.864920985603383,
        "gradePct": -0.963320878718381,
        "smoothedEle": 62.761600647125434,
        "gradeBand": "descent"
      },
      {
        "lat": 24.137177,
        "lng": 120.612096,
        "ele": 61.25,
        "distanceKm": 22.928939746135143,
        "gradePct": -1.1875686782697954,
        "smoothedEle": 61.8246162691631,
        "gradeBand": "descent"
      },
      {
        "lat": 24.137664,
        "lng": 120.612236,
        "ele": 59.75,
        "distanceKm": 22.984924174394006,
        "gradePct": -1.391663613038039,
        "smoothedEle": 60.86362515786929,
        "gradeBand": "descent"
      },
      {
        "lat": 24.137968,
        "lng": 120.612353,
        "ele": 59.5,
        "distanceKm": 23.020751747288866,
        "gradePct": -1.580834379201923,
        "smoothedEle": 60.102654443518446,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13847,
        "lng": 120.612562,
        "ele": 61,
        "distanceKm": 23.08046466165862,
        "gradePct": -1.8297315238938971,
        "smoothedEle": 58.874638948646975,
        "gradeBand": "descent"
      },
      {
        "lat": 24.138719,
        "lng": 120.613074,
        "ele": 59.75,
        "distanceKm": 23.13933560794825,
        "gradePct": -1.926469173245099,
        "smoothedEle": 57.79322953787487,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13888952745518,
        "lng": 120.61344458236555,
        "ele": 58.73336336907061,
        "distanceKm": 23.181449599446882,
        "gradePct": -1.9371790786531375,
        "smoothedEle": 57.0489092215083,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13902,
        "lng": 120.613836,
        "ele": 56,
        "distanceKm": 23.22373418684842,
        "gradePct": -1.8534511682594252,
        "smoothedEle": 56.33441726795669,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139103188261625,
        "lng": 120.61429254354411,
        "ele": 53.183957518456104,
        "distanceKm": 23.270974909266986,
        "gradePct": -1.7369002457076332,
        "smoothedEle": 55.59599829999637,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139158494118895,
        "lng": 120.61475512936777,
        "ele": 53.33068581406944,
        "distanceKm": 23.318315388588655,
        "gradePct": -1.6487364383738972,
        "smoothedEle": 54.88188028346751,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139215088015163,
        "lng": 120.61521753018842,
        "ele": 52.939483766142835,
        "distanceKm": 23.365656059830265,
        "gradePct": -1.5692353322269224,
        "smoothedEle": 54.18957268767636,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13927168191143,
        "lng": 120.61567993100907,
        "ele": 52.54828171821623,
        "distanceKm": 23.41299671048666,
        "gradePct": -1.4075424065204856,
        "smoothedEle": 53.70076594956181,
        "gradeBand": "descent"
      },
      {
        "lat": 24.1393282758077,
        "lng": 120.6161423318297,
        "ele": 52.15707967028959,
        "distanceKm": 23.46033734055636,
        "gradePct": -1.1884009491297547,
        "smoothedEle": 53.3854720661797,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139383,
        "lng": 120.616605,
        "ele": 51.75,
        "distanceKm": 23.50767766598505,
        "gradePct": -0.9028340530912754,
        "smoothedEle": 53.2366792759481,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13945272798013,
        "lng": 120.61715299040794,
        "ele": 52.86743557901617,
        "distanceKm": 23.563820975909945,
        "gradePct": -0.5127175046862771,
        "smoothedEle": 53.19097385328045,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139522569873932,
        "lng": 120.6177009636864,
        "ele": 54.19941312849411,
        "distanceKm": 23.6199642850009,
        "gradePct": -0.29820056944509793,
        "smoothedEle": 53.05795998625092,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139592,
        "lng": 120.618249,
        "ele": 55.25,
        "distanceKm": 23.676107584431453,
        "gradePct": -0.23352282415473707,
        "smoothedEle": 52.8688598260152,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139651999999998,
        "lng": 120.618644,
        "ele": 54.25,
        "distanceKm": 23.71674020215815,
        "gradePct": -0.23706789671877446,
        "smoothedEle": 52.75516580836226,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139712,
        "lng": 120.619039,
        "ele": 53.25,
        "distanceKm": 23.757372801329968,
        "gradePct": -0.21976091719286905,
        "smoothedEle": 52.756701380662065,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139768999999998,
        "lng": 120.61946625,
        "ele": 52.562500000000014,
        "distanceKm": 23.801187205956726,
        "gradePct": -0.1463089240190852,
        "smoothedEle": 52.809828505967424,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139826,
        "lng": 120.6198935,
        "ele": 51.87500000000003,
        "distanceKm": 23.845001591458047,
        "gradePct": -0.0399691869113569,
        "smoothedEle": 52.89369171534452,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139883,
        "lng": 120.62032075,
        "ele": 51.187499999999986,
        "distanceKm": 23.88881595783383,
        "gradePct": 0.05019331892879837,
        "smoothedEle": 52.93368719866206,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13994,
        "lng": 120.620748,
        "ele": 50.5,
        "distanceKm": 23.93263030508398,
        "gradePct": 0.12844388508587248,
        "smoothedEle": 53.01265409148152,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.139978832159066,
        "lng": 120.62116057245015,
        "ele": 51.618511523034776,
        "distanceKm": 23.97471652682384,
        "gradePct": 0.22250231727228434,
        "smoothedEle": 53.2227361372732,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140019,
        "lng": 120.621573,
        "ele": 52.75,
        "distanceKm": 24.01680361266731,
        "gradePct": 0.29801483621274477,
        "smoothedEle": 53.435748863169216,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140254,
        "lng": 120.62226,
        "ele": 54,
        "distanceKm": 24.091250708365862,
        "gradePct": 0.3815819149615236,
        "smoothedEle": 53.7012391958493,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140398,
        "lng": 120.622718,
        "ele": 55.25,
        "distanceKm": 24.14040536485259,
        "gradePct": 0.44446537100619016,
        "smoothedEle": 53.94039564603105,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140598,
        "lng": 120.62321,
        "ele": 57.25,
        "distanceKm": 24.195058185573817,
        "gradePct": 0.517960761253507,
        "smoothedEle": 54.361611620424924,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140686205411733,
        "lng": 120.623624106255,
        "ele": 56.331616191411435,
        "distanceKm": 24.23820721780936,
        "gradePct": 0.5995215322570701,
        "smoothedEle": 54.71112063058837,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140814,
        "lng": 120.624029,
        "ele": 54.75,
        "distanceKm": 24.281679981927073,
        "gradePct": 0.6579113456847333,
        "smoothedEle": 54.98293113540928,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140767099607668,
        "lng": 120.62446009564869,
        "ele": 53.84405818100866,
        "distanceKm": 24.325733170013898,
        "gradePct": 0.6619877536032833,
        "smoothedEle": 55.19298524018695,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140691,
        "lng": 120.624888,
        "ele": 54,
        "distanceKm": 24.369969653718822,
        "gradePct": 0.5831933893666543,
        "smoothedEle": 55.334638015339856,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.14060909729953,
        "lng": 120.6253983662163,
        "ele": 54.6822373747541,
        "distanceKm": 24.42255142157893,
        "gradePct": 0.3854338073361219,
        "smoothedEle": 55.3551756248999,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140526738491562,
        "lng": 120.625908643257,
        "ele": 55.51855159468802,
        "distanceKm": 24.475133119685285,
        "gradePct": 0.1241681336781224,
        "smoothedEle": 55.19033359128497,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140443735871962,
        "lng": 120.62641879545623,
        "ele": 55.75,
        "distanceKm": 24.527714895137525,
        "gradePct": 0.02283454697650819,
        "smoothedEle": 55.245000156407954,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140361,
        "lng": 120.626929,
        "ele": 55.75,
        "distanceKm": 24.580296734944394,
        "gradePct": 0.12042133862280877,
        "smoothedEle": 55.57951428770289,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.14029233333333,
        "lng": 120.627371,
        "ele": 55.666666666666664,
        "distanceKm": 24.625792072009173,
        "gradePct": 0.25826360002598836,
        "smoothedEle": 55.86154348384281,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140223666666667,
        "lng": 120.627813,
        "ele": 55.583333333333336,
        "distanceKm": 24.67128743282298,
        "gradePct": 0.42446273500551057,
        "smoothedEle": 56.051315173324674,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140155,
        "lng": 120.628255,
        "ele": 55.5,
        "distanceKm": 24.716782817383038,
        "gradePct": 0.44086269003861545,
        "smoothedEle": 56.115360018007436,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.140099,
        "lng": 120.628604,
        "ele": 56.5,
        "distanceKm": 24.752739432771115,
        "gradePct": 0.33674010517714353,
        "smoothedEle": 56.07768098618341,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.139882,
        "lng": 120.629067,
        "ele": 57.5,
        "distanceKm": 24.805554619122947,
        "gradePct": 0.11442360161076733,
        "smoothedEle": 55.964937114508224,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.139596,
        "lng": 120.629529,
        "ele": 57,
        "distanceKm": 24.86220316526425,
        "gradePct": -0.0914837397515743,
        "smoothedEle": 55.83045510935824,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139345479335965,
        "lng": 120.62989562321312,
        "ele": 56.3158072624873,
        "distanceKm": 24.908678584994895,
        "gradePct": -0.1938454599221664,
        "smoothedEle": 55.71626059355125,
        "gradeBand": "descent"
      },
      {
        "lat": 24.139096739667984,
        "lng": 120.63026381160657,
        "ele": 55.53290363124362,
        "distanceKm": 24.955163184773326,
        "gradePct": -0.23653296956977682,
        "smoothedEle": 55.59944109607284,
        "gradeBand": "descent"
      },
      {
        "lat": 24.138848,
        "lng": 120.630632,
        "ele": 54.75,
        "distanceKm": 25.001647842970257,
        "gradePct": -0.28628632059682346,
        "smoothedEle": 55.40070421609781,
        "gradeBand": "descent"
      },
      {
        "lat": 24.138572,
        "lng": 120.63103225,
        "ele": 54.625,
        "distanceKm": 25.052553403503396,
        "gradePct": -0.41365941666290745,
        "smoothedEle": 55.02604453051053,
        "gradeBand": "descent"
      },
      {
        "lat": 24.138296,
        "lng": 120.6314325,
        "ele": 54.50000000000001,
        "distanceKm": 25.103459033985377,
        "gradePct": -0.5193920792307108,
        "smoothedEle": 54.690301367144585,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13802,
        "lng": 120.63183275,
        "ele": 54.375,
        "distanceKm": 25.154364734415505,
        "gradePct": -0.555418201661974,
        "smoothedEle": 54.49061126202144,
        "gradeBand": "descent"
      },
      {
        "lat": 24.137744,
        "lng": 120.632233,
        "ele": 54.25,
        "distanceKm": 25.20527050479308,
        "gradePct": -0.45961839382489156,
        "smoothedEle": 54.4548050103288,
        "gradeBand": "descent"
      },
      {
        "lat": 24.137453,
        "lng": 120.632656,
        "ele": 53,
        "distanceKm": 25.25902374219036,
        "gradePct": -0.20439622295326815,
        "smoothedEle": 54.574577591463594,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13721349529186,
        "lng": 120.63300638257246,
        "ele": 53.668249605596166,
        "distanceKm": 25.303446311994108,
        "gradePct": -0.0077560070284121985,
        "smoothedEle": 54.67487325975098,
        "gradeBand": "descent"
      },
      {
        "lat": 24.13697484857393,
        "lng": 120.63335746736819,
        "ele": 54.29397382005944,
        "distanceKm": 25.347868930656013,
        "gradePct": 0.1597767932116773,
        "smoothedEle": 54.83564623313515,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.136736424286966,
        "lng": 120.63370873368409,
        "ele": 55.02198691002972,
        "distanceKm": 25.39229161059585,
        "gradePct": 0.2868687018708488,
        "smoothedEle": 55.03767154715052,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.136498,
        "lng": 120.63406,
        "ele": 55.75,
        "distanceKm": 25.436714343866406,
        "gradePct": 0.37525846488547776,
        "smoothedEle": 55.27538487861199,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.136318,
        "lng": 120.634486,
        "ele": 56.25,
        "distanceKm": 25.484350997367528,
        "gradePct": 0.47938613034130906,
        "smoothedEle": 55.59053281105879,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.136186455088033,
        "lng": 120.63496914953724,
        "ele": 55.795451659400285,
        "distanceKm": 25.53551355990069,
        "gradePct": 0.7674633447124349,
        "smoothedEle": 56.325856745228926,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.136054,
        "lng": 120.635452,
        "ele": 56.5,
        "distanceKm": 25.586676133081703,
        "gradePct": 1.0432270371312884,
        "smoothedEle": 57.098587571712386,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13590034162098,
        "lng": 120.63602794858734,
        "ele": 56.91695201147509,
        "distanceKm": 25.647566372441293,
        "gradePct": 1.32674587460813,
        "smoothedEle": 58.00066996587515,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.135747,
        "lng": 120.636604,
        "ele": 57.5,
        "distanceKm": 25.708456821728294,
        "gradePct": 1.4077148574594438,
        "smoothedEle": 58.75241877694994,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.135547,
        "lng": 120.637299,
        "ele": 61,
        "distanceKm": 25.78240483318873,
        "gradePct": 1.2343795427514523,
        "smoothedEle": 59.50283533788076,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.1354155,
        "lng": 120.637775,
        "ele": 61.625,
        "distanceKm": 25.832871443353547,
        "gradePct": 1.1504932794602287,
        "smoothedEle": 60.08395271950685,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.135284,
        "lng": 120.638251,
        "ele": 62.25,
        "distanceKm": 25.883338101057948,
        "gradePct": 1.0936731972250444,
        "smoothedEle": 60.62965137488902,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.135094,
        "lng": 120.638849,
        "ele": 61.5,
        "distanceKm": 25.947592649559247,
        "gradePct": 1.0278437860272192,
        "smoothedEle": 61.20525257038449,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13500440683349,
        "lng": 120.63921155078573,
        "ele": 61.044529923884085,
        "distanceKm": 25.985707435263787,
        "gradePct": 0.9757000200580065,
        "smoothedEle": 61.49226447216702,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134914,
        "lng": 120.639574,
        "ele": 61.25,
        "distanceKm": 26.02383605182789,
        "gradePct": 0.8029508491619551,
        "smoothedEle": 61.585812893182904,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134854,
        "lng": 120.64013,
        "ele": 62.25,
        "distanceKm": 26.080649252346962,
        "gradePct": 0.5029554535430396,
        "smoothedEle": 61.60648761777393,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134838666666667,
        "lng": 120.640543,
        "ele": 61.916666666666664,
        "distanceKm": 26.12259311021555,
        "gradePct": 0.33078268636872227,
        "smoothedEle": 61.64286858749341,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134823333333333,
        "lng": 120.640956,
        "ele": 61.583333333333336,
        "distanceKm": 26.164536973106603,
        "gradePct": 0.23851887899680418,
        "smoothedEle": 61.80988444797893,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134808,
        "lng": 120.641369,
        "ele": 61.25,
        "distanceKm": 26.206480841017235,
        "gradePct": 0.2865962377300388,
        "smoothedEle": 62.116424422518044,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134794333333332,
        "lng": 120.64180866666666,
        "ele": 61.33333333333333,
        "distanceKm": 26.251121921528462,
        "gradePct": 0.4408142687341561,
        "smoothedEle": 62.477370951187496,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134780666666668,
        "lng": 120.64224833333334,
        "ele": 61.41666666666667,
        "distanceKm": 26.295763006806503,
        "gradePct": 0.5635602204953136,
        "smoothedEle": 62.746717321271184,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134767,
        "lng": 120.642688,
        "ele": 61.5,
        "distanceKm": 26.340404096848502,
        "gradePct": 0.5444256242392191,
        "smoothedEle": 62.80264123074956,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134745,
        "lng": 120.643037,
        "ele": 63.75,
        "distanceKm": 26.3759032983831,
        "gradePct": 0.4206427918336908,
        "smoothedEle": 62.73423898151724,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134733363052497,
        "lng": 120.64350830594445,
        "ele": 65.14968203144294,
        "distanceKm": 26.42374662802619,
        "gradePct": 0.2447684119848974,
        "smoothedEle": 62.74556418204092,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.13471,
        "lng": 120.643979,
        "ele": 65.25,
        "distanceKm": 26.47158096729128,
        "gradePct": 0.17781852378087912,
        "smoothedEle": 62.956449659660265,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.134226,
        "lng": 120.64398,
        "ele": 64.25,
        "distanceKm": 26.525399481790387,
        "gradePct": 0.30190614361108564,
        "smoothedEle": 63.38765655908299,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.133801002411488,
        "lng": 120.64397572264886,
        "ele": 62.61132442988528,
        "distanceKm": 26.572659115998515,
        "gradePct": 0.5103547317279064,
        "smoothedEle": 63.761199553798946,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.133376,
        "lng": 120.643972,
        "ele": 60.75,
        "distanceKm": 26.6199188030359,
        "gradePct": 0.621520922818553,
        "smoothedEle": 63.98769992674592,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.132936333333333,
        "lng": 120.64396766666667,
        "ele": 62.50000000000004,
        "distanceKm": 26.66880955085601,
        "gradePct": 0.43074579058134943,
        "smoothedEle": 63.80572299996058,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.132496666666665,
        "lng": 120.64396333333333,
        "ele": 64.24999999999996,
        "distanceKm": 26.717700298690115,
        "gradePct": 0.16296506039706019,
        "smoothedEle": 63.651898970663005,
        "gradeBand": "moderate"
      },
      {
        "lat": 24.132057,
        "lng": 120.643959,
        "ele": 66,
        "distanceKm": 26.76659104653742,
        "gradePct": -0.10737019497365846,
        "smoothedEle": 63.498496777417174,
        "gradeBand": "descent"
      },
      {
        "lat": 24.131654,
        "lng": 120.6439555,
        "ele": 65.12500000000003,
        "distanceKm": 26.811404071368123,
        "gradePct": -0.24353083994018207,
        "smoothedEle": 63.45982989583333,
        "gradeBand": "descent"
      },
      {
        "lat": 24.131251,
        "lng": 120.643952,
        "ele": 64.25,
        "distanceKm": 26.856217096208102,
        "gradePct": -0.10274237705770553,
        "smoothedEle": 63.64710879497118,
        "gradeBand": "descent"
      },
      {
        "lat": 24.130786,
        "lng": 120.643947,
        "ele": 61,
        "distanceKm": 26.907925297978302,
        "gradePct": 0.23437211144359166,
        "smoothedEle": 64.15139809222713,
        "gradeBand": "moderate"
      }
    ],
    "summary": {
      "distanceKm": 26.907925297978302,
      "elevationGainM": 173.6003791204101,
      "elevationLossM": 173.60037912041145,
      "minimumElevationM": 50.5,
      "maximumElevationM": 206.25,
      "maximumSustainedGradePct": 8.248491269676023
    },
    "climbs": [
      {
        "startIndex": 0,
        "endIndex": 255,
        "startDistanceKm": 0,
        "endDistanceKm": 12.345278943332419,
        "distanceKm": 12.345278943332419,
        "gainM": 159.78693888815172,
        "averageGradePct": 1.2943161480725496,
        "maximumGradePct": 8.248491269676023
      }
    ]
  }
});
})(typeof window !== "undefined" ? window : globalThis);
